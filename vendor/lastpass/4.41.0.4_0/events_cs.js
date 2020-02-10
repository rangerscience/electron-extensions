function LP_humanizeClick(e, _, t) {
    if (!e && _ && (e = _.ownerDocument), !(e = e || LP_derive_doc())) return !1;
    t = t || {}, _ = _ || e.body;
    var o = 0;
    g_isie && init_LPfn() && LPfn && (o = LPfn.getDocumentMode(e));
    var i = void 0 !== t.dofocus && t.dofocus,
        n, r, l = 0;
    if (l = void 0 !== t.button ? t.button : g_isie && o <= 8 ? 1 : 0, void 0 !== t.posx && void 0 !== t.posy) n = t.posx, r = t.posy;
    else {
        var a = LP_getAbsolutePos(e, _);
        if (!a) return !1;
        r = (a.top + a.height) / 2, n = (a.left + a.width) / 2
    }
    if (isNaN(n) || isNaN(r)) return !1;
    var s = {
        evt_class: "MouseEvent",
        button: l,
        posx: n,
        posy: r
    };
    return void 0 !== t.dofocus && t.dofocus && _.focus(), LP_fireEvent(_, "mousedown", "MouseEvent", s), LP_fireEvent(_, "mouseup", "MouseEvent", s), LP_fireEvent(_, "click", "MouseEvent", s), !0
}

function LP_humanizeMoveTo(e, _, t) {}
var g_draggable = !0,
    g_is_dragging = !1,
    g_drag_lastX = null,
    g_drag_lastY = null,
    g_pos_delx = 0,
    g_pos_dely = 0,
    LP_DRAG_NODRAG = 0,
    LP_DRAG_MOVE = 1,
    LP_DRAG_RESIZE = 2,
    g_drag_type = LP_DRAG_NODRAG;

function LP_dropHandler(e) {}

function LP_dragoverHandler(e) {}

function LP_dragHandler(e) {}

function LP_mousemoveHandler(e) {
    if (e = e || window.event, g_draggable && g_is_dragging && g_in_lpframe) var _
}

function LP_mousedownHandler(e) {
    if (e = e || window.event, g_draggable && g_in_lpframe) {
        var _ = LP_getEventTarget(e),
            t = LP_getMousePos(e);
        if (_ && t) switch (_.id) {
            case "superbox":
            case "superbox_savesite_txt":
            case "superbox_emptymsg_txt_span":
            case "superbox_savesite_txt_span":
            case "SB_iconbox":
            case "SB_titlebox":
                g_is_dragging = !0, g_drag_type = LP_DRAG_MOVE, t && (g_drag_lastX = t.x, g_drag_lastY = t.y);
                break;
            case "resize_button":
                g_is_dragging = !0, g_drag_type = LP_DRAG_RESIZE, t && (g_drag_lastX = t.x, g_drag_lastY = t.y)
        }
    }
}

function LP_mouseupHandler(e) {
    e = e || window.event;
    var _ = 0,
        t = 0;
    if (g_draggable && g_is_dragging && g_in_lpframe) {
        var o = LP_getMousePos(e);
        switch (o && null !== g_drag_lastX && null !== g_drag_lastY && (_ = o.x - g_drag_lastX, t = o.y - g_drag_lastY, g_drag_lastX = o.x, g_drag_lastY = o.y), g_drag_type) {
            case LP_DRAG_MOVE:
                g_isie ? ie_moveIframe({
                    delx: _,
                    dely: t
                }) : g_isfirefox || cr_moveIframe({
                    delx: _,
                    dely: t
                });
                break;
            case LP_DRAG_RESIZE:
                g_isie ? ie_resizeIframe({
                    delx: _,
                    dely: t
                }) : g_isfirefox || 0 != _ && 0 != t && cr_resizeIframe({
                    delx: _,
                    dely: t
                });
                break;
            default:
                verbose && alert("UNEXPECTED DRAG" + g_drag_type)
        }
        g_is_dragging = !1, g_drag_type = LP_DRAG_NODRAG
    }
}

