function checkIconsVersion(r) {
    var n = opendb();
    if (createDataTable(n), n) {
        var s = function(n, e) {
            var s = !0,
                o = null,
                i = lpGetPref("icons", -1),
                t;
            0 < e.rows.length && lpGetPref("icons", -1) == r && (s = !1, o = e.rows.item(0).data);
            null == o || s ? downloadIcons() : processIcons(o)
        };
        if (g_indexeddb) {
            var o = {
                rows: {
                    item: function(n) {
                        return this[n]
                    },
                    length: 0
                }
            };
            n.transaction("LastPassData", "readonly").objectStore("LastPassData").openCursor(IDBKeyRange.only(db_prepend(g_username_hash) + "_icons")).onsuccess = function(n) {
                var e = n.target.result;
                e ? (o.rows[o.rows.length] = e.value, o.rows.length++, e.continue()) : s(null, o)
            }
        } else n.transaction(function(n) {
            n.executeSql("SELECT * FROM LastPassData WHERE username_hash=? AND type=?", [db_prepend(g_username_hash), "icons"], s, function(n, e) {
                console_log(e)
            })
        })
    } else downloadIcons()
}

function downloadIcons() {
    lpMakeRequest(base_url + "geticon.php", "versionchrome=1&username=" + en(g_username), lpIconResponse, null)
}

function downloadBigIcons(n, e) {
    e = e || "big";
    var s = "big=1&versionchrome=1&username=" + en(g_username) + "&size=" + ("big" === e ? "s" : e);
    n && (s += "&domain=" + en(n)), lpMakeRequest(base_url + "geticon.php", s, function(n) {
        if (4 == n.readyState && 200 == n.status && n.responseText) {
            if ("latest" == n.responsetext || "nodata" == n.responsetext) return;
            processIcons(n.responseText, e), saveBigIcons(e)
        }
    }, null)
}

function lpIconResponse(n) {
    if (4 == n.readyState && 200 == n.status && n.responseText) {
        if ("latest" == n.responsetext || "nodata" == n.responsetext) return;
        var e = n.responseText.split("\n"),
            s, o = e[0].split("=")[1],
            i = e[1];
        lpPutUserPref("icons", o), lpWriteAllPrefs(), lpSaveData(i, "icons"), processIcons(i)
    }
}

function getBigIconKeyIfMissing(n, e) {
    var s = "sq" === (e = e || "big") ? g_bigsquareicons : g_bigicons;
    null == BigIconList && LoadBigIconList();
    var o = hostof(n),
        i = AES.bin2hex(o);
    if (void 0 !== BigIconList[i]) return void 0 === s[o] ? o : null;
    var t = lp_gettld_url(n),
        r = AES.bin2hex(t);
    return void 0 !== BigIconList[r] && void 0 === s[t] ? t : null
}

function checkBigIconsVersion(e, n, s, o) {
    var i = !0,
        t = "sq" === (o = o || "big") ? g_bigsquareicons : g_bigicons,
        r;
    for (var a in t) {
        i = !1;
        break
    }
    if (!i || n)
        if (e) null != (r = getBigIconKeyIfMissing(e, o)) && downloadBigIcons(r, o);
        else {
            var c = !1,
                l = [],
                g = [];
            for (var u in g_sites) {
                var f, r;
                if (c = !0, null != (r = getBigIconKeyIfMissing(g_sites[u].url, o))) {
                    if (void 0 !== g[r]) continue;
                    g[r] = 1, l[l.length] = r
                }
            }
            c || s ? l.length && downloadBigIcons(l.join(","), o) : downloadBigIcons("all", o)
        }
    else LPPlatform.getBigIcons(function(n) {
        n ? (processIcons(n, o), checkBigIconsVersion(e, !0, s, o)) : downloadBigIcons("all", o)
    }, o)
}

function processIcons(n, e) {
    var s = null;
    if (n && (n = n.split(":"), e && (s = "sq" === e ? g_bigsquareicons : g_bigicons), n.length))
        for (var o = n[0], i = 0, e = n.length; i + 1 < e; i += 2) {
            var t = parseInt(n[i + 1]);
            if (0 === o.indexOf("lp") && 0 < t) {
                o = o.substring(2);
                var r = n[i + 2].substring(0, t);
                e ? s[AES.hex2bin(o)] = r : g_icons[o] = r, o = n[i + 2].substring(t)
            }
        }
    LPPlatform.updateBigIcons(s)
}

function saveBigIcons(n) {
    var e = "sq" === n ? g_bigsquareicons : g_bigicons,
        s = "";
    for (var o in e) {
        var i = e[o];
        s += "lp" + AES.bin2hex(o) + ":" + i.length + ":" + i
    }
    LPPlatform.saveBigIcons(s, n)
}
//# sourceMappingURL=sourcemaps/icons.js.map