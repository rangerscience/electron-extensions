function oninitgenerate() {}

function onshowgenerate() {
    var t = getBG();
    document.getElementById("advanced") && (document.getElementById("advanced").checked = parseInt(t.lpGetPref("generate_advanced", 0))), document.getElementById("length").value = parseInt(t.lpGetPref("generate_length", 12)), document.getElementById("upper").checked = parseInt(t.lpGetPref("generate_upper", 1)), document.getElementById("lower").checked = parseInt(t.lpGetPref("generate_lower", 1)), document.getElementById("digits").checked = parseInt(t.lpGetPref("generate_digits", 1)), document.getElementById("special").checked = parseInt(t.lpGetPref("generate_special", 0)), document.getElementById("mindigits").value = parseInt(t.lpGetPref("generate_mindigits", 1)), document.getElementById("ambig").checked = parseInt(t.lpGetPref("generate_ambig", 0)), document.getElementById("reqevery").checked = parseInt(t.lpGetPref("generate_reqevery", 1)), document.getElementById("pronounceable").checked = parseInt(t.lpGetPref("generate_pronounceable", 0)), document.getElementById("advanced") && 0 == document.getElementById("advanced").checked && (document.getElementById("advancedoptions").style.display = "none"), pwUpkeep(), t.g_checkgeneratepasswordcallback = function() {
        g_generate_found = !0, sr(document, "generatesave", "value", "Accept"), document.getElementById("lp_docwrite_popover18") && set_innertext(document.getElementById("lp_docwrite_popover18"), gs("Accept")), sr(document, "generateclose", "value", "Cancel")
    }, g_ischrome ? t.get_selected_tab(null, function(e) {
        "" == g_generate_url && (g_generate_url = t.gettaburl(e), fix_length(document)), g_tabid = g_tabid || e.id, t.sendCS(g_tabid, {
            cmd: "checkgeneratepassword"
        })
    }) : (g_issafari || g_isfirefoxsdk) && (g_isfirefoxsdk ? (g_generate_url = t.g_generate_url, "" == g_generate_url && (g_generate_url = t.g_generate_url_prev), fix_length(document), !g_tabid && t.g_tabid && (g_tabid = t.g_tabid)) : g_issafari && "undefined" == typeof g_generate_url && (g_generate_url = t.getcurrenturl(), fix_length(document), g_tabid = t.getcurrenttabid()), t.checkgeneratepassword(g_tabid)), fix_length(document)
}

function onhidegenerate() {
    var e = getBG();
    document.getElementById("advanced") && e.lpPutUserPref("generate_advanced", document.getElementById("advanced").checked ? 1 : 0), e.lpPutUserPref("generate_length", document.getElementById("length").value), e.lpPutUserPref("generate_upper", document.getElementById("upper").checked ? 1 : 0), e.lpPutUserPref("generate_lower", document.getElementById("lower").checked ? 1 : 0), e.lpPutUserPref("generate_digits", document.getElementById("digits").checked ? 1 : 0), e.lpPutUserPref("generate_special", document.getElementById("special").checked ? 1 : 0), e.lpPutUserPref("generate_mindigits", document.getElementById("mindigits").value), e.lpPutUserPref("generate_ambig", document.getElementById("ambig").checked ? 1 : 0), e.lpPutUserPref("generate_reqevery", document.getElementById("reqevery").checked ? 1 : 0), e.lpPutUserPref("generate_pronounceable", document.getElementById("pronounceable").checked ? 1 : 0), e.lpWriteAllPrefs(), (g_issafari || g_isfirefoxsdk) && e.update_prefs("generate")
}

function fix_length(e, t) {
    if ("undefined" != typeof g_isie && g_isie && (g_generate_url = ie_gettopurl()), "string" == typeof g_generate_url && "" != g_generate_url) {
        if ("undefined" != typeof g_isie && g_isie) var n = get_sitepwlen(lp_gettld_url(g_generate_url));
        else var n = getBG().get_sitepwlen(lp_gettld_url(g_generate_url));
        n > e.getElementById("length").value && (e.getElementById("length").value = n, t || dogenerate())
    } else "undefined" != typeof g_sitepwlen_override && (g_sitepwlen_override > e.getElementById("length").value && (e.getElementById("length").value = g_sitepwlen_override), t || dogenerate())
}

function dogenerate() {
    fix_length(document, !0);
    var e = document.getElementById("length").value;
    100 < e && (e = document.getElementById("length").value = 100);
    var t = document.getElementById("upper").checked,
        n = document.getElementById("lower").checked,
        d = document.getElementById("digits").checked,
        r = document.getElementById("special").checked,
        o = document.getElementById("mindigits").value,
        g = document.getElementById("ambig").checked,
        a = document.getElementById("reqevery").checked,
        c = document.getElementById("pronounceable").checked;
    document.getElementById("password").style.fontFamily = "Monaco,Consolas,Courier", document.getElementById("password").value = lpCreatePass(e, t, n, d, r, o, g, a, c), getBG().g_genpws.unshift(document.getElementById("password").value), 20 < getBG().g_genpws.length && getBG().g_genpws.splice(20, getBG().g_genpws.length - 20), g_isfirefoxsdk && getBG().update_prefs("generate"), repopulate_combo("password", getBG().g_genpws), document.getElementById("page_passwordmeterback") && update_password_meter("", document.getElementById("password").value), LP_decimate_children(document.getElementById("copypwbutton"));
    var l = document.createElement("i");
    set_innertext(l, gs("Copy Password")), document.getElementById("copypwbutton").appendChild(l), document.getElementById("copypwbutton").style.color = "#d32d27", getBG().can_copy_to_clipboard() || (document.getElementById("copypwbutton").style.display = "none")
}

