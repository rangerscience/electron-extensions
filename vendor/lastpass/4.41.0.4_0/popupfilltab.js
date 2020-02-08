var g_reference_url = null,
    g_rowtypes = null,
    g_rowtypes_initial = null,
    g_inputtype = null,
    g_switchedtabs = !1,
    g_lastinput = null,
    g_lastactive = null,
    g_lastchoose = null,
    g_lastinputid = null,
    g_lastmoreopen = null,
    g_lastshownavbar = null,
    g_initial_searchtext = null;
if (void 0 === verbose) var verbose = !1;
var g_MAXPWLENID = "maxpwlen",
    g_ctr_dofilter = 0,
    g_ctr_poll = 0,
    g_ctr_pollresponse = 0,
    times = {};
times.start = LP_gettime();
var g_icon_number_hint = !0,
    g_creditcard_profile_annotate = !0,
    g_nomatches_triggers_save = !0,
    g_selected_never_row = null,
    g_selected_more_row = null,
    g_more_submenu_aid = null,
    g_more_submenu_ffid = null,
    g_clickable_input_on_password = !0,
    g_in_lpframe = !0;
document.addEventListener("DOMContentLoaded", function() {
    loadit()
});
var dotrans = !0;

function loadit() {
    document && document.location && document.location.href && -1 == document.location.href.indexOf("popupfilltab.html") || (g_ischrome ? (L("IF -> BG : cmd=getpopupfilldata"), chrome_runtime_sendMessage({
        cmd: "getpopupfilldata"
    }, function(e) {
        L("BG -> IF : response to getpopupfilldata"), null != e ? (translationInit(e.reg_obj), doInit(e)) : "function" == typeof closePopups && closePopups()
    })) : "undefined" != typeof safari ? (safari.self.removeEventListener("message", handleMessage, !1), safari.self.addEventListener("message", handleMessage, !1), safari.self.tab ? safari.self.tab.dispatchMessage("getpopupfilldata", {}) : safari.extension.globalPage.contentWindow && safari.extension.globalPage.contentWindow.message_handler({
        name: "getpopupfilldata",
        message: {},
        target: window
    })) : g_isfirefoxsdk && (window.addEventListener("message", handleMessage, !1), send_message({
        messagetype: "getpopupfilldata"
    })), g_pollid = setInterval(function() {
        getInputPoll()
    }, 100), notifybg_create_ack())
}
var KEY_UP = 38,
    KEY_DOWN = 40,
    KEY_ENTER = 13,
    ELEMENT_NODE = 1,
    KEY_ESCAPE = 27;

function LP_frame_keypress_handler(e) {
    var t = e.keyCode;
    if (t == KEY_ESCAPE) closePopups(!1, {
        option: "close"
    });
    else if (t == KEY_TAB) {
        var n = LP_getEventTarget(e);
        "undefined" != typeof g_new_superbar && g_new_superbar && "savesite" != g_currenttab || LP_stopEventPropagation(e)
    }
    return !1
}

function neverdomain_handler(e, t) {
    sendRequest({
        cmd: "neverdomain",
        url: g_reference_url,
        neverforall: 1,
        frompopupiframe: 1
    }), closePopups()
}

function neverpage_handler(e, t) {
    sendRequest({
        cmd: "neverpage",
        url: g_reference_url,
        neverforall: 1,
        frompopupiframe: 1
    }), closePopups()
}

function cr_autofill(e) {
    sendRequest({
        cmd: "autofillaid",
        aid: e,
        from_iframe: !0,
        no_manualfill_on_saveall: !0,
        fromiframe: 1,
        source: "form"
    }), closePopups(!1, {
        option: "action"
    })
}

function autologin(e) {
    sendRequest({
        cmd: "autologinaid",
        aid: e,
        no_manualfill_on_saveall: !0,
        fromiframe: 1,
        source: "form"
    }), closePopups(!1, {
        option: "action"
    })
}

function cr_fillform(e) {
    sendRequest({
        cmd: "fillformffid",
        ffid: e,
        fromiframe: 1,
        source: "form"
    }), closePopups(!1, {
        option: "action"
    })
}

function cr_copytoclipboard(e) {
    sendRequest({
        cmd: "copytoclipboard",
        g_data: e,
        action: "generatePassword",
        source: "form"
    })
}

function notifybg_create_ack() {
    sendRequest({
        cmd: "popupfillscreateack"
    })
}

