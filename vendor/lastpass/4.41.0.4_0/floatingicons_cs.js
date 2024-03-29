function LP_floating_icon_exists(e, i) {
    return !!(e = e || LP_derive_doc()) && null != LP_getElementByIdOrName(e, LP_compute_floating_iconcontainer_id(e, i));
    var t
}

function do_icon_mouseover(e, i, t) {
    if (null == e || null == i || !t) return !1;
    var n = LP_pickFieldName(e, t),
        _ = LP_compute_floating_icon_id(e, n),
        o = e.getElementById(_);
    if (is_your_popup_showing(e)) return null != o && (o.style.opacity = "1", o.style.filter = "alpha(opacity=100)"), !1;
    if (null != o) {
        var l = !0,
            r;
        if (null != e.getElementById(i)) {
            var a = !1,
                s = getIconState(e, n);
            s && (a = s.fillhint), "formfills" == a ? (LP_has_highdef_display(d) ? LP_set_image_src(o, g_40_icons["FormFill_dark@2x"]) : LP_set_image_src(o, g_40_icons.FormFill_dark), l = !1) : "offersave" == a ? l = !1 : "generate" == a && (LP_has_highdef_display(d) ? LP_set_image_src(o, g_40_icons["Generate_dark@2x"]) : LP_set_image_src(o, g_40_icons.Generate_dark), l = !1)
        }
        if (l) {
            var d = e.defaultView;
            d = d || window, LP_has_highdef_display(d) ? LP_set_image_src(o, g_40_icons["16x16_dark@2x"]) : LP_set_image_src(o, g_40_icons["16x16"])
        }
        o.style.opacity = "1", o.style.filter = "alpha(opacity=100)"
    }
    if (g_do_icon_number_hint) {
        var c = LP_compute_floating_number_id(e, n),
            g = e.getElementById(c);
        null != g && g_icon_shading && (g.style.backgroundColor = "#CCFF99")
    }
}

function do_icon_mouseout(e, i, t) {
    if (null == e || null == i || !t) return !1;
    var n = LP_pickFieldName(e, t),
        _ = LP_compute_floating_icon_id(e, n),
        o = e.getElementById(_);
    if (is_your_popup_showing(e)) return null != o && (o.style.opacity = "0.6"), !1;
    if (null != o) {
        var l;
        if (null == e.getElementById(i)) return !1;
        var r = e.defaultView;
        r = r || window;
        var a = !1,
            s = getIconState(e, n);
        s && (a = s.fillhint), a && ("sites" === a || "formfills" === a || "generate" === a || "offersave" === a) || (a = "default"), "default" == a || "sites" == a ? (LP_has_highdef_display(r) ? LP_set_image_src(o, g_40_icons["16x16_dark@2x"]) : LP_set_image_src(o, g_40_icons["16x16"]), o.style.opacity = "0.6", o.style.filter = "alpha(opacity=60)") : "formfills" == a ? (LP_has_highdef_display(r) ? LP_set_image_src(o, g_40_icons["FormFill_dark@2x"]) : LP_set_image_src(o, g_40_icons.FormFill_dark), o.style.opacity = "0.6", o.style.filter = "alpha(opacity=60)") : "generate" == a && (LP_has_highdef_display(r) ? LP_set_image_src(o, g_40_icons["Generate_dark@2x"]) : LP_set_image_src(o, g_40_icons.Generate_dark), o.style.opacity = "0.6", o.style.filter = "alpha(opacity=60)")
    }
    if (g_do_icon_number_hint) {
        var d = LP_compute_floating_number_id(e, n),
            c = e.getElementById(d);
        null != c && (g_icon_shading ? c.style.backgroundColor = "#FFFFFF" : a && g_icon_numbers && 1 < g_icon_numbers[a] ? c.style.display = "block" : c.style.display = "none")
    }
}

function change_clickable_icon_to_cancel(e, i, t) {
    if (!e && !(e = LP_derive_doc())) return !1;
    var n = e.defaultView;
    n = n || window;
    var _ = LP_compute_floating_icon_id(e, t),
        o = e.getElementById(_);
    if (null != o) {
        var l;
        if (null == e.getElementById(i)) return !1;
        LP_has_highdef_display(n) ? LP_set_image_src(o, g_40_icons["IF_Close@2x"]) : LP_set_image_src(o, g_40_icons.IF_Close), o.style.opacity = "0.6", o.style.filter = "alpha(opacity=60)"
    }
    return !0
}

