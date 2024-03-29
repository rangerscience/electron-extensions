var g_CS = {},
    g_CS_count = {},
    g_CS_tabs = {},
    g_nexttabid = 1,
    g_CS_tops = {},
    g_breach_data = null,
    g_secret_cache = {},
    g_cached_hash = null,
    g_hash_live = 0,
    g_breach_alert_set = 0,
    poll_timeout = 6e4,
    debug = !1,
    g_possiblemax_tuple = [],
    g_local_key = null,
    g_local_key_hex = null,
    g_local_hash = null,
    g_local_key_hash = null,
    g_username = null,
    g_username_hash = null,
    g_uid = null,
    g_cid = null,
    g_pwdeckey = null,
    g_token = "",
    g_identity = "",
    g_sites = {},
    g_tlds = {},
    g_securenotes = {},
    g_applications = {},
    g_prompts = {},
    g_local_accts_version = -1,
    g_server_accts_version = -1,
    g_identities = [],
    g_formfills = [],
    g_neverurls = new Array,
    g_equivalentdomains = {},
    g_urlrules = new Array,
    g_prefoverrides = {},
    g_pendings = new Array,
    g_pending_shares = new Array,
    g_shareeautopushes = new Array,
    g_shareeautopushests = 0,
    g_loglogins = !1,
    g_isadmin = !1,
    g_iscompanyadmin = !1,
    g_showcredmon = !1,
    g_launches = new Array,
    g_last_launch = new Array,
    ischrome = !0,
    g_icons = new Array,
    g_bigicons = {},
    g_bigsquareicons = {},
    g_icons_length = 0,
    g_loggedinoffline = !1,
    g_loggedinonline = !1,
    g_shares = new Array,
    g_emer_sharers = [],
    g_emer_sharees = [],
    g_totp = {},
    g_multifactorscore = 0,
    g_disablepwalerts = -1,
    g_notification_type = null,
    g_notification_data = null,
    g_site_data = null,
    g_img_data = null,
    g_audio_data = null,
    g_formfill_data = null,
    g_reprompt_callback = null,
    g_reprompt_error_callback = null,
    g_omnikey_callback = null,
    g_premium_exp = 0,
    g_is_premium_trial = 0,
    g_enterpriseuser = 0,
    g_enterprisemodel = 0,
    EnterpriseModel = {
        ENTERPRISE: "0",
        TEAMS: "1",
        FAMILIES: "2"
    },
    g_enterpriseoffering = null,
    EnterpriseOffering = {
        MFA: "1",
        ENTERPRISE: "2",
        IDAAS: "3"
    },
    g_lastpollcheck = 0,
    g_lastpoll = 0,
    g_logoff_other_ses = !1,
    g_generatedpw = !1,
    g_is_federated_user = !1,
    g_gblprefs = {},
    g_gblprefs_changed = {},
    g_userprefs = {},
    g_userprefs_changed = {},
    g_fillfieldsmatches = new Array,
    g_fillfieldsmatchescurridx = new Array,
    g_fillfield_confirm_perfield = {},
    g_fillfield_did_fillbest = {},
    g_currenturl = "",
    g_currenttabid = "",
    g_tabsWithForms = [],
    g_badgedata = null,
    g_saveall_url, g_saveall_framestotal, g_saveall_framesdone, g_saveall_docnumsdone, g_saveall_formdata, g_saveall_tabid, g_saveall_done, g_genpws = new Array,
    g_lp_hotkeys = new Array("generateHk", "recheckHk", "searchHk", "nextHk", "prevHk", "homeHk", "submitHk", "saveallHk", "logoffHk", "defaultffidHk", "openpopoverHk"),
    g_generate_url = "",
    g_generate_url_prev = "",
    g_changepwnewpw = "",
    g_changepwtld = "",
    g_changepwexcludeid = 0,
    g_curr_fill_aid = 0,
    g_is_win = "undefined" != typeof navigator && -1 != navigator.appVersion.indexOf("Windows"),
    g_is_mac = "undefined" != typeof navigator && -1 != navigator.appVersion.indexOf("Mac"),
    g_is_linux = "undefined" != typeof navigator && (-1 != navigator.appVersion.indexOf("Linux") || -1 != navigator.appVersion.indexOf("X11")),
    g_can_open_popover = "undefined" != typeof SafariExtensionPopover,
    g_retryonlinetimerid = null,
    g_notifytimerid = null,
    g_loggedLogins = new Array,
    g_master_password_saved = !1,
    g_create_account_data = null,
    g_nplastpass = null,
    g_loginstarted = !1,
    g_persistent_notifications = new Array,
    g_rejectedaddsites = new Array,
    g_checkgeneratepasswordcallback = null,
    g_db_transaction_tested = !1,
    g_db_transaction_worked = !1,
    g_events = [],
    g_offer_popupfill = !1,
    g_offer_popupfill, do_experimental_popupfill = g_offer_popupfill = !0,
    g_is_selenium = !1,
    g_selenium_bits = -1,
    g_lp_mpw_user = "",
    g_hidevault = !1,
    g_hideshowvault = !1,
    g_hidenotes = !1,
    g_hideidentities = !1,
    g_hideexport = !1,
    g_hideimport = !1,
    g_hidesharing = !1,
    g_hideprint = !1,
    g_hidecreate = !1,
    g_hidecreatepop = !1,
    g_hideacctsettings = !1,
    g_nopoll = !1,
    g_norecovery = !1,
    g_nosharingkeys = !1,
    g_skiphttptest = !0,
    g_hidesearch = !1,
    g_hidesessions = !1,
    g_hideseccheck = !1,
    g_hidelogoffprefs = !1,
    g_hidescreenkeyboard = !1,
    g_hideabout = !1,
    g_hiderecheckpage = !1,
    g_hidecheckupdates = !1,
    g_hidegopremium = !1,
    g_hideappearancebox = !1,
    g_hiderecentlyusedlistsize = !1,
    g_helpurl = base_url + "help.php?fromwebsite=1",
    g_dopushserver = !0,
    g_checkiterationsreduction = !0,
    g_forgotpwurl = base_url + "forgot.php",
    g_vaulturloverride = "",
    g_protect_plug2web = !0,
    g_shownewloginoption = !0,
    g_hideopenfavs = !1,
    g_hidelicenselink = !1,
    g_hideaboutmanuallink = !1,
    g_showvaultdefault = 0,
    g_showvaultalways = 0,
    g_hidesaedhotkey = !1,
    g_hidemenubar = !1,
    g_showupgradenotes = !0,
    g_showhistorylinks = !0,
    g_useshortlang = !1,
    g_showweakdupalerts = !0,
    g_runchallenge = !0,
    g_skipurltest = !1,
    lppassusernamehash = !1,
    lpusername = null,
    lphash = null,
    lp_rsaprivatekeyhex = "",
    lp_rsaprivatekeyenchex = "",
    lp_rsaprivatekeyenchexserverhash = "",
    g_privkeyattempts = 0,
    g_selectedtabid = -1,
    g_selectedtab = null,
    g_export_output = "",
    g_editfieldsopener = null,
    g_currenttld = null,
    g_attachname = "",
    g_attachbytes = "",
    SpecialSites = {},
    BigIconList = null,
    g_cachedffdat = null,
    g_didchangepw = [],
    g_plug2web_timeout = 20,
    g_plug2web_last_initiated = 0,
    g_wlan_works = !1,
    g_wlan_has_exe = !1,
    g_partner_type = "",
    LPContentScriptFeatures = {
        intro_tutorial_version: "context",
        react_login: "true" === localStorage_getItem("react_login") || !1
    };

function lpobjrejectedaddsite() {
    var e, t, a, r
}
var g_opera_button = null,
    g_firefox_login_panel = null,
    g_firefox_panel = null,
    g_firefox_preload_menu = !0,
    g_firefox_delay_menu_data = !0,
    g_firefox_button_clicked = !1,
    g_firefox_html_panel = null,
    g_firefox_html_dialog = null,
    g_username_vals = new Array,
    g_datacache = [],
    g_prefs_read = !1,
    g_manual_login = !1,
    g_pplastpass_loaded = !1,
    g_enable_full_menu = !0,
    g_flags = {},
    g_basicauth_timer_started = !1,
    g_onload_started = !1,
    g_pending_launch = null,
    pass = !0,
    g_show_pw_in_logs = !1,
    g_innerHTML_debug = !1,
    g_robots_txt = !1,
    g_skip_ad_frames = !0,
    g_pending_pw_change = {},
    g_fennec_menu_id = null,
    g_sharing_enabled = !0,
    g_folder_sharing_enabled = !0,
    g_generate_pw_pattern_hints = {},
    g_queeg_mode = !1,
    g_legacy_enabled = !1,
    g_enable_checkpoint = !1,
    g_lp_model = 1,
    g_trial_available = !1,
    g_premium_trial_exp_days = null,
    g_company_trial_exp_days = null,
    g_company_license_exp_days = null,
    g_is_company_subscription_expired = null,
    g_show_original_language_changed_notification = null,
    g_company_is_autorenewal = null,
    g_original_language = null,
    g_is_recovery_login = !1,
    HUMANIZE_DELAY_QUANTUM = 401,
    g_last_ui_warning = 0,
    g_40notify = !0,
    g_40fieldicon = !0,
    g_usercache = {},
    g_ask_totp = {},
    g_note_templates = [],
    g_reminders = [],
    g_nofolder_feature_enabled = !1,
    g_basicauth_feature_enabled = !1,
    g_new_settings_enabled = !1,
    g_launch_site_tracking_enabled = 0,
    g_first_time_login = !1,
    g_logoff_when_close_browser = !1,
    g_blob_version = {},
    g_is_legacy_premium = !1,
    g_is_families_trial_started = !1,
    g_disableautofill = !1,
    LPDebugLogs = {},
    VAULT_PAGE = "vault.html",
    reduxApp = "undefined" != typeof webClient && webClient.api,
    g_multifactorProvider = "",
    g_oldFederatedEmail = "",
    g_newFederatedEmail = "";

function migrate_from_old_firefox() {
    if (g_isfirefoxsdk && !localStorage_getItem("migrated_from_old_firefox")) {
        for (var u = {}, e = {
                offerGeneratePasswd: "showGenerateNotifications",
                showChangePasswordNotifications: "showChangeNotificationBar",
                showHomepageAfterLogin: "showvault",
                StoreLostPWOTP: "storeLostOTP",
                genpw_showadv: "generate_advanced",
                genpw_passlen: "generate_length",
                genpw_upper: "generate_upper",
                genpw_lower: "generate_lower",
                genpw_digits: "generate_digits",
                genpw_special: "generate_special",
                genpw_mindigits: "generate_mindigits",
                genpw_ambig: "generate_ambig",
                genpw_reqevery: "generate_reqevery",
                genpw_pronounceable: "generate_pronounceable"
            }, t = g_preferences_service.keys("extensions.lastpass"), a = "REPLACE INTO LastPassPreferences (username_hash, prefname, prefvalue) VALUES ", r = "", n = [], i = 0, f = "", o = "", s = {}, l = {}, _ = {}, c = {}, g = {}, d = {}, p = {}, m = {}, h = {}, b = {}, v = {}, y = {}, w = !1, k = -1, x = 0; x < t.length; x++) {
            var P = t[x].split(".");
            if (3 <= P.length) {
                var S, L, C = g_preferences_service.get(t[x]);
                if (L = 4 <= P.length ? (S = P[2], u[S] = 1, P[3]) : (S = "", P[2]), "" == S) {
                    if ("loginusers" == L) {
                        f = C;
                        continue
                    }
                    if ("loginpws" == L) {
                        o = C;
                        continue
                    }
                }
                if ("pageOpenSameTab" == L) {
                    s[S] = C;
                    continue
                }
                if ("pageOpenTab" == L) {
                    l[S] = C;
                    continue
                }
                if ("idleLogoff" == L) {
                    _[S] = C;
                    continue
                }
                if ("idleLogoffVal" == L) {
                    c[S] = C;
                    continue
                }
                if ("autoauto" == L) {
                    g[S] = C;
                    continue
                }
                if ("autoautoVal" == L) {
                    d[S] = C;
                    continue
                }
                if ("pollServer" == L) {
                    p[S] = C;
                    continue
                }
                if ("pollServerVal" == L) {
                    m[S] = C;
                    continue
                }
                if ("clearClipboard" == L) {
                    h[S] = C;
                    continue
                }
                if ("clearClipboardSecsVal" == L) {
                    b[S] = C;
                    continue
                }
                if ("recentUsed" == L) {
                    v[S] = C;
                    continue
                }
                if ("recentUsedCount" == L) {
                    y[S] = C;
                    continue
                }
                if ("logOffWhenCloseBrowser" == L) {
                    C && (w = !0);
                    continue
                }
                if ("logOffWhenCloseBrowserVal" == L) {
                    (-1 == k || C < k) && (k = C);
                    continue
                }
                void 0 !== e[L] && (L = e[L]), "lastpollcheck" == L && (C *= 1e3), a += r + "(?, ?, ?)", r = ", ", n.push(S), n.push(L), n.push(C), i++
            }
        }
        for (var S in s) s[S] ? (a += r + "(?, ?, ?)", r = ", ", n.push(S), n.push("openpref"), n.push("same"), i++) : void 0 !== l[S] && (a += r + "(?, ?, ?)", r = ", ", n.push(S), n.push("openpref"), n.push(l[S] ? "tabs" : "windows"), i++);
        for (var S in _) a += r + "(?, ?, ?)", r = ", ", n.push(S), n.push("idleLogoffVal"), n.push(_[S] && void 0 !== c[S] ? c[S] : 0), i++;
        for (var S in g) a += r + "(?, ?, ?)", r = ", ", n.push(S), n.push("autoautoVal"), n.push(g[S] && void 0 !== d[S] ? d[S] : 0), i++;
        for (var S in p) a += r + "(?, ?, ?)", r = ", ", n.push(S), n.push("pollServerVal"), n.push(p[S] && void 0 !== m[S] ? m[S] : 0), i++;
        for (var S in h) a += r + "(?, ?, ?)", r = ", ", n.push(S), n.push("clearClipboardSecsVal"), n.push(h[S] && void 0 !== b[S] ? b[S] : 0), i++;
        for (var S in v) a += r + "(?, ?, ?)", r = ", ", n.push(S), n.push("recentUsedCount"), n.push(v[S] && void 0 !== y[S] ? y[S] : 0), i++;
        if (w && (a += r + "(?, ?, ?)", r = ", ", n.push(""), n.push("logoffWhenCloseBrowser"), n.push(!0), i++, a += r + "(?, ?, ?)", r = ", ", n.push(""), n.push("logoffWhenCloseBrowserVal"), n.push(k), i++), 0 < i) {
            var O = opendb();
            if (createPrefsTable(O), O)
                if (g_indexeddb)
                    for (var I = O.transaction("LastPassPreferences", "readwrite").objectStore("LastPassPreferences"), x = 0; x < n.length; x += 3) I.put({
                        username_hash: n[x],
                        prefname: n[x + 1],
                        prefvalue: n[x + 2],
                        userkey: n[x] + "_" + n[x + 1]
                    });
                else O.transaction(function(e) {
                    e.executeSql(a, n, function(e, t) {}, function(e, t) {
                        console_log(t)
                    })
                })
        }
        for (var A in "" != f && unprotect_data(o, !1, function(e) {
                var t = {};
                if ("" != e) {
                    e = e.split("|");
                    for (var a = 0; a < e.length; a++) {
                        var r = e[a].split("="),
                            n;
                        if (2 == r.length) t[n = decodeURIComponent(r[0])] = dec(decodeURIComponent(r[1]), AES.hex2bin(SHA256(n)))
                    }
                }
                var i = "REPLACE INTO LastPassSavedLogins2 (username, password, last_login, protected) VALUES ",
                    o = "",
                    s = [],
                    l = 0;
                f = f.split("|");
                for (var a = 0; a < f.length; a++) {
                    var n = decodeURIComponent(f[a]);
                    u[SHA256(n)] = 1;
                    var _ = void 0 !== t[n] ? t[n] : "",
                        c = "";
                    protect_data(_, !1, n, function(e) {
                        c = e
                    });
                    var g = c != _ ? 1 : 0;
                    g || "" == _ || (c = enc(c, AES.hex2bin(SHA256(n))), g = 2), i += o + "(?, ?, ?, ?)", o = ", ", s.push(n), s.push(c), s.push(0 == a ? (new Date).getTime() : 0), s.push(g), l++
                }
                if (0 < l) {
                    var d = opendb();
                    if (createSavedLoginsTable(d), d)
                        if (g_indexeddb)
                            for (var p = d.transaction("LastPassSavedLogins2", "readwrite").objectStore("LastPassSavedLogins2"), a = 0; a < s.length; a += 4) p.put({
                                username: s[a],
                                password: s[a + 1],
                                last_login: s[a + 2],
                                protected: s[a + 3]
                            });
                        else d.transaction(function(e) {
                            e.executeSql(i, s, function(e, t) {}, function(e, t) {
                                console_log(t)
                            })
                        })
                }
            }), a = "REPLACE INTO LastPassData (username_hash, type, data) VALUES ", r = "", n = [], i = 0, u) {
            var N = "";
            call_binary_function("read_file", A + "_lpall.slps", function(e) {
                "" != e && unprotect_data(e, !0, function(e) {
                    N = e
                })
            }), "" != N && (a += r + "(?, ?, ?)", r = ", ", n.push(A), n.push("key"), n.push(N), i++)
        }
        if (0 < i) {
            var O = opendb();
            if (createDataTable(O), O)
                if (g_indexeddb)
                    for (var I = O.transaction("LastPassData", "readwrite").objectStore("LastPassData"), x = 0; x < n.length; x += 3) I.put({
                        username_hash: n[x],
                        type: n[x + 1],
                        data: n[x + 2],
                        usertype: n[x] + "_" + n[x + 1]
                    });
                else O.transaction(function(e) {
                    e.executeSql(a, n, function(e, t) {}, function(e, t) {
                        console_log(t)
                    })
                })
        }
        localStorage_setItem("migrated_from_old_firefox", 1)
    }
}

function setup_wlan_variables() {
    (g_is_win || g_is_mac) && have_binary_function("wlan_works") ? call_binary_function("wlan_works", function(e) {
        g_wlan_works = e
    }) : g_wlan_works = !1, g_is_win && have_binary_function("wlan_has_exe") ? call_binary_function("wlan_has_exe", function(e) {
        g_wlan_has_exe = e
    }) : g_wlan_has_exe = !0
}

function navigate_handler(e) {
    if (e.target instanceof SafariBrowserTab) {
        var t = e.target,
            a = gettabid(t);
        if (t.url && g_badgedata && g_badgedata.type && "alert" == g_badgedata.type && g_badgedata.tabid && g_badgedata.tabid == a) {
            var r = t.url;
            compare_tlds(lp_gettld_url(r), g_badgedata.tld) || (g_badgedata = null, drawIconAtRotation(0))
        }
    }
}

function command_handler(e) {
    "LPToolButtonClick" == e.command ? buttonclick() : "LPContextMenuClick" == e.command && LPContextMenus.cm_handler()
}

function buttonclick() {
    if (lploggedin || !shouldOpenLogin() && g_badgedata && "notification" == g_badgedata.cmd && ("error" == g_badgedata.type || "mpwchange" == g_badgedata.type)) {
        if (g_isfirefoxsdk) return void showFirefoxPanel();
        try {
            if ("undefined" != typeof SafariExtensionPopover) return void openpopover(0)
        } catch (e) {
            g_can_open_popover = !1
        }
        update_menus(), toggle_menu()
    } else open_login()
}
g_open_native_messaging_html = !1, g_have_native_messaging_permission = !1, !have_nplastpass() && supports_native_messaging() && "undefined" != typeof g_do_native_messaging && g_do_native_messaging && test_native_messaging(function(e) {
    void 0 === e ? g_do_native_messaging = !1 : e ? (g_have_native_messaging_permission = !0, connect_native_messaging()) : g_open_native_messaging_html = !0
});
var shouldOpenDropdown = function() {
        return !!lploggedin && (!g_badgedata || "notification" !== g_badgedata.cmd || ("duplicate" === g_badgedata.alerttype || "error" === g_badgedata.type || "weak" === g_badgedata.alerttype || "mpwchange" === g_badgedata.type || "lpalert" === g_badgedata.type))
    },
    shouldOpenLogin = function() {
        return !lploggedin
    },
    shouldShowErrorDialogue = function() {
        return g_badgedata && "notification" === g_badgedata.cmd && "error" === g_notification_type
    },
    g_popoverstartpage = 0;

function openpopover(e) {
    for (var t = safari.application.activeBrowserWindow, a = 0; a < safari.extension.toolbarItems.length; a++) {
        var r = safari.extension.toolbarItems[a];
        if (t == r.browserWindow && -1 != r.identifier.indexOf("LPToolButton"))
            if (shouldOpenDropdown()) LPPlatform.openDropdownPopover();
            else {
                if (!g_badgedata || "notification" != g_badgedata.cmd || "alert" != g_badgedata.type && "lpalert" != g_badgedata.type && "error" != g_badgedata.type && "mpwchange" != g_badgedata.type) {
                    r.popover = LPPlatform.getPopover("LPPopoverMenu"), r.popover.width = 400, r.popover.height = 497;
                    var n = 3 == e ? "&generate=1" : "";
                    r.popover.contentWindow.showwin(r.popover.width, r.popover.height, getchromeurl("lp_toolstrip.html?browseraction=1" + n))
                } else r.popover = LPPlatform.getPopover("LPPopoverMenu"), r.popover.width = 360, r.popover.height = 348, r.popover.contentWindow.menuload(0), r.popover.contentWindow.showwin(460, 248, getchromeurl("lp_toolstrip.html?browseraction=1&alert=1")), setTimeout(function() {
                    var e = getBG();
                    e.g_badgedata = null, e.drawIconAtRotation()
                }, 500);
                r.showPopover(), g_popoverstartpage = e
            }
    }
}

function gettabid(e) {
    if (g_ischrome || g_isfirefoxsdk || g_iscasper) try {
        return e ? e.id : -1
    } catch (e) {
        return -1
    } else {
        if (g_issafari) return void 0 === e.myData && (e.myData = g_nexttabid++, g_CS_tabs[e.myData] = e), e.myData;
        if (g_issafari_appext) return e.tabID
    }
}

function get_all_windows(e, t) {
    g_ischrome ? chrome.windows.getAll(e, t) : g_issafari ? t(safari.application.browserWindows) : g_isfirefoxsdk ? t(g_windows.browserWindows) : LPPlatform.getWindowIDs && t(LPPlatform.getWindowIDs())
}

function get_tabs(e) {
    if (g_issafari_appext) return LPPlatform.getWindowTabDetails(e);
    try {
        return e.tabs
    } catch (e) {
        return new Array
    }
}

function get_tabs_length(e) {
    try {
        return get_tabs(e).length
    } catch (e) {
        return 0
    }
}

function close_tab(a) {
    g_issafari_appext ? LPPlatform.closeTab(a) : get_all_windows({
        populate: !0
    }, function(e) {
        var t = !1;
        if (1 == e.length && 1 == get_tabs_length(e[0]) && gettabid(get_tabs(e[0])[0]) == gettabid(a) && (openURL("about:newtab"), t = !0), g_ischrome) try {
            chrome.tabs.remove(gettabid(a))
        } catch (e) {
            console_error(e)
        } else(g_issafari || g_isfirefoxsdk) && (t ? setTimeout(function() {
            a.close()
        }, 0) : a.close())
    })
}

function cleanup_tabs() {
    if (g_issafari)
        for (var e in g_CS)
            for (var t in delete_cs_for_tab(e), g_CS[e]) {
                void 0 !== g_CS[e][t].browserWindow && g_CS[e][t].browserWindow || (delete g_CS[e], void 0 !== g_CS_tabs[e] && delete g_CS_tabs[e]);
                break
            }
}
var message_handler = Raven.wrap(function(o) {
    g_isfirefoxsdk && (o.message = JSON.parse(JSON.stringify(o)), o.name = o.messagetype);
    var e = !1;
    if (void 0 !== o.message.g_user_prefs_to_write) {
        e = !0;
        var t = LPJSON.parse(o.message.g_user_prefs_to_write);
        for (var a in t) lpPutUserPref(a, t[a])
    }
    if (void 0 !== o.message.g_global_prefs_to_write) {
        e = !0;
        var r = LPJSON.parse(o.message.g_global_prefs_to_write);
        for (var a in r) lpPutGblPref(a, r[a])
    }
    switch (e && lpWriteAllPrefs(), o.name) {
        case "writeAllPrefs":
            break;
        case "closepop":
            closePop();
            break;
        case "connect":
            connect_eventHandler(o);
            break;
        case "focus":
            var n = lp_gettld_url(gettaburl(o.message));
            compare_tlds(n, g_currenttld) || (update_menus(), g_currenttld = n);
            break;
        case "message":
            receiveCS(gettabidfromevent(o), o.message, 0, {
                tab: geteventtarget(o)
            });
            break;
        case "processCS":
            var i = LPJSON.parse(o.message.data);
            i.callback = function(e) {
                event_dispatch_message(o, "website_event_callback", {
                    data: LPJSON.stringify(e)
                })
            }, processCS(null, i, null);
            break;
        case "disablepasswordmanager":
            disablepasswordmanager(o.message.disable);
            break;
        case "LP_do_login":
            g_manual_login = o.message.manual_login, LP_do_login(o.message.u, o.message.p, o.message.rememberemail, o.message.rememberpassword, o.message.donotclearmultifactor, o.message.showvault, o.message.lpkey, o.message.lphash);
            break;
        case "openURL":
            if (void 0 !== o.message.g_site_data) {
                g_site_data = LPJSON.parse(o.message.g_site_data);
                var s = get_record(get_record_id(g_site_data));
                s && (g_site_data.fields = s.fields)
            }
            openURL(o.message.url);
            break;
        case "start_trial":
            start_trial();
            break;
        case "install_binary":
            install_binary();
            break;
        case "reprompt_error_callback":
            g_reprompt_error_callback_save();
            break;
        case "omnikey_callback":
            g_omnikey_callback_save(o.message.pin);
            break;
        case "update_prefs":
            "prefs" == o.message.page ? (lpGetPref("storeLostOTP") || DeleteOTP(), lpdbg("idle", "updating prefs, idleLogoffVal is " + lpGetPref("idleLogoffVal")), (lpGetPref("logoffWhenCloseBrowser") || 0 < lpGetPref("idleLogoffVal")) && 0 == lpGetPref("rememberpassword") && deletesavedpw(g_username), startIdleChecker(), setprefs("all", "all"), setup_hotkeys(), g_isfirefoxsdk && 1 == lpGetPref("disablecrpw") && g_preferences_service.set("signon.rememberSignons", !1), drawIconAtRotation(0)) : "generate" == o.message.page && (g_genpws = o.message.g_genpws);
            break;
        case "setup_hotkeys":
            setup_hotkeys();
            break;
        case "copytoclipboard":
            copytoclipboard(o.message.g_data);
            break;
        case "update_prompts":
            g_prompts = JSON.parse(o.message.g_prompts);
            break;
        case "openall":
            openall(o.message.group);
            break;
        case "openAllSites":
            openAllSites(o.message.sites);
            break;
        case "deleteGroup":
            deleteGroup(o.message.group, null, function() {
                event_dispatch_message(o, "delete_group_callback", {})
            });
            break;
        case "copyusername":
            var l = void 0 !== o.message.fromiframe && o.message.fromiframe ? 1 : 0,
                _ = gettabidfromevent(o);
            copyusername(o.message.aid, l, _);
            break;
        case "copypassword":
            var l = void 0 !== o.message.fromiframe && o.message.fromiframe ? 1 : 0,
                _ = gettabidfromevent(o);
            copypassword(o.message.aid, null, l, _);
            break;
        case "copyurl":
            var l = void 0 !== o.message.fromiframe && o.message.fromiframe ? 1 : 0,
                _ = gettabidfromevent(o);
            copyurl(o.message.aid, l, _);
            break;
        case "copynote":
            copynote(o.message.aid);
            break;
        case "deleteAid":
            g_isfirefoxsdk && g_firefox_button.state("window", {
                checked: !1
            }), deleteAid(o.message.aid, null, !1, !1, function() {
                event_dispatch_message(o, "delete_aid_callback", {})
            });
            break;
        case "editAid":
            editAid(o.message.aid, null, null, o.message.openchpw);
            break;
        case "unlock_plug2web":
            unlock_plug2web();
            break;
        case "gotourl":
            gotourl(o.message.aid);
            break;
        case "launch":
            var c = o.message.aid,
                g = o.message.skip_pwprotect;
            setTimeout(function() {
                launch(c, g)
            }, 0);
            break;
        case "open_login":
            open_login(o.message.forcetab);
            break;
        case "addprofile":
            addprofile(null, o.message.source);
            break;
        case "update_create_account_data":
            g_create_account_data = LPJSON.parse(o.message.create_account_data);
            break;
        case "addcreditcard":
            addcreditcard(null, o.message.source);
            break;
        case "editprofile":
            editprofile(o.message.ffid, null, o.message.source);
            break;
        case "openprefs":
            openprefs(o.message.tab);
            break;
        case "openbaseurl":
            openbaseurl(o.message.suffix);
            break;
        case "changemasterpassword":
            changemasterpassword();
            break;
        case "addDomainToMPWNever":
            addDomainToMPWNever();
            break;
        case "MPWNoNag":
            MPWNoNag();
            break;
        case "openaddsecurenote":
            openaddsecurenote();
            break;
        case "openeditsecurenote":
            openeditsecurenote();
            break;
        case "loggedOut":
            loggedOut(o.message.skiprequest, o.message.from);
            break;
        case "switch_identity":
            switch_identity(o.message.iid, o.message.skip_reprompt);
            break;
        case "renameGroup":
            renameGroup(o.message.origgrp, o.message.newgrp);
            break;
        case "addEmptyGroup":
            addEmptyGroup(o.message.newgrp);
            break;
        case "moveSelectedToGroup":
            moveSelectedToGroup(o.message.group, o.message.aids);
            break;
        case "security_prompt":
            security_prompt(function() {
                event_dispatch_message(o, "security_prompt_callback", {})
            });
            break;
        case "savePassword":
            var _, d, p;
            _ = null == o.message.tabid ? gettabidfromevent(o) : o.message.tabid, p = null != o.message.saveOptions ? o.message.saveOptions : {}, d = null != o.message.nofill && o.message.nofill, savePassword(o.message.pass, o.message.url, _, d, p);
            break;
        case "checkgeneratepassword":
            g_checkgeneratepasswordcallback = function() {
                event_dispatch_message(o, "generatepasswordfound", {})
            }, sendCS(o.message.tabid, {
                cmd: "checkgeneratepassword"
            });
            break;
        case "fillform":
            fillform(o.message.ffid, !1, o.message.origtabid, o.message.ccffid);
            break;
        case "changePassword":
            changePassword(o.message.password, o.message.aids);
            break;
        case "receiveTS":
            receiveTS(null, o.message);
            break;
        case "deleteformfill":
            deleteformfill(o.message.ffid, null, o.message.fromiframe, gettabidfromevent(o), null, null, o.message.source);
            break;
        case "addeditformfill":
            addeditformfill(LPJSON.parse(o.message.ffdata), LPJSON.parse(o.message.site), o.message.source);
            break;
        case "fix_tlds":
            fix_tlds(o.message.oldtld, o.message.newtld, o.message.aid);
            break;
        case "moveIntoSharedFolder":
            moveIntoSharedFolder(LPJSON.parse(o.message.shareinfo), LPJSON.parse(o.message.shareinfoorig), LPJSON.parse(o.message.aidsThatChangedGroups), LPJSON.parse(o.message.aidsnewgrps), o.message.copy, o.message.onlycheck, o.message.skipcheck);
            break;
        case "increment_local_accts_version":
            increment_local_accts_version();
            break;
        case "rewritelocalfile":
            rewritelocalfile();
            break;
        case "saveSite":
            saveSite(o.message.postdata, o.message.acct);
            break;
        case "showImageAttach":
            showImageAttach(o.message.data);
            break;
        case "openAttach":
            openAttach(o.message.id, o.message.attachid, o.message.filename);
            break;
        case "exportAttachment":
            exportAttachment(o.message.id, o.message.attachid, o.message.filename);
            break;
        case "openLinkedSites":
            openLinkedSites(o.message.password, o.message.tld, o.message.excludeid);
            break;
        case "generate":
            opengenpw();
            break;
        case "ping_ack":
        case "basicauthmoreinfobtn":
        case "basicauthneverbtn":
        case "changepw":
        case "chooseprofilecc":
        case "createaccountbtn":
        case "custombtn":
        case "disablebtn":
        case "feedbackbtn":
        case "starttrialbtn":
        case "fillformffid":
        case "popupfillresize":
        case "recheckpagecontext":
        case "savesiteicon":
        case "savethesite":
        case "startsaveall":
        case "tryagainbtn":
            var _;
            processCS(_ = gettabidfromevent(o), o.message);
            break;
        case "saveAllSite":
            saveAllSite(o.message.postdata, fix_fields(LPJSON.parse(o.message.acct)));
            break;
        case "saveSiteFromSubmit":
            saveSiteFromSubmit(o.message.postdata, fix_fields(LPJSON.parse(o.message.acct)));
            break;
        case "saveFields":
            saveFields(o.message.getdata, o.message.postdata, fix_fields(LPJSON.parse(o.message.aData)));
            break;
        case "set_editfieldsopener":
            set_editfieldsopener(geteventtarget(o));
            break;
        case "close_editfieldsopener":
            close_editfieldsopener();
            break;
        case "unprotect_data":
            unprotect_data(o.message.data, o.message.windowsonly, function(e) {
                event_dispatch_message(o, "unprotect_data_callback", {
                    protected_data: o.message.data,
                    unprotected_data: e
                })
            });
            break;
        case "change_master_password":
            event_dispatch_message(o, "change_master_password_callback", {
                newdata: change_master_password(o.message.newusername, o.message.newpassword, o.message.toserver)
            });
            break;
        case "make_lp_key_hash_iterations":
            make_lp_key_hash_iterations(o.message.u, o.message.p, get_key_iterations(o.message.u), function(e, t) {
                event_dispatch_message(o, "make_lp_key_hash_iterations_callback", {
                    lpkey: e,
                    lphash: t
                })
            });
            break;
        case "lpvt_store_data_and_setsinglefactortype":
            lpvt_store_data_and_setsinglefactortype(o.message.data);
            break;
        case "delete_file":
            delete_file(o.message.f);
            break;
        case "lpevent":
            lpevent(o.message.w);
            break;
        case "applyattacharraychanges":
            var u = LPJSON.parse(o.message.changes);
            applyattacharraychanges(u);
            break;
        case "update_site":
            var f = fix_fields(LPJSON.parse(o.message.site));
            is_application(f) ? g_applications[f.appaid] = f : f.sn ? g_securenotes[f.aid] = f : g_sites[f.aid] = f;
            break;
        case "fastDecryptAttachment":
            fastDecryptAttachment(o.message.id, o.message.mimetype, o.message.data, o.message.attachkey, o.message.key, function(e) {
                event_dispatch_message(o, "fast_decryptatt_callback", {
                    result: e,
                    id: o.message.id,
                    mimetype: o.message.mimetype
                })
            });
            break;
        case "fastEncryptAttachments":
            fastEncryptAttachments(o.message.akey, LPJSON.parse(o.message.attachments), function(e) {
                event_dispatch_message(o, "fast_encryptatt_callback", {
                    data: LPJSON.stringify(e)
                })
            });
            break;
        case "get_saved_logins":
            get_saved_logins(function(e) {
                event_dispatch_message(o, "get_saved_logins_callback", {
                    rows: e
                })
            });
            break;
        case "delete_saved_login":
            delete_saved_login(o.message.username);
            break;
        case "update_fields":
            g_sites[o.message.aid].fields = LPJSON.parse(o.message.fields), g_sites[o.message.aid] = fix_fields(g_sites[o.message.aid]);
            break;
        case "select_selectedtabid":
            select_selectedtabid();
            break;
        case "closecurrenttab":
            closecurrenttab(o.message.page);
            break;
        case "add_identity":
            add_identity();
            break;
        case "checkforupdates":
            checkforupdates();
            break;
        case "clearforms":
            clearforms(o.message.source);
            break;
        case "clearrecent":
            clearrecent();
            break;
        case "openabout":
            openabout();
            break;
        case "openaddsite":
            openaddsite();
            break;
        case "openeditsite":
            openeditsite();
            break;
        case "openchooseprofilecc":
            openchooseprofilecc();
            break;
        case "openexport":
            openexport();
            break;
        case "openfavorites":
            openfavorites();
            break;
        case "openfeedback":
            openfeedback();
            break;
        case "opengenpw":
            opengenpw();
            break;
        case "openhelp":
            openhelp(o.message.topic);
            break;
        case "openimport":
            openimport();
            break;
        case "doimport":
            doimport(o.message.source, o.message.filename);
            break;
        case "openimportchrome":
            openimportchrome();
            break;
        case "openlastpassexport":
            openlastpassexport();
            break;
        case "wlanexport":
            wlanexport();
            break;
        case "formfillexport":
            formfillexport();
            break;
        case "openpremium":
            openpremium();
            break;
        case "openenterprisepayment":
            openenterprisepayment();
            break;
        case "openteamspayment":
            openteamspayment();
            break;
        case "openfamiliespayment":
            openfamiliespayment();
            break;
        case "openpricing":
            openpricing();
            break;
        case "openTranslationsReadMore":
            openTranslationsReadMore();
            break;
        case "openentconsole":
            openentconsole();
            break;
        case "openfamilyconsole":
            openFamilyConsole();
            break;
        case "openseccheck":
            openseccheck();
            break;
        case "opensessions":
            opensessions();
            break;
        case "openmyaccount":
            openmyaccount();
            break;
        case "openvault":
            openvault();
            break;
        case "recheckpage":
            recheckpage();
            break;
        case "refreshsites":
            refreshsites();
            break;
        case "saveall":
            saveall();
            break;
        case "upgradetoserver":
            upgradetoserver();
            break;
        case "clearCache":
            clearCache(o.message.noprompt);
            break;
        case "loglogin":
            loglogin(o.message.aid);
            break;
        case "deleteNever":
            deleteNever(LPJSON.parse(o.message.n));
            break;
        case "fillaid":
            fillaid(o.message.aid);
            break;
        case "openprint":
            openprint(o.message.notes);
            break;
        case "getnotificationdata":
            var _ = gettabidfromevent(o);
            if (void 0 !== g_datacache[_]) {
                var m = {
                    cmd: "gotnotificationdata",
                    html: g_datacache[_].html,
                    extra: g_datacache[_].extra
                };
                g_isfirefoxsdk ? o.target.port.emit("message", m) : sendCS(_, m, "all")
            }
            break;
        case "getcpwmsg":
            var _ = gettabidfromevent(o);
            if (CPWbot_bg) {
                var m = {
                    cmd: "gotcpwmsg",
                    msg: CPWbot_bg.get_last_overlay_message(),
                    minimize_state: cpwbot_get_minimize_dialog_state()
                };
                g_isfirefoxsdk ? o.target.port.emit("message", m) : sendCS(_, m, "all")
            }
            break;
        case "disabletotp":
            disabletotp(o.message.tld);
            break;
        case "enabletotp":
            enabletotp(o.message.tld, gettabidfromevent(o), null, o.target.port);
            break;
        case "invitetotp":
            invitetotp(o.message.email, o.message.phone);
            break;
        case "closepopupfills":
        case "hidecontext":
        case "hideoverlay":
        case "hidetotp":
        case "slidedownoverlay":
        case "slideupoverlay":
            var _;
            sendCS(_ = gettabidfromevent(o), {
                cmd: o.name
            }, "all"), "hideoverlay" == o.name ? (g_persistent_notifications[_] = null, clear_badge()) : "hidetotp" == o.name && (g_ask_totp[_] = null);
            break;
        case "popupfillscreateack":
            var _ = gettabidfromevent(o);
            do_popupfillscreateack(_);
            break;
        case "autofillaid":
        case "autologinaid":
            var _ = gettabidfromevent(o);
            o.message.topurl = geteventtargeturl(o), handleFill(_, o.message);
            break;
        case "raven_transport":
            LPRavenTransport({
                data: o.message.data,
                auth: o.message.auth,
                onSuccess: function() {
                    event_dispatch_message(o, "raven_response", {
                        requestId: o.message.requestId
                    })
                },
                onError: function(e) {
                    event_dispatch_message(o, "raven_response", {
                        requestId: o.message.requestId,
                        error: e
                    })
                }
            });
            break;
        case "fillcurrentaid":
            fillcurrent(o.message.aid);
            break;
        case "never":
        case "neverautofill":
        case "neverpage":
        case "neverdomain":
            var _ = gettabidfromevent(o),
                h = o.message.url;
            handleNever(_, o.message), void 0 !== o.message.fromsave && (g_persistent_notifications[_] = null, clear_badge()), (hasNeverAutologin(h, lp_gettld_url(h)) || hasNeverFormFill(h, lp_gettld_url(h)) || hasNeverGenerate(h, lp_gettld_url(h)) || hasNeverShowIcon(h, lp_gettld_url(h)) || hasNeverSave(h, lp_gettld_url(h))) && (handleGetNevers(_, h), closeclickables(_), recheckpage(!0));
            break;
        case "getdata":
            getdata_eventHandler(o);
            break;
        case "save_opened":
            sendCS(gettabidfromevent(o), {
                cmd: "save_opened"
            }, "all");
            break;
        case "getpopupfilldata":
            var _ = gettabidfromevent(o),
                b = do_getpopupfilldata(_);
            g_isfirefoxsdk ? o.target.port.emit("message", b) : sendCS(_, b, "all");
            break;
        case "popupfillinputget":
            var _ = gettabidfromevent(o),
                b;
            (b = do_popupfillinputget(_)) && (g_isfirefoxsdk ? o.target.port.emit("message", b) : sendCS(_, b, "all"));
            break;
        case "popupfillgetgenerateprefs":
            var _ = gettabidfromevent(o),
                b;
            (b = do_popupfillgetgenerateprefs(_, o.message)).cmd = "gotpopupfillgenerateprefs", g_isfirefoxsdk ? o.target.port.emit("message", b) : sendCS(_, b, "all");
            break;
        case "popupfillsetgenerateprefs":
            var _ = gettabidfromevent(o);
            do_popupfillsetgenerateprefs(_, o.message);
            break;
        case "deleteaid":
            var l = void 0 !== o.message.fromiframe && o.message.fromiframe ? 1 : 0,
                _ = gettabidfromevent(o);
            deleteAid(o.message.aid, null, !1, !0, function() {
                recheckpage(!0)
            }, null, l, _);
            break;
        case "editaid":
            editAid(o.message.aid);
            break;
        case "openchooseprofilecc":
            openchooseprofilecc();
            break;
        case "dosaveiframe":
            var _ = gettabidfromevent(o),
                b = savesite_from_iframe(o.message, _);
            break;
        case "popupfillsaveget":
            var b;
            if ((b = g_popupfill_save_data).formdata2) {
                var v = new Array;
                for (var c in g_sites)
                    if (check_ident_aid(c)) {
                        var y = g_sites[c].group;
                        "" == y || lp_in_array(y, v) || (v[v.length] = y)
                    } v.sort(function(e, t) {
                    return e.toLowerCase() < t.toLowerCase() ? -1 : 1
                }), b.groups = v, void 0 !== o.message.url && (b.group = get_default_group(o.message.url))
            } else void 0 !== b.close || g_prompts.view_pw_prompt && (b.prompting = !0);
            var _ = gettabidfromevent(o);
            b.cmd = "gotpopupfillsave", g_isfirefoxsdk ? o.target.port.emit("message", b) : sendCS(_, b, "all");
            break;
        case "dologinaction":
            lploggedin || open_login();
            break;
        case "dopwchallenge":
            var _ = gettabidfromevent(o);
            security_prompt(function() {
                var e = {
                    cmd: "didpwchallenge",
                    result: 1
                };
                g_isfirefoxsdk ? o.target.port.emit("message", e) : sendCS(_, e, "all")
            }, function() {
                var e = {
                    cmd: "didpwchallenge",
                    result: 1
                };
                g_isfirefoxsdk ? o.target.port.emit("message", e) : sendCS(_, e, "all")
            }, !1);
            break;
        case "set_share_folder_id":
            set_share_folder_id(o.message.id);
            break;
        case "set_share_folder_group":
            set_share_folder_group(o.message.group);
            break;
        case "disablesitealert":
            disablesitealert(o.message.aid);
            break;
        case "disableallalerts":
            disableallalerts();
            break;
        case "lpdbg":
            lpdbg(o.message.type, o.message.string);
            break;
        case "cpwbot_finish_ack":
            if (g_cpwbot && CPWbot_bg) {
                var _ = gettabidfromevent(o);
                CPWbot_bg.cpwbot_finish_ack_handler(_, o.message)
            }
            break;
        case "cpwbot_validate_state_result":
            if (g_cpwbot && CPWbot_bg) {
                var _ = gettabidfromevent(o),
                    m = o.message;
                CPWbot_bg.cpwbot_validate_state_result_handler(_, m)
            }
            break;
        case "dopwchange":
            var w = gettabidfromevent(o),
                k = geteventtarget(o),
                g = !1;
            dopwchange(o.message.aid, g, k);
            break;
        case "cpwbot_get_user_debug_messages":
            if (g_cpwbot && CPWbot_bg) {
                var _ = gettabidfromevent(o),
                    x = cpwbot_get_user_debug_messages(),
                    P = LPJSON.stringify(x);
                event_dispatch_message(o, "cpwbot_got_user_debug_messages", {
                    value: P
                })
            }
            break;
        case "cpwbot_getpwchangestate":
            var _ = gettabidfromevent(o),
                x = cpwbot_getpwchangestate(),
                P = LPJSON.stringify(x);
            event_dispatch_message(o, "cpwbot_gotpwchangestate", {
                value: P
            });
            break;
        case "cpwbot_get_dialog_msg":
            if (g_cpwbot && CPWbot_bg) {
                var _ = gettabidfromevent(o),
                    x = cpwbot_get_dialog_msg(),
                    P = LPJSON.stringify(x);
                event_dispatch_message(o, "cpwbot_got_dialog_msg", {
                    value: P
                })
            }
            break;
        case "cpwbot_preinit":
            g_cpwbot && CPWbot_bg && cpwbot_preinit();
            break;
        case "cpwbot_halt":
            g_cpwbot && CPWbot_bg && cpwbot_halt();
            break;
        case "close_cpw_tabs":
            if (g_cpwbot && CPWbot_bg) {
                var S = geteventtarget(o);
                cpwbot_close_cpw_tab_handler(S)
            }
            break;
        case "send_sms_passcodes":
            send_sms_passcodes(o.message.postdata, function(e) {
                event_dispatch_message(o, "send_sms_passcodes_callback", {
                    result: e
                })
            });
            break;
        case "create_account":
            create_account(o.message.postdata, function(e) {
                event_dispatch_message(o, "create_account_success_callback", {
                    req: {
                        readyState: e.readyState,
                        status: e.status,
                        responseText: e.responseText
                    }
                })
            }, function() {
                event_dispatch_message(o, "create_account_failure_callback", {})
            });
            break;
        case "enable_credit_monitoring":
            enable_credit_monitoring(o.message.postdata, function(e) {
                event_dispatch_message(o, "enable_credit_monitoring_success_callback", {
                    req: {
                        readyState: e.readyState,
                        status: e.status,
                        responseText: e.responseText
                    }
                })
            }, function() {
                event_dispatch_message(o, "enable_credit_monitoring_failure_callback", {})
            });
            break;
        case "clear_badge":
            clear_badge();
            break;
        case "resize_panel":
            g_firefox_panel.resize(o.message.width, o.message.height);
            break;
        case "resize_login_panel":
            g_firefox_login_panel && g_firefox_login_panel.resize(o.message.width, o.message.height);
            break;
        case "resize_html_panel":
            g_firefox_html_panel && g_firefox_html_panel.resize(o.message.width, o.message.height);
            break;
        case "resize_html_dialog":
            g_firefox_html_dialog && (g_firefox_html_dialog.resizeTo(o.message.width, o.message.height), g_firefox_html_dialog.moveTo(g_firefox_html_dialog.screen.left + (g_firefox_html_dialog.screen.width - o.message.width) / 2, g_firefox_html_dialog.screen.top + (g_firefox_html_dialog.screen.height - o.message.height) / 2));
            break;
        case "deletesavedpw":
            deletesavedpw(o.message.username);
            break;
        case "sr_add_secret":
            SecureReprompter.add_secret(o.message.aid, o.message.acct, o.message.t, o.message.hash);
            break;
        case "minimize_cpw_dialog":
            g_cpwbot && CPWbot_bg && (CPWbot_bg.cpw_dialog_minimize_state = 1);
            break;
        case "maximize_cpw_dialog":
            g_cpwbot && CPWbot_bg && (CPWbot_bg.cpw_dialog_minimize_state = 0);
            break;
        case "addAttach":
            addAttach(function() {
                event_dispatch_message(o, "addattachcb", {
                    attachname: g_attachname,
                    attachbytes: g_attachbytes
                }), g_attachname = g_attachbytes = ""
            });
            break;
        case "onload_done":
            g_firefox_preload_menu && g_firefox_button_clicked && (g_firefox_panel.show({
                position: g_firefox_button
            }), g_firefox_button_clicked = !1), void 0 !== o.message.need_data && o.message.need_data && setTimeout(function() {
                var e = new Object,
                    t = new Array;
                for (var a in g_sites) check_ident_aid(g_sites[a].aid) && (t[a] = g_sites[a]);
                e.g_sites = LPJSON.stringify(t);
                var r = new Array;
                for (var a in g_securenotes) check_ident_aid(g_securenotes[a].aid) && (r[a] = g_securenotes[a]);
                e.g_securenotes = LPJSON.stringify(r);
                var n = new Array;
                for (var a in g_applications) check_ident_appaid(g_applications[a].appaid) && (n[a] = g_applications[a]);
                e.g_applications = LPJSON.stringify(n);
                for (var i = new Array, a = 0; a < g_formfills.length; a++) check_ident_ffid(g_formfills[a].ffid) && (i[i.length] = g_formfills[a]);
                e.g_formfills = LPJSON.stringify(i), event_dispatch_message(o, "data_callback", e)
            }, 200);
            break;
        case "openlastpasslegacy":
            openlastpasslegacy();
            break;
        case "opendebugtab":
            is_user_debug_enabled() && opendebugtab();
            break;
        case "reset_history":
            is_user_debug_enabled() && reset_history();
            break;
        case "savesite_dialog_changed":
            savesite_dialog_changed_handler(gettabidfromevent(o), o.message);
            break;
        case "lpimprove":
            sendLpImprove(request.event, request.properties);
            break;
        case "openOnNewTab":
            openOnNewTab(request.url);
            break;
        case "switchLanguage":
            switchLanguage(request.languageCode);
            break;
        case "saveUserLanguage":
            saveUserLanguage(request.languageCode)
    }
});

function disablepasswordmanager(e, t, a) {
    if (g_isfirefoxsdk || g_ischrome)
        if (e) {
            if (lpPutGblPref("disablepasswordmanagerasked", a || g_isfirefoxsdk ? 1 : 0), lpWriteAllPrefs(), g_isfirefoxsdk) g_preferences_service.set("signon.rememberSignons", !1);
            else if (g_ischrome)
                if (void 0 !== chrome.privacy && void 0 !== chrome.privacy.services && void 0 !== chrome.privacy.services.passwordSavingEnabled) {
                    if (chrome.privacy.services.passwordSavingEnabled.set({
                            value: !1
                        }), t) try {
                        t.close(!0)
                    } catch (e) {
                        L("dialog already closed")
                    }
                } else chrome.permissions.request({
                    permissions: ["privacy"]
                }, function(e) {
                    disablepasswordmanager(e, t, !0)
                })
        } else if (t) try {
        t.close(!0)
    } catch (e) {
        L("dialog already closed")
    }
}
var share_folder_id = "";

function set_share_folder_id(e) {
    share_folder_id = e
}
var share_folder_group = "";

function set_share_folder_group(e) {
    share_folder_group = e
}

function totp_tld_convert(e) {
    return "force.com" == e && (e = "salesforce.com"), e
}
var totp_domains = {
    "amazon.com": !0,
    "dropbox.com": !0,
    "evernote.com": !0,
    "facebook.com": !0,
    "google.com": !0,
    "mailchimp.com": !0,
    "salesforce.com": !0
};

function add_totp_data(e, t, a, r) {
    if (t = totp_tld_convert(t), void 0 !== g_usercache[t] && void 0 !== g_totp.domains && void 0 !== g_totp.domains[t] && void 0 !== g_totp.domains[t][SHA256(g_usercache[t].trim().toLowerCase())] && (r.can_get_totp = !0), lploggedin && a && void 0 !== g_ask_totp[e] && g_ask_totp[e] == t && void 0 !== g_usercache[t]) {
        var n = !1;
        void 0 !== g_totp.domains && void 0 !== g_totp.domains.disabled && void 0 !== g_totp.domains.disabled.all && g_totp.domains.disabled.all ? n = !0 : void 0 !== g_totp.domains && void 0 !== g_totp.domains.disabled && void 0 !== g_totp.domains.disabled[t] && g_totp.domains.disabled[t] && (n = !0), n || (r.ask_totp = !0, r.ask_totp_multifactorenabled = void 0 !== g_totp.multifactorenabled && g_totp.multifactorenabled, r.ask_totp_lastpassauthenabled = void 0 !== g_totp.lastpassauthenabled && g_totp.lastpassauthenabled, r.ask_totp_username = g_username)
    }
    r.do_totp = g_do_totp
}

function connect_eventHandler(e) {
    var t = !1,
        a = !0,
        r = gettabidfromevent(e),
        n = e.message.docnum;
    if (void 0 !== e.message.top && (t = e.message.top, a = !1), (t || a && e.message.name == geteventtargeturl(e)) && (cleanup_tabs(), g_CS[r] = new Array, g_CS_count[r] = 0, g_loggedLogins = new Array, t = !0, g_CS_tops[r] = n), void 0 !== g_CS[r] && g_CS[r] || (g_CS[r] = new Array, g_CS_count[r] = 0), g_CS[r][n] = g_isfirefoxsdk ? e.worker : geteventtarget(e), register_new_cs(r, n, e.message.name, t, e.message.docstate, e.message.docflags), g_issafari) {
        if (2 <= g_CS_count[r] && ("http://chat.major-design.ru/" == e.message.name || 0 < e.message.name.indexOf("facebook.com/ajax/"))) return lpdbg("connect", "skipping connect to document with tabcount=" + g_CS_count[r] + ", istop=" + t + ", url=" + e.message.name), sendCS(r, {
            cmd: "remove_event_listener"
        }, n), void delete g_CS[r][n];
        lpdbg("connect", "connecting to document with tabcount=" + g_CS_count[r] + ", istop=" + t + ", url=" + e.message.name)
    }
    g_CS_count[r]++;
    var i = {
        cmd: "setdocnum",
        docnum: n
    };
    void 0 !== e.message.haslang && 1 == e.message.haslang || (g_issafari || g_isfirefoxsdk) && (i.language_data = g_language_data);
    var o = lp_gettld_url(e.message.name);
    if (hasNeverSave(e.message.name, o) && (i.neversave = !0), !t && is_max_frames_exceeded(r, g_CS_count) || hasNeverEnableLP(e.message.name, o)) L("set killswitch for tab:" + r + " url:" + e.message.name), i.killswitch = 1, set_killswitch_value(r, n, i.killswitch);
    else if (!t && g_skip_ad_frames && skip_CS_by_score(r, n)) console.warn("EXPERIMENT: skipping ads/rich content frame " + e.message.name), i.killswitch = 1, set_killswitch_value(r, n, i.killswitch);
    else {
        var s = 0 < o.lastIndexOf(".") ? o.substr(o.lastIndexOf(".") + 1) : "";
        i.tld = s, i.tlddata = LPJSON.stringify(void 0 === lp_all_tlds[s] ? [] : lp_all_tlds[s]), set_killswitch_value(r, n, 0);
        var l = null !== g_pending_launch && void 0 !== g_last_launch && void 0 !== g_last_launch[g_pending_launch] && (new Date).getTime() - g_last_launch[g_pending_launch] <= 25e3;
        i.is_launch = l
    }
    add_totp_data(r, o, t, i), sendCS(r, i, n), t ? (void 0 !== g_persistent_notifications[r] && g_persistent_notifications[r] && sendCS(r, g_persistent_notifications[r]), g_cpwbot && CPWbot_bg && CPWbot_bg.score_topdoc(r, n, e.message.name)) : void 0 !== g_persistent_notifications[r] && g_persistent_notifications[r] && -1 != e.message.name.indexOf("streetscape.com") && setTimeout(function() {
        sendCS(r, g_persistent_notifications[r], "all")
    }, 10), !t && is_max_frames_exceeded(r, g_CS_count) && (g_issafari && sendCS(r, {
        cmd: "remove_event_listener"
    }, n), debug && L("exceeded max frames on tabid " + r), delete g_CS[r][n])
}

function getdata_eventHandler(t, e) {
    if (!g_isedge || "toolstrip" != t.message.page || e) {
        var a = {
            g_userprefsstr: LPJSON.stringify(g_userprefs),
            g_gblprefsstr: LPJSON.stringify(g_gblprefs),
            g_username: g_username,
            ischrome: ischrome,
            LPISLOC: LPISLOC,
            LPISUPEK: LPISUPEK,
            LPISUPEKCAPABLE: LPISUPEKCAPABLE,
            g_promptsstr: LPJSON.stringify(g_prompts),
            lploggedin: lploggedin,
            g_can_copy_to_clipboard: can_copy_to_clipboard(),
            g_can_clear_clipboard: can_clear_clipboard()
        };
        switch (a.g_is_win = g_is_win, a.g_is_linux = g_is_linux, a.g_is_mac = g_is_mac, a.g_have_nplastpass = have_nplastpass(), a.g_have_native_messaging = have_native_messaging(), a.g_have_pplastpass = have_pplastpass(), a.g_have_ws = have_ws(), a.g_isadmin = g_isadmin, a.g_iscompanyadmin = g_iscompanyadmin, a.g_enterprisemodel = g_enterprisemodel, a.g_showcredmon = g_showcredmon, a.g_premium_exp = g_premium_exp, a.g_is_premium_trial = g_is_premium_trial, a.g_is_company_subscription_expired = g_is_company_subscription_expired, a.base_url = base_url, a.g_hidevault = g_hidevault, a.g_hideshowvault = g_hideshowvault, a.g_hidenotes = g_hidenotes, a.g_hideidentities = g_hideidentities, a.g_hideexport = g_hideexport, a.g_hideimport = g_hideimport, a.g_hidesharing = g_hidesharing, a.g_hideprint = g_hideprint, a.g_hidecreate = g_hidecreate, a.g_hideacctsettings = g_hideacctsettings, a.g_nopoll = g_nopoll, a.g_norecovery = g_norecovery, a.g_nosharingkeys = g_nosharingkeys, a.g_skiphttptest = g_skiphttptest, a.g_hidesearch = g_hidesearch, a.g_offer_popupfill = g_offer_popupfill, a.g_hidesessions = g_hidesessions, a.g_hideseccheck = g_hideseccheck, a.g_hidelogoffprefs = g_hidelogoffprefs, a.g_hidescreenkeyboard = g_hidescreenkeyboard, a.g_hideappearancebox = g_hideappearancebox, a.g_hiderecentlyusedlistsize = g_hiderecentlyusedlistsize, a.g_hidelicenselink = g_hidelicenselink, a.g_hideaboutmanuallink = g_hideaboutmanuallink, a.g_hideabout = g_hideabout, a.g_hiderecheckpage = g_hiderecheckpage, a.g_hidecheckupdates = g_hidecheckupdates, a.g_hidegopremium = g_hidegopremium, a.g_shownewloginoption = g_shownewloginoption, a.g_hideopenfavs = g_hideopenfavs, a.g_showvaultdefault = g_showvaultdefault, a.g_showvaultalways = g_showvaultalways, a.g_hidesaedhotkey = g_hidesaedhotkey, a.g_key_iterations = get_key_iterations(g_username), a.g_cpwbot = g_cpwbot, a.g_chrome_url = getchromeurl("", !0), a.g_lp_model = g_lp_model, a.g_newvault = !0, a.g_loggedinoffline = g_loggedinoffline, a.g_loggedinonline = g_loggedinonline, a.g_is_chrome_portable = g_is_chrome_portable, a.g_nofolder_feature_enabled = g_nofolder_feature_enabled, a.g_basicauth_feature_enabled = g_basicauth_feature_enabled, a.g_new_settings_enabled = g_new_settings_enabled, a.LPContentScriptFeatures = LPContentScriptFeatures, a.g_disableautofill = g_disableautofill, a.g_first_time_login = g_first_time_login, g_isfirefoxsdk && (a.remembersignons = g_preferences_service.get("signon.rememberSignons", !0)), (g_issafari || g_isfirefoxsdk) && (a.lp_phpsessid = lp_phpsessid), a.rsaprivatekeyhex = lp_rsaprivatekeyhex, t.message.page) {
            case "about":
                a.g_nplastpass_version = get_nplastpass_version(), a.g_nplastpass_build_date_time = get_nplastpass_build_date_time(), a.g_native_messaging_version = g_native_messaging_version, a.g_native_messaging_build_date = g_native_messaging_build_date, a.g_native_messaging_build_time = g_native_messaging_build_time, a.g_issafari = g_issafari;
                break;
            case "import_other":
                a.g_wlan_works = g_wlan_works, a.g_wlan_has_exe = g_wlan_has_exe;
                break;
            case "img":
                a.g_img_data = LPJSON.stringify(g_img_data), a.g_audio_data = LPJSON.stringify(g_audio_data);
                break;
            case "login":
                a.g_badgedata = g_badgedata, a.g_notification_type = g_notification_type, a.g_notification_data = g_notification_data, g_reprompt_callback && (a.g_reprompt_callback = "g_reprompt_callback", g_reprompt_callback_save = g_reprompt_callback, g_reprompt_callback = null, a.g_local_key = g_local_key, a.g_cached_hash = g_cached_hash, a.g_local_key_hex = g_local_key_hex, a.g_can_allow_reprompt_skip = !(g_prompts.company_login_site_prompt || g_prompts.company_copyview_site_prompt)), g_reprompt_error_callback && (a.g_reprompt_error_callback = "g_reprompt_error_callback", g_reprompt_error_callback_save = g_reprompt_error_callback, g_reprompt_error_callback = null), a.g_forgotpwurl = g_forgotpwurl, a.lptoken = lptoken;
                var r = new Array;
                for (var n in g_sites) check_ident_aid(g_sites[n].aid) && (r[n] = g_sites[n]);
                a.g_sites = LPJSON.stringify(r), a.g_prefoverrides = LPJSON.stringify(g_prefoverrides);
                break;
            case "omnikey":
                g_omnikey_callback && (a.g_omnikey_callback = "g_omnikey_callback", g_omnikey_callback_save = g_omnikey_callback, g_omnikey_callback = null);
                break;
            case "export":
                a.g_export_output = g_export_output, g_export_output = "";
                break;
            case "attach":
                addAttach(function() {
                    a.g_attachname = g_attachname, a.g_attachbytes = g_attachbytes, g_attachname = g_attachbytes = ""
                });
                break;
            case "prefs":
                a.g_can_open_popover = g_can_open_popover, a.g_pref_tab = g_pref_tab, g_pref_tab = null, a.g_master_password_saved = g_master_password_saved;
                for (var i = new Array, n = 0; n < g_formfills.length; n++) check_ident_ffid(g_formfills[n].ffid) && (i[i.length] = g_formfills[n]);
                a.g_formfills = LPJSON.stringify(i), a.g_prefoverrides = LPJSON.stringify(g_prefoverrides), a.g_flags = LPJSON.stringify(g_flags), a.g_opera_context = !1, a.g_firefoxsdk_context = !(!g_isfirefoxsdk || "undefined" == typeof g_context_menu), a.lppassusernamehash = lppassusernamehash;
                break;
            case "vault":
                if (a.g_username = g_username, a.g_local_accts_version = g_local_accts_version, a.lploggedin = lploggedin, a.g_identity = g_identity, a.g_isadmin = g_isadmin, a.g_icons_length = g_icons_length, a.recentCount = getRecentCount(), a.g_enterpriseuser = g_enterpriseuser, a.g_enterprisemodel = g_enterprisemodel, a.g_iscompanyadmin = g_iscompanyadmin, a.g_is_company_subscription_expired = g_is_company_subscription_expired, a.g_showcredmon = g_showcredmon, a.g_token = g_token, a.g_sharing_enabled = g_sharing_enabled, a.g_folder_sharing_enabled = g_folder_sharing_enabled, a.g_prefoverrides = LPJSON.stringify(g_prefoverrides), void 0 === t.message.g_username || g_username != t.message.g_username || g_local_accts_version > t.message.g_local_accts_version || lploggedin != t.message.lploggedin || g_identity != t.message.g_identity || g_isadmin != t.message.g_isadmin) {
                    a.g_hideidentities = g_hideidentities, a.g_identities = JSON.stringify(g_identities);
                    var r = {};
                    for (var n in g_sites) check_ident_aid(g_sites[n].aid) && (r[n] = g_sites[n]);
                    a.g_sites = JSON.stringify(r), a.g_shares = JSON.stringify(g_shares), a.lp_attaches = JSON.stringify(lp_attaches);
                    var o = {};
                    for (var n in g_securenotes) check_ident_aid(g_securenotes[n].aid) && (o[n] = g_securenotes[n]);
                    a.g_securenotes = JSON.stringify(o);
                    var s = {};
                    for (var n in g_applications) check_ident_appaid(g_applications[n].appaid) && (s[n] = g_applications[n]);
                    a.g_applications = JSON.stringify(s);
                    for (var i = [], n = 0; n < g_formfills.length; n++) check_ident_ffid(g_formfills[n].ffid) && i.push(g_formfills[n]);
                    a.g_formfills = JSON.stringify(i);
                    for (var l = [], n = 0; n < g_pendings.length; n++) check_ident_aid(g_pendings[n].aid) && l.push(g_pendings[n]);
                    a.g_pendings = JSON.stringify(l), a.g_username_hash = g_username_hash, a.searchinnotes = get_searchNotesPref(), a.lpclearrecent = lpclearrecent, a.g_icons_length = g_icons_length, a.clearRecentTime = getClearRecentTime(), a.g_icons = LPJSON.stringify(g_icons), a.g_bigicons = LPJSON.stringify(g_bigicons), a.g_local_key = g_local_key, a.g_local_key_hex = g_local_key_hex, a.g_promptsstr = LPJSON.stringify(g_prompts), a.g_emer_sharers = JSON.stringify(g_emer_sharers), a.g_emer_sharees = JSON.stringify(g_emer_sharees), a.g_pending_shares = JSON.stringify(g_pending_shares), a.g_note_templates = JSON.stringify(g_note_templates), a.g_reminders = JSON.stringify(g_reminders), a.g_genpws = g_genpws
                }
                break;
            case "toolstrip":
            case "toolstripchangepw":
                var _ = void 0 !== t.message.delay_data && t.message.delay_data;
                if (g_isedge && (a.g_bigicons = JSON.stringify(g_bigicons)), a.g_shares = LPJSON.stringify(g_shares), a.sitepwlen = LP.sitepwlen, a.g_wlan_works = g_wlan_works, a.g_wlan_has_exe = g_wlan_has_exe, a.g_secret_cache = g_secret_cache, "string" == typeof g_generate_url && "" != g_generate_url || (g_generate_url = getcurrenturl()), "" != (a.g_generate_url = g_generate_url) && (g_generate_url_prev = g_generate_url), g_generate_url = "", a.allowmultifactortrust = allowmultifactortrust, a.hidemultifactordisable = hidemultifactordisable, a.g_changepwnewpw = g_changepwnewpw, a.g_changepwtld = g_changepwtld, a.g_changepwexcludeid = g_changepwexcludeid, a.lploggedin = lploggedin, a.g_genpws = g_genpws, a.g_local_key = g_local_key, a.g_local_key_hex = g_local_key_hex, a.g_badgedata = g_badgedata, a.g_notification_type = g_notification_type, a.g_notification_data = g_notification_data, a.g_premium_exp = g_premium_exp, a.g_is_premium_trial = g_is_premium_trial, a.g_enterpriseuser = g_enterpriseuser, a.g_enterprisemodel = g_enterprisemodel, a.g_is_company_subscription_expired = g_is_company_subscription_expired, a.g_hideexport = g_hideexport, a.g_hideidentities = g_hideidentities, a.g_hideimport = g_hideimport, a.g_hidenotes = g_hidenotes, a.g_hideprint = g_hideprint, a.g_identity = g_identity, a.clearRecentTime = getClearRecentTime(), _) {
                    var c = !1;
                    for (var n in g_applications)
                        if (check_ident_appaid(g_applications[n].appaid)) {
                            c = !0;
                            break
                        } a.g_have_application = c
                } else {
                    var r = new Array;
                    if (g_enable_full_menu)
                        for (var n in g_sites) g_sites[n] && check_ident_aid(g_sites[n].aid) && (r[n] = g_sites[n]);
                    a.g_sites = LPJSON.stringify(r);
                    var o = new Array;
                    if (g_enable_full_menu)
                        for (var n in g_securenotes) check_ident_aid(g_securenotes[n].aid) && (o[n] = g_securenotes[n]);
                    a.g_securenotes = LPJSON.stringify(o);
                    var s = new Array;
                    if (g_enable_full_menu)
                        for (var n in g_applications) check_ident_appaid(g_applications[n].appaid) && (s[n] = g_applications[n]);
                    a.g_applications = LPJSON.stringify(s)
                }
                a.g_breach_data = LPJSON.stringify(g_breach_data);
                var g = getcurrenturl(),
                    d = getsites("toolstripchangepw" == t.message.page ? g_changepwtld : lp_gettld_url(g), "toolstripchangepw" == t.message.page, "toolstripchangepw" == t.message.page ? g_changepwexcludeid : 0);
                "toolstrip" == t.message.page && (d = reorderOnURL(d, g));
                var p = new Array;
                if (g_enable_full_menu)
                    for (var u in d) "toolstrip" == t.message.page && (u = d[u].aid), p[u] = g_sites[u];
                if (a.g_sites_tld = LPJSON.stringify(p), !_) {
                    var i = new Array;
                    if (g_enable_full_menu)
                        for (var n = 0; n < g_formfills.length; n++) check_ident_ffid(g_formfills[n].ffid) && (i[i.length] = g_formfills[n]);
                    a.g_formfills = JSON.stringify(i)
                }
                a.g_identities = LPJSON.stringify(g_identities), a.g_nevers = LPJSON.stringify(getnevers()), a.g_icons = LPJSON.stringify(g_enable_full_menu ? g_icons : []), g_firefox_preload_menu || (a.g_bigicons = LPJSON.stringify(g_enable_full_menu ? g_icons : [])), a.g_menuheight = getmenuheight(!0, !0, !0, !0), a.g_tabid = getcurrenttabid(), a.g_language = lpGetPref("language", ""), a.g_prefoverrides = LPJSON.stringify(g_prefoverrides);
                break;
            case "formfill":
                a.g_shares = LPJSON.stringify(g_shares), a.g_formfill_data = LPJSON.stringify(g_formfill_data), g_formfill_data = null, a.countryfromip = countryfromip, a.g_generatedpw = g_generatedpw, a.lploggedin = lploggedin, a.g_local_key = g_local_key, a.g_local_key_hex = g_local_key_hex;
                break;
            case "site":
                var g = g_site_data ? g_site_data.url : "";
                a.g_site_data = LPJSON.stringify(g_site_data), g_site_data = null, a.g_generatedpw = g_generatedpw, a.g_showhistorylinks = g_showhistorylinks, a.g_local_key = g_local_key, a.g_local_key_hex = g_local_key_hex, a.g_secret_cache = LPJSON.stringify(g_secret_cache);
                var r = new Array;
                for (var n in g_sites) check_ident_aid(g_sites[n].aid) && (r[n] = g_sites[n]);
                a.g_sites = LPJSON.stringify(r);
                var d = getsites(lp_gettld_url(g), !0),
                    r = new Array;
                for (var u in d) r[u] = g_sites[u];
                a.g_sites_tld = LPJSON.stringify(r), a.g_shares = LPJSON.stringify(g_shares);
                var o = new Array;
                for (var n in g_securenotes) check_ident_aid(g_securenotes[n].aid) && (o[n] = g_securenotes[n]);
                a.g_securenotes = LPJSON.stringify(o);
                var s = new Array;
                for (var n in g_applications) check_ident_appaid(g_applications[n].appaid) && (s[n] = g_applications[n]);
                a.g_applications = LPJSON.stringify(s), a.lploggedin = lploggedin, a.g_prompts = g_prompts, a.g_savesitestopersonal = LPJSON.stringify("undefined" != typeof g_savesitestopersonal ? g_savesitestopersonal : new Array), a.g_sharing_enabled = g_sharing_enabled;
                break;
            case "create_account":
            case "reenter_password":
                a.g_create_account_data = LPJSON.stringify(g_create_account_data);
                break;
            case "siterefresh":
                var r = new Array;
                for (var n in g_sites) check_ident_aid(g_sites[n].aid) && (r[n] = g_sites[n]);
                a.g_sites = LPJSON.stringify(r);
                var d = getsites(lp_gettld_url(g), !0),
                    r = new Array;
                for (var u in d) r[u] = g_sites[u];
                a.g_sites_tld = LPJSON.stringify(r);
                var d = getsites(lp_gettld_url(g), !0);
                a.g_shares = LPJSON.stringify(g_shares), a.g_pending_pw_change = g_pending_pw_change;
                break;
            case "breach":
                a.g_breach_data = LPJSON.stringify(g_breach_data), a.g_username = g_username;
                var r = new Array;
                for (var u in g_sites) r[u] = g_sites[u];
                var f = new Array;
                for (var u in d) f[u] = g_sites[u];
                a.g_sites = LPJSON.stringify(r), a.g_shares = LPJSON.stringify(f), a.g_local_key = g_local_key;
                break;
            case "debug":
                a.g_historybuf = gethistorybuf(), a.g_user_debug_enabled = is_user_debug_enabled()
        }
        event_dispatch_message(t, "gotdata", a)
    } else get_selected_tab(null, function(e) {
        setcurrenttabid(e.id), setcurrenturl(gettaburl(e)), getdata_eventHandler(t, !0)
    })
}

function update_menus(t) {
    if ((g_ischrome || g_isfirefoxsdk) && get_selected_tab(null, function(e) {
            t && (LPContextMenus.lastcontexturl = null), LPContextMenus.rebuildcontext(gettaburl(e))
        }), g_issafari)
        for (var e = 0; e < safari.extension.bars.length; e++)
            if ("LPMenu" == safari.extension.bars[e].identifier) {
                safari.extension.bars[e].label = gs("LastPass Menu"), safari.extension.bars[e].contentWindow.redraw_menu(), lploggedin || "undefined" != typeof SafariExtensionPopover || safari.extension.bars[e].hide();
                break
            }
}

function toggle_menu(e) {
    for (var t = 0; t < safari.extension.bars.length; t++) "LPMenu" == safari.extension.bars[t].identifier && (e || safari.extension.bars[t].visible ? safari.extension.bars[t].hide() : safari.extension.bars[t].show())
}

function close_menu() {
    "undefined" == typeof SafariExtensionPopover && toggle_menu(!0)
}
var g_alert_reinstall = !1;

function alert_reinstall() {
    g_alert_reinstall = g_alert_reinstall || !0
}
var showFirefoxPanel = function() {
    var e = function() {
        shouldOpenDropdown() ? LPPlatform.openDropdownPopover() : (g_firefox_button_clicked = !0, g_firefox_panel.port.emit("message", {
            messagetype: "runonload"
        }))
    };
    return function() {
        e()
    }
}();

function create_firefox_button() {
    "undefined" != typeof g_ui_button_toggle && (g_firefox_button = g_ui_button_toggle.ToggleButton({
        id: "lastpass-button",
        label: "LastPass",
        icon: {
            19: self.data.url("images/iconset2/19x19_Gray.png"),
            38: self.data.url("images/iconset2/19x19_Gray_2x.png")
        },
        onChange: function(e) {
            e.checked && getsinglefactortype(function(e) {
                !g_ask_native_messaging_from_button && (lploggedin || null != g_badgedata || "" == e && 1 == lpGetPref("enablenewlogin", 1)) ? lploggedin ? showFirefoxPanel() : open_login_panel() : (g_firefox_button.state("window", {
                    checked: !1
                }), open_login(!0))
            })
        }
    }))
}

function onLoad(e) {
    if (g_onload_started = !0, L("BG : loaded"), migrate_from_old_firefox(), !e) {
        if (void 0 !== LPPlatform.initialize && LPPlatform.initialize(), LPPlatform.onTabUpdated && LPPlatform.onTabUpdated(function(e) {
                g_issafari_appext && !e.tabDetails.browser || (g_badgedata && g_badgedata.type && "alert" === g_badgedata.type && g_badgedata.tabid && g_badgedata.tabid === e.tabDetails.tabID && (compare_tlds(lp_gettld_url(e.tabDetails.tabURL), g_badgedata.tld) || (g_badgedata = null, drawIconAtRotation(0))), removeFormfillTab(e.tabDetails.tabID), setcurrenttabid(e.tabDetails.tabID), setbadgetext(e.tabDetails.tabURL), LPContextMenus.rebuildcontext(e.tabDetails.tabURL))
            }), LPPlatform.onTabActivated && LPPlatform.onTabActivated(function(e) {
                g_issafari_appext && !e.tabDetails.browser || (setcurrenttabid(e.tabDetails.tabID), setbadgetext(e.tabDetails.tabURL), LPContextMenus.rebuildcontext(e.tabDetails.tabURL))
            }), g_isfirefoxsdk) {
            var t = g_window_utils.getMostRecentBrowserWindow();
            void 0 !== t.NativeWindow && (g_fennec_menu_id = t.NativeWindow.menu.add(gs("LastPass"), null, fennec_menu)), new g_deprecated_window_utils.WindowTracker({
                onTrack: function(e) {
                    g_window_utils.isBrowser(e) || ("chrome://global/content/commonDialog.xul" == e.location.href && "function" == typeof LP.lphandlebasic ? setTimeout(function() {
                        LP.lphandlebasic(e.document, e)
                    }, 0) : "chrome://foxmarks/content/foxmarks-login.xul" == e.location.href && setTimeout(function() {
                        LP.lphandlexmarks(e.document, e)
                    }, 0))
                }
            })
        }
        g_issafari && (g_hidemenubar && "undefined" != typeof SafariExtensionPopover && toggle_menu(!0), safari.application.addEventListener("message", message_handler, !1), safari.application.addEventListener("command", command_handler, !1), safari.application.addEventListener("navigate", navigate_handler, !1))
    }
    if (have_binary_function("lpvt_setup_if") && call_binary_function("lpvt_setup_if"), have_binary_function("file_exists") && (call_binary_function("file_exists", "LPISLOC", function(e) {
            e && call_binary_function("read_file", "LPISLOC", function(e) {
                call_binary_function("lpvt_verify_file_contents", e, function(e) {
                    e ? LPISLOC = !0 : alert_reinstall()
                })
            })
        }), call_binary_function("file_exists", "LPISUPEK", function(e) {
            e && call_binary_function("read_file", "LPISUPEK", function(e) {
                call_binary_function("lpvt_verify_file_contents", e, function(e) {
                    e ? LPISUPEK = !0 : alert_reinstall()
                })
            })
        }), call_binary_function("file_exists", "LPISUPEKCAPABLE", function(e) {
            e && call_binary_function("read_file", "LPISUPEKCAPABLE", function(e) {
                call_binary_function("lpvt_verify_file_contents", e, function(e) {
                    e ? LPISUPEKCAPABLE = !0 : alert_reinstall()
                })
            })
        })), !e && g_ischrome && ("function" == typeof chrome.browserAction.setPopup && chrome.browserAction.onClicked.addListener(function(e) {
            g_ask_native_messaging_from_button ? (g_ask_native_messaging_from_button = !1, request_native_messaging(), drawIconAtRotation(0)) : open_login(!0)
        }), chrome.tabs.onCreated.addListener(function(e) {
            clear_badge_text(), LPContextMenus.lastcontexturl = ""
        })), drawIconAtRotation(0), get_reg_bool("hidevault", g_hidevault, function(e) {
            g_hidevault = e
        }), get_reg_bool("hidenotes", g_hidenotes, function(e) {
            g_hidenotes = e
        }), get_reg_bool("hideidentities", g_hideidentities, function(e) {
            g_hideidentities = e
        }), get_reg_bool("hideexport", g_hideexport, function(e) {
            g_hideexport = e
        }), get_reg_bool("hideimport", g_hideimport, function(e) {
            g_hideimport = e
        }), get_reg_bool("hidesharing", g_hidesharing, function(e) {
            g_hidesharing = e
        }), get_reg_bool("hideprint", g_hideprint, function(e) {
            g_hideprint = e
        }), LPISLOC && (g_hideidentities = g_hidesharing = g_hideprint = !0), g_is_mac && g_issafari) var a = new WebSocket("ws://127.0.0.1:19537", "lp2");
    if (e ? 1 == lpGetPref("enablenamedpipes", 1) && have_binary() && lpnp_init() : (lpReadAllPrefs(function(e) {
            var t = getLanguage();
            handleLanguageOffline(t), LPContextMenus.createContextMenus(), drawIconAtRotation(0), lplog("base_url=" + base_url), get_all_windows({
                populate: !0
            }, function(e) {
                for (var t = 0; t < e.length; t++)
                    for (var a = 0; a < get_tabs_length(e[t]); a++) {
                        var r = get_tabs(e[t])[a],
                            n = gettabid(r),
                            i = gettaburl(r);
                        !i || -1 == i.indexOf("https://lastpass.com/install.php") && -1 == i.indexOf(base_url + "install.php") || (lplog("Reloading install.php page"), chrome.tabs.reload(n))
                    }
            });
            var a = 50,
                r = function(e) {
                    void 0 === e ? 0 < a && (a--, setTimeout(function() {
                        lpReadAllPrefs(r)
                    }, 0)) : 0 === e && (setupInContextOnboarding(), g_issafari && "undefined" != typeof SafariExtensionPopover && toggle_menu(!0))
                };
            r(e), 1 == lpGetPref("enablenamedpipes", 1) && have_binary() && lpnp_init(), lp_ws.startProcessing(), g_offer_popupfill && (do_experimental_popupfill = 1 == lpGetPref("usepopupfill", 1)), !LPISLOC && g_np_init || httptest()
        }), setup_poll_timer(), DeleteOldDynamicFiles(), -1 != getchromeurl("needtoreinstall.html").indexOf("kegdhfdpgckamaoikbjiemmikleploeh") && openURL(base_url + "/needtoreinstall.html")), setTimeout(function() {
            g_ischrome && !g_basicauth_timer_started && have_binary_function("setup_basicauth_timer") && (g_basicauth_timer_started = !0, call_binary_function("setup_basicauth_timer"))
        }, 100), !e) {
        LoadSpecialSites(), setTimeout(check_key_for_changes, 6e4);
        try {
            g_ischrome && chrome.webRequest.onAuthRequired.addListener(function(e, t) {
                var a = {};
                try {
                    if (void 0 !== g_launches[e.tabId] && g_launches[e.tabId]) {
                        var r = g_launches[e.tabId];
                        if (void 0 !== g_sites[r]) {
                            var n = g_sites[r];
                            compare_tlds(lp_gettld_url(n.url), lp_gettld_url(gettaburl(e))) && (a.authCredentials = {
                                username: getusernamefromacct(n),
                                password: getpasswordfromacct(n)
                            }, g_launches[e.tabId] = null)
                        }
                    } else {
                        var i = gettaburl(e),
                            o = reorderOnURL(getsites(lp_gettld_url(i)), i, !0);
                        for (var s in o)
                            if (1 == o[s].basic_auth && write_history({
                                    cmd: "check_autologin3",
                                    tabid: tabid,
                                    aid: o[s].aid,
                                    submit: "tbd"
                                }), 1 == o[s].basic_auth && check_autologin(!1, o[s])) {
                                a.authCredentials = {
                                    username: getusernamefromacct(o[s]),
                                    password: getpasswordfromacct(o[s])
                                };
                                break
                            }
                    }
                } catch (e) {}
                return a
            }, {
                urls: ["<all_urls>"]
            }, ["blocking"])
        } catch (e) {}
    }
}

function chromeGetSelf(e) {
    chrome && chrome.management && "function" == typeof chrome.management.getSelf ? chrome.management.getSelf(e) : e(null)
}

function setupInContextOnboarding() {
    g_ischrome || g_isfirefoxwebext || g_issafari || g_isedge ? (LPContentScriptFeatures.intro_tutorial_version = "context", get_all_windows({
        populate: !0
    }, function(e) {
        for (var t = null, a = 0; a < e.length; a++)
            for (var r = 0; r < get_tabs_length(e[a]); r++) {
                var n = get_tabs(e[a])[r],
                    i = gettabid(n),
                    o = gettaburl(n);
                (-1 < (o = o ? o.toLowerCase() : "").indexOf("https://chrome.google.com/webstore/detail/lastpass-free-password-ma/") || -1 < o.indexOf("https://addons.mozilla.org/") && -1 < o.indexOf("/firefox/addon/lastpass-password-manager") || -1 < o.indexOf("https://www.microsoft.com/") && -1 < o.indexOf("p/lastpass-free-password-manager") || -1 < o.indexOf("https://safari-extensions.apple.com/details/?id=com.lastpass.lpsafariextension")) && (t = i)
            }
        var s = "https://www.lastpass.com/get-started";
        sendLpImprove("extension_download_success_get_started_shown"), t ? LPPlatform.navigateTab({
            tabId: t,
            url: s
        }) : LPPlatform.openTab({
            url: s
        })
    })) : LPContentScriptFeatures.intro_tutorial_version = "vault"
}

function get_reg_bool(e, t, a) {
    get_registry_value("Software\\LastPass", e, "-1", function(e) {
        a(-1 == e ? t : "1" == e)
    })
}

function onUnload() {
    if (close_lpctypeslib(), deleteallattachments(!0), g_fennec_menu_id) {
        var e = g_window_utils.getMostRecentBrowserWindow();
        void 0 !== e.NativeWindow && e.NativeWindow.menu.remove(g_fennec_menu_id)
    }
}

function check_key_for_changes() {
    null == g_local_key_hash || "" == g_local_key || null != g_local_key_hash && SHA256(g_local_key) != g_local_key_hash && (L("LOGGING OFF : cosmicrays"), loggedOut(), lpReportError("INVESTIGATE! KEY_HASH IS WRONG! COSMIC RAYS?")), this.setTimeout(check_key_for_changes, 6e4)
}
if (g_ischrome) {
    var onconnect_listener = Raven.wrap(function(t) {
        if (0 !== t.name.indexOf("requestPort") && 0 !== t.name.indexOf("extensionMessaging") && "sync" !== t.name) {
            var e = !1,
                a = t.name;
            g_isedge && a.match(/^(0|1)\|/) && (e = "1" == a.charAt(0), a = a.substring(2));
            var r = !1;
            if (t.sender.tab && gettaburl(t.sender.tab) && punycode.URLToASCII(a) == gettaburl(t.sender.tab) && 0 === t.sender.frameId && (g_loggedLogins = new Array, r = !0, g_datacache[t.sender.tab.id] = {
                    html: "",
                    extra: ""
                }, g_popupforminput[t.sender.tab.id] = [], do_popupkbdnavreset(t.sender.tab.id), g_isedge && e && (g_CS[t.sender.tab.id] = new Array, g_CS_count[t.sender.tab.id] = 0)), t.sender.tab && (L("RAW TAB URL CS[" + t.sender.tab.id + "] = " + t.sender.tab.url), L("RAW TAB URL NAME CS[" + t.sender.tab.id + "] = " + a), L("CS[" + t.sender.tab.id + "] -> BG : CONNECT from tab with url=" + gettaburl(t.sender.tab))), void 0 !== t.sender && void 0 !== t.sender.tab && void 0 !== t.sender.tab.id) {
                var n = t.sender.tab.id;
                void 0 !== g_CS[t.sender.tab.id] && g_CS[t.sender.tab.id] || (g_CS[t.sender.tab.id] = new Array, g_CS_count[t.sender.tab.id] = 0);
                var i = g_CS[t.sender.tab.id].length;
                g_CS[t.sender.tab.id][i] = t, g_CS_count[t.sender.tab.id]++;
                var o = {
                    cmd: "setdocnum",
                    docnum: i
                };
                if (2 <= g_CS_count[t.sender.tab.id] && ("http://chat.major-design.ru/" == a || 0 < a.indexOf("facebook.com/ajax/"))) {
                    var n = t.sender.tab.id;
                    return lpdbg("connect", "skipping connect to document with tabcount=" + g_CS_count[t.sender.tab.id] + ", istop=" + r + ", url=" + a), sendCS(n, {
                        cmd: "remove_event_listener"
                    }, i), void delete g_CS[n][i]
                }
                register_new_cs(n, i, a, r);
                var s = lp_gettld_url(a);
                if (hasNeverSave(a, s) && (o.neversave = !0), !r && is_max_frames_exceeded(t.sender.tab.id, g_CS_count) || hasNeverEnableLP(a, s)) L("set killswitch for tab:" + t.sender.tab.id + " url:" + a), o.killswitch = 1, set_killswitch_value(n, i, o.killswitch);
                else if (!r && g_skip_ad_frames && skip_CS_by_score(n, i)) console.warn("EXPERIMENT: skipping ads/rich content frame " + a), o.killswitch = 1, set_killswitch_value(n, i, o.killswitch);
                else {
                    var l = 0 < s.lastIndexOf(".") ? s.substr(s.lastIndexOf(".") + 1) : "";
                    o.tld = l, o.tlddata = LPJSON.stringify(void 0 === lp_all_tlds[l] ? [] : lp_all_tlds[l]), set_killswitch_value(n, i, 0);
                    var _ = null !== g_pending_launch && void 0 !== g_last_launch && void 0 !== g_last_launch[g_pending_launch] && (new Date).getTime() - g_last_launch[g_pending_launch] <= 25e3;
                    o.is_launch = _
                }
                add_totp_data(n, s, r, o), sendCS(t.sender.tab.id, o, i), r ? (g_CS_tops[t.sender.tab.id] = i, void 0 !== g_persistent_notifications[t.sender.tab.id] && g_persistent_notifications[t.sender.tab.id] && sendCS(t.sender.tab.id, g_persistent_notifications[t.sender.tab.id]), g_cpwbot && CPWbot_bg && CPWbot_bg.score_topdoc(t.sender.tab.id, i, a)) : (g_CS_tops[t.sender.tab.id] == i && (console.warn("page reload case, new topdoc != old topdoc, new topdoc has not registered yet"), console.warn("delete g_CS_tops[" + t.sender.tab.id + "]"), delete g_CS_tops[t.sender.tab.id], g_cpwbot && CPWbot_bg && (CPWbot_bg.clear_frame_score(t.sender.tab.id, i, a), CPWbot_bg.in_validate() && CPWbot_bg.force_validate_retry(!0))), void 0 !== g_persistent_notifications[t.sender.tab.id] && g_persistent_notifications[t.sender.tab.id] && -1 != a.indexOf("streetscape.com") && setTimeout(function() {
                    sendCS(t.sender.tab.id, g_persistent_notifications[t.sender.tab.id], "all")
                }, 10)), r || !is_max_frames_exceeded(t.sender.tab.id, g_CS_count) ? no_persistent_messaging() || (t.onMessage.addListener(Raven.wrap(function(e) {
                    receiveCS(t.sender.tab.id, e, 0, t)
                })), t.onDisconnect.addListener(Raven.wrap(function() {
                    receiveCS(t.sender.tab.id, null, 1, t)
                }))) : delete g_CS[t.sender.tab.id][i]
            }
        }
    });
    void 0 !== chrome.runtime && void 0 !== chrome.runtime.onConnect && chrome.runtime.onConnect ? chrome.runtime.onConnect.addListener(onconnect_listener) : void 0 !== chrome.extension && void 0 !== chrome.extension.onConnect && chrome.extension.onConnect && chrome.extension.onConnect.addListener(onconnect_listener);
    var listener = Raven.wrap(function(e, t, a) {
        if (void 0 !== e.cmd)
            if ("getnotificationdata" == e.cmd) void 0 !== g_datacache[t.tab.id] && a(g_datacache[t.tab.id]);
            else if ("hideoverlay" == e.cmd || "slidedownoverlay" == e.cmd || "slideupoverlay" == e.cmd || "hidecontext" == e.cmd || "hidetotp" == e.cmd) sendCS(t.tab.id, {
            cmd: e.cmd
        }, "hidetotp" == e.cmd ? "all" : null), "hideoverlay" == e.cmd ? (g_persistent_notifications[t.tab.id] = null, clear_badge()) : "hidetotp" == e.cmd && (g_ask_totp[t.tab.id] = null);
        else if ("disabletotp" == e.cmd) disabletotp(e.tld);
        else {
            if ("enabletotp" == e.cmd) return enabletotp(e.tld, t.tab.id, a), !0;
            if ("invitetotp" == e.cmd) invitetotp(e.email, e.phone);
            else if ("popupfillscreateack" == e.cmd) void 0 !== t.tab && lploggedin && do_popupfillscreateack(t.tab.id);
            else if ("closepopupfills" == e.cmd) {
                if (void 0 !== t.tab) {
                    var r = t.tab.id;
                    null != typeof g_popup_tab_docnum[r] ? sendCS(t.tab.id, {
                        cmd: e.cmd
                    }, g_popup_tab_docnum[r]) : sendCS(t.tab.id, {
                        cmd: e.cmd
                    }, "all"), delete g_popup_tab_docnum[r], clear_popup_heartbeat(r), e.option && sendLpImprove("infieldclose", {
                        source: "form",
                        option: e.option
                    })
                }
            } else if ("fillgenpassword" == e.cmd) {
                e.cmd = "populategeneratedpassword", e.url = t.tab.url, sendCS(t.tab.id, e);
                var n = {},
                    i = e.saveOptions;
                for (var o in i) n[o] = i[o];
                n.action = "formfill", sendLpImprove("genpassword", n)
            } else if (void 0 !== e.action && "never" == e.action) {
                handleNever(t.tab.id, e), void 0 !== e.fromsave && (g_persistent_notifications[t.tab.id] = null, clear_badge());
                var s = gettaburl(t.tab);
                (hasNeverAutologin(s, lp_gettld_url(s)) || hasNeverFormFill(s, lp_gettld_url(s)) || hasNeverGenerate(s, lp_gettld_url(s)) || hasNeverShowIcon(s, lp_gettld_url(s)) || hasNeverSave(s, lp_gettld_url(s))) && (handleGetNevers(r, s), closeclickables(r), g_popupform_active[r] = 0, recheckpage(!(g_popupform_active_choose[r] = 0)))
            } else if ("searchvault" == e.cmd) {
                var l;
                if (void 0 !== t.tab && void 0 !== g_datacache[t.tab.id] && lploggedin) a(l = do_searchvault(e.searchQuery, e.searchType, t.tab.id))
            } else if ("getpopupfilldata" == e.cmd) {
                var l;
                if (void 0 !== t.tab && void 0 !== g_datacache[t.tab.id] && lploggedin) a(l = do_getpopupfilldata(t.tab.id))
            } else if ("popupfillinputget" == e.cmd) {
                if (void 0 !== t.tab && lploggedin) {
                    var r = t.tab.id,
                        l;
                    (l = do_popupfillinputget(r)) && a(l)
                }
            } else if ("dosaveiframe" == e.cmd) {
                var l;
                if (void 0 !== t.tab && lploggedin) a(l = savesite_from_iframe(e, t.tab.id))
            } else if ("popupfillsaveget" == e.cmd) {
                if (void 0 !== t.tab && lploggedin) {
                    var l;
                    if ((l = g_popupfill_save_data).formdata2) {
                        var _ = new Array;
                        for (var c in g_sites)
                            if (check_ident_aid(c)) {
                                var g = g_sites[c].group;
                                "" == g || lp_in_array(g, _) || (_[_.length] = g)
                            } _.sort(function(e, t) {
                            return e.toLowerCase() < t.toLowerCase() ? -1 : 1
                        }), l.groups = _, void 0 !== e.url && (l.group = get_default_group(e.url))
                    }
                    a(l), g_popupfill_save_data = {}
                }
            } else if ("popupfillgetgenerateprefs" == e.cmd) {
                var r = t.tab.id,
                    l;
                a(l = do_popupfillgetgenerateprefs(r, e))
            } else if ("popupfillsetgenerateprefs" == e.cmd) {
                var r = t.tab.id;
                do_popupfillsetgenerateprefs(r, e)
            } else if ("savePassword" == e.cmd) {
                if (void 0 !== t.tab && lploggedin) {
                    var d = !1;
                    Checkpoint.assert(e.url === gettaburl(t.tab), sprintf("generate url mismatch %s != %s", e.url, gettaburl(t.tab))), savePassword(e.pass, gettaburl(t.tab), t.tab.id, !1, e.saveOptions)
                }
            } else "dopwchallenge" == e.cmd ? (g_popupfill_pw_challenge = null, security_prompt(function() {
                g_popupfill_pw_challenge = !0
            }, function() {
                g_popupfill_pw_challenge = !1
            }, !1)) : "getpwchallengeresult" == e.cmd ? (a(g_popupfill_pw_challenge), e.reset, (g_popupfill_pw_challenge = null) !== g_popupfill_pw_challenge && (g_popupfill_pw_challenge = null)) : "getcpwmsg" == e.cmd ? CPWbot_bg && a({
                msg: CPWbot_bg.get_last_overlay_message(),
                minimize_state: cpwbot_get_minimize_dialog_state()
            }) : no_persistent_messaging() && "connect" == e.cmd ? onconnect_listener({
                sender: t,
                name: e.name
            }) : receiveCS(t.tab.id, e, 0, {
                tab: t.tab,
                sender: t
            })
        }
    });
    void 0 !== chrome.runtime && void 0 !== chrome.runtime.onMessage ? chrome.runtime.onMessage.addListener(listener) : chrome.extension.onRequest.addListener(listener), chrome.runtime.onMessage.addListener(function(e, t, a) {
        "getTranslations" === e.action && a(lptranslations)
    })
}

function getShareType(e, t) {
    var a = get_record(e),
        r = "";
    return r = a && !0 === a.individualshare ? "individual" : a && a.sharefolderid ? "folder" : "none", t && "function" == typeof t && t(r), r
}

function disabletotp(e) {
    e = totp_tld_convert(e), void 0 === g_totp.domains && (g_totp.domains = {}), void 0 === g_totp.domains.disabled && (g_totp.domains.disabled = {}), g_totp.domains.disabled[e] = !0, g_local_accts_version++, rewritelocalfile(), lpMakeRequest(base_url + "totp.php", "token=" + encodeURIComponent(g_token) + "&disable=1&tld=" + encodeURIComponent(e), function() {})
}

function enabletotp(n, i, o, s) {
    n = totp_tld_convert(n), g_ask_totp[i] = null;
    var l = SHA256(g_usercache[n].trim().toLowerCase());
    lpMakeRequest(base_url + "totp.php", "token=" + encodeURIComponent(g_token) + "&enable=1&tld=" + encodeURIComponent(n) + "&usernamehash=" + encodeURIComponent(l), function(e) {
        if (4 == e.readyState && 200 == e.status && null != e.responseXML && null != e.responseXML.documentElement) {
            var t = e.responseXML.documentElement,
                a;
            if (void 0 === g_totp.domains && (g_totp.domains = {}), void 0 === g_totp.domains[n] && (g_totp.domains[n] = {}), g_totp.domains[n][l] = !0, g_local_accts_version++, rewritelocalfile(), 0 < t.getElementsByTagName("ok").length)
                if (o) o({
                    ok: !0
                });
                else {
                    var r = {
                        cmd: "enabletotp_response",
                        ok: !0
                    };
                    g_isfirefoxsdk ? s.emit("message", r) : sendCS(i, r, "all")
                }
            else if (o) o({
                ok: !1
            });
            else {
                var r = {
                    cmd: "enabletotp_response",
                    ok: !1
                };
                g_isfirefoxsdk ? s.emit("message", r) : sendCS(i, r, "all")
            }
        }
    })
}

function invitetotp(e, t) {
    lpMakeRequest(base_url + "totp.php", "token=" + encodeURIComponent(g_token) + "&invite=1&email=" + encodeURIComponent(e) + "&phone=" + encodeURIComponent(t), function() {})
}

function disconnectCS(e) {
    if (void 0 !== g_CS[e] && g_CS[e]) {
        for (var t in g_CS[e]) g_CS[e][t].disconnect(), g_CS[e][t] = null, delete_cs_for_docnum(e, t);
        g_CS_count[e] = 0, g_cpwbot && CPWbot_bg && (L("disconnect clear score [tabid:" + e + "]"), CPWbot_bg.reset_scores(e))
    }
}
var MAX_RETRY_SEND_CS = 5;

function sendCS(e, t, a, r) {
    if (g_issafari_appext) LPPlatform.sendLegacyContentScript(e, t, a);
    else if (void 0 === r || 0 == r ? r = 0 : 1 == r && (r = 1), debug && ("loadurl" == t.cmd ? L("BG -> CS[" + e + "] : initial " + t.cmd + " url:" + t.url) : "gotpopupfillinput" != t.cmd && L("BG -> CS[" + e + "] : initial " + t.cmd)), 0 < r && (void 0 !== t.cmd || L("BG -> CS[" + e + "] : retry=" + r)), "all" != e)
        if (void 0 !== g_CS[e] && g_CS[e]) {
            t.urlprefix = getchromeurl("", !0), t.lplanguage = get_lplanguage();
            var n = !0;
            for (var i in g_CS[e]) {
                if (void 0 === a || null == a) {
                    if (!n) continue;
                    n = !1
                } else if ("all" != a && a != i) continue;
                if (0 < get_killswitch_value(e, i)) {
                    var o = getcsinfo(e, i),
                        s = o ? o.url : "unknown";
                    if ("setdocnum" != t.cmd) {
                        write_history({
                            cmd: "info",
                            msg: sprintf("killswitch, ignoring %s to %s", t.cmd, s),
                            tabid: e,
                            docnum: i
                        }), is_human_initiated_action(t) && hasNeverEnableLP(s, lp_gettld_url(s)) && 60 < g_last_ui_warning - LPPerl.time() && (g_last_ui_warning = LPPerl.time(), alertfrombg("manual fill blocked due to never rule"));
                        continue
                    }
                }
                try {
                    g_ischrome ? no_persistent_messaging() ? chrome.tabs.sendMessage(e, t) : g_CS[e][i].postMessage(t) : g_issafari ? (t.docnum = i, g_CS[e][i].page.dispatchMessage("message", t), "loadurl" == t.cmd && delete g_CS[e][i]) : g_isfirefoxsdk && (t.docnum = i, t.messagetype = "message", g_CS[e][i].port.emit("lpmessage", t))
                } catch (e) {}
            }
        } else {
            if (r < 0) return;
            if (MAX_RETRY_SEND_CS <= r) return;
            var l;
            setTimeout(function() {
                sendCS(e, t, a, r + 1)
            }, 150 * r)
        }
    else
        for (var i in g_CS)
            for (var _ in g_CS[e]) try {
                debug && L("calling sendCS[" + i + "][" + _ + "] cmd=" + t.cmd), sendCS(i[_], t)
            } catch (e) {
                "saveall" == t.cmd && g_saveall_framestotal--
            }
}

function receiveCS(e, t, a, r) {
    if (a) {
        var n = g_CS[e] && g_CS[e].indexOf(r);
        return -1 < n && (g_CS[e][n] = null, --g_CS_count[e]), void((g_CS_count[e] <= 0 || punycode.URLToASCII(r.name) == gettaburl(r.sender.tab) && 0 === r.sender.frameId) && (g_CS[e] = null, delete_cs_for_tab(e), g_cpwbot && CPWbot_bg && (L("disconnect clear score [tabid:" + e + "]"), CPWbot_bg.reset_scores(e))))
    }
    void 0 !== t.cmd && processCS(e, t, r) || L("CS[" + e + "] -> BG : INVALIDMSG")
}
var g_safari_error_notifications = !0;

function sendTS(e, t) {
    if (!g_issafari || g_can_open_popover && g_safari_error_notifications) try {
        if ("notification" == e.cmd && "upgrade" != e.type && set_badge(e), "notification" != e.cmd || "upgrade" != e.type || g_isfirefoxsdk || g_issafari) return;
        var a = void 0 === t ? "all" : t,
            r = !1,
            n = chrome.extension.getViews();
        for (var i in n)
            if ("function" == typeof n[i].receiveBG && ("all" == a || void 0 !== n[i].g_toolstripid && a == n[i].g_toolstripid) && (L("BG -> TS : cmd=" + e.cmd), n[i].receiveBG(e), r = !0, "all" != a)) break;
        r || L("BG -> TS : FAILED")
    } catch (e) {
        L("BG -> TS : FAILED error=" + e)
    }
}

function set_badge(e) {
    g_issafari && "alert" != g_notification_type && "lpalert" != g_notification_type && "error" != g_notification_type && "mpwchange" != g_notification_type ? g_badgedata = null : (g_badgedata = e, currrotation = 0, animateFlip(), Topics.get(Topics.BADGE_NOTIFICATION).publish())
}
var lastbadgeurl = null;

function setbadgetext(e) {
    if (lastbadgeurl != e) {
        var t = lp_gettld_url(lastbadgeurl = e),
            a = reorderOnURL(getsites(t), e, !0, !1);
        0 < a.length ? set_badge_text(a.length) : clear_badge_text()
    }
}

function clear_badge() {
    currrotation = numrotations, g_notification_type = g_badgedata = null, drawIconAtRotation(0), Topics.get(Topics.BADGE_CLEAR).publish()
}

function set_badge_text(e) {
    g_issafari || do_experimental_popupfill && 0 != lpGetPref("showmatchingbadge", 1) && (LPPlatform.setBadgeText ? LPPlatform.setBadgeText(e) : ("string" != typeof e && (e = "" + e), lploggedin || (e = ""), g_isfirefoxsdk ? g_firefox_button && (g_firefox_button.badgeColor = "#555", g_firefox_button.badge = e) : (chrome.browserAction.setBadgeBackgroundColor({
        color: "#555"
    }), chrome.browserAction.setBadgeText({
        text: e
    }))))
}

function clear_badge_text() {
    LPPlatform.setBadgeText && LPPlatform.setBadgeText(""), g_issafari || g_iscasper || (g_isfirefoxsdk ? g_firefox_button && (g_firefox_button.badge = "") : g_ischrome && chrome.browserAction.setBadgeText({
        text: ""
    }))
}

function receiveTS(e, t) {
    if (void 0 === t.cmd) return L("TS[" + e + "] -> BG : INVALIDMSG"), null;
    switch (L("TS[" + e + "] -> BG : cmd=" + t.cmd), t.cmd) {
        case "getloginstate":
            lploggedin && sendTS({
                cmd: "login"
            }, e);
            break;
        case "sesameauth":
            sesame_auth(t.otp, t.label);
            break;
        case "yubikeyauth":
            yubikey_auth(t.otp, t.label);
            break;
        case "googleauthauth":
            googleauth_auth(t.otp, t.label);
            break;
        case "outofbandauth":
            outofband_auth(t.otp, t.label);
            break;
        case "settrustlabel":
            g_trustlabel = t.trustlabel;
            break;
        case "securityquestionauth":
            securityquestion_auth(t.otp, t.label);
            break;
        case "gridauth":
            grid_auth(t.gridvalues, t.label);
            break;
        case "multifactorauth":
            multifactor_auth(["multifactorresponse"], t.label);
            break;
        case "lostkey":
            lostkey();
            break;
        case "googleauthlostkey":
            googleauthlostkey();
            break;
        case "securityquestionlostkey":
            securityquestionlostkey();
            break;
        case "sesamelostkey":
            sesamelostkey();
            break;
        case "gridlostkey":
            gridlostkey();
            break;
        case "multifactorlostkey":
            multifactorlostkey(t.type);
            break;
        case "turnofficon":
            lpTurnOffIcon();
            break;
        case "of":
            of (t.a);
            break;
        default:
            return L("TS[" + g_toolstripid + "] -> BG : INVALIDMSG"), null
    }
}

function alertmpwchange(e) {
    g_notification_type = "mpwchange", set_badge(g_notification_data = e), drawIconAtRotation(0), g_isfirefoxsdk && setTimeout(function() {
        showFirefoxPanel()
    }, 0)
}

function omnikey_get_pin(e) {
    g_omnikey_callback = e, openURL(getchromeurl("omnikey.html"))
}

function processCS(r, n, e) {
    switch (void 0 !== n.url && (n.url = punycode.URLToASCII(n.url)), void 0 !== n.timestamp && update_cs_timestamp(r, n), n.cmd) {
        case "set_possiblemax":
            var t = (n.max, n.max);
            g_possiblemax_tuple = t < 0 || 100 < t ? [] : [r, t];
            break;
        case "rsadecrypt":
            if (lp_url_is_lastpass(n.url)) {
                var a = n.sharerpublickeyhex,
                    i = n.sharekeyenchexsig,
                    o = n.sharekeyenchex,
                    s = "",
                    l = "",
                    s = "";
                a && o ? (s = lprsa_rsadecrypt(o), sendCS(r, {
                    cmd: "rsadecrypt",
                    rc: l = null == s || "" == s ? "rsaerror" : "ok",
                    sharekeyhex: s
                })) : sendCS(r, {
                    cmd: "rsadecrypt",
                    rc: l = "rsaerror",
                    sharekeyhex: s
                })
            }
            break;
        case "rsaencryptmultiple":
            if (lp_url_is_lastpass(n.url)) {
                var _ = n.data,
                    l = "",
                    c = "";
                _ ? (c = lprsa_encryptmultiple(_), sendCS(r, {
                    cmd: "rsaencryptmultiple",
                    rc: l = null == c || "" == c ? "rsaerror" : "ok",
                    dataout: c
                })) : sendCS(r, {
                    cmd: "rsaencryptmultiple",
                    rc: l = "rsaerror",
                    dataout: c
                })
            }
            break;
        case "ipcgetdata":
        case "plug2web":
            if (lp_url_is_lastpass(n.url)) {
                if (g_protect_plug2web && g_plug2web_last_initiated < lp_get_gmt_timestamp() - g_plug2web_timeout) break;
                g_plug2web_last_initiated = 0;
                var g, d = (g = lpParseUri(n.url)).directory,
                    p = g.file;
                if ("" != (d = d.replace(new RegExp("^/~[^/]*"), "")) && "/" != d && "/sso/" != d && "/sso/webroot/" != d && "/sso/aso/" != d) {
                    lpdbg("error", "Keyplug2web request from invalid directory: " + d);
                    break
                }
                if ("" != (p = p.replace(new RegExp("#"), "")) && "index.php" != p && "misc_login.php" != p && "import.php" != p && "export.php" != p && "otp.php" != p && "frameset.php" != p && "frame_login.php" != p && "gettopost.php" != p && "misc_challenge.php" != p && "misc_challenge2.php" != p && "enterprise_users.php" != p && "acctsiframe.php" != p) {
                    lpdbg("error", "Keyplug2web request from invalid file: " + p);
                    break
                }
                if (null != g_username && "" != g_username)
                    if (n.username && "" != n.username && fix_username(n.username) != fix_username(g_username)) loggedOut(!1, "plug2webA");
                    else if ("ipcgetdata" == n.cmd) {
                    var u = {
                        cmd: "ipcgotdata",
                        username: g_username,
                        key: btoa(g_local_key),
                        version: lpversion,
                        identity: g_identity,
                        iterations: get_key_iterations(g_username)
                    };
                    void 0 !== n.callback ? n.callback(u) : sendCS(r, u, n.docnum)
                } else sendCS(r, {
                    cmd: "plug2web",
                    username: g_username,
                    key: AES.bin2hex(g_local_key),
                    version: lpversion,
                    identity: g_identity,
                    hash: g_local_hash,
                    g_cpwbot: g_cpwbot
                }, n.docnum), "gettopost.php" == p && unlock_plug2web()
            }
            break;
        case "openlogindialog":
            open_login();
            break;
        case "getversion":
            sendCS(r, {
                cmd: "getversion",
                version: lpversion,
                builddate: build_date,
                versionpre: lpversionpre,
                isloggedin: lploggedin ? 1 : 0
            }, n.docnum);
            break;
        case "setdefaultloginusername":
            set_default_login_username(n.username);
            break;
        case "getdebuginfo":
            var f = "";
            sendCS(r, {
                cmd: "getdebuginfo",
                info: ""
            }, n.docnum);
            break;
        case "web2plug":
            lp_url_is_lastpass(n.url) && web2plug(n);
            break;
        case "savesiteicon":
            g_popupfill_save_data = {}, savesiteicon_real(r, n);
            break;
        case "logout":
        case "logoff":
            lp_url_is_lastpass(n.url) && lploggedin && loggedOut(!1, "logoff");
            break;
        case "login":
            lp_url_is_lastpass(n.url) && loginfromwebsite(n);
            break;
        case "fill":
        case "autofillaid":
        case "autologinaid":
            void 0 !== n.docstate && update_cs_docstate(r, n), void 0 !== n.docflags && update_cs_docflags(r, n), "autofillaid" !== n.cmd && "autologinaid" !== n.cmd || (sendLpImprove("sitelogin", {
                copy: 0,
                shareType: getShareType(n.aid),
                autologin: 0,
                source: n.source
            }), n.source = "notrack"), n.topurl = g_ischrome ? gettaburl(e.sender.tab) : gettaburl(e.tab), handleFill(r, n);
            break;
        case "checkgenpwfillforms":
            lploggedin && checkgenpwfillforms(r, n.url, n.hasff);
            break;
        case "neverautofill":
        case "neverpage":
        case "neverdomain":
            var m = g_ischrome ? gettaburl(e.sender.tab) : gettaburl(e.tab),
                h, b;
            if (handleNever(r, n), void 0 !== n.fromsave)
                if (void 0 === n.frompopupiframe) g_persistent_notifications[r] = null, n.notificationdata = LPJSON.parse(n.notificationdata), lpAddRejectedSite(h = n.notificationdata.username, b = n.notificationdata.password, n.tld), clear_badge();
            (hasNeverAutologin(m, lp_gettld_url(m)) || hasNeverFormFill(m, lp_gettld_url(m)) || hasNeverGenerate(m, lp_gettld_url(m)) || hasNeverShowIcon(m, lp_gettld_url(m)) || hasNeverSave(m, lp_gettld_url(m))) && (handleGetNevers(r, m), closeclickables(r), g_popupform_active[r] = 0, recheckpage(!(g_popupform_active_choose[r] = 0)));
            break;
        case "clearnotification":
            clear_badge(), g_persistent_notifications[r] = null;
            break;
        case "notnow":
            var h, b;
            n.notificationdata = LPJSON.parse(n.notificationdata), lpAddRejectedSite(h = n.notificationdata.username, b = n.notificationdata.password, n.tld), g_persistent_notifications[r] = null, clear_badge();
            break;
        case "startsaveall":
            void 0 !== n.iframe && 1 == n.iframe && (g_ischrome && (g_popupfill_save_data = {
                close: 1
            }), g_issafari && (g_popupfill_save_data = {
                close: 1
            })), saveall();
            break;
        case "savethesite":
            var v = n.notificationdata;
            if (void 0 !== n.iframe && 1 == n.iframe && g_popup_tabid_save) {
                var y;
                if (g_popup_tab_docnum[r] != g_CS_tops[r])(y = g_ischrome ? gettaburl(e.sender.tab) : gettaburl(e.tab)) && 0 < y.length && (v.url = y);
                g_popupfill_save_data = v;
                break
            }
            if ("object" != typeof v && (v = LPJSON.parse(v)), void 0 !== v.formdata2 && parse_formdata(v), v.addsite = 1, shouldUseSaveAll(v.url)) g_saveall_url = v.url, g_saveall_done = !0, g_saveall_tabid = r, v.url.indexOf("streetscape.com") && (v.formdata = v.formdata.replace(/logon2/g, "logon1")), g_saveall_formdata = v.formdata, handleSaveAll(g_saveall_tabid, {
                cmd: "saveall",
                addsite: 1,
                url: g_saveall_url,
                formdata: g_saveall_formdata
            });
            else {
                var w = {
                    defaultData: {
                        url: v.url,
                        unencryptedUsername: v.username,
                        password: v.password,
                        basic_auth: void 0 === v.realm ? "0" : "1",
                        realm_data: v.realm || "",
                        formdata: v.formdata
                    },
                    saveOptions: {
                        saveFromSubmit: void 0 !== v.formdata,
                        checkForReplacement: !0,
                        source: "bar"
                    }
                };
                IntroTutorial.getState(function(e) {
                    e.enabled && e.tile && (w.saveOptions.source += e.tile), LPPlatform.openTabDialog(e.enabled ? "siteTutorial" : "site", w)
                })
            }
            g_persistent_notifications[r] = null, clear_badge();
            break;
        case "changepw":
            var v;
            void 0 === (v = n.notificationdata).sitecount && (v = LPJSON.parse(n.notificationdata));
            var k = 0;
            void 0 !== v.fromiframe && (k = v.fromiframe), g_didchangepw[SHA256(v.newpw + v.tld)] = (new Date).getTime();
            var x = getsites(v.tld, !0),
                P = "",
                S = 0,
                C = 0,
                O = 0;
            if ("" != v.oldpw && void 0 !== v.oldpw && null !== v.oldpw) {
                for (var I in x) {
                    var b;
                    C++, (b = getpasswordfromacct(g_sites[I])) != v.oldpw ? (S++, P += "," + I + ",") : O = I
                }
                C - S == 1 ? (v.singleaid = O, v.sitecount = 1) : C != S && (v.excludeid = P)
            }
            if (1 == v.sitecount) {
                var A = !0;
                for (var N in g_sites) N == v.singleaid && g_sites[N].pwprotect && (A = !1);
                if (!check_for_frame_mismatch_ok(r, k, gs("Are you sure you would like to change your LastPass password for this site?"), "replace password")) return;
                A ? changepw_wrapper(v) : security_prompt(function() {
                    changepw_wrapper(v)
                })
            } else {
                var A = !0,
                    R;
                for (R in x)
                    if (g_sites[R].pwprotect) {
                        A = !1;
                        break
                    } if (!check_for_frame_mismatch_ok(r, k, gs("Are you sure you would like to change your LastPass password for this site?"), "replace password(s)")) return;
                A ? openchangepw_wrapper(v) : security_prompt(function() {
                    openchangepw_wrapper(v)
                })
            }
            g_persistent_notifications[r] = null, clear_badge();
            break;
        case "save":
            var T = getcsinfo_top(r, n.docnum);
            T && n.docnum != T.docnum && (n.topdocurl = T.url), handleSave(r, n);
            break;
        case "saveall":
            void 0 === g_saveall_docnumsdone[n.docnum] && (g_saveall_docnumsdone[n.docnum] = 1, g_saveall_formdata += n.formdata, ++g_saveall_framesdone >= g_saveall_framestotal && finish_saveall());
            break;
        case "clearcache":
            lp_url_is_lastpass(n.url) && clearCache(!0, !1, !1);
            break;
        case "getimportdata":
            if (lp_url_is_lastpass(n.url)) {
                var g, d = (g = lpParseUri(n.url)).directory,
                    p = g.file;
                if ("" != (d = d.replace(new RegExp("^/~[^/]*"), "")) && "/" != d && "/sso/" != d) break;
                if ("import.php" != p) break;
                var E = AES.ok(lpimportdata);
                sendCS(r, {
                    cmd: "gotimportdata",
                    source: lpimportsource,
                    data: E ? lpimportdata : btoa(AES._utf8_encode(lpimportdata)),
                    b64: E ? "0" : "1"
                }), lpimportsource = lpimportdata = ""
            }
            break;
        case "initmpw":
            g_lp_mpw_user = localStorage.LPMPU, g_lp_iterations = localStorage[g_lp_mpw_user + "_key_iter"], unprotect_data(localStorage[g_lp_mpw_user + "LPMPS"], !0, function(e) {
                "" === e && "" !== localStorage[g_lp_mpw_user + "LPMPS"] && (e = localStorage[g_lp_mpw_user + "LPMPS"]), g_lp_mpw_salt = e
            }), unprotect_data(localStorage[g_lp_mpw_user + "LPMPH"], !0, function(e) {
                "" === e && "" !== localStorage[g_lp_mpw_user + "LPMPH"] && (e = localStorage[g_lp_mpw_user + "LPMPH"]), g_lp_mpw_hash = e
            }), unprotect_data(localStorage[g_lp_mpw_user + "LPMPD"], !0, function(e) {
                g_lp_mpw_uid = e
            }), unprotect_data(localStorage[g_lp_mpw_user + "LPMEX"], !0, function(e) {
                try {
                    g_lp_mpw_exclude = JSON.parse(e)
                } catch (e) {
                    g_lp_mpw_exclude = null
                }
                null === g_lp_mpw_exclude && (g_lp_mpw_exclude = {})
            }), unprotect_data(localStorage[g_lp_mpw_user + "LPMDD"], !0, function(e) {
                try {
                    g_lp_mpw_dedupe = JSON.parse(e)
                } catch (e) {
                    g_lp_mpw_dedupe = null
                }
                null === g_lp_mpw_dedupe && (g_lp_mpw_dedupe = {})
            }), g_lp_mpw_nonag = 1 == localStorage[g_lp_mpw_user + "LPMNN"];
            break;
        case "chkmpw":
            !lp_url_is_lastpass(n.url) && "undefined" != typeof g_lp_iterations && g_username && make_lp_key_hash_iterations(g_lp_mpw_salt, n.pw, g_lp_iterations, function(e, t) {
                if (t == g_lp_mpw_hash) {
                    if (g_lp_mpw_bad_url = lp_gettld_url(n.url), requirechangereuse() || !g_lp_mpw_nonag && !(g_lp_mpw_bad_url in g_lp_mpw_exclude) && !hasNeverMPReuse(n.url, lp_gettld_url(n.url))) {
                        g_requirechangereuse = requirechangereuse();
                        var a = {
                            cmd: "notification",
                            tld: g_lp_mpw_bad_url,
                            type: "mpwchange"
                        };
                        g_requirechangereuse && (setTimeout(function() {
                            loggedOut()
                        }, 1e3), a.msg = gs("Security Alert: This site has the same password as your LastPass account. To protect all of your online accounts, you have been logged off from LastPass, and you will be required to change your LastPass Master Password next time you login.")), alertmpwchange(a)
                    }!g_enterpriseuser || !lploggedin || !requirechangereuse() && g_lp_mpw_bad_url in g_lp_mpw_dedupe || (logmpwreuse(g_lp_mpw_bad_url), g_lp_mpw_dedupe[g_lp_mpw_bad_url] = 1, localStorage_setItem(g_lp_mpw_user + "LPMDD", JSON.stringify(g_lp_mpw_dedupe)))
                }
            });
            break;
        case "recover":
            lp_url_is_lastpass(n.url) && (g_is_recovery_login = !0, recover(r, n.url, n.username, n.docnum));
            break;
        case "launchautologin":
            lp_url_is_lastpass(n.url) && launchautologin(n.aid);
            break;
        case "setformfillsactivetab":
            void 0 !== r && addFormfillTab(r);
            break;
        case "getprefs":
            g_username_vals[n.url] = n.username_val, void 0 !== n.docstate && update_cs_docstate(r, n), void 0 !== n.docflags && update_cs_docflags(r, n);
            var W = {};
            if (void 0 !== n.actionlastparts)
                for (var U = 0; U < n.actionlastparts.length; U++) void 0 !== lp_all_tlds[n.actionlastparts[U]] && (W[n.actionlastparts[U]] = lp_all_tlds[n.actionlastparts[U]]);
            setprefs(r, n.docnum, n.url, W);
            break;
        case "getuuid":
            getuuid(function(e) {
                sendCS(r, {
                    cmd: "setuuid",
                    uuid: e
                }, n.docnum)
            }, n.username && "" != n.username ? SHA256(n.username) : null);
            break;
        case "setuuid":
            setuuid(n.uuid, n.username && "" != n.username ? SHA256(n.username) : null);
            break;
        case "clearuuid":
            clearuuid(n.username && "" != n.username ? SHA256(n.username) : null);
            break;
        case "setupmultifactor":
            if (n.tabid = r, n.username == g_username) {
                var D = "type=" + LP.en(n.type) + "&username=" + LP.en(n.username);
                lpMakeRequest(base_url + "setupmultifactor.php", D, lpSetupMultifactorResponse, function() {
                    lpSetupMultifactorError(n)
                }, n)
            } else sendCS(r, {
                cmd: "setupmultifactor",
                result: "error"
            }, n.docnum);
            break;
        case "setupsinglefactor":
            if (lpdbg("singlefactor", "setting up single factor"), n.tabid = r, n.username == g_username || "1" == n.silent) {
                var D = "type=" + LP.en(n.type) + "&username=" + LP.en(n.username),
                    M = !0,
                    G = function() {
                        if (lpdbg("singlefactor", "make_request_if: " + M), M) lpdbg("singlefactor", "making request"), lpMakeRequest(base_url + "setupmultifactor.php", D, lpSetupMultifactorResponse, function() {
                            lpSetupMultifactorError(n)
                        }, n);
                        else if ("1" != n.silent) {
                            var e = {
                                cmd: "setupsinglefactor",
                                result: "error"
                            };
                            void 0 !== n.callback ? n.callback(e) : sendCS(r, e, n.docnum)
                        }
                    };
                "omnikey" == n.type ? omnikey_get_pin(function(e) {
                    var t = "",
                        a = function() {
                            "" == t ? M = !1 : D += "&secret=" + encodeURIComponent(t), G()
                        };
                    have_binary_function("omnikey_get_public_key") ? call_binary_function("omnikey_get_public_key", e, function(e) {
                        t = e, a()
                    }) : a()
                }) : G()
            } else if ("1" != n.silent) {
                var u = {
                    cmd: "setupsinglefactor",
                    result: "error"
                };
                void 0 !== n.callback ? n.callback(u) : sendCS(r, u, n.docnum)
            }
            break;
        case "checkmultifactorsupport":
            var F = "",
                J = "error",
                q = function() {
                    var e = {
                        cmd: "checkmultifactorsupport",
                        type: F,
                        result: J
                    };
                    void 0 !== n.callback ? n.callback(e) : sendCS(r, e, n.docnum)
                };
            if (have_binary()) {
                var H = new Array;
                call_binary_function_if("nymi_supported", function(e) {
                    e && (H[H.length] = "nymi"), call_binary_function_if("omnikey_supported", function(e) {
                        e && (H[H.length] = "omnikey"), call_binary_function_if("winbio_supported", function(e) {
                            e && (H[H.length] = "winbio"), 0 < H.length && (F = H.join(), J = "done"), q()
                        })
                    })
                })
            } else(g_is_win || g_is_mac || g_is_linux) && (F = g_do_native_messaging && !g_have_native_messaging_permission && supports_native_messaging() ? "needs_native_messaging" : "nobinary"), q();
            break;
        case "verifymultifactor":
            var F;
            "winbio" == (F = n.eventdata1) ? have_binary_function("winbio_verify_user") && call_binary_function("winbio_verify_user", "", gs("Swipe finger"), gs("Swipe your finger on the fingerprint sensor"), gs("Cancel"), function(e) {
                sendCS(r, {
                    cmd: "verifymultifactor",
                    eventdata3: enc(e),
                    eventdata2: "done"
                }, e.docnum)
            }): "nymi" == F && have_binary_function("nymi_validate") && call_binary_function("nymi_validate", function(e) {
                sendCS(r, {
                    cmd: "verifymultifactor",
                    eventdata3: enc(e),
                    eventdata2: "done"
                }, e.docnum)
            });
            break;
        case "multifactorauth":
            var B = "",
                q = function() {
                    var e;
                    sendCS(r, {
                        cmd: "multifactorauth",
                        multifactorresponse: B,
                        result: "" != B ? "done" : "error"
                    }, n.docnum)
                };
            if ("trueapi" == n.type) {
                var V = SHA256(SHA256(fix_username(n.username) + n.type));
                if (64 != V.length && have_binary_function("trueapi_get_hash")) return void call_binary_function("trueapi_get_hash", n.username, function(e) {
                    "" != (V = e) && (B = SHA256(V + n.challenge)), q()
                });
                "" != V && (B = SHA256(V + n.challenge)), q()
            } else "omnikey" == n.type && omnikey_get_pin(function(e) {
                have_binary_function("omnikey_decrypt") ? call_binary_function("omnikey_decrypt", n.challenge, e, function(e) {
                    B = e, q()
                }) : q()
            });
            break;
        case "multifactorreprompt":
            var j, z;
            security_prompt(function() {
                sendCS(r, {
                    cmd: "multifactorauth",
                    result: "done"
                }, n.docnum)
            }, function() {
                sendCS(r, {
                    cmd: "multifactorauth",
                    result: "error"
                }, n.docnum)
            });
            break;
        case "refresh":
            lp_url_is_lastpass(n.url) && ("settings" == n.from ? lplogincheck("2" == n.type ? "websiterefreshrsa" : "websiterefresh") : get_accts());
            break;
        case "switchidentity":
            lp_url_is_lastpass(n.url) && switch_identity(n.iid, !0, !0);
            break;
        case "fillfieldconfirm":
            if (n.topurl = g_ischrome ? gettaburl(e.sender.tab) : gettaburl(e.tab), write_history({
                    cmd: "fillfieldconfirm",
                    tabid: r,
                    url: n.url,
                    aid: n.aid,
                    result: n.result,
                    docnum: n.docnum,
                    manualfill: n.manualfill,
                    allowforce: n.allowforce,
                    name: n.name,
                    force_fillbest: n.force_fillbest
                }), fillfieldsconfirm(n), "FILL_F4" === n.originator && n.result && LPTabState.setLastFillSource("Autofill"), !0 === n.manualfill && 1 === n.from_iframe && LPTabState.setLastFillSource("Infield"), !0 === n.manualfill && "Icon Dropdown" === n.originator && LPTabState.setLastFillSource("Icon Dropdown"), !1 === n.manualfill && "FILL_F3" === n.originator && LPTabState.setLastFillSource("Vault"), !0 === n.manualfill && 1 !== n.from_iframe && "autofillaid" === n.originator && LPTabState.setLastFillSource("Context Menu"), g_launch_site_tracking_enabled && n.result) {
                var Y = get_record(n.aid);
                SiteLaunchObserver.startFillTracking(r, Y)
            }
            break;
        case "deleteaid":
            var k = void 0 !== n.fromiframe && n.fromiframe ? 1 : 0;
            deleteAid(n.aid, null, !1, !0, function() {
                recheckpage(!0)
            }, null, k, r);
            break;
        case "savenotificationhtml":
            if (void 0 === g_datacache[r]) g_datacache[r] = {
                html: n.text,
                extra: n.extra
            };
            else {
                var K = "";
                null != r && null != g_popupfill_hint[r] && null != g_popupfill_last_active[r] && null != g_popupfill_hint[r][g_popupfill_last_active[r]] && (K = g_popupfill_hint[r][g_popupfill_last_active[r]]), g_datacache[r] = {
                    html: n.text,
                    extra: n.extra,
                    popuphtml: g_datacache[r].popuphtml,
                    url: g_datacache[r].url,
                    rowtype: K
                }, g_popupforminput[r] = [], g_popupform_active[r] = 0, g_popupform_active_choose[r] = 0
            }
            break;
        case "savepopupfillhtml":
            var y = g_ischrome ? gettaburl(e.sender.tab) : gettaburl(e.tab);
            void 0 === g_datacache[r] ? g_datacache[r] = {
                popuphtml: n.text,
                url: y,
                rowtype: n.rowtype
            } : g_datacache[r] = {
                html: g_datacache[r].html,
                extra: g_datacache[r].extra,
                popuphtml: n.text,
                url: y,
                rowtype: n.rowtype
            }, g_popupforminput[r] = [], g_popupform_active[r] = 0, g_popupform_active_choose[r] = 0;
            break;
        case "rebuildcontext":
            LPContextMenus.rebuildcontext(n.url);
            break;
        case "setbadgetext":
            setbadgetext(n.url);
            break;
        case "runhotkey":
            if (g_isfirefoxsdk) {
                var X = getcurrenturl();
                if (ischromeurl(X) && -1 != X.indexOf("prefs.html") || g_firefox_html_panel && g_firefox_html_panel.isShowing && ischromeurl(g_firefox_html_panel.url) && -1 != g_firefox_html_panel.url.indexOf("prefs.html")) return
            }
            switch (n.hotkey) {
                case "generateHk":
                    LPTabState.setLastFillSource("HotKey"), opengenpw("hotkey");
                    break;
                case "recheckHk":
                    recheckpage();
                    break;
                case "searchHk":
                    opensearch();
                    break;
                case "nextHk":
                    LPTabState.setLastFillSource("HotKey"), fillnext(1);
                    break;
                case "prevHk":
                    LPTabState.setLastFillSource("HotKey"), fillnext(-1);
                    break;
                case "homeHk":
                    openvault();
                    break;
                case "submitHk":
                    fillnext(0, !0);
                    break;
                case "saveallHk":
                    saveall();
                    break;
                case "logoffHk":
                    loggedOut(!1, "hotkey");
                    break;
                case "defaultffidHk":
                    LPTabState.setLastFillSource("HotKey"), fill_default_ffid("hotkey");
                    break;
                case "openpopoverHk":
                    buttonclick()
            }
            break;
        case "reporterror":
            lpReportError(n.e, "");
            break;
        case "recheckpage":
            recheckpage(!0);
            break;
        case "copyusername":
            var k = void 0 !== n.fromiframe && n.fromiframe ? 1 : 0;
            copyusername(n.aid, k, r);
            break;
        case "copypassword":
            var k = void 0 !== n.fromiframe && n.fromiframe ? 1 : 0;
            copypassword(n.aid, null, k, r), sendLpImprove("copypass", {
                action: "sitepassword",
                source: n.source
            });
            break;
        case "copyurl":
            var k = void 0 !== n.fromiframe && n.fromiframe ? 1 : 0;
            copyurl(n.aid, k, r);
            break;
        case "editprofile":
            var $ = void 0 !== n.source && n.source ? n.source : "vault";
            editprofile(n.ffid, null, $);
            break;
        case "fillformffid":
            if (void 0 !== n.fromiframe) var Z = n.fromiframe;
            else var Z = 0;
            var Q = null;
            if (Z && !frame_and_topdoc_has_same_domain(r)) {
                if (ftd_report_error(r, "fillform"), !lpConfirmYesNo(gs("Are you sure you would like your LastPass Form Fill information to be filled into the following site?") + "\n\n" + lp_gettld_url(ftd_get_frameparenturl(r)))) return !1;
                Q = !0
            }
            var $ = void 0 !== n.source && n.source ? n.source : "vault";
            fillform(n.ffid, null, null, null, Z, Q, $);
            break;
        case "addprofile":
            var $;
            addprofile(null, $ = void 0 !== n.source && n.source ? n.source : "vault");
            break;
        case "addcreditcard":
            var $;
            addcreditcard(null, $ = void 0 !== n.source && n.source ? n.source : "vault");
            break;
        case "clearforms":
            var $;
            clearforms($ = void 0 !== n.source && n.source ? n.source : "vault");
            break;
        case "chooseprofilecc":
            var $;
            openchooseprofilecc($ = void 0 !== n.source && n.source ? n.source : "vault");
            break;
        case "generate":
            opengenpw();
            break;
        case "fillcurrentaid":
            fillcurrent(n.aid);
            break;
        case "generatepasswordfound":
            g_checkgeneratepasswordcallback && (g_checkgeneratepasswordcallback(), g_checkgeneratepasswordcallback = null);
            break;
        case "log":
            console_log(n.msg);
            break;
        case "disablebtn":
            var ee = "string" == typeof n.notificationdata ? JSON.parse(n.notificationdata) : n.notificationdata;
            openURL(base_url + ee.multifactor_disable_url);
            break;
        case "createaccountbtn":
            g_hidecreate || LPPlatform.openTabDialog("createAccountSimple");
            break;
        case "tryagainbtn":
            open_login();
            break;
        case "custombtn":
            openURL(LPJSON.parse(n.notificationdata).customaction);
            break;
        case "feedbackbtn":
            openfeedback();
            break;
        case "starttrialbtn":
            start_trial();
            break;
        case "basicauthneverbtn":
            lpPutUserPref("basicauthnever", "1"), lpWriteAllPrefs();
            break;
        case "basicauthmoreinfobtn":
            have_binary() ? openURL(base_url + "chromebasicauth.php") : install_binary(!1, !0);
            break;
        case "gohome":
            var te = "";
            if (void 0 !== n.cmd2 && (te = "?cmd=" + encodeURIComponent(n.cmd2)), void 0 !== n.cmdparams && 0 < n.cmdparams.length && (te += "&" + n.cmdparams), g_isedge) {
                var ae = (new Date).getTime();
                ("undefined" == typeof g_last_gohome || 1e3 < ae - g_last_gohome) && (g_last_gohome = ae, openURL(getchromeurl(VAULT_PAGE + te), function() {
                    chrome.tabs.remove(r)
                }))
            } else g_ischrome ? chrome.tabs.update(r, {
                url: getchromeurl(VAULT_PAGE + te)
            }) : (g_issafari || g_isfirefoxsdk) && (e.tab.url = getchromeurl(VAULT_PAGE + te));
            if ("" != n.email && "" != n.sesameotp) {
                lplog("LOGGING OFF : gohome"), lplogoff(!1, "gohome"), sesame_setotp(n.sesameotp);
                var re = {
                    sesameusername: n.email
                };
                LPPlatform.openTabDialog("loginSimple", re)
            }
            break;
        case "checkattach":
            have_binary_function("choose_file") && sendCS(r, {
                cmd: "canattach"
            }, n.docnum);
            break;
        case "getattach":
            addAttach(function() {
                var t = {};
                if (addattachcb(t), void 0 !== t.mimetype) {
                    var a = enccbc(t.filename, AES.hex2bin(n.attachkey));
                    enccbc(t.bytes, AES.hex2bin(n.attachkey), function(e) {
                        sendCS(r, {
                            cmd: "gotattach",
                            mimetype: t.mimetype,
                            bytes: t.bytes,
                            filename: a,
                            encbytes: e
                        }, n.docnum)
                    })
                }
            });
            break;
        case "openattach":
            openAttach(null, null, null, n.attachkey, n.data, n.mimetype);
            break;
        case "saveattach":
            exportAttachment(null, null, null, n.attachkey, n.data, n.mimetype);
            break;
        case "lpshownotificationtop":
            sendCS(r, {
                cmd: "lpshownotification",
                type: n.type,
                data: n.data,
                do_40notify: g_40notify
            }, "all");
            break;
        case "getpopupfillsites":
            do_getpopupfillsites(r, n);
            break;
        case "setpopupfilllastactive":
            do_setpopupfilllastactive(r, n);
            break;
        case "addnevercrossdomain":
            lplog("XDOMAIN:Adding addnevercrossdomain url=" + n.url);
            var m = lpcanonizeUrl(n.url),
                D = "url=" + en(AES.url2hex(m));
            D += "&type=3", g_neverurls.neverautologins.push(m), lpMakeRequest(base_url + "add_never.php", D, null, null), g_local_accts_version++, rewritelocalfile();
            break;
        case "deletenevercrossdomain":
            var m;
            "https://" == (m = n.url).substring(0, 8) ? m = m.substring(8) : "http://" == m.substring(0, 7) && (m = m.substring(7)), lplog("XDOMAIN:Deleting addnevercrossdomain url=" + m);
            var ne = new Array;
            ne.type = "neverautologins", ne.url = m, deleteNever(ne, !0);
            break;
        case "setpopupfillhint":
            do_setpopupfillhint(r, n);
            break;
        case "getisadmin":
            sendCS(r, {
                cmd: "gotisadmin",
                isadmin: g_isadmin
            }, n.docnum);
            break;
        case "getloggedin":
            sendCS(r, {
                cmd: "gotloggedin",
                lploggedin: lploggedin
            }, n.docnum);
            break;
        case "popupfillinputsave":
            do_popupfillinputsave(r, n);
            break;
        case "popupregister":
            do_popupregister(r, n);
            break;
        case "getnevers":
            handleGetNevers(r, n.url);
            break;
        case "popupfillresize":
            doPopupResize(r, n.width, n.height);
            break;
        case "popupfilliconnumber":
            var ie, oe;
            null == n && (oe = ie = -1), ie = null == n.sitenumber ? -1 : parseInt(n.sitenumber), oe = null == n.formfillsnumber ? -1 : parseInt(n.formfillsnumber), doPopupIconHint(r, ie, oe);
            break;
        case "popupfillinputfocusdecrement":
            do_popupfillinputfocusdecrement(r, n);
            break;
        case "popupfillinputfocusincrement":
            do_popupfillinputfocusincrement(r, n);
            break;
        case "popupfillinputfocuschoose":
            do_popupfillinputfocuschoose(r, n);
            break;
        case "popupfillinputmoreopen":
            do_popupfillinputmoreopen(r, n);
            break;
        case "popupfillinputshownavbar":
            do_popupfillinputshownavbar(r, n);
            break;
        case "lpimprove":
            sendLpImprove(n.event, n.properties);
            break;
        case "editaid":
            editAid(n.aid);
            break;
        case "openchooseprofilecc":
            var $;
            openchooseprofilecc($ = void 0 !== n.source && n.source ? n.source : "vault");
            break;
        case "iframescrollenable":
            do_iframescrollenable(r);
            break;
        case "dologinaction":
            lploggedin || open_login();
            break;
        case "deleteformfill":
            var k = void 0 !== n.fromiframe && n.fromiframe ? 1 : 0,
                $ = void 0 !== n.source && n.source ? n.source : "vault";
            deleteformfill(n.ffid, null, k, r, null, null, $);
            break;
        case "setboolpref":
            n.includeuser ? lpPutUserPref(n.name, n.value) : lpPutGblPref(n.name, n.value), lpWriteAllPrefs();
            break;
        case "request_native_messaging":
            openURL(getchromeurl("native_messaging.html?hidenever=1"));
            break;
        case "checkduo":
            void 0 !== n.uuid && n.uuid && "" != n.uuid && setuuid(n.uuid, g_username_hash), closecurrenttab("duo.php"), outofband_auth("checkduo" + encodeURIComponent(n.code), "");
            break;
        case "closepopuptoplevel":
            closepopuptoplevel_handler(r, n);
            break;
        case "createpopuptoplevelfromframe":
            createpopuptoplevel_handler(r, n);
            break;
        case "cpwbot_click_ack":
            g_cpwbot && CPWbot_bg && CPWbot_bg.push_event_queue("click_ack", r, n);
            break;
        case "cpwbot_fill_ack":
            g_cpwbot && CPWbot_bg && CPWbot_bg.push_event_queue("fill_ack", r, n);
            break;
        case "cpwbot_finish_ack":
            g_cpwbot && CPWbot_bg && (!g_v2engine || CPWbot_bg.in_bagration() || CPWbot_bg.get_okstate() || CPWbot_bg.get_failstate() ? CPWbot_bg.cpwbot_finish_ack_handler(r, n) : CPWbot_bg.push_event_queue("finish_ack", r, n));
            break;
        case "cpwbot_validate_state_result":
            g_cpwbot && CPWbot_bg && CPWbot_bg.push_event_queue("validate_response", r, n);
            break;
        case "ping_ack":
            ping_ack_handler(r, n);
            break;
        case "got_inner_text":
            got_inner_text_handler(r, n);
            break;
        case "got_inner_html":
            got_inner_html_handler(r, n);
            break;
        case "CS_unload":
            var se = n.docnum,
                m = n.url,
                le = n.docstate;
            write_history({
                cmd: "CS_unload",
                docnum: se,
                tabid: r,
                docstate: le
            }), L("received CS_unload from [tabid:" + r + "][docnum:" + se + "] docstate=" + le + " url=" + m), null === se && (se = find_docnum_for_tabid_by_url(r, m), L("CS_unload guessing assigned docnum to " + m + " is " + se), n.docnum = se), delete_cs_for_docnum(r, se), g_cpwbot && CPWbot_bg && (L("CS_unload clear score [tabid:" + r + "][docnum:" + se + "]"), CPWbot_bg.clear_frame_score(r, se, null), CPWbot_bg.push_event_queue("unload", r, n)), g_CS_tops && g_CS_tops[r] === se && clear_popup_heartbeat(r);
            break;
        case "cpwbot_js_ack":
            g_cpwbot && CPWbot_bg && (CPWbot_bg.js_ack_handler(r, n), CPWbot_bg.push_event_queue("js_ack", r, n));
            break;
        case "minimize_cpw_dialog":
            g_cpwbot && CPWbot_bg && (CPWbot_bg.cpw_dialog_minimize_state = 1);
            break;
        case "maximize_cpw_dialog":
            g_cpwbot && CPWbot_bg && (CPWbot_bg.cpw_dialog_minimize_state = 0);
            break;
        case "copytoclipboard":
            void 0 !== n.g_data && copytoclipboard(n.g_data), n.action && sendLpImprove("copypass", {
                action: n.action,
                source: n.source
            });
            break;
        case "debug_checkpoint":
            debug_checkpoint_handler(r, n);
            break;
        case "support_pwchg":
            if (!lploggedin) return !1;
            sendCS(r, {
                cmd: "support_pwchg",
                support: g_cpwbot,
                answer_loc: n.answer_location
            }, g_CS_tops[r]);
            break;
        case "support_pwchg_batch":
            if (!lploggedin) return !1;
            sendCS(r, {
                cmd: "support_pwchg_batch",
                support: g_cpwbot_batch,
                answer_loc: n.answer_location
            }, g_CS_tops[r]);
            break;
        case "auto_pwchg":
            if (!lploggedin) return !1;
            g_cpwbot && lp_url_is_lastpass(n.url) && (g_cpw_server_initiated_tabid = r, n.keep_in_frame ? start_pwchange_from_server(r, n.aid) : editAid(n.aid, null, !1, 1));
            break;
        case "auto_pwchg_batch_alive":
            if (!lploggedin) return !1;
            if ("undefined" == typeof g_batchpagealive) return;
            g_batchpagealive = !0;
            break;
        case "auto_pwchg_batch":
            if (!lploggedin) return !1;
            g_cpwfast = !0;
            var _e = 1;
            if (g_cpwbot && lp_url_is_lastpass(n.url)) {
                if (CPWbatch = CPWbatch || new CPWbatch_lib, n.n) {
                    var ce = n.n,
                        ge = parseInt(ce);
                    isNaN(ge) || (CPWbatch.m_max_workers = ge)
                }
                var de = {},
                    pe;
                try {
                    de = JSON.parse(n.aids)
                } catch (e) {
                    de = {}, console.error("JSON error, auto_pwchg_batch: " + e)
                }
                for (pe in de) de.hasOwnProperty(pe) && CPWbatch.cpw_queue_push(de[pe]);
                g_cpw_server_initiated_tabid = r, n.keep_in_frame && CPWbatch.cpw_batch_begin()
            }
            break;
        case "kill_batch_background":
            if (!lploggedin) return !1;
            CPWbatch && CPWbatch.cpw_batch_end();
            break;
        case "auto_pwchg_hide":
            if (!lploggedin) return !1;
            g_cpwbot && CPWbatch && (end_pwchange_from_server(r, n.aid), CPWbatch.cpw_get_batchjob_state() && CPWbatch.cpw_batch_end());
            break;
        case "auto_pwchg_status_update_ack":
            if (!lploggedin) return !1;
            g_cpwbot && CPWbatch && CPWbatch.cpw_set_status_update_ack();
            break;
        case "clear_popup_heartbeat":
            clear_popup_heartbeat(r);
            break;
        case "got_generate_pattern":
            var ue = n.pattern_cooked,
                fe = n.desc_cooked,
                me = "",
                he = "";
            ue && (me = JSON.parse(ue)), fe && (he = JSON.parse(fe)), g_generate_pw_pattern_hints[r] = {
                pattern: me,
                desc: he
            };
            break;
        case "get_browser_history_tlds":
            get_browser_history_tlds(function(e) {
                sendCS(r, {
                    cmd: "got_browser_history_tlds",
                    tlds: e.join()
                }, g_CS_tops[r])
            });
            break;
        case "starttrial":
            start_trial() && sendCS(r, {
                cmd: "trialstarted"
            }, g_CS_tops[r]);
            break;
        case "from_selenium":
            if (g_cpwbot && (!g_is_selenium && CPWbot_bg && CPWbot_bg.userlog(0, "Detected Selenium"), write_history({
                    cmd: "SELENIUM",
                    tabid: r,
                    docnum: n.docnum,
                    url: n.url,
                    docstate: n.docstate,
                    msg: "Selenium Bits: " + pe
                }), g_is_selenium = !0, void 0 !== n.bits)) {
                var pe = parseInt(n.bits);
                isNaN(pe) || (g_selenium_bits != pe && CPWbot_bg.userlog(0, "Selenium Bits: " + pe), g_selenium_bits = pe)
            }
            break;
        case "resizeIframe":
        case "moveIframe":
            r && (void 0 !== g_iframe_hack_src[r] ? sendCS(r, n, g_CS_tops[r]) : sendCS(r, n, "all"));
            break;
        case "get_plugin_capabilities":
            get_plugin_capabilities_handler(r);
            break;
        case "get_frame_loc":
            break;
        case "iframe_close_request":
            iframe_close_request_handler(r, n);
            break;
        case "savesite_dialog_changed":
            savesite_dialog_changed_handler(r, n);
            break;
        case "get_totp":
            get_totp(n.tld, r, null, n.name, n.id, n.className);
            break;
        case "usercacheset":
            g_usercache[n.tld] = n.username;
            break;
        case "ask_totp":
            g_ask_totp[r] = n.tld;
            break;
        case "storeaccountlinktoken":
            storeAccountLinkToken(n.token);
            break;
        default:
            return L("CS[" + r + "] -> BG : INVALIDMSG"), !1
    }
    return !0
}
var g_last_get_totp = {};

function get_totp(i, o, s, l, _, c) {
    if (void 0 !== g_usercache[i])
        if (!s && void 0 !== g_last_get_totp[i] && (new Date).getTime() - g_last_get_totp[i] < 25e3) lpReportError("skipped totp2push for domain=" + i + " because we already did it within the past 25 seconds");
        else {
            g_last_get_totp[i] = (new Date).getTime();
            var e = "tld=" + encodeURIComponent(i) + "&usernamehash=" + encodeURIComponent(SHA256(g_usercache[i].trim().toLowerCase())) + "&token=" + encodeURIComponent(g_token);
            s && (e += "&api_token=" + encodeURIComponent(s)), l && (e += "&name=" + encodeURIComponent(l)), _ && (e += "&id=" + encodeURIComponent(_)), c && (e += "&className=" + encodeURIComponent(c)), lpMakeRequest(base_url + "get_totp.php", e, function(e) {
                if (4 == e.readyState && 200 == e.status && null != e.responseXML && null != e.responseXML.documentElement) {
                    var t = e.responseXML.documentElement.getElementsByTagName("ok");
                    if (0 < t.length) {
                        var a = t[0].getAttribute("status");
                        if ("allowed" == a) {
                            var r = t[0].getAttribute("totp_code");
                            0, sendCS(o, {
                                cmd: "got_totp",
                                tld: i,
                                totp_code: r
                            })
                        } else if ("poll" == a) {
                            if (!s) {
                                var n = !1;
                                void 0 !== g_totp.domains && void 0 !== g_totp.domains.disabled && void 0 !== g_totp.domains.disabled.all && g_totp.domains.disabled.all ? n = !0 : void 0 !== g_totp.domains && void 0 !== g_totp.domains.disabled && void 0 !== g_totp.domains.disabled[i] && g_totp.domains.disabled[i] && (n = !0), n || sendCS(o, {
                                    cmd: "getting_totp",
                                    tld: i
                                })
                            }
                            get_totp(i, o, t[0].getAttribute("token"), l, _, c)
                        } else "declined" == a && (s || sendCS(o, {
                            cmd: "set_totp_form",
                            tld: i
                        }))
                    }
                }
            }, function() {})
        }
}

function open_login(o, t) {
    getsinglefactortype(function(i) {
        if (t || "trueapi" != i || !have_binary_function("trueapi_default_login_exists"))
            if (t || !LPISUPEK && "vtapi" != i || !have_binary_function("lpvt_verify_user"))
                if (t || "validity" != i || !have_binary_function("validity_verify_user"))
                    if (t || "winbio" != i || !have_binary_function("winbio_verify_user"))
                        if (t || "nymi" != i || !have_binary_function("nymi_validate")) {
                            try {
                                if (shouldOpenLogin()) return void LPPlatform.openLoginPopover()
                            } catch (e) {
                                g_can_open_popover = !1
                            }
                            g_isfirefoxsdk && "undefined" != typeof g_panel ? open_login_panel() : LPPlatform.openLogin()
                        } else call_binary_function("nymi_validate", function(e) {
                            if ("" != e) {
                                var t = e.split("|");
                                if (2 == t.length) return g_manual_login = !0, void LP_do_login(decodeURIComponent(t[0]), decodeURIComponent(t[1]))
                            }
                            open_login(o, !0)
                        });
        else call_binary_function("winbio_verify_user", "", gs("Swipe finger"), gs("Swipe your finger on the fingerprint sensor"), gs("Cancel"), function(e) {
            if ("" != e) {
                var t = e.split("|");
                if (2 == t.length) return g_manual_login = !0, void LP_do_login(decodeURIComponent(t[0]), decodeURIComponent(t[1]))
            }
            open_login(o, !0)
        });
        else call_binary_function("validity_verify_user", "", gs("Swipe finger"), gs("Swipe your finger on the fingerprint sensor"), gs("Cancel"), function(e) {
            if ("" != e) {
                var t = e.split("|");
                if (2 == t.length) return g_manual_login = !0, void LP_do_login(decodeURIComponent(t[0]), decodeURIComponent(t[1]))
            }
            open_login(o, !0)
        });
        else {
            var e = encodeURIComponent(lpCreatePass(8, 1, 1, 1, 0, 1, 0, 1));
            call_binary_function("lpvt_verify_user", e, gs("Swipe finger"), gs("Swipe your finger on the fingerprint sensor"), gs("Cancel"), gs("Swipe current user's finger"), function(e) {
                if ("" != e) {
                    var t = e.split("|");
                    if (2 == t.length) return g_manual_login = !0, void LP_do_login(decodeURIComponent(t[0]), decodeURIComponent(t[1]))
                }
                LPISUPEK && LPISLOC ? call_binary_function("lpvt_has_data", function(e) {
                    lpshowError(e ? gs("LoginError") : gs("Before you can use LastPass, you must first connect your fingerprint reader and enroll one or more fingers."), !1, !0)
                }) : open_login(o, !0)
            })
        } else call_binary_function("trueapi_default_login_exists", function(e) {
            e ? call_binary_function("trueapi_get_default_login", function(e) {
                if ("" != e) {
                    var t = e.split("|");
                    if (3 == t.length) {
                        var a = atob(t[0]),
                            r = atob(t[1]),
                            n = atob(t[2]);
                        return multifactor_setdata("password_offline", n), multifactor_setdata("type", i), g_manual_login = !0, void LP_do_login(a, r, null, null, !0)
                    }
                }
                open_login(o, !0)
            }) : open_login(o, !0)
        })
    })
}

function open_login_panel() {
    shouldOpenLogin() ? LPPlatform.openLoginPopover() : null != g_badgedata && showFirefoxPanel(), LPPlatform.openLoginPopover()
}

function closePop() {
    LPPlatform.closePopovers()
}

function fillnext(n, i) {
    lploggedin ? get_selected_tab(null, function(e) {
        var t = getBG();
        t.setcurrenttabid(gettabid(e)), t.setcurrenturl(gettaburl(e));
        var a = getmatchingsites(1);
        if (0 < a.length) {
            for (var r = 0; r < a.length && a[r].aid != g_curr_fill_aid; r++);
            g_curr_fill_aid = r == a.length ? -1 == n ? a[a.length - 1].aid : a[0].aid : (1 == n ? ++r >= a.length && (r = 0) : -1 == n && --r < 0 && (r = a.length - 1), a[r].aid), i ? fill({
                tabid: getcurrenttabid(),
                acct: g_sites[g_curr_fill_aid],
                docid: null,
                submit: !0,
                doconfirm: !1,
                docnum: "all",
                allowforce: !1,
                skip_pwprotect: !1,
                manualfill: !0,
                desc: "fill_A1",
                source: "notrack"
            }) : fillaid(g_curr_fill_aid, !1, "notrack"), sendLpImprove("sitelogin", {
                shareType: getShareType(g_curr_fill_aid),
                copy: 0,
                autologin: g_sites[g_curr_fill_aid].autologin ? 1 : 0,
                source: "hotkey"
            })
        }
    }) : open_login()
}

function getInt(e) {
    var t = parseInt(e);
    return "" != t && NaN != t || (t = 0), t
}

function loggedIn(e, t) {
    if (L("BG : loggedIn"), lploggedin = !0, t || (server_tries = 0), lpReadAllPrefs(postlogin), "undefined" != typeof localStorage) {
        var a = localStorage_getItem(db_prepend("lastversion")),
            r = !1;
        localStorage_setItem(db_prepend("lastversion"), lpversion) || (r = !0), r || checkOpenUpgradePage(a);
        var n = opendb();
        createSavedLoginsTable(n), n && (g_indexeddb ? n.transaction("LastPassSavedLogins2", "readonly").objectStore("LastPassSavedLogins2").openCursor(IDBKeyRange.only(g_username)).onsuccess = function(e) {
            e.target.result && "" != e.target.result.value.password && (g_master_password_saved = !0)
        } : n.transaction(function(e) {
            e.executeSql("SELECT * FROM LastPassSavedLogins2 WHERE username = ? AND password != ''", [g_username], function(e, t) {
                0 < t.rows.length && (g_master_password_saved = !0)
            }, function(e, t) {})
        })), e && setTimeout(function() {
            refresh_windows()
        }, 500), CPWbot_bg = new CPWbot_bg_lib, drawIconAtRotation(0), sendTS({
            cmd: "login"
        }), Topics.get(Topics.LOGIN).publish(), LPTabs.get({
            interface: "ContentScriptInterface"
        }).forEach(function(e) {
            e.forEachWindow({
                each: function(e) {
                    void 0 !== e.Topics && e.Topics.publish(Topics.LOGIN)
                }
            })
        })
    }
}

function checkOpenUpgradePage(e) {
    if (g_showupgradenotes) {
        var t = e,
            a = lpversion,
            r = 0,
            n = 0,
            i = 0,
            o = 0,
            s = 0,
            l = 0;
        if (t)
            for (var _ = t.split("."), c = 0; c < _.length; c++) 0 == c ? r = parseInt(_[c]) : 1 == c ? n = parseInt(_[c]) : 2 == c && (i = parseInt(_[c]));
        for (var g = a.split("."), c = 0; c < g.length; c++) 0 == c ? o = parseInt(g[c]) : 1 == c ? s = parseInt(g[c]) : 2 == c && (l = parseInt(g[c]));
        t && "null" != t && r < o && (L("Lastversion: " + e + " this version: " + lpversion + " amaj:" + r + " aminor:" + n + " bmaj:" + o + " bminor:" + s), openURL(base_url + "upgrade.php?ver=" + lpversion + "&lastver=" + e + "&type=" + encodeURIComponent(get_method()) + "&upgrade=" + t))
    }
}

function get_searchNotesPref() {
    return 1 == lpGetPref("searchNotes", 1)
}

function postlogin() {
    var e = (new Date).getTime();
    g_lastpollcheck = lastlogin = e, 1 == lpGetPref("logoffWhenCloseBrowser", 0) && 0 < lpGetPref("logoffWhenCloseBrowserVal", 0) && (lpPutUserPref("lastpollcheck", g_lastpollcheck), lpWriteAllPrefs()), drawIconAtRotation(0), g_offer_popupfill && (do_experimental_popupfill = 1 == lpGetPref("usepopupfill", 1), 0 == lpGetPref("changedpopupfill", 0) && (lpPutUserPref("showFormFillNotifications", 0), lpPutUserPref("showGenerateNotifications", 0), lpPutUserPref("showNotificationsAfterClick", 0), lpPutUserPref("changedpopupfill", 1), lpWriteAllPrefs()))
}

function lplogin() {
    open_login()
}

function lplogoff(e, t) {
    var a;
    loggedOut(!1, void 0 !== t ? t : "lplogoff")
}

function lplogoff_if() {
    lploggedin && loggedOut(!1, "lplogoff_if")
}
var rotation = 0,
    numrotations = 0,
    currrotation = 0;

function animateFlip() {
    1 <= (rotation += 1 / 36) && (rotation -= 1), ++currrotation >= numrotations ? rotation = 0 : setTimeout(function() {
        animateFlip()
    }, 10), drawIconAtRotation(rotation)
}
var ICON_GRAY = 0,
    ICON_RED = 1,
    ICON_GREEN = 2,
    ICON_YELLOW = 3,
    ICON_BREACH = 4,
    ICON_GRAY_CHROME = 5,
    ICON_RED_CHROME = 6,
    ICON_GREEN_CHROME = 7,
    ICON_YELLOW_CHROME = 8,
    ICON_BREACH_CHROME = 9;

function drawIconAtRotation(e) {
    if (g_issafari_appext) LPPlatform.updateToolbarItemIcon();
    else {
        if (g_issafari) {
            for (var t = 0; t < safari.extension.toolbarItems.length; t++) - 1 != safari.extension.toolbarItems[t].identifier.indexOf("LPToolButton") && (!g_badgedata || "notification" != g_badgedata.cmd || "alert" != g_badgedata.type && "mpwchange" != g_badgedata.type ? g_badgedata && "notification" == g_badgedata.cmd && "lpalert" == g_badgedata.type ? safari.extension.toolbarItems[t].image = getchromeurl(get_safari_version() < 6 ? "icon_breach_safari_16px.png" : "icon_breach_safari.png") : g_badgedata && "notification" == g_badgedata.cmd && "error" == g_badgedata.type ? safari.extension.toolbarItems[t].image = getchromeurl(get_safari_version() < 6 ? "icon_breach_safari_16px.png" : "icon_breach_safari.png") : get_safari_version() < 6 ? safari.extension.toolbarItems[t].image = getchromeurl(lploggedin ? "icon_on_16px.png" : "icon_off_16px.png") : safari.extension.toolbarItems[t].image = getchromeurl(lploggedin ? "icon_on.png" : "icon_off.png") : safari.extension.toolbarItems[t].image = getchromeurl(get_safari_version() < 6 ? "icon_breach_safari_16px.png" : "icon_breach_safari.png"));
            return void update_menus()
        }
        if (g_isfirefoxsdk) return void(g_firefox_button && (null != g_badgedata ? "notification" == g_badgedata.cmd && "save" == g_badgedata.type ? g_firefox_button.icon = {
            19: self.data.url(get_icon(ICON_GREEN)),
            38: self.data.url(get_icon(ICON_GREEN_CHROME))
        } : "notification" != g_badgedata.cmd || "lpalert" != g_badgedata.type && "mpwchange" != g_badgedata.type ? g_firefox_button.icon = {
            19: self.data.url(get_icon(ICON_YELLOW)),
            38: self.data.url(get_icon(ICON_YELLOW_CHROME))
        } : g_firefox_button.icon = {
            19: self.data.url(get_icon(ICON_BREACH)),
            38: self.data.url(get_icon(ICON_BREACH_CHROME))
        } : lploggedin ? g_firefox_button.icon = {
            19: self.data.url(get_icon(ICON_RED)),
            38: self.data.url(get_icon(ICON_RED_CHROME))
        } : g_firefox_button.icon = {
            19: self.data.url(get_icon(ICON_GRAY)),
            38: self.data.url(get_icon(ICON_GRAY_CHROME))
        }));
        if (g_iscasper) return;
        if (g_ischrome) {
            var a, r;
            null != g_badgedata ? "notification" == g_badgedata.cmd && "save" == g_badgedata.type ? (r = get_icon(ICON_GREEN_CHROME), a = get_icon(ICON_GREEN)) : "notification" == g_badgedata.cmd && "alert" == g_badgedata.type ? (a = get_icon(ICON_YELLOW), r = get_icon(ICON_YELLOW_CHROME)) : "notification" != g_badgedata.cmd || "lpalert" != g_badgedata.type && "mpwchange" != g_badgedata.type ? (a = get_icon(ICON_YELLOW), r = get_icon(ICON_YELLOW_CHROME)) : (a = get_icon(ICON_BREACH), r = get_icon(ICON_BREACH_CHROME), set_badge_text("")) : r = lploggedin ? (a = get_icon(ICON_RED), get_icon(ICON_RED_CHROME)) : (a = get_icon(ICON_GRAY), get_icon(ICON_GRAY_CHROME));
            var n = {
                19: a,
                38: r
            };
            chrome.browserAction.setIcon({
                path: n
            }), "function" == typeof chrome.browserAction.setPopup && getsinglefactortype(function(e) {
                chrome.browserAction.setPopup({
                    popup: !g_ask_native_messaging_from_button && (lploggedin || null != g_badgedata || "" == e && 1 == lpGetPref("enablenewlogin", 1)) ? "extensionLogin.html" : ""
                })
            })
        }
    }
}

function ease(e) {
    return (1 - Math.sin(Math.PI / 2 + e * Math.PI)) / 2
}

function lpAddRejectedSite(e, t, a) {
    var r = new lpobjrejectedaddsite;
    r.username = e, r.encryptedPassword = enc(t), r.tld = a, r.rejectedTime = lp_get_gmt_timestamp(), g_rejectedaddsites[g_rejectedaddsites.length] = r
}

function loggedOut(e, t) {
    L("BG : loggedOut from=" + t), LPContentScriptFeatures.react_login && webClient.api.logout();
    var a = lpGetPref("clearfilledfieldsonlogoff", 0);
    get_all_windows({
        populate: !(g_manual_login = !1)
    }, function(e) {
        for (var t = 0; t < e.length; t++)
            for (var a = 0; a < get_tabs_length(e[t]); a++) {
                var r = gettaburl(get_tabs(e[t])[a]);
                r && lp_url_is_lastpassext(r) && -1 == r.indexOf(VAULT_PAGE) && -1 == r.indexOf("native_messaging.html") && -1 == r.indexOf("dialog=login") && -1 == r.indexOf("dialog=createAccountSimple") && close_tab(get_tabs(e[t])[a])
            }
    }), lploggedin && (LPPlatform.closePopovers(), lpnp_notify("logout")), LPNotifications.closeNotifications(), closeallnotifications(), closeallclickables(), deleteallattachments(!0), yubikey_cleardata(), googleauth_cleardata(), outofband_cleardata(), securityquestion_cleardata(), sesame_cleardata(), grid_cleardata(), multifactor_cleardata();
    var r = !1;
    if (lploggedin || (r = !0), lploggedin = !1, last_idle_check = 0, g_local_hash = lphash = g_local_key_hex = g_local_key = null, g_username = lpusername = g_local_key_hash = null, lpusername_hash = g_username_hash = lphash = null, lpmpstrength = null, lpsendmpstrength = !1, lpsendchallengescore = !1, g_uid = lpuid = null, g_pwdeckey = null, g_sites = {}, g_tlds = {}, g_securenotes = new Array, g_applications = new Array, g_prompts = new Array, g_icons = new Array, g_bigicons = {}, g_multifactorscore = g_icons_length = 0, lp_server_attach_version = g_server_accts_version = g_local_accts_version = g_disablepwalerts = -1, lp_local_attach_version = -1, g_identities = new Array, g_pendings = new Array, g_shareeautopushes = new Array, g_formfills = new Array, g_emer_sharees = [], g_emer_sharers = [], g_pending_shares = [], g_totp = {}, g_neverurls = new Array, g_equivalentdomains = {}, g_urlrules = new Array, g_prefoverrides = {}, g_identity = "", g_showcredmon = g_iscompanyadmin = g_isadmin = g_loglogins = !(g_userprefs = {}), g_launches = new Array, g_fillfieldsmatches = new Array, g_fillfieldsmatchescurridx = new Array, lp_phpsessid = "", g_premium_trial = g_premium_exp = 0, g_enterprisemodel = g_enterpriseuser = 0, g_is_company_subscription_expired = null, g_loginstarted = g_is_legacy_premium = g_loggedinonline = g_loggedinoffline = !1, lpReadAllPrefs(), rotation = 0, drawIconAtRotation(), null != g_badgedata && ("notification" != g_badgedata.cmd || "error" != g_badgedata.type && "mpwchange" != g_badgedata.type) && clear_badge(), rsa_clearvars(), rsa_setpendingsharests(!0), g_genpws = new Array, GenPassHistory.clear(), g_master_password_saved = !1, g_persistent_notifications = new Array, g_rejectedaddsites = new Array, g_shares = new Array, lp_attaches = new Array, lpdisableoffline = !(g_datacache = []), countryfromip = "", g_flags = {}, g_privkeyattempts = 0, sendTS({
            cmd: "logoff"
        }), g_generate_pw_pattern_hints = {}, g_popupfill_hint = {}, g_popupfill_hint_generate = {}, g_popupfill_hint_save = {}, g_popupfill_hint_type = {}, g_popupfill_last_active = {}, g_popupfill_last_active_fieldid = {}, g_popupfill_last_active_fieldtype = {}, g_popup_tab_docnum = [], g_popup_url_by_tabid = [], g_iframe_hack_src = [], g_pending_pw_change = {}, OVERRIDENOREFRESH = !0, r || setTimeout(function() {
            refresh_windows(OVERRIDENOREFRESH)
        }, 500), !e) {
        var n = "";
        g_token && g_token.length && (n += "&token=" + encodeURIComponent(g_token));
        var i = new XMLHttpRequest;
        i.open("POST", base_url + "logout.php?chrome_plugin=1&noredirect=1"), i.onload = function() {
            if (i && i.response) {
                var e = JSON.parse(i.response);
                Array.isArray(e.singleLogoutUrls) && e.singleLogoutUrls.forEach(function(e) {
                    var t = new XMLHttpRequest;
                    t.open("GET", e), t.send()
                })
            }
        }, i.send(n)
    }
    g_token = "", LPServer.clearCSRFToken(), "undefined" != typeof g_oldpbkdf2 && (g_oldpbkdf2 = 0), update_menus(!0), 0 != a && clear_all_filled_fields(), g_fillfield_confirm_perfield = {}, g_fillfield_did_fillbest = {}, g_popupfill_hint = {}, g_popupfill_hint_generate = {}, g_popupfill_hint_save = {}, g_popupfill_last_active = {}, g_popupfill_last_active_fieldid = {}, g_popupfill_last_active_fieldtype = {}, g_popupfill_save_data = {}, g_popupforminput = [], g_cpwbot && CPWbot_bg && "object" == typeof CPWbot_bg && (CPWbot_bg.logout(), CPWbot_bg = null), g_cpw_server_initiated_tabid = null, g_cpw_aid_queue = [], g_cpwbot && CPWbatch && "object" == typeof CPWbatch && (CPWbatch.cpw_set_batchjob_state(F_NONE), CPWbatch.logout(), CPWbatch = null), cleardeccache(), clear_badge_text(), shutdown_push_listener(), g_is_federated_user = !(g_usercache = {}), LPContentScriptFeatures = {
        intro_tutorial_version: LPContentScriptFeatures.intro_tutorial_version,
        react_login: LPContentScriptFeatures.react_login
    }, Topics.get(Topics.CLEAR_DATA).publish(), LPTabs.get({
        interface: "ContentScriptInterface"
    }).forEach(function(e) {
        e.forEachWindow({
            each: function(e) {
                void 0 !== e.Topics && e.Topics.publish(Topics.CLEAR_DATA)
            }
        })
    })
}
get_icon = function() {
    var t = function(e) {
        switch (e) {
            case ICON_GRAY:
                return "19x19_Gray.png";
            case ICON_GRAY_CHROME:
                return "19x19_Gray_2x.png";
            case ICON_RED:
                return "19x19_Red.png";
            case ICON_RED_CHROME:
                return "19x19_Red_2x.png";
            case ICON_GREEN:
                return "19x19_Green.png";
            case ICON_GREEN_CHROME:
                return "19x19_Green_2x.png";
            case ICON_YELLOW:
                return "19x19_Yellow.png";
            case ICON_YELLOW_CHROME:
                return "19x19_Yellow_2x.png";
            case ICON_BREACH:
                return "19x19_Breach.png";
            case ICON_BREACH_CHROME:
                return "19x19_Breach_2x.png"
        }
    };
    return function(e) {
        switch (parseInt(lpGetPref("Icon", 1))) {
            default:
            case 0:
            case 1:
                return "images/iconset2/" + t(e);
            case 2:
                return "images/iconset3/" + t(e);
            case 3:
                return "images/iconset4/" + t(e);
            case 4:
                return "images/iconset5/" + t(e)
        }
    }
}();
var g_last_openattach = 0;

function deleteallattachments(e) {
    have_binary_function("delete_files_by_extension") && (e || lp_get_gmt_timestamp() > g_last_openattach + 25) && call_binary_function("delete_files_by_extension", "", "*", !0)
}

function getmenurowheight() {
    return 20
}

function getmatchingsitesheight(e) {
    var t = e.length * getmenurowheight();
    return 200 < t && (t = 200), t
}

function getmenuheight(e, t, a, r) {
    var n = 15;
    (g_premium_exp > lp_get_local_timestamp() || g_enterpriseuser) && --n;
    var i = getmenurowheight(),
        o = n * i;
    if (void 0 === e || e) {
        var s = getmatchingsites();
        0 < s.length && (o += i, o += getmatchingsitesheight(s))
    }
    return void 0 !== t && !t || (o += 32), void 0 !== a && !a || (o += 15), r && (o -= 50), o
}

function contextmenufill(e) {
    g_sites[e] ? fillaid(e, !1, "context") : fillitem(e, !1, null, !1, !1, "context")
}

function fillaid(e, t, a) {
    var r = "Icon Dropdown";
    if (!g_sites || !lploggedin) return !1;
    write_history({
        cmd: "fillaid",
        aid: e
    });
    var n = !!t;
    g_last_launch[e] = (new Date).getTime();
    var i = g_sites[e];
    void 0 !== i && "autofill" !== a && "notrack" !== a && (sendLpImprove("sitelogin", {
        shareType: getShareType(e),
        copy: 0,
        autologin: i.autologin,
        source: a || "hotkey"
    }), a !== r && (a = "notrack"));
    var o = getcurrenttabid();
    if (void 0 !== i && i && "1" == i.basic_auth) return setTimeout(function() {
        fill({
            tabid: o,
            acct: g_sites[e],
            docid: null,
            submit: !1,
            doconfirm: !0,
            docnum: "all",
            allowforce: !0,
            skip_pwprotect: n,
            manualfill: !0,
            desc: "fill_A2",
            source: a
        })
    }, 100), !0;
    var s = a === r ? a : "fill_A3";
    return fill({
        tabid: o,
        acct: g_sites[e],
        docid: null,
        submit: !1,
        doconfirm: !0,
        docnum: "all",
        allowforce: !0,
        skip_pwprotect: n,
        manualfill: !0,
        desc: s,
        source: a
    })
}

function setcurrenturl(e) {
    g_currenturl = e
}

function setcurrenttabid(e) {
    g_currenttabid = e
}

function addFormfillTab(e) {
    g_tabsWithForms.includes(e) || g_tabsWithForms.unshift(e);
    var t = LPTabs.get({
        tabID: e
    });
    t && t.forEachWindow({
        each: function(e) {
            e.Topics.publish(Topics.MATCHING_ITEMS_CHANGED, getmatchingsites(!1, !0, !1))
        }
    })
}

function removeFormfillTab(e) {
    -1 < g_tabsWithForms.indexOf(e) && g_tabsWithForms.splice(g_tabsWithForms.indexOf(e), 1)
}

function getmatchingsites(e, t, a) {
    var r = getcurrenturl(),
        n = lpcanonizeUrl(r),
        i, o = getsites(lp_gettld_url(r)),
        s, l, _;
    o = reorderOnURL(o, r, t, a);
    var c = [];
    for (s in o) l = o[s].aid, void 0 !== g_sites[l] && (_ = g_sites[l], c.push({
        aid: _.aid,
        name: _.name,
        username: getusernamefromacct(_),
        fiid: _.fiid,
        type: "account"
    }));
    if (g_tabsWithForms.includes(getcurrenttabid()) && LPContentScriptFeatures.omaria)
        for (noteId in g_securenotes) {
            var g = g_securenotes[noteId],
                d = g.notetype;
            isFillableNoteType(d) && c.push({
                aid: g.aid,
                name: g.name,
                fiid: g.fiid,
                type: "note"
            })
        }
    return c
}
var isFillableNoteType = function(e) {
    if (!e) return !1;
    switch (e) {
        case "Credit Card":
        case "Address":
        case "Bank Account":
        case "Social Security":
            return !0;
        default:
            var t = e.match(/^Custom_(\d+)$/);
            return t && 2 === t.length
    }
};

function getnevers() {
    var e = getcurrenturl(),
        t = lp_gettld_url(e),
        a = lpcanonizeUrl(e),
        r = [];
    return getneverfor(r, "neveraccounts", a, t), getneverfor(r, "neverautologins", a, t), getneverfor(r, "neverformfills", a, t), getneverfor(r, "nevergenerates", a, t), getneverfor(r, "neverautofills", a, t), getneverfor(r, "nevershowicons", a, t), getneverfor(r, "neverenablelp", a, t), r
}

function getneverfor(e, t, a, r) {
    if (g_neverurls[t] && 0 < g_neverurls[t].length)
        for (var n = 0; g_neverurls[t] && n < g_neverurls[t].length; n++) {
            var i = g_neverurls[t][n];
            i == a ? e.push({
                type: t,
                url: i,
                domain: 0
            }) : i == r && e.push({
                type: t,
                url: i,
                domain: 1
            })
        }
}

function getsites(e, t, a) {
    var r, n = {};
    if (null == e || null == g_equivalentdomains) return n;
    if (void 0 !== g_equivalentdomains[e]) {
        var i = g_equivalentdomains[e];
        void 0 !== g_equivalentdomains[i] && (r = g_equivalentdomains[i])
    } else r = [e];
    if (void 0 !== r)
        for (var o = 0; o < r.length; o++)
            if (void 0 !== g_tlds[r[o]])
                for (var s in g_tlds[r[o]])
                    if (void 0 !== g_sites[s]) {
                        if (t) {
                            if (g_sites[s].genpw) continue;
                            var l = issharedfolder(g_shares, g_sites[s].group);
                            if (!checkreadonly(l, !0)) continue
                        }
                        check_ident_aid(g_sites[s].aid) && (a && g_sites[s].aid == a || a && -1 != a.indexOf("," + g_sites[s].aid + ",") || (n[s] = g_tlds[r[o]][s]))
                    } return n
}

function accthaspassword(e) {
    if (!e) return !1;
    if (e.save_all) {
        for (var t = 0; t < e.fields.length; t++)
            if ("password" == e.fields[t].type && "" != e.fields[t].value) return !0;
        return !1
    }
    return "" != e.password
}

function lp_url_is_lastpass(e, t) {
    if (null == e || g_skipurltest && t) return !1;
    var a = /^https:\/\/([a-z0-9-]+\.)?lastpass\.(eu|com)\//i;
    if (0 == e.indexOf(base_url) || 0 == e.indexOf("https://lastpass.com/")) return !0;
    if ("undefined" == typeof g_loosebasematching) return a.test(e);
    var r = lp_gettld_url(e);
    return new RegExp(r + "/$").test(base_url)
}

function lp_url_is_lastpassext(e) {
    var t = getchromeurl("", !0);
    return !(!e || 0 != e.indexOf(t))
}

function openvault(e, t, a, r) {
    if (g_issafari_appext) LPPlatform.openVault();
    else if (e || lploggedin) {
        var n = "" == g_vaulturloverride ? getchromeurl(VAULT_PAGE) : g_vaulturloverride;
        if (t && (n += (-1 != n.indexOf("?") ? "&" : "?") + "cmd=" + t), e) {
            var i = "function" == typeof r ? r : a;
            get_all_windows({
                populate: !0
            }, function(e) {
                for (var t = 0; t < e.length; t++)
                    for (var a = 0; a < get_tabs_length(e[t]); a++) {
                        var r;
                        if (gettaburl(get_tabs(e[t])[a]) == n) return
                    }
                openURL(n, i)
            })
        } else openURL(n, a)
    } else open_login()
}

function openurlifnotopen(n) {
    get_all_windows({
        populate: !0
    }, function(e) {
        for (var t = 0; t < e.length; t++)
            for (var a = 0; a < get_tabs_length(e[t]); a++) {
                var r;
                if (gettaburl(get_tabs(e[t])[a]) == n) return
            }
        openURL(n)
    })
}

function openimport() {
    if (lploggedin)
        if ((g_is_win || g_is_mac || g_is_linux) && have_binary_function("choose_file")) {
            var e = "import_other.html?lplanguage=" + g_language;
            openURL(getchromeurl(e))
        } else {
            unlock_plug2web();
            var e = base_url + "import.php?hasplugin=" + LP.en(lpversion) + get_identity_param();
            lppassusernamehash && (e = base_url + "gettopost.php?posturl=" + LP.en(e)), openURL(e)
        }
}

function doimport(a, r) {
    var n = function(e) {
        if (lpimportdata = e, "" != lpimportdata && null != lpimportdata) {
            lpimportsource = a, unlock_plug2web();
            var t = base_url + "import.php?fromplugin=1" + get_identity_param();
            lppassusernamehash && (t = base_url + "gettopost.php?posturl=" + LP.en(t)), openURL(t)
        } else r && alertfrombg(gs("That file is missing or empty.  Please enter the full path of the file to import."))
    };
    "wlan" == a ? (a = "csv", call_binary_function("wlan_pull_csv", n)) : "safari" == a ? (a = "csv", call_binary_function("get_safari_passwords", n)) : "opera" == a ? (a = "csv", call_binary_function("get_opera_passwords", n)) : "firefox" == a ? (a = "csv", g_passwords.search({
        onComplete: function(e) {
            for (var t = "url,username_field,username,password_field,password\n", a = 0; a < e.length; a++) t += csv_encode(e[a].url ? e[a].url : "") + "," + csv_encode(e[a].usernameField ? e[a].usernameField : "") + "," + csv_encode(e[a].username ? e[a].username : "") + "," + csv_encode(e[a].passwordField ? e[a].passwordField : "") + "," + csv_encode(e[a].password ? e[a].password : "") + "\n";
            n(t)
        }
    })) : r ? call_binary_function("read_file", r, !0, n) : call_binary_function("choose_file", null, null, null, !0, function(e) {
        e = e && atob(e), n(e)
    })
}

function openimportchrome() {
    openURL(getchromeurl("import.html"))
}

function openexport(e) {
    lploggedin && doexport(!1, e || !1)
}

function wlanexport(e) {
    if (1 != lpGetPref("noexport", 0))
        if (have_binary())
            if (g_wlan_works)
                if (g_generatedpw || e) {
                    var t = "";
                    for (var a in g_securenotes)
                        if (check_ident_aid(a)) {
                            var r = lpmdec_acct(g_securenotes[a].extra, !0, g_securenotes[a], g_shares);
                            "Wi-Fi Password" == getNoteValue("NoteType", r) && (t += r + "\n\n")
                        }
                    "" != t && (loglogin("export"), call_binary_function("wlan_push", t))
                } else security_prompt(function() {
                    wlanexport(!0)
                });
    else g_wlan_has_exe ? alertfrombg(gs("No Wi-Fi adapter was detected on this computer.  This feature requires a Wi-Fi adapter.")) : confirm(gs("The LastPass Wi-Fi utility was not detected on this computer.  Would you like to run the LastPass Universal Installer in order to install it?")) && openbaseurl("installer/");
    else confirm(gs("This feature requires the binary version of this browser extension. Would you like to install it now?")) && install_binary();
    else alertfrombg(gs("CompanyPolicyProhibits"))
}

function openlastpassexport() {
    openexport(!0)
}

function openprint(e) {
    unlock_plug2web();
    var t = base_url + "export.php?plug=1&print=1&hasplugin=" + LP.en(lpversion) + get_identity_param();
    e && (t += "&notes=1"), lppassusernamehash && (t = base_url + "gettopost.php?posturl=" + LP.en(t)), openURL(t)
}

function openprefs(e) {
    LPPlatform.openTabDialog("preferences")
}

function openhelp(e) {
    var t = g_helpurl;
    e && (t += "&topic=" + e), openURL(t)
}

function openpremium() {
    openURL(base_url + "premium.php")
}

function openenterprisepayment() {
    openURL(base_url + "enterprisepayment.php")
}

function openteamspayment() {
    openURL(base_url + "teamspayment.php")
}

function openfamiliespayment() {
    openURL(base_url + "families/payment")
}

function openpricing() {
    openURL(base_url + "pricing")
}

function openTranslationsReadMore() {
    openURL(base_url + "translation-read-more")
}

function openentconsole() {
    openURL(base_url + "company/#/dashboard")
}

function openFamilyConsole() {
    openURL(base_url + "family/#/users/")
}

function openPremiumPaymentPage() {
    openURL(base_url + "premium/payment")
}

function openEnterprisePaymentPage() {
    openURL(base_url + "enterprisepayment.php")
}

function openTeamsPaymentPage() {
    openURL(base_url + "teamspayment.php")
}

function openFamiliesPaymentPage() {
    openURL(base_url + "families/payment")
}

function openPricingPage() {
    openURL(base_url + "pricing")
}

function openAllSites(e) {
    for (var t = 0; t < e.length; t++) {
        var a = e[t];
        g_last_launch[a.aid] = (new Date).getTime(), openURL(a.url, function(e, t) {
            console_log("setting aid " + gettabid(e) + " " + t), g_launches[gettabid(e)] = t
        }, a.aid, !0)
    }
}

function openall(e, t) {
    var a = null;
    if (e == gs("favorites")) openfavorites();
    else if (e == gs("recently usedlower")) openallrecent();
    else {
        var r = new Array,
            n = !1;
        for (var i in g_sites) check_ident_aid(g_sites[i].aid) && g_sites[i].group == e && "http://group" != g_sites[i].url && (r.push(g_sites[i]), n |= g_sites[i].pwprotect, null == a && g_sites[i].pwprotect && (a = i));
        if (0 == r.length) return;
        if (!t && (n || g_prompts.login_site_prompt)) return void security_prompt(function() {
            openall(e, !0)
        }, null, !0, !0, a, !1);
        openAllSites(r)
    }
}

function openallrecent(e) {
    var t = new Array;
    for (var a in g_sites) check_ident_aid(g_sites[a].aid) && t.push(g_sites[a]);
    t.sort(function(e, t) {
        return e.last_touch > t.last_touch ? 1 : -1
    });
    for (var r = new Array, n = !1, a = 0; r.length < 10 && a < t.length; a++) "http://group" != t[t.length - a - 1].url && (n |= t[t.length - a - 1].pwprotect, r[r.length] = t[t.length - a - 1]);
    if (0 != r.length)
        if (e || !n && !g_prompts.login_site_prompt)
            for (var a = 0; a < r.length; a++) {
                var i = r[a];
                g_last_launch[i.aid] = (new Date).getTime(), openURL(i.url, function(e, t) {
                    console_log("setting aid " + gettabid(e) + " " + t), g_launches[gettabid(e)] = t
                }, i.aid, !0)
            } else security_prompt(function() {
                openallrecent(!0)
            })
}

function openfavorites(e, t) {
    var a = new Array,
        r = !1;
    for (var n in g_sites) check_ident_aid(g_sites[n].aid) && "1" == g_sites[n].fav && (a.push(g_sites[n]), r |= g_sites[n].pwprotect);
    if (0 != a.length)
        if (e || !r && !g_prompts.login_site_prompt) {
            for (var n = 0; n < a.length; n++) {
                var i = a[n];
                g_last_launch[i.aid] = (new Date).getTime(), openURL(i.url, function(e, t) {
                    console_log("setting aid " + gettabid(e) + " " + t), g_launches[gettabid(e)] = t
                }, i.aid, !0)
            }
            var o = {};
            void 0 !== t && (o = {
                source: t
            }), sendLpImprove("openfavorites", o)
        } else security_prompt(function() {
            openfavorites(!0)
        });
    else alertfrombg(gs("NoFavorites"))
}

function addAttach(s) {
    (g_is_win || g_is_mac || g_is_linux) && have_binary_function("choose_file") ? (g_attachname = g_attachbytes = "", call_binary_function("choose_file", !0, "", "", !0, function(e) {
        if ("string" == typeof e && e.length) {
            var t = e.indexOf("\n"),
                a, r = e.substr(0, t).replace(/\\/g, "/").replace(/.*\//, ""),
                n = r.match(/(?:\.([^.]+))?$/)[1] || "",
                i = e.substr(t + 1),
                o = check_run_file_extension(n);
            if (!n || !o) return void s({
                error: gs("Sorry, you can't attach that file.\nTry again using a file up to 10 MB of any supported type.\n• Documents: csv, doc, docx, odt, ppt, pptx, txt, xls, xlsx, pdf, rtf, html, htm\n• Media: png, gif, jpg, m4a, mpg, wav, avi, mov, tiff, tif, jpeg, wmv\n• Other: tsv, zip, rar, log, key")
            });
            if (10485762 < 3 * i.length / 4) return void s({
                error: gs("File too large, it must be less than 10MB.")
            });
            g_attachname = r, g_attachbytes = i
        }
        s && s({
            name: g_attachname,
            bytes: g_attachbytes
        })
    })) : confirm(gs("This feature requires the binary version of this browser extension. Would you like to install it now?")) && install_binary()
}

function showImageAttach(e) {
    g_img_data = e, openURL(getchromeurl("img.html"))
}

function canSaveAttach() {
    return !!have_binary_function("write_file")
}

function openAttach(c, g, d, p, u, f) {
    if (lploggedin)
        if (have_binary_function("run_file") && have_binary_function("write_file"))
            if (d && "" != d) alertfrombg(gs("This attachment needs to be saved first."));
            else {
                var m = function(l) {
                    var _ = void 0 !== l && l ? l : "unknown";
                    dec(u, AES.hex2bin(p), !1, function(e) {
                        if (e) {
                            if (!f)
                                for (var t in f = "", lp_attaches)
                                    if (lp_attaches.hasOwnProperty(t) && lp_attaches[t].id == g) {
                                        f = lp_attaches[t].mimetype;
                                        break
                                    } var a = "";
                            if (0 == f.indexOf("other:application/octet-stream") ? a = "" : 0 == f.indexOf("other:") ? a = f.substring(6) : 0 == f.indexOf("data:audio") ? a = f.substring(11) : 0 == f.indexOf("data:") && -1 != f.lastIndexOf("/") && (a = f.substr(f.lastIndexOf("/") + 1)), !check_run_file_extension(a)) return !1;
                            if (!d)
                                for (var t in d = "", lp_attaches)
                                    if (lp_attaches.hasOwnProperty(t) && lp_attaches[t].id == g) {
                                        void 0 !== lp_attaches[t].filename && (d = dec(lp_attaches[t].filename, AES.hex2bin(p)));
                                        break
                                    } if (d = d || lpcreaterandomhexstring(30) + "." + a, call_binary_function("write_file", d, e, !0, !0), g_is_win) {
                                var r = !1,
                                    n = !0;
                                call_binary_function("write_file", d + ":Zone.Identifier", "[ZoneTransfer]\nZoneId=3", !1, !0)
                            }
                            g_is_linux ? call_binary_function("get_path", !0, function(e) {
                                alertfrombg(gs("Your attachment is located at:") + "\n\n" + e + d + "\n\n" + gs("It is recommended that you delete the attachment file after you use it."))
                            }) : (call_binary_function("get_path", !0, function(e) {
                                call_binary_function("run_file", e + d)
                            }), 0 == g_last_openattach && setInterval(function() {
                                deleteallattachments()
                            }, 1e4), g_last_openattach = lp_get_gmt_timestamp())
                        } else {
                            if (u && 0 != u.length) return void alertfrombg(gs("Error opening attachment.") + "\nError A\nfrom=" + _ + "\nattachsize=" + (void 0 !== u && null != u && void 0 !== u.length ? u.length : "undefined") + "\nattachkeysize=" + (void 0 !== p && void 0 !== p.length ? p.length : "undefined"));
                            var i = get_attach_info(g),
                                o = getacct(c);
                            if (i && o && "retry" != l) {
                                var s = issharedfolder(g_shares, o.group);
                                return void get_individual_attachment(i.storagekey, g, 0 == s ? null : s.id, function(e) {
                                    u = e, m("retry")
                                })
                            }
                            alertfrombg(gs("Error opening attachment.") + "\nError C\nfrom=" + _ + "\nattachsize=" + (void 0 !== u && null != u && void 0 !== u.length ? u.length : "undefined") + "\nattachkeysize=" + (void 0 !== p && void 0 !== p.length ? p.length : "undefined"))
                        }
                    })
                };
                p ? m("B attachkey is invalid") : lpReadAttach(g, function(e) {
                    u = e;
                    var t = getacct(c),
                        a = issharedfolder(g_shares, t.group),
                        r = 0 == a ? g_local_key : a.sharekey;
                    p = dec(t.attachkey, r), m("lpReadAttach attachid=" + g + " id=" + c + " " + (null == e ? "READ_FAILED" : "READ_OK"))
                })
            }
    else {
        var e = "https://lastpass.com/dl";
        alertfrombg(sprintf(gs("This feature is not available in this version. Please install the binary extension by going to %s"), e))
    }
}

function check_run_file_extension(e) {
    var t;
    return ["csv", "doc", "docx", "odt", "ppt", "pptx", "txt", "xls", "xlsx", "pdf", "png", "gif", "jpg", "m4a", "mpg", "wav", "avi", "rtf", "html", "htm", "mov", "tiff", "tif", "jpeg", "wmv", "tsv", "zip", "rar", "log", "key", "pem"].includes(e.toLowerCase())
}

function saveall() {
    lploggedin ? get_selected_tab(null, function(e) {
        g_saveall_url = gettaburl(e), g_saveall_framestotal = g_CS_count[gettabid(e)], g_saveall_framesdone = 0, g_saveall_docnumsdone = new Array, g_saveall_formdata = "", g_saveall_tabid = gettabid(e), g_saveall_done = !1, sendCS(g_saveall_tabid, {
            cmd: "saveall"
        }, "all"), setTimeout(function() {
            finish_saveall()
        }, 1e3)
    }) : open_login()
}

function finish_saveall() {
    g_saveall_done || (g_saveall_done = !0, handleSaveAll(g_saveall_tabid, {
        cmd: "saveall",
        addsite: 1,
        url: g_saveall_url,
        formdata: g_saveall_formdata
    }))
}

function alertfrombg(e) {
    LPNotifications.createNotification({
        title: "LastPass",
        message: e
    })
}

function openfeedback() {
    openURL(base_url + "feedback.php")
}

function opengenpw(a) {
    "hotkey" != a && (a = "context"), get_selected_tab(null, function(e) {
        var t = LPContentScriptFeatures.better_generate_password_enabled ? "betterGeneratePassword" : "generatePassword";
        LPPlatform.openPopoverDialog(t, {
            tabID: e.id,
            tabURL: gettaburl(e),
            saveOptions: {
                source: a
            }
        })
    })
}

function openchooseprofilecc(a) {
    get_selected_tab(null, function(e) {
        var t = gettabid(e);
        LPPlatform.openPopoverDialog("chooseProfile", {
            tabID: t,
            saveOptions: {
                source: a
            }
        })
    })
}

function openchangepw(e, t, a) {
    LPPlatform.openTabDialog("changePassword", {
        newPassword: e,
        domain: t,
        excluded: a
    })
}

function opensearch(e) {
    if (lploggedin) {
        var t = "home.html";
        e && "" != e && (t += "?searchstr=" + encodeURIComponent(e)), openURL(getchromeurl(t))
    } else open_login()
}

function recheckpage(e) {
    !lploggedin && e || (lploggedin ? get_selected_tab(null, function(e) {
        var t;
        sendCS(gettabid(e), {
            cmd: "recheck"
        }, "all")
    }) : open_login())
}

function refreshsites() {
    cleardeccache(), get_accts()
}

function clearAllData() {
    var e = opendb();
    createDataTable(e), e && (g_indexeddb ? e.transaction("LastPassData", "readwrite").objectStore("LastPassData").clear() : e.transaction(function(e) {
        e.executeSql("DELETE FROM LastPassData", [], function(e, t) {
            console_log("DESTROYING LastPassData Table")
        }, function(e, t) {
            console_log(t)
        })
    }))
}

function strEndsWith(e, t) {
    return e.match(t + "$") == t
}

function clearCache(e, t, a, r) {
    if (void 0 === t && (t = !0), void 0 === a && (a = !0), a && lplog("clearCache : clearing otp"), null != g_username && "" != g_username) {
        if (!LPISLOC) {
            if ("undefined" != typeof localStorage) {
                t && (localStorage_removeItem("lp.uid"), localStorage_removeItem(db_prepend(g_username_hash))), localStorage_removeItem(db_prepend(g_username_hash + "_lt.cac"));
                for (var n = 0; n < localStorage.length; n++) {
                    var i = localStorage.key(n);
                    (strEndsWith(i, ".att") || t && (strEndsWith(i, ".savedtree") || strEndsWith(i, ".sch"))) && localStorage_removeItem(localStorage.key(n))
                }
                t && (g_lp_mpw_user = localStorage.LPMPU, localStorage_removeItem("LPMPU"), localStorage_removeItem(g_lp_mpw_user + "_key_iter"), localStorage_removeItem(g_lp_mpw_user + "LPMPS"), localStorage_removeItem(g_lp_mpw_user + "LPMPH"), localStorage_removeItem(g_lp_mpw_user + "LPMPD"), localStorage_removeItem(g_lp_mpw_user + "LPMNN"), localStorage_removeItem(g_lp_mpw_user + "LPMEX"), localStorage_removeItem(g_lp_mpw_user + "LPMDD"))
            }
            have_binary_function("delete_file") && (call_binary_function("delete_file", db_prepend(g_username_hash) + "_lt.cac"), r || (call_binary_function("delete_file", db_prepend(g_username_hash) + "_lpall.slps"), call_binary_function("delete_file", db_prepend(g_username_hash) + "_lpall.lps"))), t && have_binary_function("delete_files_by_extension") && call_binary_function("delete_files_by_extension", db_prepend(g_username_hash), ".att"), lp_local_attach_version = -1
        }
        var o = {},
            s = "";
        t || (o.icons = !0, o.rsakey = !0, s += " AND type != 'icons' AND type != 'rsakey'"), a || (o.otp = !0, s += " AND type != 'otp'"), LPISLOC && (o.key = !0, o.accts = !0, s += " AND type != 'key' AND type != 'accts'"), r && (o.key = !0, s += " AND type != 'key'");
        var l = opendb();
        if (createDataTable(l), l && (g_indexeddb ? l.transaction("LastPassData", "readonly").objectStore("LastPassData").index("username_hash").openCursor(IDBKeyRange.only(g_username_hash)).onsuccess = function(e) {
                var t = e.target.result;
                t && (void 0 === o[t.value.type] && l.transaction("LastPassData", "readwrite").objectStore("LastPassData").delete(g_username_hash + "_" + t.value.type), t.continue())
            } : l.transaction(function(e) {
                e.executeSql("UPDATE LastPassData SET username_hash=? WHERE username_hash=?" + s, ["deleteme", db_prepend(g_username_hash)], function(e, t) {
                    var a = opendb();
                    createDataTable(a), a && a.transaction(function(e) {
                        e.executeSql("DELETE FROM LastPassData WHERE username_hash=?" + s, ["deleteme"], function(e, t) {}, function(e, t) {
                            console_log(t)
                        })
                    })
                }, function(e, t) {
                    console_log(t)
                })
            })), t) {
            var _ = lpreadretryfile();
            if (null != _ && 0 < _.length) {
                var c = gs("A retry file has been found. This likely means that not all of your site changes have been saved. Would you like to delete this file and potentially lose some changes?");
                (e || confirm(c)) && lpdeleteretry()
            }
        }
    }
}

function openabout() {
    (is_prebuild() || g_isdebug) && have_binary_function("debug_windows") && call_binary_function("debug_windows"), openURL(getchromeurl("about.html"))
}

function opensessions() {
    openURL(base_url + "sess.php")
}

function openmyaccount() {
    openURL(base_url + "my.php")
}

function openseccheck() {
    unlock_plug2web(), openURL(base_url + "?securitychallenge=1&lpnorefresh=1")
}

function openaddsite() {
    (g_site_data = createNewAcct()).addsite = "1", g_site_data.noreplace = "1", get_selected_tab(null, function(e) {
        g_site_data.url = gettaburl(e), openURL(getchromeurl("site.html"))
    }) || (g_site_data.url = "", openURL(getchromeurl("site.html")))
}

function openeditsite(e) {
    LPPlatform.openTabDialog("site", {
        vaultItem: e
    })
}

function openaddsecurenote() {
    lploggedin ? LPContentScriptFeatures.omaria ? LPPlatform.openTabDialog("addItem") : LPPlatform.openTabDialog("notes") : open_login(1)
}

function openeditsecurenote(e) {
    LPPlatform.openTabDialog("note", {
        vaultItem: e
    })
}

function checkforupdates() {
    g_notification_data = {
        checking: !0
    }, sendTS({
        cmd: "notification",
        type: g_notification_type = "upgrade"
    }), setTimeout(function() {
        lpMakeRequest(base_url + "upgrade.php?binary=" + (have_nplastpass() ? 1 : 0) + "&x=1&ver=" + LP.en(lpversion) + (g_issafari ? "&safarijs=1" : "") + (g_isfirefoxsdk ? "&firefox=1" : ""), "", upgrade_response, null)
    }, 250)
}

function normalizeccdate(e) {
    function t(e) {
        return e < 10 ? "0" + e : e
    }
    if (!(e instanceof Date)) {
        var a = e.split(",");
        e = [a[0], "01,", a[1]].join(""), e = new Date(e)
    }
    return e.getFullYear() + "-" + t(e.getMonth() + 1)
}

function fillitem(h, e, b, v, y, w, k) {
    if (check_ident_aid(h) && !(Object.keys(g_securenotes).indexOf(h) < 0)) {
        loglogin(h);
        var x = g_securenotes[h];
        e || !x.pwprotect && !g_prompts.view_ff_prompt ? get_selected_tab(null, function(e) {
            var t = b || gettabid(e),
                a = new Array,
                r = new Array;
            for (var n in x) "aid" == n || "notetype" == n || "pwprotect" == n || "decprofilename" == n || "name" == n ? a[n] = x[n] : (a[n] = lpmdec_acct(x[n], !0, x, g_shares), "profilelanguage" == n && void 0 !== translations[a[n]] && (r[a[n]] = translations[a[n]]));
            if (a.extra) switch (a.notetype) {
                case "Credit Card":
                    a.ccname = LP.getNoteValue("Name on Card", a.extra), a.cctype = LP.getNoteValue("Type", a.extra), a.ccnum = LP.getNoteValue("Number", a.extra), a.cccsc = LP.getNoteValue("Security Code", a.extra), a.ccstart = normalizeccdate(LP.getNoteValue("Start Date", a.extra)), a.ccexp = normalizeccdate(LP.getNoteValue("Expiration Date", a.extra));
                    break;
                case "Bank Account":
                    a.bankname = LP.getNoteValue("Bank Name", a.extra), a.bankroutingnum = LP.getNoteValue("Routing Number", a.extra), a.bankacctnum = LP.getNoteValue("Account Number", a.extra), a.bankacctnum || (a.bankacctnum = LP.getNoteValue("IBAN Number", a.extra));
                    break;
                case "Address":
                    a.title = LP.getNoteValue("Title", a.extra), a.firstname = LP.getNoteValue("First Name", a.extra), a.middlename = LP.getNoteValue("Middle Name", a.extra), a.lastname = LP.getNoteValue("Last Name", a.extra), a.username = LP.getNoteValue("Username", a.extra), a.gender = LP.getNoteValue("Gender", a.extra), a.birthday = new Date(LP.getNoteValue("Birthday", a.extra)), a.company = LP.getNoteValue("Company", a.extra), a.address1 = LP.getNoteValue("Address 1", a.extra), a.address2 = LP.getNoteValue("Address 2", a.extra), a.address3 = LP.getNoteValue("Address 3", a.extra), a.city = LP.getNoteValue("City / Town", a.extra), a.county = LP.getNoteValue("County", a.extra), a.state = LP.getNoteValue("State", a.extra), a.zip = LP.getNoteValue("Zip / Postal Code", a.extra);
                    var i = all_countries.find(function(e) {
                        return e.cc2l === LP.getNoteValue("Country", a.extra)
                    });
                    i && (a.country = i.cc2l, a.country_cc3l = i.cc3l, a.country_name = i.name), a.timezone = LP.getNoteValue("Timezone", a.extra), a.email = LP.getNoteValue("Email Address", a.extra);
                    var o = LP.getNoteValue("Phone", a.extra, null, !0);
                    a.phone = o.num, a.phone3lcc = o.cc3l, a.phoneext = o.ext;
                    var s = LP.getNoteValue("Evening Phone", a.extra, null, !0);
                    a.evephone = s.num, a.evephone3lcc = s.cc3l, a.evephoneext = s.ext;
                    var l = LP.getNoteValue("Mobile Phone", a.extra, null, !0);
                    a.mobilephone = l.num, a.mobilephone3lcc = l.cc3l, a.mobilephoneext = l.ext;
                    var _ = LP.getNoteValue("Fax", a.extra, null, !0);
                    a.fax = _.num, a.fax3lcc = _.cc3l, a.faxphoneext = _.ext;
                    break;
                case "Social Security":
                    a.ssn = LP.getNoteValue("Number", a.extra), a.ssnname = LP.getNoteValue("Name", a.extra);
                    break;
                default:
                    if ("Custom_" === a.notetype.substring(0, 7))
                        for (var c = a.extra.split(/\n/), g = 0, d = 0; d < c.length; d++) {
                            var p = c[d].split(/:/);
                            "NoteType" !== p[0] && ("Language" === p[0] ? a.profilelanguage = p[1] : (a["custom_field" + g] = {
                                cfid: g,
                                text: p[0],
                                value: p[1],
                                alttext: ""
                            }, g++))
                        }
            }
            void 0 === r["en-US"] && (r["en-US"] = translations["en-US"]);
            var u = LPJSON.stringify(a);
            null == y && (y = !1), sendCS(t, {
                cmd: "fillform",
                toformfill: u,
                translations: LPJSON.stringify(translations),
                fromiframe: v,
                xdomasked: y
            }, "all");
            var f = document.createElement("a");
            f.href = e.url;
            var m = f.hostname;
            logformfill(h, m, w, null, a.notetype, k)
        }) : get_selected_tab(null, function(e) {
            var t = b || gettabid(e);
            security_prompt(function() {
                fillitem(h, !0, t, v, y, w, k)
            })
        })
    }
}

function fillform(d, e, p, u, f, m, h) {
    if (check_ident_ffid(d) && (!u || check_ident_ffid(u))) {
        for (var b = 0; b < g_formfills.length && g_formfills[b].ffid != d; b++);
        if (b != g_formfills.length) {
            var v;
            if (u) {
                for (v = 0; v < g_formfills.length && g_formfills[v].ffid != u; v++);
                if (v == g_formfills.length) return
            }
            e || !(g_formfills[b].pwprotect || u && g_formfills[v].pwprotect || g_prompts.view_ff_prompt) ? get_selected_tab(null, function(e) {
                var t = p || gettabid(e),
                    a = g_formfills[b],
                    r = u ? g_formfills[v] : null,
                    n = new Array,
                    i = new Array;
                for (var o in a)
                    if ("ffid" == o || "profiletype" == o || "pwprotect" == o || "creditmon" == o || "decprofilename" == o || "group" == o || "sharefolderid" == o) n[o] = a[o];
                    else if ("custom_fields" == o) {
                    n[o] = new Array;
                    for (var s = 0; s < a[o].length; s++) {
                        var l = "custom_field" + s;
                        n[l] = new Array, n[l].cfid = a[o][s].cfid, n[l].text = lpmdec_acct(a[o][s].text, !0, a, g_shares), n[l].value = lpmdec_acct(a[o][s].value, !0, a, g_shares), n[l].alttext = lpmdec_acct(a[o][s].alttext, !0, a, g_shares)
                    }
                } else u && 0 == o.indexOf("cc") ? n[o] = lpmdec_acct(r[o], !0, r, g_shares) : (n[o] = lpmdec_acct(a[o], !0, a, g_shares), "profilelanguage" == o && void 0 !== translations[n[o]] && (i[n[o]] = translations[n[o]]));
                void 0 === i["en-US"] && (i["en-US"] = translations["en-US"]);
                var _ = LPJSON.stringify(n);
                null == m && (m = !1), sendCS(t, {
                    cmd: "fillform",
                    toformfill: _,
                    translations: LPJSON.stringify(translations),
                    fromiframe: f,
                    xdomasked: m
                }, "all");
                var c = document.createElement("a");
                c.href = e.url;
                var g = c.hostname;
                logformfill(d, g, h, n.profilelanguage, n.notetype)
            }) : get_selected_tab(null, function(e) {
                var t = p || gettabid(e);
                security_prompt(function() {
                    fillform(d, !0, t, u, f, m, h)
                })
            })
        }
    }
}

function getacceptabletlds(e) {
    var t = lp_gettld_url(e),
        a = t,
        r = null;
    if (void 0 !== g_equivalentdomains[t] && (r = g_equivalentdomains[t]), r)
        for (var n in g_equivalentdomains) n == r && (a += "," + g_equivalentdomains[n]);
    return a
}

function fillcurrent(a, e, r) {
    e || !g_sites[a].pwprotect && !g_prompts.login_site_prompt ? get_selected_tab(null, function(e) {
        var t;
        sendCS(r || gettabid(e), {
            cmd: "fillcurrent",
            password: getpasswordfromacct(g_sites[a]),
            domains: getacceptabletlds(g_sites[a].url)
        }, "all")
    }) : get_selected_tab(null, function(e) {
        var t = r || gettabid(e);
        security_prompt(function() {
            fillcurrent(a, !0, t)
        })
    })
}

function openbaseurl(e) {
    g_isfirefoxsdk ? setTimeout(function() {
        openURL(base_url + e)
    }, 0) : openURL(base_url + e)
}

function addprofile(e, t) {
    if (lploggedin) {
        var a = {
            defaultData: {
                profiletype: 0
            }
        };
        t && (a.saveOptions = {
            source: t
        }), LPPlatform.openTabDialog("formFill", a)
    } else open_login(1)
}

function addcreditcard(e, t) {
    if (lploggedin) {
        var a = {
            defaultData: {
                profiletype: 1
            }
        };
        t && (a.saveOptions = {
            source: t
        }), LPPlatform.openTabDialog("formFill", a)
    } else open_login(1)
}

function editprofile(e, t, a) {
    if (lploggedin) {
        var r = {
            vaultItem: e
        };
        a && (r.saveOptions = {
            source: a
        }), LPPlatform.openTabDialog("formFill", r)
    } else open_login(1)
}

function clearforms(n) {
    get_selected_tab(null, function(e) {
        var t;
        sendCS(gettabid(e), {
            cmd: "clearforms"
        }, "all");
        var a = document.createElement("a");
        a.href = e.url;
        var r = a.hostname;
        logclearform(r, n)
    })
}

function lostkey() {
    openURL(base_url + "lostkey.php?cmd=sendemail&username=" + en(g_username))
}

function googleauthlostkey() {
    openURL(base_url + "lostkey.php?cmd=sendemail&username=" + en(g_username) + "&type=googleauth")
}

function securityquestionlostkey() {
    var e = securityquestion_getdata("reseturl");
    openURL(e && "" != e ? e : base_url + "lostkey.php?cmd=sendemail&username=" + en(g_username) + "&type=securityquestion")
}

function sesamelostkey() {
    openURL(base_url + "sesamedisable.php?cmd=sendemail&username=" + en(g_username))
}

function gridlostkey() {
    openURL(base_url + "griddisable.php?cmd=sendemail&username=" + en(g_username))
}

function multifactorlostkey(e) {
    openURL(base_url + "multifactordisable.php?cmd=sendemail&username=" + en(g_username) + "&type=" + en(e))
}
g_pref_tab = null;
var g_showerrorlastmsg = "",
    g_showerrorlastts = 0;

function lpshowError(e, t, a, r, n, i, o, s, l, _) {
    g_hidecreate && (r = !1), g_notification_type = "error";
    var c = e;
    e = (e = gs(e)).replace(/\n/g, "<br/>"), g_notification_data = {
        msg: e,
        showFeedback: t,
        showLogin: a,
        showCreateAccount: r,
        multifactor_disable_url: n,
        yellow: i,
        custombutton: o,
        customaction: s,
        showStartTrial: l
    }, sendTS({
        cmd: "notification",
        type: "error"
    }), void 0 !== _ && _ || setTimeout(function() {
        get_selected_tab(null, function(e) {
            sendCS(gettabid(e), {
                cmd: "showerrornotification",
                text: gs(c).replace(/\n/g, " "),
                do_40notify: g_40notify,
                notificationdata: g_notification_data
            })
        })
    }, 100), g_safari_error_notifications && g_can_open_popover || !g_issafari || (g_showerrorlastmsg != e || 3e3 < (new Date).getTime() - g_showerrorlastts) && (g_showerrorlastmsg = e, g_showerrorlastts = (new Date).getTime(), alert(gs(c)), g_showerrorlastts = (new Date).getTime()), console_log(e)
}

function launch(e, t) {
    if (is_application(e)) g_is_win && have_binary() ? lpnp_notify("launch", {
        data0: LP.get_appaid(e)
    }) : editAid(e, null, t);
    else if (is_formfill(e)) fillform(LP.get_ffid(e));
    else if (check_ident_aid(e)) {
        var r = get_record(e);
        if (r)
            if (r.sn) editAid(e);
            else {
                var a = r.pwprotect;
                if (t || !a && !g_prompts.login_site_prompt) {
                    var n = r.url;
                    n.match(/^[a-z]+?\:\/\//i) || (n = "http://" + n), g_last_launch[r.aid] = (new Date).getTime(), g_pending_launch = r.aid, openURL(n, function(e, t) {
                        var a = gettabid(e);
                        g_launch_site_tracking_enabled && SiteLaunchObserver.startLaunchSite(a, r), g_launches[a] = t
                    }, r.aid)
                } else a ? security_prompt(function() {
                    launch(e, !0)
                }, null, null, !0, e, !1) : security_prompt(function() {
                    launch(e, !0)
                })
            }
    }
}
var singlefactor_reprompt = function() {
        var n = function(e, a, r, n) {
            if (g_prompts.multifactor_reprompt || LPISUPEK) {
                var t = multifactor_getdata("password_offline"),
                    i;
                if (t && "" != t)
                    if ("trueapi" == multifactor_getdata("type") && have_binary_function("trueapi_get_hash")) return void call_binary_function("trueapi_get_hash", g_username, function(e) {
                        hash_check != e ? a() : r()
                    });
                if ((LPISUPEK || "vtapi" == e) && have_binary_function("lpvt_verify_user")) return void call_binary_function("lpvt_verify_user", "", gs("Swipe finger"), gs("Swipe your finger on the fingerprint sensor"), gs("Cancel"), gs("Swipe current user's finger"), function(e) {
                    if ("" != e) {
                        var t = e.split("|");
                        if (2 == t.length && null != g_local_key && "" != g_local_key && g_local_key == make_lp_key_iterations(fix_username(decodeURIComponent(t[0])), decodeURIComponent(t[1]), get_key_iterations(fix_username(decodeURIComponent(t[0]))))) return void r()
                    }
                    LPISUPEK && LPISLOC ? "function" == typeof n && n() : a()
                });
                if ("validity" == e && have_binary_function("validity_verify_user")) return void call_binary_function("validity_verify_user", "", gs("Swipe finger"), gs("Swipe your finger on the fingerprint sensor"), gs("Cancel"), function(e) {
                    if ("" != e) {
                        var t = e.split("|");
                        if (2 == t.length && null != g_local_key && "" != g_local_key && g_local_key == make_lp_key_iterations(fix_username(decodeURIComponent(t[0])), decodeURIComponent(t[1]), get_key_iterations(fix_username(decodeURIComponent(t[0]))))) return void r()
                    }
                    a()
                });
                if ("winbio" == e && have_binary_function("winbio_verify_user")) return void call_binary_function("winbio_verify_user", "", gs("Swipe finger"), gs("Swipe your finger on the fingerprint sensor"), gs("Cancel"), function(e) {
                    if ("" != e) {
                        var t = e.split("|");
                        if (2 == t.length && null != g_local_key && "" != g_local_key && g_local_key == make_lp_key_iterations(fix_username(decodeURIComponent(t[0])), decodeURIComponent(t[1]), get_key_iterations(fix_username(decodeURIComponent(t[0]))))) return void r()
                    }
                    a()
                });
                if ("nymi" == e && have_binary_function("nymi_validate")) return void call_binary_function("nymi_validate", function(e) {
                    if ("" != e) {
                        var t = e.split("|");
                        if (2 == t.length && null != g_local_key && "" != g_local_key && g_local_key == make_lp_key_iterations(fix_username(decodeURIComponent(t[0])), decodeURIComponent(t[1]), get_key_iterations(fix_username(decodeURIComponent(t[0]))))) return void r()
                    }
                    a()
                })
            }
            FederatedLogin.isFederated(g_username, function(e) {
                e ? FederatedLogin.getPassword(g_username, function(e) {
                    null == g_local_key || "" == g_local_key || g_local_key != make_lp_key_iterations(fix_username(g_username), e, get_key_iterations(fix_username(g_username))) ? n() : r()
                }, function(e) {
                    n(e)
                }) : a()
            }, function(e) {
                n(e)
            })
        };
        return function(t, a, r) {
            getsinglefactortype(function(e) {
                n(e, t, a, r)
            })
        }
    }(),
    security_prompt = function() {
        var o = function(e, t, a, r, n, i) {
            var o = lpGetPref("reprompttime", 0),
                s = (new Date).getTime(),
                l = get_record(n);
            if (s > get_last_reprompt_time() && s - get_last_reprompt_time() <= 1e3 * o && !needs_secure_reprompt(l)) e();
            else {
                if (g_isfirefoxsdk) {
                    var _ = e,
                        c = g_tabs.activeTab;
                    e = function() {
                        _(), c.activate()
                    }
                }
                reprompt_callback = g_reprompt_callback = e, g_reprompt_error_callback = t, r = !1, l && l.pwprotect && needs_secure_reprompt(l) && (r = !0), LPPlatform.openTabDialog("reprompt")
            }
        };
        return function(e, t, a, r, n, i) {
            a ? o(e, t, a, r, n, i) : singlefactor_reprompt(function() {
                o(e, t, a, r, n, i)
            }, e, t)
        }
    }();

function get_identity_param() {
    return "&iid=" + LP.en(g_identity)
}

function add_ident_aid(e) {
    if ("" != g_identity) {
        for (var t = 0; t < g_identities.length && g_identities[t].iid != g_identity; t++);
        if (!(t >= g_identities.length)) {
            var a = g_identities[t];
            "" != a.aids && (a.aids += ","), a.aids += e, a.aidarr = a.aids.split(",")
        }
    }
}

function add_ident_ffid(e) {
    if ("" != g_identity) {
        for (var t = 0; t < g_identities.length && g_identities[t].iid != g_identity; t++);
        if (!(t >= g_identities.length)) {
            var a = g_identities[t];
            "" != a.ffids && (a.ffids += ","), a.ffids += e, a.ffidarr = a.ffids.split(",")
        }
    }
}

function check_ident_aid(e) {
    if ("" == g_identity) return !0;
    for (var t = 0; t < g_identities.length && g_identities[t].iid != g_identity; t++);
    if (t >= g_identities.length) return !1;
    var a = g_identities[t];
    return void 0 === a.aidarr && (a.aidarr = a.aids.split(",")), lp_in_array(e, a.aidarr)
}

function check_ident_appaid(e) {
    if ("" == g_identity) return !0;
    for (var t = 0; t < g_identities.length && g_identities[t].iid != g_identity; t++);
    if (t >= g_identities.length) return !1;
    var a = g_identities[t];
    return void 0 === a.appaidarr && (a.appaidarr = a.appaids.split(",")), lp_in_array(e, a.appaidarr)
}

function check_ident_ffid(e) {
    if ("" == g_identity) return !0;
    for (var t = 0; t < g_identities.length && g_identities[t].iid != g_identity; t++);
    if (t >= g_identities.length) return !1;
    var a = g_identities[t];
    return void 0 === a.ffidarr && (a.ffidarr = a.ffids.split(",")), lp_in_array(e, a.ffidarr)
}

function switch_identity(e, t, a, r, n) {
    if (e != g_identity && void 0 !== e) {
        var i = !1;
        if ("" != e) {
            for (var o = 0; o < g_identities.length; o++)
                if (g_identities[o].iid == e) {
                    g_identities[o].pw_prompt && (i = !0);
                    break
                } if (o >= g_identities.length) return
        } else
            for (var o = 0; o < g_identities.length; o++)
                if (g_identities[o].pw_prompt) {
                    i = !0;
                    break
                } if (!t && (i || g_prompts.switch_identity_prompt)) return n && closePop(), void security_prompt(function() {
            switch_identity(e, !0)
        });
        g_identity = "" + e, r || lpnp_notify("switchidentity", {
            data0: g_identity
        }), lpPutUserPref("identity", g_identity), lpWriteAllPrefs(), a || refresh_windows(), update_menus(!0)
    }
}

function add_identity() {
    unlock_plug2web(), openURL(base_url + "?ac=1&addidentity=1")
}

function setup_poll_timer() {
    setTimeout(function() {
        poll_server()
    }, 6e4)
}

function compare_tlds(e, t) {
    return "string" == typeof e && ("string" == typeof t && ((e = e.toLowerCase()) == (t = t.toLowerCase()) || void 0 !== g_equivalentdomains[e] && void 0 !== g_equivalentdomains[t] && g_equivalentdomains[e] == g_equivalentdomains[t]))
}
var LP = this;

function lpreadretry() {
    return "undefined" == typeof localStorage ? null : localStorage_getItem(db_prepend(g_username_hash + ".retry"));
    var e
}

function lpdeleteretry() {
    if ("undefined" == typeof localStorage) return null;
    localStorage_removeItem(db_prepend(g_username_hash + ".retry"))
}

function lpwriteretry(e) {
    return "" != g_username_hash && null != g_username_hash && ("undefined" != typeof localStorage && !!localStorage_setItem(db_prepend(g_username_hash + ".retry"), e))
}

function getuuid(t, a) {
    if (LPISLOC) t("");
    else if ("undefined" != typeof localStorage) try {
        var r = function(e) {
            try {
                return e = JSON.parse(e), a ? (e[a] && "" != e[a] || (e[a] = lpCreatePass(32, 1, 1, 1, 1, 1, 1, 1), setuuid(e[a], a)), e[a]) : e
            } catch (e) {
                return console.log(e), ""
            }
        };
        if (have_binary_function("read_file")) call_binary_function("read_file", db_prepend("lp.suids"), function(e) {
            e ? unprotect_data(e, !0, function(e) {
                t(r(e))
            }) : call_binary_function("read_file", db_prepend("lp.suid"), function(e) {
                e ? unprotect_data(e, !0, t) : g_is_win ? call_binary_function("read_file", db_prepend("lp.uid"), function(e) {
                    e && setuuid(e), t(e)
                }) : t("")
            })
        });
        else {
            var e = localStorage_getItem(db_prepend("lp.uids"));
            e = e ? r(e) : localStorage_getItem(db_prepend("lp.uid")), t(e)
        }
    } catch (e) {
        console_log("Error in getuuid: " + e), t("")
    } else t("")
}

function setuuid(t, a, r) {
    (t || r) && (a && getuuid(function(e) {
        "object" != typeof e && (e = {}), "" == t && r ? delete e[a] : e[a] = t, e = JSON.stringify(e), have_binary_function("write_file") ? protect_data(e, !0, null, function(e) {
            call_binary_function("write_file", db_prepend("lp.suids"), e)
        }) : localStorage_setItem(db_prepend("lp.uids"), e)
    }), have_binary_function("write_file") ? protect_data(t, !0, null, function(e) {
        call_binary_function("write_file", db_prepend("lp.suid"), e)
    }) : localStorage_setItem(db_prepend("lp.uid"), t))
}

function clearuuid(e) {
    e ? setuuid("", e, !0) : (delete_file("lp.suid"), delete_file("lp.uid"), "undefined" != typeof localStorage && localStorage_removeItem("lp.uid"))
}
var lperrorcount = 0;

function lpReportError(e, t) {
    var a = e;
    if (0 != g_prompts.improve && !(100 < ++lperrorcount)) {
        var r = a.match(/^(.*)location:\s+/);
        r && (a = r[1]);
        var n = "";
        g_ischrome ? n = "chrome" : g_issafari ? n = "safari" : g_isfirefoxsdk ? n = "firefoxsdk" : g_isfirefox && (n = "firefox");
        var i = "msg=cr() " + n + " lp(" + lpversion + ") errors(" + lperrorcount + "): " + LP.en(a);
        lpMakeRequest(base_url + "error.php?", i, null, null)
    }
}

function lpatob(e) {
    return atob(e)
}

function lpbtoa(e) {
    return btoa(e)
}

function lpGetCurrentWindow() {
    return window
}

function bin2hex(e) {
    return AES.bin2hex(e)
}

function url2hex(e) {
    return AES.url2hex(e)
}

function hex2url(e) {
    return AES.hex2url(e)
}

function hex2bin(e) {
    return AES.hex2bin(e)
}

function lp_hex2bin(e) {
    return AES.hex2bin(e)
}
var lastopenauthwin = 0,
    mpw_num_sites, mpw_retval;

function ismultifactortaburl(e) {
    return -1 != e.indexOf("browseraction=1&yubikey=1") || -1 != e.indexOf("browseraction=1&googleauth=1") || -1 != e.indexOf("browseraction=1&outofband=1") || -1 != e.indexOf("browseraction=1&securityquestion=1") || -1 != e.indexOf("browseraction=1&sesame=1") || -1 != e.indexOf("browseraction=1&grid=1")
}

function getLanguage() {
    var e = "en-US",
        t = localStorage_getItem("language_" + g_username_hash) ? JSON.parse(localStorage_getItem("language_" + g_username_hash)).language : null,
        a = localStorage_getItem("loggedOutLanguage") || null,
        r = lpGetPref("language", ""),
        n = g_ischrome && "undefined" != typeof chrome ? chrome.i18n.getUILanguage() : null;
    return t ? e = t : a ? e = a : r ? e = r : n ? e = n : navigator.language && (e = navigator.language), e = transformLocaleCode(e)
}

function openURL(n, i, o, e, t, a, r, s) {
    if (n)
        if (n.startsWith("http://") || n.startsWith("https://") || n.startsWith("ssh://") || n.startsWith("ftp://") || ischromeurl(n)) {
            if ("undefined" != typeof Preferences && Preferences.get("htmlindialog") && ischromeurl(n) && -1 == n.indexOf(VAULT_PAGE)) {
                if (g_isfirefoxsdk && "undefined" != typeof g_panel) {
                    var l = 800,
                        _ = 600; - 1 != n.indexOf("site.html") && (g_window_before_dialog = g_window_utils.getMostRecentBrowserWindow()), n += (-1 == n.indexOf("?") ? "?" : "&") + "lpindialog=1";
                    var c = "chrome,centerscreen,titlebar,resizable,scrollbars,screenX=0,screenY=0,width=800,height=600";
                    return void setTimeout(function() {
                        (g_firefox_html_dialog = g_window_utils.openDialog({
                            features: c
                        })).addEventListener("load", function() {
                            g_tabs.activeTab.url = n
                        })
                    }, 0)
                }
                if (g_ischrome) return void LPPlatform.openDialogWindow({
                    url: n,
                    loadHandler: i
                })
            }
            var g = !1;
            if (g_isfirefoxsdk) {
                var d = getcurrenturl();
                if (ischromeurl(d) && -1 != d.indexOf("lpindialog=1")) {
                    if (!r) return g_tabs.activeTab.close(), void setTimeout(function() {
                        openURL(n, i, o, e, t, a, r)
                    }, 100);
                    g = e = t = !0
                }
            }
            if (void 0 === t && (t = !1), void 0 === e && (e = !1), void 0 === a && (a = !1), void 0 === s && (s = !1), 0 == n.indexOf(base_url)) n += -1 == n.indexOf("?") ? "?" : "&", n += "lang=" + LP.en(getLanguage());
            else if (n == g_forgotpwurl || n == g_helpurl) {
                n += -1 == n.indexOf("?") ? "?" : "&";
                var p = getLanguage();
                p && (n += "lang=" + LP.en(g_useshortlang ? p.substring(0, 2) : p))
            }
            var u = "";
            "", get_selected_tab(null, function(e) {
                g_selectedtabid = gettabid(e), g_selectedtab = e
            }), 0 < n.indexOf("sesameusername") && get_all_windows({
                populate: !0
            }, function(e) {
                for (var t = [], a = e.length - 1; 0 <= a; --a)
                    for (var r = get_tabs_length(e[a]) - 1; 0 <= r; --r) {
                        var n = gettaburl(get_tabs(e[a])[r]);
                        n && lp_url_is_lastpassext(n) && close_tab(get_tabs(e[a])[r])
                    }
            });
            var f = !1;
            if (ismultifactortaburl(n)) lastopenauthwin = (new Date).getTime();
            else if (-1 != n.indexOf(VAULT_PAGE)) {
                var m;
                (new Date).getTime() - 1e3 < lastopenauthwin && (f = !0)
            }
            i = i || function(e) {};
            var h = lpGetPref("openpref", "tabs");
            "same" != h || !e && 6 != n.indexOf("-extension://") && 0 != n.indexOf("javascript:") || (h = "tabs"), "windows" == h && t && (h = "tabs"), g_isfirefoxsdk && g && (null == typeof g_window_before_dialog || g_window_before_dialog.closed) && (h = "windows");
            var b = getcurrenturl();
            if (b && 0 == b.indexOf(getchromeurl("launch.html", !0)) && (h = "same"), g_issafari_appext) {
                function v(t, a) {
                    function e(e) {
                        return -1 < e.indexOf("securitychallenge=1")
                    }

                    function r(e) {
                        return -1 < e.indexOf("import.php")
                    }

                    function n(e) {
                        return -1 < e.indexOf("company/#/dashboard")
                    }

                    function i(e) {
                        return -1 < e.indexOf("family/#/users/")
                    }
                    e(t) || r(t) || n(t) || i(t) ? LPServer.lmiapi.jsonRequest({
                        url: "lmiapi/token/session-sync",
                        success: function(e) {
                            n(t) ? t = base_url + "admin_console_redirect.php" : i(t) && (t = base_url + "family_console_redirect.php"), t += -1 == t.indexOf("?") ? "?" : "&", t += "token=" + e.token, a(t)
                        }
                    }) : a(t)
                }
                v(n, function(e) {
                    "same" === h ? LPPlatform.openSame({
                        url: e,
                        inactive: a,
                        loadHandler: function(e) {
                            i(e.tabDetails, o)
                        }
                    }) : "windows" === h ? LPPlatform.openWindow({
                        url: e,
                        inactive: a,
                        loadHandler: function(e) {
                            i(e.tabDetails, o)
                        }
                    }) : LPPlatform.openTab({
                        url: e,
                        inactive: a,
                        loadHandler: function(e) {
                            i(e.tabDetails, o)
                        }
                    })
                })
            } else if ("same" == h) {
                if (g_ischrome) get_selected_tab(null, function(e) {
                    chrome.tabs.update(e.id, {
                        url: n
                    }, function(e) {
                        L("call openURL:loadurl with " + n), i(e, o)
                    })
                });
                else if (g_issafari) {
                    var y = safari.application.activeBrowserWindow.activeTab;
                    i(y, o), y.url = n
                } else if (g_isfirefoxsdk) {
                    var y = g_tabs.activeTab,
                        w = function(e) {
                            i(e, o), e.removeListener("ready", w)
                        };
                    y.on("ready", w), y.url = n
                }
            } else if ("windows" == h)
                if (g_ischrome) chrome.windows.create({
                    url: n
                }, function(e) {
                    0 < e.tabs.length && i(e.tabs[0], o)
                });
                else if (g_issafari) {
                var y = safari.application.openBrowserWindow().activeTab;
                i(y, o), y.url = n
            } else g_isfirefoxsdk && g_windows.browserWindows.open({
                url: n,
                onOpen: function(e) {
                    if (void 0 === e.lponreadydone && (e.lponreadydone = !0, 0 < e.tabs.length)) {
                        var t = function(e) {
                            i(e, o), e.removeListener("ready", t)
                        };
                        e.tabs[0].on("ready", t)
                    }
                }
            });
            else {
                var k = !f;
                if (g_ischrome) {
                    var x = {
                        url: n,
                        active: !a
                    };
                    is_firefox_webext() || (x.selected = k), s ? chrome.windows.getAll(null, function(e) {
                        var t, a = e.filter(function(e) {
                                return !e.incognito
                            }),
                            r = a.find(function(e) {
                                return e.focused
                            });
                        (t = r || a[0] || null) ? (x.windowId = t.id, x.active = !0, chrome.tabs.create(x, function(e) {
                            t.focused || g_isedge ? i(e, o) : chrome.windows.update(t.id, {
                                focused: !0
                            }, function() {
                                i(e, o)
                            })
                        })) : chrome.windows.create({
                            url: n,
                            incognito: !1
                        }, function() {
                            chrome.tabs.getCurrent(function(e) {
                                i(e, o)
                            })
                        })
                    }) : chrome.tabs.create(x, function(e) {
                        i(e, o)
                    })
                } else if (g_issafari) {
                    var P = f ? "background" : "foreground";
                    a && (P = "background");
                    var y = safari.application.activeBrowserWindow.openTab(P);
                    i(y, o), y.url = n
                } else if (g_isfirefoxsdk)
                    if (g) {
                        var y = g_model_core.modelFor(g_tabs_utils.openTab(g_window_before_dialog, n, {
                            inBackground: a
                        }));
                        i(y, o)
                    } else setTimeout(function() {
                        var t = function(e) {
                            i(e, o), e.removeListener("ready", t)
                        };
                        g_tabs.open({
                            url: n,
                            inBackground: a,
                            onReady: t
                        })
                    }, 0)
            }
        } else console.log("refusing to open unsafe url: " + n)
}

function copyusername(e, t, a) {
    if (!lploggedin) return !1;
    var r = get_record(e);
    return null !== r && (!(t && a && !check_for_frame_mismatch_ok(a, t, gs("Are you sure you would like to copy your LastPass site's username to the clipboard?"), "copyusername")) && copytoclipboard(getusernamefromacct(r)))
}

function copypassword(e, t, a, r) {
    if (!lploggedin) return !1;
    var n = get_record(e);
    return null !== n && (!(a && r && !check_for_frame_mismatch_ok(r, a, gs("Are you sure you would like to copy your LastPass site's password to the clipboard?"), "copypassword")) && (null != n.sharedfromaid && "" != n.sharedfromaid && "0" != n.sharedfromaid && "null" != n.sharedfromaid ? (alertfrombg(gs("This is a shared site. You are not permitted to view the password.")), !1) : !t && (n.pwprotect || g_prompts.view_pw_prompt || g_prompts.login_site_prompt) ? (security_prompt(function() {
        copypassword(e, !0, a, r)
    }), !1) : copytoclipboard(getpasswordfromacct(n))))
}

function copyurl(e, t, a) {
    if (!lploggedin) return !1;
    var r = get_record(e);
    return null !== r && (!(t && a && !check_for_frame_mismatch_ok(a, t, gs("Are you sure you would like to copy your LastPass site's URL to the clipboard?"), "copyurl")) && copytoclipboard(geturlfromacct(r)))
}

function copynote(e, t, a) {
    var r = get_record(e),
        n, i;
    t || !r.pwprotect && !g_prompts.edit_sn_prompt ? (issharedfolder(g_shares, r.group) && loglogin(get_record_id(r)), copytoclipboard(void 0 !== r.extra ? lpmdec_acct(r.extra, !0, r, g_shares) : "")) : security_prompt(function() {
        copynote(e, !0)
    })
}

function copyprop(e, t, a, r, n, i) {
    var o = get_record(e);
    if (a || !o.pwprotect && !g_prompts.edit_sn_prompt) {
        var s = void 0 !== o.extra ? lpmdec_acct(o.extra, !0, o, g_shares) : "",
            l = LP.getNoteValue(t, s);
        i && (l = (l = JSON.parse(l))[i]), copytoclipboard(l)
    } else security_prompt(function() {
        copyprop(e, t, !0, r, n, i)
    })
}

function refresh_windows(e) {
    var n = !1;
    void 0 !== e && e && (n = !0), g_issafari && g_hidemenubar && g_can_open_popover && toggle_menu(!0), get_all_windows({
        populate: !0
    }, function(e) {
        for (var t = 0; t < e.length; t++)
            for (var a = 0; a < get_tabs_length(e[t]); a++)
                if (lp_url_is_lastpass(gettaburl(get_tabs(e[t])[a]), !0) && (-1 == gettaburl(get_tabs(e[t])[a]).indexOf("lpnorefresh=1") || n)) {
                    var r = gettaburl(get_tabs(e[t])[a]);
                    r = (r = r.replace("&nk=1", "")).replace("&showdeleted=1", ""), L("refresh_windows() loadurl url:" + r), sendCS(gettabid(get_tabs(e[t])[a]), {
                        cmd: "loadurl",
                        url: r
                    })
                }
    })
}

function clear_all_filled_fields() {
    get_all_windows({
        populate: !0
    }, function(e) {
        for (var t = 0; t < e.length; t++)
            for (var a = 0; a < get_tabs_length(e[t]); a++) sendCS(gettabid(get_tabs(e[t])[a]), {
                cmd: "clearfilledfields"
            }, "all")
    })
}

function closeallnotifications(r, n) {
    void 0 === r && (r = !1), void 0 === n && (n = !1), get_all_windows({
        populate: !0
    }, function(e) {
        for (var t = 0; t < e.length; t++)
            for (var a = 0; a < get_tabs_length(e[t]); a++) sendCS(gettabid(get_tabs(e[t])[a]), {
                cmd: "closenotification",
                includeerror: r,
                excludeother: n
            })
    })
}

function recheckall() {
    L("BG : recheckall()"), get_all_windows({
        populate: !0
    }, function(e) {
        for (var t = 0; t < e.length; t++)
            for (var a = 0; a < get_tabs_length(e[t]); a++) sendCS(gettabid(get_tabs(e[t])[a]), {
                cmd: "recheck"
            }, "all")
    }), setprefs("all", "all")
}

function closecurrenttab(r) {
    if (get_selected_tab(null, function(e) {
            if ("" != r) {
                var t = gettaburl(e),
                    a = getchromeurl(r, !0);
                if (-1 == t.indexOf(a) && -1 == t.indexOf(punycode.URLToASCII(a)) && -1 == t.indexOf(base_url + "/" + r)) return
            }
            close_tab(e), select_selectedtabid()
        }), g_isfirefoxsdk && g_firefox_html_panel) {
        if ("" != r && -1 == g_firefox_html_panel.url.indexOf(r)) return;
        g_firefox_html_panel.destroy(), g_firefox_html_panel = null
    }
}

function MPWNoNag() {
    confirm(gs("Are you sure you do not want LastPass to tell you when your Master Password is at risk?")) && (localStorage_setItem(g_lp_mpw_user + "LPMNN", 1), g_lp_mpw_nonag = !0)
}

function addDomainToMPWNever() {
    confirm(gs("Disable LastPass Master Password risk warning on this site?")) && (g_lp_mpw_exclude[g_lp_mpw_bad_url] = 1, localStorage_setItem(g_lp_mpw_user + "LPMEX", JSON.stringify(g_lp_mpw_exclude)))
}

function mpw_checkVault(e, t, a) {
    if (a && (mpw_num_sites = e.length, mpw_retval = ""), e.length) {
        var r = e.pop(),
            n = r.passworddec;
        "" === n ? mpw_num_sites-- : make_lp_key_hash_iterations(g_lp_mpw_salt, n, 100, function(e, t) {
            t == g_lp_loggedinhsh && ("" === mpw_retval ? mpw_retval = r.id : mpw_retval += "." + r.id), mpw_num_sites--
        })
    }
    0 !== mpw_num_sites ? setTimeout(function() {
        mpw_checkVault(e, t, !1)
    }, 0) : t(mpw_retval)
}

function fill_default_ffid(e) {
    if (lploggedin) {
        var t = lpGetPref("defaultffid", "0");
        if (check_ident_ffid(t))
            for (var a = 0; a < g_formfills.length; a++)
                if (g_formfills[a].ffid == t) return void fillform(t, null, null, null, null, null, e);
        confirm(gs("You have not yet chosen a default form fill profile.  Would you like to choose one now?")) && openprefs()
    } else open_login()
}

function setprefs(e, t, a, r) {
    var n = getInt(lpGetPref("warninsecureforms", 0)),
        i = 1 === getInt(g_cid) ? 1 : 0,
        o = getInt(lpGetPref("infieldPopupEnabled", i)),
        s = getInt(lpGetPref("dontfillautocompleteoff", 0)),
        l = getInt(lpGetPref("donotoverwritefilledfields", 0)),
        _ = getInt(lpGetPref("showGenerateNotifications", 1)),
        c = getInt(lpGetPref("showFormFillNotifications", 1)),
        g = getInt(lpGetPref("showNotificationsAfterClick", 1)),
        d = getInt(lpGetPref("alwayschooseprofilecc", 0)),
        p = getInt(lpGetPref("automaticallyFill", 1));
    g_disableautofill && lpPutUserPref("automaticallyFill", 0);
    for (var u = {
            cmd: "setprefs",
            warninsecureforms: n,
            infieldPopupEnabled: o,
            dontfillautocompleteoff: s,
            donotoverwritefilledfields: l,
            showGenerateNotifications: _,
            showFormFillNotifications: c,
            showNotificationsAfterClick: g,
            alwayschooseprofilecc: d,
            automaticallyFill: p,
            g_cpwbot: g_cpwbot,
            do_40notify: g_40notify
        }, f = 0; f < g_lp_hotkeys.length; f++) {
        var m = g_lp_hotkeys[f];
        u[m + "KeyCode"] = lpGetPref(m + "KeyCode"), u[m + "Mods"] = lpGetPref(m + "Mods")
    }
    u.do_hotkeys = !g_isfirefoxsdk || "undefined" == typeof g_ff_hotkeys, a && isSpecialSite(a) && (u.specialsite = "1");
    var h = getcsinfo(e, t),
        b = getcsinfo_top(e, t);
    if (b && (u.top_origin = b.origin, u.top_domain = b.domain), !g_cpwbot || !CPWbot_bg || null === CPWbot_bg.get_pwchangestate() || CPWbot_bg.get_okstate() || CPWbot_bg.get_failstate() || CPWbot_bg.in_bagration() || CPWbot_bg.get_pwchangetabid() != e) g_cpwbot && (u.in_cpwbot = 0);
    else {
        if (u.in_cpwbot = 1, u.docaptcha = CPWbot_bg.get_docaptchastate() ? 1 : 0, CPWbot_bg && g_CS_tops && g_CS_tops[e] == t) {
            var v = CPWbot_bg.get_last_overlay_message();
            if (v) {
                var y = {
                    msg: v
                };
                u.msg = JSON.stringify(y)
            }
        }
        CPWbot_bg.show_cpwbot_overlay(e, null, null)
    }
    if (!debug && !g_isdebug || !CPWbot_bg || !0 !== CPWbot_bg.get_failstate() && !0 !== CPWbot_bg.get_okstate() || e == CPWbot_bg.get_selenium_tabid() && (L("force result div again WTF"), !0 === CPWbot_bg.get_failstate() ? CPWbot_bg.show_selenium_fail(e) : !0 === CPWbot_bg.get_okstate() && CPWbot_bg.show_selenium_ok(e)), u.do_experimental_popupfill = do_experimental_popupfill, u.lploggedin = lploggedin, u.ff_currpass_regexp = get_ff_translation("ff_currpass_regexp"), u.ff_username_regexp = get_ff_translation("ff_username_regexp"), u.ff_loginform_regexp = get_ff_translation("ff_loginform_regexp"), u.ff_bankacctnum_regexp = get_ff_translation("ff_bankacctnum_regexp"), u.ff_email_regexp = get_ff_translation("ff_email_regexp"), u.ff_company_regexp = get_ff_translation("ff_company_regexp"), u.ff_firstname_regexp = get_ff_translation("ff_firstname_regexp"), u.ff_search_regexp = get_ff_translation("ff_search_regexp"), u.ff_captcha_regexp = get_ff_translation("ff_captcha_regexp"), u.ff_cctype_regexp = get_ff_translation("ff_cctype_regexp"), u.ff_lastname_regexp = get_ff_translation("ff_lastname_regexp"), u.ff_address1_regexp = get_ff_translation("ff_address1_regexp"), u.ff_remember_regexp = get_ff_translation("ff_remember_regexp"), u.ff_combineddummy_regexp = get_ff_translation("ff_combineddummy_regexp"), u.ff_password_regexp = get_ff_translation("ff_password_regexp"), u.ff_question_answer_regexp = get_ff_translation("ff_question_answer_regexp"), u.ff_country_regexp = get_ff_translation("ff_country_regexp"), u.ff_city_regexp = get_ff_translation("ff_city_regexp"), u.ff_forgot_regexp = get_ff_translation("ff_forgot_regexp"), u.ff_canceltxt_regexp = get_ff_translation("ff_canceltxt_regexp"), u.ff_signuptxt_regexp = get_ff_translation("ff_signuptxt_regexp"), u.ff_helptxt_regexp = get_ff_translation("ff_helptxt_regexp"), u.ff_signintxt_regexp = get_ff_translation("ff_signintxt_regexp"), a) {
        u.nevers = LPJSON.stringify(getnevers());
        var w = g_CS_tops[e];
        if (g_CS_tops && null != w && w != t) {
            var k = g_CS[e][w],
                x = gettaburl(g_CS[e][w]);
            if (!x && k && k.name && (x = punycode.URLToASCII(k.name)), x) {
                var P = getnevers();
                getnevers_given(x, P), u.nevers = LPJSON.stringify(P)
            }
        }
        var S, C = getsites(lp_gettld_url(a));
        C = reorderOnURL(C, a, !0), u.sitescount = C.length
    }
    if (r && (u.actiontlds = r), u.language_data = g_language_data, "all" == e) get_all_windows({
        populate: !0
    }, function(e) {
        for (var t = 0; t < e.length; t++)
            for (var a = 0; a < get_tabs_length(e[t]); a++) sendCS(gettabid(get_tabs(e[t])[a]), u, "all")
    }), g_generate_pw_pattern_hints = {};
    else {
        if (sendCS(e, u, t), g_cpwbot && CPWbot_bg) {
            var O = {
                cmd: "loadurl",
                docnum: t,
                tld: lp_gettld_url(a),
                url: a
            };
            CPWbot_bg.push_event_queue("loadurl", e, O)
        }
        g_generate_pw_pattern_hints[e] = null
    }
}

function get_registry_value(e, t, a, r) {
    var n = a;
    g_is_win && have_binary_function("get_registry_value") ? call_binary_function("get_registry_value", e, t, a, function(e) {
        "string" != typeof e && (e = a), r(e)
    }) : r(n)
}

function gotourl(e) {
    var t = get_record(e);
    if (t) {
        var a = geturlfromacct(t);
        "" != a && (a.match(/^[a-z]+?\:\/\//i) || (a = "http://" + a), openURL(a))
    }
}

function deleteNever(l, e) {
    var _ = void 0 !== e && e,
        t = 0;
    switch (l.type) {
        case "nevergenerates":
            t = 1;
            break;
        case "neverformfills":
            t = 2;
            break;
        case "neverautologins":
            t = 3;
            break;
        case "neverautofills":
            t = 4;
            break;
        case "nevershowicons":
            t = 6;
            break;
        case "neverenablelp":
            t = 8
    }
    var a = "delete=1&type=" + LP.en(t) + "&url=" + LP.en(l.url);
    lpMakeRequest(base_url + "add_never.php", a, function(e) {
        if (4 == e.readyState && 200 == e.status && null != e.responseXML && null != e.responseXML.documentElement) {
            var t = e.responseXML.documentElement,
                a = t.getElementsByTagName("ok"),
                r = t.getElementsByTagName("error");
            if (0 < a.length) {
                for (var n = new Array, i = 0; g_neverurls[l.type] && i < g_neverurls[l.type].length; i++) {
                    var o = g_neverurls[l.type][i];
                    o != l.url && n.push(o)
                }
                g_neverurls[l.type] = n, g_local_accts_version++, rewritelocalfile()
            } else if (r.length) {
                var s = r[0].getAttribute("message");
                s && (_ || LP.alert(s))
            }
        }
    }, function() {}, null)
}

function db_prepend(e) {
    return LPISLOC && (e = "local_" + e), e
}

function changemasterpassword() {
    setTimeout(function() {
        openbaseurl("?ac=1&opensettings=1")
    }, 100)
}

function change_master_password(e, t, a, r) {
    var n = get_key_iterations(e),
        i = make_lp_key_iterations(e, t, n),
        o = [],
        s = [],
        l = [],
        _ = [],
        c = [],
        g = getBG();
    if (!(g.reencrypt(o, g.g_sites, i) && g.reencrypt(s, g.g_securenotes, i) && g.reencrypt(l, g.g_applications, i) && g.reencrypt(_, g.g_formfills, i))) return alertfrombg(gs("An error occurred")), void(a && r && r());
    if (a) {
        var d = g.g_local_key;
        g.g_local_key = i, g.g_local_key_hex = AES.bin2hex(i), g.g_local_key_hash = SHA256(i);
        var p = flattendata(g_local_accts_version + 1, o, s, g_prompts, _, g_identities, g_equivalentdomains, g_neverurls, g_premium_exp, encecb(e), g_pendings, g_shareeautopushes, lpmaxid, g_urlrules, g_prefoverrides, g_shares, l, g_enterpriseuser, lp_attaches);
        return g.g_local_key = d, g.g_local_key_hex = AES.bin2hex(d), g.g_local_key_hash = SHA256(d), r && r(p), p
    }
    g.g_sites = o, g.g_securenotes = s, g.g_applications = l, g.g_formfills = _, g.g_local_accts_version++, g.g_local_key = make_lp_key_iterations(e, t, n), g.g_local_hash = lphash = make_lp_hash_iterations(g.g_local_key, t, n), g.g_local_key_hex = AES.bin2hex(g.g_local_key), g.g_local_key_hash = SHA256(g.g_local_key), g.g_username = e, g.g_username_hash = lpusername_hash = SHA256(e), g.rewritelocalfile(!1, !0), g.g_pwdeckey = g.g_local_key, g.lpWriteKeyFile(), g.lpnp_notify("local_pwchange", {
        data0: g_username,
        data1: t
    }), alertfrombg(gs("Password updated!")), g.closecurrenttab("")
}

function reencrypt(e, t, a) {
    for (var r in t) {
        var n = [];
        if (!reencryptArray(n, t[r], a, !1)) return !1;
        e[r] = n
    }
    return !0
}
var keystoreencrypt = ["username", "password", "extra", "profilename", "firstname", "middlename", "lastname", "email", "company", "ssn", "birthday", "address1", "address2", "city", "state", "state_name", "zip", "country", "country_cc3l", "country_name", "mobilephone", "mobilephone3lcc", "mobileext", "evephone", "evephone3lcc", "eveext", "phone", "phone3lcc", "phoneext", "fax", "fax3lcc", "faxext", "ccnum", "ccexp", "cccsc", "address3", "title", "gender", "driverslicensenum", "taxid", "bankname", "bankacctnum", "bankroutingnum", "timezone", "county", "ccstart", "ccname", "ccissuenum", "notes", "text", "alttext", "profilelanguage", "lastname2", "mobileemail", "firstname2", "firstname3", "lastname3"];

function reencryptArray(e, t, a, r) {
    try {
        for (var n in t)
            if ("object" == typeof t[n]) {
                var i = [],
                    o = "custom_fields" == n ? 2 : r || "fields" == n;
                if (!reencryptArray(i, t[n], a, o)) return !1;
                e[n] = i
            } else if (lp_in_array(n, keystoreencrypt) || "value" == n && (2 == r || r && fieldisencrypted(t))) {
            var s = lpmdec(t[n], !0);
            if ((null == s || "" == s) && null != t[n] && "" != t[n]) return !1;
            var l = lpmenc(s, !0, a);
            e[n] = l
        } else e[n] = t[n]
    } catch (e) {
        return console_error(e), !1
    }
    return !0
}

function fieldisencrypted(e) {
    for (var t in e) {
        if ("type" == t && ("password" == e[t] || "text" == e[t] || "hidden" == e[t] || "textarea" == e[t] || "email" == e[t] || "tel" == e[t])) return !0;
        if ("id" == t) return !0
    }
    return !1
}
var lpclearrecent = !1;

function clearrecent() {
    "undefined" != typeof localStorage && (localStorage_setItem(g_username_hash + "recent", lp_get_gmt_timestamp()), lpclearrecent = !0)
}

function getClearRecentTime() {
    if ("undefined" == typeof localStorage) return 0;
    var e = localStorage_getItem(g_username_hash + "recent");
    return null == e ? 0 : e
}

function getRecentCount() {
    return lpGetPref("recentUsedCount", 10)
}

function IsIconsUpdated(e) {
    return lpclearrecent ? !(lpclearrecent = !1) : g_icons_length != e
}

function upgradetoserver() {
    confirm(gs("Please note that upgrading from LastPass Local to LastPass Online will result in your password data being uploaded in its encrypted format to LastPass servers.  You will be able to access your data from anywhere, and LastPass will not be able to read it.  Would you like to continue?")) && security_prompt(function() {
        LPPlatform.openTabDialog("createAccountSimple")
    })
}

function renameGroup(e, t, a, r, n) {
    (a = a || {}).successCallback = r, a.errorCallback = n;
    var i = void 0 !== a.skipConfirm && a.skipConfirm;
    if (e != gs("favorites") && e != gs("recently usedlower")) {
        var o = issharedfolder(g_shares, e);
        if (0 == o || o.decsharename != e) {
            var s = issharedfolder(g_shares, t);
            if (checkmove(s, o) && checkreadonly(s) && checkreadonly(o)) {
                var l = 0 == s ? g_local_key : s.sharekey,
                    _ = t;
                if (s && (_ = t.substr(s.decsharename.length + 1)), !s && !o || s && o && s.id === o.id) {
                    var c = [g_sites, g_securenotes, g_applications],
                        g = [],
                        d = [],
                        p = [];
                    for (var u in c) {
                        var f = c[u];
                        for (var m in f) {
                            var h;
                            if ((h = f[m]).group == e) {
                                h.group = t, void 0 === g[e] ? d[p[p.length] = e] = get_record_id(h) : d[e] += "," + get_record_id(h);
                                var _ = t;
                                s && (_ = _.substr(s.decsharename.length + 1)), g[e] = _
                            } else if (0 == h.group.indexOf(e + "\\")) {
                                var b = h.group;
                                h.group = h.group.replace(e + "\\", t + "\\"), void 0 === g[b] ? d[p[p.length] = b] = get_record_id(h) : d[b] += "," + get_record_id(h);
                                var _ = h.group;
                                s && (_ = _.substr(s.decsharename.length + 1)), g[b] = _
                            }
                        }
                    }
                    g_local_accts_version++, rewritelocalfile(), r && r();
                    for (var v = "xml=1", y = 0; y < p.length; y++) v += "&ids" + y + "=" + LP.en(d[p[y]]) + "&newgrp" + y + "=" + LP.en(enc(g[p[y]], l));
                    v += 0 == s ? "" : "&sharedfolderid=" + en(s.id), lpMakeRequest(base_url + "groups.php", v, function() {}, function() {}, null)
                } else {
                    var w = [],
                        k = [],
                        c = [g_sites, g_securenotes, g_applications],
                        x = s ? t.substr(s.decsharename.length + 1) : "";
                    for (var u in c) {
                        var f = c[u];
                        for (var m in f) {
                            var h;
                            if ((h = f[m]).group == e || 0 == h.group.indexOf(e + "\\")) {
                                w[w.length] = get_record_id(h);
                                var P = t;
                                h.group != e && 0 < h.group.indexOf("\\") && (P = t + h.group.substr(h.group.indexOf("\\"))), k[get_record_id(h)] = P
                            }
                        }
                    }
                    moveIntoSharedFolder(s, o, w, k, !1, !1, i, a)
                }
            }
        } else alertfrombg(gs("You cannot rename a top level Shared folder"))
    }
}

function getacct(e) {
    return get_record(e)
}

function moveIntoSharedFolder(e, t, h, a, r, n, i, o) {
    var s = e && t && e.id === t.id;
    if (!i && !s) {
        var l = gs("You are moving sites to a shared folder. This will potentially make them available to others.\n\nAre you sure you would like to continue?");
        if (void 0 !== e && e ? void 0 !== t && t && (l = gs("You are moving sites to a different shared folder. This may change who has access to the sites.\n\n Do you want to continue?")) : l = gs("You are moving sites from a shared folder into your general vault. This will potentially make them unavailable to others.\n\n Do you want to continue?"), !confirm(l)) return !1
    }
    var _ = void 0 !== e && e ? e.sharekey : g_local_key,
        c = void 0 !== t && t ? t.sharekey : g_local_key,
        g = void 0 !== e && e ? e.id : g_uid,
        d = void 0 !== t && t ? t.id : "",
        p = "cmd=uploadaccounts&username=" + en(g_username),
        u = "",
        b = new Array,
        v = {};
    for (var f in h)
        if (h.hasOwnProperty(f)) {
            if (!("number" == typeof f || "string" == typeof f && f.match(/^\d+$/))) return alertfrombg(gs("An error occurred") + " i=" + gs(f) + " type " + typeof f), !1;
            var m, y;
            "object" == typeof h[f] ? (y = !1, m = h[f]) : (m = getacct(h[f]), y = !0);
            var w = m.aid,
                k = !1;
            if (null == m) return alertfrombg(gs("Error: This folder has already been moved?")), !1;
            if (void 0 !== m.individualshare && m.individualshare) {
                if (null != m.sharedfromaid && "" != m.sharedfromaid && "0" != m.sharedfromaid) return alertfrombg(gs("You cannot move individually shared sites into a shared folder.")), !1;
                if (r || i) k = !0;
                else {
                    var l = gs("Any item that is currently shared with another user cannot be moved into a shared folder.\n\nWould you like to make a copy?");
                    if (!confirm(l)) return !1;
                    k = !0
                }
            }
            if (!n) {
                if (void 0 !== m.sharefolderid && "" != d && m.sharefolderid != d && m.sharefolderid != g) return alertfrombg(gs("Please move sites from only one shared folder at a time.")), !1;
                var x = {};
                for (var P in m) m.hasOwnProperty(P) && (x[P] = m[P]);
                x.attacharraychanges = {
                    add: [],
                    remove: []
                };
                var S = e ? a[w].substr(e.decsharename.length + 1) : a[w],
                    L;
                x.group = e ? e.decsharename : "", "" != x.group && "" != S && (x.group += "\\"), x.group += S, y && (x.extra = lpmenc(lpmdec(m.extra, !0, c), !0, _)), is_application(m) ? L = "&appname" + f + "=" + en(m.appname) + "&name" + f + "=" + en(enc(m.name, _)) + "&type" + f + "=" + en("cr") + "&group" + f + "=" + en(enc(S, _)) + "&extra" + f + "=" + en(crypto_btoa(x.extra)) + "&script" + f + "=" + en(m.script) + "&pwprotect" + f + "=" + en(m.pwprotect ? 1 : 0) + "&wininfo" + f + "=" + en(m.wininfo) + "&wintitle" + f + "=" + en(m.wintitle) + "&exeversion" + f + "=" + en(m.exeversion) + "&exehash" + f + "=" + en(m.exehash) + "&fiid" + f + "=" + en(m.fiid) : (y && (x.username = lpmenc(lpmdec(m.username, !0, c), !0, _)), y && (x.password = lpmenc(lpmdec(m.password, !0, c), !0, _)), y && (x.realm_data = lpmenc(lpmdec(m.realm_data, !0, c), !0, _)), L = "&url" + f + "=" + en(url2hex(m.url)) + "&username" + f + "=" + en(crypto_btoa(x.username)) + "&password" + f + "=" + en(crypto_btoa(x.password)) + "&name" + f + "=" + en(enc(m.name, _)) + "&type" + f + "=" + en("cr") + "&grouping" + f + "=" + en(enc(S, _)) + "&extra" + f + "=" + en(crypto_btoa(x.extra)) + "&pwprotect" + f + "=" + en(m.pwprotect ? 1 : 0) + "&realm" + f + "=" + en(crypto_btoa(x.realm_data)), m.save_all && (L += "&save_all" + f + "=1"), void 0 !== m.basic_auth && "1" == m.basic_auth && (L += "&basic_auth" + f + "=1"), void 0 !== m.notetype && m.notetype && m.notetype.length && (L += "&notetype" + f + "=" + en(m.notetype)), void 0 !== m.template && m.template && m.template.length && (L += "&template" + f + "=" + en(m.template))), g != g_uid ? x.sharefolderid = g : void 0 !== x.sharefolderid && delete x.sharefolderid, void 0 !== m.attachkey && "" != m.attachkey && (y && (x.attachkey = enc(dec(m.attachkey, c), _)), L += "&attachkey" + f + "=" + en(x.attachkey)), L += "&origaid" + f + "=" + LP.en(w);
                var C = "";
                x.fields = new Array;
                for (var P = 0; P < m.fields.length; P++) {
                    for (var O in x.fields[P] = {}, m.fields[P]) m.fields[P].hasOwnProperty(O) && (x.fields[P][O] = m.fields[P][O]);
                    var I = m.fields[P].value,
                        A = m.fields[P].type;
                    is_application(m) || "text" == A || "email" == A || "tel" == A || "password" == A || "textarea" == A || "hidden" == A ? (y && (x.fields[P].value = lpmenc(lpmdec(I, !0, c), !0, _)), I = crypto_btoa(x.fields[P].value)) : "checkbox" != A && "radio" != A || (I += m.fields[P].checked ? "-1" : "-0"), is_application(m) ? C += "&fields" + f + "id" + P + "=" + en(m.fields[P].id) + "&fields" + f + "type" + P + "=" + en(m.fields[P].type) + "&fields" + f + "value" + P + "=" + en(I) : C += "&fields" + f + "name" + P + "=" + en(m.fields[P].name) + "&fields" + f + "type" + P + "=" + en(m.fields[P].type) + "&fields" + f + "value" + P + "=" + en(I) + "&fields" + f + "formname" + P + "=" + en(void 0 === m.fields[P].formname ? "" : m.fields[P].formname)
                }
                v[w] = x, p += L, p += C, k || r || (u += en(w) + ",", b[b.length] = w)
            }
        } return n || (p += "&sharedfolderid=" + en(g), null != typeof e && t && (p += "&origsharedfolderid=" + en(t.id)), r || (p += "&todelete=" + u), 4 == (4 & g_loglogins) && (p += "&reportname=" + en(m.name)), 8 == (8 & g_loglogins) && (p += "&reportusername=" + en(m.unencryptedUsername)), lpMakeRequest(base_url + "lastpass/api.php", p, function(e, t, a) {
        var r;
        if (4 == e.readyState && 200 == e.status && e.responseXML && e.responseXML.documentElement)
            if (0 < (r = e.responseXML.documentElement.getElementsByTagName("result")).length) {
                var n = !0;
                for (var i in h)
                    if (h.hasOwnProperty(i)) {
                        var o = "object" == typeof h[i] ? h[i] : getacct(h[i]),
                            s = o.aid,
                            l = v[s];
                        if (o && l)
                            if (is_application(o)) {
                                if (lp_in_array(s, b) && delete g_applications[get_appaid(s)], l.appaid = r[0].getAttribute("aidmap" + s), !l.appaid) {
                                    n = !1;
                                    break
                                }
                                l.appaid = get_appaid(l.appaid), g_applications[l.appaid] = l
                            } else {
                                var _ = lp_gettld_url(o.url);
                                if (lp_in_array(s, b) && ("http://sn" == o.url ? delete g_securenotes[s] : delete g_sites[s], void 0 !== g_tlds[_] && void 0 !== g_tlds[_][s] && delete g_tlds[_][s]), l.aid = r[0].getAttribute("aidmap" + s), !l.aid) {
                                    n = !1;
                                    break
                                }
                                for (var c in "http://sn" == l.url ? g_securenotes[l.aid] = l : g_sites[l.aid] = l, void 0 === g_tlds[_] && (g_tlds[_] = {}), g_tlds[_][l.aid] = !0, lp_attaches)
                                    if (lp_attaches.hasOwnProperty(c) && lp_attaches[c].parent == s) {
                                        var g = lp_attaches[c],
                                            d = new Array;
                                        for (var p in g) g.hasOwnProperty(p) && (d[p] = g[p]);
                                        var u = g.id;
                                        if (d.id = r[0].getAttribute("attachidmap" + u), d.storagekey = r[0].getAttribute("storagekeymap" + u), !d.id || !d.storagekey) {
                                            n = !1;
                                            break
                                        }
                                        l.attacharraychanges.add.push(d), l.attacharraychanges.remove.push(g.id), d.parent = l.aid, lp_in_array(s, b) ? lp_attaches[c] = d : lp_attaches[lp_attaches.length] = d
                                    } if (!n) break
                            }
                    } n && a && a.successCallback && a.successCallback(v);
                var f = parseInt(r[0].getAttribute("accts_version"));
                if (compare_accounts_versions(f, parseInt(g_local_accts_version) + 1) && (g_server_accts_version = g_local_accts_version = f, lp_server_attach_version = parseInt(r[0].getAttribute("attachversion")), n)) return rewritelocalfile(), refresh_windows(), checkAttach(), lpdbgchallenge("running update because of item moved."), void runChallenge()
            } else {
                var r;
                if ("SERVER_uploadfailed" == (r = e.responseXML.documentElement.getAttribute("rc"))) {
                    var m = gs("Your Shared Folder action failed. Please check your permissions before trying again");
                    a && a.errorCallback ? a.errorCallback(m) : alertfrombg(m)
                } else if ("SERVER_sharedfolder_passwordsmustbehidden" == r) {
                    var m = gs("Your do not have permission to view this account password so you cannot move it from the current Shared Folder.");
                    a && a.errorCallback ? a.errorCallback(m) : alertfrombg(m)
                } else {
                    var m = gs("Your Shared Folder action failed.");
                    a && a.errorCallback ? a.errorCallback(m) : alertfrombg(m)
                }
            } get_accts()
    }, function() {
        var e = gs("An error occurred");
        o && o.errorCallback ? o.errorCallback(e) : alertfrombg(e)
    }, o)), !0
}

function moveSelectedToGroup(e, t, a, r, n) {
    (a = a || {}).successCallback = r, a.errorCallback = n;
    var i = void 0 !== a.skipConfirm && a.skipConfirm,
        o = t.split(","),
        s = !1,
        l = issharedfolder(g_shares, e),
        _ = null;
    if (checkreadonly(l)) {
        for (var c = !1, g = 0; g < o.length; g++) {
            var d, p = getacct(o[g]);
            if (_ = issharedfolder(g_shares, p.group), !checkreadonly(_)) return;
            if (!checkmove(l, _)) return;
            !l && !_ || l && _ && l.id === _.id || (c = !0)
        }
        if (c) {
            for (var u = [], g = 0; g < o.length; g++) u[o[g]] = e;
            moveIntoSharedFolder(l, _, o, u, !1, !1, i, a)
        } else {
            var f = new Array,
                m = new Array;
            if (e == gs("favorites"))
                for (var g = 0; g < o.length; g++) {
                    var h = getacct(o[g]);
                    h && "0" == h.fav && (f[f.length] = o[g])
                }(0 < o.length || 0 < f.length || 0 < m.length) && changeGroupAndFavorites(o, f, m, e, l, a)
        }
    }
}

function changeGroupAndFavorites(e, t, a, r, n, i) {
    var o = "",
        s = "",
        l = "",
        _ = "",
        c = new Array;
    updated = {};
    for (var g = 0; g < e.length; g++) {
        var d, p;
        (p = getacct(d = e[g])) && r != gs("favorites") && (c[c.length] = d, p.group = r, updated[p.aid] = p, o += _ + d, _ = ",")
    }
    _ = "";
    for (var g = 0; g < t.length; g++) {
        var d, p;
        (p = getacct(d = t[g])) && (c[c.length] = d, p.fav = "1", updated[p.aid] = p, s += _ + d, _ = ",")
    }
    g_local_accts_version++, g_server_accts_version++, rewritelocalfile(), i && i.successCallback && i.successCallback(updated);
    var u = 0 == n ? g_local_key : n.sharekey,
        f = r;
    n && (f = r.substr(n.decsharename.length + 1));
    var m = "aids=" + LP.en(o) + "&newfavaids=" + LP.en(s) + "&oldfavaids=" + LP.en("") + "&newgrp=" + LP.en(enc(f, u)) + "&xml=1";
    m += 0 == n ? "" : "&sharedfolderid=" + en(n.id), lpMakeRequest(base_url + "groups.php", m, lpChangeGroupResponse)
}

function lpChangeGroupResponse(e) {
    e && 4 == e.readyState && 200 == e.status && null != e.responseXML && e.responseXML.documentElement
}

function lpReadFile(e, t) {
    have_binary_function("read_file") ? call_binary_function("read_file", e, t) : t("")
}

function setup_is_chrome_portable() {
    have_binary_function("is_chrome_portable") && call_binary_function("is_chrome_portable", function(e) {
        g_is_chrome_portable = e
    })
}

function is_chrome_portable() {
    return g_is_chrome_portable
}

function exportAttachment(c, g, e, d, p, u) {
    var t, a, r;
    if (can_save_file())
        if (e && "" != e) alertfrombg(gs("This attachment needs to be saved first."));
        else {
            var f = function(l) {
                var _ = void 0 !== l && l ? l : "unknown";
                dec(p, AES.hex2bin(d), !1, function(e) {
                    if (e) {
                        if (!u)
                            for (var t in u = "", lp_attaches)
                                if (lp_attaches.hasOwnProperty(t) && lp_attaches[t].id == g) {
                                    u = lp_attaches[t].mimetype;
                                    break
                                } var a = "",
                            r, n;
                        0 == u.indexOf("other:application/octet-stream") ? a = "" : 0 == u.indexOf("other:") ? a = u.substring(6) : 0 == u.indexOf("data:image") ? a = u.substring(11) : 0 == u.indexOf("data:audio") ? a = u.substring(11) : alertfrombg(gs("Unexpected data type:") + " " + u), "" != a && check_run_file_extension(a) ? r = n = "*." + a : (r = gs("Files"), n = a = ""), call_binary_function("save_file", e, r, n, !0, a, gs("If not specified, will use a file extension of:")), e = ""
                    } else {
                        if (p && 0 != p.length) return void alertfrombg(gs("Error opening attachment.") + "\nError B\nattachsize=" + (void 0 !== p && null != p && void 0 !== p.length ? p.length : "undefined") + "\nattachkeysize=" + (void 0 !== d && void 0 !== d.length ? d.length : "undefined"));
                        var i = get_attach_info(g),
                            o = getacct(c);
                        if (i && o && "retry" != l) {
                            var s = issharedfolder(g_shares, o.group);
                            get_individual_attachment(i.storagekey, g, 0 == s ? null : s.id, function(e) {
                                p = e, f("retry")
                            })
                        } else alertfrombg(gs("Error opening attachment.") + "\nError C\nfrom=" + _ + "\nattachsize=" + (void 0 !== p && null != p && void 0 !== p.length ? p.length : "undefined") + "\nattachkeysize=" + (void 0 !== d && void 0 !== d.length ? d.length : "undefined"))
                    }
                })
            };
            if (d) f();
            else {
                var n = getacct(c);
                lpReadAttach(g, function(e) {
                    p = e;
                    var t = issharedfolder(g_shares, n.group),
                        a = 0 == t ? g_local_key : t.sharekey;
                    d = dec(n.attachkey, a), f()
                })
            }
        }
    else alertfrombg(gs("This feature is not available in this version. Please install the binary extension by going to " + "https://lastpass.com/dl"))
}

function doexport(a, r, e) {
    if (1 != lpGetPref("noexport", 0))
        if (g_generatedpw || a)
            if (!r || e) {
                var t = can_save_file();
                g_export_output = "url,username,password,extra,name,grouping,fav\n";
                var n = new Array;
                for (var i in g_sites) check_ident_aid(i) && "http://group" != g_sites[i].url && (n[n.length] = g_sites[i]);
                for (var i in g_securenotes) check_ident_aid(i) && (n[n.length] = g_securenotes[i]);
                for (var o = 0; o < n.length; o++) {
                    var s = n[o];
                    if (null == s.sharedfromaid || "" == s.sharedfromaid || "0" == s.sharedfromaid) {
                        var l = new Array;
                        l[0] = s.url, l[1] = getusernamefromacct(s), l[2] = getpasswordfromacct(s), l[3] = lpmdec_acct(s.extra, !0, s, g_shares), l[4] = s.name, l[5] = s.group, l[6] = s.fav;
                        for (var _ = "", c = "", g = 0; g < l.length; g++) {
                            var d;
                            _ += c + csv_encode(l[g]), c = ","
                        }
                        g_export_output += _ += "\n"
                    }
                }
                r && (g_export_output = enc(g_export_output, make_lp_key_iterations("encryptedExport", e, 100100))), loglogin("export"), t ? setTimeout(function() {
                    call_binary_function("save_file", g_export_output, gs("CSV Files"), "*.csv", !1, "csv", gs("If not specified, will use a file extension of:"))
                }, 1e3) : openURL(getchromeurl("export.html"))
            } else LPPlatform.openTabDialog("encryptedExportDialog", {
                callback: function(e, t) {
                    e && doexport(a, r, t)
                }
            });
    else security_prompt(function() {
        doexport(!0, r)
    });
    else setTimeout(function() {
        alertfrombg(gs("CompanyPolicyProhibits"))
    }, 0)
}

function formfillexport(e) {
    if (1 != lpGetPref("noexport", 0))
        if (g_generatedpw || e) {
            for (var t = can_save_file(), a = new Array("profilename", "profilelanguage", "title", "firstname", "firstname2", "firstname3", "middlename", "lastname", "lastname2", "lastname3", "username", "gender", "birthday", "ssn", "company", "address1", "address2", "address3", "city", "county", "state", "state_name", "zip", "country", "country_cc3l", "country_name", "timezone", "email", "mobileemail", "phone3lcc", "phone", "phoneext", "fax3lcc", "fax", "faxext", "evephone3lcc", "evephone", "eveext", "mobilephone3lcc", "mobilephone", "mobileext", "ccname", "ccnum", "ccstart", "ccexp", "cccsc", "ccissuenum", "bankname", "bankacctnum", "bankroutingnum", "notes"), r = "", n = "", i = !(g_export_output = ""), o = 0, s = 0; s < g_formfills.length; s++)
                if (check_ident_ffid(g_formfills[s].ffid)) {
                    for (var l = "", _ = 0; _ < a.length; _++) {
                        var c = a[_];
                        i && (r += n + csv_encode(c), n = ","), g_export_output += l + csv_encode(lpmdec_acct(g_formfills[s][c], !0, g_formfills[s], g_shares)), l = ","
                    }
                    g_formfills[s].custom_fields.length > o && (o = g_formfills[s].custom_fields.length);
                    for (var g = 0; g < g_formfills[s].custom_fields.length; g++) g_export_output += "," + csv_encode(lpmdec_acct(g_formfills[s].custom_fields[g].text, !0, g_formfills[s], g_shares)) + "," + csv_encode(lpmdec_acct(g_formfills[s].custom_fields[g].value, !0, g_formfills[s], g_shares)) + "," + csv_encode(lpmdec_acct(g_formfills[s].custom_fields[g].alttext, !0, g_formfills[s], g_shares));
                    g_export_output += "\n", i = !1
                } for (var g = 1; g <= o; g++) r += "," + csv_encode("customfield" + g + "text") + "," + csv_encode("customfield" + g + "value") + "," + csv_encode("customfield" + g + "alttext");
            g_export_output = r + "\n" + g_export_output, loglogin("export"), t ? setTimeout(function() {
                call_binary_function("save_file", g_export_output, gs("CSV Files"), "*.csv", !1, "csv", gs("If not specified, will use a file extension of:"))
            }, 1e3) : openURL(getchromeurl("export.html"))
        } else security_prompt(function() {
            formfillexport(!0)
        });
    else setTimeout(function() {
        alertfrombg(gs("CompanyPolicyProhibits"))
    }, 0)
}

function can_save_file() {
    return !!have_binary_function("save_file")
}

function fix_tlds(e, t, a) {
    delete g_tlds[e][a], void 0 === g_tlds[t] && (g_tlds[t] = {}), g_tlds[t][a] = !0
}

function increment_local_accts_version() {
    g_local_accts_version++
}

function set_editfieldsopener(e) {
    g_editfieldsopener = e
}

function close_editfieldsopener() {
    g_editfieldsopener && (g_editfieldsopener.close(), g_editfieldsopener = null)
}

function getcurrenturl() {
    return punycode.URLToASCII(g_currenturl)
}

function getcurrenttabid() {
    return g_currenttabid
}

function getsinglefactortype(r) {
    var t = function(t) {
        var a = lpGetPref("singlefactortype", "");
        g_prefs_read && t != a ? have_binary_function("file_exists") ? call_binary_function("file_exists", "singlefactortype", function(e) {
            e || (t = a), setsinglefactortype(t), r(t)
        }) : (setsinglefactortype(a), r(a)) : r(t)
    };
    have_binary_function("read_file") ? call_binary_function("read_file", "singlefactortype", function(e) {
        t(lptrim(e))
    }) : t("")
}

function setsinglefactortype(e) {
    have_binary_function("write_file") && call_binary_function("write_file", "singlefactortype", e);
    var t = getBG();
    t.lpPutGblPref("singlefactortype", e), t.lpWriteAllPrefs()
}

function get_method() {
    return is_opera_chromium() ? "op" : is_edge() ? "edge" : is_edge_chromium() ? "edgecr" : g_isfirefoxwebext ? "ff" : g_ischrome ? "cr" : g_issafari ? "sfjs" : g_issafari_appext ? "sfx" : g_isfirefoxsdk ? is_fennec() ? "fennec" : "ff" : void 0
}

function get_method_async(e) {
    e(get_method())
}

function select_selectedtabid() {
    try {
        g_ischrome ? -1 != g_selectedtabid && (chrome.tabs.update(g_selectedtabid, {
            selected: !0
        }), chrome.runtime.lastError && debug && L(chrome.runtime.lastError)) : g_issafari ? g_selectedtab && g_selectedtab.activate() : g_isfirefoxsdk && g_tabs.activeTab.activate()
    } catch (e) {}
}

function addEmptyGroup(e, t, a) {
    var r = issharedfolder(g_shares, e);
    if (checkreadonly(r)) {
        var n = 0 == r ? g_local_key : r.sharekey,
            i = e;
        if (r) {
            if (!checkreadonly(r)) return;
            i = e.substr(r.decsharename.length + 1)
        }
        var o = createNewAcct();
        o.url = "http://group", o.group = e, o.aid = "0";
        var s = "ajax=1&extjs=1&name=&url=" + LP.en(url2hex(o.url)) + "&grouping=" + LP.en(enc(i, n)) + "&username=&password=&extra=&aid=0&openid_url=&isbookmark=0";
        s += 0 == r ? "" : "&sharedfolderid=" + en(r.id), s += get_identity_param(), lpMakeRequest(base_url + "show.php", s, lpSaveSiteResponse, null, {
            acct: o,
            successCallback: t,
            errorCallback: a
        })
    }
}

function hassites() {
    var e = !1;
    for (var t in g_sites)
        if (g_sites.hasOwnProperty(t)) {
            e = !0;
            break
        } for (var t in g_securenotes)
        if (g_securenotes.hasOwnProperty(t)) {
            e = !0;
            break
        } return e
}
"undefined" == typeof g_is_chrome_portable && (g_is_chrome_portable = !1);
var g_basicauth_found = !1,
    g_basicauth_origurl = "",
    g_basicauth_url = "",
    g_basicauth_realm = "",
    g_basicauth_tabid = 0;

function basicauth_found(e, t, a) {
    e != g_basicauth_found && (g_basicauth_found = e) && get_selected_tab(null, function(e) {
        compare_tlds(lp_gettld_url(a), lp_gettld_url(gettaburl(e))) ? (g_basicauth_tabid = gettabid(e), g_basicauth_origurl = punycode.URLToASCII(a), g_basicauth_url = gettaburl(e), g_basicauth_realm = t, handleFill(gettabid(e), {
            url: gettaburl(e),
            topurl: gettaburl(e),
            docid: 0,
            force: !1,
            docnum: 0
        })) : g_basicauth_found = !1
    })
}

function basicauth_save(e, t, a, r, n) {
    lpdbg("basicauth", "basicauth_save called"), lploggedin ? "" == e && "" == t || (a = a || g_basicauth_realm, r = r || g_basicauth_url, LPTabState.processBasicAuthentication({
        username: e,
        password: t,
        url: r,
        realm: a
    }), lpdbg("basicauth", "basicauth_save done")) : lpdbg("basicauth", "not logged in, aborting")
}

function DeleteOldDynamicFiles() {
    var e = localStorage_getItem("ff.dat");
    if (null != e) {
        var t = e.indexOf("\n");
        if (-1 == t) return;
        var a = e.substr(0, t);
        0 < CompareLastPassVersions(ffver, a) && localStorage_removeItem("ff.dat")
    }
}

function geteventtargeturl(e) {
    if (g_isfirefoxsdk) {
        var t = geteventtarget(e);
        return t ? punycode.URLToASCII(t.url) : ""
    }
    return g_issafari_appext ? gettaburl(geteventtarget(e)) : punycode.URLToASCII(e.target.url)
}

function geteventtarget(e) {
    return g_isfirefoxsdk ? void 0 !== e.worker ? e.worker.tab : void 0 !== e.target ? e.target.tab : null : e.target
}

function GetStringResource(e, t) {
    have_binary_function("GetStringResource") ? call_binary_function("GetStringResource", "", e, t) : t("")
}

function GetImageResource(e, t) {
    have_binary_function("GetImageResource") ? call_binary_function("GetImageResource", "", e, function(e) {
        t("data:image/png;base64," + e)
    }) : t("")
}

function event_dispatch_message(e, t, a) {
    g_isedge ? (a.messagetype = t, e.callback(a)) : g_issafari ? geteventtarget(e).page.dispatchMessage(t, a) : g_isfirefoxsdk ? (a.messagetype = t, e.target.port.emit("message", a)) : g_issafari_appext && e.callback({
        name: t,
        message: a
    })
}

function gettabidfromevent(e) {
    return gettabid(geteventtarget(e))
}

function LoadData(e, t) {
    var a = [],
        r = localStorage_getItem(e);
    if (null != r && "" != r)
        for (var n = r.split("\n"), i = 0; i < n.length; i++) t && -1 == n[i].indexOf(".") || (a[n[i].trim()] = "");
    if (debug || g_isdebug) {
        var o = Object.keys(a).length;
        write_history({
            cmd: "LoadData",
            file: e,
            num: o
        })
    }
    return a
}

function LoadSpecialSites() {
    SpecialSites = LoadData("sites.dat", !0)
}

function LoadBigIconList() {
    BigIconList = LoadData("bigicons.dat")
}

function isSpecialSite(e) {
    return null != e && void 0 !== SpecialSites[lpcanonizeUrl(e)]
}

function copytoclipboard(e) {
    if (g_isfirefoxsdk && "undefined" != typeof g_clipboard ? g_clipboard.set(e) : have_binary_function("copy_to_clipboard") ? call_binary_function("copy_to_clipboard", e) : Clipboard.copy(e), can_clear_clipboard()) {
        var t = lpGetPref("clearClipboardSecsVal", 30);
        0 < t && setTimeout(function() {
            clearclipboardif(e)
        }, 1e3 * t)
    }
    return !0
}

function clearclipboardif(e) {
    g_isfirefoxsdk && "undefined" != typeof g_clipboard ? g_clipboard.get() == e && g_clipboard.set("") : have_binary_function("clear_clipboard_if") && call_binary_function("clear_clipboard_if", e)
}

function unlock_plug2web() {
    g_plug2web_last_initiated = lp_get_gmt_timestamp()
}

function setup_push_listener(e) {
    var t;
    if (g_dopushserver)
        if (60 * parseInt(lpGetPref("pollServerVal", 15)) <= 0) console.log("No poll timer so no push notifications server.");
        else {
            var a = e.split(" "),
                r = a[0],
                n = a[1];
            lp.pushClient.connect(r, n, poll_server_request, 3e4)
        }
}

function shutdown_push_listener() {
    lp.pushClient.disconnect()
}

function contextMenuOnClick(e, t) {
    console.log("item " + e.menuItemId + " was clicked"), console.log("info: " + JSON.stringify(e)), console.log("tab: " + JSON.stringify(t)), lploggedin || open_login()
}

function can_copy_to_clipboard() {
    return !!have_binary_function("copy_to_clipboard", !0) || !!(g_ischrome || is_firefox_webext() || g_isedge || g_isfirefoxsdk && "undefined" != typeof g_clipboard)
}

function can_clear_clipboard() {
    return !!have_binary_function("clear_clipboard_if") || !(!g_isfirefoxsdk || "undefined" == typeof g_clipboard)
}

function isadmin() {
    return g_isadmin
}

function getbaseurl() {
    return base_url
}

function update_create_account_data() {}

function lpvt_store_data_and_setsinglefactortype(e) {
    var t = getBG();
    t.have_binary_function("lpvt_store_data") && t.call_binary_function("lpvt_store_data", e, gs("Swipe finger"), gs("Swipe your finger on the fingerprint sensor"), gs("Cancel"), gs("Swipe current user's finger"), function(e) {
        e && t.setsinglefactortype("vtapi")
    })
}

function delete_file(e) {
    var t = getBG();
    t.have_binary_function("delete_file") && t.call_binary_function("delete_file", e)
}

function log(e) {
    console_error(e)
}

function ReadFileGeneric(e, t, a) {
    var r = function(e) {
        if (lplog("ReadFileGeneric : callback2 called"), null == e) return lplog("ReadFileGeneric : callback2 called -- failed cuz data=null"), void a("");
        t && t < e.length && (lplog("ReadFileGeneric : callback2 called -- truncating from=" + e.length + " to=" + t), e = e.substring(0, t)), void 0 !== a && (lplog("ReadFileGeneric : callback2 calling callback"), a(e))
    };
    have_binary_function("read_file") ? (lplog("ReadFileGeneric : calling read_file binary function filename=" + e + " filename2=" + db_prepend(e)), call_binary_function("read_file", db_prepend(e), r)) : (lplog("ReadFileGeneric : calling localStorage_getItem filename=" + e), r(localStorage_getItem(e)))
}

function WriteFileGeneric(e, t) {
    have_binary_function("write_file") ? call_binary_function("write_file", db_prepend(e), t) : localStorage_setItem(e, t)
}

function DeleteFileGeneric(t) {
    if (have_binary_function("delete_file")) call_binary_function("delete_file", db_prepend(t));
    else try {
        localStorage_removeItem(t)
    } catch (e) {
        L("Failed to removeItem(" + t + ") e: " + e)
    }
}

function lpevent(e) {
    void 0 === g_events[e] && (g_events[e] = 0), g_events[e] = g_events[e] + 1
}

function fastDecryptAttachment(e, t, a, r, n, i) {
    var o = dec(r, n);
    "function" == typeof i && !have_nplastpass() && have_pplastpass() ? "!" == a.charAt(0) ? pplastpass_send_message({
        cmd: "decryptcbc",
        key: o,
        input: a
    }, i) : pplastpass_send_message({
        cmd: "decrypt",
        key: o,
        input: a
    }, i) : dec(a, AES.hex2bin(o), !1, i)
}

function fastEncryptAttachments(e, a, r) {
    var n = [],
        i = 0;
    for (var t in a) a.hasOwnProperty(t) && void 0 !== a[t] && i++;
    for (var t in a) a.hasOwnProperty(t) && void 0 !== a[t] && function(t) {
        enccbc(a[t].bytes, e, function(e) {
            n[n.length] = {
                id: a[t].id,
                data: e
            }, n.length == i && r(n)
        })
    }(t)
}

function allow_nplastpass() {
    return !0
}
this.lpgs = function(e, t) {
    return gs(e, t)
}, "undefined" != typeof chrome && void 0 !== chrome.omnibox && (chrome.omnibox.onInputChanged.addListener(function(e, t) {
    if (lploggedin) {
        if (0 == e.length) return;
        var a = [],
            r = !g_prompts.edit_sn_prompt && get_searchNotesPref(),
            n = search_results(e.toLowerCase(), r);
        n.sort(lp_sort_case_insensitive_name);
        var i = 0;
        for (var o in n) {
            var s = n[o],
                l, _ = "id";
            if (s.sn) l = of (s.name), _ = "sn";
            else {
                l = of (s.name);
                var c = getusernamefromacct(s);
                "" != c && (l += " (" + of (c) + ")")
            }
            if (a.push({
                    content: gs("Launch") + " " + l + "     " + _ + ":" + get_record_id(n[o]),
                    description: l
                }), 7 < i++) break
        }
        t(a)
    } else t([{
        content: "login",
        description: gs("Login to LastPass")
    }])
}), chrome.omnibox.onInputEntered.addListener(function(e) {
    if (lploggedin && "login" != e || open_login(), /id:\d+$/.test(e)) {
        var t, a = (t = e.split("id:"))[1];
        launchautologin(a)
    } else if (/id:app\d+$/.test(e)) {
        var t, a;
        launch(a = (t = e.split("id:"))[1])
    } else if (/sn:\d+$/.test(e)) {
        var t, a = (t = e.split("sn:"))[1];
        editAid(a)
    }
})), g_fixpbkdf2 = !0;
var g_onloaddelay = 0;

function get_safari_version() {
    var e = navigator.appVersion.match(/Version\/(\d+\.\d+)(\.\d+)? Safari/),
        t = 0;
    return e && (t = parseFloat(e[1])), t
}

function handleContextMenu(e) {
    1 != lpGetPref("hideContextMenus", 0) && e.contextMenu.appendContextMenuItem("LPContextMenuClick", gs("LastPass"))
}

function pplastpass_load(e) {
    g_ischrome && "pplastpass" == e.target.id && pplastpass_send_message({
        cmd: "ping"
    }, function(e) {
        "pong" == e && (g_pplastpass_loaded = !0)
    })
}

function pplastpass_message(e) {
    var t = JSON.parse(e.data);
    if ("function" == typeof g_pplastpass_callbacks[t.id]) {
        var a = g_pplastpass_callbacks[t.id];
        g_pplastpass_callbacks[t.id] = null, a(t.retval)
    }
}

function have_pplastpass() {
    return g_pplastpass_loaded
}
doDelayedOnload = function() {
    var t = !1;
    return function() {
        if (!t && g_is_mac && g_issafari && (lp_ws.setup(), t = !0), g_ischrome && !is_edge() && g_do_native_messaging) {
            g_onloaddelay++;
            var e = localStorage_getItem("hadNativeMessaging");
            have_binary() || null == e && 5 < g_onloaddelay || 20 < g_onloaddelay ? onLoad() : setTimeout(function() {
                doDelayedOnload()
            }, 100)
        } else !window.openDatabase && window.indexedDB ? (0 == g_onloaddelay && opendb(), g_onloaddelay++, g_db || 20 < g_onloaddelay ? onLoad() : setTimeout(function() {
            doDelayedOnload()
        }, 100)) : onLoad()
    }
}(), "undefined" == typeof document || g_isfirefoxsdk ? (doDelayedOnload(), g_isfirefoxsdk && g_system_unload.when(function(e) {
    onUnload()
})) : document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("load", function() {
        setTimeout(function() {
            doDelayedOnload()
        }, 0)
    }), window.addEventListener("unload", function() {
        onUnload()
    })
}), g_issafari && (safari.application.addEventListener("contextmenu", handleContextMenu, !1), 6 <= get_safari_version() ? safari.application.addEventListener("beforeSearch", function(e) {
    if (lploggedin) {
        var t = e.query;
        t && 0 == t.indexOf("lp ") && (e.preventDefault(), opensearch(t.substring(3)))
    }
}, !1) : safari.application.addEventListener("beforeNavigate", function(e) {
    if (lploggedin) {
        var t = e.url;
        t && (t = t.replace(/^\w{2,8}:\/\//, "").replace(/\/$/, ""), 0 == (t = punycode.ToUnicode(unescape(t)).replace("&", "%26")).indexOf("lp ") && (e.preventDefault(), opensearch(t.substring(3))))
    }
}, !1));
var g_pplastpass_callbacks = new Object;

function pplastpass_send_message(e, t) {
    var a = (new Date).getTime() + "_" + Math.floor(100 * Math.random());
    g_pplastpass_callbacks[a] = t, e.id = a, document.getElementById("pplastpass").postMessage(JSON.stringify(e))
}

function disablesitealert(e) {
    var t = g_sites[e];
    if (t) {
        t.noalert = 1;
        var a = "id=" + LP.en(e),
            r = issharedfolder(g_shares, t.group);
        a += 0 == r ? "" : "&sharedfolderid=" + en(r.id), lpMakeRequest(base_url + "update_alert.php", a, function() {}, function() {}), setTimeout(function() {
            rewritelocalfile()
        }, 0)
    }
}

function dopwchange(n, e, i, t) {
    if (!g_cpwbot) return !1;
    if (!check_ident_aid(n)) return !1;
    var a = get_record(n);
    if (!a) return !1;
    var r = a.pwprotect;
    if (!e && (r || g_prompts.login_site_prompt)) return security_prompt(function() {
        dopwchange(n, !0, i)
    }), !1;
    g_cpwbot && CPWbot_bg && (CPWbot_bg.site_html_url = geturlfromacct(a)), CPWbot_bg || "undefined" == typeof CPWbot_bg_lib || (CPWbot_bg = new CPWbot_bg_lib), CPWbot_bg.mark_timestamp("dopwchange"), CPWbot_bg.preinit();
    var o = (new Date).getTime(),
        s = CPWbot_bg.new_session(a.url);
    return CPWbot_bg.broken_hearted_st_id = setTimeout(function() {
        CPWbot_bg.broken_hearted(s)
    }, 60001), g_ischrome ? chrome.tabs.onRemoved.addListener(function(e, t) {
        CPWbot_bg && e == CPWbot_bg.get_pwchangetabid() && (CPWbatch && CPWbatch.cpw_get_batchjob_state() && CPWbatch.cpw_get_batchjob_state() != F_DONE || cpwbot_halt())
    }) : g_issafari, get_recipe_for_url(a.url, function(e) {
        if (CPWbot_bg && e) {
            var t = !0,
                a = !0;
            if (CPWbot_bg.mark_timestamp("recipe_callback"), !CPWbot_bg.get_login_url(e)) return console_error("bad recipe - login_url property is not defined"), CPWbot_bg.panic("bad recipe"), !1;
            null != i ? (CPWbot_bg.originating_tabid = gettabid(i), CPWbot_bg.originating_tab = i) : (CPWbot_bg.originating_tabid = null, CPWbot_bg.originating_tab = null);
            var r = {
                aid: n,
                recipe: e
            };
            return openURL(CPWbot_bg.get_login_url(e), function(e, t) {
                var a = gettabid(e);
                if (CPWbot_bg.destination_tabid = a, CPWbot_bg.destination_tab = e, CPWbot_bg.mark_timestamp("openurl_callback"), CPWbot_bg.initialize({
                        tabid: a,
                        aid: t.aid,
                        recipe: t.recipe
                    }), CPWbatch && CPWbatch.cpw_get_batchjob_state() && CPWbatch.register_worker(a, t.aid), g_issafari && (e.addEventListener("close", function() {
                        var e = gettabid(this);
                        CPWbot_bg && e == CPWbot_bg.get_pwchangetabid() && (CPWbatch && CPWbatch.cpw_get_batchjob_state() && CPWbatch.cpw_get_batchjob_state() != F_DONE || cpwbot_halt())
                    }, !1), i && i.addEventListener("close", function() {
                        var e = gettabid(this);
                        CPWbot_bg && a == CPWbot_bg.get_pwchangetabid() && cpwbot_halt()
                    }, !1)), !g_robots_txt) {
                    var r = 2;
                    CPWbot_bg.do_milestone(a, 2, t.recipe), CPWbot_bg.initiate_on_complete(a, t), g_launches[gettabid(e)] = t.aid
                }
            }, r, !0, !0, !0, !0), !0
        }
        return !1
    }), !0
}

function disableallalerts() {
    var e;
    g_disablepwalerts = !0, lpMakeRequest(base_url + "update_alert.php", "all=1", function() {}, function() {})
}

function checkgeneratepassword(e) {
    sendCS(e, {
        cmd: "checkgeneratepassword"
    }, "all")
}

function parse_formdata(e) {
    for (var t = e.formdata2.split("\n"), a = !1, r = !1, n = "", i = "", o = new Array, s = 0; s < t.length; s++) {
        var l, _ = t[s].split("\t");
        if (4 == _.length || 5 == _.length) {
            var c = decodeURIComponent(_[2]),
                g = _[3];
            a && r || "text" != g && "email" != g && "tel" != g || !c.length || (n = c, a = !0), "password" == g && (o[o.length] = c, !r && c.length && (i = c, r = !0))
        }
    }
    e.username = n, e.password = i, e.formdata = e.formdata2
}

function handleGetNevers(e, t) {
    var a;
    setcurrenturl(t), sendCS(e, {
        cmd: "gotnevers",
        g_nevers: LPJSON.stringify(getnevers())
    }, "all")
}

function isEmptyObject(e) {
    return 0 === Object.keys(e).length
}

function can_allow_reprompt_skip() {
    return !(g_prompts.company_login_site_prompt || g_prompts.company_copyview_site_prompt)
}

function update_prefs() {}

function changepw_wrapper(e) {
    changePassword(e.newpw, new Array(e.singleaid), void 0 !== e.autochange ? e.autochange : null)
}

function openchangepw_wrapper(e) {
    openchangepw(e.newpw, e.tld, void 0 === e.excludeid ? "" : e.excludeid)
}

function remember_changed_pw(e, t) {
    return !(!e || !t) && (g_didchangepw[SHA256(e + t)] = (new Date).getTime(), !0)
}
var g_inner_text = [];

function got_inner_text_handler(e, t) {
    g_cpwbot,
    g_inner_text[e] = t.buf
}

function got_inner_html_handler(e, t) {
    return !0
}

function get_cs_inner_text(e, t) {
    sendCS(e, {
        cmd: "get_inner_text"
    }, t)
}

function browser_focus() {
    g_ischrome && chrome.windows.update(chrome.windows.WINDOW_ID_CURRENT, {
        focused: !0
    })
}

function send_sms_passcodes(e, t) {
    t = t || function() {}, lpMakeRequest(base_url + "send_sms_passcodes.php", e, function() {
        t(gs("An SMS passcode has been sent to your mobile device."))
    }, function() {
        t(gs("Request failed; is your Internet connection down?"))
    })
}

function create_account_safe(e, t, a) {
    e += "&language2=" + encodeURIComponent(getLanguage()), e += "&method=" + encodeURIComponent(get_method()), e += get_devicetype_param(), lpMakeRequest(base_url + "create_account.php", e, function(e) {
        4 === e.readyState && 200 === e.status && t(e.responseText)
    }, a)
}

function create_account(e, t, a) {
    e += "&language2=" + encodeURIComponent(getLanguage()), e += "&method=" + encodeURIComponent(get_method()), e += get_devicetype_param(), lpMakeRequest(base_url + "create_account.php", e, t, a)
}

function enable_credit_monitoring(e, t, a) {
    lpMakeRequest(base_url + "creditmon.php", e, t, a)
}
var g_hotkeys = [];

function setup_hotkeys() {
    if (g_isfirefoxsdk && "undefined" != typeof g_ff_hotkeys) {
        for (var e = 0; e < g_hotkeys.length; e++) g_hotkeys[e].destroy();
        g_hotkeys = [];
        for (var e = 0; e < g_lp_hotkeys.length; e++) {
            var t;
            ! function(e) {
                var t = lpGetPref(e + "KeyCode", 0),
                    a = lpGetPref(e + "Mods", "");
                if (0 != t && "" != a) {
                    var r = ""; - 1 != a.indexOf("control") && (r += "control-"), -1 != a.indexOf("meta") && (r += "meta-"), -1 != a.indexOf("alt") && (r += "alt-"), -1 != a.indexOf("shift") && (r += "shift-"), r += 33 == t ? "pageup" : 34 == t ? "pagedown" : 35 == t ? "end" : 36 == t ? "home" : 37 == t ? "left" : 38 == t ? "up" : 39 == t ? "right" : 40 == t ? "down" : 189 == t ? "-" : 219 == t ? "[" : 220 == t ? "\\" : 221 == t ? "]" : 186 == t ? ";" : 222 == t ? "'" : 188 == t ? "," : 187 == t ? "+" : 190 == t ? "." : 191 == t ? "/" : 106 == t ? "*" : 192 == t ? "~" : 124 == t ? "printscreen" : String.fromCharCode(t).toLowerCase(), g_hotkeys.push(g_ff_hotkeys.Hotkey({
                        combo: r,
                        onPress: function() {
                            processCS(null, {
                                cmd: "runhotkey",
                                hotkey: e
                            })
                        }
                    }))
                }
            }(g_lp_hotkeys[e])
        }
    }
}

function base64_to_binary_ciphertext(e) {
    var t = e.split("|"),
        a = "";
    if (2 == t.length) {
        var r = t[0].slice(1),
            n = t[1];
        a = "!" + atob(r) + atob(n)
    } else a = "!" == e.charAt(0) ? atob(e.slice(1)) : "!" + atob(e);
    return a
}

function aidkiller(e, t, a) {
    setTimeout(function() {
        void 0 !== a && a && (g_cached_hash = null, g_hash_live = 0)
    }, t)
}

function fix_sites_secure_reprompt() {}

function getLoginSitePrompt() {
    return g_prompts.login_site_prompt
}

function getNameUsernameFromLPA(e) {
    if (!e) return "";
    var t = e.name,
        a = getusernamefromacct(e);
    return "" != a && (t += " (" + a + ")"), t
}

function get_breach_data() {
    return g_breach_data
}

function needs_secure_reprompt(e) {
    if (!e) return !1;
    if ("string" == typeof e.appaid) return !1;
    var t = get_record(e.aid);
    for (var a in t)
        if (t[a] == SecureReprompter.secure_reprompt_token) return !0;
    for (var a in t.fields)
        if (t.fields[a] == SecureReprompter.secure_reprompt_token) return !0;
    return !1
}

function frame_and_topdoc_has_same_domain(e) {
    var t = ftd_get_frameparenturl(e),
        a = ftd_get_topurl(e);
    return !!(t && a && compare_tlds(lp_gettld_url(a), lp_gettld_url(t)))
}

function ftd_report_error(e, t) {
    var a = sprintf("cmd=showiframeconfirm type=%s tldurl=%s tldurliframe=%s", t, lpcanonizeUrl(ftd_get_topurl(e)), lpcanonizeUrl(ftd_get_frameparenturl(e)));
    return lplog("ftd_report_error : " + a), lpReportError(a)
}

function ftd_get_frameparenturl(e) {
    return null === g_popup_url_by_tabid || null === e || void 0 === g_popup_url_by_tabid[e] ? "" : g_popup_url_by_tabid[e]
}

function ftd_get_topurl(e) {
    if (null === g_CS_tops || null === g_CS || void 0 === g_CS[e] || null === g_CS[e] || null === e) return "";
    var t = "",
        a = g_CS_tops[e];
    if (null == a) {
        if (console.warn("no topdocnum for tabid=" + e), g_ischrome) try {
            var r;
            for (r in g_CS[e])
                if (g_CS[e].hasOwnProperty(r) && void 0 !== g_CS[e][r].sender && g_CS[e][r].sender && g_CS[e][r].sender.tab && g_CS[e][r].sender.tab.url) {
                    t = g_CS[e][r].sender.tab.url;
                    break
                }
        } catch (e) {}
        return t
    }
    if (g_CS[e]) {
        var n = g_CS[e][a];
        n && !(t = gettaburl(n)) && n.name && (t = n.name, g_isedge && 0 < t.indexOf("|") && (t = t.substring(t.indexOf("|") + 1)))
    }
    return t
}

function lpConfirmYesNo(e, t) {
    return confirm(e)
}

function getnevers_given(e, t) {
    if (e) var a = e,
        r = getcurrenturl(),
        n = lp_gettld_url(r);
    else var r = "",
        n = "",
        a = getcurrenturl();
    var i = lp_gettld_url(a),
        o = lpcanonizeUrl(a),
        s = [];
    return t && (s = t), l(s, "neveraccounts", o, i, r, n), l(s, "neverautologins", o, i, r, n), l(s, "neverformfills", o, i, r, n), l(s, "nevergenerates", o, i, r, n), l(s, "neverautofills", o, i, r, n), l(s, "nevershowicons", o, i, r, n), l(s, "neverenablelp", o, i, r, n), s;

    function l(e, t, a, r, n, i) {
        if (g_neverurls[t] && 0 < g_neverurls[t].length)
            for (var o = 0; g_neverurls[t] && o < g_neverurls[t].length; o++) {
                var s = g_neverurls[t][o];
                s == a ? (e.push({
                    type: t,
                    url: s,
                    domain: 0
                }), e.push({
                    type: t,
                    url: n,
                    domain: 0
                })) : s == r && (e.push({
                    type: t,
                    url: s,
                    domain: 1
                }), e.push({
                    type: t,
                    url: i,
                    domain: 1
                }))
            }
    }
}

function openlastpasslegacy() {
    g_legacy_enabled && (unlock_plug2web(), openURL(base_url + "?dolegacy=1&lpnorefresh=1"))
}

function get_browser_history_tlds(r) {
    var n = function(e) {
        for (var t = new Object, a = 0; a < e.length; a++) t[lp_gettld_url(e[a].url)] = !0;
        r(Object.keys(t))
    };
    g_isfirefoxsdk && "undefined" != typeof g_places_history ? g_places_history.search().on("end", n) : g_ischrome && void 0 !== chrome.permissions ? chrome.permissions.contains({
        permissions: ["history"]
    }, function(e) {
        e ? void 0 !== chrome.history ? chrome.history.search({
            text: "",
            startTime: 0,
            endTime: (new Date).getTime(),
            maxResults: 0
        }, n) : alert(gs("Please restart your browser to finish enabling history.")) : chrome.permissions.request({
            permissions: ["history"]
        }, function(e) {
            e && alert(gs("Please restart your browser to finish enabling history."))
        })
    }) : g_issafari && have_binary_function("get_safari_history") ? call_binary_function("get_safari_history", function(e) {
        for (var t = "" != e ? e.split("\n") : new Array, a = 0; a < t.length; a++) t[a] = {
            url: t[a]
        };
        n(t)
    }) : n(new Array)
}

function get_equiv_domains_for_tab(e) {}

function start_trial() {
    var e = multifactor_getdata("postdata");
    return !(!g_trial_available || !e || "" == e) && (e += "&starttrial=1", lpMakeRequest(base_url + "login.php", e, lpLoginResponse, lpLoginError), !0)
}

function cleardeccache() {
    "undefined" != typeof mdec_cache && (mdec_cache = new Array), "undefined" != typeof mdec_cache_key && (mdec_cache_key = null)
}

function is_human_initiated_action(e) {
    var t = !1;
    return lp_in_array(e.cmd, ["fillfield", "fillbest"]) && e.manualfill && (t = !0), t
}

function repromptSuccess() {
    g_reprompt_callback()
}

function get_plugin_capabilities_handler(e, t) {
    try {
        var a = {
            lpversion: lpversion,
            have_nplastpass: have_nplastpass(),
            nplastpass_version: get_nplastpass_version(),
            have_native_messaging: have_native_messaging(),
            have_native_messaging_permission: g_have_native_messaging_permission,
            have_ws: have_ws(),
            have_pplastpass: have_pplastpass(),
            can_cpwbot: g_cpwbot ? 1 : 0,
            can_disable_lp: 1
        };
        e && sendCS(e, {
            cmd: "got_plugin_capabilities",
            capabilities: JSON.stringify(a)
        })
    } catch (e) {
        return console_warn(e), !1
    }
    return !0
}

function refreshGroupNames(e) {
    LPPlatform.refreshGroupNames(e)
}
SecureReprompter = new function() {
    this.secretcache = {}, this.secure_reprompt_token = "<SECURE_REPROMPT>", this.most_recent_aid = null, this.add_secret = function(e, t, a, r) {
        for (var n in this.most_recent_aid = e, t.fields) "password" == t.fields[n].type && (t.fields[n].value = base64_to_binary_ciphertext(t.fields[n].value));
        var i = this.get_secret_field(t),
            o, s = base64_to_binary_ciphertext(t[i]);
        t[i] = s, 0 === (a *= 1e3) || void 0 === a && void 0 !== r ? a = 3e3 : g_cached_hash = r, a < 3e3 && (a = 3e3), this.secretcache[e] = [t, !0], g_secret_cache = this.secretcache, g_hash_live < a ? (aidkiller(e, a, 1), g_hash_live = a) : aidkiller(e, a)
    }, this.get_secret = function(e) {
        if (void 0 === e && void 0 === this.most_recent_aid) return null;
        void 0 === e && (e = this.most_recent_aid);
        var t = this.secretcache[e];
        return void 0 === t ? null : (t[1], t[0])
    }, this.get_secret_field = function(e) {
        return "http://sn" === e.url ? "extra" : "password"
    }, this.should_secure_reprompt = function(e) {
        if ("http://sn" == e.url) {
            if (e.extra == this.secure_reprompt_token) return !0
        } else if (e.password == this.secure_reprompt_token) return !0;
        for (var t in e.fields)
            if ("password" == e.fields[t].type && e.fields[t].value == this.secure_reprompt_token) return !0;
        return !1
    }, this.g_secure_reprompt_token = "<SECURE_REPROMPT>", this.set_securereprompt_secret = function(e) {
        this.g_securereprompt_secret = e
    }, this.get_securereprompt_secret = function() {
        var e = this.g_securereprompt_secret;
        return this.g_securereprompt_secret = null, e
    }
}, LPData = function(r) {
    var e, t;
    return {
        getData: function(e) {
            var t = !1;
            if (e.triggers)
                for (var a in t = !0, e.triggers)
                    if (e.triggers[a] !== r[a]) {
                        t = !1;
                        break
                    } e.callback(Interfaces.getPrimitives({
                context: e.context,
                interface: Interfaces.BackgroundInterface,
                source: r,
                syncronizedOnly: t
            }))
        },
        setValue: function(e, t) {
            LPReflection.setValue(Interfaces.BackgroundInterface, e, t)
        }
    }
}(this);
var IntroTutorial = function() {
    var r = {};
    p();
    var e = !1,
        t = !1;

    function a() {
        Topics.get(Topics.MANUAL_LOGIN_FINISHED).subscribeFirst(function() {
            e = !0, n()
        }), Topics.get(Topics.ACCTS_VERSION_UPDATED).subscribeFirst(function() {
            t = !0, n()
        })
    }

    function n() {
        e && t && (t = e = !1, LPContentScriptFeatures.safari_legacy_messaging ? LPPlatform.openTab({
            url: "https://lastpass.com/safariAppExtension.php?source=login"
        }) : "context" === LPContentScriptFeatures.intro_tutorial_version ? LPPlatform.getCurrentTabDetails(function(e) {
            if (hassites()) g_manual_login && (1 == lpGetPref("showvault", g_showvaultdefault) || g_showvaultalways) && openvault(1);
            else if (Preferences.get("showIntroTutorial"))
                if (i(e)) b(e.tabID);
                else if (o(e)) {
                var t = e.tabURL;
                s(e) && (t = m(e.tabURL)), LPPlatform.navigateTab({
                    tabId: e.tabID,
                    url: t,
                    loadHandler: u
                })
            } else removeModalOverlay(e.tabID), b();
            else removeModalOverlay(e.tabID), LPPlatform.hideYoureAlmostDoneMarketingOverlay(e.tabID)
        }) : g_manual_login && (1 == lpGetPref("showvault", g_showvaultdefault) || g_showvaultalways) && openvault(1))
    }

    function i(e) {
        return 0 <= e.tabURL.indexOf("lastpass.com") && 0 <= e.tabURL.indexOf("storeRedirect")
    }

    function o(e) {
        return 0 <= e.tabURL.indexOf("lastpass.com") && 0 <= e.tabURL.indexOf("lpInstall")
    }

    function s(e) {
        return 0 <= e.tabURL.indexOf("lastpass.com") && 0 <= e.tabURL.indexOf("families")
    }

    function l(r, n) {
        var i;
        return function(e) {
            var t = this,
                a = e;
            clearTimeout(i), i = setTimeout(function() {
                i = null, r.call(t, a)
            }, n)
        }
    }

    function _() {
        r.isInContext ? setTimeout(function() {
            get_selected_tab(null, function(e) {
                var t = gettabid(e);
                d(e.url) ? LPTabs.get({
                    tabID: t
                }).getTop().LPFrame.openDialog("inContextTutorialLogoutPromptDialog", {
                    hasOverlay: !0
                }, {
                    css: {
                        top: 0,
                        right: 0
                    }
                }) : IntroTutorial.resetState()
            })
        }, 2e3) : openvault(), Topics.get(Topics.SITE_ADDED).unsubscribe(_)
    }

    function c(e) {
        for (var t in e) e.hasOwnProperty(t) && (r[t] = e[t]);
        r.enabled ? Topics.get(Topics.SITE_ADDED).subscribe(_) : Topics.get(Topics.SITE_ADDED).unsubscribe(_)
    }

    function g(e) {
        var t = {};
        for (var a in r) r.hasOwnProperty(a) && (t[a] = r[a]);
        if (!e) return t;
        e(t)
    }

    function d(e) {
        for (var t = 0; t < IntroTutorial.getState().domains.length; t++)
            if (e.includes(IntroTutorial.getState().domains[t])) return !0;
        return !1
    }

    function p() {
        r = {
            enabled: !1,
            domains: [],
            firstLogin: !0,
            name: null,
            isInContext: !1,
            isLoginTheLastPassWay: !1,
            isAllSet: !1,
            isSiteSaved: !1
        }
    }

    function u(e) {
        var t = Preferences.get("ShowIntroTutorialLater", null),
            a;
        t && Date.now() < new Date(t) || e && e.tabDetails && e.getTop().LPFrame.openDialog("inContextTutorialWelcomeDialog", null, {
            css: {
                top: 0,
                right: 0
            }
        })
    }

    function f() {
        var e = "https://www.lastpass.com",
            t;
        return "/" === e.substr(e.length - 1) ? e + "how-it-works" : e + "/how-it-works"
    }

    function m(e) {
        var t;
        return e.substr(0, e.indexOf("?")) + "/thanksinstall"
    }

    function h(e) {
        var t = Preferences.get("ShowIntroTutorialLater", null);
        t && Date.now() < new Date(t) || (e ? LPPlatform.navigateTab({
            tabId: e,
            url: f(),
            loadHandler: u
        }) : LPPlatform.openTab({
            url: f(),
            loadHandler: u
        }))
    }
    var b = l(h, 1500);

    function v(a) {
        var r = {
            css: {
                top: 0,
                right: 0,
                width: "331px",
                height: "200px"
            }
        };
        "skipped" === a.textChoice && (r.css.width = "100%", r.css.height = "100%"), get_selected_tab(null, function(e) {
            var t = gettabid(e);
            LPTabs.get({
                tabID: t
            }).getTop().LPFrame.openDialog("inContextTutorialCompleteDialog", a, r)
        })
    }
    return {
        init: a,
        setState: c,
        getState: g,
        resetState: p,
        completeTutorial: v,
        isOnStateDomain: d
    }
}();
IntroTutorial.init();
var LPIcons = function() {
        var e;
        return {
            get: function(e) {
                return getbigicon(e.url, e)
            }
        }
    }(),
    OmsNotificationPopup = {
        startOms: function() {
            omsNotification.startOms()
        },
        cancelNotification: function() {
            omsNotification.cancelNotification()
        },
        postponeNotification: function(e) {
            omsNotification.postponeNotification(e)
        },
        setState: function(e) {
            omsNotification.setState(e)
        },
        getState: function() {
            return omsNotification.getState()
        }
    };

function showModalOverlay(e) {
    LPPlatform.showModalOverlay(e)
}

function removeModalOverlay(e) {
    LPPlatform.removeModalOverlay(e)
}

function autoChangePassword(e) {
    sendLpImprove("auto_change_password_click"), editAid(e, null, null, "1")
}

function getLinkedAccount(e) {
    e && e(getacct(get_personal_linked()))
}

function getVersion(e) {
    e && e(lpversion)
}

function userHasAccount(t) {
    t && LPServer.lmiapi.jsonRequest({
        url: "lmiapi/user/has-account",
        type: "GET",
        CSRFToken: !1,
        success: function(e) {
            t("1" === e.hasAccount)
        },
        callbacks: [function() {
            t(!1)
        }]
    })
}

function getLogoffWhenCloseBrowser(e) {
    e && e(g_logoff_when_close_browser)
}

function getCompanyLicensing(e) {
    LPServer.lmiapi.jsonRequest({
        type: "GET",
        url: "teams-api/my-company/showlicensing",
        success: e,
        callbacks: {
            TrialExpired: e,
            Expired: e,
            RecentlyExpired: e
        }
    })
}

function isCompanyExpired(e) {
    LPServer.lmiapi.jsonRequest({
        type: "GET",
        url: "lmiapi/my-company/is-expired",
        success: e
    })
}

function finishReactLogin(e, t, a, r, n) {
    g_uid = e, g_local_key = a, g_token = r, g_username = t, g_username_hash = SHA256(t);
    var i = new DOMParser;
    lpLoginResponse_win({
        readyState: 4,
        status: 200,
        responseXML: i.parseFromString(n, "text/xml")
    }, !1, !1)
}

function reactLoginOffline(e, t, a, r) {
    g_username = e, g_username_hash = SHA256(e), g_local_key = t, a ? (yubikey_setdata("offline", "1"), yubikey_auth(a, "", r)) : loginoffline(!1, "login", r)
}

function openOnNewTab(e) {
    openURL(LP.lp_base + e, function() {}, null, !0, !0, !1, !1)
}

function setLanguagePreference(t, a) {
    var e = opendb(),
        r;
    createPrefsTable(e), e && (g_indexeddb ? e.transaction("LastPassPreferences", "readwrite").objectStore("LastPassPreferences").put({
        username_hash: fix_userhash(t),
        prefname: "language",
        prefvalue: a,
        userkey: t + "_language"
    }) : e.transaction(function(e) {
        e.executeSql("REPLACE INTO LastPassPreferences (username_hash, prefname, prefvalue) VALUES (?, ?, ?)", [t, "language", a], function(e, t) {
            console.log("Wrote language preference to webSQL: ", t)
        }, function(e, t) {
            console.log("ERROR: Tried writing language preference to webSQL, but got error: ", t)
        }), ExtensionPreferences.triggerChange("language", a)
    }))
}

function switchLanguage(e) {
    var t = checkCorrectLanguageCodeFormat(e = e || "en-US");
    if (!t) throw new Error("Invalid Language Code Format");
    g_language = e, include_language(transformLocaleCode(t)), g_issafari_appext && Preferences.set("language", transformLocaleCode(t));
    var a = {};
    a.language = t, a.shouldUpdateOnNextLogin = !!g_loggedinoffline, localStorage_setItem("language_" + g_username_hash, JSON.stringify(a)), localStorage_setItem("loggedOutLanguage", t), setLanguagePreference(g_username_hash, transformLocaleCode(e))
}

function saveUserLanguage(e, t) {
    var a = checkCorrectLanguageCodeFormat(e = e || "en-US");
    if (!a) throw new Error("Invalid Language Code Format");
    var r = JSON.parse(localStorage_getItem("language_" + g_username_hash));
    LPServer.lmiapi.jsonRequest({
        type: "POST",
        url: "lmiapi/users/me/language",
        data: {
            language: a
        },
        success: function() {
            r.shouldUpdateOnNextLogin && (r.shouldUpdateOnNextLogin = !1, localStorage_setItem("language_" + g_username_hash, JSON.stringify(r))), "function" == typeof t && t()
        }
    })
}

function checkCorrectLanguageCodeFormat(e) {
    var t = /([a-zA-Z]{2})[_-]?(.+)?/,
        a = e.match(t);
    return !(!a || !a.length) && [a[1].toLowerCase(), a[2] ? a[2].toUpperCase() : a[1].toUpperCase()].join("-")
}

function setLanguageNotificationDismissal(e) {
    LPServer.lmiapi.jsonRequest({
        type: "POST",
        url: "lmiapi/users/me/language/dismiss-notification",
        success: function() {
            g_show_original_language_changed_notification = !1, e()
        }
    })
}
//# sourceMappingURL=sourcemaps/background.js.map