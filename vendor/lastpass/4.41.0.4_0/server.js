var g_iterpw = null,
    jj = "",
    allowmultifactortrust = !0,
    hidemultifactordisable = !1,
    getHashMigrationData, g_authSessionId = null,
    g_fragmentIdFromAlp = null,
    g_calculatedFragmentId = null,
    g_2fa_inprocess = !1;

function lplogincheck2(l, g, u, d) {
    console_log("server.js : lplogincheck fromwebsite=" + l + " sessionid=" + g), yubikey_cleardata(), googleauth_cleardata(), outofband_cleardata(), securityquestion_cleardata(), sesame_cleardata(), grid_cleardata(), multifactor_cleardata(), loginoffline(!0, "logincheck"), console_log("logincheck getting uuid"), getuuid(function(e) {
        console_log("logincheck got uuid");
        var t = "canexpire=1&cansetuuid=1&method=" + encodeURIComponent(get_method()) + "&version=" + lpversion;
        t += get_devicetype_param(), g && (t += "&sessionid=" + LP.en(g)), u && (t += "&wxusername=" + LP.en(u)), d && (t += "&wxhash=" + LP.en(d)), isDogfood() && (t += "&dogfood=1"), g_lastpoll = lastlogin = (new Date).getTime();
        var a = 1 == lpGetPref("logoffWhenCloseBrowser", 0) && 0 == lpGetPref("logoffWhenCloseBrowserVal", 0) ? "1" : "0";
        t += "&sessonly=" + en(a);
        var r = localStorage_getItem("measure_logoffWhenCloseBrowser"),
            n = r ? JSON.parse(r) : null,
            o = {
                enabled: 1 == lpGetPref("logoffWhenCloseBrowser", 0),
                timeout: lpGetPref("logoffWhenCloseBrowserVal", 0)
            };
        if (n && n.enabled === o.enabled && n.timeout === o.timeout || (sendLpImprove("ExtensionLogoffWhenCloseBrowser", o), localStorage_setItem("measure_logoffWhenCloseBrowser", JSON.stringify(o))), console_log("logincheck getting uuid"), console_log("logincheck got uuid"), "object" == typeof e) {
            var s = 0;
            for (var i in e) t += "&uuid" + s + "=" + en(e[i]), ++s
        } else t += "&uuid=" + en(e);
        sesame_setdata("logincheckpostdata", t), lpdbg("login", "Making login check request"), lpMakeRequest(base_url + "login_check.php", t, lpLoginCheckResponse, lpLoginCheckError, l)
    }, g_username_hash)
}

function lplogincheck(e, t, a, r) {
    lplogincheck2(e, t, a, r)
}

function setFragmentId(e, t) {
    g_fragmentIdFromAlp = e, g_calculatedFragmentId = t
}

function LP_do_login(s, i, n, t, o, a, e, r, l, g) {
    var u;
    g_2fa_inprocess = !1, g_authSessionId = g;
    var d = s = fix_username(s);
    if ("undefined" != typeof g_oldFederatedEmail && "" !== g_oldFederatedEmail && (s = fix_username(g_oldFederatedEmail)), "undefined" != typeof g_newFederatedEmail && "" !== g_newFederatedEmail && (d = fix_username(g_newFederatedEmail)), e) {
        if (l && Topics.get(Topics.MANUAL_LOGIN_FINISHED).subscribe(h), Topics.get(Topics.LOGIN_FINISHED).subscribe(b), lppassusernamehash && !lploggedin && lpnp_notify("login", {
                data0: s,
                data1: i
            }), !o) {
            var _ = opendb();
            if (createSavedLoginsTable(_), _ && void 0 !== n && null != n) {
                var c = t ? i : "";
                protect_data(c, !1, d, function(t) {
                    if (n && check_email(d)) {
                        var a = t != c ? 1 : 0;
                        a || "" == c || (t = enc(t, AES.hex2bin(SHA256(s))), a = 2), console_log("server.js : saving login credentials");
                        var r = (new Date).getTime();
                        g_indexeddb ? _.transaction("LastPassSavedLogins2", "readwrite").objectStore("LastPassSavedLogins2").put({
                            username: d,
                            password: t,
                            last_login: r,
                            protected: a
                        }) : _.transaction(function(e) {
                            e.executeSql("REPLACE INTO LastPassSavedLogins2 (username, password, last_login, protected) VALUES(?, ?, ?, ?)", [d, t, r, a], function(e, t) {}, function(e, t) {
                                console_log(t)
                            })
                        })
                    } else g_indexeddb ? _.transaction("LastPassSavedLogins2", "readwrite").objectStore("LastPassSavedLogins2").delete(s) : _.transaction(function(e) {
                        e.executeSql("DELETE FROM LastPassSavedLogins2 WHERE username=?", [s], function(e, t) {}, function(e, t) {
                            console_log(t)
                        })
                    })
                })
            }
            void 0 !== n && null != n && (lpPutGblPref("rememberemail", n ? 1 : 0), lpPutGblPref("rememberpassword", t ? 1 : 0)), void 0 !== a && lpPutGblPref("showvault", a ? 1 : 0), lpWriteAllPrefs()
        }
        yubikey_cleardata(), googleauth_cleardata(), outofband_cleardata(), securityquestion_cleardata(), sesame_cleardata(), grid_cleardata(), o || multifactor_cleardata();
        var p = get_key_iterations(s);
        g_local_key = e || make_lp_key_iterations(s, i, p), getHashMigrationData = function(e) {
            if (u = null, (p = get_key_iterations(s)) < DEFAULT_KEY_ITERATIONS && s && 0 < s.length && i && 0 < i.length) {
                var t = make_lp_key_iterations(s, i, DEFAULT_KEY_ITERATIONS),
                    a = make_lp_hash_iterations(t, i, DEFAULT_KEY_ITERATIONS),
                    r = make_lp_key_iterations(s, i, p),
                    n = make_lp_key_iterations(s, i, 1),
                    o = make_lp_hash_iterations(r, i, p);
                u = {
                    algorithm: "pbkdf2",
                    data: {
                        iterations: DEFAULT_KEY_ITERATIONS,
                        key: t,
                        hash: a,
                        oldKey: r,
                        oldKey1: n,
                        oldHash: o
                    }
                }
            }
            "function" == typeof e && e(u, v)
        }, "string" == typeof i && i.length && calculateMasterStrength(s, i), r ? (g_local_hash = lphash = r, r = null) : g_local_hash = lphash = make_lp_hash_iterations(g_local_key, i, p), g_local_key_hex = AES.bin2hex(g_local_key), g_local_key_hash = SHA256(g_local_key), g_username = lpusername = s, g_username_hash = lpusername_hash = SHA256(g_username), g_retryusername = g_username;
        var f = SHA256(s),
            m = localStorage_getItem(f + "LPMPS");
        null == m ? (y(m = get_random(1e4, 9999999).toString(36) + get_random(1e4, 9999999).toString(36)), protect_data(m, !0, null, function(e) {
            localStorage_setItem(f + "LPMPS", e)
        })) : unprotect_data(m, !0, y), "true" != localStorage_getItem(g_username_hash + "_mfaEnabled") ? loginoffline(!0, "pluginlogin") : setTimeout(function() {
            loginoffline(!1, "pluginlogin")
        }, 5e3), console_log("login getting uuid"), getuuid(function(e) {
            console_log("login got uuid");
            var t = "canexpire=1&cansetuuid=1&xml=2&username=" + en(s) + "&method=" + encodeURIComponent(get_method()) + "&hash=" + en(g_local_hash) + "&version=" + lpversion;
            t += get_devicetype_param(), t += "&encrypted_username=" + en(encecb(g_username)), t += "&uuid=" + en(e), t += "&lang=" + en(lpGetPref("language", navigator.language));
            var a = get_key_iterations(s);
            if (t += "&iterations=" + en(a), "" != a && 1 < parseInt(a)) {
                var r = checkNeedsPBKDF2v2(s, i);
                t += r, "" != r && "undefined" != typeof g_oldpbkdf2 && 1 == g_oldpbkdf2 && (t += "&fallback=1")
            }
            var n = 1 == lpGetPref("logoffWhenCloseBrowser", 0) && 0 == lpGetPref("logoffWhenCloseBrowserVal", 0) ? "1" : "0";
            t += "&sessonly=" + en(n), sesame_cleardata(), sesame_setdata("postdata", t), sesame_setdata("from", "login"), yubikey_cleardata(), yubikey_setdata("postdata", t), yubikey_setdata("from", "login"), g_iterpw = enc(i, AES.hex2bin(SHA256(s))), googleauth_cleardata(), googleauth_setdata("postdata", t), googleauth_setdata("from", "login"), outofband_cleardata(), outofband_setdata("postdata", t), outofband_setdata("from", "login"), securityquestion_cleardata(), securityquestion_setdata("postdata", t), securityquestion_setdata("from", "login"), grid_cleardata(), grid_setdata("postdata", t), grid_setdata("from", "login"), o || multifactor_cleardata(), multifactor_setdata("postdata", t), multifactor_setdata("from", "login"), t += "&otp=", t += "&sesameotp=", t += "&multifactorresponse=", t += "&authsessionid=" + g, g_fragmentIdFromAlp && (t += "&alpfragmentid=" + encodeURIComponent(g_fragmentIdFromAlp)), g_calculatedFragmentId && (t += "&calculatedfragmentid=" + encodeURIComponent(g_calculatedFragmentId)), GetOTPHash(t)
        }, g_username_hash)
    } else make_lp_key_iterations(s, i, get_key_iterations(s), function(e) {
        LP_do_login(s, i, n, t, o, a, e, r, l, g)
    });

    function h() {
        Topics.get(Topics.MANUAL_LOGIN_FINISHED).unsubscribe(h), l && l()
    }

    function b() {
        Topics.get(Topics.LOGIN_FINISHED).unsubscribe(b), c = i = s = null
    }

    function v() {
        sendLpImprove("pbkdf2_iterations_migration"), u && (e = u.data.key, r = u.data.hash, localStorage_setItem(SHA256(s) + "_key_iter", u.data.iterations), getHashMigrationData = u = null, setTimeout(function() {
            Topics.get(Topics.MANUAL_LOGIN_FINISHED).unsubscribe(h), LP_do_login(s, i, n, t, o, a, e, r, l, g)
        }, 0))
    }

    function y(e) {
        getBG().make_lp_key_hash_iterations(e, i, get_key_iterations(s), function(e, t) {
            localStorage_setItem("LPMPU", f), protect_data(t, !0, null, function(e) {
                localStorage_setItem(f + "LPMPH", e)
            })
        })
    }
}

function loginoffline(n, o, s) {
    if (!g_2fa_inprocess)
        if (console_log("server.js : loginoffline from=" + o + " offline_before_online=" + n), null == g_local_key || null == g_username || null == g_username_hash) {
            if ("frompipes" == o) return;
            get_saved_logins(function(e) {
                var r = "",
                    t = "",
                    a = function(t) {
                        if ((!LPISLOC || !LPISUPEK) && 0 < r.length && 0 < t.length) {
                            g_username = lpusername = r.toLowerCase().replace(/\s*/g, ""), g_username_hash = lpusername_hash = SHA256(r);
                            var a = get_key_iterations(g_username);
                            make_lp_key_iterations(g_username, t, a, function(e) {
                                g_local_key = e, g_local_hash = lphash = make_lp_hash_iterations(g_local_key, t, a), g_local_key_hex = AES.bin2hex(g_local_key), g_local_key_hash = SHA256(g_local_key), loginoffline1(n, o, !1, s)
                            })
                        } else;
                    };
                if (0 < e.length) {
                    if (r = e[0].username, t = e[0].password, 1 == e[0].protected) return void unprotect_data(t, !1, a);
                    if (2 == e[0].protected) return void a(dec(t, AES.hex2bin(SHA256(r))));
                    a(t)
                }
                lpdbg("login", "Trying to log in offline1: skipping because we dont have the user's key")
            })
        } else loginoffline1(n, o, !1, s)
}

function read_key_from_file(t) {
    have_binary_function("read_file") ? call_binary_function("read_file", db_prepend(g_username_hash + "_lpall.slps"), function(e) {
        "string" != typeof e ? t("") : unprotect_data(e, !0, t)
    }) : t("")
}

function read_accts_from_file(t) {
    have_binary_function("read_file") ? call_binary_function("read_file", db_prepend(g_username_hash + "_lps.act.sxml"), function(e) {
        "string" != typeof e ? t("") : unprotect_data(e, !0, function(e) {
            if ("iterationserror" == (e = checkIterationsInDataFile(e))) return lpdbg("login", "Key iterations mismatch"), void t("");
            e = dec(e), t(e)
        })
    }) : t("")
}

function loginoffline1(i, l, g, u) {
    if (console_log("server.js : loginoffline1 offline_before_online=" + i + " from=" + l), i) {
        if (g_loggedinoffline) return;
        console_log("server.js : DB:opening database");
        var e = opendb();
        if (console_log("server.js : DB:opened database db=" + e), createDataTable(e), e) {
            console_log("server.js : DB:created database");
            var r = function(e, t) {
                    if (console_log("server.js : DB:inside transaction A"), 2 != t.rows.length) return console_log("server.js : DB:inside transaction B"), LPISLOC && (!LPISUPEK || g || "" == g_username || AES.hex2bin(SHA256(g_username + "")) == g_local_key ? lpshowError("LoginError", !1, !0) : (g_pwdeckey = g_local_key, lpWriteKeyFile(), g_local_accts_version = 0, LPISUPEK && (g_prompts.login_site_prompt = !0, g_prompts.edit_site_prompt = !0, g_prompts.edit_sn_prompt = !0, g_prompts.view_pw_prompt = !0, g_prompts.view_ff_prompt = !0, g_prompts.switch_identity_prompt = !0, g_prompts.switch_f_prompt = !0, g_prompts.multifactor_reprompt = !0), rewritelocalfile(), loginoffline1(i, l, !0, u))), console_log("server.js : DB:inside transaction C"), void lpdbg("login", "Trying to log in offline : offline before online failed : could not read keyfile or accts");
                    console_log("server.js : DB:inside transaction D");
                    var a = "key" == t.rows.item(0).type ? 0 : 1,
                        r = t.rows.item(a).data,
                        n = !1,
                        o = r.split("\n"),
                        s;
                    return 2 == o.length && "lastpass rocks" == dec(o[1], g_local_key) && (console_log("server.js : DB:inside transaction E"), n = !0), n ? (console_log("server.js : DB:inside transaction G"), a = "accts" == t.rows.item(0).type ? 0 : 1, "iterationserror" != (r = checkIterationsInDataFile(r = (r = t.rows.item(a).data).substring(0, 220))) ? 0 <= r.indexOf("type=sesameoffline\ndata=") || 0 <= r.indexOf("type=yubikeyoffline\ndata=") || 0 <= r.indexOf("type=trueapioffline\ndata=") || 0 <= r.indexOf("type=omnikeyoffline\ndata=") ? (console_log("server.js : DB:inside transaction H"), void lpdbg("login", "Data is encoded with multifactor key, bailing on loginoffline")) : (console_log("server.js : DB:inside transaction I"), offlineloginsuccessful(l, !0, u), void lpdbg("login", "Trying to log in offline : offline before online successful")) : void lpdbg("login", "Key iterations mismatch, bailing on loginoffline")) : (console_log("server.js : DB:inside transaction F"), LPISLOC && lpshowError("LoginError", !1, !0), void lpdbg("login", "Trying to log in offline: skipping because we have an incorrect user's key"))
                },
                t = function(e, t) {
                    lpdbg("login", "Trying to log in offline3: skipping because we dont have the user's key")
                };
            if (LPISLOC) read_key_from_file(function(a) {
                read_accts_from_file(function(t) {
                    r(tx, "" != a || "" != t ? {
                        rows: {
                            length: 2,
                            item: function(e) {
                                return 0 == e ? {
                                    type: "key",
                                    data: a
                                } : {
                                    type: "accts",
                                    data: t
                                }
                            }
                        }
                    } : {
                        rows: {
                            length: 0
                        }
                    })
                })
            });
            else if (g_indexeddb) {
                var a = {
                    rows: {
                        item: function(e) {
                            return this[e]
                        },
                        length: 0
                    }
                };
                e.transaction("LastPassData", "readonly").objectStore("LastPassData").index("username_hash").openCursor(IDBKeyRange.only(db_prepend(g_username_hash))).onsuccess = function(e) {
                    var t = e.target.result;
                    t ? ("key" != t.value.type && "accts" != t.value.type || (a.rows[a.rows.length] = t.value, a.rows.length++), t.continue()) : r(null, a)
                }
            } else e.transaction(function(e) {
                e.executeSql("SELECT * FROM LastPassData WHERE username_hash=? AND (type=? OR type=?)", [db_prepend(g_username_hash), "key", "accts"], r, t)
            })
        } else console_log("server.js : DB:failed to create database db=" + e)
    } else if (!g_loggedinoffline) {
        var e = opendb();
        if (createDataTable(e), e) {
            var r = function(e, t) {
                if (g_loggedinonline) lpdbg("login", "User is already logged in during online when logging in offline");
                else if (2 == t.rows.length) {
                    var a = "key" == t.rows.item(0).type ? 0 : 1,
                        r = t.rows.item(a).data,
                        n = !1,
                        o = r.split("\n"),
                        s;
                    if (2 == o.length && "lastpass rocks" == dec(o[1], g_local_key) && (n = !0), n)
                        if (a = "accts" == t.rows.item(0).type ? 0 : 1, "iterationserror" != (r = checkIterationsInDataFile(r = (r = t.rows.item(a).data).substring(0, 220)))) {
                            if (0 <= r.indexOf("type=sesameoffline\ndata=")) return lpdbg("sesame", "Logging in offline and existing file is protected by sesameoffline => asking user for offline password"), sesame_setdata("offline", 1), void sesame_getotp(null);
                            if (0 <= r.indexOf("type=trueapioffline\ndata=") || 0 <= r.indexOf("type=omnikeyoffline\ndata=")) {
                                lpdbg("multifactor", "Logging in offline and existing file is protected by trueapioffline => asking user for offline password");
                                var i = 0 <= r.indexOf("type=trueapioffline\ndata=") ? "trueapi" : "omnikey";
                                return multifactor_setdata("offline", 1), multifactor_setdata("type", i), void multifactor_getresponse(g_username)
                            }
                            if (0 <= r.indexOf("type=yubikeyoffline\ndata=")) return yubikey_setdata("offline", 1), void yubikey_getotp(null);
                            offlineloginsuccessful(l, !1, u), lpdbg("login", "Trying to log in offline : offline after online successful")
                        } else lpdbg("login", "Trying to log in offline: skipping because we have a key iterations mismatch");
                    else lpdbg("login", "Trying to log in offline: skipping because we have an incorrect user's key")
                } else lpdbg("login", "Trying to log in offline : offline before online failed : could not read keyfile or accts")
            };
            if (LPISLOC) read_key_from_file(function(a) {
                read_accts_from_file(function(t) {
                    r(tx, "" != a || "" != t ? {
                        rows: {
                            length: 2,
                            item: function(e) {
                                return 0 == e ? {
                                    type: "key",
                                    data: a
                                } : {
                                    type: "accts",
                                    data: t
                                }
                            }
                        }
                    } : {
                        rows: {
                            length: 0
                        }
                    })
                })
            });
            else if (g_indexeddb) {
                var a = {
                    rows: {
                        item: function(e) {
                            return this[e]
                        },
                        length: 0
                    }
                };
                e.transaction("LastPassData", "readonly").objectStore("LastPassData").index("username_hash").openCursor(IDBKeyRange.only(db_prepend(g_username_hash))).onsuccess = function(e) {
                    var t = e.target.result;
                    t ? ("key" != t.value.type && "accts" != t.value.type || (a.rows[a.rows.length] = t.value, a.rows.length++), t.continue()) : r(null, a)
                }
            } else e.transaction(function(e) {
                e.executeSql("SELECT * FROM LastPassData WHERE username_hash=? AND (type=? OR type=?)", [db_prepend(g_username_hash), "key", "accts"], r)
            })
        }
    }
}

function offlineloginsuccessful(e, t, a) {
    var r;
    console_log("server.js : offlineloginsuccessful beforeonlineattempt=" + t + " from=" + e), LPISLOC && "pluginlogin" == e && g_manual_login && (1 != lpGetPref("showvault", g_showvaultdefault) && !g_showvaultalways || (console_log("server.js : offlineloginsuccessful openvault offline version!"), openvault(1))), console_log("server.js : offlineloginsuccessful!"), handleLanguageOffline(getLanguage()), g_loggedinonline || (g_loggedinoffline = !0);
    var n = LPContentScriptFeatures.react_login,
        o;
    try {
        LPContentScriptFeatures = JSON.parse(localStorage_getItem(g_username_hash + ".lpfeatures")) || {}
    } catch (e) {
        LPContentScriptFeatures = {}
    }
    LPContentScriptFeatures.react_login = n, lploggedin = !0, lpReadAllPrefs(function() {
        drawIconAtRotation(0)
    }), loggedIn("pluginlogin" == e, !0), a && a(), console_log("RSA : offlineloginsuccessful : calling readrsaprivatekeyhexfromdb()"), readrsaprivatekeyhexfromdb(), "offline" != e && (console_log("server.js : offlineloginsuccessful : from " + e + " so calling get_accts_local!"), get_accts_local(!0)), g_notifytimerid && (clearTimeout(g_notifytimerid), g_notifytimerid = null), g_notifytimerid = setTimeout(function() {
        notifyoffline(e)
    }, t ? 3e4 : 0), g_retryonlinetimerid && (clearTimeout(g_retryonlinetimerid), g_retryonlinetimerid = null);
    var s = 3e4;
    g_retryonlinetimerid = setTimeout(function() {
        retryonlinelogin(s)
    }, s)
}

function notifyoffline(e) {
    console_log("server.js : notifyoffline from=" + e), lploggedin && g_loggedinoffline && (LPContentScriptFeatures.react_login || (lpdbg("login", "Trying to log in offline : notify user that they are logged in offline"), LPISLOC || lpshowError("LoggedInOffline", !1, !1, !1, null, !0)))
}

