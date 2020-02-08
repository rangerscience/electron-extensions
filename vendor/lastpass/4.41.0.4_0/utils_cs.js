function LP_objectSize(e) {
    var t, n = 0;
    if (null == e || void 0 === e) return 0;
    if ("function" != typeof e.hasOwnProperty && void 0 !== e.length) return e.length;
    for (t in e) e.hasOwnProperty(t) && n++;
    return n
}

function LP_getComputedStyle(e, t) {
    var n = null;
    return t && e ? n = void 0 !== e.getComputedStyle ? g_isfirefox ? e.getComputedStyle(t, null) : e.getComputedStyle(t) : t.currentStyle : null
}

function LP_getloggedin() {
    return g_isie ? !(!init_LPfn() || !LPfn) && LPfn.get_loginstate() : "undefined" != typeof g_isloggedin ? g_isloggedin : lploggedin
}

function LP_setloggedin(e) {
    if ("string" == typeof e && "0" === e && (e = !1), g_isie) return !(!init_LPfn() || !LPfn) && LPfn.set_loginstate(e);
    if ("undefined" != typeof g_isloggedin) g_isloggedin = !!e;
    else {
        if ("undefined" == typeof lploggedin) return !1;
        lploggedin = !!e
    }
    return !0
}

function get_win_self(e) {
    return "undefined" != typeof g_isfirefoxsdk && g_isfirefoxsdk ? e : e.self
}

function LP_get_live_style(t) {
    if (!t || !t.ownerDocument) return null;
    if (!g_isie && !t.ownerDocument.defaultView) return null;
    var n;
    if (g_isie && t.currentStyle) n = t.currentStyle;
    else try {
        n = t.ownerDocument.defaultView.getComputedStyle(t, "")
    } catch (e) {
        void 0 !== t.currentStyle && (n = t.currentStyle)
    }
    return n
}

function LP_elt_get_text(e) {
    var t = "";
    return e ? "undefined" != typeof g_isfirefox && g_isfirefox ? null == e.textContent ? "" : e.textContent : void 0 !== e.textContent && null != e.textContent ? e.textContent : get_innertext(e) : t
}

function LP_elt_set_text(e, t) {
    return !!e && ("undefined" != typeof g_isfirefox && g_isfirefox ? e.textContent = t : set_innertext(e, t), !0)
}

function parse_zindex(e) {
    if ("string" == typeof e && -1 != e.indexOf("e")) {
        for (var t = "", n = (e = "" + parseFloat(e)).length - 1; 0 <= n && "0" == e.charAt(n); n--) t += "9";
        e = e.substring(0, n + 1) + t
    }
    return parseInt(e)
}

function LP_getAbsolutePos(t, e, n, i) {
    if (LPCTR("getAbsolutePos"), !t || !e) return null;
    null == n && (n = !1), null == i && (i = !1);
    var r = null;
    try {
        r = typeof e.getBoundingClientRect
    } catch (e) {
        r = null
    }
    if (!r || "undefined" == r) return null;
    try {
        var o = e.getBoundingClientRect(),
            u, l;
        u = void 0 === o.width ? o.right - o.left : o.width, l = void 0 === o.height ? o.bottom - o.top : o.height;
        var d = LP_get_cached_body_rect(t),
            f = 0,
            s = 0,
            a = LP_get_cached_body_style(t);
        g_bodystyle_relative && d && a && "relative" == a.position && (i || (f = d.left, s = d.top));
        var _ = {
            scrollLeft: 0,
            scrollTop: 0
        };
        return n || (_ = p(t, d)), {
            left: o.left + _.scrollLeft - f,
            top: o.top + _.scrollTop - s,
            width: u,
            height: l
        }
    } catch (e) {
        return "undefined" != typeof write_error_to_history && write_error_to_history(t, "getAbsolutePos", e), null
    }

    function c(e, t) {
        var n = 1;
        if ("undefined" != typeof g_isie && g_isie && void 0 !== e.querySelector && void 0 === e.addEventListener) return 1;
        if (t) {
            var i = t,
                r = i.right - i.left,
                o = e.body.offsetWidth;
            n = Math.round(r / o * 100) / 100
        }
        return n
    }

    function p(e, t) {
        var n = "undefined" != typeof window && window ? window : e.defaultView;
        if ("pageXOffset" in n) var i = n.pageXOffset,
            r = n.pageYOffset;
        else var o = c(e, t),
            i = Math.round(e.documentElement.scrollLeft / o),
            r = Math.round(e.documentElement.scrollTop / o);
        return {
            scrollLeft: i,
            scrollTop: r
        }
    }
}

