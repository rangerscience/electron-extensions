function PWCHANGER() {
    var h = 2,
        m = "",
        g = [],
        _ = "",
        k = "",
        w = "",
        v = "",
        b = "",
        T = "",
        P = 0,
        E = 0,
        S = "",
        A = "",
        O = [],
        x = 100100,
        C = 10,
        u = "",
        I = [],
        R = !1,
        j = !1,
        K = !1,
        N = "";

    function F() {
        return "undefined" != typeof $ ? $.ajax : LPPlatform.doAjax
    }

    function H(t, a, i, o, r, e, s, n, u, c, d, l, f, p, y) {
        var h = void 0 !== f ? f : "",
            g, _;
        void 0 !== p && p && (C = p), void 0 !== d && null != d || (d = ""), "function" != typeof s && (s = function() {}), S = d, A = l, m = n, "function" == typeof u && u(0, 0), L(i, a, o, e, function(e) {
            if ("string" == typeof e)
                if ("usernametaken" != e) {
                    "function" == typeof u && u(0, 1);
                    var n = {
                        oldkey: t,
                        oldkey1: h,
                        oldpwhash: a,
                        oldemail: i,
                        newemail: o,
                        newpassword: r,
                        callback: s,
                        reencrypt: e,
                        status: u,
                        foundendmarker: !1
                    };
                    y && (n.ks = "true"), O = n, setTimeout(function() {
                        J()
                    }, 0)
                } else s(1, !1, !1, "B : Username Taken");
            else s(4, !1, !1, "A : Invalid Response")
        }, function(e, n, t) {
            s(2, !1, !1, "C : " + n + " suberror=" + t)
        }, c)
    }

    function L(a, i, o, r, s, u, c) {
        var e = function() {
            var e = void 0 !== i && null != i && "" != i ? {
                wxusername: a,
                wxhash: i
            } : {};
            void 0 !== c && null != c && "" != c && (e.vendor = c);
            var n = m + "getaccts.php?changepw=1&changepw2=1&includersaprivatekeyenc=1&changeun=" + (a != o ? encodeURIComponent(o) : "") + "&resetrsakeys=" + (r ? "1" : "0") + "&includeendmarker=1",
                t;
            "undefined" != typeof g_recovery_uid && (n += "&recovery_uid=" + encodeURIComponent(g_recovery_uid)), F()({
                url: n,
                type: "POST",
                data: e,
                timeout: 3e5,
                success: "function" == typeof s ? s : null,
                error: "function" == typeof u ? u : null
            })
        };
        n(function() {
            t(function() {
                e()
            }, u)
        }, u)
    }

    function X(l, f, p, y, h) {
        "" === p && y();
        var e = S || token,
            n;
        F()({
            url: m + "lmiapi/one-time-password",
            type: "POST",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                masterPasswordHash: p
            }),
            headers: {
                "X-CSRF-TOKEN": e
            },
            success: function(n, t) {
                if ("object" == typeof n.oneTimePasswords)
                    if (I = [], 0 !== n.oneTimePasswords.length) {
                        var e = [];
                        try {
                            for (var a = fix_username(O.newemail), i = 0; i < n.oneTimePasswords.length; i++) {
                                var o = n.oneTimePasswords[i],
                                    r = {},
                                    s = dec(o.encryptedOneTimePassword, l),
                                    u = AES.hex2bin(s),
                                    c = make_lp_hash(a, u),
                                    d = make_lp_key(a, u);
                                o.oneTimePasswordHash = c, o.randomEncryptedKey = enc(AES.bin2hex(l), d), r.encryptedOneTimePassword = enc(s, f), r.randomEncryptedKey = enc(AES.bin2hex(f), d), r.oneTimePasswordHash = c, e.push(r), I.push(o)
                            }
                        } catch (e) {
                            return void("function" == typeof h && h(n, t, "OTP Encryption failed"))
                        }
                        G(e, p, y, h)
                    } else "function" == typeof y && y();
                else "function" == typeof h && h(n, t, "Invalid one time password response")
            },
            error: function(e, n) {
                "function" == typeof h && h(e, n, "GET one time passwords failed")
            }
        })
    }

    function f(e) {
        0 !== I.length ? G(I, pwhash, e, function() {
            "function" == typeof e && e()
        }) : "function" == typeof e && e()
    }

    function G(e, n, t, a) {
        "" === n && t();
        var i = JSON.stringify({
                oneTimePasswords: e,
                masterPasswordHash: n
            }),
            o = S || token,
            r;
        F()({
            url: m + "lmiapi/one-time-password/update",
            type: "POST",
            contentType: "application/json",
            headers: {
                "X-CSRF-TOKEN": o
            },
            data: i,
            dataType: "json",
            success: t,
            error: function(e, n) {
                "function" == typeof a && a(e, n, "POST new one time passwords failed")
            }
        })
    }

    function U(i, o, r, s) {
        var e = S || token,
            n;
        F()({
            url: m + "lmiapi/authenticator/backup",
            type: "GET",
            contentType: "application/json",
            dataType: "json",
            headers: {
                "X-CSRF-TOKEN": e
            },
            success: function(n, t) {
                var e;
                try {
                    u = n.userData;
                    var a = dec(n.userData, i);
                    e = enc(a, o)
                } catch (e) {
                    return void("function" == typeof s && s(n, t, "Encryption failed"))
                }
                c(e, r, s)
            },
            error: function(e, n) {
                e.status && 404 == e.status ? "function" == typeof r && r() : "function" == typeof s && s(e, n, "GET new LP cloud backup failed")
            }
        })
    }

    function p(e) {
        u ? c(u, e, function() {
            "function" == typeof e && e()
        }) : "function" == typeof e && e()
    }

    function c(e, n, t) {
        var a = JSON.stringify({
                userData: e
            }),
            i = S || token,
            o;
        F()({
            url: m + "lmiapi/authenticator/backup",
            type: "POST",
            contentType: "application/json",
            headers: {
                "X-CSRF-TOKEN": i
            },
            data: a,
            dataType: "json",
            success: n,
            error: function(e, n) {
                "function" == typeof t && t(e, n, "POST new LP cloud backup failed")
            }
        })
    }

    function D() {
        var e = null,
            n = O.callback;
        "function" == typeof n && n(2, !1, !1, e)
    }

    function J() {
        try {
            if (2 == h) {
                g = O.reencrypt.split("\n"), "number" == typeof g_target_key_iterations && (x = g_target_key_iterations, "undefined" != typeof g_key_iterations && g_key_iterations != g_target_key_iterations && (O.iterationschange = "1")), b = O.newkey || make_lp_key_iterations(fix_username(O.newemail), O.newpassword, x), _ += g[0] + "\n";
                var e = g[1];
                if ("" != e) {
                    var n = rsa_extract_privatekey(e, O.oldkey);
                    "" == n && "" != O.oldkey1 && (n = rsa_extract_privatekey(e, O.oldkey1)), N = "" == n ? (k = "", "failed") : (k = rsa_encrypt_privatekey(n, b), n = null, "success"), w = SHA256(AES.bin2hex(b).toUpperCase()), v = SHA256(k)
                }
            }
            if (void 0 === g.length) return void O.callback(2, !1, !1, "F2 : internal error");
            var t, a, i = !1;
            try {
                enc(" ", b) && (i = !0)
            } catch (e) {}
            for (var o = h + 3; h < g.length && h < o; ++h) {
                var r, s = g[h].replace(/\r\n|\r|\n/g, "").split("\t");
                if (l = s[0], "endmarker" != l) {
                    var u = void 0 !== s.length && 2 <= s.length && "0" == s[1];
                    if (void 0 !== l.length && l.length) {
                        var c = null;
                        if (i) try {
                            t = dec(l, O.oldkey), a = enc(t, b)
                        } catch (e) {
                            c = e
                        }
                        if (!i || null != c || !AES.ok(a) || 0 == a.length || null == t || void 0 === t.length || 0 == t.length) {
                            if (!u) {
                                if (i) null != (t = dec(l, b)) && void 0 !== t.length && 0 != t.length || (T += "enc: " + l + " decrypted:  reencrypted to: " + a + (null == c ? "" : " : EXCEPTION_A!") + "\n");
                                else {
                                    var d = void 0 === b.length ? "undefined" : b.length;
                                    T += "encrypting <space> using m_newkey (m_newkey.length=" + d + ") resulted in EXCEPTION_B!\n"
                                }
                                P++
                            }
                            a = i ? l : ""
                        }
                        u || E++, _ += l + ":" + a + "\n", "function" == typeof O.status && O.status(1, (h - 1) / (g.length - 2))
                    }
                } else O.foundendmarker = !0
            }
            if (h < g.length) return void setTimeout(function() {
                J()
            }, 0);
            if (!O.foundendmarker) return void("function" == typeof O.callback && O.callback(2, !1, !1, "D : Data download not complete"));
            void 0 !== C && C || (C = 10);
            var f = S || token;
            if ("" != T && E / 100 * C <= P) {
                var p = {
                        from: "passwordChange",
                        errors: T,
                        username: O.oldemail,
                        private_key_status: N,
                        total: g.length - 2,
                        mandatory_total: E,
                        mandatory_failed: P,
                        super_admin_reset: j ? "yes" : "no"
                    },
                    y;
                return F()({
                    url: m + "debug.php",
                    data: p,
                    type: "POST",
                    timeout: 6e5,
                    headers: {
                        "X-CSRF-TOKEN": f
                    },
                    success: function(e) {},
                    error: function(e, n) {}
                }), void("function" == typeof O.callback && O.callback(3, null, null, "E : " + T))
            }
            "function" == typeof tracelog && tracelog("Re encryption finished."), U(O.oldkey, b, function() {
                O.iterationschange ? X(O.oldkey, b, O.oldpwhash, B, D) : B()
            }, D)
        } catch (e) {
            O.callback(2, !1, !1, "F : " + e.message)
        }
    }
    this.hashMigration = function(t, a, i, o, r, e, n, s, u, c) {
        if (void 0 === c && (c = ""), R = K = j = !1, m = e, S = n, x = s, C = 0, "function" != typeof u && (u = function() {}), t !== o) {
            var d = function(e, n, t, a) {
                    0 === e ? u(!0) : u(!1, a)
                },
                l, f;
            L(i, a, i, !1, function(e) {
                var n;
                "string" == typeof e ? "usernametaken" != e ? (O = {
                    oldkey: t,
                    oldkey1: c,
                    oldpwhash: a,
                    oldemail: i,
                    newemail: i,
                    newkey: o,
                    newpwhash: r,
                    callback: d,
                    reencrypt: e,
                    foundendmarker: !1,
                    iterationschange: "1",
                    hashmigration: "1"
                }, setTimeout(function() {
                    J()
                }, 0)) : u(!1, "Username taken or deleted during hash migration") : u(!1, "Invalid response")
            }, function() {
                u(!1, "Error retrieving accounts data during hash migration")
            })
        } else u(!1, "Hash migration already happened? Maybe stale extension data")
    }, this.recoveryChangePassword = function(e, n, t, a, i, o, r, s) {
        var u = "",
            c, d = K = j = !(R = !0);
        H(e, n, t, t, a, !1, i, "", o, null, r, s)
    }, this.superAdminPasswordReset = function(e, n, t, a, i, o, r, s) {
        var u = "",
            c, d = "",
            l = K = !(j = !(R = !1));
        H(e, "", n, t, a, !1, i, "", o, null, r, s)
    }, this.setInitialPassword = function(e, n, t, a, i, o, r, s) {
        var u = "",
            c, d = "",
            l = !(K = !(j = R = !1));
        H(e, "", n, t, a, !1, i, "", o, null, r, s)
    }, this.changepw = function(e, n, t, a, i, o, r, s, u, c, d, l, f, p, y) {
        K = j = R = !1, H(e, n, t, a, i, o, r, s, u, c, d, l, f, p, y)
    };
    var n = function(n, t) {
            var e;
            Array.isArray(window.g_su_pubkeys) && Array.isArray(window.g_su_uids) ? n() : F()({
                url: m + "lmiapi/users/me/publicsharingkeys",
                type: "GET",
                contentType: "application/json",
                dataType: "json",
                headers: {
                    "X-CSRF-TOKEN": S
                },
                success: function(e) {
                    window.g_su_pubkeys = e.map(function(e) {
                        return e.publicSharingKey
                    }), window.g_su_uids = e.map(function(e) {
                        return e.userId
                    }), n && n()
                },
                error: function(e, n) {
                    D(), t && t(e, n, "Cannot GET sharing keys")
                }
            })
        },
        t = function(t, a) {
            var e;
            Array.isArray(window.g_lu_pubkeys) && Array.isArray(window.g_lu_uids) ? t() : (window.g_lu_pubkeys = [], window.g_lu_uids = [], F()({
                url: m + "lmiapi/emergency-access/sharees",
                type: "GET",
                contentType: "application/json",
                dataType: "json",
                headers: {
                    "X-CSRF-TOKEN": S
                },
                success: function(e) {
                    e.forEach(function(e) {
                        window.g_lu_pubkeys.push(e.publicSharingKey), window.g_lu_uids.push(e.userId)
                    }), t && t()
                },
                error: function(e, n) {
                    404 !== e.status ? (D(), a && a(e, n, "Request for emergency access keys failed")) : t()
                }
            }))
        };

    function B() {
        "function" == typeof tracelog && tracelog("Update data to server.");
        var e = O.newpwhash || make_lp_hash_iterations(b, O.newpassword, x),
            a = {
                reencrypt: _,
                newprivatekeyenc: k,
                newuserkeyhexhash: w,
                newprivatekeyenchexhash: v,
                newpasswordhash: e,
                pwupdate: "1",
                email: O.newemail,
                token: S,
                encrypted_username: encecb(O.newemail, b),
                origusername: O.oldemail,
                key_iterations: x
            };
        if (O.iterationschange && (a.iterationschange = O.iterationschange), O.hashmigration && (a.hashmigration = O.hashmigration, a.ks = !0), R && (a.is_recovery = "1"), j && (a.superAdminReset = "1"), K && (a.setInitialPassword = "1"), void 0 !== O.oldpwhash && null != O.oldpwhash && "" != O.oldpwhash && (a.wxusername = O.oldemail, a.wxhash = O.oldpwhash), void 0 !== O.ks && O.ks && (a.ks = "true"), void 0 !== A && null != A && (a.password_hint = A), "undefined" != typeof g_su_pubkeys && null != g_su_pubkeys && g_su_pubkeys.length) {
            for (var n = !1, i = 0, t = 0; t < g_su_pubkeys.length; t++)
                if ("" != g_su_pubkeys[t]) {
                    var o = new RSAKey;
                    parse_public_key(o, g_su_pubkeys[t]) && (a["sukey" + i] = o.encrypt(AES.bin2hex(b)), a["suuid" + i] = g_su_uids[t], n = !0, i++)
                } if (a.sukeycnt = i, 0 == n && "function" == typeof O.callback) return void O.callback(2, !1, !1, "G : Please tell your administrator that all users marked as Administrators must log into a browser extension once in order to properly setup account recovery.")
        }
        if ("undefined" != typeof g_lu_pubkeys && null != g_lu_pubkeys) {
            var i = 0;
            g_lu_pubkeys.forEach(function(e, n) {
                if (e) {
                    var t = new RSAKey;
                    parse_public_key(t, e) && (a["lukey" + i] = t.encrypt(AES.bin2hex(b)), a["luuid" + i] = g_lu_uids[n], i++)
                }
            }), a.lukeycnt = i
        }
        "undefined" != typeof g_recovery_uid && (a.recovery_uid = g_recovery_uid), "undefined" != typeof g_changeiterations && 1 == g_changeiterations && (a.iterationschange = "1"), "undefined" != typeof g_sapr_pwd && "undefined" != typeof g_sapr_newpwd && (a.to_be_federated = 1, a.fed_keyALP = g_sapr_keyALP, a.fed_keyLP = g_sapr_keyLP, a.fed_keyLPCheckHash = g_sapr_keyLPCheckHash, a.fed_fragmentId = g_sapr_fragmentId, a.fed_pwdlastset = g_sapr_lastPwdSet), document.URL.includes("familiesinvite=1") && (a.familiesinvite = 1), "undefined" != typeof fromcid && (a.cid = fromcid), "undefined" != typeof g_oid_fragmentId && (a.fedOId_fragmentId = g_oid_fragmentId), "undefined" != typeof g_isFederatedEmailChng && (a.fedEmailChange = g_isFederatedEmailChng);
        var r = O.callback,
            s = b,
            u = O.newemail,
            c = O.status,
            d;
        O = new Array, g = new Array, h = 2, T = b = _ = "", E = P = 0, "function" == typeof c && c(2, 0), F()({
            url: m + "settings.php",
            data: a,
            type: "POST",
            timeout: 6e5,
            success: function(e) {
                "function" == typeof c && c(2, 1), -1 != e.indexOf("pwchangeok") ? "function" == typeof r && r(0, s, u) : 0 <= e.indexOf("reusepass") ? p(function() {
                    f(function() {
                        r(2, !1, !1, "H : " + e.split("\n")[1])
                    })
                }) : 0 == e.indexOf("error\n") ? p(function() {
                    f(function() {
                        r(2, !1, !1, e.split("\n")[1])
                    })
                }) : p(function() {
                    f(function() {
                        r(2, !1, !1, "I : An error occured")
                    })
                })
            },
            error: function(e, n, t) {
                p(function() {
                    f(function() {
                        "function" == typeof r && r(2, !1, !1, "J : " + n + " suberror=" + t)
                    })
                })
            }
        })
    }
}
String.prototype.includes || (String.prototype.includes = function(e, n) {
    "use strict";
    return "number" != typeof n && (n = 0), !(n + e.length > this.length) && -1 !== this.indexOf(e, n)
});
//# sourceMappingURL=sourcemaps/pwchanger.js.map