/*!
 * Copyright (c) 2016-Present Gmelius Ltd. All Rights Reserved.
 * ===================================================================================================================
 * 
 * Email ............ hello@gmelius.com
 * Website .......... https://gmelius.com
 * About ............ https://gmelius.com/about
 * Privacy Policy ... https://gmelius.com/legal/privacy
 * 
 * Gmelius customizes the look and feel of your inbox, protects your privacy and boosts your email productivity.
 * 
 * Gmelius is a company based in Geneva, Switzerland. Founded in 2016
 * 
 * Gmelius is a company based in Geneva, Switzerland. Founded in 2016
 * Gmelius is used daily by hundreds of thousands of users worldwide
 * 
 * == Press about Gmelius
 * TechCrunch ... https://techcrunch.com/2012/04/23/gmelius-promises-to-improve-the-look-and-feel-of-your-gmail-inbox/
 * Lifehacker ... http://lifehacker.com/gmelius-adds-tons-of-scheduling-snoozing-tweaking-an-1782183096
 * PC World ..... http://www.pcworld.com/article/261155/chrome_firefox_extension_gmelius_makes_gmail_more_readable.html
 * CNET ......... http://www.cnet.com/how-to/clean-up-the-look-of-gmail-with-gmelius/
 * 
 * == Chrome Webstore reviews ***** 5-star reputation
 * https://chrome.google.com/webstore/detail/gmelius-for-gmail/dheionainndbbpoacpnopgmnihkcmnkl/reviews
 * 
 * ============================================ NOTA BENE FOR REVIEWERS ==============================================
 * 
 * INBOX SDK (https://inboxsdk.com)
 * 
 * Gmelius releases new features to users on a weekly basis. Users love our fast updates and quick response to bugs.
 * In order to accomplish this we use the popular InboxSDK library (www.inboxsdk.com). It is used by
 * several large organizations:
 * 
 *   Dropbox ... https://chrome.google.com/webstore/detail/dropbox-for-gmail-beta/dpdmhfocilnekecfjgimjdeckachfbec
 *   HubSpot ... https://chrome.google.com/webstore/detail/hubspot-sales/oiiaigjnkhngdbnoookogelabohpglmd
 *   Stripe .... https://chrome.google.com/webstore/detail/stripe-for-gmail/dhnddbohjigcdbcfjdngilgkdcbjjhna
 *   Giphy ..... https://chrome.google.com/webstore/detail/giphy-for-gmail/andgibkjiikabclfdkecpmdkfanpdapf
 *   Clearbit .. https://chrome.google.com/webstore/detail/clearbit-connect-supercha/pmnhcgfcafcnkbengdcanjablaabjplo
 *   Streak .... https://chrome.google.com/webstore/detail/streak-crm-for-gmail/pnnfemgpilpdaojpnkjdgfgbnnjojfik
 * 
 * The use of the library is similar to using other popular JavaScript libraries like jQuery and Underscore.
 * 
 * The library allows us to load our application code from our server providing our users with fast updates
 * and the ability to quickly respond to bugs. In case of questions, please contact hello@gmelius.com. Thanks.
 * 
 * ===================================================================================================================
 */
