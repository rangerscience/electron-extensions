var LPIF = {},
    g_popupfill_hint = {},
    g_popupfill_hint_generate = {},
    g_popupfill_hint_save = {},
    g_popupfill_hint_type = {},
    g_popupfill_last_active = {},
    g_popupfill_last_active_fieldid = {},
    g_popupfill_last_active_fieldtype = {},
    g_popupfill_save_data = {},
    g_popupfill_pw_challenge = null,
    g_popupforminput = [],
    g_popupform_active = [],
    g_popupform_active_choose = [],
    g_popupform_more_open = [],
    g_popupform_shownavbar = [],
    g_show_save_success_msg = !0,
    g_popup_tabid_save = null,
    g_popup_tab_docnum = [],
    g_popup_url_by_tabid = [],
    g_iframe_hack_src = [];

function savesiteicon_real(e, p) {
    void 0 !== g_popup_tab_docnum[e] ? sendCS(e, {
        cmd: "savesiteiframe"
    }, g_popup_tab_docnum[e]) : sendCS(e, {
        cmd: "savesiteiframe"
    }), g_popup_tabid_save = e
}

function toplevelpopupsetstate(e, p) {
    var t = p ? 1 : 0;
    null != e ? sendCS(e, {
        cmd: "toplevelpopupsetstate",
        toplevel_exists: t
    }, "all") : get_selected_tab(null, function(e) {
        var p = gettabid(e);
        sendCS(p, {
            cmd: "toplevelpopupsetstate",
            toplevel_exists: t
        }, "all")
    })
}

function closepopuptoplevel_handler(e, p) {
    var t;
    null != e ? (closeclickables(e, !1), toplevelpopupsetstate(e, !1), clear_popup_heartbeat(e), delete g_iframe_hack_src[e]) : (get_selected_tab(null, function(e) {
        var p = !1,
            t = gettabid(e);
        closeclickables(t, p), toplevelpopupsetstate(t, !1), clear_popup_heartbeat(t)
    }), g_iframe_hack_src = [])
}

function createpopuptoplevel_handler(e, p) {
    var t = g_CS_tops[e];
    sendCS(e, {
        cmd: "createpopuptoplevel",
        from_iframe: p
    }, t), toplevelpopupsetstate(e, !0), g_iframe_hack_src[e] = p.url, has_popup_heartbeat(e) || (do_popup_heartbeat(e), popup_heartbeat_fn(e))
}

function do_searchvault(e, p, t) {
    switch (e = e && e.toLowerCase().trim(), p) {
        case "sites":
            var r = {},
                _ = {},
                o = "",
                a = g_popup_url_by_tabid[t];
            for (var n in a && (o = lp_gettld_url(a)), g_sites) !check_ident_aid(g_sites[n].aid) || g_sites[n].tld !== o || e && -1 === g_sites[n].name.toLowerCase().indexOf(e) && -1 === g_sites[n].unencryptedUsername.toLowerCase().indexOf(e) || (r[n] = g_sites[n], g_sites[n].tld && g_bigsquareicons[g_sites[n].tld] && (_[n] = "data:image/png;base64," + g_bigsquareicons[g_sites[n].tld]));
            return JSON.stringify({
                sites: r,
                bigicons: _
            });
        case "formfills":
            for (var i = new Array, n = 0; n < g_formfills.length; n++) check_ident_ffid(g_formfills[n].ffid) && -1 !== g_formfills[n].decprofilename.toLowerCase().indexOf(e) && (i[i.length] = g_formfills[n]);
            return JSON.stringify({
                formfills: i
            })
    }
}

function do_getpopupfilldata(e) {
    return e ? (g_datacache[e].popuphtml, g_iframe_safe_to_close[e] = !0, cobble_popup_iframe_data(e)) : {}
}

