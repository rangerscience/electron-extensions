! function(e) {
    var a;
    e.getBackgroundInterface = (a = null, function(e) {
        return null === a && ((e = e || {}).source = window, e.direct = !0, a = Interfaces.createInstance(Interfaces.BackgroundInterface, e)), a
    }), e.getUILanguage = function() {
        return "en-US"
    }, e.fill = function(e) {
        lpevent("m_mf"), fillaid(e, !0, "Icon Dropdown")
    }
}(LPPlatform),
function(l, e) {
    l.getFavicon = function(e) {
        e.callback && e.callback(null)
    }, l.onAuthRequired = function(e) {
        return !1
    }, l.openLogin = function() {
        sendLpEvent("login_viewed"), LPContentScriptFeatures.react_login ? openURL(getchromeurl("webclient-tab.html")) : l.openTabDialog("loginSimple")
    }, l.once = function(e, a, t) {
        if (e) var n = e(function() {
            n(), a.apply(t, arguments)
        })
    }, l.getBigIcons = function(t, e) {
        var a = (e = e || "big") + "icons",
            n = opendb();
        if (createDataTable(n), n) {
            var r = function(e, a) {
                t(0 < a.rows.length && null !== a.rows.item(0).data ? a.rows.item(0).data : "")
            };
            if (g_indexeddb) {
                var i = {
                    rows: {
                        item: function(e) {
                            return this[e]
                        },
                        length: 0
                    }
                };
                n.transaction("LastPassData", "readonly").objectStore("LastPassData").openCursor(IDBKeyRange.only(db_prepend(g_username_hash) + "_" + a)).onsuccess = function(e) {
                    var a = e.target.result;
                    a ? (i.rows[i.rows.length] = a.value, i.rows.length++, a.continue()) : r(null, i)
                }
            } else n.transaction(function(e) {
                e.executeSql("SELECT * FROM LastPassData WHERE username_hash=? AND type=?", [db_prepend(g_username_hash), a], r, function(e, a) {
                    console_log(a)
                })
            })
        }
    }, l.saveBigIcons = function(a, e) {
        var t = (e = e || "big") + "icons",
            n = opendb();
        createDataTable(n), n && (g_indexeddb ? n.transaction("LastPassData", "readwrite").objectStore("LastPassData").put({
            username_hash: db_prepend(g_username_hash),
            type: t,
            data: a,
            usertype: db_prepend(g_username_hash) + "_" + t
        }) : n.transaction(function(e) {
            e.executeSql("REPLACE INTO LastPassData (username_hash, type, data) VALUES (?, ?, ?)", [db_prepend(g_username_hash), t, a], function(e, a) {
                console_log("server.js : inserted")
            }, function(e, a) {
                console_log(a)
            })
        }))
    }, l.updateBigIcons = function() {};
    var a = function(e, a) {
            for (var t in e) {
                var n = a[t];
                n && (n.group = e[t])
            }
        },
        u, f, t, n, b, h, i, D, m;
    l.refreshGroupNames = function(e) {
        e && (a(e.sites, g_sites), a(e.notes, g_securenotes), a(e.applications, g_applications))
    }, l.useDialogWindows = function() {
        return Preferences.get("htmlindialog")
    }, l.extendSendImproveParams = function(e, a) {
        a()
    }, u = {}, f = function(e, a) {
        return function() {
            e.apply(this, arguments), a.apply(this, arguments)
        }
    }, l.openTabDialog = function(a, t) {
        var e = {
                createAccountSimple: !0,
                siteTutorial: !0
            },
            n = a + (t ? "-" + JSON.stringify(t) : ""),
            r = u[n];
        if (r) r.activate();
        else {
            var i = {
                    dialogWindow: l.useDialogWindows() && !(t && t.virtualKeyboard)
                },
                o = {
                    url: getchromeurl("tabDialog.html?dialog=" + a),
                    loadHandler: function(e) {
                        e.getTop().LPTabDialog.openDialog(a, t, i), u[n] = e
                    },
                    closeHandler: function() {
                        delete u[n]
                    },
                    tabId: t && t.tabId ? t.tabId : void 0
                };
            if (o.tabId) l.navigateTab(o);
            else if (i.dialogWindow && !e[a]) {
                var s = Preferences.get("dialogSizePrefs"),
                    c = s[a];
                o.features = {
                    height: c ? c.height : 600,
                    width: c ? c.width : 800,
                    left: c ? c.left : 0,
                    top: c ? c.top : 0
                }, o.features.width > window.screen.availWidth && (o.features.width = window.screen.availWidth, o.features.left = 0), o.features.height > window.screen.availHeight && (o.features.height = window.screen.availHeight, o.features.top = 0), o.closeHandler = f(o.closeHandler, function(e) {
                    s[a] = {
                        height: e.outerHeight,
                        width: e.outerWidth,
                        left: e.screenLeft || e.screenX,
                        top: e.screenTop || e.screenY
                    }, Preferences.set("dialogSizePrefs", s), delete u[n]
                }), l.openDialogWindow(o)
            } else if (e[a]) l.openTab(o);
            else switch (Preferences.get("openpref")) {
                case "tabs":
                    l.openTab(o);
                    break;
                case "windows":
                    l.openWindow(o);
                    break;
                case "same":
                    l.openSame(o)
            }
        }
    }, l.stringifyFeatures = function(e) {
        var a = [];
        for (var t in e) a.push(t + "=" + e[t]);
        return a.join(",")
    }, l.doAjax = function(e) {
        LPServer.ajax(e)
    }, l.ajax = function(e) {
        isOffline() ? e.error && e.error(null, null, "offline") : l.doAjax(e)
    }, l.isEdge = function() {
        return is_edge()
    }, l.copyDataIfEdge = function(e) {
        return l.isEdge() && void 0 !== e ? JSON.parse(JSON.stringify(e)) : e
    }, l.setUserPreference = (t = l.setUserPreference, function(e, a) {
        t(e, a), g_userprefs_changed[e] = a
    }), l.setGlobalPreference = (n = l.setGlobalPreference, function(e, a) {
        n(e, a), g_gblprefs_changed[e] = a
    }), l.writePreferences = function() {
        lpWriteAllPrefs()
    }, l.closePopovers = function() {}, l.activeOverlayTab = void 0, l.showModalOverlay = function(a) {
        "function" == typeof a && l.getCurrentTabDetails(function(e) {
            e && e.tabURL && e.tabURL.indexOf(getchromeurl("")) < 0 && (l.activeOverlayTab = e.tabID, a(e.tabID))
        })
    }, l.removeModalOverlay = function(e) {}, l.hideYoureAlmostDoneMarketingOverlay = function(e) {}, b = {}, h = {}, i = {}, D = {}, m = {}, e.LPTabs = {
        get: function(e) {
            if (e.interface) {
                var a = [];
                for (var t in D) D[t].tabDetails.interfaceName === e.interface && a.push(D[t]);
                return e.callback && e.callback(a), a
            }
            if (void 0 !== e.tabID) {
                var n = D[e.tabID];
                if (n) return e.callback && e.callback(n), n;
                if (e.callback) {
                    var r = i[e.tabID];
                    (r = r || (i[e.tabID] = [])).push(e.callback)
                }
            }
            return null
        }
    }, l.getUnavailablePreferences = function() {
        return {
            clearClipboardSecsVal: !can_clear_clipboard(),
            openpopoverHk: !1,
            pollServerVal: g_nopoll,
            storeLostOTP: "0" === g_prefoverrides.account_recovery,
            showvault: g_hidevault || g_hideshowvault,
            homeHk: g_hidevault || g_hideshowvault,
            saveallHk: g_hidesaedhotkey,
            searchHk: g_hidesearch,
            usepopupfill: !g_offer_popupfill,
            recentUsedCount: g_hiderecentlyusedlistsize,
            searchNotes: g_hidenotes,
            idleLogoffVal: !(g_is_win || g_is_mac || g_is_linux),
            enablenamedpipes: lppassusernamehash || !(g_is_win || g_is_mac || g_is_linux) || is_chrome_portable(),
            enablenewlogin: !0
        }
    }, l.getWindowIDs = function() {
        var e = {};
        for (var a in D) D[a].tabDetails.windowID && (e[D[a].tabDetails.windowID] = !0);
        return Object.keys(e)
    }, l.getWindowTabDetails = function(e) {
        var a = [];
        for (var t in D) {
            var n = D[t];
            n.tabDetails.windowID === e && a.push(n.tabDetails)
        }
        return a
    }, l.initializeRequestFramework = function(o) {
        var s = null,
            c = o.tabDetails || {},
            l = LPMessaging.getNewMessageSourceID(),
            u = !1,
            f = o.frameIdentity,
            t = !1,
            d = function(e) {
                try {
                    var a = !t;
                    return a ? (e.frameID = l, o.sendContentScript(e)) : a
                } catch (e) {
                    return !1
                }
            },
            g = function(e) {
                return d({
                    type: "backgroundResponse",
                    data: e
                })
            },
            n = function(e) {
                if (s = D[c.tabID], u = e.top, void 0 !== c.tabID && (u && (h[c.tabID] = l), e.frameIdentity && (f = c.tabID + "-" + e.frameIdentity)), d({
                        type: "initialization",
                        data: {
                            tabID: c.tabID,
                            frameID: l,
                            topFrameID: h[c.tabID],
                            request: e
                        }
                    }), e.extendFrame) {
                    var a = m[f].frameID,
                        t = b[a];
                    b[a] = function(e) {
                        d(e), t(e)
                    }
                } else b[l] = d;
                if (e.interfaceName && Interfaces.hasOwnProperty(e.interfaceName)) {
                    c.interfaceName || (c.interfaceName = e.interfaceName);
                    var n = function(e) {
                            return LPMessaging.makeRequest(d, {
                                type: "contentScriptRequest",
                                sourceFrameID: 0,
                                data: e
                            }, g)
                        },
                        r = Interfaces.createInstance(Interfaces[e.interfaceName], {
                            instance: e.extendFrame ? m[f].interface : null,
                            direct: !1,
                            context: o.context || "background",
                            requestFunction: n
                        });
                    if (f) {
                        var i = m[f];
                        i && i.frameID !== l && i.disconnect(), m[f] = {
                            interface: r,
                            disconnect: p,
                            frameID: l
                        }
                    }
                    "number" != typeof c.tabID && !c.tabID || e.interfaceName !== c.interfaceName || e.extendFrame || (s && !u || (s && s.disconnect(), s = D[c.tabID] = new LPTab(c)), s.addFrame(r, {
                        topWindow: u,
                        frameID: l,
                        contentScriptRequester: n,
                        childFrameCount: e.childFrameCount
                    }, p)), o.interfaces && o.interfaces[e.interfaceName] && o.interfaces[e.interfaceName](r), o.callback && o.callback(r)
                } else s = s || (D[c.tabID] = new LPTab(c))
            },
            e = Raven.wrap(function(e) {
                switch (e.type) {
                    case "backgroundRequest":
                        LPMessaging.handleRequest(Interfaces.BackgroundInterface, e.data, g, {
                            additionalArguments: {
                                tabURL: c.tabURL,
                                tabID: c.tabID,
                                windowID: c.windowID,
                                frameID: l,
                                top: u
                            }
                        });
                        break;
                    case "contentScriptRequest":
                    case "contentScriptResponse":
                        if (0 === e.frameID) LPMessaging.handleResponse(e.data);
                        else if (e.frameID) {
                            var a = b[e.frameID];
                            a && a(e)
                        }
                        break;
                    case "initialize":
                        n(e.data);
                        break;
                    case "disconnect":
                        p();
                        break;
                    case "initialized":
                        u && i[c.tabID] && (i[c.tabID].forEach(function(e) {
                            e(s)
                        }), delete i[c.tabID])
                }
            }),
            p = function() {
                if (!t) {
                    t = !0, delete b[l], delete m[f], h[c.tabID] === l && delete h[c.tabID];
                    var e = D[c.tabID];
                    e && (e.removeFrame(l), e.isEmpty() && delete D[c.tabID]), o.onDisconnect && o.onDisconnect()
                }
            };
        return {
            frameID: l,
            requestHandler: e,
            disconnectHandler: p
        }
    }
}(LPPlatform, this);
//# sourceMappingURL=sourcemaps/platformBackground.js.map