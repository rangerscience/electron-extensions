var data = null,
    existing = null,
    origusername = null,
    origpassword = null,
    g_start_time = null,
    POLL_MAXTIME = 3e5,
    g_pwlen = 0,
    pass = !0;

function onLoad(e) {
    if (e) {
        var t = getBG(),
            a;
        if (t.g_site_data && (a = t.g_site_data.aid), void 0 === a) data = t.g_site_data;
        else {
            data = t.g_site_data;
            var n = !1;
            void 0 !== t.g_site_data.save_all && 1 == t.g_site_data.save_all && (n = !0);
            var s = get_record(a);
            for (var d in s) data[d] = s[d]
        }
        for (var d in my_aid = get_record_id(data), show_cpw_dialog("new"), data = t.g_site_data, t.g_site_data) data[d] = t.g_site_data[d];
        t.g_site_data = null
    } else get_data("site", function() {
        onLoad(!0)
    })
}
var CPW_WAKETIME = 97,
    my_aid = null;

function docpwbtn(e) {
    var t = getBG(),
        a = document;
    if (!a || !t || !data) return !1;
    t.sendLpImprove("change_password_now_click");
    var n = !1,
        s = data.aid,
        d = data.url;
    return g_cpwbot && d && void 0 !== t.dopwchange && (g_start_time = (new Date).getTime(), t.cpwbot_preinit(), g_cpw_progress_ctr = 20, show_cpw_dialog("progress"), setTimeout(function() {
        insert_cpw_placeholder_msg(a, gs("LastPass is loading..."))
    }, 5003), setTimeout(function() {
        cpw_status_check()
    }, CPW_WAKETIME), g_ischrome ? get_selected_tab(null, function(e) {
        t.dopwchange(s, n, e)
    }) : t.dopwchange(s, n)), !1
}
var g_cpw_progress_ctr = 0,
    g_lastmsg = "";

function cpw_status_check() {
    var e = getBG(),
        t = document;
    if (!t || !e || !data) return !1;
    var a = !1,
        n = !1,
        s = !1,
        d = !1,
        r = !1,
        l = !1,
        i = t.getElementById("cpwmsgdiv"),
        o;
    i && (g_ischrome ? set_innertext(i, e.cpwbot_get_user_debug_messages()) : e.cpwbot_get_user_debug_messages()), g_ischrome ? cpw_progress_update(e.cpwbot_get_dialog_msg()) : e.cpwbot_get_dialog_msg();
    var p = get_current_state(!0);
    switch (lpdbg("site", "BG.current_state is " + p), p) {
        case "FAIL":
            n = a = !0;
            break;
        case "CAPTCHA":
            s = n = a = !0;
            break;
        case "DOCAPTCHA":
            d = !0;
            break;
        case "TIMEOUT":
            l = n = a = !0;
            break;
        case "FAIL_PW_SAVED":
            r = n = a = !0;
            break;
        case "DONE":
        case "OK":
            a = !0;
            break;
        case 0:
        case null:
            a = !1
    }
    if (d) g_start_time = (new Date).getTime();
    else {
        var c = (new Date).getTime();
        g_start_time + POLL_MAXTIME < c && (n = a = !0, lpdbg("site", "max timeout"))
    }
    a ? show_cpw_dialog(n ? s ? "captcha" : l ? "timeout" : r ? "fail_pw_saved" : "fail" : "dismiss") : setTimeout(function() {
        cpw_status_check()
    }, CPW_WAKETIME)
}

function docpwdebug(e) {
    var t = getBG(),
        a = document;
    if (!a || !t || !data) return !1;
    if (g_cpwbot) {
        if (document.getElementById("cpwmsgdiv")) return !1;
        var n = a.createElement("div");
        n.style.height = "200px", n.style.width = "100%", n.style.overflow = "auto", n.style.backgroundColor = "blue", n.style.color = "yellow", n.style.padding = "3px", n.id = "cpwmsgdiv";
        var s = a.getElementById("sitebody");
        s ? s.appendChild(n) : a.body.appendChild(n)
    }
    return !1
}

function show_cpw_button(e) {
    var t = getBG(),
        a;
    if (!document || !t || !e) return !1;
    var n = !1;
    !g_cpwbot && void 0 !== t.g_cpwbot && t.g_cpwbot && (g_cpwbot = t.g_cpwbot)
}

