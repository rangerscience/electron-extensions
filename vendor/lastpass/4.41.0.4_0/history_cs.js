function write_to_history(e, r, o, i) {
    if (!(e = e || LP_derive_doc())) return !1;
    if (!o) return console_log("empty history message"), !1;
    var _;
    if (is_user_debug_enabled()) {
        null == r && (r = "");
        var t = {
            cmd: "debug_checkpoint",
            docstate: get_docstate(e),
            url: punycode.URLToASCII(get_doc_location_href(e)),
            msg: LPJSON.stringify(o)
        };
        if (t.history_cmd = r, i)
            for (_ in i) i.hasOwnProperty(_) && (t[_] = i[_]);
        sendBG(t), verbose_log("DEBUG:[" + r + "] " + o)
    }
    return !0
}

function write_error_to_history(e, r, o) {
    if (!(e = e || LP_derive_doc())) return !1;
    if (!r || !o || "object" != typeof o) return console_log("bad Error object"), !1;
    var i = lp_deepCopy(o);
    return is_user_debug_enabled() && write_to_history(e, "errtrapCS", r, i), !0
}

function decision_log(e, r, o) {
    if (!(e = e || LP_derive_doc())) return !1;
    var i = "decision";
    return !is_user_debug_enabled() || write_to_history(e, i, r, o)
}

function is_user_debug_enabled() {
    return g_isdebug && !g_isie && !g_isfirefox
}

function info_log(e, r, o) {
    if (!(e = e || LP_derive_doc())) return !1;
    var i = "info ";
    return !is_user_debug_enabled() || write_to_history(e, i, r, o)
}
//# sourceMappingURL=sourcemaps/history_cs.js.map