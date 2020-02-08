function lpPutUserPref(e, t) {
    "undefined" == typeof g_userprefs && (g_userprefs = getBG().g_userprefs), void 0 !== g_userprefs[e] && g_userprefs[e] == t || (g_userprefs_changed[e] = !0), g_userprefs[e] = t, ExtensionPreferences.triggerChange(e, t)
}

function lpPutGblPref(e, t) {
    "undefined" == typeof g_gblprefs && (g_gblprefs = getBG().g_gblprefs), void 0 !== g_gblprefs[e] && g_gblprefs[e] == t || (g_gblprefs_changed[e] = !0), g_gblprefs[e] = t, ExtensionPreferences.triggerChange(e, t)
}

function lpGetPref(e, t) {
    return "undefined" == typeof g_userprefs && (g_userprefs = getBG().g_userprefs), "undefined" != typeof g_userprefs && void 0 !== g_userprefs[e] ? g_userprefs[e] : ("undefined" == typeof g_gblprefs && (g_gblprefs = getBG().g_gblprefs), "undefined" != typeof g_gblprefs && void 0 !== g_gblprefs[e] ? g_gblprefs[e] : t)
}

function dodefault() {
    var e = get_innertext(document.getElementById("default"));
    if (0 <= e.indexOf("General")) document.getElementById("logoffWhenCloseBrowserVal").value = 0, document.getElementById("logoffWhenCloseBrowser").checked = !1, document.getElementById("idleLogoffVal").value = "", document.getElementById("idleLogoffEnabled").checked = !1, document.getElementById("openpref").value = "tabs", document.getElementById("htmlindialog").checked = g_isfirefoxsdk, document.getElementById("automaticallyFill").checked = !0, document.getElementById("showvault").checked = !1, document.getElementById("showAcctsInGroups").checked = !0, document.getElementById("hideContextMenus").checked = !1, document.getElementById("defaultffid").value = 0, document.getElementById("donotoverwritefilledfields").checked = !1;
    else if (0 <= e.indexOf("Notifications")) document.getElementById("showNotifications").checked = !0, document.getElementById("showGenerateNotifications").checked = !1, document.getElementById("showFormFillNotifications").checked = !1, document.getElementById("showNotificationsAfterClick").checked = !1, document.getElementById("showSaveNotificationBar").checked = !0, document.getElementById("showChangeNotificationBar").checked = !0, document.getElementById("showmatchingbadge").checked = !0, document.getElementById("usepopupfill").checked = !0;
    else if (0 <= e.indexOf("Hotkeys")) {
        getBG().g_is_mac ? (optionsData.HotKeys.generateHkKeyCode = 0, optionsData.HotKeys.generateHkMods = "", optionsData.HotKeys.recheckHkKeyCode = 0, optionsData.HotKeys.recheckHkMods = "", optionsData.HotKeys.searchHkKeyCode = 0, optionsData.HotKeys.searchHkMods = "", optionsData.HotKeys.nextHkKeyCode = 33, optionsData.HotKeys.nextHkMods = "meta", optionsData.HotKeys.prevHkKeyCode = 34, optionsData.HotKeys.prevHkMods = "meta", optionsData.HotKeys.homeHkKeyCode = 0, optionsData.HotKeys.homeHkMods = "", optionsData.HotKeys.openpopoverHkKeyCode = 220, optionsData.HotKeys.openpopoverHkMods = "meta") : (optionsData.HotKeys.generateHkKeyCode = 71, optionsData.HotKeys.generateHkMods = "alt", optionsData.HotKeys.recheckHkKeyCode = 73, optionsData.HotKeys.recheckHkMods = "alt", optionsData.HotKeys.searchHkKeyCode = 87, optionsData.HotKeys.searchHkMods = "alt", optionsData.HotKeys.nextHkKeyCode = 33, optionsData.HotKeys.nextHkMods = "alt", optionsData.HotKeys.prevHkKeyCode = 34, optionsData.HotKeys.prevHkMods = "alt", optionsData.HotKeys.homeHkKeyCode = 72, optionsData.HotKeys.homeHkMods = "control alt", optionsData.HotKeys.openpopoverHkKeyCode = 220, optionsData.HotKeys.openpopoverHkMods = "alt"), optionsData.HotKeys.submitHkKeyCode = 0, optionsData.HotKeys.submitHkMods = "", optionsData.HotKeys.saveallHkKeyCode = 0, optionsData.HotKeys.saveallHkMods = "", optionsData.HotKeys.logoffHkKeyCode = 0, optionsData.HotKeys.logoffHkMods = "", optionsData.HotKeys.defaultffidHkKeyCode = 0, optionsData.HotKeys.defaultffidHkMods = "";
        for (var t = new Array("generateHk", "recheckHk", "searchHk", "nextHk", "prevHk", "homeHk", "submitHk", "saveallHk", "logoffHk", "defaultffidHk", "openpopoverHk"), o = 0; o < t.length; o++) writeHotKeyValue(t[o])
    } else 0 <= e.indexOf("Advanced") ? (document.getElementById("autoautoEnabled").checked = !0, document.getElementById("autoautoVal").value = "25", document.getElementById("warninsecureforms").checked = !1, document.getElementById("dontfillautocompleteoff").checked = !1, document.getElementById("pollServerEnabled").checked = !0, document.getElementById("pollServerVal").value = "15", document.getElementById("recentUsed").checked = !0, document.getElementById("recentUsedCount").value = "10", document.getElementById("searchNotes").checked = !0, document.getElementById("openloginstart").checked = !1, document.getElementById("storeLostOTP").checked = !0, document.getElementById("enablenewlogin").checked = !0, document.getElementById("clearfilledfieldsonlogoff").checked = !1, document.getElementById("toplevelmatchingsites").checked = !1) : 0 <= e.indexOf("Icons") && (document.getElementById("icons2").checked = !0)
}