function LP_mouseleaveHandler(e) {
    var _;
    if (g_in_lpframe && LP_getEventTarget(e) == doc.body) {
        var t = LP_getMousePos(e);
        t && null !== g_drag_lastX && null !== g_drag_lastY && (delx = t.x - g_drag_lastX, dely = t.y - g_drag_lastY, g_drag_lastX = t.x, g_drag_lastY = t.y), g_isie ? ie_moveIframe({
            delx: delx,
            dely: dely
        }) : g_isfirefox || cr_moveIframe({
            delx: delx,
            dely: dely
        }), g_is_dragging = !1
    }
}

function LP_addEventHandler(e, _, t) {
    try {
        if (null == e || null == _ || null == t || _.length <= 0) return null;
        if ("click" == _ || "mousedown" == _ || "mouseup" == _ || "focus" == _) {
            var o = t;
            t = function(e) {
                try {
                    if (void 0 !== e.isTrusted && !e.isTrusted) return !0
                } catch (e) {}
                return o(e)
            }
        }
        return void 0 !== e.addEventListener ? (e.addEventListener(_, t, !1), t) : void 0 !== e.attachEvent ? e.attachEvent("on" + _, t) : null
    } catch (e) {
        return verbose_log("LP_addEventHandler failed, " + e.message), null
    }
}

function LP_stopEventPropagation(e) {
    try {
        void 0 !== e.preventDefault ? e.preventDefault() : (window.event, window.event.returnValue = !1), void 0 !== e.stopPropagation ? e.stopPropagation() : (window.event, window.event.cancelBubble = !0)
    } catch (e) {
        verbose_log("LP_stopEventPropagation failed, " + e.message)
    }
}

function LP_getEventTarget(e) {
    var _ = 3,
        t, o;
    return void 0 === (o = e || window.event) ? null : ((t = void 0 !== o.target ? o.target : o.srcElement) && void 0 !== t.nodeType && 3 == t.nodeType && (t = t.parentNode), t)
}

