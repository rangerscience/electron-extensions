var g_np_init = !1,
    namedpipeobserverfunction = null,
    g_np_gotack = !1;

function lpnp_init() {
    if (!g_np_init) {
        var e = !1,
            a;
        if (g_is_win || g_is_mac || g_is_linux)
            if (g_issafari && g_is_win) g_np_init = !1;
            else if (g_issafari_appext) g_np_init = !1;
        else if (have_binary())
            if (is_chrome_portable()) g_np_init = !1;
            else lpdbg("namedpipes", "lpnp_init : initializing named pipe server"), namedpipeobserverfunction = function(e, a, n) {
                "lpxpcom" == a && process_ipc_msg(n, "pipes")
            }, call_binary_function("StartNamedPipeServer"), g_np_init = !0, setTimeout(function() {
                lpnp_notify("logincheck")
            }, 1e3), (g_issafari && g_is_mac || g_isfirefoxsdk) && lpnp_get_javascript_message();
        else lpdbg("namedpipes", "named pipe server could not be started");
        else g_np_init = !1
    }
}

function lpnp_get_javascript_message() {
    have_binary_function("get_javascript_message") && call_binary_function("get_javascript_message", function(e) {
        0 < e.length && namedpipeobserverfunction(null, "lpxpcom", e), setTimeout(function() {
            lpnp_get_javascript_message()
        }, 0 == e.length ? 2e3 : 0)
    })
}

function lpnp_notify(e, a) {
    if (!LPISLOC || "refresh_local" == e || "local_pwchange" == e) {
        var n = !1;
        if (1 == lpGetPref("enablenamedpipes", 1)) {
            var i = lpnp_xml_msg(e, a);
            !lp_ws || !lp_ws.isconnected() || have_nplastpass() || have_native_messaging() ? g_np_init && have_binary_function("SendNamedPipeMessageToAll") && (lpdbg("namedpipes", "broadcasting " + i), call_binary_function("SendNamedPipeMessageToAll", i)) : lp_ws.send(i)
        }
    }
}

function lpnp_xml_msg(e, a) {
    var n = "<" + e,
        i;
    if (void 0 !== a)
        for (i in a) n += " " + i + '="' + lpxmlescape(a[i]) + '"';
    return n += "/>"
}

function lpnp_send_internal_logincheck_ack() {
    lploggedin && getuuid(function(e) {
        var a = new Array;
        a.data0 = lp_phpsessid, a.data1 = g_username, a.data2 = g_identity, have_binary() || (a.data3 = e, a.data4 = lpCreateKeyFileData(), a.data5 = get_key_iterations(g_username)), lpnp_notify("internal_logincheck_ack", a)
    }, g_username_hash)
}