function sendRequest(e) {
    if (null != e)
        if (e.cmd && "popupfillinputget" != e.cmd && "popupfilliconnumber" != e.cmd && L("IF -> BG : cmd=" + e.cmd), g_ischrome) try {
            chrome_runtime_sendMessage(e, function() {})
        } catch (e) {} else g_issafari ? safari.self.tab ? safari.self.tab.dispatchMessage(e.cmd, e) : safari.extension && safari.extension.globalPage && safari.extension.globalPage.contentWindow && safari.extension.globalPage.contentWindow.message_handler({
            name: e.cmd,
            message: e,
            target: window
        }) : g_isfirefoxsdk ? (e.messagetype = e.cmd, send_message(e)) : g_iscasper && "function" == typeof t_sendmsg && t_sendmsg(e)
}

function handleMessage(e) {
    if (g_isfirefoxsdk) {
        if (e.origin != window.location.origin) return;
        e.message = e.data, e.name = e.data.messagetype
    }
    "message" == e.name && "gotpopupfillinput" != e.message.cmd && L("BG -> IF : cmd=" + e.message.cmd), "gotpopupfilldata" == e.name || "gotpopupfilldata" == e.message.cmd ? (translationInit(e.message.reg_obj), doInit(e.message)) : "gotpopupfillinput" == e.name || "gotpopupfillinput" == e.message.cmd ? (null == g_initial_searchtext && (g_initial_searchtext = e.message.inputstr), g_ctr_pollresponse++, !g_switchedtabs && e.message.inputstr == g_lastinput && g_lastactive == e.message.active && e.message.inputid == g_lastinputid && e.message.moreopen == g_lastmoreopen && e.message.shownavbar == g_lastshownavbar && e.message.choose == g_lastchoose || dofilter(e.message.inputstr, e.message.inputid, e.message.active, e.message.choose, e.message.moreopen, SEARCH_SITE_AND_USER, e.message.issaveall, e.message.inputtype, e.message.shownavbar), g_lastinput = e.message.inputstr, g_lastinputid = e.message.inputid, g_lastactive = e.message.active, g_lastchoose = e.message.choose, g_lastmoreopen = e.message.moreopen, g_lastshownavbar = e.message.shownavbar, g_switchedtabs = !1) : "gotpopupfillgenerateprefs" == e.name || "gotpopupfillgenerateprefs" == e.message.cmd ? null == e.message.prefstr || e.message.prefstr.length <= 0 ? verbose_log("unable to get prefs from BG") : handleGotGeneratePrefs(e.message.prefstr, e.message.genpwstr, e.message.genpwpattern) : "gotpopupfillsave" == e.name || "gotpopupfillsave" == e.message.cmd ? null != e.message.formdata2 ? populateSave(e.message) : null != e.message.close ? closePopups() : (null != e.message.prompting && (g_pollSave_max_retry = 600), pollSaveSafari()) : "didpwchallenge" != e.name && "didpwchallenge" != e.message.cmd || null == typeof e.message || (master_challenge_response_handler(e.message.result, g_safari_master_challenge_success_callback_fn, g_safari_master_challenge_failure_callback_fn), g_safari_master_challenge_failure_callback_fn = g_safari_master_challenge_success_callback_fn = null)
}

function pollSaveSafari(e) {
    g_pollSaveSafari_ctr < g_pollSave_max_retry ? (g_pollSaveSafari_ctr++, setTimeout(function() {
        sendRequest({
            cmd: "popupfillsaveget",
            url: g_reference_url
        })
    }, g_pollSave_retry_timeout)) : verbose_log("failed to get form information from CS")
}
var g_text_created_popup = !1;