function LP_getMousePos(e) {
    var _, t, o = LP_getEventTarget(e = e || window.event).ownerDocument;
    if (!o || null == o.location || 0 < o.location.href.indexOf(".xul")) return {
        x: 0,
        y: 0
    };
    var i = o.documentElement,
        n = (i.scrollLeft, i.scrollLeft),
        r = (i.scrollTop, i.scrollTop),
        l = 0,
        a = 0;
    if (g_bodystyle_relative && !g_in_lpframe) {
        var s = LP_get_cached_body_rect(o),
            d = LP_get_cached_body_style(o);
        s && d && "relative" == d.position && (a = s.left, l = s.top)
    }
    if (g_isie)
        if (g_in_lpframe) verbose && alert("TODO");
        else {
            var s, f = p(o, s = LP_get_cached_body_rect(o));
            n = f.scrollLeft, r = f.scrollTop
        } return _ = e.pageX || e.clientX + n, t = e.pageY || e.clientY + r, _ = parseInt(_), t = parseInt(t), g_bodystyle_relative && (_ -= a, t -= l), {
        x: _,
        y: t
    };

    function u(e, _) {
        var t = 1;
        if ("undefined" != typeof g_isie && g_isie && void 0 !== e.querySelector && void 0 === e.addEventListener) return 1;
        if (_) {
            var o = _,
                i = o.right - o.left,
                n = e.body.offsetWidth;
            t = Math.round(i / n * 100) / 100
        }
        return t
    }

    function p(e, _) {
        var t = "undefined" != typeof window && window ? window : e.defaultView;
        if ("pageXOffset" in t) var o = t.pageXOffset,
            i = t.pageYOffset;
        else var n = u(e, _),
            o = Math.round(e.documentElement.scrollLeft / n),
            i = Math.round(e.documentElement.scrollTop / n);
        return {
            scrollLeft: o,
            scrollTop: i
        }
    }
}
if (void 0 === KeyEvent) var KeyEvent = {
    DOM_VK_CANCEL: 3,
    DOM_VK_HELP: 6,
    DOM_VK_BACK_SPACE: 8,
    DOM_VK_TAB: 9,
    DOM_VK_CLEAR: 12,
    DOM_VK_RETURN: 13,
    DOM_VK_ENTER: 14,
    DOM_VK_SHIFT: 16,
    DOM_VK_CONTROL: 17,
    DOM_VK_ALT: 18,
    DOM_VK_PAUSE: 19,
    DOM_VK_CAPS_LOCK: 20,
    DOM_VK_ESCAPE: 27,
    DOM_VK_SPACE: 32,
    DOM_VK_PAGE_UP: 33,
    DOM_VK_PAGE_DOWN: 34,
    DOM_VK_END: 35,
    DOM_VK_HOME: 36,
    DOM_VK_LEFT: 37,
    DOM_VK_UP: 38,
    DOM_VK_RIGHT: 39,
    DOM_VK_DOWN: 40,
    DOM_VK_PRINTSCREEN: 44,
    DOM_VK_INSERT: 45,
    DOM_VK_DELETE: 46,
    DOM_VK_0: 48,
    DOM_VK_1: 49,
    DOM_VK_2: 50,
    DOM_VK_3: 51,
    DOM_VK_4: 52,
    DOM_VK_5: 53,
    DOM_VK_6: 54,
    DOM_VK_7: 55,
    DOM_VK_8: 56,
    DOM_VK_9: 57,
    DOM_VK_SEMICOLON: 59,
    DOM_VK_EQUALS: 61,
    DOM_VK_A: 65,
    DOM_VK_B: 66,
    DOM_VK_C: 67,
    DOM_VK_D: 68,
    DOM_VK_E: 69,
    DOM_VK_F: 70,
    DOM_VK_G: 71,
    DOM_VK_H: 72,
    DOM_VK_I: 73,
    DOM_VK_J: 74,
    DOM_VK_K: 75,
    DOM_VK_L: 76,
    DOM_VK_M: 77,
    DOM_VK_N: 78,
    DOM_VK_O: 79,
    DOM_VK_P: 80,
    DOM_VK_Q: 81,
    DOM_VK_R: 82,
    DOM_VK_S: 83,
    DOM_VK_T: 84,
    DOM_VK_U: 85,
    DOM_VK_V: 86,
    DOM_VK_W: 87,
    DOM_VK_X: 88,
    DOM_VK_Y: 89,
    DOM_VK_Z: 90,
    DOM_VK_WIN: 91,
    DOM_VK_CONTEXT_MENU: 93,
    DOM_VK_NUMPAD0: 96,
    DOM_VK_NUMPAD1: 97,
    DOM_VK_NUMPAD2: 98,
    DOM_VK_NUMPAD3: 99,
    DOM_VK_NUMPAD4: 100,
    DOM_VK_NUMPAD5: 101,
    DOM_VK_NUMPAD6: 102,
    DOM_VK_NUMPAD7: 103,
    DOM_VK_NUMPAD8: 104,
    DOM_VK_NUMPAD9: 105,
    DOM_VK_MULTIPLY: 106,
    DOM_VK_ADD: 107,
    DOM_VK_SEPARATOR: 108,
    DOM_VK_SUBTRACT: 109,
    DOM_VK_DECIMAL: 110,
    DOM_VK_DIVIDE: 111,
    DOM_VK_F1: 112,
    DOM_VK_F2: 113,
    DOM_VK_F3: 114,
    DOM_VK_F4: 115,
    DOM_VK_F5: 116,
    DOM_VK_F6: 117,
    DOM_VK_F7: 118,
    DOM_VK_F8: 119,
    DOM_VK_F9: 120,
    DOM_VK_F10: 121,
    DOM_VK_F11: 122,
    DOM_VK_F12: 123,
    DOM_VK_F13: 124,
    DOM_VK_F14: 125,
    DOM_VK_F15: 126,
    DOM_VK_F16: 127,
    DOM_VK_F17: 128,
    DOM_VK_F18: 129,
    DOM_VK_F19: 130,
    DOM_VK_F20: 131,
    DOM_VK_F21: 132,
    DOM_VK_F22: 133,
    DOM_VK_F23: 134,
    DOM_VK_F24: 135,
    DOM_VK_NUM_LOCK: 144,
    DOM_VK_SCROLL_LOCK: 145,
    DOM_VK_COMMA: 188,
    DOM_VK_PERIOD: 190,
    DOM_VK_SLASH: 191,
    DOM_VK_BACK_QUOTE: 192,
    DOM_VK_OPEN_BRACKET: 219,
    DOM_VK_BACK_SLASH: 220,
    DOM_VK_CLOSE_BRACKET: 221,
    DOM_VK_QUOTE: 222,
    DOM_VK_META: 224
};

