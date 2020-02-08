var CPWbot_cs;

function CPWbot_cs_lib() {
    var w = this;
    this.JSON = JSON, JSON || (this.JSON = LPJSON), LPJSON;
    var e = !0;
    this.alert = alert;
    var b = 10,
        t = "id",
        i = "name",
        n = "xpath";

    function r(e, t, i) {
        return (e = e || LP_derive_doc()) ? this.getElementByType(e, {
            id_type: t,
            id_value: i
        }) : null
    }
    this.fill_field = function(e, t) {
        if (e = e || LP_derive_doc(), !t || !e) return !1;
        var i = 0,
            n = this.getElementByType(e, t);
        if (n) {
            if (info_log(e, "CA23", {
                    param1: t.id_type,
                    param2: t.id_value,
                    param3: t.should_click,
                    param4: t.should_fill_via_keys
                }), n.focus(), t.should_click) {
                var r = t.flavor;
                CPWbot_cs.do_click(e, n, r), "function" == typeof sendKey && sendKey("Z", n), fire_onchange(n, !0, !0)
            }
            t.should_fill_via_keys && g_isfirefox ? fill_field_via_keys(n, t.field_value) : n.value = t.field_value, fire_onchange(n), i = 1
        } else info_log(e, "CA24", {
            param1: t.id_type,
            param2: t.id_value
        });
        return sendBG({
            cmd: "cpwbot_fill_ack",
            url: get_doc_location_href(e),
            docstate: e.readyState,
            req_id: t.req_id,
            id_type: t.id_type,
            id_value: t.id_value,
            found: i ? 1 : 0,
            should_click: t.should_click,
            should_fill_via_keys: t.should_fill_via_keys
        }, e), !0
    }, this.click_field = function(e, t) {
        if (e = e || LP_derive_doc(), !t || !e) return !1;
        var i = w.CLICK_NOMINAL,
            n = w.CLICK_NO_FOCUS,
            r = w.CLICK_MOUSEDOWN,
            a = w.CLICK_STRANGE,
            o = this.getElementByType(e, t),
            s = 0,
            l = i;
        if (t.flavor) {
            var d = [i, n, r, a];
            lp_in_array(t.flavor, d) ? l = t.flavor : info_log(e, "CA3")
        }
        return o ? (info_log(e, "CA4", {
            param1: getmydocnum(e),
            param2: t.pwchangestate,
            param3: t.id_type,
            param4: t.id_value
        }), this.do_click(e, o, l), s = 1) : (info_log(e, "CA5", {
            param1: getmydocnum(e),
            param2: t.pwchangestate,
            param3: t.id_type,
            param4: t.id_value
        }), g_isdebug), sendBG({
            cmd: "cpwbot_click_ack",
            url: get_doc_location_href(e),
            docstate: e.readyState,
            pwchangestate: t.pwchangestate,
            msgid: t.msgid,
            id_type: t.id_type,
            id_value: t.id_value,
            found: s ? 1 : 0,
            flavor: l
        }, e), !0
    }, this.execute_script = function(e, t) {
        if (e = e || LP_derive_doc(), !t || !e || !Math) return !1;
        if (!g_isfirefox || !e || e.defaultView) {
            var i = !0,
                n = !0,
                r = t.js,
                a = t.hash,
                o = null;
            if (r) {
                var s = r,
                    l;
                if (l = "function" == typeof fasthash ? fasthash : "function" == typeof crc32 ? crc32 : "function(j) { if (j) { return j.length; } return 0; }", info_log(e, "CA6", {
                        param1: a,
                        param2: l(s)
                    }), a != l(s)) return info_log(e, "CA7"), !1;
                var d, _ = "__lpresult" + Math.floor(Math.random() * Math.pow(2, 31));
                info_log(e, "CA8", {
                    param1: getmydocnum(e),
                    param2: r
                }), run_custom_js(e, r = null === e.body ? "try{" + r + "}catch(e) { }" : "try {" + sprintf("var _res = document.getElementById('%s');  if (!_res) { _res = document.createElement('div');  _res.id='%s'; _res.style.display='none'; _res.style.left='-1000px'; document.body.appendChild(_res); } { ", _, _) + r + "} if (_res) { if (typeof(_res.innerText) != 'undefined') { _res.innerText = document._g_result; } else { _res.textContent = document._g_result; } document._g_result = null; }} catch(e) { }");
                var c = e.getElementById(_);
                c && (void 0 === (o = LP_elt_get_text(c)) && (o = null), c.parentElement.removeChild(c)), r = null
            }
            return sendBG({
                cmd: "cpwbot_js_ack",
                url: get_doc_location_href(e),
                docstate: e.readyState,
                req_id: t.req_id,
                result: CPWbot_cs.JSON.stringify(o)
            }, e), n
        }
    }, this.getElementByType = function(e, t) {
        if (e = e || LP_derive_doc(), !t || !e) return null;
        if (g_isfirefox && e && !e.defaultView) return null;
        var i = null,
            n = null,
            r = t.id_type,
            a = t.id_value,
            o = 666;
        if (r && a) switch (r) {
            case "id":
                i = e.getElementById(a);
                break;
            case "name":
                (n = e.getElementsByName(a)) && 0 < n.length && (i = n[0]);
                break;
            case "xpath":
                g_isie && "undefined" != typeof init_LPfn && init_LPfn() && LPfn && (o = LPfn.getDocumentMode(e)), o < 8 ? alert("old IE - does not bundle in XPATH support. TODO ") : i = LP_getElementByXPath(e, a)
        }
        return i
    }, this.getElementsByType = function(e, t) {
        if (e = e || LP_derive_doc(), !t || !e) return null;
        var i = null,
            n = [],
            r = t.id_type,
            a = t.id_value,
            o = 666;
        if (r && a) switch (r) {
            case "id":
                (i = e.getElementById(a)) && n.push(i);
                break;
            case "name":
                n = e.getElementsByName(a);
                break;
            case "xpath":
                g_isie && "undefined" != typeof init_LPfn && init_LPfn() && LPfn && (o = LPfn.getDocumentMode(e)), o < 8 ? this.alert("old IE - does not bundle in XPATH support. TODO ") : n = LP_getElementsByXPath(e, a)
        }
        return n
    }, this.field_is_displayed = function(e, t) {
        return e = e || LP_derive_doc(), !(!t || !e) && !!lpIsVisible(t)
    }, this.CLICK_NOMINAL = 0, this.CLICK_NO_FOCUS = 1, this.CLICK_MOUSEDOWN = 2, this.CLICK_STRANGE = 3, this.do_click = function(e, t, i) {
        if (e = e || LP_derive_doc(), !t || !e) return !1;
        var n = null;
        "undefined" != typeof window && (n = window), n = n || e.defaultView, g_isfirefoxsdk && n && n.wrappedJSObject && (n = n.wrappedJSObject);
        var r = w.CLICK_NOMINAL,
            a = w.CLICK_NO_FOCUS,
            o = w.CLICK_MOUSEDOWN,
            s = w.CLICK_STRANGE;
        switch (void 0 !== i && i || (i = r), void 0 !== t.disabled && t.disabled && (t.disabled = !1), i !== a && t.focus(), i) {
            case s:
                0;
                break;
            case o:
                var l = LP_getAbsolutePos(e, t);
                if (l && t) {
                    var d = t,
                        _, _, _, _, _;
                    (_ = document.createEvent("MouseEvent")).target = d, _.initMouseEvent("mouseenter", !0, !1, n, 0, l.left, l.top, l.left, l.top, !1, !1, !1, !1, 0, n.document.documentElement), d.dispatchEvent(_), (_ = document.createEvent("MouseEvent")).target = d, _.initMouseEvent("mousemove", !0, !1, n, 0, l.left + 2, l.top + 2, l.left + 2, l.top + 2, !1, !1, !1, !1, 0, null), d.dispatchEvent(_), (_ = document.createEvent("MouseEvent")).target = d, _.initMouseEvent("mousedown", !0, !1, n, 0, l.left + 2, l.top + 2, l.left + 2, l.top + 2, !1, !1, !1, !1, 0, null), d.dispatchEvent(_), (_ = document.createEvent("MouseEvent")).target = d, _.initMouseEvent("mouseup", !0, !1, n, 0, l.left + 2, l.top + 2, l.left + 2, l.top + 2, !1, !1, !1, !1, 0, null), d.dispatchEvent(_), (_ = document.createEvent("MouseEvent")).target = d, _.initMouseEvent("click", !0, !1, n, 0, l.left + 2, l.top + 2, l.left + 2, l.top + 2, !1, !1, !1, !1, 0, null), d.dispatchEvent(_)
                }
                break;
            case r:
            case a:
            default:
                c(e, t, "click", "MouseEvents")
        }

        function c(e, t, i, n) {
            return !!(e && t && i && n) && (g_isfirefox ? fireEvent(e, t, i, n) : LP_fireEvent(t, i, n), !0)
        }

        function u(e, t) {
            if (e && t) {
                var i = t.element,
                    n = t.evt,
                    r = t.evt_class;
                r = r || "MouseEvent";
                var a = null;
                "undefined" != typeof window && (a = window), a = a || e.defaultView, g_isfirefoxsdk && a && a.wrappedJSObject && (a = a.wrappedJSObject), i && "string" == typeof n && "string" == typeof r ? LP_fireEvent(i, n, r, t) : debug_checkpoint(e, "FAIL " + n);
                var o = t.posx,
                    s = t.posy,
                    l = t.relatedTarget,
                    n;
                if (i && "string" == typeof n && "string" == typeof r) return void 0 === l && (l = null), (n = document.createEvent(r)).target = i, n.initMouseEvent(n, !0, !1, a, 0, o, s, o, s, !1, !1, !1, !1, 0, l), i.dispatchEvent(n), !0
            }
            return !1
        }
        return !0
    }, this.decode_fields_metainfo = function(e) {
        var t = "";
        return e && (t = this.JSON.parse(e)), t
    }, this.validate_page_fields = function(e, t, i, n, r, a, o, s) {
        if (!e) return null;
        var l = !0,
            d, _ = {};
        info_log(e, "CA9", {
            param1: getmydocnum(e),
            param2: t
        });
        var c = !1,
            u = 0,
            f = 0,
            p = 0,
            m = 0,
            g = i = i || [],
            v = n = n || [],
            y = s = s || [],
            h;
        if (a) {
            h = new RegExp(a, "i");
            var E = punycode.URLToASCII(e.location.href);
            if (h.exec(E)) return _.num_ok_matches = null, _.num_okfields = null, _.found_bad_match = null, _.num_badfields = null, _.url_success_match = !0, _.url_failure_match = !1, _.do_retry = !1, _.retval = !0, _.found_interactive = !1, info_log(e, "CA10", {
                param1: getmydocnum(e),
                param2: a
            }), g_isdebug && (set_innertext(_, LP_elt_get_text(e.body)), _.innerhtml = e.body.innerHTML), _
        }
        if (o) {
            h = new RegExp(o, "i");
            var E = punycode.URLToASCII(e.location.href);
            if (h.exec(E)) return _.num_ok_matches = null, _.num_okfields = null, _.found_bad_match = null, _.num_badfields = null, _.url_failure_match = !0, _.url_success_match = !1, _.do_retry = !1, _.retval = !1, _.found_interactive = !1, info_log(e, "CA11", {
                param1: getmydocnum(e),
                param2: o
            }), g_isdebug && (set_innertext(_, LP_elt_get_text(e.body)), _.innerhtml = e.body.innerHTML), _
        }
        for (d = 0; d < g.length; d++) {
            var b = g[d].id_type,
                A = g[d].id_value,
                S;
            if (!(S = w.getElementByType(e, {
                    id_type: b,
                    id_value: A
                }))) {
                info_log(e, "CA12", {
                    param1: getmydocnum(e),
                    param2: b,
                    param3: A
                });
                break
            }
            u++, f++
        }
        if (f < g.length && (c = !0, l = null), l)
            for (d = 0; d < v.length; d++) {
                var b = v[d].id_type,
                    A = v[d].id_value,
                    S;
                if (S = this.getElementByType(e, {
                        id_type: b,
                        id_value: A
                    })) {
                    u++, p = 1, info_log(e, "CA13", {
                        param1: getmydocnum(e),
                        param2: A
                    }), c = l = !1;
                    break
                }
                c = !0
            }
        for (d = 0; d < y.length; d++) {
            var b = y[d].id_type,
                A = y[d].id_value,
                S;
            if (S = this.getElementByType(e, {
                    id_type: b,
                    id_value: A
                })) {
                u++, m = 1, info_log(e, "CA14", {
                    param1: getmydocnum(e),
                    param2: A
                }), c = !1;
                break
            }
        }
        return 0 === u && (0 < g.length || 0 < v.length) && (l = null), _ && (_.num_ok_matches = f, _.num_okfields = g.length, _.found_bad_match = p, _.num_badfields = v.length, _.do_retry = c, _.retval = l, _.url_success_match = !1, _.url_failure_match = !1, _.found_interactive = m, g_isdebug && (set_innertext(_, LP_elt_get_text(e.body)), _.innerhtml = e.body.innerHTML)), _
    }, this.interrogate = function(e, t, i) {
        var n = 500;
        if (t && !(b < i)) {
            var r = t.desc,
                a = t.required_fields,
                o = t.rejected_fields,
                s = t.proceed_on_interactive;
            void 0 === i && (i = 1);
            var l = t.interactive_fields;
            if (!d(e.readyState)) return info_log(e, "CA15", {
                param1: getmydocnum(e),
                param2: r,
                param3: n,
                param4: e.readyState
            }), void setTimeout(function() {
                CPWbot_cs.interrogate(e, t, i + 1)
            }, n);
            g_cpwbot && CPWbot_cs && CPWbot_cs.interrogate_validate(e, t)
        }

        function d(e) {
            return s ? "complete" == e || "interactive" == e : "complete" == e
        }
    }, this.interrogate_validate = function(t, i, n) {
        if (!i || b < n) return !1;
        null == n && (n = 1);
        var e = 1e3,
            r = i.desc,
            a = i.required_fields,
            o = i.rejected_fields,
            s = i.required_url,
            l = i.rejected_url,
            d = i.interactive_fields,
            _ = i.id,
            c = i.validate_timeout,
            u = i.timestamp,
            f, p = ((new Date).getTime() - u) / 1e3;
        if (null == c && (c = 0), 0 < c && c / 2e3 <= n) return info_log(t, "CA16", {
            param1: getmydocnum(t),
            param2: c,
            param3: e,
            param4: n,
            param5: p
        }), !1;
        info_log(t, "CA17", {
            param1: getmydocnum(t),
            param2: c,
            param3: e,
            param4: n,
            param5: p
        });
        var m = CPWbot_cs.decode_fields_metainfo(a),
            g = CPWbot_cs.decode_fields_metainfo(o),
            v = CPWbot_cs.decode_fields_metainfo(d);
        if (0 === m.length && 0 === g.length && !l && !s) return v.length, info_log(t, "CA18", {
            param1: getmydocnum(t)
        }), h = !0, sendBG({
            cmd: "cpwbot_validate_state_result",
            state: "STATE" + n,
            url: get_doc_location_href(t),
            docstate: t.readyState,
            desc: r,
            id: _,
            required_fields: a,
            rejected_fields: o,
            required_url: s,
            rejected_url: l,
            result_obj: CPWbot_cs.JSON.stringify(y),
            result: CPWbot_cs.JSON.stringify(h)
        }, t), !0;
        var y = CPWbot_cs.validate_page_fields(t, r, m, g, c, s, l, v);
        if (null === y) return null;
        var h = y.retval,
            E;
        return y.do_retry && null === h ? (m.length, info_log(t, "CA19", {
            param1: getmydocnum(t),
            param2: n,
            param3: p,
            param4: r,
            param5: 1
        }), setTimeout(function() {
            var e = CPWbot_cs.interrogate_validate(t, i, n + 1);
            e || (e = 0 === m.length && 0 < g.length || 0 < m.length && 0 < g.length && 0 < y.num_ok_matches, sendBG({
                cmd: "cpwbot_validate_state_result",
                state: "STATE_TIMEDOUT",
                url: get_doc_location_href(t),
                docstate: t.readyState,
                desc: r,
                id: _,
                required_fields: a,
                rejected_fields: o,
                required_url: s,
                rejected_url: l,
                result_obj: CPWbot_cs.JSON.stringify(y),
                result: CPWbot_cs.JSON.stringify(e)
            }, t))
        }, e)) : (null === h && (info_log(t, "CA20", {
            param1: getmydocnum(t)
        }), h = !1), sendBG({
            cmd: "cpwbot_validate_state_result",
            state: "STATE" + n,
            url: get_doc_location_href(t),
            docstate: t.readyState,
            desc: r,
            id: _,
            required_fields: a,
            rejected_fields: o,
            required_url: s,
            rejected_url: l,
            result_obj: CPWbot_cs.JSON.stringify(y),
            result: CPWbot_cs.JSON.stringify(h)
        }, t)), !0
    };
    var a = "__lpresultdiv";
    return this.do_result_div = function(e, t) {
        if (!e) return !1;
        if (!g_isdebug) return !1;
        g_isdebug && check_for_selenium_bits(e);
        var i = e.getElementById(a);
        return !i && e.body && (i = e.createElement("div")) && (i.id = a, i.style.left = "-999px", i.style.position = "absolute", e.body.appendChild(i)), LP_elt_set_text(i, t)
    }, this.hide_result_div = function(e) {
        if (!e) return !1;
        var t = e.getElementById(a);
        return t && t.parentElement.removeChild(t), !0
    }, !0
}

