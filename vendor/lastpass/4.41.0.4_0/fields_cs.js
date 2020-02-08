function LP_field_set_backgroundPosition(e, t) {
    if (!(e = e || LP_derive_doc()) || !t) return !1;
    var n = !1,
        i = !0,
        o = !1;
    if (LP_get_text_dir(t) === i) {
        var r = "98% 50%";
        if (-1 < document.location.href.indexOf("https://mint.intuit.com/login.event?task=S") && 0 < document.getElementById(t.id).nextElementSibling.offsetWidth && (r = "92% 50%"), null != typeof t.style.backgroundPosition) t.style.backgroundPosition != r && (n = !0);
        else if (g_isie && null != typeof t.currentStyle && null != typeof t.currentStyle.backgroundPositionX && null != typeof t.currentStyle.backgroundPositionY) {
            var l = t.currentStyle.backgroundPositionX,
                _ = t.currentStyle.backgroundPositionY;
            "98%" == l && lp_in_array(_, ["center", "50%"]) || (n = !0)
        }
    } else {
        var r = "center left";
        if (null != typeof t.style.backgroundPosition) lp_in_array(t.style.backgroundPosition, ["center left", "left center", "0% 50%", "left"]) || (n = !0);
        else if (g_isie && null != typeof t.currentStyle && null != typeof t.currentStyle.backgroundPositionX && null != typeof t.currentStyle.backgroundPositionY) {
            var l = t.currentStyle.backgroundPositionX,
                _ = t.currentStyle.backgroundPositionY;
            lp_in_array(l, ["left", "0%"]) && lp_in_array(_, ["center", "50%"]) || (n = !0)
        }
    }
    return n && (t.style.backgroundPosition = r), !0
}

function LP_get_text_dir(e) {
    var t, n = !1,
        i = !0;
    if (e) {
        var o = LP_get_live_style(e);
        o && "rtl" == o.direction ? i = n : "rtl" == e.getAttribute("dir") && (i = n)
    }
    return i
}

function LP_input_has_bg_style_override(e) {
    if (!e) return !1;
    if (!g_stylesheet_grubbing) return !1;
    var t = !1;
    try {
        var n = formcacheget(e, "fakedoc", "input-bg-style");
        if (null != n) return n;
        var i = 32,
            o = 0,
            r = 0,
            l = new RegExp("(background|background-color):[^:].*!important"),
            _ = e.styleSheets;
        if (_ && l)
            for (o = 0; o < _.length && o < i; o++) {
                var a = null;
                if (void 0 !== _[o].rules ? a = _[o].rules : void 0 !== _[o].cssRules && (a = _[o].cssRules), a) {
                    for (r = 0; r < a.length; r++)
                        if (a[r] && a[r].selectorText && a[r].cssText && -1 != a[r].selectorText.indexOf("input:focus")) {
                            var c = a[r].cssText;
                            if (c && l.exec(c)) {
                                verbose_log("focus hack:" + c), t = !0;
                                break
                            }
                        } if (t) break
                }
            }
    } catch (e) {}
    return formcacheset(e, "fakedoc", "input-bg-style", t), t
}

function ForceFillOrphanFieldClicked(e, t, n) {
    if (!e && !(e = elt.ownerDocument)) return !1;
    var i = !0,
        o = !1;
    if (i = ForceFillFieldClicked(e, t, o, n)) {
        var r = e.getElementsByTagName("INPUT"),
            l = 0;
        for (l = 0; l < r.length && l < MAX_INPUTS_HARD; l++)
            if (r[l] == t && r[l + 1] && l + 1 < r.length && l + 1 < MAX_INPUTS_HARD) {
                isInputFieldPassword(e, r[l + 1]) && !lpIsFieldCurrentPWField(r[l + 1]) && (i = ForceFillFieldClicked(e, r[l + 1], o, n));
                break
            }
    }
    return i
}

function revert_clickable_icon(e, t) {
    if (verbose_log("entered revert_clickable_icon"), null != e) {
        var n = t,
            i = LP_getElementByIdOrName(e, n),
            o = getIconState(e, n),
            r = !1,
            l = !1,
            _ = "sites";
        o && void 0 !== o.dofloater && (r = o.dofloater), o && void 0 !== o.inframe && (l = o.inframe), o && void 0 !== o.fillhint && (_ = o.fillhint), verbose_log("entered BG image revert"), i ? r ? reset_floating_icon(e, i, _) : set_input_icon_image(e, i, _) : verbose_log("could not find field named " + field_id)
    }
}