function is_modifier_key(e) {
    if (void 0 !== KeyEvent) {
        if (e == KeyEvent.DOM_VK_ALT || e == KeyEvent.DOM_VK_SHIFT || e == KeyEvent.DOM_VK_CONTROL || e == KeyEvent.DOM_VK_WIN || e == KeyEvent.DOM_VK_META) return !0
    } else if (16 == e || 17 == e || 18 == e || 91 == e || 92 == e || 224 == e) return !0;
    return !1
}
var KEY_ESCAPE = 27;

function LP_keypress_handler(e) {
    e = e || window.event;
    var _ = "undefined" != typeof document ? document : e && e.target ? e.target.ownerDocument : null;
    if (!_ || !_.location || !e) return !1;
    var t = e.keyCode;
    return verbose_log("received key " + t), t == KEY_ESCAPE && is_your_popup_showing(_) && closepopupfills(_, "close"), !1
}
var KEY_TAB = 9,
    KEY_UP = 38,
    KEY_DOWN = 40,
    KEY_ENTER = 13,
    KEY_SHIFT = 16,
    KEY_RIGHT = 39,
    KEY_LEFT = 37,
    KEY_PAGEDOWN = 34,
    KEY_PAGEUP = 33,
    KEY_END = 35,
    KEY_HOME = 36;