function retryonlinelogin(e) {
    if (console_log("server.js : retryonlinelogin delayms=" + e), lploggedin && g_loggedinoffline && !LPContentScriptFeatures.react_login) {
        var t;
        lpdbg("login", "We're still logged in offline => retrying to login online.  retryinterval=" + e / 6e4 + " minutes"), lplogincheck("retryonline");
        var a = 2 * e;
        12e5 < a && (a = 12e5), setTimeout(function() {
            retryonlinelogin(a)
        }, a)
    }
}

function lpTurnOffIcon() {
    lploggedin = !1, set_badge_text(""), drawIconAtRotation(0)
}

function lpLoginCheckResponse(e, t, a) {
    console_log("server.js : lpLoginCheckResponse fromwebsite=" + a);
    try {
        if (e && 4 == e.readyState && "function" == typeof t && (200 != e.status || null == e.responseXML || null == e.responseXML.documentElement)) return void t();
        if (4 == e.readyState && 200 == e.status && null != e.responseXML && null != e.responseXML.documentElement) {
            var r, n = e.responseXML.documentElement.getElementsByTagName("ok");
            if (0 < n.length) {
                var o = n[0].getAttribute("lpusername");
                if (g_username = lpusername = o, g_username_hash = SHA256(g_username), "retryonline" != a && 1 != a) return void lpReadAllPrefs(function() {
                    lpLoginCheckResponseStep2(e, o, a), drawIconAtRotation(0)
                })
            }
        }
        lpLoginResponse_win(e, a, !0)
    } catch (e) {
        L("logincheckresponse: " + e)
    }
}

function lpLoginCheckResponseStep2(e, t, a) {
    console_log("server.js : lpLoginCheckResponseStep2 fromwebsite=" + a);
    try {
        var r, n = e.responseXML.documentElement.getElementsByTagName("ok");
        1 == n[0].getAttribute("trustexpired") && clearuuid(t);
        var o = n[0].hasAttribute("trustuuid") ? n[0].getAttribute("trustuuid") : "";
        o && "" != o && setuuid(o, g_username_hash), lpdbg("login", "lpLoginCheckResponseStep2");
        var s = null != n[0].getAttribute("sesamepassword") && "" != n[0].getAttribute("sesamepassword"),
            i = null != n[0].getAttribute("yubikeyhash") && "" != n[0].getAttribute("yubikeyhash"),
            l = null != n[0].getAttribute("googleauthenabled") && "1" == n[0].getAttribute("googleauthenabled"),
            g = null != n[0].getAttribute("gridenabled") && "" != n[0].getAttribute("gridenabled"),
            u = null != n[0].getAttribute("multifactorenabled") && "" != n[0].getAttribute("multifactorenabled"),
            d = null != n[0].getAttribute("sesameotpok") && "" != n[0].getAttribute("sesameotpok"),
            _ = null != n[0].getAttribute("yubikeyotpok") && "" != n[0].getAttribute("yubikeyotpok"),
            c = null != n[0].getAttribute("googleauthotpok") && "" != n[0].getAttribute("googleauthotpok"),
            p = null != n[0].getAttribute("gridresponseok") && "" != n[0].getAttribute("gridresponseok"),
            f = null != n[0].getAttribute("multifactorresponseok") && "" != n[0].getAttribute("multifactorresponseok"),
            m = null != n[0].getAttribute("disableoffline") && 1 == n[0].getAttribute("disableoffline"),
            h;
        if (g_premium_trial_exp_days = n[0].getAttribute("premium_trial_days_left"), n[0].getAttribute("model") && (g_lp_model = n[0].getAttribute("model")), n[0].getAttribute("do_totp") && (g_do_totp = "1" == n[0].getAttribute("do_totp")), console_log("server.js : ***** disableoffline=" + m), !("websitelogin" == a || "webrootwebsitelogin" == a || "websiterefresh" == a || "websiterefreshrsa" == a || "2ndfactorok" == a || "frompipes" == a) && (null == g_local_key || "" == g_local_key) && 1 == lpGetPref("logoffWhenCloseBrowser", 0)) {
            var b = lpGetPref("lastpollcheck", 0),
                v = pref_numeric_validate(lpGetPref("logoffWhenCloseBrowserVal", 0), 0),
                y = 1e3 * lp_get_gmt_timestamp() - b;
            if (console_log("server.js : " + b + " " + v + " " + y), 6e4 * v <= y) return loggedOut(!1, "logoffWhenCloseBrowser lastpollcheck=" + b + " logoffWhenCloseBrowserVal=" + v + " timesincelastpollcheck=" + y), void(1 == lpGetPref("openloginstart", LPISUPEK ? 1 : 0) && (g_reprompt_callback = null, g_reprompt_error_callback = null, open_login()))
        }
        if ("httptest" == a) {
            if (s) {
                if (localStorage_setItem(g_username_hash + "_mfaEnabled", "true"), !d) return lpdbg("login", "LoginCheck : Asking for sesame OTP and reissuing request to login_check.php"), lpdbg("sesame", "LOGIN CHECK RESPONSE: sesameenabled => Asking user for OTP and then reissuing the login_check request"), sesame_setdata("fromwebsite", a), void lpCheckForKey(function() {
                    sesame_getotp(t, n[0])
                });
                a = "2ndfactorok", lpdbg("login", "LoginCheck : sesame reprompt-rerequest succeeded!")
            }
            if (i) {
                if (localStorage_setItem(g_username_hash + "_mfaEnabled", "true"), !_) return lpdbg("login", "LoginCheck : Asking for yubikey OTP and reissuing request to login_check.php"), lpdbg("yubikey", "LOGIN CHECK RESPONSE: yubikeyenabled => Asking user for OTP and then reissuing the login_check request"), yubikey_setdata("fromwebsite", a), void lpCheckForKey(function() {
                    yubikey_getotp(t, n[0])
                });
                a = "2ndfactorok", lpdbg("login", "LoginCheck : yubikey reprompt-rerequest succeeded!")
            }
            if (l) {
                if (localStorage_setItem(g_username_hash + "_mfaEnabled", "true"), !c) return lpdbg("login", "LoginCheck : Asking for googleauth OTP and reissuing request to login_check.php"), lpdbg("googleauth", "LOGIN CHECK RESPONSE: googleauthenabled => Asking user for OTP and then reissuing the login_check request"), googleauth_setdata("fromwebsite", a), void lpCheckForKey(function() {
                    googleauth_getotp(t, n[0])
                });
                a = "2ndfactorok", lpdbg("login", "LoginCheck : googleauth reprompt-rerequest succeeded!")
            }
            if (g) {
                if (localStorage_setItem(g_username_hash + "_mfaEnabled", "true"), !p) return lpdbg("login", "LoginCheck : Asking for grid response and reissuing request to login_check.php"), lpdbg("grid", "LOGIN CHECK RESPONSE: gridenabled => Asking user for coordinates and then reissuing the login_check request"), grid_setdata("fromwebsite", a), grid_setdata("wxsessid", n[0].getAttribute("wxsessid")), void grid_getvalues(t, n[0].getAttribute("challenge"), n[0]);
                a = "2ndfactorok", lpdbg("login", "LoginCheck : grid reprompt-rerequest succeeded!")
            }
            if (u) {
                if (localStorage_setItem(g_username_hash + "_mfaEnabled", "true"), !f) return lpdbg("login", "LoginCheck : Asking for multifactor response and reissuing request to login_check.php"), lpdbg("multifactor", "LOGIN CHECK RESPONSE: multifactorenabled => Asking user for coordinates and then reissuing the login_check request"), multifactor_setdata("fromwebsite", a), multifactor_setdata("wxsessid", n[0].getAttribute("wxsessid")), multifactor_setdata("type", n[0].getAttribute("type")), void multifactor_getresponse(t, n[0].getAttribute("challenge"));
                a = "2ndfactorok", lpdbg("login", "LoginCheck : multifactor reprompt-rerequest succeeded!"), "omnikey" == multifactor_getdata("type") && multifactor_setdata("password_offline", n[0].getAttribute("multifactorofflinepassword"))
            }
        }
        u || g || l || i || s || localStorage_setItem(g_username_hash + "_mfaEnabled", "false"), lpLoginResponse_win(e, a, !0)
    } catch (e) {
        console_log(e.message)
    }
}

function lpLoginResponse2(e, t, a) {
    console_log("server.js : lpLoginResponse fromwebsite=" + a);
    try {
        if (console_log("server.js : Got login response"), e && 4 == e.readyState && "function" == typeof t && (200 != e.status || null == e.responseXML || null == e.responseXML.documentElement)) return void t();
        console_log("server.js : Processing login response"), lpLoginResponse_win(e, a, !1)
    } catch (e) {
        console.error(e)
    }
}

function lpLoginResponse(e, t, a) {
    lpLoginResponse2(e, t, a)
}

function lp_login_from_saved() {
    console_log("server.js : lp_login_from_saved");
    try {
        get_saved_logins(function(e) {
            if (0 < e.length) {
                var t = e[0].username,
                    a = e[0].password;
                if ("" != a) {
                    var r = function(e) {
                        LPISLOC && LPISUPEK || "" == e || (console_log("server.js : Logging in from saved"), LP_do_login(t, e, !0, !0))
                    };
                    return void(1 == e[0].protected ? unprotect_data(a, !1, r) : 2 == e[0].protected && r(dec(a, AES.hex2bin(SHA256(e[0].username)))))
                }
            }
            1 == lpGetPref("openloginstart", LPISUPEK ? 1 : 0) && (g_reprompt_callback = null, g_reprompt_error_callback = null, open_login())
        })
    } catch (e) {
        console_log(e.message)
    }
}

function lpLoginCommon(e) {
    LPContentScriptFeatures.react_login || (e ? sendLpEvent("login_check_success", {
        binary: have_binary() ? "true" : "false"
    }) : (sendLpEvent("login_success", {
        mfa: g_multifactorProvider,
        binary: have_binary() ? "true" : "false"
    }), g_multifactorProvider = "")), console_log("server.js : lpLoginCommon bIsLoginCheck=" + e), g_loggedinonline = !0, g_loggedinoffline = !1, g_notifytimerid && (clearTimeout(g_notifytimerid), g_notifytimerid = null), g_retryonlinetimerid && (clearTimeout(g_retryonlinetimerid), g_retryonlinetimerid = null)
}
var lploginerrorhandlercalled = 0;

function lpLoginError() {
    console_log("server.js : lpLoginError"), console_log("server.js : Got Login Error");
    var e = (new Date).getTime();
    e - lploginerrorhandlercalled < 1e3 || (lploginerrorhandlercalled = e, lpdbg("login", "Login via login.php failed => try logging in offline using saved credentials -- if not already logged in offline --"), loginoffline(!1, "ErrorHandler"))
}

function lpLoginCheckError() {
    console_log("server.js : lpLoginCheckError"), lpdbg("login", "Got lpLoginCheckError"), g_loggedinoffline || (lpshowError("ErrorLoginMsg"), loggedOut(!1, "lpLoginCheckError"), lp_login_from_saved())
}

function getCompanyLicenseData() {
    g_company_trial_exp_days = null, g_company_license_exp_days = null, getCompanyLicensing(function(e) {
        !1 === e.success && "TrialExpired" === e.code ? g_company_trial_exp_days = 0 : !1 === e.success && "Expired" === e.code ? g_company_license_exp_days = 0 : e.hasOwnProperty("daysleft") && e.hasOwnProperty("renewalstatus") ? (g_company_license_exp_days = e.daysleft, g_company_renewalstatus = e.renewalstatus) : e.hasOwnProperty("daysleft") && !e.hasOwnProperty("renewalstatus") ? g_company_license_exp_days = e.daysleft : e.hasOwnProperty("trialdaysleft") && (g_company_trial_exp_days = e.trialdaysleft)
    })
}

function handleLanguageFromServer(e) {
    var t = JSON.parse(localStorage_getItem("language_" + g_username_hash));
    t ? t.shouldUpdateOnNextLogin ? saveUserLanguage(t.language) : e && t.language !== e || !t ? switchLanguage(e) : g_issafari_appext && !t ? Preferences.set("language", transformLocaleCode(e)) : g_issafari_appext && t ? Preferences.set("language", transformLocaleCode(t.language)) : (include_language(transformLocaleCode(t.language)), setLanguagePreference(g_username_hash, transformLocaleCode(e))) : switchLanguage(e)
}

function handleLanguageOffline(e) {
    g_language = e, g_issafari_appext && Preferences.set("language", transformLocaleCode(e)), include_language(transformLocaleCode(e))
}

