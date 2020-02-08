var SHOULD_DO_LOGIN_ONLY = !0,
    SHOULD_DO_ALWAYS = !1;

function popupfill_shoulddofield(e, t, r) {
    var n = ["lpcurrpasselt", "lpcurruserelt"];
    if (null == t || void 0 === t.type || "hidden" == t.type) return !1;
    if ("text" == t.type || "password" == t.type || "email" == t.type || !r && "tel" == t.type || !r && "url" == t.type || !r && "textarea" == t.type) {
        var a = LP_pickFieldName(e, t);
        if (lp_in_array(a, n)) return decision_log(e, "DE28", {
            param1: a
        }), !1;
        if (is_search_field(e, t, !r)) return !1;
        if (is_date_field(t)) return !1;
        if (LP_looksLikeOTPField(e, t)) return !1;
        if (LP_explicit_ignored(e, t)) return !1;
        if (LP_implicit_ignored(e, t)) return !1;
        if (LP_isCaptchaField(t)) return !1;
        if (r) {
            if (!chk_form_has_password(e, t.form) && !checkDocumentForLoginOrphans(e)) {
                if (verbose) {
                    var i = LP_pickFormName(e, t.form);
                    decision_log(e, "DE29", {
                        param1: i
                    })
                }
                return !1
            }
            if (t.form && is_shopping_form(e, t.form) && g_aspx_hack && (isASPpage() && 2 < e.getElementsByTagName("form").length || !isASPpage())) return !1
        }
        return !0
    }
    return !1
}

function chk_form_ask_generate(e, t, r) {
    var n = null;
    if (null == e || null == t || !R(t)) return !1;
    var a = LP_pickFormName(e, t),
        i;
    if (r);
    else if (null != (i = formcacheget(e, a, "ask_generate"))) return i;
    if (void 0 !== t.elements) var o = t.elements;
    else var o = t.getElementsByTagName("input");
    if (Checkpoint.assert(o.length < MAX_FORM_ELEMENTS_HARD, "form " + a + " has too many inputs"), o.length > MAX_FORM_ELEMENTS_HARD) return formcacheset(e, a, "is_login", !1), !1;
    var l = "";
    try {
        l = e.location.href;
        var s = gettldcached(e.location.href)
    } catch (e) {
        return !1
    }
    var c = 0,
        f = 0,
        d = 3;
    r && (d = 2), g_aspx_hack && isASPpage() && (d = 7);
    var u = 1,
        _ = 100,
        p = 2,
        m = 4;
    if ("tumblr.com" == s && (tumblr_action_btn = e.getElementById("signup_forms_submit"), null != tumblr_action_btn)) {
        var g = tumblr_action_btn.getElementsByTagName("SPAN"),
            h;
        for (h = 0; h < g.length; h++)
            if (0 <= g[h].className.indexOf("login_btn") && checkIsDisplayed(e, g[h], 0, s)) return !1
    }
    if (!checkIsDisplayed(e, t, 0, s)) return decision_log(e, "DE30"), !1;
    var v = LP_getname(t, LP_GETNAME_FAVOR_ID_OVER_NAME);
    if (null != v && (0 <= v.toLowerCase().indexOf("signup") || 0 <= v.toLowerCase().indexOf("register")) && -1 == v.toLowerCase().indexOf("login")) return decision_log(e, "DE31", {
        param1: a
    }), formcacheset(e, a, "ask_generate", !0), !0;
    var y = !1,
        P = !1;
    if ("undefined" != typeof Math) {
        var L = Math.floor(1e4 * Math.random()),
            E = 0,
            x = 0,
            k = 0,
            b = null,
            N = t.elements.length;
        Checkpoint.assert(N < MAX_FORM_ELEMENTS_SOFT, "form " + a + " too big 1"), N > MAX_FORM_ELEMENTS_SOFT && (N = MAX_FORM_ELEMENTS_SOFT);
        for (var w = 0; w < N; w++) {
            var F;
            if ("INPUT" == (F = t.elements[w]).tagName && ("password" == F.type ? E++ : "text" != F.type && "email" != F.type || x++), ("INPUT" == F.tagName && "submit" == F.type || "BUTTON" == F.tagName) && (b = F, 10 < ++k && t.elements.length > MAX_FORM_ELEMENTS_SOFT)) return !1
        }
        if (1 == k && x <= 2 && 0 < E && checkButtonHint(b)) return decision_log(e, "DE32"), !1;
        for (var o = t.elements, w = 0; w < MAX_FORM_ELEMENTS_SOFT && w < o.length; w++) {
            var F;
            if (P = !1, "FIELDSET" != (F = o[w]).tagName && valid_by_role(e, F) && !LP_fieldIsDisabled(F) && !LP_treat_as_hidden(F) && ("expedia.com" == s || checkIsDisplayed(e, F, 0, s, L)) && (!g_use_wacky_disp || is_wacky_disp(e, F))) {
                if ("text" == F.type && is_watermark(F.className) && is_watermark_password(F)) try {
                    F.type = "password"
                } catch (e) {
                    P = !0
                }
                var T = LP_elt_get_text(F);
                if (("BUTTON" == F.tagName && "submit" == F.type && null != T && 0 <= T.indexOf("Create") || "BUTTON" == F.tagName && "submit" == F.type && null != T && 0 <= T.indexOf("Register") || "INPUT" == F.tagName && "submit" == F.type && null != F.value && 0 <= F.value.indexOf("Create") || "INPUT" == F.tagName && "submit" == F.type && null != F.value && 0 <= F.value.indexOf("Register") || "INPUT" == F.tagName && "submit" == F.type && null != F.value && 0 <= F.value.indexOf("Sign me up") || "INPUT" == F.tagName && "image" == F.type && null != F.value && "create" == F.value) && (d = 2, decision_log(e, "DE33", {
                        param1: a
                    })), 1 < E && LP_passwordAlt(e, F)) f++;
                else {
                    var I = fieldIsDoublePassword(e, F);
                    if (!(t && "form1" == t.id && t.action && "string" == typeof t.action && t.action.indexOf(".aspx") && "text" == F.type && (I === DOUBLE_PW_VISIBLE || I === DOUBLE_SECRET_PW_VISIBLE) || do_bgiconinput && "text" == F.type && (I === DOUBLE_TEXT_VISIBLE || I === DOUBLE_SECRET_TEXT_VISIBLE))) {
                        if ("password" == F.type || P || "text" == F.type && I === DOUBLE_TEXT_VISIBLE || "text" == F.type && I === DOUBLE_SECRET_TEXT_VISIBLE) {
                            var S = F.getAttribute("placeholder"),
                                O;
                            if (null != S && 0 <= S.indexOf("Create your") && (y = !0, d = 2), "facebook.com" == s && "string" == typeof F.id && F.id.match(/^[a-z0-9]{6}_\d{1,2}_ci_password$/)) continue;
                            if ("tdbank.com" == s && "string" == typeof F.name && "user" == F.name) {
                                f++;
                                continue
                            }
                            if (0 == c && 1 < E && passwordIsFake(F)) {
                                f++;
                                continue
                            }
                            if (0 < c && 1 < E && LP_looksLikeOTPField(e, F)) {
                                f++;
                                continue
                            }
                            LP_get_input_pattern(e, F) && !n && (n = F), c++
                        } else if ("email" == F.type || "text" == F.type || "textarea" == F.type || "tel" == F.type || "url" == F.type)
                            if (treat_text_as_password(F)) c++;
                            else {
                                if (LP_isForgetField(F)) continue;
                                var A;
                                if (lpIsVisible(F, !0)) {
                                    var D = LP_pickFieldName(e, F);
                                    LP_looksLikeOTPField(e, F) ? decision_log(e, "DE35", {
                                        param1: D
                                    }) : f++
                                }
                            } if (4 <= c || _ <= f) return 4 <= c && decision_log(e, "DE37", {
                            param1: a,
                            param2: c,
                            param3: f
                        }), _ <= f && decision_log(e, "DE38", {
                            param1: a,
                            param2: c,
                            param3: f
                        }), formcacheset(e, a, "ask_generate", !1), !1;
                        if (2 <= c || 1 <= c && d <= f) return 2 <= c && decision_log(e, "DE39", {
                            param1: a,
                            param2: c,
                            param3: f
                        }), 1 <= c && d <= f && decision_log(e, "DE40", {
                            param1: a,
                            param2: c,
                            param3: f
                        }), formcacheset(e, a, "ask_generate", !0), n && (g_isie || g_isfirefox || sendBG_generate_pattern(e, n)), !0
                    }
                }
            }
        }
        return decision_log(e, "DE41", {
            param1: a,
            param2: c,
            param3: f
        }), formcacheset(e, a, "ask_generate", !1), !1
    }

    function R(e) {
        return e && e.tagName && "FORM" == e.tagName.toUpperCase()
    }
}

function passwordIsFake(e) {
    var t, r = new RegExp("(?:Account)|(?:Member)|(?:IUO_NAME)", "i"),
        n = e.id,
        a = e.name;
    return !(!r.exec(n) && !r.exec(a))
}

function checkButtonHint(e) {
    if (!e) return !1;
    var t = e.id,
        r = "INPUT" == e.tagName ? e.value : e.innerHTML,
        n, a = new RegExp("(?:Login)|(?:Log.In)|(?:Logon)|(?:Log.on)", "i");
    return !(!a.exec(t) && !a.exec(r))
}

function LP_isForgetField(e) {
    if (!e) return !1;
    var t = e.id,
        r = e.name,
        n = new RegExp(lpgs("ff_forgot_regexp"), "i");
    return !(!n.exec(t) && !n.exec(r))
}

function LP_isCaptchaField(e) {
    if (!e) return !1;
    var t = e.id,
        r = e.name,
        n = new RegExp(lpgs("ff_captcha_regexp"), "i");
    return !(!n.exec(t) && !n.exec(r))
}

function element_is_detached(e, t, r) {
    if (!t) return !1;
    if (!e && !(e = t.ownerDocument)) return !1;
    void 0 === r && (r = 0);
    var n = 15,
        a = null;
    try {
        15 < r && (a = !1), null == t.parentNode && (a = !0), t.parentNode !== e.documentElement && t.parentNode !== t.ownerDocument.documentElement || (a = !1)
    } catch (e) {
        a = !0
    }
    return null == a ? element_is_detached(e, t.parentNode, r + 1) : a
}

function get_javaservlet_fields(e, t) {
    if (!e) return [];
    null == t && (t = !1);
    var r = [],
        n = e.getElementsByName("j_username"),
        a = e.getElementsByName("j_password");
    if (1 === n.length && 1 === a.length) Checkpoint.assert(n[0].form === a[0].form, "javaservlet form mismatch"), r = [n[0], a[0]];
    else if (!t || 1 !== n.length && 1 !== a.length) {
        var i = e.getElementsByTagName("FORM"),
            o = LP_getFormsThreshold(e);
        Checkpoint.assert(i.length < o, "too many forms on page");
        for (var l = 0; l < o && l < i.length; l++)
            if (i[l].action && void 0 !== i[l].action.indexOf && 0 <= i[l].action.indexOf("j_security_check")) {
                var s = form_get_username(e, i[l]),
                    c = form_get_password(e, i[l]);
                s && c && (r = [s, c]);
                break
            }
    } else {
        var s = null,
            c = null;
        1 === n.length && (s = n[0]), 1 === a.length && (c = a[0]), r = [s, c]
    }
    return r
}

function is_random_hashstr(e) {
    return !!e && (!(16 != e.length && 32 != e.length || !e.match(/^[a-zA-Z0-9]+$/) || e == e.toLowerCase() || !e.match(/[0-9]/) || e == e.toUpperCase()) || (!(32 != e.length || !e.match(/^[a-f0-9]+$/)) || (!!e.match(/_\d{18}[A-Z]{4}_/) || (!(17 != e.length || "a" != e.charAt(0) || !e.match(/^[a-zA-Z0-9_]+$/) || e == e.toLowerCase() || !e.match(/[0-9]/) || e == e.toUpperCase()) || (!!(20 == e.length && e.match(/^[A-Z]0[A-F]\d{16}[A-Z]$/) || 21 == e.length && e.match(/^[A-Z]0[A-F]\d{17}[A-Z]$/)) || (!(18 != e.length || !e.match(/^el[0-9a-f]{16}$/)) || (!!(24 < e.length && e.match(/^yui_[0-9_a-z]+$/)) || !!(14 <= e.length && e.match(/^[a-zA-Z_]{8}[a-zA-Z_]+\[[0-9]{2}[0-9]+\]$/)))))))))
}

function chk_form_changepw_new() {
    return !0
}

function shouldOfferGenerate(e, t) {
    if (null == e || null == t) return null;
    var r = !1,
        n = t.form,
        a = !1;
    n || (a = checkDocumentForCPWOrphans(e));
    var i = getNeverUrlRules(e, e.location.href),
        o = i.generateEnabled,
        l;
    if (i.isAllowed && o && chk_form_ask_generate(e, n) && isInputFieldPassword(e, t)) {
        var s;
        if (chk_form_has_password(e, n)) {
            var c = LP_pickFormName(e, n),
                f;
            if (new RegExp(lpgs("ff_loginform_regexp"), "i").exec(c)) return !1
        }
        if (currentpw = lpCheckCurrentPWField(n), !currentpw) {
            var d = !0;
            currentpw = lpCheckCurrentPWField(n, !0)
        }
        chk_form_changepw(e, n) && t == lpCheckCurrentPWField(n) ? (r = !1, "undefined" != typeof g_docnum && decision_log(e, "DE42", {
            param1: g_docnum,
            param2: LP_pickFormName(e, n),
            param3: LP_pickFieldName(e, t)
        })) : chk_form_changepw_new(e, n) && t == currentpw ? (r = !1, "undefined" != typeof g_docnum && decision_log(e, "DE43", {
            param1: g_docnum,
            param2: LP_pickFormName(e, n),
            param3: LP_pickFieldName(e, t)
        })) : (r = !0, "undefined" != typeof g_docnum && decision_log(e, "DE44", {
            param1: g_docnum,
            param2: LP_pickFormName(e, n),
            param3: LP_pickFieldName(e, t)
        }))
    } else !n && o && a && isInputFieldPassword(e, elt) && !lpIsFieldCurrentPWField(t) && (r = !0, "undefined" != typeof g_docnum && decision_log(e, "DE45", {
        param1: g_docnum,
        param2: LP_pickFieldName(e, t)
    }));
    return r
}