function docopypw() {
    var e = getBG(),
        t = document.getElementById("password").value;
    set_innertext(document.getElementById("copypwbutton"), "✓ " + gs("Password Copied")), document.getElementById("copypwbutton").style.color = "#000000", document.getElementById("password").select(), "undefined" == typeof g_generate_found && (g_generate_found = !1), g_generate_found || (e && e.sendLpImprove && e.sendLpImprove("genpassword", {
        action: "copypassword"
    }), "function" == typeof e.copytoclipboard ? e.copytoclipboard(t) : Clipboard.copy(t))
}

function dosave(e) {
    var t = getBG(),
        n = document.getElementById("password").value,
        d = {
            pronounceable: "on" === document.getElementById("pronounceable").checked,
            length: document.getElementById("length").checked,
            uppercase: "on" === document.getElementById("upper").checked,
            lowercase: "on" === document.getElementById("lower").checked,
            numeric: "on" === document.getElementById("digits").checked,
            special: "on" === document.getElementById("special").checked,
            avoidAmbiguous: "on" === document.getElementById("ambig").checked,
            source: "form"
        };
    "undefined" == typeof g_generate_found && (g_generate_found = !1), g_generate_found || ("function" == typeof t.copytoclipboard ? t.copytoclipboard(n) : Clipboard.copy(n)), "" == g_generate_url && (g_generate_url = t.getcurrenturl()), t.savePassword(n, g_generate_url, g_tabid, !g_generate_found, d), e ? setTimeout(function() {
        getBG().closePop()
    }, 0) : g_issafari ? closemole() : "undefined" != typeof g_ismenu && g_ismenu ? setTimeout(function() {
        g_isfirefoxsdk ? dispatch_message("closepop", {}) : window.close()
    }, 0) : setTimeout(function() {
        getBG().closecurrenttab("")
    }, 0)
}

function ensureuppersinpw(e) {
    for (var t = GPW.pronounceable(e), n = 0; n < e && t[n];) {
        var d, r, o;
        t = t.substr(0, n) + (get_random(0, 1) ? t[n].toUpperCase() : t[n]) + t.substr(n + 1), n++
    }
    return t
}

function lpCreatePass(e, t, n, d, r, o, g, a, c, l) {
    void 0 === e && (e = 8 + get_random(0, 1)), void 0 === t && (t = !0), void 0 === n && (n = !0), void 0 === d && (d = !0), void 0 === r && (r = !1), void 0 === o && (o = 0), void 0 === g && (g = !1), void 0 === a && (a = !0);
    var u = 0,
        s = 0,
        i = 0;
    if (t && (s = 1), n && (u = 1), r && (i = 1), c) {
        for (var p = ""; p.length < e;) p = t ? ensureuppersinpw(e) : GPW.pronounceable(e);
        return 0 === u ? p.toUpperCase() : p
    }
    var m = new Array;
    if (n && 0 < u)
        for (var _ = 0; _ < u; _++) m[m.length] = "L";
    if (t && 0 < s)
        for (var _ = 0; _ < s; _++) m[m.length] = "U";
    if (d && 0 < o)
        for (var _ = 0; _ < o; _++) m[m.length] = "D";
    if (r && 0 < i)
        for (var _ = 0; _ < i; _++) m[m.length] = "S";
    for (; m.length < e;) m[m.length] = "A";
    m.sort(function() {
        return 2 * get_random(0, 1) - 1
    });
    var f = "",
        y = "abcdefghjkmnpqrstuvwxyz";
    g || (y += "ilo"), n && (f += y);
    var v = "ABCDEFGHJKMNPQRSTUVWXYZ";
    g || (v += "ILO"), t && (f += v);
    var B = "23456789";
    g || (B += "10"), d && (f += B);
    var h = "!@#$%^&*";
    r && (f += h);
    for (var I = "", E = 0; E < e; E++) {
        var b;
        switch (m[E]) {
            case "L":
                b = y;
                break;
            case "U":
                b = v;
                break;
            case "D":
                b = B;
                break;
            case "S":
                b = h;
                break;
            case "A":
                b = f
        }
        var _ = get_random(0, b.length - 1);
        I += b.charAt(_)
    }
    return I
}

function showhideadv() {
    var e = document.getElementById("advancedoptions");
    e.style.display = "none" == e.style.display ? "block" : "none"
}

function resize_generate() {
    g_isfirefoxsdk && setTimeout(function() {
        getBG().resize_panel(390, $(document.body).height() + 10)
    }, 0)
}
//# sourceMappingURL=sourcemaps/generate.js.map