function fix_userhash(e) {
    return "" == e && is_edge() ? "global" : e
}
var lpReadAllPrefs = function() {
    var s = function(e) {
            try {
                return JSON.parse(e)
            } catch (e) {
                return {}
            }
        },
        e = function(t) {
            if ("undefined" != typeof browser && browser.storage && browser.storage.local && g_username_hash) {
                var o = ["userPrefs_" + g_username_hash, "globalPrefs"];
                browser.storage.local.get(o).then(function(e) {
                    e && e["userPrefs_" + g_username_hash] && (g_userprefs_changed = g_userprefs = s(e["userPrefs_" + g_username_hash]), g_gblprefs_changed = g_gblprefs = s(e.globalPrefs), lpWriteAllPrefs(), browser.storage.local.remove(o)), r(t)
                }, function(e) {
                    console.error(e), r(t)
                })
            } else r(t)
        },
        r = function(c) {
            var o = g_username_hash && "" != g_username_hash ? g_username_hash : "",
                e = opendb();
            if (createPrefsTable(e), e) {
                var s = function(e, t) {
                    for (var o = {}, s = {}, r = 0; r < t.rows.length; r++) {
                        var a = t.rows.item(r).username_hash,
                            n = t.rows.item(r).prefname,
                            l = t.rows.item(r).prefvalue;
                        a != fix_userhash("") ? (o[n] = l, "identity" == n && (g_identity = l)) : s[n] = l
                    }
                    if (g_userprefs = o, g_gblprefs = s, g_issafari || g_isfirefoxsdk) {
                        var d = lpGetPref("language", "");
                        include_language(d)
                    }
                    if (startIdleChecker(), void 0 === g_gblprefs.generateHkKeyCode && setup_default_hotkeys(), setup_hotkeys(), void 0 !== g_gblprefs.server) {
                        var f = g_gblprefs.server;
                        "" == f || "lastpass.com" != f && "lastpass.eu" != f || (0 != base_url.indexOf("https://preprod.lastpass.com") && 0 != base_url.indexOf("https://lpdev.lastpass.com") || "lastpass.com" != f) && (base_url = "https://" + f + "/")
                    }
                    g_prefs_read = !0, console_log("read: " + t.rows.length + " preferences"), Topics.get(Topics.PREFERENCES_READ).publish(), c && c(t.rows.length)
                };
                if (g_indexeddb) {
                    var r = {
                            rows: {
                                item: function(e) {
                                    return this[e]
                                },
                                length: 0
                            }
                        },
                        a = e.transaction("LastPassPreferences", "readonly").objectStore("LastPassPreferences").index("username_hash");
                    a.openCursor(IDBKeyRange.only(fix_userhash(o))).onsuccess = function(e) {
                        var t = e.target.result;
                        t ? (r.rows[r.rows.length] = t.value, r.rows.length++, t.continue()) : o != fix_userhash("") ? a.openCursor(IDBKeyRange.only(fix_userhash(""))).onsuccess = function(e) {
                            var t = e.target.result;
                            t ? (r.rows[r.rows.length] = t.value, r.rows.length++, t.continue()) : s(null, r)
                        } : s(null, r)
                    }
                } else e.transaction(function(e) {
                    e.executeSql("SELECT * FROM LastPassPreferences where username_hash=? or username_hash=?", [o, ""], s, function(e, t) {
                        console_log(t)
                    })
                })
            } else c && c()
        };
    return e
}();