function do_getpopupfillsites(e, p) {
    if (!e || !p) return !1;
    var t = p.tld,
        r = p.url,
        _ = p.docnum;
    verbose_log("get ste & form fill data for tld=" + t + " url=" + r + " docnum=" + _);
    var o = "",
        a = "",
        n = "",
        i = assemble_popup_data_payload(r, t);
    return i && i.sites && (o = i.sites), i && i.favicons && (a = i.favicons), i && i.formfills && (n = i.formfills), sendCS(e, {
        cmd: "gotpopupfillsites",
        sites: o,
        formfills: n,
        favicons: a
    }, "all"), !0
}

function do_setpopupfilllastactive(e, p) {
    return !(!e || !p) && (g_popupfill_last_active[e] = p.active, g_popupfill_last_active_fieldid[e] = p.activefieldid, g_popupfill_last_active_fieldtype[e] = p.activefieldtype, void 0 !== p.ask_generate && (g_popupfill_hint_generate[e] = p.ask_generate), void 0 !== p.opentosave && (g_popupfill_hint_save[e] = p.opentosave), void 0 !== p.start_type && (g_popupfill_hint_type[e] = p.start_type), !0)
}

function assemble_popup_data_payload(e, p) {
    var t = [],
        r = {},
        _ = {},
        o = "",
        a = "",
        n = "",
        i = "",
        l = new Array,
        s = {};
    p = p || lp_gettld_url(e), t = getsites(p), t = reorderOnURL(t, e, !0);
    for (var f = 0; f < t.length; f++) r[t[f].aid] = geticonurlfromrecord(t[f]), s[t[f].aid] = getbigsquareiconurlfromrecord(t[f]);
    for (var u = 0; u < g_formfills.length; u++)
        if (check_ident_ffid(g_formfills[u].ffid)) {
            l[l.length] = g_formfills[u];
            var g = lpmdec_acct(g_formfills[u].ccnum, !0, g_formfills[u], g_shares);
            if (r[g_formfills[u].ffid] = geticonCCnum(g), s[g_formfills[u].ffid] = geticonCCnum(g, !0), "" !== g_formfills[u].ccnum) {
                var c = lpmdec(g_formfills[u].ccnum);
                l[l.length - 1].formattedCCNum = LPCC.getFormattedNumber(c), l[l.length - 1].ccType = LPCC.getCCType(c)
            }
        } var d = LPJSON.stringify("");
    return l && 0 < l.length && (d = LPJSON.stringify(l)), i = cache_usernames(t), o = d, a = LPJSON.stringify(r), g_40fieldicon && (n = LPJSON.stringify(s)), i && (_.sites = i), o && (_.formfills = o), a && (_.favicons = a), n && (_.bigicons = n), _
}