function lpLoginResponse_win(u, d, _) {
    if (console_log("server.js : lpLoginResponse_win fromwebsite=" + d + " bIsLoginCheck=" + _), u) {
        if (4 == u.readyState && 200 == u.status && null != u.responseXML && null != u.responseXML.documentElement) {
            var e = u.responseXML.documentElement,
                c = e.getElementsByTagName("ok"),
                t = !0,
                a = !1;
            if (lpdbg("login", "lpLoginResponse_win"), 0 < c.length) {
                lpdbg("login", "got login ok"), "frompipes" === d && sendLpImprove("login_with_session_sharing"), FederatedLogin.isFederated(g_username, function(e) {
                    g_is_federated_user = e
                }, function(e) {
                    console.log("FederatedLogin.isFederated failed:", e)
                });
                var r = c[0].hasAttribute("trustuuid") ? c[0].getAttribute("trustuuid") : "";
                r && "" != r && setuuid(r, g_username_hash), g_username = c[server_tries = 0].getAttribute("lpusername"), g_username_hash = SHA256(g_username);
                var p = !1;
                if (g_is_recovery_login) g_is_recovery_login = !1;
                else {
                    if ("1" == c[0].getAttribute("pwresetreqd")) {
                        var n = g_username;
                        return FederatedLogin.clearCache(), "undefined" != typeof g_oldFederatedEmail && (g_oldFederatedEmail = "", g_newFederatedEmail = ""), _ ? openurlifnotopen(base_url + "passwordreset.php?u=" + en(n)) : openURL(base_url + "passwordreset.php?u=" + en(n)), void loggedOut(!1, "pwresetreqd set")
                    }
                    if ("0" != c[0].getAttribute("pwresetreqd") && "" != c[0].getAttribute("pwresetreqd")) {
                        var n = g_username,
                            o = "&req=" + en(c[0].getAttribute("pwresetreqd"));
                        _ ? openurlifnotopen(base_url + "passwordreset.php?u=" + en(n) + o) : openURL(base_url + "passwordreset.php?u=" + en(n) + o), p = !0
                    }
                }

                function s(u) {
                    "function" == typeof getHashMigrationData ? getHashMigrationData(function(e, a) {
                        if (e) {
                            var t = e.data.key,
                                r = e.data.hash,
                                n = e.data.iterations,
                                o = e.data.oldKey,
                                s = e.data.oldKey1,
                                i = e.data.oldHash,
                                l, g;
                            return c[0].hasAttribute("token") && (l = c[0].getAttribute("token")), c[0].hasAttribute("sessionid") && (lp_phpsessid = c[0].getAttribute("sessionid")), void(new PWCHANGER).hashMigration(o, i, g_username, t, r, base_url, l, n, function(e, t) {
                                if (e) "function" == typeof a && a();
                                else {
                                    try {
                                        throw new Error("Migration failed, continuing login. " + (t || ""))
                                    } catch (e) {
                                        "undefined" != typeof Raven ? Raven.captureException(e) : console.log(e)
                                    }
                                    u()
                                }
                            }, s)
                        }
                        u()
                    }) : u()
                }
                if (LPContentScriptFeatures.pbkdf2_iterations_migration = "1" === c[0].getAttribute("pbkdf2_iterations_migration"), c[0].getAttribute("iterations")) {
                    var i = parseInt(c[0].getAttribute("iterations"));
                    localStorage_setItem(g_username_hash + "_key_iter", i)
                }
                if (LPContentScriptFeatures.pbkdf2_iterations_migration) return void s(l);

                function l() {
                    g_iterpw = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", g_pwdeckey = AES.hex2bin(SHA256(c[0].getAttribute("pwdeckey"))), g_uid = lpuid = c[0].getAttribute("uid"), localStorage_setItem(g_username_hash + "LPMPD", g_uid), g_logoff_other_ses = "1" == c[0].getAttribute("logoff_other_ses"), g_generatedpw = "1" == c[0].getAttribute("generatedpw"), countryfromip = c[0].getAttribute("country"), g_lastpollcheck = g_lastpoll = lastlogin = (new Date).getTime(), g_token = lptoken = c[0].getAttribute("token");
                    var e = c[0].getAttribute("noshare"),
                        t = c[0].getAttribute("noshareexceptfolders"),
                        a;
                    g_sharing_enabled = "1" != e && "1" != t, g_folder_sharing_enabled = "1" != e, g_new_settings_enabled = "1" === c[0].getAttribute("newsettings_enabled"), g_launch_site_tracking_enabled = "1" === c[0].getAttribute("launch_site_tracking_enabled"), g_is_legacy_premium = "1" === c[0].getAttribute("is_legacy_premium"), g_is_premium_trial = "1" === c[0].getAttribute("is_premium_trial"), g_premium_trial_exp_days = c[0].getAttribute("premium_trial_days_left"), g_is_company_subscription_expired = "1" === c[0].getAttribute("is_company_subscription_expired"), g_predates_families = "1" === c[0].getAttribute("predates_families"), g_seen_vault_post_families = "1" === c[0].getAttribute("seen_vault_post_families"), g_is_families_trial_started = "1" === c[0].getAttribute("is_families_trial_started"), g_is_premium_as_a_perk = "1" === c[0].getAttribute("is_premium_as_a_perk"), g_partner_type = c[0].getAttribute("partner_type"), g_nofolder_feature_enabled = "1" === c[0].getAttribute("nofolder_feature"), g_basicauth_feature_enabled = "1" === c[0].getAttribute("basic_auth_enabled"), g_first_time_login = "1" === c[0].getAttribute("first_time_login"), g_original_language = c[0].getAttribute("original_language") ? c[0].getAttribute("original_language") : null, !c[0].getAttribute("show_original_language_changed_notification") && JSON.parse(localStorage_getItem("language_" + g_username_hash)) && JSON.parse(localStorage_getItem("language_" + g_username_hash)).shouldUpdateOnNextLogin ? g_show_original_language_changed_notification = !1 : g_show_original_language_changed_notification = "1" === c[0].getAttribute("show_original_language_changed_notification");
                    try {
                        a = JSON.parse(localStorage_getItem(g_username_hash + ".lpfeatureOverrides")) || {}
                    } catch (e) {
                        a = {}
                    }
                    g_logoff_when_close_browser = a.logoff_when_close_browser || "1" === c[0].getAttribute("logoff_when_close_browser"), LPContentScriptFeatures.retire_3_0 = a.retire_3_0 || "1" === c[0].getAttribute("retire_3_0"), LPContentScriptFeatures.safari_legacy_messaging = (a.safari_legacy_messaging || "1" === c[0].getAttribute("safari_legacy_messaging")) && g_issafari, LPContentScriptFeatures.secondary_onboarding_visible = a.secondary_onboarding_visible || "1" === c[0].getAttribute("secondary_onboarding_visible"), LPContentScriptFeatures.secondary_onboarding_new_design_incentive = a.secondary_onboarding_new_design_incentive || "1" === c[0].getAttribute("secondary_onboarding_new_design_incentive"), LPContentScriptFeatures.secondary_onboarding_new_design_no_incentive = a.secondary_onboarding_new_design_no_incentive || "1" === c[0].getAttribute("secondary_onboarding_new_design_no_incentive"), LPContentScriptFeatures.secondary_onboarding_old_design_incentive = a.secondary_onboarding_old_design_incentive || "1" === c[0].getAttribute("secondary_onboarding_old_design_incentive"), LPContentScriptFeatures.secondary_onboarding_old_design_no_incentive = a.secondary_onboarding_old_design_no_incentive || "1" === c[0].getAttribute("secondary_onboarding_old_design_no_incentive"), LPContentScriptFeatures.password_submitted_event = a.password_submitted_event || "1" === c[0].getAttribute("password_submitted_event"), LPContentScriptFeatures.ziggy = a.ziggy || "1" === c[0].getAttribute("ziggy"), LPContentScriptFeatures.freamon = a.freamon || "1" === c[0].getAttribute("freamon"), LPContentScriptFeatures.better_generate_password_enabled = a.better_generate_password_enabled || "1" === c[0].getAttribute("better_generate_password_enabled"), LPContentScriptFeatures.is_mobile_active = a.is_mobile_active || "1" === c[0].getAttribute("mobile_active"), LPContentScriptFeatures.omaria = a.omaria || "1" === c[0].getAttribute("omar_ia"), LPContentScriptFeatures.formfill_migration = a.formfill_migration || "1" === c[0].getAttribute("formfill_migration_enabled"), LPContentScriptFeatures.family_legacy_shared_folders_enabled = a.family_legacy_shared_folders_enabled || "1" === c[0].getAttribute("family_legacy_shared_folders_enabled"), LPContentScriptFeatures.family_shared_folders_enabled = a.family_shared_folders_enabled || "1" === c[0].getAttribute("family_shared_folders_enabled"), LPContentScriptFeatures.families_provisioning_update = a.families_provisioning_update || "1" === c[0].getAttribute("families_provisioning_update"), LPContentScriptFeatures.try_families_enabled = a.try_families_enabled || "1" === c[0].getAttribute("try_families_enabled"), LPContentScriptFeatures.omardrawer = a.omardrawer || "1" === c[0].getAttribute("omar_ui_drawer_enabled"), LPContentScriptFeatures.omar_infield_b = a.omar_infield_b || "1" === c[0].getAttribute("omar_infield_b_enabled"), LPContentScriptFeatures.omar_infield_c = a.omar_infield_c || "1" === c[0].getAttribute("omar_infield_c_enabled"), LPContentScriptFeatures.isDogfood = a.isDogfood || isDogfood(), LPContentScriptFeatures.one_to_one_sharing_restricted = a.one_to_one_sharing_restricted || "1" === c[0].getAttribute("one_to_one_sharing_restricted"), LPContentScriptFeatures.emergency_access_restricted = a.emergency_access_restricted || "1" === c[0].getAttribute("emergency_access_restricted"), LPContentScriptFeatures.migration_opt_in = a.migration_opt_in || "1" === c[0].getAttribute("migration_opt_in"), LPContentScriptFeatures.license_expiration = a.license_expiration || "1" === c[0].getAttribute("license_expiration"), LPContentScriptFeatures.autofill_https_test = a.autofill_https_test || "1" === c[0].getAttribute("autofill_https_test"), LPContentScriptFeatures.logoff_when_close_browser = a.logoff_when_close_browser || "1" === c[0].getAttribute("logoff_when_close_browser"), LPContentScriptFeatures.extended_shared_folder_log = a.extended_shared_folder_log || "1" === c[0].getAttribute("extended_shared_folder_log"), LPContentScriptFeatures.crypto_unification_logging = a.crypto_unification_logging || "1" === c[0].getAttribute("crypto_unification_logging"), LPContentScriptFeatures.hide_cloud_apps_policy_enabled = a.hide_cloud_apps_policy_enabled || "1" === c[0].getAttribute("hide_cloud_apps_policy_enabled"), LPContentScriptFeatures.react_login = a.react_login || "1" === c[0].getAttribute("react_login_ext"), LPContentScriptFeatures.redux_vault_data = a.redux_vault_data || "1" === c[0].getAttribute("redux_vault_data"), LPContentScriptFeatures.icon_expanded_looks_like_username = a.icon_expanded_looks_like_username || "1" === c[0].getAttribute("icon_expanded_looks_like_username"), LPContentScriptFeatures.site_feedback = a.site_feedback || "1" === c[0].getAttribute("site_feedback"), LPContentScriptFeatures.site_feedback_new_badge = a.site_feedback_new_badge || "1" === c[0].getAttribute("site_feedback_new_badge"), LPContentScriptFeatures.field_override_global = a.field_override_global || "1" === c[0].getAttribute("field_override_global"), LPContentScriptFeatures.gift_menu_item_button = a.gift_menu_item_button || "1" === c[0].getAttribute("gift_menu_item_button"), LPContentScriptFeatures.consumer_test_experiment = a.consumer_test || parseInt(c[0].getAttribute("consumer_test_experiment")), LPContentScriptFeatures.omar_vault_migration = a.omar_vault_migration || parseInt(c[0].getAttribute("omar_vault_migration")), g_cid = c[0].getAttribute("cid"), init_countries(), localStorage_setItem(g_username_hash + ".lpfeatures", JSON.stringify(LPContentScriptFeatures));
                    var r = c[0].getAttribute("prefdata");
                    if (r) {
                        r = atob(r);
                        var n = {};
                        for (var o in parsemobile(r, r.length, 100, 0, null, [], null, null, null, null, null, null, !0, !1, null, null, null, null, null, null, n, null, null, null, null, null, null, null, null, null, null, !1), n)
                            if (void 0 === g_prefoverrides || g_prefoverrides[o] !== n[o]) {
                                g_prefoverrides = n, rewritelocalfile();
                                break
                            }
                    }
                    var s = c[0].getAttribute("pollinterval");
                    s && -1 != s && !isNaN(parseInt(s)) && isFinite(s) && (lpPutUserPref("pollServerVal", s), lpWriteAllPrefs(), g_flags.pollIntervalSetByPolicy = 1), getsinglefactortype(function(e) {
                        "1" == c[0].getAttribute("multifactor_singlefactor") ? ("" == e && ("trueapi" == multifactor_getdata("type") ? have_binary_function("trueapi_default_login_exists") && call_binary_function("trueapi_default_login_exists", g_username, function(e) {
                            e && setsinglefactortype(multifactor_getdata("type"))
                        }) : "vtapi" == c[0].getAttribute("singlefactortype") ? have_binary_function("lpvt_has_data") && call_binary_function("lpvt_has_data", function(e) {
                            e && setsinglefactortype(c[0].getAttribute("singlefactortype"))
                        }) : "validity" == c[0].getAttribute("singlefactortype") ? have_binary_function("validity_has_data") && call_binary_function("validity_has_data", function(e) {
                            e && setsinglefactortype(c[0].getAttribute("singlefactortype"))
                        }) : "winbio" == c[0].getAttribute("singlefactortype") ? have_binary_function("winbio_has_data") && call_binary_function("winbio_has_data", function(e) {
                            e && setsinglefactortype(c[0].getAttribute("singlefactortype"))
                        }) : "nymi" == c[0].getAttribute("singlefactortype") && have_binary_function("nymi_has_data") && call_binary_function("nymi_has_data", function(e) {
                            e && setsinglefactortype(c[0].getAttribute("singlefactortype"))
                        })), "nymi" == c[0].getAttribute("singlefactortype") && have_binary_function("nymi_get_version") && call_binary_function("nymi_get_version", function(e) {
                            parseInt(c[0].getAttribute("nymi_version")) > e && lpMakeRequest(base_url + "nymi_data.php", "token=" + en(c[0].getAttribute("token")) + "&action=read&b64=1", function(e) {
                                if (4 == e.readyState && 200 == e.status && e.responseXML && e.responseXML.documentElement) {
                                    var t = e.responseXML.documentElement.getElementsByTagName("ok");
                                    0 < t.length && (call_binary_function("nymi_write_data", lpatob(t[0].getAttribute("data"))), setsinglefactortype("nymi"))
                                }
                            })
                        })) : "" != e && disable_single_factor()
                    }), sesame_setdata("password_offline", c[0].getAttribute("sesamepassword")), yubikey_setdata("password_offline", c[0].getAttribute("yubikeyhash"));
                    var i = c[0].getAttribute("note_title");
                    if (i && i.length) {
                        var l = c[0].getAttribute("note_text"),
                            g = c[0].hasAttribute("note_url") ? c[0].getAttribute("note_url") : null;
                        LPNotifications.createNotification({
                            title: i,
                            message: l,
                            callback: function() {
                                openURL(g)
                            }
                        })
                    }
                    lpLoginResponse_win1_5(u, d, _), lpLoginCommon(_), lpdisableoffline = 1 == c[0].getAttribute("disableoffline") ? 1 : 0, lpdisableoffline && (lpdbg("disableoffline", "server.js : enabled => clearing sensitive files"), clearCache(!0, !1, !1, !0)), c[0].getAttribute("model") && (g_lp_model = c[0].getAttribute("model")), c[0].getAttribute("do_totp") && (g_do_totp = "1" == c[0].getAttribute("do_totp")), g_manual_login && !p && Topics.get(Topics.MANUAL_LOGIN_FINISHED).publish(), Topics.get(Topics.LOGIN_FINISHED).publish(), handleLanguageFromServer(c[0].getAttribute("language")), g_show_original_language_changed_notification && set_badge_text("i"), setTimeout(function() {
                        checkAttach()
                    }, 1e4)
                }
                l(), 1 === parseInt(c[0].getAttribute("companyadmin")) && 1 === parseInt(c[0].getAttribute("license_expiration")) && getCompanyLicenseData(), "0" == c[0].getAttribute("multifactorscore") ? localStorage_setItem(g_username_hash + "_mfaEnabled", "false") : localStorage_setItem(g_username_hash + "_mfaEnabled", "true")
            } else {
                var g;
                if (console_log(u.responseText), 0 < (g = e.getElementsByTagName("error")).length) {
                    if (lpdbg("login", "got login error"), "deactivated" == g[0].getAttribute("cause")) return clearCache(!0, !0, !0), lpshowError(0 < g.length && g[0].getAttribute("message") ? g[0].getAttribute("message") : "LoginError", !1, !0), void loggedOut(!1, "deactivated");
                    if (LPContentScriptFeatures.react_login = "1" === g[0].getAttribute("react_login_ext"), 1 == g[0].getAttribute("trustexpired") && clearuuid(g_username), g[0].getAttribute("iterations")) {
                        var i = parseInt(g[0].getAttribute("iterations"));
                        return localStorage_setItem(SHA256(g_username) + "_key_iter", i) || (DEFAULT_KEY_ITERATIONS = i), void LP_do_login(g_username, dec(g_iterpw, AES.hex2bin(SHA256(g_username))))
                    }
                    if (g[0].getAttribute("pbkdf2fallback") && ("undefined" == typeof g_oldpbkdf2 || 1 != g_oldpbkdf2)) {
                        g_oldpbkdf2 = 1;
                        var f = yubikey_getdata("p");
                        return LP_do_login(g_username, dec(g_iterpw, AES.hex2bin(SHA256(g_username)))), void(g_iterpw = null)
                    }
                    if ("undefined" != typeof g_oldpbkdf2 && (g_oldpbkdf2 = 0), g[0].getAttribute("server")) {
                        var m = g[0].getAttribute("server");
                        return "lastpass.com" != m && "lastpass.eu" != m || (base_url = "https://" + m + "/", lpPutGblPref("server", m), LP_do_login(g_username, dec(g_iterpw, AES.hex2bin(SHA256(g_username))), void 0, void 0, void 0, void 0, void 0, void 0, void 0, g_authSessionId)), void(g_iterpw = null)
                    }
                    if (g[0].getAttribute("openurl")) {
                        var h = g[0].getAttribute("openurl");
                        openURL(h)
                    }
                    if (g[0].hasAttribute("invalidsession")) return openURL(base_url + "invalidsession.php"), lpshowError(0 < g.length && g[0].getAttribute("message") ? g[0].getAttribute("message") : "LoginError", !1, !0), loggedOut(!1, "invalidsession"), void(g_iterpw = null);
                    if (a = 1 == parseInt(g[0].getAttribute("silent")), allowmultifactortrust = !0, 0 < u.responseText.indexOf("allowmultifactortrust=") && (allowtrust_str = u.responseXML.childNodes[0].childNodes[0].getAttribute("allowmultifactortrust"), allowmultifactortrust = "false" != allowtrust_str), hidemultifactordisable = !1, 0 < u.responseText.indexOf("hidedisable=") && (hidedisable_str = u.responseXML.childNodes[0].childNodes[0].getAttribute("hidedisable"), hidemultifactordisable = "false" != hidedisable_str), g[0].hasAttribute("cause") && "sesameotprequired" === g[0].getAttribute("cause")) return lpdbg("sesame", "LOGIN RESPONSE: sesameenabled => Asking user for OTP and then reissuing the login request"), sesame_setdata("fromwebsite", d), sesame_getotp(g_username, g[0]), g_2fa_inprocess = !0, g_iterpw = null, void(g_multifactorProvider = "sesame");
                    if (g[0].hasAttribute("cause") && "sesameotpfailed" === g[0].getAttribute("cause")) return lpshowError(0 < g.length && g[0].getAttribute("message") ? g[0].getAttribute("message") : "LoginError", !1, !0), loggedOut(!1, "sesameotpfailed"), void(g_iterpw = null);
                    if (g[0].hasAttribute("cause") && "otprequired" === g[0].getAttribute("cause")) return lpdbg("yubikey", "LOGIN RESPONSE: yubikeyenabled => Asking user for OTP and then reissuing the login request"), yubikey_setdata("fromwebsite", d), yubikey_getotp(g_username, g[0]), g_2fa_inprocess = !0, g_iterpw = null, void(g_multifactorProvider = "yubikey");
                    if (g[0].hasAttribute("cause") && "otpfailed" === g[0].getAttribute("cause")) return lpshowError(0 < g.length && g[0].getAttribute("message") ? g[0].getAttribute("message") : "LoginError", !1, !0), loggedOut(!1, "otpfailed"), void(g_iterpw = null);
                    var b = !1;
                    if (g[0].hasAttribute("cause") && "googleauthfailed" === g[0].getAttribute("cause")) {
                        var v;
                        if (null == (v = googleauth_getdata("fail_count")) && (v = 0), googleauth_setdata("fail_count", ++v), !(v < 5)) return googleauth_setdata("fail_count", 0), lpshowError(0 < g.length && g[0].getAttribute("message") ? g[0].getAttribute("message") : "LoginError", !1, !0), loggedOut(!1, "otpfailed"), void(g_iterpw = null);
                        b = !0
                    }
                    var y = !1;
                    if (g[0].hasAttribute("cause") && "microsoftauthfailed" === g[0].getAttribute("cause")) {
                        var v;
                        if (null == (v = googleauth_getdata("fail_count")) && (v = 0), googleauth_setdata("fail_count", ++v), !(v < 5)) return googleauth_setdata("fail_count", 0), lpshowError(0 < g.length && g[0].getAttribute("message") ? g[0].getAttribute("message") : "LoginError", !1, !0), loggedOut(!1, "otpfailed"), void(g_iterpw = null);
                        y = !0
                    }
                    var w = !1,
                        k = !1;
                    if (g[0].hasAttribute("cause") && "securityquestionfailed" === g[0].getAttribute("cause")) {
                        var A = securityquestion_getdata("fail_count");
                        if (null == A && (A = 0), securityquestion_setdata("fail_count", ++A), !(A < 5)) return securityquestion_setdata("fail_count", 0), lpshowError(0 < g.length && g[0].getAttribute("message") ? g[0].getAttribute("message") : "LoginError", !1, !0), loggedOut(!1, "otpfailed"), void(g_iterpw = null);
                        0 < g.length && g[0].getAttribute("message") && alert(g[0].getAttribute("message")), k = !0
                    }
                    if (g[0].hasAttribute("cause") && "microsoftauthrequired" === g[0].getAttribute("cause") || y) return lpdbg("microsoftauth", "LOGIN RESPONSE: microsoftauthenabled => Asking user for OTP and then reissuing the login request"), googleauth_setdata("fromwebsite", d), microsoftauth_getotp(g_username, g[0]), g_2fa_inprocess = !0, g_iterpw = null, void(g_multifactorProvider = "microsoftauth");
                    if (g[0].hasAttribute("cause") && "googleauthrequired" === g[0].getAttribute("cause") || b) return lpdbg("googleauth", "LOGIN RESPONSE: googleauthenabled => Asking user for OTP and then reissuing the login request"), googleauth_setdata("fromwebsite", d), googleauth_getotp(g_username, g[0]), g_2fa_inprocess = !0, g_iterpw = null, void(g_multifactorProvider = "googleauth");
                    if (g[0].hasAttribute("cause") && "outofbandrequired" === g[0].getAttribute("cause")) return lpdbg("outofband", "LOGIN RESPONSE: outofbandenabled => Asking user for OTP and then reissuing the login request"), outofband_setdata("fromwebsite", d), outofband_getotp(g_username, g[0]), g_2fa_inprocess = !0, g_iterpw = null, void(g[0].hasAttribute("outofbandtype") && (g_multifactorProvider = g[0].getAttribute("outofbandtype")));
                    if (g[0].hasAttribute("cause") && "securityquestionrequired" === g[0].getAttribute("cause") || k) return lpdbg("securityquestion", "LOGIN RESPONSE: securityquestionenabled => Asking user for answer and then reissuing the login request"), securityquestion_setdata("fromwebsite", d), securityquestion_getotp(g_username, g[0]), g_2fa_inprocess = !0, void(g_iterpw = null);
                    if (g[0].hasAttribute("cause") && "gridresponserequired" === g[0].getAttribute("cause")) return lpdbg("grid", "LOGIN RESPONSE: gridenabled => Asking user for grid response and then reissuing the login request"), grid_setdata("fromwebsite", d), grid_setdata("wxsessid", g[0].getAttribute("wxsessid")), grid_getvalues(g_username, g[0].getAttribute("challenge"), g[0]), void(g_2fa_inprocess = !0);
                    if (g[0].hasAttribute("cause") && "gridresponsefailed" === g[0].getAttribute("cause")) return lpshowError(0 < g.length && g[0].getAttribute("message") ? g[0].getAttribute("message") : "LoginError", !1, !0), loggedOut(!1, "gridresponsefailed"), void(g_iterpw = null);
                    if (g[0].hasAttribute("cause") && "multifactorresponserequired" === g[0].getAttribute("cause")) return lpdbg("multifactor", "LOGIN RESPONSE: multifactorenabled => Asking user for multifactor response and then reissuing the login request"), multifactor_setdata("fromwebsite", d), multifactor_setdata("wxsessid", g[0].getAttribute("wxsessid")), multifactor_setdata("type", g[0].getAttribute("type")), multifactor_getresponse(g_username, g[0].getAttribute("challenge")), g_2fa_inprocess = !0, void(g_iterpw = null);
                    if (g[0].hasAttribute("cause") && "multifactorresponsefailed" === g[0].getAttribute("cause")) {
                        var g, L = (g = e.getElementsByTagName("error")) && 0 < g.length && g[0].getAttribute("type") ? g[0].getAttribute("type") : multifactor_getdata("type");
                        return lpshowError(0 < g.length && g[0].getAttribute("message") ? g[0].getAttribute("message") : "LoginError", !1, !0, !1, get_multifactor_disable_url(g_username, L)), loggedOut(!1, "multifactorresponsefailed"), void(g_iterpw = null)
                    }
                }
                if (a) lp_login_from_saved();
                else if (0 < u.responseText.indexOf("blacklist")) clearCache(!0, !1, !1), lpshowError(0 < g.length && g[0].getAttribute("message") ? g[0].getAttribute("message") : "Your account has been temporarily suspended because of too many login attempt failures.", !1, !0, !1, null, !1, g[0].getAttribute("custombutton"), g[0].getAttribute("customaction"));
                else {
                    var S = 0 < g.length && g[0].getAttribute("cause") && "unknownemail" == g[0].getAttribute("cause");
                    try_alternativeServer() ? LP_do_login(g_retryusername, dec(g_iterpw, AES.hex2bin(SHA256(g_username)))) : lpshowError(0 < g.length && g[0].getAttribute("message") ? g[0].getAttribute("message") : "LoginError", !1, !0, S, null, !1, g[0].getAttribute("custombutton"), g[0].getAttribute("customaction"), 1 == g[0].getAttribute("trialavailable"), LPContentScriptFeatures && "context" === LPContentScriptFeatures.intro_tutorial_version)
                }
            }
            localStorage_setItem("react_login", LPContentScriptFeatures.react_login)
        } else lpshowError("ErrorLoginMsg");
        g_iterpw = null
    }
}
var server_tries = 0;

function try_alternativeServer() {
    return ("undefined" == typeof g_disable_alternative_server || !g_disable_alternative_server) && ("https://lastpass.com/" != original_base && "https://lastpass.eu/" != original_base && (3 == ++server_tries || "https://lastpass.com/" == base_url || "https://lastpass.eu/" == base_url ? base_url = original_base : base_url = "https://lastpass.com/", lpPutGblPref("server", base_url.substr(8, base_url.length - 1)), 3 != server_tries || (server_tries = 0, !1)))
}

function disable_single_factor() {
    getsinglefactortype(function(e) {
        "trueapi" == e && have_binary_function("trueapi_delete_default_login") && call_binary_function("trueapi_delete_default_login"), setsinglefactortype("")
    })
}

function lpLoginResponse_win1_5(e, t, a) {
    console_log("server.js : lpLoginResponse_win1_5 fromwebsite=" + t + " bIsLoginCheck=" + a);
    var r, n = e.responseXML.documentElement.getElementsByTagName("ok");
    if (null == g_local_key || "" == g_local_key) {
        var o;
        if (!("websitelogin" == t || "webrootwebsitelogin" == t || "websiterefresh" == t || "websiterefreshrsa" == t || "2ndfactorok" == t || "frompipes" == t) && 1 == lpGetPref("logoffWhenCloseBrowser", 0)) return void lpReadAllPrefs(function() {
            lpLoginResponse_win1_75(e, t, a), drawIconAtRotation(0)
        });
        lpReadKeyFile(e, t, !1, a)
    } else lpWriteKeyFile(), lpReadAllPrefs(function() {
        lpLoginResponse_win2(e, t, a), drawIconAtRotation(0)
    })
}

function lpLoginResponse_win1_75(e, t, a) {
    console_log("server.js : lpLoginResponse_win1_75 fromwebsite=" + t + " bIsLoginCheck=" + a);
    var r = lpGetPref("lastpollcheck", 0),
        n = pref_numeric_validate(lpGetPref("logoffWhenCloseBrowserVal", 0), 0),
        o = 1e3 * lp_get_gmt_timestamp() - r;
    6e4 * n <= o ? loggedOut(!1, "lpLoginResponse_win1_75 lastpollcheck=" + r + " logoffWhenCloseBrowserVal=" + n + " timesincelastpollcheck=" + o) : lpReadKeyFile(e, t, !1, a)
}

function lpLoginResponse_win2(e, t, a) {
    console_log("server.js : lpLoginResponse_win2 fromwebsite=" + t + " bIsLoginCheck=" + a);
    var r, n = (r = e.responseXML.documentElement).getElementsByTagName("ok");
    closeallnotifications(!0, !0), lp_phpsessid = n[0].getAttribute("sessionid"), loggedIn(), g_server_accts_version = parseInt(n[0].getAttribute("accts_version")), lp_server_attach_version = parseInt(n[0].getAttribute("attachversion")), console_log("server.js : lpLoginResponse_win2 lp_server_attach_version=" + lp_server_attach_version), g_server_accts_version != g_local_accts_version && (g_local_accts_version = -1), g_loglogins = parseInt(n[0].getAttribute("loglogins")), g_isadmin = 1 == parseInt(n[0].getAttribute("isadmin")), g_iscompanyadmin = 1 == parseInt(n[0].getAttribute("companyadmin")), g_showcredmon = 1 == parseInt(n[0].getAttribute("showcredmon")), iconsversion = parseInt(n[0].getAttribute("iconsversion")), g_multifactorscore = parseInt(n[0].getAttribute("multifactorscore")), g_disablepwalerts = 1 == parseInt(n[0].getAttribute("disablepwalerts")), lpsendchallengescore = null != n[0].getAttribute("sendchallengescore") && 1 == n[0].getAttribute("sendchallengescore"), pwndlistscan = null != n[0].getAttribute("pwndlistscan") && 1 == n[0].getAttribute("pwndlistscan"), loglogin_url = null != n[0].getAttribute("logloginsvr") ? "https://" + n[0].getAttribute("logloginsvr") + "/" : base_url, pollserver_url = null != n[0].getAttribute("pollserver") ? "https://" + n[0].getAttribute("pollserver") + "/" : base_url, lpsendmpstrength = "1" === n[0].getAttribute("sendmpstrength"), lpsendmpstrength && null != lpmpstrength && poll_server_request(), g_disableautofill = null != n[0].getAttribute("disableautofill") && 1 == n[0].getAttribute("disableautofill");
    var o = !1;
    var s = n[0].getAttribute("pushserver");
    null != s && s.length && setup_push_listener(s), lpCheckDownloadNewDataFile(n[0].getAttribute("formfillver"), "ff.dat", ffver, "ff", "ff.dat"), lpCheckDownloadNewDataFile(n[0].getAttribute("sitesver"), "sites.dat", -1, "sites", "sites.dat"), lpCheckDownloadNewDataFile(n[0].getAttribute("bigicon"), "bigicons.dat", -1, "bigicon", "bigicons.dat"), "" == n[0].getAttribute("privatekeyenchash") ? (console_log("RSA : login response : server returned blank privatekeyenchash : calling generateSharingKeys()"), generateSharingKeys()) : (console_log("RSA : login response : server returned privatekeyenchash : calling readrsaprivatekeyhexfromdb() to make sure it matches the local value"), readrsaprivatekeyhexfromdb(!1, !0, n[0].getAttribute("privatekeyenchash"))), (!a || "boolean" == typeof t && t) && lpnp_send_internal_logincheck_ack();
    var r, n = (r = e.responseXML.documentElement).getElementsByTagName("ok");
    if (1 == lpGetPref("storeLostOTP", 1) && n[0].hasAttribute("lostpwotpresult") && "ok" != n[0].getAttribute("lostpwotpresult") && 0 == g_norecovery && (DeleteOTP(), MakeOTP()), hassites() && g_server_accts_version == g_local_accts_version || (console_log("server.js : !hassites() or server_ver:" + g_server_accts_version + " != local_ver:" + g_local_accts_version + " so calling get_accts_local!"), get_accts_local()), checkIconsVersion(iconsversion), checkBigIconsVersion(null, !1, !0), checkBigIconsVersion(null, !1, !0, "sq"), lpretryrequests(), n[0].getAttribute("sauid0")) {
        for (var i = 0, l = ""; n[0].getAttribute("sauid" + i);) {
            var g = lprsa_encryptdata(n[0].getAttribute("sakey" + i), AES.bin2hex(g_local_key));
            g && (l += "&sauid" + i + "=" + en(n[0].getAttribute("sauid" + i)) + "&sakey" + i + "=" + en(g)), i++
        }
        l.length && lpMakeRequest(base_url + "uploadsuperkeys.php", "cmd=uploadsuperadmin&" + l, null, null)
    }
}

