var LPCFG = {
        do_popup_actions: !0,
        popup_show_sitename_suffix: !0,
        popup_show_menu_expand_visual_cue: !0,
        g_do_icon_number_hint: !0,
        g_creditcard_profile_annotate: !0,
        g_visual_cue_on_hover: !0,
        RETRY_TIMEOUT_QUANTUM: 30,
        __FINAL: 0
    },
    LPIFRAMEVARS = {
        g_genpws: [],
        g_myprefs: {},
        g_should_set_prefs: !0,
        g_sites: null,
        g_formfills: null,
        g_favicons: null,
        g_bigicons: null,
        g_genpwpattern: "",
        g_do_40fieldicon: !1,
        _FINAL: 0
    },
    LPpop = {
        create_popup_obj: function(e, t) {
            var i = "undefined" != typeof g_isfirefox && g_isfirefox ? "html:" : "",
                n = null,
                l = null,
                r = null,
                p = null,
                o = null,
                a = null;
            if ((a = e.createElement(i + "div")).style.display = "block", a.style.border = "0", !a) return null;
            var s = null,
                f = null,
                u = null,
                d = null,
                _, c, g, A, m = "",
                R, L = 0,
                h = 300,
                P = 20,
                v = 0;
            LPCFG.popup_show_menu_expand_visual_cue && (v = 24);
            var b = "font-size: 14px;font-family: Helvetica,Arial,sans-serif;font-weight:bold;",
                E;
            E = "undefined" != typeof measureText ? measureText : LP_measureText;
            var y = {},
                F, x, R;
            if (void 0 !== t.favicons && (y = LPJSON.parse(t.favicons)), !(s = e.createElement(i + "div"))) return null;
            if (s.setAttribute("id", "popupcontainer"), a.appendChild(s), !(f = e.createElement(i + "table"))) return null;
            if (f.setAttribute("id", "lptabpopup"), s.appendChild(f), !(u = e.createElement(i + "div"))) return null;
            if (u.setAttribute("id", "popupcontainerff"), a.appendChild(u), !(d = e.createElement(i + "table"))) return null;
            if (d.setAttribute("id", "lptabpopupformfills"), d.style.display = "none", u.appendChild(d), tbodyff = e.createElement(i + "tbody"), tbodyff.setAttribute("id", "lptbodyff"), d.appendChild(tbodyff), void 0 === t.sites) c = 0;
            else
                for (R in c = O(_ = LPpop.getAutoFillArray(e, LPJSON.parse(t.sites), !0)), _)
                    if (_.hasOwnProperty(R) && null != _[R] && null != _[R].useusername) {
                        var S = _[R].useusername;
                        S.length <= 0 && (S = _[R].name);
                        var I = S,
                            n, l, C, M, V, x;
                        if (!(n = e.createElement(i + "tr"))) return null;
                        if (n.setAttribute("id", "trpopuprow" + lp_ofa(R)), n.setAttribute("aid", _[R].aid), n.setAttribute("sitename", _[R].name), n.setAttribute("username", _[R].useusername), n.className = "popuprow", LPIFRAMEVARS.g_do_40fieldicon && (n.style.height = "39px"), f.appendChild(n), !(l = e.createElement(i + "td"))) return null;
                        if (l.setAttribute("id", "tdpopuprow" + lp_ofa(R)), l.setAttribute("aid", lp_ofa(_[R].aid)), n.appendChild(l), void 0 !== y[_[R].aid]) {
                            var w;
                            if (LPIFRAMEVARS.g_do_40fieldicon)(w = LPpop.gen_image_frag(e, LPpop.lookup_bigicon(_[R].aid))).width = "88px", w.height = "22px", w.style.width = "88px", w.style.height = "22px";
                            else var w = LPpop.gen_image_frag(e, LPpop.lookup_favicon(_[R].aid));
                            w && l.appendChild(w)
                        }
                        if (LPIFRAMEVARS.g_do_40fieldicon)(C = e.createElement(i + "div")).style.position = "absolute", C.style.display = "inline-block", C.style.left = "104px";
                        if (!(M = e.createElement(i + "span"))) return null;
                        if (M.setAttribute("id", "spanpopuprow" + lp_ofa(R)), M.className = "popcell shortenstr", LPIFRAMEVARS.g_do_40fieldicon && (M.style.fontSize = "11px", M.style.fontWeight = "bold"), "undefined" != typeof g_isedge && g_isedge && M.setAttribute("x-ms-format-detection", "none"), LP_elt_set_text(M, S), LPIFRAMEVARS.g_do_40fieldicon ? (C.appendChild(M), l.appendChild(C)) : l.appendChild(M), LPCFG.popup_show_menu_expand_visual_cue)(V = LPpop.visual_cue_frag(e, "expand", R)) && (LPIFRAMEVARS.g_do_40fieldicon ? C.appendChild(V) : l.appendChild(V));
                        if (LPCFG.popup_show_sitename_suffix) {
                            var N = _[R].name,
                                k = LPpop.subscript_name_frag(e, N);
                            k && (LPIFRAMEVARS.g_do_40fieldicon ? (k.style.paddingLeft = 0, C.appendChild(k)) : l.appendChild(k))
                        }(x = E(e, I, null, b)).width + P + v > L && (L = x.width + P + v)
                    } if (void 0 === t.formfills) A = 0;
            else
                for (A = O(g = LPJSON.parse(t.formfills)), F = 0; F <= 1; F++)
                    for (R in g)
                        if (g.hasOwnProperty(R) && null != g[R] && null != g[R].decprofilename && null != g[R].profiletype && parseInt(g[R].profiletype) === F) {
                            var G = "",
                                l, C;
                            if ("" != g[R].ccnum && 0 == g[R].profiletype && (G = "hascc='1' "), !(n = e.createElement(i + "tr"))) return null;
                            if (n.setAttribute("id", "trpopupffrow" + lp_ofa(R)), n.setAttribute("ffid", g[R].ffid), n.setAttribute("profilename", g[R].decprofilename), n.setAttribute("formtype", F), "" != g[R].ccnum && 0 == g[R].profiletype && n.setAttribute("hascc", "1"), n.className = "popuprow", tbodyff.appendChild(n), !(l = e.createElement(i + "td"))) return null;
                            if (l.setAttribute("id", "tdpopupffrow" + lp_ofa(R)), l.setAttribute("ffid", g[R].ffid), n.appendChild(l), void 0 !== y[g[R].ffid]) {
                                var w;
                                if (LPIFRAMEVARS.g_do_40fieldicon)(w = LPpop.gen_image_frag(e, LPpop.lookup_bigicon(g[R].ffid))).width = "88px", w.height = "22px", w.style.width = "88px", w.style.height = "22px", w.style.backgroundColor = "#666666";
                                else var w = LPpop.gen_image_frag(e, LPpop.lookup_favicon(g[R].ffid));
                                w && l.appendChild(w)
                            }
                            if (LPIFRAMEVARS.g_do_40fieldicon)(C = e.createElement(i + "div")).style.position = "absolute", C.style.display = "inline-block", C.style.left = "104px";
                            var I = g[R].decprofilename,
                                M, V, x;
                            if ((M = e.createElement(i + "span")).className = "popcell shortenstr", M.setAttribute("id", "spanpopupffrow" + lp_ofa(R)), LPIFRAMEVARS.g_do_40fieldicon && (M.style.fontSize = "11px", M.style.fontWeight = "bold"), LP_elt_set_text(M, lp_of(g[R].decprofilename, e)), LPIFRAMEVARS.g_do_40fieldicon ? (C.appendChild(M), l.appendChild(C)) : l.appendChild(M), LPCFG.g_creditcard_profile_annotate && 1 == F) {
                                var T = e.createElement(i + "span");
                                T.className = "cc", LP_elt_set_text(T, "(" + lpgs("Credit Card") + ")"), M.appendChild(T), I += lpgs("Credit Card")
                            }
                            if (LPCFG.popup_show_menu_expand_visual_cue)(V = LPpop.visual_cue_frag(e, "expandff", R)) && (LPIFRAMEVARS.g_do_40fieldicon ? C.appendChild(V) : l.appendChild(V));
                            (x = measureText(e, I, null, b)).width + P + v > L && (L = x.width + P + v)
                        } if (LPCFG.do_popup_actions) {
                if (0 < A) {
                    if (!(n = e.createElement(i + "tr"))) return null;
                    if (n.className = "tablerow_sep", tbodyff.appendChild(n), !(l = e.createElement(i + "td"))) return null;
                    var o;
                    if (n.appendChild(l), !(o = e.createElement(i + "hr"))) return null;
                    l.appendChild(o)
                }
            } else if (c <= 0 && A <= 0) return null;

            function O(e) {
                var t = 0;
                for (var i in e) t++;
                return t
            }
            return h < L && (L = h), g_popupfill_widest = L, a
        },
        visual_cue_frag: function(e, t, i) {
            var n = null,
                l = null,
                r = "undefined" != typeof g_isfirefox && g_isfirefox ? "html:" : "";
            if (!t || !e) return null;
            if (LPCFG.popup_show_menu_expand_visual_cue) {
                if (!(n = e.createElement(r + "span"))) return null;
                n.setAttribute("id", t + lp_ofa(i)), n.setAttribute("expander", "true"), n.className = "expander", LPCFG.g_visual_cue_on_hover && (n.style.display = "none"), LPIFRAMEVARS.g_do_40fieldicon && (n.style.paddingRight = "16px");
                var p = "arrow.png",
                    o = LPpop.gen_image_frag(e, p);
                o && (o.setAttribute("id", t + "img" + lp_ofa(i)), o.setAttribute("alt", "+"), n.appendChild(o))
            }
            return n
        },
        subscript_name_frag: function(e, t) {
            var i = null;
            if (!e) return null;
            var n = "undefined" != typeof g_isfirefox && g_isfirefox ? "html:" : "";
            return t && 0 < t.length && ((i = e.createElement(n + "p")).className = "subtext", LP_elt_set_text(i, t), LPIFRAMEVARS.g_do_40fieldicon && (i.className += " shortenstr")), i
        },
        gen_image_frag: function(e, t) {
            if (!e) return null;
            var i = "undefined" != typeof g_isfirefox && g_isfirefox ? "html:" : "",
                n = null;
            if (g_isfirefox) {
                if (!(n = e.createElement("image"))) return null;
                n.setAttribute("src", t), n.style.padding = "2px"
            } else {
                if (!(n = e.createElement(i + "img"))) return null;
                n.setAttribute("src", t), n.style.padding = "2px", n.setAttribute("alt", "")
            }
            return n
        },
        set_icon_hint_from_data: function(e, t) {
            var i, n, l, r;
            LPCFG.g_do_icon_number_hint && (n = void 0 === t.sites ? 0 : p(i = LPpop.getAutoFillArray(e, LPJSON.parse(t.sites), !0)), r = void 0 === t.formfills ? 0 : p(l = LPJSON.parse(t.formfills)), g_icon_numbers.sites = n, g_icon_numbers.formfills = r, g_icon_numbers.generate = r);

            function p(e) {
                var t = 0;
                for (var i in e) t++;
                return t
            }
        },
        getAutoFillArray: function(e, t, i) {
            var n = [],
                l = punycode.URLToASCII(e.location.href),
                r = lpcanonizeUrl(l);
            for (var p in t) t[p].genpw && !i || (n[p] = t[p]);
            return n
        },
        lookup_username: function(e) {
            var t, i;
            if (LPIFRAMEVARS && LPIFRAMEVARS.g_sites && null !== e)
                for (i in LPIFRAMEVARS.g_sites)
                    if (LPIFRAMEVARS.g_sites[i] && LPIFRAMEVARS.g_sites[i].aid == e) return (t = LPIFRAMEVARS.g_sites[i]).useusername ? t.useusername : t.unencryptedUsername ? t.unencryptedUsername : "";
            return ""
        },
        lookup_sitename: function(e) {
            var t, i;
            if (LPIFRAMEVARS && LPIFRAMEVARS.g_sites && null !== e)
                for (i in LPIFRAMEVARS.g_sites)
                    if (LPIFRAMEVARS.g_sites[i] && LPIFRAMEVARS.g_sites[i].aid == e) return (t = LPIFRAMEVARS.g_sites[i]).sitename ? t.sitename : t.name ? t.name : "";
            return ""
        },
        lookup_profile: function(e) {
            var t, i;
            if (LPIFRAMEVARS && LPIFRAMEVARS.g_formfills && null !== e)
                for (i in LPIFRAMEVARS.g_formfills)
                    if (LPIFRAMEVARS.g_formfills[i] && LPIFRAMEVARS.g_formfills[i].ffid == e) return (t = LPIFRAMEVARS.g_formfills[i]).decprofilename ? t.decprofilename : t.decprofilename ? t.profilename : "";
            return ""
        },
        lookup_favicon: function(e) {
            var t;
            if (LPIFRAMEVARS && LPIFRAMEVARS.g_favicons && null !== e) return (t = LPIFRAMEVARS.g_favicons[e]) || null
        },
        lookup_bigicon: function(e) {
            var t;
            if (LPIFRAMEVARS && LPIFRAMEVARS.g_bigicons && null !== e) return (t = LPIFRAMEVARS.g_bigicons[e]) || null
        },
        __FINAL__: 0
    };
//# sourceMappingURL=sourcemaps/popup_inframe_lib.js.map