function cobble_popup_iframe_data(e) {
    var p = LPJSON.stringify({}),
        t = LPJSON.stringify({}),
        r = LPJSON.stringify({}),
        _ = LPJSON.stringify({}),
        o = "",
        a = 0,
        n = 0,
        i = "",
        l = "";
    if (null != e) {
        null != g_popupfill_hint[e] && null != g_popupfill_last_active[e] && null != g_popupfill_hint[e][g_popupfill_last_active[e]] && (o = g_popupfill_hint[e][g_popupfill_last_active[e]]), g_popupfill_hint_generate[e] && (a = g_popupfill_hint_generate[e]), g_popupfill_hint_save[e] && (n = g_popupfill_hint_save[e]), g_popupfill_hint_type[e] && (l = g_popupfill_hint_type[e]), void 0 !== g_popupfill_last_active_fieldtype[e] && (i = g_popupfill_last_active_fieldtype[e]);
        var s = g_popup_url_by_tabid[e],
            f = assemble_popup_data_payload(s);
        f && f.sites && (p = f.sites), f && f.favicons && (t = f.favicons), f && f.formfills && (_ = f.formfills), f && f.bigicons && (r = f.bigicons)
    }
    a = a ? 1 : 0, n = n ? 1 : 0;
    var u = can_copy_to_clipboard() ? 1 : 0,
        g = {
            ff_firstname_regexp: get_ff_translation("ff_firstname_regexp"),
            ff_middlename_regexp: get_ff_translation("ff_middlename_regexp"),
            ff_lastname_regexp: get_ff_translation("ff_lastname_regexp"),
            ff_username_regexp: get_ff_translation("ff_username_regexp"),
            ff_email_regexp: get_ff_translation("ff_email_regexp"),
            ff_zip_regexp: get_ff_translation("ff_zip_regexp"),
            ff_currpass_regexp: get_ff_translation("ff_currpass_regexp"),
            ff_search_regexp: get_ff_translation("ff_search_regexp"),
            ff_captcha_regexp: get_ff_translation("ff_captcha_regexp"),
            ff_bankacctnum_regexp: get_ff_translation("ff_bankacctnum_regexp"),
            ff_company_regexp: get_ff_translation("ff_company_regexp"),
            ff_password_regexp: get_ff_translation("ff_password_regexp"),
            ff_question_answer_regexp: get_ff_translation("ff_question_answer_regexp"),
            ff_address1_regexp: get_ff_translation("ff_address1_regexp"),
            ff_city_regexp: get_ff_translation("ff_city_regexp"),
            ff_forgot_regexp: get_ff_translation("ff_forgot_regexp"),
            ff_country_regexp: get_ff_translation("ff_country_regexp")
        },
        c = get_sitepwlen(lp_gettld_url(s));
    null !== c && "string" != typeof c || (c = 0);
    var d = -1,
        m;
    return g_possiblemax_tuple !== [] && g_possiblemax_tuple[0] == e && (d = g_possiblemax_tuple[1], g_possiblemax_tuple = []), {
        cmd: "gotpopupfilldata",
        sites: p,
        favicons: t,
        formfills: _,
        popuphtml: g_datacache[e].popuphtml,
        url: s,
        rowtype: o,
        ask_generate: a,
        can_copy_clipboard: u,
        username: g_username,
        inputtype: i,
        ask_save: n,
        maxpwlen: d,
        start_type: l,
        has_view_pw_challenge: g_prompts.view_pw_prompt ? 1 : 0,
        has_view_site_challenge: g_prompts.edit_site_prompt || g_prompts.company_copyview_site_prompt ? 1 : 0,
        has_view_ff_challenge: g_prompts.view_ff_prompt || g_prompts.company_copyview_site_prompt ? 1 : 0,
        site_pwlen: c,
        reg_obj: g,
        do_40fieldicon: g_40fieldicon,
        bigicons: r,
        ftd: frame_and_topdoc_has_same_domain(e),
        enable_exper: g_isadmin || "undefined" != typeof verbose && verbose
    }
}

function doPopupIconHint(e, p, t) {
    return !!e && (sendCS(e, {
        cmd: "popupfilliconnumber",
        sitenumber: p,
        formfillsnumber: t
    }, "all"), !0)
}