function dofilter(e, t, n, s, r, a, o, i, l) {
    g_ctr_dofilter++;
    var _ = !1;

    function p(e) {
        0
    }
    if (p("dofilter called with SEARCH string " + e), null == e && (e = ""), "savesite" != g_currenttab || o) {
        var d = document.getElementsByTagName("td"),
            c = [],
            u = [];
        if (g_switchedtabs && (g_selected_row = -1, e = ""), g_selected_row < 0 && 0 != n) {
            if (g_initial_searchtext != e ? (g_inputstr_initial_from_kbdnav = "", p("F4")) : g_text_created_popup ? (g_inputstr_initial_from_kbdnav = e, e = "", p("F1")) : 0 != n ? (g_inputstr_initial_from_kbdnav = e, e = "", p("F3")) : p("F2"), "none" == document.getElementById("lptabpopupformfills").style.display) n = g_selected_row = 0, p("F5");
            else if ("none" == document.getElementById("lptabpopup").style.display) {
                e = "";
                for (var f = d, g = n = g_selected_row = 0; g < d.length; g++) 0 == d[g].id.indexOf("tdpopuprow") && g_selected_row++;
                ROW_START = g_selected_row, p("F6")
            }
        } else g_selected_row < 0 && 0 == n ? g_initial_searchtext != e ? (g_inputstr_initial_from_kbdnav = "", p("F7")) : (g_inputstr_initial_from_kbdnav = e, g_text_created_popup = !0, e = "", p("F8")) : g_inputstr_freeze ? (e = "", p("F9")) : "" !== g_inputstr_initial_from_kbdnav && (p("F10"), e !== g_inputstr_initial_from_kbdnav ? (g_inputstr_initial_from_kbdnav = "", p("SEARCH TEXT CHANGED, FILTER initial")) : (e = "", p("F11")));
        p("SEARCH string is now " + e);
        for (var m = 0, h = 0, v; h < d.length; h++)
            if (d[h].id && (0 == d[h].id.indexOf("tdpopuprow") || 0 == d[h].id.indexOf("tdpopupffrow"))) {
                var w = "tr" + d[h].id.substr(2),
                    y = document.getElementById(w),
                    b = y.getAttribute("sitename"),
                    x = y.getAttribute("username"),
                    E = y.getAttribute("profilename");
                null == b && (b = ""), null == x && (x = ""), null == E && (E = ""), e.length <= 0 ? "none" == document.getElementById("lptabpopupformfills").style.display && 0 == d[h].id.indexOf("tdpopuprow") || "none" == document.getElementById("lptabpopup").style.display && 0 == d[h].id.indexOf("tdpopupffrow") ? (u.push(y), unhighlight_row(y), m++) : c.push(y) : (!a && 0 == get_innertext(d[h]).trim().toLowerCase().indexOf(e.toLowerCase()) || a && 0 <= b.trim().toLowerCase().indexOf(e.toLowerCase()) && "none" == document.getElementById("lptabpopupformfills").style.display || a && 0 <= x.trim().toLowerCase().indexOf(e.toLowerCase()) && "none" == document.getElementById("lptabpopupformfills").style.display || a && 0 <= get_innertext(d[h]).trim().toLowerCase().indexOf(e.toLowerCase()) && "none" == document.getElementById("lptabpopup").style.display) && ("none" == document.getElementById("lptabpopupformfills").style.display && 0 == d[h].id.indexOf("tdpopuprow") || "none" == document.getElementById("lptabpopup").style.display && 0 == d[h].id.indexOf("tdpopupffrow")) ? (highlight_row(y, e), u.push(y), m++) : c.push(y)
            } for (v in c) {
            var S;
            if (c[v].style.display = "none", g_outline_hover)(S = c[v].children[0]).className = S.className.replace(/ ?\bshowfocus\b/, "");
            else c[v].className = c[v].className.replace(/ ?\bshowfocus\b/, "");
            if (unhighlight_row(c[v]), g_visual_cue_on_hover)
                if (0 == c[v].id.indexOf("trpopuprow")) {
                    var R = "expand",
                        I = c[v].id.replace("trpopuprow", R),
                        P;
                    null != (P = document.getElementById(I)) && (P.style.display = "none")
                } else 0 == c[v].id.indexOf("trpopupffrow") && (R = "expandff", I = c[v].id.replace("trpopupffrow", R), null != (P = document.getElementById(I)) && (P.style.display = "none"))
        }
        for (v in u) {
            var S;
            if (u[v].style.display = "", g_outline_hover)(S = u[v].children[0]).className = S.className.replace(/ ?\bshowfocus\b/, "");
            else u[v].className = u[v].className.replace(/ ?\bshowfocus\b/, "")
        }
        if (0 <= g_selected_row) {
            g_selected_row += n, g_selected_row >= ROW_START + m ? g_selected_row = ROW_START + m - 1 : g_selected_row < ROW_START && (g_selected_row = ROW_START);
            for (var L = ROW_START, h = 0; h < u.length; h++)
                if (u[h].id && "none" != u[h].style.display) {
                    if (g_selected_row == L) {
                        if (s) {
                            var A;
                            0 == (A = u[h]).id.indexOf("trpopuprow") && null != A.getAttribute("aid") ? autologin(A.getAttribute("aid")) : A.click()
                        } else {
                            if (r) {
                                var A = u[h];
                                return g_currenttab = "more", doTitleBar(document, g_currenttab), void more_popupaction(document, A)
                            }
                            var S, k;
                            g_outline_hover ? (S = u[h].children[0]).className += " showfocus" : u[h].className += " showfocus";
                            if (u[h].scrollIntoView(!1), g_visual_cue_on_hover)
                                if (0 == u[h].id.indexOf("trpopuprow")) {
                                    var R = "expand",
                                        I = u[h].id.replace("trpopuprow", R),
                                        P;
                                    null != (P = document.getElementById(I)) && (P.style.display = "")
                                } else 0 == u[h].id.indexOf("trpopupffrow") && (R = "expandff", I = u[h].id.replace("trpopupffrow", R), null != (P = document.getElementById(I)) && (P.style.display = ""))
                        }
                        if (!g_visual_cue_on_hover) break
                    } else if (g_visual_cue_on_hover)
                        if (0 == u[h].id.indexOf("trpopuprow")) {
                            var R = "expand",
                                I = u[h].id.replace("trpopuprow", R),
                                P;
                            null != (P = document.getElementById(I)) && (P.style.display = "none")
                        } else 0 == u[h].id.indexOf("trpopupffrow") && (R = "expandff", I = u[h].id.replace("trpopupffrow", R), null != (P = document.getElementById(I)) && (P.style.display = "none"));
                    L++
                }
        }
        if (g_icon_number_hint)
            if ("sites" == g_currenttab) {
                var B = document.getElementById("lptabpopupformfills"),
                    O = document.getElementById("lptabpopup");
                O && B && "none" == B.style.display && "none" == O.style.display && (m = 0), sendRequest({
                    cmd: "popupfilliconnumber",
                    sitenumber: m,
                    formfillsnumber: -1
                })
            } else "formfill" == g_currenttab ? sendRequest({
                cmd: "popupfilliconnumber",
                formfillsnumber: m,
                sitenumber: -1
            }) : sendRequest({
                cmd: "popupfilliconnumber",
                sitenumber: -1,
                formfillsnumbers: -1
            });
        g_nomatches_triggers_save && "sites" == g_currenttab && "sites" == g_rowtypes && 0 == m && 0 < countInputRows(document).sites && (o || savesite_popupaction_iframe(document, null, null))
    } else !i || "text" != i && "email" != i && "tel" != i ? i && "password" == i && g_did_populate_save && document.getElementById("p") && (document.getElementById("p").value = e) : document.getElementById("u") && g_did_populate_save && (document.getElementById("u").value = e)
}

