var do_bgiconinput = !0,
    g_CSPCHECKER = 0;

function popupfill_create_iframe(e, t, r, n, i, a, o, s, _, l) {
    if (e) {
        for (var p = -1, f = e.getElementsByTagName("input"), m = 0; m < f.length && m < MAX_INPUTS_HARD; m++) {
            var c = f[m];
            void 0 !== c.maxLength && "password" == c.type && (g_isie || sendBG({
                cmd: "set_possiblemax",
                max: c.maxLength
            }))
        }
        g_isie && init_LPfn() && LPfn && LPfn.resetSafeCloseIframe(), g_iframeclose_starttime = null, t = parseInt(t) + "px", r = parseInt(r) + "px";
        var d = e.body;
        if (d && !e.getElementById(LPMAGICIFRAME + n)) {
            var g = e.createElement("iframe");
            if (g.id = LPMAGICIFRAME + n, g.name = LPMAGICIFRAME + n, s = !(g_iframe_docked = !0), !g_isie) return "undefined" != typeof event && event && event.type ? l.eventType = event.type : l.eventType = "click", void csTop.LPInfieldFrame.openFrame(l);
            var u = "#framesrc=LPMAGIC";
            g.src = "https://lastpass.com/fake/fake.php" + u, init_LPfn() && LPfn && LPfn.getDocumentMode(e) < 9 && (g.setAttribute("allowTransparency", !0), g.setAttribute("frameBorder", 0), g.allowTransparency = !0, g.frameBorder = 0), parseInt(t) < 0 && (t = "0px"), parseInt(r) < 0 && (r = "0px"), dotrans ? (g_frame_css_str = "display:block !important; position:absolute !important; visibility:visible !important; z-index:" + CLICKABLE_ICON_ZINDEX + " !important; border-style:none !important; opacity: 1.0 !important; margin:0 !important; padding:0 !important;", "undefined" != typeof g_isie && g_isie && (g_frame_css_str += "background-color:transparent !important;background-image:none !important;filter:alpha(opacity=100) !important ; ")) : g_frame_css_str = "display:block; position:absolute !important; visibility:visible !important; opacity: 1.0 !important ; z-index:" + CLICKABLE_ICON_ZINDEX + " !important; border-style:solid !important; border-color: #4c4c4c !important; border-width:1px !important; border-radius: 4px 4px; -moz-border-radius: 4px; -webkit-border-radius: 4px; box-shadow: 1px rgba(200, 200, 200, 0.5); -webkit-box-shadow: 1px 1px rgba(200, 200, 200, 0.5); -moz-box-shadow: 1px 1px rgba(200, 200, 200, 0.5); filter:alpha(opacity=100) !important; ", g.style.cssText = g_frame_css_str;
            try {
                if (framesetarr = document.getElementsByTagName("frameset"), 0 == framesetarr.length) d.appendChild(g);
                else if (g_create_iframe_in_top && !g_isie && !g_isfirefox && _ && 1 == framesetarr.length) {
                    var h = LPJSON.stringify(g_frame_css_str + " border: none;");
                    _.body.setAttribute("data-lp-gcss", h);
                    var v = _.getElementsByTagName("FRAMESET");
                    if (v && v[0]) {
                        var y = v[0].getElementsByTagName("FRAME");
                        if (y) {
                            var b = y[0].contentWindow.document;
                            b.body.setAttribute("data-lp-gcss", h), b.body.appendChild(g)
                        } else _.body.appendChild(g)
                    }
                } else
                    for (var w = !1, m = 0; m < framesetarr.length; m++) {
                        for (var x = 0; x < framesetarr[m].children.length; x++)
                            if ("FRAME" == framesetarr[m].children[x].tagName)
                                if (cf = framesetarr[m].children[x].contentWindow.document, null != cf.getElementById(n)) {
                                    if (w = !0, toappendTo = cf.getElementById(n), l && l.framesrc && l.framesrc == get_doc_location_href(cf)) break
                                } else if (null != cf.getElementsByName(n) && 0 != cf.getElementsByName(n).length && (w = !0, toappendTo = cf.getElementsByName(n)[0], l && l.framesrc && l.framesrc == get_doc_location_href(cf))) break;
                        if (w) {
                            try {
                                toappendTo.ownerDocument.body.setAttribute("data-lp-gcss", LPJSON.stringify(g_frame_css_str)), toappendTo.parentNode.appendChild(g)
                            } catch (e) {
                                framesetarr[m].children[x].contentWindow.document.body.appendChild(g)
                            }
                            break
                        }
                    }
            } catch (e) {
                return void verbose_log("append failed! " + e)
            }
            g_isie && !LP_getloggedin() && g.parentNode.removeChild(g), g.width = parseInt(a) + "px", g_isie ? (g.height = "38px", g.height = "173px") : g.height = "26px";
            var E = 24,
                I = 15;
            void 0 !== i && 0 < i && (g.height = i * E + I + 8 + "px"), 0 < parseInt(o) ? g.height = parseInt(o) + "px" : g.height = parseInt(g.height) + "px";
            var k, P, L = "width: " + (parseInt(g.width) + "px") + " !important; height: " + (parseInt(g.height) + "px") + " !important; top:" + r + " !important; left:" + t + " !important; ";
            g.style.cssText = g_frame_css_str + L, setTimeout(function() {
                0 == g_CSPCHECKER && "undefined" == typeof chrome && "object" == typeof safari && do_iframe_sad_msg(e)
            }, 5e3)
        }
    }
}