function popupfill_shoulddoform(e, t) {
    if (!(e = e || LP_derive_doc())) return !1;
    if (!t) return !1;
    var r = t.name,
        n = t.id,
        a = ["lpmanualform", "lpwebsiteeventform"];
    return (!r || !lp_in_array(r, a)) && (!n || !lp_in_array(n, a))
}

function LP_isRememberCheckbox(e) {
    if (!e) return !1;
    if ("checkbox" != e.type) return !1;
    var t = e.id,
        r = e.name,
        n = new RegExp(lpgs("ff_remember_regexp"), "i");
    return !(!n.exec(t) && !n.exec(r))
}

function chk_form_is_nonlogin_form(e, t) {
    if (null == e || null == t || !u(t)) return !1;
    var r = 3;
    try {
        var n = gettldcached(e.location.href)
    } catch (e) {
        return !1
    }
    var a = LP_pickFormName(e, t),
        i = formcacheget(e, a, "is_nonlogin");
    if (null != i) return i;
    if (void 0 !== t.elements) var o = t.elements;
    else var o = t.getElementsByTagName("input");
    if (Checkpoint.assert(o.length < MAX_FORM_ELEMENTS_HARD, "form " + a + " has too many inputs"), o.length > MAX_FORM_ELEMENTS_HARD) return formcacheset(e, a, "is_nonlogin", !0), !0;
    if (is_search_form(e, t)) return decision_log(e, "DE46", {
        param1: a
    }), formcacheset(e, a, "is_nonlogin", !1), !1;
    if (!checkIsDisplayed(e, t, 0, n)) return decision_log(e, "DE47", {
        param1: a
    }), !1;
    var l = 0,
        s = 0,
        o, c = (o = t.elements).length;
    Checkpoint.assert(c < MAX_INPUTS_HARD, "form " + a + " too big 2"), c > MAX_INPUTS_HARD && (c = MAX_INPUTS_HARD);
    for (var f = 0; f < c; f++) {
        var d = o[f];
        if ("FIELDSET" != d.tagName && ("email" == d.type || "text" == d.type || "password" == d.type || "tel" == d.type)) {
            if (LP_fieldIsDisabled(d)) continue;
            if (100 < ++s) return formcacheset(e, a, "is_nonlogin", !1), !1;
            if (1 == d.disabled) continue;
            if (!valid_by_role(e, d)) continue;
            if (!lpIsVisible(d)) continue;
            if (LP_treat_as_hidden(d)) continue;
            if (is_search_field(e, d, !0) && o.length < 8) return decision_log(e, "DE48", {
                param1: a
            }), formcacheset(e, a, "is_nonlogin", !1), !1;
            if (3 <= ++l || 1 <= l && 0 === e.location.href.indexOf("https://js.stripe.com")) return decision_log(e, "DE49", {
                param1: a
            }), formcacheset(e, a, "is_nonlogin", !0), !0
        }
    }
    return formcacheset(e, a, "is_nonlogin", !1), !1;

    function u(e) {
        return e && e.tagName && "FORM" == e.tagName.toUpperCase()
    }
}

function treat_text_as_password(e) {
    return !!e && ("TEXTAREA" != e.tagName && ("text" == e.type && (0 == e.name.indexOf("pass") || 0 <= e.name.toLowerCase().indexOf(lpgs("Password").toLowerCase())) && -1 == e.name.toLowerCase().indexOf("hint") && -1 == e.name.toLowerCase().indexOf("placeholder") && !(new RegExp(lpgs("ff_username_regexp"), "i").exec(e.name) && e.form && e.form.action && 0 <= e.form.action.indexOf("login"))));
    var t
}

function ASP_treat_text_as_password(e) {
    return treat_text_as_password(e)
}

function valid_by_role(e, t) {
    if (!t) return !1;
    if (!(e = e || t.ownerDocument)) return !1;
    var r = t.getAttribute("role");
    if (r || "INPUT" == t.tagName || (r = t.parentNode.getAttribute("role")), !r) return !0;
    switch (r) {
        case "navigation":
        case "banner":
        case "contentinfo":
        case "note":
        case "search":
        case "seealso":
            return !1;
        case "columnheader":
        case "presentation":
        case "toolbar":
        case "directory":
            return !1;
        default:
            return !0
    }
}
var should_do_lastpass_here = function(t) {
    var e = null;
    if (!t) return !1;
    if (null != t.g_content_check_result) return t.g_content_check_result;
    try {
        var r = t.location.href;
        if ((0 < r.indexOf(".xul") || 0 < r.indexOf("libsyn.com/embed") || 0 < r.indexOf("platform.twitter.com/tweet_button") || 0 <= r.indexOf("facebook.com/plugins/")) && (e = t.g_content_check_result = !1), null === e && "complete" != t.readyState && "interactive" != t.readyState && (verbose_log("answer hazy, try again later"), e = !0), null === e) {
            var n = t.body,
                a = t.head,
                i = LP_elt_get_text(n).length;
            null === e && 2 < i && is_page_JSON(t) && (e = t.g_content_check_result = !1)
        }
        if (null === e && n) {
            var o = n.getAttribute("contentEditable"),
                l = n.getAttribute("preview"),
                s = null !== n.getAttribute("data-silex-id") || null !== n.getAttribute("data-silex-type");
            ("edit" == l || o || s) && (e = !1)
        }
    } catch (e) {
        return t.g_content_check_result = !1
    }
    return null === e && (e = t.g_content_check_result = !0), e
};

function is_shopping_form(e, t) {
    if (!(e = e || LP_derive_doc()) || !t) return !1;
    var r = LP_createXPathFromElement(e, t);
    r = r || LP_pickFormName(e, t);
    var n = formcacheget(e, r, "is-shopping");
    if (null != n) return n;
    var a = !1,
        i = 0,
        o = 0,
        l = 0,
        s = 0,
        c = 0,
        f = 0,
        d = new RegExp("qty|quantity", "i"),
        u = new RegExp("[Ss]hipping"),
        _ = new RegExp("[Ss]hopping|[CcK]art"),
        p = new RegExp("gift|Gift|GIFT"),
        m = new RegExp("[Cc]heck[Oo]ut"),
        g = t.getElementsByTagName("input");
    Checkpoint.assert(g.length < MAX_INPUTS_SOFT, "form " + LP_getname(t) + " has too many inputs");
    var h = g.length;
    for (h > MAX_INPUTS_SOFT && (h = MAX_INPUTS_SOFT), f = 0; f < h; f++) {
        var v = g[f].id,
            y = g[f].name,
            P = g[f].className;
        if (d.exec(v) || d.exec(y) || d.exec(P)) i++;
        else if (u.exec(v) || u.exec(y) || u.exec(P)) l++;
        else if (_.exec(v) || _.exec(y) || _.exec(P)) o++;
        else if (p.exec(v) || p.exec(y) || p.exec(P)) s++;
        else if (m.exec(v) || m.exec(y) || m.exec(P)) c++;
        else if (L(i, o, l, s, c)) {
            a = !0;
            break
        }
    }
    return formcacheset(e, r, "is-shopping", a), a;

    function L(e, t, r, n, a) {
        var i, o = 0,
            l = [e, t, r, n, a];
        for (i = 0; i < l.length; i++) 0 < l[i] && o++;
        return 2 <= o
    }
}

function is_wacky_disp(e, t) {
    if (!(e = e || LP_derive_doc()) || !t) return !1;
    var r = !1,
        n = !0;
    if (t == e.body) return !0;
    var a = "undefined" != typeof window && window ? window : e.defaultView,
        i = !0;
    try {
        var o = LP_get_live_style(t);
        if (o && ("none" != o.display && "hidden" != o.visibility || (i = !1), 1 != i || t.offsetHeight && t.offsetHeight || (i = !1), 1 != i || 0 != o.height && 0 != o.width || (i = !1), 1 == i && (parseInt(o.height) < 2 || parseInt(o.width) < 2) && (i = !1), 1 == i && (parseInt(o.left) < 0 && "auto" != o.left || parseInt(o.top) < 0 && "auto" != o.top) && (i = !1), 1 == i && "-1px" == o.marginTop && 1 == t.offsetHeight && (i = !1), 1 == i && (t.offsetHeight < 3 || t.offsetWidth < 3) && (i = !1), 1 == i && ("transparent" == o.backgroundColor && "transparent" == o.color || g_isie && "transparent" == o.backgroundColor && "" == o.color || "rgba(0, 0, 0, 0)" == o.backgroundColor && "rgba(0, 0, 0, 0)" == o.color) && (i = !1), 1 == i && o.opacity && parseFloat(o.opacity) < .02 && (i = !1), 1 == i && g_isie && o.filter)) {
            var l, s = new RegExp("alpha\\(opacity=(\\d+)\\)").exec(o.filter);
            s && s[1] && parseInt(s[1]) < 2 && (i = !1)
        }
    } catch (e) {
        i = !0
    }
    if (i) try {
        var c = t.parentNode;
        c || (i = !1);
        var f = LP_get_live_style(c);
        f && (1 != i || "none" != f.display && "hidden" != f.visibility || (i = !1), 1 == i && (parseInt(f.left) < 0 && "auto" != f.left || parseInt(f.top) < 0 && "auto" != f.top) && (i = !1), 1 != i || !(parseInt(f.height) < 3 && "auto" != f.height || parseInt(f.width) < 3 && "auto" != f.width) || "hidden" != f.overflowY && "hidden" != f.overflow || (i = !1))
    } catch (e) {
        i = !0
    }
    return i
}

function LP_treat_as_hidden(e) {
    if (!e) return !0;
    if ("hidden" == e.type) return !0;
    if (!e.parentNode) return !0;
    if (0 == e.id.indexOf("hidden") && ("none" == e.style.display || "none" == e.parentNode.style.display)) return !0;
    var t;
    if ("true" === e.getAttribute("aria-hidden")) return !0;
    var r = e.getAttribute("hidden");
    return !(!r || "false" === r)
}

function LP_has_textlike_type(e) {
    if (!e) return !1;
    var t = e.tagName.toUpperCase();
    if ("INPUT" != t && "TEXTAREA" != t) return !1;
    if ("TEXTAREA" == t) return !0;
    var r = ["text", "number", "email", "tel", "url", "textarea"],
        n;
    for (n in r)
        if (r.hasOwnProperty(n) && e.type == r[n]) return True;
    return False
}

function computeFingerprint(e) {
    if (!e) return "";
    var t = 20,
        r = "",
        n = e.getElementsByTagName("INPUT"),
        a;
    for (a = 0; a < n.length && a < 20; a++) {
        var i;
        r += n[a].id ? n[a].id : n[a].name
    }
    try {
        "undefined" != typeof crc32 && (r = crc32(r).toString())
    } catch (e) {}
    return r
}

function LP_firstVisibleOrphan(e) {
    if (!e) return null;
    var t = 50,
        r = e.getElementsByTagName("INPUT"),
        n, a = null;
    for (n = 0; n < r.length && n < 50; n++)
        if (!(a = r[n]).form && ("text" == a.type || "password" == a.type || "url" == a.type || "email" == a.type) && lpIsVisible(a)) return a;
    return null
}

function checkFormForLoginFirstStage(e, t) {
    var r = 20,
        n = 3,
        a = 2,
        i = 2;
    if (null == e || null == t || "FORM" != t.tagName) return !1;
    var o = LP_pickFormName(e, t);
    verbose_log("checking " + o + " for first stage of multi-stage login");
    var l = formcacheget(e, o, "multi-first");
    if (null != l) return l;
    if ("undefined" == typeof Math) return False;
    for (var s = 0, c = !1, f, d = Math.floor(1e4 * Math.random()), u = 0, _ = 0; _ < 20 && _ < t.elements.length; _++) {
        var f;
        if ("INPUT" == (f = t.elements[_]).tagName) {
            if (!checkIsDisplayed(e, f, 0, null, d, !0)) continue;
            if (looksLikeUsername(f) && s++, "text" == f.type || "tel" == f.type || "url" == f.type || "email" == f.type || "textarea" == f.type) {
                if ("string" == typeof f.id && "identifier-captcha-input" == f.id) try {
                    if ("google.com" == gettldcached(e.location.href)) continue
                } catch (e) {}
                u++
            }
            if (isInputFieldPassword(e, f)) {
                c = !0;
                break
            }
            if (2 <= s) break;
            if (2 <= u) break
        }
    }
    return 0 < s && s <= 3 && 0 == c && u < 2 ? (verbose_log("isolated login field/initial stage of multi-stage found"), formcacheset(e, o, "multi-first", !0), !0) : (formcacheset(e, o, "multi-first", !1), !1)
}

function checkDocumentForLoginFirstStageForm(e) {
    if (!e) return !1;
    var t = LP_getFormsThreshold(e),
        r = e.getElementsByTagName("form");
    Checkpoint.assert(r.length < t, "too many forms on page");
    for (var n = !1, a = 0; a < r.length && a < t; a++)
        if (n = checkFormForLoginFirstStage(e, r[a])) return n;
    return !1
}

