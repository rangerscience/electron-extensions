var MAX_DIALOG_WIDTH = 400;

function LP_getLPIframe(e, t) {
    if (!(e = e || LP_derive_doc())) return null;
    var r = null,
        i = null,
        o;
    if (t && (i = e.getElementById(t)) && "IFRAME" == i.tagName.toUpperCase() && i.name == i.id) return r = i;
    var n = g_popupfill_parent;
    if ((t = LP_getLPIframeID(e, n = n || g_popupfill_parent_last)) && (i = e.getElementById(t)) && "IFRAME" == i.tagName.toUpperCase() && i.name == i.id) return r = i;
    var a = e.getElementsByTagName("IFRAME");
    for (o = 0; o < a.length; o++)
        if ((i = a[o]) && void 0 !== i.id && null != i.id) {
            var l = LPMAGICIFRAME;
            if (0 == i.id.indexOf(l)) {
                r = i;
                break
            }
        } return r
}

function relocate_LPIframe(e, t) {
    if (!(e = e || LP_derive_doc())) return !1;
    var r = !0,
        i, o = LP_getLPIframe(e, LP_getLPIframeID(e));
    if (o) {
        var n = LP_getComputedStyle(e, o);
        if (g_iframe_docked) var a = LP_getAbsolutePos(e, g_popupfill_parent)
    } else r = !1;
    return r
}

function resize_LPIframe(e, t) {
    if (!(e = e || LP_derive_doc()) || !t) return !1;
    var r = "px",
        i = {};
    if (g_drag_type = LP_DRAG_NODRAG, void 0 !== t.height && void 0 !== t.width);
    else {
        if (void 0 === t.delx || void 0 === t.dely) return !1;
        g_drag_type = LP_DRAG_RESIZE
    }
    var o = !1,
        n, a = LP_getLPIframe(e, LP_getLPIframeID(e));
    if (a) {
        if (g_draggable && g_drag_type === LP_DRAG_RESIZE) {
            var l = LP_getAbsolutePos(e, a);
            i = {
                width: l.width + t.delx,
                height: l.height + t.dely
            }, g_minwidth_override = i.width, g_minheight_override = i.height
        } else i = {
            width: t.width,
            height: t.height
        };
        o = place_LPIframe(e, i)
    }
    return o
}

function place_LPIframe(t, e) {
    if (!(t = t || LP_derive_doc()) || !e) return !1;
    var r = sprintf;
    "undefined" != typeof g_isie && g_isie && (init_LPfn(), "undefined" != typeof LPfn && (r = LPfn.sprintf));
    var i = !0,
        o = "px",
        n, a = LP_getLPIframe(t, LP_getLPIframeID(t));
    if (a) {
        var l = LP_getAbsolutePos(t, a);
        if (null === l || parseInt(e.width) < 0 || parseInt(e.height) < 0) verbose_log("invalid iframe pos"), i = !1;
        else {
            var s = parseInt(l.top) + o,
                _ = parseInt(l.left) + o,
                f = parseInt(l.height) + o,
                p = parseInt(l.width) + o,
                d = "";
            void 0 !== e.height && ("" === (d = parseInt(e.height)) || isNaN(d) || (f = d + o)), void 0 !== e.width && ("" === (d = parseInt(e.width)) || isNaN(d) || (p = d + o)), void 0 !== e.left && ("" === (d = parseInt(e.left)) || isNaN(d) || (_ = d + o)), void 0 !== e.top && ("" === (d = parseInt(e.top)) || isNaN(d) || (s = d + o));
            var g = r("width: %s !important; height: %s !important; top: %s !important; left:%s !important;", p, f, s, _);
            if ("" == g_frame_css_str) try {
                var u = document.body.getAttribute("data-lp-gcss");
                u && (g_frame_css_str = LPJSON.parse(u), document.body.removeAttribute("data-lp-gcss"))
            } catch (e) {
                write_error_to_history(t, "resize_LPIframe", e)
            }
            var m = g_frame_css_str + g;
            m.match(/position: *absolute/) || (m += " position: absolute;"), normalize_css(a.style.cssText) != normalize_css(m) && (a.style.cssText = m, a.setAttribute("width", parseInt(p)), a.setAttribute("height", parseInt(f)))
        }
    } else i = !1;
    return i
}