function savesite_from_iframe(e, p) {
    if (!lploggedin) return null;
    var t = punycode.URLToASCII(e.url);
    if (g_popup_url_by_tabid[p] && (t = g_popup_url_by_tabid[p]), !check_for_frame_mismatch_ok(p, !0, gs("Are you sure you would like to save a new site to your LastPass vault?"), "savesite")) return null;
    var r = e.formdata2,
        _ = e.name,
        o = e.group,
        a = e.username,
        n = e.password,
        i = "",
        l = e.orig_username,
        s = e.orig_password,
        f = null != r && 0 < r.length,
        u = issharedfolder(g_shares, o);
    if (!checkreadonly(u)) return {
        error: gs("Sorry, this shared folder is read-only.")
    };
    var g = 0 == u ? g_local_key : u.sharekey,
        c = createNewAcct(),
        d = lp_gettld_url(AES._utf8_encode(t));
    c.genpw = !1, c.name = _, c.group = o, c.url = AES._utf8_encode(t), c.tld = d, c.unencryptedUsername = a, c.username = lpmenc(a, !0, g), c.password = lpmenc(n, !0, g), c.extra = "", c.fav = 0, c.autologin = 0, c.never_autofill = 0, c.pwprotect = 0, c.aid = "0", 0 != u && (c.sharefolderid = u.id, 0 == u.give && (c.sharedfromaid = 1));
    var m = o;
    u && (m = o.substr(u.decsharename.length + 1)), c.fields = new Array, c.save_all = e.save_all ? 1 : 0;
    var v = [],
        h = {
            save_all: 0,
            username: l,
            password: s,
            new_username: a,
            new_password: n,
            fromiframe: 1
        },
        b = updateAndEncryptData(r, c.fields, v, c, g, h),
        y = "name=" + en(lpenc(_, g)) + "&grouping=" + en(lpenc(m, g)) + "&data=" + en(bin2hex(b)) + "&extra=" + en(lpenc("", g));
    return y += "&extjs=1&localupdate=1", y += 0 == u ? "" : "&sharedfolderid=" + en(u.id), e.source && (y += "&source=" + e.source), c.newvalues = v, f ? (y += "&ref=" + en(AES.url2hex(t)), saveSiteFromSubmit(y, c)) : (y += "&aid=0", y += "&url=" + en(AES.url2hex(t)), y += "&openid_url=", y += "&username=" + en(crypto_btoa(c.username)), y += "&password=" + en(crypto_btoa(c.password)), saveSite(y, c)), "fidelity.com" == c.tld ? refreshsites() : fill({
        tabid: p,
        acct: c,
        desc: "fill_A4"
    }), {}
}
var g_iframe_safe_to_close = {};

function savesite_dialog_changed_handler(e, p) {
    void 0 !== p.value && (g_iframe_safe_to_close[e] = !p.value)
}

function iframe_close_request_handler(e, p) {
    var t = 0,
        r = 1,
        _ = 2,
        o = 4,
        a = 5,
        n = 6,
        i = 7,
        l = p.initiate_timestamp,
        s = 0;
    return s = g_iframe_safe_to_close && g_iframe_safe_to_close[e] ? 4 : g_iframe_safe_to_close && !1 === g_iframe_safe_to_close[e] && lploggedin ? 1 : 7, sendCS(e, {
        cmd: "iframe_close_ack",
        value: s,
        initiate_timestamp: l,
        ack_timestamp: LPPerl.time()
    }, "all"), s
}

function do_popupfillscreateack(e) {
    return !(!e || !lploggedin) && (void 0 !== g_popup_tab_docnum[e] ? sendCS(e, {
        cmd: "popupfillscreateack"
    }, g_popup_tab_docnum[e]) : sendCS(e, {
        cmd: "popupfillscreateack"
    }, "all"), has_popup_heartbeat(e) || (do_popup_heartbeat(e), popup_heartbeat_fn(e)), sendLpImprove("infieldopen", {
        source: "form"
    }), !0)
}

function do_iframescrollenable(e) {
    return !!e && (sendCS(e, {
        cmd: "iframescrollenable",
        href: data.href
    }, g_CS_tops[e]), verbose_log("set scrolling=auto for iframe on tabid " + e), sendCS(e, {
        cmd: "iframebodyscrollenable",
        href: data.href
    }, "all"), !0)
}

function do_popupregister(e, p) {
    return !(!e || !p) && (g_popup_tab_docnum[e] = p.docnum, null !== e && void 0 !== g_iframe_hack_src[e] ? g_popup_url_by_tabid[e] = g_iframe_hack_src[e] : g_popup_url_by_tabid[e] = p.url, !0)
}

function do_setpopupfillhint(e, p) {
    return !(!e || !p) && (null != p.formid && "" != p.formid || (p.formid = "none"), null != p.rowtype && "" != p.rowtype || (p.rowtype = "sites"), null == g_popupfill_hint[e] && (g_popupfill_hint[e] = {}), p.ask_generate ? g_popupfill_hint_generate[e] = p.ask_generate : g_popupfill_hint_generate[e] = !1, g_popupfill_hint[e][p.formid] = p.rowtype, verbose_log("[" + e + "] set hint on " + p.formid + " to " + p.rowtype), !0)
}