function checkDocumentForNonLoginOrphans(e) {
    if (null == e) return !1;
    var t = 20,
        r = 4,
        n = formcacheget(e, "fakedoc", "orphan-signup"),
        a = formcacheget(e, "fakedoc", "orphan-registration"),
        i = formcacheget(e, "fakedoc", "orphan-cc"),
        o = n || a || i;
    if (null != o) return o;
    var l = new RegExp(lpgs("ff_firstname_regexp"), "i"),
        s = new RegExp(lpgs("ff_lastname_regexp"), "i"),
        c = new RegExp(lpgs("ff_cctype_regexp"), "i"),
        f = new RegExp(lpgs("ff_address1_regexp"), "i"),
        d = new RegExp(lpgs("ff_forgot_regexp"), "i"),
        u = new RegExp(lpgs("ff_remember_regexp"), "i"),
        _ = !1,
        p = !1,
        m = !1,
        g = !1,
        h = !1,
        v = !1,
        y = !1,
        P = 3;
    try {
        var L = gettldcached(e.location.href)
    } catch (e) {
        return !1
    }
    for (var E = 0, x = 0, k = e.getElementsByTagName("INPUT"), b = 0; b < k.length && b < 20; b++) {
        var N = k[b];
        if ("INPUT" == N.tagName) {
            if (LP_isRememberCheckbox(N) && lpIsVisible(N) && !LP_fieldIsDisabled(N) && E++, "email" == N.type || "text" == N.type || "password" == N.type) {
                if (LP_fieldIsDisabled(N)) continue;
                if (LP_fieldIsDisabled(N)) continue;
                if (!valid_by_role(e, N)) continue;
                if (!lpIsVisible(N)) continue;
                if (is_search_field(e, N, !0)) continue;
                var w = N.name,
                    F = N.id ? N.id : "",
                    T = lpGetTextBeforeFormField(N);
                looksLikeUsername(N) ? _ = !0 : isInputFieldPassword(e, N) ? p = !0 : l.exec(F) || l.exec(w) || l.exec(T) ? m = !0 : s.exec(F) || s.exec(w) || s.exec(T) ? g = !0 : c.exec(F) || c.exec(w) || c.exec(T) ? h = !0 : (regexp_address1.exec(F) || regexp_address1.exec(w) || regexp_address1.exec(T)) && (v = !0), E++
            }
            if (3 <= E) {
                if (_ && p && !h) return verbose_log("document appears to be have orphan signup fields"), formcacheset(e, "fakedoc", "orphan-signup", !0), formcacheset(e, "fakedoc", "orphan-cc", !1), formcacheset(e, "fakedoc", "orphan-registration", !1), !0;
                if (h && !_ && !p) return verbose_log("document appears to be have orphan credit card fields"), formcacheset(e, "fakedoc", "orphan-cc", !0), formcacheset(e, "fakedoc", "orphan-signup", !1), formcacheset(e, "fakedoc", "orphan-registration", !1), !0;
                if ((m || g) && _) return verbose_log("document appears to be have orphan registration fields"), formcacheset(e, "fakedoc", "orphan-registration", !0), formcacheset(e, "fakedoc", "orphan-signup", !1), formcacheset(e, "fakedoc", "orphan-cc", !1), !0
            }
        }
    }
    return formcacheset(e, "fakedoc", "orphan-signup", !1), formcacheset(e, "fakedoc", "orphan-cc", !1), formcacheset(e, "fakedoc", "orphan-registration", !1), !1;

    function I(e) {
        return e && e.tagName && "FORM" == e.tagName.toUpperCase()
    }
}

function checkDocumentHasOrphanSignup(e) {
    if (!e) return !1;
    var t = formcacheget(e, "fakedoc", "orphan-signup");
    return null != t ? t : (checkDocumentForNonLoginOrphans(e), formcacheget(e, "fakedoc", "orphan-signup"))
}

function checkDocumentHasOrphanCC(e) {
    if (!e) return !1;
    var t = formcacheget(e, "fakedoc", "orphan-cc");
    return null != t ? t : (checkDocumentForNonLoginOrphans(e), formcacheget(e, "fakedoc", "orphan-cc"))
}

function checkDocumentHasOrphanRegistration(e) {
    if (!e) return !1;
    var t = formcacheget(e, "fakedoc", "orphan-registration");
    return null != t ? t : (checkDocumentForNonLoginOrphans(e), formcacheget(e, "fakedoc", "orphan-registration"))
}

function LP_should_ignore_this_doc(e, t) {
    if (!e) return !0;
    if (!e.location) return !0;
    var r = e.location.href;
    return !(!LP_is_browser_url(r) && 0 != r.indexOf("javascript:")) || (0 < r.indexOf(".xul") || !(!t || "www.irccloud.com" != e.location.hostname))
}

function countInputs(e, t, r) {
    var n = 0,
        a = 0,
        i = e.getElementsByTagName("INPUT");
    if ("undefined" != typeof Math) {
        for (var o = 0; o < i.length; o++) {
            if (100 < o) {
                t || (n += i.length - o);
                break
            }
            var l = "password" == i[o].type;
            t && !l || "checkbox" != i[o].type && "hidden" != i[o].type && (l && a++, n++)
        }
        return r && (e.g_password_cnt = a), n
    }
}

function checkForLoginForm(e) {
    if (!(e = e || LP_derive_doc())) return !1;
    try {
        var t = gettldcached(e.location.href)
    } catch (e) {
        return !1
    }
    var r = LP_getFormsThreshold(e),
        n = e.getElementsByTagName("form");
    Checkpoint.assert(n.length < r, "too many forms on page");
    for (var a = !1, i = 0; i < n.length && i < r; i++) {
        if (null == (a = chk_form_has_password(e, n[i], !0))) return !1;
        if (a) return a
    }
    return !1
}

function checkForNonLoginForm(e) {
    if (!(e = e || LP_derive_doc())) return !1;
    try {
        var t = gettldcached(e.location.href)
    } catch (e) {
        return !1
    }
    var r = LP_getFormsThreshold(e),
        n = e.getElementsByTagName("form");
    Checkpoint.assert(n.length < r, "too many forms on page");
    for (var a = !1, i = 0; i < n.length && i < r; i++)
        if (a = chk_form_is_nonlogin_form(e, n[i])) return a;
    return !1
}

function checkForSignupForm(e) {
    if (!(e = e || LP_derive_doc())) return !1;
    var t = LP_getFormsThreshold(e),
        r = e.getElementsByTagName("form");
    Checkpoint.assert(r.length < t, "too many forms on page");
    for (var n = !1, a = 0; a < r.length && a < t; a++)
        if (n = chk_form_ask_generate(e, r[a])) return n;
    return !1
}

function usercacheset(e, t) {
    if (null == e || null == t || 0 === t.length) return !1;
    var r = gettldcached(e.location.href);
    return "function" == typeof sendBG && sendBG({
        cmd: "usercacheset",
        tld: r,
        username: t
    }), verbose_log("USERCACHE-SAVED  domain: " + r + " user: " + t), !0
}

function checkForTotpForm(e, t) {
    if ("undefined" == typeof g_do_totp || !g_do_totp || g_totp_elt) return !1;
    if (!(e = e || LP_derive_doc())) return !1;
    try {
        var r = gettldcached(e.location.href)
    } catch (e) {
        return !1
    }
    verbose_log("checkForTotpForm called from " + t);
    var n = LP_getFormsThreshold(e),
        a = e.getElementsByTagName("form");
    Checkpoint.assert(a.length < n, "too many forms on page");
    for (var i = !1, o = 0; o < a.length && o < n; o++) {
        if (null == (i = chk_form_has_totp(e, a[o], !0))) return !1;
        if (i) return verbose_log("checkForTotpForm FOUND totp form - called from " + t), i
    }
    return !1
}

function chk_form_has_totp(t, e, r) {
    if ("undefined" == typeof g_do_totp || !g_do_totp || g_totp_elt) return !1;

    function n(e) {
        return e && e.tagName && "FORM" == e.tagName.toUpperCase()
    }

    function a(e) {
        return null === e.offsetParent
    }
    if (null == t || null == e || !n(e)) return !1;
    var i = LP_pickFormName(t, e);
    if (void 0 !== e.elements) var o = e.elements;
    else var o = e.getElementsByTagName("input");
    if (o.length >= MAX_FORM_ELEMENTS_HARD) return !1;
    var l = 0;
    verbose_log("checking form: id-> " + e.id + "  class-> " + e.className + " name-> " + e.name), l += textFieldScore(e, "totp"), l += textFieldScore(e, "2fa"), l += textFieldScore(e, "twofactor"), l += textFieldScore(e, "tfa"), verbose_log("form score: ( id-> " + e.id + "  class-> " + e.className + " name-> " + e.name + " )   " + l);
    for (var s = 0, c = 0, f = 0; f < MAX_FORM_ELEMENTS_SOFT && f < e.elements.length; f++) {
        var d;
        "INPUT" == (d = e.elements[f]).tagName && ("text" != d.type && "tel" != d.type && "number" != d.type || s++), ("INPUT" == d.tagName && "submit" == d.type || "BUTTON" == d.tagName) && c++
    }
    if (verbose_log("check for totp form: txtfieldcount=" + s + " submitcnt=" + c), 0 == c || 0 == s) return !1;
    for (var f = 0; f < MAX_FORM_ELEMENTS_SOFT && f < o.length; f++) {
        var d = o[f];
        if (isInputFieldTotpCode(t, d))
            if (l += 2, a(d)) {
                var u;
                verbose_log("HIDDEN totp element found: id-> " + d.id + "  class-> " + d.className + "  name-> " + d.name);
                var _ = function(e) {
                        if (verbose_log("checking visibility for: id-> " + e.id + "  class-> " + e.className + "  name-> " + e.name), !a(e)) return clearInterval(u), verbose_log("element become VISIBLE - totp code field revealed!!!!!: id-> " + e.id + "  class-> " + e.className + "  name-> " + e.name), void found_totp_elt(e, t);
                        verbose_log("element is STILL HIDDEN: id-> " + e.id + "  class-> " + e.className + "  name-> " + e.name)
                    },
                    p = d;
                u = setInterval(function() {
                    _(p)
                }, 5e3)
            } else found_totp_elt(d, t), verbose_log("VISIBLE totp element found!!!!!: id-> " + d.id + "  class-> " + d.className + "  name-> " + d.name)
    }
    return verbose_log("form totp score: " + l + "+id-> " + e.id + "  class-> " + e.className + " name-> " + e.name), 2 <= l
}
var g_totp_elt = null,
    g_totp_form = null;

function found_totp_elt(e, t) {
    verbose_log("found totp elt"), g_totp_elt ? verbose_log("already found totp elt, returning") : (g_totp_elt = e, "undefined" != typeof g_can_get_totp && g_can_get_totp ? "function" == typeof sendBG && (verbose_log("attempting to get totp from server"), sendBG({
        cmd: "get_totp",
        tld: gettldcached(t.location.href),
        name: e.name,
        id: e.id,
        className: e.className
    })) : (verbose_log("set totp form"), g_totp_form = e.form))
}

function chk_form_has_password(e, t, r) {
    if (null == e || null == t || !b(t)) return !1;
    var n = LP_pickFormName(e, t),
        a = formcacheget(e, n, "is_login");
    if (null != a) return a;
    if (void 0 !== t.elements) var i = t.elements;
    else var i = t.getElementsByTagName("input");
    if (Checkpoint.assert(i.length < MAX_FORM_ELEMENTS_HARD, "form " + n + " has too many inputs"), i.length > MAX_FORM_ELEMENTS_HARD) return formcacheset(e, n, "is_login", !1), !1;
    try {
        var o = gettldcached(e.location.href);
        if ("bankofamerica.com" == o) {
            var l = e.getElementById("tlpvt-passcode-input");
            null !== l && l.removeAttr("disabled")
        }
        if ("google.com" == o && is_google_signin_v2(e, i)) return !0
    } catch (e) {
        return !1
    }
    for (var s = !1, c = 0, f = 0, d = 0, u = null, _ = 0; _ < MAX_FORM_ELEMENTS_SOFT && _ < t.elements.length; _++) {
        var p;
        "INPUT" == (p = t.elements[_]).tagName && ("password" == p.type ? c++ : "text" != p.type && "email" != p.type || f++), ("INPUT" == p.tagName && "submit" == p.type || "BUTTON" == p.tagName) && (d++, u = p)
    }
    if (verbose_log("check for login form: prelimtxt=" + f + " prelimpw=" + c), 1 == d && f <= 2 && 0 < c && checkButtonHint(u)) return !0;
    for (var m = 0, g = 0, h = 2, v = 5, y = !lpIsVisible(t), P = !1, i = t.elements, _ = 0; _ < MAX_FORM_ELEMENTS_SOFT && _ < i.length; _++) {
        var p;
        if (s = !1, "FIELDSET" != (p = i[_]).tagName && (check_for_ASP(e, p), valid_by_role(e, p) && !LP_fieldIsDisabled(p) && !LP_treat_as_hidden(p))) {
            if ("text" == p.type && is_watermark(p.className) && is_watermark_password(p)) try {
                p.type = "password", decision_log(e, "DE11")
            } catch (e) {
                s = !0
            }
            if (ASP_treat_text_as_password(p) && (s = !0), !s && "password" != p.type || LP_get_input_pattern(e, p), 1 < c && LP_passwordAlt(e, p)) g++;
            else {
                var L = fieldIsDoublePassword(e, p);
                if ("text" != p.type || L !== DOUBLE_PW_VISIBLE && L !== DOUBLE_SECRET_PW_VISIBLE)
                    if ("password" == p.type || s || "text" == p.type && L === DOUBLE_TEXT_VISIBLE || "text" == p.type && L === DOUBLE_SECRET_TEXT_VISIBLE) {
                        if ("facebook.com" == o && "string" == typeof p.id && p.id.match(/^[a-z0-9]{6}_\d{1,2}_ci_password$/)) continue;
                        if ("tdbank.com" == o && "string" == typeof p.name && "user" == p.name) {
                            g++;
                            continue
                        }
                        if (g_fillaid && r) return !0;
                        if (g_aspx_hack && isASPpage() && do_bgiconinput) decision_log(e, "DE12");
                        else if (!lpIsVisible(p) || g_use_wacky_disp && !is_wacky_disp(e, p)) {
                            if (P = !0, !y) continue;
                            decision_log(e, "DE13", {
                                param1: LP_pickFormName(e, p)
                            })
                        }
                        if (0 == m && 1 < c && passwordIsFake(p)) {
                            g++;
                            continue
                        }
                        if (0 < m && 1 < c && LP_looksLikeOTPField(e, p)) {
                            g++;
                            continue
                        }
                        var E = 2,
                            x = "";
                        if (g_aspx_hack && isASPpage() && do_bgiconinput && (E = 4, x = " [ASP]"), ++m >= E) {
                            var k;
                            if (2 == c && 0 === f && 1 === d)
                                if (new RegExp(lpgs("ff_loginform_regexp"), "i").exec(n)) return formcacheset(e, n, "is_login", !0), !0;
                            return formcacheset(e, n, "is_login", !1), verbose_log("Password Form detection: " + n + x + " has too many password fields; do not treat as login form [PW:" + m + "/NON:" + g + "]"), null
                        }
                    } else if ("email" == p.type || "text" == p.type || "textarea" == p.type || "tel" == p.type || "url" == p.type) {
                    if (!lpIsVisible(p) || g_use_wacky_disp && !is_wacky_disp(e, p)) {
                        if (!y) continue;
                        verbose_log("EVALUATING HIDDEN FORM, NOT IGNORING HIDDEN FIELD ANYMORE " + LP_pickFormName(e, p))
                    }
                    if (g++, g_aspx_hack && 5 < g || !g_aspx_hack && 2 < g) return formcacheset(e, n, "is_login", !1), verbose_log("Password Form detection: " + n + " has too many non-password fields; do not treat as login form [PW:" + m + "/NON:" + g + "]"), null
                }
            }
        }
    }
    return 1 == m ? (verbose_log("Password Form detection: " + n + " is a login form, has only one passwd field"), formcacheset(e, n, "is_login", !0), !0) : g_aspx_hack && isASPpage() && do_bgiconinput && 1 < m ? (verbose_log("Password Form detection: " + n + " is an ASP form, treat as login form"), formcacheset(e, n, "is_login", !0), !0) : (P || formcacheset(e, n, "is_login", !1), !1);

    function b(e) {
        return e && e.tagName && "FORM" == e.tagName.toUpperCase()
    }
}