function conditional_create_popup(e, t, n) {
    return null != e && null != t && g_clickable_input, !1
}

function closeclickableicons(e) {
    if (null != (e = e || document)) {
        verbose_log("closeclickableicons called on " + e.location.href);
        var t = getAllIconStates(),
            n, i;
        for (n = 0; n < t.length; n++) {
            var o = t[n],
                i;
            if (i = (i = o.IHTMLElement) || LP_getElementByIdOrName(e, o.idorname), o.dofloat || !o.inframe || i) !o.dofloater && i && inputHasLPBackground(i) ? removeLPBackground(i) : pass;
            else if (g_isfirefox) try {
                var r, l, _ = e.getElementsByTagName("IFRAME");
                for (r = 0; r < _.length; r++) l = _[r].contentDocument, (i = LP_getElementByIdOrName(l, o.idorname)) && "INPUT" == i.tagName && removeLPBackground(i)
            } catch (e) {
                verbose_log("Error frame traverse " + e.message), l = null
            } else !g_isie && g_create_iframe_in_top && pass;
            resetAllIconStates()
        }
        var a = LP_get_icon_divs(e),
            r;
        for (r in a) {
            var c;
            if (a.hasOwnProperty(r)) null != e.getElementById(a[r]) && (g_do_icon_number_hint && LP_delete_floating_icon_hint(e, a[r]), LP_delete_floating_icon(e, a[r]))
        }
        LP_reset_icon_divs(e)
    }
}

function setup_input_icon(t, n, i, e, o) {
    if ("undefined" != typeof g_isie && g_isie && "undefined" != typeof LPfn && null != typeof LPfn.isInfieldIconDisabledForFormfills && LPfn.isInfieldIconDisabledForFormfills && "formfills" == i) return !0;
    var r = !1;
    if (null == n) return verbose_log("setup_input_icon: ERROR passed null field"), r;
    if (n.form && "sites" == i && is_shopping_form(t, n.form) && g_aspx_hack && (isASPpage() && 2 < t.getElementsByTagName("form").length || !isASPpage())) return r;
    g_isfirefox && LP && "undefined" != typeof g_icon_number_in_toolbar && g_icon_number_in_toolbar && LP.lp_handle_buttons_all("refresh");
    var l = null;
    l = "undefined" != typeof LP && "function" == typeof LP.lpGetCurrentWindow ? void 0 !== LP.lpGetCurrentWindow().getBrowser ? LP.lpGetCurrentWindow().getBrowser().contentDocument : LP.getBrowser().contentDocument : g_isfirefox ? top.document : document, t = t || l;
    var _ = LP_pickFieldName(t, n);
    if (null == n || !l || !t) return r;
    if (LP_explicit_ignored(t, n)) return r;
    var a = getIconState(t, _),
        c;
    if (a && a.IHTMLElement == n && (inputHasLPBackground(n) && removeLPBackground(n), LP_floating_icon_exists(t, _))) return !1;
    a = null, ("generate" == i || !o && shouldOfferGenerate(t, n)) && (i = "generate");
    var f = gettldcached(t.location.href),
        s = shouldCreateFloatingIcon(t, n, f),
        u = !0,
        g = !1,
        d = LP_get_text_dir(n);
    if (!1 === d && pass, LP_fieldIsReadOnly(n) || LP_fieldIsDisabled(n)) return !1;
    var p = t != l;
    g_create_iframe_in_top && !g_isie && !g_isfirefox && LP_inIframe(window) && (p = !0);
    var m = {
        fillhint: i,
        fillhintnumber: e[i],
        inframe: p,
        idorname: _,
        doctld: f,
        dofloater: s ? 1 : 0,
        no_check_generate: o ? 1 : 0,
        IHTMLElement: n,
        text_direction: d
    };
    if ("function" == typeof is_edge && is_edge()) {
        if ("undefined" == typeof g_created_edge_stylesheet) {
            g_created_edge_stylesheet = !0;
            var v = t.createElement("style");
            v.type = "text/css", v.appendChild(t.createTextNode(".lastpassClearHidden::-ms-clear { display:none; }")), document.head ? document.head.appendChild(v) : document.body && document.body.appendChild(v)
        } - 1 == n.className.indexOf("lastpassClearHidden") && (n.className += " lastpassClearHidden")
    }
    if (s) {
        if (g_isfirefox && verbose_log("setup_input_icon step3b"), !lpIsVisible(n) || !(null == n.form || n.form && lpIsVisible(n.form))) return !1;
        saveIconState(_, m, n), r = LP_create_floating_icon(t, n, i, e)
    } else {
        saveIconState(_, m, n);
        var h = !1;
        r = set_input_icon_image(t, n, i, !1)
    }
    return set_bg_highlight_effect_handlers(t, n, i), LP_didDocumentEscapeEvent(t) || (LP_setDocumentEscapeEvent(t), LP_addEventHandler(t, "keydown", function(e) {
        LP_keypress_handler(e)
    }, !1)), LP_didFieldKeyEvent(t, n) ? verbose_log("skip KEYDOWN HANDLER ON " + LP_pickFieldName(t, n)) : (verbose_log("SETTING KEYDOWN HANDLER ON " + LP_pickFieldName(t, n)), LP_setFieldKeyEvent(t, n), LP_addEventHandler(n, "keydown", function(e) {
        LP_field_keypress_handler(e, n, i, t)
    }, !1), g_isfirefox && LP_addEventHandler(n, "keyup", function(e) {
        handle_form_text_change(t, n, n.form, e)
    }, !1)), r
}