function setup_default_hotkeys() {
    g_is_mac ? (lpPutGblPref("generateHkKeyCode", 0), lpPutGblPref("generateHkMods", ""), lpPutGblPref("recheckHkKeyCode", 0), lpPutGblPref("recheckHkMods", ""), lpPutGblPref("searchHkKeyCode", 0), lpPutGblPref("searchHkMods", ""), lpPutGblPref("nextHkKeyCode", 33), lpPutGblPref("nextHkMods", "meta"), lpPutGblPref("prevHkKeyCode", 34), lpPutGblPref("prevHkMods", "meta"), lpPutGblPref("homeHkKeyCode", 0), lpPutGblPref("homeHkMods", ""), lpPutGblPref("openpopoverHkKeyCode", 220), lpPutGblPref("openpopoverHkMods", "meta")) : (lpPutGblPref("generateHkKeyCode", 71), lpPutGblPref("generateHkMods", "alt"), lpPutGblPref("recheckHkKeyCode", 73), lpPutGblPref("recheckHkMods", "alt"), lpPutGblPref("searchHkKeyCode", 87), lpPutGblPref("searchHkMods", "alt"), lpPutGblPref("nextHkKeyCode", 33), lpPutGblPref("nextHkMods", "alt"), lpPutGblPref("prevHkKeyCode", 34), lpPutGblPref("prevHkMods", "alt"), lpPutGblPref("homeHkKeyCode", 72), lpPutGblPref("homeHkMods", "control alt"), lpPutGblPref("openpopoverHkKeyCode", 220), lpPutGblPref("openpopoverHkMods", "alt")), lpPutGblPref("submitHkKeyCode", 0), lpPutGblPref("submitHkMods", ""), lpPutGblPref("saveallHkKeyCode", 0), lpPutGblPref("saveallHkMods", ""), lpPutGblPref("logoffHkKeyCode", 0), lpPutGblPref("logoffHkMods", ""), lpPutGblPref("defaultffidHkKeyCode", 0), lpPutGblPref("defaultffidHkMods", ""), lpWriteAllPrefs()
}

function lpWriteAllPrefs() {
    var n = g_isfirefoxsdk,
        e = opendb();
    if (createPrefsTable(e), e) {
        if (g_indexeddb) {
            var t = e.transaction("LastPassPreferences", "readwrite").objectStore("LastPassPreferences");
            if (null != g_username_hash && "" != g_username_hash)
                for (var o in g_userprefs_changed) t.put({
                    username_hash: fix_userhash(g_username_hash),
                    prefname: o,
                    prefvalue: g_userprefs[o],
                    userkey: g_username_hash + "_" + o
                });
            for (var o in g_userprefs_changed = {}, g_gblprefs_changed) t.put({
                username_hash: fix_userhash(""),
                prefname: o,
                prefvalue: g_gblprefs[o],
                userkey: "_" + o
            });
            g_gblprefs_changed = {}
        } else e.transaction(function(e) {
            var t = "",
                o = "",
                s = [],
                r = 0;
            if (n && (t = "REPLACE INTO LastPassPreferences (username_hash, prefname, prefvalue) VALUES "), null != g_username_hash && "" != g_username_hash)
                for (var a in g_userprefs_changed) n ? (t += o + "(?, ?, ?)", o = ", ", s.push(g_username_hash), s.push(a), s.push(g_userprefs[a]), r++) : (e.executeSql("REPLACE INTO LastPassPreferences (username_hash, prefname, prefvalue) VALUES (?, ?, ?)", [g_username_hash, a, g_userprefs[a]], function(e, t) {}, function(e, t) {
                    console_log(t)
                }), ExtensionPreferences.triggerChange(a, g_userprefs[a]));
            for (var a in g_userprefs_changed = {}, g_gblprefs_changed) n ? (t += o + "(?, ?, ?)", o = ", ", s.push(""), s.push(a), s.push(g_gblprefs[a]), r++) : (e.executeSql("REPLACE INTO LastPassPreferences (username_hash, prefname, prefvalue) VALUES (?, ?, ?)", ["", a, g_gblprefs[a]], function(e, t) {}, function(e, t) {
                console_log(t)
            }), ExtensionPreferences.triggerChange(a, g_gblprefs[a]));
            g_gblprefs_changed = {}, n && 0 < r && e.executeSql(t, s, function(e, t) {}, function(e, t) {
                console_log(t)
            })
        });
        Topics.get(Topics.PREFERENCES_WRITE).publish()
    }
    startIdleChecker()
}