function is_google_signin_v2(e, t) {
    var r = e.location.href;
    return (r.includes("https://accounts.google.com/signin/v2/identifier") || r.includes("https://accounts.google.com/ServiceLogin/identifier")) && "email" == t[0].type
}

function looksLikePassword(e, t) {
    return isInputFieldPassword(e, t)
}

function isInputFieldPassword(e, t) {
    if (null == e || null == t || "INPUT" != t.tagName || "hidden" == t.type) return !1;
    try {
        var r = gettldcached(e.location.href)
    } catch (e) {
        return !1
    }
    if (!valid_by_role(e, t)) return !1;
    var n = !1,
        a;
    if ("text" == t.type && is_watermark(t.className) && is_watermark_password(t)) try {
        t.type = "password"
    } catch (e) {
        n = !0
    }
    return "text" != t.type || 0 != t.name.indexOf("pass") && 0 != t.name.toLowerCase().indexOf(lpgs("Password").toLowerCase()) ? (g_aspx_hack && isASPpage() && do_bgiconinput && "text" == t.type && 0 <= t.value.toLowerCase().indexOf(lpgs("Password").toLowerCase()) && (n = !0), !("password" != t.type && !n) && (("facebook.com" != r || "string" != typeof t.id || !t.id.match(/^[a-z0-9]{6}_\d{1,2}_ci_password$/)) && (("tdbank.com" != r || "string" != typeof t.name || "user" != t.name) && (("google.com" != r || "string" != typeof t.id || "Passwd-hidden" != t.id) && (("live.com" != r || "true" != t.getAttribute("aria-hidden")) && ("amazon.com" != r || !t.className.includes("hide"))))))) : !(new RegExp(lpgs("ff_username_regexp"), "i").exec(t.name) && t.form && t.form.action && 0 <= t.form.action.indexOf("login"))
}

function checkDocumentForLoginOrphans(e) {
    if (!(e = e || LP_derive_doc())) return !1;
    var t = formcacheget(e, "fakedoc", "orphan");
    if (null != t) return t;
    var r = [],
        n = [],
        a = [],
        i = 0,
        o, l = 0;
    if ("undefined" != typeof Math) {
        for (var s = Math.floor(1e4 * Math.random()), c = ["input"], f = 0; f < c.length; f++) {
            var d = e.getElementsByTagName(c[f]),
                u = d.length;
            Checkpoint.assert(u < MAX_INPUTS_SOFT, "page has too many inputs"), u > MAX_INPUTS_SOFT && (u = MAX_INPUTS_SOFT);
            for (var _ = 0; _ < u; _++)
                if (checkIsDisplayed(e, d[_], 0, null, s)) {
                    if (null != (o = d[_]).id && "" != o.id) {
                        var p;
                        if (null != (p = a[o.id])) continue;
                        a[o.id] = !0
                    }
                    if (null != o.name && "" != o.name) {
                        var p;
                        if (null != (p = n[o.name])) continue;
                        n[o.name] = !0
                    }
                    if (lp_in_array(LP_pickFieldName(e, o), r)) verbose_log("fieldname " + r[p] + " is blacklisted, skipping");
                    else {
                        var m = fieldIsDoublePassword(e, o);
                        if (null == o.form && ("password" == o.type || "text" == o.type && m === DOUBLE_TEXT_VISIBLE || "text" == o.type && m === DOUBLE_SECRET_TEXT_VISIBLE)) {
                            i++;
                            var g = [],
                                h, v, y = LP_pickFieldName(e, o),
                                P = LP_getname(o);
                            for (y && g.push(y), P && y != P && g.push(P), v = 0; v < g.length; v++)
                                if ((h = g[v]) && 0 <= h.toLowerCase().indexOf(lpgs("Password").toLowerCase()) && 0 < _) {
                                    var L = d[_ - 1],
                                        E = LP_pickFieldName(e, L),
                                        x = LP_getname(L),
                                        k = new RegExp(lpgs("ff_username_regexp"), "i");
                                    if (k.exec(E) || k.exec(x)) {
                                        l++;
                                        break
                                    }
                                }
                        }
                        if (2 <= i && 2 <= l) break
                    }
                }
        }
        return 1 <= i || 1 == l ? (formcacheset(e, "fakedoc", "orphan", !0), !0) : (formcacheset(e, "fakedoc", "orphan", !1), !1)
    }
}

function chk_form_changepw(e, t) {
    if (null == e || null == t) return !1;
    for (var r = !0, n = lpCheckCurrentPWField(t), a = !1, i = null, o = null, l = 1; l <= 2; l++) {
        a = !1, i = o = null;
        var s = -1;
        if (1 == l) {
            if (n)
                for (var c = 0; c < t.elements.length; c++)
                    if (t.elements[c] == n) {
                        s = c + 1;
                        break
                    }
        } else s = 0;
        if (-1 != s) {
            for (var c = s; c < t.elements.length; c++) {
                var f = t.elements[c];
                if ("FIELDSET" != f.tagName)
                    if (isInputFieldPassword(e, f)) {
                        if (!a && i && o);
                        else if (o = i, i = f, a && i && o) break;
                        a = !0
                    } else a = !1
            }
            if (i && o) break
        }
    }
    return null != i && null != o && null != n
}

function containsSubString(e, t) {
    return e && -1 < e.replace(/\s/g, "").toLowerCase().indexOf(t.toLowerCase())
}

function textFieldScore(e, t) {
    var r = 0;
    return containsSubString(e.name, t) && r++, containsSubString(e.id, t) && r++, containsSubString(e.className, t) && r++, r
}

function isInputFieldTotpCode(e, t) {
    if (null == e || null == t || "INPUT" != t.tagName || "hidden" == t.type) return !1;
    try {
        var r = gettldcached(e.location.href)
    } catch (e) {
        return !1
    }
    if (!valid_by_role(e, t)) return !1;
    if ("text" != t.type && "tel" != t.type && "number" != t.type) return !1;
    if (0 < textFieldScore(t, "totp")) return !0;
    if ("salesforce.com" == r && "tc" == t.id && 6 == t.maxLength && "tc" == t.name && -1 != t.form.action.indexOf("Totp")) return !0;
    if ("github.com" == r && "otp" == t.id && "otp" == t.name && -1 != t.form.action.indexOf("two-factor")) return !0;
    if ("live.com" == r && "idTxtBx_SAOTCC_OTC" == t.id && "otc" == t.name && 8 == t.maxLength) return !0;
    if ("google.com" == r && -1 != t.id.indexOf("PhonePin")) return !1;
    var n = 0;
    return n += textFieldScore(t, "code"), n += textFieldScore(t, "pin"), n += textFieldScore(t, "verification"), n += textFieldScore(t, "2fa"), n += textFieldScore(t, "twofactor"), n += textFieldScore(t, "tfa"), t.pattern && containsSubString(t.pattern, "0-9") && n++, t.placeholder && (containsSubString(t.placeholder, "6") || containsSubString(t.placeholder, "six") || containsSubString(t.placeholder, "hat")) && n++, 0 < n
}

function form_get_password(e, t) {
    if (!(e = e || LP_derive_doc()) || !t) return null;
    var r = LP_pickFormName(e, t),
        n = formcacheget(e, r, "password_field");
    if (null !== n) return n;
    if (!0 === formcacheget(e, r, "nopasswords")) return null;
    var a = null,
        i, o = [];
    if (o = "FORM" == t.tagName.toUpperCase() ? t.elements : t.getElementsByTagName("INPUT"), Checkpoint.assert(null !== o && 0 < o.length, "empty form?"), "undefined" == typeof Math) return null;
    var l = o.length;
    Checkpoint.assert(l < MAX_FORM_ELEMENTS_HARD, "form " + r + " too big 3"), l > MAX_FORM_ELEMENTS_HARD && (l = MAX_FORM_ELEMENTS_HARD);
    var s = 0;
    for (i = 0; i < l; i++) isInputFieldPassword(e, o[i]) && s++;
    for (var c = Math.floor(1e4 * Math.random()), f = 0; f < l; f++) {
        var d = o[f];
        if ("FIELDSET" != d.tagName && (checkIsDisplayed(e, d, 0, null, c) && isInputFieldPassword(e, d))) {
            if (1 < s && (passwordIsFake(d) || LP_looksLikeOTPField(e, d) || !valid_by_role(e, d) || LP_fieldIsDisabled(d) || LP_treat_as_hidden(d) || is_search_field(e, d, !0))) continue;
            a = d;
            break
        }
    }
    return null === a && 0 === s && formcacheset(e, r, "nopasswords", !0), formcacheset(e, r, "password_field", a), a
}

function form_get_username(e, t) {
    if (!(e = e || LP_derive_doc()) || !t) return null;
    var r = [];
    r = "FORM" == t.tagName.toUpperCase() ? t.elements : t.getElementsByTagName("INPUT"), Checkpoint.assert(null !== r);
    var n = null,
        a = LP_pickFormName(e, t),
        i = formcacheget(e, a, "username_field");
    if (null !== i) return i;
    if ("undefined" == typeof Math) return null;
    var o = r.length;
    Checkpoint.assert(o < MAX_FORM_ELEMENTS_HARD, "form " + a + " too big 4 "), o > MAX_FORM_ELEMENTS_HARD && (o = MAX_FORM_ELEMENTS_HARD);
    for (var l = Math.floor(1e4 * Math.random()), s = 0; s < o; s++) {
        var c = r[s];
        if ("FIELDSET" != c.tagName && "hidden" != c.type && (valid_by_role(e, c) && !LP_fieldIsDisabled(c) && !is_search_field(e, c, !0))) {
            var f = bg.get("LPContentScriptFeatures").icon_expanded_looks_like_username ? "email" == c.type || looksLikeUsername(c) : "text" == c.type || "email" == c.type || looksLikeUsername(c);
            if (checkIsDisplayed(e, c, 0, null, l) && f) {
                if (isFirstFieldNonLoginSubForm(e, c)) return null;
                n = c;
                break
            }
        }
    }
    return formcacheset(e, a, "username_field", n), n
}

function doc_get_orphan_username(e) {
    if (!e && !(e = LP_derive_doc())) return null;
    var t, r = ["input"];
    if ("undefined" != typeof Math) {
        var n = formcacheget(e, "orphans", "username_field");
        if ("none" == n) return null;
        if (null !== n) return n;
        var a = get_javaservlet_fields(e, g_is_specialsite);
        if (a && 2 == a.length && a[0]) return formcacheset(e, "orphans", "username_field", a[0]), a[0];
        if (LP_has_youama(e)) {
            var i = LP_get_youama_fields(e);
            if (i && i.login_username) return formcacheset(e, "orphans", "username_field", i.login_username), i.login_username
        }
        var o = doc_get_form_equivalents(e);
        if (o && 0 < o.length)
            for (t = 0; t < o.length; t++)
                if ("FORM" != o[t].tagName.toUpperCase()) {
                    var l = form_get_username(e, o[t]);
                    if (l) return formcacheset(e, "orphans", "username_field", l), l
                } return formcacheset(e, "orphans", "username_field", "none"), null
    }
}

function doc_get_orphan_password(e) {
    if (null == e) return null;
    var t = ["input"];
    if ("undefined" != typeof Math) {
        var r = formcacheget(e, "orphans", "password_field");
        if ("none" == r) return null;
        if (null !== r) return r;
        var n = get_javaservlet_fields(e, g_is_specialsite);
        if (n && 2 == n.length && n[1]) return formcacheset(e, "orphans", "password_field", n[1]), n[1];
        if (LP_has_youama(e)) {
            var a = LP_get_youama_fields(e);
            if (a && a.login_password) return formcacheset(e, "orphans", "password_field", a.login_password), a.login_password
        }
        var i = doc_get_form_equivalents(e);
        if (i && 0 < i.length)
            for (var o = 0; o < i.length; o++)
                if ("FORM" != i[o].tagName.toUpperCase()) {
                    var l = form_get_password(e, i[o]);
                    if (l) return formcacheset(e, "orphans", "password_field", l), l
                } return formcacheset(e, "orphans", "password_field", "none"), null
    }
}

function set_active_username_password(e, t) {
    if (null == e) return g_popup_active_username = null, void(g_popup_active_password = null);
    var r = null,
        n = null;
    null == t ? checkDocumentForLoginOrphans(e) && (r = doc_get_orphan_username(e), n = doc_get_orphan_password(e)) : (r = form_get_username(e, t), n = form_get_password(e, t)), g_popup_active_username = r, g_popup_active_password = n
}