function refresh_input_icon_bg(e, t, n) {
    if (!e && !(e = LP_derive_doc())) return null;
    if (t) {
        var i = !1;
        set_input_icon_image(e, t, n, !1)
    }
}

function refresh_input_all_icon_bg(e) {
    if (null == e && (e = document), null != e) {
        try {
            if (0 < e.location.href.indexOf(".xul")) return;
            verbose_log("refreshing input icons on " + e.location.href)
        } catch (e) {
            return
        }
        var t = getAllIconStates(),
            n;
        for (n = 0; n < t.length; n++) {
            var i = t[n].idorname,
                o = t[n].fillhint,
                r = t[n].dofloater,
                l = t[n].IHTMLElement;
            element_is_detached(e, l, 0) && (l = null), (l = l || LP_getElementByIdOrName(e, i)) && (r || refresh_input_icon_bg(e, l, o))
        }
    }
}

function set_input_icon_image(e, t, n, i) {
    if (!(e = e || LP_derive_doc())) return !1;
    var o, r = e.defaultView,
        l;
    r = r || window;
    var _ = 0,
        a = 1,
        c = 2,
        f = 3,
        s = 16,
        u = 17,
        g = 18,
        d = 19,
        p = -1,
        m = -17,
        v = 0,
        h = [];
    if (h[0] = g_sites_light_ico, h[1] = g_pw_light_ico, h[3] = g_close_light_ico, h[-1] = "", h[2] = g_ff_light_ico, h[16] = g_sites_ico, h[17] = g_pw_ico, h[19] = g_close_ico, h[m] = "", h[18] = g_ff_ico, LP_has_highdef_display(r) && (h[0] = g_40_icons["16x16_lite@2x"], h[16] = g_40_icons["16x16_dark@2x"], h[3] = g_40_icons["IF_Close@2x"], h[19] = g_40_icons["IF_Close@2x"], h[2] = g_40_icons["FormFill@2x"], h[18] = g_40_icons["FormFill_dark@2x"], h[1] = g_40_icons["Generate@2x"], h[17] = g_40_icons["Generate_dark@2x"]), null == t) return !1;
    if (t.tagName && void 0 !== t.tagName.toUpperCase && "INPUT" != t.tagName.toUpperCase()) return !1;
    void 0 === n || null == n ? l = 0 : "formfills" == n ? l = 2 : "sites" == n ? l = 0 : "generate" == n ? l = 1 : "cancel" == n && (l = 3), i && (l |= 16);
    var b = LP_fieldGetWidth(t),
        y = !1;
    if ("sites" != n && !g_is_specialsite || (y = !0), !LP_iconFieldWidthOK(t, b, y)) return !0;
    var L = t.style.border,
        P = t.style.backgroundImage,
        I, k;
    if ("" == P) {
        var x = LP_getComputedStyle(r, t);
        x && (P = x.backgroundImage, L = x.border)
    }
    if ("none" == P && (P = ""), 0 <= l && (void 0 === h[l] && verbose_log("no icon defined for iconval=" + l), P != "url(" + (I = LP_getloggedin() && (0 == l || 16 == l) ? getnumbericon(e, t, i) : h[l]) + ")")) {
        if (t.style.backgroundImage = "url(" + I + ")", g_issafari && "" !== L && 0 < L.indexOf("inset")) var O = L.replace("inset", "");
        "no-repeat" != t.style.backgroundRepeat && (t.style.backgroundRepeat = "no-repeat"), "scroll" != t.style.backgroundAttachment && (t.style.backgroundAttachment = "scroll");
        var w = LP_getAbsolutePos(e, t);
        w && w.height < 18 && 0 < w.height ? "contain" != t.style.backgroundSize && (t.style.backgroundSize = "contain") : "16px 18px" != t.style.backgroundSize && (t.style.backgroundSize = "16px 18px"), LP_field_set_backgroundPosition(e, t)
    }
    return !0
}

