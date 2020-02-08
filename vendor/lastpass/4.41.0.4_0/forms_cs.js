function doc_get_form_equivalents(e) {
    if (!(e = e || LP_derive_doc())) return [];
    if (!e.body) return [];
    var p = sprintf;
    g_isie && init_LPfn() && LPfn && (p = LPfn.sprintf);
    var n = new RegExp("container|form|box|wrapper|youama-login-window|youama-register-window", "i"),
        t, r, o = 100,
        i = !1,
        a = [],
        l = 0,
        s = e.body.children,
        _ = s.length;
    if (Checkpoint.assert(_ < o, "document too complex, " + get_doc_location_href(e)), o < _ && (_ = o), LP_has_youama(e)) {
        var f = LP_get_youama_fields(e);
        if (f.login_form_container && f.regis_form_container) return [f.login_form_container, f.regis_form_container]
    }
    for (t = 0; t < _; t++) {
        var m = s[t].tagName.toUpperCase();
        if (lp_in_array(m, ["DIV", "FORM", "SECTION", "HEADER"])) {
            if (elt_is_formlike_container(s[t])) {
                var g = h(s[t], n);
                for (l += g.length, r = 0; r < g.length; r++) a.push(g[r])
            }
        } else "INPUT" == m && (i = !0)
    }
    return i && 0 == a.length && a.push(e.body), verbose_log(p("Found %d form equivalents on this page", l)), a;

    function h(e, n, t) {
        if (!e) return [];
        var r = e.ownerDocument,
            o, i, a = !0;
        t = t || 0;
        var l = [],
            s = [],
            _ = 0,
            f = [],
            m = e.children,
            g = 0;
        if (!m || 0 == m.length) return [];
        for (o = 0; o < m.length; o++)
            if (lp_in_array(m[o].tagName.toUpperCase(), ["DIV", "SECTION", "HEADER"]) && lpIsVisible(m[o], a)) {
                var u = h(m[o], n, t + 1);
                for (i = 0; i < u.length; i++) s.push(u[i]);
                verbose_log(p("child div %s has %d forms ", LP_getname(m[o]), u.length))
            } else "FORM" == m[o].tagName.toUpperCase() ? !is_search_form(r, m[o]) && popupfill_shoulddoform(r, m[o]) && s.push(m[o]) : "INPUT" == m[o].tagName.toUpperCase() && popupfill_shoulddofield(r, m[o]) && (verbose_log(p("child input %s found in %s", LP_getname(m[o]), LP_getname(e))), f.push(m[o]));
        return ("DIV" == e.tagName || "FORM" == e.tagName) && 0 < f.length ? popupfill_shoulddoform(r, e) ? (l.push(e), verbose_log(p("FOUND %d child forms and found inputs in this div %s, treating all together as one", s.length, LP_getname(e)))) : verbose_log(p("FOUND child forms in this div %s but intentionally skipping it", 0, LP_getname(e))) : (l = s, verbose_log(p("FOUND %d child forms in this div %s", l.length, LP_getname(e)))), l
    }
}

function elt_is_formlike_container(e, n) {
    if (!e) return !1;
    var t = e.ownerDocument,
        r, o, i = !0,
        a = LP_createXPathFromElement(t, e);
    if (a = a || LP_pickFormName(t, e), !lpIsVisible(e, i)) return !1;
    if (e.children.length <= 0) return !1;
    var l = e.getElementsByTagName("input"),
        s = [],
        _, f, m;
    if (l) {
        if (l.length <= 0) return !1;
        var g = l.length;
        for (Checkpoint.assert(g < MAX_INPUTS_SOFT, "formlike container " + LP_getname(e) + " is too complex"), g > MAX_INPUTS_SOFT && (g = MAX_INPUTS_SOFT), r = 0; r < g; r++)
            if (popupfill_shoulddofield(t, l[r])) {
                s.push(l[r]);
                break
            }
    }
    return !(s.length <= 0) && (0 < s.length && (verbose_log("detected mammaliaforme " + LP_getname(e)), !0))
}
var g_lp_form_num = 1;

function LP_pickFormName(e, n) {
    var t = "none";
    if (null != n && (null == (t = LP_getname(n, LP_GETNAME_FAVOR_ID_OVER_NAME)) || t.length <= 0)) {
        if (null != n.action && "string" == typeof n.action && 0 <= n.action.length || null != n.className && 0 <= n.className.length) {
            var r = n.action;
            "string" != typeof r && (r = n.getAttribute("action")), t = "FF" + r + n.className
        } else t = "none";
        if ("FF" == t || "none" == t) {
            var o = n.getAttribute("lpformnum");
            o || (o = g_lp_form_num++, n.setAttribute("lpformnum", o)), t += "lpformnum" + o
        }
    }
    return t
}

function LP_getFormEquivalent(e, n) {
    return n && (e = e || n.ownerDocument) && n.form ? n.form : null
}
//# sourceMappingURL=sourcemaps/forms_cs.js.map