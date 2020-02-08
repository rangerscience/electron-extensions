var g_maxchars = 0,
    g_maxcharsmatch = 0,
    g_menuwidth = 0,
    g_menuwidthmatch = 0,
    g_menus = [],
    g_menutitles = [],
    g_menuspeed = 1e4,
    g_hoverrow = null,
    g_autoclickenabled = !1,
    g_is_mac = -1 != navigator.appVersion.indexOf("Mac"),
    g_submenulistener = -1,
    g_new_menu = !0,
    g_iname = null,
    g_menu = null,
    g_pointer = null,
    g_pointer_stack = [],
    g_ids = [],
    MAXNAME = 40;

function onheightmenu() {
    return getBG().getmenuheight(!0, !0, !0, g_browseraction)
}

function oninitmenu() {}

function onshowmenu() {
    lpdbg("menu", "in onshowmenu"), getBG().lpevent("m_mnpop"), g_new_menu ? setTimeout(function() {
        menu3()
    }, 0) : (rebuildmenu(), setTimeout(function() {
        menuconnectevents()
    }, 100)), g_isfirefoxsdk && (document.getElementById("body").style.overflowX = "hidden", (getBG().g_is_linux || getBG().g_is_mac) && (document.getElementById("body").style.backgroundColor = "white"))
}

function onhidemenu() {
    $("#menu").html("")
}

function getSiteMenuTitle(e, t) {
    var i = t ? getusernamefromacct(e) : e.username;
    i = null == i ? "" : i;
    var n = e.name + ("" == i ? "" : " (" + i + ")");
    if (n.length > g_maxcharsmatch) {
        var s = e.name;
        (s = null == s ? "" : s).length > MAXNAME - 3 && (s = s.substring(0, MAXNAME) + "..."), i.length >= g_maxcharsmatch - s.length - 3 && (i = i.substring(0, g_maxcharsmatch - s.length - 3) + "..."), n = s + ("" == i ? "" : " (" + i + ")")
    }
    return n
}
var g_login_logoff_time = 0;

function menuaction(e, t) {
    L("TSM : menuaction cmd=" + e), g_hoverrow = null;
    var i = getBG();
    if (i) {
        var n = "",
            s = "",
            a = "",
            r;
        if (0 == e.indexOf("identity") && "identityadd" != e && ("all" == (s = e.substring(8)) && (s = ""), e = "identityswitch"), 0 == e.indexOf("matchopen")) return n = e.substring(9), L("menuopen: " + n + " title: " + t), void menuopen("match" + n, "match", t);
        if (0 != e.indexOf("opendelete")) {
            switch (0 == e.indexOf("matchedit") ? (n = e.substring(9), e = "matchedit") : 0 == e.indexOf("matchfill") ? (n = e.substring(9), e = "matchfill") : 0 == e.indexOf("matchcopyusername") ? (n = e.substring(17), e = "matchcopyusername") : 0 == e.indexOf("matchcopypassword") ? (n = e.substring(17), e = "matchcopypassword") : 0 == e.indexOf("matchcopyurl") ? (n = e.substring(12), e = "matchcopyurl") : 0 == e.indexOf("matchcopynote") ? (n = e.substring(13), e = "matchcopynote") : 0 == e.indexOf("matchdelete") ? (n = e.substring(11), e = "matchdelete") : 0 == e.indexOf("matchgotourl") && (n = e.substring(12), e = "matchgotourl"), 0 == e.indexOf("recentlyused") ? e = "clear" == (n = e.substring(12)) ? "clearrecent" : "site" : 0 == e.indexOf("site") && "siteadd" != e ? (n = e.substring(4), e = "site") : 0 == e.indexOf("note") && "noteadd" != e ? (n = e.substring(4), e = "note") : 0 == e.indexOf("applicationlaunch") ? (n = e.substring(17), e = "applicationlaunch") : 0 == e.indexOf("applicationcopyusername") ? (n = e.substring(23), e = "applicationcopyusername") : 0 == e.indexOf("applicationcopypassword") ? (n = e.substring(23), e = "applicationcopypassword") : 0 == e.indexOf("applicationcopyurl") ? (n = e.substring(18), e = "applicationcopyurl") : 0 == e.indexOf("applicationedit") ? (n = e.substring(15), e = "applicationedit") : 0 == e.indexOf("applicationdelete") ? (n = e.substring(17), e = "applicationdelete") : 0 == e.indexOf("fillforms") ? (a = e.substring(9), e = "fillforms") : 0 == e.indexOf("editprofile") && (a = e.substring(11), e = "editprofile"), 0 == n.indexOf("matchingsites") && (n = n.substring(13)), e) {
                case "logout":
                case "logoff":
                    i.lpevent("m_lo"), i.loggedOut(!1, "menu"), g_login_logoff_time = (new Date).getTime();
                    break;
                case "vault":
                    i.lpevent("m_ov"), i.openvault();
                    break;
                case "openfavorites":
                    i.lpevent("m_of"), i.openfavorites();
                    break;
                case "preferences":
                    i.lpevent("m_op"), i.openprefs();
                    break;
                case "help":
                    i.lpevent("m_oh"), i.openhelp();
                    break;
                case "gift":
                    i.lpevent("m_gift"), i.openURL("https://lastpass.com/gift.php?f=0001");
                    break;
                case "premium":
                    i.lpevent("m_oprem"), i.openpremium();
                    break;
                case "enterprise":
                    i.lpevent("m_oent"), i.openURL("https://lastpass.com/enterprise_trial.php?f=mnu");
                    break;
                case "entconsole":
                    i.lpevent("m_oec"), i.openentconsole();
                    break;
                case "server":
                    i.upgradetoserver();
                    break;
                case "saveall":
                    i.lpevent("m_saed"), i.saveall();
                    break;
                case "tools":
                case "feedback":
                    i.openfeedback();
                    break;
                case "generate":
                    if (i.lpevent("m_gen"), g_browseraction) return hidemenu(), void openmole("lpgeneratecont");
                    i.opengenpw();
                    break;
                case "search":
                    i.lpevent("m_os"), i.opensearch();
                    break;
                case "recheck":
                    i.lpevent("m_rec"), i.recheckpage();
                    break;
                case "refresh":
                    i.lpevent("m_ref"), i.refreshsites();
                    break;
                case "importgooglechrome":
                    i.lpevent("m_igoo"), i.openimportchrome();
                    break;
                case "lpimport":
                    i.lpevent("m_i"), i.openimport();
                    break;
                case "importfirefoxgo":
                case "importfirefoxhelp":
                case "import1passwordgo":
                case "import1passwordhelp":
                case "importkeepassgo":
                case "importkeepasshelp":
                case "importlastpassgo":
                case "importlastpasshelp":
                case "importmsipasswordkeepergo":
                case "importmsipasswordkeeperhelp":
                case "importmypasswordsafego":
                case "importmypasswordsafehelp":
                case "importpasspackgo":
                case "importpasspackhelp":
                case "importpasswordagentgo":
                case "importpasswordagenthelp":
                case "importpasswordkeepergo":
                case "importpasswordkeeperhelp":
                case "importpasswordsafego":
                case "importpasswordsafehelp":
                case "importroboformgo":
                case "importroboformhelp":
                case "importturbopasswordsgo":
                case "importturbopasswordshelp":
                case "importcsvgo":
                case "importcsvhelp":
                case "exportchrome":
                    break;
                case "exportcsv":
                    i.lpevent("m_e"), i.openexport();
                    break;
                case "exportlastpass":
                    i.lpevent("m_elp"), i.openlastpassexport();
                    break;
                case "exportwlan":
                    i.lpevent("m_ewlan"), i.wlanexport();
                    break;
                case "exportformfill":
                    i.lpevent("m_eff"), i.formfillexport();
                    break;
                case "printsites":
                    i.lpevent("m_p"), i.openprint(!1);
                    break;
                case "printnotes":
                    i.lpevent("m_pn"), i.openprint(!0);
                    break;
                case "update":
                    if (i.lpevent("m_up"), hidemenu(), i.checkforupdates(), g_issafari || g_isfirefoxsdk) break;
                    return;
                case "clear":
                    i.lpevent("m_cl"), i.clearCache(!1, !0, !1);
                    break;
                case "sessions":
                    i.lpevent("m_ses"), i.opensessions();
                    break;
                case "myaccount":
                    i.lpevent("m_mya"), i.openmyaccount();
                    break;
                case "seccheck":
                    i.lpevent("m_sec"), i.openseccheck();
                    break;
                case "about":
                    i.lpevent("m_abt"), i.openabout();
                    break;
                case "addsite":
                    i.lpevent("m_add"), i.openaddsite();
                    break;
                case "addnote":
                    i.lpevent("m_addn"), i.openaddsecurenote();
                    break;
                case "clearrecent":
                    i.lpevent("m_clrrec"), i.clearrecent();
                    break;
                case "legacy":
                    i.lpevent("m_lg"), i.openlastpasslegacy();
                    break;
                case "console":
                    i.lpevent("m_dbgcon"), i.opendebugtab();
                    break;
                case "identityswitch":
                    i.lpevent("m_swid"), i.switch_identity(s);
                    break;
                case "identityadd":
                    i.lpevent("m_addid"), i.add_identity();
                    break;
                case "site":
                    i.lpevent("m_ls"), i.launch(n);
                    break;
                case "siteadd":
                    i.lpevent("m_add2"), i.openaddsite();
                    break;
                case "note":
                    i.lpevent("m_ln"), i.launch(n);
                    break;
                case "noteadd":
                    i.lpevent("m_addn2"), i.openaddsecurenote();
                    break;
                case "applicationlaunch":
                    i.lpevent("m_la"), i.launch("app" + n);
                    break;
                case "applicationcopyusername":
                    i.lpevent("m_cau"), i.copyusername("app" + n);
                    break;
                case "applicationcopypassword":
                    i.lpevent("m_cap"), i.copypassword("app" + n);
                    break;
                case "applicationcopyurl":
                    i.lpevent("m_caurl"), i.copyurl("app" + n);
                    break;
                case "applicationedit":
                    i.lpevent("m_ea"), i.editAid("app" + n);
                    break;
                case "applicationdelete":
                    i.lpevent("m_da"), i.deleteAid("app" + n);
                    break;
                case "fillforms":
                    i.lpevent("m_ff"), i.fillform(a);
                    break;
                case "editprofile":
                    i.lpevent("m_ef"), i.editprofile(a);
                    break;
                case "addprofile":
                    i.lpevent("m_af"), i.addprofile();
                    break;
                case "addcreditcard":
                    i.lpevent("m_acc"), i.addcreditcard();
                    break;
                case "clearforms":
                    i.lpevent("m_clrf"), i.clearforms();
                    break;
                case "chooseprofilecc":
                    if (i.lpevent("m_cpcc"), g_browseraction) return hidemenu(), void openmole("lpchooseprofilecc");
                    i.openchooseprofilecc();
                    break;
                case "matchedit":
                    i.lpevent("m_me"), i.editAid(n);
                    break;
                case "matchfill":
                    i.lpevent("m_mf"), i.fillaid(n);
                    break;
                case "matchcopyusername":
                    i.lpevent("m_mcu"), i.copyusername(n);
                    break;
                case "matchcopypassword":
                    i.lpevent("m_mcp"), i.copypassword(n);
                    break;
                case "matchcopyurl":
                    i.lpevent("m_mcurl"), i.copyurl(n);
                    break;
                case "matchcopynote":
                    i.lpevent("m_mcn"), i.copynote(n);
                    break;
                case "matchdelete":
                    i.lpevent("m_md"), i.deleteAid(n, null);
                    break;
                case "matchgotourl":
                    i.lpevent("m_mg2"), i.gotourl(n, null);
                    break;
                case "movematching":
                    i.lpPutUserPref("toplevelmatchingsites", 1), i.lpWriteAllPrefs(), g_isfirefoxsdk && i.update_prefs("menu");
                    break;
                default:
                    L("TSM : INVALID MENU ACTION cmd=" + e)
            }
            closemole()
        } else menuopendelete(e.substring(10), t)
    }
}