function weasel(e, t) {
    if (LPCTR("weasel"), (void 0 === e || 0 == e || 1 == e || e < 5) && (e = 200), g_weaseled = !0, g_isdebug) {
        var r = (new Date).getTime(),
            n = r - g_last_weasel;
        2 * e < n && verbose_log("last weasel cycle took too long" + n + " ms")
    }
    if (popupfill_resize(), g_isdebug) {
        var i = (new Date).getTime() - r;
        e < i && verbose_log("last resize took too long " + i + " ms"), g_last_weasel = (new Date).getTime()
    }
    g_weasel_id = setTimeout(function() {
        weasel(e)
    }, e)
}
var g_last_weasel = 0;

function issaveall(e) {
    for (var t = e.elements, r = 0, n = 0, i = 0, a = 0; a < t.length; a++) {
        var o = t[a].type;
        "password" == o ? n++ : "text" == o || "tel" == o || "email" == o ? r++ : "textarea" == o && i++
    }
    return 1 != r || 1 != n || 0 != i
}
var POPUP_FIELD_OFFSET = -4;

function calculate_iframe_pos(e, t, r, n) {
    if (void 0 === n && (n = !1), !e) return null;
    if (null == t) return null;
    var i = t.style.left,
        a = t.style.top,
        o, s;
    if ((g_double_password_hack || g_double_secret_password_hack || parseInt(i) < 0 || parseInt(a) < 0) && null != (o = e.getElementById(LPMAGICIFRAME + LP_pickFieldName(e, t)))) {
        var _ = LP_getAbsolutePos(e, o, null, n);
        if (_) return a = parseInt(_.top), i = parseInt(_.left), isNaN(a) || isNaN(i) ? null : {
            posx: i += "px",
            posy: a += "px"
        }
    }
    s = LP_pickFieldName(e, t);
    var l = t;
    if (null != t) {
        var p = LP_getAbsolutePos(e, t, null, n),
            o;
        if (null != p && (i = parseInt(p.left) + POPUP_FIELD_OFFSET + "px", a = parseInt(p.top) + parseInt(p.height) + "px", g_do_icon_number_hint && (a = parseInt(p.top) + parseInt(p.height) + 4 + "px")), null == r || 0 == r || "" == r)
            if (null != (o = LP_getElementByIdOrName(e, LPMAGICIFRAME + LP_pickFieldName(e, t)))) {
                var f = LP_getAbsolutePos(e, o, null, !0);
                r = f ? f.width : 0
            } else r = 0;
        if (!n) {
            var m = LP_getWindowWidth(window, !0);
            if (!m) return {
                posx: 0,
                posy: 0
            };
            parseInt(r) + parseInt(i) > m && (i = m - parseInt(r) - 20 + "px")
        }
    }
    if (g_isie, "" == i || "auto" == i || "" == a || "auto" == a) return null;
    var c = parseInt(i),
        d = parseInt(a);
    return "NaN" == c || "NaN" == d ? null : {
        posx: i = c + "px",
        posy: a = d + "px"
    }
}