function LP_field_keypress_handler(e, _, t, o) {
    var i;
    if (e = e || window.event, LP_getloggedin() && ((o = o || ("undefined" != typeof document ? document : e && e.target ? e.target.ownerDocument : null)) && null != o.location || (o = _.ownerDocument, !g_isfirefox || null == typeof LP || o && null != o.location || (o = void 0 !== LP.lpGetCurrentWindow().getBrowser ? LP.lpGetCurrentWindow().getBrowser().contentDocument : LP.getBrowser().contentDocument)), o)) {
        if (null == o.location) {
            verbose_log("LP_field_keypress_handler given a firefox zombie document?");
            var n = void 0 !== LP.lpGetCurrentWindow().getBrowser ? LP.lpGetCurrentWindow().getBrowser().contentDocument : LP.getBrowser().contentDocument;
            return closepopupfills(n), !1
        }
        reset_lpsaveforminfo_vars(o);
        var r = e.keyCode;
        if (r == KEY_ESCAPE) is_your_popup_showing(o) && closepopupfills(o, "close");
        else if (r == KEY_TAB) e.shiftKey || is_your_popup_showing(o) && closepopupfills(o, "away");
        else if (r == KEY_DOWN) {
            if (!is_your_popup_showing(o)) {
                set_active_username_password(o, _.form), "undefined" != typeof g_isie && g_isie && "undefined" != typeof init_LPfn && init_LPfn() && LPfn && LPfn.ie_set_kbdnav(!0);
                var l = LP_pickFieldName(o, _),
                    a = getIconState(o, l);
                if (a) {
                    var s = !1,
                        d = !1,
                        f = !1;
                    "generate" == a.fillhint && (s = !0), "formfills" == a.fillhint && (d = !0), popuptoggle(o, null, a.idorname, s, FORCE_SHOW_NOHITS, !1, d, a.fillhint, a.fillhintnumber)
                } else {
                    var u = LPMAGIC + LP_pickFieldName(o, _);
                    popuptoggle(o, null, LP_pickFieldName(o, _), NO_FORCE_GENERATE, FORCE_SHOW_NOHITS)
                }
            }
        } else if (r == KEY_UP);
        else if (r == KEY_SHIFT || 0 == r);
        else if (r == KEY_RIGHT && e.altKey) 0;
        else if (is_modifier_key(r));
        else if (r == KEY_ENTER);
        else {
            if (g_ischrome && g_setup_hotkey_handler) {
                if (is_hotkey_event(e)) return
            } else if (g_isie) {
                var p = "";
                if (p += e.ctrlKey ? "control " : "", p += e.metaKey ? "meta " : "", p += e.altKey ? "alt " : "", p += e.shiftKey ? "shift " : "", verbose_log("keycode == " + r + " " + p), void 0 !== e.metaKey && e.metaKey || void 0 !== e.altKey && e.altKey || void 0 !== e.ctrlKey && e.ctrlKey) return
            } else if (g_isfirefox) {
                var p = "";
                if (p += e.ctrlKey ? "control " : "", p += e.metaKey ? "meta " : "", p += e.altKey ? "alt " : "", p += e.shiftKey ? "shift " : "", verbose_log("keycode == " + r + " " + p), is_hotkey_event(o, e)) return
            }
            if ("password" == _.type && formHasUsernameField(_)) {
                if (!g_clickable_input_on_password) return;
                is_your_popup_showing(o) || chk_form_ask_generate(o, _.form) || conditional_create_popup(o, _, FORCE_SHOW_NOHITS_NOLOGIN)
            }
            var g;
            if (!chk_form_has_password(o, _.form)) return;
            if (!is_your_popup_showing(o)) {
                if (g_clickable_input_on_password) {
                    var c = getIconState(o, LP_pickFieldName(o, _));
                    c && c.fillhint && "sites" == c.fillhint && conditional_create_popup(o, _, FORCE_SHOW_NOHITS_NOLOGIN)
                } else {
                    var u = LPMAGIC + LP_pickFieldName(o, _);
                    popuptoggle(o, null, LP_pickFieldName(o, _), NO_FORCE_GENERATE, FORCE_SHOW_NOHITS)
                }
                g_keyboardNav = !0
            }
        }
        if (is_your_popup_showing(o)) {
            var v;
            if (r == KEY_UP && (g_isfirefox ? ff_do_popupfocusdecrement(1) : g_isie || sendBG({
                    cmd: "popupfillinputfocusdecrement",
                    count: 1
                }), g_keyboardNav = !0, g_ischrome && g_setup_hotkey_handler && handle_hotkey(e), LP_stopEventPropagation(e)), r == KEY_DOWN && (g_extended_kbd_nav && e.altKey ? is_your_popup_showing(o) && (g_isfirefox || g_isie || sendBG({
                    cmd: "popupfillinputshownavbar"
                })) : (g_isfirefox ? ff_do_popupfocusincrement(1) : g_isie || sendBG({
                    cmd: "popupfillinputfocusincrement",
                    count: 1
                }), g_keyboardNav = !0), g_ischrome && g_setup_hotkey_handler && handle_hotkey(e), LP_stopEventPropagation(e)), r == KEY_ENTER) verbose_log("Enter Received, checking field"), (v = g_isfirefox ? o.g_popupfill_parent : g_popupfill_parent) == _ && g_keyboardNav && (g_isfirefox ? (verbose_log("Enter Received, Choose Action"), ff_do_popupfocuschoose(!0)) : g_isie || sendBG({
                cmd: "popupfillinputfocuschoose"
            }), g_ischrome && g_setup_hotkey_handler && handle_hotkey(e), g_isfirefox && is_hotkey_event(o, e), LP_stopEventPropagation(e));
            r == KEY_PAGEUP && (g_isfirefox ? ff_do_popupfocusdecrement(12) : g_isie || sendBG({
                cmd: "popupfillinputfocusdecrement",
                count: 12
            }), g_keyboardNav = !0, g_ischrome && g_setup_hotkey_handler && handle_hotkey(e), LP_stopEventPropagation(e)), r == KEY_PAGEDOWN && (g_isfirefox ? ff_do_popupfocusincrement(12) : sendBG({
                cmd: "popupfillinputfocusincrement",
                count: 12
            }), g_keyboardNav = !0, g_ischrome && g_setup_hotkey_handler && handle_hotkey(e), LP_stopEventPropagation(e)), r == KEY_END && (g_isfirefox ? ff_do_popupfocusincrement(1073741824) : sendBG({
                cmd: "popupfillinputfocusincrement",
                count: 1073741824
            }), g_keyboardNav = !0), r == KEY_HOME && (g_isfirefox ? ff_do_popupfocusdecrement(1073741824) : sendBG({
                cmd: "popupfillinputfocusdecrement",
                count: 1073741824
            }), g_keyboardNav = !0)
        }
        return !1
    }
}

function LP_didFieldClickEvent(e, _) {
    return !(!e || !_) && 1 == (1 & LP_getBits(e, _));
    var t
}

function LP_didFieldMouseEvent(e, _) {
    return !(!e || !_) && 2 == (2 & LP_getBits(e, _));
    var t
}

function LP_didFieldKeyEvent(e, _) {
    return !(!e || !_) && 4 == (4 & LP_getBits(e, _));
    var t
}

function LP_didDocumentEscapeEvent(e) {
    if (!e) return !1;
    var _ = e.body,
        t;
    return null == _ && (_ = e.documentElement), 8 == (8 & LP_getBits(e, _))
}

