var lp_global_sprintf;
! function(e) {
    var x = {
        not_string: /[^s]/,
        number: /[dief]/,
        text: /^[^\x25]+/,
        modulo: /^\x25{2}/,
        placeholder: /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fiosuxX])/,
        key: /^([a-z_][a-z_\d]*)/i,
        key_access: /^\.([a-z_][a-z_\d]*)/i,
        index_access: /^\[(\d+)\]/,
        sign: /^[\+\-]/
    };

    function _() {
        var e = arguments[0],
            n = _.cache;
        return n[e] && n.hasOwnProperty(e) || (n[e] = _.parse(e)), _.format.call(null, n[e], arguments)
    }
    _.format = function(e, n) {
        var t = 1,
            r = e.length,
            i = "",
            o, s = [],
            f, a, l, p, c, d, u = !0,
            g = "";
        for (f = 0; f < r; f++)
            if ("string" === (i = h(e[f]))) s[s.length] = e[f];
            else if ("array" === i) {
            if ((l = e[f])[2])
                for (o = n[t], a = 0; a < l[2].length; a++) {
                    if (!o.hasOwnProperty(l[2][a])) throw new Error(_("[sprintf] property '%s' does not exist", l[2][a]));
                    o = o[l[2][a]]
                } else o = l[1] ? n[l[1]] : n[t++];
            if ("function" == h(o) && (o = o()), x.not_string.test(l[8]) && "number" != h(o) && isNaN(o)) throw new TypeError(_("[sprintf] expecting number but found %s", h(o)));
            switch (x.number.test(l[8]) && (u = 0 <= o), l[8]) {
                case "b":
                    o = o.toString(2);
                    break;
                case "c":
                    o = String.fromCharCode(o);
                    break;
                case "d":
                case "i":
                    o = parseInt(o, 10);
                    break;
                case "e":
                    o = l[7] ? o.toExponential(l[7]) : o.toExponential();
                    break;
                case "f":
                    o = l[7] ? parseFloat(o).toFixed(l[7]) : parseFloat(o);
                    break;
                case "o":
                    o = o.toString(8);
                    break;
                case "s":
                    o = (o = String(o)) && l[7] ? o.substring(0, l[7]) : o;
                    break;
                case "u":
                    o >>>= 0;
                    break;
                case "x":
                    o = o.toString(16);
                    break;
                case "X":
                    o = o.toString(16).toUpperCase()
            }!x.number.test(l[8]) || u && !l[3] ? g = "" : (g = u ? "+" : "-", o = o.toString().replace(x.sign, "")), c = l[4] ? "0" === l[4] ? "0" : l[4].charAt(1) : " ", d = l[6] - (g + o).length, p = l[6] && 0 < d ? b(c, d) : "", s[s.length] = l[5] ? g + o + p : "0" === c ? g + p + o : p + g + o
        }
        return s.join("")
    }, _.cache = {}, _.parse = function(e) {
        for (var n = e, t = [], r = [], i = 0; n;) {
            if (null !== (t = x.text.exec(n))) r[r.length] = t[0];
            else if (null !== (t = x.modulo.exec(n))) r[r.length] = "%";
            else {
                if (null === (t = x.placeholder.exec(n))) throw new SyntaxError("[sprintf] unexpected placeholder");
                if (t[2]) {
                    i |= 1;
                    var o = [],
                        s = t[2],
                        f = [];
                    if (null === (f = x.key.exec(s))) throw new SyntaxError("[sprintf] failed to parse named argument key");
                    for (o[o.length] = f[1];
                        "" !== (s = s.substring(f[0].length));)
                        if (null !== (f = x.key_access.exec(s))) o[o.length] = f[1];
                        else {
                            if (null === (f = x.index_access.exec(s))) throw new SyntaxError("[sprintf] failed to parse named argument key");
                            o[o.length] = f[1]
                        } t[2] = o
                } else i |= 2;
                if (3 === i) throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
                r[r.length] = t
            }
            n = n.substring(t[0].length)
        }
        return r
    };
    var n = function(e, n, t) {
        return (t = (n || []).slice(0)).splice(0, 0, e), _.apply(null, t)
    };

    function h(e) {
        return Object.prototype.toString.call(e).slice(8, -1).toLowerCase()
    }

    function b(e, n) {
        return Array(n + 1).join(e)
    }
    "undefined" != typeof g_isie && g_isie ? (init_LPfn(), "undefined" != typeof LPfn && (LPfn.sprintf = _, LPfn.vsprintf = n)) : (e.sprintf = _, e.vsprintf = n, "function" == typeof define && define.amd && define(function() {
        return {
            sprintf: _,
            vsprintf: n
        }
    })), ("undefined" != typeof LP || "undefined" != typeof is_firefox && is_firefox() || "undefined" != typeof is_firefox_webext && is_firefox_webext()) && (lp_global_sprintf = _), "undefined" != typeof g_isie && g_isie && (lp_global_sprintf = _)
}("undefined" == typeof window ? this : window), ("undefined" != typeof is_firefox && is_firefox() || "undefined" != typeof is_firefox_webext && is_firefox_webext()) && (sprintf = lp_global_sprintf);
//# sourceMappingURL=sourcemaps/sprintf.js.map