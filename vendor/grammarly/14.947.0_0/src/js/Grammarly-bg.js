/*! For license information please see Grammarly-bg.js.LICENSE */ ! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(r, o, function(t) {
                return e[t]
            }.bind(null, o));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 768)
}([, , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return o
    }));
    var r = function(e, t) {
        return (r = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(e, t)
    };

    function o(e, t) {
        function n() {
            this.constructor = e
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }
}, function(e, t, n) {
    "use strict";
    var r;

    function o(e, t) {
        return Object.assign(Object.assign({}, e), {
            application: t.application,
            version: t.version,
            env: t.env,
            sessionId: t.context && t.sessionId,
            userId: t.context && t.context.userId,
            containerId: t.context && t.context.containerId
        })
    }

    function i(e) {
        return `${e}/logv2`
    }

    function a(e) {
        return `${e}/crashv2`
    }

    function s(e, t) {
        return `${t}/log?json=${encodeURIComponent(JSON.stringify(e))}`
    }
    n.d(t, "a", (function() {
            return r
        })), n.d(t, "b", (function() {
            return o
        })), n.d(t, "d", (function() {
            return i
        })), n.d(t, "c", (function() {
            return a
        })), n.d(t, "e", (function() {
            return s
        })),
        function(e) {
            e.INFO = "INFO", e.WARN = "WARN", e.ERROR = "ERROR"
        }(r || (r = {}))
}, function(e, t, n) {
    "use strict";
    var r = {};
    n.r(r), n.d(r, "map", (function() {
        return s
    })), n.d(r, "filter", (function() {
        return c
    })), n.d(r, "values", (function() {
        return u
    })), n.d(r, "pairs", (function() {
        return l
    })), n.d(r, "create", (function() {
        return d
    })), n.d(r, "pluck", (function() {
        return f
    }));
    var o = {};
    n.r(o), n.d(o, "find", (function() {
        return h
    }));
    var i = n(72),
        a = n(264);

    function s(e, t) {
        const n = {};
        return Object.keys(t).forEach(r => n[r] = e(r, t[r])), n
    }

    function c(e, t) {
        const n = {};
        return Object.keys(t).forEach(r => {
            e(r, t[r]) && (n[r] = t[r])
        }), n
    }

    function u(e) {
        return Object.keys(e).map(t => e[t])
    }

    function l(e) {
        return Object.keys(e).map(t => [t, e[t]])
    }

    function d(e) {
        const t = {};
        for (const [n, r] of e) t[n] = r;
        return t
    }

    function f(e, t) {
        return t.map(t => e[t])
    }

    function h(e, t) {
        for (const n of e.values())
            if (t(n)) return n;
        return null
    }
    var g = n(210);
    n.d(t, "b", (function() {
        return b
    })), n.d(t, "n", (function() {
        return v
    })), n.d(t, "g", (function() {
        return y
    })), n.d(t, "m", (function() {
        return w
    })), n.d(t, "p", (function() {
        return O
    })), n.d(t, "l", (function() {
        return j
    })), n.d(t, "h", (function() {
        return E
    })), n.d(t, "o", (function() {
        return k
    })), n.d(t, "i", (function() {
        return S
    })), n.d(t, "k", (function() {
        return C
    })), n.d(t, "c", (function() {
        return p
    })), n.d(t, "r", (function() {
        return A
    })), n.d(t, "q", (function() {
        return N
    })), n.d(t, "j", (function() {
        return x
    })), n.d(t, "a", (function() {
        return a
    })), n.d(t, "f", (function() {
        return r
    })), n.d(t, "d", (function() {
        return o
    })), n.d(t, "e", (function() {
        return g
    }));
    var p, m = function(e, t, n, r) {
        return new(n || (n = Promise))((function(o, i) {
            function a(e) {
                try {
                    c(r.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function s(e) {
                try {
                    c(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function c(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                    e(t)
                }))).then(a, s)
            }
            c((r = r.apply(e, t || [])).next())
        }))
    };
    class b {
        constructor(e) {
            this._getFallbackValue = e
        }
        init(e) {
            if (void 0 !== this._value) throw new Error("Global value already initialized.");
            this._value = e
        }
        get() {
            if (void 0 === this._value) {
                if (void 0 === this._getFallbackValue) throw new Error("Global value not initialized and no fallback value provided.");
                this._value = this._getFallbackValue()
            }
            return this._value
        }
    }

    function v(e, t) {
        return e.some(e => e === t) ? t : void 0
    }
    class _ extends Error {
        constructor(e) {
            super(`Matching not exhaustive${e?`: unexpected value ${e}`:""}`)
        }
    }

    function y(e) {
        throw new _(e)
    }

    function w(e) {
        const t = parseInt(e, 10);
        return isNaN(t) ? void 0 : t
    }

    function O(e, t) {
        try {
            return e()
        } catch (e) {
            return t(e)
        }
    }

    function j() {}

    function E(e) {
        let t, n = !1;
        return (...r) => (n || (n = !0, t = e(...r)), t)
    }

    function k(e, t) {
        let n, r, o = !0;

        function a(e) {
            return o && (o = !1, r = i.a.createCompletionSource(), setTimeout(() => {
                try {
                    r.resolve(t())
                } catch (e) {
                    r.reject(e)
                } finally {
                    o = !0
                }
            }, e)), r.promise
        }
        return () => {
            const t = n;
            return n = Date.now(), a(void 0 === t || n - t >= e ? 0 : e - (n - t))
        }
    }

    function S(e, t, n = 0, r = (e => !0)) {
        return m(this, void 0, void 0, (function*() {
            let o = t;
            const a = [];
            for (; o > 0;) {
                let t;
                try {
                    o--, t = {
                        val: yield e(),
                        hasError: !1
                    }
                } catch (e) {
                    t = {
                        hasError: !0,
                        message: e && e.message || e || ""
                    }
                }
                if (t.hasError) a.push(t.message);
                else if (r(t.val)) return t.val;
                o > 0 && (yield i.a.delay(n))
            }
            throw new Error(`Condition was not met after ${t} retries. Errors: '${a.join(";")}'`)
        }))
    }
    class I {
        constructor(e) {
            this._factory = e, this._hasValue = !1
        }
        get hasValue() {
            return this._hasValue
        }
        get() {
            return this._hasValue || (this._value = this._factory(), this._hasValue = !0), this._value
        }
    }

    function C(e) {
        return new I(e)
    }

    function A(e, t) {
        const n = Object.assign({}, e);
        for (const e in t) {
            const r = t[e];
            void 0 !== r && (n[e] = r)
        }
        return n
    }

    function N(...e) {
        return e
    }

    function x(e) {
        return e.replace(/[.*+?()\[\]{}^$\\]/g, "\\$&")
    }! function(e) {
        function t() {
            return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
        }
        e.create = function() {
            return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
        }
    }(p || (p = {})), void 0 !== window.requestIdleCallback && window.requestIdleCallback
}, , , , , , function(e, t, n) {
    "use strict";
    n.d(t, "n", (function() {
        return o
    })), n.d(t, "g", (function() {
        return i
    })), n.d(t, "l", (function() {
        return a
    })), n.d(t, "j", (function() {
        return s
    })), n.d(t, "m", (function() {
        return c
    })), n.d(t, "k", (function() {
        return u
    })), n.d(t, "o", (function() {
        return l
    })), n.d(t, "i", (function() {
        return d
    })), n.d(t, "b", (function() {
        return f
    })), n.d(t, "h", (function() {
        return h
    })), n.d(t, "c", (function() {
        return g
    })), n.d(t, "f", (function() {
        return p
    })), n.d(t, "a", (function() {
        return m
    })), n.d(t, "d", (function() {
        return b
    })), n.d(t, "e", (function() {
        return v
    }));
    var r = n(17);

    function o() {
        return !!window.__extensionTestsMode
    }

    function i() {
        return r.a().appConfig.extensionId
    }

    function a() {
        return "firefox" === r.a().bundleInfo.browser
    }

    function s() {
        return "chrome" === r.a().bundleInfo.browser
    }

    function c() {
        return "safari" === r.a().bundleInfo.browser
    }

    function u() {
        return "edge" === r.a().bundleInfo.browser
    }

    function l() {
        return r.a().systemInfo.os.isWindows
    }

    function d() {
        return "bg" === r.a().bundleInfo.context
    }

    function f() {
        return r.a().bundleInfo.browser
    }

    function h() {
        return r.a().buildInfo.version
    }

    function g() {
        return r.a().bundleInfo.env
    }

    function p() {
        return r.a().appConfig.url
    }

    function m() {
        return r.a().appConfig.felog.appName
    }

    function b() {
        return r.a().appConfig.gnar.appName
    }

    function v() {
        return r.a().appConfig.url.grammarlyDomain
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return l
    }));
    var r = n(2),
        o = n(94),
        i = n(146),
        a = n(28),
        s = n(137),
        c = n(53),
        u = n(103),
        l = function(e) {
            function t(n, r, o) {
                var a = e.call(this) || this;
                switch (a.syncErrorValue = null, a.syncErrorThrown = !1, a.syncErrorThrowable = !1, a.isStopped = !1, arguments.length) {
                    case 0:
                        a.destination = i.a;
                        break;
                    case 1:
                        if (!n) {
                            a.destination = i.a;
                            break
                        }
                        if ("object" == typeof n) {
                            n instanceof t ? (a.syncErrorThrowable = n.syncErrorThrowable, a.destination = n, n.add(a)) : (a.syncErrorThrowable = !0, a.destination = new d(a, n));
                            break
                        }
                        default:
                            a.syncErrorThrowable = !0, a.destination = new d(a, n, r, o)
                }
                return a
            }
            return r.a(t, e), t.prototype[s.a] = function() {
                return this
            }, t.create = function(e, n, r) {
                var o = new t(e, n, r);
                return o.syncErrorThrowable = !1, o
            }, t.prototype.next = function(e) {
                this.isStopped || this._next(e)
            }, t.prototype.error = function(e) {
                this.isStopped || (this.isStopped = !0, this._error(e))
            }, t.prototype.complete = function() {
                this.isStopped || (this.isStopped = !0, this._complete())
            }, t.prototype.unsubscribe = function() {
                this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this))
            }, t.prototype._next = function(e) {
                this.destination.next(e)
            }, t.prototype._error = function(e) {
                this.destination.error(e), this.unsubscribe()
            }, t.prototype._complete = function() {
                this.destination.complete(), this.unsubscribe()
            }, t.prototype._unsubscribeAndRecycle = function() {
                var e = this._parentOrParents;
                return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = e, this
            }, t
        }(a.a),
        d = function(e) {
            function t(t, n, r, a) {
                var s, c = e.call(this) || this;
                c._parentSubscriber = t;
                var u = c;
                return Object(o.a)(n) ? s = n : n && (s = n.next, r = n.error, a = n.complete, n !== i.a && (u = Object.create(n), Object(o.a)(u.unsubscribe) && c.add(u.unsubscribe.bind(u)), u.unsubscribe = c.unsubscribe.bind(c))), c._context = u, c._next = s, c._error = r, c._complete = a, c
            }
            return r.a(t, e), t.prototype.next = function(e) {
                if (!this.isStopped && this._next) {
                    var t = this._parentSubscriber;
                    c.a.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? this.__tryOrSetError(t, this._next, e) && this.unsubscribe() : this.__tryOrUnsub(this._next, e)
                }
            }, t.prototype.error = function(e) {
                if (!this.isStopped) {
                    var t = this._parentSubscriber,
                        n = c.a.useDeprecatedSynchronousErrorHandling;
                    if (this._error) n && t.syncErrorThrowable ? (this.__tryOrSetError(t, this._error, e), this.unsubscribe()) : (this.__tryOrUnsub(this._error, e), this.unsubscribe());
                    else if (t.syncErrorThrowable) n ? (t.syncErrorValue = e, t.syncErrorThrown = !0) : Object(u.a)(e), this.unsubscribe();
                    else {
                        if (this.unsubscribe(), n) throw e;
                        Object(u.a)(e)
                    }
                }
            }, t.prototype.complete = function() {
                var e = this;
                if (!this.isStopped) {
                    var t = this._parentSubscriber;
                    if (this._complete) {
                        var n = function() {
                            return e._complete.call(e._context)
                        };
                        c.a.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? (this.__tryOrSetError(t, n), this.unsubscribe()) : (this.__tryOrUnsub(n), this.unsubscribe())
                    } else this.unsubscribe()
                }
            }, t.prototype.__tryOrUnsub = function(e, t) {
                try {
                    e.call(this._context, t)
                } catch (e) {
                    if (this.unsubscribe(), c.a.useDeprecatedSynchronousErrorHandling) throw e;
                    Object(u.a)(e)
                }
            }, t.prototype.__tryOrSetError = function(e, t, n) {
                if (!c.a.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
                try {
                    t.call(this._context, n)
                } catch (t) {
                    return c.a.useDeprecatedSynchronousErrorHandling ? (e.syncErrorValue = t, e.syncErrorThrown = !0, !0) : (Object(u.a)(t), !0)
                }
                return !1
            }, t.prototype._unsubscribe = function() {
                var e = this._parentSubscriber;
                this._context = null, this._parentSubscriber = null, e.unsubscribe()
            }, t
        }(l)
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return r
    }));
    var r, o = n(167),
        i = n(144);
    ! function(e) {
        e.create = function(e) {
            return new o.a(e, () => Object(i.b)().logger.create(e))
        }
    }(r || (r = {}))
}, , function(e, t, n) {
    "use strict";
    var r = n(175),
        o = n(11),
        i = n(137),
        a = n(146),
        s = n(97),
        c = n(160),
        u = n(53);
    n.d(t, "a", (function() {
        return l
    }));
    var l = function() {
        function e(e) {
            this._isScalar = !1, e && (this._subscribe = e)
        }
        return e.prototype.lift = function(t) {
            var n = new e;
            return n.source = this, n.operator = t, n
        }, e.prototype.subscribe = function(e, t, n) {
            var r = this.operator,
                s = function(e, t, n) {
                    if (e) {
                        if (e instanceof o.a) return e;
                        if (e[i.a]) return e[i.a]()
                    }
                    return e || t || n ? new o.a(e, t, n) : new o.a(a.a)
                }(e, t, n);
            if (r ? s.add(r.call(s, this.source)) : s.add(this.source || u.a.useDeprecatedSynchronousErrorHandling && !s.syncErrorThrowable ? this._subscribe(s) : this._trySubscribe(s)), u.a.useDeprecatedSynchronousErrorHandling && s.syncErrorThrowable && (s.syncErrorThrowable = !1, s.syncErrorThrown)) throw s.syncErrorValue;
            return s
        }, e.prototype._trySubscribe = function(e) {
            try {
                return this._subscribe(e)
            } catch (t) {
                u.a.useDeprecatedSynchronousErrorHandling && (e.syncErrorThrown = !0, e.syncErrorValue = t), Object(r.a)(e) ? e.error(t) : console.warn(t)
            }
        }, e.prototype.forEach = function(e, t) {
            var n = this;
            return new(t = d(t))((function(t, r) {
                var o;
                o = n.subscribe((function(t) {
                    try {
                        e(t)
                    } catch (e) {
                        r(e), o && o.unsubscribe()
                    }
                }), r, t)
            }))
        }, e.prototype._subscribe = function(e) {
            var t = this.source;
            return t && t.subscribe(e)
        }, e.prototype[s.a] = function() {
            return this
        }, e.prototype.pipe = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return 0 === e.length ? this : Object(c.b)(e)(this)
        }, e.prototype.toPromise = function(e) {
            var t = this;
            return new(e = d(e))((function(e, n) {
                var r;
                t.subscribe((function(e) {
                    return r = e
                }), (function(e) {
                    return n(e)
                }), (function() {
                    return e(r)
                }))
            }))
        }, e.create = function(t) {
            return new e(t)
        }, e
    }();

    function d(e) {
        if (e || (e = u.a.Promise || Promise), !e) throw new Error("no Promise impl found");
        return e
    }
}, , function(e, t, n) {
    "use strict";
    n.d(t, "i", (function() {
        return o
    })), n.d(t, "r", (function() {
        return s
    })), n.d(t, "h", (function() {
        return c
    })), n.d(t, "j", (function() {
        return u
    })), n.d(t, "f", (function() {
        return l
    })), n.d(t, "e", (function() {
        return d
    })), n.d(t, "s", (function() {
        return f
    })), n.d(t, "m", (function() {
        return h
    })), n.d(t, "u", (function() {
        return g
    })), n.d(t, "q", (function() {
        return p
    })), n.d(t, "n", (function() {
        return m
    })), n.d(t, "p", (function() {
        return v
    })), n.d(t, "l", (function() {
        return _
    })), n.d(t, "w", (function() {
        return y
    })), n.d(t, "g", (function() {
        return w
    })), n.d(t, "k", (function() {
        return O
    })), n.d(t, "v", (function() {
        return j
    })), n.d(t, "t", (function() {
        return E
    })), n.d(t, "d", (function() {
        return k
    })), n.d(t, "c", (function() {
        return S
    })), n.d(t, "b", (function() {
        return I
    })), n.d(t, "a", (function() {
        return C
    })), n.d(t, "o", (function() {
        return A
    })), n(254), n(10);
    var r = n(195);

    function o() {
        return window.chrome && window.chrome.runtime && window.chrome.runtime.lastError
    }

    function i(e, t) {
        const n = i.items = i.items || {},
            r = n[e];
        if (r || t) {
            if (r && !t) return clearTimeout(r), void delete n[e];
            ! function() {
                function r() {
                    o(), e()
                }

                function o() {
                    const o = setTimeout(r, t);
                    n[e] = o
                }
                o()
            }()
        }
    }

    function a() {
        return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
    }

    function s() {
        return a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a()
    }

    function c(e) {
        let t = 0;
        const n = e.length;
        let r, o;
        for (let i = 0; i < n; i++) r = e.charCodeAt(i), r >= 55296 && r < 57344 && r < 56320 && i + 1 < n && (o = e.charCodeAt(i + 1), o >= 56320 && o < 57344) ? (t += 4, i++) : t += r < 128 ? 1 : r < 2048 ? 2 : 3;
        return t
    }

    function u(e, t) {
        let n = t,
            r = 0;
        const o = [];
        for (; e[n];)
            if (" " === e[n++]) o.push(e.substring(r, n)), r = n, n += t;
            else {
                let i = n;
                do {
                    if (" " === e.substring(i - 1, i)) {
                        o.push(e.substring(r, i)), r = i, n = i + t;
                        break
                    }
                    i--
                } while (i > r)
            } return o.push(e.substr(r)), o
    }

    function l() {}

    function d() {
        return !0
    }

    function f(e) {
        return /^[-!#$%&\'*+\\./0-9=?A-Z^_`a-z{|}~]+@[-!#$%&\'*+\\/0-9=?A-Z^_`a-z{|}~]+\.[-!#$%&\'*+\\./0-9=?A-Z^_`a-z{|}~]+$/.test(e)
    }

    function h(e, t) {
        return t[1 == e ? 0 : 1]
    }

    function g(e, t, n) {
        const r = {};
        return function() {
            const o = "_memoize_" + (t ? t.apply(this, arguments) : arguments[0]);
            return window.hasOwnProperty.call(r, o) ? r[o] : (n && setTimeout(() => {
                delete r[o]
            }, n), r[o] = e.apply(this, arguments))
        }
    }

    function p(e, t) {
        return Math.floor(Math.random() * (t - e + 1)) + e
    }

    function m(e) {
        return new Promise(t => setTimeout(t, e))
    }! function(e) {
        e.items = {}
    }(i || (i = {}));
    const b = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    function v(e) {
        if (!e) return;
        const t = new Date(e);
        return "Invalid Date" !== t.toString() ? b[t.getMonth()] + " " + t.getDate() + ", " + t.getFullYear() : void 0
    }

    function _(e) {
        const t = function() {};
        return t.prototype = e(), t
    }

    function y(e = "", t = "") {
        function n(e) {
            return e.split(".").map(e => Number(e) || 0)
        }
        const r = n(e),
            o = n(t),
            i = Array(Math.abs(r.length - o.length)).fill(0);
        if (r.length > o.length ? o.push(...i) : r.push(...i), r.every((e, t) => e === o[t])) return 0;
        for (let e = 0, t = r.length; e < t; e++) {
            if (r[e] > o[e]) return 1;
            if (r[e] < o[e]) return -1
        }
        return -1
    }

    function w(e, t = 10) {
        setTimeout(e, t)
    }

    function O({
        buffered: e = !0
    } = {}) {
        const t = [],
            n = [];
        return {
            take: function() {
                return t.length ? Promise.resolve(t.shift()) : new Promise(e => n.push(e))
            },
            put: function(r) {
                n.length > 0 ? n.shift()(r) : e ? t.push(r) : t[0] = r
            }
        }
    }

    function j(e, t = 100) {
        if (!e) return NaN;
        const n = r.createHash("superfasthash");
        return parseInt(n.hash(e), 16) % t
    }

    function E(e) {
        return e.which || e.charCode || e.keyCode || 0
    }
    new RegExp(String.fromCharCode(160), "g"), String.fromCharCode(160), new RegExp("\n" + String.fromCharCode(32), "g");
    const k = 1e3,
        S = 60 * k,
        I = 27,
        C = 13;

    function A(e) {
        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return i
    })), n.d(t, "b", (function() {
        return a
    })), n.d(t, "c", (function() {
        return s
    }));
    var r = n(145);
    const o = new(n(4).b)(() => {
        throw new Error("Global config not initialized")
    });

    function i() {
        return o.get()
    }

    function a(e, t, n, i) {
        const a = r.a.create(e, t, n, i);
        return o.init(a), window.GR_CFG = o.get(), a
    }

    function s(e, t, n) {
        throw new Error("Never use it")
    }
}, , , , , function(e, t, n) {
    "use strict";
    n.r(t),
        function(e) {
            n.d(t, "initMessage", (function() {
                return d
            })), n.d(t, "onBackgroundPortReconnect", (function() {
                return p
            })), n.d(t, "emitError", (function() {
                return m
            })), n.d(t, "init", (function() {
                return b
            })), n.d(t, "one", (function() {
                return v
            })), n.d(t, "on", (function() {
                return _
            })), n.d(t, "off", (function() {
                return y
            })), n.d(t, "emitTabs", (function() {
                return w
            })), n.d(t, "emitTo", (function() {
                return O
            })), n.d(t, "emitFocusedTab", (function() {
                return j
            })), n.d(t, "emitBackground", (function() {
                return E
            })), n.d(t, "promiseBackground", (function() {
                return k
            }));
            var r = n(80),
                o = n(120),
                i = n(10),
                a = n(16),
                s = n(4),
                c = n(74),
                u = n(347);
            let l;

            function d(t) {
                if (l) return l;
                const n = (e && e.env, t);
                return l = n, n
            }

            function f() {
                return l || d((Object(i.i)() ? Object(c.a)() : Object(c.b)()).message)
            }
            const h = Object(r.emitter)({}),
                g = {};

            function p(e) {
                const t = f();
                "content-script-message-api" === t.kind && t.onBackgroundPortReconnect && t.onBackgroundPortReconnect(e)
            }
            const m = Object(u.a)(e => h.emit("__bgerror", e), 1e3);

            function b(e) {
                d(e), Object(o.a)(document, "grammarly:offline", () => m("proxy dead"), void 0)
            }

            function v(e, t) {
                _(e, (function n(...r) {
                    y(e, n), t.apply(this, r)
                }))
            }

            function _(e, t) {
                if ("__bgerror" === e) return void h.on("__bgerror", t);
                const n = g[e] = g[e] || [];
                if (n.push(t), 1 === n.length) try {
                    f().listen(e, (...e) => {
                        for (const t of n) t(...e)
                    })
                } catch (e) {
                    m(e)
                }
            }

            function y(e, t) {
                if ("__bgerror" === e) return void h.off("__bgerror", t);
                const n = g[e];
                if (!n) return;
                const r = n.indexOf(t); - 1 !== r && n.splice(r, 1), 0 === n.length && delete g[e]
            }

            function w(e) {
                try {
                    const t = f();
                    switch (t.kind) {
                        case "background-message-api":
                            t.broadcast(e, {});
                            break;
                        default:
                            throw new Error("emitTabs can be used only on background")
                    }
                } catch (e) {
                    m(e)
                }
            }

            function O(e, t, n = {}, r = s.l, o = s.l, i) {
                try {
                    if (!e) throw TypeError("emitTo can't be used without destination point");
                    const a = f();
                    switch (a.kind) {
                        case "background-message-api":
                            a.sendTo(e, t, n, r, o, i);
                            break;
                        default:
                            throw new Error("emitTo can be used only on background")
                    }
                } catch (e) {
                    m(e)
                }
            }

            function j(e, t) {
                try {
                    f().toFocused(e, t)
                } catch (e) {
                    m(e)
                }
            }

            function E(e, t, n, r) {
                try {
                    const o = f();
                    switch (o.kind) {
                        case "content-script-message-api":
                            o.broadcastBackground(e, t, n, r);
                            break;
                        default:
                            throw new Error("emitBackground can be used only in content script")
                    }
                } catch (e) {
                    m(e)
                }
            }

            function k(e, t = {}, n = 1e4) {
                const r = new Promise((n, r) => {
                    try {
                        const o = f();
                        switch (o.kind) {
                            case "content-script-message-api":
                                o.broadcastBackground(e, t, n, r);
                                break;
                            default:
                                throw new Error("promiseBackground can be used only on client scripts")
                        }
                    } catch (e) {
                        r(e), m(e)
                    }
                });
                return Promise.race([r, Object(a.n)(n).then(() => {
                    throw new Error(`Request to bg page (${l}) rejected by timeout`)
                })])
            }
        }.call(this, n(217))
}, , function(e, t, n) {
    e.exports = n(706)
}, function(e, t, n) {
    "use strict";
    var r;
    n.d(t, "a", (function() {
            return r
        })), n.d(t, "b", (function() {
            return i
        })),
        function(e) {
            e.TRACE = "TRACE", e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARN = "WARN", e.ERROR = "ERROR", e.FATAL = "FATAL"
        }(r || (r = {}));
    const o = {
        [r.TRACE]: 1,
        [r.DEBUG]: 2,
        [r.INFO]: 3,
        [r.WARN]: 4,
        [r.ERROR]: 5,
        [r.FATAL]: 6
    };

    function i(e) {
        return o[e] || 0
    }
}, , function(e, t, n) {
    "use strict";
    var r = Array.isArray;
    t.a = r
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return s
    }));
    var r = n(42),
        o = n(174),
        i = n(94),
        a = n(138),
        s = function() {
            function e(e) {
                this.closed = !1, this._parentOrParents = null, this._subscriptions = null, e && (this._unsubscribe = e)
            }
            var t;
            return e.prototype.unsubscribe = function() {
                var t;
                if (!this.closed) {
                    var n = this._parentOrParents,
                        s = this._unsubscribe,
                        u = this._subscriptions;
                    if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, n instanceof e) n.remove(this);
                    else if (null !== n)
                        for (var l = 0; l < n.length; ++l) n[l].remove(this);
                    if (Object(i.a)(s)) try {
                        s.call(this)
                    } catch (e) {
                        t = e instanceof a.a ? c(e.errors) : [e]
                    }
                    if (Object(r.a)(u)) {
                        l = -1;
                        for (var d = u.length; ++l < d;) {
                            var f = u[l];
                            if (Object(o.a)(f)) try {
                                f.unsubscribe()
                            } catch (e) {
                                t = t || [], e instanceof a.a ? t = t.concat(c(e.errors)) : t.push(e)
                            }
                        }
                    }
                    if (t) throw new a.a(t)
                }
            }, e.prototype.add = function(t) {
                var n = t;
                if (!t) return e.EMPTY;
                switch (typeof t) {
                    case "function":
                        n = new e(t);
                    case "object":
                        if (n === this || n.closed || "function" != typeof n.unsubscribe) return n;
                        if (this.closed) return n.unsubscribe(), n;
                        if (!(n instanceof e)) {
                            var r = n;
                            (n = new e)._subscriptions = [r]
                        }
                        break;
                    default:
                        throw new Error("unrecognized teardown " + t + " added to Subscription.")
                }
                var o = n._parentOrParents;
                if (null === o) n._parentOrParents = this;
                else if (o instanceof e) {
                    if (o === this) return n;
                    n._parentOrParents = [o, this]
                } else {
                    if (-1 !== o.indexOf(this)) return n;
                    o.push(this)
                }
                var i = this._subscriptions;
                return null === i ? this._subscriptions = [n] : i.push(n), n
            }, e.prototype.remove = function(e) {
                var t = this._subscriptions;
                if (t) {
                    var n = t.indexOf(e); - 1 !== n && t.splice(n, 1)
                }
            }, e.EMPTY = ((t = new e).closed = !0, t), e
        }();

    function c(e) {
        return e.reduce((function(e, t) {
            return e.concat(t instanceof a.a ? t.errors : t)
        }), [])
    }
}, , , function(e, t, n) {
    "use strict";
    t.a = function(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
    }
}, , , , , function(e, t, n) {
    "use strict";
    var r = n(168),
        o = "object" == typeof self && self && self.Object === Object && self,
        i = r.a || o || Function("return this")();
    t.a = i
}, , function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return o
    })), n.d(t, "a", (function() {
        return s
    })), n.d(t, "q", (function() {
        return u
    })), n.d(t, "m", (function() {
        return f
    })), n.d(t, "l", (function() {
        return h
    })), n.d(t, "e", (function() {
        return g
    })), n.d(t, "g", (function() {
        return p
    })), n.d(t, "f", (function() {
        return m
    })), n.d(t, "h", (function() {
        return b
    })), n.d(t, "k", (function() {
        return _
    })), n.d(t, "n", (function() {
        return y
    })), n.d(t, "j", (function() {
        return w
    })), n.d(t, "p", (function() {
        return O
    })), n.d(t, "d", (function() {
        return j
    })), n.d(t, "c", (function() {
        return E
    })), n.d(t, "o", (function() {
        return k
    })), n.d(t, "i", (function() {
        return S
    }));
    var r = n(10);

    function o(e, t) {
        return {
            key: e,
            value: t
        }
    }

    function i(e, t) {
        return o(e, t)
    }

    function a(e) {
        return e.map(e => [e.key, e.value].map(encodeURIComponent).join("=")).join("&")
    }

    function s(e, t) {
        if (0 === t.length) return e;
        const n = e.includes("?");
        return [e, a(t)].join(n ? "&" : "?")
    }

    function c(e) {
        const t = [];
        return void 0 !== e.medium && t.push(i("utm_medium", e.medium)), void 0 !== e.source && t.push(i("utm_source", e.source)), void 0 !== e.campaign && t.push(i("utm_campaign", e.campaign)), t
    }

    function u(e) {
        return c(e)
    }

    function l(e) {
        return c({
            medium: "internal",
            source: e
        })
    }
    const d = o("fromExtension", "" + !0);

    function f(e, t) {
        return s(Object(r.f)().signup, [...u({
            medium: "internal",
            source: e,
            campaign: t
        }), d])
    }

    function h() {
        return s(Object(r.f)().signin, [...l("signinHook"), d])
    }

    function g() {
        return s(Object(r.f)().fbSignin, l("signinHook"))
    }

    function p() {
        return s(Object(r.f)().googleSignin, l("signinHook"))
    }

    function m(e) {
        return s(Object(r.f)().fbSignup, l(e))
    }

    function b(e) {
        return s(Object(r.f)().googleSignup, l(e))
    }
    const v = c({
        medium: "internal"
    })[0];

    function _() {
        return s(Object(r.f)().resetPassword, [v])
    }

    function y() {
        return s(Object(r.f)().terms, [v])
    }

    function w() {
        return s(Object(r.f)().policy, [v])
    }

    function O(e, t) {
        return s(Object(r.f)().upgrade, u({
            medium: "internal",
            source: e,
            campaign: t
        }))
    }

    function j(e) {
        return s(Object(r.f)().welcomeC, c({
            medium: e ? "navigation" : "store",
            source: Object(r.b)()
        }))
    }

    function E(e) {
        return s(Object(r.f)().afterInstall + "/", [o("extension_install", "" + !0), ...c({
            medium: e ? "navigation" : "store",
            source: e ? void 0 : Object(r.b)()
        })])
    }

    function k(e) {
        return s(Object(r.f)().uninstall, [...void 0 === e ? [] : [o("domain", e)], ...c({
            medium: "internal",
            campaign: "extensionUninstall"
        })])
    }

    function S(e) {
        return s(Object(r.f)().plansEnterprise, [o("app_type", "extension"), o("browser", Object(r.b)()), ...u({
            medium: "internal",
            source: "upHook",
            campaign: e
        })])
    }
}, , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return r
    }));
    var r = Array.isArray || function(e) {
        return e && "number" == typeof e.length
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return r
    })), n.d(t, "a", (function() {
        return o
    }));
    const r = {
        bridge: "bridge",
        background: "message:to-priv",
        broadcast: "message:to-non-priv"
    };
    var o;
    ! function(e) {
        e[e.success = 0] = "success", e[e.successWithEmpty = 1] = "successWithEmpty", e[e.alreadyMigrated = 2] = "alreadyMigrated"
    }(o || (o = {}))
}, , , function(e, t, n) {
    "use strict";
    t.a = function(e) {
        return null != e && "object" == typeof e
    }
}, , , , , , function(e, t, n) {
    "use strict";
    var r = n(59),
        o = Object.prototype,
        i = o.hasOwnProperty,
        a = o.toString,
        s = r.a ? r.a.toStringTag : void 0,
        c = Object.prototype.toString,
        u = r.a ? r.a.toStringTag : void 0;
    t.a = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : u && u in Object(e) ? function(e) {
            var t = i.call(e, s),
                n = e[s];
            try {
                e[s] = void 0;
                var r = !0
            } catch (e) {}
            var o = a.call(e);
            return r && (t ? e[s] = n : delete e[s]), o
        }(e) : function(e) {
            return c.call(e)
        }(e)
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return o
    }));
    var r = !1,
        o = {
            Promise: void 0,
            set useDeprecatedSynchronousErrorHandling(e) {
                e && (new Error).stack, r = e
            },
            get useDeprecatedSynchronousErrorHandling() {
                return r
            }
        }
}, , , , function(e, t, n) {
    "use strict";
    var r, o = n(86),
        i = n(36).a["__core-js_shared__"],
        a = (r = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "",
        s = n(31),
        c = n(87),
        u = /^\[object .+?Constructor\]$/,
        l = Function.prototype,
        d = Object.prototype,
        f = l.toString,
        h = d.hasOwnProperty,
        g = RegExp("^" + f.call(h).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        p = function(e) {
            return !(!Object(s.a)(e) || function(e) {
                return !!a && a in e
            }(e)) && (Object(o.a)(e) ? g : u).test(Object(c.a)(e))
        };
    t.a = function(e, t) {
        var n = function(e, t) {
            return null == e ? void 0 : e[t]
        }(e, t);
        return p(n) ? n : void 0
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return r
    })), n.d(t, "b", (function() {
        return o
    })), n.d(t, "c", (function() {
        return i
    }));
    class r extends Error {
        constructor(e) {
            super(`Assertion failed: ${e?"string"==typeof e?e:e():"(unnamed)"}`)
        }
    }

    function o(e, t) {
        if (!e) throw new r(t)
    }

    function i(e, t) {
        if (null == e) throw new r(() => t ? `Expected ${t} to be non-null` : "Expected non-null");
        return e
    }
}, function(e, t, n) {
    "use strict";
    var r = n(36).a.Symbol;
    t.a = r
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return s
    })), n.d(t, "a", (function() {
        return c
    })), n.d(t, "h", (function() {
        return u
    })), n.d(t, "i", (function() {
        return l
    })), n.d(t, "j", (function() {
        return d
    })), n.d(t, "g", (function() {
        return f
    })), n.d(t, "d", (function() {
        return g
    })), n.d(t, "f", (function() {
        return p
    })), n.d(t, "c", (function() {
        return m
    })), n.d(t, "e", (function() {
        return b
    }));
    var r = n(10),
        o = n(227),
        i = n(195);
    const a = e => e.replace("www.", "");

    function s(e) {
        const t = e && e.ownerDocument || document,
            n = t.location || t.defaultView.location;
        return n ? a(n.hostname) : ""
    }

    function c(e) {
        if (Object(r.l)() && /^about:/.test(e)) return e;
        const t = document.createElement("a");
        return t.href = e, a(t.hostname)
    }
    const u = () => o.b.includes(s()),
        l = () => /\/document\//.test(p()) && "docs.google.com" === s(),
        d = () => /\.atlassian\.net/.test(s()),
        f = () => /\.blackboard\.com/.test(s()),
        h = /d\/(.*?)\//,
        g = () => {
            if (!document || !document.location) return null;
            if (h.test(document.location.href)) {
                const e = document.location.href.match(h)[1];
                return i.createHash("superfasthash").hash(e)
            }
            return null
        };

    function p(e) {
        const t = e && e.ownerDocument || document,
            n = t.location || t.defaultView.location;
        return n ? n.pathname + n.search : ""
    }

    function m() {
        const e = new RegExp("^(?:[a-z]+:)?//", "i");
        let t = "";
        const n = document.getElementsByTagName("link");
        for (let e = 0; e < n.length; e++) {
            const r = n[e],
                o = /(\"icon )|( icon\")|(\"icon\")|( icon )/i; - 1 !== ('"' + r.getAttribute("rel") + '"').search(o) && (t = r.getAttribute("href"))
        }
        return t || (t = "favicon.ico"), e.test(t) ? t : "/" !== t[0] ? "//" + document.location.host + document.location.pathname + t : "//" + document.location.host + t
    }

    function b() {
        const e = s();
        return "Back to " + (e && {
            "mail.google.com": "Gmail",
            "facebook.com": "Facebook",
            "twitter.com": "Twitter"
        } [e] || document.title)
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return r
    })), n.d(t, "b", (function() {
        return o
    }));
    var r, o, i = n(206),
        a = n(4);
    ! function(e) {
        let t;

        function n(e) {
            return e._tag === t.ins
        }

        function r(e) {
            return e._tag === t.del
        }! function(e) {
            e.ins = "ins", e.del = "del"
        }(t = e.Type || (e.Type = {})), e.isIns = n, e.ins = function(e, n) {
            return {
                _tag: t.ins,
                pos: e,
                text: n
            }
        }, e.isDel = r, e.del = function(e, n) {
            return {
                _tag: t.del,
                pos: e,
                length: n
            }
        }, e.applyChanges = function(e, t) {
            return t.reduce((e, t) => n(t) ? e.slice(0, t.pos) + t.text + e.slice(t.pos) : r(t) ? e.slice(0, t.pos) + e.slice(t.pos + t.length) : Object(a.g)(t), e)
        }, e.getTransformOffset = function(e) {
            return n(e) ? e.text.length : r(e) ? -e.length : Object(a.g)(e)
        }, e.getRange = function(e) {
            return {
                start: e.pos,
                end: e.pos + (n(e) ? e.text.length : e.length)
            }
        }
    }(r || (r = {})),
    function(e) {
        const t = new i.diff_match_patch;
        e.fromDiff = function(e, n) {
            const o = t.diff_main(e, n, void 0, .05);
            t.diff_cleanupEfficiency(o);
            let a = 0;
            const s = [];
            for (const e of o) e[0] === i.DIFF_EQUAL ? a += e[1].length : e[0] === i.DIFF_INSERT ? (s.push(r.ins(a, e[1])), a += e[1].length) : s.push(r.del(a, e[1].length));
            return s
        }
    }(o || (o = {}))
}, , , , function(e, t, n) {
    "use strict";
    var r = n(22),
        o = n(10),
        i = n(3),
        a = n(16);
    class s {
        constructor(e, t, n, r, o) {
            this._baseUrl = e, this._appName = t, this._appVersion = n, this._env = r, this._fetch = o, this._context = {
                userId: void 0,
                containerId: void 0
            }, this._sessionId = Object(a.r)(), this._logEndpoint = Object(i.d)(this._baseUrl), this._crashEndpoint = Object(i.c)(this._baseUrl)
        }
        setUserId(e) {
            this._context = Object.assign({}, this._context, {
                userId: e
            })
        }
        setContainerId(e) {
            this._context = Object.assign({}, this._context, {
                containerId: e
            })
        }
        getContext() {
            return this._context
        }
        _sendRaw(e, t) {
            return this._fetch(e, {
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                method: "post",
                cache: "no-cache",
                body: JSON.stringify(t)
            }).then(e => void 0, e => {})
        }
        sendEvent(e) {
            const t = Object(i.b)(e, {
                application: this._appName,
                version: this._appVersion,
                env: this._env,
                context: this.getContext()
            });
            return this._sendRaw(this._logEndpoint, t)
        }
        sendCrashLog(e) {
            const t = e.map(e => Object(i.b)(e, {
                application: this._appName,
                version: this._appVersion,
                sessionId: this._sessionId,
                env: this._env,
                context: this.getContext()
            }));
            return this._sendRaw(this._crashEndpoint, t)
        }
        sendUsageEvent(e, t, n, r) {
            const o = Object(i.b)({
                logger: e,
                message: t,
                level: n,
                extra_usage: r
            }, {
                application: this._appName,
                version: this._appVersion,
                env: this._env
            });
            return this._sendRaw(this._logEndpoint, o)
        }
    }
    var c = n(240);
    class u {
        constructor(e, t, n, r, o) {
            this._baseUrl = e, this._appName = t, this._appVersion = n, this._env = r, this._fetch = o, this._context = {
                userId: void 0,
                containerId: void 0
            }
        }
        setUserId(e) {
            this._context = Object.assign({}, this._context, {
                userId: e
            })
        }
        setContainerId(e) {
            this._context = Object.assign({}, this._context, {
                containerId: e
            })
        }
        getContext() {
            return this._context
        }
        send(e) {
            const t = Object(i.b)(e, {
                application: this._appName,
                version: this._appVersion,
                env: this._env,
                context: this.getContext()
            });
            return this._fetch(this._baseUrl, {
                mode: "no-cors",
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                cache: "no-cache",
                body: JSON.stringify(t)
            })
        }
    }
    var l = n(150),
        d = n(12),
        f = n(121);
    n.d(t, "b", (function() {
        return b
    })), n.d(t, "a", (function() {
        return v
    })), n.d(t, "c", (function() {
        return _
    }));
    const h = d.a.create("lib.tracking.call");
    let g, p;
    var m;
    ! function(e) {
        function t() {
            return g || (g = Object(o.i)() ? new s(Object(o.f)().newFelog, Object(o.a)(), Object(o.h)(), Object(o.c)(), window.fetch.bind(window)) : void 0), g
        }

        function n() {
            return p || (p = Object(o.i)() ? new u(Object(o.f)().sumoLogic, Object(o.a)(), Object(o.h)(), Object(o.c)(), window.fetch.bind(window)) : void 0), p
        }
        let r;
        ! function(e) {
            e.sendFelog = function(e, n, r, o) {
                const i = t();
                if (!i) throw Error("sendFelog unavailable");
                i.sendEvent({
                    logger: e,
                    message: n,
                    level: r,
                    extra: o
                }).catch(t => Object(c.a)(e, n, r, o, i.getContext()))
            }, e.sendFelogEvent = function(e) {
                const n = t();
                if (!n) throw Error("felog unavailable");
                n.sendEvent(e).catch(t => Object(c.b)(e, n.getContext()))
            }, e.sendSumoLogic = function(e, t, r, o) {
                const i = n();
                if (!i) throw Error("sumoLogicClient unavailable");
                i.send({
                    logger: e,
                    message: t,
                    level: r,
                    extra: o
                }).catch(n => Object(c.a)(e, t, r, o, i.getContext()))
            }, e.sendFelogCrashLogs = function(e) {
                const n = t();
                n && n.sendCrashLog(e)
            }, e.sendFelogUsageEvent = function(e, n, r, o) {
                const i = t();
                if (!i) throw Error("felogClient unavailable");
                i.sendUsageEvent(e, n, r, o).catch(t => Object(c.a)(e, n, r))
            }, e.setUserId = function(e) {
                const r = t();
                r && r.setUserId(e);
                const o = n();
                o && o.setUserId(e)
            }, e.setContainerId = function(e) {
                const r = t();
                r && r.setContainerId(e);
                const o = n();
                o && o.setContainerId(e)
            }
        }(r = e.methods || (e.methods = {})), e.CALL_HANDLER_ID = "tracking/RPC"
    }(m || (m = {}));
    const b = Object.keys(m.methods).reduce((e, t) => (e[t] = (...e) => v(m.CALL_HANDLER_ID, t, ...e), e), {});

    function v(e, ...t) {
        const n = t => {
            h.warn(`tracking call ${e} failed, reason: `, t)
        };
        if (Object(o.i)()) Object(a.g)(() => {
            try {
                switch (_(e, t), e) {
                    case m.CALL_HANDLER_ID:
                        const n = t[0],
                            r = t.slice(1);
                        m.methods[n](...r);
                        break;
                    default:
                        ! function(e, t) {
                            const [n, r] = e.split(".");
                            if ("gnar" === n)
                                if (l.a.gnar)
                                    if ("track" === r) {
                                        const [e, n] = t;
                                        l.a.gnar.track(Object.assign({
                                            eventName: Object(o.d)() + "/" + e
                                        }, n))
                                    } else if ("pingMaybe" === r) l.a.gnar.pingMaybe();
                            else if ("setUser" === r) try {
                                l.a.gnar.setUser(t[0], t[1])
                            } catch (e) {
                                Object(f.a)().gnar.errorSetUser(JSON.stringify(e))
                            } else h.error(`gnar client does not have method '${r}' for '${e}' in runMessage`);
                            else h.error(`gnar client not available for '${e}' in runMessage`);
                            else h.error(`unrecognized '${e}' in runMessage`)
                        }(e, t)
                }
            } catch (e) {
                n(e)
            }
        }, 20);
        else {
            const o = 1e4;
            let i;
            const a = () => clearInterval(i),
                s = e => {
                    a(), n(e)
                };
            i = window.setTimeout(() => s("timeout call through bg page"), o), r.emitBackground("tracking-call", {
                msg: e,
                data: t
            }, a)
        }
    }

    function _(e, t) {
        h.info(e, t)
    }
}, , , , , , , function(e, t, n) {
    "use strict";
    var r;
    n.d(t, "a", (function() {
            return r
        })),
        function(e) {
            function t(e) {
                return new Promise(e)
            }
            e.create = t, e.createCompletionSource = function() {
                let e, t;
                return {
                    promise: new Promise((n, r) => {
                        e = n, t = r
                    }),
                    resolve(t) {
                        e(t)
                    },
                    reject(e) {
                        t(e)
                    }
                }
            }, e.sync = function(e) {
                return t((t, n) => t(e()))
            }, e.delay = function(t) {
                return e.create(e => {
                    setTimeout(() => {
                        e()
                    }, t)
                })
            }
        }(r || (r = {}))
}, , function(e, t, n) {
    "use strict";
    n.d(t, "d", (function() {
        return i
    })), n.d(t, "e", (function() {
        return a
    })), n.d(t, "f", (function() {
        return s
    })), n.d(t, "c", (function() {
        return c
    })), n.d(t, "b", (function() {
        return u
    })), n.d(t, "a", (function() {
        return l
    }));
    var r = n(58);
    const o = n(12).a.create("extension-api");

    function i(e) {
        window.extensionBackgroundPageApi && o.warn("Background Page Extension Api init called more than once"), window.extensionBackgroundPageApi = window.extensionBackgroundPageApi || e
    }

    function a(e) {
        window.extensionContentScriptApi && o.warn("Content Script Extension Api init called more than once"), window.extensionContentScriptApi = window.extensionContentScriptApi || e
    }

    function s(e) {
        window.extensionPopupApi && o.warn("Popup Extension Api init called more than once"), window.extensionPopupApi = window.extensionPopupApi || e
    }

    function c() {
        return Object(r.c)(window.extensionPopupApi, "popup extension api was not initialized")
    }

    function u() {
        return Object(r.c)(window.extensionContentScriptApi, "content script extension api was not initialized")
    }

    function l() {
        return Object(r.c)(window.extensionBackgroundPageApi, "backgound page extension api was not initialized")
    }
}, function(e, t, n) {
    "use strict";

    function r() {}
    n.d(t, "a", (function() {
        return r
    }))
}, , function(e, t, n) {
    "use strict";
    var r = n(86),
        o = n(125);
    t.a = function(e) {
        return null != e && Object(o.a)(e.length) && !Object(r.a)(e)
    }
}, , , function(e, t, n) {
    "use strict";

    function r(e) {
        const t = {},
            n = e || {};
        return n.emit = function(e, n) {
            e = r(e);
            const o = t[e];
            if (!o) return;
            const i = o.concat();
            for (let e = 0; e < i.length; e++) i[e](n)
        }, n.emitArgs = function(e) {
            e = r(e);
            const n = t[e],
                o = [].slice.call(arguments, 1);
            if (!n) return;
            const i = n.concat();
            for (let e = 0; e < i.length; e++) i[e].apply(null, o)
        }, n.on = function(e, o) {
            return e = r(e), t[e] = t[e] || [], t[e].push(o), {
                un: function() {
                    n.un(e, o)
                }
            }
        }, n.off = n.un = function(e, n) {
            e = r(e);
            const o = t[e];
            if (!o) return;
            const i = o.indexOf(n);
            i > -1 && (o.splice(i, 1), o.length > 0 || delete t[e])
        }, n.one = function(e, t) {
            const r = n.on(e, (function() {
                r.un(), t.apply(null, arguments)
            }))
        }, n.delegate = function(e, t, o) {
            t = r(t), n.on(t, (function(n) {
                e.emit(o || t, n)
            }))
        }, n;

        function r(e) {
            return "string" != typeof e ? e.join(" ") : e
        }
    }
    n.r(t), n.d(t, "emitter", (function() {
        return r
    }))
}, , function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(36),
            o = n(277),
            i = "object" == typeof exports && exports && !exports.nodeType && exports,
            a = i && "object" == typeof e && e && !e.nodeType && e,
            s = a && a.exports === i ? r.a.Buffer : void 0,
            c = (s ? s.isBuffer : void 0) || o.a;
        t.a = c
    }).call(this, n(198)(e))
}, , function(e, t, n) {
    "use strict";
    t.a = function(e, t) {
        return e === t || e != e && t != t
    }
}, function(e, t, n) {
    "use strict";
    var r = n(84),
        o = function(e, t) {
            for (var n = e.length; n--;)
                if (Object(r.a)(e[n][0], t)) return n;
            return -1
        },
        i = Array.prototype.splice;

    function a(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }
    a.prototype.clear = function() {
        this.__data__ = [], this.size = 0
    }, a.prototype.delete = function(e) {
        var t = this.__data__,
            n = o(t, e);
        return !(n < 0 || (n == t.length - 1 ? t.pop() : i.call(t, n, 1), --this.size, 0))
    }, a.prototype.get = function(e) {
        var t = this.__data__,
            n = o(t, e);
        return n < 0 ? void 0 : t[n][1]
    }, a.prototype.has = function(e) {
        return o(this.__data__, e) > -1
    }, a.prototype.set = function(e, t) {
        var n = this.__data__,
            r = o(n, e);
        return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this
    }, t.a = a
}, function(e, t, n) {
    "use strict";
    var r = n(52),
        o = n(31);
    t.a = function(e) {
        if (!Object(o.a)(e)) return !1;
        var t = Object(r.a)(e);
        return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
    }
}, function(e, t, n) {
    "use strict";
    var r = Function.prototype.toString;
    t.a = function(e) {
        if (null != e) {
            try {
                return r.call(e)
            } catch (e) {}
            try {
                return e + ""
            } catch (e) {}
        }
        return ""
    }
}, , function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "t", (function() {
        return r
    })), n.d(t, "DAPI_ACTIONS", (function() {
        return o
    })), n.d(t, "CACHED_ACTIONS", (function() {
        return i
    })), n.d(t, "setDapiProp", (function() {
        return a
    })), n.d(t, "changeWeakDialect", (function() {
        return s
    })), n.d(t, "changeStrongDialect", (function() {
        return c
    })), n.d(t, "initialSettings", (function() {
        return u
    })), n.d(t, "toggleDefs", (function() {
        return l
    })), n.d(t, "toggleAutocorrect", (function() {
        return d
    })), n.d(t, "toggleSite", (function() {
        return f
    })), n.d(t, "toggleField", (function() {
        return h
    })), n.d(t, "seenNews", (function() {
        return g
    })), n.d(t, "gdocsOptedIn", (function() {
        return p
    })), n.d(t, "gdocsOptedOut", (function() {
        return m
    })), n.d(t, "seenGdocsOptIn", (function() {
        return b
    })), n.d(t, "seenGdocsLargeDocumentWarning", (function() {
        return v
    })), n.d(t, "hideGdocsSigninPopup", (function() {
        return _
    })), n.d(t, "clickGdocsAuthentication", (function() {
        return y
    })), n.d(t, "setGdocsEnabledSetting", (function() {
        return w
    })), n.d(t, "showOnboarding", (function() {
        return O
    })), n.d(t, "seenOnboarding", (function() {
        return j
    })), n.d(t, "seenDelightfulMessage", (function() {
        return E
    })), n.d(t, "showNews", (function() {
        return k
    })), n.d(t, "saveAnonymousProps", (function() {
        return S
    })), n.d(t, "disableOnTab", (function() {
        return I
    })), n.d(t, "showDisableReminder", (function() {
        return C
    })), n.d(t, "disableReminder", (function() {
        return A
    })), n.d(t, "showEdgePopupFromGButton", (function() {
        return N
    })), n.d(t, "showLoginReminder", (function() {
        return x
    })), n.d(t, "hideLoginReminder", (function() {
        return T
    })), n.d(t, "disableLoginReminder", (function() {
        return P
    })), n.d(t, "disableEmailSummarization", (function() {
        return D
    })), n.d(t, "saveEmailConnectednessData", (function() {
        return R
    })), n.d(t, "setEmogenieEmojiState", (function() {
        return M
    })), n.d(t, "seenClarityNotification", (function() {
        return F
    })), n.d(t, "showGmailSendEmailPremiumPopup", (function() {
        return L
    })), n.d(t, "setHideWelcomeEmogenieNotification", (function() {
        return U
    }));
    const r = {
            SETTINGS_INITIAL: "settings/SETTINGS_INITIAL",
            TOGGLE_DEFS: "settings/TOGGLE_DEFS",
            TOGGLE_AUTOCORRECT: "settings/TOGGLE_AUTOCORRECT",
            TOGGLE_SITE: "settings/TOGGLE_SITE",
            TOGGLE_FIELD: "settings/TOGGLE_FIELD",
            DISABLE_ON_TAB: "settings/DISABLE_ON_TAB",
            DISABLE_REMINDER_NOTIFICATION: "settings/DISABLE_REMINDER_NOTIFICATION",
            SHOW_DISABLE_REMINDER: "settings/SHOW_DISABLE_REMINDER",
            DISABLE_EMAIL_SUMMARIZATION: "settings/DISABLE_EMAIL_SUMMARIZATION",
            SHOW_NEWS: "settings/SHOW_NEWS",
            SEEN_NEWS: "settings/SEEN_NEWS",
            SEEN_GDOCS_OPT_IN: "settings/SEEN_GDOCS_OPT_IN",
            SEEN_GDOCS_LARGE_DOCUMENT_WARNING: "settings/SEEN_GDOCS_LARGE_DOCUMENT_WARNING",
            SET_GDOCS_OPT_IN: "setting/SET_GDOCS_OPT_IN",
            SET_GDOCS_OPT_OUT: "setting/SET_GDOCS_OPT_OUT",
            HIDE_GDOCS_SIGNIN_POPUP: "settings/HIDE_GDOCS_SIGNIN_POPUP",
            CLICK_GDOCS_AUTHENTICATION: "settings/CLICK_GDOCS_AUTHENTICATION",
            SET_GDOCS_ENABLED_SETTING: "settings/SET_GDOCS_ENABLED_SETTING",
            SHOW_ONBOARDING: "settings/SHOW_ONBOARDING",
            SEEN_ONBOARDING: "settings/SEEN_ONBOARDING",
            SEEN_DELIGHTFUL_MESSAGE: "settings/SEEN_DELIGHTFUL_MESSAGE",
            SHOW_LOGIN_REMINDER: "settings/SHOW_LOGIN_REMINDER",
            HIDE_LOGIN_REMINDER: "settings/HIDE_LOGIN_REMINDER",
            DISABLE_LOGIN_REMINDER: "settings/DISABLE_LOGIN_REMINDER",
            SET_DAPI_PROP: "settings/SET_DAPI_PROP",
            CHANGE_WEAK_DIALECT: "settings/CHANGE_WEAK_DIALECT",
            CHANGE_STRONG_DIALECT: "settings/CHANGE_STRONG_DIALECT",
            SAVE_ANONYMOUS_PROPERTIES: "settings/SAVE_ANONYMOUS_PROPERTIES",
            EDGE_POPUP_FROM_GBUTTON: "settings/EDGE_POPUP_FROM_GBUTTON",
            SAVE_EMAIL_CONNECTEDNESS_DATA: "settings/SAVE_EMAIL_CONNECTEDNESS_DATA",
            SHOW_DATA_CONTROL_POPUP: "settings/SHOW_DATA_CONTROL_POPUP",
            SET_EMOGENIE_EMOJI_STATE: "settings/SET_EMOGENIE_EMOJI_STATE",
            SET_HIDE_WELCOME_EMOGENIE_NOTIFICATION: "settings/SET_HIDE_WELCOME_EMOGENIE_NOTIFICATION",
            SEEN_CLARITY_NOTIFICATION: "settings/SEEN_CLARITY_NOTIFICATION",
            SHOW_GMAIL_SEND_EMAIL_PREMIUM_POPUP: "setting/SHOW_GMAIL_SEND_EMAIL_PREMIUM_POPUP"
        },
        o = [r.CHANGE_WEAK_DIALECT, r.CHANGE_STRONG_DIALECT, r.SET_EMOGENIE_EMOJI_STATE],
        i = [r.TOGGLE_DEFS, r.TOGGLE_AUTOCORRECT, r.TOGGLE_SITE, r.TOGGLE_FIELD, r.SEEN_NEWS, r.SEEN_GDOCS_OPT_IN, r.SEEN_GDOCS_LARGE_DOCUMENT_WARNING, r.HIDE_GDOCS_SIGNIN_POPUP, r.CLICK_GDOCS_AUTHENTICATION, r.SET_GDOCS_ENABLED_SETTING, r.SET_GDOCS_OPT_IN, r.SET_GDOCS_OPT_OUT, r.SHOW_ONBOARDING, r.SEEN_ONBOARDING, r.SEEN_DELIGHTFUL_MESSAGE, r.SHOW_LOGIN_REMINDER, r.HIDE_LOGIN_REMINDER, r.DISABLE_LOGIN_REMINDER, r.SHOW_DISABLE_REMINDER, r.DISABLE_REMINDER_NOTIFICATION, r.DISABLE_EMAIL_SUMMARIZATION, r.EDGE_POPUP_FROM_GBUTTON, r.SHOW_DATA_CONTROL_POPUP, r.SEEN_CLARITY_NOTIFICATION, r.SHOW_GMAIL_SEND_EMAIL_PREMIUM_POPUP, r.SET_HIDE_WELCOME_EMOGENIE_NOTIFICATION];

    function a(e, t) {
        return {
            type: r.SET_DAPI_PROP,
            propKey: e,
            data: t
        }
    }

    function s(e) {
        return {
            type: r.CHANGE_WEAK_DIALECT,
            data: e
        }
    }

    function c(e) {
        return {
            type: r.CHANGE_STRONG_DIALECT,
            data: e
        }
    }

    function u(e) {
        return {
            type: r.SETTINGS_INITIAL,
            data: e
        }
    }

    function l(e) {
        return {
            type: r.TOGGLE_DEFS,
            enabledDefs: e
        }
    }

    function d(e) {
        return {
            type: r.TOGGLE_AUTOCORRECT,
            enabled: e
        }
    }

    function f(e, t) {
        return {
            type: r.TOGGLE_SITE,
            domain: t,
            enabled: e
        }
    }

    function h(e, t) {
        return {
            type: r.TOGGLE_FIELD,
            domain: t,
            data: e
        }
    }

    function g() {
        return {
            type: r.SEEN_NEWS
        }
    }

    function p() {
        return {
            type: r.SET_GDOCS_OPT_IN
        }
    }

    function m() {
        return {
            type: r.SET_GDOCS_OPT_OUT
        }
    }

    function b() {
        return {
            type: r.SEEN_GDOCS_OPT_IN
        }
    }

    function v() {
        return {
            type: r.SEEN_GDOCS_LARGE_DOCUMENT_WARNING
        }
    }

    function _() {
        return {
            type: r.HIDE_GDOCS_SIGNIN_POPUP
        }
    }

    function y() {
        return {
            type: r.CLICK_GDOCS_AUTHENTICATION
        }
    }

    function w() {
        return {
            type: r.SET_GDOCS_ENABLED_SETTING
        }
    }

    function O() {
        return {
            type: r.SHOW_ONBOARDING
        }
    }

    function j() {
        return {
            type: r.SEEN_ONBOARDING
        }
    }

    function E(e) {
        return {
            type: r.SEEN_DELIGHTFUL_MESSAGE,
            delightfulMessageId: e
        }
    }

    function k(e) {
        return {
            type: r.SHOW_NEWS,
            showNews: e
        }
    }

    function S(e) {
        return {
            type: r.SAVE_ANONYMOUS_PROPERTIES,
            props: e
        }
    }

    function I() {
        return {
            type: r.DISABLE_ON_TAB
        }
    }

    function C(e) {
        return {
            type: r.SHOW_DISABLE_REMINDER,
            domain: e
        }
    }

    function A(e) {
        return {
            type: r.DISABLE_REMINDER_NOTIFICATION,
            domain: e
        }
    }

    function N() {
        return {
            type: r.EDGE_POPUP_FROM_GBUTTON
        }
    }

    function x(e) {
        return {
            type: r.SHOW_LOGIN_REMINDER,
            loginReminderType: e
        }
    }

    function T() {
        return {
            type: r.HIDE_LOGIN_REMINDER
        }
    }

    function P() {
        return {
            type: r.DISABLE_LOGIN_REMINDER
        }
    }

    function D() {
        return {
            type: r.DISABLE_EMAIL_SUMMARIZATION
        }
    }

    function R(e) {
        return {
            type: r.SAVE_EMAIL_CONNECTEDNESS_DATA,
            emailConnectednessData: e
        }
    }

    function M(e) {
        return {
            type: r.SET_EMOGENIE_EMOJI_STATE,
            data: e
        }
    }

    function F() {
        return {
            type: r.SEEN_CLARITY_NOTIFICATION
        }
    }

    function L() {
        return {
            type: r.SHOW_GMAIL_SEND_EMAIL_PREMIUM_POPUP
        }
    }

    function U() {
        return {
            type: r.SET_HIDE_WELCOME_EMOGENIE_NOTIFICATION
        }
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "h", (function() {
        return s
    })), n.d(t, "d", (function() {
        return c
    })), n.d(t, "e", (function() {
        return u
    })), n.d(t, "f", (function() {
        return l
    })), n.d(t, "g", (function() {
        return d
    })), n.d(t, "b", (function() {
        return f
    })), n.d(t, "c", (function() {
        return h
    })), n.d(t, "a", (function() {
        return g
    }));
    class r {
        constructor(e) {
            this.expectedType = e
        }
    }
    class o extends r {
        constructor(e, t) {
            super(e), this.value = t
        }
    }
    class i {
        constructor(e, t) {
            this.fieldName = e, this.error = t
        }
    }
    class a extends r {
        constructor(e, t) {
            super(e), this.fieldErrors = t
        }
    }

    function s(e) {
        return "string" == typeof e ? {
            result: e
        } : {
            error: new o("string", e)
        }
    }

    function c(e) {
        return "boolean" == typeof e ? {
            result: e
        } : {
            error: new o("boolean", e)
        }
    }

    function u(e) {
        if ("string" == typeof e) {
            let t;
            try {
                t = new Date(e)
            } catch (t) {
                return {
                    error: new o("ISO date", e)
                }
            }
            return {
                result: t
            }
        }
        return {
            error: new o("ISO date", e)
        }
    }

    function l(e) {
        return t => void 0 === t ? {
            result: void 0
        } : e(t)
    }

    function d(e, t) {
        return n => {
            if ("object" != typeof n || null == n) return {
                error: new o(e, n)
            };
            const r = {},
                s = [];
            return Object.keys(t).forEach(e => {
                const o = t[e](n[e], n, e);
                "error" in o ? s.push(new i(e, o.error)) : r[e] = o.result
            }), s.length > 0 ? {
                error: new a(e, s)
            } : {
                result: r
            }
        }
    }

    function f(e, t) {
        return n => {
            const r = e(n);
            return "error" in r ? r : {
                result: t(r.result)
            }
        }
    }

    function h(e) {
        return t => {
            const n = e(t);
            if ("error" in n) throw new Error(`Parse error: ${JSON.stringify(n.error)}`);
            return n.result
        }
    }

    function g(e, t) {
        return (n, r) => t(r[e])
    }
}, function(e, t, n) {
    "use strict";
    var r = n(52),
        o = n(125),
        i = n(46),
        a = {};
    a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1;
    var s = n(268),
        c = n(226),
        u = c.a && c.a.isTypedArray,
        l = u ? Object(s.a)(u) : function(e) {
            return Object(i.a)(e) && Object(o.a)(e.length) && !!a[Object(r.a)(e)]
        };
    t.a = l
}, , , function(e, t, n) {
    "use strict";

    function r(e) {
        return "function" == typeof e
    }
    n.d(t, "a", (function() {
        return r
    }))
}, , function(e, t, n) {
    "use strict";
    var r = n(57),
        o = n(36),
        i = Object(r.a)(o.a, "Map");
    t.a = i
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return r
    }));
    var r = "function" == typeof Symbol && Symbol.observable || "@@observable"
}, function(e, t, n) {
    "use strict";
    var r = n(109);
    t.a = function(e) {
        if ("string" == typeof e || Object(r.a)(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -1 / 0 ? "-0" : t
    }
}, function(e, t, n) {
    "use strict";
    var r = n(52),
        o = n(46),
        i = function(e) {
            return Object(o.a)(e) && "[object Arguments]" == Object(r.a)(e)
        },
        a = Object.prototype,
        s = a.hasOwnProperty,
        c = a.propertyIsEnumerable,
        u = i(function() {
            return arguments
        }()) ? i : function(e) {
            return Object(o.a)(e) && s.call(e, "callee") && !c.call(e, "callee")
        };
    t.a = u
}, function(e, t, n) {
    "use strict";
    var r, o, i, a, s, c, u, l, d;
    n.d(t, "b", (function() {
            return r
        })), n.d(t, "a", (function() {
            return o
        })), n.d(t, "d", (function() {
            return i
        })), n.d(t, "e", (function() {
            return a
        })), n.d(t, "c", (function() {
            return u
        })),
        function(e) {
            e.popupEditorIFrame = "popupEditorIFrame", e.bgPopupEditorIFrameToPopupEditor = "bg-PopupEditorIFrame-toPopupEditor", e.bgPopupEditorIFrameFromPopupEditor = "bg-PopupEditorIFrame-fromPopupEditor"
        }(r || (r = {})),
        function(e) {
            e.openPopup = "open-popup", e.closePopup = "close-popup", e.loaded = "iframe-cs-loaded", e.popupClosing = "iframe-cs-popup-closing-state", e.changeUser = "change-user-popup", e.fullyLoaded = "denali-editor-loaded"
        }(o || (o = {})),
        function(e) {
            e.signInIFrame = "signInIFrame", e.bgSignInIFrame = "bg-bgSignInIFrame"
        }(i || (i = {})),
        function(e) {
            e.iframeReady = "iframeReady", e.showSigninDialog = "showSigninDialog", e.showSigninOnboarding = "showSigninOnboarding", e.signinOnboardingResult = "signinOnboardingResult", e.close = "close"
        }(a || (a = {})),
        function(e) {
            e.create = function() {
                return {
                    _tag: a.iframeReady
                }
            }
        }(s || (s = {})),
        function(e) {
            e.create = function() {
                return {
                    _tag: a.close
                }
            }
        }(c || (c = {})),
        function(e) {
            e.create = function(e, t, n, r) {
                return {
                    _tag: a.showSigninDialog,
                    user: e,
                    placement: t,
                    totalErrors: n,
                    shouldOpenLoginView: r
                }
            }
        }(u || (u = {})),
        function(e) {
            e.create = function(e) {
                return {
                    _tag: a.showSigninOnboarding,
                    experiments: e
                }
            }
        }(l || (l = {})),
        function(e) {
            e.create = function(e) {
                return {
                    _tag: a.signinOnboardingResult,
                    result: e
                }
            }
        }(d || (d = {}))
}, , , function(e, t, n) {
    "use strict";

    function r(e) {
        setTimeout((function() {
            throw e
        }), 0)
    }
    n.d(t, "a", (function() {
        return r
    }))
}, , , , , function(e, t, n) {
    "use strict";
    var r = n(85),
        o = n(96),
        i = n(114);

    function a(e) {
        var t = this.__data__ = new r.a(e);
        this.size = t.size
    }
    a.prototype.clear = function() {
        this.__data__ = new r.a, this.size = 0
    }, a.prototype.delete = function(e) {
        var t = this.__data__,
            n = t.delete(e);
        return this.size = t.size, n
    }, a.prototype.get = function(e) {
        return this.__data__.get(e)
    }, a.prototype.has = function(e) {
        return this.__data__.has(e)
    }, a.prototype.set = function(e, t) {
        var n = this.__data__;
        if (n instanceof r.a) {
            var a = n.__data__;
            if (!o.a || a.length < 199) return a.push([e, t]), this.size = ++n.size, this;
            n = this.__data__ = new i.a(a)
        }
        return n.set(e, t), this.size = n.size, this
    }, t.a = a
}, function(e, t, n) {
    "use strict";
    var r = n(52),
        o = n(46);
    t.a = function(e) {
        return "symbol" == typeof e || Object(o.a)(e) && "[object Symbol]" == Object(r.a)(e)
    }
}, , , , , function(e, t, n) {
    "use strict";
    var r = n(57),
        o = Object(r.a)(Object, "create"),
        i = Object.prototype.hasOwnProperty,
        a = Object.prototype.hasOwnProperty;

    function s(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }
    s.prototype.clear = function() {
        this.__data__ = o ? o(null) : {}, this.size = 0
    }, s.prototype.delete = function(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t
    }, s.prototype.get = function(e) {
        var t = this.__data__;
        if (o) {
            var n = t[e];
            return "__lodash_hash_undefined__" === n ? void 0 : n
        }
        return i.call(t, e) ? t[e] : void 0
    }, s.prototype.has = function(e) {
        var t = this.__data__;
        return o ? void 0 !== t[e] : a.call(t, e)
    }, s.prototype.set = function(e, t) {
        var n = this.__data__;
        return this.size += this.has(e) ? 0 : 1, n[e] = o && void 0 === t ? "__lodash_hash_undefined__" : t, this
    };
    var c = s,
        u = n(85),
        l = n(96),
        d = function(e, t) {
            var n = e.__data__;
            return function(e) {
                var t = typeof e;
                return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
            }(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
        };

    function f(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }
    f.prototype.clear = function() {
        this.size = 0, this.__data__ = {
            hash: new c,
            map: new(l.a || u.a),
            string: new c
        }
    }, f.prototype.delete = function(e) {
        var t = d(this, e).delete(e);
        return this.size -= t ? 1 : 0, t
    }, f.prototype.get = function(e) {
        return d(this, e).get(e)
    }, f.prototype.has = function(e) {
        return d(this, e).has(e)
    }, f.prototype.set = function(e, t) {
        var n = d(this, e),
            r = n.size;
        return n.set(e, t), this.size += n.size == r ? 0 : 1, this
    }, t.a = f
}, , , function(e, t, n) {
    "use strict";
    t.a = function(e) {
        return e
    }
}, , , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return a
    })), n.d(t, "b", (function() {
        return s
    }));
    var r = n(447),
        o = n(16);
    const i = Object(o.r)();

    function a(e, t, n, o, s = !1) {
        if (null == e) return;
        const c = e;
        if ("string" != typeof t) return Object(r.a)(t, (e, t) => {
            a(c, t, e, o)
        }); {
            if (!n) return;
            const e = c[i] || [];
            return c[i] = e, o ? (c[i] = e.filter(e => !(e.event === t && e.cb === n)), c.removeEventListener(t, n, s)) : (e.push({
                event: t,
                cb: n
            }), c.addEventListener(t, n, s)), {
                el: c,
                event: t,
                cb: n,
                bubble: s
            }
        }
    }

    function s(e, t, n, r) {
        const o = e;
        t || null == o[i] ? a(o, t, n, !0, r) : o[i].forEach(e => s(o, e.event, e.cb, e.bubble))
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return l
    })), n.d(t, "b", (function() {
        return d
    }));
    var r = n(17),
        o = n(65),
        i = n(349),
        a = n(156),
        s = n(10);
    const c = n(12).a.create("lib.tracking.logger");
    let u;

    function l() {
        return u || (u = new i.a(o.b.sendFelog.bind(o.b), o.b.sendFelogUsageEvent.bind(o.b), o.b.setUserId.bind(o.b), o.b.setContainerId.bind(o.b), r.a().appConfig.felog.sendUsageMetrics, a.a.create(window.performance), r.a().appConfig.felog.sendPerfMetrics, o.b.sendFelogEvent.bind(o.b), o.b.sendFelogCrashLogs.bind(o.b))), u
    }

    function d() {
        Object(s.i)() && (c.info("Installing unhandled error loggers..."), function() {
            const e = l();
            window.addEventListener("error", t => e.unhandledBgPageException(t)), window.addEventListener("unhandledrejection", t => e.unhandledBgPageRejection(t))
        }())
    }
}, , , , function(e, t, n) {
    "use strict";
    t.a = function(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
    }
}, function(e, t, n) {
    "use strict";
    var r = /^(?:0|[1-9]\d*)$/;
    t.a = function(e, t) {
        var n = typeof e;
        return !!(t = null == t ? 9007199254740991 : t) && ("number" == n || "symbol" != n && r.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
}, , function(e, t, n) {
    "use strict";
    var r = Object.prototype;
    t.a = function(e) {
        var t = e && e.constructor;
        return e === ("function" == typeof t && t.prototype || r)
    }
}, , , , , , , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return r
    }));
    var r = "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random()
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return r
    }));
    var r = function() {
        function e(e) {
            return Error.call(this), this.message = e ? e.length + " errors occurred during unsubscription:\n" + e.map((function(e, t) {
                return t + 1 + ") " + e.toString()
            })).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = e, this
        }
        return e.prototype = Object.create(Error.prototype), e
    }()
}, , , function(e, t, n) {
    "use strict";
    var r = n(27),
        o = n(109),
        i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        a = /^\w*$/;
    t.a = function(e, t) {
        if (Object(r.a)(e)) return !1;
        var n = typeof e;
        return !("number" != n && "symbol" != n && "boolean" != n && null != e && !Object(o.a)(e)) || a.test(e) || !i.test(e) || null != t && e in Object(t)
    }
}, function(e, t, n) {
    "use strict";
    var r = n(212),
        o = n(256),
        i = n(77);
    t.a = function(e) {
        return Object(i.a)(e) ? Object(r.a)(e) : Object(o.a)(e)
    }
}, function(e, t, n) {
    "use strict";
    var r = n(108),
        o = n(292),
        i = function(e, t) {
            for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
                if (t(e[n], n, e)) return !0;
            return !1
        },
        a = n(278),
        s = function(e, t, n, r, s, c) {
            var u = 1 & n,
                l = e.length,
                d = t.length;
            if (l != d && !(u && d > l)) return !1;
            var f = c.get(e);
            if (f && c.get(t)) return f == t;
            var h = -1,
                g = !0,
                p = 2 & n ? new o.a : void 0;
            for (c.set(e, t), c.set(t, e); ++h < l;) {
                var m = e[h],
                    b = t[h];
                if (r) var v = u ? r(b, m, h, t, e, c) : r(m, b, h, e, t, c);
                if (void 0 !== v) {
                    if (v) continue;
                    g = !1;
                    break
                }
                if (p) {
                    if (!i(t, (function(e, t) {
                            if (!Object(a.a)(p, t) && (m === e || s(m, e, n, r, c))) return p.push(t)
                        }))) {
                        g = !1;
                        break
                    }
                } else if (m !== b && !s(m, b, n, r, c)) {
                    g = !1;
                    break
                }
            }
            return c.delete(e), c.delete(t), g
        },
        c = n(59),
        u = n(152),
        l = n(84),
        d = function(e) {
            var t = -1,
                n = Array(e.size);
            return e.forEach((function(e, r) {
                n[++t] = [r, e]
            })), n
        },
        f = function(e) {
            var t = -1,
                n = Array(e.size);
            return e.forEach((function(e) {
                n[++t] = e
            })), n
        },
        h = c.a ? c.a.prototype : void 0,
        g = h ? h.valueOf : void 0,
        p = function(e, t, n, r, o, i, a) {
            switch (n) {
                case "[object DataView]":
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                    e = e.buffer, t = t.buffer;
                case "[object ArrayBuffer]":
                    return !(e.byteLength != t.byteLength || !i(new u.a(e), new u.a(t)));
                case "[object Boolean]":
                case "[object Date]":
                case "[object Number]":
                    return Object(l.a)(+e, +t);
                case "[object Error]":
                    return e.name == t.name && e.message == t.message;
                case "[object RegExp]":
                case "[object String]":
                    return e == t + "";
                case "[object Map]":
                    var c = d;
                case "[object Set]":
                    var h = 1 & r;
                    if (c || (c = f), e.size != t.size && !h) return !1;
                    var p = a.get(e);
                    if (p) return p == t;
                    r |= 2, a.set(e, t);
                    var m = s(c(e), c(t), r, o, i, a);
                    return a.delete(e), m;
                case "[object Symbol]":
                    if (g) return g.call(e) == g.call(t)
            }
            return !1
        },
        m = n(271),
        b = n(27),
        v = Object.prototype.propertyIsEnumerable,
        _ = Object.getOwnPropertySymbols,
        y = _ ? function(e) {
            return null == e ? [] : (e = Object(e), function(e, t) {
                for (var n = -1, r = null == e ? 0 : e.length, o = 0, i = []; ++n < r;) {
                    var a = e[n];
                    t(a, n, e) && (i[o++] = a)
                }
                return i
            }(_(e), (function(t) {
                return v.call(e, t)
            })))
        } : function() {
            return []
        },
        w = n(142),
        O = function(e) {
            return function(e, t, n) {
                var r = t(e);
                return Object(b.a)(e) ? r : Object(m.a)(r, n(e))
            }(e, w.a, y)
        },
        j = Object.prototype.hasOwnProperty,
        E = n(202),
        k = n(82),
        S = n(91),
        I = "[object Arguments]",
        C = "[object Array]",
        A = "[object Object]",
        N = Object.prototype.hasOwnProperty,
        x = function(e, t, n, o, i, a) {
            var c = Object(b.a)(e),
                u = Object(b.a)(t),
                l = c ? C : Object(E.a)(e),
                d = u ? C : Object(E.a)(t),
                f = (l = l == I ? A : l) == A,
                h = (d = d == I ? A : d) == A,
                g = l == d;
            if (g && Object(k.a)(e)) {
                if (!Object(k.a)(t)) return !1;
                c = !0, f = !1
            }
            if (g && !f) return a || (a = new r.a), c || Object(S.a)(e) ? s(e, t, n, o, i, a) : p(e, t, l, n, o, i, a);
            if (!(1 & n)) {
                var m = f && N.call(e, "__wrapped__"),
                    v = h && N.call(t, "__wrapped__");
                if (m || v) {
                    var _ = m ? e.value() : e,
                        y = v ? t.value() : t;
                    return a || (a = new r.a), i(_, y, n, o, a)
                }
            }
            return !!g && (a || (a = new r.a), function(e, t, n, r, o, i) {
                var a = 1 & n,
                    s = O(e),
                    c = s.length;
                if (c != O(t).length && !a) return !1;
                for (var u = c; u--;) {
                    var l = s[u];
                    if (!(a ? l in t : j.call(t, l))) return !1
                }
                var d = i.get(e);
                if (d && i.get(t)) return d == t;
                var f = !0;
                i.set(e, t), i.set(t, e);
                for (var h = a; ++u < c;) {
                    var g = e[l = s[u]],
                        p = t[l];
                    if (r) var m = a ? r(p, g, l, t, e, i) : r(g, p, l, e, t, i);
                    if (!(void 0 === m ? g === p || o(g, p, n, r, i) : m)) {
                        f = !1;
                        break
                    }
                    h || (h = "constructor" == l)
                }
                if (f && !h) {
                    var b = e.constructor,
                        v = t.constructor;
                    b != v && "constructor" in e && "constructor" in t && !("function" == typeof b && b instanceof b && "function" == typeof v && v instanceof v) && (f = !1)
                }
                return i.delete(e), i.delete(t), f
            }(e, t, n, o, i, a))
        },
        T = n(46);
    t.a = function e(t, n, r, o, i) {
        return t === n || (null == t || null == n || !Object(T.a)(t) && !Object(T.a)(n) ? t != t && n != n : x(t, n, r, o, e, i))
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return u
    })), n.d(t, "b", (function() {
        return l
    }));
    var r = n(167),
        o = n(194),
        i = n(25),
        a = n(177),
        s = n(17),
        c = n(145);
    class u {
        constructor(e) {
            const t = e.testArgs,
                n = t && t.processEnv ? t.processEnv : c.b.fromBrowserify(),
                u = c.a.getTargetEnv(n),
                l = "edge" === e.browser || t && t.forceEdgeCompatLoggingMode,
                d = "prod" !== u || "cs" !== e.context,
                f = {
                    create: e => new r.b(e, {
                        writer: new a.a(l),
                        filterFn: d ? e => !0 : Object(o.a)(i.a.ERROR)
                    })
                },
                h = Object(s.b)(e.browser, e.context, n, u);
            this.config = h, this.logger = f
        }
        static getInstance() {
            if (void 0 === this._instanceShared) throw new Error("Env not inited yet");
            return this._instanceShared
        }
        static initShared(e) {
            if (void 0 !== this._instanceShared) throw new Error("Env already inited");
            this._instanceShared = e
        }
    }

    function l() {
        return u.getInstance()
    }
}, function(e, t, n) {
    "use strict";
    var r, o = n(4);
    ! function(e) {
        e.create = function(e, t, n, r, o) {
            const i = `https://www.${e}`,
                a = `https://data.${e}`,
                s = `https://app.${e}`,
                c = `https://auth.${e}/v3`;
            return {
                app: s,
                appPersonalDictionary: `https://account.${e}/customize`,
                capi: `wss://capi.${e}/freews`,
                capiGDocs: `wss://capi.${e}/gdocs`,
                dapiMimic: `${a}/api/mimic`,
                dapiProps: `${a}/api/props/v2`,
                dapiFindProps: `${a}/api/props/v2/find`,
                editorDictionary: `${s}/profile/dictionary`,
                dictionary: `https://capi.${e}/api/defs`,
                docs: `${s}/docs`,
                docsApi: `https://dox.${e}/documents`,
                newDoc: `${s}/docs/new`,
                userOrAnonymous: `${c}/user/oranonymous`,
                authSignin: `${c}/api/login`,
                authSignup: `${c}/api/signup`,
                authExchange: `${c}/api/unified-login/code/exchange`,
                authLogout: `${c}/logout`,
                signin: `${i}/signin`,
                signup: `${i}/signup`,
                fbSignin: `${i}/signin?fromExtensionFb=true`,
                fbSignup: `${i}/signup?fromExtensionFb=true`,
                googleSignin: `${i}/signin?fromExtensionGoogle=true`,
                googleSignup: `${i}/signup?fromExtensionGoogle=true`,
                resetPassword: `${i}/resetpassword`,
                newFelog: t,
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
                grammarlyDomain: e,
                grammarlyProtocol: "https:"
            }
        }
    }(r || (r = {}));
    var i, a, s, c, u, l, d = n(58);
    ! function(e) {
        const t = {
            chrome: "chromeExt",
            firefox: "firefoxExt",
            safari: "safariExt",
            edge: "edgeExt"
        };
        e.create = function(e, n) {
            return {
                appName: Object(d.c)(t[e], "gnar app name"),
                url: `https://gnar.${n}`,
                domain: `.${n}`,
                sendEmailInfoTracking: !0,
                sendFluidExperimentData: !1
            }
        }
    }(i || (i = {})),
    function(e) {
        const t = {
            chrome: "extensionChrome",
            firefox: "extensionFirefox",
            safari: "extensionSafari",
            edge: "extensionEdge"
        };
        e.create = function(e, n) {
            return {
                appName: Object(d.c)(t[e], "felog app name"),
                sendUsageMetrics: !0,
                sendPerfMetrics: "dev" === n || Math.random() <= .01
            }
        }
    }(a || (a = {})),
    function(e) {
        const t = {
            chrome: "extensionChrome",
            firefox: "extensionFirefox",
            safari: "extensionSafari",
            edge: "extensionEdge"
        };
        e.create = function(e) {
            return {
                appName: Object(d.c)(t[e], "sumologic app name")
            }
        }
    }(s || (s = {})),
    function(e) {
        e.create = function() {
            return {}
        }
    }(c || (c = {})),
    function(e) {
        e.create = function(e) {
            return {
                gdocsSupported: "chrome" === e || "firefox" === e || "safari" === e
            }
        }
    }(u || (u = {})),
    function(e) {
        const t = "grammarly.com";
        e.create = function(e, n, s, l) {
            const d = "prod" === n ? "https://f-log-extension.grammarly.io" : "qa" === n || "dev" === n ? "https://127.0.0.1:8000" : Object(o.g)(n),
                f = "prod" === n ? "https://endpoint2.collection.us2.sumologic.com/receiver/v1/http/ZaVnC4dhaV1OF-4ic11yqpre0casnyvs_ZoaCHciEYdRyBkrfwP6DMlsWt8tSVU76RPqgGvAGjXGQk_UNuxPx-pYbToJapM_Fr0CUcgKaA8_IVl-lhSr5Q==" : "qa" === n || "dev" === n ? "https://127.0.0.1:8000" : Object(o.g)(n),
                h = "prod" === n ? t : "qa" === n || "dev" === n ? "qagr.io" : Object(o.g)(n);
            return {
                url: r.create(t, d, f, s, l),
                gnar: i.create(e, h),
                felog: a.create(e, n),
                capi: c.create(),
                extensionId: "87677a2c52b84ad3a151a4a72f5bd3c4",
                newsVersion: 0,
                features: u.create(e)
            }
        }
    }(l || (l = {}));
    var f, h, g, p, m, b, v, _, y, w, O, j, E, k, S = n(236);
    (h = f || (f = {})).create = function(e, t, n, r, o, i, a) {
            const s = void 0 !== i && void 0 !== a ? i : "UNVERSIONED",
                c = `${e}.${t}.${n}`;
            return {
                version: c,
                fullVersion: `${c}-${[r,["prod"!==o?o:null,s!==r?s:null].filter(e=>!!e).join(".")].filter(e=>""!==e).join("/")}`,
                commitHash: a,
                gitBranch: i
            }
        }, h.getManifestVersion = function(e, t, n) {
            switch (e) {
                case "safari":
                    switch (t) {
                        case "bg":
                        case "popup":
                            return n.safari.extension.displayVersion;
                        default:
                            return
                    }
                    case "chrome":
                        return n.chrome.runtime.getManifest().version;
                    case "firefox":
                        return S.a.runtime.getManifest().version;
                    case "edge":
                        return n.edge.runtime.getManifest().version;
                    default:
                        return Object(o.g)(e)
            }
        }, (p = g || (g = {})).create = function(e) {
            return Object(o.n)(["chrome", "safari", "firefox", "edge"], e)
        }, p.detect = function(e) {
            return e.chrome && /google/i.test(e.navigator.vendor) ? "chrome" : -1 !== e.navigator.userAgent.indexOf("Firefox") ? "firefox" : /^((?!chrome).)*safari/i.test(e.navigator.userAgent) ? "safari" : "Netscape" === e.navigator.appName && e.navigator.appVersion.indexOf("Edge") > -1 ? "edge" : void 0
        }, (m || (m = {})).create = function(e) {
            return Object(o.n)(["dev", "prod", "qa"], e)
        }, (v = b || (b = {})).create = function(e) {
            return Object(o.n)(["bg", "cs", "popup"], e)
        }, v.detect = function(e, t) {
            const n = !!e.IS_BG,
                r = "safari" === t ? function() {
                    try {
                        return e.safari.extension.globalPage.contentWindow !== e
                    } catch (e) {
                        return !1
                    }
                }() : !!e.IS_POPUP;
            return n ? "bg" : r ? "popup" : "cs"
        },
        function(e) {
            e.create = function(e, t, n) {
                return {
                    browser: e,
                    env: t,
                    context: n
                }
            }
        }(_ || (_ = {})), (y || (y = {})).create = function(e) {
            return {
                type: g.detect(e) || "other"
            }
        },
        function(e) {
            e.create = function(e) {
                return {
                    isWindows: -1 !== e.navigator.appVersion.indexOf("Win"),
                    isMac: -1 !== e.navigator.appVersion.indexOf("Mac"),
                    isChromeOS: -1 !== e.navigator.appVersion.indexOf("CrOS")
                }
            }
        }(w || (w = {})),
        function(e) {
            e.create = function(e) {
                return {
                    browser: y.create(e),
                    os: w.create(e)
                }
            }
        }(O || (O = {})), n.d(t, "b", (function() {
            return j
        })), n.d(t, "a", (function() {
            return E
        })),
        function(e) {
            function t(e, t, n, r, o, i, a, s) {
                return {
                    env: e,
                    major_number: t,
                    build_number: n,
                    release_number: r,
                    git_branch: o,
                    git_commit: i,
                    edge_popup_url: a,
                    empty_script_url: s
                }
            }
            e.create = t, e.fromBrowserify = function() {
                return t("prod", "14", "947", "0", "UNVERSIONED", "UNVERSIONED", "", "")
            }
        }(j || (j = {})), (k = E || (E = {})).getTargetEnv = function(e) {
            if (!e.env) throw new Error("processEnv.env is null or undefined");
            const t = m.create(e.env);
            if (!t) throw new Error(`Invalid processEnv.env: ${e.env}`);
            return t
        }, k.create = function(e, t, n, r) {
            const i = [n.major_number, n.build_number, n.release_number].map(o.m);
            let a;
            if (3 === i.length && i.every(e => void 0 !== e)) a = i;
            else {
                let n;
                try {
                    n = f.getManifestVersion(e, t, window)
                } catch (e) {}
                const r = (n || "").split(".").map(o.m);
                a = 3 === r.length && r.every(e => void 0 !== e) ? r : [0, 0, 0]
            }
            const [s, c, u] = a;
            return {
                buildInfo: f.create(s, c, u, e, r, n.git_branch, n.git_commit),
                bundleInfo: _.create(e, r, t),
                appConfig: l.create(e, r, n.edge_popup_url, n.empty_script_url),
                systemInfo: O.create(window)
            }
        }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return i
    }));
    var r = n(53),
        o = n(103),
        i = {
            closed: !0,
            next: function(e) {},
            error: function(e) {
                if (r.a.useDeprecatedSynchronousErrorHandling) throw e;
                Object(o.a)(e)
            },
            complete: function() {}
        }
}, , , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return o
    }));
    const r = {},
        o = {
            start(e) {
                r[e] = Date.now()
            },
            stop(e) {
                const t = this.passed(e);
                return delete r[e], t
            },
            passed: e => e && r[e] ? Date.now() - r[e] : 0
        }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return r
    }));
    const r = {}
}, , function(e, t, n) {
    "use strict";
    var r = n(36).a.Uint8Array;
    t.a = r
}, , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return r
    }));
    var r, o = n(12),
        i = n(4);
    class a {
        constructor(e) {
            this._perf = e, this._log = o.a.create("cs.telemetry.PerformanceMetricsImpl")
        }
        flushMeasures(e) {
            try {
                const t = this._perf.getEntriesByName(e, "measure");
                return this._perf.clearMeasures(e), t.map(e => e.duration)
            } catch (e) {
                return this._log.warn("failed to retrieve perf measurements", e), []
            }
        }
        startMeasure(e) {
            const t = Math.random(),
                n = `__${e}_${t}-start`,
                r = `__${e}_${t}-end`;
            try {
                this._perf.mark(n)
            } catch (e) {
                return this._log.warn("could not start measure – ignoring measurement", e), {
                    endMeasure: i.l
                }
            }
            let o = !1;
            return {
                endMeasure: () => {
                    if (!o) {
                        o = !0;
                        try {
                            this._perf.mark(r), this._perf.measure(e, n, r)
                        } catch (e) {
                            this._log.warn("could not complete measure", e)
                        }
                    }
                }
            }
        }
        measure(e, t) {
            const n = `__${e}-start`,
                r = `__${e}-end`;
            try {
                this._perf.mark(n)
            } catch (e) {
                return this._log.warn("could not start measure – ignoring measurement", e), t()
            }
            try {
                return t()
            } finally {
                try {
                    this._perf.mark(r), this._perf.measure(e, n, r)
                } catch (e) {
                    this._log.warn("could not complete measure", e)
                }
            }
        }
    }! function(e) {
        e.dummy = {
            flushMeasures: e => [],
            measure: (e, t) => t(),
            startMeasure: e => ({
                endMeasure() {}
            })
        }, e.create = function(t) {
            return void 0 !== t ? new a(t) : e.dummy
        }, e.getStats = function(e) {
            if (0 === e.length) return {
                ct: 0
            }; {
                const t = e.reduce((e, t) => Math.min(e, t), Number.MAX_VALUE),
                    n = e.reduce((e, t) => Math.max(e, t), Number.MIN_VALUE),
                    r = e.length >= 6 ? e.reduce((e, t) => e + t, 0) / e.length : void 0;
                return {
                    ct: e.length,
                    min: t,
                    max: n,
                    range: n - t,
                    avg: r,
                    stddev: void 0 !== r && e.length > 1 ? Math.sqrt(e.reduce((e, t) => e + Math.pow(t - r, 2), 0) / (e.length - 1)) : void 0
                }
            }
        }
    }(r || (r = {}))
}, function(e, t, n) {
    "use strict";
    var r = n(182),
        o = Object(r.a)(Object.getPrototypeOf, Object);
    t.a = o
}, , function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return o
    })), n.d(t, "b", (function() {
        return i
    }));
    var r = n(75);

    function o() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return i(e)
    }

    function i(e) {
        return e ? 1 === e.length ? e[0] : function(t) {
            return e.reduce((function(e, t) {
                return t(e)
            }), t)
        } : r.a
    }
}, , , , , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return i
    })), n.d(t, "b", (function() {
        return a
    }));
    var r = n(25);
    class o {
        constructor(e) {
            this.name = e, this._isError = e => {
                const t = e;
                return t && (void 0 !== t.message && void 0 !== t.name || void 0 !== t.stack)
            }
        }
        trace(e, t, n) {
            this._logMessage(r.a.TRACE, e, t, n)
        }
        debug(e, t, n) {
            this._logMessage(r.a.DEBUG, e, t, n)
        }
        info(e, t, n) {
            this._logMessage(r.a.INFO, e, t, n)
        }
        warn(e, t, n) {
            this._logMessage(r.a.WARN, e, t, n)
        }
        error(e, t, n) {
            this._logMessage(r.a.ERROR, e, t, n)
        }
        fatal(e, t, n) {
            this._logMessage(r.a.FATAL, e, t, n)
        }
        _logMessage(e, t, n, r) {
            const o = {
                level: e,
                loggerName: this.name,
                message: t,
                timestamp: new Date
            };
            n && (this._isError(n) ? o.exception = n : o.data = n), o.data = o.data || r, this.handleEvent(o)
        }
    }
    class i {
        constructor(e, t) {
            this.name = e, this._createLogger = t
        }
        trace(e, t, n) {
            void 0 === this._logger && (this._logger = this._createLogger(this.name)), this._logger.trace(e, t, n)
        }
        debug(e, t, n) {
            void 0 === this._logger && (this._logger = this._createLogger(this.name)), this._logger.debug(e, t, n)
        }
        info(e, t, n) {
            void 0 === this._logger && (this._logger = this._createLogger(this.name)), this._logger.info(e, t, n)
        }
        warn(e, t, n) {
            void 0 === this._logger && (this._logger = this._createLogger(this.name)), this._logger.warn(e, t, n)
        }
        error(e, t, n) {
            void 0 === this._logger && (this._logger = this._createLogger(this.name)), this._logger.error(e, t, n)
        }
        fatal(e, t, n) {
            void 0 === this._logger && (this._logger = this._createLogger(this.name)), this._logger.fatal(e, t, n)
        }
    }
    class a extends o {
        constructor(e, t) {
            super(e), this._config = t
        }
        handleEvent(e) {
            this._config.filterFn(e) && this._config.writer.write(e)
        }
    }
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var n = "object" == typeof e && e && e.Object === Object && e;
        t.a = n
    }).call(this, n(159))
}, function(e, t, n) {
    "use strict";
    var r = n(171);
    t.a = function(e, t, n) {
        "__proto__" == t && r.a ? Object(r.a)(e, t, {
            configurable: !0,
            enumerable: !0,
            value: n,
            writable: !0
        }) : e[t] = n
    }
}, , function(e, t, n) {
    "use strict";
    var r = n(57),
        o = function() {
            try {
                var e = Object(r.a)(Object, "defineProperty");
                return e({}, "", {}), e
            } catch (e) {}
        }();
    t.a = o
}, , function(e, t, n) {
    "use strict";
    var r = n(176),
        o = n(98);
    t.a = function(e, t) {
        for (var n = 0, i = (t = Object(r.a)(t, e)).length; null != e && n < i;) e = e[Object(o.a)(t[n++])];
        return n && n == i ? e : void 0
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return null !== e && "object" == typeof e
    }
    n.d(t, "a", (function() {
        return r
    }))
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return o
    }));
    var r = n(11);

    function o(e) {
        for (; e;) {
            var t = e,
                n = t.closed,
                o = t.destination,
                i = t.isStopped;
            if (n || i) return !1;
            e = o && o instanceof r.a ? o : null
        }
        return !0
    }
}, function(e, t, n) {
    "use strict";
    var r = n(27),
        o = n(141),
        i = n(114),
        a = "Expected a function";

    function s(e, t) {
        if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError(a);
        var n = function() {
            var r = arguments,
                o = t ? t.apply(this, r) : r[0],
                i = n.cache;
            if (i.has(o)) return i.get(o);
            var a = e.apply(this, r);
            return n.cache = i.set(o, a) || i, a
        };
        return n.cache = new(s.Cache || i.a), n
    }
    s.Cache = i.a;
    var c = s,
        u = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        l = /\\(\\)?/g,
        d = function(e) {
            var t = c((function(e) {
                    var t = [];
                    return 46 === e.charCodeAt(0) && t.push(""), e.replace(u, (function(e, n, r, o) {
                        t.push(r ? o.replace(l, "$1") : n || e)
                    })), t
                }), (function(e) {
                    return 500 === n.size && n.clear(), e
                })),
                n = t.cache;
            return t
        }(),
        f = n(59),
        h = n(243),
        g = n(109),
        p = f.a ? f.a.prototype : void 0,
        m = p ? p.toString : void 0,
        b = function(e) {
            return null == e ? "" : function e(t) {
                if ("string" == typeof t) return t;
                if (Object(r.a)(t)) return Object(h.a)(t, e) + "";
                if (Object(g.a)(t)) return m ? m.call(t) : "";
                var n = t + "";
                return "0" == n && 1 / t == -1 / 0 ? "-0" : n
            }(e)
        };
    t.a = function(e, t) {
        return Object(r.a)(e) ? e : Object(o.a)(e, t) ? [e] : d(b(e))
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return o
    }));
    var r = n(25);
    class o {
        constructor(e = !0) {
            this._edgeCompat = e, this._writeFunc = this._edgeCompat ? o._edgeWriteFunc : o._commonWriteFunc
        }
        write(e) {
            try {
                const t = [`grm ${e.level} 【${e.loggerName}】░░ ${e.message}`];
                e.data && t.push(e.data), e.exception && t.push(e.exception), this._writeFunc[e.level].apply(null, t)
            } catch (e) {}
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
        [r.a.TRACE]: (e, t, n) => console.log(e, t, n),
        [r.a.DEBUG]: (e, t, n) => console.log(e, t, n),
        [r.a.INFO]: (e, t, n) => console.info(e, t, n),
        [r.a.WARN]: (e, t, n) => console.warn(e, t, n),
        [r.a.ERROR]: (e, t, n) => console.error(e, t, n),
        [r.a.FATAL]: (e, t, n) => console.error(e, t, n)
    }
}, , , , , function(e, t, n) {
    "use strict";
    t.a = function(e, t) {
        return function(n) {
            return e(t(n))
        }
    }
}, , , , , , function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "t", (function() {
        return r
    })), n.d(t, "updateConnection", (function() {
        return o
    })), n.d(t, "onlineConnection", (function() {
        return i
    })), n.d(t, "activateDataControl", (function() {
        return a
    })), n.d(t, "acceptDataControl", (function() {
        return s
    })), n.d(t, "disableDataControl", (function() {
        return c
    })), n.d(t, "uninstallExtension", (function() {
        return u
    }));
    const r = {
        UPDATE_CONNECTION: "connection/UPDATE_CONNECTION",
        ONLINE_STATE: "connection/ONLINE_STATE",
        ACTIVATE_DATA_CONTROL: "connection/ACTIVATE_DATA_CONTROL",
        ACCEPT_DATA_CONTROL: "connection/ACCEPT_DATA_CONTROL",
        DISABLE_DATA_CONTROL: "connection/DISABLE_DATA_CONTROL",
        UNINSTALL_EXTENSION: "connection/UNINSTALL_EXTENSION"
    };

    function o(e) {
        return {
            type: r.UPDATE_CONNECTION,
            data: e
        }
    }

    function i(e) {
        return {
            type: r.ONLINE_STATE,
            online: e
        }
    }

    function a() {
        return {
            type: r.ACTIVATE_DATA_CONTROL
        }
    }

    function s() {
        return {
            type: r.ACCEPT_DATA_CONTROL
        }
    }

    function c() {
        return {
            type: r.DISABLE_DATA_CONTROL
        }
    }

    function u() {
        return {
            type: r.UNINSTALL_EXTENSION
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = this && this.__assign || Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        },
        o = this && this.__awaiter || function(e, t, n, r) {
            return new(n || (n = Promise))((function(o, i) {
                function a(e) {
                    try {
                        c(r.next(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function s(e) {
                    try {
                        c(r.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function c(e) {
                    e.done ? o(e.value) : new n((function(t) {
                        t(e.value)
                    })).then(a, s)
                }
                c((r = r.apply(e, t || [])).next())
            }))
        },
        i = this && this.__generator || function(e, t) {
            var n, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0]) throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }), i;

            function s(i) {
                return function(s) {
                    return function(i) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; a;) try {
                            if (n = 1, r && (o = r[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(o = o.call(r, i[1])).done) return o;
                            switch (r = 0, o && (i = [0, o.value]), i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, r = i[1], i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1], o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2], a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e], r = 0
                        } finally {
                            n = o = 0
                        }
                        if (5 & i[0]) throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, s])
                }
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(453),
        s = n(454),
        c = n(519);
    t.ValueManager = c.ValueManager, t.BaseStorage = c.BaseStorage, t.MemoryStorage = c.MemoryStorage, t.ContainerIdManager = c.ContainerIdManager, t.GAClientIdManager = c.GAClientIdManager, t.LocalStorage = c.LocalStorage, t.CookieStorage = c.CookieStorage, t.ChromeCookieStorage = c.ChromeCookieStorage, t.WebExtensionsCookieStorage = c.WebExtensionsCookieStorage, t.ReadonlyWebExtensionsCookieStorage = c.ReadonlyWebExtensionsCookieStorage, t.BackendStorage = c.BackendStorage;
    var u = n(520);
    t.GoogleAnalyticsClient = u.GoogleAnalyticsClient;
    var l = ["client", "clientVersion", "userId", "isTest", "containerId", "instanceId", "batchId"],
        d = function() {
            function e(e, t, n, r, o, i, s, c) {
                void 0 === i && (i = null), void 0 === s && (s = !1), this._client = t, this._clientVersion = n, this._fetch = r, this._containerIdManager = o, this._logger = i, this._storePingTimestamp = s, this._gaClientOpt = c, this._instanceId = a.alphanumeric(8), this._batchId = 0, this._isUserReady = !1, this._queue = [], this.userGetter = void 0, this._eventsUrl = e + "/events", this._liteUrl = e + "/lite", this._pingMaybe(), this._initTs = Date.now()
            }
            return e.prototype.track = function(e, t) {
                var n = this;
                if (void 0 === t && (t = {
                        lite: !1
                    }), 0 !== e.eventName.indexOf(this._client + "/")) throw new Error("Event name " + e.eventName + " should start with '" + this._client + "/'");
                if (Object.keys(e).forEach((function(e) {
                        if (-1 !== l.indexOf(e)) throw new Error("Event data should not contain '" + e + "' prop.")
                    })), !this._isUserReady && this.userGetter) try {
                    var r = this.userGetter();
                    r && this.setUser(r.userId, r.isTest)
                } catch (e) {}
                return this._isUserReady || t.lite && !t.sendUser ? (e.eventName !== this._client + "/ping" && this._pingMaybe(), this._send(e, t)) : (s.guard((function() {
                    return n._logger && n._logger.trackBeforeSetUser(Date.now() - n._initTs)
                })), this._enqueue(e, t))
            }, e.prototype.setUser = function(e, t) {
                if (null === e || "" === e) throw new Error("Invalid userId: " + e);
                var n = this._userId && this._userId !== e && !(/^-/.test(e) && /^-/.test(this._userId));
                this._isTest = t, this._userId = e, this._isUserReady || (this._isUserReady = !0, this._execQueue()), n && this._pingMaybe(!0)
            }, e.prototype.getContainerId = function() {
                return this._containerIdManager.getContainerId()
            }, e.prototype._setNextPingTimestamp = function() {
                var e = this,
                    t = a.getNextPingDate();
                if (this._nextPingTimestamp = t, this._storePingTimestamp) try {
                    localStorage.setItem("gnar_nextPingTimestamp", t.toString())
                } catch (t) {
                    s.guard((function() {
                        return e._logger && e._logger.nextPingDateWriteError(t)
                    }))
                }
            }, e.prototype._getNextPingTimestamp = function() {
                var e = this,
                    t = this._nextPingTimestamp;
                if (void 0 !== t || !this._storePingTimestamp) return t;
                try {
                    var n = localStorage.getItem("gnar_nextPingTimestamp");
                    t = null === n ? void 0 : parseInt(n, 10)
                } catch (n) {
                    t = void 0, s.guard((function() {
                        return e._logger && e._logger.nextPingDateReadError(n)
                    }))
                }
                return t
            }, e.prototype._shouldPing = function(e) {
                if (e) return !0;
                var t = this._getNextPingTimestamp();
                return void 0 === t || t < Date.now()
            }, e.prototype._pingMaybe = function(e) {
                var t = this;
                if (void 0 === e && (e = !1), this._shouldPing(e)) {
                    this._setNextPingTimestamp();
                    var n = {
                        eventName: this._client + "/ping",
                        referrer: document.referrer,
                        url: document.location.href
                    };
                    this._gaClientOpt ? this._gaClientOpt.getClientId().then((function(e) {
                        return t.track(r({}, n, {
                            gaClientId: e
                        }))
                    }), (function(e) {
                        return t.track(n)
                    })) : this.track(n)
                }
            }, e.prototype.pingMaybe = function() {
                this._pingMaybe()
            }, e.prototype._enqueue = function(e, t) {
                var n = this;
                return new Promise((function(r, o) {
                    n._queue.push([e, t, {
                        resolve: r,
                        reject: o
                    }])
                }))
            }, e.prototype._execQueue = function() {
                var e = this;
                this._queue.forEach((function(t) {
                    var n = t[0],
                        r = t[1],
                        o = t[2],
                        i = o.resolve,
                        a = o.reject;
                    e._send(n, r).then((function() {
                        return i()
                    })).catch((function(e) {
                        return a(e)
                    }))
                })), this._queue = []
            }, e.prototype._withClientProps = function(e) {
                return r({}, e, {
                    client: this._client,
                    clientVersion: this._clientVersion
                })
            }, e.prototype._withUserProps = function(e) {
                return o(this, void 0, void 0, (function() {
                    var t;
                    return i(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, this.getContainerId().catch((function() {}))];
                            case 1:
                                return t = n.sent(), [2, r({}, e, {
                                    containerId: t,
                                    userId: this._userId,
                                    isTest: this._isTest
                                })]
                        }
                    }))
                }))
            }, e.prototype._withBrowserProps = function(e) {
                return r({}, e, {
                    userAgent: navigator.userAgent,
                    screenWidth: screen.width,
                    screenHeight: screen.height
                })
            }, e.prototype._withInstanceProps = function(e) {
                var t = this._batchId++;
                return r({}, e, {
                    instanceId: this._instanceId,
                    batchId: t
                })
            }, e.prototype._send = function(e, t) {
                return o(this, void 0, void 0, (function() {
                    var n, r = this;
                    return i(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return o.trys.push([0, 4, , 5]), e = this._withClientProps(e), (!t.lite || t.lite && t.sendInstance) && (e = this._withInstanceProps(e)), !t.lite || t.lite && t.sendUser ? [4, this._withUserProps(e)] : [3, 2];
                            case 1:
                                e = o.sent(), o.label = 2;
                            case 2:
                                return (!t.lite || t.lite && t.sendBrowser) && (e = this._withBrowserProps(e)), [4, this._doSend(t.lite ? this._liteUrl : this._eventsUrl, e)];
                            case 3:
                                return [2, o.sent()];
                            case 4:
                                throw n = o.sent(), s.guard((function() {
                                    return r._logger && r._logger.sendError(n)
                                })), n;
                            case 5:
                                return [2]
                        }
                    }))
                }))
            }, e.prototype._doSend = function(e, t) {
                return this._fetch(e, {
                    mode: "cors",
                    credentials: "include",
                    method: "post",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        events: [t]
                    })
                }).then((function(e) {
                    return e.ok ? Promise.resolve() : Promise.reject(new Error(e.statusText))
                }))
            }, e.prototype.setUserGetter = function(e) {
                this.userGetter = e
            }, e
        }();
    t.GnarClientImpl = d;
    var f = function() {
        function e() {
            this.history = []
        }
        return e.prototype.track = function(e) {
            return this.history.push(e), Promise.resolve()
        }, e.prototype.pingMaybe = function() {}, e.prototype.setUser = function(e, t) {}, e.prototype.getContainerId = function() {
            return Promise.resolve("dummy_container_id")
        }, e.prototype.setUserGetter = function() {}, e
    }();
    t.MemoryGnarClient = f;
    var h = function() {
        function e() {}
        return e.prototype.track = function(e) {
            try {
                var t = JSON.parse(localStorage.getItem("trackingGnar")) || [];
                t.push(e), localStorage.setItem("trackingGnar", JSON.stringify(t))
            } catch (e) {}
            return Promise.resolve()
        }, e.prototype.pingMaybe = function() {}, e.prototype.setUser = function(e, t) {}, e.prototype.getContainerId = function() {
            return Promise.resolve("dummy_container_id")
        }, e.prototype.setUserGetter = function() {}, e
    }();
    t.LocalStorageGnarClient = h
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return d
    })), n.d(t, "c", (function() {
        return f
    })), n.d(t, "a", (function() {
        return g
    }));
    var r = n(17),
        o = n(10),
        i = n(16),
        a = n(4),
        s = n(12),
        c = n(43),
        u = n(200);
    const l = s.a.create("extension-api.message.bg"),
        d = "popup";

    function f() {
        const e = (Object(o.j)() || Object(o.l)()) && (!chrome.extension || !chrome.tabs || !chrome.runtime || !chrome.runtime.onConnect),
            t = Object(o.k)() && (!edge.extension || !edge.tabs || !edge.runtime || !edge.runtime.onConnect);
        if (e || t) {
            const e = window.localStorage.getItem("bgInitFail") || "0",
                t = parseInt(e, 10);
            t > 4 ? l.error(`too many bgInitFail ${t}`) : (window.localStorage.setItem("bgInitFail", (t + 1).toString()), document.location.reload())
        }
    }

    function h(e) {
        if (!e) return !1;
        const {
            browser: t
        } = r.a().bundleInfo, n = "firefox" === t ? /^moz-extension:\/\/.*\/src\/popup.html$/ : "edge" === t ? /^ms-browser-extension:\/\/.*\/src\/popup.html$/ : "chrome" === t ? chrome && chrome.runtime && chrome.runtime.id ? new RegExp(chrome.runtime.id + "/src/popup.html") : void 0 : Object(a.g)(t);
        return void 0 !== n && n.test(e)
    }
    class g {
        constructor(e, t, n) {
            this._getActiveTab = t, this._getAllTabs = n, this.kind = "background-message-api", this._callbacks = {}, this._tabPorts = {
                popup: []
            }, this._messageHelper = new u.a, this._sendMessageToPorts = (e, t) => {
                const n = this._tabPorts[e];
                n && n.forEach(e => e.postMessage(t))
            }, this.toFocused = (e, t) => this._getActiveTab().then(({
                id: n,
                url: r
            }) => {
                if (n) return h(r) ? l.warn(`toFocussed not allowed for popup when it open like regular tab ${e}`, t) : void this._sendMessageToPorts(n.toString(), {
                    type: e,
                    content: t,
                    callid: Object(i.r)()
                })
            }), this.broadcast = (e, t) => {
                if (!t) return;
                const n = ({
                    id: n,
                    url: r
                }) => {
                    n && r && -1 === r.indexOf("chrome-extension:") && this._sendMessageToPorts(n.toString(), {
                        type: e,
                        callid: Object(i.r)(),
                        content: t
                    })
                };
                this._getAllTabs().then(e => e.forEach(n)), this._tabPorts.popup && this._tabPorts.popup.length && this._getActiveTab().then(({
                    url: e
                }) => {
                    n({
                        id: d,
                        url: e
                    })
                })
            }, this._initPortListener = e => {
                if (e.name === c.b.bridge) e.onMessage(e => {
                    "message.toFocussed" === e.method && this.toFocused(e.params && e.params.type, e.params && e.params.content)
                });
                else if (e.name === c.b.broadcast) e.onMessage(e => this.broadcast(e.type, e.content));
                else if (e.name === c.b.background) {
                    const {
                        sender: t
                    } = e;
                    if (t) {
                        if (t.tab) {
                            const {
                                id: n,
                                url: r
                            } = t.tab;
                            if (n) {
                                let t = this._tabPorts[n];
                                void 0 === t && (t = this._tabPorts[n] = []), t.push(e)
                            }
                            r && 0 === r.indexOf("http") && this._messageHelper.fire("tab-connected", {
                                tab: n,
                                url: r
                            }), e.onDisconnect(() => {
                                if (!n) return;
                                const t = this._tabPorts[n];
                                t && t.splice(t.indexOf(e), 1)
                            })
                        }
                        const n = t.url ? t.url : t.tab ? t.tab.url : "";
                        if (n && h(n)) {
                            const t = d;
                            this._tabPorts[t] = this._tabPorts[t] || [], this._tabPorts[t].push(e), e.onDisconnect(() => {
                                const n = this._tabPorts[t];
                                n.splice(n.indexOf(e), 1)
                            })
                        }
                    }
                    e.onMessage(n => {
                        const r = ({
                            callid: n,
                            content: r,
                            type: o
                        }) => {
                            this._callbacks[n] && (this._callbacks[n](r), delete this._callbacks[n]), this._messageHelper.fire(o, r, t => e.postMessage({
                                content: t,
                                callid: n
                            }), t && t.tab ? t.tab.id : -1)
                        };
                        "tab-connected" === n.type ? this._getActiveTab().then(({
                            url: e
                        }) => {
                            n.content = {
                                tab: d,
                                url: e
                            }, r(n)
                        }) : r(n)
                    })
                }
            }, e(this._initPortListener)
        }
        getPortExists(e) {
            return !!this._tabPorts[e]
        }
        sendTo(e, t, n, r, o, a) {
            const s = this._tabPorts[e];
            if (!s || !s.length) return void(o && o({
                message: "no ports on specified tabId"
            }));
            const c = a ? s.filter(e => a(e.sender && e.sender.url)) : s;
            if (!c.length) return void(o && o({
                message: "no ports on specified tabFilter"
            }));
            const u = {
                type: t,
                content: n
            };
            r && "function" == typeof r && (u.callid = Object(i.r)(), this._callbacks[u.callid] = r), c.forEach(e => e.postMessage(u))
        }
        listen(e, t) {
            this._messageHelper.listen(e, t)
        }
    }
}, , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return o
    }));
    var r = n(25);
    const o = e => t => Object(r.b)(t.level) >= Object(r.b)(e)
}, function(e, t, n) {
    n(327);
    var r = {
        superfasthash: n(354),
        murmurhash3: n(355)
    };
    e.exports = {
        createHash: function(e) {
            e = e.replace(/![a-zA-z0-9]/g, "").toLowerCase();
            try {
                return r[e]
            } catch (e) {
                throw new Error(e)
            }
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(212),
        o = n(31),
        i = n(128),
        a = Object.prototype.hasOwnProperty,
        s = function(e) {
            if (!Object(o.a)(e)) return function(e) {
                var t = [];
                if (null != e)
                    for (var n in Object(e)) t.push(n);
                return t
            }(e);
            var t = Object(i.a)(e),
                n = [];
            for (var r in e)("constructor" != r || !t && a.call(e, r)) && n.push(r);
            return n
        },
        c = n(77);
    t.a = function(e) {
        return Object(c.a)(e) ? Object(r.a)(e, !0) : s(e)
    }
}, , function(e, t) {
    e.exports = function(e) {
        if (!e.webpackPolyfill) {
            var t = Object.create(e);
            t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                enumerable: !0,
                get: function() {
                    return t.l
                }
            }), Object.defineProperty(t, "id", {
                enumerable: !0,
                get: function() {
                    return t.i
                }
            }), Object.defineProperty(t, "exports", {
                enumerable: !0
            }), t.webpackPolyfill = 1
        }
        return t
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return c
    })), n.d(t, "b", (function() {
        return u
    }));
    var r = n(72),
        o = n(200),
        i = n(16),
        a = n(43);
    const s = n(12).a.create("Messaging.extension-api.content");
    class c {
        constructor(e) {
            this.kind = "content-script-message-api", this._callbacks = {}, this._messageHelper = new o.a, this._proxyPortsStorage = {}, this.broadcastBackground = (...e) => this._emit(this.backgroundPort, "bg").apply(null, e), this.broadcast = (...e) => this._emit(this.broadcastPort, "tabs").apply(null, e), this._onPortMessage = e => {
                s.trace("portMessage", e)
            }, this._checkHealth = (() => {
                let e = null,
                    t = null;
                const n = () => {
                        document.dispatchEvent(new CustomEvent("grammarly:ping"))
                    },
                    r = () => {
                        i()
                    },
                    o = () => {
                        [this.port, this.backgroundPort, this.broadcastPort].forEach(e => {
                            e && e.removeMessageListeners && e.removeMessageListeners()
                        }), this.port = this.backgroundPort = this.broadcastPort = null, i(), document.addEventListener("grammarly:proxyports", this._onGrammarlyResetAfterTimeout), document.dispatchEvent(new CustomEvent("grammarly:offline"))
                    };

                function i() {
                    document.removeEventListener("grammarly:pong", r), t && (clearTimeout(t), t = null), e && (clearInterval(e), e = null)
                }
                return () => {
                    i(), document.addEventListener("grammarly:pong", r), e = window.setInterval(n, 500), t = window.setTimeout(o, 5e3)
                }
            })(), this._onGrammarlyResetAfterTimeout = () => {
                document.removeEventListener("grammarly:proxyports", this._onGrammarlyResetAfterTimeout), this.port = this._initProxyPort(a.b.bridge, this._onPortMessage, this._checkHealth, !0), this.backgroundPort = this._initProxyPort(a.b.background, this._onBgPortMessage, this._checkHealth), this.broadcastPort = this._initProxyPort(a.b.broadcast, null, this._checkHealth)
            }, this._onBgPortMessage = ({
                callid: e,
                content: t,
                type: n
            }) => {
                this._callbacks[e] ? (this._callbacks[e](t), delete this._callbacks[e]) : this._messageHelper.fire(n, t, t => {
                    if (!this.backgroundPort) throw new Error("fail reply to bg page - connection lost");
                    this.backgroundPort.postMessage({
                        content: t,
                        callid: e
                    })
                })
            }, this._initProxyPort = (e, t, n, r = !1) => {
                const o = this._proxyPort(e);
                return r && this._checkHealth(), t && o.onMessage(t), n && o.onDisconnect(n), o
            }, this._emit = (e, t) => (n, r, o, a) => {
                const s = Object(i.r)();
                o && "function" == typeof o && (this._callbacks[s] = o);
                try {
                    if (!e) throw new Error("lost connection to " + t + " port");
                    e.postMessage({
                        type: n,
                        callid: s,
                        content: r
                    })
                } catch (e) {
                    if (!a) throw e;
                    a(e)
                }
            }, this._proxyPort = e => {
                this._proxyPortsStorage[e] = {};
                const t = (t, n) => {
                        const r = n.detail;
                        if (r.name !== e) return;
                        const o = this._proxyPortsStorage[e][t];
                        o && o(r.msg)
                    },
                    n = e => t("success", e),
                    r = e => t("error", e);
                return document.addEventListener("grammarly:message", n), document.addEventListener("grammarly:error", r), {
                    postMessage(t = {}) {
                        const n = {
                            data: t,
                            name: e
                        };
                        return document.dispatchEvent(new CustomEvent("grammarly:action", {
                            detail: n
                        }))
                    },
                    onMessage: t => {
                        this._proxyPortsStorage[e].success = t
                    },
                    onDisconnect: t => {
                        this._proxyPortsStorage[e].error = t
                    },
                    removeMessageListeners() {
                        document.removeEventListener("grammarly:message", n), document.removeEventListener("grammarly:error", r)
                    }
                }
            }, this.port = e(a.b.bridge), this.port.onMessage(this._onPortMessage), this.port.onDisconnect(() => {
                this.port = null, this.port = this._initProxyPort(a.b.bridge, this._onPortMessage, this._checkHealth, !0)
            }), this.backgroundPort = e(a.b.background), this.backgroundPort.onMessage(this._onBgPortMessage), this.backgroundPort.onDisconnect(() => {
                this.backgroundPort = null, this.backgroundPort = this._initProxyPort(a.b.background, this._onBgPortMessage, this._checkHealth)
            }), this.broadcastPort = e(a.b.broadcast), this.broadcastPort.onDisconnect(() => {
                this.broadcastPort = null, this.broadcastPort = this._initProxyPort(a.b.broadcast, null, this._checkHealth)
            })
        }
        onBackgroundPortReconnect(e) {
            this.backgroundPort && this.backgroundPort.onReconnect && this.backgroundPort.onReconnect(e)
        }
        listen(e, t) {
            this._messageHelper.listen(e, t)
        }
        toFocused(e, t) {
            return r.a.create(n => {
                if (!this.port) throw new Error("lost connection to bg page");
                this.port.postMessage({
                    method: "message.toFocussed",
                    params: {
                        type: e,
                        content: t
                    }
                }), n()
            })
        }
    }

    function u() {
        window.addEventListener("update-window-size-gr", e => {
            const t = document.createElement("div");
            if (t.style.height = "1px", e.detail && e.detail.force) {
                const e = setInterval((function() {
                    document.body.appendChild(t), setTimeout(() => {
                        t.parentNode && t.parentNode.removeChild(t)
                    }, 10)
                }), 100);
                setTimeout(() => clearInterval(e), 405)
            }
        }, !1), window.addEventListener("close-popup-gr", () => {
            window.close()
        }, !1)
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return i
    }));
    const r = n(12).a.create("extension-api.message"),
        o = () => {};
    class i {
        constructor() {
            this._listeners = {}, this._queue = {}, this.fire = (e, t, n = o, r) => {
                const i = this._listeners[e] || [];
                i.length ? i.forEach(e => e(t, n, r)) : (this._queue[e] = this._queue[e] || [], this._queue[e].push({
                    content: t,
                    callback: n,
                    sender: r
                }))
            }, this.unlisten = (e, t) => {
                const n = this._listeners[e] || [],
                    r = n.indexOf(t); - 1 !== r && (1 === n.length ? delete this._listeners[e] : n.splice(r, 1))
            }, this.listenOnce = (e, t) => {
                const n = (r, o, i) => {
                    this.unlisten(e, n), t && t(r, o, i)
                };
                this.listen(e, n)
            }, this.listen = (e, t) => {
                this._listeners[e] = this._listeners[e] || [], -1 === this._listeners[e].indexOf(t) && this._listeners[e].push(t);
                const n = this._queue[e] || [];
                if (n.length) {
                    for (const o of n) try {
                        t(o.content, o.callback, o.sender)
                    } catch (e) {
                        r.error("exception during proccesing buffered messages", e)
                    }
                    delete this._queue[e]
                }
            }
        }
    }
}, , function(e, t, n) {
    "use strict";
    var r = n(57),
        o = n(36),
        i = Object(r.a)(o.a, "DataView"),
        a = n(96),
        s = Object(r.a)(o.a, "Promise"),
        c = Object(r.a)(o.a, "Set"),
        u = Object(r.a)(o.a, "WeakMap"),
        l = n(52),
        d = n(87),
        f = Object(d.a)(i),
        h = Object(d.a)(a.a),
        g = Object(d.a)(s),
        p = Object(d.a)(c),
        m = Object(d.a)(u),
        b = l.a;
    (i && "[object DataView]" != b(new i(new ArrayBuffer(1))) || a.a && "[object Map]" != b(new a.a) || s && "[object Promise]" != b(s.resolve()) || c && "[object Set]" != b(new c) || u && "[object WeakMap]" != b(new u)) && (b = function(e) {
        var t = Object(l.a)(e),
            n = "[object Object]" == t ? e.constructor : void 0,
            r = n ? Object(d.a)(n) : "";
        if (r) switch (r) {
            case f:
                return "[object DataView]";
            case h:
                return "[object Map]";
            case g:
                return "[object Promise]";
            case p:
                return "[object Set]";
            case m:
                return "[object WeakMap]"
        }
        return t
    }), t.a = b
}, , , , function(e, t, n) {
    "use strict";

    function r() {
        this.Diff_Timeout = 1, this.Diff_EditCost = 4, this.Match_Threshold = .5, this.Match_Distance = 1e3, this.Patch_DeleteThreshold = .5, this.Patch_Margin = 4, this.Match_MaxBits = 32
    }
    r.Diff, r.prototype.diff_main = function(e, t, n, r) {
        void 0 === r && (r = this.Diff_Timeout <= 0 ? Number.MAX_VALUE : (new Date).getTime() + 1e3 * this.Diff_Timeout);
        var o = r;
        if (null == e || null == t) throw new Error("Null input. (diff_main)");
        if (e == t) return e ? [
            [0, e]
        ] : [];
        void 0 === n && (n = !0);
        var i = n,
            a = this.diff_commonPrefix(e, t),
            s = e.substring(0, a);
        e = e.substring(a), t = t.substring(a), a = this.diff_commonSuffix(e, t);
        var c = e.substring(e.length - a);
        e = e.substring(0, e.length - a), t = t.substring(0, t.length - a);
        var u = this.diff_compute_(e, t, i, o);
        return s && u.unshift([0, s]), c && u.push([0, c]), this.diff_cleanupMerge(u), u
    }, r.prototype.diff_compute_ = function(e, t, n, r) {
        var o;
        if (!e) return [
            [1, t]
        ];
        if (!t) return [
            [-1, e]
        ];
        var i = e.length > t.length ? e : t,
            a = e.length > t.length ? t : e,
            s = i.indexOf(a);
        if (-1 != s) return o = [
            [1, i.substring(0, s)],
            [0, a],
            [1, i.substring(s + a.length)]
        ], e.length > t.length && (o[0][0] = o[2][0] = -1), o;
        if (1 == a.length) return [
            [-1, e],
            [1, t]
        ];
        var c = this.diff_halfMatch_(e, t);
        if (c) {
            var u = c[0],
                l = c[1],
                d = c[2],
                f = c[3],
                h = c[4],
                g = this.diff_main(u, d, n, r),
                p = this.diff_main(l, f, n, r);
            return g.concat([
                [0, h]
            ], p)
        }
        return n && e.length > 100 && t.length > 100 ? this.diff_lineMode_(e, t, r) : this.diff_bisect_(e, t, r)
    }, r.prototype.diff_lineMode_ = function(e, t, n) {
        e = (l = this.diff_linesToChars_(e, t)).chars1, t = l.chars2;
        var r = l.lineArray,
            o = this.diff_main(e, t, !1, n);
        this.diff_charsToLines_(o, r), this.diff_cleanupSemantic(o), o.push([0, ""]);
        for (var i = 0, a = 0, s = 0, c = "", u = ""; i < o.length;) {
            switch (o[i][0]) {
                case 1:
                    s++, u += o[i][1];
                    break;
                case -1:
                    a++, c += o[i][1];
                    break;
                case 0:
                    if (a >= 1 && s >= 1) {
                        o.splice(i - a - s, a + s), i = i - a - s;
                        for (var l, d = (l = this.diff_main(c, u, !1, n)).length - 1; d >= 0; d--) o.splice(i, 0, l[d]);
                        i += l.length
                    }
                    s = 0, a = 0, c = "", u = ""
            }
            i++
        }
        return o.pop(), o
    }, r.prototype.diff_bisect_ = function(e, t, n) {
        for (var r = e.length, o = t.length, i = Math.ceil((r + o) / 2), a = i, s = 2 * i, c = new Array(s), u = new Array(s), l = 0; l < s; l++) c[l] = -1, u[l] = -1;
        c[a + 1] = 0, u[a + 1] = 0;
        for (var d = r - o, f = d % 2 != 0, h = 0, g = 0, p = 0, m = 0, b = 0; b < i && !((new Date).getTime() > n); b++) {
            for (var v = -b + h; v <= b - g; v += 2) {
                for (var _ = a + v, y = (k = v == -b || v != b && c[_ - 1] < c[_ + 1] ? c[_ + 1] : c[_ - 1] + 1) - v; k < r && y < o && e.charAt(k) == t.charAt(y);) k++, y++;
                if (c[_] = k, k > r) g += 2;
                else if (y > o) h += 2;
                else if (f && (j = a + d - v) >= 0 && j < s && -1 != u[j] && k >= (O = r - u[j])) return this.diff_bisectSplit_(e, t, k, y, n)
            }
            for (var w = -b + p; w <= b - m; w += 2) {
                for (var O, j = a + w, E = (O = w == -b || w != b && u[j - 1] < u[j + 1] ? u[j + 1] : u[j - 1] + 1) - w; O < r && E < o && e.charAt(r - O - 1) == t.charAt(o - E - 1);) O++, E++;
                if (u[j] = O, O > r) m += 2;
                else if (E > o) p += 2;
                else if (!f) {
                    var k;
                    if ((_ = a + d - w) >= 0 && _ < s && -1 != c[_])
                        if (y = a + (k = c[_]) - _, k >= (O = r - O)) return this.diff_bisectSplit_(e, t, k, y, n)
                }
            }
        }
        return [
            [-1, e],
            [1, t]
        ]
    }, r.prototype.diff_bisectSplit_ = function(e, t, n, r, o) {
        var i = e.substring(0, n),
            a = t.substring(0, r),
            s = e.substring(n),
            c = t.substring(r),
            u = this.diff_main(i, a, !1, o),
            l = this.diff_main(s, c, !1, o);
        return u.concat(l)
    }, r.prototype.diff_linesToChars_ = function(e, t) {
        var n = [],
            r = {};

        function o(e) {
            for (var t = "", o = 0, i = -1, a = n.length; i < e.length - 1;) {
                -1 == (i = e.indexOf("\n", o)) && (i = e.length - 1);
                var s = e.substring(o, i + 1);
                o = i + 1, (r.hasOwnProperty ? r.hasOwnProperty(s) : void 0 !== r[s]) ? t += String.fromCharCode(r[s]) : (t += String.fromCharCode(a), r[s] = a, n[a++] = s)
            }
            return t
        }
        return n[0] = "", {
            chars1: o(e),
            chars2: o(t),
            lineArray: n
        }
    }, r.prototype.diff_charsToLines_ = function(e, t) {
        for (var n = 0; n < e.length; n++) {
            for (var r = e[n][1], o = [], i = 0; i < r.length; i++) o[i] = t[r.charCodeAt(i)];
            e[n][1] = o.join("")
        }
    }, r.prototype.diff_commonPrefix = function(e, t) {
        if (!e || !t || e.charAt(0) != t.charAt(0)) return 0;
        for (var n = 0, r = Math.min(e.length, t.length), o = r, i = 0; n < o;) e.substring(i, o) == t.substring(i, o) ? i = n = o : r = o, o = Math.floor((r - n) / 2 + n);
        return o
    }, r.prototype.diff_commonSuffix = function(e, t) {
        if (!e || !t || e.charAt(e.length - 1) != t.charAt(t.length - 1)) return 0;
        for (var n = 0, r = Math.min(e.length, t.length), o = r, i = 0; n < o;) e.substring(e.length - o, e.length - i) == t.substring(t.length - o, t.length - i) ? i = n = o : r = o, o = Math.floor((r - n) / 2 + n);
        return o
    }, r.prototype.diff_commonOverlap_ = function(e, t) {
        var n = e.length,
            r = t.length;
        if (0 == n || 0 == r) return 0;
        n > r ? e = e.substring(n - r) : n < r && (t = t.substring(0, n));
        var o = Math.min(n, r);
        if (e == t) return o;
        for (var i = 0, a = 1;;) {
            var s = e.substring(o - a),
                c = t.indexOf(s);
            if (-1 == c) return i;
            a += c, 0 != c && e.substring(o - a) != t.substring(0, a) || (i = a, a++)
        }
    }, r.prototype.diff_halfMatch_ = function(e, t) {
        if (this.Diff_Timeout <= 0) return null;
        var n = e.length > t.length ? e : t,
            r = e.length > t.length ? t : e;
        if (n.length < 4 || 2 * r.length < n.length) return null;
        var o = this;

        function i(e, t, n) {
            for (var r, i, a, s, c = e.substring(n, n + Math.floor(e.length / 4)), u = -1, l = ""; - 1 != (u = t.indexOf(c, u + 1));) {
                var d = o.diff_commonPrefix(e.substring(n), t.substring(u)),
                    f = o.diff_commonSuffix(e.substring(0, n), t.substring(0, u));
                l.length < f + d && (l = t.substring(u - f, u) + t.substring(u, u + d), r = e.substring(0, n - f), i = e.substring(n + d), a = t.substring(0, u - f), s = t.substring(u + d))
            }
            return 2 * l.length >= e.length ? [r, i, a, s, l] : null
        }
        var a, s, c, u, l, d = i(n, r, Math.ceil(n.length / 4)),
            f = i(n, r, Math.ceil(n.length / 2));
        return d || f ? (a = f ? d && d[4].length > f[4].length ? d : f : d, e.length > t.length ? (s = a[0], c = a[1], u = a[2], l = a[3]) : (u = a[0], l = a[1], s = a[2], c = a[3]), [s, c, u, l, a[4]]) : null
    }, r.prototype.diff_cleanupSemantic = function(e) {
        for (var t = !1, n = [], r = 0, o = null, i = 0, a = 0, s = 0, c = 0, u = 0; i < e.length;) 0 == e[i][0] ? (n[r++] = i, a = c, s = u, c = 0, u = 0, o = e[i][1]) : (1 == e[i][0] ? c += e[i][1].length : u += e[i][1].length, o && o.length <= Math.max(a, s) && o.length <= Math.max(c, u) && (e.splice(n[r - 1], 0, [-1, o]), e[n[r - 1] + 1][0] = 1, r--, i = --r > 0 ? n[r - 1] : -1, a = 0, s = 0, c = 0, u = 0, o = null, t = !0)), i++;
        for (t && this.diff_cleanupMerge(e), this.diff_cleanupSemanticLossless(e), i = 1; i < e.length;) {
            if (-1 == e[i - 1][0] && 1 == e[i][0]) {
                var l = e[i - 1][1],
                    d = e[i][1],
                    f = this.diff_commonOverlap_(l, d),
                    h = this.diff_commonOverlap_(d, l);
                f >= h ? (f >= l.length / 2 || f >= d.length / 2) && (e.splice(i, 0, [0, d.substring(0, f)]), e[i - 1][1] = l.substring(0, l.length - f), e[i + 1][1] = d.substring(f), i++) : (h >= l.length / 2 || h >= d.length / 2) && (e.splice(i, 0, [0, l.substring(0, h)]), e[i - 1][0] = 1, e[i - 1][1] = d.substring(0, d.length - h), e[i + 1][0] = -1, e[i + 1][1] = l.substring(h), i++), i++
            }
            i++
        }
    }, r.prototype.diff_cleanupSemanticLossless = function(e) {
        function t(e, t) {
            if (!e || !t) return 6;
            var n = e.charAt(e.length - 1),
                o = t.charAt(0),
                i = n.match(r.nonAlphaNumericRegex_),
                a = o.match(r.nonAlphaNumericRegex_),
                s = i && n.match(r.whitespaceRegex_),
                c = a && o.match(r.whitespaceRegex_),
                u = s && n.match(r.linebreakRegex_),
                l = c && o.match(r.linebreakRegex_),
                d = u && e.match(r.blanklineEndRegex_),
                f = l && t.match(r.blanklineStartRegex_);
            return d || f ? 5 : u || l ? 4 : i && !s && c ? 3 : s || c ? 2 : i || a ? 1 : 0
        }
        for (var n = 1; n < e.length - 1;) {
            if (0 == e[n - 1][0] && 0 == e[n + 1][0]) {
                var o = e[n - 1][1],
                    i = e[n][1],
                    a = e[n + 1][1],
                    s = this.diff_commonSuffix(o, i);
                if (s) {
                    var c = i.substring(i.length - s);
                    o = o.substring(0, o.length - s), i = c + i.substring(0, i.length - s), a = c + a
                }
                for (var u = o, l = i, d = a, f = t(o, i) + t(i, a); i.charAt(0) === a.charAt(0);) {
                    o += i.charAt(0), i = i.substring(1) + a.charAt(0), a = a.substring(1);
                    var h = t(o, i) + t(i, a);
                    h >= f && (f = h, u = o, l = i, d = a)
                }
                e[n - 1][1] != u && (u ? e[n - 1][1] = u : (e.splice(n - 1, 1), n--), e[n][1] = l, d ? e[n + 1][1] = d : (e.splice(n + 1, 1), n--))
            }
            n++
        }
    }, r.nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/, r.whitespaceRegex_ = /\s/, r.linebreakRegex_ = /[\r\n]/, r.blanklineEndRegex_ = /\n\r?\n$/, r.blanklineStartRegex_ = /^\r?\n\r?\n/, r.prototype.diff_cleanupEfficiency = function(e) {
        for (var t = !1, n = [], r = 0, o = null, i = 0, a = !1, s = !1, c = !1, u = !1; i < e.length;) 0 == e[i][0] ? (e[i][1].length < this.Diff_EditCost && (c || u) ? (n[r++] = i, a = c, s = u, o = e[i][1]) : (r = 0, o = null), c = u = !1) : (-1 == e[i][0] ? u = !0 : c = !0, o && (a && s && c && u || o.length < this.Diff_EditCost / 2 && a + s + c + u == 3) && (e.splice(n[r - 1], 0, [-1, o]), e[n[r - 1] + 1][0] = 1, r--, o = null, a && s ? (c = u = !0, r = 0) : (i = --r > 0 ? n[r - 1] : -1, c = u = !1), t = !0)), i++;
        t && this.diff_cleanupMerge(e)
    }, r.prototype.diff_cleanupMerge = function(e) {
        e.push([0, ""]);
        for (var t, n = 0, r = 0, o = 0, i = "", a = ""; n < e.length;) switch (e[n][0]) {
            case 1:
                o++, a += e[n][1], n++;
                break;
            case -1:
                r++, i += e[n][1], n++;
                break;
            case 0:
                r + o > 1 ? (0 !== r && 0 !== o && (0 !== (t = this.diff_commonPrefix(a, i)) && (n - r - o > 0 && 0 == e[n - r - o - 1][0] ? e[n - r - o - 1][1] += a.substring(0, t) : (e.splice(0, 0, [0, a.substring(0, t)]), n++), a = a.substring(t), i = i.substring(t)), 0 !== (t = this.diff_commonSuffix(a, i)) && (e[n][1] = a.substring(a.length - t) + e[n][1], a = a.substring(0, a.length - t), i = i.substring(0, i.length - t))), 0 === r ? e.splice(n - o, r + o, [1, a]) : 0 === o ? e.splice(n - r, r + o, [-1, i]) : e.splice(n - r - o, r + o, [-1, i], [1, a]), n = n - r - o + (r ? 1 : 0) + (o ? 1 : 0) + 1) : 0 !== n && 0 == e[n - 1][0] ? (e[n - 1][1] += e[n][1], e.splice(n, 1)) : n++, o = 0, r = 0, i = "", a = ""
        }
        "" === e[e.length - 1][1] && e.pop();
        var s = !1;
        for (n = 1; n < e.length - 1;) 0 == e[n - 1][0] && 0 == e[n + 1][0] && (e[n][1].substring(e[n][1].length - e[n - 1][1].length) == e[n - 1][1] ? (e[n][1] = e[n - 1][1] + e[n][1].substring(0, e[n][1].length - e[n - 1][1].length), e[n + 1][1] = e[n - 1][1] + e[n + 1][1], e.splice(n - 1, 1), s = !0) : e[n][1].substring(0, e[n + 1][1].length) == e[n + 1][1] && (e[n - 1][1] += e[n + 1][1], e[n][1] = e[n][1].substring(e[n + 1][1].length) + e[n + 1][1], e.splice(n + 1, 1), s = !0)), n++;
        s && this.diff_cleanupMerge(e)
    }, r.prototype.diff_xIndex = function(e, t) {
        var n, r = 0,
            o = 0,
            i = 0,
            a = 0;
        for (n = 0; n < e.length && (1 !== e[n][0] && (r += e[n][1].length), -1 !== e[n][0] && (o += e[n][1].length), !(r > t)); n++) i = r, a = o;
        return e.length != n && -1 === e[n][0] ? a : a + (t - i)
    }, r.prototype.diff_prettyHtml = function(e) {
        for (var t = [], n = /&/g, r = /</g, o = />/g, i = /\n/g, a = 0; a < e.length; a++) {
            var s = e[a][0],
                c = e[a][1].replace(n, "&amp;").replace(r, "&lt;").replace(o, "&gt;").replace(i, "&para;<br>");
            switch (s) {
                case 1:
                    t[a] = '<ins style="background:#e6ffe6;">' + c + "</ins>";
                    break;
                case -1:
                    t[a] = '<del style="background:#ffe6e6;">' + c + "</del>";
                    break;
                case 0:
                    t[a] = "<span>" + c + "</span>"
            }
        }
        return t.join("")
    }, r.prototype.diff_text1 = function(e) {
        for (var t = [], n = 0; n < e.length; n++) 1 !== e[n][0] && (t[n] = e[n][1]);
        return t.join("")
    }, r.prototype.diff_text2 = function(e) {
        for (var t = [], n = 0; n < e.length; n++) - 1 !== e[n][0] && (t[n] = e[n][1]);
        return t.join("")
    }, r.prototype.diff_levenshtein = function(e) {
        for (var t = 0, n = 0, r = 0, o = 0; o < e.length; o++) {
            var i = e[o][0],
                a = e[o][1];
            switch (i) {
                case 1:
                    n += a.length;
                    break;
                case -1:
                    r += a.length;
                    break;
                case 0:
                    t += Math.max(n, r), n = 0, r = 0
            }
        }
        return t + Math.max(n, r)
    }, r.prototype.diff_toDelta = function(e) {
        for (var t = [], n = 0; n < e.length; n++) switch (e[n][0]) {
            case 1:
                t[n] = "+" + encodeURI(e[n][1]);
                break;
            case -1:
                t[n] = "-" + e[n][1].length;
                break;
            case 0:
                t[n] = "=" + e[n][1].length
        }
        return t.join("\t").replace(/%20/g, " ")
    }, r.prototype.diff_fromDelta = function(e, t) {
        for (var n = [], r = 0, o = 0, i = t.split(/\t/g), a = 0; a < i.length; a++) {
            var s = i[a].substring(1);
            switch (i[a].charAt(0)) {
                case "+":
                    try {
                        n[r++] = [1, decodeURI(s)]
                    } catch (e) {
                        throw new Error("Illegal escape in diff_fromDelta: " + s)
                    }
                    break;
                case "-":
                case "=":
                    var c = parseInt(s, 10);
                    if (isNaN(c) || c < 0) throw new Error("Invalid number in diff_fromDelta: " + s);
                    var u = e.substring(o, o += c);
                    "=" == i[a].charAt(0) ? n[r++] = [0, u] : n[r++] = [-1, u];
                    break;
                default:
                    if (i[a]) throw new Error("Invalid diff operation in diff_fromDelta: " + i[a])
            }
        }
        if (o != e.length) throw new Error("Delta length (" + o + ") does not equal source text length (" + e.length + ").");
        return n
    }, r.prototype.match_main = function(e, t, n) {
        if (null == e || null == t || null == n) throw new Error("Null input. (match_main)");
        return n = Math.max(0, Math.min(n, e.length)), e == t ? 0 : e.length ? e.substring(n, n + t.length) == t ? n : this.match_bitap_(e, t, n) : -1
    }, r.prototype.match_bitap_ = function(e, t, n) {
        if (t.length > this.Match_MaxBits) throw new Error("Pattern too long for this browser.");
        var r = this.match_alphabet_(t),
            o = this;

        function i(e, r) {
            var i = e / t.length,
                a = Math.abs(n - r);
            return o.Match_Distance ? i + a / o.Match_Distance : a ? 1 : i
        }
        var a = this.Match_Threshold,
            s = e.indexOf(t, n); - 1 != s && (a = Math.min(i(0, s), a), -1 != (s = e.lastIndexOf(t, n + t.length)) && (a = Math.min(i(0, s), a)));
        var c, u, l = 1 << t.length - 1;
        s = -1;
        for (var d, f = t.length + e.length, h = 0; h < t.length; h++) {
            for (c = 0, u = f; c < u;) i(h, n + u) <= a ? c = u : f = u, u = Math.floor((f - c) / 2 + c);
            f = u;
            var g = Math.max(1, n - u + 1),
                p = Math.min(n + u, e.length) + t.length,
                m = Array(p + 2);
            m[p + 1] = (1 << h) - 1;
            for (var b = p; b >= g; b--) {
                var v = r[e.charAt(b - 1)];
                if (m[b] = 0 === h ? (m[b + 1] << 1 | 1) & v : (m[b + 1] << 1 | 1) & v | (d[b + 1] | d[b]) << 1 | 1 | d[b + 1], m[b] & l) {
                    var _ = i(h, b - 1);
                    if (_ <= a) {
                        if (a = _, !((s = b - 1) > n)) break;
                        g = Math.max(1, 2 * n - s)
                    }
                }
            }
            if (i(h + 1, n) > a) break;
            d = m
        }
        return s
    }, r.prototype.match_alphabet_ = function(e) {
        for (var t = {}, n = 0; n < e.length; n++) t[e.charAt(n)] = 0;
        for (n = 0; n < e.length; n++) t[e.charAt(n)] |= 1 << e.length - n - 1;
        return t
    }, r.prototype.patch_addContext_ = function(e, t) {
        if (0 != t.length) {
            for (var n = t.substring(e.start2, e.start2 + e.length1), r = 0; t.indexOf(n) != t.lastIndexOf(n) && n.length < this.Match_MaxBits - this.Patch_Margin - this.Patch_Margin;) r += this.Patch_Margin, n = t.substring(e.start2 - r, e.start2 + e.length1 + r);
            r += this.Patch_Margin;
            var o = t.substring(e.start2 - r, e.start2);
            o && e.diffs.unshift([0, o]);
            var i = t.substring(e.start2 + e.length1, e.start2 + e.length1 + r);
            i && e.diffs.push([0, i]), e.start1 -= o.length, e.start2 -= o.length, e.length1 += o.length + i.length, e.length2 += o.length + i.length
        }
    }, r.prototype.patch_make = function(e, t, n) {
        var o, i;
        if ("string" == typeof e && "string" == typeof t && void 0 === n) o = e, (i = this.diff_main(o, t, !0)).length > 2 && (this.diff_cleanupSemantic(i), this.diff_cleanupEfficiency(i));
        else if (e && "object" == typeof e && void 0 === t && void 0 === n) i = e, o = this.diff_text1(i);
        else if ("string" == typeof e && t && "object" == typeof t && void 0 === n) o = e, i = t;
        else {
            if ("string" != typeof e || "string" != typeof t || !n || "object" != typeof n) throw new Error("Unknown call format to patch_make.");
            o = e, i = n
        }
        if (0 === i.length) return [];
        for (var a = [], s = new r.patch_obj, c = 0, u = 0, l = 0, d = o, f = o, h = 0; h < i.length; h++) {
            var g = i[h][0],
                p = i[h][1];
            switch (c || 0 === g || (s.start1 = u, s.start2 = l), g) {
                case 1:
                    s.diffs[c++] = i[h], s.length2 += p.length, f = f.substring(0, l) + p + f.substring(l);
                    break;
                case -1:
                    s.length1 += p.length, s.diffs[c++] = i[h], f = f.substring(0, l) + f.substring(l + p.length);
                    break;
                case 0:
                    p.length <= 2 * this.Patch_Margin && c && i.length != h + 1 ? (s.diffs[c++] = i[h], s.length1 += p.length, s.length2 += p.length) : p.length >= 2 * this.Patch_Margin && c && (this.patch_addContext_(s, d), a.push(s), s = new r.patch_obj, c = 0, d = f, u = l)
            }
            1 !== g && (u += p.length), -1 !== g && (l += p.length)
        }
        return c && (this.patch_addContext_(s, d), a.push(s)), a
    }, r.prototype.patch_deepCopy = function(e) {
        for (var t = [], n = 0; n < e.length; n++) {
            var o = e[n],
                i = new r.patch_obj;
            i.diffs = [];
            for (var a = 0; a < o.diffs.length; a++) i.diffs[a] = o.diffs[a].slice();
            i.start1 = o.start1, i.start2 = o.start2, i.length1 = o.length1, i.length2 = o.length2, t[n] = i
        }
        return t
    }, r.prototype.patch_apply = function(e, t) {
        if (0 == e.length) return [t, []];
        e = this.patch_deepCopy(e);
        var n = this.patch_addPadding(e);
        t = n + t + n, this.patch_splitMax(e);
        for (var r = 0, o = [], i = 0; i < e.length; i++) {
            var a, s, c = e[i].start2 + r,
                u = this.diff_text1(e[i].diffs),
                l = -1;
            if (u.length > this.Match_MaxBits ? -1 != (a = this.match_main(t, u.substring(0, this.Match_MaxBits), c)) && (-1 == (l = this.match_main(t, u.substring(u.length - this.Match_MaxBits), c + u.length - this.Match_MaxBits)) || a >= l) && (a = -1) : a = this.match_main(t, u, c), -1 == a) o[i] = !1, r -= e[i].length2 - e[i].length1;
            else if (o[i] = !0, r = a - c, u == (s = -1 == l ? t.substring(a, a + u.length) : t.substring(a, l + this.Match_MaxBits))) t = t.substring(0, a) + this.diff_text2(e[i].diffs) + t.substring(a + u.length);
            else {
                var d = this.diff_main(u, s, !1);
                if (u.length > this.Match_MaxBits && this.diff_levenshtein(d) / u.length > this.Patch_DeleteThreshold) o[i] = !1;
                else {
                    this.diff_cleanupSemanticLossless(d);
                    for (var f, h = 0, g = 0; g < e[i].diffs.length; g++) {
                        var p = e[i].diffs[g];
                        0 !== p[0] && (f = this.diff_xIndex(d, h)), 1 === p[0] ? t = t.substring(0, a + f) + p[1] + t.substring(a + f) : -1 === p[0] && (t = t.substring(0, a + f) + t.substring(a + this.diff_xIndex(d, h + p[1].length))), -1 !== p[0] && (h += p[1].length)
                    }
                }
            }
        }
        return [t = t.substring(n.length, t.length - n.length), o]
    }, r.prototype.patch_addPadding = function(e) {
        for (var t = this.Patch_Margin, n = "", r = 1; r <= t; r++) n += String.fromCharCode(r);
        for (r = 0; r < e.length; r++) e[r].start1 += t, e[r].start2 += t;
        var o = e[0],
            i = o.diffs;
        if (0 == i.length || 0 != i[0][0]) i.unshift([0, n]), o.start1 -= t, o.start2 -= t, o.length1 += t, o.length2 += t;
        else if (t > i[0][1].length) {
            var a = t - i[0][1].length;
            i[0][1] = n.substring(i[0][1].length) + i[0][1], o.start1 -= a, o.start2 -= a, o.length1 += a, o.length2 += a
        }
        return 0 == (i = (o = e[e.length - 1]).diffs).length || 0 != i[i.length - 1][0] ? (i.push([0, n]), o.length1 += t, o.length2 += t) : t > i[i.length - 1][1].length && (a = t - i[i.length - 1][1].length, i[i.length - 1][1] += n.substring(0, a), o.length1 += a, o.length2 += a), n
    }, r.prototype.patch_splitMax = function(e) {
        for (var t = this.Match_MaxBits, n = 0; n < e.length; n++)
            if (!(e[n].length1 <= t)) {
                var o = e[n];
                e.splice(n--, 1);
                for (var i = o.start1, a = o.start2, s = ""; 0 !== o.diffs.length;) {
                    var c = new r.patch_obj,
                        u = !0;
                    for (c.start1 = i - s.length, c.start2 = a - s.length, "" !== s && (c.length1 = c.length2 = s.length, c.diffs.push([0, s])); 0 !== o.diffs.length && c.length1 < t - this.Patch_Margin;) {
                        var l = o.diffs[0][0],
                            d = o.diffs[0][1];
                        1 === l ? (c.length2 += d.length, a += d.length, c.diffs.push(o.diffs.shift()), u = !1) : -1 === l && 1 == c.diffs.length && 0 == c.diffs[0][0] && d.length > 2 * t ? (c.length1 += d.length, i += d.length, u = !1, c.diffs.push([l, d]), o.diffs.shift()) : (d = d.substring(0, t - c.length1 - this.Patch_Margin), c.length1 += d.length, i += d.length, 0 === l ? (c.length2 += d.length, a += d.length) : u = !1, c.diffs.push([l, d]), d == o.diffs[0][1] ? o.diffs.shift() : o.diffs[0][1] = o.diffs[0][1].substring(d.length))
                    }
                    s = (s = this.diff_text2(c.diffs)).substring(s.length - this.Patch_Margin);
                    var f = this.diff_text1(o.diffs).substring(0, this.Patch_Margin);
                    "" !== f && (c.length1 += f.length, c.length2 += f.length, 0 !== c.diffs.length && 0 === c.diffs[c.diffs.length - 1][0] ? c.diffs[c.diffs.length - 1][1] += f : c.diffs.push([0, f])), u || e.splice(++n, 0, c)
                }
            }
    }, r.prototype.patch_toText = function(e) {
        for (var t = [], n = 0; n < e.length; n++) t[n] = e[n];
        return t.join("")
    }, r.prototype.patch_fromText = function(e) {
        var t = [];
        if (!e) return t;
        for (var n = e.split("\n"), o = 0, i = /^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/; o < n.length;) {
            var a = n[o].match(i);
            if (!a) throw new Error("Invalid patch string: " + n[o]);
            var s = new r.patch_obj;
            for (t.push(s), s.start1 = parseInt(a[1], 10), "" === a[2] ? (s.start1--, s.length1 = 1) : "0" == a[2] ? s.length1 = 0 : (s.start1--, s.length1 = parseInt(a[2], 10)), s.start2 = parseInt(a[3], 10), "" === a[4] ? (s.start2--, s.length2 = 1) : "0" == a[4] ? s.length2 = 0 : (s.start2--, s.length2 = parseInt(a[4], 10)), o++; o < n.length;) {
                var c = n[o].charAt(0);
                try {
                    var u = decodeURI(n[o].substring(1))
                } catch (e) {
                    throw new Error("Illegal escape in patch_fromText: " + u)
                }
                if ("-" == c) s.diffs.push([-1, u]);
                else if ("+" == c) s.diffs.push([1, u]);
                else if (" " == c) s.diffs.push([0, u]);
                else {
                    if ("@" == c) break;
                    if ("" !== c) throw new Error('Invalid patch mode "' + c + '" in: ' + u)
                }
                o++
            }
        }
        return t
    }, r.patch_obj = function() {
        this.diffs = [], this.start1 = null, this.start2 = null, this.length1 = 0, this.length2 = 0
    }, r.patch_obj.prototype.toString = function() {
        for (var e, t = ["@@ -" + (0 === this.length1 ? this.start1 + ",0" : 1 == this.length1 ? this.start1 + 1 : this.start1 + 1 + "," + this.length1) + " +" + (0 === this.length2 ? this.start2 + ",0" : 1 == this.length2 ? this.start2 + 1 : this.start2 + 1 + "," + this.length2) + " @@\n"], n = 0; n < this.diffs.length; n++) {
            switch (this.diffs[n][0]) {
                case 1:
                    e = "+";
                    break;
                case -1:
                    e = "-";
                    break;
                case 0:
                    e = " "
            }
            t[n + 1] = e + encodeURI(this.diffs[n][1]) + "\n"
        }
        return t.join("").replace(/%20/g, " ")
    }, e.exports = r, e.exports.diff_match_patch = r, e.exports.DIFF_DELETE = -1, e.exports.DIFF_INSERT = 1, e.exports.DIFF_EQUAL = 0
}, , , , function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "second", (function() {
        return r
    })), n.d(t, "minute", (function() {
        return o
    })), n.d(t, "hour", (function() {
        return i
    })), n.d(t, "day", (function() {
        return a
    })), n.d(t, "week", (function() {
        return s
    })), n.d(t, "days", (function() {
        return c
    })), n.d(t, "seconds", (function() {
        return u
    })), n.d(t, "hertz", (function() {
        return l
    }));
    const r = 1e3,
        o = 60 * r,
        i = 60 * o,
        a = 24 * i,
        s = 7 * a;

    function c(e) {
        return e * a
    }

    function u(e) {
        return e * r
    }

    function l(e) {
        return r / e
    }
}, function(e, t, n) {
    "use strict";
    var r = n(31),
        o = Object.create,
        i = function() {
            function e() {}
            return function(t) {
                if (!Object(r.a)(t)) return {};
                if (o) return o(t);
                e.prototype = t;
                var n = new e;
                return e.prototype = void 0, n
            }
        }();
    t.a = i
}, function(e, t, n) {
    "use strict";
    var r = n(99),
        o = n(27),
        i = n(82),
        a = n(126),
        s = n(91),
        c = Object.prototype.hasOwnProperty;
    t.a = function(e, t) {
        var n = Object(o.a)(e),
            u = !n && Object(r.a)(e),
            l = !n && !u && Object(i.a)(e),
            d = !n && !u && !l && Object(s.a)(e),
            f = n || u || l || d,
            h = f ? function(e, t) {
                for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
                return r
            }(e.length, String) : [],
            g = h.length;
        for (var p in e) !t && !c.call(e, p) || f && ("length" == p || l && ("offset" == p || "parent" == p) || d && ("buffer" == p || "byteLength" == p || "byteOffset" == p) || Object(a.a)(p, g)) || h.push(p);
        return h
    }
}, function(e, t, n) {
    "use strict";
    var r = function(e, t, n) {
        for (var r = -1, o = Object(e), i = n(e), a = i.length; a--;) {
            var s = i[++r];
            if (!1 === t(o[s], s, o)) break
        }
        return e
    };
    t.a = r
}, function(e, t, n) {
    "use strict";
    n.d(t, "e", (function() {
        return r
    })), n.d(t, "h", (function() {
        return o
    })), n.d(t, "f", (function() {
        return i
    })), n.d(t, "g", (function() {
        return a
    })), n.d(t, "b", (function() {
        return s
    })), n.d(t, "a", (function() {
        return c
    })), n.d(t, "d", (function() {
        return u
    })), n.d(t, "c", (function() {
        return l
    }));
    let r = ["The G logo gets out of the way when you're typing", "Switch between American, British, Australian, and Canadian English", "Quickly disable checking in certain types of text fields", "A fully redesigned and improved interface"],
        o = ["id", "email", "firstName", "anonymous", "type", "subscriptionFree", "experiments", "isTest", "premium", "settings", "registrationDate", "mimic", "groups", "extensionInstallDate", "fixed_errors", "edc"];
    o.push("token");
    const i = "gr_ver_2",
        a = ["data-gramm_editor", "data-gramm", "data-gramm_id", "gramm_editor", "readonly", "disabled"],
        s = ["pm-container", ["class", "ProseMirror"], "data-synchrony", ["data-gramm", "false"],
            ["data-enable-grammarly", "false"],
            ["class", "redactor-layer"],
            ["class", "redactor-editor"],
            ["class", "ck-editor__editable"],
            ["class", "redactor_box"],
            ["aria-label", "Search Facebook"]
        ],
        c = [...a, ...s],
        u = {
            name: "data-enable-grammarly",
            value: "true"
        },
        l = ["changed-user", "changed-plan", "changed-dialect", "cleanup", "editor-fix"]
}, , , function(e, t) {
    var n, r, o = e.exports = {};

    function i() {
        throw new Error("setTimeout has not been defined")
    }

    function a() {
        throw new Error("clearTimeout has not been defined")
    }

    function s(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }! function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : i
        } catch (e) {
            n = i
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (e) {
            r = a
        }
    }();
    var c, u = [],
        l = !1,
        d = -1;

    function f() {
        l && c && (l = !1, c.length ? u = c.concat(u) : d = -1, u.length && h())
    }

    function h() {
        if (!l) {
            var e = s(f);
            l = !0;
            for (var t = u.length; t;) {
                for (c = u, u = []; ++d < t;) c && c[d].run();
                d = -1, t = u.length
            }
            c = null, l = !1,
                function(e) {
                    if (r === clearTimeout) return clearTimeout(e);
                    if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                    try {
                        r(e)
                    } catch (t) {
                        try {
                            return r.call(null, e)
                        } catch (t) {
                            return r.call(this, e)
                        }
                    }
                }(e)
        }
    }

    function g(e, t) {
        this.fun = e, this.array = t
    }

    function p() {}
    o.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        u.push(new g(e, t)), 1 !== u.length || l || s(h)
    }, g.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = p, o.addListener = p, o.once = p, o.off = p, o.removeListener = p, o.removeAllListeners = p, o.emit = p, o.prependListener = p, o.prependOnceListener = p, o.listeners = function(e) {
        return []
    }, o.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, o.cwd = function() {
        return "/"
    }, o.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, o.umask = function() {
        return 0
    }
}, , , , , , function(e, t, n) {
    "use strict";
    t.a = function(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length; ++n < r && !1 !== t(e[n], n, e););
        return e
    }
}, function(e, t, n) {
    "use strict";
    var r = n(213),
        o = n(142);
    t.a = function(e, t) {
        return e && Object(r.a)(e, t, o.a)
    }
}, , function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(168),
            o = "object" == typeof exports && exports && !exports.nodeType && exports,
            i = o && "object" == typeof e && e && !e.nodeType && e,
            a = i && i.exports === o && r.a.process,
            s = function() {
                try {
                    return i && i.require && i.require("util").types || a && a.binding && a.binding("util")
                } catch (e) {}
            }();
        t.a = s
    }).call(this, n(198)(e))
}, function(e, t, n) {
    "use strict";
    n.d(t, "f", (function() {
        return i
    })), n.d(t, "g", (function() {
        return a
    })), n.d(t, "b", (function() {
        return s
    })), n.d(t, "a", (function() {
        return c
    })), n.d(t, "d", (function() {
        return u
    })), n.d(t, "e", (function() {
        return l
    })), n.d(t, "c", (function() {
        return d
    })), n.d(t, "h", (function() {
        return h
    }));
    var r = n(315),
        o = n(10);
    const i = "1.0",
        a = ["inbox.google.com", "mail.google.com", "yahoo.com", "mail.live.com", "facebook.com", "tumblr.com", "stackoverflow.com", "wordpress.com", "wordpress.org", "blogspot.com"],
        s = ["facebook.com", "messenger.com", "work.fb.com", "business.facebook.com"],
        c = {
            "drive.google.com": {
                title: "Google Drive Not Supported",
                getMessage: () => `We hope to support Google Drive apps<br/> in the future, but for now please use your</br> <a class="openGrammarly" href="${Object(o.f)().app}">Grammarly Editor</a>.`
            },
            "docs.google.com": {
                title: "Google Drive Not Supported",
                getMessage: () => `We hope to support Google Drive apps<br/> in the future, but for now please use your</br> <a class="openGrammarly" href="${Object(o.f)().app}">Grammarly Editor</a>.`
            },
            "chrome.google.com": {
                title: "Web Store Not Supported"
            }
        },
        u = 18e5,
        l = [6e5, u, 36e5, 108e5, 432e5, 864e5, 31536e6],
        d = {},
        f = {
            "hootsuite.com": {
                enabled: !1
            },
            "chrome.google.com": {
                enabled: !1
            },
            "facebook.com": {
                enabled: !0,
                pages: {
                    ".*/notes": {
                        enabled: !1
                    }
                }
            },
            "onedrive.live.com": {
                enabled: !1
            },
            "docs.com": {
                enabled: !1
            },
            "sp.docs.com": {
                enabled: !1
            },
            "docs.google.com": {
                enabled: !0,
                matchInclusions: !1,
                matchSubdomains: !1,
                disabledBrowsers: ["edge"],
                pages: {
                    ".*/document": {
                        matchPartOfUrl: !0,
                        minFieldHeight: 0,
                        minFieldWidth: 0,
                        enabled: !0
                    },
                    ".*/spreadsheets": {
                        enabled: !1
                    },
                    ".*/presentation": {
                        enabled: !1
                    }
                },
                track: !0
            },
            "drive.google.com": {
                enabled: !1
            },
            "texteditor.nsspot.net": {
                enabled: !1
            },
            "jsbin.com": {
                enabled: !1
            },
            "jsfiddle.net": {
                enabled: !1
            },
            "quora.com": {
                enabled: !1
            },
            "paper.dropbox.com": {
                enabled: !1
            },
            "mail.live.com": {
                enabled: !1,
                matchInclusions: !0
            },
            "imperavi.com": {
                enabled: !1
            },
            "usecanvas.com": {
                enabled: !1
            }
        };

    function h() {
        return {
            pageConfig: Object(r.a)({}, f, {
                version: {
                    enabled: !1,
                    servicePage: !0
                },
                extensions: {
                    enabled: !1,
                    servicePage: !0
                },
                settings: {
                    enabled: !1,
                    servicePage: !0
                },
                "com.safari.grammarlyspellcheckergrammarchecker": {
                    enabled: !1,
                    matchInclusions: !0,
                    servicePage: !0
                },
                [`app.${Object(o.e)()}`]: {
                    enabled: !1,
                    grammarlyEditor: !0
                },
                "linkedin.com": {
                    pages: {
                        "/messaging": {
                            afterReplaceEvents: ["input"]
                        }
                    }
                },
                "plus.google.com": {
                    afterReplaceEvents: ["keyup"],
                    minFieldHeight: 0,
                    minFieldWidth: 0
                },
                "facebook.com": {
                    minFieldHeight: 0,
                    pages: {
                        "/marketplace": {
                            afterReplaceEvents: ["input"]
                        }
                    }
                },
                "mail.google.com": {
                    fields: [{
                        name: "to"
                    }, {
                        name: "cc"
                    }, {
                        name: "bcc"
                    }, {
                        className: "vO"
                    }],
                    subframes: !1
                },
                "drive.google.com": {
                    track: !0
                },
                "docs.google.com": {
                    track: !0
                },
                "app.asana.com": {
                    fields: [{
                        className: "task-row-text-input"
                    }]
                },
                "tumblr.com": {
                    fields: [{
                        attr: ["aria-label", "Post title"]
                    }, {
                        attr: ["aria-label", "Type or paste a URL"]
                    }]
                },
                "chrome.google.com": {
                    dontShowDisabledBadge: !0
                }
            })
        }
    }
}, , , , , , , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return o
    }));
    var r = n(4);
    const o = Object(r.p)(() => browser, () => window.browser);
    window.edge = window.browser, window.chrome = window.chrome
}, , , function(e, t, n) {
    "use strict";
    var r = n(173);
    t.a = function(e, t, n) {
        var o = null == e ? void 0 : Object(r.a)(e, t);
        return void 0 === o ? n : o
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return i
    })), n.d(t, "a", (function() {
        return a
    }));
    var r = n(10),
        o = n(3);

    function i(e, t) {
        const n = document.createElement("img"),
            i = Object(o.b)(e, {
                application: Object(r.a)(),
                version: Object(r.h)(),
                env: Object(r.c)(),
                context: t
            });
        return n.src = Object(o.e)(i, Object(r.f)().newFelog), Promise.resolve()
    }

    function a(e, t, n, r, o) {
        return i({
            logger: e,
            level: n,
            message: t,
            extra: r
        }, o)
    }
}, function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "t", (function() {
        return r
    })), n.d(t, "setUser", (function() {
        return o
    })), n.d(t, "setGroups", (function() {
        return i
    })), n.d(t, "setSettings", (function() {
        return a
    })), n.d(t, "sessionInvalidate", (function() {
        return s
    })), n.d(t, "incFixed", (function() {
        return c
    })), n.d(t, "updateGroups", (function() {
        return u
    }));
    const r = {
        SET_USER: "user/SET_USER",
        SET_GROUPS: "user/SET_GROUPS",
        SET_SETTINGS: "user/SET_SETTINGS",
        SESSION_INVALIDATE: "user/SESSION_INVALIDATE",
        INC_FIXED: "user/INC_FIXED",
        UPDATE_GROUPS: "user/UPDATE_GROUPS"
    };

    function o(e) {
        return {
            type: r.SET_USER,
            data: e
        }
    }

    function i(e) {
        return {
            type: r.SET_GROUPS,
            data: e
        }
    }

    function a(e) {
        return {
            type: r.SET_SETTINGS,
            data: e
        }
    }

    function s(e) {
        return {
            type: r.SESSION_INVALIDATE,
            reason: e
        }
    }

    function c() {
        return {
            type: r.INC_FIXED
        }
    }

    function u() {
        return {
            type: r.UPDATE_GROUPS
        }
    }
}, , function(e, t, n) {
    "use strict";
    t.a = function(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length, o = Array(r); ++n < r;) o[n] = t(e[n], n, e);
        return o
    }
}, , function(e, t, n) {
    "use strict";
    var r = n(108),
        o = n(143),
        i = n(31),
        a = function(e) {
            return e == e && !Object(i.a)(e)
        },
        s = n(142),
        c = function(e, t) {
            return function(n) {
                return null != n && n[e] === t && (void 0 !== t || e in Object(n))
            }
        },
        u = function(e) {
            var t = function(e) {
                for (var t = Object(s.a)(e), n = t.length; n--;) {
                    var r = t[n],
                        o = e[r];
                    t[n] = [r, o, a(o)]
                }
                return t
            }(e);
            return 1 == t.length && t[0][2] ? c(t[0][0], t[0][1]) : function(n) {
                return n === e || function(e, t, n, i) {
                    var a = n.length,
                        s = a,
                        c = !i;
                    if (null == e) return !s;
                    for (e = Object(e); a--;) {
                        var u = n[a];
                        if (c && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1
                    }
                    for (; ++a < s;) {
                        var l = (u = n[a])[0],
                            d = e[l],
                            f = u[1];
                        if (c && u[2]) {
                            if (void 0 === d && !(l in e)) return !1
                        } else {
                            var h = new r.a;
                            if (i) var g = i(d, f, l, e, t, h);
                            if (!(void 0 === g ? Object(o.a)(f, d, 3, i, h) : g)) return !1
                        }
                    }
                    return !0
                }(n, e, t)
            }
        },
        l = n(239),
        d = function(e, t) {
            return null != e && t in Object(e)
        },
        f = n(176),
        h = n(99),
        g = n(27),
        p = n(126),
        m = n(125),
        b = n(98),
        v = function(e, t) {
            return null != e && function(e, t, n) {
                for (var r = -1, o = (t = Object(f.a)(t, e)).length, i = !1; ++r < o;) {
                    var a = Object(b.a)(t[r]);
                    if (!(i = null != e && n(e, a))) break;
                    e = e[a]
                }
                return i || ++r != o ? i : !!(o = null == e ? 0 : e.length) && Object(m.a)(o) && Object(p.a)(a, o) && (Object(g.a)(e) || Object(h.a)(e))
            }(e, t, d)
        },
        _ = n(141),
        y = n(117),
        w = n(173),
        O = function(e) {
            return Object(_.a)(e) ? function(e) {
                return function(t) {
                    return null == t ? void 0 : t[e]
                }
            }(Object(b.a)(e)) : function(e) {
                return function(t) {
                    return Object(w.a)(t, e)
                }
            }(e)
        };
    t.a = function(e) {
        return "function" == typeof e ? e : null == e ? y.a : "object" == typeof e ? Object(g.a)(e) ? function(e, t) {
            return Object(_.a)(e) && a(t) ? c(Object(b.a)(e), t) : function(n) {
                var r = Object(l.a)(n, e);
                return void 0 === r && r === t ? v(n, e) : Object(o.a)(t, r, 3)
            }
        }(e[0], e[1]) : u(e) : O(e)
    }
}, , , , , , function(e, t, n) {
    "use strict";
    var r;
    n.d(t, "a", (function() {
            return r
        })),
        function(e) {
            e.gdocs = "gdocs", e.other = "other"
        }(r || (r = {}))
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.utils = t.effects = t.takeLatest = t.takeEvery = t.storeIO = t.runSaga = t.isCancelError = t.SagaCancellationException = void 0;
    var r = n(724);
    Object.defineProperty(t, "runSaga", {
        enumerable: !0,
        get: function() {
            return r.runSaga
        }
    }), Object.defineProperty(t, "storeIO", {
        enumerable: !0,
        get: function() {
            return r.storeIO
        }
    });
    var o = n(725);
    Object.defineProperty(t, "takeEvery", {
        enumerable: !0,
        get: function() {
            return o.takeEvery
        }
    }), Object.defineProperty(t, "takeLatest", {
        enumerable: !0,
        get: function() {
            return o.takeLatest
        }
    });
    var i = l(n(726)),
        a = l(n(573)),
        s = u(n(706)),
        c = u(n(727));

    function u(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
    }

    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.default = i.default;
    var d = t.SagaCancellationException = a.default;
    t.isCancelError = function(e) {
        return e instanceof d
    }, t.effects = s, t.utils = c
}, , function(e, t, n) {
    "use strict";
    var r = n(223),
        o = n(211),
        i = n(224),
        a = n(245),
        s = n(157),
        c = n(27),
        u = n(82),
        l = n(86),
        d = n(31),
        f = n(91);
    t.a = function(e, t, n) {
        var h = Object(c.a)(e),
            g = h || Object(u.a)(e) || Object(f.a)(e);
        if (t = Object(a.a)(t, 4), null == n) {
            var p = e && e.constructor;
            n = g ? h ? new p : [] : Object(d.a)(e) && Object(l.a)(p) ? Object(o.a)(Object(s.a)(e)) : {}
        }
        return (g ? r.a : i.a)(e, (function(e, r, o) {
            return t(n, e, r, o)
        })), n
    }
}, function(e, t, n) {
    "use strict";
    var r = n(143);
    t.a = function(e, t) {
        return Object(r.a)(e, t)
    }
}, function(e, t, n) {
    "use strict";
    var r = n(128),
        o = n(182),
        i = Object(o.a)(Object.keys, Object),
        a = Object.prototype.hasOwnProperty;
    t.a = function(e) {
        if (!Object(r.a)(e)) return i(e);
        var t = [];
        for (var n in Object(e)) a.call(e, n) && "constructor" != n && t.push(n);
        return t
    }
}, , , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return r
    }));
    const r = {
        server: "socket-server",
        client: "socket-client",
        serverIframe: "socket-server-iframe",
        iframeMode: "iframe-mode"
    }
}, , , , , function(e, t, n) {
    "use strict";

    function r(e, t) {
        return [].concat(...t.map(e))
    }

    function o(e) {
        return [].concat(...e)
    }

    function i(e) {
        return [...new Set(e)]
    }

    function a(e, t) {
        const n = new Set;
        return t.filter(t => {
            const r = e(t),
                o = !n.has(r);
            return n.add(r), o
        })
    }

    function s(e, t, n) {
        const r = [t];
        let o = t;
        for (let t = 0; t < n.length; t++) o = e(o, n[t]), r.push(o);
        return r
    }

    function c(e) {
        return e.reduce((e, t) => t > e ? t : e, e[0])
    }

    function u(e, t) {
        return 0 === e.length ? void 0 : e.reduce((e, n) => {
            const r = t(n);
            return r > e[1] ? [n, r] : e
        }, [e[0], t(e[0])])[0]
    }

    function l(e) {
        return e.slice().reverse()
    }

    function d(e, t) {
        const n = [],
            r = [];
        let o = 0,
            i = 0;
        for (let a = 0; a < t.length; a++) e(t[a]) ? n[o++] = t[a] : r[i++] = t[a];
        return [n, r]
    }

    function f(e, t) {
        if (e < 1) throw new Error("Invalid chunk size, expected > 0");
        if (0 === t.length) return [
            []
        ];
        const n = [];
        for (let r = 0; r < Math.ceil(t.length / e); r++) n.push(t.slice(r * e, (r + 1) * e));
        return n
    }

    function h(e, t) {
        const n = [];
        let r = e(t);
        for (; void 0 !== r;) n.push(r[0]), r = e(r[1]);
        return n
    }

    function g(e, t) {
        return void 0 !== t ? Array.from(Array(t - e), (t, n) => n + e) : Array.from(Array(e), (e, t) => t)
    }

    function p(e, t = ((e, t) => e === t)) {
        if (0 === e.length) return [];
        const n = [
            [e[0]]
        ];
        for (let r = 1; r < e.length; r += 1) {
            const o = n[n.length - 1][0],
                i = e[r];
            t(o, i) ? n[n.length - 1].push(i) : n.push([i])
        }
        return n
    }
    n.r(t), n.d(t, "flatMap", (function() {
        return r
    })), n.d(t, "flatten", (function() {
        return o
    })), n.d(t, "distinct", (function() {
        return i
    })), n.d(t, "distinctBy", (function() {
        return a
    })), n.d(t, "scan", (function() {
        return s
    })), n.d(t, "maximum", (function() {
        return c
    })), n.d(t, "maximumBy", (function() {
        return u
    })), n.d(t, "reverse", (function() {
        return l
    })), n.d(t, "partition", (function() {
        return d
    })), n.d(t, "chunkBySize", (function() {
        return f
    })), n.d(t, "unfold", (function() {
        return h
    })), n.d(t, "range", (function() {
        return g
    })), n.d(t, "groupBy", (function() {
        return p
    }))
}, , , , function(e, t, n) {
    "use strict";
    t.a = function(e) {
        return function(t) {
            return e(t)
        }
    }
}, , , function(e, t, n) {
    "use strict";
    t.a = function(e, t) {
        for (var n = -1, r = t.length, o = e.length; ++n < r;) e[o + n] = t[n];
        return e
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return c
    })), n.d(t, "b", (function() {
        return l
    }));
    var r = n(17),
        o = n(38),
        i = n(10);

    function a(e) {
        const t = e.reduce((e, t) => {
            const n = e.get(t.category);
            return n ? n.count++ : e.set(t.category, {
                group: t.group,
                categoryHuman: t.categoryHuman,
                count: 1
            }), e
        }, new Map);
        return Array.from(t.values()).sort((e, t) => t.count - e.count)
    }

    function s(e) {
        const t = new Map;
        for (const {
                isFree: n,
                cardLayout: {
                    group: r
                }
            } of e) {
            t.has(r) || t.set(r, {
                lensName: r,
                free: 0,
                premium: 0
            });
            const e = t.get(r);
            e && (e[n ? "free" : "premium"] += 1)
        }
        return Array.from(t.values()).sort((e, t) => t.premium - e.premium)
    }

    function c(e) {
        const t = [{
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
        }].reduce((e, t) => (t.lensesName.forEach(n => e[n] = t.title), e), {});
        return s(e).map(e => Object.assign(Object.assign({}, e), {
            friendName: t[e.lensName]
        })).sort((e, t) => t.premium - e.premium || e.friendName.localeCompare(t.friendName))
    }

    function u(e) {
        return btoa(JSON.stringify(e))
    }

    function l(e) {
        const t = r.a().appConfig.url,
            n = e.showSinglePlanComparisonPage ? t.plansEnterprise : e.showPlanComparison ? t.planComparison : t.upgrade;
        window.open(Object(o.a)(n, [...e.isFromEmail ? [Object(o.b)("isFromEmail", "1")] : [], Object(o.b)("alerts", u(a(e.currentAlerts))), Object(o.b)("lensedAlerts", u(s(e.currentAlerts))), Object(o.b)("app_type", "popup"), Object(o.b)("browser", Object(i.b)()), ...Object(o.q)({
            medium: "internal",
            source: e.isAnonymousUser ? "signupHook" : "upHook",
            campaign: e.forceUtmCampaign ? e.forceUtmCampaign : e.isAnonymousUser ? "extensionPremiumCta" : "extensionGButton"
        })]))
    }
}, , , , function(e, t) {
    e.exports = {
        toU8IntArray: function(e) {
            for (var t = [], n = [], r = 0; r < e.length; r++) {
                var o, i = e.charCodeAt(r);
                for (n.length = 0;
                    (o = 255 & i) || i;) n.push(o), i >>>= 8;
                t = t.concat(n.reverse())
            }
            return t
        },
        intToUnsignedHex: function(e) {
            for (var t, n = [];
                (t = 65535 & e) || e;) t = t.toString(16), t = "0000".slice(t.length) + t, n.push(t), e >>>= 16;
            return n.reverse().join("")
        }
    }
}, function(e, t, n) {
    "use strict";
    t.a = function() {
        return !1
    }
}, function(e, t, n) {
    "use strict";
    t.a = function(e, t) {
        return e.has(t)
    }
}, function(e, t, n) {
    "use strict";
    var r = n(323),
        o = n(84),
        i = n(77),
        a = n(126),
        s = n(31),
        c = function(e, t, n) {
            if (!Object(s.a)(n)) return !1;
            var r = typeof t;
            return !!("number" == r ? Object(i.a)(n) && Object(a.a)(t, n.length) : "string" == r && t in n) && Object(o.a)(n[t], e)
        };
    t.a = function(e) {
        return Object(r.a)((function(t, n) {
            var r = -1,
                o = n.length,
                i = o > 1 ? n[o - 1] : void 0,
                a = o > 2 ? n[2] : void 0;
            for (i = e.length > 3 && "function" == typeof i ? (o--, i) : void 0, a && c(n[0], n[1], a) && (i = o < 3 ? void 0 : i, o = 1), t = Object(t); ++r < o;) {
                var s = n[r];
                s && e(t, s, r, i)
            }
            return t
        }))
    }
}, function(e, t, n) {
    "use strict";
    var r = n(169),
        o = n(84),
        i = Object.prototype.hasOwnProperty,
        a = function(e, t, n) {
            var a = e[t];
            i.call(e, t) && Object(o.a)(a, n) && (void 0 !== n || t in e) || Object(r.a)(e, t, n)
        };
    t.a = function(e, t, n, o) {
        var i = !n;
        n || (n = {});
        for (var s = -1, c = t.length; ++s < c;) {
            var u = t[s],
                l = o ? o(n[u], e[u], u, n, e) : void 0;
            void 0 === l && (l = e[u]), i ? Object(r.a)(n, u, l) : a(n, u, l)
        }
        return n
    }
}, , , , , , , , , , , function(e, t, n) {
    "use strict";
    var r, o = n(72),
        i = n(58),
        a = n(43),
        s = n(255),
        c = function(e, t, n, r) {
            return new(n || (n = Promise))((function(o, i) {
                function a(e) {
                    try {
                        c(r.next(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function s(e) {
                    try {
                        c(r.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                        e(t)
                    }))).then(a, s)
                }
                c((r = r.apply(e, t || [])).next())
            }))
        };
    ! function(e) {
        e[e.nonEmptyMigration = 0] = "nonEmptyMigration", e[e.emptyMigration = 1] = "emptyMigration"
    }(r || (r = {}));
    class u {
        constructor(e, t, n, r = []) {
            var o, i;
            this._name = e, this._source = t, this._destination = n, this._destValuesToKeep = r, this._migrationFlagSuccessfulValue = "ok", this._migrationFlagUniqueKey = "104ccd8c-9919-9ae4-931f-782fb197486c", this._migrationFlagKey = `__migration-${this._migrationFlagUniqueKey}:(${this._name})`, this._migrationInProgress = !1, this.migrationAwareDestination = (o = this._destination, i = e => e === this._migrationFlagKey, {
                get: o.get.bind(o),
                set: o.set.bind(o),
                getAll: o.getAll.bind(o),
                remove: o.remove.bind(o),
                removeAll() {
                    return c(this, void 0, void 0, (function*() {
                        const e = yield o.getAll();
                        yield o.removeAll(), yield Promise.all(Object.keys(e).filter(i).map(t => o.set(t, e[t])))
                    }))
                }
            })
        }
        _getMigrated() {
            return this._destination.get(this._migrationFlagKey).then(e => e === this._migrationFlagSuccessfulValue)
        }
        _setMigrated() {
            return c(this, void 0, void 0, (function*() {
                yield this._destination.set(this._migrationFlagKey, this._migrationFlagSuccessfulValue);
                const e = yield this._destination.get(this._migrationFlagKey);
                if (e !== this._migrationFlagSuccessfulValue) throw new Error(`Could not verify status write, actual value: ${e}`)
            }))
        }
        _runMigration() {
            return c(this, void 0, void 0, (function*() {
                Object(i.b)(!this._migrationInProgress, "migration already in progress"), this._migrationInProgress = !0;
                try {
                    const e = yield this._source.getAll(), t = 0 === Object.keys(e).length;
                    if (yield Promise.all(this._destValuesToKeep.map(t => this._destination.get(t).then(n => {
                            null != n && (e[t] = n)
                        }))), yield this._destination.removeAll(), yield Promise.all(Object.keys(e).filter(t => null != e[t]).map(t => this._destination.set(t, e[t]))), !Object(s.a)(e, yield this._destination.getAll())) throw new Error("Could not verify write");
                    return this._migrationInProgress = !1, t ? r.emptyMigration : r.nonEmptyMigration
                } catch (e) {
                    throw this._migrationInProgress = !1, e
                }
            }))
        }
        ensureMigrationCompleted() {
            return c(this, void 0, void 0, (function*() {
                if (yield this._getMigrated()) return a.a.alreadyMigrated; {
                    const e = yield this._runMigration();
                    switch (yield this._setMigrated(), e) {
                        case r.nonEmptyMigration:
                            return a.a.success;
                        case r.emptyMigration:
                            return a.a.successWithEmpty;
                        default:
                            throw new Error(`Match not exhaustive: ${e}`)
                    }
                }
            }))
        }
    }
    n.d(t, "a", (function() {
        return l
    }));
    var l, d = function(e, t, n, r) {
        return new(n || (n = Promise))((function(o, i) {
            function a(e) {
                try {
                    c(r.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function s(e) {
                try {
                    c(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function c(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                    e(t)
                }))).then(a, s)
            }
            c((r = r.apply(e, t || [])).next())
        }))
    };
    ! function(e) {
        e.windowLocalStorage = {
            get: e => o.a.sync(() => window.localStorage.getItem(e)),
            set: (e, t) => o.a.sync(() => window.localStorage.setItem(e, t)),
            getAll: () => o.a.sync(() => {
                const e = {};
                return Object.keys(window.localStorage).forEach(t => {
                    e[t] = window.localStorage.getItem(t)
                }), e
            }),
            remove: e => o.a.sync(() => window.localStorage.removeItem(e)),
            removeAll: () => o.a.sync(() => window.localStorage.clear())
        }, e.MigrationAwarePreferencesApiImpl = class {
            constructor(t) {
                this._firefox = t, this._migrationCompleted = Promise.resolve(!1), this._ensureMigrationCompletedCalled = !1, this.get = this._getMigrationAwareMethod("get"), this.set = this._getMigrationAwareMethod("set"), this.getAll = this._getMigrationAwareMethod("getAll"), this.remove = this._getMigrationAwareMethod("remove"), this.removeAll = this._getMigrationAwareMethod("removeAll"), this.browserStorageLocal = {
                    get: e => d(this, void 0, void 0, (function*() {
                        const t = yield this._firefox.storage.local.get(e);
                        return t.hasOwnProperty(e) ? t[e] : null
                    })),
                    set: (e, t) => this._firefox.storage.local.set({
                        [e]: t
                    }),
                    getAll: () => this._firefox.storage.local.get(null),
                    remove: e => this._firefox.storage.local.remove(e),
                    removeAll: () => d(this, void 0, void 0, (function*() {
                        yield this._firefox.storage.local.clear()
                    }))
                }, this._migration = new u("firefoxLocalStorageToExtApi", e.windowLocalStorage, this.browserStorageLocal, ["version"])
            }
            ensureMigrationCompleted() {
                this._ensureMigrationCompletedCalled = !0;
                const e = o.a.createCompletionSource();
                return this._migrationCompleted = e.promise, this._migration.ensureMigrationCompleted().then(t => (e.resolve(!0), Promise.resolve(t)), t => (e.resolve(!1), Promise.reject(t)))
            }
            _getMigrationAwareMethod(t) {
                return (...n) => (Object(i.b)(!0 === this._ensureMigrationCompletedCalled, "supposed to run data migration before accessing prefs with web-extensions API"), this._migrationCompleted.then(r => (r ? this._migration.migrationAwareDestination : e.windowLocalStorage)[t](...n)))
            }
        }
    }(l || (l = {}))
}, function(e, t, n) {
    "use strict";
    var r = n(114);

    function o(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.__data__ = new r.a; ++t < n;) this.add(e[t])
    }
    o.prototype.add = o.prototype.push = function(e) {
        return this.__data__.set(e, "__lodash_hash_undefined__"), this
    }, o.prototype.has = function(e) {
        return this.__data__.has(e)
    }, t.a = o
}, , , , , , , , , , , function(e, t, n) {
    "use strict";
    var r = n(413),
        o = "object" == typeof self && self && self.Object === Object && self,
        i = (r.a || o || Function("return this")()).Symbol,
        a = Object.prototype,
        s = a.hasOwnProperty,
        c = a.toString,
        u = i ? i.toStringTag : void 0,
        l = Object.prototype.toString,
        d = i ? i.toStringTag : void 0,
        f = function(e) {
            return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : d && d in Object(e) ? function(e) {
                var t = s.call(e, u),
                    n = e[u];
                try {
                    e[u] = void 0;
                    var r = !0
                } catch (e) {}
                var o = c.call(e);
                return r && (t ? e[u] = n : delete e[u]), o
            }(e) : function(e) {
                return l.call(e)
            }(e)
        },
        h = function(e, t) {
            return function(n) {
                return e(t(n))
            }
        }(Object.getPrototypeOf, Object),
        g = Function.prototype,
        p = Object.prototype,
        m = g.toString,
        b = p.hasOwnProperty,
        v = m.call(Object),
        _ = function(e) {
            if (! function(e) {
                    return null != e && "object" == typeof e
                }(e) || "[object Object]" != f(e)) return !1;
            var t = h(e);
            if (null === t) return !0;
            var n = b.call(t, "constructor") && t.constructor;
            return "function" == typeof n && n instanceof n && m.call(n) == v
        },
        y = n(335),
        w = {
            INIT: "@@redux/INIT"
        };

    function O(e, t, n) {
        var r;
        if ("function" == typeof t && void 0 === n && (n = t, t = void 0), void 0 !== n) {
            if ("function" != typeof n) throw new Error("Expected the enhancer to be a function.");
            return n(O)(e, t)
        }
        if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");
        var o = e,
            i = t,
            a = [],
            s = a,
            c = !1;

        function u() {
            s === a && (s = a.slice())
        }

        function l() {
            return i
        }

        function d(e) {
            if ("function" != typeof e) throw new Error("Expected listener to be a function.");
            var t = !0;
            return u(), s.push(e),
                function() {
                    if (t) {
                        t = !1, u();
                        var n = s.indexOf(e);
                        s.splice(n, 1)
                    }
                }
        }

        function f(e) {
            if (!_(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
            if (void 0 === e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
            if (c) throw new Error("Reducers may not dispatch actions.");
            try {
                c = !0, i = o(i, e)
            } finally {
                c = !1
            }
            for (var t = a = s, n = 0; n < t.length; n++)(0, t[n])();
            return e
        }
        return f({
            type: w.INIT
        }), (r = {
            dispatch: f,
            subscribe: d,
            getState: l,
            replaceReducer: function(e) {
                if ("function" != typeof e) throw new Error("Expected the nextReducer to be a function.");
                o = e, f({
                    type: w.INIT
                })
            }
        })[y.a] = function() {
            var e, t = d;
            return (e = {
                subscribe: function(e) {
                    if ("object" != typeof e) throw new TypeError("Expected the observer to be an object.");

                    function n() {
                        e.next && e.next(l())
                    }
                    return n(), {
                        unsubscribe: t(n)
                    }
                }
            })[y.a] = function() {
                return this
            }, e
        }, r
    }

    function j(e, t) {
        var n = t && t.type;
        return "Given action " + (n && '"' + n.toString() + '"' || "an action") + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
    }

    function E(e) {
        for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
            var o = t[r];
            "function" == typeof e[o] && (n[o] = e[o])
        }
        var i = Object.keys(n),
            a = void 0;
        try {
            ! function(e) {
                Object.keys(e).forEach((function(t) {
                    var n = e[t];
                    if (void 0 === n(void 0, {
                            type: w.INIT
                        })) throw new Error('Reducer "' + t + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
                    if (void 0 === n(void 0, {
                            type: "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".")
                        })) throw new Error('Reducer "' + t + "\" returned undefined when probed with a random type. Don't try to handle " + w.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')
                }))
            }(n)
        } catch (e) {
            a = e
        }
        return function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments[1];
            if (a) throw a;
            for (var r = !1, o = {}, s = 0; s < i.length; s++) {
                var c = i[s],
                    u = n[c],
                    l = e[c],
                    d = u(l, t);
                if (void 0 === d) {
                    var f = j(c, t);
                    throw new Error(f)
                }
                o[c] = d, r = r || d !== l
            }
            return r ? o : e
        }
    }

    function k(e, t) {
        return function() {
            return t(e.apply(void 0, arguments))
        }
    }

    function S(e, t) {
        if ("function" == typeof e) return k(e, t);
        if ("object" != typeof e || null === e) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === e ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
        for (var n = Object.keys(e), r = {}, o = 0; o < n.length; o++) {
            var i = n[o],
                a = e[i];
            "function" == typeof a && (r[i] = k(a, t))
        }
        return r
    }

    function I() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return 0 === t.length ? function(e) {
            return e
        } : 1 === t.length ? t[0] : t.reduce((function(e, t) {
            return function() {
                return e(t.apply(void 0, arguments))
            }
        }))
    }
    var C = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    };

    function A() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return function(e) {
            return function(n, r, o) {
                var i, a = e(n, r, o),
                    s = a.dispatch,
                    c = {
                        getState: a.getState,
                        dispatch: function(e) {
                            return s(e)
                        }
                    };
                return i = t.map((function(e) {
                    return e(c)
                })), s = I.apply(void 0, i)(a.dispatch), C({}, a, {
                    dispatch: s
                })
            }
        }
    }
    n.d(t, "d", (function() {
        return O
    })), n.d(t, "c", (function() {
        return E
    })), n.d(t, "b", (function() {
        return S
    })), n.d(t, "a", (function() {
        return A
    }))
}, , , function(e, t, n) {
    "use strict";
    var r = n(224),
        o = n(77),
        i = function(e, t) {
            return function(t, n) {
                if (null == t) return t;
                if (!Object(o.a)(t)) return e(t, n);
                for (var r = t.length, i = -1, a = Object(t); ++i < r && !1 !== n(a[i], i, a););
                return t
            }
        }(r.a);
    t.a = i
}, , , , function(e, t, n) {
    "use strict";
    n.d(t, "c", (function() {
        return m
    })), n.d(t, "b", (function() {
        return b
    })), n.d(t, "a", (function() {
        return v
    })), n.d(t, "d", (function() {
        return _
    }));
    var r = n(17),
        o = n(427),
        i = n(22),
        a = n(10),
        s = n(16),
        c = n(12),
        u = n(350),
        l = n(74),
        d = n(31),
        f = n(239),
        h = function(e, t, n, r) {
            return new(n || (n = Promise))((function(o, i) {
                function a(e) {
                    try {
                        c(r.next(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function s(e) {
                    try {
                        c(r.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                        e(t)
                    }))).then(a, s)
                }
                c((r = r.apply(e, t || [])).next())
            }))
        };
    const g = c.a.create("lib.request"),
        p = 1e4;

    function m() {
        i.on("fetch", (e, t) => {
            v(e).then(t, e => t({
                error: e.message
            }))
        })
    }

    function b(e, t = {}) {
        return h(this, void 0, void 0, (function*() {
            if (t.url = e, function(e) {
                    if (e.data && (e.query || "post" !== e.method) && (e.url += "?" + _(e.data)), e.data && "post" === e.method && !e.query && !e.body) {
                        try {
                            e.body = JSON.stringify(e.data)
                        } catch (t) {
                            e.body = {}, g.warn("", t)
                        }
                        e.headers = e.headers || {}, e.headers["Content-Type"] = e.headers["Content-Type"] || "application/json", delete e.data
                    }
                    e.credentials = "include"
                }(t), Object(a.i)() || Object(a.n)()) return v(t);
            const n = yield i.promiseBackground("fetch", t);
            if (Object(d.a)(n) && Object(f.a)(n, "error")) throw new Error(Object(f.a)(n, "error"));
            return n
        }))
    }

    function v(e) {
        return h(this, void 0, void 0, (function*() {
            const t = yield function(e) {
                return h(this, void 0, void 0, (function*() {
                    const t = Object(l.a)(),
                        n = new o.a(t),
                        i = yield n.getCSRFToken(!!e.csrfMayBeEmpty), a = yield function() {
                            return h(this, void 0, void 0, (function*() {
                                try {
                                    const e = Object(l.a)().managedStorage;
                                    if (void 0 === e) return;
                                    const t = yield e.get("RestrictOrganizationId");
                                    return t && `sso-id ${t}`
                                } catch (e) {
                                    return void g.error("Fail to get RestrictOrganizationId from managedStore")
                                }
                            }))
                        }();
                    return function(e, t, n) {
                        return h(this, void 0, void 0, (function*() {
                            e.headers = e.headers || {};
                            try {
                                const t = yield Object(u.a)();
                                t && (e.headers["X-Container-Id"] = t), n && (e.headers["Grammarly-Auth-Policy"] = n), e.headers["X-Client-Version"] = `${r.a().buildInfo.version}`, e.headers["X-Client-Type"] = `extension-${r.a().bundleInfo.browser}`
                            } catch (e) {
                                g.error("Error by setting request headers")
                            }
                            return t && (e.headers["X-CSRF-Token"] = t), e
                        }))
                    }(e, i, a)
                }))
            }(e), {
                url: n
            } = t;
            return delete t.url, n ? Promise.race([window.fetch(n, t).then((function(e) {
                return e.ok ? e[t.isText ? "text" : "json"]() : e.text().then(t => {
                    throw {
                        name: "RequestError",
                        body: t,
                        statusCode: e.status,
                        message: e.statusText
                    }
                })
            })).then(e => {
                if ("string" != typeof e && e && e.error) throw new Error(e.error);
                return e
            }), Object(s.n)(t.timeout || p).then(() => {
                throw new Error(`Fetch request to ${n} rejected by timeout`)
            })]) : Promise.reject(new Error("Url is not defined in fetch request"))
        }))
    }

    function _(e) {
        let t = "";
        for (const n in e)
            if (Array.isArray(e[n])) {
                if (e[n].length) {
                    const r = e[n].map(e => `${n}=${e}`).join("&");
                    t += `${t.length?"&":""}${r}`
                }
            } else t += `${t.length?"&":""}${n}=${encodeURIComponent(e[n])}`;
        return t
    }
}, , , , function(e, t, n) {
    "use strict";
    var r = n(38),
        o = n(16),
        i = n(14),
        a = n(72),
        s = n(4),
        c = n(272),
        u = n(12);
    class l {
        constructor() {
            this._log = u.a.create("extension-api.alarms.stub"), this._warning = "Method is not implemented"
        }
        create(e, t) {
            return this._log.warn(this._warning), {
                dispose: s.l
            }
        }
    }
    class d extends l {
        create(e, t) {
            let n = null;
            const r = setTimeout(() => {
                t.period && (n = setInterval(e, t.period)), e()
            }, t.delay);
            return {
                dispose: () => {
                    clearTimeout(r), null !== n && clearInterval(n)
                }
            }
        }
    }

    function f(e, t) {
        chrome.runtime.lastError ? t(chrome.runtime.lastError) : e()
    }
    class h {
        constructor() {
            this._log = u.a.create("extension-api.managed-storage.validator")
        }
        validate(e, t) {
            switch (e) {
                case "RestrictOrganizationId":
                    return "string" == typeof t && t.length > 0 && /^[a-z0-9_-]+$/i.test(t);
                default:
                    return this._log.warn(`Unknown key: ${e}`), !1
            }
        }
    }
    class g {
        constructor() {
            this._log = u.a.create("extension-api.managed-storage.chrome"), this._validator = new h
        }
        get(e) {
            return new Promise((t, n) => {
                chrome.storage.managed.get(e, r => {
                    f(() => {
                        const n = r[e];
                        void 0 === n || this._validator.validate(e, n) ? t(n) : (this._log.warn(`Invalid value for "${e}": ${JSON.stringify(r[e])}`), t(void 0))
                    }, t => {
                        this._log.error(`Could not get "${e}"`, t), n(t)
                    })
                })
            })
        }
    }
    var p = n(190),
        m = n(199);
    class b {
        constructor() {
            this.kind = "web-extension"
        }
        open(e, t) {
            return a.a.create((n, r) => {
                chrome.tabs.create({
                    url: e,
                    active: t
                }, e => {
                    f(() => n(e), r)
                })
            })
        }
        updateCurrent(e) {
            return a.a.create((t, n) => {
                chrome.tabs.update({
                    url: e
                }, e => {
                    f(() => t(e), n)
                })
            })
        }
        getActiveTab() {
            return a.a.create((e, t) => {
                const n = chrome.tabs;
                n.query({
                    active: !0,
                    lastFocusedWindow: !0
                }, r => {
                    f(() => {
                        r && r.length ? e(r[0]) : n.query({
                            active: !0
                        }, n => {
                            f(() => {
                                e(n[0])
                            }, t)
                        })
                    }, t)
                })
            })
        }
        getAllTabs() {
            return a.a.create((e, t) => chrome.tabs.query({}, n => f(() => e(n), t)))
        }
        getActiveTabUrl() {
            return a.a.create((e, t) => this.getActiveTab().then(n => f(() => e(n && n.url), t)))
        }
        onActiveTabChange(e, t) {
            const n = n => {
                f(() => {
                    n && e(n)
                }, t)
            };
            chrome.tabs.onActivated.addListener(e => chrome.tabs.get(e.tabId, e => n(e))), chrome.tabs.onUpdated.addListener((e, t) => {
                this.getActiveTab().then(r => {
                    r && r.id === e && (t.url || t.favIconUrl || "complete" === t.status) && chrome.tabs.get(e, e => n(e))
                })
            }), chrome.windows.onFocusChanged.addListener(e => chrome.tabs.query({
                active: !0,
                windowId: e,
                lastFocusedWindow: !0
            }, e => n(e[0]))), this.getActiveTab().then(e => n(e))
        }
        tabUrlChange() {
            return new i.a(e => {
                const t = (t, n, r) => {
                    "complete" === n.status && e.next({
                        id: t,
                        url: r.url
                    })
                };
                return chrome.tabs.onUpdated.addListener(t), () => chrome.tabs.onUpdated.removeListener(t)
            })
        }
        reload(e) {
            return a.a.create((t, n) => {
                const r = () => f(() => t(), n);
                e ? chrome.tabs.reload(e, {}, r) : chrome.tabs.reload(r)
            })
        }
    }
    var v = n(17);
    const _ = () => fetch(v.a().appConfig.url.pageConfigUrl, {
        credentials: "include"
    }).then(e => e.ok ? e.json() : e.text().then(t => {
        throw {
            name: "RequestError",
            body: t,
            statusCode: e.status,
            message: e.statusText
        }
    })).then(e => {
        if ("string" != typeof e && e && e.error) throw new Error(e.error);
        return e
    });
    var y = n(291);
    n.d(t, "a", (function() {
        return E
    }));
    class w {
        constructor(e) {
            this.port = chrome.runtime.connect({
                name: e
            })
        }
        onMessage(e) {
            this.port.onMessage.addListener(e)
        }
        onDisconnect(e) {
            this.port.onDisconnect.addListener(e)
        }
        postMessage(e) {
            this.port.postMessage(e)
        }
    }
    class O {
        constructor(e) {
            this._port = e, this.sender = {};
            const {
                sender: t,
                name: n
            } = e;
            this.name = n, t && (this.sender.url = t.url, t.tab && t.tab.url && t.tab.id && (this.sender.tab = {
                url: t.tab.url,
                id: t.tab.id
            }))
        }
        onMessage(e) {
            this._port.onMessage.addListener(e)
        }
        onDisconnect(e) {
            this._port.onDisconnect.addListener(e)
        }
        postMessage(e) {
            this._port.postMessage(e)
        }
    }
    class j {
        constructor(e) {
            this.alarms = new d, this.managedStorage = new g, this.tabs = new b, this.notification = {
                kind: "web-extension",
                create: e => a.a.create((t, n) => {
                    const r = chrome.notifications,
                        a = Object(o.r)();
                    r.create(a, Object.assign({
                        type: "basic"
                    }, e), () => {
                        f(() => {
                            const e = new i.a(e => {
                                    const t = t => t === a && e.next(t);
                                    return r.onClicked.addListener(t), () => r.onClicked.removeListener(t)
                                }),
                                n = new i.a(e => {
                                    const t = (t, n) => t === a && e.next({
                                        id: t,
                                        buttonIndex: n
                                    });
                                    return r.onButtonClicked.addListener(t), () => r.onButtonClicked.removeListener(t)
                                }),
                                o = new i.a(e => {
                                    const t = (t, n) => t === a && e.next({
                                        id: t,
                                        byUser: n
                                    });
                                    return r.onClosed.addListener(t), () => r.onClosed.removeListener(t)
                                });
                            t({
                                id: a,
                                click: e,
                                buttonClick: n,
                                close: o
                            })
                        }, n)
                    })
                }),
                clear: e => a.a.create((t, n) => {
                    chrome.notifications.clear(e, e => {
                        f(() => t(e), n)
                    })
                })
            }, this.cookies = {
                kind: "web-extension",
                get: e => a.a.create((t, n) => chrome.cookies.get(e, e => f(() => t(e), n))),
                remove: e => new Promise((t, n) => chrome.cookies.remove(e, () => f(() => t(null), n))),
                getAll: e => a.a.create((t, n) => chrome.cookies.getAll(e, e => f(() => t(e), n))),
                set: e => a.a.create((t, n) => chrome.cookies.set(e, e => f(() => t(e), n))),
                watch(e, t) {
                    chrome.cookies.onChanged.addListener(n => {
                        const {
                            cookie: r,
                            cause: o
                        } = n;
                        !r || !r.name || e.path && e.path !== r.path || e.name !== r.name || e.domain && -1 === r.domain.indexOf(e.domain) || ("explicit" === o && t(r), "expired_overwrite" === o && t())
                    })
                }
            }, this.preferences = y.a.windowLocalStorage, this.button = {
                kind: "web-extension",
                setBadge(e) {
                    chrome.browserAction.setBadgeText({
                        text: e
                    })
                },
                setIconByName(e) {
                    const t = e ? "-" + e : "";
                    chrome.browserAction.setIcon({
                        path: {
                            16: `./src/icon/icon16${t}.png`,
                            32: `./src/icon/icon32${t}.png`
                        }
                    })
                },
                setBadgeBackgroundColor(e) {
                    chrome.browserAction.setBadgeBackgroundColor({
                        color: e
                    })
                }
            }, this.management = {
                uninstallSelf() {
                    chrome.management.uninstallSelf()
                }
            }, this._baseUrl = Object(s.p)(() => chrome.extension.getURL(""), e => null), this.fetchBlacklistConfig = () => _(), this.getUrl = e => this._baseUrl ? this._baseUrl + e : chrome.extension.getURL(e), this.openUrl = e => this.tabs.open(e, !0), this.openPopupSubscriptionDialog = e => this.openUrl(Object(r.p)(e.utmSource, e.utmCampaign)), this.openSubscriptionDialog = e => Object(c.b)(e), this.isExtensionUrl = (e, t) => this.getUrl(e) === t, this.reload = () => chrome.runtime.reload(), this.message = e ? new p.a(e => chrome.runtime.onConnect.addListener(t => e(new O(t))), this.tabs.getActiveTab.bind(this.tabs), this.tabs.getAllTabs.bind(this.tabs)) : new m.a(e => new w(e))
        }
    }

    function E(e) {
        return new j(e)
    }
}, function(e, t, n) {
    "use strict";
    var r = n(108),
        o = n(169),
        i = n(84),
        a = function(e, t, n) {
            (void 0 === n || Object(i.a)(e[t], n)) && (void 0 !== n || t in e) || Object(o.a)(e, t, n)
        },
        s = n(213),
        c = n(348),
        u = n(152),
        l = function(e, t) {
            var n = t ? function(e) {
                var t = new e.constructor(e.byteLength);
                return new u.a(t).set(new u.a(e)), t
            }(e.buffer) : e.buffer;
            return new e.constructor(n, e.byteOffset, e.length)
        },
        d = n(211),
        f = n(157),
        h = n(128),
        g = function(e) {
            return "function" != typeof e.constructor || Object(h.a)(e) ? {} : Object(d.a)(Object(f.a)(e))
        },
        p = n(99),
        m = n(27),
        b = n(322),
        v = n(82),
        _ = n(86),
        y = n(31),
        w = n(52),
        O = n(46),
        j = Function.prototype,
        E = Object.prototype,
        k = j.toString,
        S = E.hasOwnProperty,
        I = k.call(Object),
        C = function(e) {
            if (!Object(O.a)(e) || "[object Object]" != Object(w.a)(e)) return !1;
            var t = Object(f.a)(e);
            if (null === t) return !0;
            var n = S.call(t, "constructor") && t.constructor;
            return "function" == typeof n && n instanceof n && k.call(n) == I
        },
        A = n(91),
        N = function(e, t) {
            if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t]
        },
        x = n(280),
        T = n(196),
        P = function(e, t, n, r, o, i, s) {
            var u = N(e, n),
                d = N(t, n),
                f = s.get(d);
            if (f) a(e, n, f);
            else {
                var h = i ? i(u, d, n + "", e, t, s) : void 0,
                    w = void 0 === h;
                if (w) {
                    var O = Object(m.a)(d),
                        j = !O && Object(v.a)(d),
                        E = !O && !j && Object(A.a)(d);
                    h = d, O || j || E ? Object(m.a)(u) ? h = u : Object(b.a)(u) ? h = function(e, t) {
                        var n = -1,
                            r = e.length;
                        for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
                        return t
                    }(u) : j ? (w = !1, h = Object(c.a)(d, !0)) : E ? (w = !1, h = l(d, !0)) : h = [] : C(d) || Object(p.a)(d) ? (h = u, Object(p.a)(u) ? h = function(e) {
                        return Object(x.a)(e, Object(T.a)(e))
                    }(u) : Object(y.a)(u) && !Object(_.a)(u) || (h = g(d))) : w = !1
                }
                w && (s.set(d, h), o(h, d, r, i, s), s.delete(d)), a(e, n, h)
            }
        },
        D = n(279),
        R = Object(D.a)((function(e, t, n) {
            ! function e(t, n, o, i, c) {
                t !== n && Object(s.a)(n, (function(s, u) {
                    if (c || (c = new r.a), Object(y.a)(s)) P(t, n, u, o, e, i, c);
                    else {
                        var l = i ? i(N(t, u), s, u + "", t, n, c) : void 0;
                        void 0 === l && (l = s), a(t, u, l)
                    }
                }), T.a)
            }(e, t, n)
        }));
    t.a = R
}, , , , , , , function(e, t, n) {
    "use strict";
    var r = n(77),
        o = n(46);
    t.a = function(e) {
        return Object(o.a)(e) && Object(r.a)(e)
    }
}, function(e, t, n) {
    "use strict";
    var r = n(117),
        o = function(e, t, n) {
            switch (n.length) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, n[0]);
                case 2:
                    return e.call(t, n[0], n[1]);
                case 3:
                    return e.call(t, n[0], n[1], n[2])
            }
            return e.apply(t, n)
        },
        i = Math.max,
        a = function(e) {
            return function() {
                return e
            }
        },
        s = n(171),
        c = s.a ? function(e, t) {
            return Object(s.a)(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: a(t),
                writable: !0
            })
        } : r.a,
        u = Date.now,
        l = function(e) {
            var t = 0,
                n = 0;
            return function() {
                var r = u(),
                    o = 16 - (r - n);
                if (n = r, o > 0) {
                    if (++t >= 800) return arguments[0]
                } else t = 0;
                return e.apply(void 0, arguments)
            }
        }(c);
    t.a = function(e, t) {
        return l(function(e, t, n) {
            return t = i(void 0 === t ? e.length - 1 : t, 0),
                function() {
                    for (var r = arguments, a = -1, s = i(r.length - t, 0), c = Array(s); ++a < s;) c[a] = r[t + a];
                    a = -1;
                    for (var u = Array(t + 1); ++a < t;) u[a] = r[a];
                    return u[t] = n(c), o(e, this, u)
                }
        }(e, t, r.a), e + "")
    }
}, function(e, t, n) {
    "use strict";
    var r = n(31),
        o = n(36),
        i = function() {
            return o.a.Date.now()
        },
        a = n(109),
        s = /^\s+|\s+$/g,
        c = /^[-+]0x[0-9a-f]+$/i,
        u = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        d = parseInt,
        f = function(e) {
            if ("number" == typeof e) return e;
            if (Object(a.a)(e)) return NaN;
            if (Object(r.a)(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = Object(r.a)(t) ? t + "" : t
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = e.replace(s, "");
            var n = u.test(e);
            return n || l.test(e) ? d(e.slice(2), n ? 2 : 8) : c.test(e) ? NaN : +e
        },
        h = Math.max,
        g = Math.min;
    t.a = function(e, t, n) {
        var o, a, s, c, u, l, d = 0,
            p = !1,
            m = !1,
            b = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function v(t) {
            var n = o,
                r = a;
            return o = a = void 0, d = t, c = e.apply(r, n)
        }

        function _(e) {
            var n = e - l;
            return void 0 === l || n >= t || n < 0 || m && e - d >= s
        }

        function y() {
            var e = i();
            if (_(e)) return w(e);
            u = setTimeout(y, function(e) {
                var n = t - (e - l);
                return m ? g(n, s - (e - d)) : n
            }(e))
        }

        function w(e) {
            return u = void 0, b && o ? v(e) : (o = a = void 0, c)
        }

        function O() {
            var e = i(),
                n = _(e);
            if (o = arguments, a = this, l = e, n) {
                if (void 0 === u) return function(e) {
                    return d = e, u = setTimeout(y, t), p ? v(e) : c
                }(l);
                if (m) return clearTimeout(u), u = setTimeout(y, t), v(l)
            }
            return void 0 === u && (u = setTimeout(y, t)), c
        }
        return t = f(t) || 0, Object(r.a)(n) && (p = !!n.leading, s = (m = "maxWait" in n) ? h(f(n.maxWait) || 0, t) : s, b = "trailing" in n ? !!n.trailing : b), O.cancel = function() {
            void 0 !== u && clearTimeout(u), d = 0, o = l = a = u = void 0
        }, O.flush = function() {
            return void 0 === u ? c : w(i())
        }, O
    }
}, , , function(e, t, n) {
    (function(e) {
        function n(e, t) {
            for (var n = 0, r = e.length - 1; r >= 0; r--) {
                var o = e[r];
                "." === o ? e.splice(r, 1) : ".." === o ? (e.splice(r, 1), n++) : n && (e.splice(r, 1), n--)
            }
            if (t)
                for (; n--; n) e.unshift("..");
            return e
        }

        function r(e, t) {
            if (e.filter) return e.filter(t);
            for (var n = [], r = 0; r < e.length; r++) t(e[r], r, e) && n.push(e[r]);
            return n
        }
        t.resolve = function() {
            for (var t = "", o = !1, i = arguments.length - 1; i >= -1 && !o; i--) {
                var a = i >= 0 ? arguments[i] : e.cwd();
                if ("string" != typeof a) throw new TypeError("Arguments to path.resolve must be strings");
                a && (t = a + "/" + t, o = "/" === a.charAt(0))
            }
            return (o ? "/" : "") + (t = n(r(t.split("/"), (function(e) {
                return !!e
            })), !o).join("/")) || "."
        }, t.normalize = function(e) {
            var i = t.isAbsolute(e),
                a = "/" === o(e, -1);
            return (e = n(r(e.split("/"), (function(e) {
                return !!e
            })), !i).join("/")) || i || (e = "."), e && a && (e += "/"), (i ? "/" : "") + e
        }, t.isAbsolute = function(e) {
            return "/" === e.charAt(0)
        }, t.join = function() {
            var e = Array.prototype.slice.call(arguments, 0);
            return t.normalize(r(e, (function(e, t) {
                if ("string" != typeof e) throw new TypeError("Arguments to path.join must be strings");
                return e
            })).join("/"))
        }, t.relative = function(e, n) {
            function r(e) {
                for (var t = 0; t < e.length && "" === e[t]; t++);
                for (var n = e.length - 1; n >= 0 && "" === e[n]; n--);
                return t > n ? [] : e.slice(t, n - t + 1)
            }
            e = t.resolve(e).substr(1), n = t.resolve(n).substr(1);
            for (var o = r(e.split("/")), i = r(n.split("/")), a = Math.min(o.length, i.length), s = a, c = 0; c < a; c++)
                if (o[c] !== i[c]) {
                    s = c;
                    break
                } var u = [];
            for (c = s; c < o.length; c++) u.push("..");
            return (u = u.concat(i.slice(s))).join("/")
        }, t.sep = "/", t.delimiter = ":", t.dirname = function(e) {
            if ("string" != typeof e && (e += ""), 0 === e.length) return ".";
            for (var t = e.charCodeAt(0), n = 47 === t, r = -1, o = !0, i = e.length - 1; i >= 1; --i)
                if (47 === (t = e.charCodeAt(i))) {
                    if (!o) {
                        r = i;
                        break
                    }
                } else o = !1;
            return -1 === r ? n ? "/" : "." : n && 1 === r ? "/" : e.slice(0, r)
        }, t.basename = function(e, t) {
            var n = function(e) {
                "string" != typeof e && (e += "");
                var t, n = 0,
                    r = -1,
                    o = !0;
                for (t = e.length - 1; t >= 0; --t)
                    if (47 === e.charCodeAt(t)) {
                        if (!o) {
                            n = t + 1;
                            break
                        }
                    } else -1 === r && (o = !1, r = t + 1);
                return -1 === r ? "" : e.slice(n, r)
            }(e);
            return t && n.substr(-1 * t.length) === t && (n = n.substr(0, n.length - t.length)), n
        }, t.extname = function(e) {
            "string" != typeof e && (e += "");
            for (var t = -1, n = 0, r = -1, o = !0, i = 0, a = e.length - 1; a >= 0; --a) {
                var s = e.charCodeAt(a);
                if (47 !== s) - 1 === r && (o = !1, r = a + 1), 46 === s ? -1 === t ? t = a : 1 !== i && (i = 1) : -1 !== t && (i = -1);
                else if (!o) {
                    n = a + 1;
                    break
                }
            }
            return -1 === t || -1 === r || 0 === i || 1 === i && t === r - 1 && t === n + 1 ? "" : e.slice(t, r)
        };
        var o = "b" === "ab".substr(-1) ? function(e, t, n) {
            return e.substr(t, n)
        } : function(e, t, n) {
            return t < 0 && (t = e.length + t), e.substr(t, n)
        }
    }).call(this, n(217))
}, , , , , , , , function(e, t, n) {
    "use strict";
    (function(e, r) {
        var o, i = n(412);
        o = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== e ? e : r;
        var a = Object(i.a)(o);
        t.a = a
    }).call(this, n(159), n(198)(e))
}, , , , , , , , , , , , function(e, t, n) {
    "use strict";
    var r = n(324),
        o = n(31);
    t.a = function(e, t, n) {
        var i = !0,
            a = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");
        return Object(o.a)(n) && (i = "leading" in n ? !!n.leading : i, a = "trailing" in n ? !!n.trailing : a), Object(r.a)(e, t, {
            leading: i,
            maxWait: t,
            trailing: a
        })
    }
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(36),
            o = "object" == typeof exports && exports && !exports.nodeType && exports,
            i = o && "object" == typeof e && e && !e.nodeType && e,
            a = i && i.exports === o ? r.a.Buffer : void 0,
            s = a ? a.allocUnsafe : void 0;
        t.a = function(e, t) {
            if (t) return e.slice();
            var n = e.length,
                r = s ? s(n) : new e.constructor(n);
            return e.copy(r), r
        }
    }).call(this, n(198)(e))
}, function(e, t, n) {
    "use strict";
    var r = n(17),
        o = n(3),
        i = n(156);

    function a(e) {
        return s.includes(e)
    }
    const s = new class {
        constructor(e) {
            function t(e) {
                return `Invalid pattern "${e}": "*" is allowed only at start and/or end position`
            }
            this._equal = new Set, this._prefix = [], this._suffix = [], this._infix = [];
            for (const n of e) {
                const e = n.indexOf("*");
                if (-1 === e) this._equal.add(n);
                else if (e === n.length - 1) this._prefix.push(n.substring(0, e));
                else {
                    if (0 !== e) throw new Error(t(n)); {
                        const e = n.indexOf("*", 1);
                        if (-1 === e) this._suffix.push(n.substring(1));
                        else {
                            if (e !== n.length - 1) throw new Error(t(n));
                            this._infix.push(n.substring(1, e))
                        }
                    }
                }
            }
        }
        includes(e) {
            return this._equal.has(e) || this._prefix.some(t => e.startsWith(t)) || this._suffix.some(t => e.endsWith(t)) || this._infix.some(t => e.includes(t))
        }
    }(["mail.google.com", "translate.google.*", "docs.google.com", "web.whatsapp.com", "facebook.com", "outlook.*", "linkedin.com", "zendesk.*", "youtube.com", "twitter.com", "messenger.com", "*.slack.*", "*canvas*", "*instructure*", "trello.com", "editor.wix.com", "quizlet.com", "mail.yahoo.com", "*.force.*", "keep.google.com", "vk.com", "fanyi.baidu.com", "app.bullhornstaffing.com", "app.qa-world.com", "calendar.google.com", "papago.naver.com", "wordcounter.net", "blogger.*", "wattpad.com", "wordpress.com", "amazon.*", "smallseotools.com", "create.kahoot.it", "apps.rackspace.com", "basecamp.com", "varsitytutors.com", "canva.com", "fanyi.youdao.com", "reverso.net", "message.alibaba.com", "*schoology*", "*.blackboard.*", "classroom.google.com", "*upwork*", "business.facebook.com", "medium.com", "mail.aol.com", "workhub.transcribeme.com", "github.com"]);
    var c = n(4),
        u = n(60),
        l = n(12);
    n.d(t, "a", (function() {
        return b
    }));
    const d = l.a.create("lib.tracking.telemetry"),
        f = .1,
        h = .05,
        g = .1,
        p = .01,
        m = .01;
    class b {
        constructor(e = c.l, t = c.l, n = c.l, s = c.l, l = !1, b = i.a.dummy, v = !1, _ = c.l, y = c.l, w = (e => p), O = "firefox" !== r.a().bundleInfo.browser) {
            this._sendFelog = e, this._sendFelogUsage = t, this._setUserId = n, this._setContainerId = s, this._sendUsageMetrics = l, this._perfMetrics = b, this._sendPerfMetrics = v, this._sendFelogEvent = _, this._sendFelogCrashLogs = y, this._getUsageMetricsRate = w, this._shouldSendEvents = O, this._perfMetricsThrottleTimeMs = 6e4, this._prepareDataString = (e, t) => {
                let n;
                try {
                    n = JSON.stringify(t)
                } catch (t) {
                    n = `stringify fail: '${t}', '${t&&t.message}'`, d.warn(n, e)
                }
                return n
            }, this._sendUsageMetricsSamplingRatio = this._getUsageMetricsRate(r.a().bundleInfo.browser), this.restoredBgConnection = e => {
                this._send("cs.connection.bg.restored", o.a.INFO, {
                    timeWithoutConnection: e
                })
            }, this.initWithoutBgConnection = () => {
                this._send("cs.connection.bg.disconnected", o.a.INFO)
            }, this.fetchDefinitionsFail = () => {
                this._send("cs.connection.api.definition.failed", o.a.WARN)
            }, this.infinityCheckResetFail = e => {
                this._send("cs.connection.infiniteCheck.failed", o.a.ERROR, {
                    delay: e
                })
            }, this.tooLongPageConfigInit = e => {
                this._send("cs.pageConfig.init.exceeded", o.a.WARN, {
                    initTime: e
                })
            }, this.tooLongUserUpdateTime = e => {
                this._send("bg.state.user.update.exceeded", o.a.WARN, {
                    updateTime: e
                })
            }, this.lostBgPageConnection = () => {
                this._send("cs.gbutton.bgСonnection.lost", o.a.INFO)
            }, this.restoreBgPageConnection = e => {
                this._send("cs.gbutton.bgСonnection.restored", o.a.INFO, {
                    time: e
                })
            }, this.badCursorPosition = () => {
                this._send("cs.editor.badCursorPosition", o.a.INFO)
            }, this.cursorJump = () => {
                this._send("cs.editor.cursorJump", o.a.WARN)
            }, this.signinOpen = () => {
                this._send("cs.signin.open", o.a.INFO)
            }, this.signinClose = e => {
                this._send("cs.signin.close", o.a.INFO, {
                    openTime: e
                })
            }, this.tabReloadClick = () => {
                this._send("cs.gbutton.reload.click", o.a.WARN)
            }, this.popupLoadError = (e, t) => {
                this._send("cs.popup.load.error", o.a.ERROR, {
                    message: e,
                    name: t
                })
            }, this.loginNoBgPageConnection = e => {
                this._send("debug.cs.connection.signin.bg.timeout", o.a.INFO, {
                    message: e
                })
            }, this.dynamicConfigLoadFromPrefsError = e => {
                this._sendSampled(m, "bg.dynamicConfig.prefs.load.error", o.a.ERROR, {
                    message: e
                })
            }, this.dynamicConfigSaveToPrefsError = e => {
                this._sendSampled(m, "bg.dynamicConfig.prefs.save.error", o.a.ERROR, {
                    message: e
                })
            }, this.dynamicConfigLoadFromServerError = e => {
                this._sendSampled(m, "bg.dynamicConfig.server.load.error", o.a.ERROR, {
                    message: e
                })
            }, this.pageConfigCDNError = e => {
                this._send("cs.pageConfig.cdn.error", o.a.ERROR, {
                    message: e
                })
            }, this.pageConfigLocalStorageError = (e, t) => {
                this._send("cs.pageConfig.localStorage.error", o.a.INFO, {
                    message: e,
                    name: t
                })
            }, this.pageConfigUpdated = (e, t) => {
                this._send("cs.pageConfig.updated", o.a.INFO, {
                    oldVersion: e,
                    newVersion: t
                })
            }, this.settingsPopupTimeout = () => {
                this._send("settings.popup.init.timeout", o.a.WARN)
            }, this.settingsUsupportedShow = e => {
                this._send("settings.popup.state.unsupported.show", o.a.INFO, {
                    popupType: e
                })
            }, this.socketBgError = () => {
                this._send("bg.socket.error", o.a.WARN)
            }, this.capiNotAuthorizedLoop = (e, t) => {
                this._send("debug.socket.notAuthorizedLoop", o.a.INFO, {
                    authDegradation: e,
                    cookiesDisabled: t
                })
            }, this.socketDisabledCookie = () => {
                this._send("debug.socket.disabledCookies", o.a.INFO)
            }, this.socketBgRestored = e => {
                this._send("debug.bg.socket.restored", o.a.INFO, {
                    tryCount: e
                })
            }, this.socketBgReconnectFail = (e, t) => {
                this._send("bg.socket.reconnect.fail", o.a.WARN, {
                    token: e,
                    tryCount: t
                })
            }, this.socketCsError = () => {
                this._send("cs.socket.error", o.a.WARN)
            }, this.soketCsErrorMsg = e => {
                this._send("cs.socket.errorMsg", o.a.WARN, {
                    message: e
                })
            }, this.gnarClientInitFail = e => {
                this._send("gnar.bg.tracking.gnar.init.fail", o.a.WARN, {
                    message: e
                })
            }, this.bgTrackingInitFail = () => {
                this._send("debug.tracking.init.fail", o.a.INFO)
            }, this.gnarSpecUndefinedInit = () => {
                this._send("debug.tracking.gnar.spec.init.fail", o.a.INFO)
            }, this.userUpgradeClick = e => {
                this._send("cs.ui.action.upgradeClick", o.a.INFO, {
                    placement: e
                })
            }, this.gButtonClick = () => {
                this._send("cs.ui.gbutton.click", o.a.INFO)
            }, this.checkingToggledInField = e => {
                this._send("cs.ui.gbutton.toggleInField", o.a.INFO, {
                    enabled: e
                })
            }, this.unexpectedAnonymous = e => {
                this._send("debug.bg.session.unexpectedAnonymous", o.a.INFO, e)
            }, this.getDapiPropError = e => {
                this._send("bg.connection.dapi.getProp.error", o.a.WARN, {
                    statusCode: e
                })
            }, this.setDapiPropError = e => {
                this._send("bg.connection.dapi.setProp.error", o.a.WARN, {
                    statusCode: e
                })
            }, this.toggleExtensionDefs = e => {
                this._send("bg.settings.definitions.toggle", o.a.INFO, {
                    enabled: e
                })
            }, this.toggleExtension = (e, t) => {
                this._send("bg.settings.extension.toggle", o.a.INFO, {
                    enabled: e,
                    placement: t
                })
            }, this.disableUntilNextVisit = () => {
                this._send("cs.gbutton.disableUntilNextVisit", o.a.INFO)
            }, this.disableButtonClick = () => {
                this._send("cs.gbutton.disableButtonClick", o.a.INFO)
            }, this.cookieOverflow = (e, t) => {
                this._send("debug.bg.state.cookie.overflow", o.a.INFO, {
                    size: e,
                    biggestCookie: t
                })
            }, this.externalChangePlan = () => {
                this._send("bg.api.external.changePlan", o.a.INFO)
            }, this.externalChangeDialect = () => {
                this._send("bg.api.external.changeDialect", o.a.INFO)
            }, this.externalChangeUser = () => {
                this._send("bg.api.external.changeUsed", o.a.INFO)
            }, this.externalLogout = () => {
                this._send("bg.api.external.logout", o.a.INFO)
            }, this.bgPageStartFail = (e, t) => {
                this._send("bg.start.fail", o.a.ERROR, {
                    message: e,
                    stack: t
                })
            }, this.acceptDataControl = () => {
                this._send("bg.dataControl.accepted", o.a.INFO)
            }, this.bgPageInitTimeout = e => {
                this._send("bg.state.start.timeout", o.a.WARN, {
                    initTime: e
                })
            }, this.bgPageInitFail = e => {
                this._send("bg.state.init.fail", o.a.ERROR, {
                    initAttempts: e
                })
            }, this.extensionUpdated = (e, t) => {
                this._send("bg.state.updated", o.a.INFO, {
                    currentVersion: e,
                    previousVersion: t
                })
            }, this.extensionUpdateFail = e => {
                this._send("bg.state.update.fail", o.a.INFO, {
                    previousVersion: e
                })
            }, this.cannotGetInstallSource = () => {
                this._send("bg.getSource.fail", o.a.WARN)
            }, this.extensionInstall = e => {
                this._send("bg.state.install", o.a.INFO, {
                    source: e
                })
            }, this.chromeForcedToUpdate = e => {
                this._send("bg.chrome.forcedToUpdate", o.a.INFO, {
                    newVersion: e
                })
            }, this.chromeContentScriptLoadError = (e, t) => {
                this._send("bg.chrome.cs.load.error", o.a.WARN, {
                    message: e,
                    type: t
                })
            }, this.reloadNotificationShow = () => {
                this._send("bg.ui.notification.tabsReload.show", o.a.WARN)
            }, this.reloadNotificationClick = () => {
                this._send("bg.ui.notification.tabsReload.click", o.a.INFO)
            }, this.fetchUserFail = (e, t, n) => {
                this._send("bg.user.fetch.fail", o.a.WARN, {
                    body: t,
                    statusCode: n,
                    reason: e
                })
            }, this.fetchMimicFail = (e, t) => {
                this._send("bg.user.mimic.fail", o.a.WARN, {
                    body: e,
                    statusCode: t
                })
            }, this.fetchStatsFail = (e, t) => {
                this._send("bg.user.dapi.prop.stats.fail", o.a.WARN, {
                    body: e,
                    statusCode: t
                })
            }, this.fetchCookieFail = () => {
                this._send("bg.cookie.fail", o.a.WARN)
            }, this.fetchSettingsFail = (e, t) => {
                this._send("bg.user.settings.fail", o.a.WARN, {
                    body: e,
                    statusCode: t
                })
            }, this.frequentCookieChanges = e => {
                this._send("debug.cookie.onChange.error", o.a.INFO, {
                    canceled: e
                })
            }, this.initializePropFromDapi = e => {
                this._send("bg.state.dapi.prop.initialize", o.a.INFO, {
                    name: e
                })
            }, this.onboardingPopupShow = () => {
                this._send("cs.onboarding.popup.show", o.a.INFO)
            }, this.onboardingPopupCancel = () => {
                this._send("cs.onboarding.popup.cancel", o.a.INFO)
            }, this.onboardingTutorialShow = () => {
                this._send("cs.onboarding.tutorial.show", o.a.INFO)
            }, this.onboardingVideoLoaded = () => {
                this._send("cs.onboarding.tutorial.video.loaded", o.a.INFO)
            }, this.incognitoInit = () => {
                this._send("bg.incognito.init", o.a.INFO)
            }, this.disabledCookiesInit = () => {
                this._send("bg.cookie.disabled", o.a.INFO)
            }, this.loginReminderPopupShow = () => {
                this._send("cs.gbutton.popup.loginReminder.show", o.a.INFO)
            }, this.delightfulMessagePopupShow = () => {
                this._send("cs.gbutton.popup.delightfulMessage.show", o.a.INFO)
            }, this.loginReminderBadgeShow = () => {
                this._send("bg.state.user.loginReminder.enable", o.a.INFO)
            }, this.proxyInit = () => {
                this._sendSampled(h, "proxy.init", o.a.INFO)
            }, this.proxyPortDisconnected = (e, t) => {
                this._sendSampled(h, "proxy.disconnect", o.a.INFO, {
                    port: e,
                    error: t
                })
            }, this.unhandledBgPageException = e => {
                this._sendSampled(g, "bg.unhandledException", o.a.ERROR, {
                    message: e.error ? e.error.message : e.message
                })
            }, this.unhandledBgPageRejection = e => {
                this._sendSampled(g, "bg.unhandledRejection", o.a.ERROR, {
                    message: null != e.reason ? "string" == typeof e.reason ? e.reason : e.reason.message : void 0
                })
            }, this.storageMigrationSucceeded = () => {
                this._send("bg.storageMigration.success", o.a.INFO, {})
            }, this.storageMigrationFailed = e => {
                this._send("bg.storageMigration.failure", o.a.ERROR, {
                    message: e && e.message
                })
            }, this.cardShowAction = () => {
                this._sendSampled(f, "cs.editor.card.show", o.a.INFO)
            }, this.cardHideAction = () => {
                this._sendSampled(f, "cs.editor.card.hide", o.a.INFO)
            }, this.cardReplacementAction = () => {
                this._sendSampled(f, "cs.editor.card.replacement", o.a.INFO)
            }, this.cardAddToDictAction = () => {
                this._sendSampled(f, "cs.editor.card.addToDict", o.a.INFO)
            }, this.cardIgnoreAction = () => {
                this._sendSampled(f, "cs.editor.card.ignore", o.a.INFO)
            }, this.synonymCardShowAction = e => {
                this._sendSampled(f, "cs.editor.synonym.show", o.a.INFO, {
                    notFoundCard: e
                })
            }, this.synonymCardHideAction = e => {
                this._sendSampled(f, "cs.editor.synonym.hide", o.a.INFO, {
                    notFoundCard: e
                })
            }, this.synonymReplacementAction = () => {
                this._sendSampled(f, "cs.editor.synonym.replacement", o.a.INFO)
            }, this.dictCardShowAction = () => {
                this._sendSampled(f, "cs.editor.dict.show", o.a.INFO)
            }, this.dictCardHideAction = () => {
                this._sendSampled(f, "cs.editor.dict.hide", o.a.INFO)
            }, this.errorBySendEmailData = () => {
                this._send("cs.editor.emailData.send.error", o.a.WARN)
            }, this.couldNotParseTransform = (e, t) => {
                this._send("cs.cards.transforms.parse.error", o.a.WARN, {
                    transformHTML: e,
                    fallbackParseSuccessful: t
                })
            }, this.disabledTabLoad = e => {
                this._sendUsage("usage.loadOnDisabledTab", o.a.INFO, {
                    accountType: e
                })
            }, this.disabledTabByUserLoad = e => {
                this._sendUsage("usage.loadOnDisabledByUserTab", o.a.INFO, {
                    accountType: e
                })
            }, this.initSession = (e, t, n, r, i) => {
                this._sendUsage("usage.session.init", o.a.INFO, {
                    isTopSite: a(e),
                    accountType: t,
                    fieldType: n,
                    fieldSupported: r,
                    integrationType: i
                })
            }, this.cardFirstInteraction = (e, t) => {
                this._sendUsage("usage.card.interaction", o.a.INFO, {
                    accountType: e,
                    fieldType: t
                })
            }, this.gnar = {
                nextPingDateWriteError: e => this._send("bg.gnarTracker.nextPingDateWriteError", o.a.ERROR, {
                    error: e
                }),
                nextPingDateReadError: e => this._send("bg.gnarTracker.nextPingDateReadError", o.a.ERROR, {
                    error: e
                }),
                sendError: e => this._send("bg.gnarTracker.sendError", o.a.ERROR, {
                    error: e
                }),
                trackBeforeSetUser: e => this._send("bg.gnarTracker.trackBeforeSetUser", o.a.INFO, {
                    millisSinceInit: e
                }),
                errorSetUser: e => this._send("bg.gnarTracker.errorSetUser", o.a.ERROR, {
                    error: e
                })
            }, this.fluidGdocs = {
                sidebarFail: Object(c.h)(e => this._send("cs.gdocs.fluid.getSidebarFail", o.a.WARN, {
                    type: e
                })),
                getFullTextFailed: Object(c.h)(e => this._send("cs.gdocs.fluid.getFullTextFailed", o.a.INFO, {
                    type: e
                })),
                pageToTextMapFail: Object(c.h)(() => this._send("cs.gdocs.fluid.pageToTextMapFail", o.a.INFO)),
                nestedTablesAppearance: Object(c.h)(() => this._send("cs.gdocs.fluid.nestedTablesAppearance", o.a.INFO)),
                mapTableIssue: Object(c.h)(e => this._send("cs.gdocs.fluid.mapTableIssue", o.a.INFO, {
                    type: e
                })),
                treeStructureFailure: Object(c.h)(() => this._send("cs.gdocs.fluid.treeStructureFailure", o.a.INFO)),
                textFragmentMapFail: Object(c.h)(() => this._send("cs.gdocs.fluid.textFragmentMapFail", o.a.INFO)),
                init: () => this._send("cs.gdocs.fluid.init", o.a.INFO),
                getTextPerf: this._createPerfLogger("cs.gdocs.fluid.perf.getText", 30),
                buildTextMapPerf: this._createPerfLogger("cs.gdocs.fluid.perf.textMap", 30)
            }, this.gdocs = {
                initialGdocsDisable: () => this._send("cs.gdocs.initialDisableSet", o.a.INFO),
                getInitialDocumentStateFailed: e => this._send("cs.gdocs.state.getInitialFailed", o.a.INFO, {
                    message: e
                }),
                localStateSwappedWithRemote: () => this._send("cs.gdocs.state.localStateSwapped", o.a.INFO),
                revisionSwitched: () => this._send("cs.gdocs.revisionsSwitched", o.a.INFO),
                noMatchForUnderline: () => this._send("cs.gdocs.orphantUnderline.noMatchFoundByUnderine", o.a.INFO),
                noMatchFoundForId: () => this._send("cs.gdocs.orphantUnderline.noMatchFoundById", o.a.INFO),
                replacementFailed: () => this._send("cs.gdocs.replacementFailed", o.a.INFO),
                editingDisabledNotification: e => this._send("cs.gdocs.notifications.editingDisabledBloodyBar", o.a.INFO, e && Object.assign({
                    hashedDocId: Object(u.d)()
                }, e)),
                somethingWentWrongNotification: e => this._send("cs.gdocs.notifications.somethingWentWrongButterBar", o.a.INFO, e && Object.assign({
                    hashedDocId: Object(u.d)()
                }, e)),
                misplacedUnderlines: ({
                    collaborators: e,
                    count: t
                }) => this._send("cs.gdocs.notifications.misplacedUnderlines", o.a.INFO, {
                    collaborators: e,
                    count: t,
                    hashedDocId: Object(u.d)()
                }),
                documentOpen: ({
                    grammarlyEnabled: e
                }) => {
                    this._send("cs.gdocs.notifications.documentOpen", o.a.INFO, {
                        hashedDocId: Object(u.d)(),
                        grammarlyEnabled: e
                    })
                },
                injectedSciptRollback: e => this._send("cs.gdocs.injectedScriptsRollback", o.a.INFO, {
                    reason: e
                }),
                emptyResponseCrash: () => this._send("cs.gdocs.emptyResponseCrash", o.a.INFO)
            }, this.performance = {
                processInput: this._createPerfLogger("cs.fluid.processInput", 100),
                processAlerts: this._createPerfLogger("cs.fluid.processAlerts", 10),
                csInitialized: (e, t, n) => {
                    this._sendPerfMetrics && this._sendEvent({
                        logger: "cs.initialized",
                        level: o.a.INFO,
                        ex_csInitPerf: {
                            loadTime: e,
                            initTime: t,
                            error: n
                        }
                    })
                }
            }, this.autocorrect = {
                responseTime: this._createPerfLogger("cs.autocorrect.responseTime", 10),
                predictTime: this._createPerfLogger("cs.autocorrect.predictTime", 10)
            }, this.capiClient = {
                responseTime: this._createPerfLogger("cs.capi.responseTime", 10)
            }, this.oauthExchangeError = e => {
                this._send("bg.oauth.exchange.error", o.a.ERROR, {
                    message: e
                })
            }
        }
        _send(e, t, n) {
            if (!1 === this._shouldSendEvents) return;
            const r = this._prepareDataString(e, n);
            try {
                this._sendFelog(e, void 0, t, null != n ? {
                    json: r
                } : void 0)
            } catch (t) {
                d.warn(`Failed to send felog for ${e}: '${t&&t.message}'`, t)
            }
        }
        _sendEvent(e) {
            if (!1 !== this._shouldSendEvents) try {
                this._sendFelogEvent(e)
            } catch (t) {
                d.warn(`Failed to send felog for ${JSON.stringify(e)}`, t)
            }
        }
        _sendUsage(e, t, n) {
            if (this._sendUsageMetrics && this._sendUsageMetricsSamplingRatio > Math.random()) try {
                this._sendFelogUsage(e, "", t, n)
            } catch (t) {
                d.warn(`Failed to send usage felog for ${e}: '${t&&t.message}'`, t)
            }
        }
        _sendSampled(e, t, n, r) {
            e > Math.random() && this._send(t, n, r)
        }
        _createPerfLogger(e, t = 0) {
            if (this._sendPerfMetrics) {
                let n = [];
                const r = Object(c.o)(this._perfMetricsThrottleTimeMs, () => {
                    if (n.push(...this._perfMetrics.flushMeasures(e)), n.length >= t) {
                        const t = i.a.getStats(n);
                        n = [], d.info(`sending perf stats for ${e}`, t), this._sendEvent({
                            logger: e,
                            level: o.a.INFO,
                            ex_perfstats: t
                        })
                    }
                });
                return {
                    dummy: !1,
                    startMeasure: () => {
                        const t = this._perfMetrics.startMeasure(e);
                        return {
                            endMeasure() {
                                try {
                                    t.endMeasure(), r()
                                } catch (e) {}
                            }
                        }
                    },
                    measure: t => {
                        const n = this._perfMetrics.measure(e, t);
                        try {
                            r()
                        } catch (e) {}
                        return n
                    },
                    measureAsync: t => {
                        const n = this._perfMetrics.startMeasure(e);
                        return t().then(e => {
                            try {
                                n.endMeasure(), r()
                            } catch (e) {}
                            return e
                        })
                    }
                }
            }
            return {
                dummy: !0,
                startMeasure: () => ({
                    endMeasure: c.l
                }),
                measure: e => e(),
                measureAsync: e => e()
            }
        }
        sendCrashLogs(e, t) {
            if (!1 !== this._shouldSendEvents) try {
                this._sendFelogCrashLogs(t)
            } catch (t) {
                d.warn(`Failed to send crash data data for ${e}: '${t&&t.message}'`, t)
            }
        }
        setUserId(e) {
            this._setUserId(e)
        }
        setContainerId(e) {
            this._setContainerId(e)
        }
        enableEventsSending() {
            this._shouldSendEvents = !0
        }
        disableEventsSending() {
            this._shouldSendEvents = !1
        }
        notificationShown(e) {
            this._send("cs.notification.show", o.a.INFO, {
                type: e
            })
        }
        notificationHide(e) {
            this._send("cs.notification.hide", o.a.INFO, {
                type: e
            })
        }
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return l
    })), n.d(t, "a", (function() {
        return d
    }));
    var r = n(17),
        o = n(150),
        i = n(121),
        a = n(189),
        s = n(4),
        c = function(e, t, n, r) {
            return new(n || (n = Promise))((function(o, i) {
                function a(e) {
                    try {
                        c(r.next(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function s(e) {
                    try {
                        c(r.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                        e(t)
                    }))).then(a, s)
                }
                c((r = r.apply(e, t || [])).next())
            }))
        };
    class u {
        nextPingDateWriteError(e) {
            Object(i.a)().gnar.nextPingDateWriteError(JSON.stringify(e))
        }
        nextPingDateReadError(e) {
            Object(i.a)().gnar.sendError(JSON.stringify(e))
        }
        sendError(e) {
            Object(i.a)().gnar.sendError(JSON.stringify(e))
        }
        trackBeforeSetUser(e) {
            Object(i.a)().gnar.trackBeforeSetUser(e)
        }
    }

    function l(e, t) {
        var n;
        return c(this, void 0, void 0, (function*() {
            try {
                const i = yield function(e) {
                    return c(this, void 0, void 0, (function*() {
                        const t = window.fetch.bind(window),
                            n = e.bundleInfo.browser,
                            r = e.appConfig.gnar,
                            o = "safari" === n ? new a.CookieStorage(".grammarly.com") : "chrome" === n ? new a.ChromeCookieStorage(r.url, r.domain) : "firefox" === n ? new a.ReadonlyWebExtensionsCookieStorage(r.url, r.domain) : "edge" === n ? new a.BackendStorage(t, r.url) : Object(s.g)(n),
                            i = "firefox" === n || "safari" === n ? [] : [new a.CookieStorage(r.domain), new a.LocalStorage, new a.MemoryStorage],
                            c = new a.ContainerIdManager(o, i, null, "chrome" === n ? 1e3 : 5e3);
                        if ("safari" === n) {
                            const e = c.key(),
                                t = window.bgInitArgs,
                                n = t && t.companionContainerId;
                            if (null == (yield o.safeGetValue(e))) {
                                const t = null == n ? c.getOrGenerateContainerId() : n;
                                yield o.safeSetValue(e, t)
                            }
                        }
                        return {
                            gnar: new a.GnarClientImpl(r.url, r.appName, e.buildInfo.version, t, c, new u, !0)
                        }
                    }))
                }(r.a());
                return o.a.gnar = i.gnar, null === (n = o.a.gnar) || void 0 === n || n.setUserGetter(t), new e(i.gnar)
            } catch (e) {
                return void Object(i.a)().gnarClientInitFail(e && e.message)
            }
        }))
    }
    const d = () => c(void 0, void 0, void 0, (function*() {
        try {
            return o.a.gnar ? yield o.a.gnar.getContainerId(): void 0
        } catch (e) {
            return
        }
    }))
}, , , , function(e, t, n) {
    "use strict";
    var r = n(276);

    function o(e, t) {
        return e[t] << 8 | e[t + 1]
    }
    e.exports = {
        hash: function(e) {
            var t, n = r.toU8IntArray(e + ""),
                i = 0;
            if (!e) return i.toString(16);
            var a = n.length,
                s = 0;
            t = 3 & a, a >>>= 2;
            for (var c = 0; c < a; c++) i = (i += o(n, s)) << 16 ^ o(n, s + 2) << 11 ^ i, s += 4, i += i >> 11;
            switch (t) {
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
}, function(e, t, n) {
    "use strict";
    var r = n(276);

    function o(e, t) {
        return (65535 & e) * t + (((e >>> 16) * t & 65535) << 16)
    }

    function i(e, t) {
        return e << t | e >>> 32 - t
    }

    function a(e) {
        return e = o(e ^= e >>> 16, 2246822507), (e = o(e ^= e >>> 13, 3266489909)) ^ e >>> 16
    }

    function s(e, t) {
        e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
        var n = [0, 0, 0, 0];
        return n[3] += e[3] + t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] + t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] + t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] + t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
    }

    function c(e, t) {
        e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
        var n = [0, 0, 0, 0];
        return n[3] += e[3] * t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] * t[3], n[1] += n[2] >>> 16, n[2] &= 65535, n[2] += e[3] * t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] * t[3], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[2] * t[2], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[3] * t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
    }

    function u(e, t) {
        return 32 == (t %= 64) ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32, [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
    }

    function l(e, t) {
        return 0 == (t %= 64) ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
    }

    function d(e, t) {
        return [e[0] ^ t[0], e[1] ^ t[1]]
    }

    function f(e) {
        return e = d(e, [0, e[0] >>> 1]), e = d(e = c(e, [4283543511, 3981806797]), [0, e[0] >>> 1]), d(e = c(e, [3301882366, 444984403]), [0, e[0] >>> 1])
    }
    var h = function(e, t) {
        e = "" + e || "";
        var n = r.toU8IntArray(e);
        t = t || 0;
        for (var o = (e = {
                charCodeAt: function(e) {
                    return n[e]
                },
                length: n.length
            }).length % 16, i = e.length - o, a = [0, t], h = [0, t], g = [0, 0], p = [0, 0], m = [2277735313, 289559509], b = [1291169091, 658871167], v = 0; v < i; v += 16) g = [255 & e.charCodeAt(v + 4) | (255 & e.charCodeAt(v + 5)) << 8 | (255 & e.charCodeAt(v + 6)) << 16 | (255 & e.charCodeAt(v + 7)) << 24, 255 & e.charCodeAt(v) | (255 & e.charCodeAt(v + 1)) << 8 | (255 & e.charCodeAt(v + 2)) << 16 | (255 & e.charCodeAt(v + 3)) << 24], p = [255 & e.charCodeAt(v + 12) | (255 & e.charCodeAt(v + 13)) << 8 | (255 & e.charCodeAt(v + 14)) << 16 | (255 & e.charCodeAt(v + 15)) << 24, 255 & e.charCodeAt(v + 8) | (255 & e.charCodeAt(v + 9)) << 8 | (255 & e.charCodeAt(v + 10)) << 16 | (255 & e.charCodeAt(v + 11)) << 24], g = u(g = c(g, m), 31), a = s(a = u(a = d(a, g = c(g, b)), 27), h), a = s(c(a, [0, 5]), [0, 1390208809]), p = u(p = c(p, b), 33), h = s(h = u(h = d(h, p = c(p, m)), 31), a), h = s(c(h, [0, 5]), [0, 944331445]);
        switch (g = [0, 0], p = [0, 0], o) {
            case 15:
                p = d(p, l([0, e.charCodeAt(v + 14)], 48));
            case 14:
                p = d(p, l([0, e.charCodeAt(v + 13)], 40));
            case 13:
                p = d(p, l([0, e.charCodeAt(v + 12)], 32));
            case 12:
                p = d(p, l([0, e.charCodeAt(v + 11)], 24));
            case 11:
                p = d(p, l([0, e.charCodeAt(v + 10)], 16));
            case 10:
                p = d(p, l([0, e.charCodeAt(v + 9)], 8));
            case 9:
                p = c(p = d(p, [0, e.charCodeAt(v + 8)]), b), h = d(h, p = c(p = u(p, 33), m));
            case 8:
                g = d(g, l([0, e.charCodeAt(v + 7)], 56));
            case 7:
                g = d(g, l([0, e.charCodeAt(v + 6)], 48));
            case 6:
                g = d(g, l([0, e.charCodeAt(v + 5)], 40));
            case 5:
                g = d(g, l([0, e.charCodeAt(v + 4)], 32));
            case 4:
                g = d(g, l([0, e.charCodeAt(v + 3)], 24));
            case 3:
                g = d(g, l([0, e.charCodeAt(v + 2)], 16));
            case 2:
                g = d(g, l([0, e.charCodeAt(v + 1)], 8));
            case 1:
                g = c(g = d(g, [0, e.charCodeAt(v)]), m), a = d(a, g = c(g = u(g, 31), b))
        }
        return a = s(a = d(a, [0, e.length]), h = d(h, [0, e.length])), h = s(h, a), a = s(a = f(a), h = f(h)), h = s(h, a), ("00000000" + (a[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (h[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (h[1] >>> 0).toString(16)).slice(-8)
    };
    e.exports = {
        x86Hash32: function(e, t) {
            e = "" + e || "";
            var n = r.toU8IntArray(e);
            t = t || 0;
            for (var s = (e = {
                    charCodeAt: function(e) {
                        return n[e]
                    },
                    length: n.length
                }).length % 4, c = e.length - s, u = t, l = 0, d = 3432918353, f = 461845907, h = 0; h < c; h += 4) l = o(l = 255 & e.charCodeAt(h) | (255 & e.charCodeAt(h + 1)) << 8 | (255 & e.charCodeAt(h + 2)) << 16 | (255 & e.charCodeAt(h + 3)) << 24, d), l = o(l = i(l, 15), f), u = o(u = i(u ^= l, 13), 5) + 3864292196;
            switch (l = 0, s) {
                case 3:
                    l ^= (255 & e.charCodeAt(h + 2)) << 16;
                case 2:
                    l ^= (255 & e.charCodeAt(h + 1)) << 8;
                case 1:
                    l = o(l ^= 255 & e.charCodeAt(h), d), u ^= l = o(l = i(l, 15), f)
            }
            return ((u = a(u ^= e.length)) >>> 0).toString(16)
        },
        x86Hash128: function(e, t) {
            e = "" + e || "";
            var n = r.toU8IntArray(e);
            t = t || 0;
            for (var s = (e = {
                    charCodeAt: function(e) {
                        return n[e]
                    },
                    length: n.length
                }).length % 16, c = e.length - s, u = t, l = t, d = t, f = t, h = 0, g = 0, p = 0, m = 0, b = 597399067, v = 2869860233, _ = 951274213, y = 2716044179, w = 0; w < c; w += 16) h = 255 & e.charCodeAt(w) | (255 & e.charCodeAt(w + 1)) << 8 | (255 & e.charCodeAt(w + 2)) << 16 | (255 & e.charCodeAt(w + 3)) << 24, g = 255 & e.charCodeAt(w + 4) | (255 & e.charCodeAt(w + 5)) << 8 | (255 & e.charCodeAt(w + 6)) << 16 | (255 & e.charCodeAt(w + 7)) << 24, p = 255 & e.charCodeAt(w + 8) | (255 & e.charCodeAt(w + 9)) << 8 | (255 & e.charCodeAt(w + 10)) << 16 | (255 & e.charCodeAt(w + 11)) << 24, m = 255 & e.charCodeAt(w + 12) | (255 & e.charCodeAt(w + 13)) << 8 | (255 & e.charCodeAt(w + 14)) << 16 | (255 & e.charCodeAt(w + 15)) << 24, h = i(h = o(h, b), 15), u = i(u ^= h = o(h, v), 19), u = o(u += l, 5) + 1444728091, g = i(g = o(g, v), 16), l = i(l ^= g = o(g, _), 17), l = o(l += d, 5) + 197830471, p = i(p = o(p, _), 17), d = i(d ^= p = o(p, y), 15), d = o(d += f, 5) + 2530024501, m = i(m = o(m, y), 18), f = i(f ^= m = o(m, b), 13), f = o(f += u, 5) + 850148119;
            switch (h = 0, g = 0, p = 0, m = 0, s) {
                case 15:
                    m ^= e.charCodeAt(w + 14) << 16;
                case 14:
                    m ^= e.charCodeAt(w + 13) << 8;
                case 13:
                    m = o(m ^= e.charCodeAt(w + 12), y), f ^= m = o(m = i(m, 18), b);
                case 12:
                    p ^= e.charCodeAt(w + 11) << 24;
                case 11:
                    p ^= e.charCodeAt(w + 10) << 16;
                case 10:
                    p ^= e.charCodeAt(w + 9) << 8;
                case 9:
                    p = o(p ^= e.charCodeAt(w + 8), _), d ^= p = o(p = i(p, 17), y);
                case 8:
                    g ^= e.charCodeAt(w + 7) << 24;
                case 7:
                    g ^= e.charCodeAt(w + 6) << 16;
                case 6:
                    g ^= e.charCodeAt(w + 5) << 8;
                case 5:
                    g = o(g ^= e.charCodeAt(w + 4), v), l ^= g = o(g = i(g, 16), _);
                case 4:
                    h ^= e.charCodeAt(w + 3) << 24;
                case 3:
                    h ^= e.charCodeAt(w + 2) << 16;
                case 2:
                    h ^= e.charCodeAt(w + 1) << 8;
                case 1:
                    h = o(h ^= e.charCodeAt(w), b), u ^= h = o(h = i(h, 15), v)
            }
            return u ^= e.length, u += l ^= e.length, u += d ^= e.length, l += u += f ^= e.length, d += u, f += u, u = a(u), u += l = a(l), u += d = a(d), l += u += f = a(f), d += u, f += u, ("00000000" + (u >>> 0).toString(16)).slice(-8) + ("00000000" + (l >>> 0).toString(16)).slice(-8) + ("00000000" + (d >>> 0).toString(16)).slice(-8) + ("00000000" + (f >>> 0).toString(16)).slice(-8)
        },
        x64Hash64: function(e, t) {
            return h(e, t).slice(8)
        },
        x64Hash128: h,
        hash: function(e, t) {
            return h(e, t)
        }
    }
}, , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";

    function r(e) {
        try {
            return encodeURIComponent(e)
        } catch (e) {
            return null
        }
    }

    function o(e) {
        try {
            return decodeURIComponent(e)
        } catch (e) {
            return null
        }
    }
    t.__esModule = !0, t.default = function(e, t, n) {
        if (arguments.length < 2) return function(e) {
            var t = function(e) {
                var t = {},
                    n = document.cookie.split(/ *; */);
                if (!n[0]) return t;
                var r = n,
                    i = Array.isArray(r),
                    a = 0;
                for (r = i ? r : r[Symbol.iterator]();;) {
                    var s;
                    if (i) {
                        if (a >= r.length) break;
                        s = r[a++]
                    } else {
                        if ((a = r.next()).done) break;
                        s = a.value
                    }
                    var c = s;
                    t[o((c = c.split("="))[0])] = o(c[1])
                }
                return t
            }();
            return e ? t[e] : t
        }(e);
        ! function(e, t) {
            var n = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2],
                o = r(e) + "=" + r(t);
            null == t && (n.maxage = -1), n.maxage && (n.expires = new Date(+new Date + n.maxage)), n.path && (o += "; path=" + n.path), n.domain && (o += "; domain=" + n.domain), n.expires && (o += "; expires=" + n.expires.toUTCString()), n.secure && (o += "; secure"), document.cookie = o
        }(e, t, n)
    }
}, , , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return i
    }));
    var r = n(90);
    class o {
        constructor({
            legacyStopWorkingDate: e
        }) {
            this.legacyStopWorkingDate = e
        }
        static parse(e) {
            return Object(r.b)(Object(r.g)(o.name, {
                legacyStopWorkingDate: Object(r.f)(r.e)
            }), e => new o(e))(e)
        }
        encode() {
            const e = {};
            return this.legacyStopWorkingDate && (e.legacyStopWorkingDate = this.legacyStopWorkingDate.toISOString()), e
        }
    }
    class i {
        constructor(e, t) {
            this.source = e, t ? (this.version = t.version, this.safariAppExtensionMigration = t.safariAppExtensionMigration, this.newRichTextFieldsEnabled = t.newRichTextFieldsEnabled, this.fluidDisabledForFirefox = t.fluidDisabledForFirefox, this.fluidDisabledForSafari = t.fluidDisabledForSafari) : this.version = ""
        }
        static parse(e) {
            return t => Object(r.b)(Object(r.g)(i.name, {
                version: r.h,
                safariAppExtensionMigration: Object(r.a)(i.safariAppExtensionMigrationFieldName, Object(r.f)(o.parse)),
                newRichTextFieldsEnabled: Object(r.a)(i.newRichTextFieldsEnabledFieldName, Object(r.f)(r.d)),
                fluidDisabledForFirefox: Object(r.a)(i.fluidDisabledForFirefoxFieldName, Object(r.f)(r.d)),
                fluidDisabledForSafari: Object(r.a)(i.fluidDisabledForSafariFieldName, Object(r.f)(r.d))
            }), t => new i(e, t))(t)
        }
        encode() {
            return {
                version: this.version,
                [i.safariAppExtensionMigrationFieldName]: this.safariAppExtensionMigration ? this.safariAppExtensionMigration.encode() : void 0,
                [i.newRichTextFieldsEnabledFieldName]: this.newRichTextFieldsEnabled,
                [i.fluidDisabledForFirefoxFieldName]: this.fluidDisabledForFirefox,
                [i.fluidDisabledForSafariFieldName]: this.fluidDisabledForSafari
            }
        }
    }
    i.empty = new i("empty", {
        version: "0",
        newRichTextFieldsEnabled: !0,
        fluidDisabledForFirefox: !1,
        fluidDisabledForSafari: !1
    }), i.safariAppExtensionMigrationFieldName = "safariAppExtensionMigration_1558396627629", i.newRichTextFieldsEnabledFieldName = "newRichTextFieldsEnabled_1567530773088", i.fluidDisabledForFirefoxFieldName = "fluidDisabledForFirefox_1567530773089", i.fluidDisabledForSafariFieldName = "fluidDisabledForSafari_1567530773090"
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = t.repeat = function(e, t) {
            return new Array(t + 1).join(e)
        },
        o = t.pad = function(e, t) {
            return r("0", t - e.toString().length) + e
        };
    t.formatTime = function(e) {
        return o(e.getHours(), 2) + ":" + o(e.getMinutes(), 2) + ":" + o(e.getSeconds(), 2) + "." + o(e.getMilliseconds(), 3)
    }, t.timer = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance : Date
}, , , , , function(e, t, n) {
    "use strict";
    var r;
    n.d(t, "a", (function() {
            return r
        })),
        function(e) {
            e.rpcLegacyMessageName = "cs-to-bg-rpc-1557421403805"
        }(r || (r = {}))
}, , function(e, t, n) {
    "use strict";

    function r(e) {
        var t, n = e.Symbol;
        return "function" == typeof n ? n.observable ? t = n.observable : (t = n("observable"), n.observable = t) : t = "@@observable", t
    }
    n.d(t, "a", (function() {
        return r
    }))
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var n = "object" == typeof e && e && e.Object === Object && e;
        t.a = n
    }).call(this, n(159))
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.logger = t.defaults = void 0;
    var r, o = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        i = n(472),
        a = n(405),
        s = (r = n(475)) && r.__esModule ? r : {
            default: r
        };

    function c() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = o({}, s.default, e),
            n = t.logger,
            r = t.transformer,
            c = t.stateTransformer,
            u = t.errorTransformer,
            l = t.predicate,
            d = t.logErrors,
            f = t.diffPredicate;
        if (void 0 === n) return function() {
            return function(e) {
                return function(t) {
                    return e(t)
                }
            }
        };
        if (r && console.error("Option 'transformer' is deprecated, use 'stateTransformer' instead!"), e.getState && e.dispatch) return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n\n\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\n\nconst logger = createLogger({\n  // ...options\n});\n\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),
            function() {
                return function(e) {
                    return function(t) {
                        return e(t)
                    }
                }
            };
        var h = [];
        return function(e) {
            var n = e.getState;
            return function(e) {
                return function(r) {
                    if ("function" == typeof l && !l(n, r)) return e(r);
                    var s = {};
                    h.push(s), s.started = a.timer.now(), s.startedTime = new Date, s.prevState = c(n()), s.action = r;
                    var g = void 0;
                    if (d) try {
                        g = e(r)
                    } catch (e) {
                        s.error = u(e)
                    } else g = e(r);
                    s.took = a.timer.now() - s.started, s.nextState = c(n());
                    var p = t.diff && "function" == typeof f ? f(n, r) : t.diff;
                    if ((0, i.printBuffer)(h, o({}, t, {
                            diff: p
                        })), h.length = 0, s.error) throw s.error;
                    return g
                }
            }
        }
    }
    var u = c();
    t.defaults = s.default, t.logger = u, t.default = c, e.exports = t.default
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return c
    }));
    var r = n(241),
        o = n(89);
    const i = r,
        a = n(188),
        s = o,
        c = Object.assign({}, i, a, s)
}, , , , , , , , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return r
    }));
    var r;
    ! function(e) {
        e.isIncluded = function(e, t, n) {
            const r = Array.isArray(n) ? `(${n.join("|")})$` : `(${n})`,
                o = new RegExp(`^${t}(_\\w+)?_${r}`);
            return e.some(e => o.test(e))
        }, e.create = function(t = []) {
            const n = (n, r) => e.isIncluded(t, n, r);
            return {
                gdprSignupEnabled: t.includes("gdpr_signup_enabled"),
                gButtonAnimation: t.includes("new_gbutton_enabled"),
                emogenie: t.includes("emogenie_beta_enabled") || n("emogenie_all_sites", ["enabled", "control"]),
                emogenieAllSites: n("emogenie_all_sites", ["enabled"]),
                emogenieGButton: n("emogenie_gbutton", ["enabled"]),
                emogenieUpgradeHook: n("tone_detector_limited", "enabled"),
                fluidDogfood: t.includes("fluid_dogfood"),
                gdocsPremiumInlineAlerts: n("gdocs_premium_inline", "enabled"),
                anonUsersPopupEditor: t.includes("popup_editor_for_anonymous_users_test_1") || t.includes("popup_editor_for_anonymous_users_test_2"),
                sendEmailPremiumPopup: n("send_email_premium_popup", "enabled"),
                freePremiumAlerts: n("show_occasional_free_premium_alerts", "enabled"),
                autocorrectEnabled: n("extension_autocorrect_alpha", ["enabled"]) || n("apollo", ["enabled_1", "enabled_2"]),
                freePremiumLockedPreview: n("premium_lock_transform_preview_internal", ["enabled_locked"]) || n("premium_lock_transform_preview", ["locked_transform_1", "locked_transform_2"]),
                freePremiumGreyedPreview: n("premium_lock_transform_preview_internal", ["enabled", "enabled_greyed"]) || n("premium_lock_transform_preview", ["greyed_transform_1", "greyed_transform_2"]),
                gdocsNewMapping: n("gdocs_new_mapping", "enabled"),
                gdocsForAllBrowsers: n("gdocs_for_all", ["enabled"]),
                gdocsSidebarEnabled: n("gdocs_sidebar", "enabled")
            }
        }
    }(r || (r = {}))
}, , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return c
    }));
    var r = n(10),
        o = n(4),
        i = n(12),
        a = function(e, t, n, r) {
            return new(n || (n = Promise))((function(o, i) {
                function a(e) {
                    try {
                        c(r.next(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function s(e) {
                    try {
                        c(r.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                        e(t)
                    }))).then(a, s)
                }
                c((r = r.apply(e, t || [])).next())
            }))
        };
    const s = i.a.create("Cookies");
    class c {
        constructor(e) {
            this._api = e, this._rootPath = "/", this._grammarlyUrl = `https://${Object(r.e)()}${this._rootPath}`, this._grauthCookieName = "grauth", this._csrfTokenCookieName = "csrf-token", this._grInstallSourceCookieName = "grInstallSource", this._grChromeStoreInstallUtmName = "grChromeStoreInstallUTM", this.getToken = () => this._api.cookies.get({
                name: this._grauthCookieName,
                url: this._grammarlyUrl
            }).then(e => e ? e.value : null), this.deleteGrauth = () => this._api.cookies.remove({
                name: this._grauthCookieName,
                url: this._grammarlyUrl
            }), this.getCSRFToken = e => a(this, void 0, void 0, (function*() {
                try {
                    const t = yield Object(o.i)(() => this._api.cookies.get({
                        name: this._csrfTokenCookieName,
                        url: this._grammarlyUrl
                    }), 5, 20, t => !!(e || t && t.value)), n = t ? t.value : null;
                    return n || e || s.error("CRF is null"), n
                } catch (e) {
                    return s.error("failed to read a CSRFToken cookie", e), null
                }
            })), this.watchToken = e => this._api.cookies.watch({
                domain: Object(r.e)(),
                name: this._grauthCookieName,
                url: this._grammarlyUrl,
                path: this._rootPath
            }, e), this.getInstallSource = () => this._api.cookies.get({
                name: this._grInstallSourceCookieName,
                url: this._grammarlyUrl
            }), this.getChromeStoreInstallUTM = () => this._api.cookies.get({
                name: this._grChromeStoreInstallUtmName,
                url: this._grammarlyUrl
            }), this.getAllGrammarlyCookies = () => this._api.cookies.getAll({
                domain: Object(r.e)(),
                path: this._rootPath
            }), this.deleteGnarContainerIdCookie = () => this._api.cookies.remove({
                name: "gnar_containerId",
                url: this._grammarlyUrl
            })
        }
    }
}, , function(e, t, n) {
    var {
        emitter: r
    } = n(80);
    "function" != typeof Object.assign && (Object.assign = function(e) {
        "use strict";
        if (null == e) throw new TypeError("Cannot convert undefined or null to object");
        for (var t = Object(e), n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            if (null != r)
                for (var o in r) r.hasOwnProperty(o) && (t[o] = r[o])
        }
        return t
    });
    try {
        e.exports = function(e) {
            var t, n, o, i, a, s, c = !e.silentLogs,
                u = window.WebSocket || window.MozWebSocket,
                l = !1,
                d = null,
                f = !1,
                h = !1,
                g = !1,
                p = 1e3,
                m = 1e3,
                b = 6e4,
                v = [],
                _ = [],
                y = !1;
            e = Object.assign({}, {
                url: null,
                connectionTimeout: 1e3,
                idleTimeout: 3e5,
                useQueue: !1,
                useStandBy: !1,
                playDelay: 50,
                resetQueueOnReconnect: !!e.fluid
            }, e);
            var w = r({
                connect: O,
                reconnect: function() {
                    s || (s = !0, w.isConnected() ? (w.one("disconnect", (function() {
                        setTimeout(w.connect.bind(null, !0), 0)
                    })), h = !0, w.close()) : w.connect(!0))
                },
                send: function(n) {
                    if (l) ! function(e) {
                        if (E(e)) return !1;
                        l && (l = !1, O(!0))
                    }(n);
                    else {
                        var r = JSON.stringify(n);
                        v.push(r), k(), e.fluid && void 0 === t && w.emit("fluidNotConnected")
                    }
                },
                close: function() {
                    if (h = !0, A("explicit close requested"), !f) return g = !0;
                    try {
                        t && t.close(), n && (clearTimeout(n), n = null)
                    } catch (e) {
                        N("socket closing bug", e.stack || e)
                    }
                    f = !1, d && clearTimeout(d)
                },
                isConnected: function() {
                    return f
                },
                release: function() {
                    clearTimeout(n)
                },
                toString: function() {
                    return "[object WebSocket]"
                },
                wsPlay: function() {
                    clearTimeout(a), a = setTimeout((function() {
                        y = !1, x()
                    }), e.playDelay)
                },
                wsPause: function() {
                    clearTimeout(a), y = !0
                }
            });
            return w;

            function O(n) {
                w.isConnected() || (A("connect to url: " + e.url), t = new u(e.url), h = !1, f = !1, t.onopen = function() {
                    p = m, f = !0, g && (g = !1, w.close()), n && e.resetQueueOnReconnect ? v = [] : k(), w.emit("connect"), n && (w.emit("reconnect"), s = !1)
                }, t.onmessage = function(t) {
                    c && console.log("%c Received: %s", "color: #46af91;", t.data), j(t.data),
                        function(t) {
                            try {
                                t = JSON.parse(t)
                            } catch (e) {
                                N(e.stack || e, t)
                            }
                            e.useQueue ? (_.push(t), x()) : w.emit("message", t)
                        }(t.data)
                }, t.onclose = function(e) {
                    f = !1, w.emit("disconnect", e), h || C("disconnected")
                }, t.onerror = C, window.app && app.one("offline", (function() {
                    f && (w.close(), app.one("online", (function() {
                        w.connect()
                    })))
                })))
            }

            function j(t) {
                e.useStandBy && t && !E(t) && (clearTimeout(d), d = setTimeout((function() {
                    w.close(), l = !0, d = !1
                }), e.useStandBy))
            }

            function E(e) {
                if (e && "ping" == e) return !0;
                var t, n = !1;
                try {
                    t = JSON.parse(e)
                } catch (e) {}
                return t && ("ping" == t || t.action && "pong" == t.action) && (n = !0), n
            }

            function k() {
                if (t)
                    for (; t.readyState == u.OPEN && v.length;) S(v.shift())
            }

            function S(n) {
                c && console.log("%c Sending %s", "color:rgba(10, 10, 10, 0.6); font-size: 10px", n), j(n), t.send(n), o && clearTimeout(o), o = setTimeout(I, e.idleTimeout)
            }

            function I() {
                o = null, w.send("ping")
            }

            function C(e) {
                N("websocket error", e), w.emit("error", e), e && e.target && [u.CLOSING, u.CLOSED].indexOf(e.target.readyState) > -1 || n || (f && w.close(), A("try to reconnect in " + p / 1e3 + "s"), n = setTimeout((function() {
                    p = Math.min(b, 1.5 * p), n = null, O(!0)
                }), p))
            }

            function A() {
                c && console.log.apply(console, arguments)
            }

            function N() {
                console.error.apply(console, arguments)
            }

            function x() {
                i || y || (i = 0 !== _.length ? setTimeout((function() {
                    y || w.emit("message", _.shift()), i = null, x()
                }), e.useQueue) : null)
            }
        }
    } catch (e) {}
}, , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    var r = n(223),
        o = n(306),
        i = n(117),
        a = n(27);
    t.a = function(e, t) {
        return (Object(a.a)(e) ? r.a : o.a)(e, function(e) {
            return "function" == typeof e ? e : i.a
        }(t))
    }
}, , , , , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    t.alphanumeric = function e(t, n) {
        if (void 0 === n && (n = ""), t <= 0) return n;
        var o = Math.floor(Math.random() * (r.length - 1));
        return e(t - 1, n + r.charAt(o))
    }, t.getNextPingDate = function() {
        var e = new Date;
        return e.getHours() > 2 && e.setDate(e.getDate() + 1), e.setHours(3), e.setMinutes(Math.floor(60 * Math.random())), e.getTime()
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e, t) {
            this._logger = e, this._metric = t
        }
        return e.prototype.getValueStart = function(e) {
            var t = this,
                n = this._metric.getTimer("doGet" + e + ".timer").start();
            return {
                getValueSuccess: function() {
                    n.stop(), t._metric.getCounter("doGet" + e + ".success").increment()
                },
                getValueFailure: function(r) {
                    n.stop(), t._metric.getCounter("doGet" + e + ".failure").increment(), t._logger.warn("doGet" + e + ".failed", r)
                }
            }
        }, e.prototype.valueGenerated = function() {
            this._metric.getCounter("generated").increment()
        }, e.prototype.valueRecovered = function() {
            this._metric.getCounter("recovered").increment()
        }, e
    }();
    t.TelemetryValueManagerLogger = r;
    var o = function() {
        function e(e, t) {
            this._logger = e, this._metric = t
        }
        return e.prototype.nextPingDateReadError = function(e) {
            this._metric.getCounter("nextPingDate.read.failure").increment(), this._logger.warn("nextPingDate.read.failed", e)
        }, e.prototype.nextPingDateWriteError = function(e) {
            this._metric.getCounter("nextPingDate.write.failure").increment(), this._logger.warn("nextPingDate.write.failed", e)
        }, e.prototype.sendError = function(e) {
            this._metric.getCounter("send.failure").increment(), this._logger.warn("send.failed", e)
        }, e.prototype.trackBeforeSetUser = function(e) {
            this._metric.getCounter("trackBeforeSetUser").increment(), this._logger.warn("trackBeforeSetUser", e)
        }, e
    }();
    t.TelemetryGnarClientImplLogger = o, t.guard = function(e) {
        try {
            return e()
        } catch (e) {
            return
        }
    }
}, function(e, t, n) {
    "use strict";
    (function(e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
        t.ident = function(e) {
            return e
        }, t.check = function(e, t, n) {
            if (!t(e)) throw new Error(n)
        }, t.remove = function(e, t) {
            var n = e.indexOf(t);
            n >= 0 && e.splice(n, 1)
        }, t.deferred = s, t.arrayOfDeffered = function(e) {
            for (var t = [], n = 0; n < e; n++) t.push(s());
            return t
        }, t.autoInc = function() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0];
            return function() {
                return ++e
            }
        }, t.asap = function(e) {
            return Promise.resolve(1).then((function() {
                return e()
            }))
        }, t.warnDeprecated = function(e) {
            i && console.warn("DEPRECATION WARNING", e)
        };
        var r = t.sym = function(e) {
                return "@@redux-saga/" + e
            },
            o = t.TASK = r("TASK");
        t.kTrue = function() {
            return !0
        }, t.noop = function() {};
        var i = t.isDev = void 0 !== e && e.env && !1,
            a = t.is = {
                undef: function(e) {
                    return null == e
                },
                notUndef: function(e) {
                    return null != e
                },
                func: function(e) {
                    return "function" == typeof e
                },
                array: Array.isArray,
                promise: function(e) {
                    return e && a.func(e.then)
                },
                iterator: function(e) {
                    return e && a.func(e.next) && a.func(e.throw)
                },
                task: function(e) {
                    return e && e[o]
                }
            };

        function s() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                t = n({}, e),
                r = new Promise((function(e, n) {
                    t.resolve = e, t.reject = n
                }));
            return t.promise = r, t
        }
    }).call(this, n(217))
}, , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return o
    }));
    var r = n(80);
    class o {
        constructor(e = {}) {
            this.on = (e, t) => this._internalEmitter.on(e, t), this.one = (e, t) => this._internalEmitter.one(e, t), this.off = (e, t) => this._internalEmitter.off(e, t), this.emit = (e, t) => this._internalEmitter.emit(e, t), this.delegate = (e, t, n) => this._internalEmitter.delegate(e, t, n), this._internalEmitter = r.emitter(e)
        }
    }
}, , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    t.printBuffer = function(e, t) {
        var n = t.logger,
            r = t.actionTransformer,
            o = t.titleFormatter,
            c = void 0 === o ? function(e) {
                var t = e.timestamp,
                    n = e.duration;
                return function(e, r, o) {
                    var i = ["action"];
                    return i.push("%c" + String(e.type)), t && i.push("%c@ " + r), n && i.push("%c(in " + o.toFixed(2) + " ms)"), i.join(" ")
                }
            }(t) : o,
            u = t.collapsed,
            l = t.colors,
            d = t.level,
            f = t.diff;
        e.forEach((function(o, h) {
            var g = o.started,
                p = o.startedTime,
                m = o.action,
                b = o.prevState,
                v = o.error,
                _ = o.took,
                y = o.nextState,
                w = e[h + 1];
            w && (y = w.prevState, _ = w.started - g);
            var O = r(m),
                j = "function" == typeof u ? u((function() {
                    return y
                }), m, o) : u,
                E = (0, i.formatTime)(p),
                k = l.title ? "color: " + l.title(O) + ";" : "",
                S = ["color: gray; font-weight: lighter;"];
            S.push(k), t.timestamp && S.push("color: gray; font-weight: lighter;"), t.duration && S.push("color: gray; font-weight: lighter;");
            var I = c(O, E, _);
            try {
                j ? l.title ? n.groupCollapsed.apply(n, ["%c " + I].concat(S)) : n.groupCollapsed(I) : l.title ? n.group.apply(n, ["%c " + I].concat(S)) : n.group(I)
            } catch (e) {
                n.log(I)
            }
            var C = s(d, O, [b], "prevState"),
                A = s(d, O, [O], "action"),
                N = s(d, O, [v, b], "error"),
                x = s(d, O, [y], "nextState");
            C && (l.prevState ? n[C]("%c prev state", "color: " + l.prevState(b) + "; font-weight: bold", b) : n[C]("prev state", b)), A && (l.action ? n[A]("%c action    ", "color: " + l.action(O) + "; font-weight: bold", O) : n[A]("action    ", O)), v && N && (l.error ? n[N]("%c error     ", "color: " + l.error(v, b) + "; font-weight: bold;", v) : n[N]("error     ", v)), x && (l.nextState ? n[x]("%c next state", "color: " + l.nextState(y) + "; font-weight: bold", y) : n[x]("next state", y)), f && (0, a.default)(b, y, n, j);
            try {
                n.groupEnd()
            } catch (e) {
                n.log("—— log end ——")
            }
        }))
    };
    var o, i = n(405),
        a = (o = n(473)) && o.__esModule ? o : {
            default: o
        };

    function s(e, t, n, o) {
        switch (void 0 === e ? "undefined" : r(e)) {
            case "object":
                return "function" == typeof e[o] ? e[o].apply(e, function(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n
                    }
                    return Array.from(e)
                }(n)) : e[o];
            case "function":
                return e(t);
            default:
                return e
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e, t, n, r) {
        var s = (0, o.default)(e, t);
        try {
            r ? n.groupCollapsed("diff") : n.group("diff")
        } catch (e) {
            n.log("diff")
        }
        s ? s.forEach((function(e) {
            var t = e.kind,
                r = function(e) {
                    var t = e.kind,
                        n = e.path,
                        r = e.lhs,
                        o = e.rhs,
                        i = e.index,
                        a = e.item;
                    switch (t) {
                        case "E":
                            return [n.join("."), r, "→", o];
                        case "N":
                            return [n.join("."), o];
                        case "D":
                            return [n.join(".")];
                        case "A":
                            return [n.join(".") + "[" + i + "]", a];
                        default:
                            return []
                    }
                }(e);
            n.log.apply(n, ["%c " + i[t].text, a(t)].concat(function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
                return Array.from(e)
            }(r)))
        })) : n.log("—— no diff ——");
        try {
            n.groupEnd()
        } catch (e) {
            n.log("—— diff end —— ")
        }
    };
    var r, o = (r = n(474)) && r.__esModule ? r : {
            default: r
        },
        i = {
            E: {
                color: "#2196F3",
                text: "CHANGED:"
            },
            N: {
                color: "#4CAF50",
                text: "ADDED:"
            },
            D: {
                color: "#F44336",
                text: "DELETED:"
            },
            A: {
                color: "#2196F3",
                text: "ARRAY:"
            }
        };

    function a(e) {
        return "color: " + i[e].color + "; font-weight: bold"
    }
    e.exports = t.default
}, function(e, t, n) {
    (function(n) {
        var r;
        ! function(o, i) {
            "use strict";
            void 0 === (r = function() {
                return function(e) {
                    var t, r, o = [];

                    function i(e, t) {
                        e.super_ = t, e.prototype = Object.create(t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        })
                    }

                    function a(e, t) {
                        Object.defineProperty(this, "kind", {
                            value: e,
                            enumerable: !0
                        }), t && t.length && Object.defineProperty(this, "path", {
                            value: t,
                            enumerable: !0
                        })
                    }

                    function s(e, t, n) {
                        s.super_.call(this, "E", e), Object.defineProperty(this, "lhs", {
                            value: t,
                            enumerable: !0
                        }), Object.defineProperty(this, "rhs", {
                            value: n,
                            enumerable: !0
                        })
                    }

                    function c(e, t) {
                        c.super_.call(this, "N", e), Object.defineProperty(this, "rhs", {
                            value: t,
                            enumerable: !0
                        })
                    }

                    function u(e, t) {
                        u.super_.call(this, "D", e), Object.defineProperty(this, "lhs", {
                            value: t,
                            enumerable: !0
                        })
                    }

                    function l(e, t, n) {
                        l.super_.call(this, "A", e), Object.defineProperty(this, "index", {
                            value: t,
                            enumerable: !0
                        }), Object.defineProperty(this, "item", {
                            value: n,
                            enumerable: !0
                        })
                    }

                    function d(e, t, n) {
                        var r = e.slice((n || t) + 1 || e.length);
                        return e.length = t < 0 ? e.length + t : t, e.push.apply(e, r), e
                    }

                    function f(e) {
                        var t = typeof e;
                        return "object" !== t ? t : e === Math ? "math" : null === e ? "null" : Array.isArray(e) ? "array" : "[object Date]" === Object.prototype.toString.call(e) ? "date" : void 0 !== e.toString && /^\/.*\//.test(e.toString()) ? "regexp" : "object"
                    }

                    function h(t, n, r, o, i, a, g) {
                        var p = (i = i || []).slice(0);
                        if (void 0 !== a) {
                            if (o) {
                                if ("function" == typeof o && o(p, a)) return;
                                if ("object" == typeof o) {
                                    if (o.prefilter && o.prefilter(p, a)) return;
                                    if (o.normalize) {
                                        var m = o.normalize(p, a, t, n);
                                        m && (t = m[0], n = m[1])
                                    }
                                }
                            }
                            p.push(a)
                        }
                        "regexp" === f(t) && "regexp" === f(n) && (t = t.toString(), n = n.toString());
                        var b = typeof t,
                            v = typeof n;
                        if ("undefined" === b) "undefined" !== v && r(new c(p, n));
                        else if ("undefined" === v) r(new u(p, t));
                        else if (f(t) !== f(n)) r(new s(p, t, n));
                        else if ("[object Date]" === Object.prototype.toString.call(t) && "[object Date]" === Object.prototype.toString.call(n) && t - n != 0) r(new s(p, t, n));
                        else if ("object" === b && null !== t && null !== n) {
                            if ((g = g || []).indexOf(t) < 0) {
                                if (g.push(t), Array.isArray(t)) {
                                    var _;
                                    for (t.length, _ = 0; _ < t.length; _++) _ >= n.length ? r(new l(p, _, new u(e, t[_]))) : h(t[_], n[_], r, o, p, _, g);
                                    for (; _ < n.length;) r(new l(p, _, new c(e, n[_++])))
                                } else {
                                    var y = Object.keys(t),
                                        w = Object.keys(n);
                                    y.forEach((function(i, a) {
                                        var s = w.indexOf(i);
                                        s >= 0 ? (h(t[i], n[i], r, o, p, i, g), w = d(w, s)) : h(t[i], e, r, o, p, i, g)
                                    })), w.forEach((function(t) {
                                        h(e, n[t], r, o, p, t, g)
                                    }))
                                }
                                g.length = g.length - 1
                            }
                        } else t !== n && ("number" === b && isNaN(t) && isNaN(n) || r(new s(p, t, n)))
                    }

                    function g(t, n, r, o) {
                        return o = o || [], h(t, n, (function(e) {
                            e && o.push(e)
                        }), r), o.length ? o : e
                    }

                    function p(e, t, n) {
                        if (e && t && n && n.kind) {
                            for (var r = e, o = -1, i = n.path ? n.path.length - 1 : 0; ++o < i;) void 0 === r[n.path[o]] && (r[n.path[o]] = "number" == typeof n.path[o] ? [] : {}), r = r[n.path[o]];
                            switch (n.kind) {
                                case "A":
                                    ! function e(t, n, r) {
                                        if (r.path && r.path.length) {
                                            var o, i = t[n],
                                                a = r.path.length - 1;
                                            for (o = 0; o < a; o++) i = i[r.path[o]];
                                            switch (r.kind) {
                                                case "A":
                                                    e(i[r.path[o]], r.index, r.item);
                                                    break;
                                                case "D":
                                                    delete i[r.path[o]];
                                                    break;
                                                case "E":
                                                case "N":
                                                    i[r.path[o]] = r.rhs
                                            }
                                        } else switch (r.kind) {
                                            case "A":
                                                e(t[n], r.index, r.item);
                                                break;
                                            case "D":
                                                t = d(t, n);
                                                break;
                                            case "E":
                                            case "N":
                                                t[n] = r.rhs
                                        }
                                        return t
                                    }(n.path ? r[n.path[o]] : r, n.index, n.item);
                                    break;
                                case "D":
                                    delete r[n.path[o]];
                                    break;
                                case "E":
                                case "N":
                                    r[n.path[o]] = n.rhs
                            }
                        }
                    }
                    return t = "object" == typeof n && n ? n : "undefined" != typeof window ? window : {}, (r = t.DeepDiff) && o.push((function() {
                        void 0 !== r && t.DeepDiff === g && (t.DeepDiff = r, r = e)
                    })), i(s, a), i(c, a), i(u, a), i(l, a), Object.defineProperties(g, {
                        diff: {
                            value: g,
                            enumerable: !0
                        },
                        observableDiff: {
                            value: h,
                            enumerable: !0
                        },
                        applyDiff: {
                            value: function(e, t, n) {
                                e && t && h(e, t, (function(r) {
                                    n && !n(e, t, r) || p(e, t, r)
                                }))
                            },
                            enumerable: !0
                        },
                        applyChange: {
                            value: p,
                            enumerable: !0
                        },
                        revertChange: {
                            value: function(e, t, n) {
                                if (e && t && n && n.kind) {
                                    var r, o, i = e;
                                    for (o = n.path.length - 1, r = 0; r < o; r++) void 0 === i[n.path[r]] && (i[n.path[r]] = {}), i = i[n.path[r]];
                                    switch (n.kind) {
                                        case "A":
                                            ! function e(t, n, r) {
                                                if (r.path && r.path.length) {
                                                    var o, i = t[n],
                                                        a = r.path.length - 1;
                                                    for (o = 0; o < a; o++) i = i[r.path[o]];
                                                    switch (r.kind) {
                                                        case "A":
                                                            e(i[r.path[o]], r.index, r.item);
                                                            break;
                                                        case "D":
                                                        case "E":
                                                            i[r.path[o]] = r.lhs;
                                                            break;
                                                        case "N":
                                                            delete i[r.path[o]]
                                                    }
                                                } else switch (r.kind) {
                                                    case "A":
                                                        e(t[n], r.index, r.item);
                                                        break;
                                                    case "D":
                                                    case "E":
                                                        t[n] = r.lhs;
                                                        break;
                                                    case "N":
                                                        t = d(t, n)
                                                }
                                                return t
                                            }(i[n.path[r]], n.index, n.item);
                                            break;
                                        case "D":
                                        case "E":
                                            i[n.path[r]] = n.lhs;
                                            break;
                                        case "N":
                                            delete i[n.path[r]]
                                    }
                                }
                            },
                            enumerable: !0
                        },
                        isConflict: {
                            value: function() {
                                return void 0 !== r
                            },
                            enumerable: !0
                        },
                        noConflict: {
                            value: function() {
                                return o && (o.forEach((function(e) {
                                    e()
                                })), o = null), g
                            },
                            enumerable: !0
                        }
                    }), g
                }()
            }.apply(t, [])) || (e.exports = r)
        }()
    }).call(this, n(159))
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = {
        level: "log",
        logger: console,
        logErrors: !0,
        collapsed: void 0,
        predicate: void 0,
        duration: !1,
        timestamp: !0,
        stateTransformer: function(e) {
            return e
        },
        actionTransformer: function(e) {
            return e
        },
        errorTransformer: function(e) {
            return e
        },
        colors: {
            title: function() {
                return "inherit"
            },
            prevState: function() {
                return "#9E9E9E"
            },
            action: function() {
                return "#03A9F4"
            },
            nextState: function() {
                return "#4CAF50"
            },
            error: function() {
                return "#F20404"
            }
        },
        diff: !1,
        diffPredicate: void 0,
        transformer: void 0
    }, e.exports = t.default
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    var r = n(52),
        o = n(46);
    t.a = function(e) {
        return "number" == typeof e || Object(o.a)(e) && "[object Number]" == Object(r.a)(e)
    }
}, , , , , , , , , , function(e, t, n) {
    "use strict";
    var r, o = this && this.__extends || (r = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        },
        function(e, t) {
            function n() {
                this.constructor = e
            }
            r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(371),
        a = n(453),
        s = n(454),
        c = function() {
            return (new Date).setFullYear((new Date).getFullYear() + 10)
        },
        u = function() {
            return (new Date).setMinutes((new Date).getMinutes() + 10)
        },
        l = /^\.\w+\.\w+/;

    function d(e) {
        return {
            type: "success",
            value: e
        }
    }

    function f(e) {
        return {
            type: "failure",
            error: e
        }
    }

    function h(e) {
        return e.then(d, f)
    }

    function g(e, t, n) {
        var r = n();
        return e > 0 ? r.catch((function(r) {
            return new Promise((function(e, n) {
                return setTimeout(e, t)
            })).then((function(r) {
                return g(e - 1, t, n)
            }))
        })) : r
    }
    var p = function() {
        function e(e, t, n, r, o, i) {
            void 0 === t && (t = []), void 0 === n && (n = null), void 0 === r && (r = 3e5), void 0 === o && (o = 0), void 0 === i && (i = function() {
                return Date.now()
            }), this.primaryStorage = e, this.secondaryStorages = t, this._logger = n, this._cacheSuccessTimeoutMillis = r, this._cacheFailureTimeoutMillis = o, this._getTime = i, this._allStorages = [e].concat(t)
        }
        return e.prototype._expireCache = function(e) {
            0 === e ? this._cacheExpireTimestamp = 0 : e > 0 && (this._cacheExpireTimestamp = this._getTime() + e)
        }, e.prototype.getValue = function() {
            var e = this;
            if (void 0 !== this._cache && (void 0 === this._cacheExpireTimestamp || this._getTime() < this._cacheExpireTimestamp)) return this._cache;
            var t = s.guard((function() {
                    return e._logger && e._logger.getValueStart(e.valueLabel())
                })),
                n = this._valueFromStorage();
            return this._cache = n, this._cacheExpireTimestamp = void 0, n.then((function(t) {
                t ? e._expireCache(e._cacheSuccessTimeoutMillis) : e._cache = void 0
            }), (function(t) {
                e._cache = void 0
            })), n.then((function(e) {
                t && s.guard((function() {
                    return t.getValueSuccess()
                }))
            }), (function(e) {
                t && s.guard((function() {
                    return t.getValueFailure(e)
                }))
            })), n
        }, e.prototype._valueFromStorage = function() {
            var e = this;
            return Promise.all(this._allStorages.map((function(t) {
                return h(t.safeGetValue(e.key()))
            }))).then((function(t) {
                var n = t[0];
                if ("failure" === n.type) return Promise.reject("getting value from primary storage '" + e.primaryStorage.name + "' has failed: " + n.error);
                var r = t.find((function(e) {
                    return "success" === e.type && void 0 !== e.value
                }));
                if (void 0 === r) return Promise.resolve(void 0);
                var o = r.value,
                    i = "success" === n.type && void 0 === n.value,
                    a = t.reduce((function(e, t, n) {
                        return "success" === t.type && t.value !== o ? e.concat(n) : e
                    }), []);
                return e.setValue(o, i, !1, a)
            }))
        }, e.prototype.setValue = function(e, t, n, r) {
            var o = this;
            void 0 === t && (t = !1), void 0 === n && (n = !1), void 0 === r && (r = Array.from(Array(this._allStorages.length).keys()));
            var i = r.map((function(t) {
                    return h(o._allStorages[t].safeSetValue(o.key(), e))
                })),
                a = Promise.all(i).then((function(r) {
                    if (t || n) {
                        var i = r[0];
                        if ("success" !== i.type) return Promise.reject("setting " + o.valueLabel() + " to primary storage has failed:\n                " + i.error)
                    }
                    var a = Promise.resolve(e);
                    return o._cache = a, o._expireCache(o._cacheSuccessTimeoutMillis), a
                }));
            return a.then((function(e) {
                t ? s.guard((function() {
                    return o._logger && o._logger.valueRecovered()
                })) : n && s.guard((function() {
                    return o._logger && o._logger.valueGenerated()
                }))
            })), a
        }, e
    }();
    t.ValueManager = p;
    var m = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.containerIdLength = 12, t.initialSetPromise = void 0, t.generatedContainerId = void 0, t.getContainerId = function() {
                return e.prototype.getValue.call(t).then((function(n) {
                    if (void 0 === n) {
                        if (t.initialSetPromise) return t.initialSetPromise;
                        var r = e.prototype.setValue.call(t, t.getOrGenerateContainerId(), !1, !0);
                        t.initialSetPromise = r;
                        var o = function() {
                            return t.initialSetPromise = void 0
                        };
                        return r.then(o, o), r
                    }
                    return n
                }))
            }, t
        }
        return o(t, e), t.prototype.key = function() {
            return "gnar_containerId"
        }, t.prototype.valueLabel = function() {
            return "ContainerId"
        }, t.prototype.getOrGenerateContainerId = function() {
            return this.generatedContainerId || (this.generatedContainerId = a.alphanumeric(this.containerIdLength)), this.generatedContainerId
        }, t
    }(p);
    t.ContainerIdManager = m;
    var b = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return o(t, e), t.prototype.key = function() {
            return "ga_clientId"
        }, t.prototype.valueLabel = function() {
            return "GAClientId"
        }, t.prototype.setId = function(t) {
            e.prototype.setValue.call(this, t, !1, !0)
        }, t
    }(p);
    t.GAClientIdManager = b;
    var v = function() {
        function e(e) {
            this.name = e
        }
        return e.prototype.safeSetValue = function(e, t) {
            var n = this;
            return this.ensureAvailable(e).then((function() {
                return n.setValue(e, t)
            }))
        }, e.prototype.safeGetValue = function(e) {
            var t = this;
            return this.ensureAvailable(e).then((function() {
                return t.getValue(e)
            })).then((function(e) {
                return "" === e ? void 0 : e
            }))
        }, e
    }();
    t.BaseStorage = v;
    var _ = function(e) {
        function t(t, n) {
            var r = e.call(this, "chromeCookie") || this;
            if (r._url = t, r._domain = n, !l.test(n)) throw new Error('Incorrect cookie domain provided.\n        Use top-level domain, starting from "."');
            return r
        }
        return o(t, e), t.prototype._hasRuntimeError = function() {
            return window.chrome && window.chrome.runtime && window.chrome.runtime.lastError
        }, t.prototype.ensureAvailable = function() {
            var e = this;
            return g(2, 1e3, (function() {
                return new Promise((function(t, n) {
                    var r = a.alphanumeric(10);
                    try {
                        window.chrome.cookies.set({
                            name: r,
                            value: r,
                            url: e._url,
                            domain: e._domain,
                            expirationDate: u() / 1e3
                        }, (function(o) {
                            var i = e._hasRuntimeError();
                            !o && i && n("chrome.cookie.set failed with an error: " + i.message), o && o.value === r ? t() : n(new Error("ChromeCookieStorage is unavailable.\n              Availability test failed.\n              Tried to set " + r + ", the result is " + (o ? o.value : o) + "."))
                        }))
                    } catch (e) {
                        n(e)
                    }
                }))
            }))
        }, t.prototype.getValue = function(e) {
            var t = this;
            return new Promise((function(n, r) {
                try {
                    window.chrome.cookies.get({
                        url: t._url,
                        name: e
                    }, (function(e) {
                        var o = t._hasRuntimeError();
                        !e && o && r("chrome.cookie.get failed with an error: " + o.message), n(e ? e.value : void 0)
                    }))
                } catch (e) {
                    r(e)
                }
            }))
        }, t.prototype.setValue = function(e, t) {
            var n = this;
            return new Promise((function(r, o) {
                try {
                    window.chrome.cookies.set({
                        name: e,
                        value: t,
                        url: n._url,
                        domain: n._domain,
                        expirationDate: c() / 1e3
                    }, (function(i) {
                        var a = n._hasRuntimeError();
                        !i && a && o("chrome.cookie.set failed with an error: " + a.message), i && i.value === t || o(new Error("setValue for " + e + " failed.\n            Tried to set " + t + ", the result is " + (i ? i.value : i) + ".")), r()
                    }))
                } catch (e) {
                    o(e)
                }
            }))
        }, t
    }(v);
    t.ChromeCookieStorage = _;
    var y = function(e) {
        function t(t, n) {
            var r = e.call(this, "webExtensionsCookie") || this;
            if (r._url = t, r._domain = n, !l.test(n)) throw new Error('Incorrect cookie domain provided.\n        Use top-level domain, starting from "."');
            return r
        }
        return o(t, e), t.prototype.ensureAvailable = function() {
            var e = this;
            return g(2, 1e3, (function() {
                return new Promise((function(t, n) {
                    var r = a.alphanumeric(10);
                    window.browser.cookies.set({
                        name: r,
                        value: r,
                        url: e._url,
                        domain: e._domain,
                        expirationDate: u() / 1e3
                    }).then((function() {
                        window.browser.cookies.get({
                            url: e._url,
                            name: r
                        }).then((function(e) {
                            e && e.value === r ? t() : n(new Error("WebExtensionsCookieStorage is unavailable.\n              Availability test failed.\n              Tried to set " + r + ", the result is " + (e ? e.value : e) + "."))
                        })).catch((function(e) {
                            n("browser.cookies.get failed with an error: " + e.message)
                        }))
                    })).catch((function(e) {
                        n("browser.cookies.set failed with an error: " + e.message)
                    }))
                }))
            }))
        }, t.prototype.getValue = function(e) {
            var t = this;
            return new Promise((function(n, r) {
                window.browser.cookies.get({
                    url: t._url,
                    name: e
                }).then((function(e) {
                    n(e ? e.value : void 0)
                })).catch((function(e) {
                    r("browser.cookies.get failed with an error: " + e.message)
                }))
            }))
        }, t.prototype.setValue = function(e, t) {
            var n = this;
            return new Promise((function(r, o) {
                window.browser.cookies.set({
                    name: e,
                    value: t,
                    url: n._url,
                    domain: n._domain,
                    expirationDate: c() / 1e3
                }).then((function(e) {
                    e && e.value === t || o(new Error("setValue failed.\n          Tried to set " + t + ", the result is " + (e ? e.value : e) + ".")), r()
                })).catch((function(e) {
                    o("browser.cookies.set failed with an error: " + e.message)
                }))
            }))
        }, t
    }(v);
    t.WebExtensionsCookieStorage = y;
    var w = function(e) {
        function t(t, n) {
            var r = e.call(this, "readonlyWebExtensionsCookie") || this;
            if (r._url = t, r._domain = n, !l.test(n)) throw new Error('Incorrect cookie domain provided.\n        Use top-level domain, starting from "."');
            return r
        }
        return o(t, e), t.prototype.ensureAvailable = function() {
            return Promise.resolve()
        }, t.prototype.getValue = function(e) {
            var t = this;
            return new Promise((function(n, r) {
                window.browser.cookies.get({
                    url: t._url,
                    name: e
                }).then((function(e) {
                    n(e ? e.value : void 0)
                })).catch((function(e) {
                    r("browser.cookies.get failed with an error: " + e.message)
                }))
            }))
        }, t.prototype.setValue = function() {
            return Promise.reject("can not set value for the readonly storage")
        }, t
    }(v);
    t.ReadonlyWebExtensionsCookieStorage = w;
    var O = function(e) {
        function t() {
            return e.call(this, "localStorage") || this
        }
        return o(t, e), t.prototype.ensureAvailable = function(e) {
            var t = e + "_test",
                n = a.alphanumeric(10);
            return new Promise((function(e, r) {
                localStorage.setItem(t, n), localStorage.getItem(t) !== n ? r(new Error("LocalStorage is unavailable.\n          Availability test failed.\n          Tried to set " + n + ",\n          the result is " + localStorage.getItem(t) + ".")) : e(), localStorage.removeItem(t)
            }))
        }, t.prototype.getValue = function(e) {
            var t = localStorage.getItem(e);
            return new Promise((function(e, n) {
                return e(null === t ? void 0 : t)
            }))
        }, t.prototype.setValue = function(e, t) {
            return new Promise((function(n, r) {
                localStorage.setItem(e, t), n()
            }))
        }, t
    }(v);
    t.LocalStorage = O;
    var j = function(e) {
        function t(t) {
            var n = e.call(this, "cookie") || this;
            if (n._domain = t, !l.test(t)) throw new Error('Incorrect cookie domain provided.\n        Use top-level domain, starting from "."');
            return n
        }
        return o(t, e), t.prototype._getCookieOptions = function() {
            return {
                path: "/",
                domain: this._domain,
                expires: new Date(c())
            }
        }, t.prototype.ensureAvailable = function() {
            var e = a.alphanumeric(10);
            return new Promise((function(t, n) {
                i.default(e, e), i.default(e) !== e ? n(new Error("CookieStorage is unavailable.\n          Availability test failed.\n          Tried to set " + e + ", the result is " + i.default(e) + ".")) : t(), i.default(e, null)
            }))
        }, t.prototype.getValue = function(e) {
            return new Promise((function(t, n) {
                return t(i.default(e))
            }))
        }, t.prototype.setValue = function(e, t) {
            var n = this;
            return new Promise((function(r, o) {
                i.default(e, t, n._getCookieOptions()), r()
            }))
        }, t
    }(v);
    t.CookieStorage = j;
    var E = function(e) {
        function t(t, n) {
            var r = e.call(this, "backend") || this;
            return r._fetch = t, r._url = n, r._baseUrl = n + "/cookies", r
        }
        return o(t, e), t.prototype.ensureAvailable = function(e) {
            var t = this,
                n = e + "_test",
                r = a.alphanumeric(10),
                o = (u() - Date.now()) / 1e3,
                i = this._baseUrl + "?name=" + n,
                s = i + "&value=" + r + "&maxAge=" + o;
            return this._doSend(s, "post").then((function(e) {
                if (!e.ok) throw new Error("BackendStorage is unavailable.\n          Availability test failed.\n          Tried to set " + r + ". Request failed.\n        ")
            })).then((function() {
                return t._doSend(i, "get").then((function(e) {
                    if (e.ok) return e.json().then((function(e) {
                        if (e.value !== r) throw new Error("BackendStorage is unavailable.\n                Availability test failed.\n                Tried to get " + n + " from server.\n                Got " + e.value + " instead of " + r + ".")
                    }));
                    throw new Error("BackendStorage is unavailable.\n            Availability test failed.\n            Tried to get " + n + " from server. Request failed.")
                }))
            }))
        }, t.prototype._doSend = function(e, t) {
            return this._fetch(e, {
                credentials: "include",
                method: t
            })
        }, t.prototype.getValue = function(e) {
            var t = this._baseUrl + "?name=" + e;
            return this._doSend(t, "get").then((function(e) {
                return e.json()
            })).then((function(e) {
                return e.value
            }))
        }, t.prototype.setValue = function(e, t) {
            var n = (c() - Date.now()) / 1e3,
                r = this._baseUrl + "?name=" + e + "&value=" + t + "&maxAge=" + n;
            return this._doSend(r, "post").then((function() {}))
        }, t
    }(v);
    t.BackendStorage = E;
    var k = function(e) {
        function t(t) {
            void 0 === t && (t = void 0);
            var n = e.call(this, "memory") || this;
            return n._value = t, n
        }
        return o(t, e), t.prototype.ensureAvailable = function() {
            return Promise.resolve()
        }, t.prototype.getValue = function(e) {
            return Promise.resolve(this._value)
        }, t.prototype.setValue = function(e, t) {
            return this._value = t, Promise.resolve()
        }, t
    }(v);
    t.MemoryStorage = k
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
            var e, t, n, r, o, i;
            e = window, t = document, n = "script", r = "ga", e.GoogleAnalyticsObject = r, e.ga = e.ga || function() {
                (e.ga.q = e.ga.q || []).push(arguments)
            }, e.ga.l = (new Date).getTime(), o = t.createElement(n), i = t.getElementsByTagName(n)[0], o.async = 1, o.src = "//www.google-analytics.com/analytics.js", i.parentNode.insertBefore(o, i)
        },
        o = function() {
            function e(e, t, n) {
                void 0 === n && (n = !0);
                var o = this;
                this._isReady = !1, this._gaQueue = [], n && r(), this._clientId = t.getValue().then((function(n) {
                    return n ? (ga("create", e, "auto", {
                        clientId: n
                    }), n) : (ga("create", e, "auto"), new Promise((function(e, n) {
                        return ga((function(r) {
                            if (r) {
                                var o = r.get("clientId");
                                t.setId(o), e(o)
                            } else n(new Error("No default google analytics tracker found after analytics.js was ready"))
                        }))
                    })))
                })), this._clientId.then((function(e) {
                    for (; o._gaQueue.length > 0;) ga.apply(null, o._gaQueue.shift());
                    o._isReady = !0
                }))
            }
            return e.prototype.setUserId = function(e) {
                /^-/.test(e) || this.ga("set", "userId", e)
            }, e.prototype.ga = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                this._isReady ? ga.apply(null, arguments) : this._gaQueue.push(arguments)
            }, e.prototype.sendPageview = function(e) {
                void 0 === e && (e = document.location.pathname);
                var t = document.location.href;
                i(t, "utm_medium", ["navigation", "store", "internal", "email", "content", "social", "referralProgram"]) && (t = a(t, "utm_")), this.ga("set", "location", t), this.ga("send", "pageview", e)
            }, e.prototype.getClientId = function() {
                return this._clientId
            }, e
        }();

    function i(e, t, n) {
        var r = "(" + n.map((function(e) {
            return "(" + e + ")"
        })).join("|") + ")";
        return new RegExp("^[^?#]*(\\?|(\\?[^#]*?&))" + t + "=" + r + "(([&#].*)|$)").test(e)
    }

    function a(e, t) {
        var n = new RegExp("^([^?#]*(\\?|(\\?[^#]*?&)))(" + t + "[^?&#=]*=[^&#]*)(.*)$").exec(e);
        return n ? a(n[1] + n[5], t) : e
    }
    t.GoogleAnalyticsClient = o, t.hasParams = i, t.removeParams = a
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return r
    }));
    const r = /^http(s?)\:\/\/docs\.google\.com\/document/
}, , , , , , , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.asEffect = t.SELECT_ARG_ERROR = t.INVALID_PATTERN = t.CANCEL_ARG_ERROR = t.JOIN_ARG_ERROR = t.FORK_ARG_ERROR = t.CALL_FUNCTION_ARG_ERROR = void 0;
    var r = function(e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return function(e, t) {
            var n = [],
                r = !0,
                o = !1,
                i = void 0;
            try {
                for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
            } catch (e) {
                o = !0, i = e
            } finally {
                try {
                    !r && s.return && s.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    };
    t.matcher = function(e) {
        return ("*" === e ? O.wildcard : o.is.array(e) ? O.array : o.is.func(e) ? O.predicate : O.default)(e)
    }, t.take = function(e) {
        if (arguments.length > 0 && o.is.undef(e)) throw new Error(u);
        return w(f, o.is.undef(e) ? "*" : e)
    }, t.put = function(e) {
        return w(h, e)
    }, t.race = function(e) {
        return w(g, e)
    }, t.call = function(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return w(p, j(e, n))
    }, t.apply = function(e, t) {
        var n = arguments.length <= 2 || void 0 === arguments[2] ? [] : arguments[2];
        return w(p, j({
            context: e,
            fn: t
        }, n))
    }, t.cps = function(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return w(m, j(e, n))
    }, t.fork = function(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return w(b, j(e, n))
    }, t.join = function(e) {
        if (!E(e)) throw new Error(s);
        return w(v, e)
    }, t.cancel = function(e) {
        if (!E(e)) throw new Error(c);
        return w(_, e)
    }, t.select = function(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return 0 === arguments.length ? e = o.ident : (0, o.check)(e, o.is.func, l), w(y, {
            selector: e,
            args: n
        })
    };
    var o = n(455);

    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var a = t.CALL_FUNCTION_ARG_ERROR = "call/cps/fork first argument must be a function, an array [context, function] or an object {context, fn}",
        s = (t.FORK_ARG_ERROR = "fork first argument must be a generator function or an iterator", t.JOIN_ARG_ERROR = "join argument must be a valid task (a result of a fork)"),
        c = t.CANCEL_ARG_ERROR = "cancel argument must be a valid task (a result of a fork)",
        u = t.INVALID_PATTERN = "Invalid pattern passed to `take` (HINT: check if you didn't mispell a constant)",
        l = t.SELECT_ARG_ERROR = "select first argument must be a function",
        d = (0, o.sym)("IO"),
        f = "TAKE",
        h = "PUT",
        g = "RACE",
        p = "CALL",
        m = "CPS",
        b = "FORK",
        v = "JOIN",
        _ = "CANCEL",
        y = "SELECT",
        w = function(e, t) {
            var n;
            return i(n = {}, d, !0), i(n, e, t), n
        },
        O = {
            wildcard: function() {
                return o.kTrue
            },
            default: function(e) {
                return function(t) {
                    return t.type === e
                }
            },
            array: function(e) {
                return function(t) {
                    return e.some((function(e) {
                        return e === t.type
                    }))
                }
            },
            predicate: function(e) {
                return function(t) {
                    return e(t)
                }
            }
        };

    function j(e, t) {
        (0, o.check)(e, o.is.notUndef, a);
        var n = null;
        if (o.is.array(e)) {
            var i = r(e, 2);
            n = i[0], e = i[1]
        } else if (e.fn) {
            var s = e;
            n = s.context, e = s.fn
        }
        return (0, o.check)(e, o.is.func, a), {
            context: n,
            fn: e,
            args: t
        }
    }
    var E = function(e) {
        return e[o.TASK]
    };
    t.asEffect = {
        take: function(e) {
            return e && e[d] && e[f]
        },
        put: function(e) {
            return e && e[d] && e[h]
        },
        race: function(e) {
            return e && e[d] && e[g]
        },
        call: function(e) {
            return e && e[d] && e[p]
        },
        cps: function(e) {
            return e && e[d] && e[m]
        },
        fork: function(e) {
            return e && e[d] && e[b]
        },
        join: function(e) {
            return e && e[d] && e[v]
        },
        cancel: function(e) {
            return e && e[d] && e[_]
        },
        select: function(e) {
            return e && e[d] && e[y]
        }
    }
}, function(e, t, n) {
    "use strict";

    function r(e, t, n) {
        var r = "SagaCancellationException; type: " + e + ", saga: " + t + ", origin: " + n;
        this.name = "SagaCancellationException", this.message = r, this.type = e, this.saga = t, this.origin = n, this.stack = (new Error).stack
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = r, r.prototype = Object.create(Error.prototype), r.prototype.constructor = r
}, , function(e, t, n) {
    "use strict";
    var r;
    n.d(t, "a", (function() {
            return r
        })),
        function(e) {
            e.inactive = "inactive", e.active = "active", e.accepted = "accepted"
        }(r || (r = {}))
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.MANUAL_CANCEL = t.RACE_AUTO_CANCEL = t.PARALLEL_AUTO_CANCEL = t.CANCEL = t.undefindInputError = t.NOT_ITERATOR_ERROR = void 0, t.default = function e(t) {
        var n = arguments.length <= 1 || void 0 === arguments[1] ? function() {
                return o.noop
            } : arguments[1],
            r = arguments.length <= 2 || void 0 === arguments[2] ? o.noop : arguments[2],
            m = arguments.length <= 3 || void 0 === arguments[3] ? o.noop : arguments[3],
            b = arguments.length <= 4 || void 0 === arguments[4] ? o.noop : arguments[4],
            v = arguments.length <= 5 || void 0 === arguments[5] ? 0 : arguments[5],
            _ = arguments.length <= 6 || void 0 === arguments[6] ? "anonymous" : arguments[6],
            y = arguments[7];
        (0, o.check)(t, o.is.iterator, u);
        var w = l(_),
            O = [],
            j = (0, o.deferred)(),
            E = n((function(e) {
                if (void 0 === e) throw w;
                for (var t = 0; t < O.length; t++) {
                    var n = O[t];
                    n.match(e) && (O = [], n.resolve(e))
                }
            }));
        I.cancel = o.noop;
        var k = function(e, t, n, r, i) {
            var a;
            return c(a = {}, o.TASK, !0), c(a, "id", e), c(a, "name", t), c(a, "done", r), c(a, "forked", i), c(a, "cancel", (function(e) {
                e instanceof s.default || (e = new s.default(g, t, e)), r[d](e)
            })), c(a, "isRunning", (function() {
                return n._isRunning
            })), c(a, "result", (function() {
                return n._result
            })), c(a, "error", (function() {
                return n._error
            })), a
        }(v, _, t, j.promise, y);
        return k.done[d] = function(e) {
            var t = e.type,
                n = e.origin;
            I.cancel(new s.default(t, _, n))
        }, t._isRunning = !0, I(), k;

        function S(e, t, n) {
            "undefined" == typeof window ? console.log("redux-saga " + e + ": " + t + "\n" + n.stack) : console[e].call(console, t, n)
        }

        function I(e, n) {
            if (!t._isRunning) throw new Error("Trying to resume an already finished generator");
            try {
                var r = e ? t.throw(e) : t.next(n);
                r.done ? C(r.value) : A(r.value, v, "", I)
            } catch (e) {
                C(e, !0), e instanceof s.default ? o.isDev && S("warn", _ + ": uncaught", e) : S("error", _ + ": uncaught", e)
            }
        }

        function C(e, n) {
            t._isRunning = !1, n ? (t._error = e, j.reject(e)) : (t._result = e, j.resolve(e)), E()
        }

        function A(t, u) {
            var l = arguments.length <= 2 || void 0 === arguments[2] ? "" : arguments[2],
                v = arguments[3],
                y = p();
            b(a.effectTriggered(y, u, l, t));
            var w = void 0;

            function j(e, t) {
                w || (w = !0, v.cancel = o.noop, b(e ? a.effectRejected(y, e) : a.effectResolved(y, t)), v(e, t))
            }
            j.cancel = o.noop, v.cancel = function(e) {
                if (!w) {
                    w = !0;
                    try {
                        j.cancel(e)
                    } catch (e) {}
                    j.cancel = o.noop, v(e), b(a.effectRejected(y, e))
                }
            };
            var E = void 0;
            return o.is.promise(t) ? N(t, j) : o.is.iterator(t) ? x(t, y, _, j) : o.is.array(t) ? function(e, t, n) {
                if (e.length) {
                    var r = 0,
                        i = void 0,
                        a = Array(e.length),
                        c = e.map((function(e, t) {
                            var c = function(e, o) {
                                if (!i)
                                    if (e) {
                                        try {
                                            n.cancel(new s.default(f, _, _))
                                        } catch (e) {}
                                        n(e)
                                    } else a[t] = o, ++r === a.length && (i = !0, n(null, a))
                            };
                            return c.cancel = o.noop, c
                        }));
                    n.cancel = function(e) {
                        i || (i = !0, c.forEach((function(t) {
                            return t.cancel(e)
                        })))
                    }, e.forEach((function(e, n) {
                        return A(e, t, n, c[n])
                    }))
                } else n(null, [])
            }(t, y, j) : o.is.notUndef(E = i.asEffect.take(t)) ? function(e, t) {
                var n = {
                    match: (0, i.matcher)(e),
                    pattern: e,
                    resolve: function(e) {
                        return t(null, e)
                    }
                };
                O.push(n), t.cancel = function() {
                    return (0, o.remove)(O, n)
                }
            }(E, j) : o.is.notUndef(E = i.asEffect.put(t)) ? function(e, t) {
                (0, o.asap)((function() {
                    return t(null, r(e))
                }))
            }(E, j) : o.is.notUndef(E = i.asEffect.race(t)) ? function(e, t, n) {
                var r = void 0,
                    i = Object.keys(e),
                    a = {};
                i.forEach((function(e) {
                    var t = function(t, o) {
                        if (!r)
                            if (t) {
                                try {
                                    n.cancel(new s.default(h, _, _))
                                } catch (t) {}
                                n(c({}, e, t))
                            } else {
                                try {
                                    n.cancel(new s.default(h, _, _))
                                } catch (t) {}
                                r = !0, n(null, c({}, e, o))
                            }
                    };
                    t.cancel = o.noop, a[e] = t
                })), n.cancel = function(e) {
                    r || (r = !0, i.forEach((function(t) {
                        return a[t].cancel(e)
                    })))
                }, i.forEach((function(n) {
                    return A(e[n], t, n, a[n])
                }))
            }(E, y, j) : o.is.notUndef(E = i.asEffect.call(t)) ? function(e, t, n) {
                var r = e.context,
                    i = e.fn,
                    a = e.args,
                    s = void 0;
                try {
                    s = i.apply(r, a)
                } catch (e) {
                    return n(e)
                }
                return o.is.promise(s) ? N(s, n) : o.is.iterator(s) ? x(s, t, i.name, n) : n(null, s)
            }(E, y, j) : o.is.notUndef(E = i.asEffect.cps(t)) ? function(e, t) {
                var n = e.context,
                    r = e.fn,
                    o = e.args;
                try {
                    r.apply(n, o.concat(t))
                } catch (e) {
                    return t(e)
                }
            }(E, j) : o.is.notUndef(E = i.asEffect.fork(t)) ? function(t, i, a) {
                var s, c = t.context,
                    u = t.fn,
                    l = t.args,
                    d = void 0,
                    f = void 0;
                try {
                    d = u.apply(c, l)
                } catch (e) {
                    f = f
                }
                s = o.is.iterator(d) ? d : (f ? regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                throw f;
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e, this)
                })) : regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, d;
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), e, this)
                })))(), a(null, e(s, n, r, m, b, i, u.name, !0))
            }(E, y, j) : o.is.notUndef(E = i.asEffect.join(t)) ? function(e, t) {
                N(e.done, t)
            }(E, j) : o.is.notUndef(E = i.asEffect.cancel(t)) ? function(e, t) {
                e.done[d](new s.default(g, _, _)), t()
            }(E, j) : o.is.notUndef(E = i.asEffect.select(t)) ? function(e, t) {
                var n = e.selector,
                    r = e.args;
                try {
                    var o = n.apply(void 0, [m()].concat(function(e) {
                        if (Array.isArray(e)) {
                            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                            return n
                        }
                        return Array.from(e)
                    }(r)));
                    t(null, o)
                } catch (e) {
                    t(e)
                }
            }(E, j) : j(null, t)
        }

        function N(e, t) {
            var n = e[d];
            "function" == typeof n && (t.cancel = n), e.then((function(e) {
                return t(null, e)
            }), (function(e) {
                return t(e)
            }))
        }

        function x(t, o, i, a) {
            N(e(t, n, r, m, b, o, i).done, a)
        }
    };
    var r, o = n(455),
        i = n(572),
        a = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        }(n(670)),
        s = (r = n(573)) && r.__esModule ? r : {
            default: r
        };

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var u = t.NOT_ITERATOR_ERROR = "proc first argument (Saga function result) must be an iterator",
        l = t.undefindInputError = function(e) {
            return "\n  " + e + " saga was provided with an undefined input action\n  Hints :\n  - check that your Action Creator returns a non undefined value\n  - if the Saga was started using runSaga, check that your subscribe source provides the action to its listeners\n"
        },
        d = t.CANCEL = (0, o.sym)("@@redux-saga/cancelPromise"),
        f = t.PARALLEL_AUTO_CANCEL = "PARALLEL_AUTO_CANCEL",
        h = t.RACE_AUTO_CANCEL = "RACE_AUTO_CANCEL",
        g = t.MANUAL_CANCEL = "MANUAL_CANCEL",
        p = (0, o.autoInc)()
}, function(e, t, n) {
    "use strict";

    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.effectTriggered = function(e, t, n, a) {
        var s;
        return r(s = {}, o, !0), r(s, "type", i), r(s, "effectId", e), r(s, "parentEffectId", t), r(s, "label", n), r(s, "effect", a), s
    }, t.effectResolved = function(e, t) {
        var n;
        return r(n = {}, o, !0), r(n, "type", a), r(n, "effectId", e), r(n, "result", t), n
    }, t.effectRejected = function(e, t) {
        var n;
        return r(n = {}, o, !0), r(n, "type", s), r(n, "effectId", e), r(n, "error", t), n
    };
    var o = t.MONITOR_ACTION = "MONITOR_ACTION",
        i = t.EFFECT_TRIGGERED = "EFFECT_TRIGGERED",
        a = t.EFFECT_RESOLVED = "EFFECT_RESOLVED",
        s = t.EFFECT_REJECTED = "EFFECT_REJECTED"
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function() {
        var e = [];
        return {
            subscribe: function(t) {
                return e.push(t),
                    function() {
                        return (0, r.remove)(e, t)
                    }
            },
            emit: function(t) {
                e.slice().forEach((function(e) {
                    return e(t)
                }))
            }
        }
    };
    var r = n(455)
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.select = t.cancel = t.join = t.fork = t.cps = t.apply = t.call = t.race = t.put = t.take = void 0;
    var r = n(572);
    t.take = r.take, t.put = r.put, t.race = r.race, t.call = r.call, t.apply = r.apply, t.cps = r.cps, t.fork = r.fork, t.join = r.join, t.cancel = r.cancel, t.select = r.select
}, , , , , , , , , , , , , , , , function(e, t) {
    ! function() {
        "use strict";
        if (!self.fetch) {
            o.prototype.append = function(e, t) {
                e = n(e), t = r(t);
                var o = this.map[e];
                o || (o = [], this.map[e] = o), o.push(t)
            }, o.prototype.delete = function(e) {
                delete this.map[n(e)]
            }, o.prototype.get = function(e) {
                var t = this.map[n(e)];
                return t ? t[0] : null
            }, o.prototype.getAll = function(e) {
                return this.map[n(e)] || []
            }, o.prototype.has = function(e) {
                return this.map.hasOwnProperty(n(e))
            }, o.prototype.set = function(e, t) {
                this.map[n(e)] = [r(t)]
            }, o.prototype.forEach = function(e, t) {
                Object.getOwnPropertyNames(this.map).forEach((function(n) {
                    this.map[n].forEach((function(r) {
                        e.call(t, r, n, this)
                    }), this)
                }), this)
            };
            var e = {
                    blob: "FileReader" in self && "Blob" in self && function() {
                        try {
                            return new Blob, !0
                        } catch (e) {
                            return !1
                        }
                    }(),
                    formData: "FormData" in self
                },
                t = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            c.call(u.prototype), c.call(f.prototype), self.Headers = o, self.Request = u, self.Response = f, self.fetch = function(t, n) {
                var r;
                return r = u.prototype.isPrototypeOf(t) && !n ? t : new u(t, n), new Promise((function(t, n) {
                    var o = new XMLHttpRequest;
                    o.onload = function() {
                        var e = 1223 === o.status ? 204 : o.status;
                        if (e < 100 || e > 599) n(new TypeError("Network request failed"));
                        else {
                            var r = {
                                    status: e,
                                    statusText: o.statusText,
                                    headers: d(o),
                                    url: "responseURL" in o ? o.responseURL : /^X-Request-URL:/m.test(o.getAllResponseHeaders()) ? o.getResponseHeader("X-Request-URL") : void 0
                                },
                                i = "response" in o ? o.response : o.responseText;
                            t(new f(i, r))
                        }
                    }, o.onerror = function() {
                        n(new TypeError("Network request failed"))
                    }, o.open(r.method, r.url, !0), "include" === r.credentials && (o.withCredentials = !0), "responseType" in o && e.blob && (o.responseType = "blob"), r.headers.forEach((function(e, t) {
                        o.setRequestHeader(t, e)
                    })), o.send(void 0 === r._bodyInit ? null : r._bodyInit)
                }))
            }, self.fetch.polyfill = !0
        }

        function n(e) {
            if ("string" != typeof e && (e = e.toString()), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
            return e.toLowerCase()
        }

        function r(e) {
            return "string" != typeof e && (e = e.toString()), e
        }

        function o(e) {
            this.map = {}, e instanceof o ? e.forEach((function(e, t) {
                this.append(t, e)
            }), this) : e && Object.getOwnPropertyNames(e).forEach((function(t) {
                this.append(t, e[t])
            }), this)
        }

        function i(e) {
            if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
            e.bodyUsed = !0
        }

        function a(e) {
            return new Promise((function(t, n) {
                e.onload = function() {
                    t(e.result)
                }, e.onerror = function() {
                    n(e.error)
                }
            }))
        }

        function s(e) {
            var t = new FileReader;
            return t.readAsArrayBuffer(e), a(t)
        }

        function c() {
            return this.bodyUsed = !1, this._initBody = function(t) {
                if (this._bodyInit = t, "string" == typeof t) this._bodyText = t;
                else if (e.blob && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t;
                else if (e.formData && FormData.prototype.isPrototypeOf(t)) this._bodyFormData = t;
                else {
                    if (t) throw new Error("unsupported BodyInit type");
                    this._bodyText = ""
                }
            }, e.blob ? (this.blob = function() {
                var e = i(this);
                if (e) return e;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]))
            }, this.arrayBuffer = function() {
                return this.blob().then(s)
            }, this.text = function() {
                var e, t, n = i(this);
                if (n) return n;
                if (this._bodyBlob) return e = this._bodyBlob, (t = new FileReader).readAsText(e), a(t);
                if (this._bodyFormData) throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText)
            }) : this.text = function() {
                return i(this) || Promise.resolve(this._bodyText)
            }, e.formData && (this.formData = function() {
                return this.text().then(l)
            }), this.json = function() {
                return this.text().then(JSON.parse)
            }, this
        }

        function u(e, n) {
            var r, i;
            if (n = n || {}, this.url = e, this.credentials = n.credentials || "omit", this.headers = new o(n.headers), this.method = (i = (r = n.method || "GET").toUpperCase(), t.indexOf(i) > -1 ? i : r), this.mode = n.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n.body) throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(n.body)
        }

        function l(e) {
            var t = new FormData;
            return e.trim().split("&").forEach((function(e) {
                if (e) {
                    var n = e.split("="),
                        r = n.shift().replace(/\+/g, " "),
                        o = n.join("=").replace(/\+/g, " ");
                    t.append(decodeURIComponent(r), decodeURIComponent(o))
                }
            })), t
        }

        function d(e) {
            var t = new o;
            return e.getAllResponseHeaders().trim().split("\n").forEach((function(e) {
                var n = e.trim().split(":"),
                    r = n.shift().trim(),
                    o = n.join(":").trim();
                t.append(r, o)
            })), t
        }

        function f(e, t) {
            t || (t = {}), this._initBody(e), this.type = "default", this.url = null, this.status = t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = t.statusText, this.headers = t.headers instanceof o ? t.headers : new o(t.headers), this.url = t.url || ""
        }
    }()
}, function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "startSendingBgLogsToActiveTab", (function() {
        return s
    }));
    var r = n(22);
    const o = ["log", "info", "warn", "error", "time", "timeEnd", "debug"],
        i = window,
        a = console;

    function s() {
        const e = {};
        o.forEach(t => {
            e[t] = (...e) => {
                if ("toFocussed not allowed for popup when it open like regular tab" !== e[0]) try {
                    r.emitFocusedTab("bg-log", {
                        method: t,
                        args: e
                    })
                } catch (e) {}
                a[t](...e)
            }
        }), i.console = e
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.NOT_ITERATOR_ERROR = void 0, t.storeIO = function(e) {
        if ((0, r.warnDeprecated)("storeIO is deprecated, to run Saga dynamically, use 'run' method of the middleware"), e[c]) return e[c];
        var t = (0, i.default)(),
            n = e.dispatch;
        return e.dispatch = function(e) {
            var r = n(e);
            return t.emit(e), r
        }, e[c] = {
            subscribe: t.subscribe,
            dispatch: e.dispatch,
            getState: e.getState
        }, e[c]
    }, t.runSaga = function(e, t) {
        var n = t.subscribe,
            i = t.dispatch,
            a = t.getState,
            c = arguments.length <= 2 || void 0 === arguments[2] ? r.noop : arguments[2];
        return (0, r.check)(e, r.is.iterator, s), (0, o.default)(e, n, i, a, c)
    };
    var r = n(455),
        o = a(n(669)),
        i = a(n(705));

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var s = t.NOT_ITERATOR_ERROR = "runSaga must be called on an iterator",
        c = (0, r.sym)("IO")
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function(e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return function(e, t) {
            var n = [],
                r = !0,
                o = !1,
                i = void 0;
            try {
                for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
            } catch (e) {
                o = !0, i = e
            } finally {
                try {
                    !r && s.return && s.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    };
    t.takeEvery = function(e, t) {
        for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) r[o - 2] = arguments[o];
        return l({
            take: [{
                done: !1,
                value: (0, a.take)(e)
            }, "fork"],
            fork: [function(e) {
                return {
                    done: !1,
                    value: a.fork.apply(void 0, [t].concat(r, [e]))
                }
            }, "take"]
        }, "take", "takeEvery(" + e + ", " + t.name + ")")
    }, t.takeLatest = function(e, t) {
        for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) r[o - 2] = arguments[o];
        var i = {
                done: !1,
                value: (0, a.take)(e)
            },
            s = void 0,
            c = void 0;
        return l({
            take: [i, function() {
                return s ? "cancel" : "fork"
            }, function(e) {
                return c = e
            }],
            cancel: [function() {
                return {
                    done: !1,
                    value: (0, a.cancel)(s)
                }
            }, "fork"],
            fork: [function() {
                return {
                    done: !1,
                    value: a.fork.apply(void 0, [t].concat(r, [c]))
                }
            }, "take", function(e) {
                return s = e
            }]
        }, "take", "takeLatest(" + e + ", " + t.name + ")")
    };
    var o, i = n(455),
        a = n(572),
        s = (o = n(573)) && o.__esModule ? o : {
            default: o
        },
        c = function(e, t) {
            return i.is.func(e) ? e(t) : e
        },
        u = {
            done: !0
        };

    function l(e, t) {
        var n = arguments.length <= 2 || void 0 === arguments[2] ? "iterator" : arguments[2],
            o = void 0,
            i = void 0;

        function a(n, a) {
            if (o) return u;
            if (a) {
                if (o = !0, !(a instanceof s.default)) throw a;
                return u
            }
            i && i(n);
            var l = r(e[t], 3),
                d = l[0],
                f = l[1],
                h = l[2];
            return i = h, t = c(f, n), c(d, n)
        }
        var l = {
            name: n,
            next: a,
            throw: function(e) {
                return a(null, e)
            }
        };
        return "undefined" != typeof Symbol && (l[Symbol.iterator] = function() {
            return l
        }), l
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.GET_STATE_DEPRECATED_WARNING = t.RUN_SAGA_DYNAMIC_ERROR = t.sagaArgError = void 0, t.default = function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        var c = void 0;

        function f(e) {
            var n = e.getState,
                s = e.dispatch,
                u = (0, i.default)(),
                l = r.isDev ? function(e) {
                    return (0, r.asap)((function() {
                        return s(e)
                    }))
                } : void 0,
                f = function() {
                    return (0, r.warnDeprecated)(d), n()
                };

            function h(e) {
                for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
                return (0, o.default)(e.apply(void 0, [f].concat(r)), u.subscribe, s, n, l, 0, e.name)
            }
            return c = h, t.forEach(h),
                function(e) {
                    return function(t) {
                        var n = e(t);
                        return t[a.MONITOR_ACTION] || u.emit(t), n
                    }
                }
        }
        return t.forEach((function(e, t) {
            return (0, r.check)(e, r.is.func, u("createSagaMiddleware", t, e))
        })), f.run = function(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
            if (!c) throw new Error(l);
            (0, r.check)(e, r.is.func, u("sagaMiddleware.run", 0, e));
            var i = c.apply(void 0, [e].concat(n));
            return i.done.catch((function(e) {
                if (!(e instanceof s.default)) throw e
            })), i
        }, f
    };
    var r = n(455),
        o = c(n(669)),
        i = c(n(705)),
        a = n(670),
        s = c(n(573));

    function c(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var u = t.sagaArgError = function(e, t, n) {
            return "\n  " + e + " can only be called on Generator functions\n  Argument " + n + " at position " + t + " is not function!\n"
        },
        l = t.RUN_SAGA_DYNAMIC_ERROR = "Before running a Saga dynamically using middleware.run, you must mount the Saga middleware on the Store using applyMiddleware",
        d = t.GET_STATE_DEPRECATED_WARNING = "\n  Using the 'getState' param of Sagas to access the state is deprecated since 0.9.1\n  To access the Store's state use 'yield select()' instead\n  For more infos see http://yelouafi.github.io/redux-saga/docs/api/index.html#selectselector-args\n"
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.monitorActions = t.createMockTask = t.MANUAL_CANCEL = t.PARALLEL_AUTO_CANCEL = t.RACE_AUTO_CANCEL = t.CANCEL = t.asap = t.arrayOfDeffered = t.deferred = t.asEffect = t.is = t.noop = t.TASK = void 0;
    var r = n(455),
        o = n(572),
        i = n(669),
        a = n(728),
        s = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        }(n(670));
    t.TASK = r.TASK, t.noop = r.noop, t.is = r.is, t.asEffect = o.asEffect, t.deferred = r.deferred, t.arrayOfDeffered = r.arrayOfDeffered, t.asap = r.asap, t.CANCEL = i.CANCEL, t.RACE_AUTO_CANCEL = i.RACE_AUTO_CANCEL, t.PARALLEL_AUTO_CANCEL = i.PARALLEL_AUTO_CANCEL, t.MANUAL_CANCEL = i.MANUAL_CANCEL, t.createMockTask = a.createMockTask, t.monitorActions = s
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.createMockTask = function() {
        var e, t = !0,
            n = void 0,
            i = void 0;
        return o(e = {}, r.TASK, !0), o(e, "isRunning", (function() {
            return t
        })), o(e, "result", (function() {
            return n
        })), o(e, "error", (function() {
            return i
        })), o(e, "setRunning", (function(e) {
            return t = e
        })), o(e, "setResult", (function(e) {
            return n = e
        })), o(e, "setError", (function(e) {
            return i = e
        })), e
    };
    var r = n(455);

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
}, function(e, t, n) {
    (function(t) {
        var n;
        e.exports = function e(t, r, o) {
            function i(s, c) {
                if (!r[s]) {
                    if (!t[s]) {
                        if (!c && "function" == typeof n && n) return n(s, !0);
                        if (a) return a(s, !0);
                        var u = new Error("Cannot find module '" + s + "'");
                        throw u.code = "MODULE_NOT_FOUND", u
                    }
                    var l = r[s] = {
                        exports: {}
                    };
                    t[s][0].call(l.exports, (function(e) {
                        return i(t[s][1][e] || e)
                    }), l, l.exports, e, t, r, o)
                }
                return r[s].exports
            }
            for (var a = "function" == typeof n && n, s = 0; s < o.length; s++) i(o[s]);
            return i
        }({
            1: [function(e, n, r) {
                (function(e) {
                    "use strict";
                    var t, r, o = e.MutationObserver || e.WebKitMutationObserver;
                    if (o) {
                        var i = 0,
                            a = new o(l),
                            s = e.document.createTextNode("");
                        a.observe(s, {
                            characterData: !0
                        }), t = function() {
                            s.data = i = ++i % 2
                        }
                    } else if (e.setImmediate || void 0 === e.MessageChannel) t = "document" in e && "onreadystatechange" in e.document.createElement("script") ? function() {
                        var t = e.document.createElement("script");
                        t.onreadystatechange = function() {
                            l(), t.onreadystatechange = null, t.parentNode.removeChild(t), t = null
                        }, e.document.documentElement.appendChild(t)
                    } : function() {
                        setTimeout(l, 0)
                    };
                    else {
                        var c = new e.MessageChannel;
                        c.port1.onmessage = l, t = function() {
                            c.port2.postMessage(0)
                        }
                    }
                    var u = [];

                    function l() {
                        var e, t;
                        r = !0;
                        for (var n = u.length; n;) {
                            for (t = u, u = [], e = -1; ++e < n;) t[e]();
                            n = u.length
                        }
                        r = !1
                    }
                    n.exports = function(e) {
                        1 !== u.push(e) || r || t()
                    }
                }).call(this, void 0 !== t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {}],
            2: [function(e, t, n) {
                "use strict";
                var r = e(1);

                function o() {}
                var i = {},
                    a = ["REJECTED"],
                    s = ["FULFILLED"],
                    c = ["PENDING"];

                function u(e) {
                    if ("function" != typeof e) throw new TypeError("resolver must be a function");
                    this.state = c, this.queue = [], this.outcome = void 0, e !== o && h(this, e)
                }

                function l(e, t, n) {
                    this.promise = e, "function" == typeof t && (this.onFulfilled = t, this.callFulfilled = this.otherCallFulfilled), "function" == typeof n && (this.onRejected = n, this.callRejected = this.otherCallRejected)
                }

                function d(e, t, n) {
                    r((function() {
                        var r;
                        try {
                            r = t(n)
                        } catch (t) {
                            return i.reject(e, t)
                        }
                        r === e ? i.reject(e, new TypeError("Cannot resolve promise with itself")) : i.resolve(e, r)
                    }))
                }

                function f(e) {
                    var t = e && e.then;
                    if (e && ("object" == typeof e || "function" == typeof e) && "function" == typeof t) return function() {
                        t.apply(e, arguments)
                    }
                }

                function h(e, t) {
                    var n = !1;

                    function r(t) {
                        n || (n = !0, i.reject(e, t))
                    }

                    function o(t) {
                        n || (n = !0, i.resolve(e, t))
                    }
                    var a = g((function() {
                        t(o, r)
                    }));
                    "error" === a.status && r(a.value)
                }

                function g(e, t) {
                    var n = {};
                    try {
                        n.value = e(t), n.status = "success"
                    } catch (e) {
                        n.status = "error", n.value = e
                    }
                    return n
                }
                t.exports = u, u.prototype.catch = function(e) {
                    return this.then(null, e)
                }, u.prototype.then = function(e, t) {
                    if ("function" != typeof e && this.state === s || "function" != typeof t && this.state === a) return this;
                    var n = new this.constructor(o);
                    return this.state !== c ? d(n, this.state === s ? e : t, this.outcome) : this.queue.push(new l(n, e, t)), n
                }, l.prototype.callFulfilled = function(e) {
                    i.resolve(this.promise, e)
                }, l.prototype.otherCallFulfilled = function(e) {
                    d(this.promise, this.onFulfilled, e)
                }, l.prototype.callRejected = function(e) {
                    i.reject(this.promise, e)
                }, l.prototype.otherCallRejected = function(e) {
                    d(this.promise, this.onRejected, e)
                }, i.resolve = function(e, t) {
                    var n = g(f, t);
                    if ("error" === n.status) return i.reject(e, n.value);
                    var r = n.value;
                    if (r) h(e, r);
                    else {
                        e.state = s, e.outcome = t;
                        for (var o = -1, a = e.queue.length; ++o < a;) e.queue[o].callFulfilled(t)
                    }
                    return e
                }, i.reject = function(e, t) {
                    e.state = a, e.outcome = t;
                    for (var n = -1, r = e.queue.length; ++n < r;) e.queue[n].callRejected(t);
                    return e
                }, u.resolve = function(e) {
                    return e instanceof this ? e : i.resolve(new this(o), e)
                }, u.reject = function(e) {
                    var t = new this(o);
                    return i.reject(t, e)
                }, u.all = function(e) {
                    var t = this;
                    if ("[object Array]" !== Object.prototype.toString.call(e)) return this.reject(new TypeError("must be an array"));
                    var n = e.length,
                        r = !1;
                    if (!n) return this.resolve([]);
                    for (var a = new Array(n), s = 0, c = -1, u = new this(o); ++c < n;) l(e[c], c);
                    return u;

                    function l(e, o) {
                        t.resolve(e).then((function(e) {
                            a[o] = e, ++s !== n || r || (r = !0, i.resolve(u, a))
                        }), (function(e) {
                            r || (r = !0, i.reject(u, e))
                        }))
                    }
                }, u.race = function(e) {
                    if ("[object Array]" !== Object.prototype.toString.call(e)) return this.reject(new TypeError("must be an array"));
                    var t = e.length,
                        n = !1;
                    if (!t) return this.resolve([]);
                    for (var r, a = -1, s = new this(o); ++a < t;) r = e[a], this.resolve(r).then((function(e) {
                        n || (n = !0, i.resolve(s, e))
                    }), (function(e) {
                        n || (n = !0, i.reject(s, e))
                    }));
                    return s
                }
            }, {
                1: 1
            }],
            3: [function(e, n, r) {
                (function(t) {
                    "use strict";
                    "function" != typeof t.Promise && (t.Promise = e(2))
                }).call(this, void 0 !== t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {
                2: 2
            }],
            4: [function(e, t, n) {
                "use strict";
                var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    },
                    o = function() {
                        try {
                            if ("undefined" != typeof indexedDB) return indexedDB;
                            if ("undefined" != typeof webkitIndexedDB) return webkitIndexedDB;
                            if ("undefined" != typeof mozIndexedDB) return mozIndexedDB;
                            if ("undefined" != typeof OIndexedDB) return OIndexedDB;
                            if ("undefined" != typeof msIndexedDB) return msIndexedDB
                        } catch (e) {
                            return
                        }
                    }();

                function i(e, t) {
                    e = e || [], t = t || {};
                    try {
                        return new Blob(e, t)
                    } catch (o) {
                        if ("TypeError" !== o.name) throw o;
                        for (var n = new("undefined" != typeof BlobBuilder ? BlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : WebKitBlobBuilder), r = 0; r < e.length; r += 1) n.append(e[r]);
                        return n.getBlob(t.type)
                    }
                }
                "undefined" == typeof Promise && e(3);
                var a = Promise;

                function s(e, t) {
                    t && e.then((function(e) {
                        t(null, e)
                    }), (function(e) {
                        t(e)
                    }))
                }

                function c(e, t, n) {
                    "function" == typeof t && e.then(t), "function" == typeof n && e.catch(n)
                }

                function u(e) {
                    return "string" != typeof e && (console.warn(e + " used as a key, but it is not a string."), e = String(e)), e
                }
                var l, d, f = "local-forage-detect-blob-support",
                    h = Object.prototype.toString,
                    g = "readonly",
                    p = "readwrite";

                function m(e) {
                    return "boolean" == typeof l ? a.resolve(l) : function(e) {
                        return new a((function(t) {
                            var n = e.transaction(f, p),
                                r = i([""]);
                            n.objectStore(f).put(r, "key"), n.onabort = function(e) {
                                e.preventDefault(), e.stopPropagation(), t(!1)
                            }, n.oncomplete = function() {
                                var e = navigator.userAgent.match(/Chrome\/(\d+)/),
                                    n = navigator.userAgent.match(/Edge\//);
                                t(n || !e || parseInt(e[1], 10) >= 43)
                            }
                        })).catch((function() {
                            return !1
                        }))
                    }(e).then((function(e) {
                        return l = e
                    }))
                }

                function b(e) {
                    var t = d[e.name],
                        n = {};
                    n.promise = new a((function(e) {
                        n.resolve = e
                    })), t.deferredOperations.push(n), t.dbReady ? t.dbReady = t.dbReady.then((function() {
                        return n.promise
                    })) : t.dbReady = n.promise
                }

                function v(e, t) {
                    return new a((function(n, r) {
                        if (e.db) {
                            if (!t) return n(e.db);
                            b(e), e.db.close()
                        }
                        var i = [e.name];
                        t && i.push(e.version);
                        var a = o.open.apply(o, i);
                        t && (a.onupgradeneeded = function(t) {
                            var n = a.result;
                            try {
                                n.createObjectStore(e.storeName), t.oldVersion <= 1 && n.createObjectStore(f)
                            } catch (n) {
                                if ("ConstraintError" !== n.name) throw n;
                                console.warn('The database "' + e.name + '" has been upgraded from version ' + t.oldVersion + " to version " + t.newVersion + ', but the storage "' + e.storeName + '" already exists.')
                            }
                        }), a.onerror = function(e) {
                            e.preventDefault(), r(a.error)
                        }, a.onsuccess = function() {
                            n(a.result),
                                function(e) {
                                    var t = d[e.name].deferredOperations.pop();
                                    t && t.resolve()
                                }(e)
                        }
                    }))
                }

                function _(e) {
                    return i([function(e) {
                        for (var t = e.length, n = new ArrayBuffer(t), r = new Uint8Array(n), o = 0; o < t; o++) r[o] = e.charCodeAt(o);
                        return n
                    }(atob(e.data))], {
                        type: e.type
                    })
                }

                function y(e) {
                    return e && e.__local_forage_encoded_blob
                }

                function w(e) {
                    var t = this,
                        n = t._initReady().then((function() {
                            var e = d[t._dbInfo.name];
                            if (e && e.dbReady) return e.dbReady
                        }));
                    return c(n, e, e), n
                }

                function O(e, t, n) {
                    try {
                        var r = e.db.transaction(e.storeName, t);
                        n(null, r)
                    } catch (r) {
                        if (!e.db || "InvalidStateError" === r.name) return function(e) {
                            b(e);
                            for (var t = d[e.name].forages, n = 0; n < t.length; n++) t[n]._dbInfo.db && (t[n]._dbInfo.db.close(), t[n]._dbInfo.db = null);
                            return v(e, !1).then((function(e) {
                                for (var n = 0; n < t.length; n++) t[n]._dbInfo.db = e
                            })).catch((function(t) {
                                throw function(e, t) {
                                    var n = d[e.name].deferredOperations.pop();
                                    n && n.reject(t)
                                }(e, t), t
                            }))
                        }(e).then((function() {
                            var r = e.db.transaction(e.storeName, t);
                            n(null, r)
                        }));
                        n(r)
                    }
                }
                var j = {
                        _driver: "asyncStorage",
                        _initStorage: function(e) {
                            var t = this,
                                n = {
                                    db: null
                                };
                            if (e)
                                for (var r in e) n[r] = e[r];
                            d || (d = {});
                            var o = d[n.name];
                            o || (o = {
                                forages: [],
                                db: null,
                                dbReady: null,
                                deferredOperations: []
                            }, d[n.name] = o), o.forages.push(t), t._initReady || (t._initReady = t.ready, t.ready = w);
                            var i = [];

                            function s() {
                                return a.resolve()
                            }
                            for (var c = 0; c < o.forages.length; c++) {
                                var u = o.forages[c];
                                u !== t && i.push(u._initReady().catch(s))
                            }
                            var l = o.forages.slice(0);
                            return a.all(i).then((function() {
                                return n.db = o.db,
                                    function(e) {
                                        return v(e, !1)
                                    }(n)
                            })).then((function(e) {
                                return n.db = e,
                                    function(e, t) {
                                        if (!e.db) return !0;
                                        var n = !e.db.objectStoreNames.contains(e.storeName),
                                            r = e.version < e.db.version,
                                            o = e.version > e.db.version;
                                        if (r && (e.version !== t && console.warn('The database "' + e.name + "\" can't be downgraded from version " + e.db.version + " to version " + e.version + "."), e.version = e.db.version), o || n) {
                                            if (n) {
                                                var i = e.db.version + 1;
                                                i > e.version && (e.version = i)
                                            }
                                            return !0
                                        }
                                        return !1
                                    }(n, t._defaultConfig.version) ? function(e) {
                                        return v(e, !0)
                                    }(n) : e
                            })).then((function(e) {
                                n.db = o.db = e, t._dbInfo = n;
                                for (var r = 0; r < l.length; r++) {
                                    var i = l[r];
                                    i !== t && (i._dbInfo.db = n.db, i._dbInfo.version = n.version)
                                }
                            }))
                        },
                        _support: function() {
                            try {
                                if (!o) return !1;
                                var e = "undefined" != typeof openDatabase && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform),
                                    t = "function" == typeof fetch && -1 !== fetch.toString().indexOf("[native code");
                                return (!e || t) && "undefined" != typeof indexedDB && "undefined" != typeof IDBKeyRange
                            } catch (e) {
                                return !1
                            }
                        }(),
                        iterate: function(e, t) {
                            var n = this,
                                r = new a((function(t, r) {
                                    n.ready().then((function() {
                                        O(n._dbInfo, g, (function(o, i) {
                                            if (o) return r(o);
                                            try {
                                                var a = i.objectStore(n._dbInfo.storeName).openCursor(),
                                                    s = 1;
                                                a.onsuccess = function() {
                                                    var n = a.result;
                                                    if (n) {
                                                        var r = n.value;
                                                        y(r) && (r = _(r));
                                                        var o = e(r, n.key, s++);
                                                        void 0 !== o ? t(o) : n.continue()
                                                    } else t()
                                                }, a.onerror = function() {
                                                    r(a.error)
                                                }
                                            } catch (e) {
                                                r(e)
                                            }
                                        }))
                                    })).catch(r)
                                }));
                            return s(r, t), r
                        },
                        getItem: function(e, t) {
                            var n = this;
                            e = u(e);
                            var r = new a((function(t, r) {
                                n.ready().then((function() {
                                    O(n._dbInfo, g, (function(o, i) {
                                        if (o) return r(o);
                                        try {
                                            var a = i.objectStore(n._dbInfo.storeName).get(e);
                                            a.onsuccess = function() {
                                                var e = a.result;
                                                void 0 === e && (e = null), y(e) && (e = _(e)), t(e)
                                            }, a.onerror = function() {
                                                r(a.error)
                                            }
                                        } catch (e) {
                                            r(e)
                                        }
                                    }))
                                })).catch(r)
                            }));
                            return s(r, t), r
                        },
                        setItem: function(e, t, n) {
                            var r = this;
                            e = u(e);
                            var o = new a((function(n, o) {
                                var i;
                                r.ready().then((function() {
                                    return i = r._dbInfo, "[object Blob]" === h.call(t) ? m(i.db).then((function(e) {
                                        return e ? t : (n = t, new a((function(e, t) {
                                            var r = new FileReader;
                                            r.onerror = t, r.onloadend = function(t) {
                                                var r = btoa(t.target.result || "");
                                                e({
                                                    __local_forage_encoded_blob: !0,
                                                    data: r,
                                                    type: n.type
                                                })
                                            }, r.readAsBinaryString(n)
                                        })));
                                        var n
                                    })) : t
                                })).then((function(t) {
                                    O(r._dbInfo, p, (function(i, a) {
                                        if (i) return o(i);
                                        try {
                                            var s = a.objectStore(r._dbInfo.storeName);
                                            null === t && (t = void 0);
                                            var c = s.put(t, e);
                                            a.oncomplete = function() {
                                                void 0 === t && (t = null), n(t)
                                            }, a.onabort = a.onerror = function() {
                                                var e = c.error ? c.error : c.transaction.error;
                                                o(e)
                                            }
                                        } catch (e) {
                                            o(e)
                                        }
                                    }))
                                })).catch(o)
                            }));
                            return s(o, n), o
                        },
                        removeItem: function(e, t) {
                            var n = this;
                            e = u(e);
                            var r = new a((function(t, r) {
                                n.ready().then((function() {
                                    O(n._dbInfo, p, (function(o, i) {
                                        if (o) return r(o);
                                        try {
                                            var a = i.objectStore(n._dbInfo.storeName).delete(e);
                                            i.oncomplete = function() {
                                                t()
                                            }, i.onerror = function() {
                                                r(a.error)
                                            }, i.onabort = function() {
                                                var e = a.error ? a.error : a.transaction.error;
                                                r(e)
                                            }
                                        } catch (e) {
                                            r(e)
                                        }
                                    }))
                                })).catch(r)
                            }));
                            return s(r, t), r
                        },
                        clear: function(e) {
                            var t = this,
                                n = new a((function(e, n) {
                                    t.ready().then((function() {
                                        O(t._dbInfo, p, (function(r, o) {
                                            if (r) return n(r);
                                            try {
                                                var i = o.objectStore(t._dbInfo.storeName).clear();
                                                o.oncomplete = function() {
                                                    e()
                                                }, o.onabort = o.onerror = function() {
                                                    var e = i.error ? i.error : i.transaction.error;
                                                    n(e)
                                                }
                                            } catch (e) {
                                                n(e)
                                            }
                                        }))
                                    })).catch(n)
                                }));
                            return s(n, e), n
                        },
                        length: function(e) {
                            var t = this,
                                n = new a((function(e, n) {
                                    t.ready().then((function() {
                                        O(t._dbInfo, g, (function(r, o) {
                                            if (r) return n(r);
                                            try {
                                                var i = o.objectStore(t._dbInfo.storeName).count();
                                                i.onsuccess = function() {
                                                    e(i.result)
                                                }, i.onerror = function() {
                                                    n(i.error)
                                                }
                                            } catch (e) {
                                                n(e)
                                            }
                                        }))
                                    })).catch(n)
                                }));
                            return s(n, e), n
                        },
                        key: function(e, t) {
                            var n = this,
                                r = new a((function(t, r) {
                                    e < 0 ? t(null) : n.ready().then((function() {
                                        O(n._dbInfo, g, (function(o, i) {
                                            if (o) return r(o);
                                            try {
                                                var a = i.objectStore(n._dbInfo.storeName),
                                                    s = !1,
                                                    c = a.openCursor();
                                                c.onsuccess = function() {
                                                    var n = c.result;
                                                    n ? 0 === e ? t(n.key) : s ? t(n.key) : (s = !0, n.advance(e)) : t(null)
                                                }, c.onerror = function() {
                                                    r(c.error)
                                                }
                                            } catch (e) {
                                                r(e)
                                            }
                                        }))
                                    })).catch(r)
                                }));
                            return s(r, t), r
                        },
                        keys: function(e) {
                            var t = this,
                                n = new a((function(e, n) {
                                    t.ready().then((function() {
                                        O(t._dbInfo, g, (function(r, o) {
                                            if (r) return n(r);
                                            try {
                                                var i = o.objectStore(t._dbInfo.storeName).openCursor(),
                                                    a = [];
                                                i.onsuccess = function() {
                                                    var t = i.result;
                                                    t ? (a.push(t.key), t.continue()) : e(a)
                                                }, i.onerror = function() {
                                                    n(i.error)
                                                }
                                            } catch (e) {
                                                n(e)
                                            }
                                        }))
                                    })).catch(n)
                                }));
                            return s(n, e), n
                        }
                    },
                    E = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    k = /^~~local_forage_type~([^~]+)~/,
                    S = "__lfsc__:",
                    I = S.length,
                    C = "arbf",
                    A = "blob",
                    N = "si08",
                    x = "ui08",
                    T = "uic8",
                    P = "si16",
                    D = "si32",
                    R = "ur16",
                    M = "ui32",
                    F = "fl32",
                    L = "fl64",
                    U = I + C.length,
                    B = Object.prototype.toString;

                function G(e) {
                    var t, n, r, o, i, a = .75 * e.length,
                        s = e.length,
                        c = 0;
                    "=" === e[e.length - 1] && (a--, "=" === e[e.length - 2] && a--);
                    var u = new ArrayBuffer(a),
                        l = new Uint8Array(u);
                    for (t = 0; t < s; t += 4) n = E.indexOf(e[t]), r = E.indexOf(e[t + 1]), o = E.indexOf(e[t + 2]), i = E.indexOf(e[t + 3]), l[c++] = n << 2 | r >> 4, l[c++] = (15 & r) << 4 | o >> 2, l[c++] = (3 & o) << 6 | 63 & i;
                    return u
                }

                function W(e) {
                    var t, n = new Uint8Array(e),
                        r = "";
                    for (t = 0; t < n.length; t += 3) r += E[n[t] >> 2], r += E[(3 & n[t]) << 4 | n[t + 1] >> 4], r += E[(15 & n[t + 1]) << 2 | n[t + 2] >> 6], r += E[63 & n[t + 2]];
                    return n.length % 3 == 2 ? r = r.substring(0, r.length - 1) + "=" : n.length % 3 == 1 && (r = r.substring(0, r.length - 2) + "=="), r
                }
                var V = {
                    serialize: function(e, t) {
                        var n = "";
                        if (e && (n = B.call(e)), e && ("[object ArrayBuffer]" === n || e.buffer && "[object ArrayBuffer]" === B.call(e.buffer))) {
                            var r, o = S;
                            e instanceof ArrayBuffer ? (r = e, o += C) : (r = e.buffer, "[object Int8Array]" === n ? o += N : "[object Uint8Array]" === n ? o += x : "[object Uint8ClampedArray]" === n ? o += T : "[object Int16Array]" === n ? o += P : "[object Uint16Array]" === n ? o += R : "[object Int32Array]" === n ? o += D : "[object Uint32Array]" === n ? o += M : "[object Float32Array]" === n ? o += F : "[object Float64Array]" === n ? o += L : t(new Error("Failed to get type for BinaryArray"))), t(o + W(r))
                        } else if ("[object Blob]" === n) {
                            var i = new FileReader;
                            i.onload = function() {
                                var n = "~~local_forage_type~" + e.type + "~" + W(this.result);
                                t(S + A + n)
                            }, i.readAsArrayBuffer(e)
                        } else try {
                            t(JSON.stringify(e))
                        } catch (n) {
                            console.error("Couldn't convert value into a JSON string: ", e), t(null, n)
                        }
                    },
                    deserialize: function(e) {
                        if (e.substring(0, I) !== S) return JSON.parse(e);
                        var t, n = e.substring(U),
                            r = e.substring(I, U);
                        if (r === A && k.test(n)) {
                            var o = n.match(k);
                            t = o[1], n = n.substring(o[0].length)
                        }
                        var a = G(n);
                        switch (r) {
                            case C:
                                return a;
                            case A:
                                return i([a], {
                                    type: t
                                });
                            case N:
                                return new Int8Array(a);
                            case x:
                                return new Uint8Array(a);
                            case T:
                                return new Uint8ClampedArray(a);
                            case P:
                                return new Int16Array(a);
                            case R:
                                return new Uint16Array(a);
                            case D:
                                return new Int32Array(a);
                            case M:
                                return new Uint32Array(a);
                            case F:
                                return new Float32Array(a);
                            case L:
                                return new Float64Array(a);
                            default:
                                throw new Error("Unkown type: " + r)
                        }
                    },
                    stringToBuffer: G,
                    bufferToString: W
                };

                function H(e, t, n, r) {
                    var o = this;
                    e = u(e);
                    var i = new a((function(i, a) {
                        o.ready().then((function() {
                            void 0 === t && (t = null);
                            var s = t,
                                c = o._dbInfo;
                            c.serializer.serialize(t, (function(t, u) {
                                u ? a(u) : c.db.transaction((function(n) {
                                    n.executeSql("INSERT OR REPLACE INTO " + c.storeName + " (key, value) VALUES (?, ?)", [e, t], (function() {
                                        i(s)
                                    }), (function(e, t) {
                                        a(t)
                                    }))
                                }), (function(t) {
                                    if (t.code === t.QUOTA_ERR) {
                                        if (r > 0) return void i(H.apply(o, [e, s, n, r - 1]));
                                        a(t)
                                    }
                                }))
                            }))
                        })).catch(a)
                    }));
                    return s(i, n), i
                }
                var z = {
                    _driver: "webSQLStorage",
                    _initStorage: function(e) {
                        var t = this,
                            n = {
                                db: null
                            };
                        if (e)
                            for (var r in e) n[r] = "string" != typeof e[r] ? e[r].toString() : e[r];
                        var o = new a((function(e, r) {
                            try {
                                n.db = openDatabase(n.name, String(n.version), n.description, n.size)
                            } catch (e) {
                                return r(e)
                            }
                            n.db.transaction((function(o) {
                                o.executeSql("CREATE TABLE IF NOT EXISTS " + n.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], (function() {
                                    t._dbInfo = n, e()
                                }), (function(e, t) {
                                    r(t)
                                }))
                            }))
                        }));
                        return n.serializer = V, o
                    },
                    _support: "function" == typeof openDatabase,
                    iterate: function(e, t) {
                        var n = this,
                            r = new a((function(t, r) {
                                n.ready().then((function() {
                                    var o = n._dbInfo;
                                    o.db.transaction((function(n) {
                                        n.executeSql("SELECT * FROM " + o.storeName, [], (function(n, r) {
                                            for (var i = r.rows, a = i.length, s = 0; s < a; s++) {
                                                var c = i.item(s),
                                                    u = c.value;
                                                if (u && (u = o.serializer.deserialize(u)), void 0 !== (u = e(u, c.key, s + 1))) return void t(u)
                                            }
                                            t()
                                        }), (function(e, t) {
                                            r(t)
                                        }))
                                    }))
                                })).catch(r)
                            }));
                        return s(r, t), r
                    },
                    getItem: function(e, t) {
                        var n = this;
                        e = u(e);
                        var r = new a((function(t, r) {
                            n.ready().then((function() {
                                var o = n._dbInfo;
                                o.db.transaction((function(n) {
                                    n.executeSql("SELECT * FROM " + o.storeName + " WHERE key = ? LIMIT 1", [e], (function(e, n) {
                                        var r = n.rows.length ? n.rows.item(0).value : null;
                                        r && (r = o.serializer.deserialize(r)), t(r)
                                    }), (function(e, t) {
                                        r(t)
                                    }))
                                }))
                            })).catch(r)
                        }));
                        return s(r, t), r
                    },
                    setItem: function(e, t, n) {
                        return H.apply(this, [e, t, n, 1])
                    },
                    removeItem: function(e, t) {
                        var n = this;
                        e = u(e);
                        var r = new a((function(t, r) {
                            n.ready().then((function() {
                                var o = n._dbInfo;
                                o.db.transaction((function(n) {
                                    n.executeSql("DELETE FROM " + o.storeName + " WHERE key = ?", [e], (function() {
                                        t()
                                    }), (function(e, t) {
                                        r(t)
                                    }))
                                }))
                            })).catch(r)
                        }));
                        return s(r, t), r
                    },
                    clear: function(e) {
                        var t = this,
                            n = new a((function(e, n) {
                                t.ready().then((function() {
                                    var r = t._dbInfo;
                                    r.db.transaction((function(t) {
                                        t.executeSql("DELETE FROM " + r.storeName, [], (function() {
                                            e()
                                        }), (function(e, t) {
                                            n(t)
                                        }))
                                    }))
                                })).catch(n)
                            }));
                        return s(n, e), n
                    },
                    length: function(e) {
                        var t = this,
                            n = new a((function(e, n) {
                                t.ready().then((function() {
                                    var r = t._dbInfo;
                                    r.db.transaction((function(t) {
                                        t.executeSql("SELECT COUNT(key) as c FROM " + r.storeName, [], (function(t, n) {
                                            var r = n.rows.item(0).c;
                                            e(r)
                                        }), (function(e, t) {
                                            n(t)
                                        }))
                                    }))
                                })).catch(n)
                            }));
                        return s(n, e), n
                    },
                    key: function(e, t) {
                        var n = this,
                            r = new a((function(t, r) {
                                n.ready().then((function() {
                                    var o = n._dbInfo;
                                    o.db.transaction((function(n) {
                                        n.executeSql("SELECT key FROM " + o.storeName + " WHERE id = ? LIMIT 1", [e + 1], (function(e, n) {
                                            var r = n.rows.length ? n.rows.item(0).key : null;
                                            t(r)
                                        }), (function(e, t) {
                                            r(t)
                                        }))
                                    }))
                                })).catch(r)
                            }));
                        return s(r, t), r
                    },
                    keys: function(e) {
                        var t = this,
                            n = new a((function(e, n) {
                                t.ready().then((function() {
                                    var r = t._dbInfo;
                                    r.db.transaction((function(t) {
                                        t.executeSql("SELECT key FROM " + r.storeName, [], (function(t, n) {
                                            for (var r = [], o = 0; o < n.rows.length; o++) r.push(n.rows.item(o).key);
                                            e(r)
                                        }), (function(e, t) {
                                            n(t)
                                        }))
                                    }))
                                })).catch(n)
                            }));
                        return s(n, e), n
                    }
                };
                var q = {
                        _driver: "localStorageWrapper",
                        _initStorage: function(e) {
                            var t = {};
                            if (e)
                                for (var n in e) t[n] = e[n];
                            return t.keyPrefix = t.name + "/", t.storeName !== this._defaultConfig.storeName && (t.keyPrefix += t.storeName + "/"), ! function() {
                                try {
                                    return localStorage.setItem("_localforage_support_test", !0), localStorage.removeItem("_localforage_support_test"), !1
                                } catch (e) {
                                    return !0
                                }
                            }() || localStorage.length > 0 ? (this._dbInfo = t, t.serializer = V, a.resolve()) : a.reject()
                        },
                        _support: function() {
                            try {
                                return "undefined" != typeof localStorage && "setItem" in localStorage && "function" == typeof localStorage.setItem
                            } catch (e) {
                                return !1
                            }
                        }(),
                        iterate: function(e, t) {
                            var n = this,
                                r = n.ready().then((function() {
                                    for (var t = n._dbInfo, r = t.keyPrefix, o = r.length, i = localStorage.length, a = 1, s = 0; s < i; s++) {
                                        var c = localStorage.key(s);
                                        if (0 === c.indexOf(r)) {
                                            var u = localStorage.getItem(c);
                                            if (u && (u = t.serializer.deserialize(u)), void 0 !== (u = e(u, c.substring(o), a++))) return u
                                        }
                                    }
                                }));
                            return s(r, t), r
                        },
                        getItem: function(e, t) {
                            var n = this;
                            e = u(e);
                            var r = n.ready().then((function() {
                                var t = n._dbInfo,
                                    r = localStorage.getItem(t.keyPrefix + e);
                                return r && (r = t.serializer.deserialize(r)), r
                            }));
                            return s(r, t), r
                        },
                        setItem: function(e, t, n) {
                            var r = this;
                            e = u(e);
                            var o = r.ready().then((function() {
                                void 0 === t && (t = null);
                                var n = t;
                                return new a((function(o, i) {
                                    var a = r._dbInfo;
                                    a.serializer.serialize(t, (function(t, r) {
                                        if (r) i(r);
                                        else try {
                                            localStorage.setItem(a.keyPrefix + e, t), o(n)
                                        } catch (e) {
                                            "QuotaExceededError" !== e.name && "NS_ERROR_DOM_QUOTA_REACHED" !== e.name || i(e), i(e)
                                        }
                                    }))
                                }))
                            }));
                            return s(o, n), o
                        },
                        removeItem: function(e, t) {
                            var n = this;
                            e = u(e);
                            var r = n.ready().then((function() {
                                var t = n._dbInfo;
                                localStorage.removeItem(t.keyPrefix + e)
                            }));
                            return s(r, t), r
                        },
                        clear: function(e) {
                            var t = this,
                                n = t.ready().then((function() {
                                    for (var e = t._dbInfo.keyPrefix, n = localStorage.length - 1; n >= 0; n--) {
                                        var r = localStorage.key(n);
                                        0 === r.indexOf(e) && localStorage.removeItem(r)
                                    }
                                }));
                            return s(n, e), n
                        },
                        length: function(e) {
                            var t = this.keys().then((function(e) {
                                return e.length
                            }));
                            return s(t, e), t
                        },
                        key: function(e, t) {
                            var n = this,
                                r = n.ready().then((function() {
                                    var t, r = n._dbInfo;
                                    try {
                                        t = localStorage.key(e)
                                    } catch (e) {
                                        t = null
                                    }
                                    return t && (t = t.substring(r.keyPrefix.length)), t
                                }));
                            return s(r, t), r
                        },
                        keys: function(e) {
                            var t = this,
                                n = t.ready().then((function() {
                                    for (var e = t._dbInfo, n = localStorage.length, r = [], o = 0; o < n; o++) {
                                        var i = localStorage.key(o);
                                        0 === i.indexOf(e.keyPrefix) && r.push(i.substring(e.keyPrefix.length))
                                    }
                                    return r
                                }));
                            return s(n, e), n
                        }
                    },
                    $ = Array.isArray || function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    },
                    Y = {},
                    Z = {},
                    Q = {
                        INDEXEDDB: j,
                        WEBSQL: z,
                        LOCALSTORAGE: q
                    },
                    J = [Q.INDEXEDDB._driver, Q.WEBSQL._driver, Q.LOCALSTORAGE._driver],
                    K = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"],
                    X = {
                        description: "",
                        driver: J.slice(),
                        name: "localforage",
                        size: 4980736,
                        storeName: "keyvaluepairs",
                        version: 1
                    };

                function ee(e, t) {
                    e[t] = function() {
                        var n = arguments;
                        return e.ready().then((function() {
                            return e[t].apply(e, n)
                        }))
                    }
                }

                function te() {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        if (t)
                            for (var n in t) t.hasOwnProperty(n) && ($(t[n]) ? arguments[0][n] = t[n].slice() : arguments[0][n] = t[n])
                    }
                    return arguments[0]
                }
                var ne = new(function() {
                    function e(t) {
                        for (var n in function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, e), Q)
                            if (Q.hasOwnProperty(n)) {
                                var r = Q[n],
                                    o = r._driver;
                                this[n] = o, Y[o] || this.defineDriver(r)
                            } this._defaultConfig = te({}, X), this._config = te({}, this._defaultConfig, t), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch((function() {}))
                    }
                    return e.prototype.config = function(e) {
                        if ("object" === (void 0 === e ? "undefined" : r(e))) {
                            if (this._ready) return new Error("Can't call config() after localforage has been used.");
                            for (var t in e) {
                                if ("storeName" === t && (e[t] = e[t].replace(/\W/g, "_")), "version" === t && "number" != typeof e[t]) return new Error("Database version must be a number.");
                                this._config[t] = e[t]
                            }
                            return !("driver" in e && e.driver) || this.setDriver(this._config.driver)
                        }
                        return "string" == typeof e ? this._config[e] : this._config
                    }, e.prototype.defineDriver = function(e, t, n) {
                        var r = new a((function(t, n) {
                            try {
                                var r = e._driver,
                                    o = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
                                if (!e._driver) return void n(o);
                                for (var i = K.concat("_initStorage"), a = 0, s = i.length; a < s; a++) {
                                    var c = i[a];
                                    if (!c || !e[c] || "function" != typeof e[c]) return void n(o)
                                }
                                var u = function(n) {
                                    Y[r] && console.info("Redefining LocalForage driver: " + r), Y[r] = e, Z[r] = n, t()
                                };
                                "_support" in e ? e._support && "function" == typeof e._support ? e._support().then(u, n) : u(!!e._support) : u(!0)
                            } catch (e) {
                                n(e)
                            }
                        }));
                        return c(r, t, n), r
                    }, e.prototype.driver = function() {
                        return this._driver || null
                    }, e.prototype.getDriver = function(e, t, n) {
                        var r = Y[e] ? a.resolve(Y[e]) : a.reject(new Error("Driver not found."));
                        return c(r, t, n), r
                    }, e.prototype.getSerializer = function(e) {
                        var t = a.resolve(V);
                        return c(t, e), t
                    }, e.prototype.ready = function(e) {
                        var t = this,
                            n = t._driverSet.then((function() {
                                return null === t._ready && (t._ready = t._initDriver()), t._ready
                            }));
                        return c(n, e, e), n
                    }, e.prototype.setDriver = function(e, t, n) {
                        var r = this;
                        $(e) || (e = [e]);
                        var o = this._getSupportedDrivers(e);

                        function i() {
                            r._config.driver = r.driver()
                        }

                        function s(e) {
                            return r._extend(e), i(), r._ready = r._initStorage(r._config), r._ready
                        }
                        var u = null !== this._driverSet ? this._driverSet.catch((function() {
                            return a.resolve()
                        })) : a.resolve();
                        return this._driverSet = u.then((function() {
                            var e = o[0];
                            return r._dbInfo = null, r._ready = null, r.getDriver(e).then((function(e) {
                                r._driver = e._driver, i(), r._wrapLibraryMethodsWithReady(), r._initDriver = function(e) {
                                    return function() {
                                        var t = 0;
                                        return function n() {
                                            for (; t < e.length;) {
                                                var o = e[t];
                                                return t++, r._dbInfo = null, r._ready = null, r.getDriver(o).then(s).catch(n)
                                            }
                                            i();
                                            var c = new Error("No available storage method found.");
                                            return r._driverSet = a.reject(c), r._driverSet
                                        }()
                                    }
                                }(o)
                            }))
                        })).catch((function() {
                            i();
                            var e = new Error("No available storage method found.");
                            return r._driverSet = a.reject(e), r._driverSet
                        })), c(this._driverSet, t, n), this._driverSet
                    }, e.prototype.supports = function(e) {
                        return !!Z[e]
                    }, e.prototype._extend = function(e) {
                        te(this, e)
                    }, e.prototype._getSupportedDrivers = function(e) {
                        for (var t = [], n = 0, r = e.length; n < r; n++) {
                            var o = e[n];
                            this.supports(o) && t.push(o)
                        }
                        return t
                    }, e.prototype._wrapLibraryMethodsWithReady = function() {
                        for (var e = 0, t = K.length; e < t; e++) ee(this, K[e])
                    }, e.prototype.createInstance = function(t) {
                        return new e(t)
                    }, e
                }());
                t.exports = ne
            }, {
                3: 3
            }]
        }, {}, [4])(4)
    }).call(this, n(159))
}, function(e) {
    e.exports = JSON.parse("[1093386216,1055978197,981119102,1012895067,370095044,3057534675,3945464942,1294076740,2831420656,1627541080,1984134083,3427294899,3424738308,2807400837,9564316,2878048700,2537164870,1941488088,3487153937,460837437,39930393,316768608,666057312,2832673753,212492919,3981234756,2305060992,4227262176,4120545051,1049152160,294667362,2081971093,3102255997,3290041152,2193909666,3726139035,390032266,767709924,3916102915,1052375118,3499543247,292925815,1695553805,3604929813,2438996414,2541438498,312416082,923039859,1321890305,4062327915,3200638611,126162117,3582001667,2342469943,3917225842,1062716709,1158959214,176640750,979037137,1359955862,2389355877,3751400435,2123133869,3173699887,1295171216,1459438041,3332625350,4253356137,929605787,2162534271,3182510613,1447947398,4116456060,883580320,4042783221,2443239614,2197295564,803073329,3052358768,1981649369,1530665065,1224729428,1761569052,2413609613,1429852220,703268455,4253523344,388636391,3146218970,1303513835,3848336808,411836761,2335704523,3634000063,928659214,3383487279,4188972756,15935476,885320550,316199631,2109922083,3133012900,2066092243,3504034459,1206629722,3678765742,1395483777,966064054,4280237008,2135199464,3074980130,1183043064,2849688777,3476108287,477883011,4193616490,55986717,3514591461,2596072392,2653485606,911872027,4265065599,2977310897,513329408,3761396241,2550148107,223183002,635894679,3074170841,621708025,2692559376,3657174927,3832701908,2262312001,2401438801,234545642,163742384,580245955,1864287325,724252727,1503399745,3443415957,1612432565,2858898005,1010716128,1036264406,1002726732,502395933,4140049916,2399630359,113615976,2567880991,2395279185,1618510348,2261583838,2668201830,2689787185,274741178,179218763,2271154071,2956397599,1792832215,4068399903,1003654668,3958967620,1711459788,1783015331,1520642710,2628004305,2951329807,781317913,2952912258,337206988,2902750835,2889589355,1470025386,1280789460,1802218416,3794414517,2528760805,297460106,1694330657,1085454568,3026124108,529209924,2823793789,3175085732,2942756677,4247012848,333909080,3596264620,441296706,829893807,3396095750,3088613177,548904259,4149415853,2383487549,2671965078,327687360,4050230544,1241995236,194831395,2873595493,1379989964,1055318645,1089186219,1852263428,971354605,3036956808,3470312382,3263855105,244328195,2651513114,664863151,1162681863,3543438283,1154233681,1688343770,2915742300,2887280722,3020187674,3576637303,4025477043,171463728,3773406539,3412954891,2026572788,4017009276,1920228911,698803660,2072792583,537947897,789786548,445575012,2409228664,1409682357,3582891332,1217357123,3978987079,803864637,3130735062,193600209,290240093,3807890499,2220596399,2438622901,2947438513,3981191574,869181904,3251153140,2605907176,2117652075,1701271270,4099578981,931669276,3000295926,784968234,541133332,4119516419,1841945601,1179207497,2872024942,489060293,1992810244,2125374192,3613016682,445797081,273409753,3720436226,2473983290,3168662451,284963996,1156855932,978946729,3839558138,3869672445,3287772583,232538530,2799542561,3722563634,411188115,2782937685,854453602,3274390153,3269216666,3480235985,1878764662,2590541929,2018885421,2575572719,3926263524,2237834992,1737705643,2315290875,2644012652,595255991,1826870024,400885517,1112070987,3856104292,1646950412,1382337722,637018763,1918259916,2393304258,1365272295,2387881098,3880730695,3078794381,2173557089,342783920,2333173496,885741419,1228189913,4023377482,21441916,1140064072,506050799,4249382628,354018158,2837786968,3085843406,2103533990,744216808,3017331067,3637422660,318907780,2192603205,1572068789,3407116705,2291791816,800039977,1286706523,1760774106,338056270,41941065,2101210155,1008139568,2095798252,2936777017,3487318321,1444935948,510021514,4281022031,365560695,3266677434,253139363,4025728819,1878044919,2729726579,760088352,2721457429,2179814301,2002371603,1121403155,657499627,607704181,1353772592,1331938742,4239680605,4208037837,2257417012,2243070016,1540886162,586514187,2536231578,926153077,1361738099,2155132932,107065739,479740255,625213560,4245668216,2103672938,2232139005,3068187636,3744734838,132372203,3113813546,3507121770,4229679562,1232625137,4180907570,2983050172,2556150790,3619634940,1246254861,1503682296,4085890868,1143937703,3808287138,202577226,935028059,3697007164,287810705,178896412,146989452,3141067771,30950182,281501034,2118075539,620055224,3597798738,1422222555,3671254747,1428560099,3402546507,1803576667,1120205913,4200689428,3075306284,1831170331,610414191,907842199,3453601370,185909410,731483324,938451904,1667501254,2476011525,41406317,2676266992,3270027992,2088307889,206774478,3838891603,3725398112,1205416899,797309671,1814660624,2819953962,4115405168,1146493726,1290382054,766599942,533276653,547348717,2088787044,1007061614,1539201084,4091974634,3072848823,1428507079,345797998,669835120,2761437471,3904185107,2894285537,1417755832,817063255,938294067,2050989727,3989181361,1774350908,2011523616,380495883,842377246,2635596765,3092358667,958183765,1700145645,1917793036,986908683,935320209,3815213066,2162064843,188629542,3787650193,1692757228,4081873041,970734029,760575890,3969809845,2171669718,3518874688,1685857806,135120208,3971762523,2020744817,1541830330,4054327852,3009758924,657522898,4051796323,363301592,3363054597,2334469003,2656148382,733428495,3321288877,2656981942,2641851147,3902332406,2750282491,825744486,1031831933,2107547513,256312223,3890758564,1618146353,4139508150,1931266818,2113315059,1757773281,2898109936,1094002936,2678925708,4128487188,3791130163,2885546638,3395211669,4137389033,2167405899,3127082596,1472817862,2383644170,3042773524,4081355726,4200425912,102121113,3760032038,2099444410,2270189653,755491402,2108008624,4264803659,2873720096,2502229880,3406254773,1651796161,2869384281,645260132,958575520,4026350442,1070535489,827933739,2524808062,4177715500,1042868330,1668434862,3270469138,3965540028,1697864044,1402804585,4076331907,3893613819,566832820,287598211,16091236,3141776415,286829124,4154177734,424604888,3565296865,2616770475,3907536381,3803030558,409027839,3807777435,3530069674,3790647455,4158884404,3523976836,1289747709,3503758335,2936439471,3119950020,3107732952,3885665705,152197341,4158889181,399948787,2088386065,1848338492,2225216248,3563476403,710652203,2901243848,4223281172,4249091003,4135866480,2039355292,4047911164,4256334271,1378785897,2595720754,1816324545,32826190,3509428593,2294056077,608170134,1275344900,321465883,897825319,656481525,2590245613,2537527630,3904083216,1659042167,604408573,3037355736,4233148143,2540635218,2577110999,4291475407,159599156,3106475451,2216465411,1416072308,672532601,2042309501,1746056787,4189368935,643659694,2534935605,2534558411,4084074302,1717758654,3790616383,2734312260,2346031146,3471871211,373944866,1158579612,2282502375,3361443542,477228841,1091526300,2382180608,3041115262,36204344,323522898,153542894,209303558,2232555854,3509113876,4017826442,589414987,1949611600,2801454544,1304890083,1930087357,2987321838,580325804,1625015166,1913952019,1912579607,136672526,3960352224,1348251553,3320423260,4152570643,1445110682,3860545018,1787714590,12822399,3162236618,184100,3457295613,2317329864,1288281376,32252652,465032798,3047197163,757886242,3351493681,2695178599,1418888530,1850085847,820675822,1267248278,1731604627,3355508084,1575847246,3566344577,4102589681,3877511170,254417483,2439618332,3413548914,3274662484,1801549535,3214399441,858935096,3157868959,3350084643,2085083372,628478593,313448827,2002119801,3333918227,1800501132,3775459450,4210732144,3439254026,939461977,2089420235,1086761738,209328941,797074428,3855176195,1688303231,985182675,730729732,752773611,2743229083,1835320278,471737970,2225827787,3690648340,3693771302,1756493343,1875131910,3349803682,1283511809,1558388194,803489451,3734315869,2514241435,808396990,325345170,1276518640,1088478366,3751121771,2574902716,192439056,194522054,2188100186,3480198208,1550846888,3951932830,2622152842,3696144311,1883983610,557348163,595598955,3533132652,3482807750,352137800,1221732703,2850222938,2167100386,477478045,1311791987,555010964,777659431,2839402762,1192636547,1865426448,1614984231,3074875360,2266257427,3063827382,1453986466,998606162,8529876,2126445764,626957027,3273960284,503402708,2817650053,509781247,4219296543,2428897226,3679733239,1174086075,3341547257,2392482305,3972454337,857834033,1037395887,2964726546,1822035179,974815505,1733672218,2202710500,2953535288,2996367523,1023417891,874649054,4220706770,1738693831,3342570746,1729352233,3208729852,860180450,2462059612,3209431976,3694096241,2121225484,1478274921,2393784842,389457593,41488551,2630121077,3884366774,3391327652,370809918,2860012861,4049292833,3367949987,3822757019,2973380736,4254541824,1406100325,291699084,126202073,1367578447,3327840391,395631210,86839224,2306421510,3544840842,2484652196,777755860,1261619249,294647961,3132950399,2475964036,2786266642,1075993906,138371201,283988537,880867054,2842887625,138119286,1678314228,2323713909,3104424649,4203019203,1149792573,2587495148,3156361149,1975139543,2193250236,1869089698,2439513170,2305703322,1293325507,424520867,1081713790,927888005,2482090079,3002547907,2442402030,3830060465,4019898213,1936562566,2424323625,1157423000,2228552652,620632178,4063101197,1951889225,2262476033,898521793,3732539952,1405461688,3679311760,3377634757,582618473,3648814040,756409471,1285368731,499017801,647159802,1060243387,3002975206,795490679,3368399046,2940276386,1556421109,4157274554,3077705770,2328577675,1118645048,2887723613,1497585689,883074018,3801483679,2682831463,2417637908,3966191370,3690873150,1828022979,3633527250,2348390181,846883213,2399681530,3806261461,1140800258,1289003196,1329348025,2920417920,3364762802,3241239290,117159591,1472003817,1716210717,3239494638,4206103255,1068115821,1505216910,1423892667,2322762619,2369402833,1086187763,364109012,2191912736,2897326272,66106468,3627601237,1794854514,2016952106,940598064,893349050,1952712383,3701031001,255051593,2541459792,1871052064,1600724510,1346443472,475801522,2768842341,1144743685,1370542498,1862628992,802618832,2565121382,1635256641,1055801965,1215093169,1988451037,3020652471,2679188052,3410122384,4157595023,2645368709,3949271818,69720664,879210837,547696704,3384732221,828017545,3736292860,665432216,238475099,518669339,3442975128,3546030589,2980746120,2986184170,3419010657,2185979565,1918181200,1555130750,3364334789,2747065785,1859951135,3436753105,3994827447,719715326,3560680499,2467040899,3554176332,2132852793,1120859738,3737642709,3451908096,3905316918,1508588960,3537483703,321703250,1519994160,3558481755,2641035711,1376621918,1659110710,478071415,1176268988,1435213423,1443873372,4184494193,707624574,2441643977,98344259,118316246,494560044,6596585,2775644066,117991275,3499801551,1421699234,2921229990,170767476,3289290512,2330346824,2125822178,1784872064,1952100744,3254231469,3227639491,3937097738,4271154601,3667798723,454888690,934270728,575528871,4044181334,3686920649,2667312783,4103895883,364442065,406486219,776285025,1057878131,2409300552,3710307432,3049092706,3345870762,497788718,3752951755,635436754,3682566906,2123181277,3345682834,2756732182,2564046858,2434754005,3013421603,1745752677,2046671017,769850494,917666103,237149514,3647950770,3910483289,3473377934,3690661460,746551277,2105390450,136600943,3765545574,337745159,3424256116,1259294817,3118822367,2328399835,3197013168,1013646438,2878705156,2096894029,664454087,2948469240,2190800410,3990132721,1295908898,3530581954,273583488,851366692,1823093032,1172784604,3376083113,3978415239,2788722095,333362690,2244678072,931289375,847865791,1991371443,2928724140,2361177922,3375552552,3564103465,2229550330,4255802075,3444098728,4014367267,246506004,2839455709,153947829,1185751864,2328415207,87029897,945769461,80872241,3759223132,1892101599,4215434566,2248878429,709091053,1912713477,146872839,1958227085,1570633188,4228219817,61429996,1772769856,2154882417,4202080996,3199197104,619467214,26201572,262295807,321915641,3408914162,3615859417,489567130,2549422113,1990364267,2557063375,2103341039,2910224385,2482275245,3967210214,1602057088,327703478,1839742007,2858145637,1249252017,2163237223,271000408,913783772,3424943342,2628115973,2397572967,600509671,2948904861,1008016168,1157854173,695097190,4180415898,1808184906,2788628594,3400150762,2562328638,604842423,147218487,2044678546,253658330,1579531945,800943348,3528463168,1209972732,1802075036,2640520450,4041958207,2365714625,1510430311,2416873059,1288236424,2716373202,3135804517,2675815074,1149858160,2308130801,2665806047,375130404,194764566,465750944,3280413991,3517963611,84829329,3636204900,1249670659,1304918612,1970657921,3392504846,1278096110,2526804747,1449686295,39621510,1814762196,802343099,23198706,3153163056,1970361255,3133507870,3285070131,1361322020,2361677912,151244347,1498139030,3276813430,281461452,418321881,1436191855,641939935,4113923384,3357989853,1950427907,2148347328,3683611053,2268906953,418860807,543548814,4215963633,4130132508,1994794781,196777875,3230779557,2630742207,4070889000,3854295558,3240006528,1076963494,2031721742,1111367930,3924523228,232560641,3350209535,1539189483,441953659,2816194630,1140749209,1688595038,2319817082,907484070,2678395534,1016204944,2893338818,3562260398,52661832,2551384137,1181967289,4266719685,2975903108,4260606994,2483556325,660440585,1645723230,2826928054,3183341090,275550588,130779779,3498282761,467740129,3267606463,1949893210,2717607625,3688965656,1942074264,1282422039,502377803,733672711,2621859981,3747020969,2445108453,2053152047,1649208355,723081259,2284065381,1617938044,2276734891,488304293,476013115,2214862486,56797841,3597650438,250755358,2197119133,1408635818,448479256,44552904,2125794314,598536333,2741029523,1372234641,2934704213,3186494784,3157860903,2399497911,291129946,3009308819,1420012991,3551222599,503737684,1176655332,1230475630,1267381608,3374161639,3599358102,2828722406,314501722,2265507900,167471897,3293927274,2853915851,2462690028,711357401,3383014218,3820377735,1430666208,1913117929,807700067,4179248889,1342348909,2042834474,328387752,378040427,2627001352,2149525429,533556949,3156321083,2292415119,2362506939,2683776499,2334303426,3570415676,2827278979,892005029,885657743,1593633755,1121969559,3135207436,854529925,1638165925,1938304710,626533659,1860368344,152039135,546420020,48974456,3314450735,2122697721,586204449,1318687020,2529767090,3128554086,2454038342,2493777658,3717016113,3572899600,863252177,3477554654,3530908540,3460013753,1321584062,145801817,3850914146,1466914992,1520936830,2234667248,328662021,402237843,3082869378,294364892,4078202041,431432452,4078710422,1547565829,3648407124,3135370847,2281265108,1923026207,2617875930,2370778974,694734765,1423294197,1192236788,3406877415,1776309462,1457235995,2795031302,1930622254,3937256304,1313059348,491630542,2215472522,2936335059,1818800462,3431749332,2697479883,4085583757,4195706896,2604812414,337745490,1198337410,2303983957,827706765,396424550,2172930396,3435186646,4276177847,2021353481,85788582,2493647419,2611197324,480585449,2086469022,2416177315,627347060,2279062160,2958790624,2689331808,4160560286,2544502623,410708335,715141218,3118448174,3633995702,855973324,1762857389,2887232377,774270392,1896290227,2156048608,1893962277,2795397943,3349777666,2555888821,3402301762,927830816,3380641012,603332501,2834234833,367435653,993835023,1321389575,2248850443,1051561901,2365585390,1861333755,1505920635,2576255141,3571474939,38393298,2972732730,3946447723,279906111,293666606,1580308516,2799752467,957474976,1367784061,3369039287,2489497941,658415673,1603158974,1953649993,859186881,3407036755,4198255849,646731020,4269483732,3652352408,2526585379,3433525545,249685604,720505374,585457316,2378998553,2996193921,4011578837,1987566096,489362299,194870055,2608498673,209892918,4129132231,882070507,3249083780,2448373207,1180526072,3360134897,657327653,907924937,1580580353,2889307995,3096839679,1483983615,1594147200,1396916586,3252847822,2327743142,3625363657,1955233906,1240730764,393374542,2885336359,838636606,3107724918,2742680384,2255869514,139351306,1489901218,2350726700,2566842023,1024316697,3498041969,421426907,1149221069,531393511,1349861260,2381492278,2201613989,1524871107,60238497,2916719706,1799667284,2262689079,4063191864,3490073873,408008442,4219635263,3228297367,100528479,781631713,3606447324,2928198823,1398349224,161737780,3272894016,829238282,1805042016,226564466,2226012153,2143255540,456685136,4265071372,3684096335,295916775,2375013721,2738139219,1418598582,1150183179,3379311323,3102752497,3034068441,3639347308,1480880203,2253000277,4040385121,4112139884,320730658,1818721441,453743627,1311157497,4125331019,3004036454,3735699042,970469072,756041687,1813551605,1488648337,1352152297,1902457172,1777405935,3848661111,4136307515,3861852912,4009601859,2161710691,715126937,3226781705,3387705314,1568149758,3566495170,1661379474,2710958411,3741313274,3570047438,4122964386,2917361706,742130880,2751192863,803203952,801938081,311927440,3455483740,197464697,2734740797,461360512,1832145673,3844214987,623204895,1003493383,1506283609,567789329,1341492893,3485925667,1772717506,598417985,1475470038,1923814173,386668861,2032285707,558755456,799671392,533110840,2906754984,4097789525,604386597,775692949,3263018761,2963699567,179893171,630950309,823998232,2977460480,2434765307,2305128793,2501731247,2139284400,1602528677,4087228881,2947791512,3162983490,3759338148,2304814708,1728329275,139363405,1141825591,1919336445,3589278037,225946909,193903184,2536512071,3219365526,3805042490,2353691437,3831054056,2572970101,116940628,725801570,3670551352,2394990485,3245150455,338297413,1452094700,3492525112,1418867926,1853621209,2387399843,605780635,2119126302,3818206039,1527991297,4064076829,2413736122,2307068031,3136770534,847739458,2116699622,2472045531,2953479101,1021700657,2623467065,693934018,22621030,1947033840,753203111,4168979053,2371885462,3043269108,1158570263,3767158709,187885967,284516652,2030678787,4049686978,3783655052,619662053,2131846323,3246715391,2240077952,1166025389,3135148019,2164164463,1670374560,3377953854,3834253652,2075728513,1008736024,1803079430,60607954,3231275890,1890591611,214037192,833105280,2435456958,1286584176,644102277,3935350814,2122739406,2450653966,1342829130,2147414540,211485239,3688955339,2516467802,1860163843,1036398496,2349637148,388699486,402914331,1518870844,1251396020,1201830100,1533650442,1760235940,94370852,933051978,3805332930,1128855196,2601585410,9221373,2880893376,4048741243,512836034,2567729295,815412310,593982967,1636466374,2072269540,2490809788,2770640938,3414311150,2795251698,2923106085,4267702902,42828459,2986929441,3987969569,1897166337,3222828302,63609099,536872845,3361039868,750642430,3199434748,3728621625,18666421,644109996,931681211,3354828592,3821910763,2433972774,141253389,1951925805,3568648931,1037922567,1792665122,370761732,512902114,4210622018,2992582466,1215700819,1511711177,1946144908,3920514346,2126905720,1327490453,3493342622,1741680834,941741326,3059588973,623061963,3567708847,251475613,2798367505,498872989,1181362507,4232742924,1444958470,2510740788,4242673868,1081694168,2752008355,3721037557,2161899092,336306057,2869406900,478503928,1793338372,8766964,1540462870,761438745,2712656480,1119904900,3674368499,215409022,2391474627,4108422123,1003328478,3059860742,1770801405,990285996,3407444775,2983413946,2903654415,3784171555,3389779285,3373278956,3589563135,262528926,1455681943,3208732197,1962693280,219343259,3640748300,4183585828,1489262305,1661719743,2069129238,3647452946,1799323318,2834180329,2211610562,496318222,1892495783,2451311543,1334720463,1588380862,683138974,1922307047,1948501079,1313383111,3861328877,1798144398,395015443,299860646,1831687166,3225593370,1509023136,443195600,2047637180,2471112542,3858644895,2921361153,3552929881,1327670025,2981880550,2953269465,3769080060,2187985106,554249233,2631946047,1921652643,20176923,2737007656,714620227,2632488343,3025788630,3478896770,3506061689,3559828663,1237897568,3779719607,1331352216,849808077,3618351940,3436092102,2966507134,560747663,453090833,2709196927,1615949587,1273440645,3463180585,441575417,935509827,1739325941,4054184058,1805021328,3624911362,146797874,849153449,2017031758,3075698925,757259833,184003665,2014183489,3553778288,2765234688,80953012,1057539092,315440403,389360756,1042555241,3888203365,3576577339,3287129630,2877269250,3824596950,1263816072,1471626484,3804992459,2604815476,2506832336,1300037347,649910605,203156106,2576273280,1217702892,3247440929,740490945,3283218130,577210605,2962026632,810991651,3141380739,268016394,3987588604,1591609181,2904425785,3689774668,2160084293,2392649606,3879714198,3046241305,2178175058,2761930061,2876641446,3716506576,2628842309,2560150436,1553456554,1089913779,2893615769,1394204508,3888204099,1365061206,1432273662,1071655194,2545485568,2286927885,3605296464,1672035920,3807771318,1794126534,1124354351,3076399039,2407684722,1325134539,49413864,2174277954,2107432615,609231402,3120158524,2944506144,2985539752,2331269158,4213420766,2208517993,1457371021,2814568064,463340346,1956880975,1613558017,1689359676,231577129,1415754063,805190818,1035892395,3513319618,1145879603,1980783069,3182076228,829149905,923257245,558888802,3524463545,3820449631,2553559632,2213619540,3983913990,616284266,2600694204,3193035742,2677987059,1600759240,1057070411,778251668,1778704986,3527082004,814344529,199731616,2574688217,1827881137,2474556197,298839381,3682229473,2142874263,3600356090,2042904213,1599277433,2785033128,127750010,3837611278,2074866869,3820368373,3090898110,3498165853,3237444280,1021981801,2676437014,3765765587,3320045519,3043352361,1328638381,3657383259,2476194850,3561493158,937359549,2757987878,2447325202,1453877955,1514392989,1654296236,2860963045,1917030504,313338161,2173855032,1344375372,3400234350,3226063059,476430463,562356090,3344755574,488042118,3976722626,3231516488,4034697308,3944833673,259005176,1486086323,54754199,1130135334,1367003636,2598641495,1224684615,756788491,2007402027,780497025,3748516929,3564426180,3209854829,1370192199,3634477998,1146435448,1351128294,3671888108,3381422166,1159097508,3149764006,2336320205,399785503,2565433162,3277967655,1570791727,2535108208,1266099644,2974532462,2455714539,1673119298,3672052820,417207234,3460327540,3477588152,851306465,3194356366,2831272251,2661647503,4138810554,2978071170,753502214,336989460,1095188979,1426676820,148420230,633938959,2846219664,1708302562,630158942,1396237673,3030569636,2435417937,1116633072,543394526,3406490719,265879227,4237190883,25233091,393855606,2246636777,3387223885,3229547208,2024739875,1410651193,2611778533,4277606362,2320896938,2519581731,2473175455,2607051624,3776496454,898026692,628097511,512358353,2352332857,597771502,1162764861,2344648683,2363755035,542888892,3374952356,4121253381,696248724,657861156,512370018,1545555377,1485853388,4225655419,2791454954,71344495,3212462362,2627470272,693671487,1662605235,3280370513,1760021914,4096865154,2462927858,3688154238,2374237606,1591646239,632316905,1105364255,3259383565,3648036978,608487088,1642100169,2439230032,1291528340,1666372549,1986819214,4119848170,3746144330,1533559411,2068532325,3001180022,3441537266,3892623884,2624048582,2628305078,1410516324,2861133459,1131770443,2430153099,1530502801,2974182958,2156783873,1880485577,2700929778,1631286981,1387961700,1695121782,3739670607,4144210110,2962442202,886322326,2607810907,876486863,847973683,2006008224,3957851901,1907508413,3317608310,3465485057,1061736362,648886259,3539915084,2233862137,888651976,1367784397,355325761,4163154775,3270890182,111491149,1252948958,776490858,1804042891,3582428949,265031736,3883019473,335933993,1808493493,2883458670,1853109584,261448062,1725166223,2646892353,3241443769,1684889802,1059410316,2114472329,1952397246,3648103971,3434424062,2989345191,2489087723,1965778889,3165493434,4135799032,3745224961,2934116215,2318011210,2327076017,925428314,1982403808,1765735514,1345274763,493995646,4214511564,2191745675,838336467,433305,139976873,2616805799,3524567160,3471077707,704988905,1775032558,1443451431,1629848490,774877782,953793292,2471805997,2511604514,3704644500,281931882,3375951997,814534291,2588708749,1997283415,1451237468,2783047741,585276543,396328605,216968337,1871390768,3654735631,1274895774,4159563116,721176400,1273979096,2365982327,1066344155,2561036826,2518108338,4140691808,829472349,346857958,947910174,3621112605,2440587571,2667134565,2320261025,340590305,2592039604,12800463,3729713643,1459707510,1408712268,1399343476,2108751256,4037045589,2426626654,2499296080,4193039202,742354704,1723237906,3011140697,2358971208,2337761100,2489557817,2505685416,1184353589,1806943650,1862418479,21820578,3111493168,2848574406,504638657,712852516,2175665759,1479032346,2732027985,441754546,3263055514,1244599707,2128117965,2779119466,2387187518,3529625315,2268876598,3240316275,2582395250,732646868,3169884836,2857526684,2501292385,4214106645,2559603980,3143637840,3379956403,387210068,2600748210,1731462823,1709015134,2205618127,2270579734,329939838,2762398656,1653339763,1193158793,3272263180,3138793858,2661799169,3832802112,761062225,2791869890,1441056095,1466537236,1909075968,3324041272,846699801,1289078389,685584187,1530288692,1535421169,321038423,3135331720,4191685474,250770232,3217316604,615393490,2991993684,614364429,3029973960,1233895449,1012357783,3638076444,1530625887,15411675,1291896889,1853003510,1263501631,2965382961,3625867757,1294363229,1785130176,2000273395,4168265636,403596365,2411976843,2361723201,297890139,1342194230,4100257538,977467397,160746820,2083147578,4180960687,2441697344,2371480597,1994510979,1810311276,1523064828,2641286676,3191204893,2753270653,3708799891,4241626278,1431016694,1014533722,2649448026,2412687816,172546004,3751811399,2617116199,3895274057,3850994675,4118646822,2030684956,418627519,1783862358,4092389095,3988916357,1503618610,2309040929,2675966680,4005042727,3810260078,1903490611,485941786,3089365577,1601406693,3722667359,2359655734,220928675,1680394894,2190175171,1591171198,3175750335,1144286950,623499625,1411245797,1260316218,1151420456,1864692520,2778335781,3544452052,3027168898,652716576,1325042957,2373882267,1265976489,1782909718,2903460752,3789391566,926118821,3281305373,2626177835,366230157,325905840,93284634,3792333628,2564695794,2762113477,1575534357,1889848093,4193023340,2303457298,2207661250,93034295,3315104889,1519016620,370622147,1346632829,3429172213,2590553581,1115819599,2142111562,2226136793,3860089910,2341056605,1346868227,3825615540,69059598,1462404947,2799967256,2904993607,2265826637,3956644439,2989750159,2675334755,92433076,4094972285,1483184809,2494001650,2537416719,1297773838,4090883321,3293924354,1169880190,1526686308,3397393893,4131231056,1529503968,2322281414,926878268,1290572853,3202912040,2574137171,468726749,2331771977,1690585684,1578268039,2916593756,862394963,4059845866,2315357296,860799802,3931869235,1600684492,192117593,3057715637,3306098754,2275443846,203358683,2085338529,2221457719,3760218476,3399864487,722965478,1211514055,2530873069,824007703,1486073553,4119317619,733947546,1417577864,4020325173,1839852706,4251469292,2712065190,4167253719,1122979240,1113186336,1314388263,3241435415,3300752979,1120626398,440605942,36664558,2603347607,1723385823,3260633059,1065459462,3672630868,1574713667,1139718312,2163662854,3040180435,29901771,685045315,3257394662,2048404047,4177656952,4016093217,3751312760,2878657380,1647081692,2903206265,445445538,369338580,3984019325,2841059337,2386518434,3521108204,976811280,64268957,4125495110,2249680669,80382321,2955453974,3116944808,2223682049,2882710914,2625205877,4077805899,2084422524,1009035745,1665935773,3796573899,134391883,2239443459,3200317167,3099353011,2114409531,4245309158,958603875,950334348,1560533713,2149244783,1219086496,3405936034,2203644802,4287532394,840462772,619905821,3239443371,1365955664,2510561198,4002689048,2350050041,2425759149,3475205955,2712820931,144894771,822093420,4004781310,3807344136,4048087924,2958910286,1250269750,2351578015,3047330788,3849384166,745469261,1697321007,2496395376,3856245116,4109672118,782029809,3534925675,2371591234,834323726,3748677982,3532041679,3591473456,426632259,2849907809,4038527261,1151123030,3472133971,3850999490,3470334741,2194536598,1602113695,1722868877,2763210838,1220026504,1529881259,2366969973,2783544795,159747300,1188830426,2502636712,138999647,3044227007,3329475459,277381417,2859387717,118446789,942567430,1257970610,3860338519,467548010,3471072772,2616558588,1998422130,3148514382,2507615800,2806082990,4174293302,123372804,780587555,973757636,175889399,241510837,59652915,4069728822,106527289,1934046602,1933705189,698670660,4056141488,4145437284,2201191996,2383275853,849324913,2832864311,2158919384,778249339,2742509113,1288180199,1711004741,3063992812,3169917076,1336291404,3439566701,694600696,2219243571,3618451291,252243998,3711324513,433590394,3080580096,3492440482,2882717862,3323836912,4068579,2153578682,3293772902,2557334127,242678031,1593133486,4171670984,448964125,4284346810,175362541,1449156515,1496034129,2944569221,2734068655,4037758424,1656403128,1764298715,2469648511,2892733085,3053306895,3667392706,624335952,570826103,614671159,3159150773,2407590137,391086706,2133536068,1573410265,3041408456,1698871110,1934130054,368273583,3846480147,2707829712,627053066,2567949140,1037744518,2861461643,1223210677,2390029624,452868661,3286744354,3455587220,1466066553,285493591,577407709,1794038529,3995750830,4277213175,3935677200,3069398544,3629735987,2718453605,2131032403,1808337836,2929543960,3098270668,492251547,596141519,1870346650,3592300148,2322200700,92217662,4015725312,4113236829,4081499021,3976667247,1359145965,4145400747,3774165390,2285031142,1865886785,2919939423,538670436,1241070510,1975601693,594336895,4254786174,1964179415,1401650451,1931673908,2495965569,2722804974,113129126,85474422,3206729493,4122106985,804003734,609652394,1461103818,3462272639,2811082408,4064947584,3142569076,915625614,3899231887,1643827433,2529996608,1064138627,1693278557,3809033014,4289038919,3844541770,3444076742,2250605105,3277693329,3847585308,860612755,3964544675,1066592853,1958883080,4008011120,3858616572,2103924886,3527844240,178301479,3419633105,2633149687,43779174,971211619,3753081525,381550472,1988243820,3506450446,2027770986,3916247356,1578472138,1323789015,3488923065,70702032,3259084682,1583728003,898784440,1074215204,744540583,2290434851,3567974288,1153805134,2338706553,654243461,108771932,2334142615,1094898005,1238179737,4082351177,2065587174,3051171986,3949096154,914724108,3040360479,3493267902,2825750762,4061316503,1848967173,3899587034,497924083,3140638957,1332237960,121810127,2630565337,898835930,3958433435,719434619,565609691,1316933724,716196367,1195508605,2770116149,505471398,3858451255,2148375212,4004646870,897326590,246964134,694927422,1451036537,1536843090,1683212396,3368934613,496059278,3009534640,3551989060,4117099994,3496808116,8015533,1105424053,803219212,3456608821,3723535256,4177934709,2857244069,1212869373,3034383307,1881786145,3880723378,3461546530,3615700679,2691831453,1982395062,1908636067,61688389,910225399,4221148243,3795567890,2931660119,421401969,2173566888,594234101,1282963129,2626184095,1522263881,3777092568,1142412221,1992878510,3453932139,1134820921,1971368625,2045779074,975001064,389260207,3764562231,4007480343,2179775990,2508102208,2776419859,1472283083,3770344649,820936879,2888515884,3438387889,1837194951,4213609713,336870589,2046375265,3814718408,1428502450,1164685306,3947682216,3876114205,749175059,101399183,2271918997,2446819080,3992858492,2783314838,2554379987,2485277612,1612689470,1452306089,3900149701,3604985584,817266239,2590911301,1913260009,1190231196,1593819752,2660282441,1151586665,1043842945,1493529806,3324376641,1323988955,2004724124,2865656274,971913405,2199515944,3394421817,3543441128,1543642605,4245612684,1342599801,3733104028,2195439714,2901384719,336452432,114069698,1150384934,47783730,4289195155,1725711100,2849462807,14512188,3488502783,3252131251,999926960,372092028,4271661826,2287618068,4049502457,3985585666,3034471341,4220826856,1599043228,1197401375,3033348251,4245904927,4144260279,1638839830,2755561834,1546968677,865050891,3074932715,2448875102,1141859700,3243263108,3527607590,2359231619,4083246495,960718053,2830868331,2255804307,1150031330,3518751229,600884832,37710065,1347883414,3798491876,2245016783,1416721174,3316434207,3987386180,3984731418,1640638395,1872397883,1459021338,3887094297,462187808,3374394301,721687265,696635467,1555402044,3183650130,3096140383,4274790214,1563429411,345307908,1224918528,3625283295,2850718594,1625580485,599556495,2987708107,2425526638,249210257,1935702058,3962892087,926954385,601181095,680081613,2102798294,3250061004,3040073295,136099377,1871060119,3331618592,1664655184,4164213443,2021031380,3960392879,2013948094,818015967,3464273858,3967149343,1668551803,2739105801,2339996213,1422248109,3260049746,1758850282,2177177043,269996930,736738250,1120713422,857596836,932963373,2281166405,4155200355,2821339562,2991409225,3237448491,2534151489,4208832963,3214295092,463725706,3703131622,225750340,3616671175,2557709719,4171633100,3021522545,3898996490,469795932,2345920602,3203842465,862813404,535322162,2315908645,3915483825,760230265,3102330458,3801248571,123804825,3149862107,3761143070,1480449294,2679199502,1152345628,3346057071,39395008,3884897153,1543994152,1323956236,3382772284,3182015325,958030467,3026450573,2609986832,1981676060,3616177916,2493824633,1623396830,23175442,2009390654,2162391927,3644875140,3085248639,3966719570,2241440763,3143583883,4207608039,843971028,4206201935,3172755628,733342315,643683153,4029052480,1461956805,586478437,1664791116,3596168499,2740925749,2792503590,2412842552,2544447800,1467726321,2370640025,2366133288,1605697497,314815445,2622811123,4254983093,2894525637,2211756919,3896493341,2618572223,540013627,761102554,1731912708,3513441784,1820581768,315150830,1419560261,3863162890,1056869693,2923050412,3199040539,2009472828,3268176866,696263514,2440447208,216778594,3916483664,1804660727,4172898914,2693793619,1531458,2006031088,3593664775,3856749118,2670048224,4188594505,2551601085,1543905466,837528461,3113115806,284208489,119942158,3471081288,2875339770,382596834,1238721490,3540325346,2076768716,3754360327,2374533698,3585311315,1971800183,692333696,592760322,2087359192,745517987,619873643,2471248868,2113545526,2363745569,1977731286,1308515818,2227023351,429422250,1907199817,478263444,1610243179,3424383185,3886071944,2375757280,4272148954,1029771511,2590845582,3105329993,3442122428,1867034830,369150602,3484281376,1725102974,3281320863,1596009444,2511693340,3579137260,699784018,206479105,610181147,3439047203,1890369565,3726530592,3655633135,68639904,2595182481,3816958240,914880531,2187338444,957324844,3257394375,1318934603,1064998895,4104641698,856437616,734712138,1442286217,2199677621,2306050696,488075536,788938054,3728507010,985079109,2572435675,2087855092,612287729,4065925176,3976426306,2056949333,4170434062,3715284582,1409896204,2717936416,1615367655,1028060635,4239185701,1666071759,284947001,2170605641,1837425102,1980042286,68208971,3151568898,88753797,226352302,4049505086,2456298242,1176442683,2060179266,4271336341,3237764025,2337787190,928100945,2605671906,581624578,2258854567,2825392001,4159690624,805249449,1245472577,527889610,3698881,21226427,63023599,473473565,1059524869,3028446485,609656770,2405180054,2624928742,3044136878,3280934555,577452375,2233298319,3314080485,2255579283,604745405,3982809204,2094485762,1127098751,806657535,3233214634,3176407153,976053355,3639611226,428085451,166761312,800094599,3697953553,1943212151,791627794,2723992363,1916112878,494619374,2631285990,2077286228,3116620393,1464001801,785282387,3730633773,907032724,2621886316,1004950931,4271541897,1158681707,1148192750,3579273190,495653056,1232096,920211755,2525941092,542650081,2323979276,261000355,664098100,319837239,3067896705,2380424892,2687585851,1870901323,1679327964,2482444571,3792136069,1011056610,2241310849,1488875991,1367694219,3132566590,1174516897,421358170,1662687296,386517370,959980864,2095372445,3004229518,1791865704,2958144520,2674735001,324068898,1849586277,902701781,4115273783,1031423620,2458222270,3713518544,886857514,1446692199,1834779703,2144402984,366833804,2033655447,607105018,2560609297,2047982284,1091352401,3368833707,1400412383,1563436377,608376973,168519931,2348128802,1933861246,3541161230,4059777418,1082179716,3503298535,234080202,3681828677,489299158,2943005914,914943777,1022986098,1972701578,1282921358,665064390,1586608576,260488881,3616480044,4003337803,850058787,1945723131,172543009,803758826,3570648184,1641529010,2987635138,3019189168,2044647385,3469983160,3940310007,3231874331,3263972353,3372408357,834107091,2203680276,2777203776,2600855157,2418377822,3189786530,3638306354,3488640236,4109530445,4167847572,1101817177,669729877,3129249531,925680727,2548824473,1551298600,3035486062,721531126,3485030831,702592202,1618937998,1892151248,2896497952,1914225153,1974053226,682063395,2992398736,3423082229,1139425102,172164650,1304529550,3955522532,4249025068,1034038395,550992584,4162615659,2690881321,3113126960,3528907240,570110802,266061914,1074251737,2859600536,1468331656,57693672,2159532008,434980980,1271054107,1979610475,347577760,2074142600,596528837,2776119126,2587513998,504681636,1234524859,3270729936,1952206670,758042913,2460588135,2647845080,721030180,487142619,484688658,479115399,2292538941,886334996,1779992846,4188013704,759971757,968703150,1896703708,1536423198,1197118852,2008838551,934215117,1221388125,421345679,2083823831,905894764,2978587938,3865716715,2401436274,3596168627,767614826,2488612295,2016880065,2478485487,936161319,1086556754,1615554762,3872235002,263851313,3021178915,3696175139,2291473100,3701262861,1731020618,1439811307,1958381706,2089378437,2780901058,157537125,1890099121,3361981040,3268544561,3478565403,2556302667,267438941,3310088574,1040059919,2063063454,467437114,2539709531,2610409643,2231323056,1523755193,1453892556,845393307,3958874157,475187133,3819781525,1118324837,633768551,2463526660,1920887108,3186001633,3657245579,3926306685,3738879662,1194687259,1926416102,1720288289,3582770479,1462813098,350682759,2962354202,4063489246,2260023354,2321389863,797265590,439423906,3676058272,3061898614,2276415296,509348979,4069462910,4088058382,3661304466,1504474174,3904352420,2007702321,3206459370,2880790618,3080652348,766552299,3216517240,2064361759,2841578934,1196968198,210655153,4040047370,1016894694,4206339478,1068447681,3665373875,477284166,578646746,2506943850,1168250601,3909214125,4115051607,789363312,930100560,4163993435,3544085837,246300315,1446785414,1906733962,2411902558,3377896464,3325101600,1772398934,1677778291,1925631937,3801952714,1915800862,3946092830,3163696991,29448451,1077324376,2178763083,949441312,738473592,1363644168,563575039,2450895445,4042058096,191314728,1003296875,3548750279,3376305518,3699321593,3896354188,2527206457,2004252549,327692692,3944977001,4100164151,784447153,3842554885,2837494193,3439966636,2466074624,3341351190,3689682542,2314578362,2241593946,4191738398,1631675201,1362696988,68726463,4063337685,3269137953,2919800464,3116489643,153110202,3072799166,1263684133,3139068452,57775254,1113258737,2914552598,1886593142,1565547396,3997849904,4003201168,2443304100,642147930,1741106438,2713807470,1837913838,2404225222,3188068003,3635720407,4056473804,2354773801,664741137,3846274164,652319702,4217000845,116888902,813887905,2024864072,585592629,4055527479,4204281341,3273128153,4253669943,724392484,1784765996,2449036742,1688956256,3957474148,1515169032,336320329,2441833608,233531090,1435733411,2776908625,4285488997,3007140964,3331503438,2035528367,437946909,800244145,1575416400,1193199862,2406809534,287290020,651453182,1927709018,4160776671,707779278,2158549014,3733714004,2077321924,2223080492,2942022242,2472994533,4262064624,3975929544,2099349891,3665236800,4215631803,3520243730,4133524388,4043430603,2153624694,1205937712,2428148258,34878540,2703536666,1880221863,3737882014,4126261340,2326559886,28390249,541716033,1495402125,483099347,2504289250,2263315888,543716087,1177969971,2911237747,3185004579,2158079533,3509273534,145440678,2920815035,3270670902,1635384124,465072950,3359858196,3793396956,1404784732,3646209532,2252739306,783010702,1493132043,3844303665,1246769224,1023557290,2582000504,4120965908,484743387,4191552667,788488831,1761510670,1531366947,196137071,1992789048,2131242387,2068250926,4247237758,3280822174,3983817482,2329346534,3441235734,2544948234,3643846899,3217967189,175299034,1210122624,2610302506,1829326172,1555123130,4168836354,4265482427,922856499,3376947010,1376207615,991260847,541712068,1827657280,1569164692,3915466095,2847701543,3107449963,1247940763,1107492127,2379634664,1984127592,3260691213,439657868,1255515016,259351465,3449330403,479856833,475787187,1430977702,2708514922,2309959311,1146395212,469885314,1720383326,2944907790,1311848796,679397912,4275056088,204857630,136016692,899619714,1881931644,224969380,2534449013,340821861,1304419526,3922987476,1569582418,3500395398,3577860300,1225301583,3115901235,4039998397,2037649305,2186151506,930589970,2780729079,1414987809,2138323518,4070008985,1262015941,3529411281,2413992829,684075621,3329133904,2961893750,2903834005,446554431,1295128589,3756623899,3043164801,3317080718,1337901131,3218825271,539330648,2381004278,1488662966,1376317264,131372416,3995002429,2626396226,492925119,2671562520,2985305465,3740539597,3814276103,2754685421,3534077468,1189886301,1093631690,587695393,1547113288,144299420,3983195098,1283417945,1835778381,4050193813,141217325,1798044386,562496591,3588131102,925857975,386018890,335544182,2632716776,169636563,2402125367,3883087093,2963563594,2404011797,3047144762,2607897477,1555825177,2364090220,2029781544,3518917975,3583223351,4177107925,782602134,937883246,1624043223,391329951,3268654937,749984551,4154474501,1063152423,3753699982,1298737983,214829520,2563318481,2883481535,3288482032,2630532626,4147163612,3528109165,1073501869,3266545042,1944966850,2742342726,1896914113,894430323,396517798,61668911,788910828,563997189,1317379004,3988240468,3095328416,3377285035,3404495582,2229049066,4294768684,2618388206,3048558080,1889965844,1268490982,1876941461,3973834191,2867186387,1127090743,3753103165,560798149,2306582247,2921545015,2965432481,694654621,360721037,1070293287,707214146,1364068831,1109455165,819562041,302605718,2814021829,1223461110,3766427108,4155205838,1716156176,405337173,571505921,3951748701,3368078805,1565761618,3613415144,4209155336,2431893501,311684069,2380682511,3765923956,1233887728,1427429346,2098588211,1341871079,2095599625,558425417,1791376258,145792109,794720238,4128703522,1941517258,961704498,1399168973,1172772856,2856086646,1022151870,1402337646,3309437047,190392646,3846271427,303340250,2348826621,1440192619,4204291849,1246436378,89565780,2899743575,1794159601,4196125121,3005833906,1029101958,795372547,1849209591,2166170967,615292810,61655204,3447775912,629894848,1470216968,1147564013,592070869,1204970798,4046376752,2068807284,73934474,704908888,1795920065,3852692473,4103435785,1593422305,2736725636,180395614,659413667,1308132006,2312971053,3290271032,584219770,1473792724,2123204822,4240100583,2656047885,641027098,320376551,724567246,2075191840,2448687309,3177311009,58901861,869383848,2410548526,275676238,1872984412,2673602017,3144596064,1991008277,681012311,3165012125,2532147459,1323565333,1880563429,1204950911,679091015,3861322845,213260345,3213693608,74430616,4170105087,508329172,3297653331,877740830,3966169364,1225274207,4097617729,2609953807,3147716504,2529562272,1638906888,2768021785,466194547,977462410,1585461910,3892563030,3402962492,636018420,116741664,708008668,1508871233,2083181513,3071200236,4040598976,1581750694,2708921268,121281378,1092747113,3496779178,2159199232,3322553280,2847874720,2227664949,4047046450,2992708445,1529622838,730703515,2435944627,2162606843,2198419779,2638830140,1686682622,3073912000,2453379188,4113835933,3472903123,38529597,3444631832,1442478417,2048274262,1409900397,1900721914,55341114,1339884202,1083007209,4267253726,3246897984,1614952800,724373558,1796411531,4104839184,3822664011,1280624968,1574745603,1798746337,2186441934,874253819,4044343516,878029971,2975563199,441025680,3256602572,4167365884,2481906342,596246636,532225721,3918824800,3531451061,275946663,1774247738,167542370,3271806650,1251759010,745416791,346729602,937851868,379943308,2467331040,3904122354,3011385785,342870277,2456725631,1171492032,1528385310,402900640,420135901,4289948960,157709763,1951059188,3180993207,1647940377,1590423189,374429639,351638374,1073164861,942406153,2919929065,830923157,4091268339,3704527532,1189211118,2931042332,1459497052,2513133628,2235464509,1090042602,34091104,2265432197,877115033,2959495451,820342335,2263152439,2883931998,386413123,3533153140,1204426797,3655278967,4150950881,1088239121,2527064678,1241783701,2516215723,2520276660,2960284858,2109632665,2646146854,866123489,702207774,1363197445,1309703391,4284118719,2741043678,971268260,3239798602,641955440,4191789138,303538724,4157778819,2687722665,705694145,2853884437,814324852,236661267,2439105523,41527924,1297535647,1958077581,2493658118,1835411116,3666010731,3053419919,2347941344,3733137234,3312563670,1208082138,2554864461,3521603130,587722151,3498737122,393610147,665336681,968953843,2478930742,3585078418,1847428413,1517413211,2184498788,537607385,1923436780,975178193,3165622196,3640358551,2975508437,1200424418,173402426,3031394006,3032383871,2006509289,3934745967,463776743,2470388433,2278255204,2039702947,4024640173,3920534501,1808892888,3185043816,524352995,1236397662,2955105505,4134345631,2769695715,1129627425,1181846650,1847564691,901160440,2026272277,174550316,1564648072,148190828,2362802547,405654408,3100048555,831191335,3844716277,691456376,3362966912,2401293344,2844865487,3703644708,343596620,1333748946,1205743279,3012416087,3127934093,1734076749,3202279365,1912057833,3755679533,558509140,1570035073,4195800123,2421550553,637869563,4290862859,1995554802,4000876095,4182782947,3179634615,310756029,2343871431,3104904133,4040619976,2731476651,4079872450,2022615306,3748742557,854378856,1224903482,2505626946,3079319887,3298555762,4272022298,2576553224,152070235,3122283842,4265998461,1798107782,3648106687,3846357299,3925668322,2516038151,2824892230,2378536809,4241331667,1736441320,2977686351,2818818325,935173837,921008796,2655038432,2812430303,3898614016,2689750253,222563455,3547277221,526475767,1101654273,272416793,1652255792,4275495810,636909447,145425457,2413194560,3008285758,3561465454,1937378325,1236794,3096884605,3977622839,1292609539,3386805872,556553215,1189677239,3050503857,305173369,1036667402,613935044,1639511014,2098959842,1515598058,4231586332,3586866172,201655669,3274926990,545813705,67336557,1294971069,1767121380,389335901,57410865,2946237273,2991754929,2519395097,3463424129,614289127,485767379,4164903726,1625893526,3203149212,2990406760,3128084000,207653678,819642042,499401249,3548978335,882568181,124743918,2101886281,1478149030,693322070,2008077103,1675108693,1206559880,1476050939,202791423,275046370,3290768038,307293107,1187967853,218164395,3735984015,3713843058,170436944,2460191015,2173931228,3369823744,628717446,2241913286,3870938376,4256427728,1937528448,669714023,681597341,3554483525,2873814052,815369209,3192621167,2150887681,10618600,1781521594,2496183373,1556668001,4267999621,3062069504,1270608963,3455595199,1002162515,29611350,2065413796,1868540856,593525921,3430898847,4258039903,3782130165,1864564662,908060589,281171988,4238721487,3907612852,3228064104,2902195738,1980604888,1391117135,2556508278,3759724875,3259633669,2706245829,1340626241,2622384002,3614637168,1147979078,3776548738,1083565171,986557940,3950504497,982596163,3687924910,2886930816,2084138939,2054749233,3642940819,1673611738,2988841546,1306246744,3296087282,3623264157,1617959344,3122811398,3000530361,1734487173,1502266830,86668747,4241503042,453364338,3874401038,1212273446,32284237,3728707040,2587262449,3744459346,596246470,4293229963,2003639335,1004932080,3813247804,788840113,3117683602,3083559191,3473305531,2927460822,363730834,2683975928,2141828518,1257585988,2500700066,4125659938,4022591326,4019933368,2590099969,1943426887,372711152,4082920711,698021639,3353448423,765519132,3467906196,2548022241,2913035318,1572596441,3528720510,2566422606,4190829453,1506275639,3654678873,3681489366,3889608032,3135364127,3776783355,1580393116,4161389759,1727274571,2122131692,476565071,3909364060,2920684578,36520250,387908000,2253548427,2988467589,4230581488,911172565,3303575902,2561130272,3080578851,3502313174,2057294699,2947973624,1467715209,2311662416,1442359246,993748559,3692991261,132275401,2084737299,2815637461,4148608296,1681170936,196186361,2797677435,2447315150,3510729500,1947243238,811943140,1393383895,2635549586,833340283,22819521,1824600402,6063082,3934788858,3715438261,3518649253,1223861826,3868239024,3853187095,3946340528,1854654926,2019445311,1804211229,1507732970,3494788571,2486740465,421469012,2893623633,4146361602,423926371,1076155250,1759340322,636398643,3840754840,1668908075,2766913879,3583399187,1121422562,2932649521,2282576171,3184087838,3720541205,3462458973,1924120588,400802175,2185270844,1491925804,3588922970,3385601225,3985627869,1748075056,1903359893,2408130746,1903067190,578590230,1133106272,1242478440,671701457,3594536876,740782903,1021562622,732073091,3246432291,2912572144,2892487021,3449636889,1228254220,2819650643,2712894923,556836490,2630823829,727033487,817185165,2869217909,623122636,2465751337,2448621047,2783928192,2292964545,2681305506,2315671709,1303072774,1020937686,2155661959,195334598,336709102,3690508090,3733687899,4264470532,1571998130,1060487712,2005645446,3766376750,3731231223,2421059179,4072217639,2264520869,998677933,3154630777,4054088473,2413576351,3714801662,1647509082,2686458643,1715187144,2790543155,2040678271,1418766941,2804252665,2785914036,2326795813,301389488,1923607135,150787995,3021677731,2684034580,4077303998,58102455,1245368492,716750546,2810390601,1119104306,1526374759,927518678,176835413,3738882395,1954809162,987610540,2118875564,2004468583,2260474649,3821502853,2275542969,423589486,2212507127,2363657070,3083281304,545231574,32991864,1761187972,60393381,1374306322,935243873,1146372416,3391249647,679106375,1201944471,4175965704,1763247285,559583368,139573243,926328189,3079308068,3887989652,1085296380,2993705241,3844037298,29592151,2137807483,78409798,4522032,2249228867,3901054597,1170004022,4021539900,1578649826,3574687996,210587236,3182137826,622096268,3031997718,159597668,110073104,1005440401,3138392880,1933149229,1577727666,1274845885,660519986,682437264,4064247062,4094755779,1288685568,3551217515,3488348292,1508277351,1602976784,1257008764,1328170514,295489031,3486054260,2624021817,583765069,2593681208,3478663210,2033302854,1918450673,390170437,2240070558,2721000753,2447544872,2985253992,3491747858,913521074,1321197055,3980750239,2132130987,1073905679,3503543392,2488183813,3364323754,1467157606,1816351892,3736493147,3069804179,1528840972,29384256,2220428724,1820966011,4063430287,2905578309,4219356668,2051573654,971001874,712577728,3985943486,3418275641,1431245755,2389547111,2317257542,3955902104,2068802583,3175949100,2245823268,3097491668,2715732394,34510117,2703708701,1196054852,1273707905,3396500334,1572790151,4050793699,1567054354,2288606026,4095384441,122621639,3780146090,1976409626,40149447,4286186830,1519357758,1178317947,2437313711,1552743627,622580435,630245334,3152499777,2604486002,1909216699,3543572318,1450465681,383421748,3937519615,1514015989,102129777,2789682946,3997639102,2115533358,641069260,4085146990,1128045702,2019068206,1578502738,2634009019,1853405654,56476030,3925640176,1658978002,4077969967,420335089,3947185191,2107942900,4268268618,890251727,1227407466,3966215288,4091394559,1605208478,3958109921,4289019605,3173947433,463891679,601118256,4067310361,3841583197,400733965,638063964,3982410864,3580217223,1273770605,617688188,6954503,498358222,3265533973,2948405286,1196496732,415530143,3319916947,1237007113,3361741287,2645808461,3176617194,3857026254,103133875,1369505732,726647683,2706492648,115935800,3478920031,2828261177,556461038,1994856474,4190968206,2663887730,2730131494,2311955087,3243442888,1330480704,3686089430,604363979,2299624670,1420728750,3166183288,3123042870,546744959,1843677033,79463561,1671035169,1617640300,261620524,642227972,936253283,1007426018,654350902,3142182802,1784556967,1938532066,1536046013,12066682,1753130877,730330753,408884896,1497010673,3730916020,3821326660,478671530,134330448,3460185146,1395829502,3148597016,267514017,2283340963,1542728475,4058357027,2094890056,3210116390,468821640,870173321,2139426931,2373434386,4258049460,3498134294,924672273,1401089721,187120249,3308246864,194060273,2754470921,1315188752,195120426,4055493739,3666600895,4270761,2321387011,3932663738,911475564,3010014153,928997977,255874939,2003573091,1496826372,1124064655,1419435963,3670679708,2803644379,3466908014,3561065983,1121934738,1447145465,602510064,4179675040,1321640979,3796291997,3382979594,4097218009,872500320,2823073364,4080148446,414459543,3746186127,3890075113,3359050867,1835212114,1928150739,656666877,2999741059,3025663573,4125028390,1560338132,324163153,3108313326,3552911333,2404070402,1342695001,403986778,3158523068,547172201,1681125588,2947709587,1909985224,583841461,921925587,3116323354,137569095,180865746,3458723966,548887245,1278647382,1447696225,1747432700,2100448579,1799029041,850322176,3968314954,663647158,103647574,2418971317,980949554,1175713730,4064313799,1956595003,2360981359,361713104,3017969514,1908543590,3859202343,4043516961,1758167128,4042517287,1997811644,766986287,1697561973,4259146310,3364874587,3714857307,4209478164,550332016,4075765833,2062873252,1645961591,1621594772,3148839819,103002140,1924180603,1616360117,853311781,159337394,1587473106,313632514,2224637546,4007748468,632364995,3903158965,3406623447,3931615203,882357649,3475817883,779140406,924772403,2654529846,1504952333,2870084469,1606751021,1088305679,1786843574,1033652096,825488413,491348339,1020409530,2551131001,3342000083,3845792983,2182677263,2068894749,3208418424,3994706012,489353361,2975667675,1860635181,3775122105,4202281057,3691267107,2631156478,2954200617,3167056179,1794185611,1169411480,676931097,3857403997,4035969988,1808068856,2012595908,2419501227,2153375513,187760771,1568443265,2490761140,2432324551,2683505154,849034388,2409051741,4131294182,3902528588,2533788821,173180576,3016123699,3384492049,330974320,3897861016,2148130562,2796367046,1943994174,184528895,4035384550,3079369909,4087720945,3628254276,361714989,134515033,4064037331,1388641478,2229211830,3068601153,3912418074,2952103598,1190698447,1677825433,476904313,472084138,1023133293,1782810255,418588832,2982443722,1239412212,400906979,811791238,2890766525,953511118,1452031646,1588634705,365693976,1300966366,1639744266,2024062524,2518446093,3790728214,194806908,3667682096,2092418119,4284004762,1896254509,4249471214,3534795715,2680303572,3051245793,2171117549,3686121972,3461195247,2077432118,4176283124,3650723479,2465018014,354156234,1521198471,2766539112,3638069361,1501552603,599894509,2402066289,839625821,2874184215,1851465846,4097664754,522491694,1517570006,650613034,1418185020,3477267734,4190654961,2509258372,3084865640,1312197651,956325643,113150159,358652923,1169205957,155017680,2090687182,3332564487,3687231470,3351347889,3324275656,2446648478,3411283388,557174656,3095593244,3559897019,3794384126,1429870300,3762329649,3580040219,3207247942,3991667341,1326835159,2203706638,1965435561,3385842293,1919857105,3518812227,3575370421,2345261611,952915405,2138359663,3439122017,712493546,243056868,52566414,2017248553,1633957931,4097007758,4117891311,2890795962,3585459516,483470688,2628175657,924127428,2017163437,2840980372,1223980519,3172660421,3802170208,4171847811,2694896404,2391446369,3537927191,4278818943,153122020,1414236342,1823099337,3019711111,2045246324,1514175009,2400892599,2991635747,2621752302,1982518393,3621744630,1233001369,2741219896,1701203597,3139503675,2787729716,891696252,2205594058,1379184257,1329939981,2230406312,1977382211,287813278,3583964905,1983917254,3267752836,1677011009,1320524775,2507588134,4279260271,1496964506,615933031,919120049,682505904,369957731,711872052,1221050267,2167546392,1615044575,3651150251,1492291159,2691726270,4053449827,1861097179,1905941480,2324319376,2082116595,3240231565,1038856387,1543162472,2284369141,890502555,2179160800,2705457270,947434420,2315304202,1162138255,2375594619,1588825780,2916692917,3019583773,1504803343,800210004,3692948911,2747549568,2210944395,3648171577,630544228,3348995316,3934764475,2889973934,1306114618,2073276847,465511536,3878190733,821716026,2680588152,897982275,721153182,4102902266,4146955835,1874746895,407026285,69568203,1643123301,3111651494,668760157,3546752315,582934483,1708589328,976424849,2408388687,3071887568,2337090991,636610041,2360023391,2431712800,3999742065,1919405662,3901844989,3362024395,2057109215,365843896,1946323158,4005908822,1686859596,1725957769,1852875059,1116046349,1205145396,1749376652,1577800433,3319724177,2916908074,2280944697,2261019251,1613779117,2967978103,829164665,410830252,2169937665,1160770701,1589546063,3405279962,1083282460,919916398,1551214136,1231542578,4275308151,1888018569,830619863,395348041,1012459230,3834847969,4668377,3254203367,2554915722,649542715,1230563212,2567244305,2746211988,3537756543,4222285452,2317456406,3821308102,259593,425612091,4002047647,3853790673,1799867985,3915273302,4034839352,15813987,1972707525,4262762706,633891473,3111235432,909469878,4257775288,2069395949,687452021,1320514886,449268643,611888130,3120591829,4060445608,2251833690,897832647,429947958,1593296116,3477101702,4283222566,4268585164,3146343240,2705086659,2630269877,3544091285,1973105012,3584253337,3362475899,2851742516,815793268,119827306,4058361557,3697022657,2954799410,3816260162,1121930114,3194718384,3627387224,2690490812,2546282749,848149641,3703936176,3439137963,2801919972,694514728,3502406468,352894167,2925975487,2400623206,1832115499,4084611190,2788943975,4235990130,674091243,852518708,2663785912,4029628374,1229091422,3433838843,3364226262,893082710,1579023705,1597332584,4274811001,2490488959,2181976916,3592914855,1762109365,1202417654,2151499388,1583160563,1738398743,4019106936,606411633,4224509933,4098789174,2337580220,4132496427,406945220,3989034978,4037614542,1462623656,2769441127,800053578,3900801678,3278172427,3710800576,3542777377,327901307,3856565076,2592921907,2115363805,1701160645,1797727188,3021862463,2063217075,2571401527,2177725882,962790442,1098423660,2180201078,1366041949,1492010686,2366160275,1322190331,1219125469,4266381846,761072308,2429308063,65371614,3177183839,3318599719,4199748896,1998773748,2431840929,2317725957,880389723,4094864168,473661988,3975019369,2425773339,1537907313,989899103,2450402587,246110680,29144824,3192297807,331431844,863774895,4279577843,3527849703,2809856291,2124704225,2758947523,385951238,1978645573,2804677008,1907226389,2290704560,3203643287,3025084291,3270469781,600522093,3689036107,2721862465,1353052696,2480213030,2448443882,2029551050,618231932,419667956,897802731,3618045849,64793617,1138230394,2878759550,2536481146,3570648396,2701136995,1046164512,2296603848,4171835020,140718945,4238282591,4119062105,377422008,2972970972,3707405033,2023113099,3788852891,2491698321,1681374308,3442272504,3689491864,377780147,3958965160,4217664546,3088723967,3306998620,103913562,1042313541,741981992,410591839,3398288068,3531411396,4153406383,2151645792,2455848439,2067256780,4156746785,3801264260,3721376537,3581129786,3380055886,2599426448,947543764,1642771419,1279919806,635432892,1743272061,3264881241,640960694,1758583080,3156454324,2633482553,1873226292,3545402111,844800744,2955885451,3642199020,1647068262,112987619,3931029062,3573815567,2550846864,555121784,990645862,838346063,673426838,1571508499,291431259,4159448924,3468650612,1008666329,3225866883,253453967,3688057619,3797519369,2974446217,2204701349,4126079721,1947363974,77251917,3581489007,4224833773,1726974662,3898705196,1668673902,610654070,2905032293,3334444314,1544561421,2685086183,3037076206,2665181943,4161212412,1271711425,4117252465,3186164524,4186805958,1675216780,2960424003,1021045970,4245320102,3099961381,4225434354,4172528116,3857638448,2218835738,3291407011,878903860,2859700260,218044483,1789561882,1662121024,3880114495,1224540037,2255215297,3293551328,1441376768,1595469143,1326240243,4025950084,2759526649,76428933,1769292209,1387546132,2696238180,4290423270,2668930371,3732157982,672786718,498445474,3518000708,3449141330,4094840135,2511699663,2511038311,4285943927,1033803291,3833141809,1235977399,1242446533,4128128382,466974006,2429249610,2710620262,2402469718,3381600211,2402478917,1185759959,777367021,2357412082,2990161117,1787720768,3298277472,1484223961,1386847827,3665450883,3356330912,877354690,2450622018,3790825461,1215056955,120881078,1216680265,2103406049,613051025,1941868704,1621076869,3076369191,543992367,3192623069,1030205405,1047469012,2612729042,3845552379,2863851365,2489561773,1802704757,1558696976,2327492557,679970853,1797865962,2832280543,1835112789,534545135,548518515,2880624416,1585292472,1700580315,1011304239,3066775011,264689773,1094586735,3388081398,990242113,41773081,281275144,662629277,708592001,3106626305,2182408418,3445155015,3808434301,4149775744,1894527965,3339232328,2295418905,2905221636,3212877902,2160505098,1179951018,3222444015,417971980,1640743927,677202941,2977296092,928382551,1184628924,662998463,3535943238,725279656,3673987511,1263745113,1438170025,2593449178,795945467,321623402,861417626,1114855445,2120466676,1692961339,2678698792,2214196634,579109936,2405650976,243626976,3568590663,3730101520,324216972,446530308,2725186161,2243835886,917446818,275737281,1619636283,2587203575,3941739082,2424085931,3437171298,2408984425,2422120223,3618390463,3595638472,2924246421,3258978531,3392554966,4245418539,2064873040,3770001964,3533316088,819196623,3511603391,1761814358,128726221,1089794144,2095870415,3681543904,2728424128,1970414063,3043334124,2280405544,3087797303,3701119950,2221959863,2795658850,1007489112,694975039,652724777,3186171700,2852921080,3004433356,2237182620,1171112321,1506131671,3782571385,2166880337,3203007010,3018703310,854740073,66322089,1222253748,954717368,2822876467,3340851596,3043842015,133075460,3407093322,3815378309,2652194254,128316545,3308463443,4025356733,3123180971,1656805408,238572231,2430211632,1171972660,614903498,3954265477,3229459856,4220807903,2621156931,3596022619,3886362478,2185400756,3333578379,2126200722,1036348690,314064055,4102754796,1502910130,3404160967,318849613,3952401722,2791168172,2261676894,1950277566,2130799152,2171926400,2327793957,1944207339,779776528,585843552,3482146324,187366112,3421140324,526447170,2723255766,2423625428,3336714219,2445538534,1466645435,4034224809,1516585738,2018687224,3938707378,1569973430,1630722705,227562490,1724729925,2491152146,740466602,272831891,1574282162,88315216,1404027654,855132932,4232963632,2115517627,3438775254,3040465903,1238626581,1600354569,3723019362,1817112147,1187007202,1008216228,1323991874]")
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    n.r(t), n(236);
    var r = n(144),
        o = n(74),
        i = n(190),
        a = n(121),
        s = n(22),
        c = n(17),
        u = n(10),
        l = n(310),
        d = n(12),
        f = n(425),
        h = n(149),
        g = function(e, t, n, r) {
            return new(n || (n = Promise))((function(o, i) {
                function a(e) {
                    try {
                        c(r.next(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function s(e) {
                    try {
                        c(r.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                        e(t)
                    }))).then(a, s)
                }
                c((r = r.apply(e, t || [])).next())
            }))
        };
    const p = d.a.create("lib.profiler");
    class m {
        constructor() {
            this.timings = {}, this.track = (e, ...t) => g(this, void 0, void 0, (function*() {
                return this._track(!1, e, ...t)
            })), this.trackAsync = (e, ...t) => g(this, void 0, void 0, (function*() {
                return this._track(!0, e, ...t)
            })), this._track = (e, t, ...n) => g(this, void 0, void 0, (function*() {
                const r = t.name + (e ? "__sync" : "");
                h.a.start(r);
                try {
                    e ? yield t(...n): t(...n)
                } catch (e) {
                    throw e
                } finally {
                    this.timings[r] = h.a.stop(r)
                }
            }))
        }
        static start(e) {
            h.a.start(e)
        }
        static stop(e, t = 3e4) {
            const n = h.a.stop(e),
                r = Object(a.a)();
            return n > t && (p.warn(`profiler_${e}_time_exceeded ${n}`), "pageConfig_init" === e && r.tooLongPageConfigInit(n), "updateUser" === e && r.tooLongUserUpdateTime(n)), n
        }
        start(e) {
            h.a.start(e)
        }
        stop(e) {
            this.timings[e] = h.a.stop(e)
        }
    }
    var b = n(16),
        v = n(252),
        _ = n.n(v),
        y = n(24),
        w = n(188);
    const O = e => e.connection;
    var j = n(89);
    const E = e => e.settings,
        k = e => e.user.id,
        S = e => e.user.anonymous,
        I = e => e.user.experiments,
        C = (e, t) => e.settings.common[t],
        A = e => e.settings.common.showLoginReminder,
        N = e => !0 === e.settings.common.loginReminderDisabled,
        x = e => !1 === e.settings.common.showOnboarding;
    var T = n(241),
        P = n(214);
    const D = 30 * b.c,
        R = 20 * b.d,
        M = 7168;

    function F(e) {
        const t = {
            method: "post",
            query: !0,
            data: Object.assign({
                app: `${Object(u.b)()}Ext`
            }, e ? {
                containerId: e
            } : {}),
            csrfMayBeEmpty: !0
        };
        return Object(l.b)(Object(u.f)().userOrAnonymous, t)
    }

    function L(e) {
        const t = {
            data: Object.assign({
                originalUri: "",
                newUser: !1
            }, e ? {
                containerId: e
            } : {}),
            method: "post",
            headers: {
                "Content-Type": "application/json"
            }
        };
        return Object(l.b)(Object(u.f)().dapiMimic, t)
    }

    function U() {
        return Object(l.b)(Object(u.f)().dapiFindProps, {
            data: {
                regex: "STAT:.*"
            },
            method: "post",
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    function B(e = {}, t = {}, n = {}, r) {
        r = r || "empty";
        const o = t.groups || [],
            i = t.settings || {};
        e.token = e.grauth, e.premium = "Premium" === e.type, e.experiments = f.a.create(o);
        const a = parseInt(n["STAT:feedback_ACCEPT"], 10) || 0;
        return e.fixed_errors = isNaN(a) ? 0 : a, P.h.reduce((t, n) => {
            const r = e[n];
            return void 0 !== r && Object.assign(t, {
                [n]: r
            }), t
        }, {
            mimic: o,
            settings: i,
            grauth: r
        })
    }

    function G(e, t) {
        return Object(l.b)(e, {
            body: JSON.stringify(t),
            headers: {
                "Content-Type": "application/json"
            },
            method: "post"
        })
    }

    function W(e) {
        const t = Object(b.k)();
        return e(t.put), t
    }
    const V = {
        anonymous: !0,
        premium: !1
    };

    function H(e = V, {
        type: t,
        data: n = {}
    }) {
        switch (t) {
            case T.t.SET_USER:
                return n;
            case T.t.SET_SETTINGS:
                return Object.assign({}, e, {
                    settings: n
                });
            case T.t.SET_GROUPS:
                return Object.assign({}, e, {
                    mimic: n.mimic,
                    experiments: n.experiments
                });
            case T.t.INC_FIXED:
                const t = e.fixed_errors + 1;
                return Object.assign({}, e, {
                    fixed_errors: t
                });
            default:
                return e
        }
    }
    const z = e => e.user;
    var q = n(65),
        $ = n(72),
        Y = n(350);
    const Z = () => (function(e, t, n, r) {
        return new(n || (n = Promise))((function(o, i) {
            function a(e) {
                try {
                    c(r.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function s(e) {
                try {
                    c(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function c(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                    e(t)
                }))).then(a, s)
            }
            c((r = r.apply(e, t || [])).next())
        }))
    })(void 0, void 0, void 0, (function*() {
        return (Object(u.j)() || Object(u.l)()) && (yield $.a.create(e => {
            chrome && chrome.extension ? chrome.extension.isAllowedIncognitoAccess(e) : e(!1)
        }))
    }));

    function Q() {
        const e = new Date;
        return e.getHours() > 2 && e.setDate(e.getDate() + 1), e.setHours(3), e.setMinutes(Math.floor(60 * Math.random())), e.getTime()
    }
    var J = n(150),
        K = n(251),
        X = function(e, t, n, r) {
            return new(n || (n = Promise))((function(o, i) {
                function a(e) {
                    try {
                        c(r.next(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function s(e) {
                    try {
                        c(r.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                        e(t)
                    }))).then(a, s)
                }
                c((r = r.apply(e, t || [])).next())
            }))
        };
    const ee = d.a.create("universal.bg.prefs"),
        te = (e, t) => X(void 0, void 0, void 0, (function*() {
            try {
                const n = yield t.get(e);
                return "undefined" === n ? void 0 : n && JSON.parse(n)
            } catch (n) {
                throw n && n.toString().includes("SyntaxError") ? (t.remove(e), new Error(`'${e}' has unparseable value, removing`)) : n
            }
        }));
    class ne {
        constructor(e) {
            this._api = e, this.get = e => X(this, void 0, void 0, (function*() {
                const t = Array.isArray(e);
                let n;
                try {
                    if (t) {
                        e = e;
                        const t = yield Promise.all(e.map(e => te(e, this._api)));
                        n = e.reduce((e, n, r) => Object.assign(e, {
                            [n]: t[r]
                        }), {})
                    } else e = e, n = yield te(e, this._api)
                } catch (e) {
                    t && (n = {}), ee.warn("prefs get error:", e)
                }
                return n
            })), this.set = (e, t) => X(this, void 0, void 0, (function*() {
                if (null !== e && "object" == typeof e) yield Promise.all(Object.keys(e).map(t => this.set(t, e[t])));
                else try {
                    t = void 0 === t ? "undefined" : JSON.stringify(t), yield this._api.set(e, t)
                } catch (e) {
                    ee.warn("prefs set error", e)
                }
            })), this.all = () => X(this, void 0, void 0, (function*() {
                const e = yield this._api.getAll();
                for (const t in e)
                    if ("undefined" === e[t]) e[t] = void 0;
                    else try {
                        const n = e[t];
                        e[t] = n && JSON.parse(n)
                    } catch (e) {}
                return e
            })), this.remove = e => {
                try {
                    return this._api.remove(e)
                } catch (e) {
                    return ee.warn("prefs remove error", e), Promise.resolve()
                }
            }, this.clearAll = () => {
                try {
                    return this._api.removeAll().catch(e => ee.warn("prefs clearAll error", e))
                } catch (e) {
                    return ee.warn("prefs clearAll error", e), Promise.resolve()
                }
            }
        }
    }
    var re = function(e, t, n, r) {
        return new(n || (n = Promise))((function(o, i) {
            function a(e) {
                try {
                    c(r.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function s(e) {
                try {
                    c(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function c(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                    e(t)
                }))).then(a, s)
            }
            c((r = r.apply(e, t || [])).next())
        }))
    };
    const oe = {
            "daily-ping"(e, t, n = Q) {
                return re(this, void 0, void 0, (function*() {
                    if (!e) return;
                    Object(q.a)("gnar.pingMaybe");
                    const r = new ne(Object(o.a)().preferences);
                    let i = yield r.get("pingDate");
                    "string" != typeof i && (i = "");
                    const [a, s] = i.split("|"), c = t ? "cookiesDisabled" : e;
                    a && a > Date.now() && s === c || (yield r.set("pingDate", [n(), c].join("|")))
                }))
            },
            app_signin_success(e) {
                se.signInFormSuccess(e)
            },
            app_signup_success(e) {
                se.signUpFormSuccess(e)
            },
            "signin-error"(e) {
                e.errorType = "Server-Side", Object(q.a)("gnar.track", "userLoginForm/rejected")
            },
            "signup-error"(e) {
                e.errorType = "Server-Side", Object(q.a)("gnar.track", "userAccountSignupForm/rejected")
            },
            "upgrade-after-register"() {
                return re(this, void 0, void 0, (function*() {
                    Object(q.a)("gnar.track", "Account_Type_Selected")
                }))
            },
            "hook-clicked"(e) {
                Object(q.a)("gnar.track", "upgradeHookClicked", {
                    placement: e
                }), Object(a.a)().userUpgradeClick(e)
            },
            "correct-btn-clicked"(e) {
                Object(q.a)("gnar.track", "gbuttonClicked", {
                    numberOfCriticalAlerts: e
                }), Object(a.a)().gButtonClick()
            },
            "btn-disable-in-field"(e) {
                Object(q.a)("gnar.track", "checkingInFieldToggled", {
                    enabled: e
                }), Object(a.a)().checkingToggledInField(e)
            },
            "button-change-state"() {},
            "login-attempt"(e) {
                Object(q.a)("gnar.track", "signInClicked", {
                    placement: e
                })
            },
            "show-dictionary"() {
                Object(q.a)("gnar.track", "showDictionary")
            },
            "tab-connected"(e, {
                enabled: t
            }, {
                cookiesDisabled: n
            }, r, o, i) {
                this["daily-ping"](e.id, n), t || !0 === i || Object(a.a)().disabledTabLoad(e.type), !0 === t && !1 === r && Object(a.a)().disabledTabByUserLoad(e.type)
            },
            "text-checked"(e, t) {
                this["daily-ping"](e.id, t)
            },
            "session-invalidate"(e, t, n, r, o) {
                const {
                    id: i,
                    anonymous: s,
                    isTest: c
                } = e;
                i !== t.id && (J.a.gnar && Object(q.a)("gnar.setUser", i, c), this["daily-ping"](i, r)), t.email && !t.anonymous && s && Object(a.a)().unexpectedAnonymous({
                    tokenEqualsGrauth: t.token === t.grauth,
                    cookiesDisabled: r,
                    reason: n
                })
            },
            "set-dapi-prop"(e, t) {
                if ("dialectWeak" === e) {
                    const e = t + "English";
                    se.languageSettingUpdate(e, "capi")
                }
            },
            "change-dialect"({
                language: e,
                dialectWeak: t
            }) {
                const n = {
                    language: e
                };
                t && (n.sameAsWeak = e === t), Object(q.a)("gnar.track", "languageStrongPreference", n)
            },
            "change-defs"(e) {
                Object(q.a)("gnar.track", "definitionsToggled", e), Object(a.a)().toggleExtensionDefs(e.enabled)
            },
            "checking-toggled"(e) {
                Object(q.a)("gnar.track", "checkingToggled", e), Object(a.a)().toggleExtension(e.enabled, e.placement)
            },
            "disable-until-next-visit"() {
                Object(q.a)("gnar.track", "disableUntilNextVisit"), se.disableUntilNextVisitButtonClick("gButton", K.a.other), Object(a.a)().disableUntilNextVisit()
            },
            "disable-button-click"() {
                se.disableButtonClick("gButton"), Object(a.a)().disableButtonClick()
            },
            "popup-open"() {
                Object(q.a)("gnar.track", "browserToolbarButtonClicked")
            },
            "popup-open-on-unsupported"() {
                Object(q.a)("gnar.track", "browserToolbarButtonClicked/unsupported")
            },
            "cookie-overflow"(e, t) {
                Object(a.a)().cookieOverflow(e, t)
            },
            "onboarding-popup-show"() {
                Object(q.a)("gnar.track", "onboarding-popup-show"), Object(a.a)().onboardingPopupShow()
            },
            "onboarding-popup-cancel"() {
                Object(q.a)("gnar.track", "onboarding-popup-cancel"), Object(a.a)().onboardingPopupCancel()
            },
            "onboardingTutorial-popup-show"() {
                Object(q.a)("gnar.track", "onboardingTutorial-popup-show"), Object(a.a)().onboardingTutorialShow()
            },
            "onboardingTutorialNext-button-click"() {
                Object(q.a)("gnar.track", "onboardingTutorialNext-button-click")
            },
            "onboardingTutorialPersonalize-button-click"() {
                Object(q.a)("gnar.track", "onboardingTutorialPersonalize-button-click")
            },
            "onboardingTutorialSave-button-click"() {
                Object(q.a)("gnar.track", "onboardingTutorialSave-button-click")
            },
            "onboardingTutorialLetsWrite-button-click"() {
                Object(q.a)("gnar.track", "onboardingTutorialLetsWrite-button-click")
            }
        },
        ie = d.a.create("lib.tracking"),
        ae = $.a.createCompletionSource(),
        se = new Proxy({}, {
            get: (e, t) => (...e) => ae.promise.then(n => {
                Object(q.c)("gnar", [t, ...e]), n[t](...e)
            }).catch(e => {
                ie.error(e)
            })
        });

    function ce(e, t) {
        const n = Object(a.a)();
        Object(Y.b)(e, t).then(e => {
            e ? ae.resolve(e) : (n.bgTrackingInitFail(), ae.reject("failed to send tracking event: gnarSpec init failed"))
        }).catch(e => {
            n.bgTrackingInitFail(), ae.reject("failed to send tracking event: tracking init failed")
        }), s.on("gnar-track", ({
            props: e,
            method: t
        }) => se[t](...e)), s.on("tracking-fire", ({
            msg: e,
            data: t
        }) => ue(e, ...t)), s.on("tracking-call", ({
            msg: e,
            data: t
        }, n = b.f) => {
            Object(q.a)(e, ...t), n()
        })
    }

    function ue(e, ...t) {
        if (!oe[e]) return ie.error(`No handler specified for message: ${e}`);
        Object(b.g)(() => oe[e](...t), 20)
    }
    var le = n(575);
    const de = d.a.create("universal.bg.state.user.sagas"),
        fe = "serializedUserInfo";
    class he {
        constructor(e, t, n, r, o, i) {
            this._settingsSagas = e, this._prefs = t, this._telemetry = n, this._cookiesHelper = r, this._getContainerIdOrUndefined = o, this._reconnectAllSockets = i
        }* start() {
            const e = yield Object(y.select)(O);
            "firefox" === c.a().bundleInfo.browser && e.dataControl === le.a.active ? yield [Object(v.takeLatest)(w.t.ACCEPT_DATA_CONTROL, this.start.bind(this)), Object(v.takeLatest)(w.t.DISABLE_DATA_CONTROL, this.activateAfterDataControl.bind(this))]: Object(u.k)() ? yield [Object(v.takeLatest)(T.t.SESSION_INVALIDATE, this.updateUser.bind(this)), Object(v.takeLatest)(T.t.UPDATE_GROUPS, this.updateGroups.bind(this))]: yield [Object(y.fork)([this, this.listenCookieChanges]), Object(v.takeLatest)(T.t.SESSION_INVALIDATE, this.updateUser.bind(this)), Object(v.takeLatest)(T.t.UPDATE_GROUPS, this.updateGroups.bind(this))]
        }* activateAfterDataControl() {
            yield Object(y.call)([this, this.updateUser]), yield Object(y.call)([this, this.start])
        }* updateUser({
            lazy: e,
            failoverFromCache: t,
            reason: n
        } = {}) {
            const r = yield Object(y.select)(O);
            if ("firefox" !== c.a().bundleInfo.browser || r.dataControl !== le.a.active) {
                m.start("updateUser");
                try {
                    if (e && ! function(e) {
                            return !e || Date.now() - new Date(e).getTime() > D
                        }(yield Object(y.call)(this._prefs.get, "loginDate"))) return de.info("AUTH SERVICE | user session still fresh"), void m.stop("updateUser");
                    yield Object(y.fork)([this, this.trackCookieHeaderSize]);
                    const t = yield Object(y.call)(this._getContainerIdOrUndefined);
                    void 0 !== t && (yield Object(y.call)([this._telemetry, this._telemetry.setContainerId], t));
                    const r = yield Object(y.call)(F, t), o = yield Object(y.call)([this, this.getMimic], t), i = yield Object(y.call)([this, this.getStats]), a = yield Object(y.call)([this, this.getGrauthFromCookie]), s = yield Object(y.call)(B, r, o, i, a), c = yield Object(y.select)(z);
                    s.id !== c.id && (yield Object(y.call)([this._telemetry, this._telemetry.setUserId], s.id));
                    const u = yield Object(y.select)(C, "dialectStrong"), l = !1 === s.anonymous && !0 === c.anonymous && void 0 !== c.grauth && void 0 !== c.email;
                    yield Object(y.put)(T.setUser(s)), !0 === l && (yield Object(y.call)([this._settingsSagas, this._settingsSagas.setAnonymousPropsToDapi])), s.id !== c.id ? yield Object(y.call)([this._settingsSagas, this._settingsSagas.initializeDapiProps]): yield Object(y.call)([this._settingsSagas, this._settingsSagas.resetStrongDialectFromDapi]);
                    let d = yield Object(y.select)(C, "dialectStrong");
                    if (s.settings.dialectStrong && !d && (yield Object(y.put)(j.setDapiProp("dialectStrong", s.settings.dialectStrong)), d = s.settings.dialectStrong), c.id && (s.id !== c.id || s.type !== c.type || d !== u)) {
                        const e = yield Object(y.select)(C, "dialectWeak"), t = d || u || e;
                        yield Object(y.call)(this._reconnectAllSockets, t), de.warn("DAPI SERVICE | user changed, reseting capi session witha a dialect: ", t)
                    }
                    yield Object(y.call)(this._prefs.set, {
                        user: s,
                        loginDate: new Date
                    });
                    const {
                        authDegradation: f,
                        cookiesDisabled: h
                    } = yield Object(y.select)(O);
                    yield Object(y.call)(ue, "session-invalidate", s, c, n, h, t), f && (yield Object(y.put)(w.updateConnection({
                        authDegradation: !1
                    }))), yield Object(y.fork)([this, this.checkReminderNotification], s, c), yield Object(y.fork)([this, this.storeLoginReminderInfo], s)
                } catch (e) {
                    if (Object(v.isCancelError)(e)) return void m.stop("updateUser");
                    if (yield Object(y.call)(this._prefs.set, {
                            loginDate: 0
                        }), yield Object(y.put)(w.updateConnection({
                            authDegradation: !0
                        })), yield Object(y.call)(this._telemetry.fetchUserFail, n, e.body, e.statusCode), de.warn("Update user failed. Message: ", e), t) {
                        const e = yield Object(y.call)(this._prefs.get, "user");
                        yield Object(y.put)(T.setUser(e || V))
                    }
                }
                m.stop("updateUser")
            }
        }* getMimic(e) {
            try {
                return yield Object(y.call)(L, e)
            } catch (e) {
                return de.warn("DAPI SERVICE | fetch mimic fail. Message: ", e.message), yield Object(y.call)(this._telemetry.fetchMimicFail, e.body, e.statusCode), {}
            }
        }* getStats() {
            try {
                return yield Object(y.call)(U)
            } catch (e) {
                return de.warn("DAPI SERVICE | fetch stats fail. Message: ", e.message), yield Object(y.call)(this._telemetry.fetchStatsFail, e.body, e.statusCode), {}
            }
        }* getGrauthFromCookie() {
            try {
                return yield Object(y.call)(this._cookiesHelper.getToken)
            } catch (e) {
                return de.warn("AUTH SERVICE | fetch cookie fail. Message: ", e.message), yield Object(y.call)(this._telemetry.fetchCookieFail), "bad_cookie"
            }
        }* trackCookieHeaderSize() {
            try {
                const e = yield Object(y.call)(this._cookiesHelper.getAllGrammarlyCookies), t = e.reduce((e, {
                    value: t
                }) => e + t.length, 0);
                if (t > M) {
                    const {
                        name: n,
                        value: {
                            length: r
                        }
                    } = e.reduce((e, t) => e.value.length > t.value.length ? e : t, {
                        name: "",
                        value: ""
                    });
                    yield Object(y.call)(ue, "cookie-overflow", t, {
                        name: n,
                        length: r
                    })
                }
            } catch (e) {
                de.warn("fetch grammarly cookies fail. Message: ", e.message)
            }
        }* externalUpdateUser(e, t, n) {
            yield Object(y.call)([this, this.updateUser], {
                lazy: t,
                reason: n
            })
        }* authRequest(e, t, n, r, o) {
            try {
                const e = yield Object(y.call)(G, t, n);
                return yield Object(y.call)([this, this.updateUser], {
                    reason: o
                }), yield Object(y.call)([se, "signin" === o ? se.signInFormSuccess : se.signUpFormSuccess], r), e
            } catch (e) {
                return de.warn("auth error", e), yield Object(y.call)([se, "signin" === o ? se.signInFormFail : se.signUpFormFail], r), {
                    error: e.message || e.body
                }
            }
        }* logoutUser() {
            try {
                const e = yield Object(y.call)(G, Object(u.f)().authLogout);
                return yield Object(y.call)([se, se.logoutFormSuccess]), e
            } catch (e) {
                return de.warn("auth error", e), yield Object(y.call)([se, se.logoutFormFail]), {
                    error: e.message || e.body
                }
            }
        }* listenCookieChanges() {
            const e = yield Object(y.call)(W, this._cookiesHelper.watchToken);
            let t;
            for (;;) yield Object(y.call)(e.take), t && (yield Object(y.cancel)(t)), t = yield Object(y.fork)([this, this.cookieChange])
        }* updateGroups() {
            const e = yield Object(y.call)(this._getContainerIdOrUndefined), t = yield Object(y.call)([this, this.getMimic], e), n = yield Object(y.call)(f.a.create, t.groups, c.a().systemInfo.os);
            yield Object(y.put)(T.setGroups({
                mimic: t,
                experiments: n
            }))
        }* updateSubscription() {
            yield Object(y.put)(T.sessionInvalidate("updateSubscription"))
        }* cookieChange() {
            try {
                yield Object(y.call)(b.n, R);
                const e = yield Object(y.call)([this, this.getGrauthFromCookie]), {
                    grauth: t
                } = yield Object(y.select)(z);
                e !== t && (yield Object(y.put)(T.sessionInvalidate("cookieChange")))
            } catch (e) {
                yield Object(y.call)(this._telemetry.frequentCookieChanges, Object(v.isCancelError)(e))
            }
        }* storeLoginReminderInfo(e) {
            const t = yield Object(y.call)(this._prefs.get, fe), n = e.type.toLowerCase(), r = !(!t || t.type !== n);
            if (!1 === e.anonymous && !1 === r) {
                const e = {
                    type: n
                };
                yield Object(y.call)(this._prefs.set, {
                    serializedUserInfo: e
                })
            }
        }* checkReminderNotification(e) {
            const t = !0 === e.anonymous,
                n = yield Object(y.select)(N), r = yield Object(y.select)(A);
            if (r && !1 === t && (yield Object(y.put)(j.hideLoginReminder())), !1 === t || n) return;
            const o = yield Object(y.call)(this._prefs.get, fe), i = yield Object(y.select)(x);
            o && !0 === i && !r && (yield Object(y.put)(j.showLoginReminder(o.type)), yield Object(y.call)([se, se.loginReminderBadgeShow]), yield Object(y.call)(this._telemetry.loginReminderBadgeShow))
        }
    }
    var ge = n(120);
    const pe = (e, t, n = window) => (Object(ge.a)(n, {
        online: e,
        offline: t
    }), {
        stop: () => Object(ge.b)(n, {
            online: e,
            offline: t
        })
    });
    var me = function(e, t, n, r) {
        return new(n || (n = Promise))((function(o, i) {
            function a(e) {
                try {
                    c(r.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function s(e) {
                try {
                    c(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function c(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                    e(t)
                }))).then(a, s)
            }
            c((r = r.apply(e, t || [])).next())
        }))
    };
    const be = d.a.create("lib.bg.api");
    var ve = n(60),
        _e = function(e, t, n, r) {
            return new(n || (n = Promise))((function(o, i) {
                function a(e) {
                    try {
                        c(r.next(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function s(e) {
                    try {
                        c(r.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                        e(t)
                    }))).then(a, s)
                }
                c((r = r.apply(e, t || [])).next())
            }))
        };
    const ye = d.a.create("lib.bg.chrome"),
        we = 20,
        Oe = window.chrome;
    let je = !1;

    function Ee() {
        Oe.runtime.requestUpdateCheck && Oe.runtime.requestUpdateCheck(e => "update_available" === e ? ye.info("update pending...") : "no_update" === e ? ye.info("no update found") : "throttled" === e ? ye.info("Oops, I'm asking too frequently - I need to back off.") : void 0), setTimeout(Ee, 72e5)
    }

    function ke(e, t, n = {}) {
        return e ? new Promise((r, o) => Oe.tabs.executeScript(e, Object.assign({
            file: t
        }, n), () => Object(b.i)() ? o(Object(b.i)()) : r())) : Promise.reject(Object(b.i)())
    }

    function Se(e, t, n) {
        return _e(this, void 0, void 0, (function*() {
            if (!Object(u.j)() && !Object(u.l)()) return;
            const r = Oe.runtime.getManifest();
            if (!r) return;
            const o = r.content_scripts;
            if (!o) return;
            const i = o.pop();
            if (!i) return;
            const {
                js: s,
                css: c
            } = i;
            if (!s || !c) return;
            const l = yield Ce(e, t, !0, n);
            if (!l.length) return;
            ye.info("Load content scripts to", l);
            const d = (e, t) => {
                    Object(a.a)().chromeContentScriptLoadError(e && e.message, t), ye.error(`cs ${t} loaded with error: ${e.message}`)
                },
                f = performance.now();
            yield Promise.all(l.map(({
                id: e
            }) => Promise.all([s.reduce((t, n) => t.then(() => ke(e, n, {
                runAt: "document_idle"
            })), Promise.resolve()).then(() => ye.info("scripts loaded")).catch(e => d(e, "js")), c.reduce((t, n) => t.then(() => (function(e, t, n = {}) {
                return e ? new Promise((r, o) => Oe.tabs.insertCSS(e, Object.assign({
                    file: t
                }, n), () => Object(b.i)() ? o(Object(b.i)()) : r())) : Promise.reject(Object(b.i)())
            })(e, n, {
                runAt: "document_idle"
            })), Promise.resolve()).then(() => ye.info("css loaded")).catch(e => d(e, "css"))])));
            const h = performance.now();
            ye.trace(`Content scripts load time: ${h-f} ms`)
        }))
    }

    function Ie(e) {
        return _e(this, void 0, void 0, (function*() {
            return !(yield new Promise(t => e.id && Oe.tabs.executeScript(e.id, {
                code: "document.body.dataset.grCSLoaded"
            }, e => t(e && e.pop())))) && e || void 0
        }))
    }

    function Ce(e, t, n, r) {
        return _e(this, void 0, void 0, (function*() {
            const {
                tabs: o
            } = e;
            if ("web-extension" !== o.kind) throw new Error(`Unexpected tabs kind "${o.kind}"`);
            const i = yield o.getAllTabs(), a = yield o.getActiveTabUrl(), s = r ? e => e.url && e.url.includes(r) : ({
                url: e
            }) => {
                if (e && 0 === e.indexOf("http")) return !!e.includes("grammarly") || t.get(Object(ve.a)(e)).enabled
            }, c = i.filter(s);
            return (yield Promise.all(c.map(n ? Ie : e => Promise.resolve(e)))).filter(e => !!e).sort(({
                url: e
            }) => e === a ? -1 : 1)
        }))
    }
    var Ae = n(427),
        Ne = function(e, t, n, r) {
            return new(n || (n = Promise))((function(o, i) {
                function a(e) {
                    try {
                        c(r.next(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function s(e) {
                    try {
                        c(r.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                        e(t)
                    }))).then(a, s)
                }
                c((r = r.apply(e, t || [])).next())
            }))
        };
    const xe = d.a.create("lib.bg.dapi"),
        Te = ["british", "american", "australian", "canadian"],
        Pe = ["work", "school", "otherProjects"],
        De = ["english", "notEnglish"],
        Re = ["beginner", "intermediate", "advanced"],
        Me = ["hide", "show"],
        Fe = (e, t) => null != t && e.includes(t) ? t : null;

    function Le(e) {
        return Fe(Te, e)
    }

    function Ue(e) {
        return Fe(Pe, e)
    }

    function Be(e) {
        return Fe(De, e)
    }

    function Ge(e) {
        return Fe(Re, e)
    }

    function We(e) {
        return Fe(Me, e)
    }
    class Ve {
        constructor(e, t, n) {
            this._key = e, this._parser = t, this._fetch = n
        }
        get() {
            return Ne(this, void 0, void 0, (function*() {
                try {
                    const e = `${Object(u.f)().dapiProps}/${this._key}`,
                        t = yield this._fetch(e, {
                            method: "post",
                            headers: {
                                "Content-Type": "application/json"
                            }
                        });
                    return t && t[this._key] ? this._parser(t[this._key]) : null
                } catch (e) {
                    throw xe.error(`Error by getting prop ${this._key} from dapi`, e), Object(a.a)().getDapiPropError(e && e.statusCode), e
                }
            }))
        }
        set(e) {
            return Ne(this, void 0, void 0, (function*() {
                try {
                    const t = `${Object(u.f)().dapiProps}`;
                    return yield this._fetch(t, {
                        method: "post",
                        isText: !0,
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            [this._key]: e
                        })
                    })
                } catch (e) {
                    throw xe.error(`Error by setting prop ${this._key} to dapi`, e), Object(a.a)().setDapiPropError(e && e.statusCode), e
                }
            }))
        }
    }
    class He {
        constructor(e) {
            this.dialectStrong = () => this._dialectStrong.get(), this.dialectWeak = () => this._dialectWeak.get(), this.writingType = () => this._writingType.get(), this.primaryLanguage = () => this._primaryLanguage.get(), this.grammarSkills = () => this._grammarSkills.get(), this.emogenieEmojiState = () => this._emogenieEmojiState.get(), this.setDialectWeak = e => this._dialectWeak.set(e), this.setDialectStrong = e => this._dialectStrong.set(e), this.setWrittingType = e => this._writingType.set(e), this.setPrimaryLanguage = e => this._primaryLanguage.set(e), this.setGrammarSkills = e => this._grammarSkills.set(e), this.setEmogenieEmojiState = e => this._emogenieEmojiState.set(e), this._dialectStrong = new Ve("dialectStrong", Le, e), this._dialectWeak = new Ve("dialectWeak", Le, e), this._writingType = new Ve("writingType", Ue, e), this._primaryLanguage = new Ve("primaryLanguage", Be, e), this._grammarSkills = new Ve("grammarSkills", Ge, e), this._emogenieEmojiState = new Ve("emogenieEmojiState", We, e)
        }
    }
    class ze {
        constructor(e) {
            this.common = new He(e)
        }
    }
    var qe = function(e, t, n, r) {
        return new(n || (n = Promise))((function(o, i) {
            function a(e) {
                try {
                    c(r.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function s(e) {
                try {
                    c(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function c(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                    e(t)
                }))).then(a, s)
            }
            c((r = r.apply(e, t || [])).next())
        }))
    };
    const $e = d.a.create("lib.page-config.localforage");
    let Ye;
    try {
        Ye = n(729), Ye.config({
            name: "Grammarly",
            version: 1,
            size: 4194304,
            storeName: "configuration"
        })
    } catch (e) {
        $e.error("Fallback to memory storage", e);
        let t = {};
        Ye = {
            getItem: e => Promise.resolve(t[e]),
            setItem: (e, n) => (t[e] = n, Promise.resolve(n)),
            clear() {
                t = {}, Promise.resolve(!0)
            }
        }
    }
    const Ze = Ye;
    var Qe = n(227);

    function Je(e) {
        if (e && e.pageConfig && Object.keys(e).length && Object.keys(e.pageConfig).length && (!e.protocolVersion || e.protocolVersion === Qe.f)) return !0
    }
    var Ke = function(e, t, n, r) {
        return new(n || (n = Promise))((function(o, i) {
            function a(e) {
                try {
                    c(r.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function s(e) {
                try {
                    c(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function c(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                    e(t)
                }))).then(a, s)
            }
            c((r = r.apply(e, t || [])).next())
        }))
    };
    const Xe = "lastConfigUpdate";
    class et {
        load() {
            return Ke(this, void 0, void 0, (function*() {
                const e = yield Ze.getItem(Xe);
                return this.set(e), this
            }))
        }
        set(e) {
            const {
                protocolVersion: t,
                version: n,
                status: r,
                info: o,
                date: i,
                interval: a
            } = e || {};
            var s;
            return this._meta = {
                date: Number(i) || 0,
                interval: (s = Number(a), Qe.e.includes(s) ? s : Qe.d),
                protocolVersion: t,
                version: n,
                status: r,
                info: o
            }, Ze.setItem(Xe, this._meta)
        }
        get config() {
            return this._meta
        }
    }
    var tt = n(315);
    const nt = d.a.create("lib.page-config.decorator");

    function rt(e) {
        const t = Object(tt.a)({
            pageConfig: {}
        }, e);
        return t.pageConfig || (t.pageConfig = {}), t
    }
    class ot {
        static decorate(e) {
            return e = e || {}, e = this.filterByVersion(e), e = this.withDefault(e), e = this.parseBooleans(e), e = this.parseBrowserValues(e), e = this.filterInvalidPageRegexp(e), e = this.collectSubdomains(e), this.collectPartials(e)
        }
        static withDefault(e) {
            e = rt(e);
            const t = Qe.h && Object(Qe.h)().pageConfig || {};
            return Qe.c, e.pageConfig = Object(tt.a)({}, t, e.pageConfig), e
        }
        static filterByVersion(e, t = Object(u.h)()) {
            const n = (e = rt(e)).pageConfig;
            return e.pageConfig = Object.keys(n || {}).filter(e => {
                const r = n[e].version;
                return !r || "*" === r || 1 !== Object(b.w)(t, r)
            }).reduce((t, n) => Object.assign({}, t, {
                [n]: e.pageConfig[n]
            }), {}), e
        }
        static parseBooleans(e) {
            function t(e) {
                return !(!1 === e || "false" === e)
            }

            function n(e) {
                return !!e && t(e)
            }
            const r = (e = rt(e)).pageConfig;
            return Object.keys(r || {}).forEach(e => {
                r[e] || (r[e] = {});
                const o = r[e];
                o.enabled = t(o.enabled), o.matchInclusions = n(o.matchInclusions), o.matchSubdomains = n(o.matchSubdomains), o.pages && Object.keys(o.pages).forEach(e => {
                    o.pages[e].enabled = t(o.pages[e].enabled)
                })
            }), e
        }
        static parseBrowserValues(e, t = Object(u.b)()) {
            const n = (e = rt(e)).pageConfig;
            return Object.keys(n || {}).map(e => {
                const r = n[e] && n[e].disabledBrowsers;
                r && r.includes(t) && (n[e].enabled = !1)
            }), e
        }
        static filterInvalidPageRegexp(e) {
            const t = (e = rt(e)).pageConfig;
            return Object.keys(t || {}).forEach(e => {
                const n = t[e];
                n.pages && (n.pages = Object.keys(n.pages).filter(e => {
                    try {
                        return new RegExp(e)
                    } catch (e) {
                        return !1
                    }
                }).reduce((e, t) => Object.assign({}, e, {
                    [t]: n.pages[t]
                }), {}))
            }), e
        }
        static collectSubdomains(e) {
            const t = (e = rt(e)).pageConfig;
            e.subdomains = [];
            try {
                e.subdomains = Object.keys(t || {}).filter(e => t[e].matchSubdomains).map(e => Object.assign({
                    domain: e
                }, t[e]))
            } catch (e) {
                nt.warn("Cannot collect subdomains from config")
            }
            return e
        }
        static collectPartials(e) {
            const t = (e = rt(e)).pageConfig;
            e.partials = [];
            try {
                e.partials = Object.keys(t || {}).filter(e => t[e].matchInclusions).map(e => Object.assign({
                    domain: e
                }, t[e]))
            } catch (e) {
                nt.warn("Cannot collect partials from config")
            }
            return e
        }
    }
    var it = function(e, t, n, r) {
        return new(n || (n = Promise))((function(o, i) {
            function a(e) {
                try {
                    c(r.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function s(e) {
                try {
                    c(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function c(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                    e(t)
                }))).then(a, s)
            }
            c((r = r.apply(e, t || [])).next())
        }))
    };
    const at = d.a.create("lib.page-config.config-loader"),
        st = 6e4,
        ct = "Config missed",
        ut = "Config malformed";
    class lt {
        constructor(e, t) {
            this._prefs = e, this._fetchBlacklistConfig = t
        }
        init() {
            return it(this, void 0, void 0, (function*() {
                let e;
                return m.start("pageConfig_init"), (yield this.isSkipConfig()) ? at.warn("Config: use default config in DEBUG mode (skipConfig=true)") : e = yield this.loadFromStorage(), this.config = e || {}, this.meta = yield(new et).load(), m.stop("pageConfig_init"), this
            }))
        }
        isSkipConfig() {
            return it(this, void 0, void 0, (function*() {
                return !1
            }))
        }
        set config(e) {
            e = e || {}, this._config = function(e) {
                return ot.decorate(e)
            }(e)
        }
        get config() {
            return this._config
        }
        load() {
            return it(this, void 0, void 0, (function*() {
                const {
                    date: e,
                    interval: t
                } = this.meta.config;
                if (!(e + t > Date.now())) return at.info("Config: going to update config from CDN..."), this.updateFromCDN(); {
                    const n = (e + t - Date.now()) / 1e3 / 60;
                    at.info(`Config: next update in ${n.toFixed(2)} m`)
                }
            }))
        }
        updateFromCDN() {
            return it(this, void 0, void 0, (function*() {
                let e;
                try {
                    if (e = yield Promise.race([this._fetchBlacklistConfig(), $.a.delay(st).then(() => {
                            throw new Error("Fail to load config from extension api!")
                        })]), !Je(e)) throw new Error(ut);
                    this.config = e, this.save(e)
                } catch (e) {
                    Object(a.a)().pageConfigCDNError(e.message);
                    const t = `Config: can't get valid config - ${e.message}`;
                    at.warn(t), this.saveOnError(t)
                }
            }))
        }
        loadFromStorage() {
            return it(this, void 0, void 0, (function*() {
                try {
                    const e = yield Ze.getItem("config");
                    if (!e) throw new Error(ct);
                    if (!Je(e)) throw new Error(ut);
                    return at.info("Config: loaded from local storage successfully"), e
                } catch (e) {
                    return ct === e.message || Object(a.a)().pageConfigLocalStorageError(e.message, e.name), void at.warn(`Config: cannot get valid config from storage: ${e}`)
                }
            }))
        }
        save(e) {
            const {
                interval: t,
                protocolVersion: n,
                version: r
            } = e;
            Ze.setItem("config", e), this.fireVersionUpdate(r, this.meta.config.version), this.meta.set({
                date: this.getCurrentTimestamp(),
                status: "success",
                interval: t,
                protocolVersion: n,
                version: r
            }), at.info(`Config: new config saved to local storage successfully: ${e.version}`, e)
        }
        saveOnError(e) {
            const {
                interval: t,
                protocolVersion: n,
                version: r
            } = this.meta.config;
            this.meta.set({
                date: this.getCurrentTimestamp(),
                status: "failed",
                interval: t,
                protocolVersion: n,
                version: r,
                info: e
            })
        }
        fireVersionUpdate(e, t) {
            e && t !== e && Object(a.a)().pageConfigUpdated(t, e)
        }
        getCurrentTimestamp() {
            return Date.now()
        }
    }
    var dt = n(243),
        ft = n(292),
        ht = function(e) {
            return e != e
        },
        gt = function(e, t) {
            return !(null == e || !e.length) && function(e, t, n) {
                return t == t ? function(e, t, n) {
                    for (var r = n - 1, o = e.length; ++r < o;)
                        if (e[r] === t) return r;
                    return -1
                }(e, t, n) : function(e, t, n, r) {
                    for (var o = e.length, i = n + (r ? 1 : -1); r ? i-- : ++i < o;)
                        if (t(e[i], i, e)) return i;
                    return -1
                }(e, ht, n)
            }(e, t, 0) > -1
        },
        pt = function(e, t, n) {
            for (var r = -1, o = null == e ? 0 : e.length; ++r < o;)
                if (n(t, e[r])) return !0;
            return !1
        },
        mt = n(268),
        bt = n(278),
        vt = Math.min,
        _t = n(323),
        yt = n(322),
        wt = function(e) {
            return Object(yt.a)(e) ? e : []
        },
        Ot = Object(_t.a)((function(e) {
            var t = Object(dt.a)(e, wt);
            return t.length && t[0] === e[0] ? function(e, t, n) {
                for (var r = n ? pt : gt, o = e[0].length, i = e.length, a = i, s = Array(i), c = 1 / 0, u = []; a--;) {
                    var l = e[a];
                    a && t && (l = Object(dt.a)(l, Object(mt.a)(t))), c = vt(l.length, c), s[a] = !n && (t || o >= 120 && l.length >= 120) ? new ft.a(a && l) : void 0
                }
                l = e[0];
                var d = -1,
                    f = s[0];
                e: for (; ++d < o && u.length < c;) {
                    var h = l[d],
                        g = t ? t(h) : h;
                    if (h = n || 0 !== h ? h : 0, !(f ? Object(bt.a)(f, g) : r(u, g, n))) {
                        for (a = i; --a;) {
                            var p = s[a];
                            if (!(p ? Object(bt.a)(p, g) : r(e[a], g, n))) continue e
                        }
                        f && f.push(g), u.push(h)
                    }
                }
                return u
            }(t) : []
        }));
    class jt extends lt {
        constructor(e, t, n) {
            super(e, n), this._userStateOrNull = t, this._invalidate = () => this.load(), this.invalidateMemoized = Object(b.u)(this._invalidate, void 0, 1e4), this.getByPage = (e, t = Object(ve.f)()) => {
                if (!e) return;
                const n = Object.keys(e).find(e => new RegExp(e).test(t));
                return n ? e[n] : void 0
            }
        }
        _transformConfig(e, t) {
            const n = this._userStateOrNull();
            return n && n.mimic && e && e.enabledForGroups && Ot(e.enabledForGroups, n.mimic).length && (e.groupsOverBrowsers || !e.disabledBrowsers || !e.disabledBrowsers.includes(Object(u.b)())) && (e.enabled = !0), e
        }
        get(e, t) {
            const n = this.config.pageConfig[e] || this.config.subdomains.find(t => new RegExp(`\\.${Object(b.o)(t.domain)}$`).test(e)) || this.config.partials.find(t => e.includes(t.domain)),
                r = this._transformConfig(n, e);
            if (r && !1 === r.enabled) return r;
            const o = this.getByPage(r && r.pages, t) || r || {};
            return o.enabled = !1 !== o.enabled, o
        }
        toReload(e) {
            return 0 === e.indexOf("http") && Qe.g.some(t => e.includes(t))
        }
    }
    var Et, kt, St, It, Ct, At = n(38),
        Nt = n(14),
        xt = n(61),
        Tt = n(4);
    ! function(e) {
        e.contractions = new Set(["n't", "'ve", "'d", "'s", "'m", "'re", "'ll", "N'T", "'VE", "'D", "'S", "'M", "'RE", "'LL", "n’t", "’ve", "’d", "’s", "’m", "’re", "’ll", "N’T", "’VE", "’D", "’S", "’M", "’RE", "’LL"]), e.personalPronouns = new Set(["i", "you", "he", "she", "it", "we", "they", "me", "him", "her", "us", "them"]), e.subjPronouns = new Set(["i", "you", "he", "she", "it", "we", "they", "what", "who"]), e.objPronouns = new Set(["me", "him", "her", "it", "us", "you", "them", "whom"]), e.possPronouns = new Set(["her", "his", "my", "their", "your", "our", "hers", "his", "mine", "theirs", "yours", "ours", "whose"]), e.demPronouns = new Set(["this", "that", "these", "those"]), e.condClause = new Set(["if", "when", "then"]), e.greetings = new Set(["hi", "hey", "hello", "howdy", "sup", "whazzup", "hiya", "yo", "whatup", "greetings"]), e.toBeForms = new Set(["is", "am", "'m", "'s", "be", "was", "were", "those"]), e.modalVerbs = new Set(["can", "could", "may", "might", "shall", "should", "will", "would", "must"]), e.interPronouns = new Set(["who", "whom", "which", "what", "whose", "whoever", "whatever", "whichever", "whomever"]), e.timeRelated = new Set(["week", "month", "tomorrow", "yesterday", "today", "weekend", "time", "someday", "evening", "night", "morning", "midnight", "hour", "minute", "day", "second", "then", "before", "after"]), e.numerals = new Set(["two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty-one", "twenty-two", "twenty-three", "twenty-four", "twenty-five", "twenty-six", "twenty-seven", "twenty-eight", "twenty-nine", "thirty", "thirty-one", "forty", "fifty", "sixty", "seventy", "eighty", "ninety", "hundred", "thousand", "many", "multiple", "few", "million"]), e.identifyingPronouns = new Set(["anything", "everybody", "another", "each", "few", "many", "none", "some", "all", "any", "anybody", "anyone", "everyone", "everything", "no one", "nobody", "nothing", "none", "other", "others", "several", "somebody", "someone", "something", "most", "enough", "little", "more", "both", "either", "neither", "one", "much", "such"])
    }(Et || (Et = {})),
    function(e) {
        e._ = ""
    }(kt || (kt = {})),
    function(e) {
        e._ = ""
    }(St || (St = {})),
    function(e) {
        e._ = ""
    }(It || (It = {})),
    function(e) {
        e.sentenceStartTag = "<S>", e.sentenceEndTag = "</S>", e.urlTag = "<URL>", e.emailTag = "<EMAIL>", e.basicPunctuationChars = ".,:;!?";
        const t = new RegExp(`(${Array.from(Et.contractions.values()).map(e=>`${e}$`).concat("^'","'$").join("|")})`);
        e.urlReString = "(\\S+:\\/\\/)?[^\\s,\\.]+(\\.[^\\s,\\.]+)*(\\.\\w[^\\s,\\.]+)";
        const n = new RegExp(`^${e.urlReString}$`);
        e.emailReString = "[^\\s@]+@[^\\s,\\.]+(\\.[^\\s,\\.]+)+";
        const r = new RegExp(`^${e.emailReString}$`);
        e.numeralReString = "[\\d\\.,:-]+(st|nd|rd|th|s)?";
        const o = new RegExp(`^${e.numeralReString}$`),
            i = new RegExp([e.numeralReString, e.emailReString, e.urlReString, `[^\\s${Object(Tt.j)(e.basicPunctuationChars)}]+`, "[()\\[\\]<>|\"'”“’‘]", `[{}${Object(Tt.j)(e.basicPunctuationChars)}…\\-/\\\\]+`, "\\s+", ".+?"].join("|"), "g");

        function* a(e, n) {
            if (0 !== e.length)
                for (const r of e.match(i))
                    if (!/^\s*$/.test(r))
                        for (const e of r.split(t)) "" !== e && (yield n ? n(e) : e)
        }

        function s(t) {
            const i = t.replace(/\d(?![^\d]*$)|[04-9]/g, "0");
            return o.test(i) ? i : r.test(i) && e.emailTag || n.test(i) && e.urlTag || i
        }

        function c(e) {
            return Array.from(a(e, s))
        }

        function u(e) {
            return e.join(" ")
        }
        e.normalizeToken = s, e.tokenize = function(e) {
            return Array.from(a(e))
        }, e.tokenizeNorm = c, e.join = u, e.normalize = function(e) {
            return u(c(e))
        }, e.isUpper = e => e.toUpperCase() === e, e.isLower = e => e.toLowerCase() === e, e.isAcronym = t => t.length > 1 && e.isUpper(t), e.isCapitalized = t => t.length > 0 && e.isUpper(t[0]) && e.isLower(t.slice(1)), e.isName = t => !e.isLower(t) && e.isCapitalized(t), e.isNumeral = e => Et.numerals.has(e) || o.test(e), e.containsContractions = e => Et.contractions.has(e) || e.includes("'"), e.isContractionPart = e => Et.contractions.has(e)
    }(Ct || (Ct = {}));
    var Pt, Dt, Rt = function(e, t, n, r) {
        return new(n || (n = Promise))((function(o, i) {
            function a(e) {
                try {
                    c(r.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function s(e) {
                try {
                    c(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function c(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                    e(t)
                }))).then(a, s)
            }
            c((r = r.apply(e, t || [])).next())
        }))
    };
    class Mt {
        constructor(e, t, n = null, r = d.a.create(Mt.name)) {
            this._model = e, this._feedback = t, this._felog = n, this._log = r, this._uidPrefix = Tt.c.create().slice(0, 6), this._nextRevision = 0, this._nextAlertId = 0, this._tokenBoundary = {
                checkTrigger: new RegExp(`^[\\s${Object(Tt.j)(Ct.basicPunctuationChars)}"\\[\\]()<>]+$`),
                precedingToken: new RegExp(`(${[Ct.numeralReString,Ct.emailReString,Ct.urlReString,`[^\\s${Object(Tt.j)(Ct.basicPunctuationChars)}"\\[\\]()<>]+`].join("|")})$`)
            }
        }
        check(e, t, n) {
            return Rt(this, void 0, void 0, (function*() {
                this._nextRevision++;
                const r = `${this._uidPrefix}-${this._nextRevision.toString()}`;
                if (1 === t.length) {
                    const o = t[0];
                    if (xt.a.isIns(o) && o.text.match(this._tokenBoundary.checkTrigger) && n && n.end - n.start == 0 && o.pos + o.text.length === n.start)
                        if (e.slice(o.pos, o.pos + o.text.length) === o.text) {
                            const t = e.slice(0, o.pos).match(this._tokenBoundary.precedingToken);
                            if (t) {
                                const n = t[1],
                                    i = function(e, t, n) {
                                        const r = e.slice(Math.max(0, t - 60), t);
                                        return t - 60 > 0 ? r.slice(r.split(/\W+/, 1)[0].length + r.split(/\w+/, 2).reduce((e, t) => e || t.length, 0)) : r
                                    }(e, o.pos - n.length),
                                    a = (this._felog && this._felog.predictTime.measure || (e => e()))(() => this._model.checkToken(i, n, o.text));
                                if (a) return {
                                    alerts: [{
                                        range: {
                                            start: o.pos - n.length,
                                            end: o.pos
                                        },
                                        originalText: n,
                                        replacement: a,
                                        revision: r,
                                        context: i,
                                        id: `${this._uidPrefix}-${(this._nextAlertId++).toString(10)}`
                                    }],
                                    revision: r
                                }
                            } else this._log.warn("couldn't extract preceding token")
                        } else this._log.warn(`last change not consistent with actual text, ${e.slice(o.pos,o.pos+o.text.length)} <> ${o.text}`)
                } else this._log.warn(`unsupported changes length ${t.length}`);
                return {
                    alerts: [],
                    revision: r
                }
            }))
        }
        onCorrectionRejected({
            original: e,
            suggested: t
        }) {
            this._log.info(`feedback: REJECTED {${e}=>${t}}`), this._feedback.onCorrectionRejected(e)
        }
        onCorrectionAccepted({
            original: e,
            suggested: t
        }) {
            this._log.info(`feedback: accepted {${e}=>${t}}`)
        }
        dispose() {}
    }

    function Ft(e) {
        let t = e - (e >> 1 & 1431655765);
        return t = (858993459 & t) + (t >> 2 & 858993459), 16843009 * (t + (t >> 4) & 252645135) >> 24
    }! function(e) {
        e.load = function(e) {
            return new Map(e)
        }
    }(Pt || (Pt = {}));
    class Lt {
        constructor() {
            this._mkBitMap = e => {
                const t = {};
                let n = 0;
                for (const [r, o] of e) t[r] = [n, o], t[r.toUpperCase()] = t[r], n += o;
                return t
            }, this._bitMap = this._mkBitMap([..."eioantrslcp".split("").map(e => Object(Tt.q)(e, 3)), ..."bdfghjkmquvwxyz".split("").map(e => Object(Tt.q)(e, 2))])
        }
        toRepr(e) {
            const t = [0, 0];
            for (let n = 0; n < e.length; n++) {
                const [r = null, o = null] = this._bitMap[e[n]] || [];
                if (null === r || null === o) continue;
                let i = r;
                for (; t[i >> 5] & 1 << (31 & i) >>> 0 && i < r + o;) i++;
                i < r + o && (t[i >> 5] |= 1 << (31 & i))
            }
            return t
        }
        getDistance(e, t) {
            return Ft(e[0] ^ t[0]) + Ft(e[1] ^ t[1])
        }
    }
    class Ut {
        constructor(e, t, n, r, o) {
            this.ds = e, this.is = t, this.caps = n, this.subs = r, this.ts = o, this.len = this.ds + this.is + this.caps + this.subs + this.ts
        }
        add(e) {
            return new Ut(this.ds + e.ds, this.is + e.is, this.caps + e.caps, this.subs + e.subs, this.ts + e.ts)
        }
        toVector() {
            return Object(Tt.q)(this.ds, this.is, this.caps, this.subs, this.ts, this.len)
        }
        static min(...e) {
            return e.length > 1 ? e.reduce((e, t) => t.len < e.len ? t : e) : e[0]
        }
    }

    function Bt(e, t) {
        if (0 === e.length) return new Ut(0, t.length, 0, 0, 0);
        if (0 === t.length) return new Ut(e.length, 0, 0, 0, 0);
        const n = Array.from(new Array(e.length + 1), (e, n) => Array.from(new Array(t.length + 1), (e, t) => 0 === n ? new Ut(0, t, 0, 0, 0) : new Ut(0 === t ? n : 0, 0, 0, 0, 0)));
        for (let r = 1; r < e.length + 1; r++)
            for (let o = 1; o < t.length + 1; o++) {
                const i = e[r - 1] !== t[o - 1] ? 1 === r && 1 === o && e[r - 1].toLowerCase() === t[o - 1].toLowerCase() ? new Ut(0, 0, 1, 0, 0) : new Ut(0, 0, 0, 1, 0) : new Ut(0, 0, 0, 0, 0);
                n[r][o] = Ut.min(n[r - 1][o].add(new Ut(1, 0, 0, 0, 0)), n[r - 1][o - 1].add(i), n[r][o - 1].add(new Ut(0, 1, 0, 0, 0))), r > 1 && o > 1 && e[r - 2] === t[o - 1] && e[r - 1] === t[o - 2] && (n[r][o] = Ut.min(n[r][o], n[r - 2][o - 2].add(new Ut(0, 0, 0, 0, 1))))
            }
        return n[e.length][t.length]
    }! function(e) {
        let t;
        ! function(e) {
            e.add = (e, t) => [e[0] + t[0], e[1] + t[1], e[2] + t[2]], e.subtract = (e, t) => [e[0] - t[0], e[1] - t[1], e[2] - t[2]], e.abs = e => [Math.abs(e[0]), Math.abs(e[1]), Math.abs(e[2])], e.zero = [0, 0, 0]
        }(t = e.KeySpace || (e.KeySpace = {}));
        const n = new Map([].concat(...[Object(Tt.q)(0, ["`1234567890-=", "~!@#$%^&*()_+"]), Object(Tt.q)(2, ["qwertyuiop[]\\", "QWERTYUIOP{}|"]), Object(Tt.q)(2, ["asdfghjkl;'", 'ASDFGHJKL:"']), Object(Tt.q)(3, ["zxcvbnm,./", "ZXCVBNM<>?"])].map(([e, t], n) => [].concat(...t.map((t, r) => t.split("").map((t, o) => Object(Tt.q)(t, Object(Tt.q)(n, e + o, r)))))))),
            r = Object(Tt.q)(0, 0, 13.37);

        function o(e) {
            return n.get(e) || r
        }

        function i(e, t) {
            const o = n.get(e),
                i = n.get(t);
            return o && i ? o.map((e, t) => Math.abs(e - i[t])) : r
        }

        function a(e, n) {
            const r = e.split("").map(o),
                i = n.split("").map(o);
            return r.reduce((e, n) => {
                const r = i.reduce((e, r) => null === e || t.subtract(n, r).reduce((e, t) => e + Math.pow(t, 2), 0) < t.subtract(n, e).reduce((e, t) => e + Math.pow(t, 2), 0) ? r : e, null) || [0, 0, 0];
                return t.add(e, t.abs(t.subtract(r, n)))
            }, t.zero)
        }
        e.getKeyPosition = o, e.getKeyDistance = i, e.getLength = function(e) {
            if (e.length > 0) {
                let t = Object(Tt.q)(0, 0, 0);
                for (let n = 1; n < e.length; n++) t = i(e[n], e[n - 1]).map((e, n) => e + t[n]);
                return t
            }
            return Object(Tt.q)(0, 0, 0)
        }, e.getLengthDiff = function(e, t) {
            return t.map((t, n) => Math.abs(t - e[n]))
        }, e.getShapeDistance = function(e, n) {
            return t.add(a(e, n), a(n, e))
        }
    }(Dt || (Dt = {}));
    var Gt, Wt = n(264);
    (Gt || (Gt = {})).toVector = function(e) {
        return Object(Tt.q)(1, e.lm1gram, e.lm2gram, e.lm3gram, e.lm1gramWithRight, e.lm2gramWithRight, e.lm3gramWithRight, e.lengthDiffRatio, e.originalLength, e.replacementLength, Number(e.capitalizationChange), Number(e.prevWordIsCondClause), Number(e.prevWordIsDemPronoun), Number(e.prevWordIsGreeting), Number(e.prevWordIsIdentifyingPronoun), Number(e.prevWordIsInterPronoun), Number(e.prevWordIsModelVerb), Number(e.prevWordIsNumeral), Number(e.prevWordIsObjPronoun), Number(e.prevWordIsPersonalPronoun), Number(e.prevWordIsPossPronoun), Number(e.prevWordIsSubjPronoun), Number(e.prevWordIsTimeRelated), Number(e.prevWordIsToBeForm), Number(e.prevWordIng), Number(e.prevWordEd), Number(e.inputIsAllCaps), Number(e.inputIsCapitalized), Number(e.prevWordIsCapitalized), Number(e.replacementIsPlural), Number(e.replacementAndInputAreSameLength), Number(e.replacementIsSameAsPrevWord), Number(e.inputIsFirstWordInSentence), Number(e.isAddingContraction), Number(e.prevWordIsObjAndPossPronoun), Number(e.prevWordIsObjAndSubjPronoun), e.editDistance.ds, e.editDistance.is, e.editDistance.caps, e.editDistance.subs, e.editDistance.ts, e.editDistance.len, e.keyboardShapeDistance[0], e.keyboardShapeDistance[1], e.keyboardShapeDistance[2])
    };
    class Vt {
        constructor(e, t) {
            this._ws = e, this.threshold = t
        }
        predict(e, t) {
            return 1 / (1 + Math.exp(-Gt.toVector(e).reduce((e, t, n) => e + t * this._ws[n])))
        }
        static createDefault() {
            return new Vt([1.1526334285736084, 1.7721580266952515, 16.55056381225586, -1.5868234634399414, 1.9250924587249756, 16.35572052001953, -1.7234936952590942, -1.1610877513885498, .1755879521369934, .2954292893409729, 1.9225186109542847, -.3210756778717041, -.01598251238465309, -.3212767541408539, .3663172423839569, -.06537999957799911, .01950937695801258, .1660943180322647, .10598613321781158, .12982745468616486, .22595080733299255, .01891946978867054, .04554083198308945, .0238132756203413, -.07197978347539902, -.057910747826099396, .15545831620693207, -11.314624786376953, -.10937962681055069, -.2902333736419678, 1.7731364965438843, .2776525914669037, -7.4287896156311035, 6.691577911376953, -.20117336511611938, -.04449018836021423, -3.411790370941162, -1.5507994890213013, .6517606377601624, -1.6623849868774414, -3.6400604248046875, -1.7420533895492554, -.9694031476974487, -.7386389970779419, -2.2372217178344727], .25)
        }
    }
    var Ht = function(e, t, n, r) {
        return new(n || (n = Promise))((function(o, i) {
            function a(e) {
                try {
                    c(r.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function s(e) {
                try {
                    c(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function c(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                    e(t)
                }))).then(a, s)
            }
            c((r = r.apply(e, t || [])).next())
        }))
    };
    class zt {
        constructor(e, t = d.a.create(zt.name)) {
            this._prefs = e, this._log = t, this._feedbackStorageKey = "apollo-feedback"
        }
        read() {
            return Ht(this, void 0, void 0, (function*() {
                try {
                    return new Map(yield this._prefs.get(this._feedbackStorageKey))
                } catch (e) {
                    return this._log.warn("failed to read feedback storage", e), new Map
                }
            }))
        }
        write(e) {
            return Ht(this, void 0, void 0, (function*() {
                try {
                    yield this._prefs.set(this._feedbackStorageKey, Array.from(e.entries()))
                } catch (e) {
                    this._log.warn("failed to write feedback storage", e)
                }
            }))
        }
    }
    class qt {
        constructor(e = new Map, t = (e => {})) {
            this._data = e, this._onChanged = t, this._maxSize = 1e4
        }
        isRejected(e) {
            return this._data.get(e) || null
        }
        reject(e) {
            var t;
            this._data.size > this._maxSize && (this._data = new Map([...this._data.entries()].slice(this._maxSize / 2))), this._data.set(e, {
                times: ((null === (t = this._data.get(e)) || void 0 === t ? void 0 : t.times) || 0) + 1,
                lastTime: Date.now()
            }), this._onChanged(this._data)
        }
        accept(e) {
            this._data.has(e) && (this._data.delete(e), this._onChanged(this._data))
        }
    }
    class $t {
        constructor(e, t = new Set) {
            this._persistentFeedback = e, this._sessionRejects = t, this._persistentRejectTimesThreshold = 3
        }
        isRejected(e) {
            var t;
            return this._sessionRejects.has(e) || ((null === (t = this._persistentFeedback.isRejected(e)) || void 0 === t ? void 0 : t.times) || 0) >= this._persistentRejectTimesThreshold
        }
        onCorrectionRejected(e) {
            this._sessionRejects.add(e), this._persistentFeedback.reject(e)
        }
    }
    class Yt {
        constructor(e, t, n, r = new $t(new qt(new Map)), o = Vt.createDefault()) {
            this._lm = e, this._replaceDict = t, this._vocab = n, this._feedback = r, this._spellModel = o, this._getMaxHammingDist = e => e <= 3 ? 2 : e <= 7 ? 2 : e <= 9 ? 3 : e <= 11 ? 4 : 5
        }
        _shouldUseModel(e, t, n) {
            return (e.length > 1 || "i" === e) && /^\w+$/.test(e) && !n && !Ct.isAcronym(e) && (t || !Ct.isName(e)) && !this._vocab.contains(e) && (!/-/g.test(e) || e.split("-").some(e => !this._vocab.contains(e))) && !(Ct.tokenize(e).length > 1) && !this._vocab.isPossiblyOffensive(e)
        }
        _checkModel(e, t, n, r, o) {
            var i, a;
            const s = this._vocab.getClosest(t, this._getMaxHammingDist(t.length), 20).filter(e => !Ct.isContractionPart(e) && !this._vocab.isPossiblyOffensive(e)),
                c = (null === (i = e[e.length - 1]) || void 0 === i ? void 0 : i.toLowerCase()) || "",
                u = e[e.length - 1] || "",
                l = s.map(i => {
                    const a = Ct.tokenizeNorm(i),
                        s = {
                            lm1gram: this._lm.getProbability(a),
                            lm2gram: this._lm.getProbability([...e.slice(-1), ...a]),
                            lm3gram: this._lm.getProbability([...e.slice(-2), ...a]),
                            lm1gramWithRight: this._lm.getProbability([...a, ...n]),
                            lm2gramWithRight: this._lm.getProbability([...e.slice(-1), ...a, ...n]),
                            lm3gramWithRight: this._lm.getProbability([...e.slice(-2), ...a, ...n]),
                            editDistance: Bt(t, i),
                            lengthDiffRatio: (i.length - t.length) / t.length,
                            originalLength: t.length,
                            replacementLength: i.length,
                            prevWordIsPersonalPronoun: Et.personalPronouns.has(c),
                            prevWordIsIdentifyingPronoun: Et.identifyingPronouns.has(c),
                            prevWordIsModelVerb: Et.modalVerbs.has(c),
                            prevWordIsGreeting: Et.greetings.has(c),
                            prevWordIsDemPronoun: Et.demPronouns.has(c),
                            prevWordIsCondClause: Et.condClause.has(c),
                            prevWordIsInterPronoun: Et.interPronouns.has(c),
                            prevWordIsNumeral: Ct.isNumeral(c),
                            prevWordIsObjPronoun: Et.objPronouns.has(c),
                            prevWordIsPossPronoun: Et.possPronouns.has(c),
                            prevWordIsSubjPronoun: Et.subjPronouns.has(c),
                            prevWordIsObjAndPossPronoun: Et.objPronouns.has(c) && Et.possPronouns.has(c),
                            prevWordIsObjAndSubjPronoun: Et.objPronouns.has(c) && Et.subjPronouns.has(c),
                            prevWordIsTimeRelated: Et.timeRelated.has(c),
                            prevWordIsToBeForm: Et.toBeForms.has(c),
                            prevWordIng: c.endsWith("ing"),
                            prevWordEd: c.endsWith("ed"),
                            capitalizationChange: i.toLowerCase() === t || t.toLowerCase() === i,
                            inputIsAllCaps: t.toUpperCase() === t,
                            inputIsCapitalized: Ct.isCapitalized(t),
                            prevWordIsCapitalized: Ct.isCapitalized(u),
                            replacementIsPlural: i.endsWith("s"),
                            replacementAndInputAreSameLength: i.length === t.length,
                            replacementIsSameAsPrevWord: c === i,
                            inputIsFirstWordInSentence: r,
                            isAddingContraction: !o && Ct.containsContractions(i),
                            isChangingHyphenation: t.includes("-") !== i.includes("-"),
                            keyboardShapeDistance: Dt.getShapeDistance(t, i)
                        };
                    return Object(Tt.q)(i, this._spellModel.predict(s, i), s)
                });
            return Object(Tt.q)((null === (a = Object(Wt.maximumBy)(l.filter(([e, t]) => t >= this._spellModel.threshold), ([, e]) => e)) || void 0 === a ? void 0 : a[0]) || null, l)
        }
        checkTokenVerbose(e, t, n) {
            if (this._feedback.isRejected(t)) return Object(Tt.q)(null);
            if (this._replaceDict.has(t)) return Object(Tt.q)(this._replaceDict.get(t) || null); {
                const r = [Ct.sentenceStartTag, ...Ct.tokenizeNorm(e)],
                    o = r[r.length - 1] === Ct.sentenceStartTag || !!r[r.length - 1].match(/^[\.!?]+$/),
                    i = Ct.containsContractions(t);
                return this._shouldUseModel(t, o, i) ? this._checkModel(r, t, Ct.tokenizeNorm(n), o, i) : Object(Tt.q)(null)
            }
        }
        checkToken(e, t, n) {
            return this.checkTokenVerbose(e, t, n)[0]
        }
    }
    class Zt {
        constructor(e, t = d.a.create(Zt.name)) {
            this._factory = e, this._log = t, this._instances = new Map, this.api = this._createApi(["check", "onCorrectionRejected", "onCorrectionAccepted"])
        }
        _createApi(e) {
            return Tt.f.create(e.map(e => [e, ({
                token: t,
                args: n
            }) => {
                const r = this._instances.get(t);
                if (r) return r[e](...n);
                throw new Error(`no instance for ${t}`)
            }]))
        }
        startSession() {
            const e = Tt.c.create();
            return this._instances.set(e, this._factory()), e
        }
        closeSession(e) {
            const t = this._instances.get(e);
            t ? (t.dispose(), this._instances.delete(e)) : this._log.warn(`no instance for ${e}, ignoring`)
        }
        dispose() {
            for (const [e, t] of this._instances.entries()) try {
                t.dispose()
            } catch (t) {
                this._log.error(`failed trying to dispose instance ${e}`, t)
            }
            this._instances.clear()
        }
    }

    function Qt(e, t) {
        return (65535 & e) * t + (((e >>> 16) * t & 65535) << 16)
    }

    function Jt(e, t) {
        return e << t | e >>> 32 - t
    }
    const Kt = 3432918353,
        Xt = 461845907;
    class en {
        getHash(e, t = 0) {
            const n = (new TextEncoder).encode(e),
                r = n.length % 4,
                o = n.length - r;
            let i, a = t,
                s = 0;
            for (i = 0; i < o; i += 4) a = Qt(Jt(a ^ Qt(Jt(Qt(n[i] | n[i + 1] << 8 | n[i + 2] << 16 | n[i + 3] << 24, Kt), 15), Xt), 13), 5) + 3864292196;
            switch (s = 0, r) {
                case 3:
                    s ^= n[i + 2] << 16;
                case 2:
                    s ^= n[i + 1] << 8;
                case 1:
                    s ^= n[i], a ^= Qt(Jt(Qt(s, Kt), 15), Xt)
            }
            return c = Qt((c = a ^ n.length) ^ c >>> 16, 2246822507), ((c = Qt(c ^ c >>> 13, 3266489909)) ^ c >>> 16) >>> 0;
            var c
        }
    }
    var tn, nn;
    ! function(e) {
        e.preferred = en
    }(tn || (tn = {})),
    function(e) {
        e.load = function(e) {
            return new Map(e.map(([e, t]) => [e, new Map(t.map(([e, t, n, r]) => [e, {
                word: e,
                freq: t,
                repr: [n, r]
            }]))]))
        }
    }(nn || (nn = {}));
    const rn = Object(Tt.k)(() => {
        try {
            return new Set(n(730))
        } catch (e) {
            return new Set
        }
    });
    class on {
        constructor(e, t) {
            this._editDist = e, this._dict = t, this._hash = new tn.preferred
        }
        contains(e) {
            const t = this._dict.get(e.length);
            return t && t.has(e)
        }
        isPossiblyOffensive(e) {
            return rn.get().has(this._hash.getHash(e.replace(/(ies|es|s)$/g, e => "ies" === e ? "y" : "")))
        }
        getClosest(e, t, n) {
            const r = this._editDist.toRepr(e),
                o = e.length,
                i = [];
            for (let e = Math.max(0, o - t); e < o + t; e++)
                if (this._dict.get(e))
                    for (const n of this._dict.get(e).values()) this._editDist.getDistance(r, n.repr) <= t && i.push(n);
            return i.sort((e, t) => t.freq - e.freq).slice(0, n).map(e => e.word)
        }
    }
    var an = n(100);
    const sn = "src/popupEditorIFrame.html";
    var cn;

    function un(e, t, n, r) {
        s.on(t, (i, a, c) => {
            e.debug(`received '${t}' from tab #${c}`), s.emitTo(c, n, i, () => a("success"), () => a("addressee-is-disconnected-from-bg"), function(e) {
                const t = Object(o.a)();
                switch (e) {
                    case cn.toPopupEditor:
                        return e => e && t.isExtensionUrl(sn, e) || !1;
                    case cn.toContentScript:
                        return e => e && !t.isExtensionUrl(sn, e) || !1;
                    default:
                        return void Object(Tt.g)(e)
                }
            }(r))
        })
    }! function(e) {
        e.toPopupEditor = "toPopupEditor", e.toContentScript = "toContentScript"
    }(cn || (cn = {}));
    class ln {
        constructor(e, t = n(22)) {
            this._rpcMessageName = e, this._message = t, this.inbound = new Nt.a(e => {
                const t = (t, n, r) => {
                    const o = t;
                    e.next({
                        clientId: r,
                        data: o
                    })
                };
                return this._message.on(this._rpcMessageName, t), () => this._message.off(this._rpcMessageName, t)
            }), this.outbound = e => {
                this._message.emitTo(e.clientId, this._rpcMessageName, e.data)
            }
        }
    }
    var dn, fn = n(410),
        hn = function(e, t, n, r) {
            return new(n || (n = Promise))((function(o, i) {
                function a(e) {
                    try {
                        c(r.next(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function s(e) {
                    try {
                        c(r.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                        e(t)
                    }))).then(a, s)
                }
                c((r = r.apply(e, t || [])).next())
            }))
        };
    class gn {
        constructor(e, t) {
            this._transport = e, this._api = t, this._sub = this._transport.inbound.subscribe(e => hn(this, void 0, void 0, (function*() {
                try {
                    const t = this._api[e.data.method];
                    if ("function" != typeof t) throw {
                        message: `invalid method name ${e.data.method}`
                    }; {
                        const n = yield t.call(this._api, ...e.data.args);
                        this._transport.outbound({
                            clientId: e.clientId,
                            data: {
                                id: e.data.id,
                                res: n
                            }
                        })
                    }
                } catch (t) {
                    this._transport.outbound({
                        clientId: e.clientId,
                        data: {
                            id: e.data.id,
                            err: t
                        }
                    })
                }
            })))
        }
        dispose() {
            this._sub.unsubscribe()
        }
    }
    class pn {
        constructor(e, t, n, r = d.a.create(pn.name)) {
            this._extensionApi = e, this._authSagaRunners = t, this._autocorrectApi = n, this._log = r, this.publicApi = {
                log: e => {
                    this._log.debug(`📡 log via CS-BG rpc: ${e}`)
                },
                getTime: () => Date.now(),
                logout: () => {
                    this._authSagaRunners.logout()
                },
                openDataControl: () => {
                    this._extensionApi.openDataControl && this._extensionApi.openDataControl()
                },
                fetch: e => Object(l.a)(e).catch(e => ({
                    error: e.message
                })),
                autocorrectStartSession: () => this._autocorrectApi.startSession(),
                autocorrectCloseSession: (...e) => this._autocorrectApi.closeSession(...e),
                autocorrectCheck: this._autocorrectApi.api.check,
                autocorrectOnCorrectionRejected: this._autocorrectApi.api.onCorrectionRejected,
                autocorrectOnCorrectionAccepted: this._autocorrectApi.api.onCorrectionAccepted
            }
        }
    }(dn || (dn = {})).create = (e, t, n) => {
        const r = new pn(e, t, n).publicApi;
        return new gn(new ln(fn.a.rpcLegacyMessageName), r)
    };
    var mn = n(459),
        bn = n(429);
    const vn = d.a.create("universal.bg.socket");
    class _n extends mn.a {
        constructor(e, t, n, r) {
            super(), this._sender = t, this._onInternalSocketEmit = n, this._fakeCapi = r, this._messageType = "socket-server", this._closedByMe = !1, this.connect = e => this._internalSocket.connect(e), this.send = e => this._internalSocket.send(e), this.close = () => this._internalSocket.close(), this.wsPlay = () => this._internalSocket.wsPlay(), this.wsPause = () => this._internalSocket.wsPause(), this.isConnected = () => this._internalSocket.isConnected(), this.socketId = "0", this.reconnect = () => {
                this._reconnectInProgress || (this._reconnectInProgress = !0, this._reconnectFn().then(() => this._reconnectInProgress = !1))
            }, this.release = () => {
                vn.trace("CLOSE SOCKET"), this._internalSocket.close(), this._internalSocket.release()
            }, this.overrideEmitToNoOp = () => this._internalSocket.emit = () => {}, this.setMessageType = e => {
                vn.trace("USE EXT SOCKET", e), this._messageType = e
            }, this._getEnhancedSocket = e => {
                const t = this._fakeCapi.isOn() ? this._fakeCapi.getSocket() : bn(e),
                    n = t.emit;
                return Object.assign(t, {
                    emit: (e, t) => {
                        n(e, t), this._emit(e, t)
                    },
                    reconnect: this.reconnect,
                    toString: () => "[object BackgroundSocket]"
                })
            }, this._emit = (e, t) => {
                "disconnect" === e && this._closedByMe ? this._closedByMe = !1 : this._onInternalSocketEmit({
                    event: e,
                    socketId: this._socketId,
                    msg: t
                }, this._messageType, this._sender)
            }, this._reconnectFn = () => {
                let e = () => {};
                const t = new Promise(t => e = t);
                return this._internalSocket.one("connect", e), this._internalSocket.isConnected() ? (this._internalSocket.one("disconnect", () => setTimeout(() => this._internalSocket.connect(!0), 0)), this._closedByMe = !0, this._internalSocket.close()) : this._internalSocket.connect(!0), t
            }, this._internalSocket = this._getEnhancedSocket(e), this._socketId = e.socketId
        }
    }
    var yn = n(259),
        wn = function(e, t, n, r) {
            return new(n || (n = Promise))((function(o, i) {
                function a(e) {
                    try {
                        c(r.next(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function s(e) {
                    try {
                        c(r.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                        e(t)
                    }))).then(a, s)
                }
                c((r = r.apply(e, t || [])).next())
            }))
        };
    const On = d.a.create("universal.bg.socket");
    class jn {
        constructor(e, t, n, r, o, i, a, s, l = [c.a().appConfig.url.capi, c.a().appConfig.url.capiGDocs]) {
            this._telemetry = e, this._getConnectionState = t, this._updateConnectionState = n, this._refreshUser = r, this._getTokenCookie = o, this._getCSRFCookie = i, this._message = a, this._fakeCapi = s, this._wsUrlWhitelist = l, this._sockets = {}, this._releaseTimeout = 5e3, this._maxReconnectTime = 12e4, this._log = [], this.reconnectAll = e => {
                this._dialect = e, Object.keys(this._sockets).forEach(e => this._sockets[e].reconnect())
            }, this.getLog = () => {
                const e = this._log.slice(0);
                return this._log = [], e
            }, this._setMessageType = ({
                id: e,
                iframeMode: t
            }) => {
                On.trace(`IFRAME MODE ${e}`, this._sockets);
                const n = this._sockets[e];
                n && n.setMessageType(t ? yn.a.serverIframe : yn.a.server)
            }, this._onBackgroundSocketEmit = (e, t, n) => {
                const {
                    event: r,
                    socketId: o,
                    msg: i
                } = e;
                if (On.trace(`from ws ${r} ${o}`, {
                        msg: i,
                        messageType: t
                    }), i && i.error && "not_authorized" === i.error) return this._tryToFixSession();
                const a = setTimeout(() => {
                    const e = this._sockets[o];
                    e && (e.release(), e.overrideEmitToNoOp(), delete this._sockets[o])
                }, this._releaseTimeout);
                this._message.emitTo(n, t, Object.assign(Object.assign({}, e), {
                    id: Object(b.r)()
                }), e => e && clearTimeout(a))
            }, this._onContentScriptSocketMessage = (e, t, n) => {
                if (!e) return;
                if (this._getConnectionState().authToCapiDegradation) return;
                const {
                    socketId: r,
                    method: o
                } = e, i = "close" === o;
                let a = this._sockets[r];
                if (a || !i) {
                    if (!a) {
                        if (!this._wsUrlWhitelist.includes(e.url)) return void On.error(`disallowed websocket url ${e.url}`, e);
                        a = new _n(e, n, this._onBackgroundSocketEmit, this._fakeCapi), this._sockets[r] = a
                    }
                    switch ("connect" !== o && delete e.url, e.arg && "start" === e.arg.action && this._dialect && (e.arg.dialect = this._dialect), o) {
                        case "connect":
                            this._refreshUser(!0, "onSessionStart").then(() => a.connect(e.arg));
                            break;
                        case "send":
                            e.arg && "initial" === e.arg.type ? this._getCSRFCookie().then(t => t ? Object.assign(Object.assign({}, e.arg), {
                                csrf: t
                            }) : e.arg).then(e => a.send(e)).catch(() => a.send(e.arg)) : a.send(e.arg);
                            break;
                        case "reconnect":
                            a.reconnect();
                            break;
                        case "release":
                            a.release();
                            break;
                        case "close":
                            a.close();
                            break;
                        case "wsPlay":
                            a.wsPlay();
                            break;
                        case "wsPause":
                            a.wsPause();
                            break;
                        default:
                            On.error("Unknown method", o)
                    }
                    i && (a.close(), a.overrideEmitToNoOp(), delete this._sockets[r])
                }
            }, this._tryToFixSession = () => {
                const {
                    authToCapiDegradation: e,
                    authDegradation: t,
                    cookiesDisabled: n
                } = this._getConnectionState();
                if (e) return this._telemetry.capiNotAuthorizedLoop(!!t, !!n), void On.error("User not authorized... Recovery fail =(");
                n && (this._telemetry.socketDisabledCookie(), On.error("User disabled cookies... =(")), On.warn("User not authorized... Try to recover"), this._updateConnectionState({
                    authToCapiDegradation: !0
                }), this._connectionFixer()
            }, this._connectionFixer = () => wn(this, void 0, void 0, (function*() {
                Object.keys(this._sockets).forEach(e => this._sockets[e].release());
                const e = yield new Promise(e => this._tryToConnect(e));
                this._updateConnectionState({
                    authToCapiDegradation: !1
                }), Object.keys(this._sockets).forEach(e => this._sockets[e].reconnect()), this._telemetry.socketBgRestored(e)
            })), this._tryToConnect = (e, t = 1e4, n = 1) => wn(this, void 0, void 0, (function*() {
                On.warn(`Fixer inited, will try to connect in ${t/1e3}s., count:${n}`), yield Object(b.n)(t), yield this._refreshUser(!1, "recover_after_capi_error");
                let r = bn({
                    url: Object(u.f)().capi
                });
                const o = Object(u.b)(),
                    i = "chrome" === o ? "extension_chrome" : "firefox" === o ? "extension_firefox" : "safari" === o ? "extension_safari" : "edge" === o ? "extension_edge" : Object(Tt.p)(() => Object(Tt.g)(o), e => "extension"),
                    a = {
                        docid: Object(b.r)(),
                        client: i,
                        protocolVersion: "1.0",
                        action: "start",
                        id: 0
                    },
                    s = () => {
                        r && (r.close(), r.release(), r.emit = b.f), r = null
                    };
                r && (r.emit = (o, i = {}) => "connect" === o ? r && r.send(a) : i.action && "start" === i.action ? (s(), On.warn("yay, we fixed capi connection!"), e(n)) : void((i.error || "error" === o) && (s(), n % 10 == 0 && this._logFailedReconnect({
                    count: n,
                    error: i.error
                }), On.warn(`still on error( ${o}`, i), this._tryToConnect(e, Math.min(this._maxReconnectTime, 2 * t), n + 1)))), r && r.connect()
            })), this._logFailedReconnect = ({
                count: e,
                error: t
            }) => wn(this, void 0, void 0, (function*() {
                let n = "exception";
                try {
                    n = yield this._getTokenCookie()
                } catch (e) {}
                On.warn(`log failed reconnect ${e}`, t), this._telemetry.socketBgReconnectFail(n || "", e)
            })), a.on(yn.a.iframeMode, this._setMessageType), a.on(yn.a.client, this._onContentScriptSocketMessage)
        }
    }
    var En = n(80),
        kn = n(324);
    class Sn {
        constructor() {
            this._fakeWebsocketData = [], this._isAutorun = !1, this._latestRevision = 0, this.isOn = () => this._fakeWebsocketData && this._fakeWebsocketData.length > 0, this.getSocket = () => this._socket, this.run = () => {
                if (this._fakeWebsocketData.length > 0) {
                    const e = this._fakeWebsocketData.shift();
                    e.rev = this._latestRevision, "synonyms" === e.action ? this._socket.emit("message", e) : this._socket.emit(e.event, e), setTimeout(this.run, 0)
                } else this._latestRevision = 0, this._isAutorun = !1
            }, this.setData = e => {
                this._fakeWebsocketData = e.value, this._isAutorun = e.autorun, this._debouncedRunFakeCapi.cancel()
            }, this._fakeWebsocket = () => {
                const e = Object.assign(Object.assign({}, Object(En.emitter)({})), {
                    send: t => {
                        "start" === t.action && e.emit("start", {
                            event: "message",
                            action: "start"
                        }), "submit_ot" === t.action && (this._latestRevision = t.rev, this._isAutorun && this._debouncedRunFakeCapi())
                    },
                    close: b.f,
                    connect: () => {
                        e.emit("connect", {
                            event: "connect"
                        })
                    },
                    reconnect: () => e.connect(),
                    isConnected: b.e,
                    release: b.f,
                    toString: () => "Fake socket",
                    wsPlay: b.f,
                    wsPause: b.f
                });
                return e
            }, this._socket = this._fakeWebsocket(), this._debouncedRunFakeCapi = Object(kn.a)(this.run, 3e3)
        }
    }
    const In = d.a.create("universal.bg.state.connection.sagas"),
        Cn = "dataControlActive",
        An = "dataControlAllowed";
    class Nn {
        constructor(e, t, n, r, o, i, a, s = !1) {
            this._prefs = e, this._emitTabs = t, this._telemetry = n, this._isIncognito = r, this._getNextPingDate = o, this._managementApi = i, this._initGnarClient = a, this._isDataControlCheckEnabled = s
        }* start() {
            const e = yield Object(y.select)(O);
            this._isDataControlCheckEnabled && e.dataControl === le.a.active ? (yield* this.checkDataControl(), yield [Object(v.takeLatest)(w.t.ACCEPT_DATA_CONTROL, this.acceptDataControl.bind(this)), Object(v.takeLatest)(w.t.UNINSTALL_EXTENSION, this.uninstallExtension.bind(this))]) : yield* Object(v.takeLatest)(w.t.UPDATE_CONNECTION, this.checkOnline.bind(this))
        }* checkDataControl() {
            const e = yield Object(y.call)(this._prefs.get, Cn), t = yield Object(y.call)(this._prefs.get, An), n = yield Object(y.call)(this._prefs.get, "version");
            e && !0 !== t || !n ? (yield Object(y.call)(this._prefs.set, Cn, !0), yield Object(y.put)(Object(w.activateDataControl)())) : (yield Object(y.call)(this._initGnarClient), yield Object(y.call)([this._telemetry, this._telemetry.enableEventsSending]), yield Object(y.put)(Object(w.disableDataControl)()), yield Object(y.call)([this, this.start]))
        }* acceptDataControl() {
            yield Object(y.call)(this._prefs.set, An, !0), yield Object(y.call)(this._initGnarClient), yield Object(y.call)([this._telemetry, this._telemetry.enableEventsSending]), yield Object(y.call)([this._telemetry, this._telemetry.acceptDataControl])
        }* uninstallExtension() {
            yield Object(y.call)(this._managementApi.uninstallSelf)
        }* checkOnline() {
            try {
                const e = yield Object(y.select)(O), t = e.online;
                e.cookiesDisabled && (yield Object(y.fork)([this, this.monitorCookiesDisable]));
                const n = Tt.f.pluck(e, ["networkOffline", "bgNotConnected", "authToCapiDegradation"]).every(e => !e);
                if (t === n) return;
                yield Object(y.put)(Object(w.onlineConnection)(n)), n && (In.trace("ONLINE SERVICE| reseting capi connections after offline"), yield Object(y.call)(this._emitTabs, "reset"))
            } catch (e) {
                if (Object(v.isCancelError)(e)) return
            }
        }* monitorIsIncognito() {
            (yield Object(y.call)(this._isIncognito)) && (yield Object(y.call)([this, this.callDaily], this._telemetry.incognitoInit))
        }* monitorCookiesDisable() {
            yield Object(y.call)([this, this.callDaily], this._telemetry.disabledCookiesInit)
        }* callDaily(e, t, n) {
            const r = yield Object(y.call)(this._prefs.get, n);
            if (!r || r < Date.now()) {
                yield Object(y.call)(e, t, n);
                const r = yield Object(y.call)(this._getNextPingDate);
                yield Object(y.call)(this._prefs.set, n, r)
            }
        }
    }
    var xn = n(210),
        Tn = n(90),
        Pn = n(374),
        Dn = function(e, t, n, r) {
            return new(n || (n = Promise))((function(o, i) {
                function a(e) {
                    try {
                        c(r.next(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function s(e) {
                    try {
                        c(r.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                        e(t)
                    }))).then(a, s)
                }
                c((r = r.apply(e, t || [])).next())
            }))
        };
    const Rn = d.a.create("universal/bg/state/dynamicConfig"),
        Mn = "dynamicConfig";

    function Fn(e) {
        return Dn(this, void 0, void 0, (function*() {
            try {
                const t = yield e.get(Mn);
                return t ? Un("local", t) : Pn.a.empty
            } catch (e) {
                Object(a.a)().dynamicConfigLoadFromPrefsError(e.message), Rn.error(`Error getting DynamicConfig from prefs: ${e.message}`)
            }
            return Pn.a.empty
        }))
    }

    function Ln(e) {
        return Dn(this, void 0, void 0, (function*() {
            const t = Object(a.a)();
            try {
                const n = yield Promise.race([fetch(c.a().appConfig.url.dynamicConfigUrl), $.a.delay(60 * xn.second).then(() => {
                    throw new Error("Timeout")
                })]);
                if (!n.ok) {
                    const e = yield n.text();
                    throw new Error(`Request error: ${n.status} ${e}`)
                }
                const r = yield n.json(), o = Un("server", r);
                return e.set(Mn, r).catch(e => {
                    t.dynamicConfigSaveToPrefsError(e.message), Rn.error(`Error caching DynamicConfig: ${e.message}`)
                }), o
            } catch (e) {
                t.dynamicConfigLoadFromServerError(e.message), Rn.error(`Error getting DynamicConfig from server: ${e.message}`)
            }
            return null
        }))
    }

    function Un(e, t) {
        return Object(Tn.c)(Pn.a.parse(e))(t)
    }
    const Bn = {
        DYNAMIC_CONFIG_INITIAL: "dynamicConfig/initial",
        DYNAMIC_CONFIG_UPDATED: "dynamicConfig/updated"
    };

    function Gn(e) {
        return {
            type: Bn.DYNAMIC_CONFIG_UPDATED,
            config: e
        }
    }
    class Wn {
        constructor(e) {
            this._prefs = e
        }* start() {
            const e = yield Object(y.call)(Fn, this._prefs);
            for (yield Object(y.put)(function(e) {
                    return {
                        type: Bn.DYNAMIC_CONFIG_INITIAL,
                        config: e
                    }
                }(e));;) {
                const e = yield Object(y.call)(Ln, this._prefs);
                e && (yield Object(y.put)(Gn(e))), yield Object(y.call)(b.n, 5 * xn.minute)
            }
        }
    }
    const Vn = d.a.create("universal.bg.state.settings"),
        Hn = "anonymousDapiProps",
        zn = ["enabled_db", "enabledDefs", "disabledFields", "seenNewsVersion"],
        qn = "connectednessProps",
        $n = "connectednessDataNextSyncDate",
        Yn = ["aol.com", "att.net", "comcast.net", "facebook.com", "gmail.com", "gmx.com", "googlemail.com", "hotmail.com", "hotmail.co.uk", "mac.com", "me.com", "mail.com", "msn.com", "live.com", "sbcglobal.net", "verizon.net", "yahoo.com", "yahoo.co.uk"],
        Zn = {
            [j.t.CHANGE_WEAK_DIALECT]: "dialectWeak",
            [j.t.CHANGE_STRONG_DIALECT]: "dialectStrong",
            [j.t.SET_EMOGENIE_EMOJI_STATE]: "emogenieEmojiState"
        },
        Qn = {
            dialectWeak: (e, t) => e.common.setDialectWeak.call(e, t),
            dialectStrong: (e, t) => e.common.setDialectStrong.call(e, t),
            writingType: (e, t) => e.common.setWrittingType.call(e, t),
            primaryLanguage: (e, t) => e.common.setPrimaryLanguage.call(e, t),
            grammarSkills: (e, t) => e.common.setGrammarSkills.call(e, t),
            emogenieEmojiState: (e, t) => e.common.setEmogenieEmojiState.call(e, t)
        };

    function Jn(e) {
        const [t, n] = e.split("@").map(e => e.toLowerCase());
        return !0 === Yn.includes(n) ? "presonal" : "business"
    }

    function Kn(e) {
        const t = e.reduce((e, t) => (t.hashedR.forEach(t => {
                e[t] = e[t] ? e[t] + 1 : 1
            }), e), {}),
            n = Object.keys(t).reduce((e, n) => {
                const r = t[n];
                return e[r] = e[r] ? e[r] + 1 : 1, e
            }, {});
        return Object.keys(n).reduce((e, t) => (e.push({
            key: parseInt(t, 10),
            value: n[t]
        }), e), [])
    }

    function Xn(e) {
        const t = e.reduce((e, t) => {
            const n = t.hashedR.length;
            return e[n] = e[n] ? e[n] + 1 : 1, e
        }, {});
        return Object.keys(t).reduce((e, n) => (e.push({
            key: parseInt(n, 10),
            value: t[n]
        }), e), [])
    }

    function er({
        enabled_db: e,
        enabledDefs: t,
        disabledFields: n,
        seenNewsVersion: r
    }) {
        let o = {};
        try {
            const t = JSON.parse(e);
            t && (delete t.lastChange, o = t)
        } catch (e) {
            Vn.error("error in parse enabled_db", e)
        }
        const i = c.a().appConfig.newsVersion;
        if (o.common = {
                enabledDefs: Boolean(t),
                seenNewsVersion: r || i
            }, !n) return o;
        const a = Object.keys(n);
        return a.length ? a.filter(e => n[e]).reduce((e, t) => {
            const n = t.indexOf(":"),
                r = t.substr(0, n),
                o = t.substr(n + 1),
                i = e[r] || {
                    enabled: !0
                };
            return i.disabledFields = Object.assign({}, i.disabledFields || {}, {
                [o]: !0
            }), e[r] = i, e
        }, o) : o
    }
    const tr = 1e9;
    class nr {
        constructor(e, t, n, r) {
            this._prefs = e, this._dapi = t, this._reconnectAllSockets = n, this._emitFocusedTab = r
        }* start() {
            const e = yield Object(y.select)(O);
            "firefox" === Object(c.a)().bundleInfo.browser && e.dataControl === le.a.active ? yield [Object(v.takeLatest)(w.t.ACCEPT_DATA_CONTROL, this.start.bind(this)), Object(v.takeLatest)(w.t.DISABLE_DATA_CONTROL, this.start.bind(this))]: yield [Object(v.takeEvery)(j.DAPI_ACTIONS, this.saveToDapi.bind(this)), Object(v.takeEvery)(j.CACHED_ACTIONS, this.cacheSettings.bind(this)), Object(v.takeLatest)(j.t.SAVE_ANONYMOUS_PROPERTIES, this.saveAnonymousDapiProps.bind(this)), Object(v.takeLatest)(j.t.DISABLE_ON_TAB, this.disableOnTab.bind(this)), Object(v.takeLatest)(j.t.SAVE_EMAIL_CONNECTEDNESS_DATA, this.saveEmailConnectednessData.bind(this))]
        }* initializeDapiProps() {
            for (const e in Zn) yield Object(y.call)([this, this.initializeDapiProp], Zn[e])
        }* initializeDapiProp(e, t = !1) {
            if (void 0 === e) throw new Error("Incorrect DAPI property name");
            const n = yield Object(y.call)([this, this.getDapiPropsPrefsKey]), r = yield Object(y.call)(this._prefs.get, n);
            if (r && r[e] && !t) yield Object(y.put)(j.setDapiProp(e, r[e]));
            else try {
                yield Object(y.call)(a.a().initializePropFromDapi, e);
                const t = yield Object(y.call)(this._dapi.common[e]);
                if (null !== t) {
                    yield Object(y.put)(j.setDapiProp(e, t));
                    const o = Object.assign({}, r, {
                        [e]: t
                    });
                    yield Object(y.call)(this._prefs.set, {
                        [n]: o
                    })
                }
            } catch (e) {}
        }* resetStrongDialectFromDapi() {
            const e = Zn[j.t.CHANGE_STRONG_DIALECT];
            yield Object(y.call)([this, this.initializeDapiProp], e, !0)
        }* saveToDapi({
            type: e,
            data: t
        }) {
            if ((yield Object(y.select)(C, e)) === t) return;
            const n = Zn[e],
                r = yield Object(y.call)([this, this.getDapiPropsPrefsKey]);
            try {
                yield Object(y.call)(Qn[n], this._dapi, t)
            } catch (e) {}
            const o = yield Object(y.call)(this._prefs.get, r), i = Object.assign({}, o, {
                [n]: t
            });
            yield Object(y.call)(this._prefs.set, {
                [r]: i
            }), n === Zn[j.t.CHANGE_STRONG_DIALECT] && (yield Object(y.call)(this._reconnectAllSockets, t)), yield Object(y.put)(j.setDapiProp(n, t)), yield Object(y.call)(ue, "set-dapi-prop", n, t)
        }* setInitialSettings() {
            const e = yield Object(y.call)([this, this.getSettings]);
            yield Object(y.put)(j.initialSettings(e)), yield Object(y.call)([this, this.setShowNews])
        }* cacheSettings() {
            const e = yield Object(y.select)(E);
            yield Object(y.call)(this._prefs.set, {
                extensionSettings: e
            })
        }* getDapiPropsPrefsKey() {
            return `dapiProps_${yield Object(y.select)(k)}`
        }* setShowNews() {
            const {
                common: e
            } = yield Object(y.select)(E), t = e && Number.isInteger(e.seenNewsVersion) && parseInt(e.seenNewsVersion, 10), n = Object(c.a)().appConfig.newsVersion, r = n !== t && n > 0;
            yield Object(y.put)(j.showNews(r))
        }* getSettings() {
            const e = yield Object(y.call)(this._prefs.get, "extensionSettings"), t = e => Object.assign(Object.assign({}, e), {
                common: Object(Tt.r)({
                    autocorrectEnabled: !0
                }, e.common || {})
            });
            if (e) return t(e); {
                const e = yield Object(y.call)(this._prefs.get, zn), n = yield Object(y.call)(er, e);
                return yield Object(y.call)(this._prefs.set, {
                    extensionSettings: n
                }), t(n)
            }
        }* saveAnonymousDapiProps({
            props: e
        }) {
            yield Object(y.call)(this._prefs.set, Hn, e), !1 === (yield Object(y.select)(S)) && (yield Object(y.call)([this, this.setAnonymousPropsToDapi]))
        }* setAnonymousPropsToDapi() {
            const e = yield Object(y.call)(this._prefs.get, Hn);
            if (null != e) {
                for (const t in e) try {
                    yield Object(y.call)(Qn[t], this._dapi, e[t])
                } catch (e) {}
                yield Object(y.call)(this._prefs.remove, Hn), yield Object(y.call)([this, this.resetStrongDialectFromDapi])
            }
        }* disableOnTab() {
            yield Object(y.call)(this._emitFocusedTab, "disable-on-tab")
        }* saveEmailConnectednessData({
            emailConnectednessData: e
        }) {
            const t = yield Object(y.call)(this._prefs.get, qn), n = null !== t ? t : [], {
                sender: r,
                recipiants: o,
                timestamp: i,
                timezoneOffset: a
            } = e, s = r ? yield Object(y.call)(Jn, r): "personal", c = Object(b.v)(r, tr), u = o.map(e => Object(b.v)(e, tr));
            n.push({
                hashedS: c,
                hashedR: u,
                timestamp: i,
                timezoneOffset: a,
                emailType: s
            }), yield Object(y.call)(this._prefs.set, qn, n)
        }* processEmailConnectednessData() {
            const e = yield Object(y.select)(I);
            if (!e || !e.connectednessData) return;
            const t = yield Object(y.call)(this._prefs.get, $n);
            if (null === t || Date.now() > parseInt(t, 10)) {
                const e = Date.now() + Tt.e.week;
                yield Object(y.call)(this._prefs.set, $n, e);
                const t = yield Object(y.call)(this._prefs.get, qn);
                if (null !== t && t.length > 0) {
                    const e = t.length,
                        [n, r] = t.reduce((e, t) => ("presonal" === t.emailType ? e[0].push(t) : e[1].push(t), e), [
                            [],
                            []
                        ]),
                        o = t[0].timestamp,
                        i = yield Object(y.select)(k), a = Object(b.v)(i, tr), s = n.length, c = r.length, u = Kn(t), l = Kn(n), d = Kn(r), f = Xn(t), h = Xn(n), g = Xn(r);
                    yield Object(y.call)([se, se.connectednessDataEmail], c, g, d, a, f, u, s, h, l, o, e), yield Object(y.call)(this._prefs.set, qn, [])
                }
            }
        }
    }
    const rr = {
            SET_ACTIVE_TAB: "tabs/SET_ACTIVE_TAB"
        },
        or = d.a.create("universal.bg.state.tabs");

    function ir() {
        const e = Object(b.k)();
        return s.on("tab-connected", ({
            tab: t,
            url: n
        }) => e.put({
            tab: t,
            url: n
        })), e
    }

    function ar(e) {
        const t = Object(b.k)({
            buffered: !1
        });
        return e.tabs.onActiveTabChange(({
            url: e,
            id: n
        }) => t.put({
            url: e,
            id: n
        }), e => or.error("runtime error by changing active tab", e)), t
    }
    const sr = "#e75146",
        cr = "#555A70";

    function ur(e, t) {
        Object(u.m)() || e.button.setBadge(""), e.button.setIconByName(t)
    }

    function lr({
        button: e
    }, t, n = sr) {
        switch (e.kind) {
            case "web-extension":
                e.setBadgeBackgroundColor(n), e.setIconByName("");
                break;
            case "fallback":
                break;
            default:
                throw new Error("Unsupported browser button action")
        }
        e.setBadge(t)
    }

    function dr({
        user: {},
        settings: {
            seenNewsVersion: e,
            enabled: t
        }
    }) {
        const n = c.a().appConfig.newsVersion;
        return n > 0 && e !== n ? "NEW" : t ? "" : "off"
    }

    function fr(e) {
        if (!Object(u.j)() && !Object(u.l)()) return;
        const t = Object(At.o)(e);
        window.chrome.runtime.setUninstallURL && window.chrome.runtime.setUninstallURL(t)
    }

    function hr(e, t, n) {
        const r = Object(ve.a)(n),
            o = t.get(r, n),
            i = function(e, t) {
                const n = e[t],
                    r = !n || void 0 === n.enabled || n.enabled;
                return Object.assign({}, e.common, n, {
                    enabled: r
                })
            }(e.settings, r);
        return Object.assign({}, e, {
            config: Object.assign({}, o, {
                domain: r
            })
        }, {
            settings: i,
            activeTab: e.tabs && e.tabs.active
        })
    }

    function gr(e, t) {
        return hr(e, t, e.tabs && e.tabs.active && e.tabs.active.url)
    }
    new Set;
    const pr = ({
            dynamicConfig: e,
            user: t,
            connection: n,
            config: r,
            settings: o
        }) => ({
            dynamicConfig: e,
            user: t,
            connection: n,
            page: Object.assign({}, o, r, {
                enabled: o.enabled && r.enabled
            })
        }),
        mr = ({
            tabs: e
        }) => e.active;
    var br = n(564);
    class vr {
        constructor(e, t, n, r, o, i) {
            this._connectionSagas = e, this._emitTo = t, this._emitFocusedTab = n, this._api = r, this._pageConfig = o, this._skipWaitingActiveTabOnStart = i
        }* start() {
            yield Object(y.fork)([this, this.listenActiveTabChange]), this._skipWaitingActiveTabOnStart || (yield Object(y.select)(mr)) || (yield Object(y.take)(rr.SET_ACTIVE_TAB)), yield Object(y.fork)([this, this.listenNewTabsConnections])
        }* listenNewTabsConnections() {
            const e = yield Object(y.call)(ir);
            for (;;) {
                const {
                    tab: t,
                    url: n
                } = yield Object(y.call)(e.take);
                yield Object(y.call)(this._pageConfig.invalidateMemoized);
                const r = yield Object(y.select)(hr, this._pageConfig, n);
                if ((r.connection.cookiesDisabled || !1 === navigator.cookieEnabled) && (yield Object(y.fork)([this._connectionSagas, this._connectionSagas.monitorCookiesDisable])), "popup" === t) yield Object(y.call)(this._emitTo, "popup", "state", r);
                else {
                    const e = pr(r);
                    yield Object(y.call)(ue, "tab-connected", r.user, r.config, r.connection, r.settings.enabled, e.page.domain, e.page.grammarlyEditor), yield Object(y.call)(this._emitTo, t, "state", e)
                }
            }
        }* sendStateToTabs() {
            const e = yield Object(y.select)(gr, this._pageConfig), t = yield Object(y.select)(mr);
            if (window.__disableSendStateToTabs) return;
            yield Object(y.call)([this, this.renderBadge], e), yield Object(y.call)(this._emitTo, "popup", "state", e), window.__popupState = e;
            const n = pr(e);
            t && t.id && (yield Object(y.call)(this._emitTo, t.id, "state", n)), yield Object(y.call)(this._emitFocusedTab, "state", n)
        }* listenActiveTabChange() {
            const e = yield Object(y.call)(ar, this._api);
            for (;;) {
                const n = yield Object(y.call)(e.take), r = yield Object(y.select)(mr), o = Object(ve.a)(n.url);
                r && r.id === n.id && r.url === n.url || (yield Object(y.put)((t = n, {
                    type: rr.SET_ACTIVE_TAB,
                    data: t
                })), yield Object(y.call)(fr, o))
            }
            var t
        }* renderBadge(e) {
            const {
                activeTab: t,
                user: n,
                config: r,
                settings: o
            } = e, i = t && br.a.test(t.url), a = Object(u.j)() || (Object(u.l)() || Object(u.m)()) && r.enabled && n.experiments && n.experiments.gdocsForAllBrowsers;
            if (i) a ? yield Object(y.call)(lr, this._api, "BETA", cr): yield Object(y.call)(ur, this._api, "bang");
            else if (n.anonymous || r.grammarlyEditor || r.dontShowDisabledBadge) yield Object(y.call)(lr, this._api, "");
            else if (r.enabled || r.servicePage) {
                const e = yield Object(y.call)(dr, {
                    user: n,
                    settings: o
                });
                yield Object(y.call)(lr, this._api, e)
            } else yield Object(y.call)(ur, this._api, "bang")
        }
    }
    var _r = n(303),
        yr = n(414),
        wr = n(415);
    let Or;

    function jr(e = (Or || (Or = {
        networkOffline: !window.navigator.onLine,
        cookiesDisabled: !1 === navigator.cookieEnabled,
        online: !0,
        dataControl: Object(u.l)() ? le.a.active : le.a.inactive
    }), Or), {
        type: t,
        data: n,
        online: r
    }) {
        switch (t) {
            case w.t.ONLINE_STATE:
                return Object.assign({}, e, {
                    online: r
                });
            case w.t.UPDATE_CONNECTION:
                return Object.assign({}, e, n);
            case w.t.ACTIVATE_DATA_CONTROL:
                return Object.assign({}, e, {
                    dataControl: le.a.active
                });
            case w.t.ACCEPT_DATA_CONTROL:
                return Object.assign({}, e, {
                    dataControl: le.a.accepted
                });
            case w.t.DISABLE_DATA_CONTROL:
                return Object.assign({}, e, {
                    dataControl: le.a.inactive
                });
            default:
                return e
        }
    }

    function Er(e = Pn.a.empty, {
        type: t,
        config: n
    }) {
        switch (t) {
            case Bn.DYNAMIC_CONFIG_INITIAL:
                return "server" === e.source || e.version === n.version ? e : n;
            case Bn.DYNAMIC_CONFIG_UPDATED:
                return e.version === n.version ? e : n;
            default:
                return e
        }
    }
    var kr = n(509);

    function Sr(e = {}, {
        type: t,
        data: n = {},
        domain: r,
        enabledDefs: o,
        enabled: i,
        showNews: a,
        propKey: s,
        loginReminderType: u,
        delightfulMessageId: l
    }) {
        const d = e[r] || {};
        switch (t) {
            case j.t.SETTINGS_INITIAL:
                return Object.assign({}, e, n);
            case j.t.TOGGLE_DEFS:
                return Object.assign({}, e, {
                    common: Object.assign({}, e.common, {
                        enabledDefs: o
                    })
                });
            case j.t.TOGGLE_AUTOCORRECT:
                return Object.assign(Object.assign({}, e), {
                    common: Object.assign(Object.assign({}, e.common), {
                        autocorrectEnabled: i
                    })
                });
            case j.t.TOGGLE_SITE:
                return Object.assign({}, e, {
                    [r]: Object.assign({}, d, {
                        enabled: i,
                        disabledDate: !0 === i ? null : Date.now()
                    })
                });
            case j.t.TOGGLE_FIELD:
                return Object.assign({}, e, {
                    [r]: Object.assign({}, e[r], {
                        disabledFields: Object.assign({}, d.disabledFields, n)
                    })
                });
            case j.t.SHOW_NEWS:
                return Object.assign({}, e, {
                    common: Object.assign({}, e.common, {
                        showNews: a
                    })
                });
            case j.t.SHOW_ONBOARDING:
                return Object.assign({}, e, {
                    common: Object.assign({}, e.common, {
                        showOnboarding: !0
                    })
                });
            case j.t.SEEN_ONBOARDING:
                return Object.assign({}, e, {
                    common: Object.assign({}, e.common, {
                        showOnboarding: !1
                    })
                });
            case j.t.SEEN_DELIGHTFUL_MESSAGE:
                return Object.assign({}, e, {
                    common: Object.assign({}, e.common, {
                        seenDelightfulMessages: [...e.common.seenDelightfulMessages || [], l]
                    })
                });
            case j.t.SEEN_GDOCS_OPT_IN:
                return Object.assign({}, e, {
                    common: Object.assign({}, e.common, {
                        seenGdocsOptIn: !0
                    })
                });
            case j.t.SEEN_GDOCS_LARGE_DOCUMENT_WARNING:
                return Object.assign({}, e, {
                    common: Object.assign({}, e.common, {
                        seenGdocsLargeDocumentWarning: !0
                    })
                });
            case j.t.SET_GDOCS_OPT_IN:
                const t = "docs.google.com";
                return Object.assign({}, e, {
                    [t]: Object.assign({}, e[t], {
                        enabled: !0,
                        disabledDate: null
                    }),
                    common: Object.assign({}, e.common, {
                        gdocsOptedIn: !0
                    })
                });
            case j.t.SET_GDOCS_OPT_OUT:
                return Object.assign({}, e, {
                    common: Object.assign({}, e.common, {
                        gdocsOptedIn: !1
                    })
                });
            case j.t.HIDE_GDOCS_SIGNIN_POPUP:
                return Object.assign({}, e, {
                    common: Object.assign({}, e.common, {
                        hideGdocsSigninPopupTime: Date.now()
                    })
                });
            case j.t.SET_GDOCS_ENABLED_SETTING: {
                const t = "docs.google.com";
                return !0 === e.common.clickedGdocsAuthentication ? Object.assign({}, e, {
                    [t]: Object.assign({}, e[t], {
                        enabled: !0,
                        disabledDate: null
                    }),
                    common: Object.assign({}, e.common, {
                        clickedGdocsAuthentication: !1
                    })
                }) : e
            }
            case j.t.CLICK_GDOCS_AUTHENTICATION:
                return Object.assign({}, e, {
                    common: Object.assign({}, e.common, {
                        clickedGdocsAuthentication: !0
                    })
                });
            case j.t.SEEN_NEWS:
                const f = c.a().appConfig.newsVersion;
                return Object.assign({}, e, {
                    common: Object.assign({}, e.common, {
                        seenNewsVersion: f
                    })
                });
            case j.t.SET_DAPI_PROP:
                return Object.assign({}, e, {
                    common: Object.assign({}, e.common, {
                        [s]: n
                    })
                });
            case j.t.DISABLE_REMINDER_NOTIFICATION:
                return Object.assign({}, e, {
                    [r]: Object.assign({}, d, {
                        disableReminderNotification: !0
                    })
                });
            case j.t.SHOW_DISABLE_REMINDER:
                return Object.assign({}, e, {
                    [r]: Object.assign({}, d, {
                        disabledDate: Date.now()
                    })
                });
            case j.t.EDGE_POPUP_FROM_GBUTTON:
                return Object.assign({}, e, {
                    common: Object.assign({}, e.common, {
                        showEdgePopupFromGButton: !0
                    })
                });
            case j.t.SHOW_LOGIN_REMINDER:
                return Object.assign({}, e, {
                    common: Object.assign({}, e.common, {
                        loginReminderType: u,
                        showLoginReminder: !0
                    })
                });
            case j.t.HIDE_LOGIN_REMINDER:
                return Object.assign({}, e, {
                    common: Object.assign({}, e.common, {
                        showLoginReminder: !1
                    })
                });
            case j.t.DISABLE_LOGIN_REMINDER:
                return Object.assign({}, e, {
                    common: Object.assign({}, e.common, {
                        loginReminderDisabled: !0,
                        showLoginReminder: !1
                    })
                });
            case j.t.DISABLE_EMAIL_SUMMARIZATION:
                return Object.assign({}, e, {
                    common: Object.assign({}, e.common, {
                        emailSummarizationDisabled: !0
                    })
                });
            case j.t.SEEN_CLARITY_NOTIFICATION:
                return Object.assign({}, e, {
                    common: Object.assign({}, e.common, {
                        seenClarityNotification: !0
                    })
                });
            case j.t.SHOW_GMAIL_SEND_EMAIL_PREMIUM_POPUP:
                const h = e.common.sendEmailPremiumPopupViews,
                    g = Object(kr.a)(h) ? h + 1 : 1;
                return Object.assign({}, e, {
                    common: Object.assign({}, e.common, {
                        sendEmailPremiumPopupViews: g,
                        sendEmailPremiumPopupLastShownTimestamp: Date.now()
                    })
                });
            case j.t.SET_HIDE_WELCOME_EMOGENIE_NOTIFICATION:
                return Object.assign({}, e, {
                    common: Object.assign({}, e.common, {
                        hideWelcomeEmogenieNotification: !0
                    })
                });
            default:
                return e
        }
    }

    function Ir(e = {}, {
        type: t,
        data: n
    }) {
        switch (t) {
            case rr.SET_ACTIVE_TAB:
                return Object.assign({}, e, {
                    active: n
                });
            default:
                return e
        }
    }
    class Cr {
        constructor(e, t, n) {
            this._store = e, this._userSagas = t, this._cookiesHelper = n, this.logout = () => Promise.race([this._store.runSaga(this._userSagas.logoutUser.bind(this._userSagas)).done, $.a.delay(10 * xn.second).then(() => {
                const e = new Error("Logout timeout!");
                throw se.logoutFormFail(void 0, e.message), e
            })]).catch(() => this._cookiesHelper.deleteGrauth()).then(() => this.refreshUser(!1, "oauth")), this.refreshUser = (...e) => this._store.runSaga(this._userSagas.externalUpdateUser.bind(this._userSagas), ...e).done, this.signin = e => {
                const {
                    email: t,
                    password: n
                } = e.form, r = {
                    email_login: {
                        email: t,
                        password: n
                    }
                };
                return this._store.runSaga(this._userSagas.authRequest.bind(this._userSagas), Object(u.f)().authSignin, r, e.placement, "signin").done
            }, this.signup = e => {
                const {
                    name: t,
                    email: n,
                    password: r
                } = e.form, o = {
                    email_signup: {
                        name: t,
                        email: n,
                        password: r
                    },
                    custom_fields: "true" === e.disableMarketingEmails ? {
                        disableMarketingEmails: "true"
                    } : {}
                };
                return this._store.runSaga(this._userSagas.authRequest.bind(this._userSagas), Object(u.f)().authSignup, o, e.placement, "signup").done
            }, this.updateSubscription = () => this._store.runSaga(this._userSagas.updateSubscription.bind(this._userSagas)).done
        }
    }
    class Ar {
        constructor(e, t) {
            this._store = e, this._tabsSagas = t, this.sendStateToTabs = () => this._store.runSaga(this._tabsSagas.sendStateToTabs.bind(this._tabsSagas))
        }
    }
    class Nr {
        constructor(e, t, n, r, o, i) {
            this._dynamicConfigSagas = e, this._userSagas = t, this._settingsSagas = n, this._tabsSagas = r, this._connectionSagas = o, this._pageConfig = i, this._sagaMiddleware = _()(this._dynamicConfigSagas.start.bind(this._dynamicConfigSagas), this._connectionSagas.start.bind(this._connectionSagas), this._userSagas.start.bind(this._userSagas), this._settingsSagas.start.bind(this._settingsSagas)), this.store = function(e) {
                const t = Object(_r.c)({
                        dynamicConfig: Er,
                        user: H,
                        tabs: Ir,
                        settings: Sr,
                        connection: jr
                    }),
                    n = yr({
                        level: "debug",
                        colors: {
                            title: () => "green"
                        }
                    });
                return Object(_r.d)(t, {}, Object(_r.a)(e, n))
            }(this._sagaMiddleware), this.runSaga = this._sagaMiddleware.run, this.initStore = () => this._sagaMiddleware.run(this._startupFlow.bind(this)).done.then(() => {
                this.store.subscribe(() => {
                    this._sagaMiddleware.run(this._tabsSagas.sendStateToTabs.bind(this._tabsSagas)), this._sagaMiddleware.run(this._settingsSagas.processEmailConnectednessData.bind(this._settingsSagas))
                })
            }), this.actions = Object(_r.b)(wr.a, this.store.dispatch)
        }* _startupFlow() {
            yield [Object(y.fork)([this._dynamicConfigSagas, this._dynamicConfigSagas.start]), Object(y.call)([this._settingsSagas, this._settingsSagas.setInitialSettings]), Object(y.call)([this._pageConfig, this._pageConfig.init]), Object(y.call)([this._userSagas, this._userSagas.updateUser], {
                failoverFromCache: !0
            })], yield Object(y.fork)([this._connectionSagas, this._connectionSagas.monitorIsIncognito]), yield Object(y.call)([this._tabsSagas, this._tabsSagas.start])
        }
    }
    var xr, Tr = n(43);
    class Pr {
        constructor(e, t = new tn.preferred) {
            if (this._data = e, this._hashFun = t, this._data.values.length !== this._data.hashes.length) throw new TypeError(`values and hashes buffer size don't match (${this._data.values.length} !== ${this._data.hashes.length})`)
        }
        get(e) {
            const t = this._data.displacement[this._hashFun.getHash(e, 0) % this._data.displacement.length],
                n = t < 0 ? -t - 1 : this._hashFun.getHash(e, t) % this._data.values.length,
                r = this._data.values[n];
            return this._data.hashes[n] === this._hashFun.getHash(e, r) % 65535 ? r : null
        }
    }
    class Dr {
        constructor(e, t = 0) {
            if (this._buf = e, this._offset = t, this._view = new DataView(this._buf), this.readInt32 = this._mkReader(e => [this._view.getInt32(e, !0), 4]), this.readFloat32 = this._mkReader(e => [this._view.getFloat32(e, !0), 4]), this.readUint16Array = () => {
                    const e = this.readInt32(),
                        t = new Uint16Array(this._buf, this._offset, e);
                    return this._offset += Uint16Array.BYTES_PER_ELEMENT * e, t
                }, this.readInt32Array = () => {
                    const e = this.readInt32(),
                        t = new Int32Array(this._buf, this._offset, e);
                    return this._offset += Int32Array.BYTES_PER_ELEMENT * e, t
                }, this.readFloat32Array = () => {
                    const e = this.readInt32(),
                        t = new Float32Array(this._buf, this._offset, e);
                    return this._offset += Float32Array.BYTES_PER_ELEMENT * e, t
                }, Dr.isBigEndianArch()) throw new Error("big endian architecture is not supported")
        }
        static isBigEndianArch() {
            return 43707 === new Uint16Array(new Uint8Array([170, 187]).buffer)[0]
        }
        _mkReader(e) {
            return () => {
                const [t, n] = e(this._offset);
                return this._offset += n, t
            }
        }* readArray(e, t) {
            const n = e();
            for (let e = 0; e < n; e++) yield t()
        }
    }(xr || (xr = {})).load = function(e) {
        const t = new Dr(new Uint8Array(e).buffer);
        return {
            totals: new Map(t.readArray(t.readInt32, () => Object(Tt.q)(t.readInt32(), t.readFloat32()))),
            freqs: t.readFloat32Array(),
            perfHash: {
                displacement: t.readInt32Array(),
                values: t.readUint16Array(),
                hashes: t.readUint16Array()
            }
        }
    };
    class Rr {
        constructor(e, t, n) {
            this._ngrams = e, this._totals = t, this._freqs = n
        }
        static load(e) {
            const t = xr.load(e);
            return new Rr(new Pr(t.perfHash), t.totals, t.freqs)
        }
        getProbability(e) {
            if (0 === e.length) return 0;
            const t = Ct.join(e.slice(void 0, -1)),
                n = 1 === e.length ? this._totals.get(1) : this._freqs[this._ngrams.get(t) || -1] || null,
                r = this._ngrams.get("" !== t ? Ct.join([t, e[e.length - 1]]) : e[e.length - 1]);
            return r && n && r < this._freqs.length ? this._freqs[r] / n : 0
        }
    }
    var Mr, Fr = n(52),
        Lr = n(46),
        Ur = function(e) {
            return !0 === e || !1 === e || Object(Lr.a)(e) && "[object Boolean]" == Object(Fr.a)(e)
        };
    ! function(e) {
        e.base = "data", e.replaceDict = "a0.pt", e.vocabulary = "b1.pt", e.ngrams = "c2.pt"
    }(Mr || (Mr = {}));
    var Br = function(e, t, n, r) {
        return new(n || (n = Promise))((function(o, i) {
            function a(e) {
                try {
                    c(r.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function s(e) {
                try {
                    c(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function c(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                    e(t)
                }))).then(a, s)
            }
            c((r = r.apply(e, t || [])).next())
        }))
    };
    window.IS_BG = !0;
    const Gr = d.a.create("lib.bg.bg"),
        Wr = "bg_start_timer";

    function Vr(e, t, r = !1) {
        "chrome" === c.a().bundleInfo.browser && (window.fetch = void 0, n(722));
        const o = c.a();
        h.a.start(Wr);
        const i = t.message;
        if ("background-message-api" !== i.kind) throw new Error(`Unexpected message API kind "${i.kind}"`);
        (function(e, t, n, r) {
            return Br(this, void 0, void 0, (function*() {
                const o = new m,
                    i = Object(a.a)(),
                    c = new Ae.a(t),
                    d = new ne(t.preferences),
                    f = new ze(l.b),
                    g = () => o.track(ce, e, () => {
                        const e = v();
                        return e ? {
                            userId: e.id,
                            isTest: e.isTest
                        } : null
                    }),
                    p = "firefox" === r.bundleInfo.browser;
                yield function(e) {
                    if (Object(u.l)()) {
                        const t = Object(a.a)(),
                            n = e.preferences;
                        return Gr.trace("Migrating preferences data..."), n.ensureMigrationCompleted().then(e => {
                            Gr.trace("Preferences data migration successful!"), e === Tr.a.success && t.storageMigrationSucceeded()
                        }, e => {
                            Gr.error("XXX Preferences migration failed"), t.storageMigrationFailed(e)
                        })
                    }
                    return Promise.resolve()
                }(t);
                const b = new Nn(d, s.emitTabs, i, Z, Q, t.management, g, p);
                let v = () => null;
                const _ = new jt(d, () => v(), () => t.fetchBlacklistConfig());
                let y;
                const w = e => {
                        y && y.reconnectAll(e)
                    },
                    O = new Wn(d),
                    j = new nr(d, f, w, s.emitFocusedTab),
                    E = new vr(b, s.emitTo, s.emitFocusedTab, t, _, n),
                    k = new he(j, d, i, c, Y.a, w),
                    S = new Nr(O, k, j, E, b, _);
                v = () => S.store.getState().user;
                const I = new Cr(S, k, c),
                    C = new Ar(S, E),
                    A = yield fetch(t.getUrl(`${Mr.base}/${Mr.replaceDict}`)).then(e => e.json()).then(e => Pt.load(e)).catch(e => (Gr.error("failed loading replace dict", e), null)), N = yield fetch(t.getUrl(`${Mr.base}/${Mr.vocabulary}`)).then(e => e.json()).then(e => new on(new Lt, nn.load(e))).catch(e => (Gr.error("could not create vocabulary", e), null)), x = yield fetch(t.getUrl(`${Mr.base}/${Mr.ngrams}`)).then(e => e.arrayBuffer()).then(e => Rr.load(e)).catch(e => (Gr.error("could not create ngram model", e), null)), T = new zt(d), P = new qt(yield T.read(), e => T.write(e));
                if (dn.create(t, I, new Zt(() => {
                        if (A && N && x) {
                            const e = new $t(P);
                            return new Mt(new Yt(x, A, N, e), e, i.autocorrect)
                        }
                        throw new Error("autocorrect backend unavailable")
                    })), t.initOAuth && t.initOAuth(() => {
                        I.refreshUser(!1, "oauth")
                    }), t.initUserInfoReporter) {
                    const e = new Nt.a(e => S.store.subscribe(() => {
                        e.next(S.store.getState().user)
                    }));
                    t.initUserInfoReporter(e)
                }
                t.initSubscriptionUpdatedHandler && t.initSubscriptionUpdatedHandler(() => {
                    I.updateSubscription()
                }), Object(l.c)(), !1 === p && g();
                const D = new Sn;
                y = new jn(i, () => S.store.getState().connection, S.actions.updateConnection, I.refreshUser, c.getToken, () => c.getCSRFToken(!1), s, D), o.track(() => (function(e, t, n, r, o, i, c) {
                    const d = function(e, t, n, r, o, i, s) {
                        const {
                            tabs: c
                        } = o;
                        return {
                            dispatch: e.dispatch,
                            signin: (e, n) => t.signin(e).then(n),
                            signup: (e, n) => t.signup(e).then(n),
                            "create-document": e => {
                                const t = s.bundleInfo.browser;
                                return Object(l.b)(Object(u.f)().docsApi, {
                                    data: {
                                        content: e
                                    },
                                    method: "post",
                                    headers: {
                                        "Content-Type": "application/json",
                                        "X-API-Version": "1",
                                        "X-Client-Type": "extension_" + t
                                    }
                                }).then(({
                                    id: e
                                }) => (e => c.open(Object(u.f)().docs + "/" + e, !0))(e)).catch(e => be.error("request failed", e))
                            },
                            "get-containerIdOrUndefined": (e, t) => {
                                Object(Y.a)().then(t)
                            },
                            "content-script-inited": () => {
                                i.sendStateToTabs()
                            },
                            "external:changed-plan": () => {
                                a.a().externalChangePlan(), n.sessionInvalidate("changed-plan")
                            },
                            "external:changed-dialect": () => {
                                a.a().externalChangeDialect(), n.sessionInvalidate("changed-dialect")
                            },
                            "external:changed-user": () => {
                                a.a().externalChangeUser(), n.sessionInvalidate("changed-user"), s.appConfig.features.gdocsSupported && n.setGdocsEnabledSetting()
                            },
                            "external:editor-fix": () => {
                                n.incFixed()
                            },
                            "external:cleanup": () => me(this, void 0, void 0, (function*() {
                                a.a().externalLogout();
                                const e = ["extensionSettings", "extensionInstallDate", "version", fe],
                                    t = yield r.get(e);
                                r.clearAll(), yield r.set(e.reduce((e, n) => Object.assign({}, e, {
                                    [n]: t[n]
                                }), {
                                    enabledDefs: !1
                                })), n.sessionInvalidate("logout")
                            }))
                        }
                    }(e, t, n, r, o, i, c);
                    Object.keys(d).forEach(e => s.on(e, d[e])), pe(() => n.updateConnection({
                        networkOffline: !1
                    }), () => n.updateConnection({
                        networkOffline: !0
                    }))
                })(S.store, I, S.actions, d, t, C, r)), yield o.trackAsync(S.initStore), Object(u.m)() || (yield o.trackAsync(Hr, d, _, c, S.actions.seenNews, S.actions.showOnboarding, yield function(e) {
                        return Br(this, void 0, void 0, (function*() {
                            const t = e.managedStorage;
                            return void 0 !== t && void 0 !== (yield t.get("RestrictOrganizationId"))
                        }))
                    }(t))), o.track(() => Se(t, _, Object(u.e)())), o.track(() => (function(e, t) {
                        return _e(this, void 0, void 0, (function*() {
                            if (Object(u.j)()) try {
                                const n = yield Ce(e, t);
                                yield Promise.all(n.map(({
                                    id: e
                                }) => ke(e, "src/js/Grammarly-proxy.js"))), ye.info("proxy loaded on", n.map(e => e.url))
                            } catch (e) {
                                const t = e && e.message || e;
                                ye.error("proxy loaded with error: ", t)
                            }
                        }))
                    })(t, _)),
                    function() {
                        const e = h.a.stop(Wr);
                        e > 3e4 && Object(a.a)().bgPageInitTimeout(e)
                    }(), yield function(e) {
                        return Br(this, void 0, void 0, (function*() {
                            const t = yield e.get("bgInitFail");
                            t && (Object(a.a)().bgPageInitFail(t), yield e.set("bgInitFail", 0))
                        }))
                    }(d)
            }))
        })(e, t, r, o).then(e => {
                t.sendReady && t.sendReady()
            }).catch(e => {
                Object(a.a)().bgPageStartFail(e && e.message, e && e.stack), Gr.error("bg page start fail", e)
            }), !Object(u.j)() && !Object(u.l)() || je || (Oe.runtime.onUpdateAvailable && Oe.runtime.onUpdateAvailable.addListener(e => {
                ye.info(`Detected the next extension version ${e.version}`), je = !0;
                const t = Object(b.q)(1, we);
                ye.info(`Going to update in minutes: ${t}`), setTimeout(Oe.runtime.reload, 60 * t * 1e3)
            }), Ee()), "prod" !== o.bundleInfo.env && "qa" === o.bundleInfo.env && n(723).startSendingBgLogsToActiveTab(),
            function(e = d.a.create("bg/iframeMessagingProxy")) {
                un(e, an.b.bgPopupEditorIFrameToPopupEditor, an.b.popupEditorIFrame, cn.toPopupEditor), un(e, an.b.bgPopupEditorIFrameFromPopupEditor, an.b.popupEditorIFrame, cn.toContentScript),
                    function(e, t, n) {
                        s.on(t, (r, o, i) => {
                            e.debug(`received '${t}' from tab #${i}`), s.emitTo(i, n, r)
                        })
                    }(e, an.d.bgSignInIFrame, an.d.signInIFrame), e.debug("IFrame messaging initialized")
            }(Gr)
    }

    function Hr(e, t, n, r, s, c) {
        return Br(this, void 0, void 0, (function*() {
            const l = Object(u.h)(),
                d = yield e.get("version");
            if (l !== d && (yield e.set("version", l), (yield e.get("version")) === l))
                if (d) {
                    const n = Object(a.a)();
                    n.extensionUpdated(l, d), se.update(d);
                    const r = yield e.get("enabledDefs");
                    Ur(r) || (yield e.set("enabledDefs", !0));
                    try {
                        l.split(".")[0] !== d.split(".")[0] && function(e, t) {
                            qe(this, void 0, void 0, (function*() {
                                const {
                                    notification: n,
                                    tabs: r
                                } = e;
                                switch (n.kind) {
                                    case "web-extension":
                                        if ("web-extension" !== r.kind) throw new Error(`Unexpected tabs kind "${r.kind}"`);
                                        const e = (yield r.getAllTabs()).filter(({
                                            id: e,
                                            url: n
                                        }) => n && t(n) && (!e || e.toString() !== i.b));
                                        if (!e.length) return;
                                        const o = () => qe(this, void 0, void 0, (function*() {
                                            Object(a.a)().reloadNotificationClick(), e.forEach(({
                                                id: e
                                            }) => r.reload(e))
                                        }));
                                        n.create({
                                            title: "Grammarly needs to be reloaded",
                                            message: "While you were working, we updated Grammarly. To take advantage of these improvements, please save the text you are working on, and click here.",
                                            iconUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAIAAAAErfB6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTgzMjhCMkQ1NjBGMTFFNDg0NjBEMENBNkVFNzA3RDkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTgzMjhCMkU1NjBGMTFFNDg0NjBEMENBNkVFNzA3RDkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxODMyOEIyQjU2MEYxMUU0ODQ2MEQwQ0E2RUU3MDdEOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxODMyOEIyQzU2MEYxMUU0ODQ2MEQwQ0E2RUU3MDdEOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pg1zYWQAAA/kSURBVHja7J15dFNVHsfz0nRJ06ZN932FbtBSoK2AlM2hVhYZAetURWhZnBEQBIvjMIvjco6WEQVZBBmqIiCoqFSQw14KCHSl1G50pUuabiFJmzTdMr9DHY/CS0iT+5Yk93v4Q5P0vnd/n/fu/f3uvb97CY1Gw8EyX3GxCTBgLAwYCwPGwoCxMGAsDBgLA8aAsTBgLAwYCwPGwoCxMGAsDBgDxsKAsTBgLAwYCwPGwoCxMGAsDBgDxsKAsTBgLAwYCwPGwoCxMGAMGAsDxsKAsTBgLAwYCwPG0imeBda5d7C/uru1Ui5uUnY1q7paVFJpX4+sTykfUPUPDf76M2uulZDHd7KxF9kIfPgiX76Ln71LuNB7lIOXnZW1qVSWsJBddtp65T91VBVK6wu66up62oaMqDWXIIIFHhNdgieIgia7hXnYCTFgxlSlEJ9sKc5pK6+Qt1B0iQihz3SPyDk+sWGO3hgwTWpXy4815n3flF/X007bRYMF7gv84hb6x7vbCjFgqgSNcFbtxQuSskHNECM3YEVwZ3pGpYXMgAYcA0ap3PaKHVWnS+7eYcn9xDgHrAlLSnSPwICN1Y3OmvcrTrAH7X2YN0bMTXANxYANEcQ5meXZZ1pvsfw+Z3tFb4qcD1EWBqyvoIvNqs3Zefs0BLUmccMQOq8enZQWMh06aQz4IarplmQUHSqXN5vcnUcKfbeMfzbUwRMDJpeGoznccDWzLFs9NGCi3Yotl7cpan5q4BSCQ2DAv5NyQL255Ogp8U0z8PmTvce9E5Niz7PFgH/RHWXnS3n7oXE2m5AdGupd8ekB9q4YMKdIWr86P0va18MxL4lsBDvj0sZTOSRiAoDPS37eUHjAdDvdh3bJWycsmeU5xkIBn2wpfq348IBmkGO+4hFW78WmzvGJtTjAQDej+OCQBUxocgliS+xzVDBm74oOaJnh3R2yjOlqqCZUFqpsKYDBq4J+17xb5vsElYUqQ8XNHzBEROAzm6tXpUNQZag4VN+cASsH1BDvml9EpKeg4lB9MIJ5AtZwNJtLjprTaIYBguqDEcAUaFx0VtXtcMNVRkYirblW3nbOnnxnoTWfR3C5BLdvaEDRr+pQK8Squ6rBPprvB4wQ3xDybOCjZhUmwZO7KPcDerpegkNEOflOch011tk/xjnAhy/S8WNgXKUQF3TVFUrriqUN9CwGsuXyvkl8xfh5J7YABqs9fXkbDTOAgPOPfnGzPMd42jkZ8OeyfuXZ1tLjzQV5nbWoWlFtihT6fjV1nZHzx2wBvK/mwvsVJ6grH8w0z3fCkqCpY5z8ULn6n9bmfNuUR+mKg40Rc1eEzjR5wE3KrvmXtlBkKS5BJHuPWxeWHCBwQ144dNK7bp85eucaRe22nZV19rQMY9b6sALwywWfUbSuCvqwt2KeHk/xClbwHv5162vopKkofLZX9PaJS00Y8I3OmqXXdlPx4q4MnbV6dBJ4yPQEeAfqLkMv00eBk/jZpL8YvC6T+TiYiq7Xydp+T/yK9eFP0EN32C1/ITjx8JS1VCydNMZEDL/Bue0Vq27sQ1tmsMB93yOrdEc+v0rSK8vvqi25e6daIRGrpJ193T0DaqAl4Nm62ToCrdGOXrGiIHiBHHl2+hQo7etZk59ViHpIeW/CCsPW0DMM+Jkr29EuWAcn+ZOElSIbge6fAcjvGvNOiovLZHoFZjzCarLb6Cf9JiZ5RdtwHzI6BN7ihqIDFyRlaKO7I4++bGKA4TF/7uoOhAWOdfLPmvSig85XDcKbPdVns5sLf5sKrL9cbRyeD566NHga38pGx88GNINr8z+72IaS8cEpawzId2IS8NqCT8+2lqIqLVDgBl2gjncX2t7tVacO1V81fhYSMK+PeGKx/yO63+P063sQTv/9wWvsRxOXmQzgdrV85rm3UYWP4FV9k7jel6/VwbneWf36zS/FqrsIqxDnEvJu7J90XFTWr1yU+2GzqgvVWM2Fx/4+0txUxrzoY415qOiCT/RebKoOQ++pPrf8+l60dEHgnT11aes57csw4LGDENaWi2ZGB8wFRjOZMOn7pnxURS0PnTHdI5L0qyGNBl7cDyt/pGikSTHQuzb/073V57X9IMrJ95WIOQwajRnAVQoxqtz7IIH72rDHtdHNKD74HbonSdsQxweVJ98tO67tBxAfgw+M5FpgNDCdCQA+2VKMqnF+I3qRtrjljdKvUV3o4YNNdZe2lP+g7SZTAiYxZTpmAOe0lSMp53HvmEdcR5F+9Xld7ld3rtNZqf21F+GipF8hHN4aqekYANzWK0ey5w2XINaEJZF+VSpr/E/FD/RXLbM8+1pn9YOf13a3oboEmA4MyGrAP3VUISkn2Xsc6YKH/qHBv908Ytg4hvGObkbRQUW/6r6A+ICWN5sGAzIAGNU47ZKgRC2N86XbilamooMOteKFa7tv3W0c/t+absmKG3vR7uY0IgMysOgOybxpmKN3rCiQNG7ZU3Oew6igFU25sk1kI+ARVu1qObMGpBswtFd1PQg6pIX+8aSfQ2N4XwvJlKhb2g0GBDPquV8m3U10dXcrknQj0nzLAc3goforHHMXGBDMyNI+uFIuNr4Q8K38yRLjL0rKO/u6ORYg/c1IN+AmJYKR98luo0k//1FczLEM6W9GugEjmVqJdvYnbbgut1daCGD9zUg34BaV1PhCSNc2VynEcna4V6wyI92AjfctuQQRJHB/8PNSWSPHYqS/GekGLOtTGlmCq40jaTZHDbrhQPZLfzPSDVg+YGwrqi2nSIJ6Pp/N0t+MdAM2fojYnke+2q3LknLG9Tej+RyrQ38Wr0nIfADTvE0vBky3TOgsI3MGbHyykLZg18XGwXKw6W9GugELeXwjS2hXK0g/97UXWQ5g/c1IN2AnG3sjS+hSd5OugQ0WeFgOYP3NSDfgh6aFPVQajqaebIEE6QC1uUp/M9INWM+sTt26KSVJSAxx8DD+6TEV6W9Guld06Egw0V+lssYHV3QQHGKKW9iJliLqbh4uMctrzHjnQGsjslF23T4j61fSZka6ASNZIZzfVUv6eZJ3NHWAbbm8XfHp8AwZWc7ndbnGA9bfjHQ30eFCBEd03la03unpePDz6R5RjtZ8iu58eehM4+nSb0a6AY9y8OISCI6TId2VB16yhX7xFN15svc4toxdEASYkaWA7ayskcQzJ7Sk6CwLnkbRxivaJjnoFxhQ/2E7BoYqJ7oEG19IubyZdHmwF9/5mYDJVNx2iZQth1+OyIAMAEZ1sK62TK+Xwx53pWDYclvVKZbsYj0iAzIAeDIiV+WcpJR0xAP8rH9HL0Z+2w09HSlXth1vLmjtlSkGeu/7V9fTfqmtHL5lmwEZSF3xsBNGCH2MTzAc1Axllmfvikt/8KvHvMY+HzT1i/rLaO+8Sdn1WvFhHVHyzrg0qq0HpgMDsvoNvhfPRCIp54KkjDRdE/TXqCenuofTWal14ckzPaPYZjpmACM8IOit0mOk20NaEdztE5cicej0UWrglBdHPcZC0zEDOMzRO5hs6asBqu1u21Z5ivQrvpXNvoRV0wzaAXBkYyAhM/45diEtAZI7mM4EAIMW+MWhKiqrNudSe4W2sHt3/PL0kBkUHdZry+W9HZPyauQ81hqNMcAL/eNRraLScDQZRQfrtSRZcwkiI3LexwnLIURG7u8ceXTdIv8EeiwG5tKWNMtGwO62QoQuibxf9WLef3WkFkJD/cO0jFWjZiFZuiWyEbweteDrqet1jAmDy4126zUw10i3ueMwu+guLWQGwtLu9HSkX9ujYyxCwLN9JXzOmZl/A2/I4JEQP3uX1yLnn5u1+YXgRB0tkKRXtvLGJ2jnpw0zF5PnJk0QBcU4ByDcTrhKIV527eNPElbqiBTdbB3Xhz+xJizpcnvlmdZb1zqq9UnkCnXwfNQ9LMkrRh+3vFnVlX59L4F0oScYyrARQIYPxgJDo90QHBinXv1od3y6bm+TR1jN8IiCf/DfnWpFpULcqOxsVcmgqR9eQA9snKztffiiAIFrpNBXqPcsZKms8c95+6HM2V7RaA1l2B8yDDjRPQLtS8y5l1qZenXHm9GL5/qM1+f3rraOU2wdkVz6WGPem6XfDJ/t5aDfDvF6vr6JhgZ7zC983xgxF3mZygH1q0UHX7/5pWKgl55ayPqVG4u+2FxyhIqT24wxEfOAE1xD0bZmv+q7pvx5OZmUrtIaVnZz4dyLmRTtiwnGMfjIFQ5LUlc2Rc6nKPGkrVcOr/Liyx+eo+BwbRB4ailXtm0qPqT/5i8jOhAPzALGMeYOWXH6KMQeq0cnUXe03c+ypjX5WeArLQuZBp6w8Q9T/9Dg6daSz+tydXgP4t67pH/YqSUzg1RgFiOXKVrc4ZQQDSd7jxtu93QfrEGK50ZnzVnJLWiNH7ofCETJJ6ZvCvz9eXrHmwt0TDjeJ7M6nJJD7/GywwBiRYHjRUEQ44Y4eATYuzk/kA8CPlqzsqu+p71SLr55t6FIWj+iAxYhVNuTsMLr/1sSwMMBDYmefp+5HS87rEMNV94q/ZbBG4DYxp5nY03wlIPqngG18efUQXcAEY67rXD4BGL9O+B/jH3K3A6IHnZANhR+wcgh4KwSdCJbJzyPZAaMXQngUKV3YlKMb5dMWlB9MAKq+U3WZfjb82x3xadbThrZfYKKQ/XBCKgKZOMWDgH2rjvj0lAdN2RCgipDxQPI9lk1K8AgcG63TljCI6wshy5UFqqM/Cxr9m7CMstzzHuxqUgSmdgvqCZUlnQTbLMFzLm3gnBL7HNm/x5DBaGaCFeasjdMItV5yc8bCg/QNgBCf78LLTMV767JAAYVSetX52dJzW6zQvCZwatC3u+aHmDOvYOdX8rbX9MtMad4FyIitD6zCQPm3JvG31xy1DzGuZK9x70Tk4Iw3jUHwJx7Y5mHG65mlmWbbpcMne6mqPmpgVMoWotv2oCHBQ11RtEhGuYWkStS6Ltl/LN0jsWaJGDOvfnjrNqcnbdPj2j+jkHZWVmvHp2UFjKd5l1xTRXwsJqUXZnl2aQbsrBKs72iN0XOR3jIrKUAHtaNzpr3K06gXXuLSjHOARsj5hqzag4D/kW57RU7qk6zBzOgXROWlEh98qqlAB5WobQ+q/biBUkZ6Y60NAi62JmeUWkhMyZQOXxhuYCH1a6WH2vM+74pH+3BvboVLHBf4Be30D/egBxADNhAVSnEJ1uKc9rKkRwqT6oIoc90j8g5PrEjzb3HgFGqrVf+U0cVNOAFXXV1PW3GHHHLJYhggcdEl2BohCe7hY1ozxsMmA5B6Fzd3VopF0OU1azqalFJpX09sj6lfED12/OIrLlWQh7fycZeZCPw4Yt8+S4Q54QLvUc5eJnQASCWCNiihM8awoCxMGAsDBgLA8bCgLEwYCwMGAPGwoCxMGAsDBiLav1PgAEASePGMkSWuH0AAAAASUVORK5CYII=",
                                            buttons: [{
                                                title: "Reload",
                                                iconUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowZDJiMWMzMi1mODMzLTQxOTgtOGVlMy05YWY1OGVmOGUzNzEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjFBODMzNzYxQkREMTFFNDk0ODFGNTFFRDg1MkEzMjUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkY1RjA5NjYxQkREMTFFNDk0ODFGNTFFRDg1MkEzMjUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N2FmMWVkMGUtZjZkZC00YmYwLWE2MjctNTBkMjA4MjRiZDViIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBkMmIxYzMyLWY4MzMtNDE5OC04ZWUzLTlhZjU4ZWY4ZTM3MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuUD9ZcAAAM8SURBVHjatJbbS1RRFIePOjqG99LSLFMzoazMFLsHQQVFl8fee+qhP6cX3+sxiG6QFV0MNCjNjAyx1MoumpmXsRnz0m/Bd2A3TNocpw0fw5lz9v7tddlr7bSWlhYvwNgqzosMcVl0JrtAyAs2FkSeKBQ7xKT4Kqb+t/CcqBD1olpsEDdFdyqF00Q+FtpvWDSLWrEeMsUqPPBRjIifbDCwcBiROrFLrBU1Yp3zzWZxju/axCMxsJTr/yacLopwZw0WWix3i5IE3+eBbSYiXovhIK42KxvESaw0i9aIHC9FI5TguRDLToszWG1jXnwQ4yKb/7N5N01Wd8KomE1GOFc0irPioCh33r0Q98Rz3H/B2ZTF84ZojUuuZYXToEocEydEJe/MymeiQ9wVXaJJHCeT7f01jlNXsq5Ow23VxLaM/79gyXUxJD7x/y/eRcVV8RArk45xLgm0X+wkuSax0iy5EzdvTNyngpm134MmVz5VyEQLREz0inbiFz++sZlFNuitRLiBs5qJG5+KB+J9gnlRYht4pDvntoSiYeOH6BP9WJ/y4VucRSnM4tlK3TvO7EqGVbNNeNRfd9B+feEMpxj4xWImBYaZ6EVCaOOVuCR6QnFdKNXDCtBRToxHVbzixng+rtKEUlSXQ3GeG/FLqS88S62NObGxKraaMCQ7MkjUSidvYpTTqCscQ9gvBHaWt1DJwgGEw9TzWtbyWHvEN86P8QRNwJp9MbttZofWed4kKWzN44jYw1pWYnu4Gk26FtvDS15OsOM6SmhVAIttzl5uo2HW7EFjyrU4QsFop/Ef4OztE5+pyUNUtAgWuCOTZCzlCJ1ibj4x7WbtPj/GvvAivn9LI6/kCJRyIShjYhvfjMYJF/L9IQSbmOtxBepkXgytP4TnaQit9NnDYpvYCBXcKPv5LsLcHFxbg3CjcwW2u9dj1hxAI+ENJEIzT8e9BbjOIwSlxGjaubqGaKt5jpW+pdanb7FmZKmrzxy99gm7m6NdVpGd5csk1TgMENfbhGjmX2+ZUY7XGHGtJ0O308WKnROxQH8epRb3IjpI64wmc71dQHSMLjVDHhRR08NOU4kiPExMO2DJC8JvAQYA0OLb9zl5D+gAAAAASUVORK5CYII="
                                            }]
                                        }).then(e => {
                                            e.buttonClick.subscribe(o)
                                        });
                                        break;
                                    case "safari":
                                        n.create({
                                            title: "Grammarly needs to be reloaded",
                                            message: "While you were working, we updated Grammarly. To take advantage of these improvements, please save the text you are working on, and click here."
                                        });
                                        break;
                                    default:
                                        throw new Error('Unsupported notification kind "${notification.kind}"')
                                }
                                Object(a.a)().reloadNotificationShow()
                            }))
                        }(Object(o.a)(), t.toReload)
                    } catch (e) {
                        n.extensionUpdateFail(d)
                    }
                } else yield function(e, t, n, r, i) {
                    return Br(this, void 0, void 0, (function*() {
                        const s = Object(a.a)();
                        Se(Object(o.a)(), t);
                        let c = "unknown";
                        try {
                            c = yield function() {
                                return Br(this, void 0, void 0, (function*() {
                                    if (Object(u.m)() || Object(u.k)()) return "webstore";
                                    const e = yield n.getInstallSource();
                                    return null === e ? "webstore" : "funnel" === e.value ? "funnel" : "blog" === e.value ? "blog" : "editor" === e.value ? "editor" : "webstore"
                                }))
                            }()
                        } catch (e) {
                            s.cannotGetInstallSource()
                        }
                        var l;
                        l = c, s.extensionInstall(c), se.install(l), yield e.get("enableWelcomePageForQA"), yield function(e, t, n) {
                            return Br(this, void 0, void 0, (function*() {
                                if (Object(u.j)() && e) return;
                                if (t) return;
                                const r = yield n.getChromeStoreInstallUTM(), i = !!r && "true" === r.value, a = Object(u.j)() ? Object(At.d)(i) : Object(At.c)(e), {
                                    tabs: s
                                } = Object(o.a)();
                                return e ? s.updateCurrent(a) : s.open(a, !0)
                            }))
                        }("funnel" === c, i, n), r()
                    }))
                }(e, t, n, s, c), yield e.set("enabledDefs", !1), r()
        }))
    }
    class zr {
        constructor(e, t, n = !1) {
            this._spec = e, this._extensionApi = t, this._skipWaitingActiveTabOnStart = n
        }
        run() {
            Vr(this._spec, this._extensionApi, this._skipWaitingActiveTabOnStart)
        }
        dispose() {}
    }
    class qr extends r.a {
        constructor(e) {
            super({
                browser: e.browser,
                context: "bg"
            }), this.browserApi = e.browserApi, Object(o.d)(e.browserApi)
        }
        static getInstance() {
            if (void 0 === this._instance) throw new Error("Env not inited yet");
            return this._instance
        }
        static init(e) {
            if (void 0 !== this._instance) throw new Error("Env already inited");
            const t = new qr(e);
            this._instance = t, r.a.initShared(t), Object(a.b)(), Object(s.init)(t.browserApi.message), Object(i.c)(),
                function(e, t, n = !1) {
                    new zr(e, t, n).run()
                }(e.gnarSpecClass, t.browserApi, e.skipWaitingActiveTabOnStart)
        }
    }
    var $r, Yr = n(314);
    $r = {
        browser: "chrome",
        browserApi: Object(Yr.a)(!0),
        gnarSpecClass: class {
            constructor(e) {
                this.gnar = e
            }
            acceptedAlert(e, t, n) {
                return this.gnar.track({
                    eventName: "chromeExt/accepted-alert",
                    object: "alert",
                    objectId: "accepted",
                    experiment: e,
                    sessionId: t,
                    url: n
                }, {
                    lite: !0,
                    sendInstance: !1,
                    sendBrowser: !1,
                    sendUser: !1
                })
            }
            appStart(e) {
                return this.gnar.track({
                    action: "start",
                    component: "companion",
                    eventName: "chromeExt/companion/app-start",
                    object: "app",
                    osVersion: e
                })
            }
            autocorrectToggleClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/autocorrect-toggle-click",
                    object: "toggle",
                    objectId: "autocorrect",
                    state: e
                })
            }
            capturedException(e, t, n) {
                return this.gnar.track({
                    eventName: "chromeExt/captured-exception",
                    object: "exception",
                    objectId: "captured",
                    experiment: e,
                    sessionId: t,
                    url: n
                }, {
                    lite: !0,
                    sendInstance: !1,
                    sendBrowser: !1,
                    sendUser: !1
                })
            }
            checkingToggleClick(e, t, n) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/checking-toggle-click",
                    object: "toggle",
                    objectId: "checking",
                    placement: e,
                    siteCategory: t,
                    state: n
                })
            }
            connectednessDataEmail(e, t, n, r, o, i, a, s, c, u, l) {
                return this.gnar.track({
                    eventName: "chromeExt/connectednessData-email",
                    object: "email",
                    objectId: "connectednessData",
                    businessCount: e,
                    businessHistogramByRCount: t,
                    businessHistogramByRecipients: n,
                    hashedUserId: r,
                    histogramByRCount: o,
                    histogramByRecipients: i,
                    personalCount: a,
                    personalHistogramByRCount: s,
                    personalHistogramByRecipients: c,
                    startDateTime: u,
                    totalCount: l
                }, {
                    lite: !0,
                    sendInstance: !1,
                    sendBrowser: !1,
                    sendUser: !1
                })
            }
            continueWithPlanButtonClick(e, t, n, r) {
                return this.gnar.track({
                    action: "click",
                    component: "companion",
                    eventName: "chromeExt/companion/continueWithPlan-button-click",
                    object: "button",
                    objectId: "continueWithPlan",
                    osVersion: e,
                    pageId: t,
                    placement: n,
                    productId: r
                })
            }
            declineBetaButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/declineBeta-button-click",
                    object: "button",
                    objectId: "declineBeta",
                    placement: e
                })
            }
            definitionPopupShow() {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/definition-popup-show",
                    object: "popup",
                    objectId: "definition"
                })
            }
            definitionToggleClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/definition-toggle-click",
                    object: "toggle",
                    objectId: "definition",
                    state: e
                })
            }
            delightfulMessagePopupShow() {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/delightfulMessage-popup-show",
                    object: "popup",
                    objectId: "delightfulMessage"
                })
            }
            disableButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/disable-button-click",
                    object: "button",
                    objectId: "disable",
                    placement: e
                })
            }
            disableReminderDoNotShowAgainButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/disableReminderDoNotShowAgain-button-click",
                    object: "button",
                    objectId: "disableReminderDoNotShowAgain",
                    placement: e
                })
            }
            disableReminderNotificationShow() {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/disableReminder-notification-show",
                    object: "notification",
                    objectId: "disableReminder"
                })
            }
            disableUntilNextVisitButtonClick(e, t) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/disableUntilNextVisit-button-click",
                    object: "button",
                    objectId: "disableUntilNextVisit",
                    placement: e,
                    siteCategory: t
                })
            }
            documentGenreButtonClick(e, t) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/documentGenre-button-click",
                    object: "button",
                    objectId: "documentGenre",
                    documentGenre: e,
                    placement: t
                })
            }
            domainEmogenieHide(e) {
                return this.gnar.track({
                    action: "hide",
                    eventName: "chromeExt/domain-emogenie-hide",
                    object: "emogenie",
                    objectId: "domain",
                    domain: e
                }, {
                    lite: !0,
                    sendInstance: !1,
                    sendBrowser: !1,
                    sendUser: !1
                })
            }
            domainEmogenieShow(e) {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/domain-emogenie-show",
                    object: "emogenie",
                    objectId: "domain",
                    domain: e
                }, {
                    lite: !0,
                    sendInstance: !1,
                    sendBrowser: !1,
                    sendUser: !1
                })
            }
            editorInit(e, t, n, r) {
                return this.gnar.track({
                    action: "init",
                    eventName: "chromeExt/editor-init",
                    object: "editor",
                    docId: e,
                    mode: t,
                    cssBundle: n,
                    jsBundle: r
                })
            }
            emailSummarizationAcceptButtonClick(e, t) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/emailSummarizationAccept-button-click",
                    object: "button",
                    objectId: "emailSummarizationAccept",
                    docId: e,
                    placement: t
                })
            }
            emailSummarizationBadgeShow(e) {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/emailSummarization-badge-show",
                    object: "badge",
                    objectId: "emailSummarization",
                    docId: e
                })
            }
            emailSummarizationDisableButtonClick(e, t) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/emailSummarizationDisable-button-click",
                    object: "button",
                    objectId: "emailSummarizationDisable",
                    docId: e,
                    placement: t
                })
            }
            emailSummarizationExpandButtonClick(e, t) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/emailSummarizationExpand-button-click",
                    object: "button",
                    objectId: "emailSummarizationExpand",
                    docId: e,
                    placement: t
                })
            }
            emailSummarizationIgnoreButtonClick(e, t) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/emailSummarizationIgnore-button-click",
                    object: "button",
                    objectId: "emailSummarizationIgnore",
                    docId: e,
                    placement: t
                })
            }
            emailSummarizationPopupShow(e) {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/emailSummarization-popup-show",
                    object: "popup",
                    objectId: "emailSummarization",
                    docId: e
                })
            }
            emogenieBetaDeclineBetaButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/emogenieBeta/declineBeta-button-click",
                    feature: "emogenieBeta",
                    object: "button",
                    objectId: "declineBeta",
                    placement: e
                })
            }
            emogenieBetaEnableButtonClick(e, t) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/emogenieBeta/enable-button-click",
                    feature: "emogenieBeta",
                    object: "button",
                    objectId: "enable",
                    pageId: e,
                    placement: t
                })
            }
            emogenieBetaEnablePopupShow() {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/emogenieBeta/enable-popup-show",
                    feature: "emogenieBeta",
                    object: "popup",
                    objectId: "enable"
                })
            }
            emogenieBetaInvitePopupShow() {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/emogenieBeta/invite-popup-show",
                    feature: "emogenieBeta",
                    object: "popup",
                    objectId: "invite"
                })
            }
            emogenieBetaLearnMoreButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/emogenieBeta/learnMore-button-click",
                    feature: "emogenieBeta",
                    object: "button",
                    objectId: "learnMore",
                    placement: e
                })
            }
            emogenieBetaLeaveBetaButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/emogenieBeta/leaveBeta-button-click",
                    feature: "emogenieBeta",
                    object: "button",
                    objectId: "leaveBeta",
                    placement: e
                })
            }
            emogenieBetaLeaveBetaPopupShow() {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/emogenieBeta/leaveBeta-popup-show",
                    feature: "emogenieBeta",
                    object: "popup",
                    objectId: "leaveBeta"
                })
            }
            emogenieBetaSettingsButtonClick(e, t) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/emogenieBeta/settings-button-click",
                    feature: "emogenieBeta",
                    object: "button",
                    objectId: "settings",
                    pageId: e,
                    placement: t
                })
            }
            emogenieBetaSettingsPopupShow() {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/emogenieBeta/settings-popup-show",
                    feature: "emogenieBeta",
                    object: "popup",
                    objectId: "settings"
                })
            }
            emogenieBetaShareFeedbackButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/emogenieBeta/shareFeedback-button-click",
                    feature: "emogenieBeta",
                    object: "button",
                    objectId: "shareFeedback",
                    placement: e
                })
            }
            emogenieBetaShowEmogenieToggleClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/emogenieBeta/showEmogenie-toggle-click",
                    feature: "emogenieBeta",
                    object: "toggle",
                    objectId: "showEmogenie",
                    state: e
                })
            }
            emogenieBetaThumbsDownButtonClick(e, t, n) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/emogenieBeta/thumbsDown-button-click",
                    feature: "emogenieBeta",
                    object: "button",
                    objectId: "thumbsDown",
                    docId: e,
                    emotionName: t,
                    placement: n
                })
            }
            emogenieBetaThumbsUpButtonClick(e, t, n) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/emogenieBeta/thumbsUp-button-click",
                    feature: "emogenieBeta",
                    object: "button",
                    objectId: "thumbsUp",
                    docId: e,
                    emotionName: t,
                    placement: n
                })
            }
            emogenieBetaTryNowButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/emogenieBeta/tryNow-button-click",
                    feature: "emogenieBeta",
                    object: "button",
                    objectId: "tryNow",
                    placement: e
                })
            }
            emogenieBetaWelcomePopupShow() {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/emogenieBeta/welcome-popup-show",
                    feature: "emogenieBeta",
                    object: "popup",
                    objectId: "welcome"
                })
            }
            emogeniePopupShow(e, t, n) {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/emogenie-popup-show",
                    object: "popup",
                    objectId: "emogenie",
                    docId: e,
                    emotions: t,
                    numberEmotionsShown: n
                })
            }
            emogenieShow(e, t, n) {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/emogenie-show",
                    object: "emogenie",
                    docId: e,
                    emotions: t,
                    numberEmotionsShown: n
                })
            }
            enableButtonClick(e, t) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/enable-button-click",
                    object: "button",
                    objectId: "enable",
                    pageId: e,
                    placement: t
                })
            }
            enablePopupShow() {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/enable-popup-show",
                    object: "popup",
                    objectId: "enable"
                })
            }
            enterpriseSiteClarityNotificationClick() {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/enterpriseSiteClarity-notification-click",
                    object: "notification",
                    objectId: "enterpriseSiteClarity"
                })
            }
            enterpriseSiteClarityNotificationShow() {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/enterpriseSiteClarity-notification-show",
                    object: "notification",
                    objectId: "enterpriseSiteClarity"
                })
            }
            enterpriseSiteToneDetectorNotificationClick() {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/enterpriseSiteToneDetector-notification-click",
                    object: "notification",
                    objectId: "enterpriseSiteToneDetector"
                })
            }
            enterpriseSiteToneDetectorNotificationShow() {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/enterpriseSiteToneDetector-notification-show",
                    object: "notification",
                    objectId: "enterpriseSiteToneDetector"
                })
            }
            facebookSignInButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/facebookSignIn-button-click",
                    object: "button",
                    objectId: "facebookSignIn",
                    placement: e
                })
            }
            facebookSignUpButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/facebookSignUp-button-click",
                    object: "button",
                    objectId: "facebookSignUp",
                    placement: e
                })
            }
            featuresUnavailablePopupDisableButtonClick() {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/featuresUnavailablePopupDisable-button-click",
                    object: "button",
                    objectId: "featuresUnavailablePopupDisable",
                    placement: "featuresUnavailablePopup"
                })
            }
            featuresUnavailablePopupDismissButtonClick() {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/featuresUnavailablePopupDismiss-button-click",
                    object: "button",
                    objectId: "featuresUnavailablePopupDismiss",
                    placement: "featuresUnavailablePopup"
                })
            }
            featuresUnavailablePopupShow() {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/featuresUnavailable-popup-show",
                    object: "popup",
                    objectId: "featuresUnavailable"
                })
            }
            feedbackPopupShow() {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/feedback-popup-show",
                    object: "popup",
                    objectId: "feedback",
                    placement: "gdocs"
                })
            }
            feedbackSentButtonClick(e, t, n) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/feedbackSent-button-click",
                    object: "button",
                    objectId: "feedbackSent",
                    feedback: e,
                    placement: t,
                    score: n
                })
            }
            gButtonClick(e, t, n, r) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/g-button-click",
                    object: "button",
                    objectId: "g",
                    docId: e,
                    numberOfAdvancedAlerts: t,
                    numberOfCriticalAlerts: n,
                    placement: r
                })
            }
            gdocsEditorInit(e, t, n, r) {
                return this.gnar.track({
                    action: "init",
                    eventName: "chromeExt/gdocs/editor-init",
                    feature: "gdocs",
                    object: "editor",
                    docId: e,
                    mode: t,
                    cssBundle: n,
                    jsBundle: r
                })
            }
            gdocsFeaturesUnavailablePopupDisableButtonClick() {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/gdocs/featuresUnavailablePopupDisable-button-click",
                    feature: "gdocs",
                    object: "button",
                    objectId: "featuresUnavailablePopupDisable",
                    placement: "featuresUnavailablePopup"
                })
            }
            gdocsFeaturesUnavailablePopupDismissButtonClick() {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/gdocs/featuresUnavailablePopupDismiss-button-click",
                    feature: "gdocs",
                    object: "button",
                    objectId: "featuresUnavailablePopupDismiss",
                    placement: "featuresUnavailablePopup"
                })
            }
            gdocsFeaturesUnavailablePopupShow() {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/gdocs/featuresUnavailable-popup-show",
                    feature: "gdocs",
                    object: "popup",
                    objectId: "featuresUnavailable"
                })
            }
            gdocsLargeDocumentButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/gdocs/largeDocument-button-click",
                    feature: "gdocs",
                    object: "button",
                    objectId: "largeDocument",
                    placement: e
                })
            }
            gdocsLargeDocumentPopupShow() {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/gdocs/largeDocument-popup-show",
                    feature: "gdocs",
                    object: "popup",
                    objectId: "largeDocument"
                })
            }
            gdocsOfflinePageReloadButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/gdocs/offlinePageReload-button-click",
                    feature: "gdocs",
                    object: "button",
                    objectId: "offlinePageReload",
                    placement: e
                })
            }
            gdocsOfflinePopupShow() {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/gdocs/offline-popup-show",
                    feature: "gdocs",
                    object: "popup",
                    objectId: "offline"
                })
            }
            gdocsOpenEditorButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/gdocs/openEditor-button-click",
                    feature: "gdocs",
                    object: "button",
                    objectId: "openEditor",
                    placement: e
                })
            }
            gdocsOptInPopupCloseButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/gdocs/optInPopupClose-button-click",
                    feature: "gdocs",
                    object: "button",
                    objectId: "optInPopupClose",
                    placement: e
                })
            }
            gdocsOptInPopupEnableButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/gdocs/optInPopupEnable-button-click",
                    feature: "gdocs",
                    object: "button",
                    objectId: "optInPopupEnable",
                    placement: e
                })
            }
            gdocsOptInPopupShow() {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/gdocs/optIn-popup-show",
                    feature: "gdocs",
                    object: "popup",
                    objectId: "optIn"
                })
            }
            gdocsPremiumUphookButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/gdocs/premiumUphook-button-click",
                    feature: "gdocs",
                    object: "button",
                    objectId: "premiumUphook",
                    placement: e
                })
            }
            gdocsRegisterPromptButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/gdocs/registerPrompt-button-click",
                    feature: "gdocs",
                    object: "button",
                    objectId: "registerPrompt",
                    placement: e
                })
            }
            gdocsRegisterPromptPopupShow() {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/gdocs/registerPrompt-popup-show",
                    feature: "gdocs",
                    object: "popup",
                    objectId: "registerPrompt"
                })
            }
            gdocsShowPremiumAlertsToggleClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/gdocs/showPremiumAlerts-toggle-click",
                    feature: "gdocs",
                    object: "toggle",
                    objectId: "showPremiumAlerts",
                    state: e
                })
            }
            getMoreWithPremiumButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/getMoreWithPremium-button-click",
                    object: "button",
                    objectId: "getMoreWithPremium",
                    placement: e
                })
            }
            getPremiumButtonClick(e, t, n) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/getPremium-button-click",
                    object: "button",
                    objectId: "getPremium",
                    placement: e,
                    numberOfAdvancedAlerts: t,
                    numberOfCriticalAlerts: n
                })
            }
            gmailPopupGmailPremiumNotificationClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/gmailPopup/gmailPremium-notification-click",
                    feature: "gmailPopup",
                    object: "notification",
                    objectId: "gmailPremium",
                    location: e
                })
            }
            gmailPopupGmailPremiumNotificationShow(e, t) {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/gmailPopup/gmailPremium-notification-show",
                    feature: "gmailPopup",
                    object: "notification",
                    objectId: "gmailPremium",
                    characters: e,
                    premiumAlerts: t
                })
            }
            gmailPopupGmailPremiumPopupClose(e) {
                return this.gnar.track({
                    action: "close",
                    eventName: "chromeExt/gmailPopup/gmailPremium-popup-close",
                    feature: "gmailPopup",
                    object: "popup",
                    objectId: "gmailPremium",
                    reason: e
                })
            }
            gmailPopupGmailPremiumPopupLearnMoreButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/gmailPopup/gmailPremiumPopupLearnMore-button-click",
                    feature: "gmailPopup",
                    object: "button",
                    objectId: "gmailPremiumPopupLearnMore",
                    placement: e
                })
            }
            gmailPopupGmailPremiumPopupShow(e, t) {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/gmailPopup/gmailPremium-popup-show",
                    feature: "gmailPopup",
                    object: "popup",
                    objectId: "gmailPremium",
                    characters: e,
                    premiumAlerts: t
                })
            }
            gmailPremiumNotificationClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/gmailPremium-notification-click",
                    object: "notification",
                    objectId: "gmailPremium",
                    location: e
                })
            }
            gmailPremiumNotificationShow(e, t) {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/gmailPremium-notification-show",
                    object: "notification",
                    objectId: "gmailPremium",
                    characters: e,
                    premiumAlerts: t
                })
            }
            gmailPremiumPopupClose(e) {
                return this.gnar.track({
                    action: "close",
                    eventName: "chromeExt/gmailPremium-popup-close",
                    object: "popup",
                    objectId: "gmailPremium",
                    reason: e
                })
            }
            gmailPremiumPopupLearnMoreButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/gmailPremiumPopupLearnMore-button-click",
                    object: "button",
                    objectId: "gmailPremiumPopupLearnMore",
                    placement: e
                })
            }
            gmailPremiumPopupShow(e, t) {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/gmailPremium-popup-show",
                    object: "popup",
                    objectId: "gmailPremium",
                    characters: e,
                    premiumAlerts: t
                })
            }
            googleSignInButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/googleSignIn-button-click",
                    object: "button",
                    objectId: "googleSignIn",
                    placement: e
                })
            }
            googleSignUpButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/googleSignUp-button-click",
                    object: "button",
                    objectId: "googleSignUp",
                    placement: e
                })
            }
            initializedExtension(e, t, n) {
                return this.gnar.track({
                    eventName: "chromeExt/initialized-extension",
                    object: "extension",
                    objectId: "initialized",
                    experiment: e,
                    sessionId: t,
                    url: n
                }, {
                    lite: !0,
                    sendInstance: !1,
                    sendBrowser: !1,
                    sendUser: !1
                })
            }
            install(e) {
                return this.gnar.track({
                    action: "install",
                    eventName: "chromeExt/install",
                    installSource: e
                })
            }
            invitePopupShow() {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/invite-popup-show",
                    object: "popup",
                    objectId: "invite"
                })
            }
            languageSettingUpdate(e, t, n) {
                return this.gnar.track({
                    action: "update",
                    eventName: "chromeExt/language-setting-update",
                    object: "setting",
                    objectId: "language",
                    language: e,
                    languageSource: t,
                    isLikeCapi: n
                })
            }
            largeDocumentButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/largeDocument-button-click",
                    object: "button",
                    objectId: "largeDocument",
                    placement: e
                })
            }
            largeDocumentPopupShow() {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/largeDocument-popup-show",
                    object: "popup",
                    objectId: "largeDocument"
                })
            }
            launchTime(e, t, n) {
                return this.gnar.track({
                    action: "launchTime",
                    eventName: "chromeExt/launchTime",
                    isFirstLoad: e,
                    popupEditorType: t,
                    time: n
                })
            }
            learnMoreButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/learnMore-button-click",
                    object: "button",
                    objectId: "learnMore",
                    placement: e
                })
            }
            leaveBetaButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/leaveBeta-button-click",
                    object: "button",
                    objectId: "leaveBeta",
                    placement: e
                })
            }
            leaveBetaPopupShow() {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/leaveBeta-popup-show",
                    object: "popup",
                    objectId: "leaveBeta"
                })
            }
            limitedSitesPopupShow() {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/limitedSites-popup-show",
                    object: "popup",
                    objectId: "limitedSites"
                })
            }
            loginReminderBadgeShow() {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/loginReminder-badge-show",
                    object: "badge",
                    objectId: "loginReminder"
                })
            }
            loginReminderCloseButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/loginReminderClose-button-click",
                    object: "button",
                    objectId: "loginReminderClose",
                    placement: e
                })
            }
            loginReminderDoNotShowThisAgainButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/loginReminderDoNotShowThisAgain-button-click",
                    object: "button",
                    objectId: "loginReminderDoNotShowThisAgain",
                    placement: e
                })
            }
            loginReminderPopupShow() {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/loginReminder-popup-show",
                    object: "popup",
                    objectId: "loginReminder"
                })
            }
            logoutFormFail(e, t) {
                return this.gnar.track({
                    action: "fail",
                    eventName: "chromeExt/logout-form-fail",
                    object: "form",
                    objectId: "logout",
                    fieldErrors: e,
                    formErrorMessage: t
                })
            }
            logoutFormSuccess() {
                return this.gnar.track({
                    action: "success",
                    eventName: "chromeExt/logout-form-success",
                    object: "form",
                    objectId: "logout"
                })
            }
            mouthlessEmojiShow() {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/mouthless-emoji-show",
                    object: "emoji",
                    objectId: "mouthless"
                })
            }
            myGrammarlyButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/myGrammarly-button-click",
                    object: "button",
                    objectId: "myGrammarly",
                    placement: e
                })
            }
            newBadgeButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/newBadge-button-click",
                    object: "button",
                    objectId: "newBadge",
                    placement: e
                })
            }
            newDocumentButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/newDocument-button-click",
                    object: "button",
                    objectId: "newDocument",
                    placement: e
                })
            }
            offlinePageReloadButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/offlinePageReload-button-click",
                    object: "button",
                    objectId: "offlinePageReload",
                    placement: e
                })
            }
            offlinePopupShow() {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/offline-popup-show",
                    object: "popup",
                    objectId: "offline"
                })
            }
            onboardingOverlayCloseButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/onboarding/overlayClose-button-click",
                    feature: "onboarding",
                    object: "button",
                    objectId: "overlayClose",
                    placement: e
                })
            }
            onboardingOverlayLetsWriteButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/onboarding/overlayLetsWrite-button-click",
                    feature: "onboarding",
                    object: "button",
                    objectId: "overlayLetsWrite",
                    placement: e
                })
            }
            onboardingOverlayNextButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/onboarding/overlayNext-button-click",
                    feature: "onboarding",
                    object: "button",
                    objectId: "overlayNext",
                    placement: e
                })
            }
            onboardingOverlayPersonalizeButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/onboarding/overlayPersonalize-button-click",
                    feature: "onboarding",
                    object: "button",
                    objectId: "overlayPersonalize",
                    placement: e
                })
            }
            onboardingOverlaySaveButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/onboarding/overlaySave-button-click",
                    feature: "onboarding",
                    object: "button",
                    objectId: "overlaySave",
                    placement: e
                })
            }
            onboardingOverlayShow() {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/onboarding/overlay-show",
                    feature: "onboarding",
                    object: "overlay"
                })
            }
            onboardingPopupCloseButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/onboarding/popupClose-button-click",
                    feature: "onboarding",
                    object: "button",
                    objectId: "popupClose",
                    placement: e
                })
            }
            onboardingPopupShow() {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/onboarding/popup-show",
                    feature: "onboarding",
                    object: "popup"
                })
            }
            openEditorButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/openEditor-button-click",
                    object: "button",
                    objectId: "openEditor",
                    placement: e
                })
            }
            optInPopupCloseButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/optInPopupClose-button-click",
                    object: "button",
                    objectId: "optInPopupClose",
                    placement: e
                })
            }
            optInPopupEnableButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/optInPopupEnable-button-click",
                    object: "button",
                    objectId: "optInPopupEnable",
                    placement: e
                })
            }
            optInPopupShow() {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/optIn-popup-show",
                    object: "popup",
                    objectId: "optIn"
                })
            }
            overlayCloseButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/overlayClose-button-click",
                    object: "button",
                    objectId: "overlayClose",
                    placement: e
                })
            }
            overlayLetsWriteButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/overlayLetsWrite-button-click",
                    object: "button",
                    objectId: "overlayLetsWrite",
                    placement: e
                })
            }
            overlayNextButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/overlayNext-button-click",
                    object: "button",
                    objectId: "overlayNext",
                    placement: e
                })
            }
            overlayPersonalizeButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/overlayPersonalize-button-click",
                    object: "button",
                    objectId: "overlayPersonalize",
                    placement: e
                })
            }
            overlaySaveButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/overlaySave-button-click",
                    object: "button",
                    objectId: "overlaySave",
                    placement: e
                })
            }
            overlayShow() {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/overlay-show",
                    object: "overlay"
                })
            }
            popupCloseButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/popupClose-button-click",
                    object: "button",
                    objectId: "popupClose",
                    placement: e
                })
            }
            popupEditorDocumentGenreButtonClick(e, t) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/popupEditor/documentGenre-button-click",
                    feature: "popupEditor",
                    object: "button",
                    objectId: "documentGenre",
                    documentGenre: e,
                    placement: t
                })
            }
            popupEditorLaunchTime(e, t, n) {
                return this.gnar.track({
                    action: "launchTime",
                    eventName: "chromeExt/popupEditor/launchTime",
                    feature: "popupEditor",
                    isFirstLoad: e,
                    popupEditorType: t,
                    time: n
                })
            }
            popupEditorSettingToggleClick(e, t) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/popupEditor/setting-toggle-click",
                    feature: "popupEditor",
                    object: "toggle",
                    objectId: "setting",
                    settingName: e,
                    state: t
                })
            }
            popupShow() {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/popup-show",
                    object: "popup"
                })
            }
            premiumPreviewCardShow(e, t) {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/premiumPreview-card-show",
                    object: "card",
                    objectId: "premiumPreview",
                    lens: e,
                    outcome: t
                })
            }
            premiumPreviewNotificationClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/premiumPreview-notification-click",
                    object: "notification",
                    objectId: "premiumPreview",
                    location: e
                })
            }
            premiumPreviewNotificationShow() {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/premiumPreview-notification-show",
                    object: "notification",
                    objectId: "premiumPreview"
                })
            }
            premiumPreviewPremiumPreviewCardShow(e, t) {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/premiumPreview/premiumPreview-card-show",
                    feature: "premiumPreview",
                    object: "card",
                    objectId: "premiumPreview",
                    lens: e,
                    outcome: t
                })
            }
            premiumPreviewPremiumPreviewNotificationClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/premiumPreview/premiumPreview-notification-click",
                    feature: "premiumPreview",
                    object: "notification",
                    objectId: "premiumPreview",
                    location: e
                })
            }
            premiumPreviewPremiumPreviewNotificationShow() {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/premiumPreview/premiumPreview-notification-show",
                    feature: "premiumPreview",
                    object: "notification",
                    objectId: "premiumPreview"
                })
            }
            premiumPreviewPremiumPreviewTransformClick() {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/premiumPreview/premiumPreview-transform-click",
                    feature: "premiumPreview",
                    object: "transform",
                    objectId: "premiumPreview"
                })
            }
            premiumPreviewPremiumPreviewUnlockClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/premiumPreview/premiumPreview-unlock-click",
                    feature: "premiumPreview",
                    object: "unlock",
                    objectId: "premiumPreview",
                    outcome: e
                })
            }
            premiumPreviewTransformClick() {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/premiumPreview-transform-click",
                    object: "transform",
                    objectId: "premiumPreview"
                })
            }
            premiumPreviewUnlockClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/premiumPreview-unlock-click",
                    object: "unlock",
                    objectId: "premiumPreview",
                    outcome: e
                })
            }
            premiumUphookButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/premiumUphook-button-click",
                    object: "button",
                    objectId: "premiumUphook",
                    placement: e
                })
            }
            registerPromptButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/registerPrompt-button-click",
                    object: "button",
                    objectId: "registerPrompt",
                    placement: e
                })
            }
            registerPromptPopupShow() {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/registerPrompt-popup-show",
                    object: "popup",
                    objectId: "registerPrompt"
                })
            }
            safariMigrationInlineCardClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/safariMigration-inlineCard-click",
                    object: "inlineCard",
                    objectId: "safariMigration",
                    migrationRequestType: e
                })
            }
            safariMigrationInlineCardShow(e) {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/safariMigration-inlineCard-show",
                    object: "inlineCard",
                    objectId: "safariMigration",
                    migrationRequestType: e
                })
            }
            safariMigrationPopupButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/safariMigrationPopup-button-click",
                    object: "button",
                    objectId: "safariMigrationPopup",
                    placement: e
                })
            }
            safariMigrationPopupShow() {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/safariMigration-popup-show",
                    object: "popup",
                    objectId: "safariMigration"
                })
            }
            settingToggleClick(e, t) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/setting-toggle-click",
                    object: "toggle",
                    objectId: "setting",
                    settingName: e,
                    state: t
                })
            }
            settingsButtonClick(e, t) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/settings-button-click",
                    object: "button",
                    objectId: "settings",
                    pageId: e,
                    placement: t
                })
            }
            settingsPopupShow() {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/settings-popup-show",
                    object: "popup",
                    objectId: "settings"
                })
            }
            shareFeedbackButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/shareFeedback-button-click",
                    object: "button",
                    objectId: "shareFeedback",
                    placement: e
                })
            }
            showEmogenieToggleClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/showEmogenie-toggle-click",
                    object: "toggle",
                    objectId: "showEmogenie",
                    state: e
                })
            }
            showPremiumAlertsToggleClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/showPremiumAlerts-toggle-click",
                    object: "toggle",
                    objectId: "showPremiumAlerts",
                    state: e
                })
            }
            signInButtonClick() {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/signIn-button-click",
                    object: "button",
                    objectId: "signIn",
                    placement: "settingsToolbar"
                })
            }
            signInFormFail(e, t, n) {
                return this.gnar.track({
                    action: "fail",
                    eventName: "chromeExt/signIn-form-fail",
                    object: "form",
                    objectId: "signIn",
                    placement: e,
                    fieldErrors: t,
                    formErrorMessage: n
                })
            }
            signInFormSuccess(e) {
                return this.gnar.track({
                    action: "success",
                    eventName: "chromeExt/signIn-form-success",
                    object: "form",
                    objectId: "signIn",
                    placement: e
                })
            }
            signInOverlayShow(e) {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/signIn-overlay-show",
                    object: "overlay",
                    objectId: "signIn",
                    placement: e
                })
            }
            signUpButtonClick() {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/signUp-button-click",
                    object: "button",
                    objectId: "signUp",
                    placement: "settingsToolbar"
                })
            }
            signUpFormFail(e, t, n) {
                return this.gnar.track({
                    action: "fail",
                    eventName: "chromeExt/signUp-form-fail",
                    object: "form",
                    objectId: "signUp",
                    placement: e,
                    fieldErrors: t,
                    formErrorMessage: n
                })
            }
            signUpFormSuccess(e) {
                return this.gnar.track({
                    action: "success",
                    eventName: "chromeExt/signUp-form-success",
                    object: "form",
                    objectId: "signUp",
                    placement: e
                })
            }
            signUpOverlayShow(e) {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/signUp-overlay-show",
                    object: "overlay",
                    objectId: "signUp",
                    placement: e
                })
            }
            siteIsBrowserDisabled() {
                return this.gnar.track({
                    action: "siteIsBrowserDisabled",
                    eventName: "chromeExt/siteIsBrowserDisabled"
                })
            }
            subscriptionFormFail(e, t, n, r, o, i, a, s) {
                return this.gnar.track({
                    action: "fail",
                    component: "companion",
                    eventName: "chromeExt/companion/subscription-form-fail",
                    object: "form",
                    objectId: "subscription",
                    osVersion: e,
                    pageId: t,
                    billingError: n,
                    fieldErrors: r,
                    formErrorMessage: o,
                    productId: i,
                    reason: a,
                    subReason: s
                })
            }
            subscriptionFormShow(e, t) {
                return this.gnar.track({
                    action: "show",
                    component: "companion",
                    eventName: "chromeExt/companion/subscription-form-show",
                    object: "form",
                    objectId: "subscription",
                    utmCampaign: "safariUpgradeHook",
                    utmMedium: "internal",
                    utmSource: "upHook",
                    osVersion: e,
                    pageId: t
                })
            }
            subscriptionFormSuccess(e, t, n) {
                return this.gnar.track({
                    action: "success",
                    component: "companion",
                    eventName: "chromeExt/companion/subscription-form-success",
                    object: "form",
                    objectId: "subscription",
                    osVersion: e,
                    pageId: t,
                    productId: n
                })
            }
            subscriptionPageShow(e, t) {
                return this.gnar.track({
                    action: "show",
                    component: "companion",
                    eventName: "chromeExt/companion/subscription-page-show",
                    object: "page",
                    objectId: "subscription",
                    utmCampaign: "safariUpgradeHook",
                    utmMedium: "internal",
                    utmSource: "upHook",
                    osVersion: e,
                    pageId: t
                })
            }
            synonymAcceptButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/synonymAccept-button-click",
                    object: "button",
                    objectId: "synonymAccept",
                    placement: e
                })
            }
            synonymsPopupShow() {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/synonyms-popup-show",
                    object: "popup",
                    objectId: "synonyms"
                })
            }
            thumbsDownButtonClick(e, t, n) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/thumbsDown-button-click",
                    object: "button",
                    objectId: "thumbsDown",
                    docId: e,
                    emotionName: t,
                    placement: n
                })
            }
            thumbsUpButtonClick(e, t, n) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/thumbsUp-button-click",
                    object: "button",
                    objectId: "thumbsUp",
                    docId: e,
                    emotionName: t,
                    placement: n
                })
            }
            tonePopupPopupShow() {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/tonePopup-popup-show",
                    object: "popup",
                    objectId: "tonePopup"
                })
            }
            toneUnavailableGetMoreWithPremiumButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/toneUnavailable/getMoreWithPremium-button-click",
                    feature: "toneUnavailable",
                    object: "button",
                    objectId: "getMoreWithPremium",
                    placement: e
                })
            }
            toneUnavailableLimitedSitesPopupShow() {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/toneUnavailable/limitedSites-popup-show",
                    feature: "toneUnavailable",
                    object: "popup",
                    objectId: "limitedSites"
                })
            }
            toneUnavailableMouthlessEmojiShow() {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/toneUnavailable/mouthless-emoji-show",
                    feature: "toneUnavailable",
                    object: "emoji",
                    objectId: "mouthless"
                })
            }
            toneUnavailableTonePopupPopupShow() {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/toneUnavailable/tonePopup-popup-show",
                    feature: "toneUnavailable",
                    object: "popup",
                    objectId: "tonePopup"
                })
            }
            toolbarButtonClick(e, t) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/toolbar-button-click",
                    object: "button",
                    objectId: "toolbar",
                    placement: e,
                    type: t
                })
            }
            tryNowButtonClick(e) {
                return this.gnar.track({
                    action: "click",
                    eventName: "chromeExt/tryNow-button-click",
                    object: "button",
                    objectId: "tryNow",
                    placement: e
                })
            }
            update(e) {
                return this.gnar.track({
                    action: "update",
                    eventName: "chromeExt/update",
                    oldVersion: e
                })
            }
            welcomePopupShow() {
                return this.gnar.track({
                    action: "show",
                    eventName: "chromeExt/welcome-popup-show",
                    object: "popup",
                    objectId: "welcome"
                })
            }
            welcomeToPremiumPageShow(e, t) {
                return this.gnar.track({
                    action: "show",
                    component: "companion",
                    eventName: "chromeExt/companion/welcomeToPremium-page-show",
                    object: "page",
                    objectId: "welcomeToPremium",
                    osVersion: e,
                    pageId: t
                })
            }
        }
    }, qr.init($r)
}]);