function shouldCreateFloatingIcon(e, n, i) {
    if (!e && !(e = LP_derive_doc())) return !1;
    if (!e || !n) return !1;
    if ("stripe.com" == i) return !0;
    if ("dominos.com" == i) return !1;
    if ("metlife.com" == i && -1 != e.location.href.indexOf("mybenefits.metlife.com")) return !0;
    var t = LP_get_live_style(n);
    return t && t.backgroundImage && "none" != t.backgroundImage && !inputHasLPBackground(n) ? !(0 <= t.backgroundImage.indexOf("blank")) : !(!g_trial_bg_expt || _(n));

    function _(e) {
        if (!e) return !1;
        var i = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGP6zwAAAgcBApocMXEAAAAASUVORK5CYII=";
        e.style.backgroundImage = "url(" + i + ")";
        var t = LP_get_live_style(n);
        return !(!t || "none" == t.backgroundImage || !t.backgroundImage) && (!g_stylesheet_grubbing || !LP_input_has_bg_style_override(e.ownerDocument))
    }
}

function LP_create_floating_icon(i, t, e, n) {
    if (!i && !(i = LP_derive_doc())) return !1;
    if (!t) return !1;
    var _ = i.defaultView;
    _ = _ || window;
    var o = i.getElementsByTagName("body")[0],
        l, r, a = LP_pickFieldName(i, t),
        s = !1,
        d = getIconState(i, a);
    d && "generate" == d.fillhint && (s = !0);
    var c = LP_compute_floating_iconcontainer_id(i, a);
    if (LP_floating_icon_exists(i, a)) return !1;
    (r = i.createElement("div")).id = c, "undefined" != typeof g_isfirefox && g_isfirefox ? (null == i.g_popup_divs && (i.g_popup_divs = {}), i.g_popup_divs[r.id] = r.id) : g_popup_divs[r.id] = r.id, l = i.createElement("img"), t.offsetHeight < LPICON_WIDTH && (l.height = t.offsetHeight, l.width = l.height), l.id = r.id + "_icon";
    var g = !0,
        f;
    return null != e && ("formfills" == e ? (LP_has_highdef_display(_) ? LP_set_image_src(l, g_40_icons["FormFill_dark@2x"]) : LP_set_image_src(l, g_40_icons.FormFill_dark), l.style.opacity = "0.6", g = !(l.style.filter = "alpha(opacity=60)")) : "generate" == e && (LP_has_highdef_display(_) ? LP_set_image_src(l, g_40_icons["Generate_dark@2x"]) : LP_set_image_src(l, g_40_icons.Generate_dark), l.style.opacity = "0.6", g = !(l.style.filter = "alpha(opacity=60)"))), g && (LP_has_highdef_display(_) ? LP_set_image_src(l, g_40_icons["16x16_dark@2x"]) : LP_set_image_src(l, g_40_icons["16x16"]), l.style.opacity = "0.6", l.style.filter = "alpha(opacity=60)"), r.appendChild(l), "sites" == e && (!LP_getloggedin() || g_isfirefox || g_isie || t.setAttribute("autocomplete", "off")), g_do_icon_number_hint && LP_create_floating_icon_hint(i, r.id, e, n) && LP_set_floating_icon_hint(i, r.id, e, n), o.appendChild(r), r.style.maxHeight = LPICON_WIDTH + "px", r.style.verticalAlign = "top", l.style.verticalAlign = "top", "undefined" != typeof g_docnum && verbose_log("[" + g_docnum + "] setting up click listener on icon for " + LP_pickFieldName(i, t)), g_icon_hover && (LP_addEventHandler(r, "mouseover", function(e) {
        return do_icon_mouseover(i, r.id, t), LP_stopEventPropagation(e), !1
    }), LP_addEventHandler(r, "mouseout", function(e) {
        return do_icon_mouseout(i, r.id, t), LP_stopEventPropagation(e), !1
    })), g_icon_parent_hover && (LP_addEventHandler(t, "mouseover", function(e) {
        return do_icon_mouseover(i, r.id, t), LP_stopEventPropagation(e), !1
    }), LP_addEventHandler(t, "mouseout", function(e) {
        return do_icon_mouseout(i, r.id, t), LP_stopEventPropagation(e), !1
    })), LP_addEventHandler(o, "DOMsubtreemodified", function() {
        return popupfill_resize(i), !1
    }, !1), LP_addEventHandler(o, "resize", function() {
        return popupfill_resize(i), !1
    }, !1), o.onresize = onresize_handler, setprops_floating_icon(i, t, r, e, n), !0
}