function do_popupfillinputsave(e, p) {
    return !(!e || !p) && (null == g_popupforminput && (g_popupforminput = {}), null == g_popupforminput[e] && (g_popupforminput[e] = {}), null == p.inputstr || 0 == p.inputstr.length ? g_popupforminput[e].value = "" : g_popupforminput[e].value = p.inputstr, null == p.inputid || 0 == p.inputid.length ? g_popupforminput[e].id = "" : g_popupforminput[e].id = p.inputid, null == p.issaveall || 0 == p.issaveall.length ? g_popupforminput[e].issaveall = "" : g_popupforminput[e].issaveall = p.issaveall, null == p.inputtype || 0 == p.inputtype.length ? g_popupforminput[e].inputtype = "" : g_popupforminput[e].inputtype = p.inputtype, !0)
}
var g_popup_heartbeat = {};

function do_popup_heartbeat(e) {
    return g_popup_heartbeat = g_popup_heartbeat || {}, !!e && (g_popup_heartbeat[e.toString()] = !0)
}

function has_popup_heartbeat(e) {
    return g_popup_heartbeat ? !!e && !0 === g_popup_heartbeat[e.toString()] : !(g_popup_heartbeat = {})
}

function popup_heartbeat_fn(e, p) {
    return !!e && (p = p || 1, doPopupResize(e, -1, -1), !!has_popup_heartbeat(e) && (setTimeout(function() {
        popup_heartbeat_fn(e, p + 1)
    }, 1099), !0))
}

function clear_popup_heartbeat(e) {
    return !!e && !((g_popup_heartbeat = g_popup_heartbeat || {})[e.toString()] = !1)
}

function closeclickables(e, p) {
    var t = p ? "true" : "false";
    null != e ? sendCS(e, {
        cmd: "closeclickables",
        force: t,
        lploggedin: lploggedin
    }, "all") : get_selected_tab(null, function(e) {
        var p = gettabid(e);
        sendCS(p, {
            cmd: "closeclickables",
            force: t,
            lploggedin: lploggedin
        }, "all")
    }), do_popupkbdnavreset(e)
}

function closeallclickables(e) {
    var r = e ? "true" : "false";
    get_all_windows({
        populate: !0
    }, function(e) {
        for (var p = 0; p < e.length; p++)
            for (var t = 0; t < get_tabs_length(e[p]); t++) sendCS(gettabid(get_tabs(e[p])[t]), {
                cmd: "closeclickables",
                force: r,
                lploggedin: lploggedin
            }, "all")
    }), clearpopupkbdcounters()
}

function doPopupResize(e, p, t) {
    sendCS(e, {
        cmd: "popupfillresize",
        width: p,
        height: t
    }, "all")
}

function do_popupfillinputfocusdecrement(e, p) {
    if (p) {
        var t = 1;
        if (void 0 === g_popupform_active[e] && (g_popupform_active[e] = 0), void 0 !== p.count) {
            var r = parseInt(p.count);
            isNaN(r) || (t = r)
        }
        g_popupform_active[e] -= t
    }
}

function do_popupfillinputfocusincrement(e, p) {
    if (p) {
        var t = 1;
        if (void 0 === g_popupform_active[e] && (g_popupform_active[e] = 0), void 0 !== p.count) {
            var r = parseInt(p.count);
            isNaN(r) || (t = r)
        }
        g_popupform_active[e] += t
    }
}

function do_popupfillinputfocuschoose(e, p) {
    p && (g_popupform_active_choose[e] = 1)
}

function do_popupfillinputmoreopen(e, p) {
    p && (g_popupform_more_open[e] = 1)
}

function do_popupfillinputshownavbar(e, p) {
    p && (g_popupform_shownavbar[e] = 1)
}

function do_popupkbdnavreset(e) {
    return !!e && (g_popupform_active[e] = 0, g_popupform_active_choose[e] = 0, g_popupform_more_open[e] = 0, !(g_popupform_shownavbar[e] = 0))
}