function looksLikeEmail(e, t) {
    return null != e && null != t && ("text" == t.type || "email" == t.type) && ("email" == t.type || !!new RegExp(lpgs("ff_email_regexp"), "i").exec(t.name));
    var r
}

function is_search_field(e, t, r) {
    if (null == e || null == t || "INPUT" != t.tagName.toUpperCase() && !t.getAttribute("contentEditable")) return !1;
    var n = null;
    switch (t.type) {
        case "search":
            n = !0;
            break;
        case "text":
            break;
        default:
            "INPUT" == t.tagName.toUpperCase() && (n = !1)
    }
    if (null !== n) return n;
    null === r && (r = !1);
    var a = LP_pickFieldName(e, t),
        i = fieldcacheget(e, a, "search");
    if (null != i) return i;
    var o = t.form,
        l = [];
    if (null != o && (l = o.elements), t.parentNode && "FORM" != t.parentNode.tagName && t.parentNode.className && 0 <= t.parentNode.className.toLowerCase().indexOf("login") && t.className && 0 <= t.className.toLowerCase().indexOf("search")) return !1;
    if ((null != t.className && 0 <= t.className.toLowerCase().indexOf("search") || 0 <= t.className.toLowerCase().indexOf("srch") || 0 <= t.id.toLowerCase().indexOf("search") || 0 <= t.id.toLowerCase().indexOf("srch") || 0 <= t.name.toLowerCase().indexOf("search") || 0 <= t.name.toLowerCase().indexOf("srch")) && t.name.toLowerCase().indexOf("user") < 0 && t.name.toLowerCase().indexOf("login") < 0 && t.id.toLowerCase().indexOf("user") < 0 && t.id.toLowerCase().indexOf("login") < 0 && (r || l.length < 5)) return fieldcacheset(e, a, "search", !0), !0;
    var s = new RegExp(lpgs("ff_search_regexp"), "i");
    if (s.exec(t.name) || s.exec(t.id)) {
        var c = t.name && t.name.match(/[qQ]/) || t.id && t.id.match(/[qQ]/),
            f = new RegExp(lpgs("ff_email_regexp"), "i"),
            d = new RegExp(lpgs("ff_username_regexp"), "i");
        if (c && t.name && !t.name.match(/^[qQ]/) && (!t.id || t.id && !t.id.match(/^[qQ]/))) pass;
        else if (c && t.id && !t.id.match(/^[qQ]/) && (!t.name || t.name && !t.name.match(/^[qQ]/))) pass;
        else {
            if (!c || !(d.exec(t.name) || d.exec(t.id) || f.exec(t.name) || f.exec(t.id))) return verbose_log("field " + a + " appears to be a search field based on regexp"), fieldcacheset(e, a, "search", !0), !0;
            pass
        }
    }
    var u = t.getAttribute("placeholder"),
        _;
    if (null != u && 0 <= u.toLowerCase().indexOf("search")) return verbose_log("field " + a + " appears to be a search field based on placeholder text"), fieldcacheset(e, a, "search", !0), True;
    if ("rds-instances-filter-txtbx" == t.id) return verbose_log("field " + a + " appears to be a search field based on manually added searchtext"), fieldcacheset(e, a, "search", !0), !0;
    if (t.parentNode && "FORM" != t.parentNode.tagName && t.parentNode.className && (0 <= t.parentNode.className.toLowerCase().indexOf("search") || 0 <= t.parentNode.className.toLowerCase().indexOf("srch"))) return fieldcacheset(e, a, "search", !0), !0;
    if ("search" == t.getAttribute("role")) return fieldcacheset(e, a, "search", !0), !0;
    var p = t.getAttribute("spellcheck");
    return t.className && 0 <= t.className.indexOf("tt-input") && p && "false" === p ? (fieldcacheset(e, a, "search", !0), !0) : (fieldcacheset(e, a, "search", !1), !1)
}

function is_date_field(e) {
    if (!e) return !1;
    var t = e.name,
        r, n = "(?:validate)",
        a = new RegExp("(?:date)|(?:calendar)", "i"),
        i = new RegExp(n, "i"),
        t = e.name,
        o = e.id,
        l = e.className;
    if (a.exec(t) || a.exec(o) || a.exec(l)) return !(i.exec(t) || i.exec(o) || i.exec(l));
    var s = e.getAttribute("placeholder");
    return !(!s || -1 == (s = s.toLowerCase()).indexOf("yyyy") && -1 == s.indexOf("/yy") && -1 == s.indexOf("mm/"))
}

function is_search_form(e, t) {
    if (null == e || null == t || "FORM" != t.tagName) return !1;
    var r = LP_pickFormName(e, t),
        n = formcacheget(e, r, "search"),
        a;
    return null != n ? n : null != t.id && 0 < t.id.length && void 0 !== t.id.toLowerCase && (0 <= t.id.toLowerCase().indexOf("search") || 0 <= t.id.toLowerCase().indexOf("srch")) || null != t.name && 0 < t.name.length && void 0 !== t.name.toLowerCase && (0 <= t.name.toLowerCase().indexOf("search") || 0 <= t.name.toLowerCase().indexOf("srch")) ? (verbose_log("form " + r + " appears to be a search form based on name/id "), formcacheset(e, r, "search", !0), !0) : "search" == t.getAttribute("role") ? (formcacheset(e, r, "search", !0), !0) : (formcacheset(e, r, "search", !1), !1)
}

function looksLikeUsername(e, t) {
    if (!bg.get("LPContentScriptFeatures") || !bg.get("LPContentScriptFeatures").icon_expanded_looks_like_username) return matchesUsernameHeuristics(e, t);
    if (!e) return !1;
    if (!t && "text" !== e.type && "email" !== e.type && "url" !== e.type) return !1;
    var r = e.ownerDocument,
        n = new RegExp(lpgs("ff_username_regexp"), "i");
    if (LP_hasAngular(r)) {
        var a = LP_getAngularAttributes(e);
        if (a && a["ng-model"] && n.test(a["ng-model"])) return !0
    }
    var i = new RegExp(lpgs("ff_email_regexp"), "i"),
        o = new RegExp("^id$|.*-id|online.*id$|.*Id$|onlineId\\d?$", "i"),
        l = new RegExp(lpgs("ff_bankacctnum_regexp"), "i"),
        s = new RegExp(lpgs("ff_company_regexp"), "i"),
        c = new RegExp(lpgs("ff_loginform_regexp"), "i"),
        f = [n, i, o];
    g_is_specialsite && f.push(l, s);
    for (var d = [e.name, e.id, e.getAttribute("placeholder"), e.getAttribute("label")], u = !1, _ = 0; _ < d.length && !u; _++)
        for (var p = 0; p < f.length && !u; p++) f[p].test(d[_]) && !u && (u = !0);
    if (e.form && !u)
        for (var m = e.form.elements, _ = 0; _ < m.length && !u; _++) "submit" == m[_].type && (m[_].name && n.test(m[_].name) || c.test(m[_].name)) && (u = !0);
    return u
}

function matchesUsernameHeuristics(e, t) {
    if (!e) return !1;
    var r, n = LP_hasAngular(e.ownerDocument);
    if (null == t && (t = !1), !t && "text" != e.type && "email" != e.type && "url" != e.type) return !1;
    var a = new RegExp(lpgs("ff_username_regexp"), "i");
    if (a.exec(e.name)) return !0;
    if (e.id && a.exec(e.id)) return !0;
    var i = e.getAttribute("placeholder");
    if (null != i && 0 <= i.indexOf("Login")) return !0;
    if (n) {
        var o = LP_getAngularAttributes(e);
        if (o && o["ng-model"] && a.exec(o["ng-model"])) return !0
    }
    var l = new RegExp(lpgs("ff_loginform_regexp"), "i");
    if (e.form)
        for (var s = e.form.elements, c = 0; c < s.length; c++)
            if ("submit" == s[c].type && (s[c].name && a.exec(s[c].name) || l.exec(s[c].name))) return !0;
    if ((a = new RegExp("^id$|.*-id|online.*id$|.*Id$|onlineId\\d?$", "i")).exec(e.name)) return !0;
    if (g_is_specialsite) {
        if ((a = new RegExp(lpgs("ff_bankacctnum_regexp"), "i")).exec(e.name)) return !0;
        if ((a = new RegExp(lpgs("ff_company_regexp"), "i")).exec(e.name)) return !0;
        if ((a = new RegExp(lpgs("ff_email_regexp"), "i")).exec(e.name)) return !0
    }
    return !1
}

function formHasUsernameField(e) {
    var t = e.form;
    if (t)
        for (var r = t.elements, n = 0; n < r.length; n++) {
            var a = r[n];
            if ("text" == a.type || "email" == a.type) return !0
        }
    return !1
}
var DOUBLE_TEXT_VISIBLE = 1,
    DOUBLE_PW_VISIBLE = 2,
    DOUBLE_SECRET_TEXT_VISIBLE = 3,
    DOUBLE_SECRET_PW_VISIBLE = 4,
    NOT_DOUBLE_PW = 0;

function fieldIsDoublePassword(e, t) {
    "document" == e && (e = document, t = LP_getElementByIdOrName(e, t));
    var r = 3;
    if (null == e && !(e = document)) return !1;
    if (null == t || "checkbox" == t.type || "button" == t.type || "submit" == t.type || "select-one" == t.type) return NOT_DOUBLE_PW;
    var n = null,
        a = null,
        i = null,
        o = null;
    if (void 0 !== t.previousElementSibling ? n = t.previousElementSibling : (n = t.previousSibling) && null != n.nodeType && 3 == n.nodeType && (n = n.previousSibling), void 0 !== t.nextElementSibling ? a = t.nextElementSibling : (a = t.nextSibling) && null != a.nodeType && 3 == a.nodeType && (a = a.nextSibling), n && "INPUT" != n.tagName && (n = null), a && "INPUT" != a.tagName && (a = null), n && (void 0 !== n.previousElementSibling ? i = n.previousElementSibling : (i = n.previousSibling) && null != i.nodeType && 3 == i.nodeType && (i = i.previousSibling), i && "INPUT" != i.tagName && (i = null)), a && (void 0 !== a.nextElementSibling ? o = a.nextElementSibling : (o = a.nextSibling) && null != o.nodeType && 3 == o.nodeType && (o = o.nextSibling), o && "INPUT" != o.tagName && (o = null)), "undefined" != typeof Math) {
        var l = Math.floor(1e4 * Math.random());
        if ("password" == t.type && !checkIsDisplayed(e, t, -1, null, l) && n && "text" == n.type && !checkIsDisplayed(e, n, -1, null, l) && a && "text" == a.type && checkIsDisplayed(e, a, -1, null, l) && o && "text" == o.type && checkIsDisplayed(e, o, -1, null, l) || "text" == t.type && checkIsDisplayed(e, t, -1, null, l) && n && "text" == n.type && checkIsDisplayed(e, n, -1, null, l) && i && "password" == i.type && !checkIsDisplayed(e, i, -1, null, l)) return verbose_log("field " + LP_pickFieldName(e, t) + " needs double secret password hack"), g_double_secret_password_hack = !0, DOUBLE_SECRET_TEXT_VISIBLE;
        if ("password" == t.type && checkIsDisplayed(e, t, -1, null, l) && n && "text" == n.type && !checkIsDisplayed(e, n, -1, null, l) || "text" == t.type && !checkIsDisplayed(e, t, -1, null, l) && a && "password" == a.type && checkIsDisplayed(e, a, -1, null, l)) return verbose_log("field " + LP_pickFieldName(e, t) + " needs double password hack"), g_double_password_hack = !0, DOUBLE_PW_VISIBLE;
        var s = !0,
            c = null != t && lpIsVisible(t, !0),
            f = null != n && lpIsVisible(n, !0),
            d = null != a && lpIsVisible(a, !0),
            u = null != t && looksLikeUsername(t),
            _ = null != n && looksLikeUsername(n),
            p = null != a && looksLikeUsername(a);
        return "password" == t.type && !c && n && "text" == n.type && f && !_ || "text" == t.type && c && !u && a && "password" == a.type && !d || "password" == t.type && !c && a && "text" == a.type && d && !p || "text" == t.type && c && !u && n && "password" == n.type && !f ? (verbose_log("field " + LP_pickFieldName(e, t) + " needs double password hack"), g_double_password_hack = !0, DOUBLE_TEXT_VISIBLE) : "password" == t.type && c && n && "text" == n.type && !f && !_ || "text" == t.type && !c && a && "password" == a.type && d || "password" == t.type && c && a && "text" == a.type && !d && !p || "text" == t.type && !c && n && "password" == n.type && f ? (verbose_log("field " + LP_pickFieldName(e, t) + " needs double password hack"), g_double_password_hack = !0, DOUBLE_PW_VISIBLE) : NOT_DOUBLE_PW
    }
}

function ContigPWHack(e, t, r) {
    if (null === e && (e = document), null === e) return !1;
    if (void 0 === e.getElementsByTagName) return !1;
    var n = lpCountInputFields(t);
    if ("undefined" != typeof Math) {
        var a = Math.floor(1e4 * Math.random());
        if ((3 == n.passwordvisible || 4 == n.passwordvisible) && !0 === n.passwordsContiguous) {
            var i, o = e.getElementsByTagName("input");
            for (i = 0; i < o.length && !(100 < i); i++)
                if (o[i] == r) {
                    if (void 0 !== o[i + 1] && "password" == o[i + 1].type && void 0 !== o[i + 2] && "password" == o[i + 2].type && checkIsDisplayed(e, o[i], -1, null, a) && checkIsDisplayed(e, o[i + 1], -1, null, a) && checkIsDisplayed(e, o[i + 2], -1, null, a)) return !0;
                    break
                }
        }
        return !1
    }
}