function move_floating_icon(e, i, t, n) {
    if (!(e = e || LP_derive_doc()) || !i) return !1;
    var _ = e.getElementsByTagName("body")[0],
        o, l, r = LP_pickFieldName(e, i, LP_GETNAME_FAVOR_ID_OVER_NAME),
        l;
    if (!t) {
        var a = getIconState(e, r);
        a && (t = a.fillhint)
    }
    return (l = LP_getElementByIdOrName(e, LP_compute_floating_iconcontainer_id(e, r))) && (g_do_icon_number_hint && (LP_getloggedin() ? LP_set_floating_icon_hint(e, l.id, t, n) : LP_delete_floating_icon_hint(e, l.id)), setprops_floating_icon(e, i, l, t, n)), !0
}

function setprops_floating_icon(e, i, t, n, _) {
    if (e && i && t) {
        var o = LP_pickFieldName(e, i),
            l = getIconState(e, o);
        if (l) {
            C(e, t), "absolute" != t.style.position && (t.style.position = "absolute");
            var r = LP_getAbsolutePos(e, i);
            if (null != r) {
                if (i.offsetHeight > LPICON_WIDTH) {
                    var a = r.top + (i.offsetHeight - LPICON_WIDTH) / 2 + "px";
                    t.style.top != a && (t.style.top = a)
                } else t.style.top != r.top + "px" && (t.style.top = r.top + "px");
                var s = !1;
                if (0 == l.text_direction) var d = r.left + 2 + "px";
                else var d = r.left + i.offsetWidth - LPICON_WIDTH - 2 + "px";
                if (t.style.left != d && (t.style.left = d), g_do_icon_number_hint) {
                    var c;
                    null == N && (N = e.getElementById(t.id + "_icon"));
                    var g = parseInt(t.style.left),
                        f = parseInt(t.style.top),
                        u = e.getElementById(t.id + "_numspan");
                    if (null != u)
                        if (C(e, u), null != n && null != _ && null != _[n] && 1 < _[n]) {
                            var p = "font-size: 9px;font-family: Helvetica,Arial,sans-serif;font-weight:bold;line-height:11px;",
                                m = _[n];
                            0 < _[n] && _[n] < 9 && (m = " " + _[n]);
                            var h = LP_measureText(e, m, null, p);
                            if (null != h) {
                                var P, v;
                                P = void 0 === N.width || 0 == N.width ? LPICON_WIDTH : N.width, v = void 0 === N.height || 0 == N.height ? LPICON_HEIGHT : N.height;
                                var y = g + P - h.width + 2 + "px",
                                    L, x = f + v - h.height + 6 + "px",
                                    I = y,
                                    b, w = "position:absolute !important; visibility:visible !important; border:0px !important; font-size:9px !important; font-family: Helvetica Neue,Helvetica,Arial,sans-serif; top:" + x + " !important; left:" + I + " !important; background-color: " + "#808080" + "; padding: 1px 2px !important; font-weight: bold !important; color:#ffffff !important; cursor: default; line-height:11px !important; max-width: 10px !important; ",
                                    k = "undefined" != typeof window && window ? window : e.defaultView,
                                    c, E = (c = LP_getComputedStyle(k, u)).zIndex;
                                "" !== E && "auto" != E && (w = w + "z-index:" + E + " !important;"), "absolute" == c.position && "visible" == c.visibility && "9px" == c.fontSize && "1px 2px" == c.padding && "11px" == c.lineHeight && c.top == x && c.left == I || (u.style.cssText = w)
                            } else w = "display:none;", u.style.cssText = w
                        } else w = "display:none;", u.style.cssText = w
                }
            } else verbose_log("ERROR: unable to relocate clickable icon");
            var A = getZIndex(e, i, 0, 0);
            if (null != A ? A++ : A = CLICKABLE_ICON_ZINDEX, t.style.zIndex != A && (t.style.zIndex = A), g_do_icon_number_hint && null != u) {
                w = w + "z-index:" + (A + 1) + " !important;";
                var k = "undefined" != typeof window && window ? window : e.defaultView;
                (c = LP_getComputedStyle(k, u)) && "absolute" == c.position && "visible" == c.visibility && "9px" == c.fontSize && "1px 2px" == c.padding && "11px" == c.lineHeight && c.top == x && c.left == I && c.zIndex == A + 1 || (u.style.cssText = w)
            }
            checkIsDisplayed(e, i, 0) ? t.style.display = "" : t.style.display = "none";
            var N = t.childNodes[0];
            parseInt(i.offsetHeight) < LPICON_WIDTH ? (i.offsetHeight != N.height && (N.height = parseInt(i.offsetHeight)), i.offsetHeight != N.height && (N.width = N.height)) : (N.height != LPICON_WIDTH && (N.height = LPICON_WIDTH), N.width != LPICON_WIDTH && (N.width = LPICON_WIDTH))
        }
    }

    function C(e, i) {
        if (!e || !i) return !1;
        var t = !1,
            n = e.getElementsByTagName("body")[0],
            _ = i.parentNode;
        return _ && _ != n && n && (_.removeChild(i), n.appendChild(i), t = !0), t
    }
}