function verbose_log(e) {
    verbose && ("undefined" != typeof Date ? console_log("[" + g_docnum + "] " + ((new Date).getTime() - g_tsstart) + " : " + e) : console_log("[" + g_docnum + "] " + e))
}

function is_watermark(e) {
    return !1
}

function checkAskGenerate() {}

function sendKey(e, t) {
    try {
        return keyName = "DOM_VK_" + e.toUpperCase(), send_simulated_key(t, 0, KeyEvent[keyName], !1)
    } catch (e) {
        lpdbg("error", e)
    }
    return null
}

function send_simulated_key(e, t, r, n) {
    if (void 0 === e || void 0 === e.ownerDocument) return lpdbg("error", "No key target!"), !1;
    var i = e.ownerDocument.createEvent("KeyboardEvent");
    "undefined" != typeof g_isfirefoxsdk && g_isfirefoxsdk ? i.initKeyEvent("keydown", !0, !0, null, !1, !1, n, !1, r, t) : i.initKeyboardEvent("keydown", !0, !0, document.defaultView, !1, !1, n, !1, r, r);
    var a = e.dispatchEvent(i);
    return a && "undefined" != typeof g_isfirefoxsdk && g_isfirefoxsdk && ((i = e.ownerDocument.createEvent("KeyboardEvent")).initKeyEvent("keypress", !0, !0, null, !1, !1, n, !1, r, t), a = e.dispatchEvent(i)), i = e.ownerDocument.createEvent("KeyboardEvent"), "undefined" != typeof g_isfirefoxsdk && g_isfirefoxsdk ? i.initKeyEvent("keyup", !0, !0, null, !1, !1, n, !1, r, t) : i.initKeyboardEvent("keyup", !0, !0, null, !1, !1, n, !1, r, r), e.dispatchEvent(i), a
}
var g_formmutations = 0;

function checkShouldRecheck(i) {
    var e = 20,
        t = !1,
        a = document,
        o = window;
    i && "object" == typeof i || (i = {});
    var r = !1,
        s = !1,
        _ = !1;
    if (void 0 !== i.fromclick && (r = i.fromclick), void 0 !== i.frommuto && (s = i.frommuto), void 0 !== i.skipfill && (_ = i.skipfill), g_pending_recheck = !1, debug_checkpoint("entered checkShouldRecheck, clear pending state"), LP_isSinglePageApp(a) && (e = 100), e < g_formmutations) return verbose_log("Abort"), !1;
    if (LP_should_ignore_this_doc(a, r)) return !1;
    if (0 <= g_input_cnt && 0 <= g_form_cnt) {
        var n = countInputs(document),
            l = countFormEquivalents(document),
            p = computeFingerprint(document);
        verbose_log("checkShouldRecheck() : # inputs was " + g_input_cnt + ", now " + n + " #forms was " + g_form_cnt + " now " + l + ", fingerprint was " + g_input_fingerprint + " now " + p), g_input_cnt == n && g_form_cnt == l && g_input_fingerprint == p || (g_formmutations++, formcachereset(document), fieldcachereset(document), g_isie ? setTimeout(function() {
            ie_recheck_page(document, g_is_specialsite)
        }, 1e3) : setTimeout(function() {
            LPCTR("recheck");
            var e = LP_get_last_url_history(a);
            e || (LP_put_last_url_history(a), e = LP_get_last_url_history(a));
            var t = e.href,
                r = e.href_hash,
                n = get_doc_location_href(a);
            if (!s && (n !== t || i.href !== n || r !== i.href_hash)) return formcachereset(a), fieldcachereset(a), g_input_cnt = 0, g_form_cnt = 0, delete a.body._lpcrdone, LP_put_last_url_history(a), e = LP_get_last_url_history(a), i.href = e.href, i.href_hash = e.href_hash, void(g_pending_recheck || checkShouldRecheck(i));
            g_pending_eval || evalScriptsInFrame(o, a, !0, {
                skipfill: _ || !f(a),
                href: t,
                href_hash: r,
                frommuto: s
            })
        }, 200), g_input_cnt = n, g_form_cnt = l, g_input_fingerprint = p, t = !0)
    }
    return t;

    function f(e) {
        return !!(e = e || LP_derive_doc()) && (!!LP_isSinglePageApp(e) || (!!isASPpage() || !!g_did_muto && !(g_did_muto = !1)))
    }
}