function getInputPoll() {
    return g_ctr_poll++, g_ischrome ? chrome_runtime_sendMessage({
        cmd: "popupfillinputget"
    }, function(e) {
        g_ctr_pollresponse++, null == e || null == e.inputstr || (null == g_initial_searchtext && (g_initial_searchtext = e.inputstr), !g_switchedtabs && e.inputstr == g_lastinput && g_lastactive == e.active && g_lastmoreopen == e.moreopen && g_lastshownavbar == e.shownavbar && e.inputid == g_lastinputid && e.choose == g_lastchoose || dofilter(e.inputstr, e.inputid, e.active, e.choose, e.moreopen, SEARCH_SITE_AND_USER, e.issaveall, e.inputtype, e.shownavbar), g_lastinput = e.inputstr, g_lastinputid = e.inputid, g_lastactive = e.active, g_lastchoose = e.choose, g_lastmoreopen = e.moreopen, g_lastshownavbar = e.shownavbar, g_switchedtabs = !1)
    }) : (g_issafari || g_isfirefoxsdk) && sendRequest({
        cmd: "popupfillinputget"
    }), !1
}

function getWindowWidth(e) {
    var t = e.innerWidth,
        n = !0,
        s = document.getElementById("_lpinvis");
    return null == s && ((s = document.createElement("div")).id = "_lpinvis", s.style.left = "0px", s.style.right = "0px", s.style.top = "0px", s.style.height = "0px", s.style.visibility = "hidden", document.body.appendChild(s)), 0 < s.offsetWidth && (t = s.offsetWidth), document.body.removeChild(s), t
}

function defaultFrameResize() {
    sendRequest({
        cmd: "popupfillresize",
        width: 0,
        height: 0
    })
}

function verbose_log(e) {
    verbose && console_log(e)
}

