var FederatedLogin = function() {
    var e;
    return new function() {
        var p = this,
            f = {},
            g = !1;
        FederatedLoginService.call(p), p._ajax = function(e) {
            "undefined" != typeof base_url && 0 !== e.url.indexOf("http") && (e.url = base_url + e.url), LPServer.ajax(e)
        }, p.login = function(o, a) {
            o = fix_username(o), p.getPassword(o, function(e, r, t, n) {
                setFragmentId(t, n), LP_do_login(o, e, a, void 0, void 0, void 0, void 0, void 0, void 0, r)
            }, lpshowError)
        };
        var v = function(e, r) {
                if (e.keypair) {
                    var t, n = (new DOMParser).parseFromString(atob(r), "application/xml"),
                        o = n.querySelector('Attribute[Name="LastPassKeyPart"]').childNodes[0].textContent,
                        a = n.querySelector('Attribute[Name="LastPassKeyPartSignature"]').childNodes[0].textContent,
                        i = p._decryptK1WithPrivateKey(atob(o), e.keypair.privateKey);
                    e.valid = !!i && s(i, a), e.submitted = !0, e.valid || p._handleError(e.error, new Error(gs("K1 not valid!")))
                }
            },
            t = function(e) {
                var r = forge.md.sha256.create();
                return r.update(e), btoa(r.digest().bytes())
            },
            s = function(e, r) {
                return t(e) === r
            },
            n = function(e) {
                var t = {},
                    r;
                return e.split("&").forEach(function(e) {
                    var r = e.split("=");
                    2 === r.length && (t[r[0]] = decodeURIComponent(r[1]))
                }), t
            },
            m = function(e) {
                try {
                    if (e && e.formData && e.formData.SAMLResponse && 1 === e.formData.SAMLResponse.length) return e.formData.SAMLResponse[0];
                    if (e && e.raw) {
                        var r = e.raw.reduce(function(e, r) {
                            return e + String.fromCharCode.apply(null, new Uint8Array(r.bytes))
                        }, "");
                        if (0 < r.length) {
                            var t = n(r);
                            if (t.SAMLResponse) return t.SAMLResponse
                        }
                    }
                } catch (e) {
                    console.log(e)
                }
                return null
            };
        p.getPasswordSaml = function(l, c, u) {
            l = fix_username(l), LPPlatform.getCurrentTabDetails(function(d) {
                p._initiate(l, function(a, i) {
                    var s = {
                        valid: !1,
                        idp: a,
                        keypair: i,
                        submitted: !1,
                        error: u
                    };
                    LPPlatform.openTab({
                        extension: !0,
                        url: a.IdentityProviderURL + "/auth/saml2/" + a.IdentityProviderGUID,
                        loadHandler: function(o) {
                            s.cleanup = LPPlatform.onBeforeNavigate(function(e, r) {
                                var t = /\/auth\/saml2\/success\/(.*)$/.exec(e);
                                if (t && 2 === t.length) return s.valid || !i ? p._getAuthInfo(l, t[1], function(r) {
                                    p._assemblePassword(l, i, r, function(e) {
                                        c(e, r.authSessionId)
                                    }, u)
                                }, u) : p._handleError(u, new Error(gs("K1 not valid!"))), s.submitted = !0, LPPlatform.closeTab(o.tabDetails), LPPlatform.activateTab(d), !1;
                                if (i && !s.valid && 0 === e.indexOf(a.IdentityProviderURL)) {
                                    var n = m(r);
                                    if (n) return v(s, n), s.valid
                                }
                            }, o.tabDetails), f[o.tabDetails.tabID] = s
                        },
                        closeHandler: function() {
                            s.submitted || p._handleError(u, new Error(gs("Federated login tab closed!")))
                        }
                    })
                })
            })
        }, p.parseJwt = function(e) {
            var r, t;
            return (new Oidc.UserManager)._joseUtil.parseJwt(e).payload
        }, p.getPassword = function(c, u, f) {
            c = fix_username(c), LPPlatform.getCurrentTabDetails(function(e) {
                p._initiate(c, function(e, r) {
                    var d = {
                        valid: !1,
                        idp: e,
                        keypair: r,
                        submitted: !1,
                        error: f
                    };
                    if (d.idp.type <= 2) p.getPasswordSaml(c, u, f);
                    else {
                        3 != d.idp.type && f(), Oidc.Log.logger = console, Oidc.Log.level = Oidc.Log.INFO;
                        var t = {
                                authority: d.idp.OpenIDConnectAuthority,
                                client_id: d.idp.OpenIDConnectClientId,
                                redirect_uri: "https://accounts.lastpass.com/federated/oidcredirect.html",
                                response_type: "id_token token",
                                scope: "openid email profile" + (2 === d.idp.Provider ? " groups" : ""),
                                signingKeys: d.idp.OpenIDConnectKeys,
                                extraQueryParams: {
                                    login_hint: c
                                }
                            },
                            l = p.getOIDCProviderName(d.idp.Provider),
                            n = new Oidc.OidcClient(t);
                        n.createSigninRequest().then(function(e) {
                            g ? g = !1 : (g = !0, LPPlatform.openTab({
                                extension: !0,
                                url: e.url,
                                closeHandler: function() {
                                    g = !1, d.submitted || p._handleError(f, new Error(gs("Federated login tab closed!")))
                                },
                                loadHandler: function() {},
                                onBeforeRequestCallback: function(e, r, s) {
                                    function t(e) {
                                        return [sprintf(gs("%s reported a problem during login."), l), sprintf(gs("Contact your %s administrator for assistance."), l), sprintf(gs("Here’s the message from %s:"), l), e].join("<br/><br/>")
                                    }
                                    /https:\/\/accounts\.lastpass\.com\/federated\/oidcredirect\.html.*/.test(e) && n.processSigninResponse(e).then(function(e) {
                                        if (d.submitted = !0, LPPlatform.closeTab({
                                                tabID: s
                                            }), g = !1, e.error) return console.log(e.error), p._handleError(f, new Error(getErrorMessage(e.error))), !1;
                                        if (!e.profile) return p._handleError(f, new Error(gs("No profile information."))), !1;
                                        var r = e.profile.email ? e.profile.email.toLowerCase() : void 0,
                                            t = e.profile.preferred_username ? e.profile.preferred_username.toLowerCase() : void 0;
                                        if (r != c.toLowerCase() && t != c.toLowerCase()) {
                                            var n = [sprintf(gs("Use the same account to log in to both %s and LastPass."), l), "<br/><br/>", sprintf(gs("Current %s account:"), l) + " " + (r || t || gs("unknown")), "<br/>", gs("Attempted LastPass account:") + " " + c].join("");
                                            return p._handleError(f, new Error(n)), !1
                                        }
                                        var o = null;
                                        if (1 == d.idp.Provider || 2 == d.idp.Provider) {
                                            var a;
                                            if (1 == d.idp.Provider) p.parseJwt(e.access_token) && (o = p.parseJwt(e.access_token).LastPassK1);
                                            else 2 == d.idp.Provider && (o = e.profile.LastPassK1);
                                            o && 33 == o.length || p._handleError(f, new Error(gs("LastPassK1 is missing or has invalid length")))
                                        }
                                        var i = {
                                            idToken: e.id_token,
                                            accessToken: e.access_token,
                                            companyId: d.idp.CompanyId,
                                            alpUrl: alp_url,
                                            provider: d.idp.Provider,
                                            oktaK1: o
                                        };
                                        return p._assemblePasswordForOIDC(i, u, f), !0
                                    }).catch(function(e) {
                                        console.log(e);
                                        var r = decodeURIComponent(e.error_description.replace(/\+/g, "%20"));
                                        p._handleError(f, new Error(t(r)))
                                    })
                                }
                            }))
                        })
                    }
                })
            })
        }, p.validateK1Encryption = function(e, r, t) {
            var n = !0,
                o = f[t.tabID];
            o && o.keypair && (v(o, e), n = o.valid), r && r(n)
        }, LPPlatform.onTabClosed(function(e) {
            f[e] && (f[e].cleanup(), delete f[e])
        })
    }
}();
//# sourceMappingURL=sourcemaps/extension-federated-login.js.map