function LP_measureText(e, t, n, i, r) {
    var o = LP_measureTextCacheGet(e, t, i);
    if (null != o) return o;
    var u = e.createElement("span"),
        l = null;
    return null == i && null == n || (null == r && (r = e.body), null == r && (r = e.getElementById("hiddenel")), r && (r.appendChild(u), null != i && (u.style.cssText = i), null != n && (u.style.fontSize = n + "px"), u.style.position = "absolute", u.style.left = "-1000px", u.style.top = "-1000px", LP_elt_set_text(u, t), l = {
        width: u.clientWidth,
        height: u.clientHeight
    }, LP_measureTextCacheSet(e, t, i, l), r.removeChild(u), u = null)), l
}

function lp_url_is_lastpass(e) {
    if (null == e) return !1;
    var t = /^https:\/\/([a-z0-9-]+\.)?lastpass\.(eu|com)\//i,
        n = "https://lastpass.com/";
    if ("undefined" != typeof base_url && (n = base_url), 0 == e.indexOf(n) || 0 == e.indexOf("https://lastpass.com/") || 0 == e.indexOf("https://lastpass.eu/")) return !0;
    if ("undefined" == typeof g_loosebasematching) return t.test(e);
    var i = lp_gettld_url(e);
    return new RegExp(i + "/$").test(base_url)
}

function lp_url_is_lastpass_whitelisted(e) {
    var t, n;
    return new RegExp(["/premium/payment", "/enterprisepayment.php", "/teamspayment.php"].join("|")).test(e)
}

function LP_getElementByIdOrName(e, t, n, i) {
    if ("document" == e && (e = document), null == (e = e || LP_derive_doc()) || null == t || 0 == t.length || void 0 === e.getElementsByTagName) return null;
    var r = (n = n ? n.toUpperCase() : "INPUT").toLowerCase(),
        o = !0,
        u = [];
    u = n && "INPUT" != n && !g_isie ? LP_getElementsByXPath(e, sprintf("*[@id='%s' or @name='%s']", t, t)) : LP_getAllInputsByIdOrName(e, t, !0);
    for (var l = [], d = 0; d < u.length; d++) l[l.length] = u[d];
    var f = l.length,
        s = e.getElementById(t);
    if (null != s) {
        if (0 == f || 1 == f && (u[0] == s || null == u[0])) return s;
        l[l.length] = s
    }
    if (LP_name_is_inputidx(e, t)) {
        var a = LP_getinputidx_from_name(e, t);
        if (null !== a && null != (s = LP_getElementByIdx(e, a))) return s
    }
    if (1 == f) return l[0];
    if (0 == f) return null;
    var _ = [],
        c = 0,
        p = -1;
    if ("undefined" == typeof Math) return null;
    for (var g = Math.floor(1e4 * Math.random()), y = 0; y < l.length; y++) _[y] = 0, l[y].tagName.toUpperCase() == n && (_[y] += 20, m(l[y]) && "hidden" != l[y].type && (_[y] += 10)), null != l[y].style && "none" != l[y].style.display && checkIsDisplayed(e, l[y], 0, null, g, !0) && (_[y] += 5), m(l[y]) && inputHasLPBackground(l[y]) && (_[y] += 7), null != l[y].style && "hidden" != l[y].style.visibility && (_[y] += 3), l[y] == g_popupfill_parent && null != g_popupfill_parent ? _[y] += 5 : l[y] == e.g_popupfill_parent && null != e.g_popupfill_parent && (_[y] += 5), i && l[y].form && LP_getname(l[y].form) == i && (_[y] += 20), _[y] > c && (c = _[y], p = y);
    return 0 <= p ? l[p] : null;

    function m(e) {
        return !(!e || !e.tagName || "INPUT" != e.tagName.toUpperCase())
    }
}

