function do_save_site_success_msg(t) {
    var i;
    return !!g_show_save_success_msg && popup_notification_msg(t, {
        waitms: 1500,
        loc: "ur",
        id: "__lpsavemsgdiv",
        msg: lpgs("You have saved your password to your LastPass Vault.")
    })
}

function do_iframe_sad_msg(t) {
    var i;
    return !!g_show_safari_csp_msg && popup_notification_msg(t, {
        waitms: 3500,
        loc: "urv",
        id: "__lpsadmsgdiv",
        msg: lpgs("The LastPass popup has been blocked from loading on this site. Please fill using the LastPass Icon.")
    })
}

function popup_notification_msg(t, i) {
    if (!(t = t || LP_derive_doc()) || !i) return !1;
    var e = i.loc,
        o = i.id,
        n = i.waitms,
        r = i.msg,
        a = sprintf;
    "undefined" != typeof g_isie && g_isie && (init_LPfn(), LPfn && (a = LPfn.sprintf));
    var p = window,
        s;
    p || "undefined" == typeof LP || (p = LP.getBrowser().ContentWindow);
    if (!(t && i && r && o && e && p)) return !1;
    var d = t.createElement("DIV");
    if (d.id = o, g_40notify) {
        var l = t.createElement("div");
        l.style.height = "12px", l.style.backgroundColor = g_40colors.header;
        var c = t.createElement("img");
        c.src = g_40_icons["8x8"];
        var m = "vertical-align:top !important; margin:2px !important;";
        c.style.cssText = m, l.appendChild(c);
        var g, _ = "position:absolute !important; border-style:transparent !important; border-width:1px !important; border-color:transparent !important; font-size:9px; font-family: Arial,Helvetica,sans-serif; height:11px !umportant ; width: 11px !important; top:0px !important; right:0px !important; background-color: transparent; margin: 0 !important; ; padding: 0px 2px !important; text-align:center; cursor: pointer; color: white; display:inline-block;";
        (g = t.createElement("div")).style.cssText = _, LP_elt_set_text(g, "X"), l.appendChild(g), d.appendChild(l)
    } else {
        var g, _ = "position:absolute !important; border-style:transparent !important; border-width:1px !important; border-color:transparent !important; font-size:9px; font-family: Arial,Helvetica,sans-serif; height:11px !umportant ; width: 11px !important; top:0px !important; right:0px !important; background-color: transparent; margin: 0 !important; ; padding: 0px 2px !important; text-align:center; cursor: pointer; ";
        (g = t.createElement("div")).style.cssText = _, LP_elt_set_text(g, "X"), d.appendChild(g)
    }
    var u = t.createElement("div");
    u.id = o + "_text", d.appendChild(u), g_40notify && (u.style.cssText = "padding: 5px 5px 5px 15px !important;"), r && LP_elt_set_text(u, r);
    var A = "210px",
        x = LP_getWindowWidth(p);
    if (!x) return !1;
    var b = LP_getWindowHeight(p);
    b = b || 0;
    var y = 0,
        v = 0;
    switch (e) {
        case "ul":
            v = y = "25px";
            break;
        case "ulv":
            y = 25 + LP_pos_viewport(p)[0] + "px", v = 25 + LP_pos_viewport(p)[1] + "px";
        case "dock":
            break;
        case "urv":
            y = x - parseInt(A) - 30 + "px", v = 25 + LP_pos_viewport(p)[1] + "px";
            break;
        case "ur":
        default:
            y = x - parseInt(A) - 30 + "px", v = "25px"
    }
    var f, h, w = "position:absolute !important; visibility:visible !important; z-index:" + CLICKABLE_ICON_ZINDEX + " !important; border-style:transparent !important; border-width:1px !important; border-color:#4c4c4c !important; font-size:14px; font-family: Arial,Helvetica,sans-serif; width: " + A + " !important; top:" + v + " !important; left:" + y + " !important; background-color: #e6e6e6; margin: 4px !important; border-radius: 4px; padding: 5px 5px 5px 15px !important; background-image:" + ("url(data:image/png;base64," + "iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMi1jMDAxIDYzLjEzOTQzOSwgMjAxMC8xMC8xMi0wODo0NTozMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpDQ0JFNTgxNzA4MjA2ODExOTJCMEZBNzdDQkU2Qjg4RiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1RTA4N0Y4OEZCQUYxMUUyOTAyNEMwRUQyN0ZDRTk1QyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1RTA4N0Y4N0ZCQUYxMUUyOTAyNEMwRUQyN0ZDRTk1QyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgRWxlbWVudHMgMTEuMCBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyMEEzMzFENkUxMjA2ODExOTJCMEZBNzdDQkU2Qjg4RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDQ0JFNTgxNzA4MjA2ODExOTJCMEZBNzdDQkU2Qjg4RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqEZ7U4AAAAwUExURfL6+uHMzaoWLIoDFKVJJ2oEFsQaK7cCHMtfaNWrEcFJOsg2PsqnqdWGi584RAAAAIK7gZ4AAAAQdFJOU////////////////////wDgI10ZAAAAWUlEQVR42jzMUQ4AMQQEUKpoFnX/2+403exEZN4H1DHsZjQ9/kcOgsN4fVhURXVhxkRsBkxnPmCOg8xEzRyAuAOJEwVk0cIPAbbIriG5D6Zi31Fq/dOvAAMADDMDTO9yI2MAAAAASUVORK5CYII=" + ")") + "; background-repeat:no-repeat; background-position: left top;background-attachment: scroll;";
    if (void 0 !== d.style.opacity ? w += "opacity: 1.0;" : w += "filter:alpha(opacity=100)", g_40notify) {
        var E = a("url(%s)", g_40_icons["8x8"]),
            w = "position:absolute !important; visibility:visible !important; z-index:" + CLICKABLE_ICON_ZINDEX + " !important; border-style:transparent !important; border-width:1px !important; border-color:#4c4c4c !important; font-size:14px; font-family: Arial,Helvetica,sans-serif; width: " + A + " !important; top:" + v + " !important; left:" + y + " !important; background-color: #e6e6e6; margin: 0px !important; padding:0px !important; border-radius: 4px; background-image:" + E + "; background-repeat:no-repeat; background-position: left top;background-attachment: scroll;";
        void 0 !== d.style.opacity ? w += "opacity: 1.0;" : w += "filter:alpha(opacity=100)", d.style.cssText = w
    } else d.style.cssText = w;
    return void 0 !== t.body ? t.body.appendChild(d) : t.getElementById("main") && t.getElementById("main").appendChild(d), n && "number" == typeof n && 0 < n && setTimeout(function() {
        return close_popup_notification_msg(t, d.id, 0), !1
    }, n), LP_addEventHandler(g, "click", function() {
        return close_popup_notification_msg(t, d.id, null), !1
    }), !0
}