function lpCheckDownloadNewDataFile(e, t, a, r, n) {
    if ("" != e && 0 != e) {
        var o = a,
            s = localStorage_getItem(n),
            i = !1;
        if (null != s && "" != s && "\n" != s) {
            var l = -1 == s.indexOf("\n") ? s.length : s.indexOf("\n");
            o = s.substr(0, l)
        } else i = !0;
        if (null != o && "" != o && -1 != o && 0 < CompareLastPassVersions(e, o) && (i = !0), i) {
            var g = base_url + "getappdata.php";
            lpMakeRequest(g, "type=" + en(r), lpDownloadDataResponse, null, n)
        }
    }
}
generateSharingKeys = function() {
    var r = !1;
    return function(e) {
        if (console_log("RSA : generateSharingKeys : generating=" + r), !r)
            if (have_binary_function("xGenerateKeys")) {
                console_log("RSA : generateSharingKeys : using xGenerateKeys"), r = !0;
                var t = AES.bin2hex(g_local_key).toUpperCase();
                call_binary_function("xGenerateKeys", t, function(e) {
                    console_log("RSA : generateSharingKeys : xGenerateKeys completed");
                    var t = e.split("|");
                    2 == t.length ? (console_log("RSA : generateSharingKeys : xGenerateKeys was successful -- calling upload_rsa_keys()"), upload_rsa_keys("xGenerateKeys", {
                        privatekey: atob(t[0]),
                        publickey: atob(t[1])
                    })) : console_log("RSA : generateSharingKeys : xGenerateKeys failed"), r = !1
                })
            } else if (have_pplastpass()) {
            r = !0;
            var t = AES.bin2hex(g_local_key).toUpperCase();
            console_log("RSA : generateSharingKeys : using xGenerateKeys via pplastpass"), pplastpass_send_message({
                cmd: "xGenerateKeys",
                userkeyhex: t
            }, function(e) {
                console_log("RSA : generateSharingKeys : xGenerateKeys via pplastpass completed");
                var t = e.split("|");
                2 == t.length ? (console_log("RSA : generateSharingKeys : xGenerateKeys via pplastpass was successful -- calling upload_rsa_keys()"), upload_rsa_keys("xGenerateKeys", {
                    privatekey: atob(t[0]),
                    publickey: atob(t[1])
                })) : console_log("RSA : generateSharingKeys : xGenerateKeys via pplastpass failed"), r = !1
            })
        } else if (g_ischrome || g_issafari && 9 <= get_safari_version()) {
            console_log("RSA : generateSharingKeys : using Javascript RSAKey() to create sharing keys"), r = !0;
            var a = new RSAKey;
            generate_key(a, function(e) {
                console_log("RSA : generateSharingKeys : Javascript RSAKey() was successful -- calling upload_rsa_keys()"), upload_rsa_keys("RSAKey", e), r = !1
            })
        } else console_log("RSA : generateSharingKeys : Not generating keys since unsupported OS");
        e && e(r)
    }
}();
var adminoverride = "",
    lplastgetaccounts = 0;

function get_accts(e) {
    var t = localStorage_getItem(g_username_hash + "_personalaccountlinktoken"),
        a = "";
    t && (a = "&personalaccountlinktoken=" + encodeURIComponent(t));
    var r = (new Date).getTime();
    if (!(r - lplastgetaccounts < 1e3)) {
        lplastgetaccounts = r;
        var n = base_url + "getaccts.php?mobile=1&b64=1&shap=1&u=" + g_username_hash;
        n += "&includesharedfolderformfillprofiles=1", n += "&includeemergencyaccess=1", n += "&includependingsharedfolders=1", "" != adminoverride && (n += "&adminoverride=" + en(adminoverride)), n += a, lpMakeRequest(n, "", e || lpAcctsResponse, lpAcctsError)
    }
}

function get_accts_local(e, t) {
    lpReadAcctsData(e, t)
}

function lpAcctsResponse(e) {
    if (e && 4 == e.readyState) {
        var t = atob(e.responseText);
        write_history({
            cmd: "get_accts_success",
            sz: t.length,
            ready_state: e.readyState,
            status: e.status,
            lver: g_local_accts_version,
            sver: g_server_accts_version
        });
        var a = [],
            r = [],
            n = {},
            o = [],
            s = [],
            i = {},
            l = [],
            g = [],
            u = [],
            d = [],
            _ = [],
            c = [],
            p = {},
            f = [],
            m = [],
            h = [],
            b = [],
            v = [];
        lp_premium_exp = 0, lp_enterpriseuser = 0;
        var y = get_ff_translation("ff_captcha_regexp");
        lp_captcha_regexp = "" != y ? new RegExp(y, "i") : null, g_emer_sharers = [], g_emer_sharees = [], g_totp = {}, g_note_templates = [], g_reminders = [], parsemobile(t, t.length, 100, 0, postacctsload, a, r, n, o, s, i, l, !0, !1, null, g, u, d, _, c, p, lp_rsaprivatekeyhex, f, null, null, null, m, h, b, v, void 0, void 0, g_emer_sharers, g_emer_sharees, g_totp, g_note_templates, g_pending_shares, g_reminders, null, null), g_premium_exp = lp_premium_exp, g_enterpriseuser = lp_enterpriseuser
    } else write_history({
        cmd: "get_accts_fail",
        sz: e && "string" == typeof e.responseXML ? e.responseXML.length : -1,
        ready_state: e ? e.readyState : -1,
        status: e ? e.status : -1,
        lver: g_local_accts_version,
        sver: -1
    })
}

function get_ff_translation(e) {
    var t = lpGetPref("language", "");
    "" == t && (t = navigator.language);
    var a = t;
    if ("es_419" != (t = t.replace("-", "_")) && "es_419" != a && "es-419" != a && "es_xl" != t && "es_xl" != a && "es-xl" != a || (t = "es_MX", a = "es-MX"), void 0 === translations[t] && void 0 === translations[a] && (a = t = t.substring(0, 2)), void 0 === translations[t] && void 0 === translations[a])
        for (var r in translations)
            if (r.substring(0, 2) == t) {
                a = t = r;
                break
            } if (void 0 === translations[t] && void 0 === translations[a] && (t = "en_US", a = "en-US"), void 0 === translations[t] && void 0 === translations[a])
        for (var r in a = t = "en", translations)
            if (r.substring(0, 2) == t) {
                a = t = r;
                break
            } return void 0 !== translations[t] && void 0 !== translations[t][e] && "" != translations[t][e] ? translations[t][e] : void 0 !== translations[a] && void 0 !== translations[a][e] && "" != translations[a][e] ? translations[a][e] : void 0 !== translations.en_US && void 0 !== translations.en_US[e] && "" != translations.en_US[e] ? translations.en_US[e] : void 0 !== translations["en-US"] && void 0 !== translations["en-US"][e] && "" != translations["en-US"][e] ? translations["en-US"][e] : ""
}

function rewritelocalfile(r, n, o) {
    o = void 0 === o ? null : o;
    var e = flattendata(g_local_accts_version, g_sites, g_securenotes, g_prompts, g_formfills, g_identities, g_equivalentdomains, g_neverurls, g_premium_exp, enc(g_username), g_pendings, g_shareeautopushes, lpmaxid, g_urlrules, g_prefoverrides, g_shares, g_applications, g_enterpriseuser, lp_attaches, g_emer_sharers, g_emer_sharees, g_totp, g_note_templates, g_pending_shares);
    if (e = btoa(e), (LPISLOC || o) && (e = "LPB64" + e), e = prependIterations(e = prependOTPAndEncrypt(e)), lpSaveData(e, "accts"), LPISLOC || o) {
        if (e = prependIterations(e = enc(e)), o || lpdisableoffline) return e;
        protect_data(e, !0, null, function(e) {
            if (have_binary_function("write_file")) {
                var t = "";
                r && (t = "_" + (new Date).toString().replace(" ", "_"));
                var a = db_prepend(g_username_hash + t + "_lps.act.sxml");
                o && (a = "lpexport.xml"), call_binary_function("write_file", a, e)
            }
            r || n || lpnp_notify("refresh_local", {
                data0: g_username_hash
            })
        })
    }
    update_menus(!0)
}

function prependOTPAndEncrypt(e) {
    var t = null,
        a = "";
    if (sesame_getdata("password_offline") && "" != sesame_getdata("password_offline") ? (lpdbg("sesame", "encrypting accounts file before writing"), t = sesame_getdata("password_offline"), a = "type=sesameoffline\ndata=") : multifactor_getdata("password_offline") && "" != multifactor_getdata("password_offline") ? (lpdbg("multifactor", "encrypting accounts file before writing"), t = multifactor_getdata("password_offline"), a = "type=" + multifactor_getdata("type") + "offline\ndata=") : yubikey_getdata("password_offline") && "" != yubikey_getdata("password_offline") && (lpdbg("yubikey", "encrypting accounts file before writing"), t = yubikey_getdata("password_offline"), a = "type=yubikeyoffline\ndata="), t) {
        if (!(e = enc(e, hex2bin(t))) || "" == e) return lpdbg("error", "Failed to encrypt data in save_accounts_fileraw"), !1;
        e = a + e
    }
    return e
}

function clearSavedPassword(t) {
    var a = opendb();
    createSavedLoginsTable(a), a && (console_log("server.js : clearing saved credentials"), g_indexeddb ? a.transaction("LastPassSavedLogins2", "readonly").objectStore("LastPassSavedLogins2").openCursor(IDBKeyRange.only(t)).onsuccess = function(e) {
        e.target.result && "" != e.target.result.value.password && (e.target.result.value.password = "", a.transaction("LastPassSavedLogins2", "readwrite").objectStore("LastPassSavedLogins2").put(e.target.result.value))
    } : a.transaction(function(e) {
        e.executeSql("UPDATE LastPassSavedLogins2 SET password = '' WHERE username = ?", [t])
    }))
}

function onLogoffWhenCloseBrowserChange() {
    g_logoff_when_close_browser && ExtensionPreferences.addListener("logoffWhenCloseBrowser", function(e) {
        e && deleteStoredLocalKey()
    })
}

function deleteStoredLocalKey() {
    var e = opendb();
    e && e.transaction(function(e) {
        e.executeSql("DELETE FROM LastPassData WHERE username_hash=? AND type=?", [db_prepend(g_username_hash), "key"], function(e, t) {}, function() {})
    })
}

function checkforknownhackedsites() {}

function postacctsload(e, t, a, r, n, o, s, i, l, g, u, d, _, c, p, f, m, h, b, v, y, w) {
    if (lploggedin)
        if (i || g && (!g || 0 != e.length)) {
            try {
                if (null != lp_trueapi_trial_exp) {
                    var k = parseInt(lp_trueapi_trial_exp);
                    0 < k && k < parseInt((new Date).getTime() / 1e3) && (getsinglefactortype(function(e) {
                        "trueapi" == e && setsinglefactortype("")
                    }), "trueapi" == multifactor_getdata("type") && multifactor_setdata("type", ""))
                }
            } catch (e) {}
            if (0 < e.length && void 0 !== u && null != u && "" == adminoverride) {
                var A = dec(u);
                if ("" != u && null != u && "null" != u && g_username != A) return lpReportError("Encrypted username check failed: " + g_username + " vs " + A + " for " + u + " local " + g, null), lpshowError("A consistency check failed while loading your sites. Please relogin."), clearSavedPassword(g_username), clearAllData(), loggedOut(!1, "encryptedusername_check_failed"), !1
            }
            if (verify_accts_integrity(u, g_username, e, t, b, n, h, g_uid), lpmaxid = c.maxid, !g) {
                var L = btoa(l);
                L = prependIterations(L = prependOTPAndEncrypt(L)), lpSaveData(L, "accts")
            }
            var S = {};
            g_tlds = {};
            for (var x = AES.bin2hex(g_local_key), P = 0; P < e.length; P++) {
                if (e[P].url = AES.hex2url(e[P].url), e[P].tld = lp_gettld_url(e[P].url), LPISLOC && e[P].tld) try {
                    var E = function() {
                        rfdefaults && void 0 !== rfdefaults[e[P].tld] && (e[P].submit_id = rfdefaults[e[P].tld].submit_id, e[P].captcha_id = rfdefaults[e[P].tld].captcha_id, e[P].custom_js = rfdefaults[e[P].tld].custom_js)
                    };
                    rfdefaults ? E() : lpReadFile("rfdefaults", function(e) {
                        rfdefaults = JSON.parse(lp_hex2bin(e)), E()
                    })
                } catch (e) {}
                var C = void 0 === e[P].sharefolderid ? g_local_key : getsharekey(h, e[P].sharefolderid);
                if (null != C) {
                    var R = void 0 === e[P].sharefolderid ? x : AES.bin2hex(C);
                    e[P].unencryptedUsername = lpmdec(e[P].username, !0, C, R)
                }
                void 0 === g_tlds[e[P].tld] && (g_tlds[e[P].tld] = {}), g_tlds[e[P].tld][e[P].aid] = !0, S[e[P].aid] = e[P]
            }
            for (var I = {}, P = 0; P < t.length; P++) t[P].url = AES.hex2url(t[P].url), I[t[P].aid] = t[P];
            for (var O = {}, P = 0; P < b.length; P++) b[P].appname = AES.hex2url(b[P].appname), O[b[P].appaid] = b[P];
            g_sites = S, g_securenotes = I, g_applications = O, g_prompts = a, g_formfills = r, g_identities = n, g_equivalentdomains = o, g_urlrules = p, g_neverurls = s, g_pendings = d, g_prefoverrides = m, g_shares = h, lp_attaches = v, 0 < g_shares.length && ("undefined" == typeof lp_rsaprivatekeyhex || null == lp_rsaprivatekeyhex || "" == lp_rsaprivatekeyhex) && "undefined" == typeof g_keyloopprotection && setTimeout(function() {
                lp_rsaprivatekeyhex && "" != lp_rsaprivatekeyhex ? (g_keyloopprotection = !0, get_accts_local()) : (g_keyloopprotection = !0, console_log("RSA : post accounts load : calling readrsaprivatekeyhexfromdb()"), readrsaprivatekeyhexfromdb(!0, !0, null, function() {
                    lp_rsaprivatekeyhex && "" != lp_rsaprivatekeyhex && get_accts()
                }))
            }, 5e3), overrideprefs(g_prefoverrides), setcachedffdat(), g_shareeautopushes = new Array, parseAutoPushMobile(_, g_shareeautopushes);
            for (var P = 0; P < g_formfills.length; P++) g_formfills[P].decprofilename = lpmdec_acct(g_formfills[P].profilename, !0, g_formfills[P], g_shares);
            g_formfills.sort(function(e, t) {
                return e.decprofilename.toLowerCase() < t.decprofilename.toLowerCase() ? -1 : 1
            }), "undefined" != typeof g_identity && null != g_identity || (g_identity = "");
            for (var F = !1, P = 0; P < g_identities.length; P++) g_identities[P].deciname = dec(g_identities[P].iname), g_identities[P].iid == g_identity && (F = !0);
            if (g_identities.sort(function(e, t) {
                    return e.deciname.toLowerCase() < t.deciname.toLowerCase() ? -1 : 1
                }), !F && "" != g_identity) return identityFilter = "", switch_identity("", !0), clearCache(!0, !1, !1), setTimeout(function() {
                loggedOut(!1, "wrongidentity")
            }, 500), console_log("Identity: " + g_identity), alertfrombg(gs("Your selected Identity no longer exists. Defaulting to 'All' and logging off.")), !1;
            rsa_acceptpendingshares(), rsa_acceptshareeautopushes();
            var E = function(e) {
                    for (var t = (e = null == e ? "" : e).split("\n"), a = 0; a < t.length; a++) {
                        var r = t[a].split(" ");
                        if (2 == r.length && "" != r[0] && "" != r[1]) {
                            var n = r[0],
                                o = r[1];
                            g_sites[n] && o > g_sites[n].last_touch && (g_sites[n].last_touch = o)
                        }
                    }
                },
                T = "";
            if ((g_is_win || g_is_mac && LPISLOC) && have_binary_function("read_file") ? call_binary_function("read_file", db_prepend(g_username_hash + "_lt.cac"), E) : ("undefined" != typeof localStorage && (T = localStorage_getItem(db_prepend(g_username_hash + "_lt.cac"))), E(T)), "undefined" != typeof foundmsfi && 0 == g) {
                var U = "",
                    D = 0;
                for (var P in msfids) {
                    for (var M = msfids[P].shareid, q = "", N = null, j = 0; j < g_shares.length; j++)
                        if (g_shares[j].id == M) {
                            q = AES.bin2hex(g_shares[j].key), N = g_shares[j].decsharename;
                            break
                        } if (null !== N) {
                        var B = new RSAKey;
                        if (parse_public_key(B, msfids[P].key)) {
                            var G = B.encrypt(q),
                                K = enc(N, g_shares[j].key);
                            U += "&sharekey" + D + "=" + encodeURIComponent(G) + "&uid" + D + "=" + encodeURIComponent(msfids[P].uid), U += "&shareid" + D + "=" + encodeURIComponent(msfids[P].shareid), U += "&decsharename" + D + "=" + encodeURIComponent(N), U += "&encsharename" + D + "=" + encodeURIComponent(K), D++
                        }
                    }
                }
                D = 0, lpMakeRequest(base_url + "process_msf.php", U, null, null)
            }
            if (console_log("server.js : num sites: " + e.length + " num sn: " + t.length + " num ff: " + g_formfills.length + " num identities: " + g_identities.length + " pendings: " + g_pendings.length + " num applications: " + g_applications.length), recheckall(), update_menus(!0), void 0 !== y && y.attachversion > lp_server_attach_version && (console.log("setting lp_server_attach_version=" + y.attachversion), lp_server_attach_version = y.attachversion), g_runchallenge ? setTimeout(function() {
                    runChallenge()
                }, 1e4) : fix_sites_secure_reprompt(), void 0 !== w && "function" == typeof handle_pending_pushed_sites && handle_pending_pushed_sites(w, function() {
                    get_accts()
                }, g_shares), checkBigIconsVersion(), checkBigIconsVersion(null, null, null, "sq"), checkforknownhackedsites(), "undefined" != typeof share_folder_group && "" != share_folder_group && "undefined" != typeof share_folder_id && "" != share_folder_id)
                for (var P = 0; P < h.length; P++)
                    if (h[P].id == share_folder_id) {
                        var H = share_folder_group;
                        set_share_folder_group(""), set_share_folder_id(""), renameGroup(H, h[P].decsharename);
                        break
                    } LPContentScriptFeatures.redux_vault_data && proxyLegacyGlobals()
        } else if (console_log("server.js : ERROR: Could not parse accts data!!!"), gPulledInvalidAccts) lpshowError("ErrorGetAcctsMsg");
    else if (gPulledInvalidAccts = !0, g_loggedinonline) get_accts();
    else {
        var X = function() {
            get_accts(), Topics.get(Topics.MANUAL_LOGIN_FINISHED).unsubscribe(X)
        };
        Topics.get(Topics.MANUAL_LOGIN_FINISHED).subscribe(X)
    }
}

function setcachedffdat() {
    var e = localStorage_getItem("ff.dat");
    e = null == e ? translations : LPJSON.parse(e);
    for (var t = [], a = 0; a < g_formfills.length; a++) t[lpmdec_acct(g_formfills[a].profilelanguage, !0, g_formfills[a], g_shares)] = 1;
    var r = [];
    for (var a in e) "en-US" != a && void 0 === t[a] || (r[a] = e[a]);
    g_cachedffdat = LPJSON.stringify(r)
}

function overrideprefs(e) {
    void 0 !== e.allowmasterpasswordsave && "0" == e.allowmasterpasswordsave ? (lpPutGblPref("rememberpassword", 0), g_master_password_saved = !1, deletesavedpw(), localStorage_setItem(g_username_hash + ".noremember", 1)) : localStorage_removeItem(g_username_hash + ".noremember"), void 0 !== e.logoffclosebrowser && "-1" != e.logoffclosebrowser && (lpPutGblPref("logoffWhenCloseBrowser", 1), lpPutGblPref("logoffWhenCloseBrowserVal", e.logoffclosebrowser)), void 0 !== e.logoffidle && "-1" != e.logoffidle && (lpdbg("idle", "overriding idleLogoffVal with value from server: " + e.logoffidle), lpPutUserPref("idleLogoffVal", e.logoffidle)), void 0 !== e.noexport && "-1" != e.noexport && lpPutUserPref("noexport", e.noexport), lpWriteAllPrefs(), "string" == typeof e.sitepwlen && "" != e.sitepwlen ? LP.sitepwlen = JSON.parse(e.sitepwlen) : LP.sitepwlen = new Array, void 0 !== e.hideidentities && "-1" != e.hideidentities && (g_hideidentities = "1" == e.hideidentities), "string" == typeof e.savesitestopersonal && "" != e.savesitestopersonal ? g_savesitestopersonal = e.savesitestopersonal.split(",") : g_savesitestopersonal = new Array
}

