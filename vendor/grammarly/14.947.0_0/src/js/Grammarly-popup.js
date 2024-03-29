/*! For license information please see Grammarly-popup.js.LICENSE */ ! function(t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var i = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
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
            for (var i in t) n.d(r, i, function(e) {
                return t[e]
            }.bind(null, i));
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
    }, n.p = "", n(n.s = 769)
}([function(t, e, n) {
    "use strict";
    t.exports = n(464)
}, , function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return i
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

    function i(t, e) {
        function n() {
            this.constructor = t
        }
        r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }
}, function(t, e, n) {
    "use strict";
    var r;

    function i(t, e) {
        return Object.assign(Object.assign({}, t), {
            application: e.application,
            version: e.version,
            env: e.env,
            sessionId: e.context && e.sessionId,
            userId: e.context && e.context.userId,
            containerId: e.context && e.context.containerId
        })
    }

    function o(t) {
        return `${t}/logv2`
    }

    function a(t) {
        return `${t}/crashv2`
    }

    function s(t, e) {
        return `${e}/log?json=${encodeURIComponent(JSON.stringify(t))}`
    }
    n.d(e, "a", (function() {
            return r
        })), n.d(e, "b", (function() {
            return i
        })), n.d(e, "d", (function() {
            return o
        })), n.d(e, "c", (function() {
            return a
        })), n.d(e, "e", (function() {
            return s
        })),
        function(t) {
            t.INFO = "INFO", t.WARN = "WARN", t.ERROR = "ERROR"
        }(r || (r = {}))
}, function(t, e, n) {
    "use strict";
    var r = {};
    n.r(r), n.d(r, "map", (function() {
        return s
    })), n.d(r, "filter", (function() {
        return u
    })), n.d(r, "values", (function() {
        return c
    })), n.d(r, "pairs", (function() {
        return l
    })), n.d(r, "create", (function() {
        return f
    })), n.d(r, "pluck", (function() {
        return d
    }));
    var i = {};
    n.r(i), n.d(i, "find", (function() {
        return p
    }));
    var o = n(72),
        a = n(264);

    function s(t, e) {
        const n = {};
        return Object.keys(e).forEach(r => n[r] = t(r, e[r])), n
    }

    function u(t, e) {
        const n = {};
        return Object.keys(e).forEach(r => {
            t(r, e[r]) && (n[r] = e[r])
        }), n
    }

    function c(t) {
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

    function d(t, e) {
        return e.map(e => t[e])
    }

    function p(t, e) {
        for (const n of t.values())
            if (e(n)) return n;
        return null
    }
    var h = n(210);
    n.d(e, "b", (function() {
        return g
    })), n.d(e, "n", (function() {
        return v
    })), n.d(e, "g", (function() {
        return _
    })), n.d(e, "m", (function() {
        return w
    })), n.d(e, "p", (function() {
        return E
    })), n.d(e, "l", (function() {
        return O
    })), n.d(e, "h", (function() {
        return x
    })), n.d(e, "o", (function() {
        return S
    })), n.d(e, "i", (function() {
        return T
    })), n.d(e, "k", (function() {
        return C
    })), n.d(e, "c", (function() {
        return b
    })), n.d(e, "r", (function() {
        return N
    })), n.d(e, "q", (function() {
        return j
    })), n.d(e, "j", (function() {
        return I
    })), n.d(e, "a", (function() {
        return a
    })), n.d(e, "f", (function() {
        return r
    })), n.d(e, "d", (function() {
        return i
    })), n.d(e, "e", (function() {
        return h
    }));
    var b, m = function(t, e, n, r) {
        return new(n || (n = Promise))((function(i, o) {
            function a(t) {
                try {
                    u(r.next(t))
                } catch (t) {
                    o(t)
                }
            }

            function s(t) {
                try {
                    u(r.throw(t))
                } catch (t) {
                    o(t)
                }
            }

            function u(t) {
                var e;
                t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                    t(e)
                }))).then(a, s)
            }
            u((r = r.apply(t, e || [])).next())
        }))
    };
    class g {
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

    function E(t, e) {
        try {
            return t()
        } catch (t) {
            return e(t)
        }
    }

    function O() {}

    function x(t) {
        let e, n = !1;
        return (...r) => (n || (n = !0, e = t(...r)), e)
    }

    function S(t, e) {
        let n, r, i = !0;

        function a(t) {
            return i && (i = !1, r = o.a.createCompletionSource(), setTimeout(() => {
                try {
                    r.resolve(e())
                } catch (t) {
                    r.reject(t)
                } finally {
                    i = !0
                }
            }, t)), r.promise
        }
        return () => {
            const e = n;
            return n = Date.now(), a(void 0 === e || n - e >= t ? 0 : t - (n - e))
        }
    }

    function T(t, e, n = 0, r = (t => !0)) {
        return m(this, void 0, void 0, (function*() {
            let i = e;
            const a = [];
            for (; i > 0;) {
                let e;
                try {
                    i--, e = {
                        val: yield t(),
                        hasError: !1
                    }
                } catch (t) {
                    e = {
                        hasError: !0,
                        message: t && t.message || t || ""
                    }
                }
                if (e.hasError) a.push(e.message);
                else if (r(e.val)) return e.val;
                i > 0 && (yield o.a.delay(n))
            }
            throw new Error(`Condition was not met after ${e} retries. Errors: '${a.join(";")}'`)
        }))
    }
    class k {
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

    function C(t) {
        return new k(t)
    }

    function N(t, e) {
        const n = Object.assign({}, t);
        for (const t in e) {
            const r = e[t];
            void 0 !== r && (n[t] = r)
        }
        return n
    }

    function j(...t) {
        return t
    }

    function I(t) {
        return t.replace(/[.*+?()\[\]{}^$\\]/g, "\\$&")
    }! function(t) {
        function e() {
            return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
        }
        t.create = function() {
            return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
        }
    }(b || (b = {})), void 0 !== window.requestIdleCallback && window.requestIdleCallback
}, , function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(379);
    e.Lens = r.Lens, e.Prism = r.Prism, e.Optic = r.Optic;
    var i = n(469);
    e.Atom = i.Atom;
    var o = n(250);
    e.bind = o.bind, e.lift = o.lift, e.reactiveList = o.reactiveList, e.classes = o.classes, e.bindElementProps = o.bindElementProps, e.F = o.F
}, , , function(t, e, n) {
    "use strict";
    var r = n(73),
        i = (n(58), n(178)),
        o = n(254),
        a = n(447),
        s = n(52),
        u = n(27),
        c = n(46),
        l = function(t) {
            return "string" == typeof t || !Object(u.a)(t) && Object(c.a)(t) && "[object String]" == Object(s.a)(t)
        },
        f = n(31),
        d = (n(703), n(180));

    function p(t, e) {
        const n = (e || document).createElement("div");
        return n.innerHTML = i.sanitize(t.trim()), n.firstElementChild
    }

    function h(t, e, n, i = "div") {
        const o = e,
            a = o[n] = o[n] || {},
            s = t => {
                t.stopPropagation(), t.stopImmediatePropagation()
            };
        a.el || (a.el = o.ownerDocument.createElement(i), a.el.classList.add(d.gr_no_print), a.el.addEventListener("click", s), o.appendChild(a.el));
        const u = r.render(t, a.el);
        return null == a.remove && (a.remove = () => {
            delete o[n], a.el.removeEventListener("click", s), o.removeChild(a.el), r.unmountComponentAtNode(a.el)
        }), {
            component: u,
            remove: a.remove.bind(a),
            el: a.el
        }
    }

    function b(t, e, n = 1e3) {
        let r = t;
        for (; r.parentNode && 0 < n;) {
            if ("string" != typeof e && e === r) return !0;
            if (r.id === e || r === e) return !0;
            r = r.parentNode
        }
        return !1
    }

    function m(t, e) {
        return !(!t || void 0 === t.className) && t.classList.contains(e)
    }

    function g(t, e) {
        if (t && t.classList) return t.classList.remove(e)
    }

    function v(t, e) {
        if (t) {
            if (-1 === e.indexOf(" ")) return t.classList.add(e); {
                const n = e.split(" ");
                for (let e = 0; e < n.length; e++) t.classList.add(n[e])
            }
        }
    }

    function y(t, e, n) {
        e ? v(t, n) : g(t, n)
    }

    function _(t, e) {
        let n = t.parentNode;
        for (; null !== n;) {
            if (O(n, e)) return n;
            n = n.parentNode
        }
        return !1
    }

    function w(t) {
        let e = t.parentNode;
        for (; null !== e;) {
            if (E(e)) return e;
            e = e.parentNode
        }
        return !1
    }

    function E(t) {
        return "true" === t.contentEditable || "plaintext-only" === t.contentEditable
    }

    function O(t, e) {
        if (!t) return !1;
        const n = t.matches || t.msMatchesSelector || t.matchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector;
        return !!n && n.apply(t, [e])
    }

    function x(t, e = null, n) {
        return this.addEventListener(t, e, n), {
            off: () => S.apply(this, [t, e, n])
        }
    }

    function S(t, e, n) {
        this.removeEventListener(t, e || null, n)
    }

    function T(t, e) {
        const n = r => {
            e(r), S.call(this, t, n)
        };
        x.call(this, t, n)
    }

    function k(...t) {
        return t.reduce((t, e) => t.concat(Object(f.a)(e) ? Object.keys(e).filter(t => e[t]) : e), []).filter(t => Boolean(t)).join(" ")
    }
    n.d(e, "c", (function() {
        return p
    })), n.d(e, "q", (function() {
        return h
    })), n.d(e, "i", (function() {
        return b
    })), n.d(e, "h", (function() {
        return m
    })), n.d(e, "p", (function() {
        return g
    })), n.d(e, "a", (function() {
        return v
    })), n.d(e, "r", (function() {
        return y
    })), n.d(e, "g", (function() {
        return _
    })), n.d(e, "o", (function() {
        return w
    })), n.d(e, "j", (function() {
        return E
    })), n.d(e, "k", (function() {
        return O
    })), n.d(e, "l", (function() {
        return x
    })), n.d(e, "m", (function() {
        return T
    })), n.d(e, "d", (function() {
        return k
    })), n.d(e, "b", (function() {
        return I
    })), n.d(e, "e", (function() {
        return P
    })), n.d(e, "n", (function() {
        return M
    })), n.d(e, "s", (function() {
        return D
    })), n.d(e, "t", (function() {
        return R
    })), n.d(e, "f", (function() {
        return F
    }));
    const C = {
        "column-count": 1,
        columns: 1,
        "font-weight": 1,
        "line-height": 1,
        opacity: 1,
        "z-index": 1,
        zoom: 1
    };

    function N(t, e) {
        return "number" != typeof e || C[A(t)] ? e : e + "px"
    }

    function j(t) {
        return t.replace(/-+(.)?/g, (t, e) => e ? e.toUpperCase() : "")
    }

    function I(t) {
        return Object(o.a)(t, (t, e, n) => t[j(n)] = e)
    }

    function A(t) {
        return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
    }

    function P(t, e, n) {
        if (arguments.length < 3) {
            const n = t;
            if (!n) return;
            const r = getComputedStyle(n, "");
            if ("string" == typeof e) return n.style[j(e)] || r.getPropertyValue(e);
            if (Object(u.a)(e)) {
                const t = {};
                return Object(a.a)(e, (e, i) => {
                    t[j(e)] = n.style[j(e)] || r.getPropertyValue(e)
                }), t
            }
        }
        let r = "";
        if (l(e)) n || 0 === n ? r = A(e) + ":" + N(e, n) : t.style.removeProperty(A(e));
        else {
            e = e;
            for (const n in e) e[n] || 0 === e[n] ? r += A(n) + ":" + N(n, e[n]) + ";" : t.style.removeProperty(A(n))
        }
        return t.style.cssText += r
    }

    function M(t, e) {
        if (!t) return !1;
        let n = t;
        for (; n.parentNode;) {
            if (m(n, e)) return n;
            n = n.parentNode
        }
        return !1
    }

    function D(t = document) {
        if (void 0 === t.body.style.transform) {
            if (void 0 !== t.body.style.WebkitTransform) return "WebkitTransform";
            if (void 0 !== t.body.style.MozTransform) return "MozTransform"
        }
        return "transform"
    }

    function R() {
        const t = document.createElement("fakeelement"),
            e = {
                animation: "animationend",
                MozAnimation: "animationend",
                WebkitAnimation: "webkitAnimationEnd"
            };
        for (const n in e)
            if (void 0 !== t.style[n]) return e[n]
    }

    function F(t, e = {}) {
        const n = document.createEvent("CustomEvent");
        n.initCustomEvent(t + "-gr", !0, !0, e), document.dispatchEvent(n)
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "n", (function() {
        return i
    })), n.d(e, "g", (function() {
        return o
    })), n.d(e, "l", (function() {
        return a
    })), n.d(e, "j", (function() {
        return s
    })), n.d(e, "m", (function() {
        return u
    })), n.d(e, "k", (function() {
        return c
    })), n.d(e, "o", (function() {
        return l
    })), n.d(e, "i", (function() {
        return f
    })), n.d(e, "b", (function() {
        return d
    })), n.d(e, "h", (function() {
        return p
    })), n.d(e, "c", (function() {
        return h
    })), n.d(e, "f", (function() {
        return b
    })), n.d(e, "a", (function() {
        return m
    })), n.d(e, "d", (function() {
        return g
    })), n.d(e, "e", (function() {
        return v
    }));
    var r = n(17);

    function i() {
        return !!window.__extensionTestsMode
    }

    function o() {
        return r.a().appConfig.extensionId
    }

    function a() {
        return "firefox" === r.a().bundleInfo.browser
    }

    function s() {
        return "chrome" === r.a().bundleInfo.browser
    }

    function u() {
        return "safari" === r.a().bundleInfo.browser
    }

    function c() {
        return "edge" === r.a().bundleInfo.browser
    }

    function l() {
        return r.a().systemInfo.os.isWindows
    }

    function f() {
        return "bg" === r.a().bundleInfo.context
    }

    function d() {
        return r.a().bundleInfo.browser
    }

    function p() {
        return r.a().buildInfo.version
    }

    function h() {
        return r.a().bundleInfo.env
    }

    function b() {
        return r.a().appConfig.url
    }

    function m() {
        return r.a().appConfig.felog.appName
    }

    function g() {
        return r.a().appConfig.gnar.appName
    }

    function v() {
        return r.a().appConfig.url.grammarlyDomain
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return l
    }));
    var r = n(2),
        i = n(94),
        o = n(146),
        a = n(28),
        s = n(137),
        u = n(53),
        c = n(103),
        l = function(t) {
            function e(n, r, i) {
                var a = t.call(this) || this;
                switch (a.syncErrorValue = null, a.syncErrorThrown = !1, a.syncErrorThrowable = !1, a.isStopped = !1, arguments.length) {
                    case 0:
                        a.destination = o.a;
                        break;
                    case 1:
                        if (!n) {
                            a.destination = o.a;
                            break
                        }
                        if ("object" == typeof n) {
                            n instanceof e ? (a.syncErrorThrowable = n.syncErrorThrowable, a.destination = n, n.add(a)) : (a.syncErrorThrowable = !0, a.destination = new f(a, n));
                            break
                        }
                        default:
                            a.syncErrorThrowable = !0, a.destination = new f(a, n, r, i)
                }
                return a
            }
            return r.a(e, t), e.prototype[s.a] = function() {
                return this
            }, e.create = function(t, n, r) {
                var i = new e(t, n, r);
                return i.syncErrorThrowable = !1, i
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
        }(a.a),
        f = function(t) {
            function e(e, n, r, a) {
                var s, u = t.call(this) || this;
                u._parentSubscriber = e;
                var c = u;
                return Object(i.a)(n) ? s = n : n && (s = n.next, r = n.error, a = n.complete, n !== o.a && (c = Object.create(n), Object(i.a)(c.unsubscribe) && u.add(c.unsubscribe.bind(c)), c.unsubscribe = u.unsubscribe.bind(u))), u._context = c, u._next = s, u._error = r, u._complete = a, u
            }
            return r.a(e, t), e.prototype.next = function(t) {
                if (!this.isStopped && this._next) {
                    var e = this._parentSubscriber;
                    u.a.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t)
                }
            }, e.prototype.error = function(t) {
                if (!this.isStopped) {
                    var e = this._parentSubscriber,
                        n = u.a.useDeprecatedSynchronousErrorHandling;
                    if (this._error) n && e.syncErrorThrowable ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe()) : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
                    else if (e.syncErrorThrowable) n ? (e.syncErrorValue = t, e.syncErrorThrown = !0) : Object(c.a)(t), this.unsubscribe();
                    else {
                        if (this.unsubscribe(), n) throw t;
                        Object(c.a)(t)
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
                        u.a.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? (this.__tryOrSetError(e, n), this.unsubscribe()) : (this.__tryOrUnsub(n), this.unsubscribe())
                    } else this.unsubscribe()
                }
            }, e.prototype.__tryOrUnsub = function(t, e) {
                try {
                    t.call(this._context, e)
                } catch (t) {
                    if (this.unsubscribe(), u.a.useDeprecatedSynchronousErrorHandling) throw t;
                    Object(c.a)(t)
                }
            }, e.prototype.__tryOrSetError = function(t, e, n) {
                if (!u.a.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
                try {
                    e.call(this._context, n)
                } catch (e) {
                    return u.a.useDeprecatedSynchronousErrorHandling ? (t.syncErrorValue = e, t.syncErrorThrown = !0, !0) : (Object(c.a)(e), !0)
                }
                return !1
            }, e.prototype._unsubscribe = function() {
                var t = this._parentSubscriber;
                this._context = null, this._parentSubscriber = null, t.unsubscribe()
            }, e
        }(l)
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return r
    }));
    var r, i = n(167),
        o = n(144);
    ! function(t) {
        t.create = function(t) {
            return new i.a(t, () => Object(o.b)().logger.create(t))
        }
    }(r || (r = {}))
}, , function(t, e, n) {
    "use strict";
    var r = n(175),
        i = n(11),
        o = n(137),
        a = n(146),
        s = n(97),
        u = n(160),
        c = n(53);
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
                        if (t instanceof i.a) return t;
                        if (t[o.a]) return t[o.a]()
                    }
                    return t || e || n ? new i.a(t, e, n) : new i.a(a.a)
                }(t, e, n);
            if (r ? s.add(r.call(s, this.source)) : s.add(this.source || c.a.useDeprecatedSynchronousErrorHandling && !s.syncErrorThrowable ? this._subscribe(s) : this._trySubscribe(s)), c.a.useDeprecatedSynchronousErrorHandling && s.syncErrorThrowable && (s.syncErrorThrowable = !1, s.syncErrorThrown)) throw s.syncErrorValue;
            return s
        }, t.prototype._trySubscribe = function(t) {
            try {
                return this._subscribe(t)
            } catch (e) {
                c.a.useDeprecatedSynchronousErrorHandling && (t.syncErrorThrown = !0, t.syncErrorValue = e), Object(r.a)(t) ? t.error(e) : console.warn(e)
            }
        }, t.prototype.forEach = function(t, e) {
            var n = this;
            return new(e = f(e))((function(e, r) {
                var i;
                i = n.subscribe((function(e) {
                    try {
                        t(e)
                    } catch (t) {
                        r(t), i && i.unsubscribe()
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
            return 0 === t.length ? this : Object(u.b)(t)(this)
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
        if (t || (t = c.a.Promise || Promise), !t) throw new Error("no Promise impl found");
        return t
    }
}, , function(t, e, n) {
    "use strict";
    n.d(e, "i", (function() {
        return i
    })), n.d(e, "r", (function() {
        return s
    })), n.d(e, "h", (function() {
        return u
    })), n.d(e, "j", (function() {
        return c
    })), n.d(e, "f", (function() {
        return l
    })), n.d(e, "e", (function() {
        return f
    })), n.d(e, "s", (function() {
        return d
    })), n.d(e, "m", (function() {
        return p
    })), n.d(e, "u", (function() {
        return h
    })), n.d(e, "q", (function() {
        return b
    })), n.d(e, "n", (function() {
        return m
    })), n.d(e, "p", (function() {
        return v
    })), n.d(e, "l", (function() {
        return y
    })), n.d(e, "w", (function() {
        return _
    })), n.d(e, "g", (function() {
        return w
    })), n.d(e, "k", (function() {
        return E
    })), n.d(e, "v", (function() {
        return O
    })), n.d(e, "t", (function() {
        return x
    })), n.d(e, "d", (function() {
        return S
    })), n.d(e, "c", (function() {
        return T
    })), n.d(e, "b", (function() {
        return k
    })), n.d(e, "a", (function() {
        return C
    })), n.d(e, "o", (function() {
        return N
    })), n(254), n(10);
    var r = n(195);

    function i() {
        return window.chrome && window.chrome.runtime && window.chrome.runtime.lastError
    }

    function o(t, e) {
        const n = o.items = o.items || {},
            r = n[t];
        if (r || e) {
            if (r && !e) return clearTimeout(r), void delete n[t];
            ! function() {
                function r() {
                    i(), t()
                }

                function i() {
                    const i = setTimeout(r, e);
                    n[t] = i
                }
                i()
            }()
        }
    }

    function a() {
        return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
    }

    function s() {
        return a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a()
    }

    function u(t) {
        let e = 0;
        const n = t.length;
        let r, i;
        for (let o = 0; o < n; o++) r = t.charCodeAt(o), r >= 55296 && r < 57344 && r < 56320 && o + 1 < n && (i = t.charCodeAt(o + 1), i >= 56320 && i < 57344) ? (e += 4, o++) : e += r < 128 ? 1 : r < 2048 ? 2 : 3;
        return e
    }

    function c(t, e) {
        let n = e,
            r = 0;
        const i = [];
        for (; t[n];)
            if (" " === t[n++]) i.push(t.substring(r, n)), r = n, n += e;
            else {
                let o = n;
                do {
                    if (" " === t.substring(o - 1, o)) {
                        i.push(t.substring(r, o)), r = o, n = o + e;
                        break
                    }
                    o--
                } while (o > r)
            } return i.push(t.substr(r)), i
    }

    function l() {}

    function f() {
        return !0
    }

    function d(t) {
        return /^[-!#$%&\'*+\\./0-9=?A-Z^_`a-z{|}~]+@[-!#$%&\'*+\\/0-9=?A-Z^_`a-z{|}~]+\.[-!#$%&\'*+\\./0-9=?A-Z^_`a-z{|}~]+$/.test(t)
    }

    function p(t, e) {
        return e[1 == t ? 0 : 1]
    }

    function h(t, e, n) {
        const r = {};
        return function() {
            const i = "_memoize_" + (e ? e.apply(this, arguments) : arguments[0]);
            return window.hasOwnProperty.call(r, i) ? r[i] : (n && setTimeout(() => {
                delete r[i]
            }, n), r[i] = t.apply(this, arguments))
        }
    }

    function b(t, e) {
        return Math.floor(Math.random() * (e - t + 1)) + t
    }

    function m(t) {
        return new Promise(e => setTimeout(e, t))
    }! function(t) {
        t.items = {}
    }(o || (o = {}));
    const g = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    function v(t) {
        if (!t) return;
        const e = new Date(t);
        return "Invalid Date" !== e.toString() ? g[e.getMonth()] + " " + e.getDate() + ", " + e.getFullYear() : void 0
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
            i = n(e),
            o = Array(Math.abs(r.length - i.length)).fill(0);
        if (r.length > i.length ? i.push(...o) : r.push(...o), r.every((t, e) => t === i[e])) return 0;
        for (let t = 0, e = r.length; t < e; t++) {
            if (r[t] > i[t]) return 1;
            if (r[t] < i[t]) return -1
        }
        return -1
    }

    function w(t, e = 10) {
        setTimeout(t, e)
    }

    function E({
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

    function x(t) {
        return t.which || t.charCode || t.keyCode || 0
    }
    new RegExp(String.fromCharCode(160), "g"), String.fromCharCode(160), new RegExp("\n" + String.fromCharCode(32), "g");
    const S = 1e3,
        T = 60 * S,
        k = 27,
        C = 13;

    function N(t) {
        return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return o
    })), n.d(e, "b", (function() {
        return a
    })), n.d(e, "c", (function() {
        return s
    }));
    var r = n(145);
    const i = new(n(4).b)(() => {
        throw new Error("Global config not initialized")
    });

    function o() {
        return i.get()
    }

    function a(t, e, n, o) {
        const a = r.a.create(t, e, n, o);
        return i.init(a), window.GR_CFG = i.get(), a
    }

    function s(t, e, n) {
        throw new Error("Never use it")
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return a
    }));
    var r = n(81),
        i = n(192),
        o = n(14);

    function a(t, e, n, a, s) {
        if (void 0 === s && (s = new r.a(t, n, a)), !s.closed) return e instanceof o.a ? e.subscribe(s) : Object(i.a)(e)(s)
    }
}, , function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return i
    }));
    var r = n(2),
        i = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return r.a(e, t), e.prototype.notifyNext = function(t, e, n, r, i) {
                this.destination.next(e)
            }, e.prototype.notifyError = function(t, e) {
                this.destination.error(t)
            }, e.prototype.notifyComplete = function(t) {
                this.destination.complete()
            }, e
        }(n(11).a)
}, function(t, e, n) {
    "use strict";
    n.d(e, "b", (function() {
        return o
    })), n.d(e, "a", (function() {
        return a
    }));
    var r = n(0),
        i = n(411);

    function o(t, e) {
        return {
            dangerouslySetInnerHTML: {
                __html: Object(i.a)(t, e)
            }
        }
    }
    class a extends r.Component {
        constructor() {
            super(...arguments), this.handleClick = t => {
                t && (t.stopPropagation(), t.stopImmediatePropagation(), this.props.clickHandler(t))
            }
        }
        componentDidMount() {
            this.wrapperRef && this.wrapperRef.addEventListener("click", this.handleClick)
        }
        componentWillUnmount() {
            this.wrapperRef && this.wrapperRef.removeEventListener("click", this.handleClick)
        }
        render() {
            return r.createElement("div", {
                ref: t => this.wrapperRef = t,
                style: {
                    display: "initial"
                },
                className: this.props.className
            }, this.props.children)
        }
    }
}, function(t, e, n) {
    "use strict";
    n.r(e),
        function(t) {
            n.d(e, "initMessage", (function() {
                return f
            })), n.d(e, "onBackgroundPortReconnect", (function() {
                return b
            })), n.d(e, "emitError", (function() {
                return m
            })), n.d(e, "init", (function() {
                return g
            })), n.d(e, "one", (function() {
                return v
            })), n.d(e, "on", (function() {
                return y
            })), n.d(e, "off", (function() {
                return _
            })), n.d(e, "emitTabs", (function() {
                return w
            })), n.d(e, "emitTo", (function() {
                return E
            })), n.d(e, "emitFocusedTab", (function() {
                return O
            })), n.d(e, "emitBackground", (function() {
                return x
            })), n.d(e, "promiseBackground", (function() {
                return S
            }));
            var r = n(80),
                i = n(120),
                o = n(10),
                a = n(16),
                s = n(4),
                u = n(74),
                c = n(347);
            let l;

            function f(e) {
                if (l) return l;
                const n = (t && t.env, e);
                return l = n, n
            }

            function d() {
                return l || f((Object(o.i)() ? Object(u.a)() : Object(u.b)()).message)
            }
            const p = Object(r.emitter)({}),
                h = {};

            function b(t) {
                const e = d();
                "content-script-message-api" === e.kind && e.onBackgroundPortReconnect && e.onBackgroundPortReconnect(t)
            }
            const m = Object(c.a)(t => p.emit("__bgerror", t), 1e3);

            function g(t) {
                f(t), Object(i.a)(document, "grammarly:offline", () => m("proxy dead"), void 0)
            }

            function v(t, e) {
                y(t, (function n(...r) {
                    _(t, n), e.apply(this, r)
                }))
            }

            function y(t, e) {
                if ("__bgerror" === t) return void p.on("__bgerror", e);
                const n = h[t] = h[t] || [];
                if (n.push(e), 1 === n.length) try {
                    d().listen(t, (...t) => {
                        for (const e of n) e(...t)
                    })
                } catch (t) {
                    m(t)
                }
            }

            function _(t, e) {
                if ("__bgerror" === t) return void p.off("__bgerror", e);
                const n = h[t];
                if (!n) return;
                const r = n.indexOf(e); - 1 !== r && n.splice(r, 1), 0 === n.length && delete h[t]
            }

            function w(t) {
                try {
                    const e = d();
                    switch (e.kind) {
                        case "background-message-api":
                            e.broadcast(t, {});
                            break;
                        default:
                            throw new Error("emitTabs can be used only on background")
                    }
                } catch (t) {
                    m(t)
                }
            }

            function E(t, e, n = {}, r = s.l, i = s.l, o) {
                try {
                    if (!t) throw TypeError("emitTo can't be used without destination point");
                    const a = d();
                    switch (a.kind) {
                        case "background-message-api":
                            a.sendTo(t, e, n, r, i, o);
                            break;
                        default:
                            throw new Error("emitTo can be used only on background")
                    }
                } catch (t) {
                    m(t)
                }
            }

            function O(t, e) {
                try {
                    d().toFocused(t, e)
                } catch (t) {
                    m(t)
                }
            }

            function x(t, e, n, r) {
                try {
                    const i = d();
                    switch (i.kind) {
                        case "content-script-message-api":
                            i.broadcastBackground(t, e, n, r);
                            break;
                        default:
                            throw new Error("emitBackground can be used only in content script")
                    }
                } catch (t) {
                    m(t)
                }
            }

            function S(t, e = {}, n = 1e4) {
                const r = new Promise((n, r) => {
                    try {
                        const i = d();
                        switch (i.kind) {
                            case "content-script-message-api":
                                i.broadcastBackground(t, e, n, r);
                                break;
                            default:
                                throw new Error("promiseBackground can be used only on client scripts")
                        }
                    } catch (t) {
                        r(t), m(t)
                    }
                });
                return Promise.race([r, Object(a.n)(n).then(() => {
                    throw new Error(`Request to bg page (${l}) rejected by timeout`)
                })])
            }
        }.call(this, n(217))
}, , , function(t, e, n) {
    "use strict";
    var r;
    n.d(e, "a", (function() {
            return r
        })), n.d(e, "b", (function() {
            return o
        })),
        function(t) {
            t.TRACE = "TRACE", t.DEBUG = "DEBUG", t.INFO = "INFO", t.WARN = "WARN", t.ERROR = "ERROR", t.FATAL = "FATAL"
        }(r || (r = {}));
    const i = {
        [r.TRACE]: 1,
        [r.DEBUG]: 2,
        [r.INFO]: 3,
        [r.WARN]: 4,
        [r.ERROR]: 5,
        [r.FATAL]: 6
    };

    function o(t) {
        return i[t] || 0
    }
}, function(t, e, n) {
    t.exports = {
        gButtonPopup: "_2-TI7",
        newDataControl: "_1yv0e",
        title: "_1mEVH",
        icon: "tC4-3",
        button: "_1SqFv",
        buttonText: "_1quki",
        popupFooter: "_3DhS4",
        isFlipped: "_3lTcr",
        settings: "_35HVC",
        text: "MzVoW",
        bold: "_1rfbp",
        link: "_10Xs5",
        secondary: "_1etxB",
        firstTime: "_13pER",
        close: "_3wtAE",
        grammarlyIcon: "qSSkS",
        disable: "_36hcm",
        gdocs: "_1n5ib",
        gdocsBeta: "_2yinY",
        header: "_3tDci",
        headerUnavailable: "YZ2rP",
        cardsIcon: "moxcA",
        bubbleArrow: "_DY5Y",
        unavailablePopup: "jb6Nf",
        feedbackPopup: "_1oDAw",
        subHeader: "_3EOfE",
        feedbackSentViewHeader: "_1aboZ",
        feedbackField: "_3qJbU",
        scoreList: "_2AdqP",
        scoreListCell: "_1CgDl",
        score: "_2vzSZ",
        scoreBad: "DJccr",
        scoreGood: "_1G724",
        scoreOk: "_21AAx",
        active: "_2Fipp",
        disabled: "_CpPA",
        loginReminder: "_3OCCi",
        premium: "_1HTY_",
        subtitle: "_2AKj1",
        list: "_2W9px",
        listItem: "ewED8",
        onboarding: "_5Ep0Z",
        managedSSOControl: "_25QBP",
        illustration: "_2gnb-",
        signInWithSSO: "_24806",
        signInWithSSO2: "_3LOHu"
    }
}, function(t, e, n) {
    "use strict";
    var r = Array.isArray;
    e.a = r
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return s
    }));
    var r = n(42),
        i = n(174),
        o = n(94),
        a = n(138),
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
                        c = this._subscriptions;
                    if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, n instanceof t) n.remove(this);
                    else if (null !== n)
                        for (var l = 0; l < n.length; ++l) n[l].remove(this);
                    if (Object(o.a)(s)) try {
                        s.call(this)
                    } catch (t) {
                        e = t instanceof a.a ? u(t.errors) : [t]
                    }
                    if (Object(r.a)(c)) {
                        l = -1;
                        for (var f = c.length; ++l < f;) {
                            var d = c[l];
                            if (Object(i.a)(d)) try {
                                d.unsubscribe()
                            } catch (t) {
                                e = e || [], t instanceof a.a ? e = e.concat(u(t.errors)) : e.push(t)
                            }
                        }
                    }
                    if (e) throw new a.a(e)
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
                var i = n._parentOrParents;
                if (null === i) n._parentOrParents = this;
                else if (i instanceof t) {
                    if (i === this) return n;
                    n._parentOrParents = [i, this]
                } else {
                    if (-1 !== i.indexOf(this)) return n;
                    i.push(this)
                }
                var o = this._subscriptions;
                return null === o ? this._subscriptions = [n] : o.push(n), n
            }, t.prototype.remove = function(t) {
                var e = this._subscriptions;
                if (e) {
                    var n = e.indexOf(t); - 1 !== n && e.splice(n, 1)
                }
            }, t.EMPTY = ((e = new t).closed = !0, e), t
        }();

    function u(t) {
        return t.reduce((function(t, e) {
            return t.concat(e instanceof a.a ? e.errors : e)
        }), [])
    }
}, , function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(14);
    n.d(e, "Observable", (function() {
        return r.a
    }));
    var i = n(284);
    n.d(e, "ConnectableObservable", (function() {
        return i.a
    }));
    var o = n(282);
    n.d(e, "GroupedObservable", (function() {
        return o.a
    }));
    var a = n(97);
    n.d(e, "observable", (function() {
        return a.a
    }));
    var s = n(33);
    n.d(e, "Subject", (function() {
        return s.a
    }));
    var u = n(237);
    n.d(e, "BehaviorSubject", (function() {
        return u.a
    }));
    var c = n(219);
    n.d(e, "ReplaySubject", (function() {
        return c.a
    }));
    var l = n(135);
    n.d(e, "AsyncSubject", (function() {
        return l.a
    }));
    var f = n(179);
    n.d(e, "asapScheduler", (function() {
        return f.a
    }));
    var d = n(44);
    n.d(e, "asyncScheduler", (function() {
        return d.a
    }));
    var p = n(290);
    n.d(e, "queueScheduler", (function() {
        return p.a
    }));
    var h = n(409);
    n.d(e, "animationFrameScheduler", (function() {
        return h.a
    }));
    var b = n(328);
    n.d(e, "VirtualTimeScheduler", (function() {
        return b.b
    })), n.d(e, "VirtualAction", (function() {
        return b.a
    }));
    var m = n(253);
    n.d(e, "Scheduler", (function() {
        return m.a
    }));
    var g = n(28);
    n.d(e, "Subscription", (function() {
        return g.a
    }));
    var v = n(11);
    n.d(e, "Subscriber", (function() {
        return v.a
    }));
    var y = n(95);
    n.d(e, "Notification", (function() {
        return y.a
    })), n.d(e, "NotificationKind", (function() {
        return y.b
    }));
    var _ = n(160);
    n.d(e, "pipe", (function() {
        return _.a
    }));
    var w = n(75);
    n.d(e, "noop", (function() {
        return w.a
    }));
    var E = n(101);
    n.d(e, "identity", (function() {
        return E.a
    }));
    var O = n(381);
    n.d(e, "isObservable", (function() {
        return O.a
    }));
    var x = n(123);
    n.d(e, "ArgumentOutOfRangeError", (function() {
        return x.a
    }));
    var S = n(131);
    n.d(e, "EmptyError", (function() {
        return S.a
    }));
    var T = n(110);
    n.d(e, "ObjectUnsubscribedError", (function() {
        return T.a
    }));
    var k = n(138);
    n.d(e, "UnsubscriptionError", (function() {
        return k.a
    }));
    var C = n(285);
    n.d(e, "TimeoutError", (function() {
        return C.a
    }));
    var N = n(382);
    n.d(e, "bindCallback", (function() {
        return N.a
    }));
    var j = n(383);
    n.d(e, "bindNodeCallback", (function() {
        return j.a
    }));
    var I = n(151);
    n.d(e, "combineLatest", (function() {
        return I.b
    }));
    var A = n(129);
    n.d(e, "concat", (function() {
        return A.a
    }));
    var P = n(184);
    n.d(e, "defer", (function() {
        return P.a
    }));
    var M = n(48);
    n.d(e, "empty", (function() {
        return M.b
    }));
    var D = n(384);
    n.d(e, "forkJoin", (function() {
        return D.a
    }));
    var R = n(62);
    n.d(e, "from", (function() {
        return R.a
    }));
    var F = n(93);
    n.d(e, "fromEvent", (function() {
        return F.a
    }));
    var L = n(385);
    n.d(e, "fromEventPattern", (function() {
        return L.a
    }));
    var U = n(386);
    n.d(e, "generate", (function() {
        return U.a
    }));
    var z = n(387);
    n.d(e, "iif", (function() {
        return z.a
    }));
    var V = n(343);
    n.d(e, "interval", (function() {
        return V.a
    }));
    var B = n(148);
    n.d(e, "merge", (function() {
        return B.a
    }));
    var W = n(283);
    n.d(e, "never", (function() {
        return W.b
    }));
    var G = n(118);
    n.d(e, "of", (function() {
        return G.a
    }));
    var H = n(388);
    n.d(e, "onErrorResumeNext", (function() {
        return H.a
    }));
    var $ = n(389);
    n.d(e, "pairs", (function() {
        return $.a
    }));
    var q = n(390);
    n.d(e, "partition", (function() {
        return q.a
    }));
    var Y = n(287);
    n.d(e, "race", (function() {
        return Y.a
    }));
    var K = n(391);
    n.d(e, "range", (function() {
        return K.a
    }));
    var Q = n(220);
    n.d(e, "throwError", (function() {
        return Q.a
    }));
    var J = n(238);
    n.d(e, "timer", (function() {
        return J.a
    }));
    var X = n(357);
    n.d(e, "using", (function() {
        return X.a
    }));
    var Z = n(222);
    n.d(e, "zip", (function() {
        return Z.b
    }));
    var tt = n(289);
    n.d(e, "scheduled", (function() {
        return tt.a
    })), n.d(e, "EMPTY", (function() {
        return M.a
    })), n.d(e, "NEVER", (function() {
        return W.a
    }));
    var et = n(53);
    n.d(e, "config", (function() {
        return et.a
    }))
}, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e)
    }
}, , function(t, e, n) {
    "use strict";
    n.d(e, "b", (function() {
        return l
    })), n.d(e, "a", (function() {
        return f
    }));
    var r = n(2),
        i = n(14),
        o = n(11),
        a = n(28),
        s = n(110),
        u = n(293),
        c = n(137),
        l = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.destination = e, n
            }
            return r.a(e, t), e
        }(o.a),
        f = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.observers = [], e.closed = !1, e.isStopped = !1, e.hasError = !1, e.thrownError = null, e
            }
            return r.a(e, t), e.prototype[c.a] = function() {
                return new l(this)
            }, e.prototype.lift = function(t) {
                var e = new d(this, this);
                return e.operator = t, e
            }, e.prototype.next = function(t) {
                if (this.closed) throw new s.a;
                if (!this.isStopped)
                    for (var e = this.observers, n = e.length, r = e.slice(), i = 0; i < n; i++) r[i].next(t)
            }, e.prototype.error = function(t) {
                if (this.closed) throw new s.a;
                this.hasError = !0, this.thrownError = t, this.isStopped = !0;
                for (var e = this.observers, n = e.length, r = e.slice(), i = 0; i < n; i++) r[i].error(t);
                this.observers.length = 0
            }, e.prototype.complete = function() {
                if (this.closed) throw new s.a;
                this.isStopped = !0;
                for (var t = this.observers, e = t.length, n = t.slice(), r = 0; r < e; r++) n[r].complete();
                this.observers.length = 0
            }, e.prototype.unsubscribe = function() {
                this.isStopped = !0, this.closed = !0, this.observers = null
            }, e.prototype._trySubscribe = function(e) {
                if (this.closed) throw new s.a;
                return t.prototype._trySubscribe.call(this, e)
            }, e.prototype._subscribe = function(t) {
                if (this.closed) throw new s.a;
                return this.hasError ? (t.error(this.thrownError), a.a.EMPTY) : this.isStopped ? (t.complete(), a.a.EMPTY) : (this.observers.push(t), new u.a(this, t))
            }, e.prototype.asObservable = function() {
                var t = new i.a;
                return t.source = this, t
            }, e.create = function(t, e) {
                return new d(t, e)
            }, e
        }(i.a),
        d = function(t) {
            function e(e, n) {
                var r = t.call(this) || this;
                return r.destination = e, r.source = n, r
            }
            return r.a(e, t), e.prototype.next = function(t) {
                var e = this.destination;
                e && e.next && e.next(t)
            }, e.prototype.error = function(t) {
                var e = this.destination;
                e && e.error && this.destination.error(t)
            }, e.prototype.complete = function() {
                var t = this.destination;
                t && t.complete && this.destination.complete()
            }, e.prototype._subscribe = function(t) {
                return this.source ? this.source.subscribe(t) : a.a.EMPTY
            }, e
        }(f)
}, , , function(t, e, n) {
    "use strict";
    var r = n(168),
        i = "object" == typeof self && self && self.Object === Object && self,
        o = r.a || i || Function("return this")();
    e.a = o
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return o
    }));
    var r = n(2),
        i = n(11);

    function o(t, e) {
        return function(n) {
            if ("function" != typeof t) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
            return n.lift(new a(t, e))
        }
    }
    var a = function() {
            function t(t, e) {
                this.project = t, this.thisArg = e
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new s(t, this.project, this.thisArg))
            }, t
        }(),
        s = function(t) {
            function e(e, n, r) {
                var i = t.call(this, e) || this;
                return i.project = n, i.count = 0, i.thisArg = r || i, i
            }
            return r.a(e, t), e.prototype._next = function(t) {
                var e;
                try {
                    e = this.project.call(this.thisArg, t, this.count++)
                } catch (t) {
                    return void this.destination.error(t)
                }
                this.destination.next(e)
            }, e
        }(i.a)
}, function(t, e, n) {
    "use strict";
    n.d(e, "b", (function() {
        return i
    })), n.d(e, "a", (function() {
        return s
    })), n.d(e, "q", (function() {
        return c
    })), n.d(e, "m", (function() {
        return d
    })), n.d(e, "l", (function() {
        return p
    })), n.d(e, "e", (function() {
        return h
    })), n.d(e, "g", (function() {
        return b
    })), n.d(e, "f", (function() {
        return m
    })), n.d(e, "h", (function() {
        return g
    })), n.d(e, "k", (function() {
        return y
    })), n.d(e, "n", (function() {
        return _
    })), n.d(e, "j", (function() {
        return w
    })), n.d(e, "p", (function() {
        return E
    })), n.d(e, "d", (function() {
        return O
    })), n.d(e, "c", (function() {
        return x
    })), n.d(e, "o", (function() {
        return S
    })), n.d(e, "i", (function() {
        return T
    }));
    var r = n(10);

    function i(t, e) {
        return {
            key: t,
            value: e
        }
    }

    function o(t, e) {
        return i(t, e)
    }

    function a(t) {
        return t.map(t => [t.key, t.value].map(encodeURIComponent).join("=")).join("&")
    }

    function s(t, e) {
        if (0 === e.length) return t;
        const n = t.includes("?");
        return [t, a(e)].join(n ? "&" : "?")
    }

    function u(t) {
        const e = [];
        return void 0 !== t.medium && e.push(o("utm_medium", t.medium)), void 0 !== t.source && e.push(o("utm_source", t.source)), void 0 !== t.campaign && e.push(o("utm_campaign", t.campaign)), e
    }

    function c(t) {
        return u(t)
    }

    function l(t) {
        return u({
            medium: "internal",
            source: t
        })
    }
    const f = i("fromExtension", "" + !0);

    function d(t, e) {
        return s(Object(r.f)().signup, [...c({
            medium: "internal",
            source: t,
            campaign: e
        }), f])
    }

    function p() {
        return s(Object(r.f)().signin, [...l("signinHook"), f])
    }

    function h() {
        return s(Object(r.f)().fbSignin, l("signinHook"))
    }

    function b() {
        return s(Object(r.f)().googleSignin, l("signinHook"))
    }

    function m(t) {
        return s(Object(r.f)().fbSignup, l(t))
    }

    function g(t) {
        return s(Object(r.f)().googleSignup, l(t))
    }
    const v = u({
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

    function E(t, e) {
        return s(Object(r.f)().upgrade, c({
            medium: "internal",
            source: t,
            campaign: e
        }))
    }

    function O(t) {
        return s(Object(r.f)().welcomeC, u({
            medium: t ? "navigation" : "store",
            source: Object(r.b)()
        }))
    }

    function x(t) {
        return s(Object(r.f)().afterInstall + "/", [i("extension_install", "" + !0), ...u({
            medium: t ? "navigation" : "store",
            source: t ? void 0 : Object(r.b)()
        })])
    }

    function S(t) {
        return s(Object(r.f)().uninstall, [...void 0 === t ? [] : [i("domain", t)], ...u({
            medium: "internal",
            campaign: "extensionUninstall"
        })])
    }

    function T(t) {
        return s(Object(r.f)().plansEnterprise, [i("app_type", "extension"), i("browser", Object(r.b)()), ...c({
            medium: "internal",
            source: "upHook",
            campaign: t
        })])
    }
}, , function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(265),
        i = n(393),
        o = n(344),
        a = n(2),
        s = n(11);

    function u(t, e) {
        return void 0 === e && (e = null),
            function(n) {
                return n.lift(new c(t, e))
            }
    }
    var c = function() {
            function t(t, e) {
                this.bufferSize = t, this.startBufferEvery = e, this.subscriberClass = e && t !== e ? f : l
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new this.subscriberClass(t, this.bufferSize, this.startBufferEvery))
            }, t
        }(),
        l = function(t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                return r.bufferSize = n, r.buffer = [], r
            }
            return a.a(e, t), e.prototype._next = function(t) {
                var e = this.buffer;
                e.push(t), e.length == this.bufferSize && (this.destination.next(e), this.buffer = [])
            }, e.prototype._complete = function() {
                var e = this.buffer;
                e.length > 0 && this.destination.next(e), t.prototype._complete.call(this)
            }, e
        }(s.a),
        f = function(t) {
            function e(e, n, r) {
                var i = t.call(this, e) || this;
                return i.bufferSize = n, i.startBufferEvery = r, i.buffers = [], i.count = 0, i
            }
            return a.a(e, t), e.prototype._next = function(t) {
                var e = this.bufferSize,
                    n = this.startBufferEvery,
                    r = this.buffers,
                    i = this.count;
                this.count++, i % n == 0 && r.push([]);
                for (var o = r.length; o--;) {
                    var a = r[o];
                    a.push(t), a.length === e && (r.splice(o, 1), this.destination.next(a))
                }
            }, e.prototype._complete = function() {
                for (var e = this.buffers, n = this.destination; e.length > 0;) {
                    var r = e.shift();
                    r.length > 0 && n.next(r)
                }
                t.prototype._complete.call(this)
            }, e
        }(s.a),
        d = n(345),
        p = n(28),
        h = n(18),
        b = n(20);

    function m(t, e) {
        return function(n) {
            return n.lift(new g(t, e))
        }
    }
    var g = function() {
            function t(t, e) {
                this.openings = t, this.closingSelector = e
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new v(t, this.openings, this.closingSelector))
            }, t
        }(),
        v = function(t) {
            function e(e, n, r) {
                var i = t.call(this, e) || this;
                return i.openings = n, i.closingSelector = r, i.contexts = [], i.add(Object(h.a)(i, n)), i
            }
            return a.a(e, t), e.prototype._next = function(t) {
                for (var e = this.contexts, n = e.length, r = 0; r < n; r++) e[r].buffer.push(t)
            }, e.prototype._error = function(e) {
                for (var n = this.contexts; n.length > 0;) {
                    var r = n.shift();
                    r.subscription.unsubscribe(), r.buffer = null, r.subscription = null
                }
                this.contexts = null, t.prototype._error.call(this, e)
            }, e.prototype._complete = function() {
                for (var e = this.contexts; e.length > 0;) {
                    var n = e.shift();
                    this.destination.next(n.buffer), n.subscription.unsubscribe(), n.buffer = null, n.subscription = null
                }
                this.contexts = null, t.prototype._complete.call(this)
            }, e.prototype.notifyNext = function(t, e, n, r, i) {
                t ? this.closeBuffer(t) : this.openBuffer(e)
            }, e.prototype.notifyComplete = function(t) {
                this.closeBuffer(t.context)
            }, e.prototype.openBuffer = function(t) {
                try {
                    var e = this.closingSelector.call(this, t);
                    e && this.trySubscribe(e)
                } catch (t) {
                    this._error(t)
                }
            }, e.prototype.closeBuffer = function(t) {
                var e = this.contexts;
                if (e && t) {
                    var n = t.buffer,
                        r = t.subscription;
                    this.destination.next(n), e.splice(e.indexOf(t), 1), this.remove(r), r.unsubscribe()
                }
            }, e.prototype.trySubscribe = function(t) {
                var e = this.contexts,
                    n = new p.a,
                    r = {
                        buffer: [],
                        subscription: n
                    };
                e.push(r);
                var i = Object(h.a)(this, t, r);
                !i || i.closed ? this.closeBuffer(r) : (i.context = r, this.add(i), n.add(i))
            }, e
        }(b.a);

    function y(t) {
        return function(e) {
            return e.lift(new _(t))
        }
    }
    var _ = function() {
            function t(t) {
                this.closingSelector = t
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new w(t, this.closingSelector))
            }, t
        }(),
        w = function(t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                return r.closingSelector = n, r.subscribing = !1, r.openBuffer(), r
            }
            return a.a(e, t), e.prototype._next = function(t) {
                this.buffer.push(t)
            }, e.prototype._complete = function() {
                var e = this.buffer;
                e && this.destination.next(e), t.prototype._complete.call(this)
            }, e.prototype._unsubscribe = function() {
                this.buffer = null, this.subscribing = !1
            }, e.prototype.notifyNext = function(t, e, n, r, i) {
                this.openBuffer()
            }, e.prototype.notifyComplete = function() {
                this.subscribing ? this.complete() : this.openBuffer()
            }, e.prototype.openBuffer = function() {
                var t = this.closingSubscription;
                t && (this.remove(t), t.unsubscribe());
                var e, n = this.buffer;
                this.buffer && this.destination.next(n), this.buffer = [];
                try {
                    e = (0, this.closingSelector)()
                } catch (t) {
                    return this.error(t)
                }
                t = new p.a, this.closingSubscription = t, this.add(t), this.subscribing = !0, t.add(Object(h.a)(this, e)), this.subscribing = !1
            }, e
        }(b.a),
        E = n(394),
        O = n(151);

    function x(t) {
        return function(e) {
            return e.lift(new O.a(t))
        }
    }
    var S = n(331),
        T = n(395),
        k = n(286),
        C = n(266);

    function N(t, e) {
        return Object(C.a)((function() {
            return t
        }), e)
    }

    function j(t) {
        return function(e) {
            return e.lift(new I(t, e))
        }
    }
    var I = function() {
            function t(t, e) {
                this.predicate = t, this.source = e
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new A(t, this.predicate, this.source))
            }, t
        }(),
        A = function(t) {
            function e(e, n, r) {
                var i = t.call(this, e) || this;
                return i.predicate = n, i.source = r, i.count = 0, i.index = 0, i
            }
            return a.a(e, t), e.prototype._next = function(t) {
                this.predicate ? this._tryPredicate(t) : this.count++
            }, e.prototype._tryPredicate = function(t) {
                var e;
                try {
                    e = this.predicate(t, this.index++, this.source)
                } catch (t) {
                    return void this.destination.error(t)
                }
                e && this.count++
            }, e.prototype._complete = function() {
                this.destination.next(this.count), this.destination.complete()
            }, e
        }(s.a),
        P = n(358),
        M = n(396),
        D = n(132),
        R = n(332),
        F = n(14);

    function L(t, e) {
        return e ? function(n) {
            return new V(n, e).lift(new U(t))
        } : function(e) {
            return e.lift(new U(t))
        }
    }
    var U = function() {
            function t(t) {
                this.delayDurationSelector = t
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new z(t, this.delayDurationSelector))
            }, t
        }(),
        z = function(t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                return r.delayDurationSelector = n, r.completed = !1, r.delayNotifierSubscriptions = [], r.index = 0, r
            }
            return a.a(e, t), e.prototype.notifyNext = function(t, e, n, r, i) {
                this.destination.next(t), this.removeSubscription(i), this.tryComplete()
            }, e.prototype.notifyError = function(t, e) {
                this._error(t)
            }, e.prototype.notifyComplete = function(t) {
                var e = this.removeSubscription(t);
                e && this.destination.next(e), this.tryComplete()
            }, e.prototype._next = function(t) {
                var e = this.index++;
                try {
                    var n = this.delayDurationSelector(t, e);
                    n && this.tryDelay(n, t)
                } catch (t) {
                    this.destination.error(t)
                }
            }, e.prototype._complete = function() {
                this.completed = !0, this.tryComplete(), this.unsubscribe()
            }, e.prototype.removeSubscription = function(t) {
                t.unsubscribe();
                var e = this.delayNotifierSubscriptions.indexOf(t);
                return -1 !== e && this.delayNotifierSubscriptions.splice(e, 1), t.outerValue
            }, e.prototype.tryDelay = function(t, e) {
                var n = Object(h.a)(this, t, e);
                n && !n.closed && (this.destination.add(n), this.delayNotifierSubscriptions.push(n))
            }, e.prototype.tryComplete = function() {
                this.completed && 0 === this.delayNotifierSubscriptions.length && this.destination.complete()
            }, e
        }(b.a),
        V = function(t) {
            function e(e, n) {
                var r = t.call(this) || this;
                return r.source = e, r.subscriptionDelay = n, r
            }
            return a.a(e, t), e.prototype._subscribe = function(t) {
                this.subscriptionDelay.subscribe(new B(t, this.source))
            }, e
        }(F.a),
        B = function(t) {
            function e(e, n) {
                var r = t.call(this) || this;
                return r.parent = e, r.source = n, r.sourceSubscribed = !1, r
            }
            return a.a(e, t), e.prototype._next = function(t) {
                this.subscribeToSource()
            }, e.prototype._error = function(t) {
                this.unsubscribe(), this.parent.error(t)
            }, e.prototype._complete = function() {
                this.unsubscribe(), this.subscribeToSource()
            }, e.prototype.subscribeToSource = function() {
                this.sourceSubscribed || (this.sourceSubscribed = !0, this.unsubscribe(), this.source.subscribe(this.parent))
            }, e
        }(s.a);

    function W() {
        return function(t) {
            return t.lift(new G)
        }
    }
    var G = function() {
            function t() {}
            return t.prototype.call = function(t, e) {
                return e.subscribe(new H(t))
            }, t
        }(),
        H = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return a.a(e, t), e.prototype._next = function(t) {
                t.observe(this.destination)
            }, e
        }(s.a);

    function $(t, e) {
        return function(n) {
            return n.lift(new q(t, e))
        }
    }
    var q = function() {
            function t(t, e) {
                this.keySelector = t, this.flushes = e
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new Y(t, this.keySelector, this.flushes))
            }, t
        }(),
        Y = function(t) {
            function e(e, n, r) {
                var i = t.call(this, e) || this;
                return i.keySelector = n, i.values = new Set, r && i.add(Object(h.a)(i, r)), i
            }
            return a.a(e, t), e.prototype.notifyNext = function(t, e, n, r, i) {
                this.values.clear()
            }, e.prototype.notifyError = function(t, e) {
                this._error(t)
            }, e.prototype._next = function(t) {
                this.keySelector ? this._useKeySelector(t) : this._finalizeNext(t, t)
            }, e.prototype._useKeySelector = function(t) {
                var e, n = this.destination;
                try {
                    e = this.keySelector(t)
                } catch (t) {
                    return void n.error(t)
                }
                this._finalizeNext(e, t)
            }, e.prototype._finalizeNext = function(t, e) {
                var n = this.values;
                n.has(t) || (n.add(t), this.destination.next(e))
            }, e
        }(b.a),
        K = n(130);

    function Q(t, e) {
        return Object(K.a)((function(n, r) {
            return e ? e(n[t], r[t]) : n[t] === r[t]
        }))
    }
    var J = n(123),
        X = n(78),
        Z = n(165),
        tt = n(166);

    function et(t, e) {
        if (t < 0) throw new J.a;
        var n = arguments.length >= 2;
        return function(r) {
            return r.pipe(Object(X.a)((function(e, n) {
                return n === t
            })), Object(tt.a)(1), n ? Object(D.a)(e) : Object(Z.a)((function() {
                return new J.a
            })))
        }
    }
    var nt = n(129),
        rt = n(118);

    function it() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return function(e) {
            return Object(nt.a)(e, rt.a.apply(void 0, t))
        }
    }

    function ot(t, e) {
        return function(n) {
            return n.lift(new at(t, e, n))
        }
    }
    var at = function() {
            function t(t, e, n) {
                this.predicate = t, this.thisArg = e, this.source = n
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new st(t, this.predicate, this.thisArg, this.source))
            }, t
        }(),
        st = function(t) {
            function e(e, n, r, i) {
                var o = t.call(this, e) || this;
                return o.predicate = n, o.thisArg = r, o.source = i, o.index = 0, o.thisArg = r || o, o
            }
            return a.a(e, t), e.prototype.notifyComplete = function(t) {
                this.destination.next(t), this.destination.complete()
            }, e.prototype._next = function(t) {
                var e = !1;
                try {
                    e = this.predicate.call(this.thisArg, t, this.index++, this.source)
                } catch (t) {
                    return void this.destination.error(t)
                }
                e || this.notifyComplete(!1)
            }, e.prototype._complete = function() {
                this.notifyComplete(!0)
            }, e
        }(s.a);

    function ut() {
        return function(t) {
            return t.lift(new ct)
        }
    }
    var ct = function() {
            function t() {}
            return t.prototype.call = function(t, e) {
                return e.subscribe(new lt(t))
            }, t
        }(),
        lt = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.hasCompleted = !1, n.hasSubscription = !1, n
            }
            return a.a(e, t), e.prototype._next = function(t) {
                this.hasSubscription || (this.hasSubscription = !0, this.add(Object(h.a)(this, t)))
            }, e.prototype._complete = function() {
                this.hasCompleted = !0, this.hasSubscription || this.destination.complete()
            }, e.prototype.notifyComplete = function(t) {
                this.remove(t), this.hasSubscription = !1, this.hasCompleted && this.destination.complete()
            }, e
        }(b.a),
        ft = n(81),
        dt = n(37),
        pt = n(62);

    function ht(t, e) {
        return e ? function(n) {
            return n.pipe(ht((function(n, r) {
                return Object(pt.a)(t(n, r)).pipe(Object(dt.a)((function(t, i) {
                    return e(n, t, r, i)
                })))
            })))
        } : function(e) {
            return e.lift(new bt(t))
        }
    }
    var bt = function() {
            function t(t) {
                this.project = t
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new mt(t, this.project))
            }, t
        }(),
        mt = function(t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                return r.project = n, r.hasSubscription = !1, r.hasCompleted = !1, r.index = 0, r
            }
            return a.a(e, t), e.prototype._next = function(t) {
                this.hasSubscription || this.tryNext(t)
            }, e.prototype.tryNext = function(t) {
                var e, n = this.index++;
                try {
                    e = this.project(t, n)
                } catch (t) {
                    return void this.destination.error(t)
                }
                this.hasSubscription = !0, this._innerSub(e, t, n)
            }, e.prototype._innerSub = function(t, e, n) {
                var r = new ft.a(this, void 0, void 0);
                this.destination.add(r), Object(h.a)(this, t, e, n, r)
            }, e.prototype._complete = function() {
                this.hasCompleted = !0, this.hasSubscription || this.destination.complete(), this.unsubscribe()
            }, e.prototype.notifyNext = function(t, e, n, r, i) {
                this.destination.next(e)
            }, e.prototype.notifyError = function(t) {
                this.destination.error(t)
            }, e.prototype.notifyComplete = function(t) {
                this.destination.remove(t), this.hasSubscription = !1, this.hasCompleted && this.destination.complete()
            }, e
        }(b.a);

    function gt(t, e, n) {
        return void 0 === e && (e = Number.POSITIVE_INFINITY), void 0 === n && (n = void 0), e = (e || 0) < 1 ? Number.POSITIVE_INFINITY : e,
            function(r) {
                return r.lift(new vt(t, e, n))
            }
    }
    var vt = function() {
            function t(t, e, n) {
                this.project = t, this.concurrent = e, this.scheduler = n
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new yt(t, this.project, this.concurrent, this.scheduler))
            }, t
        }(),
        yt = function(t) {
            function e(e, n, r, i) {
                var o = t.call(this, e) || this;
                return o.project = n, o.concurrent = r, o.scheduler = i, o.index = 0, o.active = 0, o.hasCompleted = !1, r < Number.POSITIVE_INFINITY && (o.buffer = []), o
            }
            return a.a(e, t), e.dispatch = function(t) {
                var e = t.subscriber,
                    n = t.result,
                    r = t.value,
                    i = t.index;
                e.subscribeToProjection(n, r, i)
            }, e.prototype._next = function(t) {
                var n = this.destination;
                if (n.closed) this._complete();
                else {
                    var r = this.index++;
                    if (this.active < this.concurrent) {
                        n.next(t);
                        try {
                            var i = (0, this.project)(t, r);
                            if (this.scheduler) {
                                var o = {
                                    subscriber: this,
                                    result: i,
                                    value: t,
                                    index: r
                                };
                                this.destination.add(this.scheduler.schedule(e.dispatch, 0, o))
                            } else this.subscribeToProjection(i, t, r)
                        } catch (t) {
                            n.error(t)
                        }
                    } else this.buffer.push(t)
                }
            }, e.prototype.subscribeToProjection = function(t, e, n) {
                this.active++, this.destination.add(Object(h.a)(this, t, e, n))
            }, e.prototype._complete = function() {
                this.hasCompleted = !0, this.hasCompleted && 0 === this.active && this.destination.complete(), this.unsubscribe()
            }, e.prototype.notifyNext = function(t, e, n, r, i) {
                this._next(e)
            }, e.prototype.notifyComplete = function(t) {
                var e = this.buffer;
                this.destination.remove(t), this.active--, e && e.length > 0 && this._next(e.shift()), this.hasCompleted && 0 === this.active && this.destination.complete()
            }, e
        }(b.a),
        _t = n(397);

    function wt(t, e) {
        if ("function" != typeof t) throw new TypeError("predicate is not a function");
        return function(n) {
            return n.lift(new Et(t, n, !1, e))
        }
    }
    var Et = function() {
            function t(t, e, n, r) {
                this.predicate = t, this.source = e, this.yieldIndex = n, this.thisArg = r
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new Ot(t, this.predicate, this.source, this.yieldIndex, this.thisArg))
            }, t
        }(),
        Ot = function(t) {
            function e(e, n, r, i, o) {
                var a = t.call(this, e) || this;
                return a.predicate = n, a.source = r, a.yieldIndex = i, a.thisArg = o, a.index = 0, a
            }
            return a.a(e, t), e.prototype.notifyComplete = function(t) {
                var e = this.destination;
                e.next(t), e.complete(), this.unsubscribe()
            }, e.prototype._next = function(t) {
                var e = this.predicate,
                    n = this.thisArg,
                    r = this.index++;
                try {
                    e.call(n || this, t, r, this.source) && this.notifyComplete(this.yieldIndex ? r : t)
                } catch (t) {
                    this.destination.error(t)
                }
            }, e.prototype._complete = function() {
                this.notifyComplete(this.yieldIndex ? -1 : void 0)
            }, e
        }(s.a);

    function xt(t, e) {
        return function(n) {
            return n.lift(new Et(t, n, !0, e))
        }
    }
    var St = n(333),
        Tt = n(282);

    function kt() {
        return function(t) {
            return t.lift(new Ct)
        }
    }
    var Ct = function() {
            function t() {}
            return t.prototype.call = function(t, e) {
                return e.subscribe(new Nt(t))
            }, t
        }(),
        Nt = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return a.a(e, t), e.prototype._next = function(t) {}, e
        }(s.a);

    function jt() {
        return function(t) {
            return t.lift(new It)
        }
    }
    var It = function() {
            function t() {}
            return t.prototype.call = function(t, e) {
                return e.subscribe(new At(t))
            }, t
        }(),
        At = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return a.a(e, t), e.prototype.notifyComplete = function(t) {
                var e = this.destination;
                e.next(t), e.complete()
            }, e.prototype._next = function(t) {
                this.notifyComplete(!1)
            }, e.prototype._complete = function() {
                this.notifyComplete(!0)
            }, e
        }(s.a),
        Pt = n(131),
        Mt = n(48);

    function Dt(t) {
        return function(e) {
            return 0 === t ? Object(Mt.b)() : e.lift(new Rt(t))
        }
    }
    var Rt = function() {
            function t(t) {
                if (this.total = t, this.total < 0) throw new J.a
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new Ft(t, this.total))
            }, t
        }(),
        Ft = function(t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                return r.total = n, r.ring = new Array, r.count = 0, r
            }
            return a.a(e, t), e.prototype._next = function(t) {
                var e = this.ring,
                    n = this.total,
                    r = this.count++;
                e.length < n ? e.push(t) : e[r % n] = t
            }, e.prototype._complete = function() {
                var t = this.destination,
                    e = this.count;
                if (e > 0)
                    for (var n = this.count >= this.total ? this.total : this.count, r = this.ring, i = 0; i < n; i++) {
                        var o = e++ % n;
                        t.next(r[o])
                    }
                t.complete()
            }, e
        }(s.a),
        Lt = n(101);

    function Ut(t, e) {
        var n = arguments.length >= 2;
        return function(r) {
            return r.pipe(t ? Object(X.a)((function(e, n) {
                return t(e, n, r)
            })) : Lt.a, Dt(1), n ? Object(D.a)(e) : Object(Z.a)((function() {
                return new Pt.a
            })))
        }
    }
    var zt = n(215),
        Vt = n(95);

    function Bt() {
        return function(t) {
            return t.lift(new Wt)
        }
    }
    var Wt = function() {
            function t() {}
            return t.prototype.call = function(t, e) {
                return e.subscribe(new Gt(t))
            }, t
        }(),
        Gt = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return a.a(e, t), e.prototype._next = function(t) {
                this.destination.next(Vt.a.createNext(t))
            }, e.prototype._error = function(t) {
                var e = this.destination;
                e.next(Vt.a.createError(t)), e.complete()
            }, e.prototype._complete = function() {
                var t = this.destination;
                t.next(Vt.a.createComplete()), t.complete()
            }, e
        }(s.a),
        Ht = n(170),
        $t = n(160);

    function qt(t, e) {
        return arguments.length >= 2 ? function(n) {
            return Object($t.a)(Object(Ht.a)(t, e), Dt(1), Object(D.a)(e))(n)
        } : function(e) {
            return Object($t.a)(Object(Ht.a)((function(e, n, r) {
                return t(e, n, r + 1)
            })), Dt(1))(e)
        }
    }

    function Yt(t) {
        return qt("function" == typeof t ? function(e, n) {
            return t(e, n) > 0 ? e : n
        } : function(t, e) {
            return t > e ? t : e
        })
    }
    var Kt = n(359),
        Qt = n(221),
        Jt = n(122);

    function Xt(t, e, n) {
        return void 0 === n && (n = Number.POSITIVE_INFINITY), "function" == typeof e ? Object(Jt.a)((function() {
            return t
        }), e, n) : ("number" == typeof e && (n = e), Object(Jt.a)((function() {
            return t
        }), n))
    }

    function Zt(t, e, n) {
        return void 0 === n && (n = Number.POSITIVE_INFINITY),
            function(r) {
                return r.lift(new te(t, e, n))
            }
    }
    var te = function() {
            function t(t, e, n) {
                this.accumulator = t, this.seed = e, this.concurrent = n
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new ee(t, this.accumulator, this.seed, this.concurrent))
            }, t
        }(),
        ee = function(t) {
            function e(e, n, r, i) {
                var o = t.call(this, e) || this;
                return o.accumulator = n, o.acc = r, o.concurrent = i, o.hasValue = !1, o.hasCompleted = !1, o.buffer = [], o.active = 0, o.index = 0, o
            }
            return a.a(e, t), e.prototype._next = function(t) {
                if (this.active < this.concurrent) {
                    var e = this.index++,
                        n = this.destination,
                        r = void 0;
                    try {
                        r = (0, this.accumulator)(this.acc, t, e)
                    } catch (t) {
                        return n.error(t)
                    }
                    this.active++, this._innerSub(r, t, e)
                } else this.buffer.push(t)
            }, e.prototype._innerSub = function(t, e, n) {
                var r = new ft.a(this, void 0, void 0);
                this.destination.add(r), Object(h.a)(this, t, e, n, r)
            }, e.prototype._complete = function() {
                this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && (!1 === this.hasValue && this.destination.next(this.acc), this.destination.complete()), this.unsubscribe()
            }, e.prototype.notifyNext = function(t, e, n, r, i) {
                var o = this.destination;
                this.acc = e, this.hasValue = !0, o.next(e)
            }, e.prototype.notifyComplete = function(t) {
                var e = this.buffer;
                this.destination.remove(t), this.active--, e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && (!1 === this.hasValue && this.destination.next(this.acc), this.destination.complete())
            }, e
        }(b.a);

    function ne(t) {
        return qt("function" == typeof t ? function(e, n) {
            return t(e, n) < 0 ? e : n
        } : function(t, e) {
            return t < e ? t : e
        })
    }
    var re = n(92),
        ie = n(244),
        oe = n(42);

    function ae() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return 1 === t.length && Object(oe.a)(t[0]) && (t = t[0]),
            function(e) {
                return e.lift(new se(t))
            }
    }
    var se = function() {
            function t(t) {
                this.nextSources = t
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new ue(t, this.nextSources))
            }, t
        }(),
        ue = function(t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                return r.destination = e, r.nextSources = n, r
            }
            return a.a(e, t), e.prototype.notifyError = function(t, e) {
                this.subscribeToNextSource()
            }, e.prototype.notifyComplete = function(t) {
                this.subscribeToNextSource()
            }, e.prototype._error = function(t) {
                this.subscribeToNextSource(), this.unsubscribe()
            }, e.prototype._complete = function() {
                this.subscribeToNextSource(), this.unsubscribe()
            }, e.prototype.subscribeToNextSource = function() {
                var t = this.nextSources.shift();
                if (t) {
                    var e = new ft.a(this, void 0, void 0);
                    this.destination.add(e), Object(h.a)(this, t, void 0, void 0, e)
                } else this.destination.complete()
            }, e
        }(b.a),
        ce = n(398),
        le = n(297);

    function fe(t, e) {
        return function(n) {
            return [Object(X.a)(t, e)(n), Object(X.a)(Object(le.a)(t, e))(n)]
        }
    }

    function de() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = t.length;
        if (0 === n) throw new Error("list of properties cannot be empty.");
        return function(e) {
            return Object(dt.a)(function(t, e) {
                return function(n) {
                    for (var r = n, i = 0; i < e; i++) {
                        var o = r[t[i]];
                        if (void 0 === o) return;
                        r = o
                    }
                    return r
                }
            }(t, n))(e)
        }
    }
    var pe = n(33);

    function he(t) {
        return t ? Object(re.a)((function() {
            return new pe.a
        }), t) : Object(re.a)(new pe.a)
    }
    var be = n(237);

    function me(t) {
        return function(e) {
            return Object(re.a)(new be.a(t))(e)
        }
    }
    var ge = n(135);

    function ve() {
        return function(t) {
            return Object(re.a)(new ge.a)(t)
        }
    }
    var ye = n(219);

    function _e(t, e, n, r) {
        n && "function" != typeof n && (r = n);
        var i = "function" == typeof n ? n : void 0,
            o = new ye.a(t, e, r);
        return function(t) {
            return Object(re.a)((function() {
                return o
            }), i)(t)
        }
    }
    var we = n(287);

    function Ee() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return function(e) {
            return 1 === t.length && Object(oe.a)(t[0]) && (t = t[0]), e.lift.call(we.a.apply(void 0, [e].concat(t)))
        }
    }

    function Oe(t) {
        return void 0 === t && (t = -1),
            function(e) {
                return 0 === t ? Object(Mt.b)() : t < 0 ? e.lift(new xe(-1, e)) : e.lift(new xe(t - 1, e))
            }
    }
    var xe = function() {
            function t(t, e) {
                this.count = t, this.source = e
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new Se(t, this.count, this.source))
            }, t
        }(),
        Se = function(t) {
            function e(e, n, r) {
                var i = t.call(this, e) || this;
                return i.count = n, i.source = r, i
            }
            return a.a(e, t), e.prototype.complete = function() {
                if (!this.isStopped) {
                    var e = this.source,
                        n = this.count;
                    if (0 === n) return t.prototype.complete.call(this);
                    n > -1 && (this.count = n - 1), e.subscribe(this._unsubscribeAndRecycle())
                }
            }, e
        }(s.a);

    function Te(t) {
        return function(e) {
            return e.lift(new ke(t))
        }
    }
    var ke = function() {
            function t(t) {
                this.notifier = t
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new Ce(t, this.notifier, e))
            }, t
        }(),
        Ce = function(t) {
            function e(e, n, r) {
                var i = t.call(this, e) || this;
                return i.notifier = n, i.source = r, i.sourceIsBeingSubscribedTo = !0, i
            }
            return a.a(e, t), e.prototype.notifyNext = function(t, e, n, r, i) {
                this.sourceIsBeingSubscribedTo = !0, this.source.subscribe(this)
            }, e.prototype.notifyComplete = function(e) {
                if (!1 === this.sourceIsBeingSubscribedTo) return t.prototype.complete.call(this)
            }, e.prototype.complete = function() {
                if (this.sourceIsBeingSubscribedTo = !1, !this.isStopped) {
                    if (this.retries || this.subscribeToRetries(), !this.retriesSubscription || this.retriesSubscription.closed) return t.prototype.complete.call(this);
                    this._unsubscribeAndRecycle(), this.notifications.next()
                }
            }, e.prototype._unsubscribe = function() {
                var t = this.notifications,
                    e = this.retriesSubscription;
                t && (t.unsubscribe(), this.notifications = null), e && (e.unsubscribe(), this.retriesSubscription = null), this.retries = null
            }, e.prototype._unsubscribeAndRecycle = function() {
                var e = this._unsubscribe;
                return this._unsubscribe = null, t.prototype._unsubscribeAndRecycle.call(this), this._unsubscribe = e, this
            }, e.prototype.subscribeToRetries = function() {
                var e;
                this.notifications = new pe.a;
                try {
                    e = (0, this.notifier)(this.notifications)
                } catch (e) {
                    return t.prototype.complete.call(this)
                }
                this.retries = e, this.retriesSubscription = Object(h.a)(this, e)
            }, e
        }(b.a);

    function Ne(t) {
        return void 0 === t && (t = -1),
            function(e) {
                return e.lift(new je(t, e))
            }
    }
    var je = function() {
            function t(t, e) {
                this.count = t, this.source = e
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new Ie(t, this.count, this.source))
            }, t
        }(),
        Ie = function(t) {
            function e(e, n, r) {
                var i = t.call(this, e) || this;
                return i.count = n, i.source = r, i
            }
            return a.a(e, t), e.prototype.error = function(e) {
                if (!this.isStopped) {
                    var n = this.source,
                        r = this.count;
                    if (0 === r) return t.prototype.error.call(this, e);
                    r > -1 && (this.count = r - 1), n.subscribe(this._unsubscribeAndRecycle())
                }
            }, e
        }(s.a);

    function Ae(t) {
        return function(e) {
            return e.lift(new Pe(t, e))
        }
    }
    var Pe = function() {
            function t(t, e) {
                this.notifier = t, this.source = e
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new Me(t, this.notifier, this.source))
            }, t
        }(),
        Me = function(t) {
            function e(e, n, r) {
                var i = t.call(this, e) || this;
                return i.notifier = n, i.source = r, i
            }
            return a.a(e, t), e.prototype.error = function(e) {
                if (!this.isStopped) {
                    var n = this.errors,
                        r = this.retries,
                        i = this.retriesSubscription;
                    if (r) this.errors = null, this.retriesSubscription = null;
                    else {
                        n = new pe.a;
                        try {
                            r = (0, this.notifier)(n)
                        } catch (e) {
                            return t.prototype.error.call(this, e)
                        }
                        i = Object(h.a)(this, r)
                    }
                    this._unsubscribeAndRecycle(), this.errors = n, this.retries = r, this.retriesSubscription = i, n.next(e)
                }
            }, e.prototype._unsubscribe = function() {
                var t = this.errors,
                    e = this.retriesSubscription;
                t && (t.unsubscribe(), this.errors = null), e && (e.unsubscribe(), this.retriesSubscription = null), this.retries = null
            }, e.prototype.notifyNext = function(t, e, n, r, i) {
                var o = this._unsubscribe;
                this._unsubscribe = null, this._unsubscribeAndRecycle(), this._unsubscribe = o, this.source.subscribe(this)
            }, e
        }(b.a),
        De = n(183),
        Re = n(204),
        Fe = n(44);

    function Le(t, e) {
        return void 0 === e && (e = Fe.a),
            function(n) {
                return n.lift(new Ue(t, e))
            }
    }
    var Ue = function() {
            function t(t, e) {
                this.period = t, this.scheduler = e
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new ze(t, this.period, this.scheduler))
            }, t
        }(),
        ze = function(t) {
            function e(e, n, r) {
                var i = t.call(this, e) || this;
                return i.period = n, i.scheduler = r, i.hasValue = !1, i.add(r.schedule(Ve, n, {
                    subscriber: i,
                    period: n
                })), i
            }
            return a.a(e, t), e.prototype._next = function(t) {
                this.lastValue = t, this.hasValue = !0
            }, e.prototype.notifyNext = function() {
                this.hasValue && (this.hasValue = !1, this.destination.next(this.lastValue))
            }, e
        }(s.a);

    function Ve(t) {
        var e = t.subscriber,
            n = t.period;
        e.notifyNext(), this.schedule(t, n)
    }

    function Be(t, e) {
        return function(n) {
            return n.lift(new We(t, e))
        }
    }
    var We = function() {
            function t(t, e) {
                this.compareTo = t, this.comparator = e
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new Ge(t, this.compareTo, this.comparator))
            }, t
        }(),
        Ge = function(t) {
            function e(e, n, r) {
                var i = t.call(this, e) || this;
                return i.compareTo = n, i.comparator = r, i._a = [], i._b = [], i._oneComplete = !1, i.destination.add(n.subscribe(new He(e, i))), i
            }
            return a.a(e, t), e.prototype._next = function(t) {
                this._oneComplete && 0 === this._b.length ? this.emit(!1) : (this._a.push(t), this.checkValues())
            }, e.prototype._complete = function() {
                this._oneComplete ? this.emit(0 === this._a.length && 0 === this._b.length) : this._oneComplete = !0, this.unsubscribe()
            }, e.prototype.checkValues = function() {
                for (var t = this._a, e = this._b, n = this.comparator; t.length > 0 && e.length > 0;) {
                    var r = t.shift(),
                        i = e.shift(),
                        o = !1;
                    try {
                        o = n ? n(r, i) : r === i
                    } catch (t) {
                        this.destination.error(t)
                    }
                    o || this.emit(!1)
                }
            }, e.prototype.emit = function(t) {
                var e = this.destination;
                e.next(t), e.complete()
            }, e.prototype.nextB = function(t) {
                this._oneComplete && 0 === this._a.length ? this.emit(!1) : (this._b.push(t), this.checkValues())
            }, e.prototype.completeB = function() {
                this._oneComplete ? this.emit(0 === this._a.length && 0 === this._b.length) : this._oneComplete = !0
            }, e
        }(s.a),
        He = function(t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                return r.parent = n, r
            }
            return a.a(e, t), e.prototype._next = function(t) {
                this.parent.nextB(t)
            }, e.prototype._error = function(t) {
                this.parent.error(t), this.unsubscribe()
            }, e.prototype._complete = function() {
                this.parent.completeB(), this.unsubscribe()
            }, e
        }(s.a),
        $e = n(172),
        qe = n(399);

    function Ye(t) {
        return function(e) {
            return e.lift(new Ke(t, e))
        }
    }
    var Ke = function() {
            function t(t, e) {
                this.predicate = t, this.source = e
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new Qe(t, this.predicate, this.source))
            }, t
        }(),
        Qe = function(t) {
            function e(e, n, r) {
                var i = t.call(this, e) || this;
                return i.predicate = n, i.source = r, i.seenValue = !1, i.index = 0, i
            }
            return a.a(e, t), e.prototype.applySingleValue = function(t) {
                this.seenValue ? this.destination.error("Sequence contains more than one element") : (this.seenValue = !0, this.singleValue = t)
            }, e.prototype._next = function(t) {
                var e = this.index++;
                this.predicate ? this.tryNext(t, e) : this.applySingleValue(t)
            }, e.prototype.tryNext = function(t, e) {
                try {
                    this.predicate(t, e, this.source) && this.applySingleValue(t)
                } catch (t) {
                    this.destination.error(t)
                }
            }, e.prototype._complete = function() {
                var t = this.destination;
                this.index > 0 ? (t.next(this.seenValue ? this.singleValue : void 0), t.complete()) : t.error(new Pt.a)
            }, e
        }(s.a),
        Je = n(346);

    function Xe(t) {
        return function(e) {
            return e.lift(new Ze(t))
        }
    }
    var Ze = function() {
            function t(t) {
                if (this._skipCount = t, this._skipCount < 0) throw new J.a
            }
            return t.prototype.call = function(t, e) {
                return 0 === this._skipCount ? e.subscribe(new s.a(t)) : e.subscribe(new tn(t, this._skipCount))
            }, t
        }(),
        tn = function(t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                return r._skipCount = n, r._count = 0, r._ring = new Array(n), r
            }
            return a.a(e, t), e.prototype._next = function(t) {
                var e = this._skipCount,
                    n = this._count++;
                if (n < e) this._ring[n] = t;
                else {
                    var r = n % e,
                        i = this._ring,
                        o = i[r];
                    i[r] = t, this.destination.next(o)
                }
            }, e
        }(s.a);

    function en(t) {
        return function(e) {
            return e.lift(new nn(t))
        }
    }
    var nn = function() {
            function t(t) {
                this.notifier = t
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new rn(t, this.notifier))
            }, t
        }(),
        rn = function(t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                r.hasValue = !1;
                var i = new ft.a(r, void 0, void 0);
                return r.add(i), r.innerSubscription = i, Object(h.a)(r, n, void 0, void 0, i), r
            }
            return a.a(e, t), e.prototype._next = function(e) {
                this.hasValue && t.prototype._next.call(this, e)
            }, e.prototype.notifyNext = function(t, e, n, r, i) {
                this.hasValue = !0, this.innerSubscription && this.innerSubscription.unsubscribe()
            }, e.prototype.notifyComplete = function() {}, e
        }(b.a);

    function on(t) {
        return function(e) {
            return e.lift(new an(t))
        }
    }
    var an = function() {
            function t(t) {
                this.predicate = t
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new sn(t, this.predicate))
            }, t
        }(),
        sn = function(t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                return r.predicate = n, r.skipping = !0, r.index = 0, r
            }
            return a.a(e, t), e.prototype._next = function(t) {
                var e = this.destination;
                this.skipping && this.tryCallPredicate(t), this.skipping || e.next(t)
            }, e.prototype.tryCallPredicate = function(t) {
                try {
                    var e = this.predicate(t, this.index++);
                    this.skipping = Boolean(e)
                } catch (t) {
                    this.destination.error(t)
                }
            }, e
        }(s.a),
        un = n(299),
        cn = n(179),
        ln = n(139),
        fn = function(t) {
            function e(e, n, r) {
                void 0 === n && (n = 0), void 0 === r && (r = cn.a);
                var i = t.call(this) || this;
                return i.source = e, i.delayTime = n, i.scheduler = r, (!Object(ln.a)(n) || n < 0) && (i.delayTime = 0), r && "function" == typeof r.schedule || (i.scheduler = cn.a), i
            }
            return a.a(e, t), e.create = function(t, n, r) {
                return void 0 === n && (n = 0), void 0 === r && (r = cn.a), new e(t, n, r)
            }, e.dispatch = function(t) {
                var e = t.source,
                    n = t.subscriber;
                return this.add(e.subscribe(n))
            }, e.prototype._subscribe = function(t) {
                var n = this.delayTime,
                    r = this.source;
                return this.scheduler.schedule(e.dispatch, n, {
                    source: r,
                    subscriber: t
                })
            }, e
        }(F.a);

    function dn(t, e) {
        return void 0 === e && (e = 0),
            function(n) {
                return n.lift(new pn(t, e))
            }
    }
    var pn = function() {
            function t(t, e) {
                this.scheduler = t, this.delay = e
            }
            return t.prototype.call = function(t, e) {
                return new fn(e, this.delay, this.scheduler).subscribe(t)
            }, t
        }(),
        hn = n(400),
        bn = n(147);

    function mn(t, e) {
        return e ? Object(bn.a)((function() {
            return t
        }), e) : Object(bn.a)((function() {
            return t
        }))
    }
    var gn = n(401),
        vn = n(402),
        yn = n(403),
        _n = n(267);

    function wn(t, e, n) {
        return void 0 === e && (e = Fe.a), void 0 === n && (n = _n.a),
            function(r) {
                return r.lift(new En(t, e, n.leading, n.trailing))
            }
    }
    var En = function() {
            function t(t, e, n, r) {
                this.duration = t, this.scheduler = e, this.leading = n, this.trailing = r
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new On(t, this.duration, this.scheduler, this.leading, this.trailing))
            }, t
        }(),
        On = function(t) {
            function e(e, n, r, i, o) {
                var a = t.call(this, e) || this;
                return a.duration = n, a.scheduler = r, a.leading = i, a.trailing = o, a._hasTrailingValue = !1, a._trailingValue = null, a
            }
            return a.a(e, t), e.prototype._next = function(t) {
                this.throttled ? this.trailing && (this._trailingValue = t, this._hasTrailingValue = !0) : (this.add(this.throttled = this.scheduler.schedule(xn, this.duration, {
                    subscriber: this
                })), this.leading ? this.destination.next(t) : this.trailing && (this._trailingValue = t, this._hasTrailingValue = !0))
            }, e.prototype._complete = function() {
                this._hasTrailingValue ? (this.destination.next(this._trailingValue), this.destination.complete()) : this.destination.complete()
            }, e.prototype.clearThrottle = function() {
                var t = this.throttled;
                t && (this.trailing && this._hasTrailingValue && (this.destination.next(this._trailingValue), this._trailingValue = null, this._hasTrailingValue = !1), t.unsubscribe(), this.remove(t), this.throttled = null)
            }, e
        }(s.a);

    function xn(t) {
        t.subscriber.clearThrottle()
    }
    var Sn = n(184);

    function Tn(t) {
        return void 0 === t && (t = Fe.a),
            function(e) {
                return Object(Sn.a)((function() {
                    return e.pipe(Object(Ht.a)((function(e, n) {
                        var r = e.current;
                        return {
                            value: n,
                            current: t.now(),
                            last: r
                        }
                    }), {
                        current: t.now(),
                        value: void 0,
                        last: void 0
                    }), Object(dt.a)((function(t) {
                        var e = t.current,
                            n = t.last,
                            r = t.value;
                        return new kn(r, e - n)
                    })))
                }))
            }
    }
    var kn = function(t, e) {
            this.value = t, this.interval = e
        },
        Cn = n(404),
        Nn = n(288);

    function jn(t) {
        return void 0 === t && (t = Fe.a), Object(dt.a)((function(e) {
            return new In(e, t.now())
        }))
    }
    var In = function(t, e) {
        this.value = t, this.timestamp = e
    };

    function An(t, e, n) {
        return 0 === n ? [e] : (t.push(e), t)
    }

    function Pn() {
        return qt(An, [])
    }

    function Mn(t) {
        return function(e) {
            return e.lift(new Dn(t))
        }
    }
    var Dn = function() {
            function t(t) {
                this.windowBoundaries = t
            }
            return t.prototype.call = function(t, e) {
                var n = new Rn(t),
                    r = e.subscribe(n);
                return r.closed || n.add(Object(h.a)(n, this.windowBoundaries)), r
            }, t
        }(),
        Rn = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.window = new pe.a, e.next(n.window), n
            }
            return a.a(e, t), e.prototype.notifyNext = function(t, e, n, r, i) {
                this.openWindow()
            }, e.prototype.notifyError = function(t, e) {
                this._error(t)
            }, e.prototype.notifyComplete = function(t) {
                this._complete()
            }, e.prototype._next = function(t) {
                this.window.next(t)
            }, e.prototype._error = function(t) {
                this.window.error(t), this.destination.error(t)
            }, e.prototype._complete = function() {
                this.window.complete(), this.destination.complete()
            }, e.prototype._unsubscribe = function() {
                this.window = null
            }, e.prototype.openWindow = function() {
                var t = this.window;
                t && t.complete();
                var e = this.destination,
                    n = this.window = new pe.a;
                e.next(n)
            }, e
        }(b.a);

    function Fn(t, e) {
        return void 0 === e && (e = 0),
            function(n) {
                return n.lift(new Ln(t, e))
            }
    }
    var Ln = function() {
            function t(t, e) {
                this.windowSize = t, this.startWindowEvery = e
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new Un(t, this.windowSize, this.startWindowEvery))
            }, t
        }(),
        Un = function(t) {
            function e(e, n, r) {
                var i = t.call(this, e) || this;
                return i.destination = e, i.windowSize = n, i.startWindowEvery = r, i.windows = [new pe.a], i.count = 0, e.next(i.windows[0]), i
            }
            return a.a(e, t), e.prototype._next = function(t) {
                for (var e = this.startWindowEvery > 0 ? this.startWindowEvery : this.windowSize, n = this.destination, r = this.windowSize, i = this.windows, o = i.length, a = 0; a < o && !this.closed; a++) i[a].next(t);
                var s = this.count - r + 1;
                if (s >= 0 && s % e == 0 && !this.closed && i.shift().complete(), ++this.count % e == 0 && !this.closed) {
                    var u = new pe.a;
                    i.push(u), n.next(u)
                }
            }, e.prototype._error = function(t) {
                var e = this.windows;
                if (e)
                    for (; e.length > 0 && !this.closed;) e.shift().error(t);
                this.destination.error(t)
            }, e.prototype._complete = function() {
                var t = this.windows;
                if (t)
                    for (; t.length > 0 && !this.closed;) t.shift().complete();
                this.destination.complete()
            }, e.prototype._unsubscribe = function() {
                this.count = 0, this.windows = null
            }, e
        }(s.a),
        zn = n(55);

    function Vn(t) {
        var e = Fe.a,
            n = null,
            r = Number.POSITIVE_INFINITY;
        return Object(zn.a)(arguments[3]) && (e = arguments[3]), Object(zn.a)(arguments[2]) ? e = arguments[2] : Object(ln.a)(arguments[2]) && (r = arguments[2]), Object(zn.a)(arguments[1]) ? e = arguments[1] : Object(ln.a)(arguments[1]) && (n = arguments[1]),
            function(i) {
                return i.lift(new Bn(t, n, r, e))
            }
    }
    var Bn = function() {
            function t(t, e, n, r) {
                this.windowTimeSpan = t, this.windowCreationInterval = e, this.maxWindowSize = n, this.scheduler = r
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new Gn(t, this.windowTimeSpan, this.windowCreationInterval, this.maxWindowSize, this.scheduler))
            }, t
        }(),
        Wn = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e._numberOfNextedValues = 0, e
            }
            return a.a(e, t), e.prototype.next = function(e) {
                this._numberOfNextedValues++, t.prototype.next.call(this, e)
            }, Object.defineProperty(e.prototype, "numberOfNextedValues", {
                get: function() {
                    return this._numberOfNextedValues
                },
                enumerable: !0,
                configurable: !0
            }), e
        }(pe.a),
        Gn = function(t) {
            function e(e, n, r, i, o) {
                var a = t.call(this, e) || this;
                a.destination = e, a.windowTimeSpan = n, a.windowCreationInterval = r, a.maxWindowSize = i, a.scheduler = o, a.windows = [];
                var s = a.openWindow();
                if (null !== r && r >= 0) {
                    var u = {
                            subscriber: a,
                            window: s,
                            context: null
                        },
                        c = {
                            windowTimeSpan: n,
                            windowCreationInterval: r,
                            subscriber: a,
                            scheduler: o
                        };
                    a.add(o.schedule(qn, n, u)), a.add(o.schedule($n, r, c))
                } else {
                    var l = {
                        subscriber: a,
                        window: s,
                        windowTimeSpan: n
                    };
                    a.add(o.schedule(Hn, n, l))
                }
                return a
            }
            return a.a(e, t), e.prototype._next = function(t) {
                for (var e = this.windows, n = e.length, r = 0; r < n; r++) {
                    var i = e[r];
                    i.closed || (i.next(t), i.numberOfNextedValues >= this.maxWindowSize && this.closeWindow(i))
                }
            }, e.prototype._error = function(t) {
                for (var e = this.windows; e.length > 0;) e.shift().error(t);
                this.destination.error(t)
            }, e.prototype._complete = function() {
                for (var t = this.windows; t.length > 0;) {
                    var e = t.shift();
                    e.closed || e.complete()
                }
                this.destination.complete()
            }, e.prototype.openWindow = function() {
                var t = new Wn;
                return this.windows.push(t), this.destination.next(t), t
            }, e.prototype.closeWindow = function(t) {
                t.complete();
                var e = this.windows;
                e.splice(e.indexOf(t), 1)
            }, e
        }(s.a);

    function Hn(t) {
        var e = t.subscriber,
            n = t.windowTimeSpan,
            r = t.window;
        r && e.closeWindow(r), t.window = e.openWindow(), this.schedule(t, n)
    }

    function $n(t) {
        var e = t.windowTimeSpan,
            n = t.subscriber,
            r = t.scheduler,
            i = t.windowCreationInterval,
            o = n.openWindow(),
            a = {
                action: this,
                subscription: null
            },
            s = {
                subscriber: n,
                window: o,
                context: a
            };
        a.subscription = r.schedule(qn, e, s), this.add(a.subscription), this.schedule(t, i)
    }

    function qn(t) {
        var e = t.subscriber,
            n = t.window,
            r = t.context;
        r && r.action && r.subscription && r.action.remove(r.subscription), e.closeWindow(n)
    }

    function Yn(t, e) {
        return function(n) {
            return n.lift(new Kn(t, e))
        }
    }
    var Kn = function() {
            function t(t, e) {
                this.openings = t, this.closingSelector = e
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new Qn(t, this.openings, this.closingSelector))
            }, t
        }(),
        Qn = function(t) {
            function e(e, n, r) {
                var i = t.call(this, e) || this;
                return i.openings = n, i.closingSelector = r, i.contexts = [], i.add(i.openSubscription = Object(h.a)(i, n, n)), i
            }
            return a.a(e, t), e.prototype._next = function(t) {
                var e = this.contexts;
                if (e)
                    for (var n = e.length, r = 0; r < n; r++) e[r].window.next(t)
            }, e.prototype._error = function(e) {
                var n = this.contexts;
                if (this.contexts = null, n)
                    for (var r = n.length, i = -1; ++i < r;) {
                        var o = n[i];
                        o.window.error(e), o.subscription.unsubscribe()
                    }
                t.prototype._error.call(this, e)
            }, e.prototype._complete = function() {
                var e = this.contexts;
                if (this.contexts = null, e)
                    for (var n = e.length, r = -1; ++r < n;) {
                        var i = e[r];
                        i.window.complete(), i.subscription.unsubscribe()
                    }
                t.prototype._complete.call(this)
            }, e.prototype._unsubscribe = function() {
                var t = this.contexts;
                if (this.contexts = null, t)
                    for (var e = t.length, n = -1; ++n < e;) {
                        var r = t[n];
                        r.window.unsubscribe(), r.subscription.unsubscribe()
                    }
            }, e.prototype.notifyNext = function(t, e, n, r, i) {
                if (t === this.openings) {
                    var o = void 0;
                    try {
                        o = (0, this.closingSelector)(e)
                    } catch (t) {
                        return this.error(t)
                    }
                    var a = new pe.a,
                        s = new p.a,
                        u = {
                            window: a,
                            subscription: s
                        };
                    this.contexts.push(u);
                    var c = Object(h.a)(this, o, u);
                    c.closed ? this.closeWindow(this.contexts.length - 1) : (c.context = u, s.add(c)), this.destination.next(a)
                } else this.closeWindow(this.contexts.indexOf(t))
            }, e.prototype.notifyError = function(t) {
                this.error(t)
            }, e.prototype.notifyComplete = function(t) {
                t !== this.openSubscription && this.closeWindow(this.contexts.indexOf(t.context))
            }, e.prototype.closeWindow = function(t) {
                if (-1 !== t) {
                    var e = this.contexts,
                        n = e[t],
                        r = n.window,
                        i = n.subscription;
                    e.splice(t, 1), r.complete(), i.unsubscribe()
                }
            }, e
        }(b.a);

    function Jn(t) {
        return function(e) {
            return e.lift(new Xn(t))
        }
    }
    var Xn = function() {
            function t(t) {
                this.closingSelector = t
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new Zn(t, this.closingSelector))
            }, t
        }(),
        Zn = function(t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                return r.destination = e, r.closingSelector = n, r.openWindow(), r
            }
            return a.a(e, t), e.prototype.notifyNext = function(t, e, n, r, i) {
                this.openWindow(i)
            }, e.prototype.notifyError = function(t, e) {
                this._error(t)
            }, e.prototype.notifyComplete = function(t) {
                this.openWindow(t)
            }, e.prototype._next = function(t) {
                this.window.next(t)
            }, e.prototype._error = function(t) {
                this.window.error(t), this.destination.error(t), this.unsubscribeClosingNotification()
            }, e.prototype._complete = function() {
                this.window.complete(), this.destination.complete(), this.unsubscribeClosingNotification()
            }, e.prototype.unsubscribeClosingNotification = function() {
                this.closingNotification && this.closingNotification.unsubscribe()
            }, e.prototype.openWindow = function(t) {
                void 0 === t && (t = null), t && (this.remove(t), t.unsubscribe());
                var e = this.window;
                e && e.complete();
                var n, r = this.window = new pe.a;
                this.destination.next(r);
                try {
                    n = (0, this.closingSelector)()
                } catch (t) {
                    return this.destination.error(t), void this.window.error(t)
                }
                this.add(this.closingNotification = Object(h.a)(this, n))
            }, e
        }(b.a),
        tr = n(360),
        er = n(222);

    function nr() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return function(e) {
            return e.lift.call(er.b.apply(void 0, [e].concat(t)))
        }
    }

    function rr(t) {
        return function(e) {
            return e.lift(new er.a(t))
        }
    }
    n.d(e, "audit", (function() {
        return r.a
    })), n.d(e, "auditTime", (function() {
        return i.a
    })), n.d(e, "buffer", (function() {
        return o.a
    })), n.d(e, "bufferCount", (function() {
        return u
    })), n.d(e, "bufferTime", (function() {
        return d.a
    })), n.d(e, "bufferToggle", (function() {
        return m
    })), n.d(e, "bufferWhen", (function() {
        return y
    })), n.d(e, "catchError", (function() {
        return E.a
    })), n.d(e, "combineAll", (function() {
        return x
    })), n.d(e, "combineLatest", (function() {
        return S.a
    })), n.d(e, "concat", (function() {
        return T.a
    })), n.d(e, "concatAll", (function() {
        return k.a
    })), n.d(e, "concatMap", (function() {
        return C.a
    })), n.d(e, "concatMapTo", (function() {
        return N
    })), n.d(e, "count", (function() {
        return j
    })), n.d(e, "debounce", (function() {
        return P.a
    })), n.d(e, "debounceTime", (function() {
        return M.a
    })), n.d(e, "defaultIfEmpty", (function() {
        return D.a
    })), n.d(e, "delay", (function() {
        return R.a
    })), n.d(e, "delayWhen", (function() {
        return L
    })), n.d(e, "dematerialize", (function() {
        return W
    })), n.d(e, "distinct", (function() {
        return $
    })), n.d(e, "distinctUntilChanged", (function() {
        return K.a
    })), n.d(e, "distinctUntilKeyChanged", (function() {
        return Q
    })), n.d(e, "elementAt", (function() {
        return et
    })), n.d(e, "endWith", (function() {
        return it
    })), n.d(e, "every", (function() {
        return ot
    })), n.d(e, "exhaust", (function() {
        return ut
    })), n.d(e, "exhaustMap", (function() {
        return ht
    })), n.d(e, "expand", (function() {
        return gt
    })), n.d(e, "filter", (function() {
        return X.a
    })), n.d(e, "finalize", (function() {
        return _t.a
    })), n.d(e, "find", (function() {
        return wt
    })), n.d(e, "findIndex", (function() {
        return xt
    })), n.d(e, "first", (function() {
        return St.a
    })), n.d(e, "groupBy", (function() {
        return Tt.b
    })), n.d(e, "ignoreElements", (function() {
        return kt
    })), n.d(e, "isEmpty", (function() {
        return jt
    })), n.d(e, "last", (function() {
        return Ut
    })), n.d(e, "map", (function() {
        return dt.a
    })), n.d(e, "mapTo", (function() {
        return zt.a
    })), n.d(e, "materialize", (function() {
        return Bt
    })), n.d(e, "max", (function() {
        return Yt
    })), n.d(e, "merge", (function() {
        return Kt.a
    })), n.d(e, "mergeAll", (function() {
        return Qt.a
    })), n.d(e, "mergeMap", (function() {
        return Jt.a
    })), n.d(e, "flatMap", (function() {
        return Jt.a
    })), n.d(e, "mergeMapTo", (function() {
        return Xt
    })), n.d(e, "mergeScan", (function() {
        return Zt
    })), n.d(e, "min", (function() {
        return ne
    })), n.d(e, "multicast", (function() {
        return re.a
    })), n.d(e, "observeOn", (function() {
        return ie.b
    })), n.d(e, "onErrorResumeNext", (function() {
        return ae
    })), n.d(e, "pairwise", (function() {
        return ce.a
    })), n.d(e, "partition", (function() {
        return fe
    })), n.d(e, "pluck", (function() {
        return de
    })), n.d(e, "publish", (function() {
        return he
    })), n.d(e, "publishBehavior", (function() {
        return me
    })), n.d(e, "publishLast", (function() {
        return ve
    })), n.d(e, "publishReplay", (function() {
        return _e
    })), n.d(e, "race", (function() {
        return Ee
    })), n.d(e, "reduce", (function() {
        return qt
    })), n.d(e, "repeat", (function() {
        return Oe
    })), n.d(e, "repeatWhen", (function() {
        return Te
    })), n.d(e, "retry", (function() {
        return Ne
    })), n.d(e, "retryWhen", (function() {
        return Ae
    })), n.d(e, "refCount", (function() {
        return De.a
    })), n.d(e, "sample", (function() {
        return Re.a
    })), n.d(e, "sampleTime", (function() {
        return Le
    })), n.d(e, "scan", (function() {
        return Ht.a
    })), n.d(e, "sequenceEqual", (function() {
        return Be
    })), n.d(e, "share", (function() {
        return $e.a
    })), n.d(e, "shareReplay", (function() {
        return qe.a
    })), n.d(e, "single", (function() {
        return Ye
    })), n.d(e, "skip", (function() {
        return Je.a
    })), n.d(e, "skipLast", (function() {
        return Xe
    })), n.d(e, "skipUntil", (function() {
        return en
    })), n.d(e, "skipWhile", (function() {
        return on
    })), n.d(e, "startWith", (function() {
        return un.a
    })), n.d(e, "subscribeOn", (function() {
        return dn
    })), n.d(e, "switchAll", (function() {
        return hn.a
    })), n.d(e, "switchMap", (function() {
        return bn.a
    })), n.d(e, "switchMapTo", (function() {
        return mn
    })), n.d(e, "take", (function() {
        return tt.a
    })), n.d(e, "takeLast", (function() {
        return Dt
    })), n.d(e, "takeUntil", (function() {
        return gn.a
    })), n.d(e, "takeWhile", (function() {
        return vn.a
    })), n.d(e, "tap", (function() {
        return yn.a
    })), n.d(e, "throttle", (function() {
        return _n.b
    })), n.d(e, "throttleTime", (function() {
        return wn
    })), n.d(e, "throwIfEmpty", (function() {
        return Z.a
    })), n.d(e, "timeInterval", (function() {
        return Tn
    })), n.d(e, "timeout", (function() {
        return Cn.a
    })), n.d(e, "timeoutWith", (function() {
        return Nn.a
    })), n.d(e, "timestamp", (function() {
        return jn
    })), n.d(e, "toArray", (function() {
        return Pn
    })), n.d(e, "window", (function() {
        return Mn
    })), n.d(e, "windowCount", (function() {
        return Fn
    })), n.d(e, "windowTime", (function() {
        return Vn
    })), n.d(e, "windowToggle", (function() {
        return Yn
    })), n.d(e, "windowWhen", (function() {
        return Jn
    })), n.d(e, "withLatestFrom", (function() {
        return tr.a
    })), n.d(e, "zip", (function() {
        return nr
    })), n.d(e, "zipAll", (function() {
        return rr
    }))
}, , function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return r
    }));
    var r = Array.isArray || function(t) {
        return t && "number" == typeof t.length
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "b", (function() {
        return r
    })), n.d(e, "a", (function() {
        return i
    }));
    const r = {
        bridge: "bridge",
        background: "message:to-priv",
        broadcast: "message:to-non-priv"
    };
    var i;
    ! function(t) {
        t[t.success = 0] = "success", t[t.successWithEmpty = 1] = "successWithEmpty", t[t.alreadyMigrated = 2] = "alreadyMigrated"
    }(i || (i = {}))
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return i
    }));
    var r = n(136),
        i = new(n(134).a)(r.a)
}, , function(t, e, n) {
    "use strict";
    e.a = function(t) {
        return null != t && "object" == typeof t
    }
}, , function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return i
    })), n.d(e, "b", (function() {
        return o
    }));
    var r = n(14),
        i = new r.a((function(t) {
            return t.complete()
        }));

    function o(t) {
        return t ? function(t) {
            return new r.a((function(e) {
                return t.schedule((function() {
                    return e.complete()
                }))
            }))
        }(t) : i
    }
}, , , , function(t, e, n) {
    "use strict";
    var r = n(59),
        i = Object.prototype,
        o = i.hasOwnProperty,
        a = i.toString,
        s = r.a ? r.a.toStringTag : void 0,
        u = Object.prototype.toString,
        c = r.a ? r.a.toStringTag : void 0;
    e.a = function(t) {
        return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : c && c in Object(t) ? function(t) {
            var e = o.call(t, s),
                n = t[s];
            try {
                t[s] = void 0;
                var r = !0
            } catch (t) {}
            var i = a.call(t);
            return r && (e ? t[s] = n : delete t[s]), i
        }(t) : function(t) {
            return u.call(t)
        }(t)
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return i
    }));
    var r = !1,
        i = {
            Promise: void 0,
            set useDeprecatedSynchronousErrorHandling(t) {
                t && (new Error).stack, r = t
            },
            get useDeprecatedSynchronousErrorHandling() {
                return r
            }
        }
}, , function(t, e, n) {
    "use strict";

    function r(t) {
        return t && "function" == typeof t.schedule
    }
    n.d(e, "a", (function() {
        return r
    }))
}, , function(t, e, n) {
    "use strict";
    var r, i = n(86),
        o = n(36).a["__core-js_shared__"],
        a = (r = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "",
        s = n(31),
        u = n(87),
        c = /^\[object .+?Constructor\]$/,
        l = Function.prototype,
        f = Object.prototype,
        d = l.toString,
        p = f.hasOwnProperty,
        h = RegExp("^" + d.call(p).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        b = function(t) {
            return !(!Object(s.a)(t) || function(t) {
                return !!a && a in t
            }(t)) && (Object(i.a)(t) ? h : c).test(Object(u.a)(t))
        };
    e.a = function(t, e) {
        var n = function(t, e) {
            return null == t ? void 0 : t[e]
        }(t, e);
        return b(n) ? n : void 0
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return r
    })), n.d(e, "b", (function() {
        return i
    })), n.d(e, "c", (function() {
        return o
    }));
    class r extends Error {
        constructor(t) {
            super(`Assertion failed: ${t?"string"==typeof t?t:t():"(unnamed)"}`)
        }
    }

    function i(t, e) {
        if (!t) throw new r(e)
    }

    function o(t, e) {
        if (null == t) throw new r(() => e ? `Expected ${e} to be non-null` : "Expected non-null");
        return t
    }
}, function(t, e, n) {
    "use strict";
    var r = n(36).a.Symbol;
    e.a = r
}, function(t, e, n) {
    "use strict";
    n.d(e, "b", (function() {
        return s
    })), n.d(e, "a", (function() {
        return u
    })), n.d(e, "h", (function() {
        return c
    })), n.d(e, "i", (function() {
        return l
    })), n.d(e, "j", (function() {
        return f
    })), n.d(e, "g", (function() {
        return d
    })), n.d(e, "d", (function() {
        return h
    })), n.d(e, "f", (function() {
        return b
    })), n.d(e, "c", (function() {
        return m
    })), n.d(e, "e", (function() {
        return g
    }));
    var r = n(10),
        i = n(227),
        o = n(195);
    const a = t => t.replace("www.", "");

    function s(t) {
        const e = t && t.ownerDocument || document,
            n = e.location || e.defaultView.location;
        return n ? a(n.hostname) : ""
    }

    function u(t) {
        if (Object(r.l)() && /^about:/.test(t)) return t;
        const e = document.createElement("a");
        return e.href = t, a(e.hostname)
    }
    const c = () => i.b.includes(s()),
        l = () => /\/document\//.test(b()) && "docs.google.com" === s(),
        f = () => /\.atlassian\.net/.test(s()),
        d = () => /\.blackboard\.com/.test(s()),
        p = /d\/(.*?)\//,
        h = () => {
            if (!document || !document.location) return null;
            if (p.test(document.location.href)) {
                const t = document.location.href.match(p)[1];
                return o.createHash("superfasthash").hash(t)
            }
            return null
        };

    function b(t) {
        const e = t && t.ownerDocument || document,
            n = e.location || e.defaultView.location;
        return n ? n.pathname + n.search : ""
    }

    function m() {
        const t = new RegExp("^(?:[a-z]+:)?//", "i");
        let e = "";
        const n = document.getElementsByTagName("link");
        for (let t = 0; t < n.length; t++) {
            const r = n[t],
                i = /(\"icon )|( icon\")|(\"icon\")|( icon )/i; - 1 !== ('"' + r.getAttribute("rel") + '"').search(i) && (e = r.getAttribute("href"))
        }
        return e || (e = "favicon.ico"), t.test(e) ? e : "/" !== e[0] ? "//" + document.location.host + document.location.pathname + e : "//" + document.location.host + e
    }

    function g() {
        const t = s();
        return "Back to " + (t && {
            "mail.google.com": "Gmail",
            "facebook.com": "Facebook",
            "twitter.com": "Twitter"
        } [t] || document.title)
    }
}, , function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return a
    }));
    var r = n(14),
        i = n(192),
        o = n(289);

    function a(t, e) {
        return e ? Object(o.a)(t, e) : t instanceof r.a ? t : new r.a(Object(i.a)(t))
    }
}, function(t, e, n) {
    t.exports = {
        windows: "_1ouT8",
        setting_item: "_2IlHt",
        fixing: "C6MES",
        thin_text: "_1vz60",
        footer: "Tln6a",
        gr_popup_settings: "Ibj3u",
        footer_btn: "_1bnc2",
        line: "_30_VR",
        short_border: "DD0ma",
        top: "dN7KM",
        show_news: "bHfOZ",
        news: "_2PVRv",
        news_content: "_13R5a",
        close_news: "_2VFKp",
        not_supported: "_36TEl",
        checkbox_check: "_2mg9_",
        site_switcher: "b519s",
        upgrade: "_B775",
        def_switcher: "_1TCaF",
        on: "_14lHG",
        off: "itLZ0",
        upgraded: "_1TX0f",
        content: "_3Lj-5",
        since: "Fev9e",
        has_favicon: "_2Bnod",
        favicon: "_10wbB",
        domain: "CKnv8",
        summary: "_1lsq2",
        upgrade_title: "_2hObZ",
        my_grammarly: "TF2eL",
        new_document: "_3Cq9r",
        unsupported_site: "_3e_0Y",
        unsupported_item: "_3qoTk",
        unsupported_title: "_2gN2r",
        domain_in_details: "_2uJz6",
        unsupported_temporary: "VBQiS",
        unsupported_permanently: "_1te7p",
        unsupported_grammarly: "_3N1eq",
        diamond: "_1dfOx",
        userPanel: "_1dEEm",
        email: "_1r3m4",
        link: "_2792a",
        edc_stripe: "_2aJSb"
    }
}, , function(t, e, n) {
    "use strict";
    var r = n(22),
        i = n(10),
        o = n(3),
        a = n(16);
    class s {
        constructor(t, e, n, r, i) {
            this._baseUrl = t, this._appName = e, this._appVersion = n, this._env = r, this._fetch = i, this._context = {
                userId: void 0,
                containerId: void 0
            }, this._sessionId = Object(a.r)(), this._logEndpoint = Object(o.d)(this._baseUrl), this._crashEndpoint = Object(o.c)(this._baseUrl)
        }
        setUserId(t) {
            this._context = Object.assign({}, this._context, {
                userId: t
            })
        }
        setContainerId(t) {
            this._context = Object.assign({}, this._context, {
                containerId: t
            })
        }
        getContext() {
            return this._context
        }
        _sendRaw(t, e) {
            return this._fetch(t, {
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                method: "post",
                cache: "no-cache",
                body: JSON.stringify(e)
            }).then(t => void 0, t => {})
        }
        sendEvent(t) {
            const e = Object(o.b)(t, {
                application: this._appName,
                version: this._appVersion,
                env: this._env,
                context: this.getContext()
            });
            return this._sendRaw(this._logEndpoint, e)
        }
        sendCrashLog(t) {
            const e = t.map(t => Object(o.b)(t, {
                application: this._appName,
                version: this._appVersion,
                sessionId: this._sessionId,
                env: this._env,
                context: this.getContext()
            }));
            return this._sendRaw(this._crashEndpoint, e)
        }
        sendUsageEvent(t, e, n, r) {
            const i = Object(o.b)({
                logger: t,
                message: e,
                level: n,
                extra_usage: r
            }, {
                application: this._appName,
                version: this._appVersion,
                env: this._env
            });
            return this._sendRaw(this._logEndpoint, i)
        }
    }
    var u = n(240);
    class c {
        constructor(t, e, n, r, i) {
            this._baseUrl = t, this._appName = e, this._appVersion = n, this._env = r, this._fetch = i, this._context = {
                userId: void 0,
                containerId: void 0
            }
        }
        setUserId(t) {
            this._context = Object.assign({}, this._context, {
                userId: t
            })
        }
        setContainerId(t) {
            this._context = Object.assign({}, this._context, {
                containerId: t
            })
        }
        getContext() {
            return this._context
        }
        send(t) {
            const e = Object(o.b)(t, {
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
                body: JSON.stringify(e)
            })
        }
    }
    var l = n(150),
        f = n(12),
        d = n(121);
    n.d(e, "b", (function() {
        return g
    })), n.d(e, "a", (function() {
        return v
    })), n.d(e, "c", (function() {
        return y
    }));
    const p = f.a.create("lib.tracking.call");
    let h, b;
    var m;
    ! function(t) {
        function e() {
            return h || (h = Object(i.i)() ? new s(Object(i.f)().newFelog, Object(i.a)(), Object(i.h)(), Object(i.c)(), window.fetch.bind(window)) : void 0), h
        }

        function n() {
            return b || (b = Object(i.i)() ? new c(Object(i.f)().sumoLogic, Object(i.a)(), Object(i.h)(), Object(i.c)(), window.fetch.bind(window)) : void 0), b
        }
        let r;
        ! function(t) {
            t.sendFelog = function(t, n, r, i) {
                const o = e();
                if (!o) throw Error("sendFelog unavailable");
                o.sendEvent({
                    logger: t,
                    message: n,
                    level: r,
                    extra: i
                }).catch(e => Object(u.a)(t, n, r, i, o.getContext()))
            }, t.sendFelogEvent = function(t) {
                const n = e();
                if (!n) throw Error("felog unavailable");
                n.sendEvent(t).catch(e => Object(u.b)(t, n.getContext()))
            }, t.sendSumoLogic = function(t, e, r, i) {
                const o = n();
                if (!o) throw Error("sumoLogicClient unavailable");
                o.send({
                    logger: t,
                    message: e,
                    level: r,
                    extra: i
                }).catch(n => Object(u.a)(t, e, r, i, o.getContext()))
            }, t.sendFelogCrashLogs = function(t) {
                const n = e();
                n && n.sendCrashLog(t)
            }, t.sendFelogUsageEvent = function(t, n, r, i) {
                const o = e();
                if (!o) throw Error("felogClient unavailable");
                o.sendUsageEvent(t, n, r, i).catch(e => Object(u.a)(t, n, r))
            }, t.setUserId = function(t) {
                const r = e();
                r && r.setUserId(t);
                const i = n();
                i && i.setUserId(t)
            }, t.setContainerId = function(t) {
                const r = e();
                r && r.setContainerId(t);
                const i = n();
                i && i.setContainerId(t)
            }
        }(r = t.methods || (t.methods = {})), t.CALL_HANDLER_ID = "tracking/RPC"
    }(m || (m = {}));
    const g = Object.keys(m.methods).reduce((t, e) => (t[e] = (...t) => v(m.CALL_HANDLER_ID, e, ...t), t), {});

    function v(t, ...e) {
        const n = e => {
            p.warn(`tracking call ${t} failed, reason: `, e)
        };
        if (Object(i.i)()) Object(a.g)(() => {
            try {
                switch (y(t, e), t) {
                    case m.CALL_HANDLER_ID:
                        const n = e[0],
                            r = e.slice(1);
                        m.methods[n](...r);
                        break;
                    default:
                        ! function(t, e) {
                            const [n, r] = t.split(".");
                            if ("gnar" === n)
                                if (l.a.gnar)
                                    if ("track" === r) {
                                        const [t, n] = e;
                                        l.a.gnar.track(Object.assign({
                                            eventName: Object(i.d)() + "/" + t
                                        }, n))
                                    } else if ("pingMaybe" === r) l.a.gnar.pingMaybe();
                            else if ("setUser" === r) try {
                                l.a.gnar.setUser(e[0], e[1])
                            } catch (t) {
                                Object(d.a)().gnar.errorSetUser(JSON.stringify(t))
                            } else p.error(`gnar client does not have method '${r}' for '${t}' in runMessage`);
                            else p.error(`gnar client not available for '${t}' in runMessage`);
                            else p.error(`unrecognized '${t}' in runMessage`)
                        }(t, e)
                }
            } catch (t) {
                n(t)
            }
        }, 20);
        else {
            const i = 1e4;
            let o;
            const a = () => clearInterval(o),
                s = t => {
                    a(), n(t)
                };
            o = window.setTimeout(() => s("timeout call through bg page"), i), r.emitBackground("tracking-call", {
                msg: t,
                data: e
            }, a)
        }
    }

    function y(t, e) {
        p.info(t, e)
    }
}, , , , , , , function(t, e, n) {
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
}, function(t, e, n) {
    "use strict";
    ! function t() {
        if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
        } catch (t) {
            console.error(t)
        }
    }(), t.exports = n(465)
}, function(t, e, n) {
    "use strict";
    n.d(e, "d", (function() {
        return o
    })), n.d(e, "e", (function() {
        return a
    })), n.d(e, "f", (function() {
        return s
    })), n.d(e, "c", (function() {
        return u
    })), n.d(e, "b", (function() {
        return c
    })), n.d(e, "a", (function() {
        return l
    }));
    var r = n(58);
    const i = n(12).a.create("extension-api");

    function o(t) {
        window.extensionBackgroundPageApi && i.warn("Background Page Extension Api init called more than once"), window.extensionBackgroundPageApi = window.extensionBackgroundPageApi || t
    }

    function a(t) {
        window.extensionContentScriptApi && i.warn("Content Script Extension Api init called more than once"), window.extensionContentScriptApi = window.extensionContentScriptApi || t
    }

    function s(t) {
        window.extensionPopupApi && i.warn("Popup Extension Api init called more than once"), window.extensionPopupApi = window.extensionPopupApi || t
    }

    function u() {
        return Object(r.c)(window.extensionPopupApi, "popup extension api was not initialized")
    }

    function c() {
        return Object(r.c)(window.extensionContentScriptApi, "content script extension api was not initialized")
    }

    function l() {
        return Object(r.c)(window.extensionBackgroundPageApi, "backgound page extension api was not initialized")
    }
}, function(t, e, n) {
    "use strict";

    function r() {}
    n.d(e, "a", (function() {
        return r
    }))
}, , function(t, e, n) {
    "use strict";
    var r = n(86),
        i = n(125);
    e.a = function(t) {
        return null != t && Object(i.a)(t.length) && !Object(r.a)(t)
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return o
    }));
    var r = n(2),
        i = n(11);

    function o(t, e) {
        return function(n) {
            return n.lift(new a(t, e))
        }
    }
    var a = function() {
            function t(t, e) {
                this.predicate = t, this.thisArg = e
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new s(t, this.predicate, this.thisArg))
            }, t
        }(),
        s = function(t) {
            function e(e, n, r) {
                var i = t.call(this, e) || this;
                return i.predicate = n, i.thisArg = r, i.count = 0, i
            }
            return r.a(e, t), e.prototype._next = function(t) {
                var e;
                try {
                    e = this.predicate.call(this.thisArg, t, this.count++)
                } catch (t) {
                    return void this.destination.error(t)
                }
                e && this.destination.next(t)
            }, e
        }(i.a)
}, , function(t, e, n) {
    "use strict";

    function r(t) {
        const e = {},
            n = t || {};
        return n.emit = function(t, n) {
            t = r(t);
            const i = e[t];
            if (!i) return;
            const o = i.concat();
            for (let t = 0; t < o.length; t++) o[t](n)
        }, n.emitArgs = function(t) {
            t = r(t);
            const n = e[t],
                i = [].slice.call(arguments, 1);
            if (!n) return;
            const o = n.concat();
            for (let t = 0; t < o.length; t++) o[t].apply(null, i)
        }, n.on = function(t, i) {
            return t = r(t), e[t] = e[t] || [], e[t].push(i), {
                un: function() {
                    n.un(t, i)
                }
            }
        }, n.off = n.un = function(t, n) {
            t = r(t);
            const i = e[t];
            if (!i) return;
            const o = i.indexOf(n);
            o > -1 && (i.splice(o, 1), i.length > 0 || delete e[t])
        }, n.one = function(t, e) {
            const r = n.on(t, (function() {
                r.un(), e.apply(null, arguments)
            }))
        }, n.delegate = function(t, e, i) {
            e = r(e), n.on(e, (function(n) {
                t.emit(i || e, n)
            }))
        }, n;

        function r(t) {
            return "string" != typeof t ? t.join(" ") : t
        }
    }
    n.r(e), n.d(e, "emitter", (function() {
        return r
    }))
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return i
    }));
    var r = n(2),
        i = function(t) {
            function e(e, n, r) {
                var i = t.call(this) || this;
                return i.parent = e, i.outerValue = n, i.outerIndex = r, i.index = 0, i
            }
            return r.a(e, t), e.prototype._next = function(t) {
                this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this)
            }, e.prototype._error = function(t) {
                this.parent.notifyError(t, this), this.unsubscribe()
            }, e.prototype._complete = function() {
                this.parent.notifyComplete(this), this.unsubscribe()
            }, e
        }(n(11).a)
}, function(t, e, n) {
    "use strict";
    (function(t) {
        var r = n(36),
            i = n(277),
            o = "object" == typeof exports && exports && !exports.nodeType && exports,
            a = o && "object" == typeof t && t && !t.nodeType && t,
            s = a && a.exports === o ? r.a.Buffer : void 0,
            u = (s ? s.isBuffer : void 0) || i.a;
        e.a = u
    }).call(this, n(198)(t))
}, , function(t, e, n) {
    "use strict";
    e.a = function(t, e) {
        return t === e || t != t && e != e
    }
}, function(t, e, n) {
    "use strict";
    var r = n(84),
        i = function(t, e) {
            for (var n = t.length; n--;)
                if (Object(r.a)(t[n][0], e)) return n;
            return -1
        },
        o = Array.prototype.splice;

    function a(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    a.prototype.clear = function() {
        this.__data__ = [], this.size = 0
    }, a.prototype.delete = function(t) {
        var e = this.__data__,
            n = i(e, t);
        return !(n < 0 || (n == e.length - 1 ? e.pop() : o.call(e, n, 1), --this.size, 0))
    }, a.prototype.get = function(t) {
        var e = this.__data__,
            n = i(e, t);
        return n < 0 ? void 0 : e[n][1]
    }, a.prototype.has = function(t) {
        return i(this.__data__, t) > -1
    }, a.prototype.set = function(t, e) {
        var n = this.__data__,
            r = i(n, t);
        return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this
    }, e.a = a
}, function(t, e, n) {
    "use strict";
    var r = n(52),
        i = n(31);
    e.a = function(t) {
        if (!Object(i.a)(t)) return !1;
        var e = Object(r.a)(t);
        return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e
    }
}, function(t, e, n) {
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
}, , function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "t", (function() {
        return r
    })), n.d(e, "DAPI_ACTIONS", (function() {
        return i
    })), n.d(e, "CACHED_ACTIONS", (function() {
        return o
    })), n.d(e, "setDapiProp", (function() {
        return a
    })), n.d(e, "changeWeakDialect", (function() {
        return s
    })), n.d(e, "changeStrongDialect", (function() {
        return u
    })), n.d(e, "initialSettings", (function() {
        return c
    })), n.d(e, "toggleDefs", (function() {
        return l
    })), n.d(e, "toggleAutocorrect", (function() {
        return f
    })), n.d(e, "toggleSite", (function() {
        return d
    })), n.d(e, "toggleField", (function() {
        return p
    })), n.d(e, "seenNews", (function() {
        return h
    })), n.d(e, "gdocsOptedIn", (function() {
        return b
    })), n.d(e, "gdocsOptedOut", (function() {
        return m
    })), n.d(e, "seenGdocsOptIn", (function() {
        return g
    })), n.d(e, "seenGdocsLargeDocumentWarning", (function() {
        return v
    })), n.d(e, "hideGdocsSigninPopup", (function() {
        return y
    })), n.d(e, "clickGdocsAuthentication", (function() {
        return _
    })), n.d(e, "setGdocsEnabledSetting", (function() {
        return w
    })), n.d(e, "showOnboarding", (function() {
        return E
    })), n.d(e, "seenOnboarding", (function() {
        return O
    })), n.d(e, "seenDelightfulMessage", (function() {
        return x
    })), n.d(e, "showNews", (function() {
        return S
    })), n.d(e, "saveAnonymousProps", (function() {
        return T
    })), n.d(e, "disableOnTab", (function() {
        return k
    })), n.d(e, "showDisableReminder", (function() {
        return C
    })), n.d(e, "disableReminder", (function() {
        return N
    })), n.d(e, "showEdgePopupFromGButton", (function() {
        return j
    })), n.d(e, "showLoginReminder", (function() {
        return I
    })), n.d(e, "hideLoginReminder", (function() {
        return A
    })), n.d(e, "disableLoginReminder", (function() {
        return P
    })), n.d(e, "disableEmailSummarization", (function() {
        return M
    })), n.d(e, "saveEmailConnectednessData", (function() {
        return D
    })), n.d(e, "setEmogenieEmojiState", (function() {
        return R
    })), n.d(e, "seenClarityNotification", (function() {
        return F
    })), n.d(e, "showGmailSendEmailPremiumPopup", (function() {
        return L
    })), n.d(e, "setHideWelcomeEmogenieNotification", (function() {
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
        i = [r.CHANGE_WEAK_DIALECT, r.CHANGE_STRONG_DIALECT, r.SET_EMOGENIE_EMOJI_STATE],
        o = [r.TOGGLE_DEFS, r.TOGGLE_AUTOCORRECT, r.TOGGLE_SITE, r.TOGGLE_FIELD, r.SEEN_NEWS, r.SEEN_GDOCS_OPT_IN, r.SEEN_GDOCS_LARGE_DOCUMENT_WARNING, r.HIDE_GDOCS_SIGNIN_POPUP, r.CLICK_GDOCS_AUTHENTICATION, r.SET_GDOCS_ENABLED_SETTING, r.SET_GDOCS_OPT_IN, r.SET_GDOCS_OPT_OUT, r.SHOW_ONBOARDING, r.SEEN_ONBOARDING, r.SEEN_DELIGHTFUL_MESSAGE, r.SHOW_LOGIN_REMINDER, r.HIDE_LOGIN_REMINDER, r.DISABLE_LOGIN_REMINDER, r.SHOW_DISABLE_REMINDER, r.DISABLE_REMINDER_NOTIFICATION, r.DISABLE_EMAIL_SUMMARIZATION, r.EDGE_POPUP_FROM_GBUTTON, r.SHOW_DATA_CONTROL_POPUP, r.SEEN_CLARITY_NOTIFICATION, r.SHOW_GMAIL_SEND_EMAIL_PREMIUM_POPUP, r.SET_HIDE_WELCOME_EMOGENIE_NOTIFICATION];

    function a(t, e) {
        return {
            type: r.SET_DAPI_PROP,
            propKey: t,
            data: e
        }
    }

    function s(t) {
        return {
            type: r.CHANGE_WEAK_DIALECT,
            data: t
        }
    }

    function u(t) {
        return {
            type: r.CHANGE_STRONG_DIALECT,
            data: t
        }
    }

    function c(t) {
        return {
            type: r.SETTINGS_INITIAL,
            data: t
        }
    }

    function l(t) {
        return {
            type: r.TOGGLE_DEFS,
            enabledDefs: t
        }
    }

    function f(t) {
        return {
            type: r.TOGGLE_AUTOCORRECT,
            enabled: t
        }
    }

    function d(t, e) {
        return {
            type: r.TOGGLE_SITE,
            domain: e,
            enabled: t
        }
    }

    function p(t, e) {
        return {
            type: r.TOGGLE_FIELD,
            domain: e,
            data: t
        }
    }

    function h() {
        return {
            type: r.SEEN_NEWS
        }
    }

    function b() {
        return {
            type: r.SET_GDOCS_OPT_IN
        }
    }

    function m() {
        return {
            type: r.SET_GDOCS_OPT_OUT
        }
    }

    function g() {
        return {
            type: r.SEEN_GDOCS_OPT_IN
        }
    }

    function v() {
        return {
            type: r.SEEN_GDOCS_LARGE_DOCUMENT_WARNING
        }
    }

    function y() {
        return {
            type: r.HIDE_GDOCS_SIGNIN_POPUP
        }
    }

    function _() {
        return {
            type: r.CLICK_GDOCS_AUTHENTICATION
        }
    }

    function w() {
        return {
            type: r.SET_GDOCS_ENABLED_SETTING
        }
    }

    function E() {
        return {
            type: r.SHOW_ONBOARDING
        }
    }

    function O() {
        return {
            type: r.SEEN_ONBOARDING
        }
    }

    function x(t) {
        return {
            type: r.SEEN_DELIGHTFUL_MESSAGE,
            delightfulMessageId: t
        }
    }

    function S(t) {
        return {
            type: r.SHOW_NEWS,
            showNews: t
        }
    }

    function T(t) {
        return {
            type: r.SAVE_ANONYMOUS_PROPERTIES,
            props: t
        }
    }

    function k() {
        return {
            type: r.DISABLE_ON_TAB
        }
    }

    function C(t) {
        return {
            type: r.SHOW_DISABLE_REMINDER,
            domain: t
        }
    }

    function N(t) {
        return {
            type: r.DISABLE_REMINDER_NOTIFICATION,
            domain: t
        }
    }

    function j() {
        return {
            type: r.EDGE_POPUP_FROM_GBUTTON
        }
    }

    function I(t) {
        return {
            type: r.SHOW_LOGIN_REMINDER,
            loginReminderType: t
        }
    }

    function A() {
        return {
            type: r.HIDE_LOGIN_REMINDER
        }
    }

    function P() {
        return {
            type: r.DISABLE_LOGIN_REMINDER
        }
    }

    function M() {
        return {
            type: r.DISABLE_EMAIL_SUMMARIZATION
        }
    }

    function D(t) {
        return {
            type: r.SAVE_EMAIL_CONNECTEDNESS_DATA,
            emailConnectednessData: t
        }
    }

    function R(t) {
        return {
            type: r.SET_EMOGENIE_EMOJI_STATE,
            data: t
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
}, , function(t, e, n) {
    "use strict";
    var r = n(52),
        i = n(125),
        o = n(46),
        a = {};
    a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1;
    var s = n(268),
        u = n(226),
        c = u.a && u.a.isTypedArray,
        l = c ? Object(s.a)(c) : function(t) {
            return Object(o.a)(t) && Object(i.a)(t.length) && !!a[Object(r.a)(t)]
        };
    e.a = l
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return i
    }));
    var r = n(284);

    function i(t, e) {
        return function(n) {
            var i;
            if (i = "function" == typeof t ? t : function() {
                    return t
                }, "function" == typeof e) return n.lift(new o(i, e));
            var a = Object.create(n, r.b);
            return a.source = n, a.subjectFactory = i, a
        }
    }
    var o = function() {
        function t(t, e) {
            this.subjectFactory = t, this.selector = e
        }
        return t.prototype.call = function(t, e) {
            var n = this.selector,
                r = this.subjectFactory(),
                i = n(r).subscribe(t);
            return i.add(e.subscribe(r)), i
        }, t
    }()
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return s
    }));
    var r = n(14),
        i = n(42),
        o = n(94),
        a = n(37);

    function s(t, e, n, u) {
        return Object(o.a)(n) && (u = n, n = void 0), u ? s(t, e, n).pipe(Object(a.a)((function(t) {
            return Object(i.a)(t) ? u.apply(void 0, t) : u(t)
        }))) : new r.a((function(r) {
            ! function t(e, n, r, i, o) {
                var a;
                if (function(t) {
                        return t && "function" == typeof t.addEventListener && "function" == typeof t.removeEventListener
                    }(e)) {
                    var s = e;
                    e.addEventListener(n, r, o), a = function() {
                        return s.removeEventListener(n, r, o)
                    }
                } else if (function(t) {
                        return t && "function" == typeof t.on && "function" == typeof t.off
                    }(e)) {
                    var u = e;
                    e.on(n, r), a = function() {
                        return u.off(n, r)
                    }
                } else if (function(t) {
                        return t && "function" == typeof t.addListener && "function" == typeof t.removeListener
                    }(e)) {
                    var c = e;
                    e.addListener(n, r), a = function() {
                        return c.removeListener(n, r)
                    }
                } else {
                    if (!e || !e.length) throw new TypeError("Invalid event target");
                    for (var l = 0, f = e.length; l < f; l++) t(e[l], n, r, i, o)
                }
                i.add(a)
            }(t, e, (function(t) {
                arguments.length > 1 ? r.next(Array.prototype.slice.call(arguments)) : r.next(t)
            }), r, n)
        }))
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return "function" == typeof t
    }
    n.d(e, "a", (function() {
        return r
    }))
}, function(t, e, n) {
    "use strict";
    n.d(e, "b", (function() {
        return r
    })), n.d(e, "a", (function() {
        return s
    }));
    var r, i = n(48),
        o = n(118),
        a = n(220);
    r || (r = {});
    var s = function() {
        function t(t, e, n) {
            this.kind = t, this.value = e, this.error = n, this.hasValue = "N" === t
        }
        return t.prototype.observe = function(t) {
            switch (this.kind) {
                case "N":
                    return t.next && t.next(this.value);
                case "E":
                    return t.error && t.error(this.error);
                case "C":
                    return t.complete && t.complete()
            }
        }, t.prototype.do = function(t, e, n) {
            switch (this.kind) {
                case "N":
                    return t && t(this.value);
                case "E":
                    return e && e(this.error);
                case "C":
                    return n && n()
            }
        }, t.prototype.accept = function(t, e, n) {
            return t && "function" == typeof t.next ? this.observe(t) : this.do(t, e, n)
        }, t.prototype.toObservable = function() {
            switch (this.kind) {
                case "N":
                    return Object(o.a)(this.value);
                case "E":
                    return Object(a.a)(this.error);
                case "C":
                    return Object(i.b)()
            }
            throw new Error("unexpected notification kind value")
        }, t.createNext = function(e) {
            return void 0 !== e ? new t("N", e) : t.undefinedValueNotification
        }, t.createError = function(e) {
            return new t("E", void 0, e)
        }, t.createComplete = function() {
            return t.completeNotification
        }, t.completeNotification = new t("C"), t.undefinedValueNotification = new t("N", void 0), t
    }()
}, function(t, e, n) {
    "use strict";
    var r = n(57),
        i = n(36),
        o = Object(r.a)(i.a, "Map");
    e.a = o
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return r
    }));
    var r = "function" == typeof Symbol && Symbol.observable || "@@observable"
}, function(t, e, n) {
    "use strict";
    var r = n(109);
    e.a = function(t) {
        if ("string" == typeof t || Object(r.a)(t)) return t;
        var e = t + "";
        return "0" == e && 1 / t == -1 / 0 ? "-0" : e
    }
}, function(t, e, n) {
    "use strict";
    var r = n(52),
        i = n(46),
        o = function(t) {
            return Object(i.a)(t) && "[object Arguments]" == Object(r.a)(t)
        },
        a = Object.prototype,
        s = a.hasOwnProperty,
        u = a.propertyIsEnumerable,
        c = o(function() {
            return arguments
        }()) ? o : function(t) {
            return Object(i.a)(t) && s.call(t, "callee") && !u.call(t, "callee")
        };
    e.a = c
}, , function(t, e, n) {
    "use strict";

    function r(t) {
        return t
    }
    n.d(e, "a", (function() {
        return r
    }))
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return r
    }));
    var r = "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
}, function(t, e, n) {
    "use strict";

    function r(t) {
        setTimeout((function() {
            throw t
        }), 0)
    }
    n.d(e, "a", (function() {
        return r
    }))
}, , , function(t, e, n) {
    t.exports = {
        btnContainer: "kTiO8",
        container: "_3YMri",
        header: "_1FYmR",
        optInVideo: "_3uNsn",
        bold: "_1fnlS",
        button: "_2o8Lb",
        large: "_80wvm",
        optIn: "grYdT",
        note: "_3LTPz",
        offlineDialogHeader: "XAQhO",
        largeDocumentDialogHeader: "_3nE8t",
        dialogMessage: "_2VyIL",
        offlineDialogButton: "_fS1O"
    }
}, , function(t, e, n) {
    "use strict";
    var r = n(85),
        i = n(96),
        o = n(114);

    function a(t) {
        var e = this.__data__ = new r.a(t);
        this.size = e.size
    }
    a.prototype.clear = function() {
        this.__data__ = new r.a, this.size = 0
    }, a.prototype.delete = function(t) {
        var e = this.__data__,
            n = e.delete(t);
        return this.size = e.size, n
    }, a.prototype.get = function(t) {
        return this.__data__.get(t)
    }, a.prototype.has = function(t) {
        return this.__data__.has(t)
    }, a.prototype.set = function(t, e) {
        var n = this.__data__;
        if (n instanceof r.a) {
            var a = n.__data__;
            if (!i.a || a.length < 199) return a.push([t, e]), this.size = ++n.size, this;
            n = this.__data__ = new o.a(a)
        }
        return n.set(t, e), this.size = n.size, this
    }, e.a = a
}, function(t, e, n) {
    "use strict";
    var r = n(52),
        i = n(46);
    e.a = function(t) {
        return "symbol" == typeof t || Object(i.a)(t) && "[object Symbol]" == Object(r.a)(t)
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return r
    }));
    var r = function() {
        function t() {
            return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this
        }
        return t.prototype = Object.create(Error.prototype), t
    }()
}, , , , function(t, e, n) {
    "use strict";
    var r = n(57),
        i = Object(r.a)(Object, "create"),
        o = Object.prototype.hasOwnProperty,
        a = Object.prototype.hasOwnProperty;

    function s(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    s.prototype.clear = function() {
        this.__data__ = i ? i(null) : {}, this.size = 0
    }, s.prototype.delete = function(t) {
        var e = this.has(t) && delete this.__data__[t];
        return this.size -= e ? 1 : 0, e
    }, s.prototype.get = function(t) {
        var e = this.__data__;
        if (i) {
            var n = e[t];
            return "__lodash_hash_undefined__" === n ? void 0 : n
        }
        return o.call(e, t) ? e[t] : void 0
    }, s.prototype.has = function(t) {
        var e = this.__data__;
        return i ? void 0 !== e[t] : a.call(e, t)
    }, s.prototype.set = function(t, e) {
        var n = this.__data__;
        return this.size += this.has(t) ? 0 : 1, n[t] = i && void 0 === e ? "__lodash_hash_undefined__" : e, this
    };
    var u = s,
        c = n(85),
        l = n(96),
        f = function(t, e) {
            var n = t.__data__;
            return function(t) {
                var e = typeof t;
                return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
            }(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
        };

    function d(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    d.prototype.clear = function() {
        this.size = 0, this.__data__ = {
            hash: new u,
            map: new(l.a || c.a),
            string: new u
        }
    }, d.prototype.delete = function(t) {
        var e = f(this, t).delete(t);
        return this.size -= e ? 1 : 0, e
    }, d.prototype.get = function(t) {
        return f(this, t).get(t)
    }, d.prototype.has = function(t) {
        return f(this, t).has(t)
    }, d.prototype.set = function(t, e) {
        var n = f(this, t),
            r = n.size;
        return n.set(t, e), this.size += n.size == r ? 0 : 1, this
    }, e.a = d
}, , , function(t, e, n) {
    "use strict";
    e.a = function(t) {
        return t
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return a
    }));
    var r = n(55),
        i = n(133),
        o = n(225);

    function a() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = t[t.length - 1];
        return Object(r.a)(n) ? (t.pop(), Object(o.a)(t, n)) : Object(i.a)(t)
    }
}, , function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return a
    })), n.d(e, "b", (function() {
        return s
    }));
    var r = n(447),
        i = n(16);
    const o = Object(i.r)();

    function a(t, e, n, i, s = !1) {
        if (null == t) return;
        const u = t;
        if ("string" != typeof e) return Object(r.a)(e, (t, e) => {
            a(u, e, t, i)
        }); {
            if (!n) return;
            const t = u[o] || [];
            return u[o] = t, i ? (u[o] = t.filter(t => !(t.event === e && t.cb === n)), u.removeEventListener(e, n, s)) : (t.push({
                event: e,
                cb: n
            }), u.addEventListener(e, n, s)), {
                el: u,
                event: e,
                cb: n,
                bubble: s
            }
        }
    }

    function s(t, e, n, r) {
        const i = t;
        e || null == i[o] ? a(i, e, n, !0, r) : i[o].forEach(t => s(i, t.event, t.cb, t.bubble))
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return l
    })), n.d(e, "b", (function() {
        return f
    }));
    var r = n(17),
        i = n(65),
        o = n(349),
        a = n(156),
        s = n(10);
    const u = n(12).a.create("lib.tracking.logger");
    let c;

    function l() {
        return c || (c = new o.a(i.b.sendFelog.bind(i.b), i.b.sendFelogUsageEvent.bind(i.b), i.b.setUserId.bind(i.b), i.b.setContainerId.bind(i.b), r.a().appConfig.felog.sendUsageMetrics, a.a.create(window.performance), r.a().appConfig.felog.sendPerfMetrics, i.b.sendFelogEvent.bind(i.b), i.b.sendFelogCrashLogs.bind(i.b))), c
    }

    function f() {
        Object(s.i)() && (u.info("Installing unhandled error loggers..."), function() {
            const t = l();
            window.addEventListener("error", e => t.unhandledBgPageException(e)), window.addEventListener("unhandledrejection", e => t.unhandledBgPageRejection(e))
        }())
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return c
    }));
    var r = n(2),
        i = n(18),
        o = n(20),
        a = n(81),
        s = n(37),
        u = n(62);

    function c(t, e, n) {
        return void 0 === n && (n = Number.POSITIVE_INFINITY), "function" == typeof e ? function(r) {
            return r.pipe(c((function(n, r) {
                return Object(u.a)(t(n, r)).pipe(Object(s.a)((function(t, i) {
                    return e(n, t, r, i)
                })))
            }), n))
        } : ("number" == typeof e && (n = e), function(e) {
            return e.lift(new l(t, n))
        })
    }
    var l = function() {
            function t(t, e) {
                void 0 === e && (e = Number.POSITIVE_INFINITY), this.project = t, this.concurrent = e
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new f(t, this.project, this.concurrent))
            }, t
        }(),
        f = function(t) {
            function e(e, n, r) {
                void 0 === r && (r = Number.POSITIVE_INFINITY);
                var i = t.call(this, e) || this;
                return i.project = n, i.concurrent = r, i.hasCompleted = !1, i.buffer = [], i.active = 0, i.index = 0, i
            }
            return r.a(e, t), e.prototype._next = function(t) {
                this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t)
            }, e.prototype._tryNext = function(t) {
                var e, n = this.index++;
                try {
                    e = this.project(t, n)
                } catch (t) {
                    return void this.destination.error(t)
                }
                this.active++, this._innerSub(e, t, n)
            }, e.prototype._innerSub = function(t, e, n) {
                var r = new a.a(this, void 0, void 0);
                this.destination.add(r), Object(i.a)(this, t, e, n, r)
            }, e.prototype._complete = function() {
                this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe()
            }, e.prototype.notifyNext = function(t, e, n, r, i) {
                this.destination.next(e)
            }, e.prototype.notifyComplete = function(t) {
                var e = this.buffer;
                this.remove(t), this.active--, e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
            }, e
        }(o.a)
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return r
    }));
    var r = function() {
        function t() {
            return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this
        }
        return t.prototype = Object.create(Error.prototype), t
    }()
}, , function(t, e, n) {
    "use strict";
    e.a = function(t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
    }
}, function(t, e, n) {
    "use strict";
    var r = /^(?:0|[1-9]\d*)$/;
    e.a = function(t, e) {
        var n = typeof t;
        return !!(e = null == e ? 9007199254740991 : e) && ("number" == n || "symbol" != n && r.test(t)) && t > -1 && t % 1 == 0 && t < e
    }
}, , function(t, e, n) {
    "use strict";
    var r = Object.prototype;
    e.a = function(t) {
        var e = t && t.constructor;
        return t === ("function" == typeof e && e.prototype || r)
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return o
    }));
    var r = n(118),
        i = n(286);

    function o() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return Object(i.a)()(r.a.apply(void 0, t))
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return o
    }));
    var r = n(2),
        i = n(11);

    function o(t, e) {
        return function(n) {
            return n.lift(new a(t, e))
        }
    }
    var a = function() {
            function t(t, e) {
                this.compare = t, this.keySelector = e
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new s(t, this.compare, this.keySelector))
            }, t
        }(),
        s = function(t) {
            function e(e, n, r) {
                var i = t.call(this, e) || this;
                return i.keySelector = r, i.hasKey = !1, "function" == typeof n && (i.compare = n), i
            }
            return r.a(e, t), e.prototype.compare = function(t, e) {
                return t === e
            }, e.prototype._next = function(t) {
                var e;
                try {
                    var n = this.keySelector;
                    e = n ? n(t) : t
                } catch (t) {
                    return this.destination.error(t)
                }
                var r = !1;
                if (this.hasKey) try {
                    r = (0, this.compare)(this.key, e)
                } catch (t) {
                    return this.destination.error(t)
                } else this.hasKey = !0;
                r || (this.key = e, this.destination.next(t))
            }, e
        }(i.a)
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return r
    }));
    var r = function() {
        function t() {
            return Error.call(this), this.message = "no elements in sequence", this.name = "EmptyError", this
        }
        return t.prototype = Object.create(Error.prototype), t
    }()
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return o
    }));
    var r = n(2),
        i = n(11);

    function o(t) {
        return void 0 === t && (t = null),
            function(e) {
                return e.lift(new a(t))
            }
    }
    var a = function() {
            function t(t) {
                this.defaultValue = t
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new s(t, this.defaultValue))
            }, t
        }(),
        s = function(t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                return r.defaultValue = n, r.isEmpty = !0, r
            }
            return r.a(e, t), e.prototype._next = function(t) {
                this.isEmpty = !1, this.destination.next(t)
            }, e.prototype._complete = function() {
                this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete()
            }, e
        }(i.a)
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return a
    }));
    var r = n(14),
        i = n(294),
        o = n(225);

    function a(t, e) {
        return e ? Object(o.a)(t, e) : new r.a(Object(i.a)(t))
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return o
    }));
    var r = n(2),
        i = n(253),
        o = function(t) {
            function e(n, r) {
                void 0 === r && (r = i.a.now);
                var o = t.call(this, n, (function() {
                    return e.delegate && e.delegate !== o ? e.delegate.now() : r()
                })) || this;
                return o.actions = [], o.active = !1, o.scheduled = void 0, o
            }
            return r.a(e, t), e.prototype.schedule = function(n, r, i) {
                return void 0 === r && (r = 0), e.delegate && e.delegate !== this ? e.delegate.schedule(n, r, i) : t.prototype.schedule.call(this, n, r, i)
            }, e.prototype.flush = function(t) {
                var e = this.actions;
                if (this.active) e.push(t);
                else {
                    var n;
                    this.active = !0;
                    do {
                        if (n = t.execute(t.state, t.delay)) break
                    } while (t = e.shift());
                    if (this.active = !1, n) {
                        for (; t = e.shift();) t.unsubscribe();
                        throw n
                    }
                }
            }, e
        }(i.a)
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return a
    }));
    var r = n(2),
        i = n(33),
        o = n(28),
        a = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.value = null, e.hasNext = !1, e.hasCompleted = !1, e
            }
            return r.a(e, t), e.prototype._subscribe = function(e) {
                return this.hasError ? (e.error(this.thrownError), o.a.EMPTY) : this.hasCompleted && this.hasNext ? (e.next(this.value), e.complete(), o.a.EMPTY) : t.prototype._subscribe.call(this, e)
            }, e.prototype.next = function(t) {
                this.hasCompleted || (this.value = t, this.hasNext = !0)
            }, e.prototype.error = function(e) {
                this.hasCompleted || t.prototype.error.call(this, e)
            }, e.prototype.complete = function() {
                this.hasCompleted = !0, this.hasNext && t.prototype.next.call(this, this.value), t.prototype.complete.call(this)
            }, e
        }(i.a)
}, function(t, e, n) {
    "use strict";
    var r = n(2),
        i = function(t) {
            function e(e, n) {
                return t.call(this) || this
            }
            return r.a(e, t), e.prototype.schedule = function(t, e) {
                return void 0 === e && (e = 0), this
            }, e
        }(n(28).a);
    n.d(e, "a", (function() {
        return o
    }));
    var o = function(t) {
        function e(e, n) {
            var r = t.call(this, e, n) || this;
            return r.scheduler = e, r.work = n, r.pending = !1, r
        }
        return r.a(e, t), e.prototype.schedule = function(t, e) {
            if (void 0 === e && (e = 0), this.closed) return this;
            this.state = t;
            var n = this.id,
                r = this.scheduler;
            return null != n && (this.id = this.recycleAsyncId(r, n, e)), this.pending = !0, this.delay = e, this.id = this.id || this.requestAsyncId(r, this.id, e), this
        }, e.prototype.requestAsyncId = function(t, e, n) {
            return void 0 === n && (n = 0), setInterval(t.flush.bind(t, this), n)
        }, e.prototype.recycleAsyncId = function(t, e, n) {
            if (void 0 === n && (n = 0), null !== n && this.delay === n && !1 === this.pending) return e;
            clearInterval(e)
        }, e.prototype.execute = function(t, e) {
            if (this.closed) return new Error("executing a cancelled action");
            this.pending = !1;
            var n = this._execute(t, e);
            if (n) return n;
            !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
        }, e.prototype._execute = function(t, e) {
            var n = !1,
                r = void 0;
            try {
                this.work(t)
            } catch (t) {
                n = !0, r = !!t && t || new Error(t)
            }
            if (n) return this.unsubscribe(), r
        }, e.prototype._unsubscribe = function() {
            var t = this.id,
                e = this.scheduler,
                n = e.actions,
                r = n.indexOf(this);
            this.work = null, this.state = null, this.pending = !1, this.scheduler = null, -1 !== r && n.splice(r, 1), null != t && (this.id = this.recycleAsyncId(e, t, null)), this.delay = null
        }, e
    }(i)
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return r
    }));
    var r = "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random()
}, function(t, e, n) {
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
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return i
    }));
    var r = n(42);

    function i(t) {
        return !Object(r.a)(t) && t - parseFloat(t) + 1 >= 0
    }
}, , function(t, e, n) {
    "use strict";
    var r = n(27),
        i = n(109),
        o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        a = /^\w*$/;
    e.a = function(t, e) {
        if (Object(r.a)(t)) return !1;
        var n = typeof t;
        return !("number" != n && "symbol" != n && "boolean" != n && null != t && !Object(i.a)(t)) || a.test(t) || !o.test(t) || null != e && t in Object(e)
    }
}, function(t, e, n) {
    "use strict";
    var r = n(212),
        i = n(256),
        o = n(77);
    e.a = function(t) {
        return Object(o.a)(t) ? Object(r.a)(t) : Object(i.a)(t)
    }
}, function(t, e, n) {
    "use strict";
    var r = n(108),
        i = n(292),
        o = function(t, e) {
            for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)
                if (e(t[n], n, t)) return !0;
            return !1
        },
        a = n(278),
        s = function(t, e, n, r, s, u) {
            var c = 1 & n,
                l = t.length,
                f = e.length;
            if (l != f && !(c && f > l)) return !1;
            var d = u.get(t);
            if (d && u.get(e)) return d == e;
            var p = -1,
                h = !0,
                b = 2 & n ? new i.a : void 0;
            for (u.set(t, e), u.set(e, t); ++p < l;) {
                var m = t[p],
                    g = e[p];
                if (r) var v = c ? r(g, m, p, e, t, u) : r(m, g, p, t, e, u);
                if (void 0 !== v) {
                    if (v) continue;
                    h = !1;
                    break
                }
                if (b) {
                    if (!o(e, (function(t, e) {
                            if (!Object(a.a)(b, e) && (m === t || s(m, t, n, r, u))) return b.push(e)
                        }))) {
                        h = !1;
                        break
                    }
                } else if (m !== g && !s(m, g, n, r, u)) {
                    h = !1;
                    break
                }
            }
            return u.delete(t), u.delete(e), h
        },
        u = n(59),
        c = n(152),
        l = n(84),
        f = function(t) {
            var e = -1,
                n = Array(t.size);
            return t.forEach((function(t, r) {
                n[++e] = [r, t]
            })), n
        },
        d = function(t) {
            var e = -1,
                n = Array(t.size);
            return t.forEach((function(t) {
                n[++e] = t
            })), n
        },
        p = u.a ? u.a.prototype : void 0,
        h = p ? p.valueOf : void 0,
        b = function(t, e, n, r, i, o, a) {
            switch (n) {
                case "[object DataView]":
                    if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                    t = t.buffer, e = e.buffer;
                case "[object ArrayBuffer]":
                    return !(t.byteLength != e.byteLength || !o(new c.a(t), new c.a(e)));
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
                    var u = f;
                case "[object Set]":
                    var p = 1 & r;
                    if (u || (u = d), t.size != e.size && !p) return !1;
                    var b = a.get(t);
                    if (b) return b == e;
                    r |= 2, a.set(t, e);
                    var m = s(u(t), u(e), r, i, o, a);
                    return a.delete(t), m;
                case "[object Symbol]":
                    if (h) return h.call(t) == h.call(e)
            }
            return !1
        },
        m = n(271),
        g = n(27),
        v = Object.prototype.propertyIsEnumerable,
        y = Object.getOwnPropertySymbols,
        _ = y ? function(t) {
            return null == t ? [] : (t = Object(t), function(t, e) {
                for (var n = -1, r = null == t ? 0 : t.length, i = 0, o = []; ++n < r;) {
                    var a = t[n];
                    e(a, n, t) && (o[i++] = a)
                }
                return o
            }(y(t), (function(e) {
                return v.call(t, e)
            })))
        } : function() {
            return []
        },
        w = n(142),
        E = function(t) {
            return function(t, e, n) {
                var r = e(t);
                return Object(g.a)(t) ? r : Object(m.a)(r, n(t))
            }(t, w.a, _)
        },
        O = Object.prototype.hasOwnProperty,
        x = n(202),
        S = n(82),
        T = n(91),
        k = "[object Arguments]",
        C = "[object Array]",
        N = "[object Object]",
        j = Object.prototype.hasOwnProperty,
        I = function(t, e, n, i, o, a) {
            var u = Object(g.a)(t),
                c = Object(g.a)(e),
                l = u ? C : Object(x.a)(t),
                f = c ? C : Object(x.a)(e),
                d = (l = l == k ? N : l) == N,
                p = (f = f == k ? N : f) == N,
                h = l == f;
            if (h && Object(S.a)(t)) {
                if (!Object(S.a)(e)) return !1;
                u = !0, d = !1
            }
            if (h && !d) return a || (a = new r.a), u || Object(T.a)(t) ? s(t, e, n, i, o, a) : b(t, e, l, n, i, o, a);
            if (!(1 & n)) {
                var m = d && j.call(t, "__wrapped__"),
                    v = p && j.call(e, "__wrapped__");
                if (m || v) {
                    var y = m ? t.value() : t,
                        _ = v ? e.value() : e;
                    return a || (a = new r.a), o(y, _, n, i, a)
                }
            }
            return !!h && (a || (a = new r.a), function(t, e, n, r, i, o) {
                var a = 1 & n,
                    s = E(t),
                    u = s.length;
                if (u != E(e).length && !a) return !1;
                for (var c = u; c--;) {
                    var l = s[c];
                    if (!(a ? l in e : O.call(e, l))) return !1
                }
                var f = o.get(t);
                if (f && o.get(e)) return f == e;
                var d = !0;
                o.set(t, e), o.set(e, t);
                for (var p = a; ++c < u;) {
                    var h = t[l = s[c]],
                        b = e[l];
                    if (r) var m = a ? r(b, h, l, e, t, o) : r(h, b, l, t, e, o);
                    if (!(void 0 === m ? h === b || i(h, b, n, r, o) : m)) {
                        d = !1;
                        break
                    }
                    p || (p = "constructor" == l)
                }
                if (d && !p) {
                    var g = t.constructor,
                        v = e.constructor;
                    g != v && "constructor" in t && "constructor" in e && !("function" == typeof g && g instanceof g && "function" == typeof v && v instanceof v) && (d = !1)
                }
                return o.delete(t), o.delete(e), d
            }(t, e, n, i, o, a))
        },
        A = n(46);
    e.a = function t(e, n, r, i, o) {
        return e === n || (null == e || null == n || !Object(A.a)(e) && !Object(A.a)(n) ? e != e && n != n : I(e, n, r, i, t, o))
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return c
    })), n.d(e, "b", (function() {
        return l
    }));
    var r = n(167),
        i = n(194),
        o = n(25),
        a = n(177),
        s = n(17),
        u = n(145);
    class c {
        constructor(t) {
            const e = t.testArgs,
                n = e && e.processEnv ? e.processEnv : u.b.fromBrowserify(),
                c = u.a.getTargetEnv(n),
                l = "edge" === t.browser || e && e.forceEdgeCompatLoggingMode,
                f = "prod" !== c || "cs" !== t.context,
                d = {
                    create: t => new r.b(t, {
                        writer: new a.a(l),
                        filterFn: f ? t => !0 : Object(i.a)(o.a.ERROR)
                    })
                },
                p = Object(s.b)(t.browser, t.context, n, c);
            this.config = p, this.logger = d
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
        return c.getInstance()
    }
}, function(t, e, n) {
    "use strict";
    var r, i = n(4);
    ! function(t) {
        t.create = function(t, e, n, r, i) {
            const o = `https://www.${t}`,
                a = `https://data.${t}`,
                s = `https://app.${t}`,
                u = `https://auth.${t}/v3`;
            return {
                app: s,
                appPersonalDictionary: `https://account.${t}/customize`,
                capi: `wss://capi.${t}/freews`,
                capiGDocs: `wss://capi.${t}/gdocs`,
                dapiMimic: `${a}/api/mimic`,
                dapiProps: `${a}/api/props/v2`,
                dapiFindProps: `${a}/api/props/v2/find`,
                editorDictionary: `${s}/profile/dictionary`,
                dictionary: `https://capi.${t}/api/defs`,
                docs: `${s}/docs`,
                docsApi: `https://dox.${t}/documents`,
                newDoc: `${s}/docs/new`,
                userOrAnonymous: `${u}/user/oranonymous`,
                authSignin: `${u}/api/login`,
                authSignup: `${u}/api/signup`,
                authExchange: `${u}/api/unified-login/code/exchange`,
                authLogout: `${u}/logout`,
                signin: `${o}/signin`,
                signup: `${o}/signup`,
                fbSignin: `${o}/signin?fromExtensionFb=true`,
                fbSignup: `${o}/signup?fromExtensionFb=true`,
                googleSignin: `${o}/signin?fromExtensionGoogle=true`,
                googleSignup: `${o}/signup?fromExtensionGoogle=true`,
                resetPassword: `${o}/resetpassword`,
                newFelog: e,
                sumoLogic: n,
                welcomeC: `${o}/extension-success`,
                afterInstall: `${o}/after_install_page`,
                upgrade: `${o}/upgrade`,
                premium: `${o}/business/plans/i`,
                planComparison: `${o}/plans/t`,
                plansEnterprise: `${o}/plans/n`,
                uninstall: `${o}/extension-uninstall`,
                terms: `${o}/terms`,
                policy: `${o}/privacy-policy`,
                extensionSuccess: `${o}/extension-success`,
                firefoxPrivatePolicy: "https://addons.mozilla.org/en-US/firefox/addon/grammarly-1/privacy/",
                dynamicConfigUrl: "https://d3cv4a9a9wh0bt.cloudfront.net/dynamicConfig.json",
                pageConfigUrl: "https://d3cv4a9a9wh0bt.cloudfront.net/browserplugin/config.json",
                edgePopupUrl: r,
                emptyScriptUrl: i,
                grammarlyDomain: t,
                grammarlyProtocol: "https:"
            }
        }
    }(r || (r = {}));
    var o, a, s, u, c, l, f = n(58);
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
    }(o || (o = {})),
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
    }(a || (a = {})),
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
    }(u || (u = {})),
    function(t) {
        t.create = function(t) {
            return {
                gdocsSupported: "chrome" === t || "firefox" === t || "safari" === t
            }
        }
    }(c || (c = {})),
    function(t) {
        const e = "grammarly.com";
        t.create = function(t, n, s, l) {
            const f = "prod" === n ? "https://f-log-extension.grammarly.io" : "qa" === n || "dev" === n ? "https://127.0.0.1:8000" : Object(i.g)(n),
                d = "prod" === n ? "https://endpoint2.collection.us2.sumologic.com/receiver/v1/http/ZaVnC4dhaV1OF-4ic11yqpre0casnyvs_ZoaCHciEYdRyBkrfwP6DMlsWt8tSVU76RPqgGvAGjXGQk_UNuxPx-pYbToJapM_Fr0CUcgKaA8_IVl-lhSr5Q==" : "qa" === n || "dev" === n ? "https://127.0.0.1:8000" : Object(i.g)(n),
                p = "prod" === n ? e : "qa" === n || "dev" === n ? "qagr.io" : Object(i.g)(n);
            return {
                url: r.create(e, f, d, s, l),
                gnar: o.create(t, p),
                felog: a.create(t, n),
                capi: u.create(),
                extensionId: "87677a2c52b84ad3a151a4a72f5bd3c4",
                newsVersion: 0,
                features: c.create(t)
            }
        }
    }(l || (l = {}));
    var d, p, h, b, m, g, v, y, _, w, E, O, x, S, T = n(236);
    (p = d || (d = {})).create = function(t, e, n, r, i, o, a) {
            const s = void 0 !== o && void 0 !== a ? o : "UNVERSIONED",
                u = `${t}.${e}.${n}`;
            return {
                version: u,
                fullVersion: `${u}-${[r,["prod"!==i?i:null,s!==r?s:null].filter(t=>!!t).join(".")].filter(t=>""!==t).join("/")}`,
                commitHash: a,
                gitBranch: o
            }
        }, p.getManifestVersion = function(t, e, n) {
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
                        return T.a.runtime.getManifest().version;
                    case "edge":
                        return n.edge.runtime.getManifest().version;
                    default:
                        return Object(i.g)(t)
            }
        }, (b = h || (h = {})).create = function(t) {
            return Object(i.n)(["chrome", "safari", "firefox", "edge"], t)
        }, b.detect = function(t) {
            return t.chrome && /google/i.test(t.navigator.vendor) ? "chrome" : -1 !== t.navigator.userAgent.indexOf("Firefox") ? "firefox" : /^((?!chrome).)*safari/i.test(t.navigator.userAgent) ? "safari" : "Netscape" === t.navigator.appName && t.navigator.appVersion.indexOf("Edge") > -1 ? "edge" : void 0
        }, (m || (m = {})).create = function(t) {
            return Object(i.n)(["dev", "prod", "qa"], t)
        }, (v = g || (g = {})).create = function(t) {
            return Object(i.n)(["bg", "cs", "popup"], t)
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
                type: h.detect(t) || "other"
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
        }(E || (E = {})), n.d(e, "b", (function() {
            return O
        })), n.d(e, "a", (function() {
            return x
        })),
        function(t) {
            function e(t, e, n, r, i, o, a, s) {
                return {
                    env: t,
                    major_number: e,
                    build_number: n,
                    release_number: r,
                    git_branch: i,
                    git_commit: o,
                    edge_popup_url: a,
                    empty_script_url: s
                }
            }
            t.create = e, t.fromBrowserify = function() {
                return e("prod", "14", "947", "0", "UNVERSIONED", "UNVERSIONED", "", "")
            }
        }(O || (O = {})), (S = x || (x = {})).getTargetEnv = function(t) {
            if (!t.env) throw new Error("processEnv.env is null or undefined");
            const e = m.create(t.env);
            if (!e) throw new Error(`Invalid processEnv.env: ${t.env}`);
            return e
        }, S.create = function(t, e, n, r) {
            const o = [n.major_number, n.build_number, n.release_number].map(i.m);
            let a;
            if (3 === o.length && o.every(t => void 0 !== t)) a = o;
            else {
                let n;
                try {
                    n = d.getManifestVersion(t, e, window)
                } catch (t) {}
                const r = (n || "").split(".").map(i.m);
                a = 3 === r.length && r.every(t => void 0 !== t) ? r : [0, 0, 0]
            }
            const [s, u, c] = a;
            return {
                buildInfo: d.create(s, u, c, t, r, n.git_branch, n.git_commit),
                bundleInfo: y.create(t, r, e),
                appConfig: l.create(t, r, n.edge_popup_url, n.empty_script_url),
                systemInfo: E.create(window)
            }
        }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return o
    }));
    var r = n(53),
        i = n(103),
        o = {
            closed: !0,
            next: function(t) {},
            error: function(t) {
                if (r.a.useDeprecatedSynchronousErrorHandling) throw t;
                Object(i.a)(t)
            },
            complete: function() {}
        }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return c
    }));
    var r = n(2),
        i = n(20),
        o = n(81),
        a = n(18),
        s = n(37),
        u = n(62);

    function c(t, e) {
        return "function" == typeof e ? function(n) {
            return n.pipe(c((function(n, r) {
                return Object(u.a)(t(n, r)).pipe(Object(s.a)((function(t, i) {
                    return e(n, t, r, i)
                })))
            })))
        } : function(e) {
            return e.lift(new l(t))
        }
    }
    var l = function() {
            function t(t) {
                this.project = t
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new f(t, this.project))
            }, t
        }(),
        f = function(t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                return r.project = n, r.index = 0, r
            }
            return r.a(e, t), e.prototype._next = function(t) {
                var e, n = this.index++;
                try {
                    e = this.project(t, n)
                } catch (t) {
                    return void this.destination.error(t)
                }
                this._innerSub(e, t, n)
            }, e.prototype._innerSub = function(t, e, n) {
                var r = this.innerSubscription;
                r && r.unsubscribe();
                var i = new o.a(this, void 0, void 0);
                this.destination.add(i), this.innerSubscription = Object(a.a)(this, t, e, n, i)
            }, e.prototype._complete = function() {
                var e = this.innerSubscription;
                e && !e.closed || t.prototype._complete.call(this), this.unsubscribe()
            }, e.prototype._unsubscribe = function() {
                this.innerSubscription = null
            }, e.prototype.notifyComplete = function(e) {
                this.destination.remove(e), this.innerSubscription = null, this.isStopped && t.prototype._complete.call(this)
            }, e.prototype.notifyNext = function(t, e, n, r, i) {
                this.destination.next(e)
            }, e
        }(i.a)
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return s
    }));
    var r = n(14),
        i = n(55),
        o = n(221),
        a = n(133);

    function s() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = Number.POSITIVE_INFINITY,
            s = null,
            u = t[t.length - 1];
        return Object(i.a)(u) ? (s = t.pop(), t.length > 1 && "number" == typeof t[t.length - 1] && (n = t.pop())) : "number" == typeof u && (n = t.pop()), null === s && 1 === t.length && t[0] instanceof r.a ? t[0] : Object(o.a)(n)(Object(a.a)(t, s))
    }
}, , function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return r
    }));
    const r = {}
}, function(t, e, n) {
    "use strict";
    n.d(e, "b", (function() {
        return l
    })), n.d(e, "a", (function() {
        return f
    }));
    var r = n(2),
        i = n(55),
        o = n(42),
        a = n(20),
        s = n(18),
        u = n(133),
        c = {};

    function l() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = null,
            r = null;
        return Object(i.a)(t[t.length - 1]) && (r = t.pop()), "function" == typeof t[t.length - 1] && (n = t.pop()), 1 === t.length && Object(o.a)(t[0]) && (t = t[0]), Object(u.a)(t, r).lift(new f(n))
    }
    var f = function() {
            function t(t) {
                this.resultSelector = t
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new d(t, this.resultSelector))
            }, t
        }(),
        d = function(t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                return r.resultSelector = n, r.active = 0, r.values = [], r.observables = [], r
            }
            return r.a(e, t), e.prototype._next = function(t) {
                this.values.push(c), this.observables.push(t)
            }, e.prototype._complete = function() {
                var t = this.observables,
                    e = t.length;
                if (0 === e) this.destination.complete();
                else {
                    this.active = e, this.toRespond = e;
                    for (var n = 0; n < e; n++) {
                        var r = t[n];
                        this.add(Object(s.a)(this, r, r, n))
                    }
                }
            }, e.prototype.notifyComplete = function(t) {
                0 == (this.active -= 1) && this.destination.complete()
            }, e.prototype.notifyNext = function(t, e, n, r, i) {
                var o = this.values,
                    a = o[n],
                    s = this.toRespond ? a === c ? --this.toRespond : this.toRespond : 0;
                o[n] = e, 0 === s && (this.resultSelector ? this._tryResultSelector(o) : this.destination.next(o.slice()))
            }, e.prototype._tryResultSelector = function(t) {
                var e;
                try {
                    e = this.resultSelector.apply(this, t)
                } catch (t) {
                    return void this.destination.error(t)
                }
                this.destination.next(e)
            }, e
        }(a.a)
}, function(t, e, n) {
    "use strict";
    var r = n(36).a.Uint8Array;
    e.a = r
}, , , , function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return r
    }));
    var r, i = n(12),
        o = n(4);
    class a {
        constructor(t) {
            this._perf = t, this._log = i.a.create("cs.telemetry.PerformanceMetricsImpl")
        }
        flushMeasures(t) {
            try {
                const e = this._perf.getEntriesByName(t, "measure");
                return this._perf.clearMeasures(t), e.map(t => t.duration)
            } catch (t) {
                return this._log.warn("failed to retrieve perf measurements", t), []
            }
        }
        startMeasure(t) {
            const e = Math.random(),
                n = `__${t}_${e}-start`,
                r = `__${t}_${e}-end`;
            try {
                this._perf.mark(n)
            } catch (t) {
                return this._log.warn("could not start measure – ignoring measurement", t), {
                    endMeasure: o.l
                }
            }
            let i = !1;
            return {
                endMeasure: () => {
                    if (!i) {
                        i = !0;
                        try {
                            this._perf.mark(r), this._perf.measure(t, n, r)
                        } catch (t) {
                            this._log.warn("could not complete measure", t)
                        }
                    }
                }
            }
        }
        measure(t, e) {
            const n = `__${t}-start`,
                r = `__${t}-end`;
            try {
                this._perf.mark(n)
            } catch (t) {
                return this._log.warn("could not start measure – ignoring measurement", t), e()
            }
            try {
                return e()
            } finally {
                try {
                    this._perf.mark(r), this._perf.measure(t, n, r)
                } catch (t) {
                    this._log.warn("could not complete measure", t)
                }
            }
        }
    }! function(t) {
        t.dummy = {
            flushMeasures: t => [],
            measure: (t, e) => e(),
            startMeasure: t => ({
                endMeasure() {}
            })
        }, t.create = function(e) {
            return void 0 !== e ? new a(e) : t.dummy
        }, t.getStats = function(t) {
            if (0 === t.length) return {
                ct: 0
            }; {
                const e = t.reduce((t, e) => Math.min(t, e), Number.MAX_VALUE),
                    n = t.reduce((t, e) => Math.max(t, e), Number.MIN_VALUE),
                    r = t.length >= 6 ? t.reduce((t, e) => t + e, 0) / t.length : void 0;
                return {
                    ct: t.length,
                    min: e,
                    max: n,
                    range: n - e,
                    avg: r,
                    stddev: void 0 !== r && t.length > 1 ? Math.sqrt(t.reduce((t, e) => t + Math.pow(e - r, 2), 0) / (t.length - 1)) : void 0
                }
            }
        }
    }(r || (r = {}))
}, function(t, e, n) {
    "use strict";
    var r = n(182),
        i = Object(r.a)(Object.getPrototypeOf, Object);
    e.a = i
}, , function(t, e) {
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
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return i
    })), n.d(e, "b", (function() {
        return o
    }));
    var r = n(75);

    function i() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return o(t)
    }

    function o(t) {
        return t ? 1 === t.length ? t[0] : function(e) {
            return t.reduce((function(t, e) {
                return e(t)
            }), e)
        } : r.a
    }
}, , , , , function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return a
    }));
    var r = n(2),
        i = n(131),
        o = n(11);

    function a(t) {
        return void 0 === t && (t = c),
            function(e) {
                return e.lift(new s(t))
            }
    }
    var s = function() {
            function t(t) {
                this.errorFactory = t
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new u(t, this.errorFactory))
            }, t
        }(),
        u = function(t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                return r.errorFactory = n, r.hasValue = !1, r
            }
            return r.a(e, t), e.prototype._next = function(t) {
                this.hasValue = !0, this.destination.next(t)
            }, e.prototype._complete = function() {
                if (this.hasValue) return this.destination.complete();
                var t = void 0;
                try {
                    t = this.errorFactory()
                } catch (e) {
                    t = e
                }
                this.destination.error(t)
            }, e
        }(o.a);

    function c() {
        return new i.a
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return s
    }));
    var r = n(2),
        i = n(11),
        o = n(123),
        a = n(48);

    function s(t) {
        return function(e) {
            return 0 === t ? Object(a.b)() : e.lift(new u(t))
        }
    }
    var u = function() {
            function t(t) {
                if (this.total = t, this.total < 0) throw new o.a
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new c(t, this.total))
            }, t
        }(),
        c = function(t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                return r.total = n, r.count = 0, r
            }
            return r.a(e, t), e.prototype._next = function(t) {
                var e = this.total,
                    n = ++this.count;
                n <= e && (this.destination.next(t), n === e && (this.destination.complete(), this.unsubscribe()))
            }, e
        }(i.a)
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return o
    })), n.d(e, "b", (function() {
        return a
    }));
    var r = n(25);
    class i {
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
            const i = {
                level: t,
                loggerName: this.name,
                message: e,
                timestamp: new Date
            };
            n && (this._isError(n) ? i.exception = n : i.data = n), i.data = i.data || r, this.handleEvent(i)
        }
    }
    class o {
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
    class a extends i {
        constructor(t, e) {
            super(t), this._config = e
        }
        handleEvent(t) {
            this._config.filterFn(t) && this._config.writer.write(t)
        }
    }
}, function(t, e, n) {
    "use strict";
    (function(t) {
        var n = "object" == typeof t && t && t.Object === Object && t;
        e.a = n
    }).call(this, n(159))
}, function(t, e, n) {
    "use strict";
    var r = n(171);
    e.a = function(t, e, n) {
        "__proto__" == e && r.a ? Object(r.a)(t, e, {
            configurable: !0,
            enumerable: !0,
            value: n,
            writable: !0
        }) : t[e] = n
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return o
    }));
    var r = n(2),
        i = n(11);

    function o(t, e) {
        var n = !1;
        return arguments.length >= 2 && (n = !0),
            function(r) {
                return r.lift(new a(t, e, n))
            }
    }
    var a = function() {
            function t(t, e, n) {
                void 0 === n && (n = !1), this.accumulator = t, this.seed = e, this.hasSeed = n
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new s(t, this.accumulator, this.seed, this.hasSeed))
            }, t
        }(),
        s = function(t) {
            function e(e, n, r, i) {
                var o = t.call(this, e) || this;
                return o.accumulator = n, o._seed = r, o.hasSeed = i, o.index = 0, o
            }
            return r.a(e, t), Object.defineProperty(e.prototype, "seed", {
                get: function() {
                    return this._seed
                },
                set: function(t) {
                    this.hasSeed = !0, this._seed = t
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype._next = function(t) {
                if (this.hasSeed) return this._tryNext(t);
                this.seed = t, this.destination.next(t)
            }, e.prototype._tryNext = function(t) {
                var e, n = this.index++;
                try {
                    e = this.accumulator(this.seed, t, n)
                } catch (t) {
                    this.destination.error(t)
                }
                this.seed = e, this.destination.next(e)
            }, e
        }(i.a)
}, function(t, e, n) {
    "use strict";
    var r = n(57),
        i = function() {
            try {
                var t = Object(r.a)(Object, "defineProperty");
                return t({}, "", {}), t
            } catch (t) {}
        }();
    e.a = i
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return s
    }));
    var r = n(92),
        i = n(183),
        o = n(33);

    function a() {
        return new o.a
    }

    function s() {
        return function(t) {
            return Object(i.a)()(Object(r.a)(a)(t))
        }
    }
}, function(t, e, n) {
    "use strict";
    var r = n(176),
        i = n(98);
    e.a = function(t, e) {
        for (var n = 0, o = (e = Object(r.a)(e, t)).length; null != t && n < o;) t = t[Object(i.a)(e[n++])];
        return n && n == o ? t : void 0
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return null !== t && "object" == typeof t
    }
    n.d(e, "a", (function() {
        return r
    }))
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return i
    }));
    var r = n(11);

    function i(t) {
        for (; t;) {
            var e = t,
                n = e.closed,
                i = e.destination,
                o = e.isStopped;
            if (n || o) return !1;
            t = i && i instanceof r.a ? i : null
        }
        return !0
    }
}, function(t, e, n) {
    "use strict";
    var r = n(27),
        i = n(141),
        o = n(114),
        a = "Expected a function";

    function s(t, e) {
        if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError(a);
        var n = function() {
            var r = arguments,
                i = e ? e.apply(this, r) : r[0],
                o = n.cache;
            if (o.has(i)) return o.get(i);
            var a = t.apply(this, r);
            return n.cache = o.set(i, a) || o, a
        };
        return n.cache = new(s.Cache || o.a), n
    }
    s.Cache = o.a;
    var u = s,
        c = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        l = /\\(\\)?/g,
        f = function(t) {
            var e = u((function(t) {
                    var e = [];
                    return 46 === t.charCodeAt(0) && e.push(""), t.replace(c, (function(t, n, r, i) {
                        e.push(r ? i.replace(l, "$1") : n || t)
                    })), e
                }), (function(t) {
                    return 500 === n.size && n.clear(), t
                })),
                n = e.cache;
            return e
        }(),
        d = n(59),
        p = n(243),
        h = n(109),
        b = d.a ? d.a.prototype : void 0,
        m = b ? b.toString : void 0,
        g = function(t) {
            return null == t ? "" : function t(e) {
                if ("string" == typeof e) return e;
                if (Object(r.a)(e)) return Object(p.a)(e, t) + "";
                if (Object(h.a)(e)) return m ? m.call(e) : "";
                var n = e + "";
                return "0" == n && 1 / e == -1 / 0 ? "-0" : n
            }(t)
        };
    e.a = function(t, e) {
        return Object(r.a)(t) ? t : Object(i.a)(t, e) ? [t] : f(g(t))
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return i
    }));
    var r = n(25);
    class i {
        constructor(t = !0) {
            this._edgeCompat = t, this._writeFunc = this._edgeCompat ? i._edgeWriteFunc : i._commonWriteFunc
        }
        write(t) {
            try {
                const e = [`grm ${t.level} 【${t.loggerName}】░░ ${t.message}`];
                t.data && e.push(t.data), t.exception && e.push(t.exception), this._writeFunc[t.level].apply(null, e)
            } catch (t) {}
        }
    }
    i._commonWriteFunc = {
        [r.a.TRACE]: console.log.bind(console),
        [r.a.DEBUG]: console.log.bind(console),
        [r.a.INFO]: console.info.bind(console),
        [r.a.WARN]: console.warn.bind(console),
        [r.a.ERROR]: console.error.bind(console),
        [r.a.FATAL]: console.error.bind(console)
    }, i._edgeWriteFunc = {
        [r.a.TRACE]: (t, e, n) => console.log(t, e, n),
        [r.a.DEBUG]: (t, e, n) => console.log(t, e, n),
        [r.a.INFO]: (t, e, n) => console.info(t, e, n),
        [r.a.WARN]: (t, e, n) => console.warn(t, e, n),
        [r.a.ERROR]: (t, e, n) => console.error(t, e, n),
        [r.a.FATAL]: (t, e, n) => console.error(t, e, n)
    }
}, function(t, e, n) {
    t.exports = function() {
        "use strict";
        var t = ["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"],
            e = ["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "audio", "canvas", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "video", "view", "vkern"],
            n = ["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"],
            r = ["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmuliscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mpspace", "msqrt", "mystyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"],
            i = ["#text"],
            o = ["accept", "action", "align", "alt", "autocomplete", "background", "bgcolor", "border", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "coords", "crossorigin", "datetime", "default", "dir", "disabled", "download", "enctype", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "integrity", "ismap", "label", "lang", "list", "loop", "low", "max", "maxlength", "media", "method", "min", "multiple", "name", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "type", "usemap", "valign", "value", "width", "xmlns"],
            a = ["accent-height", "accumulate", "additivive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "tabindex", "targetx", "targety", "transform", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"],
            s = ["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"],
            u = ["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"];

        function c(t, e) {
            for (var n = e.length; n--;) "string" == typeof e[n] && (e[n] = e[n].toLowerCase()), t[e[n]] = !0;
            return t
        }

        function l(t) {
            var e = {},
                n = void 0;
            for (n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
        }
        var f = /\{\{[\s\S]*|[\s\S]*\}\}/gm,
            d = /<%[\s\S]*|[\s\S]*%>/gm,
            p = /^data-[\-\w.\u00B7-\uFFFF]/,
            h = /^aria-[\-\w]+$/,
            b = /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
            m = /^(?:\w+script|data):/i,
            g = /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g,
            v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            };

        function y(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
            return Array.from(t)
        }
        var _ = function() {
            return "undefined" == typeof window ? null : window
        };
        return function w() {
            var E = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _(),
                O = function(t) {
                    return w(t)
                };
            if (O.version = "1.0.8", O.removed = [], !E || !E.document || 9 !== E.document.nodeType) return O.isSupported = !1, O;
            var x = E.document,
                S = !1,
                T = !1,
                k = E.document,
                C = E.DocumentFragment,
                N = E.HTMLTemplateElement,
                j = E.Node,
                I = E.NodeFilter,
                A = E.NamedNodeMap,
                P = void 0 === A ? E.NamedNodeMap || E.MozNamedAttrMap : A,
                M = E.Text,
                D = E.Comment,
                R = E.DOMParser;
            if ("function" == typeof N) {
                var F = k.createElement("template");
                F.content && F.content.ownerDocument && (k = F.content.ownerDocument)
            }
            var L = k,
                U = L.implementation,
                z = L.createNodeIterator,
                V = L.getElementsByTagName,
                B = L.createDocumentFragment,
                W = x.importNode,
                G = {};
            O.isSupported = U && void 0 !== U.createHTMLDocument && 9 !== k.documentMode;
            var H = f,
                $ = d,
                q = p,
                Y = h,
                K = m,
                Q = g,
                J = b,
                X = null,
                Z = c({}, [].concat(y(t), y(e), y(n), y(r), y(i))),
                tt = null,
                et = c({}, [].concat(y(o), y(a), y(s), y(u))),
                nt = null,
                rt = null,
                it = !0,
                ot = !0,
                at = !1,
                st = !1,
                ut = !1,
                ct = !1,
                lt = !1,
                ft = !1,
                dt = !1,
                pt = !1,
                ht = !1,
                bt = !0,
                mt = !0,
                gt = !1,
                vt = {},
                yt = c({}, ["audio", "head", "math", "script", "style", "template", "svg", "video"]),
                _t = c({}, ["audio", "video", "img", "source", "image"]),
                wt = c({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "summary", "title", "value", "style", "xmlns"]),
                Et = null,
                Ot = k.createElement("form"),
                xt = function(f) {
                    "object" !== (void 0 === f ? "undefined" : v(f)) && (f = {}), X = "ALLOWED_TAGS" in f ? c({}, f.ALLOWED_TAGS) : Z, tt = "ALLOWED_ATTR" in f ? c({}, f.ALLOWED_ATTR) : et, nt = "FORBID_TAGS" in f ? c({}, f.FORBID_TAGS) : {}, rt = "FORBID_ATTR" in f ? c({}, f.FORBID_ATTR) : {}, vt = "USE_PROFILES" in f && f.USE_PROFILES, it = !1 !== f.ALLOW_ARIA_ATTR, ot = !1 !== f.ALLOW_DATA_ATTR, at = f.ALLOW_UNKNOWN_PROTOCOLS || !1, st = f.SAFE_FOR_JQUERY || !1, ut = f.SAFE_FOR_TEMPLATES || !1, ct = f.WHOLE_DOCUMENT || !1, dt = f.RETURN_DOM || !1, pt = f.RETURN_DOM_FRAGMENT || !1, ht = f.RETURN_DOM_IMPORT || !1, ft = f.FORCE_BODY || !1, bt = !1 !== f.SANITIZE_DOM, mt = !1 !== f.KEEP_CONTENT, gt = f.IN_PLACE || !1, J = f.ALLOWED_URI_REGEXP || J, ut && (ot = !1), pt && (dt = !0), vt && (X = c({}, [].concat(y(i))), tt = [], !0 === vt.html && (c(X, t), c(tt, o)), !0 === vt.svg && (c(X, e), c(tt, a), c(tt, u)), !0 === vt.svgFilters && (c(X, n), c(tt, a), c(tt, u)), !0 === vt.mathMl && (c(X, r), c(tt, s), c(tt, u))), f.ADD_TAGS && (X === Z && (X = l(X)), c(X, f.ADD_TAGS)), f.ADD_ATTR && (tt === et && (tt = l(tt)), c(tt, f.ADD_ATTR)), f.ADD_URI_SAFE_ATTR && c(wt, f.ADD_URI_SAFE_ATTR), mt && (X["#text"] = !0), ct && c(X, ["html", "head", "body"]), X.table && c(X, ["tbody"]), Object && "freeze" in Object && Object.freeze(f), Et = f
                },
                St = function(t) {
                    O.removed.push({
                        element: t
                    });
                    try {
                        t.parentNode.removeChild(t)
                    } catch (e) {
                        t.outerHTML = ""
                    }
                },
                Tt = function(t, e) {
                    try {
                        O.removed.push({
                            attribute: e.getAttributeNode(t),
                            from: e
                        })
                    } catch (t) {
                        O.removed.push({
                            attribute: null,
                            from: e
                        })
                    }
                    e.removeAttribute(t)
                },
                kt = function(t) {
                    var e = void 0;
                    if (ft && (t = "<remove></remove>" + t), S) try {
                        e = (new R).parseFromString(t, "text/html")
                    } catch (t) {}
                    if (T && c(nt, ["title"]), !e || !e.documentElement) {
                        var n = (e = U.createHTMLDocument("")).body;
                        n.parentNode.removeChild(n.parentNode.firstElementChild), n.outerHTML = t
                    }
                    return V.call(e, ct ? "html" : "body")[0]
                };
            O.isSupported && (function() {
                try {
                    kt('<svg><p><style><img src="</style><img src=x onerror=alert(1)//">').querySelector("svg img") && (S = !0)
                } catch (t) {}
            }(), function() {
                try {
                    kt("<x/><title>&lt;/title&gt;&lt;img&gt;").querySelector("title").textContent.match(/<\/title/) && (T = !0)
                } catch (t) {}
            }());
            var Ct = function(t) {
                    return z.call(t.ownerDocument || t, t, I.SHOW_ELEMENT | I.SHOW_COMMENT | I.SHOW_TEXT, (function() {
                        return I.FILTER_ACCEPT
                    }), !1)
                },
                Nt = function(t) {
                    return "object" === (void 0 === j ? "undefined" : v(j)) ? t instanceof j : t && "object" === (void 0 === t ? "undefined" : v(t)) && "number" == typeof t.nodeType && "string" == typeof t.nodeName
                },
                jt = function(t, e, n) {
                    G[t] && G[t].forEach((function(t) {
                        t.call(O, e, n, Et)
                    }))
                },
                It = function(t) {
                    var e, n = void 0;
                    if (jt("beforeSanitizeElements", t, null), !((e = t) instanceof M || e instanceof D || "string" == typeof e.nodeName && "string" == typeof e.textContent && "function" == typeof e.removeChild && e.attributes instanceof P && "function" == typeof e.removeAttribute && "function" == typeof e.setAttribute)) return St(t), !0;
                    var r = t.nodeName.toLowerCase();
                    if (jt("uponSanitizeElement", t, {
                            tagName: r,
                            allowedTags: X
                        }), !X[r] || nt[r]) {
                        if (mt && !yt[r] && "function" == typeof t.insertAdjacentHTML) try {
                            t.insertAdjacentHTML("AfterEnd", t.innerHTML)
                        } catch (t) {}
                        return St(t), !0
                    }
                    return !st || t.firstElementChild || t.content && t.content.firstElementChild || !/</g.test(t.textContent) || (O.removed.push({
                        element: t.cloneNode()
                    }), t.innerHTML ? t.innerHTML = t.innerHTML.replace(/</g, "&lt;") : t.innerHTML = t.textContent.replace(/</g, "&lt;")), ut && 3 === t.nodeType && (n = (n = (n = t.textContent).replace(H, " ")).replace($, " "), t.textContent !== n && (O.removed.push({
                        element: t.cloneNode()
                    }), t.textContent = n)), jt("afterSanitizeElements", t, null), !1
                },
                At = function(t, e, n) {
                    if (bt && ("id" === e || "name" === e) && (n in k || n in Ot)) return !1;
                    if (ut && (n = (n = n.replace(H, " ")).replace($, " ")), ot && q.test(e));
                    else if (it && Y.test(e));
                    else {
                        if (!tt[e] || rt[e]) return !1;
                        if (wt[e]);
                        else if (J.test(n.replace(Q, "")));
                        else if ("src" !== e && "xlink:href" !== e || "script" === t || 0 !== n.indexOf("data:") || !_t[t])
                            if (at && !K.test(n.replace(Q, "")));
                            else if (n) return !1
                    }
                    return !0
                },
                Pt = function(t) {
                    var e = void 0,
                        n = void 0,
                        r = void 0,
                        i = void 0,
                        o = void 0;
                    jt("beforeSanitizeAttributes", t, null);
                    var a = t.attributes;
                    if (a) {
                        var s = {
                            attrName: "",
                            attrValue: "",
                            keepAttr: !0,
                            allowedAttributes: tt
                        };
                        for (o = a.length; o--;) {
                            var u = e = a[o],
                                c = u.name,
                                l = u.namespaceURI;
                            if (n = e.value.trim(), r = c.toLowerCase(), s.attrName = r, s.attrValue = n, s.keepAttr = !0, jt("uponSanitizeAttribute", t, s), n = s.attrValue, "name" === r && "IMG" === t.nodeName && a.id) i = a.id, a = Array.prototype.slice.apply(a), Tt("id", t), Tt(c, t), a.indexOf(i) > o && t.setAttribute("id", i.value);
                            else {
                                if ("INPUT" === t.nodeName && "type" === r && "file" === n && (tt[r] || !rt[r])) continue;
                                "id" === c && t.setAttribute(c, ""), Tt(c, t)
                            }
                            if (s.keepAttr) {
                                var f = t.nodeName.toLowerCase();
                                if (At(f, r, n)) try {
                                    l ? t.setAttributeNS(l, c, n) : t.setAttribute(c, n), O.removed.pop()
                                } catch (t) {}
                            }
                        }
                        jt("afterSanitizeAttributes", t, null)
                    }
                },
                Mt = function t(e) {
                    var n = void 0,
                        r = Ct(e);
                    for (jt("beforeSanitizeShadowDOM", e, null); n = r.nextNode();) jt("uponSanitizeShadowNode", n, null), It(n) || (n.content instanceof C && t(n.content), Pt(n));
                    jt("afterSanitizeShadowDOM", e, null)
                };
            return O.sanitize = function(t, e) {
                var n = void 0,
                    r = void 0,
                    i = void 0,
                    o = void 0,
                    a = void 0;
                if (t || (t = "\x3c!--\x3e"), "string" != typeof t && !Nt(t)) {
                    if ("function" != typeof t.toString) throw new TypeError("toString is not a function");
                    if ("string" != typeof(t = t.toString())) throw new TypeError("dirty is not a string, aborting")
                }
                if (!O.isSupported) {
                    if ("object" === v(E.toStaticHTML) || "function" == typeof E.toStaticHTML) {
                        if ("string" == typeof t) return E.toStaticHTML(t);
                        if (Nt(t)) return E.toStaticHTML(t.outerHTML)
                    }
                    return t
                }
                if (lt || xt(e), O.removed = [], gt);
                else if (t instanceof j) 1 === (r = (n = kt("\x3c!--\x3e")).ownerDocument.importNode(t, !0)).nodeType && "BODY" === r.nodeName ? n = r : n.appendChild(r);
                else {
                    if (!dt && !ct && -1 === t.indexOf("<")) return t;
                    if (!(n = kt(t))) return dt ? null : ""
                }
                n && ft && St(n.firstChild);
                for (var s = Ct(gt ? t : n); i = s.nextNode();) 3 === i.nodeType && i === o || It(i) || (i.content instanceof C && Mt(i.content), Pt(i), o = i);
                if (gt) return t;
                if (dt) {
                    if (pt)
                        for (a = B.call(n.ownerDocument); n.firstChild;) a.appendChild(n.firstChild);
                    else a = n;
                    return ht && (a = W.call(x, a, !0)), a
                }
                return ct ? n.outerHTML : n.innerHTML
            }, O.setConfig = function(t) {
                xt(t), lt = !0
            }, O.clearConfig = function() {
                Et = null, lt = !1
            }, O.isValidAttribute = function(t, e, n) {
                Et || xt({});
                var r = t.toLowerCase(),
                    i = e.toLowerCase();
                return At(r, i, n)
            }, O.addHook = function(t, e) {
                "function" == typeof e && (G[t] = G[t] || [], G[t].push(e))
            }, O.removeHook = function(t) {
                G[t] && G[t].pop()
            }, O.removeHooks = function(t) {
                G[t] && (G[t] = [])
            }, O.removeAllHooks = function() {
                G = {}
            }, O
        }()
    }()
}, function(t, e, n) {
    "use strict";
    var r = n(2),
        i = 1,
        o = {},
        a = function(t) {
            function e(e, n) {
                var r = t.call(this, e, n) || this;
                return r.scheduler = e, r.work = n, r
            }
            return r.a(e, t), e.prototype.requestAsyncId = function(e, n, r) {
                return void 0 === r && (r = 0), null !== r && r > 0 ? t.prototype.requestAsyncId.call(this, e, n, r) : (e.actions.push(this), e.scheduled || (e.scheduled = function(t) {
                    var e = i++;
                    return o[e] = t, Promise.resolve().then((function() {
                        return function(t) {
                            var e = o[t];
                            e && e()
                        }(e)
                    })), e
                }(e.flush.bind(e, null))))
            }, e.prototype.recycleAsyncId = function(e, n, r) {
                if (void 0 === r && (r = 0), null !== r && r > 0 || null === r && this.delay > 0) return t.prototype.recycleAsyncId.call(this, e, n, r);
                0 === e.actions.length && (function(t) {
                    delete o[t]
                }(n), e.scheduled = void 0)
            }, e
        }(n(136).a),
        s = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return r.a(e, t), e.prototype.flush = function(t) {
                this.active = !0, this.scheduled = void 0;
                var e, n = this.actions,
                    r = -1,
                    i = n.length;
                t = t || n.shift();
                do {
                    if (e = t.execute(t.state, t.delay)) break
                } while (++r < i && (t = n.shift()));
                if (this.active = !1, e) {
                    for (; ++r < i && (t = n.shift());) t.unsubscribe();
                    throw e
                }
            }, e
        }(n(134).a);
    n.d(e, "a", (function() {
        return u
    }));
    var u = new s(a)
}, function(t, e, n) {
    t.exports = {
        gr_no_print: "_1KJtL"
    }
}, , function(t, e, n) {
    "use strict";
    e.a = function(t, e) {
        return function(n) {
            return t(e(n))
        }
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return o
    }));
    var r = n(2),
        i = n(11);

    function o() {
        return function(t) {
            return t.lift(new a(t))
        }
    }
    var a = function() {
            function t(t) {
                this.connectable = t
            }
            return t.prototype.call = function(t, e) {
                var n = this.connectable;
                n._refCount++;
                var r = new s(t, n),
                    i = e.subscribe(r);
                return r.closed || (r.connection = n.connect()), i
            }, t
        }(),
        s = function(t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                return r.connectable = n, r
            }
            return r.a(e, t), e.prototype._unsubscribe = function() {
                var t = this.connectable;
                if (t) {
                    this.connectable = null;
                    var e = t._refCount;
                    if (e <= 0) this.connection = null;
                    else if (t._refCount = e - 1, e > 1) this.connection = null;
                    else {
                        var n = this.connection,
                            r = t._connection;
                        this.connection = null, !r || n && r !== n || r.unsubscribe()
                    }
                } else this.connection = null
            }, e
        }(i.a)
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return a
    }));
    var r = n(14),
        i = n(62),
        o = n(48);

    function a(t) {
        return new r.a((function(e) {
            var n;
            try {
                n = t()
            } catch (t) {
                return void e.error(t)
            }
            return (n ? Object(i.a)(n) : Object(o.b)()).subscribe(e)
        }))
    }
}, , , , function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "t", (function() {
        return r
    })), n.d(e, "updateConnection", (function() {
        return i
    })), n.d(e, "onlineConnection", (function() {
        return o
    })), n.d(e, "activateDataControl", (function() {
        return a
    })), n.d(e, "acceptDataControl", (function() {
        return s
    })), n.d(e, "disableDataControl", (function() {
        return u
    })), n.d(e, "uninstallExtension", (function() {
        return c
    }));
    const r = {
        UPDATE_CONNECTION: "connection/UPDATE_CONNECTION",
        ONLINE_STATE: "connection/ONLINE_STATE",
        ACTIVATE_DATA_CONTROL: "connection/ACTIVATE_DATA_CONTROL",
        ACCEPT_DATA_CONTROL: "connection/ACCEPT_DATA_CONTROL",
        DISABLE_DATA_CONTROL: "connection/DISABLE_DATA_CONTROL",
        UNINSTALL_EXTENSION: "connection/UNINSTALL_EXTENSION"
    };

    function i(t) {
        return {
            type: r.UPDATE_CONNECTION,
            data: t
        }
    }

    function o(t) {
        return {
            type: r.ONLINE_STATE,
            online: t
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

    function u() {
        return {
            type: r.DISABLE_DATA_CONTROL
        }
    }

    function c() {
        return {
            type: r.UNINSTALL_EXTENSION
        }
    }
}, , function(t, e, n) {
    "use strict";
    n.d(e, "b", (function() {
        return f
    })), n.d(e, "c", (function() {
        return d
    })), n.d(e, "a", (function() {
        return h
    }));
    var r = n(17),
        i = n(10),
        o = n(16),
        a = n(4),
        s = n(12),
        u = n(43),
        c = n(200);
    const l = s.a.create("extension-api.message.bg"),
        f = "popup";

    function d() {
        const t = (Object(i.j)() || Object(i.l)()) && (!chrome.extension || !chrome.tabs || !chrome.runtime || !chrome.runtime.onConnect),
            e = Object(i.k)() && (!edge.extension || !edge.tabs || !edge.runtime || !edge.runtime.onConnect);
        if (t || e) {
            const t = window.localStorage.getItem("bgInitFail") || "0",
                e = parseInt(t, 10);
            e > 4 ? l.error(`too many bgInitFail ${e}`) : (window.localStorage.setItem("bgInitFail", (e + 1).toString()), document.location.reload())
        }
    }

    function p(t) {
        if (!t) return !1;
        const {
            browser: e
        } = r.a().bundleInfo, n = "firefox" === e ? /^moz-extension:\/\/.*\/src\/popup.html$/ : "edge" === e ? /^ms-browser-extension:\/\/.*\/src\/popup.html$/ : "chrome" === e ? chrome && chrome.runtime && chrome.runtime.id ? new RegExp(chrome.runtime.id + "/src/popup.html") : void 0 : Object(a.g)(e);
        return void 0 !== n && n.test(t)
    }
    class h {
        constructor(t, e, n) {
            this._getActiveTab = e, this._getAllTabs = n, this.kind = "background-message-api", this._callbacks = {}, this._tabPorts = {
                popup: []
            }, this._messageHelper = new c.a, this._sendMessageToPorts = (t, e) => {
                const n = this._tabPorts[t];
                n && n.forEach(t => t.postMessage(e))
            }, this.toFocused = (t, e) => this._getActiveTab().then(({
                id: n,
                url: r
            }) => {
                if (n) return p(r) ? l.warn(`toFocussed not allowed for popup when it open like regular tab ${t}`, e) : void this._sendMessageToPorts(n.toString(), {
                    type: t,
                    content: e,
                    callid: Object(o.r)()
                })
            }), this.broadcast = (t, e) => {
                if (!e) return;
                const n = ({
                    id: n,
                    url: r
                }) => {
                    n && r && -1 === r.indexOf("chrome-extension:") && this._sendMessageToPorts(n.toString(), {
                        type: t,
                        callid: Object(o.r)(),
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
                if (t.name === u.b.bridge) t.onMessage(t => {
                    "message.toFocussed" === t.method && this.toFocused(t.params && t.params.type, t.params && t.params.content)
                });
                else if (t.name === u.b.broadcast) t.onMessage(t => this.broadcast(t.type, t.content));
                else if (t.name === u.b.background) {
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
                        if (n && p(n)) {
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
                            type: i
                        }) => {
                            this._callbacks[n] && (this._callbacks[n](r), delete this._callbacks[n]), this._messageHelper.fire(i, r, e => t.postMessage({
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
        sendTo(t, e, n, r, i, a) {
            const s = this._tabPorts[t];
            if (!s || !s.length) return void(i && i({
                message: "no ports on specified tabId"
            }));
            const u = a ? s.filter(t => a(t.sender && t.sender.url)) : s;
            if (!u.length) return void(i && i({
                message: "no ports on specified tabFilter"
            }));
            const c = {
                type: e,
                content: n
            };
            r && "function" == typeof r && (c.callid = Object(o.r)(), this._callbacks[c.callid] = r), u.forEach(t => t.postMessage(c))
        }
        listen(t, e) {
            this._messageHelper.listen(t, e)
        }
    }
}, , function(t, e, n) {
    "use strict";
    var r = n(294),
        i = n(103),
        o = n(102),
        a = n(97),
        s = n(295),
        u = n(296),
        c = n(174);
    n.d(e, "a", (function() {
        return l
    }));
    var l = function(t) {
        if (t && "function" == typeof t[a.a]) return l = t,
            function(t) {
                var e = l[a.a]();
                if ("function" != typeof e.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
                return e.subscribe(t)
            };
        if (Object(s.a)(t)) return Object(r.a)(t);
        if (Object(u.a)(t)) return n = t,
            function(t) {
                return n.then((function(e) {
                    t.closed || (t.next(e), t.complete())
                }), (function(e) {
                    return t.error(e)
                })).then(null, i.a), t
            };
        if (t && "function" == typeof t[o.a]) return e = t,
            function(t) {
                for (var n = e[o.a]();;) {
                    var r = n.next();
                    if (r.done) {
                        t.complete();
                        break
                    }
                    if (t.next(r.value), t.closed) break
                }
                return "function" == typeof n.return && t.add((function() {
                    n.return && n.return()
                })), t
            };
        var e, n, l, f = Object(c.a)(t) ? "an invalid object" : "'" + t + "'";
        throw new TypeError("You provided " + f + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")
    }
}, , function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return i
    }));
    var r = n(25);
    const i = t => e => Object(r.b)(e.level) >= Object(r.b)(t)
}, function(t, e, n) {
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
}, function(t, e, n) {
    "use strict";
    var r = n(212),
        i = n(31),
        o = n(128),
        a = Object.prototype.hasOwnProperty,
        s = function(t) {
            if (!Object(i.a)(t)) return function(t) {
                var e = [];
                if (null != t)
                    for (var n in Object(t)) e.push(n);
                return e
            }(t);
            var e = Object(o.a)(t),
                n = [];
            for (var r in t)("constructor" != r || !e && a.call(t, r)) && n.push(r);
            return n
        },
        u = n(77);
    e.a = function(t) {
        return Object(u.a)(t) ? Object(r.a)(t, !0) : s(t)
    }
}, , function(t, e) {
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
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return u
    })), n.d(e, "b", (function() {
        return c
    }));
    var r = n(72),
        i = n(200),
        o = n(16),
        a = n(43);
    const s = n(12).a.create("Messaging.extension-api.content");
    class u {
        constructor(t) {
            this.kind = "content-script-message-api", this._callbacks = {}, this._messageHelper = new i.a, this._proxyPortsStorage = {}, this.broadcastBackground = (...t) => this._emit(this.backgroundPort, "bg").apply(null, t), this.broadcast = (...t) => this._emit(this.broadcastPort, "tabs").apply(null, t), this._onPortMessage = t => {
                s.trace("portMessage", t)
            }, this._checkHealth = (() => {
                let t = null,
                    e = null;
                const n = () => {
                        document.dispatchEvent(new CustomEvent("grammarly:ping"))
                    },
                    r = () => {
                        o()
                    },
                    i = () => {
                        [this.port, this.backgroundPort, this.broadcastPort].forEach(t => {
                            t && t.removeMessageListeners && t.removeMessageListeners()
                        }), this.port = this.backgroundPort = this.broadcastPort = null, o(), document.addEventListener("grammarly:proxyports", this._onGrammarlyResetAfterTimeout), document.dispatchEvent(new CustomEvent("grammarly:offline"))
                    };

                function o() {
                    document.removeEventListener("grammarly:pong", r), e && (clearTimeout(e), e = null), t && (clearInterval(t), t = null)
                }
                return () => {
                    o(), document.addEventListener("grammarly:pong", r), t = window.setInterval(n, 500), e = window.setTimeout(i, 5e3)
                }
            })(), this._onGrammarlyResetAfterTimeout = () => {
                document.removeEventListener("grammarly:proxyports", this._onGrammarlyResetAfterTimeout), this.port = this._initProxyPort(a.b.bridge, this._onPortMessage, this._checkHealth, !0), this.backgroundPort = this._initProxyPort(a.b.background, this._onBgPortMessage, this._checkHealth), this.broadcastPort = this._initProxyPort(a.b.broadcast, null, this._checkHealth)
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
                const i = this._proxyPort(t);
                return r && this._checkHealth(), e && i.onMessage(e), n && i.onDisconnect(n), i
            }, this._emit = (t, e) => (n, r, i, a) => {
                const s = Object(o.r)();
                i && "function" == typeof i && (this._callbacks[s] = i);
                try {
                    if (!t) throw new Error("lost connection to " + e + " port");
                    t.postMessage({
                        type: n,
                        callid: s,
                        content: r
                    })
                } catch (t) {
                    if (!a) throw t;
                    a(t)
                }
            }, this._proxyPort = t => {
                this._proxyPortsStorage[t] = {};
                const e = (e, n) => {
                        const r = n.detail;
                        if (r.name !== t) return;
                        const i = this._proxyPortsStorage[t][e];
                        i && i(r.msg)
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
            }, this.port = t(a.b.bridge), this.port.onMessage(this._onPortMessage), this.port.onDisconnect(() => {
                this.port = null, this.port = this._initProxyPort(a.b.bridge, this._onPortMessage, this._checkHealth, !0)
            }), this.backgroundPort = t(a.b.background), this.backgroundPort.onMessage(this._onBgPortMessage), this.backgroundPort.onDisconnect(() => {
                this.backgroundPort = null, this.backgroundPort = this._initProxyPort(a.b.background, this._onBgPortMessage, this._checkHealth)
            }), this.broadcastPort = t(a.b.broadcast), this.broadcastPort.onDisconnect(() => {
                this.broadcastPort = null, this.broadcastPort = this._initProxyPort(a.b.broadcast, null, this._checkHealth)
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

    function c() {
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
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return o
    }));
    const r = n(12).a.create("extension-api.message"),
        i = () => {};
    class o {
        constructor() {
            this._listeners = {}, this._queue = {}, this.fire = (t, e, n = i, r) => {
                const o = this._listeners[t] || [];
                o.length ? o.forEach(t => t(e, n, r)) : (this._queue[t] = this._queue[t] || [], this._queue[t].push({
                    content: e,
                    callback: n,
                    sender: r
                }))
            }, this.unlisten = (t, e) => {
                const n = this._listeners[t] || [],
                    r = n.indexOf(e); - 1 !== r && (1 === n.length ? delete this._listeners[t] : n.splice(r, 1))
            }, this.listenOnce = (t, e) => {
                const n = (r, i, o) => {
                    this.unlisten(t, n), e && e(r, i, o)
                };
                this.listen(t, n)
            }, this.listen = (t, e) => {
                this._listeners[t] = this._listeners[t] || [], -1 === this._listeners[t].indexOf(e) && this._listeners[t].push(e);
                const n = this._queue[t] || [];
                if (n.length) {
                    for (const i of n) try {
                        e(i.content, i.callback, i.sender)
                    } catch (t) {
                        r.error("exception during proccesing buffered messages", t)
                    }
                    delete this._queue[t]
                }
            }
        }
    }
}, , function(t, e, n) {
    "use strict";
    var r = n(57),
        i = n(36),
        o = Object(r.a)(i.a, "DataView"),
        a = n(96),
        s = Object(r.a)(i.a, "Promise"),
        u = Object(r.a)(i.a, "Set"),
        c = Object(r.a)(i.a, "WeakMap"),
        l = n(52),
        f = n(87),
        d = Object(f.a)(o),
        p = Object(f.a)(a.a),
        h = Object(f.a)(s),
        b = Object(f.a)(u),
        m = Object(f.a)(c),
        g = l.a;
    (o && "[object DataView]" != g(new o(new ArrayBuffer(1))) || a.a && "[object Map]" != g(new a.a) || s && "[object Promise]" != g(s.resolve()) || u && "[object Set]" != g(new u) || c && "[object WeakMap]" != g(new c)) && (g = function(t) {
        var e = Object(l.a)(t),
            n = "[object Object]" == e ? t.constructor : void 0,
            r = n ? Object(f.a)(n) : "";
        if (r) switch (r) {
            case d:
                return "[object DataView]";
            case p:
                return "[object Map]";
            case h:
                return "[object Promise]";
            case b:
                return "[object Set]";
            case m:
                return "[object WeakMap]"
        }
        return e
    }), e.a = g
}, , function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return a
    }));
    var r = n(2),
        i = n(20),
        o = n(18);

    function a(t) {
        return function(e) {
            return e.lift(new s(t))
        }
    }
    var s = function() {
            function t(t) {
                this.notifier = t
            }
            return t.prototype.call = function(t, e) {
                var n = new u(t),
                    r = e.subscribe(n);
                return r.add(Object(o.a)(n, this.notifier)), r
            }, t
        }(),
        u = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.hasValue = !1, e
            }
            return r.a(e, t), e.prototype._next = function(t) {
                this.value = t, this.hasValue = !0
            }, e.prototype.notifyNext = function(t, e, n, r, i) {
                this.emitValue()
            }, e.prototype.notifyComplete = function() {
                this.emitValue()
            }, e.prototype.emitValue = function() {
                this.hasValue && (this.hasValue = !1, this.destination.next(this.value))
            }, e
        }(i.a)
}, , , , , , function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "second", (function() {
        return r
    })), n.d(e, "minute", (function() {
        return i
    })), n.d(e, "hour", (function() {
        return o
    })), n.d(e, "day", (function() {
        return a
    })), n.d(e, "week", (function() {
        return s
    })), n.d(e, "days", (function() {
        return u
    })), n.d(e, "seconds", (function() {
        return c
    })), n.d(e, "hertz", (function() {
        return l
    }));
    const r = 1e3,
        i = 60 * r,
        o = 60 * i,
        a = 24 * o,
        s = 7 * a;

    function u(t) {
        return t * a
    }

    function c(t) {
        return t * r
    }

    function l(t) {
        return r / t
    }
}, function(t, e, n) {
    "use strict";
    var r = n(31),
        i = Object.create,
        o = function() {
            function t() {}
            return function(e) {
                if (!Object(r.a)(e)) return {};
                if (i) return i(e);
                t.prototype = e;
                var n = new t;
                return t.prototype = void 0, n
            }
        }();
    e.a = o
}, function(t, e, n) {
    "use strict";
    var r = n(99),
        i = n(27),
        o = n(82),
        a = n(126),
        s = n(91),
        u = Object.prototype.hasOwnProperty;
    e.a = function(t, e) {
        var n = Object(i.a)(t),
            c = !n && Object(r.a)(t),
            l = !n && !c && Object(o.a)(t),
            f = !n && !c && !l && Object(s.a)(t),
            d = n || c || l || f,
            p = d ? function(t, e) {
                for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
                return r
            }(t.length, String) : [],
            h = p.length;
        for (var b in t) !e && !u.call(t, b) || d && ("length" == b || l && ("offset" == b || "parent" == b) || f && ("buffer" == b || "byteLength" == b || "byteOffset" == b) || Object(a.a)(b, h)) || p.push(b);
        return p
    }
}, function(t, e, n) {
    "use strict";
    var r = function(t, e, n) {
        for (var r = -1, i = Object(t), o = n(t), a = o.length; a--;) {
            var s = o[++r];
            if (!1 === e(i[s], s, i)) break
        }
        return t
    };
    e.a = r
}, function(t, e, n) {
    "use strict";
    n.d(e, "e", (function() {
        return r
    })), n.d(e, "h", (function() {
        return i
    })), n.d(e, "f", (function() {
        return o
    })), n.d(e, "g", (function() {
        return a
    })), n.d(e, "b", (function() {
        return s
    })), n.d(e, "a", (function() {
        return u
    })), n.d(e, "d", (function() {
        return c
    })), n.d(e, "c", (function() {
        return l
    }));
    let r = ["The G logo gets out of the way when you're typing", "Switch between American, British, Australian, and Canadian English", "Quickly disable checking in certain types of text fields", "A fully redesigned and improved interface"],
        i = ["id", "email", "firstName", "anonymous", "type", "subscriptionFree", "experiments", "isTest", "premium", "settings", "registrationDate", "mimic", "groups", "extensionInstallDate", "fixed_errors", "edc"];
    i.push("token");
    const o = "gr_ver_2",
        a = ["data-gramm_editor", "data-gramm", "data-gramm_id", "gramm_editor", "readonly", "disabled"],
        s = ["pm-container", ["class", "ProseMirror"], "data-synchrony", ["data-gramm", "false"],
            ["data-enable-grammarly", "false"],
            ["class", "redactor-layer"],
            ["class", "redactor-editor"],
            ["class", "ck-editor__editable"],
            ["class", "redactor_box"],
            ["aria-label", "Search Facebook"]
        ],
        u = [...a, ...s],
        c = {
            name: "data-enable-grammarly",
            value: "true"
        },
        l = ["changed-user", "changed-plan", "changed-dialect", "cleanup", "editor-fix"]
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return o
    }));
    var r = n(2),
        i = n(11);

    function o(t) {
        return function(e) {
            return e.lift(new a(t))
        }
    }
    var a = function() {
            function t(t) {
                this.value = t
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new s(t, this.value))
            }, t
        }(),
        s = function(t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                return r.value = n, r
            }
            return r.a(e, t), e.prototype._next = function(t) {
                this.destination.next(this.value)
            }, e
        }(i.a)
}, , function(t, e) {
    var n, r, i = t.exports = {};

    function o() {
        throw new Error("setTimeout has not been defined")
    }

    function a() {
        throw new Error("clearTimeout has not been defined")
    }

    function s(t) {
        if (n === setTimeout) return setTimeout(t, 0);
        if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
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
            n = "function" == typeof setTimeout ? setTimeout : o
        } catch (t) {
            n = o
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (t) {
            r = a
        }
    }();
    var u, c = [],
        l = !1,
        f = -1;

    function d() {
        l && u && (l = !1, u.length ? c = u.concat(c) : f = -1, c.length && p())
    }

    function p() {
        if (!l) {
            var t = s(d);
            l = !0;
            for (var e = c.length; e;) {
                for (u = c, c = []; ++f < e;) u && u[f].run();
                f = -1, e = c.length
            }
            u = null, l = !1,
                function(t) {
                    if (r === clearTimeout) return clearTimeout(t);
                    if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
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

    function h(t, e) {
        this.fun = t, this.array = e
    }

    function b() {}
    i.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        c.push(new h(t, e)), 1 !== c.length || l || s(p)
    }, h.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = b, i.addListener = b, i.once = b, i.off = b, i.removeListener = b, i.removeAllListeners = b, i.emit = b, i.prependListener = b, i.prependOnceListener = b, i.listeners = function(t) {
        return []
    }, i.binding = function(t) {
        throw new Error("process.binding is not supported")
    }, i.cwd = function() {
        return "/"
    }, i.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }, i.umask = function() {
        return 0
    }
}, , function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return l
    }));
    var r = n(2),
        i = n(33),
        o = n(290),
        a = n(28),
        s = n(244),
        u = n(110),
        c = n(293),
        l = function(t) {
            function e(e, n, r) {
                void 0 === e && (e = Number.POSITIVE_INFINITY), void 0 === n && (n = Number.POSITIVE_INFINITY);
                var i = t.call(this) || this;
                return i.scheduler = r, i._events = [], i._infiniteTimeWindow = !1, i._bufferSize = e < 1 ? 1 : e, i._windowTime = n < 1 ? 1 : n, n === Number.POSITIVE_INFINITY ? (i._infiniteTimeWindow = !0, i.next = i.nextInfiniteTimeWindow) : i.next = i.nextTimeWindow, i
            }
            return r.a(e, t), e.prototype.nextInfiniteTimeWindow = function(e) {
                var n = this._events;
                n.push(e), n.length > this._bufferSize && n.shift(), t.prototype.next.call(this, e)
            }, e.prototype.nextTimeWindow = function(e) {
                this._events.push(new f(this._getNow(), e)), this._trimBufferThenGetEvents(), t.prototype.next.call(this, e)
            }, e.prototype._subscribe = function(t) {
                var e, n = this._infiniteTimeWindow,
                    r = n ? this._events : this._trimBufferThenGetEvents(),
                    i = this.scheduler,
                    o = r.length;
                if (this.closed) throw new u.a;
                if (this.isStopped || this.hasError ? e = a.a.EMPTY : (this.observers.push(t), e = new c.a(this, t)), i && t.add(t = new s.a(t, i)), n)
                    for (var l = 0; l < o && !t.closed; l++) t.next(r[l]);
                else
                    for (l = 0; l < o && !t.closed; l++) t.next(r[l].value);
                return this.hasError ? t.error(this.thrownError) : this.isStopped && t.complete(), e
            }, e.prototype._getNow = function() {
                return (this.scheduler || o.a).now()
            }, e.prototype._trimBufferThenGetEvents = function() {
                for (var t = this._getNow(), e = this._bufferSize, n = this._windowTime, r = this._events, i = r.length, o = 0; o < i && !(t - r[o].time < n);) o++;
                return i > e && (o = Math.max(o, i - e)), o > 0 && r.splice(0, o), r
            }, e
        }(i.a),
        f = function(t, e) {
            this.time = t, this.value = e
        }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return i
    }));
    var r = n(14);

    function i(t, e) {
        return e ? new r.a((function(n) {
            return e.schedule(o, 0, {
                error: t,
                subscriber: n
            })
        })) : new r.a((function(e) {
            return e.error(t)
        }))
    }

    function o(t) {
        var e = t.error;
        t.subscriber.error(e)
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return o
    }));
    var r = n(122),
        i = n(101);

    function o(t) {
        return void 0 === t && (t = Number.POSITIVE_INFINITY), Object(r.a)(i.a, t)
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "b", (function() {
        return l
    })), n.d(e, "a", (function() {
        return f
    }));
    var r = n(2),
        i = n(133),
        o = n(42),
        a = n(11),
        s = n(20),
        u = n(18),
        c = n(102);

    function l() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = t[t.length - 1];
        return "function" == typeof n && t.pop(), Object(i.a)(t, void 0).lift(new f(n))
    }
    var f = function() {
            function t(t) {
                this.resultSelector = t
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new d(t, this.resultSelector))
            }, t
        }(),
        d = function(t) {
            function e(e, n, r) {
                void 0 === r && (r = Object.create(null));
                var i = t.call(this, e) || this;
                return i.iterators = [], i.active = 0, i.resultSelector = "function" == typeof n ? n : null, i.values = r, i
            }
            return r.a(e, t), e.prototype._next = function(t) {
                var e = this.iterators;
                Object(o.a)(t) ? e.push(new h(t)) : "function" == typeof t[c.a] ? e.push(new p(t[c.a]())) : e.push(new b(this.destination, this, t))
            }, e.prototype._complete = function() {
                var t = this.iterators,
                    e = t.length;
                if (this.unsubscribe(), 0 !== e) {
                    this.active = e;
                    for (var n = 0; n < e; n++) {
                        var r = t[n];
                        r.stillUnsubscribed ? this.destination.add(r.subscribe(r, n)) : this.active--
                    }
                } else this.destination.complete()
            }, e.prototype.notifyInactive = function() {
                this.active--, 0 === this.active && this.destination.complete()
            }, e.prototype.checkIterators = function() {
                for (var t = this.iterators, e = t.length, n = this.destination, r = 0; r < e; r++)
                    if ("function" == typeof(a = t[r]).hasValue && !a.hasValue()) return;
                var i = !1,
                    o = [];
                for (r = 0; r < e; r++) {
                    var a, s = (a = t[r]).next();
                    if (a.hasCompleted() && (i = !0), s.done) return void n.complete();
                    o.push(s.value)
                }
                this.resultSelector ? this._tryresultSelector(o) : n.next(o), i && n.complete()
            }, e.prototype._tryresultSelector = function(t) {
                var e;
                try {
                    e = this.resultSelector.apply(this, t)
                } catch (t) {
                    return void this.destination.error(t)
                }
                this.destination.next(e)
            }, e
        }(a.a),
        p = function() {
            function t(t) {
                this.iterator = t, this.nextResult = t.next()
            }
            return t.prototype.hasValue = function() {
                return !0
            }, t.prototype.next = function() {
                var t = this.nextResult;
                return this.nextResult = this.iterator.next(), t
            }, t.prototype.hasCompleted = function() {
                var t = this.nextResult;
                return t && t.done
            }, t
        }(),
        h = function() {
            function t(t) {
                this.array = t, this.index = 0, this.length = 0, this.length = t.length
            }
            return t.prototype[c.a] = function() {
                return this
            }, t.prototype.next = function(t) {
                var e = this.index++,
                    n = this.array;
                return e < this.length ? {
                    value: n[e],
                    done: !1
                } : {
                    value: null,
                    done: !0
                }
            }, t.prototype.hasValue = function() {
                return this.array.length > this.index
            }, t.prototype.hasCompleted = function() {
                return this.array.length === this.index
            }, t
        }(),
        b = function(t) {
            function e(e, n, r) {
                var i = t.call(this, e) || this;
                return i.parent = n, i.observable = r, i.stillUnsubscribed = !0, i.buffer = [], i.isComplete = !1, i
            }
            return r.a(e, t), e.prototype[c.a] = function() {
                return this
            }, e.prototype.next = function() {
                var t = this.buffer;
                return 0 === t.length && this.isComplete ? {
                    value: null,
                    done: !0
                } : {
                    value: t.shift(),
                    done: !1
                }
            }, e.prototype.hasValue = function() {
                return this.buffer.length > 0
            }, e.prototype.hasCompleted = function() {
                return 0 === this.buffer.length && this.isComplete
            }, e.prototype.notifyComplete = function() {
                this.buffer.length > 0 ? (this.isComplete = !0, this.parent.notifyInactive()) : this.destination.complete()
            }, e.prototype.notifyNext = function(t, e, n, r, i) {
                this.buffer.push(e), this.parent.checkIterators()
            }, e.prototype.subscribe = function(t, e) {
                return Object(u.a)(this, this.observable, this, e)
            }, e
        }(s.a)
}, function(t, e, n) {
    "use strict";
    e.a = function(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t););
        return t
    }
}, function(t, e, n) {
    "use strict";
    var r = n(213),
        i = n(142);
    e.a = function(t, e) {
        return t && Object(r.a)(t, e, i.a)
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return o
    }));
    var r = n(14),
        i = n(28);

    function o(t, e) {
        return new r.a((function(n) {
            var r = new i.a,
                o = 0;
            return r.add(e.schedule((function() {
                o !== t.length ? (n.next(t[o++]), n.closed || r.add(this.schedule())) : n.complete()
            }))), r
        }))
    }
}, function(t, e, n) {
    "use strict";
    (function(t) {
        var r = n(168),
            i = "object" == typeof exports && exports && !exports.nodeType && exports,
            o = i && "object" == typeof t && t && !t.nodeType && t,
            a = o && o.exports === i && r.a.process,
            s = function() {
                try {
                    return o && o.require && o.require("util").types || a && a.binding && a.binding("util")
                } catch (t) {}
            }();
        e.a = s
    }).call(this, n(198)(t))
}, function(t, e, n) {
    "use strict";
    n.d(e, "f", (function() {
        return o
    })), n.d(e, "g", (function() {
        return a
    })), n.d(e, "b", (function() {
        return s
    })), n.d(e, "a", (function() {
        return u
    })), n.d(e, "d", (function() {
        return c
    })), n.d(e, "e", (function() {
        return l
    })), n.d(e, "c", (function() {
        return f
    })), n.d(e, "h", (function() {
        return p
    }));
    var r = n(315),
        i = n(10);
    const o = "1.0",
        a = ["inbox.google.com", "mail.google.com", "yahoo.com", "mail.live.com", "facebook.com", "tumblr.com", "stackoverflow.com", "wordpress.com", "wordpress.org", "blogspot.com"],
        s = ["facebook.com", "messenger.com", "work.fb.com", "business.facebook.com"],
        u = {
            "drive.google.com": {
                title: "Google Drive Not Supported",
                getMessage: () => `We hope to support Google Drive apps<br/> in the future, but for now please use your</br> <a class="openGrammarly" href="${Object(i.f)().app}">Grammarly Editor</a>.`
            },
            "docs.google.com": {
                title: "Google Drive Not Supported",
                getMessage: () => `We hope to support Google Drive apps<br/> in the future, but for now please use your</br> <a class="openGrammarly" href="${Object(i.f)().app}">Grammarly Editor</a>.`
            },
            "chrome.google.com": {
                title: "Web Store Not Supported"
            }
        },
        c = 18e5,
        l = [6e5, c, 36e5, 108e5, 432e5, 864e5, 31536e6],
        f = {},
        d = {
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

    function p() {
        return {
            pageConfig: Object(r.a)({}, d, {
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
                [`app.${Object(i.e)()}`]: {
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
}, , , , , , , , , function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return i
    }));
    var r = n(4);
    const i = Object(r.p)(() => browser, () => window.browser);
    window.edge = window.browser, window.chrome = window.chrome
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return a
    }));
    var r = n(2),
        i = n(33),
        o = n(110),
        a = function(t) {
            function e(e) {
                var n = t.call(this) || this;
                return n._value = e, n
            }
            return r.a(e, t), Object.defineProperty(e.prototype, "value", {
                get: function() {
                    return this.getValue()
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype._subscribe = function(e) {
                var n = t.prototype._subscribe.call(this, e);
                return n && !n.closed && e.next(this._value), n
            }, e.prototype.getValue = function() {
                if (this.hasError) throw this.thrownError;
                if (this.closed) throw new o.a;
                return this._value
            }, e.prototype.next = function(e) {
                t.prototype.next.call(this, this._value = e)
            }, e
        }(i.a)
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return s
    }));
    var r = n(14),
        i = n(44),
        o = n(139),
        a = n(55);

    function s(t, e, n) {
        void 0 === t && (t = 0);
        var s = -1;
        return Object(o.a)(e) ? s = Number(e) < 1 ? 1 : Number(e) : Object(a.a)(e) && (n = e), Object(a.a)(n) || (n = i.a), new r.a((function(e) {
            var r = Object(o.a)(t) ? t : +t - n.now();
            return n.schedule(u, r, {
                index: 0,
                period: s,
                subscriber: e
            })
        }))
    }

    function u(t) {
        var e = t.index,
            n = t.period,
            r = t.subscriber;
        if (r.next(e), !r.closed) {
            if (-1 === n) return r.complete();
            t.index = e + 1, this.schedule(t, n)
        }
    }
}, function(t, e, n) {
    "use strict";
    var r = n(173);
    e.a = function(t, e, n) {
        var i = null == t ? void 0 : Object(r.a)(t, e);
        return void 0 === i ? n : i
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "b", (function() {
        return o
    })), n.d(e, "a", (function() {
        return a
    }));
    var r = n(10),
        i = n(3);

    function o(t, e) {
        const n = document.createElement("img"),
            o = Object(i.b)(t, {
                application: Object(r.a)(),
                version: Object(r.h)(),
                env: Object(r.c)(),
                context: e
            });
        return n.src = Object(i.e)(o, Object(r.f)().newFelog), Promise.resolve()
    }

    function a(t, e, n, r, i) {
        return o({
            logger: t,
            level: n,
            message: e,
            extra: r
        }, i)
    }
}, function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "t", (function() {
        return r
    })), n.d(e, "setUser", (function() {
        return i
    })), n.d(e, "setGroups", (function() {
        return o
    })), n.d(e, "setSettings", (function() {
        return a
    })), n.d(e, "sessionInvalidate", (function() {
        return s
    })), n.d(e, "incFixed", (function() {
        return u
    })), n.d(e, "updateGroups", (function() {
        return c
    }));
    const r = {
        SET_USER: "user/SET_USER",
        SET_GROUPS: "user/SET_GROUPS",
        SET_SETTINGS: "user/SET_SETTINGS",
        SESSION_INVALIDATE: "user/SESSION_INVALIDATE",
        INC_FIXED: "user/INC_FIXED",
        UPDATE_GROUPS: "user/UPDATE_GROUPS"
    };

    function i(t) {
        return {
            type: r.SET_USER,
            data: t
        }
    }

    function o(t) {
        return {
            type: r.SET_GROUPS,
            data: t
        }
    }

    function a(t) {
        return {
            type: r.SET_SETTINGS,
            data: t
        }
    }

    function s(t) {
        return {
            type: r.SESSION_INVALIDATE,
            reason: t
        }
    }

    function u() {
        return {
            type: r.INC_FIXED
        }
    }

    function c() {
        return {
            type: r.UPDATE_GROUPS
        }
    }
}, , function(t, e, n) {
    "use strict";
    e.a = function(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r;) i[n] = e(t[n], n, t);
        return i
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "b", (function() {
        return a
    })), n.d(e, "a", (function() {
        return u
    }));
    var r = n(2),
        i = n(11),
        o = n(95);

    function a(t, e) {
        return void 0 === e && (e = 0),
            function(n) {
                return n.lift(new s(t, e))
            }
    }
    var s = function() {
            function t(t, e) {
                void 0 === e && (e = 0), this.scheduler = t, this.delay = e
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new u(t, this.scheduler, this.delay))
            }, t
        }(),
        u = function(t) {
            function e(e, n, r) {
                void 0 === r && (r = 0);
                var i = t.call(this, e) || this;
                return i.scheduler = n, i.delay = r, i
            }
            return r.a(e, t), e.dispatch = function(t) {
                var e = t.notification,
                    n = t.destination;
                e.observe(n), this.unsubscribe()
            }, e.prototype.scheduleMessage = function(t) {
                this.destination.add(this.scheduler.schedule(e.dispatch, this.delay, new c(t, this.destination)))
            }, e.prototype._next = function(t) {
                this.scheduleMessage(o.a.createNext(t))
            }, e.prototype._error = function(t) {
                this.scheduleMessage(o.a.createError(t)), this.unsubscribe()
            }, e.prototype._complete = function() {
                this.scheduleMessage(o.a.createComplete()), this.unsubscribe()
            }, e
        }(i.a),
        c = function(t, e) {
            this.notification = t, this.destination = e
        }
}, function(t, e, n) {
    "use strict";
    var r = n(108),
        i = n(143),
        o = n(31),
        a = function(t) {
            return t == t && !Object(o.a)(t)
        },
        s = n(142),
        u = function(t, e) {
            return function(n) {
                return null != n && n[t] === e && (void 0 !== e || t in Object(n))
            }
        },
        c = function(t) {
            var e = function(t) {
                for (var e = Object(s.a)(t), n = e.length; n--;) {
                    var r = e[n],
                        i = t[r];
                    e[n] = [r, i, a(i)]
                }
                return e
            }(t);
            return 1 == e.length && e[0][2] ? u(e[0][0], e[0][1]) : function(n) {
                return n === t || function(t, e, n, o) {
                    var a = n.length,
                        s = a,
                        u = !o;
                    if (null == t) return !s;
                    for (t = Object(t); a--;) {
                        var c = n[a];
                        if (u && c[2] ? c[1] !== t[c[0]] : !(c[0] in t)) return !1
                    }
                    for (; ++a < s;) {
                        var l = (c = n[a])[0],
                            f = t[l],
                            d = c[1];
                        if (u && c[2]) {
                            if (void 0 === f && !(l in t)) return !1
                        } else {
                            var p = new r.a;
                            if (o) var h = o(f, d, l, t, e, p);
                            if (!(void 0 === h ? Object(i.a)(d, f, 3, o, p) : h)) return !1
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
        d = n(176),
        p = n(99),
        h = n(27),
        b = n(126),
        m = n(125),
        g = n(98),
        v = function(t, e) {
            return null != t && function(t, e, n) {
                for (var r = -1, i = (e = Object(d.a)(e, t)).length, o = !1; ++r < i;) {
                    var a = Object(g.a)(e[r]);
                    if (!(o = null != t && n(t, a))) break;
                    t = t[a]
                }
                return o || ++r != i ? o : !!(i = null == t ? 0 : t.length) && Object(m.a)(i) && Object(b.a)(a, i) && (Object(h.a)(t) || Object(p.a)(t))
            }(t, e, f)
        },
        y = n(141),
        _ = n(117),
        w = n(173),
        E = function(t) {
            return Object(y.a)(t) ? function(t) {
                return function(e) {
                    return null == e ? void 0 : e[t]
                }
            }(Object(g.a)(t)) : function(t) {
                return function(e) {
                    return Object(w.a)(e, t)
                }
            }(t)
        };
    e.a = function(t) {
        return "function" == typeof t ? t : null == t ? _.a : "object" == typeof t ? Object(h.a)(t) ? function(t, e) {
            return Object(y.a)(t) && a(e) ? u(Object(g.a)(t), e) : function(n) {
                var r = Object(l.a)(n, t);
                return void 0 === r && r === e ? v(n, t) : Object(i.a)(e, r, 3)
            }
        }(t[0], t[1]) : c(t) : E(t)
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return i
    }));
    var r = n(22);
    const i = new Proxy({}, {
        get: (t, e) => (...t) => r.emitBackground("gnar-track", {
            method: e,
            props: t
        })
    })
}, , , , function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t) {
            for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n])
        }(n(392));
    var r = n(471);
    e.F = r.createLiftedIntrinsics()
}, function(t, e, n) {
    "use strict";
    var r;
    n.d(e, "a", (function() {
            return r
        })),
        function(t) {
            t.gdocs = "gdocs", t.other = "other"
        }(r || (r = {}))
}, , function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return r
    }));
    var r = function() {
        function t(e, n) {
            void 0 === n && (n = t.now), this.SchedulerAction = e, this.now = n
        }
        return t.prototype.schedule = function(t, e, n) {
            return void 0 === e && (e = 0), new this.SchedulerAction(this, t).schedule(n, e)
        }, t.now = function() {
            return Date.now()
        }, t
    }()
}, function(t, e, n) {
    "use strict";
    var r = n(223),
        i = n(211),
        o = n(224),
        a = n(245),
        s = n(157),
        u = n(27),
        c = n(82),
        l = n(86),
        f = n(31),
        d = n(91);
    e.a = function(t, e, n) {
        var p = Object(u.a)(t),
            h = p || Object(c.a)(t) || Object(d.a)(t);
        if (e = Object(a.a)(e, 4), null == n) {
            var b = t && t.constructor;
            n = h ? p ? new b : [] : Object(f.a)(t) && Object(l.a)(b) ? Object(i.a)(Object(s.a)(t)) : {}
        }
        return (h ? r.a : o.a)(t, (function(t, r, i) {
            return e(n, t, r, i)
        })), n
    }
}, function(t, e, n) {
    "use strict";
    var r = n(143);
    e.a = function(t, e) {
        return Object(r.a)(t, e)
    }
}, function(t, e, n) {
    "use strict";
    var r = n(128),
        i = n(182),
        o = Object(i.a)(Object.keys, Object),
        a = Object.prototype.hasOwnProperty;
    e.a = function(t) {
        if (!Object(r.a)(t)) return o(t);
        var e = [];
        for (var n in Object(t)) a.call(t, n) && "constructor" != n && e.push(n);
        return e
    }
}, , , , , function(t, e, n) {
    t.exports = {
        wrapper: "_3tsM0",
        popup: "_3wXcY",
        close: "wSDsA",
        animation: "_2mhL1",
        title: "_1AuP6",
        subtitle: "_2nTTK",
        button: "_39Gwb",
        buttonWrapper: "_2aOzu",
        bottom: "_2BDA9",
        link: "_3ZqfY"
    }
}, function(t, e, n) {
    t.exports = {
        signin: "LPW1J",
        banner: "_3scAt",
        descr: "_2Hmle",
        descr_title: "_3I7xV",
        buttons: "_2NbJ4",
        main_signin: "_1jQ-F",
        button: "_1ZRNT",
        auth_button: "MIF9G",
        sign_up: "O93h_",
        free: "_1DVz-",
        footer: "_3Z8CX",
        signin_link: "_3f4Ye"
    }
}, , function(t, e, n) {
    "use strict";

    function r(t, e) {
        return [].concat(...e.map(t))
    }

    function i(t) {
        return [].concat(...t)
    }

    function o(t) {
        return [...new Set(t)]
    }

    function a(t, e) {
        const n = new Set;
        return e.filter(e => {
            const r = t(e),
                i = !n.has(r);
            return n.add(r), i
        })
    }

    function s(t, e, n) {
        const r = [e];
        let i = e;
        for (let e = 0; e < n.length; e++) i = t(i, n[e]), r.push(i);
        return r
    }

    function u(t) {
        return t.reduce((t, e) => e > t ? e : t, t[0])
    }

    function c(t, e) {
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
        let i = 0,
            o = 0;
        for (let a = 0; a < e.length; a++) t(e[a]) ? n[i++] = e[a] : r[o++] = e[a];
        return [n, r]
    }

    function d(t, e) {
        if (t < 1) throw new Error("Invalid chunk size, expected > 0");
        if (0 === e.length) return [
            []
        ];
        const n = [];
        for (let r = 0; r < Math.ceil(e.length / t); r++) n.push(e.slice(r * t, (r + 1) * t));
        return n
    }

    function p(t, e) {
        const n = [];
        let r = t(e);
        for (; void 0 !== r;) n.push(r[0]), r = t(r[1]);
        return n
    }

    function h(t, e) {
        return void 0 !== e ? Array.from(Array(e - t), (e, n) => n + t) : Array.from(Array(t), (t, e) => e)
    }

    function b(t, e = ((t, e) => t === e)) {
        if (0 === t.length) return [];
        const n = [
            [t[0]]
        ];
        for (let r = 1; r < t.length; r += 1) {
            const i = n[n.length - 1][0],
                o = t[r];
            e(i, o) ? n[n.length - 1].push(o) : n.push([o])
        }
        return n
    }
    n.r(e), n.d(e, "flatMap", (function() {
        return r
    })), n.d(e, "flatten", (function() {
        return i
    })), n.d(e, "distinct", (function() {
        return o
    })), n.d(e, "distinctBy", (function() {
        return a
    })), n.d(e, "scan", (function() {
        return s
    })), n.d(e, "maximum", (function() {
        return u
    })), n.d(e, "maximumBy", (function() {
        return c
    })), n.d(e, "reverse", (function() {
        return l
    })), n.d(e, "partition", (function() {
        return f
    })), n.d(e, "chunkBySize", (function() {
        return d
    })), n.d(e, "unfold", (function() {
        return p
    })), n.d(e, "range", (function() {
        return h
    })), n.d(e, "groupBy", (function() {
        return b
    }))
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return a
    }));
    var r = n(2),
        i = n(20),
        o = n(18);

    function a(t) {
        return function(e) {
            return e.lift(new s(t))
        }
    }
    var s = function() {
            function t(t) {
                this.durationSelector = t
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new u(t, this.durationSelector))
            }, t
        }(),
        u = function(t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                return r.durationSelector = n, r.hasValue = !1, r
            }
            return r.a(e, t), e.prototype._next = function(t) {
                if (this.value = t, this.hasValue = !0, !this.throttled) {
                    var e = void 0;
                    try {
                        e = (0, this.durationSelector)(t)
                    } catch (t) {
                        return this.destination.error(t)
                    }
                    var n = Object(o.a)(this, e);
                    !n || n.closed ? this.clearThrottle() : this.add(this.throttled = n)
                }
            }, e.prototype.clearThrottle = function() {
                var t = this.value,
                    e = this.hasValue,
                    n = this.throttled;
                n && (this.remove(n), this.throttled = null, n.unsubscribe()), e && (this.value = null, this.hasValue = !1, this.destination.next(t))
            }, e.prototype.notifyNext = function(t, e, n, r) {
                this.clearThrottle()
            }, e.prototype.notifyComplete = function() {
                this.clearThrottle()
            }, e
        }(i.a)
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return i
    }));
    var r = n(122);

    function i(t, e) {
        return Object(r.a)(t, e, 1)
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return a
    })), n.d(e, "b", (function() {
        return s
    }));
    var r = n(2),
        i = n(20),
        o = n(18),
        a = {
            leading: !0,
            trailing: !1
        };

    function s(t, e) {
        return void 0 === e && (e = a),
            function(n) {
                return n.lift(new u(t, e.leading, e.trailing))
            }
    }
    var u = function() {
            function t(t, e, n) {
                this.durationSelector = t, this.leading = e, this.trailing = n
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new c(t, this.durationSelector, this.leading, this.trailing))
            }, t
        }(),
        c = function(t) {
            function e(e, n, r, i) {
                var o = t.call(this, e) || this;
                return o.destination = e, o.durationSelector = n, o._leading = r, o._trailing = i, o._hasValue = !1, o
            }
            return r.a(e, t), e.prototype._next = function(t) {
                this._hasValue = !0, this._sendValue = t, this._throttled || (this._leading ? this.send() : this.throttle(t))
            }, e.prototype.send = function() {
                var t = this._hasValue,
                    e = this._sendValue;
                t && (this.destination.next(e), this.throttle(e)), this._hasValue = !1, this._sendValue = null
            }, e.prototype.throttle = function(t) {
                var e = this.tryDurationSelector(t);
                e && this.add(this._throttled = Object(o.a)(this, e))
            }, e.prototype.tryDurationSelector = function(t) {
                try {
                    return this.durationSelector(t)
                } catch (t) {
                    return this.destination.error(t), null
                }
            }, e.prototype.throttlingDone = function() {
                var t = this._throttled,
                    e = this._trailing;
                t && t.unsubscribe(), this._throttled = null, e && this.send()
            }, e.prototype.notifyNext = function(t, e, n, r, i) {
                this.throttlingDone()
            }, e.prototype.notifyComplete = function() {
                this.throttlingDone()
            }, e
        }(i.a)
}, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        return function(e) {
            return t(e)
        }
    }
}, , , function(t, e, n) {
    "use strict";
    e.a = function(t, e) {
        for (var n = -1, r = e.length, i = t.length; ++n < r;) t[i + n] = e[n];
        return t
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return u
    })), n.d(e, "b", (function() {
        return l
    }));
    var r = n(17),
        i = n(38),
        o = n(10);

    function a(t) {
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

    function u(t) {
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

    function c(t) {
        return btoa(JSON.stringify(t))
    }

    function l(t) {
        const e = r.a().appConfig.url,
            n = t.showSinglePlanComparisonPage ? e.plansEnterprise : t.showPlanComparison ? e.planComparison : e.upgrade;
        window.open(Object(i.a)(n, [...t.isFromEmail ? [Object(i.b)("isFromEmail", "1")] : [], Object(i.b)("alerts", c(a(t.currentAlerts))), Object(i.b)("lensedAlerts", c(s(t.currentAlerts))), Object(i.b)("app_type", "popup"), Object(i.b)("browser", Object(o.b)()), ...Object(i.q)({
            medium: "internal",
            source: t.isAnonymousUser ? "signupHook" : "upHook",
            campaign: t.forceUtmCampaign ? t.forceUtmCampaign : t.isAnonymousUser ? "extensionPremiumCta" : "extensionGButton"
        })]))
    }
}, , , , function(t, e) {
    t.exports = {
        toU8IntArray: function(t) {
            for (var e = [], n = [], r = 0; r < t.length; r++) {
                var i, o = t.charCodeAt(r);
                for (n.length = 0;
                    (i = 255 & o) || o;) n.push(i), o >>>= 8;
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
}, function(t, e, n) {
    "use strict";
    e.a = function() {
        return !1
    }
}, function(t, e, n) {
    "use strict";
    e.a = function(t, e) {
        return t.has(e)
    }
}, function(t, e, n) {
    "use strict";
    var r = n(323),
        i = n(84),
        o = n(77),
        a = n(126),
        s = n(31),
        u = function(t, e, n) {
            if (!Object(s.a)(n)) return !1;
            var r = typeof e;
            return !!("number" == r ? Object(o.a)(n) && Object(a.a)(e, n.length) : "string" == r && e in n) && Object(i.a)(n[e], t)
        };
    e.a = function(t) {
        return Object(r.a)((function(e, n) {
            var r = -1,
                i = n.length,
                o = i > 1 ? n[i - 1] : void 0,
                a = i > 2 ? n[2] : void 0;
            for (o = t.length > 3 && "function" == typeof o ? (i--, o) : void 0, a && u(n[0], n[1], a) && (o = i < 3 ? void 0 : o, i = 1), e = Object(e); ++r < i;) {
                var s = n[r];
                s && t(e, s, r, o)
            }
            return e
        }))
    }
}, function(t, e, n) {
    "use strict";
    var r = n(169),
        i = n(84),
        o = Object.prototype.hasOwnProperty,
        a = function(t, e, n) {
            var a = t[e];
            o.call(t, e) && Object(i.a)(a, n) && (void 0 !== n || e in t) || Object(r.a)(t, e, n)
        };
    e.a = function(t, e, n, i) {
        var o = !n;
        n || (n = {});
        for (var s = -1, u = e.length; ++s < u;) {
            var c = e[s],
                l = i ? i(n[c], t[c], c, n, t) : void 0;
            void 0 === l && (l = t[c]), o ? Object(r.a)(n, c, l) : a(n, c, l)
        }
        return n
    }
}, function(t, e, n) {
    "use strict";
    (function(t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(313),
            i = n(313);
        e.structEq = i.equals, e.DEV_ENV = void 0 !== t && !1, e.setKey = function(t, e, n) {
            if (t in n && r.equals(e, n[t])) return n;
            var i = {};
            for (var o in n) i[o] = n[o];
            return i[t] = e, i
        }, e.conservatively = function(t) {
            return function(e, n) {
                return function(t, e) {
                    return r.equals(t, e) ? e : t
                }(t(e, n), n)
            }
        }, e.findIndex = function(t, e) {
            for (var n = 0; n < t.length; n++)
                if (e(t[n])) return n;
            return -1
        }, e.warning = function(t) {
            "undefined" != typeof console && "function" == typeof console.error && console.error("[Focal]: " + t);
            try {
                throw new Error(t)
            } catch (t) {}
        }, e.getReactComponentName = function(t) {
            return "string" == typeof t ? t : void 0 !== t.displayName ? t.displayName : void 0 !== t.name ? t.name : t.constructor && void 0 !== t.constructor.name ? t.constructor.name : void 0
        }
    }).call(this, n(217))
}, function(t, e, n) {
    "use strict";
    n.d(e, "b", (function() {
        return u
    })), n.d(e, "a", (function() {
        return d
    }));
    var r = n(2),
        i = n(11),
        o = n(28),
        a = n(14),
        s = n(33);

    function u(t, e, n, r) {
        return function(i) {
            return i.lift(new c(t, e, n, r))
        }
    }
    var c = function() {
            function t(t, e, n, r) {
                this.keySelector = t, this.elementSelector = e, this.durationSelector = n, this.subjectSelector = r
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new l(t, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector))
            }, t
        }(),
        l = function(t) {
            function e(e, n, r, i, o) {
                var a = t.call(this, e) || this;
                return a.keySelector = n, a.elementSelector = r, a.durationSelector = i, a.subjectSelector = o, a.groups = null, a.attemptedToUnsubscribe = !1, a.count = 0, a
            }
            return r.a(e, t), e.prototype._next = function(t) {
                var e;
                try {
                    e = this.keySelector(t)
                } catch (t) {
                    return void this.error(t)
                }
                this._group(t, e)
            }, e.prototype._group = function(t, e) {
                var n = this.groups;
                n || (n = this.groups = new Map);
                var r, i = n.get(e);
                if (this.elementSelector) try {
                    r = this.elementSelector(t)
                } catch (t) {
                    this.error(t)
                } else r = t;
                if (!i) {
                    i = this.subjectSelector ? this.subjectSelector() : new s.a, n.set(e, i);
                    var o = new d(e, i, this);
                    if (this.destination.next(o), this.durationSelector) {
                        var a = void 0;
                        try {
                            a = this.durationSelector(new d(e, i))
                        } catch (t) {
                            return void this.error(t)
                        }
                        this.add(a.subscribe(new f(e, i, this)))
                    }
                }
                i.closed || i.next(r)
            }, e.prototype._error = function(t) {
                var e = this.groups;
                e && (e.forEach((function(e, n) {
                    e.error(t)
                })), e.clear()), this.destination.error(t)
            }, e.prototype._complete = function() {
                var t = this.groups;
                t && (t.forEach((function(t, e) {
                    t.complete()
                })), t.clear()), this.destination.complete()
            }, e.prototype.removeGroup = function(t) {
                this.groups.delete(t)
            }, e.prototype.unsubscribe = function() {
                this.closed || (this.attemptedToUnsubscribe = !0, 0 === this.count && t.prototype.unsubscribe.call(this))
            }, e
        }(i.a),
        f = function(t) {
            function e(e, n, r) {
                var i = t.call(this, n) || this;
                return i.key = e, i.group = n, i.parent = r, i
            }
            return r.a(e, t), e.prototype._next = function(t) {
                this.complete()
            }, e.prototype._unsubscribe = function() {
                var t = this.parent,
                    e = this.key;
                this.key = this.parent = null, t && t.removeGroup(e)
            }, e
        }(i.a),
        d = function(t) {
            function e(e, n, r) {
                var i = t.call(this) || this;
                return i.key = e, i.groupSubject = n, i.refCountSubscription = r, i
            }
            return r.a(e, t), e.prototype._subscribe = function(t) {
                var e = new o.a,
                    n = this.refCountSubscription,
                    r = this.groupSubject;
                return n && !n.closed && e.add(new p(n)), e.add(r.subscribe(t)), e
            }, e
        }(a.a),
        p = function(t) {
            function e(e) {
                var n = t.call(this) || this;
                return n.parent = e, e.count++, n
            }
            return r.a(e, t), e.prototype.unsubscribe = function() {
                var e = this.parent;
                e.closed || this.closed || (t.prototype.unsubscribe.call(this), e.count -= 1, 0 === e.count && e.attemptedToUnsubscribe && e.unsubscribe())
            }, e
        }(o.a)
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return o
    })), n.d(e, "b", (function() {
        return a
    }));
    var r = n(14),
        i = n(75),
        o = new r.a(i.a);

    function a() {
        return o
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return c
    })), n.d(e, "b", (function() {
        return l
    }));
    var r = n(2),
        i = n(33),
        o = n(14),
        a = n(11),
        s = n(28),
        u = n(183),
        c = function(t) {
            function e(e, n) {
                var r = t.call(this) || this;
                return r.source = e, r.subjectFactory = n, r._refCount = 0, r._isComplete = !1, r
            }
            return r.a(e, t), e.prototype._subscribe = function(t) {
                return this.getSubject().subscribe(t)
            }, e.prototype.getSubject = function() {
                var t = this._subject;
                return t && !t.isStopped || (this._subject = this.subjectFactory()), this._subject
            }, e.prototype.connect = function() {
                var t = this._connection;
                return t || (this._isComplete = !1, (t = this._connection = new s.a).add(this.source.subscribe(new f(this.getSubject(), this))), t.closed && (this._connection = null, t = s.a.EMPTY)), t
            }, e.prototype.refCount = function() {
                return Object(u.a)()(this)
            }, e
        }(o.a),
        l = function() {
            var t = c.prototype;
            return {
                operator: {
                    value: null
                },
                _refCount: {
                    value: 0,
                    writable: !0
                },
                _subject: {
                    value: null,
                    writable: !0
                },
                _connection: {
                    value: null,
                    writable: !0
                },
                _subscribe: {
                    value: t._subscribe
                },
                _isComplete: {
                    value: t._isComplete,
                    writable: !0
                },
                getSubject: {
                    value: t.getSubject
                },
                connect: {
                    value: t.connect
                },
                refCount: {
                    value: t.refCount
                }
            }
        }(),
        f = function(t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                return r.connectable = n, r
            }
            return r.a(e, t), e.prototype._error = function(e) {
                this._unsubscribe(), t.prototype._error.call(this, e)
            }, e.prototype._complete = function() {
                this.connectable._isComplete = !0, this._unsubscribe(), t.prototype._complete.call(this)
            }, e.prototype._unsubscribe = function() {
                var t = this.connectable;
                if (t) {
                    this.connectable = null;
                    var e = t._connection;
                    t._refCount = 0, t._subject = null, t._connection = null, e && e.unsubscribe()
                }
            }, e
        }(i.b);
    a.a
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return r
    }));
    var r = function() {
        function t() {
            return Error.call(this), this.message = "Timeout has occurred", this.name = "TimeoutError", this
        }
        return t.prototype = Object.create(Error.prototype), t
    }()
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return i
    }));
    var r = n(221);

    function i() {
        return Object(r.a)(1)
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return u
    }));
    var r = n(2),
        i = n(42),
        o = n(133),
        a = n(20),
        s = n(18);

    function u() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        if (1 === t.length) {
            if (!Object(i.a)(t[0])) return t[0];
            t = t[0]
        }
        return Object(o.a)(t, void 0).lift(new c)
    }
    var c = function() {
            function t() {}
            return t.prototype.call = function(t, e) {
                return e.subscribe(new l(t))
            }, t
        }(),
        l = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.hasFirst = !1, n.observables = [], n.subscriptions = [], n
            }
            return r.a(e, t), e.prototype._next = function(t) {
                this.observables.push(t)
            }, e.prototype._complete = function() {
                var t = this.observables,
                    e = t.length;
                if (0 === e) this.destination.complete();
                else {
                    for (var n = 0; n < e && !this.hasFirst; n++) {
                        var r = t[n],
                            i = Object(s.a)(this, r, r, n);
                        this.subscriptions && this.subscriptions.push(i), this.add(i)
                    }
                    this.observables = null
                }
            }, e.prototype.notifyNext = function(t, e, n, r, i) {
                if (!this.hasFirst) {
                    this.hasFirst = !0;
                    for (var o = 0; o < this.subscriptions.length; o++)
                        if (o !== n) {
                            var a = this.subscriptions[o];
                            a.unsubscribe(), this.remove(a)
                        } this.subscriptions = null
                }
                this.destination.next(e)
            }, e
        }(a.a)
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return u
    }));
    var r = n(2),
        i = n(44),
        o = n(298),
        a = n(20),
        s = n(18);

    function u(t, e, n) {
        return void 0 === n && (n = i.a),
            function(r) {
                var i = Object(o.a)(t),
                    a = i ? +t - n.now() : Math.abs(t);
                return r.lift(new c(a, i, e, n))
            }
    }
    var c = function() {
            function t(t, e, n, r) {
                this.waitFor = t, this.absoluteTimeout = e, this.withObservable = n, this.scheduler = r
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new l(t, this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler))
            }, t
        }(),
        l = function(t) {
            function e(e, n, r, i, o) {
                var a = t.call(this, e) || this;
                return a.absoluteTimeout = n, a.waitFor = r, a.withObservable = i, a.scheduler = o, a.action = null, a.scheduleTimeout(), a
            }
            return r.a(e, t), e.dispatchTimeout = function(t) {
                var e = t.withObservable;
                t._unsubscribeAndRecycle(), t.add(Object(s.a)(t, e))
            }, e.prototype.scheduleTimeout = function() {
                var t = this.action;
                t ? this.action = t.schedule(this, this.waitFor) : this.add(this.action = this.scheduler.schedule(e.dispatchTimeout, this.waitFor, this))
            }, e.prototype._next = function(e) {
                this.absoluteTimeout || this.scheduleTimeout(), t.prototype._next.call(this, e)
            }, e.prototype._unsubscribe = function() {
                this.action = null, this.scheduler = null, this.withObservable = null
            }, e
        }(a.a)
}, function(t, e, n) {
    "use strict";
    var r = n(14),
        i = n(28),
        o = n(97),
        a = n(225),
        s = n(102),
        u = n(296),
        c = n(295);

    function l(t, e) {
        if (null != t) {
            if (function(t) {
                    return t && "function" == typeof t[o.a]
                }(t)) return function(t, e) {
                return new r.a((function(n) {
                    var r = new i.a;
                    return r.add(e.schedule((function() {
                        var i = t[o.a]();
                        r.add(i.subscribe({
                            next: function(t) {
                                r.add(e.schedule((function() {
                                    return n.next(t)
                                })))
                            },
                            error: function(t) {
                                r.add(e.schedule((function() {
                                    return n.error(t)
                                })))
                            },
                            complete: function() {
                                r.add(e.schedule((function() {
                                    return n.complete()
                                })))
                            }
                        }))
                    }))), r
                }))
            }(t, e);
            if (Object(u.a)(t)) return function(t, e) {
                return new r.a((function(n) {
                    var r = new i.a;
                    return r.add(e.schedule((function() {
                        return t.then((function(t) {
                            r.add(e.schedule((function() {
                                n.next(t), r.add(e.schedule((function() {
                                    return n.complete()
                                })))
                            })))
                        }), (function(t) {
                            r.add(e.schedule((function() {
                                return n.error(t)
                            })))
                        }))
                    }))), r
                }))
            }(t, e);
            if (Object(c.a)(t)) return Object(a.a)(t, e);
            if (function(t) {
                    return t && "function" == typeof t[s.a]
                }(t) || "string" == typeof t) return function(t, e) {
                if (!t) throw new Error("Iterable cannot be null");
                return new r.a((function(n) {
                    var r, o = new i.a;
                    return o.add((function() {
                        r && "function" == typeof r.return && r.return()
                    })), o.add(e.schedule((function() {
                        r = t[s.a](), o.add(e.schedule((function() {
                            if (!n.closed) {
                                var t, e;
                                try {
                                    var i = r.next();
                                    t = i.value, e = i.done
                                } catch (t) {
                                    return void n.error(t)
                                }
                                e ? n.complete() : (n.next(t), this.schedule())
                            }
                        })))
                    }))), o
                }))
            }(t, e)
        }
        throw new TypeError((null !== t && typeof t || t) + " is not observable")
    }
    n.d(e, "a", (function() {
        return l
    }))
}, function(t, e, n) {
    "use strict";
    var r = n(2),
        i = function(t) {
            function e(e, n) {
                var r = t.call(this, e, n) || this;
                return r.scheduler = e, r.work = n, r
            }
            return r.a(e, t), e.prototype.schedule = function(e, n) {
                return void 0 === n && (n = 0), n > 0 ? t.prototype.schedule.call(this, e, n) : (this.delay = n, this.state = e, this.scheduler.flush(this), this)
            }, e.prototype.execute = function(e, n) {
                return n > 0 || this.closed ? t.prototype.execute.call(this, e, n) : this._execute(e, n)
            }, e.prototype.requestAsyncId = function(e, n, r) {
                return void 0 === r && (r = 0), null !== r && r > 0 || null === r && this.delay > 0 ? t.prototype.requestAsyncId.call(this, e, n, r) : e.flush(this)
            }, e
        }(n(136).a),
        o = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return r.a(e, t), e
        }(n(134).a);
    n.d(e, "a", (function() {
        return a
    }));
    var a = new o(i)
}, function(t, e, n) {
    "use strict";
    var r, i = n(72),
        o = n(58),
        a = n(43),
        s = n(255),
        u = function(t, e, n, r) {
            return new(n || (n = Promise))((function(i, o) {
                function a(t) {
                    try {
                        u(r.next(t))
                    } catch (t) {
                        o(t)
                    }
                }

                function s(t) {
                    try {
                        u(r.throw(t))
                    } catch (t) {
                        o(t)
                    }
                }

                function u(t) {
                    var e;
                    t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                        t(e)
                    }))).then(a, s)
                }
                u((r = r.apply(t, e || [])).next())
            }))
        };
    ! function(t) {
        t[t.nonEmptyMigration = 0] = "nonEmptyMigration", t[t.emptyMigration = 1] = "emptyMigration"
    }(r || (r = {}));
    class c {
        constructor(t, e, n, r = []) {
            var i, o;
            this._name = t, this._source = e, this._destination = n, this._destValuesToKeep = r, this._migrationFlagSuccessfulValue = "ok", this._migrationFlagUniqueKey = "104ccd8c-9919-9ae4-931f-782fb197486c", this._migrationFlagKey = `__migration-${this._migrationFlagUniqueKey}:(${this._name})`, this._migrationInProgress = !1, this.migrationAwareDestination = (i = this._destination, o = t => t === this._migrationFlagKey, {
                get: i.get.bind(i),
                set: i.set.bind(i),
                getAll: i.getAll.bind(i),
                remove: i.remove.bind(i),
                removeAll() {
                    return u(this, void 0, void 0, (function*() {
                        const t = yield i.getAll();
                        yield i.removeAll(), yield Promise.all(Object.keys(t).filter(o).map(e => i.set(e, t[e])))
                    }))
                }
            })
        }
        _getMigrated() {
            return this._destination.get(this._migrationFlagKey).then(t => t === this._migrationFlagSuccessfulValue)
        }
        _setMigrated() {
            return u(this, void 0, void 0, (function*() {
                yield this._destination.set(this._migrationFlagKey, this._migrationFlagSuccessfulValue);
                const t = yield this._destination.get(this._migrationFlagKey);
                if (t !== this._migrationFlagSuccessfulValue) throw new Error(`Could not verify status write, actual value: ${t}`)
            }))
        }
        _runMigration() {
            return u(this, void 0, void 0, (function*() {
                Object(o.b)(!this._migrationInProgress, "migration already in progress"), this._migrationInProgress = !0;
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
            return u(this, void 0, void 0, (function*() {
                if (yield this._getMigrated()) return a.a.alreadyMigrated; {
                    const t = yield this._runMigration();
                    switch (yield this._setMigrated(), t) {
                        case r.nonEmptyMigration:
                            return a.a.success;
                        case r.emptyMigration:
                            return a.a.successWithEmpty;
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
        return new(n || (n = Promise))((function(i, o) {
            function a(t) {
                try {
                    u(r.next(t))
                } catch (t) {
                    o(t)
                }
            }

            function s(t) {
                try {
                    u(r.throw(t))
                } catch (t) {
                    o(t)
                }
            }

            function u(t) {
                var e;
                t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                    t(e)
                }))).then(a, s)
            }
            u((r = r.apply(t, e || [])).next())
        }))
    };
    ! function(t) {
        t.windowLocalStorage = {
            get: t => i.a.sync(() => window.localStorage.getItem(t)),
            set: (t, e) => i.a.sync(() => window.localStorage.setItem(t, e)),
            getAll: () => i.a.sync(() => {
                const t = {};
                return Object.keys(window.localStorage).forEach(e => {
                    t[e] = window.localStorage.getItem(e)
                }), t
            }),
            remove: t => i.a.sync(() => window.localStorage.removeItem(t)),
            removeAll: () => i.a.sync(() => window.localStorage.clear())
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
                }, this._migration = new c("firefoxLocalStorageToExtApi", t.windowLocalStorage, this.browserStorageLocal, ["version"])
            }
            ensureMigrationCompleted() {
                this._ensureMigrationCompletedCalled = !0;
                const t = i.a.createCompletionSource();
                return this._migrationCompleted = t.promise, this._migration.ensureMigrationCompleted().then(e => (t.resolve(!0), Promise.resolve(e)), e => (t.resolve(!1), Promise.reject(e)))
            }
            _getMigrationAwareMethod(e) {
                return (...n) => (Object(o.b)(!0 === this._ensureMigrationCompletedCalled, "supposed to run data migration before accessing prefs with web-extensions API"), this._migrationCompleted.then(r => (r ? this._migration.migrationAwareDestination : t.windowLocalStorage)[e](...n)))
            }
        }
    }(l || (l = {}))
}, function(t, e, n) {
    "use strict";
    var r = n(114);

    function i(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.__data__ = new r.a; ++e < n;) this.add(t[e])
    }
    i.prototype.add = i.prototype.push = function(t) {
        return this.__data__.set(t, "__lodash_hash_undefined__"), this
    }, i.prototype.has = function(t) {
        return this.__data__.has(t)
    }, e.a = i
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return i
    }));
    var r = n(2),
        i = function(t) {
            function e(e, n) {
                var r = t.call(this) || this;
                return r.subject = e, r.subscriber = n, r.closed = !1, r
            }
            return r.a(e, t), e.prototype.unsubscribe = function() {
                if (!this.closed) {
                    this.closed = !0;
                    var t = this.subject,
                        e = t.observers;
                    if (this.subject = null, e && 0 !== e.length && !t.isStopped && !t.closed) {
                        var n = e.indexOf(this.subscriber); - 1 !== n && e.splice(n, 1)
                    }
                }
            }, e
        }(n(28).a)
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return r
    }));
    var r = function(t) {
        return function(e) {
            for (var n = 0, r = t.length; n < r && !e.closed; n++) e.next(t[n]);
            e.complete()
        }
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return r
    }));
    var r = function(t) {
        return t && "number" == typeof t.length && "function" != typeof t
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return !!t && "function" != typeof t.subscribe && "function" == typeof t.then
    }
    n.d(e, "a", (function() {
        return r
    }))
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        function n() {
            return !n.pred.apply(n.thisArg, arguments)
        }
        return n.pred = t, n.thisArg = e, n
    }
    n.d(e, "a", (function() {
        return r
    }))
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t instanceof Date && !isNaN(+t)
    }
    n.d(e, "a", (function() {
        return r
    }))
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return o
    }));
    var r = n(129),
        i = n(55);

    function o() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = t[t.length - 1];
        return Object(i.a)(n) ? (t.pop(), function(e) {
            return Object(r.a)(t, e, n)
        }) : function(e) {
            return Object(r.a)(t, e)
        }
    }
}, , , , function(t, e, n) {
    "use strict";
    var r = n(413),
        i = "object" == typeof self && self && self.Object === Object && self,
        o = (r.a || i || Function("return this")()).Symbol,
        a = Object.prototype,
        s = a.hasOwnProperty,
        u = a.toString,
        c = o ? o.toStringTag : void 0,
        l = Object.prototype.toString,
        f = o ? o.toStringTag : void 0,
        d = function(t) {
            return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : f && f in Object(t) ? function(t) {
                var e = s.call(t, c),
                    n = t[c];
                try {
                    t[c] = void 0;
                    var r = !0
                } catch (t) {}
                var i = u.call(t);
                return r && (e ? t[c] = n : delete t[c]), i
            }(t) : function(t) {
                return l.call(t)
            }(t)
        },
        p = function(t, e) {
            return function(n) {
                return t(e(n))
            }
        }(Object.getPrototypeOf, Object),
        h = Function.prototype,
        b = Object.prototype,
        m = h.toString,
        g = b.hasOwnProperty,
        v = m.call(Object),
        y = function(t) {
            if (! function(t) {
                    return null != t && "object" == typeof t
                }(t) || "[object Object]" != d(t)) return !1;
            var e = p(t);
            if (null === e) return !0;
            var n = g.call(e, "constructor") && e.constructor;
            return "function" == typeof n && n instanceof n && m.call(n) == v
        },
        _ = n(335),
        w = {
            INIT: "@@redux/INIT"
        };

    function E(t, e, n) {
        var r;
        if ("function" == typeof e && void 0 === n && (n = e, e = void 0), void 0 !== n) {
            if ("function" != typeof n) throw new Error("Expected the enhancer to be a function.");
            return n(E)(t, e)
        }
        if ("function" != typeof t) throw new Error("Expected the reducer to be a function.");
        var i = t,
            o = e,
            a = [],
            s = a,
            u = !1;

        function c() {
            s === a && (s = a.slice())
        }

        function l() {
            return o
        }

        function f(t) {
            if ("function" != typeof t) throw new Error("Expected listener to be a function.");
            var e = !0;
            return c(), s.push(t),
                function() {
                    if (e) {
                        e = !1, c();
                        var n = s.indexOf(t);
                        s.splice(n, 1)
                    }
                }
        }

        function d(t) {
            if (!y(t)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
            if (void 0 === t.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
            if (u) throw new Error("Reducers may not dispatch actions.");
            try {
                u = !0, o = i(o, t)
            } finally {
                u = !1
            }
            for (var e = a = s, n = 0; n < e.length; n++)(0, e[n])();
            return t
        }
        return d({
            type: w.INIT
        }), (r = {
            dispatch: d,
            subscribe: f,
            getState: l,
            replaceReducer: function(t) {
                if ("function" != typeof t) throw new Error("Expected the nextReducer to be a function.");
                i = t, d({
                    type: w.INIT
                })
            }
        })[_.a] = function() {
            var t, e = f;
            return (t = {
                subscribe: function(t) {
                    if ("object" != typeof t) throw new TypeError("Expected the observer to be an object.");

                    function n() {
                        t.next && t.next(l())
                    }
                    return n(), {
                        unsubscribe: e(n)
                    }
                }
            })[_.a] = function() {
                return this
            }, t
        }, r
    }

    function O(t, e) {
        var n = e && e.type;
        return "Given action " + (n && '"' + n.toString() + '"' || "an action") + ', reducer "' + t + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
    }

    function x(t) {
        for (var e = Object.keys(t), n = {}, r = 0; r < e.length; r++) {
            var i = e[r];
            "function" == typeof t[i] && (n[i] = t[i])
        }
        var o = Object.keys(n),
            a = void 0;
        try {
            ! function(t) {
                Object.keys(t).forEach((function(e) {
                    var n = t[e];
                    if (void 0 === n(void 0, {
                            type: w.INIT
                        })) throw new Error('Reducer "' + e + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
                    if (void 0 === n(void 0, {
                            type: "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".")
                        })) throw new Error('Reducer "' + e + "\" returned undefined when probed with a random type. Don't try to handle " + w.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')
                }))
            }(n)
        } catch (t) {
            a = t
        }
        return function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = arguments[1];
            if (a) throw a;
            for (var r = !1, i = {}, s = 0; s < o.length; s++) {
                var u = o[s],
                    c = n[u],
                    l = t[u],
                    f = c(l, e);
                if (void 0 === f) {
                    var d = O(u, e);
                    throw new Error(d)
                }
                i[u] = f, r = r || f !== l
            }
            return r ? i : t
        }
    }

    function S(t, e) {
        return function() {
            return e(t.apply(void 0, arguments))
        }
    }

    function T(t, e) {
        if ("function" == typeof t) return S(t, e);
        if ("object" != typeof t || null === t) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === t ? "null" : typeof t) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
        for (var n = Object.keys(t), r = {}, i = 0; i < n.length; i++) {
            var o = n[i],
                a = t[o];
            "function" == typeof a && (r[o] = S(a, e))
        }
        return r
    }

    function k() {
        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return 0 === e.length ? function(t) {
            return t
        } : 1 === e.length ? e[0] : e.reduce((function(t, e) {
            return function() {
                return t(e.apply(void 0, arguments))
            }
        }))
    }
    var C = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
        }
        return t
    };

    function N() {
        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return function(t) {
            return function(n, r, i) {
                var o, a = t(n, r, i),
                    s = a.dispatch,
                    u = {
                        getState: a.getState,
                        dispatch: function(t) {
                            return s(t)
                        }
                    };
                return o = e.map((function(t) {
                    return t(u)
                })), s = k.apply(void 0, o)(a.dispatch), C({}, a, {
                    dispatch: s
                })
            }
        }
    }
    n.d(e, "d", (function() {
        return E
    })), n.d(e, "c", (function() {
        return x
    })), n.d(e, "b", (function() {
        return T
    })), n.d(e, "a", (function() {
        return N
    }))
}, , function(t, e, n) {
    "use strict";
    var r, i;
    n.d(e, "b", (function() {
            return r
        })), n.d(e, "a", (function() {
            return i
        })),
        function(t) {
            t.anonymous = "anonymous", t.registered = "registered", t.premium = "premium"
        }(r || (r = {})),
        function(t) {
            t.getType = function(t) {
                return t.premium ? r.premium : t.anonymous ? r.anonymous : r.registered
            }, t.isEdcBlocked = function(t) {
                return !!t.edc && !t.edc.compliant
            }
        }(i || (i = {}))
}, function(t, e, n) {
    "use strict";
    var r = n(224),
        i = n(77),
        o = function(t, e) {
            return function(e, n) {
                if (null == e) return e;
                if (!Object(i.a)(e)) return t(e, n);
                for (var r = e.length, o = -1, a = Object(e); ++o < r && !1 !== n(a[o], o, a););
                return e
            }
        }(r.a);
    e.a = o
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return s
    })), n.d(e, "b", (function() {
        return u
    }));
    var r = n(144),
        i = n(74),
        o = n(22),
        a = n(430);
    class s extends r.a {
        constructor(t) {
            super({
                browser: t.browser,
                context: "cs"
            }), this.browserApi = t.browserApi, o.init(t.browserApi.message), Object(i.e)(t.browserApi), this.bgRpc = new a.a(o)
        }
        static getInstance() {
            if (void 0 === this._instance) throw new Error("Env not inited yet");
            return this._instance
        }
        static init(t) {
            if (void 0 !== this._instance) throw new Error("Env already inited");
            const e = new s(t);
            return this._instance = e, r.a.initShared(e), e.browserApi.message.start && e.browserApi.message.start(), e
        }
    }

    function u() {
        return s.getInstance()
    }
}, , , , , , function(t, e, n) {
    "use strict";

    function r(t) {
        for (var e, n = []; !(e = t.next()).done;) n.push(e.value);
        return n
    }

    function i(t, e) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }

    function o(t, e) {
        return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a, s, u, c, l = function() {
            var t = Object.prototype.toString;
            return "[object Arguments]" === t.call(arguments) ? function(e) {
                return "[object Arguments]" === t.call(e)
            } : function(t) {
                return i("callee", t)
            }
        }(),
        f = (a = !{
            toString: null
        }.propertyIsEnumerable("toString"), s = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"], u = function() {
            return arguments.propertyIsEnumerable("length")
        }(), c = function(t, e) {
            for (var n = 0; n < t.length;) {
                if (t[n] === e) return !0;
                n += 1
            }
            return !1
        }, "function" != typeof Object.keys || u ? function(t) {
            if (Object(t) !== t) return [];
            var e, n, r = [],
                o = u && l(t);
            for (e in t) !i(e, t) || o && "length" === e || (r[r.length] = e);
            if (a)
                for (n = s.length - 1; n >= 0;) i(e = s[n], t) && !c(r, e) && (r[r.length] = e), n -= 1;
            return r
        } : function(t) {
            return Object(t) !== t ? [] : Object.keys(t)
        });

    function d(t) {
        return null === t ? "Null" : void 0 === t ? "Undefined" : Object.prototype.toString.call(t).slice(8, -1)
    }
    e.equals = function t(e, n, a, s) {
        if (void 0 === a && (a = []), void 0 === s && (s = []), o(e, n)) return !0;
        if (d(e) !== d(n)) return !1;
        if (null == e || null == n) return !1;
        if ("function" == typeof e.equals || "function" == typeof n.equals) return "function" == typeof e.equals && e.equals(n) && "function" == typeof n.equals && n.equals(e);
        switch (d(e)) {
            case "Arguments":
            case "Array":
            case "Object":
                if ("function" == typeof e.constructor && "Promise" === (u = e.constructor, null == (c = String(u).match(/^function (\w*)/)) ? "" : c[1])) return e === n;
                break;
            case "Boolean":
            case "Number":
            case "String":
                if (typeof e != typeof n || !o(e.valueOf(), n.valueOf())) return !1;
                break;
            case "Date":
                if (!o(e.valueOf(), n.valueOf())) return !1;
                break;
            case "Error":
                return e.name === n.name && e.message === n.message;
            case "RegExp":
                if (e.source !== n.source || e.global !== n.global || e.ignoreCase !== n.ignoreCase || e.multiline !== n.multiline || e.sticky !== n.sticky || e.unicode !== n.unicode) return !1;
                break;
            case "Map":
            case "Set":
                if (!t(r(e.entries()), r(n.entries()), a, s)) return !1;
                break;
            case "Int8Array":
            case "Uint8Array":
            case "Uint8ClampedArray":
            case "Int16Array":
            case "Uint16Array":
            case "Int32Array":
            case "Uint32Array":
            case "Float32Array":
            case "Float64Array":
            case "ArrayBuffer":
                break;
            default:
                return !1
        }
        var u, c, l = f(e);
        if (l.length !== f(n).length) return !1;
        for (var p = a.length - 1; p >= 0;) {
            if (a[p] === e) return s[p] === n;
            p -= 1
        }
        for (a.push(e), s.push(n), p = l.length - 1; p >= 0;) {
            var h = l[p];
            if (!i(h, n) || !t(n[h], e[h], a, s)) return !1;
            p -= 1
        }
        return a.pop(), s.pop(), !0
    }
}, function(t, e, n) {
    "use strict";
    var r = n(38),
        i = n(16),
        o = n(14),
        a = n(72),
        s = n(4),
        u = n(272),
        c = n(12);
    class l {
        constructor() {
            this._log = c.a.create("extension-api.alarms.stub"), this._warning = "Method is not implemented"
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

    function d(t, e) {
        chrome.runtime.lastError ? e(chrome.runtime.lastError) : t()
    }
    class p {
        constructor() {
            this._log = c.a.create("extension-api.managed-storage.validator")
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
    class h {
        constructor() {
            this._log = c.a.create("extension-api.managed-storage.chrome"), this._validator = new p
        }
        get(t) {
            return new Promise((e, n) => {
                chrome.storage.managed.get(t, r => {
                    d(() => {
                        const n = r[t];
                        void 0 === n || this._validator.validate(t, n) ? e(n) : (this._log.warn(`Invalid value for "${t}": ${JSON.stringify(r[t])}`), e(void 0))
                    }, e => {
                        this._log.error(`Could not get "${t}"`, e), n(e)
                    })
                })
            })
        }
    }
    var b = n(190),
        m = n(199);
    class g {
        constructor() {
            this.kind = "web-extension"
        }
        open(t, e) {
            return a.a.create((n, r) => {
                chrome.tabs.create({
                    url: t,
                    active: e
                }, t => {
                    d(() => n(t), r)
                })
            })
        }
        updateCurrent(t) {
            return a.a.create((e, n) => {
                chrome.tabs.update({
                    url: t
                }, t => {
                    d(() => e(t), n)
                })
            })
        }
        getActiveTab() {
            return a.a.create((t, e) => {
                const n = chrome.tabs;
                n.query({
                    active: !0,
                    lastFocusedWindow: !0
                }, r => {
                    d(() => {
                        r && r.length ? t(r[0]) : n.query({
                            active: !0
                        }, n => {
                            d(() => {
                                t(n[0])
                            }, e)
                        })
                    }, e)
                })
            })
        }
        getAllTabs() {
            return a.a.create((t, e) => chrome.tabs.query({}, n => d(() => t(n), e)))
        }
        getActiveTabUrl() {
            return a.a.create((t, e) => this.getActiveTab().then(n => d(() => t(n && n.url), e)))
        }
        onActiveTabChange(t, e) {
            const n = n => {
                d(() => {
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
            return new o.a(t => {
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
            return a.a.create((e, n) => {
                const r = () => d(() => e(), n);
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
        return x
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
    class E {
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
            this.alarms = new f, this.managedStorage = new h, this.tabs = new g, this.notification = {
                kind: "web-extension",
                create: t => a.a.create((e, n) => {
                    const r = chrome.notifications,
                        a = Object(i.r)();
                    r.create(a, Object.assign({
                        type: "basic"
                    }, t), () => {
                        d(() => {
                            const t = new o.a(t => {
                                    const e = e => e === a && t.next(e);
                                    return r.onClicked.addListener(e), () => r.onClicked.removeListener(e)
                                }),
                                n = new o.a(t => {
                                    const e = (e, n) => e === a && t.next({
                                        id: e,
                                        buttonIndex: n
                                    });
                                    return r.onButtonClicked.addListener(e), () => r.onButtonClicked.removeListener(e)
                                }),
                                i = new o.a(t => {
                                    const e = (e, n) => e === a && t.next({
                                        id: e,
                                        byUser: n
                                    });
                                    return r.onClosed.addListener(e), () => r.onClosed.removeListener(e)
                                });
                            e({
                                id: a,
                                click: t,
                                buttonClick: n,
                                close: i
                            })
                        }, n)
                    })
                }),
                clear: t => a.a.create((e, n) => {
                    chrome.notifications.clear(t, t => {
                        d(() => e(t), n)
                    })
                })
            }, this.cookies = {
                kind: "web-extension",
                get: t => a.a.create((e, n) => chrome.cookies.get(t, t => d(() => e(t), n))),
                remove: t => new Promise((e, n) => chrome.cookies.remove(t, () => d(() => e(null), n))),
                getAll: t => a.a.create((e, n) => chrome.cookies.getAll(t, t => d(() => e(t), n))),
                set: t => a.a.create((e, n) => chrome.cookies.set(t, t => d(() => e(t), n))),
                watch(t, e) {
                    chrome.cookies.onChanged.addListener(n => {
                        const {
                            cookie: r,
                            cause: i
                        } = n;
                        !r || !r.name || t.path && t.path !== r.path || t.name !== r.name || t.domain && -1 === r.domain.indexOf(t.domain) || ("explicit" === i && e(r), "expired_overwrite" === i && e())
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
            }, this._baseUrl = Object(s.p)(() => chrome.extension.getURL(""), t => null), this.fetchBlacklistConfig = () => y(), this.getUrl = t => this._baseUrl ? this._baseUrl + t : chrome.extension.getURL(t), this.openUrl = t => this.tabs.open(t, !0), this.openPopupSubscriptionDialog = t => this.openUrl(Object(r.p)(t.utmSource, t.utmCampaign)), this.openSubscriptionDialog = t => Object(u.b)(t), this.isExtensionUrl = (t, e) => this.getUrl(t) === e, this.reload = () => chrome.runtime.reload(), this.message = t ? new b.a(t => chrome.runtime.onConnect.addListener(e => t(new E(e))), this.tabs.getActiveTab.bind(this.tabs), this.tabs.getAllTabs.bind(this.tabs)) : new m.a(t => new w(t))
        }
    }

    function x(t) {
        return new O(t)
    }
}, function(t, e, n) {
    "use strict";
    var r = n(108),
        i = n(169),
        o = n(84),
        a = function(t, e, n) {
            (void 0 === n || Object(o.a)(t[e], n)) && (void 0 !== n || e in t) || Object(i.a)(t, e, n)
        },
        s = n(213),
        u = n(348),
        c = n(152),
        l = function(t, e) {
            var n = e ? function(t) {
                var e = new t.constructor(t.byteLength);
                return new c.a(e).set(new c.a(t)), e
            }(t.buffer) : t.buffer;
            return new t.constructor(n, t.byteOffset, t.length)
        },
        f = n(211),
        d = n(157),
        p = n(128),
        h = function(t) {
            return "function" != typeof t.constructor || Object(p.a)(t) ? {} : Object(f.a)(Object(d.a)(t))
        },
        b = n(99),
        m = n(27),
        g = n(322),
        v = n(82),
        y = n(86),
        _ = n(31),
        w = n(52),
        E = n(46),
        O = Function.prototype,
        x = Object.prototype,
        S = O.toString,
        T = x.hasOwnProperty,
        k = S.call(Object),
        C = function(t) {
            if (!Object(E.a)(t) || "[object Object]" != Object(w.a)(t)) return !1;
            var e = Object(d.a)(t);
            if (null === e) return !0;
            var n = T.call(e, "constructor") && e.constructor;
            return "function" == typeof n && n instanceof n && S.call(n) == k
        },
        N = n(91),
        j = function(t, e) {
            if (("constructor" !== e || "function" != typeof t[e]) && "__proto__" != e) return t[e]
        },
        I = n(280),
        A = n(196),
        P = function(t, e, n, r, i, o, s) {
            var c = j(t, n),
                f = j(e, n),
                d = s.get(f);
            if (d) a(t, n, d);
            else {
                var p = o ? o(c, f, n + "", t, e, s) : void 0,
                    w = void 0 === p;
                if (w) {
                    var E = Object(m.a)(f),
                        O = !E && Object(v.a)(f),
                        x = !E && !O && Object(N.a)(f);
                    p = f, E || O || x ? Object(m.a)(c) ? p = c : Object(g.a)(c) ? p = function(t, e) {
                        var n = -1,
                            r = t.length;
                        for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
                        return e
                    }(c) : O ? (w = !1, p = Object(u.a)(f, !0)) : x ? (w = !1, p = l(f, !0)) : p = [] : C(f) || Object(b.a)(f) ? (p = c, Object(b.a)(c) ? p = function(t) {
                        return Object(I.a)(t, Object(A.a)(t))
                    }(c) : Object(_.a)(c) && !Object(y.a)(c) || (p = h(f))) : w = !1
                }
                w && (s.set(f, p), i(p, f, r, o, s), s.delete(f)), a(t, n, p)
            }
        },
        M = n(279),
        D = Object(M.a)((function(t, e, n) {
            ! function t(e, n, i, o, u) {
                e !== n && Object(s.a)(n, (function(s, c) {
                    if (u || (u = new r.a), Object(_.a)(s)) P(e, n, c, i, t, o, u);
                    else {
                        var l = o ? o(j(e, c), s, c + "", e, n, u) : void 0;
                        void 0 === l && (l = s), a(e, c, l)
                    }
                }), A.a)
            }(t, e, n)
        }));
    e.a = D
}, , , , , , , function(t, e, n) {
    "use strict";
    var r = n(77),
        i = n(46);
    e.a = function(t) {
        return Object(i.a)(t) && Object(r.a)(t)
    }
}, function(t, e, n) {
    "use strict";
    var r = n(117),
        i = function(t, e, n) {
            switch (n.length) {
                case 0:
                    return t.call(e);
                case 1:
                    return t.call(e, n[0]);
                case 2:
                    return t.call(e, n[0], n[1]);
                case 3:
                    return t.call(e, n[0], n[1], n[2])
            }
            return t.apply(e, n)
        },
        o = Math.max,
        a = function(t) {
            return function() {
                return t
            }
        },
        s = n(171),
        u = s.a ? function(t, e) {
            return Object(s.a)(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value: a(e),
                writable: !0
            })
        } : r.a,
        c = Date.now,
        l = function(t) {
            var e = 0,
                n = 0;
            return function() {
                var r = c(),
                    i = 16 - (r - n);
                if (n = r, i > 0) {
                    if (++e >= 800) return arguments[0]
                } else e = 0;
                return t.apply(void 0, arguments)
            }
        }(u);
    e.a = function(t, e) {
        return l(function(t, e, n) {
            return e = o(void 0 === e ? t.length - 1 : e, 0),
                function() {
                    for (var r = arguments, a = -1, s = o(r.length - e, 0), u = Array(s); ++a < s;) u[a] = r[e + a];
                    a = -1;
                    for (var c = Array(e + 1); ++a < e;) c[a] = r[a];
                    return c[e] = n(u), i(t, this, c)
                }
        }(t, e, r.a), t + "")
    }
}, function(t, e, n) {
    "use strict";
    var r = n(31),
        i = n(36),
        o = function() {
            return i.a.Date.now()
        },
        a = n(109),
        s = /^\s+|\s+$/g,
        u = /^[-+]0x[0-9a-f]+$/i,
        c = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        f = parseInt,
        d = function(t) {
            if ("number" == typeof t) return t;
            if (Object(a.a)(t)) return NaN;
            if (Object(r.a)(t)) {
                var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                t = Object(r.a)(e) ? e + "" : e
            }
            if ("string" != typeof t) return 0 === t ? t : +t;
            t = t.replace(s, "");
            var n = c.test(t);
            return n || l.test(t) ? f(t.slice(2), n ? 2 : 8) : u.test(t) ? NaN : +t
        },
        p = Math.max,
        h = Math.min;
    e.a = function(t, e, n) {
        var i, a, s, u, c, l, f = 0,
            b = !1,
            m = !1,
            g = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");

        function v(e) {
            var n = i,
                r = a;
            return i = a = void 0, f = e, u = t.apply(r, n)
        }

        function y(t) {
            var n = t - l;
            return void 0 === l || n >= e || n < 0 || m && t - f >= s
        }

        function _() {
            var t = o();
            if (y(t)) return w(t);
            c = setTimeout(_, function(t) {
                var n = e - (t - l);
                return m ? h(n, s - (t - f)) : n
            }(t))
        }

        function w(t) {
            return c = void 0, g && i ? v(t) : (i = a = void 0, u)
        }

        function E() {
            var t = o(),
                n = y(t);
            if (i = arguments, a = this, l = t, n) {
                if (void 0 === c) return function(t) {
                    return f = t, c = setTimeout(_, e), b ? v(t) : u
                }(l);
                if (m) return clearTimeout(c), c = setTimeout(_, e), v(l)
            }
            return void 0 === c && (c = setTimeout(_, e)), u
        }
        return e = d(e) || 0, Object(r.a)(n) && (b = !!n.leading, s = (m = "maxWait" in n) ? p(d(n.maxWait) || 0, e) : s, g = "trailing" in n ? !!n.trailing : g), E.cancel = function() {
            void 0 !== c && clearTimeout(c), f = 0, i = l = a = c = void 0
        }, E.flush = function() {
            return void 0 === c ? u : w(o())
        }, E
    }
}, , , function(t, e, n) {
    (function(t) {
        function n(t, e) {
            for (var n = 0, r = t.length - 1; r >= 0; r--) {
                var i = t[r];
                "." === i ? t.splice(r, 1) : ".." === i ? (t.splice(r, 1), n++) : n && (t.splice(r, 1), n--)
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
            for (var e = "", i = !1, o = arguments.length - 1; o >= -1 && !i; o--) {
                var a = o >= 0 ? arguments[o] : t.cwd();
                if ("string" != typeof a) throw new TypeError("Arguments to path.resolve must be strings");
                a && (e = a + "/" + e, i = "/" === a.charAt(0))
            }
            return (i ? "/" : "") + (e = n(r(e.split("/"), (function(t) {
                return !!t
            })), !i).join("/")) || "."
        }, e.normalize = function(t) {
            var o = e.isAbsolute(t),
                a = "/" === i(t, -1);
            return (t = n(r(t.split("/"), (function(t) {
                return !!t
            })), !o).join("/")) || o || (t = "."), t && a && (t += "/"), (o ? "/" : "") + t
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
            for (var i = r(t.split("/")), o = r(n.split("/")), a = Math.min(i.length, o.length), s = a, u = 0; u < a; u++)
                if (i[u] !== o[u]) {
                    s = u;
                    break
                } var c = [];
            for (u = s; u < i.length; u++) c.push("..");
            return (c = c.concat(o.slice(s))).join("/")
        }, e.sep = "/", e.delimiter = ":", e.dirname = function(t) {
            if ("string" != typeof t && (t += ""), 0 === t.length) return ".";
            for (var e = t.charCodeAt(0), n = 47 === e, r = -1, i = !0, o = t.length - 1; o >= 1; --o)
                if (47 === (e = t.charCodeAt(o))) {
                    if (!i) {
                        r = o;
                        break
                    }
                } else i = !1;
            return -1 === r ? n ? "/" : "." : n && 1 === r ? "/" : t.slice(0, r)
        }, e.basename = function(t, e) {
            var n = function(t) {
                "string" != typeof t && (t += "");
                var e, n = 0,
                    r = -1,
                    i = !0;
                for (e = t.length - 1; e >= 0; --e)
                    if (47 === t.charCodeAt(e)) {
                        if (!i) {
                            n = e + 1;
                            break
                        }
                    } else -1 === r && (i = !1, r = e + 1);
                return -1 === r ? "" : t.slice(n, r)
            }(t);
            return e && n.substr(-1 * e.length) === e && (n = n.substr(0, n.length - e.length)), n
        }, e.extname = function(t) {
            "string" != typeof t && (t += "");
            for (var e = -1, n = 0, r = -1, i = !0, o = 0, a = t.length - 1; a >= 0; --a) {
                var s = t.charCodeAt(a);
                if (47 !== s) - 1 === r && (i = !1, r = a + 1), 46 === s ? -1 === e ? e = a : 1 !== o && (o = 1) : -1 !== e && (o = -1);
                else if (!i) {
                    n = a + 1;
                    break
                }
            }
            return -1 === e || -1 === r || 0 === o || 1 === o && e === r - 1 && e === n + 1 ? "" : t.slice(e, r)
        };
        var i = "b" === "ab".substr(-1) ? function(t, e, n) {
            return t.substr(e, n)
        } : function(t, e, n) {
            return e < 0 && (e = t.length + e), t.substr(e, n)
        }
    }).call(this, n(217))
}, function(t, e, n) {
    "use strict";
    n.d(e, "b", (function() {
        return o
    })), n.d(e, "a", (function() {
        return a
    }));
    var r = n(2),
        i = n(136),
        o = function(t) {
            function e(e, n) {
                void 0 === e && (e = a), void 0 === n && (n = Number.POSITIVE_INFINITY);
                var r = t.call(this, e, (function() {
                    return r.frame
                })) || this;
                return r.maxFrames = n, r.frame = 0, r.index = -1, r
            }
            return r.a(e, t), e.prototype.flush = function() {
                for (var t, e, n = this.actions, r = this.maxFrames;
                    (e = n[0]) && e.delay <= r && (n.shift(), this.frame = e.delay, !(t = e.execute(e.state, e.delay))););
                if (t) {
                    for (; e = n.shift();) e.unsubscribe();
                    throw t
                }
            }, e.frameTimeFactor = 10, e
        }(n(134).a),
        a = function(t) {
            function e(e, n, r) {
                void 0 === r && (r = e.index += 1);
                var i = t.call(this, e, n) || this;
                return i.scheduler = e, i.work = n, i.index = r, i.active = !0, i.index = e.index = r, i
            }
            return r.a(e, t), e.prototype.schedule = function(n, r) {
                if (void 0 === r && (r = 0), !this.id) return t.prototype.schedule.call(this, n, r);
                this.active = !1;
                var i = new e(this.scheduler, this.work);
                return this.add(i), i.schedule(n, r)
            }, e.prototype.requestAsyncId = function(t, n, r) {
                void 0 === r && (r = 0), this.delay = t.frame + r;
                var i = t.actions;
                return i.push(this), i.sort(e.sortActions), !0
            }, e.prototype.recycleAsyncId = function(t, e, n) {
                void 0 === n && (n = 0)
            }, e.prototype._execute = function(e, n) {
                if (!0 === this.active) return t.prototype._execute.call(this, e, n)
            }, e.sortActions = function(t, e) {
                return t.delay === e.delay ? t.index === e.index ? 0 : t.index > e.index ? 1 : -1 : t.delay > e.delay ? 1 : -1
            }, e
        }(i.a)
}, , , function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return a
    }));
    var r = n(42),
        i = n(151),
        o = n(62);

    function a() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = null;
        return "function" == typeof t[t.length - 1] && (n = t.pop()), 1 === t.length && Object(r.a)(t[0]) && (t = t[0].slice()),
            function(e) {
                return e.lift.call(Object(o.a)([e].concat(t)), new i.a(n))
            }
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return u
    }));
    var r = n(2),
        i = n(44),
        o = n(298),
        a = n(11),
        s = n(95);

    function u(t, e) {
        void 0 === e && (e = i.a);
        var n = Object(o.a)(t) ? +t - e.now() : Math.abs(t);
        return function(t) {
            return t.lift(new c(n, e))
        }
    }
    var c = function() {
            function t(t, e) {
                this.delay = t, this.scheduler = e
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new l(t, this.delay, this.scheduler))
            }, t
        }(),
        l = function(t) {
            function e(e, n, r) {
                var i = t.call(this, e) || this;
                return i.delay = n, i.scheduler = r, i.queue = [], i.active = !1, i.errored = !1, i
            }
            return r.a(e, t), e.dispatch = function(t) {
                for (var e = t.source, n = e.queue, r = t.scheduler, i = t.destination; n.length > 0 && n[0].time - r.now() <= 0;) n.shift().notification.observe(i);
                if (n.length > 0) {
                    var o = Math.max(0, n[0].time - r.now());
                    this.schedule(t, o)
                } else this.unsubscribe(), e.active = !1
            }, e.prototype._schedule = function(t) {
                this.active = !0, this.destination.add(t.schedule(e.dispatch, this.delay, {
                    source: this,
                    destination: this.destination,
                    scheduler: t
                }))
            }, e.prototype.scheduleNotification = function(t) {
                if (!0 !== this.errored) {
                    var e = this.scheduler,
                        n = new f(e.now() + this.delay, t);
                    this.queue.push(n), !1 === this.active && this._schedule(e)
                }
            }, e.prototype._next = function(t) {
                this.scheduleNotification(s.a.createNext(t))
            }, e.prototype._error = function(t) {
                this.errored = !0, this.queue = [], this.destination.error(t), this.unsubscribe()
            }, e.prototype._complete = function() {
                this.scheduleNotification(s.a.createComplete()), this.unsubscribe()
            }, e
        }(a.a),
        f = function(t, e) {
            this.time = t, this.notification = e
        }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return c
    }));
    var r = n(131),
        i = n(78),
        o = n(166),
        a = n(132),
        s = n(165),
        u = n(101);

    function c(t, e) {
        var n = arguments.length >= 2;
        return function(c) {
            return c.pipe(t ? Object(i.a)((function(e, n) {
                return t(e, n, c)
            })) : u.a, Object(o.a)(1), n ? Object(a.a)(e) : Object(s.a)((function() {
                return new r.a
            })))
        }
    }
}, , function(t, e, n) {
    "use strict";
    (function(t, r) {
        var i, o = n(412);
        i = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : r;
        var a = Object(o.a)(i);
        e.a = a
    }).call(this, n(159), n(198)(t))
}, , , , , , , function(t, e, n) {
    t.exports = {
        select_checkbox: "_2-SG_",
        checkbox: "_3KfmN",
        checkbox_check: "_1SBFw",
        checkbox_check_round: "_1SrxK"
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return a
    }));
    var r = n(14),
        i = n(44),
        o = n(139);

    function a(t, e) {
        return void 0 === t && (t = 0), void 0 === e && (e = i.a), (!Object(o.a)(t) || t < 0) && (t = 0), e && "function" == typeof e.schedule || (e = i.a), new r.a((function(n) {
            return n.add(e.schedule(s, t, {
                subscriber: n,
                counter: 0,
                period: t
            })), n
        }))
    }

    function s(t) {
        var e = t.subscriber,
            n = t.counter,
            r = t.period;
        e.next(n), this.schedule({
            subscriber: e,
            counter: n + 1,
            period: r
        }, r)
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return a
    }));
    var r = n(2),
        i = n(20),
        o = n(18);

    function a(t) {
        return function(e) {
            return e.lift(new s(t))
        }
    }
    var s = function() {
            function t(t) {
                this.closingNotifier = t
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new u(t, this.closingNotifier))
            }, t
        }(),
        u = function(t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                return r.buffer = [], r.add(Object(o.a)(r, n)), r
            }
            return r.a(e, t), e.prototype._next = function(t) {
                this.buffer.push(t)
            }, e.prototype.notifyNext = function(t, e, n, r, i) {
                var o = this.buffer;
                this.buffer = [], this.destination.next(o)
            }, e
        }(i.a)
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return s
    }));
    var r = n(2),
        i = n(44),
        o = n(11),
        a = n(55);

    function s(t) {
        var e = arguments.length,
            n = i.a;
        Object(a.a)(arguments[arguments.length - 1]) && (n = arguments[arguments.length - 1], e--);
        var r = null;
        e >= 2 && (r = arguments[1]);
        var o = Number.POSITIVE_INFINITY;
        return e >= 3 && (o = arguments[2]),
            function(e) {
                return e.lift(new u(t, r, o, n))
            }
    }
    var u = function() {
            function t(t, e, n, r) {
                this.bufferTimeSpan = t, this.bufferCreationInterval = e, this.maxBufferSize = n, this.scheduler = r
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new l(t, this.bufferTimeSpan, this.bufferCreationInterval, this.maxBufferSize, this.scheduler))
            }, t
        }(),
        c = function() {
            this.buffer = []
        },
        l = function(t) {
            function e(e, n, r, i, o) {
                var a = t.call(this, e) || this;
                a.bufferTimeSpan = n, a.bufferCreationInterval = r, a.maxBufferSize = i, a.scheduler = o, a.contexts = [];
                var s = a.openContext();
                if (a.timespanOnly = null == r || r < 0, a.timespanOnly) {
                    var u = {
                        subscriber: a,
                        context: s,
                        bufferTimeSpan: n
                    };
                    a.add(s.closeAction = o.schedule(f, n, u))
                } else {
                    var c = {
                            subscriber: a,
                            context: s
                        },
                        l = {
                            bufferTimeSpan: n,
                            bufferCreationInterval: r,
                            subscriber: a,
                            scheduler: o
                        };
                    a.add(s.closeAction = o.schedule(p, n, c)), a.add(o.schedule(d, r, l))
                }
                return a
            }
            return r.a(e, t), e.prototype._next = function(t) {
                for (var e, n = this.contexts, r = n.length, i = 0; i < r; i++) {
                    var o = n[i],
                        a = o.buffer;
                    a.push(t), a.length == this.maxBufferSize && (e = o)
                }
                e && this.onBufferFull(e)
            }, e.prototype._error = function(e) {
                this.contexts.length = 0, t.prototype._error.call(this, e)
            }, e.prototype._complete = function() {
                for (var e = this.contexts, n = this.destination; e.length > 0;) {
                    var r = e.shift();
                    n.next(r.buffer)
                }
                t.prototype._complete.call(this)
            }, e.prototype._unsubscribe = function() {
                this.contexts = null
            }, e.prototype.onBufferFull = function(t) {
                this.closeContext(t);
                var e = t.closeAction;
                if (e.unsubscribe(), this.remove(e), !this.closed && this.timespanOnly) {
                    t = this.openContext();
                    var n = this.bufferTimeSpan,
                        r = {
                            subscriber: this,
                            context: t,
                            bufferTimeSpan: n
                        };
                    this.add(t.closeAction = this.scheduler.schedule(f, n, r))
                }
            }, e.prototype.openContext = function() {
                var t = new c;
                return this.contexts.push(t), t
            }, e.prototype.closeContext = function(t) {
                this.destination.next(t.buffer);
                var e = this.contexts;
                (e ? e.indexOf(t) : -1) >= 0 && e.splice(e.indexOf(t), 1)
            }, e
        }(o.a);

    function f(t) {
        var e = t.subscriber,
            n = t.context;
        n && e.closeContext(n), e.closed || (t.context = e.openContext(), t.context.closeAction = this.schedule(t, t.bufferTimeSpan))
    }

    function d(t) {
        var e = t.bufferCreationInterval,
            n = t.bufferTimeSpan,
            r = t.subscriber,
            i = t.scheduler,
            o = r.openContext();
        r.closed || (r.add(o.closeAction = i.schedule(p, n, {
            subscriber: r,
            context: o
        })), this.schedule(t, e))
    }

    function p(t) {
        var e = t.subscriber,
            n = t.context;
        e.closeContext(n)
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return o
    }));
    var r = n(2),
        i = n(11);

    function o(t) {
        return function(e) {
            return e.lift(new a(t))
        }
    }
    var a = function() {
            function t(t) {
                this.total = t
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new s(t, this.total))
            }, t
        }(),
        s = function(t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                return r.total = n, r.count = 0, r
            }
            return r.a(e, t), e.prototype._next = function(t) {
                ++this.count > this.total && this.destination.next(t)
            }, e
        }(i.a)
}, function(t, e, n) {
    "use strict";
    var r = n(324),
        i = n(31);
    e.a = function(t, e, n) {
        var o = !0,
            a = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");
        return Object(i.a)(n) && (o = "leading" in n ? !!n.leading : o, a = "trailing" in n ? !!n.trailing : a), Object(r.a)(t, e, {
            leading: o,
            maxWait: e,
            trailing: a
        })
    }
}, function(t, e, n) {
    "use strict";
    (function(t) {
        var r = n(36),
            i = "object" == typeof exports && exports && !exports.nodeType && exports,
            o = i && "object" == typeof t && t && !t.nodeType && t,
            a = o && o.exports === i ? r.a.Buffer : void 0,
            s = a ? a.allocUnsafe : void 0;
        e.a = function(t, e) {
            if (e) return t.slice();
            var n = t.length,
                r = s ? s(n) : new t.constructor(n);
            return t.copy(r), r
        }
    }).call(this, n(198)(t))
}, function(t, e, n) {
    "use strict";
    var r = n(17),
        i = n(3),
        o = n(156);

    function a(t) {
        return s.includes(t)
    }
    const s = new class {
        constructor(t) {
            function e(t) {
                return `Invalid pattern "${t}": "*" is allowed only at start and/or end position`
            }
            this._equal = new Set, this._prefix = [], this._suffix = [], this._infix = [];
            for (const n of t) {
                const t = n.indexOf("*");
                if (-1 === t) this._equal.add(n);
                else if (t === n.length - 1) this._prefix.push(n.substring(0, t));
                else {
                    if (0 !== t) throw new Error(e(n)); {
                        const t = n.indexOf("*", 1);
                        if (-1 === t) this._suffix.push(n.substring(1));
                        else {
                            if (t !== n.length - 1) throw new Error(e(n));
                            this._infix.push(n.substring(1, t))
                        }
                    }
                }
            }
        }
        includes(t) {
            return this._equal.has(t) || this._prefix.some(e => t.startsWith(e)) || this._suffix.some(e => t.endsWith(e)) || this._infix.some(e => t.includes(e))
        }
    }(["mail.google.com", "translate.google.*", "docs.google.com", "web.whatsapp.com", "facebook.com", "outlook.*", "linkedin.com", "zendesk.*", "youtube.com", "twitter.com", "messenger.com", "*.slack.*", "*canvas*", "*instructure*", "trello.com", "editor.wix.com", "quizlet.com", "mail.yahoo.com", "*.force.*", "keep.google.com", "vk.com", "fanyi.baidu.com", "app.bullhornstaffing.com", "app.qa-world.com", "calendar.google.com", "papago.naver.com", "wordcounter.net", "blogger.*", "wattpad.com", "wordpress.com", "amazon.*", "smallseotools.com", "create.kahoot.it", "apps.rackspace.com", "basecamp.com", "varsitytutors.com", "canva.com", "fanyi.youdao.com", "reverso.net", "message.alibaba.com", "*schoology*", "*.blackboard.*", "classroom.google.com", "*upwork*", "business.facebook.com", "medium.com", "mail.aol.com", "workhub.transcribeme.com", "github.com"]);
    var u = n(4),
        c = n(60),
        l = n(12);
    n.d(e, "a", (function() {
        return g
    }));
    const f = l.a.create("lib.tracking.telemetry"),
        d = .1,
        p = .05,
        h = .1,
        b = .01,
        m = .01;
    class g {
        constructor(t = u.l, e = u.l, n = u.l, s = u.l, l = !1, g = o.a.dummy, v = !1, y = u.l, _ = u.l, w = (t => b), E = "firefox" !== r.a().bundleInfo.browser) {
            this._sendFelog = t, this._sendFelogUsage = e, this._setUserId = n, this._setContainerId = s, this._sendUsageMetrics = l, this._perfMetrics = g, this._sendPerfMetrics = v, this._sendFelogEvent = y, this._sendFelogCrashLogs = _, this._getUsageMetricsRate = w, this._shouldSendEvents = E, this._perfMetricsThrottleTimeMs = 6e4, this._prepareDataString = (t, e) => {
                let n;
                try {
                    n = JSON.stringify(e)
                } catch (e) {
                    n = `stringify fail: '${e}', '${e&&e.message}'`, f.warn(n, t)
                }
                return n
            }, this._sendUsageMetricsSamplingRatio = this._getUsageMetricsRate(r.a().bundleInfo.browser), this.restoredBgConnection = t => {
                this._send("cs.connection.bg.restored", i.a.INFO, {
                    timeWithoutConnection: t
                })
            }, this.initWithoutBgConnection = () => {
                this._send("cs.connection.bg.disconnected", i.a.INFO)
            }, this.fetchDefinitionsFail = () => {
                this._send("cs.connection.api.definition.failed", i.a.WARN)
            }, this.infinityCheckResetFail = t => {
                this._send("cs.connection.infiniteCheck.failed", i.a.ERROR, {
                    delay: t
                })
            }, this.tooLongPageConfigInit = t => {
                this._send("cs.pageConfig.init.exceeded", i.a.WARN, {
                    initTime: t
                })
            }, this.tooLongUserUpdateTime = t => {
                this._send("bg.state.user.update.exceeded", i.a.WARN, {
                    updateTime: t
                })
            }, this.lostBgPageConnection = () => {
                this._send("cs.gbutton.bgСonnection.lost", i.a.INFO)
            }, this.restoreBgPageConnection = t => {
                this._send("cs.gbutton.bgСonnection.restored", i.a.INFO, {
                    time: t
                })
            }, this.badCursorPosition = () => {
                this._send("cs.editor.badCursorPosition", i.a.INFO)
            }, this.cursorJump = () => {
                this._send("cs.editor.cursorJump", i.a.WARN)
            }, this.signinOpen = () => {
                this._send("cs.signin.open", i.a.INFO)
            }, this.signinClose = t => {
                this._send("cs.signin.close", i.a.INFO, {
                    openTime: t
                })
            }, this.tabReloadClick = () => {
                this._send("cs.gbutton.reload.click", i.a.WARN)
            }, this.popupLoadError = (t, e) => {
                this._send("cs.popup.load.error", i.a.ERROR, {
                    message: t,
                    name: e
                })
            }, this.loginNoBgPageConnection = t => {
                this._send("debug.cs.connection.signin.bg.timeout", i.a.INFO, {
                    message: t
                })
            }, this.dynamicConfigLoadFromPrefsError = t => {
                this._sendSampled(m, "bg.dynamicConfig.prefs.load.error", i.a.ERROR, {
                    message: t
                })
            }, this.dynamicConfigSaveToPrefsError = t => {
                this._sendSampled(m, "bg.dynamicConfig.prefs.save.error", i.a.ERROR, {
                    message: t
                })
            }, this.dynamicConfigLoadFromServerError = t => {
                this._sendSampled(m, "bg.dynamicConfig.server.load.error", i.a.ERROR, {
                    message: t
                })
            }, this.pageConfigCDNError = t => {
                this._send("cs.pageConfig.cdn.error", i.a.ERROR, {
                    message: t
                })
            }, this.pageConfigLocalStorageError = (t, e) => {
                this._send("cs.pageConfig.localStorage.error", i.a.INFO, {
                    message: t,
                    name: e
                })
            }, this.pageConfigUpdated = (t, e) => {
                this._send("cs.pageConfig.updated", i.a.INFO, {
                    oldVersion: t,
                    newVersion: e
                })
            }, this.settingsPopupTimeout = () => {
                this._send("settings.popup.init.timeout", i.a.WARN)
            }, this.settingsUsupportedShow = t => {
                this._send("settings.popup.state.unsupported.show", i.a.INFO, {
                    popupType: t
                })
            }, this.socketBgError = () => {
                this._send("bg.socket.error", i.a.WARN)
            }, this.capiNotAuthorizedLoop = (t, e) => {
                this._send("debug.socket.notAuthorizedLoop", i.a.INFO, {
                    authDegradation: t,
                    cookiesDisabled: e
                })
            }, this.socketDisabledCookie = () => {
                this._send("debug.socket.disabledCookies", i.a.INFO)
            }, this.socketBgRestored = t => {
                this._send("debug.bg.socket.restored", i.a.INFO, {
                    tryCount: t
                })
            }, this.socketBgReconnectFail = (t, e) => {
                this._send("bg.socket.reconnect.fail", i.a.WARN, {
                    token: t,
                    tryCount: e
                })
            }, this.socketCsError = () => {
                this._send("cs.socket.error", i.a.WARN)
            }, this.soketCsErrorMsg = t => {
                this._send("cs.socket.errorMsg", i.a.WARN, {
                    message: t
                })
            }, this.gnarClientInitFail = t => {
                this._send("gnar.bg.tracking.gnar.init.fail", i.a.WARN, {
                    message: t
                })
            }, this.bgTrackingInitFail = () => {
                this._send("debug.tracking.init.fail", i.a.INFO)
            }, this.gnarSpecUndefinedInit = () => {
                this._send("debug.tracking.gnar.spec.init.fail", i.a.INFO)
            }, this.userUpgradeClick = t => {
                this._send("cs.ui.action.upgradeClick", i.a.INFO, {
                    placement: t
                })
            }, this.gButtonClick = () => {
                this._send("cs.ui.gbutton.click", i.a.INFO)
            }, this.checkingToggledInField = t => {
                this._send("cs.ui.gbutton.toggleInField", i.a.INFO, {
                    enabled: t
                })
            }, this.unexpectedAnonymous = t => {
                this._send("debug.bg.session.unexpectedAnonymous", i.a.INFO, t)
            }, this.getDapiPropError = t => {
                this._send("bg.connection.dapi.getProp.error", i.a.WARN, {
                    statusCode: t
                })
            }, this.setDapiPropError = t => {
                this._send("bg.connection.dapi.setProp.error", i.a.WARN, {
                    statusCode: t
                })
            }, this.toggleExtensionDefs = t => {
                this._send("bg.settings.definitions.toggle", i.a.INFO, {
                    enabled: t
                })
            }, this.toggleExtension = (t, e) => {
                this._send("bg.settings.extension.toggle", i.a.INFO, {
                    enabled: t,
                    placement: e
                })
            }, this.disableUntilNextVisit = () => {
                this._send("cs.gbutton.disableUntilNextVisit", i.a.INFO)
            }, this.disableButtonClick = () => {
                this._send("cs.gbutton.disableButtonClick", i.a.INFO)
            }, this.cookieOverflow = (t, e) => {
                this._send("debug.bg.state.cookie.overflow", i.a.INFO, {
                    size: t,
                    biggestCookie: e
                })
            }, this.externalChangePlan = () => {
                this._send("bg.api.external.changePlan", i.a.INFO)
            }, this.externalChangeDialect = () => {
                this._send("bg.api.external.changeDialect", i.a.INFO)
            }, this.externalChangeUser = () => {
                this._send("bg.api.external.changeUsed", i.a.INFO)
            }, this.externalLogout = () => {
                this._send("bg.api.external.logout", i.a.INFO)
            }, this.bgPageStartFail = (t, e) => {
                this._send("bg.start.fail", i.a.ERROR, {
                    message: t,
                    stack: e
                })
            }, this.acceptDataControl = () => {
                this._send("bg.dataControl.accepted", i.a.INFO)
            }, this.bgPageInitTimeout = t => {
                this._send("bg.state.start.timeout", i.a.WARN, {
                    initTime: t
                })
            }, this.bgPageInitFail = t => {
                this._send("bg.state.init.fail", i.a.ERROR, {
                    initAttempts: t
                })
            }, this.extensionUpdated = (t, e) => {
                this._send("bg.state.updated", i.a.INFO, {
                    currentVersion: t,
                    previousVersion: e
                })
            }, this.extensionUpdateFail = t => {
                this._send("bg.state.update.fail", i.a.INFO, {
                    previousVersion: t
                })
            }, this.cannotGetInstallSource = () => {
                this._send("bg.getSource.fail", i.a.WARN)
            }, this.extensionInstall = t => {
                this._send("bg.state.install", i.a.INFO, {
                    source: t
                })
            }, this.chromeForcedToUpdate = t => {
                this._send("bg.chrome.forcedToUpdate", i.a.INFO, {
                    newVersion: t
                })
            }, this.chromeContentScriptLoadError = (t, e) => {
                this._send("bg.chrome.cs.load.error", i.a.WARN, {
                    message: t,
                    type: e
                })
            }, this.reloadNotificationShow = () => {
                this._send("bg.ui.notification.tabsReload.show", i.a.WARN)
            }, this.reloadNotificationClick = () => {
                this._send("bg.ui.notification.tabsReload.click", i.a.INFO)
            }, this.fetchUserFail = (t, e, n) => {
                this._send("bg.user.fetch.fail", i.a.WARN, {
                    body: e,
                    statusCode: n,
                    reason: t
                })
            }, this.fetchMimicFail = (t, e) => {
                this._send("bg.user.mimic.fail", i.a.WARN, {
                    body: t,
                    statusCode: e
                })
            }, this.fetchStatsFail = (t, e) => {
                this._send("bg.user.dapi.prop.stats.fail", i.a.WARN, {
                    body: t,
                    statusCode: e
                })
            }, this.fetchCookieFail = () => {
                this._send("bg.cookie.fail", i.a.WARN)
            }, this.fetchSettingsFail = (t, e) => {
                this._send("bg.user.settings.fail", i.a.WARN, {
                    body: t,
                    statusCode: e
                })
            }, this.frequentCookieChanges = t => {
                this._send("debug.cookie.onChange.error", i.a.INFO, {
                    canceled: t
                })
            }, this.initializePropFromDapi = t => {
                this._send("bg.state.dapi.prop.initialize", i.a.INFO, {
                    name: t
                })
            }, this.onboardingPopupShow = () => {
                this._send("cs.onboarding.popup.show", i.a.INFO)
            }, this.onboardingPopupCancel = () => {
                this._send("cs.onboarding.popup.cancel", i.a.INFO)
            }, this.onboardingTutorialShow = () => {
                this._send("cs.onboarding.tutorial.show", i.a.INFO)
            }, this.onboardingVideoLoaded = () => {
                this._send("cs.onboarding.tutorial.video.loaded", i.a.INFO)
            }, this.incognitoInit = () => {
                this._send("bg.incognito.init", i.a.INFO)
            }, this.disabledCookiesInit = () => {
                this._send("bg.cookie.disabled", i.a.INFO)
            }, this.loginReminderPopupShow = () => {
                this._send("cs.gbutton.popup.loginReminder.show", i.a.INFO)
            }, this.delightfulMessagePopupShow = () => {
                this._send("cs.gbutton.popup.delightfulMessage.show", i.a.INFO)
            }, this.loginReminderBadgeShow = () => {
                this._send("bg.state.user.loginReminder.enable", i.a.INFO)
            }, this.proxyInit = () => {
                this._sendSampled(p, "proxy.init", i.a.INFO)
            }, this.proxyPortDisconnected = (t, e) => {
                this._sendSampled(p, "proxy.disconnect", i.a.INFO, {
                    port: t,
                    error: e
                })
            }, this.unhandledBgPageException = t => {
                this._sendSampled(h, "bg.unhandledException", i.a.ERROR, {
                    message: t.error ? t.error.message : t.message
                })
            }, this.unhandledBgPageRejection = t => {
                this._sendSampled(h, "bg.unhandledRejection", i.a.ERROR, {
                    message: null != t.reason ? "string" == typeof t.reason ? t.reason : t.reason.message : void 0
                })
            }, this.storageMigrationSucceeded = () => {
                this._send("bg.storageMigration.success", i.a.INFO, {})
            }, this.storageMigrationFailed = t => {
                this._send("bg.storageMigration.failure", i.a.ERROR, {
                    message: t && t.message
                })
            }, this.cardShowAction = () => {
                this._sendSampled(d, "cs.editor.card.show", i.a.INFO)
            }, this.cardHideAction = () => {
                this._sendSampled(d, "cs.editor.card.hide", i.a.INFO)
            }, this.cardReplacementAction = () => {
                this._sendSampled(d, "cs.editor.card.replacement", i.a.INFO)
            }, this.cardAddToDictAction = () => {
                this._sendSampled(d, "cs.editor.card.addToDict", i.a.INFO)
            }, this.cardIgnoreAction = () => {
                this._sendSampled(d, "cs.editor.card.ignore", i.a.INFO)
            }, this.synonymCardShowAction = t => {
                this._sendSampled(d, "cs.editor.synonym.show", i.a.INFO, {
                    notFoundCard: t
                })
            }, this.synonymCardHideAction = t => {
                this._sendSampled(d, "cs.editor.synonym.hide", i.a.INFO, {
                    notFoundCard: t
                })
            }, this.synonymReplacementAction = () => {
                this._sendSampled(d, "cs.editor.synonym.replacement", i.a.INFO)
            }, this.dictCardShowAction = () => {
                this._sendSampled(d, "cs.editor.dict.show", i.a.INFO)
            }, this.dictCardHideAction = () => {
                this._sendSampled(d, "cs.editor.dict.hide", i.a.INFO)
            }, this.errorBySendEmailData = () => {
                this._send("cs.editor.emailData.send.error", i.a.WARN)
            }, this.couldNotParseTransform = (t, e) => {
                this._send("cs.cards.transforms.parse.error", i.a.WARN, {
                    transformHTML: t,
                    fallbackParseSuccessful: e
                })
            }, this.disabledTabLoad = t => {
                this._sendUsage("usage.loadOnDisabledTab", i.a.INFO, {
                    accountType: t
                })
            }, this.disabledTabByUserLoad = t => {
                this._sendUsage("usage.loadOnDisabledByUserTab", i.a.INFO, {
                    accountType: t
                })
            }, this.initSession = (t, e, n, r, o) => {
                this._sendUsage("usage.session.init", i.a.INFO, {
                    isTopSite: a(t),
                    accountType: e,
                    fieldType: n,
                    fieldSupported: r,
                    integrationType: o
                })
            }, this.cardFirstInteraction = (t, e) => {
                this._sendUsage("usage.card.interaction", i.a.INFO, {
                    accountType: t,
                    fieldType: e
                })
            }, this.gnar = {
                nextPingDateWriteError: t => this._send("bg.gnarTracker.nextPingDateWriteError", i.a.ERROR, {
                    error: t
                }),
                nextPingDateReadError: t => this._send("bg.gnarTracker.nextPingDateReadError", i.a.ERROR, {
                    error: t
                }),
                sendError: t => this._send("bg.gnarTracker.sendError", i.a.ERROR, {
                    error: t
                }),
                trackBeforeSetUser: t => this._send("bg.gnarTracker.trackBeforeSetUser", i.a.INFO, {
                    millisSinceInit: t
                }),
                errorSetUser: t => this._send("bg.gnarTracker.errorSetUser", i.a.ERROR, {
                    error: t
                })
            }, this.fluidGdocs = {
                sidebarFail: Object(u.h)(t => this._send("cs.gdocs.fluid.getSidebarFail", i.a.WARN, {
                    type: t
                })),
                getFullTextFailed: Object(u.h)(t => this._send("cs.gdocs.fluid.getFullTextFailed", i.a.INFO, {
                    type: t
                })),
                pageToTextMapFail: Object(u.h)(() => this._send("cs.gdocs.fluid.pageToTextMapFail", i.a.INFO)),
                nestedTablesAppearance: Object(u.h)(() => this._send("cs.gdocs.fluid.nestedTablesAppearance", i.a.INFO)),
                mapTableIssue: Object(u.h)(t => this._send("cs.gdocs.fluid.mapTableIssue", i.a.INFO, {
                    type: t
                })),
                treeStructureFailure: Object(u.h)(() => this._send("cs.gdocs.fluid.treeStructureFailure", i.a.INFO)),
                textFragmentMapFail: Object(u.h)(() => this._send("cs.gdocs.fluid.textFragmentMapFail", i.a.INFO)),
                init: () => this._send("cs.gdocs.fluid.init", i.a.INFO),
                getTextPerf: this._createPerfLogger("cs.gdocs.fluid.perf.getText", 30),
                buildTextMapPerf: this._createPerfLogger("cs.gdocs.fluid.perf.textMap", 30)
            }, this.gdocs = {
                initialGdocsDisable: () => this._send("cs.gdocs.initialDisableSet", i.a.INFO),
                getInitialDocumentStateFailed: t => this._send("cs.gdocs.state.getInitialFailed", i.a.INFO, {
                    message: t
                }),
                localStateSwappedWithRemote: () => this._send("cs.gdocs.state.localStateSwapped", i.a.INFO),
                revisionSwitched: () => this._send("cs.gdocs.revisionsSwitched", i.a.INFO),
                noMatchForUnderline: () => this._send("cs.gdocs.orphantUnderline.noMatchFoundByUnderine", i.a.INFO),
                noMatchFoundForId: () => this._send("cs.gdocs.orphantUnderline.noMatchFoundById", i.a.INFO),
                replacementFailed: () => this._send("cs.gdocs.replacementFailed", i.a.INFO),
                editingDisabledNotification: t => this._send("cs.gdocs.notifications.editingDisabledBloodyBar", i.a.INFO, t && Object.assign({
                    hashedDocId: Object(c.d)()
                }, t)),
                somethingWentWrongNotification: t => this._send("cs.gdocs.notifications.somethingWentWrongButterBar", i.a.INFO, t && Object.assign({
                    hashedDocId: Object(c.d)()
                }, t)),
                misplacedUnderlines: ({
                    collaborators: t,
                    count: e
                }) => this._send("cs.gdocs.notifications.misplacedUnderlines", i.a.INFO, {
                    collaborators: t,
                    count: e,
                    hashedDocId: Object(c.d)()
                }),
                documentOpen: ({
                    grammarlyEnabled: t
                }) => {
                    this._send("cs.gdocs.notifications.documentOpen", i.a.INFO, {
                        hashedDocId: Object(c.d)(),
                        grammarlyEnabled: t
                    })
                },
                injectedSciptRollback: t => this._send("cs.gdocs.injectedScriptsRollback", i.a.INFO, {
                    reason: t
                }),
                emptyResponseCrash: () => this._send("cs.gdocs.emptyResponseCrash", i.a.INFO)
            }, this.performance = {
                processInput: this._createPerfLogger("cs.fluid.processInput", 100),
                processAlerts: this._createPerfLogger("cs.fluid.processAlerts", 10),
                csInitialized: (t, e, n) => {
                    this._sendPerfMetrics && this._sendEvent({
                        logger: "cs.initialized",
                        level: i.a.INFO,
                        ex_csInitPerf: {
                            loadTime: t,
                            initTime: e,
                            error: n
                        }
                    })
                }
            }, this.autocorrect = {
                responseTime: this._createPerfLogger("cs.autocorrect.responseTime", 10),
                predictTime: this._createPerfLogger("cs.autocorrect.predictTime", 10)
            }, this.capiClient = {
                responseTime: this._createPerfLogger("cs.capi.responseTime", 10)
            }, this.oauthExchangeError = t => {
                this._send("bg.oauth.exchange.error", i.a.ERROR, {
                    message: t
                })
            }
        }
        _send(t, e, n) {
            if (!1 === this._shouldSendEvents) return;
            const r = this._prepareDataString(t, n);
            try {
                this._sendFelog(t, void 0, e, null != n ? {
                    json: r
                } : void 0)
            } catch (e) {
                f.warn(`Failed to send felog for ${t}: '${e&&e.message}'`, e)
            }
        }
        _sendEvent(t) {
            if (!1 !== this._shouldSendEvents) try {
                this._sendFelogEvent(t)
            } catch (e) {
                f.warn(`Failed to send felog for ${JSON.stringify(t)}`, e)
            }
        }
        _sendUsage(t, e, n) {
            if (this._sendUsageMetrics && this._sendUsageMetricsSamplingRatio > Math.random()) try {
                this._sendFelogUsage(t, "", e, n)
            } catch (e) {
                f.warn(`Failed to send usage felog for ${t}: '${e&&e.message}'`, e)
            }
        }
        _sendSampled(t, e, n, r) {
            t > Math.random() && this._send(e, n, r)
        }
        _createPerfLogger(t, e = 0) {
            if (this._sendPerfMetrics) {
                let n = [];
                const r = Object(u.o)(this._perfMetricsThrottleTimeMs, () => {
                    if (n.push(...this._perfMetrics.flushMeasures(t)), n.length >= e) {
                        const e = o.a.getStats(n);
                        n = [], f.info(`sending perf stats for ${t}`, e), this._sendEvent({
                            logger: t,
                            level: i.a.INFO,
                            ex_perfstats: e
                        })
                    }
                });
                return {
                    dummy: !1,
                    startMeasure: () => {
                        const e = this._perfMetrics.startMeasure(t);
                        return {
                            endMeasure() {
                                try {
                                    e.endMeasure(), r()
                                } catch (t) {}
                            }
                        }
                    },
                    measure: e => {
                        const n = this._perfMetrics.measure(t, e);
                        try {
                            r()
                        } catch (t) {}
                        return n
                    },
                    measureAsync: e => {
                        const n = this._perfMetrics.startMeasure(t);
                        return e().then(t => {
                            try {
                                n.endMeasure(), r()
                            } catch (t) {}
                            return t
                        })
                    }
                }
            }
            return {
                dummy: !0,
                startMeasure: () => ({
                    endMeasure: u.l
                }),
                measure: t => t(),
                measureAsync: t => t()
            }
        }
        sendCrashLogs(t, e) {
            if (!1 !== this._shouldSendEvents) try {
                this._sendFelogCrashLogs(e)
            } catch (e) {
                f.warn(`Failed to send crash data data for ${t}: '${e&&e.message}'`, e)
            }
        }
        setUserId(t) {
            this._setUserId(t)
        }
        setContainerId(t) {
            this._setContainerId(t)
        }
        enableEventsSending() {
            this._shouldSendEvents = !0
        }
        disableEventsSending() {
            this._shouldSendEvents = !1
        }
        notificationShown(t) {
            this._send("cs.notification.show", i.a.INFO, {
                type: t
            })
        }
        notificationHide(t) {
            this._send("cs.notification.hide", i.a.INFO, {
                type: t
            })
        }
    }
}, , , , , function(t, e, n) {
    "use strict";
    var r = n(276);

    function i(t, e) {
        return t[e] << 8 | t[e + 1]
    }
    t.exports = {
        hash: function(t) {
            var e, n = r.toU8IntArray(t + ""),
                o = 0;
            if (!t) return o.toString(16);
            var a = n.length,
                s = 0;
            e = 3 & a, a >>>= 2;
            for (var u = 0; u < a; u++) o = (o += i(n, s)) << 16 ^ i(n, s + 2) << 11 ^ o, s += 4, o += o >> 11;
            switch (e) {
                case 3:
                    o += i(n, s), o ^= o << 16, o ^= n[s + 2] << 18, o += o >> 11;
                    break;
                case 2:
                    o += i(n, s), o ^= o << 11, o += o >> 17;
                    break;
                case 1:
                    o += n[s], o ^= o << 10, o += o >> 1
            }
            return o ^= o << 3, o += o >> 5, o ^= o << 4, o += o >> 17, o ^= o << 25, o += o >> 6, r.intToUnsignedHex(o)
        }
    }
}, function(t, e, n) {
    "use strict";
    var r = n(276);

    function i(t, e) {
        return (65535 & t) * e + (((t >>> 16) * e & 65535) << 16)
    }

    function o(t, e) {
        return t << e | t >>> 32 - e
    }

    function a(t) {
        return t = i(t ^= t >>> 16, 2246822507), (t = i(t ^= t >>> 13, 3266489909)) ^ t >>> 16
    }

    function s(t, e) {
        t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]], e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]];
        var n = [0, 0, 0, 0];
        return n[3] += t[3] + e[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += t[2] + e[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += t[1] + e[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += t[0] + e[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
    }

    function u(t, e) {
        t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]], e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]];
        var n = [0, 0, 0, 0];
        return n[3] += t[3] * e[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += t[2] * e[3], n[1] += n[2] >>> 16, n[2] &= 65535, n[2] += t[3] * e[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += t[1] * e[3], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += t[2] * e[2], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += t[3] * e[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += t[0] * e[3] + t[1] * e[2] + t[2] * e[1] + t[3] * e[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
    }

    function c(t, e) {
        return 32 == (e %= 64) ? [t[1], t[0]] : e < 32 ? [t[0] << e | t[1] >>> 32 - e, t[1] << e | t[0] >>> 32 - e] : (e -= 32, [t[1] << e | t[0] >>> 32 - e, t[0] << e | t[1] >>> 32 - e])
    }

    function l(t, e) {
        return 0 == (e %= 64) ? t : e < 32 ? [t[0] << e | t[1] >>> 32 - e, t[1] << e] : [t[1] << e - 32, 0]
    }

    function f(t, e) {
        return [t[0] ^ e[0], t[1] ^ e[1]]
    }

    function d(t) {
        return t = f(t, [0, t[0] >>> 1]), t = f(t = u(t, [4283543511, 3981806797]), [0, t[0] >>> 1]), f(t = u(t, [3301882366, 444984403]), [0, t[0] >>> 1])
    }
    var p = function(t, e) {
        t = "" + t || "";
        var n = r.toU8IntArray(t);
        e = e || 0;
        for (var i = (t = {
                charCodeAt: function(t) {
                    return n[t]
                },
                length: n.length
            }).length % 16, o = t.length - i, a = [0, e], p = [0, e], h = [0, 0], b = [0, 0], m = [2277735313, 289559509], g = [1291169091, 658871167], v = 0; v < o; v += 16) h = [255 & t.charCodeAt(v + 4) | (255 & t.charCodeAt(v + 5)) << 8 | (255 & t.charCodeAt(v + 6)) << 16 | (255 & t.charCodeAt(v + 7)) << 24, 255 & t.charCodeAt(v) | (255 & t.charCodeAt(v + 1)) << 8 | (255 & t.charCodeAt(v + 2)) << 16 | (255 & t.charCodeAt(v + 3)) << 24], b = [255 & t.charCodeAt(v + 12) | (255 & t.charCodeAt(v + 13)) << 8 | (255 & t.charCodeAt(v + 14)) << 16 | (255 & t.charCodeAt(v + 15)) << 24, 255 & t.charCodeAt(v + 8) | (255 & t.charCodeAt(v + 9)) << 8 | (255 & t.charCodeAt(v + 10)) << 16 | (255 & t.charCodeAt(v + 11)) << 24], h = c(h = u(h, m), 31), a = s(a = c(a = f(a, h = u(h, g)), 27), p), a = s(u(a, [0, 5]), [0, 1390208809]), b = c(b = u(b, g), 33), p = s(p = c(p = f(p, b = u(b, m)), 31), a), p = s(u(p, [0, 5]), [0, 944331445]);
        switch (h = [0, 0], b = [0, 0], i) {
            case 15:
                b = f(b, l([0, t.charCodeAt(v + 14)], 48));
            case 14:
                b = f(b, l([0, t.charCodeAt(v + 13)], 40));
            case 13:
                b = f(b, l([0, t.charCodeAt(v + 12)], 32));
            case 12:
                b = f(b, l([0, t.charCodeAt(v + 11)], 24));
            case 11:
                b = f(b, l([0, t.charCodeAt(v + 10)], 16));
            case 10:
                b = f(b, l([0, t.charCodeAt(v + 9)], 8));
            case 9:
                b = u(b = f(b, [0, t.charCodeAt(v + 8)]), g), p = f(p, b = u(b = c(b, 33), m));
            case 8:
                h = f(h, l([0, t.charCodeAt(v + 7)], 56));
            case 7:
                h = f(h, l([0, t.charCodeAt(v + 6)], 48));
            case 6:
                h = f(h, l([0, t.charCodeAt(v + 5)], 40));
            case 5:
                h = f(h, l([0, t.charCodeAt(v + 4)], 32));
            case 4:
                h = f(h, l([0, t.charCodeAt(v + 3)], 24));
            case 3:
                h = f(h, l([0, t.charCodeAt(v + 2)], 16));
            case 2:
                h = f(h, l([0, t.charCodeAt(v + 1)], 8));
            case 1:
                h = u(h = f(h, [0, t.charCodeAt(v)]), m), a = f(a, h = u(h = c(h, 31), g))
        }
        return a = s(a = f(a, [0, t.length]), p = f(p, [0, t.length])), p = s(p, a), a = s(a = d(a), p = d(p)), p = s(p, a), ("00000000" + (a[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (p[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (p[1] >>> 0).toString(16)).slice(-8)
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
                }).length % 4, u = t.length - s, c = e, l = 0, f = 3432918353, d = 461845907, p = 0; p < u; p += 4) l = i(l = 255 & t.charCodeAt(p) | (255 & t.charCodeAt(p + 1)) << 8 | (255 & t.charCodeAt(p + 2)) << 16 | (255 & t.charCodeAt(p + 3)) << 24, f), l = i(l = o(l, 15), d), c = i(c = o(c ^= l, 13), 5) + 3864292196;
            switch (l = 0, s) {
                case 3:
                    l ^= (255 & t.charCodeAt(p + 2)) << 16;
                case 2:
                    l ^= (255 & t.charCodeAt(p + 1)) << 8;
                case 1:
                    l = i(l ^= 255 & t.charCodeAt(p), f), c ^= l = i(l = o(l, 15), d)
            }
            return ((c = a(c ^= t.length)) >>> 0).toString(16)
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
                }).length % 16, u = t.length - s, c = e, l = e, f = e, d = e, p = 0, h = 0, b = 0, m = 0, g = 597399067, v = 2869860233, y = 951274213, _ = 2716044179, w = 0; w < u; w += 16) p = 255 & t.charCodeAt(w) | (255 & t.charCodeAt(w + 1)) << 8 | (255 & t.charCodeAt(w + 2)) << 16 | (255 & t.charCodeAt(w + 3)) << 24, h = 255 & t.charCodeAt(w + 4) | (255 & t.charCodeAt(w + 5)) << 8 | (255 & t.charCodeAt(w + 6)) << 16 | (255 & t.charCodeAt(w + 7)) << 24, b = 255 & t.charCodeAt(w + 8) | (255 & t.charCodeAt(w + 9)) << 8 | (255 & t.charCodeAt(w + 10)) << 16 | (255 & t.charCodeAt(w + 11)) << 24, m = 255 & t.charCodeAt(w + 12) | (255 & t.charCodeAt(w + 13)) << 8 | (255 & t.charCodeAt(w + 14)) << 16 | (255 & t.charCodeAt(w + 15)) << 24, p = o(p = i(p, g), 15), c = o(c ^= p = i(p, v), 19), c = i(c += l, 5) + 1444728091, h = o(h = i(h, v), 16), l = o(l ^= h = i(h, y), 17), l = i(l += f, 5) + 197830471, b = o(b = i(b, y), 17), f = o(f ^= b = i(b, _), 15), f = i(f += d, 5) + 2530024501, m = o(m = i(m, _), 18), d = o(d ^= m = i(m, g), 13), d = i(d += c, 5) + 850148119;
            switch (p = 0, h = 0, b = 0, m = 0, s) {
                case 15:
                    m ^= t.charCodeAt(w + 14) << 16;
                case 14:
                    m ^= t.charCodeAt(w + 13) << 8;
                case 13:
                    m = i(m ^= t.charCodeAt(w + 12), _), d ^= m = i(m = o(m, 18), g);
                case 12:
                    b ^= t.charCodeAt(w + 11) << 24;
                case 11:
                    b ^= t.charCodeAt(w + 10) << 16;
                case 10:
                    b ^= t.charCodeAt(w + 9) << 8;
                case 9:
                    b = i(b ^= t.charCodeAt(w + 8), y), f ^= b = i(b = o(b, 17), _);
                case 8:
                    h ^= t.charCodeAt(w + 7) << 24;
                case 7:
                    h ^= t.charCodeAt(w + 6) << 16;
                case 6:
                    h ^= t.charCodeAt(w + 5) << 8;
                case 5:
                    h = i(h ^= t.charCodeAt(w + 4), v), l ^= h = i(h = o(h, 16), y);
                case 4:
                    p ^= t.charCodeAt(w + 3) << 24;
                case 3:
                    p ^= t.charCodeAt(w + 2) << 16;
                case 2:
                    p ^= t.charCodeAt(w + 1) << 8;
                case 1:
                    p = i(p ^= t.charCodeAt(w), g), c ^= p = i(p = o(p, 15), v)
            }
            return c ^= t.length, c += l ^= t.length, c += f ^= t.length, l += c += d ^= t.length, f += c, d += c, c = a(c), c += l = a(l), c += f = a(f), l += c += d = a(d), f += c, d += c, ("00000000" + (c >>> 0).toString(16)).slice(-8) + ("00000000" + (l >>> 0).toString(16)).slice(-8) + ("00000000" + (f >>> 0).toString(16)).slice(-8) + ("00000000" + (d >>> 0).toString(16)).slice(-8)
        },
        x64Hash64: function(t, e) {
            return p(t, e).slice(8)
        },
        x64Hash128: p,
        hash: function(t, e) {
            return p(t, e)
        }
    }
}, , function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return a
    }));
    var r = n(14),
        i = n(62),
        o = n(48);

    function a(t, e) {
        return new r.a((function(n) {
            var r, a;
            try {
                r = t()
            } catch (t) {
                return void n.error(t)
            }
            try {
                a = e(r)
            } catch (t) {
                return void n.error(t)
            }
            var s = (a ? Object(i.a)(a) : o.a).subscribe(n);
            return function() {
                s.unsubscribe(), r && r.unsubscribe()
            }
        }))
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return a
    }));
    var r = n(2),
        i = n(20),
        o = n(18);

    function a(t) {
        return function(e) {
            return e.lift(new s(t))
        }
    }
    var s = function() {
            function t(t) {
                this.durationSelector = t
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new u(t, this.durationSelector))
            }, t
        }(),
        u = function(t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                return r.durationSelector = n, r.hasValue = !1, r.durationSubscription = null, r
            }
            return r.a(e, t), e.prototype._next = function(t) {
                try {
                    var e = this.durationSelector.call(this, t);
                    e && this._tryNext(t, e)
                } catch (t) {
                    this.destination.error(t)
                }
            }, e.prototype._complete = function() {
                this.emitValue(), this.destination.complete()
            }, e.prototype._tryNext = function(t, e) {
                var n = this.durationSubscription;
                this.value = t, this.hasValue = !0, n && (n.unsubscribe(), this.remove(n)), (n = Object(o.a)(this, e)) && !n.closed && this.add(this.durationSubscription = n)
            }, e.prototype.notifyNext = function(t, e, n, r, i) {
                this.emitValue()
            }, e.prototype.notifyComplete = function() {
                this.emitValue()
            }, e.prototype.emitValue = function() {
                if (this.hasValue) {
                    var e = this.value,
                        n = this.durationSubscription;
                    n && (this.durationSubscription = null, n.unsubscribe(), this.remove(n)), this.value = null, this.hasValue = !1, t.prototype._next.call(this, e)
                }
            }, e
        }(i.a)
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return i
    }));
    var r = n(148);

    function i() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return function(e) {
            return e.lift.call(r.a.apply(void 0, [e].concat(t)))
        }
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return a
    }));
    var r = n(2),
        i = n(20),
        o = n(18);

    function a() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return function(e) {
            var n;
            "function" == typeof t[t.length - 1] && (n = t.pop());
            var r = t;
            return e.lift(new s(r, n))
        }
    }
    var s = function() {
            function t(t, e) {
                this.observables = t, this.project = e
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new u(t, this.observables, this.project))
            }, t
        }(),
        u = function(t) {
            function e(e, n, r) {
                var i = t.call(this, e) || this;
                i.observables = n, i.project = r, i.toRespond = [];
                var a = n.length;
                i.values = new Array(a);
                for (var s = 0; s < a; s++) i.toRespond.push(s);
                for (s = 0; s < a; s++) {
                    var u = n[s];
                    i.add(Object(o.a)(i, u, u, s))
                }
                return i
            }
            return r.a(e, t), e.prototype.notifyNext = function(t, e, n, r, i) {
                this.values[n] = e;
                var o = this.toRespond;
                if (o.length > 0) {
                    var a = o.indexOf(n); - 1 !== a && o.splice(a, 1)
                }
            }, e.prototype.notifyComplete = function() {}, e.prototype._next = function(t) {
                if (0 === this.toRespond.length) {
                    var e = [t].concat(this.values);
                    this.project ? this._tryProject(e) : this.destination.next(e)
                }
            }, e.prototype._tryProject = function(t) {
                var e;
                try {
                    e = this.project.apply(this, t)
                } catch (t) {
                    return void this.destination.error(t)
                }
                this.destination.next(e)
            }, e
        }(i.a)
}, , , , , , , , , , , , , , , , function(t, e, n) {
    t.exports = n(731)()
}, , function(t, e, n) {
    "use strict";
    var r = Object.getOwnPropertySymbols,
        i = Object.prototype.hasOwnProperty,
        o = Object.prototype.propertyIsEnumerable;

    function a(t) {
        if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(t)
    }
    t.exports = function() {
        try {
            if (!Object.assign) return !1;
            var t = new String("abc");
            if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
            for (var e = {}, n = 0; n < 10; n++) e["_" + String.fromCharCode(n)] = n;
            if ("0123456789" !== Object.getOwnPropertyNames(e).map((function(t) {
                    return e[t]
                })).join("")) return !1;
            var r = {};
            return "abcdefghijklmnopqrst".split("").forEach((function(t) {
                r[t] = t
            })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
        } catch (t) {
            return !1
        }
    }() ? Object.assign : function(t, e) {
        for (var n, s, u = a(t), c = 1; c < arguments.length; c++) {
            for (var l in n = Object(arguments[c])) i.call(n, l) && (u[l] = n[l]);
            if (r) {
                s = r(n);
                for (var f = 0; f < s.length; f++) o.call(n, s[f]) && (u[s[f]] = n[s[f]])
            }
        }
        return u
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(380);
    e.Lens = r.Lens, e.Prism = r.Prism, e.Optic = r.Optic, n(468)
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        return function(n, r) {
            return e(n(t(r)), r)
        }
    }
    var i;
    Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t) {
            t.optic = function(t, e) {
                return {
                    get: t,
                    set: e,
                    modify: r(t, e)
                }
            }
        }(e.Optic || (e.Optic = {})),
        function(t) {
            t.create = function t(e, n) {
                return {
                    get: e,
                    set: n,
                    modify: r(e, n),
                    compose: function(r) {
                        return t((function(t) {
                            var n = e(t);
                            return void 0 !== n ? r.get(n) : void 0
                        }), (function(t, i) {
                            var o = e(i);
                            return void 0 !== o ? n(r.set(t, o), i) : i
                        }))
                    }
                }
            }
        }(i = e.Prism || (e.Prism = {})),
        function(t) {
            function e(t, n) {
                return {
                    get: t,
                    set: n,
                    modify: r(t, n),
                    compose: function(r) {
                        return e((function(e) {
                            return r.get(t(e))
                        }), (function(e, i) {
                            return n(r.set(e, t(i)), i)
                        }))
                    }
                }
            }
            t.create = e, t.compose = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                if (0 === t.length) throw new TypeError("Can not compose zero lenses. You probably want `Lens.identity`.");
                if (1 === t.length) return t[0];
                var n = t[0];
                return t.slice(1).forEach((function(t) {
                    n = n.compose(t)
                })), n
            };
            var n = e((function(t) {
                return t
            }), (function(t, e) {
                return t
            }));
            t.identity = function() {
                return n
            };
            var o = i.create((function(t) {}), (function(t, e) {
                return e
            }));
            t.nothing = function() {
                return o
            }
        }(e.Lens || (e.Lens = {}))
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return i
    }));
    var r = n(14);

    function i(t) {
        return !!t && (t instanceof r.a || "function" == typeof t.lift && "function" == typeof t.subscribe)
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return c
    }));
    var r = n(14),
        i = n(135),
        o = n(37),
        a = n(175),
        s = n(42),
        u = n(55);

    function c(t, e, n) {
        if (e) {
            if (!Object(u.a)(e)) return function() {
                for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
                return c(t, n).apply(void 0, r).pipe(Object(o.a)((function(t) {
                    return Object(s.a)(t) ? e.apply(void 0, t) : e(t)
                })))
            };
            n = e
        }
        return function() {
            for (var e = [], o = 0; o < arguments.length; o++) e[o] = arguments[o];
            var s, u = this,
                c = {
                    context: u,
                    subject: s,
                    callbackFunc: t,
                    scheduler: n
                };
            return new r.a((function(r) {
                if (n) {
                    var o = {
                        args: e,
                        subscriber: r,
                        params: c
                    };
                    return n.schedule(l, 0, o)
                }
                if (!s) {
                    s = new i.a;
                    try {
                        t.apply(u, e.concat([function() {
                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                            s.next(t.length <= 1 ? t[0] : t), s.complete()
                        }]))
                    } catch (t) {
                        Object(a.a)(s) ? s.error(t) : console.warn(t)
                    }
                }
                return s.subscribe(r)
            }))
        }
    }

    function l(t) {
        var e = this,
            n = t.args,
            r = t.subscriber,
            o = t.params,
            a = o.callbackFunc,
            s = o.context,
            u = o.scheduler,
            c = o.subject;
        if (!c) {
            c = o.subject = new i.a;
            try {
                a.apply(s, n.concat([function() {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    var r = t.length <= 1 ? t[0] : t;
                    e.add(u.schedule(f, 0, {
                        value: r,
                        subject: c
                    }))
                }]))
            } catch (t) {
                c.error(t)
            }
        }
        this.add(c.subscribe(r))
    }

    function f(t) {
        var e = t.value,
            n = t.subject;
        n.next(e), n.complete()
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return c
    }));
    var r = n(14),
        i = n(135),
        o = n(37),
        a = n(175),
        s = n(55),
        u = n(42);

    function c(t, e, n) {
        if (e) {
            if (!Object(s.a)(e)) return function() {
                for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
                return c(t, n).apply(void 0, r).pipe(Object(o.a)((function(t) {
                    return Object(u.a)(t) ? e.apply(void 0, t) : e(t)
                })))
            };
            n = e
        }
        return function() {
            for (var e = [], o = 0; o < arguments.length; o++) e[o] = arguments[o];
            var s = {
                subject: void 0,
                args: e,
                callbackFunc: t,
                scheduler: n,
                context: this
            };
            return new r.a((function(r) {
                var o = s.context,
                    u = s.subject;
                if (n) return n.schedule(l, 0, {
                    params: s,
                    subscriber: r,
                    context: o
                });
                if (!u) {
                    u = s.subject = new i.a;
                    try {
                        t.apply(o, e.concat([function() {
                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                            var n = t.shift();
                            n ? u.error(n) : (u.next(t.length <= 1 ? t[0] : t), u.complete())
                        }]))
                    } catch (t) {
                        Object(a.a)(u) ? u.error(t) : console.warn(t)
                    }
                }
                return u.subscribe(r)
            }))
        }
    }

    function l(t) {
        var e = this,
            n = t.params,
            r = t.subscriber,
            o = t.context,
            a = n.callbackFunc,
            s = n.args,
            u = n.scheduler,
            c = n.subject;
        if (!c) {
            c = n.subject = new i.a;
            try {
                a.apply(o, s.concat([function() {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    var r = t.shift();
                    if (r) e.add(u.schedule(d, 0, {
                        err: r,
                        subject: c
                    }));
                    else {
                        var i = t.length <= 1 ? t[0] : t;
                        e.add(u.schedule(f, 0, {
                            value: i,
                            subject: c
                        }))
                    }
                }]))
            } catch (t) {
                this.add(u.schedule(d, 0, {
                    err: t,
                    subject: c
                }))
            }
        }
        this.add(c.subscribe(r))
    }

    function f(t) {
        var e = t.value,
            n = t.subject;
        n.next(e), n.complete()
    }

    function d(t) {
        var e = t.err;
        t.subject.error(e)
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return u
    }));
    var r = n(14),
        i = n(42),
        o = n(37),
        a = n(174),
        s = n(62);

    function u() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        if (1 === t.length) {
            var n = t[0];
            if (Object(i.a)(n)) return c(n, null);
            if (Object(a.a)(n) && Object.getPrototypeOf(n) === Object.prototype) {
                var r = Object.keys(n);
                return c(r.map((function(t) {
                    return n[t]
                })), r)
            }
        }
        if ("function" == typeof t[t.length - 1]) {
            var s = t.pop();
            return c(t = 1 === t.length && Object(i.a)(t[0]) ? t[0] : t, null).pipe(Object(o.a)((function(t) {
                return s.apply(void 0, t)
            })))
        }
        return c(t, null)
    }

    function c(t, e) {
        return new r.a((function(n) {
            var r = t.length;
            if (0 !== r)
                for (var i = new Array(r), o = 0, a = 0, u = function(u) {
                        var c = Object(s.a)(t[u]),
                            l = !1;
                        n.add(c.subscribe({
                            next: function(t) {
                                l || (l = !0, a++), i[u] = t
                            },
                            error: function(t) {
                                return n.error(t)
                            },
                            complete: function() {
                                ++o !== r && l || (a === r && n.next(e ? e.reduce((function(t, e, n) {
                                    return t[e] = i[n], t
                                }), {}) : i), n.complete())
                            }
                        }))
                    }, c = 0; c < r; c++) u(c);
            else n.complete()
        }))
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return s
    }));
    var r = n(14),
        i = n(42),
        o = n(94),
        a = n(37);

    function s(t, e, n) {
        return n ? s(t, e).pipe(Object(a.a)((function(t) {
            return Object(i.a)(t) ? n.apply(void 0, t) : n(t)
        }))) : new r.a((function(n) {
            var r, i = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return n.next(1 === t.length ? t[0] : t)
            };
            try {
                r = t(i)
            } catch (t) {
                return void n.error(t)
            }
            if (Object(o.a)(e)) return function() {
                return e(i, r)
            }
        }))
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return a
    }));
    var r = n(14),
        i = n(101),
        o = n(55);

    function a(t, e, n, a, u) {
        var c, l;
        if (1 == arguments.length) {
            var f = t;
            l = f.initialState, e = f.condition, n = f.iterate, c = f.resultSelector || i.a, u = f.scheduler
        } else void 0 === a || Object(o.a)(a) ? (l = t, c = i.a, u = a) : (l = t, c = a);
        return new r.a((function(t) {
            var r = l;
            if (u) return u.schedule(s, 0, {
                subscriber: t,
                iterate: n,
                condition: e,
                resultSelector: c,
                state: r
            });
            for (;;) {
                if (e) {
                    var i = void 0;
                    try {
                        i = e(r)
                    } catch (e) {
                        return void t.error(e)
                    }
                    if (!i) {
                        t.complete();
                        break
                    }
                }
                var o = void 0;
                try {
                    o = c(r)
                } catch (e) {
                    return void t.error(e)
                }
                if (t.next(o), t.closed) break;
                try {
                    r = n(r)
                } catch (e) {
                    return void t.error(e)
                }
            }
        }))
    }

    function s(t) {
        var e = t.subscriber,
            n = t.condition;
        if (!e.closed) {
            if (t.needIterate) try {
                t.state = t.iterate(t.state)
            } catch (t) {
                return void e.error(t)
            } else t.needIterate = !0;
            if (n) {
                var r = void 0;
                try {
                    r = n(t.state)
                } catch (t) {
                    return void e.error(t)
                }
                if (!r) return void e.complete();
                if (e.closed) return
            }
            var i;
            try {
                i = t.resultSelector(t.state)
            } catch (t) {
                return void e.error(t)
            }
            if (!e.closed && (e.next(i), !e.closed)) return this.schedule(t)
        }
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return o
    }));
    var r = n(184),
        i = n(48);

    function o(t, e, n) {
        return void 0 === e && (e = i.a), void 0 === n && (n = i.a), Object(r.a)((function() {
            return t() ? e : n
        }))
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return s
    }));
    var r = n(14),
        i = n(62),
        o = n(42),
        a = n(48);

    function s() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        if (0 === t.length) return a.a;
        var n = t[0],
            u = t.slice(1);
        return 1 === t.length && Object(o.a)(n) ? s.apply(void 0, n) : new r.a((function(t) {
            var e = function() {
                return t.add(s.apply(void 0, u).subscribe(t))
            };
            return Object(i.a)(n).subscribe({
                next: function(e) {
                    t.next(e)
                },
                error: e,
                complete: e
            })
        }))
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return o
    }));
    var r = n(14),
        i = n(28);

    function o(t, e) {
        return e ? new r.a((function(n) {
            var r = Object.keys(t),
                o = new i.a;
            return o.add(e.schedule(a, 0, {
                keys: r,
                index: 0,
                subscriber: n,
                subscription: o,
                obj: t
            })), o
        })) : new r.a((function(e) {
            for (var n = Object.keys(t), r = 0; r < n.length && !e.closed; r++) {
                var i = n[r];
                t.hasOwnProperty(i) && e.next([i, t[i]])
            }
            e.complete()
        }))
    }

    function a(t) {
        var e = t.keys,
            n = t.index,
            r = t.subscriber,
            i = t.subscription,
            o = t.obj;
        if (!r.closed)
            if (n < e.length) {
                var a = e[n];
                r.next([a, o[a]]), i.add(this.schedule({
                    keys: e,
                    index: n + 1,
                    subscriber: r,
                    subscription: i,
                    obj: o
                }))
            } else r.complete()
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return s
    }));
    var r = n(297),
        i = n(192),
        o = n(78),
        a = n(14);

    function s(t, e, n) {
        return [Object(o.a)(e, n)(new a.a(Object(i.a)(t))), Object(o.a)(Object(r.a)(e, n))(new a.a(Object(i.a)(t)))]
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return i
    }));
    var r = n(14);

    function i(t, e, n) {
        return void 0 === t && (t = 0), new r.a((function(r) {
            void 0 === e && (e = t, t = 0);
            var i = 0,
                a = t;
            if (n) return n.schedule(o, 0, {
                index: i,
                count: e,
                start: t,
                subscriber: r
            });
            for (;;) {
                if (i++ >= e) {
                    r.complete();
                    break
                }
                if (r.next(a++), r.closed) break
            }
        }))
    }

    function o(t) {
        var e = t.start,
            n = t.index,
            r = t.count,
            i = t.subscriber;
        n >= r ? i.complete() : (i.next(e), i.closed || (t.index = n + 1, t.start = e + 1, this.schedule(t)))
    }
}, function(t, e, n) {
    "use strict";
    var r, i = this && this.__extends || (r = function(t, e) {
            return (r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        o = this && this.__assign || function() {
            return (o = Object.assign || function(t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                    for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }).apply(this, arguments)
        },
        a = this && this.__rest || function(t, e) {
            var n = {};
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
            if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                var i = 0;
                for (r = Object.getOwnPropertySymbols(t); i < r.length; i++) e.indexOf(r[i]) < 0 && (n[r[i]] = t[r[i]])
            }
            return n
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(0),
        u = n(281),
        c = n(281),
        l = n(30),
        f = n(40),
        d = function(t) {
            function e(n) {
                return t.call(this, n, e._initState) || this
            }
            return i(e, t), e.prototype.render = function() {
                return this.state.renderCache || null
            }, e.prototype._subscribe = function(t) {
                var e = t.props,
                    n = t.component,
                    r = 0;
                switch (b(e, (function() {
                    return r += 1
                })), r) {
                    case 0:
                        this.setState({
                            subscription: null,
                            renderCache: m(n, e)
                        });
                        break;
                    case 1:
                        new _(this, t);
                        break;
                    default:
                        new w(this, t, r)
                }
            }, e.prototype._unsubscribe = function() {
                var t = this.state ? this.state.subscription : null;
                t && t.unsubscribe()
            }, e.prototype.componentWillReceiveProps = function(t) {
                this._unsubscribe(), this._subscribe(t)
            }, e.prototype.componentWillMount = function() {
                this._unsubscribe(), this._subscribe(this.props)
            }, e.prototype.componentWillUnmount = function() {
                this._unsubscribe(), this.setState(e._initState)
            }, e.prototype.shouldComponentUpdate = function(t, e, n) {
                return e.renderCache !== this.state.renderCache
            }, e._initState = {
                renderCache: null,
                subscription: null
            }, e._endState = {
                subscription: null
            }, e
        }(s.Component);
    e.LiftWrapper = d, e.lift = function(t) {
        return function(e) {
            return s.createElement(d, {
                component: t,
                props: e
            })
        }
    };
    var p = "children",
        h = "style";

    function b(t, e) {
        for (var n in t) {
            var r = t[n];
            if (r instanceof l.Observable) e(r);
            else if (p === n && r instanceof Array)
                for (var i = r.length, o = 0; o < i; ++o) {
                    var a = r[o];
                    a instanceof l.Observable && e(a)
                } else if (h === n)
                    for (var s in r) {
                        var u = r[s];
                        u instanceof l.Observable && e(u)
                    }
        }
    }

    function m(t, n, r) {
        void 0 === r && (r = []);
        var i, o = {},
            a = -1;
        for (var u in n) {
            var c = n[u],
                f = u === p,
                d = u === e.PROP_MOUNT,
                b = u === h;
            if (c instanceof l.Observable) {
                var m = r[++a];
                f ? i = m : d ? o.ref = m : o[u] = m
            } else if (f) {
                if (c instanceof Array)
                    for (var g = c.length, v = 0; v < g; ++v)
                        if (c[v] instanceof l.Observable) {
                            if (!i) {
                                i = Array(c.length);
                                for (var y = 0; y < v; ++y) i[y] = c[y]
                            }
                            i[v] = r[++a]
                        } else i && (i[v] = c[v]);
                i = i || c
            } else if (d) o.ref = c;
            else if (b) {
                var _ = void 0;
                for (var v in c) {
                    var w = c[v];
                    if (w instanceof l.Observable) {
                        if (!_)
                            for (var y in _ = {}, c) {
                                if (y === v) break;
                                _[y] = c[y]
                            }
                        _[v] = r[++a]
                    } else _ && (_[v] = w)
                }
                o.style = _ || c
            } else o[u] = c
        }
        return s.createElement(t, o, void 0 === i ? null : i)
    }
    e.PROP_MOUNT = "mount", e.PROP_REF = "ref";
    var g = function() {
            function t(t, e) {
                this.state = t, this.props = e
            }
            return t.prototype.setState = function(t) {
                "subscription" in t && (this.state.subscription = t.subscription), "renderCache" in t && (this.state.renderCache = t.renderCache)
            }, t
        }(),
        v = function(t) {
            throw t
        };

    function y(t) {
        c.warning((t ? "The component <" + t + ">" : "An unnamed component") + " has received an observable that doesn't immediately emit a value in one of its props. Since this observable hasn't yet called its subscription handler, the component can not be rendered at the time. Check the props of " + (t ? "<" + t + ">" : "this component") + ".")
    }
    var _ = function() {
            function t(t, e) {
                var n = this;
                this._receivedValue = !1;
                var r = {
                    subscription: this,
                    renderCache: t.state && t.state.renderCache
                };
                this._liftedComponent = new g(r, e), b(e.props, (function(t) {
                    n._innerSubscription = t.subscribe((function(t) {
                        return n._handleValue(t)
                    }), v, (function() {
                        return n._handleCompleted()
                    })), n._innerSubscription && n._innerSubscription.closed && (n._innerSubscription = null)
                })), c.DEV_ENV && !this._receivedValue && y(c.getReactComponentName(this._liftedComponent.props.component)), this._liftedComponent = t, t.setState(r)
            }
            return t.prototype.unsubscribe = function() {
                this._innerSubscription && this._innerSubscription.unsubscribe()
            }, t.prototype._handleValue = function(t) {
                c.DEV_ENV && (this._receivedValue = !0);
                var e = this._liftedComponent,
                    n = e.props,
                    r = m(n.component, n.props, [t]);
                u.structEq(e.state.renderCache, r) || e.setState({
                    renderCache: r
                })
            }, t.prototype._handleCompleted = function() {
                this._innerSubscription = null, this._liftedComponent.setState(d._endState)
            }, t
        }(),
        w = function() {
            function t(t, e, n) {
                var r = this,
                    i = {
                        subscription: this,
                        renderCache: t.state && t.state.renderCache
                    };
                this._liftedComponent = new g(i, e), this._innerSubscriptions = [], this._values = Array(n);
                for (var o = 0; o < n; ++o) this._values[o] = this;
                if (b(e.props, (function(t) {
                        var e = r._innerSubscriptions.length,
                            n = t.subscribe((function(t) {
                                return r._handleValue(e, t)
                            }), v, (function() {
                                return r._handleCompleted(e)
                            }));
                        n && n.closed && (n = null), r._innerSubscriptions.push(n)
                    })), c.DEV_ENV)
                    for (o = this._values.length - 1; 0 <= o; --o)
                        if (this._values[o] === this) {
                            y(c.getReactComponentName(t.props.component));
                            break
                        } this._liftedComponent = t, t.setState(i)
            }
            return t.prototype.unsubscribe = function() {
                var t = this,
                    e = -1;
                b(this._liftedComponent.props.props, (function(n) {
                    var r = t._innerSubscriptions[++e];
                    r && r.unsubscribe()
                }))
            }, t.prototype._handleValue = function(t, e) {
                this._values[t] = e;
                for (var n = this._values.length - 1; 0 <= n; --n)
                    if (this._values[n] === this) return;
                var r = this._liftedComponent,
                    i = r.props,
                    o = m(i.component, i.props, this._values);
                u.structEq(r.state.renderCache, o) || r.setState({
                    renderCache: o
                })
            }, t.prototype._handleCompleted = function(t) {
                var e = this._innerSubscriptions.length;
                if (e > t && (this._innerSubscriptions[t] = null), e === this._values.length) {
                    for (var n = 0; n < e; ++n)
                        if (this._innerSubscriptions[n]) return;
                    this._liftedComponent.setState(d._endState)
                }
            }, t
        }();

    function E(t) {
        return t.filter((function(t) {
            if (!0 === t) throw new TypeError("Unexpected `true` value in classes");
            return null != t && "" !== t && !1 !== t
        }))
    }

    function O(t) {
        var e = null,
            n = null;
        return function(r) {
            n && (n.unsubscribe(), n = null, e = null), r && (e = function(t) {
                var e = [],
                    n = [];
                for (var r in t) e.push(r), n.push(t[r]);
                return l.combineLatest(n, (function() {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    for (var r = {}, i = 0; i < e.length; i++) r[e[i]] = t[i];
                    return r
                }))
            }(t), n = e.subscribe((function(t) {
                for (var e in t) r[e] = t[e]
            }), v, (function() {
                e = null, n = null
            })))
        }
    }

    function x(t) {
        return function(e) {
            for (var n in t) t[n].set(e.target[n])
        }
    }
    e.classes = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        if (t && void 0 !== t.find((function(t) {
                return t instanceof l.Observable
            }))) return {
            className: l.combineLatest(E(t || []).map((function(t) {
                return t instanceof l.Observable ? t : l.of(t)
            })), (function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var n = E(t || []);
                return n.length > 0 ? n.join(" ") : void 0
            }))
        };
        var n = E(t || []);
        return {
            className: n.length > 0 ? n.join(" ") : void 0
        }
    }, e.setElementProps = O, e.getElementProps = x, e.bindElementProps = function(t) {
        var n, r, i = e.PROP_REF,
            o = t[i],
            s = e.PROP_MOUNT,
            u = t[s],
            c = a(t, ["symbol" == typeof i ? i : i + "", "symbol" == typeof s ? s : s + ""]);
        return o ? ((n = {})[e.PROP_REF] = O(c), n[o] = x(c), n) : u ? ((r = {})[e.PROP_MOUNT] = O(c), r[u] = x(c), r) : {}
    }, e.bind = function(t) {
        return o({}, t, {
            onChange: x(t)
        })
    }, e.reactiveList = function(t, e) {
        return t.pipe(f.scan((function(t, n) {
            for (var r = t[0], i = (t[1], {}), o = Array(n.length), a = n.length, s = 0; s < a; ++s) {
                var u = n[s],
                    c = u.toString();
                c in i ? o[s] = i[c] : i[c] = o[s] = c in r ? r[c] : e(u)
            }
            return [i, o]
        }), [{},
            []
        ]), f.map((function(t) {
            return t[1]
        })))
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return a
    }));
    var r = n(44),
        i = n(265),
        o = n(238);

    function a(t, e) {
        return void 0 === e && (e = r.a), Object(i.a)((function() {
            return Object(o.a)(t, e)
        }))
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return s
    }));
    var r = n(2),
        i = n(20),
        o = n(81),
        a = n(18);

    function s(t) {
        return function(e) {
            var n = new u(t),
                r = e.lift(n);
            return n.caught = r
        }
    }
    var u = function() {
            function t(t) {
                this.selector = t
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new c(t, this.selector, this.caught))
            }, t
        }(),
        c = function(t) {
            function e(e, n, r) {
                var i = t.call(this, e) || this;
                return i.selector = n, i.caught = r, i
            }
            return r.a(e, t), e.prototype.error = function(e) {
                if (!this.isStopped) {
                    var n = void 0;
                    try {
                        n = this.selector(e, this.caught)
                    } catch (e) {
                        return void t.prototype.error.call(this, e)
                    }
                    this._unsubscribeAndRecycle();
                    var r = new o.a(this, void 0, void 0);
                    this.add(r), Object(a.a)(this, n, void 0, void 0, r)
                }
            }, e
        }(i.a)
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return i
    }));
    var r = n(129);

    function i() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return function(e) {
            return e.lift.call(r.a.apply(void 0, [e].concat(t)))
        }
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return a
    }));
    var r = n(2),
        i = n(11),
        o = n(44);

    function a(t, e) {
        return void 0 === e && (e = o.a),
            function(n) {
                return n.lift(new s(t, e))
            }
    }
    var s = function() {
            function t(t, e) {
                this.dueTime = t, this.scheduler = e
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new u(t, this.dueTime, this.scheduler))
            }, t
        }(),
        u = function(t) {
            function e(e, n, r) {
                var i = t.call(this, e) || this;
                return i.dueTime = n, i.scheduler = r, i.debouncedSubscription = null, i.lastValue = null, i.hasValue = !1, i
            }
            return r.a(e, t), e.prototype._next = function(t) {
                this.clearDebounce(), this.lastValue = t, this.hasValue = !0, this.add(this.debouncedSubscription = this.scheduler.schedule(c, this.dueTime, this))
            }, e.prototype._complete = function() {
                this.debouncedNext(), this.destination.complete()
            }, e.prototype.debouncedNext = function() {
                if (this.clearDebounce(), this.hasValue) {
                    var t = this.lastValue;
                    this.lastValue = null, this.hasValue = !1, this.destination.next(t)
                }
            }, e.prototype.clearDebounce = function() {
                var t = this.debouncedSubscription;
                null !== t && (this.remove(t), t.unsubscribe(), this.debouncedSubscription = null)
            }, e
        }(i.a);

    function c(t) {
        t.debouncedNext()
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return a
    }));
    var r = n(2),
        i = n(11),
        o = n(28);

    function a(t) {
        return function(e) {
            return e.lift(new s(t))
        }
    }
    var s = function() {
            function t(t) {
                this.callback = t
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new u(t, this.callback))
            }, t
        }(),
        u = function(t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                return r.add(new o.a(n)), r
            }
            return r.a(e, t), e
        }(i.a)
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return o
    }));
    var r = n(2),
        i = n(11);

    function o() {
        return function(t) {
            return t.lift(new a)
        }
    }
    var a = function() {
            function t() {}
            return t.prototype.call = function(t, e) {
                return e.subscribe(new s(t))
            }, t
        }(),
        s = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.hasPrev = !1, n
            }
            return r.a(e, t), e.prototype._next = function(t) {
                var e;
                this.hasPrev ? e = [this.prev, t] : this.hasPrev = !0, this.prev = t, e && this.destination.next(e)
            }, e
        }(i.a)
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return i
    }));
    var r = n(219);

    function i(t, e, n) {
        var i;
        return i = t && "object" == typeof t ? t : {
                bufferSize: t,
                windowTime: e,
                refCount: !1,
                scheduler: n
            },
            function(t) {
                return t.lift(function(t) {
                    var e, n, i = t.bufferSize,
                        o = void 0 === i ? Number.POSITIVE_INFINITY : i,
                        a = t.windowTime,
                        s = void 0 === a ? Number.POSITIVE_INFINITY : a,
                        u = t.refCount,
                        c = t.scheduler,
                        l = 0,
                        f = !1,
                        d = !1;
                    return function(t) {
                        l++, e && !f || (f = !1, e = new r.a(o, s, c), n = t.subscribe({
                            next: function(t) {
                                e.next(t)
                            },
                            error: function(t) {
                                f = !0, e.error(t)
                            },
                            complete: function() {
                                d = !0, e.complete()
                            }
                        }));
                        var i = e.subscribe(this);
                        this.add((function() {
                            l--, i.unsubscribe(), n && !d && u && 0 === l && (n.unsubscribe(), n = void 0, e = void 0)
                        }))
                    }
                }(i))
            }
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return o
    }));
    var r = n(147),
        i = n(101);

    function o() {
        return Object(r.a)(i.a)
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return a
    }));
    var r = n(2),
        i = n(20),
        o = n(18);

    function a(t) {
        return function(e) {
            return e.lift(new s(t))
        }
    }
    var s = function() {
            function t(t) {
                this.notifier = t
            }
            return t.prototype.call = function(t, e) {
                var n = new u(t),
                    r = Object(o.a)(n, this.notifier);
                return r && !n.seenValue ? (n.add(r), e.subscribe(n)) : n
            }, t
        }(),
        u = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.seenValue = !1, n
            }
            return r.a(e, t), e.prototype.notifyNext = function(t, e, n, r, i) {
                this.seenValue = !0, this.complete()
            }, e.prototype.notifyComplete = function() {}, e
        }(i.a)
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return o
    }));
    var r = n(2),
        i = n(11);

    function o(t, e) {
        return void 0 === e && (e = !1),
            function(n) {
                return n.lift(new a(t, e))
            }
    }
    var a = function() {
            function t(t, e) {
                this.predicate = t, this.inclusive = e
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new s(t, this.predicate, this.inclusive))
            }, t
        }(),
        s = function(t) {
            function e(e, n, r) {
                var i = t.call(this, e) || this;
                return i.predicate = n, i.inclusive = r, i.index = 0, i
            }
            return r.a(e, t), e.prototype._next = function(t) {
                var e, n = this.destination;
                try {
                    e = this.predicate(t, this.index++)
                } catch (t) {
                    return void n.error(t)
                }
                this.nextOrComplete(t, e)
            }, e.prototype.nextOrComplete = function(t, e) {
                var n = this.destination;
                Boolean(e) ? n.next(t) : (this.inclusive && n.next(t), n.complete())
            }, e
        }(i.a)
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return s
    }));
    var r = n(2),
        i = n(11),
        o = n(75),
        a = n(94);

    function s(t, e, n) {
        return function(r) {
            return r.lift(new u(t, e, n))
        }
    }
    var u = function() {
            function t(t, e, n) {
                this.nextOrObserver = t, this.error = e, this.complete = n
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new c(t, this.nextOrObserver, this.error, this.complete))
            }, t
        }(),
        c = function(t) {
            function e(e, n, r, i) {
                var s = t.call(this, e) || this;
                return s._tapNext = o.a, s._tapError = o.a, s._tapComplete = o.a, s._tapError = r || o.a, s._tapComplete = i || o.a, Object(a.a)(n) ? (s._context = s, s._tapNext = n) : n && (s._context = n, s._tapNext = n.next || o.a, s._tapError = n.error || o.a, s._tapComplete = n.complete || o.a), s
            }
            return r.a(e, t), e.prototype._next = function(t) {
                try {
                    this._tapNext.call(this._context, t)
                } catch (t) {
                    return void this.destination.error(t)
                }
                this.destination.next(t)
            }, e.prototype._error = function(t) {
                try {
                    this._tapError.call(this._context, t)
                } catch (t) {
                    return void this.destination.error(t)
                }
                this.destination.error(t)
            }, e.prototype._complete = function() {
                try {
                    this._tapComplete.call(this._context)
                } catch (t) {
                    return void this.destination.error(t)
                }
                return this.destination.complete()
            }, e
        }(i.a)
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return s
    }));
    var r = n(44),
        i = n(285),
        o = n(288),
        a = n(220);

    function s(t, e) {
        return void 0 === e && (e = r.a), Object(o.a)(t, Object(a.a)(new i.a), e)
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = e.repeat = function(t, e) {
            return new Array(e + 1).join(t)
        },
        i = e.pad = function(t, e) {
            return r("0", e - t.toString().length) + t
        };
    e.formatTime = function(t) {
        return i(t.getHours(), 2) + ":" + i(t.getMinutes(), 2) + ":" + i(t.getSeconds(), 2) + "." + i(t.getMilliseconds(), 3)
    }, e.timer = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance : Date
}, , , , function(t, e, n) {
    "use strict";
    var r = n(2),
        i = function(t) {
            function e(e, n) {
                var r = t.call(this, e, n) || this;
                return r.scheduler = e, r.work = n, r
            }
            return r.a(e, t), e.prototype.requestAsyncId = function(e, n, r) {
                return void 0 === r && (r = 0), null !== r && r > 0 ? t.prototype.requestAsyncId.call(this, e, n, r) : (e.actions.push(this), e.scheduled || (e.scheduled = requestAnimationFrame((function() {
                    return e.flush(null)
                }))))
            }, e.prototype.recycleAsyncId = function(e, n, r) {
                if (void 0 === r && (r = 0), null !== r && r > 0 || null === r && this.delay > 0) return t.prototype.recycleAsyncId.call(this, e, n, r);
                0 === e.actions.length && (cancelAnimationFrame(n), e.scheduled = void 0)
            }, e
        }(n(136).a),
        o = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return r.a(e, t), e.prototype.flush = function(t) {
                this.active = !0, this.scheduled = void 0;
                var e, n = this.actions,
                    r = -1,
                    i = n.length;
                t = t || n.shift();
                do {
                    if (e = t.execute(t.state, t.delay)) break
                } while (++r < i && (t = n.shift()));
                if (this.active = !1, e) {
                    for (; ++r < i && (t = n.shift());) t.unsubscribe();
                    throw e
                }
            }, e
        }(n(134).a);
    n.d(e, "a", (function() {
        return a
    }));
    var a = new o(i)
}, function(t, e, n) {
    "use strict";
    var r;
    n.d(e, "a", (function() {
            return r
        })),
        function(t) {
            t.rpcLegacyMessageName = "cs-to-bg-rpc-1557421403805"
        }(r || (r = {}))
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return o
    }));
    var r = n(178);
    String.fromCharCode(160);
    const i = /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp|xxx|blob):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i;

    function o(t = "", e, n = !1, o) {
        if (!t || "undefined" == typeof window) return "";
        const a = Object.assign(Object.assign(Object.assign({}, e ? {
            ALLOWED_TAGS: e
        } : {}), o ? {
            ADD_ATTR: o
        } : {}), n ? {
            ALLOWED_URI_REGEXP: i
        } : {});
        return Object.keys(a).length > 0 ? r.sanitize(t, a) : r.sanitize(t)
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        var e, n = t.Symbol;
        return "function" == typeof n ? n.observable ? e = n.observable : (e = n("observable"), n.observable = e) : e = "@@observable", e
    }
    n.d(e, "a", (function() {
        return r
    }))
}, function(t, e, n) {
    "use strict";
    (function(t) {
        var n = "object" == typeof t && t && t.Object === Object && t;
        e.a = n
    }).call(this, n(159))
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.logger = e.defaults = void 0;
    var r, i = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        },
        o = n(472),
        a = n(405),
        s = (r = n(475)) && r.__esModule ? r : {
            default: r
        };

    function u() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = i({}, s.default, t),
            n = e.logger,
            r = e.transformer,
            u = e.stateTransformer,
            c = e.errorTransformer,
            l = e.predicate,
            f = e.logErrors,
            d = e.diffPredicate;
        if (void 0 === n) return function() {
            return function(t) {
                return function(e) {
                    return t(e)
                }
            }
        };
        if (r && console.error("Option 'transformer' is deprecated, use 'stateTransformer' instead!"), t.getState && t.dispatch) return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n\n\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\n\nconst logger = createLogger({\n  // ...options\n});\n\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),
            function() {
                return function(t) {
                    return function(e) {
                        return t(e)
                    }
                }
            };
        var p = [];
        return function(t) {
            var n = t.getState;
            return function(t) {
                return function(r) {
                    if ("function" == typeof l && !l(n, r)) return t(r);
                    var s = {};
                    p.push(s), s.started = a.timer.now(), s.startedTime = new Date, s.prevState = u(n()), s.action = r;
                    var h = void 0;
                    if (f) try {
                        h = t(r)
                    } catch (t) {
                        s.error = c(t)
                    } else h = t(r);
                    s.took = a.timer.now() - s.started, s.nextState = u(n());
                    var b = e.diff && "function" == typeof d ? d(n, r) : e.diff;
                    if ((0, o.printBuffer)(p, i({}, e, {
                            diff: b
                        })), p.length = 0, s.error) throw s.error;
                    return h
                }
            }
        }
    }
    var c = u();
    e.defaults = s.default, e.logger = c, e.default = u, t.exports = e.default
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return u
    }));
    var r = n(241),
        i = n(89);
    const o = r,
        a = n(188),
        s = i,
        u = Object.assign({}, o, a, s)
}, , , , , , , function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return u
    }));
    var r = n(0),
        i = n(9),
        o = n(10),
        a = n(424);

    function s() {
        const t = Object(o.b)();
        return "chrome" === t && window.navigator.userAgent.includes("Edg") ? "edge" : t
    }
    const u = t => r.createElement("div", {
        className: Object(i.d)(a.header, !t.hideDelimiter && a.delimiter)
    }, r.createElement("a", {
        target: "_blank",
        href: Object(o.f)().app,
        className: Object(i.d)(a.logo, a[s()])
    }))
}, , function(t, e, n) {
    t.exports = {
        header: "_2Yqtj",
        delimiter: "_2b4ca",
        logo: "_3Dkhr",
        chrome: "_1vf40",
        safari: "_2UKts",
        firefox: "_4jHPl",
        edge: "_1n9ln"
    }
}, , function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return a
    }));
    var r = n(12),
        i = n(4),
        o = n(72);
    class a {
        constructor(t, e = r.a.create(a.name)) {
            this._transport = t, this._log = e, this._calls = new Map, this._sub = this._transport.inbound.subscribe(t => {
                const e = this._calls.get(t.id);
                if (e) try {
                    "err" in t ? e.reject(t.err) : e.resolve(t.res)
                } finally {
                    this._calls.delete(t.id)
                } else this._log.warn(`received rpc call response for unregistered call ${t.id}`)
            }), this.api = new Proxy({}, {
                get: (t, e) => (...t) => this._handleCall(e, t)
            })
        }
        _handleCall(t, e) {
            let n = i.c.create();
            for (; this._calls.has(n);) n = i.c.create();
            const r = o.a.createCompletionSource();
            return this._calls.set(n, r), this._transport.outbound({
                id: n,
                method: t,
                args: e
            }), r.promise
        }
        dispose() {
            this._sub.unsubscribe()
        }
    }
}, , , , function(t, e, n) {
    "use strict";
    var r = n(426),
        i = n(410),
        o = n(14);
    class a {
        constructor(t, e) {
            this._rpcMessageName = t, this._message = e, this.inbound = new o.a(t => {
                const e = e => {
                    const n = e;
                    t.next(n)
                };
                return this._message.on(this._rpcMessageName, e), () => this._message.off(this._rpcMessageName, e)
            }), this.outbound = t => {
                this._message.emitBackground(this._rpcMessageName, t)
            }
        }
    }
    n.d(e, "a", (function() {
        return s
    }));
    class s extends r.a {
        constructor(t) {
            super(new a(i.a.rpcLegacyMessageName, t))
        }
    }
}, , , , , , , , , , , , , , , , function(t, e, n) {
    "use strict";
    n.d(e, "c", (function() {
        return s
    })), n.d(e, "b", (function() {
        return u
    })), n.d(e, "a", (function() {
        return c
    }));
    var r = n(0),
        i = n(9),
        o = n(106),
        a = n(21);
    const s = ({
            onClick: t,
            isLargeButton: e
        }) => r.createElement("div", {
            className: o.container
        }, r.createElement("div", {
            className: o.header
        }, r.createElement("video", {
            className: o.optInVideo,
            autoPlay: !0,
            muted: !0,
            preload: "auto"
        }, r.createElement("source", {
            src: "http://d481ihvqkt377.cloudfront.net/gdocs/gdocs-animation.mp4",
            type: "video/mp4"
        })), "Grammarly is now ", r.createElement("span", {
            className: o.bold
        }, "beta"), " testing", r.createElement("br", null), " on Google Docs!"), r.createElement("div", {
            className: o.btnContainer
        }, r.createElement(a.a, {
            clickHandler: t
        }, r.createElement("div", {
            className: Object(i.d)(o.button, e && o.large)
        }, "Turn it on"))), r.createElement("div", {
            className: o.note
        }, "This beta test does not currently include Grammarly Premium corrections or the popup Grammarly Editor")),
        u = ({
            onClick: t
        }) => r.createElement("div", {
            className: o.container
        }, r.createElement("div", {
            className: o.offlineDialogHeader
        }, "Cannot connect to Grammarly"), r.createElement("div", {
            className: o.dialogMessage
        }, "Please ", r.createElement("span", {
            className: o.bold
        }, "reload"), " the browser tab and", r.createElement("br", null), " check your internet connection."), r.createElement("div", {
            className: Object(i.d)(o.btnContainer, o.offlineDialogButton)
        }, r.createElement(a.a, {
            clickHandler: t
        }, r.createElement("div", {
            className: Object(i.d)(o.button, o.large)
        }, "Reload")))),
        c = ({
            onClick: t
        }) => r.createElement("div", {
            className: o.container
        }, r.createElement("div", {
            className: o.largeDocumentDialogHeader
        }, "This doc looks a bit long"), r.createElement("div", {
            className: o.dialogMessage
        }, "Do you want Grammarly to check this", r.createElement("br", null), " document, or are you just reading?"), r.createElement("div", {
            className: Object(i.d)(o.btnContainer, o.offlineDialogButton)
        }, r.createElement(a.a, {
            clickHandler: t
        }, r.createElement("div", {
            className: Object(i.d)(o.button, o.large)
        }, "Yes, check it!"))))
}, function(t, e, n) {
    "use strict";
    var r = n(223),
        i = n(306),
        o = n(117),
        a = n(27);
    e.a = function(t, e) {
        return (Object(a.a)(t) ? r.a : i.a)(t, function(t) {
            return "function" == typeof t ? t : o.a
        }(e))
    }
}, , , , function(t, e, n) {
    "use strict";
    n.d(e, "c", (function() {
        return r
    })), n.d(e, "b", (function() {
        return l
    })), n.d(e, "a", (function() {
        return f
    }));
    var r, i = n(21),
        o = n(38),
        a = n(0),
        s = n(422),
        u = n(246),
        c = n(261);
    ! function(t) {
        t.hide = "hideGdocsSigninPopupMessage"
    }(r || (r = {}));
    const l = t => a.createElement("div", {
            className: c.popup
        }, a.createElement(i.a, {
            clickHandler: t.onClose
        }, a.createElement("div", {
            className: c.close
        })), a.createElement(f, {
            onClick: () => {
                t.onClose(), t.onClick()
            }
        })),
        f = t => {
            const e = e => {
                const n = "signup" === e ? Object(o.m)("signupHook", "toolbarMenu") : Object(o.l)();
                window.open(n), t.onClick(), u.a.gdocsRegisterPromptButtonClick(e)
            };
            return a.createElement("div", {
                className: c.wrapper
            }, a.createElement(s.a, null), a.createElement("div", {
                className: c.animation
            }), a.createElement("div", {
                className: c.title
            }, "Welcome to the Grammarly beta", a.createElement("br", null), "for Google Docs!"), a.createElement("div", {
                className: c.subtitle
            }, "Sign up to turn on Grammarly", a.createElement("br", null), "suggestions in your Google Docs."), a.createElement("div", {
                className: c.buttonWrapper
            }, a.createElement(i.a, {
                clickHandler: () => e("signup")
            }, a.createElement("div", {
                className: c.button
            }, "Sign up"))), a.createElement("div", {
                className: c.bottom
            }, "Already have an account?", " ", a.createElement(i.a, {
                clickHandler: () => e("login")
            }, a.createElement("span", {
                className: c.link
            }, "Log in"))))
        }
}, , , , , , function(t, e, n) {
    "use strict";
    n.d(e, "b", (function() {
        return u
    })), n.d(e, "a", (function() {
        return c
    }));
    var r = n(9),
        i = n(21),
        o = n(0),
        a = n(307),
        s = n(26);
    const u = t => o.createElement(o.Fragment, null, o.createElement("div", {
        className: s.icon
    }), o.createElement("div", {
        className: s.title
    }, "Grammarly isn’t active yet!"), o.createElement(i.a, {
        clickHandler: t.openAcceptPage
    }, o.createElement("button", {
        className: s.button
    }, o.createElement("span", {
        className: s.buttonText
    }, "Activate Grammarly"))));
    class c extends o.Component {
        constructor() {
            super(...arguments), this.openAcceptPage = () => {
                Object(a.b)().bgRpc.api.openDataControl()
            }
        }
        render() {
            return o.createElement("div", {
                className: Object(r.d)(s.gButtonPopup, s.newDataControl),
                style: this.props.styles
            }, o.createElement(i.a, {
                clickHandler: this.props.remove
            }, o.createElement("button", {
                className: s.close
            })), o.createElement(u, {
                openAcceptPage: this.openAcceptPage
            }), o.createElement("div", {
                className: Object(r.d)(s.popupFooter, this.props.isFlipped && s.isFlipped)
            }, "▲"))
        }
    }
}, , , , function(t, e, n) {
    "use strict";
    var r = n(22),
        i = n(303),
        o = n(414),
        a = n(415),
        s = n(255),
        u = n(256),
        c = n(202),
        l = n(99),
        f = n(27),
        d = n(77),
        p = n(82),
        h = n(128),
        b = n(91),
        m = Object.prototype.hasOwnProperty,
        g = function(t) {
            if (null == t) return !0;
            if (Object(d.a)(t) && (Object(f.a)(t) || "string" == typeof t || "function" == typeof t.splice || Object(p.a)(t) || Object(b.a)(t) || Object(l.a)(t))) return !t.length;
            var e = Object(c.a)(t);
            if ("[object Map]" == e || "[object Set]" == e) return !t.size;
            if (Object(h.a)(t)) return !Object(u.a)(t).length;
            for (var n in t)
                if (m.call(t, n)) return !1;
            return !0
        },
        v = n(16);
    n.d(e, "a", (function() {
        return E
    }));
    const y = o({
            level: "debug",
            collapsed: () => !0,
            predicate: () => !1
        }),
        _ = "store/SYNC",
        w = {
            page: {},
            connection: {}
        };

    function E(t, e) {
        const n = Object(i.d)((t = w, n) => {
                const {
                    domain: i
                } = t.page || t.config || {};
                return n.sync && r.emitBackground("dispatch", Object.assign({}, n, {
                    domain: i
                })), n.type === _ ? Object.assign({}, t, n.data) : e ? e(t, n) : t
            }, {}, Object(i.a)(y)),
            o = (u = Object.assign({}, a.a, t), c = n.dispatch, Object.keys(u).filter(t => u[t]).reduce((t, e) => Object.assign(t, {
                [e]: (...t) => {
                    const n = u[e](...t),
                        r = void 0 === n.sync || n.sync;
                    return c(Object.assign({}, n, {
                        sync: r
                    }))
                }
            }), {}));
        var u, c;
        const l = t => n.dispatch({
            type: _,
            data: t
        });
        return r.on("state", t => {
            Object(v.g)(() => l(t), 0)
        }), {
            store: n,
            actions: o,
            setState: l,
            subscribe: t => (function(t, e) {
                let n;

                function r() {
                    const r = t.getState();
                    g(r) || Object(s.a)(n, r) || (n = r, e(r))
                }
                return Object(v.g)(r), t.subscribe(r)
            })(n, t)
        }
    }
}, , , function(t, e, n) {
    "use strict";
    var r = n(378),
        i = "function" == typeof Symbol && Symbol.for,
        o = i ? Symbol.for("react.element") : 60103,
        a = i ? Symbol.for("react.portal") : 60106,
        s = i ? Symbol.for("react.fragment") : 60107,
        u = i ? Symbol.for("react.strict_mode") : 60108,
        c = i ? Symbol.for("react.profiler") : 60114,
        l = i ? Symbol.for("react.provider") : 60109,
        f = i ? Symbol.for("react.context") : 60110,
        d = i ? Symbol.for("react.forward_ref") : 60112,
        p = i ? Symbol.for("react.suspense") : 60113;
    i && Symbol.for("react.suspense_list");
    var h = i ? Symbol.for("react.memo") : 60115,
        b = i ? Symbol.for("react.lazy") : 60116;
    i && Symbol.for("react.fundamental"), i && Symbol.for("react.responder"), i && Symbol.for("react.scope");
    var m = "function" == typeof Symbol && Symbol.iterator;

    function g(t) {
        for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var v = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        y = {};

    function _(t, e, n) {
        this.props = t, this.context = e, this.refs = y, this.updater = n || v
    }

    function w() {}

    function E(t, e, n) {
        this.props = t, this.context = e, this.refs = y, this.updater = n || v
    }
    _.prototype.isReactComponent = {}, _.prototype.setState = function(t, e) {
        if ("object" != typeof t && "function" != typeof t && null != t) throw Error(g(85));
        this.updater.enqueueSetState(this, t, e, "setState")
    }, _.prototype.forceUpdate = function(t) {
        this.updater.enqueueForceUpdate(this, t, "forceUpdate")
    }, w.prototype = _.prototype;
    var O = E.prototype = new w;
    O.constructor = E, r(O, _.prototype), O.isPureReactComponent = !0;
    var x = {
            current: null
        },
        S = {
            current: null
        },
        T = Object.prototype.hasOwnProperty,
        k = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function C(t, e, n) {
        var r, i = {},
            a = null,
            s = null;
        if (null != e)
            for (r in void 0 !== e.ref && (s = e.ref), void 0 !== e.key && (a = "" + e.key), e) T.call(e, r) && !k.hasOwnProperty(r) && (i[r] = e[r]);
        var u = arguments.length - 2;
        if (1 === u) i.children = n;
        else if (1 < u) {
            for (var c = Array(u), l = 0; l < u; l++) c[l] = arguments[l + 2];
            i.children = c
        }
        if (t && t.defaultProps)
            for (r in u = t.defaultProps) void 0 === i[r] && (i[r] = u[r]);
        return {
            $$typeof: o,
            type: t,
            key: a,
            ref: s,
            props: i,
            _owner: S.current
        }
    }

    function N(t) {
        return "object" == typeof t && null !== t && t.$$typeof === o
    }
    var j = /\/+/g,
        I = [];

    function A(t, e, n, r) {
        if (I.length) {
            var i = I.pop();
            return i.result = t, i.keyPrefix = e, i.func = n, i.context = r, i.count = 0, i
        }
        return {
            result: t,
            keyPrefix: e,
            func: n,
            context: r,
            count: 0
        }
    }

    function P(t) {
        t.result = null, t.keyPrefix = null, t.func = null, t.context = null, t.count = 0, 10 > I.length && I.push(t)
    }

    function M(t, e, n) {
        return null == t ? 0 : function t(e, n, r, i) {
            var s = typeof e;
            "undefined" !== s && "boolean" !== s || (e = null);
            var u = !1;
            if (null === e) u = !0;
            else switch (s) {
                case "string":
                case "number":
                    u = !0;
                    break;
                case "object":
                    switch (e.$$typeof) {
                        case o:
                        case a:
                            u = !0
                    }
            }
            if (u) return r(i, e, "" === n ? "." + D(e, 0) : n), 1;
            if (u = 0, n = "" === n ? "." : n + ":", Array.isArray(e))
                for (var c = 0; c < e.length; c++) {
                    var l = n + D(s = e[c], c);
                    u += t(s, l, r, i)
                } else if ("function" == typeof(l = null === e || "object" != typeof e ? null : "function" == typeof(l = m && e[m] || e["@@iterator"]) ? l : null))
                    for (e = l.call(e), c = 0; !(s = e.next()).done;) u += t(s = s.value, l = n + D(s, c++), r, i);
                else if ("object" === s) throw r = "" + e, Error(g(31, "[object Object]" === r ? "object with keys {" + Object.keys(e).join(", ") + "}" : r, ""));
            return u
        }(t, "", e, n)
    }

    function D(t, e) {
        return "object" == typeof t && null !== t && null != t.key ? function(t) {
            var e = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + ("" + t).replace(/[=:]/g, (function(t) {
                return e[t]
            }))
        }(t.key) : e.toString(36)
    }

    function R(t, e) {
        t.func.call(t.context, e, t.count++)
    }

    function F(t, e, n) {
        var r = t.result,
            i = t.keyPrefix;
        t = t.func.call(t.context, e, t.count++), Array.isArray(t) ? L(t, r, n, (function(t) {
            return t
        })) : null != t && (N(t) && (t = function(t, e) {
            return {
                $$typeof: o,
                type: t.type,
                key: e,
                ref: t.ref,
                props: t.props,
                _owner: t._owner
            }
        }(t, i + (!t.key || e && e.key === t.key ? "" : ("" + t.key).replace(j, "$&/") + "/") + n)), r.push(t))
    }

    function L(t, e, n, r, i) {
        var o = "";
        null != n && (o = ("" + n).replace(j, "$&/") + "/"), M(t, F, e = A(e, o, r, i)), P(e)
    }

    function U() {
        var t = x.current;
        if (null === t) throw Error(g(321));
        return t
    }
    var z = {
            Children: {
                map: function(t, e, n) {
                    if (null == t) return t;
                    var r = [];
                    return L(t, r, null, e, n), r
                },
                forEach: function(t, e, n) {
                    if (null == t) return t;
                    M(t, R, e = A(null, null, e, n)), P(e)
                },
                count: function(t) {
                    return M(t, (function() {
                        return null
                    }), null)
                },
                toArray: function(t) {
                    var e = [];
                    return L(t, e, null, (function(t) {
                        return t
                    })), e
                },
                only: function(t) {
                    if (!N(t)) throw Error(g(143));
                    return t
                }
            },
            createRef: function() {
                return {
                    current: null
                }
            },
            Component: _,
            PureComponent: E,
            createContext: function(t, e) {
                return void 0 === e && (e = null), (t = {
                    $$typeof: f,
                    _calculateChangedBits: e,
                    _currentValue: t,
                    _currentValue2: t,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null
                }).Provider = {
                    $$typeof: l,
                    _context: t
                }, t.Consumer = t
            },
            forwardRef: function(t) {
                return {
                    $$typeof: d,
                    render: t
                }
            },
            lazy: function(t) {
                return {
                    $$typeof: b,
                    _ctor: t,
                    _status: -1,
                    _result: null
                }
            },
            memo: function(t, e) {
                return {
                    $$typeof: h,
                    type: t,
                    compare: void 0 === e ? null : e
                }
            },
            useCallback: function(t, e) {
                return U().useCallback(t, e)
            },
            useContext: function(t, e) {
                return U().useContext(t, e)
            },
            useEffect: function(t, e) {
                return U().useEffect(t, e)
            },
            useImperativeHandle: function(t, e, n) {
                return U().useImperativeHandle(t, e, n)
            },
            useDebugValue: function() {},
            useLayoutEffect: function(t, e) {
                return U().useLayoutEffect(t, e)
            },
            useMemo: function(t, e) {
                return U().useMemo(t, e)
            },
            useReducer: function(t, e, n) {
                return U().useReducer(t, e, n)
            },
            useRef: function(t) {
                return U().useRef(t)
            },
            useState: function(t) {
                return U().useState(t)
            },
            Fragment: s,
            Profiler: c,
            StrictMode: u,
            Suspense: p,
            createElement: C,
            cloneElement: function(t, e, n) {
                if (null == t) throw Error(g(267, t));
                var i = r({}, t.props),
                    a = t.key,
                    s = t.ref,
                    u = t._owner;
                if (null != e) {
                    if (void 0 !== e.ref && (s = e.ref, u = S.current), void 0 !== e.key && (a = "" + e.key), t.type && t.type.defaultProps) var c = t.type.defaultProps;
                    for (l in e) T.call(e, l) && !k.hasOwnProperty(l) && (i[l] = void 0 === e[l] && void 0 !== c ? c[l] : e[l])
                }
                var l = arguments.length - 2;
                if (1 === l) i.children = n;
                else if (1 < l) {
                    c = Array(l);
                    for (var f = 0; f < l; f++) c[f] = arguments[f + 2];
                    i.children = c
                }
                return {
                    $$typeof: o,
                    type: t.type,
                    key: a,
                    ref: s,
                    props: i,
                    _owner: u
                }
            },
            createFactory: function(t) {
                var e = C.bind(null, t);
                return e.type = t, e
            },
            isValidElement: N,
            version: "16.12.0",
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
                ReactCurrentDispatcher: x,
                ReactCurrentBatchConfig: {
                    suspense: null
                },
                ReactCurrentOwner: S,
                IsSomeRendererActing: {
                    current: !1
                },
                assign: r
            }
        },
        V = {
            default: z
        },
        B = V && z || V;
    t.exports = B.default || B
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(378),
        o = n(466);

    function a(t) {
        for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    if (!r) throw Error(a(227));
    var s = null,
        u = {};

    function c() {
        if (s)
            for (var t in u) {
                var e = u[t],
                    n = s.indexOf(t);
                if (!(-1 < n)) throw Error(a(96, t));
                if (!f[n]) {
                    if (!e.extractEvents) throw Error(a(97, t));
                    for (var r in f[n] = e, n = e.eventTypes) {
                        var i = void 0,
                            o = n[r],
                            c = e,
                            p = r;
                        if (d.hasOwnProperty(p)) throw Error(a(99, p));
                        d[p] = o;
                        var h = o.phasedRegistrationNames;
                        if (h) {
                            for (i in h) h.hasOwnProperty(i) && l(h[i], c, p);
                            i = !0
                        } else o.registrationName ? (l(o.registrationName, c, p), i = !0) : i = !1;
                        if (!i) throw Error(a(98, r, t))
                    }
                }
            }
    }

    function l(t, e, n) {
        if (p[t]) throw Error(a(100, t));
        p[t] = e, h[t] = e.eventTypes[n].dependencies
    }
    var f = [],
        d = {},
        p = {},
        h = {};

    function b(t, e, n, r, i, o, a, s, u) {
        var c = Array.prototype.slice.call(arguments, 3);
        try {
            e.apply(n, c)
        } catch (t) {
            this.onError(t)
        }
    }
    var m = !1,
        g = null,
        v = !1,
        y = null,
        _ = {
            onError: function(t) {
                m = !0, g = t
            }
        };

    function w(t, e, n, r, i, o, a, s, u) {
        m = !1, g = null, b.apply(_, arguments)
    }
    var E = null,
        O = null,
        x = null;

    function S(t, e, n) {
        var r = t.type || "unknown-event";
        t.currentTarget = x(n),
            function(t, e, n, r, i, o, s, u, c) {
                if (w.apply(this, arguments), m) {
                    if (!m) throw Error(a(198));
                    var l = g;
                    m = !1, g = null, v || (v = !0, y = l)
                }
            }(r, e, void 0, t), t.currentTarget = null
    }

    function T(t, e) {
        if (null == e) throw Error(a(30));
        return null == t ? e : Array.isArray(t) ? Array.isArray(e) ? (t.push.apply(t, e), t) : (t.push(e), t) : Array.isArray(e) ? [t].concat(e) : [t, e]
    }

    function k(t, e, n) {
        Array.isArray(t) ? t.forEach(e, n) : t && e.call(n, t)
    }
    var C = null;

    function N(t) {
        if (t) {
            var e = t._dispatchListeners,
                n = t._dispatchInstances;
            if (Array.isArray(e))
                for (var r = 0; r < e.length && !t.isPropagationStopped(); r++) S(t, e[r], n[r]);
            else e && S(t, e, n);
            t._dispatchListeners = null, t._dispatchInstances = null, t.isPersistent() || t.constructor.release(t)
        }
    }

    function j(t) {
        if (null !== t && (C = T(C, t)), t = C, C = null, t) {
            if (k(t, N), C) throw Error(a(95));
            if (v) throw t = y, v = !1, y = null, t
        }
    }
    var I = {
        injectEventPluginOrder: function(t) {
            if (s) throw Error(a(101));
            s = Array.prototype.slice.call(t), c()
        },
        injectEventPluginsByName: function(t) {
            var e, n = !1;
            for (e in t)
                if (t.hasOwnProperty(e)) {
                    var r = t[e];
                    if (!u.hasOwnProperty(e) || u[e] !== r) {
                        if (u[e]) throw Error(a(102, e));
                        u[e] = r, n = !0
                    }
                } n && c()
        }
    };

    function A(t, e) {
        var n = t.stateNode;
        if (!n) return null;
        var r = E(n);
        if (!r) return null;
        n = r[e];
        t: switch (e) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
                (r = !r.disabled) || (r = !("button" === (t = t.type) || "input" === t || "select" === t || "textarea" === t)), t = !r;
                break t;
            default:
                t = !1
        }
        if (t) return null;
        if (n && "function" != typeof n) throw Error(a(231, e, typeof n));
        return n
    }
    var P = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    P.hasOwnProperty("ReactCurrentDispatcher") || (P.ReactCurrentDispatcher = {
        current: null
    }), P.hasOwnProperty("ReactCurrentBatchConfig") || (P.ReactCurrentBatchConfig = {
        suspense: null
    });
    var M = /^(.*)[\\\/]/,
        D = "function" == typeof Symbol && Symbol.for,
        R = D ? Symbol.for("react.element") : 60103,
        F = D ? Symbol.for("react.portal") : 60106,
        L = D ? Symbol.for("react.fragment") : 60107,
        U = D ? Symbol.for("react.strict_mode") : 60108,
        z = D ? Symbol.for("react.profiler") : 60114,
        V = D ? Symbol.for("react.provider") : 60109,
        B = D ? Symbol.for("react.context") : 60110,
        W = D ? Symbol.for("react.concurrent_mode") : 60111,
        G = D ? Symbol.for("react.forward_ref") : 60112,
        H = D ? Symbol.for("react.suspense") : 60113,
        $ = D ? Symbol.for("react.suspense_list") : 60120,
        q = D ? Symbol.for("react.memo") : 60115,
        Y = D ? Symbol.for("react.lazy") : 60116;
    D && Symbol.for("react.fundamental"), D && Symbol.for("react.responder"), D && Symbol.for("react.scope");
    var K = "function" == typeof Symbol && Symbol.iterator;

    function Q(t) {
        return null === t || "object" != typeof t ? null : "function" == typeof(t = K && t[K] || t["@@iterator"]) ? t : null
    }

    function J(t) {
        if (null == t) return null;
        if ("function" == typeof t) return t.displayName || t.name || null;
        if ("string" == typeof t) return t;
        switch (t) {
            case L:
                return "Fragment";
            case F:
                return "Portal";
            case z:
                return "Profiler";
            case U:
                return "StrictMode";
            case H:
                return "Suspense";
            case $:
                return "SuspenseList"
        }
        if ("object" == typeof t) switch (t.$$typeof) {
            case B:
                return "Context.Consumer";
            case V:
                return "Context.Provider";
            case G:
                var e = t.render;
                return e = e.displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
            case q:
                return J(t.type);
            case Y:
                if (t = 1 === t._status ? t._result : null) return J(t)
        }
        return null
    }

    function X(t) {
        var e = "";
        do {
            t: switch (t.tag) {
                case 3:
                case 4:
                case 6:
                case 7:
                case 10:
                case 9:
                    var n = "";
                    break t;
                default:
                    var r = t._debugOwner,
                        i = t._debugSource,
                        o = J(t.type);
                    n = null, r && (n = J(r.type)), r = o, o = "", i ? o = " (at " + i.fileName.replace(M, "") + ":" + i.lineNumber + ")" : n && (o = " (created by " + n + ")"), n = "\n    in " + (r || "Unknown") + o
            }
            e += n,
            t = t.return
        } while (t);
        return e
    }
    var Z = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
        tt = null,
        et = null,
        nt = null;

    function rt(t) {
        if (t = O(t)) {
            if ("function" != typeof tt) throw Error(a(280));
            var e = E(t.stateNode);
            tt(t.stateNode, t.type, e)
        }
    }

    function it(t) {
        et ? nt ? nt.push(t) : nt = [t] : et = t
    }

    function ot() {
        if (et) {
            var t = et,
                e = nt;
            if (nt = et = null, rt(t), e)
                for (t = 0; t < e.length; t++) rt(e[t])
        }
    }

    function at(t, e) {
        return t(e)
    }

    function st(t, e, n, r) {
        return t(e, n, r)
    }

    function ut() {}
    var ct = at,
        lt = !1,
        ft = !1;

    function dt() {
        null === et && null === nt || (ut(), ot())
    }
    new Map;
    var pt = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        ht = Object.prototype.hasOwnProperty,
        bt = {},
        mt = {};

    function gt(t, e, n, r, i, o) {
        this.acceptsBooleans = 2 === e || 3 === e || 4 === e, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = t, this.type = e, this.sanitizeURL = o
    }
    var vt = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(t) {
        vt[t] = new gt(t, 0, !1, t, null, !1)
    })), [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"]
    ].forEach((function(t) {
        var e = t[0];
        vt[e] = new gt(e, 1, !1, t[1], null, !1)
    })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(t) {
        vt[t] = new gt(t, 2, !1, t.toLowerCase(), null, !1)
    })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(t) {
        vt[t] = new gt(t, 2, !1, t, null, !1)
    })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(t) {
        vt[t] = new gt(t, 3, !1, t.toLowerCase(), null, !1)
    })), ["checked", "multiple", "muted", "selected"].forEach((function(t) {
        vt[t] = new gt(t, 3, !0, t, null, !1)
    })), ["capture", "download"].forEach((function(t) {
        vt[t] = new gt(t, 4, !1, t, null, !1)
    })), ["cols", "rows", "size", "span"].forEach((function(t) {
        vt[t] = new gt(t, 6, !1, t, null, !1)
    })), ["rowSpan", "start"].forEach((function(t) {
        vt[t] = new gt(t, 5, !1, t.toLowerCase(), null, !1)
    }));
    var yt = /[\-:]([a-z])/g;

    function _t(t) {
        return t[1].toUpperCase()
    }

    function wt(t) {
        switch (typeof t) {
            case "boolean":
            case "number":
            case "object":
            case "string":
            case "undefined":
                return t;
            default:
                return ""
        }
    }

    function Et(t, e, n, r) {
        var i = vt.hasOwnProperty(e) ? vt[e] : null;
        (null !== i ? 0 === i.type : !r && 2 < e.length && ("o" === e[0] || "O" === e[0]) && ("n" === e[1] || "N" === e[1])) || (function(t, e, n, r) {
            if (null == e || function(t, e, n, r) {
                    if (null !== n && 0 === n.type) return !1;
                    switch (typeof e) {
                        case "function":
                        case "symbol":
                            return !0;
                        case "boolean":
                            return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (t = t.toLowerCase().slice(0, 5)) && "aria-" !== t);
                        default:
                            return !1
                    }
                }(t, e, n, r)) return !0;
            if (r) return !1;
            if (null !== n) switch (n.type) {
                case 3:
                    return !e;
                case 4:
                    return !1 === e;
                case 5:
                    return isNaN(e);
                case 6:
                    return isNaN(e) || 1 > e
            }
            return !1
        }(e, n, i, r) && (n = null), r || null === i ? function(t) {
            return !!ht.call(mt, t) || !ht.call(bt, t) && (pt.test(t) ? mt[t] = !0 : (bt[t] = !0, !1))
        }(e) && (null === n ? t.removeAttribute(e) : t.setAttribute(e, "" + n)) : i.mustUseProperty ? t[i.propertyName] = null === n ? 3 !== i.type && "" : n : (e = i.attributeName, r = i.attributeNamespace, null === n ? t.removeAttribute(e) : (n = 3 === (i = i.type) || 4 === i && !0 === n ? "" : "" + n, r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))))
    }

    function Ot(t) {
        var e = t.type;
        return (t = t.nodeName) && "input" === t.toLowerCase() && ("checkbox" === e || "radio" === e)
    }

    function xt(t) {
        t._valueTracker || (t._valueTracker = function(t) {
            var e = Ot(t) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
                r = "" + t[e];
            if (!t.hasOwnProperty(e) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
                var i = n.get,
                    o = n.set;
                return Object.defineProperty(t, e, {
                    configurable: !0,
                    get: function() {
                        return i.call(this)
                    },
                    set: function(t) {
                        r = "" + t, o.call(this, t)
                    }
                }), Object.defineProperty(t, e, {
                    enumerable: n.enumerable
                }), {
                    getValue: function() {
                        return r
                    },
                    setValue: function(t) {
                        r = "" + t
                    },
                    stopTracking: function() {
                        t._valueTracker = null, delete t[e]
                    }
                }
            }
        }(t))
    }

    function St(t) {
        if (!t) return !1;
        var e = t._valueTracker;
        if (!e) return !0;
        var n = e.getValue(),
            r = "";
        return t && (r = Ot(t) ? t.checked ? "true" : "false" : t.value), (t = r) !== n && (e.setValue(t), !0)
    }

    function Tt(t, e) {
        var n = e.checked;
        return i({}, e, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : t._wrapperState.initialChecked
        })
    }

    function kt(t, e) {
        var n = null == e.defaultValue ? "" : e.defaultValue,
            r = null != e.checked ? e.checked : e.defaultChecked;
        n = wt(null != e.value ? e.value : n), t._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: "checkbox" === e.type || "radio" === e.type ? null != e.checked : null != e.value
        }
    }

    function Ct(t, e) {
        null != (e = e.checked) && Et(t, "checked", e, !1)
    }

    function Nt(t, e) {
        Ct(t, e);
        var n = wt(e.value),
            r = e.type;
        if (null != n) "number" === r ? (0 === n && "" === t.value || t.value != n) && (t.value = "" + n) : t.value !== "" + n && (t.value = "" + n);
        else if ("submit" === r || "reset" === r) return void t.removeAttribute("value");
        e.hasOwnProperty("value") ? It(t, e.type, n) : e.hasOwnProperty("defaultValue") && It(t, e.type, wt(e.defaultValue)), null == e.checked && null != e.defaultChecked && (t.defaultChecked = !!e.defaultChecked)
    }

    function jt(t, e, n) {
        if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
            var r = e.type;
            if (!("submit" !== r && "reset" !== r || void 0 !== e.value && null !== e.value)) return;
            e = "" + t._wrapperState.initialValue, n || e === t.value || (t.value = e), t.defaultValue = e
        }
        "" !== (n = t.name) && (t.name = ""), t.defaultChecked = !t.defaultChecked, t.defaultChecked = !!t._wrapperState.initialChecked, "" !== n && (t.name = n)
    }

    function It(t, e, n) {
        "number" === e && t.ownerDocument.activeElement === t || (null == n ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + n && (t.defaultValue = "" + n))
    }

    function At(t, e) {
        return t = i({
            children: void 0
        }, e), (e = function(t) {
            var e = "";
            return r.Children.forEach(t, (function(t) {
                null != t && (e += t)
            })), e
        }(e.children)) && (t.children = e), t
    }

    function Pt(t, e, n, r) {
        if (t = t.options, e) {
            e = {};
            for (var i = 0; i < n.length; i++) e["$" + n[i]] = !0;
            for (n = 0; n < t.length; n++) i = e.hasOwnProperty("$" + t[n].value), t[n].selected !== i && (t[n].selected = i), i && r && (t[n].defaultSelected = !0)
        } else {
            for (n = "" + wt(n), e = null, i = 0; i < t.length; i++) {
                if (t[i].value === n) return t[i].selected = !0, void(r && (t[i].defaultSelected = !0));
                null !== e || t[i].disabled || (e = t[i])
            }
            null !== e && (e.selected = !0)
        }
    }

    function Mt(t, e) {
        if (null != e.dangerouslySetInnerHTML) throw Error(a(91));
        return i({}, e, {
            value: void 0,
            defaultValue: void 0,
            children: "" + t._wrapperState.initialValue
        })
    }

    function Dt(t, e) {
        var n = e.value;
        if (null == n) {
            if (n = e.defaultValue, null != (e = e.children)) {
                if (null != n) throw Error(a(92));
                if (Array.isArray(e)) {
                    if (!(1 >= e.length)) throw Error(a(93));
                    e = e[0]
                }
                n = e
            }
            null == n && (n = "")
        }
        t._wrapperState = {
            initialValue: wt(n)
        }
    }

    function Rt(t, e) {
        var n = wt(e.value),
            r = wt(e.defaultValue);
        null != n && ((n = "" + n) !== t.value && (t.value = n), null == e.defaultValue && t.defaultValue !== n && (t.defaultValue = n)), null != r && (t.defaultValue = "" + r)
    }

    function Ft(t) {
        var e = t.textContent;
        e === t._wrapperState.initialValue && "" !== e && null !== e && (t.value = e)
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(t) {
        var e = t.replace(yt, _t);
        vt[e] = new gt(e, 1, !1, t, null, !1)
    })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(t) {
        var e = t.replace(yt, _t);
        vt[e] = new gt(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1)
    })), ["xml:base", "xml:lang", "xml:space"].forEach((function(t) {
        var e = t.replace(yt, _t);
        vt[e] = new gt(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1)
    })), ["tabIndex", "crossOrigin"].forEach((function(t) {
        vt[t] = new gt(t, 1, !1, t.toLowerCase(), null, !1)
    })), vt.xlinkHref = new gt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0), ["src", "href", "action", "formAction"].forEach((function(t) {
        vt[t] = new gt(t, 1, !1, t.toLowerCase(), null, !0)
    }));
    var Lt = {
        html: "http://www.w3.org/1999/xhtml",
        mathml: "http://www.w3.org/1998/Math/MathML",
        svg: "http://www.w3.org/2000/svg"
    };

    function Ut(t) {
        switch (t) {
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml"
        }
    }

    function zt(t, e) {
        return null == t || "http://www.w3.org/1999/xhtml" === t ? Ut(e) : "http://www.w3.org/2000/svg" === t && "foreignObject" === e ? "http://www.w3.org/1999/xhtml" : t
    }
    var Vt, Bt = function(t) {
        return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, n, r, i) {
            MSApp.execUnsafeLocalFunction((function() {
                return t(e, n)
            }))
        } : t
    }((function(t, e) {
        if (t.namespaceURI !== Lt.svg || "innerHTML" in t) t.innerHTML = e;
        else {
            for ((Vt = Vt || document.createElement("div")).innerHTML = "<svg>" + e.valueOf().toString() + "</svg>", e = Vt.firstChild; t.firstChild;) t.removeChild(t.firstChild);
            for (; e.firstChild;) t.appendChild(e.firstChild)
        }
    }));

    function Wt(t, e) {
        if (e) {
            var n = t.firstChild;
            if (n && n === t.lastChild && 3 === n.nodeType) return void(n.nodeValue = e)
        }
        t.textContent = e
    }

    function Gt(t, e) {
        var n = {};
        return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n
    }
    var Ht = {
            animationend: Gt("Animation", "AnimationEnd"),
            animationiteration: Gt("Animation", "AnimationIteration"),
            animationstart: Gt("Animation", "AnimationStart"),
            transitionend: Gt("Transition", "TransitionEnd")
        },
        $t = {},
        qt = {};

    function Yt(t) {
        if ($t[t]) return $t[t];
        if (!Ht[t]) return t;
        var e, n = Ht[t];
        for (e in n)
            if (n.hasOwnProperty(e) && e in qt) return $t[t] = n[e];
        return t
    }
    Z && (qt = document.createElement("div").style, "AnimationEvent" in window || (delete Ht.animationend.animation, delete Ht.animationiteration.animation, delete Ht.animationstart.animation), "TransitionEvent" in window || delete Ht.transitionend.transition);
    var Kt = Yt("animationend"),
        Qt = Yt("animationiteration"),
        Jt = Yt("animationstart"),
        Xt = Yt("transitionend"),
        Zt = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");

    function te(t) {
        var e = t,
            n = t;
        if (t.alternate)
            for (; e.return;) e = e.return;
        else {
            t = e;
            do {
                0 != (1026 & (e = t).effectTag) && (n = e.return), t = e.return
            } while (t)
        }
        return 3 === e.tag ? n : null
    }

    function ee(t) {
        if (13 === t.tag) {
            var e = t.memoizedState;
            if (null === e && null !== (t = t.alternate) && (e = t.memoizedState), null !== e) return e.dehydrated
        }
        return null
    }

    function ne(t) {
        if (te(t) !== t) throw Error(a(188))
    }

    function re(t) {
        if (!(t = function(t) {
                var e = t.alternate;
                if (!e) {
                    if (null === (e = te(t))) throw Error(a(188));
                    return e !== t ? null : t
                }
                for (var n = t, r = e;;) {
                    var i = n.return;
                    if (null === i) break;
                    var o = i.alternate;
                    if (null === o) {
                        if (null !== (r = i.return)) {
                            n = r;
                            continue
                        }
                        break
                    }
                    if (i.child === o.child) {
                        for (o = i.child; o;) {
                            if (o === n) return ne(i), t;
                            if (o === r) return ne(i), e;
                            o = o.sibling
                        }
                        throw Error(a(188))
                    }
                    if (n.return !== r.return) n = i, r = o;
                    else {
                        for (var s = !1, u = i.child; u;) {
                            if (u === n) {
                                s = !0, n = i, r = o;
                                break
                            }
                            if (u === r) {
                                s = !0, r = i, n = o;
                                break
                            }
                            u = u.sibling
                        }
                        if (!s) {
                            for (u = o.child; u;) {
                                if (u === n) {
                                    s = !0, n = o, r = i;
                                    break
                                }
                                if (u === r) {
                                    s = !0, r = o, n = i;
                                    break
                                }
                                u = u.sibling
                            }
                            if (!s) throw Error(a(189))
                        }
                    }
                    if (n.alternate !== r) throw Error(a(190))
                }
                if (3 !== n.tag) throw Error(a(188));
                return n.stateNode.current === n ? t : e
            }(t))) return null;
        for (var e = t;;) {
            if (5 === e.tag || 6 === e.tag) return e;
            if (e.child) e.child.return = e, e = e.child;
            else {
                if (e === t) break;
                for (; !e.sibling;) {
                    if (!e.return || e.return === t) return null;
                    e = e.return
                }
                e.sibling.return = e.return, e = e.sibling
            }
        }
        return null
    }
    var ie, oe, ae, se = !1,
        ue = [],
        ce = null,
        le = null,
        fe = null,
        de = new Map,
        pe = new Map,
        he = [],
        be = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),
        me = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");

    function ge(t, e, n, r) {
        return {
            blockedOn: t,
            topLevelType: e,
            eventSystemFlags: 32 | n,
            nativeEvent: r
        }
    }

    function ve(t, e) {
        switch (t) {
            case "focus":
            case "blur":
                ce = null;
                break;
            case "dragenter":
            case "dragleave":
                le = null;
                break;
            case "mouseover":
            case "mouseout":
                fe = null;
                break;
            case "pointerover":
            case "pointerout":
                de.delete(e.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                pe.delete(e.pointerId)
        }
    }

    function ye(t, e, n, r, i) {
        return null === t || t.nativeEvent !== i ? (t = ge(e, n, r, i), null !== e && null !== (e = pr(e)) && oe(e), t) : (t.eventSystemFlags |= r, t)
    }

    function _e(t) {
        var e = dr(t.target);
        if (null !== e) {
            var n = te(e);
            if (null !== n)
                if (13 === (e = n.tag)) {
                    if (null !== (e = ee(n))) return t.blockedOn = e, void o.unstable_runWithPriority(t.priority, (function() {
                        ae(n)
                    }))
                } else if (3 === e && n.stateNode.hydrate) return void(t.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
        }
        t.blockedOn = null
    }

    function we(t) {
        if (null !== t.blockedOn) return !1;
        var e = In(t.topLevelType, t.eventSystemFlags, t.nativeEvent);
        if (null !== e) {
            var n = pr(e);
            return null !== n && oe(n), t.blockedOn = e, !1
        }
        return !0
    }

    function Ee(t, e, n) {
        we(t) && n.delete(e)
    }

    function Oe() {
        for (se = !1; 0 < ue.length;) {
            var t = ue[0];
            if (null !== t.blockedOn) {
                null !== (t = pr(t.blockedOn)) && ie(t);
                break
            }
            var e = In(t.topLevelType, t.eventSystemFlags, t.nativeEvent);
            null !== e ? t.blockedOn = e : ue.shift()
        }
        null !== ce && we(ce) && (ce = null), null !== le && we(le) && (le = null), null !== fe && we(fe) && (fe = null), de.forEach(Ee), pe.forEach(Ee)
    }

    function xe(t, e) {
        t.blockedOn === e && (t.blockedOn = null, se || (se = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, Oe)))
    }

    function Se(t) {
        function e(e) {
            return xe(e, t)
        }
        if (0 < ue.length) {
            xe(ue[0], t);
            for (var n = 1; n < ue.length; n++) {
                var r = ue[n];
                r.blockedOn === t && (r.blockedOn = null)
            }
        }
        for (null !== ce && xe(ce, t), null !== le && xe(le, t), null !== fe && xe(fe, t), de.forEach(e), pe.forEach(e), n = 0; n < he.length; n++)(r = he[n]).blockedOn === t && (r.blockedOn = null);
        for (; 0 < he.length && null === (n = he[0]).blockedOn;) _e(n), null === n.blockedOn && he.shift()
    }

    function Te(t) {
        return (t = t.target || t.srcElement || window).correspondingUseElement && (t = t.correspondingUseElement), 3 === t.nodeType ? t.parentNode : t
    }

    function ke(t) {
        do {
            t = t.return
        } while (t && 5 !== t.tag);
        return t || null
    }

    function Ce(t, e, n) {
        (e = A(t, n.dispatchConfig.phasedRegistrationNames[e])) && (n._dispatchListeners = T(n._dispatchListeners, e), n._dispatchInstances = T(n._dispatchInstances, t))
    }

    function Ne(t) {
        if (t && t.dispatchConfig.phasedRegistrationNames) {
            for (var e = t._targetInst, n = []; e;) n.push(e), e = ke(e);
            for (e = n.length; 0 < e--;) Ce(n[e], "captured", t);
            for (e = 0; e < n.length; e++) Ce(n[e], "bubbled", t)
        }
    }

    function je(t, e, n) {
        t && n && n.dispatchConfig.registrationName && (e = A(t, n.dispatchConfig.registrationName)) && (n._dispatchListeners = T(n._dispatchListeners, e), n._dispatchInstances = T(n._dispatchInstances, t))
    }

    function Ie(t) {
        t && t.dispatchConfig.registrationName && je(t._targetInst, null, t)
    }

    function Ae(t) {
        k(t, Ne)
    }

    function Pe() {
        return !0
    }

    function Me() {
        return !1
    }

    function De(t, e, n, r) {
        for (var i in this.dispatchConfig = t, this._targetInst = e, this.nativeEvent = n, t = this.constructor.Interface) t.hasOwnProperty(i) && ((e = t[i]) ? this[i] = e(n) : "target" === i ? this.target = r : this[i] = n[i]);
        return this.isDefaultPrevented = (null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue) ? Pe : Me, this.isPropagationStopped = Me, this
    }

    function Re(t, e, n, r) {
        if (this.eventPool.length) {
            var i = this.eventPool.pop();
            return this.call(i, t, e, n, r), i
        }
        return new this(t, e, n, r)
    }

    function Fe(t) {
        if (!(t instanceof this)) throw Error(a(279));
        t.destructor(), 10 > this.eventPool.length && this.eventPool.push(t)
    }

    function Le(t) {
        t.eventPool = [], t.getPooled = Re, t.release = Fe
    }
    i(De.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var t = this.nativeEvent;
            t && (t.preventDefault ? t.preventDefault() : "unknown" != typeof t.returnValue && (t.returnValue = !1), this.isDefaultPrevented = Pe)
        },
        stopPropagation: function() {
            var t = this.nativeEvent;
            t && (t.stopPropagation ? t.stopPropagation() : "unknown" != typeof t.cancelBubble && (t.cancelBubble = !0), this.isPropagationStopped = Pe)
        },
        persist: function() {
            this.isPersistent = Pe
        },
        isPersistent: Me,
        destructor: function() {
            var t, e = this.constructor.Interface;
            for (t in e) this[t] = null;
            this.nativeEvent = this._targetInst = this.dispatchConfig = null, this.isPropagationStopped = this.isDefaultPrevented = Me, this._dispatchInstances = this._dispatchListeners = null
        }
    }), De.Interface = {
        type: null,
        target: null,
        currentTarget: function() {
            return null
        },
        eventPhase: null,
        bubbles: null,
        cancelable: null,
        timeStamp: function(t) {
            return t.timeStamp || Date.now()
        },
        defaultPrevented: null,
        isTrusted: null
    }, De.extend = function(t) {
        function e() {}

        function n() {
            return r.apply(this, arguments)
        }
        var r = this;
        e.prototype = r.prototype;
        var o = new e;
        return i(o, n.prototype), n.prototype = o, n.prototype.constructor = n, n.Interface = i({}, r.Interface, t), n.extend = r.extend, Le(n), n
    }, Le(De);
    var Ue = De.extend({
            animationName: null,
            elapsedTime: null,
            pseudoElement: null
        }),
        ze = De.extend({
            clipboardData: function(t) {
                return "clipboardData" in t ? t.clipboardData : window.clipboardData
            }
        }),
        Ve = De.extend({
            view: null,
            detail: null
        }),
        Be = Ve.extend({
            relatedTarget: null
        });

    function We(t) {
        var e = t.keyCode;
        return "charCode" in t ? 0 === (t = t.charCode) && 13 === e && (t = 13) : t = e, 10 === t && (t = 13), 32 <= t || 13 === t ? t : 0
    }
    var Ge = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        He = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        $e = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function qe(t) {
        var e = this.nativeEvent;
        return e.getModifierState ? e.getModifierState(t) : !!(t = $e[t]) && !!e[t]
    }

    function Ye() {
        return qe
    }
    for (var Ke = Ve.extend({
            key: function(t) {
                if (t.key) {
                    var e = Ge[t.key] || t.key;
                    if ("Unidentified" !== e) return e
                }
                return "keypress" === t.type ? 13 === (t = We(t)) ? "Enter" : String.fromCharCode(t) : "keydown" === t.type || "keyup" === t.type ? He[t.keyCode] || "Unidentified" : ""
            },
            location: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            repeat: null,
            locale: null,
            getModifierState: Ye,
            charCode: function(t) {
                return "keypress" === t.type ? We(t) : 0
            },
            keyCode: function(t) {
                return "keydown" === t.type || "keyup" === t.type ? t.keyCode : 0
            },
            which: function(t) {
                return "keypress" === t.type ? We(t) : "keydown" === t.type || "keyup" === t.type ? t.keyCode : 0
            }
        }), Qe = 0, Je = 0, Xe = !1, Ze = !1, tn = Ve.extend({
            screenX: null,
            screenY: null,
            clientX: null,
            clientY: null,
            pageX: null,
            pageY: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            getModifierState: Ye,
            button: null,
            buttons: null,
            relatedTarget: function(t) {
                return t.relatedTarget || (t.fromElement === t.srcElement ? t.toElement : t.fromElement)
            },
            movementX: function(t) {
                if ("movementX" in t) return t.movementX;
                var e = Qe;
                return Qe = t.screenX, Xe ? "mousemove" === t.type ? t.screenX - e : 0 : (Xe = !0, 0)
            },
            movementY: function(t) {
                if ("movementY" in t) return t.movementY;
                var e = Je;
                return Je = t.screenY, Ze ? "mousemove" === t.type ? t.screenY - e : 0 : (Ze = !0, 0)
            }
        }), en = tn.extend({
            pointerId: null,
            width: null,
            height: null,
            pressure: null,
            tangentialPressure: null,
            tiltX: null,
            tiltY: null,
            twist: null,
            pointerType: null,
            isPrimary: null
        }), nn = tn.extend({
            dataTransfer: null
        }), rn = Ve.extend({
            touches: null,
            targetTouches: null,
            changedTouches: null,
            altKey: null,
            metaKey: null,
            ctrlKey: null,
            shiftKey: null,
            getModifierState: Ye
        }), on = De.extend({
            propertyName: null,
            elapsedTime: null,
            pseudoElement: null
        }), an = tn.extend({
            deltaX: function(t) {
                return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0
            },
            deltaY: function(t) {
                return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0
            },
            deltaZ: null,
            deltaMode: null
        }), sn = [
            ["blur", "blur", 0],
            ["cancel", "cancel", 0],
            ["click", "click", 0],
            ["close", "close", 0],
            ["contextmenu", "contextMenu", 0],
            ["copy", "copy", 0],
            ["cut", "cut", 0],
            ["auxclick", "auxClick", 0],
            ["dblclick", "doubleClick", 0],
            ["dragend", "dragEnd", 0],
            ["dragstart", "dragStart", 0],
            ["drop", "drop", 0],
            ["focus", "focus", 0],
            ["input", "input", 0],
            ["invalid", "invalid", 0],
            ["keydown", "keyDown", 0],
            ["keypress", "keyPress", 0],
            ["keyup", "keyUp", 0],
            ["mousedown", "mouseDown", 0],
            ["mouseup", "mouseUp", 0],
            ["paste", "paste", 0],
            ["pause", "pause", 0],
            ["play", "play", 0],
            ["pointercancel", "pointerCancel", 0],
            ["pointerdown", "pointerDown", 0],
            ["pointerup", "pointerUp", 0],
            ["ratechange", "rateChange", 0],
            ["reset", "reset", 0],
            ["seeked", "seeked", 0],
            ["submit", "submit", 0],
            ["touchcancel", "touchCancel", 0],
            ["touchend", "touchEnd", 0],
            ["touchstart", "touchStart", 0],
            ["volumechange", "volumeChange", 0],
            ["drag", "drag", 1],
            ["dragenter", "dragEnter", 1],
            ["dragexit", "dragExit", 1],
            ["dragleave", "dragLeave", 1],
            ["dragover", "dragOver", 1],
            ["mousemove", "mouseMove", 1],
            ["mouseout", "mouseOut", 1],
            ["mouseover", "mouseOver", 1],
            ["pointermove", "pointerMove", 1],
            ["pointerout", "pointerOut", 1],
            ["pointerover", "pointerOver", 1],
            ["scroll", "scroll", 1],
            ["toggle", "toggle", 1],
            ["touchmove", "touchMove", 1],
            ["wheel", "wheel", 1],
            ["abort", "abort", 2],
            [Kt, "animationEnd", 2],
            [Qt, "animationIteration", 2],
            [Jt, "animationStart", 2],
            ["canplay", "canPlay", 2],
            ["canplaythrough", "canPlayThrough", 2],
            ["durationchange", "durationChange", 2],
            ["emptied", "emptied", 2],
            ["encrypted", "encrypted", 2],
            ["ended", "ended", 2],
            ["error", "error", 2],
            ["gotpointercapture", "gotPointerCapture", 2],
            ["load", "load", 2],
            ["loadeddata", "loadedData", 2],
            ["loadedmetadata", "loadedMetadata", 2],
            ["loadstart", "loadStart", 2],
            ["lostpointercapture", "lostPointerCapture", 2],
            ["playing", "playing", 2],
            ["progress", "progress", 2],
            ["seeking", "seeking", 2],
            ["stalled", "stalled", 2],
            ["suspend", "suspend", 2],
            ["timeupdate", "timeUpdate", 2],
            [Xt, "transitionEnd", 2],
            ["waiting", "waiting", 2]
        ], un = {}, cn = {}, ln = 0; ln < sn.length; ln++) {
        var fn = sn[ln],
            dn = fn[0],
            pn = fn[1],
            hn = fn[2],
            bn = "on" + (pn[0].toUpperCase() + pn.slice(1)),
            mn = {
                phasedRegistrationNames: {
                    bubbled: bn,
                    captured: bn + "Capture"
                },
                dependencies: [dn],
                eventPriority: hn
            };
        un[pn] = mn, cn[dn] = mn
    }
    var gn = {
            eventTypes: un,
            getEventPriority: function(t) {
                return void 0 !== (t = cn[t]) ? t.eventPriority : 2
            },
            extractEvents: function(t, e, n, r) {
                var i = cn[t];
                if (!i) return null;
                switch (t) {
                    case "keypress":
                        if (0 === We(n)) return null;
                    case "keydown":
                    case "keyup":
                        t = Ke;
                        break;
                    case "blur":
                    case "focus":
                        t = Be;
                        break;
                    case "click":
                        if (2 === n.button) return null;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        t = tn;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        t = nn;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        t = rn;
                        break;
                    case Kt:
                    case Qt:
                    case Jt:
                        t = Ue;
                        break;
                    case Xt:
                        t = on;
                        break;
                    case "scroll":
                        t = Ve;
                        break;
                    case "wheel":
                        t = an;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        t = ze;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        t = en;
                        break;
                    default:
                        t = De
                }
                return Ae(e = t.getPooled(i, e, n, r)), e
            }
        },
        vn = o.unstable_UserBlockingPriority,
        yn = o.unstable_runWithPriority,
        _n = gn.getEventPriority,
        wn = 10,
        En = [];

    function On(t) {
        var e = t.targetInst,
            n = e;
        do {
            if (!n) {
                t.ancestors.push(n);
                break
            }
            var r = n;
            if (3 === r.tag) r = r.stateNode.containerInfo;
            else {
                for (; r.return;) r = r.return;
                r = 3 !== r.tag ? null : r.stateNode.containerInfo
            }
            if (!r) break;
            5 !== (e = n.tag) && 6 !== e || t.ancestors.push(n), n = dr(r)
        } while (n);
        for (n = 0; n < t.ancestors.length; n++) {
            e = t.ancestors[n];
            var i = Te(t.nativeEvent);
            r = t.topLevelType;
            for (var o = t.nativeEvent, a = t.eventSystemFlags, s = null, u = 0; u < f.length; u++) {
                var c = f[u];
                c && (c = c.extractEvents(r, e, o, i, a)) && (s = T(s, c))
            }
            j(s)
        }
    }
    var xn = !0;

    function Sn(t, e) {
        Tn(e, t, !1)
    }

    function Tn(t, e, n) {
        switch (_n(e)) {
            case 0:
                var r = kn.bind(null, e, 1);
                break;
            case 1:
                r = Cn.bind(null, e, 1);
                break;
            default:
                r = jn.bind(null, e, 1)
        }
        n ? t.addEventListener(e, r, !0) : t.addEventListener(e, r, !1)
    }

    function kn(t, e, n) {
        lt || ut();
        var r = jn,
            i = lt;
        lt = !0;
        try {
            st(r, t, e, n)
        } finally {
            (lt = i) || dt()
        }
    }

    function Cn(t, e, n) {
        yn(vn, jn.bind(null, t, e, n))
    }

    function Nn(t, e, n, r) {
        if (En.length) {
            var i = En.pop();
            i.topLevelType = t, i.eventSystemFlags = e, i.nativeEvent = n, i.targetInst = r, t = i
        } else t = {
            topLevelType: t,
            eventSystemFlags: e,
            nativeEvent: n,
            targetInst: r,
            ancestors: []
        };
        try {
            if (e = On, n = t, ft) e(n, void 0);
            else {
                ft = !0;
                try {
                    ct(e, n, void 0)
                } finally {
                    ft = !1, dt()
                }
            }
        } finally {
            t.topLevelType = null, t.nativeEvent = null, t.targetInst = null, t.ancestors.length = 0, En.length < wn && En.push(t)
        }
    }

    function jn(t, e, n) {
        if (xn)
            if (0 < ue.length && -1 < be.indexOf(t)) t = ge(null, t, e, n), ue.push(t);
            else {
                var r = In(t, e, n);
                null === r ? ve(t, n) : -1 < be.indexOf(t) ? (t = ge(r, t, e, n), ue.push(t)) : function(t, e, n, r) {
                    switch (e) {
                        case "focus":
                            return ce = ye(ce, t, e, n, r), !0;
                        case "dragenter":
                            return le = ye(le, t, e, n, r), !0;
                        case "mouseover":
                            return fe = ye(fe, t, e, n, r), !0;
                        case "pointerover":
                            var i = r.pointerId;
                            return de.set(i, ye(de.get(i) || null, t, e, n, r)), !0;
                        case "gotpointercapture":
                            return i = r.pointerId, pe.set(i, ye(pe.get(i) || null, t, e, n, r)), !0
                    }
                    return !1
                }(r, t, e, n) || (ve(t, n), Nn(t, e, n, null))
            }
    }

    function In(t, e, n) {
        var r = Te(n);
        if (null !== (r = dr(r))) {
            var i = te(r);
            if (null === i) r = null;
            else {
                var o = i.tag;
                if (13 === o) {
                    if (null !== (r = ee(i))) return r;
                    r = null
                } else if (3 === o) {
                    if (i.stateNode.hydrate) return 3 === i.tag ? i.stateNode.containerInfo : null;
                    r = null
                } else i !== r && (r = null)
            }
        }
        return Nn(t, e, n, r), null
    }

    function An(t) {
        if (!Z) return !1;
        var e = (t = "on" + t) in document;
        return e || ((e = document.createElement("div")).setAttribute(t, "return;"), e = "function" == typeof e[t]), e
    }
    var Pn = new("function" == typeof WeakMap ? WeakMap : Map);

    function Mn(t) {
        var e = Pn.get(t);
        return void 0 === e && (e = new Set, Pn.set(t, e)), e
    }

    function Dn(t, e, n) {
        if (!n.has(t)) {
            switch (t) {
                case "scroll":
                    Tn(e, "scroll", !0);
                    break;
                case "focus":
                case "blur":
                    Tn(e, "focus", !0), Tn(e, "blur", !0), n.add("blur"), n.add("focus");
                    break;
                case "cancel":
                case "close":
                    An(t) && Tn(e, t, !0);
                    break;
                case "invalid":
                case "submit":
                case "reset":
                    break;
                default:
                    -1 === Zt.indexOf(t) && Sn(t, e)
            }
            n.add(t)
        }
    }
    var Rn = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        },
        Fn = ["Webkit", "ms", "Moz", "O"];

    function Ln(t, e, n) {
        return null == e || "boolean" == typeof e || "" === e ? "" : n || "number" != typeof e || 0 === e || Rn.hasOwnProperty(t) && Rn[t] ? ("" + e).trim() : e + "px"
    }

    function Un(t, e) {
        for (var n in t = t.style, e)
            if (e.hasOwnProperty(n)) {
                var r = 0 === n.indexOf("--"),
                    i = Ln(n, e[n], r);
                "float" === n && (n = "cssFloat"), r ? t.setProperty(n, i) : t[n] = i
            }
    }
    Object.keys(Rn).forEach((function(t) {
        Fn.forEach((function(e) {
            e = e + t.charAt(0).toUpperCase() + t.substring(1), Rn[e] = Rn[t]
        }))
    }));
    var zn = i({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });

    function Vn(t, e) {
        if (e) {
            if (zn[t] && (null != e.children || null != e.dangerouslySetInnerHTML)) throw Error(a(137, t, ""));
            if (null != e.dangerouslySetInnerHTML) {
                if (null != e.children) throw Error(a(60));
                if (!("object" == typeof e.dangerouslySetInnerHTML && "__html" in e.dangerouslySetInnerHTML)) throw Error(a(61))
            }
            if (null != e.style && "object" != typeof e.style) throw Error(a(62, ""))
        }
    }

    function Bn(t, e) {
        if (-1 === t.indexOf("-")) return "string" == typeof e.is;
        switch (t) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }

    function Wn(t, e) {
        var n = Mn(t = 9 === t.nodeType || 11 === t.nodeType ? t : t.ownerDocument);
        e = h[e];
        for (var r = 0; r < e.length; r++) Dn(e[r], t, n)
    }

    function Gn() {}

    function Hn(t) {
        if (void 0 === (t = t || ("undefined" != typeof document ? document : void 0))) return null;
        try {
            return t.activeElement || t.body
        } catch (e) {
            return t.body
        }
    }

    function $n(t) {
        for (; t && t.firstChild;) t = t.firstChild;
        return t
    }

    function qn(t, e) {
        var n, r = $n(t);
        for (t = 0; r;) {
            if (3 === r.nodeType) {
                if (n = t + r.textContent.length, t <= e && n >= e) return {
                    node: r,
                    offset: e - t
                };
                t = n
            }
            t: {
                for (; r;) {
                    if (r.nextSibling) {
                        r = r.nextSibling;
                        break t
                    }
                    r = r.parentNode
                }
                r = void 0
            }
            r = $n(r)
        }
    }

    function Yn() {
        for (var t = window, e = Hn(); e instanceof t.HTMLIFrameElement;) {
            try {
                var n = "string" == typeof e.contentWindow.location.href
            } catch (t) {
                n = !1
            }
            if (!n) break;
            e = Hn((t = e.contentWindow).document)
        }
        return e
    }

    function Kn(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e && ("input" === e && ("text" === t.type || "search" === t.type || "tel" === t.type || "url" === t.type || "password" === t.type) || "textarea" === e || "true" === t.contentEditable)
    }
    var Qn = "$",
        Jn = "/$",
        Xn = "$?",
        Zn = "$!",
        tr = null,
        er = null;

    function nr(t, e) {
        switch (t) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                return !!e.autoFocus
        }
        return !1
    }

    function rr(t, e) {
        return "textarea" === t || "option" === t || "noscript" === t || "string" == typeof e.children || "number" == typeof e.children || "object" == typeof e.dangerouslySetInnerHTML && null !== e.dangerouslySetInnerHTML && null != e.dangerouslySetInnerHTML.__html
    }
    var ir = "function" == typeof setTimeout ? setTimeout : void 0,
        or = "function" == typeof clearTimeout ? clearTimeout : void 0;

    function ar(t) {
        for (; null != t; t = t.nextSibling) {
            var e = t.nodeType;
            if (1 === e || 3 === e) break
        }
        return t
    }

    function sr(t) {
        t = t.previousSibling;
        for (var e = 0; t;) {
            if (8 === t.nodeType) {
                var n = t.data;
                if (n === Qn || n === Zn || n === Xn) {
                    if (0 === e) return t;
                    e--
                } else n === Jn && e++
            }
            t = t.previousSibling
        }
        return null
    }
    var ur = Math.random().toString(36).slice(2),
        cr = "__reactInternalInstance$" + ur,
        lr = "__reactEventHandlers$" + ur,
        fr = "__reactContainere$" + ur;

    function dr(t) {
        var e = t[cr];
        if (e) return e;
        for (var n = t.parentNode; n;) {
            if (e = n[fr] || n[cr]) {
                if (n = e.alternate, null !== e.child || null !== n && null !== n.child)
                    for (t = sr(t); null !== t;) {
                        if (n = t[cr]) return n;
                        t = sr(t)
                    }
                return e
            }
            n = (t = n).parentNode
        }
        return null
    }

    function pr(t) {
        return !(t = t[cr] || t[fr]) || 5 !== t.tag && 6 !== t.tag && 13 !== t.tag && 3 !== t.tag ? null : t
    }

    function hr(t) {
        if (5 === t.tag || 6 === t.tag) return t.stateNode;
        throw Error(a(33))
    }

    function br(t) {
        return t[lr] || null
    }
    var mr = null,
        gr = null,
        vr = null;

    function yr() {
        if (vr) return vr;
        var t, e, n = gr,
            r = n.length,
            i = "value" in mr ? mr.value : mr.textContent,
            o = i.length;
        for (t = 0; t < r && n[t] === i[t]; t++);
        var a = r - t;
        for (e = 1; e <= a && n[r - e] === i[o - e]; e++);
        return vr = i.slice(t, 1 < e ? 1 - e : void 0)
    }
    var _r = De.extend({
            data: null
        }),
        wr = De.extend({
            data: null
        }),
        Er = [9, 13, 27, 32],
        Or = Z && "CompositionEvent" in window,
        xr = null;
    Z && "documentMode" in document && (xr = document.documentMode);
    var Sr = Z && "TextEvent" in window && !xr,
        Tr = Z && (!Or || xr && 8 < xr && 11 >= xr),
        kr = String.fromCharCode(32),
        Cr = {
            beforeInput: {
                phasedRegistrationNames: {
                    bubbled: "onBeforeInput",
                    captured: "onBeforeInputCapture"
                },
                dependencies: ["compositionend", "keypress", "textInput", "paste"]
            },
            compositionEnd: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionEnd",
                    captured: "onCompositionEndCapture"
                },
                dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ")
            },
            compositionStart: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionStart",
                    captured: "onCompositionStartCapture"
                },
                dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
            },
            compositionUpdate: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionUpdate",
                    captured: "onCompositionUpdateCapture"
                },
                dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ")
            }
        },
        Nr = !1;

    function jr(t, e) {
        switch (t) {
            case "keyup":
                return -1 !== Er.indexOf(e.keyCode);
            case "keydown":
                return 229 !== e.keyCode;
            case "keypress":
            case "mousedown":
            case "blur":
                return !0;
            default:
                return !1
        }
    }

    function Ir(t) {
        return "object" == typeof(t = t.detail) && "data" in t ? t.data : null
    }
    var Ar = !1,
        Pr = {
            eventTypes: Cr,
            extractEvents: function(t, e, n, r) {
                var i;
                if (Or) t: {
                    switch (t) {
                        case "compositionstart":
                            var o = Cr.compositionStart;
                            break t;
                        case "compositionend":
                            o = Cr.compositionEnd;
                            break t;
                        case "compositionupdate":
                            o = Cr.compositionUpdate;
                            break t
                    }
                    o = void 0
                }
                else Ar ? jr(t, n) && (o = Cr.compositionEnd) : "keydown" === t && 229 === n.keyCode && (o = Cr.compositionStart);
                return o ? (Tr && "ko" !== n.locale && (Ar || o !== Cr.compositionStart ? o === Cr.compositionEnd && Ar && (i = yr()) : (gr = "value" in (mr = r) ? mr.value : mr.textContent, Ar = !0)), o = _r.getPooled(o, e, n, r), i ? o.data = i : null !== (i = Ir(n)) && (o.data = i), Ae(o), i = o) : i = null, (t = Sr ? function(t, e) {
                    switch (t) {
                        case "compositionend":
                            return Ir(e);
                        case "keypress":
                            return 32 !== e.which ? null : (Nr = !0, kr);
                        case "textInput":
                            return (t = e.data) === kr && Nr ? null : t;
                        default:
                            return null
                    }
                }(t, n) : function(t, e) {
                    if (Ar) return "compositionend" === t || !Or && jr(t, e) ? (t = yr(), vr = gr = mr = null, Ar = !1, t) : null;
                    switch (t) {
                        case "paste":
                            return null;
                        case "keypress":
                            if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
                                if (e.char && 1 < e.char.length) return e.char;
                                if (e.which) return String.fromCharCode(e.which)
                            }
                            return null;
                        case "compositionend":
                            return Tr && "ko" !== e.locale ? null : e.data;
                        default:
                            return null
                    }
                }(t, n)) ? ((e = wr.getPooled(Cr.beforeInput, e, n, r)).data = t, Ae(e)) : e = null, null === i ? e : null === e ? i : [i, e]
            }
        },
        Mr = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0
        };

    function Dr(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return "input" === e ? !!Mr[t.type] : "textarea" === e
    }
    var Rr = {
        change: {
            phasedRegistrationNames: {
                bubbled: "onChange",
                captured: "onChangeCapture"
            },
            dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
        }
    };

    function Fr(t, e, n) {
        return (t = De.getPooled(Rr.change, t, e, n)).type = "change", it(n), Ae(t), t
    }
    var Lr = null,
        Ur = null;

    function zr(t) {
        j(t)
    }

    function Vr(t) {
        if (St(hr(t))) return t
    }

    function Br(t, e) {
        if ("change" === t) return e
    }
    var Wr = !1;

    function Gr() {
        Lr && (Lr.detachEvent("onpropertychange", Hr), Ur = Lr = null)
    }

    function Hr(t) {
        if ("value" === t.propertyName && Vr(Ur))
            if (t = Fr(Ur, t, Te(t)), lt) j(t);
            else {
                lt = !0;
                try {
                    at(zr, t)
                } finally {
                    lt = !1, dt()
                }
            }
    }

    function $r(t, e, n) {
        "focus" === t ? (Gr(), Ur = n, (Lr = e).attachEvent("onpropertychange", Hr)) : "blur" === t && Gr()
    }

    function qr(t) {
        if ("selectionchange" === t || "keyup" === t || "keydown" === t) return Vr(Ur)
    }

    function Yr(t, e) {
        if ("click" === t) return Vr(e)
    }

    function Kr(t, e) {
        if ("input" === t || "change" === t) return Vr(e)
    }
    Z && (Wr = An("input") && (!document.documentMode || 9 < document.documentMode));
    var Qr, Jr = {
            eventTypes: Rr,
            _isInputEventSupported: Wr,
            extractEvents: function(t, e, n, r) {
                var i = e ? hr(e) : window,
                    o = i.nodeName && i.nodeName.toLowerCase();
                if ("select" === o || "input" === o && "file" === i.type) var a = Br;
                else if (Dr(i))
                    if (Wr) a = Kr;
                    else {
                        a = qr;
                        var s = $r
                    }
                else(o = i.nodeName) && "input" === o.toLowerCase() && ("checkbox" === i.type || "radio" === i.type) && (a = Yr);
                if (a && (a = a(t, e))) return Fr(a, n, r);
                s && s(t, i, e), "blur" === t && (t = i._wrapperState) && t.controlled && "number" === i.type && It(i, "number", i.value)
            }
        },
        Xr = {
            mouseEnter: {
                registrationName: "onMouseEnter",
                dependencies: ["mouseout", "mouseover"]
            },
            mouseLeave: {
                registrationName: "onMouseLeave",
                dependencies: ["mouseout", "mouseover"]
            },
            pointerEnter: {
                registrationName: "onPointerEnter",
                dependencies: ["pointerout", "pointerover"]
            },
            pointerLeave: {
                registrationName: "onPointerLeave",
                dependencies: ["pointerout", "pointerover"]
            }
        },
        Zr = {
            eventTypes: Xr,
            extractEvents: function(t, e, n, r, i) {
                var o = "mouseover" === t || "pointerover" === t,
                    a = "mouseout" === t || "pointerout" === t;
                if (o && 0 == (32 & i) && (n.relatedTarget || n.fromElement) || !a && !o) return null;
                if (i = r.window === r ? r : (i = r.ownerDocument) ? i.defaultView || i.parentWindow : window, a ? (a = e, null !== (e = (e = n.relatedTarget || n.toElement) ? dr(e) : null) && (e !== (o = te(e)) || 5 !== e.tag && 6 !== e.tag) && (e = null)) : a = null, a === e) return null;
                if ("mouseout" === t || "mouseover" === t) var s = tn,
                    u = Xr.mouseLeave,
                    c = Xr.mouseEnter,
                    l = "mouse";
                else "pointerout" !== t && "pointerover" !== t || (s = en, u = Xr.pointerLeave, c = Xr.pointerEnter, l = "pointer");
                if (t = null == a ? i : hr(a), i = null == e ? i : hr(e), (u = s.getPooled(u, a, n, r)).type = l + "leave", u.target = t, u.relatedTarget = i, (r = s.getPooled(c, e, n, r)).type = l + "enter", r.target = i, r.relatedTarget = t, l = e, (s = a) && l) t: {
                    for (t = l, a = 0, e = c = s; e; e = ke(e)) a++;
                    for (e = 0, i = t; i; i = ke(i)) e++;
                    for (; 0 < a - e;) c = ke(c),
                    a--;
                    for (; 0 < e - a;) t = ke(t),
                    e--;
                    for (; a--;) {
                        if (c === t || c === t.alternate) break t;
                        c = ke(c), t = ke(t)
                    }
                    c = null
                }
                else c = null;
                for (t = c, c = []; s && s !== t && (null === (a = s.alternate) || a !== t);) c.push(s), s = ke(s);
                for (s = []; l && l !== t && (null === (a = l.alternate) || a !== t);) s.push(l), l = ke(l);
                for (l = 0; l < c.length; l++) je(c[l], "bubbled", u);
                for (l = s.length; 0 < l--;) je(s[l], "captured", r);
                return n === Qr ? (Qr = null, [u]) : (Qr = n, [u, r])
            }
        },
        ti = "function" == typeof Object.is ? Object.is : function(t, e) {
            return t === e && (0 !== t || 1 / t == 1 / e) || t != t && e != e
        },
        ei = Object.prototype.hasOwnProperty;

    function ni(t, e) {
        if (ti(t, e)) return !0;
        if ("object" != typeof t || null === t || "object" != typeof e || null === e) return !1;
        var n = Object.keys(t),
            r = Object.keys(e);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++)
            if (!ei.call(e, n[r]) || !ti(t[n[r]], e[n[r]])) return !1;
        return !0
    }
    var ri = Z && "documentMode" in document && 11 >= document.documentMode,
        ii = {
            select: {
                phasedRegistrationNames: {
                    bubbled: "onSelect",
                    captured: "onSelectCapture"
                },
                dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")
            }
        },
        oi = null,
        ai = null,
        si = null,
        ui = !1;

    function ci(t, e) {
        var n = e.window === e ? e.document : 9 === e.nodeType ? e : e.ownerDocument;
        return ui || null == oi || oi !== Hn(n) ? null : (n = "selectionStart" in (n = oi) && Kn(n) ? {
            start: n.selectionStart,
            end: n.selectionEnd
        } : {
            anchorNode: (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection()).anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset
        }, si && ni(si, n) ? null : (si = n, (t = De.getPooled(ii.select, ai, t, e)).type = "select", t.target = oi, Ae(t), t))
    }
    var li = {
        eventTypes: ii,
        extractEvents: function(t, e, n, r) {
            var i, o = r.window === r ? r.document : 9 === r.nodeType ? r : r.ownerDocument;
            if (!(i = !o)) {
                t: {
                    o = Mn(o),
                    i = h.onSelect;
                    for (var a = 0; a < i.length; a++)
                        if (!o.has(i[a])) {
                            o = !1;
                            break t
                        } o = !0
                }
                i = !o
            }
            if (i) return null;
            switch (o = e ? hr(e) : window, t) {
                case "focus":
                    (Dr(o) || "true" === o.contentEditable) && (oi = o, ai = e, si = null);
                    break;
                case "blur":
                    si = ai = oi = null;
                    break;
                case "mousedown":
                    ui = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    return ui = !1, ci(n, r);
                case "selectionchange":
                    if (ri) break;
                case "keydown":
                case "keyup":
                    return ci(n, r)
            }
            return null
        }
    };
    I.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")), E = br, O = pr, x = hr, I.injectEventPluginsByName({
        SimpleEventPlugin: gn,
        EnterLeaveEventPlugin: Zr,
        ChangeEventPlugin: Jr,
        SelectEventPlugin: li,
        BeforeInputEventPlugin: Pr
    }), new Set;
    var fi = [],
        di = -1;

    function pi(t) {
        0 > di || (t.current = fi[di], fi[di] = null, di--)
    }

    function hi(t, e) {
        di++, fi[di] = t.current, t.current = e
    }
    var bi = {},
        mi = {
            current: bi
        },
        gi = {
            current: !1
        },
        vi = bi;

    function yi(t, e) {
        var n = t.type.contextTypes;
        if (!n) return bi;
        var r = t.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === e) return r.__reactInternalMemoizedMaskedChildContext;
        var i, o = {};
        for (i in n) o[i] = e[i];
        return r && ((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext = e, t.__reactInternalMemoizedMaskedChildContext = o), o
    }

    function _i(t) {
        return null != t.childContextTypes
    }

    function wi(t) {
        pi(gi), pi(mi)
    }

    function Ei(t) {
        pi(gi), pi(mi)
    }

    function Oi(t, e, n) {
        if (mi.current !== bi) throw Error(a(168));
        hi(mi, e), hi(gi, n)
    }

    function xi(t, e, n) {
        var r = t.stateNode;
        if (t = e.childContextTypes, "function" != typeof r.getChildContext) return n;
        for (var o in r = r.getChildContext())
            if (!(o in t)) throw Error(a(108, J(e) || "Unknown", o));
        return i({}, n, {}, r)
    }

    function Si(t) {
        var e = t.stateNode;
        return e = e && e.__reactInternalMemoizedMergedChildContext || bi, vi = mi.current, hi(mi, e), hi(gi, gi.current), !0
    }

    function Ti(t, e, n) {
        var r = t.stateNode;
        if (!r) throw Error(a(169));
        n ? (e = xi(t, e, vi), r.__reactInternalMemoizedMergedChildContext = e, pi(gi), pi(mi), hi(mi, e)) : pi(gi), hi(gi, n)
    }
    var ki = o.unstable_runWithPriority,
        Ci = o.unstable_scheduleCallback,
        Ni = o.unstable_cancelCallback,
        ji = o.unstable_shouldYield,
        Ii = o.unstable_requestPaint,
        Ai = o.unstable_now,
        Pi = o.unstable_getCurrentPriorityLevel,
        Mi = o.unstable_ImmediatePriority,
        Di = o.unstable_UserBlockingPriority,
        Ri = o.unstable_NormalPriority,
        Fi = o.unstable_LowPriority,
        Li = o.unstable_IdlePriority,
        Ui = {},
        zi = void 0 !== Ii ? Ii : function() {},
        Vi = null,
        Bi = null,
        Wi = !1,
        Gi = Ai(),
        Hi = 1e4 > Gi ? Ai : function() {
            return Ai() - Gi
        };

    function $i() {
        switch (Pi()) {
            case Mi:
                return 99;
            case Di:
                return 98;
            case Ri:
                return 97;
            case Fi:
                return 96;
            case Li:
                return 95;
            default:
                throw Error(a(332))
        }
    }

    function qi(t) {
        switch (t) {
            case 99:
                return Mi;
            case 98:
                return Di;
            case 97:
                return Ri;
            case 96:
                return Fi;
            case 95:
                return Li;
            default:
                throw Error(a(332))
        }
    }

    function Yi(t, e) {
        return t = qi(t), ki(t, e)
    }

    function Ki(t, e, n) {
        return t = qi(t), Ci(t, e, n)
    }

    function Qi(t) {
        return null === Vi ? (Vi = [t], Bi = Ci(Mi, Xi)) : Vi.push(t), Ui
    }

    function Ji() {
        if (null !== Bi) {
            var t = Bi;
            Bi = null, Ni(t)
        }
        Xi()
    }

    function Xi() {
        if (!Wi && null !== Vi) {
            Wi = !0;
            var t = 0;
            try {
                var e = Vi;
                Yi(99, (function() {
                    for (; t < e.length; t++) {
                        var n = e[t];
                        do {
                            n = n(!0)
                        } while (null !== n)
                    }
                })), Vi = null
            } catch (e) {
                throw null !== Vi && (Vi = Vi.slice(t + 1)), Ci(Mi, Ji), e
            } finally {
                Wi = !1
            }
        }
    }
    var Zi = 3;

    function to(t, e, n) {
        return 1073741821 - (1 + ((1073741821 - t + e / 10) / (n /= 10) | 0)) * n
    }

    function eo(t, e) {
        if (t && t.defaultProps)
            for (var n in e = i({}, e), t = t.defaultProps) void 0 === e[n] && (e[n] = t[n]);
        return e
    }
    var no = {
            current: null
        },
        ro = null,
        io = null,
        oo = null;

    function ao() {
        oo = io = ro = null
    }

    function so(t, e) {
        var n = t.type._context;
        hi(no, n._currentValue), n._currentValue = e
    }

    function uo(t) {
        var e = no.current;
        pi(no), t.type._context._currentValue = e
    }

    function co(t, e) {
        for (; null !== t;) {
            var n = t.alternate;
            if (t.childExpirationTime < e) t.childExpirationTime = e, null !== n && n.childExpirationTime < e && (n.childExpirationTime = e);
            else {
                if (!(null !== n && n.childExpirationTime < e)) break;
                n.childExpirationTime = e
            }
            t = t.return
        }
    }

    function lo(t, e) {
        ro = t, oo = io = null, null !== (t = t.dependencies) && null !== t.firstContext && (t.expirationTime >= e && (Ha = !0), t.firstContext = null)
    }

    function fo(t, e) {
        if (oo !== t && !1 !== e && 0 !== e)
            if ("number" == typeof e && 1073741823 !== e || (oo = t, e = 1073741823), e = {
                    context: t,
                    observedBits: e,
                    next: null
                }, null === io) {
                if (null === ro) throw Error(a(308));
                io = e, ro.dependencies = {
                    expirationTime: 0,
                    firstContext: e,
                    responders: null
                }
            } else io = io.next = e;
        return t._currentValue
    }
    var po = !1;

    function ho(t) {
        return {
            baseState: t,
            firstUpdate: null,
            lastUpdate: null,
            firstCapturedUpdate: null,
            lastCapturedUpdate: null,
            firstEffect: null,
            lastEffect: null,
            firstCapturedEffect: null,
            lastCapturedEffect: null
        }
    }

    function bo(t) {
        return {
            baseState: t.baseState,
            firstUpdate: t.firstUpdate,
            lastUpdate: t.lastUpdate,
            firstCapturedUpdate: null,
            lastCapturedUpdate: null,
            firstEffect: null,
            lastEffect: null,
            firstCapturedEffect: null,
            lastCapturedEffect: null
        }
    }

    function mo(t, e) {
        return {
            expirationTime: t,
            suspenseConfig: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
            nextEffect: null
        }
    }

    function go(t, e) {
        null === t.lastUpdate ? t.firstUpdate = t.lastUpdate = e : (t.lastUpdate.next = e, t.lastUpdate = e)
    }

    function vo(t, e) {
        var n = t.alternate;
        if (null === n) {
            var r = t.updateQueue,
                i = null;
            null === r && (r = t.updateQueue = ho(t.memoizedState))
        } else r = t.updateQueue, i = n.updateQueue, null === r ? null === i ? (r = t.updateQueue = ho(t.memoizedState), i = n.updateQueue = ho(n.memoizedState)) : r = t.updateQueue = bo(i) : null === i && (i = n.updateQueue = bo(r));
        null === i || r === i ? go(r, e) : null === r.lastUpdate || null === i.lastUpdate ? (go(r, e), go(i, e)) : (go(r, e), i.lastUpdate = e)
    }

    function yo(t, e) {
        var n = t.updateQueue;
        null === (n = null === n ? t.updateQueue = ho(t.memoizedState) : _o(t, n)).lastCapturedUpdate ? n.firstCapturedUpdate = n.lastCapturedUpdate = e : (n.lastCapturedUpdate.next = e, n.lastCapturedUpdate = e)
    }

    function _o(t, e) {
        var n = t.alternate;
        return null !== n && e === n.updateQueue && (e = t.updateQueue = bo(e)), e
    }

    function wo(t, e, n, r, o, a) {
        switch (n.tag) {
            case 1:
                return "function" == typeof(t = n.payload) ? t.call(a, r, o) : t;
            case 3:
                t.effectTag = -4097 & t.effectTag | 64;
            case 0:
                if (null == (o = "function" == typeof(t = n.payload) ? t.call(a, r, o) : t)) break;
                return i({}, r, o);
            case 2:
                po = !0
        }
        return r
    }

    function Eo(t, e, n, r, i) {
        po = !1;
        for (var o = (e = _o(t, e)).baseState, a = null, s = 0, u = e.firstUpdate, c = o; null !== u;) {
            var l = u.expirationTime;
            l < i ? (null === a && (a = u, o = c), s < l && (s = l)) : (ku(l, u.suspenseConfig), c = wo(t, 0, u, c, n, r), null !== u.callback && (t.effectTag |= 32, u.nextEffect = null, null === e.lastEffect ? e.firstEffect = e.lastEffect = u : (e.lastEffect.nextEffect = u, e.lastEffect = u))), u = u.next
        }
        for (l = null, u = e.firstCapturedUpdate; null !== u;) {
            var f = u.expirationTime;
            f < i ? (null === l && (l = u, null === a && (o = c)), s < f && (s = f)) : (c = wo(t, 0, u, c, n, r), null !== u.callback && (t.effectTag |= 32, u.nextEffect = null, null === e.lastCapturedEffect ? e.firstCapturedEffect = e.lastCapturedEffect = u : (e.lastCapturedEffect.nextEffect = u, e.lastCapturedEffect = u))), u = u.next
        }
        null === a && (e.lastUpdate = null), null === l ? e.lastCapturedUpdate = null : t.effectTag |= 32, null === a && null === l && (o = c), e.baseState = o, e.firstUpdate = a, e.firstCapturedUpdate = l, Cu(s), t.expirationTime = s, t.memoizedState = c
    }

    function Oo(t, e, n) {
        null !== e.firstCapturedUpdate && (null !== e.lastUpdate && (e.lastUpdate.next = e.firstCapturedUpdate, e.lastUpdate = e.lastCapturedUpdate), e.firstCapturedUpdate = e.lastCapturedUpdate = null), xo(e.firstEffect, n), e.firstEffect = e.lastEffect = null, xo(e.firstCapturedEffect, n), e.firstCapturedEffect = e.lastCapturedEffect = null
    }

    function xo(t, e) {
        for (; null !== t;) {
            var n = t.callback;
            if (null !== n) {
                t.callback = null;
                var r = e;
                if ("function" != typeof n) throw Error(a(191, n));
                n.call(r)
            }
            t = t.nextEffect
        }
    }
    var So = P.ReactCurrentBatchConfig,
        To = (new r.Component).refs;

    function ko(t, e, n, r) {
        n = null == (n = n(r, e = t.memoizedState)) ? e : i({}, e, n), t.memoizedState = n, null !== (r = t.updateQueue) && 0 === t.expirationTime && (r.baseState = n)
    }
    var Co = {
        isMounted: function(t) {
            return !!(t = t._reactInternalFiber) && te(t) === t
        },
        enqueueSetState: function(t, e, n) {
            t = t._reactInternalFiber;
            var r = hu(),
                i = So.suspense;
            (i = mo(r = bu(r, t, i), i)).payload = e, null != n && (i.callback = n), vo(t, i), mu(t, r)
        },
        enqueueReplaceState: function(t, e, n) {
            t = t._reactInternalFiber;
            var r = hu(),
                i = So.suspense;
            (i = mo(r = bu(r, t, i), i)).tag = 1, i.payload = e, null != n && (i.callback = n), vo(t, i), mu(t, r)
        },
        enqueueForceUpdate: function(t, e) {
            t = t._reactInternalFiber;
            var n = hu(),
                r = So.suspense;
            (r = mo(n = bu(n, t, r), r)).tag = 2, null != e && (r.callback = e), vo(t, r), mu(t, n)
        }
    };

    function No(t, e, n, r, i, o, a) {
        return "function" == typeof(t = t.stateNode).shouldComponentUpdate ? t.shouldComponentUpdate(r, o, a) : !(e.prototype && e.prototype.isPureReactComponent && ni(n, r) && ni(i, o))
    }

    function jo(t, e, n) {
        var r = !1,
            i = bi,
            o = e.contextType;
        return "object" == typeof o && null !== o ? o = fo(o) : (i = _i(e) ? vi : mi.current, o = (r = null != (r = e.contextTypes)) ? yi(t, i) : bi), e = new e(n, o), t.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, e.updater = Co, t.stateNode = e, e._reactInternalFiber = t, r && ((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext = i, t.__reactInternalMemoizedMaskedChildContext = o), e
    }

    function Io(t, e, n, r) {
        t = e.state, "function" == typeof e.componentWillReceiveProps && e.componentWillReceiveProps(n, r), "function" == typeof e.UNSAFE_componentWillReceiveProps && e.UNSAFE_componentWillReceiveProps(n, r), e.state !== t && Co.enqueueReplaceState(e, e.state, null)
    }

    function Ao(t, e, n, r) {
        var i = t.stateNode;
        i.props = n, i.state = t.memoizedState, i.refs = To;
        var o = e.contextType;
        "object" == typeof o && null !== o ? i.context = fo(o) : (o = _i(e) ? vi : mi.current, i.context = yi(t, o)), null !== (o = t.updateQueue) && (Eo(t, o, n, i, r), i.state = t.memoizedState), "function" == typeof(o = e.getDerivedStateFromProps) && (ko(t, e, o, n), i.state = t.memoizedState), "function" == typeof e.getDerivedStateFromProps || "function" == typeof i.getSnapshotBeforeUpdate || "function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount || (e = i.state, "function" == typeof i.componentWillMount && i.componentWillMount(), "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount(), e !== i.state && Co.enqueueReplaceState(i, i.state, null), null !== (o = t.updateQueue) && (Eo(t, o, n, i, r), i.state = t.memoizedState)), "function" == typeof i.componentDidMount && (t.effectTag |= 4)
    }
    var Po = Array.isArray;

    function Mo(t, e, n) {
        if (null !== (t = n.ref) && "function" != typeof t && "object" != typeof t) {
            if (n._owner) {
                if (n = n._owner) {
                    if (1 !== n.tag) throw Error(a(309));
                    var r = n.stateNode
                }
                if (!r) throw Error(a(147, t));
                var i = "" + t;
                return null !== e && null !== e.ref && "function" == typeof e.ref && e.ref._stringRef === i ? e.ref : ((e = function(t) {
                    var e = r.refs;
                    e === To && (e = r.refs = {}), null === t ? delete e[i] : e[i] = t
                })._stringRef = i, e)
            }
            if ("string" != typeof t) throw Error(a(284));
            if (!n._owner) throw Error(a(290, t))
        }
        return t
    }

    function Do(t, e) {
        if ("textarea" !== t.type) throw Error(a(31, "[object Object]" === Object.prototype.toString.call(e) ? "object with keys {" + Object.keys(e).join(", ") + "}" : e, ""))
    }

    function Ro(t) {
        function e(e, n) {
            if (t) {
                var r = e.lastEffect;
                null !== r ? (r.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n, n.nextEffect = null, n.effectTag = 8
            }
        }

        function n(n, r) {
            if (!t) return null;
            for (; null !== r;) e(n, r), r = r.sibling;
            return null
        }

        function r(t, e) {
            for (t = new Map; null !== e;) null !== e.key ? t.set(e.key, e) : t.set(e.index, e), e = e.sibling;
            return t
        }

        function i(t, e, n) {
            return (t = Yu(t, e)).index = 0, t.sibling = null, t
        }

        function o(e, n, r) {
            return e.index = r, t ? null !== (r = e.alternate) ? (r = r.index) < n ? (e.effectTag = 2, n) : r : (e.effectTag = 2, n) : n
        }

        function s(e) {
            return t && null === e.alternate && (e.effectTag = 2), e
        }

        function u(t, e, n, r) {
            return null === e || 6 !== e.tag ? ((e = Ju(n, t.mode, r)).return = t, e) : ((e = i(e, n)).return = t, e)
        }

        function c(t, e, n, r) {
            return null !== e && e.elementType === n.type ? ((r = i(e, n.props)).ref = Mo(t, e, n), r.return = t, r) : ((r = Ku(n.type, n.key, n.props, null, t.mode, r)).ref = Mo(t, e, n), r.return = t, r)
        }

        function l(t, e, n, r) {
            return null === e || 4 !== e.tag || e.stateNode.containerInfo !== n.containerInfo || e.stateNode.implementation !== n.implementation ? ((e = Xu(n, t.mode, r)).return = t, e) : ((e = i(e, n.children || [])).return = t, e)
        }

        function f(t, e, n, r, o) {
            return null === e || 7 !== e.tag ? ((e = Qu(n, t.mode, r, o)).return = t, e) : ((e = i(e, n)).return = t, e)
        }

        function d(t, e, n) {
            if ("string" == typeof e || "number" == typeof e) return (e = Ju("" + e, t.mode, n)).return = t, e;
            if ("object" == typeof e && null !== e) {
                switch (e.$$typeof) {
                    case R:
                        return (n = Ku(e.type, e.key, e.props, null, t.mode, n)).ref = Mo(t, null, e), n.return = t, n;
                    case F:
                        return (e = Xu(e, t.mode, n)).return = t, e
                }
                if (Po(e) || Q(e)) return (e = Qu(e, t.mode, n, null)).return = t, e;
                Do(t, e)
            }
            return null
        }

        function p(t, e, n, r) {
            var i = null !== e ? e.key : null;
            if ("string" == typeof n || "number" == typeof n) return null !== i ? null : u(t, e, "" + n, r);
            if ("object" == typeof n && null !== n) {
                switch (n.$$typeof) {
                    case R:
                        return n.key === i ? n.type === L ? f(t, e, n.props.children, r, i) : c(t, e, n, r) : null;
                    case F:
                        return n.key === i ? l(t, e, n, r) : null
                }
                if (Po(n) || Q(n)) return null !== i ? null : f(t, e, n, r, null);
                Do(t, n)
            }
            return null
        }

        function h(t, e, n, r, i) {
            if ("string" == typeof r || "number" == typeof r) return u(e, t = t.get(n) || null, "" + r, i);
            if ("object" == typeof r && null !== r) {
                switch (r.$$typeof) {
                    case R:
                        return t = t.get(null === r.key ? n : r.key) || null, r.type === L ? f(e, t, r.props.children, i, r.key) : c(e, t, r, i);
                    case F:
                        return l(e, t = t.get(null === r.key ? n : r.key) || null, r, i)
                }
                if (Po(r) || Q(r)) return f(e, t = t.get(n) || null, r, i, null);
                Do(e, r)
            }
            return null
        }

        function b(i, a, s, u) {
            for (var c = null, l = null, f = a, b = a = 0, m = null; null !== f && b < s.length; b++) {
                f.index > b ? (m = f, f = null) : m = f.sibling;
                var g = p(i, f, s[b], u);
                if (null === g) {
                    null === f && (f = m);
                    break
                }
                t && f && null === g.alternate && e(i, f), a = o(g, a, b), null === l ? c = g : l.sibling = g, l = g, f = m
            }
            if (b === s.length) return n(i, f), c;
            if (null === f) {
                for (; b < s.length; b++) null !== (f = d(i, s[b], u)) && (a = o(f, a, b), null === l ? c = f : l.sibling = f, l = f);
                return c
            }
            for (f = r(i, f); b < s.length; b++) null !== (m = h(f, i, b, s[b], u)) && (t && null !== m.alternate && f.delete(null === m.key ? b : m.key), a = o(m, a, b), null === l ? c = m : l.sibling = m, l = m);
            return t && f.forEach((function(t) {
                return e(i, t)
            })), c
        }

        function m(i, s, u, c) {
            var l = Q(u);
            if ("function" != typeof l) throw Error(a(150));
            if (null == (u = l.call(u))) throw Error(a(151));
            for (var f = l = null, b = s, m = s = 0, g = null, v = u.next(); null !== b && !v.done; m++, v = u.next()) {
                b.index > m ? (g = b, b = null) : g = b.sibling;
                var y = p(i, b, v.value, c);
                if (null === y) {
                    null === b && (b = g);
                    break
                }
                t && b && null === y.alternate && e(i, b), s = o(y, s, m), null === f ? l = y : f.sibling = y, f = y, b = g
            }
            if (v.done) return n(i, b), l;
            if (null === b) {
                for (; !v.done; m++, v = u.next()) null !== (v = d(i, v.value, c)) && (s = o(v, s, m), null === f ? l = v : f.sibling = v, f = v);
                return l
            }
            for (b = r(i, b); !v.done; m++, v = u.next()) null !== (v = h(b, i, m, v.value, c)) && (t && null !== v.alternate && b.delete(null === v.key ? m : v.key), s = o(v, s, m), null === f ? l = v : f.sibling = v, f = v);
            return t && b.forEach((function(t) {
                return e(i, t)
            })), l
        }
        return function(t, r, o, u) {
            var c = "object" == typeof o && null !== o && o.type === L && null === o.key;
            c && (o = o.props.children);
            var l = "object" == typeof o && null !== o;
            if (l) switch (o.$$typeof) {
                case R:
                    t: {
                        for (l = o.key, c = r; null !== c;) {
                            if (c.key === l) {
                                if (7 === c.tag ? o.type === L : c.elementType === o.type) {
                                    n(t, c.sibling), (r = i(c, o.type === L ? o.props.children : o.props)).ref = Mo(t, c, o), r.return = t, t = r;
                                    break t
                                }
                                n(t, c);
                                break
                            }
                            e(t, c), c = c.sibling
                        }
                        o.type === L ? ((r = Qu(o.props.children, t.mode, u, o.key)).return = t, t = r) : ((u = Ku(o.type, o.key, o.props, null, t.mode, u)).ref = Mo(t, r, o), u.return = t, t = u)
                    }
                    return s(t);
                case F:
                    t: {
                        for (c = o.key; null !== r;) {
                            if (r.key === c) {
                                if (4 === r.tag && r.stateNode.containerInfo === o.containerInfo && r.stateNode.implementation === o.implementation) {
                                    n(t, r.sibling), (r = i(r, o.children || [])).return = t, t = r;
                                    break t
                                }
                                n(t, r);
                                break
                            }
                            e(t, r), r = r.sibling
                        }(r = Xu(o, t.mode, u)).return = t,
                        t = r
                    }
                    return s(t)
            }
            if ("string" == typeof o || "number" == typeof o) return o = "" + o, null !== r && 6 === r.tag ? (n(t, r.sibling), (r = i(r, o)).return = t, t = r) : (n(t, r), (r = Ju(o, t.mode, u)).return = t, t = r), s(t);
            if (Po(o)) return b(t, r, o, u);
            if (Q(o)) return m(t, r, o, u);
            if (l && Do(t, o), void 0 === o && !c) switch (t.tag) {
                case 1:
                case 0:
                    throw t = t.type, Error(a(152, t.displayName || t.name || "Component"))
            }
            return n(t, r)
        }
    }
    var Fo = Ro(!0),
        Lo = Ro(!1),
        Uo = {},
        zo = {
            current: Uo
        },
        Vo = {
            current: Uo
        },
        Bo = {
            current: Uo
        };

    function Wo(t) {
        if (t === Uo) throw Error(a(174));
        return t
    }

    function Go(t, e) {
        hi(Bo, e), hi(Vo, t), hi(zo, Uo);
        var n = e.nodeType;
        switch (n) {
            case 9:
            case 11:
                e = (e = e.documentElement) ? e.namespaceURI : zt(null, "");
                break;
            default:
                e = zt(e = (n = 8 === n ? e.parentNode : e).namespaceURI || null, n = n.tagName)
        }
        pi(zo), hi(zo, e)
    }

    function Ho(t) {
        pi(zo), pi(Vo), pi(Bo)
    }

    function $o(t) {
        Wo(Bo.current);
        var e = Wo(zo.current),
            n = zt(e, t.type);
        e !== n && (hi(Vo, t), hi(zo, n))
    }

    function qo(t) {
        Vo.current === t && (pi(zo), pi(Vo))
    }
    var Yo = {
        current: 0
    };

    function Ko(t) {
        for (var e = t; null !== e;) {
            if (13 === e.tag) {
                var n = e.memoizedState;
                if (null !== n && (null === (n = n.dehydrated) || n.data === Xn || n.data === Zn)) return e
            } else if (19 === e.tag && void 0 !== e.memoizedProps.revealOrder) {
                if (0 != (64 & e.effectTag)) return e
            } else if (null !== e.child) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break;
            for (; null === e.sibling;) {
                if (null === e.return || e.return === t) return null;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        return null
    }

    function Qo(t, e) {
        return {
            responder: t,
            props: e
        }
    }
    var Jo = P.ReactCurrentDispatcher,
        Xo = P.ReactCurrentBatchConfig,
        Zo = 0,
        ta = null,
        ea = null,
        na = null,
        ra = null,
        ia = null,
        oa = null,
        aa = 0,
        sa = null,
        ua = 0,
        ca = !1,
        la = null,
        fa = 0;

    function da() {
        throw Error(a(321))
    }

    function pa(t, e) {
        if (null === e) return !1;
        for (var n = 0; n < e.length && n < t.length; n++)
            if (!ti(t[n], e[n])) return !1;
        return !0
    }

    function ha(t, e, n, r, i, o) {
        if (Zo = o, ta = e, na = null !== t ? t.memoizedState : null, Jo.current = null === na ? Pa : Ma, e = n(r, i), ca) {
            do {
                ca = !1, fa += 1, na = null !== t ? t.memoizedState : null, oa = ra, sa = ia = ea = null, Jo.current = Ma, e = n(r, i)
            } while (ca);
            la = null, fa = 0
        }
        if (Jo.current = Aa, (t = ta).memoizedState = ra, t.expirationTime = aa, t.updateQueue = sa, t.effectTag |= ua, t = null !== ea && null !== ea.next, Zo = 0, oa = ia = ra = na = ea = ta = null, aa = 0, sa = null, ua = 0, t) throw Error(a(300));
        return e
    }

    function ba() {
        Jo.current = Aa, Zo = 0, oa = ia = ra = na = ea = ta = null, aa = 0, sa = null, ua = 0, ca = !1, la = null, fa = 0
    }

    function ma() {
        var t = {
            memoizedState: null,
            baseState: null,
            queue: null,
            baseUpdate: null,
            next: null
        };
        return null === ia ? ra = ia = t : ia = ia.next = t, ia
    }

    function ga() {
        if (null !== oa) oa = (ia = oa).next, na = null !== (ea = na) ? ea.next : null;
        else {
            if (null === na) throw Error(a(310));
            var t = {
                memoizedState: (ea = na).memoizedState,
                baseState: ea.baseState,
                queue: ea.queue,
                baseUpdate: ea.baseUpdate,
                next: null
            };
            ia = null === ia ? ra = t : ia.next = t, na = ea.next
        }
        return ia
    }

    function va(t, e) {
        return "function" == typeof e ? e(t) : e
    }

    function ya(t) {
        var e = ga(),
            n = e.queue;
        if (null === n) throw Error(a(311));
        if (n.lastRenderedReducer = t, 0 < fa) {
            var r = n.dispatch;
            if (null !== la) {
                var i = la.get(n);
                if (void 0 !== i) {
                    la.delete(n);
                    var o = e.memoizedState;
                    do {
                        o = t(o, i.action), i = i.next
                    } while (null !== i);
                    return ti(o, e.memoizedState) || (Ha = !0), e.memoizedState = o, e.baseUpdate === n.last && (e.baseState = o), n.lastRenderedState = o, [o, r]
                }
            }
            return [e.memoizedState, r]
        }
        r = n.last;
        var s = e.baseUpdate;
        if (o = e.baseState, null !== s ? (null !== r && (r.next = null), r = s.next) : r = null !== r ? r.next : null, null !== r) {
            var u = i = null,
                c = r,
                l = !1;
            do {
                var f = c.expirationTime;
                f < Zo ? (l || (l = !0, u = s, i = o), f > aa && Cu(aa = f)) : (ku(f, c.suspenseConfig), o = c.eagerReducer === t ? c.eagerState : t(o, c.action)), s = c, c = c.next
            } while (null !== c && c !== r);
            l || (u = s, i = o), ti(o, e.memoizedState) || (Ha = !0), e.memoizedState = o, e.baseUpdate = u, e.baseState = i, n.lastRenderedState = o
        }
        return [e.memoizedState, n.dispatch]
    }

    function _a(t) {
        var e = ma();
        return "function" == typeof t && (t = t()), e.memoizedState = e.baseState = t, t = (t = e.queue = {
            last: null,
            dispatch: null,
            lastRenderedReducer: va,
            lastRenderedState: t
        }).dispatch = Ia.bind(null, ta, t), [e.memoizedState, t]
    }

    function wa(t) {
        return ya(va)
    }

    function Ea(t, e, n, r) {
        return t = {
            tag: t,
            create: e,
            destroy: n,
            deps: r,
            next: null
        }, null === sa ? (sa = {
            lastEffect: null
        }).lastEffect = t.next = t : null === (e = sa.lastEffect) ? sa.lastEffect = t.next = t : (n = e.next, e.next = t, t.next = n, sa.lastEffect = t), t
    }

    function Oa(t, e, n, r) {
        var i = ma();
        ua |= t, i.memoizedState = Ea(e, n, void 0, void 0 === r ? null : r)
    }

    function xa(t, e, n, r) {
        var i = ga();
        r = void 0 === r ? null : r;
        var o = void 0;
        if (null !== ea) {
            var a = ea.memoizedState;
            if (o = a.destroy, null !== r && pa(r, a.deps)) return void Ea(0, n, o, r)
        }
        ua |= t, i.memoizedState = Ea(e, n, o, r)
    }

    function Sa(t, e) {
        return Oa(516, 192, t, e)
    }

    function Ta(t, e) {
        return xa(516, 192, t, e)
    }

    function ka(t, e) {
        return "function" == typeof e ? (t = t(), e(t), function() {
            e(null)
        }) : null != e ? (t = t(), e.current = t, function() {
            e.current = null
        }) : void 0
    }

    function Ca() {}

    function Na(t, e) {
        return ma().memoizedState = [t, void 0 === e ? null : e], t
    }

    function ja(t, e) {
        var n = ga();
        e = void 0 === e ? null : e;
        var r = n.memoizedState;
        return null !== r && null !== e && pa(e, r[1]) ? r[0] : (n.memoizedState = [t, e], t)
    }

    function Ia(t, e, n) {
        if (!(25 > fa)) throw Error(a(301));
        var r = t.alternate;
        if (t === ta || null !== r && r === ta)
            if (ca = !0, t = {
                    expirationTime: Zo,
                    suspenseConfig: null,
                    action: n,
                    eagerReducer: null,
                    eagerState: null,
                    next: null
                }, null === la && (la = new Map), void 0 === (n = la.get(e))) la.set(e, t);
            else {
                for (e = n; null !== e.next;) e = e.next;
                e.next = t
            }
        else {
            var i = hu(),
                o = So.suspense;
            o = {
                expirationTime: i = bu(i, t, o),
                suspenseConfig: o,
                action: n,
                eagerReducer: null,
                eagerState: null,
                next: null
            };
            var s = e.last;
            if (null === s) o.next = o;
            else {
                var u = s.next;
                null !== u && (o.next = u), s.next = o
            }
            if (e.last = o, 0 === t.expirationTime && (null === r || 0 === r.expirationTime) && null !== (r = e.lastRenderedReducer)) try {
                var c = e.lastRenderedState,
                    l = r(c, n);
                if (o.eagerReducer = r, o.eagerState = l, ti(l, c)) return
            } catch (t) {}
            mu(t, i)
        }
    }
    var Aa = {
            readContext: fo,
            useCallback: da,
            useContext: da,
            useEffect: da,
            useImperativeHandle: da,
            useLayoutEffect: da,
            useMemo: da,
            useReducer: da,
            useRef: da,
            useState: da,
            useDebugValue: da,
            useResponder: da,
            useDeferredValue: da,
            useTransition: da
        },
        Pa = {
            readContext: fo,
            useCallback: Na,
            useContext: fo,
            useEffect: Sa,
            useImperativeHandle: function(t, e, n) {
                return n = null != n ? n.concat([t]) : null, Oa(4, 36, ka.bind(null, e, t), n)
            },
            useLayoutEffect: function(t, e) {
                return Oa(4, 36, t, e)
            },
            useMemo: function(t, e) {
                var n = ma();
                return e = void 0 === e ? null : e, t = t(), n.memoizedState = [t, e], t
            },
            useReducer: function(t, e, n) {
                var r = ma();
                return e = void 0 !== n ? n(e) : e, r.memoizedState = r.baseState = e, t = (t = r.queue = {
                    last: null,
                    dispatch: null,
                    lastRenderedReducer: t,
                    lastRenderedState: e
                }).dispatch = Ia.bind(null, ta, t), [r.memoizedState, t]
            },
            useRef: function(t) {
                return t = {
                    current: t
                }, ma().memoizedState = t
            },
            useState: _a,
            useDebugValue: Ca,
            useResponder: Qo,
            useDeferredValue: function(t, e) {
                var n = _a(t),
                    r = n[0],
                    i = n[1];
                return Sa((function() {
                    o.unstable_next((function() {
                        var n = Xo.suspense;
                        Xo.suspense = void 0 === e ? null : e;
                        try {
                            i(t)
                        } finally {
                            Xo.suspense = n
                        }
                    }))
                }), [t, e]), r
            },
            useTransition: function(t) {
                var e = _a(!1),
                    n = e[0],
                    r = e[1];
                return [Na((function(e) {
                    r(!0), o.unstable_next((function() {
                        var n = Xo.suspense;
                        Xo.suspense = void 0 === t ? null : t;
                        try {
                            r(!1), e()
                        } finally {
                            Xo.suspense = n
                        }
                    }))
                }), [t, n]), n]
            }
        },
        Ma = {
            readContext: fo,
            useCallback: ja,
            useContext: fo,
            useEffect: Ta,
            useImperativeHandle: function(t, e, n) {
                return n = null != n ? n.concat([t]) : null, xa(4, 36, ka.bind(null, e, t), n)
            },
            useLayoutEffect: function(t, e) {
                return xa(4, 36, t, e)
            },
            useMemo: function(t, e) {
                var n = ga();
                e = void 0 === e ? null : e;
                var r = n.memoizedState;
                return null !== r && null !== e && pa(e, r[1]) ? r[0] : (t = t(), n.memoizedState = [t, e], t)
            },
            useReducer: ya,
            useRef: function() {
                return ga().memoizedState
            },
            useState: wa,
            useDebugValue: Ca,
            useResponder: Qo,
            useDeferredValue: function(t, e) {
                var n = wa(),
                    r = n[0],
                    i = n[1];
                return Ta((function() {
                    o.unstable_next((function() {
                        var n = Xo.suspense;
                        Xo.suspense = void 0 === e ? null : e;
                        try {
                            i(t)
                        } finally {
                            Xo.suspense = n
                        }
                    }))
                }), [t, e]), r
            },
            useTransition: function(t) {
                var e = wa(),
                    n = e[0],
                    r = e[1];
                return [ja((function(e) {
                    r(!0), o.unstable_next((function() {
                        var n = Xo.suspense;
                        Xo.suspense = void 0 === t ? null : t;
                        try {
                            r(!1), e()
                        } finally {
                            Xo.suspense = n
                        }
                    }))
                }), [t, n]), n]
            }
        },
        Da = null,
        Ra = null,
        Fa = !1;

    function La(t, e) {
        var n = $u(5, null, null, 0);
        n.elementType = "DELETED", n.type = "DELETED", n.stateNode = e, n.return = t, n.effectTag = 8, null !== t.lastEffect ? (t.lastEffect.nextEffect = n, t.lastEffect = n) : t.firstEffect = t.lastEffect = n
    }

    function Ua(t, e) {
        switch (t.tag) {
            case 5:
                var n = t.type;
                return null !== (e = 1 !== e.nodeType || n.toLowerCase() !== e.nodeName.toLowerCase() ? null : e) && (t.stateNode = e, !0);
            case 6:
                return null !== (e = "" === t.pendingProps || 3 !== e.nodeType ? null : e) && (t.stateNode = e, !0);
            case 13:
            default:
                return !1
        }
    }

    function za(t) {
        if (Fa) {
            var e = Ra;
            if (e) {
                var n = e;
                if (!Ua(t, e)) {
                    if (!(e = ar(n.nextSibling)) || !Ua(t, e)) return t.effectTag = -1025 & t.effectTag | 2, Fa = !1, void(Da = t);
                    La(Da, n)
                }
                Da = t, Ra = ar(e.firstChild)
            } else t.effectTag = -1025 & t.effectTag | 2, Fa = !1, Da = t
        }
    }

    function Va(t) {
        for (t = t.return; null !== t && 5 !== t.tag && 3 !== t.tag && 13 !== t.tag;) t = t.return;
        Da = t
    }

    function Ba(t) {
        if (t !== Da) return !1;
        if (!Fa) return Va(t), Fa = !0, !1;
        var e = t.type;
        if (5 !== t.tag || "head" !== e && "body" !== e && !rr(e, t.memoizedProps))
            for (e = Ra; e;) La(t, e), e = ar(e.nextSibling);
        if (Va(t), 13 === t.tag) {
            if (!(t = null !== (t = t.memoizedState) ? t.dehydrated : null)) throw Error(a(317));
            t: {
                for (t = t.nextSibling, e = 0; t;) {
                    if (8 === t.nodeType) {
                        var n = t.data;
                        if (n === Jn) {
                            if (0 === e) {
                                Ra = ar(t.nextSibling);
                                break t
                            }
                            e--
                        } else n !== Qn && n !== Zn && n !== Xn || e++
                    }
                    t = t.nextSibling
                }
                Ra = null
            }
        } else Ra = Da ? ar(t.stateNode.nextSibling) : null;
        return !0
    }

    function Wa() {
        Ra = Da = null, Fa = !1
    }
    var Ga = P.ReactCurrentOwner,
        Ha = !1;

    function $a(t, e, n, r) {
        e.child = null === t ? Lo(e, null, n, r) : Fo(e, t.child, n, r)
    }

    function qa(t, e, n, r, i) {
        n = n.render;
        var o = e.ref;
        return lo(e, i), r = ha(t, e, n, r, o, i), null === t || Ha ? (e.effectTag |= 1, $a(t, e, r, i), e.child) : (e.updateQueue = t.updateQueue, e.effectTag &= -517, t.expirationTime <= i && (t.expirationTime = 0), ls(t, e, i))
    }

    function Ya(t, e, n, r, i, o) {
        if (null === t) {
            var a = n.type;
            return "function" != typeof a || qu(a) || void 0 !== a.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((t = Ku(n.type, null, r, null, e.mode, o)).ref = e.ref, t.return = e, e.child = t) : (e.tag = 15, e.type = a, Ka(t, e, a, r, i, o))
        }
        return a = t.child, i < o && (i = a.memoizedProps, (n = null !== (n = n.compare) ? n : ni)(i, r) && t.ref === e.ref) ? ls(t, e, o) : (e.effectTag |= 1, (t = Yu(a, r)).ref = e.ref, t.return = e, e.child = t)
    }

    function Ka(t, e, n, r, i, o) {
        return null !== t && ni(t.memoizedProps, r) && t.ref === e.ref && (Ha = !1, i < o) ? ls(t, e, o) : Ja(t, e, n, r, o)
    }

    function Qa(t, e) {
        var n = e.ref;
        (null === t && null !== n || null !== t && t.ref !== n) && (e.effectTag |= 128)
    }

    function Ja(t, e, n, r, i) {
        var o = _i(n) ? vi : mi.current;
        return o = yi(e, o), lo(e, i), n = ha(t, e, n, r, o, i), null === t || Ha ? (e.effectTag |= 1, $a(t, e, n, i), e.child) : (e.updateQueue = t.updateQueue, e.effectTag &= -517, t.expirationTime <= i && (t.expirationTime = 0), ls(t, e, i))
    }

    function Xa(t, e, n, r, i) {
        if (_i(n)) {
            var o = !0;
            Si(e)
        } else o = !1;
        if (lo(e, i), null === e.stateNode) null !== t && (t.alternate = null, e.alternate = null, e.effectTag |= 2), jo(e, n, r), Ao(e, n, r, i), r = !0;
        else if (null === t) {
            var a = e.stateNode,
                s = e.memoizedProps;
            a.props = s;
            var u = a.context,
                c = n.contextType;
            c = "object" == typeof c && null !== c ? fo(c) : yi(e, c = _i(n) ? vi : mi.current);
            var l = n.getDerivedStateFromProps,
                f = "function" == typeof l || "function" == typeof a.getSnapshotBeforeUpdate;
            f || "function" != typeof a.UNSAFE_componentWillReceiveProps && "function" != typeof a.componentWillReceiveProps || (s !== r || u !== c) && Io(e, a, r, c), po = !1;
            var d = e.memoizedState;
            u = a.state = d;
            var p = e.updateQueue;
            null !== p && (Eo(e, p, r, a, i), u = e.memoizedState), s !== r || d !== u || gi.current || po ? ("function" == typeof l && (ko(e, n, l, r), u = e.memoizedState), (s = po || No(e, n, s, r, d, u, c)) ? (f || "function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount || ("function" == typeof a.componentWillMount && a.componentWillMount(), "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount()), "function" == typeof a.componentDidMount && (e.effectTag |= 4)) : ("function" == typeof a.componentDidMount && (e.effectTag |= 4), e.memoizedProps = r, e.memoizedState = u), a.props = r, a.state = u, a.context = c, r = s) : ("function" == typeof a.componentDidMount && (e.effectTag |= 4), r = !1)
        } else a = e.stateNode, s = e.memoizedProps, a.props = e.type === e.elementType ? s : eo(e.type, s), u = a.context, c = "object" == typeof(c = n.contextType) && null !== c ? fo(c) : yi(e, c = _i(n) ? vi : mi.current), (f = "function" == typeof(l = n.getDerivedStateFromProps) || "function" == typeof a.getSnapshotBeforeUpdate) || "function" != typeof a.UNSAFE_componentWillReceiveProps && "function" != typeof a.componentWillReceiveProps || (s !== r || u !== c) && Io(e, a, r, c), po = !1, u = e.memoizedState, d = a.state = u, null !== (p = e.updateQueue) && (Eo(e, p, r, a, i), d = e.memoizedState), s !== r || u !== d || gi.current || po ? ("function" == typeof l && (ko(e, n, l, r), d = e.memoizedState), (l = po || No(e, n, s, r, u, d, c)) ? (f || "function" != typeof a.UNSAFE_componentWillUpdate && "function" != typeof a.componentWillUpdate || ("function" == typeof a.componentWillUpdate && a.componentWillUpdate(r, d, c), "function" == typeof a.UNSAFE_componentWillUpdate && a.UNSAFE_componentWillUpdate(r, d, c)), "function" == typeof a.componentDidUpdate && (e.effectTag |= 4), "function" == typeof a.getSnapshotBeforeUpdate && (e.effectTag |= 256)) : ("function" != typeof a.componentDidUpdate || s === t.memoizedProps && u === t.memoizedState || (e.effectTag |= 4), "function" != typeof a.getSnapshotBeforeUpdate || s === t.memoizedProps && u === t.memoizedState || (e.effectTag |= 256), e.memoizedProps = r, e.memoizedState = d), a.props = r, a.state = d, a.context = c, r = l) : ("function" != typeof a.componentDidUpdate || s === t.memoizedProps && u === t.memoizedState || (e.effectTag |= 4), "function" != typeof a.getSnapshotBeforeUpdate || s === t.memoizedProps && u === t.memoizedState || (e.effectTag |= 256), r = !1);
        return Za(t, e, n, r, o, i)
    }

    function Za(t, e, n, r, i, o) {
        Qa(t, e);
        var a = 0 != (64 & e.effectTag);
        if (!r && !a) return i && Ti(e, n, !1), ls(t, e, o);
        r = e.stateNode, Ga.current = e;
        var s = a && "function" != typeof n.getDerivedStateFromError ? null : r.render();
        return e.effectTag |= 1, null !== t && a ? (e.child = Fo(e, t.child, null, o), e.child = Fo(e, null, s, o)) : $a(t, e, s, o), e.memoizedState = r.state, i && Ti(e, n, !0), e.child
    }

    function ts(t) {
        var e = t.stateNode;
        e.pendingContext ? Oi(0, e.pendingContext, e.pendingContext !== e.context) : e.context && Oi(0, e.context, !1), Go(t, e.containerInfo)
    }
    var es, ns, rs, is, os = {
        dehydrated: null,
        retryTime: 0
    };

    function as(t, e, n) {
        var r, i = e.mode,
            o = e.pendingProps,
            a = Yo.current,
            s = !1;
        if ((r = 0 != (64 & e.effectTag)) || (r = 0 != (2 & a) && (null === t || null !== t.memoizedState)), r ? (s = !0, e.effectTag &= -65) : null !== t && null === t.memoizedState || void 0 === o.fallback || !0 === o.unstable_avoidThisFallback || (a |= 1), hi(Yo, 1 & a), null === t) {
            if (void 0 !== o.fallback && za(e), s) {
                if (s = o.fallback, (o = Qu(null, i, 0, null)).return = e, 0 == (2 & e.mode))
                    for (t = null !== e.memoizedState ? e.child.child : e.child, o.child = t; null !== t;) t.return = o, t = t.sibling;
                return (n = Qu(s, i, n, null)).return = e, o.sibling = n, e.memoizedState = os, e.child = o, n
            }
            return i = o.children, e.memoizedState = null, e.child = Lo(e, null, i, n)
        }
        if (null !== t.memoizedState) {
            if (i = (t = t.child).sibling, s) {
                if (o = o.fallback, (n = Yu(t, t.pendingProps)).return = e, 0 == (2 & e.mode) && (s = null !== e.memoizedState ? e.child.child : e.child) !== t.child)
                    for (n.child = s; null !== s;) s.return = n, s = s.sibling;
                return (i = Yu(i, o, i.expirationTime)).return = e, n.sibling = i, n.childExpirationTime = 0, e.memoizedState = os, e.child = n, i
            }
            return n = Fo(e, t.child, o.children, n), e.memoizedState = null, e.child = n
        }
        if (t = t.child, s) {
            if (s = o.fallback, (o = Qu(null, i, 0, null)).return = e, o.child = t, null !== t && (t.return = o), 0 == (2 & e.mode))
                for (t = null !== e.memoizedState ? e.child.child : e.child, o.child = t; null !== t;) t.return = o, t = t.sibling;
            return (n = Qu(s, i, n, null)).return = e, o.sibling = n, n.effectTag |= 2, o.childExpirationTime = 0, e.memoizedState = os, e.child = o, n
        }
        return e.memoizedState = null, e.child = Fo(e, t, o.children, n)
    }

    function ss(t, e) {
        t.expirationTime < e && (t.expirationTime = e);
        var n = t.alternate;
        null !== n && n.expirationTime < e && (n.expirationTime = e), co(t.return, e)
    }

    function us(t, e, n, r, i, o) {
        var a = t.memoizedState;
        null === a ? t.memoizedState = {
            isBackwards: e,
            rendering: null,
            last: r,
            tail: n,
            tailExpiration: 0,
            tailMode: i,
            lastEffect: o
        } : (a.isBackwards = e, a.rendering = null, a.last = r, a.tail = n, a.tailExpiration = 0, a.tailMode = i, a.lastEffect = o)
    }

    function cs(t, e, n) {
        var r = e.pendingProps,
            i = r.revealOrder,
            o = r.tail;
        if ($a(t, e, r.children, n), 0 != (2 & (r = Yo.current))) r = 1 & r | 2, e.effectTag |= 64;
        else {
            if (null !== t && 0 != (64 & t.effectTag)) t: for (t = e.child; null !== t;) {
                if (13 === t.tag) null !== t.memoizedState && ss(t, n);
                else if (19 === t.tag) ss(t, n);
                else if (null !== t.child) {
                    t.child.return = t, t = t.child;
                    continue
                }
                if (t === e) break t;
                for (; null === t.sibling;) {
                    if (null === t.return || t.return === e) break t;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
            r &= 1
        }
        if (hi(Yo, r), 0 == (2 & e.mode)) e.memoizedState = null;
        else switch (i) {
            case "forwards":
                for (n = e.child, i = null; null !== n;) null !== (t = n.alternate) && null === Ko(t) && (i = n), n = n.sibling;
                null === (n = i) ? (i = e.child, e.child = null) : (i = n.sibling, n.sibling = null), us(e, !1, i, n, o, e.lastEffect);
                break;
            case "backwards":
                for (n = null, i = e.child, e.child = null; null !== i;) {
                    if (null !== (t = i.alternate) && null === Ko(t)) {
                        e.child = i;
                        break
                    }
                    t = i.sibling, i.sibling = n, n = i, i = t
                }
                us(e, !0, n, null, o, e.lastEffect);
                break;
            case "together":
                us(e, !1, null, null, void 0, e.lastEffect);
                break;
            default:
                e.memoizedState = null
        }
        return e.child
    }

    function ls(t, e, n) {
        null !== t && (e.dependencies = t.dependencies);
        var r = e.expirationTime;
        if (0 !== r && Cu(r), e.childExpirationTime < n) return null;
        if (null !== t && e.child !== t.child) throw Error(a(153));
        if (null !== e.child) {
            for (n = Yu(t = e.child, t.pendingProps, t.expirationTime), e.child = n, n.return = e; null !== t.sibling;) t = t.sibling, (n = n.sibling = Yu(t, t.pendingProps, t.expirationTime)).return = e;
            n.sibling = null
        }
        return e.child
    }

    function fs(t) {
        t.effectTag |= 4
    }

    function ds(t, e) {
        switch (t.tailMode) {
            case "hidden":
                e = t.tail;
                for (var n = null; null !== e;) null !== e.alternate && (n = e), e = e.sibling;
                null === n ? t.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = t.tail;
                for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                null === r ? e || null === t.tail ? t.tail = null : t.tail.sibling = null : r.sibling = null
        }
    }

    function ps(t) {
        switch (t.tag) {
            case 1:
                _i(t.type) && wi();
                var e = t.effectTag;
                return 4096 & e ? (t.effectTag = -4097 & e | 64, t) : null;
            case 3:
                if (Ho(), Ei(), 0 != (64 & (e = t.effectTag))) throw Error(a(285));
                return t.effectTag = -4097 & e | 64, t;
            case 5:
                return qo(t), null;
            case 13:
                return pi(Yo), 4096 & (e = t.effectTag) ? (t.effectTag = -4097 & e | 64, t) : null;
            case 19:
                return pi(Yo), null;
            case 4:
                return Ho(), null;
            case 10:
                return uo(t), null;
            default:
                return null
        }
    }

    function hs(t, e) {
        return {
            value: t,
            source: e,
            stack: X(e)
        }
    }
    es = function(t, e) {
        for (var n = e.child; null !== n;) {
            if (5 === n.tag || 6 === n.tag) t.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
                n.child.return = n, n = n.child;
                continue
            }
            if (n === e) break;
            for (; null === n.sibling;) {
                if (null === n.return || n.return === e) return;
                n = n.return
            }
            n.sibling.return = n.return, n = n.sibling
        }
    }, ns = function() {}, rs = function(t, e, n, r, o) {
        var a = t.memoizedProps;
        if (a !== r) {
            var s, u, c = e.stateNode;
            switch (Wo(zo.current), t = null, n) {
                case "input":
                    a = Tt(c, a), r = Tt(c, r), t = [];
                    break;
                case "option":
                    a = At(c, a), r = At(c, r), t = [];
                    break;
                case "select":
                    a = i({}, a, {
                        value: void 0
                    }), r = i({}, r, {
                        value: void 0
                    }), t = [];
                    break;
                case "textarea":
                    a = Mt(c, a), r = Mt(c, r), t = [];
                    break;
                default:
                    "function" != typeof a.onClick && "function" == typeof r.onClick && (c.onclick = Gn)
            }
            for (s in Vn(n, r), n = null, a)
                if (!r.hasOwnProperty(s) && a.hasOwnProperty(s) && null != a[s])
                    if ("style" === s)
                        for (u in c = a[s]) c.hasOwnProperty(u) && (n || (n = {}), n[u] = "");
                    else "dangerouslySetInnerHTML" !== s && "children" !== s && "suppressContentEditableWarning" !== s && "suppressHydrationWarning" !== s && "autoFocus" !== s && (p.hasOwnProperty(s) ? t || (t = []) : (t = t || []).push(s, null));
            for (s in r) {
                var l = r[s];
                if (c = null != a ? a[s] : void 0, r.hasOwnProperty(s) && l !== c && (null != l || null != c))
                    if ("style" === s)
                        if (c) {
                            for (u in c) !c.hasOwnProperty(u) || l && l.hasOwnProperty(u) || (n || (n = {}), n[u] = "");
                            for (u in l) l.hasOwnProperty(u) && c[u] !== l[u] && (n || (n = {}), n[u] = l[u])
                        } else n || (t || (t = []), t.push(s, n)), n = l;
                else "dangerouslySetInnerHTML" === s ? (l = l ? l.__html : void 0, c = c ? c.__html : void 0, null != l && c !== l && (t = t || []).push(s, "" + l)) : "children" === s ? c === l || "string" != typeof l && "number" != typeof l || (t = t || []).push(s, "" + l) : "suppressContentEditableWarning" !== s && "suppressHydrationWarning" !== s && (p.hasOwnProperty(s) ? (null != l && Wn(o, s), t || c === l || (t = [])) : (t = t || []).push(s, l))
            }
            n && (t = t || []).push("style", n), o = t, (e.updateQueue = o) && fs(e)
        }
    }, is = function(t, e, n, r) {
        n !== r && fs(e)
    };
    var bs = "function" == typeof WeakSet ? WeakSet : Set;

    function ms(t, e) {
        var n = e.source,
            r = e.stack;
        null === r && null !== n && (r = X(n)), null !== n && J(n.type), e = e.value, null !== t && 1 === t.tag && J(t.type);
        try {
            console.error(e)
        } catch (t) {
            setTimeout((function() {
                throw t
            }))
        }
    }

    function gs(t) {
        var e = t.ref;
        if (null !== e)
            if ("function" == typeof e) try {
                e(null)
            } catch (e) {
                zu(t, e)
            } else e.current = null
    }

    function vs(t, e) {
        switch (e.tag) {
            case 0:
            case 11:
            case 15:
                ys(2, 0, e);
                break;
            case 1:
                if (256 & e.effectTag && null !== t) {
                    var n = t.memoizedProps,
                        r = t.memoizedState;
                    e = (t = e.stateNode).getSnapshotBeforeUpdate(e.elementType === e.type ? n : eo(e.type, n), r), t.__reactInternalSnapshotBeforeUpdate = e
                }
                break;
            case 3:
            case 5:
            case 6:
            case 4:
            case 17:
                break;
            default:
                throw Error(a(163))
        }
    }

    function ys(t, e, n) {
        if (null !== (n = null !== (n = n.updateQueue) ? n.lastEffect : null)) {
            var r = n = n.next;
            do {
                if (0 != (r.tag & t)) {
                    var i = r.destroy;
                    r.destroy = void 0, void 0 !== i && i()
                }
                0 != (r.tag & e) && (i = r.create, r.destroy = i()), r = r.next
            } while (r !== n)
        }
    }

    function _s(t, e, n) {
        switch ("function" == typeof Gu && Gu(e), e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                if (null !== (t = e.updateQueue) && null !== (t = t.lastEffect)) {
                    var r = t.next;
                    Yi(97 < n ? 97 : n, (function() {
                        var t = r;
                        do {
                            var n = t.destroy;
                            if (void 0 !== n) {
                                var i = e;
                                try {
                                    n()
                                } catch (t) {
                                    zu(i, t)
                                }
                            }
                            t = t.next
                        } while (t !== r)
                    }))
                }
                break;
            case 1:
                gs(e), "function" == typeof(n = e.stateNode).componentWillUnmount && function(t, e) {
                    try {
                        e.props = t.memoizedProps, e.state = t.memoizedState, e.componentWillUnmount()
                    } catch (e) {
                        zu(t, e)
                    }
                }(e, n);
                break;
            case 5:
                gs(e);
                break;
            case 4:
                xs(t, e, n)
        }
    }

    function ws(t) {
        var e = t.alternate;
        t.return = null, t.child = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.alternate = null, t.firstEffect = null, t.lastEffect = null, t.pendingProps = null, t.memoizedProps = null, null !== e && ws(e)
    }

    function Es(t) {
        return 5 === t.tag || 3 === t.tag || 4 === t.tag
    }

    function Os(t) {
        t: {
            for (var e = t.return; null !== e;) {
                if (Es(e)) {
                    var n = e;
                    break t
                }
                e = e.return
            }
            throw Error(a(160))
        }
        switch (e = n.stateNode, n.tag) {
            case 5:
                var r = !1;
                break;
            case 3:
            case 4:
                e = e.containerInfo, r = !0;
                break;
            default:
                throw Error(a(161))
        }
        16 & n.effectTag && (Wt(e, ""), n.effectTag &= -17);t: e: for (n = t;;) {
            for (; null === n.sibling;) {
                if (null === n.return || Es(n.return)) {
                    n = null;
                    break t
                }
                n = n.return
            }
            for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag;) {
                if (2 & n.effectTag) continue e;
                if (null === n.child || 4 === n.tag) continue e;
                n.child.return = n, n = n.child
            }
            if (!(2 & n.effectTag)) {
                n = n.stateNode;
                break t
            }
        }
        for (var i = t;;) {
            var o = 5 === i.tag || 6 === i.tag;
            if (o) {
                var s = o ? i.stateNode : i.stateNode.instance;
                if (n)
                    if (r) {
                        var u = s;
                        s = n, 8 === (o = e).nodeType ? o.parentNode.insertBefore(u, s) : o.insertBefore(u, s)
                    } else e.insertBefore(s, n);
                else r ? (8 === (u = e).nodeType ? (o = u.parentNode).insertBefore(s, u) : (o = u).appendChild(s), null != (u = u._reactRootContainer) || null !== o.onclick || (o.onclick = Gn)) : e.appendChild(s)
            } else if (4 !== i.tag && null !== i.child) {
                i.child.return = i, i = i.child;
                continue
            }
            if (i === t) break;
            for (; null === i.sibling;) {
                if (null === i.return || i.return === t) return;
                i = i.return
            }
            i.sibling.return = i.return, i = i.sibling
        }
    }

    function xs(t, e, n) {
        for (var r, i, o = e, s = !1;;) {
            if (!s) {
                s = o.return;
                t: for (;;) {
                    if (null === s) throw Error(a(160));
                    switch (r = s.stateNode, s.tag) {
                        case 5:
                            i = !1;
                            break t;
                        case 3:
                        case 4:
                            r = r.containerInfo, i = !0;
                            break t
                    }
                    s = s.return
                }
                s = !0
            }
            if (5 === o.tag || 6 === o.tag) {
                t: for (var u = t, c = o, l = n, f = c;;)
                    if (_s(u, f, l), null !== f.child && 4 !== f.tag) f.child.return = f, f = f.child;
                    else {
                        if (f === c) break;
                        for (; null === f.sibling;) {
                            if (null === f.return || f.return === c) break t;
                            f = f.return
                        }
                        f.sibling.return = f.return, f = f.sibling
                    }i ? (u = r, c = o.stateNode, 8 === u.nodeType ? u.parentNode.removeChild(c) : u.removeChild(c)) : r.removeChild(o.stateNode)
            }
            else if (4 === o.tag) {
                if (null !== o.child) {
                    r = o.stateNode.containerInfo, i = !0, o.child.return = o, o = o.child;
                    continue
                }
            } else if (_s(t, o, n), null !== o.child) {
                o.child.return = o, o = o.child;
                continue
            }
            if (o === e) break;
            for (; null === o.sibling;) {
                if (null === o.return || o.return === e) return;
                4 === (o = o.return).tag && (s = !1)
            }
            o.sibling.return = o.return, o = o.sibling
        }
    }

    function Ss(t, e) {
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                ys(4, 8, e);
                break;
            case 1:
                break;
            case 5:
                var n = e.stateNode;
                if (null != n) {
                    var r = e.memoizedProps,
                        i = null !== t ? t.memoizedProps : r;
                    t = e.type;
                    var o = e.updateQueue;
                    if (e.updateQueue = null, null !== o) {
                        for (n[lr] = r, "input" === t && "radio" === r.type && null != r.name && Ct(n, r), Bn(t, i), e = Bn(t, r), i = 0; i < o.length; i += 2) {
                            var s = o[i],
                                u = o[i + 1];
                            "style" === s ? Un(n, u) : "dangerouslySetInnerHTML" === s ? Bt(n, u) : "children" === s ? Wt(n, u) : Et(n, s, u, e)
                        }
                        switch (t) {
                            case "input":
                                Nt(n, r);
                                break;
                            case "textarea":
                                Rt(n, r);
                                break;
                            case "select":
                                e = n._wrapperState.wasMultiple, n._wrapperState.wasMultiple = !!r.multiple, null != (t = r.value) ? Pt(n, !!r.multiple, t, !1) : e !== !!r.multiple && (null != r.defaultValue ? Pt(n, !!r.multiple, r.defaultValue, !0) : Pt(n, !!r.multiple, r.multiple ? [] : "", !1))
                        }
                    }
                }
                break;
            case 6:
                if (null === e.stateNode) throw Error(a(162));
                e.stateNode.nodeValue = e.memoizedProps;
                break;
            case 3:
                (e = e.stateNode).hydrate && (e.hydrate = !1, Se(e.containerInfo));
                break;
            case 12:
                break;
            case 13:
                if (n = e, null === e.memoizedState ? r = !1 : (r = !0, n = e.child, eu = Hi()), null !== n) t: for (t = n;;) {
                    if (5 === t.tag) o = t.stateNode, r ? "function" == typeof(o = o.style).setProperty ? o.setProperty("display", "none", "important") : o.display = "none" : (o = t.stateNode, i = null != (i = t.memoizedProps.style) && i.hasOwnProperty("display") ? i.display : null, o.style.display = Ln("display", i));
                    else if (6 === t.tag) t.stateNode.nodeValue = r ? "" : t.memoizedProps;
                    else {
                        if (13 === t.tag && null !== t.memoizedState && null === t.memoizedState.dehydrated) {
                            (o = t.child.sibling).return = t, t = o;
                            continue
                        }
                        if (null !== t.child) {
                            t.child.return = t, t = t.child;
                            continue
                        }
                    }
                    if (t === n) break t;
                    for (; null === t.sibling;) {
                        if (null === t.return || t.return === n) break t;
                        t = t.return
                    }
                    t.sibling.return = t.return, t = t.sibling
                }
                Ts(e);
                break;
            case 19:
                Ts(e);
                break;
            case 17:
            case 20:
            case 21:
                break;
            default:
                throw Error(a(163))
        }
    }

    function Ts(t) {
        var e = t.updateQueue;
        if (null !== e) {
            t.updateQueue = null;
            var n = t.stateNode;
            null === n && (n = t.stateNode = new bs), e.forEach((function(e) {
                var r = Bu.bind(null, t, e);
                n.has(e) || (n.add(e), e.then(r, r))
            }))
        }
    }
    var ks = "function" == typeof WeakMap ? WeakMap : Map;

    function Cs(t, e, n) {
        (n = mo(n, null)).tag = 3, n.payload = {
            element: null
        };
        var r = e.value;
        return n.callback = function() {
            iu || (iu = !0, ou = r), ms(t, e)
        }, n
    }

    function Ns(t, e, n) {
        (n = mo(n, null)).tag = 3;
        var r = t.type.getDerivedStateFromError;
        if ("function" == typeof r) {
            var i = e.value;
            n.payload = function() {
                return ms(t, e), r(i)
            }
        }
        var o = t.stateNode;
        return null !== o && "function" == typeof o.componentDidCatch && (n.callback = function() {
            "function" != typeof r && (null === au ? au = new Set([this]) : au.add(this), ms(t, e));
            var n = e.stack;
            this.componentDidCatch(e.value, {
                componentStack: null !== n ? n : ""
            })
        }), n
    }
    var js, Is = Math.ceil,
        As = P.ReactCurrentDispatcher,
        Ps = P.ReactCurrentOwner,
        Ms = 0,
        Ds = 8,
        Rs = 16,
        Fs = 32,
        Ls = 0,
        Us = 1,
        zs = 2,
        Vs = 3,
        Bs = 4,
        Ws = 5,
        Gs = Ms,
        Hs = null,
        $s = null,
        qs = 0,
        Ys = Ls,
        Ks = null,
        Qs = 1073741823,
        Js = 1073741823,
        Xs = null,
        Zs = 0,
        tu = !1,
        eu = 0,
        nu = 500,
        ru = null,
        iu = !1,
        ou = null,
        au = null,
        su = !1,
        uu = null,
        cu = 90,
        lu = null,
        fu = 0,
        du = null,
        pu = 0;

    function hu() {
        return (Gs & (Rs | Fs)) !== Ms ? 1073741821 - (Hi() / 10 | 0) : 0 !== pu ? pu : pu = 1073741821 - (Hi() / 10 | 0)
    }

    function bu(t, e, n) {
        if (0 == (2 & (e = e.mode))) return 1073741823;
        var r = $i();
        if (0 == (4 & e)) return 99 === r ? 1073741823 : 1073741822;
        if ((Gs & Rs) !== Ms) return qs;
        if (null !== n) t = to(t, 0 | n.timeoutMs || 5e3, 250);
        else switch (r) {
            case 99:
                t = 1073741823;
                break;
            case 98:
                t = to(t, 150, 100);
                break;
            case 97:
            case 96:
                t = to(t, 5e3, 250);
                break;
            case 95:
                t = 2;
                break;
            default:
                throw Error(a(326))
        }
        return null !== Hs && t === qs && --t, t
    }

    function mu(t, e) {
        if (50 < fu) throw fu = 0, du = null, Error(a(185));
        if (null !== (t = gu(t, e))) {
            var n = $i();
            1073741823 === e ? (Gs & Ds) !== Ms && (Gs & (Rs | Fs)) === Ms ? wu(t) : (yu(t), Gs === Ms && Ji()) : yu(t), (4 & Gs) === Ms || 98 !== n && 99 !== n || (null === lu ? lu = new Map([
                [t, e]
            ]) : (void 0 === (n = lu.get(t)) || n > e) && lu.set(t, e))
        }
    }

    function gu(t, e) {
        t.expirationTime < e && (t.expirationTime = e);
        var n = t.alternate;
        null !== n && n.expirationTime < e && (n.expirationTime = e);
        var r = t.return,
            i = null;
        if (null === r && 3 === t.tag) i = t.stateNode;
        else
            for (; null !== r;) {
                if (n = r.alternate, r.childExpirationTime < e && (r.childExpirationTime = e), null !== n && n.childExpirationTime < e && (n.childExpirationTime = e), null === r.return && 3 === r.tag) {
                    i = r.stateNode;
                    break
                }
                r = r.return
            }
        return null !== i && (Hs === i && (Cu(e), Ys === Bs && ec(i, qs)), nc(i, e)), i
    }

    function vu(t) {
        var e = t.lastExpiredTime;
        return 0 !== e ? e : tc(t, e = t.firstPendingTime) ? (e = t.lastPingedTime) > (t = t.nextKnownPendingLevel) ? e : t : e
    }

    function yu(t) {
        if (0 !== t.lastExpiredTime) t.callbackExpirationTime = 1073741823, t.callbackPriority = 99, t.callbackNode = Qi(wu.bind(null, t));
        else {
            var e = vu(t),
                n = t.callbackNode;
            if (0 === e) null !== n && (t.callbackNode = null, t.callbackExpirationTime = 0, t.callbackPriority = 90);
            else {
                var r = hu();
                if (r = 1073741823 === e ? 99 : 1 === e || 2 === e ? 95 : 0 >= (r = 10 * (1073741821 - e) - 10 * (1073741821 - r)) ? 99 : 250 >= r ? 98 : 5250 >= r ? 97 : 95, null !== n) {
                    var i = t.callbackPriority;
                    if (t.callbackExpirationTime === e && i >= r) return;
                    n !== Ui && Ni(n)
                }
                t.callbackExpirationTime = e, t.callbackPriority = r, e = 1073741823 === e ? Qi(wu.bind(null, t)) : Ki(r, _u.bind(null, t), {
                    timeout: 10 * (1073741821 - e) - Hi()
                }), t.callbackNode = e
            }
        }
    }

    function _u(t, e) {
        if (pu = 0, e) return rc(t, e = hu()), yu(t), null;
        var n = vu(t);
        if (0 !== n) {
            if (e = t.callbackNode, (Gs & (Rs | Fs)) !== Ms) throw Error(a(327));
            if (Fu(), t === Hs && n === qs || xu(t, n), null !== $s) {
                var r = Gs;
                Gs |= Rs;
                for (var i = Tu();;) try {
                    ju();
                    break
                } catch (e) {
                    Su(t, e)
                }
                if (ao(), Gs = r, As.current = i, Ys === Us) throw e = Ks, xu(t, n), ec(t, n), yu(t), e;
                if (null === $s) switch (i = t.finishedWork = t.current.alternate, t.finishedExpirationTime = n, r = Ys, Hs = null, r) {
                    case Ls:
                    case Us:
                        throw Error(a(345));
                    case zs:
                        rc(t, 2 < n ? 2 : n);
                        break;
                    case Vs:
                        if (ec(t, n), n === (r = t.lastSuspendedTime) && (t.nextKnownPendingLevel = Pu(i)), 1073741823 === Qs && 10 < (i = eu + nu - Hi())) {
                            if (tu) {
                                var o = t.lastPingedTime;
                                if (0 === o || o >= n) {
                                    t.lastPingedTime = n, xu(t, n);
                                    break
                                }
                            }
                            if (0 !== (o = vu(t)) && o !== n) break;
                            if (0 !== r && r !== n) {
                                t.lastPingedTime = r;
                                break
                            }
                            t.timeoutHandle = ir(Mu.bind(null, t), i);
                            break
                        }
                        Mu(t);
                        break;
                    case Bs:
                        if (ec(t, n), n === (r = t.lastSuspendedTime) && (t.nextKnownPendingLevel = Pu(i)), tu && (0 === (i = t.lastPingedTime) || i >= n)) {
                            t.lastPingedTime = n, xu(t, n);
                            break
                        }
                        if (0 !== (i = vu(t)) && i !== n) break;
                        if (0 !== r && r !== n) {
                            t.lastPingedTime = r;
                            break
                        }
                        if (1073741823 !== Js ? r = 10 * (1073741821 - Js) - Hi() : 1073741823 === Qs ? r = 0 : (r = 10 * (1073741821 - Qs) - 5e3, 0 > (r = (i = Hi()) - r) && (r = 0), (n = 10 * (1073741821 - n) - i) < (r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Is(r / 1960)) - r) && (r = n)), 10 < r) {
                            t.timeoutHandle = ir(Mu.bind(null, t), r);
                            break
                        }
                        Mu(t);
                        break;
                    case Ws:
                        if (1073741823 !== Qs && null !== Xs) {
                            o = Qs;
                            var s = Xs;
                            if (0 >= (r = 0 | s.busyMinDurationMs) ? r = 0 : (i = 0 | s.busyDelayMs, r = (o = Hi() - (10 * (1073741821 - o) - (0 | s.timeoutMs || 5e3))) <= i ? 0 : i + r - o), 10 < r) {
                                ec(t, n), t.timeoutHandle = ir(Mu.bind(null, t), r);
                                break
                            }
                        }
                        Mu(t);
                        break;
                    default:
                        throw Error(a(329))
                }
                if (yu(t), t.callbackNode === e) return _u.bind(null, t)
            }
        }
        return null
    }

    function wu(t) {
        var e = t.lastExpiredTime;
        if (e = 0 !== e ? e : 1073741823, t.finishedExpirationTime === e) Mu(t);
        else {
            if ((Gs & (Rs | Fs)) !== Ms) throw Error(a(327));
            if (Fu(), t === Hs && e === qs || xu(t, e), null !== $s) {
                var n = Gs;
                Gs |= Rs;
                for (var r = Tu();;) try {
                    Nu();
                    break
                } catch (e) {
                    Su(t, e)
                }
                if (ao(), Gs = n, As.current = r, Ys === Us) throw n = Ks, xu(t, e), ec(t, e), yu(t), n;
                if (null !== $s) throw Error(a(261));
                t.finishedWork = t.current.alternate, t.finishedExpirationTime = e, Hs = null, Mu(t), yu(t)
            }
        }
        return null
    }

    function Eu(t, e) {
        var n = Gs;
        Gs |= 1;
        try {
            return t(e)
        } finally {
            (Gs = n) === Ms && Ji()
        }
    }

    function Ou(t, e) {
        var n = Gs;
        Gs &= -2, Gs |= Ds;
        try {
            return t(e)
        } finally {
            (Gs = n) === Ms && Ji()
        }
    }

    function xu(t, e) {
        t.finishedWork = null, t.finishedExpirationTime = 0;
        var n = t.timeoutHandle;
        if (-1 !== n && (t.timeoutHandle = -1, or(n)), null !== $s)
            for (n = $s.return; null !== n;) {
                var r = n;
                switch (r.tag) {
                    case 1:
                        null != r.type.childContextTypes && wi();
                        break;
                    case 3:
                        Ho(), Ei();
                        break;
                    case 5:
                        qo(r);
                        break;
                    case 4:
                        Ho();
                        break;
                    case 13:
                    case 19:
                        pi(Yo);
                        break;
                    case 10:
                        uo(r)
                }
                n = n.return
            }
        Hs = t, $s = Yu(t.current, null), qs = e, Ys = Ls, Ks = null, Js = Qs = 1073741823, Xs = null, Zs = 0, tu = !1
    }

    function Su(t, e) {
        for (;;) {
            try {
                if (ao(), ba(), null === $s || null === $s.return) return Ys = Us, Ks = e, null;
                t: {
                    var n = t,
                        r = $s.return,
                        i = $s,
                        o = e;
                    if (e = qs, i.effectTag |= 2048, i.firstEffect = i.lastEffect = null, null !== o && "object" == typeof o && "function" == typeof o.then) {
                        var a = o,
                            s = 0 != (1 & Yo.current),
                            u = r;
                        do {
                            var c;
                            if (c = 13 === u.tag) {
                                var l = u.memoizedState;
                                if (null !== l) c = null !== l.dehydrated;
                                else {
                                    var f = u.memoizedProps;
                                    c = void 0 !== f.fallback && (!0 !== f.unstable_avoidThisFallback || !s)
                                }
                            }
                            if (c) {
                                var d = u.updateQueue;
                                if (null === d) {
                                    var p = new Set;
                                    p.add(a), u.updateQueue = p
                                } else d.add(a);
                                if (0 == (2 & u.mode)) {
                                    if (u.effectTag |= 64, i.effectTag &= -2981, 1 === i.tag)
                                        if (null === i.alternate) i.tag = 17;
                                        else {
                                            var h = mo(1073741823, null);
                                            h.tag = 2, vo(i, h)
                                        } i.expirationTime = 1073741823;
                                    break t
                                }
                                o = void 0, i = e;
                                var b = n.pingCache;
                                if (null === b ? (b = n.pingCache = new ks, o = new Set, b.set(a, o)) : void 0 === (o = b.get(a)) && (o = new Set, b.set(a, o)), !o.has(i)) {
                                    o.add(i);
                                    var m = Vu.bind(null, n, a, i);
                                    a.then(m, m)
                                }
                                u.effectTag |= 4096, u.expirationTime = e;
                                break t
                            }
                            u = u.return
                        } while (null !== u);
                        o = Error((J(i.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + X(i))
                    }
                    Ys !== Ws && (Ys = zs),
                    o = hs(o, i),
                    u = r;do {
                        switch (u.tag) {
                            case 3:
                                a = o, u.effectTag |= 4096, u.expirationTime = e, yo(u, Cs(u, a, e));
                                break t;
                            case 1:
                                a = o;
                                var g = u.type,
                                    v = u.stateNode;
                                if (0 == (64 & u.effectTag) && ("function" == typeof g.getDerivedStateFromError || null !== v && "function" == typeof v.componentDidCatch && (null === au || !au.has(v)))) {
                                    u.effectTag |= 4096, u.expirationTime = e, yo(u, Ns(u, a, e));
                                    break t
                                }
                        }
                        u = u.return
                    } while (null !== u)
                }
                $s = Au($s)
            } catch (t) {
                e = t;
                continue
            }
            break
        }
    }

    function Tu() {
        var t = As.current;
        return As.current = Aa, null === t ? Aa : t
    }

    function ku(t, e) {
        t < Qs && 2 < t && (Qs = t), null !== e && t < Js && 2 < t && (Js = t, Xs = e)
    }

    function Cu(t) {
        t > Zs && (Zs = t)
    }

    function Nu() {
        for (; null !== $s;) $s = Iu($s)
    }

    function ju() {
        for (; null !== $s && !ji();) $s = Iu($s)
    }

    function Iu(t) {
        var e = js(t.alternate, t, qs);
        return t.memoizedProps = t.pendingProps, null === e && (e = Au(t)), Ps.current = null, e
    }

    function Au(t) {
        $s = t;
        do {
            var e = $s.alternate;
            if (t = $s.return, 0 == (2048 & $s.effectTag)) {
                t: {
                    var n = e,
                        r = qs,
                        o = (e = $s).pendingProps;
                    switch (e.tag) {
                        case 2:
                        case 16:
                            break;
                        case 15:
                        case 0:
                            break;
                        case 1:
                            _i(e.type) && wi();
                            break;
                        case 3:
                            Ho(), Ei(), (o = e.stateNode).pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (null === n || null === n.child) && Ba(e) && fs(e), ns(e);
                            break;
                        case 5:
                            qo(e), r = Wo(Bo.current);
                            var s = e.type;
                            if (null !== n && null != e.stateNode) rs(n, e, s, o, r), n.ref !== e.ref && (e.effectTag |= 128);
                            else if (o) {
                                var u = Wo(zo.current);
                                if (Ba(e)) {
                                    var c = (o = e).stateNode;
                                    n = o.type;
                                    var l = o.memoizedProps,
                                        f = r;
                                    switch (c[cr] = o, c[lr] = l, s = void 0, r = c, n) {
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            Sn("load", r);
                                            break;
                                        case "video":
                                        case "audio":
                                            for (c = 0; c < Zt.length; c++) Sn(Zt[c], r);
                                            break;
                                        case "source":
                                            Sn("error", r);
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            Sn("error", r), Sn("load", r);
                                            break;
                                        case "form":
                                            Sn("reset", r), Sn("submit", r);
                                            break;
                                        case "details":
                                            Sn("toggle", r);
                                            break;
                                        case "input":
                                            kt(r, l), Sn("invalid", r), Wn(f, "onChange");
                                            break;
                                        case "select":
                                            r._wrapperState = {
                                                wasMultiple: !!l.multiple
                                            }, Sn("invalid", r), Wn(f, "onChange");
                                            break;
                                        case "textarea":
                                            Dt(r, l), Sn("invalid", r), Wn(f, "onChange")
                                    }
                                    for (s in Vn(n, l), c = null, l) l.hasOwnProperty(s) && (u = l[s], "children" === s ? "string" == typeof u ? r.textContent !== u && (c = ["children", u]) : "number" == typeof u && r.textContent !== "" + u && (c = ["children", "" + u]) : p.hasOwnProperty(s) && null != u && Wn(f, s));
                                    switch (n) {
                                        case "input":
                                            xt(r), jt(r, l, !0);
                                            break;
                                        case "textarea":
                                            xt(r), Ft(r);
                                            break;
                                        case "select":
                                        case "option":
                                            break;
                                        default:
                                            "function" == typeof l.onClick && (r.onclick = Gn)
                                    }
                                    s = c, o.updateQueue = s, (o = null !== s) && fs(e)
                                } else {
                                    n = e, f = s, l = o, c = 9 === r.nodeType ? r : r.ownerDocument, u === Lt.html && (u = Ut(f)), u === Lt.html ? "script" === f ? ((l = c.createElement("div")).innerHTML = "<script><\/script>", c = l.removeChild(l.firstChild)) : "string" == typeof l.is ? c = c.createElement(f, {
                                        is: l.is
                                    }) : (c = c.createElement(f), "select" === f && (f = c, l.multiple ? f.multiple = !0 : l.size && (f.size = l.size))) : c = c.createElementNS(u, f), (l = c)[cr] = n, l[lr] = o, es(l, e, !1, !1), e.stateNode = l;
                                    var d = r,
                                        h = Bn(f = s, n = o);
                                    switch (f) {
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            Sn("load", l), r = n;
                                            break;
                                        case "video":
                                        case "audio":
                                            for (r = 0; r < Zt.length; r++) Sn(Zt[r], l);
                                            r = n;
                                            break;
                                        case "source":
                                            Sn("error", l), r = n;
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            Sn("error", l), Sn("load", l), r = n;
                                            break;
                                        case "form":
                                            Sn("reset", l), Sn("submit", l), r = n;
                                            break;
                                        case "details":
                                            Sn("toggle", l), r = n;
                                            break;
                                        case "input":
                                            kt(l, n), r = Tt(l, n), Sn("invalid", l), Wn(d, "onChange");
                                            break;
                                        case "option":
                                            r = At(l, n);
                                            break;
                                        case "select":
                                            l._wrapperState = {
                                                wasMultiple: !!n.multiple
                                            }, r = i({}, n, {
                                                value: void 0
                                            }), Sn("invalid", l), Wn(d, "onChange");
                                            break;
                                        case "textarea":
                                            Dt(l, n), r = Mt(l, n), Sn("invalid", l), Wn(d, "onChange");
                                            break;
                                        default:
                                            r = n
                                    }
                                    Vn(f, r), c = void 0, u = f;
                                    var b = l,
                                        m = r;
                                    for (c in m)
                                        if (m.hasOwnProperty(c)) {
                                            var g = m[c];
                                            "style" === c ? Un(b, g) : "dangerouslySetInnerHTML" === c ? null != (g = g ? g.__html : void 0) && Bt(b, g) : "children" === c ? "string" == typeof g ? ("textarea" !== u || "" !== g) && Wt(b, g) : "number" == typeof g && Wt(b, "" + g) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (p.hasOwnProperty(c) ? null != g && Wn(d, c) : null != g && Et(b, c, g, h))
                                        } switch (f) {
                                        case "input":
                                            xt(l), jt(l, n, !1);
                                            break;
                                        case "textarea":
                                            xt(l), Ft(l);
                                            break;
                                        case "option":
                                            null != n.value && l.setAttribute("value", "" + wt(n.value));
                                            break;
                                        case "select":
                                            (r = l).multiple = !!n.multiple, null != (l = n.value) ? Pt(r, !!n.multiple, l, !1) : null != n.defaultValue && Pt(r, !!n.multiple, n.defaultValue, !0);
                                            break;
                                        default:
                                            "function" == typeof r.onClick && (l.onclick = Gn)
                                    }(o = nr(s, o)) && fs(e)
                                }
                                null !== e.ref && (e.effectTag |= 128)
                            } else if (null === e.stateNode) throw Error(a(166));
                            break;
                        case 6:
                            if (n && null != e.stateNode) is(n, e, n.memoizedProps, o);
                            else {
                                if ("string" != typeof o && null === e.stateNode) throw Error(a(166));
                                r = Wo(Bo.current), Wo(zo.current), Ba(e) ? (s = (o = e).stateNode, r = o.memoizedProps, s[cr] = o, (o = s.nodeValue !== r) && fs(e)) : (s = e, (o = (9 === r.nodeType ? r : r.ownerDocument).createTextNode(o))[cr] = s, e.stateNode = o)
                            }
                            break;
                        case 11:
                            break;
                        case 13:
                            if (pi(Yo), o = e.memoizedState, 0 != (64 & e.effectTag)) {
                                e.expirationTime = r;
                                break t
                            }
                            o = null !== o, s = !1, null === n ? void 0 !== e.memoizedProps.fallback && Ba(e) : (s = null !== (r = n.memoizedState), o || null === r || null !== (r = n.child.sibling) && (null !== (l = e.firstEffect) ? (e.firstEffect = r, r.nextEffect = l) : (e.firstEffect = e.lastEffect = r, r.nextEffect = null), r.effectTag = 8)), o && !s && 0 != (2 & e.mode) && (null === n && !0 !== e.memoizedProps.unstable_avoidThisFallback || 0 != (1 & Yo.current) ? Ys === Ls && (Ys = Vs) : (Ys !== Ls && Ys !== Vs || (Ys = Bs), 0 !== Zs && null !== Hs && (ec(Hs, qs), nc(Hs, Zs)))), (o || s) && (e.effectTag |= 4);
                            break;
                        case 7:
                        case 8:
                        case 12:
                            break;
                        case 4:
                            Ho(), ns(e);
                            break;
                        case 10:
                            uo(e);
                            break;
                        case 9:
                        case 14:
                            break;
                        case 17:
                            _i(e.type) && wi();
                            break;
                        case 19:
                            if (pi(Yo), null === (o = e.memoizedState)) break;
                            if (s = 0 != (64 & e.effectTag), null === (l = o.rendering)) {
                                if (s) ds(o, !1);
                                else if (Ys !== Ls || null !== n && 0 != (64 & n.effectTag))
                                    for (n = e.child; null !== n;) {
                                        if (null !== (l = Ko(n))) {
                                            for (e.effectTag |= 64, ds(o, !1), null !== (s = l.updateQueue) && (e.updateQueue = s, e.effectTag |= 4), null === o.lastEffect && (e.firstEffect = null), e.lastEffect = o.lastEffect, o = r, s = e.child; null !== s;) n = o, (r = s).effectTag &= 2, r.nextEffect = null, r.firstEffect = null, r.lastEffect = null, null === (l = r.alternate) ? (r.childExpirationTime = 0, r.expirationTime = n, r.child = null, r.memoizedProps = null, r.memoizedState = null, r.updateQueue = null, r.dependencies = null) : (r.childExpirationTime = l.childExpirationTime, r.expirationTime = l.expirationTime, r.child = l.child, r.memoizedProps = l.memoizedProps, r.memoizedState = l.memoizedState, r.updateQueue = l.updateQueue, n = l.dependencies, r.dependencies = null === n ? null : {
                                                expirationTime: n.expirationTime,
                                                firstContext: n.firstContext,
                                                responders: n.responders
                                            }), s = s.sibling;
                                            hi(Yo, 1 & Yo.current | 2), e = e.child;
                                            break t
                                        }
                                        n = n.sibling
                                    }
                            } else {
                                if (!s)
                                    if (null !== (n = Ko(l))) {
                                        if (e.effectTag |= 64, s = !0, null !== (r = n.updateQueue) && (e.updateQueue = r, e.effectTag |= 4), ds(o, !0), null === o.tail && "hidden" === o.tailMode && !l.alternate) {
                                            null !== (e = e.lastEffect = o.lastEffect) && (e.nextEffect = null);
                                            break
                                        }
                                    } else Hi() > o.tailExpiration && 1 < r && (e.effectTag |= 64, s = !0, ds(o, !1), e.expirationTime = e.childExpirationTime = r - 1);
                                o.isBackwards ? (l.sibling = e.child, e.child = l) : (null !== (r = o.last) ? r.sibling = l : e.child = l, o.last = l)
                            }
                            if (null !== o.tail) {
                                0 === o.tailExpiration && (o.tailExpiration = Hi() + 500), r = o.tail, o.rendering = r, o.tail = r.sibling, o.lastEffect = e.lastEffect, r.sibling = null, o = Yo.current, hi(Yo, o = s ? 1 & o | 2 : 1 & o), e = r;
                                break t
                            }
                            break;
                        case 20:
                        case 21:
                            break;
                        default:
                            throw Error(a(156, e.tag))
                    }
                    e = null
                }
                if (o = $s, 1 === qs || 1 !== o.childExpirationTime) {
                    for (s = 0, r = o.child; null !== r;)(n = r.expirationTime) > s && (s = n), (l = r.childExpirationTime) > s && (s = l), r = r.sibling;
                    o.childExpirationTime = s
                }
                if (null !== e) return e;null !== t && 0 == (2048 & t.effectTag) && (null === t.firstEffect && (t.firstEffect = $s.firstEffect), null !== $s.lastEffect && (null !== t.lastEffect && (t.lastEffect.nextEffect = $s.firstEffect), t.lastEffect = $s.lastEffect), 1 < $s.effectTag && (null !== t.lastEffect ? t.lastEffect.nextEffect = $s : t.firstEffect = $s, t.lastEffect = $s))
            }
            else {
                if (null !== (e = ps($s))) return e.effectTag &= 2047, e;
                null !== t && (t.firstEffect = t.lastEffect = null, t.effectTag |= 2048)
            }
            if (null !== (e = $s.sibling)) return e;
            $s = t
        } while (null !== $s);
        return Ys === Ls && (Ys = Ws), null
    }

    function Pu(t) {
        var e = t.expirationTime;
        return e > (t = t.childExpirationTime) ? e : t
    }

    function Mu(t) {
        var e = $i();
        return Yi(99, Du.bind(null, t, e)), null
    }

    function Du(t, e) {
        do {
            Fu()
        } while (null !== uu);
        if ((Gs & (Rs | Fs)) !== Ms) throw Error(a(327));
        var n = t.finishedWork,
            r = t.finishedExpirationTime;
        if (null === n) return null;
        if (t.finishedWork = null, t.finishedExpirationTime = 0, n === t.current) throw Error(a(177));
        t.callbackNode = null, t.callbackExpirationTime = 0, t.callbackPriority = 90, t.nextKnownPendingLevel = 0;
        var i = Pu(n);
        if (t.firstPendingTime = i, r <= t.lastSuspendedTime ? t.firstSuspendedTime = t.lastSuspendedTime = t.nextKnownPendingLevel = 0 : r <= t.firstSuspendedTime && (t.firstSuspendedTime = r - 1), r <= t.lastPingedTime && (t.lastPingedTime = 0), r <= t.lastExpiredTime && (t.lastExpiredTime = 0), t === Hs && ($s = Hs = null, qs = 0), 1 < n.effectTag ? null !== n.lastEffect ? (n.lastEffect.nextEffect = n, i = n.firstEffect) : i = n : i = n.firstEffect, null !== i) {
            var o = Gs;
            Gs |= Fs, Ps.current = null, tr = xn;
            var s = Yn();
            if (Kn(s)) {
                if ("selectionStart" in s) var u = {
                    start: s.selectionStart,
                    end: s.selectionEnd
                };
                else t: {
                    var c = (u = (u = s.ownerDocument) && u.defaultView || window).getSelection && u.getSelection();
                    if (c && 0 !== c.rangeCount) {
                        u = c.anchorNode;
                        var l = c.anchorOffset,
                            f = c.focusNode;
                        c = c.focusOffset;
                        try {
                            u.nodeType, f.nodeType
                        } catch (t) {
                            u = null;
                            break t
                        }
                        var d = 0,
                            p = -1,
                            h = -1,
                            b = 0,
                            m = 0,
                            g = s,
                            v = null;
                        e: for (;;) {
                            for (var y; g !== u || 0 !== l && 3 !== g.nodeType || (p = d + l), g !== f || 0 !== c && 3 !== g.nodeType || (h = d + c), 3 === g.nodeType && (d += g.nodeValue.length), null !== (y = g.firstChild);) v = g, g = y;
                            for (;;) {
                                if (g === s) break e;
                                if (v === u && ++b === l && (p = d), v === f && ++m === c && (h = d), null !== (y = g.nextSibling)) break;
                                v = (g = v).parentNode
                            }
                            g = y
                        }
                        u = -1 === p || -1 === h ? null : {
                            start: p,
                            end: h
                        }
                    } else u = null
                }
                u = u || {
                    start: 0,
                    end: 0
                }
            } else u = null;
            er = {
                focusedElem: s,
                selectionRange: u
            }, xn = !1, ru = i;
            do {
                try {
                    Ru()
                } catch (t) {
                    if (null === ru) throw Error(a(330));
                    zu(ru, t), ru = ru.nextEffect
                }
            } while (null !== ru);
            ru = i;
            do {
                try {
                    for (s = t, u = e; null !== ru;) {
                        var _ = ru.effectTag;
                        if (16 & _ && Wt(ru.stateNode, ""), 128 & _) {
                            var w = ru.alternate;
                            if (null !== w) {
                                var E = w.ref;
                                null !== E && ("function" == typeof E ? E(null) : E.current = null)
                            }
                        }
                        switch (1038 & _) {
                            case 2:
                                Os(ru), ru.effectTag &= -3;
                                break;
                            case 6:
                                Os(ru), ru.effectTag &= -3, Ss(ru.alternate, ru);
                                break;
                            case 1024:
                                ru.effectTag &= -1025;
                                break;
                            case 1028:
                                ru.effectTag &= -1025, Ss(ru.alternate, ru);
                                break;
                            case 4:
                                Ss(ru.alternate, ru);
                                break;
                            case 8:
                                xs(s, l = ru, u), ws(l)
                        }
                        ru = ru.nextEffect
                    }
                } catch (t) {
                    if (null === ru) throw Error(a(330));
                    zu(ru, t), ru = ru.nextEffect
                }
            } while (null !== ru);
            if (E = er, w = Yn(), _ = E.focusedElem, u = E.selectionRange, w !== _ && _ && _.ownerDocument && function t(e, n) {
                    return !(!e || !n) && (e === n || (!e || 3 !== e.nodeType) && (n && 3 === n.nodeType ? t(e, n.parentNode) : "contains" in e ? e.contains(n) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(n))))
                }(_.ownerDocument.documentElement, _)) {
                null !== u && Kn(_) && (w = u.start, void 0 === (E = u.end) && (E = w), "selectionStart" in _ ? (_.selectionStart = w, _.selectionEnd = Math.min(E, _.value.length)) : (E = (w = _.ownerDocument || document) && w.defaultView || window).getSelection && (E = E.getSelection(), l = _.textContent.length, s = Math.min(u.start, l), u = void 0 === u.end ? s : Math.min(u.end, l), !E.extend && s > u && (l = u, u = s, s = l), l = qn(_, s), f = qn(_, u), l && f && (1 !== E.rangeCount || E.anchorNode !== l.node || E.anchorOffset !== l.offset || E.focusNode !== f.node || E.focusOffset !== f.offset) && ((w = w.createRange()).setStart(l.node, l.offset), E.removeAllRanges(), s > u ? (E.addRange(w), E.extend(f.node, f.offset)) : (w.setEnd(f.node, f.offset), E.addRange(w))))), w = [];
                for (E = _; E = E.parentNode;) 1 === E.nodeType && w.push({
                    element: E,
                    left: E.scrollLeft,
                    top: E.scrollTop
                });
                for ("function" == typeof _.focus && _.focus(), _ = 0; _ < w.length; _++)(E = w[_]).element.scrollLeft = E.left, E.element.scrollTop = E.top
            }
            er = null, xn = !!tr, tr = null, t.current = n, ru = i;
            do {
                try {
                    for (_ = r; null !== ru;) {
                        var O = ru.effectTag;
                        if (36 & O) {
                            var x = ru.alternate;
                            switch (E = _, (w = ru).tag) {
                                case 0:
                                case 11:
                                case 15:
                                    ys(16, 32, w);
                                    break;
                                case 1:
                                    var S = w.stateNode;
                                    if (4 & w.effectTag)
                                        if (null === x) S.componentDidMount();
                                        else {
                                            var T = w.elementType === w.type ? x.memoizedProps : eo(w.type, x.memoizedProps);
                                            S.componentDidUpdate(T, x.memoizedState, S.__reactInternalSnapshotBeforeUpdate)
                                        } var k = w.updateQueue;
                                    null !== k && Oo(0, k, S);
                                    break;
                                case 3:
                                    var C = w.updateQueue;
                                    if (null !== C) {
                                        if (s = null, null !== w.child) switch (w.child.tag) {
                                            case 5:
                                                s = w.child.stateNode;
                                                break;
                                            case 1:
                                                s = w.child.stateNode
                                        }
                                        Oo(0, C, s)
                                    }
                                    break;
                                case 5:
                                    var N = w.stateNode;
                                    null === x && 4 & w.effectTag && nr(w.type, w.memoizedProps) && N.focus();
                                    break;
                                case 6:
                                case 4:
                                case 12:
                                    break;
                                case 13:
                                    if (null === w.memoizedState) {
                                        var j = w.alternate;
                                        if (null !== j) {
                                            var I = j.memoizedState;
                                            if (null !== I) {
                                                var A = I.dehydrated;
                                                null !== A && Se(A)
                                            }
                                        }
                                    }
                                    break;
                                case 19:
                                case 17:
                                case 20:
                                case 21:
                                    break;
                                default:
                                    throw Error(a(163))
                            }
                        }
                        if (128 & O) {
                            w = void 0;
                            var P = ru.ref;
                            if (null !== P) {
                                var M = ru.stateNode;
                                switch (ru.tag) {
                                    case 5:
                                        w = M;
                                        break;
                                    default:
                                        w = M
                                }
                                "function" == typeof P ? P(w) : P.current = w
                            }
                        }
                        ru = ru.nextEffect
                    }
                } catch (t) {
                    if (null === ru) throw Error(a(330));
                    zu(ru, t), ru = ru.nextEffect
                }
            } while (null !== ru);
            ru = null, zi(), Gs = o
        } else t.current = n;
        if (su) su = !1, uu = t, cu = e;
        else
            for (ru = i; null !== ru;) e = ru.nextEffect, ru.nextEffect = null, ru = e;
        if (0 === (e = t.firstPendingTime) && (au = null), 1073741823 === e ? t === du ? fu++ : (fu = 0, du = t) : fu = 0, "function" == typeof Wu && Wu(n.stateNode, r), yu(t), iu) throw iu = !1, t = ou, ou = null, t;
        return (Gs & Ds) !== Ms ? null : (Ji(), null)
    }

    function Ru() {
        for (; null !== ru;) {
            var t = ru.effectTag;
            0 != (256 & t) && vs(ru.alternate, ru), 0 == (512 & t) || su || (su = !0, Ki(97, (function() {
                return Fu(), null
            }))), ru = ru.nextEffect
        }
    }

    function Fu() {
        if (90 !== cu) {
            var t = 97 < cu ? 97 : cu;
            return cu = 90, Yi(t, Lu)
        }
    }

    function Lu() {
        if (null === uu) return !1;
        var t = uu;
        if (uu = null, (Gs & (Rs | Fs)) !== Ms) throw Error(a(331));
        var e = Gs;
        for (Gs |= Fs, t = t.current.firstEffect; null !== t;) {
            try {
                var n = t;
                if (0 != (512 & n.effectTag)) switch (n.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ys(128, 0, n), ys(0, 64, n)
                }
            } catch (e) {
                if (null === t) throw Error(a(330));
                zu(t, e)
            }
            n = t.nextEffect, t.nextEffect = null, t = n
        }
        return Gs = e, Ji(), !0
    }

    function Uu(t, e, n) {
        vo(t, e = Cs(t, e = hs(n, e), 1073741823)), null !== (t = gu(t, 1073741823)) && yu(t)
    }

    function zu(t, e) {
        if (3 === t.tag) Uu(t, t, e);
        else
            for (var n = t.return; null !== n;) {
                if (3 === n.tag) {
                    Uu(n, t, e);
                    break
                }
                if (1 === n.tag) {
                    var r = n.stateNode;
                    if ("function" == typeof n.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === au || !au.has(r))) {
                        vo(n, t = Ns(n, t = hs(e, t), 1073741823)), null !== (n = gu(n, 1073741823)) && yu(n);
                        break
                    }
                }
                n = n.return
            }
    }

    function Vu(t, e, n) {
        var r = t.pingCache;
        null !== r && r.delete(e), Hs === t && qs === n ? Ys === Bs || Ys === Vs && 1073741823 === Qs && Hi() - eu < nu ? xu(t, qs) : tu = !0 : tc(t, n) && (0 !== (e = t.lastPingedTime) && e < n || (t.lastPingedTime = n, t.finishedExpirationTime === n && (t.finishedExpirationTime = 0, t.finishedWork = null), yu(t)))
    }

    function Bu(t, e) {
        var n = t.stateNode;
        null !== n && n.delete(e), 0 == (e = 0) && (e = bu(e = hu(), t, null)), null !== (t = gu(t, e)) && yu(t)
    }
    js = function(t, e, n) {
        var r = e.expirationTime;
        if (null !== t) {
            var i = e.pendingProps;
            if (t.memoizedProps !== i || gi.current) Ha = !0;
            else {
                if (r < n) {
                    switch (Ha = !1, e.tag) {
                        case 3:
                            ts(e), Wa();
                            break;
                        case 5:
                            if ($o(e), 4 & e.mode && 1 !== n && i.hidden) return e.expirationTime = e.childExpirationTime = 1, null;
                            break;
                        case 1:
                            _i(e.type) && Si(e);
                            break;
                        case 4:
                            Go(e, e.stateNode.containerInfo);
                            break;
                        case 10:
                            so(e, e.memoizedProps.value);
                            break;
                        case 13:
                            if (null !== e.memoizedState) return 0 !== (r = e.child.childExpirationTime) && r >= n ? as(t, e, n) : (hi(Yo, 1 & Yo.current), null !== (e = ls(t, e, n)) ? e.sibling : null);
                            hi(Yo, 1 & Yo.current);
                            break;
                        case 19:
                            if (r = e.childExpirationTime >= n, 0 != (64 & t.effectTag)) {
                                if (r) return cs(t, e, n);
                                e.effectTag |= 64
                            }
                            if (null !== (i = e.memoizedState) && (i.rendering = null, i.tail = null), hi(Yo, Yo.current), !r) return null
                    }
                    return ls(t, e, n)
                }
                Ha = !1
            }
        } else Ha = !1;
        switch (e.expirationTime = 0, e.tag) {
            case 2:
                if (r = e.type, null !== t && (t.alternate = null, e.alternate = null, e.effectTag |= 2), t = e.pendingProps, i = yi(e, mi.current), lo(e, n), i = ha(null, e, r, t, i, n), e.effectTag |= 1, "object" == typeof i && null !== i && "function" == typeof i.render && void 0 === i.$$typeof) {
                    if (e.tag = 1, ba(), _i(r)) {
                        var o = !0;
                        Si(e)
                    } else o = !1;
                    e.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null;
                    var s = r.getDerivedStateFromProps;
                    "function" == typeof s && ko(e, r, s, t), i.updater = Co, e.stateNode = i, i._reactInternalFiber = e, Ao(e, r, t, n), e = Za(null, e, r, !0, o, n)
                } else e.tag = 0, $a(null, e, i, n), e = e.child;
                return e;
            case 16:
                if (i = e.elementType, null !== t && (t.alternate = null, e.alternate = null, e.effectTag |= 2), t = e.pendingProps, function(t) {
                        if (-1 === t._status) {
                            t._status = 0;
                            var e = t._ctor;
                            e = e(), t._result = e, e.then((function(e) {
                                0 === t._status && (e = e.default, t._status = 1, t._result = e)
                            }), (function(e) {
                                0 === t._status && (t._status = 2, t._result = e)
                            }))
                        }
                    }(i), 1 !== i._status) throw i._result;
                switch (i = i._result, e.type = i, o = e.tag = function(t) {
                    if ("function" == typeof t) return qu(t) ? 1 : 0;
                    if (null != t) {
                        if ((t = t.$$typeof) === G) return 11;
                        if (t === q) return 14
                    }
                    return 2
                }(i), t = eo(i, t), o) {
                    case 0:
                        e = Ja(null, e, i, t, n);
                        break;
                    case 1:
                        e = Xa(null, e, i, t, n);
                        break;
                    case 11:
                        e = qa(null, e, i, t, n);
                        break;
                    case 14:
                        e = Ya(null, e, i, eo(i.type, t), r, n);
                        break;
                    default:
                        throw Error(a(306, i, ""))
                }
                return e;
            case 0:
                return r = e.type, i = e.pendingProps, Ja(t, e, r, i = e.elementType === r ? i : eo(r, i), n);
            case 1:
                return r = e.type, i = e.pendingProps, Xa(t, e, r, i = e.elementType === r ? i : eo(r, i), n);
            case 3:
                if (ts(e), null === (r = e.updateQueue)) throw Error(a(282));
                if (i = null !== (i = e.memoizedState) ? i.element : null, Eo(e, r, e.pendingProps, null, n), (r = e.memoizedState.element) === i) Wa(), e = ls(t, e, n);
                else {
                    if ((i = e.stateNode.hydrate) && (Ra = ar(e.stateNode.containerInfo.firstChild), Da = e, i = Fa = !0), i)
                        for (n = Lo(e, null, r, n), e.child = n; n;) n.effectTag = -3 & n.effectTag | 1024, n = n.sibling;
                    else $a(t, e, r, n), Wa();
                    e = e.child
                }
                return e;
            case 5:
                return $o(e), null === t && za(e), r = e.type, i = e.pendingProps, o = null !== t ? t.memoizedProps : null, s = i.children, rr(r, i) ? s = null : null !== o && rr(r, o) && (e.effectTag |= 16), Qa(t, e), 4 & e.mode && 1 !== n && i.hidden ? (e.expirationTime = e.childExpirationTime = 1, e = null) : ($a(t, e, s, n), e = e.child), e;
            case 6:
                return null === t && za(e), null;
            case 13:
                return as(t, e, n);
            case 4:
                return Go(e, e.stateNode.containerInfo), r = e.pendingProps, null === t ? e.child = Fo(e, null, r, n) : $a(t, e, r, n), e.child;
            case 11:
                return r = e.type, i = e.pendingProps, qa(t, e, r, i = e.elementType === r ? i : eo(r, i), n);
            case 7:
                return $a(t, e, e.pendingProps, n), e.child;
            case 8:
            case 12:
                return $a(t, e, e.pendingProps.children, n), e.child;
            case 10:
                t: {
                    if (r = e.type._context, i = e.pendingProps, s = e.memoizedProps, so(e, o = i.value), null !== s) {
                        var u = s.value;
                        if (0 == (o = ti(u, o) ? 0 : 0 | ("function" == typeof r._calculateChangedBits ? r._calculateChangedBits(u, o) : 1073741823))) {
                            if (s.children === i.children && !gi.current) {
                                e = ls(t, e, n);
                                break t
                            }
                        } else
                            for (null !== (u = e.child) && (u.return = e); null !== u;) {
                                var c = u.dependencies;
                                if (null !== c) {
                                    s = u.child;
                                    for (var l = c.firstContext; null !== l;) {
                                        if (l.context === r && 0 != (l.observedBits & o)) {
                                            1 === u.tag && ((l = mo(n, null)).tag = 2, vo(u, l)), u.expirationTime < n && (u.expirationTime = n), null !== (l = u.alternate) && l.expirationTime < n && (l.expirationTime = n), co(u.return, n), c.expirationTime < n && (c.expirationTime = n);
                                            break
                                        }
                                        l = l.next
                                    }
                                } else s = 10 === u.tag && u.type === e.type ? null : u.child;
                                if (null !== s) s.return = u;
                                else
                                    for (s = u; null !== s;) {
                                        if (s === e) {
                                            s = null;
                                            break
                                        }
                                        if (null !== (u = s.sibling)) {
                                            u.return = s.return, s = u;
                                            break
                                        }
                                        s = s.return
                                    }
                                u = s
                            }
                    }
                    $a(t, e, i.children, n),
                    e = e.child
                }
                return e;
            case 9:
                return i = e.type, r = (o = e.pendingProps).children, lo(e, n), r = r(i = fo(i, o.unstable_observedBits)), e.effectTag |= 1, $a(t, e, r, n), e.child;
            case 14:
                return o = eo(i = e.type, e.pendingProps), Ya(t, e, i, o = eo(i.type, o), r, n);
            case 15:
                return Ka(t, e, e.type, e.pendingProps, r, n);
            case 17:
                return r = e.type, i = e.pendingProps, i = e.elementType === r ? i : eo(r, i), null !== t && (t.alternate = null, e.alternate = null, e.effectTag |= 2), e.tag = 1, _i(r) ? (t = !0, Si(e)) : t = !1, lo(e, n), jo(e, r, i), Ao(e, r, i, n), Za(null, e, r, !0, t, n);
            case 19:
                return cs(t, e, n)
        }
        throw Error(a(156, e.tag))
    };
    var Wu = null,
        Gu = null;

    function Hu(t, e, n, r) {
        this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.effectTag = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childExpirationTime = this.expirationTime = 0, this.alternate = null
    }

    function $u(t, e, n, r) {
        return new Hu(t, e, n, r)
    }

    function qu(t) {
        return !(!(t = t.prototype) || !t.isReactComponent)
    }

    function Yu(t, e) {
        var n = t.alternate;
        return null === n ? ((n = $u(t.tag, e, t.key, t.mode)).elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.effectTag = 0, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.childExpirationTime = t.childExpirationTime, n.expirationTime = t.expirationTime, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = null === e ? null : {
            expirationTime: e.expirationTime,
            firstContext: e.firstContext,
            responders: e.responders
        }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n
    }

    function Ku(t, e, n, r, i, o) {
        var s = 2;
        if (r = t, "function" == typeof t) qu(t) && (s = 1);
        else if ("string" == typeof t) s = 5;
        else t: switch (t) {
            case L:
                return Qu(n.children, i, o, e);
            case W:
                s = 8, i |= 7;
                break;
            case U:
                s = 8, i |= 1;
                break;
            case z:
                return (t = $u(12, n, e, 8 | i)).elementType = z, t.type = z, t.expirationTime = o, t;
            case H:
                return (t = $u(13, n, e, i)).type = H, t.elementType = H, t.expirationTime = o, t;
            case $:
                return (t = $u(19, n, e, i)).elementType = $, t.expirationTime = o, t;
            default:
                if ("object" == typeof t && null !== t) switch (t.$$typeof) {
                    case V:
                        s = 10;
                        break t;
                    case B:
                        s = 9;
                        break t;
                    case G:
                        s = 11;
                        break t;
                    case q:
                        s = 14;
                        break t;
                    case Y:
                        s = 16, r = null;
                        break t
                }
                throw Error(a(130, null == t ? t : typeof t, ""))
        }
        return (e = $u(s, n, e, i)).elementType = t, e.type = r, e.expirationTime = o, e
    }

    function Qu(t, e, n, r) {
        return (t = $u(7, t, r, e)).expirationTime = n, t
    }

    function Ju(t, e, n) {
        return (t = $u(6, t, null, e)).expirationTime = n, t
    }

    function Xu(t, e, n) {
        return (e = $u(4, null !== t.children ? t.children : [], t.key, e)).expirationTime = n, e.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation
        }, e
    }

    function Zu(t, e, n) {
        this.tag = e, this.current = null, this.containerInfo = t, this.pingCache = this.pendingChildren = null, this.finishedExpirationTime = 0, this.finishedWork = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = n, this.callbackNode = null, this.callbackPriority = 90, this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0
    }

    function tc(t, e) {
        var n = t.firstSuspendedTime;
        return t = t.lastSuspendedTime, 0 !== n && n >= e && t <= e
    }

    function ec(t, e) {
        var n = t.firstSuspendedTime,
            r = t.lastSuspendedTime;
        n < e && (t.firstSuspendedTime = e), (r > e || 0 === n) && (t.lastSuspendedTime = e), e <= t.lastPingedTime && (t.lastPingedTime = 0), e <= t.lastExpiredTime && (t.lastExpiredTime = 0)
    }

    function nc(t, e) {
        e > t.firstPendingTime && (t.firstPendingTime = e);
        var n = t.firstSuspendedTime;
        0 !== n && (e >= n ? t.firstSuspendedTime = t.lastSuspendedTime = t.nextKnownPendingLevel = 0 : e >= t.lastSuspendedTime && (t.lastSuspendedTime = e + 1), e > t.nextKnownPendingLevel && (t.nextKnownPendingLevel = e))
    }

    function rc(t, e) {
        var n = t.lastExpiredTime;
        (0 === n || n > e) && (t.lastExpiredTime = e)
    }

    function ic(t, e, n, r) {
        var i = e.current,
            o = hu(),
            s = So.suspense;
        o = bu(o, i, s);
        t: if (n) {
            e: {
                if (te(n = n._reactInternalFiber) !== n || 1 !== n.tag) throw Error(a(170));
                var u = n;do {
                    switch (u.tag) {
                        case 3:
                            u = u.stateNode.context;
                            break e;
                        case 1:
                            if (_i(u.type)) {
                                u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                                break e
                            }
                    }
                    u = u.return
                } while (null !== u);
                throw Error(a(171))
            }
            if (1 === n.tag) {
                var c = n.type;
                if (_i(c)) {
                    n = xi(n, c, u);
                    break t
                }
            }
            n = u
        }
        else n = bi;
        return null === e.context ? e.context = n : e.pendingContext = n, (e = mo(o, s)).payload = {
            element: t
        }, null !== (r = void 0 === r ? null : r) && (e.callback = r), vo(i, e), mu(i, o), o
    }

    function oc(t) {
        if (!(t = t.current).child) return null;
        switch (t.child.tag) {
            case 5:
            default:
                return t.child.stateNode
        }
    }

    function ac(t, e) {
        null !== (t = t.memoizedState) && null !== t.dehydrated && t.retryTime < e && (t.retryTime = e)
    }

    function sc(t, e) {
        ac(t, e), (t = t.alternate) && ac(t, e)
    }

    function uc(t, e, n) {
        var r = new Zu(t, e, n = null != n && !0 === n.hydrate),
            i = $u(3, null, null, 2 === e ? 7 : 1 === e ? 3 : 0);
        r.current = i, i.stateNode = r, t[fr] = r.current, n && 0 !== e && function(t) {
            var e = Mn(t);
            be.forEach((function(n) {
                Dn(n, t, e)
            })), me.forEach((function(n) {
                Dn(n, t, e)
            }))
        }(9 === t.nodeType ? t : t.ownerDocument), this._internalRoot = r
    }

    function cc(t) {
        return !(!t || 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType && (8 !== t.nodeType || " react-mount-point-unstable " !== t.nodeValue))
    }

    function lc(t, e, n, r, i) {
        var o = n._reactRootContainer;
        if (o) {
            var a = o._internalRoot;
            if ("function" == typeof i) {
                var s = i;
                i = function() {
                    var t = oc(a);
                    s.call(t)
                }
            }
            ic(e, a, t, i)
        } else {
            if (o = n._reactRootContainer = function(t, e) {
                    if (e || (e = !(!(e = t ? 9 === t.nodeType ? t.documentElement : t.firstChild : null) || 1 !== e.nodeType || !e.hasAttribute("data-reactroot"))), !e)
                        for (var n; n = t.lastChild;) t.removeChild(n);
                    return new uc(t, 0, e ? {
                        hydrate: !0
                    } : void 0)
                }(n, r), a = o._internalRoot, "function" == typeof i) {
                var u = i;
                i = function() {
                    var t = oc(a);
                    u.call(t)
                }
            }
            Ou((function() {
                ic(e, a, t, i)
            }))
        }
        return oc(a)
    }

    function fc(t, e) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!cc(e)) throw Error(a(200));
        return function(t, e, n) {
            var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            return {
                $$typeof: F,
                key: null == r ? null : "" + r,
                children: t,
                containerInfo: e,
                implementation: n
            }
        }(t, e, null, n)
    }
    uc.prototype.render = function(t, e) {
        ic(t, this._internalRoot, null, void 0 === e ? null : e)
    }, uc.prototype.unmount = function(t) {
        var e = this._internalRoot,
            n = void 0 === t ? null : t,
            r = e.containerInfo;
        ic(null, e, null, (function() {
            r[fr] = null, null !== n && n()
        }))
    }, ie = function(t) {
        if (13 === t.tag) {
            var e = to(hu(), 150, 100);
            mu(t, e), sc(t, e)
        }
    }, oe = function(t) {
        if (13 === t.tag) {
            hu();
            var e = Zi++;
            mu(t, e), sc(t, e)
        }
    }, ae = function(t) {
        if (13 === t.tag) {
            var e = hu();
            mu(t, e = bu(e, t, null)), sc(t, e)
        }
    }, tt = function(t, e, n) {
        switch (e) {
            case "input":
                if (Nt(t, n), e = n.name, "radio" === n.type && null != e) {
                    for (n = t; n.parentNode;) n = n.parentNode;
                    for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'), e = 0; e < n.length; e++) {
                        var r = n[e];
                        if (r !== t && r.form === t.form) {
                            var i = br(r);
                            if (!i) throw Error(a(90));
                            St(r), Nt(r, i)
                        }
                    }
                }
                break;
            case "textarea":
                Rt(t, n);
                break;
            case "select":
                null != (e = n.value) && Pt(t, !!n.multiple, e, !1)
        }
    }, at = Eu, st = function(t, e, n, r) {
        var i = Gs;
        Gs |= 4;
        try {
            return Yi(98, t.bind(null, e, n, r))
        } finally {
            (Gs = i) === Ms && Ji()
        }
    }, ut = function() {
        (Gs & (1 | Rs | Fs)) === Ms && (function() {
            if (null !== lu) {
                var t = lu;
                lu = null, t.forEach((function(t, e) {
                    rc(e, t), yu(e)
                })), Ji()
            }
        }(), Fu())
    }, ct = function(t, e) {
        var n = Gs;
        Gs |= 2;
        try {
            return t(e)
        } finally {
            (Gs = n) === Ms && Ji()
        }
    };
    var dc, pc, hc = {
        createPortal: fc,
        findDOMNode: function(t) {
            if (null == t) return null;
            if (1 === t.nodeType) return t;
            var e = t._reactInternalFiber;
            if (void 0 === e) {
                if ("function" == typeof t.render) throw Error(a(188));
                throw Error(a(268, Object.keys(t)))
            }
            return null === (t = re(e)) ? null : t.stateNode
        },
        hydrate: function(t, e, n) {
            if (!cc(e)) throw Error(a(200));
            return lc(null, t, e, !0, n)
        },
        render: function(t, e, n) {
            if (!cc(e)) throw Error(a(200));
            return lc(null, t, e, !1, n)
        },
        unstable_renderSubtreeIntoContainer: function(t, e, n, r) {
            if (!cc(n)) throw Error(a(200));
            if (null == t || void 0 === t._reactInternalFiber) throw Error(a(38));
            return lc(t, e, n, !1, r)
        },
        unmountComponentAtNode: function(t) {
            if (!cc(t)) throw Error(a(40));
            return !!t._reactRootContainer && (Ou((function() {
                lc(null, null, t, !1, (function() {
                    t._reactRootContainer = null, t[fr] = null
                }))
            })), !0)
        },
        unstable_createPortal: function() {
            return fc.apply(void 0, arguments)
        },
        unstable_batchedUpdates: Eu,
        flushSync: function(t, e) {
            if ((Gs & (Rs | Fs)) !== Ms) throw Error(a(187));
            var n = Gs;
            Gs |= 1;
            try {
                return Yi(99, t.bind(null, e))
            } finally {
                Gs = n, Ji()
            }
        },
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
            Events: [pr, hr, br, I.injectEventPluginsByName, d, Ae, function(t) {
                k(t, Ie)
            }, it, ot, jn, j, Fu, {
                current: !1
            }]
        }
    };
    pc = (dc = {
            findFiberByHostInstance: dr,
            bundleType: 0,
            version: "16.12.0",
            rendererPackageName: "react-dom"
        }).findFiberByHostInstance,
        function(t) {
            if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
            var e = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (e.isDisabled || !e.supportsFiber) return !0;
            try {
                var n = e.inject(t);
                Wu = function(t) {
                    try {
                        e.onCommitFiberRoot(n, t, void 0, 64 == (64 & t.current.effectTag))
                    } catch (t) {}
                }, Gu = function(t) {
                    try {
                        e.onCommitFiberUnmount(n, t)
                    } catch (t) {}
                }
            } catch (t) {}
        }(i({}, dc, {
            overrideHookState: null,
            overrideProps: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: P.ReactCurrentDispatcher,
            findHostInstanceByFiber: function(t) {
                return null === (t = re(t)) ? null : t.stateNode
            },
            findFiberByHostInstance: function(t) {
                return pc ? pc(t) : null
            },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null
        }));
    var bc = {
            default: hc
        },
        mc = bc && hc || bc;
    t.exports = mc.default || mc
}, function(t, e, n) {
    "use strict";
    t.exports = n(467)
}, function(t, e, n) {
    "use strict";
    var r, i, o, a, s;
    if (Object.defineProperty(e, "__esModule", {
            value: !0
        }), "undefined" == typeof window || "function" != typeof MessageChannel) {
        var u = null,
            c = null,
            l = function() {
                if (null !== u) try {
                    var t = e.unstable_now();
                    u(!0, t), u = null
                } catch (t) {
                    throw setTimeout(l, 0), t
                }
            },
            f = Date.now();
        e.unstable_now = function() {
            return Date.now() - f
        }, r = function(t) {
            null !== u ? setTimeout(r, 0, t) : (u = t, setTimeout(l, 0))
        }, i = function(t, e) {
            c = setTimeout(t, e)
        }, o = function() {
            clearTimeout(c)
        }, a = function() {
            return !1
        }, s = e.unstable_forceFrameRate = function() {}
    } else {
        var d = window.performance,
            p = window.Date,
            h = window.setTimeout,
            b = window.clearTimeout;
        if ("undefined" != typeof console) {
            var m = window.cancelAnimationFrame;
            "function" != typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), "function" != typeof m && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")
        }
        if ("object" == typeof d && "function" == typeof d.now) e.unstable_now = function() {
            return d.now()
        };
        else {
            var g = p.now();
            e.unstable_now = function() {
                return p.now() - g
            }
        }
        var v = !1,
            y = null,
            _ = -1,
            w = 5,
            E = 0;
        a = function() {
            return e.unstable_now() >= E
        }, s = function() {}, e.unstable_forceFrameRate = function(t) {
            0 > t || 125 < t ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : w = 0 < t ? Math.floor(1e3 / t) : 5
        };
        var O = new MessageChannel,
            x = O.port2;
        O.port1.onmessage = function() {
            if (null !== y) {
                var t = e.unstable_now();
                E = t + w;
                try {
                    y(!0, t) ? x.postMessage(null) : (v = !1, y = null)
                } catch (t) {
                    throw x.postMessage(null), t
                }
            } else v = !1
        }, r = function(t) {
            y = t, v || (v = !0, x.postMessage(null))
        }, i = function(t, n) {
            _ = h((function() {
                t(e.unstable_now())
            }), n)
        }, o = function() {
            b(_), _ = -1
        }
    }

    function S(t, e) {
        var n = t.length;
        t.push(e);
        t: for (;;) {
            var r = Math.floor((n - 1) / 2),
                i = t[r];
            if (!(void 0 !== i && 0 < C(i, e))) break t;
            t[r] = e, t[n] = i, n = r
        }
    }

    function T(t) {
        return void 0 === (t = t[0]) ? null : t
    }

    function k(t) {
        var e = t[0];
        if (void 0 !== e) {
            var n = t.pop();
            if (n !== e) {
                t[0] = n;
                t: for (var r = 0, i = t.length; r < i;) {
                    var o = 2 * (r + 1) - 1,
                        a = t[o],
                        s = o + 1,
                        u = t[s];
                    if (void 0 !== a && 0 > C(a, n)) void 0 !== u && 0 > C(u, a) ? (t[r] = u, t[s] = n, r = s) : (t[r] = a, t[o] = n, r = o);
                    else {
                        if (!(void 0 !== u && 0 > C(u, n))) break t;
                        t[r] = u, t[s] = n, r = s
                    }
                }
            }
            return e
        }
        return null
    }

    function C(t, e) {
        var n = t.sortIndex - e.sortIndex;
        return 0 !== n ? n : t.id - e.id
    }
    var N = [],
        j = [],
        I = 1,
        A = null,
        P = 3,
        M = !1,
        D = !1,
        R = !1;

    function F(t) {
        for (var e = T(j); null !== e;) {
            if (null === e.callback) k(j);
            else {
                if (!(e.startTime <= t)) break;
                k(j), e.sortIndex = e.expirationTime, S(N, e)
            }
            e = T(j)
        }
    }

    function L(t) {
        if (R = !1, F(t), !D)
            if (null !== T(N)) D = !0, r(U);
            else {
                var e = T(j);
                null !== e && i(L, e.startTime - t)
            }
    }

    function U(t, n) {
        D = !1, R && (R = !1, o()), M = !0;
        var r = P;
        try {
            for (F(n), A = T(N); null !== A && (!(A.expirationTime > n) || t && !a());) {
                var s = A.callback;
                if (null !== s) {
                    A.callback = null, P = A.priorityLevel;
                    var u = s(A.expirationTime <= n);
                    n = e.unstable_now(), "function" == typeof u ? A.callback = u : A === T(N) && k(N), F(n)
                } else k(N);
                A = T(N)
            }
            if (null !== A) var c = !0;
            else {
                var l = T(j);
                null !== l && i(L, l.startTime - n), c = !1
            }
            return c
        } finally {
            A = null, P = r, M = !1
        }
    }

    function z(t) {
        switch (t) {
            case 1:
                return -1;
            case 2:
                return 250;
            case 5:
                return 1073741823;
            case 4:
                return 1e4;
            default:
                return 5e3
        }
    }
    var V = s;
    e.unstable_ImmediatePriority = 1, e.unstable_UserBlockingPriority = 2, e.unstable_NormalPriority = 3, e.unstable_IdlePriority = 5, e.unstable_LowPriority = 4, e.unstable_runWithPriority = function(t, e) {
        switch (t) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                t = 3
        }
        var n = P;
        P = t;
        try {
            return e()
        } finally {
            P = n
        }
    }, e.unstable_next = function(t) {
        switch (P) {
            case 1:
            case 2:
            case 3:
                var e = 3;
                break;
            default:
                e = P
        }
        var n = P;
        P = e;
        try {
            return t()
        } finally {
            P = n
        }
    }, e.unstable_scheduleCallback = function(t, n, a) {
        var s = e.unstable_now();
        if ("object" == typeof a && null !== a) {
            var u = a.delay;
            u = "number" == typeof u && 0 < u ? s + u : s, a = "number" == typeof a.timeout ? a.timeout : z(t)
        } else a = z(t), u = s;
        return t = {
            id: I++,
            callback: n,
            priorityLevel: t,
            startTime: u,
            expirationTime: a = u + a,
            sortIndex: -1
        }, u > s ? (t.sortIndex = u, S(j, t), null === T(N) && t === T(j) && (R ? o() : R = !0, i(L, u - s))) : (t.sortIndex = a, S(N, t), D || M || (D = !0, r(U))), t
    }, e.unstable_cancelCallback = function(t) {
        t.callback = null
    }, e.unstable_wrapCallback = function(t) {
        var e = P;
        return function() {
            var n = P;
            P = e;
            try {
                return t.apply(this, arguments)
            } finally {
                P = n
            }
        }
    }, e.unstable_getCurrentPriorityLevel = function() {
        return P
    }, e.unstable_shouldYield = function() {
        var t = e.unstable_now();
        F(t);
        var n = T(N);
        return n !== A && null !== A && null !== n && null !== n.callback && n.startTime <= t && n.expirationTime < A.expirationTime || a()
    }, e.unstable_requestPaint = V, e.unstable_continueExecution = function() {
        D || M || (D = !0, r(U))
    }, e.unstable_pauseExecution = function() {}, e.unstable_getFirstCallbackNode = function() {
        return T(N)
    }, e.unstable_Profiling = null
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(281),
        i = n(380),
        o = new RegExp(["^", "function", "\\(", "[^), ]+", "\\)", "\\{", '("use strict";)?', "return\\s", "[^\\.]+\\.(\\S+?);?", "\\}", "$"].join("\\s*"));

    function a(t) {
        var e = o,
            n = t.match(e);
        if (n && n[2]) return n[2].split(".");
        throw new TypeError('Expected a property expression, got "' + t + '".\n\n      A property expression should be a referentially transparent (no side-effects),\n      single-expression "getter" function.\n\n      Correct example: "function (x) { return x.some }" or "x => x.some".\n      Incorrect example: "function (x) { var y = x.some; return y }" or "({some}) => some"')
    }

    function s(t) {
        return a(t.toString())
    }

    function u(t) {
        return void 0 === t ? function(t) {
            return i.Lens.create((function(e) {
                return e[t]
            }), (function(e, n) {
                return r.setKey(t, e, n)
            }))
        } : i.Lens.create((function(e) {
            return e[t]
        }), (function(e, n) {
            return r.setKey(t, e, n)
        }))
    }
    new RegExp(["^", "function", "\\(", "[^), ]+", "\\)", "\\{", '("use strict";)?', "(\\$_\\$wf\\(\\d+\\);)?", "return\\s", "(\\$_\\$w\\(\\d+, \\d+\\),\\s)?", "[^\\.]+\\.(\\S+?);?", "\\}", "$"].join("\\s*")), e.parsePropertyPath = a, e.extractPropertyPath = s, e.keyImpl = u;
    var c = 0;

    function l(t) {
        var e = s(t);
        return r.DEV_ENV && function(t) {
            if (c < 10) {
                c++;
                var e = "x." + t.join("."),
                    n = "'" + t.join("', '") + "'";
                r.warning("The property expression overload of Atom.lens and Lens.prop are deprecated and will be removed in next versions of Focal. Please use the key name overload for Atom.lens and Lens.key instead. You can convert your code by changing the calls:\n  a.lens(x => " + e + ") to a.lens(" + n + "),\n  Lens.prop((x: T) => " + e + ") to Lens.key<T>()(" + n + ").")
            }
        }(e), i.Lens.compose.apply(i.Lens, e.map(u()))
    }

    function f(t) {
        if (t < 0) throw new TypeError(t + " is not a valid array index, expected >= 0");
        return i.Prism.create((function(e) {
            return e[t]
        }), (function(e, n) {
            return n.length <= t ? n.concat(Array(t - n.length), [e]) : r.structEq(e, n[t]) ? n : n.slice(0, t).concat([e], n.slice(t + 1))
        }))
    }

    function d(t) {
        return i.Lens.replace(void 0, t)
    }

    function p(t, e) {
        return i.Lens.create((function(n) {
            return r.structEq(n, t) ? e : n
        }), r.conservatively((function(n) {
            return r.structEq(n, e) ? t : n
        })))
    }

    function h(t) {
        return e = function(e) {
            var n = r.findIndex(e, t);
            return n < 0 ? i.Lens.nothing() : i.Lens.index(n)
        }, i.Lens.create((function(t) {
            return e(t).get(t)
        }), (function(t, n) {
            return e(n).set(t, n)
        }));
        var e
    }
    e.propImpl = l, e.indexImpl = f, e.withDefaultImpl = d, e.replaceImpl = p, e.findImpl = h, i.Lens.key = u, i.Lens.prop = l, i.Lens.index = f, i.Lens.withDefault = d, i.Lens.replace = p, i.Lens.find = h
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(470);
    ! function(t) {
        t.create = function(t) {
            return new r.JsonAtom(t)
        }, t.log = function(t, e) {
            var n = function(t, e, n) {
                    return console.log("%c" + t, "color: " + e + "; font-weight: bold", n)
                },
                r = t.get();
            return t.subscribe((function(t) {
                "function" == typeof e ? e(r, t) : (console.group("UPDATE " + (e ? "TYPE: " + e + " " : "") + "@ " + (new Date).toTimeString()), n("prev state", "#9E9E9E", r), n("next state", "#4CAF50", t), console.groupEnd()), r = t
            })), t
        }, t.combine = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return new r.CombinedAtomViewImpl(t.slice(void 0, -1), (function(e) {
                return t[t.length - 1].apply(t, e)
            }))
        }
    }(e.Atom || (e.Atom = {}))
}, function(t, e, n) {
    "use strict";
    var r, i = this && this.__extends || (r = function(t, e) {
        return (r = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            })(t, e)
    }, function(t, e) {
        function n() {
            this.constructor = t
        }
        r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(379),
        a = n(281),
        s = n(30),
        u = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i(e, t), e.prototype.view = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return void 0 !== t[0] ? "function" == typeof t[0] ? new d(this, t[0]) : "string" == typeof t[0] ? new d(this, o.Lens.compose.apply(o.Lens, t.map(o.Lens.key())).get) : new d(this, (function(e) {
                    return t[0].get(e)
                })) : this
            }, e
        }(s.BehaviorSubject);
    e.AbstractReadOnlyAtom = u;
    var c = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return i(e, t), e.prototype.set = function(t) {
            this.modify((function() {
                return t
            }))
        }, e.prototype.lens = function(t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            return new f(this, "function" == typeof t ? o.Lens.prop(t) : "string" == typeof t ? o.Lens.compose.apply(o.Lens, [o.Lens.key(t)].concat(e.map((function(t) {
                return o.Lens.key(t)
            })))) : t, a.structEq)
        }, e
    }(u);
    e.AbstractAtom = c;
    var l = function(t) {
        function e(e) {
            return t.call(this, e) || this
        }
        return i(e, t), e.prototype.get = function() {
            return this.getValue()
        }, e.prototype.modify = function(t) {
            var e = this.getValue(),
                n = t(e);
            a.structEq(e, n) || this.next(n)
        }, e.prototype.set = function(t) {
            var e = this.getValue();
            a.structEq(e, t) || this.next(t)
        }, e
    }(c);
    e.JsonAtom = l;
    var f = function(t) {
            function e(e, n, r) {
                void 0 === r && (r = a.structEq);
                var i = t.call(this, void 0) || this;
                return i._source = e, i._lens = n, i._eq = r, i._subscription = null, i._refCount = 0, i
            }
            return i(e, t), e.prototype.get = function() {
                return this._subscription ? this.getValue() : this._lens.get(this._source.get())
            }, e.prototype.modify = function(t) {
                var e = this;
                this._source.modify((function(n) {
                    return e._lens.modify(t, n)
                }))
            }, e.prototype.set = function(t) {
                var e = this;
                this._source.modify((function(n) {
                    return e._lens.set(t, n)
                }))
            }, e.prototype._onSourceValue = function(t) {
                var e = this.getValue(),
                    n = this._lens.get(t);
                this._eq(e, n) || this.next(n)
            }, e.prototype._subscribe = function(e) {
                var n = this;
                this._subscription || (this._subscription = this._source.subscribe((function(t) {
                    return n._onSourceValue(t)
                }))), this._refCount++;
                var r = new s.Subscription((function() {
                    --n._refCount <= 0 && n._subscription && (n._subscription.unsubscribe(), n._subscription = null)
                }));
                return r.add(t.prototype._subscribe.call(this, e)), r
            }, e.prototype.unsubscribe = function() {
                this._subscription && (this._subscription.unsubscribe(), this._subscription = null), this._refCount = 0, t.prototype.unsubscribe.call(this)
            }, e
        }(c),
        d = function(t) {
            function e(e, n, r) {
                void 0 === r && (r = a.structEq);
                var i = t.call(this, void 0) || this;
                return i._source = e, i._getter = n, i._eq = r, i._subscription = null, i._refCount = 0, i
            }
            return i(e, t), e.prototype.get = function() {
                return this._subscription ? this.getValue() : this._getter(this._source.get())
            }, e.prototype._onSourceValue = function(t) {
                var e = this.getValue(),
                    n = this._getter(t);
                this._eq(e, n) || this.next(n)
            }, e.prototype._subscribe = function(e) {
                var n = this;
                this._subscription || (this._subscription = this._source.subscribe((function(t) {
                    return n._onSourceValue(t)
                }))), this._refCount++;
                var r = new s.Subscription((function() {
                    --n._refCount <= 0 && n._subscription && (n._subscription.unsubscribe(), n._subscription = null)
                }));
                return r.add(t.prototype._subscribe.call(this, e)), r
            }, e.prototype.unsubscribe = function() {
                this._subscription && (this._subscription.unsubscribe(), this._subscription = null), this._refCount = 0, t.prototype.unsubscribe.call(this)
            }, e
        }(u),
        p = function(t) {
            function e(e, n, r) {
                void 0 === r && (r = a.structEq);
                var i = t.call(this, void 0) || this;
                return i._sources = e, i._combineFn = n, i._eq = r, i._subscription = null, i._refCount = 0, i
            }
            return i(e, t), e.prototype.get = function() {
                return this._subscription ? this.getValue() : this._combineFn(this._sources.map((function(t) {
                    return t.get()
                })))
            }, e.prototype._onSourceValues = function(t) {
                var e = this.getValue(),
                    n = this._combineFn(t);
                this._eq(e, n) || this.next(n)
            }, e.prototype._subscribe = function(e) {
                var n = this;
                this._subscription || (this._subscription = s.combineLatest(this._sources).subscribe((function(t) {
                    return n._onSourceValues(t)
                }))), this._refCount++;
                var r = new s.Subscription((function() {
                    --n._refCount <= 0 && n._subscription && (n._subscription.unsubscribe(), n._subscription = null)
                }));
                return r.add(t.prototype._subscribe.call(this, e)), r
            }, e.prototype.unsubscribe = function() {
                this._subscription && (this._subscription.unsubscribe(), this._subscription = null), this._refCount = 0, t.prototype.unsubscribe.call(this)
            }, e
        }(u);
    e.CombinedAtomViewImpl = p
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(392);

    function o(t) {
        return function(e) {
            return r.createElement(i.LiftWrapper, {
                component: t,
                props: e
            })
        }
    }
    e.liftIntrinsic = o, e.createLiftedIntrinsics = function() {
        var t = {};
        return ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr"].forEach((function(e) {
            return t[e] = o(e)
        })), t.Fragment = function(t) {
            return r.createElement(i.LiftWrapper, {
                component: r.Fragment,
                props: t
            })
        }, t
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    e.printBuffer = function(t, e) {
        var n = e.logger,
            r = e.actionTransformer,
            i = e.titleFormatter,
            u = void 0 === i ? function(t) {
                var e = t.timestamp,
                    n = t.duration;
                return function(t, r, i) {
                    var o = ["action"];
                    return o.push("%c" + String(t.type)), e && o.push("%c@ " + r), n && o.push("%c(in " + i.toFixed(2) + " ms)"), o.join(" ")
                }
            }(e) : i,
            c = e.collapsed,
            l = e.colors,
            f = e.level,
            d = e.diff;
        t.forEach((function(i, p) {
            var h = i.started,
                b = i.startedTime,
                m = i.action,
                g = i.prevState,
                v = i.error,
                y = i.took,
                _ = i.nextState,
                w = t[p + 1];
            w && (_ = w.prevState, y = w.started - h);
            var E = r(m),
                O = "function" == typeof c ? c((function() {
                    return _
                }), m, i) : c,
                x = (0, o.formatTime)(b),
                S = l.title ? "color: " + l.title(E) + ";" : "",
                T = ["color: gray; font-weight: lighter;"];
            T.push(S), e.timestamp && T.push("color: gray; font-weight: lighter;"), e.duration && T.push("color: gray; font-weight: lighter;");
            var k = u(E, x, y);
            try {
                O ? l.title ? n.groupCollapsed.apply(n, ["%c " + k].concat(T)) : n.groupCollapsed(k) : l.title ? n.group.apply(n, ["%c " + k].concat(T)) : n.group(k)
            } catch (t) {
                n.log(k)
            }
            var C = s(f, E, [g], "prevState"),
                N = s(f, E, [E], "action"),
                j = s(f, E, [v, g], "error"),
                I = s(f, E, [_], "nextState");
            C && (l.prevState ? n[C]("%c prev state", "color: " + l.prevState(g) + "; font-weight: bold", g) : n[C]("prev state", g)), N && (l.action ? n[N]("%c action    ", "color: " + l.action(E) + "; font-weight: bold", E) : n[N]("action    ", E)), v && j && (l.error ? n[j]("%c error     ", "color: " + l.error(v, g) + "; font-weight: bold;", v) : n[j]("error     ", v)), I && (l.nextState ? n[I]("%c next state", "color: " + l.nextState(_) + "; font-weight: bold", _) : n[I]("next state", _)), d && (0, a.default)(g, _, n, O);
            try {
                n.groupEnd()
            } catch (t) {
                n.log("—— log end ——")
            }
        }))
    };
    var i, o = n(405),
        a = (i = n(473)) && i.__esModule ? i : {
            default: i
        };

    function s(t, e, n, i) {
        switch (void 0 === t ? "undefined" : r(t)) {
            case "object":
                return "function" == typeof t[i] ? t[i].apply(t, function(t) {
                    if (Array.isArray(t)) {
                        for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                        return n
                    }
                    return Array.from(t)
                }(n)) : t[i];
            case "function":
                return t(e);
            default:
                return t
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t, e, n, r) {
        var s = (0, i.default)(t, e);
        try {
            r ? n.groupCollapsed("diff") : n.group("diff")
        } catch (t) {
            n.log("diff")
        }
        s ? s.forEach((function(t) {
            var e = t.kind,
                r = function(t) {
                    var e = t.kind,
                        n = t.path,
                        r = t.lhs,
                        i = t.rhs,
                        o = t.index,
                        a = t.item;
                    switch (e) {
                        case "E":
                            return [n.join("."), r, "→", i];
                        case "N":
                            return [n.join("."), i];
                        case "D":
                            return [n.join(".")];
                        case "A":
                            return [n.join(".") + "[" + o + "]", a];
                        default:
                            return []
                    }
                }(t);
            n.log.apply(n, ["%c " + o[e].text, a(e)].concat(function(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                    return n
                }
                return Array.from(t)
            }(r)))
        })) : n.log("—— no diff ——");
        try {
            n.groupEnd()
        } catch (t) {
            n.log("—— diff end —— ")
        }
    };
    var r, i = (r = n(474)) && r.__esModule ? r : {
            default: r
        },
        o = {
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

    function a(t) {
        return "color: " + o[t].color + "; font-weight: bold"
    }
    t.exports = e.default
}, function(t, e, n) {
    (function(n) {
        var r;
        ! function(i, o) {
            "use strict";
            void 0 === (r = function() {
                return function(t) {
                    var e, r, i = [];

                    function o(t, e) {
                        t.super_ = e, t.prototype = Object.create(e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        })
                    }

                    function a(t, e) {
                        Object.defineProperty(this, "kind", {
                            value: t,
                            enumerable: !0
                        }), e && e.length && Object.defineProperty(this, "path", {
                            value: e,
                            enumerable: !0
                        })
                    }

                    function s(t, e, n) {
                        s.super_.call(this, "E", t), Object.defineProperty(this, "lhs", {
                            value: e,
                            enumerable: !0
                        }), Object.defineProperty(this, "rhs", {
                            value: n,
                            enumerable: !0
                        })
                    }

                    function u(t, e) {
                        u.super_.call(this, "N", t), Object.defineProperty(this, "rhs", {
                            value: e,
                            enumerable: !0
                        })
                    }

                    function c(t, e) {
                        c.super_.call(this, "D", t), Object.defineProperty(this, "lhs", {
                            value: e,
                            enumerable: !0
                        })
                    }

                    function l(t, e, n) {
                        l.super_.call(this, "A", t), Object.defineProperty(this, "index", {
                            value: e,
                            enumerable: !0
                        }), Object.defineProperty(this, "item", {
                            value: n,
                            enumerable: !0
                        })
                    }

                    function f(t, e, n) {
                        var r = t.slice((n || e) + 1 || t.length);
                        return t.length = e < 0 ? t.length + e : e, t.push.apply(t, r), t
                    }

                    function d(t) {
                        var e = typeof t;
                        return "object" !== e ? e : t === Math ? "math" : null === t ? "null" : Array.isArray(t) ? "array" : "[object Date]" === Object.prototype.toString.call(t) ? "date" : void 0 !== t.toString && /^\/.*\//.test(t.toString()) ? "regexp" : "object"
                    }

                    function p(e, n, r, i, o, a, h) {
                        var b = (o = o || []).slice(0);
                        if (void 0 !== a) {
                            if (i) {
                                if ("function" == typeof i && i(b, a)) return;
                                if ("object" == typeof i) {
                                    if (i.prefilter && i.prefilter(b, a)) return;
                                    if (i.normalize) {
                                        var m = i.normalize(b, a, e, n);
                                        m && (e = m[0], n = m[1])
                                    }
                                }
                            }
                            b.push(a)
                        }
                        "regexp" === d(e) && "regexp" === d(n) && (e = e.toString(), n = n.toString());
                        var g = typeof e,
                            v = typeof n;
                        if ("undefined" === g) "undefined" !== v && r(new u(b, n));
                        else if ("undefined" === v) r(new c(b, e));
                        else if (d(e) !== d(n)) r(new s(b, e, n));
                        else if ("[object Date]" === Object.prototype.toString.call(e) && "[object Date]" === Object.prototype.toString.call(n) && e - n != 0) r(new s(b, e, n));
                        else if ("object" === g && null !== e && null !== n) {
                            if ((h = h || []).indexOf(e) < 0) {
                                if (h.push(e), Array.isArray(e)) {
                                    var y;
                                    for (e.length, y = 0; y < e.length; y++) y >= n.length ? r(new l(b, y, new c(t, e[y]))) : p(e[y], n[y], r, i, b, y, h);
                                    for (; y < n.length;) r(new l(b, y, new u(t, n[y++])))
                                } else {
                                    var _ = Object.keys(e),
                                        w = Object.keys(n);
                                    _.forEach((function(o, a) {
                                        var s = w.indexOf(o);
                                        s >= 0 ? (p(e[o], n[o], r, i, b, o, h), w = f(w, s)) : p(e[o], t, r, i, b, o, h)
                                    })), w.forEach((function(e) {
                                        p(t, n[e], r, i, b, e, h)
                                    }))
                                }
                                h.length = h.length - 1
                            }
                        } else e !== n && ("number" === g && isNaN(e) && isNaN(n) || r(new s(b, e, n)))
                    }

                    function h(e, n, r, i) {
                        return i = i || [], p(e, n, (function(t) {
                            t && i.push(t)
                        }), r), i.length ? i : t
                    }

                    function b(t, e, n) {
                        if (t && e && n && n.kind) {
                            for (var r = t, i = -1, o = n.path ? n.path.length - 1 : 0; ++i < o;) void 0 === r[n.path[i]] && (r[n.path[i]] = "number" == typeof n.path[i] ? [] : {}), r = r[n.path[i]];
                            switch (n.kind) {
                                case "A":
                                    ! function t(e, n, r) {
                                        if (r.path && r.path.length) {
                                            var i, o = e[n],
                                                a = r.path.length - 1;
                                            for (i = 0; i < a; i++) o = o[r.path[i]];
                                            switch (r.kind) {
                                                case "A":
                                                    t(o[r.path[i]], r.index, r.item);
                                                    break;
                                                case "D":
                                                    delete o[r.path[i]];
                                                    break;
                                                case "E":
                                                case "N":
                                                    o[r.path[i]] = r.rhs
                                            }
                                        } else switch (r.kind) {
                                            case "A":
                                                t(e[n], r.index, r.item);
                                                break;
                                            case "D":
                                                e = f(e, n);
                                                break;
                                            case "E":
                                            case "N":
                                                e[n] = r.rhs
                                        }
                                        return e
                                    }(n.path ? r[n.path[i]] : r, n.index, n.item);
                                    break;
                                case "D":
                                    delete r[n.path[i]];
                                    break;
                                case "E":
                                case "N":
                                    r[n.path[i]] = n.rhs
                            }
                        }
                    }
                    return e = "object" == typeof n && n ? n : "undefined" != typeof window ? window : {}, (r = e.DeepDiff) && i.push((function() {
                        void 0 !== r && e.DeepDiff === h && (e.DeepDiff = r, r = t)
                    })), o(s, a), o(u, a), o(c, a), o(l, a), Object.defineProperties(h, {
                        diff: {
                            value: h,
                            enumerable: !0
                        },
                        observableDiff: {
                            value: p,
                            enumerable: !0
                        },
                        applyDiff: {
                            value: function(t, e, n) {
                                t && e && p(t, e, (function(r) {
                                    n && !n(t, e, r) || b(t, e, r)
                                }))
                            },
                            enumerable: !0
                        },
                        applyChange: {
                            value: b,
                            enumerable: !0
                        },
                        revertChange: {
                            value: function(t, e, n) {
                                if (t && e && n && n.kind) {
                                    var r, i, o = t;
                                    for (i = n.path.length - 1, r = 0; r < i; r++) void 0 === o[n.path[r]] && (o[n.path[r]] = {}), o = o[n.path[r]];
                                    switch (n.kind) {
                                        case "A":
                                            ! function t(e, n, r) {
                                                if (r.path && r.path.length) {
                                                    var i, o = e[n],
                                                        a = r.path.length - 1;
                                                    for (i = 0; i < a; i++) o = o[r.path[i]];
                                                    switch (r.kind) {
                                                        case "A":
                                                            t(o[r.path[i]], r.index, r.item);
                                                            break;
                                                        case "D":
                                                        case "E":
                                                            o[r.path[i]] = r.lhs;
                                                            break;
                                                        case "N":
                                                            delete o[r.path[i]]
                                                    }
                                                } else switch (r.kind) {
                                                    case "A":
                                                        t(e[n], r.index, r.item);
                                                        break;
                                                    case "D":
                                                    case "E":
                                                        e[n] = r.lhs;
                                                        break;
                                                    case "N":
                                                        e = f(e, n)
                                                }
                                                return e
                                            }(o[n.path[r]], n.index, n.item);
                                            break;
                                        case "D":
                                        case "E":
                                            o[n.path[r]] = n.lhs;
                                            break;
                                        case "N":
                                            delete o[n.path[r]]
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
                                return i && (i.forEach((function(t) {
                                    t()
                                })), i = null), h
                            },
                            enumerable: !0
                        }
                    }), h
                }()
            }.apply(e, [])) || (t.exports = r)
        }()
    }).call(this, n(159))
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = {
        level: "log",
        logger: console,
        logErrors: !0,
        collapsed: void 0,
        predicate: void 0,
        duration: !1,
        timestamp: !0,
        stateTransformer: function(t) {
            return t
        },
        actionTransformer: function(t) {
            return t
        },
        errorTransformer: function(t) {
            return t
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
    }, t.exports = e.default
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
    n(517)
}, function(t, e, n) {}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return r
    }));
    const r = /^http(s?)\:\/\/docs\.google\.com\/document/
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return i
    }));
    var r = n(4);
    const i = (t, e) => t.anonymous && (!e.hideGdocsSigninPopupTime || e.hideGdocsSigninPopupTime + 24 * r.e.hour < Date.now())
}, , , , , function(t, e, n) {
    t.exports = {
        line: "_3WsyC",
        dialect_switcher: "fvLLo",
        select: "_283PU",
        selectWrap: "Dwiig"
    }
}, , , , , , , function(t, e, n) {
    "use strict";
    t.exports = function(t, e, n, r, i, o, a, s) {
        if (!t) {
            var u;
            if (void 0 === e) u = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
            else {
                var c = [n, r, i, o, a, s],
                    l = 0;
                (u = new Error(e.replace(/%s/g, (function() {
                    return c[l++]
                })))).name = "Invariant Violation"
            }
            throw u.framesToPop = 1, u
        }
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
    "use strict";
    var r = n(280),
        i = n(279),
        o = n(196),
        a = Object(i.a)((function(t, e) {
            Object(r.a)(e, Object(o.a)(e), t)
        }));
    e.a = a
}, , , , , , , , function(t, e, n) {
    "use strict";
    var r = {
            childContextTypes: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0
        },
        i = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0
        },
        o = Object.defineProperty,
        a = Object.getOwnPropertyNames,
        s = Object.getOwnPropertySymbols,
        u = Object.getOwnPropertyDescriptor,
        c = Object.getPrototypeOf,
        l = c && c(Object);
    t.exports = function t(e, n, f) {
        if ("string" != typeof n) {
            if (l) {
                var d = c(n);
                d && d !== l && t(e, d, f)
            }
            var p = a(n);
            s && (p = p.concat(s(n)));
            for (var h = 0; h < p.length; ++h) {
                var b = p[h];
                if (!(r[b] || i[b] || f && f[b])) {
                    var m = u(n, b);
                    try {
                        o(e, b, m)
                    } catch (t) {}
                }
            }
            return e
        }
        return e
    }
}, function(t, e, n) {
    "use strict";
    (function(t) {
        var n = "object" == typeof t && t && t.Object === Object && t;
        e.a = n
    }).call(this, n(159))
}, function(t, e, n) {
    t.exports = function(t) {
        "use strict";
        var e = function(t, e) {
                return t + e & 4294967295
            },
            n = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

        function r(t, n, r, i, o, a) {
            return n = e(e(n, t), e(i, a)), e(n << o | n >>> 32 - o, r)
        }

        function i(t, e, n, i, o, a, s) {
            return r(e & n | ~e & i, t, e, o, a, s)
        }

        function o(t, e, n, i, o, a, s) {
            return r(e & i | n & ~i, t, e, o, a, s)
        }

        function a(t, e, n, i, o, a, s) {
            return r(e ^ n ^ i, t, e, o, a, s)
        }

        function s(t, e, n, i, o, a, s) {
            return r(n ^ (e | ~i), t, e, o, a, s)
        }

        function u(t, n) {
            var r = t[0],
                u = t[1],
                c = t[2],
                l = t[3];
            r = i(r, u, c, l, n[0], 7, -680876936), l = i(l, r, u, c, n[1], 12, -389564586), c = i(c, l, r, u, n[2], 17, 606105819), u = i(u, c, l, r, n[3], 22, -1044525330), r = i(r, u, c, l, n[4], 7, -176418897), l = i(l, r, u, c, n[5], 12, 1200080426), c = i(c, l, r, u, n[6], 17, -1473231341), u = i(u, c, l, r, n[7], 22, -45705983), r = i(r, u, c, l, n[8], 7, 1770035416), l = i(l, r, u, c, n[9], 12, -1958414417), c = i(c, l, r, u, n[10], 17, -42063), u = i(u, c, l, r, n[11], 22, -1990404162), r = i(r, u, c, l, n[12], 7, 1804603682), l = i(l, r, u, c, n[13], 12, -40341101), c = i(c, l, r, u, n[14], 17, -1502002290), r = o(r, u = i(u, c, l, r, n[15], 22, 1236535329), c, l, n[1], 5, -165796510), l = o(l, r, u, c, n[6], 9, -1069501632), c = o(c, l, r, u, n[11], 14, 643717713), u = o(u, c, l, r, n[0], 20, -373897302), r = o(r, u, c, l, n[5], 5, -701558691), l = o(l, r, u, c, n[10], 9, 38016083), c = o(c, l, r, u, n[15], 14, -660478335), u = o(u, c, l, r, n[4], 20, -405537848), r = o(r, u, c, l, n[9], 5, 568446438), l = o(l, r, u, c, n[14], 9, -1019803690), c = o(c, l, r, u, n[3], 14, -187363961), u = o(u, c, l, r, n[8], 20, 1163531501), r = o(r, u, c, l, n[13], 5, -1444681467), l = o(l, r, u, c, n[2], 9, -51403784), c = o(c, l, r, u, n[7], 14, 1735328473), r = a(r, u = o(u, c, l, r, n[12], 20, -1926607734), c, l, n[5], 4, -378558), l = a(l, r, u, c, n[8], 11, -2022574463), c = a(c, l, r, u, n[11], 16, 1839030562), u = a(u, c, l, r, n[14], 23, -35309556), r = a(r, u, c, l, n[1], 4, -1530992060), l = a(l, r, u, c, n[4], 11, 1272893353), c = a(c, l, r, u, n[7], 16, -155497632), u = a(u, c, l, r, n[10], 23, -1094730640), r = a(r, u, c, l, n[13], 4, 681279174), l = a(l, r, u, c, n[0], 11, -358537222), c = a(c, l, r, u, n[3], 16, -722521979), u = a(u, c, l, r, n[6], 23, 76029189), r = a(r, u, c, l, n[9], 4, -640364487), l = a(l, r, u, c, n[12], 11, -421815835), c = a(c, l, r, u, n[15], 16, 530742520), r = s(r, u = a(u, c, l, r, n[2], 23, -995338651), c, l, n[0], 6, -198630844), l = s(l, r, u, c, n[7], 10, 1126891415), c = s(c, l, r, u, n[14], 15, -1416354905), u = s(u, c, l, r, n[5], 21, -57434055), r = s(r, u, c, l, n[12], 6, 1700485571), l = s(l, r, u, c, n[3], 10, -1894986606), c = s(c, l, r, u, n[10], 15, -1051523), u = s(u, c, l, r, n[1], 21, -2054922799), r = s(r, u, c, l, n[8], 6, 1873313359), l = s(l, r, u, c, n[15], 10, -30611744), c = s(c, l, r, u, n[6], 15, -1560198380), u = s(u, c, l, r, n[13], 21, 1309151649), r = s(r, u, c, l, n[4], 6, -145523070), l = s(l, r, u, c, n[11], 10, -1120210379), c = s(c, l, r, u, n[2], 15, 718787259), u = s(u, c, l, r, n[9], 21, -343485551), t[0] = e(r, t[0]), t[1] = e(u, t[1]), t[2] = e(c, t[2]), t[3] = e(l, t[3])
        }

        function c(t) {
            var e, n = [];
            for (e = 0; e < 64; e += 4) n[e >> 2] = t.charCodeAt(e) + (t.charCodeAt(e + 1) << 8) + (t.charCodeAt(e + 2) << 16) + (t.charCodeAt(e + 3) << 24);
            return n
        }

        function l(t) {
            var e, n = [];
            for (e = 0; e < 64; e += 4) n[e >> 2] = t[e] + (t[e + 1] << 8) + (t[e + 2] << 16) + (t[e + 3] << 24);
            return n
        }

        function f(t) {
            var e, n, r, i, o, a, s = t.length,
                l = [1732584193, -271733879, -1732584194, 271733878];
            for (e = 64; e <= s; e += 64) u(l, c(t.substring(e - 64, e)));
            for (n = (t = t.substring(e - 64)).length, r = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], e = 0; e < n; e += 1) r[e >> 2] |= t.charCodeAt(e) << (e % 4 << 3);
            if (r[e >> 2] |= 128 << (e % 4 << 3), e > 55)
                for (u(l, r), e = 0; e < 16; e += 1) r[e] = 0;
            return i = (i = 8 * s).toString(16).match(/(.*?)(.{0,8})$/), o = parseInt(i[2], 16), a = parseInt(i[1], 16) || 0, r[14] = o, r[15] = a, u(l, r), l
        }

        function d(t) {
            var e, r = "";
            for (e = 0; e < 4; e += 1) r += n[t >> 8 * e + 4 & 15] + n[t >> 8 * e & 15];
            return r
        }

        function p(t) {
            var e;
            for (e = 0; e < t.length; e += 1) t[e] = d(t[e]);
            return t.join("")
        }

        function h(t) {
            return /[\u0080-\uFFFF]/.test(t) && (t = unescape(encodeURIComponent(t))), t
        }

        function b() {
            this.reset()
        }
        return "5d41402abc4b2a76b9719d911017c592" !== p(f("hello")) && (e = function(t, e) {
            var n = (65535 & t) + (65535 & e);
            return (t >> 16) + (e >> 16) + (n >> 16) << 16 | 65535 & n
        }), b.prototype.append = function(t) {
            return this.appendBinary(h(t)), this
        }, b.prototype.appendBinary = function(t) {
            this._buff += t, this._length += t.length;
            var e, n = this._buff.length;
            for (e = 64; e <= n; e += 64) u(this._hash, c(this._buff.substring(e - 64, e)));
            return this._buff = this._buff.substring(e - 64), this
        }, b.prototype.end = function(t) {
            var e, n, r = this._buff,
                i = r.length,
                o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (e = 0; e < i; e += 1) o[e >> 2] |= r.charCodeAt(e) << (e % 4 << 3);
            return this._finish(o, i), n = t ? this._hash : p(this._hash), this.reset(), n
        }, b.prototype.reset = function() {
            return this._buff = "", this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878], this
        }, b.prototype.getState = function() {
            return {
                buff: this._buff,
                length: this._length,
                hash: this._hash
            }
        }, b.prototype.setState = function(t) {
            return this._buff = t.buff, this._length = t.length, this._hash = t.hash, this
        }, b.prototype.destroy = function() {
            delete this._hash, delete this._buff, delete this._length
        }, b.prototype._finish = function(t, e) {
            var n, r, i, o = e;
            if (t[o >> 2] |= 128 << (o % 4 << 3), o > 55)
                for (u(this._hash, t), o = 0; o < 16; o += 1) t[o] = 0;
            n = (n = 8 * this._length).toString(16).match(/(.*?)(.{0,8})$/), r = parseInt(n[2], 16), i = parseInt(n[1], 16) || 0, t[14] = r, t[15] = i, u(this._hash, t)
        }, b.hash = function(t, e) {
            return b.hashBinary(h(t), e)
        }, b.hashBinary = function(t, e) {
            var n = f(t);
            return e ? n : p(n)
        }, b.ArrayBuffer = function() {
            this.reset()
        }, b.ArrayBuffer.prototype.append = function(t) {
            var e, n, r, i, o = (n = this._buff.buffer, r = t, !0, (i = new Uint8Array(n.byteLength + r.byteLength)).set(new Uint8Array(n)), i.set(new Uint8Array(r), n.byteLength), i),
                a = o.length;
            for (this._length += t.byteLength, e = 64; e <= a; e += 64) u(this._hash, l(o.subarray(e - 64, e)));
            return this._buff = e - 64 < a ? o.subarray(e - 64) : new Uint8Array(0), this
        }, b.ArrayBuffer.prototype.end = function(t) {
            var e, n, r = this._buff,
                i = r.length,
                o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (e = 0; e < i; e += 1) o[e >> 2] |= r[e] << (e % 4 << 3);
            return this._finish(o, i), n = t ? this._hash : p(this._hash), this.reset(), n
        }, b.ArrayBuffer.prototype.reset = function() {
            return this._buff = new Uint8Array(0), this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878], this
        }, b.ArrayBuffer.prototype.getState = function() {
            var t, e = b.prototype.getState.call(this);
            return e.buff = (t = e.buff, String.fromCharCode.apply(null, new Uint8Array(t))), e
        }, b.ArrayBuffer.prototype.setState = function(t) {
            return t.buff = function(t, e) {
                var n, r = t.length,
                    i = new ArrayBuffer(r),
                    o = new Uint8Array(i);
                for (n = 0; n < r; n++) o[n] = t.charCodeAt(n);
                return o
            }(t.buff), b.prototype.setState.call(this, t)
        }, b.ArrayBuffer.prototype.destroy = b.prototype.destroy, b.ArrayBuffer.prototype._finish = b.prototype._finish, b.ArrayBuffer.hash = function(t, e) {
            var n = function(t) {
                var e, n, r, i, o, a, s = t.length,
                    c = [1732584193, -271733879, -1732584194, 271733878];
                for (e = 64; e <= s; e += 64) u(c, l(t.subarray(e - 64, e)));
                for (n = (t = e - 64 < s ? t.subarray(e - 64) : new Uint8Array(0)).length, r = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], e = 0; e < n; e += 1) r[e >> 2] |= t[e] << (e % 4 << 3);
                if (r[e >> 2] |= 128 << (e % 4 << 3), e > 55)
                    for (u(c, r), e = 0; e < 16; e += 1) r[e] = 0;
                return i = (i = 8 * s).toString(16).match(/(.*?)(.{0,8})$/), o = parseInt(i[2], 16), a = parseInt(i[1], 16) || 0, r[14] = o, r[15] = a, u(c, r), c
            }(new Uint8Array(t));
            return e ? n : p(n)
        }, b
    }()
}, , , , , , , , , , , , , , , , , , function(t, e, n) {
    "use strict";
    var r = n(732),
        i = n(733),
        o = n(734);
    t.exports = function() {
        function t(t, e, n, r, a, s) {
            s !== o && i(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")
        }

        function e() {
            return t
        }
        t.isRequired = t;
        var n = {
            array: t,
            bool: t,
            func: t,
            number: t,
            object: t,
            string: t,
            symbol: t,
            any: t,
            arrayOf: e,
            element: t,
            instanceOf: e,
            node: t,
            objectOf: e,
            oneOf: e,
            oneOfType: e,
            shape: e,
            exact: e
        };
        return n.checkPropTypes = r, n.PropTypes = n, n
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return function() {
            return t
        }
    }
    var i = function() {};
    i.thatReturns = r, i.thatReturnsFalse = r(!1), i.thatReturnsTrue = r(!0), i.thatReturnsNull = r(null), i.thatReturnsThis = function() {
        return this
    }, i.thatReturnsArgument = function(t) {
        return t
    }, t.exports = i
}, function(t, e, n) {
    "use strict";
    t.exports = function(t, e, n, r, i, o, a, s) {
        if (!t) {
            var u;
            if (void 0 === e) u = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
            else {
                var c = [n, r, i, o, a, s],
                    l = 0;
                (u = new Error(e.replace(/%s/g, (function() {
                    return c[l++]
                })))).name = "Invariant Violation"
            }
            throw u.framesToPop = 1, u
        }
    }
}, function(t, e, n) {
    "use strict";
    t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
    "use strict";
    n.r(e), n(236);
    var r = n(144),
        i = n(74),
        o = n(199),
        a = (n(516), n(9)),
        s = n(22),
        u = n(10),
        c = n(461),
        l = n(121),
        f = n(16),
        d = n(12),
        p = n(457),
        h = n(26),
        b = n(0);
    class m extends b.Component {
        constructor(t) {
            super(t)
        }
        render() {
            const {
                institutionName: t,
                ssoUrl: e
            } = this.props;
            return b.createElement(b.Fragment, null, b.createElement("div", {
                className: Object(a.d)(h.managedSSOControl, h.settings)
            }, b.createElement("div", {
                className: h.illustration
            }), b.createElement("p", {
                className: h.title
            }, "Grammarly isn’t active yet!"), b.createElement("p", {
                className: h.text
            }, "To begin using Grammarly, you need to sign in with SSO under the", " ", b.createElement("b", null, t), " organization."), b.createElement("div", {
                className: h.signInWithSSO
            }, b.createElement("a", {
                tabIndex: -1,
                target: "__blank",
                href: e
            }, "SIGN IN WITH SSO"))))
        }
    }
    var g = n(73),
        v = n(376),
        y = n.n(v),
        _ = y.a.shape({
            trySubscribe: y.a.func.isRequired,
            tryUnsubscribe: y.a.func.isRequired,
            notifyNestedSubs: y.a.func.isRequired,
            isSubscribed: y.a.func.isRequired
        }),
        w = y.a.shape({
            subscribe: y.a.func.isRequired,
            dispatch: y.a.func.isRequired,
            getState: y.a.func.isRequired
        }),
        E = function() {
            var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "store",
                n = arguments[1] || e + "Subscription",
                r = function(t) {
                    function r(n, i) {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, r);
                        var o = function(t, e) {
                            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !e || "object" != typeof e && "function" != typeof e ? t : e
                        }(this, t.call(this, n, i));
                        return o[e] = n.store, o
                    }
                    return function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }(r, t), r.prototype.getChildContext = function() {
                        var t;
                        return (t = {})[e] = this[e], t[n] = null, t
                    }, r.prototype.render = function() {
                        return b.Children.only(this.props.children)
                    }, r
                }(b.Component);
            return r.propTypes = {
                store: w.isRequired,
                children: y.a.element.isRequired
            }, r.childContextTypes = ((t = {})[e] = w.isRequired, t[n] = _, t), r
        }(),
        O = n(711),
        x = n.n(O),
        S = n(577),
        T = n.n(S),
        k = null,
        C = {
            notify: function() {}
        },
        N = function() {
            function t(e, n, r) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.store = e, this.parentSub = n, this.onStateChange = r, this.unsubscribe = null, this.listeners = C
            }
            return t.prototype.addNestedSub = function(t) {
                return this.trySubscribe(), this.listeners.subscribe(t)
            }, t.prototype.notifyNestedSubs = function() {
                this.listeners.notify()
            }, t.prototype.isSubscribed = function() {
                return Boolean(this.unsubscribe)
            }, t.prototype.trySubscribe = function() {
                var t, e;
                this.unsubscribe || (this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange), this.listeners = (t = [], e = [], {
                    clear: function() {
                        e = k, t = k
                    },
                    notify: function() {
                        for (var n = t = e, r = 0; r < n.length; r++) n[r]()
                    },
                    get: function() {
                        return e
                    },
                    subscribe: function(n) {
                        var r = !0;
                        return e === t && (e = t.slice()), e.push(n),
                            function() {
                                r && t !== k && (r = !1, e === t && (e = t.slice()), e.splice(e.indexOf(n), 1))
                            }
                    }
                }))
            }, t.prototype.tryUnsubscribe = function() {
                this.unsubscribe && (this.unsubscribe(), this.unsubscribe = null, this.listeners.clear(), this.listeners = C)
            }, t
        }(),
        j = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        },
        I = 0,
        A = {};

    function P() {}

    function M(t) {
        var e, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = r.getDisplayName,
            o = void 0 === i ? function(t) {
                return "ConnectAdvanced(" + t + ")"
            } : i,
            a = r.methodName,
            s = void 0 === a ? "connectAdvanced" : a,
            u = r.renderCountProp,
            c = void 0 === u ? void 0 : u,
            l = r.shouldHandleStateChanges,
            f = void 0 === l || l,
            d = r.storeKey,
            p = void 0 === d ? "store" : d,
            h = r.withRef,
            m = void 0 !== h && h,
            g = function(t, e) {
                var n = {};
                for (var r in t) e.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
                return n
            }(r, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef"]),
            v = p + "Subscription",
            y = I++,
            E = ((e = {})[p] = w, e[v] = _, e),
            O = ((n = {})[v] = _, n);
        return function(e) {
            T()("function" == typeof e, "You must pass a component to the function returned by connect. Instead received " + JSON.stringify(e));
            var n = e.displayName || e.name || "Component",
                r = o(n),
                i = j({}, g, {
                    getDisplayName: o,
                    methodName: s,
                    renderCountProp: c,
                    shouldHandleStateChanges: f,
                    storeKey: p,
                    withRef: m,
                    displayName: r,
                    wrappedComponentName: n,
                    WrappedComponent: e
                }),
                a = function(n) {
                    function o(t, e) {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, o);
                        var i = function(t, e) {
                            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !e || "object" != typeof e && "function" != typeof e ? t : e
                        }(this, n.call(this, t, e));
                        return i.version = y, i.state = {}, i.renderCount = 0, i.store = t[p] || e[p], i.propsMode = Boolean(t[p]), i.setWrappedInstance = i.setWrappedInstance.bind(i), T()(i.store, 'Could not find "' + p + '" in either the context or props of "' + r + '". Either wrap the root component in a <Provider>, or explicitly pass "' + p + '" as a prop to "' + r + '".'), i.initSelector(), i.initSubscription(), i
                    }
                    return function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }(o, n), o.prototype.getChildContext = function() {
                        var t, e = this.propsMode ? null : this.subscription;
                        return (t = {})[v] = e || this.context[v], t
                    }, o.prototype.componentDidMount = function() {
                        f && (this.subscription.trySubscribe(), this.selector.run(this.props), this.selector.shouldComponentUpdate && this.forceUpdate())
                    }, o.prototype.componentWillReceiveProps = function(t) {
                        this.selector.run(t)
                    }, o.prototype.shouldComponentUpdate = function() {
                        return this.selector.shouldComponentUpdate
                    }, o.prototype.componentWillUnmount = function() {
                        this.subscription && this.subscription.tryUnsubscribe(), this.subscription = null, this.notifyNestedSubs = P, this.store = null, this.selector.run = P, this.selector.shouldComponentUpdate = !1
                    }, o.prototype.getWrappedInstance = function() {
                        return T()(m, "To access the wrapped instance, you need to specify { withRef: true } in the options argument of the " + s + "() call."), this.wrappedInstance
                    }, o.prototype.setWrappedInstance = function(t) {
                        this.wrappedInstance = t
                    }, o.prototype.initSelector = function() {
                        var e = t(this.store.dispatch, i);
                        this.selector = function(t, e) {
                            var n = {
                                run: function(r) {
                                    try {
                                        var i = t(e.getState(), r);
                                        (i !== n.props || n.error) && (n.shouldComponentUpdate = !0, n.props = i, n.error = null)
                                    } catch (t) {
                                        n.shouldComponentUpdate = !0, n.error = t
                                    }
                                }
                            };
                            return n
                        }(e, this.store), this.selector.run(this.props)
                    }, o.prototype.initSubscription = function() {
                        if (f) {
                            var t = (this.propsMode ? this.props : this.context)[v];
                            this.subscription = new N(this.store, t, this.onStateChange.bind(this)), this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription)
                        }
                    }, o.prototype.onStateChange = function() {
                        this.selector.run(this.props), this.selector.shouldComponentUpdate ? (this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate, this.setState(A)) : this.notifyNestedSubs()
                    }, o.prototype.notifyNestedSubsOnComponentDidUpdate = function() {
                        this.componentDidUpdate = void 0, this.notifyNestedSubs()
                    }, o.prototype.isSubscribed = function() {
                        return Boolean(this.subscription) && this.subscription.isSubscribed()
                    }, o.prototype.addExtraProps = function(t) {
                        if (!(m || c || this.propsMode && this.subscription)) return t;
                        var e = j({}, t);
                        return m && (e.ref = this.setWrappedInstance), c && (e[c] = this.renderCount++), this.propsMode && this.subscription && (e[v] = this.subscription), e
                    }, o.prototype.render = function() {
                        var t = this.selector;
                        if (t.shouldComponentUpdate = !1, t.error) throw t.error;
                        return Object(b.createElement)(e, this.addExtraProps(t.props))
                    }, o
                }(b.Component);
            return a.WrappedComponent = e, a.displayName = r, a.childContextTypes = O, a.contextTypes = E, a.propTypes = E, x()(a, e)
        }
    }
    var D = Object.prototype.hasOwnProperty;

    function R(t, e) {
        return t === e ? 0 !== t || 0 !== e || 1 / t == 1 / e : t != t && e != e
    }

    function F(t, e) {
        if (R(t, e)) return !0;
        if ("object" != typeof t || null === t || "object" != typeof e || null === e) return !1;
        var n = Object.keys(t),
            r = Object.keys(e);
        if (n.length !== r.length) return !1;
        for (var i = 0; i < n.length; i++)
            if (!D.call(e, n[i]) || !R(t[n[i]], e[n[i]])) return !1;
        return !0
    }
    var L = n(303),
        U = n(712),
        z = "object" == typeof self && self && self.Object === Object && self,
        V = (U.a || z || Function("return this")()).Symbol,
        B = Object.prototype;
    B.hasOwnProperty, B.toString, V && V.toStringTag, Object.prototype.toString, V && V.toStringTag, Object.getPrototypeOf;
    var W = Function.prototype,
        G = Object.prototype,
        H = W.toString;

    function $(t) {
        return function(e, n) {
            var r = t(e, n);

            function i() {
                return r
            }
            return i.dependsOnOwnProps = !1, i
        }
    }

    function q(t) {
        return null !== t.dependsOnOwnProps && void 0 !== t.dependsOnOwnProps ? Boolean(t.dependsOnOwnProps) : 1 !== t.length
    }

    function Y(t, e) {
        return function(e, n) {
            n.displayName;
            var r = function(t, e) {
                return r.dependsOnOwnProps ? r.mapToProps(t, e) : r.mapToProps(t)
            };
            return r.dependsOnOwnProps = !0, r.mapToProps = function(e, n) {
                r.mapToProps = t, r.dependsOnOwnProps = q(t);
                var i = r(e, n);
                return "function" == typeof i && (r.mapToProps = i, r.dependsOnOwnProps = q(i), i = r(e, n)), i
            }, r
        }
    }
    G.hasOwnProperty, H.call(Object);
    var K = [function(t) {
            return "function" == typeof t ? Y(t) : void 0
        }, function(t) {
            return t ? void 0 : $((function(t) {
                return {
                    dispatch: t
                }
            }))
        }, function(t) {
            return t && "object" == typeof t ? $((function(e) {
                return Object(L.b)(t, e)
            })) : void 0
        }],
        Q = [function(t) {
            return "function" == typeof t ? Y(t) : void 0
        }, function(t) {
            return t ? void 0 : $((function() {
                return {}
            }))
        }],
        J = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        };

    function X(t, e, n) {
        return J({}, n, t, e)
    }
    var Z = [function(t) {
        return "function" == typeof t ? function(t) {
            return function(e, n) {
                n.displayName;
                var r = n.pure,
                    i = n.areMergedPropsEqual,
                    o = !1,
                    a = void 0;
                return function(e, n, s) {
                    var u = t(e, n, s);
                    return o ? r && i(u, a) || (a = u) : (o = !0, a = u), a
                }
            }
        }(t) : void 0
    }, function(t) {
        return t ? void 0 : function() {
            return X
        }
    }];

    function tt(t, e, n, r) {
        return function(i, o) {
            return n(t(i, o), e(r, o), o)
        }
    }

    function et(t, e, n, r, i) {
        var o = i.areStatesEqual,
            a = i.areOwnPropsEqual,
            s = i.areStatePropsEqual,
            u = !1,
            c = void 0,
            l = void 0,
            f = void 0,
            d = void 0,
            p = void 0;

        function h(i, u) {
            var h, b, m = !a(u, l),
                g = !o(i, c);
            return c = i, l = u, m && g ? (f = t(c, l), e.dependsOnOwnProps && (d = e(r, l)), p = n(f, d, l)) : m ? (t.dependsOnOwnProps && (f = t(c, l)), e.dependsOnOwnProps && (d = e(r, l)), p = n(f, d, l)) : g ? (h = t(c, l), b = !s(h, f), f = h, b && (p = n(f, d, l)), p) : p
        }
        return function(i, o) {
            return u ? h(i, o) : (f = t(c = i, l = o), d = e(r, l), p = n(f, d, l), u = !0, p)
        }
    }

    function nt(t, e) {
        var n = e.initMapStateToProps,
            r = e.initMapDispatchToProps,
            i = e.initMergeProps,
            o = function(t, e) {
                var n = {};
                for (var r in t) e.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
                return n
            }(e, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]),
            a = n(t, o),
            s = r(t, o),
            u = i(t, o);
        return (o.pure ? et : tt)(a, s, u, t, o)
    }
    var rt = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
        }
        return t
    };

    function it(t, e) {
        var n = {};
        for (var r in t) e.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
        return n
    }

    function ot(t, e, n) {
        for (var r = e.length - 1; r >= 0; r--) {
            var i = e[r](t);
            if (i) return i
        }
        return function(e, r) {
            throw new Error("Invalid value of type " + typeof t + " for " + n + " argument when connecting component " + r.wrappedComponentName + ".")
        }
    }

    function at(t, e) {
        return t === e
    }
    var st = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = t.connectHOC,
                n = void 0 === e ? M : e,
                r = t.mapStateToPropsFactories,
                i = void 0 === r ? Q : r,
                o = t.mapDispatchToPropsFactories,
                a = void 0 === o ? K : o,
                s = t.mergePropsFactories,
                u = void 0 === s ? Z : s,
                c = t.selectorFactory,
                l = void 0 === c ? nt : c;
            return function(t, e, r) {
                var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    s = o.pure,
                    c = void 0 === s || s,
                    f = o.areStatesEqual,
                    d = void 0 === f ? at : f,
                    p = o.areOwnPropsEqual,
                    h = void 0 === p ? F : p,
                    b = o.areStatePropsEqual,
                    m = void 0 === b ? F : b,
                    g = o.areMergedPropsEqual,
                    v = void 0 === g ? F : g,
                    y = it(o, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]),
                    _ = ot(t, i, "mapStateToProps"),
                    w = ot(e, a, "mapDispatchToProps"),
                    E = ot(r, u, "mergeProps");
                return n(l, rt({
                    methodName: "connect",
                    getDisplayName: function(t) {
                        return "Connect(" + t + ")"
                    },
                    shouldHandleStateChanges: Boolean(t),
                    initMapStateToProps: _,
                    initMapDispatchToProps: w,
                    initMergeProps: E,
                    pure: c,
                    areStatesEqual: d,
                    areOwnPropsEqual: h,
                    areStatePropsEqual: m,
                    areMergedPropsEqual: v
                }, y))
            }
        }(),
        ut = n(63);
    class ct extends b.Component {
        render() {
            const {
                institutionName: t,
                ssoId: e
            } = this.props, n = "RestrictOrganizationId: " + e;
            return b.createElement("div", {
                className: Object(a.d)(ut.edc_stripe)
            }, "Managed by ", b.createElement("b", {
                title: n
            }, t))
        }
    }
    var lt = n(246);
    const ft = ({
        openWebEditor: t
    }) => b.createElement("div", {
        className: ut.footer
    }, b.createElement("span", {
        onClick: () => {
            lt.a.newDocumentButtonClick("settingsToolbar"), t(!0)
        },
        className: Object(a.d)(ut.new_document, ut.footer_btn)
    }, "New Document"), b.createElement("span", {
        onClick: () => {
            lt.a.myGrammarlyButtonClick("settingsToolbar"), t()
        },
        className: Object(a.d)(ut.my_grammarly, ut.footer_btn)
    }, "My Grammarly"));
    var dt = n(422),
        pt = n(713),
        ht = n(214);
    class bt extends b.Component {
        constructor() {
            super(...arguments), this.closeNews = () => {
                this.props.showNews(!1)
            }
        }
        render() {
            return b.createElement("div", {
                className: Object(a.d)(ut.line, ut.news)
            }, b.createElement("div", {
                onClick: this.closeNews,
                className: ut.close_news
            }), b.createElement("div", {
                className: ut.news_content
            }, b.createElement("h2", null, "What's new in this update:"), b.createElement("ul", null, ht.e.map(t => b.createElement("li", {
                key: Object(pt.hash)(t)
            }, t)))))
        }
    }
    class mt extends b.Component {
        render() {
            const {
                registrationDate: t
            } = this.props.user, e = Object(f.p)(t);
            return b.createElement("div", {
                className: Object(a.d)(ut.line, ut.summary)
            }, e ? b.createElement("div", {
                className: ut.fixing
            }, "Grammarly has been correcting your text", b.createElement("br", null), b.createElement("span", {
                className: ut.since
            }, "since ", e)) : null, b.createElement("div", {
                className: ut.upgrade
            }, b.createElement("span", {
                onClick: () => {
                    this.props.openSubscriptionDialog({
                        utmSource: "upHook",
                        utmCampaign: "extensionSettingsToolbar"
                    }), lt.a.getPremiumButtonClick("settingsToolbar"), Object(l.a)().userUpgradeClick("settingsToolbar")
                },
                className: ut.upgrade_title
            }, "Go Premium to enable advanced fixes")))
        }
    }
    var gt = n(570);
    const vt = "american",
        yt = "british",
        _t = "australian",
        wt = "canadian";
    class Et extends b.Component {
        constructor() {
            super(...arguments), this.onDialectChange = t => {
                const {
                    changeStrongDialect: e,
                    dialectWeak: n
                } = this.props, r = t.target.value;
                e(r);
                const i = r + "English";
                lt.a.languageSettingUpdate(i, "user", n && r === n)
            }
        }
        render() {
            const t = this.props.dialectStrong || this.props.dialectWeak || vt,
                e = Object(a.d)(gt.line, gt.dialect_switcher);
            return b.createElement("div", {
                className: e
            }, b.createElement("span", null, "I write in"), b.createElement("div", {
                className: gt.selectWrap
            }, b.createElement("select", {
                className: gt.select,
                onChange: this.onDialectChange,
                value: t
            }, b.createElement("option", {
                value: vt
            }, "American English"), b.createElement("option", {
                value: yt
            }, "British English"), b.createElement("option", {
                value: _t
            }, "Australian English"), b.createElement("option", {
                value: wt
            }, "Canadian English"))))
        }
    }
    var Ot = n(342);
    class xt extends b.Component {
        constructor() {
            super(...arguments), this.onEnableDefsClick = t => {
                const {
                    toggleDefs: e
                } = this.props, n = t.target.checked;
                e(n), lt.a.definitionToggleClick(n ? "on" : "off"), Object(l.a)().toggleExtensionDefs(n)
            }
        }
        render() {
            const {
                enabledDefs: t
            } = this.props, e = Object(a.d)(ut.def_switcher, ut.line, ut.setting_item, t ? ut.on : ut.off);
            return b.createElement("div", {
                className: e
            }, b.createElement("label", {
                className: Ot.select_checkbox
            }, "Show definitions and synonyms ", b.createElement("br", null), "via double clicks (all sites)", b.createElement("input", {
                className: Ot.checkbox,
                onChange: this.onEnableDefsClick,
                checked: t,
                type: "checkbox"
            }), b.createElement("div", {
                className: Ot.checkbox_check
            }, b.createElement("div", {
                className: Ot.checkbox_check_round
            }))), b.createElement("div", {
                className: ut.short_border
            }))
        }
    }
    class St extends b.Component {
        constructor() {
            super(...arguments), this.onEnableGrammarClick = t => {
                const {
                    toggleSite: e,
                    domain: n,
                    siteCategory: r
                } = this.props, i = t.target.checked;
                e(i, n), lt.a.checkingToggleClick("toolbar", r, i ? "on" : "off"), Object(l.a)().toggleExtension(i, "toolbar")
            }
        }
        render() {
            const {
                enabledInConfig: t,
                enabledInSettings: e,
                favicon: n,
                domain: r
            } = this.props, i = e && t, o = t ? "Check for writing suggestions" : "Checking is not supported", s = Object(a.d)(ut.site_switcher, ut.line, ut.setting_item, i ? ut.on : ut.off);
            return b.createElement("div", {
                className: s
            }, b.createElement("label", {
                className: Ot.select_checkbox
            }, o, b.createElement("br", null), " ", b.createElement("span", {
                className: ut.domain
            }, b.createElement("span", {
                className: ut.thin_text
            }, "on"), " ", b.createElement("span", {
                className: ut.favicon
            }, b.createElement("img", {
                width: "16px",
                height: "16px",
                src: n
            })), r), b.createElement("input", {
                className: Ot.checkbox,
                onChange: this.onEnableGrammarClick,
                checked: i,
                type: "checkbox"
            }), b.createElement("div", {
                className: Object(a.d)(Ot.checkbox_check, ut.checkbox_check)
            }, b.createElement("div", {
                className: Ot.checkbox_check_round
            }))), b.createElement("div", {
                className: ut.short_border
            }))
        }
    }
    var Tt = n(6);
    const kt = t => b.createElement("div", Object.assign({}, Object(Tt.classes)(ut.def_switcher, ut.line, ut.setting_item, t.enabled ? ut.on : ut.off)), b.createElement("label", {
            className: Ot.select_checkbox
        }, "Correct spelling automatically", b.createElement("input", {
            className: Ot.checkbox,
            onChange: e => {
                t.toggle(e.target.checked)
            },
            checked: t.enabled,
            type: "checkbox"
        }), b.createElement("div", {
            className: Ot.checkbox_check
        }, b.createElement("div", {
            className: Ot.checkbox_check_round
        }))), b.createElement("div", {
            className: ut.short_border
        })),
        Ct = t => {
            const {
                actions: e,
                activeTab: n,
                config: r,
                settings: i,
                user: o,
                siteCategory: a,
                openUrl: s,
                openSubscriptionDialog: u
            } = t, c = o.premium;
            return b.createElement("div", null, b.createElement(St, {
                domain: r.domain,
                toggleSite: e.toggleSite,
                enabledInConfig: r.enabled,
                enabledInSettings: i.enabled,
                favicon: n && n.favIconUrl,
                siteCategory: a
            }), b.createElement(xt, {
                enabledDefs: i.enabledDefs,
                toggleDefs: e.toggleDefs
            }), o.experiments && o.experiments.autocorrectEnabled && b.createElement(kt, {
                enabled: i.autocorrectEnabled || !1,
                toggle: t => {
                    e.toggleAutocorrect(t), lt.a.autocorrectToggleClick(t ? "on" : "off")
                }
            }), b.createElement(Et, {
                changeStrongDialect: e.changeStrongDialect,
                dialectStrong: i.dialectStrong,
                dialectWeak: i.dialectWeak
            }), !c && b.createElement(mt, {
                user: o,
                openUrl: s,
                openSubscriptionDialog: u
            }))
        };
    var Nt = n(21);
    class jt extends b.Component {
        constructor() {
            super(...arguments), this.handleClick = () => {
                pe().bgRpc.api.logout(), this.props.close()
            }
        }
        render() {
            return b.createElement("div", {
                className: ut.userPanel
            }, b.createElement("span", {
                className: ut.email
            }, this.props.email), "·", b.createElement("span", {
                className: ut.link
            }, b.createElement(Nt.a, {
                clickHandler: this.handleClick
            }, "Log out")))
        }
    }
    var It = n(251),
        At = n(446);
    class Pt extends b.Component {
        render() {
            const {
                user: t,
                settings: e,
                config: n,
                activeTab: r,
                actions: i,
                close: o,
                openUrl: s,
                openWebEditor: u,
                openSubscriptionDialog: c,
                reloadTab: l,
                isSafari: f
            } = this.props, d = Object(a.d)(ut.gr_popup_settings, t.premium ? ut.upgraded : ut.free, {
                [ut.not_supported]: !n.enabled,
                [ut.no_fixes]: !t.fixed_errors || isNaN(t.fixed_errors),
                [ut.show_news]: e.showNews && n.enabled,
                [ut.has_favicon]: r && !!r.favIconUrl
            }), p = !!e.gdocsWasInitiallyDisabled, h = !this.props.gdocsIsActiveTab || (p ? e.enabled : e.gdocsOptedIn && e.enabled) ? [b.createElement(bt, {
                key: "news",
                showNews: i.showNews
            }), b.createElement(Ct, {
                key: "content",
                actions: Object.assign(Object.assign({}, i), {
                    toggleSite: (t, e) => {
                        i.toggleSite(t, e), this.props.gdocsIsActiveTab && l(r && r.id)
                    }
                }),
                activeTab: r,
                config: n,
                settings: e,
                user: t,
                siteCategory: It.a.other,
                openUrl: s,
                openSubscriptionDialog: c
            })] : [b.createElement(At.c, {
                key: "opt-in",
                onClick: () => {
                    i.toggleSite(!0, n.domain), i.gdocsOptedIn(), lt.a.checkingToggleClick("toolbar", It.a.gdocs, "on"), l(r && r.id)
                }
            })], m = f;
            return b.createElement("div", {
                className: d
            }, b.createElement("div", {
                className: ut.content
            }, b.createElement(dt.a, {
                hideDelimiter: m
            }), m && b.createElement(jt, {
                email: t.email,
                close: o
            }), h, b.createElement(ft, {
                openWebEditor: u
            })))
        }
    }
    var Mt = n(38),
        Dt = n(262);
    const Rt = () => b.createElement(b.Fragment, null, b.createElement("div", {
            className: Dt.buttons
        }, b.createElement("a", {
            href: Object(Mt.m)("signupHook", "toolbarMenu"),
            "data-fire": "login-attempt, settings_toolbar_sign_up",
            "data-test-attr": "signUpLink",
            target: "__blank",
            className: Object(a.d)(Dt.button, Dt.auth_button),
            role: "button"
        }, b.createElement("span", {
            className: Dt.sign_up
        }, "Sign Up"), b.createElement("span", {
            className: Dt.free
        }, "It's free"))), b.createElement("div", {
            className: Dt.footer
        }, b.createElement("div", {
            className: Dt.login_text
        }, "Already have an account?", " ", b.createElement("a", {
            href: Object(Mt.l)(),
            "data-fire": "login-attempt, settings_toolbar_sign_in",
            "data-test-attr": "signInLink",
            target: "__blank",
            className: Dt.signin_link
        }, "Log in")))),
        Ft = () => b.createElement(b.Fragment, null, b.createElement("div", {
            className: Object(a.d)(Dt.buttons, Dt.main_signin)
        }, b.createElement("a", {
            href: Object(Mt.l)(),
            "data-fire": "login-attempt, settings_toolbar_sign_in",
            "data-test-attr": "signInLink",
            target: "__blank",
            className: Object(a.d)(Dt.button, Dt.auth_button),
            role: "button"
        }, b.createElement("span", {
            className: Dt.sign_up
        }, "LOG IN"))), b.createElement("div", {
            className: Dt.footer
        }, b.createElement("div", {
            className: Dt.login_text
        }, "Don't have an account?", " ", b.createElement("a", {
            href: Object(Mt.m)("signupHook", "toolbarMenu"),
            "data-fire": "login-attempt, settings_toolbar_sign_up",
            "data-test-attr": "signUpLink",
            target: "__blank",
            className: Dt.signin_link
        }, b.createElement("b", null, "SIGN UP")), " ", b.createElement("span", {
            className: Dt.free
        }, "It's free")))),
        Lt = ({
            loginButtonFirst: t
        }) => b.createElement("div", {
            className: Dt.signin
        }, b.createElement(dt.a, null), b.createElement("div", {
            className: Dt.content
        }, b.createElement("div", {
            className: Dt.banner
        }, "Grammarly is active, but", b.createElement("br", null), "key features are missing"), b.createElement("div", {
            className: Dt.descr
        }, b.createElement("div", {
            className: Dt.descr_title
        }, "Sign up now to unlock the following:"), b.createElement("ul", null, b.createElement("li", null, "Enable/disable on preferred websites"), b.createElement("li", null, "Store your personal dictionary"), b.createElement("li", null, "Save and access your work from any computer"), b.createElement("li", null, "Get weekly writing statistics and tips"))), t ? b.createElement(Ft, null) : b.createElement(Rt, null)));
    var Ut = n(227),
        zt = n(178);
    const Vt = (t = "") => Object(a.d)(ut.line, ut.unsupported_item, t),
        Bt = ({
            favicon: t,
            domain: e,
            customTitle: n
        }) => {
            const r = n ? b.createElement("span", null, " ", n) : b.createElement("span", null, " ", b.createElement("span", {
                className: ut.domain
            }, e), " is Not Supported");
            return b.createElement("div", {
                className: Vt()
            }, b.createElement("span", {
                className: ut.unsupported_title
            }, b.createElement("span", {
                className: ut.favicon
            }, b.createElement("img", {
                width: "16px",
                height: "16px",
                src: t
            })), r), b.createElement("br", null), b.createElement("span", null, "For technical reasons, we currently do not check your text on this version of ", b.createElement("span", {
                className: Object(a.d)(ut.domain, ut.domain_in_details)
            }, e)))
        },
        Wt = ({
            favicon: t,
            domain: e,
            customMessage: n
        }) => {
            const {
                message: r,
                title: i = e
            } = n;
            return b.createElement("div", {
                className: Vt(ut.unsupported_permanently)
            }, b.createElement("span", {
                className: ut.unsupported_title
            }, b.createElement("span", {
                className: ut.favicon
            }, b.createElement("img", {
                width: "16px",
                height: "16px",
                src: t
            })), " ", i), b.createElement("br", null), b.createElement("span", {
                dangerouslySetInnerHTML: {
                    __html: zt.sanitize(r, {
                        ALLOWED_TAGS: ["a", "br", "strong", "i"],
                        ALLOWED_ATTR: ["href", "class"]
                    })
                }
            }))
        },
        Gt = ({
            favicon: t,
            domain: e
        }) => b.createElement("div", {
            className: Vt(ut.unsupported_temporary)
        }, b.createElement("span", {
            className: ut.unsupported_title
        }, "Checking Down on", " ", b.createElement("span", {
            className: ut.favicon
        }, b.createElement("img", {
            width: "16px",
            height: "16px",
            src: t
        })), " ", b.createElement("span", {
            className: ut.domain
        }, e)), b.createElement("br", null), b.createElement("span", null, "There appears to be a temporary glitch affecting Grammarly's performance on ", b.createElement("span", {
            className: Object(a.d)(ut.domain, ut.domain_in_details)
        }, e), ". Functionality should return soon.")),
        Ht = () => b.createElement("div", {
            className: Vt(ut.unsupported_grammarly)
        }, b.createElement("span", {
            className: ut.diamond
        }), b.createElement("span", {
            className: ut.unsupported_title
        }, "You Can't Improve on Perfection"), b.createElement("br", null), b.createElement("span", null, "Naturally, Grammarly's browser extension is disabled while you use the Grammarly Editor."));

    function $t({
        domain: t,
        temporary: e,
        grammarlyEditor: n,
        unsupportedMessage: r
    }) {
        const i = Ut.a[t];
        let o;
        return o = n ? "grammarly_editor" : i && i.getMessage || r && r.getMessage ? "custom_message" : e ? "temporary" : "default", o
    }
    class qt extends b.Component {
        componentWillMount() {
            const {
                config: {
                    domain: t,
                    temporary: e,
                    grammarlyEditor: n
                }
            } = this.props, r = $t({
                domain: t,
                grammarlyEditor: n,
                temporary: e
            });
            Object(l.a)().settingsUsupportedShow(r)
        }
        render() {
            const {
                config: {
                    domain: t,
                    temporary: e,
                    grammarlyEditor: n,
                    unsupportedMessage: r
                },
                activeTab: {
                    favIconUrl: i
                }
            } = this.props, o = Object(a.d)(ut.gr_popup_settings, {
                [ut.has_favicon]: Boolean(i)
            }), s = function({
                domain: t,
                favIconUrl: e
            }, n, r) {
                let i, o = Ut.a[t];
                switch (r && (o = r), n) {
                    case "grammarly_editor":
                        i = b.createElement(Ht, null);
                        break;
                    case "custom_message":
                        i = b.createElement(Wt, {
                            customMessage: o,
                            favicon: e,
                            domain: t
                        });
                        break;
                    case "temporary":
                        i = b.createElement(Gt, {
                            favicon: e,
                            domain: t
                        });
                        break;
                    case "default":
                    default:
                        i = b.createElement(Bt, {
                            favicon: e,
                            domain: t,
                            customTitle: o && o.title
                        })
                }
                return i
            }({
                domain: t,
                favIconUrl: i
            }, $t({
                domain: t,
                grammarlyEditor: n,
                temporary: e,
                unsupportedMessage: r
            }), r);
            return b.createElement("div", {
                className: o
            }, b.createElement("div", {
                className: Object(a.d)(ut.content, ut.unsupported_site)
            }, b.createElement(dt.a, null), s, b.createElement(ft, {
                openWebEditor: this.props.openWebEditor
            })))
        }
    }
    var Yt = n(564),
        Kt = n(305),
        Qt = n(451),
        Jt = n(565);
    class Xt extends b.Component {
        componentDidUpdate() {
            if (this.props.resize(), this.element && Object(u.m)()) {
                const t = Object(i.c)(),
                    e = this.element.clientHeight,
                    n = this.element.clientWidth;
                t.setPopupSize && t.setPopupSize(n, e)
            }
        }
        componentDidMount() {
            this.props.resize({
                force: !0
            }), a.l.call(Object(g.findDOMNode)(this), "click", t => {
                const e = t.target,
                    n = "A" === e.nodeName ? e : e.parentNode && "A" === e.parentNode.nodeName ? e.parentNode : null;
                n && (t.preventDefault(), this.processHrefClick(n))
            })
        }
        componentWillMount() {
            a.l.call(document, "popup-open", this.props.resize);
            const {
                user: t
            } = this.props;
            this._isGdocsPossible() && Object(Jt.a)(t, this.props.settings) && s.emitFocusedTab(Qt.c.hide, {
                _tag: Qt.c.hide
            })
        }
        _gdocsIsActiveTab() {
            const t = this.props.activeTab && "url" in this.props.activeTab ? this.props.activeTab.url : void 0;
            return !!t && Yt.a.test(t)
        }
        _isGdocsPossible() {
            const {
                user: t
            } = this.props;
            return this._gdocsIsActiveTab() && (Object(u.j)() || (Object(u.l)() || Object(u.m)()) && t.experiments && t.experiments.gdocsForAllBrowsers)
        }
        _isDataControlActive() {
            const t = this.props;
            return t.connection && "active" === t.connection.dataControl
        }
        processHrefClick({
            href: t,
            dataset: e
        }) {
            const n = Object(i.c)(),
                {
                    fire: r
                } = e;
            if (r) {
                const [t, e] = r.split(", ");
                if ("login-attempt" === t && ("settings_toolbar_sign_up" === e && lt.a.signUpButtonClick(), "settings_toolbar_sign_in" === e && lt.a.signInButtonClick(), n.beginOAuth)) return n.beginOAuth(), void Zt()
            }
            t && ne(t)
        }
        render() {
            const t = this.props,
                {
                    user: {
                        anonymous: e
                    },
                    config: n,
                    settings: r
                } = t,
                {
                    enabled: i,
                    servicePage: o
                } = n,
                s = this._isDataControlActive() ? b.createElement("div", {
                    className: Object(a.d)(h.newDataControl, h.settings)
                }, b.createElement(p.b, {
                    openAcceptPage: ie
                })) : t.user.edc && Kt.a.isEdcBlocked(t.user) ? b.createElement(m, {
                    institutionName: t.user.edc.institutionName,
                    ssoUrl: t.user.edc.ssoUrl
                }) : this._gdocsIsActiveTab() ? this._isGdocsPossible() ? e ? b.createElement(Qt.a, {
                    onClick: () => t.actions.clickGdocsAuthentication && t.actions.clickGdocsAuthentication()
                }) : b.createElement(Pt, Object.assign({}, t, {
                    gdocsIsActiveTab: this._gdocsIsActiveTab(),
                    isSafari: Object(u.m)()
                })) : b.createElement(qt, Object.assign({}, t)) : e ? b.createElement(Lt, {
                    loginButtonFirst: !0 === r.showLoginReminder
                }) : i || o ? b.createElement(Pt, Object.assign({}, t, {
                    gdocsIsActiveTab: this._gdocsIsActiveTab(),
                    isSafari: Object(u.m)()
                })) : b.createElement(qt, Object.assign({}, t)),
                c = this.props.user.edc;
            return b.createElement("div", {
                ref: t => this.element = t
            }, s, c && b.createElement(ct, Object.assign({}, c)))
        }
    }

    function Zt() {
        const t = Object(i.c)();
        t.closePopup ? t.closePopup() : Object(a.f)("close-popup")
    }

    function te({
        force: t
    } = {}) {
        Object(a.f)("update-window-size", {
            force: t
        })
    }

    function ee(t) {
        s.emitFocusedTab("reload-tab", {}), Zt()
    }

    function ne(t) {
        Object(i.c)().openUrl(t), Zt()
    }

    function re(t) {
        let e = t ? Object(u.f)().newDoc : Object(u.f)().app;
        if (Object(u.m)()) {
            const t = new URL(e);
            t.search = (t.search ? t.search + "&" : "?") + "disableAppsPromotion=true", e = t.toString()
        }
        ne(e)
    }

    function ie() {
        pe().bgRpc.api.openDataControl()
    }

    function oe(t) {
        Object(i.c)().openPopupSubscriptionDialog(t), Zt()
    }
    var ae = function(t, e, n, r) {
        return new(n || (n = Promise))((function(i, o) {
            function a(t) {
                try {
                    u(r.next(t))
                } catch (t) {
                    o(t)
                }
            }

            function s(t) {
                try {
                    u(r.throw(t))
                } catch (t) {
                    o(t)
                }
            }

            function u(t) {
                var e;
                t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                    t(e)
                }))).then(a, s)
            }
            u((r = r.apply(t, e || [])).next())
        }))
    };
    const se = d.a.create("universal.popup");

    function ue(t, e) {
        const {
            config: n,
            user: r,
            settings: i
        } = t, {
            enabled: o
        } = n;
        lt.a.toolbarButtonClick("browser", o ? "supported" : "unsupported"), r.anonymous || o && i.showNews && e.seenNews()
    }
    let ce;

    function le() {
        return void 0 === ce && (ce = !!document.querySelector(".popup"), window.IS_POPUP = ce), ce
    }
    var fe = n(430);
    class de extends r.a {
        constructor(t) {
            super({
                browser: t.browser,
                context: "popup"
            }), Object(o.b)(), this.browserApi = t.browserApi, s.init(t.browserApi.message), Object(i.f)(t.browserApi), this.bgRpc = new fe.a(s)
        }
        static getInstance() {
            if (void 0 === this._instance) throw new Error("Env not inited yet");
            return this._instance
        }
        static init(t) {
            if (void 0 !== this._instance) throw new Error("Env already inited");
            const e = new de(t);
            if (this._instance = e, r.a.initShared(e), !le) throw new Error("Not a popup");
            ! function() {
                ae(this, void 0, void 0, (function*() {
                    let t = !1;
                    Object(a.a)(document.documentElement, "gr-" + Object(u.b)()), Object(u.o)() && Object(a.a)(document.documentElement, "windows"), Object(u.m)() && Object(a.a)(document.body, "gr-safari");
                    const {
                        store: e,
                        actions: n,
                        subscribe: r
                    } = Object(c.a)({});
                    r(r => {
                        t || (t = !0, function(t, e) {
                            se.warn("RENDER FROM", {
                                    store: t,
                                    actions: e
                                }),
                                function(t, e) {
                                    const n = st(t => t, (t, n) => ({
                                        actions: e
                                    }))(Xt);
                                    Object(g.render)(b.createElement(E, {
                                        store: t
                                    }, b.createElement(n, {
                                        close: Zt,
                                        resize: te,
                                        openUrl: ne,
                                        openWebEditor: re,
                                        openSubscriptionDialog: oe,
                                        reloadTab: ee
                                    })), document.querySelector(".popup"))
                                }(t, e), Object(u.m)() ? document.addEventListener("popup-open", () => {
                                    ue(t.getState(), e), s.emitBackground("tab-connected", {
                                        tab: "popup"
                                    })
                                }) : ue(t.getState(), e)
                        }(e, n))
                    }), s.emitBackground("tab-connected", {
                        tab: "popup"
                    }), Object(f.g)(() => !t && Object(l.a)().settingsPopupTimeout(), 2e3)
                }))
            }()
        }
    }

    function pe() {
        return de.getInstance()
    }
    var he, be = n(314);
    he = {
        browser: "chrome",
        browserApi: Object(be.a)(!1)
    }, de.init(he)
}]);