function display_cpw_message_loop(t, e, i) {
    if (t) {
        if (null === e) {
            if (null === t.getElementById("cpwmsg")) return;
            g_ischrome ? chrome_runtime_sendMessage({
                cmd: "getcpwmsg"
            }, function(e) {
                e && e.msg && display_cpw_message(t, e.msg), 1 === e.minimize_state && minimize_cpw_dialog(t)
            }) : "undefined" != typeof safari ? (safari.self.removeEventListener("message", handleMessage, !1), safari.self.addEventListener("message", handleMessage, !1), safari.self.tab.dispatchMessage("getcpwmsg", {})) : "undefined" != typeof g_isfirefoxsdk && g_isfirefoxsdk && send_message({
                messagetype: "getcpwmsg"
            })
        } else display_cpw_message(t, e, i);
        g_isdebug && check_for_selenium_bits(t), setTimeout(function() {
            display_cpw_message_loop(t, null, null)
        }, 51)
    }
}

function update_msgdiv_css(e, t, i, n, r) {
    if (!e) return !1;
    var a = "position:absolute !important; z-index: 200; visibility:visible !important;  border-style:transparent!important; border-width:0px !important;";
    a += 'font-size:14px; font-family: "Open Sans",sans-serif', a += "height: " + t + " !important ; width: " + i + " !important; top:" + r + " !important; left:" + n + " !important; background-color: #ffffff;", a += "margin: 4px !important; padding: 0px !important; overflow:auto;", a += 'font-family: "open_sansregular",helvetica neue,helvetica,arial,sans-serif;';
    var o = e.getElementById("cpwmsg");
    return !!o && (o.style.cssText = a, !0)
}
CPWbot_cs = CPWbot_cs || new CPWbot_cs_lib;
var OVERLAY_MESSAGE_WIDTH = "500px",
    OVERLAY_MESSAGE_HEIGHT = "200px",
    OVERLAY_MESSAGE_HEIGHT_MINIMIZED = "70px",
    OVERLAY_MESSAGE_TOP = "50px",
    OVERLAY_MESSAGE_LEFT = "50px";