function lpAcctsError() {
    L("Error xhr_accts")
}

function loglogin(t, a, r) {
    get_selected_tab(null, function(e) {
        logloginurl(t, e, a, r)
    })
}

function tab_is_private(e) {
    return g_isfirefoxsdk ? g_private_browsing.isPrivate(e) : void 0 !== e.incognito && e.incognito
}

function loglogintab(e, t, a, r) {
    tab_is_private(t) || logloginurl(e, gettaburl(t), a, r)
}

function logloginurl(e, t, a, r) {
    var n = lp_get_gmt_timestamp();
    if (g_sites[e]) {
        if (parseFloat(n) < 5 + parseFloat(g_sites[e].last_touch)) return;
        writenewts(e, g_sites[e].last_touch = n)
    } else if (g_securenotes[e]) {
        if (n == g_securenotes[e].last_touch) return;
        if (g_securenotes[e].last_touch = lp_get_gmt_timestamp(), rewritelocalfile(), !Policies.logNameEnabled() && !Policies.logUserNameEnabled() && !Policies.logUrlEnabled()) return
    }
    var o = getacct(e),
        s = (new PostParams).add("id", e).add("method", get_method());
    if (o) {
        var i = issharedfolder(g_shares, o.group);
        if (i && i.id === get_personal_linked()) return;
        s.add("shareType", getShareType(e))
    }
    a && s.add("source", a), void 0 !== r && s.add("autologin", r), o && (Policies.logUrlEnabled() && "http://sn" != o.url && s.add("u", AES.url2hex(t)), Policies.logNameEnabled() && s.add("n", AES.url2hex(o.name)), Policies.logUserNameEnabled() && s.add("un", AES.url2hex(getusernamefromacct(o)))), i && s.add("sharedfolderid", i.id), lpMakeRequest(loglogin_url + "loglogin.php", s.toString(), null, null)
}

function logmpwreuse(e) {
    if (requirechangereuse() || g_loglogins) {
        var t = "plog=1&u=" + encodeURIComponent(e);
        lpMakeRequest(loglogin_url + "loglogin.php", t, null, null)
    }
}

function writenewts(n, o) {
    var e = function(e) {
            for (var t = (e = null == e ? "" : e).split("\n"), a = "", r = 0; r < t.length; r++) 0 != t[r].indexOf(n + " ") && "" != t[r] && (a += t[r] + "\n");
            a += n + " " + o + "\n", (g_is_win || g_is_mac && LPISLOC) && have_binary_function("write_file") && call_binary_function("write_file", db_prepend(g_username_hash + "_lt.cac"), a), "undefined" != typeof localStorage && localStorage_setItem(db_prepend(g_username_hash + "_lt.cac"), a)
        },
        t = "";
    (g_is_win || g_is_mac && LPISLOC) && have_binary_function("read_file") ? call_binary_function("read_file", db_prepend(g_username_hash + "_lt.cac"), e) : ("undefined" != typeof localStorage && (t = localStorage_getItem(db_prepend(g_username_hash + "_lt.cac"))), e(t))
}

function logformfill(o, s, i, l, g, u) {
    get_selected_tab(null, function(e) {
        if (!tab_is_private(e) && g_loglogins) {
            for (var t = (new PostParams).add("ffid", o).add("method", get_method()), a = 0; a < g_formfills.length; a++)
                if (g_formfills[a].ffid == o) {
                    var r = issharedfolder(g_shares, void 0 !== g_formfills[a].group ? g_formfills[a].group : "");
                    r && t.add("sharedfolderid", r.id);
                    break
                } s && t.add("u", bin2hex(s)), i && t.add("source", i), u && t.add("approach", u), l = l || "en-US", t.add("lang", l);
            var n = get_lplanguage();
            n = "" === n ? "en-US" : n.replace("_", "-"), t.add("difflang", n === l ? 0 : 1), g && t.add("type", g), lpMakeRequest(base_url + "logformfill.php?" + t.toString(), "", null, null)
        }
    })
}
onLogoffWhenCloseBrowserChange();
var PostParams = function(e) {
    for (var t in this.params = {}, e) this.add(t, e[t])
};

function logclearform(a, r) {
    get_selected_tab(null, function(e) {
        if (!tab_is_private(e) && g_loglogins) {
            var t = (new PostParams).add("ffclear", 1).add("method", get_method());
            r && t.add("source", r), a && t.add("u", bin2hex(a)), lpMakeRequest(base_url + "logformfill.php?" + t.toString(), "", null, null)
        }
    })
}

function lpCreateKeyFileData() {
    if ("undefined" == typeof g_pwdeckey || null == g_pwdeckey || "undefined" == typeof g_local_key || null == g_local_key) return "";
    var e = AES.bin2hex(g_local_key),
        t, a, r;
    return AES.Encrypt({
        pass: g_pwdeckey,
        data: e,
        b64: !0,
        mode: "ecb",
        bits: 256
    }) + "\n" + AES.Encrypt({
        pass: g_local_key,
        data: "lastpass rocks",
        b64: !0,
        mode: "ecb",
        bits: 256
    })
}

function lpWriteKeyFile() {
    console_log("server.js : lpWriteKeyFile : start");
    var t = lpCreateKeyFileData();
    "" != t ? (ExtensionPreferences.read("logoffWhenCloseBrowser", function(e) {
        e || (console_log("server.js : lpWriteKeyFile : calling lpSaveData"), lpSaveData(t, "key"))
    }), (g_is_win || g_is_mac || g_is_linux) && have_binary_function("write_file") ? (console_log("server.js : lpWriteKeyFile : calling protect_data"), protect_data(t, !0, null, function(e) {
        console_log("server.js : lpWriteKeyFile : protect_data callback"), console_log("server.js : lpWriteKeyFile : calling binary function to write keyfile"), call_binary_function("write_file", db_prepend(g_username_hash + "_lpall.slps"), e)
    })) : console_log("server.js : lpWriteKeyFile : did not have binary function, so not writing")) : console_log("server.js : lpWriteKeyFile : not writing A")
}

function lpReadKeyFile(s, i, e, l) {
    console_log("server.js : lpReadKeyFile fromwebsite=" + i + " silent=" + e + " bIsLoginCheck=" + l);
    var t = opendb();
    if (createDataTable(t), t) {
        console_log("server.js : lpReadKeyFile : reading db"), console_log("server.js : lpReadKeyFile : starting db transaction");
        var a = function(e, t) {
                if (console_log("server.js : lpReadKeyFile : reading numrows=" + t.rows.length), 0 < t.rows.length) {
                    var a = t.rows.item(0).data;
                    if (a) {
                        var r = a.split("\n");
                        if (2 == r.length) {
                            var n = null,
                                o;
                            if (n = s ? AES.hex2bin(dec(r[0], g_pwdeckey)) : g_local_key, "lastpass rocks" == dec(r[1], n)) {
                                if (g_local_key = n, g_local_key_hex = AES.bin2hex(n), g_local_key_hash = SHA256(g_local_key), s) return console_log("server.js : lpReadKeyFile : worked -- calling lpLoginResponse_win2"), void lpLoginResponse_win2(s, i, l);
                                loggedIn(), console_log("server.js : lpReadKeyFile worked -- calling get_accts_local"), get_accts_local(!0)
                            } else console_log("server.js : lpReadKeyFile : data was corrupt A")
                        } else console_log("server.js : lpReadKeyFile : data was corrupt B")
                    } else console_log("server.js : lpReadKeyFile : did not find any data")
                } else console_log("server.js : lpReadKeyFile : failed to read -- calling lp_login_from_saved"), lp_login_from_saved();
                s && loggedOut(!1, "keyfailed")
            },
            r = function(e, t) {
                console_log("server.js : lpReadKeyFile failed error=" + t)
            };
        if (LPISLOC) console_log("server.js : lpReadKeyFile calling read_key_from_file"), read_key_from_file(function(t) {
            console_log("server.js : lpReadKeyFile read_key_from_file callback"), a(tx, "" != t ? {
                rows: {
                    length: 1,
                    item: function(e) {
                        return {
                            data: t
                        }
                    }
                }
            } : {
                rows: {
                    length: 0
                }
            })
        });
        else if (console_log("server.js : lpReadKeyFile calling executeSql"), g_indexeddb) {
            var n = {
                rows: {
                    item: function(e) {
                        return this[e]
                    },
                    length: 0
                }
            };
            t.transaction("LastPassData", "readonly").objectStore("LastPassData").openCursor(IDBKeyRange.only(db_prepend(g_username_hash) + "_key")).onsuccess = function(e) {
                var t = e.target.result;
                t ? (n.rows[n.rows.length] = t.value, n.rows.length++, t.continue()) : a(null, n)
            }
        } else t.transaction(function(e) {
            e.executeSql("SELECT * FROM LastPassData WHERE username_hash=? AND type=?", [db_prepend(g_username_hash), "key"], a, r)
        })
    } else console_log("server.js : lpReadKeyFile : failed to open database")
}

function lpCheckForKey(a) {
    var e = opendb();
    if (createDataTable(e), e) {
        var r = function(e, t) {
                0 < t.rows.length ? a() : console_log("no key")
            },
            t = function(e, t) {
                console_log(t)
            };
        if (LPISLOC) read_key_from_file(function(t) {
            r(tx, "" != t ? {
                rows: {
                    length: 1,
                    item: function(e) {
                        return {
                            data: t
                        }
                    }
                }
            } : {
                rows: {
                    length: 0
                }
            })
        });
        else if (g_indexeddb) {
            var n = {
                rows: {
                    item: function(e) {
                        return this[e]
                    },
                    length: 0
                }
            };
            e.transaction("LastPassData", "readonly").objectStore("LastPassData").openCursor(IDBKeyRange.only(db_prepend(g_username_hash) + "_key")).onsuccess = function(e) {
                var t = e.target.result;
                t ? (n.rows[n.rows.length] = t.value, n.rows.length++, t.continue()) : r(null, n)
            }
        } else e.transaction(function(e) {
            e.executeSql("SELECT * FROM LastPassData WHERE username_hash=? AND type=?", [db_prepend(g_username_hash), "key"], r, t)
        })
    }
}

function lpReadAcctsData(A, S, x, P) {
    if (null != g_username && "" != g_username) {
        var E = -1,
            a = "ok",
            e = opendb();
        if (createDataTable(e), e) {
            var r = function(e, t) {
                    if (0 < t.rows.length) {
                        if (data = t.rows.item(0).data, data && "" != data) {
                            if (data = checkIterationsInDataFile(data), "iterationserror" == data) return console_log("server.js : local accts data corrupt - key mismatch. redownloading"), C("error"), void get_accts();
                            if (A && (!sesame_getdata("password_offline") || "" == sesame_getdata("password_offline") || !yubikey_getdata("password_offline") || "" == yubikey_getdata("password_offline") || !multifactor_getdata("password_offline") || "" == multifactor_getdata("password_offline"))) {
                                if (0 == data.substring(0, 30).indexOf("type=sesameoffline\ndata=")) return sesame_setdata("offline", "1"), void sesame_getotp(g_username);
                                if (0 == data.substring(0, 30).indexOf("type=trueapioffline\ndata=") || 0 == data.substring(0, 30).indexOf("type=omnikeyoffline\ndata=")) return multifactor_setdata("offline", "1"), multifactor_setdata("type", 0 == data.substring(0, 30).indexOf("type=trueapioffline\ndata=") ? "trueapi" : "omnikey"), void multifactor_getresponse(g_username);
                                if (0 == data.substring(0, 30).indexOf("type=yubikeyoffline\ndata=")) return yubikey_setdata("offline", "1"), void yubikey_getotp(g_username)
                            }
                            var a = null;
                            sesame_getdata("password_offline") && "" != sesame_getdata("password_offline") && 0 == data.substring(0, 30).indexOf("type=sesameoffline\ndata=") ? (lpdbg("sesame", "decrypting accounts file after reading"), data = data.substring(24), a = sesame_getdata("password_offline")) : !multifactor_getdata("password_offline") || "" == multifactor_getdata("password_offline") || 0 != data.substring(0, 30).indexOf("type=trueapioffline\ndata=") && 0 != data.substring(0, 30).indexOf("type=omnikeyoffline\ndata=") ? yubikey_getdata("password_offline") && "" != yubikey_getdata("password_offline") && 0 == data.substring(0, 30).indexOf("type=yubikeyoffline\ndata=") && (lpdbg("yubikey", "decrypting accounts file after reading"), data = data.substring(25), a = yubikey_getdata("password_offline")) : (lpdbg("multifactor", "decrypting accounts file after reading"), data = data.substring(25), a = multifactor_getdata("password_offline")), a && (data = dec(data, hex2bin(a)))
                        }
                        LPISLOC && 5 <= data.length && "LPB64" == data.substring(0, 5) && (data = data.substring(5));
                        try {
                            data = atob(data), E = data.length, x && P(data)
                        } catch (e) {
                            return console_log("server.js : local accts data corrupt. redownloading"), C("error"), void get_accts()
                        }
                        var r = get_version(data);
                        if (r != g_server_accts_version && -1 != g_server_accts_version) console_log("server.js : local accts version is outdated: local:" + r + " server:" + g_server_accts_version + " redownloading"), get_accts();
                        else {
                            if (L("using cached accts data"), hassites() && (!S || "refetchsharing" != S)) return L("Cached data already in place, ABORT, to avoid reparse."), void C("abort");
                            var n = [],
                                o = [],
                                s = {},
                                i = [],
                                l = [],
                                g = {},
                                u = [],
                                d = [],
                                _ = [],
                                c = [],
                                p = [],
                                f = [],
                                m = {},
                                h = [],
                                b = [],
                                v = [],
                                y = [],
                                w = [];
                            lp_premium_exp = 0, lp_enterpriseuser = 0;
                            var k = get_ff_translation("ff_captcha_regexp");
                            lp_captcha_regexp = "" != k ? new RegExp(k, "i") : null, parsemobile(data, data.length, 100, 0, postacctsload, n, o, s, i, l, g, u, !0, !0, null, d, _, c, p, f, m, lp_rsaprivatekeyhex, h, null, null, null, b, v, y, w, void 0, void 0, g_emer_sharers, g_emer_sharees, g_totp, g_note_templates, g_pending_shares, g_reminders, null, null), g_premium_exp = lp_premium_exp, g_enterpriseuser = lp_enterpriseuser
                        }
                    } else g_username_hash && get_accts();
                    C()
                },
                t = function(e, t) {
                    console_log(t), a = "error"
                };
            if (LPISLOC) read_accts_from_file(function(t) {
                r(tx, "" != t ? {
                    rows: {
                        length: 1,
                        item: function(e) {
                            return {
                                data: t
                            }
                        }
                    }
                } : {
                    rows: {
                        length: 0
                    }
                })
            });
            else if (g_indexeddb) {
                var n = {
                    rows: {
                        item: function(e) {
                            return this[e]
                        },
                        length: 0
                    }
                };
                e.transaction("LastPassData", "readonly").objectStore("LastPassData").openCursor(IDBKeyRange.only(db_prepend(g_username_hash) + "_accts")).onsuccess = function(e) {
                    var t = e.target.result;
                    t ? (n.rows[n.rows.length] = t.value, n.rows.length++, t.continue()) : r(null, n)
                }
            } else e.transaction(function(e) {
                e.executeSql("SELECT * FROM LastPassData WHERE username_hash=? and type=?", [db_prepend(g_username_hash), "accts"], r, t)
            })
        } else get_accts()
    } else C("error");

    function C(e) {
        "string" == typeof e && (a = e), write_history({
            cmd: "get_accts_local",
            status_s: a,
            sz: E,
            lver: g_local_accts_version,
            sver: g_server_accts_version
        })
    }
}

function MakeOTP() {
    if (null != g_username && 0 != g_username.length && null != g_local_key && 0 != g_local_key.length) {
        var e = fix_username(g_username);
        rng_seed_time();
        for (var t = new Array, a = 16, r = 0; r < 16; r++) t[r] = 0;
        rng_get_bytes(t);
        for (var n = "", r = 0; r < 16; r++) n += String.fromCharCode(t[r]);
        var o = enc(AES.bin2hex(n), g_local_key),
            s = make_lp_key(g_username, n),
            i = enc(AES.bin2hex(g_local_key), s),
            l = SHA256(SHA256(e + n) + n),
            g = AES.hex2bin(dec(i, s, 1));
        if (g_local_key == g) {
            var u = "newkey=1&xml=1&hash=" + LP.en(l);
            u += "&encrypted_otp=" + LP.en(o), u += "&rand_encrypted_key=" + LP.en(i), u += "&recovery=1", LP.lpMakeRequest(base_url + "otp.php", u, lpOTPUploadResponse, function() {}, n)
        } else console_log("server.js : ERROR: Failed to decrypt newly encrypted key: dec_local_key:\n" + AES.bin2hex(g) + " != \n" + AES.bin2hex(g_local_key) + "\nlen: " + g.length + " vs " + g_local_key.length + "\nrand pw:" + AES.bin2hex(n) + "\ng_username:" + g_username + "\nrand key:" + AES.bin2hex(s) + "\nrand_encrypted_key:" + i)
    }
}

function DeleteOTP() {
    DeleteFromDB("otp")
}

function DeleteFromDB(t) {
    if (null != g_username && "" != g_username && (!LPISLOC || "key" != t && "accts" != t)) {
        var e = opendb();
        createDataTable(e), e && (g_indexeddb ? e.transaction("LastPassData", "readwrite").objectStore("LastPassData").delete(db_prepend(g_username_hash) + "_" + t) : e.transaction(function(e) {
            e.executeSql("DELETE FROM LastPassData WHERE username_hash=? and type=?", [db_prepend(g_username_hash), t], function(e, t) {}, function(e, t) {
                console_log(t)
            })
        }))
    }
}

function GetOTPHash(r, n, e, o) {
    r && (r += "&outofbandsupported=1", isDogfood() && (r += "&dogfood=1"));
    var t = opendb();
    if (createDataTable(t), t) {
        var a = e ? SHA256(e) : g_username_hash,
            s = e || g_username,
            i = function(e, t) {
                var a = "";
                0 < t.rows.length && (a = t.rows.item(0).data), r ? ("" != a ? (a = AES.hex2bin(a), lostotphash = SHA256(SHA256(fix_username(s) + a) + a)) : lostotphash = "", 1 == lpGetPref("storeLostOTP", 1) && (r += "&lostpwotphash=" + en(lostotphash)), sesame_setdata("postdata", r), yubikey_setdata("postdata", r), googleauth_setdata("postdata", r), outofband_setdata("postdata", r), securityquestion_setdata("postdata", r), grid_setdata("postdata", r), multifactor_setdata("postdata", r), g_lastpoll = lastlogin = (new Date).getTime(), console_log("server.js : Requesting login.php A"), lpMakeRequest(base_url + "login.php", r, lpLoginResponse, lpLoginError)) : null != n && (lostotphash = "" == a ? "nouser" : a, sendCS(n, {
                    cmd: "recover",
                    otp: lostotphash
                }, o))
            };
        if (g_indexeddb) {
            var l = {
                rows: {
                    item: function(e) {
                        return this[e]
                    },
                    length: 0
                }
            };
            t.transaction("LastPassData", "readonly").objectStore("LastPassData").openCursor(IDBKeyRange.only(db_prepend(a) + "_otp")).onsuccess = function(e) {
                var t = e.target.result;
                t ? (l.rows[l.rows.length] = t.value, l.rows.length++, t.continue()) : i(null, l)
            }
        } else t.transaction(function(e) {
            e.executeSql("SELECT * FROM LastPassData WHERE username_hash=? and type=?", [db_prepend(a), "otp"], i, function(e, t) {
                console_log(t)
            })
        })
    } else g_lastpoll = lastlogin = (new Date).getTime(), console_log("server.js : Requesting login.php B"), lpMakeRequest(base_url + "login.php", r, lpLoginResponse, lpLoginError)
}

function lpOTPUploadResponse(e, t, a) {
    if (4 == e.readyState && 200 == e.status && e.responseXML && e.responseXML.documentElement) {
        var r = opendb();
        createDataTable(r), r && (g_indexeddb ? r.transaction("LastPassData", "readwrite").objectStore("LastPassData").put({
            username_hash: db_prepend(g_username_hash),
            type: "otp",
            data: AES.bin2hex(a),
            usertype: db_prepend(g_username_hash) + "_otp"
        }) : r.transaction(function(e) {
            e.executeSql("REPLACE INTO LastPassData (username_hash, type, data) VALUES (?, ?, ?)", [db_prepend(g_username_hash), "otp", AES.bin2hex(a)], function(e, t) {
                console_log("server.js : inserted")
            }, function(e, t) {
                console_log(t)
            })
        }))
    }
}

function savePassword(e, t, a, r, n) {
    var o = lp_gettld_url(t);
    0 != t.indexOf("chrome://") && 0 != t.indexOf("chrome-extension://") || (o = t = "Browser");
    var s = gs("Generated Password for") + " " + o,
        i = (new PostParams).add("url", AES.url2hex(t)).add("password", enc(e)).add("name", enc(s)).add("iid", g_identity).add("method", get_method()).add("token", g_token);
    for (prop in r && i.add("nofill", 1), n) i.add(prop, n[prop]);
    lpMakeRequest(base_url + "save_gen_pw.php", i.toString(), lpPopulateGeneratedPassword, null, a)
}