function is_watermark_password(e) {
    return !1
}

function createpopuptoplevel_handler(e) {
    if (!e) return !1;
    var t = LP_derive_doc();
    g_iscasper && e.override_doc && (t = e.override_doc);
    var r = parseInt(e.from_iframe.posx),
        n = parseInt(e.from_iframe.posy),
        i = e.from_iframe.id,
        a = e.from_iframe.rows,
        o = e.from_iframe.width,
        s = e.from_iframe.minheight,
        _ = e.from_iframe.framename,
        l = e.from_iframe.framesrc,
        p = null;
    if (is_your_popup_showing(t)) return !1;
    var f = !0,
        m = find_iframe_pos(t, _, l, !1);
    m || (null !== (m = find_iframe_pos(t, _, l, !0)) && void 0 !== m.cframedoc ? p = m.cframedoc : pass);
    var c = 0,
        d = 0;
    m ? (c = parseInt(m.left) + r + "px", d = parseInt(m.top) + n + "px", g_toplevel_initial_abs_x = c, g_toplevel_initial_abs_y = d) : d = c = "10px";
    var g = !(s = "90px");
    return e.from_iframe.iframe = find_iframe(t, _, l, !1), popupfill_create_iframe(t, c, d, i, a, o, s, !1, p, e.from_iframe), g_popupfill_iframe_width_save = o, !0
}
var g_toplevel_initial_abs_x = null,
    g_toplevel_initial_abs_y = null;

function popupfillresize_handler(e) {
    0 < e.width && (g_minwidth_override = parseInt(e.width)), 0 < e.height && (g_minheight_override = parseInt(e.height)), !g_create_iframe_in_top || g_isie || g_isfirefox || !LP_inIframe(window) && toplevel_iframe_state_get() && (g_draggable && g_iframe_docked, relocate_popupfill_iframes(document))
}

function find_iframe_pos(e, t, r, n) {
    if (!e) return null;
    var i, a, o = !0,
        s = !1,
        _ = !0,
        l = !0;
    try {
        var p = e.getElementsByTagName("IFRAME");
        if (n && (p = e.getElementsByTagName("FRAME")), !t && 1 == p.length) return LP_getAbsolutePos(e, p[0], !0, !0);
        var f = 50,
            m = [];
        for (i = 0; i < p.length && i < 50; i++) m[i] = p[i];
        for (i = 0; i < m.length; i++)
            if (m[i].name && "" != t && m[i].name == t || m[i].src && "" != r && compare_puny_urls(m[i].src, r)) return LP_getAbsolutePos(e, m[i], !0, !0);
        if (n)
            for (i = 0; i < m.length; i++) {
                var c = m[i].contentWindow.document,
                    d = c.getElementsByTagName("FRAME");
                for (a = 0; a < d.length && a < 50; a++)
                    if (d[a].name && "" != t && d[a].name == t || d[a].src && "" != r && d[a].src == r) {
                        var g = LP_getAbsolutePos(c, d[a], !0, !0);
                        return g.cframedoc = c, g
                    }
            }
    } catch (e) {}
    return null
}

function find_iframe(e, t, r, n) {
    if (!e) return null;
    var i, a;
    try {
        var o = e.getElementsByTagName("IFRAME");
        if (n && (o = e.getElementsByTagName("FRAME")), !t && 1 == o.length) return o[0];
        var s = 50,
            _ = [];
        for (i = 0; i < o.length && i < 50; i++) _[i] = o[i];
        for (i = 0; i < _.length; i++)
            if (_[i].name && "" != t && _[i].name == t || _[i].src && "" != r && compare_puny_urls(_[i].src, r)) return _[i];
        if (n)
            for (i = 0; i < _.length; i++) {
                var l, p = _[i].contentWindow.document.getElementsByTagName("FRAME");
                for (a = 0; a < p.length && a < 50; a++)
                    if (p[a].name && "" != t && p[a].name == t || p[a].src && "" != r && p[a].src == r) return p[a]
            }
    } catch (e) {}
    return null
}
//# sourceMappingURL=sourcemaps/onload_shared.js.map