function LP_getAllInputsByIdOrName(e, t, n) {
    if (null == e || null == t || 0 == t.length || void 0 === e.getElementsByTagName) return null;
    var i = !0;
    null !== n && (i = n);
    for (var r = e.getElementsByName(t), o = [], u = 0; u < r.length; u++) o[o.length] = r[u];
    if (i) {
        var l = e.getElementsByTagName("input"),
            d, f = l.length;
        for (f > MAX_INPUTS_SOFT && (f = MAX_INPUTS_SOFT), d = 0; d < f; d++) l[d].id == t && o.push(l[d])
    } else {
        var s = LP_getElementByIdOrName(e, t);
        s && o.push(s)
    }
    return o
}

function isEmptyObject(e) {
    return void 0 === Object.keys && (Object.keys = function() {
        "use strict";
        var r = Object.prototype.hasOwnProperty,
            o = !{
                toString: null
            }.propertyIsEnumerable("toString"),
            u = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
            l = u.length;
        return function(e) {
            if ("object" != typeof e && ("function" != typeof e || null === e)) throw new TypeError("Object.keys called on non-object");
            var t = [],
                n, i;
            for (n in e) r.call(e, n) && t.push(n);
            if (o)
                for (i = 0; i < l; i++) r.call(e, u[i]) && t.push(u[i]);
            return t
        }
    }()), 0 === Object.keys(e).length
}

function LP_getname(e, t) {
    if (void 0 !== e && null != e) {
        if (t && "string" == typeof e.id && "" != e.id) return e.id;
        if ("string" == typeof e.name && "" != e.name) return e.name;
        if ("string" == typeof e.id) return e.id
    }
    return ""
}

function LP_getWindowWidth(e, t) {
    if (LPCTR("windowWidth"), !e) return 0;
    if (e === LP_derive_doc()) return console_warn("ERROR: expected win, got doc"), 0;
    var n = e.innerWidth;
    if (null == n || isNaN(n)) try {
        var i = e.document.documentElement;
        i && i.clientWidth || (i = e.document.body), i.clientWidth && (n = parseInt(i.clientWidth), isNaN(n) && (n = 0))
    } catch (e) {
        n = 0
    }
    var r = n,
        o = !0,
        u = e.document;
    if (!u) return 0;
    var l = LP_get_body_reference(u),
        d = LP_get_cached_body_style(u);
    g_bodystyle_relative && d && "relative" == d.position && (l = u.documentElement);
    var f = u.getElementById("_lpinvis");
    null == f && ((f = u.createElement("div")).id = "_lpinvis", f.style.left = "0px", f.style.right = "0px", f.style.top = "0px", f.style.height = "0px", f.style.visibility = "hidden", f.style.position = "absolute", f.setAttribute("aria-hidden", "true"), l.appendChild(f));
    var s, a = LP_getComputedStyle("undefined" != typeof window && window ? window : u.defaultView, l);
    if (!a) return 0;
    var _ = parseInt(a.marginLeft),
        c = parseInt(a.marginRight);
    return 0 < f.offsetWidth && 4 * f.offsetWidth < n && (r = !(0 < _ || 0 < c) || isNaN(_) || isNaN(c) ? f.offsetWidth : f.offsetWidth + c + _), t || l.removeChild(f), r
}

