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
    var t, n = w(),
        r = function() {
            var e = {
                    task: void 0,
                    next: null
                },
                t = e,
                n = !1,
                o = void 0,
                i = !1,
                u = [];

            function s() {
                for (var t, r; e.next;) {
                    t = (e = e.next).task;
                    e.task = void 0;
                    if (r = e.domain) {
                        e.domain = void 0;
                        r.enter()
                    }
                    a(t, r)
                }
                for (; u.length;) a(t = u.pop());
                n = !1
            }

            function a(e, t) {
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
                    domain: i && process.domain,
                    next: null
                };
                if (!n) {
                    n = !0;
                    o()
                }
            };
            if ("function" == typeof setImmediate) o = "undefined" != typeof window ? setImmediate.bind(window, s) : function() {
                setImmediate(s)
            };
            else if ("undefined" != typeof MessageChannel) {
                var c = new MessageChannel;
                c.port1.onmessage = function() {
                    o = f;
                    c.port1.onmessage = s;
                    s()
                };
                var f = function() {
                    c.port2.postMessage(0)
                };
                o = function() {
                    setTimeout(s, 0);
                    f()
                }
            } else o = function() {
                setTimeout(s, 0)
            };
            r.runAfter = function(e) {
                u.push(e);
                if (!n) {
                    n = !0;
                    o()
                }
            };
            return r
        }(),
        o = Function.call;

    function i(e) {
        return function() {
            return o.apply(e, arguments)
        }
    }
    var u = i(Array.prototype.slice),
        s = i(Array.prototype.reduce),
        a = i(Array.prototype.indexOf),
        c = i(Array.prototype.map),
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
            var i = h(r.join("\n" + p + "\n"));
            l(t, "stack", {
                value: i,
                configurable: !0
            })
        }
    }

    function h(e) {
        for (var t = e.split("\n"), n = [], r = 0; r < t.length; ++r) {
            var o = t[r];
            g(o) || m(o) || !o || n.push(o)
        }
        return n.join("\n")
    }

    function m(e) {
        return -1 !== e.indexOf("(module.js:") || -1 !== e.indexOf("(node.js:")
    }

    function y(e) {
        var t = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(e);
        if (t) return [t[1], Number(t[2])];
        var n = /at ([^ ]+):(\d+):(?:\d+)$/.exec(e);
        if (n) return [n[1], Number(n[2])];
        var r = /.*@(.+):(\d+)$/.exec(e);
        return r ? [r[1], Number(r[2])] : void 0
    }

    function g(e) {
        var r = y(e);
        if (!r) return !1;
        var o = r[0],
            i = r[1];
        return o === t && i >= n && i <= z
    }

    function w() {
        if (e) try {
            throw new Error
        } catch (e) {
            var n = e.stack.split("\n"),
                r = y(n[0].indexOf("@") > 0 ? n[1] : n[2]);
            if (!r) return;
            t = r[0];
            return r[1]
        }
    }

    function _(e) {
        return e instanceof L ? e : R(e) ? I(e) : V(e)
    }
    var b = {
            longStackSupport: !1
        },
        E = 1;
    "object" == typeof process && process && process.env && process.env.Q_DEBUG && (b.longStackSupport = !0);

    function S() {
        var t, n = [],
            o = f(S.prototype),
            i = f(L.prototype);
        i.promiseDispatch = function(e, o, i) {
            var s = u(arguments);
            n ? n.push(s) : r(function() {
                t.promiseDispatch.apply(t, s)
            })
        };
        i._inspect = function() {
            return t ? t._inspect() : {
                state: "pending"
            }
        };
        if (b.longStackSupport && e) try {
            throw new Error
        } catch (e) {
            i.stack = e.stack.substring(e.stack.indexOf("\n") + 1);
            i.stackCounter = E++
        }

        function a(o) {
            t = o;
            b.longStackSupport && e && (i.source = o);
            s(n, function(e, t) {
                r(function() {
                    o.promiseDispatch.apply(o, t)
                })
            }, void 0);
            n = void 0
        }
        o.promise = i;
        o.resolve = function(e) {
            t || a(_(e))
        };
        o.reject = function(e) {
            t || a(N(e))
        };
        return o
    }
    b.Promise = k;

    function k(e) {
        if (!(this instanceof k)) throw Error("must use `new` with `Q.Promise` constructor.");
        if ("function" != typeof e) throw new TypeError("resolver must be a function.");
        var t = S();
        try {
            e(t.resolve, t.reject)
        } catch (e) {
            t.reject(e)
        }
        return t.promise
    }
    var x, O = (x = {}, function(e) {
        if (!x[e]) {
            x[e] = !0;
            window.enviro && (window.enviro.deployed && !window.enviro.deployed("q") || window.enviro.debug && window.enviro.debug("q")) && console.error(e);
            window.newrelic && window.newrelic.addPageAction && window.newrelic.addPageAction("Qv6DeprecationWarning", {
                deprecationMessage: e
            })
        }
    });

    function P(e, t, n) {
        return function r(o) {
            this instanceof r ? O("Q.Promise." + t + " is not a constructor") : this !== k && O("Q.Promise." + t + " not called on Q.Promise");
            n && (o && "function" == typeof o[Symbol.iterator] ? Array.isArray(o) || O("Q.Promise." + t + " called with non-array") : O("Q.Promise." + t + " called with non-iterable"));
            return e.apply(this, arguments)
        }
    }
    k.race = P(j, "race", !0);
    k.all = P($, "all", !0);
    k.reject = P(N, "reject");
    k.resolve = P(_, "resolve");

    function j(e) {
        return new k(function(t, n) {
            for (var r = 0, o = e.length; r < o; r++) _(e[r]).then(t, n)
        })
    }

    function L(e, t, n) {
        void 0 === t && (t = function(e) {
            return N(new Error("Promise does not support operation: " + e))
        });
        void 0 === n && (n = function() {
            return {
                state: "unknown"
            }
        });
        var r = f(L.prototype);
        r.promiseDispatch = function(n, o, i) {
            var u;
            try {
                u = e[o] ? e[o].apply(r, i) : t.call(r, o, i)
            } catch (e) {
                u = N(e)
            }
            n && n(u)
        };
        r._inspect = n;
        if (n) {
            var o = n();
            "rejected" === o.state && (r.exception = o.reason)
        }
        return r
    }
    L.prototype.toString = function() {
        return "[object Promise]"
    };
    L.prototype.then = function(e, t) {
        var n = this,
            o = S(),
            i = !1;

        function u(t) {
            try {
                return "function" == typeof e ? e(t) : t
            } catch (e) {
                return N(e)
            }
        }

        function s(e) {
            if ("function" == typeof t) {
                v(e, n);
                try {
                    return t(e)
                } catch (e) {
                    return N(e)
                }
            }
            return N(e)
        }
        r(function() {
            n.promiseDispatch(function(e) {
                if (!i) {
                    i = !0;
                    o.resolve(u(e))
                }
            }, "when", [function(e) {
                if (!i) {
                    i = !0;
                    o.resolve(s(e))
                }
            }])
        });
        return o.promise
    };

    function M(e, t, n) {
        return _(e).then(t, n)
    }

    function A(e) {
        return e instanceof L
    }

    function R(e) {
        return d(e) && "function" == typeof e.then
    }
    var T = [],
        F = [],
        q = !0;

    function C() {
        T.length = 0;
        F.length = 0;
        q || (q = !0)
    }

    function D(e, t) {
        if (q) {
            F.push(e);
            var n = t + "";
            b.customizeRejectionString && (n = b.customizeRejectionString(t));
            t && void 0 !== t.stack ? t.stack.slice && t.stack.slice(0, n.length) === n ? T.push(t.stack) : T.push(n + "\n" + t.stack) : T.push("(no stack) " + n)
        }
    }

    function Q(e) {
        if (q) {
            var t = a(F, e);
            if (-1 !== t) {
                F.splice(t, 1);
                T.splice(t, 1)
            }
        }
    }
    b.resetUnhandledRejections = C;
    b.getUnhandledReasons = function() {
        return T.slice()
    };
    b.stopUnhandledRejectionTracking = function() {
        C();
        q = !1
    };
    b.getUnhandledRejectionValues = function() {
        return c(F, function(e) {
            return e.exception
        })
    };
    C();

    function N(e) {
        var t = L({
            when: function(t) {
                t && Q(this);
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
        return L({
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

    function I(e) {
        var t = S();
        r(function() {
            try {
                e.then(t.resolve, t.reject)
            } catch (e) {
                t.reject(e)
            }
        });
        return t.promise
    }

    function U(e, t, n) {
        var o = S();
        r(function() {
            e.promiseDispatch(o.resolve, t, n)
        });
        return o.promise
    }

    function G(e) {
        return U(e, "apply", [void 0, u(arguments, 1)])
    }

    function $(e) {
        return M(e, function(e) {
            var t = 0,
                n = S();
            s(e, function(r, o, i) {
                var u;
                if (A(o) && "fulfilled" === (u = o._inspect()).state) e[i] = u.value;
                else {
                    ++t;
                    M(o, function(r) {
                        e[i] = r;
                        0 == --t && n.resolve(e)
                    }, n.reject)
                }
            }, void 0);
            0 === t && n.resolve(e);
            return n.promise
        })
    }
    L.prototype.catch = function(e) {
        return this.then(void 0, e)
    };
    L.prototype.finally = function(e) {
        if (!e || "function" != typeof e.apply) throw new Error("Q can't apply finally callback");
        e = _(e);
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
    L.prototype.done = function(e, t) {
        var n = function(e) {
                r(function() {
                    v(e, o);
                    if (!b.onerror) throw e;
                    b.onerror(e)
                })
            },
            o = e || t ? this.then(e, t) : this;
        o.then(void 0, n)
    };
    var z = w();
    return b
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
    n(n.s = 152)
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
            o = a(n(2)),
            i = a(n(27)),
            u = n(25),
            s = n(14);

        function a(e) {
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
                    if (!this._shouldLog(t, n)) return u.emptyFunction;
                    var o = e.CONSOLE_FN[t] || e.CONSOLE_FN.log || u.emptyFunction;
                    return function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        var i = new Array(t.length + 1);
                        i[0] = "[HubSpot Sales]";
                        for (var u = 0; u < t.length; u++) {
                            var a = t[u];
                            i[u + 1] = this._formatError(a)
                        }
                        r && i.length > 1 && (0, s.newErrorEntry)(i[1]);
                        return this._callLogFn(o, i)
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
                    return "background" === i.default || this._aboveLevelThreshold(t)
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
        var r = s(n(2)),
            o = s(n(105)),
            i = s(n(63)),
            u = s(n(0));

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.loadGmailRemoteAssets = function(e) {
            u.default.debug("Loading remote Gmail assets");
            var t = (0, i.default)(r.default.getShort("REMOTE_ASSETS"), "/SalesExtensionRemoteAssets/ex/gmail", ".css"),
                n = (0, i.default)(r.default.getShort("REMOTE_ASSETS"), "/SalesExtensionRemoteAssets/ex/gmail", ".js");
            (0, o.default)(t);
            return e(n)
        }, t.loadPopupRemoteAssets = function(e) {
            u.default.debug("Loading remote Inbox assets");
            var t = (0, i.default)(r.default.getShort("REMOTE_ASSETS"), "/SalesExtensionRemoteAssets/ex/popup", ".css"),
                n = (0, i.default)(r.default.getShort("REMOTE_ASSETS"), "/SalesExtensionRemoteAssets/ex/popup", ".js");
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
        var r = i(n(3)),
            o = i(n(37));

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var u = function(e) {
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
        t.default = u;
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
    14: function(e, t, n) {
        "use strict";
        "use es6";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = 20,
            o = [],
            i = t.newErrorEntry = function(e) {
                (o = o.slice(1, r)).push(e)
            };
        t.initDebugLog = function() {
            window.onerror = function(e, t, n) {
                i(e + " - " + t + " (" + n + ")")
            }
        }, t.getLastErrors = function() {
            return o
        }
    },
    152: function(e, t, n) {
        "use strict";
        "use es6";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.init = void 0;
        var r = function() {
                function e(e, t) {
                    var n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var u, s = e[Symbol.iterator](); !(r = (u = s.next()).done); r = !0) {
                            n.push(u.value);
                            if (t && n.length === t) break
                        }
                    } catch (e) {
                        o = !0;
                        i = e
                    } finally {
                        try {
                            !r && s.return && s.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }
                return function(t, n) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return e(t, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            o = l(n(3)),
            i = l(n(106)),
            u = n(104),
            s = l(n(38)),
            a = l(n(1)),
            c = l(n(37)),
            f = l(n(53));

        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var d = function() {
                return new o.default.Promise(function(e) {
                    a.default.extension.getBackgroundPage().hubspot.require(["SignalsExtension/data/resolvePopupServices"], function(t) {
                        return e(t())
                    })
                })
            },
            p = function() {
                return new o.default.Promise(function(e) {
                    return s.default.hubspot.require(["SalesExtensionRemoteAssets/popup/init"], e)
                })
            };
        (function(e) {
            "complete" === c.default.readyState ? e() : c.default.addEventListener("DOMContentLoaded", e)
        })(t.init = async function() {
            await f.default.init();
            (0, u.loadPopupRemoteAssets)(i.default).then(function() {
                o.default.Promise.all([p(), d()]).then(function(e) {
                    var t = r(e, 2);
                    return (0, t[0])(t[1])
                })
            }).done()
        })
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
        var r = u(n(2)),
            o = u(n(3)),
            i = u(n(28));

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        r.default.deployed("q") || (o.default.longStackSupport = !0);
        var s = "chrome-extension:",
            a = i.default.pathname,
            c = i.default.protocol,
            f = c === s && -1 !== a.indexOf("background.html"),
            l = c === s && -1 !== a.indexOf("popup.html"),
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
    53: function(e, t, n) {
        "use strict";
        "use es6";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = s(n(2)),
            o = s(n(0)),
            i = s(n(1)),
            u = n(8);

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var a = "REMOTE_ASSETS_ENV",
            c = "SALES_MODAL_IFRAME_DEPLOYED",
            f = "ENV",
            l = "DEPLOYED",
            d = function(e, t) {
                var n = t.remoteAssetsEnvironment,
                    o = t.salesModalIframeDeployed;
                r.default.set(e);
                r.default.set(a, n);
                r.default.set(c, o);
                r.default.set(l, !0)
            },
            p = function() {
                return new u.Promise(function(e) {
                    var t = "prod",
                        n = "prod",
                        r = !0;
                    try {
                        i.default.storage.local.get([f, a, c], function(o) {
                            o[f] && (t = o[f]);
                            o[a] && (n = o[a]);
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
//# sourceMappingURL=Popup.js.map