function LP_setFieldClickEvent(e, _) {
    if (!e || !_) return !1;
    var t = LP_getBits(e, _);
    return LP_setBits(e, _, t |= 1), !0
}

function LP_setFieldMouseEvent(e, _) {
    if (!e || !_) return !1;
    var t = LP_getBits(e, _);
    return LP_setBits(e, _, t |= 2), !0
}

function LP_setFieldKeyEvent(e, _) {
    if (!e || !_) return !1;
    var t = LP_getBits(e, _);
    return LP_setBits(e, _, t |= 4), !0
}

function LP_setBits(e, _, t) {
    if (!e || !_) return !1;
    if (null == t && (t = 0), g_isie) {
        if (init_LPfn() && LPfn) return LPfn.ie_set_lpstates(_, t)
    } else {
        var o = LP_pickFieldName(e, _);
        verbose_log("lpsetbits " + o + " = " + t), e.lpstates[o] = t
    }
    return !0
}

function LP_getBits(e, _) {
    if (!e || !_) return 0;
    var t = 0;
    if (g_isie) init_LPfn() && LPfn && (t = LPfn.ie_get_lpstates(_));
    else {
        e.lpstates || (e.lpstates = {});
        var o = e.lpstates,
            i = LP_pickFieldName(e, _);
        verbose_log("lpstates for " + i + " == " + o[i]), t = void 0 !== o[i] ? o[i] : 0
    }
    return t
}

function LP_setDocumentEscapeEvent(e) {
    if (!e) return !1;
    var _ = e.body;
    null == _ && (_ = e.documentElement);
    var t = LP_setBits(e, _);
    return LP_setBits(e, _, t |= 8)
}

function LP_resetAllBits(e) {
    return !!e && (g_isie ? !(!init_LPfn() || !LPfn) && LPfn.ie_reset_lpstates() : (e.lpstates = {}, !0))
}

function lp_docinfoFromEvent(e) {
    var _ = null;
    _ = "undefined" != typeof LP && "function" == typeof LP.lpGetCurrentWindow ? void 0 !== LP.lpGetCurrentWindow().getBrowser ? LP.lpGetCurrentWindow().getBrowser().contentDocument : LP.getBrowser().contentDocument : g_isfirefox ? top.document : document;
    var t = null,
        o = LP_getEventTarget(e).ownerDocument;
    if (o != _) {
        t = o;
        try {
            verbose && t && t.location && verbose_log("click inside iframe " + t.location.href)
        } catch (e) {
            pass
        }
    }
    var i = LP_getEventTarget(e),
        n;
    return {
        topdoc: _,
        framedoc: t,
        eventdoc: o,
        target: i,
        targetname: LP_pickFieldName(o, i)
    }
}

