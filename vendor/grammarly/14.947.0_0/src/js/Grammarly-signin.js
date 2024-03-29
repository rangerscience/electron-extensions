/*! For license information please see Grammarly-signin.js.LICENSE */ ! function(t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var o = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) n.d(r, o, function(e) {
                return t[e]
            }.bind(null, o));
        return r
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 736)
}({
    10: function(t, e, n) {
        "use strict";
        n.d(e, "n", (function() {
            return o
        })), n.d(e, "g", (function() {
            return i
        })), n.d(e, "l", (function() {
            return c
        })), n.d(e, "j", (function() {
            return s
        })), n.d(e, "m", (function() {
            return a
        })), n.d(e, "k", (function() {
            return u
        })), n.d(e, "o", (function() {
            return l
        })), n.d(e, "i", (function() {
            return f
        })), n.d(e, "b", (function() {
            return h
        })), n.d(e, "h", (function() {
            return d
        })), n.d(e, "c", (function() {
            return p
        })), n.d(e, "f", (function() {
            return g
        })), n.d(e, "a", (function() {
            return b
        })), n.d(e, "d", (function() {
            return m
        })), n.d(e, "e", (function() {
            return v
        }));
        var r = n(17);

        function o() {
            return !!window.__extensionTestsMode
        }

        function i() {
            return r.a().appConfig.extensionId
        }

        function c() {
            return "firefox" === r.a().bundleInfo.browser
        }

        function s() {
            return "chrome" === r.a().bundleInfo.browser
        }

        function a() {
            return "safari" === r.a().bundleInfo.browser
        }

        function u() {
            return "edge" === r.a().bundleInfo.browser
        }

        function l() {
            return r.a().systemInfo.os.isWindows
        }

        function f() {
            return "bg" === r.a().bundleInfo.context
        }

        function h() {
            return r.a().bundleInfo.browser
        }

        function d() {
            return r.a().buildInfo.version
        }

        function p() {
            return r.a().bundleInfo.env
        }

        function g() {
            return r.a().appConfig.url
        }

        function b() {
            return r.a().appConfig.felog.appName
        }

        function m() {
            return r.a().appConfig.gnar.appName
        }

        function v() {
            return r.a().appConfig.url.grammarlyDomain
        }
    },
    103: function(t, e, n) {
        "use strict";

        function r(t) {
            setTimeout((function() {
                throw t
            }), 0)
        }
        n.d(e, "a", (function() {
            return r
        }))
    },
    108: function(t, e, n) {
        "use strict";
        var r = n(85),
            o = n(96),
            i = n(114);

        function c(t) {
            var e = this.__data__ = new r.a(t);
            this.size = e.size
        }
        c.prototype.clear = function() {
            this.__data__ = new r.a, this.size = 0
        }, c.prototype.delete = function(t) {
            var e = this.__data__,
                n = e.delete(t);
            return this.size = e.size, n
        }, c.prototype.get = function(t) {
            return this.__data__.get(t)
        }, c.prototype.has = function(t) {
            return this.__data__.has(t)
        }, c.prototype.set = function(t, e) {
            var n = this.__data__;
            if (n instanceof r.a) {
                var c = n.__data__;
                if (!o.a || c.length < 199) return c.push([t, e]), this.size = ++n.size, this;
                n = this.__data__ = new i.a(c)
            }
            return n.set(t, e), this.size = n.size, this
        }, e.a = c
    },
    109: function(t, e, n) {
        "use strict";
        var r = n(52),
            o = n(46);
        e.a = function(t) {
            return "symbol" == typeof t || Object(o.a)(t) && "[object Symbol]" == Object(r.a)(t)
        }
    },
    11: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return l
        }));
        var r = n(2),
            o = n(94),
            i = n(146),
            c = n(28),
            s = n(137),
            a = n(53),
            u = n(103),
            l = function(t) {
                function e(n, r, o) {
                    var c = t.call(this) || this;
                    switch (c.syncErrorValue = null, c.syncErrorThrown = !1, c.syncErrorThrowable = !1, c.isStopped = !1, arguments.length) {
                        case 0:
                            c.destination = i.a;
                            break;
                        case 1:
                            if (!n) {
                                c.destination = i.a;
                                break
                            }
                            if ("object" == typeof n) {
                                n instanceof e ? (c.syncErrorThrowable = n.syncErrorThrowable, c.destination = n, n.add(c)) : (c.syncErrorThrowable = !0, c.destination = new f(c, n));
                                break
                            }
                            default:
                                c.syncErrorThrowable = !0, c.destination = new f(c, n, r, o)
                    }
                    return c
                }
                return r.a(e, t), e.prototype[s.a] = function() {
                    return this
                }, e.create = function(t, n, r) {
                    var o = new e(t, n, r);
                    return o.syncErrorThrowable = !1, o
                }, e.prototype.next = function(t) {
                    this.isStopped || this._next(t)
                }, e.prototype.error = function(t) {
                    this.isStopped || (this.isStopped = !0, this._error(t))
                }, e.prototype.complete = function() {
                    this.isStopped || (this.isStopped = !0, this._complete())
                }, e.prototype.unsubscribe = function() {
                    this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this))
                }, e.prototype._next = function(t) {
                    this.destination.next(t)
                }, e.prototype._error = function(t) {
                    this.destination.error(t), this.unsubscribe()
                }, e.prototype._complete = function() {
                    this.destination.complete(), this.unsubscribe()
                }, e.prototype._unsubscribeAndRecycle = function() {
                    var t = this._parentOrParents;
                    return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = t, this
                }, e
            }(c.a),
            f = function(t) {
                function e(e, n, r, c) {
                    var s, a = t.call(this) || this;
                    a._parentSubscriber = e;
                    var u = a;
                    return Object(o.a)(n) ? s = n : n && (s = n.next, r = n.error, c = n.complete, n !== i.a && (u = Object.create(n), Object(o.a)(u.unsubscribe) && a.add(u.unsubscribe.bind(u)), u.unsubscribe = a.unsubscribe.bind(a))), a._context = u, a._next = s, a._error = r, a._complete = c, a
                }
                return r.a(e, t), e.prototype.next = function(t) {
                    if (!this.isStopped && this._next) {
                        var e = this._parentSubscriber;
                        a.a.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t)
                    }
                }, e.prototype.error = function(t) {
                    if (!this.isStopped) {
                        var e = this._parentSubscriber,
                            n = a.a.useDeprecatedSynchronousErrorHandling;
                        if (this._error) n && e.syncErrorThrowable ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe()) : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
                        else if (e.syncErrorThrowable) n ? (e.syncErrorValue = t, e.syncErrorThrown = !0) : Object(u.a)(t), this.unsubscribe();
                        else {
                            if (this.unsubscribe(), n) throw t;
                            Object(u.a)(t)
                        }
                    }
                }, e.prototype.complete = function() {
                    var t = this;
                    if (!this.isStopped) {
                        var e = this._parentSubscriber;
                        if (this._complete) {
                            var n = function() {
                                return t._complete.call(t._context)
                            };
                            a.a.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? (this.__tryOrSetError(e, n), this.unsubscribe()) : (this.__tryOrUnsub(n), this.unsubscribe())
                        } else this.unsubscribe()
                    }
                }, e.prototype.__tryOrUnsub = function(t, e) {
                    try {
                        t.call(this._context, e)
                    } catch (t) {
                        if (this.unsubscribe(), a.a.useDeprecatedSynchronousErrorHandling) throw t;
                        Object(u.a)(t)
                    }
                }, e.prototype.__tryOrSetError = function(t, e, n) {
                    if (!a.a.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
                    try {
                        e.call(this._context, n)
                    } catch (e) {
                        return a.a.useDeprecatedSynchronousErrorHandling ? (t.syncErrorValue = e, t.syncErrorThrown = !0, !0) : (Object(u.a)(e), !0)
                    }
                    return !1
                }, e.prototype._unsubscribe = function() {
                    var t = this._parentSubscriber;
                    this._context = null, this._parentSubscriber = null, t.unsubscribe()
                }, e
            }(l)
    },
    114: function(t, e, n) {
        "use strict";
        var r = n(57),
            o = Object(r.a)(Object, "create"),
            i = Object.prototype.hasOwnProperty,
            c = Object.prototype.hasOwnProperty;

        function s(t) {
            var e = -1,
                n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n;) {
                var r = t[e];
                this.set(r[0], r[1])
            }
        }
        s.prototype.clear = function() {
            this.__data__ = o ? o(null) : {}, this.size = 0
        }, s.prototype.delete = function(t) {
            var e = this.has(t) && delete this.__data__[t];
            return this.size -= e ? 1 : 0, e
        }, s.prototype.get = function(t) {
            var e = this.__data__;
            if (o) {
                var n = e[t];
                return "__lodash_hash_undefined__" === n ? void 0 : n
            }
            return i.call(e, t) ? e[t] : void 0
        }, s.prototype.has = function(t) {
            var e = this.__data__;
            return o ? void 0 !== e[t] : c.call(e, t)
        }, s.prototype.set = function(t, e) {
            var n = this.__data__;
            return this.size += this.has(t) ? 0 : 1, n[t] = o && void 0 === e ? "__lodash_hash_undefined__" : e, this
        };
        var a = s,
            u = n(85),
            l = n(96),
            f = function(t, e) {
                var n = t.__data__;
                return function(t) {
                    var e = typeof t;
                    return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
                }(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
            };

        function h(t) {
            var e = -1,
                n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n;) {
                var r = t[e];
                this.set(r[0], r[1])
            }
        }
        h.prototype.clear = function() {
            this.size = 0, this.__data__ = {
                hash: new a,
                map: new(l.a || u.a),
                string: new a
            }
        }, h.prototype.delete = function(t) {
            var e = f(this, t).delete(t);
            return this.size -= e ? 1 : 0, e
        }, h.prototype.get = function(t) {
            return f(this, t).get(t)
        }, h.prototype.has = function(t) {
            return f(this, t).has(t)
        }, h.prototype.set = function(t, e) {
            var n = f(this, t),
                r = n.size;
            return n.set(t, e), this.size += n.size == r ? 0 : 1, this
        }, e.a = h
    },
    117: function(t, e, n) {
        "use strict";
        e.a = function(t) {
            return t
        }
    },
    12: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return r
        }));
        var r, o = n(167),
            i = n(144);
        ! function(t) {
            t.create = function(t) {
                return new o.a(t, () => Object(i.b)().logger.create(t))
            }
        }(r || (r = {}))
    },
    125: function(t, e, n) {
        "use strict";
        e.a = function(t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
        }
    },
    126: function(t, e, n) {
        "use strict";
        var r = /^(?:0|[1-9]\d*)$/;
        e.a = function(t, e) {
            var n = typeof t;
            return !!(e = null == e ? 9007199254740991 : e) && ("number" == n || "symbol" != n && r.test(t)) && t > -1 && t % 1 == 0 && t < e
        }
    },
    128: function(t, e, n) {
        "use strict";
        var r = Object.prototype;
        e.a = function(t) {
            var e = t && t.constructor;
            return t === ("function" == typeof e && e.prototype || r)
        }
    },
    137: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return r
        }));
        var r = "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random()
    },
    138: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return r
        }));
        var r = function() {
            function t(t) {
                return Error.call(this), this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map((function(t, e) {
                    return e + 1 + ") " + t.toString()
                })).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = t, this
            }
            return t.prototype = Object.create(Error.prototype), t
        }()
    },
    14: function(t, e, n) {
        "use strict";
        var r = n(175),
            o = n(11),
            i = n(137),
            c = n(146),
            s = n(97),
            a = n(160),
            u = n(53);
        n.d(e, "a", (function() {
            return l
        }));
        var l = function() {
            function t(t) {
                this._isScalar = !1, t && (this._subscribe = t)
            }
            return t.prototype.lift = function(e) {
                var n = new t;
                return n.source = this, n.operator = e, n
            }, t.prototype.subscribe = function(t, e, n) {
                var r = this.operator,
                    s = function(t, e, n) {
                        if (t) {
                            if (t instanceof o.a) return t;
                            if (t[i.a]) return t[i.a]()
                        }
                        return t || e || n ? new o.a(t, e, n) : new o.a(c.a)
                    }(t, e, n);
                if (r ? s.add(r.call(s, this.source)) : s.add(this.source || u.a.useDeprecatedSynchronousErrorHandling && !s.syncErrorThrowable ? this._subscribe(s) : this._trySubscribe(s)), u.a.useDeprecatedSynchronousErrorHandling && s.syncErrorThrowable && (s.syncErrorThrowable = !1, s.syncErrorThrown)) throw s.syncErrorValue;
                return s
            }, t.prototype._trySubscribe = function(t) {
                try {
                    return this._subscribe(t)
                } catch (e) {
                    u.a.useDeprecatedSynchronousErrorHandling && (t.syncErrorThrown = !0, t.syncErrorValue = e), Object(r.a)(t) ? t.error(e) : console.warn(e)
                }
            }, t.prototype.forEach = function(t, e) {
                var n = this;
                return new(e = f(e))((function(e, r) {
                    var o;
                    o = n.subscribe((function(e) {
                        try {
                            t(e)
                        } catch (t) {
                            r(t), o && o.unsubscribe()
                        }
                    }), r, e)
                }))
            }, t.prototype._subscribe = function(t) {
                var e = this.source;
                return e && e.subscribe(t)
            }, t.prototype[s.a] = function() {
                return this
            }, t.prototype.pipe = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return 0 === t.length ? this : Object(a.b)(t)(this)
            }, t.prototype.toPromise = function(t) {
                var e = this;
                return new(t = f(t))((function(t, n) {
                    var r;
                    e.subscribe((function(t) {
                        return r = t
                    }), (function(t) {
                        return n(t)
                    }), (function() {
                        return t(r)
                    }))
                }))
            }, t.create = function(e) {
                return new t(e)
            }, t
        }();

        function f(t) {
            if (t || (t = u.a.Promise || Promise), !t) throw new Error("no Promise impl found");
            return t
        }
    },
    141: function(t, e, n) {
        "use strict";
        var r = n(27),
            o = n(109),
            i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            c = /^\w*$/;
        e.a = function(t, e) {
            if (Object(r.a)(t)) return !1;
            var n = typeof t;
            return !("number" != n && "symbol" != n && "boolean" != n && null != t && !Object(o.a)(t)) || c.test(t) || !i.test(t) || null != e && t in Object(e)
        }
    },
    142: function(t, e, n) {
        "use strict";
        var r = n(212),
            o = n(256),
            i = n(77);
        e.a = function(t) {
            return Object(i.a)(t) ? Object(r.a)(t) : Object(o.a)(t)
        }
    },
    143: function(t, e, n) {
        "use strict";
        var r = n(108),
            o = n(292),
            i = function(t, e) {
                for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)
                    if (e(t[n], n, t)) return !0;
                return !1
            },
            c = n(278),
            s = function(t, e, n, r, s, a) {
                var u = 1 & n,
                    l = t.length,
                    f = e.length;
                if (l != f && !(u && f > l)) return !1;
                var h = a.get(t);
                if (h && a.get(e)) return h == e;
                var d = -1,
                    p = !0,
                    g = 2 & n ? new o.a : void 0;
                for (a.set(t, e), a.set(e, t); ++d < l;) {
                    var b = t[d],
                        m = e[d];
                    if (r) var v = u ? r(m, b, d, e, t, a) : r(b, m, d, t, e, a);
                    if (void 0 !== v) {
                        if (v) continue;
                        p = !1;
                        break
                    }
                    if (g) {
                        if (!i(e, (function(t, e) {
                                if (!Object(c.a)(g, e) && (b === t || s(b, t, n, r, a))) return g.push(e)
                            }))) {
                            p = !1;
                            break
                        }
                    } else if (b !== m && !s(b, m, n, r, a)) {
                        p = !1;
                        break
                    }
                }
                return a.delete(t), a.delete(e), p
            },
            a = n(59),
            u = n(152),
            l = n(84),
            f = function(t) {
                var e = -1,
                    n = Array(t.size);
                return t.forEach((function(t, r) {
                    n[++e] = [r, t]
                })), n
            },
            h = function(t) {
                var e = -1,
                    n = Array(t.size);
                return t.forEach((function(t) {
                    n[++e] = t
                })), n
            },
            d = a.a ? a.a.prototype : void 0,
            p = d ? d.valueOf : void 0,
            g = function(t, e, n, r, o, i, c) {
                switch (n) {
                    case "[object DataView]":
                        if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                        t = t.buffer, e = e.buffer;
                    case "[object ArrayBuffer]":
                        return !(t.byteLength != e.byteLength || !i(new u.a(t), new u.a(e)));
                    case "[object Boolean]":
                    case "[object Date]":
                    case "[object Number]":
                        return Object(l.a)(+t, +e);
                    case "[object Error]":
                        return t.name == e.name && t.message == e.message;
                    case "[object RegExp]":
                    case "[object String]":
                        return t == e + "";
                    case "[object Map]":
                        var a = f;
                    case "[object Set]":
                        var d = 1 & r;
                        if (a || (a = h), t.size != e.size && !d) return !1;
                        var g = c.get(t);
                        if (g) return g == e;
                        r |= 2, c.set(t, e);
                        var b = s(a(t), a(e), r, o, i, c);
                        return c.delete(t), b;
                    case "[object Symbol]":
                        if (p) return p.call(t) == p.call(e)
                }
                return !1
            },
            b = n(271),
            m = n(27),
            v = Object.prototype.propertyIsEnumerable,
            y = Object.getOwnPropertySymbols,
            _ = y ? function(t) {
                return null == t ? [] : (t = Object(t), function(t, e) {
                    for (var n = -1, r = null == t ? 0 : t.length, o = 0, i = []; ++n < r;) {
                        var c = t[n];
                        e(c, n, t) && (i[o++] = c)
                    }
                    return i
                }(y(t), (function(e) {
                    return v.call(t, e)
                })))
            } : function() {
                return []
            },
            w = n(142),
            j = function(t) {
                return function(t, e, n) {
                    var r = e(t);
                    return Object(m.a)(t) ? r : Object(b.a)(r, n(t))
                }(t, w.a, _)
            },
            O = Object.prototype.hasOwnProperty,
            A = n(202),
            x = n(82),
            E = n(91),
            C = "[object Arguments]",
            P = "[object Array]",
            S = "[object Object]",
            k = Object.prototype.hasOwnProperty,
            M = function(t, e, n, o, i, c) {
                var a = Object(m.a)(t),
                    u = Object(m.a)(e),
                    l = a ? P : Object(A.a)(t),
                    f = u ? P : Object(A.a)(e),
                    h = (l = l == C ? S : l) == S,
                    d = (f = f == C ? S : f) == S,
                    p = l == f;
                if (p && Object(x.a)(t)) {
                    if (!Object(x.a)(e)) return !1;
                    a = !0, h = !1
                }
                if (p && !h) return c || (c = new r.a), a || Object(E.a)(t) ? s(t, e, n, o, i, c) : g(t, e, l, n, o, i, c);
                if (!(1 & n)) {
                    var b = h && k.call(t, "__wrapped__"),
                        v = d && k.call(e, "__wrapped__");
                    if (b || v) {
                        var y = b ? t.value() : t,
                            _ = v ? e.value() : e;
                        return c || (c = new r.a), i(y, _, n, o, c)
                    }
                }
                return !!p && (c || (c = new r.a), function(t, e, n, r, o, i) {
                    var c = 1 & n,
                        s = j(t),
                        a = s.length;
                    if (a != j(e).length && !c) return !1;
                    for (var u = a; u--;) {
                        var l = s[u];
                        if (!(c ? l in e : O.call(e, l))) return !1
                    }
                    var f = i.get(t);
                    if (f && i.get(e)) return f == e;
                    var h = !0;
                    i.set(t, e), i.set(e, t);
                    for (var d = c; ++u < a;) {
                        var p = t[l = s[u]],
                            g = e[l];
                        if (r) var b = c ? r(g, p, l, e, t, i) : r(p, g, l, t, e, i);
                        if (!(void 0 === b ? p === g || o(p, g, n, r, i) : b)) {
                            h = !1;
                            break
                        }
                        d || (d = "constructor" == l)
                    }
                    if (h && !d) {
                        var m = t.constructor,
                            v = e.constructor;
                        m != v && "constructor" in t && "constructor" in e && !("function" == typeof m && m instanceof m && "function" == typeof v && v instanceof v) && (h = !1)
                    }
                    return i.delete(t), i.delete(e), h
                }(t, e, n, o, i, c))
            },
            T = n(46);
        e.a = function t(e, n, r, o, i) {
            return e === n || (null == e || null == n || !Object(T.a)(e) && !Object(T.a)(n) ? e != e && n != n : M(e, n, r, o, t, i))
        }
    },
    144: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return u
        })), n.d(e, "b", (function() {
            return l
        }));
        var r = n(167),
            o = n(194),
            i = n(25),
            c = n(177),
            s = n(17),
            a = n(145);
        class u {
            constructor(t) {
                const e = t.testArgs,
                    n = e && e.processEnv ? e.processEnv : a.b.fromBrowserify(),
                    u = a.a.getTargetEnv(n),
                    l = "edge" === t.browser || e && e.forceEdgeCompatLoggingMode,
                    f = "prod" !== u || "cs" !== t.context,
                    h = {
                        create: t => new r.b(t, {
                            writer: new c.a(l),
                            filterFn: f ? t => !0 : Object(o.a)(i.a.ERROR)
                        })
                    },
                    d = Object(s.b)(t.browser, t.context, n, u);
                this.config = d, this.logger = h
            }
            static getInstance() {
                if (void 0 === this._instanceShared) throw new Error("Env not inited yet");
                return this._instanceShared
            }
            static initShared(t) {
                if (void 0 !== this._instanceShared) throw new Error("Env already inited");
                this._instanceShared = t
            }
        }

        function l() {
            return u.getInstance()
        }
    },
    145: function(t, e, n) {
        "use strict";
        var r, o = n(4);
        ! function(t) {
            t.create = function(t, e, n, r, o) {
                const i = `https://www.${t}`,
                    c = `https://data.${t}`,
                    s = `https://app.${t}`,
                    a = `https://auth.${t}/v3`;
                return {
                    app: s,
                    appPersonalDictionary: `https://account.${t}/customize`,
                    capi: `wss://capi.${t}/freews`,
                    capiGDocs: `wss://capi.${t}/gdocs`,
                    dapiMimic: `${c}/api/mimic`,
                    dapiProps: `${c}/api/props/v2`,
                    dapiFindProps: `${c}/api/props/v2/find`,
                    editorDictionary: `${s}/profile/dictionary`,
                    dictionary: `https://capi.${t}/api/defs`,
                    docs: `${s}/docs`,
                    docsApi: `https://dox.${t}/documents`,
                    newDoc: `${s}/docs/new`,
                    userOrAnonymous: `${a}/user/oranonymous`,
                    authSignin: `${a}/api/login`,
                    authSignup: `${a}/api/signup`,
                    authExchange: `${a}/api/unified-login/code/exchange`,
                    authLogout: `${a}/logout`,
                    signin: `${i}/signin`,
                    signup: `${i}/signup`,
                    fbSignin: `${i}/signin?fromExtensionFb=true`,
                    fbSignup: `${i}/signup?fromExtensionFb=true`,
                    googleSignin: `${i}/signin?fromExtensionGoogle=true`,
                    googleSignup: `${i}/signup?fromExtensionGoogle=true`,
                    resetPassword: `${i}/resetpassword`,
                    newFelog: e,
                    sumoLogic: n,
                    welcomeC: `${i}/extension-success`,
                    afterInstall: `${i}/after_install_page`,
                    upgrade: `${i}/upgrade`,
                    premium: `${i}/business/plans/i`,
                    planComparison: `${i}/plans/t`,
                    plansEnterprise: `${i}/plans/n`,
                    uninstall: `${i}/extension-uninstall`,
                    terms: `${i}/terms`,
                    policy: `${i}/privacy-policy`,
                    extensionSuccess: `${i}/extension-success`,
                    firefoxPrivatePolicy: "https://addons.mozilla.org/en-US/firefox/addon/grammarly-1/privacy/",
                    dynamicConfigUrl: "https://d3cv4a9a9wh0bt.cloudfront.net/dynamicConfig.json",
                    pageConfigUrl: "https://d3cv4a9a9wh0bt.cloudfront.net/browserplugin/config.json",
                    edgePopupUrl: r,
                    emptyScriptUrl: o,
                    grammarlyDomain: t,
                    grammarlyProtocol: "https:"
                }
            }
        }(r || (r = {}));
        var i, c, s, a, u, l, f = n(58);
        ! function(t) {
            const e = {
                chrome: "chromeExt",
                firefox: "firefoxExt",
                safari: "safariExt",
                edge: "edgeExt"
            };
            t.create = function(t, n) {
                return {
                    appName: Object(f.c)(e[t], "gnar app name"),
                    url: `https://gnar.${n}`,
                    domain: `.${n}`,
                    sendEmailInfoTracking: !0,
                    sendFluidExperimentData: !1
                }
            }
        }(i || (i = {})),
        function(t) {
            const e = {
                chrome: "extensionChrome",
                firefox: "extensionFirefox",
                safari: "extensionSafari",
                edge: "extensionEdge"
            };
            t.create = function(t, n) {
                return {
                    appName: Object(f.c)(e[t], "felog app name"),
                    sendUsageMetrics: !0,
                    sendPerfMetrics: "dev" === n || Math.random() <= .01
                }
            }
        }(c || (c = {})),
        function(t) {
            const e = {
                chrome: "extensionChrome",
                firefox: "extensionFirefox",
                safari: "extensionSafari",
                edge: "extensionEdge"
            };
            t.create = function(t) {
                return {
                    appName: Object(f.c)(e[t], "sumologic app name")
                }
            }
        }(s || (s = {})),
        function(t) {
            t.create = function() {
                return {}
            }
        }(a || (a = {})),
        function(t) {
            t.create = function(t) {
                return {
                    gdocsSupported: "chrome" === t || "firefox" === t || "safari" === t
                }
            }
        }(u || (u = {})),
        function(t) {
            const e = "grammarly.com";
            t.create = function(t, n, s, l) {
                const f = "prod" === n ? "https://f-log-extension.grammarly.io" : "qa" === n || "dev" === n ? "https://127.0.0.1:8000" : Object(o.g)(n),
                    h = "prod" === n ? "https://endpoint2.collection.us2.sumologic.com/receiver/v1/http/ZaVnC4dhaV1OF-4ic11yqpre0casnyvs_ZoaCHciEYdRyBkrfwP6DMlsWt8tSVU76RPqgGvAGjXGQk_UNuxPx-pYbToJapM_Fr0CUcgKaA8_IVl-lhSr5Q==" : "qa" === n || "dev" === n ? "https://127.0.0.1:8000" : Object(o.g)(n),
                    d = "prod" === n ? e : "qa" === n || "dev" === n ? "qagr.io" : Object(o.g)(n);
                return {
                    url: r.create(e, f, h, s, l),
                    gnar: i.create(t, d),
                    felog: c.create(t, n),
                    capi: a.create(),
                    extensionId: "87677a2c52b84ad3a151a4a72f5bd3c4",
                    newsVersion: 0,
                    features: u.create(t)
                }
            }
        }(l || (l = {}));
        var h, d, p, g, b, m, v, y, _, w, j, O, A, x, E = n(236);
        (d = h || (h = {})).create = function(t, e, n, r, o, i, c) {
                const s = void 0 !== i && void 0 !== c ? i : "UNVERSIONED",
                    a = `${t}.${e}.${n}`;
                return {
                    version: a,
                    fullVersion: `${a}-${[r,["prod"!==o?o:null,s!==r?s:null].filter(t=>!!t).join(".")].filter(t=>""!==t).join("/")}`,
                    commitHash: c,
                    gitBranch: i
                }
            }, d.getManifestVersion = function(t, e, n) {
                switch (t) {
                    case "safari":
                        switch (e) {
                            case "bg":
                            case "popup":
                                return n.safari.extension.displayVersion;
                            default:
                                return
                        }
                        case "chrome":
                            return n.chrome.runtime.getManifest().version;
                        case "firefox":
                            return E.a.runtime.getManifest().version;
                        case "edge":
                            return n.edge.runtime.getManifest().version;
                        default:
                            return Object(o.g)(t)
                }
            }, (g = p || (p = {})).create = function(t) {
                return Object(o.n)(["chrome", "safari", "firefox", "edge"], t)
            }, g.detect = function(t) {
                return t.chrome && /google/i.test(t.navigator.vendor) ? "chrome" : -1 !== t.navigator.userAgent.indexOf("Firefox") ? "firefox" : /^((?!chrome).)*safari/i.test(t.navigator.userAgent) ? "safari" : "Netscape" === t.navigator.appName && t.navigator.appVersion.indexOf("Edge") > -1 ? "edge" : void 0
            }, (b || (b = {})).create = function(t) {
                return Object(o.n)(["dev", "prod", "qa"], t)
            }, (v = m || (m = {})).create = function(t) {
                return Object(o.n)(["bg", "cs", "popup"], t)
            }, v.detect = function(t, e) {
                const n = !!t.IS_BG,
                    r = "safari" === e ? function() {
                        try {
                            return t.safari.extension.globalPage.contentWindow !== t
                        } catch (t) {
                            return !1
                        }
                    }() : !!t.IS_POPUP;
                return n ? "bg" : r ? "popup" : "cs"
            },
            function(t) {
                t.create = function(t, e, n) {
                    return {
                        browser: t,
                        env: e,
                        context: n
                    }
                }
            }(y || (y = {})), (_ || (_ = {})).create = function(t) {
                return {
                    type: p.detect(t) || "other"
                }
            },
            function(t) {
                t.create = function(t) {
                    return {
                        isWindows: -1 !== t.navigator.appVersion.indexOf("Win"),
                        isMac: -1 !== t.navigator.appVersion.indexOf("Mac"),
                        isChromeOS: -1 !== t.navigator.appVersion.indexOf("CrOS")
                    }
                }
            }(w || (w = {})),
            function(t) {
                t.create = function(t) {
                    return {
                        browser: _.create(t),
                        os: w.create(t)
                    }
                }
            }(j || (j = {})), n.d(e, "b", (function() {
                return O
            })), n.d(e, "a", (function() {
                return A
            })),
            function(t) {
                function e(t, e, n, r, o, i, c, s) {
                    return {
                        env: t,
                        major_number: e,
                        build_number: n,
                        release_number: r,
                        git_branch: o,
                        git_commit: i,
                        edge_popup_url: c,
                        empty_script_url: s
                    }
                }
                t.create = e, t.fromBrowserify = function() {
                    return e("prod", "14", "947", "0", "UNVERSIONED", "UNVERSIONED", "", "")
                }
            }(O || (O = {})), (x = A || (A = {})).getTargetEnv = function(t) {
                if (!t.env) throw new Error("processEnv.env is null or undefined");
                const e = b.create(t.env);
                if (!e) throw new Error(`Invalid processEnv.env: ${t.env}`);
                return e
            }, x.create = function(t, e, n, r) {
                const i = [n.major_number, n.build_number, n.release_number].map(o.m);
                let c;
                if (3 === i.length && i.every(t => void 0 !== t)) c = i;
                else {
                    let n;
                    try {
                        n = h.getManifestVersion(t, e, window)
                    } catch (t) {}
                    const r = (n || "").split(".").map(o.m);
                    c = 3 === r.length && r.every(t => void 0 !== t) ? r : [0, 0, 0]
                }
                const [s, a, u] = c;
                return {
                    buildInfo: h.create(s, a, u, t, r, n.git_branch, n.git_commit),
                    bundleInfo: y.create(t, r, e),
                    appConfig: l.create(t, r, n.edge_popup_url, n.empty_script_url),
                    systemInfo: j.create(window)
                }
            }
    },
    146: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return i
        }));
        var r = n(53),
            o = n(103),
            i = {
                closed: !0,
                next: function(t) {},
                error: function(t) {
                    if (r.a.useDeprecatedSynchronousErrorHandling) throw t;
                    Object(o.a)(t)
                },
                complete: function() {}
            }
    },
    152: function(t, e, n) {
        "use strict";
        var r = n(36).a.Uint8Array;
        e.a = r
    },
    157: function(t, e, n) {
        "use strict";
        var r = n(182),
            o = Object(r.a)(Object.getPrototypeOf, Object);
        e.a = o
    },
    159: function(t, e) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (t) {
            "object" == typeof window && (n = window)
        }
        t.exports = n
    },
    16: function(t, e, n) {
        "use strict";
        n.d(e, "i", (function() {
            return o
        })), n.d(e, "r", (function() {
            return s
        })), n.d(e, "h", (function() {
            return a
        })), n.d(e, "j", (function() {
            return u
        })), n.d(e, "f", (function() {
            return l
        })), n.d(e, "e", (function() {
            return f
        })), n.d(e, "s", (function() {
            return h
        })), n.d(e, "m", (function() {
            return d
        })), n.d(e, "u", (function() {
            return p
        })), n.d(e, "q", (function() {
            return g
        })), n.d(e, "n", (function() {
            return b
        })), n.d(e, "p", (function() {
            return v
        })), n.d(e, "l", (function() {
            return y
        })), n.d(e, "w", (function() {
            return _
        })), n.d(e, "g", (function() {
            return w
        })), n.d(e, "k", (function() {
            return j
        })), n.d(e, "v", (function() {
            return O
        })), n.d(e, "t", (function() {
            return A
        })), n.d(e, "d", (function() {
            return x
        })), n.d(e, "c", (function() {
            return E
        })), n.d(e, "b", (function() {
            return C
        })), n.d(e, "a", (function() {
            return P
        })), n.d(e, "o", (function() {
            return S
        })), n(254), n(10);
        var r = n(195);

        function o() {
            return window.chrome && window.chrome.runtime && window.chrome.runtime.lastError
        }

        function i(t, e) {
            const n = i.items = i.items || {},
                r = n[t];
            if (r || e) {
                if (r && !e) return clearTimeout(r), void delete n[t];
                ! function() {
                    function r() {
                        o(), t()
                    }

                    function o() {
                        const o = setTimeout(r, e);
                        n[t] = o
                    }
                    o()
                }()
            }
        }

        function c() {
            return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
        }

        function s() {
            return c() + c() + "-" + c() + "-" + c() + "-" + c() + "-" + c() + c() + c()
        }

        function a(t) {
            let e = 0;
            const n = t.length;
            let r, o;
            for (let i = 0; i < n; i++) r = t.charCodeAt(i), r >= 55296 && r < 57344 && r < 56320 && i + 1 < n && (o = t.charCodeAt(i + 1), o >= 56320 && o < 57344) ? (e += 4, i++) : e += r < 128 ? 1 : r < 2048 ? 2 : 3;
            return e
        }

        function u(t, e) {
            let n = e,
                r = 0;
            const o = [];
            for (; t[n];)
                if (" " === t[n++]) o.push(t.substring(r, n)), r = n, n += e;
                else {
                    let i = n;
                    do {
                        if (" " === t.substring(i - 1, i)) {
                            o.push(t.substring(r, i)), r = i, n = i + e;
                            break
                        }
                        i--
                    } while (i > r)
                } return o.push(t.substr(r)), o
        }

        function l() {}

        function f() {
            return !0
        }

        function h(t) {
            return /^[-!#$%&\'*+\\./0-9=?A-Z^_`a-z{|}~]+@[-!#$%&\'*+\\/0-9=?A-Z^_`a-z{|}~]+\.[-!#$%&\'*+\\./0-9=?A-Z^_`a-z{|}~]+$/.test(t)
        }

        function d(t, e) {
            return e[1 == t ? 0 : 1]
        }

        function p(t, e, n) {
            const r = {};
            return function() {
                const o = "_memoize_" + (e ? e.apply(this, arguments) : arguments[0]);
                return window.hasOwnProperty.call(r, o) ? r[o] : (n && setTimeout(() => {
                    delete r[o]
                }, n), r[o] = t.apply(this, arguments))
            }
        }

        function g(t, e) {
            return Math.floor(Math.random() * (e - t + 1)) + t
        }

        function b(t) {
            return new Promise(e => setTimeout(e, t))
        }! function(t) {
            t.items = {}
        }(i || (i = {}));
        const m = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        function v(t) {
            if (!t) return;
            const e = new Date(t);
            return "Invalid Date" !== e.toString() ? m[e.getMonth()] + " " + e.getDate() + ", " + e.getFullYear() : void 0
        }

        function y(t) {
            const e = function() {};
            return e.prototype = t(), e
        }

        function _(t = "", e = "") {
            function n(t) {
                return t.split(".").map(t => Number(t) || 0)
            }
            const r = n(t),
                o = n(e),
                i = Array(Math.abs(r.length - o.length)).fill(0);
            if (r.length > o.length ? o.push(...i) : r.push(...i), r.every((t, e) => t === o[e])) return 0;
            for (let t = 0, e = r.length; t < e; t++) {
                if (r[t] > o[t]) return 1;
                if (r[t] < o[t]) return -1
            }
            return -1
        }

        function w(t, e = 10) {
            setTimeout(t, e)
        }

        function j({
            buffered: t = !0
        } = {}) {
            const e = [],
                n = [];
            return {
                take: function() {
                    return e.length ? Promise.resolve(e.shift()) : new Promise(t => n.push(t))
                },
                put: function(r) {
                    n.length > 0 ? n.shift()(r) : t ? e.push(r) : e[0] = r
                }
            }
        }

        function O(t, e = 100) {
            if (!t) return NaN;
            const n = r.createHash("superfasthash");
            return parseInt(n.hash(t), 16) % e
        }

        function A(t) {
            return t.which || t.charCode || t.keyCode || 0
        }
        new RegExp(String.fromCharCode(160), "g"), String.fromCharCode(160), new RegExp("\n" + String.fromCharCode(32), "g");
        const x = 1e3,
            E = 60 * x,
            C = 27,
            P = 13;

        function S(t) {
            return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
        }
    },
    160: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return o
        })), n.d(e, "b", (function() {
            return i
        }));
        var r = n(75);

        function o() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return i(t)
        }

        function i(t) {
            return t ? 1 === t.length ? t[0] : function(e) {
                return t.reduce((function(t, e) {
                    return e(t)
                }), e)
            } : r.a
        }
    },
    167: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return i
        })), n.d(e, "b", (function() {
            return c
        }));
        var r = n(25);
        class o {
            constructor(t) {
                this.name = t, this._isError = t => {
                    const e = t;
                    return e && (void 0 !== e.message && void 0 !== e.name || void 0 !== e.stack)
                }
            }
            trace(t, e, n) {
                this._logMessage(r.a.TRACE, t, e, n)
            }
            debug(t, e, n) {
                this._logMessage(r.a.DEBUG, t, e, n)
            }
            info(t, e, n) {
                this._logMessage(r.a.INFO, t, e, n)
            }
            warn(t, e, n) {
                this._logMessage(r.a.WARN, t, e, n)
            }
            error(t, e, n) {
                this._logMessage(r.a.ERROR, t, e, n)
            }
            fatal(t, e, n) {
                this._logMessage(r.a.FATAL, t, e, n)
            }
            _logMessage(t, e, n, r) {
                const o = {
                    level: t,
                    loggerName: this.name,
                    message: e,
                    timestamp: new Date
                };
                n && (this._isError(n) ? o.exception = n : o.data = n), o.data = o.data || r, this.handleEvent(o)
            }
        }
        class i {
            constructor(t, e) {
                this.name = t, this._createLogger = e
            }
            trace(t, e, n) {
                void 0 === this._logger && (this._logger = this._createLogger(this.name)), this._logger.trace(t, e, n)
            }
            debug(t, e, n) {
                void 0 === this._logger && (this._logger = this._createLogger(this.name)), this._logger.debug(t, e, n)
            }
            info(t, e, n) {
                void 0 === this._logger && (this._logger = this._createLogger(this.name)), this._logger.info(t, e, n)
            }
            warn(t, e, n) {
                void 0 === this._logger && (this._logger = this._createLogger(this.name)), this._logger.warn(t, e, n)
            }
            error(t, e, n) {
                void 0 === this._logger && (this._logger = this._createLogger(this.name)), this._logger.error(t, e, n)
            }
            fatal(t, e, n) {
                void 0 === this._logger && (this._logger = this._createLogger(this.name)), this._logger.fatal(t, e, n)
            }
        }
        class c extends o {
            constructor(t, e) {
                super(t), this._config = e
            }
            handleEvent(t) {
                this._config.filterFn(t) && this._config.writer.write(t)
            }
        }
    },
    168: function(t, e, n) {
        "use strict";
        (function(t) {
            var n = "object" == typeof t && t && t.Object === Object && t;
            e.a = n
        }).call(this, n(159))
    },
    17: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return i
        })), n.d(e, "b", (function() {
            return c
        })), n.d(e, "c", (function() {
            return s
        }));
        var r = n(145);
        const o = new(n(4).b)(() => {
            throw new Error("Global config not initialized")
        });

        function i() {
            return o.get()
        }

        function c(t, e, n, i) {
            const c = r.a.create(t, e, n, i);
            return o.init(c), window.GR_CFG = o.get(), c
        }

        function s(t, e, n) {
            throw new Error("Never use it")
        }
    },
    173: function(t, e, n) {
        "use strict";
        var r = n(176),
            o = n(98);
        e.a = function(t, e) {
            for (var n = 0, i = (e = Object(r.a)(e, t)).length; null != t && n < i;) t = t[Object(o.a)(e[n++])];
            return n && n == i ? t : void 0
        }
    },
    174: function(t, e, n) {
        "use strict";

        function r(t) {
            return null !== t && "object" == typeof t
        }
        n.d(e, "a", (function() {
            return r
        }))
    },
    175: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return o
        }));
        var r = n(11);

        function o(t) {
            for (; t;) {
                var e = t,
                    n = e.closed,
                    o = e.destination,
                    i = e.isStopped;
                if (n || i) return !1;
                t = o && o instanceof r.a ? o : null
            }
            return !0
        }
    },
    176: function(t, e, n) {
        "use strict";
        var r = n(27),
            o = n(141),
            i = n(114),
            c = "Expected a function";

        function s(t, e) {
            if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError(c);
            var n = function() {
                var r = arguments,
                    o = e ? e.apply(this, r) : r[0],
                    i = n.cache;
                if (i.has(o)) return i.get(o);
                var c = t.apply(this, r);
                return n.cache = i.set(o, c) || i, c
            };
            return n.cache = new(s.Cache || i.a), n
        }
        s.Cache = i.a;
        var a = s,
            u = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            l = /\\(\\)?/g,
            f = function(t) {
                var e = a((function(t) {
                        var e = [];
                        return 46 === t.charCodeAt(0) && e.push(""), t.replace(u, (function(t, n, r, o) {
                            e.push(r ? o.replace(l, "$1") : n || t)
                        })), e
                    }), (function(t) {
                        return 500 === n.size && n.clear(), t
                    })),
                    n = e.cache;
                return e
            }(),
            h = n(59),
            d = n(243),
            p = n(109),
            g = h.a ? h.a.prototype : void 0,
            b = g ? g.toString : void 0,
            m = function(t) {
                return null == t ? "" : function t(e) {
                    if ("string" == typeof e) return e;
                    if (Object(r.a)(e)) return Object(d.a)(e, t) + "";
                    if (Object(p.a)(e)) return b ? b.call(e) : "";
                    var n = e + "";
                    return "0" == n && 1 / e == -1 / 0 ? "-0" : n
                }(t)
            };
        e.a = function(t, e) {
            return Object(r.a)(t) ? t : Object(o.a)(t, e) ? [t] : f(m(t))
        }
    },
    177: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return o
        }));
        var r = n(25);
        class o {
            constructor(t = !0) {
                this._edgeCompat = t, this._writeFunc = this._edgeCompat ? o._edgeWriteFunc : o._commonWriteFunc
            }
            write(t) {
                try {
                    const e = [`grm ${t.level} 【${t.loggerName}】░░ ${t.message}`];
                    t.data && e.push(t.data), t.exception && e.push(t.exception), this._writeFunc[t.level].apply(null, e)
                } catch (t) {}
            }
        }
        o._commonWriteFunc = {
            [r.a.TRACE]: console.log.bind(console),
            [r.a.DEBUG]: console.log.bind(console),
            [r.a.INFO]: console.info.bind(console),
            [r.a.WARN]: console.warn.bind(console),
            [r.a.ERROR]: console.error.bind(console),
            [r.a.FATAL]: console.error.bind(console)
        }, o._edgeWriteFunc = {
            [r.a.TRACE]: (t, e, n) => console.log(t, e, n),
            [r.a.DEBUG]: (t, e, n) => console.log(t, e, n),
            [r.a.INFO]: (t, e, n) => console.info(t, e, n),
            [r.a.WARN]: (t, e, n) => console.warn(t, e, n),
            [r.a.ERROR]: (t, e, n) => console.error(t, e, n),
            [r.a.FATAL]: (t, e, n) => console.error(t, e, n)
        }
    },
    182: function(t, e, n) {
        "use strict";
        e.a = function(t, e) {
            return function(n) {
                return t(e(n))
            }
        }
    },
    190: function(t, e, n) {
        "use strict";
        n.d(e, "b", (function() {
            return f
        })), n.d(e, "c", (function() {
            return h
        })), n.d(e, "a", (function() {
            return p
        }));
        var r = n(17),
            o = n(10),
            i = n(16),
            c = n(4),
            s = n(12),
            a = n(43),
            u = n(200);
        const l = s.a.create("extension-api.message.bg"),
            f = "popup";

        function h() {
            const t = (Object(o.j)() || Object(o.l)()) && (!chrome.extension || !chrome.tabs || !chrome.runtime || !chrome.runtime.onConnect),
                e = Object(o.k)() && (!edge.extension || !edge.tabs || !edge.runtime || !edge.runtime.onConnect);
            if (t || e) {
                const t = window.localStorage.getItem("bgInitFail") || "0",
                    e = parseInt(t, 10);
                e > 4 ? l.error(`too many bgInitFail ${e}`) : (window.localStorage.setItem("bgInitFail", (e + 1).toString()), document.location.reload())
            }
        }

        function d(t) {
            if (!t) return !1;
            const {
                browser: e
            } = r.a().bundleInfo, n = "firefox" === e ? /^moz-extension:\/\/.*\/src\/popup.html$/ : "edge" === e ? /^ms-browser-extension:\/\/.*\/src\/popup.html$/ : "chrome" === e ? chrome && chrome.runtime && chrome.runtime.id ? new RegExp(chrome.runtime.id + "/src/popup.html") : void 0 : Object(c.g)(e);
            return void 0 !== n && n.test(t)
        }
        class p {
            constructor(t, e, n) {
                this._getActiveTab = e, this._getAllTabs = n, this.kind = "background-message-api", this._callbacks = {}, this._tabPorts = {
                    popup: []
                }, this._messageHelper = new u.a, this._sendMessageToPorts = (t, e) => {
                    const n = this._tabPorts[t];
                    n && n.forEach(t => t.postMessage(e))
                }, this.toFocused = (t, e) => this._getActiveTab().then(({
                    id: n,
                    url: r
                }) => {
                    if (n) return d(r) ? l.warn(`toFocussed not allowed for popup when it open like regular tab ${t}`, e) : void this._sendMessageToPorts(n.toString(), {
                        type: t,
                        content: e,
                        callid: Object(i.r)()
                    })
                }), this.broadcast = (t, e) => {
                    if (!e) return;
                    const n = ({
                        id: n,
                        url: r
                    }) => {
                        n && r && -1 === r.indexOf("chrome-extension:") && this._sendMessageToPorts(n.toString(), {
                            type: t,
                            callid: Object(i.r)(),
                            content: e
                        })
                    };
                    this._getAllTabs().then(t => t.forEach(n)), this._tabPorts.popup && this._tabPorts.popup.length && this._getActiveTab().then(({
                        url: t
                    }) => {
                        n({
                            id: f,
                            url: t
                        })
                    })
                }, this._initPortListener = t => {
                    if (t.name === a.b.bridge) t.onMessage(t => {
                        "message.toFocussed" === t.method && this.toFocused(t.params && t.params.type, t.params && t.params.content)
                    });
                    else if (t.name === a.b.broadcast) t.onMessage(t => this.broadcast(t.type, t.content));
                    else if (t.name === a.b.background) {
                        const {
                            sender: e
                        } = t;
                        if (e) {
                            if (e.tab) {
                                const {
                                    id: n,
                                    url: r
                                } = e.tab;
                                if (n) {
                                    let e = this._tabPorts[n];
                                    void 0 === e && (e = this._tabPorts[n] = []), e.push(t)
                                }
                                r && 0 === r.indexOf("http") && this._messageHelper.fire("tab-connected", {
                                    tab: n,
                                    url: r
                                }), t.onDisconnect(() => {
                                    if (!n) return;
                                    const e = this._tabPorts[n];
                                    e && e.splice(e.indexOf(t), 1)
                                })
                            }
                            const n = e.url ? e.url : e.tab ? e.tab.url : "";
                            if (n && d(n)) {
                                const e = f;
                                this._tabPorts[e] = this._tabPorts[e] || [], this._tabPorts[e].push(t), t.onDisconnect(() => {
                                    const n = this._tabPorts[e];
                                    n.splice(n.indexOf(t), 1)
                                })
                            }
                        }
                        t.onMessage(n => {
                            const r = ({
                                callid: n,
                                content: r,
                                type: o
                            }) => {
                                this._callbacks[n] && (this._callbacks[n](r), delete this._callbacks[n]), this._messageHelper.fire(o, r, e => t.postMessage({
                                    content: e,
                                    callid: n
                                }), e && e.tab ? e.tab.id : -1)
                            };
                            "tab-connected" === n.type ? this._getActiveTab().then(({
                                url: t
                            }) => {
                                n.content = {
                                    tab: f,
                                    url: t
                                }, r(n)
                            }) : r(n)
                        })
                    }
                }, t(this._initPortListener)
            }
            getPortExists(t) {
                return !!this._tabPorts[t]
            }
            sendTo(t, e, n, r, o, c) {
                const s = this._tabPorts[t];
                if (!s || !s.length) return void(o && o({
                    message: "no ports on specified tabId"
                }));
                const a = c ? s.filter(t => c(t.sender && t.sender.url)) : s;
                if (!a.length) return void(o && o({
                    message: "no ports on specified tabFilter"
                }));
                const u = {
                    type: e,
                    content: n
                };
                r && "function" == typeof r && (u.callid = Object(i.r)(), this._callbacks[u.callid] = r), a.forEach(t => t.postMessage(u))
            }
            listen(t, e) {
                this._messageHelper.listen(t, e)
            }
        }
    },
    194: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return o
        }));
        var r = n(25);
        const o = t => e => Object(r.b)(e.level) >= Object(r.b)(t)
    },
    195: function(t, e, n) {
        n(327);
        var r = {
            superfasthash: n(354),
            murmurhash3: n(355)
        };
        t.exports = {
            createHash: function(t) {
                t = t.replace(/![a-zA-z0-9]/g, "").toLowerCase();
                try {
                    return r[t]
                } catch (t) {
                    throw new Error(t)
                }
            }
        }
    },
    198: function(t, e) {
        t.exports = function(t) {
            if (!t.webpackPolyfill) {
                var e = Object.create(t);
                e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                    enumerable: !0,
                    get: function() {
                        return e.l
                    }
                }), Object.defineProperty(e, "id", {
                    enumerable: !0,
                    get: function() {
                        return e.i
                    }
                }), Object.defineProperty(e, "exports", {
                    enumerable: !0
                }), e.webpackPolyfill = 1
            }
            return e
        }
    },
    199: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return a
        })), n.d(e, "b", (function() {
            return u
        }));
        var r = n(72),
            o = n(200),
            i = n(16),
            c = n(43);
        const s = n(12).a.create("Messaging.extension-api.content");
        class a {
            constructor(t) {
                this.kind = "content-script-message-api", this._callbacks = {}, this._messageHelper = new o.a, this._proxyPortsStorage = {}, this.broadcastBackground = (...t) => this._emit(this.backgroundPort, "bg").apply(null, t), this.broadcast = (...t) => this._emit(this.broadcastPort, "tabs").apply(null, t), this._onPortMessage = t => {
                    s.trace("portMessage", t)
                }, this._checkHealth = (() => {
                    let t = null,
                        e = null;
                    const n = () => {
                            document.dispatchEvent(new CustomEvent("grammarly:ping"))
                        },
                        r = () => {
                            i()
                        },
                        o = () => {
                            [this.port, this.backgroundPort, this.broadcastPort].forEach(t => {
                                t && t.removeMessageListeners && t.removeMessageListeners()
                            }), this.port = this.backgroundPort = this.broadcastPort = null, i(), document.addEventListener("grammarly:proxyports", this._onGrammarlyResetAfterTimeout), document.dispatchEvent(new CustomEvent("grammarly:offline"))
                        };

                    function i() {
                        document.removeEventListener("grammarly:pong", r), e && (clearTimeout(e), e = null), t && (clearInterval(t), t = null)
                    }
                    return () => {
                        i(), document.addEventListener("grammarly:pong", r), t = window.setInterval(n, 500), e = window.setTimeout(o, 5e3)
                    }
                })(), this._onGrammarlyResetAfterTimeout = () => {
                    document.removeEventListener("grammarly:proxyports", this._onGrammarlyResetAfterTimeout), this.port = this._initProxyPort(c.b.bridge, this._onPortMessage, this._checkHealth, !0), this.backgroundPort = this._initProxyPort(c.b.background, this._onBgPortMessage, this._checkHealth), this.broadcastPort = this._initProxyPort(c.b.broadcast, null, this._checkHealth)
                }, this._onBgPortMessage = ({
                    callid: t,
                    content: e,
                    type: n
                }) => {
                    this._callbacks[t] ? (this._callbacks[t](e), delete this._callbacks[t]) : this._messageHelper.fire(n, e, e => {
                        if (!this.backgroundPort) throw new Error("fail reply to bg page - connection lost");
                        this.backgroundPort.postMessage({
                            content: e,
                            callid: t
                        })
                    })
                }, this._initProxyPort = (t, e, n, r = !1) => {
                    const o = this._proxyPort(t);
                    return r && this._checkHealth(), e && o.onMessage(e), n && o.onDisconnect(n), o
                }, this._emit = (t, e) => (n, r, o, c) => {
                    const s = Object(i.r)();
                    o && "function" == typeof o && (this._callbacks[s] = o);
                    try {
                        if (!t) throw new Error("lost connection to " + e + " port");
                        t.postMessage({
                            type: n,
                            callid: s,
                            content: r
                        })
                    } catch (t) {
                        if (!c) throw t;
                        c(t)
                    }
                }, this._proxyPort = t => {
                    this._proxyPortsStorage[t] = {};
                    const e = (e, n) => {
                            const r = n.detail;
                            if (r.name !== t) return;
                            const o = this._proxyPortsStorage[t][e];
                            o && o(r.msg)
                        },
                        n = t => e("success", t),
                        r = t => e("error", t);
                    return document.addEventListener("grammarly:message", n), document.addEventListener("grammarly:error", r), {
                        postMessage(e = {}) {
                            const n = {
                                data: e,
                                name: t
                            };
                            return document.dispatchEvent(new CustomEvent("grammarly:action", {
                                detail: n
                            }))
                        },
                        onMessage: e => {
                            this._proxyPortsStorage[t].success = e
                        },
                        onDisconnect: e => {
                            this._proxyPortsStorage[t].error = e
                        },
                        removeMessageListeners() {
                            document.removeEventListener("grammarly:message", n), document.removeEventListener("grammarly:error", r)
                        }
                    }
                }, this.port = t(c.b.bridge), this.port.onMessage(this._onPortMessage), this.port.onDisconnect(() => {
                    this.port = null, this.port = this._initProxyPort(c.b.bridge, this._onPortMessage, this._checkHealth, !0)
                }), this.backgroundPort = t(c.b.background), this.backgroundPort.onMessage(this._onBgPortMessage), this.backgroundPort.onDisconnect(() => {
                    this.backgroundPort = null, this.backgroundPort = this._initProxyPort(c.b.background, this._onBgPortMessage, this._checkHealth)
                }), this.broadcastPort = t(c.b.broadcast), this.broadcastPort.onDisconnect(() => {
                    this.broadcastPort = null, this.broadcastPort = this._initProxyPort(c.b.broadcast, null, this._checkHealth)
                })
            }
            onBackgroundPortReconnect(t) {
                this.backgroundPort && this.backgroundPort.onReconnect && this.backgroundPort.onReconnect(t)
            }
            listen(t, e) {
                this._messageHelper.listen(t, e)
            }
            toFocused(t, e) {
                return r.a.create(n => {
                    if (!this.port) throw new Error("lost connection to bg page");
                    this.port.postMessage({
                        method: "message.toFocussed",
                        params: {
                            type: t,
                            content: e
                        }
                    }), n()
                })
            }
        }

        function u() {
            window.addEventListener("update-window-size-gr", t => {
                const e = document.createElement("div");
                if (e.style.height = "1px", t.detail && t.detail.force) {
                    const t = setInterval((function() {
                        document.body.appendChild(e), setTimeout(() => {
                            e.parentNode && e.parentNode.removeChild(e)
                        }, 10)
                    }), 100);
                    setTimeout(() => clearInterval(t), 405)
                }
            }, !1), window.addEventListener("close-popup-gr", () => {
                window.close()
            }, !1)
        }
    },
    2: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return o
        }));
        var r = function(t, e) {
            return (r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        };

        function o(t, e) {
            function n() {
                this.constructor = t
            }
            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }
    },
    200: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return i
        }));
        const r = n(12).a.create("extension-api.message"),
            o = () => {};
        class i {
            constructor() {
                this._listeners = {}, this._queue = {}, this.fire = (t, e, n = o, r) => {
                    const i = this._listeners[t] || [];
                    i.length ? i.forEach(t => t(e, n, r)) : (this._queue[t] = this._queue[t] || [], this._queue[t].push({
                        content: e,
                        callback: n,
                        sender: r
                    }))
                }, this.unlisten = (t, e) => {
                    const n = this._listeners[t] || [],
                        r = n.indexOf(e); - 1 !== r && (1 === n.length ? delete this._listeners[t] : n.splice(r, 1))
                }, this.listenOnce = (t, e) => {
                    const n = (r, o, i) => {
                        this.unlisten(t, n), e && e(r, o, i)
                    };
                    this.listen(t, n)
                }, this.listen = (t, e) => {
                    this._listeners[t] = this._listeners[t] || [], -1 === this._listeners[t].indexOf(e) && this._listeners[t].push(e);
                    const n = this._queue[t] || [];
                    if (n.length) {
                        for (const o of n) try {
                            e(o.content, o.callback, o.sender)
                        } catch (t) {
                            r.error("exception during proccesing buffered messages", t)
                        }
                        delete this._queue[t]
                    }
                }
            }
        }
    },
    202: function(t, e, n) {
        "use strict";
        var r = n(57),
            o = n(36),
            i = Object(r.a)(o.a, "DataView"),
            c = n(96),
            s = Object(r.a)(o.a, "Promise"),
            a = Object(r.a)(o.a, "Set"),
            u = Object(r.a)(o.a, "WeakMap"),
            l = n(52),
            f = n(87),
            h = Object(f.a)(i),
            d = Object(f.a)(c.a),
            p = Object(f.a)(s),
            g = Object(f.a)(a),
            b = Object(f.a)(u),
            m = l.a;
        (i && "[object DataView]" != m(new i(new ArrayBuffer(1))) || c.a && "[object Map]" != m(new c.a) || s && "[object Promise]" != m(s.resolve()) || a && "[object Set]" != m(new a) || u && "[object WeakMap]" != m(new u)) && (m = function(t) {
            var e = Object(l.a)(t),
                n = "[object Object]" == e ? t.constructor : void 0,
                r = n ? Object(f.a)(n) : "";
            if (r) switch (r) {
                case h:
                    return "[object DataView]";
                case d:
                    return "[object Map]";
                case p:
                    return "[object Promise]";
                case g:
                    return "[object Set]";
                case b:
                    return "[object WeakMap]"
            }
            return e
        }), e.a = m
    },
    210: function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "second", (function() {
            return r
        })), n.d(e, "minute", (function() {
            return o
        })), n.d(e, "hour", (function() {
            return i
        })), n.d(e, "day", (function() {
            return c
        })), n.d(e, "week", (function() {
            return s
        })), n.d(e, "days", (function() {
            return a
        })), n.d(e, "seconds", (function() {
            return u
        })), n.d(e, "hertz", (function() {
            return l
        }));
        const r = 1e3,
            o = 60 * r,
            i = 60 * o,
            c = 24 * i,
            s = 7 * c;

        function a(t) {
            return t * c
        }

        function u(t) {
            return t * r
        }

        function l(t) {
            return r / t
        }
    },
    211: function(t, e, n) {
        "use strict";
        var r = n(31),
            o = Object.create,
            i = function() {
                function t() {}
                return function(e) {
                    if (!Object(r.a)(e)) return {};
                    if (o) return o(e);
                    t.prototype = e;
                    var n = new t;
                    return t.prototype = void 0, n
                }
            }();
        e.a = i
    },
    212: function(t, e, n) {
        "use strict";
        var r = n(99),
            o = n(27),
            i = n(82),
            c = n(126),
            s = n(91),
            a = Object.prototype.hasOwnProperty;
        e.a = function(t, e) {
            var n = Object(o.a)(t),
                u = !n && Object(r.a)(t),
                l = !n && !u && Object(i.a)(t),
                f = !n && !u && !l && Object(s.a)(t),
                h = n || u || l || f,
                d = h ? function(t, e) {
                    for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
                    return r
                }(t.length, String) : [],
                p = d.length;
            for (var g in t) !e && !a.call(t, g) || h && ("length" == g || l && ("offset" == g || "parent" == g) || f && ("buffer" == g || "byteLength" == g || "byteOffset" == g) || Object(c.a)(g, p)) || d.push(g);
            return d
        }
    },
    213: function(t, e, n) {
        "use strict";
        var r = function(t, e, n) {
            for (var r = -1, o = Object(t), i = n(t), c = i.length; c--;) {
                var s = i[++r];
                if (!1 === e(o[s], s, o)) break
            }
            return t
        };
        e.a = r
    },
    217: function(t, e) {
        var n, r, o = t.exports = {};

        function i() {
            throw new Error("setTimeout has not been defined")
        }

        function c() {
            throw new Error("clearTimeout has not been defined")
        }

        function s(t) {
            if (n === setTimeout) return setTimeout(t, 0);
            if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
            try {
                return n(t, 0)
            } catch (e) {
                try {
                    return n.call(null, t, 0)
                } catch (e) {
                    return n.call(this, t, 0)
                }
            }
        }! function() {
            try {
                n = "function" == typeof setTimeout ? setTimeout : i
            } catch (t) {
                n = i
            }
            try {
                r = "function" == typeof clearTimeout ? clearTimeout : c
            } catch (t) {
                r = c
            }
        }();
        var a, u = [],
            l = !1,
            f = -1;

        function h() {
            l && a && (l = !1, a.length ? u = a.concat(u) : f = -1, u.length && d())
        }

        function d() {
            if (!l) {
                var t = s(h);
                l = !0;
                for (var e = u.length; e;) {
                    for (a = u, u = []; ++f < e;) a && a[f].run();
                    f = -1, e = u.length
                }
                a = null, l = !1,
                    function(t) {
                        if (r === clearTimeout) return clearTimeout(t);
                        if ((r === c || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
                        try {
                            r(t)
                        } catch (e) {
                            try {
                                return r.call(null, t)
                            } catch (e) {
                                return r.call(this, t)
                            }
                        }
                    }(t)
            }
        }

        function p(t, e) {
            this.fun = t, this.array = e
        }

        function g() {}
        o.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            u.push(new p(t, e)), 1 !== u.length || l || s(d)
        }, p.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = g, o.addListener = g, o.once = g, o.off = g, o.removeListener = g, o.removeAllListeners = g, o.emit = g, o.prependListener = g, o.prependOnceListener = g, o.listeners = function(t) {
            return []
        }, o.binding = function(t) {
            throw new Error("process.binding is not supported")
        }, o.cwd = function() {
            return "/"
        }, o.chdir = function(t) {
            throw new Error("process.chdir is not supported")
        }, o.umask = function() {
            return 0
        }
    },
    223: function(t, e, n) {
        "use strict";
        e.a = function(t, e) {
            for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t););
            return t
        }
    },
    224: function(t, e, n) {
        "use strict";
        var r = n(213),
            o = n(142);
        e.a = function(t, e) {
            return t && Object(r.a)(t, e, o.a)
        }
    },
    226: function(t, e, n) {
        "use strict";
        (function(t) {
            var r = n(168),
                o = "object" == typeof exports && exports && !exports.nodeType && exports,
                i = o && "object" == typeof t && t && !t.nodeType && t,
                c = i && i.exports === o && r.a.process,
                s = function() {
                    try {
                        return i && i.require && i.require("util").types || c && c.binding && c.binding("util")
                    } catch (t) {}
                }();
            e.a = s
        }).call(this, n(198)(t))
    },
    236: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return o
        }));
        var r = n(4);
        const o = Object(r.p)(() => browser, () => window.browser);
        window.edge = window.browser, window.chrome = window.chrome
    },
    239: function(t, e, n) {
        "use strict";
        var r = n(173);
        e.a = function(t, e, n) {
            var o = null == t ? void 0 : Object(r.a)(t, e);
            return void 0 === o ? n : o
        }
    },
    243: function(t, e, n) {
        "use strict";
        e.a = function(t, e) {
            for (var n = -1, r = null == t ? 0 : t.length, o = Array(r); ++n < r;) o[n] = e(t[n], n, t);
            return o
        }
    },
    245: function(t, e, n) {
        "use strict";
        var r = n(108),
            o = n(143),
            i = n(31),
            c = function(t) {
                return t == t && !Object(i.a)(t)
            },
            s = n(142),
            a = function(t, e) {
                return function(n) {
                    return null != n && n[t] === e && (void 0 !== e || t in Object(n))
                }
            },
            u = function(t) {
                var e = function(t) {
                    for (var e = Object(s.a)(t), n = e.length; n--;) {
                        var r = e[n],
                            o = t[r];
                        e[n] = [r, o, c(o)]
                    }
                    return e
                }(t);
                return 1 == e.length && e[0][2] ? a(e[0][0], e[0][1]) : function(n) {
                    return n === t || function(t, e, n, i) {
                        var c = n.length,
                            s = c,
                            a = !i;
                        if (null == t) return !s;
                        for (t = Object(t); c--;) {
                            var u = n[c];
                            if (a && u[2] ? u[1] !== t[u[0]] : !(u[0] in t)) return !1
                        }
                        for (; ++c < s;) {
                            var l = (u = n[c])[0],
                                f = t[l],
                                h = u[1];
                            if (a && u[2]) {
                                if (void 0 === f && !(l in t)) return !1
                            } else {
                                var d = new r.a;
                                if (i) var p = i(f, h, l, t, e, d);
                                if (!(void 0 === p ? Object(o.a)(h, f, 3, i, d) : p)) return !1
                            }
                        }
                        return !0
                    }(n, t, e)
                }
            },
            l = n(239),
            f = function(t, e) {
                return null != t && e in Object(t)
            },
            h = n(176),
            d = n(99),
            p = n(27),
            g = n(126),
            b = n(125),
            m = n(98),
            v = function(t, e) {
                return null != t && function(t, e, n) {
                    for (var r = -1, o = (e = Object(h.a)(e, t)).length, i = !1; ++r < o;) {
                        var c = Object(m.a)(e[r]);
                        if (!(i = null != t && n(t, c))) break;
                        t = t[c]
                    }
                    return i || ++r != o ? i : !!(o = null == t ? 0 : t.length) && Object(b.a)(o) && Object(g.a)(c, o) && (Object(p.a)(t) || Object(d.a)(t))
                }(t, e, f)
            },
            y = n(141),
            _ = n(117),
            w = n(173),
            j = function(t) {
                return Object(y.a)(t) ? function(t) {
                    return function(e) {
                        return null == e ? void 0 : e[t]
                    }
                }(Object(m.a)(t)) : function(t) {
                    return function(e) {
                        return Object(w.a)(e, t)
                    }
                }(t)
            };
        e.a = function(t) {
            return "function" == typeof t ? t : null == t ? _.a : "object" == typeof t ? Object(p.a)(t) ? function(t, e) {
                return Object(y.a)(t) && c(e) ? a(Object(m.a)(t), e) : function(n) {
                    var r = Object(l.a)(n, t);
                    return void 0 === r && r === e ? v(n, t) : Object(o.a)(e, r, 3)
                }
            }(t[0], t[1]) : u(t) : j(t)
        }
    },
    25: function(t, e, n) {
        "use strict";
        var r;
        n.d(e, "a", (function() {
                return r
            })), n.d(e, "b", (function() {
                return i
            })),
            function(t) {
                t.TRACE = "TRACE", t.DEBUG = "DEBUG", t.INFO = "INFO", t.WARN = "WARN", t.ERROR = "ERROR", t.FATAL = "FATAL"
            }(r || (r = {}));
        const o = {
            [r.TRACE]: 1,
            [r.DEBUG]: 2,
            [r.INFO]: 3,
            [r.WARN]: 4,
            [r.ERROR]: 5,
            [r.FATAL]: 6
        };

        function i(t) {
            return o[t] || 0
        }
    },
    254: function(t, e, n) {
        "use strict";
        var r = n(223),
            o = n(211),
            i = n(224),
            c = n(245),
            s = n(157),
            a = n(27),
            u = n(82),
            l = n(86),
            f = n(31),
            h = n(91);
        e.a = function(t, e, n) {
            var d = Object(a.a)(t),
                p = d || Object(u.a)(t) || Object(h.a)(t);
            if (e = Object(c.a)(e, 4), null == n) {
                var g = t && t.constructor;
                n = p ? d ? new g : [] : Object(f.a)(t) && Object(l.a)(g) ? Object(o.a)(Object(s.a)(t)) : {}
            }
            return (p ? r.a : i.a)(t, (function(t, r, o) {
                return e(n, t, r, o)
            })), n
        }
    },
    255: function(t, e, n) {
        "use strict";
        var r = n(143);
        e.a = function(t, e) {
            return Object(r.a)(t, e)
        }
    },
    256: function(t, e, n) {
        "use strict";
        var r = n(128),
            o = n(182),
            i = Object(o.a)(Object.keys, Object),
            c = Object.prototype.hasOwnProperty;
        e.a = function(t) {
            if (!Object(r.a)(t)) return i(t);
            var e = [];
            for (var n in Object(t)) c.call(t, n) && "constructor" != n && e.push(n);
            return e
        }
    },
    264: function(t, e, n) {
        "use strict";

        function r(t, e) {
            return [].concat(...e.map(t))
        }

        function o(t) {
            return [].concat(...t)
        }

        function i(t) {
            return [...new Set(t)]
        }

        function c(t, e) {
            const n = new Set;
            return e.filter(e => {
                const r = t(e),
                    o = !n.has(r);
                return n.add(r), o
            })
        }

        function s(t, e, n) {
            const r = [e];
            let o = e;
            for (let e = 0; e < n.length; e++) o = t(o, n[e]), r.push(o);
            return r
        }

        function a(t) {
            return t.reduce((t, e) => e > t ? e : t, t[0])
        }

        function u(t, e) {
            return 0 === t.length ? void 0 : t.reduce((t, n) => {
                const r = e(n);
                return r > t[1] ? [n, r] : t
            }, [t[0], e(t[0])])[0]
        }

        function l(t) {
            return t.slice().reverse()
        }

        function f(t, e) {
            const n = [],
                r = [];
            let o = 0,
                i = 0;
            for (let c = 0; c < e.length; c++) t(e[c]) ? n[o++] = e[c] : r[i++] = e[c];
            return [n, r]
        }

        function h(t, e) {
            if (t < 1) throw new Error("Invalid chunk size, expected > 0");
            if (0 === e.length) return [
                []
            ];
            const n = [];
            for (let r = 0; r < Math.ceil(e.length / t); r++) n.push(e.slice(r * t, (r + 1) * t));
            return n
        }

        function d(t, e) {
            const n = [];
            let r = t(e);
            for (; void 0 !== r;) n.push(r[0]), r = t(r[1]);
            return n
        }

        function p(t, e) {
            return void 0 !== e ? Array.from(Array(e - t), (e, n) => n + t) : Array.from(Array(t), (t, e) => e)
        }

        function g(t, e = ((t, e) => t === e)) {
            if (0 === t.length) return [];
            const n = [
                [t[0]]
            ];
            for (let r = 1; r < t.length; r += 1) {
                const o = n[n.length - 1][0],
                    i = t[r];
                e(o, i) ? n[n.length - 1].push(i) : n.push([i])
            }
            return n
        }
        n.r(e), n.d(e, "flatMap", (function() {
            return r
        })), n.d(e, "flatten", (function() {
            return o
        })), n.d(e, "distinct", (function() {
            return i
        })), n.d(e, "distinctBy", (function() {
            return c
        })), n.d(e, "scan", (function() {
            return s
        })), n.d(e, "maximum", (function() {
            return a
        })), n.d(e, "maximumBy", (function() {
            return u
        })), n.d(e, "reverse", (function() {
            return l
        })), n.d(e, "partition", (function() {
            return f
        })), n.d(e, "chunkBySize", (function() {
            return h
        })), n.d(e, "unfold", (function() {
            return d
        })), n.d(e, "range", (function() {
            return p
        })), n.d(e, "groupBy", (function() {
            return g
        }))
    },
    268: function(t, e, n) {
        "use strict";
        e.a = function(t) {
            return function(e) {
                return t(e)
            }
        }
    },
    27: function(t, e, n) {
        "use strict";
        var r = Array.isArray;
        e.a = r
    },
    271: function(t, e, n) {
        "use strict";
        e.a = function(t, e) {
            for (var n = -1, r = e.length, o = t.length; ++n < r;) t[o + n] = e[n];
            return t
        }
    },
    272: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return a
        })), n.d(e, "b", (function() {
            return l
        }));
        var r = n(17),
            o = n(38),
            i = n(10);

        function c(t) {
            const e = t.reduce((t, e) => {
                const n = t.get(e.category);
                return n ? n.count++ : t.set(e.category, {
                    group: e.group,
                    categoryHuman: e.categoryHuman,
                    count: 1
                }), t
            }, new Map);
            return Array.from(e.values()).sort((t, e) => e.count - t.count)
        }

        function s(t) {
            const e = new Map;
            for (const {
                    isFree: n,
                    cardLayout: {
                        group: r
                    }
                } of t) {
                e.has(r) || e.set(r, {
                    lensName: r,
                    free: 0,
                    premium: 0
                });
                const t = e.get(r);
                t && (t[n ? "free" : "premium"] += 1)
            }
            return Array.from(e.values()).sort((t, e) => e.premium - t.premium)
        }

        function a(t) {
            const e = [{
                title: "Grammar and punctuation errors",
                lensesName: ["Grammar", "Punctuation", "Conventions"]
            }, {
                title: "Inconsistent punctuation or formatting",
                lensesName: ["Consistency"]
            }, {
                title: "Hard-to-read sentences",
                lensesName: ["Readability"]
            }, {
                title: "Monotonous passages",
                lensesName: ["Sentence Variety"]
            }, {
                title: "Confusing sentences or paragraphs",
                lensesName: ["Clarity", "Sentence structure"]
            }, {
                title: "Unnatural phrasing",
                lensesName: ["Fluency"]
            }, {
                title: "Ineffective vocabulary",
                lensesName: ["Vocabulary", "Variety"]
            }, {
                title: "Wordiness",
                lensesName: ["Conciseness"]
            }, {
                title: "Hedging language",
                lensesName: ["Confidence"]
            }, {
                title: "Impoliteness",
                lensesName: ["Politeness"]
            }, {
                title: "Insensitive or non-inclusive language",
                lensesName: ["Sensitivity"]
            }, {
                title: "Inappropriate tone or formality level",
                lensesName: ["Formality"]
            }].reduce((t, e) => (e.lensesName.forEach(n => t[n] = e.title), t), {});
            return s(t).map(t => Object.assign(Object.assign({}, t), {
                friendName: e[t.lensName]
            })).sort((t, e) => e.premium - t.premium || t.friendName.localeCompare(e.friendName))
        }

        function u(t) {
            return btoa(JSON.stringify(t))
        }

        function l(t) {
            const e = r.a().appConfig.url,
                n = t.showSinglePlanComparisonPage ? e.plansEnterprise : t.showPlanComparison ? e.planComparison : e.upgrade;
            window.open(Object(o.a)(n, [...t.isFromEmail ? [Object(o.b)("isFromEmail", "1")] : [], Object(o.b)("alerts", u(c(t.currentAlerts))), Object(o.b)("lensedAlerts", u(s(t.currentAlerts))), Object(o.b)("app_type", "popup"), Object(o.b)("browser", Object(i.b)()), ...Object(o.q)({
                medium: "internal",
                source: t.isAnonymousUser ? "signupHook" : "upHook",
                campaign: t.forceUtmCampaign ? t.forceUtmCampaign : t.isAnonymousUser ? "extensionPremiumCta" : "extensionGButton"
            })]))
        }
    },
    276: function(t, e) {
        t.exports = {
            toU8IntArray: function(t) {
                for (var e = [], n = [], r = 0; r < t.length; r++) {
                    var o, i = t.charCodeAt(r);
                    for (n.length = 0;
                        (o = 255 & i) || i;) n.push(o), i >>>= 8;
                    e = e.concat(n.reverse())
                }
                return e
            },
            intToUnsignedHex: function(t) {
                for (var e, n = [];
                    (e = 65535 & t) || t;) e = e.toString(16), e = "0000".slice(e.length) + e, n.push(e), t >>>= 16;
                return n.reverse().join("")
            }
        }
    },
    277: function(t, e, n) {
        "use strict";
        e.a = function() {
            return !1
        }
    },
    278: function(t, e, n) {
        "use strict";
        e.a = function(t, e) {
            return t.has(e)
        }
    },
    28: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return s
        }));
        var r = n(42),
            o = n(174),
            i = n(94),
            c = n(138),
            s = function() {
                function t(t) {
                    this.closed = !1, this._parentOrParents = null, this._subscriptions = null, t && (this._unsubscribe = t)
                }
                var e;
                return t.prototype.unsubscribe = function() {
                    var e;
                    if (!this.closed) {
                        var n = this._parentOrParents,
                            s = this._unsubscribe,
                            u = this._subscriptions;
                        if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, n instanceof t) n.remove(this);
                        else if (null !== n)
                            for (var l = 0; l < n.length; ++l) n[l].remove(this);
                        if (Object(i.a)(s)) try {
                            s.call(this)
                        } catch (t) {
                            e = t instanceof c.a ? a(t.errors) : [t]
                        }
                        if (Object(r.a)(u)) {
                            l = -1;
                            for (var f = u.length; ++l < f;) {
                                var h = u[l];
                                if (Object(o.a)(h)) try {
                                    h.unsubscribe()
                                } catch (t) {
                                    e = e || [], t instanceof c.a ? e = e.concat(a(t.errors)) : e.push(t)
                                }
                            }
                        }
                        if (e) throw new c.a(e)
                    }
                }, t.prototype.add = function(e) {
                    var n = e;
                    if (!e) return t.EMPTY;
                    switch (typeof e) {
                        case "function":
                            n = new t(e);
                        case "object":
                            if (n === this || n.closed || "function" != typeof n.unsubscribe) return n;
                            if (this.closed) return n.unsubscribe(), n;
                            if (!(n instanceof t)) {
                                var r = n;
                                (n = new t)._subscriptions = [r]
                            }
                            break;
                        default:
                            throw new Error("unrecognized teardown " + e + " added to Subscription.")
                    }
                    var o = n._parentOrParents;
                    if (null === o) n._parentOrParents = this;
                    else if (o instanceof t) {
                        if (o === this) return n;
                        n._parentOrParents = [o, this]
                    } else {
                        if (-1 !== o.indexOf(this)) return n;
                        o.push(this)
                    }
                    var i = this._subscriptions;
                    return null === i ? this._subscriptions = [n] : i.push(n), n
                }, t.prototype.remove = function(t) {
                    var e = this._subscriptions;
                    if (e) {
                        var n = e.indexOf(t); - 1 !== n && e.splice(n, 1)
                    }
                }, t.EMPTY = ((e = new t).closed = !0, e), t
            }();

        function a(t) {
            return t.reduce((function(t, e) {
                return t.concat(e instanceof c.a ? e.errors : e)
            }), [])
        }
    },
    291: function(t, e, n) {
        "use strict";
        var r, o = n(72),
            i = n(58),
            c = n(43),
            s = n(255),
            a = function(t, e, n, r) {
                return new(n || (n = Promise))((function(o, i) {
                    function c(t) {
                        try {
                            a(r.next(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function s(t) {
                        try {
                            a(r.throw(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function a(t) {
                        var e;
                        t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                            t(e)
                        }))).then(c, s)
                    }
                    a((r = r.apply(t, e || [])).next())
                }))
            };
        ! function(t) {
            t[t.nonEmptyMigration = 0] = "nonEmptyMigration", t[t.emptyMigration = 1] = "emptyMigration"
        }(r || (r = {}));
        class u {
            constructor(t, e, n, r = []) {
                var o, i;
                this._name = t, this._source = e, this._destination = n, this._destValuesToKeep = r, this._migrationFlagSuccessfulValue = "ok", this._migrationFlagUniqueKey = "104ccd8c-9919-9ae4-931f-782fb197486c", this._migrationFlagKey = `__migration-${this._migrationFlagUniqueKey}:(${this._name})`, this._migrationInProgress = !1, this.migrationAwareDestination = (o = this._destination, i = t => t === this._migrationFlagKey, {
                    get: o.get.bind(o),
                    set: o.set.bind(o),
                    getAll: o.getAll.bind(o),
                    remove: o.remove.bind(o),
                    removeAll() {
                        return a(this, void 0, void 0, (function*() {
                            const t = yield o.getAll();
                            yield o.removeAll(), yield Promise.all(Object.keys(t).filter(i).map(e => o.set(e, t[e])))
                        }))
                    }
                })
            }
            _getMigrated() {
                return this._destination.get(this._migrationFlagKey).then(t => t === this._migrationFlagSuccessfulValue)
            }
            _setMigrated() {
                return a(this, void 0, void 0, (function*() {
                    yield this._destination.set(this._migrationFlagKey, this._migrationFlagSuccessfulValue);
                    const t = yield this._destination.get(this._migrationFlagKey);
                    if (t !== this._migrationFlagSuccessfulValue) throw new Error(`Could not verify status write, actual value: ${t}`)
                }))
            }
            _runMigration() {
                return a(this, void 0, void 0, (function*() {
                    Object(i.b)(!this._migrationInProgress, "migration already in progress"), this._migrationInProgress = !0;
                    try {
                        const t = yield this._source.getAll(), e = 0 === Object.keys(t).length;
                        if (yield Promise.all(this._destValuesToKeep.map(e => this._destination.get(e).then(n => {
                                null != n && (t[e] = n)
                            }))), yield this._destination.removeAll(), yield Promise.all(Object.keys(t).filter(e => null != t[e]).map(e => this._destination.set(e, t[e]))), !Object(s.a)(t, yield this._destination.getAll())) throw new Error("Could not verify write");
                        return this._migrationInProgress = !1, e ? r.emptyMigration : r.nonEmptyMigration
                    } catch (t) {
                        throw this._migrationInProgress = !1, t
                    }
                }))
            }
            ensureMigrationCompleted() {
                return a(this, void 0, void 0, (function*() {
                    if (yield this._getMigrated()) return c.a.alreadyMigrated; {
                        const t = yield this._runMigration();
                        switch (yield this._setMigrated(), t) {
                            case r.nonEmptyMigration:
                                return c.a.success;
                            case r.emptyMigration:
                                return c.a.successWithEmpty;
                            default:
                                throw new Error(`Match not exhaustive: ${t}`)
                        }
                    }
                }))
            }
        }
        n.d(e, "a", (function() {
            return l
        }));
        var l, f = function(t, e, n, r) {
            return new(n || (n = Promise))((function(o, i) {
                function c(t) {
                    try {
                        a(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function s(t) {
                    try {
                        a(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function a(t) {
                    var e;
                    t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                        t(e)
                    }))).then(c, s)
                }
                a((r = r.apply(t, e || [])).next())
            }))
        };
        ! function(t) {
            t.windowLocalStorage = {
                get: t => o.a.sync(() => window.localStorage.getItem(t)),
                set: (t, e) => o.a.sync(() => window.localStorage.setItem(t, e)),
                getAll: () => o.a.sync(() => {
                    const t = {};
                    return Object.keys(window.localStorage).forEach(e => {
                        t[e] = window.localStorage.getItem(e)
                    }), t
                }),
                remove: t => o.a.sync(() => window.localStorage.removeItem(t)),
                removeAll: () => o.a.sync(() => window.localStorage.clear())
            }, t.MigrationAwarePreferencesApiImpl = class {
                constructor(e) {
                    this._firefox = e, this._migrationCompleted = Promise.resolve(!1), this._ensureMigrationCompletedCalled = !1, this.get = this._getMigrationAwareMethod("get"), this.set = this._getMigrationAwareMethod("set"), this.getAll = this._getMigrationAwareMethod("getAll"), this.remove = this._getMigrationAwareMethod("remove"), this.removeAll = this._getMigrationAwareMethod("removeAll"), this.browserStorageLocal = {
                        get: t => f(this, void 0, void 0, (function*() {
                            const e = yield this._firefox.storage.local.get(t);
                            return e.hasOwnProperty(t) ? e[t] : null
                        })),
                        set: (t, e) => this._firefox.storage.local.set({
                            [t]: e
                        }),
                        getAll: () => this._firefox.storage.local.get(null),
                        remove: t => this._firefox.storage.local.remove(t),
                        removeAll: () => f(this, void 0, void 0, (function*() {
                            yield this._firefox.storage.local.clear()
                        }))
                    }, this._migration = new u("firefoxLocalStorageToExtApi", t.windowLocalStorage, this.browserStorageLocal, ["version"])
                }
                ensureMigrationCompleted() {
                    this._ensureMigrationCompletedCalled = !0;
                    const t = o.a.createCompletionSource();
                    return this._migrationCompleted = t.promise, this._migration.ensureMigrationCompleted().then(e => (t.resolve(!0), Promise.resolve(e)), e => (t.resolve(!1), Promise.reject(e)))
                }
                _getMigrationAwareMethod(e) {
                    return (...n) => (Object(i.b)(!0 === this._ensureMigrationCompletedCalled, "supposed to run data migration before accessing prefs with web-extensions API"), this._migrationCompleted.then(r => (r ? this._migration.migrationAwareDestination : t.windowLocalStorage)[e](...n)))
                }
            }
        }(l || (l = {}))
    },
    292: function(t, e, n) {
        "use strict";
        var r = n(114);

        function o(t) {
            var e = -1,
                n = null == t ? 0 : t.length;
            for (this.__data__ = new r.a; ++e < n;) this.add(t[e])
        }
        o.prototype.add = o.prototype.push = function(t) {
            return this.__data__.set(t, "__lodash_hash_undefined__"), this
        }, o.prototype.has = function(t) {
            return this.__data__.has(t)
        }, e.a = o
    },
    31: function(t, e, n) {
        "use strict";
        e.a = function(t) {
            var e = typeof t;
            return null != t && ("object" == e || "function" == e)
        }
    },
    314: function(t, e, n) {
        "use strict";
        var r = n(38),
            o = n(16),
            i = n(14),
            c = n(72),
            s = n(4),
            a = n(272),
            u = n(12);
        class l {
            constructor() {
                this._log = u.a.create("extension-api.alarms.stub"), this._warning = "Method is not implemented"
            }
            create(t, e) {
                return this._log.warn(this._warning), {
                    dispose: s.l
                }
            }
        }
        class f extends l {
            create(t, e) {
                let n = null;
                const r = setTimeout(() => {
                    e.period && (n = setInterval(t, e.period)), t()
                }, e.delay);
                return {
                    dispose: () => {
                        clearTimeout(r), null !== n && clearInterval(n)
                    }
                }
            }
        }

        function h(t, e) {
            chrome.runtime.lastError ? e(chrome.runtime.lastError) : t()
        }
        class d {
            constructor() {
                this._log = u.a.create("extension-api.managed-storage.validator")
            }
            validate(t, e) {
                switch (t) {
                    case "RestrictOrganizationId":
                        return "string" == typeof e && e.length > 0 && /^[a-z0-9_-]+$/i.test(e);
                    default:
                        return this._log.warn(`Unknown key: ${t}`), !1
                }
            }
        }
        class p {
            constructor() {
                this._log = u.a.create("extension-api.managed-storage.chrome"), this._validator = new d
            }
            get(t) {
                return new Promise((e, n) => {
                    chrome.storage.managed.get(t, r => {
                        h(() => {
                            const n = r[t];
                            void 0 === n || this._validator.validate(t, n) ? e(n) : (this._log.warn(`Invalid value for "${t}": ${JSON.stringify(r[t])}`), e(void 0))
                        }, e => {
                            this._log.error(`Could not get "${t}"`, e), n(e)
                        })
                    })
                })
            }
        }
        var g = n(190),
            b = n(199);
        class m {
            constructor() {
                this.kind = "web-extension"
            }
            open(t, e) {
                return c.a.create((n, r) => {
                    chrome.tabs.create({
                        url: t,
                        active: e
                    }, t => {
                        h(() => n(t), r)
                    })
                })
            }
            updateCurrent(t) {
                return c.a.create((e, n) => {
                    chrome.tabs.update({
                        url: t
                    }, t => {
                        h(() => e(t), n)
                    })
                })
            }
            getActiveTab() {
                return c.a.create((t, e) => {
                    const n = chrome.tabs;
                    n.query({
                        active: !0,
                        lastFocusedWindow: !0
                    }, r => {
                        h(() => {
                            r && r.length ? t(r[0]) : n.query({
                                active: !0
                            }, n => {
                                h(() => {
                                    t(n[0])
                                }, e)
                            })
                        }, e)
                    })
                })
            }
            getAllTabs() {
                return c.a.create((t, e) => chrome.tabs.query({}, n => h(() => t(n), e)))
            }
            getActiveTabUrl() {
                return c.a.create((t, e) => this.getActiveTab().then(n => h(() => t(n && n.url), e)))
            }
            onActiveTabChange(t, e) {
                const n = n => {
                    h(() => {
                        n && t(n)
                    }, e)
                };
                chrome.tabs.onActivated.addListener(t => chrome.tabs.get(t.tabId, t => n(t))), chrome.tabs.onUpdated.addListener((t, e) => {
                    this.getActiveTab().then(r => {
                        r && r.id === t && (e.url || e.favIconUrl || "complete" === e.status) && chrome.tabs.get(t, t => n(t))
                    })
                }), chrome.windows.onFocusChanged.addListener(t => chrome.tabs.query({
                    active: !0,
                    windowId: t,
                    lastFocusedWindow: !0
                }, t => n(t[0]))), this.getActiveTab().then(t => n(t))
            }
            tabUrlChange() {
                return new i.a(t => {
                    const e = (e, n, r) => {
                        "complete" === n.status && t.next({
                            id: e,
                            url: r.url
                        })
                    };
                    return chrome.tabs.onUpdated.addListener(e), () => chrome.tabs.onUpdated.removeListener(e)
                })
            }
            reload(t) {
                return c.a.create((e, n) => {
                    const r = () => h(() => e(), n);
                    t ? chrome.tabs.reload(t, {}, r) : chrome.tabs.reload(r)
                })
            }
        }
        var v = n(17);
        const y = () => fetch(v.a().appConfig.url.pageConfigUrl, {
            credentials: "include"
        }).then(t => t.ok ? t.json() : t.text().then(e => {
            throw {
                name: "RequestError",
                body: e,
                statusCode: t.status,
                message: t.statusText
            }
        })).then(t => {
            if ("string" != typeof t && t && t.error) throw new Error(t.error);
            return t
        });
        var _ = n(291);
        n.d(e, "a", (function() {
            return A
        }));
        class w {
            constructor(t) {
                this.port = chrome.runtime.connect({
                    name: t
                })
            }
            onMessage(t) {
                this.port.onMessage.addListener(t)
            }
            onDisconnect(t) {
                this.port.onDisconnect.addListener(t)
            }
            postMessage(t) {
                this.port.postMessage(t)
            }
        }
        class j {
            constructor(t) {
                this._port = t, this.sender = {};
                const {
                    sender: e,
                    name: n
                } = t;
                this.name = n, e && (this.sender.url = e.url, e.tab && e.tab.url && e.tab.id && (this.sender.tab = {
                    url: e.tab.url,
                    id: e.tab.id
                }))
            }
            onMessage(t) {
                this._port.onMessage.addListener(t)
            }
            onDisconnect(t) {
                this._port.onDisconnect.addListener(t)
            }
            postMessage(t) {
                this._port.postMessage(t)
            }
        }
        class O {
            constructor(t) {
                this.alarms = new f, this.managedStorage = new p, this.tabs = new m, this.notification = {
                    kind: "web-extension",
                    create: t => c.a.create((e, n) => {
                        const r = chrome.notifications,
                            c = Object(o.r)();
                        r.create(c, Object.assign({
                            type: "basic"
                        }, t), () => {
                            h(() => {
                                const t = new i.a(t => {
                                        const e = e => e === c && t.next(e);
                                        return r.onClicked.addListener(e), () => r.onClicked.removeListener(e)
                                    }),
                                    n = new i.a(t => {
                                        const e = (e, n) => e === c && t.next({
                                            id: e,
                                            buttonIndex: n
                                        });
                                        return r.onButtonClicked.addListener(e), () => r.onButtonClicked.removeListener(e)
                                    }),
                                    o = new i.a(t => {
                                        const e = (e, n) => e === c && t.next({
                                            id: e,
                                            byUser: n
                                        });
                                        return r.onClosed.addListener(e), () => r.onClosed.removeListener(e)
                                    });
                                e({
                                    id: c,
                                    click: t,
                                    buttonClick: n,
                                    close: o
                                })
                            }, n)
                        })
                    }),
                    clear: t => c.a.create((e, n) => {
                        chrome.notifications.clear(t, t => {
                            h(() => e(t), n)
                        })
                    })
                }, this.cookies = {
                    kind: "web-extension",
                    get: t => c.a.create((e, n) => chrome.cookies.get(t, t => h(() => e(t), n))),
                    remove: t => new Promise((e, n) => chrome.cookies.remove(t, () => h(() => e(null), n))),
                    getAll: t => c.a.create((e, n) => chrome.cookies.getAll(t, t => h(() => e(t), n))),
                    set: t => c.a.create((e, n) => chrome.cookies.set(t, t => h(() => e(t), n))),
                    watch(t, e) {
                        chrome.cookies.onChanged.addListener(n => {
                            const {
                                cookie: r,
                                cause: o
                            } = n;
                            !r || !r.name || t.path && t.path !== r.path || t.name !== r.name || t.domain && -1 === r.domain.indexOf(t.domain) || ("explicit" === o && e(r), "expired_overwrite" === o && e())
                        })
                    }
                }, this.preferences = _.a.windowLocalStorage, this.button = {
                    kind: "web-extension",
                    setBadge(t) {
                        chrome.browserAction.setBadgeText({
                            text: t
                        })
                    },
                    setIconByName(t) {
                        const e = t ? "-" + t : "";
                        chrome.browserAction.setIcon({
                            path: {
                                16: `./src/icon/icon16${e}.png`,
                                32: `./src/icon/icon32${e}.png`
                            }
                        })
                    },
                    setBadgeBackgroundColor(t) {
                        chrome.browserAction.setBadgeBackgroundColor({
                            color: t
                        })
                    }
                }, this.management = {
                    uninstallSelf() {
                        chrome.management.uninstallSelf()
                    }
                }, this._baseUrl = Object(s.p)(() => chrome.extension.getURL(""), t => null), this.fetchBlacklistConfig = () => y(), this.getUrl = t => this._baseUrl ? this._baseUrl + t : chrome.extension.getURL(t), this.openUrl = t => this.tabs.open(t, !0), this.openPopupSubscriptionDialog = t => this.openUrl(Object(r.p)(t.utmSource, t.utmCampaign)), this.openSubscriptionDialog = t => Object(a.b)(t), this.isExtensionUrl = (t, e) => this.getUrl(t) === e, this.reload = () => chrome.runtime.reload(), this.message = t ? new g.a(t => chrome.runtime.onConnect.addListener(e => t(new j(e))), this.tabs.getActiveTab.bind(this.tabs), this.tabs.getAllTabs.bind(this.tabs)) : new b.a(t => new w(t))
            }
        }

        function A(t) {
            return new O(t)
        }
    },
    327: function(t, e, n) {
        (function(t) {
            function n(t, e) {
                for (var n = 0, r = t.length - 1; r >= 0; r--) {
                    var o = t[r];
                    "." === o ? t.splice(r, 1) : ".." === o ? (t.splice(r, 1), n++) : n && (t.splice(r, 1), n--)
                }
                if (e)
                    for (; n--; n) t.unshift("..");
                return t
            }

            function r(t, e) {
                if (t.filter) return t.filter(e);
                for (var n = [], r = 0; r < t.length; r++) e(t[r], r, t) && n.push(t[r]);
                return n
            }
            e.resolve = function() {
                for (var e = "", o = !1, i = arguments.length - 1; i >= -1 && !o; i--) {
                    var c = i >= 0 ? arguments[i] : t.cwd();
                    if ("string" != typeof c) throw new TypeError("Arguments to path.resolve must be strings");
                    c && (e = c + "/" + e, o = "/" === c.charAt(0))
                }
                return (o ? "/" : "") + (e = n(r(e.split("/"), (function(t) {
                    return !!t
                })), !o).join("/")) || "."
            }, e.normalize = function(t) {
                var i = e.isAbsolute(t),
                    c = "/" === o(t, -1);
                return (t = n(r(t.split("/"), (function(t) {
                    return !!t
                })), !i).join("/")) || i || (t = "."), t && c && (t += "/"), (i ? "/" : "") + t
            }, e.isAbsolute = function(t) {
                return "/" === t.charAt(0)
            }, e.join = function() {
                var t = Array.prototype.slice.call(arguments, 0);
                return e.normalize(r(t, (function(t, e) {
                    if ("string" != typeof t) throw new TypeError("Arguments to path.join must be strings");
                    return t
                })).join("/"))
            }, e.relative = function(t, n) {
                function r(t) {
                    for (var e = 0; e < t.length && "" === t[e]; e++);
                    for (var n = t.length - 1; n >= 0 && "" === t[n]; n--);
                    return e > n ? [] : t.slice(e, n - e + 1)
                }
                t = e.resolve(t).substr(1), n = e.resolve(n).substr(1);
                for (var o = r(t.split("/")), i = r(n.split("/")), c = Math.min(o.length, i.length), s = c, a = 0; a < c; a++)
                    if (o[a] !== i[a]) {
                        s = a;
                        break
                    } var u = [];
                for (a = s; a < o.length; a++) u.push("..");
                return (u = u.concat(i.slice(s))).join("/")
            }, e.sep = "/", e.delimiter = ":", e.dirname = function(t) {
                if ("string" != typeof t && (t += ""), 0 === t.length) return ".";
                for (var e = t.charCodeAt(0), n = 47 === e, r = -1, o = !0, i = t.length - 1; i >= 1; --i)
                    if (47 === (e = t.charCodeAt(i))) {
                        if (!o) {
                            r = i;
                            break
                        }
                    } else o = !1;
                return -1 === r ? n ? "/" : "." : n && 1 === r ? "/" : t.slice(0, r)
            }, e.basename = function(t, e) {
                var n = function(t) {
                    "string" != typeof t && (t += "");
                    var e, n = 0,
                        r = -1,
                        o = !0;
                    for (e = t.length - 1; e >= 0; --e)
                        if (47 === t.charCodeAt(e)) {
                            if (!o) {
                                n = e + 1;
                                break
                            }
                        } else -1 === r && (o = !1, r = e + 1);
                    return -1 === r ? "" : t.slice(n, r)
                }(t);
                return e && n.substr(-1 * e.length) === e && (n = n.substr(0, n.length - e.length)), n
            }, e.extname = function(t) {
                "string" != typeof t && (t += "");
                for (var e = -1, n = 0, r = -1, o = !0, i = 0, c = t.length - 1; c >= 0; --c) {
                    var s = t.charCodeAt(c);
                    if (47 !== s) - 1 === r && (o = !1, r = c + 1), 46 === s ? -1 === e ? e = c : 1 !== i && (i = 1) : -1 !== e && (i = -1);
                    else if (!o) {
                        n = c + 1;
                        break
                    }
                }
                return -1 === e || -1 === r || 0 === i || 1 === i && e === r - 1 && e === n + 1 ? "" : t.slice(e, r)
            };
            var o = "b" === "ab".substr(-1) ? function(t, e, n) {
                return t.substr(e, n)
            } : function(t, e, n) {
                return e < 0 && (e = t.length + e), t.substr(e, n)
            }
        }).call(this, n(217))
    },
    354: function(t, e, n) {
        "use strict";
        var r = n(276);

        function o(t, e) {
            return t[e] << 8 | t[e + 1]
        }
        t.exports = {
            hash: function(t) {
                var e, n = r.toU8IntArray(t + ""),
                    i = 0;
                if (!t) return i.toString(16);
                var c = n.length,
                    s = 0;
                e = 3 & c, c >>>= 2;
                for (var a = 0; a < c; a++) i = (i += o(n, s)) << 16 ^ o(n, s + 2) << 11 ^ i, s += 4, i += i >> 11;
                switch (e) {
                    case 3:
                        i += o(n, s), i ^= i << 16, i ^= n[s + 2] << 18, i += i >> 11;
                        break;
                    case 2:
                        i += o(n, s), i ^= i << 11, i += i >> 17;
                        break;
                    case 1:
                        i += n[s], i ^= i << 10, i += i >> 1
                }
                return i ^= i << 3, i += i >> 5, i ^= i << 4, i += i >> 17, i ^= i << 25, i += i >> 6, r.intToUnsignedHex(i)
            }
        }
    },
    355: function(t, e, n) {
        "use strict";
        var r = n(276);

        function o(t, e) {
            return (65535 & t) * e + (((t >>> 16) * e & 65535) << 16)
        }

        function i(t, e) {
            return t << e | t >>> 32 - e
        }

        function c(t) {
            return t = o(t ^= t >>> 16, 2246822507), (t = o(t ^= t >>> 13, 3266489909)) ^ t >>> 16
        }

        function s(t, e) {
            t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]], e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]];
            var n = [0, 0, 0, 0];
            return n[3] += t[3] + e[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += t[2] + e[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += t[1] + e[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += t[0] + e[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
        }

        function a(t, e) {
            t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]], e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]];
            var n = [0, 0, 0, 0];
            return n[3] += t[3] * e[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += t[2] * e[3], n[1] += n[2] >>> 16, n[2] &= 65535, n[2] += t[3] * e[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += t[1] * e[3], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += t[2] * e[2], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += t[3] * e[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += t[0] * e[3] + t[1] * e[2] + t[2] * e[1] + t[3] * e[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
        }

        function u(t, e) {
            return 32 == (e %= 64) ? [t[1], t[0]] : e < 32 ? [t[0] << e | t[1] >>> 32 - e, t[1] << e | t[0] >>> 32 - e] : (e -= 32, [t[1] << e | t[0] >>> 32 - e, t[0] << e | t[1] >>> 32 - e])
        }

        function l(t, e) {
            return 0 == (e %= 64) ? t : e < 32 ? [t[0] << e | t[1] >>> 32 - e, t[1] << e] : [t[1] << e - 32, 0]
        }

        function f(t, e) {
            return [t[0] ^ e[0], t[1] ^ e[1]]
        }

        function h(t) {
            return t = f(t, [0, t[0] >>> 1]), t = f(t = a(t, [4283543511, 3981806797]), [0, t[0] >>> 1]), f(t = a(t, [3301882366, 444984403]), [0, t[0] >>> 1])
        }
        var d = function(t, e) {
            t = "" + t || "";
            var n = r.toU8IntArray(t);
            e = e || 0;
            for (var o = (t = {
                    charCodeAt: function(t) {
                        return n[t]
                    },
                    length: n.length
                }).length % 16, i = t.length - o, c = [0, e], d = [0, e], p = [0, 0], g = [0, 0], b = [2277735313, 289559509], m = [1291169091, 658871167], v = 0; v < i; v += 16) p = [255 & t.charCodeAt(v + 4) | (255 & t.charCodeAt(v + 5)) << 8 | (255 & t.charCodeAt(v + 6)) << 16 | (255 & t.charCodeAt(v + 7)) << 24, 255 & t.charCodeAt(v) | (255 & t.charCodeAt(v + 1)) << 8 | (255 & t.charCodeAt(v + 2)) << 16 | (255 & t.charCodeAt(v + 3)) << 24], g = [255 & t.charCodeAt(v + 12) | (255 & t.charCodeAt(v + 13)) << 8 | (255 & t.charCodeAt(v + 14)) << 16 | (255 & t.charCodeAt(v + 15)) << 24, 255 & t.charCodeAt(v + 8) | (255 & t.charCodeAt(v + 9)) << 8 | (255 & t.charCodeAt(v + 10)) << 16 | (255 & t.charCodeAt(v + 11)) << 24], p = u(p = a(p, b), 31), c = s(c = u(c = f(c, p = a(p, m)), 27), d), c = s(a(c, [0, 5]), [0, 1390208809]), g = u(g = a(g, m), 33), d = s(d = u(d = f(d, g = a(g, b)), 31), c), d = s(a(d, [0, 5]), [0, 944331445]);
            switch (p = [0, 0], g = [0, 0], o) {
                case 15:
                    g = f(g, l([0, t.charCodeAt(v + 14)], 48));
                case 14:
                    g = f(g, l([0, t.charCodeAt(v + 13)], 40));
                case 13:
                    g = f(g, l([0, t.charCodeAt(v + 12)], 32));
                case 12:
                    g = f(g, l([0, t.charCodeAt(v + 11)], 24));
                case 11:
                    g = f(g, l([0, t.charCodeAt(v + 10)], 16));
                case 10:
                    g = f(g, l([0, t.charCodeAt(v + 9)], 8));
                case 9:
                    g = a(g = f(g, [0, t.charCodeAt(v + 8)]), m), d = f(d, g = a(g = u(g, 33), b));
                case 8:
                    p = f(p, l([0, t.charCodeAt(v + 7)], 56));
                case 7:
                    p = f(p, l([0, t.charCodeAt(v + 6)], 48));
                case 6:
                    p = f(p, l([0, t.charCodeAt(v + 5)], 40));
                case 5:
                    p = f(p, l([0, t.charCodeAt(v + 4)], 32));
                case 4:
                    p = f(p, l([0, t.charCodeAt(v + 3)], 24));
                case 3:
                    p = f(p, l([0, t.charCodeAt(v + 2)], 16));
                case 2:
                    p = f(p, l([0, t.charCodeAt(v + 1)], 8));
                case 1:
                    p = a(p = f(p, [0, t.charCodeAt(v)]), b), c = f(c, p = a(p = u(p, 31), m))
            }
            return c = s(c = f(c, [0, t.length]), d = f(d, [0, t.length])), d = s(d, c), c = s(c = h(c), d = h(d)), d = s(d, c), ("00000000" + (c[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (c[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (d[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d[1] >>> 0).toString(16)).slice(-8)
        };
        t.exports = {
            x86Hash32: function(t, e) {
                t = "" + t || "";
                var n = r.toU8IntArray(t);
                e = e || 0;
                for (var s = (t = {
                        charCodeAt: function(t) {
                            return n[t]
                        },
                        length: n.length
                    }).length % 4, a = t.length - s, u = e, l = 0, f = 3432918353, h = 461845907, d = 0; d < a; d += 4) l = o(l = 255 & t.charCodeAt(d) | (255 & t.charCodeAt(d + 1)) << 8 | (255 & t.charCodeAt(d + 2)) << 16 | (255 & t.charCodeAt(d + 3)) << 24, f), l = o(l = i(l, 15), h), u = o(u = i(u ^= l, 13), 5) + 3864292196;
                switch (l = 0, s) {
                    case 3:
                        l ^= (255 & t.charCodeAt(d + 2)) << 16;
                    case 2:
                        l ^= (255 & t.charCodeAt(d + 1)) << 8;
                    case 1:
                        l = o(l ^= 255 & t.charCodeAt(d), f), u ^= l = o(l = i(l, 15), h)
                }
                return ((u = c(u ^= t.length)) >>> 0).toString(16)
            },
            x86Hash128: function(t, e) {
                t = "" + t || "";
                var n = r.toU8IntArray(t);
                e = e || 0;
                for (var s = (t = {
                        charCodeAt: function(t) {
                            return n[t]
                        },
                        length: n.length
                    }).length % 16, a = t.length - s, u = e, l = e, f = e, h = e, d = 0, p = 0, g = 0, b = 0, m = 597399067, v = 2869860233, y = 951274213, _ = 2716044179, w = 0; w < a; w += 16) d = 255 & t.charCodeAt(w) | (255 & t.charCodeAt(w + 1)) << 8 | (255 & t.charCodeAt(w + 2)) << 16 | (255 & t.charCodeAt(w + 3)) << 24, p = 255 & t.charCodeAt(w + 4) | (255 & t.charCodeAt(w + 5)) << 8 | (255 & t.charCodeAt(w + 6)) << 16 | (255 & t.charCodeAt(w + 7)) << 24, g = 255 & t.charCodeAt(w + 8) | (255 & t.charCodeAt(w + 9)) << 8 | (255 & t.charCodeAt(w + 10)) << 16 | (255 & t.charCodeAt(w + 11)) << 24, b = 255 & t.charCodeAt(w + 12) | (255 & t.charCodeAt(w + 13)) << 8 | (255 & t.charCodeAt(w + 14)) << 16 | (255 & t.charCodeAt(w + 15)) << 24, d = i(d = o(d, m), 15), u = i(u ^= d = o(d, v), 19), u = o(u += l, 5) + 1444728091, p = i(p = o(p, v), 16), l = i(l ^= p = o(p, y), 17), l = o(l += f, 5) + 197830471, g = i(g = o(g, y), 17), f = i(f ^= g = o(g, _), 15), f = o(f += h, 5) + 2530024501, b = i(b = o(b, _), 18), h = i(h ^= b = o(b, m), 13), h = o(h += u, 5) + 850148119;
                switch (d = 0, p = 0, g = 0, b = 0, s) {
                    case 15:
                        b ^= t.charCodeAt(w + 14) << 16;
                    case 14:
                        b ^= t.charCodeAt(w + 13) << 8;
                    case 13:
                        b = o(b ^= t.charCodeAt(w + 12), _), h ^= b = o(b = i(b, 18), m);
                    case 12:
                        g ^= t.charCodeAt(w + 11) << 24;
                    case 11:
                        g ^= t.charCodeAt(w + 10) << 16;
                    case 10:
                        g ^= t.charCodeAt(w + 9) << 8;
                    case 9:
                        g = o(g ^= t.charCodeAt(w + 8), y), f ^= g = o(g = i(g, 17), _);
                    case 8:
                        p ^= t.charCodeAt(w + 7) << 24;
                    case 7:
                        p ^= t.charCodeAt(w + 6) << 16;
                    case 6:
                        p ^= t.charCodeAt(w + 5) << 8;
                    case 5:
                        p = o(p ^= t.charCodeAt(w + 4), v), l ^= p = o(p = i(p, 16), y);
                    case 4:
                        d ^= t.charCodeAt(w + 3) << 24;
                    case 3:
                        d ^= t.charCodeAt(w + 2) << 16;
                    case 2:
                        d ^= t.charCodeAt(w + 1) << 8;
                    case 1:
                        d = o(d ^= t.charCodeAt(w), m), u ^= d = o(d = i(d, 15), v)
                }
                return u ^= t.length, u += l ^= t.length, u += f ^= t.length, l += u += h ^= t.length, f += u, h += u, u = c(u), u += l = c(l), u += f = c(f), l += u += h = c(h), f += u, h += u, ("00000000" + (u >>> 0).toString(16)).slice(-8) + ("00000000" + (l >>> 0).toString(16)).slice(-8) + ("00000000" + (f >>> 0).toString(16)).slice(-8) + ("00000000" + (h >>> 0).toString(16)).slice(-8)
            },
            x64Hash64: function(t, e) {
                return d(t, e).slice(8)
            },
            x64Hash128: d,
            hash: function(t, e) {
                return d(t, e)
            }
        }
    },
    36: function(t, e, n) {
        "use strict";
        var r = n(168),
            o = "object" == typeof self && self && self.Object === Object && self,
            i = r.a || o || Function("return this")();
        e.a = i
    },
    38: function(t, e, n) {
        "use strict";
        n.d(e, "b", (function() {
            return o
        })), n.d(e, "a", (function() {
            return s
        })), n.d(e, "q", (function() {
            return u
        })), n.d(e, "m", (function() {
            return h
        })), n.d(e, "l", (function() {
            return d
        })), n.d(e, "e", (function() {
            return p
        })), n.d(e, "g", (function() {
            return g
        })), n.d(e, "f", (function() {
            return b
        })), n.d(e, "h", (function() {
            return m
        })), n.d(e, "k", (function() {
            return y
        })), n.d(e, "n", (function() {
            return _
        })), n.d(e, "j", (function() {
            return w
        })), n.d(e, "p", (function() {
            return j
        })), n.d(e, "d", (function() {
            return O
        })), n.d(e, "c", (function() {
            return A
        })), n.d(e, "o", (function() {
            return x
        })), n.d(e, "i", (function() {
            return E
        }));
        var r = n(10);

        function o(t, e) {
            return {
                key: t,
                value: e
            }
        }

        function i(t, e) {
            return o(t, e)
        }

        function c(t) {
            return t.map(t => [t.key, t.value].map(encodeURIComponent).join("=")).join("&")
        }

        function s(t, e) {
            if (0 === e.length) return t;
            const n = t.includes("?");
            return [t, c(e)].join(n ? "&" : "?")
        }

        function a(t) {
            const e = [];
            return void 0 !== t.medium && e.push(i("utm_medium", t.medium)), void 0 !== t.source && e.push(i("utm_source", t.source)), void 0 !== t.campaign && e.push(i("utm_campaign", t.campaign)), e
        }

        function u(t) {
            return a(t)
        }

        function l(t) {
            return a({
                medium: "internal",
                source: t
            })
        }
        const f = o("fromExtension", "" + !0);

        function h(t, e) {
            return s(Object(r.f)().signup, [...u({
                medium: "internal",
                source: t,
                campaign: e
            }), f])
        }

        function d() {
            return s(Object(r.f)().signin, [...l("signinHook"), f])
        }

        function p() {
            return s(Object(r.f)().fbSignin, l("signinHook"))
        }

        function g() {
            return s(Object(r.f)().googleSignin, l("signinHook"))
        }

        function b(t) {
            return s(Object(r.f)().fbSignup, l(t))
        }

        function m(t) {
            return s(Object(r.f)().googleSignup, l(t))
        }
        const v = a({
            medium: "internal"
        })[0];

        function y() {
            return s(Object(r.f)().resetPassword, [v])
        }

        function _() {
            return s(Object(r.f)().terms, [v])
        }

        function w() {
            return s(Object(r.f)().policy, [v])
        }

        function j(t, e) {
            return s(Object(r.f)().upgrade, u({
                medium: "internal",
                source: t,
                campaign: e
            }))
        }

        function O(t) {
            return s(Object(r.f)().welcomeC, a({
                medium: t ? "navigation" : "store",
                source: Object(r.b)()
            }))
        }

        function A(t) {
            return s(Object(r.f)().afterInstall + "/", [o("extension_install", "" + !0), ...a({
                medium: t ? "navigation" : "store",
                source: t ? void 0 : Object(r.b)()
            })])
        }

        function x(t) {
            return s(Object(r.f)().uninstall, [...void 0 === t ? [] : [o("domain", t)], ...a({
                medium: "internal",
                campaign: "extensionUninstall"
            })])
        }

        function E(t) {
            return s(Object(r.f)().plansEnterprise, [o("app_type", "extension"), o("browser", Object(r.b)()), ...u({
                medium: "internal",
                source: "upHook",
                campaign: t
            })])
        }
    },
    4: function(t, e, n) {
        "use strict";
        var r = {};
        n.r(r), n.d(r, "map", (function() {
            return s
        })), n.d(r, "filter", (function() {
            return a
        })), n.d(r, "values", (function() {
            return u
        })), n.d(r, "pairs", (function() {
            return l
        })), n.d(r, "create", (function() {
            return f
        })), n.d(r, "pluck", (function() {
            return h
        }));
        var o = {};
        n.r(o), n.d(o, "find", (function() {
            return d
        }));
        var i = n(72),
            c = n(264);

        function s(t, e) {
            const n = {};
            return Object.keys(e).forEach(r => n[r] = t(r, e[r])), n
        }

        function a(t, e) {
            const n = {};
            return Object.keys(e).forEach(r => {
                t(r, e[r]) && (n[r] = e[r])
            }), n
        }

        function u(t) {
            return Object.keys(t).map(e => t[e])
        }

        function l(t) {
            return Object.keys(t).map(e => [e, t[e]])
        }

        function f(t) {
            const e = {};
            for (const [n, r] of t) e[n] = r;
            return e
        }

        function h(t, e) {
            return e.map(e => t[e])
        }

        function d(t, e) {
            for (const n of t.values())
                if (e(n)) return n;
            return null
        }
        var p = n(210);
        n.d(e, "b", (function() {
            return m
        })), n.d(e, "n", (function() {
            return v
        })), n.d(e, "g", (function() {
            return _
        })), n.d(e, "m", (function() {
            return w
        })), n.d(e, "p", (function() {
            return j
        })), n.d(e, "l", (function() {
            return O
        })), n.d(e, "h", (function() {
            return A
        })), n.d(e, "o", (function() {
            return x
        })), n.d(e, "i", (function() {
            return E
        })), n.d(e, "k", (function() {
            return P
        })), n.d(e, "c", (function() {
            return g
        })), n.d(e, "r", (function() {
            return S
        })), n.d(e, "q", (function() {
            return k
        })), n.d(e, "j", (function() {
            return M
        })), n.d(e, "a", (function() {
            return c
        })), n.d(e, "f", (function() {
            return r
        })), n.d(e, "d", (function() {
            return o
        })), n.d(e, "e", (function() {
            return p
        }));
        var g, b = function(t, e, n, r) {
            return new(n || (n = Promise))((function(o, i) {
                function c(t) {
                    try {
                        a(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function s(t) {
                    try {
                        a(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function a(t) {
                    var e;
                    t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                        t(e)
                    }))).then(c, s)
                }
                a((r = r.apply(t, e || [])).next())
            }))
        };
        class m {
            constructor(t) {
                this._getFallbackValue = t
            }
            init(t) {
                if (void 0 !== this._value) throw new Error("Global value already initialized.");
                this._value = t
            }
            get() {
                if (void 0 === this._value) {
                    if (void 0 === this._getFallbackValue) throw new Error("Global value not initialized and no fallback value provided.");
                    this._value = this._getFallbackValue()
                }
                return this._value
            }
        }

        function v(t, e) {
            return t.some(t => t === e) ? e : void 0
        }
        class y extends Error {
            constructor(t) {
                super(`Matching not exhaustive${t?`: unexpected value ${t}`:""}`)
            }
        }

        function _(t) {
            throw new y(t)
        }

        function w(t) {
            const e = parseInt(t, 10);
            return isNaN(e) ? void 0 : e
        }

        function j(t, e) {
            try {
                return t()
            } catch (t) {
                return e(t)
            }
        }

        function O() {}

        function A(t) {
            let e, n = !1;
            return (...r) => (n || (n = !0, e = t(...r)), e)
        }

        function x(t, e) {
            let n, r, o = !0;

            function c(t) {
                return o && (o = !1, r = i.a.createCompletionSource(), setTimeout(() => {
                    try {
                        r.resolve(e())
                    } catch (t) {
                        r.reject(t)
                    } finally {
                        o = !0
                    }
                }, t)), r.promise
            }
            return () => {
                const e = n;
                return n = Date.now(), c(void 0 === e || n - e >= t ? 0 : t - (n - e))
            }
        }

        function E(t, e, n = 0, r = (t => !0)) {
            return b(this, void 0, void 0, (function*() {
                let o = e;
                const c = [];
                for (; o > 0;) {
                    let e;
                    try {
                        o--, e = {
                            val: yield t(),
                            hasError: !1
                        }
                    } catch (t) {
                        e = {
                            hasError: !0,
                            message: t && t.message || t || ""
                        }
                    }
                    if (e.hasError) c.push(e.message);
                    else if (r(e.val)) return e.val;
                    o > 0 && (yield i.a.delay(n))
                }
                throw new Error(`Condition was not met after ${e} retries. Errors: '${c.join(";")}'`)
            }))
        }
        class C {
            constructor(t) {
                this._factory = t, this._hasValue = !1
            }
            get hasValue() {
                return this._hasValue
            }
            get() {
                return this._hasValue || (this._value = this._factory(), this._hasValue = !0), this._value
            }
        }

        function P(t) {
            return new C(t)
        }

        function S(t, e) {
            const n = Object.assign({}, t);
            for (const t in e) {
                const r = e[t];
                void 0 !== r && (n[t] = r)
            }
            return n
        }

        function k(...t) {
            return t
        }

        function M(t) {
            return t.replace(/[.*+?()\[\]{}^$\\]/g, "\\$&")
        }! function(t) {
            function e() {
                return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
            }
            t.create = function() {
                return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
            }
        }(g || (g = {})), void 0 !== window.requestIdleCallback && window.requestIdleCallback
    },
    42: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return r
        }));
        var r = Array.isArray || function(t) {
            return t && "number" == typeof t.length
        }
    },
    43: function(t, e, n) {
        "use strict";
        n.d(e, "b", (function() {
            return r
        })), n.d(e, "a", (function() {
            return o
        }));
        const r = {
            bridge: "bridge",
            background: "message:to-priv",
            broadcast: "message:to-non-priv"
        };
        var o;
        ! function(t) {
            t[t.success = 0] = "success", t[t.successWithEmpty = 1] = "successWithEmpty", t[t.alreadyMigrated = 2] = "alreadyMigrated"
        }(o || (o = {}))
    },
    431: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return r
        }));
        var r, o = n(177),
            i = n(25),
            c = n(194);
        ! function(t) {
            t.defaultConfig = {
                writer: new o.a,
                filterFn: t => !0
            };
            let e = t.defaultConfig;

            function n(t) {
                e = Object.assign({}, e, t)
            }
            t.getGlobal = function() {
                return e
            }, t.updateGlobal = n, t.configure = function(t) {
                n({
                    writer: new o.a(t.edge),
                    filterFn: t.prodCs ? Object(c.a)(i.a.ERROR) : t => !0
                })
            }
        }(r || (r = {}))
    },
    46: function(t, e, n) {
        "use strict";
        e.a = function(t) {
            return null != t && "object" == typeof t
        }
    },
    52: function(t, e, n) {
        "use strict";
        var r = n(59),
            o = Object.prototype,
            i = o.hasOwnProperty,
            c = o.toString,
            s = r.a ? r.a.toStringTag : void 0,
            a = Object.prototype.toString,
            u = r.a ? r.a.toStringTag : void 0;
        e.a = function(t) {
            return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : u && u in Object(t) ? function(t) {
                var e = i.call(t, s),
                    n = t[s];
                try {
                    t[s] = void 0;
                    var r = !0
                } catch (t) {}
                var o = c.call(t);
                return r && (e ? t[s] = n : delete t[s]), o
            }(t) : function(t) {
                return a.call(t)
            }(t)
        }
    },
    53: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return o
        }));
        var r = !1,
            o = {
                Promise: void 0,
                set useDeprecatedSynchronousErrorHandling(t) {
                    t && (new Error).stack, r = t
                },
                get useDeprecatedSynchronousErrorHandling() {
                    return r
                }
            }
    },
    57: function(t, e, n) {
        "use strict";
        var r, o = n(86),
            i = n(36).a["__core-js_shared__"],
            c = (r = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "",
            s = n(31),
            a = n(87),
            u = /^\[object .+?Constructor\]$/,
            l = Function.prototype,
            f = Object.prototype,
            h = l.toString,
            d = f.hasOwnProperty,
            p = RegExp("^" + h.call(d).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
            g = function(t) {
                return !(!Object(s.a)(t) || function(t) {
                    return !!c && c in t
                }(t)) && (Object(o.a)(t) ? p : u).test(Object(a.a)(t))
            };
        e.a = function(t, e) {
            var n = function(t, e) {
                return null == t ? void 0 : t[e]
            }(t, e);
            return g(n) ? n : void 0
        }
    },
    58: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return r
        })), n.d(e, "b", (function() {
            return o
        })), n.d(e, "c", (function() {
            return i
        }));
        class r extends Error {
            constructor(t) {
                super(`Assertion failed: ${t?"string"==typeof t?t:t():"(unnamed)"}`)
            }
        }

        function o(t, e) {
            if (!t) throw new r(e)
        }

        function i(t, e) {
            if (null == t) throw new r(() => e ? `Expected ${e} to be non-null` : "Expected non-null");
            return t
        }
    },
    59: function(t, e, n) {
        "use strict";
        var r = n(36).a.Symbol;
        e.a = r
    },
    72: function(t, e, n) {
        "use strict";
        var r;
        n.d(e, "a", (function() {
                return r
            })),
            function(t) {
                function e(t) {
                    return new Promise(t)
                }
                t.create = e, t.createCompletionSource = function() {
                    let t, e;
                    return {
                        promise: new Promise((n, r) => {
                            t = n, e = r
                        }),
                        resolve(e) {
                            t(e)
                        },
                        reject(t) {
                            e(t)
                        }
                    }
                }, t.sync = function(t) {
                    return e((e, n) => e(t()))
                }, t.delay = function(e) {
                    return t.create(t => {
                        setTimeout(() => {
                            t()
                        }, e)
                    })
                }
            }(r || (r = {}))
    },
    736: function(t, e, n) {
        "use strict";
        n.r(e), n(236);
        var r = n(17),
            o = n(431),
            i = n(314),
            c = n(74);
        r.c("chrome", "cs"), o.a.configure({
            edge: !1,
            prodCs: "prod" === r.a().bundleInfo.env
        }), Object(c.e)(Object(i.a)(!1))
    },
    74: function(t, e, n) {
        "use strict";
        n.d(e, "d", (function() {
            return i
        })), n.d(e, "e", (function() {
            return c
        })), n.d(e, "f", (function() {
            return s
        })), n.d(e, "c", (function() {
            return a
        })), n.d(e, "b", (function() {
            return u
        })), n.d(e, "a", (function() {
            return l
        }));
        var r = n(58);
        const o = n(12).a.create("extension-api");

        function i(t) {
            window.extensionBackgroundPageApi && o.warn("Background Page Extension Api init called more than once"), window.extensionBackgroundPageApi = window.extensionBackgroundPageApi || t
        }

        function c(t) {
            window.extensionContentScriptApi && o.warn("Content Script Extension Api init called more than once"), window.extensionContentScriptApi = window.extensionContentScriptApi || t
        }

        function s(t) {
            window.extensionPopupApi && o.warn("Popup Extension Api init called more than once"), window.extensionPopupApi = window.extensionPopupApi || t
        }

        function a() {
            return Object(r.c)(window.extensionPopupApi, "popup extension api was not initialized")
        }

        function u() {
            return Object(r.c)(window.extensionContentScriptApi, "content script extension api was not initialized")
        }

        function l() {
            return Object(r.c)(window.extensionBackgroundPageApi, "backgound page extension api was not initialized")
        }
    },
    75: function(t, e, n) {
        "use strict";

        function r() {}
        n.d(e, "a", (function() {
            return r
        }))
    },
    77: function(t, e, n) {
        "use strict";
        var r = n(86),
            o = n(125);
        e.a = function(t) {
            return null != t && Object(o.a)(t.length) && !Object(r.a)(t)
        }
    },
    82: function(t, e, n) {
        "use strict";
        (function(t) {
            var r = n(36),
                o = n(277),
                i = "object" == typeof exports && exports && !exports.nodeType && exports,
                c = i && "object" == typeof t && t && !t.nodeType && t,
                s = c && c.exports === i ? r.a.Buffer : void 0,
                a = (s ? s.isBuffer : void 0) || o.a;
            e.a = a
        }).call(this, n(198)(t))
    },
    84: function(t, e, n) {
        "use strict";
        e.a = function(t, e) {
            return t === e || t != t && e != e
        }
    },
    85: function(t, e, n) {
        "use strict";
        var r = n(84),
            o = function(t, e) {
                for (var n = t.length; n--;)
                    if (Object(r.a)(t[n][0], e)) return n;
                return -1
            },
            i = Array.prototype.splice;

        function c(t) {
            var e = -1,
                n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n;) {
                var r = t[e];
                this.set(r[0], r[1])
            }
        }
        c.prototype.clear = function() {
            this.__data__ = [], this.size = 0
        }, c.prototype.delete = function(t) {
            var e = this.__data__,
                n = o(e, t);
            return !(n < 0 || (n == e.length - 1 ? e.pop() : i.call(e, n, 1), --this.size, 0))
        }, c.prototype.get = function(t) {
            var e = this.__data__,
                n = o(e, t);
            return n < 0 ? void 0 : e[n][1]
        }, c.prototype.has = function(t) {
            return o(this.__data__, t) > -1
        }, c.prototype.set = function(t, e) {
            var n = this.__data__,
                r = o(n, t);
            return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this
        }, e.a = c
    },
    86: function(t, e, n) {
        "use strict";
        var r = n(52),
            o = n(31);
        e.a = function(t) {
            if (!Object(o.a)(t)) return !1;
            var e = Object(r.a)(t);
            return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e
        }
    },
    87: function(t, e, n) {
        "use strict";
        var r = Function.prototype.toString;
        e.a = function(t) {
            if (null != t) {
                try {
                    return r.call(t)
                } catch (t) {}
                try {
                    return t + ""
                } catch (t) {}
            }
            return ""
        }
    },
    91: function(t, e, n) {
        "use strict";
        var r = n(52),
            o = n(125),
            i = n(46),
            c = {};
        c["[object Float32Array]"] = c["[object Float64Array]"] = c["[object Int8Array]"] = c["[object Int16Array]"] = c["[object Int32Array]"] = c["[object Uint8Array]"] = c["[object Uint8ClampedArray]"] = c["[object Uint16Array]"] = c["[object Uint32Array]"] = !0, c["[object Arguments]"] = c["[object Array]"] = c["[object ArrayBuffer]"] = c["[object Boolean]"] = c["[object DataView]"] = c["[object Date]"] = c["[object Error]"] = c["[object Function]"] = c["[object Map]"] = c["[object Number]"] = c["[object Object]"] = c["[object RegExp]"] = c["[object Set]"] = c["[object String]"] = c["[object WeakMap]"] = !1;
        var s = n(268),
            a = n(226),
            u = a.a && a.a.isTypedArray,
            l = u ? Object(s.a)(u) : function(t) {
                return Object(i.a)(t) && Object(o.a)(t.length) && !!c[Object(r.a)(t)]
            };
        e.a = l
    },
    94: function(t, e, n) {
        "use strict";

        function r(t) {
            return "function" == typeof t
        }
        n.d(e, "a", (function() {
            return r
        }))
    },
    96: function(t, e, n) {
        "use strict";
        var r = n(57),
            o = n(36),
            i = Object(r.a)(o.a, "Map");
        e.a = i
    },
    97: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return r
        }));
        var r = "function" == typeof Symbol && Symbol.observable || "@@observable"
    },
    98: function(t, e, n) {
        "use strict";
        var r = n(109);
        e.a = function(t) {
            if ("string" == typeof t || Object(r.a)(t)) return t;
            var e = t + "";
            return "0" == e && 1 / t == -1 / 0 ? "-0" : e
        }
    },
    99: function(t, e, n) {
        "use strict";
        var r = n(52),
            o = n(46),
            i = function(t) {
                return Object(o.a)(t) && "[object Arguments]" == Object(r.a)(t)
            },
            c = Object.prototype,
            s = c.hasOwnProperty,
            a = c.propertyIsEnumerable,
            u = i(function() {
                return arguments
            }()) ? i : function(t) {
                return Object(o.a)(t) && s.call(t, "callee") && !a.call(t, "callee")
            };
        e.a = u
    }
});