function LP_getWindowHeight(e, t) {
    var n = 0;
    if (null == t && (t = LP_derive_doc()), !e) return 0;
    try {
        var i = parseInt(e.innerHeight);
        if (null == i || isNaN(i) || i <= 0) {
            if (void 0 !== e.jQuery) return $(e).height();
            var r = e.document.documentElement;
            return r && r.clientHeight || (r = e.document.body), r.clientHeight ? (i = parseInt(r.clientHeight), isNaN(i) && (i = 0), i) : 0
        }
    } catch (e) {
        return verbose_log("getWindowHeight failed, " + e.message), 0
    }
    return i < 0 && (i = 0), i
}

function LP_pos_viewport(e) {
    if (!e) return [0, 0];
    var t = 0,
        n = 0,
        i = null;
    return e.document && (i = (i = e.document.documentElement) || e.document.body), n = e.pageYOffset ? parseInt(e.pageYOffset) : i && i.scrollTop ? parseInt(i.scrollTop) : 0, e.pageXOffset ? t = parseInt(e.pageXOffset) : i && i.scrollLeft && (t = parseInt(i.scrollLeft)), isNaN(t) && (t = 0), isNaN(n) && (n = 0), [t, n]
}

function LP_getname_or_idx(e, t, n) {
    if (!e && !(e = document)) return "";
    var i = LP_getname(t, n);
    return "" !== i && null !== i || "INPUT" != t.tagName && "input" != t.tagName || (i = LP_inputidx_to_name(e, LP_getinputidx(e, t))), i
}

function LP_getinputidx(e, t) {
    if (!e && !(e = document)) return "";
    var n = e.getElementsByTagName("INPUT"),
        i = 0;
    for (i = 0; i < n.length; i++)
        if (n[i] == t) return i;
    return ""
}
var LPMAGICINPUTIDX = "input_idx_";

function LP_inputidx_to_name(e, t) {
    if (null !== t && is_valid_input_indexes(e)) return LPMAGICINPUTIDX + t
}

function LP_name_is_inputidx(e, t) {
    return !!(t && 0 == t.indexOf(LPMAGICINPUTIDX) && t.length > LPMAGICINPUTIDX.length)
}

function LP_getinputidx_from_name(e, t) {
    return is_valid_input_indexes(e) && 0 == t.indexOf(LPMAGICINPUTIDX) ? t.substr(LPMAGICINPUTIDX.length) : null
}

function LP_getElementByIdx(e, t) {
    var n = null,
        i;
    is_valid_input_indexes(e) && (n = e.getElementsByTagName("INPUT")[t]);
    return n
}

function invalidate_input_indexes(e) {
    (e = e || document) && (e.g_need_to_recompute_input_index = !0)
}

function validate_input_indexes(e) {
    (e = e || document) && (e.g_need_to_recompute_input_index = !1)
}

function is_valid_input_indexes(e) {
    return e = e || document, !0
}

function LP_get_body_reference(e) {
    if (!e) return null;
    var t = null;
    return t = void 0 !== e.body ? e.body : e.getElementById("main") ? e.getElementById("main") : e.documentElement
}

function LP_get_cached_body_style(e) {
    if (!e) return null;
    var t = LP_get_body_reference(e),
        n = null;
    if (void 0 === e.g_posbodystyle_cache) {
        if (t) {
            var i = "undefined" != typeof window && window ? window : e.defaultView;
            n = i && void 0 !== i.getComputedStyle ? i.getComputedStyle(t, null) : t.currentStyle, e.g_posbodystyle_cache = n
        }
    } else n = e.g_posbodystyle_cache;
    return n
}

function LP_get_cached_body_rect(e) {
    if (!e) return null;
    var t, n = LP_get_body_reference(e);
    return void 0 === e.g_posbodyrect_cache && n ? (t = n.getBoundingClientRect(), e.g_posbodyrect_cache = t) : t = e.g_posbodyrect_cache, t
}

function LP_derive_doc() {
    var e = null;
    return (e = "undefined" != typeof g_isfirefox && g_isfirefox && LP ? LP.getBrowser().contentDocument : document) || null
}