function deletenever(e, t) {
    var i, n = getBG().getnevers()[e];
    getBG().deleteNever(n), closemole()
}

function rightclickmenuaction(e) {
    var t = "";
    if (0 == e.indexOf("site") && "siteadd" != e) e = "match_noautofill" + (t = e.substring(4));
    else if (0 == e.indexOf("recentlyused")) e = "match_noautofill" + (t = e.substring(12));
    else {
        if (0 != e.indexOf("note") || "noteadd" == e) return !0;
        e = "match_note" + (t = e.substring(4))
    }
    return menuopen(e, "match", ""), !1
}

function getmenu() {
    var e = getBG();
    g_iname = getIdentityName();
    var t = {
        identityall: {
            title: gs("All")
        }
    };
    for (m in "" == e.g_identity && (t.identityall.icon = "images/checkmark.gif"), e.g_identities) t["identity" + e.g_identities[m].iid] = {
        title: e.g_identities[m].deciname
    }, e.g_identities[m].iid == e.g_identity && (t["identity" + e.g_identities[m].iid].icon = "images/checkmark.gif");
    t.linebreak0 = null, t.identityadd = {
        title: gs("Add Identity")
    };
    var i = {},
        n = 1 == e.lpGetPref("showAcctsInGroups", 1),
        s = {},
        a, r, o = !1,
        l = new Array,
        c = new Array,
        d = !1;
    for (a in e.g_sites)
        if (e.check_ident_aid(a)) {
            if ("http://group" == e.g_sites[a].url) continue;
            o = !0, null != (r = e.g_sites[a].group) && "" != r || (r = gs("(none)"));
            for (var p = r.split("\\"), g = "", m = 0; m < p.length; m++) 0 == m && "\\" == r[0] ? (g += "\\", m++) : "" != g && (g += "\\"), g += p[m], lp_in_array(g, l) || (l[l.length] = g);
            c[c.length] = e.g_sites[a], "1" == e.g_sites[a].fav && (d = !0)
        } l.sort(function(e, t) {
        return e.toLowerCase() < t.toLowerCase() ? -1 : 1
    });
    var u = n && (d || 1 < l.length);
    u && d && (s[gs("favorites")] = {
        title: gs("favorites"),
        children: {}
    });
    for (var h = l.length, f = new Array, m = 0; m < h; m++) {
        var r, _, g, v = {
                title: g = -1 == (_ = (r = l[m]).lastIndexOf("\\")) || 0 == _ ? r : r.substring(_ + 1),
                children: {}
            },
            _;
        if (f[r] = v, -1 == _ || 0 == _) u && (s[r + "sites"] = v);
        else void 0 !== f[_ = r.substring(0, _)] && void 0 !== f[_].children && (f[_].children[r.replace(/\\/g, "~|~") + "sites"] = v)
    }
    c.sort(function(e, t) {
        return e.last_touch > t.last_touch ? -1 : 1
    });
    for (var b = e.getClearRecentTime(), k = e.lpGetPref("recentUsedCount", 10), m = 0; m < c.length && m < k; m++) c[m].last_touch < b || (i["recentlyused" + c[m].aid] = {
        title: getSiteMenuTitle(c[m], !0),
        icon: e.geticonurl(c[m].fiid, !0)
    });
    0 == array_length(i) ? i.recentlyused0 = {
        title: gs("None Available")
    } : (i.linebreak0 = null, i.recentlyusedclear = {
        title: gs("Clear Recent")
    });
    var y = e.getmatchingsites(!1, !0, !1),
        w = getMatchingSitesHtml(y),
        x = g_maxcharsmatch,
        C = MAXNAME;
    g_maxcharsmatch = 33, MAXNAME = 34;
    for (var m = 0; m < y.length; m++) {
        var a, B = "matchedit" + (a = y[m].aid),
            $, G = "matchcopyusername" + a,
            A = "matchcopypassword" + a,
            O = "matchcopyurl" + a,
            P = "matchcopynote" + a,
            L = "matchdelete" + a,
            S = "matchgotourl" + a,
            I = [];
        I["matchfill" + a] = {
            title: gs("AutoFill")
        }, I[B] = {
            title: gs("Edit")
        }, getBG().can_copy_to_clipboard() && (I[G] = {
            title: gs("Copy Username")
        }, I[A] = {
            title: gs("Copy Password")
        }, I[O] = {
            title: gs("Copy URL")
        }, I[P] = {
            title: gs("Copy Note")
        }), I[L] = {
            title: gs("Delete")
        }, w["matchingsites" + y[m].aid] = {
            title: getSiteMenuTitle(y[m], !1),
            icon: e.geticonurl(y[m].fiid, !1),
            children: I
        }
    }
    g_maxcharsmatch = x, MAXNAME = C, c.sort(function(e, t) {
        return e.name.toLowerCase() < t.name.toLowerCase() ? -1 : 1
    });
    for (var m = 0; m < c.length; m++) {
        u && "1" == c[m].fav && void 0 !== s[gs("favorites")] && void 0 !== s[gs("favorites")].children && (s[gs("favorites")].children["site" + c[m].aid] = {
            title: getSiteMenuTitle(c[m], !0),
            icon: e.geticonurl(c[m].fiid)
        }), null != (r = c[m].group) && "" != r || (r = gs("(none)"));
        var v = {
            title: getSiteMenuTitle(c[m], !0),
            icon: e.geticonurl(c[m].fiid)
        };
        u ? void 0 !== f[r] && void 0 !== f[r].children && (f[r].children["site" + c[m].aid] = v) : s["site" + c[m].aid] = v
    }
    o && (s.linebreak0 = null);
    var E = {},
        a, r;
    o = !(s.siteadd = {
        title: gs("Add Site")
    });
    var l = new Array,
        M = new Array;
    for (a in e.g_securenotes)
        if (e.check_ident_aid(a)) {
            if (o = !0, null != (r = e.g_securenotes[a].group) && "" != r || (r = gs("(none)")), r != gs("Secure Notes"))
                for (var p = r.split("\\"), g = "", m = 0; m < p.length; m++) "" != g && (g += "\\"), g += p[m], lp_in_array(g, l) || (l[l.length] = g);
            M[M.length] = e.g_securenotes[a]
        } E.noteadd = {
        title: gs("Add Secure Note")
    }, o && (E.linebreak0 = null), l.sort(function(e, t) {
        return e.toLowerCase() < t.toLowerCase() ? -1 : 1
    });
    var N = n && 1 < l.length;
    f = new Array;
    for (var m = 0; m < l.length; m++) {
        var r, _, g, v = {
                title: g = -1 == (_ = (r = l[m]).lastIndexOf("\\")) ? r : r.substring(_ + 1),
                children: {}
            },
            _;
        if (f[r] = v, -1 == _) N && (E[r + "notes"] = v);
        else void 0 !== f[_ = r.substring(0, _)] && void 0 !== f[_].children && (f[_].children[r.replace(/\\/g, "~|~") + "notes"] = v)
    }
    M.sort(function(e, t) {
        return e.name.toLowerCase() < t.name.toLowerCase() ? -1 : 1
    });
    for (var m = 0; m < M.length; m++) null != (r = M[m].group) && "" != r || (r = gs("(none)")), N && r != gs("Secure Notes") && void 0 !== f[r] && void 0 !== f[r].children && (f[r].children["note" + M[m].aid] = {
        title: M[m].name,
        icon: e.geticonurl(M[m].fiid)
    });
    for (var m = 0; m < M.length; m++) r = M[m].group, N && r != gs("Secure Notes") || (E["note" + M[m].aid] = {
        title: M[m].name,
        icon: e.geticonurl(M[m].fiid, !0)
    });
    var T = void 0 !== e.g_have_application && e.g_have_application,
        F = {},
        a, r, l = new Array,
        U = new Array;
    for (a in e.g_applications)
        if (e.check_ident_appaid(a)) {
            if (T = !0, null != (r = e.g_applications[a].group) && "" != r || (r = gs("(none)")), r != gs("Applications"))
                for (var p = r.split("\\"), g = "", m = 0; m < p.length; m++) "" != g && (g += "\\"), g += p[m], lp_in_array(g, l) || (l[l.length] = g);
            U[U.length] = e.g_applications[a]
        } l.sort(function(e, t) {
        return e.toLowerCase() < t.toLowerCase() ? -1 : 1
    });
    var D = n && 1 < l.length;
    f = new Array;
    for (var m = 0; m < l.length; m++) {
        var r, _, g, v = {
                title: g = -1 == (_ = (r = l[m]).lastIndexOf("\\")) ? r : r.substring(_ + 1),
                children: {}
            },
            _;
        if (f[r] = v, -1 == _) D && (F[r + "applications"] = v);
        else void 0 !== f[_ = r.substring(0, _)] && void 0 !== f[_].children && (f[_].children[r.replace(/\\/g, "~|~") + "applications"] = v)
    }
    U.sort(function(e, t) {
        return e.name.toLowerCase() < t.name.toLowerCase() ? -1 : 1
    });
    for (var m = 0; m < U.length; m++) null != (r = U[m].group) && "" != r || (r = gs("(none)")), D && r != gs("Applications") && void 0 !== f[r] && void 0 !== f[r].children && (f[r].children["application" + U[m].appaid] = {
        title: U[m].name,
        icon: e.geticonurlfromrecord(U[m]),
        children: {}
    }, e.g_is_win && getBG().have_binary() && (f[r].children["application" + U[m].appaid].children["applicationlaunch" + U[m].appaid] = {
        title: gs("Launch")
    }), e.can_copy_to_clipboard() && (f[r].children["application" + U[m].appaid].children["applicationcopyusername" + U[m].appaid] = {
        title: gs("Copy Username")
    }, f[r].children["application" + U[m].appaid].children["applicationcopypassword" + U[m].appaid] = {
        title: gs("Copy Password")
    }), f[r].children["application" + U[m].appaid].children["applicationedit" + U[m].appaid] = {
        title: gs("Edit")
    }, f[r].children["application" + U[m].appaid].children["applicationdelete" + U[m].appaid] = {
        title: gs("Delete")
    });
    for (var m = 0; m < U.length; m++)
        if (r = U[m].group, !D || r == gs("Applications")) {
            var R = "application" + U[m].appaid;
            F[R] = {
                title: U[m].name,
                icon: e.geticonurlfromrecord(U[m]),
                children: {}
            }, void 0 !== F[R] && void 0 !== F[R].children && (e.g_is_win && getBG().have_binary() && (F[R].children["applicationlaunch" + U[m].appaid] = {
                title: gs("Launch")
            }), e.can_copy_to_clipboard() && (F[R].children["applicationcopyusername" + U[m].appaid] = {
                title: gs("Copy Username")
            }, F[R].children["applicationcopypassword" + U[m].appaid] = {
                title: gs("Copy Password")
            }), F[R].children["applicationedit" + U[m].appaid] = {
                title: gs("Edit")
            }, F[R].children["applicationdelete" + U[m].appaid] = {
                title: gs("Delete")
            })
        } var z = {},
        H = o = !1,
        j = !1;
    for (var m in e.g_formfills) e.check_ident_ffid(e.g_formfills[m].ffid) && (o = !0, z["fillforms" + e.g_formfills[m].ffid] = {
        title: e.g_formfills[m].decprofilename,
        icon: e.geticonFF(e.g_formfills[m].ffid)
    }, 0 == e.g_formfills[m].profiletype && (H = !0), "" != e.g_formfills[m].ccnum && (j = !0));
    if (o)
        for (var m in z.linebreak0 = null, z.editprofiles = {
                title: gs("Edit"),
                children: {}
            }, e.g_formfills) e.check_ident_ffid(e.g_formfills[m].ffid) && void 0 !== z.editprofiles && void 0 !== z.editprofiles.children && (z.editprofiles.children["editprofile" + e.g_formfills[m].ffid] = {
            title: e.g_formfills[m].decprofilename,
            icon: e.geticonFF(e.g_formfills[m].ffid)
        });
    z.addprofile = {
        title: gs("Add Profile")
    }, z.addcreditcard = {
        title: gs("Add Credit Card")
    }, z.clearforms = {
        title: gs("Clear Forms")
    }, H && j && (z.chooseprofilecc = {
        title: gs("Choose Profile and Credit Card")
    });
    var V = "" != e.g_identity ? " (" + g_iname + ")" : "",
        X = {
            logoff: {
                icon: "images/power_off.png",
                title: gs("Log Out:") + " " + e.g_username + V,
                cmd: "logoff"
            },
            linebreak1: null,
            vault: {
                icon: "images/icon_vault.png",
                title: gs("My LastPass Vault"),
                hotkey: "Ctrl+Alt+H",
                cmd: "vault",
                hidden: e.g_hidevault
            },
            recent: {
                icon: "images/icon_recent.png",
                title: gs("Recently Used"),
                children: i
            },
            matchingsites: {
                icon: "images/icon_recent.png",
                title: gs(""),
                children: w,
                hidden: !0
            },
            sites: {
                icon: "images/icon_sites.png",
                title: gs("Sites"),
                children: s
            },
            notes: {
                icon: "images/icon_notes.png",
                title: gs("Secure Notes"),
                hidden: e.g_hidenotes,
                children: E
            },
            applications: {
                icon: "images/icon_applications.png",
                title: gs("Applications"),
                hidden: !T,
                children: F
            },
            formfill: {
                icon: "images/icon_formfill.png",
                title: gs("Fill Forms"),
                children: z
            },
            preferences: {
                icon: "images/icon_preferences.png",
                title: gs("Preferences"),
                cmd: "preferences"
            },
            help: {
                icon: "images/icon_help.png",
                title: gs("Help..."),
                cmd: "help"
            },
            tools: {
                icon: "images/icon_tools.png",
                title: gs("Tools"),
                children: getTools(d, g_iname, t)
            },
            generate: {
                icon: "images/keyboard.png",
                title: gs("Generate Secure Password"),
                key: "Alt+G",
                cmd: "generate"
            },
            entconsole: {
                icon: "images/lock.png",
                title: gs("Admin Console"),
                cmd: "entconsole",
                hidden: !e.g_iscompanyadmin
            },
            linebreak2: null,
            premium: {
                icon: "images/icon_premium.png",
                title: gs("Go Premium!"),
                cmd: "premium",
                hidden: e.LPISLOC || e.g_hidegopremium
            },
            server: {
                icon: "images/icon_premium.png",
                title: gs("Upgrade to LastPass Online!"),
                cmd: "server",
                hidden: !e.LPISLOC
            },
            saveall: {
                icon: "images/icon_saveall.png",
                title: gs("Save All Entered Data"),
                cmd: "saveall"
            },
            matchscroll: null
        };
    return 0 == k && delete X.recent, X
}