function LP_getLPIframeID(e, t) {
    if (!e && t && (e = t.ownerDocument), !(e = e || LP_derive_doc())) return null;
    var r = null;
    if (t) {
        var i = LP_pickFieldName(e, t);
        r = LPMAGICIFRAME + i
    } else r = void 0;
    return r
}

function LP_computeLPIframeID(e) {
    if ("undefined" == typeof SHA256) return LPMAGICIFRAME + e;
    var t = sprintf;
    return "undefined" != typeof g_isie && g_isie && (init_LPfn(), "undefined" != typeof LPfn && (t = LPfn.sprintf)), SHA256(t("%d-%s", Date.now(), e))
}

function rot13(e) {
    if (!e) return "$str =~ tr/a-zA-Z/n-za-mN-ZA-M/";
    for (var t = "", r = 0; r < e.length; r++) {
        var i = e.charCodeAt(r);
        65 <= i && i <= 77 || 97 <= i && i <= 109 ? i += 13 : (78 <= i && i <= 90 || 110 <= i && i <= 122) && (i -= 13), t += String.fromCharCode(i)
    }
    return t
}

function LP_inIframe(e) {
    if (e = e || window, null != g_inframe) return g_inframe;
    try {
        var t = get_win_self(e);
        return t !== e.top && (!is_edge() || (t.location.href != e.top.location.href || e.frameElement))
    } catch (e) {
        return !0
    }
}

function is_your_popup_showing(e) {
    if (null == e) return !1;
    var t = e.defaultView;
    t || "undefined" == typeof window || (t = window);
    var r = !1;
    try {
        if (null == e.location) {
            verbose_log("is_your_popup_showing given a firefox zombie document?");
            var i = void 0 !== LP.lpGetCurrentWindow().getBrowser ? LP.lpGetCurrentWindow().getBrowser().contentDocument : LP.getBrowser().contentDocument;
            closepopupfills(i), r = !0
        }
    } catch (e) {
        r = !0
    }
    if (r) return !1;
    if (g_isfirefox && verbose_log("entered is_your_popup_showing for doc=" + e.location.href), g_create_iframe_in_top && !g_isie && !g_isfirefox && LP_inIframe(t)) return toplevel_iframe_state_get();
    if (0 < e.location.href.indexOf("popupfilltab.xul")) return !0;
    for (var o = e.getElementsByTagName("iframe"), n = 0; n < o.length; n++)
        if ("function" != typeof o.hasOwnProperty || o.hasOwnProperty(n)) {
            var a = LPMAGICIFRAME;
            if (0 == o[n].id.indexOf(a)) return !0
        } return !1
}

function enableScrollOnIframe(e, t) {
    if (null == t && (t = document || LP.getBrowser().contentDocument), null == t) return null;
    verbose_log("enabling Scroll on Iframe for " + t.location.href);
    var r = t.getElementsByTagName("IFRAME"),
        i, o = null;
    if (null != r && 0 < r.length)
        for (i = 0; i < r.length; i++) {
            o = r[i];
            var n = e.replace(/^(https:|http:)/, "");
            verbose_log("checking iframe src=" + lp_ofa(o.src) + " passed href=" + lp_ofa(e)), (o.src == e || 0 < o.src.indexOf(e) || 0 < o.src.indexOf(n)) && ("undefined" != typeof g_isie && g_isie ? (o.setAttribute("scrolling", "auto"), o.style.overflow = "visible", o.style.maxHeight = "none") : (o.setAttribute("scrolling", "auto"), o.style.overflow = "auto"), verbose_log("enabling scroll on iframe to " + lp_ofa(e)))
        }
}

function enableScrollWithinIframe(e, t) {
    if (!(e = e || LP_derive_doc())) return !1;
    if (null == t && (t = window), is_your_popup_showing(e) && get_win_self(t) != t.top)
        if (verbose_log("enabling scroll on body of iframe"), g_isfirefox) e.body.style.overflow = "auto";
        else if (g_isie) {
        var r = 0;
        "undefined" != typeof init_LPfn && init_LPfn() && LPfn && (r = LPfn.getDocumentMode(document)), 7 < r ? (e.body.style.overflow = "visible", e.body.setAttribute("scroll", "auto")) : e.body.setAttribute("overflow", "auto")
    } else e.body.style.overflow = "auto"
}