function display_cpw_message(e, t, i) {
    if (e) {
        var n;
        if (n = e.getElementById("cpwmsg")) pass;
        else {
            var r = e.createElement("div"),
                a, n;
            if (r.style.width = "100%", r.style.height = window.innerHeight + "px", r.style.opacity = "0.7", r.style.backgroundColor = "#666666", r.id = "cpwbg", r.style.position = "absolute", r.style.top = "0px", r.style.left = "0px", e.body.appendChild(r), n = e.createElement("div")) {
                n.id = "cpwmsg", e.body.appendChild(n);
                var o, s = "url(data:image/png;base64," + "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" + ")",
                    l, d, _, c;
                update_msgdiv_css(e, OVERLAY_MESSAGE_HEIGHT, OVERLAY_MESSAGE_WIDTH, OVERLAY_MESSAGE_TOP, OVERLAY_MESSAGE_LEFT), n.setAttribute("role", "status");
                var u = "color: #ffffff; padding: 18px 10px 18px 174px; background-color: #D22D27 !important; background-image:" + s + "; background-repeat:no-repeat; background-position: 12px 14px; background-attachment: scroll;",
                    f = e.createElement("div"),
                    a;
                LP_set_style_attr(f, u), f.id = "cpwtitle", f.addEventListener("click", function() {
                    return toggle_cpw_dialog(e), !1
                }, !1), (a = e.createElement("div")).id = "msgbody", a.style.fontSize = "18px", a.style.padding = "10px 0px";
                var p = e.createElement("div"),
                    m = e.createElement("div");
                m.style.width = "100%", m.style.textAlign = "right";
                var g = gs("Automatic Password Change");
                LP_elt_set_text(m, g), f.appendChild(m), n.appendChild(f);
                var v = e.createElement("div");
                v.style.padding = "10px", n.appendChild(v), p.style.marginTop = "5px", p.style.marginBottom = "5px", p.style.fontSize = "14px", p.style.color = "#F09C0E";
                var y = gs("Please do not close this tab until LastPass is done updating your password.");
                LP_elt_set_text(p, y), v.appendChild(a), v.appendChild(p)
            }
        }(a = a || e.getElementById("msgbody")) && LP_elt_set_text(a, t)
    }
}