function getMatchingSitesHtml(e) {
    var t = {},
        i = getBG(),
        n = g_maxcharsmatch,
        s = MAXNAME;
    g_maxcharsmatch = 33, MAXNAME = 34;
    for (var a = 0; a < e.length; a++) {
        var r = e[a].aid,
            o = "matchedit" + r,
            l, c = "matchcopyusername" + r,
            d = "matchcopypassword" + r,
            p = "matchcopyurl" + r,
            g = "matchcopynote" + r,
            m = "matchdelete" + r,
            u = "matchgotourl" + r,
            h = [];
        h["matchfill" + r] = {
            title: gs("AutoFill")
        }, h[o] = {
            title: gs("Edit")
        }, getBG().can_copy_to_clipboard() && (h[c] = {
            title: gs("Copy Username")
        }, h[d] = {
            title: gs("Copy Password")
        }, h[p] = {
            title: gs("Copy URL")
        }, h[g] = {
            title: gs("Copy Note")
        }), h[m] = {
            title: gs("Delete")
        }, t["matchingsites" + e[a].aid] = {
            title: getSiteMenuTitle(e[a], !1),
            icon: i.geticonurl(e[a].fiid, !1),
            children: h
        }
    }
    return t
}

function getToolsHtml() {
    var e = "<div id='mainmenu'><div id='stdmenu'>",
        t = getTools(haveFav(), g_iname, {});
    for (var i in t) {
        var n;
        if (t[i]) e += "<div class='" + (t[i].children ? "arrow" : "") + "' id='" + ofa(i) + "'>" + of (t[i].title) + "<span></span></div>";
        else e += "<hr/>"
    }
    return e += "</div></div>"
}