function LP_getAbsolutePos(e, t) {
    if (!e || !t) return null;
    if ("function" != typeof t.getBoundingClientRect) return null;
    try {
        var n = t.getBoundingClientRect(),
            s, r;
        s = void 0 === n.width ? n.right - n.left : n.width, r = void 0 === n.height ? n.bottom - n.top : n.height;
        var a = e.body.getBoundingClientRect();
        return {
            left: n.left + e.body.scrollLeft - a.left,
            top: n.top + e.body.scrollTop - a.top,
            width: s,
            height: r
        }
    } catch (e) {
        return null
    }
}

function handleGotGeneratePrefs(e, t, n) {
    LPIFRAMEVARS.g_myprefs = LPJSON.parse(e);
    var s = LPJSON.parse(t);
    if (null != s && !isEmptyObject(s))
        for (var r in LPIFRAMEVARS.g_genpws = [], s) s.hasOwnProperty(r) && LPIFRAMEVARS.g_genpws.push(s[r]);
    var a = LPJSON.parse(n);
    LPIFRAMEVARS.g_genpwpattern = a
}

function doInit(e) {
    var t = document;
    set_iframe_title(t, gs("LastPass"));
    var n = {};
    if (-1 !== e[g_MAXPWLENID] && (n[g_MAXPWLENID] = e[g_MAXPWLENID]), dotrans) {
        LP_decimate_children(t.body);
        var s = t.createElement("div");
        s.id = "masterdiv";
        var r = t.createElement("div");
        r.id = "contentdiv", s.appendChild(r), (r = t.createElement("div")).id = "transdiv", s.appendChild(r), t.body.appendChild(s);
        var a = t.getElementById("contentdiv");
        for (var o in "undefined" != typeof g_new_superbar && g_new_superbar && set_new_superbox_40(t, a), n) {
            var i = t.createElement("input");
            i.id = o, i.setAttribute("type", "hidden"), i.setAttribute("value", n[o]), a.appendChild(i)
        }
        if (e.formfills) try {
            LPIFRAMEVARS.g_formfills = LPJSON.parse(e.formfills)
        } catch (e) {}
        if (e.favicons) try {
            LPIFRAMEVARS.g_favicons = LPJSON.parse(e.favicons)
        } catch (e) {}
        if (e.bigicons) try {
            LPIFRAMEVARS.g_bigicons = LPJSON.parse(e.bigicons)
        } catch (e) {}
        if (e.sites) try {
            LPIFRAMEVARS.g_sites = LPJSON.parse(e.sites)
        } catch (e) {}
        LPIFRAMEVARS.g_do_40fieldicon = !1;
        var l = {
                sites: e.sites,
                favicons: e.favicons,
                formfills: e.formfills,
                url: e.url
            },
            _ = LPpop.create_popup_obj(t, l);
        a.appendChild(_)
    }
    return doInitCommon(t, e), getGeneratePrefs(), sizeTables(window), g_reference_url = e.url, g_can_copy_clipboard = e.can_copy_clipboard, void 0 !== e.ask_generate && (0 == g_ask_generate.length ? g_ask_generate = 0 : g_ask_generate = e.ask_generate), void 0 !== e.ask_save && (0 == g_ask_save.length ? g_ask_save = 0 : g_ask_save = e.ask_save), void 0 !== e.username && (g_username = e.username), void 0 !== e.inputtype && (g_inputtype = e.inputtype), void 0 !== e.pw_challenge && (g_has_view_pw_challenge = e.pw_challenge), void 0 !== e.site_challenge && (g_has_view_site_challenge = e.site_challenge), void 0 !== e.sitepwlen && 0 < e.sitepwlen ? g_sitepwlen_override = e.sitepwlen : void 0 !== e.site_pwlen && 0 < e.site_pwlen && (g_sitepwlen_override = e.site_pwlen), void 0 !== e.ftd && e.ftd && (g_ftd_match = e.ftd), void 0 !== e.enable_exper && e.enable_exper && (g_enable_exper = e.enable_exper), void 0 !== e.do_40fieldicon && e.do_40fieldicon && (g_do_40fieldicon = !!e.do_40fieldicon, a && (a.style.borderRadius = "2px", a.style.boxShadow = "0px 1px 2px 0px rgba(0,0,0,0.20)"), g_popupfill_widest = 330, g_width_generate = 330), g_rowtypes = e.rowtype, void 0 !== e.start_type && p(e.start_type) && (g_start_type_state = e.start_type, g_rowtypes = e.start_type), g_rowtypes_initial = e.rowtype, (null == g_rowtypes || g_rowtypes.length <= 0) && (g_rowtypes = "sites"), g_initial_searchtext = null, setTimeout(function() {
        setup_event_handlers(t, window)
    }, 0), "ask_generate" == g_rowtypes || 1 == g_ask_generate ? (setTimeout(function() {
        askGenerate()
    }, 0), g_currenttab = "generate", doSuperBox(t), doTitleBar(t, g_currenttab)) : 1 == g_ask_save ? (g_currenttab = "savesite", doSuperBox(t), savesite_popupaction_iframe(t), doTitleBar(t, g_currenttab)) : "formfills" == g_rowtypes ? (g_currenttab = "formfill", doSuperBox(t), doTitleBar(t, g_currenttab), formfillprofile_popupaction()) : "sites" == g_rowtypes && (g_currenttab = "sites", hideElement(t, "popupcontainerff"), doSuperBox(t), 0 === countInputRows(t).sites ? (null != e.inputtype && "password" == e.inputtype ? (g_empty_in_super || doTitleBar(t, ""), emptyAskSave(t)) : (g_empty_in_super || doTitleBar(t, gs("")), emptyAskFill(t)), g_do_40fieldicon || siteResize(t, EMPTY_RESIZE)) : (doTitleBar(t, g_currenttab), siteResize(t))), popup_show_menu_expand_visual_cue && do_inject_visual_cues(t), setActiveTab(t), g_switchedtabs = !1, void document.addEventListener("keydown", function(e) {
        LP_frame_keypress_handler(e)
    }, !1);

    function p(e) {
        if (null == e) return !1;
        for (var t = ["sites", "formfills", "generate", "save"], n = 0; n < t.length; n++)
            if (t[n] == e) return !0;
        return !1
    }
}