function cpw_hide_overlay(e, t) {
    if (!e) return !1;
    if (g_isfirefox);
    else {
        var i = e.getElementById("lpiframeoverlaycpwmsg");
        i && i.parentNode.removeChild(i)
    }
    return !0
}

function toggle_cpw_dialog(e) {
    if (!e) return !1;
    var t = e.getElementById("msgbody"),
        i;
    return !(!e.getElementById("cpwmsg") || !t) && ("none" == t.style.display ? (maximize_cpw_dialog(e), maximize_cpw_bg()) : (minimize_cpw_dialog(e), minimize_cpw_bg()), !0)
}

function maximize_cpw_dialog(e) {
    if (!e) return !1;
    var t = OVERLAY_MESSAGE_TOP,
        i = OVERLAY_MESSAGE_LEFT,
        n = OVERLAY_MESSAGE_WIDTH,
        r = OVERLAY_MESSAGE_HEIGHT,
        a = e.getElementById("msgbody"),
        o;
    return !(!e.getElementById("cpwmsg") || !a) && ("block" != a.style.display && (update_msgdiv_css(e, r, n, t, i), a.style.display = "block"), !0)
}

function minimize_cpw_dialog(e) {
    if (!e) return !1;
    var t = OVERLAY_MESSAGE_TOP,
        i = OVERLAY_MESSAGE_LEFT,
        n = OVERLAY_MESSAGE_WIDTH,
        r = OVERLAY_MESSAGE_HEIGHT,
        a = e.getElementById("msgbody"),
        o;
    return !(!e.getElementById("cpwmsg") || !a) && ("none" != a.style.display && (update_msgdiv_css(e, r = OVERLAY_MESSAGE_HEIGHT_MINIMIZED, n, t, i), a.style.display = "none"), !0)
}