function haveFav() {
    var e = getBG();
    for (aid in e.g_sites)
        if (e.check_ident_aid(aid) && "1" == e.g_sites[aid].fav) return !0;
    return !1
}

function getTools(e, t, i) {
    var n = getBG(),
        s;
    return {
        seccheck: {
            icon: "images/tick.png",
            title: gs("Security Challenge"),
            hidden: n.LPISLOC || n.g_hideseccheck
        },
        identities: {
            icon: "images/icon_identities.png",
            title: gs("Identities") + " (" + of (t) + ")",
            hidden: n.g_hideidentities,
            children: i
        },
        legacy: {
            icon: "",
            title: gs("LastPass Legacy"),
            hidden: !n.g_legacy_enabled || !is_user_premium()
        },
        console: {
            icon: "",
            title: gs("Debug Console"),
            hidden: !n.is_user_debug_enabled()
        },
        openfavorites: {
            icon: "images/icon_favorites.png",
            title: gs("Open Favorites"),
            cmd: "openfavorites",
            hidden: !e || n.g_hideopenfavs
        },
        search: {
            icon: "images/search-icon-blue.gif",
            title: gs("Site Search"),
            key: "Alt+W",
            hidden: n.g_hidesearch || g_new_menu
        },
        recheck: {
            icon: "images/page_gear.png",
            title: gs("Recheck Page"),
            key: "Alt+I",
            hidden: n.g_hiderecheckpage || g_new_menu
        },
        about: {
            icon: "images/icon16.png",
            title: gs("About..."),
            hidden: n.g_hideabout
        },
        linebreak0: null,
        lpmoretools: {
            icon: "images/export.png",
            title: gs("Advanced Tools"),
            hidden: !g_new_menu,
            children: {
                search: {
                    icon: "images/search-icon-blue.gif",
                    title: gs("Site Search"),
                    key: "Alt+W",
                    hidden: n.g_hidesearch
                },
                recheck: {
                    icon: "images/page_gear.png",
                    title: gs("Recheck Page"),
                    key: "Alt+I",
                    hidden: n.g_hiderecheckpage
                },
                refresh: {
                    icon: "images/reload.gif",
                    title: gs("Refresh Sites"),
                    hidden: n.LPISLOC
                },
                clear: {
                    icon: "images/computer_delete.png",
                    title: gs("Clear Local Cache"),
                    hidden: n.LPISLOC
                },
                update: {
                    icon: "images/exclamation.png",
                    title: gs("Check For Updates"),
                    hidden: n.g_hidecheckupdates
                },
                linebreak0: null,
                myaccount: {
                    icon: "images/group_key.png",
                    title: gs("My Account"),
                    hidden: !islastpass
                },
                sessions: {
                    icon: "images/group_key.png",
                    title: gs("Other Sessions"),
                    hidden: n.LPISLOC || n.g_hidesessions
                },
                lpexport: {
                    icon: "images/export.png",
                    title: gs("Export To"),
                    hidden: n.g_hideexport,
                    children: {
                        exportcsv: {
                            title: gs("LastPass CSV File")
                        },
                        exportlastpass: {
                            title: gs("LastPass Encrypted File"),
                            hidden: !n.have_binary()
                        },
                        exportwlan: {
                            title: gs("Wi-Fi Passwords"),
                            hidden: !islastpass || !n.g_is_win || !n.have_binary()
                        },
                        exportformfill: {
                            title: gs("Form Fill Profiles")
                        }
                    }
                }
            }
        },
        lpimport: {
            icon: "images/import.png",
            title: gs("Import"),
            hidden: !is_opera_chromium() && !g_issafari && !g_isfirefoxsdk && !is_firefox_webext() || n.g_hideimport
        },
        importmenu: {
            icon: "images/import.png",
            title: gs("Import From"),
            hidden: n.g_hideimport || is_opera_chromium() || g_issafari || g_isfirefoxsdk || is_firefox_webext(),
            children: {
                importgooglechrome: {
                    title: gs("Google Chrome Password Manager"),
                    hidden: !n.g_is_win && !n.g_is_mac && !n.g_is_linux
                },
                lpimport: {
                    title: gs("Other"),
                    hidden: n.LPISLOC
                }
            }
        },
        lpexport: {
            icon: "images/export.png",
            title: gs("Export To"),
            hidden: n.g_hideexport || g_new_menu,
            children: {
                exportcsv: {
                    title: gs("LastPass CSV File")
                },
                exportlastpass: {
                    title: gs("LastPass Encrypted File"),
                    hidden: !n.have_binary()
                },
                exportwlan: {
                    title: gs("Wi-Fi Passwords"),
                    hidden: !islastpass || !n.g_is_win || !n.have_binary()
                },
                exportformfill: {
                    title: gs("Form Fill Profiles")
                }
            }
        },
        print: {
            icon: "images/printer.png",
            title: gs("Print"),
            hidden: n.g_hideprint,
            children: {
                printsites: {
                    title: gs("Sites")
                },
                printnotes: {
                    title: gs("Secure Notes"),
                    hidden: n.g_hidenotes
                }
            }
        },
        update: {
            icon: "images/exclamation.png",
            title: gs("Check For Updates"),
            hidden: n.g_hidecheckupdates || g_new_menu
        },
        clear: {
            icon: "images/computer_delete.png",
            title: gs("Clear Local Cache"),
            hidden: n.LPISLOC || g_new_menu
        },
        refresh: {
            icon: "images/reload.gif",
            title: gs("Refresh Sites"),
            hidden: n.LPISLOC || g_new_menu
        },
        sessions: {
            icon: "images/group_key.png",
            title: gs("Other Sessions"),
            hidden: n.LPISLOC || n.g_hidesessions || g_new_menu
        },
        linebreak2: null,
        addsite: {
            icon: "images/site_add.png",
            title: gs("Add Site")
        },
        saveall: {
            icon: "images/icon_saveall.png",
            title: gs("Save All Entered Data"),
            hidden: !g_new_menu
        },
        addnote: {
            icon: "images/note_add.png",
            title: gs("Add Secure Note"),
            hidden: n.g_hidenotes
        }
    }
}