function close_popup_notification_msg(t, i, e) {
    if (!(t = t || LP_derive_doc()) || !i) return !1;
    var o = t.getElementById(i);
    if (o) {
        if (void 0 === e ? e = 0 : "string" == typeof e && (e = parseInt(e)), null === e || isNaN(e)) return o.parentNode.removeChild(o), !1;
        e < FADE_MAXSTATES ? (void 0 !== o.style.opacity ? o.style.opacity = (100 - 100 / FADE_MAXSTATES * (e + 1)) / 100 : o.style.filter = "alpha(opacity=" + (100 - 20 * (e + 1)) + ")", e++, setTimeout(function() {
            return close_popup_notification_msg(t, o.id, e), !1
        }, 10)) : o.parentNode.removeChild(o)
    }
    return !1
}

function destroy_save_site_success_msg(t, i, e) {
    return close_popup_notification_msg(t, i, e)
}
var MSGDIVID = "__lpsuggestmsgdiv",
    g_tutorial_flags;

function do_save_suggest_msg(t, i) {}
var TUTORIAL_FLAG_LPOV = 1,
    TUTORIAL_FLAG_CONTEXT = 2,
    g_context_tip_shown = 0;

function draw_context_tip(t, i) {}

function destroy_save_suggest_msg(t, i, e) {
    return !1
}
//# sourceMappingURL=sourcemaps/contextnotify_cs.js.map