function set_bg_highlight_effect_handlers(t, n, i) {
    var e;
    n && ("function" == typeof n.__LpInputIcon_mouseover && n.removeEventListener("mouseover", n.__LpInputIcon_mouseover), n.__LpInputIcon_mouseover = LP_addEventHandler(n, "mouseover", function(e) {
        bg_highlight_effect_mouseover(e, t, n, i)
    }), "function" == typeof n.__LpInputIcon_focus && n.removeEventListener("focus", n.__LpInputIcon_focus), n.__LpInputIcon_focus = LP_addEventHandler(n, "focus", function(e) {
        bg_highlight_effect_mouseover(e, t, n, i)
    }), "function" == typeof n.__LpInputIcon_mouseout && n.removeEventListener("mouseout", n.__LpInputIcon_mouseout), n.__LpInputIcon_mouseout = LP_addEventHandler(n, "mouseout", function(e) {
        bg_highlight_effect_mouseout(e, t, n, i)
    }), "function" == typeof n.__LpInputIcon_blur && n.removeEventListener("blur", n.__LpInputIcon_blur), n.__LpInputIcon_blur = LP_addEventHandler(n, "blur", function(e) {
        bg_highlight_effect_mouseout(e, t, n, i)
    }), "function" == typeof n.__LpInputIcon_mousemove && n.removeEventListener("mousemove", n.__LpInputIcon_mousemove), n.__LpInputIcon_mousemove = LP_addEventHandler(n, "mousemove", function(e) {
        bg_highlight_effect_mousemove(e, t, n, i)
    }), "sites" == i && (!LP_getloggedin() || g_isfirefox || g_isie || n.setAttribute("autocomplete", "off")))
}

function bg_highlight_effect_mousemove(e, t, n, i) {
    null == e && (e = window.event);
    var o = LP_getMousePos(e);
    if (!(o.x <= 0 && o.y <= 0)) {
        var r = LP_getAbsolutePos(t, n);
        if (!(r.width <= 0 && r.height <= 0)) {
            var l = r.left + r.width,
                _ = l - .02 * l - 10;
            _ < r.left && (_ = r.left), _ < o.x && l > o.x && r.top < o.y && r.top + r.height > o.y ? n.style.cursor = "pointer" : n.style.cursor = "auto"
        }
    }
}

function bg_highlight_effect_mouseover(e, t, n, i) {
    var o = !0;
    if (null == e && (e = window.event), (!is_your_popup_showing(t) || t.g_popupfill_parent != n) && LP_getEventTarget(e) == n) {
        var r = i,
            l = !1,
            _ = getIconState(t, LP_pickFieldName(t, n));
        r || _ && _.hint && (r = _.hint), _ && _.dofloater && (l = _.dofloater), r && (l || set_input_icon_image(t, n, r, !0))
    }
}

function bg_highlight_effect_mouseout(e, t, n, i) {
    var o = !0;
    if (null == e && (e = window.event), !is_your_popup_showing(t) || t.g_popupfill_parent != n) {
        var r = i,
            l = !1,
            _ = getIconState(t, LP_pickFieldName(t, n));
        r || _ && _.hint && (r = _.hint), _ && _.dofloater && (l = _.dofloater), r && (l || set_input_icon_image(t, n, r, !1))
    }
}