function rebuildmenu() {
    var e = "";
    g_hoverrow = null;
    var t = "";
    t += '<div id="menutitle"></div>', t += '<div id="backbutton1" class="backbutton"><img src="backarrow.png"/> ' + gs("Back").toUpperCase() + "</div>", t += '<table cellspacing="0"><tr>', t += '<td>&nbsp;<div id="menu0"></div></td>', t += '<td>&nbsp;<div id="menu1"></div></td>', t += "</tr></table>", t += '<div id="backbutton2" class="backbutton"><img src="backarrow.png"/> ' + gs("Back").toUpperCase() + "</div>", $("#menucontainer").html(t), $(".backbutton").hover(function() {
        g_hoverrow = $(this).attr("id"), setTimeout(function() {
            menuautoclick(g_hoverrow)
        }, 1e3), $(this).css({
            background: "url(backbgover.png) repeat-x"
        })
    }, function() {
        g_hoverrow = null, $(this).css({
            background: "url(backbg.png) repeat-x"
        })
    }).click(function() {
        popmenu()
    });
    var i = getmenu(),
        n = 60;
    g_menuwidth = 9 * (g_maxchars = 40), g_menuwidthmatch = 9 * (g_maxcharsmatch = 31), "en-US" == getBG().lpGetPref("language", "en-US") && (g_maxcharsmatch = 50);
    var t = "",
        s, a, r, o, l, c;
    for (s in i)
        if ("matchscroll" != s)
            if (null != i[s]) {
                if ("premium" != i[s].cmd || !(getBG().g_premium_exp > lp_get_local_timestamp() || getBG().g_enterpriseuser)) {
                    (m = i[s].title).length > g_maxchars && (m = m.substring(0, g_maxchars - 3) + "..."), c = "", void 0 !== i[s].children ? c = ' data-lpmenurowtype="1" data-lptitle="' + ofja(m) + '"' : void 0 !== i[s].cmd && (c = ' data-lpmenurowtype="2" data-lpcmd="' + ofja(i[s].cmd) + '"');
                    var d = "";
                    i[s].hidden && (d = " displaynone"), t += '<div id="menurow' + ofja(s) + '" class="newmenurow' + d + '"' + c + ">", t += '<div class="menuitemdiv" data-lpwidth="' + g_menuwidth + '" data-lpbackground="' + i[s].icon + '">' + of (m) + "</div>", void 0 !== i[s].children && (t += '<img src="arrow.png" alt="' + gs("expand") + '"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'), t += '<div class="clearboth"></div>', t += "</div>"
                }
            } else t += '\n<div class="nulldiv"></div>';
    else {
        var p = getBG().getnevers(),
            g = !0,
            p;
        for (s in p) {
            g && (g = !1, t += '\n<div class="neverdiv"></div>');
            var m = gs("Never Add Site");
            "neverautologins" == p[s].type && (m = gs("Never AutoLogin")), "nevergenerates" == p[s].type && (m = gs("Never Generate Password")), "neverformfills" == p[s].type && (m = gs("Never Fill Forms")), "nevershowicons" == p[s].type && (m = gs("Never Show Context Icons")), 1 == p[s].domain && (m += " " + gs("(domain)")), t += '<div">', t += '<div class="floatleft newmenurow" id="opendelete' + s + '" data-lptitle="' + ofja(m) + '">', t += '<div class="menuitemdiv" data-lpwidth="' + g_menuwidth + '" data-lpbackground="close.png">' + m + "</div>", t += '<img src="arrow.png">&nbsp;', t += "</div>", t += '<div class="clearboth"></div>', t += "</div>"
        }
        if (0 < (p = getBG().getmatchingsites()).length)
            for (s in t += '\n<div class="matchingsitesdiv"></div>', p) p.hasOwnProperty(s) && (a = "match" + p[s].aid, m = getSiteMenuTitle(p[s], !1), t += '<div">', t += '<div id="menurow' + ofja(a) + '" class="floatleft newmenurow" data-lptitle="' + ofja(m) + '">', t += '<div class="menuitemdiv" data-lpwidth="' + g_menuwidthmatch + '" data-lpbackground="' + getBG().geticonurl(p[s].fiid) + '">' + ofja(m) + "</div>", t += '<img src="arrow.png" alt="expand"/>&nbsp;', t += '<div class="clearboth"></div>', t += "</div>", t += '<img src="fill.png" alt="autofill" class="cursorpointer" title="' + gs("AutoFill") + '" id="matchfill' + p[s].aid + '"/>&nbsp;', getBG().can_copy_to_clipboard() && (t += '<img src="copyusername.png" alt="copyusername" class="cursorpointer" title="' + gs("Copy Username") + '" id="matchcopyusername' + p[s].aid + '"/>&nbsp;', t += '<img src="copypassword.png" alt="copypassword" class="cursorpointer" title="' + gs("Copy Password") + '" id="matchcopypassword' + p[s].aid + '"/>&nbsp;', t += '<img src="copyurl.png" alt="copyurl" class="cursorpointer" title="' + gs("Copy URL") + '" id="matchcopyurl' + p[s].aid + '"/>&nbsp;'), t += "&nbsp;&nbsp;&nbsp;&nbsp;", t += '<div class="clearboth"></div>', t += "</div>")
    }
    pushmenu(t += "<div><br/><br/><br/></div>", ""), resize_menu()
}

function getIdentityName() {
    var e = getBG(),
        t = "",
        i;
    if ("" == e.g_identity) t = gs("All");
    else
        for (i in e.g_identities)
            if (e.g_identities[i].iid == e.g_identity) {
                t = e.g_identities[i].deciname;
                break
            } return t
}

function hasApplication() {
    if (void 0 !== getBG().g_have_application && getBG().g_have_application) return !0;
    var e = !1;
    for (var t in getBG().g_applications)
        if (getBG().check_ident_appaid(t)) return !0;
    return !1
}

