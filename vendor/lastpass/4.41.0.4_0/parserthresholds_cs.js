var MAX_INPUTS_HARD = 200,
    MAX_INPUTS_SOFT = 100;

function LP_exceedInputsThreshold(e) {
    if (!e) return !0;
    var r = MAX_INPUTS_HARD,
        t = MAX_INPUTS_SOFT,
        o = e.getElementsByTagName("input"),
        n = o.length;
    if (r < n) return verbose_log("EIT: hard threshold exceed"), !0;
    if (n < t) return !1;
    var f = 0,
        a;
    for (a = 0; a < n; a++)
        if (o[a]) {
            var s = o[a].type;
            "text" != s && "passwd" != s || f++
        } return t < f && (verbose_log("EIT: soft threshold exceed"), !0)
}
var MAX_FORMS_HARD = 20,
    MAX_FORMS_SOFT = 10;

function LP_getFormsThreshold(e) {
    if (!e) return 0;
    var r = MAX_FORMS_HARD,
        t = MAX_FORMS_SOFT,
        o = formcacheget(e, "fakedoc", "max-forms-threshold");
    if (null != o) return o;
    var n = e.getElementsByTagName("form"),
        f = n.length;
    if (Checkpoint.assert(f < r, "page has too many forms"), r < f) c(n[0]) && c(n[1]) && c(n[r - 1]) && (r *= 2);
    else if (f < t) return formcacheset(e, "fakedoc", "max-forms-threshold", t), t;
    var a = 0,
        s = new RegExp(lpgs("ff_loginform_regexp"), "i"),
        l;
    for (l = 0; l < f && l < r; l++)
        if (n[l]) {
            if (m(e, n[l]) && a++, t < l && m(e, n[l])) {
                var h, _, h = null,
                    _ = null,
                    d = n[l].name,
                    i = n[l].id;
                if (s.exec(d) || s.exec(i) || h && _) return formcacheset(e, "fakedoc", "max-forms-threshold", r), r
            }
            if (r < l) break
        } return t < a ? (formcacheset(e, "fakedoc", "max-forms-threshold", t + 2), t + 2) : (formcacheset(e, "fakedoc", "max-forms-threshold", t), t);

    function m(e, r) {
        return !(!e || !r) && !r.disabled
    }

    function c(e) {
        if (!e || void 0 === e.elements) return !1;
        if (5 <= e.elements.length) return !1;
        for (var r = 0; r < e.elements.length && r < 5; r++)
            if ("hidden" != e.elements[r].type) return !1;
        return !0
    }
}
var MAX_FORM_ELEMENTS_HARD = 500,
    MAX_FORM_ELEMENTS_SOFT = 100;

function LP_exceedFormElementsThreshold(e, r) {
    if (!e || !r) return !0;
    var t = MAX_FORM_ELEMENTS_HARD,
        o = MAX_FORM_ELEMENTS_SOFT,
        n = r.elements,
        f = n.length;
    if (t < f) return verbose_log("EFET: hard threshold exceed"), !0;
    if (f < o) return !1;
    var a = 0,
        s;
    for (s = 0; s < f; s++)
        if (n[s] && n[s] && !n[s].disabled && "FIELDSET" != n[s].tagName && "input" == n[s].tagName) {
            var l = n[s].type;
            "text" != l && "passwd" != l || a++
        } return o < a && (verbose_log("EFET: soft threshold exceed"), !0)
}
//# sourceMappingURL=sourcemaps/parserthresholds_cs.js.map