function popuptoggle(e, t, n, i, o, r, l, _, a, c) {
    var f, s;
    if (c) f = c;
    else if (t) {
        if (0 < t.location.href.indexOf(".xul")) return !0;
        f = LP_getElementByIdOrName(t, n)
    } else {
        if (0 < e.location.href.indexOf(".xul")) return !0;
        f = LP_getElementByIdOrName(e, n)
    }
    "undefined" != typeof reset_forcefill_without_fillbest && reset_forcefill_without_fillbest();
    var u = "sites";
    if (i ? u = "generate" : r ? u = "save" : l && (u = "formfills"), is_your_popup_showing(e)) closepopupfills(e, "away"), g_isfirefox ? t ? (t.g_popupfill_parent_last = t.g_popupfill_parent, t.g_popupfill_parent = null) : (e.g_popupfill_parent_last = e.g_popupfill_parent, e.g_popupfill_parent = null) : (g_popupfill_parent_last = g_popupfill_parent, g_popupfill_parent = null);
    else {
        var g;
        if (!(g = LP_getloggedin())) {
            if ("undefined" != typeof LP && void 0 !== LP.lpOpenLogin) return void LP.lpOpenLogin();
            if (!g_isie) return void sendBG({
                cmd: "dologinaction"
            })
        }
        g_isfirefox ? t ? t.g_popupfill_parent = f : e.g_popupfill_parent = f : g_popupfill_parent = f;
        var d = !!r;
        if (g_isie) "undefined" != typeof init_LPfn && init_LPfn() && LPfn.ie_set_lpifmsg(e, f, i, d, u, _);
        else {
            var p = LP_pickFormName(f.ownerDocument, f.form);
            i = i ? 1 : 0, bg.InfieldCommands.setActiveFormData({
                active: p,
                activefieldid: LP_pickFieldName(document, f),
                ask_generate: i,
                opentosave: d,
                activefieldtype: f.type,
                start_type: u
            })
        }
        if (!g_isfirefox && !g_isie) {
            var m = document.location.href;
            "undefined" != typeof punycode && (m = punycode.URLToASCII(document.location.href)), sendBG({
                cmd: "popupregister",
                docnum: g_docnum,
                url: m
            })
        }
        var v = "300px",
            h, b = ("function" == typeof ff_calculate_iframe_pos ? ff_calculate_iframe_pos : calculate_iframe_pos)(e, f, v, should_ignore_body_relative(e)),
            y = 0,
            L = 0;
        b && (y = b.posx, L = b.posy);
        var P = n;
        if (g_isfirefox) ff_popupfill_create_iframe(e, y, L, P, null, null, f, u);
        else {
            var I = chk_form_is_nonlogin_form(document, f.form),
                k = checkDocumentForLoginOrphans(document) || checkDocumentForLoginOrphansFirstStage(document),
                x = checkDocumentForLoginFirstStageForm(document),
                O = k || x || chk_form_has_password(document, f.form),
                w = g_popupfill_rows;
            I && !O && (w = g_popupfill_rows_FF);
            var F = g_popupfill_widest + 40,
                E = 120;
            if (F < E && (F = E), F < g_popupfill_parent.offsetWidth && (F = g_popupfill_parent.offsetWidth, F += 2 * Math.abs(POPUP_FIELD_OFFSET)), F = Math.min(F, MAX_DIALOG_WIDTH), 1 == w && !create_onerow_iframe) {
                var S = null;
                if (g_fillaid && (S = g_fillaid), isEmptyObject(g_autofillsites) || (S = g_autofillsites[0].aid), null != S) return sendBG({
                    cmd: "autofillaid",
                    aid: S
                }), void verbose_log("filling only, not creating 1 row iframe");
                verbose_log("tried to fill form with invalid acct")
            }
            if (0 == w && o == NO_FORCE_NOHITS) verbose_log("not creating empty iframe");
            else {
                var g = LP_getloggedin();
                if (g_dologin_clickable && !g && (!g_isie || g_isie && o == FORCE_SHOW_NOHITS_NOLOGIN)) {
                    if (verbose_log("login state: checking whether to issue Chrome login prompt"), o == FORCE_SHOW_NOHITS_NOLOGIN) return;
                    if (!g_isie) return void sendBG({
                        cmd: "dologinaction"
                    })
                }
            }
            if (g_create_iframe_in_top && !g_isie && !g_isfirefox && LP_inIframe(window) && LP_do_toplevel_iframe_hack(window)) {
                var N = !0;
                L = (b = calculate_iframe_pos(e, f, v, !0)) ? (y = parseInt(b.posx), parseInt(b.posy)) : y = 0;
                var B = "",
                    C = "";
                try {
                    B = window.name, C = document.location.href
                } catch (e) {}
                var m = e.location.href;
                "undefined" != typeof punycode && (m = punycode.URLToASCII(e.location.href));
                var D = null;
                f && f.getBoundingClientRect && (D = f.getBoundingClientRect()), sendBG({
                    cmd: "createpopuptoplevelfromframe",
                    posx: y,
                    posy: L,
                    id: P,
                    rows: w,
                    width: F,
                    minheight: g_minheight_override,
                    framename: B,
                    framesrc: C,
                    url: m,
                    fillhint: _,
                    fieldBox: {
                        top: D.top,
                        right: D.right,
                        bottom: D.bottom,
                        left: D.left,
                        width: D.width
                    }
                })
            } else popupfill_create_iframe(e, y, L, P, w, F, g_minheight_override, null, null, {
                posx: y,
                posy: L,
                id: P,
                width: F,
                fieldEl: f,
                fillhint: _
            });
            g_popupfill_iframe_width_save = F
        }
        g_isfirefox ? t ? relocate_popupfill_iframes(t) : relocate_popupfill_iframes(e) : g_create_iframe_in_top && LP_inIframe(window) && !g_isie && !g_isfirefox || relocate_popupfill_iframes(e)
    }
}

