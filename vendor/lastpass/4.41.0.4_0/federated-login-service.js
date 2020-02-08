var FederatedLoginService = function() {
    var e;
    return function() {
        var c = this;
        c.isFederated = function(e, r, t) {
            o(e, function(e) {
                r(0 < e.type, e.type)
            }, t)
        }, c._handleError = function(e, r) {
            e && e(r ? r.toString() : ""), r && setTimeout(function() {
                throw r
            }, 0)
        }, c._getAuthInfo = function(e, r, t, n) {
            o(e, function(e) {
                c._ajax({
                    type: "GET",
                    dataType: "json",
                    url: e.IdentityProviderURL + "/auth/saml2/getauthinfo/" + r,
                    success: t,
                    error: u(n)
                })
            }, n)
        }, c._initiate = function(e, t, n) {
            o(e, function(r) {
                switch (r.type) {
                    case 3:
                        t(r);
                        break;
                    case 2:
                        a(e, r, function(e) {
                            t(r, e)
                        }, n);
                        break;
                    case 1:
                        t(r);
                        break;
                    default:
                        c._handleError(n, new Error("User is not provisioned for federated login"))
                }
            }, n)
        }, c._decryptK1WithPrivateKey = function(e, r) {
            return r.decrypt(e, "RSA-OAEP", {
                md: forge.md.sha384.create()
            })
        }, c._assemblePassword = function(e, r, t, n, o) {
            var a = atob(t.k1),
                i = atob(t.k2);
            r && (a = c._decryptK1WithPrivateKey(a, r.privateKey));
            var s = l(a, i);
            c._ajax({
                type: "POST",
                dataType: "json",
                contentType: "application/json",
                url: "lmiapi/login/getLocalKeyPart",
                data: {
                    username: e,
                    keyHash: d(s),
                    authSessionId: t.authSessionId
                },
                success: function(e) {
                    e && e.localKey ? n(d(l(s, atob(e.localKey)))) : c._handleError(o, new Error("Could not retrieve local key"))
                },
                error: u(o)
            })
        }, c.OIDC_PROVIDERS = {
            Azure: 0,
            Okta: 1,
            OktaWithoutAuthorizationServer: 2
        }, c.processMicrosoftGraphApiResponse = function(e) {
            var r;
            if ((r = "string" == typeof e ? JSON.parse(e) : e).extensions)
                for (var t = 0; t < r.extensions.length; t++)
                    if ("com.lastpass.keys" === r.extensions[t].id) return r.extensions[t].LastPassK1
        }, c._getKeysForAzure = function(t, n, o, a) {
            c._ajax({
                type: "GET",
                url: "https://graph.microsoft.com/v1.0/me?$select=id,displayName,mail&$expand=extensions",
                beforeSend: function(e) {
                    e.setRequestHeader("Authorization", "Bearer " + t.accessToken)
                },
                success: function(e) {
                    var r = c.processMicrosoftGraphApiResponse(e);
                    r ? n(r, t, o, a) : c._handleError(a, new Error("Could not retrieve K1 from Azure"))
                },
                error: u(a)
            })
        }, c._getKeysForOkta = function(e, r, t, n) {
            var o = e.oktaK1;
            o ? r(btoa(o), e, t, n) : c._handleError(n, new Error("Could not retrieve K1 from Okta"))
        }, c._getK2FromAlp = function(r, e, t, n) {
            c._ajax({
                type: "POST",
                dataType: "json",
                contentType: "application/json",
                url: e.alpUrl + "/federatedlogin/api/v1/getkey",
                data: JSON.stringify({
                    company_id: e.companyId,
                    id_token: e.idToken
                }),
                success: function(e) {
                    e && e.k2 ? t(d(l(atob(r), atob(e.k2))), void 0, e.fragment_id, d(atob(r))) : c._handleError(n, new Error("Could not retrieve K2 from ALP"))
                },
                error: u(n)
            })
        }, c._assemblePasswordForOIDC = function(e, r, t) {
            var n = function() {
                t(gs("Unknown OpenIDConnect provider") + " " + provider)
            };
            e.provider == c.OIDC_PROVIDERS.Azure ? n = c._getKeysForAzure : e.provider != c.OIDC_PROVIDERS.Okta && !c.OIDC_PROVIDERS.OktaWithoutAuthorizationServer || (n = c._getKeysForOkta), n(e, c._getK2FromAlp, r, t)
        }, c.getOIDCProviderName = function(e) {
            switch (e) {
                case 0:
                    return "Azure AD";
                case 1:
                case 2:
                    return "Okta";
                default:
                    return ""
            }
        }, c._keypairSaved = function() {}, c._cache = {}, c.clearCache = function() {
            c._cache = {}
        };
        var o = ("undefined" != typeof g_oldFederatedEmail && (g_oldFederatedEmail = ""), "undefined" != typeof g_newFederatedEmail && (g_newFederatedEmail = ""), function(r, t, n) {
                c._cache[r] ? t(c._cache[r]) : c._ajax({
                    type: "GET",
                    dataType: "json",
                    url: "lmiapi/login/type",
                    data: {
                        username: r
                    },
                    success: function(e) {
                        e ? (e.OldEmail && "" !== e.OldEmail ? "undefined" != typeof g_oldFederatedEmail && (g_oldFederatedEmail = e.OldEmail, g_newFederatedEmail = r) : c._cache[r] = e, t(e)) : c._handleError(n, new Error("Could not retrieve login data: " + e))
                    },
                    error: u(n)
                })
            }),
            u = function(n) {
                return function(e, r, t) {
                    c._handleError(n, new Error(t))
                }
            },
            e = function(t) {
                forge.rsa.generateKeyPair({
                    bits: 2048,
                    workers: 2
                }, function(e, r) {
                    t(e, r)
                })
            },
            a = function(t, n, o, a) {
                e(function(e, r) {
                    e ? a(e) : c._ajax({
                        type: "POST",
                        dataType: "json",
                        contentType: "application/json",
                        url: "lmiapi/federatedPublicKey/savePublicKey",
                        data: {
                            email: t,
                            publickey: i(r).publicKey
                        },
                        success: function() {
                            c._keypairSaved(r, n), o(r)
                        },
                        error: u(a)
                    })
                })
            },
            d = function(e) {
                var r = forge.md.sha256.create();
                return r.update(e), btoa(r.digest().bytes())
            },
            l = function(e, r) {
                var t = e.length < r.length ? e.length : r.length;
                return forge.util.xorBytes(e, r, t)
            },
            r = function(e) {
                return btoa(forge.asn1.toDer(e).getBytes())
            },
            t = function(e) {
                return forge.asn1.fromDer(atob(e))
            },
            i = function(e) {
                return e ? {
                    privateKey: r(forge.pki.privateKeyToAsn1(e.privateKey)),
                    publicKey: r(forge.pki.publicKeyToAsn1(e.publicKey))
                } : e
            }
    }
}();
//# sourceMappingURL=sourcemaps/federated-login-service.js.map