function hide_cpw_dialog() {
    var e = getBG(),
        t = document;
    if (!t || !e || !data) return !1;
    var a = t.getElementById("cpwdialog");
    a && (a.style.display = "none");
    var n = t.getElementById("modalbg");
    if (n && (n.style.display = "none"), void 0 !== e.cpwbot_halt) {
        var s = get_current_state();
        "FAIL" != s && "CAPTCHA" != s && "DONE" != s && "OK" != s && "TIMEOUT" != s && 0 != s && null !== s && e.cpwbot_halt()
    }
    data && data.openchpw && e.close_cpw_tabs(), this.close()
}
var event_flags = 0,
    EV_CX = 1,
    EV_OK = 2,
    g_cpw_heard_from_bg = !1;

function append_text_with_b(e, t) {
    var a = t.indexOf("<b>"),
        n = t.indexOf("</b>");
    e.appendChild(e.ownerDocument.createTextNode(t.substring(0, a)));
    var s = e.ownerDocument.createElement("b");
    set_innertext(s, t.substring(a + 3, n)), e.appendChild(s), e.appendChild(e.ownerDocument.createTextNode(t.substring(n + 4)))
}

function show_cpw_dialog(e, t, a, n, s) {
    var d = getBG(),
        r = document;
    if (!r || !d || !data) return !1;
    var l = r.getElementById("modalbg");
    l.style.width = r.body.clientWidth, l.style.height = r.body.clientHeight, l.style.display = "block";
    var i = r.getElementById("dlghdg"),
        o = r.getElementById("dlghtml");
    o.style.fontSize = "12px";
    var p = r.getElementById("bcnd"),
        c = r.getElementById("bokd"),
        _ = r.getElementById("bdis"),
        g = null;
    switch (p && 0 == (event_flags & EV_CX) && (p.addEventListener("click", function(e) {
        hide_cpw_dialog()
    }), r.getElementById("dlgclose").addEventListener("click", function(e) {
        hide_cpw_dialog()
    }), _.addEventListener("click", function(e) {
        hide_cpw_dialog()
    }), event_flags |= EV_CX), c && 0 == (event_flags & EV_OK) && (c.addEventListener("click", function(e) {
        return docpwbtn(e), !1
    }), event_flags |= EV_OK), set_innertext(p, gs("No, Thanks")), set_innertext(c, gs("Change Password Now")), set_innertext(_, gs("Dismiss")), set_innertext(i, sprintf(gs("%s Password One-Click Change"), "LastPass")), e) {
        case "new":
            g_cpw_heard_from_bg = !1, LP_decimate_children(o);
            var m = r.createElement("p");
            set_innertext(m, sprintf(gs("%s will now attempt to change your password to a strong, generated password that will be saved in your vault and known only to you."), "LastPass")), o.appendChild(m), o.appendChild(r.createElement("br")), append_text_with_b(m = r.createElement("p"), sprintf(gs("In order to complete the process, %s will have to log in to %s and navigate through a number of windows quickly. It is normal to see windows flashing and changing quickly, and may take several moments. We'll let you know when you're all set!"), "LastPass", "<b>" + of (data.name) + "</b>")), o.appendChild(m), p.style.display = "block", c.style.display = "block", _.style.display = "none";
            break;
        case "progress":
            LP_decimate_children(o);
            var h = r.createElement("b");
            set_innertext(h, gs("Overall Progress:")), o.appendChild(h), o.appendChild(r.createElement("br"));
            var w = r.createElement("div");
            w.className = "progress_container";
            var b = r.createElement("div");
            b.className = "progress_bar", b.id = "progress_bar", w.appendChild(b), o.appendChild(w), (w = r.createElement("div")).id = "stepbystep", o.appendChild(w), (w = r.createElement("div")).id = "advanced", o.appendChild(w), r.getElementById("progress_bar").style.width = "10%", p.style.display = "none", c.style.display = "none", _.style.display = "none";
            break;
        case "update":
            if (r.getElementById("progress_bar").style.width = t + "%", a) {
                var y = r.createElement("p");
                "DOCAPTCHA" == get_current_state() && (y.className = "boldred");
                var u = r.createTextNode(a);
                y.appendChild(u), r.getElementById("stepbystep").appendChild(y), g_cpw_heard_from_bg || (g_cpw_heard_from_bg = !0, (g = r.getElementById("cpw_placeholder_msg")) && g.parentNode.removeChild(g))
            }
            if (n) {
                var y = r.createElement("i"),
                    u = r.createTextNode(gs("Complete!")),
                    m;
                y.appendChild(u), (m = r.getElementById("stepbystep").lastChild) && m.appendChild(y)
            }
            if (s) {
                var y = r.createElement("p"),
                    u = r.createTextNode(s);
                y.appendChild(u), r.getElementById("advanced").appendChild(y)
            }
            break;
        case "dismiss":
            var m;
            LP_decimate_children(o), o.appendChild(r.createElement("br")), o.appendChild(r.createElement("br")), append_text_with_b(m = r.createElement("p"), sprintf(gs("Congratulations! Your password for %s was updated, and is now saved in your LastPass vault. Your change will sync on every device."), "<b>" + of (data.name) + "</b>")), o.appendChild(m), p.style.display = "none", c.style.display = "none", _.style.display = "block", set_innertext(_, gs("OK"));
            break;
        case "fail":
            var m;
            LP_decimate_children(o), o.appendChild(r.createElement("br")), o.appendChild(r.createElement("br")), append_text_with_b(m = r.createElement("p"), sprintf(gs("We're sorry. We were not able to change your password automatically for %s. Your password was not changed."), "<b>" + of (data.name) + "</b>")), o.appendChild(m), p.style.display = "none", c.style.display = "none", _.style.display = "block";
            break;
        case "captcha":
            LP_decimate_children(o), o.appendChild(r.createElement("br")), o.appendChild(r.createElement("br"));
            var m = r.createElement("p");
            set_innertext(m, gs("Unable to proceed, the website does not allow automated password change.")), o.appendChild(m), p.style.display = "none", c.style.display = "none", _.style.display = "block";
            break;
        case "timeout":
            LP_decimate_children(o), o.appendChild(r.createElement("br")), o.appendChild(r.createElement("br"));
            var m = r.createElement("p");
            set_innertext(m, gs("Timed out waiting for the page to load.  Retry?")), o.appendChild(m), p.style.display = "none", c.style.display = "none", _.style.display = "block";
            break;
        case "fail_pw_saved":
            var m;
            LP_decimate_children(o), o.appendChild(r.createElement("br")), o.appendChild(r.createElement("br")), append_text_with_b(m = r.createElement("p"), sprintf(gs("We're sorry. We were not able to change your password automatically for %s. Your password was not changed."), "<b>" + of (data.name) + "</b>") + gs("The random password that was generated has been saved to your vault.")), o.appendChild(m), p.style.display = "none", c.style.display = "none", _.style.display = "block"
    }
    var v = r.getElementById("cpwdialog");
    v.style.display = "block", v.style.height = "250px", v.style.width = "470px", v.style.left = (parseInt(r.body.clientWidth) - 470) / 2 + "px", g_ischrome || (g_cpwbot_pwchangestate = "init_state_dingbats")
}
var g_cpwbot_pwchangestate = null;

function cpw_progress_update(e) {
    e && e != g_lastmsg && (90 < (g_cpw_progress_ctr += 20) && (g_cpw_progress_ctr = 95), show_cpw_dialog("update", g_cpw_progress_ctr, g_lastmsg = e, !1, ""))
}

function get_current_state(e) {
    if (g_ischrome) return getBG().cpwbot_getpwchangestate();
    var t = g_cpwbot_pwchangestate;
    return e && getBG().cpwbot_getpwchangestate(), t
}

function insert_cpw_placeholder_msg(e, t) {
    var a = (e = e || document).getElementById("cpw_placeholder_msg");
    if (t && !g_cpw_heard_from_bg && null === a) {
        var n = e.createElement("p"),
            s = e.createTextNode(t);
        n.id = "cpw_placeholder_msg", n.appendChild(s), e.getElementById("stepbystep").appendChild(n)
    }
}
//# sourceMappingURL=sourcemaps/site1.js.map