function LP_reset_icon_divs(e) {
    return !!(e = e || LP_derive_doc()) && ("undefined" != typeof g_isfirefox && g_isfirefox ? e.g_popup_divs = {} : g_popup_divs = {}, !0)
}

function LP_store_icon_div(e, i) {
    return !!(e = e || LP_derive_doc()) && ("undefined" != typeof g_isfirefox && g_isfirefox ? (null == e.g_popup_divs && (e.g_popup_divs = {}), e.g_popup_divs[i] = i) : g_popup_divs[i] = i, !0)
}

function LP_delete_icon_div(e, i) {
    return "undefined" != typeof g_isfirefox && g_isfirefox ? e && delete e.g_popup_divs[i] : delete g_popup_divs[i], !0
}

function LP_get_icon_divs(e) {
    return (e = e || LP_derive_doc()) ? "undefined" != typeof g_isfirefox && g_isfirefox ? null == e.g_popup_divs ? {} : e.g_popup_divs : null == g_popup_divs ? {} : g_popup_divs : {}
}

function LP_set_floating_icon_hint(e, i, t, n) {
    if (!e && !(e = LP_derive_doc())) return !1;
    if (LP_getloggedin()) {
        var _ = e.getElementById(i + "_numspan");
        if (null != _) {
            var o = "",
                l = LP_elt_get_text(_);
            null != t && null != n && null != n[t] && 0 < n[t] ? "formfills" != t && "generate" != t || !1 !== g_show_icon_number_for_formfills ? l != (o = n[t] < 9 ? " " + n[t] : 9 < n[t] ? "9+" : " " + n[t]) && LP_elt_set_text(_, o) : "" != l && LP_elt_set_text(_, "") : LP_elt_set_text(_, "")
        } else LP_create_floating_icon_hint(e, i, t, n);
        return !0
    }
}

function LP_create_floating_icon_hint(e, i, t, n) {
    if (!e && !(e = LP_derive_doc())) return !1;
    if (!i) return !1;
    var _ = e.getElementsByTagName("body")[0],
        o = i + "_numspan";
    if (e.getElementById(o)) return !1;
    if (("formfills" == t || "generate" == t) && !1 === g_show_icon_number_for_formfills) return !1;
    var l = e.createElement("div");
    return l.id = i + "_numspan", l.style.position = "absolute", l.style.top = "-1000px", l.style.left = "-1000px", _.appendChild(l), g_defensive && LP_addEventHandler(l, "mousedown", function(e) {
        return LP_stopEventPropagation(e), !1
    }), !0
}

function LP_delete_floating_icon_hint(e, i) {
    if (!e && !(e = LP_derive_doc())) return !1;
    var t = e.getElementById(i + "_numspan");
    return null != t && (t.parentNode.removeChild(t), !0)
}

function LP_delete_floating_icon(e, i) {
    if (!e && !(e = LP_derive_doc())) return !1;
    var t = e.getElementById(i);
    return null != t && (t.parentNode.removeChild(t), !0)
}