function pollSaveChrome(t) {
    chrome_runtime_sendMessage({
        cmd: "popupfillsaveget",
        url: g_reference_url
    }, function(e) {
        null == e || (null != e.formdata2 && "" != e.formdata2 ? populateSave(e) : null != e.close ? closePopups() : null != e.prompting ? g_pollSave_max_retry = 600 : t < g_pollSave_max_retry && (t++, setTimeout(function() {
            pollSaveChrome(t)
        }, g_pollSave_retry_timeout)))
    })
}

function do_never_kbd_event(e, t, n, s, r) {
    var a = 0,
        o = 1;
    null != t && "" !== t || (t = 0), 0 < t && 0 === g_selected_never_row && (g_selected_never_row = 1), t < 0 && 1 === g_selected_never_row && (g_selected_never_row = 0), 0 === g_selected_never_row && n && neverpage_handler(), 1 === g_selected_never_row && n && neverdomain_handler()
}

function do_more_kbd_event(e, t, n, s, r) {
    var a = 0,
        o = 1,
        i = 2,
        l = 3,
        _ = 4,
        p = 4,
        d = -99,
        c = -98;
    if (g_more_close_on_cancel && g_more_enable_return ? (d = 5, p = c = 6) : g_more_close_on_cancel && !g_more_enable_return ? p = d = 5 : !g_more_close_on_cancel && g_more_enable_return && (p = c = 5), null == g_more_submenu_ffid && (null == g_more_submenu_aid || g_can_copy_clipboard) || (o = -97, i = -96, l = -95, p -= 3, d -= 3, c -= 3), null != t && "" !== t || (t = 0), -1 == g_selected_more_row && s && (g_selected_more_row = 0), (g_selected_more_row += t) < 0 ? g_selected_more_row = 0 : p < g_selected_more_row && (g_selected_more_row = p), n) switch (g_selected_more_row) {
        case 0:
            edit_popupaction(g_more_submenu_aid, g_more_submenu_ffid);
            break;
        case o:
            copyusername_popupaction(g_more_submenu_aid);
            break;
        case i:
            copypassword_popupaction(g_more_submenu_aid);
            break;
        case l:
            copyurl_popupaction(g_more_submenu_aid);
            break;
        case 4:
            delete_popupaction(g_more_submenu_aid, g_more_submenu_ffid);
            break;
        case c:
            g_more_enable_return && (null != g_more_submenu_aid ? sites_popupaction() : null != g_more_submenu_ffid ? formfillprofile_popupaction() : closePopups());
            break;
        case d:
            g_more_close_on_cancel && closePopups()
    }
}