function menu3() {
    lpdbg("menu", "in menu3");
    var e = getBG();
    g_iname = getIdentityName();
    var t = "" != e.g_identity ? " (" + g_iname + ")" : "",
        i = e.getmatchingsites(!1, !0, !1),
        n = i.length,
        s = parseInt(e.lpGetPref("toplevelmatchingsites", 0)),
        a = 1 == parseInt(e.lpGetPref("usepopupfill", 1)),
        r = 0 == n || s ? " displaynone" : "",
        o = getBG().can_copy_to_clipboard(),
        l = 0 != n && s ? "<hr/>" + addKidsHtml("mainmenu", getMatchingSitesHtml(i), o, "top") : "",
        c = "png";
    "undefined" != typeof safari && (c = "png");
    var d = e.g_hidevault ? "" : "<div id='vault' class=''><img id='vaultsvg' src='./images/vault." + c + "'/><span></span><p>" + gs("My LastPass Vault") + "</p></div>",
        p = e.g_hidenotes ? "" : "<div id='notes' class='arrow ricon'><img id='securenotesvg' src='./images/secure_note." + c + "'/><span></span><p>" + gs("Secure Notes") + "</p></div>",
        g = hasApplication() ? "<div id='applications' class='arrow ricon'><span></span><p>" + gs("Applications") + "</p></div>" : "",
        m = "<div id='mainmenu'><div id='topbar'><input id='menusearch' type='text' class='iconize' placeholder='" + gs("Search LastPass Vault") + "'/><div id='xsearchbar'><img id='xsearchimg' src='images/search.png'/></div><div id='searchbar'></div></div><div id='searchresults' class='displaynone'></div><div id='stdmenu'>" + d + "<div id='sites' class='arrow ricon'><img id='sitessvg' src='./images/sites." + c + "'/><span></span><p>" + gs("Sites") + "</p></div><div id='formfill' class='arrow ricon'><img id='formfillsvg' src='./images/formfill." + c + "'/><span></span><p>" + gs("Form Fills") + "</p></div><div id='generate' class='arrow ricon'><img id='generatesvg' src='./images/generate." + c + "'/><span></span><p>" + gs("Generate Secure Password") + "</p></div>" + p + g + "<hr/><div id='matchingsites' class='arrow" + r + "'>" + gs("Show Matching Sites") + "<span id='matchingnum'>" + n + "</span><span></span></div><div id='recent' class='arrow'>" + gs("Recently Used") + "<span></span></div><hr/><div id='tools' class='arrow'>" + gs("Tools") + "<span></span></div><div id='preferences' class=''>" + gs("Preferences") + "<span></span></div><div id='help' class=''>" + gs("Help") + "<span></span></div>" + (e.g_iscompanyadmin ? "<div id='entconsole' class=''>" + gs("Admin Console") + "<span></span></div>" : "") + showPromo();
    if (2 == getBG().g_lp_model && null == localStorage_getItem("menupromo") && (!getBG().g_enterpriseuser && getBG().g_premium_exp <= lp_get_local_timestamp() ? m += "<div id='premium' class=''>" + gs("Upgrade to Premium") + "<span class='menux'></span></div>" : getBG().g_enterpriseuser || (m += "<div id='enterprise' class=''>" + gs("Try LastPass Enterprise") + "<span class='menux'></span></div>")), m += "<hr/><div id='logoff' class='logoff'>" + gs("Log Out:") + " " + e.g_username + t + "<span></span></div>" + l + "</div></div>", lpdbg("menu", "setting menucontainer html"), $("#menucontainer").html(m), lpdbg("menu", "set menucontainer html"), g_isfirefoxsdk && (document.getElementById("menusearch").style.outlineStyle = "solid", document.getElementById("xsearchbar").style.left = "85%"), focusme_style(), document.getElementById("menusearch").addEventListener("keydown", function(e) {
            menusearch_keydown(e)
        }), document.getElementById("menusearch").addEventListener("keyup", function(e) {
            menusearch_keyup(e)
        }), document.getElementById("xsearchbar").addEventListener("click", function(e) {
            document.getElementById("menusearch").value = "", populatemenu(), document.getElementById("xsearchimg").src = "images/search.png", document.getElementById("menusearch").focus()
        }), $("#stdmenu").children("div").click(function(e) {
            var t = e.target.id;
            "" == t && (t = e.target.parentNode.id), moveMenu(t, e)
        }), $("#matchingnum").click(function(e) {
            moveMenu("matchingsites", e)
        }), $(".menux").click(function(e) {
            return localStorage_setItem("menupromo", "1"), $("#premium").hide(), $("#enterprise").hide(), !1
        }), $(".menuxdark").click(function(e) {
            return localStorage_setItem("giftpromo", "1"), $("#gift").hide(), !1
        }), $("#menusearch").focus(), s && ($("#stdmenu").children("div").children("usericon").click(function(e) {
            handlecopyclick(e, 0)
        }), $("#stdmenu").children("div").children("passicon").click(function(e) {
            handlecopyclick(e, 1)
        }), a || $("#stdmenu").children("div").children("fillicon").click(function(e) {
            return menuaction("matchfill" + getaid(e.target.parentNode)), e.stopPropagation(), !1
        })), g_kbselected = null, MAXNAME = 60, g_maxcharsmatch = 44, $(".ricon").mouseover(function(e) {
            null !== g_kbselected && g_kbselected.removeClass("kbselected"), (g_kbselected = $("#" + this.id)).addClass("kbselected"), this.childNodes[0].style.opacity = 1
        }), $(".ricon").mouseout(function(e) {
            null !== g_kbselected && g_kbselected.removeClass("kbselected"), this.childNodes[0].style.opacity = .6
        }), setTimeout(function() {
            g_menu = getmenu(), g_pointer = g_menu, g_ids = [], g_pointer_stack = []
        }, 0), !g_isfirefoxsdk) {
        var u = document.getElementById("menucontainer").clientHeight;
        document.getElementsByTagName("html")[0].style.height = document.getElementsByTagName("body")[0].style.height = u + "px"
    }
    document.getElementById("menucontainer").style.display = "none", setTimeout(function() {
        $("#menusearch").focus(), document.getElementById("menucontainer").style.display = "block"
    }, 100), setTimeout(function() {
        $("#menusearch").focus(), document.getElementById("menucontainer").style.display = "block"
    }, 300), setTimeout(function() {
        $("#menusearch").focus()
    }, 300), resize_menu()
}

function showPromo() {
    if (!islastpass || getBG().g_enterpriseuser) return "";
    var e = new Date;
    return null == localStorage_getItem("giftpromo") && (10 == e.getMonth() && 25 <= e.getDate() || 11 == e.getMonth() && e.getDate() <= 25) ? "<div id='gift'><img src='./images/gift.png'/><xicon class='menuxdark'></xicon><span></span><p>" + gs("Give the Gift of LastPass Premium") + "</p></div>" : ""
}

function getaid(e) {
    var t = e.id;
    return t && 0 == t.indexOf("topmatchingsites") && (t = t.substring(3)), t && 0 == t.indexOf("matchingsites") && (t = t.substring(13)), t
}

function moveMenu(e, t) {
    null == g_pointer && (g_menu = getmenu(), g_pointer = g_menu), 0 == e.indexOf("topmatchingsites") && (g_pointer = g_menu.matchingsites.children, e = e.substring(3)), g_pointer[e] && g_pointer[e].children ? (t.stopPropagation(), t.preventDefault(), updateMenu(e)) : menuaction(e)
}

function addKidsHtml(e, t, i, n) {
    var s = "";
    n = n || "", s += "<input id='focusme' type='text' class='iconize'/>";
    var a = 1 == parseInt(getBG().lpGetPref("usepopupfill", 1));
    for (var r in t)
        if (t[r]) {
            if (void 0 !== t[r].hidden && t[r].hidden) continue;
            var o = "",
                l = "";
            "tools" != e && "lpmoretools" != e ? (l = void 0 !== t[r].icon ? "<img src='" + ofa(t[r].icon) + "'/>" : "", t[r].children ? o = "arrow" : t[r].icon && "identities" != e && (o = "hasaction")) : o = t[r].children ? "arrow" : "", s += "<div class='" + o + "' id='" + ofa(n + r) + "'>" + l + of (t[r].title) + "<span></span>" + (i ? "<passicon title='" + gs("Copy Password") + "'></passicon><usericon title='" + gs("Copy Username") + "'></usericon>" : "") + (i && !a ? "<fillicon title='" + gs("AutoFill") + "'></fillicon>" : "") + "</div>"
        } else s += "<hr/>";
    return s
}

function updateMenu(e) {
    var t = "<div id='backrow'><span></span>" + gs("BACK") + "</div>";
    t += "<div id='mainmenu'><div id='stdmenu'>";
    var i = g_pointer[e].children,
        n = "matchingsites" == e && getBG().can_copy_to_clipboard();
    t += addKidsHtml(e, i, n), "matchingsites" == e && (t += "<hr/><div id='movematching'>" + gs("Move matching sites to top menu") + "</div>"), t += "</div></div>", g_pointer_stack.push(g_pointer), g_ids.push(e), g_pointer = i, $("#menucontainer").fadeOut(100, function() {
        $("#menucontainer").html(t), $("#menucontainer").fadeIn(100), $("#stdmenu").children("div").click(function(e) {
            var t;
            moveMenu(e.target.id, e)
        }), $("#stdmenu").children("div").bind("contextmenu", function(e) {
            handleeditclick(e)
        }), n && ($("#stdmenu").children("div").children("usericon").click(function(e) {
            handlecopyclick(e, 0)
        }), $("#stdmenu").children("div").children("passicon").click(function(e) {
            handlecopyclick(e, 1)
        }), $("#stdmenu").children("div").children("fillicon").click(function(e) {
            return menuaction("matchfill" + getaid(e.target.parentNode)), e.stopPropagation(), !1
        }), $("#movematching").click(function(e) {
            getBG().lpPutUserPref("toplevelmatchingsites", 1), getBG().lpWriteAllPrefs(), g_isfirefoxsdk && getBG().update_prefs("menu")
        })), "matchingsites" == e || "sites" == e || "tools" == e || "lpmoretools" == e || "applications" == e ? $("#stdmenu").children("div").children("span").click(function(e) {
            var t;
            moveMenu(e.target.parentNode.id, e)
        }) : $("#stdmenu").children("div").children("span").click(function(e) {
            handleeditclick(e)
        }), $("#backrow").click(function(e) {
            goback()
        }), reInitKbSelected()
    }), resize_menu()
}

function handlecopyclick(e, t) {
    var i = null;
    e && (e.stopPropagation(), e.preventDefault(), i = "contextmenu" == e.type && "DIV" == e.target.tagName ? e.target.id : e.target.parentNode.id);
    var n = getBG();
    i && 0 == i.indexOf("matchingsites") ? i = i.substring(13) : i && 0 == i.indexOf("topmatchingsites") && (i = i.substring(16)), 0 == t ? (getBG().lpevent("m_mcu"), getBG().copyusername(i)) : 1 == t && (getBG().lpevent("m_mcp"), getBG().copypassword(i)), closemole()
}

function goback() {
    var e;
    (g_kbselected = g_kbsubselected = null, g_pointer_stack.length <= 1) ? (document.getElementById("password_button") && (document.getElementById("password_button").style.display = "none"), menu3()) : (g_pointer_stack.pop(), g_ids.pop(), g_pointer = g_pointer_stack.pop(), updateMenu(g_ids.pop()))
}

