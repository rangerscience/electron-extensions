! function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var t;
        (t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Raven = e()
    }
}(function() {
    var e, t, r;
    return function a(i, s, l) {
        function u(r, e) {
            if (!s[r]) {
                if (!i[r]) {
                    var t = "function" == typeof require && require;
                    if (!e && t) return t(r, !0);
                    if (c) return c(r, !0);
                    var n = new Error("Cannot find module '" + r + "'");
                    throw n.code = "MODULE_NOT_FOUND", n
                }
                var o = s[r] = {
                    exports: {}
                };
                i[r][0].call(o.exports, function(e) {
                    var t = i[r][1][e];
                    return u(t || e)
                }, o, o.exports, a, i, s, l)
            }
            return s[r].exports
        }
        for (var c = "function" == typeof require && require, e = 0; e < l.length; e++) u(l[e]);
        return u
    }({
        1: [function(e, t, r) {
            function n(e) {
                this.name = "RavenConfigError", this.message = e
            }(n.prototype = new Error).constructor = n, t.exports = n
        }, {}],
        2: [function(e, t, r) {
            var n = function(e, n, o) {
                var a = e[n],
                    i = e;
                if (n in e) {
                    var s = "warn" === n ? "warning" : n;
                    e[n] = function() {
                        var e = [].slice.call(arguments),
                            t = "" + e.join(" "),
                            r = {
                                level: s,
                                logger: "console",
                                extra: {
                                    arguments: e
                                }
                            };
                        "assert" === n ? !1 === e[0] && (t = "Assertion failed: " + (e.slice(1).join(" ") || "console.assert"), r.extra.arguments = e.slice(1), o && o(t, r)) : o && o(t, r), a && Function.prototype.apply.call(a, i, e)
                    }
                }
            };
            t.exports = {
                wrapMethod: n
            }
        }, {}],
        3: [function(A, j, e) {
            (function(e) {
                var l = A(6),
                    o = A(7),
                    u = A(1),
                    t = A(5),
                    i = t.isError,
                    s = t.isObject,
                    c = t.isErrorEvent,
                    r = t.isUndefined,
                    f = t.isFunction,
                    p = t.isString,
                    d = t.isArray,
                    a = t.isEmptyObject,
                    h = t.each,
                    g = t.objectMerge,
                    _ = t.truncate,
                    v = t.objectFrozen,
                    m = t.hasKey,
                    b = t.joinRegExp,
                    y = t.urlencode,
                    n = t.uuid4,
                    x = t.htmlTreeAsString,
                    w = t.isSameException,
                    E = t.isSameStacktrace,
                    k = t.parseUrl,
                    S = t.fill,
                    T = A(2).wrapMethod,
                    O = "source protocol user pass host port path".split(" "),
                    C = /^(?:(\w+):)?\/\/(?:(\w+)(:\w+)?@)?([\w\.-]+)(?::(\d+))?(\/.*)/;

                function P() {
                    return +new Date
                }
                var L = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {},
                    R = L.document,
                    F = L.navigator;

                function I(t, r) {
                    return f(r) ? function(e) {
                        return r(e, t)
                    } : r
                }

                function D() {
                    for (var e in this._hasJSON = !("object" != typeof JSON || !JSON.stringify), this._hasDocument = !r(R), this._hasNavigator = !r(F), this._lastCapturedException = null, this._lastData = null, this._lastEventId = null, this._globalServer = null, this._globalKey = null, this._globalProject = null, this._globalContext = {}, this._globalOptions = {
                            logger: "javascript",
                            ignoreErrors: [],
                            ignoreUrls: [],
                            whitelistUrls: [],
                            includePaths: [],
                            collectWindowErrors: !0,
                            maxMessageLength: 0,
                            maxUrlLength: 250,
                            stackTraceLimit: 50,
                            autoBreadcrumbs: !0,
                            instrument: !0,
                            sampleRate: 1
                        }, this._ignoreOnError = 0, this._isRavenInstalled = !1, this._originalErrorStackTraceLimit = Error.stackTraceLimit, this._originalConsole = L.console || {}, this._originalConsoleMethods = {}, this._plugins = [], this._startTime = P(), this._wrappedBuiltIns = [], this._breadcrumbs = [], this._lastCapturedEvent = null, this._keypressTimeout, this._location = L.location, this._lastHref = this._location && this._location.href, this._resetBackoff(), this._originalConsole) this._originalConsoleMethods[e] = this._originalConsole[e]
                }(D.prototype = {
                    VERSION: "3.20.1",
                    debug: !1,
                    TraceKit: l,
                    config: function(e, t) {
                        var r = this;
                        if (r._globalServer) return this._logDebug("error", "Error: Raven has already been configured"), r;
                        if (!e) return r;
                        var n = r._globalOptions;
                        t && h(t, function(e, t) {
                            "tags" === e || "extra" === e || "user" === e ? r._globalContext[e] = t : n[e] = t
                        }), r.setDSN(e), n.ignoreErrors.push(/^Script error\.?$/), n.ignoreErrors.push(/^Javascript error: Script error\.? on line 0$/), n.ignoreErrors = b(n.ignoreErrors), n.ignoreUrls = !!n.ignoreUrls.length && b(n.ignoreUrls), n.whitelistUrls = !!n.whitelistUrls.length && b(n.whitelistUrls), n.includePaths = b(n.includePaths), n.maxBreadcrumbs = Math.max(0, Math.min(n.maxBreadcrumbs || 100, 100));
                        var o = {
                                xhr: !0,
                                console: !0,
                                dom: !0,
                                location: !0,
                                sentry: !0
                            },
                            a = n.autoBreadcrumbs;
                        "[object Object]" === {}.toString.call(a) ? a = g(o, a) : !1 !== a && (a = o), n.autoBreadcrumbs = a;
                        var i = {
                                tryCatch: !0
                            },
                            s = n.instrument;
                        return "[object Object]" === {}.toString.call(s) ? s = g(i, s) : !1 !== s && (s = i), n.instrument = s, l.collectWindowErrors = !!n.collectWindowErrors, r
                    },
                    install: function() {
                        var e = this;
                        return e.isSetup() && !e._isRavenInstalled && (l.report.subscribe(function() {
                            e._handleOnErrorStackInfo.apply(e, arguments)
                        }), e._patchFunctionToString(), e._globalOptions.instrument && e._globalOptions.instrument.tryCatch && e._instrumentTryCatch(), e._globalOptions.autoBreadcrumbs && e._instrumentBreadcrumbs(), e._drainPlugins(), e._isRavenInstalled = !0), Error.stackTraceLimit = e._globalOptions.stackTraceLimit, this
                    },
                    setDSN: function(e) {
                        var t = this,
                            r = t._parseDSN(e),
                            n = r.path.lastIndexOf("/"),
                            o = r.path.substr(1, n);
                        t._dsn = e, t._globalKey = r.user, t._globalSecret = r.pass && r.pass.substr(1), t._globalProject = r.path.substr(n + 1), t._globalServer = t._getGlobalServer(r), t._globalEndpoint = t._globalServer + "/" + o + "api/" + t._globalProject + "/store/", this._resetBackoff()
                    },
                    context: function(e, t, r) {
                        return f(e) && (r = t || [], t = e, e = void 0), this.wrap(e, t).apply(this, r)
                    },
                    wrap: function(n, o, a) {
                        var i = this;
                        if (r(o) && !f(n)) return n;
                        if (f(n) && (o = n, n = void 0), !f(o)) return o;
                        try {
                            if (o.__raven__) return o;
                            if (o.__raven_wrapper__) return o.__raven_wrapper__
                        } catch (e) {
                            return o
                        }

                        function e() {
                            var e = [],
                                t = arguments.length,
                                r = !n || n && !1 !== n.deep;
                            for (a && f(a) && a.apply(this, arguments); t--;) e[t] = r ? i.wrap(n, arguments[t]) : arguments[t];
                            try {
                                return o.apply(this, e)
                            } catch (e) {
                                throw i._ignoreNextOnError(), i.captureException(e, n), e
                            }
                        }
                        for (var t in o) m(o, t) && (e[t] = o[t]);
                        return e.prototype = o.prototype, (o.__raven_wrapper__ = e).__raven__ = !0, e.__orig__ = o, e
                    },
                    uninstall: function() {
                        return l.report.uninstall(), this._unpatchFunctionToString(), this._restoreBuiltIns(), Error.stackTraceLimit = this._originalErrorStackTraceLimit, this._isRavenInstalled = !1, this
                    },
                    captureException: function(t, e) {
                        var r = !i(t),
                            n = !c(t),
                            o = c(t) && !t.error;
                        if (r && n || o) return this.captureMessage(t, g({
                            trimHeadFrames: 1,
                            stacktrace: !0
                        }, e));
                        c(t) && (t = t.error), this._lastCapturedException = t;
                        try {
                            var a = l.computeStackTrace(t);
                            this._handleStackInfo(a, e)
                        } catch (e) {
                            if (t !== e) throw e
                        }
                        return this
                    },
                    captureMessage: function(e, t) {
                        if (!this._globalOptions.ignoreErrors.test || !this._globalOptions.ignoreErrors.test(e)) {
                            var r = g({
                                    message: e + ""
                                }, t = t || {}),
                                n;
                            try {
                                throw new Error(e)
                            } catch (e) {
                                n = e
                            }
                            n.name = null;
                            var o = l.computeStackTrace(n),
                                a = d(o.stack) && o.stack[1],
                                i = a && a.url || "";
                            if ((!this._globalOptions.ignoreUrls.test || !this._globalOptions.ignoreUrls.test(i)) && (!this._globalOptions.whitelistUrls.test || this._globalOptions.whitelistUrls.test(i))) {
                                if (this._globalOptions.stacktrace || t && t.stacktrace) {
                                    t = g({
                                        fingerprint: e,
                                        trimHeadFrames: (t.trimHeadFrames || 0) + 1
                                    }, t);
                                    var s = this._prepareFrames(o, t);
                                    r.stacktrace = {
                                        frames: s.reverse()
                                    }
                                }
                                return this._send(r), this
                            }
                        }
                    },
                    captureBreadcrumb: function(e) {
                        var t = g({
                            timestamp: P() / 1e3
                        }, e);
                        if (f(this._globalOptions.breadcrumbCallback)) {
                            var r = this._globalOptions.breadcrumbCallback(t);
                            if (s(r) && !a(r)) t = r;
                            else if (!1 === r) return this
                        }
                        return this._breadcrumbs.push(t), this._breadcrumbs.length > this._globalOptions.maxBreadcrumbs && this._breadcrumbs.shift(), this
                    },
                    addPlugin: function(e) {
                        var t = [].slice.call(arguments, 1);
                        return this._plugins.push([e, t]), this._isRavenInstalled && this._drainPlugins(), this
                    },
                    setUserContext: function(e) {
                        return this._globalContext.user = e, this
                    },
                    setExtraContext: function(e) {
                        return this._mergeContext("extra", e), this
                    },
                    setTagsContext: function(e) {
                        return this._mergeContext("tags", e), this
                    },
                    clearContext: function() {
                        return this._globalContext = {}, this
                    },
                    getContext: function() {
                        return JSON.parse(o(this._globalContext))
                    },
                    setEnvironment: function(e) {
                        return this._globalOptions.environment = e, this
                    },
                    setRelease: function(e) {
                        return this._globalOptions.release = e, this
                    },
                    setDataCallback: function(e) {
                        var t = this._globalOptions.dataCallback;
                        return this._globalOptions.dataCallback = I(t, e), this
                    },
                    setBreadcrumbCallback: function(e) {
                        var t = this._globalOptions.breadcrumbCallback;
                        return this._globalOptions.breadcrumbCallback = I(t, e), this
                    },
                    setShouldSendCallback: function(e) {
                        var t = this._globalOptions.shouldSendCallback;
                        return this._globalOptions.shouldSendCallback = I(t, e), this
                    },
                    setTransport: function(e) {
                        return this._globalOptions.transport = e, this
                    },
                    lastException: function() {
                        return this._lastCapturedException
                    },
                    lastEventId: function() {
                        return this._lastEventId
                    },
                    isSetup: function() {
                        return !!this._hasJSON && (!!this._globalServer || (this.ravenNotConfiguredError || (this.ravenNotConfiguredError = !0, this._logDebug("error", "Error: Raven has not been configured.")), !1))
                    },
                    afterLoad: function() {
                        var e = L.RavenConfig;
                        e && this.config(e.dsn, e.config).install()
                    },
                    showReportDialog: function(e) {
                        if (R) {
                            var t = (e = e || {}).eventId || this.lastEventId();
                            if (!t) throw new u("Missing eventId");
                            var r = e.dsn || this._dsn;
                            if (!r) throw new u("Missing DSN");
                            var n = encodeURIComponent,
                                o = "";
                            o += "?eventId=" + n(t), o += "&dsn=" + n(r);
                            var a = e.user || this._globalContext.user;
                            a && (a.name && (o += "&name=" + n(a.name)), a.email && (o += "&email=" + n(a.email)));
                            var i = this._getGlobalServer(this._parseDSN(r)),
                                s = R.createElement("script");
                            s.async = !0, s.src = i + "/api/embed/error-page/" + o, (R.head || R.body).appendChild(s)
                        }
                    },
                    _ignoreNextOnError: function() {
                        var e = this;
                        this._ignoreOnError += 1, setTimeout(function() {
                            e._ignoreOnError -= 1
                        })
                    },
                    _triggerEvent: function(e, t) {
                        var r, n;
                        if (this._hasDocument) {
                            for (n in t = t || {}, e = "raven" + e.substr(0, 1).toUpperCase() + e.substr(1), R.createEvent ? (r = R.createEvent("HTMLEvents")).initEvent(e, !0, !0) : (r = R.createEventObject()).eventType = e, t) m(t, n) && (r[n] = t[n]);
                            if (R.createEvent) R.dispatchEvent(r);
                            else try {
                                R.fireEvent("on" + r.eventType.toLowerCase(), r)
                            } catch (e) {}
                        }
                    },
                    _breadcrumbEventHandler: function(r) {
                        var n = this;
                        return function(e) {
                            if (n._keypressTimeout = null, n._lastCapturedEvent !== e) {
                                var t;
                                n._lastCapturedEvent = e;
                                try {
                                    t = x(e.target)
                                } catch (e) {
                                    t = "<unknown>"
                                }
                                n.captureBreadcrumb({
                                    category: "ui." + r,
                                    message: t
                                })
                            }
                        }
                    },
                    _keypressEventHandler: function() {
                        var o = this,
                            a = 1e3;
                        return function(e) {
                            var t;
                            try {
                                t = e.target
                            } catch (e) {
                                return
                            }
                            var r = t && t.tagName;
                            if (r && ("INPUT" === r || "TEXTAREA" === r || t.isContentEditable)) {
                                var n = o._keypressTimeout;
                                n || o._breadcrumbEventHandler("input")(e), clearTimeout(n), o._keypressTimeout = setTimeout(function() {
                                    o._keypressTimeout = null
                                }, a)
                            }
                        }
                    },
                    _captureUrlChange: function(e, t) {
                        var r = k(this._location.href),
                            n = k(t),
                            o = k(e);
                        this._lastHref = t, r.protocol === n.protocol && r.host === n.host && (t = n.relative), r.protocol === o.protocol && r.host === o.host && (e = o.relative), this.captureBreadcrumb({
                            category: "navigation",
                            data: {
                                to: t,
                                from: e
                            }
                        })
                    },
                    _patchFunctionToString: function() {
                        var e = this;
                        e._originalFunctionToString = Function.prototype.toString, Function.prototype.toString = function() {
                            return "function" == typeof this && this.__raven__ ? e._originalFunctionToString.apply(this.__orig__, arguments) : e._originalFunctionToString.apply(this, arguments)
                        }
                    },
                    _unpatchFunctionToString: function() {
                        this._originalFunctionToString && (Function.prototype.toString = this._originalFunctionToString)
                    },
                    _instrumentTryCatch: function() {
                        var u = this,
                            t = u._wrappedBuiltIns;

                        function e(a) {
                            return function(e, t) {
                                for (var r = new Array(arguments.length), n = 0; n < r.length; ++n) r[n] = arguments[n];
                                var o = r[0];
                                return f(o) && (r[0] = u.wrap(o)), a.apply ? a.apply(this, r) : a(r[0], r[1])
                            }
                        }
                        var c = this._globalOptions.autoBreadcrumbs;

                        function r(l) {
                            var e = L[l] && L[l].prototype;
                            e && e.hasOwnProperty && e.hasOwnProperty("addEventListener") && (S(e, "addEventListener", function(s) {
                                return function(e, t, r, n) {
                                    try {
                                        t && t.handleEvent && (t.handleEvent = u.wrap(t.handleEvent))
                                    } catch (e) {}
                                    var o, a, i;
                                    return c && c.dom && ("EventTarget" === l || "Node" === l) && (a = u._breadcrumbEventHandler("click"), i = u._keypressEventHandler(), o = function(e) {
                                        if (e) {
                                            var t;
                                            try {
                                                t = e.type
                                            } catch (e) {
                                                return
                                            }
                                            return "click" === t ? a(e) : "keypress" === t ? i(e) : void 0
                                        }
                                    }), s.call(this, e, u.wrap(t, void 0, o), r, n)
                                }
                            }, t), S(e, "removeEventListener", function(o) {
                                return function(e, t, r, n) {
                                    try {
                                        t = t && (t.__raven_wrapper__ ? t.__raven_wrapper__ : t)
                                    } catch (e) {}
                                    return o.call(this, e, t, r, n)
                                }
                            }, t))
                        }
                        S(L, "setTimeout", e, t), S(L, "setInterval", e, t), L.requestAnimationFrame && S(L, "requestAnimationFrame", function(t) {
                            return function(e) {
                                return t(u.wrap(e))
                            }
                        }, t);
                        for (var n = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"], o = 0; o < n.length; o++) r(n[o])
                    },
                    _instrumentBreadcrumbs: function() {
                        var u = this,
                            e = this._globalOptions.autoBreadcrumbs,
                            t = u._wrappedBuiltIns;

                        function i(e, t) {
                            e in t && f(t[e]) && S(t, e, function(e) {
                                return u.wrap(e)
                            })
                        }
                        if (e.xhr && "XMLHttpRequest" in L) {
                            var r = XMLHttpRequest.prototype;
                            S(r, "open", function(r) {
                                return function(e, t) {
                                    return p(t) && -1 === t.indexOf(u._globalKey) && (this.__raven_xhr = {
                                        method: e,
                                        url: t,
                                        status_code: null
                                    }), r.apply(this, arguments)
                                }
                            }, t), S(r, "send", function(a) {
                                return function(e) {
                                    var t = this;

                                    function r() {
                                        if (t.__raven_xhr && 4 === t.readyState) {
                                            try {
                                                t.__raven_xhr.status_code = t.status
                                            } catch (e) {}
                                            u.captureBreadcrumb({
                                                type: "http",
                                                category: "xhr",
                                                data: t.__raven_xhr
                                            })
                                        }
                                    }
                                    for (var n = ["onload", "onerror", "onprogress"], o = 0; o < n.length; o++) i(n[o], t);
                                    return "onreadystatechange" in t && f(t.onreadystatechange) ? S(t, "onreadystatechange", function(e) {
                                        return u.wrap(e, void 0, r)
                                    }) : t.onreadystatechange = r, a.apply(this, arguments)
                                }
                            }, t)
                        }
                        e.xhr && "fetch" in L && S(L, "fetch", function(l) {
                            return function(e, t) {
                                for (var r = new Array(arguments.length), n = 0; n < r.length; ++n) r[n] = arguments[n];
                                var o = r[0],
                                    a = "GET",
                                    i;
                                "string" == typeof o ? i = o : "Request" in L && o instanceof L.Request ? (i = o.url, o.method && (a = o.method)) : i = "" + o, r[1] && r[1].method && (a = r[1].method);
                                var s = {
                                    method: a,
                                    url: i,
                                    status_code: null
                                };
                                return u.captureBreadcrumb({
                                    type: "http",
                                    category: "fetch",
                                    data: s
                                }), l.apply(this, r).then(function(e) {
                                    return s.status_code = e.status, e
                                })
                            }
                        }, t), e.dom && this._hasDocument && (R.addEventListener ? (R.addEventListener("click", u._breadcrumbEventHandler("click"), !1), R.addEventListener("keypress", u._keypressEventHandler(), !1)) : (R.attachEvent("onclick", u._breadcrumbEventHandler("click")), R.attachEvent("onkeypress", u._keypressEventHandler())));
                        var n = L.chrome,
                            o, a = !(n && n.app && n.app.runtime) && L.history && history.pushState && history.replaceState;
                        if (e.location && a) {
                            var s = L.onpopstate;
                            L.onpopstate = function() {
                                var e = u._location.href;
                                if (u._captureUrlChange(u._lastHref, e), s) return s.apply(this, arguments)
                            };
                            var l = function(t) {
                                return function() {
                                    var e = 2 < arguments.length ? arguments[2] : void 0;
                                    return e && u._captureUrlChange(u._lastHref, e + ""), t.apply(this, arguments)
                                }
                            };
                            S(history, "pushState", l, t), S(history, "replaceState", l, t)
                        }
                        if (e.console && "console" in L && console.log) {
                            var c = function(e, t) {
                                u.captureBreadcrumb({
                                    message: e,
                                    level: t.level,
                                    category: "console"
                                })
                            };
                            h(["debug", "info", "warn", "error", "log"], function(e, t) {
                                T(console, t, c)
                            })
                        }
                    },
                    _restoreBuiltIns: function() {
                        for (var e; this._wrappedBuiltIns.length;) {
                            var t = (e = this._wrappedBuiltIns.shift())[0],
                                r = e[1],
                                n = e[2];
                            t[r] = n
                        }
                    },
                    _drainPlugins: function() {
                        var o = this;
                        h(this._plugins, function(e, t) {
                            var r = t[0],
                                n = t[1];
                            r.apply(o, [o].concat(n))
                        })
                    },
                    _parseDSN: function(t) {
                        var e = C.exec(t),
                            r = {},
                            n = 7;
                        try {
                            for (; n--;) r[O[n]] = e[n] || ""
                        } catch (e) {
                            throw new u("Invalid DSN: " + t)
                        }
                        if (r.pass && !this._globalOptions.allowSecretKey) throw new u("Do not specify your secret key in the DSN. See: http://bit.ly/raven-secret-key");
                        return r
                    },
                    _getGlobalServer: function(e) {
                        var t = "//" + e.host + (e.port ? ":" + e.port : "");
                        return e.protocol && (t = e.protocol + ":" + t), t
                    },
                    _handleOnErrorStackInfo: function() {
                        this._ignoreOnError || this._handleStackInfo.apply(this, arguments)
                    },
                    _handleStackInfo: function(e, t) {
                        var r = this._prepareFrames(e, t);
                        this._triggerEvent("handle", {
                            stackInfo: e,
                            options: t
                        }), this._processException(e.name, e.message, e.url, e.lineno, r, t)
                    },
                    _prepareFrames: function(n, e) {
                        var o = this,
                            a = [];
                        if (n.stack && n.stack.length && (h(n.stack, function(e, t) {
                                var r = o._normalizeFrame(t, n.url);
                                r && a.push(r)
                            }), e && e.trimHeadFrames))
                            for (var t = 0; t < e.trimHeadFrames && t < a.length; t++) a[t].in_app = !1;
                        return a = a.slice(0, this._globalOptions.stackTraceLimit)
                    },
                    _normalizeFrame: function(e, t) {
                        var r = {
                            filename: e.url,
                            lineno: e.line,
                            colno: e.column,
                            function: e.func || "?"
                        };
                        return e.url || (r.filename = t), r.in_app = !(this._globalOptions.includePaths.test && !this._globalOptions.includePaths.test(r.filename) || /(Raven|TraceKit)\./.test(r.function) || /raven\.(min\.)?js$/.test(r.filename)), r
                    },
                    _processException: function(e, t, r, n, o, a) {
                        var i = (e ? e + ": " : "") + (t || ""),
                            s;
                        if ((!this._globalOptions.ignoreErrors.test || !this._globalOptions.ignoreErrors.test(t) && !this._globalOptions.ignoreErrors.test(i)) && (o && o.length ? (r = o[0].filename || r, o.reverse(), s = {
                                frames: o
                            }) : r && (s = {
                                frames: [{
                                    filename: r,
                                    lineno: n,
                                    in_app: !0
                                }]
                            }), (!this._globalOptions.ignoreUrls.test || !this._globalOptions.ignoreUrls.test(r)) && (!this._globalOptions.whitelistUrls.test || this._globalOptions.whitelistUrls.test(r)))) {
                            var l = g({
                                exception: {
                                    values: [{
                                        type: e,
                                        value: t,
                                        stacktrace: s
                                    }]
                                },
                                culprit: r
                            }, a);
                            this._send(l)
                        }
                    },
                    _trimPacket: function(e) {
                        var t = this._globalOptions.maxMessageLength;
                        if (e.message && (e.message = _(e.message, t)), e.exception) {
                            var r = e.exception.values[0];
                            r.value = _(r.value, t)
                        }
                        var n = e.request;
                        return n && (n.url && (n.url = _(n.url, this._globalOptions.maxUrlLength)), n.Referer && (n.Referer = _(n.Referer, this._globalOptions.maxUrlLength))), e.breadcrumbs && e.breadcrumbs.values && this._trimBreadcrumbs(e.breadcrumbs), e
                    },
                    _trimBreadcrumbs: function(e) {
                        for (var t = ["to", "from", "url"], r, n, o, a = 0; a < e.values.length; ++a)
                            if ((n = e.values[a]).hasOwnProperty("data") && s(n.data) && !v(n.data)) {
                                o = g({}, n.data);
                                for (var i = 0; i < t.length; ++i) r = t[i], o.hasOwnProperty(r) && o[r] && (o[r] = _(o[r], this._globalOptions.maxUrlLength));
                                e.values[a].data = o
                            }
                    },
                    _getHttpData: function() {
                        if (this._hasNavigator || this._hasDocument) {
                            var e = {};
                            return this._hasNavigator && F.userAgent && (e.headers = {
                                "User-Agent": navigator.userAgent
                            }), this._hasDocument && (R.location && R.location.href && (e.url = R.location.href), R.referrer && (e.headers || (e.headers = {}), e.headers.Referer = R.referrer)), e
                        }
                    },
                    _resetBackoff: function() {
                        this._backoffDuration = 0, this._backoffStart = null
                    },
                    _shouldBackoff: function() {
                        return this._backoffDuration && P() - this._backoffStart < this._backoffDuration
                    },
                    _isRepeatData: function(e) {
                        var t = this._lastData;
                        return !(!t || e.message !== t.message || e.culprit !== t.culprit) && (e.stacktrace || t.stacktrace ? E(e.stacktrace, t.stacktrace) : !e.exception && !t.exception || w(e.exception, t.exception))
                    },
                    _setBackoffState: function(e) {
                        if (!this._shouldBackoff()) {
                            var t = e.status;
                            if (400 === t || 401 === t || 429 === t) {
                                var r;
                                try {
                                    r = e.getResponseHeader("Retry-After"), r = 1e3 * parseInt(r, 10)
                                } catch (e) {}
                                this._backoffDuration = r || (2 * this._backoffDuration || 1e3), this._backoffStart = P()
                            }
                        }
                    },
                    _send: function(e) {
                        var t = this._globalOptions,
                            r = {
                                project: this._globalProject,
                                logger: t.logger,
                                platform: "javascript"
                            },
                            n = this._getHttpData();
                        n && (r.request = n), e.trimHeadFrames && delete e.trimHeadFrames, (e = g(r, e)).tags = g(g({}, this._globalContext.tags), e.tags), e.extra = g(g({}, this._globalContext.extra), e.extra), e.extra["session:duration"] = P() - this._startTime, this._breadcrumbs && 0 < this._breadcrumbs.length && (e.breadcrumbs = {
                            values: [].slice.call(this._breadcrumbs, 0)
                        }), a(e.tags) && delete e.tags, this._globalContext.user && (e.user = this._globalContext.user), t.environment && (e.environment = t.environment), t.release && (e.release = t.release), t.serverName && (e.server_name = t.serverName), f(t.dataCallback) && (e = t.dataCallback(e) || e), e && !a(e) && (f(t.shouldSendCallback) && !t.shouldSendCallback(e) || (this._shouldBackoff() ? this._logDebug("warn", "Raven dropped error due to backoff: ", e) : "number" == typeof t.sampleRate ? Math.random() < t.sampleRate && this._sendProcessedPayload(e) : this._sendProcessedPayload(e)))
                    },
                    _getUuid: function() {
                        return n()
                    },
                    _sendProcessedPayload: function(r, n) {
                        var o = this,
                            e = this._globalOptions;
                        if (this.isSetup())
                            if (r = this._trimPacket(r), this._globalOptions.allowDuplicates || !this._isRepeatData(r)) {
                                this._lastEventId = r.event_id || (r.event_id = this._getUuid()), this._lastData = r, this._logDebug("debug", "Raven about to send:", r);
                                var t = {
                                    sentry_version: "7",
                                    sentry_client: "raven-js/" + this.VERSION,
                                    sentry_key: this._globalKey
                                };
                                this._globalSecret && (t.sentry_secret = this._globalSecret);
                                var a = r.exception && r.exception.values[0];
                                this._globalOptions.autoBreadcrumbs && this._globalOptions.autoBreadcrumbs.sentry && this.captureBreadcrumb({
                                    category: "sentry",
                                    message: a ? (a.type ? a.type + ": " : "") + a.value : r.message,
                                    event_id: r.event_id,
                                    level: r.level || "error"
                                });
                                var i = this._globalEndpoint;
                                (e.transport || this._makeRequest).call(this, {
                                    url: i,
                                    auth: t,
                                    data: r,
                                    options: e,
                                    onSuccess: function e() {
                                        o._resetBackoff(), o._triggerEvent("success", {
                                            data: r,
                                            src: i
                                        }), n && n()
                                    },
                                    onError: function e(t) {
                                        o._logDebug("error", "Raven transport failed to send: ", t), t.request && o._setBackoffState(t.request), o._triggerEvent("failure", {
                                            data: r,
                                            src: i
                                        }), t = t || new Error("Raven send failed (no additional details provided)"), n && n(t)
                                    }
                                })
                            } else this._logDebug("warn", "Raven dropped repeat event: ", r)
                    },
                    _makeRequest: function(t) {
                        var r = L.XMLHttpRequest && new L.XMLHttpRequest,
                            e;
                        if (r && ("withCredentials" in r || "undefined" != typeof XDomainRequest)) {
                            var n = t.url;
                            "withCredentials" in r ? r.onreadystatechange = function() {
                                if (4 === r.readyState)
                                    if (200 === r.status) t.onSuccess && t.onSuccess();
                                    else if (t.onError) {
                                    var e = new Error("Sentry error code: " + r.status);
                                    e.request = r, t.onError(e)
                                }
                            } : (r = new XDomainRequest, n = n.replace(/^https?:/, ""), t.onSuccess && (r.onload = t.onSuccess), t.onError && (r.onerror = function() {
                                var e = new Error("Sentry error code: XDomainRequest");
                                e.request = r, t.onError(e)
                            })), r.open("POST", n + "?" + y(t.auth)), r.send(o(t.data))
                        }
                    },
                    _logDebug: function(e) {
                        this._originalConsoleMethods[e] && this.debug && Function.prototype.apply.call(this._originalConsoleMethods[e], this._originalConsole, [].slice.call(arguments, 1))
                    },
                    _mergeContext: function(e, t) {
                        r(t) ? delete this._globalContext[e] : this._globalContext[e] = g(this._globalContext[e] || {}, t)
                    }
                }).setUser = D.prototype.setUserContext, D.prototype.setReleaseContext = D.prototype.setRelease, j.exports = D
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            1: 1,
            2: 2,
            5: 5,
            6: 6,
            7: 7
        }],
        4: [function(a, i, e) {
            (function(e) {
                var t = a(3),
                    r = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {},
                    n = r.Raven,
                    o = new t;
                o.noConflict = function() {
                    return r.Raven = n, o
                }, o.afterLoad(), i.exports = o
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            3: 3
        }],
        5: [function(e, O, t) {
            (function(e) {
                var n = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {};

                function t(e) {
                    return "object" == typeof e && null !== e
                }

                function r(e) {
                    switch ({}.toString.call(e)) {
                        case "[object Error]":
                        case "[object Exception]":
                        case "[object DOMException]":
                            return !0;
                        default:
                            return e instanceof Error
                    }
                }

                function o(e) {
                    return c() && "[object ErrorEvent]" === {}.toString.call(e)
                }

                function a(e) {
                    return void 0 === e
                }

                function i(e) {
                    return "function" == typeof e
                }

                function l(e) {
                    return "[object String]" === Object.prototype.toString.call(e)
                }

                function s(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                }

                function u(e) {
                    for (var t in e)
                        if (e.hasOwnProperty(t)) return !1;
                    return !0
                }

                function c() {
                    try {
                        return new ErrorEvent(""), !0
                    } catch (e) {
                        return !1
                    }
                }

                function f(n) {
                    function e(e, t) {
                        var r = n(e) || e;
                        return t && t(r) || r
                    }
                    return e
                }

                function p(e, t) {
                    var r, n;
                    if (a(e.length))
                        for (r in e) _(e, r) && t.call(null, r, e[r]);
                    else if (n = e.length)
                        for (r = 0; r < n; r++) t.call(null, r, e[r])
                }

                function d(r, e) {
                    return e && p(e, function(e, t) {
                        r[e] = t
                    }), r
                }

                function h(e) {
                    return !!Object.isFrozen && Object.isFrozen(e)
                }

                function g(e, t) {
                    return !t || e.length <= t ? e : e.substr(0, t) + "…"
                }

                function _(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }

                function v(e) {
                    for (var t = [], r = 0, n = e.length, o; r < n; r++) l(o = e[r]) ? t.push(o.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")) : o && o.source && t.push(o.source);
                    return new RegExp(t.join("|"), "i")
                }

                function m(e) {
                    var r = [];
                    return p(e, function(e, t) {
                        r.push(encodeURIComponent(e) + "=" + encodeURIComponent(t))
                    }), r.join("&")
                }

                function b(e) {
                    var t = e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
                    if (!t) return {};
                    var r = t[6] || "",
                        n = t[8] || "";
                    return {
                        protocol: t[2],
                        host: t[4],
                        path: t[5],
                        relative: t[5] + r + n
                    }
                }

                function y() {
                    var e = n.crypto || n.msCrypto;
                    if (a(e) || !e.getRandomValues) return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                        var t = 16 * Math.random() | 0,
                            r;
                        return ("x" === e ? t : 3 & t | 8).toString(16)
                    });
                    var t = new Uint16Array(8);
                    e.getRandomValues(t), t[3] = 4095 & t[3] | 16384, t[4] = 16383 & t[4] | 32768;
                    var r = function(e) {
                        for (var t = e.toString(16); t.length < 4;) t = "0" + t;
                        return t
                    };
                    return r(t[0]) + r(t[1]) + r(t[2]) + r(t[3]) + r(t[4]) + r(t[5]) + r(t[6]) + r(t[7])
                }

                function x(e) {
                    for (var t = 5, r = 80, n = [], o = 0, a = 0, i = " > ", s = i.length, l; e && o++ < 5 && !("html" === (l = w(e)) || 1 < o && 80 <= a + n.length * s + l.length);) n.push(l), a += l.length, e = e.parentNode;
                    return n.reverse().join(i)
                }

                function w(e) {
                    var t = [],
                        r, n, o, a, i;
                    if (!e || !e.tagName) return "";
                    if (t.push(e.tagName.toLowerCase()), e.id && t.push("#" + e.id), (r = e.className) && l(r))
                        for (n = r.split(/\s+/), i = 0; i < n.length; i++) t.push("." + n[i]);
                    var s = ["type", "name", "title", "alt"];
                    for (i = 0; i < s.length; i++) o = s[i], (a = e.getAttribute(o)) && t.push("[" + o + '="' + a + '"]');
                    return t.join("")
                }

                function E(e, t) {
                    return !!(!!e ^ !!t)
                }

                function k(e, t) {
                    return !E(e, t) && (e = e.values[0], t = t.values[0], e.type === t.type && e.value === t.value && S(e.stacktrace, t.stacktrace))
                }

                function S(e, t) {
                    if (E(e, t)) return !1;
                    var r = e.frames,
                        n = t.frames,
                        o, a;
                    if (r.length !== n.length) return !1;
                    for (var i = 0; i < r.length; i++)
                        if (o = r[i], a = n[i], o.filename !== a.filename || o.lineno !== a.lineno || o.colno !== a.colno || o.function !== a.function) return !1;
                    return !0
                }

                function T(e, t, r, n) {
                    var o = e[t];
                    e[t] = r(o), e[t].__raven__ = !0, e[t].__orig__ = o, n && n.push([e, t, o])
                }
                O.exports = {
                    isObject: t,
                    isError: r,
                    isErrorEvent: o,
                    isUndefined: a,
                    isFunction: i,
                    isString: l,
                    isArray: s,
                    isEmptyObject: u,
                    supportsErrorEvent: c,
                    wrappedCallback: f,
                    each: p,
                    objectMerge: d,
                    truncate: g,
                    objectFrozen: h,
                    hasKey: _,
                    joinRegExp: v,
                    urlencode: m,
                    uuid4: y,
                    htmlTreeAsString: x,
                    htmlElementAsString: w,
                    isSameException: k,
                    isSameStacktrace: S,
                    parseUrl: b,
                    fill: T
                }
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        6: [function(t, r, e) {
            (function(e) {
                var _ = t(5),
                    v = {
                        collectWindowErrors: !0,
                        debug: !1
                    },
                    m = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {},
                    b = [].slice,
                    y = "?",
                    x = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;

                function w() {
                    return "undefined" == typeof document || null == document.location ? "" : document.location.href
                }
                v.report = function e() {
                    var o = [],
                        a = null,
                        i = null,
                        c = null,
                        f, t;

                    function r(e) {
                        u(), o.push(e)
                    }

                    function n(e) {
                        for (var t = o.length - 1; 0 <= t; --t) o[t] === e && o.splice(t, 1)
                    }

                    function s() {
                        d(), o = []
                    }

                    function p(e, t) {
                        var r = null;
                        if (!t || v.collectWindowErrors) {
                            for (var n in o)
                                if (o.hasOwnProperty(n)) try {
                                    o[n].apply(null, [e].concat(b.call(arguments, 2)))
                                } catch (e) {
                                    r = e
                                }
                            if (r) throw r
                        }
                    }

                    function l(e, t, r, n, o) {
                        var a = null;
                        if (c) v.computeStackTrace.augmentStackTraceWithInitialElement(c, t, r, e), h();
                        else if (o && _.isError(o)) p(a = v.computeStackTrace(o), !0);
                        else {
                            var i = {
                                    url: t,
                                    line: r,
                                    column: n
                                },
                                s = void 0,
                                l = e,
                                u, u;
                            if ("[object String]" === {}.toString.call(e))(u = e.match(x)) && (s = u[1], l = u[2]);
                            i.func = y, p(a = {
                                name: s,
                                message: l,
                                url: w(),
                                stack: [i]
                            }, !0)
                        }
                        return !!f && f.apply(this, arguments)
                    }

                    function u() {
                        t || (f = m.onerror, m.onerror = l, t = !0)
                    }

                    function d() {
                        t && (m.onerror = f, t = !1, f = void 0)
                    }

                    function h() {
                        var e = c,
                            t = a;
                        p.apply(i = c = a = null, [e, !1].concat(t))
                    }

                    function g(e, t) {
                        var r = b.call(arguments, 1);
                        if (c) {
                            if (i === e) return;
                            h()
                        }
                        var n = v.computeStackTrace(e);
                        if (c = n, i = e, a = r, setTimeout(function() {
                                i === e && h()
                            }, n.incomplete ? 2e3 : 0), !1 !== t) throw e
                    }
                    return g.subscribe = r, g.unsubscribe = n, g.uninstall = s, g
                }(), v.computeStackTrace = function e() {
                    function n(e) {
                        if (void 0 !== e.stack && e.stack) {
                            for (var t = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[a-z]:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, r = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i, n = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, o = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, a = /\((\S*)(?::(\d+))(?::(\d+))\)/, i = e.stack.split("\n"), s = [], l, u, c, f = /^(.*) is undefined$/.exec(e.message), p = 0, d = i.length; p < d; ++p) {
                                if (u = t.exec(i[p])) {
                                    var h = u[2] && 0 === u[2].indexOf("native"),
                                        g;
                                    (g = u[2] && 0 === u[2].indexOf("eval")) && (l = a.exec(u[2])) && (u[2] = l[1], u[3] = l[2], u[4] = l[3]), c = {
                                        url: h ? null : u[2],
                                        func: u[1] || y,
                                        args: h ? [u[2]] : [],
                                        line: u[3] ? +u[3] : null,
                                        column: u[4] ? +u[4] : null
                                    }
                                } else if (u = n.exec(i[p])) c = {
                                    url: u[2],
                                    func: u[1] || y,
                                    args: [],
                                    line: +u[3],
                                    column: u[4] ? +u[4] : null
                                };
                                else {
                                    if (!(u = r.exec(i[p]))) continue;
                                    var g;
                                    (g = u[3] && -1 < u[3].indexOf(" > eval")) && (l = o.exec(u[3])) ? (u[3] = l[1], u[4] = l[2], u[5] = null) : 0 !== p || u[5] || void 0 === e.columnNumber || (s[0].column = e.columnNumber + 1), c = {
                                        url: u[3],
                                        func: u[1] || y,
                                        args: u[2] ? u[2].split(",") : [],
                                        line: u[4] ? +u[4] : null,
                                        column: u[5] ? +u[5] : null
                                    }
                                }!c.func && c.line && (c.func = y), s.push(c)
                            }
                            return s.length ? {
                                name: e.name,
                                message: e.message,
                                url: w(),
                                stack: s
                            } : null
                        }
                    }

                    function f(e, t, r, n) {
                        var o = {
                            url: t,
                            line: r
                        };
                        if (o.url && o.line) {
                            if (e.incomplete = !1, o.func || (o.func = y), 0 < e.stack.length && e.stack[0].url === o.url) {
                                if (e.stack[0].line === o.line) return !1;
                                if (!e.stack[0].line && e.stack[0].func === o.func) return e.stack[0].line = o.line, !1
                            }
                            return e.stack.unshift(o), e.partial = !0
                        }
                        return !(e.incomplete = !0)
                    }

                    function p(e, t) {
                        for (var r = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, n = [], o = {}, a = !1, i, s, l, u = p.caller; u && !a; u = u.caller)
                            if (u !== d && u !== v.report) {
                                if (s = {
                                        url: null,
                                        func: y,
                                        line: null,
                                        column: null
                                    }, u.name ? s.func = u.name : (i = r.exec(u.toString())) && (s.func = i[1]), void 0 === s.func) try {
                                    s.func = i.input.substring(0, i.input.indexOf("{"))
                                } catch (e) {}
                                o["" + u] ? a = !0 : o["" + u] = !0, n.push(s)
                            } t && n.splice(0, t);
                        var c = {
                            name: e.name,
                            message: e.message,
                            url: w(),
                            stack: n
                        };
                        return f(c, e.sourceURL || e.fileName, e.line || e.lineNumber, e.message || e.description), c
                    }

                    function d(e, t) {
                        var r = null;
                        t = null == t ? 0 : +t;
                        try {
                            if (r = n(e)) return r
                        } catch (e) {
                            if (v.debug) throw e
                        }
                        try {
                            if (r = p(e, t + 1)) return r
                        } catch (e) {
                            if (v.debug) throw e
                        }
                        return {
                            name: e.name,
                            message: e.message,
                            url: w()
                        }
                    }
                    return d.augmentStackTraceWithInitialElement = f, d.computeStackTraceFromStackProp = n, d
                }(), r.exports = v
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            5: 5
        }],
        7: [function(e, t, r) {
            function s(e, t) {
                for (var r = 0; r < e.length; ++r)
                    if (e[r] === t) return r;
                return -1
            }

            function n(e, t, r, n) {
                return JSON.stringify(e, o(t, n), r)
            }

            function l(e) {
                var t = {
                    stack: e.stack,
                    message: e.message,
                    name: e.name
                };
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t
            }

            function o(n, o) {
                var a = [],
                    i = [];
                return null == o && (o = function(e, t) {
                        return a[0] === t ? "[Circular ~]" : "[Circular ~." + i.slice(0, s(a, t)).join(".") + "]"
                    }),
                    function(e, t) {
                        if (0 < a.length) {
                            var r = s(a, this);
                            ~r ? a.splice(r + 1) : a.push(this), ~r ? i.splice(r, 1 / 0, e) : i.push(e), ~s(a, t) && (t = o.call(this, e, t))
                        } else a.push(t);
                        return null == n ? t instanceof Error ? l(t) : t : n.call(this, e, t)
                    }
            }(r = t.exports = n).getSerialize = o
        }, {}]
    }, {}, [4])(4)
}), LPRavenSanitize = function() {
        var r = /([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})/,
            t = /(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3})|(?:((?:[0-9a-fA-F]{1,4}:){7}(?:[0-9a-fA-F]{1,4}|:)|(?:[0-9a-fA-F]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[0-9a-fA-F]{1,4}|:)|(?:[0-9a-fA-F]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(:[0-9a-fA-F]{1,4}){1,2}|:)|(?:[0-9a-fA-F]{1,4}:){4}(?:(:[0-9a-fA-F]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(:[0-9a-fA-F]{1,4}){1,3}|:)|(?:[0-9a-fA-F]{1,4}:){3}(?:(:[0-9a-fA-F]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(:[0-9a-fA-F]{1,4}){1,4}|:)|(?:[0-9a-fA-F]{1,4}:){2}(?:(:[0-9a-fA-F]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(:[0-9a-fA-F]{1,4}){1,5}|:)|(?:[0-9a-fA-F]{1,4}:){1}(?:(:[0-9a-fA-F]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(:[0-9a-fA-F]{1,4}){1,6}|:)|(?::((?::[0-9a-fA-F]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[0-9a-fA-F]{1,4}){1,7}|:)))(%[0-9a-zA-Z]{1,})?)/,
            a = /^(?:(https?|ftp):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})(?:[\/\w \.-]*)/i,
            o = function(e) {
                if (!u.replaceEmail) return e;
                var t = r.exec(e);
                return !t || t.length ? e : "[[*@*." + t.pop() + "]]"
            },
            i = function(e) {
                return u.replaceIp && t.test(e) ? -1 < e.indexOf(".") ? "[[ipv4 address]]" : "[[ipv6 address]]" : e
            },
            s = function(e) {
                if (!u.replaceUrl) return e;
                var t = a.exec(e);
                if (!t || !t.length) return e;
                var r = t[1],
                    n = t[2],
                    o = t[3];
                return -1 < n.indexOf("lastpass") ? e : "[[" + (r || "") + n + "." + o + "]]"
            },
            l = {
                culprit: !0,
                stacktrace: !0
            },
            u = {
                replaceUrl: !0,
                replaceEmail: !0,
                replaceIp: !0
            },
            c = function(r) {
                var n = {};
                return Object.keys(r).forEach(function(e) {
                    if (n[e] = void 0, r[e])
                        if (l[e]) n[e] = r[e];
                        else if (Array.isArray(r[e])) n[e] = r[e].map(function(e) {
                        return c(e)
                    });
                    else if ("object" == typeof r[e]) n[e] = c(r[e]);
                    else if ("string" == typeof r[e]) {
                        var t = r[e];
                        t = o(t), t = i(t), t = s(t), n[e] = t
                    }
                }), n
            };
        return {
            config: u,
            sanitize: c
        }
    }(), LPPlatform = {
        openAcctsIframe: function(e, t) {
            var r = -1 !== document.location.href.indexOf("vault.php");
            e.webvault = r ? "1" : "0";
            var n = LPTools.createElement("iframe", "acctsiframe");
            n.src = r ? "iframe.php" : "iframe.html", LPPlatform.addEventListener(n, "load", function() {
                n.contentWindow.goTo(LPProxy.getBaseURL() + "acctsiframe.php?" + $.param(e), t), LPTools.addClass(n, "loaded")
            }), document.body.appendChild(n), bg.onSettingsIframeClose(function() {
                try {
                    document.body.removeChild(n)
                } catch (e) {
                    LPPlatform.logException(e)
                }
            })
        },
        shouldShowVaultLoginButton: function() {
            return !0
        },
        lpIsExtension: function() {
            return !0
        },
        openURL: function(e) {
            bg.openURL(e)
        },
        getBaseURL: function() {
            return bg.get("base_url")
        },
        doAjax: function(e) {
            $.ajax(e)
        },
        ajax: function(e) {
            bg.isOffline() ? e.error && e.error(null, null, "offline") : LPPlatform.doAjax(e)
        },
        getOpenGroups: function() {
            var e = bg.localStorage_getItem(bg.db_prepend(bg.get("g_username_hash") + ".savedtree"));
            if (null === e) return null;
            for (var t = {}, r = 0, n = (e = LPProxy.decrypt(e).split(",")).length; r < n; ++r) {
                var o = e[r];
                0 === o.indexOf("_") && (o = o.substring(1)), t[o] = !0
            }
            return t
        },
        setOpenGroups: function(e) {
            for (var t = 0, r = e.length; t < r; ++t) e[t] = "_" + e[t];
            var n = LPProxy.encrypt(e.join(","));
            bg.localStorage_setItem(bg.db_prepend(bg.get("g_username_hash") + ".savedtree"), n)
        },
        initialized: function() {
            return !0
        },
        getHTML: function(e, t) {
            $.ajax({
                url: e,
                success: t,
                dataType: "text"
            })
        },
        purchasePremium: function() {
            window.open(LPProxy.getBaseURL() + "features_joinpremium4.php?a=1", "_blank")
        },
        loadedPreferences: function() {
            return LPTools.hasProperties(bg.get("g_userprefs"))
        },
        openAttachment: function(e) {
            bg.openAttach(e._parentNote.getID(), e.getID())
        },
        saveAttachment: function(e) {
            bg.exportAttachment(e._parentNote.getID(), e.getID())
        },
        logException: function(e) {
            var t = "string" == typeof e ? e : e.message;
            e.stack && (t += "\n" + e.stack), self.Raven && self.Raven.captureException(e), LPPlatform.logError(t)
        },
        logError: function(e) {
            e = "Page: " + window.location.href + " Error: " + e;
            try {
                console.error(e), bg.lpReportError("VAULT_4_0: " + e)
            } catch (e) {}
        },
        addEventListener: function(e) {
            if (e) {
                for (var t = [], r = 1; r < arguments.length; ++r) t.push(arguments[r]);
                e.addEventListener.apply(e, t)
            }
        },
        removeEventListener: function(e) {
            for (var t = [], r = 1; r < arguments.length; ++r) t.push(arguments[r]);
            e.removeEventListener.apply(e, t)
        },
        canBackgroundOpenPopover: function() {
            return !0
        },
        generateSharingKeys: function(e) {
            bg.generateSharingKeys(e)
        },
        getResourcePath: function(e) {
            return e
        },
        canPreventBlur: function() {
            return !0
        },
        getBackgroundData: function(e) {
            return e
        },
        showIntroTutorial: function() {
            LPPlatform.openTour()
        },
        setIntroTutorialDisable: function(e) {
            return !1
        },
        supportsBinary: function() {
            return !0
        },
        openKeyboard: function() {
            bg.LPPlatform.openTabDialog("login", {
                virtualKeyboard: !0
            })
        },
        getImportHandler: function() {
            return "importerHandler"
        },
        showDownloader: function() {
            return !1
        },
        openTour: function(e, t) {
            LPRequire.requireJS(["lpPing", "lpTag", "Tour/lpPingManager", "Tour/lpTagManager", "Tour/introTourShade", "Tour/introTourPreferences", "Tour/FamilyOnboarding/familyOnboardingTour", "Tour/OmarMigrationTour/omarMigrationTour", "Tour/OmarVaultTour/omarVaultTour", "Tour/Vault41Tour/vault41Tour", "Tour/introTourData", "Tour/introTourFlow", "Tour/introTourQueue", "Tour/introTour"], function() {
                IntroTour && IntroTour.start(e, t)
            })
        },
        showSecondaryOnboarding: function() {
            LPRequire.requireJS(["SecondaryOnboarding/SecondaryOnboarding"], function() {
                var e;
                SecondaryOnboardingManager && (new SecondaryOnboardingManager).init()
            })
        },
        allowClipboardCopy: function() {
            return LPFeatures.allowClipboardCopy()
        },
        getVersion: function() {
            return bg.get("lpversion")
        },
        installBinary: function(e, t) {
            bg.install_binary(e, t)
        },
        requestNativeMessaging: function(e) {
            bg.request_native_messaging(e)
        }
    },
    function(r) {
        r.getExtensionDropdownDelay = function() {
            return -1
        }, r.closePopup = function(e) {
            (e || 0 === Dialog.prototype.getDialogCount() && 0 === LPDialog.getPendingCount()) && r.doClosePopup()
        }, r.doClosePopup = function() {
            window.close()
        }, r.closeTab = function() {
            window.close()
        }, r.move = function() {}, r.checkBrowserPasswordManager = function(e) {}, r.setupDropdownImportMenu = function(e) {
            e.addClass("singleImportOption"), $("#importMenuItemMain").unbind("click").bind("click", function(e) {
                bg.lpevent("m_i"), bg.openimport()
            }), $("#omarImportMenuItemMain").unbind("click").bind("click", function(e) {
                bg.lpevent("m_i"), bg.openimport()
            })
        }, r.getUnavailablePreferences = function() {
            return {
                clearClipboardSecsVal: !bg.can_clear_clipboard(),
                openpopoverHk: !r.canBackgroundOpenPopover(),
                pollServerVal: bg.get("g_nopoll"),
                storeLostOTP: "0" === bg.get("g_prefoverrides").account_recovery,
                showvault: bg.get("g_hidevault") || bg.get("g_hideshowvault"),
                homeHk: bg.get("g_hidevault") || bg.get("g_hideshowvault"),
                saveallHk: bg.get("g_hidesaedhotkey"),
                searchHk: bg.get("g_hidesearch"),
                usepopupfill: !bg.get("g_offer_popupfill"),
                recentUsedCount: bg.get("g_hiderecentlyusedlistsize"),
                searchNotes: bg.get("g_hidenotes"),
                enablenamedpipes: bg.get("lppassusernamehash") || !(bg.get("g_is_win") || bg.get("g_is_mac") || bg.get("g_is_linux")) || bg.is_chrome_portable(),
                enablenewlogin: !0
            }
        }, r.getPreferencesRequiringBinary = function() {
            return {
                enablenamedpipes: !0
            }
        }, r.handlePreferenceChanges = function(e) {
            !1 === e.storeLostOTP && bg.DeleteOTP()
        }, r.resizeTo = function(e, t) {
            window.resizeTo(e, t)
        }, r.openCreateAccount = function() {
            bg.LPPlatform.openTabDialog("createAccount")
        }, r.showIntroTutorial = function() {
            var e = bg.get("LPContentScriptFeatures");
            if (LPProxy.isFamilyUser() || e && "vault" !== e.intro_tutorial_version || "US" !== bg.get("countryfromip")) r.openTour();
            else {
                var t = LPProxy.getModelCount();
                if (0 === t) {
                    if (!LPProxy.getPreference("showIntroTutorial", !0)) return void r.openTour();
                    dialogs.introTutorialWelcome.open()
                } else 1 === t && bg.IntroTutorial.getState(function(e) {
                    e.enabled ? (Topics.get(Topics.EXPAND_ALL).publish(), dialogs.introTutorialComplete.open({
                        tutorialState: e
                    })) : r.openTour()
                })
            }
        }, r.onLoad = function(e, t) {
            "loading" === e.document.readyState ? e.addEventListener("DOMContentLoaded", t) : t()
        }, r.installBinary = function(e, t) {
            bg.install_binary(e, t)
        }, r.requestNativeMessaging = function(e) {
            bg.request_native_messaging(e)
        }
    }(LPPlatform);
//# sourceMappingURL=sourcemaps/platform.js.map