function isContigPW(e, t, r) {
    var n = null,
        a = null,
        i;
    null == t && (t = e);
    var o = t.getElementsByTagName("input");
    if ("undefined" != typeof Math) {
        var l = Math.floor(1e4 * Math.random());
        for (i = 0; i < o.length; i++)
            if (o[i] == r && "password" == o[i].type) {
                if (void 0 !== o[i + 1] && "password" == o[i + 1].type && checkIsDisplayed(e, o[i], -1, null, l) && checkIsDisplayed(e, o[i + 1], -1, null, l) || void 0 !== o[i - 1] && "password" == o[i - 1].type && checkIsDisplayed(e, o[i], -1, null, l) && checkIsDisplayed(e, o[i - 1], -1, null, l)) return !0;
                break
            } return !1
    }
}

function get_prev_field(e, t) {
    void 0 !== t.previousElementSibling ? prev_field = t.previousElementSibling : (prev_field = t.previousSibling, prev_field && null != prev_field.nodeType && prev_field.nodeType == TEXT_NODE && (prev_field = prev_field.previousSibling))
}

function get_next_field(e, t) {
    void 0 !== t.nextElementSibling ? next_field = t.nextElementSibling : (next_field = t.nextSibling, next_field && null != next_field.nodeType && next_field.nodeType == TEXT_NODE && (next_field = next_field.nextSibling))
}

function isFirstFieldNonLoginSubForm(e, t) {
    if (null == e || null == t || "INPUT" != t.tagName) return !1;
    if ("password" == t.type || "hidden" == t.type) return !1;
    if ("text" == t.type) {
        var r = new RegExp(lpgs("ff_firstname_regexp"), "i");
        if (r.exec(t.name) || r.exec(t.id)) return !0;
        if (r = new RegExp("register|signup|enroll|create", "i"), t.parentNode && r.exec(t.parentNode.name) || r.exec(t.parentNode.id)) return !0;
        if (t.parentNode && t.parentNode.parentNode && (r.exec(t.parentNode.parentNode.name) || r.exec(t.parentNode.parentNode.id))) return !0
    }
    return !1
}

function isUsernameFieldLoginSubForm(e, t) {
    return null != e && null != t && "INPUT" == t.tagName && ("password" != t.type && "hidden" != t.type && (FoundNonLoginSubForm(e) ? False : !!looksLikeUsername(t)))
}

function FoundNonLoginSubForm(e) {
    if (null == e) return !1;
    if (isASPpage()) {
        var t = getAllIconStates(),
            r, n;
        for (r = 0; r < t.length; r++) {
            var a;
            if ("formfills" == t[r].fillhint) return True
        }
    }
    return False
}

function isPasswordFieldLoginSubForm(e, t) {
    if (null == e || null == t || "INPUT" != t.tagName) return !1;
    if ("hidden" == t.type) return !1;
    if (FoundNonLoginSubForm(e)) return False;
    if ("password" == t.type) {
        var r = e.getElementsByTagName("INPUT"),
            n;
        for (n = 0; n < r.length && n < MAX_INPUTS_HARD && t != r[n]; n++);
        if (t == r[n] && 0 < n) {
            var a = LP_pickFieldName(e, t);
            if (a && a.toLowerCase().indexOf(0 <= lpgs("Password"))) {
                var i = r[n - 1],
                    o = LP_pickFieldName(e, i),
                    l;
                if (new RegExp(lpgs("ff_username_regexp"), "i").exec(o)) return !0
            }
        }
    }
    return !1
}

function isASPpage() {
    var e = !1,
        t;
    g_isfirefox ? (t = void 0 !== LP.lpGetCurrentWindow().getBrowser ? LP.lpGetCurrentWindow().getBrowser().contentDocument : LP.getBrowser().contentDocument) ? e = t.g_found_aspx : verbose_log(t.location.href) : e = g_found_aspx;
    return e = e || !1
}

function setASPpage(e) {
    var t = !1,
        r;
    (null == e && (e = !0), g_isfirefox) ? (r = void 0 !== LP.lpGetCurrentWindow().getBrowser ? LP.lpGetCurrentWindow().getBrowser().contentDocument : LP.getBrowser().contentDocument) ? t = r.g_found_aspx = e: verbose_log(r.location.href): (g_found_aspx = e, t = !0);
    return t = t || !1
}

function checkDocumentForLoginOrphansFirstStage(e) {
    if (!e) return !1;
    var t = 20,
        r = 4,
        n = formcacheget(e, "fakedoc", "orphan-first");
    if (null != n) return n;
    if ("undefined" != typeof Math) {
        for (var a = [], i = [], o = 0, l = !1, s = Math.floor(1e4 * Math.random()), c = ["input"], f = 0; f < c.length; f++)
            for (var d = e.getElementsByTagName(c[f]), u = 0; u < d.length; u++) {
                var _ = d[u];
                if (20 < u) break;
                if (!d[u].form && checkIsDisplayed(e, d[u], 0, null, s)) {
                    if (verbose_log("checking " + LP_pickFieldName(e, _)), null != _.id && "" != _.id) {
                        var p;
                        if (null != (p = i[_.id])) continue;
                        i[_.id] = !0
                    }
                    if (null != _.name && "" != _.name) {
                        var p;
                        if (null != (p = a[_.name])) continue;
                        a[_.name] = !0
                    }
                    if (looksLikeUsername(_) && o++, isInputFieldPassword(e, _)) {
                        l = !0;
                        break
                    }
                    if (2 < o) break
                }
            }
        return 0 < o && o <= 4 && 0 == l ? (decision_log(e, "DE27"), formcacheset(e, "fakedoc", "orphan-first", !0), !0) : (formcacheset(e, "fakedoc", "orphan-first", !1), !1)
    }
}

function LP_looksLikeOTPField(e, t) {
    if (!e || !t || "INPUT" != t.tagName) return !1;
    var r = /^(otp|token|tokencode|mfacode)[_\W]|[_\W](otp|token|tokencode|mfacode)$|^(otp|token|tokencode|totpPin|mfacode):?$|[_\W](otp|token|tokencode|mfacode)[_\W]|(validation|verification|challenge).*code:?$/i,
        n = get_doc_location_href(e),
        a = gettldcached(n),
        i = LP_pickFieldName(e, t);
    if (r.exec(i)) return !0;
    var o = t.getAttribute("aria-label");
    if (o && 0 < o.indexOf("O-Key")) return !0;
    var l = lpGetTextBeforeFormField(t, !1).toLowerCase();
    return !!r.exec(l) || !!(n && 0 < n.toLowerCase().indexOf("challenge") && l && l.match(/([_\W]code:?$|^code[_\W])/))
}

function LP_fieldIsDisabled(e) {
    return !!e && (!(void 0 === e.disabled || !e.disabled) || "true" === e.getAttribute("aria-disabled"));
    var t
}

function LP_fieldIsReadOnly(e) {
    return !!e && (!(void 0 === e.readOnly || !e.readOnly) || "true" === e.getAttribute("aria-readonly"));
    var t
}

function LP_fieldIsDecorative(e) {
    return !!e && "presentation" === e.getAttribute("role");
    var t
}

function checkDocumentForCPWOrphans(e) {
    if (!e && !(e = LP_derive_doc())) return null;
    var t = formcacheget(e, "fakedoc", "cpw");
    if (null != t) return t;
    var r = null,
        n = 0,
        a = 4,
        i = e.getElementsByTagName("INPUT");
    Checkpoint.assert(i.length <= MAX_INPUTS_HARD, "page has too many inputs");
    for (var o = 0; o < i.length; o++) {
        var l = i[o];
        if (o > MAX_INPUTS_HARD) break;
        if (null == l.form) {
            if (isInputFieldPassword(e, l) && lpIsVisible(l)) {
                n++;
                var s = lpIsFieldCurrentPWField(l);
                if (s) {
                    if (r) return !1;
                    r = s
                }
            }
            if (4 <= n) return formcacheset(e, "fakedoc", "cpw", !1), !1
        }
    }
    return 2 <= n && r ? (formcacheset(e, "fakedoc", "cpw", !0), !0) : (formcacheset(e, "fakedoc", "cpw", !1), !1)
}

function ForceFillFieldClicked(e, t, r, n) {
    var a = t;
    if (!a || !n) return !1;
    var i = a.form && !r ? LP_getname(a.form) : "",
        o = a.type ? a.type : "";
    return "password" == o ? LP_getname(a) ? LP_setval(e, LP_getname(a), n.p, 0, n.a, i, o, n.sharedsite, null, n.automaticallyFill, n.reqinfo, null, !0, n.humanize, n.reqinfo, n.realurl, "password") : LP_fill_given_field(e, a, n.p, o, n.sharedsite, n.automaticallyFill, n.a, !0, !0, n.humanize, n.reqinfo, n.realurl, "password") : "" == n.u || (LP_getname(a) ? LP_setval(e, LP_getname(a), n.u, 0, n.a, i, o, n.sharedsite, null, n.automaticallyFill, n.reqinfo, null, !0, n.humanize, n.reqinfo, n.realurl, "userName") : LP_fill_given_field(e, a, n.u, o, n.sharedsite, n.automaticallyFill, n.a, !0, !0, n.humanize, n.reqinfo, n.realurl, "userName"))
}

function ForceFillFormClicked(e, t, r, n) {
    if (!t) return !1;
    var a = null,
        i = !1,
        o = t.getElementsByTagName("INPUT");
    if (o) {
        var l = !0,
            s = !0,
            c = !0;
        return (a = GuessUserPassFields(o, !0, !0, !0)) && (a.text && ForceFillFieldClicked(e, a.text, !1, n), a.password && ForceFillFieldClicked(e, a.password, !1, n)), !0
    }
    return !1
}

function GuessUserPassFields(e, t, r, n) {
    if (!e || e.length <= 0) return null;
    var a = document,
        i, o = e.length,
        l = null,
        s = null,
        c = !1;
    for (i = 0; i < o; i++) {
        var f = e[i];
        if (f)
            if (r && (LP_fieldIsReadOnly(f) || LP_fieldIsDisabled(f))) decision_log(a, "DE24");
            else {
                var d = !0;
                if (!n || lpIsVisible(f, !0)) {
                    var u;
                    if (t)
                        if ((u = new RegExp(lpgs("ff_search_regexp"), "i")).exec(f.name) || u.exec(f.id)) {
                            var _ = f.name && f.name.match(/[qQ]/) || f.id && f.id.match(/[qQ]/),
                                p = new RegExp(lpgs("ff_username_regexp"), "i"),
                                m = new RegExp(lpgs("ff_email_regexp"), "i");
                            if (_ && f.name && !f.name.match(/^[qQ]/) && (!f.id || f.id && !f.id.match(/^[qQ]/))) pass;
                            else if (_ && f.id && !f.id.match(/^[qQ]/) && (!f.name || f.name && !f.name.match(/^[qQ]/))) pass;
                            else {
                                if (!_ || !(p.exec(f.name) || p.exec(f.id) || m.exec(f.name) || m.exec(f.id))) {
                                    decision_log(a, "DE23");
                                    continue
                                }
                                pass
                            }
                        } if (!popupfill_shoulddofield(a, f, !1)) {
                        var g = !1,
                            u;
                        if (("text" == f.type || "tel" == f.type || "email" == f.type) && !s)
                            if (t)(u = new RegExp(lpgs("ff_username_regexp"), "i")).exec(f.name) || u.exec(f.id) ? (l = f, c = !0) : c || (l = f);
                            else l = f;
                        if ("password" == f.type && !s)
                            if (t) {
                                var u = new RegExp(lpgs("ff_username_regexp"), "i");
                                c || !u.exec(f.name) && !u.exec(f.id) ? s = f : l = f
                            } else s = f
                    }
                } else decision_log(a, "DE25")
            }
    }
    var h = {};
    return l && (h.text = l), s && (h.password = s), isEmptyObject(h) ? null : h
}

function ForceFillClicked(e, t, r) {
    var n = g_popupfill_parent;
    if (!(n = n || g_popupfill_parent_last)) {
        if (g_force_fill_active_element) {
            var a = LP_getActiveElement(e);
            a && "INPUT" == a.tagName && LP_docHasFocus(e) && hasIconState(e, LP_pickFieldName(e, a)) && (n = a, info_log("CV21"))
        }
        if (!n) return !1
    }
    if (!e && !(e = n.ownerDocument)) return !1;
    var i = chk_form_has_password(e, n.form),
        o = chk_form_ask_generate(e, n.form);
    return n.form && i && !o ? !(!ForceFillFormClicked(e, n.form, t, r) || "" === n.value) || ForceFillFieldClicked(e, n, t, r) : null == n.form ? ForceFillOrphanFieldClicked(e, n, r) : ForceFillFieldClicked(e, n, t, r)
}

function isMultiStageLoginForm(e) {}

function LP_passwordAlt(e, t) {
    return !(!e || !t || "INPUT" != t.tagName) && ("nyckel" == LP_pickFieldName(e, t).toLowerCase() && "password" == t.type);
    var r
}

function LP_explicit_ignored(e, t) {
    if (!e || !t || void 0 === t.getAttribute) return !0;
    var r = t.getAttribute("data-lpignore");
    return "true" === r || ("true" === (r = !!t.dataset && t.dataset.lpignore) || ("true" === (r = t.getAttribute("lpignore")) || "true" === t.lpignore))
}

function countFormEquivalents(e) {
    for (var t = 0, r = e.getElementsByTagName("FORM"), n = LP_getFormsThreshold(e), a = 0; a < r.length && a < n; a++) {
        var i = !0;
        lpIsVisible(r[a]), t++
    }
    return t
}

function LP_implicit_ignored(e, t) {
    if (!t) return !1;
    if (!e && !(e = LP_derive_doc())) return !1;
    var r = t.id,
        n = t.name,
        a = e.body,
        i = t.form;
    if (n && "post_title" == n && a && a.className && 0 <= a.className.indexOf("wp-admin")) return !0;
    if (n && ("symbols" == n || "symbol" == n)) return !0;
    if ("text" == t.type && r && (0 < r.indexOf("_note") || 0 < r.indexOf("-note"))) return !0;
    var o = new RegExp(lpgs("ff_combineddummy_regexp"), "i"),
        l = new RegExp("member.*number", "i");
    return !o.exec(r) && !o.exec(n) || l.exec(r) || l.exec(n) ? !!LP_field_is_xsrf(e, t) || !(!i || popupfill_shoulddoform(e, i)) : (decision_log(e, "DE22", {
        param1: r,
        param2: n
    }), !0)
}