function process_ipc_msg(e, a) {
    try {
        var n = "",
            i = e.match(/^<([^ \/]+)/);
        if (i) {
            if (n = i[1], "websocket" == a && "launch" != n && (have_nplastpass() || have_native_messaging() || 1 != lpGetPref("enablenamedpipes", 1))) return
        } else if ("{" == e[0]) {
            try {
                native_messaging_message(LPJSON.parse(e), null, !0)
            } catch (e) {}
            return
        }
        if (LPISLOC && "refresh_local" != n && "local_pwchange" != n) return;
        switch (lpdbg("namedpipes", "received cmd=" + n + " data=" + e), n) {
            case "pipeinitdone":
                call_binary_function("NamedPipeNumClients", function(e) {
                    if (1 < e) {
                        var a = new Array;
                        setTimeout(function() {
                            lpnp_notify("internal_logincheck", a)
                        }, g_is_win ? 0 : 1e3), setTimeout(function() {
                            lp_StartLogin()
                        }, g_is_win && !g_isfirefoxsdk ? 2e3 : 3e3)
                    } else lp_StartLogin()
                });
                break;
            case "logout":
                console_log("LOGGING OFF : namedpipes : logoff"), lplogoff(!0, "namedpipes1");
                break;
            case "login":
                var l = e.match(/data0=\"([^\"]*)\"/),
                    t = e.match(/data1=\"([^\"]*)\"/);
                if (l && t) {
                    var s = lpxmlunescape(l[1]),
                        p = lpxmlunescape(t[1]);
                    "" != s && "" != p && LP_do_login(s, p)
                }
                break;
            case "refresh":
                refresh_windows();
                break;
            case "switchidentity":
                var t;
                if (t = e.match(/data0=\"([^\"]*)\"/)) {
                    var _ = lpxmlunescape(t[1]);
                    switch_identity(_, !0, !1, !0)
                }
                break;
            case "launch":
                var t = e.match(/id=\"([^\"]*)\"/),
                    c = e.match(/existing=\"([^\"]*)\"/);
                if (t) {
                    var r = lpxmlunescape(t[1]),
                        o = new Array;
                    o.data0 = r, lpnp_notify("launchok", o), c ? fillaid(r) : (launch(r), browser_focus())
                }
                break;
            case "internal_logincheck":
                lpnp_send_internal_logincheck_ack();
                break;
            case "internal_logincheck_ack":
                g_np_gotack = !0;
                var g = e.match(/data0=\"([^\"]*)\"/),
                    s = e.match(/data1=\"([^\"]*)\"/),
                    d = e.match(/data2=\"([^\"]*)\"/),
                    u = e.match(/data3=\"([^\"]*)\"/),
                    m = e.match(/data4=\"([^\"]*)\"/),
                    f = e.match(/data5=\"([^\"]*)\"/);
                if (!lploggedin && g && s) {
                    set_default_login_username(lpxmlunescape(s[1]));
                    var h = g_username_hash,
                        b = g_username;
                    g_username = lpusername = lpxmlunescape(s[1]), g_username_hash = SHA256(lpxmlunescape(s[1])), g_identity = "" + (d ? lpxmlunescape(d[1]) : ""), lpPutUserPref("identity", d ? lpxmlunescape(d[1]) : ""), null != b && (g_username = lpusername = b, g_username_hash = lpusername_hash = h), lpWriteAllPrefs(), lp_phpsessid = lpxmlunescape(g[1]), rsa_setpendingsharests(), have_binary() || (u && 1 < u.length && u[1].length && localStorage_setItem(db_prepend("lp.uid"), lpxmlunescape(u[1])), m && 1 < m.length && m[1].length && lpSaveData(lpxmlunescape(m[1]), "key"), f && 1 < f.length && f[1].length && localStorage_setItem(g_username_hash + "_key_iter", f[1])), have_binary_function("read_file") ? call_binary_function("read_file", db_prepend(SHA256(lpxmlunescape(s[1])) + "_lpall.slps"), function(e) {
                        var a = function(a) {
                            if ("string" == typeof a && "" != a) {
                                var e = opendb();
                                if (createDataTable(e), e) {
                                    var n = db_prepend(SHA256(lpxmlunescape(s[1])));
                                    g_indexeddb ? e.transaction("LastPassData", "readwrite").objectStore("LastPassData").put({
                                        username_hash: n,
                                        type: "key",
                                        data: a,
                                        usertype: n + "_key"
                                    }).onsuccess = function(e) {
                                        lp_StartLogin(!0)
                                    } : e.transaction(function(e) {
                                        e.executeSql("REPLACE INTO LastPassData (username_hash, type, data) VALUES (?, 'key', ?)", [n, a], function(e, a) {
                                            lp_StartLogin(!0)
                                        }, function(e, a) {
                                            console_log(a)
                                        })
                                    })
                                }
                            }
                        };
                        "string" != typeof e || "" == e ? call_binary_function("read_file", db_prepend(SHA256(lpxmlunescape(s[1])) + "_lpall.lps"), function(e) {
                            "string" == typeof e && "" != e && protect_data(e, !0, null, function(e) {
                                call_binary_function("write_file", db_prepend(SHA256(lpxmlunescape(s[1])) + "_lpall.slps"), e), call_binary_function("delete_file", db_prepend(SHA256(lpxmlunescape(s[1])) + "_lpall.lps"))
                            }), a(e)
                        }) : unprotect_data(e, !0, a)
                    }) : (g_loginstarted = !1, lp_StartLogin(!0, lp_phpsessid))
                } else lploggedin && s && g_username != lpxmlunescape(s[1]) && (console_log("LOGGING OFF : namedpipes : different username"), lplogoff(!1, "namedpipes2"));
                break;
            case "refresh_local":
                var v = e.match(/data0=\"([^\"]*)\"/);
                v && lpxmlunescape(v[1]) == g_username_hash && (console_log("named_pipes: refresh_local reparsing"), get_accts_local());
                break;
            case "local_pwchange":
                console_log("LOGGING OFF : namedpipes : local_pwchange"), lplogoff(!1, "namedpipes3");
                break;
            case "wscapabilities":
                var y = e.match(/functions=\"([^\"]*)\"/);
                y && 1 < y.length && (console_log("Got Capabilities Message: " + y[1]), g_ws_functions = y[1].split(","));
                break;
            default:
                lpdbg("namedpipes", "received unknown message. data=" + e)
        }
    } catch (e) {}
}
//# sourceMappingURL=sourcemaps/namedpipes.js.map