! function(e) {
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
    }, n.p = "", n(n.s = 735)
}({
    10: function(e, t, n) {
        "use strict";
        n.d(t, "n", (function() {
            return o
        })), n.d(t, "g", (function() {
            return i
        })), n.d(t, "l", (function() {
            return s
        })), n.d(t, "j", (function() {
            return a
        })), n.d(t, "m", (function() {
            return c
        })), n.d(t, "k", (function() {
            return u
        })), n.d(t, "o", (function() {
            return d
        })), n.d(t, "i", (function() {
            return l
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

        function s() {
            return "firefox" === r.a().bundleInfo.browser
        }

        function a() {
            return "chrome" === r.a().bundleInfo.browser
        }

        function c() {
            return "safari" === r.a().bundleInfo.browser
        }

        function u() {
            return "edge" === r.a().bundleInfo.browser
        }

        function d() {
            return r.a().systemInfo.os.isWindows
        }

        function l() {
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
    },
    108: function(e, t, n) {
        "use strict";
        var r = n(85),
            o = n(96),
            i = n(114);

        function s(e) {
            var t = this.__data__ = new r.a(e);
            this.size = t.size
        }
        s.prototype.clear = function() {
            this.__data__ = new r.a, this.size = 0
        }, s.prototype.delete = function(e) {
            var t = this.__data__,
                n = t.delete(e);
            return this.size = t.size, n
        }, s.prototype.get = function(e) {
            return this.__data__.get(e)
        }, s.prototype.has = function(e) {
            return this.__data__.has(e)
        }, s.prototype.set = function(e, t) {
            var n = this.__data__;
            if (n instanceof r.a) {
                var s = n.__data__;
                if (!o.a || s.length < 199) return s.push([e, t]), this.size = ++n.size, this;
                n = this.__data__ = new i.a(s)
            }
            return n.set(e, t), this.size = n.size, this
        }, t.a = s
    },
    114: function(e, t, n) {
        "use strict";
        var r = n(57),
            o = Object(r.a)(Object, "create"),
            i = Object.prototype.hasOwnProperty,
            s = Object.prototype.hasOwnProperty;

        function a(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        a.prototype.clear = function() {
            this.__data__ = o ? o(null) : {}, this.size = 0
        }, a.prototype.delete = function(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t
        }, a.prototype.get = function(e) {
            var t = this.__data__;
            if (o) {
                var n = t[e];
                return "__lodash_hash_undefined__" === n ? void 0 : n
            }
            return i.call(t, e) ? t[e] : void 0
        }, a.prototype.has = function(e) {
            var t = this.__data__;
            return o ? void 0 !== t[e] : s.call(t, e)
        }, a.prototype.set = function(e, t) {
            var n = this.__data__;
            return this.size += this.has(e) ? 0 : 1, n[e] = o && void 0 === t ? "__lodash_hash_undefined__" : t, this
        };
        var c = a,
            u = n(85),
            d = n(96),
            l = function(e, t) {
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
                map: new(d.a || u.a),
                string: new c
            }
        }, f.prototype.delete = function(e) {
            var t = l(this, e).delete(e);
            return this.size -= t ? 1 : 0, t
        }, f.prototype.get = function(e) {
            return l(this, e).get(e)
        }, f.prototype.has = function(e) {
            return l(this, e).has(e)
        }, f.prototype.set = function(e, t) {
            var n = l(this, e),
                r = n.size;
            return n.set(e, t), this.size += n.size == r ? 0 : 1, this
        }, t.a = f
    },
    117: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return e
        }
    },
    12: function(e, t, n) {
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
    },
    125: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
        }
    },
    126: function(e, t, n) {
        "use strict";
        var r = /^(?:0|[1-9]\d*)$/;
        t.a = function(e, t) {
            var n = typeof e;
            return !!(t = null == t ? 9007199254740991 : t) && ("number" == n || "symbol" != n && r.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
    },
    128: function(e, t, n) {
        "use strict";
        var r = Object.prototype;
        t.a = function(e) {
            var t = e && e.constructor;
            return e === ("function" == typeof t && t.prototype || r)
        }
    },
    144: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return u
        })), n.d(t, "b", (function() {
            return d
        }));
        var r = n(167),
            o = n(194),
            i = n(25),
            s = n(177),
            a = n(17),
            c = n(145);
        class u {
            constructor(e) {
                const t = e.testArgs,
                    n = t && t.processEnv ? t.processEnv : c.b.fromBrowserify(),
                    u = c.a.getTargetEnv(n),
                    d = "edge" === e.browser || t && t.forceEdgeCompatLoggingMode,
                    l = "prod" !== u || "cs" !== e.context,
                    f = {
                        create: e => new r.b(e, {
                            writer: new s.a(d),
                            filterFn: l ? e => !0 : Object(o.a)(i.a.ERROR)
                        })
                    },
                    h = Object(a.b)(e.browser, e.context, n, u);
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

        function d() {
            return u.getInstance()
        }
    },
    145: function(e, t, n) {
        "use strict";
        var r, o = n(4);
        ! function(e) {
            e.create = function(e, t, n, r, o) {
                const i = `https://www.${e}`,
                    s = `https://data.${e}`,
                    a = `https://app.${e}`,
                    c = `https://auth.${e}/v3`;
                return {
                    app: a,
                    appPersonalDictionary: `https://account.${e}/customize`,
                    capi: `wss://capi.${e}/freews`,
                    capiGDocs: `wss://capi.${e}/gdocs`,
                    dapiMimic: `${s}/api/mimic`,
                    dapiProps: `${s}/api/props/v2`,
                    dapiFindProps: `${s}/api/props/v2/find`,
                    editorDictionary: `${a}/profile/dictionary`,
                    dictionary: `https://capi.${e}/api/defs`,
                    docs: `${a}/docs`,
                    docsApi: `https://dox.${e}/documents`,
                    newDoc: `${a}/docs/new`,
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
        var i, s, a, c, u, d, l = n(58);
        ! function(e) {
            const t = {
                chrome: "chromeExt",
                firefox: "firefoxExt",
                safari: "safariExt",
                edge: "edgeExt"
            };
            e.create = function(e, n) {
                return {
                    appName: Object(l.c)(t[e], "gnar app name"),
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
                    appName: Object(l.c)(t[e], "felog app name"),
                    sendUsageMetrics: !0,
                    sendPerfMetrics: "dev" === n || Math.random() <= .01
                }
            }
        }(s || (s = {})),
        function(e) {
            const t = {
                chrome: "extensionChrome",
                firefox: "extensionFirefox",
                safari: "extensionSafari",
                edge: "extensionEdge"
            };
            e.create = function(e) {
                return {
                    appName: Object(l.c)(t[e], "sumologic app name")
                }
            }
        }(a || (a = {})),
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
            e.create = function(e, n, a, d) {
                const l = "prod" === n ? "https://f-log-extension.grammarly.io" : "qa" === n || "dev" === n ? "https://127.0.0.1:8000" : Object(o.g)(n),
                    f = "prod" === n ? "https://endpoint2.collection.us2.sumologic.com/receiver/v1/http/ZaVnC4dhaV1OF-4ic11yqpre0casnyvs_ZoaCHciEYdRyBkrfwP6DMlsWt8tSVU76RPqgGvAGjXGQk_UNuxPx-pYbToJapM_Fr0CUcgKaA8_IVl-lhSr5Q==" : "qa" === n || "dev" === n ? "https://127.0.0.1:8000" : Object(o.g)(n),
                    h = "prod" === n ? t : "qa" === n || "dev" === n ? "qagr.io" : Object(o.g)(n);
                return {
                    url: r.create(t, l, f, a, d),
                    gnar: i.create(e, h),
                    felog: s.create(e, n),
                    capi: c.create(),
                    extensionId: "87677a2c52b84ad3a151a4a72f5bd3c4",
                    newsVersion: 0,
                    features: u.create(e)
                }
            }
        }(d || (d = {}));
        var f, h, g, p, m, b, v, _, y, O, w, j, A, F, C = n(236);
        (h = f || (f = {})).create = function(e, t, n, r, o, i, s) {
                const a = void 0 !== i && void 0 !== s ? i : "UNVERSIONED",
                    c = `${e}.${t}.${n}`;
                return {
                    version: c,
                    fullVersion: `${c}-${[r,["prod"!==o?o:null,a!==r?a:null].filter(e=>!!e).join(".")].filter(e=>""!==e).join("/")}`,
                    commitHash: s,
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
                            return C.a.runtime.getManifest().version;
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
            }(O || (O = {})),
            function(e) {
                e.create = function(e) {
                    return {
                        browser: y.create(e),
                        os: O.create(e)
                    }
                }
            }(w || (w = {})), n.d(t, "b", (function() {
                return j
            })), n.d(t, "a", (function() {
                return A
            })),
            function(e) {
                function t(e, t, n, r, o, i, s, a) {
                    return {
                        env: e,
                        major_number: t,
                        build_number: n,
                        release_number: r,
                        git_branch: o,
                        git_commit: i,
                        edge_popup_url: s,
                        empty_script_url: a
                    }
                }
                e.create = t, e.fromBrowserify = function() {
                    return t("prod", "14", "947", "0", "UNVERSIONED", "UNVERSIONED", "", "")
                }
            }(j || (j = {})), (F = A || (A = {})).getTargetEnv = function(e) {
                if (!e.env) throw new Error("processEnv.env is null or undefined");
                const t = m.create(e.env);
                if (!t) throw new Error(`Invalid processEnv.env: ${e.env}`);
                return t
            }, F.create = function(e, t, n, r) {
                const i = [n.major_number, n.build_number, n.release_number].map(o.m);
                let s;
                if (3 === i.length && i.every(e => void 0 !== e)) s = i;
                else {
                    let n;
                    try {
                        n = f.getManifestVersion(e, t, window)
                    } catch (e) {}
                    const r = (n || "").split(".").map(o.m);
                    s = 3 === r.length && r.every(e => void 0 !== e) ? r : [0, 0, 0]
                }
                const [a, c, u] = s;
                return {
                    buildInfo: f.create(a, c, u, e, r, n.git_branch, n.git_commit),
                    bundleInfo: _.create(e, r, t),
                    appConfig: d.create(e, r, n.edge_popup_url, n.empty_script_url),
                    systemInfo: w.create(window)
                }
            }
    },
    152: function(e, t, n) {
        "use strict";
        var r = n(36).a.Uint8Array;
        t.a = r
    },
    156: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return r
        }));
        var r, o = n(12),
            i = n(4);
        class s {
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
                return void 0 !== t ? new s(t) : e.dummy
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
    },
    157: function(e, t, n) {
        "use strict";
        var r = n(182),
            o = Object(r.a)(Object.getPrototypeOf, Object);
        t.a = o
    },
    159: function(e, t) {
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
    },
    167: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return i
        })), n.d(t, "b", (function() {
            return s
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
        class s extends o {
            constructor(e, t) {
                super(e), this._config = t
            }
            handleEvent(e) {
                this._config.filterFn(e) && this._config.writer.write(e)
            }
        }
    },
    168: function(e, t, n) {
        "use strict";
        (function(e) {
            var n = "object" == typeof e && e && e.Object === Object && e;
            t.a = n
        }).call(this, n(159))
    },
    169: function(e, t, n) {
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
    },
    17: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return i
        })), n.d(t, "b", (function() {
            return s
        })), n.d(t, "c", (function() {
            return a
        }));
        var r = n(145);
        const o = new(n(4).b)(() => {
            throw new Error("Global config not initialized")
        });

        function i() {
            return o.get()
        }

        function s(e, t, n, i) {
            const s = r.a.create(e, t, n, i);
            return o.init(s), window.GR_CFG = o.get(), s
        }

        function a(e, t, n) {
            throw new Error("Never use it")
        }
    },
    171: function(e, t, n) {
        "use strict";
        var r = n(57),
            o = function() {
                try {
                    var e = Object(r.a)(Object, "defineProperty");
                    return e({}, "", {}), e
                } catch (e) {}
            }();
        t.a = o
    },
    177: function(e, t, n) {
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
    },
    182: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            return function(n) {
                return e(t(n))
            }
        }
    },
    194: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return o
        }));
        var r = n(25);
        const o = e => t => Object(r.b)(t.level) >= Object(r.b)(e)
    },
    195: function(e, t, n) {
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
    },
    196: function(e, t, n) {
        "use strict";
        var r = n(212),
            o = n(31),
            i = n(128),
            s = Object.prototype.hasOwnProperty,
            a = function(e) {
                if (!Object(o.a)(e)) return function(e) {
                    var t = [];
                    if (null != e)
                        for (var n in Object(e)) t.push(n);
                    return t
                }(e);
                var t = Object(i.a)(e),
                    n = [];
                for (var r in e)("constructor" != r || !t && s.call(e, r)) && n.push(r);
                return n
            },
            c = n(77);
        t.a = function(e) {
            return Object(c.a)(e) ? Object(r.a)(e, !0) : a(e)
        }
    },
    198: function(e, t) {
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
    },
    210: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "second", (function() {
            return r
        })), n.d(t, "minute", (function() {
            return o
        })), n.d(t, "hour", (function() {
            return i
        })), n.d(t, "day", (function() {
            return s
        })), n.d(t, "week", (function() {
            return a
        })), n.d(t, "days", (function() {
            return c
        })), n.d(t, "seconds", (function() {
            return u
        })), n.d(t, "hertz", (function() {
            return d
        }));
        const r = 1e3,
            o = 60 * r,
            i = 60 * o,
            s = 24 * i,
            a = 7 * s;

        function c(e) {
            return e * s
        }

        function u(e) {
            return e * r
        }

        function d(e) {
            return r / e
        }
    },
    211: function(e, t, n) {
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
    },
    212: function(e, t, n) {
        "use strict";
        var r = n(99),
            o = n(27),
            i = n(82),
            s = n(126),
            a = n(91),
            c = Object.prototype.hasOwnProperty;
        t.a = function(e, t) {
            var n = Object(o.a)(e),
                u = !n && Object(r.a)(e),
                d = !n && !u && Object(i.a)(e),
                l = !n && !u && !d && Object(a.a)(e),
                f = n || u || d || l,
                h = f ? function(e, t) {
                    for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
                    return r
                }(e.length, String) : [],
                g = h.length;
            for (var p in e) !t && !c.call(e, p) || f && ("length" == p || d && ("offset" == p || "parent" == p) || l && ("buffer" == p || "byteLength" == p || "byteOffset" == p) || Object(s.a)(p, g)) || h.push(p);
            return h
        }
    },
    213: function(e, t, n) {
        "use strict";
        var r = function(e, t, n) {
            for (var r = -1, o = Object(e), i = n(e), s = i.length; s--;) {
                var a = i[++r];
                if (!1 === t(o[a], a, o)) break
            }
            return e
        };
        t.a = r
    },
    217: function(e, t) {
        var n, r, o = e.exports = {};

        function i() {
            throw new Error("setTimeout has not been defined")
        }

        function s() {
            throw new Error("clearTimeout has not been defined")
        }

        function a(e) {
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
                r = "function" == typeof clearTimeout ? clearTimeout : s
            } catch (e) {
                r = s
            }
        }();
        var c, u = [],
            d = !1,
            l = -1;

        function f() {
            d && c && (d = !1, c.length ? u = c.concat(u) : l = -1, u.length && h())
        }

        function h() {
            if (!d) {
                var e = a(f);
                d = !0;
                for (var t = u.length; t;) {
                    for (c = u, u = []; ++l < t;) c && c[l].run();
                    l = -1, t = u.length
                }
                c = null, d = !1,
                    function(e) {
                        if (r === clearTimeout) return clearTimeout(e);
                        if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
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
            u.push(new g(e, t)), 1 !== u.length || d || a(h)
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
    },
    226: function(e, t, n) {
        "use strict";
        (function(e) {
            var r = n(168),
                o = "object" == typeof exports && exports && !exports.nodeType && exports,
                i = o && "object" == typeof e && e && !e.nodeType && e,
                s = i && i.exports === o && r.a.process,
                a = function() {
                    try {
                        return i && i.require && i.require("util").types || s && s.binding && s.binding("util")
                    } catch (e) {}
                }();
            t.a = a
        }).call(this, n(198)(e))
    },
    227: function(e, t, n) {
        "use strict";
        n.d(t, "f", (function() {
            return i
        })), n.d(t, "g", (function() {
            return s
        })), n.d(t, "b", (function() {
            return a
        })), n.d(t, "a", (function() {
            return c
        })), n.d(t, "d", (function() {
            return u
        })), n.d(t, "e", (function() {
            return d
        })), n.d(t, "c", (function() {
            return l
        })), n.d(t, "h", (function() {
            return h
        }));
        var r = n(315),
            o = n(10);
        const i = "1.0",
            s = ["inbox.google.com", "mail.google.com", "yahoo.com", "mail.live.com", "facebook.com", "tumblr.com", "stackoverflow.com", "wordpress.com", "wordpress.org", "blogspot.com"],
            a = ["facebook.com", "messenger.com", "work.fb.com", "business.facebook.com"],
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
            d = [6e5, u, 36e5, 108e5, 432e5, 864e5, 31536e6],
            l = {},
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
    },
    236: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return o
        }));
        var r = n(4);
        const o = Object(r.p)(() => browser, () => window.browser);
        window.edge = window.browser, window.chrome = window.chrome
    },
    240: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return i
        })), n.d(t, "a", (function() {
            return s
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

        function s(e, t, n, r, o) {
            return i({
                logger: e,
                level: n,
                message: t,
                extra: r
            }, o)
        }
    },
    25: function(e, t, n) {
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
    },
    264: function(e, t, n) {
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

        function s(e, t) {
            const n = new Set;
            return t.filter(t => {
                const r = e(t),
                    o = !n.has(r);
                return n.add(r), o
            })
        }

        function a(e, t, n) {
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

        function d(e) {
            return e.slice().reverse()
        }

        function l(e, t) {
            const n = [],
                r = [];
            let o = 0,
                i = 0;
            for (let s = 0; s < t.length; s++) e(t[s]) ? n[o++] = t[s] : r[i++] = t[s];
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
            return s
        })), n.d(t, "scan", (function() {
            return a
        })), n.d(t, "maximum", (function() {
            return c
        })), n.d(t, "maximumBy", (function() {
            return u
        })), n.d(t, "reverse", (function() {
            return d
        })), n.d(t, "partition", (function() {
            return l
        })), n.d(t, "chunkBySize", (function() {
            return f
        })), n.d(t, "unfold", (function() {
            return h
        })), n.d(t, "range", (function() {
            return g
        })), n.d(t, "groupBy", (function() {
            return p
        }))
    },
    268: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return function(t) {
                return e(t)
            }
        }
    },
    27: function(e, t, n) {
        "use strict";
        var r = Array.isArray;
        t.a = r
    },
    276: function(e, t) {
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
    },
    277: function(e, t, n) {
        "use strict";
        t.a = function() {
            return !1
        }
    },
    279: function(e, t, n) {
        "use strict";
        var r = n(323),
            o = n(84),
            i = n(77),
            s = n(126),
            a = n(31),
            c = function(e, t, n) {
                if (!Object(a.a)(n)) return !1;
                var r = typeof t;
                return !!("number" == r ? Object(i.a)(n) && Object(s.a)(t, n.length) : "string" == r && t in n) && Object(o.a)(n[t], e)
            };
        t.a = function(e) {
            return Object(r.a)((function(t, n) {
                var r = -1,
                    o = n.length,
                    i = o > 1 ? n[o - 1] : void 0,
                    s = o > 2 ? n[2] : void 0;
                for (i = e.length > 3 && "function" == typeof i ? (o--, i) : void 0, s && c(n[0], n[1], s) && (i = o < 3 ? void 0 : i, o = 1), t = Object(t); ++r < o;) {
                    var a = n[r];
                    a && e(t, a, r, i)
                }
                return t
            }))
        }
    },
    280: function(e, t, n) {
        "use strict";
        var r = n(169),
            o = n(84),
            i = Object.prototype.hasOwnProperty,
            s = function(e, t, n) {
                var s = e[t];
                i.call(e, t) && Object(o.a)(s, n) && (void 0 !== n || t in e) || Object(r.a)(e, t, n)
            };
        t.a = function(e, t, n, o) {
            var i = !n;
            n || (n = {});
            for (var a = -1, c = t.length; ++a < c;) {
                var u = t[a],
                    d = o ? o(n[u], e[u], u, n, e) : void 0;
                void 0 === d && (d = e[u]), i ? Object(r.a)(n, u, d) : s(n, u, d)
            }
            return n
        }
    },
    3: function(e, t, n) {
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

        function s(e) {
            return `${e}/crashv2`
        }

        function a(e, t) {
            return `${t}/log?json=${encodeURIComponent(JSON.stringify(e))}`
        }
        n.d(t, "a", (function() {
                return r
            })), n.d(t, "b", (function() {
                return o
            })), n.d(t, "d", (function() {
                return i
            })), n.d(t, "c", (function() {
                return s
            })), n.d(t, "e", (function() {
                return a
            })),
            function(e) {
                e.INFO = "INFO", e.WARN = "WARN", e.ERROR = "ERROR"
            }(r || (r = {}))
    },
    31: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t)
        }
    },
    315: function(e, t, n) {
        "use strict";
        var r = n(108),
            o = n(169),
            i = n(84),
            s = function(e, t, n) {
                (void 0 === n || Object(i.a)(e[t], n)) && (void 0 !== n || t in e) || Object(o.a)(e, t, n)
            },
            a = n(213),
            c = n(348),
            u = n(152),
            d = function(e, t) {
                var n = t ? function(e) {
                    var t = new e.constructor(e.byteLength);
                    return new u.a(t).set(new u.a(e)), t
                }(e.buffer) : e.buffer;
                return new e.constructor(n, e.byteOffset, e.length)
            },
            l = n(211),
            f = n(157),
            h = n(128),
            g = function(e) {
                return "function" != typeof e.constructor || Object(h.a)(e) ? {} : Object(l.a)(Object(f.a)(e))
            },
            p = n(99),
            m = n(27),
            b = n(322),
            v = n(82),
            _ = n(86),
            y = n(31),
            O = n(52),
            w = n(46),
            j = Function.prototype,
            A = Object.prototype,
            F = j.toString,
            C = A.hasOwnProperty,
            x = F.call(Object),
            I = function(e) {
                if (!Object(w.a)(e) || "[object Object]" != Object(O.a)(e)) return !1;
                var t = Object(f.a)(e);
                if (null === t) return !0;
                var n = C.call(t, "constructor") && t.constructor;
                return "function" == typeof n && n instanceof n && F.call(n) == x
            },
            E = n(91),
            N = function(e, t) {
                if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t]
            },
            R = n(280),
            S = n(196),
            k = function(e, t, n, r, o, i, a) {
                var u = N(e, n),
                    l = N(t, n),
                    f = a.get(l);
                if (f) s(e, n, f);
                else {
                    var h = i ? i(u, l, n + "", e, t, a) : void 0,
                        O = void 0 === h;
                    if (O) {
                        var w = Object(m.a)(l),
                            j = !w && Object(v.a)(l),
                            A = !w && !j && Object(E.a)(l);
                        h = l, w || j || A ? Object(m.a)(u) ? h = u : Object(b.a)(u) ? h = function(e, t) {
                            var n = -1,
                                r = e.length;
                            for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
                            return t
                        }(u) : j ? (O = !1, h = Object(c.a)(l, !0)) : A ? (O = !1, h = d(l, !0)) : h = [] : I(l) || Object(p.a)(l) ? (h = u, Object(p.a)(u) ? h = function(e) {
                            return Object(R.a)(e, Object(S.a)(e))
                        }(u) : Object(y.a)(u) && !Object(_.a)(u) || (h = g(l))) : O = !1
                    }
                    O && (a.set(l, h), o(h, l, r, i, a), a.delete(l)), s(e, n, h)
                }
            },
            T = n(279),
            M = Object(T.a)((function(e, t, n) {
                ! function e(t, n, o, i, c) {
                    t !== n && Object(a.a)(n, (function(a, u) {
                        if (c || (c = new r.a), Object(y.a)(a)) k(t, n, u, o, e, i, c);
                        else {
                            var d = i ? i(N(t, u), a, u + "", t, n, c) : void 0;
                            void 0 === d && (d = a), s(t, u, d)
                        }
                    }), S.a)
                }(e, t, n)
            }));
        t.a = M
    },
    322: function(e, t, n) {
        "use strict";
        var r = n(77),
            o = n(46);
        t.a = function(e) {
            return Object(o.a)(e) && Object(r.a)(e)
        }
    },
    323: function(e, t, n) {
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
            s = function(e) {
                return function() {
                    return e
                }
            },
            a = n(171),
            c = a.a ? function(e, t) {
                return Object(a.a)(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: s(t),
                    writable: !0
                })
            } : r.a,
            u = Date.now,
            d = function(e) {
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
            return d(function(e, t, n) {
                return t = i(void 0 === t ? e.length - 1 : t, 0),
                    function() {
                        for (var r = arguments, s = -1, a = i(r.length - t, 0), c = Array(a); ++s < a;) c[s] = r[t + s];
                        s = -1;
                        for (var u = Array(t + 1); ++s < t;) u[s] = r[s];
                        return u[t] = n(c), o(e, this, u)
                    }
            }(e, t, r.a), e + "")
        }
    },
    327: function(e, t, n) {
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
                    var s = i >= 0 ? arguments[i] : e.cwd();
                    if ("string" != typeof s) throw new TypeError("Arguments to path.resolve must be strings");
                    s && (t = s + "/" + t, o = "/" === s.charAt(0))
                }
                return (o ? "/" : "") + (t = n(r(t.split("/"), (function(e) {
                    return !!e
                })), !o).join("/")) || "."
            }, t.normalize = function(e) {
                var i = t.isAbsolute(e),
                    s = "/" === o(e, -1);
                return (e = n(r(e.split("/"), (function(e) {
                    return !!e
                })), !i).join("/")) || i || (e = "."), e && s && (e += "/"), (i ? "/" : "") + e
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
                for (var o = r(e.split("/")), i = r(n.split("/")), s = Math.min(o.length, i.length), a = s, c = 0; c < s; c++)
                    if (o[c] !== i[c]) {
                        a = c;
                        break
                    } var u = [];
                for (c = a; c < o.length; c++) u.push("..");
                return (u = u.concat(i.slice(a))).join("/")
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
                for (var t = -1, n = 0, r = -1, o = !0, i = 0, s = e.length - 1; s >= 0; --s) {
                    var a = e.charCodeAt(s);
                    if (47 !== a) - 1 === r && (o = !1, r = s + 1), 46 === a ? -1 === t ? t = s : 1 !== i && (i = 1) : -1 !== t && (i = -1);
                    else if (!o) {
                        n = s + 1;
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
    },
    348: function(e, t, n) {
        "use strict";
        (function(e) {
            var r = n(36),
                o = "object" == typeof exports && exports && !exports.nodeType && exports,
                i = o && "object" == typeof e && e && !e.nodeType && e,
                s = i && i.exports === o ? r.a.Buffer : void 0,
                a = s ? s.allocUnsafe : void 0;
            t.a = function(e, t) {
                if (t) return e.slice();
                var n = e.length,
                    r = a ? a(n) : new e.constructor(n);
                return e.copy(r), r
            }
        }).call(this, n(198)(e))
    },
    349: function(e, t, n) {
        "use strict";
        var r = n(17),
            o = n(3),
            i = n(156);

        function s(e) {
            return a.includes(e)
        }
        const a = new class {
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
            d = n(12);
        n.d(t, "a", (function() {
            return b
        }));
        const l = d.a.create("lib.tracking.telemetry"),
            f = .1,
            h = .05,
            g = .1,
            p = .01,
            m = .01;
        class b {
            constructor(e = c.l, t = c.l, n = c.l, a = c.l, d = !1, b = i.a.dummy, v = !1, _ = c.l, y = c.l, O = (e => p), w = "firefox" !== r.a().bundleInfo.browser) {
                this._sendFelog = e, this._sendFelogUsage = t, this._setUserId = n, this._setContainerId = a, this._sendUsageMetrics = d, this._perfMetrics = b, this._sendPerfMetrics = v, this._sendFelogEvent = _, this._sendFelogCrashLogs = y, this._getUsageMetricsRate = O, this._shouldSendEvents = w, this._perfMetricsThrottleTimeMs = 6e4, this._prepareDataString = (e, t) => {
                    let n;
                    try {
                        n = JSON.stringify(t)
                    } catch (t) {
                        n = `stringify fail: '${t}', '${t&&t.message}'`, l.warn(n, e)
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
                        isTopSite: s(e),
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
                    l.warn(`Failed to send felog for ${e}: '${t&&t.message}'`, t)
                }
            }
            _sendEvent(e) {
                if (!1 !== this._shouldSendEvents) try {
                    this._sendFelogEvent(e)
                } catch (t) {
                    l.warn(`Failed to send felog for ${JSON.stringify(e)}`, t)
                }
            }
            _sendUsage(e, t, n) {
                if (this._sendUsageMetrics && this._sendUsageMetricsSamplingRatio > Math.random()) try {
                    this._sendFelogUsage(e, "", t, n)
                } catch (t) {
                    l.warn(`Failed to send usage felog for ${e}: '${t&&t.message}'`, t)
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
                            n = [], l.info(`sending perf stats for ${e}`, t), this._sendEvent({
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
                    l.warn(`Failed to send crash data data for ${e}: '${t&&t.message}'`, t)
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
    },
    354: function(e, t, n) {
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
                var s = n.length,
                    a = 0;
                t = 3 & s, s >>>= 2;
                for (var c = 0; c < s; c++) i = (i += o(n, a)) << 16 ^ o(n, a + 2) << 11 ^ i, a += 4, i += i >> 11;
                switch (t) {
                    case 3:
                        i += o(n, a), i ^= i << 16, i ^= n[a + 2] << 18, i += i >> 11;
                        break;
                    case 2:
                        i += o(n, a), i ^= i << 11, i += i >> 17;
                        break;
                    case 1:
                        i += n[a], i ^= i << 10, i += i >> 1
                }
                return i ^= i << 3, i += i >> 5, i ^= i << 4, i += i >> 17, i ^= i << 25, i += i >> 6, r.intToUnsignedHex(i)
            }
        }
    },
    355: function(e, t, n) {
        "use strict";
        var r = n(276);

        function o(e, t) {
            return (65535 & e) * t + (((e >>> 16) * t & 65535) << 16)
        }

        function i(e, t) {
            return e << t | e >>> 32 - t
        }

        function s(e) {
            return e = o(e ^= e >>> 16, 2246822507), (e = o(e ^= e >>> 13, 3266489909)) ^ e >>> 16
        }

        function a(e, t) {
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

        function d(e, t) {
            return 0 == (t %= 64) ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
        }

        function l(e, t) {
            return [e[0] ^ t[0], e[1] ^ t[1]]
        }

        function f(e) {
            return e = l(e, [0, e[0] >>> 1]), e = l(e = c(e, [4283543511, 3981806797]), [0, e[0] >>> 1]), l(e = c(e, [3301882366, 444984403]), [0, e[0] >>> 1])
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
                }).length % 16, i = e.length - o, s = [0, t], h = [0, t], g = [0, 0], p = [0, 0], m = [2277735313, 289559509], b = [1291169091, 658871167], v = 0; v < i; v += 16) g = [255 & e.charCodeAt(v + 4) | (255 & e.charCodeAt(v + 5)) << 8 | (255 & e.charCodeAt(v + 6)) << 16 | (255 & e.charCodeAt(v + 7)) << 24, 255 & e.charCodeAt(v) | (255 & e.charCodeAt(v + 1)) << 8 | (255 & e.charCodeAt(v + 2)) << 16 | (255 & e.charCodeAt(v + 3)) << 24], p = [255 & e.charCodeAt(v + 12) | (255 & e.charCodeAt(v + 13)) << 8 | (255 & e.charCodeAt(v + 14)) << 16 | (255 & e.charCodeAt(v + 15)) << 24, 255 & e.charCodeAt(v + 8) | (255 & e.charCodeAt(v + 9)) << 8 | (255 & e.charCodeAt(v + 10)) << 16 | (255 & e.charCodeAt(v + 11)) << 24], g = u(g = c(g, m), 31), s = a(s = u(s = l(s, g = c(g, b)), 27), h), s = a(c(s, [0, 5]), [0, 1390208809]), p = u(p = c(p, b), 33), h = a(h = u(h = l(h, p = c(p, m)), 31), s), h = a(c(h, [0, 5]), [0, 944331445]);
            switch (g = [0, 0], p = [0, 0], o) {
                case 15:
                    p = l(p, d([0, e.charCodeAt(v + 14)], 48));
                case 14:
                    p = l(p, d([0, e.charCodeAt(v + 13)], 40));
                case 13:
                    p = l(p, d([0, e.charCodeAt(v + 12)], 32));
                case 12:
                    p = l(p, d([0, e.charCodeAt(v + 11)], 24));
                case 11:
                    p = l(p, d([0, e.charCodeAt(v + 10)], 16));
                case 10:
                    p = l(p, d([0, e.charCodeAt(v + 9)], 8));
                case 9:
                    p = c(p = l(p, [0, e.charCodeAt(v + 8)]), b), h = l(h, p = c(p = u(p, 33), m));
                case 8:
                    g = l(g, d([0, e.charCodeAt(v + 7)], 56));
                case 7:
                    g = l(g, d([0, e.charCodeAt(v + 6)], 48));
                case 6:
                    g = l(g, d([0, e.charCodeAt(v + 5)], 40));
                case 5:
                    g = l(g, d([0, e.charCodeAt(v + 4)], 32));
                case 4:
                    g = l(g, d([0, e.charCodeAt(v + 3)], 24));
                case 3:
                    g = l(g, d([0, e.charCodeAt(v + 2)], 16));
                case 2:
                    g = l(g, d([0, e.charCodeAt(v + 1)], 8));
                case 1:
                    g = c(g = l(g, [0, e.charCodeAt(v)]), m), s = l(s, g = c(g = u(g, 31), b))
            }
            return s = a(s = l(s, [0, e.length]), h = l(h, [0, e.length])), h = a(h, s), s = a(s = f(s), h = f(h)), h = a(h, s), ("00000000" + (s[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (s[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (h[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (h[1] >>> 0).toString(16)).slice(-8)
        };
        e.exports = {
            x86Hash32: function(e, t) {
                e = "" + e || "";
                var n = r.toU8IntArray(e);
                t = t || 0;
                for (var a = (e = {
                        charCodeAt: function(e) {
                            return n[e]
                        },
                        length: n.length
                    }).length % 4, c = e.length - a, u = t, d = 0, l = 3432918353, f = 461845907, h = 0; h < c; h += 4) d = o(d = 255 & e.charCodeAt(h) | (255 & e.charCodeAt(h + 1)) << 8 | (255 & e.charCodeAt(h + 2)) << 16 | (255 & e.charCodeAt(h + 3)) << 24, l), d = o(d = i(d, 15), f), u = o(u = i(u ^= d, 13), 5) + 3864292196;
                switch (d = 0, a) {
                    case 3:
                        d ^= (255 & e.charCodeAt(h + 2)) << 16;
                    case 2:
                        d ^= (255 & e.charCodeAt(h + 1)) << 8;
                    case 1:
                        d = o(d ^= 255 & e.charCodeAt(h), l), u ^= d = o(d = i(d, 15), f)
                }
                return ((u = s(u ^= e.length)) >>> 0).toString(16)
            },
            x86Hash128: function(e, t) {
                e = "" + e || "";
                var n = r.toU8IntArray(e);
                t = t || 0;
                for (var a = (e = {
                        charCodeAt: function(e) {
                            return n[e]
                        },
                        length: n.length
                    }).length % 16, c = e.length - a, u = t, d = t, l = t, f = t, h = 0, g = 0, p = 0, m = 0, b = 597399067, v = 2869860233, _ = 951274213, y = 2716044179, O = 0; O < c; O += 16) h = 255 & e.charCodeAt(O) | (255 & e.charCodeAt(O + 1)) << 8 | (255 & e.charCodeAt(O + 2)) << 16 | (255 & e.charCodeAt(O + 3)) << 24, g = 255 & e.charCodeAt(O + 4) | (255 & e.charCodeAt(O + 5)) << 8 | (255 & e.charCodeAt(O + 6)) << 16 | (255 & e.charCodeAt(O + 7)) << 24, p = 255 & e.charCodeAt(O + 8) | (255 & e.charCodeAt(O + 9)) << 8 | (255 & e.charCodeAt(O + 10)) << 16 | (255 & e.charCodeAt(O + 11)) << 24, m = 255 & e.charCodeAt(O + 12) | (255 & e.charCodeAt(O + 13)) << 8 | (255 & e.charCodeAt(O + 14)) << 16 | (255 & e.charCodeAt(O + 15)) << 24, h = i(h = o(h, b), 15), u = i(u ^= h = o(h, v), 19), u = o(u += d, 5) + 1444728091, g = i(g = o(g, v), 16), d = i(d ^= g = o(g, _), 17), d = o(d += l, 5) + 197830471, p = i(p = o(p, _), 17), l = i(l ^= p = o(p, y), 15), l = o(l += f, 5) + 2530024501, m = i(m = o(m, y), 18), f = i(f ^= m = o(m, b), 13), f = o(f += u, 5) + 850148119;
                switch (h = 0, g = 0, p = 0, m = 0, a) {
                    case 15:
                        m ^= e.charCodeAt(O + 14) << 16;
                    case 14:
                        m ^= e.charCodeAt(O + 13) << 8;
                    case 13:
                        m = o(m ^= e.charCodeAt(O + 12), y), f ^= m = o(m = i(m, 18), b);
                    case 12:
                        p ^= e.charCodeAt(O + 11) << 24;
                    case 11:
                        p ^= e.charCodeAt(O + 10) << 16;
                    case 10:
                        p ^= e.charCodeAt(O + 9) << 8;
                    case 9:
                        p = o(p ^= e.charCodeAt(O + 8), _), l ^= p = o(p = i(p, 17), y);
                    case 8:
                        g ^= e.charCodeAt(O + 7) << 24;
                    case 7:
                        g ^= e.charCodeAt(O + 6) << 16;
                    case 6:
                        g ^= e.charCodeAt(O + 5) << 8;
                    case 5:
                        g = o(g ^= e.charCodeAt(O + 4), v), d ^= g = o(g = i(g, 16), _);
                    case 4:
                        h ^= e.charCodeAt(O + 3) << 24;
                    case 3:
                        h ^= e.charCodeAt(O + 2) << 16;
                    case 2:
                        h ^= e.charCodeAt(O + 1) << 8;
                    case 1:
                        h = o(h ^= e.charCodeAt(O), b), u ^= h = o(h = i(h, 15), v)
                }
                return u ^= e.length, u += d ^= e.length, u += l ^= e.length, d += u += f ^= e.length, l += u, f += u, u = s(u), u += d = s(d), u += l = s(l), d += u += f = s(f), l += u, f += u, ("00000000" + (u >>> 0).toString(16)).slice(-8) + ("00000000" + (d >>> 0).toString(16)).slice(-8) + ("00000000" + (l >>> 0).toString(16)).slice(-8) + ("00000000" + (f >>> 0).toString(16)).slice(-8)
            },
            x64Hash64: function(e, t) {
                return h(e, t).slice(8)
            },
            x64Hash128: h,
            hash: function(e, t) {
                return h(e, t)
            }
        }
    },
    36: function(e, t, n) {
        "use strict";
        var r = n(168),
            o = "object" == typeof self && self && self.Object === Object && self,
            i = r.a || o || Function("return this")();
        t.a = i
    },
    4: function(e, t, n) {
        "use strict";
        var r = {};
        n.r(r), n.d(r, "map", (function() {
            return a
        })), n.d(r, "filter", (function() {
            return c
        })), n.d(r, "values", (function() {
            return u
        })), n.d(r, "pairs", (function() {
            return d
        })), n.d(r, "create", (function() {
            return l
        })), n.d(r, "pluck", (function() {
            return f
        }));
        var o = {};
        n.r(o), n.d(o, "find", (function() {
            return h
        }));
        var i = n(72),
            s = n(264);

        function a(e, t) {
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

        function d(e) {
            return Object.keys(e).map(t => [t, e[t]])
        }

        function l(e) {
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
            return O
        })), n.d(t, "p", (function() {
            return w
        })), n.d(t, "l", (function() {
            return j
        })), n.d(t, "h", (function() {
            return A
        })), n.d(t, "o", (function() {
            return F
        })), n.d(t, "i", (function() {
            return C
        })), n.d(t, "k", (function() {
            return I
        })), n.d(t, "c", (function() {
            return p
        })), n.d(t, "r", (function() {
            return E
        })), n.d(t, "q", (function() {
            return N
        })), n.d(t, "j", (function() {
            return R
        })), n.d(t, "a", (function() {
            return s
        })), n.d(t, "f", (function() {
            return r
        })), n.d(t, "d", (function() {
            return o
        })), n.d(t, "e", (function() {
            return g
        }));
        var p, m = function(e, t, n, r) {
            return new(n || (n = Promise))((function(o, i) {
                function s(e) {
                    try {
                        c(r.next(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function a(e) {
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
                    }))).then(s, a)
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

        function O(e) {
            const t = parseInt(e, 10);
            return isNaN(t) ? void 0 : t
        }

        function w(e, t) {
            try {
                return e()
            } catch (e) {
                return t(e)
            }
        }

        function j() {}

        function A(e) {
            let t, n = !1;
            return (...r) => (n || (n = !0, t = e(...r)), t)
        }

        function F(e, t) {
            let n, r, o = !0;

            function s(e) {
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
                return n = Date.now(), s(void 0 === t || n - t >= e ? 0 : e - (n - t))
            }
        }

        function C(e, t, n = 0, r = (e => !0)) {
            return m(this, void 0, void 0, (function*() {
                let o = t;
                const s = [];
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
                    if (t.hasError) s.push(t.message);
                    else if (r(t.val)) return t.val;
                    o > 0 && (yield i.a.delay(n))
                }
                throw new Error(`Condition was not met after ${t} retries. Errors: '${s.join(";")}'`)
            }))
        }
        class x {
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

        function I(e) {
            return new x(e)
        }

        function E(e, t) {
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

        function R(e) {
            return e.replace(/[.*+?()\[\]{}^$\\]/g, "\\$&")
        }! function(e) {
            function t() {
                return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
            }
            e.create = function() {
                return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
            }
        }(p || (p = {})), void 0 !== window.requestIdleCallback && window.requestIdleCallback
    },
    43: function(e, t, n) {
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
    },
    46: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return null != e && "object" == typeof e
        }
    },
    52: function(e, t, n) {
        "use strict";
        var r = n(59),
            o = Object.prototype,
            i = o.hasOwnProperty,
            s = o.toString,
            a = r.a ? r.a.toStringTag : void 0,
            c = Object.prototype.toString,
            u = r.a ? r.a.toStringTag : void 0;
        t.a = function(e) {
            return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : u && u in Object(e) ? function(e) {
                var t = i.call(e, a),
                    n = e[a];
                try {
                    e[a] = void 0;
                    var r = !0
                } catch (e) {}
                var o = s.call(e);
                return r && (t ? e[a] = n : delete e[a]), o
            }(e) : function(e) {
                return c.call(e)
            }(e)
        }
    },
    57: function(e, t, n) {
        "use strict";
        var r, o = n(86),
            i = n(36).a["__core-js_shared__"],
            s = (r = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "",
            a = n(31),
            c = n(87),
            u = /^\[object .+?Constructor\]$/,
            d = Function.prototype,
            l = Object.prototype,
            f = d.toString,
            h = l.hasOwnProperty,
            g = RegExp("^" + f.call(h).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
            p = function(e) {
                return !(!Object(a.a)(e) || function(e) {
                    return !!s && s in e
                }(e)) && (Object(o.a)(e) ? g : u).test(Object(c.a)(e))
            };
        t.a = function(e, t) {
            var n = function(e, t) {
                return null == e ? void 0 : e[t]
            }(e, t);
            return p(n) ? n : void 0
        }
    },
    58: function(e, t, n) {
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
    },
    59: function(e, t, n) {
        "use strict";
        var r = n(36).a.Symbol;
        t.a = r
    },
    60: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return a
        })), n.d(t, "a", (function() {
            return c
        })), n.d(t, "h", (function() {
            return u
        })), n.d(t, "i", (function() {
            return d
        })), n.d(t, "j", (function() {
            return l
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
        const s = e => e.replace("www.", "");

        function a(e) {
            const t = e && e.ownerDocument || document,
                n = t.location || t.defaultView.location;
            return n ? s(n.hostname) : ""
        }

        function c(e) {
            if (Object(r.l)() && /^about:/.test(e)) return e;
            const t = document.createElement("a");
            return t.href = e, s(t.hostname)
        }
        const u = () => o.b.includes(a()),
            d = () => /\/document\//.test(p()) && "docs.google.com" === a(),
            l = () => /\.atlassian\.net/.test(a()),
            f = () => /\.blackboard\.com/.test(a()),
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
            const e = a();
            return "Back to " + (e && {
                "mail.google.com": "Gmail",
                "facebook.com": "Facebook",
                "twitter.com": "Twitter"
            } [e] || document.title)
        }
    },
    72: function(e, t, n) {
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
    },
    735: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n(240),
            o = n(349),
            i = n(43),
            s = n(12),
            a = n(144);
        a.a.initShared(new a.a({
            browser: "chrome",
            context: "cs"
        }));
        const c = s.a.create("chrome.proxy"),
            u = new o.a(r.a);

        function d() {
            let e = [i.b.bridge, i.b.background, i.b.broadcast].reduce((e, t) => Object.assign({}, e, {
                [t]: o(t)
            }), {});

            function t({
                detail: {
                    name: t,
                    data: n
                }
            }) {
                e && e[t].postMessage(n)
            }

            function n() {
                document.dispatchEvent(new CustomEvent("grammarly:pong")), document.dispatchEvent(new CustomEvent("grammarly:reset"))
            }

            function r() {
                document.removeEventListener("grammarly:action", t), document.removeEventListener("grammarly:ping", n), document.removeEventListener("grammarly:reset", r), e = null
            }

            function o(e) {
                const t = window.chrome.runtime.connect({
                    name: e
                });
                return t.onMessage.addListener(t => (function(e, t = {}) {
                    return document.dispatchEvent(new CustomEvent("grammarly:message", {
                        detail: Object.assign({
                            event: e
                        }, t)
                    }))
                })("message", {
                    msg: t,
                    name: e
                })), t.onDisconnect.addListener(() => {
                    c.warn("port malfunction " + e);
                    const t = window.chrome.runtime.lastError;
                    u.proxyPortDisconnected(e, t && t.message || `port malfunction: ${e}`), r(), document.dispatchEvent(new CustomEvent("grammarly:error", {
                        detail: {
                            event: "disconnect",
                            name: e
                        }
                    }))
                }), t
            }
            document.addEventListener("grammarly:action", t), document.addEventListener("grammarly:ping", n), document.dispatchEvent(new CustomEvent("grammarly:proxyports")), document.addEventListener("grammarly:proxyports", r), u.proxyInit()
        }
        "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", d, !1) : d()
    },
    77: function(e, t, n) {
        "use strict";
        var r = n(86),
            o = n(125);
        t.a = function(e) {
            return null != e && Object(o.a)(e.length) && !Object(r.a)(e)
        }
    },
    82: function(e, t, n) {
        "use strict";
        (function(e) {
            var r = n(36),
                o = n(277),
                i = "object" == typeof exports && exports && !exports.nodeType && exports,
                s = i && "object" == typeof e && e && !e.nodeType && e,
                a = s && s.exports === i ? r.a.Buffer : void 0,
                c = (a ? a.isBuffer : void 0) || o.a;
            t.a = c
        }).call(this, n(198)(e))
    },
    84: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            return e === t || e != e && t != t
        }
    },
    85: function(e, t, n) {
        "use strict";
        var r = n(84),
            o = function(e, t) {
                for (var n = e.length; n--;)
                    if (Object(r.a)(e[n][0], t)) return n;
                return -1
            },
            i = Array.prototype.splice;

        function s(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        s.prototype.clear = function() {
            this.__data__ = [], this.size = 0
        }, s.prototype.delete = function(e) {
            var t = this.__data__,
                n = o(t, e);
            return !(n < 0 || (n == t.length - 1 ? t.pop() : i.call(t, n, 1), --this.size, 0))
        }, s.prototype.get = function(e) {
            var t = this.__data__,
                n = o(t, e);
            return n < 0 ? void 0 : t[n][1]
        }, s.prototype.has = function(e) {
            return o(this.__data__, e) > -1
        }, s.prototype.set = function(e, t) {
            var n = this.__data__,
                r = o(n, e);
            return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this
        }, t.a = s
    },
    86: function(e, t, n) {
        "use strict";
        var r = n(52),
            o = n(31);
        t.a = function(e) {
            if (!Object(o.a)(e)) return !1;
            var t = Object(r.a)(e);
            return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
        }
    },
    87: function(e, t, n) {
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
    },
    91: function(e, t, n) {
        "use strict";
        var r = n(52),
            o = n(125),
            i = n(46),
            s = {};
        s["[object Float32Array]"] = s["[object Float64Array]"] = s["[object Int8Array]"] = s["[object Int16Array]"] = s["[object Int32Array]"] = s["[object Uint8Array]"] = s["[object Uint8ClampedArray]"] = s["[object Uint16Array]"] = s["[object Uint32Array]"] = !0, s["[object Arguments]"] = s["[object Array]"] = s["[object ArrayBuffer]"] = s["[object Boolean]"] = s["[object DataView]"] = s["[object Date]"] = s["[object Error]"] = s["[object Function]"] = s["[object Map]"] = s["[object Number]"] = s["[object Object]"] = s["[object RegExp]"] = s["[object Set]"] = s["[object String]"] = s["[object WeakMap]"] = !1;
        var a = n(268),
            c = n(226),
            u = c.a && c.a.isTypedArray,
            d = u ? Object(a.a)(u) : function(e) {
                return Object(i.a)(e) && Object(o.a)(e.length) && !!s[Object(r.a)(e)]
            };
        t.a = d
    },
    96: function(e, t, n) {
        "use strict";
        var r = n(57),
            o = n(36),
            i = Object(r.a)(o.a, "Map");
        t.a = i
    },
    99: function(e, t, n) {
        "use strict";
        var r = n(52),
            o = n(46),
            i = function(e) {
                return Object(o.a)(e) && "[object Arguments]" == Object(r.a)(e)
            },
            s = Object.prototype,
            a = s.hasOwnProperty,
            c = s.propertyIsEnumerable,
            u = i(function() {
                return arguments
            }()) ? i : function(e) {
                return Object(o.a)(e) && a.call(e, "callee") && !c.call(e, "callee")
            };
        t.a = u
    }
});