function inputHasLPBackground(t) {
    if (null == t) return !1;
    var n = null;
    if (g_isie && void 0 !== t.currentStyle) void 0 !== t.currentStyle && (n = t.currentStyle);
    else try {
        n = t.ownerDocument.defaultView.getComputedStyle(t, "")
    } catch (e) {
        void 0 !== t.currentStyle && (n = t.currentStyle)
    }
    if (n && ("INPUT" == t.tagName || "input" == t.tagName) && "" != n.backgroundImage) {
        if (-1 != n.backgroundImage.indexOf(g_sites_light_ico) || -1 != n.backgroundImage.indexOf(g_40_icons["16x16_lite@2x"]) || -1 != n.backgroundImage.indexOf(g_pw_light_ico) || -1 != n.backgroundImage.indexOf(g_close_light_ico) || -1 != n.backgroundImage.indexOf(g_ff_light_ico) || -1 != n.backgroundImage.indexOf(g_sites_ico) || -1 != n.backgroundImage.indexOf(g_pw_ico) || -1 != n.backgroundImage.indexOf(g_close_ico) || -1 != n.backgroundImage.indexOf(g_ff_ico) || -1 != n.backgroundImage.indexOf(g_40_icons.IF_Close) || -1 != n.backgroundImage.indexOf(g_40_icons["IF_Close@2x"]) || -1 != n.backgroundImage.indexOf(g_40_icons.FormFill) || -1 != n.backgroundImage.indexOf(g_40_icons["FormFill@2x"]) || -1 != n.backgroundImage.indexOf(g_40_icons.FormFill_dark) || -1 != n.backgroundImage.indexOf(g_40_icons["FormFill_dark@2x"]) || -1 != n.backgroundImage.indexOf(g_40_icons.Generate) || -1 != n.backgroundImage.indexOf(g_40_icons["Generate@2x"]) || -1 != n.backgroundImage.indexOf(g_40_icons.Generate_dark) || -1 != n.backgroundImage.indexOf(g_40_icons["Generate_dark@2x"])) return verbose_log("icon " + LP_getname(t) + " has icon w/o number"), !0;
        if (-1 != n.backgroundImage.indexOf(getnumbericon(t.ownerDocument, t, !0)) || -1 != n.backgroundImage.indexOf(getnumbericon(t.ownerDocument, t, !1))) return !0;
        var e;
        for (e = 0; e <= 9; e++)
            if (-1 != n.backgroundImage.indexOf(getnumbericon(t.ownerDocument, t, !0, e)) || -1 != n.backgroundImage.indexOf(getnumbericon(t.ownerDocument, t, !1, e))) return verbose_log("icon " + LP_getname(t) + " has icon with number " + e), !0
    }
    return !1
}

function removeLPBackground(e) {
    if (!e) return !1;
    try {
        e.style.backgroundImage = "none", e.style.backgroundRepeat = "initial", e.style.backgroundAttachment = "initial", e.style.backgroundPosition = "initial", e.style.backgroundSize = "initial"
    } catch (e) {
        return verbose_log("removeLPBackground error: " + e.message), !1
    }
    return !0
}
//# sourceMappingURL=sourcemaps/fields_cs.js.map