function get_key_code(e) {
    var t = e.charCode ? e.charCode : e.keyCode ? e.keyCode : e.which ? e.which : 0;
    return 9 == t && (t = 40), t
}
var g_kbselected = null;

function menusearch_keydown(e) {
    var t = $("#stdmenu").is(":visible"),
        i = get_key_code(e);
    if (40 == i || 38 == i) {
        if (null == g_kbselected) t ? (g_kbselected = $("#stdmenu").children("div:first")).addClass("kbselected") : (g_kbselected = $("#searchresults").children("div:first")) && (g_kbselected.addClass("kbselected"), $("#searchresults").scrollTop());
        else {
            var n = 40 == i ? g_kbselected.next() : g_kbselected.prev();
            if (t) {
                if (!n[0]) return !1;
                for (;
                    "DIV" !== n[0].tagName || -1 < n[0].className.indexOf("displaynone");) n = 40 == i ? n.next() : n.prev();
                g_kbselected.removeClass("kbselected"), n.addClass("kbselected"), g_kbselected = n
            } else n.length && (g_kbselected.removeClass("kbselected"), n.addClass("kbselected"), g_kbselected = n, scrollSelected(40 == i))
        }
        return $("#menusearch").focus(), e.preventDefault(), e.stopPropagation(), !1
    }
    if (39 == i || 13 == i) return t && (g_kbselected.click(), g_kbselected = null), !1;
    if (37 == i) {
        var s = document.getElementById("backrow");
        "backbtn" != typeof backbt && s.click()
    }
    return !0
}
var g_kbsubselected = null;

function invisiblenavs_key(e) {
    if (document.getElementById("invisiblenav")) {
        var t = get_key_code(e);
        if (37 == t) goback();
        else if (13 == t) g_kbsubselected.click();
        else if (40 == t || 38 == t)
            if (null == g_kbsubselected)(g_kbsubselected = $("#stdmenu").children("div:first")) && (g_kbsubselected.addClass("kbselected"), $("#stdmenu").is(":visible") || $("#stdmenu").scrollTop());
            else {
                var i = 40 == t ? g_kbsubselected.next() : g_kbsubselected.prev();
                i.length && (g_kbsubselected.removeClass("kbselected"), i.addClass("kbselected"), g_kbsubselected = i, scrollSelected(40 == t))
            }
    }
}

function menusearch_keyup(e) {
    var t = document.getElementById("menusearch").value;
    document.getElementById("xsearchimg").src = "" == t ? "images/search.png" : "images/cancel.png";
    var i = get_key_code(e),
        n;
    if (40 != i && 38 != i && 13 != i && 39 != i) return g_kbselected && (g_kbselected.removeClass("kbselected"), g_kbselected = null), populatemenu(), !0;
    if (13 == i && g_kbselected) menuaction("site" + (n = g_kbselected.attr("id")));
    else if (39 == i && g_kbselected) {
        var n;
        handleeditclick(e, n = g_kbselected.attr("id"))
    }
    return $("#menusearch").focus(), e.preventDefault(), e.stopPropagation(), !1
}

function scrollSelected(e) {
    var t = $("#searchresults").height(),
        i = g_kbselected.height(),
        n = $("#searchresults").scrollTop(),
        s = 15,
        a;
    if (e) {
        if (g_kbselected.position().top > t) {
            var a = g_kbselected.position().top + n - i - 15;
            $("#searchresults").animate({
                scrollTop: a
            }, 100)
        }
    } else g_kbselected.position().top < i && (((a = n - g_kbselected.position().top - i - 15) < 0 || a < i) && (a = 0), $("#searchresults").animate({
        scrollTop: a
    }, 20))
}

function clearsearch() {
    $("#searchresults").fadeOut(200, function() {
        $("#stdmenu").fadeIn(200)
    })
}

function populatemenu() {
    var e = $("#menusearch").val();
    if ("" != e) {
        $("#stdmenu").is(":visible") && $("#stdmenu").fadeOut(200, function() {
            $("#searchresults").fadeIn(200)
        });
        var t = getBG(),
            i = !t.g_prompts.edit_sn_prompt && t.get_searchNotesPref(),
            n = search_results(e, i, "searchresults", !0);
        n.sort(getBG().lp_sort_case_insensitive_name);
        var s = "";
        if (n.length)
            for (var a in n) {
                var r = t.geticonurl(n[a].fiid, "http://sn" == n[a].url),
                    o = void 0 !== n[a].appaid ? "app" + n[a].appaid : n[a].aid,
                    l = getSiteMenuTitle(n[a], !0);
                s += "<div id='" + ofa(o) + "'><img src='" + r + "'/>" + of (l) + "<span></span></div>"
            } else s += "<p class='noresults'>" + gs("No matches found. Please search again.") + "</p>";
        $("#searchresults").html(s), $("#searchresults").children("div").click(function(e) {
            handlelaunchclick(e)
        }), $("#searchresults").children("div").children("span").click(function(e) {
            handleeditclick(e)
        }), $("#searchresults").children("div").bind("contextmenu", function(e) {
            handleeditclick(e)
        }), resize_menu(), setTimeout(resize_menu, 1e3), setTimeout(resize_menu, 2e3)
    } else clearsearch()
}

function handleeditclick(e, t) {
    if (e && (e.stopPropagation(), e.preventDefault(), "contextmenu" == e.type && "DIV" == e.target.tagName ? t = e.target.id : "keyup" != e.type && (t = e.target.parentNode.id)), "movematching" != t) {
        var i = getBG(),
            n = "match" + t;
        if (0 == t.indexOf("site")) t = t.substring(4);
        else if (0 == t.indexOf("recentlyused")) t = t.substring(12), n = getBG().g_securenotes[t] ? "match_note" + t : "match" + t;
        else if (0 == t.indexOf("note")) n = "match_note" + (t = t.substring(4));
        else if (0 == t.indexOf("fillforms")) n = "match_ff" + (t = t.substring(9));
        else if (0 == t.indexOf("application")) return void moveMenu(t, e);
        var s = findmatchmenuchildren(n, e);
        if (s) {
            var a = "<div id='backrow'><span></span>" + gs("BACK") + "</div>";
            for (var r in a += getnameandfavicon(t), a += "<input id='invisiblenav' type='hidden'><div id='mainmenu'><div id='stdmenu'>", s) a += "<div id='" + ofa(r) + "'>" + of (s[r].title) + "</div>";
            a += "</div></div>", g_pointer_stack.push(g_pointer), g_ids.push(t), g_pointer = null, $("#menucontainer").fadeOut(100, function() {
                $("#menucontainer").html(a), $("#menucontainer").fadeIn(100), $("#stdmenu").children("div").click(function(e) {
                    var t;
                    menuaction(e.target.id)
                }), $("#backrow").click(function(e) {
                    goback()
                }), -1 == g_submenulistener && (g_submenulistener = document.body.addEventListener("keydown", function(e) {
                    invisiblenavs_key(e)
                }))
            }), resize_menu()
        }
    }
}

function getnameandfavicon(e) {
    var t = !1,
        i = getBG().g_sites[e],
        n;
    if (i || (i = getBG().g_securenotes[e], t = !0), i) return "<hr/><div class='editname'><img src='" + (n = getBG().geticonurl(i.fiid, t)) + "'/> " + of (i.name) + "</div><hr/>";
    for (var s in getBG().g_formfills) {
        var a = getBG().g_formfills[s],
            n;
        if (a.ffid == e) return "<hr/><div class='editname'><img src='" + (n = getBG().geticonFF(e)) + "'/> " + of (a.decprofilename) + "</div><hr/>"
    }
    return ""
}

function handlelaunchclick(e) {
    var t;
    menuaction("site" + e.target.id)
}

function pushmenu(e, t) {
    var i = $("#menu0"),
        n = $("#menu1"),
        s = n.width(),
        a = !1;
    if (g_is_mac && i.scrollTop(0), e) {
        if (g_menus.push(e), 1 == g_menus.length) return i.html(e), void setup_event_handlers();
        n.html(e)
    }
    var r = Math.abs(parseInt(i.css("margin-left").replace("px", "")));
    r < g_menuwidth && (r = r + g_menuspeed < g_menuwidth ? r + g_menuspeed : g_menuwidth, i.css("margin-left", -r + "px"), r == g_menuwidth ? i.hide() : a = !0), 2 != g_menus.length && s < g_menuwidth && (0 == s && n.show(), s = s + g_menuspeed < g_menuwidth ? s + g_menuspeed : g_menuwidth, n.width(s), a = !0), a ? setTimeout(function() {
        pushmenu(null, es(t))
    }, 0) : (i.html(n.html()).css("margin-left", "0px"), n.hide().html("").css("width", "0px"), i.show(), setTimeout(function() {
        menuconnectevents()
    }, 100), t = quoteprettyprint(t), g_menutitles.push(t), $("#menutitle").html( of (t)).show(), $(".backbutton").show()), setup_event_handlers()
}