function initpopupkbdcounters(e) {
    return !!e && (void 0 === g_popupform_active[e] && (g_popupform_active[e] = 0), void 0 === g_popupform_active_choose[e] && (g_popupform_active_choose[e] = 0), void 0 === g_popupform_more_open[e] && (g_popupform_more_open[e] = 0), void 0 === g_popupform_shownavbar[e] && (g_popupform_shownavbar[e] = 0), !0)
}

function do_popupfillinputget(e) {
    if (!e || !lploggedin) return {};
    var p = {};
    return initpopupkbdcounters(e), void 0 === g_popupforminput[e] && (g_popupforminput[e] = {
        value: "",
        id: "",
        issaveall: 0,
        inputtype: ""
    }), void 0 !== g_popupforminput[e] && (p = {
        cmd: "gotpopupfillinput",
        inputstr: g_popupforminput[e].value,
        inputid: g_popupforminput[e].id,
        active: g_popupform_active[e],
        choose: g_popupform_active_choose[e],
        moreopen: g_popupform_more_open[e],
        issaveall: g_popupforminput[e].issaveall,
        inputtype: g_popupforminput[e].inputtype,
        shownavbar: g_popupform_shownavbar[e]
    }, do_popupkbdnavreset(e)), p
}

function clearpopupkbdcounters() {
    return g_popupform_active = [], g_popupform_active_choose = [], g_popupform_more_open = [], g_popupform_shownavbar = [], !0
}

function do_popupfillsetgenerateprefs(e, p) {
    if (!e || !p) return !1;
    var t = LPJSON.parse(p.prefstr);
    if (lpPutUserPref("generate_advanced", parseInt(t.generate_advanced)), lpPutUserPref("generate_length", parseInt(t.generate_length)), lpPutUserPref("generate_upper", parseInt(t.generate_upper)), lpPutUserPref("generate_lower", parseInt(t.generate_lower)), lpPutUserPref("generate_digits", parseInt(t.generate_digits)), lpPutUserPref("generate_special", parseInt(t.generate_special)), lpPutUserPref("generate_mindigits", parseInt(t.generate_mindigits)), lpPutUserPref("generate_ambig", parseInt(t.generate_ambig)), lpPutUserPref("generate_reqevery", parseInt(t.generate_reqevery)), lpPutUserPref("generate_pronounceable", parseInt(t.generate_pronounceable)), void 0 !== p.genpwstr) {
        var r = LPJSON.parse(p.genpwstr);
        if (null != r && !isEmptyObject(r))
            for (var _ in g_genpws = [], r) r.hasOwnProperty(_) && g_genpws.push(r[_])
    }
    return lpWriteAllPrefs(), !0
}

function do_popupfillgetgenerateprefs(e, p) {
    if (void 0 === e) return {};
    var t = LPJSON.stringify({
            generate_advanced: parseInt(lpGetPref("generate_advanced", 0)),
            generate_length: parseInt(lpGetPref("generate_length", 12)),
            generate_upper: parseInt(lpGetPref("generate_upper", 1)),
            generate_lower: parseInt(lpGetPref("generate_lower", 1)),
            generate_digits: parseInt(lpGetPref("generate_digits", 1)),
            generate_special: parseInt(lpGetPref("generate_special", 0)),
            generate_mindigits: parseInt(lpGetPref("generate_mindigits", 1)),
            generate_ambig: parseInt(lpGetPref("generate_ambig", 0)),
            generate_reqevery: parseInt(lpGetPref("generate_reqevery", 1)),
            generate_pronounceable: parseInt(lpGetPref("generate_pronounceable", 0))
        }),
        r = LPJSON.stringify(g_genpws),
        _ = "",
        o, a;
    return g_generate_pw_pattern_hints && (_ = (_ = g_generate_pw_pattern_hints[e]) || ""), {
        prefstr: t,
        genpwstr: r,
        genpwpattern: LPJSON.stringify(_)
    }
}
//# sourceMappingURL=sourcemaps/popupfilltab_bg.js.map