function translationInit(e) {
    try {
        null == e || isEmptyObject(e) || ("undefined" == typeof translations && (translations = {}), void 0 === translations["en-US"] && (translations["en-US"] = {}), translations["en-US"].ff_username_regexp = e.ff_username_regexp, translations["en-US"].ff_firstname_regexp = e.ff_firstname_regexp, translations["en-US"].ff_middlename_regexp = e.ff_middlename_regexp, translations["en-US"].ff_lastname_regexp = e.ff_lastname_regexp, translations["en-US"].ff_email_regexp = e.ff_email_regexp, translations["en-US"].ff_zip_regexp = e.ff_zip_regexp, translations["en-US"].ff_country_regexp = e.ff_country_regexp, translations["en-US"].ff_city_regexp = e.ff_city_regexp, translations["en-US"].ff_currpass_regexp = e.ff_currpass_regexp, translations["en-US"].ff_search_regexp = e.ff_search_regexp, translations["en-US"].ff_bankacctnum_regexp = e.ff_bankacctnum_regexp, translations["en-US"].ff_captcha_regexp = e.ff_captcha_regexp, translations["en-US"].ff_company_regexp = e.ff_company_regexp, translations["en-US"].ff_password_regexp = e.ff_password_regexp, translations["en-US"].ff_question_answer_regexp = e.ff_question_answer_regexp, translations["en-US"].ff_address1_regexp = e.ff_address1_regexp, translations["en-US"].ff_forgot_regexp = e.ff_forgot_regexp)
    } catch (e) {
        verbose_log("translationInit: " + e.message)
    }
}

function lpgs(e, t, n, s) {
    var r = void 0 === t || null == t ? "" : t;
    if (void 0 !== lpgscache[r + e]) return lpgscache[r + e];
    if (void 0 === lpgslocales[r] && 0 == e.indexOf("ff_") && (ApplyOverrides(r), void 0 !== lpgscache[r + e])) return lpgscache[r + e];
    if ("undefined" != typeof translations) {
        if (void 0 !== t && t && void 0 !== translations[t] && void 0 !== translations[t][e]) return translations[t][e];
        var e;
        if (void 0 !== translations["en-US"] && void 0 !== translations["en-US"][e]) return e = translations["en-US"][e]
    }
    return void 0 !== lpgscache["en-US" + e] ? lpgscache["en-US" + e] : e
}

function master_challenge_response_handler(e, t, n) {
    if (e) {
        if (g_did_pw_challenge = !0, t) return t()
    } else if (n) return n()
}
var g_ctr_master_challenge = 0,
    MASTER_CHALLENGE_DISABLE = 999999999999;

function pollChallenge(t, n, e) {
    var s = 500;
    if (++g_ctr_master_challenge < (e = e || 600)) {
        try {
            chrome_runtime_sendMessage({
                cmd: "getpwchallengeresult"
            }, function(e) {
                if (null !== e) return master_challenge_response_handler(e, t, n), sendRequest({
                    cmd: "getpwchallengeresult",
                    reset: 1
                }), void(g_ctr_master_challenge = MASTER_CHALLENGE_DISABLE)
            })
        } catch (e) {
            return n && n(), sendRequest({
                cmd: "getpwchallengeresult",
                reset: 1
            }), void(g_ctr_master_challenge = MASTER_CHALLENGE_DISABLE)
        }
        setTimeout(function() {
            pollChallenge(t, n, e)
        }, s)
    } else n && n(), sendRequest({
        cmd: "getpwchallengeresult",
        reset: 1
    }), g_ctr_master_challenge = MASTER_CHALLENGE_DISABLE
}
var g_safari_master_challenge_success_callback_fn = null,
    g_safari_master_challenge_failure_callback_fn = null;

function do_master_pw_challenge(e, t, n) {
    if (g_ischrome) {
        s();
        try {
            chrome_runtime_sendMessage({
                cmd: "dopwchallenge"
            }, function(e) {})
        } catch (e) {
            return !!t && t()
        }
        pollChallenge(e, t, n)
    } else {
        if (!g_issafari && !g_isfirefoxsdk) return !1;
        try {
            g_safari_master_challenge_success_callback_fn = e, g_safari_master_challenge_failure_callback_fn = t, g_issafari ? safari.self.tab ? safari.self.tab.dispatchMessage("dopwchallenge", {}) : safari.extension.globalPage.contentWindow && safari.extension.globalPage.contentWindow.message_handler({
                name: "dopwchallenge",
                message: {},
                target: window
            }) : g_isfirefoxsdk && send_message({
                messagetype: "dopwchallenge"
            })
        } catch (e) {
            return t()
        }
    }

    function s() {
        g_ctr_master_challenge = 0
    }
}

