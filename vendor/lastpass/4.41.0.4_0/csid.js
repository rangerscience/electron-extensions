var CS_table = [];

function CS_t() {
    var n = null,
        t = null,
        e = null,
        l = null,
        r = null,
        i = null,
        o = null,
        u = null,
        a = null,
        s = null,
        c = null,
        f = null,
        d = null,
        _ = 0,
        m = 0,
        g = 0
}

function getcsid(n, t) {
    var e;
    return ("function" == typeof lp_sha256 ? lp_sha256 : SHA256)(n + "" + t)
}

function getcsinfo(n, t) {
    if (null === n || null === t || void 0 === n || void 0 === t) return null;
    "number" == typeof n && (n = n.toString());
    var e = getcsid(n, t);
    if (null === e) return null;
    var l = CS_table[e];
    return void 0 === l && (l = null), l
}

function setcsinfo(n, t, e) {
    if (null === n || null === t || !e || void 0 === n || void 0 === t) return null;
    if (null === e.docnum || null === e.tabid || null === e.url) return null;
    "number" == typeof n && (n = n.toString());
    var l = getcsid(n, t);
    return e.csid && l && l != e.csid && L("warn: csid!=obj.csid"), null !== e.csid && void 0 !== e.csid || (e.csid = l), e.last_ts = (new Date).getTime(), void 0 === CS_table && (CS_table = []), CS_table[l] = e, !0
}

function register_new_cs(n, t, e, l, r, i) {
    if (null === n || null === t || !e || void 0 === n || void 0 === t) return null;
    write_history({
        cmd: "register_new_cs",
        docnum: t,
        tabid: n,
        docstate: r
    }), void 0 === r && (r = null), void 0 === i && (i = null), "number" == typeof n && (n = n.toString());
    var o = 0,
        u = new CS_t;
    if (u) {
        if (u.docnum = t, u.tabid = n, u.url = e, u.lastfill_aid = 0, l ? u.parent_docnum = t : (u.parent_docnum = g_CS_tops[n], u.parent_docnum), u.docstate = r, (u.flags = null) !== i && "object" == typeof i && (void 0 !== (u.flags = i).domain && (u.domain = i.domain, delete u.flags.domain), void 0 !== i.origin && (u.origin = i.origin, delete u.flags.origin)), u.start_ts = (new Date).getTime(), g_cpwbot && CPWbot_bg) {
            var a = {
                url: e,
                docnum: t
            };
            o = CPWbot_bg.score_frame(n, a)
        }
        return u.importance = o, setcsinfo(n, t, u)
    }
    return null
}

function delete_cs_for_docnum(n, t) {
    if (null === n || null === t || void 0 === n || void 0 === t) return null;
    "number" == typeof n && (n = n.toString());
    var e = !1,
        l;
    for (l in CS_table) CS_table.hasOwnProperty(l) && l == getcsid(n, t) && (e = !0, delete CS_table[l]);
    return e
}

function delete_cs_for_tab(n) {
    if (null == n) return null;
    "number" == typeof n && (n = n.toString());
    var t = !1,
        e;
    for (e in CS_table)
        if (CS_table.hasOwnProperty(e)) {
            var l = CS_table[e];
            l && l.tabid == n && (t = !0, delete CS_table[e])
        } return t
}

function update_cs_docstate(n, t) {
    if (null === n || null === t || void 0 === n || void 0 === t) return null;
    "number" == typeof n && (n = n.toString());
    var e = t.docnum;
    if (null == e) return null;
    var l = t.docstate;
    if (null == l) return null;
    var r = !1,
        i = getcsinfo(n, e);
    return i && (i.docstate = l, r = setcsinfo(n, e, i)), r
}

function update_cs_timestamp(n, t) {
    if (null === n || null === t || void 0 === n || void 0 === t) return null;
    "number" == typeof n && (n = n.toString());
    var e = t.docnum;
    if (null == e) return null;
    var l = getcsinfo(n, e);
    return l ? setcsinfo(n, e, l) : null
}

function count_cs_for_tabid(n) {
    if (null == n) return -1;
    "number" == typeof n && (n = n.toString());
    var t = 0,
        e, l;
    for (e in CS_table) CS_table.hasOwnProperty(e) && (l = CS_table[e]).tabid === n && t++;
    return t
}

function dumpinfo_for_tabid(n) {
    var t, e, l;
    if (null != n)
        for (e in "number" == typeof n && (n = n.toString()), console.log("dumping info for tabid=" + n), CS_table) CS_table.hasOwnProperty(e) && (l = CS_table[e], t = (new Date).getTime(), l.tabid === n && console.log("DUMPINFO [tabid:" + n + "][docnum:" + l.docnum + "] url=" + l.url + " last_ts=" + (t - l.last_ts) / 1e3 + "secs score=" + l.importance + " killswitch?=" + l.killswitch + " isTop?=" + (l.parent_docnum == l.docnum ? "true" : "false")))
}