function icon_click_handler(e) {
    var _ = lp_docinfoFromEvent(e),
        t = _.topdoc,
        o = _.framedoc,
        i = _.eventdoc,
        n = _.target,
        r = _.targetname,
        l = !1,
        a = LP_getMousePos(e);
    if (a.x <= 0 && a.y <= 0) return !!(i && i.location && i.location.href && 0 < i.location.href.indexOf(".xul")) || void 0;
    try {
        var s;
        if (t && t.body)
            if (t.body.getAttribute("data-fouc-class-names") && 0 <= t.body.getAttribute("data-fouc-class-names").indexOf("swift-loading")) 0 < getAllIconStates().length ? refresh_input_all_icon_bg(t) : window && window.setTimeout(function() {
                g_input_cnt = -1, doc_create_clickable_icons(t, "", SHOULD_DO_ALWAYS, g_is_specialsite)
            }, 50)
    } catch (e) {}
    var d = getAllIconStates(),
        f, u, p, g;
    for (f = 0; f < d.length; f++) {
        var c = "";
        if (g = null, p = d[f], g_isfirefox && p.inframe) o ? (g = (g = d[f].IHTMLElement) || LP_getElementByIdOrName(o, p.idorname)) && (c = p.idorname) : (g = d[f].IHTMLElement) && (o = g.ownerDocument);
        else if ("" != r && r == p.idorname) {
            if (n != d[f].IHTMLElement) {
                var v = !1;
                for (u = f; u < d.length; u++)
                    if (n == d[u].IHTMLElement) {
                        v = !0;
                        break
                    } if (v) continue;
                if (n && d[f].IHTMLElement && (n.tagName != d[f].IHTMLElement.tagName || n.type != d[f].IHTMLElement.type)) {
                    verbose_log("page click name/id collision");
                    continue
                }
            }
            g = n
        } else(g = d[f].IHTMLElement) ? d[f].dofloater ? r == LPMAGIC + p.idorname || r == LPMAGIC + p.idorname + "_icon" || r == LPMAGIC + p.idorname + "_numspan" ? (g = (g = d[f].IHTMLElement) || LP_getElementByIdOrName(t, p.idorname)) && (c = p.idorname) : pass : g !== n && (g = null) : (g = LP_getElementByIdOrName(t, p.idorname)) && !popupfill_shoulddofield(t, g, SHOULD_DO_ALWAYS) && (g = null), g && (c = p.idorname);
        if (o) {
            if (g && checkIsDisplayed(o, g, 0)) {
                var m;
                if (!(m = LP_getAbsolutePos(o, g)) || m.width <= 0 && m.height <= 0) {
                    verbose_log("skipping field " + p.idorname + " : no valid position");
                    continue
                }
                var O = !1,
                    D = m.left + m.width;
                if (p.text_direction == O) var K = m.left,
                    E = m.left + .02 * D + 10;
                else {
                    var K, E = D;
                    (K = D - .02 * D - 10) < m.left && (K = m.left)
                }
                if (K < a.x && E > a.x && m.top < a.y && m.top + m.height > a.y) {
                    var P = !1,
                        M = !0,
                        L = !1,
                        y = !1;
                    verbose_log("icon_click_handler calling popuptoggle() [iframe]"), "generate" == p.fillhint ? P = !0 : p.no_check_generate || (P = shouldOfferGenerate(o, g)), "formfills" == p.fillhint && (y = !0), t.g_popupfill_parent = g, popuptoggle(t, o, p.idorname, P, M, L, y, p.fillhint, p.fillhintnumber), l = !0, LP_stopEventPropagation(e);
                    break
                }
            }
        } else if (g && checkIsDisplayed(t, g, 0)) {
            if ("INPUT" == g.nodeName && ("checkbox" == g.type || "radio" == g.type)) {
                verbose_log("skipping field " + p.idorname + " : is not text-like");
                continue
            }
            var m;
            if (!(m = LP_getAbsolutePos(t, g)) || m.width <= 0 && m.height <= 0) {
                verbose_log("skipping field " + p.idorname + " : no valid position");
                continue
            }
            var O = !1,
                D = m.left + m.width;
            if (p.text_direction == O) var K = m.left,
                E = m.left + .02 * D + 10;
            else {
                var K, E = D;
                (K = D - .02 * D - 10) < m.left && (K = m.left)
            }
            var h = 0,
                V;
            if (-1 < document.location.href.indexOf("https://mint.intuit.com/login.event?task=S") && (h = 30), K - h < a.x && E > a.x && m.top < a.y && m.top + m.height > a.y) {
                var P = !1,
                    M = !0,
                    L = !1,
                    y = !1;
                "generate" == p.fillhint ? (P = !0, p.fillhintnumber || (p.fillhintnumber = 1)) : p.no_check_generate || (P = shouldOfferGenerate(t, g)), "formfills" == p.fillhint && (y = !0), t.g_popupfill_parent = g, popuptoggle(t, o, p.idorname, P, M, L, y, p.fillhint, p.fillhintnumber, g), l = !0, LP_stopEventPropagation(e);
                break
            }
        } else verbose_log("skipping field " + p.idorname + " : not found/visible")
    }
    return l
}

function onresize_handler(e) {
    var _ = "undefined" != typeof document ? document : e.target.document,
        t = _.getElementsByTagName("body")[0];
    _.g_posbodyrect_cache = t.getBoundingClientRect();
    var o = "undefined" != typeof window && window ? window : _.defaultView;
    return o && void 0 !== o.getComputedStyle ? _.g_posbodystyle_cache = o.getComputedStyle(t, null) : _.g_posbodystyle_cache = t.currentStyle, popupfill_resize(_), !1
}