function lpPopulateGeneratedPassword(e, t, a) {
    if (4 == e.readyState && 200 == e.status && e.responseXML && e.responseXML.documentElement) {
        var r = e.responseXML.documentElement,
            n = r.getElementsByTagName("error");
        if (0 < n.length) {
            var o = n[0].getAttribute("notloggedin");
            if (!g_loggedinoffline && o && "1" == o) return void loggedOut(!1, "lpPopulateGeneratedPassword")
        }
        var s = r.getElementsByTagName("ok");
        if (0 < s.length) {
            var i = AES.hex2url(s[0].getAttribute("url")),
                l = crypto_atob(s[0].getAttribute("password")),
                g = {
                    cmd: "populategeneratedpassword",
                    url: i,
                    password: lpmdec(l, !0),
                    nofill: s[0].getAttribute("nofill"),
                    ff_currpass_regexp: get_ff_translation("ff_currpass_regexp")
                };
            sendCS(a, g, "all");
            var u = createNewAcct();
            u.tld = lp_gettld_url(i);
            var d = gs("Generated Password for") + " " + u.tld;
            u.aid = s[0].getAttribute("aid"), void 0 === g_tlds[u.tld] && (g_tlds[u.tld] = {}), g_tlds[u.tld][u.aid] = !0, add_ident_aid(u.aid), u.url = i, u.name = d, u.password = l, u.genpw = 1, g_sites[u.aid] = u, g_local_accts_version++, rewritelocalfile();
            var _ = s[0].getAttribute("accts_version");
            compare_accounts_versions(_, g_local_accts_version) || get_accts(), refresh_windows()
        }
    }
}

function addeditformfill(e, t, a, r) {
    var n = new PostParams;
    for (var o in n.add("method", get_method()), g_token && n.add("token", g_token), g_identity && n.add("iid", g_identity), e) n.add(o, e[o]);
    var s = !1;
    return void 0 !== t.group && "" != t.group && (s = issharedfolder(g_shares, t.group)), s && n.add("sharedfolderid", s.id), lpMakeRequest(base_url + "formfill.php", n.toString(), lpAddEditFormFillResponse, r, {
        site: t,
        successCallback: a,
        errorCallback: r
    }), !0
}

function deleteformfill(e, t, a, r, n, o, s) {
    if (a && !frame_and_topdoc_has_same_domain(r) && (ftd_report_error(r, "deleteformfill"), !lpConfirmYesNo(gs("Are you sure you would like to delete this Form Fill from your LastPass vault?")))) return !1;
    var i;
    if (!t)
        for (i = 0; i < g_formfills.length; i++)
            if (g_formfills[i].ffid == e) {
                if (g_formfills[i].pwprotect || g_prompts.view_ff_prompt) return security_prompt(function() {
                    deleteformfill(e, !0, a, r, n, o, s)
                }), !1;
                break
            } var l = !1;
    for (i = 0; i < g_formfills.length; i++)
        if (g_formfills[i].ffid == e) {
            l = issharedfolder(g_shares, void 0 !== g_formfills[i].group ? g_formfills[i].group : ""), g_formfills.splice(i, 1);
            break
        } g_local_accts_version++, rewritelocalfile();
    var g = (new PostParams).add("deleteext", 1).add("ffid", e).add("method", get_method()).add("iid", g_identity);
    return s && g.add("source", s), l && g.add("sharedfolderid", l.id), lpMakeRequest(base_url + "formfill.php", g.toString(), lpDeleteFormFillResponse, o, {
        ffid: e,
        successCallback: n,
        errorCallback: o
    }), !0
}

function lpAddEditFormFillResponse(e, t, a) {
    var r = a.site;
    if (4 == e.readyState && 200 == e.status && e.responseXML && e.responseXML.documentElement) {
        var n = e.responseXML.documentElement,
            o = n.getElementsByTagName("error");
        if (0 < o.length) {
            var s = o[0].getAttribute("notloggedin");
            if (!g_loggedinoffline && s && "1" == s) return void loggedOut(!1, "lpAddEditFormFillResponse");
            var i = o[0].getAttribute("response");
            i && (a.errorCallback ? a.errorCallback(i) : alertfrombg(i))
        }
        var l = n.getElementsByTagName("result");
        if (0 < l.length) {
            var g = l[0].getAttribute("msg"),
                u = l[0].getAttribute("ffid"),
                d = l[0].getAttribute("cfids"),
                _ = l[0].getAttribute("accts_version"),
                c, p = [],
                f = "" == d ? [] : d.split(","),
                m = 0;
            for (c = 1; void 0 !== r["customfield" + c + "cfid"]; ++c) {
                var h = {};
                h.cfid = 0 != r["customfield" + c + "cfid"] ? r["customfield" + c + "cfid"] : m < f.length ? f[m++] : 0, h.text = r["customfield" + c + "text"], h.value = r["customfield" + c + "value"], h.alttext = r["customfield" + c + "alttext"], "" == h.text && "" == h.value && "" == h.alttext || p.push(h)
            }
            var b = r.cmd;
            for (delete r.cmd, delete r.deleteext, c = 1; void 0 !== r["customfield" + c + "cfid"]; ++c) delete r["customfield" + c + "cfid"], delete r["customfield" + c + "text"], delete r["customfield" + c + "value"], delete r["customfield" + c + "alttext"];
            if (r.custom_fields = p, "add" == b) r.ffid = u, add_ident_ffid(u), g_formfills.push(r);
            else
                for (c = 0; c < g_formfills.length; ++c)
                    if (u == g_formfills[c].ffid) {
                        g_formfills[c] = r;
                        break
                    } g_formfills.sort(function(e, t) {
                return e.decprofilename.toLowerCase() < t.decprofilename.toLowerCase() ? -1 : 1
            }), g_local_accts_version++, rewritelocalfile(), compare_accounts_versions(_, g_local_accts_version) || get_accts(), refresh_windows(), a.successCallback && a.successCallback(r), setTimeout(function() {
                recheckpage()
            }, 50)
        }
    }
}

function lpDeleteFormFillResponse(e, t, a) {
    if (4 == e.readyState && 200 == e.status && e.responseXML && e.responseXML.documentElement) {
        var r = e.responseXML.documentElement,
            n = r.getElementsByTagName("error");
        if (0 < n.length) {
            var o = n[0].getAttribute("notloggedin");
            if (!g_loggedinoffline && o && "1" == o) return void loggedOut(!1, "lpDeleteFormFillResponse")
        }
        var s = r.getElementsByTagName("result");
        if (0 < s.length) {
            var i = s[0].getAttribute("accts_version");
            compare_accounts_versions(i, g_local_accts_version) || get_accts(), refresh_windows(), a.successCallback && a.successCallback(), setTimeout(function() {
                recheckpage()
            }, 50)
        }
    }
}

function saveSiteFromSubmit(e, t, a, r) {
    var n = (new PostParams).add("auto", 1).add("method", get_method()).add("iid", g_identity),
        o = IntroTutorial.getState();
    o && o.enabled && (n.add("intour", "1"), n.add("tile", o.tile));
    try {
        for (var s in g_sites)
            if (g_sites[s].genpw && g_sites[s].tld == t.tld && lpmdec_acct(g_sites[s].password, !0, g_sites[s], g_shares) == lpmdec_acct(t.password, !0, t, g_shares)) {
                n.add("delgenpwaid", s), n.add("generated", "true");
                break
            }
    } catch (e) {}
    e += "&" + n.toString();
    var i = {
        url: base_url + "deliver_and_add.php",
        postdata: e,
        successCallback: a,
        errorCallback: r,
        acct: t
    };
    handleOfflineAccountUpdate(i, g_sites, "aid"), lpMakeRequest(i.url, e, lpSaveSiteResponse, r, i)
}

function updateFieldsFromSubmit(e, t, a, r) {
    e += "&auto=1" + get_identity_param();
    var n = {
        url: base_url + "gm_deliver.php",
        postdata: e,
        acct: t,
        successCallback: a,
        errorCallback: r
    };
    lpMakeRequest(n.url, e, lpUpdateFieldsResponse, null, n)
}

function handleOfflineAccountUpdate(e, t, a) {
    if (e.successCallback && isOffline()) {
        if ("0" === e.acct[a]) {
            var r = Preferences.get("tempID") + 1;
            e.acct[a] = r.toString(), Preferences.set("tempID", r)
        }
        t[e.acct[a]] = e.acct, e.successCallback(e.acct), increment_local_accts_version(), rewritelocalfile(), delete e.successCallback, delete e.errorCallback
    }
}

function saveAllSite(e, t, a, r) {
    var n;
    e += "&" + (new PostParams).add("auto", 1).add("method", get_method()).add("iid", g_identity).toString();
    var o = {
        url: base_url + "show.php",
        postdata: e,
        successCallback: a,
        errorCallback: r,
        acct: t
    };
    handleOfflineAccountUpdate(o, g_sites, "aid"), lpMakeRequest(o.url, e, lpSaveSiteResponse, o.errorCallback, o)
}

function saveSite(e, t, a, r) {
    var n = (new PostParams).add("auto", 1).add("method", get_method()).add("iid", g_identity);
    try {
        for (var o in g_sites)
            if (g_sites[o].genpw && g_sites[o].tld == t.tld && lpmdec_acct(g_sites[o].password, !0, g_sites[o], g_shares) == lpmdec_acct(t.password, !0, t, g_shares)) {
                n.add("delgenpwaid", o), n.add("generated", "true");
                break
            }
    } catch (e) {}
    e += "&" + n.toString();
    var s = is_application(t),
        i = s ? t.appaid : t.aid,
        l = {
            url: base_url + (s ? "addapp.php" : "show.php"),
            postdata: e,
            successCallback: a,
            errorCallback: r,
            acct: t
        };
    handleOfflineAccountUpdate(l, t.sn ? g_securenotes : s ? g_applications : g_sites, s ? "appaid" : "aid"), lpMakeRequest(l.url, e, lpSaveSiteResponse, l.errorCallback, l)
}

function openLinkedSites(e, t, a) {
    setTimeout(function() {
        openchangepw(e, t, a)
    }, 700)
}

function lpSaveSiteResponse(e, t, a) {
    if (a.aid = a.acct.aid, a.newvalues = a.acct.newvalues, a.handler = lpSaveSiteResponse, !rsa_shareeautopushesresponse(e, a) && 4 == e.readyState && 200 == e.status && e.responseXML && e.responseXML.documentElement) {
        var r = a.acct,
            n = e.responseXML.documentElement,
            o = n.getElementsByTagName("error");
        if (0 < o.length) {
            var s = o[0].getAttribute("notloggedin");
            if (!g_loggedinoffline && s && "1" == s) return void loggedOut(!1, "lpSaveSiteResponse");
            var i = o[0].getAttribute("response");
            i && (a.errorCallback ? a.errorCallback(i) : alertfrombg(i))
        }
        var l = n.getElementsByTagName("result");
        if (0 < l.length) {
            var g, u = 0;
            "accountreplaced" != l[0].getAttribute("msg") && !a.successCallback || u++, r.submit_id = l[0].getAttribute("submit_id"), r.captcha_id = l[0].getAttribute("captcha_id"), r.custom_js = l[0].getAttribute("custom_js");
            var d = l[0].getAttribute("attacherror");
            for (d && "" != d && alertfrombg(d), checkIconsVersion(), checkBigIconsVersion(r.posturl), checkBigIconsVersion(r.posturl, null, null, "sq"), inc = 0, newattach = Array(); null != l[0].getAttribute("att_" + inc);) newattach[l[0].getAttribute("att_" + inc)] = Array(), newattach[l[0].getAttribute("att_" + inc)].storagekey = l[0].getAttribute("attstorekey_" + inc), newattach[l[0].getAttribute("att_" + inc)].size = l[0].getAttribute("attsize_" + inc), inc++;
            var _ = is_application(r) ? "0" === r.appaid : "0" === r.aid;
            if (_) {
                var c = l[0].getAttribute("aid"),
                    p = l[0].getAttribute("urid");
                if (r.aid = r.fiid = c, r.urid = p, r.fields) {
                    var f = get_ff_translation("ff_captcha_regexp"),
                        m;
                    m = "" != f ? new RegExp(f, "i") : null;
                    for (var h = 0; h < r.fields.length; h++) r.fields[h].otherfield || "1" == r.fields[h].otherlogin || (r.fields[h].urid = p), m && (void 0 === r.captcha_id || "" == r.captcha_id) && "text" == r.fields[h].type && m.exec(r.fields[h].name) && (r.captcha_id = r.fields[h].name)
                }
                for (var h in add_ident_aid(r.aid), r.sn ? g_securenotes[r.aid] = r : (void 0 !== r.tld && "" != r.tld || (r.tld = lp_gettld_url(r.url)), void 0 === g_tlds[r.tld] && (g_tlds[r.tld] = {}), g_tlds[r.tld][r.aid] = !0, g_sites[r.aid] = r), g_sites) g_sites[h].genpw && g_sites[h].tld == r.tld && lpmdec_acct(g_sites[h].password, !0, g_sites[h], g_shares) == lpmdec_acct(r.password, !0, r, g_shares) && (void 0 !== g_tlds[g_sites[h].tld] && void 0 !== g_tlds[g_sites[h].tld][h] && delete g_tlds[g_sites[h].tld][h], delete g_sites[h]);
                var b = n.getElementsByTagName("field");
                if (b && 0 < b.length) {
                    r.fields = new Array;
                    for (var h = 0; h < b.length; h++) {
                        var v = b[h],
                            y = {};
                        if (y.name = v.getAttribute("name"), y.type = v.getAttribute("type"), y.value = v.getAttribute("value"), is_encrypted_field(y.type)) y.value = crypto_atob(y.value);
                        else if ("checkbox" == y.type || "radio" == y.type) {
                            y.checked = !1;
                            var w = y.value.match(/-([0-1])$/);
                            w && ("1" == w[1] && (y.checked = !0), y.value = y.value.substring(0, y.value.length - 2))
                        }
                        y.formname = "", r.fields[h] = y
                    }
                    u++
                }
            }
            if (!d && r.attacharraychanges && r.attacharraychanges.add) {
                for (var h in r.attacharraychanges.add)
                    if (r.attacharraychanges.add.hasOwnProperty(h)) {
                        r.attachpresent = "1";
                        var k = r.attacharraychanges.add[h];
                        _ && (k.parent = r.aid, k.id = r.aid + "-" + k.id), k.size = newattach[k.id].size, k.storagekey = newattach[k.id].storagekey
                    } applyattacharraychanges(r.attacharraychanges)
            } else d && "" != d && void 0 !== r.attacharraychanges && rollbackattacharrayadds(r.attacharraychanges);
            a.successCallback && (r.sn ? g_securenotes[r.aid] = r : is_application(r) ? g_applications[r.appaid] = r : g_sites[r.aid] = r);
            var A = parseInt(l[0].getAttribute("accts_version"));
            if (compare_accounts_versions(A, g_local_accts_version + 1) ? (g_local_accts_version = A, g_server_accts_version = A, rewritelocalfile(), lpdbgchallenge("running update because of item saved."), runChallenge()) : get_accts(), void 0 !== r.retrieveattach && 1 == r.retrieveattach) {
                var L = function() {
                    console.log("lpSaveSiteResponse : attachversion=" + attachversion + " > lp_local_attach_version=" + lp_local_attach_version + " --- calling getattach.php");
                    var e = "version=" + LP.en(lp_local_attach_version) + "&b64=1&chunked=1";
                    LP.lpMakeRequest(base_url + "getattach.php", e, lpSaveAttach)
                };
                null == lp_local_attach_version || -1 == lp_local_attach_version ? ReadFileGeneric(lpusername_hash + "_version.att", 25, function(e) {
                    lp_local_attach_version = e, lp_local_attach_version = lp_local_attach_version || 0, L()
                }) : L(), r.retrieveattach = null
            }
            refresh_windows(), a.successCallback && (r.sn || is_application(r) || Topics.get(Topics.SITE_ADDED).publish(r), a.successCallback(r)), setTimeout(function() {
                recheckpage()
            }, 50)
        }
    }
}

function lpUpdateFieldsResponse(e, t, a) {
    if (a.aid = a.acct.aid, a.newvalues = a.acct.newvalues, a.handler = lpUpdateFieldsResponse, !rsa_shareeautopushesresponse(e, a) && 4 == e.readyState && 200 == e.status && e.responseXML && e.responseXML.documentElement) {
        var r = a.acct,
            n = e.responseXML.documentElement,
            o = n.getElementsByTagName("error");
        if (0 < o.length) {
            var s = o[0].getAttribute("notloggedin");
            if (!g_loggedinoffline && s && "1" == s) return void loggedOut(!1, "lpUpdateFieldsResponse")
        }
        var i = n.getElementsByTagName("ok");
        if (0 < i.length) {
            var l = i[0].getAttribute("accts_version");
            if (compare_accounts_versions(l, g_local_accts_version)) {
                var g = i[0].getAttribute("urid"),
                    u = "0" == r.urid,
                    d = !u;
                if (u && (r.urid = g), r.fields)
                    for (var _ = 0; _ < r.fields.length; _++) u && !r.fields[_].otherfield && "1" != r.fields[_].otherlogin ? r.fields[_].urid = g : d && !r.fields[_].otherfield && "1" == r.fields[_].otherlogin && "0" == r.fields[_].urid && (r.fields[_].urid = g)
            } else get_accts();
            refresh_windows(), a.successCallback && a.successCallback(a.acct)
        } else a.errorCallback && a.errorCallback()
    }
}

function addNever(e) {
    g_neverurls.neveraccounts.push(e), g_local_accts_version++, rewritelocalfile();
    var t = "url=" + en(url2hex(e));
    lpMakeRequest(base_url + "add_never.php", t, null, null)
}

function deleteGroup(e, t, a, r, n, o, s) {
    var i = void 0 === o ? null : o;
    s = s || !1;
    var l = issharedfolder(g_shares, e),
        g = "";
    for (var u in g_sites) g_sites[u].group == e && (g += ("" == g ? "" : ",") + u);
    for (var u in g_securenotes) g_securenotes[u].group == e && (g += ("" == g ? "" : ",") + u);
    for (var u in g_applications) g_applications[u].group == e && (g += ("" == g ? "" : ",") + "app" + u);
    if ("" == g && !n) return deleteGroup("\\" + e, t, a, "deleteGroup", 1, i);
    if ("" == g && 1 == n) {
        if (null == i) return void console_log("server.js : Failed to find group and groupid is null");
        var d = null,
            g = "";
        for (var u in g_sites)
            if (g_sites[u].id == i) {
                d = g_sites[u].group;
                break
            } if (null == d)
            for (var u in g_securenotes)
                if (g_securenotes[u].id == i) {
                    d = g_securenotes[u].group;
                    break
                } if (null == d)
            for (var u in g_applications)
                if (g_applications[u].id == i) {
                    d = g_applications[u].group;
                    break
                } if (null != d) {
            for (var u in g_sites) g_sites[u].group == e && (g += ("" == g ? "" : ",") + u);
            for (var u in g_securenotes) g_securenotes[u].group == e && (g += ("" == g ? "" : ",") + u);
            for (var u in g_applications) g_applications[u].group == e && (g += ("" == g ? "" : ",") + "app" + u)
        }
        "" == g && (g = i, console_log("server.js : Still couldn't find stuff -- just using the passed groupid : aids=" + g))
    }
    return deleteAid(g, t, !1, s, a, e)
}

function checkmultiplefolders(e) {
    for (var t = !1, a = null, r = !0, n = 0; n < e.length; n++) {
        var o = e[n],
            s = get_record(o);
        if (s) {
            var i = issharedfolder(g_shares, s.group);
            if (i) {
                if (t) {
                    r = !1;
                    break
                }
                if (null == a) a = i.decsharename;
                else if (a != i.decsharename) {
                    r = !1;
                    break
                }
            } else {
                if (null != a) {
                    r = !1;
                    break
                }
                t = !0
            }
        }
    }
    return r || alertfrombg(gs("Sorry, you cannot perform this operation on a mix of shared and non-shared folders, or multiple shared folders at once.")), r
}

function deleteAid(e, t, a, r, n, o, s, i) {
    if (s && !frame_and_topdoc_has_same_domain(i)) {
        var l = get_record(e),
            g = "";
        if (l && ((g = l.useusername) || l.unencryptedUsername, g || l.sitename, g || l.name), ftd_report_error(i, "deleteaid"), !lpConfirmYesNo(gs("Are you sure you would like to delete this site from your LastPass vault?") + "\n\n" + g)) return !1
    }
    var u = e.split(",");
    if (!checkmultiplefolders(u)) return !1;
    for (var d = "", _ = 0, c = {}, p = 0; p < u.length; p++) {
        var f = u[p],
            m, h;
        if (is_application(f)) {
            if (!check_ident_appaid(f)) continue
        } else if (!check_ident_aid(f)) continue;
        if (is_application(f) ? (m = get_record(f), h = !1) : (m = g_sites[f], h = g_prompts.edit_site_prompt, m || (h = g_prompts.edit_sn_prompt, m = g_securenotes[f])), m) {
            if (d += ("" == d ? "" : ",") + f, void 0 !== m.sharefolderid) {
                _ = m.sharefolderid;
                var b = issharedfolder(g_shares, m.group);
                if (!checkreadonly(b)) return !1
            }
            if (!a && (m.pwprotect || h)) return security_prompt(function() {
                deleteAid(e, t, !0, r, n)
            }), !1;
            Policies.logNameEnabled() && "http://sn" == m.url && (c[f] = m.name)
        }
    }
    if ("" == d) return !1;
    var v = gs("Are you sure you would like to delete this site?");
    if (m.genpw ? v = gs("Are you sure you would like to delete this generated password?") : m.sn ? v = gs("Are you sure you would like to delete this secure note?") : is_application(m) && (v = gs("Are you sure you would like to delete this application?")), m.name && m.name.length && (v += " (" + m.name + ")"), 1 < u.length && (v = gs("Are you sure you would like to delete the selected items?")), m.group && "http://group" == m.url && (v = gs("Are you sure you would like to delete this folder?") + " (" + m.group + ")"), !r) try {
        if (null == t) {
            if (!confirm(v)) return !1
        } else if (!t.confirm(v)) return !1
    } catch (e) {}
    for (var y = d.split(","), w = "", p = 0; p < y.length; p++) {
        var f = y[p];
        if (is_application(f)) delete g_applications[get_appaid(f)];
        else {
            if (!m.sn && "http://group" != m.url) try {
                delete g_tlds[m.tld][f], 8 == (8 & g_loglogins) && (w += ("" == w ? "" : ",") + getusernamefromacct(g_sites[f]))
            } catch (e) {}
            delete g_sites[f], delete g_securenotes[f]
        }
    }
    g_local_accts_version++, rewritelocalfile();
    var k = "ajax=1&extjs=1&delete=1&aid=" + en(d);
    return Policies.logNameEnabled() && "http://sn" == m.url && (k += "&deletedobjects=" + AES.url2hex(JSON.stringify(c))), k += get_identity_param(), 0 != _ && (k += "&sharedfolderid=" + en(_)), "" != w && (k += "&un=" + en(AES.url2hex(w))), lpMakeRequest(base_url + "show.php", k, lpDeleteResponse), n && n(), !0
}