function capturehk(e, t) {
    var o = "";
    if (o += t.ctrlKey ? "control" : "", o += t.metaKey ? ("" != o ? " " : "") + "meta" : "", o += t.altKey ? ("" != o ? " " : "") + "alt" : "", "" != (o += t.shiftKey ? ("" != o ? " " : "") + "shift" : "") && "shift" != o || (o = getBG().g_is_mac ? "meta" : "alt"), 8 == t.keyCode || 127 == t.keyCode || 46 == t.keyCode) optionsData.HotKeys[e + "KeyCode"] = 0;
    else {
        if (t.keyCode <= 32 || 91 == t.keyCode) return;
        0 != t.keyCode ? optionsData.HotKeys[e + "KeyCode"] = t.keyCode : optionsData.HotKeys[e + "KeyCode"] = t.charCode
    }
    optionsData.HotKeys[e + "Mods"] = o, writeHotKeyValue(e)
}

function writeHotKeyValue(e) {
    var t = optionsData.HotKeys[e + "KeyCode"],
        o = document.getElementById(e),
        s = "";
    if (0 != t) {
        var r = optionsData.HotKeys[e + "Mods"];
        "string" != typeof r && (r = "");
        var a = r.split(" ");
        for (var n in a) "control" == a[n] && (s += gs("Ctrl") + "+"), "meta" == a[n] && (s += gs("Meta") + "+"), "alt" == a[n] && (s += gs("Alt") + "+"), "shift" == a[n] && (s += gs("Shift") + "+")
    }
    if (0 != t) {
        switch (t = parseInt(t)) {
            case 33:
                s += gs("Page Up");
                break;
            case 34:
                s += gs("Page Down");
                break;
            case 35:
                s += gs("End");
                break;
            case 36:
                s += gs("Home");
                break;
            case 37:
                s += gs("Left");
                break;
            case 38:
                s += gs("Up");
                break;
            case 39:
                s += gs("Right");
                break;
            case 40:
                s += gs("Down");
                break;
            case 189:
                s += "-";
                break;
            case 219:
                s += "[";
                break;
            case 220:
                s += "\\";
                break;
            case 221:
                s += "]";
                break;
            case 186:
                s += ";";
                break;
            case 222:
                s += "'";
                break;
            case 188:
                s += ",";
                break;
            case 187:
                s += "+";
                break;
            case 190:
                s += ".";
                break;
            case 191:
                s += "/";
                break;
            case 106:
                s += "*";
                break;
            case 192:
                s += "~";
                break;
            case 124:
                s += gs("Print Screen");
                break;
            default:
                s += String.fromCharCode(t).toUpperCase()
        }
        o.value = s
    } else o.value = ""
}

function fixhk(e, t) {
    optionsData.HotKeys[e + "KeyCode"] < 32 && (optionsData.HotKeys[e + "Mods"] = "", writeHotKeyValue(e)), t.cancelBubble = !0, t.stopPropagation()
}
optionsData = {
    HotKeys: {}
};
var IDLE_CHECKER_INTERVAL_MS = 1e4,
    IDLE_CHECKER_START_DELAY_MS = 1e4,
    IDLE_STATE_IDLE = "idle",
    IDLE_STATE_ACTIVE = "active",
    idleCheckerStarted = !1;

function startIdleChecker() {
    var e;
    parseInt(lpGetPref("idleLogoffVal", 0)) && !idleCheckerStarted && (idleCheckerStarted = !0, setTimeout(idleChecker, IDLE_CHECKER_START_DELAY_MS))
}

function idleChecker() {
    var e = parseInt(lpGetPref("idleLogoffVal", 0)),
        t = 60 * e;
    lploggedin && e && ("undefined" != typeof chrome && void 0 !== chrome.idle ? chrome.idle.queryState(t, onIdleStateChange) : have_binary() && have_binary_function("get_idle_ms") ? queryBinaryIdleState(t, onIdleStateChange) : console_log("User has idle checking enabled, but browser does not support chrome.idle and binary isnt available."), setTimeout(idleChecker, IDLE_CHECKER_INTERVAL_MS))
}

function queryBinaryIdleState(o, s) {
    if (!have_binary() || !have_binary_function("get_idle_ms")) throw new Error("Called queryBinaryIdleState() but user either has no binary or get_idle_ms function is unavailable");
    call_binary_function("get_idle_ms", function(e) {
        var t;
        s(o < e / 1e3 ? IDLE_STATE_IDLE : IDLE_STATE_ACTIVE)
    })
}

function onIdleStateChange(e) {
    var t = parseInt(lpGetPref("idleLogoffVal", 0));
    e !== IDLE_STATE_ACTIVE && (console_log("User has been idle for " + t + " minutes, logging off"), lplogoff())
}
//# sourceMappingURL=sourcemaps/prefs.js.map