function find_docnum_for_tabid_by_url(n, t) {
    if (null === n || null === t || void 0 === n || void 0 === t) return null;
    var e, l, r;
    for (e in "number" == typeof n && (n = n.toString()), CS_table)
        if (CS_table.hasOwnProperty(e) && (r = CS_table[e]).tabid === n && r.url == t) {
            l = r.docnum;
            break
        } return l
}

function set_killswitch_value(n, t, e) {
    if (null === n || null === t || void 0 === n || void 0 === t) return null;
    "number" == typeof n && (n = n.toString());
    var l = getcsinfo(n, t);
    return !!l && (l.killswitch = e, setcsinfo(n, t, l))
}

function get_killswitch_value(n, t) {
    if (null === n || null === t || void 0 === n || void 0 === t) return null;
    "number" == typeof n && (n = n.toString());
    var e = getcsinfo(n, t),
        l = 0;
    return e && (l = parseInt(e.killswitch), isNaN(l) && (l = 0)), l
}

function skip_CS_by_score(n, t) {
    if (null === n || null === t) return !0;
    var e = -25,
        l = getcsinfo(n, t);
    return !l || (L("skip? [tabid=" + n + "][docnum=" + t + "] score=" + l.importance), l.importance < e)
}

function get_top_url(n, t) {
    var e = "",
        l = 0,
        r, i = getcsinfo_top(n, t);
    if (i && i.parent_docnum == i.docnum) e = i.url;
    else
        for (var o in CS_table)
            if (CS_table.hasOwnProperty(o) && (i = CS_table[o]).tabid === n && i.parent_docnum == i.docnum) {
                e = i.url;
                break
            } return e
}

function get_top_docnum(n, t) {
    var e = 0;
    i;
    var l = getcsinfo_top(n, t);
    if (l && l.parent_docnum == l.docnum) e = l.docnum;
    else
        for (var r in CS_table)
            if (CS_table.hasOwnProperty(r) && (l = CS_table[r]).tabid === n && l.parent_docnum == l.docnum) {
                e = l.docnum;
                break
            } return e
}

function update_cs_docflags(n, t) {
    if (null === n || null === t || void 0 === n || void 0 === t) return null;
    "number" == typeof n && (n = n.toString());
    var e = t.docnum;
    if (null == e) return null;
    var l = t.docflags,
        r = !1,
        i = getcsinfo(n, e);
    return i && "object" == typeof l && (void 0 !== (i.flags = l).domain && (i.domain = l.domain, delete i.flags.domain), void 0 !== l.origin && (i.origin = l.origin, delete i.flags.origin), r = setcsinfo(n, e, i)), r
}

function getcsinfo_top(n, t) {
    for (var e = null, l = -1, r, i = getcsinfo(n, t), o = null, u = 0; u < 10 && i; u++) {
        if ((o = getcsinfo(n, i.parent_docnum)) && i.parent_docnum == o.docnum) {
            l = o.docnum;
            break
        }
        if (null == i.parent_docnum) break;
        i = o
    }
    return 0 <= l && (o = getcsinfo(n, l)), o && !isEmptyObject(o) && (e = o), e
}

function update_cs_lastfill_aid(n, t) {
    var e = !0;
    if (null == n || void 0 === t) return !1;
    "number" == typeof n && (n = n.toString());
    var l = get_top_docnum(n),
        r = getcsinfo(n, l);
    return r && (r.lastfill_aid = t, e = setcsinfo(n, l, r)), e
}

function rebuild_cs_table(c) {
    var n = {},
        t;

    function r(n) {
        if (0 != n.url.indexOf("chrome:") && 0 != n.url.indexOf("safari:")) {
            var t = gettabid(n);
            for (var e in g_CS[t]) {
                var l = e,
                    r = g_CS[t][e],
                    i = gettaburl(n),
                    o = n.status,
                    u = 0,
                    a = !1;
                if (e && g_CS_tops[t] == e && (a = !0), c) {
                    var s = getcsinfo(t, l);
                    s ? (i != s.url && console.log(sprintf("[%s][%s] url mismatch %s != %s", t, l, i, s.url)), a != (s.parent_docnum == s.docnum) && console.log(sprintf("[%s][%s] isTop mismatch %s != %s ", t, l, i, a, s.parent_docnum == s.docnum))) : console.log(sprintf("[%s][%s] seems like this frame exists but no entry found in CS table for it", t, l))
                } else register_new_cs(t, l, i, a, o, 0)
            }
        }
    }
    get_all_windows({}, function(n) {
        var t, e;
        for (t = 0; t < n.length; t++)
            if (g_ischrome) chrome.tabs.query({
                windowId: n[t].id
            }, function(n) {
                if (n && 0 < n.length)
                    for (var t = 0; t < n.length; t++) {
                        var e;
                        r(n[t])
                    }
            });
            else {
                var l = get_tabs(n[t]);
                if (l && void 0 !== l.length)
                    for (e = 0; e < l.length; e++) r(l[e])
            }
    })
}
//# sourceMappingURL=sourcemaps/csid.js.map