function LP_is_inframe(e) {
    if (!e) return !1;
    try {
        var t = "undefined" != typeof window && window ? window : e.defaultView;
        return get_win_self(t) !== t.top
    } catch (e) {
        return !1
    }
}

function LP_pickFieldName(e, t) {
    return e && t ? LP_getname_or_idx(e, t, LP_GETNAME_FAVOR_ID_OVER_NAME) : null;
    var n
}

function LP_fieldGetWidth(t) {
    if (!t) return 0;
    var n = {},
        i = 0;
    if ("undefined" != typeof g_isie && g_isie) {
        if (void 0 !== t.offsetWidth && (i = parseInt(t.offsetWidth)), !i) {
            if (void 0 === t.currentStyle) return 0;
            (n = t.currentStyle) && (i = parseInt(n.width))
        }
    } else if (0 < (i = t.style.width.replace(/px/, "")).indexOf("%") && (i = i.replace(/%/, "")), "" == i) try {
        i = (n = t.ownerDocument.defaultView.getComputedStyle(t, "")).width.replace(/px/, "")
    } catch (e) {
        void 0 !== t.currentStyle && (i = (n = t.currentStyle).width.replace(/px/, ""))
    }
    return "NaN" != i && "" !== i || (i = 0), i
}

function LP_getActiveElement(e) {
    return e ? e.activeElement : null
}

function LP_docHasFocus(e) {
    return !!e || null
}

function is_page_JSON(e) {
    if (!e) return null;
    if (void 0 !== e.lp_is_page_json) return e.lp_is_page_json;
    var t = e.body;
    if (t) {
        var n = t.innerHTML;
        if ((n = void 0 !== n.trim ? n.trim() : n.replace(/^\s*/, "")) && 2 < n.length && ("{" == n.charAt(0) || "(" == n.charAt(0))) return e.lp_is_page_json = !0
    }
    return e.lp_is_page_json = !1
}

function normalize_opacity(e) {
    if (null == e || "undefined" == typeof Math) return 0;
    var t = 0;
    return 0 < e && e <= 1 ? t = Math.floor(100 * e) : 1 < e && e <= 100 && (t = e), t
}

function set_can_xref(e, t, n) {
    return !(!e || !t) && (g_isfirefox ? e.setAttribute("can_xref_" + t, n) : g_can_xref[t] = n, !0)
}

function get_can_xref(e, t) {
    return !(!e || !t) && (g_isfirefox ? null == (n = e.getAttribute("can_xref_" + t)) || n : null == (n = g_can_xref[t]) ? g_can_xref[t] = !0 : n);
    var n, n
}

