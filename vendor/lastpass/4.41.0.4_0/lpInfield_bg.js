var InfieldCommands = function() {
    var n = {};
    return {
        getPopupFillData: function(e, t) {
            var i = a(t.tabURL),
                r = o(t.tabID),
                n;
            e({
                url: t.tabURL,
                fillData: {
                    sites: i.sites,
                    formFills: i.formfills,
                    favIcons: i.favicons,
                    bigIcons: i.bigicons
                },
                domPath: r.domPath,
                fieldID: r.fieldID,
                fieldType: r.fieldType,
                type: r.type,
                save: r.save,
                generate: 1 === r.generate,
                canCopyToClipboard: can_copy_to_clipboard(),
                userName: g_username,
                condensedDropdown: LPContentScriptFeatures.omar_infield_b,
                noHeaders: LPContentScriptFeatures.omar_infield_c
            })
        },
        setActiveFormData: function(e, t) {
            var i = n[t.tabID] || {};
            for (var r in i) i.hasOwnProperty(r) && (i[r].isActive = !1);
            i[e.active] = {
                isActive: !0,
                domPath: e.active,
                fieldID: e.activefieldid,
                fieldType: e.activefieldtype,
                type: e.start_type,
                save: e.opentosave,
                generate: e.ask_generate
            }, n[t.tabID] = i
        },
        copyPassword: function(e, t, i, r) {
            sendLpImprove("copypass", {
                url: r.tabURL,
                source: "formv2",
                action: "sitepassword"
            }), sendLpImprove("sitelogin", {
                copy: 1,
                shareType: getShareType(e),
                autologin: 0,
                source: "formv2"
            }), copypassword(e, null, t ? 1 : 0, r.tabID)
        },
        copyUserName: function(e, t, i) {
            copyusername(e, t ? 1 : 0, i.tabID)
        },
        copyUrl: function(e, t, i) {
            copyurl(e, t ? 1 : 0, i.tabID)
        },
        copyProp: function(e, t, i, r, n) {
            copyprop(e, t, i ? 1 : 0, void 0, void 0, r)
        },
        getGeneratePasswordPrefs: function(e, t) {
            var i;
            e(do_popupfillgetgenerateprefs(t.tabID))
        },
        setGeneratePasswordPrefs: function(e, t) {
            do_popupfillsetgenerateprefs(t.tabID, e)
        },
        searchVault: function(e, t, i, r) {
            var n;
            i(do_searchvault(e, t, r.tabID))
        },
        searchVaultAll: function(e, t, i, r) {
            var n;
            i(s(e, t, r.tabID))
        },
        fillGeneratedPassword: function(i, e, r, n) {
            var t;
            LPTabs.get({
                tabID: n.tabID
            }).forEachWindow({
                each: function(e, t) {
                    return e.LPInfieldFrame.fillGeneratedPassword(n.tabURL, i, r, g_equivalentdomains)
                }
            }), e.action = "formfill", sendLpImprove("genpassword", e)
        },
        fillUserData: function(e, t, i) {
            r(i.tabID, e, t), sendLpImprove("sitelogin", {
                copy: 0,
                shareType: getShareType(e),
                autologin: 0,
                source: "formv2"
            })
        },
        editFormFill: function(e, t) {
            LPContentScriptFeatures.omaria ? openeditsecurenote(e) : editprofile(e, null, t)
        },
        fillForm: function(e, t, i, r) {
            var n = null;
            if (t)
                if (frame_and_topdoc_has_same_domain(r.tabID)) LPContentScriptFeatures.omaria && (n = !0);
                else {
                    if (ftd_report_error(r.tabID, "fillform"), !lpConfirmYesNo(gs("Are you sure you want LastPass to fill your information into this site:") + "\n\n" + lp_gettld_url(ftd_get_frameparenturl(r.tabID)))) return !1;
                    n = !0
                } LPContentScriptFeatures.omaria ? fillitem(e, null, null, t, n, i) : fillform(e, null, null, null, t, n, i)
        },
        editSite: function(e) {
            editAid(e)
        },
        canCopy: function(e) {
            "function" == typeof e && e(can_copy_to_clipboard() && !g_isedge && (have_binary() || !is_firefox_webext()))
        }
    };

    function o(e) {
        var t = n[e] || {};
        for (var i in t)
            if (t.hasOwnProperty(i) && t[i].isActive) return t[i]
    }

    function a(e, t) {
        var i = [],
            r = {},
            n = {},
            o = "",
            a = "",
            s = "",
            l = "",
            f = new Array,
            c = new Array,
            d = {};
        t = t || lp_gettld_url(e), i = getsites(t), i = reorderOnURL(i, e, !0);
        for (var u = 0; u < i.length; u++) r[i[u].aid] = geticonurlfromrecord(i[u]), d[i[u].aid] = getbigsquareiconurlfromrecord(i[u]);
        var g = LPJSON.stringify("");
        if (LPContentScriptFeatures.omaria) {
            notekeys = Object.keys(g_securenotes);
            for (var p = 0; p < notekeys.length; p++) check_ident_aid(g_securenotes[notekeys[p]].aid) && (-1 < fillableNoteTypes.indexOf(g_securenotes[notekeys[p]].notetype) || "Custom_" === g_securenotes[notekeys[p]].notetype.substring(0, 7)) && (c[p] = addUserFriendlyDescription(g_securenotes[notekeys[p]]), c[p].language = v(c[p]));
            c && 0 < c.length && (g = LPJSON.stringify(c))
        } else {
            for (var _ = 0; _ < g_formfills.length; _++)
                if (check_ident_ffid(g_formfills[_].ffid)) {
                    f[f.length] = g_formfills[_];
                    var m = lpmdec_acct(g_formfills[_].ccnum, !0, g_formfills[_], g_shares);
                    if (r[g_formfills[_].ffid] = geticonCCnum(m), d[g_formfills[_].ffid] = geticonCCnum(m, !0), "" !== g_formfills[_].ccnum) {
                        var y = lpmdec(g_formfills[_].ccnum);
                        f[f.length - 1].description = LPCC.getFormattedNumber(y), f[f.length - 1].ccType = LPCC.getCCType(y)
                    }
                } f && 0 < f.length && (g = LPJSON.stringify(f))
        }
        return l = cache_usernames(i), o = g, a = LPJSON.stringify(r), g_40fieldicon && (s = LPJSON.stringify(d)), l && (n.sites = l), o && (n.formfills = o), a && (n.favicons = a), s && (n.bigicons = s), n
    }

    function v(e) {
        var t = lpmdec(e.extra, !0),
            i = /Language:(.+)/.exec(t);
        return i && 1 < i.length ? i[1] : "en-US"
    }

    function r(e, t, i) {
        if (!lploggedin || null != grid_getdata("active")) return !1;
        if (g_last_launch[t] = (new Date).getTime(), void 0 === g_sites[t]) return !1;
        var r = !0,
            n = get_record(t);
        return i && !n.save_all && (r = !0), g_fillfield_confirm_perfield = {}, fill({
            tabid: e,
            acct: g_sites[t],
            docid: null,
            submit: !1,
            doconfirm: !0,
            docnum: "all",
            allowforce: !0,
            skip_pwprotect: !1,
            manualfill: r,
            automaticallyFill: null,
            skip_basicauth: null,
            from_iframe: i,
            desc: "autofillaid",
            source: "notrack"
        }), !0
    }

    function s(e, t, i) {
        e = e && e.toLowerCase().trim();
        var r = {},
            n = {},
            o = "",
            a = g_popup_url_by_tabid[i];
        for (var s in a && (o = lp_gettld_url(a)), g_sites) !check_ident_aid(g_sites[s].aid) || g_sites[s].tld !== o || e && -1 === g_sites[s].name.toLowerCase().indexOf(e) && -1 === g_sites[s].unencryptedUsername.toLowerCase().indexOf(e) || (r[s] = g_sites[s], g_sites[s].tld && g_bigsquareicons[g_sites[s].tld] && (n[s] = "data:image/png;base64," + g_bigsquareicons[g_sites[s].tld]));
        for (var l = Object.keys(g_securenotes), f = new Array, c = 0; c < l.length; c++) check_ident_aid(g_securenotes[l[c]].aid) && -1 < fillableNoteTypes.indexOf(g_securenotes[l[c]].notetype) && -1 !== g_securenotes[l[c]].decprofilename.toLowerCase().indexOf(e) && (f[c] = addUserFriendlyDescription(g_securenotes[l[c]]));
        return JSON.stringify({
            sites: r,
            bigicons: n,
            formfills: f
        })
    }
}();
//# sourceMappingURL=sourcemaps/lpInfield_bg.js.map