function do_cpw_overlay_handler(e, t) {
    if (CPWbot_cs && CPWbot_cs.JSON && e && e.msg) {
        var i = CPWbot_cs.JSON.parse(e.msg);
        if (i) {
            var n = encodeURIComponent(i.symbolic);
            if (g_isfirefox) lpShowOverlay(t, 0, i.msg), lpSetOverlayStatus(t, ""), lpisadmin && do_cpw_debug(t);
            else {
                var r = encodeURIComponent(i.msg);
                info_log(t, "CA21", {
                    param1: r
                }), showoverlay(e, "&cpwbot=" + r + "&symbolic=" + n)
            }
        } else info_log(t, "CA22")
    }
}

function ping_req_handler(e, t) {
    var i = (new Date).getTime(),
        n = 0;
    void 0 !== t.timestamp && t.timestamp && (n = i - t.timestamp);
    var r = "";
    try {
        r = punycode.URLToASCII(e.location.href)
    } catch (e) {}
    sendBG({
        cmd: "ping_ack",
        timestamp: i,
        delta: n,
        id: t.id,
        url: r,
        docstate: get_docstate(e),
        flags: assemble_docflags_object(e)
    }, e)
}

function get_docstate(e) {
    return e ? void 0 !== e.readyState && e.readyState ? e.readyState : "undef" : null
}