function compare_puny_urls(e, t) {
    return "undefined" != typeof punycode && ("string" == typeof e && -1 == e.indexOf("xn--") && (e = punycode.URLToASCII(e)), "string" == typeof t && -1 == t.indexOf("xn--") && (t = punycode.URLToASCII(t))), "undefined" != typeof g_iscasper && g_iscasper && ("string" == typeof e && (e = e.replace(/\\/g, "%5C")), "string" == typeof t && (t = t.replace(/\\/g, "%5C"))), "string" == typeof e && 0 <= (e = void 0 !== e.trim ? e.trim() : e.replace(/^\s*/, "")).indexOf("#") && (e = e.replace(/#$/, "")), "string" == typeof t && 0 <= (t = void 0 !== t.trim ? t.trim() : t.replace(/^\s*/, "")).indexOf("#") && (t = t.replace(/#$/, "")), e === t
}

function LP_getFormSubmit(e) {
    if (!e || "FORM" != e.tagName.toUpperCase()) return null;
    var t = null;
    if ("function" == typeof e.lpsubmitorig2) return e.lpsubmitorig2;
    try {
        t = Object && void 0 !== Object.getPrototypeOf ? Object.getPrototypeOf(e).submit : e.constructor.prototype.submit
    } catch (e) {
        verbose && alert(e.message), t = null
    }
    return t
}

function LP_set_float(e, t) {
    if (!e || null == t) return !1;
    var n = e.ownerDocument;
    n = n || document;
    var i = 0;
    return "undefined" != typeof g_isie && g_isie && ("undefined" != typeof LPfn && LPfn && init_LPfn() && LPfn.getDocumentMode ? i = LPfn.getDocumentMode(n) : void 0 !== LP_getDocumentMode ? i = LP_getDocumentMode(n) : "undefined" != typeof getDocumentMode && (i = getDocumentMode(n))), "undefined" != typeof g_isie && g_isie && i <= 8 ? e.style.styleFloat = t : e.style.cssFloat = t, !0
}

function LP_get_float(e) {
    if (!e) return "";
    var t = e.ownerDocument;
    t = t || document;
    var n = 0;
    "undefined" != typeof g_isie && g_isie && ("undefined" != typeof LPfn && LPfn && init_LPfn() && LPfn.getDocumentMode ? n = LPfn.getDocumentMode(t) : void 0 !== LP_getDocumentMode ? n = LP_getDocumentMode(t) : "undefined" != typeof getDocumentMode && (n = getDocumentMode(t)));
    var i = LP_get_live_style(e);
    return "undefined" != typeof g_isie && g_isie && n <= 8 ? i.styleFloat : i.cssFloat
}

function LP_set_style_attr(e, t) {
    if (!e || null == t) return !1;
    var n = "undefined" != typeof document ? document : e.ownerDocument,
        i = 0;
    if ("undefined" != typeof g_isie && g_isie && ("undefined" != typeof LPfn && LPfn && init_LPfn() && LPfn.getDocumentMode ? i = LPfn.getDocumentMode(n) : void 0 !== i && (i = getDocumentMode(n))), "undefined" != typeof g_isie && g_isie && i <= 8) {
        var n = e.ownerDocument;
        e.style.cssText = t
    } else e.setAttribute("style", t);
    return !0
}

function LP_capitalize(e) {
    return e ? ("number" == typeof e && void 0 !== e.toString && (e = e.toString()), "string" != typeof e ? "" : e.charAt(0).toUpperCase() + e.slice(1)) : ""
}

function LP_gettime() {
    return "undefined" != typeof Date ? (new Date).getTime() : 0
}

function LP_set_image_src(e, t) {
    return !(!e || void 0 === t) && (g_isie ? e.src = t : e.setAttribute("src", t), !0)
}

function LP_has_highdef_display(e) {
    if ("undefined" != typeof document && e === document || null === e)
        if ("undefined" != typeof window) e = window;
        else {
            var t = LP_derive_doc();
            t && (e = t.defaultView)
        } if (!e) return !1;
    var n = e.devicePixelRatio;
    return void 0 !== n && 1.5 <= n
}

function LP_is_browser_url(e) {
    return !(!e || "string" != typeof e) && !!e.toLowerCase().match(/^(about|chrome|safari|chrome-extension|safari-extension|moz-extension|resource|opera|vivaldi):/)
}

function LP_getDocumentMode(e) {
    return (e = e || LP_derive_doc()) ? "undefined" != typeof LPfn && LPfn && init_LPfn() && LPfn.getDocumentMode ? LPfn.getDocumentMode(e) : void 0 !== e.documentMode && null !== e.documentMode ? e.documentMode : "undefined" != typeof g_isie && g_isie ? void 0 !== e.compatMode && null !== e.compatMode && "CSS1Compat" == e.compatMode ? 7 : 5 : 0 : 0
}

function LP_getQuirksMode(e) {
    return !(e = e || LP_derive_doc()) || !!g_isie && (!(6 < LP_getDocumentMode(e)) && (void 0 === e.compatMode || null == e.compatMode || "CSS1Compat" != e.compatMode));
    var t
}
//# sourceMappingURL=sourcemaps/utils_cs.js.map