function LP_read_website_hint(e, t) {}

function should_ignore_body_relative(e) {
    if (!(e = e || LP_derive_doc())) return !1;
    var t = formcacheget(e, "fakedoc", "ignore-relative-style");
    if (!0 === t || !1 === t) return t;
    var r = 0,
        n = null,
        a = 100,
        i = LP_get_cached_body_rect(e),
        o = LP_get_body_reference(e),
        l = LP_get_cached_body_style(e);
    if (l && "relative" != l.position) return formcacheset(e, "fakedoc", "ignore-relative-style", !0), !0;
    var s = [];
    if (o && (s = o.children), s && 0 < s.length)
        for (Checkpoint.assert(s.length < a, "too many body.children"), r = 0; r < s.length && r < a; r++)
            if (!lp_in_array(s[r].tagName.toUpperCase(), ["SCRIPT"]) && lp_in_array(s[r].tagName.toUpperCase(), ["DIV", "SECTION", "FORM"])) {
                if ((n = LP_get_live_style(s[r])) && "relative" == n.position) return formcacheset(e, "fakedoc", "ignore-relative-style", !1), !1;
                break
            } return formcacheset(e, "fakedoc", "ignore-relative-style", !0), !0
}

function LP_iconFieldWidthOK(e, t, r) {
    var n = 40,
        a = 100,
        i = 2,
        o = 3;
    if (!e || null === t) return !1;
    var l = e.ownerDocument;
    if (!l) return verbose_log("iconFieldWidthOK: no doc???"), !1;
    if (null == r)
        if (isInputFieldPassword(l, e)) r = !0;
        else {
            var s = e.form,
                c;
            if (s) chk_form_has_password(l, s) && (r = !0)
        } return r ? !(0 < t && t < 40) && !!f(e) : !(0 < t && t < a);

    function f(e) {
        if (!e) return !1;
        var t = e.getAttribute("size"),
            r = e.getAttribute("maxlength");
        return null == t && (t = e.size), null == r && (r = e.maxLength), !("" == e.style.width && t && t < 2 && 0 <= t) && !(r && r < 3 && 0 <= r)
    }
}

function create_icons_on_ASP(a, e) {
    if (do_experimental_popupfill) {
        if (!(a = a || LP_derive_doc())) return !1;
        decision_log(a, "DE21", {
            param1: a.location.href
        });
        var t = [];
        if (g_do_icon_number_hint)
            if (g_isfirefox) {
                var r = LP.getMatchingSites(a.location.href, SKIP_GENPWS),
                    n = r && r.length ? r.length : 0;
                t.sites = n
            } else t = g_icon_numbers;
        var i = a.getElementsByTagName("FORM"),
            o, l, s = {},
            c = SHOULD_DO_ALWAYS,
            f = LP_getFormsThreshold(a),
            d = 0;
        for (l = 0; l < i.length && l < f; l++) {
            var u = i[l].elements,
                _ = chk_form_has_password(a, i[l]),
                p = chk_form_is_nonlogin_form(a, i[l]),
                m = chk_form_ask_generate(a, i[l]),
                g = form_get_username(a, i[l]),
                h = form_get_password(a, i[l]),
                v = MAX_INPUTS_SOFT;
            for (LP_exceedInputsThreshold(a) || (v = MAX_INPUTS_HARD), o = 0; o < u.length && o < v; o++) {
                var y = !1,
                    P = u[o],
                    L = "sites";
                if ("INPUT" == P.tagName) {
                    var E = !1;
                    if (popupfill_shoulddofield(a, P, c)) {
                        var x = LP_fieldGetWidth(P),
                            k = !0;
                        if (e)(looksLikeUsername(P) || isInputFieldPassword(a, P)) && (L = "sites", y = !0);
                        else if (g == P) L = "sites", y = !0;
                        else if (isInputFieldPassword(a, P)) {
                            var b = !0;
                            L = "sites", E = y = !0, isContigPW(a, P.form, P) ? E = !(L = "generate") : isRegistrationUrl() && (E = !(L = "generate"))
                        } else isFirstFieldNonLoginSubForm(a, P) ? (L = "formfills", sendBG({
                            cmd: "setformfillsactivetab"
                        }), k = !(y = !0)) : (isUsernameFieldLoginSubForm(a, P) || isPasswordFieldLoginSubForm(a, P)) && (L = "sites", E = y = !0);
                        if (y) {
                            if (!LP_iconFieldWidthOK(P, x, k)) continue;
                            d++, setup_input_icon(a, P, L, t, E), g_clickable_input && ("password" == P.type && formHasUsernameField(P) && !g_clickable_input_on_password || !LP_didFieldClickEvent(a, P) && L && "sites" == L && (LP_setFieldClickEvent(a, P), LP_addEventHandler(P, "click", function(e) {
                                var t = e.target,
                                    r = LPMAGIC + LP_getname_or_idx(a, t, LP_GETNAME_FAVOR_ID_OVER_NAME),
                                    n;
                                if (null != document.getElementById(r)) g_clickable_input_on_password ? is_your_popup_showing(a) || conditional_create_popup(a, t, FORCE_SHOW_NOHITS_NOLOGIN) : (set_active_username_password(a, P.form), popuptoggle(a, null, LP_getname_or_idx(a, P, LP_GETNAME_FAVOR_ID_OVER_NAME), NO_FORCE_GENERATE, FORCE_SHOW_NOHITS));
                                else if (g_input_click_intercept) try {
                                    info_log(a, "FF12"), icon_click_handler(e)
                                } catch (e) {}
                                return !1
                            }, !1)))
                        }
                    }
                }
            }
        }
        decision_log(a, "DE1", {
            param1: d
        })
    }
}

function check_for_ASP(t, e) {
    if (e) {
        var r = !1;
        if (!isASPpage() && g_aspx_hack) {
            0 !== e.name.indexOf("ctl00$") && (null == e.form || "ctl00" != e.form.name && "landingform" != e.form.name && "landingForm" != e.form.name && "aspnetForm" != e.form.name && "aspnetForm" != e.form.id) && 0 !== e.name.indexOf("ctl00_") || isASPpage() || (setASPpage(!0), decision_log("DE20"));
            try {
                t.location && t.location.href && 0 < t.location.href.indexOf(".aspx") && e.form && e.form.elements && e.form.elements.length && 6 < e.form.elements.length && (isASPpage() || (setASPpage(!0), decision_log("DE19")))
            } catch (e) {
                write_error_to_history(t, "check_for_ASP", e)
            }
        }
    }
}

function create_icons_generic(a, e) {
    if (do_experimental_popupfill) {
        if (!a && !(a = LP_derive_doc())) return null;
        decision_log(a, "DE16", {
            param1: a.location.href
        });
        var t = [];
        if (g_do_icon_number_hint)
            if (g_isfirefox) {
                var r = LP.getMatchingSites(a.location.href, SKIP_GENPWS),
                    n = r && r.length ? r.length : 0;
                t.sites = n
            } else t = g_icon_numbers;
        var i = a.getElementsByTagName("INPUT"),
            o, l, s = i.length,
            c = MAX_INPUTS_SOFT;
        LP_exceedInputsThreshold(a) || (c = MAX_INPUTS_HARD), Checkpoint.assert(s <= c, "page has too many inputs"), c < s && (s = c);
        var f = SHOULD_DO_ALWAYS,
            d = checkDocumentForLoginOrphans(a),
            u = 0;
        for (o = 0; o < s; o++) {
            var _ = i[o].form,
                p = null,
                m = null;
            m = _ ? (p = form_get_username(a, _), form_get_password(a, _)) : (p = doc_get_orphan_username(a), doc_get_orphan_password(a));
            var g = i[o],
                h = !1,
                v = "sites",
                y = !1;
            if (popupfill_shoulddofield(a, g, f)) {
                var P = LP_fieldGetWidth(g),
                    L = !0;
                if (e ? (looksLikeUsername(g) || isInputFieldPassword(a, g)) && (v = "sites", h = !0) : p == g ? (v = "sites", h = !0) : isInputFieldPassword(a, g) ? (v = "sites", y = h = !0, isContigPW(a, g.form, g) ? y = !(v = "generate") : isRegistrationUrl() && (y = !(v = "generate"))) : isFirstFieldNonLoginSubForm(a, g) ? (v = "formfills", sendBG({
                        cmd: "setformfillsactivetab"
                    }), L = !(h = !0)) : isUsernameFieldLoginSubForm(a, g) || isPasswordFieldLoginSubForm(a, g) ? (v = "sites", y = h = !0) : null == g.form && d && (looksLikeUsername(g) || isInputFieldPassword(a, g)) && (v = "sites", h = !0), h) {
                    if (!LP_iconFieldWidthOK(g, P, L)) continue;
                    u++;
                    var E = setup_input_icon(a, g, v, t, y);
                    g_clickable_input && ("password" == g.type && formHasUsernameField(g) && !g_clickable_input_on_password || !LP_didFieldClickEvent(a, g) && v && "sites" == v && (LP_setFieldClickEvent(a, g), LP_addEventHandler(g, "click", function(e) {
                        var t = e.target,
                            r = LPMAGIC + LP_getname_or_idx(a, t, LP_GETNAME_FAVOR_ID_OVER_NAME),
                            n;
                        if (null != document.getElementById(r)) g_clickable_input_on_password ? is_your_popup_showing(a) || conditional_create_popup(a, t, FORCE_SHOW_NOHITS_NOLOGIN) : (set_active_username_password(a, g.form), popuptoggle(a, null, LP_getname_or_idx(a, g, LP_GETNAME_FAVOR_ID_OVER_NAME), NO_FORCE_GENERATE, FORCE_SHOW_NOHITS));
                        else if (g_input_click_intercept) try {
                            info_log(a, "FF12"), icon_click_handler(e)
                        } catch (e) {}
                        return !1
                    }, !1)))
                }
            }
        }
        return decision_log(a, "DE2", {
            param1: u
        }), !0
    }

    function x(e) {}

    function k(e) {}

    function b(e, t) {}

    function N(e, t, r) {}
}

function LP_getAngularAttributes(e, t) {
    if (e = e || LP_derive_doc(), !t || !e) return null;
    for (var r = {}, n = ["ng-model", "ng-controller", "ng-repeat", "ng-include", "ng-switch", "ng-view", "ng-minlength", "ng-maxlength", "ng-pattern", "ng-click", "ng-submit", "ng-required"], a = 0; a < n.length; a++) {
        var i = t.getAttribute(n[a]);
        null !== i && (r[n[a]] = i)
    }
    for (var o = ["ng-valid", "ng-invalid", "ng-pristine", "ng-dirty", "ng-touched", "ng-untouched", "ng-pending", "ng-empty", "ng-not-empty"], a = 0; a < o.length; a++) {
        var l = sprintf("[\\w]*%s[\\w]*", o[a]);
        t.className.match(l) && (r[o[a]] = !0)
    }
    return r
}

function LP_hasAngular(e) {
    if (!(e = e || LP_derive_doc())) return !1;
    var t = !1,
        r = formcacheget(e, "fakedoc", "has-angular");
    if (null != r) return r;
    var n = e.documentElement,
        a = e.body;
    return a && a.getAttribute("ng-app") || n && n.getAttribute("ng-app") || a && null !== a.getAttribute("ng-strict-di") || n && null !== n.getAttribute("ng-strict-di") ? t = !0 : LP_getElementByXPath(e, "//*[@ng-app!='']") && (t = !0), formcacheset(e, "fakedoc", "has-angular", t), t
}

function LP_hasKnockout(e) {
    if (!(e = e || LP_derive_doc())) return !1;
    var t = !1,
        r = formcacheget(e, "fakedoc", "has-knockout");
    if (null != r) return r;
    if (g_isie) {
        for (var n = e.getElementsByTagName("input"), a = 0; a < n.length && a < MAX_INPUTS_HARD; a++)
            if (n[a].getAttribute("data-bind")) {
                t = !0;
                break
            }
    } else {
        var i = LP_getElementsByXPath(e, "//*[@data-bind != '']");
        i && 0 < i.length && (t = !0)
    }
    return formcacheset(e, "fakedoc", "has-knockout", t), t
}

function LP_has_yui(e) {
    if (!(e = e || LP_derive_doc())) return !1;
    var t = !1,
        r = formcacheget(e, "fakedoc", "has-yui");
    return null != r ? r : e.documentElement && 0 <= e.documentElement.className.indexOf("yui3-js-enabled") ? (formcacheset(e, "fakedoc", "has-yui", !0), !0) : e.documentElement && 0 == e.documentElement.id.indexOf("yui_3") ? (formcacheset(e, "fakedoc", "has-yui", !0), !0) : e.getElementById("yui3-css-stamp") ? (formcacheset(e, "fakedoc", "has-yui", !0), !0) : (formcacheset(e, "fakedoc", "has-yui", !1), !1)
}

function LP_field_is_xsrf(e, t) {
    if (!(e = e || LP_derive_doc()) || !t) return !1;
    var r = !1;
    return t.tagName && "INPUT" == t.tagName.toUpperCase() && "string" == typeof t.name && (0 <= t.name.toUpperCase().indexOf("CSRF") || 0 <= t.name.toUpperCase().indexOf("XSRF") || 0 <= t.id.toUpperCase().indexOf("CSRF") || 0 <= t.id.toUpperCase().indexOf("XSRF")) && (r = !0), r
}