function popmenu(e) {
    var t = $("#menu0"),
        i = $("#menu1"),
        n = i.width(),
        s = !1;
    e || (t.hide().html(g_menus[g_menus.length - 2]).css("margin-left", g_menuwidth + "px"), i.css("width", g_menuwidth + "px").html(g_menus[g_menus.length - 1]).show(), g_menus.pop(), n = g_menuwidth), 0 < n && (n = 0 < n - g_menuspeed ? n - g_menuspeed : 0, i.width(n), 0 == n ? i.hide() : s = !0);
    var a = Math.abs(parseInt(t.css("margin-left").replace("px", "")));
    a == g_menuwidth && t.show(), 0 < a && (a = 0 < a - g_menuspeed ? a - g_menuspeed : 0, t.css("margin-left", -a + "px"), s = !0), s ? setTimeout(function() {
        popmenu(1)
    }, 0) : (i.html(""), setTimeout(function() {
        menuconnectevents()
    }, 100), g_menutitles.pop(), 1 == g_menus.length ? ($("#menutitle").hide().html(""), $(".backbutton").hide()) : $("#menutitle").html( of (g_menutitles[g_menutitles.length - 1]))), setup_event_handlers()
}

function menuconnectevents() {
    $(".newmenurow").hover(function() {
        g_hoverrow = $(this).attr("id"), setTimeout(function() {
            menuautoclick(g_hoverrow)
        }, 1e3);
        var e = $(this).css({
            background: "#316AC5",
            color: "#fff"
        });
        void 0 !== e.children && e.children("img").attr("src", "arrowon.png")
    }, function() {
        g_hoverrow = null;
        var e = $(this).css({
            background: "#fff",
            color: "#000"
        });
        void 0 !== e.children && e.children("img").attr("src", "arrow.png")
    })
}

function menuautoclick(e) {
    if (g_autoclickenabled && e == g_hoverrow) {
        if (g_hoverrow = null, "backbutton1" == e || "backbutton2" == e) return void $("#" + e).click();
        var t = e.substring(7),
            i = 0 == t.indexOf("match") ? "match" : null,
            n;
        if (null == getmenuchildren(t, i)) return;
        $("#" + e).click()
    }
}

function menuopen(e, t, i) {
    var n = "";
    L("menuopen cmd=" + e + " menutitle=" + i);
    var s = getmenuchildren(e, t);
    if (null != s) {
        var a = "",
            r, o, l, c;
        for (var d in s)
            if (null != (o = s[d])) {
                (c = o.title).length > g_maxchars && (c = c.substring(0, g_maxchars - 3) + "..."), r = ' data-lptitle="' + ofja(c) + '"', void 0 !== o.children ? r += ' data-lpmenurowtype="1"' : r += ' data-lpmenurowtype="3"', bgicon = void 0 !== o.icon ? ' data-lpbackground="' + o.icon + '"' : "";
                var p = "";
                o.hidden && (p = " displaynone"), a += '<div id="menurow' + ofja(d) + '" class="newmenurow' + p + '"' + r + ">", a += '<div class="menuitemdiv" data-lpwidth="' + g_menuwidth + '"' + bgicon + '">' + of (c) + "</div>", void 0 !== o.children && (a += '<img src="arrow.png" alt="' + gs("expand") + '"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'), a += '<div class="clearboth"></div>', a += "</div>"
            } else a += '\n<div class="nulldiv"></div>';
        pushmenu(a, i)
    } else L("No children for cmd=" + e + " menutitle=" + i)
}

function addslashes(e) {
    var t = e.replace(/'/g, "\\'");
    return t = t.replace(/"/g, '\\"')
}

function quoteprettyprint(e) {
    var t = e.replace(/\\\\\\/g, "\\");
    return t = (t = t.replace(/\\'/g, "'")).replace(/\\"/g, '"')
}

function menuopendelete(e, t) {
    var i = "",
        n = gs("Delete");
    i += '<div data-lpmenurowtype="4" id="menurow' + es(e) + '" class="newmenurow">', i += '<div class="menuitemdiv" data-lpwidth="' + g_menuwidth + '">' + ofja(n) + "</div>", i += '<div class="clearboth"></div>', pushmenu(i += "</div>", t)
}

function getmenuchildren(e, t) {
    var i = null;
    return "match" == t && null != (i = findmatchmenuchildren(e)) ? i : findmenuchildren(e)
}

function findmenuchildren(e, t) {
    var i, n = void 0 === t ? getmenu() : t;
    for (var s in n) {
        var a = addslashes(s);
        if (s == e || a == e) return null == n[s] || void 0 === n[s].children ? null : n[s].children;
        if (null != n[s] && void 0 !== n[s].children && null != (i = findmenuchildren(e, n[s].children))) return i
    }
    return null
}

function findmatchmenuchildren(e, t) {
    if (0 != e.indexOf("match")) return null;
    var i = {},
        n = !0,
        s = !0,
        a = !0,
        r = !0,
        o = !1,
        l = !0,
        c = !1,
        d = null,
        p = !1,
        g = !1;
    if (0 == e.indexOf("match_noautofill")) c = !(n = !1), d = e.substring(16);
    else if (0 == e.indexOf("match_note")) p = !0, d = e.substring(10);
    else {
        if (0 == e.indexOf("match_ff")) return i["editprofile" + (d = e.substring(8))] = {
            title: gs("Edit")
        }, i["fillforms" + d] = {
            title: gs("Fill")
        }, i;
        if (0 == e.indexOf("matcheditprofiles")) return null;
        if (0 == e.indexOf("matcheditprofile")) return i["editprofile" + (d = e.substring(16))] = {
            title: gs("Edit")
        }, i["fillforms" + d] = {
            title: gs("Fill")
        }, i;
        if (0 == e.indexOf("matchsite")) d = e.substring(9);
        else {
            if (!e.match(/^match(app)?\d/)) return null;
            d = e.substring(5), p = void 0 !== getBG().g_securenotes[d], g = is_application(d)
        }
    }
    if (p) {
        c = !(l = !(o = !(r = n = !1)));
        var m = void 0 !== getBG().g_securenotes[d] && void 0 !== getBG().g_securenotes[d].notetype ? getBG().g_securenotes[d].notetype : "";
        s = void 0 !== sntemplates[m] && void 0 !== sntemplates[m].Username, a = void 0 !== sntemplates[m] && void 0 !== sntemplates[m].Password
    } else g && (l = r = n = !1);
    if (n) {
        n = !1;
        for (var u = getBG().getmatchingsites(!1, !0, !1), h = 0; h < u.length; h++) {
            var f;
            if (u[h].aid == d) {
                n = !0;
                break
            }
        }
    }
    var _ = "matchedit" + d,
        v = "matchfill" + d,
        b = "matchcopyusername" + d,
        k = "matchcopypassword" + d,
        y = "matchcopyurl" + d,
        w = "matchcopynote" + d,
        x = "matchdelete" + d,
        C = "matchgotourl" + d;
    return c && (i[_] = {
        title: gs("Edit")
    }), n && (i[v] = {
        title: gs("AutoFill")
    }), getBG().can_copy_to_clipboard() && (s && (i[b] = {
        title: gs("Copy Username")
    }), a && (i[k] = {
        title: gs("Copy Password")
    }), r && (i[y] = {
        title: gs("Copy URL")
    }), o && (i[w] = {
        title: gs("Copy Note")
    })), c || (i[_] = {
        title: gs("Edit")
    }), l && (i[C] = {
        title: gs("Go to URL")
    }), i[x] = {
        title: gs("Delete")
    }, i
}

function focusme_style() {
    var e = document.getElementById("focusme");
    e && (e.style.width = "0px", e.style.height = "0px", e.style.position = "absolute", e.style.border = "none", e.style.outline = "none")
}

function reInitKbSelected() {
    var e = document.getElementById("focusme");
    e && $("#stdmenu").is(":visible") && (focusme_style(), g_isfirefoxsdk && (e.value = " "), e.addEventListener("keydown", function(e) {
        menusearch_keydown(e)
    }), e.addEventListener("keyup", function(e) {
        menusearch_keyup(e)
    }), e.focus())
}

function resize_menu() {
    g_isfirefoxsdk && setTimeout(function() {
        getBG().resize_panel(390, $(document.body).height() + 2, !0)
    }, 125)
}
//# sourceMappingURL=sourcemaps/menu.js.map