function handle_form_text_change(e, _, t, o) {
    if (!e && !(e = LP_derive_doc())) return null;
    if (e && _ && popupfill_shoulddofield(e, _, SHOULD_DO_ALWAYS) && should_track_field_onkeyup(_) && update_preobfuscate_field_value(_), !(null == t || null == _ || null == o || null == o.keyCode || 0 == o.keyCode | 16 == o.keyCode) && (!t || popupfill_shoulddoform(e, t)) && popupfill_shoulddofield(e, _, SHOULD_DO_ALWAYS)) {
        var i = _.value,
            n = LP_pickFieldName(e, _);
        if (g_clickable_input_on_password) {
            var r = g_popup_active_username,
                l = g_popup_active_password;
            null == r && (r = void 0 === _.form || null == _.form ? doc_get_orphan_username(e) : form_get_username(e, _.form)), null == l && (l = void 0 === _.form || null == _.form ? doc_get_orphan_password(e) : form_get_password(e, _.form));
            var a = checkDocumentForLoginOrphans(e) || checkDocumentForLoginOrphansFirstStage(e),
                s = checkDocumentForCPWOrphans(e),
                d = a || chk_form_has_password(e, t),
                f = s || chk_form_is_nonlogin_form(e, t),
                u = chk_form_ask_generate(e, t);
            return r && l && (d || u) && !f ? _ == l ? (g_isie || (i = r.value, g_isfirefox || sendBG({
                cmd: "popupfillinputsave",
                inputstr: i,
                inputid: n,
                inputtype: "password"
            })), void verbose_log("KEYPASS4 username=" + i)) : (g_isie || (g_isfirefox ? o && o.keyCode && o.keyCode != KEY_TAB && o.keyCode != KEY_UP && o.keyCode != KEY_DOWN && o.keyCode != KEY_SHIFT && o.keyCode != KEY_LEFT && o.keyCode != KEY_RIGHT && ff_do_popupinputupdate("") : sendBG({
                cmd: "popupfillinputsave",
                inputstr: "",
                inputid: n
            })), void verbose_log('KEYPASS5 username=""')) : void(g_isie || (verbose_log('KEYPASS6 formfill? username=""'), g_isfirefox ? ff_do_popupinputupdate("") : sendBG({
                cmd: "popupfillinputsave",
                inputstr: "",
                inputid: n
            })))
        }
        if (null == i || 0 == i.length) return g_isie || (g_isfirefox ? ff_do_popupinputupdate("") : sendBG({
            cmd: "popupfillinputsave",
            inputstr: "",
            inputid: n
        })), void verbose_log("KEYPASS7 empty username");
        if (!(E(g_autofillsites) <= 0) || g_change_icon_on_input) {
            var p = 0,
                g = null;
            for (var c in g_autofillsites) void 0 !== g_autofillsites[c].useusername && 0 == g_autofillsites[c].useusername.indexOf(i) && (p++, g = g_autofillsites[c]);
            if (1 != p) {
                g_isie || (g_isfirefox ? ff_do_popupinputupdate(i) : sendBG({
                    cmd: "popupfillinputsave",
                    inputstr: i,
                    inputid: n,
                    inputtype: _.type,
                    issaveall: issaveall(t)
                })), verbose_log("KEYPASS9 match>1 username=" + i);
                var d = chk_form_has_password(e, t),
                    v = !1;
                if (g_change_icon_on_input) {
                    var m = t.elements;
                    if ("undefined" == typeof Math) return;
                    var O = Math.floor(1e4 * Math.random());
                    if (null != m)
                        for (var D = 0; D < m.length; D++) {
                            var K = m[D];
                            if (checkIsDisplayed(e, K, 0, null, O) && isInputFieldPassword(e, K) && null != K.value && 0 < K.value.length) {
                                v = !0;
                                break
                            }
                        }
                }
            } else do_autofill_if_matched ? g_isie || (g_isfirefox ? ff_autofill(e, g.aid) : sendBG({
                cmd: "autofillaid",
                aid: g.aid
            })) : (g_isie || (g_isfirefox ? ff_do_popupinputupdate(i) : sendBG({
                cmd: "popupfillinputsave",
                inputstr: i,
                inputid: n,
                inputtype: _.type,
                issaveall: issaveall(t)
            })), verbose_log("KEYPASS8 match>0 username=" + i))
        }
    }

    function E(e) {
        var _ = 0;
        for (var t in e) _++;
        return _
    }
}
//# sourceMappingURL=sourcemaps/events_cs.js.map