function relocate_popupfill_clickables(t) {
    if (!t && !(t = LP_derive_doc())) return null;
    if ("function" == typeof t.getElementsByName) {
        g_isfirefox && verbose_log("relocate_popupfill_clickables doc is " + get_doc_location_href(t));
        var e = LP_get_icon_divs(t);
        if (isEmptyObject(e)) return null;
        try {
            var i, n = 0;
            for (i in e)
                if (e.hasOwnProperty(i)) {
                    var _ = e[i].substr(LPMAGIC.length);
                    if (null != _ && 0 < _.length) {
                        var o = _,
                            l = LP_getElementByIdOrName(t, o),
                            r;
                        if (null != l || g_double_password_hack || g_double_secret_password_hack)
                            if (g_do_icon_number_hint) {
                                if (null != t.getElementById(e[i])) {
                                    var a = "",
                                        s = getIconState(t, o);
                                    s && (a = s.fillhint), null != a && "sites" != a && (a = null);
                                    var d = {};
                                    g_isfirefox ? d[a] = s.fillhintnumber : (0 < g_icon_number_overrides.sites ? d.sites = g_icon_number_overrides.sites : d.sites = g_icon_numbers.sites, 0 < g_icon_number_overrides.formfills ? d.formfills = g_icon_number_overrides.formfills : d.formfills = g_icon_numbers.formfills), move_floating_icon(t, l, a, d)
                                }
                            } else move_floating_icon(t, l);
                        else LP_delete_floating_icon(t, e[i]) && (verbose_log("relocate: deleting orphaned icon container for " + _), n++), g_do_icon_number_hint && LP_delete_floating_icon_hint(t, e[i]) && (verbose_log("relocate: deleting orphaned icon number for " + _), n++), delete e[i]
                    }
                }
        } catch (e) {
            verbose_log("relocate_popupfill_clickables caught error:" + e.message), g_isfirefox && end_weasel(t)
        }
        if (0 < n)
            if (g_isfirefox) {
                var c = lpGetBrowserForDocument(t);
                setTimeout(function() {
                    LP.checkShouldRecheck(c)
                }, 500)
            } else setTimeout(function() {
                if (g_pending_recheck) verbose_log("skipped 1 recheck, 1 is already queued up, #7");
                else {
                    var e = LP_get_last_url_history(t),
                        i = {
                            href: e.href,
                            href_hash: e.href_hash
                        };
                    checkShouldRecheck(i)
                }
            }, 500)
    }
}

function reset_floating_icon(e, i, t) {
    if (!e && !(e = LP_derive_doc())) return !1;
    var n = e.defaultView;
    n = n || window;
    var _ = LP_pickFieldName(e, i),
        o = getIconState(e, _);
    !t && o && (t = o.fillhint);
    var l = LP_getElementByIdOrName(e, LP_compute_floating_iconcontainer_id(e, _)),
        r = LP_getElementByIdOrName(e, LPMAGIC + _ + "_icon");
    return !(!l || !r) && ("formfills" == t ? LP_has_highdef_display(n) ? LP_set_image_src(r, g_40_icons["FormFill_dark@2x"]) : LP_set_image_src(r, g_40_icons.FormFill_dark) : "generate" == t ? LP_has_highdef_display(n) ? LP_set_image_src(r, g_40_icons["Generate_dark@2x"]) : LP_set_image_src(r, g_40_icons.Generate_dark) : LP_has_highdef_display(n) ? LP_set_image_src(r, g_40_icons["16x16_dark@2x"]) : LP_set_image_src(r, g_40_icons["16x16"]), r.style.opacity = "0.6", r.style.filter = "alpha(opacity=60)", !0)
}

function getZIndex(e, i, t, n) {
    LPCTR("getzindex");
    var _ = 50;
    if (null == e) return null;
    if (i == e.body || null == i || 50 < t) return null;
    var o = 0,
        l = "undefined" != typeof window && window ? window : e.defaultView,
        r = LP_getComputedStyle(l, i);
    return null == r ? null : "absolute" == r.position || "relative" == r.position || "fixed" == r.position ? "auto" == r.zIndex || "" === r.zIndex ? null == (o = getZIndex(e, i.parentNode, t + 1, n + 1)) ? 0 : parse_zindex(o) : null == (o = getZIndex(e, i.parentNode, t + 1, parse_zindex(r.zIndex))) ? parse_zindex(r.zIndex) + 1 : parse_zindex(o) + 1 : "auto" == r.zIndex || "" == r.zIndex ? null == (o = getZIndex(e, i.parentNode, t + 1, n + 1)) ? n + 1 : parse_zindex(o) + 1 : null == (o = getZIndex(e, i.parentNode, t + 1, parse_zindex(r.zIndex))) ? parse_zindex(r.zIndex) : parse_zindex(o) + 1
}

function end_weasel(e) {
    var i;
    (e = e || (document || LP.getBrowser().contentDocument)) && (null != (i = e && null != e.g_weasel_id ? e.g_weasel_id : g_weasel_id) && clearTimeout(i), g_isfirefox ? e && (e.g_weasel_id = null, e.g_weaseled = !1) : (g_weasel_id = null, g_weaseled = !1))
}

function LP_compute_floating_iconcontainer_id(e, i) {
    return (e = e || LP_derive_doc()) && i ? LPMAGIC + i : ""
}

function LP_compute_floating_icon_id(e, i) {
    return (e = e || LP_derive_doc()) && i ? LP_compute_floating_iconcontainer_id(e, i) + "_icon" : ""
}

function LP_compute_floating_number_id(e, i) {
    return (e = e || LP_derive_doc()) && i ? LP_compute_floating_iconcontainer_id(e, i) + "_numspan" : ""
}
//# sourceMappingURL=sourcemaps/floatingicons_cs.js.map