! function(t) {
    function n(r) {
        if (e[r]) return e[r].exports;
        var o = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    var e = {};
    n.m = t, n.c = e, n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n)
    }, n.p = "", n(n.s = 306)
}({
    1: function(t, n, e) {
        var r = e(34)("wks"),
            o = e(29),
            i = e(2).Symbol,
            u = "function" == typeof i;
        (t.exports = function(t) {
            return r[t] || (r[t] = u && i[t] || (u ? i : o)("Symbol." + t))
        }).store = r
    },
    10: function(t, n) {
        t.exports = function(t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    },
    107: function(t, n, e) {
        var r = e(4),
            o = r.JSON || (r.JSON = {
                stringify: JSON.stringify
            });
        t.exports = function(t) {
            return o.stringify.apply(o, arguments)
        }
    },
    11: function(t, n, e) {
        var r = e(2),
            o = e(4),
            i = e(14),
            u = e(5),
            c = function(t, n, e) {
                var a, f, s, l = t & c.F,
                    p = t & c.G,
                    v = t & c.S,
                    y = t & c.P,
                    d = t & c.B,
                    h = t & c.W,
                    x = p ? o : o[n] || (o[n] = {}),
                    g = x.prototype,
                    m = p ? r : v ? r[n] : (r[n] || {}).prototype;
                p && (e = n);
                for (a in e)(f = !l && m && void 0 !== m[a]) && a in x || (s = f ? m[a] : e[a], x[a] = p && "function" != typeof m[a] ? e[a] : d && f ? i(s, r) : h && m[a] == s ? function(t) {
                    var n = function(n, e, r) {
                        if (this instanceof t) {
                            switch (arguments.length) {
                                case 0:
                                    return new t;
                                case 1:
                                    return new t(n);
                                case 2:
                                    return new t(n, e)
                            }
                            return new t(n, e, r)
                        }
                        return t.apply(this, arguments)
                    };
                    return n.prototype = t.prototype, n
                }(s) : y && "function" == typeof s ? i(Function.call, s) : s, y && ((x.virtual || (x.virtual = {}))[a] = s, t & c.R && g && !g[a] && u(g, a, s)))
            };
        c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c
    },
    12: function(t, n) {
        var e = {}.hasOwnProperty;
        t.exports = function(t, n) {
            return e.call(t, n)
        }
    },
    13: function(t, n) {
        t.exports = {}
    },
    14: function(t, n, e) {
        var r = e(19);
        t.exports = function(t, n, e) {
            if (r(t), void 0 === n) return t;
            switch (e) {
                case 1:
                    return function(e) {
                        return t.call(n, e)
                    };
                case 2:
                    return function(e, r) {
                        return t.call(n, e, r)
                    };
                case 3:
                    return function(e, r, o) {
                        return t.call(n, e, r, o)
                    }
            }
            return function() {
                return t.apply(n, arguments)
            }
        }
    },
    15: function(t, n, e) {
        var r = e(47),
            o = e(25);
        t.exports = function(t) {
            return r(o(t))
        }
    },
    169: function(t, n, e) {
        t.exports = {
            default: e(311),
            __esModule: !0
        }
    },
    17: function(t, n) {
        var e = {}.toString;
        t.exports = function(t) {
            return e.call(t).slice(8, -1)
        }
    },
    19: function(t, n) {
        t.exports = function(t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t
        }
    },
    2: function(t, n) {
        var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = e)
    },
    20: function(t, n) {
        t.exports = function(t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    },
    21: function(t, n, e) {
        var r = e(9).f,
            o = e(12),
            i = e(1)("toStringTag");
        t.exports = function(t, n, e) {
            t && !o(t = e ? t : t.prototype, i) && r(t, i, {
                configurable: !0,
                value: n
            })
        }
    },
    24: function(t, n) {
        var e = Math.ceil,
            r = Math.floor;
        t.exports = function(t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? r : e)(t)
        }
    },
    25: function(t, n) {
        t.exports = function(t) {
            if (void 0 == t) throw TypeError("Can't call method on  " + t);
            return t
        }
    },
    26: function(t, n, e) {
        var r = e(34)("keys"),
            o = e(29);
        t.exports = function(t) {
            return r[t] || (r[t] = o(t))
        }
    },
    27: function(t, n, e) {
        var r = e(10),
            o = e(2).document,
            i = r(o) && r(o.createElement);
        t.exports = function(t) {
            return i ? o.createElement(t) : {}
        }
    },
    28: function(t, n) {
        t.exports = function(t, n) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: n
            }
        }
    },
    29: function(t, n) {
        var e = 0,
            r = Math.random();
        t.exports = function(t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++e + r).toString(36))
        }
    },
    306: function(t, n, e) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t) {
            var n = window.localStorage.getItem("gmelius:users"),
                e = JSON.parse(window.localStorage.getItem("gmelius:users")) || [];
            e.push(n);
            var r = -1,
                o = !0,
                f = !1,
                s = void 0;
            try {
                for (var l, p = (0, c.default)(e.entries()); !(o = (l = p.next()).done); o = !0) {
                    var v = (0, u.default)(l.value, 2),
                        y = v[0];
                    (_ = v[1]).email === n.email && y !== e.length - 1 && (r = y)
                }
            } catch (t) {
                f = !0, s = t
            } finally {
                try {
                    !o && p.return && p.return()
                } finally {
                    if (f) throw s
                }
            }
            r > -1 && e.splice(r, 1);
            var d = !0,
                h = !1,
                x = void 0;
            try {
                for (var g, m = (0, c.default)(e.entries()); !(d = (g = m.next()).done); d = !0) {
                    var w = (0, u.default)(g.value, 2),
                        _ = (w[0], w[1]),
                        S = {};
                    _.email === a && (_.updated = Date.now()), S["auth:" + _.email] = (0, i.default)(_), chrome.storage.local.set(S, function() {})
                }
            } catch (t) {
                h = !0, x = t
            } finally {
                try {
                    !d && m.return && m.return()
                } finally {
                    if (h) throw x
                }
            }
            "true" !== t ? window.close() : window.location = "https://gmelius.com?ref=fp&email=" + n.email
        }
        var i = r(e(78)),
            u = r(e(307)),
            c = r(e(169)),
            a = new URLSearchParams(window.location.search).get("email"),
            f = setInterval(function() {
                document.getElementById("donechecker") && (o(document.getElementById("donechecker").getAttribute("data-created")), clearInterval(f))
            }, 100);
        setTimeout(function() {
            window.close()
        }, 1e4)
    },
    307: function(t, n, e) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        n.__esModule = !0;
        var o = r(e(308)),
            i = r(e(169));
        n.default = function() {
            return function(t, n) {
                if (Array.isArray(t)) return t;
                if ((0, o.default)(Object(t))) return function(t, n) {
                    var e = [],
                        r = !0,
                        o = !1,
                        u = void 0;
                    try {
                        for (var c, a = (0, i.default)(t); !(r = (c = a.next()).done) && (e.push(c.value), !n || e.length !== n); r = !0);
                    } catch (t) {
                        o = !0, u = t
                    } finally {
                        try {
                            !r && a.return && a.return()
                        } finally {
                            if (o) throw u
                        }
                    }
                    return e
                }(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }()
    },
    308: function(t, n, e) {
        t.exports = {
            default: e(309),
            __esModule: !0
        }
    },
    309: function(t, n, e) {
        e(41), e(38), t.exports = e(310)
    },
    310: function(t, n, e) {
        var r = e(36),
            o = e(1)("iterator"),
            i = e(13);
        t.exports = e(4).isIterable = function(t) {
            var n = Object(t);
            return void 0 !== n[o] || "@@iterator" in n || i.hasOwnProperty(r(n))
        }
    },
    311: function(t, n, e) {
        e(41), e(38), t.exports = e(312)
    },
    312: function(t, n, e) {
        var r = e(6),
            o = e(72);
        t.exports = e(4).getIterator = function(t) {
            var n = o(t);
            if ("function" != typeof n) throw TypeError(t + " is not iterable!");
            return r(n.call(t))
        }
    },
    32: function(t, n, e) {
        "use strict";
        var r = e(33),
            o = e(11),
            i = e(57),
            u = e(5),
            c = e(12),
            a = e(13),
            f = e(64),
            s = e(21),
            l = e(68),
            p = e(1)("iterator"),
            v = !([].keys && "next" in [].keys()),
            y = function() {
                return this
            };
        t.exports = function(t, n, e, d, h, x, g) {
            f(e, n, d);
            var m, w, _, S = function(t) {
                    if (!v && t in j) return j[t];
                    switch (t) {
                        case "keys":
                        case "values":
                            return function() {
                                return new e(this, t)
                            }
                    }
                    return function() {
                        return new e(this, t)
                    }
                },
                b = n + " Iterator",
                O = "values" == h,
                L = !1,
                j = t.prototype,
                M = j[p] || j["@@iterator"] || h && j[h],
                T = M || S(h),
                P = h ? O ? S("entries") : T : void 0,
                E = "Array" == n ? j.entries || M : M;
            if (E && (_ = l(E.call(new t))) !== Object.prototype && _.next && (s(_, b, !0), r || c(_, p) || u(_, p, y)), O && M && "values" !== M.name && (L = !0, T = function() {
                    return M.call(this)
                }), r && !g || !v && !L && j[p] || u(j, p, T), a[n] = T, a[b] = y, h)
                if (m = {
                        values: O ? T : S("values"),
                        keys: x ? T : S("keys"),
                        entries: P
                    }, g)
                    for (w in m) w in j || i(j, w, m[w]);
                else o(o.P + o.F * (v || L), n, m);
            return m
        }
    },
    33: function(t, n) {
        t.exports = !0
    },
    34: function(t, n, e) {
        var r = e(2),
            o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
        t.exports = function(t) {
            return o[t] || (o[t] = {})
        }
    },
    35: function(t, n) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    },
    36: function(t, n, e) {
        var r = e(17),
            o = e(1)("toStringTag"),
            i = "Arguments" == r(function() {
                return arguments
            }());
        t.exports = function(t) {
            var n, e, u;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(e = function(t, n) {
                try {
                    return t[n]
                } catch (t) {}
            }(n = Object(t), o)) ? e : i ? r(n) : "Object" == (u = r(n)) && "function" == typeof n.callee ? "Arguments" : u
        }
    },
    38: function(t, n, e) {
        "use strict";
        var r = e(63)(!0);
        e(32)(String, "String", function(t) {
            this._t = String(t), this._i = 0
        }, function() {
            var t, n = this._t,
                e = this._i;
            return e >= n.length ? {
                value: void 0,
                done: !0
            } : (t = r(n, e), this._i += t.length, {
                value: t,
                done: !1
            })
        })
    },
    39: function(t, n, e) {
        var r = e(58),
            o = e(35);
        t.exports = Object.keys || function(t) {
            return r(t, o)
        }
    },
    4: function(t, n) {
        var e = t.exports = {
            version: "2.5.1"
        };
        "number" == typeof __e && (__e = e)
    },
    40: function(t, n, e) {
        var r = e(24),
            o = Math.min;
        t.exports = function(t) {
            return t > 0 ? o(r(t), 9007199254740991) : 0
        }
    },
    41: function(t, n, e) {
        e(69);
        for (var r = e(2), o = e(5), i = e(13), u = e(1)("toStringTag"), c = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), a = 0; a < c.length; a++) {
            var f = c[a],
                s = r[f],
                l = s && s.prototype;
            l && !l[u] && o(l, u, f), i[f] = i.Array
        }
    },
    45: function(t, n, e) {
        var r = e(10);
        t.exports = function(t, n) {
            if (!r(t)) return t;
            var e, o;
            if (n && "function" == typeof(e = t.toString) && !r(o = e.call(t))) return o;
            if ("function" == typeof(e = t.valueOf) && !r(o = e.call(t))) return o;
            if (!n && "function" == typeof(e = t.toString) && !r(o = e.call(t))) return o;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    46: function(t, n, e) {
        var r = e(6),
            o = e(65),
            i = e(35),
            u = e(26)("IE_PROTO"),
            c = function() {},
            a = function() {
                var t, n = e(27)("iframe"),
                    r = i.length;
                for (n.style.display = "none", e(48).appendChild(n), n.src = "javascript:", (t = n.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), a = t.F; r--;) delete a.prototype[i[r]];
                return a()
            };
        t.exports = Object.create || function(t, n) {
            var e;
            return null !== t ? (c.prototype = r(t), e = new c, c.prototype = null, e[u] = t) : e = a(), void 0 === n ? e : o(e, n)
        }
    },
    47: function(t, n, e) {
        var r = e(17);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
            return "String" == r(t) ? t.split("") : Object(t)
        }
    },
    48: function(t, n, e) {
        var r = e(2).document;
        t.exports = r && r.documentElement
    },
    49: function(t, n, e) {
        var r = e(25);
        t.exports = function(t) {
            return Object(r(t))
        }
    },
    5: function(t, n, e) {
        var r = e(9),
            o = e(28);
        t.exports = e(7) ? function(t, n, e) {
            return r.f(t, n, o(1, e))
        } : function(t, n, e) {
            return t[n] = e, t
        }
    },
    56: function(t, n, e) {
        t.exports = !e(7) && !e(20)(function() {
            return 7 != Object.defineProperty(e(27)("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    },
    57: function(t, n, e) {
        t.exports = e(5)
    },
    58: function(t, n, e) {
        var r = e(12),
            o = e(15),
            i = e(66)(!1),
            u = e(26)("IE_PROTO");
        t.exports = function(t, n) {
            var e, c = o(t),
                a = 0,
                f = [];
            for (e in c) e != u && r(c, e) && f.push(e);
            for (; n.length > a;) r(c, e = n[a++]) && (~i(f, e) || f.push(e));
            return f
        }
    },
    59: function(t, n) {
        t.exports = function(t, n) {
            return {
                value: n,
                done: !!t
            }
        }
    },
    6: function(t, n, e) {
        var r = e(10);
        t.exports = function(t) {
            if (!r(t)) throw TypeError(t + " is not an object!");
            return t
        }
    },
    63: function(t, n, e) {
        var r = e(24),
            o = e(25);
        t.exports = function(t) {
            return function(n, e) {
                var i, u, c = String(o(n)),
                    a = r(e),
                    f = c.length;
                return a < 0 || a >= f ? t ? "" : void 0 : (i = c.charCodeAt(a)) < 55296 || i > 56319 || a + 1 === f || (u = c.charCodeAt(a + 1)) < 56320 || u > 57343 ? t ? c.charAt(a) : i : t ? c.slice(a, a + 2) : u - 56320 + (i - 55296 << 10) + 65536
            }
        }
    },
    64: function(t, n, e) {
        "use strict";
        var r = e(46),
            o = e(28),
            i = e(21),
            u = {};
        e(5)(u, e(1)("iterator"), function() {
            return this
        }), t.exports = function(t, n, e) {
            t.prototype = r(u, {
                next: o(1, e)
            }), i(t, n + " Iterator")
        }
    },
    65: function(t, n, e) {
        var r = e(9),
            o = e(6),
            i = e(39);
        t.exports = e(7) ? Object.defineProperties : function(t, n) {
            o(t);
            for (var e, u = i(n), c = u.length, a = 0; c > a;) r.f(t, e = u[a++], n[e]);
            return t
        }
    },
    66: function(t, n, e) {
        var r = e(15),
            o = e(40),
            i = e(67);
        t.exports = function(t) {
            return function(n, e, u) {
                var c, a = r(n),
                    f = o(a.length),
                    s = i(u, f);
                if (t && e != e) {
                    for (; f > s;)
                        if ((c = a[s++]) != c) return !0
                } else
                    for (; f > s; s++)
                        if ((t || s in a) && a[s] === e) return t || s || 0;
                return !t && -1
            }
        }
    },
    67: function(t, n, e) {
        var r = e(24),
            o = Math.max,
            i = Math.min;
        t.exports = function(t, n) {
            return (t = r(t)) < 0 ? o(t + n, 0) : i(t, n)
        }
    },
    68: function(t, n, e) {
        var r = e(12),
            o = e(49),
            i = e(26)("IE_PROTO"),
            u = Object.prototype;
        t.exports = Object.getPrototypeOf || function(t) {
            return t = o(t), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? u : null
        }
    },
    69: function(t, n, e) {
        "use strict";
        var r = e(70),
            o = e(59),
            i = e(13),
            u = e(15);
        t.exports = e(32)(Array, "Array", function(t, n) {
            this._t = u(t), this._i = 0, this._k = n
        }, function() {
            var t = this._t,
                n = this._k,
                e = this._i++;
            return !t || e >= t.length ? (this._t = void 0, o(1)) : "keys" == n ? o(0, e) : "values" == n ? o(0, t[e]) : o(0, [e, t[e]])
        }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
    },
    7: function(t, n, e) {
        t.exports = !e(20)(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    },
    70: function(t, n) {
        t.exports = function() {}
    },
    72: function(t, n, e) {
        var r = e(36),
            o = e(1)("iterator"),
            i = e(13);
        t.exports = e(4).getIteratorMethod = function(t) {
            if (void 0 != t) return t[o] || t["@@iterator"] || i[r(t)]
        }
    },
    78: function(t, n, e) {
        t.exports = {
            default: e(107),
            __esModule: !0
        }
    },
    9: function(t, n, e) {
        var r = e(6),
            o = e(56),
            i = e(45),
            u = Object.defineProperty;
        n.f = e(7) ? Object.defineProperty : function(t, n, e) {
            if (r(t), n = i(n, !0), r(e), o) try {
                return u(t, n, e)
            } catch (t) {}
            if ("get" in e || "set" in e) throw TypeError("Accessors not supported!");
            return "value" in e && (t[n] = e.value), t
        }
    }
});
//# sourceMappingURL=https://localhost:9000/sourcemap/../sourcemap/authentication.chrome.js.map