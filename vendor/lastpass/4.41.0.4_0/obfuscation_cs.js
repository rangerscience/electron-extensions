function LP_element_is_MaskedField(e) {
    if (!e) return !1;
    var t = "",
        n = "";
    try {
        t = e.ownerDocument.location.href, n = gettldcached(t)
    } catch (e) {
        return !1
    }
    if (!LP_has_textlike_type(e)) return !1;
    var a = e.getAttribute("onblur"),
        r = e.getAttribute("onfocus");
    return !!(a && "string" == typeof a && 0 <= a.toLowerCase().indexOf("mask") || r && "string" == typeof r && 0 <= r.toLowerCase().indexOf("unmask")) || (!(void 0 === e.hasAttribute || !("fidelity.com" == n && !0 === e.hasAttribute("data-unmasked") || e.hasAttribute("data-masklength"))) || (!("citi.com" != n && "citibank.com" != n || !name_is_MaskedField(LP_getname(e)) && !name_is_MaskedField(LP_getname(e, LP_GETNAME_FAVOR_ID_OVER_NAME))) || ("stockplanconnect.com" == n && "loginUsername" == e.id && null !== e.ownerDocument.getElementById("unmaskedUsername") || !("tdbank.com" != n || "txtUser" != e.id || "user" != e.name || !e.form || "details" != e.form.name || 1 != e.ownerDocument.getElementsByName("login").length || 2 != e.ownerDocument.getElementsByName("user").length))))
}

function LP_element_in_MaskedState(e) {
    if (!e) return !1;
    var t = encodeURIComponent(e.value);
    return !!(t && "string" == typeof t && 0 < t.length && "password" != e.type && (0 <= t.indexOf("***") || 0 <= t.indexOf("%E2%80%A2%E2%80%A2%E2%80%A2")))
}

function name_is_MaskedField(e) {
    return !(!e || e.length <= 0) && (!(!e.match(/masked/i) || e.match(/unmasked/i)) && (g_in_lpframe && "undefined" != typeof score_log && score_log("is masked? " + e + " true"), !0))
}

function name_is_UnmaskedField(e) {
    if (!e || e.length <= 0) return !1;
    if (e.match(/unmasked/i)) return g_in_lpframe && "undefined" != typeof score_log && score_log("is unmasked? " + e + " true"), !0;
    var t, n;
    g_in_lpframe;
    return !1
}

function update_preobfuscate_field_value(e) {
    if (!e) return !1;
    var t = e.ownerDocument;
    if (!(t = t || LP_derive_doc())) return !1;
    var n = LP_pickFieldName(t, e);
    if (n) {
        var a = e.value;
        null == a || LP_element_in_MaskedState(e) || fieldcacheset(t, n, "fieldval", a)
    }
    return !0
}

function should_track_field_onkeyup(e) {
    if (!e) return !1;
    var t = e.ownerDocument;
    if (!(t = t || LP_derive_doc())) return !1;
    var n = LP_pickFieldName(t, e);
    if (n) {
        var a = fieldcacheget(t, n, "stfu");
        if (null != a) return a
    }
    var r = e.id,
        i = e.name,
        _ = e.getAttribute("title"),
        d = get_doc_location_href(t),
        l;
    return "fidelity.com" != lp_gettld_url(d) || "temp_id" != r && "temp_id" != _ && "ssnt" != r && "ssn" != i && "userId" != r && "userId-input" != r ? (n && fieldcacheset(t, n, "stfu", !1), !1) : (n && fieldcacheset(t, n, "stfu", !0), !0)
}

function masked_monitor(e) {
    var t = LP_getEventTarget(e),
        n = t.ownerDocument;
    if (t && n && "string" == typeof t.value)
        if (LP_element_in_MaskedState(t)) {
            var a = t.value,
                r = lp_gettld_url(get_doc_location_href(n)),
                i = t.getAttribute("onblur");
            if ("tdbank.com" == r && a && null !== i && 0 <= i.toLowerCase().indexOf("mask") && LP_element_in_MaskedState(t)) {
                var _ = formcacheget(n, LP_pickFieldName(n, t), "unmasked-value");
                null === _ && (_ = "");
                for (var d = 0; d < a.length; d++) "%E2%80%A2" == encodeURIComponent(a.charAt(d)) && (a = a.substr(0, d) + _.charAt(d) + a.substr(d + 1))
            }
            formcacheset(n, LP_pickFieldName(n, t), "unmasked-value", a)
        } else formcacheset(n, LP_pickFieldName(n, t), "unmasked-value", t.value)
}

function LP_element_is_UnmaskedField(e) {
    if (!e) return !1;
    var t = "",
        n = "";
    try {
        t = e.ownerDocument.location.href, n = gettldcached(t)
    } catch (e) {
        return !1
    }
    var a = LP_getname(e),
        r = LP_getname(e, LP_GETNAME_FAVOR_ID_OVER_NAME);
    return !(!name_is_UnmaskedField(a) && !name_is_UnmaskedField(r))
}

function track_masked_fields(e) {
    if (!(e = e || LP_derive_doc())) return !1;
    for (var t = e.getElementsByTagName("input"), n = 0; n < t.length && n < MAX_INPUTS_SOFT; n++) lp_in_array(t[n].type, ["text", "url", "email", "tel"]) && (LP_element_is_MaskedField(t[n]) || LP_element_is_UnmaskedField(t[n])) && (LP_addEventHandler(t[n], "input", masked_monitor), LP_addEventHandler(t[n], "focus", masked_monitor), g_do_masked_humanize = !0);
    return !0
}
//# sourceMappingURL=sourcemaps/obfuscation_cs.js.map