function LP_get_youama_fields(e) {
    if (!(e = e || LP_derive_doc())) return null;
    var t = {},
        r;
    if (null != (r = formcacheget(e, "orphans", "youama-fields"))) return r;
    var n = LP_getElementByXPath(e, "//div[contains(@class,'youama-login-window')]//input[@id='youama-email']"),
        a = LP_getElementByXPath(e, "//div[contains(@class,'youama-login-window')]//input[@id='youama-password']"),
        i = LP_getElementByXPath(e, "//div[contains(@class,'youama-login-window')]//button[contains(@class,'youama-ajaxlogin-button')]"),
        o = LP_getElementByXPath(e, "//div[contains(@class,'youama-login-window')]"),
        l = LP_getElementByXPath(e, "//div[contains(@class,'youama-register-window')]//input[@id='youama-email']"),
        s = LP_getElementByXPath(e, "//div[contains(@class,'youama-register-window')]//input[@id='youama-password']"),
        c = LP_getElementByIdOrName(e, "youama-firstname"),
        f = LP_getElementByIdOrName(e, "youama-lastname"),
        d, u, _, t = {
            login_username: n,
            login_password: a,
            login_button: i,
            login_form_container: o,
            regis_username: l,
            regis_password: s,
            regis_password_confirm: LP_getElementByIdOrName(e, "youama-passwordsecond"),
            regis_firstname: c,
            regis_lastname: f,
            regis_button: LP_getElementByXPath(e, "//div[contains(@class,'youama-register-window')]//button[contains(@class,'youama-ajaxlogin-button')]"),
            regis_form_container: LP_getElementByXPath(e, "//div[contains(@class,'youama-register-window')]")
        },
        r = formcacheset(e, "orphans", "youama-fields", t);
    return t
}

function LP_has_youama(e) {
    if (!(e = e || LP_derive_doc())) return [];
    var t = formcacheget(e, "fakedoc", "has-youama");
    return null != t ? t : 0 < e.getElementsByClassName("youama-login-window").length || 0 < e.getElementsByClassName("youama-register-window").length ? (formcacheset(e, "fakedoc", "has-youama", !0), !0) : (formcacheset(e, "fakedoc", "has-youama", !1), !1)
}

function LP_has_dijit(e) {
    if (!(e = e || LP_derive_doc()) || !e.documentElement) return [];
    var t = 0,
        r = e.getElementsByClassName("dijitContentPane"),
        n;
    if (r && 0 < r.length) return !0;
    if (e.documentElement.className.match(/^dj_[a-z]+|\sdj_[a-z]+/)) return !0;
    for (r = e.getElementsByTagName("SCRIPT"), t = 0; t < r.length; t++)
        if ("dojo/connect" == r[t].getAttribute("type") || "dojo/method" == r[t].getAttribute("type")) return !0;
    for (r = e.getElementsByTagName("FORM"), t = 0; t < r.length; t++)
        if (r[t].getAttribute("data-dojo-attach-point")) return !0;
    return !1
}
var LP_milestone_flags = 0;

function LP_parser_milestone(e) {
    return void 0 !== e && (LP_milestone_flags |= e, !0)
}

function page_is_nemid(t) {
    if (!(t = t || LP_derive_doc())) return !1;
    var e = lp_gettld_url(punycode.URLToASCII(get_doc_location_href(document))),
        r = "",
        n = "",
        a = !1,
        i = formcacheget(t, "fakedoc", "is-nemid");
    if (null != i) return i;
    try {
        if (!get_can_xref(t, "top")) throw "xref";
        r = window.name, n = window.top.name
    } catch (e) {
        set_can_xref(t, "top", !1)
    }
    return "danid.dk" != e && "nemid.nu" != e || !t.getElementById("appArea") && "nemid_iframe" != r && "loginWindow" != n || (a = !0), formcacheset(t, "fakedoc", "is-nemid", a), a
}

function LP_element_is_honeypot(e, t) {
    if (!(e = e || LP_derive_doc()) || !t) return !1;
    var r = gettldcached(get_doc_location_href(e)),
        n = [],
        a = [],
        i = 0,
        o, l = ["lpcurrpasselt", "lpcurruserelt"];
    if (lp_in_array(t.id, l)) return !1;
    if (has_same_tld(r, "citi.com", LPVARS.g_passedequivdomains)) {
        if (e.getElementById("loginForm") || e.getElementById("logon") || e.getElementById("password") || e.getElementById("PASSWORD")) {
            for (i = (a = e.getElementsByTagName("input")).length, o = 0; o < MAX_INPUTS_SOFT && o < i; o++)
                if (a[o] && "password" == a[o].type) {
                    if (lp_in_array(a[o].id, l)) continue;
                    n.push(a[o])
                } if (5 == n.length && "a" == n[0].defaultValue && "b" == n[1].defaultValue && "c" == n[2].defaultValue && "d" == n[3].defaultValue && lp_in_array(t, [n[0], n[1], n[2], n[3]])) return !0
        }
    } else if (compare_equiv_domains(r, "ebay.com")) {
        var s;
        if (1 === e.getElementsByName("runId2").length && ("userid" == t.id || "userid" == t.name || "pass" == t.id || "pass" == t.name || "runId2" == t.name)) return !0
    }
    return !(!compare_equiv_domains(r, "nordnet.no") || "fake_password" != t.name) || (a = n = null, !1)
}

function LP_page_is_lazyloader(e, t) {
    if (!(e = e || LP_derive_doc())) return !1;
    var r = !1,
        n = formcacheget(e, "fakedoc", "is-lazyloader");
    if (null != n) return n;
    if (LP_hasAngular(e) || LP_hasKnockout(e) || LP_has_emberjs(e)) return formcacheset(e, "fakedoc", "is-lazyloader", !0), !0;
    if (e.body) {
        var a = e.body.getAttribute("onload");
        if ("string" == typeof a && 0 <= a.toLowerCase().indexOf("lazyload")) return !0
    }
    var i = "",
        o = "",
        l = "",
        s = new RegExp("requirejs|lazyload|LAB\\.?js|LAB\\.min\\.js", "i"),
        c = new RegExp("dojo");
    if (!s || !c) return !1;
    for (var f = e.getElementsByTagName("script"), d = 0; d < f.length; d++)
        if (i = f[d].getAttribute("src")) {
            var u = f[d].id,
                _;
            if (s.exec(i) || s.exec(u)) {
                r = !0;
                break
            }
            if ("module" == (o = f[d].getAttribute("type"))) {
                r = !0;
                break
            }
            if (c.exec(i) && "async: true" == (l = f[d].getAttribute("data-dojo-config"))) {
                r = !0;
                break
            }
            if ("microloader" == u)
                if (f[d].getAttribute("data-app")) {
                    r = !0;
                    break
                } var p = f[d].getAttribute("data-requirecontext"),
                m = f[d].getAttribute("data-requiremodule");
            if (p && m) {
                r = !0;
                break
            }
        } else {
            var g = f[d].innerHTML;
            if (g && g.length < 512 && 0 < g.indexOf("function SRSRetry")) return !0
        } if (!r)
        for (var h = e.getElementsByTagName("meta"), v = "", d = 0; d < h.length; d++)
            if ("string" == typeof(v = h[d].name) && v.match(/config\/environment$/)) {
                r = !0;
                break
            } return formcacheset(e, "fakedoc", "is-lazyloader", r), r
}

function LP_isSinglePageApp(e) {
    if (!(e = e || LP_derive_doc())) return !1;
    var t = !1,
        r = formcacheget(e, "fakedoc", "SPA");
    return null != r ? r : LP_hasAngular(e) || LP_hasKnockout(e) || LP_has_emberjs(e) ? (formcacheset(e, "fakedoc", "SPA", !0), !0) : 0 < g_probablySinglePageApp ? (formcacheset(e, "fakedoc", "SPA", !0), !0) : !!LP_url_is_single_page_app(get_doc_location_href(e)) && (formcacheset(e, "fakedoc", "SPA", !0), !0)
}
var g_probablySinglePageApp = 0;

function LP_has_jquery(e) {
    if (!(e = e || LP_derive_doc())) return !1;
    var t = !1,
        r = formcacheget(e, "fakedoc", "has-jquery");
    if (null != r) return r;
    for (var n = "", a = new RegExp("jquery", "i"), i = e.getElementsByTagName("script"), o = 0; o < i.length; o++)
        if (n = i[o].getAttribute("src"), a.exec(n)) {
            t = !0;
            break
        } return formcacheset(e, "fakedoc", "has-jquery", t), t
}

function LP_init_url_history(e) {
    if (!(e = e || LP_derive_doc())) return !1;
    if ("undefined" == typeof LPUH || null === LPUH || null === LPUH.url_history) {
        if (LPUH = {}, null === LPUH) return !1;
        LPUH.url_history = []
    }
    return !0
}

function LP_get_last_url_history(e) {
    if (!(e = e || LP_derive_doc())) return !1;
    if (LP_init_url_history(e), LPUH) {
        var t = LPUH.url_history.length;
        if (0 < t) return LPUH.url_history[t - 1]
    }
    return {}
}

function LP_reset_url_history(e) {
    return LP_init_url_history(e), !!LPUH && (LPUH.url_history = [], !0)
}

function LP_put_last_url_history(e) {
    if (!(e = e || LP_derive_doc())) return !1;
    LP_init_url_history(e);
    var t = get_doc_location_href(e),
        r = crc32(LP_gettime() + "%" + t);
    return LPUH.url_history.push({
        href: t,
        href_hash: r
    }), verbose_log("computed new hash " + r + " for " + t), !0
}

function LP_is_buttonlike(e, t) {
    return !(!(e = e || LP_derive_doc()) || !t) && ("BUTTON" == t.tagName || "INPUT" == t.tagName && ("submit" == t.type || "image" == t.type || "button" == t.type))
}
var BEEPID = "_lpbeep";

function LP_putBeeper(e, t, r) {
    if (!(e = e || LP_derive_doc())) return !1;
    if (e.getElementById(BEEPID)) return !0;
    if (!r && !e.body) return !1;
    var n = e.createElement("div");
    return n.setAttribute("aria-hidden", "true"), n.style.display = "none", n.style.left = "-1000px", n.style.height = "0", n.setAttribute("data-lpbeep", t), n.id = BEEPID, r ? r.appendChild(n) : e.body.appendChild(n), !0
}

function LP_pickBeeper(e) {
    if (!(e = e || LP_derive_doc())) return !1;
    var t = e.getElementById(BEEPID);
    return t && t.parentNode.removeChild(t), !0
}

function LP_readBeeper(e) {
    if (!(e = e || LP_derive_doc())) return null;
    var t = e.getElementById(BEEPID);
    if (t) {
        var r = getComputedStyle(t);
        return {
            display: r.display,
            visibility: r.visibility,
            val: t.getAttribute("data-lpbeep")
        }
    }
    return null
}

function should_fill_on_click(e, t) {
    if (!(e = e || LP_derive_doc()) || !t) return !1;
    var r = !1,
        n = t.tagName.toUpperCase(),
        a = t.form,
        i = !1,
        o = t.getAttribute("role");
    if (LP_is_buttonlike(e, t) && a) {
        var l = a.action,
            s = a.method;
        l && 0 == l.toLowerCase().indexOf("https://") && s && "POST" == s.toUpperCase() && (i = r = !0)
    }
    return i || ("A" == n || "NAV" == n || "navigation" == o || "INPUT" == n && "submit" == t.type) && (i = !(r = !1)), i || lp_in_array(n, ["INPUT", "LABEL", "SELECT", "FIELDSET", "OPTION", "TEXTAREA", "TBODY", "THEAD", "ADDRESS", "BLOCKQUOTE", "Q", "PRE", "ABBR", "CITE", "BODY", "HEAD", "META", "SCRIPT", "STYLE", "MAIN", "ARTICLE", "HEADER", "FOOTER", "ASIDE", "DETAILS", "FIGURE", "FIGCAPTION", "MARK", "SECTION", "SUMMARY", "TIME", "IFRAME", "FRAME", "FRAMESET"]) && (i = r = !0), !r
}

function should_simulate_submit_on_click(e, t) {
    return e = e || LP_derive_doc(), !1
}

function LP_url_is_single_page_app(e) {
    return !(!e || "string" != typeof e) && !!new RegExp("https?://.*#\\/[a-z]", "i").exec(e);
    var t
}

function LP_has_bootstrapJS(e) {
    if (!(e = e || LP_derive_doc())) return !1;
    var t = !1,
        r = formcacheget(e, "fakedoc", "has-bootstrap");
    if (null != r) return r;
    for (var n = "", a = new RegExp("bootstrap.min.js$", "i"), i = e.getElementsByTagName("script"), o = 0; o < i.length; o++)
        if (n = i[o].getAttribute("src"), a.exec(n)) {
            t = !0;
            break
        } return formcacheset(e, "fakedoc", "has-bootstrap", t), t
}

function LP_has_joomla(e) {
    if (!(e = e || LP_derive_doc())) return !1;
    var t = !1,
        r = formcacheget(e, "fakedoc", "has-joomla");
    if (null != r) return r;
    for (var n = "", a = new RegExp("(/media/jui/js|/templates/joomla)", "i"), i = e.getElementsByTagName("script"), o = 0; o < i.length; o++)
        if (n = i[o].getAttribute("src"), a.exec(n)) {
            t = !0;
            break
        } return formcacheset(e, "fakedoc", "has-joomla", t), t
}

function LP_has_emberjs(e) {
    if (!(e = e || LP_derive_doc())) return !1;
    var t = !1,
        r = formcacheget(e, "fakedoc", "has-emberjs");
    if (null != r) return r;
    var n = e.body;
    if (n && (0 <= n.className.indexOf("ember-application") || "1" == n.getAttribute("data-ember-extension")) && (t = !0), !t && e.documentElement && "1" == e.documentElement.getAttribute("data-ember-extension") && (t = !0), !t)
        for (var a = e.getElementsByTagName("meta"), i = "", o = 0; o < a.length; o++)
            if ("string" == typeof(i = a[o].name) && i.match(/config\/environment$/)) {
                t = !0;
                break
            } return formcacheset(e, "fakedoc", "has-emberjs", t), t
}
var SPA_INDETERMINATE = 0,
    SPA_LOADED = 1,
    SPA_LOGIN = 2,
    SPA_LOGINFAILED = 4,
    SPA_ACCTMGMT = 8,
    SPA_REGISTER = 16,
    SPA_APP = 32,
    SPA_INDETERMINATE_STATE = "A",
    SPA_LOGIN_STATE = "B",
    SPA_IN_APP_STATE = "C",
    SPA_LOGIN_WITHIN_APP_STATE = "D";
//# sourceMappingURL=sourcemaps/parser_cs.js.map