function assemble_docflags_object(e) {
    if (!e || !e.location) return null;
    var t = e.location.origin ? e.location.origin : null,
        i;
    return {
        is_special_site: g_is_specialsite,
        in_cpwbot: g_in_cpwbot,
        tutorial_flags: g_tutorial_flags,
        need_dynamic_delay: g_need_dynamic_delay,
        has_frameset: 0 < e.getElementsByTagName("FRAMESET").length,
        domain: e.domain,
        origin: t
    }
}

function run_custom_js(e, t, i) {
    if (e) {
        "undefined" != typeof g_iscasper && g_iscasper && (this.stash_script = l, this.get_script = s, this.delete_script = d, this.prep_and_delete_priors = _);
        var n = _(e, i);
        try {
            if ("" != t) {
                if (!e.g_content_check_result || is_page_JSON(e)) return void(e.g_content_check_result = !1);
                var r = lp_gettld_url(e.location.href);
                if (("facebook.com" == r || "live.com" == r || "outlook.com" == r) && 0 == e.getElementsByTagName("form").length) return;
                t = "try{" + (t = t.replace(/lpcurrpage./g, "")) + "}catch(e){}";
                var a = e.createElement("script"),
                    o = e.createTextNode(t);
                a.appendChild(o), e.body && e.body.appendChild(a), l(e, n, a)
            }
        } catch (e) {}
    }

    function s(e, t) {
        var i = null;
        return (e = e || LP_derive_doc()) && t ? (e.script_stash ? void 0 === (i = e.script_stash[t]) && (i = null) : e.script_stash = {}, i) : null
    }

    function l(e, t, i) {
        return !!(e = e || LP_derive_doc()) && (e.script_stash || (e.script_stash = {}), !(!i || !t) && (e.script_stash[t] = i, !0))
    }

    function d(e, t) {
        if (!t || !e) return !1;
        var i = null,
            i;
        e.script_stash && ((i = e.script_stash[t]) && i.parentNode && (verbose_log("cleanup: " + t), i.parentNode.removeChild(i)), delete e.script_stash[t]);
        return !0
    }

    function _(e, t) {
        if (!(e = e || LP_derive_doc())) return "";
        var i = "_lastpass_",
            n = "";
        if (t && "string" == typeof t) {
            var r = s(e, n = i + t);
            if (d(e, n), "3" === t)
                for (var a = 1; a < 3; a++) {
                    var o = i + a.toString();
                    r = s(e, o), d(e, o)
                }
        }
        return r = null, n
    }
}