function cr_add_profile(e) {
    return sendRequest({
        cmd: "addprofile",
        fromiframe: 1,
        source: "form"
    })
}

function cr_add_cc(e) {
    return sendRequest({
        cmd: "addcreditcard",
        fromiframe: 1,
        source: "form"
    })
}

function cr_clearforms(e) {
    return sendRequest({
        cmd: "clearforms",
        fromiframe: 1,
        source: "form"
    })
}

function cr_closepopups(e, t) {
    return sendRequest({
        cmd: "closepopupfills",
        fromiframe: 1,
        option: t
    })
}

function cr_iframe_resize(e, t) {
    return sendRequest({
        cmd: "popupfillresize",
        width: e,
        height: t,
        fromiframe: 1
    })
}

function cr_generate(e) {
    return sendRequest({
        cmd: "generate",
        fromiframe: 1
    })
}

function cr_delete_formfill_popupaction(e, t) {
    sendRequest({
        cmd: "deleteformfill",
        ffid: t,
        fromiframe: 1,
        source: "form"
    })
}

function cr_delete_site_popupaction(e, t) {
    sendRequest({
        cmd: "deleteaid",
        aid: t,
        fromiframe: 1
    })
}

function cr_save_password(e, t) {
    sendRequest({
        cmd: "savePassword",
        pass: e,
        url: g_reference_url,
        fromiframe: 1,
        saveOptions: t
    })
}

function cr_copyusername(e) {
    sendRequest({
        cmd: "copyusername",
        aid: e,
        fromiframe: 1
    })
}

function cr_copypassword(e) {
    sendRequest({
        cmd: "copypassword",
        aid: e,
        fromiframe: 1,
        source: "form"
    })
}

function cr_copyurl(e) {
    sendRequest({
        cmd: "copyurl",
        aid: e,
        fromiframe: 1
    })
}

function cr_edit_site_popupaction(e) {
    sendRequest({
        cmd: "editaid",
        aid: e,
        fromiframe: 1
    })
}

function cr_edit_formfill_popupaction(e) {
    sendRequest({
        cmd: "editprofile",
        ffid: e,
        fromiframe: 1,
        source: "form"
    })
}

function cr_choose_profilecc() {
    sendRequest({
        cmd: "openchooseprofilecc",
        fromiframe: 1,
        source: "form"
    })
}

function cr_replacepasswordchooser(e, t, n) {
    n || (s = lp_gettld_url(g_reference_url));
    var s = lp_gettld_url(n),
        r;
    sendRequest({
        cmd: "changepw",
        notificationdata: LPJSON.stringify({
            sitecount: e,
            newpw: t,
            tld: s,
            fromiframe: 1
        })
    })
}

function cr_replacepassword(e, t) {
    var n = lp_gettld_url(g_reference_url),
        s;
    sendRequest({
        cmd: "changepw",
        notificationdata: LPJSON.stringify({
            sitecount: 1,
            newpw: e,
            singleaid: t,
            tld: n,
            fromiframe: 1
        })
    })
}

function cr_set_generate_prefs(e, t) {
    "undefined" != typeof g_ischrome && g_ischrome ? chrome_runtime_sendMessage({
        cmd: "popupfillsetgenerateprefs",
        prefstr: e,
        genpwstr: t,
        fromiframe: 1
    }, function(e) {}) : sendRequest({
        cmd: "popupfillsetgenerateprefs",
        prefstr: e,
        genpwstr: t,
        fromiframe: 1
    })
}

function lpConfirmYesNo(e, t) {
    return confirm(e)
}

function cr_moveIframe(e) {
    e && void 0 !== e.delx && void 0 !== e.dely && sendRequest({
        cmd: "moveIframe",
        delx: e.delx,
        dely: e.dely
    })
}

function cr_resizeIframe(e) {
    e && (void 0 === e.width && (e.width = 0), void 0 === e.height && (e.height = 0), void 0 === e.delx && (e.delx = 0), void 0 === e.dely && (e.dely = 0), sendRequest({
        cmd: "resizeIframe",
        width: e.width,
        height: e.height,
        delx: e.delx,
        dely: e.dely
    }))
}

function cr_savesite_dialog_changed(e) {
    sendRequest({
        cmd: "savesite_dialog_changed",
        value: e,
        timestamp: LPPerl.time()
    })
}
//# sourceMappingURL=sourcemaps/popupfilltab.js.map