function LP_getIframeBySrc(e, t) {
    var r;
    null == e && (e = document);
    var i = e.getElementsByTagName("IFRAME"),
        o;
    for (o = 0; o < i.length; o++)
        if (i[o].src == t) return i[o];
    return null
}

function toplevelpopupsetstate_handler(e) {
    g_create_iframe_in_top && toplevel_iframe_state_set(!!e)
}

function toplevel_iframe_state_get() {
    return g_toplevel_iframe_exists
}

function toplevel_iframe_state_set(e) {
    g_toplevel_iframe_exists = e
}

function LP_do_toplevel_iframe_hack(e) {
    return !!e && (!g_isie && !g_isfirefox)
}

function relocate_popupfill_iframes(t, e) {
    try {
        var r = t;
        if (g_isfirefox && (r = void 0 !== LP.lpGetCurrentWindow().getBrowser ? LP.lpGetCurrentWindow().getBrowser().contentDocument : LP.getBrowser().contentDocument), !t || !r) return null;
        if (g_isfirefox && null == t.location) {
            verbose_log("relocate_popupfill_iframes given zombie document?");
            var i = void 0 !== LP.lpGetCurrentWindow().getBrowser ? LP.lpGetCurrentWindow().getBrowser().contentDocument : LP.getBrowser().contentDocument;
            return void closepopupfills(i)
        }
        var o = !1,
            n = !1,
            a;
        if (!l) {
            var l = t.defaultView;
            l = l || t.parentWindow
        }
        "undefined" != typeof g_iscasper && g_iscasper && (l = t.defaultView);
        var s = null,
            _ = r.getElementsByTagName("iframe");
        for (a = 0; a < _.length; a++) {
            var f = _[a];
            if (s = null, void 0 !== f.id && null != f.id) {
                var p = LPMAGICIFRAME;
                if (0 == f.id.indexOf(p)) {
                    var d = f.id.substr(p.length),
                        g = d;
                    o = !0;
                    var u = LP_getElementByIdOrName(t, d),
                        m;
                    if (g_isfirefox || null != u && lpIsVisible(u, !e)) {
                        var c = 0,
                            v = 0,
                            h = null;
                        if (g_isfirefox) null != (h = ff_get_iframe_pos(t, l, u, g, r)) && (n = !0);
                        else if (h = calculate_iframe_pos(t, u, 0 < g_minwidth_override ? g_minwidth_override : 0), g_draggable && !g_iframe_docked) {
                            var P = !0,
                                I, L = I = !1,
                                y = LP_getAbsolutePos(t, f, L);
                            h.posx = y.left, h.posy = y.top
                        }
                        null != h && place_iframe_absolute(t, l, f, h, r)
                    } else if (!g_create_iframe_in_top || g_isie || g_isfirefox || LP_inIframe(l) || !toplevel_iframe_state_get()) g_isfirefox || g_double_password_hack || g_double_secret_password_hack || LP_element_is_MaskedField(u) || LP_element_is_UnmaskedField(u) || closepopupfills(t);
                    else {
                        var P = !0,
                            I, L = I = !1;
                        (h = LP_getAbsolutePos(t, f, L)).posx = h.left, h.posy = h.top, place_iframe_absolute(t, l, f, h, r)
                    }
                }
            }
        }
        g_isfirefox && !n && o && (verbose_log("found orphan iframe, remove it"), closepopupfills(t))
    } catch (e) {
        lplog("relocate_popupfill_iframe failed, " + e.message), do_bgiconinput || end_weasel(t), g_isfirefox && closepopupfills(t)
    }
}