function do_result_div_handler(e, t) {
    return g_isdebug && CPWbot_cs && CPWbot_cs.do_result_div(e, t.msg), !0
}

function hide_result_div_handler(e, t) {
    return g_isdebug && CPWbot_cs && CPWbot_cs.hide_result_div(e), !0
}

function need_dynamic_delay(e) {
    if (!e) return !1;
    var t = LP_elt_get_text(e.head),
        i;
    return 0 <= LP_elt_get_text(e.body).indexOf("\x3c!-- ko") || (0 <= t.indexOf("require") || 0 <= t.indexOf("lazyload"))
}

function minimize_cpw_bg() {
    g_ischrome ? chrome_runtime_sendMessage({
        cmd: "minimize_cpw_dialog"
    }, function(e) {
        pass
    }) : "undefined" != typeof safari ? safari.self.tab.dispatchMessage("minimize_cpw_dialog", {}) : "undefined" != typeof g_isfirefoxsdk && g_isfirefoxsdk && send_message({
        messagetype: "minimize_cpw_dialog"
    })
}

function maximize_cpw_bg() {
    g_ischrome ? chrome_runtime_sendMessage({
        cmd: "maximize_cpw_dialog"
    }, function(e) {
        pass
    }) : "undefined" != typeof safari ? safari.self.tab.dispatchMessage("maximize_cpw_dialog", {}) : "undefined" != typeof g_isfirefoxsdk && g_isfirefoxsdk && send_message({
        messagetype: "maximize_cpw_dialog"
    })
}

