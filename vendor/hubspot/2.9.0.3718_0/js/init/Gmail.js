! function(e) {
    "use strict";
    var t = "undefined" != typeof window ? window : self,
        n = t.Q;
    t.Q = e();
    t.Q.noConflict = function() {
        t.Q = n;
        return this
    }
}(function() {
    "use strict";
    var e = !1;
    try {
        throw new Error
    } catch (t) {
        e = !!t.stack
    }
    var t, n = y(),
        r = function() {
            var e = {
                    task: void 0,
                    next: null
                },
                t = e,
                n = !1,
                o = void 0,
                u = !1,
                i = [];

            function a() {
                for (var t, r; e.next;) {
                    t = (e = e.next).task;
                    e.task = void 0;
                    if (r = e.domain) {
                        e.domain = void 0;
                        r.enter()
                    }
                    s(t, r)
                }
                for (; i.length;) s(t = i.pop());
                n = !1
            }

            function s(e, t) {
                try {
                    e()
                } catch (e) {
                    setTimeout(function() {
                        throw e
                    }, 0)
                }
                t && t.exit()
            }
            r = function(e) {
                t = t.next = {
                    task: e,
                    domain: u && process.domain,
                    next: null
                };
                if (!n) {
                    n = !0;
                    o()
                }
            };
            if ("function" == typeof setImmediate) o = "undefined" != typeof window ? setImmediate.bind(window, a) : function() {
                setImmediate(a)
            };
            else if ("undefined" != typeof MessageChannel) {
                var c = new MessageChannel;
                c.port1.onmessage = function() {
                    o = f;
                    c.port1.onmessage = a;
                    a()
                };
                var f = function() {
                    c.port2.postMessage(0)
                };
                o = function() {
                    setTimeout(a, 0);
                    f()
                }
            } else o = function() {
                setTimeout(a, 0)
            };
            r.runAfter = function(e) {
                i.push(e);
                if (!n) {
                    n = !0;
                    o()
                }
            };
            return r
        }(),
        o = Function.call;

    function u(e) {
        return function() {
            return o.apply(e, arguments)
        }
    }
    var i = u(Array.prototype.slice),
        a = u(Array.prototype.reduce),
        s = u(Array.prototype.indexOf),
        c = u(Array.prototype.map),
        f = Object.create,
        l = Object.defineProperty;

    function d(e) {
        return e === Object(e)
    }
    var p = "From previous event:";

    function v(t, n) {
        if (e && n.stack && "object" == typeof t && null !== t && t.stack) {
            for (var r = [], o = n; o; o = o.source)
                if (o.stack && (!t.__minimumStackCounter__ || t.__minimumStackCounter__ > o.stackCounter)) {
                    l(t, "__minimumStackCounter__", {
                        value: o.stackCounter,
                        configurable: !0
                    });
                    r.unshift(o.stack)
                } r.unshift(t.stack);
            var u = h(r.join("\n" + p + "\n"));
            l(t, "stack", {
                value: u,
                configurable: !0
            })
        }
    }

    function h(e) {
        for (var t = e.split("\n"), n = [], r = 0; r < t.length; ++r) {
            var o = t[r];
            _(o) || E(o) || !o || n.push(o)
        }
        return n.join("\n")
    }

    function E(e) {
        return -1 !== e.indexOf("(module.js:") || -1 !== e.indexOf("(node.js:")
    }

    function g(e) {
        var t = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(e);
        if (t) return [t[1], Number(t[2])];
        var n = /at ([^ ]+):(\d+):(?:\d+)$/.exec(e);
        if (n) return [n[1], Number(n[2])];
        var r = /.*@(.+):(\d+)$/.exec(e);
        return r ? [r[1], Number(r[2])] : void 0
    }

    function _(e) {
        var r = g(e);
        if (!r) return !1;
        var o = r[0],
            u = r[1];
        return o === t && u >= n && u <= K
    }

    function y() {
        if (e) try {
            throw new Error
        } catch (e) {
            var n = e.stack.split("\n"),
                r = g(n[0].indexOf("@") > 0 ? n[1] : n[2]);
            if (!r) return;
            t = r[0];
            return r[1]
        }
    }

    function m(e) {
        return e instanceof N ? e : T(e) ? q(e) : V(e)
    }
    var S = {
            longStackSupport: !1
        },
        L = 1;
    "object" == typeof process && process && process.env && process.env.Q_DEBUG && (S.longStackSupport = !0);

    function w() {
        var t, n = [],
            o = f(w.prototype),
            u = f(N.prototype);
        u.promiseDispatch = function(e, o, u) {
            var a = i(arguments);
            n ? n.push(a) : r(function() {
                t.promiseDispatch.apply(t, a)
            })
        };
        u._inspect = function() {
            return t ? t._inspect() : {
                state: "pending"
            }
        };
        if (S.longStackSupport && e) try {
            throw new Error
        } catch (e) {
            u.stack = e.stack.substring(e.stack.indexOf("\n") + 1);
            u.stackCounter = L++
        }

        function s(o) {
            t = o;
            S.longStackSupport && e && (u.source = o);
            a(n, function(e, t) {
                r(function() {
                    o.promiseDispatch.apply(o, t)
                })
            }, void 0);
            n = void 0
        }
        o.promise = u;
        o.resolve = function(e) {
            t || s(m(e))
        };
        o.reject = function(e) {
            t || s(U(e))
        };
        return o
    }
    S.Promise = b;

    function b(e) {
        if (!(this instanceof b)) throw Error("must use `new` with `Q.Promise` constructor.");
        if ("function" != typeof e) throw new TypeError("resolver must be a function.");
        var t = w();
        try {
            e(t.resolve, t.reject)
        } catch (e) {
            t.reject(e)
        }
        return t.promise
    }
    var O, A = (O = {}, function(e) {
        if (!O[e]) {
            O[e] = !0;
            window.enviro && (window.enviro.deployed && !window.enviro.deployed("q") || window.enviro.debug && window.enviro.debug("q")) && console.error(e);
            window.newrelic && window.newrelic.addPageAction && window.newrelic.addPageAction("Qv6DeprecationWarning", {
                deprecationMessage: e
            })
        }
    });

    function R(e, t, n) {
        return function r(o) {
            this instanceof r ? A("Q.Promise." + t + " is not a constructor") : this !== b && A("Q.Promise." + t + " not called on Q.Promise");
            n && (o && "function" == typeof o[Symbol.iterator] ? Array.isArray(o) || A("Q.Promise." + t + " called with non-array") : A("Q.Promise." + t + " called with non-iterable"));
            return e.apply(this, arguments)
        }
    }
    b.race = R(M, "race", !0);
    b.all = R(H, "all", !0);
    b.reject = R(U, "reject");
    b.resolve = R(m, "resolve");

    function M(e) {
        return new b(function(t, n) {
            for (var r = 0, o = e.length; r < o; r++) m(e[r]).then(t, n)
        })
    }

    function N(e, t, n) {
        void 0 === t && (t = function(e) {
            return U(new Error("Promise does not support operation: " + e))
        });
        void 0 === n && (n = function() {
            return {
                state: "unknown"
            }
        });
        var r = f(N.prototype);
        r.promiseDispatch = function(n, o, u) {
            var i;
            try {
                i = e[o] ? e[o].apply(r, u) : t.call(r, o, u)
            } catch (e) {
                i = U(e)
            }
            n && n(i)
        };
        r._inspect = n;
        if (n) {
            var o = n();
            "rejected" === o.state && (r.exception = o.reason)
        }
        return r
    }
    N.prototype.toString = function() {
        return "[object Promise]"
    };
    N.prototype.then = function(e, t) {
        var n = this,
            o = w(),
            u = !1;

        function i(t) {
            try {
                return "function" == typeof e ? e(t) : t
            } catch (e) {
                return U(e)
            }
        }

        function a(e) {
            if ("function" == typeof t) {
                v(e, n);
                try {
                    return t(e)
                } catch (e) {
                    return U(e)
                }
            }
            return U(e)
        }
        r(function() {
            n.promiseDispatch(function(e) {
                if (!u) {
                    u = !0;
                    o.resolve(i(e))
                }
            }, "when", [function(e) {
                if (!u) {
                    u = !0;
                    o.resolve(a(e))
                }
            }])
        });
        return o.promise
    };

    function k(e, t, n) {
        return m(e).then(t, n)
    }

    function x(e) {
        return e instanceof N
    }

    function T(e) {
        return d(e) && "function" == typeof e.then
    }
    var P = [],
        j = [],
        I = !0;

    function C() {
        P.length = 0;
        j.length = 0;
        I || (I = !0)
    }

    function D(e, t) {
        if (I) {
            j.push(e);
            var n = t + "";
            S.customizeRejectionString && (n = S.customizeRejectionString(t));
            t && void 0 !== t.stack ? t.stack.slice && t.stack.slice(0, n.length) === n ? P.push(t.stack) : P.push(n + "\n" + t.stack) : P.push("(no stack) " + n)
        }
    }

    function F(e) {
        if (I) {
            var t = s(j, e);
            if (-1 !== t) {
                j.splice(t, 1);
                P.splice(t, 1)
            }
        }
    }
    S.resetUnhandledRejections = C;
    S.getUnhandledReasons = function() {
        return P.slice()
    };
    S.stopUnhandledRejectionTracking = function() {
        C();
        I = !1
    };
    S.getUnhandledRejectionValues = function() {
        return c(j, function(e) {
            return e.exception
        })
    };
    C();

    function U(e) {
        var t = N({
            when: function(t) {
                t && F(this);
                return t ? t(e) : this
            }
        }, function() {
            return this
        }, function() {
            return {
                state: "rejected",
                reason: e
            }
        });
        D(t, e);
        return t
    }

    function V(e) {
        return N({
            when: function() {
                return e
            },
            apply: function(t, n) {
                return e.apply(t, n)
            }
        }, void 0, function() {
            return {
                state: "fulfilled",
                value: e
            }
        })
    }

    function q(e) {
        var t = w();
        r(function() {
            try {
                e.then(t.resolve, t.reject)
            } catch (e) {
                t.reject(e)
            }
        });
        return t.promise
    }

    function Q(e, t, n) {
        var o = w();
        r(function() {
            e.promiseDispatch(o.resolve, t, n)
        });
        return o.promise
    }

    function G(e) {
        return Q(e, "apply", [void 0, i(arguments, 1)])
    }

    function H(e) {
        return k(e, function(e) {
            var t = 0,
                n = w();
            a(e, function(r, o, u) {
                var i;
                if (x(o) && "fulfilled" === (i = o._inspect()).state) e[u] = i.value;
                else {
                    ++t;
                    k(o, function(r) {
                        e[u] = r;
                        0 == --t && n.resolve(e)
                    }, n.reject)
                }
            }, void 0);
            0 === t && n.resolve(e);
            return n.promise
        })
    }
    N.prototype.catch = function(e) {
        return this.then(void 0, e)
    };
    N.prototype.finally = function(e) {
        if (!e || "function" != typeof e.apply) throw new Error("Q can't apply finally callback");
        e = m(e);
        return this.then(function(t) {
            return G(e).then(function() {
                return t
            })
        }, function(t) {
            return G(e).then(function() {
                throw t
            })
        })
    };
    N.prototype.done = function(e, t) {
        var n = function(e) {
                r(function() {
                    v(e, o);
                    if (!S.onerror) throw e;
                    S.onerror(e)
                })
            },
            o = e || t ? this.then(e, t) : this;
        o.then(void 0, n)
    };
    var K = y();
    return S
});
if ("undefined" != typeof hubspot && hubspot.define && "undefined" != typeof window) {
    hubspot.define("q", [], function() {
        return window.Q
    });
    hubspot.define("Q", [], function() {
        window.enviro && (window.enviro.deployed && !window.enviro.deployed("q") || window.enviro.debug && window.enviro.debug("q")) && console.warn('[q] Importing from "Q" is deprecated. Please use "q".');
        return window.Q
    })
}! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        e[r].call(o.exports, o, o.exports, n);
        o.l = !0;
        return o.exports
    }
    n.m = e;
    n.c = t;
    n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    };
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        n.d(t, "a", t);
        return t
    };
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    };
    n.p = "//static.hsappstatic.net/SignalsExtension/static-2.297/";
    n(n.s = 149)
}({
    0: function(e, t, n) {
        "use strict";
        "use es6";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1;
                        r.configurable = !0;
                        "value" in r && (r.writable = !0);
                        Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    n && e(t.prototype, n);
                    r && e(t, r);
                    return t
                }
            }(),
            o = s(n(2)),
            u = s(n(27)),
            i = n(25),
            a = n(14);

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function c(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var f = function() {
            function e() {
                c(this, e);
                this._assignMethods()
            }
            r(e, [{
                key: "_assignMethods",
                value: function() {
                    this.log = this._getLogFn("log", e.LEVELS.log);
                    this.debug = this._getLogFn("debug", e.LEVELS.debug);
                    this.info = this._getLogFn("info", e.LEVELS.info);
                    this.warn = this._getLogFn("warn", e.LEVELS.warn);
                    this.error = this._getLogFn("error", e.LEVELS.error, !0)
                }
            }, {
                key: "_getLogFn",
                value: function(t, n) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (!this._shouldLog(t, n)) return i.emptyFunction;
                    var o = e.CONSOLE_FN[t] || e.CONSOLE_FN.log || i.emptyFunction;
                    return function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        var u = new Array(t.length + 1);
                        u[0] = "[HubSpot Sales]";
                        for (var i = 0; i < t.length; i++) {
                            var s = t[i];
                            u[i + 1] = this._formatError(s)
                        }
                        r && u.length > 1 && (0, a.newErrorEntry)(u[1]);
                        return this._callLogFn(o, u)
                    }.bind(this)
                }
            }, {
                key: "_callLogFn",
                value: function(t, n) {
                    return t.apply(e.CONSOLE_FN, n)
                }
            }, {
                key: "_shouldLog",
                value: function(e, t) {
                    return "background" === u.default || this._aboveLevelThreshold(t)
                }
            }, {
                key: "_aboveLevelThreshold",
                value: function(t) {
                    return o.default.deployed("console") ? t >= e.LEVELS.error : t >= e.LEVELS.log
                }
            }, {
                key: "_formatError",
                value: function(e) {
                    return e instanceof Error ? e.stack ? e.message && -1 === e.stack.indexOf(e.message) ? "Error: " + e.message + "\n" + e.stack : e.stack : e.sourceURL ? e.message + "\n" + e.sourceURL + ":" + e.line : e : e
                }
            }]);
            return e
        }();
        f.LEVELS = {
            log: 0,
            debug: 1,
            info: 2,
            warn: 3,
            error: 4
        };
        f.CONSOLE_FN = window.console || {};
        t.default = new f;
        e.exports = t.default
    },
    1: function(e, t, n) {
        "use strict";
        "use es6";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = chrome;
        e.exports = t.default
    },
    104: function(e, t, n) {
        "use strict";
        "use es6";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.loadPopupRemoteAssets = t.loadGmailRemoteAssets = void 0;
        var r = a(n(2)),
            o = a(n(105)),
            u = a(n(63)),
            i = a(n(0));

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.loadGmailRemoteAssets = function(e) {
            i.default.debug("Loading remote Gmail assets");
            var t = (0, u.default)(r.default.getShort("REMOTE_ASSETS"), "/SalesExtensionRemoteAssets/ex/gmail", ".css"),
                n = (0, u.default)(r.default.getShort("REMOTE_ASSETS"), "/SalesExtensionRemoteAssets/ex/gmail", ".js");
            (0, o.default)(t);
            return e(n)
        }, t.loadPopupRemoteAssets = function(e) {
            i.default.debug("Loading remote Inbox assets");
            var t = (0, u.default)(r.default.getShort("REMOTE_ASSETS"), "/SalesExtensionRemoteAssets/ex/popup", ".css"),
                n = (0, u.default)(r.default.getShort("REMOTE_ASSETS"), "/SalesExtensionRemoteAssets/ex/popup", ".js");
            (0, o.default)(t);
            return e(n)
        }
    },
    105: function(e, t, n) {
        "use strict";
        "use es6";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = u(n(3)),
            o = u(n(37));

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = function(e) {
            return new r.default.Promise(function(t, n) {
                var r = o.default.createElement("link");
                r.rel = "stylesheet";
                r.type = "text/css";
                r.onload = function() {
                    return t()
                };
                r.onerror = function() {
                    return n()
                };
                r.href = e;
                o.default.head.appendChild(r)
            })
        };
        t.default = i;
        e.exports = t.default
    },
    106: function(e, t, n) {
        "use strict";
        "use es6";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(n(3));

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.default = function(e) {
            return new r.default.Promise(function(t, n) {
                var r = document.createElement("script");
                r.src = e;
                document.body.appendChild(r);
                r.onload = function() {
                    return t()
                };
                r.onerror = function() {
                    return n()
                }
            })
        };
        e.exports = t.default
    },
    116: function(e, t) {
        e.exports = hubspot.requireSync("InboxSDK")
    },
    14: function(e, t, n) {
        "use strict";
        "use es6";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = 20,
            o = [],
            u = t.newErrorEntry = function(e) {
                (o = o.slice(1, r)).push(e)
            };
        t.initDebugLog = function() {
            window.onerror = function(e, t, n) {
                u(e + " - " + t + " (" + n + ")")
            }
        }, t.getLastErrors = function() {
            return o
        }
    },
    149: function(e, t, n) {
        "use strict";
        "use es6";
        var r = v(n(116)),
            o = n(150),
            u = n(104),
            i = v(n(37)),
            a = v(n(151)),
            s = v(n(38)),
            c = v(n(53)),
            f = v(n(63)),
            l = v(n(106)),
            d = v(n(2)),
            p = n(5);

        function v(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var h = "xhr_interceptor";
        if (s.default.self === s.default.top) {
            (async function() {
                await c.default.init();
                r.default.load("1", o.APP_ID).then(function(e) {
                    return (0, u.loadGmailRemoteAssets)(a.default).then(function() {
                        hubspot.require(["SalesExtensionRemoteAssets/gmail/init"], function(t) {
                            return t(e)
                        })
                    })
                })
            })()
        }
        var E = function() {
            i.default.addEventListener(h, function(e) {
                (0, p.sendMessage)({
                    method: h,
                    data: e.detail
                })
            });
            var e = d.default.getShort("REMOTE_ASSETS"),
                t = "/SalesExtensionRemoteAssets/ex/xhrInterceptor";
            "local" === e && (t = "/SalesExtensionRemoteAssets/ex/xhrInterceptor/xhrInterceptor");
            var n = (0, f.default)(e, t, ".js");
            (0, l.default)(n)
        };
        "complete" === i.default.readyState ? E() : i.default.addEventListener("DOMContentLoaded", E)
    },
    150: function(e, t, n) {
        "use strict";
        "use es6";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.APP_ID = "sdk_SIDEKICK_ab674cd386"
    },
    151: function(e, t, n) {
        "use strict";
        "use es6";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(n(116));

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.default = function(e) {
            return r.default.loadScript(e, {
                nowrap: !0
            })
        };
        e.exports = t.default
    },
    2: function(e, t) {
        e.exports = hubspot.requireSync("enviro")
    },
    25: function(e, t, n) {
        "use strict";
        "use es6";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.emptyFunction = function() {}
    },
    27: function(e, t, n) {
        "use strict";
        "use es6";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = i(n(2)),
            o = i(n(3)),
            u = i(n(28));

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        r.default.deployed("q") || (o.default.longStackSupport = !0);
        var a = "chrome-extension:",
            s = u.default.pathname,
            c = u.default.protocol,
            f = c === a && -1 !== s.indexOf("background.html"),
            l = c === a && -1 !== s.indexOf("popup.html"),
            d = null;
        d = f ? "background" : l ? "popup" : "content_script";
        t.default = d;
        e.exports = t.default
    },
    28: function(e, t, n) {
        "use strict";
        "use es6";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = window.location;
        e.exports = t.default
    },
    3: function(e, t, n) {
        e.exports = hubspot.requireSync("q")
    },
    31: function(e, t, n) {
        "use strict";
        "use es6";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.open = window.open, t.chrome = window.chrome
    },
    32: function(e, t, n) {
        "use strict";
        "use es6";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.LogInfo = t.LogWarn = t.LogError = t.LogFatal = t.reportError = void 0;
        var r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            o = n(45),
            u = i(n(46));

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var a = t.reportError = function(e) {
            var t = e.error,
                n = e.level,
                r = e.fingerprint,
                u = void 0 === r ? [] : r,
                i = e.tags,
                a = void 0 === i ? {} : i,
                s = e.extraData,
                c = void 0 === s ? null : s,
                f = e.logger;
            c || (c = (0, o.getExtraErrorData)(t));
            window.Raven.captureException(t, {
                level: n,
                fingerprint: u,
                tags: a,
                extra: {
                    error: c
                }
            });
            var l = window.Raven.lastEventId();
            f("(Event Id: " + (l || "") + ")\nError reported with '" + (t.message || "") + "'");
            c && Object.keys(c).forEach(function(e) {
                c[e] && f("Extra Data [" + e + "]: ", c[e])
            });
            return l
        };
        t.LogFatal = function(e) {
            return a(r({
                level: "fatal",
                logger: u.default.error
            }, e))
        }, t.LogError = function(e) {
            return a(r({
                level: "error",
                logger: u.default.error
            }, e))
        }, t.LogWarn = function(e) {
            return a(r({
                level: "warning",
                logger: u.default.warn
            }, e))
        }, t.LogInfo = function(e) {
            return a(r({
                level: "info",
                logger: u.default.info
            }, e))
        }
    },
    37: function(e, t, n) {
        "use strict";
        "use es6";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = document;
        e.exports = t.default
    },
    38: function(e, t, n) {
        "use strict";
        "use es6";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = window;
        e.exports = t.default
    },
    45: function(e, t, n) {
        "use strict";
        "use es6";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            o = 2e3,
            u = ["number", "description", "line", "column"];
        t.getExtraErrorData = function(e) {
            if (!e) return null;
            var t = Object.keys(e).filter(function(e) {
                return !u.includes(e)
            });
            return t.length ? t.reduce(function(t, n) {
                switch (r(e[n])) {
                    case "boolean":
                    case "number":
                        t[n] = e[n];
                        break;
                    case "string":
                        var u = e[n].length > o ? "..." : "";
                        t[n] = "" + e[n].substr(0, o) + u;
                        break;
                    case "function":
                        t[n] = "function() { /* Function removed */ }";
                        break;
                    case "object":
                        null === e[n] ? t[n] = e[n] : t[n] = "/* Object, Error, or Array removed */"
                }
                return t
            }, {}) : null
        }
    },
    46: function(e, t, n) {
        "use strict";
        "use es6";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                n && e(t.prototype, n);
                r && e(t, r);
                return t
            }
        }();

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var u = function() {
            function e() {
                o(this, e);
                this._assignMethods()
            }
            r(e, [{
                key: "_assignMethods",
                value: function() {
                    this.log = this._getLogFn("log", e.LEVELS.log);
                    this.debug = this._getLogFn("debug", e.LEVELS.debug);
                    this.info = this._getLogFn("info", e.LEVELS.info);
                    this.warn = this._getLogFn("warn", e.LEVELS.warn);
                    this.error = this._getLogFn("error", e.LEVELS.error)
                }
            }, {
                key: "_getLogFn",
                value: function(t, n) {
                    if (!this._shouldLog(t, n)) return function() {};
                    var r = e.CONSOLE_FN[t] || e.CONSOLE_FN.log || function() {};
                    return function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        var o = new Array(t.length + 1);
                        o[0] = "[HubSpot Sales]";
                        for (var u = 0; u < t.length; u++) {
                            var i = t[u];
                            o[u + 1] = this._formatError(i)
                        }
                        return this._callLogFn(r, o)
                    }.bind(this)
                }
            }, {
                key: "_callLogFn",
                value: function(t, n) {
                    return t.apply(e.CONSOLE_FN, n)
                }
            }, {
                key: "_shouldLog",
                value: function(e, t) {
                    return this._aboveLevelThreshold(t)
                }
            }, {
                key: "_aboveLevelThreshold",
                value: function(t) {
                    return t >= e.LEVELS.log
                }
            }, {
                key: "_formatError",
                value: function(e) {
                    return e instanceof Error ? e.stack ? e.message && -1 === e.stack.indexOf(e.message) ? "Error: " + e.message + "\n" + e.stack : e.stack : e.sourceURL ? e.message + "\n" + e.sourceURL + ":" + e.line : e : e
                }
            }]);
            return e
        }();
        u.LEVELS = {
            log: 0,
            debug: 1,
            info: 2,
            warn: 3,
            error: 4
        };
        u.CONSOLE_FN = window.console || {};
        t.default = new u;
        e.exports = t.default
    },
    5: function(e, t, n) {
        "use strict";
        "use es6";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.requestUpdateCheck = t.addUpdateAvailableListener = t.addInstalledListener = t.getId = t.getManifestVersion = t.getLastError = t.reload = t.connect = t.sendMessage = t.addConnectListener = t.addMessageListener = t.callRuntimeMethodSafe = t.RUNTIME_ERROR_THRESHOLD = t.GET_ID = t.GET_MANIFEST_VERSION = t.LAST_ERROR = t.RELOAD = t.CONNECT = t.REQUEST_UPDATE_CHECK = t.ON_UPDATE_AVAILABLE_LISTENER = t.ON_INSTALLED_LISTENER = t.ON_CONNECT_LISTENER = t.ON_MESSAGE_LISTENER = t.SEND_MESSAGE = void 0;
        var r = n(31),
            o = n(32),
            u = t.SEND_MESSAGE = "SEND_MESSAGE",
            i = t.ON_MESSAGE_LISTENER = "ON_MESSAGE_LISTENER",
            a = t.ON_CONNECT_LISTENER = "ON_CONNECT_LISTENER",
            s = t.ON_INSTALLED_LISTENER = "ON_INSTALLED_LISTENER",
            c = t.ON_UPDATE_AVAILABLE_LISTENER = "ON_UPDATE_AVAILABLE_LISTENER",
            f = t.REQUEST_UPDATE_CHECK = "REQUEST_UPDATE_CHECK",
            l = t.CONNECT = "CONNECT",
            d = t.RELOAD = "RELOAD",
            p = t.LAST_ERROR = "LAST_ERROR",
            v = t.GET_MANIFEST_VERSION = "GET_MANIFEST_VERSION",
            h = t.GET_ID = "GET_ID",
            E = t.RUNTIME_ERROR_THRESHOLD = 5,
            g = t.callRuntimeMethodSafe = function(e) {
                for (var t, n, g, _, y, m, S, L, w, b = arguments.length, O = Array(b > 1 ? b - 1 : 0), A = 1; A < b; A++) O[A - 1] = arguments[A];
                try {
                    switch (e) {
                        case u:
                            return (t = r.chrome.runtime).sendMessage.apply(t, O);
                        case i:
                            return (n = r.chrome.runtime.onMessage).addListener.apply(n, O);
                        case a:
                            return (g = r.chrome.runtime.onConnect).addListener.apply(g, O);
                        case l:
                            return (_ = r.chrome.runtime).connect.apply(_, O);
                        case d:
                            return (y = r.chrome.runtime).reload.apply(y, O);
                        case p:
                            return r.chrome.runtime.lastError;
                        case v:
                            return (m = r.chrome.runtime).getManifest.apply(m, O).version;
                        case h:
                            return r.chrome.runtime.id;
                        case s:
                            return (S = r.chrome.runtime.onInstalled).addListener.apply(S, O);
                        case c:
                            return (L = r.chrome.runtime.onUpdateAvailable).addListener.apply(L, O);
                        case f:
                            return (w = r.chrome.runtime).requestUpdateCheck.apply(w, O);
                        default:
                            return null
                    }
                } catch (t) {
                    if (!r.chrome.runtime) {
                        sessionStorage.runtimeError ? sessionStorage.runtimeError > E ? (0, o.LogWarn)({
                            error: t,
                            fingerprint: "SafeRuntime-SafeStorage: chrome.runtime is undefined"
                        }) : sessionStorage.runtimeError = parseInt(sessionStorage.runtimeError, 10) + 1 : sessionStorage.runtimeError = 1;
                        return null
                    }(0, o.LogWarn)({
                        error: t,
                        fingerprint: "Error in chrome safeRuntime",
                        extraData: {
                            method: e
                        }
                    });
                    return null
                }
            };
        t.addMessageListener = function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return g.apply(void 0, [i].concat(t))
        }, t.addConnectListener = function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return g.apply(void 0, [a].concat(t))
        }, t.sendMessage = function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return g.apply(void 0, [u].concat(t))
        }, t.connect = function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return g.apply(void 0, [l].concat(t))
        }, t.reload = function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return g.apply(void 0, [d].concat(t))
        }, t.getLastError = function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return g.apply(void 0, [p].concat(t))
        }, t.getManifestVersion = function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return g.apply(void 0, [v].concat(t))
        }, t.getId = function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return g.apply(void 0, [h].concat(t))
        }, t.addInstalledListener = function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return g.apply(void 0, [s].concat(t))
        }, t.addUpdateAvailableListener = function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return g.apply(void 0, [c].concat(t))
        }, t.requestUpdateCheck = function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return g.apply(void 0, [f].concat(t))
        }
    },
    53: function(e, t, n) {
        "use strict";
        "use es6";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a(n(2)),
            o = a(n(0)),
            u = a(n(1)),
            i = n(8);

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = "REMOTE_ASSETS_ENV",
            c = "SALES_MODAL_IFRAME_DEPLOYED",
            f = "ENV",
            l = "DEPLOYED",
            d = function(e, t) {
                var n = t.remoteAssetsEnvironment,
                    o = t.salesModalIframeDeployed;
                r.default.set(e);
                r.default.set(s, n);
                r.default.set(c, o);
                r.default.set(l, !0)
            },
            p = function() {
                return new i.Promise(function(e) {
                    var t = "prod",
                        n = "prod",
                        r = !0;
                    try {
                        u.default.storage.local.get([f, s, c], function(o) {
                            o[f] && (t = o[f]);
                            o[s] && (n = o[s]);
                            o[c] && (r = o[c]);
                            d(t, {
                                remoteAssetsEnvironment: n,
                                salesModalIframeDeployed: r
                            });
                            e()
                        })
                    } catch (r) {
                        o.default.error("Error fetching from chrome.storage.local: ", r);
                        d(t, n);
                        e()
                    }
                })
            };
        t.default = {
            init: p
        };
        e.exports = t.default
    },
    63: function(e, t, n) {
        "use strict";
        "use es6";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function(e) {
                return "local" === e ? "https://local.hsappstatic.net" : "https://static.hsappstatic.net"
            },
            o = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                    o = r(e);
                return "qa" === e ? "" + o + t + "-qa" + n : "" + o + t + n
            };
        t.default = o;
        e.exports = t.default
    },
    8: function(e, t, n) {
        "use strict";
        "use es6";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = window.Promise;
        window.hubspot.require(["q"], function(e) {
            t.Promise = r = e.Promise
        });
        t.Promise = r
    }
});
//# sourceMappingURL=Gmail.js.map