function place_iframe_absolute(e, t, r, i, o) {
    if (!(r && e && t && i)) return !1;
    var n = null,
        a;
    if ("undefined" != typeof Math) {
        var l = null;
        g_draggable && !g_iframe_docked && (l = LP_getComputedStyle(t, r));
        try {
            var s = i.posx,
                _ = i.posy,
                f = parseInt(s) + "px",
                p = parseInt(_) + "px",
                d = 0;
            0 < parseInt(g_minwidth_override) ? (d = Math.max(parseInt(g_popupfill_iframe_width_save), parseInt(g_minwidth_override)) + "px", (a = LP_getWindowWidth(t, !0)) && parseInt(d) + parseInt(f) > a && (f = a - parseInt(d) - 20 + "px")) : d = 0 < parseInt(g_popupfill_iframe_width_save) ? parseInt(g_popupfill_iframe_width_save) + "px" : (null == n && (n = LP_getComputedStyle(t, r)), n.width), parseInt(f) < 0 && (f = "0px"), parseInt(p) < 0 && (p = "0px");
            var g = 0;
            if (0 < parseInt(g_minheight_override) ? g = Math.max(parseInt(g_popupfill_iframe_height_save), parseInt(g_minheight_override)) + "px" : "" != g_popupfill_iframe_height_save && 0 < parseInt(g_popupfill_iframe_height_save) ? g = parseInt(g_popupfill_iframe_height_save) + "px" : (null == n && (n = LP_getComputedStyle(t, r)), n && (g = n.height)), d = Math.min(parseInt(d), MAX_DIALOG_WIDTH) + "px", g_iframe_scroll_hack && !g_frame_scrollable_set) {
                var u = parseInt(g),
                    m = parseInt(d),
                    c;
                c = t && void 0 !== t.getComputedStyle ? g_isfirefox ? LP_getComputedStyle(t, e.documentElement) : LP_getComputedStyle(t, e.body) : void 0 !== e.documentElement ? LP_getComputedStyle(t, e.documentElement) : LP_getComputedStyle(t, e.body);
                var v = parseInt(c.height),
                    h = parseInt(c.width),
                    P = t.innerHeight,
                    I = t.innerWidth,
                    L;
                if (void 0 === P && (P = LP_getWindowHeight(t, e)), void 0 === I && (I = LP_getWindowWidth(t)), null != u && 0 < u && null != P && 0 < P || null != m && 0 < m && null != I && 0 < I)
                    if (parseInt(_) + u > P || parseInt(s) + m > I)
                        if (LP_inIframe(t)) {
                            if (g_isfirefox) {
                                enableScrollWithinIframe(e, t);
                                var y = LP.getBrowser(),
                                    b = y ? y.contentDocument : null;
                                b && b != e && enableScrollOnIframe(e.location.href, o)
                            } else g_isie || (verbose_log("ensuring this frame/iframe has scrolling enabled"), sendBG({
                                cmd: "iframescrollenable",
                                href: e.location.href
                            }));
                            g_frame_scrollable_set = !0
                        }
            }
            g_draggable && !g_iframe_docked && l && (i && void 0 !== i.posx && void 0 !== i.posy ? (p = parseInt(i.posy) + "px", f = parseInt(i.posx) + "px", parseInt(i.posy) < 0 && (p = "0px"), parseInt(i.posx) < 0 && (f = "0px")) : (p = l.top, f = l.left)), place_LPIframe(e, {
                width: d,
                height: g,
                top: p,
                left: f
            }) || (verbose_log("invalid iframe pos"), debug_checkpoint("failed to place iframe"), closepopupfills(e))
        } catch (e) {
            verbose && alert("place_abs " + e.message)
        }
        return True
    }
}

function normalize_css(e) {
    return e = (e = (e = (e = e.replace(/ /g, "")).replace(/1\.0/g, "1")).replace(/2147483647/g, "2147483648")).replace("border-top-style:none!important;border-right-style:none!important;border-bottom-style:none!important;border-left-style:none!important;", "border-style:none!important;"), g_isie && (e = (e = (e = e.replace("filter:alpha(opacity=100)!important;", "")).replace("border-style:none!important;", "")).split(";").sort().join(";")), e
}

function moveIframe_handler(e, t) {
    if (e = e || LP_derive_doc()) {
        var r = e.defaultView;
        if (r = r || window, g_draggable && void 0 !== t.delx && void 0 !== t.dely) {
            var i = !(g_iframe_docked = !1),
                o = !1,
                n = !0,
                a = LP_getLPIframe(e);
            if (a) {
                var l = LP_getAbsolutePos(e, a),
                    s;
                if (l) place_iframe_absolute(e, r, a, {
                    posx: l.left + t.delx,
                    posy: l.top + t.dely
                })
            }
        }
    }
}

function resizeIframe_handler(e, t) {
    (e = e || LP_derive_doc()) && t && resize_LPIframe(e, t)
}
//# sourceMappingURL=sourcemaps/frames_cs.js.map