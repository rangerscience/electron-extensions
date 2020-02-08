function get_SAED_username_password_fields(e, n) {
    var s;
    if (!e) return [];
    n = n || {};
    var a = [],
        l = getBG(),
        r = null,
        t = null,
        f = !1;
    if (!e.save_all || !e.fields || 0 === e.fields.length) return [getusernamefromacct(e), getpasswordfromacct(e)];
    var i = 0,
        d = 1,
        E = 2,
        _ = 3,
        p = 4,
        o = 5,
        u = 6,
        R = 7,
        m = 8,
        O = 9,
        S = 10,
        C = 11,
        g = 0,
        c = 1,
        P = [
            [50, 50],
            [-50, -50],
            [-5, 25],
            [5, -25],
            [10, -10],
            [-5, 10],
            [5, -10],
            [-30, -30],
            [7, 7],
            [1, -10],
            [-20, -20],
            [-20, -20]
        ],
        U = null,
        v = null,
        x = new RegExp(get_ff_translation("ff_username_regexp")),
        T = new RegExp(get_ff_translation("ff_password_regexp")),
        w = new RegExp(get_ff_translation("ff_email_regexp")),
        h = new RegExp(get_ff_translation("ff_captcha_regexp")),
        A = new RegExp(get_ff_translation("ff_combineddummy_regexp")),
        y = new RegExp(get_ff_translation("ff_search_regexp")),
        I = [],
        M, N = e.fields.length;
    for (M = 0; M < N; M++) I[M] = {
        USCORE: 0,
        PSCORE: 0
    };
    for (M = 0; M < N; M++) {
        var Y = e.fields[M].type,
            D = e.fields[M].value,
            H = e.fields[M].name;
        null !== D && "" !== D || (j(sprintf("[%d] %s VALUE:EMPTY", M, e.fields[M].name)), I[M].USCORE += P[1][0], I[M].PSCORE += P[1][1]), x.exec(H) && (j(sprintf("[%d] %s NAME:USERNAME", M, e.fields[M].name)), I[M].USCORE += P[4][0], I[M].PSCORE += P[4][1]), T.exec(H) && (j(sprintf("[%d] %s NAME:PASSWORD", M, e.fields[M].name)), I[M].USCORE += P[5][0], I[M].PSCORE += P[5][1]), w.exec(H) && (j(sprintf("[%d] %s NAME:EMAIL", M, e.fields[M].name)), I[M].USCORE += P[6][0], I[M].PSCORE += P[6][1]), (h.exec(H) || A.exec(H) || y.exec(H)) && (j(sprintf("[%d] %s NAME:IGNORE", M, e.fields[M].name)), I[M].USCORE += P[7][0], I[M].PSCORE += P[7][1]), "password" == Y ? (j(sprintf("[%d] %s TYPE:PW_TYPE", M, e.fields[M].name)), null === t && (I[M].PSCORE += P[8][1], t = M), I[M].USCORE += P[2][0], I[M].PSCORE += P[2][1]) : lp_in_array(Y, ["text", "tel", "email", "url"]) ? (j(sprintf("[%d] %s TYPE:TEXT_TYPE", M, e.fields[M].name)), null === r && (I[M].USCORE += P[8][0], r = M), I[M].USCORE += P[3][0], I[M].PSCORE += P[3][1]) : lp_in_array(Y, ["number"]) ? (j(sprintf("[%d] %s TYPE:HTML5TEXTISH", M, e.fields[M].name)), I[M].USCORE += P[9][0], I[M].PSCORE += P[9][1]) : lp_in_array(Y, ["date", "month", "color", "datetime", "search", "range", "time", "datetime-local", "week"]) ? (j(sprintf("[%d] %s TYPE:HTML5NONTEXTISH", M, e.fields[M].name)), I[M].USCORE += P[S][0], I[M].PSCORE += P[S][1]) : lp_in_array(Y, ["reset", "button", "image", "file", "submit"]) && (j(sprintf("[%d] %s TYPE:HTML4NONTEXTISH", M, e.fields[M].name)), I[M].USCORE += P[C][0], I[M].PSCORE += P[C][1]), "j_username" === H ? U = M : "j_password" === H && "password" == Y && (v = M)
    }
    null !== U && null !== v && (I[U].USCORE += P[0][0], I[v].PSCORE += P[0][1]);
    var L = 0,
        k = -1 / 0,
        b = 0,
        X = -1 / 0;
    for (M = 0; M < N; M++) j(sprintf("FIELD %d name=%s U=%d/P=%d", M, e.fields[M].name, I[M].USCORE, I[M].PSCORE)), I[M].USCORE > k && (k = I[M].USCORE, L = M), I[M].PSCORE > X && (X = I[M].PSCORE, b = M);
    L === b && 1 < N && j("EDGE CASE TODO"), a = [];
    var G = "";
    return null === (G = is_encrypted_field(e.fields[L].type) ? l.lpmdec_acct(e.fields[L].value, !0, e, l.g_shares) : e.fields[L].value) && (G = ""), j(sprintf("username: guessed %s/%s", e.fields[L].name, G)), a.push(G), null === (G = is_encrypted_field(e.fields[b].type) ? l.lpmdec_acct(e.fields[b].value, !0, e, l.g_shares) : e.fields[b].value) && (G = ""), j(sprintf("password: guessed %s/%s", e.fields[b].name, g_show_pw_in_logs ? G : "<REDACTED>")), a.push(G), a;

    function j(e) {
        f && console_log(e)
    }
}

function value_is_masked(e, n) {
    if (!e || "string" != typeof e) return !1;
    var s = encodeURIComponent(e);
    return 0 <= e.indexOf("***") || 0 <= s.indexOf("%E2%80%A2%E2%80%A2%E2%80%A2")
}

function formdata_has_masked_values(e) {
    if (!e) return !1;
    for (var n = void 0 !== e ? e.split("\n") : new Array, s = 0; s < n.length; s++) {
        var a, l = n[s].split("\t");
        if (4 == l.length || 5 == l.length) {
            var r = decodeURIComponent(l[1]),
                t = decodeURIComponent(l[2]),
                f = decodeURIComponent(l[4]);
            if (value_is_masked(t) && "notseen" != f) return console_warn("detected masked field value: " + t), !0
        }
    }
    return !1
}
//# sourceMappingURL=sourcemaps/heuristics_bg.js.map