function lpDeleteResponse(e) {
    if (e && 4 == e.readyState && 200 == e.status && null != e.responseXML && null != e.responseXML.documentElement) {
        var t, a = e.responseXML.documentElement.getElementsByTagName("result");
        if (0 < a.length) {
            var r = parseInt(a[0].getAttribute("accts_version"));
            compare_accounts_versions(r, g_local_accts_version) ? runChallenge() : get_accts(), refresh_windows()
        }
    }
}

function editAid(e, t, a, r) {
    if (check_ident_aid(e))
        if (r) {
            var n, o;
            if (is_application(e) ? (n = get_record(e), o = !1) : (n = g_sites[e], o = g_prompts.edit_site_prompt, n || (o = g_prompts.edit_sn_prompt, n = g_securenotes[e])), !n) return;
            if (!a && (n.pwprotect || o)) return void(n.pwprotect ? security_prompt(function() {
                editAid(e, t, !0, r)
            }, null, null, !0, e) : security_prompt(function() {
                editAid(e, t, !0, r)
            }));
            for (var s in g_site_data = new Array, n) g_site_data[s] = n[s];
            g_site_data.openchpw = "1" == r && "1" == g_site_data.pwch ? 1 : 0, openURL(getchromeurl("site.html"))
        } else g_sites[e] ? LPPlatform.openTabDialog("site", {
            vaultItem: e
        }) : is_application(e) ? LPPlatform.openTabDialog("application", {
            vaultItem: 0 === e.indexOf("app") ? e.substring(3) : e
        }) : LPPlatform.openTabDialog("note", {
            vaultItem: e
        })
}

function saveFields(e, t, a, r, n) {
    if (a && a.newvalues && void 0 === a.newvalues.length) {
        var o = [];
        for (var s in a.newvalues) o.push(a.newvalues[s]);
        a.newvalues = o
    }(a = a || {}).successCallback = r, a.errorCallback = n, a.url = base_url + "fields.php?" + e, a.postdata = t, lpMakeRequest(a.url, t, lpSaveFieldsResponse, n, a)
}

function lpSaveFieldsResponse(e, t, a) {
    if (a.handler = lpSaveFieldsResponse, !rsa_shareeautopushesresponse(e, a) && 4 === e.readyState && 200 === e.status && e.responseXML && e.responseXML.documentElement) {
        var r = e.responseXML.documentElement,
            n = r.getElementsByTagName("response");
        if (0 < n.length) {
            var o = n[0].getAttribute("message");
            console_log("server.js : Save Fields failed: " + o)
        }
        var s = r.getElementsByTagName("error");
        if (0 < s.length) {
            var i = s[0].getAttribute("notloggedin");
            if (!g_loggedinoffline && i && "1" === i) return void loggedOut(!1, "lpSaveFieldsResponse")
        }
        var l = r.getElementsByTagName("result");
        if (0 < l.length) {
            var g = l[0].getAttribute("accts_version");
            compare_accounts_versions(g, g_local_accts_version) || get_accts(), refresh_windows(), a && a.successCallback && a.successCallback()
        }
    }
}
PostParams.prototype.add = function(e, t, a) {
    return !e || "string" != typeof e || "boolean" != typeof t && "number" != typeof t && "string" != typeof t || !a && this.params.hasOwnProperty(e) || (this.params[e] = String(t)), this
}, PostParams.prototype.remove = function(e) {
    return e && "string" == typeof e && this.params.hasOwnProperty(e) && delete this.params[e], this
}, PostParams.prototype.clear = function() {
    return this.params = {}, this
}, PostParams.prototype.toString = function() {
    var e = "";
    for (var t in this.params) this.params.hasOwnProperty(t) && ("" != e && (e += "&"), e += encodeURIComponent(t) + "=" + encodeURIComponent(this.params[t]));
    return e
}, fillGeneratedPassword = function() {
    var n = function(e, t, a, r) {
        var n;
        sendCS(e, {
            cmd: "populategeneratedpassword",
            url: t,
            password: a
        }), r.action = "formfill", sendLpImprove("genpassword", r)
    };
    return function(e, t, a, r) {
        e ? n(e, t, a, r) : get_selected_tab_data(null, function(e) {
            n(e.id, e.url, a, r)
        })
    }
}();
var g_lastpoll = null;

function poll_server_request() {
    if (!(null != g_lastpoll && g_lastpoll > (new Date).getTime() - 2) && (g_lastpoll = (new Date).getTime(), lploggedin && null == grid_getdata("active"))) {
        var e = pollserver_url + "poll_server.php",
            t = "";
        if (lpsendmpstrength && null != lpmpstrength && (t += "&mpstrength=" + LP.en(lpmpstrength)), !0 === g_prompts.improve)
            for (var a in g_events) g_events.hasOwnProperty(a) && (t += "&" + LP.en(a) + "=" + LP.en(g_events[a]));
        g_events = [], lpMakeRequest(e, t, poll_server_response, null), g_lastpoll = (new Date).getTime()
    }
}

function poll_server() {
    if (!g_nopoll) {
        if (lploggedin && null == grid_getdata("active")) {
            var t = (new Date).getTime(),
                e = lpGetPref("logOffAfterLoggedInVal", 0);
            if (0 < e && t - lastlogin > 60 * e) return lplogoff(!1, "logoffafterloggedin"), void setTimeout(function() {
                poll_server()
            }, 6e4);
            g_lastpollcheck = t, 1 == lpGetPref("logoffWhenCloseBrowser", 0) && 0 < lpGetPref("logoffWhenCloseBrowserVal", 0) && (lpPutUserPref("lastpollcheck", g_lastpollcheck), lpWriteAllPrefs());
            var a = 60 * parseInt(lpGetPref("pollServerVal", 15)),
                r = 1e3 * a,
                n = function(e) {
                    "locked" !== e && "idle" !== e || (r *= g_logoff_other_ses ? 12 : 60), t - g_lastpoll < r || poll_server_request()
                };
            "undefined" != typeof chrome && void 0 !== chrome.idle ? chrome.idle.queryState(a, n) : n("active")
        }
        setTimeout(function() {
            poll_server()
        }, 6e4)
    }
}

function poll_server_response(e) {
    if (4 === e.readyState)
        if (200 === e.status && null != e.responseXML && null != e.responseXML.documentElement) {
            var t, a = e.responseXML.documentElement.getElementsByTagName("ok");
            if (0 < a.length) {
                g_logoff_other_ses = "1" === a[0].getAttribute("logoff_other_ses");
                var r = parseInt(a[0].getAttribute("accts_version")),
                    n = a[0].getAttribute("newbreach"),
                    o = a[0].getAttribute("newalert"),
                    s = a[0].getAttribute("newbreach_msg");
                "true" === o && handle_new_alerts(a[0]), (g_server_accts_version = r) > g_local_accts_version ? (lplog("challenge: Poll server triggered a security challenge score update via version"), get_accts(), (g_iscompanyadmin && LPContentScriptFeatures.license_expiration && null !== g_company_license_exp_days && g_company_license_exp_days <= 7 || null !== g_company_trial_exp_days && g_company_trial_exp_days <= 7) && getCompanyLicenseData()) : lplog("poll_server: Accts (blob) was not updated because local account version: " + g_local_accts_version + " >= " + r);
                var i = a[0].getAttribute("attachversion"),
                    l = function() {
                        if (i > lp_local_attach_version) {
                            console.log("poll_server_response : attachversion=" + i + " > lp_local_attach_version=" + lp_local_attach_version + " --- calling getattach.php");
                            var e = "version=" + LP.en(lp_local_attach_version) + "&b64=1&chunked=1";
                            LP.lpMakeRequest(base_url + "getattach.php", e, lpSaveAttach)
                        }
                    };
                null == lp_local_attach_version || -1 === lp_local_attach_version ? ReadFileGeneric(lpusername_hash + "_version.att", 25, function(e) {
                    lp_local_attach_version = e, lp_local_attach_version = lp_local_attach_version || 0, l()
                }) : l(), lpsendmpstrength = null !== a[0].getAttribute("sendmpstrength");
                var g = a[0].getAttribute("note_title");
                if (g && g.length) {
                    var u = a[0].getAttribute("note_text"),
                        d = a[0].hasAttribute("note_url") ? a[0].getAttribute("note_url") : null;
                    LPNotifications.createNotification({
                        title: g,
                        message: u,
                        callback: function() {
                            openURL(d)
                        }
                    })
                }
            }
        } else {
            var _ = "Problem in poll_server_response. status=" + e.status;
            lpReportError(_, null)
        }
}

function upgrade_response(e) {
    if (4 == e.readyState)
        if (200 == e.status && null != e.responseXML && null != e.responseXML.documentElement) {
            var t, a = e.responseXML.documentElement.getElementsByTagName("updatecheck");
            0 < a.length ? (upgrade = "1" == a[0].getAttribute("upgrade"), upgradeurl = a[0].getAttribute("codebase")) : (upgrade = !1, upgradeurl = ""), g_ischrome ? (g_notification_type = "upgrade", g_notification_data = {
                upgrade: upgrade,
                upgradeurl: upgradeurl
            }, sendTS({
                cmd: "notification",
                type: "upgrade"
            })) : (g_issafari || g_isfirefoxsdk) && (upgrade ? confirm(gs("An Update is Available. Would you like to install?")) && openURL(upgradeurl) : alertfrombg(gs("No Updates Are Available")))
        } else {
            var r = "Problem in upgrade_response. status=" + e.status;
            lpReportError(r, null)
        }
}

function changePassword(e, t, a, r, n) {
    debug && console_log("changePassword called");
    var o = [];
    o.push(e);
    for (var s = new Array, i = 0, l = 0; l < t.length; l++) g_sites[t[l]] ? (lpmdec_acct(g_sites[t[l]].password, !0, g_sites[t[l]], g_shares) != e && (s[s.length] = t[l]), void 0 !== g_sites[t[l]].sharefolderid && (i = g_sites[t[l]].sharefolderid)) : debug && console_error("skipping bad aid in changePassword " + t[l]);
    if (0 != (t = s).length) {
        g_pending_pw_change = {};
        for (var g = "xml=1", u = new Array, d = "", l = 0; l < t.length; l++) {
            var _ = 0 < l ? l : "";
            g += "&username" + _ + "=dummy", g += "&password" + _ + "=" + LP.en(lpenc_acct(e, g_sites[t[l]], g_shares)), g += "&id" + _ + "=" + LP.en(t[l]), 8 == (8 & g_loglogins) && (d += ("" == d ? "" : ",") + getusernamefromacct(g_sites[t[l]])), o.push(e), g_pending_pw_change[t[l]] = lpenc_acct(e, g_sites[t[l]], g_shares);
            try {
                lp_in_array(g_sites[t[l]].tld, u) || (u[u.length] = g_sites[t[l]].tld)
            } catch (e) {}
        }
        try {
            for (var l in g_sites)
                if (g_sites[l].genpw && lp_in_array(g_sites[l].tld, u) && lpmdec_acct(g_sites[l].password, !0, g_sites[l], g_shares) == e) {
                    g += "&delgenpwaid=" + LP.en(l);
                    break
                }
        } catch (e) {}
        0 != i && (g += "&sharedfolderid=" + en(i)), "" != d && (g += "&un=" + en(AES.url2hex(d))), void 0 !== a && a && (g += "&autochange=1");
        var c = {
            aid: 0,
            postdata: g,
            url: base_url + "change_pw.php",
            newvalues: o,
            successCallback: r,
            errorCallback: n
        };
        lpMakeRequest(c.url, g, lpChangePasswordResponse, n, c)
    }
}

function lpChangePasswordResponse(e, t, a) {
    if (a.handler = lpChangePasswordResponse, !rsa_shareeautopushesresponse(e, a) && 4 == e.readyState && 200 == e.status && e.responseXML && e.responseXML.documentElement) {
        var r, n = e.responseXML.documentElement.getElementsByTagName("ok");
        if (0 < n.length) {
            if (debug) {
                var o = (new Date).getTime();
                console_log("received ok response from Password Change at " + o)
            }
            for (var s = crypto_atob(n[0].getAttribute("newpassword")), i = new Array, l = ""; n[0].hasAttribute("oldpassword" + l);) {
                var g = n[0].getAttribute("id" + l),
                    u = crypto_atob(n[0].getAttribute("oldpassword" + l)),
                    d = g_sites[g];
                if (lp_in_array(d.tld, i) || (i[i.length] = d.tld), debug && L("acct.password=" + d.password + " oldpassword=" + u + " newpassword=" + s), d.password != u && lpmdec_acct(d.password, !0, d, g_shares) != lpmdec_acct(u, !0, d, g_shares) || (d.password = s), d.fields)
                    for (var _ = 0; _ < d.fields.length; _++) "password" != d.fields[_].type || d.fields[_].value != u && lpmdec_acct(d.fields[_].value, !0, d, g_shares) != lpmdec_acct(u, !0, d, g_shares) || (d.fields[_].value = s);
                delete g_pending_pw_change[d.aid], d.last_pwchange_gmt = parseInt((new Date).getTime() / 1e3), "" == l ? l = 1 : l++
            }
            for (var _ in g_sites) g_sites[_].genpw && lp_in_array(g_sites[_].tld, i) && lpmdec_acct(g_sites[_].password, !0, g_sites[_], g_shares) == lpmdec(s, !0) && (verbose_log(sprintf("CHG: deleting generated password entry id=%s for password=%s", _, g_show_pw_in_logs || g_isadmin ? lpmdec(s, !0) : "REDACTED")), void 0 !== g_tlds[g_sites[_].tld] && void 0 !== g_tlds[g_sites[_].tld][_] && delete g_tlds[g_sites[_].tld][_], delete g_sites[_]);
            g_local_accts_version++, rewritelocalfile(), a.successCallback && a.successCallback();
            var c = parseInt(n[0].getAttribute("accts_version"));
            compare_accounts_versions(c, g_local_accts_version) || get_accts()
        } else a.errorCallback && a.errorCallback()
    }
}
var lpyubidata = {};

function yubikey_getotp(e, t) {
    grid_setdata("active", "1"), lpdbg("yubikey", "Asking user for fresh otp");
    var a = t && t.getAttribute("trustexpired") ? t.getAttribute("trustexpired") : 0,
        r = t && t.getAttribute("trustlabel") ? t.getAttribute("trustlabel") : "",
        n = getBG(),
        o = void 0 !== n && n && (n.g_language, 1) ? n.g_language : "en_US";
    o = encodeURIComponent(o);
    var s = "",
        i = e;
    return openURL(getchromeurl("lp_toolstrip.html?browseraction=1&yubikey=1&trustexpired=" + encodeURIComponent(a) + "&trustlabel=" + encodeURIComponent(r) + "&lplanguage=" + o), function() {}, null, !1, !1, !1, !1, !0), s
}

function yubikey_setdata(e, t) {
    lpyubidata[e] = t
}

function yubikey_getdata(e) {
    return void 0 === lpyubidata[e] ? null : lpyubidata[e]
}

function yubikey_cleardata() {
    lpdbg("yubikey", "clearing data"), lpyubidata = {}
}

function yubikey_auth(e, t, a) {
    if (grid_setdata("active", null), "" != e) {
        if ("1" == yubikey_getdata("offline")) {
            var r = e.substring(0, 12);
            return yubikey_setdata("password_offline", e = SHA256(SHA256(SHA256(fix_username("LastPassIsGreat") + r) + r))), offlineloginsuccessful("offline", 0, a), lpReadAcctsData(), void yubikey_setdata("offline", "0")
        }
        var n = null,
            o = null,
            s = null,
            i = null;
        i = yubikey_getdata("postdata") ? (n = yubikey_getdata("postdata") + "&otp=" + encodeURIComponent(e), o = "login.php", s = lpLoginResponse, lpLoginError) : (n = sesame_getdata("logincheckpostdata") + "&otp=" + encodeURIComponent(e), o = "login_check.php", s = lpLoginCheckResponse, lpLoginCheckError), "" != t && (n += "&trustlabel=" + encodeURIComponent(t));
        var l = yubikey_getdata("fromwebsite");
        console_log("server.js : Requesting " + o + " C"), lpMakeRequest(base_url + o, n, s, i, l)
    } else g_local_key && lpshowError("LoginError", !1, !0), loggedOut(!1, "yubikey_auth_error")
}
var lpgoogleauthdata = {};

function googleauth_getotp(e, t) {
    grid_setdata("active", "1"), lpdbg("googleauth", "Asking user for fresh otp");
    var a = t && t.getAttribute("trustexpired") ? t.getAttribute("trustexpired") : 0,
        r = t && t.getAttribute("trustlabel") ? t.getAttribute("trustlabel") : "",
        n = getBG(),
        o = void 0 !== n && n && (n.g_language, 1) ? n.g_language : "en_US";
    o = encodeURIComponent(o);
    var s = "",
        i = e;
    return openURL(getchromeurl("lp_toolstrip.html?browseraction=1&googleauth=1&trustexpired=" + encodeURIComponent(a) + "&trustlabel=" + encodeURIComponent(r) + "&lplanguage=" + o), function() {}, null, !1, !1, !1, !1, !0), s
}

function microsoftauth_getotp(e, t) {
    grid_setdata("active", "1"), lpdbg("microsoftauth", "Asking user for fresh otp");
    var a = t && t.getAttribute("trustexpired") ? t.getAttribute("trustexpired") : 0,
        r = t && t.getAttribute("trustlabel") ? t.getAttribute("trustlabel") : "",
        n = getBG(),
        o = void 0 !== n && n && (n.g_language, 1) ? n.g_language : "en_US";
    o = encodeURIComponent(o);
    var s = "",
        i = e;
    return openURL(getchromeurl("lp_toolstrip.html?browseraction=1&googleauth=1&microsoftauth=1&trustexpired=" + encodeURIComponent(a) + "&trustlabel=" + encodeURIComponent(r) + "&lplanguage=" + o), function() {}, null, !1, !1, !1, !1, !0), s
}

function googleauth_setdata(e, t) {
    lpgoogleauthdata[e] = t
}

function googleauth_getdata(e) {
    return void 0 === lpgoogleauthdata[e] ? null : lpgoogleauthdata[e]
}

function googleauth_cleardata() {
    lpdbg("googleauth", "clearing data"), lpgoogleauthdata = {}
}

function googleauth_auth(e, t) {
    if (grid_setdata("active", null), "" != e) {
        if ("1" == googleauth_getdata("offline")) {
            var a = e.substring(0, 12);
            return googleauth_setdata("password_offline", e = SHA256(SHA256(SHA256(fix_username("LastPassIsGreat") + a) + a))), offlineloginsuccessful("offline", 0), lpReadAcctsData(), void googleauth_setdata("offline", "0")
        }
        var r = null,
            n = null,
            o = null,
            s = null;
        s = googleauth_getdata("postdata") ? (r = googleauth_getdata("postdata") + "&otp=" + encodeURIComponent(e), n = "login.php", o = lpLoginResponse, lpLoginError) : (r = sesame_getdata("logincheckpostdata") + "&otp=" + encodeURIComponent(e), n = "login_check.php", o = lpLoginCheckResponse, lpLoginCheckError), "" != t && (r += "&trustlabel=" + encodeURIComponent(t));
        var i = googleauth_getdata("fromwebsite");
        console_log("server.js : Requesting " + n + " C"), lpMakeRequest(base_url + n, r, o, s, i)
    } else g_local_key && lpshowError("LoginError", !1, !0), loggedOut(!1, "googleauth_auth_error")
}
var lpoutofbanddata = {},
    g_last_otpcheck;

function outofband_getotp(e, t) {
    grid_setdata("active", "1"), lpdbg("outofband", "Asking user for fresh otp");
    var a = t && t.getAttribute("trustexpired") ? t.getAttribute("trustexpired") : 0,
        r = t && t.getAttribute("trustlabel") ? t.getAttribute("trustlabel") : "",
        n = getBG(),
        o = void 0 !== n && n && (n.g_language, 1) ? n.g_language : "en_US";
    o = encodeURIComponent(o);
    var s = "",
        i = e;
    return g_trustlabel = "", "1" == t.getAttribute("preferduowebsdk") ? (lpTurnOffIcon(), openbaseurl("duo.php?canexpire=1&cansetuuid=1&username=" + encodeURIComponent(g_username) + "&trustexpired=" + encodeURIComponent(a) + "&trustlabel=" + encodeURIComponent(r))) : openURL(getchromeurl("lp_toolstrip.html?browseraction=1&outofband=1&trustexpired=" + encodeURIComponent(t.getAttribute("trustexpired")) + "&trustlabel=" + encodeURIComponent(t.getAttribute("trustlabel")) + "&capabilities=" + encodeURIComponent(t.getAttribute("capabilities")) + "&allowtrust=" + encodeURIComponent(t.getAttribute("allowtrust")) + "&smshash=" + encodeURIComponent(t.getAttribute("smshash")) + "&smstime=" + encodeURIComponent(t.getAttribute("smstime")) + "&smsuid=" + encodeURIComponent(t.getAttribute("smsuid")) + "&outofbandimage=" + encodeURIComponent(AES.bin2hex(t.getAttribute("outofbandimage"))) + "&sms_nextcode=" + encodeURIComponent(t.getAttribute("sms_nextcode")) + "&textoverride=" + encodeURIComponent(t.getAttribute("textoverride")) + "&lplanguage=" + o), function() {}, null, !1, !1, !1, !1, !0), s
}

function outofband_setdata(e, t) {
    lpoutofbanddata[e] = t
}

function outofband_getdata(e) {
    return void 0 === lpoutofbanddata[e] ? null : lpoutofbanddata[e]
}

function outofband_cleardata() {
    lpdbg("outofband", "clearing data"), lpoutofbanddata = {}
}
var g_otpcheck_complete = !1,
    g_otpwin_closed = !1,
    g_trustlabel = "";