function get_doc_location_href(e) {
    try {
        return e.location ? e.location.href : ""
    } catch (e) {
        return ""
    }
}

function getmydocnum(e) {
    if (g_isfirefox) {
        if (!(e = e || LP_derive_doc())) return 0;
        if (void 0 !== e.g_docnum) return e.g_docnum;
        var t = lpGetBrowserForDocument(e),
            i = get_tabid_from_browser(t);
        if (null == i) return console_error("did not found matching tab for given tabid, bail"), 0;
        ff_setdocnum_conditional(e, i);
        var n = g_CS_tops[i],
            r;
        return t.contentDocument == e && (g_CS_tops[i] = e.g_docnum), e.g_docnum
    }
    return g_docnum
}
var g_is_selenium = !1,
    g_selenium_bits = -1,
    LPSELENIUMBITSDIV = "__lpseleniumbitsdiv";

function check_for_selenium_bits(e) {
    if (!e) return -1;
    if (!g_isdebug) return -1;
    var t = -1,
        i = e.getElementById(LPSELENIUMBITSDIV);
    if (i) {
        var n = parseInt(LP_elt_get_text(i));
        isNaN(n) || (g_selenium_bits = t = n), g_is_selenium = !0, sendBG({
            cmd: "from_selenium",
            bits: t,
            url: get_doc_location_href(e),
            docstate: e.readyState
        })
    } else -1 != g_selenium_bits && (t = g_selenium_bits);
    return t
}
//# sourceMappingURL=sourcemaps/cpwbot_cs.js.map