function outofband_handler(e, t, a) {
    if (!g_otpwin_closed)
        if (e && 4 == e.readyState && 200 == e.status && 0 < e.responseText.indexOf("outofbandrequired")) {
            if (null != e.responseXML && null != e.responseXML.documentElement) {
                var r = e.responseXML.documentElement.getElementsByTagName("error");
                if (0 < r.length) {
                    var n = r[0].getAttribute("retryid"),
                        o;
                    if (n && "" != n)
                        if (5e3 <= (new Date).getTime() - g_last_otpcheck) {
                            var s = outofband_getdata("postdata") + "&outofbandrequest=1&outofbandretry=1&outofbandretryid=" + encodeURIComponent(n);
                            g_last_otpcheck = (new Date).getTime(), lpMakeRequest(base_url + "login.php", s, outofband_handler, t, a)
                        }
                }
            }
        } else g_otpcheck_complete = !0, closecurrenttab("lp_toolstrip.html?browseraction=1&outofband=1"), lpLoginResponse(e, t, a), "" != g_trustlabel && null != e.responseXML && null != e.responseXML.documentElement && 0 < e.responseXML.documentElement.getElementsByTagName("ok").length && getuuid(function(e) {
            lpMakeRequest(base_url + "trust.php", "canexpire=1&cansetuuid=1&uuid=" + encodeURIComponent(e) + "&trustlabel=" + encodeURIComponent(g_trustlabel), function(e) {
                if (e && 4 == e.readyState && 200 == e.status && e.responseXML && e.responseXML.documentElement) {
                    var t = e.responseXML.documentElement.getElementsByTagName("ok");
                    if (t && 0 < t.length && t[0].hasAttribute("trustuuid")) {
                        var a = t[0].getAttribute("trustuuid");
                        a && "" != a && setuuid(a, g_username_hash)
                    }
                }
            }), g_trustlabel = ""
        }, g_username_hash)
}

function outofband_auth(e, t) {
    if (grid_setdata("active", null), "" != e) {
        if (g_otpwin_closed = g_otpcheck_complete = "dummy" != e, "1" == outofband_getdata("offline")) {
            var a = e.substring(0, 12);
            return outofband_setdata("password_offline", e = SHA256(SHA256(SHA256(fix_username("LastPassIsGreat") + a) + a))), offlineloginsuccessful("offline", 0), lpReadAcctsData(), void outofband_setdata("offline", "0")
        }
        var r = null,
            n = null,
            o = null,
            s = null;
        s = outofband_getdata("postdata") ? (r = outofband_getdata("postdata"), n = "login.php", o = lpLoginResponse, lpLoginError) : (r = sesame_getdata("logincheckpostdata"), n = "login_check.php", o = lpLoginCheckResponse, lpLoginCheckError), "dummy" != e && (r += "&otp=" + encodeURIComponent(e)), "" != t && (r += "&trustlabel=" + encodeURIComponent(t)), r += "&outofbandrequest=1";
        var i = outofband_getdata("fromwebsite");
        console_log("server.js : Requesting " + n + " C"), g_last_otpcheck = (new Date).getTime(), lpMakeRequest(base_url + n, r, "dummy" == e ? outofband_handler : lpLoginResponse, s, i)
    } else g_otpcheck_complete || (g_otpwin_closed = !0, g_local_key && lpshowError("LoginError", !1, !0), loggedOut(!1, "outofband_auth_error"))
}
var lpsecurityquestiondata = {};

function securityquestion_getotp(e, t) {
    if (!t.getAttribute("redirecturl")) {
        var a = getBG(),
            r = void 0 !== a && a && (a.g_language, 1) ? a.g_language : "en_US";
        r = encodeURIComponent(r), grid_setdata("active", "1"), lpdbg("securityquestion", "Asking user for fresh otp");
        var n = "",
            o = e;
        return getuuid(function(e) {
            openURL(getchromeurl("lp_toolstrip.html?browseraction=1&securityquestion=1&trustexpired=" + encodeURIComponent(t.getAttribute("trustexpired")) + "&trustlabel=" + encodeURIComponent(t.getAttribute("trustlabel")) + "&uuid=" + encodeURIComponent(e) + "&question=" + encodeURIComponent(t.getAttribute("question")) + "&autotrust=" + encodeURIComponent(t.getAttribute("autotrust")) + "&hidedisable=" + encodeURIComponent(t.getAttribute("hidedisable")) + "&reseturl=" + encodeURIComponent(t.getAttribute("reseturl")) + "&lplanguage=" + r), function() {}, null, !1, !1, !1, !1, !0), securityquestion_setdata("reseturl", t.getAttribute("reseturl"))
        }, g_username_hash), n
    }
    openURL(t.getAttribute("redirecturl"))
}

function securityquestion_setdata(e, t) {
    lpsecurityquestiondata[e] = t
}

function securityquestion_getdata(e) {
    return void 0 === lpsecurityquestiondata[e] ? null : lpsecurityquestiondata[e]
}

function securityquestion_cleardata() {
    lpdbg("securityquestion", "clearing data"), lpsecurityquestiondata = {}
}

function securityquestion_auth(e, t) {
    if (grid_setdata("active", null), "" != e) {
        if ("1" == securityquestion_getdata("offline")) {
            var a = e.substring(0, 12);
            return securityquestion_setdata("password_offline", e = SHA256(SHA256(SHA256(fix_username("LastPassIsGreat") + a) + a))), offlineloginsuccessful("offline", 0), lpReadAcctsData(), void securityquestion_setdata("offline", "0")
        }
        var r = null,
            n = null,
            o = null,
            s = null;
        s = securityquestion_getdata("postdata") ? (r = securityquestion_getdata("postdata") + "&otp=" + encodeURIComponent(e), n = "login.php", o = lpLoginResponse, lpLoginError) : (r = sesame_getdata("logincheckpostdata") + "&otp=" + encodeURIComponent(e), n = "login_check.php", o = lpLoginCheckResponse, lpLoginCheckError), "" != t && (r += "&trustlabel=" + encodeURIComponent(t));
        var i = securityquestion_getdata("fromwebsite");
        console_log("server.js : Requesting " + n + " C"), lpMakeRequest(base_url + n, r, o, s, i)
    } else g_local_key && lpshowError("LoginError", !1, !0), loggedOut(!1, "securityquestion_auth_error")
}
var lpsesamedata = {},
    lpsesameotp = null;

function sesame_setotp(e) {
    lpdbg("sesame", "browser forwarded OTP => sesame_setotp called"), lpsesameotp = e
}

function sesame_getotp(e, t) {
    if (grid_setdata("active", "1"), e && lpsesameotp) {
        lpdbg("sesame", "Not requesting OTP - using value passed to browser");
        var a = lpsesameotp;
        return lpsesameotp = null, sesame_auth(a, ""), a
    }
    lpdbg("sesame", "Asking user for fresh otp");
    var r = t && t.getAttribute("trustexpired") ? t.getAttribute("trustexpired") : 0,
        n = t && t.getAttribute("trustlabel") ? t.getAttribute("trustlabel") : "",
        o = getBG(),
        s = void 0 !== o && o && (o.g_language, 1) ? o.g_language : "en_US";
    s = encodeURIComponent(s);
    var i = "",
        l = e;
    return openURL(getchromeurl("lp_toolstrip.html?browseraction=1&sesame=1&trustexpired=" + encodeURIComponent(r) + "&trustlabel=" + encodeURIComponent(n) + "&lplanguage=" + s), function() {}, null, !1, !1, !1, !1, !0), i
}

function sesame_setdata(e, t) {
    lpsesamedata[e] = t
}

function sesame_getdata(e) {
    return void 0 === lpsesamedata[e] ? null : lpsesamedata[e]
}

function sesame_cleardata() {
    lpdbg("sesame", "clearing data"), lpsesamedata = {}
}

function sesame_auth(e, t) {
    if (grid_setdata("active", null), "" != e) {
        if ("1" == sesame_getdata("offline")) return sesame_setdata("password_offline", e), offlineloginsuccessful("offline", 0), lpReadAcctsData(), void sesame_setdata("offline", "0");
        var a = null,
            r = null,
            n = null,
            o = null;
        o = sesame_getdata("postdata") ? (a = sesame_getdata("postdata") + "&sesameotp=" + encodeURIComponent(e), r = "login.php", n = lpLoginResponse, lpLoginError) : (a = sesame_getdata("logincheckpostdata") + "&sesameotp=" + encodeURIComponent(e), r = "login_check.php", n = lpLoginCheckResponse, lpLoginCheckError), "" != t && (a += "&trustlabel=" + encodeURIComponent(t));
        var s = sesame_getdata("fromwebsite");
        console_log("server.js : Requesting " + r + " D"), lpMakeRequest(base_url + r, a, n, o, s)
    } else g_local_key && lpshowError("LoginError", !1, !0), loggedOut(!1, "sesame_auth_error")
}
var lpgriddata = {},
    lpgridvalues = null;

function grid_getvalues(e, t, a) {
    var r = getBG(),
        n = void 0 !== r && r && (r.g_language, 1) ? r.g_language : "en_US";
    n = encodeURIComponent(n), grid_setdata("active", "1"), openURL(getchromeurl("lp_toolstrip.html?browseraction=1&grid=1&trustexpired=" + encodeURIComponent(a.getAttribute("trustexpired")) + "&trustlabel=" + encodeURIComponent(a.getAttribute("trustlabel")) + "&challenge=" + encodeURIComponent(t)) + "&lplanguage=" + n)
}

function grid_setdata(e, t) {
    lpgriddata[e] = t
}

function grid_getdata(e) {
    return void 0 === lpgriddata[e] ? null : lpgriddata[e]
}

function grid_cleardata() {
    lpdbg("grid", "clearing data"), lpgriddata = {}
}

function grid_auth(e, t) {
    if (grid_setdata("active", null), "" != e) {
        var a = null,
            r = null,
            n = null,
            o = null;
        o = grid_getdata("postdata") ? (a = grid_getdata("postdata") + "&gridresponse=" + encodeURIComponent(e), r = "login.php", n = lpLoginResponse, lpLoginError) : (a = sesame_getdata("logincheckpostdata") + "&gridresponse=" + encodeURIComponent(e), r = "login_check.php", n = lpLoginCheckResponse, lpLoginCheckError), "" != t && (a += "&trustlabel=" + encodeURIComponent(t)), grid_getdata("wxsessid") && (a += "&wxsessid=" + encodeURIComponent(grid_getdata("wxsessid")));
        var s = grid_getdata("fromwebsite");
        console_log("server.js : Requesting " + r + " E"), lpMakeRequest(base_url + r, a, n, o, s)
    } else g_local_key && lpshowError("LoginError", !1, !0), loggedOut(!1, "grid_auth_error")
}
var lpmultifactordata = {},
    lpmultifactorresponse = null;

function multifactor_getresponse(e, t) {
    var a = "",
        r = "";
    multifactor_setdata("active", "1");
    var n = multifactor_getdata("type"),
        o = "";
    multifactor_getdata("type") == n && (o = multifactor_getdata("password_offline")), o && 64 == o.length || (o = SHA256(SHA256(fix_username(e) + n)));
    var s = function() {
        if (multifactor_setdata("password_offline", o), multifactor_setdata("type", n), t) {
            if ("omnikey" == n) return void omnikey_get_pin(function(e) {
                have_binary_function("omnikey_decrypt") ? call_binary_function("omnikey_decrypt", t, e, function(e) {
                    multifactor_auth(a = e, "")
                }) : multifactor_auth(a, "")
            });
            a = "" != o ? SHA256(o + t) : ""
        } else a = o;
        multifactor_auth(a, "")
    };
    o && 64 == o.length || "trueapi" != n || !have_binary_function("trueapi_get_hash") ? s() : call_binary_function("trueapi_get_hash", e, function(e) {
        o = e, s()
    })
}

function multifactor_setdata(e, t) {
    lpmultifactordata[e] = t
}

function multifactor_getdata(e) {
    return void 0 === lpmultifactordata[e] ? null : lpmultifactordata[e]
}

function multifactor_cleardata() {
    lpdbg("multifactor", "clearing data"), lpmultifactordata = {}
}

function multifactor_auth(e, t) {
    if (multifactor_setdata("active", null), "" != e) {
        if ("1" == multifactor_getdata("offline")) return multifactor_setdata("password_offline", e), "omnikey" != multifactor_getdata("type") && multifactor_setdata("type", "trueapi"), offlineloginsuccessful("offline", 0), lpReadAcctsData(), void multifactor_setdata("offline", "0");
        var a = null,
            r = null,
            n = null,
            o = null;
        o = multifactor_getdata("postdata") ? (a = multifactor_getdata("postdata") + "&multifactorresponse=" + encodeURIComponent(e), r = "login.php", n = lpLoginResponse, lpLoginError) : (a = sesame_getdata("logincheckpostdata") + "&multifactorresponse=" + encodeURIComponent(e), r = "login_check.php", n = lpLoginCheckResponse, lpLoginCheckError), "" != t && (a += "&trustlabel=" + encodeURIComponent(t)), multifactor_getdata("wxsessid") && (a += "&wxsessid=" + encodeURIComponent(multifactor_getdata("wxsessid"))), multifactor_getdata("type") && (a += "&type=" + encodeURIComponent(multifactor_getdata("type")));
        var s = multifactor_getdata("fromwebsite");
        console_log("server.js : Requesting " + r + " F"), lpMakeRequest(base_url + r, a, n, o, s)
    } else g_local_key && lpshowError("LoginError", !1, !0, !1, get_multifactor_disable_url(g_username, multifactor_getdata("type"))), loggedOut(!1, "multifactor_auth_error")
}

function multifactor_response(e, t) {
    lpdbg("multifactor", "in multifactor_response"), void 0 !== e.callback ? (lpdbg("multifactor", "calling callback"), e.callback(t)) : sendCS(e.tabid, t, e.docnum)
}

function lpSetupMultifactorResponse(e, t, a) {
    if (lpdbg("multifactor", "setupmultifactorresponse: " + e.readyState), 4 == e.readyState) {
        if (lpdbg("multifactor", "setupmultifactorresponse: " + e.status), 200 == e.status && null != e.responseXML && null != e.responseXML.documentElement) {
            var r, n = e.responseXML.documentElement.getElementsByTagName("ok");
            if (0 < n.length) {
                var o = n[0].getAttribute("type");
                lpdbg("multifactor", "setupmultifactorresponse: " + o);
                var s = n[0].getAttribute("hash");
                if ("trueapi" == o) {
                    if (void 0 !== a.password) {
                        if (have_binary_function("trueapi_store_default_login")) return void call_binary_function("trueapi_store_hash", g_username, s, function(e) {
                            if (e) {
                                var t = function(e) {
                                    e == s ? call_binary_function("trueapi_store_default_login", g_username, a.password, s, function(e) {
                                        e ? (setsinglefactortype(o), "1" != a.silent && multifactor_response(a, {
                                            cmd: "setupsinglefactor",
                                            result: "done"
                                        })) : lpSetupMultifactorError(a)
                                    }) : lpSetupMultifactorError(a)
                                };
                                "1" == a.silent ? t(s) : call_binary_function("trueapi_get_hash", g_username, function(e) {
                                    t(e)
                                })
                            } else lpSetupMultifactorError(a)
                        })
                    } else if ("1" != a.silent && have_binary_function("trueapi_store_hash")) return void call_binary_function("trueapi_store_hash", g_username, s, function(e) {
                        e ? call_binary_function("trueapi_get_hash", g_username, function(e) {
                            e == s ? multifactor_response(a, {
                                cmd: "setupmultifactor",
                                result: "done"
                            }) : lpSetupMultifactorError(a)
                        }) : lpSetupMultifactorError(a)
                    })
                } else if ("vtapi" == o) {
                    if (have_binary_function("lpvt_store_data")) return void call_binary_function("lpvt_store_data", encodeURIComponent(g_username) + "|" + encodeURIComponent(a.password), gs("Swipe finger"), gs("Swipe your finger on the fingerprint sensor"), gs("Cancel"), gs("Swipe current user's finger"), function(e) {
                        e ? (setsinglefactortype(o), "1" != a.silent && multifactor_response(a, {
                            cmd: "setupsinglefactor",
                            result: "done"
                        })) : lpSetupMultifactorError(a)
                    })
                } else if ("validity" == o) {
                    if (have_binary_function("validity_store_data")) return void call_binary_function("validity_store_data", encodeURIComponent(g_username) + "|" + encodeURIComponent(a.password), gs("Swipe finger"), gs("Swipe your finger on the fingerprint sensor"), gs("Cancel"), function(e) {
                        e ? (setsinglefactortype(o), "1" != a.silent && multifactor_response(a, {
                            cmd: "setupsinglefactor",
                            result: "done"
                        })) : lpSetupMultifactorError(a)
                    })
                } else if ("winbio" == o) {
                    if (have_binary_function("winbio_store_data")) return void call_binary_function("winbio_has_fingerprints", function(e) {
                        lpdbg("multifactor", "winbio_has_fingerprints: " + e), e ? call_binary_function("winbio_store_data", encodeURIComponent(g_username) + "|" + encodeURIComponent(a.password), gs("Swipe finger"), gs("Swipe your finger on the fingerprint sensor"), gs("Cancel"), function(e) {
                            lpdbg("multifactor", "winbio_store_data: " + e), e ? (setsinglefactortype(o), "1" != a.silent && (lpdbg("multifactor", "calling multifactor_response"), multifactor_response(a, {
                                cmd: "setupsinglefactor",
                                result: "done"
                            }))) : lpSetupMultifactorError(a)
                        }) : (have_binary_function("winbio_launch_enrollment") && call_binary_function("winbio_launch_enrollment"), "1" != a.silent && multifactor_response(a, {
                            cmd: "setupsinglefactor",
                            result: "notenrolled"
                        }))
                    })
                } else {
                    if ("nymi" == o) return void(have_binary_function("nymi_provision") && call_binary_function("nymi_provision", encodeURIComponent(g_username) + "|" + encodeURIComponent(a.password), function(e) {
                        lpdbg("multifactor", "nymi_provision: " + e), e ? (setsinglefactortype(o), "1" != a.silent && (lpdbg("multifactor", "calling multifactor_response"), call_binary_function("nymi_read_data", function(e) {
                            multifactor_response(a, {
                                cmd: "setupsinglefactor",
                                result: "done_" + e
                            })
                        }))) : lpSetupMultifactorError(a)
                    }));
                    if ("omnikey" == o) return void multifactor_response(a, {
                        cmd: "setupsinglefactor",
                        result: "done"
                    })
                }
            }
        }
        lpSetupMultifactorError(a)
    }
}

function lpSetupMultifactorError(e) {
    1 != e.silent && multifactor_response(e, {
        cmd: void 0 !== e.password ? "setupsinglefactor" : "setupmultifactor",
        result: "error"
    })
}

function get_multifactor_disable_url(e, t) {
    return "multifactordisable.php?cmd=sendemail&username=" + en(e) + "&type=" + en(t)
}

function lp_StartLogin(e, t) {
    console_log("server.js : lp_StartLogin fromlogincheckack=" + e), g_loginstarted || (g_loginstarted = !0, e ? (rsa_setpendingsharests(), lplogincheck("frompipes", t)) : httptest())
}

function lpDownloadDataResponse(e, t, a) {
    if (e && 200 == e.status && 4 == e.readyState) {
        for (var r, n = "", o = e.responseText.split("\n"), s = 0; s < o.length; s++)
            if (0 == o[s].indexOf("ff_")) {
                var i = o[s].indexOf("=");
                if (-1 != i) {
                    var l = o[s].substr(0, i),
                        g = o[s].substr(i + 1);
                    n += l + "=" + (g = CheckStringForObfuscation(l, "", g)) + "\n"
                }
            } else n += o[s] + "\n";
        localStorage_setItem(a, n), "ff.dat" == a ? ApplyAllOverrides() : "sites.dat" == a ? LoadSpecialSites() : "bigicon.dat" == a && LoadBigIconList()
    }
}

function checkIterationsInDataFile(e) {
    var t = get_key_iterations(g_username),
        a = e.substring(0, 20);
    if (0 != a.indexOf("iterations=")) return 1 != t ? "iterationserror" : e;
    var r, n = /iterations=(\d*);/.exec(a);
    return 1 < n.length && t == n[1] ? e.substring(e.indexOf(";") + 1) : "iterationserror"
}

function prependIterations(e) {
    var t = get_key_iterations(g_username);
    return 1 < t && (e = "iterations=" + t + ";" + e), e
}

function pref_numeric_validate(e, t) {
    var a = parseInt(e);
    return a < 0 || isNaN(a) ? t : a
}

function sendLpEvent(e, t) {
    LPServer.ajax({
        type: "POST",
        url: base_url + "lmiapi/segment/send-event",
        contentType: "application/json",
        data: {
            platform: "cr",
            event: e,
            properties: t || []
        }
    })
}
var sendLpImprove = function() {
    function n(r, n) {
        if (n) {
            Object.keys(n).forEach(function(e) {
                var t = n[e];
                if ("domain" !== e && "url" !== e || "string" != typeof t) r.add(e, t);
                else {
                    var a = s(t);
                    a !== t && r.add(e, AES.url2hex(a))
                }
            });
            var e = window && window.navigator ? window.navigator.language : void 0;
            e && r.add("browser-language", e), (e = LPPlatform && "function" == typeof LPPlatform.getUILanguage ? LPPlatform.getUILanguage() : void 0) && r.add("ui-language", e), isDogfood() && r.add("dogfood", 1), r.add("vaultversion", 4), r.add("binary", "function" == typeof have_binary && have_binary() ? "true" : "false")
        }
    }
    var o = /^(?:(https?|ftp):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})(?:[\/\w \.-]*)/i;

    function s(e) {
        var t = o.exec(e);
        if (!t || !t.length) return "";
        var a = t.pop(),
            r;
        return t.pop() + "." + a
    }
    return function(e, t) {
        if ((!lploggedin || g_prompts.improve) && e) {
            var a = get_method ? get_method() : "",
                r = (new PostParams).add("cmd", "lpimprove").add("event", e).add("method", a);
            n(r, t), LPPlatform.extendSendImproveParams(r, function() {
                lpMakeRequest(base_url + "lastpass/api.php", r.toString(), null, null)
            })
        }
    }
}();

function isDogfood() {
    var e = !1;
    return g_ischrome && chrome.runtime.getManifest() && chrome.runtime.getManifest().short_name && (-1 < chrome.runtime.getManifest().short_name.toLowerCase().indexOf("dog") || -1 < chrome.runtime.getManifest().short_name.toLowerCase().indexOf("nightly")) && (e = !0), e
}
//# sourceMappingURL=sourcemaps/server.js.map