var webClient = function(t) {
    var e = {};

    function r(n) {
        if (e[n]) return e[n].exports;
        var i = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
    }
    return r.m = t, r.c = e, r.d = function(t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, r.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, r.t = function(t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) r.d(n, i, function(e) {
                return t[e]
            }.bind(null, i));
        return n
    }, r.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return r.d(e, "a", e), e
    }, r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, r.p = "", r(r.s = 95)
}([function(t, e, r) {
    t.exports = r(59)
}, function(t, e, r) {
    "use strict";
    r.d(e, "l", function() {
        return i
    }), r.d(e, "e", function() {
        return o
    }), r.d(e, "h", function() {
        return a
    }), r.d(e, "j", function() {
        return s
    }), r.d(e, "b", function() {
        return u
    }), r.d(e, "c", function() {
        return c
    }), r.d(e, "n", function() {
        return f
    }), r.d(e, "f", function() {
        return l
    }), r.d(e, "g", function() {
        return h
    }), r.d(e, "d", function() {
        return d
    }), r.d(e, "t", function() {
        return p
    }), r.d(e, "a", function() {
        return v
    }), r.d(e, "q", function() {
        return g
    }), r.d(e, "p", function() {
        return y
    }), r.d(e, "k", function() {
        return b
    }), r.d(e, "o", function() {
        return m
    }), r.d(e, "i", function() {
        return w
    }), r.d(e, "r", function() {
        return _
    }), r.d(e, "s", function() {
        return x
    }), r.d(e, "m", function() {
        return E
    }), r.d(e, "x", function() {
        return S
    }), r.d(e, "v", function() {
        return k
    }), r.d(e, "z", function() {
        return A
    }), r.d(e, "w", function() {
        return O
    }), r.d(e, "C", function() {
        return I
    }), r.d(e, "E", function() {
        return T
    }), r.d(e, "u", function() {
        return j
    }), r.d(e, "F", function() {
        return R
    }), r.d(e, "G", function() {
        return C
    }), r.d(e, "A", function() {
        return N
    }), r.d(e, "y", function() {
        return P
    }), r.d(e, "D", function() {
        return L
    }), r.d(e, "B", function() {
        return B
    });
    var n = r(3),
        i = "[login] otp",
        o = "[login] forgot",
        a = "[login] login",
        s = "[login] mfachallenge",
        u = "[login] clearmfa",
        c = "[login] error",
        f = "[login] online success",
        l = "[login] initialize",
        h = "[login] initialized",
        d = "[login] federatedlogin",
        p = "[login] suggestchangepw",
        v = "[login] changepw",
        g = "[login] terms",
        y = "[login] privacy",
        b = "[login] offline success",
        m = "[login] offline details",
        w = "[login] logout",
        _ = "[login] reset",
        x = "[login] retrying online",
        E = "[login] online retry success",
        S = function(t, e, r, i, o, s, u) {
            return Object(n.a)(a, {
                username: t,
                password: e,
                rememberUsername: r,
                rememberPassword: i,
                federated: {
                    authSessionId: o,
                    fragmentIdFromAlp: s,
                    calculatedFragmentId: u
                }
            })
        },
        k = function() {
            return Object(n.a)(u)
        },
        A = function(t, e, r) {
            return Object(n.a)(s, {
                data: t,
                email: e,
                password: r
            })
        },
        O = function(t) {
            return Object(n.a)(c, {
                error: t
            })
        },
        I = function(t, e, r, i, o, a, s) {
            return Object(n.a)(f, {
                uid: t,
                username: e,
                csrf: r,
                key: i,
                challenge: a,
                legacyXml: o,
                redirect: s
            })
        },
        T = function(t) {
            return Object(n.a)("[login] usernames", {
                savedUsernames: t
            })
        },
        j = function(t) {
            return Object(n.a)(v, {
                username: t
            })
        },
        R = function() {
            return Object(n.a)(p)
        },
        C = function(t) {
            return Object(n.a)("[login] updateserver", {
                host: t
            })
        },
        N = function(t, e) {
            return Object(n.a)(b, {
                username: t,
                key: e
            })
        },
        P = function() {
            return Object(n.a)(w)
        },
        L = function(t) {
            return Object(n.a)(x, {
                retrying: t
            })
        },
        B = function() {
            return Object(n.a)(E)
        }
}, function(t, e, r) {
    "use strict";
    r.d(e, "a", function() {
        return i
    });
    var n = r(20);

    function i(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {},
                i = Object.keys(r);
            "function" === typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
                return Object.getOwnPropertyDescriptor(r, t).enumerable
            }))), i.forEach(function(e) {
                Object(n.a)(t, e, r[e])
            })
        }
        return t
    }
}, function(t, e, r) {
    "use strict";

    function n(t, e) {
        return void 0 === e ? {
            type: t
        } : {
            type: t,
            payload: e
        }
    }
    r.d(e, "a", function() {
        return n
    })
}, function(t, e, r) {
    "use strict";

    function n(t, e, r, n, i, o, a) {
        try {
            var s = t[o](a),
                u = s.value
        } catch (c) {
            return void r(c)
        }
        s.done ? e(u) : Promise.resolve(u).then(n, i)
    }

    function i(t) {
        return function() {
            var e = this,
                r = arguments;
            return new Promise(function(i, o) {
                var a = t.apply(e, r);

                function s(t) {
                    n(a, i, o, s, u, "next", t)
                }

                function u(t) {
                    n(a, i, o, s, u, "throw", t)
                }
                s(void 0)
            })
        }
    }
    r.d(e, "a", function() {
        return i
    })
}, function(t, e, r) {
    (function(e) {
        var r;
        t.exports = function t(e, n, i) {
            function o(s, u) {
                if (!n[s]) {
                    if (!e[s]) {
                        var c = "function" == typeof r && r;
                        if (!u && c) return r(s, !0);
                        if (a) return a(s, !0);
                        var f = new Error("Cannot find module '" + s + "'");
                        throw f.code = "MODULE_NOT_FOUND", f
                    }
                    var l = n[s] = {
                        exports: {}
                    };
                    e[s][0].call(l.exports, function(t) {
                        var r = e[s][1][t];
                        return o(r || t)
                    }, l, l.exports, t, e, n, i)
                }
                return n[s].exports
            }
            for (var a = "function" == typeof r && r, s = 0; s < i.length; s++) o(i[s]);
            return o
        }({
            1: [function(t, r, n) {
                (function(t) {
                    "use strict";
                    var e, n, i = t.MutationObserver || t.WebKitMutationObserver;
                    if (i) {
                        var o = 0,
                            a = new i(f),
                            s = t.document.createTextNode("");
                        a.observe(s, {
                            characterData: !0
                        }), e = function() {
                            s.data = o = ++o % 2
                        }
                    } else if (t.setImmediate || "undefined" === typeof t.MessageChannel) e = "document" in t && "onreadystatechange" in t.document.createElement("script") ? function() {
                        var e = t.document.createElement("script");
                        e.onreadystatechange = function() {
                            f(), e.onreadystatechange = null, e.parentNode.removeChild(e), e = null
                        }, t.document.documentElement.appendChild(e)
                    } : function() {
                        setTimeout(f, 0)
                    };
                    else {
                        var u = new t.MessageChannel;
                        u.port1.onmessage = f, e = function() {
                            u.port2.postMessage(0)
                        }
                    }
                    var c = [];

                    function f() {
                        var t, e;
                        n = !0;
                        for (var r = c.length; r;) {
                            for (e = c, c = [], t = -1; ++t < r;) e[t]();
                            r = c.length
                        }
                        n = !1
                    }
                    r.exports = function(t) {
                        1 !== c.push(t) || n || e()
                    }
                }).call(this, "undefined" !== typeof e ? e : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
            }, {}],
            2: [function(t, e, r) {
                "use strict";
                var n = t(1);

                function i() {}
                var o = {},
                    a = ["REJECTED"],
                    s = ["FULFILLED"],
                    u = ["PENDING"];

                function c(t) {
                    if ("function" !== typeof t) throw new TypeError("resolver must be a function");
                    this.state = u, this.queue = [], this.outcome = void 0, t !== i && d(this, t)
                }

                function f(t, e, r) {
                    this.promise = t, "function" === typeof e && (this.onFulfilled = e, this.callFulfilled = this.otherCallFulfilled), "function" === typeof r && (this.onRejected = r, this.callRejected = this.otherCallRejected)
                }

                function l(t, e, r) {
                    n(function() {
                        var n;
                        try {
                            n = e(r)
                        } catch (i) {
                            return o.reject(t, i)
                        }
                        n === t ? o.reject(t, new TypeError("Cannot resolve promise with itself")) : o.resolve(t, n)
                    })
                }

                function h(t) {
                    var e = t && t.then;
                    if (t && ("object" === typeof t || "function" === typeof t) && "function" === typeof e) return function() {
                        e.apply(t, arguments)
                    }
                }

                function d(t, e) {
                    var r = !1;

                    function n(e) {
                        r || (r = !0, o.reject(t, e))
                    }

                    function i(e) {
                        r || (r = !0, o.resolve(t, e))
                    }
                    var a = p(function() {
                        e(i, n)
                    });
                    "error" === a.status && n(a.value)
                }

                function p(t, e) {
                    var r = {};
                    try {
                        r.value = t(e), r.status = "success"
                    } catch (n) {
                        r.status = "error", r.value = n
                    }
                    return r
                }
                e.exports = c, c.prototype.catch = function(t) {
                    return this.then(null, t)
                }, c.prototype.then = function(t, e) {
                    if ("function" !== typeof t && this.state === s || "function" !== typeof e && this.state === a) return this;
                    var r = new this.constructor(i);
                    if (this.state !== u) {
                        var n = this.state === s ? t : e;
                        l(r, n, this.outcome)
                    } else this.queue.push(new f(r, t, e));
                    return r
                }, f.prototype.callFulfilled = function(t) {
                    o.resolve(this.promise, t)
                }, f.prototype.otherCallFulfilled = function(t) {
                    l(this.promise, this.onFulfilled, t)
                }, f.prototype.callRejected = function(t) {
                    o.reject(this.promise, t)
                }, f.prototype.otherCallRejected = function(t) {
                    l(this.promise, this.onRejected, t)
                }, o.resolve = function(t, e) {
                    var r = p(h, e);
                    if ("error" === r.status) return o.reject(t, r.value);
                    var n = r.value;
                    if (n) d(t, n);
                    else {
                        t.state = s, t.outcome = e;
                        for (var i = -1, a = t.queue.length; ++i < a;) t.queue[i].callFulfilled(e)
                    }
                    return t
                }, o.reject = function(t, e) {
                    t.state = a, t.outcome = e;
                    for (var r = -1, n = t.queue.length; ++r < n;) t.queue[r].callRejected(e);
                    return t
                }, c.resolve = function(t) {
                    return t instanceof this ? t : o.resolve(new this(i), t)
                }, c.reject = function(t) {
                    var e = new this(i);
                    return o.reject(e, t)
                }, c.all = function(t) {
                    var e = this;
                    if ("[object Array]" !== Object.prototype.toString.call(t)) return this.reject(new TypeError("must be an array"));
                    var r = t.length,
                        n = !1;
                    if (!r) return this.resolve([]);
                    for (var a = new Array(r), s = 0, u = -1, c = new this(i); ++u < r;) f(t[u], u);
                    return c;

                    function f(t, i) {
                        e.resolve(t).then(function(t) {
                            a[i] = t, ++s !== r || n || (n = !0, o.resolve(c, a))
                        }, function(t) {
                            n || (n = !0, o.reject(c, t))
                        })
                    }
                }, c.race = function(t) {
                    var e = this;
                    if ("[object Array]" !== Object.prototype.toString.call(t)) return this.reject(new TypeError("must be an array"));
                    var r = t.length,
                        n = !1;
                    if (!r) return this.resolve([]);
                    for (var a, s = -1, u = new this(i); ++s < r;) a = t[s], e.resolve(a).then(function(t) {
                        n || (n = !0, o.resolve(u, t))
                    }, function(t) {
                        n || (n = !0, o.reject(u, t))
                    });
                    return u
                }
            }, {
                1: 1
            }],
            3: [function(t, r, n) {
                (function(e) {
                    "use strict";
                    "function" !== typeof e.Promise && (e.Promise = t(2))
                }).call(this, "undefined" !== typeof e ? e : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
            }, {
                2: 2
            }],
            4: [function(t, e, r) {
                "use strict";
                var n = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    },
                    i = function() {
                        try {
                            if ("undefined" !== typeof indexedDB) return indexedDB;
                            if ("undefined" !== typeof webkitIndexedDB) return webkitIndexedDB;
                            if ("undefined" !== typeof mozIndexedDB) return mozIndexedDB;
                            if ("undefined" !== typeof OIndexedDB) return OIndexedDB;
                            if ("undefined" !== typeof msIndexedDB) return msIndexedDB
                        } catch (t) {
                            return
                        }
                    }();

                function o(t, e) {
                    t = t || [], e = e || {};
                    try {
                        return new Blob(t, e)
                    } catch (o) {
                        if ("TypeError" !== o.name) throw o;
                        for (var r = "undefined" !== typeof BlobBuilder ? BlobBuilder : "undefined" !== typeof MSBlobBuilder ? MSBlobBuilder : "undefined" !== typeof MozBlobBuilder ? MozBlobBuilder : WebKitBlobBuilder, n = new r, i = 0; i < t.length; i += 1) n.append(t[i]);
                        return n.getBlob(e.type)
                    }
                }
                "undefined" === typeof Promise && t(3);
                var a = Promise;

                function s(t, e) {
                    e && t.then(function(t) {
                        e(null, t)
                    }, function(t) {
                        e(t)
                    })
                }

                function u(t, e, r) {
                    "function" === typeof e && t.then(e), "function" === typeof r && t.catch(r)
                }

                function c(t) {
                    return "string" !== typeof t && (console.warn(t + " used as a key, but it is not a string."), t = String(t)), t
                }

                function f() {
                    if (arguments.length && "function" === typeof arguments[arguments.length - 1]) return arguments[arguments.length - 1]
                }
                var l = "local-forage-detect-blob-support",
                    h = void 0,
                    d = {},
                    p = Object.prototype.toString,
                    v = "readonly",
                    g = "readwrite";

                function y(t) {
                    return "boolean" === typeof h ? a.resolve(h) : function(t) {
                        return new a(function(e) {
                            var r = t.transaction(l, g),
                                n = o([""]);
                            r.objectStore(l).put(n, "key"), r.onabort = function(t) {
                                t.preventDefault(), t.stopPropagation(), e(!1)
                            }, r.oncomplete = function() {
                                var t = navigator.userAgent.match(/Chrome\/(\d+)/),
                                    r = navigator.userAgent.match(/Edge\//);
                                e(r || !t || parseInt(t[1], 10) >= 43)
                            }
                        }).catch(function() {
                            return !1
                        })
                    }(t).then(function(t) {
                        return h = t
                    })
                }

                function b(t) {
                    var e = d[t.name],
                        r = {};
                    r.promise = new a(function(t, e) {
                        r.resolve = t, r.reject = e
                    }), e.deferredOperations.push(r), e.dbReady ? e.dbReady = e.dbReady.then(function() {
                        return r.promise
                    }) : e.dbReady = r.promise
                }

                function m(t) {
                    var e = d[t.name],
                        r = e.deferredOperations.pop();
                    if (r) return r.resolve(), r.promise
                }

                function w(t, e) {
                    var r = d[t.name],
                        n = r.deferredOperations.pop();
                    if (n) return n.reject(e), n.promise
                }

                function _(t, e) {
                    return new a(function(r, n) {
                        if (d[t.name] = d[t.name] || {
                                forages: [],
                                db: null,
                                dbReady: null,
                                deferredOperations: []
                            }, t.db) {
                            if (!e) return r(t.db);
                            b(t), t.db.close()
                        }
                        var o = [t.name];
                        e && o.push(t.version);
                        var a = i.open.apply(i, o);
                        e && (a.onupgradeneeded = function(e) {
                            var r = a.result;
                            try {
                                r.createObjectStore(t.storeName), e.oldVersion <= 1 && r.createObjectStore(l)
                            } catch (n) {
                                if ("ConstraintError" !== n.name) throw n;
                                console.warn('The database "' + t.name + '" has been upgraded from version ' + e.oldVersion + " to version " + e.newVersion + ', but the storage "' + t.storeName + '" already exists.')
                            }
                        }), a.onerror = function(t) {
                            t.preventDefault(), n(a.error)
                        }, a.onsuccess = function() {
                            r(a.result), m(t)
                        }
                    })
                }

                function x(t) {
                    return _(t, !1)
                }

                function E(t) {
                    return _(t, !0)
                }

                function S(t, e) {
                    if (!t.db) return !0;
                    var r = !t.db.objectStoreNames.contains(t.storeName),
                        n = t.version < t.db.version,
                        i = t.version > t.db.version;
                    if (n && (t.version !== e && console.warn('The database "' + t.name + "\" can't be downgraded from version " + t.db.version + " to version " + t.version + "."), t.version = t.db.version), i || r) {
                        if (r) {
                            var o = t.db.version + 1;
                            o > t.version && (t.version = o)
                        }
                        return !0
                    }
                    return !1
                }

                function k(t) {
                    var e = function(t) {
                        for (var e = t.length, r = new ArrayBuffer(e), n = new Uint8Array(r), i = 0; i < e; i++) n[i] = t.charCodeAt(i);
                        return r
                    }(atob(t.data));
                    return o([e], {
                        type: t.type
                    })
                }

                function A(t) {
                    return t && t.__local_forage_encoded_blob
                }

                function O(t) {
                    var e = this,
                        r = e._initReady().then(function() {
                            var t = d[e._dbInfo.name];
                            if (t && t.dbReady) return t.dbReady
                        });
                    return u(r, t, t), r
                }

                function I(t, e, r, n) {
                    void 0 === n && (n = 1);
                    try {
                        var i = t.db.transaction(t.storeName, e);
                        r(null, i)
                    } catch (o) {
                        if (n > 0 && (!t.db || "InvalidStateError" === o.name || "NotFoundError" === o.name)) return a.resolve().then(function() {
                            if (!t.db || "NotFoundError" === o.name && !t.db.objectStoreNames.contains(t.storeName) && t.version <= t.db.version) return t.db && (t.version = t.db.version + 1), E(t)
                        }).then(function() {
                            return function(t) {
                                b(t);
                                for (var e = d[t.name], r = e.forages, n = 0; n < r.length; n++) {
                                    var i = r[n];
                                    i._dbInfo.db && (i._dbInfo.db.close(), i._dbInfo.db = null)
                                }
                                return t.db = null, x(t).then(function(e) {
                                    return t.db = e, S(t) ? E(t) : e
                                }).then(function(n) {
                                    t.db = e.db = n;
                                    for (var i = 0; i < r.length; i++) r[i]._dbInfo.db = n
                                }).catch(function(e) {
                                    throw w(t, e), e
                                })
                            }(t).then(function() {
                                I(t, e, r, n - 1)
                            })
                        }).catch(r);
                        r(o)
                    }
                }
                var T = {
                        _driver: "asyncStorage",
                        _initStorage: function(t) {
                            var e = this,
                                r = {
                                    db: null
                                };
                            if (t)
                                for (var n in t) r[n] = t[n];
                            var i = d[r.name];
                            i || (i = {
                                forages: [],
                                db: null,
                                dbReady: null,
                                deferredOperations: []
                            }, d[r.name] = i), i.forages.push(e), e._initReady || (e._initReady = e.ready, e.ready = O);
                            var o = [];

                            function s() {
                                return a.resolve()
                            }
                            for (var u = 0; u < i.forages.length; u++) {
                                var c = i.forages[u];
                                c !== e && o.push(c._initReady().catch(s))
                            }
                            var f = i.forages.slice(0);
                            return a.all(o).then(function() {
                                return r.db = i.db, x(r)
                            }).then(function(t) {
                                return r.db = t, S(r, e._defaultConfig.version) ? E(r) : t
                            }).then(function(t) {
                                r.db = i.db = t, e._dbInfo = r;
                                for (var n = 0; n < f.length; n++) {
                                    var o = f[n];
                                    o !== e && (o._dbInfo.db = r.db, o._dbInfo.version = r.version)
                                }
                            })
                        },
                        _support: function() {
                            try {
                                if (!i) return !1;
                                var t = "undefined" !== typeof openDatabase && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform),
                                    e = "function" === typeof fetch && -1 !== fetch.toString().indexOf("[native code");
                                return (!t || e) && "undefined" !== typeof indexedDB && "undefined" !== typeof IDBKeyRange
                            } catch (r) {
                                return !1
                            }
                        }(),
                        iterate: function(t, e) {
                            var r = this,
                                n = new a(function(e, n) {
                                    r.ready().then(function() {
                                        I(r._dbInfo, v, function(i, o) {
                                            if (i) return n(i);
                                            try {
                                                var a = o.objectStore(r._dbInfo.storeName),
                                                    s = a.openCursor(),
                                                    u = 1;
                                                s.onsuccess = function() {
                                                    var r = s.result;
                                                    if (r) {
                                                        var n = r.value;
                                                        A(n) && (n = k(n));
                                                        var i = t(n, r.key, u++);
                                                        void 0 !== i ? e(i) : r.continue()
                                                    } else e()
                                                }, s.onerror = function() {
                                                    n(s.error)
                                                }
                                            } catch (c) {
                                                n(c)
                                            }
                                        })
                                    }).catch(n)
                                });
                            return s(n, e), n
                        },
                        getItem: function(t, e) {
                            var r = this;
                            t = c(t);
                            var n = new a(function(e, n) {
                                r.ready().then(function() {
                                    I(r._dbInfo, v, function(i, o) {
                                        if (i) return n(i);
                                        try {
                                            var a = o.objectStore(r._dbInfo.storeName),
                                                s = a.get(t);
                                            s.onsuccess = function() {
                                                var t = s.result;
                                                void 0 === t && (t = null), A(t) && (t = k(t)), e(t)
                                            }, s.onerror = function() {
                                                n(s.error)
                                            }
                                        } catch (u) {
                                            n(u)
                                        }
                                    })
                                }).catch(n)
                            });
                            return s(n, e), n
                        },
                        setItem: function(t, e, r) {
                            var n = this;
                            t = c(t);
                            var i = new a(function(r, i) {
                                var o;
                                n.ready().then(function() {
                                    return o = n._dbInfo, "[object Blob]" === p.call(e) ? y(o.db).then(function(t) {
                                        return t ? e : (r = e, new a(function(t, e) {
                                            var n = new FileReader;
                                            n.onerror = e, n.onloadend = function(e) {
                                                var n = btoa(e.target.result || "");
                                                t({
                                                    __local_forage_encoded_blob: !0,
                                                    data: n,
                                                    type: r.type
                                                })
                                            }, n.readAsBinaryString(r)
                                        }));
                                        var r
                                    }) : e
                                }).then(function(e) {
                                    I(n._dbInfo, g, function(o, a) {
                                        if (o) return i(o);
                                        try {
                                            var s = a.objectStore(n._dbInfo.storeName);
                                            null === e && (e = void 0);
                                            var u = s.put(e, t);
                                            a.oncomplete = function() {
                                                void 0 === e && (e = null), r(e)
                                            }, a.onabort = a.onerror = function() {
                                                var t = u.error ? u.error : u.transaction.error;
                                                i(t)
                                            }
                                        } catch (c) {
                                            i(c)
                                        }
                                    })
                                }).catch(i)
                            });
                            return s(i, r), i
                        },
                        removeItem: function(t, e) {
                            var r = this;
                            t = c(t);
                            var n = new a(function(e, n) {
                                r.ready().then(function() {
                                    I(r._dbInfo, g, function(i, o) {
                                        if (i) return n(i);
                                        try {
                                            var a = o.objectStore(r._dbInfo.storeName),
                                                s = a.delete(t);
                                            o.oncomplete = function() {
                                                e()
                                            }, o.onerror = function() {
                                                n(s.error)
                                            }, o.onabort = function() {
                                                var t = s.error ? s.error : s.transaction.error;
                                                n(t)
                                            }
                                        } catch (u) {
                                            n(u)
                                        }
                                    })
                                }).catch(n)
                            });
                            return s(n, e), n
                        },
                        clear: function(t) {
                            var e = this,
                                r = new a(function(t, r) {
                                    e.ready().then(function() {
                                        I(e._dbInfo, g, function(n, i) {
                                            if (n) return r(n);
                                            try {
                                                var o = i.objectStore(e._dbInfo.storeName),
                                                    a = o.clear();
                                                i.oncomplete = function() {
                                                    t()
                                                }, i.onabort = i.onerror = function() {
                                                    var t = a.error ? a.error : a.transaction.error;
                                                    r(t)
                                                }
                                            } catch (s) {
                                                r(s)
                                            }
                                        })
                                    }).catch(r)
                                });
                            return s(r, t), r
                        },
                        length: function(t) {
                            var e = this,
                                r = new a(function(t, r) {
                                    e.ready().then(function() {
                                        I(e._dbInfo, v, function(n, i) {
                                            if (n) return r(n);
                                            try {
                                                var o = i.objectStore(e._dbInfo.storeName),
                                                    a = o.count();
                                                a.onsuccess = function() {
                                                    t(a.result)
                                                }, a.onerror = function() {
                                                    r(a.error)
                                                }
                                            } catch (s) {
                                                r(s)
                                            }
                                        })
                                    }).catch(r)
                                });
                            return s(r, t), r
                        },
                        key: function(t, e) {
                            var r = this,
                                n = new a(function(e, n) {
                                    t < 0 ? e(null) : r.ready().then(function() {
                                        I(r._dbInfo, v, function(i, o) {
                                            if (i) return n(i);
                                            try {
                                                var a = o.objectStore(r._dbInfo.storeName),
                                                    s = !1,
                                                    u = a.openCursor();
                                                u.onsuccess = function() {
                                                    var r = u.result;
                                                    r ? 0 === t ? e(r.key) : s ? e(r.key) : (s = !0, r.advance(t)) : e(null)
                                                }, u.onerror = function() {
                                                    n(u.error)
                                                }
                                            } catch (c) {
                                                n(c)
                                            }
                                        })
                                    }).catch(n)
                                });
                            return s(n, e), n
                        },
                        keys: function(t) {
                            var e = this,
                                r = new a(function(t, r) {
                                    e.ready().then(function() {
                                        I(e._dbInfo, v, function(n, i) {
                                            if (n) return r(n);
                                            try {
                                                var o = i.objectStore(e._dbInfo.storeName),
                                                    a = o.openCursor(),
                                                    s = [];
                                                a.onsuccess = function() {
                                                    var e = a.result;
                                                    e ? (s.push(e.key), e.continue()) : t(s)
                                                }, a.onerror = function() {
                                                    r(a.error)
                                                }
                                            } catch (u) {
                                                r(u)
                                            }
                                        })
                                    }).catch(r)
                                });
                            return s(r, t), r
                        },
                        dropInstance: function(t, e) {
                            e = f.apply(this, arguments);
                            var r, n = this.config();
                            if ((t = "function" !== typeof t && t || {}).name || (t.name = t.name || n.name, t.storeName = t.storeName || n.storeName), t.name) {
                                var o = t.name === n.name && this._dbInfo.db,
                                    u = o ? a.resolve(this._dbInfo.db) : x(t).then(function(e) {
                                        var r = d[t.name],
                                            n = r.forages;
                                        r.db = e;
                                        for (var i = 0; i < n.length; i++) n[i]._dbInfo.db = e;
                                        return e
                                    });
                                r = t.storeName ? u.then(function(e) {
                                    if (e.objectStoreNames.contains(t.storeName)) {
                                        var r = e.version + 1;
                                        b(t);
                                        var n = d[t.name],
                                            o = n.forages;
                                        e.close();
                                        for (var s = 0; s < o.length; s++) {
                                            var u = o[s];
                                            u._dbInfo.db = null, u._dbInfo.version = r
                                        }
                                        var c = new a(function(e, n) {
                                            var o = i.open(t.name, r);
                                            o.onerror = function(t) {
                                                var e = o.result;
                                                e.close(), n(t)
                                            }, o.onupgradeneeded = function() {
                                                var e = o.result;
                                                e.deleteObjectStore(t.storeName)
                                            }, o.onsuccess = function() {
                                                var t = o.result;
                                                t.close(), e(t)
                                            }
                                        });
                                        return c.then(function(t) {
                                            n.db = t;
                                            for (var e = 0; e < o.length; e++) {
                                                var r = o[e];
                                                r._dbInfo.db = t, m(r._dbInfo)
                                            }
                                        }).catch(function(e) {
                                            throw (w(t, e) || a.resolve()).catch(function() {}), e
                                        })
                                    }
                                }) : u.then(function(e) {
                                    b(t);
                                    var r = d[t.name],
                                        n = r.forages;
                                    e.close();
                                    for (var o = 0; o < n.length; o++) {
                                        var s = n[o];
                                        s._dbInfo.db = null
                                    }
                                    var u = new a(function(e, r) {
                                        var n = i.deleteDatabase(t.name);
                                        n.onerror = n.onblocked = function(t) {
                                            var e = n.result;
                                            e && e.close(), r(t)
                                        }, n.onsuccess = function() {
                                            var t = n.result;
                                            t && t.close(), e(t)
                                        }
                                    });
                                    return u.then(function(t) {
                                        r.db = t;
                                        for (var e = 0; e < n.length; e++) {
                                            var i = n[e];
                                            m(i._dbInfo)
                                        }
                                    }).catch(function(e) {
                                        throw (w(t, e) || a.resolve()).catch(function() {}), e
                                    })
                                })
                            } else r = a.reject("Invalid arguments");
                            return s(r, e), r
                        }
                    },
                    j = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    R = "~~local_forage_type~",
                    C = /^~~local_forage_type~([^~]+)~/,
                    N = "__lfsc__:",
                    P = N.length,
                    L = "arbf",
                    B = "blob",
                    D = "si08",
                    M = "ui08",
                    U = "uic8",
                    F = "si16",
                    z = "si32",
                    q = "ur16",
                    Y = "ui32",
                    W = "fl32",
                    K = "fl64",
                    G = P + L.length,
                    H = Object.prototype.toString;

                function V(t) {
                    var e, r, n, i, o, a = .75 * t.length,
                        s = t.length,
                        u = 0;
                    "=" === t[t.length - 1] && (a--, "=" === t[t.length - 2] && a--);
                    var c = new ArrayBuffer(a),
                        f = new Uint8Array(c);
                    for (e = 0; e < s; e += 4) r = j.indexOf(t[e]), n = j.indexOf(t[e + 1]), i = j.indexOf(t[e + 2]), o = j.indexOf(t[e + 3]), f[u++] = r << 2 | n >> 4, f[u++] = (15 & n) << 4 | i >> 2, f[u++] = (3 & i) << 6 | 63 & o;
                    return c
                }

                function X(t) {
                    var e, r = new Uint8Array(t),
                        n = "";
                    for (e = 0; e < r.length; e += 3) n += j[r[e] >> 2], n += j[(3 & r[e]) << 4 | r[e + 1] >> 4], n += j[(15 & r[e + 1]) << 2 | r[e + 2] >> 6], n += j[63 & r[e + 2]];
                    return r.length % 3 === 2 ? n = n.substring(0, n.length - 1) + "=" : r.length % 3 === 1 && (n = n.substring(0, n.length - 2) + "=="), n
                }
                var $ = {
                    serialize: function(t, e) {
                        var r = "";
                        if (t && (r = H.call(t)), t && ("[object ArrayBuffer]" === r || t.buffer && "[object ArrayBuffer]" === H.call(t.buffer))) {
                            var n, i = N;
                            t instanceof ArrayBuffer ? (n = t, i += L) : (n = t.buffer, "[object Int8Array]" === r ? i += D : "[object Uint8Array]" === r ? i += M : "[object Uint8ClampedArray]" === r ? i += U : "[object Int16Array]" === r ? i += F : "[object Uint16Array]" === r ? i += q : "[object Int32Array]" === r ? i += z : "[object Uint32Array]" === r ? i += Y : "[object Float32Array]" === r ? i += W : "[object Float64Array]" === r ? i += K : e(new Error("Failed to get type for BinaryArray"))), e(i + X(n))
                        } else if ("[object Blob]" === r) {
                            var o = new FileReader;
                            o.onload = function() {
                                var r = R + t.type + "~" + X(this.result);
                                e(N + B + r)
                            }, o.readAsArrayBuffer(t)
                        } else try {
                            e(JSON.stringify(t))
                        } catch (a) {
                            console.error("Couldn't convert value into a JSON string: ", t), e(null, a)
                        }
                    },
                    deserialize: function(t) {
                        if (t.substring(0, P) !== N) return JSON.parse(t);
                        var e, r = t.substring(G),
                            n = t.substring(P, G);
                        if (n === B && C.test(r)) {
                            var i = r.match(C);
                            e = i[1], r = r.substring(i[0].length)
                        }
                        var a = V(r);
                        switch (n) {
                            case L:
                                return a;
                            case B:
                                return o([a], {
                                    type: e
                                });
                            case D:
                                return new Int8Array(a);
                            case M:
                                return new Uint8Array(a);
                            case U:
                                return new Uint8ClampedArray(a);
                            case F:
                                return new Int16Array(a);
                            case q:
                                return new Uint16Array(a);
                            case z:
                                return new Int32Array(a);
                            case Y:
                                return new Uint32Array(a);
                            case W:
                                return new Float32Array(a);
                            case K:
                                return new Float64Array(a);
                            default:
                                throw new Error("Unkown type: " + n)
                        }
                    },
                    stringToBuffer: V,
                    bufferToString: X
                };

                function J(t, e, r, n) {
                    t.executeSql("CREATE TABLE IF NOT EXISTS " + e.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], r, n)
                }

                function Q(t, e, r, n, i, o) {
                    t.executeSql(r, n, i, function(t, a) {
                        a.code === a.SYNTAX_ERR ? t.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [e.storeName], function(t, s) {
                            s.rows.length ? o(t, a) : J(t, e, function() {
                                t.executeSql(r, n, i, o)
                            }, o)
                        }, o) : o(t, a)
                    }, o)
                }
                var Z = {
                    _driver: "webSQLStorage",
                    _initStorage: function(t) {
                        var e = this,
                            r = {
                                db: null
                            };
                        if (t)
                            for (var n in t) r[n] = "string" !== typeof t[n] ? t[n].toString() : t[n];
                        var i = new a(function(t, n) {
                            try {
                                r.db = openDatabase(r.name, String(r.version), r.description, r.size)
                            } catch (i) {
                                return n(i)
                            }
                            r.db.transaction(function(i) {
                                J(i, r, function() {
                                    e._dbInfo = r, t()
                                }, function(t, e) {
                                    n(e)
                                })
                            }, n)
                        });
                        return r.serializer = $, i
                    },
                    _support: "function" === typeof openDatabase,
                    iterate: function(t, e) {
                        var r = this,
                            n = new a(function(e, n) {
                                r.ready().then(function() {
                                    var i = r._dbInfo;
                                    i.db.transaction(function(r) {
                                        Q(r, i, "SELECT * FROM " + i.storeName, [], function(r, n) {
                                            for (var o = n.rows, a = o.length, s = 0; s < a; s++) {
                                                var u = o.item(s),
                                                    c = u.value;
                                                if (c && (c = i.serializer.deserialize(c)), void 0 !== (c = t(c, u.key, s + 1))) return void e(c)
                                            }
                                            e()
                                        }, function(t, e) {
                                            n(e)
                                        })
                                    })
                                }).catch(n)
                            });
                        return s(n, e), n
                    },
                    getItem: function(t, e) {
                        var r = this;
                        t = c(t);
                        var n = new a(function(e, n) {
                            r.ready().then(function() {
                                var i = r._dbInfo;
                                i.db.transaction(function(r) {
                                    Q(r, i, "SELECT * FROM " + i.storeName + " WHERE key = ? LIMIT 1", [t], function(t, r) {
                                        var n = r.rows.length ? r.rows.item(0).value : null;
                                        n && (n = i.serializer.deserialize(n)), e(n)
                                    }, function(t, e) {
                                        n(e)
                                    })
                                })
                            }).catch(n)
                        });
                        return s(n, e), n
                    },
                    setItem: function(t, e, r) {
                        return function t(e, r, n, i) {
                            var o = this;
                            e = c(e);
                            var u = new a(function(a, s) {
                                o.ready().then(function() {
                                    void 0 === r && (r = null);
                                    var u = r,
                                        c = o._dbInfo;
                                    c.serializer.serialize(r, function(r, f) {
                                        f ? s(f) : c.db.transaction(function(t) {
                                            Q(t, c, "INSERT OR REPLACE INTO " + c.storeName + " (key, value) VALUES (?, ?)", [e, r], function() {
                                                a(u)
                                            }, function(t, e) {
                                                s(e)
                                            })
                                        }, function(r) {
                                            if (r.code === r.QUOTA_ERR) {
                                                if (i > 0) return void a(t.apply(o, [e, u, n, i - 1]));
                                                s(r)
                                            }
                                        })
                                    })
                                }).catch(s)
                            });
                            return s(u, n), u
                        }.apply(this, [t, e, r, 1])
                    },
                    removeItem: function(t, e) {
                        var r = this;
                        t = c(t);
                        var n = new a(function(e, n) {
                            r.ready().then(function() {
                                var i = r._dbInfo;
                                i.db.transaction(function(r) {
                                    Q(r, i, "DELETE FROM " + i.storeName + " WHERE key = ?", [t], function() {
                                        e()
                                    }, function(t, e) {
                                        n(e)
                                    })
                                })
                            }).catch(n)
                        });
                        return s(n, e), n
                    },
                    clear: function(t) {
                        var e = this,
                            r = new a(function(t, r) {
                                e.ready().then(function() {
                                    var n = e._dbInfo;
                                    n.db.transaction(function(e) {
                                        Q(e, n, "DELETE FROM " + n.storeName, [], function() {
                                            t()
                                        }, function(t, e) {
                                            r(e)
                                        })
                                    })
                                }).catch(r)
                            });
                        return s(r, t), r
                    },
                    length: function(t) {
                        var e = this,
                            r = new a(function(t, r) {
                                e.ready().then(function() {
                                    var n = e._dbInfo;
                                    n.db.transaction(function(e) {
                                        Q(e, n, "SELECT COUNT(key) as c FROM " + n.storeName, [], function(e, r) {
                                            var n = r.rows.item(0).c;
                                            t(n)
                                        }, function(t, e) {
                                            r(e)
                                        })
                                    })
                                }).catch(r)
                            });
                        return s(r, t), r
                    },
                    key: function(t, e) {
                        var r = this,
                            n = new a(function(e, n) {
                                r.ready().then(function() {
                                    var i = r._dbInfo;
                                    i.db.transaction(function(r) {
                                        Q(r, i, "SELECT key FROM " + i.storeName + " WHERE id = ? LIMIT 1", [t + 1], function(t, r) {
                                            var n = r.rows.length ? r.rows.item(0).key : null;
                                            e(n)
                                        }, function(t, e) {
                                            n(e)
                                        })
                                    })
                                }).catch(n)
                            });
                        return s(n, e), n
                    },
                    keys: function(t) {
                        var e = this,
                            r = new a(function(t, r) {
                                e.ready().then(function() {
                                    var n = e._dbInfo;
                                    n.db.transaction(function(e) {
                                        Q(e, n, "SELECT key FROM " + n.storeName, [], function(e, r) {
                                            for (var n = [], i = 0; i < r.rows.length; i++) n.push(r.rows.item(i).key);
                                            t(n)
                                        }, function(t, e) {
                                            r(e)
                                        })
                                    })
                                }).catch(r)
                            });
                        return s(r, t), r
                    },
                    dropInstance: function(t, e) {
                        e = f.apply(this, arguments);
                        var r = this.config();
                        (t = "function" !== typeof t && t || {}).name || (t.name = t.name || r.name, t.storeName = t.storeName || r.storeName);
                        var n, i = this;
                        return s(n = t.name ? new a(function(e) {
                            var n;
                            n = t.name === r.name ? i._dbInfo.db : openDatabase(t.name, "", "", 0), t.storeName ? e({
                                db: n,
                                storeNames: [t.storeName]
                            }) : e(function(t) {
                                return new a(function(e, r) {
                                    t.transaction(function(n) {
                                        n.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(r, n) {
                                            for (var i = [], o = 0; o < n.rows.length; o++) i.push(n.rows.item(o).name);
                                            e({
                                                db: t,
                                                storeNames: i
                                            })
                                        }, function(t, e) {
                                            r(e)
                                        })
                                    }, function(t) {
                                        r(t)
                                    })
                                })
                            }(n))
                        }).then(function(t) {
                            return new a(function(e, r) {
                                t.db.transaction(function(n) {
                                    function i(t) {
                                        return new a(function(e, r) {
                                            n.executeSql("DROP TABLE IF EXISTS " + t, [], function() {
                                                e()
                                            }, function(t, e) {
                                                r(e)
                                            })
                                        })
                                    }
                                    for (var o = [], s = 0, u = t.storeNames.length; s < u; s++) o.push(i(t.storeNames[s]));
                                    a.all(o).then(function() {
                                        e()
                                    }).catch(function(t) {
                                        r(t)
                                    })
                                }, function(t) {
                                    r(t)
                                })
                            })
                        }) : a.reject("Invalid arguments"), e), n
                    }
                };

                function tt(t, e) {
                    var r = t.name + "/";
                    return t.storeName !== e.storeName && (r += t.storeName + "/"), r
                }

                function et() {
                    return ! function() {
                        try {
                            return localStorage.setItem("_localforage_support_test", !0), localStorage.removeItem("_localforage_support_test"), !1
                        } catch (t) {
                            return !0
                        }
                    }() || localStorage.length > 0
                }
                var rt = {
                        _driver: "localStorageWrapper",
                        _initStorage: function(t) {
                            var e = {};
                            if (t)
                                for (var r in t) e[r] = t[r];
                            return e.keyPrefix = tt(t, this._defaultConfig), et() ? (this._dbInfo = e, e.serializer = $, a.resolve()) : a.reject()
                        },
                        _support: function() {
                            try {
                                return "undefined" !== typeof localStorage && "setItem" in localStorage && !!localStorage.setItem
                            } catch (t) {
                                return !1
                            }
                        }(),
                        iterate: function(t, e) {
                            var r = this,
                                n = r.ready().then(function() {
                                    for (var e = r._dbInfo, n = e.keyPrefix, i = n.length, o = localStorage.length, a = 1, s = 0; s < o; s++) {
                                        var u = localStorage.key(s);
                                        if (0 === u.indexOf(n)) {
                                            var c = localStorage.getItem(u);
                                            if (c && (c = e.serializer.deserialize(c)), void 0 !== (c = t(c, u.substring(i), a++))) return c
                                        }
                                    }
                                });
                            return s(n, e), n
                        },
                        getItem: function(t, e) {
                            var r = this;
                            t = c(t);
                            var n = r.ready().then(function() {
                                var e = r._dbInfo,
                                    n = localStorage.getItem(e.keyPrefix + t);
                                return n && (n = e.serializer.deserialize(n)), n
                            });
                            return s(n, e), n
                        },
                        setItem: function(t, e, r) {
                            var n = this;
                            t = c(t);
                            var i = n.ready().then(function() {
                                void 0 === e && (e = null);
                                var r = e;
                                return new a(function(i, o) {
                                    var a = n._dbInfo;
                                    a.serializer.serialize(e, function(e, n) {
                                        if (n) o(n);
                                        else try {
                                            localStorage.setItem(a.keyPrefix + t, e), i(r)
                                        } catch (s) {
                                            "QuotaExceededError" !== s.name && "NS_ERROR_DOM_QUOTA_REACHED" !== s.name || o(s), o(s)
                                        }
                                    })
                                })
                            });
                            return s(i, r), i
                        },
                        removeItem: function(t, e) {
                            var r = this;
                            t = c(t);
                            var n = r.ready().then(function() {
                                var e = r._dbInfo;
                                localStorage.removeItem(e.keyPrefix + t)
                            });
                            return s(n, e), n
                        },
                        clear: function(t) {
                            var e = this,
                                r = e.ready().then(function() {
                                    for (var t = e._dbInfo.keyPrefix, r = localStorage.length - 1; r >= 0; r--) {
                                        var n = localStorage.key(r);
                                        0 === n.indexOf(t) && localStorage.removeItem(n)
                                    }
                                });
                            return s(r, t), r
                        },
                        length: function(t) {
                            var e = this.keys().then(function(t) {
                                return t.length
                            });
                            return s(e, t), e
                        },
                        key: function(t, e) {
                            var r = this,
                                n = r.ready().then(function() {
                                    var e, n = r._dbInfo;
                                    try {
                                        e = localStorage.key(t)
                                    } catch (i) {
                                        e = null
                                    }
                                    return e && (e = e.substring(n.keyPrefix.length)), e
                                });
                            return s(n, e), n
                        },
                        keys: function(t) {
                            var e = this,
                                r = e.ready().then(function() {
                                    for (var t = e._dbInfo, r = localStorage.length, n = [], i = 0; i < r; i++) {
                                        var o = localStorage.key(i);
                                        0 === o.indexOf(t.keyPrefix) && n.push(o.substring(t.keyPrefix.length))
                                    }
                                    return n
                                });
                            return s(r, t), r
                        },
                        dropInstance: function(t, e) {
                            if (e = f.apply(this, arguments), !(t = "function" !== typeof t && t || {}).name) {
                                var r = this.config();
                                t.name = t.name || r.name, t.storeName = t.storeName || r.storeName
                            }
                            var n, i = this;
                            return s(n = t.name ? new a(function(e) {
                                t.storeName ? e(tt(t, i._defaultConfig)) : e(t.name + "/")
                            }).then(function(t) {
                                for (var e = localStorage.length - 1; e >= 0; e--) {
                                    var r = localStorage.key(e);
                                    0 === r.indexOf(t) && localStorage.removeItem(r)
                                }
                            }) : a.reject("Invalid arguments"), e), n
                        }
                    },
                    nt = function(t, e) {
                        for (var r = t.length, n = 0; n < r;) {
                            if ((i = t[n]) === (o = e) || "number" === typeof i && "number" === typeof o && isNaN(i) && isNaN(o)) return !0;
                            n++
                        }
                        var i, o;
                        return !1
                    },
                    it = Array.isArray || function(t) {
                        return "[object Array]" === Object.prototype.toString.call(t)
                    },
                    ot = {},
                    at = {},
                    st = {
                        INDEXEDDB: T,
                        WEBSQL: Z,
                        LOCALSTORAGE: rt
                    },
                    ut = [st.INDEXEDDB._driver, st.WEBSQL._driver, st.LOCALSTORAGE._driver],
                    ct = ["dropInstance"],
                    ft = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(ct),
                    lt = {
                        description: "",
                        driver: ut.slice(),
                        name: "localforage",
                        size: 4980736,
                        storeName: "keyvaluepairs",
                        version: 1
                    };

                function ht(t, e) {
                    t[e] = function() {
                        var r = arguments;
                        return t.ready().then(function() {
                            return t[e].apply(t, r)
                        })
                    }
                }

                function dt() {
                    for (var t = 1; t < arguments.length; t++) {
                        var e = arguments[t];
                        if (e)
                            for (var r in e) e.hasOwnProperty(r) && (it(e[r]) ? arguments[0][r] = e[r].slice() : arguments[0][r] = e[r])
                    }
                    return arguments[0]
                }
                var pt = function() {
                        function t(e) {
                            for (var r in function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                }(this, t), st)
                                if (st.hasOwnProperty(r)) {
                                    var n = st[r],
                                        i = n._driver;
                                    this[r] = i, ot[i] || this.defineDriver(n)
                                } this._defaultConfig = dt({}, lt), this._config = dt({}, this._defaultConfig, e), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function() {})
                        }
                        return t.prototype.config = function(t) {
                            if ("object" === ("undefined" === typeof t ? "undefined" : n(t))) {
                                if (this._ready) return new Error("Can't call config() after localforage has been used.");
                                for (var e in t) {
                                    if ("storeName" === e && (t[e] = t[e].replace(/\W/g, "_")), "version" === e && "number" !== typeof t[e]) return new Error("Database version must be a number.");
                                    this._config[e] = t[e]
                                }
                                return !("driver" in t && t.driver) || this.setDriver(this._config.driver)
                            }
                            return "string" === typeof t ? this._config[t] : this._config
                        }, t.prototype.defineDriver = function(t, e, r) {
                            var n = new a(function(e, r) {
                                try {
                                    var n = t._driver,
                                        i = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
                                    if (!t._driver) return void r(i);
                                    for (var o = ft.concat("_initStorage"), u = 0, c = o.length; u < c; u++) {
                                        var f = o[u],
                                            l = !nt(ct, f);
                                        if ((l || t[f]) && "function" !== typeof t[f]) return void r(i)
                                    }! function() {
                                        for (var e = function(t) {
                                                return function() {
                                                    var e = new Error("Method " + t + " is not implemented by the current driver"),
                                                        r = a.reject(e);
                                                    return s(r, arguments[arguments.length - 1]), r
                                                }
                                            }, r = 0, n = ct.length; r < n; r++) {
                                            var i = ct[r];
                                            t[i] || (t[i] = e(i))
                                        }
                                    }();
                                    var h = function(r) {
                                        ot[n] && console.info("Redefining LocalForage driver: " + n), ot[n] = t, at[n] = r, e()
                                    };
                                    "_support" in t ? t._support && "function" === typeof t._support ? t._support().then(h, r) : h(!!t._support) : h(!0)
                                } catch (d) {
                                    r(d)
                                }
                            });
                            return u(n, e, r), n
                        }, t.prototype.driver = function() {
                            return this._driver || null
                        }, t.prototype.getDriver = function(t, e, r) {
                            var n = ot[t] ? a.resolve(ot[t]) : a.reject(new Error("Driver not found."));
                            return u(n, e, r), n
                        }, t.prototype.getSerializer = function(t) {
                            var e = a.resolve($);
                            return u(e, t), e
                        }, t.prototype.ready = function(t) {
                            var e = this,
                                r = e._driverSet.then(function() {
                                    return null === e._ready && (e._ready = e._initDriver()), e._ready
                                });
                            return u(r, t, t), r
                        }, t.prototype.setDriver = function(t, e, r) {
                            var n = this;
                            it(t) || (t = [t]);
                            var i = this._getSupportedDrivers(t);

                            function o() {
                                n._config.driver = n.driver()
                            }

                            function s(t) {
                                return n._extend(t), o(), n._ready = n._initStorage(n._config), n._ready
                            }
                            var c = null !== this._driverSet ? this._driverSet.catch(function() {
                                return a.resolve()
                            }) : a.resolve();
                            return this._driverSet = c.then(function() {
                                var t = i[0];
                                return n._dbInfo = null, n._ready = null, n.getDriver(t).then(function(t) {
                                    n._driver = t._driver, o(), n._wrapLibraryMethodsWithReady(), n._initDriver = function(t) {
                                        return function() {
                                            var e = 0;
                                            return function r() {
                                                for (; e < t.length;) {
                                                    var i = t[e];
                                                    return e++, n._dbInfo = null, n._ready = null, n.getDriver(i).then(s).catch(r)
                                                }
                                                o();
                                                var u = new Error("No available storage method found.");
                                                return n._driverSet = a.reject(u), n._driverSet
                                            }()
                                        }
                                    }(i)
                                })
                            }).catch(function() {
                                o();
                                var t = new Error("No available storage method found.");
                                return n._driverSet = a.reject(t), n._driverSet
                            }), u(this._driverSet, e, r), this._driverSet
                        }, t.prototype.supports = function(t) {
                            return !!at[t]
                        }, t.prototype._extend = function(t) {
                            dt(this, t)
                        }, t.prototype._getSupportedDrivers = function(t) {
                            for (var e = [], r = 0, n = t.length; r < n; r++) {
                                var i = t[r];
                                this.supports(i) && e.push(i)
                            }
                            return e
                        }, t.prototype._wrapLibraryMethodsWithReady = function() {
                            for (var t = 0, e = ft.length; t < e; t++) ht(this, ft[t])
                        }, t.prototype.createInstance = function(e) {
                            return new t(e)
                        }, t
                    }(),
                    vt = new pt;
                e.exports = vt
            }, {
                3: 3
            }]
        }, {}, [4])(4)
    }).call(this, r(10))
}, function(t, e, r) {
    "use strict";
    r.d(e, "a", function() {
        return o
    });
    var n = r(27),
        i = r.n(n);

    function o(t) {
        return i()("sha256").update(t).digest("hex")
    }
}, function(t, e) {
    "function" === typeof Object.create ? t.exports = function(t, e) {
        e && (t.super_ = e, t.prototype = Object.create(e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }))
    } : t.exports = function(t, e) {
        if (e) {
            t.super_ = e;
            var r = function() {};
            r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
        }
    }
}, function(t, e, r) {
    "use strict";
    (function(t) {
        var n = r(56),
            i = r(57),
            o = r(32);

        function a() {
            return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
        }

        function s(t, e) {
            if (a() < e) throw new RangeError("Invalid typed array length");
            return u.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = u.prototype : (null === t && (t = new u(e)), t.length = e), t
        }

        function u(t, e, r) {
            if (!u.TYPED_ARRAY_SUPPORT && !(this instanceof u)) return new u(t, e, r);
            if ("number" === typeof t) {
                if ("string" === typeof e) throw new Error("If encoding is specified then the first argument must be a string");
                return l(this, t)
            }
            return c(this, t, e, r)
        }

        function c(t, e, r, n) {
            if ("number" === typeof e) throw new TypeError('"value" argument must not be a number');
            return "undefined" !== typeof ArrayBuffer && e instanceof ArrayBuffer ? function(t, e, r, n) {
                if (e.byteLength, r < 0 || e.byteLength < r) throw new RangeError("'offset' is out of bounds");
                if (e.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");
                e = void 0 === r && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, r) : new Uint8Array(e, r, n);
                u.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = u.prototype : t = h(t, e);
                return t
            }(t, e, r, n) : "string" === typeof e ? function(t, e, r) {
                "string" === typeof r && "" !== r || (r = "utf8");
                if (!u.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');
                var n = 0 | p(e, r),
                    i = (t = s(t, n)).write(e, r);
                i !== n && (t = t.slice(0, i));
                return t
            }(t, e, r) : function(t, e) {
                if (u.isBuffer(e)) {
                    var r = 0 | d(e.length);
                    return 0 === (t = s(t, r)).length ? t : (e.copy(t, 0, 0, r), t)
                }
                if (e) {
                    if ("undefined" !== typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" !== typeof e.length || (n = e.length) !== n ? s(t, 0) : h(t, e);
                    if ("Buffer" === e.type && o(e.data)) return h(t, e.data)
                }
                var n;
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
            }(t, e)
        }

        function f(t) {
            if ("number" !== typeof t) throw new TypeError('"size" argument must be a number');
            if (t < 0) throw new RangeError('"size" argument must not be negative')
        }

        function l(t, e) {
            if (f(e), t = s(t, e < 0 ? 0 : 0 | d(e)), !u.TYPED_ARRAY_SUPPORT)
                for (var r = 0; r < e; ++r) t[r] = 0;
            return t
        }

        function h(t, e) {
            var r = e.length < 0 ? 0 : 0 | d(e.length);
            t = s(t, r);
            for (var n = 0; n < r; n += 1) t[n] = 255 & e[n];
            return t
        }

        function d(t) {
            if (t >= a()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
            return 0 | t
        }

        function p(t, e) {
            if (u.isBuffer(t)) return t.length;
            if ("undefined" !== typeof ArrayBuffer && "function" === typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
            "string" !== typeof t && (t = "" + t);
            var r = t.length;
            if (0 === r) return 0;
            for (var n = !1;;) switch (e) {
                case "ascii":
                case "latin1":
                case "binary":
                    return r;
                case "utf8":
                case "utf-8":
                case void 0:
                    return F(t).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * r;
                case "hex":
                    return r >>> 1;
                case "base64":
                    return z(t).length;
                default:
                    if (n) return F(t).length;
                    e = ("" + e).toLowerCase(), n = !0
            }
        }

        function v(t, e, r) {
            var n = t[e];
            t[e] = t[r], t[r] = n
        }

        function g(t, e, r, n, i) {
            if (0 === t.length) return -1;
            if ("string" === typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, isNaN(r) && (r = i ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) {
                if (i) return -1;
                r = t.length - 1
            } else if (r < 0) {
                if (!i) return -1;
                r = 0
            }
            if ("string" === typeof e && (e = u.from(e, n)), u.isBuffer(e)) return 0 === e.length ? -1 : y(t, e, r, n, i);
            if ("number" === typeof e) return e &= 255, u.TYPED_ARRAY_SUPPORT && "function" === typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : y(t, [e], r, n, i);
            throw new TypeError("val must be string, number or Buffer")
        }

        function y(t, e, r, n, i) {
            var o, a = 1,
                s = t.length,
                u = e.length;
            if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                if (t.length < 2 || e.length < 2) return -1;
                a = 2, s /= 2, u /= 2, r /= 2
            }

            function c(t, e) {
                return 1 === a ? t[e] : t.readUInt16BE(e * a)
            }
            if (i) {
                var f = -1;
                for (o = r; o < s; o++)
                    if (c(t, o) === c(e, -1 === f ? 0 : o - f)) {
                        if (-1 === f && (f = o), o - f + 1 === u) return f * a
                    } else -1 !== f && (o -= o - f), f = -1
            } else
                for (r + u > s && (r = s - u), o = r; o >= 0; o--) {
                    for (var l = !0, h = 0; h < u; h++)
                        if (c(t, o + h) !== c(e, h)) {
                            l = !1;
                            break
                        } if (l) return o
                }
            return -1
        }

        function b(t, e, r, n) {
            r = Number(r) || 0;
            var i = t.length - r;
            n ? (n = Number(n)) > i && (n = i) : n = i;
            var o = e.length;
            if (o % 2 !== 0) throw new TypeError("Invalid hex string");
            n > o / 2 && (n = o / 2);
            for (var a = 0; a < n; ++a) {
                var s = parseInt(e.substr(2 * a, 2), 16);
                if (isNaN(s)) return a;
                t[r + a] = s
            }
            return a
        }

        function m(t, e, r, n) {
            return q(F(e, t.length - r), t, r, n)
        }

        function w(t, e, r, n) {
            return q(function(t) {
                for (var e = [], r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
                return e
            }(e), t, r, n)
        }

        function _(t, e, r, n) {
            return w(t, e, r, n)
        }

        function x(t, e, r, n) {
            return q(z(e), t, r, n)
        }

        function E(t, e, r, n) {
            return q(function(t, e) {
                for (var r, n, i, o = [], a = 0; a < t.length && !((e -= 2) < 0); ++a) r = t.charCodeAt(a), n = r >> 8, i = r % 256, o.push(i), o.push(n);
                return o
            }(e, t.length - r), t, r, n)
        }

        function S(t, e, r) {
            return 0 === e && r === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(e, r))
        }

        function k(t, e, r) {
            r = Math.min(t.length, r);
            for (var n = [], i = e; i < r;) {
                var o, a, s, u, c = t[i],
                    f = null,
                    l = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                if (i + l <= r) switch (l) {
                    case 1:
                        c < 128 && (f = c);
                        break;
                    case 2:
                        128 === (192 & (o = t[i + 1])) && (u = (31 & c) << 6 | 63 & o) > 127 && (f = u);
                        break;
                    case 3:
                        o = t[i + 1], a = t[i + 2], 128 === (192 & o) && 128 === (192 & a) && (u = (15 & c) << 12 | (63 & o) << 6 | 63 & a) > 2047 && (u < 55296 || u > 57343) && (f = u);
                        break;
                    case 4:
                        o = t[i + 1], a = t[i + 2], s = t[i + 3], 128 === (192 & o) && 128 === (192 & a) && 128 === (192 & s) && (u = (15 & c) << 18 | (63 & o) << 12 | (63 & a) << 6 | 63 & s) > 65535 && u < 1114112 && (f = u)
                }
                null === f ? (f = 65533, l = 1) : f > 65535 && (f -= 65536, n.push(f >>> 10 & 1023 | 55296), f = 56320 | 1023 & f), n.push(f), i += l
            }
            return function(t) {
                var e = t.length;
                if (e <= A) return String.fromCharCode.apply(String, t);
                var r = "",
                    n = 0;
                for (; n < e;) r += String.fromCharCode.apply(String, t.slice(n, n += A));
                return r
            }(n)
        }
        e.Buffer = u, e.SlowBuffer = function(t) {
            +t != t && (t = 0);
            return u.alloc(+t)
        }, e.INSPECT_MAX_BYTES = 50, u.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function() {
            try {
                var t = new Uint8Array(1);
                return t.__proto__ = {
                    __proto__: Uint8Array.prototype,
                    foo: function() {
                        return 42
                    }
                }, 42 === t.foo() && "function" === typeof t.subarray && 0 === t.subarray(1, 1).byteLength
            } catch (e) {
                return !1
            }
        }(), e.kMaxLength = a(), u.poolSize = 8192, u._augment = function(t) {
            return t.__proto__ = u.prototype, t
        }, u.from = function(t, e, r) {
            return c(null, t, e, r)
        }, u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype, u.__proto__ = Uint8Array, "undefined" !== typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, {
            value: null,
            configurable: !0
        })), u.alloc = function(t, e, r) {
            return function(t, e, r, n) {
                return f(e), e <= 0 ? s(t, e) : void 0 !== r ? "string" === typeof n ? s(t, e).fill(r, n) : s(t, e).fill(r) : s(t, e)
            }(null, t, e, r)
        }, u.allocUnsafe = function(t) {
            return l(null, t)
        }, u.allocUnsafeSlow = function(t) {
            return l(null, t)
        }, u.isBuffer = function(t) {
            return !(null == t || !t._isBuffer)
        }, u.compare = function(t, e) {
            if (!u.isBuffer(t) || !u.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
            if (t === e) return 0;
            for (var r = t.length, n = e.length, i = 0, o = Math.min(r, n); i < o; ++i)
                if (t[i] !== e[i]) {
                    r = t[i], n = e[i];
                    break
                } return r < n ? -1 : n < r ? 1 : 0
        }, u.isEncoding = function(t) {
            switch (String(t).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return !0;
                default:
                    return !1
            }
        }, u.concat = function(t, e) {
            if (!o(t)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === t.length) return u.alloc(0);
            var r;
            if (void 0 === e)
                for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
            var n = u.allocUnsafe(e),
                i = 0;
            for (r = 0; r < t.length; ++r) {
                var a = t[r];
                if (!u.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
                a.copy(n, i), i += a.length
            }
            return n
        }, u.byteLength = p, u.prototype._isBuffer = !0, u.prototype.swap16 = function() {
            var t = this.length;
            if (t % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var e = 0; e < t; e += 2) v(this, e, e + 1);
            return this
        }, u.prototype.swap32 = function() {
            var t = this.length;
            if (t % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var e = 0; e < t; e += 4) v(this, e, e + 3), v(this, e + 1, e + 2);
            return this
        }, u.prototype.swap64 = function() {
            var t = this.length;
            if (t % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var e = 0; e < t; e += 8) v(this, e, e + 7), v(this, e + 1, e + 6), v(this, e + 2, e + 5), v(this, e + 3, e + 4);
            return this
        }, u.prototype.toString = function() {
            var t = 0 | this.length;
            return 0 === t ? "" : 0 === arguments.length ? k(this, 0, t) : function(t, e, r) {
                var n = !1;
                if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
                if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
                if ((r >>>= 0) <= (e >>>= 0)) return "";
                for (t || (t = "utf8");;) switch (t) {
                    case "hex":
                        return T(this, e, r);
                    case "utf8":
                    case "utf-8":
                        return k(this, e, r);
                    case "ascii":
                        return O(this, e, r);
                    case "latin1":
                    case "binary":
                        return I(this, e, r);
                    case "base64":
                        return S(this, e, r);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return j(this, e, r);
                    default:
                        if (n) throw new TypeError("Unknown encoding: " + t);
                        t = (t + "").toLowerCase(), n = !0
                }
            }.apply(this, arguments)
        }, u.prototype.equals = function(t) {
            if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
            return this === t || 0 === u.compare(this, t)
        }, u.prototype.inspect = function() {
            var t = "",
                r = e.INSPECT_MAX_BYTES;
            return this.length > 0 && (t = this.toString("hex", 0, r).match(/.{2}/g).join(" "), this.length > r && (t += " ... ")), "<Buffer " + t + ">"
        }, u.prototype.compare = function(t, e, r, n, i) {
            if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
            if (void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), e < 0 || r > t.length || n < 0 || i > this.length) throw new RangeError("out of range index");
            if (n >= i && e >= r) return 0;
            if (n >= i) return -1;
            if (e >= r) return 1;
            if (this === t) return 0;
            for (var o = (i >>>= 0) - (n >>>= 0), a = (r >>>= 0) - (e >>>= 0), s = Math.min(o, a), c = this.slice(n, i), f = t.slice(e, r), l = 0; l < s; ++l)
                if (c[l] !== f[l]) {
                    o = c[l], a = f[l];
                    break
                } return o < a ? -1 : a < o ? 1 : 0
        }, u.prototype.includes = function(t, e, r) {
            return -1 !== this.indexOf(t, e, r)
        }, u.prototype.indexOf = function(t, e, r) {
            return g(this, t, e, r, !0)
        }, u.prototype.lastIndexOf = function(t, e, r) {
            return g(this, t, e, r, !1)
        }, u.prototype.write = function(t, e, r, n) {
            if (void 0 === e) n = "utf8", r = this.length, e = 0;
            else if (void 0 === r && "string" === typeof e) n = e, r = this.length, e = 0;
            else {
                if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                e |= 0, isFinite(r) ? (r |= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0)
            }
            var i = this.length - e;
            if ((void 0 === r || r > i) && (r = i), t.length > 0 && (r < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
            n || (n = "utf8");
            for (var o = !1;;) switch (n) {
                case "hex":
                    return b(this, t, e, r);
                case "utf8":
                case "utf-8":
                    return m(this, t, e, r);
                case "ascii":
                    return w(this, t, e, r);
                case "latin1":
                case "binary":
                    return _(this, t, e, r);
                case "base64":
                    return x(this, t, e, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return E(this, t, e, r);
                default:
                    if (o) throw new TypeError("Unknown encoding: " + n);
                    n = ("" + n).toLowerCase(), o = !0
            }
        }, u.prototype.toJSON = function() {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            }
        };
        var A = 4096;

        function O(t, e, r) {
            var n = "";
            r = Math.min(t.length, r);
            for (var i = e; i < r; ++i) n += String.fromCharCode(127 & t[i]);
            return n
        }

        function I(t, e, r) {
            var n = "";
            r = Math.min(t.length, r);
            for (var i = e; i < r; ++i) n += String.fromCharCode(t[i]);
            return n
        }

        function T(t, e, r) {
            var n = t.length;
            (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
            for (var i = "", o = e; o < r; ++o) i += U(t[o]);
            return i
        }

        function j(t, e, r) {
            for (var n = t.slice(e, r), i = "", o = 0; o < n.length; o += 2) i += String.fromCharCode(n[o] + 256 * n[o + 1]);
            return i
        }

        function R(t, e, r) {
            if (t % 1 !== 0 || t < 0) throw new RangeError("offset is not uint");
            if (t + e > r) throw new RangeError("Trying to access beyond buffer length")
        }

        function C(t, e, r, n, i, o) {
            if (!u.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
            if (e > i || e < o) throw new RangeError('"value" argument is out of bounds');
            if (r + n > t.length) throw new RangeError("Index out of range")
        }

        function N(t, e, r, n) {
            e < 0 && (e = 65535 + e + 1);
            for (var i = 0, o = Math.min(t.length - r, 2); i < o; ++i) t[r + i] = (e & 255 << 8 * (n ? i : 1 - i)) >>> 8 * (n ? i : 1 - i)
        }

        function P(t, e, r, n) {
            e < 0 && (e = 4294967295 + e + 1);
            for (var i = 0, o = Math.min(t.length - r, 4); i < o; ++i) t[r + i] = e >>> 8 * (n ? i : 3 - i) & 255
        }

        function L(t, e, r, n, i, o) {
            if (r + n > t.length) throw new RangeError("Index out of range");
            if (r < 0) throw new RangeError("Index out of range")
        }

        function B(t, e, r, n, o) {
            return o || L(t, 0, r, 4), i.write(t, e, r, n, 23, 4), r + 4
        }

        function D(t, e, r, n, o) {
            return o || L(t, 0, r, 8), i.write(t, e, r, n, 52, 8), r + 8
        }
        u.prototype.slice = function(t, e) {
            var r, n = this.length;
            if ((t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), (e = void 0 === e ? n : ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), e < t && (e = t), u.TYPED_ARRAY_SUPPORT)(r = this.subarray(t, e)).__proto__ = u.prototype;
            else {
                var i = e - t;
                r = new u(i, void 0);
                for (var o = 0; o < i; ++o) r[o] = this[o + t]
            }
            return r
        }, u.prototype.readUIntLE = function(t, e, r) {
            t |= 0, e |= 0, r || R(t, e, this.length);
            for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256);) n += this[t + o] * i;
            return n
        }, u.prototype.readUIntBE = function(t, e, r) {
            t |= 0, e |= 0, r || R(t, e, this.length);
            for (var n = this[t + --e], i = 1; e > 0 && (i *= 256);) n += this[t + --e] * i;
            return n
        }, u.prototype.readUInt8 = function(t, e) {
            return e || R(t, 1, this.length), this[t]
        }, u.prototype.readUInt16LE = function(t, e) {
            return e || R(t, 2, this.length), this[t] | this[t + 1] << 8
        }, u.prototype.readUInt16BE = function(t, e) {
            return e || R(t, 2, this.length), this[t] << 8 | this[t + 1]
        }, u.prototype.readUInt32LE = function(t, e) {
            return e || R(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
        }, u.prototype.readUInt32BE = function(t, e) {
            return e || R(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
        }, u.prototype.readIntLE = function(t, e, r) {
            t |= 0, e |= 0, r || R(t, e, this.length);
            for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256);) n += this[t + o] * i;
            return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n
        }, u.prototype.readIntBE = function(t, e, r) {
            t |= 0, e |= 0, r || R(t, e, this.length);
            for (var n = e, i = 1, o = this[t + --n]; n > 0 && (i *= 256);) o += this[t + --n] * i;
            return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o
        }, u.prototype.readInt8 = function(t, e) {
            return e || R(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
        }, u.prototype.readInt16LE = function(t, e) {
            e || R(t, 2, this.length);
            var r = this[t] | this[t + 1] << 8;
            return 32768 & r ? 4294901760 | r : r
        }, u.prototype.readInt16BE = function(t, e) {
            e || R(t, 2, this.length);
            var r = this[t + 1] | this[t] << 8;
            return 32768 & r ? 4294901760 | r : r
        }, u.prototype.readInt32LE = function(t, e) {
            return e || R(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
        }, u.prototype.readInt32BE = function(t, e) {
            return e || R(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
        }, u.prototype.readFloatLE = function(t, e) {
            return e || R(t, 4, this.length), i.read(this, t, !0, 23, 4)
        }, u.prototype.readFloatBE = function(t, e) {
            return e || R(t, 4, this.length), i.read(this, t, !1, 23, 4)
        }, u.prototype.readDoubleLE = function(t, e) {
            return e || R(t, 8, this.length), i.read(this, t, !0, 52, 8)
        }, u.prototype.readDoubleBE = function(t, e) {
            return e || R(t, 8, this.length), i.read(this, t, !1, 52, 8)
        }, u.prototype.writeUIntLE = function(t, e, r, n) {
            (t = +t, e |= 0, r |= 0, n) || C(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
            var i = 1,
                o = 0;
            for (this[e] = 255 & t; ++o < r && (i *= 256);) this[e + o] = t / i & 255;
            return e + r
        }, u.prototype.writeUIntBE = function(t, e, r, n) {
            (t = +t, e |= 0, r |= 0, n) || C(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
            var i = r - 1,
                o = 1;
            for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) this[e + i] = t / o & 255;
            return e + r
        }, u.prototype.writeUInt8 = function(t, e, r) {
            return t = +t, e |= 0, r || C(this, t, e, 1, 255, 0), u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1
        }, u.prototype.writeUInt16LE = function(t, e, r) {
            return t = +t, e |= 0, r || C(this, t, e, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : N(this, t, e, !0), e + 2
        }, u.prototype.writeUInt16BE = function(t, e, r) {
            return t = +t, e |= 0, r || C(this, t, e, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : N(this, t, e, !1), e + 2
        }, u.prototype.writeUInt32LE = function(t, e, r) {
            return t = +t, e |= 0, r || C(this, t, e, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : P(this, t, e, !0), e + 4
        }, u.prototype.writeUInt32BE = function(t, e, r) {
            return t = +t, e |= 0, r || C(this, t, e, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : P(this, t, e, !1), e + 4
        }, u.prototype.writeIntLE = function(t, e, r, n) {
            if (t = +t, e |= 0, !n) {
                var i = Math.pow(2, 8 * r - 1);
                C(this, t, e, r, i - 1, -i)
            }
            var o = 0,
                a = 1,
                s = 0;
            for (this[e] = 255 & t; ++o < r && (a *= 256);) t < 0 && 0 === s && 0 !== this[e + o - 1] && (s = 1), this[e + o] = (t / a >> 0) - s & 255;
            return e + r
        }, u.prototype.writeIntBE = function(t, e, r, n) {
            if (t = +t, e |= 0, !n) {
                var i = Math.pow(2, 8 * r - 1);
                C(this, t, e, r, i - 1, -i)
            }
            var o = r - 1,
                a = 1,
                s = 0;
            for (this[e + o] = 255 & t; --o >= 0 && (a *= 256);) t < 0 && 0 === s && 0 !== this[e + o + 1] && (s = 1), this[e + o] = (t / a >> 0) - s & 255;
            return e + r
        }, u.prototype.writeInt8 = function(t, e, r) {
            return t = +t, e |= 0, r || C(this, t, e, 1, 127, -128), u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
        }, u.prototype.writeInt16LE = function(t, e, r) {
            return t = +t, e |= 0, r || C(this, t, e, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : N(this, t, e, !0), e + 2
        }, u.prototype.writeInt16BE = function(t, e, r) {
            return t = +t, e |= 0, r || C(this, t, e, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : N(this, t, e, !1), e + 2
        }, u.prototype.writeInt32LE = function(t, e, r) {
            return t = +t, e |= 0, r || C(this, t, e, 4, 2147483647, -2147483648), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : P(this, t, e, !0), e + 4
        }, u.prototype.writeInt32BE = function(t, e, r) {
            return t = +t, e |= 0, r || C(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : P(this, t, e, !1), e + 4
        }, u.prototype.writeFloatLE = function(t, e, r) {
            return B(this, t, e, !0, r)
        }, u.prototype.writeFloatBE = function(t, e, r) {
            return B(this, t, e, !1, r)
        }, u.prototype.writeDoubleLE = function(t, e, r) {
            return D(this, t, e, !0, r)
        }, u.prototype.writeDoubleBE = function(t, e, r) {
            return D(this, t, e, !1, r)
        }, u.prototype.copy = function(t, e, r, n) {
            if (r || (r = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && n < r && (n = r), n === r) return 0;
            if (0 === t.length || 0 === this.length) return 0;
            if (e < 0) throw new RangeError("targetStart out of bounds");
            if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
            if (n < 0) throw new RangeError("sourceEnd out of bounds");
            n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
            var i, o = n - r;
            if (this === t && r < e && e < n)
                for (i = o - 1; i >= 0; --i) t[i + e] = this[i + r];
            else if (o < 1e3 || !u.TYPED_ARRAY_SUPPORT)
                for (i = 0; i < o; ++i) t[i + e] = this[i + r];
            else Uint8Array.prototype.set.call(t, this.subarray(r, r + o), e);
            return o
        }, u.prototype.fill = function(t, e, r, n) {
            if ("string" === typeof t) {
                if ("string" === typeof e ? (n = e, e = 0, r = this.length) : "string" === typeof r && (n = r, r = this.length), 1 === t.length) {
                    var i = t.charCodeAt(0);
                    i < 256 && (t = i)
                }
                if (void 0 !== n && "string" !== typeof n) throw new TypeError("encoding must be a string");
                if ("string" === typeof n && !u.isEncoding(n)) throw new TypeError("Unknown encoding: " + n)
            } else "number" === typeof t && (t &= 255);
            if (e < 0 || this.length < e || this.length < r) throw new RangeError("Out of range index");
            if (r <= e) return this;
            var o;
            if (e >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), "number" === typeof t)
                for (o = e; o < r; ++o) this[o] = t;
            else {
                var a = u.isBuffer(t) ? t : F(new u(t, n).toString()),
                    s = a.length;
                for (o = 0; o < r - e; ++o) this[o + e] = a[o % s]
            }
            return this
        };
        var M = /[^+\/0-9A-Za-z-_]/g;

        function U(t) {
            return t < 16 ? "0" + t.toString(16) : t.toString(16)
        }

        function F(t, e) {
            var r;
            e = e || 1 / 0;
            for (var n = t.length, i = null, o = [], a = 0; a < n; ++a) {
                if ((r = t.charCodeAt(a)) > 55295 && r < 57344) {
                    if (!i) {
                        if (r > 56319) {
                            (e -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        if (a + 1 === n) {
                            (e -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        i = r;
                        continue
                    }
                    if (r < 56320) {
                        (e -= 3) > -1 && o.push(239, 191, 189), i = r;
                        continue
                    }
                    r = 65536 + (i - 55296 << 10 | r - 56320)
                } else i && (e -= 3) > -1 && o.push(239, 191, 189);
                if (i = null, r < 128) {
                    if ((e -= 1) < 0) break;
                    o.push(r)
                } else if (r < 2048) {
                    if ((e -= 2) < 0) break;
                    o.push(r >> 6 | 192, 63 & r | 128)
                } else if (r < 65536) {
                    if ((e -= 3) < 0) break;
                    o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                } else {
                    if (!(r < 1114112)) throw new Error("Invalid code point");
                    if ((e -= 4) < 0) break;
                    o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                }
            }
            return o
        }

        function z(t) {
            return n.toByteArray(function(t) {
                if ((t = function(t) {
                        return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
                    }(t).replace(M, "")).length < 2) return "";
                for (; t.length % 4 !== 0;) t += "=";
                return t
            }(t))
        }

        function q(t, e, r, n) {
            for (var i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i) e[i + r] = t[i];
            return i
        }
    }).call(this, r(10))
}, function(t, e, r) {
    var n = r(8),
        i = n.Buffer;

    function o(t, e) {
        for (var r in t) e[r] = t[r]
    }

    function a(t, e, r) {
        return i(t, e, r)
    }
    i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? t.exports = n : (o(n, e), e.Buffer = a), a.prototype = Object.create(i.prototype), o(i, a), a.from = function(t, e, r) {
        if ("number" === typeof t) throw new TypeError("Argument must not be a number");
        return i(t, e, r)
    }, a.alloc = function(t, e, r) {
        if ("number" !== typeof t) throw new TypeError("Argument must be a number");
        var n = i(t);
        return void 0 !== e ? "string" === typeof r ? n.fill(e, r) : n.fill(e) : n.fill(0), n
    }, a.allocUnsafe = function(t) {
        if ("number" !== typeof t) throw new TypeError("Argument must be a number");
        return i(t)
    }, a.allocUnsafeSlow = function(t) {
        if ("number" !== typeof t) throw new TypeError("Argument must be a number");
        return n.SlowBuffer(t)
    }
}, function(t, e) {
    var r;
    r = function() {
        return this
    }();
    try {
        r = r || new Function("return this")()
    } catch (n) {
        "object" === typeof window && (r = window)
    }
    t.exports = r
}, function(t, e, r) {
    "use strict";
    var n = function(t, e) {
        var r = e.exec(t);
        return !(null === r || "undefined" === typeof r)
    };
    e.isExist = function(t) {
        return "undefined" !== typeof t
    }, e.isEmptyObject = function(t) {
        return 0 === Object.keys(t).length
    }, e.merge = function(t, e) {
        if (e)
            for (var r = Object.keys(e), n = r.length, i = 0; i < n; i++) t[r[i]] = e[r[i]]
    }, e.getValue = function(t) {
        return e.isExist(t) ? t : ""
    }, e.buildOptions = function(t, e, r) {
        var n = {};
        if (!t) return e;
        for (var i = 0; i < r.length; i++) void 0 !== t[r[i]] ? n[r[i]] = t[r[i]] : n[r[i]] = e[r[i]];
        return n
    }, e.doesMatch = n, e.doesNotMatch = function(t, e) {
        return !n(t, e)
    }, e.getAllMatches = function(t, e) {
        for (var r = [], n = e.exec(t); n;) {
            for (var i = [], o = n.length, a = 0; a < o; a++) i.push(n[a]);
            r.push(i), n = e.exec(t)
        }
        return r
    }
}, function(t, e) {
    var r, n, i = t.exports = {};

    function o() {
        throw new Error("setTimeout has not been defined")
    }

    function a() {
        throw new Error("clearTimeout has not been defined")
    }

    function s(t) {
        if (r === setTimeout) return setTimeout(t, 0);
        if ((r === o || !r) && setTimeout) return r = setTimeout, setTimeout(t, 0);
        try {
            return r(t, 0)
        } catch (e) {
            try {
                return r.call(null, t, 0)
            } catch (e) {
                return r.call(this, t, 0)
            }
        }
    }! function() {
        try {
            r = "function" === typeof setTimeout ? setTimeout : o
        } catch (t) {
            r = o
        }
        try {
            n = "function" === typeof clearTimeout ? clearTimeout : a
        } catch (t) {
            n = a
        }
    }();
    var u, c = [],
        f = !1,
        l = -1;

    function h() {
        f && u && (f = !1, u.length ? c = u.concat(c) : l = -1, c.length && d())
    }

    function d() {
        if (!f) {
            var t = s(h);
            f = !0;
            for (var e = c.length; e;) {
                for (u = c, c = []; ++l < e;) u && u[l].run();
                l = -1, e = c.length
            }
            u = null, f = !1,
                function(t) {
                    if (n === clearTimeout) return clearTimeout(t);
                    if ((n === a || !n) && clearTimeout) return n = clearTimeout, clearTimeout(t);
                    try {
                        n(t)
                    } catch (e) {
                        try {
                            return n.call(null, t)
                        } catch (e) {
                            return n.call(this, t)
                        }
                    }
                }(t)
        }
    }

    function p(t, e) {
        this.fun = t, this.array = e
    }

    function v() {}
    i.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
        c.push(new p(t, e)), 1 !== c.length || f || s(d)
    }, p.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = v, i.addListener = v, i.once = v, i.off = v, i.removeListener = v, i.removeAllListeners = v, i.emit = v, i.prependListener = v, i.prependOnceListener = v, i.listeners = function(t) {
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
}, function(t, e, r) {
    "use strict";
    var n = r(19),
        i = Object.keys || function(t) {
            var e = [];
            for (var r in t) e.push(r);
            return e
        };
    t.exports = l;
    var o = r(16);
    o.inherits = r(7);
    var a = r(41),
        s = r(26);
    o.inherits(l, a);
    for (var u = i(s.prototype), c = 0; c < u.length; c++) {
        var f = u[c];
        l.prototype[f] || (l.prototype[f] = s.prototype[f])
    }

    function l(t) {
        if (!(this instanceof l)) return new l(t);
        a.call(this, t), s.call(this, t), t && !1 === t.readable && (this.readable = !1), t && !1 === t.writable && (this.writable = !1), this.allowHalfOpen = !0, t && !1 === t.allowHalfOpen && (this.allowHalfOpen = !1), this.once("end", h)
    }

    function h() {
        this.allowHalfOpen || this._writableState.ended || n.nextTick(d, this)
    }

    function d(t) {
        t.end()
    }
    Object.defineProperty(l.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function() {
            return this._writableState.highWaterMark
        }
    }), Object.defineProperty(l.prototype, "destroyed", {
        get: function() {
            return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed)
        },
        set: function(t) {
            void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = t, this._writableState.destroyed = t)
        }
    }), l.prototype._destroy = function(t, e) {
        this.push(null), this.end(), n.nextTick(e, t)
    }
}, function(t, e, r) {
    var n = r(9).Buffer;

    function i(t, e) {
        this._block = n.alloc(t), this._finalSize = e, this._blockSize = t, this._len = 0
    }
    i.prototype.update = function(t, e) {
        "string" === typeof t && (e = e || "utf8", t = n.from(t, e));
        for (var r = this._block, i = this._blockSize, o = t.length, a = this._len, s = 0; s < o;) {
            for (var u = a % i, c = Math.min(o - s, i - u), f = 0; f < c; f++) r[u + f] = t[s + f];
            s += c, (a += c) % i === 0 && this._update(r)
        }
        return this._len += o, this
    }, i.prototype.digest = function(t) {
        var e = this._len % this._blockSize;
        this._block[e] = 128, this._block.fill(0, e + 1), e >= this._finalSize && (this._update(this._block), this._block.fill(0));
        var r = 8 * this._len;
        if (r <= 4294967295) this._block.writeUInt32BE(r, this._blockSize - 4);
        else {
            var n = (4294967295 & r) >>> 0,
                i = (r - n) / 4294967296;
            this._block.writeUInt32BE(i, this._blockSize - 8), this._block.writeUInt32BE(n, this._blockSize - 4)
        }
        this._update(this._block);
        var o = this._hash();
        return t ? o.toString(t) : o
    }, i.prototype._update = function() {
        throw new Error("_update must be implemented by subclass")
    }, t.exports = i
}, function(t, e, r) {
    "use strict";
    t.exports = r(87)
}, function(t, e, r) {
    (function(t) {
        function r(t) {
            return Object.prototype.toString.call(t)
        }
        e.isArray = function(t) {
            return Array.isArray ? Array.isArray(t) : "[object Array]" === r(t)
        }, e.isBoolean = function(t) {
            return "boolean" === typeof t
        }, e.isNull = function(t) {
            return null === t
        }, e.isNullOrUndefined = function(t) {
            return null == t
        }, e.isNumber = function(t) {
            return "number" === typeof t
        }, e.isString = function(t) {
            return "string" === typeof t
        }, e.isSymbol = function(t) {
            return "symbol" === typeof t
        }, e.isUndefined = function(t) {
            return void 0 === t
        }, e.isRegExp = function(t) {
            return "[object RegExp]" === r(t)
        }, e.isObject = function(t) {
            return "object" === typeof t && null !== t
        }, e.isDate = function(t) {
            return "[object Date]" === r(t)
        }, e.isError = function(t) {
            return "[object Error]" === r(t) || t instanceof Error
        }, e.isFunction = function(t) {
            return "function" === typeof t
        }, e.isPrimitive = function(t) {
            return null === t || "boolean" === typeof t || "number" === typeof t || "string" === typeof t || "symbol" === typeof t || "undefined" === typeof t
        }, e.isBuffer = t.isBuffer
    }).call(this, r(8).Buffer)
}, function(t, e, r) {
    ! function(e) {
        "use strict";

        function r(t) {
            return parseInt(t) === t
        }

        function n(t) {
            if (!r(t.length)) return !1;
            for (var e = 0; e < t.length; e++)
                if (!r(t[e]) || t[e] < 0 || t[e] > 255) return !1;
            return !0
        }

        function i(t, e) {
            if (t.buffer && "Uint8Array" === t.name) return e && (t = t.slice ? t.slice() : Array.prototype.slice.call(t)), t;
            if (Array.isArray(t)) {
                if (!n(t)) throw new Error("Array contains invalid value: " + t);
                return new Uint8Array(t)
            }
            if (r(t.length) && n(t)) return new Uint8Array(t);
            throw new Error("unsupported array-like object")
        }

        function o(t) {
            return new Uint8Array(t)
        }

        function a(t, e, r, n, i) {
            null == n && null == i || (t = t.slice ? t.slice(n, i) : Array.prototype.slice.call(t, n, i)), e.set(t, r)
        }
        var s = function() {
                return {
                    toBytes: function(t) {
                        var e = [],
                            r = 0;
                        for (t = encodeURI(t); r < t.length;) {
                            var n = t.charCodeAt(r++);
                            37 === n ? (e.push(parseInt(t.substr(r, 2), 16)), r += 2) : e.push(n)
                        }
                        return i(e)
                    },
                    fromBytes: function(t) {
                        for (var e = [], r = 0; r < t.length;) {
                            var n = t[r];
                            n < 128 ? (e.push(String.fromCharCode(n)), r++) : n > 191 && n < 224 ? (e.push(String.fromCharCode((31 & n) << 6 | 63 & t[r + 1])), r += 2) : (e.push(String.fromCharCode((15 & n) << 12 | (63 & t[r + 1]) << 6 | 63 & t[r + 2])), r += 3)
                        }
                        return e.join("")
                    }
                }
            }(),
            u = function() {
                var t = "0123456789abcdef";
                return {
                    toBytes: function(t) {
                        for (var e = [], r = 0; r < t.length; r += 2) e.push(parseInt(t.substr(r, 2), 16));
                        return e
                    },
                    fromBytes: function(e) {
                        for (var r = [], n = 0; n < e.length; n++) {
                            var i = e[n];
                            r.push(t[(240 & i) >> 4] + t[15 & i])
                        }
                        return r.join("")
                    }
                }
            }(),
            c = {
                16: 10,
                24: 12,
                32: 14
            },
            f = [1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145],
            l = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22],
            h = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125],
            d = [3328402341, 4168907908, 4000806809, 4135287693, 4294111757, 3597364157, 3731845041, 2445657428, 1613770832, 33620227, 3462883241, 1445669757, 3892248089, 3050821474, 1303096294, 3967186586, 2412431941, 528646813, 2311702848, 4202528135, 4026202645, 2992200171, 2387036105, 4226871307, 1101901292, 3017069671, 1604494077, 1169141738, 597466303, 1403299063, 3832705686, 2613100635, 1974974402, 3791519004, 1033081774, 1277568618, 1815492186, 2118074177, 4126668546, 2211236943, 1748251740, 1369810420, 3521504564, 4193382664, 3799085459, 2883115123, 1647391059, 706024767, 134480908, 2512897874, 1176707941, 2646852446, 806885416, 932615841, 168101135, 798661301, 235341577, 605164086, 461406363, 3756188221, 3454790438, 1311188841, 2142417613, 3933566367, 302582043, 495158174, 1479289972, 874125870, 907746093, 3698224818, 3025820398, 1537253627, 2756858614, 1983593293, 3084310113, 2108928974, 1378429307, 3722699582, 1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436, 1075847264, 3825007647, 2041688520, 3059440621, 3563743934, 2378943302, 1740553945, 1916352843, 2487896798, 2555137236, 2958579944, 2244988746, 3151024235, 3320835882, 1336584933, 3992714006, 2252555205, 2588757463, 1714631509, 293963156, 2319795663, 3925473552, 67240454, 4269768577, 2689618160, 2017213508, 631218106, 1269344483, 2723238387, 1571005438, 2151694528, 93294474, 1066570413, 563977660, 1882732616, 4059428100, 1673313503, 2008463041, 2950355573, 1109467491, 537923632, 3858759450, 4260623118, 3218264685, 2177748300, 403442708, 638784309, 3287084079, 3193921505, 899127202, 2286175436, 773265209, 2479146071, 1437050866, 4236148354, 2050833735, 3362022572, 3126681063, 840505643, 3866325909, 3227541664, 427917720, 2655997905, 2749160575, 1143087718, 1412049534, 999329963, 193497219, 2353415882, 3354324521, 1807268051, 672404540, 2816401017, 3160301282, 369822493, 2916866934, 3688947771, 1681011286, 1949973070, 336202270, 2454276571, 201721354, 1210328172, 3093060836, 2680341085, 3184776046, 1135389935, 3294782118, 965841320, 831886756, 3554993207, 4068047243, 3588745010, 2345191491, 1849112409, 3664604599, 26054028, 2983581028, 2622377682, 1235855840, 3630984372, 2891339514, 4092916743, 3488279077, 3395642799, 4101667470, 1202630377, 268961816, 1874508501, 4034427016, 1243948399, 1546530418, 941366308, 1470539505, 1941222599, 2546386513, 3421038627, 2715671932, 3899946140, 1042226977, 2521517021, 1639824860, 227249030, 260737669, 3765465232, 2084453954, 1907733956, 3429263018, 2420656344, 100860677, 4160157185, 470683154, 3261161891, 1781871967, 2924959737, 1773779408, 394692241, 2579611992, 974986535, 664706745, 3655459128, 3958962195, 731420851, 571543859, 3530123707, 2849626480, 126783113, 865375399, 765172662, 1008606754, 361203602, 3387549984, 2278477385, 2857719295, 1344809080, 2782912378, 59542671, 1503764984, 160008576, 437062935, 1707065306, 3622233649, 2218934982, 3496503480, 2185314755, 697932208, 1512910199, 504303377, 2075177163, 2824099068, 1841019862, 739644986],
            p = [2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027, 2984144751, 1418839493, 1348481072, 50462977, 2848876391, 2102799147, 434634494, 1656084439, 3863849899, 2599188086, 1167051466, 2636087938, 1082771913, 2281340285, 368048890, 3954334041, 3381544775, 201060592, 3963727277, 1739838676, 4250903202, 3930435503, 3206782108, 4149453988, 2531553906, 1536934080, 3262494647, 484572669, 2923271059, 1783375398, 1517041206, 1098792767, 49674231, 1334037708, 1550332980, 4098991525, 886171109, 150598129, 2481090929, 1940642008, 1398944049, 1059722517, 201851908, 1385547719, 1699095331, 1587397571, 674240536, 2704774806, 252314885, 3039795866, 151914247, 908333586, 2602270848, 1038082786, 651029483, 1766729511, 3447698098, 2682942837, 454166793, 2652734339, 1951935532, 775166490, 758520603, 3000790638, 4004797018, 4217086112, 4137964114, 1299594043, 1639438038, 3464344499, 2068982057, 1054729187, 1901997871, 2534638724, 4121318227, 1757008337, 0, 750906861, 1614815264, 535035132, 3363418545, 3988151131, 3201591914, 1183697867, 3647454910, 1265776953, 3734260298, 3566750796, 3903871064, 1250283471, 1807470800, 717615087, 3847203498, 384695291, 3313910595, 3617213773, 1432761139, 2484176261, 3481945413, 283769337, 100925954, 2180939647, 4037038160, 1148730428, 3123027871, 3813386408, 4087501137, 4267549603, 3229630528, 2315620239, 2906624658, 3156319645, 1215313976, 82966005, 3747855548, 3245848246, 1974459098, 1665278241, 807407632, 451280895, 251524083, 1841287890, 1283575245, 337120268, 891687699, 801369324, 3787349855, 2721421207, 3431482436, 959321879, 1469301956, 4065699751, 2197585534, 1199193405, 2898814052, 3887750493, 724703513, 2514908019, 2696962144, 2551808385, 3516813135, 2141445340, 1715741218, 2119445034, 2872807568, 2198571144, 3398190662, 700968686, 3547052216, 1009259540, 2041044702, 3803995742, 487983883, 1991105499, 1004265696, 1449407026, 1316239930, 504629770, 3683797321, 168560134, 1816667172, 3837287516, 1570751170, 1857934291, 4014189740, 2797888098, 2822345105, 2754712981, 936633572, 2347923833, 852879335, 1133234376, 1500395319, 3084545389, 2348912013, 1689376213, 3533459022, 3762923945, 3034082412, 4205598294, 133428468, 634383082, 2949277029, 2398386810, 3913789102, 403703816, 3580869306, 2297460856, 1867130149, 1918643758, 607656988, 4049053350, 3346248884, 1368901318, 600565992, 2090982877, 2632479860, 557719327, 3717614411, 3697393085, 2249034635, 2232388234, 2430627952, 1115438654, 3295786421, 2865522278, 3633334344, 84280067, 33027830, 303828494, 2747425121, 1600795957, 4188952407, 3496589753, 2434238086, 1486471617, 658119965, 3106381470, 953803233, 334231800, 3005978776, 857870609, 3151128937, 1890179545, 2298973838, 2805175444, 3056442267, 574365214, 2450884487, 550103529, 1233637070, 4289353045, 2018519080, 2057691103, 2399374476, 4166623649, 2148108681, 387583245, 3664101311, 836232934, 3330556482, 3100665960, 3280093505, 2955516313, 2002398509, 287182607, 3413881008, 4238890068, 3597515707, 975967766],
            v = [1671808611, 2089089148, 2006576759, 2072901243, 4061003762, 1807603307, 1873927791, 3310653893, 810573872, 16974337, 1739181671, 729634347, 4263110654, 3613570519, 2883997099, 1989864566, 3393556426, 2191335298, 3376449993, 2106063485, 4195741690, 1508618841, 1204391495, 4027317232, 2917941677, 3563566036, 2734514082, 2951366063, 2629772188, 2767672228, 1922491506, 3227229120, 3082974647, 4246528509, 2477669779, 644500518, 911895606, 1061256767, 4144166391, 3427763148, 878471220, 2784252325, 3845444069, 4043897329, 1905517169, 3631459288, 827548209, 356461077, 67897348, 3344078279, 593839651, 3277757891, 405286936, 2527147926, 84871685, 2595565466, 118033927, 305538066, 2157648768, 3795705826, 3945188843, 661212711, 2999812018, 1973414517, 152769033, 2208177539, 745822252, 439235610, 455947803, 1857215598, 1525593178, 2700827552, 1391895634, 994932283, 3596728278, 3016654259, 695947817, 3812548067, 795958831, 2224493444, 1408607827, 3513301457, 0, 3979133421, 543178784, 4229948412, 2982705585, 1542305371, 1790891114, 3410398667, 3201918910, 961245753, 1256100938, 1289001036, 1491644504, 3477767631, 3496721360, 4012557807, 2867154858, 4212583931, 1137018435, 1305975373, 861234739, 2241073541, 1171229253, 4178635257, 33948674, 2139225727, 1357946960, 1011120188, 2679776671, 2833468328, 1374921297, 2751356323, 1086357568, 2408187279, 2460827538, 2646352285, 944271416, 4110742005, 3168756668, 3066132406, 3665145818, 560153121, 271589392, 4279952895, 4077846003, 3530407890, 3444343245, 202643468, 322250259, 3962553324, 1608629855, 2543990167, 1154254916, 389623319, 3294073796, 2817676711, 2122513534, 1028094525, 1689045092, 1575467613, 422261273, 1939203699, 1621147744, 2174228865, 1339137615, 3699352540, 577127458, 712922154, 2427141008, 2290289544, 1187679302, 3995715566, 3100863416, 339486740, 3732514782, 1591917662, 186455563, 3681988059, 3762019296, 844522546, 978220090, 169743370, 1239126601, 101321734, 611076132, 1558493276, 3260915650, 3547250131, 2901361580, 1655096418, 2443721105, 2510565781, 3828863972, 2039214713, 3878868455, 3359869896, 928607799, 1840765549, 2374762893, 3580146133, 1322425422, 2850048425, 1823791212, 1459268694, 4094161908, 3928346602, 1706019429, 2056189050, 2934523822, 135794696, 3134549946, 2022240376, 628050469, 779246638, 472135708, 2800834470, 3032970164, 3327236038, 3894660072, 3715932637, 1956440180, 522272287, 1272813131, 3185336765, 2340818315, 2323976074, 1888542832, 1044544574, 3049550261, 1722469478, 1222152264, 50660867, 4127324150, 236067854, 1638122081, 895445557, 1475980887, 3117443513, 2257655686, 3243809217, 489110045, 2662934430, 3778599393, 4162055160, 2561878936, 288563729, 1773916777, 3648039385, 2391345038, 2493985684, 2612407707, 505560094, 2274497927, 3911240169, 3460925390, 1442818645, 678973480, 3749357023, 2358182796, 2717407649, 2306869641, 219617805, 3218761151, 3862026214, 1120306242, 1756942440, 1103331905, 2578459033, 762796589, 252780047, 2966125488, 1425844308, 3151392187, 372911126],
            g = [1667474886, 2088535288, 2004326894, 2071694838, 4075949567, 1802223062, 1869591006, 3318043793, 808472672, 16843522, 1734846926, 724270422, 4278065639, 3621216949, 2880169549, 1987484396, 3402253711, 2189597983, 3385409673, 2105378810, 4210693615, 1499065266, 1195886990, 4042263547, 2913856577, 3570689971, 2728590687, 2947541573, 2627518243, 2762274643, 1920112356, 3233831835, 3082273397, 4261223649, 2475929149, 640051788, 909531756, 1061110142, 4160160501, 3435941763, 875846760, 2779116625, 3857003729, 4059105529, 1903268834, 3638064043, 825316194, 353713962, 67374088, 3351728789, 589522246, 3284360861, 404236336, 2526454071, 84217610, 2593830191, 117901582, 303183396, 2155911963, 3806477791, 3958056653, 656894286, 2998062463, 1970642922, 151591698, 2206440989, 741110872, 437923380, 454765878, 1852748508, 1515908788, 2694904667, 1381168804, 993742198, 3604373943, 3014905469, 690584402, 3823320797, 791638366, 2223281939, 1398011302, 3520161977, 0, 3991743681, 538992704, 4244381667, 2981218425, 1532751286, 1785380564, 3419096717, 3200178535, 960056178, 1246420628, 1280103576, 1482221744, 3486468741, 3503319995, 4025428677, 2863326543, 4227536621, 1128514950, 1296947098, 859002214, 2240123921, 1162203018, 4193849577, 33687044, 2139062782, 1347481760, 1010582648, 2678045221, 2829640523, 1364325282, 2745433693, 1077985408, 2408548869, 2459086143, 2644360225, 943212656, 4126475505, 3166494563, 3065430391, 3671750063, 555836226, 269496352, 4294908645, 4092792573, 3537006015, 3452783745, 202118168, 320025894, 3974901699, 1600119230, 2543297077, 1145359496, 387397934, 3301201811, 2812801621, 2122220284, 1027426170, 1684319432, 1566435258, 421079858, 1936954854, 1616945344, 2172753945, 1330631070, 3705438115, 572679748, 707427924, 2425400123, 2290647819, 1179044492, 4008585671, 3099120491, 336870440, 3739122087, 1583276732, 185277718, 3688593069, 3772791771, 842159716, 976899700, 168435220, 1229577106, 101059084, 606366792, 1549591736, 3267517855, 3553849021, 2897014595, 1650632388, 2442242105, 2509612081, 3840161747, 2038008818, 3890688725, 3368567691, 926374254, 1835907034, 2374863873, 3587531953, 1313788572, 2846482505, 1819063512, 1448540844, 4109633523, 3941213647, 1701162954, 2054852340, 2930698567, 134748176, 3132806511, 2021165296, 623210314, 774795868, 471606328, 2795958615, 3031746419, 3334885783, 3907527627, 3722280097, 1953799400, 522133822, 1263263126, 3183336545, 2341176845, 2324333839, 1886425312, 1044267644, 3048588401, 1718004428, 1212733584, 50529542, 4143317495, 235803164, 1633788866, 892690282, 1465383342, 3115962473, 2256965911, 3250673817, 488449850, 2661202215, 3789633753, 4177007595, 2560144171, 286339874, 1768537042, 3654906025, 2391705863, 2492770099, 2610673197, 505291324, 2273808917, 3924369609, 3469625735, 1431699370, 673740880, 3755965093, 2358021891, 2711746649, 2307489801, 218961690, 3217021541, 3873845719, 1111672452, 1751693520, 1094828930, 2576986153, 757954394, 252645662, 2964376443, 1414855848, 3149649517, 370555436],
            y = [1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753, 2902087851, 1273168787, 540080725, 2910219766, 2295101073, 4110568485, 1340463100, 3307916247, 641025152, 3043140495, 3736164937, 632953703, 1172967064, 1576976609, 3274667266, 2169303058, 2370213795, 1809054150, 59727847, 361929877, 3211623147, 2505202138, 3569255213, 1484005843, 1239443753, 2395588676, 1975683434, 4102977912, 2572697195, 666464733, 3202437046, 4035489047, 3374361702, 2110667444, 1675577880, 3843699074, 2538681184, 1649639237, 2976151520, 3144396420, 4269907996, 4178062228, 1883793496, 2403728665, 2497604743, 1383856311, 2876494627, 1917518562, 3810496343, 1716890410, 3001755655, 800440835, 2261089178, 3543599269, 807962610, 599762354, 33778362, 3977675356, 2328828971, 2809771154, 4077384432, 1315562145, 1708848333, 101039829, 3509871135, 3299278474, 875451293, 2733856160, 92987698, 2767645557, 193195065, 1080094634, 1584504582, 3178106961, 1042385657, 2531067453, 3711829422, 1306967366, 2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327, 2302690252, 1742315127, 2968011453, 126454664, 3877198648, 2043211483, 2709260871, 2084704233, 4169408201, 0, 159417987, 841739592, 504459436, 1817866830, 4245618683, 260388950, 1034867998, 908933415, 168810852, 1750902305, 2606453969, 607530554, 202008497, 2472011535, 3035535058, 463180190, 2160117071, 1641816226, 1517767529, 470948374, 3801332234, 3231722213, 1008918595, 303765277, 235474187, 4069246893, 766945465, 337553864, 1475418501, 2943682380, 4003061179, 2743034109, 4144047775, 1551037884, 1147550661, 1543208500, 2336434550, 3408119516, 3069049960, 3102011747, 3610369226, 1113818384, 328671808, 2227573024, 2236228733, 3535486456, 2935566865, 3341394285, 496906059, 3702665459, 226906860, 2009195472, 733156972, 2842737049, 294930682, 1206477858, 2835123396, 2700099354, 1451044056, 573804783, 2269728455, 3644379585, 2362090238, 2564033334, 2801107407, 2776292904, 3669462566, 1068351396, 742039012, 1350078989, 1784663195, 1417561698, 4136440770, 2430122216, 775550814, 2193862645, 2673705150, 1775276924, 1876241833, 3475313331, 3366754619, 270040487, 3902563182, 3678124923, 3441850377, 1851332852, 3969562369, 2203032232, 3868552805, 2868897406, 566021896, 4011190502, 3135740889, 1248802510, 3936291284, 699432150, 832877231, 708780849, 3332740144, 899835584, 1951317047, 4236429990, 3767586992, 866637845, 4043610186, 1106041591, 2144161806, 395441711, 1984812685, 1139781709, 3433712980, 3835036895, 2664543715, 1282050075, 3240894392, 1181045119, 2640243204, 25965917, 4203181171, 4211818798, 3009879386, 2463879762, 3910161971, 1842759443, 2597806476, 933301370, 1509430414, 3943906441, 3467192302, 3076639029, 3776767469, 2051518780, 2631065433, 1441952575, 404016761, 1942435775, 1408749034, 1610459739, 3745345300, 2017778566, 3400528769, 3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627, 4279080257, 967311729, 135050206, 3635733660, 1683407248, 2076935265, 3576870512, 1215061108, 3501741890],
            b = [1347548327, 1400783205, 3273267108, 2520393566, 3409685355, 4045380933, 2880240216, 2471224067, 1428173050, 4138563181, 2441661558, 636813900, 4233094615, 3620022987, 2149987652, 2411029155, 1239331162, 1730525723, 2554718734, 3781033664, 46346101, 310463728, 2743944855, 3328955385, 3875770207, 2501218972, 3955191162, 3667219033, 768917123, 3545789473, 692707433, 1150208456, 1786102409, 2029293177, 1805211710, 3710368113, 3065962831, 401639597, 1724457132, 3028143674, 409198410, 2196052529, 1620529459, 1164071807, 3769721975, 2226875310, 486441376, 2499348523, 1483753576, 428819965, 2274680428, 3075636216, 598438867, 3799141122, 1474502543, 711349675, 129166120, 53458370, 2592523643, 2782082824, 4063242375, 2988687269, 3120694122, 1559041666, 730517276, 2460449204, 4042459122, 2706270690, 3446004468, 3573941694, 533804130, 2328143614, 2637442643, 2695033685, 839224033, 1973745387, 957055980, 2856345839, 106852767, 1371368976, 4181598602, 1033297158, 2933734917, 1179510461, 3046200461, 91341917, 1862534868, 4284502037, 605657339, 2547432937, 3431546947, 2003294622, 3182487618, 2282195339, 954669403, 3682191598, 1201765386, 3917234703, 3388507166, 0, 2198438022, 1211247597, 2887651696, 1315723890, 4227665663, 1443857720, 507358933, 657861945, 1678381017, 560487590, 3516619604, 975451694, 2970356327, 261314535, 3535072918, 2652609425, 1333838021, 2724322336, 1767536459, 370938394, 182621114, 3854606378, 1128014560, 487725847, 185469197, 2918353863, 3106780840, 3356761769, 2237133081, 1286567175, 3152976349, 4255350624, 2683765030, 3160175349, 3309594171, 878443390, 1988838185, 3704300486, 1756818940, 1673061617, 3403100636, 272786309, 1075025698, 545572369, 2105887268, 4174560061, 296679730, 1841768865, 1260232239, 4091327024, 3960309330, 3497509347, 1814803222, 2578018489, 4195456072, 575138148, 3299409036, 446754879, 3629546796, 4011996048, 3347532110, 3252238545, 4270639778, 915985419, 3483825537, 681933534, 651868046, 2755636671, 3828103837, 223377554, 2607439820, 1649704518, 3270937875, 3901806776, 1580087799, 4118987695, 3198115200, 2087309459, 2842678573, 3016697106, 1003007129, 2802849917, 1860738147, 2077965243, 164439672, 4100872472, 32283319, 2827177882, 1709610350, 2125135846, 136428751, 3874428392, 3652904859, 3460984630, 3572145929, 3593056380, 2939266226, 824852259, 818324884, 3224740454, 930369212, 2801566410, 2967507152, 355706840, 1257309336, 4148292826, 243256656, 790073846, 2373340630, 1296297904, 1422699085, 3756299780, 3818836405, 457992840, 3099667487, 2135319889, 77422314, 1560382517, 1945798516, 788204353, 1521706781, 1385356242, 870912086, 325965383, 2358957921, 2050466060, 2388260884, 2313884476, 4006521127, 901210569, 3990953189, 1014646705, 1503449823, 1062597235, 2031621326, 3212035895, 3931371469, 1533017514, 350174575, 2256028891, 2177544179, 1052338372, 741876788, 1606591296, 1914052035, 213705253, 2334669897, 1107234197, 1899603969, 3725069491, 2631447780, 2422494913, 1635502980, 1893020342, 1950903388, 1120974935],
            m = [2807058932, 1699970625, 2764249623, 1586903591, 1808481195, 1173430173, 1487645946, 59984867, 4199882800, 1844882806, 1989249228, 1277555970, 3623636965, 3419915562, 1149249077, 2744104290, 1514790577, 459744698, 244860394, 3235995134, 1963115311, 4027744588, 2544078150, 4190530515, 1608975247, 2627016082, 2062270317, 1507497298, 2200818878, 567498868, 1764313568, 3359936201, 2305455554, 2037970062, 1047239e3, 1910319033, 1337376481, 2904027272, 2892417312, 984907214, 1243112415, 830661914, 861968209, 2135253587, 2011214180, 2927934315, 2686254721, 731183368, 1750626376, 4246310725, 1820824798, 4172763771, 3542330227, 48394827, 2404901663, 2871682645, 671593195, 3254988725, 2073724613, 145085239, 2280796200, 2779915199, 1790575107, 2187128086, 472615631, 3029510009, 4075877127, 3802222185, 4107101658, 3201631749, 1646252340, 4270507174, 1402811438, 1436590835, 3778151818, 3950355702, 3963161475, 4020912224, 2667994737, 273792366, 2331590177, 104699613, 95345982, 3175501286, 2377486676, 1560637892, 3564045318, 369057872, 4213447064, 3919042237, 1137477952, 2658625497, 1119727848, 2340947849, 1530455833, 4007360968, 172466556, 266959938, 516552836, 0, 2256734592, 3980931627, 1890328081, 1917742170, 4294704398, 945164165, 3575528878, 958871085, 3647212047, 2787207260, 1423022939, 775562294, 1739656202, 3876557655, 2530391278, 2443058075, 3310321856, 547512796, 1265195639, 437656594, 3121275539, 719700128, 3762502690, 387781147, 218828297, 3350065803, 2830708150, 2848461854, 428169201, 122466165, 3720081049, 1627235199, 648017665, 4122762354, 1002783846, 2117360635, 695634755, 3336358691, 4234721005, 4049844452, 3704280881, 2232435299, 574624663, 287343814, 612205898, 1039717051, 840019705, 2708326185, 793451934, 821288114, 1391201670, 3822090177, 376187827, 3113855344, 1224348052, 1679968233, 2361698556, 1058709744, 752375421, 2431590963, 1321699145, 3519142200, 2734591178, 188127444, 2177869557, 3727205754, 2384911031, 3215212461, 2648976442, 2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569, 2952102595, 2159976285, 2474404304, 766078933, 313773861, 2570832044, 2108100632, 1668212892, 3145456443, 2013908262, 418672217, 3070356634, 2594734927, 1852171925, 3867060991, 3473416636, 3907448597, 2614737639, 919489135, 164948639, 2094410160, 2997825956, 590424639, 2486224549, 1723872674, 3157750862, 3399941250, 3501252752, 3625268135, 2555048196, 3673637356, 1343127501, 4130281361, 3599595085, 2957853679, 1297403050, 81781910, 3051593425, 2283490410, 532201772, 1367295589, 3926170974, 895287692, 1953757831, 1093597963, 492483431, 3528626907, 1446242576, 1192455638, 1636604631, 209336225, 344873464, 1015671571, 669961897, 3375740769, 3857572124, 2973530695, 3747192018, 1933530610, 3464042516, 935293895, 3454686199, 2858115069, 1863638845, 3683022916, 4085369519, 3292445032, 875313188, 1080017571, 3279033885, 621591778, 1233856572, 2504130317, 24197544, 3017672716, 3835484340, 3247465558, 2220981195, 3060847922, 1551124588, 1463996600],
            w = [4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623, 4200115116, 3808662347, 821712160, 1986918061, 3430322568, 38544885, 3856137295, 718002117, 893681702, 1654886325, 2975484382, 3122358053, 3926825029, 4274053469, 796197571, 1290801793, 1184342925, 3556361835, 2405426947, 2459735317, 1836772287, 1381620373, 3196267988, 1948373848, 3764988233, 3385345166, 3263785589, 2390325492, 1480485785, 3111247143, 3780097726, 2293045232, 548169417, 3459953789, 3746175075, 439452389, 1362321559, 1400849762, 1685577905, 1806599355, 2174754046, 137073913, 1214797936, 1174215055, 3731654548, 2079897426, 1943217067, 1258480242, 529487843, 1437280870, 3945269170, 3049390895, 3313212038, 923313619, 679998e3, 3215307299, 57326082, 377642221, 3474729866, 2041877159, 133361907, 1776460110, 3673476453, 96392454, 878845905, 2801699524, 777231668, 4082475170, 2330014213, 4142626212, 2213296395, 1626319424, 1906247262, 1846563261, 562755902, 3708173718, 1040559837, 3871163981, 1418573201, 3294430577, 114585348, 1343618912, 2566595609, 3186202582, 1078185097, 3651041127, 3896688048, 2307622919, 425408743, 3371096953, 2081048481, 1108339068, 2216610296, 0, 2156299017, 736970802, 292596766, 1517440620, 251657213, 2235061775, 2933202493, 758720310, 265905162, 1554391400, 1532285339, 908999204, 174567692, 1474760595, 4002861748, 2610011675, 3234156416, 3693126241, 2001430874, 303699484, 2478443234, 2687165888, 585122620, 454499602, 151849742, 2345119218, 3064510765, 514443284, 4044981591, 1963412655, 2581445614, 2137062819, 19308535, 1928707164, 1715193156, 4219352155, 1126790795, 600235211, 3992742070, 3841024952, 836553431, 1669664834, 2535604243, 3323011204, 1243905413, 3141400786, 4180808110, 698445255, 2653899549, 2989552604, 2253581325, 3252932727, 3004591147, 1891211689, 2487810577, 3915653703, 4237083816, 4030667424, 2100090966, 865136418, 1229899655, 953270745, 3399679628, 3557504664, 4118925222, 2061379749, 3079546586, 2915017791, 983426092, 2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814, 3283088770, 1568718495, 3499326569, 3576539503, 621982671, 2895723464, 410887952, 2623762152, 1002142683, 645401037, 1494807662, 2595684844, 1335535747, 2507040230, 4293295786, 3167684641, 367585007, 3885750714, 1865862730, 2668221674, 2960971305, 2763173681, 1059270954, 2777952454, 2724642869, 1320957812, 2194319100, 2429595872, 2815956275, 77089521, 3973773121, 3444575871, 2448830231, 1305906550, 4021308739, 2857194700, 2516901860, 3518358430, 1787304780, 740276417, 1699839814, 1592394909, 2352307457, 2272556026, 188821243, 1729977011, 3687994002, 274084841, 3594982253, 3613494426, 2701949495, 4162096729, 322734571, 2837966542, 1640576439, 484830689, 1202797690, 3537852828, 4067639125, 349075736, 3342319475, 4157467219, 4255800159, 1030690015, 1155237496, 2951971274, 1757691577, 607398968, 2738905026, 499347990, 3794078908, 1011452712, 227885567, 2818666809, 213114376, 3034881240, 1455525988, 3414450555, 850817237, 1817998408, 3092726480],
            _ = [0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554, 708780849, 1883793496, 2118214995, 1817866830, 1649639237, 1215061108, 1181045119, 1417561698, 1517767529, 3767586992, 4003061179, 4236429990, 4069246893, 3635733660, 3602770327, 3299278474, 3400528769, 2430122216, 2664543715, 2362090238, 2193862645, 2835123396, 2801107407, 3035535058, 3135740889, 3678124923, 3576870512, 3341394285, 3374361702, 3810496343, 3977675356, 4279080257, 4043610186, 2876494627, 2776292904, 3076639029, 3110650942, 2472011535, 2640243204, 2403728665, 2169303058, 1001089995, 899835584, 666464733, 699432150, 59727847, 226906860, 530400753, 294930682, 1273168787, 1172967064, 1475418501, 1509430414, 1942435775, 2110667444, 1876241833, 1641816226, 2910219766, 2743034109, 2976151520, 3211623147, 2505202138, 2606453969, 2302690252, 2269728455, 3711829422, 3543599269, 3240894392, 3475313331, 3843699074, 3943906441, 4178062228, 4144047775, 1306967366, 1139781709, 1374988112, 1610459739, 1975683434, 2076935265, 1775276924, 1742315127, 1034867998, 866637845, 566021896, 800440835, 92987698, 193195065, 429456164, 395441711, 1984812685, 2017778566, 1784663195, 1683407248, 1315562145, 1080094634, 1383856311, 1551037884, 101039829, 135050206, 437757123, 337553864, 1042385657, 807962610, 573804783, 742039012, 2531067453, 2564033334, 2328828971, 2227573024, 2935566865, 2700099354, 3001755655, 3168937228, 3868552805, 3902563182, 4203181171, 4102977912, 3736164937, 3501741890, 3265478751, 3433712980, 1106041591, 1340463100, 1576976609, 1408749034, 2043211483, 2009195472, 1708848333, 1809054150, 832877231, 1068351396, 766945465, 599762354, 159417987, 126454664, 361929877, 463180190, 2709260871, 2943682380, 3178106961, 3009879386, 2572697195, 2538681184, 2236228733, 2336434550, 3509871135, 3745345300, 3441850377, 3274667266, 3910161971, 3877198648, 4110568485, 4211818798, 2597806476, 2497604743, 2261089178, 2295101073, 2733856160, 2902087851, 3202437046, 2968011453, 3936291284, 3835036895, 4136440770, 4169408201, 3535486456, 3702665459, 3467192302, 3231722213, 2051518780, 1951317047, 1716890410, 1750902305, 1113818384, 1282050075, 1584504582, 1350078989, 168810852, 67556463, 371049330, 404016761, 841739592, 1008918595, 775550814, 540080725, 3969562369, 3801332234, 4035489047, 4269907996, 3569255213, 3669462566, 3366754619, 3332740144, 2631065433, 2463879762, 2160117071, 2395588676, 2767645557, 2868897406, 3102011747, 3069049960, 202008497, 33778362, 270040487, 504459436, 875451293, 975658646, 675039627, 641025152, 2084704233, 1917518562, 1615861247, 1851332852, 1147550661, 1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972, 632953703, 260388950, 25965917, 328671808, 496906059, 1206477858, 1239443753, 1543208500, 1441952575, 2144161806, 1908694277, 1675577880, 1842759443, 3610369226, 3644379585, 3408119516, 3307916247, 4011190502, 3776767469, 4077384432, 4245618683, 2809771154, 2842737049, 3144396420, 3043140495, 2673705150, 2438237621, 2203032232, 2370213795],
            x = [0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694, 824852259, 1483753576, 1400783205, 1315723890, 1164071807, 1950903388, 2135319889, 1649704518, 1767536459, 2967507152, 3152976349, 2801566410, 2918353863, 2631447780, 2547432937, 2328143614, 2177544179, 3901806776, 3818836405, 4270639778, 4118987695, 3299409036, 3483825537, 3535072918, 3652904859, 2077965243, 1893020342, 1841768865, 1724457132, 1474502543, 1559041666, 1107234197, 1257309336, 598438867, 681933534, 901210569, 1052338372, 261314535, 77422314, 428819965, 310463728, 3409685355, 3224740454, 3710368113, 3593056380, 3875770207, 3960309330, 4045380933, 4195456072, 2471224067, 2554718734, 2237133081, 2388260884, 3212035895, 3028143674, 2842678573, 2724322336, 4138563181, 4255350624, 3769721975, 3955191162, 3667219033, 3516619604, 3431546947, 3347532110, 2933734917, 2782082824, 3099667487, 3016697106, 2196052529, 2313884476, 2499348523, 2683765030, 1179510461, 1296297904, 1347548327, 1533017514, 1786102409, 1635502980, 2087309459, 2003294622, 507358933, 355706840, 136428751, 53458370, 839224033, 957055980, 605657339, 790073846, 2373340630, 2256028891, 2607439820, 2422494913, 2706270690, 2856345839, 3075636216, 3160175349, 3573941694, 3725069491, 3273267108, 3356761769, 4181598602, 4063242375, 4011996048, 3828103837, 1033297158, 915985419, 730517276, 545572369, 296679730, 446754879, 129166120, 213705253, 1709610350, 1860738147, 1945798516, 2029293177, 1239331162, 1120974935, 1606591296, 1422699085, 4148292826, 4233094615, 3781033664, 3931371469, 3682191598, 3497509347, 3446004468, 3328955385, 2939266226, 2755636671, 3106780840, 2988687269, 2198438022, 2282195339, 2501218972, 2652609425, 1201765386, 1286567175, 1371368976, 1521706781, 1805211710, 1620529459, 2105887268, 1988838185, 533804130, 350174575, 164439672, 46346101, 870912086, 954669403, 636813900, 788204353, 2358957921, 2274680428, 2592523643, 2441661558, 2695033685, 2880240216, 3065962831, 3182487618, 3572145929, 3756299780, 3270937875, 3388507166, 4174560061, 4091327024, 4006521127, 3854606378, 1014646705, 930369212, 711349675, 560487590, 272786309, 457992840, 106852767, 223377554, 1678381017, 1862534868, 1914052035, 2031621326, 1211247597, 1128014560, 1580087799, 1428173050, 32283319, 182621114, 401639597, 486441376, 768917123, 651868046, 1003007129, 818324884, 1503449823, 1385356242, 1333838021, 1150208456, 1973745387, 2125135846, 1673061617, 1756818940, 2970356327, 3120694122, 2802849917, 2887651696, 2637442643, 2520393566, 2334669897, 2149987652, 3917234703, 3799141122, 4284502037, 4100872472, 3309594171, 3460984630, 3545789473, 3629546796, 2050466060, 1899603969, 1814803222, 1730525723, 1443857720, 1560382517, 1075025698, 1260232239, 575138148, 692707433, 878443390, 1062597235, 243256656, 91341917, 409198410, 325965383, 3403100636, 3252238545, 3704300486, 3620022987, 3874428392, 3990953189, 4042459122, 4227665663, 2460449204, 2578018489, 2226875310, 2411029155, 3198115200, 3046200461, 2827177882, 2743944855],
            E = [0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294, 590424639, 1750626376, 1699970625, 1917742170, 2135253587, 1551124588, 1367295589, 1180849278, 1265195639, 3501252752, 3720081049, 3399941250, 3350065803, 3835484340, 3919042237, 4270507174, 4085369519, 3102249176, 3051593425, 2734591178, 2952102595, 2361698556, 2177869557, 2530391278, 2614737639, 3145456443, 3060847922, 2708326185, 2892417312, 2404901663, 2187128086, 2504130317, 2555048196, 3542330227, 3727205754, 3375740769, 3292445032, 3876557655, 3926170974, 4246310725, 4027744588, 1808481195, 1723872674, 1910319033, 2094410160, 1608975247, 1391201670, 1173430173, 1224348052, 59984867, 244860394, 428169201, 344873464, 935293895, 984907214, 766078933, 547512796, 1844882806, 1627235199, 2011214180, 2062270317, 1507497298, 1423022939, 1137477952, 1321699145, 95345982, 145085239, 532201772, 313773861, 830661914, 1015671571, 731183368, 648017665, 3175501286, 2957853679, 2807058932, 2858115069, 2305455554, 2220981195, 2474404304, 2658625497, 3575528878, 3625268135, 3473416636, 3254988725, 3778151818, 3963161475, 4213447064, 4130281361, 3599595085, 3683022916, 3432737375, 3247465558, 3802222185, 4020912224, 4172763771, 4122762354, 3201631749, 3017672716, 2764249623, 2848461854, 2331590177, 2280796200, 2431590963, 2648976442, 104699613, 188127444, 472615631, 287343814, 840019705, 1058709744, 671593195, 621591778, 1852171925, 1668212892, 1953757831, 2037970062, 1514790577, 1463996600, 1080017571, 1297403050, 3673637356, 3623636965, 3235995134, 3454686199, 4007360968, 3822090177, 4107101658, 4190530515, 2997825956, 3215212461, 2830708150, 2779915199, 2256734592, 2340947849, 2627016082, 2443058075, 172466556, 122466165, 273792366, 492483431, 1047239e3, 861968209, 612205898, 695634755, 1646252340, 1863638845, 2013908262, 1963115311, 1446242576, 1530455833, 1277555970, 1093597963, 1636604631, 1820824798, 2073724613, 1989249228, 1436590835, 1487645946, 1337376481, 1119727848, 164948639, 81781910, 331544205, 516552836, 1039717051, 821288114, 669961897, 719700128, 2973530695, 3157750862, 2871682645, 2787207260, 2232435299, 2283490410, 2667994737, 2450346104, 3647212047, 3564045318, 3279033885, 3464042516, 3980931627, 3762502690, 4150144569, 4199882800, 3070356634, 3121275539, 2904027272, 2686254721, 2200818878, 2384911031, 2570832044, 2486224549, 3747192018, 3528626907, 3310321856, 3359936201, 3950355702, 3867060991, 4049844452, 4234721005, 1739656202, 1790575107, 2108100632, 1890328081, 1402811438, 1586903591, 1233856572, 1149249077, 266959938, 48394827, 369057872, 418672217, 1002783846, 919489135, 567498868, 752375421, 209336225, 24197544, 376187827, 459744698, 945164165, 895287692, 574624663, 793451934, 1679968233, 1764313568, 2117360635, 1933530610, 1343127501, 1560637892, 1243112415, 1192455638, 3704280881, 3519142200, 3336358691, 3419915562, 3907448597, 3857572124, 4075877127, 4294704398, 3029510009, 3113855344, 2927934315, 2744104290, 2159976285, 2377486676, 2594734927, 2544078150],
            S = [0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204, 1059270954, 1214797936, 1097159550, 1517440620, 1400849762, 1817998408, 1699839814, 2118541908, 2001430874, 2429595872, 2581445614, 2194319100, 2345119218, 3034881240, 3186202582, 2801699524, 2951971274, 3635996816, 3518358430, 3399679628, 3283088770, 4237083816, 4118925222, 4002861748, 3885750714, 1002142683, 850817237, 698445255, 548169417, 529487843, 377642221, 227885567, 77089521, 1943217067, 2061379749, 1640576439, 1757691577, 1474760595, 1592394909, 1174215055, 1290801793, 2875968315, 2724642869, 3111247143, 2960971305, 2405426947, 2253581325, 2638606623, 2487810577, 3808662347, 3926825029, 4044981591, 4162096729, 3342319475, 3459953789, 3576539503, 3693126241, 1986918061, 2137062819, 1685577905, 1836772287, 1381620373, 1532285339, 1078185097, 1229899655, 1040559837, 923313619, 740276417, 621982671, 439452389, 322734571, 137073913, 19308535, 3871163981, 4021308739, 4104605777, 4255800159, 3263785589, 3414450555, 3499326569, 3651041127, 2933202493, 2815956275, 3167684641, 3049390895, 2330014213, 2213296395, 2566595609, 2448830231, 1305906550, 1155237496, 1607244650, 1455525988, 1776460110, 1626319424, 2079897426, 1928707164, 96392454, 213114376, 396673818, 514443284, 562755902, 679998e3, 865136418, 983426092, 3708173718, 3557504664, 3474729866, 3323011204, 4180808110, 4030667424, 3945269170, 3794078908, 2507040230, 2623762152, 2272556026, 2390325492, 2975484382, 3092726480, 2738905026, 2857194700, 3973773121, 3856137295, 4274053469, 4157467219, 3371096953, 3252932727, 3673476453, 3556361835, 2763173681, 2915017791, 3064510765, 3215307299, 2156299017, 2307622919, 2459735317, 2610011675, 2081048481, 1963412655, 1846563261, 1729977011, 1480485785, 1362321559, 1243905413, 1126790795, 878845905, 1030690015, 645401037, 796197571, 274084841, 425408743, 38544885, 188821243, 3613494426, 3731654548, 3313212038, 3430322568, 4082475170, 4200115116, 3780097726, 3896688048, 2668221674, 2516901860, 2366882550, 2216610296, 3141400786, 2989552604, 2837966542, 2687165888, 1202797690, 1320957812, 1437280870, 1554391400, 1669664834, 1787304780, 1906247262, 2022837584, 265905162, 114585348, 499347990, 349075736, 736970802, 585122620, 972512814, 821712160, 2595684844, 2478443234, 2293045232, 2174754046, 3196267988, 3079546586, 2895723464, 2777952454, 3537852828, 3687994002, 3234156416, 3385345166, 4142626212, 4293295786, 3841024952, 3992742070, 174567692, 57326082, 410887952, 292596766, 777231668, 660510266, 1011452712, 893681702, 1108339068, 1258480242, 1343618912, 1494807662, 1715193156, 1865862730, 1948373848, 2100090966, 2701949495, 2818666809, 3004591147, 3122358053, 2235061775, 2352307457, 2535604243, 2653899549, 3915653703, 3764988233, 4219352155, 4067639125, 3444575871, 3294430577, 3746175075, 3594982253, 836553431, 953270745, 600235211, 718002117, 367585007, 484830689, 133361907, 251657213, 2041877159, 1891211689, 1806599355, 1654886325, 1568718495, 1418573201, 1335535747, 1184342925];

        function k(t) {
            for (var e = [], r = 0; r < t.length; r += 4) e.push(t[r] << 24 | t[r + 1] << 16 | t[r + 2] << 8 | t[r + 3]);
            return e
        }
        var A = function t(e) {
            if (!(this instanceof t)) throw Error("AES must be instanitated with `new`");
            Object.defineProperty(this, "key", {
                value: i(e, !0)
            }), this._prepare()
        };
        A.prototype._prepare = function() {
            var t = c[this.key.length];
            if (null == t) throw new Error("invalid key size (must be 16, 24 or 32 bytes)");
            this._Ke = [], this._Kd = [];
            for (var e = 0; e <= t; e++) this._Ke.push([0, 0, 0, 0]), this._Kd.push([0, 0, 0, 0]);
            var r, n = 4 * (t + 1),
                i = this.key.length / 4,
                o = k(this.key);
            for (e = 0; e < i; e++) r = e >> 2, this._Ke[r][e % 4] = o[e], this._Kd[t - r][e % 4] = o[e];
            for (var a, s = 0, u = i; u < n;) {
                if (a = o[i - 1], o[0] ^= l[a >> 16 & 255] << 24 ^ l[a >> 8 & 255] << 16 ^ l[255 & a] << 8 ^ l[a >> 24 & 255] ^ f[s] << 24, s += 1, 8 != i)
                    for (e = 1; e < i; e++) o[e] ^= o[e - 1];
                else {
                    for (e = 1; e < i / 2; e++) o[e] ^= o[e - 1];
                    a = o[i / 2 - 1], o[i / 2] ^= l[255 & a] ^ l[a >> 8 & 255] << 8 ^ l[a >> 16 & 255] << 16 ^ l[a >> 24 & 255] << 24;
                    for (e = i / 2 + 1; e < i; e++) o[e] ^= o[e - 1]
                }
                for (e = 0; e < i && u < n;) h = u >> 2, d = u % 4, this._Ke[h][d] = o[e], this._Kd[t - h][d] = o[e++], u++
            }
            for (var h = 1; h < t; h++)
                for (var d = 0; d < 4; d++) a = this._Kd[h][d], this._Kd[h][d] = _[a >> 24 & 255] ^ x[a >> 16 & 255] ^ E[a >> 8 & 255] ^ S[255 & a]
        }, A.prototype.encrypt = function(t) {
            if (16 != t.length) throw new Error("invalid plaintext size (must be 16 bytes)");
            for (var e = this._Ke.length - 1, r = [0, 0, 0, 0], n = k(t), i = 0; i < 4; i++) n[i] ^= this._Ke[0][i];
            for (var a = 1; a < e; a++) {
                for (i = 0; i < 4; i++) r[i] = d[n[i] >> 24 & 255] ^ p[n[(i + 1) % 4] >> 16 & 255] ^ v[n[(i + 2) % 4] >> 8 & 255] ^ g[255 & n[(i + 3) % 4]] ^ this._Ke[a][i];
                n = r.slice()
            }
            var s, u = o(16);
            for (i = 0; i < 4; i++) s = this._Ke[e][i], u[4 * i] = 255 & (l[n[i] >> 24 & 255] ^ s >> 24), u[4 * i + 1] = 255 & (l[n[(i + 1) % 4] >> 16 & 255] ^ s >> 16), u[4 * i + 2] = 255 & (l[n[(i + 2) % 4] >> 8 & 255] ^ s >> 8), u[4 * i + 3] = 255 & (l[255 & n[(i + 3) % 4]] ^ s);
            return u
        }, A.prototype.decrypt = function(t) {
            if (16 != t.length) throw new Error("invalid ciphertext size (must be 16 bytes)");
            for (var e = this._Kd.length - 1, r = [0, 0, 0, 0], n = k(t), i = 0; i < 4; i++) n[i] ^= this._Kd[0][i];
            for (var a = 1; a < e; a++) {
                for (i = 0; i < 4; i++) r[i] = y[n[i] >> 24 & 255] ^ b[n[(i + 3) % 4] >> 16 & 255] ^ m[n[(i + 2) % 4] >> 8 & 255] ^ w[255 & n[(i + 1) % 4]] ^ this._Kd[a][i];
                n = r.slice()
            }
            var s, u = o(16);
            for (i = 0; i < 4; i++) s = this._Kd[e][i], u[4 * i] = 255 & (h[n[i] >> 24 & 255] ^ s >> 24), u[4 * i + 1] = 255 & (h[n[(i + 3) % 4] >> 16 & 255] ^ s >> 16), u[4 * i + 2] = 255 & (h[n[(i + 2) % 4] >> 8 & 255] ^ s >> 8), u[4 * i + 3] = 255 & (h[255 & n[(i + 1) % 4]] ^ s);
            return u
        };
        var O = function t(e) {
            if (!(this instanceof t)) throw Error("AES must be instanitated with `new`");
            this.description = "Electronic Code Block", this.name = "ecb", this._aes = new A(e)
        };
        O.prototype.encrypt = function(t) {
            if ((t = i(t)).length % 16 !== 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
            for (var e = o(t.length), r = o(16), n = 0; n < t.length; n += 16) a(t, r, 0, n, n + 16), a(r = this._aes.encrypt(r), e, n);
            return e
        }, O.prototype.decrypt = function(t) {
            if ((t = i(t)).length % 16 !== 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
            for (var e = o(t.length), r = o(16), n = 0; n < t.length; n += 16) a(t, r, 0, n, n + 16), a(r = this._aes.decrypt(r), e, n);
            return e
        };
        var I = function t(e, r) {
            if (!(this instanceof t)) throw Error("AES must be instanitated with `new`");
            if (this.description = "Cipher Block Chaining", this.name = "cbc", r) {
                if (16 != r.length) throw new Error("invalid initialation vector size (must be 16 bytes)")
            } else r = o(16);
            this._lastCipherblock = i(r, !0), this._aes = new A(e)
        };
        I.prototype.encrypt = function(t) {
            if ((t = i(t)).length % 16 !== 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
            for (var e = o(t.length), r = o(16), n = 0; n < t.length; n += 16) {
                a(t, r, 0, n, n + 16);
                for (var s = 0; s < 16; s++) r[s] ^= this._lastCipherblock[s];
                this._lastCipherblock = this._aes.encrypt(r), a(this._lastCipherblock, e, n)
            }
            return e
        }, I.prototype.decrypt = function(t) {
            if ((t = i(t)).length % 16 !== 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
            for (var e = o(t.length), r = o(16), n = 0; n < t.length; n += 16) {
                a(t, r, 0, n, n + 16), r = this._aes.decrypt(r);
                for (var s = 0; s < 16; s++) e[n + s] = r[s] ^ this._lastCipherblock[s];
                a(t, this._lastCipherblock, 0, n, n + 16)
            }
            return e
        };
        var T = function t(e, r, n) {
            if (!(this instanceof t)) throw Error("AES must be instanitated with `new`");
            if (this.description = "Cipher Feedback", this.name = "cfb", r) {
                if (16 != r.length) throw new Error("invalid initialation vector size (must be 16 size)")
            } else r = o(16);
            n || (n = 1), this.segmentSize = n, this._shiftRegister = i(r, !0), this._aes = new A(e)
        };
        T.prototype.encrypt = function(t) {
            if (t.length % this.segmentSize != 0) throw new Error("invalid plaintext size (must be segmentSize bytes)");
            for (var e, r = i(t, !0), n = 0; n < r.length; n += this.segmentSize) {
                e = this._aes.encrypt(this._shiftRegister);
                for (var o = 0; o < this.segmentSize; o++) r[n + o] ^= e[o];
                a(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), a(r, this._shiftRegister, 16 - this.segmentSize, n, n + this.segmentSize)
            }
            return r
        }, T.prototype.decrypt = function(t) {
            if (t.length % this.segmentSize != 0) throw new Error("invalid ciphertext size (must be segmentSize bytes)");
            for (var e, r = i(t, !0), n = 0; n < r.length; n += this.segmentSize) {
                e = this._aes.encrypt(this._shiftRegister);
                for (var o = 0; o < this.segmentSize; o++) r[n + o] ^= e[o];
                a(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), a(t, this._shiftRegister, 16 - this.segmentSize, n, n + this.segmentSize)
            }
            return r
        };
        var j = function t(e, r) {
            if (!(this instanceof t)) throw Error("AES must be instanitated with `new`");
            if (this.description = "Output Feedback", this.name = "ofb", r) {
                if (16 != r.length) throw new Error("invalid initialation vector size (must be 16 bytes)")
            } else r = o(16);
            this._lastPrecipher = i(r, !0), this._lastPrecipherIndex = 16, this._aes = new A(e)
        };
        j.prototype.encrypt = function(t) {
            for (var e = i(t, !0), r = 0; r < e.length; r++) 16 === this._lastPrecipherIndex && (this._lastPrecipher = this._aes.encrypt(this._lastPrecipher), this._lastPrecipherIndex = 0), e[r] ^= this._lastPrecipher[this._lastPrecipherIndex++];
            return e
        }, j.prototype.decrypt = j.prototype.encrypt;
        var R = function t(e) {
            if (!(this instanceof t)) throw Error("Counter must be instanitated with `new`");
            0 === e || e || (e = 1), "number" === typeof e ? (this._counter = o(16), this.setValue(e)) : this.setBytes(e)
        };
        R.prototype.setValue = function(t) {
            if ("number" !== typeof t || parseInt(t) != t) throw new Error("invalid counter value (must be an integer)");
            if (t > Number.MAX_SAFE_INTEGER) throw new Error("integer value out of safe range");
            for (var e = 15; e >= 0; --e) this._counter[e] = t % 256, t = parseInt(t / 256)
        }, R.prototype.setBytes = function(t) {
            if (16 != (t = i(t, !0)).length) throw new Error("invalid counter bytes size (must be 16 bytes)");
            this._counter = t
        }, R.prototype.increment = function() {
            for (var t = 15; t >= 0; t--) {
                if (255 !== this._counter[t]) {
                    this._counter[t]++;
                    break
                }
                this._counter[t] = 0
            }
        };
        var C = function t(e, r) {
            if (!(this instanceof t)) throw Error("AES must be instanitated with `new`");
            this.description = "Counter", this.name = "ctr", r instanceof R || (r = new R(r)), this._counter = r, this._remainingCounter = null, this._remainingCounterIndex = 16, this._aes = new A(e)
        };
        C.prototype.encrypt = function(t) {
            for (var e = i(t, !0), r = 0; r < e.length; r++) 16 === this._remainingCounterIndex && (this._remainingCounter = this._aes.encrypt(this._counter._counter), this._remainingCounterIndex = 0, this._counter.increment()), e[r] ^= this._remainingCounter[this._remainingCounterIndex++];
            return e
        }, C.prototype.decrypt = C.prototype.encrypt;
        var N = {
            AES: A,
            Counter: R,
            ModeOfOperation: {
                ecb: O,
                cbc: I,
                cfb: T,
                ofb: j,
                ctr: C
            },
            utils: {
                hex: u,
                utf8: s
            },
            padding: {
                pkcs7: {
                    pad: function(t) {
                        var e = 16 - (t = i(t, !0)).length % 16,
                            r = o(t.length + e);
                        a(t, r);
                        for (var n = t.length; n < r.length; n++) r[n] = e;
                        return r
                    },
                    strip: function(t) {
                        if ((t = i(t, !0)).length < 16) throw new Error("PKCS#7 invalid length");
                        var e = t[t.length - 1];
                        if (e > 16) throw new Error("PKCS#7 padding byte out of range");
                        for (var r = t.length - e, n = 0; n < e; n++)
                            if (t[r + n] !== e) throw new Error("PKCS#7 invalid padding byte");
                        var s = o(r);
                        return a(t, s, 0, 0, r), s
                    }
                }
            },
            _arrayTest: {
                coerceArray: i,
                createArray: o,
                copyArray: a
            }
        };
        t.exports = N
    }()
}, function(t, e, r) {
    "use strict";
    var n = r(11),
        i = r(11).buildOptions,
        o = r(65),
        a = {
            OPENING: 1,
            CLOSING: 2,
            SELF: 3,
            CDATA: 4
        },
        s = "<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|(([\\w:\\-._]*:)?([\\w:\\-._]+))([^>]*)>|((\\/)(([\\w:\\-._]*:)?([\\w:\\-._]+))\\s*>))([^<]*)";
    !Number.parseInt && window.parseInt && (Number.parseInt = window.parseInt), !Number.parseFloat && window.parseFloat && (Number.parseFloat = window.parseFloat);
    var u = {
        attributeNamePrefix: "@_",
        attrNodeName: !1,
        textNodeName: "#text",
        ignoreAttributes: !0,
        ignoreNameSpace: !1,
        allowBooleanAttributes: !1,
        parseNodeValue: !0,
        parseAttributeValue: !1,
        arrayMode: !1,
        trimValues: !0,
        cdataTagName: !1,
        cdataPositionChar: "\\c",
        localeRange: "",
        tagValueProcessor: function(t) {
            return t
        },
        attrValueProcessor: function(t) {
            return t
        },
        stopNodes: []
    };
    e.defaultOptions = u;
    var c = ["attributeNamePrefix", "attrNodeName", "textNodeName", "ignoreAttributes", "ignoreNameSpace", "allowBooleanAttributes", "parseNodeValue", "parseAttributeValue", "arrayMode", "trimValues", "cdataTagName", "cdataPositionChar", "localeRange", "tagValueProcessor", "attrValueProcessor", "parseTrueNumberOnly", "stopNodes"];
    e.props = c;

    function f(t, e) {
        return t && (e.trimValues && (t = t.trim()), t = h(t = e.tagValueProcessor(t), e.parseNodeValue, e.parseTrueNumberOnly)), t
    }

    function l(t, e) {
        if (e.ignoreNameSpace) {
            var r = t.split(":"),
                n = "/" === t.charAt(0) ? "/" : "";
            if ("xmlns" === r[0]) return "";
            2 === r.length && (t = n + r[1])
        }
        return t
    }

    function h(t, e, r) {
        var i;
        return e && "string" === typeof t ? ("" === t.trim() || isNaN(t) ? i = "true" === t || "false" !== t && t : (i = -1 !== t.indexOf("0x") ? Number.parseInt(t, 16) : -1 !== t.indexOf(".") ? Number.parseFloat(t) : Number.parseInt(t, 10), r && (i = String(i) === t ? i : t)), i) : n.isExist(t) ? t : ""
    }
    var d = new RegExp("([^\\s=]+)\\s*(=\\s*(['\"])(.*?)\\3)?", "g");

    function p(t, e) {
        if (!e.ignoreAttributes && "string" === typeof t) {
            t = t.replace(/\r?\n/g, " ");
            for (var r = n.getAllMatches(t, d), i = r.length, o = {}, a = 0; a < i; a++) {
                var s = l(r[a][1], e);
                s.length && (void 0 !== r[a][4] ? (e.trimValues && (r[a][4] = r[a][4].trim()), r[a][4] = e.attrValueProcessor(r[a][4]), o[e.attributeNamePrefix + s] = h(r[a][4], e.parseAttributeValue, e.parseTrueNumberOnly)) : e.allowBooleanAttributes && (o[e.attributeNamePrefix + s] = !0))
            }
            if (!Object.keys(o).length) return;
            if (e.attrNodeName) {
                var u = {};
                return u[e.attrNodeName] = o, u
            }
            return o
        }
    }
    e.getTraversalObj = function(t, e) {
        e = i(e, u, c), t = t.replace(/<!--[\s\S]*?-->/g, "");
        var r = new o("!xml"),
            l = r;
        s = s.replace(/\[\\w/g, "[" + e.localeRange + "\\w");
        for (var h = new RegExp(s, "g"), d = h.exec(t), v = h.exec(t); d;) {
            var g = "]]>" === (w = d)[4] ? a.CDATA : "/" === w[10] ? a.CLOSING : "undefined" !== typeof w[8] && "/" === w[8].substr(w[8].length - 1) ? a.SELF : a.OPENING;
            if (g === a.CLOSING) l.parent && d[14] && (l.parent.val = n.getValue(l.parent.val) + "" + f(d[14], e)), e.stopNodes.length && e.stopNodes.includes(l.tagname) && (l.child = [], void 0 == l.attrsMap && (l.attrsMap = {}), l.val = t.substr(l.startIndex + 1, d.index - l.startIndex - 1)), l = l.parent;
            else if (g === a.CDATA)
                if (e.cdataTagName) {
                    var y = new o(e.cdataTagName, l, d[3]);
                    y.attrsMap = p(d[8], e), l.addChild(y), l.val = n.getValue(l.val) + e.cdataPositionChar, d[14] && (l.val += f(d[14], e))
                } else l.val = (l.val || "") + (d[3] || "") + f(d[14], e);
            else if (g === a.SELF) {
                l && d[14] && (l.val = n.getValue(l.val) + "" + f(d[14], e));
                var b = new o(e.ignoreNameSpace ? d[7] : d[5], l, "");
                d[8] && d[8].length > 0 && (d[8] = d[8].substr(0, d[8].length - 1)), b.attrsMap = p(d[8], e), l.addChild(b)
            } else {
                var m = new o(e.ignoreNameSpace ? d[7] : d[5], l, f(d[14], e));
                e.stopNodes.length && e.stopNodes.includes(m.tagname) && (m.startIndex = d.index + d[1].length), m.attrsMap = p(d[8], e), l.addChild(m), l = m
            }
            d = v, v = h.exec(t)
        }
        var w;
        return r
    }
}, function(t, e, r) {
    "use strict";
    (function(e) {
        "undefined" === typeof e || !e.version || 0 === e.version.indexOf("v0.") || 0 === e.version.indexOf("v1.") && 0 !== e.version.indexOf("v1.8.") ? t.exports = {
            nextTick: function(t, r, n, i) {
                if ("function" !== typeof t) throw new TypeError('"callback" argument must be a function');
                var o, a, s = arguments.length;
                switch (s) {
                    case 0:
                    case 1:
                        return e.nextTick(t);
                    case 2:
                        return e.nextTick(function() {
                            t.call(null, r)
                        });
                    case 3:
                        return e.nextTick(function() {
                            t.call(null, r, n)
                        });
                    case 4:
                        return e.nextTick(function() {
                            t.call(null, r, n, i)
                        });
                    default:
                        for (o = new Array(s - 1), a = 0; a < o.length;) o[a++] = arguments[a];
                        return e.nextTick(function() {
                            t.apply(null, o)
                        })
                }
            }
        } : t.exports = e
    }).call(this, r(12))
}, function(t, e, r) {
    "use strict";

    function n(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }
    r.d(e, "a", function() {
        return n
    })
}, function(t, e, r) {
    "use strict";
    (function(t) {
        r.d(e, "b", function() {
            return o
        }), r.d(e, "a", function() {
            return a
        });
        var n = r(17),
            i = r.n(n);

        function o(e, r) {
            return new Promise(function(n, o) {
                try {
                    var a = new i.a.ModeOfOperation.ecb(r),
                        s = t.from(e, "utf8"),
                        u = a.encrypt(i.a.padding.pkcs7.pad(s));
                    n(t.from(u))
                } catch (c) {
                    o(c)
                }
            })
        }

        function a(e, r) {
            return new Promise(function(n, o) {
                try {
                    var a = new i.a.ModeOfOperation.ecb(r),
                        s = i.a.padding.pkcs7.strip(a.decrypt(e));
                    n(t.from(s).toString("utf8"))
                } catch (u) {
                    o(u)
                }
            })
        }
    }).call(this, r(8).Buffer)
}, function(t, e, r) {
    "use strict";
    var n = r(46);
    r.d(e, "createSyncMiddleware", function() {
        return n.a
    });
    var i = r(47);
    r.d(e, "createChromeStateSyncAPI", function() {
        return i.a
    });
    r(48)
}, function(t, e, r) {
    "use strict";
    var n, i = "object" === typeof Reflect ? Reflect : null,
        o = i && "function" === typeof i.apply ? i.apply : function(t, e, r) {
            return Function.prototype.apply.call(t, e, r)
        };
    n = i && "function" === typeof i.ownKeys ? i.ownKeys : Object.getOwnPropertySymbols ? function(t) {
        return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
    } : function(t) {
        return Object.getOwnPropertyNames(t)
    };
    var a = Number.isNaN || function(t) {
        return t !== t
    };

    function s() {
        s.init.call(this)
    }
    t.exports = s, s.EventEmitter = s, s.prototype._events = void 0, s.prototype._eventsCount = 0, s.prototype._maxListeners = void 0;
    var u = 10;

    function c(t) {
        return void 0 === t._maxListeners ? s.defaultMaxListeners : t._maxListeners
    }

    function f(t, e, r, n) {
        var i, o, a, s;
        if ("function" !== typeof r) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof r);
        if (void 0 === (o = t._events) ? (o = t._events = Object.create(null), t._eventsCount = 0) : (void 0 !== o.newListener && (t.emit("newListener", e, r.listener ? r.listener : r), o = t._events), a = o[e]), void 0 === a) a = o[e] = r, ++t._eventsCount;
        else if ("function" === typeof a ? a = o[e] = n ? [r, a] : [a, r] : n ? a.unshift(r) : a.push(r), (i = c(t)) > 0 && a.length > i && !a.warned) {
            a.warned = !0;
            var u = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            u.name = "MaxListenersExceededWarning", u.emitter = t, u.type = e, u.count = a.length, s = u, console && console.warn && console.warn(s)
        }
        return t
    }

    function l(t, e, r) {
        var n = {
                fired: !1,
                wrapFn: void 0,
                target: t,
                type: e,
                listener: r
            },
            i = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t.push(arguments[e]);
                this.fired || (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, o(this.listener, this.target, t))
            }.bind(n);
        return i.listener = r, n.wrapFn = i, i
    }

    function h(t, e, r) {
        var n = t._events;
        if (void 0 === n) return [];
        var i = n[e];
        return void 0 === i ? [] : "function" === typeof i ? r ? [i.listener || i] : [i] : r ? function(t) {
            for (var e = new Array(t.length), r = 0; r < e.length; ++r) e[r] = t[r].listener || t[r];
            return e
        }(i) : p(i, i.length)
    }

    function d(t) {
        var e = this._events;
        if (void 0 !== e) {
            var r = e[t];
            if ("function" === typeof r) return 1;
            if (void 0 !== r) return r.length
        }
        return 0
    }

    function p(t, e) {
        for (var r = new Array(e), n = 0; n < e; ++n) r[n] = t[n];
        return r
    }
    Object.defineProperty(s, "defaultMaxListeners", {
        enumerable: !0,
        get: function() {
            return u
        },
        set: function(t) {
            if ("number" !== typeof t || t < 0 || a(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
            u = t
        }
    }), s.init = function() {
        void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
    }, s.prototype.setMaxListeners = function(t) {
        if ("number" !== typeof t || t < 0 || a(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
        return this._maxListeners = t, this
    }, s.prototype.getMaxListeners = function() {
        return c(this)
    }, s.prototype.emit = function(t) {
        for (var e = [], r = 1; r < arguments.length; r++) e.push(arguments[r]);
        var n = "error" === t,
            i = this._events;
        if (void 0 !== i) n = n && void 0 === i.error;
        else if (!n) return !1;
        if (n) {
            var a;
            if (e.length > 0 && (a = e[0]), a instanceof Error) throw a;
            var s = new Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
            throw s.context = a, s
        }
        var u = i[t];
        if (void 0 === u) return !1;
        if ("function" === typeof u) o(u, this, e);
        else {
            var c = u.length,
                f = p(u, c);
            for (r = 0; r < c; ++r) o(f[r], this, e)
        }
        return !0
    }, s.prototype.addListener = function(t, e) {
        return f(this, t, e, !1)
    }, s.prototype.on = s.prototype.addListener, s.prototype.prependListener = function(t, e) {
        return f(this, t, e, !0)
    }, s.prototype.once = function(t, e) {
        if ("function" !== typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
        return this.on(t, l(this, t, e)), this
    }, s.prototype.prependOnceListener = function(t, e) {
        if ("function" !== typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
        return this.prependListener(t, l(this, t, e)), this
    }, s.prototype.removeListener = function(t, e) {
        var r, n, i, o, a;
        if ("function" !== typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
        if (void 0 === (n = this._events)) return this;
        if (void 0 === (r = n[t])) return this;
        if (r === e || r.listener === e) 0 === --this._eventsCount ? this._events = Object.create(null) : (delete n[t], n.removeListener && this.emit("removeListener", t, r.listener || e));
        else if ("function" !== typeof r) {
            for (i = -1, o = r.length - 1; o >= 0; o--)
                if (r[o] === e || r[o].listener === e) {
                    a = r[o].listener, i = o;
                    break
                } if (i < 0) return this;
            0 === i ? r.shift() : function(t, e) {
                for (; e + 1 < t.length; e++) t[e] = t[e + 1];
                t.pop()
            }(r, i), 1 === r.length && (n[t] = r[0]), void 0 !== n.removeListener && this.emit("removeListener", t, a || e)
        }
        return this
    }, s.prototype.off = s.prototype.removeListener, s.prototype.removeAllListeners = function(t) {
        var e, r, n;
        if (void 0 === (r = this._events)) return this;
        if (void 0 === r.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== r[t] && (0 === --this._eventsCount ? this._events = Object.create(null) : delete r[t]), this;
        if (0 === arguments.length) {
            var i, o = Object.keys(r);
            for (n = 0; n < o.length; ++n) "removeListener" !== (i = o[n]) && this.removeAllListeners(i);
            return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
        }
        if ("function" === typeof(e = r[t])) this.removeListener(t, e);
        else if (void 0 !== e)
            for (n = e.length - 1; n >= 0; n--) this.removeListener(t, e[n]);
        return this
    }, s.prototype.listeners = function(t) {
        return h(this, t, !0)
    }, s.prototype.rawListeners = function(t) {
        return h(this, t, !1)
    }, s.listenerCount = function(t, e) {
        return "function" === typeof t.listenerCount ? t.listenerCount(e) : d.call(t, e)
    }, s.prototype.listenerCount = d, s.prototype.eventNames = function() {
        return this._eventsCount > 0 ? n(this._events) : []
    }
}, function(t, e, r) {
    (e = t.exports = r(41)).Stream = e, e.Readable = e, e.Writable = r(26), e.Duplex = r(13), e.Transform = r(45), e.PassThrough = r(81)
}, function(t, e, r) {
    var n = r(8),
        i = n.Buffer;

    function o(t, e) {
        for (var r in t) e[r] = t[r]
    }

    function a(t, e, r) {
        return i(t, e, r)
    }
    i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? t.exports = n : (o(n, e), e.Buffer = a), o(i, a), a.from = function(t, e, r) {
        if ("number" === typeof t) throw new TypeError("Argument must not be a number");
        return i(t, e, r)
    }, a.alloc = function(t, e, r) {
        if ("number" !== typeof t) throw new TypeError("Argument must be a number");
        var n = i(t);
        return void 0 !== e ? "string" === typeof r ? n.fill(e, r) : n.fill(e) : n.fill(0), n
    }, a.allocUnsafe = function(t) {
        if ("number" !== typeof t) throw new TypeError("Argument must be a number");
        return i(t)
    }, a.allocUnsafeSlow = function(t) {
        if ("number" !== typeof t) throw new TypeError("Argument must be a number");
        return n.SlowBuffer(t)
    }
}, function(t, e, r) {
    "use strict";
    (function(e, n, i) {
        var o = r(19);

        function a(t) {
            var e = this;
            this.next = null, this.entry = null, this.finish = function() {
                ! function(t, e, r) {
                    var n = t.entry;
                    t.entry = null;
                    for (; n;) {
                        var i = n.callback;
                        e.pendingcb--, i(r), n = n.next
                    }
                    e.corkedRequestsFree ? e.corkedRequestsFree.next = t : e.corkedRequestsFree = t
                }(e, t)
            }
        }
        t.exports = b;
        var s, u = !e.browser && ["v0.10", "v0.9."].indexOf(e.version.slice(0, 5)) > -1 ? n : o.nextTick;
        b.WritableState = y;
        var c = r(16);
        c.inherits = r(7);
        var f = {
                deprecate: r(79)
            },
            l = r(42),
            h = r(25).Buffer,
            d = i.Uint8Array || function() {};
        var p, v = r(43);

        function g() {}

        function y(t, e) {
            s = s || r(13), t = t || {};
            var n = e instanceof s;
            this.objectMode = !!t.objectMode, n && (this.objectMode = this.objectMode || !!t.writableObjectMode);
            var i = t.highWaterMark,
                c = t.writableHighWaterMark,
                f = this.objectMode ? 16 : 16384;
            this.highWaterMark = i || 0 === i ? i : n && (c || 0 === c) ? c : f, this.highWaterMark = Math.floor(this.highWaterMark), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
            var l = !1 === t.decodeStrings;
            this.decodeStrings = !l, this.defaultEncoding = t.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(t) {
                ! function(t, e) {
                    var r = t._writableState,
                        n = r.sync,
                        i = r.writecb;
                    if (function(t) {
                            t.writing = !1, t.writecb = null, t.length -= t.writelen, t.writelen = 0
                        }(r), e) ! function(t, e, r, n, i) {
                        --e.pendingcb, r ? (o.nextTick(i, n), o.nextTick(S, t, e), t._writableState.errorEmitted = !0, t.emit("error", n)) : (i(n), t._writableState.errorEmitted = !0, t.emit("error", n), S(t, e))
                    }(t, r, n, e, i);
                    else {
                        var a = x(r);
                        a || r.corked || r.bufferProcessing || !r.bufferedRequest || _(t, r), n ? u(w, t, r, a, i) : w(t, r, a, i)
                    }
                }(e, t)
            }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new a(this)
        }

        function b(t) {
            if (s = s || r(13), !p.call(b, this) && !(this instanceof s)) return new b(t);
            this._writableState = new y(t, this), this.writable = !0, t && ("function" === typeof t.write && (this._write = t.write), "function" === typeof t.writev && (this._writev = t.writev), "function" === typeof t.destroy && (this._destroy = t.destroy), "function" === typeof t.final && (this._final = t.final)), l.call(this)
        }

        function m(t, e, r, n, i, o, a) {
            e.writelen = n, e.writecb = a, e.writing = !0, e.sync = !0, r ? t._writev(i, e.onwrite) : t._write(i, o, e.onwrite), e.sync = !1
        }

        function w(t, e, r, n) {
            r || function(t, e) {
                0 === e.length && e.needDrain && (e.needDrain = !1, t.emit("drain"))
            }(t, e), e.pendingcb--, n(), S(t, e)
        }

        function _(t, e) {
            e.bufferProcessing = !0;
            var r = e.bufferedRequest;
            if (t._writev && r && r.next) {
                var n = e.bufferedRequestCount,
                    i = new Array(n),
                    o = e.corkedRequestsFree;
                o.entry = r;
                for (var s = 0, u = !0; r;) i[s] = r, r.isBuf || (u = !1), r = r.next, s += 1;
                i.allBuffers = u, m(t, e, !0, e.length, i, "", o.finish), e.pendingcb++, e.lastBufferedRequest = null, o.next ? (e.corkedRequestsFree = o.next, o.next = null) : e.corkedRequestsFree = new a(e), e.bufferedRequestCount = 0
            } else {
                for (; r;) {
                    var c = r.chunk,
                        f = r.encoding,
                        l = r.callback;
                    if (m(t, e, !1, e.objectMode ? 1 : c.length, c, f, l), r = r.next, e.bufferedRequestCount--, e.writing) break
                }
                null === r && (e.lastBufferedRequest = null)
            }
            e.bufferedRequest = r, e.bufferProcessing = !1
        }

        function x(t) {
            return t.ending && 0 === t.length && null === t.bufferedRequest && !t.finished && !t.writing
        }

        function E(t, e) {
            t._final(function(r) {
                e.pendingcb--, r && t.emit("error", r), e.prefinished = !0, t.emit("prefinish"), S(t, e)
            })
        }

        function S(t, e) {
            var r = x(e);
            return r && (! function(t, e) {
                e.prefinished || e.finalCalled || ("function" === typeof t._final ? (e.pendingcb++, e.finalCalled = !0, o.nextTick(E, t, e)) : (e.prefinished = !0, t.emit("prefinish")))
            }(t, e), 0 === e.pendingcb && (e.finished = !0, t.emit("finish"))), r
        }
        c.inherits(b, l), y.prototype.getBuffer = function() {
                for (var t = this.bufferedRequest, e = []; t;) e.push(t), t = t.next;
                return e
            },
            function() {
                try {
                    Object.defineProperty(y.prototype, "buffer", {
                        get: f.deprecate(function() {
                            return this.getBuffer()
                        }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                    })
                } catch (t) {}
            }(), "function" === typeof Symbol && Symbol.hasInstance && "function" === typeof Function.prototype[Symbol.hasInstance] ? (p = Function.prototype[Symbol.hasInstance], Object.defineProperty(b, Symbol.hasInstance, {
                value: function(t) {
                    return !!p.call(this, t) || this === b && (t && t._writableState instanceof y)
                }
            })) : p = function(t) {
                return t instanceof this
            }, b.prototype.pipe = function() {
                this.emit("error", new Error("Cannot pipe, not readable"))
            }, b.prototype.write = function(t, e, r) {
                var n, i = this._writableState,
                    a = !1,
                    s = !i.objectMode && (n = t, h.isBuffer(n) || n instanceof d);
                return s && !h.isBuffer(t) && (t = function(t) {
                    return h.from(t)
                }(t)), "function" === typeof e && (r = e, e = null), s ? e = "buffer" : e || (e = i.defaultEncoding), "function" !== typeof r && (r = g), i.ended ? function(t, e) {
                    var r = new Error("write after end");
                    t.emit("error", r), o.nextTick(e, r)
                }(this, r) : (s || function(t, e, r, n) {
                    var i = !0,
                        a = !1;
                    return null === r ? a = new TypeError("May not write null values to stream") : "string" === typeof r || void 0 === r || e.objectMode || (a = new TypeError("Invalid non-string/buffer chunk")), a && (t.emit("error", a), o.nextTick(n, a), i = !1), i
                }(this, i, t, r)) && (i.pendingcb++, a = function(t, e, r, n, i, o) {
                    if (!r) {
                        var a = function(t, e, r) {
                            t.objectMode || !1 === t.decodeStrings || "string" !== typeof e || (e = h.from(e, r));
                            return e
                        }(e, n, i);
                        n !== a && (r = !0, i = "buffer", n = a)
                    }
                    var s = e.objectMode ? 1 : n.length;
                    e.length += s;
                    var u = e.length < e.highWaterMark;
                    u || (e.needDrain = !0);
                    if (e.writing || e.corked) {
                        var c = e.lastBufferedRequest;
                        e.lastBufferedRequest = {
                            chunk: n,
                            encoding: i,
                            isBuf: r,
                            callback: o,
                            next: null
                        }, c ? c.next = e.lastBufferedRequest : e.bufferedRequest = e.lastBufferedRequest, e.bufferedRequestCount += 1
                    } else m(t, e, !1, s, n, i, o);
                    return u
                }(this, i, s, t, e, r)), a
            }, b.prototype.cork = function() {
                this._writableState.corked++
            }, b.prototype.uncork = function() {
                var t = this._writableState;
                t.corked && (t.corked--, t.writing || t.corked || t.finished || t.bufferProcessing || !t.bufferedRequest || _(this, t))
            }, b.prototype.setDefaultEncoding = function(t) {
                if ("string" === typeof t && (t = t.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((t + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + t);
                return this._writableState.defaultEncoding = t, this
            }, Object.defineProperty(b.prototype, "writableHighWaterMark", {
                enumerable: !1,
                get: function() {
                    return this._writableState.highWaterMark
                }
            }), b.prototype._write = function(t, e, r) {
                r(new Error("_write() is not implemented"))
            }, b.prototype._writev = null, b.prototype.end = function(t, e, r) {
                var n = this._writableState;
                "function" === typeof t ? (r = t, t = null, e = null) : "function" === typeof e && (r = e, e = null), null !== t && void 0 !== t && this.write(t, e), n.corked && (n.corked = 1, this.uncork()), n.ending || n.finished || function(t, e, r) {
                    e.ending = !0, S(t, e), r && (e.finished ? o.nextTick(r) : t.once("finish", r));
                    e.ended = !0, t.writable = !1
                }(this, n, r)
            }, Object.defineProperty(b.prototype, "destroyed", {
                get: function() {
                    return void 0 !== this._writableState && this._writableState.destroyed
                },
                set: function(t) {
                    this._writableState && (this._writableState.destroyed = t)
                }
            }), b.prototype.destroy = v.destroy, b.prototype._undestroy = v.undestroy, b.prototype._destroy = function(t, e) {
                this.end(), e(t)
            }
    }).call(this, r(12), r(77).setImmediate, r(10))
}, function(t, e, r) {
    (e = t.exports = function(t) {
        t = t.toLowerCase();
        var r = e[t];
        if (!r) throw new Error(t + " is not supported (we accept pull requests)");
        return new r
    }).sha = r(60), e.sha1 = r(61), e.sha224 = r(62), e.sha256 = r(34), e.sha384 = r(63), e.sha512 = r(35)
}, function(t, e, r) {
    "use strict";
    var n = r(3);
    r.d(e, "createAction", function() {
        return n.a
    });
    r(33)
}, function(t, e, r) {
    "use strict";
    (function(t, n) {
        var i, o = r(51);
        i = "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : "undefined" !== typeof t ? t : n;
        var a = Object(o.a)(i);
        e.a = a
    }).call(this, r(10), r(58)(t))
}, function(t, e, r) {
    "use strict";
    (function(t) {
        r.d(e, "a", function() {
            return c
        }), r.d(e, "b", function() {
            return l
        });
        var n = r(0),
            i = r.n(n),
            o = r(4),
            a = r(21),
            s = r(31);

        function u(e, r) {
            switch (r) {
                case "base64":
                    var n = e.split("|", 2);
                    return {
                        iv: t.from(n[0].substring(1), "base64"), value: t.from(n[1], "base64")
                    };
                case "binary":
                    return {
                        iv: t.from(e.substring(1, 17), "binary"), value: t.from(e.substring(17), "binary")
                    }
            }
            throw Error("Unsupported BufferEncoding type: " + r)
        }

        function c(t, e, r) {
            return f.apply(this, arguments)
        }

        function f() {
            return (f = Object(o.a)(i.a.mark(function e(r, n, o) {
                var c;
                return i.a.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if ("!" !== r[0]) {
                                e.next = 5;
                                break
                            }
                            return e.next = 3, s.a(u(r, o), n);
                        case 3:
                            return c = e.sent, e.abrupt("return", c.toString("binary"));
                        case 5:
                            return e.abrupt("return", a.a(t.from(r, "hex"), n));
                        case 6:
                        case "end":
                            return e.stop()
                    }
                }, e)
            }))).apply(this, arguments)
        }

        function l(t, e, r) {
            return h.apply(this, arguments)
        }

        function h() {
            return (h = Object(o.a)(i.a.mark(function e(r, n, o) {
                var a;
                return i.a.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, s.b(t.from(r, "binary"), n);
                        case 2:
                            a = e.sent, e.t0 = o, e.next = "base64" === e.t0 ? 6 : "binary" === e.t0 ? 7 : 8;
                            break;
                        case 6:
                            return e.abrupt("return", "!".concat(a.iv.toString("base64"), "|").concat(a.value.toString("base64")));
                        case 7:
                            return e.abrupt("return", "!".concat(a.iv.toString("binary")).concat(a.value.toString("binary")));
                        case 8:
                            throw Error("Unsupported BufferEncoding type: " + o);
                        case 9:
                        case "end":
                            return e.stop()
                    }
                }, e)
            }))).apply(this, arguments)
        }
    }).call(this, r(8).Buffer)
}, function(t, e, r) {
    "use strict";
    (function(t) {
        r.d(e, "b", function() {
            return a
        }), r.d(e, "a", function() {
            return u
        });
        var n = r(0),
            i = r.n(n),
            o = r(4);

        function a(t, e) {
            return s.apply(this, arguments)
        }

        function s() {
            return (s = Object(o.a)(i.a.mark(function e(r, n) {
                var o, a, s;
                return i.a.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return o = window.crypto.getRandomValues(new Uint8Array(16)), e.next = 3, window.crypto.subtle.importKey("raw", n, "AES-CBC", !1, ["encrypt", "decrypt"]);
                        case 3:
                            return a = e.sent, e.next = 6, window.crypto.subtle.encrypt({
                                name: "AES-CBC",
                                iv: o
                            }, a, r);
                        case 6:
                            return s = e.sent, e.abrupt("return", {
                                iv: t.from(o),
                                value: t.from(s)
                            });
                        case 8:
                        case "end":
                            return e.stop()
                    }
                }, e)
            }))).apply(this, arguments)
        }

        function u(t, e) {
            return c.apply(this, arguments)
        }

        function c() {
            return (c = Object(o.a)(i.a.mark(function e(r, n) {
                var o, a;
                return i.a.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, window.crypto.subtle.importKey("raw", n, "AES-CBC", !1, ["encrypt", "decrypt"]);
                        case 2:
                            return o = e.sent, e.next = 5, window.crypto.subtle.decrypt({
                                name: "AES-CBC",
                                iv: r.iv
                            }, o, r.value);
                        case 5:
                            return a = e.sent, e.abrupt("return", t.from(a));
                        case 7:
                        case "end":
                            return e.stop()
                    }
                }, e)
            }))).apply(this, arguments)
        }
    }).call(this, r(8).Buffer)
}, function(t, e) {
    var r = {}.toString;
    t.exports = Array.isArray || function(t) {
        return "[object Array]" == r.call(t)
    }
}, function(t, e) {}, function(t, e, r) {
    var n = r(7),
        i = r(14),
        o = r(9).Buffer,
        a = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
        s = new Array(64);

    function u() {
        this.init(), this._w = s, i.call(this, 64, 56)
    }

    function c(t, e, r) {
        return r ^ t & (e ^ r)
    }

    function f(t, e, r) {
        return t & e | r & (t | e)
    }

    function l(t) {
        return (t >>> 2 | t << 30) ^ (t >>> 13 | t << 19) ^ (t >>> 22 | t << 10)
    }

    function h(t) {
        return (t >>> 6 | t << 26) ^ (t >>> 11 | t << 21) ^ (t >>> 25 | t << 7)
    }

    function d(t) {
        return (t >>> 7 | t << 25) ^ (t >>> 18 | t << 14) ^ t >>> 3
    }
    n(u, i), u.prototype.init = function() {
        return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, this
    }, u.prototype._update = function(t) {
        for (var e, r = this._w, n = 0 | this._a, i = 0 | this._b, o = 0 | this._c, s = 0 | this._d, u = 0 | this._e, p = 0 | this._f, v = 0 | this._g, g = 0 | this._h, y = 0; y < 16; ++y) r[y] = t.readInt32BE(4 * y);
        for (; y < 64; ++y) r[y] = 0 | (((e = r[y - 2]) >>> 17 | e << 15) ^ (e >>> 19 | e << 13) ^ e >>> 10) + r[y - 7] + d(r[y - 15]) + r[y - 16];
        for (var b = 0; b < 64; ++b) {
            var m = g + h(u) + c(u, p, v) + a[b] + r[b] | 0,
                w = l(n) + f(n, i, o) | 0;
            g = v, v = p, p = u, u = s + m | 0, s = o, o = i, i = n, n = m + w | 0
        }
        this._a = n + this._a | 0, this._b = i + this._b | 0, this._c = o + this._c | 0, this._d = s + this._d | 0, this._e = u + this._e | 0, this._f = p + this._f | 0, this._g = v + this._g | 0, this._h = g + this._h | 0
    }, u.prototype._hash = function() {
        var t = o.allocUnsafe(32);
        return t.writeInt32BE(this._a, 0), t.writeInt32BE(this._b, 4), t.writeInt32BE(this._c, 8), t.writeInt32BE(this._d, 12), t.writeInt32BE(this._e, 16), t.writeInt32BE(this._f, 20), t.writeInt32BE(this._g, 24), t.writeInt32BE(this._h, 28), t
    }, t.exports = u
}, function(t, e, r) {
    var n = r(7),
        i = r(14),
        o = r(9).Buffer,
        a = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591],
        s = new Array(160);

    function u() {
        this.init(), this._w = s, i.call(this, 128, 112)
    }

    function c(t, e, r) {
        return r ^ t & (e ^ r)
    }

    function f(t, e, r) {
        return t & e | r & (t | e)
    }

    function l(t, e) {
        return (t >>> 28 | e << 4) ^ (e >>> 2 | t << 30) ^ (e >>> 7 | t << 25)
    }

    function h(t, e) {
        return (t >>> 14 | e << 18) ^ (t >>> 18 | e << 14) ^ (e >>> 9 | t << 23)
    }

    function d(t, e) {
        return (t >>> 1 | e << 31) ^ (t >>> 8 | e << 24) ^ t >>> 7
    }

    function p(t, e) {
        return (t >>> 1 | e << 31) ^ (t >>> 8 | e << 24) ^ (t >>> 7 | e << 25)
    }

    function v(t, e) {
        return (t >>> 19 | e << 13) ^ (e >>> 29 | t << 3) ^ t >>> 6
    }

    function g(t, e) {
        return (t >>> 19 | e << 13) ^ (e >>> 29 | t << 3) ^ (t >>> 6 | e << 26)
    }

    function y(t, e) {
        return t >>> 0 < e >>> 0 ? 1 : 0
    }
    n(u, i), u.prototype.init = function() {
        return this._ah = 1779033703, this._bh = 3144134277, this._ch = 1013904242, this._dh = 2773480762, this._eh = 1359893119, this._fh = 2600822924, this._gh = 528734635, this._hh = 1541459225, this._al = 4089235720, this._bl = 2227873595, this._cl = 4271175723, this._dl = 1595750129, this._el = 2917565137, this._fl = 725511199, this._gl = 4215389547, this._hl = 327033209, this
    }, u.prototype._update = function(t) {
        for (var e = this._w, r = 0 | this._ah, n = 0 | this._bh, i = 0 | this._ch, o = 0 | this._dh, s = 0 | this._eh, u = 0 | this._fh, b = 0 | this._gh, m = 0 | this._hh, w = 0 | this._al, _ = 0 | this._bl, x = 0 | this._cl, E = 0 | this._dl, S = 0 | this._el, k = 0 | this._fl, A = 0 | this._gl, O = 0 | this._hl, I = 0; I < 32; I += 2) e[I] = t.readInt32BE(4 * I), e[I + 1] = t.readInt32BE(4 * I + 4);
        for (; I < 160; I += 2) {
            var T = e[I - 30],
                j = e[I - 30 + 1],
                R = d(T, j),
                C = p(j, T),
                N = v(T = e[I - 4], j = e[I - 4 + 1]),
                P = g(j, T),
                L = e[I - 14],
                B = e[I - 14 + 1],
                D = e[I - 32],
                M = e[I - 32 + 1],
                U = C + B | 0,
                F = R + L + y(U, C) | 0;
            F = (F = F + N + y(U = U + P | 0, P) | 0) + D + y(U = U + M | 0, M) | 0, e[I] = F, e[I + 1] = U
        }
        for (var z = 0; z < 160; z += 2) {
            F = e[z], U = e[z + 1];
            var q = f(r, n, i),
                Y = f(w, _, x),
                W = l(r, w),
                K = l(w, r),
                G = h(s, S),
                H = h(S, s),
                V = a[z],
                X = a[z + 1],
                $ = c(s, u, b),
                J = c(S, k, A),
                Q = O + H | 0,
                Z = m + G + y(Q, O) | 0;
            Z = (Z = (Z = Z + $ + y(Q = Q + J | 0, J) | 0) + V + y(Q = Q + X | 0, X) | 0) + F + y(Q = Q + U | 0, U) | 0;
            var tt = K + Y | 0,
                et = W + q + y(tt, K) | 0;
            m = b, O = A, b = u, A = k, u = s, k = S, s = o + Z + y(S = E + Q | 0, E) | 0, o = i, E = x, i = n, x = _, n = r, _ = w, r = Z + et + y(w = Q + tt | 0, Q) | 0
        }
        this._al = this._al + w | 0, this._bl = this._bl + _ | 0, this._cl = this._cl + x | 0, this._dl = this._dl + E | 0, this._el = this._el + S | 0, this._fl = this._fl + k | 0, this._gl = this._gl + A | 0, this._hl = this._hl + O | 0, this._ah = this._ah + r + y(this._al, w) | 0, this._bh = this._bh + n + y(this._bl, _) | 0, this._ch = this._ch + i + y(this._cl, x) | 0, this._dh = this._dh + o + y(this._dl, E) | 0, this._eh = this._eh + s + y(this._el, S) | 0, this._fh = this._fh + u + y(this._fl, k) | 0, this._gh = this._gh + b + y(this._gl, A) | 0, this._hh = this._hh + m + y(this._hl, O) | 0
    }, u.prototype._hash = function() {
        var t = o.allocUnsafe(64);

        function e(e, r, n) {
            t.writeInt32BE(e, n), t.writeInt32BE(r, n + 4)
        }
        return e(this._ah, this._al, 0), e(this._bh, this._bl, 8), e(this._ch, this._cl, 16), e(this._dh, this._dl, 24), e(this._eh, this._el, 32), e(this._fh, this._fl, 40), e(this._gh, this._gl, 48), e(this._hh, this._hl, 56), t
    }, t.exports = u
}, function(t, e, r) {
    "use strict";
    (function(t) {
        r.d(e, "a", function() {
            return i
        });
        var n = r(6);

        function i(e, r) {
            return t.from(Object(n.a)(e + r), "hex")
        }
    }).call(this, r(8).Buffer)
}, function(t, e, r) {
    (function(e) {
        var r = Math.pow(2, 30) - 1;

        function n(t, r) {
            if ("string" !== typeof t && !e.isBuffer(t)) throw new TypeError(r + " must be a buffer or string")
        }
        t.exports = function(t, e, i, o) {
            if (n(t, "Password"), n(e, "Salt"), "number" !== typeof i) throw new TypeError("Iterations not a number");
            if (i < 0) throw new TypeError("Bad iterations");
            if ("number" !== typeof o) throw new TypeError("Key length not a number");
            if (o < 0 || o > r || o !== o) throw new TypeError("Bad key length")
        }
    }).call(this, r(8).Buffer)
}, function(t, e, r) {
    (function(e) {
        var r;
        e.browser ? r = "utf-8" : r = parseInt(e.version.split(".")[0].slice(1), 10) >= 6 ? "utf-8" : "binary";
        t.exports = r
    }).call(this, r(12))
}, function(t, e, r) {
    var n = r(71),
        i = r(86),
        o = r(27),
        a = r(37),
        s = r(38),
        u = r(9).Buffer,
        c = u.alloc(128),
        f = {
            md5: 16,
            sha1: 20,
            sha224: 28,
            sha256: 32,
            sha384: 48,
            sha512: 64,
            rmd160: 20,
            ripemd160: 20
        };

    function l(t, e, r) {
        var a = function(t) {
                return "rmd160" === t || "ripemd160" === t ? function(t) {
                    return (new i).update(t).digest()
                } : "md5" === t ? n : function(e) {
                    return o(t).update(e).digest()
                }
            }(t),
            s = "sha512" === t || "sha384" === t ? 128 : 64;
        e.length > s ? e = a(e) : e.length < s && (e = u.concat([e, c], s));
        for (var l = u.allocUnsafe(s + f[t]), h = u.allocUnsafe(s + f[t]), d = 0; d < s; d++) l[d] = 54 ^ e[d], h[d] = 92 ^ e[d];
        var p = u.allocUnsafe(s + r + 4);
        l.copy(p, 0, 0, s), this.ipad1 = p, this.ipad2 = l, this.opad = h, this.alg = t, this.blocksize = s, this.hash = a, this.size = f[t]
    }
    l.prototype.run = function(t, e) {
        return t.copy(e, this.blocksize), this.hash(e).copy(this.opad, this.blocksize), this.hash(this.opad)
    }, t.exports = function(t, e, r, n, i) {
        a(t, e, r, n), u.isBuffer(t) || (t = u.from(t, s)), u.isBuffer(e) || (e = u.from(e, s));
        var o = new l(i = i || "sha1", t, e.length),
            c = u.allocUnsafe(n),
            h = u.allocUnsafe(e.length + 4);
        e.copy(h, 0, 0, e.length);
        for (var d = 0, p = f[i], v = Math.ceil(n / p), g = 1; g <= v; g++) {
            h.writeUInt32BE(g, e.length);
            for (var y = o.run(h, o.ipad1), b = y, m = 1; m < r; m++) {
                b = o.run(b, o.ipad2);
                for (var w = 0; w < p; w++) y[w] ^= b[w]
            }
            y.copy(c, d), d += p
        }
        return c
    }
}, function(t, e, r) {
    "use strict";
    var n = r(9).Buffer,
        i = r(73).Transform;

    function o(t) {
        i.call(this), this._block = n.allocUnsafe(t), this._blockSize = t, this._blockOffset = 0, this._length = [0, 0, 0, 0], this._finalized = !1
    }
    r(7)(o, i), o.prototype._transform = function(t, e, r) {
        var n = null;
        try {
            this.update(t, e)
        } catch (i) {
            n = i
        }
        r(n)
    }, o.prototype._flush = function(t) {
        var e = null;
        try {
            this.push(this.digest())
        } catch (r) {
            e = r
        }
        t(e)
    }, o.prototype.update = function(t, e) {
        if (function(t, e) {
                if (!n.isBuffer(t) && "string" !== typeof t) throw new TypeError(e + " must be a string or a buffer")
            }(t, "Data"), this._finalized) throw new Error("Digest already called");
        n.isBuffer(t) || (t = n.from(t, e));
        for (var r = this._block, i = 0; this._blockOffset + t.length - i >= this._blockSize;) {
            for (var o = this._blockOffset; o < this._blockSize;) r[o++] = t[i++];
            this._update(), this._blockOffset = 0
        }
        for (; i < t.length;) r[this._blockOffset++] = t[i++];
        for (var a = 0, s = 8 * t.length; s > 0; ++a) this._length[a] += s, (s = this._length[a] / 4294967296 | 0) > 0 && (this._length[a] -= 4294967296 * s);
        return this
    }, o.prototype._update = function() {
        throw new Error("_update is not implemented")
    }, o.prototype.digest = function(t) {
        if (this._finalized) throw new Error("Digest already called");
        this._finalized = !0;
        var e = this._digest();
        void 0 !== t && (e = e.toString(t)), this._block.fill(0), this._blockOffset = 0;
        for (var r = 0; r < 4; ++r) this._length[r] = 0;
        return e
    }, o.prototype._digest = function() {
        throw new Error("_digest is not implemented")
    }, t.exports = o
}, function(t, e, r) {
    "use strict";
    (function(e, n) {
        var i = r(19);
        t.exports = m;
        var o, a = r(32);
        m.ReadableState = b;
        r(23).EventEmitter;
        var s = function(t, e) {
                return t.listeners(e).length
            },
            u = r(42),
            c = r(25).Buffer,
            f = e.Uint8Array || function() {};
        var l = r(16);
        l.inherits = r(7);
        var h = r(74),
            d = void 0;
        d = h && h.debuglog ? h.debuglog("stream") : function() {};
        var p, v = r(75),
            g = r(43);
        l.inherits(m, u);
        var y = ["error", "close", "destroy", "pause", "resume"];

        function b(t, e) {
            t = t || {};
            var n = e instanceof(o = o || r(13));
            this.objectMode = !!t.objectMode, n && (this.objectMode = this.objectMode || !!t.readableObjectMode);
            var i = t.highWaterMark,
                a = t.readableHighWaterMark,
                s = this.objectMode ? 16 : 16384;
            this.highWaterMark = i || 0 === i ? i : n && (a || 0 === a) ? a : s, this.highWaterMark = Math.floor(this.highWaterMark), this.buffer = new v, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.destroyed = !1, this.defaultEncoding = t.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, t.encoding && (p || (p = r(44).StringDecoder), this.decoder = new p(t.encoding), this.encoding = t.encoding)
        }

        function m(t) {
            if (o = o || r(13), !(this instanceof m)) return new m(t);
            this._readableState = new b(t, this), this.readable = !0, t && ("function" === typeof t.read && (this._read = t.read), "function" === typeof t.destroy && (this._destroy = t.destroy)), u.call(this)
        }

        function w(t, e, r, n, i) {
            var o, a = t._readableState;
            null === e ? (a.reading = !1, function(t, e) {
                if (e.ended) return;
                if (e.decoder) {
                    var r = e.decoder.end();
                    r && r.length && (e.buffer.push(r), e.length += e.objectMode ? 1 : r.length)
                }
                e.ended = !0, S(t)
            }(t, a)) : (i || (o = function(t, e) {
                var r;
                n = e, c.isBuffer(n) || n instanceof f || "string" === typeof e || void 0 === e || t.objectMode || (r = new TypeError("Invalid non-string/buffer chunk"));
                var n;
                return r
            }(a, e)), o ? t.emit("error", o) : a.objectMode || e && e.length > 0 ? ("string" === typeof e || a.objectMode || Object.getPrototypeOf(e) === c.prototype || (e = function(t) {
                return c.from(t)
            }(e)), n ? a.endEmitted ? t.emit("error", new Error("stream.unshift() after end event")) : _(t, a, e, !0) : a.ended ? t.emit("error", new Error("stream.push() after EOF")) : (a.reading = !1, a.decoder && !r ? (e = a.decoder.write(e), a.objectMode || 0 !== e.length ? _(t, a, e, !1) : A(t, a)) : _(t, a, e, !1))) : n || (a.reading = !1));
            return function(t) {
                return !t.ended && (t.needReadable || t.length < t.highWaterMark || 0 === t.length)
            }(a)
        }

        function _(t, e, r, n) {
            e.flowing && 0 === e.length && !e.sync ? (t.emit("data", r), t.read(0)) : (e.length += e.objectMode ? 1 : r.length, n ? e.buffer.unshift(r) : e.buffer.push(r), e.needReadable && S(t)), A(t, e)
        }
        Object.defineProperty(m.prototype, "destroyed", {
            get: function() {
                return void 0 !== this._readableState && this._readableState.destroyed
            },
            set: function(t) {
                this._readableState && (this._readableState.destroyed = t)
            }
        }), m.prototype.destroy = g.destroy, m.prototype._undestroy = g.undestroy, m.prototype._destroy = function(t, e) {
            this.push(null), e(t)
        }, m.prototype.push = function(t, e) {
            var r, n = this._readableState;
            return n.objectMode ? r = !0 : "string" === typeof t && ((e = e || n.defaultEncoding) !== n.encoding && (t = c.from(t, e), e = ""), r = !0), w(this, t, e, !1, r)
        }, m.prototype.unshift = function(t) {
            return w(this, t, null, !0, !1)
        }, m.prototype.isPaused = function() {
            return !1 === this._readableState.flowing
        }, m.prototype.setEncoding = function(t) {
            return p || (p = r(44).StringDecoder), this._readableState.decoder = new p(t), this._readableState.encoding = t, this
        };
        var x = 8388608;

        function E(t, e) {
            return t <= 0 || 0 === e.length && e.ended ? 0 : e.objectMode ? 1 : t !== t ? e.flowing && e.length ? e.buffer.head.data.length : e.length : (t > e.highWaterMark && (e.highWaterMark = function(t) {
                return t >= x ? t = x : (t--, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, t |= t >>> 16, t++), t
            }(t)), t <= e.length ? t : e.ended ? e.length : (e.needReadable = !0, 0))
        }

        function S(t) {
            var e = t._readableState;
            e.needReadable = !1, e.emittedReadable || (d("emitReadable", e.flowing), e.emittedReadable = !0, e.sync ? i.nextTick(k, t) : k(t))
        }

        function k(t) {
            d("emit readable"), t.emit("readable"), j(t)
        }

        function A(t, e) {
            e.readingMore || (e.readingMore = !0, i.nextTick(O, t, e))
        }

        function O(t, e) {
            for (var r = e.length; !e.reading && !e.flowing && !e.ended && e.length < e.highWaterMark && (d("maybeReadMore read 0"), t.read(0), r !== e.length);) r = e.length;
            e.readingMore = !1
        }

        function I(t) {
            d("readable nexttick read 0"), t.read(0)
        }

        function T(t, e) {
            e.reading || (d("resume read 0"), t.read(0)), e.resumeScheduled = !1, e.awaitDrain = 0, t.emit("resume"), j(t), e.flowing && !e.reading && t.read(0)
        }

        function j(t) {
            var e = t._readableState;
            for (d("flow", e.flowing); e.flowing && null !== t.read(););
        }

        function R(t, e) {
            return 0 === e.length ? null : (e.objectMode ? r = e.buffer.shift() : !t || t >= e.length ? (r = e.decoder ? e.buffer.join("") : 1 === e.buffer.length ? e.buffer.head.data : e.buffer.concat(e.length), e.buffer.clear()) : r = function(t, e, r) {
                var n;
                t < e.head.data.length ? (n = e.head.data.slice(0, t), e.head.data = e.head.data.slice(t)) : n = t === e.head.data.length ? e.shift() : r ? function(t, e) {
                    var r = e.head,
                        n = 1,
                        i = r.data;
                    t -= i.length;
                    for (; r = r.next;) {
                        var o = r.data,
                            a = t > o.length ? o.length : t;
                        if (a === o.length ? i += o : i += o.slice(0, t), 0 === (t -= a)) {
                            a === o.length ? (++n, r.next ? e.head = r.next : e.head = e.tail = null) : (e.head = r, r.data = o.slice(a));
                            break
                        }++n
                    }
                    return e.length -= n, i
                }(t, e) : function(t, e) {
                    var r = c.allocUnsafe(t),
                        n = e.head,
                        i = 1;
                    n.data.copy(r), t -= n.data.length;
                    for (; n = n.next;) {
                        var o = n.data,
                            a = t > o.length ? o.length : t;
                        if (o.copy(r, r.length - t, 0, a), 0 === (t -= a)) {
                            a === o.length ? (++i, n.next ? e.head = n.next : e.head = e.tail = null) : (e.head = n, n.data = o.slice(a));
                            break
                        }++i
                    }
                    return e.length -= i, r
                }(t, e);
                return n
            }(t, e.buffer, e.decoder), r);
            var r
        }

        function C(t) {
            var e = t._readableState;
            if (e.length > 0) throw new Error('"endReadable()" called on non-empty stream');
            e.endEmitted || (e.ended = !0, i.nextTick(N, e, t))
        }

        function N(t, e) {
            t.endEmitted || 0 !== t.length || (t.endEmitted = !0, e.readable = !1, e.emit("end"))
        }

        function P(t, e) {
            for (var r = 0, n = t.length; r < n; r++)
                if (t[r] === e) return r;
            return -1
        }
        m.prototype.read = function(t) {
            d("read", t), t = parseInt(t, 10);
            var e = this._readableState,
                r = t;
            if (0 !== t && (e.emittedReadable = !1), 0 === t && e.needReadable && (e.length >= e.highWaterMark || e.ended)) return d("read: emitReadable", e.length, e.ended), 0 === e.length && e.ended ? C(this) : S(this), null;
            if (0 === (t = E(t, e)) && e.ended) return 0 === e.length && C(this), null;
            var n, i = e.needReadable;
            return d("need readable", i), (0 === e.length || e.length - t < e.highWaterMark) && d("length less than watermark", i = !0), e.ended || e.reading ? d("reading or ended", i = !1) : i && (d("do read"), e.reading = !0, e.sync = !0, 0 === e.length && (e.needReadable = !0), this._read(e.highWaterMark), e.sync = !1, e.reading || (t = E(r, e))), null === (n = t > 0 ? R(t, e) : null) ? (e.needReadable = !0, t = 0) : e.length -= t, 0 === e.length && (e.ended || (e.needReadable = !0), r !== t && e.ended && C(this)), null !== n && this.emit("data", n), n
        }, m.prototype._read = function(t) {
            this.emit("error", new Error("_read() is not implemented"))
        }, m.prototype.pipe = function(t, e) {
            var r = this,
                o = this._readableState;
            switch (o.pipesCount) {
                case 0:
                    o.pipes = t;
                    break;
                case 1:
                    o.pipes = [o.pipes, t];
                    break;
                default:
                    o.pipes.push(t)
            }
            o.pipesCount += 1, d("pipe count=%d opts=%j", o.pipesCount, e);
            var u = (!e || !1 !== e.end) && t !== n.stdout && t !== n.stderr ? f : m;

            function c(e, n) {
                d("onunpipe"), e === r && n && !1 === n.hasUnpiped && (n.hasUnpiped = !0, d("cleanup"), t.removeListener("close", y), t.removeListener("finish", b), t.removeListener("drain", l), t.removeListener("error", g), t.removeListener("unpipe", c), r.removeListener("end", f), r.removeListener("end", m), r.removeListener("data", v), h = !0, !o.awaitDrain || t._writableState && !t._writableState.needDrain || l())
            }

            function f() {
                d("onend"), t.end()
            }
            o.endEmitted ? i.nextTick(u) : r.once("end", u), t.on("unpipe", c);
            var l = function(t) {
                return function() {
                    var e = t._readableState;
                    d("pipeOnDrain", e.awaitDrain), e.awaitDrain && e.awaitDrain--, 0 === e.awaitDrain && s(t, "data") && (e.flowing = !0, j(t))
                }
            }(r);
            t.on("drain", l);
            var h = !1;
            var p = !1;

            function v(e) {
                d("ondata"), p = !1, !1 !== t.write(e) || p || ((1 === o.pipesCount && o.pipes === t || o.pipesCount > 1 && -1 !== P(o.pipes, t)) && !h && (d("false write response, pause", r._readableState.awaitDrain), r._readableState.awaitDrain++, p = !0), r.pause())
            }

            function g(e) {
                d("onerror", e), m(), t.removeListener("error", g), 0 === s(t, "error") && t.emit("error", e)
            }

            function y() {
                t.removeListener("finish", b), m()
            }

            function b() {
                d("onfinish"), t.removeListener("close", y), m()
            }

            function m() {
                d("unpipe"), r.unpipe(t)
            }
            return r.on("data", v),
                function(t, e, r) {
                    if ("function" === typeof t.prependListener) return t.prependListener(e, r);
                    t._events && t._events[e] ? a(t._events[e]) ? t._events[e].unshift(r) : t._events[e] = [r, t._events[e]] : t.on(e, r)
                }(t, "error", g), t.once("close", y), t.once("finish", b), t.emit("pipe", r), o.flowing || (d("pipe resume"), r.resume()), t
        }, m.prototype.unpipe = function(t) {
            var e = this._readableState,
                r = {
                    hasUnpiped: !1
                };
            if (0 === e.pipesCount) return this;
            if (1 === e.pipesCount) return t && t !== e.pipes ? this : (t || (t = e.pipes), e.pipes = null, e.pipesCount = 0, e.flowing = !1, t && t.emit("unpipe", this, r), this);
            if (!t) {
                var n = e.pipes,
                    i = e.pipesCount;
                e.pipes = null, e.pipesCount = 0, e.flowing = !1;
                for (var o = 0; o < i; o++) n[o].emit("unpipe", this, r);
                return this
            }
            var a = P(e.pipes, t);
            return -1 === a ? this : (e.pipes.splice(a, 1), e.pipesCount -= 1, 1 === e.pipesCount && (e.pipes = e.pipes[0]), t.emit("unpipe", this, r), this)
        }, m.prototype.on = function(t, e) {
            var r = u.prototype.on.call(this, t, e);
            if ("data" === t) !1 !== this._readableState.flowing && this.resume();
            else if ("readable" === t) {
                var n = this._readableState;
                n.endEmitted || n.readableListening || (n.readableListening = n.needReadable = !0, n.emittedReadable = !1, n.reading ? n.length && S(this) : i.nextTick(I, this))
            }
            return r
        }, m.prototype.addListener = m.prototype.on, m.prototype.resume = function() {
            var t = this._readableState;
            return t.flowing || (d("resume"), t.flowing = !0, function(t, e) {
                e.resumeScheduled || (e.resumeScheduled = !0, i.nextTick(T, t, e))
            }(this, t)), this
        }, m.prototype.pause = function() {
            return d("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (d("pause"), this._readableState.flowing = !1, this.emit("pause")), this
        }, m.prototype.wrap = function(t) {
            var e = this,
                r = this._readableState,
                n = !1;
            for (var i in t.on("end", function() {
                    if (d("wrapped end"), r.decoder && !r.ended) {
                        var t = r.decoder.end();
                        t && t.length && e.push(t)
                    }
                    e.push(null)
                }), t.on("data", function(i) {
                    (d("wrapped data"), r.decoder && (i = r.decoder.write(i)), !r.objectMode || null !== i && void 0 !== i) && ((r.objectMode || i && i.length) && (e.push(i) || (n = !0, t.pause())))
                }), t) void 0 === this[i] && "function" === typeof t[i] && (this[i] = function(e) {
                return function() {
                    return t[e].apply(t, arguments)
                }
            }(i));
            for (var o = 0; o < y.length; o++) t.on(y[o], this.emit.bind(this, y[o]));
            return this._read = function(e) {
                d("wrapped _read", e), n && (n = !1, t.resume())
            }, this
        }, Object.defineProperty(m.prototype, "readableHighWaterMark", {
            enumerable: !1,
            get: function() {
                return this._readableState.highWaterMark
            }
        }), m._fromList = R
    }).call(this, r(10), r(12))
}, function(t, e, r) {
    t.exports = r(23).EventEmitter
}, function(t, e, r) {
    "use strict";
    var n = r(19);

    function i(t, e) {
        t.emit("error", e)
    }
    t.exports = {
        destroy: function(t, e) {
            var r = this,
                o = this._readableState && this._readableState.destroyed,
                a = this._writableState && this._writableState.destroyed;
            return o || a ? (e ? e(t) : !t || this._writableState && this._writableState.errorEmitted || n.nextTick(i, this, t), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(t || null, function(t) {
                !e && t ? (n.nextTick(i, r, t), r._writableState && (r._writableState.errorEmitted = !0)) : e && e(t)
            }), this)
        },
        undestroy: function() {
            this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
        }
    }
}, function(t, e, r) {
    "use strict";
    var n = r(80).Buffer,
        i = n.isEncoding || function(t) {
            switch ((t = "" + t) && t.toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                case "raw":
                    return !0;
                default:
                    return !1
            }
        };

    function o(t) {
        var e;
        switch (this.encoding = function(t) {
            var e = function(t) {
                if (!t) return "utf8";
                for (var e;;) switch (t) {
                    case "utf8":
                    case "utf-8":
                        return "utf8";
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return "utf16le";
                    case "latin1":
                    case "binary":
                        return "latin1";
                    case "base64":
                    case "ascii":
                    case "hex":
                        return t;
                    default:
                        if (e) return;
                        t = ("" + t).toLowerCase(), e = !0
                }
            }(t);
            if ("string" !== typeof e && (n.isEncoding === i || !i(t))) throw new Error("Unknown encoding: " + t);
            return e || t
        }(t), this.encoding) {
            case "utf16le":
                this.text = u, this.end = c, e = 4;
                break;
            case "utf8":
                this.fillLast = s, e = 4;
                break;
            case "base64":
                this.text = f, this.end = l, e = 3;
                break;
            default:
                return this.write = h, void(this.end = d)
        }
        this.lastNeed = 0, this.lastTotal = 0, this.lastChar = n.allocUnsafe(e)
    }

    function a(t) {
        return t <= 127 ? 0 : t >> 5 === 6 ? 2 : t >> 4 === 14 ? 3 : t >> 3 === 30 ? 4 : t >> 6 === 2 ? -1 : -2
    }

    function s(t) {
        var e = this.lastTotal - this.lastNeed,
            r = function(t, e, r) {
                if (128 !== (192 & e[0])) return t.lastNeed = 0, "\ufffd";
                if (t.lastNeed > 1 && e.length > 1) {
                    if (128 !== (192 & e[1])) return t.lastNeed = 1, "\ufffd";
                    if (t.lastNeed > 2 && e.length > 2 && 128 !== (192 & e[2])) return t.lastNeed = 2, "\ufffd"
                }
            }(this, t);
        return void 0 !== r ? r : this.lastNeed <= t.length ? (t.copy(this.lastChar, e, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (t.copy(this.lastChar, e, 0, t.length), void(this.lastNeed -= t.length))
    }

    function u(t, e) {
        if ((t.length - e) % 2 === 0) {
            var r = t.toString("utf16le", e);
            if (r) {
                var n = r.charCodeAt(r.length - 1);
                if (n >= 55296 && n <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = t[t.length - 2], this.lastChar[1] = t[t.length - 1], r.slice(0, -1)
            }
            return r
        }
        return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = t[t.length - 1], t.toString("utf16le", e, t.length - 1)
    }

    function c(t) {
        var e = t && t.length ? this.write(t) : "";
        if (this.lastNeed) {
            var r = this.lastTotal - this.lastNeed;
            return e + this.lastChar.toString("utf16le", 0, r)
        }
        return e
    }

    function f(t, e) {
        var r = (t.length - e) % 3;
        return 0 === r ? t.toString("base64", e) : (this.lastNeed = 3 - r, this.lastTotal = 3, 1 === r ? this.lastChar[0] = t[t.length - 1] : (this.lastChar[0] = t[t.length - 2], this.lastChar[1] = t[t.length - 1]), t.toString("base64", e, t.length - r))
    }

    function l(t) {
        var e = t && t.length ? this.write(t) : "";
        return this.lastNeed ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e
    }

    function h(t) {
        return t.toString(this.encoding)
    }

    function d(t) {
        return t && t.length ? this.write(t) : ""
    }
    e.StringDecoder = o, o.prototype.write = function(t) {
        if (0 === t.length) return "";
        var e, r;
        if (this.lastNeed) {
            if (void 0 === (e = this.fillLast(t))) return "";
            r = this.lastNeed, this.lastNeed = 0
        } else r = 0;
        return r < t.length ? e ? e + this.text(t, r) : this.text(t, r) : e || ""
    }, o.prototype.end = function(t) {
        var e = t && t.length ? this.write(t) : "";
        return this.lastNeed ? e + "\ufffd" : e
    }, o.prototype.text = function(t, e) {
        var r = function(t, e, r) {
            var n = e.length - 1;
            if (n < r) return 0;
            var i = a(e[n]);
            if (i >= 0) return i > 0 && (t.lastNeed = i - 1), i;
            if (--n < r || -2 === i) return 0;
            if ((i = a(e[n])) >= 0) return i > 0 && (t.lastNeed = i - 2), i;
            if (--n < r || -2 === i) return 0;
            if ((i = a(e[n])) >= 0) return i > 0 && (2 === i ? i = 0 : t.lastNeed = i - 3), i;
            return 0
        }(this, t, e);
        if (!this.lastNeed) return t.toString("utf8", e);
        this.lastTotal = r;
        var n = t.length - (r - this.lastNeed);
        return t.copy(this.lastChar, 0, n), t.toString("utf8", e, n)
    }, o.prototype.fillLast = function(t) {
        if (this.lastNeed <= t.length) return t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
        t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length), this.lastNeed -= t.length
    }
}, function(t, e, r) {
    "use strict";
    t.exports = a;
    var n = r(13),
        i = r(16);

    function o(t, e) {
        var r = this._transformState;
        r.transforming = !1;
        var n = r.writecb;
        if (!n) return this.emit("error", new Error("write callback called multiple times"));
        r.writechunk = null, r.writecb = null, null != e && this.push(e), n(t);
        var i = this._readableState;
        i.reading = !1, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
    }

    function a(t) {
        if (!(this instanceof a)) return new a(t);
        n.call(this, t), this._transformState = {
            afterTransform: o.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null
        }, this._readableState.needReadable = !0, this._readableState.sync = !1, t && ("function" === typeof t.transform && (this._transform = t.transform), "function" === typeof t.flush && (this._flush = t.flush)), this.on("prefinish", s)
    }

    function s() {
        var t = this;
        "function" === typeof this._flush ? this._flush(function(e, r) {
            u(t, e, r)
        }) : u(this, null, null)
    }

    function u(t, e, r) {
        if (e) return t.emit("error", e);
        if (null != r && t.push(r), t._writableState.length) throw new Error("Calling transform done when ws.length != 0");
        if (t._transformState.transforming) throw new Error("Calling transform done when still transforming");
        return t.push(null)
    }
    i.inherits = r(7), i.inherits(a, n), a.prototype.push = function(t, e) {
        return this._transformState.needTransform = !1, n.prototype.push.call(this, t, e)
    }, a.prototype._transform = function(t, e, r) {
        throw new Error("_transform() is not implemented")
    }, a.prototype._write = function(t, e, r) {
        var n = this._transformState;
        if (n.writecb = r, n.writechunk = t, n.writeencoding = e, !n.transforming) {
            var i = this._readableState;
            (n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
        }
    }, a.prototype._read = function(t) {
        var e = this._transformState;
        null !== e.writechunk && e.writecb && !e.transforming ? (e.transforming = !0, this._transform(e.writechunk, e.writeencoding, e.afterTransform)) : e.needTransform = !0
    }, a.prototype._destroy = function(t, e) {
        var r = this;
        n.prototype._destroy.call(this, t, function(t) {
            e(t), r.emit("close")
        })
    }
}, function(t, e, r) {
    "use strict";
    r.d(e, "a", function() {
        return i
    });
    var n = r(2);

    function i(t) {
        return function(e) {
            return function(r) {
                return function(i) {
                    var o = i.sendResponse;
                    o && delete(i = Object(n.a)({}, i)).sendResponse;
                    var a = e.getState(),
                        s = r(i);
                    return a !== e.getState() ? t(Object(n.a)({}, i, {
                        sync: !0
                    })) : o && o(Object(n.a)({}, i, {
                        sync: !0
                    })), s
                }
            }
        }
    }
}, function(t, e, r) {
    "use strict";
    r.d(e, "a", function() {
        return i
    });
    var n = r(2),
        i = function() {
            var t = new Set;
            return {
                broadcast: function(e) {
                    t.forEach(function(t) {
                        return t.postMessage(e)
                    })
                },
                initialize: function(e) {
                    chrome.runtime.onConnect.addListener(function(r) {
                        "sync" === r.name && (t.add(r), r.onMessage.addListener(function(t) {
                            e.dispatch(Object(n.a)({}, t, {
                                sendResponse: function(t) {
                                    return r.postMessage(t)
                                }
                            }))
                        }), r.onDisconnect.addListener(function() {
                            return t.delete(r)
                        }))
                    }), chrome.runtime.onMessage.addListener(function(t, r, n) {
                        t.getState && n(e.getState())
                    })
                }
            }
        }
}, function(t, e) {}, function(t, e, r) {
    "use strict";
    (function(t) {
        r.d(e, "a", function() {
            return s
        });
        var n = r(2),
            i = r(1),
            o = r(50),
            a = {
                username: "",
                csrf: "",
                key: t.from(""),
                uid: -1,
                identities: {},
                expirations: {
                    premium: new Date(0),
                    trueAPITrial: new Date(0)
                },
                isLegacyPremium: !1,
                type: o.a.FREE,
                enterprise: {
                    isAdmin: !1,
                    role: ""
                }
            };

        function s(t, e) {
            var r = t || a;
            switch (e.type) {
                case i.n:
                    return Object(n.a)({}, r, {
                        uid: e.payload.uid,
                        csrf: e.payload.csrf,
                        key: e.payload.key,
                        username: e.payload.username
                    });
                case i.k:
                    return Object(n.a)({}, r, {
                        key: e.payload.key,
                        username: e.payload.username
                    });
                case i.i:
                    return a
            }
            return r
        }
    }).call(this, r(8).Buffer)
}, function(t, e, r) {
    "use strict";
    var n;
    r.d(e, "a", function() {
            return n
        }),
        function(t) {
            t[t.FREE = 0] = "FREE", t[t.TEAMS = 1] = "TEAMS", t[t.ENTERPRISE = 2] = "ENTERPRISE", t[t.FAMILY = 3] = "FAMILY", t[t.PREMIUM = 4] = "PREMIUM"
        }(n || (n = {}))
}, function(t, e, r) {
    "use strict";

    function n(t) {
        var e, r = t.Symbol;
        return "function" === typeof r ? r.observable ? e = r.observable : (e = r("observable"), r.observable = e) : e = "@@observable", e
    }
    r.d(e, "a", function() {
        return n
    })
}, function(t, e, r) {
    (function(t) {
        ! function(e) {
            "use strict";

            function r(t, e) {
                t.super_ = e, t.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })
            }

            function n(t, e) {
                Object.defineProperty(this, "kind", {
                    value: t,
                    enumerable: !0
                }), e && e.length && Object.defineProperty(this, "path", {
                    value: e,
                    enumerable: !0
                })
            }

            function i(t, e, r) {
                i.super_.call(this, "E", t), Object.defineProperty(this, "lhs", {
                    value: e,
                    enumerable: !0
                }), Object.defineProperty(this, "rhs", {
                    value: r,
                    enumerable: !0
                })
            }

            function o(t, e) {
                o.super_.call(this, "N", t), Object.defineProperty(this, "rhs", {
                    value: e,
                    enumerable: !0
                })
            }

            function a(t, e) {
                a.super_.call(this, "D", t), Object.defineProperty(this, "lhs", {
                    value: e,
                    enumerable: !0
                })
            }

            function s(t, e, r) {
                s.super_.call(this, "A", t), Object.defineProperty(this, "index", {
                    value: e,
                    enumerable: !0
                }), Object.defineProperty(this, "item", {
                    value: r,
                    enumerable: !0
                })
            }

            function u(t, e, r) {
                var n = t.slice((r || e) + 1 || t.length);
                return t.length = e < 0 ? t.length + e : e, t.push.apply(t, n), t
            }

            function c(t) {
                var e = "undefined" == typeof t ? "undefined" : E(t);
                return "object" !== e ? e : t === Math ? "math" : null === t ? "null" : Array.isArray(t) ? "array" : "[object Date]" === Object.prototype.toString.call(t) ? "date" : "function" == typeof t.toString && /^\/.*\//.test(t.toString()) ? "regexp" : "object"
            }

            function f(t, e, r, n, l, h, d) {
                d = d || [];
                var p = (l = l || []).slice(0);
                if ("undefined" != typeof h) {
                    if (n) {
                        if ("function" == typeof n && n(p, h)) return;
                        if ("object" === ("undefined" == typeof n ? "undefined" : E(n))) {
                            if (n.prefilter && n.prefilter(p, h)) return;
                            if (n.normalize) {
                                var v = n.normalize(p, h, t, e);
                                v && (t = v[0], e = v[1])
                            }
                        }
                    }
                    p.push(h)
                }
                "regexp" === c(t) && "regexp" === c(e) && (t = t.toString(), e = e.toString());
                var g = "undefined" == typeof t ? "undefined" : E(t),
                    y = "undefined" == typeof e ? "undefined" : E(e),
                    b = "undefined" !== g || d && d[d.length - 1].lhs && d[d.length - 1].lhs.hasOwnProperty(h),
                    m = "undefined" !== y || d && d[d.length - 1].rhs && d[d.length - 1].rhs.hasOwnProperty(h);
                if (!b && m) r(new o(p, e));
                else if (!m && b) r(new a(p, t));
                else if (c(t) !== c(e)) r(new i(p, t, e));
                else if ("date" === c(t) && t - e !== 0) r(new i(p, t, e));
                else if ("object" === g && null !== t && null !== e)
                    if (d.filter(function(e) {
                            return e.lhs === t
                        }).length) t !== e && r(new i(p, t, e));
                    else {
                        if (d.push({
                                lhs: t,
                                rhs: e
                            }), Array.isArray(t)) {
                            var w;
                            for (t.length, w = 0; w < t.length; w++) w >= e.length ? r(new s(p, w, new a(void 0, t[w]))) : f(t[w], e[w], r, n, p, w, d);
                            for (; w < e.length;) r(new s(p, w, new o(void 0, e[w++])))
                        } else {
                            var _ = Object.keys(t),
                                x = Object.keys(e);
                            _.forEach(function(i, o) {
                                var a = x.indexOf(i);
                                a >= 0 ? (f(t[i], e[i], r, n, p, i, d), x = u(x, a)) : f(t[i], void 0, r, n, p, i, d)
                            }), x.forEach(function(t) {
                                f(void 0, e[t], r, n, p, t, d)
                            })
                        }
                        d.length = d.length - 1
                    }
                else t !== e && ("number" === g && isNaN(t) && isNaN(e) || r(new i(p, t, e)))
            }

            function l(t, e, r, n) {
                return n = n || [], f(t, e, function(t) {
                    t && n.push(t)
                }, r), n.length ? n : void 0
            }

            function h(t, e, r) {
                if (t && e && r && r.kind) {
                    for (var n = t, i = -1, o = r.path ? r.path.length - 1 : 0; ++i < o;) "undefined" == typeof n[r.path[i]] && (n[r.path[i]] = "number" == typeof r.path[i] ? [] : {}), n = n[r.path[i]];
                    switch (r.kind) {
                        case "A":
                            ! function t(e, r, n) {
                                if (n.path && n.path.length) {
                                    var i, o = e[r],
                                        a = n.path.length - 1;
                                    for (i = 0; i < a; i++) o = o[n.path[i]];
                                    switch (n.kind) {
                                        case "A":
                                            t(o[n.path[i]], n.index, n.item);
                                            break;
                                        case "D":
                                            delete o[n.path[i]];
                                            break;
                                        case "E":
                                        case "N":
                                            o[n.path[i]] = n.rhs
                                    }
                                } else switch (n.kind) {
                                    case "A":
                                        t(e[r], n.index, n.item);
                                        break;
                                    case "D":
                                        e = u(e, r);
                                        break;
                                    case "E":
                                    case "N":
                                        e[r] = n.rhs
                                }
                                return e
                            }(r.path ? n[r.path[i]] : n, r.index, r.item);
                            break;
                        case "D":
                            delete n[r.path[i]];
                            break;
                        case "E":
                        case "N":
                            n[r.path[i]] = r.rhs
                    }
                }
            }

            function d(t) {
                return "color: " + A[t].color + "; font-weight: bold"
            }

            function p(t, e, r, n) {
                var i = l(t, e);
                try {
                    n ? r.groupCollapsed("diff") : r.group("diff")
                } catch (t) {
                    r.log("diff")
                }
                i ? i.forEach(function(t) {
                    var e = t.kind,
                        n = function(t) {
                            var e = t.kind,
                                r = t.path,
                                n = t.lhs,
                                i = t.rhs,
                                o = t.index,
                                a = t.item;
                            switch (e) {
                                case "E":
                                    return [r.join("."), n, "\u2192", i];
                                case "N":
                                    return [r.join("."), i];
                                case "D":
                                    return [r.join(".")];
                                case "A":
                                    return [r.join(".") + "[" + o + "]", a];
                                default:
                                    return []
                            }
                        }(t);
                    r.log.apply(r, ["%c " + A[e].text, d(e)].concat(S(n)))
                }) : r.log("\u2014\u2014 no diff \u2014\u2014");
                try {
                    r.groupEnd()
                } catch (t) {
                    r.log("\u2014\u2014 diff end \u2014\u2014 ")
                }
            }

            function v(t, e, r, n) {
                switch ("undefined" == typeof t ? "undefined" : E(t)) {
                    case "object":
                        return "function" == typeof t[n] ? t[n].apply(t, S(r)) : t[n];
                    case "function":
                        return t(e);
                    default:
                        return t
                }
            }

            function g(t, e) {
                var r = e.logger,
                    n = e.actionTransformer,
                    i = e.titleFormatter,
                    o = void 0 === i ? function(t) {
                        var e = t.timestamp,
                            r = t.duration;
                        return function(t, n, i) {
                            var o = ["action"];
                            return o.push("%c" + String(t.type)), e && o.push("%c@ " + n), r && o.push("%c(in " + i.toFixed(2) + " ms)"), o.join(" ")
                        }
                    }(e) : i,
                    a = e.collapsed,
                    s = e.colors,
                    u = e.level,
                    c = e.diff,
                    f = "undefined" == typeof e.titleFormatter;
                t.forEach(function(i, l) {
                    var h = i.started,
                        d = i.startedTime,
                        g = i.action,
                        y = i.prevState,
                        b = i.error,
                        m = i.took,
                        w = i.nextState,
                        x = t[l + 1];
                    x && (w = x.prevState, m = x.started - h);
                    var E = n(g),
                        S = "function" == typeof a ? a(function() {
                            return w
                        }, g, i) : a,
                        k = _(d),
                        A = s.title ? "color: " + s.title(E) + ";" : "",
                        O = ["color: gray; font-weight: lighter;"];
                    O.push(A), e.timestamp && O.push("color: gray; font-weight: lighter;"), e.duration && O.push("color: gray; font-weight: lighter;");
                    var I = o(E, k, m);
                    try {
                        S ? s.title && f ? r.groupCollapsed.apply(r, ["%c " + I].concat(O)) : r.groupCollapsed(I) : s.title && f ? r.group.apply(r, ["%c " + I].concat(O)) : r.group(I)
                    } catch (t) {
                        r.log(I)
                    }
                    var T = v(u, E, [y], "prevState"),
                        j = v(u, E, [E], "action"),
                        R = v(u, E, [b, y], "error"),
                        C = v(u, E, [w], "nextState");
                    if (T)
                        if (s.prevState) {
                            var N = "color: " + s.prevState(y) + "; font-weight: bold";
                            r[T]("%c prev state", N, y)
                        } else r[T]("prev state", y);
                    if (j)
                        if (s.action) {
                            var P = "color: " + s.action(E) + "; font-weight: bold";
                            r[j]("%c action    ", P, E)
                        } else r[j]("action    ", E);
                    if (b && R)
                        if (s.error) {
                            var L = "color: " + s.error(b, y) + "; font-weight: bold;";
                            r[R]("%c error     ", L, b)
                        } else r[R]("error     ", b);
                    if (C)
                        if (s.nextState) {
                            var B = "color: " + s.nextState(w) + "; font-weight: bold";
                            r[C]("%c next state", B, w)
                        } else r[C]("next state", w);
                    c && p(y, w, r, S);
                    try {
                        r.groupEnd()
                    } catch (t) {
                        r.log("\u2014\u2014 log end \u2014\u2014")
                    }
                })
            }

            function y() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = Object.assign({}, O, t),
                    r = e.logger,
                    n = e.stateTransformer,
                    i = e.errorTransformer,
                    o = e.predicate,
                    a = e.logErrors,
                    s = e.diffPredicate;
                if ("undefined" == typeof r) return function() {
                    return function(t) {
                        return function(e) {
                            return t(e)
                        }
                    }
                };
                if (t.getState && t.dispatch) return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),
                    function() {
                        return function(t) {
                            return function(e) {
                                return t(e)
                            }
                        }
                    };
                var u = [];
                return function(t) {
                    var r = t.getState;
                    return function(t) {
                        return function(c) {
                            if ("function" == typeof o && !o(r, c)) return t(c);
                            var f = {};
                            u.push(f), f.started = x.now(), f.startedTime = new Date, f.prevState = n(r()), f.action = c;
                            var l = void 0;
                            if (a) try {
                                l = t(c)
                            } catch (t) {
                                f.error = i(t)
                            } else l = t(c);
                            f.took = x.now() - f.started, f.nextState = n(r());
                            var h = e.diff && "function" == typeof s ? s(r, c) : e.diff;
                            if (g(u, Object.assign({}, e, {
                                    diff: h
                                })), u.length = 0, f.error) throw f.error;
                            return l
                        }
                    }
                }
            }
            var b, m, w = function(t, e) {
                    return function(t, e) {
                        return new Array(e + 1).join(t)
                    }("0", e - t.toString().length) + t
                },
                _ = function(t) {
                    return w(t.getHours(), 2) + ":" + w(t.getMinutes(), 2) + ":" + w(t.getSeconds(), 2) + "." + w(t.getMilliseconds(), 3)
                },
                x = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance : Date,
                E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                S = function(t) {
                    if (Array.isArray(t)) {
                        for (var e = 0, r = Array(t.length); e < t.length; e++) r[e] = t[e];
                        return r
                    }
                    return Array.from(t)
                },
                k = [];
            b = "object" === ("undefined" == typeof t ? "undefined" : E(t)) && t ? t : "undefined" != typeof window ? window : {}, (m = b.DeepDiff) && k.push(function() {
                "undefined" != typeof m && b.DeepDiff === l && (b.DeepDiff = m, m = void 0)
            }), r(i, n), r(o, n), r(a, n), r(s, n), Object.defineProperties(l, {
                diff: {
                    value: l,
                    enumerable: !0
                },
                observableDiff: {
                    value: f,
                    enumerable: !0
                },
                applyDiff: {
                    value: function(t, e, r) {
                        t && e && f(t, e, function(n) {
                            r && !r(t, e, n) || h(t, e, n)
                        })
                    },
                    enumerable: !0
                },
                applyChange: {
                    value: h,
                    enumerable: !0
                },
                revertChange: {
                    value: function(t, e, r) {
                        if (t && e && r && r.kind) {
                            var n, i, o = t;
                            for (i = r.path.length - 1, n = 0; n < i; n++) "undefined" == typeof o[r.path[n]] && (o[r.path[n]] = {}), o = o[r.path[n]];
                            switch (r.kind) {
                                case "A":
                                    ! function t(e, r, n) {
                                        if (n.path && n.path.length) {
                                            var i, o = e[r],
                                                a = n.path.length - 1;
                                            for (i = 0; i < a; i++) o = o[n.path[i]];
                                            switch (n.kind) {
                                                case "A":
                                                    t(o[n.path[i]], n.index, n.item);
                                                    break;
                                                case "D":
                                                case "E":
                                                    o[n.path[i]] = n.lhs;
                                                    break;
                                                case "N":
                                                    delete o[n.path[i]]
                                            }
                                        } else switch (n.kind) {
                                            case "A":
                                                t(e[r], n.index, n.item);
                                                break;
                                            case "D":
                                            case "E":
                                                e[r] = n.lhs;
                                                break;
                                            case "N":
                                                e = u(e, r)
                                        }
                                        return e
                                    }(o[r.path[n]], r.index, r.item);
                                    break;
                                case "D":
                                case "E":
                                    o[r.path[n]] = r.lhs;
                                    break;
                                case "N":
                                    delete o[r.path[n]]
                            }
                        }
                    },
                    enumerable: !0
                },
                isConflict: {
                    value: function() {
                        return "undefined" != typeof m
                    },
                    enumerable: !0
                },
                noConflict: {
                    value: function() {
                        return k && (k.forEach(function(t) {
                            t()
                        }), k = null), l
                    },
                    enumerable: !0
                }
            });
            var A = {
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
                },
                O = {
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
                },
                I = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = t.dispatch,
                        r = t.getState;
                    return "function" == typeof e || "function" == typeof r ? y()({
                        dispatch: e,
                        getState: r
                    }) : void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")
                };
            e.defaults = O, e.createLogger = y, e.logger = I, e.default = I, Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }(e)
    }).call(this, r(10))
}, function(t, e, r) {
    "use strict";
    var n = r(64),
        i = r(18),
        o = r(18),
        a = r(11).buildOptions;
    e.parse = function(t, e) {
        return e = a(e, o.defaultOptions, o.props), n.convertToJson(i.getTraversalObj(t, e), e)
    }, e.convertTonimn = r(66).convert2nimn, e.getTraversalObj = i.getTraversalObj, e.convertToJson = n.convertToJson, e.convertToJsonString = r(67).convertToJsonString, e.validate = r(68).validate, e.j2xParser = r(69), e.parseToNimn = function(t, r, n) {
        return e.convertTonimn(e.getTraversalObj(t, n), r, n)
    }
}, function(t, e, r) {
    e.pbkdf2 = r(70), e.pbkdf2Sync = r(39)
}, function(t, e, r) {
    "use strict";
    (function(t) {
        r.d(e, "a", function() {
            return c
        });
        var n = r(0),
            i = r.n(n),
            o = r(2),
            a = r(4),
            s = r(30),
            u = r(6);

        function c(e) {
            return {
                unprotect: function() {
                    var r = Object(a.a)(i.a.mark(function r(n) {
                        return i.a.wrap(function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return r.abrupt("return", Promise.all(n.map(function() {
                                        var r = Object(a.a)(i.a.mark(function r(n) {
                                            var a, c;
                                            return i.a.wrap(function(r) {
                                                for (;;) switch (r.prev = r.next) {
                                                    case 0:
                                                        r.t0 = n.protected, r.next = 1 === r.t0 ? 3 : 2 === r.t0 ? 13 : 17;
                                                        break;
                                                    case 3:
                                                        return r.prev = 3, r.next = 6, e({
                                                            arguments: [n.username, n.password],
                                                            cmd: "unprotect_data"
                                                        });
                                                    case 6:
                                                        return a = r.sent, r.abrupt("return", Object(o.a)({}, n, {
                                                            password: a
                                                        }));
                                                    case 10:
                                                        return r.prev = 10, r.t1 = r.catch(3), r.abrupt("return", Object(o.a)({}, n, {
                                                            password: ""
                                                        }));
                                                    case 13:
                                                        return r.next = 15, Object(s.a)(n.password, t.from(Object(u.a)(n.username), "hex"), "base64");
                                                    case 15:
                                                        return c = r.sent, r.abrupt("return", Object(o.a)({}, n, {
                                                            password: c
                                                        }));
                                                    case 17:
                                                        return r.abrupt("return", n);
                                                    case 18:
                                                    case "end":
                                                        return r.stop()
                                                }
                                            }, r, null, [
                                                [3, 10]
                                            ])
                                        }));
                                        return function(t) {
                                            return r.apply(this, arguments)
                                        }
                                    }())));
                                case 1:
                                case "end":
                                    return r.stop()
                            }
                        }, r)
                    }));
                    return function(t) {
                        return r.apply(this, arguments)
                    }
                }(),
                protect: function() {
                    var r = Object(a.a)(i.a.mark(function r(n, o) {
                        var a, c;
                        return i.a.wrap(function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return r.prev = 0, r.next = 3, e({
                                        arguments: [n, o],
                                        cmd: "protect_data"
                                    });
                                case 3:
                                    return a = r.sent, r.abrupt("return", {
                                        username: n,
                                        password: a,
                                        protected: 1
                                    });
                                case 7:
                                    return r.prev = 7, r.t0 = r.catch(0), r.next = 11, Object(s.b)(o, t.from(Object(u.a)(n), "hex"), "base64");
                                case 11:
                                    return c = r.sent, r.abrupt("return", {
                                        username: n,
                                        password: c,
                                        protected: 2
                                    });
                                case 13:
                                case "end":
                                    return r.stop()
                            }
                        }, r, null, [
                            [0, 7]
                        ])
                    }));
                    return function(t, e) {
                        return r.apply(this, arguments)
                    }
                }()
            }
        }
    }).call(this, r(8).Buffer)
}, function(t, e, r) {
    "use strict";
    e.byteLength = function(t) {
        var e = c(t),
            r = e[0],
            n = e[1];
        return 3 * (r + n) / 4 - n
    }, e.toByteArray = function(t) {
        for (var e, r = c(t), n = r[0], a = r[1], s = new o(function(t, e, r) {
                return 3 * (e + r) / 4 - r
            }(0, n, a)), u = 0, f = a > 0 ? n - 4 : n, l = 0; l < f; l += 4) e = i[t.charCodeAt(l)] << 18 | i[t.charCodeAt(l + 1)] << 12 | i[t.charCodeAt(l + 2)] << 6 | i[t.charCodeAt(l + 3)], s[u++] = e >> 16 & 255, s[u++] = e >> 8 & 255, s[u++] = 255 & e;
        2 === a && (e = i[t.charCodeAt(l)] << 2 | i[t.charCodeAt(l + 1)] >> 4, s[u++] = 255 & e);
        1 === a && (e = i[t.charCodeAt(l)] << 10 | i[t.charCodeAt(l + 1)] << 4 | i[t.charCodeAt(l + 2)] >> 2, s[u++] = e >> 8 & 255, s[u++] = 255 & e);
        return s
    }, e.fromByteArray = function(t) {
        for (var e, r = t.length, i = r % 3, o = [], a = 0, s = r - i; a < s; a += 16383) o.push(f(t, a, a + 16383 > s ? s : a + 16383));
        1 === i ? (e = t[r - 1], o.push(n[e >> 2] + n[e << 4 & 63] + "==")) : 2 === i && (e = (t[r - 2] << 8) + t[r - 1], o.push(n[e >> 10] + n[e >> 4 & 63] + n[e << 2 & 63] + "="));
        return o.join("")
    };
    for (var n = [], i = [], o = "undefined" !== typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, u = a.length; s < u; ++s) n[s] = a[s], i[a.charCodeAt(s)] = s;

    function c(t) {
        var e = t.length;
        if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        var r = t.indexOf("=");
        return -1 === r && (r = e), [r, r === e ? 0 : 4 - r % 4]
    }

    function f(t, e, r) {
        for (var i, o, a = [], s = e; s < r; s += 3) i = (t[s] << 16 & 16711680) + (t[s + 1] << 8 & 65280) + (255 & t[s + 2]), a.push(n[(o = i) >> 18 & 63] + n[o >> 12 & 63] + n[o >> 6 & 63] + n[63 & o]);
        return a.join("")
    }
    i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63
}, function(t, e) {
    e.read = function(t, e, r, n, i) {
        var o, a, s = 8 * i - n - 1,
            u = (1 << s) - 1,
            c = u >> 1,
            f = -7,
            l = r ? i - 1 : 0,
            h = r ? -1 : 1,
            d = t[e + l];
        for (l += h, o = d & (1 << -f) - 1, d >>= -f, f += s; f > 0; o = 256 * o + t[e + l], l += h, f -= 8);
        for (a = o & (1 << -f) - 1, o >>= -f, f += n; f > 0; a = 256 * a + t[e + l], l += h, f -= 8);
        if (0 === o) o = 1 - c;
        else {
            if (o === u) return a ? NaN : 1 / 0 * (d ? -1 : 1);
            a += Math.pow(2, n), o -= c
        }
        return (d ? -1 : 1) * a * Math.pow(2, o - n)
    }, e.write = function(t, e, r, n, i, o) {
        var a, s, u, c = 8 * o - i - 1,
            f = (1 << c) - 1,
            l = f >> 1,
            h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            d = n ? 0 : o - 1,
            p = n ? 1 : -1,
            v = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
        for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (s = isNaN(e) ? 1 : 0, a = f) : (a = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -a)) < 1 && (a--, u *= 2), (e += a + l >= 1 ? h / u : h * Math.pow(2, 1 - l)) * u >= 2 && (a++, u /= 2), a + l >= f ? (s = 0, a = f) : a + l >= 1 ? (s = (e * u - 1) * Math.pow(2, i), a += l) : (s = e * Math.pow(2, l - 1) * Math.pow(2, i), a = 0)); i >= 8; t[r + d] = 255 & s, d += p, s /= 256, i -= 8);
        for (a = a << i | s, c += i; c > 0; t[r + d] = 255 & a, d += p, a /= 256, c -= 8);
        t[r + d - p] |= 128 * v
    }
}, function(t, e) {
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
}, function(t, e, r) {
    var n = function(t) {
        "use strict";
        var e, r = Object.prototype,
            n = r.hasOwnProperty,
            i = "function" === typeof Symbol ? Symbol : {},
            o = i.iterator || "@@iterator",
            a = i.asyncIterator || "@@asyncIterator",
            s = i.toStringTag || "@@toStringTag";

        function u(t, e, r, n) {
            var i = e && e.prototype instanceof v ? e : v,
                o = Object.create(i.prototype),
                a = new O(n || []);
            return o._invoke = function(t, e, r) {
                var n = f;
                return function(i, o) {
                    if (n === h) throw new Error("Generator is already running");
                    if (n === d) {
                        if ("throw" === i) throw o;
                        return T()
                    }
                    for (r.method = i, r.arg = o;;) {
                        var a = r.delegate;
                        if (a) {
                            var s = S(a, r);
                            if (s) {
                                if (s === p) continue;
                                return s
                            }
                        }
                        if ("next" === r.method) r.sent = r._sent = r.arg;
                        else if ("throw" === r.method) {
                            if (n === f) throw n = d, r.arg;
                            r.dispatchException(r.arg)
                        } else "return" === r.method && r.abrupt("return", r.arg);
                        n = h;
                        var u = c(t, e, r);
                        if ("normal" === u.type) {
                            if (n = r.done ? d : l, u.arg === p) continue;
                            return {
                                value: u.arg,
                                done: r.done
                            }
                        }
                        "throw" === u.type && (n = d, r.method = "throw", r.arg = u.arg)
                    }
                }
            }(t, r, a), o
        }

        function c(t, e, r) {
            try {
                return {
                    type: "normal",
                    arg: t.call(e, r)
                }
            } catch (n) {
                return {
                    type: "throw",
                    arg: n
                }
            }
        }
        t.wrap = u;
        var f = "suspendedStart",
            l = "suspendedYield",
            h = "executing",
            d = "completed",
            p = {};

        function v() {}

        function g() {}

        function y() {}
        var b = {};
        b[o] = function() {
            return this
        };
        var m = Object.getPrototypeOf,
            w = m && m(m(I([])));
        w && w !== r && n.call(w, o) && (b = w);
        var _ = y.prototype = v.prototype = Object.create(b);

        function x(t) {
            ["next", "throw", "return"].forEach(function(e) {
                t[e] = function(t) {
                    return this._invoke(e, t)
                }
            })
        }

        function E(t) {
            var e;
            this._invoke = function(r, i) {
                function o() {
                    return new Promise(function(e, o) {
                        ! function e(r, i, o, a) {
                            var s = c(t[r], t, i);
                            if ("throw" !== s.type) {
                                var u = s.arg,
                                    f = u.value;
                                return f && "object" === typeof f && n.call(f, "__await") ? Promise.resolve(f.__await).then(function(t) {
                                    e("next", t, o, a)
                                }, function(t) {
                                    e("throw", t, o, a)
                                }) : Promise.resolve(f).then(function(t) {
                                    u.value = t, o(u)
                                }, function(t) {
                                    return e("throw", t, o, a)
                                })
                            }
                            a(s.arg)
                        }(r, i, e, o)
                    })
                }
                return e = e ? e.then(o, o) : o()
            }
        }

        function S(t, r) {
            var n = t.iterator[r.method];
            if (n === e) {
                if (r.delegate = null, "throw" === r.method) {
                    if (t.iterator.return && (r.method = "return", r.arg = e, S(t, r), "throw" === r.method)) return p;
                    r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return p
            }
            var i = c(n, t.iterator, r.arg);
            if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, p;
            var o = i.arg;
            return o ? o.done ? (r[t.resultName] = o.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = e), r.delegate = null, p) : o : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, p)
        }

        function k(t) {
            var e = {
                tryLoc: t[0]
            };
            1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
        }

        function A(t) {
            var e = t.completion || {};
            e.type = "normal", delete e.arg, t.completion = e
        }

        function O(t) {
            this.tryEntries = [{
                tryLoc: "root"
            }], t.forEach(k, this), this.reset(!0)
        }

        function I(t) {
            if (t) {
                var r = t[o];
                if (r) return r.call(t);
                if ("function" === typeof t.next) return t;
                if (!isNaN(t.length)) {
                    var i = -1,
                        a = function r() {
                            for (; ++i < t.length;)
                                if (n.call(t, i)) return r.value = t[i], r.done = !1, r;
                            return r.value = e, r.done = !0, r
                        };
                    return a.next = a
                }
            }
            return {
                next: T
            }
        }

        function T() {
            return {
                value: e,
                done: !0
            }
        }
        return g.prototype = _.constructor = y, y.constructor = g, y[s] = g.displayName = "GeneratorFunction", t.isGeneratorFunction = function(t) {
            var e = "function" === typeof t && t.constructor;
            return !!e && (e === g || "GeneratorFunction" === (e.displayName || e.name))
        }, t.mark = function(t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, s in t || (t[s] = "GeneratorFunction")), t.prototype = Object.create(_), t
        }, t.awrap = function(t) {
            return {
                __await: t
            }
        }, x(E.prototype), E.prototype[a] = function() {
            return this
        }, t.AsyncIterator = E, t.async = function(e, r, n, i) {
            var o = new E(u(e, r, n, i));
            return t.isGeneratorFunction(r) ? o : o.next().then(function(t) {
                return t.done ? t.value : o.next()
            })
        }, x(_), _[s] = "Generator", _[o] = function() {
            return this
        }, _.toString = function() {
            return "[object Generator]"
        }, t.keys = function(t) {
            var e = [];
            for (var r in t) e.push(r);
            return e.reverse(),
                function r() {
                    for (; e.length;) {
                        var n = e.pop();
                        if (n in t) return r.value = n, r.done = !1, r
                    }
                    return r.done = !0, r
                }
        }, t.values = I, O.prototype = {
            constructor: O,
            reset: function(t) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(A), !t)
                    for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e)
            },
            stop: function() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval
            },
            dispatchException: function(t) {
                if (this.done) throw t;
                var r = this;

                function i(n, i) {
                    return s.type = "throw", s.arg = t, r.next = n, i && (r.method = "next", r.arg = e), !!i
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                    var a = this.tryEntries[o],
                        s = a.completion;
                    if ("root" === a.tryLoc) return i("end");
                    if (a.tryLoc <= this.prev) {
                        var u = n.call(a, "catchLoc"),
                            c = n.call(a, "finallyLoc");
                        if (u && c) {
                            if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                            if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                        } else if (u) {
                            if (this.prev < a.catchLoc) return i(a.catchLoc, !0)
                        } else {
                            if (!c) throw new Error("try statement without catch or finally");
                            if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var i = this.tryEntries[r];
                    if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                        var o = i;
                        break
                    }
                }
                o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                var a = o ? o.completion : {};
                return a.type = t, a.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, p) : this.complete(a)
            },
            complete: function(t, e) {
                if ("throw" === t.type) throw t.arg;
                return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), p
            },
            finish: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var r = this.tryEntries[e];
                    if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), A(r), p
                }
            },
            catch: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var r = this.tryEntries[e];
                    if (r.tryLoc === t) {
                        var n = r.completion;
                        if ("throw" === n.type) {
                            var i = n.arg;
                            A(r)
                        }
                        return i
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(t, r, n) {
                return this.delegate = {
                    iterator: I(t),
                    resultName: r,
                    nextLoc: n
                }, "next" === this.method && (this.arg = e), p
            }
        }, t
    }(t.exports);
    try {
        regeneratorRuntime = n
    } catch (i) {
        Function("r", "regeneratorRuntime = r")(n)
    }
}, function(t, e, r) {
    var n = r(7),
        i = r(14),
        o = r(9).Buffer,
        a = [1518500249, 1859775393, -1894007588, -899497514],
        s = new Array(80);

    function u() {
        this.init(), this._w = s, i.call(this, 64, 56)
    }

    function c(t) {
        return t << 30 | t >>> 2
    }

    function f(t, e, r, n) {
        return 0 === t ? e & r | ~e & n : 2 === t ? e & r | e & n | r & n : e ^ r ^ n
    }
    n(u, i), u.prototype.init = function() {
        return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
    }, u.prototype._update = function(t) {
        for (var e, r = this._w, n = 0 | this._a, i = 0 | this._b, o = 0 | this._c, s = 0 | this._d, u = 0 | this._e, l = 0; l < 16; ++l) r[l] = t.readInt32BE(4 * l);
        for (; l < 80; ++l) r[l] = r[l - 3] ^ r[l - 8] ^ r[l - 14] ^ r[l - 16];
        for (var h = 0; h < 80; ++h) {
            var d = ~~(h / 20),
                p = 0 | ((e = n) << 5 | e >>> 27) + f(d, i, o, s) + u + r[h] + a[d];
            u = s, s = o, o = c(i), i = n, n = p
        }
        this._a = n + this._a | 0, this._b = i + this._b | 0, this._c = o + this._c | 0, this._d = s + this._d | 0, this._e = u + this._e | 0
    }, u.prototype._hash = function() {
        var t = o.allocUnsafe(20);
        return t.writeInt32BE(0 | this._a, 0), t.writeInt32BE(0 | this._b, 4), t.writeInt32BE(0 | this._c, 8), t.writeInt32BE(0 | this._d, 12), t.writeInt32BE(0 | this._e, 16), t
    }, t.exports = u
}, function(t, e, r) {
    var n = r(7),
        i = r(14),
        o = r(9).Buffer,
        a = [1518500249, 1859775393, -1894007588, -899497514],
        s = new Array(80);

    function u() {
        this.init(), this._w = s, i.call(this, 64, 56)
    }

    function c(t) {
        return t << 5 | t >>> 27
    }

    function f(t) {
        return t << 30 | t >>> 2
    }

    function l(t, e, r, n) {
        return 0 === t ? e & r | ~e & n : 2 === t ? e & r | e & n | r & n : e ^ r ^ n
    }
    n(u, i), u.prototype.init = function() {
        return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
    }, u.prototype._update = function(t) {
        for (var e, r = this._w, n = 0 | this._a, i = 0 | this._b, o = 0 | this._c, s = 0 | this._d, u = 0 | this._e, h = 0; h < 16; ++h) r[h] = t.readInt32BE(4 * h);
        for (; h < 80; ++h) r[h] = (e = r[h - 3] ^ r[h - 8] ^ r[h - 14] ^ r[h - 16]) << 1 | e >>> 31;
        for (var d = 0; d < 80; ++d) {
            var p = ~~(d / 20),
                v = c(n) + l(p, i, o, s) + u + r[d] + a[p] | 0;
            u = s, s = o, o = f(i), i = n, n = v
        }
        this._a = n + this._a | 0, this._b = i + this._b | 0, this._c = o + this._c | 0, this._d = s + this._d | 0, this._e = u + this._e | 0
    }, u.prototype._hash = function() {
        var t = o.allocUnsafe(20);
        return t.writeInt32BE(0 | this._a, 0), t.writeInt32BE(0 | this._b, 4), t.writeInt32BE(0 | this._c, 8), t.writeInt32BE(0 | this._d, 12), t.writeInt32BE(0 | this._e, 16), t
    }, t.exports = u
}, function(t, e, r) {
    var n = r(7),
        i = r(34),
        o = r(14),
        a = r(9).Buffer,
        s = new Array(64);

    function u() {
        this.init(), this._w = s, o.call(this, 64, 56)
    }
    n(u, i), u.prototype.init = function() {
        return this._a = 3238371032, this._b = 914150663, this._c = 812702999, this._d = 4144912697, this._e = 4290775857, this._f = 1750603025, this._g = 1694076839, this._h = 3204075428, this
    }, u.prototype._hash = function() {
        var t = a.allocUnsafe(28);
        return t.writeInt32BE(this._a, 0), t.writeInt32BE(this._b, 4), t.writeInt32BE(this._c, 8), t.writeInt32BE(this._d, 12), t.writeInt32BE(this._e, 16), t.writeInt32BE(this._f, 20), t.writeInt32BE(this._g, 24), t
    }, t.exports = u
}, function(t, e, r) {
    var n = r(7),
        i = r(35),
        o = r(14),
        a = r(9).Buffer,
        s = new Array(160);

    function u() {
        this.init(), this._w = s, o.call(this, 128, 112)
    }
    n(u, i), u.prototype.init = function() {
        return this._ah = 3418070365, this._bh = 1654270250, this._ch = 2438529370, this._dh = 355462360, this._eh = 1731405415, this._fh = 2394180231, this._gh = 3675008525, this._hh = 1203062813, this._al = 3238371032, this._bl = 914150663, this._cl = 812702999, this._dl = 4144912697, this._el = 4290775857, this._fl = 1750603025, this._gl = 1694076839, this._hl = 3204075428, this
    }, u.prototype._hash = function() {
        var t = a.allocUnsafe(48);

        function e(e, r, n) {
            t.writeInt32BE(e, n), t.writeInt32BE(r, n + 4)
        }
        return e(this._ah, this._al, 0), e(this._bh, this._bl, 8), e(this._ch, this._cl, 16), e(this._dh, this._dl, 24), e(this._eh, this._el, 32), e(this._fh, this._fl, 40), t
    }, t.exports = u
}, function(t, e, r) {
    "use strict";
    var n = r(11);
    e.convertToJson = function t(e, r) {
        var i = {};
        if (!(e.child && !n.isEmptyObject(e.child) || e.attrsMap && !n.isEmptyObject(e.attrsMap))) return n.isExist(e.val) ? e.val : "";
        n.isExist(e.val) && ("string" !== typeof e.val || "" !== e.val && e.val !== r.cdataPositionChar) && (i[r.textNodeName] = e.val), n.merge(i, e.attrsMap);
        for (var o = Object.keys(e.child), a = 0; a < o.length; a++) {
            var s = o[a];
            if (e.child[s] && e.child[s].length > 1)
                for (var u in i[s] = [], e.child[s]) i[s].push(t(e.child[s][u], r));
            else i[s] = t(e.child[s][0], r)
        }
        return i
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t, e, r) {
        this.tagname = t, this.parent = e, this.child = {}, this.attrsMap = {}, this.val = r, this.addChild = function(t) {
            Array.isArray(this.child[t.tagname]) ? this.child[t.tagname].push(t) : this.child[t.tagname] = [t]
        }
    }
}, function(t, e, r) {
    "use strict";
    var n = function(t) {
            return String.fromCharCode(t)
        },
        i = {
            nilChar: n(176),
            missingChar: n(201),
            nilPremitive: n(175),
            missingPremitive: n(200),
            emptyChar: n(178),
            emptyValue: n(177),
            boundryChar: n(179),
            objStart: n(198),
            arrStart: n(204),
            arrayEnd: n(185)
        },
        o = [i.nilChar, i.nilPremitive, i.missingChar, i.missingPremitive, i.boundryChar, i.emptyChar, i.emptyValue, i.arrayEnd, i.objStart, i.arrStart],
        a = function t(e, r, n) {
            if ("string" === typeof r) return e && e[0] && void 0 !== e[0].val ? s(e[0].val, r) : s(e, r);
            var o, a = void 0 === (o = e) ? i.missingChar : null === o ? i.nilChar : !(o.child && 0 === Object.keys(o.child).length && (!o.attrsMap || 0 === Object.keys(o.attrsMap).length)) || i.emptyChar;
            if (!0 === a) {
                var c = "";
                if (Array.isArray(r)) {
                    c += i.arrStart;
                    var f = r[0],
                        l = e.length;
                    if ("string" === typeof f)
                        for (var h = 0; h < l; h++) {
                            var d = s(e[h].val, f);
                            c = u(c, d)
                        } else
                            for (var p = 0; p < l; p++) {
                                var v = t(e[p], f, n);
                                c = u(c, v)
                            }
                    c += i.arrayEnd
                } else {
                    c += i.objStart;
                    var g = Object.keys(r);
                    for (var y in Array.isArray(e) && (e = e[0]), g) {
                        var b = g[y],
                            m = void 0;
                        m = !n.ignoreAttributes && e.attrsMap && e.attrsMap[b] ? t(e.attrsMap[b], r[b], n) : b === n.textNodeName ? t(e.val, r[b], n) : t(e.child[b], r[b], n), c = u(c, m)
                    }
                }
                return c
            }
            return a
        },
        s = function(t) {
            switch (t) {
                case void 0:
                    return i.missingPremitive;
                case null:
                    return i.nilPremitive;
                case "":
                    return i.emptyValue;
                default:
                    return t
            }
        },
        u = function(t, e) {
            return c(e[0]) || c(t[t.length - 1]) || (t += i.boundryChar), t + e
        },
        c = function(t) {
            return -1 !== o.indexOf(t)
        };
    var f = r(18),
        l = r(11).buildOptions;
    e.convert2nimn = function(t, e, r) {
        return r = l(r, f.defaultOptions, f.props), a(t, e, r)
    }
}, function(t, e, r) {
    "use strict";
    var n = r(11),
        i = r(11).buildOptions,
        o = r(18),
        a = function t(e, r, i) {
            for (var o, a = "{", s = Object.keys(e.child), u = 0; u < s.length; u++) {
                var c = s[u];
                if (e.child[c] && e.child[c].length > 1) {
                    for (var f in a += '"' + c + '" : [ ', e.child[c]) a += t(e.child[c][f], r) + " , ";
                    a = a.substr(0, a.length - 1) + " ] "
                } else a += '"' + c + '" : ' + t(e.child[c][0], r) + " ,"
            }
            return n.merge(a, e.attrsMap), n.isEmptyObject(a) ? n.isExist(e.val) ? e.val : "" : (n.isExist(e.val) && ("string" !== typeof e.val || "" !== e.val && e.val !== r.cdataPositionChar) && (a += '"' + r.textNodeName + '" : ' + (!0 !== (o = e.val) && !1 !== o && isNaN(o) ? '"' + o + '"' : o)), "," === a[a.length - 1] && (a = a.substr(0, a.length - 2)), a + "}")
        };
    e.convertToJsonString = function(t, e) {
        return (e = i(e, o.defaultOptions, o.props)).indentBy = e.indentBy || "", a(t, e, 0)
    }
}, function(t, e, r) {
    "use strict";
    var n = r(11),
        i = {
            allowBooleanAttributes: !1,
            localeRange: "a-zA-Z"
        },
        o = ["allowBooleanAttributes", "localeRange"];

    function a(t, e) {
        for (var r = e; e < t.length; e++)
            if ("?" != t[e] && " " != t[e]);
            else {
                var n = t.substr(r, e - r);
                if (e > 5 && "xml" === n) return {
                    err: {
                        code: "InvalidXml",
                        msg: "XML declaration allowed only at the start of the document."
                    }
                };
                if ("?" == t[e] && ">" == t[e + 1]) {
                    e++;
                    break
                }
            } return e
    }

    function s(t, e) {
        if (t.length > e + 5 && "-" === t[e + 1] && "-" === t[e + 2]) {
            for (e += 3; e < t.length; e++)
                if ("-" === t[e] && "-" === t[e + 1] && ">" === t[e + 2]) {
                    e += 2;
                    break
                }
        } else if (t.length > e + 8 && "D" === t[e + 1] && "O" === t[e + 2] && "C" === t[e + 3] && "T" === t[e + 4] && "Y" === t[e + 5] && "P" === t[e + 6] && "E" === t[e + 7]) {
            var r = 1;
            for (e += 8; e < t.length; e++)
                if ("<" === t[e]) r++;
                else if (">" === t[e] && 0 === --r) break
        } else if (t.length > e + 9 && "[" === t[e + 1] && "C" === t[e + 2] && "D" === t[e + 3] && "A" === t[e + 4] && "T" === t[e + 5] && "A" === t[e + 6] && "[" === t[e + 7])
            for (e += 8; e < t.length; e++)
                if ("]" === t[e] && "]" === t[e + 1] && ">" === t[e + 2]) {
                    e += 2;
                    break
                } return e
    }
    e.validate = function(t, e) {
        e = n.buildOptions(e, i, o);
        var r = [],
            u = !1;
        "\ufeff" === t[0] && (t = t.substr(1));
        for (var c = new RegExp("^[_w][\\w\\-.:]*$".replace("_w", "_" + e.localeRange)), l = new RegExp("^([w]|_)[\\w.\\-_:]*".replace("([w", "([" + e.localeRange)), d = 0; d < t.length; d++) {
            if ("<" !== t[d]) {
                if (" " === t[d] || "\t" === t[d] || "\n" === t[d] || "\r" === t[d]) continue;
                return {
                    err: {
                        code: "InvalidChar",
                        msg: "char " + t[d] + " is not expected ."
                    }
                }
            }
            if ("?" === t[++d]) {
                if ((d = a(t, ++d)).err) return d
            } else {
                if ("!" === t[d]) {
                    d = s(t, d);
                    continue
                }
                var v = !1;
                "/" === t[d] && (v = !0, d++);
                for (var g = ""; d < t.length && ">" !== t[d] && " " !== t[d] && "\t" !== t[d]; d++) g += t[d];
                if ("/" === (g = g.trim())[g.length - 1]) {
                    g = g.substring(0, g.length - 1);
                    continue
                }
                if (!p(g, l)) return {
                    err: {
                        code: "InvalidTag",
                        msg: "Tag " + g + " is an invalid name."
                    }
                };
                var y = f(t, d);
                if (!1 === y) return {
                    err: {
                        code: "InvalidAttr",
                        msg: "Attributes for " + g + " have open quote"
                    }
                };
                var b = y.value;
                if (d = y.index, "/" === b[b.length - 1]) {
                    var m = h(b = b.substring(0, b.length - 1), e, c);
                    if (!0 !== m) return m;
                    u = !0
                } else if (v) {
                    if (b.trim().length > 0) return {
                        err: {
                            code: "InvalidTag",
                            msg: "closing tag " + g + " can't have attributes or invalid starting."
                        }
                    };
                    var w = r.pop();
                    if (g !== w) return {
                        err: {
                            code: "InvalidTag",
                            msg: "closing tag " + w + " is expected inplace of " + g + "."
                        }
                    }
                } else {
                    var _ = h(b, e, c);
                    if (!0 !== _) return _;
                    r.push(g), u = !0
                }
                for (d++; d < t.length; d++)
                    if ("<" === t[d]) {
                        if ("!" === t[d + 1]) {
                            d = s(t, ++d);
                            continue
                        }
                        break
                    }
                "<" === t[d] && d--
            }
        }
        return u ? !(r.length > 0) || {
            err: {
                code: "InvalidXml",
                msg: "Invalid " + JSON.stringify(r, null, 4).replace(/\r?\n/g, "") + " found."
            }
        } : {
            err: {
                code: "InvalidXml",
                msg: "Start tag expected."
            }
        }
    };
    var u = '"',
        c = "'";

    function f(t, e) {
        for (var r = "", n = ""; e < t.length; e++) {
            if (t[e] === u || t[e] === c)
                if ("" === n) n = t[e];
                else {
                    if (n !== t[e]) continue;
                    n = ""
                }
            else if (">" === t[e] && "" === n) break;
            r += t[e]
        }
        return "" === n && {
            value: r,
            index: e
        }
    }
    var l = new RegExp("(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?", "g");

    function h(t, e, r) {
        for (var i = n.getAllMatches(t, l), o = {}, a = 0; a < i.length; a++) {
            if (0 === i[a][1].length) return {
                err: {
                    code: "InvalidAttr",
                    msg: "attribute " + i[a][2] + " has no space in starting."
                }
            };
            if (void 0 === i[a][3] && !e.allowBooleanAttributes) return {
                err: {
                    code: "InvalidAttr",
                    msg: "boolean attribute " + i[a][2] + " is not allowed."
                }
            };
            var s = i[a][2];
            if (!d(s, r)) return {
                err: {
                    code: "InvalidAttr",
                    msg: "attribute " + s + " is an invalid name."
                }
            };
            if (o.hasOwnProperty(s)) return {
                err: {
                    code: "InvalidAttr",
                    msg: "attribute " + s + " is repeated."
                }
            };
            o[s] = 1
        }
        return !0
    }

    function d(t, e) {
        return n.doesMatch(t, e)
    }

    function p(t, e) {
        return !n.doesNotMatch(t, e)
    }
}, function(t, e, r) {
    "use strict";
    var n = r(11).buildOptions,
        i = {
            attributeNamePrefix: "@_",
            attrNodeName: !1,
            textNodeName: "#text",
            ignoreAttributes: !0,
            cdataTagName: !1,
            cdataPositionChar: "\\c",
            format: !1,
            indentBy: "  ",
            supressEmptyNode: !1,
            tagValueProcessor: function(t) {
                return t
            },
            attrValueProcessor: function(t) {
                return t
            }
        },
        o = ["attributeNamePrefix", "attrNodeName", "textNodeName", "ignoreAttributes", "cdataTagName", "cdataPositionChar", "format", "indentBy", "supressEmptyNode", "tagValueProcessor", "attrValueProcessor"];

    function a(t) {
        this.options = n(t, i, o), this.options.ignoreAttributes || this.options.attrNodeName ? this.isAttribute = function() {
            return !1
        } : (this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = p), this.options.cdataTagName ? this.isCDATA = v : this.isCDATA = function() {
            return !1
        }, this.replaceCDATAstr = s, this.replaceCDATAarr = u, this.options.format ? (this.indentate = d, this.tagEndChar = ">\n", this.newLine = "\n") : (this.indentate = function() {
            return ""
        }, this.tagEndChar = ">", this.newLine = ""), this.options.supressEmptyNode ? (this.buildTextNode = h, this.buildObjNode = f) : (this.buildTextNode = l, this.buildObjNode = c), this.buildTextValNode = l, this.buildObjectNode = c
    }

    function s(t, e) {
        return t = this.options.tagValueProcessor("" + t), "" === this.options.cdataPositionChar || "" === t ? t + "<![CDATA[" + e + "]]" + this.tagEndChar : t.replace(this.options.cdataPositionChar, "<![CDATA[" + e + "]]" + this.tagEndChar)
    }

    function u(t, e) {
        if (t = this.options.tagValueProcessor("" + t), "" === this.options.cdataPositionChar || "" === t) return t + "<![CDATA[" + e.join("]]><![CDATA[") + "]]" + this.tagEndChar;
        for (var r in e) t = t.replace(this.options.cdataPositionChar, "<![CDATA[" + e[r] + "]]>");
        return t + this.newLine
    }

    function c(t, e, r, n) {
        return r && !t.includes("<") ? this.indentate(n) + "<" + e + r + ">" + t + "</" + e + this.tagEndChar : this.indentate(n) + "<" + e + r + this.tagEndChar + t + this.indentate(n) + "</" + e + this.tagEndChar
    }

    function f(t, e, r, n) {
        return "" !== t ? this.buildObjectNode(t, e, r, n) : this.indentate(n) + "<" + e + r + "/" + this.tagEndChar
    }

    function l(t, e, r, n) {
        return this.indentate(n) + "<" + e + r + ">" + this.options.tagValueProcessor("" + t) + "</" + e + this.tagEndChar
    }

    function h(t, e, r, n) {
        return "" !== t ? this.buildTextValNode(t, e, r, n) : this.indentate(n) + "<" + e + r + "/" + this.tagEndChar
    }

    function d(t) {
        return this.options.indentBy.repeat(t)
    }

    function p(t) {
        return !!t.startsWith(this.options.attributeNamePrefix) && t.substr(this.attrPrefixLen)
    }

    function v(t) {
        return t === this.options.cdataTagName
    }
    a.prototype.parse = function(t) {
        return this.j2x(t, 0).val
    }, a.prototype.j2x = function(t, e) {
        for (var r = "", n = "", i = Object.keys(t), o = i.length, a = 0; a < o; a++) {
            var s = i[a];
            if ("undefined" === typeof t[s]);
            else if (null === t[s]) n += this.indentate(e) + "<" + s + "/" + this.tagEndChar;
            else if ("object" !== typeof t[s]) {
                var u = this.isAttribute(s);
                u ? r += " " + u + '="' + this.options.attrValueProcessor("" + t[s]) + '"' : this.isCDATA(s) ? t[this.options.textNodeName] ? n += this.replaceCDATAstr(t[this.options.textNodeName], t[s]) : n += this.replaceCDATAstr("", t[s]) : s === this.options.textNodeName ? t[this.options.cdataTagName] || (n += this.options.tagValueProcessor("" + t[s])) : n += this.buildTextNode(t[s], s, "", e)
            } else if (Array.isArray(t[s]))
                if (this.isCDATA(s)) n += this.indentate(e), t[this.options.textNodeName] ? n += this.replaceCDATAarr(t[this.options.textNodeName], t[s]) : n += this.replaceCDATAarr("", t[s]);
                else
                    for (var c = t[s].length, f = 0; f < c; f++) {
                        var l = t[s][f];
                        if ("undefined" === typeof l);
                        else if (null === l) n += this.indentate(e) + "<" + s + "/" + this.tagEndChar;
                        else if ("object" === typeof l) {
                            var h = this.j2x(l, e + 1);
                            n += this.buildObjNode(h.val, s, h.attrStr, e)
                        } else n += this.buildTextNode(l, s, "", e)
                    } else if (this.options.attrNodeName && s === this.options.attrNodeName)
                        for (var d = Object.keys(t[s]), p = d.length, v = 0; v < p; v++) r += " " + d[v] + '="' + this.options.attrValueProcessor("" + t[s][d[v]]) + '"';
                    else {
                        var g = this.j2x(t[s], e + 1);
                        n += this.buildObjNode(g.val, s, g.attrStr, e)
                    }
        }
        return {
            attrStr: r,
            val: n
        }
    }, t.exports = a
}, function(t, e, r) {
    (function(e, n) {
        var i, o = r(37),
            a = r(38),
            s = r(39),
            u = r(9).Buffer,
            c = e.crypto && e.crypto.subtle,
            f = {
                sha: "SHA-1",
                "sha-1": "SHA-1",
                sha1: "SHA-1",
                sha256: "SHA-256",
                "sha-256": "SHA-256",
                sha384: "SHA-384",
                "sha-384": "SHA-384",
                "sha-512": "SHA-512",
                sha512: "SHA-512"
            },
            l = [];

        function h(t, e, r, n, i) {
            return c.importKey("raw", t, {
                name: "PBKDF2"
            }, !1, ["deriveBits"]).then(function(t) {
                return c.deriveBits({
                    name: "PBKDF2",
                    salt: e,
                    iterations: r,
                    hash: {
                        name: i
                    }
                }, t, n << 3)
            }).then(function(t) {
                return u.from(t)
            })
        }
        t.exports = function(t, r, d, p, v, g) {
            "function" === typeof v && (g = v, v = void 0);
            var y = f[(v = v || "sha1").toLowerCase()];
            if (!y || "function" !== typeof e.Promise) return n.nextTick(function() {
                var e;
                try {
                    e = s(t, r, d, p, v)
                } catch (n) {
                    return g(n)
                }
                g(null, e)
            });
            if (o(t, r, d, p), "function" !== typeof g) throw new Error("No callback provided to pbkdf2");
            u.isBuffer(t) || (t = u.from(t, a)), u.isBuffer(r) || (r = u.from(r, a)),
                function(t, e) {
                    t.then(function(t) {
                        n.nextTick(function() {
                            e(null, t)
                        })
                    }, function(t) {
                        n.nextTick(function() {
                            e(t)
                        })
                    })
                }(function(t) {
                    if (e.process && !e.process.browser) return Promise.resolve(!1);
                    if (!c || !c.importKey || !c.deriveBits) return Promise.resolve(!1);
                    if (void 0 !== l[t]) return l[t];
                    var r = h(i = i || u.alloc(8), i, 10, 128, t).then(function() {
                        return !0
                    }).catch(function() {
                        return !1
                    });
                    return l[t] = r, r
                }(y).then(function(e) {
                    return e ? h(t, r, d, p, y) : s(t, r, d, p, v)
                }), g)
        }
    }).call(this, r(10), r(12))
}, function(t, e, r) {
    var n = r(72);
    t.exports = function(t) {
        return (new n).update(t).digest()
    }
}, function(t, e, r) {
    "use strict";
    var n = r(7),
        i = r(40),
        o = r(9).Buffer,
        a = new Array(16);

    function s() {
        i.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878
    }

    function u(t, e) {
        return t << e | t >>> 32 - e
    }

    function c(t, e, r, n, i, o, a) {
        return u(t + (e & r | ~e & n) + i + o | 0, a) + e | 0
    }

    function f(t, e, r, n, i, o, a) {
        return u(t + (e & n | r & ~n) + i + o | 0, a) + e | 0
    }

    function l(t, e, r, n, i, o, a) {
        return u(t + (e ^ r ^ n) + i + o | 0, a) + e | 0
    }

    function h(t, e, r, n, i, o, a) {
        return u(t + (r ^ (e | ~n)) + i + o | 0, a) + e | 0
    }
    n(s, i), s.prototype._update = function() {
        for (var t = a, e = 0; e < 16; ++e) t[e] = this._block.readInt32LE(4 * e);
        var r = this._a,
            n = this._b,
            i = this._c,
            o = this._d;
        r = c(r, n, i, o, t[0], 3614090360, 7), o = c(o, r, n, i, t[1], 3905402710, 12), i = c(i, o, r, n, t[2], 606105819, 17), n = c(n, i, o, r, t[3], 3250441966, 22), r = c(r, n, i, o, t[4], 4118548399, 7), o = c(o, r, n, i, t[5], 1200080426, 12), i = c(i, o, r, n, t[6], 2821735955, 17), n = c(n, i, o, r, t[7], 4249261313, 22), r = c(r, n, i, o, t[8], 1770035416, 7), o = c(o, r, n, i, t[9], 2336552879, 12), i = c(i, o, r, n, t[10], 4294925233, 17), n = c(n, i, o, r, t[11], 2304563134, 22), r = c(r, n, i, o, t[12], 1804603682, 7), o = c(o, r, n, i, t[13], 4254626195, 12), i = c(i, o, r, n, t[14], 2792965006, 17), r = f(r, n = c(n, i, o, r, t[15], 1236535329, 22), i, o, t[1], 4129170786, 5), o = f(o, r, n, i, t[6], 3225465664, 9), i = f(i, o, r, n, t[11], 643717713, 14), n = f(n, i, o, r, t[0], 3921069994, 20), r = f(r, n, i, o, t[5], 3593408605, 5), o = f(o, r, n, i, t[10], 38016083, 9), i = f(i, o, r, n, t[15], 3634488961, 14), n = f(n, i, o, r, t[4], 3889429448, 20), r = f(r, n, i, o, t[9], 568446438, 5), o = f(o, r, n, i, t[14], 3275163606, 9), i = f(i, o, r, n, t[3], 4107603335, 14), n = f(n, i, o, r, t[8], 1163531501, 20), r = f(r, n, i, o, t[13], 2850285829, 5), o = f(o, r, n, i, t[2], 4243563512, 9), i = f(i, o, r, n, t[7], 1735328473, 14), r = l(r, n = f(n, i, o, r, t[12], 2368359562, 20), i, o, t[5], 4294588738, 4), o = l(o, r, n, i, t[8], 2272392833, 11), i = l(i, o, r, n, t[11], 1839030562, 16), n = l(n, i, o, r, t[14], 4259657740, 23), r = l(r, n, i, o, t[1], 2763975236, 4), o = l(o, r, n, i, t[4], 1272893353, 11), i = l(i, o, r, n, t[7], 4139469664, 16), n = l(n, i, o, r, t[10], 3200236656, 23), r = l(r, n, i, o, t[13], 681279174, 4), o = l(o, r, n, i, t[0], 3936430074, 11), i = l(i, o, r, n, t[3], 3572445317, 16), n = l(n, i, o, r, t[6], 76029189, 23), r = l(r, n, i, o, t[9], 3654602809, 4), o = l(o, r, n, i, t[12], 3873151461, 11), i = l(i, o, r, n, t[15], 530742520, 16), r = h(r, n = l(n, i, o, r, t[2], 3299628645, 23), i, o, t[0], 4096336452, 6), o = h(o, r, n, i, t[7], 1126891415, 10), i = h(i, o, r, n, t[14], 2878612391, 15), n = h(n, i, o, r, t[5], 4237533241, 21), r = h(r, n, i, o, t[12], 1700485571, 6), o = h(o, r, n, i, t[3], 2399980690, 10), i = h(i, o, r, n, t[10], 4293915773, 15), n = h(n, i, o, r, t[1], 2240044497, 21), r = h(r, n, i, o, t[8], 1873313359, 6), o = h(o, r, n, i, t[15], 4264355552, 10), i = h(i, o, r, n, t[6], 2734768916, 15), n = h(n, i, o, r, t[13], 1309151649, 21), r = h(r, n, i, o, t[4], 4149444226, 6), o = h(o, r, n, i, t[11], 3174756917, 10), i = h(i, o, r, n, t[2], 718787259, 15), n = h(n, i, o, r, t[9], 3951481745, 21), this._a = this._a + r | 0, this._b = this._b + n | 0, this._c = this._c + i | 0, this._d = this._d + o | 0
    }, s.prototype._digest = function() {
        this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
        var t = o.allocUnsafe(16);
        return t.writeInt32LE(this._a, 0), t.writeInt32LE(this._b, 4), t.writeInt32LE(this._c, 8), t.writeInt32LE(this._d, 12), t
    }, t.exports = s
}, function(t, e, r) {
    t.exports = i;
    var n = r(23).EventEmitter;

    function i() {
        n.call(this)
    }
    r(7)(i, n), i.Readable = r(24), i.Writable = r(82), i.Duplex = r(83), i.Transform = r(84), i.PassThrough = r(85), i.Stream = i, i.prototype.pipe = function(t, e) {
        var r = this;

        function i(e) {
            t.writable && !1 === t.write(e) && r.pause && r.pause()
        }

        function o() {
            r.readable && r.resume && r.resume()
        }
        r.on("data", i), t.on("drain", o), t._isStdio || e && !1 === e.end || (r.on("end", s), r.on("close", u));
        var a = !1;

        function s() {
            a || (a = !0, t.end())
        }

        function u() {
            a || (a = !0, "function" === typeof t.destroy && t.destroy())
        }

        function c(t) {
            if (f(), 0 === n.listenerCount(this, "error")) throw t
        }

        function f() {
            r.removeListener("data", i), t.removeListener("drain", o), r.removeListener("end", s), r.removeListener("close", u), r.removeListener("error", c), t.removeListener("error", c), r.removeListener("end", f), r.removeListener("close", f), t.removeListener("close", f)
        }
        return r.on("error", c), t.on("error", c), r.on("end", f), r.on("close", f), t.on("close", f), t.emit("pipe", r), t
    }
}, function(t, e) {}, function(t, e, r) {
    "use strict";
    var n = r(25).Buffer,
        i = r(76);
    t.exports = function() {
        function t() {
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.head = null, this.tail = null, this.length = 0
        }
        return t.prototype.push = function(t) {
            var e = {
                data: t,
                next: null
            };
            this.length > 0 ? this.tail.next = e : this.head = e, this.tail = e, ++this.length
        }, t.prototype.unshift = function(t) {
            var e = {
                data: t,
                next: this.head
            };
            0 === this.length && (this.tail = e), this.head = e, ++this.length
        }, t.prototype.shift = function() {
            if (0 !== this.length) {
                var t = this.head.data;
                return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, t
            }
        }, t.prototype.clear = function() {
            this.head = this.tail = null, this.length = 0
        }, t.prototype.join = function(t) {
            if (0 === this.length) return "";
            for (var e = this.head, r = "" + e.data; e = e.next;) r += t + e.data;
            return r
        }, t.prototype.concat = function(t) {
            if (0 === this.length) return n.alloc(0);
            if (1 === this.length) return this.head.data;
            for (var e, r, i, o = n.allocUnsafe(t >>> 0), a = this.head, s = 0; a;) e = a.data, r = o, i = s, e.copy(r, i), s += a.data.length, a = a.next;
            return o
        }, t
    }(), i && i.inspect && i.inspect.custom && (t.exports.prototype[i.inspect.custom] = function() {
        var t = i.inspect({
            length: this.length
        });
        return this.constructor.name + " " + t
    })
}, function(t, e) {}, function(t, e, r) {
    (function(t) {
        var n = "undefined" !== typeof t && t || "undefined" !== typeof self && self || window,
            i = Function.prototype.apply;

        function o(t, e) {
            this._id = t, this._clearFn = e
        }
        e.setTimeout = function() {
            return new o(i.call(setTimeout, n, arguments), clearTimeout)
        }, e.setInterval = function() {
            return new o(i.call(setInterval, n, arguments), clearInterval)
        }, e.clearTimeout = e.clearInterval = function(t) {
            t && t.close()
        }, o.prototype.unref = o.prototype.ref = function() {}, o.prototype.close = function() {
            this._clearFn.call(n, this._id)
        }, e.enroll = function(t, e) {
            clearTimeout(t._idleTimeoutId), t._idleTimeout = e
        }, e.unenroll = function(t) {
            clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
        }, e._unrefActive = e.active = function(t) {
            clearTimeout(t._idleTimeoutId);
            var e = t._idleTimeout;
            e >= 0 && (t._idleTimeoutId = setTimeout(function() {
                t._onTimeout && t._onTimeout()
            }, e))
        }, r(78), e.setImmediate = "undefined" !== typeof self && self.setImmediate || "undefined" !== typeof t && t.setImmediate || this && this.setImmediate, e.clearImmediate = "undefined" !== typeof self && self.clearImmediate || "undefined" !== typeof t && t.clearImmediate || this && this.clearImmediate
    }).call(this, r(10))
}, function(t, e, r) {
    (function(t, e) {
        ! function(t, r) {
            "use strict";
            if (!t.setImmediate) {
                var n, i = 1,
                    o = {},
                    a = !1,
                    s = t.document,
                    u = Object.getPrototypeOf && Object.getPrototypeOf(t);
                u = u && u.setTimeout ? u : t, "[object process]" === {}.toString.call(t.process) ? n = function(t) {
                    e.nextTick(function() {
                        f(t)
                    })
                } : function() {
                    if (t.postMessage && !t.importScripts) {
                        var e = !0,
                            r = t.onmessage;
                        return t.onmessage = function() {
                            e = !1
                        }, t.postMessage("", "*"), t.onmessage = r, e
                    }
                }() ? function() {
                    var e = "setImmediate$" + Math.random() + "$",
                        r = function(r) {
                            r.source === t && "string" === typeof r.data && 0 === r.data.indexOf(e) && f(+r.data.slice(e.length))
                        };
                    t.addEventListener ? t.addEventListener("message", r, !1) : t.attachEvent("onmessage", r), n = function(r) {
                        t.postMessage(e + r, "*")
                    }
                }() : t.MessageChannel ? function() {
                    var t = new MessageChannel;
                    t.port1.onmessage = function(t) {
                        f(t.data)
                    }, n = function(e) {
                        t.port2.postMessage(e)
                    }
                }() : s && "onreadystatechange" in s.createElement("script") ? function() {
                    var t = s.documentElement;
                    n = function(e) {
                        var r = s.createElement("script");
                        r.onreadystatechange = function() {
                            f(e), r.onreadystatechange = null, t.removeChild(r), r = null
                        }, t.appendChild(r)
                    }
                }() : n = function(t) {
                    setTimeout(f, 0, t)
                }, u.setImmediate = function(t) {
                    "function" !== typeof t && (t = new Function("" + t));
                    for (var e = new Array(arguments.length - 1), r = 0; r < e.length; r++) e[r] = arguments[r + 1];
                    var a = {
                        callback: t,
                        args: e
                    };
                    return o[i] = a, n(i), i++
                }, u.clearImmediate = c
            }

            function c(t) {
                delete o[t]
            }

            function f(t) {
                if (a) setTimeout(f, 0, t);
                else {
                    var e = o[t];
                    if (e) {
                        a = !0;
                        try {
                            ! function(t) {
                                var e = t.callback,
                                    n = t.args;
                                switch (n.length) {
                                    case 0:
                                        e();
                                        break;
                                    case 1:
                                        e(n[0]);
                                        break;
                                    case 2:
                                        e(n[0], n[1]);
                                        break;
                                    case 3:
                                        e(n[0], n[1], n[2]);
                                        break;
                                    default:
                                        e.apply(r, n)
                                }
                            }(e)
                        } finally {
                            c(t), a = !1
                        }
                    }
                }
            }
        }("undefined" === typeof self ? "undefined" === typeof t ? this : t : self)
    }).call(this, r(10), r(12))
}, function(t, e, r) {
    (function(e) {
        function r(t) {
            try {
                if (!e.localStorage) return !1
            } catch (n) {
                return !1
            }
            var r = e.localStorage[t];
            return null != r && "true" === String(r).toLowerCase()
        }
        t.exports = function(t, e) {
            if (r("noDeprecation")) return t;
            var n = !1;
            return function() {
                if (!n) {
                    if (r("throwDeprecation")) throw new Error(e);
                    r("traceDeprecation") ? console.trace(e) : console.warn(e), n = !0
                }
                return t.apply(this, arguments)
            }
        }
    }).call(this, r(10))
}, function(t, e, r) {
    var n = r(8),
        i = n.Buffer;

    function o(t, e) {
        for (var r in t) e[r] = t[r]
    }

    function a(t, e, r) {
        return i(t, e, r)
    }
    i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? t.exports = n : (o(n, e), e.Buffer = a), o(i, a), a.from = function(t, e, r) {
        if ("number" === typeof t) throw new TypeError("Argument must not be a number");
        return i(t, e, r)
    }, a.alloc = function(t, e, r) {
        if ("number" !== typeof t) throw new TypeError("Argument must be a number");
        var n = i(t);
        return void 0 !== e ? "string" === typeof r ? n.fill(e, r) : n.fill(e) : n.fill(0), n
    }, a.allocUnsafe = function(t) {
        if ("number" !== typeof t) throw new TypeError("Argument must be a number");
        return i(t)
    }, a.allocUnsafeSlow = function(t) {
        if ("number" !== typeof t) throw new TypeError("Argument must be a number");
        return n.SlowBuffer(t)
    }
}, function(t, e, r) {
    "use strict";
    t.exports = o;
    var n = r(45),
        i = r(16);

    function o(t) {
        if (!(this instanceof o)) return new o(t);
        n.call(this, t)
    }
    i.inherits = r(7), i.inherits(o, n), o.prototype._transform = function(t, e, r) {
        r(null, t)
    }
}, function(t, e, r) {
    t.exports = r(26)
}, function(t, e, r) {
    t.exports = r(13)
}, function(t, e, r) {
    t.exports = r(24).Transform
}, function(t, e, r) {
    t.exports = r(24).PassThrough
}, function(t, e, r) {
    "use strict";
    var n = r(8).Buffer,
        i = r(7),
        o = r(40),
        a = new Array(16),
        s = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
        u = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
        c = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
        f = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11],
        l = [0, 1518500249, 1859775393, 2400959708, 2840853838],
        h = [1352829926, 1548603684, 1836072691, 2053994217, 0];

    function d() {
        o.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520
    }

    function p(t, e) {
        return t << e | t >>> 32 - e
    }

    function v(t, e, r, n, i, o, a, s) {
        return p(t + (e ^ r ^ n) + o + a | 0, s) + i | 0
    }

    function g(t, e, r, n, i, o, a, s) {
        return p(t + (e & r | ~e & n) + o + a | 0, s) + i | 0
    }

    function y(t, e, r, n, i, o, a, s) {
        return p(t + ((e | ~r) ^ n) + o + a | 0, s) + i | 0
    }

    function b(t, e, r, n, i, o, a, s) {
        return p(t + (e & n | r & ~n) + o + a | 0, s) + i | 0
    }

    function m(t, e, r, n, i, o, a, s) {
        return p(t + (e ^ (r | ~n)) + o + a | 0, s) + i | 0
    }
    i(d, o), d.prototype._update = function() {
        for (var t = a, e = 0; e < 16; ++e) t[e] = this._block.readInt32LE(4 * e);
        for (var r = 0 | this._a, n = 0 | this._b, i = 0 | this._c, o = 0 | this._d, d = 0 | this._e, w = 0 | this._a, _ = 0 | this._b, x = 0 | this._c, E = 0 | this._d, S = 0 | this._e, k = 0; k < 80; k += 1) {
            var A, O;
            k < 16 ? (A = v(r, n, i, o, d, t[s[k]], l[0], c[k]), O = m(w, _, x, E, S, t[u[k]], h[0], f[k])) : k < 32 ? (A = g(r, n, i, o, d, t[s[k]], l[1], c[k]), O = b(w, _, x, E, S, t[u[k]], h[1], f[k])) : k < 48 ? (A = y(r, n, i, o, d, t[s[k]], l[2], c[k]), O = y(w, _, x, E, S, t[u[k]], h[2], f[k])) : k < 64 ? (A = b(r, n, i, o, d, t[s[k]], l[3], c[k]), O = g(w, _, x, E, S, t[u[k]], h[3], f[k])) : (A = m(r, n, i, o, d, t[s[k]], l[4], c[k]), O = v(w, _, x, E, S, t[u[k]], h[4], f[k])), r = d, d = o, o = p(i, 10), i = n, n = A, w = S, S = E, E = p(x, 10), x = _, _ = O
        }
        var I = this._b + i + E | 0;
        this._b = this._c + o + S | 0, this._c = this._d + d + w | 0, this._d = this._e + r + _ | 0, this._e = this._a + n + x | 0, this._a = I
    }, d.prototype._digest = function() {
        this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
        var t = n.alloc ? n.alloc(20) : new n(20);
        return t.writeInt32LE(this._a, 0), t.writeInt32LE(this._b, 4), t.writeInt32LE(this._c, 8), t.writeInt32LE(this._d, 12), t.writeInt32LE(this._e, 16), t
    }, t.exports = d
}, function(t, e, r) {
    "use strict";
    var n, i = r(88),
        o = r(94);

    function a(t, e, r) {
        return "undefined" === typeof r && (r = e, e = n), "undefined" === typeof e && (e = {}),
            function t(e, r, n, a) {
                var s, u;
                return a.length ? (s = a.splice(0, 1)[0], n.hasOwnProperty(s) ? (u = n[s], r = function t(e, r, n, a) {
                    var s, u, c, f = null;
                    Array.isArray(a) && a.length && (a = a.slice(), u = a.splice(1), a = a[0]);
                    l = a, "object" !== typeof l || Array.isArray(l) || null === l || (f = a.default || null, c = a.transform, a = a.key);
                    var l;
                    Array.isArray(a) && (c = a[1], f = a[2] || null, a = a[0]);
                    "function" === typeof f && (f = f(e, r, n, a));
                    s = i(e, r);
                    "undefined" !== typeof s && null !== s || (s = f);
                    "undefined" !== typeof s && "function" === typeof c && (s = c(s, e, n, r, a));
                    if ("undefined" === typeof s || "undefined" === typeof a) return n;
                    n = o(n, a, s);
                    Array.isArray(u) && u.length && (n = t(e, r, n, u));
                    return n
                }(e, s, r, u)) : r = null, t(e, r, n, a)) : r
            }(t, e, r, Object.keys(r))
    }
    t.exports = a, t.exports.merge = a, t.exports.getKeyValue = i, t.exports.setKeyValue = o
}, function(t, e, r) {
    "use strict";
    var n = r(89);

    function i(t, e, r) {
        var n, a, s, u = /(\[\]|\[(.*)\])$/g,
            c = !1;
        if (t) return (n = u.exec(e)) && (c = "" !== (e = e.replace(u, "")), a = n[2]), 0 === r.length ? s = c ? "undefined" === typeof a || void 0 === t[e] ? t[e] : t[e][a] : Array.isArray(t) ? "" === e ? "undefined" === typeof a ? t : t[a] : t.map(function(t) {
            return t[e]
        }) : void 0 === t[e] ? o(t, e, r) : t[e] : c ? s = Array.isArray(t[e]) ? "undefined" === typeof a ? t[e].map(function(t) {
            return i(t, r[0], r.slice(1))
        }) : i(t[e][a], r[0], r.slice(1)) : i("undefined" === typeof a ? t[e] : t[e][a], r[0], r.slice(1)) : Array.isArray(t) ? (s = "" === e ? i("undefined" === typeof a ? t : t[a], r[0], r.slice(1)) : t.map(function(t) {
            s = i(t, r[0], r.slice(1))
        }), s = "undefined" === typeof a ? t.map(function(t) {
            return i(t, r[0], r.slice(1))
        }) : i(t[a], r[0], r.slice(1))) : s = void 0 === t[e] ? o(t, e, r) : i(t[e], r[0], r.slice(1)), s
    }

    function o(t, e, r) {
        for (var o = Object.keys(t), a = [], s = 0; s < o.length; s++) {
            var u = o[s];
            if (n(u, e)) {
                var c = r.length ? i(t[u], r[0], r.slice(1)) : t[u];
                void 0 !== c && a.push(c)
            }
        }
        return a.length ? a : void 0
    }
    t.exports = function(t, e) {
        for (var r, n, o, a = [], s = e.split(/([^\\])(\\\\)*\./g), u = 0; u < s.length; u++) {
            if ((u - 1) % 3 === 0) {
                var c = s[u - 1] + s[u];
                s[u + 1] && (c += s[u + 1]), a.push(c.replace(/\\\./g, "."))
            }
            u === s.length - 1 && a.push(s[u].replace(/\\\./g, "."))
        }
        return r = (s = a).splice(0, 1), null != (o = e.match(/.+(\[\])/g)) && o[0] === e ? e = e.slice(0, -2) : o = null, n = i(t, r[0], s), Array.isArray(n) && !o && (n.length && (n = n.reduce(function(t, e) {
            return Array.isArray(t) && Array.isArray(e) ? t.concat(e) : Array.isArray(t) ? (t.push(e), t) : [t, e]
        })), Array.isArray(n) || (n = [n])), n
    }
}, function(t, e, r) {
    t.exports = p, p.Minimatch = v;
    var n = {
        sep: "/"
    };
    try {
        n = r(90)
    } catch (b) {}
    var i = p.GLOBSTAR = v.GLOBSTAR = {},
        o = r(91),
        a = {
            "!": {
                open: "(?:(?!(?:",
                close: "))[^/]*?)"
            },
            "?": {
                open: "(?:",
                close: ")?"
            },
            "+": {
                open: "(?:",
                close: ")+"
            },
            "*": {
                open: "(?:",
                close: ")*"
            },
            "@": {
                open: "(?:",
                close: ")"
            }
        },
        s = "[^/]",
        u = s + "*?",
        c = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?",
        f = "(?:(?!(?:\\/|^)\\.).)*?",
        l = "().*{}+?[]^$\\!".split("").reduce(function(t, e) {
            return t[e] = !0, t
        }, {});
    var h = /\/+/;

    function d(t, e) {
        t = t || {}, e = e || {};
        var r = {};
        return Object.keys(e).forEach(function(t) {
            r[t] = e[t]
        }), Object.keys(t).forEach(function(e) {
            r[e] = t[e]
        }), r
    }

    function p(t, e, r) {
        if ("string" !== typeof e) throw new TypeError("glob pattern string required");
        return r || (r = {}), !(!r.nocomment && "#" === e.charAt(0)) && ("" === e.trim() ? "" === t : new v(e, r).match(t))
    }

    function v(t, e) {
        if (!(this instanceof v)) return new v(t, e);
        if ("string" !== typeof t) throw new TypeError("glob pattern string required");
        e || (e = {}), t = t.trim(), "/" !== n.sep && (t = t.split(n.sep).join("/")), this.options = e, this.set = [], this.pattern = t, this.regexp = null, this.negate = !1, this.comment = !1, this.empty = !1, this.make()
    }

    function g(t, e) {
        if (e || (e = this instanceof v ? this.options : {}), "undefined" === typeof(t = "undefined" === typeof t ? this.pattern : t)) throw new TypeError("undefined pattern");
        return e.nobrace || !t.match(/\{.*\}/) ? [t] : o(t)
    }
    p.filter = function(t, e) {
        return e = e || {},
            function(r, n, i) {
                return p(r, t, e)
            }
    }, p.defaults = function(t) {
        if (!t || !Object.keys(t).length) return p;
        var e = p,
            r = function(r, n, i) {
                return e.minimatch(r, n, d(t, i))
            };
        return r.Minimatch = function(r, n) {
            return new e.Minimatch(r, d(t, n))
        }, r
    }, v.defaults = function(t) {
        return t && Object.keys(t).length ? p.defaults(t).Minimatch : v
    }, v.prototype.debug = function() {}, v.prototype.make = function() {
        if (this._made) return;
        var t = this.pattern,
            e = this.options;
        if (!e.nocomment && "#" === t.charAt(0)) return void(this.comment = !0);
        if (!t) return void(this.empty = !0);
        this.parseNegate();
        var r = this.globSet = this.braceExpand();
        e.debug && (this.debug = console.error);
        this.debug(this.pattern, r), r = this.globParts = r.map(function(t) {
            return t.split(h)
        }), this.debug(this.pattern, r), r = r.map(function(t, e, r) {
            return t.map(this.parse, this)
        }, this), this.debug(this.pattern, r), r = r.filter(function(t) {
            return -1 === t.indexOf(!1)
        }), this.debug(this.pattern, r), this.set = r
    }, v.prototype.parseNegate = function() {
        var t = this.pattern,
            e = !1,
            r = this.options,
            n = 0;
        if (r.nonegate) return;
        for (var i = 0, o = t.length; i < o && "!" === t.charAt(i); i++) e = !e, n++;
        n && (this.pattern = t.substr(n));
        this.negate = e
    }, p.braceExpand = function(t, e) {
        return g(t, e)
    }, v.prototype.braceExpand = g, v.prototype.parse = function(t, e) {
        if (t.length > 65536) throw new TypeError("pattern is too long");
        var r = this.options;
        if (!r.noglobstar && "**" === t) return i;
        if ("" === t) return "";
        var n, o = "",
            c = !!r.nocase,
            f = !1,
            h = [],
            d = [],
            p = !1,
            v = -1,
            g = -1,
            m = "." === t.charAt(0) ? "" : r.dot ? "(?!(?:^|\\/)\\.{1,2}(?:$|\\/))" : "(?!\\.)",
            w = this;

        function _() {
            if (n) {
                switch (n) {
                    case "*":
                        o += u, c = !0;
                        break;
                    case "?":
                        o += s, c = !0;
                        break;
                    default:
                        o += "\\" + n
                }
                w.debug("clearStateChar %j %j", n, o), n = !1
            }
        }
        for (var x, E = 0, S = t.length; E < S && (x = t.charAt(E)); E++)
            if (this.debug("%s\t%s %s %j", t, E, o, x), f && l[x]) o += "\\" + x, f = !1;
            else switch (x) {
                case "/":
                    return !1;
                case "\\":
                    _(), f = !0;
                    continue;
                case "?":
                case "*":
                case "+":
                case "@":
                case "!":
                    if (this.debug("%s\t%s %s %j <-- stateChar", t, E, o, x), p) {
                        this.debug("  in class"), "!" === x && E === g + 1 && (x = "^"), o += x;
                        continue
                    }
                    w.debug("call clearStateChar %j", n), _(), n = x, r.noext && _();
                    continue;
                case "(":
                    if (p) {
                        o += "(";
                        continue
                    }
                    if (!n) {
                        o += "\\(";
                        continue
                    }
                    h.push({
                        type: n,
                        start: E - 1,
                        reStart: o.length,
                        open: a[n].open,
                        close: a[n].close
                    }), o += "!" === n ? "(?:(?!(?:" : "(?:", this.debug("plType %j %j", n, o), n = !1;
                    continue;
                case ")":
                    if (p || !h.length) {
                        o += "\\)";
                        continue
                    }
                    _(), c = !0;
                    var k = h.pop();
                    o += k.close, "!" === k.type && d.push(k), k.reEnd = o.length;
                    continue;
                case "|":
                    if (p || !h.length || f) {
                        o += "\\|", f = !1;
                        continue
                    }
                    _(), o += "|";
                    continue;
                case "[":
                    if (_(), p) {
                        o += "\\" + x;
                        continue
                    }
                    p = !0, g = E, v = o.length, o += x;
                    continue;
                case "]":
                    if (E === g + 1 || !p) {
                        o += "\\" + x, f = !1;
                        continue
                    }
                    if (p) {
                        var A = t.substring(g + 1, E);
                        try {
                            RegExp("[" + A + "]")
                        } catch (b) {
                            var O = this.parse(A, y);
                            o = o.substr(0, v) + "\\[" + O[0] + "\\]", c = c || O[1], p = !1;
                            continue
                        }
                    }
                    c = !0, p = !1, o += x;
                    continue;
                default:
                    _(), f ? f = !1 : !l[x] || "^" === x && p || (o += "\\"), o += x
            }
        p && (A = t.substr(g + 1), O = this.parse(A, y), o = o.substr(0, v) + "\\[" + O[0], c = c || O[1]);
        for (k = h.pop(); k; k = h.pop()) {
            var I = o.slice(k.reStart + k.open.length);
            this.debug("setting tail", o, k), I = I.replace(/((?:\\{2}){0,64})(\\?)\|/g, function(t, e, r) {
                return r || (r = "\\"), e + e + r + "|"
            }), this.debug("tail=%j\n   %s", I, I, k, o);
            var T = "*" === k.type ? u : "?" === k.type ? s : "\\" + k.type;
            c = !0, o = o.slice(0, k.reStart) + T + "\\(" + I
        }
        _(), f && (o += "\\\\");
        var j = !1;
        switch (o.charAt(0)) {
            case ".":
            case "[":
            case "(":
                j = !0
        }
        for (var R = d.length - 1; R > -1; R--) {
            var C = d[R],
                N = o.slice(0, C.reStart),
                P = o.slice(C.reStart, C.reEnd - 8),
                L = o.slice(C.reEnd - 8, C.reEnd),
                B = o.slice(C.reEnd);
            L += B;
            var D = N.split("(").length - 1,
                M = B;
            for (E = 0; E < D; E++) M = M.replace(/\)[+*?]?/, "");
            var U = "";
            "" === (B = M) && e !== y && (U = "$");
            var F = N + P + B + U + L;
            o = F
        }
        "" !== o && c && (o = "(?=.)" + o);
        j && (o = m + o);
        if (e === y) return [o, c];
        if (!c) return t.replace(/\\(.)/g, "$1");
        var z = r.nocase ? "i" : "";
        try {
            var q = new RegExp("^" + o + "$", z)
        } catch (b) {
            return new RegExp("$.")
        }
        return q._glob = t, q._src = o, q
    };
    var y = {};
    p.makeRe = function(t, e) {
        return new v(t, e || {}).makeRe()
    }, v.prototype.makeRe = function() {
        if (this.regexp || !1 === this.regexp) return this.regexp;
        var t = this.set;
        if (!t.length) return this.regexp = !1, this.regexp;
        var e = this.options,
            r = e.noglobstar ? u : e.dot ? c : f,
            n = e.nocase ? "i" : "",
            o = t.map(function(t) {
                return t.map(function(t) {
                    return t === i ? r : "string" === typeof t ? t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") : t._src
                }).join("\\/")
            }).join("|");
        o = "^(?:" + o + ")$", this.negate && (o = "^(?!" + o + ").*$");
        try {
            this.regexp = new RegExp(o, n)
        } catch (a) {
            this.regexp = !1
        }
        return this.regexp
    }, p.match = function(t, e, r) {
        var n = new v(e, r = r || {});
        return t = t.filter(function(t) {
            return n.match(t)
        }), n.options.nonull && !t.length && t.push(e), t
    }, v.prototype.match = function(t, e) {
        if (this.debug("match", t, this.pattern), this.comment) return !1;
        if (this.empty) return "" === t;
        if ("/" === t && e) return !0;
        var r = this.options;
        "/" !== n.sep && (t = t.split(n.sep).join("/"));
        t = t.split(h), this.debug(this.pattern, "split", t);
        var i, o, a = this.set;
        for (this.debug(this.pattern, "set", a), o = t.length - 1; o >= 0 && !(i = t[o]); o--);
        for (o = 0; o < a.length; o++) {
            var s = a[o],
                u = t;
            r.matchBase && 1 === s.length && (u = [i]);
            var c = this.matchOne(u, s, e);
            if (c) return !!r.flipNegate || !this.negate
        }
        return !r.flipNegate && this.negate
    }, v.prototype.matchOne = function(t, e, r) {
        var n = this.options;
        this.debug("matchOne", {
            this: this,
            file: t,
            pattern: e
        }), this.debug("matchOne", t.length, e.length);
        for (var o = 0, a = 0, s = t.length, u = e.length; o < s && a < u; o++, a++) {
            this.debug("matchOne loop");
            var c, f = e[a],
                l = t[o];
            if (this.debug(e, f, l), !1 === f) return !1;
            if (f === i) {
                this.debug("GLOBSTAR", [e, f, l]);
                var h = o,
                    d = a + 1;
                if (d === u) {
                    for (this.debug("** at the end"); o < s; o++)
                        if ("." === t[o] || ".." === t[o] || !n.dot && "." === t[o].charAt(0)) return !1;
                    return !0
                }
                for (; h < s;) {
                    var p = t[h];
                    if (this.debug("\nglobstar while", t, h, e, d, p), this.matchOne(t.slice(h), e.slice(d), r)) return this.debug("globstar found match!", h, s, p), !0;
                    if ("." === p || ".." === p || !n.dot && "." === p.charAt(0)) {
                        this.debug("dot detected!", t, h, e, d);
                        break
                    }
                    this.debug("globstar swallow a segment, and continue"), h++
                }
                return !(!r || (this.debug("\n>>> no match, partial?", t, h, e, d), h !== s))
            }
            if ("string" === typeof f ? (c = n.nocase ? l.toLowerCase() === f.toLowerCase() : l === f, this.debug("string match", f, l, c)) : (c = l.match(f), this.debug("pattern match", f, l, c)), !c) return !1
        }
        if (o === s && a === u) return !0;
        if (o === s) return r;
        if (a === u) return o === s - 1 && "" === t[o];
        throw new Error("wtf?")
    }
}, function(t, e, r) {
    (function(t) {
        function r(t, e) {
            for (var r = 0, n = t.length - 1; n >= 0; n--) {
                var i = t[n];
                "." === i ? t.splice(n, 1) : ".." === i ? (t.splice(n, 1), r++) : r && (t.splice(n, 1), r--)
            }
            if (e)
                for (; r--; r) t.unshift("..");
            return t
        }

        function n(t, e) {
            if (t.filter) return t.filter(e);
            for (var r = [], n = 0; n < t.length; n++) e(t[n], n, t) && r.push(t[n]);
            return r
        }
        e.resolve = function() {
            for (var e = "", i = !1, o = arguments.length - 1; o >= -1 && !i; o--) {
                var a = o >= 0 ? arguments[o] : t.cwd();
                if ("string" !== typeof a) throw new TypeError("Arguments to path.resolve must be strings");
                a && (e = a + "/" + e, i = "/" === a.charAt(0))
            }
            return (i ? "/" : "") + (e = r(n(e.split("/"), function(t) {
                return !!t
            }), !i).join("/")) || "."
        }, e.normalize = function(t) {
            var o = e.isAbsolute(t),
                a = "/" === i(t, -1);
            return (t = r(n(t.split("/"), function(t) {
                return !!t
            }), !o).join("/")) || o || (t = "."), t && a && (t += "/"), (o ? "/" : "") + t
        }, e.isAbsolute = function(t) {
            return "/" === t.charAt(0)
        }, e.join = function() {
            var t = Array.prototype.slice.call(arguments, 0);
            return e.normalize(n(t, function(t, e) {
                if ("string" !== typeof t) throw new TypeError("Arguments to path.join must be strings");
                return t
            }).join("/"))
        }, e.relative = function(t, r) {
            function n(t) {
                for (var e = 0; e < t.length && "" === t[e]; e++);
                for (var r = t.length - 1; r >= 0 && "" === t[r]; r--);
                return e > r ? [] : t.slice(e, r - e + 1)
            }
            t = e.resolve(t).substr(1), r = e.resolve(r).substr(1);
            for (var i = n(t.split("/")), o = n(r.split("/")), a = Math.min(i.length, o.length), s = a, u = 0; u < a; u++)
                if (i[u] !== o[u]) {
                    s = u;
                    break
                } var c = [];
            for (u = s; u < i.length; u++) c.push("..");
            return (c = c.concat(o.slice(s))).join("/")
        }, e.sep = "/", e.delimiter = ":", e.dirname = function(t) {
            if ("string" !== typeof t && (t += ""), 0 === t.length) return ".";
            for (var e = t.charCodeAt(0), r = 47 === e, n = -1, i = !0, o = t.length - 1; o >= 1; --o)
                if (47 === (e = t.charCodeAt(o))) {
                    if (!i) {
                        n = o;
                        break
                    }
                } else i = !1;
            return -1 === n ? r ? "/" : "." : r && 1 === n ? "/" : t.slice(0, n)
        }, e.basename = function(t, e) {
            var r = function(t) {
                "string" !== typeof t && (t += "");
                var e, r = 0,
                    n = -1,
                    i = !0;
                for (e = t.length - 1; e >= 0; --e)
                    if (47 === t.charCodeAt(e)) {
                        if (!i) {
                            r = e + 1;
                            break
                        }
                    } else -1 === n && (i = !1, n = e + 1);
                return -1 === n ? "" : t.slice(r, n)
            }(t);
            return e && r.substr(-1 * e.length) === e && (r = r.substr(0, r.length - e.length)), r
        }, e.extname = function(t) {
            "string" !== typeof t && (t += "");
            for (var e = -1, r = 0, n = -1, i = !0, o = 0, a = t.length - 1; a >= 0; --a) {
                var s = t.charCodeAt(a);
                if (47 !== s) - 1 === n && (i = !1, n = a + 1), 46 === s ? -1 === e ? e = a : 1 !== o && (o = 1) : -1 !== e && (o = -1);
                else if (!i) {
                    r = a + 1;
                    break
                }
            }
            return -1 === e || -1 === n || 0 === o || 1 === o && e === n - 1 && e === r + 1 ? "" : t.slice(e, n)
        };
        var i = "b" === "ab".substr(-1) ? function(t, e, r) {
            return t.substr(e, r)
        } : function(t, e, r) {
            return e < 0 && (e = t.length + e), t.substr(e, r)
        }
    }).call(this, r(12))
}, function(t, e, r) {
    var n = r(92),
        i = r(93);
    t.exports = function(t) {
        if (!t) return [];
        "{}" === t.substr(0, 2) && (t = "\\{\\}" + t.substr(2));
        return function t(e, r) {
            var o = [];
            var a = i("{", "}", e);
            if (!a || /\$$/.test(a.pre)) return [e];
            var u = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(a.body);
            var c = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(a.body);
            var l = u || c;
            var g = a.body.indexOf(",") >= 0;
            if (!l && !g) return a.post.match(/,.*\}/) ? (e = a.pre + "{" + a.body + s + a.post, t(e)) : [e];
            var y;
            if (l) y = a.body.split(/\.\./);
            else if (1 === (y = function t(e) {
                    if (!e) return [""];
                    var r = [];
                    var n = i("{", "}", e);
                    if (!n) return e.split(",");
                    var o = n.pre;
                    var a = n.body;
                    var s = n.post;
                    var u = o.split(",");
                    u[u.length - 1] += "{" + a + "}";
                    var c = t(s);
                    s.length && (u[u.length - 1] += c.shift(), u.push.apply(u, c));
                    r.push.apply(r, u);
                    return r
                }(a.body)).length && 1 === (y = t(y[0], !1).map(h)).length) {
                var b = a.post.length ? t(a.post, !1) : [""];
                return b.map(function(t) {
                    return a.pre + y[0] + t
                })
            }
            var m = a.pre;
            var b = a.post.length ? t(a.post, !1) : [""];
            var w;
            if (l) {
                var _ = f(y[0]),
                    x = f(y[1]),
                    E = Math.max(y[0].length, y[1].length),
                    S = 3 == y.length ? Math.abs(f(y[2])) : 1,
                    k = p,
                    A = x < _;
                A && (S *= -1, k = v);
                var O = y.some(d);
                w = [];
                for (var I = _; k(I, x); I += S) {
                    var T;
                    if (c) "\\" === (T = String.fromCharCode(I)) && (T = "");
                    else if (T = String(I), O) {
                        var j = E - T.length;
                        if (j > 0) {
                            var R = new Array(j + 1).join("0");
                            T = I < 0 ? "-" + R + T.slice(1) : R + T
                        }
                    }
                    w.push(T)
                }
            } else w = n(y, function(e) {
                return t(e, !1)
            });
            for (var C = 0; C < w.length; C++)
                for (var N = 0; N < b.length; N++) {
                    var P = m + w[C] + b[N];
                    (!r || l || P) && o.push(P)
                }
            return o
        }(function(t) {
            return t.split("\\\\").join(o).split("\\{").join(a).split("\\}").join(s).split("\\,").join(u).split("\\.").join(c)
        }(t), !0).map(l)
    };
    var o = "\0SLASH" + Math.random() + "\0",
        a = "\0OPEN" + Math.random() + "\0",
        s = "\0CLOSE" + Math.random() + "\0",
        u = "\0COMMA" + Math.random() + "\0",
        c = "\0PERIOD" + Math.random() + "\0";

    function f(t) {
        return parseInt(t, 10) == t ? parseInt(t, 10) : t.charCodeAt(0)
    }

    function l(t) {
        return t.split(o).join("\\").split(a).join("{").split(s).join("}").split(u).join(",").split(c).join(".")
    }

    function h(t) {
        return "{" + t + "}"
    }

    function d(t) {
        return /^-?0\d/.test(t)
    }

    function p(t, e) {
        return t <= e
    }

    function v(t, e) {
        return t >= e
    }
}, function(t, e) {
    t.exports = function(t, e) {
        for (var n = [], i = 0; i < t.length; i++) {
            var o = e(t[i], i);
            r(o) ? n.push.apply(n, o) : n.push(o)
        }
        return n
    };
    var r = Array.isArray || function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }
}, function(t, e, r) {
    "use strict";

    function n(t, e, r) {
        t instanceof RegExp && (t = i(t, r)), e instanceof RegExp && (e = i(e, r));
        var n = o(t, e, r);
        return n && {
            start: n[0],
            end: n[1],
            pre: r.slice(0, n[0]),
            body: r.slice(n[0] + t.length, n[1]),
            post: r.slice(n[1] + e.length)
        }
    }

    function i(t, e) {
        var r = e.match(t);
        return r ? r[0] : null
    }

    function o(t, e, r) {
        var n, i, o, a, s, u = r.indexOf(t),
            c = r.indexOf(e, u + 1),
            f = u;
        if (u >= 0 && c > 0) {
            for (n = [], o = r.length; f >= 0 && !s;) f == u ? (n.push(f), u = r.indexOf(t, f + 1)) : 1 == n.length ? s = [n.pop(), c] : ((i = n.pop()) < o && (o = i, a = c), c = r.indexOf(e, f + 1)), f = u < c && u >= 0 ? u : c;
            n.length && (s = [o, a])
        }
        return s
    }
    t.exports = n, n.range = o
}, function(t, e, r) {
    "use strict";
    t.exports = function(t, e, r) {
        for (var n = [], i = e.split(/([^\\])(\\\\)*\./g), o = 0; o < i.length; o++) {
            if ((o - 1) % 3 === 0) {
                var a = i[o - 1] + i[o];
                i[o + 1] && (a += i[o + 1]), n.push(a.replace(/\\\./g, "."))
            }
            o === i.length - 1 && n.push(i[o].replace(/\\\./g, "."))
        }
        return function t(e, r, n, i) {
            var o, a, s, u, c, f = /(\[\]|\[(.*)\])$/g,
                l = /(\[\]|\[(.*)\]\+)$/g,
                h = /(\?)$/g,
                d = 0,
                p = !1,
                v = !1;
            if ((s = h.test(r)) && (r = r.replace(h, "")), o = f.exec(r), a = l.exec(r), o && (p = !0, r = r.replace(f, ""), v = "" !== r), a && (o = a, p = !0, v = "" !== r, r = r.replace(l, "")), ! function(t) {
                    var e = !1;
                    return "undefined" === typeof t || null === t ? e = !0 : function(t) {
                        return "object" === typeof t && !1 === Array.isArray(t) && 0 === Object.keys(t).length
                    }(t) ? e = !0 : function(t) {
                        return Array.isArray(t) && (0 === t.length || 0 === t.join("").length)
                    }(t) && (e = !0), e
                }(e) ? p && (d = o[2] || 0) : p ? (d = o[2] || 0, v ? (e = {})[r] = [] : e = []) : e = {}, 0 === n.length) {
                if (!s && (null === i || void 0 === i)) return e;
                v ? (!1 === Array.isArray(e[r]) && (e[r] = []), a ? e[r].push(i) : e[r][d] = i) : Array.isArray(e) ? e[d] = i : e[r] = i
            } else if (v)
                if (!1 === Array.isArray(e[r]) && (e[r] = []), Array.isArray(i) && !1 === function(t) {
                        return /(\[\]|\[(.*)\])$/g.test(t[0])
                    }(n))
                    for (u = 0; u < i.length; u++) c = i[u], e[r][d + u] = t(e[r][d + u], n[0], n.slice(1), c);
                else e[r][d] = t(e[r][d], n[0], n.slice(1), i);
            else if (Array.isArray(e))
                if (Array.isArray(i))
                    for (u = 0; u < i.length; u++) c = i[u], e[d + u] = t(e[d + u], n[0], n.slice(1), c);
                else e[d] = t(e[d], n[0], n.slice(1), i);
            else e[r] = t(e[r], n[0], n.slice(1), i);
            return e
        }(t, (i = n).splice(0, 1)[0], i, r)
    }
}, function(t, e, r) {
    "use strict";
    r.r(e);
    var n = {};
    r.r(n), r.d(n, "SUCCESS", function() {
        return Xr
    }), r.d(n, "WRONG_ITERATIONS", function() {
        return $r
    }), r.d(n, "REQUIREPWCHANGE", function() {
        return Jr
    }), r.d(n, "MULTIFACTOR_CHALLENGE", function() {
        return Qr
    }), r.d(n, "MULTIFACTOR_RETRY_RESPONSE", function() {
        return Zr
    }), r.d(n, "WRONG_SERVER", function() {
        return tn
    }), r.d(n, "Responses", function() {
        return un
    }), r.d(n, "create", function() {
        return pn
    });
    var i = {};
    r.r(i), r.d(i, "SUCCESS", function() {
        return vn
    }), r.d(i, "Responses", function() {
        return yn
    }), r.d(i, "create", function() {
        return bn
    });
    var o = {};
    r.r(o), r.d(o, "SUCCESS", function() {
        return Pn
    }), r.d(o, "Responses", function() {
        return Bn
    }), r.d(o, "create", function() {
        return Dn
    });
    var a = {};
    r.r(a), r.d(a, "SUCCESS", function() {
        return Mn
    }), r.d(a, "Responses", function() {
        return Fn
    }), r.d(a, "create", function() {
        return zn
    });
    var s = {};
    r.r(s), r.d(s, "SUCCESS", function() {
        return qn
    }), r.d(s, "Responses", function() {
        return Wn
    }), r.d(s, "create", function() {
        return Kn
    });
    var u = r(49),
        c = r(2),
        f = r(1),
        l = {
            inProcess: !1,
            username: "",
            error: "",
            suggestPasswordChange: !1,
            notifyOffline: !1,
            retryingOnline: !1,
            onlineRetrySuccess: !1
        };
    var h = r(20),
        d = r(3),
        p = "[blob] update",
        v = "[blob] updatepassword",
        g = "[blob] removepassword",
        y = function(t, e) {
            return Object(d.a)(v, {
                passwordId: t,
                password: e
            })
        },
        b = function(t) {
            return Object(d.a)(g, {
                passwordId: t
            })
        },
        m = function(t) {
            return Object(d.a)(p, {
                data: t
            })
        },
        w = {
            receivedIndividualShares: [],
            passwords: {},
            dataRecords: {},
            applications: {},
            attachments: [],
            emergencySharers: [],
            emergencySharees: [],
            totp: {
                domains: null,
                multifactorEnabled: !1,
                lastpassAuthEnabled: !1
            },
            customTemplates: [],
            privateKeyHex: "",
            sharedFolders: {}
        };
    var _ = r(28),
        x = "[vault-data] updateVault",
        E = function(t, e, r, n) {
            return Object(_.createAction)("[vault-data] transformBlobChanges", {
                before: t,
                after: e,
                vaultData: r,
                userKey: n
            })
        },
        S = function(t) {
            return function(e) {
                return function(r) {
                    var n = t.getState().blob;
                    e(r);
                    var i = t.getState().blob,
                        o = t.getState().user.key,
                        a = t.getState().VaultData;
                    n !== i && t.dispatch(E(n, i, a, o))
                }
            }
        },
        k = function t(e, r) {
            var n = Object(c.a)({}, e);
            for (var i in r) "object" === typeof r[i] && n[i] ? n[i] = t(n[i], r[i]) : n[i] = r[i];
            return n
        },
        A = {
            dataRecords: {},
            identities: {},
            sharedFolders: {},
            passwords: {}
        };
    var O = "[multifactor] sms",
        I = "[multifactor] sentsms",
        T = "[multifactor] totp",
        j = "[multifactor] trust",
        R = "[multifactor] untrust",
        C = "[multifactor] cancel",
        N = "[multifactor] error",
        P = "[multifactor] disable",
        L = "[multifactor] sendpush",
        B = "[multifactor] loadduowebsdk",
        D = "[multifactor] duowebsdkresponse",
        M = function() {
            return Object(d.a)(I)
        },
        U = function() {
            return Object(d.a)(C)
        },
        F = function(t) {
            return Object(d.a)(N, {
                error: t
            })
        },
        z = function(t) {
            return Object(d.a)(B, {
                duoWebSdk: t
            })
        },
        q = {
            sentSMS: !1,
            inProcess: !1,
            error: ""
        };
    var Y = "[settings] language",
        W = {
            language: "en",
            improve: !1,
            urlRules: [],
            neverURLs: [],
            equivalentDomains: {},
            masterPasswordReprompt: {
                password: {
                    login: !1,
                    access: !1,
                    accessField: !1
                },
                accessDataRecord: !1,
                switchIdentity: !1,
                shareRecord: !1
            }
        };
    var K = r(29),
        G = function() {
            return Math.random().toString(36).substring(7).split("").join(".")
        },
        H = {
            INIT: "@@redux/INIT" + G(),
            REPLACE: "@@redux/REPLACE" + G(),
            PROBE_UNKNOWN_ACTION: function() {
                return "@@redux/PROBE_UNKNOWN_ACTION" + G()
            }
        };

    function V(t) {
        if ("object" !== typeof t || null === t) return !1;
        for (var e = t; null !== Object.getPrototypeOf(e);) e = Object.getPrototypeOf(e);
        return Object.getPrototypeOf(t) === e
    }

    function X(t, e, r) {
        var n;
        if ("function" === typeof e && "function" === typeof r || "function" === typeof r && "function" === typeof arguments[3]) throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");
        if ("function" === typeof e && "undefined" === typeof r && (r = e, e = void 0), "undefined" !== typeof r) {
            if ("function" !== typeof r) throw new Error("Expected the enhancer to be a function.");
            return r(X)(t, e)
        }
        if ("function" !== typeof t) throw new Error("Expected the reducer to be a function.");
        var i = t,
            o = e,
            a = [],
            s = a,
            u = !1;

        function c() {
            s === a && (s = a.slice())
        }

        function f() {
            if (u) throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
            return o
        }

        function l(t) {
            if ("function" !== typeof t) throw new Error("Expected the listener to be a function.");
            if (u) throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
            var e = !0;
            return c(), s.push(t),
                function() {
                    if (e) {
                        if (u) throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
                        e = !1, c();
                        var r = s.indexOf(t);
                        s.splice(r, 1)
                    }
                }
        }

        function h(t) {
            if (!V(t)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
            if ("undefined" === typeof t.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
            if (u) throw new Error("Reducers may not dispatch actions.");
            try {
                u = !0, o = i(o, t)
            } finally {
                u = !1
            }
            for (var e = a = s, r = 0; r < e.length; r++) {
                (0, e[r])()
            }
            return t
        }
        return h({
            type: H.INIT
        }), (n = {
            dispatch: h,
            subscribe: l,
            getState: f,
            replaceReducer: function(t) {
                if ("function" !== typeof t) throw new Error("Expected the nextReducer to be a function.");
                i = t, h({
                    type: H.REPLACE
                })
            }
        })[K.a] = function() {
            var t, e = l;
            return (t = {
                subscribe: function(t) {
                    if ("object" !== typeof t || null === t) throw new TypeError("Expected the observer to be an object.");

                    function r() {
                        t.next && t.next(f())
                    }
                    return r(), {
                        unsubscribe: e(r)
                    }
                }
            })[K.a] = function() {
                return this
            }, t
        }, n
    }

    function $(t, e) {
        var r = e && e.type;
        return "Given " + (r && 'action "' + String(r) + '"' || "an action") + ', reducer "' + t + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
    }

    function J(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }

    function Q(t, e) {
        var r = Object.keys(t);
        return Object.getOwnPropertySymbols && r.push.apply(r, Object.getOwnPropertySymbols(t)), e && (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        })), r
    }

    function Z() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
        return 0 === e.length ? function(t) {
            return t
        } : 1 === e.length ? e[0] : e.reduce(function(t, e) {
            return function() {
                return t(e.apply(void 0, arguments))
            }
        })
    }

    function tt() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
        return function(t) {
            return function() {
                var r = t.apply(void 0, arguments),
                    n = function() {
                        throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")
                    },
                    i = {
                        getState: r.getState,
                        dispatch: function() {
                            return n.apply(void 0, arguments)
                        }
                    },
                    o = e.map(function(t) {
                        return t(i)
                    });
                return function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? Q(r, !0).forEach(function(e) {
                            J(t, e, r[e])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Q(r).forEach(function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                        })
                    }
                    return t
                }({}, r, {
                    dispatch: n = Z.apply(void 0, o)(r.dispatch)
                })
            }
        }
    }
    var et = function(t) {
            return "@@redux-saga/" + t
        },
        rt = et("CANCEL_PROMISE"),
        nt = et("CHANNEL_END"),
        it = et("IO"),
        ot = et("MATCH"),
        at = et("MULTICAST"),
        st = et("SAGA_ACTION"),
        ut = et("SELF_CANCELLATION"),
        ct = et("TASK"),
        ft = et("TASK_CANCEL"),
        lt = et("TERMINATE"),
        ht = et("LOCATION");

    function dt() {
        return (dt = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        }).apply(this, arguments)
    }
    var pt = function(t) {
            return null === t || void 0 === t
        },
        vt = function(t) {
            return null !== t && void 0 !== t
        },
        gt = function(t) {
            return "function" === typeof t
        },
        yt = function(t) {
            return "string" === typeof t
        },
        bt = Array.isArray,
        mt = function(t) {
            return t && gt(t.then)
        },
        wt = function(t) {
            return t && gt(t.next) && gt(t.throw)
        },
        _t = function t(e) {
            return e && (yt(e) || St(e) || gt(e) || bt(e) && e.every(t))
        },
        xt = function(t) {
            return t && gt(t.take) && gt(t.close)
        },
        Et = function(t) {
            return gt(t) && t.hasOwnProperty("toString")
        },
        St = function(t) {
            return Boolean(t) && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
        },
        kt = function(t) {
            return xt(t) && t[at]
        };
    var At = function(t, e) {
            var r;
            void 0 === e && (e = !0);
            var n = new Promise(function(n) {
                r = setTimeout(n, t, e)
            });
            return n[rt] = function() {
                clearTimeout(r)
            }, n
        },
        Ot = function(t) {
            return function() {
                return t
            }
        }(!0),
        It = function() {},
        Tt = function(t) {
            return t
        };
    "function" === typeof Symbol && Symbol.asyncIterator && Symbol.asyncIterator;
    var jt = function(t, e) {
            dt(t, e), Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(e).forEach(function(r) {
                t[r] = e[r]
            })
        },
        Rt = function(t, e) {
            var r;
            return (r = []).concat.apply(r, e.map(t))
        };

    function Ct(t, e) {
        var r = t.indexOf(e);
        r >= 0 && t.splice(r, 1)
    }

    function Nt(t) {
        var e = !1;
        return function() {
            e || (e = !0, t())
        }
    }
    var Pt = function(t) {
            throw t
        },
        Lt = function(t) {
            return {
                value: t,
                done: !0
            }
        };

    function Bt(t, e, r) {
        void 0 === e && (e = Pt), void 0 === r && (r = "iterator");
        var n = {
            meta: {
                name: r
            },
            next: t,
            throw: e,
            return: Lt,
            isSagaIterator: !0
        };
        return "undefined" !== typeof Symbol && (n[Symbol.iterator] = function() {
            return n
        }), n
    }

    function Dt(t, e) {
        var r = e.sagaStack;
        console.error(t), console.error(r)
    }
    var Mt = function(t) {
            return Array.apply(null, new Array(t))
        },
        Ut = function(t) {
            return function(e) {
                return t(Object.defineProperty(e, st, {
                    value: !0
                }))
            }
        },
        Ft = function(t) {
            return t === lt
        },
        zt = function(t) {
            return t === ft
        },
        qt = function(t) {
            return Ft(t) || zt(t)
        };

    function Yt(t, e) {
        var r = Object.keys(t),
            n = r.length;
        var i, o = 0,
            a = bt(t) ? Mt(n) : {},
            s = {};
        return r.forEach(function(t) {
            var r = function(r, s) {
                i || (s || qt(r) ? (e.cancel(), e(r, s)) : (a[t] = r, ++o === n && (i = !0, e(a))))
            };
            r.cancel = It, s[t] = r
        }), e.cancel = function() {
            i || (i = !0, r.forEach(function(t) {
                return s[t].cancel()
            }))
        }, s
    }

    function Wt(t) {
        return {
            name: t.name || "anonymous",
            location: Kt(t)
        }
    }

    function Kt(t) {
        return t[ht]
    }
    var Gt = "Channel's Buffer overflow!",
        Ht = 1,
        Vt = 3,
        Xt = 4;

    function $t(t, e) {
        void 0 === t && (t = 10);
        var r = new Array(t),
            n = 0,
            i = 0,
            o = 0,
            a = function(e) {
                r[i] = e, i = (i + 1) % t, n++
            },
            s = function() {
                if (0 != n) {
                    var e = r[o];
                    return r[o] = null, n--, o = (o + 1) % t, e
                }
            },
            u = function() {
                for (var t = []; n;) t.push(s());
                return t
            };
        return {
            isEmpty: function() {
                return 0 == n
            },
            put: function(s) {
                var c;
                if (n < t) a(s);
                else switch (e) {
                    case Ht:
                        throw new Error(Gt);
                    case Vt:
                        r[i] = s, o = i = (i + 1) % t;
                        break;
                    case Xt:
                        c = 2 * t, r = u(), n = r.length, i = r.length, o = 0, r.length = c, t = c, a(s)
                }
            },
            take: s,
            flush: u
        }
    }
    var Jt = function(t) {
            return $t(t, Xt)
        },
        Qt = "TAKE",
        Zt = "PUT",
        te = "ALL",
        ee = "RACE",
        re = "CALL",
        ne = "CPS",
        ie = "FORK",
        oe = "JOIN",
        ae = "CANCEL",
        se = "SELECT",
        ue = "ACTION_CHANNEL",
        ce = "CANCELLED",
        fe = "FLUSH",
        le = "GET_CONTEXT",
        he = "SET_CONTEXT",
        de = function(t, e) {
            var r;
            return (r = {})[it] = !0, r.combinator = !1, r.type = t, r.payload = e, r
        },
        pe = function(t) {
            return de(ie, dt({}, t.payload, {
                detached: !0
            }))
        };

    function ve(t, e) {
        return void 0 === t && (t = "*"), _t(t) ? de(Qt, {
            pattern: t
        }) : kt(t) && vt(e) && _t(e) ? de(Qt, {
            channel: t,
            pattern: e
        }) : xt(t) ? de(Qt, {
            channel: t
        }) : void 0
    }

    function ge(t, e) {
        return pt(e) && (e = t, t = void 0), de(Zt, {
            channel: t,
            action: e
        })
    }

    function ye(t) {
        var e = de(ee, t);
        return e.combinator = !0, e
    }

    function be(t, e) {
        var r, n = null;
        return gt(t) ? r = t : (bt(t) ? (n = t[0], r = t[1]) : (n = t.context, r = t.fn), n && yt(r) && gt(n[r]) && (r = n[r])), {
            context: n,
            fn: r,
            args: e
        }
    }

    function me(t) {
        for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
        return de(re, be(t, r))
    }

    function we(t) {
        for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
        return de(ie, be(t, r))
    }

    function _e(t) {
        for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
        return pe(we.apply(void 0, [t].concat(r)))
    }

    function xe(t) {
        return de(oe, t)
    }

    function Ee(t) {
        void 0 === t && (t = Tt);
        for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
        return de(se, {
            selector: t,
            args: r
        })
    }
    var Se = me.bind(null, At);

    function ke() {
        var t = {};
        return t.promise = new Promise(function(e, r) {
            t.resolve = e, t.reject = r
        }), t
    }
    var Ae = ke,
        Oe = [],
        Ie = 0;

    function Te(t) {
        try {
            Ce(), t()
        } finally {
            Ne()
        }
    }

    function je(t) {
        Oe.push(t), Ie || (Ce(), Pe())
    }

    function Re(t) {
        try {
            return Ce(), t()
        } finally {
            Pe()
        }
    }

    function Ce() {
        Ie++
    }

    function Ne() {
        Ie--
    }

    function Pe() {
        var t;
        for (Ne(); !Ie && void 0 !== (t = Oe.shift());) Te(t)
    }
    var Le = function(t) {
            return function(e) {
                return t.some(function(t) {
                    return Fe(t)(e)
                })
            }
        },
        Be = function(t) {
            return function(e) {
                return t(e)
            }
        },
        De = function(t) {
            return function(e) {
                return e.type === String(t)
            }
        },
        Me = function(t) {
            return function(e) {
                return e.type === t
            }
        },
        Ue = function() {
            return Ot
        };

    function Fe(t) {
        var e = "*" === t ? Ue : yt(t) ? De : bt(t) ? Le : Et(t) ? De : gt(t) ? Be : St(t) ? Me : null;
        if (null === e) throw new Error("invalid pattern: " + t);
        return e(t)
    }
    var ze = {
            type: nt
        },
        qe = function(t) {
            return t && t.type === nt
        };

    function Ye(t) {
        void 0 === t && (t = Jt());
        var e = !1,
            r = [];
        return {
            take: function(n) {
                e && t.isEmpty() ? n(ze) : t.isEmpty() ? (r.push(n), n.cancel = function() {
                    Ct(r, n)
                }) : n(t.take())
            },
            put: function(n) {
                if (!e) {
                    if (0 === r.length) return t.put(n);
                    r.shift()(n)
                }
            },
            flush: function(r) {
                e && t.isEmpty() ? r(ze) : r(t.flush())
            },
            close: function() {
                if (!e) {
                    e = !0;
                    var t = r;
                    r = [];
                    for (var n = 0, i = t.length; n < i; n++)(0, t[n])(ze)
                }
            }
        }
    }

    function We() {
        var t = function() {
                var t, e = !1,
                    r = [],
                    n = r,
                    i = function() {
                        n === r && (n = r.slice())
                    },
                    o = function() {
                        e = !0;
                        var t = r = n;
                        n = [], t.forEach(function(t) {
                            t(ze)
                        })
                    };
                return (t = {})[at] = !0, t.put = function(t) {
                    if (!e)
                        if (qe(t)) o();
                        else
                            for (var i = r = n, a = 0, s = i.length; a < s; a++) {
                                var u = i[a];
                                u[ot](t) && (u.cancel(), u(t))
                            }
                }, t.take = function(t, r) {
                    void 0 === r && (r = Ue), e ? t(ze) : (t[ot] = r, i(), n.push(t), t.cancel = Nt(function() {
                        i(), Ct(n, t)
                    }))
                }, t.close = o, t
            }(),
            e = t.put;
        return t.put = function(t) {
            t[st] ? e(t) : je(function() {
                e(t)
            })
        }, t
    }
    var Ke = 0,
        Ge = 1,
        He = 2,
        Ve = 3;

    function Xe(t, e) {
        var r = t[rt];
        gt(r) && (e.cancel = r), t.then(e, function(t) {
            e(t, !0)
        })
    }
    var $e, Je = 0,
        Qe = function() {
            return ++Je
        };

    function Ze(t) {
        t.isRunning() && t.cancel()
    }
    var tr = (($e = {})[Qt] = function(t, e, r) {
        var n = e.channel,
            i = void 0 === n ? t.channel : n,
            o = e.pattern,
            a = e.maybe,
            s = function(t) {
                t instanceof Error ? r(t, !0) : !qe(t) || a ? r(t) : r(lt)
            };
        try {
            i.take(s, vt(o) ? Fe(o) : null)
        } catch (u) {
            return void r(u, !0)
        }
        r.cancel = s.cancel
    }, $e[Zt] = function(t, e, r) {
        var n = e.channel,
            i = e.action,
            o = e.resolve;
        je(function() {
            var e;
            try {
                e = (n ? n.put : t.dispatch)(i)
            } catch (a) {
                return void r(a, !0)
            }
            o && mt(e) ? Xe(e, r) : r(e)
        })
    }, $e[te] = function(t, e, r, n) {
        var i = n.digestEffect,
            o = Je,
            a = Object.keys(e);
        if (0 !== a.length) {
            var s = Yt(e, r);
            a.forEach(function(t) {
                i(e[t], o, s[t], t)
            })
        } else r(bt(e) ? [] : {})
    }, $e[ee] = function(t, e, r, n) {
        var i = n.digestEffect,
            o = Je,
            a = Object.keys(e),
            s = bt(e) ? Mt(a.length) : {},
            u = {},
            c = !1;
        a.forEach(function(t) {
            var e = function(e, n) {
                c || (n || qt(e) ? (r.cancel(), r(e, n)) : (r.cancel(), c = !0, s[t] = e, r(s)))
            };
            e.cancel = It, u[t] = e
        }), r.cancel = function() {
            c || (c = !0, a.forEach(function(t) {
                return u[t].cancel()
            }))
        }, a.forEach(function(t) {
            c || i(e[t], o, u[t], t)
        })
    }, $e[re] = function(t, e, r, n) {
        var i = e.context,
            o = e.fn,
            a = e.args,
            s = n.task;
        try {
            var u = o.apply(i, a);
            if (mt(u)) return void Xe(u, r);
            if (wt(u)) return void lr(t, u, s.context, Je, Wt(o), !1, r);
            r(u)
        } catch (c) {
            r(c, !0)
        }
    }, $e[ne] = function(t, e, r) {
        var n = e.context,
            i = e.fn,
            o = e.args;
        try {
            var a = function(t, e) {
                pt(t) ? r(e) : r(t, !0)
            };
            i.apply(n, o.concat(a)), a.cancel && (r.cancel = a.cancel)
        } catch (s) {
            r(s, !0)
        }
    }, $e[ie] = function(t, e, r, n) {
        var i = e.context,
            o = e.fn,
            a = e.args,
            s = e.detached,
            u = n.task,
            c = function(t) {
                var e = t.context,
                    r = t.fn,
                    n = t.args;
                try {
                    var i = r.apply(e, n);
                    if (wt(i)) return i;
                    var o = !1;
                    return Bt(function(t) {
                        return o ? {
                            value: t,
                            done: !0
                        } : (o = !0, {
                            value: i,
                            done: !mt(i)
                        })
                    })
                } catch (a) {
                    return Bt(function() {
                        throw a
                    })
                }
            }({
                context: i,
                fn: o,
                args: a
            }),
            f = function(t, e) {
                return t.isSagaIterator ? {
                    name: t.meta.name
                } : Wt(e)
            }(c, o);
        Re(function() {
            var e = lr(t, c, u.context, Je, f, s, It);
            s ? r(e) : e.isRunning() ? (u.queue.addTask(e), r(e)) : e.isAborted() ? u.queue.abort(e.error()) : r(e)
        })
    }, $e[oe] = function(t, e, r, n) {
        var i = n.task,
            o = function(t, e) {
                if (t.isRunning()) {
                    var r = {
                        task: i,
                        cb: e
                    };
                    e.cancel = function() {
                        t.isRunning() && Ct(t.joiners, r)
                    }, t.joiners.push(r)
                } else t.isAborted() ? e(t.error(), !0) : e(t.result())
            };
        if (bt(e)) {
            if (0 === e.length) return void r([]);
            var a = Yt(e, r);
            e.forEach(function(t, e) {
                o(t, a[e])
            })
        } else o(e, r)
    }, $e[ae] = function(t, e, r, n) {
        var i = n.task;
        e === ut ? Ze(i) : bt(e) ? e.forEach(Ze) : Ze(e), r()
    }, $e[se] = function(t, e, r) {
        var n = e.selector,
            i = e.args;
        try {
            r(n.apply(void 0, [t.getState()].concat(i)))
        } catch (o) {
            r(o, !0)
        }
    }, $e[ue] = function(t, e, r) {
        var n = e.pattern,
            i = Ye(e.buffer),
            o = Fe(n),
            a = function e(r) {
                qe(r) || t.channel.take(e, o), i.put(r)
            },
            s = i.close;
        i.close = function() {
            a.cancel(), s()
        }, t.channel.take(a, o), r(i)
    }, $e[ce] = function(t, e, r, n) {
        r(n.task.isCancelled())
    }, $e[fe] = function(t, e, r) {
        e.flush(r)
    }, $e[le] = function(t, e, r, n) {
        r(n.task.context[e])
    }, $e[he] = function(t, e, r, n) {
        var i = n.task;
        jt(i.context, e), r()
    }, $e);

    function er(t, e) {
        return t + "?" + e
    }

    function rr(t) {
        var e = t.name,
            r = t.location;
        return r ? e + "  " + er(r.fileName, r.lineNumber) : e
    }

    function nr(t) {
        var e = Rt(function(t) {
            return t.cancelledTasks
        }, t);
        return e.length ? ["Tasks cancelled due to error:"].concat(e).join("\n") : ""
    }
    var ir = null,
        or = [],
        ar = function(t) {
            t.crashedEffect = ir, or.push(t)
        },
        sr = function() {
            ir = null, or.length = 0
        },
        ur = function(t) {
            ir = t
        },
        cr = function() {
            var t = or[0],
                e = or.slice(1),
                r = t.crashedEffect ? function(t) {
                    var e = Kt(t);
                    return e ? e.code + "  " + er(e.fileName, e.lineNumber) : ""
                }(t.crashedEffect) : null;
            return ["The above error occurred in task " + rr(t.meta) + (r ? " \n when executing effect " + r : "")].concat(e.map(function(t) {
                return "    created by " + rr(t.meta)
            }), [nr(or)]).join("\n")
        };

    function fr(t, e, r, n, i, o, a) {
        var s, u, c, f = Ke,
            l = null,
            h = [],
            d = Object.create(r),
            p = function(t, e, r) {
                var n, i = [],
                    o = !1;

                function a(t) {
                    e(), u(), r(t, !0)
                }

                function s(e) {
                    i.push(e), e.cont = function(s, u) {
                        o || (Ct(i, e), e.cont = It, u ? a(s) : (e === t && (n = s), i.length || (o = !0, r(n))))
                    }
                }

                function u() {
                    o || (o = !0, i.forEach(function(t) {
                        t.cont = It, t.cancel()
                    }), i = [])
                }
                return s(t), {
                    addTask: s,
                    cancelAll: u,
                    abort: a,
                    getTasks: function() {
                        return i
                    }
                }
            }(e, function() {
                h.push.apply(h, p.getTasks().map(function(t) {
                    return t.meta.name
                }))
            }, v);

        function v(e, r) {
            if (r) {
                if (f = He, ar({
                        meta: i,
                        cancelledTasks: h
                    }), g.isRoot) {
                    var n = cr();
                    sr(), t.onError(e, {
                        sagaStack: n
                    })
                }
                c = e, l && l.reject(e)
            } else e === ft ? f = Ge : f !== Ge && (f = Ve), u = e, l && l.resolve(e);
            g.cont(e, r), g.joiners.forEach(function(t) {
                t.cb(e, r)
            }), g.joiners = null
        }
        var g = ((s = {})[ct] = !0, s.id = n, s.meta = i, s.isRoot = o, s.context = d, s.joiners = [], s.queue = p, s.cancel = function() {
            f === Ke && (f = Ge, p.cancelAll(), v(ft, !1))
        }, s.cont = a, s.end = v, s.setContext = function(t) {
            jt(d, t)
        }, s.toPromise = function() {
            return l ? l.promise : (l = Ae(), f === He ? l.reject(c) : f !== Ke && l.resolve(u), l.promise)
        }, s.isRunning = function() {
            return f === Ke
        }, s.isCancelled = function() {
            return f === Ge || f === Ke && e.status === Ge
        }, s.isAborted = function() {
            return f === He
        }, s.result = function() {
            return u
        }, s.error = function() {
            return c
        }, s);
        return g
    }

    function lr(t, e, r, n, i, o, a) {
        var s = t.finalizeRunEffect(function(e, r, n) {
            if (mt(e)) Xe(e, n);
            else if (wt(e)) lr(t, e, c.context, r, i, !1, n);
            else if (e && e[it]) {
                var o = tr[e.type];
                o(t, e.payload, n, f)
            } else n(e)
        });
        l.cancel = It;
        var u = {
                meta: i,
                cancel: function() {
                    u.status === Ke && (u.status = Ge, l(ft))
                },
                status: Ke
            },
            c = fr(t, u, r, n, i, o, a),
            f = {
                task: c,
                digestEffect: h
            };
        return a.cancel = c.cancel, l(), c;

        function l(t, r) {
            try {
                var i;
                r ? (i = e.throw(t), sr()) : zt(t) ? (u.status = Ge, l.cancel(), i = gt(e.return) ? e.return(ft) : {
                    done: !0,
                    value: ft
                }) : i = Ft(t) ? gt(e.return) ? e.return() : {
                    done: !0
                } : e.next(t), i.done ? (u.status !== Ge && (u.status = Ve), u.cont(i.value)) : h(i.value, n, l)
            } catch (o) {
                if (u.status === Ge) throw o;
                u.status = He, u.cont(o, !0)
            }
        }

        function h(e, r, n, i) {
            void 0 === i && (i = "");
            var o, a = Qe();

            function u(r, i) {
                o || (o = !0, n.cancel = It, t.sagaMonitor && (i ? t.sagaMonitor.effectRejected(a, r) : t.sagaMonitor.effectResolved(a, r)), i && ur(e), n(r, i))
            }
            t.sagaMonitor && t.sagaMonitor.effectTriggered({
                effectId: a,
                parentEffectId: r,
                label: i,
                effect: e
            }), u.cancel = It, n.cancel = function() {
                o || (o = !0, u.cancel(), u.cancel = It, t.sagaMonitor && t.sagaMonitor.effectCancelled(a))
            }, s(e, a, u)
        }
    }
    var hr = function(t) {
            void 0 === t && (t = {});
            var e, r = t,
                n = r.context,
                i = void 0 === n ? {} : n,
                o = r.channel,
                a = void 0 === o ? We() : o,
                s = r.sagaMonitor,
                u = function(t, e) {
                    if (null == t) return {};
                    var r, n, i = {},
                        o = Object.keys(t);
                    for (n = 0; n < o.length; n++) r = o[n], e.indexOf(r) >= 0 || (i[r] = t[r]);
                    return i
                }(r, ["context", "channel", "sagaMonitor"]);

            function c(t) {
                var r = t.getState,
                    n = t.dispatch;
                return e = function(t, e) {
                        for (var r = t.channel, n = void 0 === r ? We() : r, i = t.dispatch, o = t.getState, a = t.context, s = void 0 === a ? {} : a, u = t.sagaMonitor, c = t.effectMiddlewares, f = t.onError, l = void 0 === f ? Dt : f, h = arguments.length, d = new Array(h > 2 ? h - 2 : 0), p = 2; p < h; p++) d[p - 2] = arguments[p];
                        var v, g = e.apply(void 0, d),
                            y = Qe();
                        if (u && (u.rootSagaStarted = u.rootSagaStarted || It, u.effectTriggered = u.effectTriggered || It, u.effectResolved = u.effectResolved || It, u.effectRejected = u.effectRejected || It, u.effectCancelled = u.effectCancelled || It, u.actionDispatched = u.actionDispatched || It, u.rootSagaStarted({
                                effectId: y,
                                saga: e,
                                args: d
                            })), c) {
                            var b = Z.apply(void 0, c);
                            v = function(t) {
                                return function(e, r, n) {
                                    return b(function(e) {
                                        return t(e, r, n)
                                    })(e)
                                }
                            }
                        } else v = Tt;
                        var m = {
                            channel: n,
                            dispatch: Ut(i),
                            getState: o,
                            sagaMonitor: u,
                            onError: l,
                            finalizeRunEffect: v
                        };
                        return Re(function() {
                            var t = lr(m, g, s, y, Wt(e), !0, It);
                            return u && u.effectResolved(y, t), t
                        })
                    }.bind(null, dt({}, u, {
                        context: i,
                        channel: a,
                        dispatch: n,
                        getState: r,
                        sagaMonitor: s
                    })),
                    function(t) {
                        return function(e) {
                            s && s.actionDispatched && s.actionDispatched(e);
                            var r = t(e);
                            return a.put(e), r
                        }
                    }
            }
            return c.run = function() {
                return e.apply(void 0, arguments)
            }, c.setContext = function(t) {
                jt(i, t)
            }, c
        },
        dr = r(52),
        pr = function(t) {
            for (var e = Object.keys(t), r = {}, n = 0; n < e.length; n++) {
                var i = e[n];
                "function" === typeof t[i] && (r[i] = t[i])
            }
            var o, a = Object.keys(r);
            try {
                ! function(t) {
                    Object.keys(t).forEach(function(e) {
                        var r = t[e];
                        if ("undefined" === typeof r(void 0, {
                                type: H.INIT
                            })) throw new Error('Reducer "' + e + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
                        if ("undefined" === typeof r(void 0, {
                                type: H.PROBE_UNKNOWN_ACTION()
                            })) throw new Error('Reducer "' + e + "\" returned undefined when probed with a random type. Don't try to handle " + H.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')
                    })
                }(r)
            } catch (s) {
                o = s
            }
            return function(t, e) {
                if (void 0 === t && (t = {}), o) throw o;
                for (var n = !1, i = {}, s = 0; s < a.length; s++) {
                    var u = a[s],
                        c = r[u],
                        f = t[u],
                        l = c(f, e);
                    if ("undefined" === typeof l) {
                        var h = $(u, e);
                        throw new Error(h)
                    }
                    i[u] = l, n = n || l !== f
                }
                return n ? i : t
            }
        }({
            user: u.a,
            login: function(t, e) {
                var r = t || l;
                switch (e.type) {
                    case f.h:
                        return Object(c.a)({}, r, {
                            inProcess: !0,
                            username: e.payload.username,
                            error: ""
                        });
                    case f.m:
                        return Object(c.a)({}, r, {
                            onlineRetrySuccess: !0
                        });
                    case f.s:
                        return Object(c.a)({}, r, {
                            retryingOnline: e.payload.retrying
                        });
                    case f.t:
                        return Object(c.a)({}, r, {
                            suggestPasswordChange: !0
                        });
                    case f.j:
                        return Object(c.a)({}, r, {
                            multifactor: e.payload.data
                        });
                    case f.k:
                        return Object(c.a)({}, r, {
                            inProcess: !1,
                            multifactor: void 0,
                            notifyOffline: !0
                        });
                    case f.n:
                        return Object(c.a)({}, r, {
                            inProcess: !1,
                            multifactor: void 0
                        });
                    case f.g:
                        return Object(c.a)({}, r, {
                            onlineRetrySuccess: !1
                        });
                    case f.c:
                        return Object(c.a)({}, l, {
                            error: e.payload.error
                        });
                    case f.f:
                        if (r.onlineRetrySuccess || r.retryingOnline) return Object(c.a)({}, r, {
                            notifyOffline: !1
                        });
                        if (r.inProcess || r.multifactor) break;
                        return l;
                    case f.r:
                    case f.b:
                    case f.a:
                    case f.i:
                        return l
                }
                return r
            },
            blob: function(t, e) {
                var r = t || w;
                switch (e.type) {
                    case v:
                        return Object(c.a)({}, r, {
                            passwords: Object(c.a)({}, r.passwords, Object(h.a)({}, e.payload.passwordId, Object(c.a)({}, r.passwords[e.payload.passwordId], e.payload.password)))
                        });
                    case g:
                        var n = Object(c.a)({}, r, {
                            passwords: Object(c.a)({}, r.passwords)
                        });
                        return delete n.passwords[e.payload.passwordId], n;
                    case p:
                        return Object(c.a)({}, r, e.payload.data)
                }
                return r
            },
            vaultData: function(t, e) {
                var r = t || A;
                switch (e.type) {
                    case x:
                        return k(r, e.payload.changes)
                }
                return r
            },
            multifactor: function(t, e) {
                var r = t || q;
                switch (e.type) {
                    case O:
                        return Object(c.a)({}, r, {
                            inProcess: !0
                        });
                    case T:
                        return Object(c.a)({}, r, {
                            inProcess: !0,
                            error: ""
                        });
                    case N:
                        return Object(c.a)({}, r, {
                            error: e.payload.error,
                            inProcess: !1
                        });
                    case C:
                        return q;
                    case I:
                        return Object(c.a)({}, r, {
                            sentSMS: !0,
                            inProcess: !1
                        });
                    case j:
                        return Object(c.a)({}, r, {
                            trustedDeviceLabel: e.payload.label
                        });
                    case R:
                        return Object(c.a)({}, r, {
                            trustedDeviceLabel: ""
                        });
                    case B:
                        return Object(c.a)({}, r, {
                            loadDuoWebSdk: e.payload.duoWebSdk
                        })
                }
                return r
            },
            settings: function(t, e) {
                var r = t || W;
                switch (e.type) {
                    case Y:
                        return Object(c.a)({}, r, {
                            language: e.payload.language
                        })
                }
                return r
            }
        }),
        vr = (Object(dr.createLogger)({
            collapsed: !0,
            diff: !0
        }), hr());
    var gr = r(0),
        yr = r.n(gr),
        br = function(t) {
            return {
                done: !0,
                value: t
            }
        },
        mr = {};

    function wr(t) {
        return xt(t) ? "channel" : Et(t) ? String(t) : gt(t) ? t.name : String(t)
    }

    function _r(t, e, r) {
        var n, i, o, a = e;

        function s(e, r) {
            if (a === mr) return br(e);
            if (r && !i) throw a = mr, r;
            n && n(e);
            var s = r ? t[i](r) : t[a]();
            return a = s.nextState, o = s.effect, n = s.stateUpdater, i = s.errorState, a === mr ? br(e) : o
        }
        return Bt(s, function(t) {
            return s(null, t)
        }, r)
    }

    function xr(t, e) {
        for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) n[i - 2] = arguments[i];
        var o, a = {
                done: !1,
                value: ve(t)
            },
            s = function(t) {
                return o = t
            };
        return _r({
            q1: function() {
                return {
                    nextState: "q2",
                    effect: a,
                    stateUpdater: s
                }
            },
            q2: function() {
                return {
                    nextState: "q1",
                    effect: (t = o, {
                        done: !1,
                        value: we.apply(void 0, [e].concat(n, [t]))
                    })
                };
                var t
            }
        }, "q1", "takeEvery(" + wr(t) + ", " + e.name + ")")
    }

    function Er(t, e) {
        for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) n[i - 2] = arguments[i];
        var o, a, s = {
                done: !1,
                value: ve(t)
            },
            u = function(t) {
                return {
                    done: !1,
                    value: we.apply(void 0, [e].concat(n, [t]))
                }
            },
            c = function(t) {
                return {
                    done: !1,
                    value: (e = t, void 0 === e && (e = ut), de(ae, e))
                };
                var e
            },
            f = function(t) {
                return o = t
            },
            l = function(t) {
                return a = t
            };
        return _r({
            q1: function() {
                return {
                    nextState: "q2",
                    effect: s,
                    stateUpdater: l
                }
            },
            q2: function() {
                return o ? {
                    nextState: "q3",
                    effect: c(o)
                } : {
                    nextState: "q1",
                    effect: u(a),
                    stateUpdater: f
                }
            },
            q3: function() {
                return {
                    nextState: "q1",
                    effect: u(a),
                    stateUpdater: f
                }
            }
        }, "q1", "takeLatest(" + wr(t) + ", " + e.name + ")")
    }

    function Sr(t, e) {
        for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) n[i - 2] = arguments[i];
        return we.apply(void 0, [xr, t, e].concat(n))
    }

    function kr(t, e) {
        for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) n[i - 2] = arguments[i];
        return we.apply(void 0, [Er, t, e].concat(n))
    }
    var Ar = r(5),
        Or = r.n(Ar),
        Ir = r(6),
        Tr = {
            get: function(t) {
                return Or.a.getItem(Object(Ir.a)(t) + "_iter")
            },
            set: function(t, e) {
                return Or.a.setItem(Object(Ir.a)(t) + "_iter", e)
            }
        };

    function jr(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, e) {
            var r = [],
                n = !0,
                i = !1,
                o = void 0;
            try {
                for (var a, s = t[Symbol.iterator](); !(n = (a = s.next()).done) && (r.push(a.value), !e || r.length !== e); n = !0);
            } catch (u) {
                i = !0, o = u
            } finally {
                try {
                    n || null == s.return || s.return()
                } finally {
                    if (i) throw o
                }
            }
            return r
        }(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }
    var Rr = r(4);

    function Cr(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function Nr(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function Pr(t) {
        return (Pr = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function Lr(t) {
        return (Lr = "function" === typeof Symbol && "symbol" === Pr(Symbol.iterator) ? function(t) {
            return Pr(t)
        } : function(t) {
            return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : Pr(t)
        })(t)
    }

    function Br(t, e) {
        return !e || "object" !== Lr(e) && "function" !== typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function Dr(t) {
        return (Dr = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function Mr(t, e) {
        return (Mr = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function Ur(t, e) {
        if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), e && Mr(t, e)
    }

    function Fr(t, e, r) {
        return (Fr = function() {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
            } catch (t) {
                return !1
            }
        }() ? Reflect.construct : function(t, e, r) {
            var n = [null];
            n.push.apply(n, e);
            var i = new(Function.bind.apply(t, n));
            return r && Mr(i, r.prototype), i
        }).apply(null, arguments)
    }

    function zr(t) {
        var e = "function" === typeof Map ? new Map : void 0;
        return (zr = function(t) {
            if (null === t || (r = t, -1 === Function.toString.call(r).indexOf("[native code]"))) return t;
            var r;
            if ("function" !== typeof t) throw new TypeError("Super expression must either be null or a function");
            if ("undefined" !== typeof e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n)
            }

            function n() {
                return Fr(t, arguments, Dr(this).constructor)
            }
            return n.prototype = Object.create(t.prototype, {
                constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), Mr(n, t)
        })(t)
    }

    function qr(t, e) {
        return void 0 === e ? {
            type: t
        } : {
            type: t,
            body: e
        }
    }
    var Yr, Wr = function(t) {
            function e() {
                return Cr(this, e), Br(this, Dr(e).apply(this, arguments))
            }
            var r, n, i;
            return Ur(e, zr(Error)), r = e, (n = [{
                key: "toString",
                value: function() {
                    return this.message
                }
            }]) && Nr(r.prototype, n), i && Nr(r, i), e
        }(),
        Kr = function(t) {
            function e() {
                return Cr(this, e), Br(this, Dr(e).call(this, "An unknown service error occurred."))
            }
            return Ur(e, Wr), e
        }();
    ! function(t) {
        t.DUO = "duo", t.GOOGLE_AUTHENTICATOR = "googleauth", t.GRID = "grid", t.LASTPASS_AUTHENTICATOR = "lastpassauth", t.LASTPASS_MFA = "lastpassmfa", t.FINGERPRINT = "multifactor", t.MICROSOFT_AUTHENTICATOR = "microsoftauth", t.SALESFORCE = "salesforcehash", t.SECURE_AUTH = "secureauth", t.SECURID = "securid", t.SESAME = "sesame", t.SYMANTEC_VIP = "symantecvip", t.TOOPHER = "toopher", t.TRANSAKT = "transakt", t.YUBIKEY = "yubikey"
    }(Yr || (Yr = {}));
    var Gr = r(53),
        Hr = r.n(Gr);

    function Vr(t) {
        return Hr.a.parse(t, {
            attributeNamePrefix: "_",
            ignoreAttributes: !1
        })
    }
    var Xr = "success",
        $r = "iterations",
        Jr = "requirepwchange",
        Qr = "multifactor",
        Zr = "multifactorretry",
        tn = "wrongserver",
        en = function(t, e, r, n, i, o, a) {
            return qr(Xr, {
                uid: t,
                csrf: e,
                suggestPasswordChange: r,
                upgradeIterations: i,
                trustedDeviceId: o,
                legacyXML: n,
                redirect: a
            })
        },
        rn = function() {
            return qr(Jr)
        },
        nn = function(t) {
            return qr($r, {
                iterations: t
            })
        },
        on = function(t) {
            return qr(Qr, t)
        },
        an = function(t) {
            return qr(Zr, {
                retryId: t
            })
        },
        sn = function(t) {
            return qr(tn, {
                host: t
            })
        },
        un = {
            success: en,
            requirePasswordChange: rn,
            wrongIterations: nn,
            multifactorChallenge: on,
            multifactorRetryResponse: an,
            wrongServer: sn
        };

    function cn(t) {
        switch (t._cause) {
            case "outofbandrequired":
                return t._outofbandtype;
            case "microsoftauthrequired":
                return Yr.MICROSOFT_AUTHENTICATOR;
            case "googleauthrequired":
                return Yr.GOOGLE_AUTHENTICATOR;
            case "gridresponserequired":
                return Yr.GRID;
            case "multifactorresponserequired":
                return Yr.FINGERPRINT;
            case "sesameotprequired":
                return Yr.SESAME;
            case "otprequired":
                return Yr.YUBIKEY
        }
    }

    function fn(t, e) {
        return !!t._capabilities && t._capabilities.split(",").includes(e)
    }

    function ln(t) {
        if (fn(t, "totp") || fn(t, "passcode")) return !0;
        switch (cn(t)) {
            case Yr.MICROSOFT_AUTHENTICATOR:
            case Yr.GOOGLE_AUTHENTICATOR:
            case Yr.YUBIKEY:
                return !0
        }
        return !1
    }

    function hn(t, e) {
        var r = cn(e),
            n = "1" === e._preferduowebsdk ? {
                host: e._duo_host,
                bytes: e._duo_bytes,
                signature: e._duo_signature
            } : void 0;
        if (r) return {
            username: t,
            provider: {
                type: r,
                image: e._outofbandimage,
                label: e._outofbandname,
                duoWebSDK: n
            },
            options: {
                outofbandauto: fn(e, "outofbandauto"),
                outofband: fn(e, "outofband") || "outofbandrequired" === e._cause,
                verificationCode: ln(e),
                disable: "false" === e._hidedisable,
                trust: (!e._allowtrust || "1" === e._allowtrust) && "true" === e._allowmultifactortrust
            },
            sms: e._smshash && {
                uid: e._smsuid,
                hash: e._smshash,
                time: e._smstime
            },
            trustedDeviceLabel: e._trustlabel,
            trustExpired: "1" === e._trustexpired
        }
    }
    var dn = function(t) {
        return t.replace(/&apos;/gi, "'").replace(/&gt;/gi, ">").replace(/&lt;/gi, "<").replace(/&quot;/gi, '"').replace(/&amp;/gi, "&")
    };

    function pn(t, e) {
        return function() {
            var r = Object(Rr.a)(yr.a.mark(function r(n, i, o) {
                var a, s, u, c, f, l, h, d, p;
                return yr.a.wrap(function(r) {
                    for (;;) switch (r.prev = r.next) {
                        case 0:
                            return r.next = 2, e(n, i);
                        case 2:
                            return a = r.sent, r.next = 5, t.legacy("login.php", a, o);
                        case 5:
                            if (s = r.sent, u = jr(s, 2), c = u[0], f = u[1], l = Vr(c), 200 !== f || !l) {
                                r.next = 30;
                                break
                            }
                            if (!(h = l.response ? l.response : l) || !h.ok) {
                                r.next = 18;
                                break
                            }
                            if ("1" !== h.ok._pwresetreqd) {
                                r.next = 15;
                                break
                            }
                            return r.abrupt("return", rn());
                        case 15:
                            return r.abrupt("return", en(h.ok._uid, h.ok._token, "1" === h.ok._oldpassword, c, parseInt(h.ok._upgrade_iterations), h.ok._trustuuid, h.ok._redirect_url));
                        case 18:
                            if (!l.response || !l.response.error) {
                                r.next = 30;
                                break
                            }
                            if (!(d = l.response.error)._iterations) {
                                r.next = 22;
                                break
                            }
                            return r.abrupt("return", nn(parseInt(d._iterations)));
                        case 22:
                            if ("wrongserver" !== d._cause) {
                                r.next = 24;
                                break
                            }
                            return r.abrupt("return", sn(d._server));
                        case 24:
                            if ("outofbandrequired" !== d._cause || !d._retryid) {
                                r.next = 26;
                                break
                            }
                            return r.abrupt("return", an(d._retryid));
                        case 26:
                            if (!(p = hn(a.username, d))) {
                                r.next = 29;
                                break
                            }
                            return r.abrupt("return", on(p));
                        case 29:
                            throw new Wr(dn(d._message));
                        case 30:
                            throw new Kr;
                        case 31:
                        case "end":
                            return r.stop()
                    }
                }, r)
            }));
            return function(t, e, n) {
                return r.apply(this, arguments)
            }
        }()
    }
    var vn = "success",
        gn = function(t) {
            return qr(vn, t)
        },
        yn = {
            success: gn
        };

    function bn(t) {
        return function() {
            var e = Object(Rr.a)(yr.a.mark(function e(r) {
                var n, i, o, a;
                return yr.a.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, t.legacy("iterations.php", {
                                email: r
                            });
                        case 2:
                            if (n = e.sent, i = jr(n, 2), o = i[0], 200 !== i[1] || !o) {
                                e.next = 10;
                                break
                            }
                            if (NaN === (a = parseInt(o))) {
                                e.next = 10;
                                break
                            }
                            return e.abrupt("return", gn(a));
                        case 10:
                            throw new Kr;
                        case 11:
                        case "end":
                            return e.stop()
                    }
                }, e)
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
    }
    var mn = function(t, e) {
        return {
            login: pn(t, e),
            iterations: bn(t)
        }
    };

    function wn(t) {
        return function(t) {
            if (Array.isArray(t)) {
                for (var e = 0, r = new Array(t.length); e < t.length; e++) r[e] = t[e];
                return r
            }
        }(t) || function(t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }
    var _n = {
        get: function() {
            var t = Object(Rr.a)(yr.a.mark(function t() {
                var e;
                return yr.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, Or.a.getItem("saved_usernames");
                        case 2:
                            return e = t.sent, t.abrupt("return", e || []);
                        case 4:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }));
            return function() {
                return t.apply(this, arguments)
            }
        }(),
        set: function(t) {
            return Or.a.setItem("saved_usernames", t)
        }
    };
    var xn = r(36);

    function En(t, e) {
        return Object(Ir.a)(t.toString("hex") + e)
    }
    var Sn = r(54);

    function kn(t, e, r, n, i) {
        return new Promise(function(o, a) {
            try {
                Object(Sn.pbkdf2)(t, e, r, n, i, function(t, e) {
                    t ? a(t) : o(e)
                })
            } catch (s) {
                a(s)
            }
        })
    }

    function An(t, e) {
        return On.apply(this, arguments)
    }

    function On() {
        return (On = Object(Rr.a)(yr.a.mark(function t(e, r) {
            var n;
            return yr.a.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2, kn(e, r, 1, 32, "sha256");
                    case 2:
                        return n = t.sent, t.abrupt("return", n.toString("hex"));
                    case 4:
                    case "end":
                        return t.stop()
                }
            }, t)
        }))).apply(this, arguments)
    }

    function In(t, e, r) {
        return kn(e, t, r, 32, "sha256")
    }
    var Tn = yr.a.mark(jn);

    function jn(t, e, r) {
        var n, i, o, a;
        return yr.a.wrap(function(s) {
            for (;;) switch (s.prev = s.next) {
                case 0:
                    if (!(r > 1)) {
                        s.next = 10;
                        break
                    }
                    return s.next = 3, me(In, t, e, r);
                case 3:
                    return n = s.sent, s.next = 6, me(An, n, e);
                case 6:
                    return i = s.sent, s.abrupt("return", [n, i]);
                case 10:
                    return s.next = 12, me(xn.a, t, e);
                case 12:
                    return o = s.sent, s.next = 15, me(En, o, e);
                case 15:
                    return a = s.sent, s.abrupt("return", [o, a]);
                case 17:
                case "end":
                    return s.stop()
            }
        }, Tn)
    }

    function Rn(t) {
        return new Promise(function(e, r) {
            (new window.PWCHANGER).hashMigration(t.from.key.toString("binary"), t.from.hash, t.username, t.to.key.toString("binary"), t.to.hash, "", t.csrf, t.iterations, function(t, n) {
                t ? e() : r("PBKDF2 Iteration Migration Failed: " + (n || ""))
            })
        })
    }
    var Cn = {
        get: function(t) {
            return Or.a.getItem(Object(Ir.a)(t) + "_trust")
        },
        set: function(t, e) {
            return Or.a.setItem(Object(Ir.a)(t) + "_trust", e)
        }
    };

    function Nn(t, e) {
        return {
            cancelled: !1,
            succeeded: !0,
            trustedDeviceId: t,
            trustedDeviceLabel: e
        }
    }
    var Pn = "success",
        Ln = function(t, e) {
            return qr(Pn, {
                otp: t,
                trustedDeviceId: e
            })
        },
        Bn = {
            success: Ln
        };

    function Dn(t) {
        return function() {
            var e = Object(Rr.a)(yr.a.mark(function e(r, n, i) {
                var o, a, s;
                return yr.a.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (!n.provider.duoWebSDK) {
                                e.next = 15;
                                break
                            }
                            return e.next = 3, t.legacyXML("duo.php", Object(c.a)({
                                xml: 1,
                                sig_response: r,
                                akey: n.provider.duoWebSDK.bytes,
                                username: n.username
                            }, i && {
                                trustlabel: i,
                                cansetuuid: 1,
                                canexpire: 1
                            }));
                        case 3:
                            if (o = e.sent, a = jr(o, 2), s = a[0], 200 !== a[1]) {
                                e.next = 15;
                                break
                            }
                            if (!s) {
                                e.next = 15;
                                break
                            }
                            if (!s.ok) {
                                e.next = 13;
                                break
                            }
                            return e.abrupt("return", Ln(s.ok._code, s.ok._trustuuid));
                        case 13:
                            if (!s.error) {
                                e.next = 15;
                                break
                            }
                            throw new Wr(s.error);
                        case 15:
                            throw new Kr;
                        case 16:
                        case "end":
                            return e.stop()
                    }
                }, e)
            }));
            return function(t, r, n) {
                return e.apply(this, arguments)
            }
        }()
    }
    var Mn = "success",
        Un = function() {
            return qr(Mn)
        },
        Fn = {
            success: Un
        };

    function zn(t) {
        return function() {
            var e = Object(Rr.a)(yr.a.mark(function e(r) {
                var n, i, o;
                return yr.a.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, t.legacyXML("send_sms_passcodes.php", {
                                smshash: r.hash,
                                smstime: r.time,
                                smsuid: r.uid
                            });
                        case 2:
                            if (n = e.sent, i = jr(n, 2), o = i[0], 200 !== i[1] || "" !== o.response.ok) {
                                e.next = 8;
                                break
                            }
                            return e.abrupt("return", Un());
                        case 8:
                            throw new Kr;
                        case 9:
                        case "end":
                            return e.stop()
                    }
                }, e)
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
    }
    var qn = "success",
        Yn = function(t) {
            return qr(qn, {
                trustedDeviceId: t
            })
        },
        Wn = {
            success: Yn
        };

    function Kn(t) {
        return function() {
            var e = Object(Rr.a)(yr.a.mark(function e(r) {
                var n, i, o;
                return yr.a.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, t.legacyXML("trust.php", {
                                trustlabel: r,
                                cansetuuid: 1,
                                canexpire: 1
                            });
                        case 2:
                            if (n = e.sent, i = jr(n, 2), o = i[0], 200 !== i[1] || !o.response.ok) {
                                e.next = 8;
                                break
                            }
                            return e.abrupt("return", Yn(o.response.ok._trustuuid));
                        case 8:
                            throw new Kr;
                        case 9:
                        case "end":
                            return e.stop()
                    }
                }, e)
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
    }
    var Gn = function(t) {
        return {
            duo: Dn(t),
            sms: zn(t),
            trustedDevice: Kn(t)
        }
    };
    var Hn = yr.a.mark(Vn);

    function Vn(t) {
        var e;
        return yr.a.wrap(function(r) {
            for (;;) switch (r.prev = r.next) {
                case 0:
                    if (!t.provider.duoWebSDK) {
                        r.next = 9;
                        break
                    }
                    return r.next = 3, ge(z(t.provider.duoWebSDK));
                case 3:
                    return r.next = 5, ve(D);
                case 5:
                    return e = r.sent, r.abrupt("return", e.payload.response);
                case 9:
                    throw new Kr;
                case 10:
                case "end":
                    return r.stop()
            }
        }, Hn)
    }

    function Xn(t, e) {
        return function(t, e, r, n) {
            var i = yr.a.mark(function t(i, o) {
                var a, s, u;
                return yr.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (!i.provider.duoWebSDK) {
                                t.next = 6;
                                break
                            }
                            return t.next = 3, me(e, i, o);
                        case 3:
                            return t.abrupt("return", t.sent);
                        case 6:
                            if (!i.options.outofband) {
                                t.next = 24;
                                break
                            }
                            if (i.options.outofbandauto) {
                                t.next = 19;
                                break
                            }
                            return t.next = 10, ye([me(n, i), ve(L)]);
                        case 10:
                            if (a = t.sent, s = jr(a, 2), u = s[0], !s[1]) {
                                t.next = 18;
                                break
                            }
                            return t.next = 17, me(r, i, o);
                        case 17:
                            return t.abrupt("return", t.sent);
                        case 18:
                            return t.abrupt("return", u);
                        case 19:
                            return t.next = 21, me(r, i, o);
                        case 21:
                            return t.abrupt("return", t.sent);
                        case 24:
                            return t.next = 26, me(n, i);
                        case 26:
                            return t.abrupt("return", t.sent);
                        case 27:
                        case "end":
                            return t.stop()
                    }
                }, t)
            });
            return yr.a.mark(function e(r) {
                var n, o, a;
                return yr.a.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (n = {}, o = [], !r.options.outofband) {
                                e.next = 13;
                                break
                            }
                            return e.t0 = o, e.next = 6, Sr(j, function(t) {
                                n.trustedDeviceLabel = t.payload.label
                            });
                        case 6:
                            return e.t1 = e.sent, e.t0.push.call(e.t0, e.t1), e.t2 = o, e.next = 11, Sr(R, function() {
                                n.trustedDeviceLabel = ""
                            });
                        case 11:
                            e.t3 = e.sent, e.t2.push.call(e.t2, e.t3);
                        case 13:
                            return e.t4 = o, e.next = 16, Sr(O, t);
                        case 16:
                            return e.t5 = e.sent, e.t4.push.call(e.t4, e.t5), e.next = 20, me(i, r, n);
                        case 20:
                            if (!(a = e.sent).succeeded) {
                                e.next = 25;
                                break
                            }
                            if (!a.trustedDeviceId) {
                                e.next = 25;
                                break
                            }
                            return e.next = 25, me(Cn.set, r.username, a.trustedDeviceId);
                        case 25:
                            return e.next = 27, ge(U());
                        case 27:
                            return o.forEach(function(t) {
                                return t.cancel()
                            }), e.abrupt("return", a);
                        case 29:
                        case "end":
                            return e.stop()
                    }
                }, e)
            })
        }(function(t) {
            return yr.a.mark(function e(r) {
                return yr.a.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, me(t.sms, r.payload.data);
                        case 2:
                            if (e.sent.type !== a.SUCCESS) {
                                e.next = 6;
                                break
                            }
                            return e.next = 6, ge(M());
                        case 6:
                        case "end":
                            return e.stop()
                    }
                }, e)
            })
        }(t), function(t, e) {
            return yr.a.mark(function r(n) {
                var i, a, s, u, c, f = arguments;
                return yr.a.wrap(function(r) {
                    for (;;) switch (r.prev = r.next) {
                        case 0:
                            if (i = f.length > 1 && void 0 !== f[1] ? f[1] : {}, !n.provider.duoWebSDK) {
                                r.next = 19;
                                break
                            }
                            return r.next = 4, ye([me(Vn, n), ve(C)]);
                        case 4:
                            if (a = r.sent, s = jr(a, 2), u = s[0], !s[1]) {
                                r.next = 12;
                                break
                            }
                            return r.abrupt("return", {
                                cancelled: !0,
                                succeeded: !1
                            });
                        case 12:
                            return r.next = 14, me(t.duo, u, n, i.trustedDeviceLabel);
                        case 14:
                            if ((c = r.sent).type !== o.SUCCESS) {
                                r.next = 19;
                                break
                            }
                            return r.next = 18, me(e, {
                                challenge: n,
                                totp: "checkduo" + c.body.otp
                            });
                        case 18:
                            return r.abrupt("return", Nn(c.body.trustedDeviceId, i.trustedDeviceLabel));
                        case 19:
                        case "end":
                            return r.stop()
                    }
                }, r)
            })
        }(t, e), function(t, e) {
            return yr.a.mark(function r(n) {
                var i, o, a, u, c, f, l, h, d, p = arguments;
                return yr.a.wrap(function(r) {
                    for (;;) switch (r.prev = r.next) {
                        case 0:
                            i = p.length > 1 && void 0 !== p[1] ? p[1] : {}, o = {
                                challenge: n
                            }, u = function() {
                                o = {
                                    challenge: n,
                                    trustedDeviceLabel: i.trustedDeviceLabel,
                                    retryId: a
                                }
                            };
                        case 3:
                            return r.prev = 4, r.next = 7, ye([me(e, o), ve([T, C])]);
                        case 7:
                            if (c = r.sent, f = jr(c, 2), l = f[0], h = f[1], !l) {
                                r.next = 25;
                                break
                            }
                            if (!l.succeeded) {
                                r.next = 22;
                                break
                            }
                            if (l.trustedDeviceId || !i.trustedDeviceLabel) {
                                r.next = 19;
                                break
                            }
                            return r.next = 16, me(t.trustedDevice, i.trustedDeviceLabel);
                        case 16:
                            if ((d = r.sent).type !== s.SUCCESS) {
                                r.next = 19;
                                break
                            }
                            return r.abrupt("return", Nn(d.body.trustedDeviceId, i.trustedDeviceLabel));
                        case 19:
                            return r.abrupt("return", Nn(l.trustedDeviceId, o.trustedDeviceLabel));
                        case 22:
                            l.retryId && (a = l.retryId, u());
                        case 23:
                            r.next = 30;
                            break;
                        case 25:
                            if (h.type !== C) {
                                r.next = 29;
                                break
                            }
                            return r.abrupt("return", {
                                cancelled: !0,
                                succeeded: !1
                            });
                        case 29:
                            h.type === T && (o = {
                                challenge: n,
                                trustedDeviceLabel: h.payload.label,
                                totp: h.payload.totp
                            });
                        case 30:
                            r.next = 41;
                            break;
                        case 32:
                            if (r.prev = 32, r.t0 = r.catch(4), !o.totp) {
                                r.next = 40;
                                break
                            }
                            return r.next = 37, ge(F(r.t0.toString()));
                        case 37:
                            u(), r.next = 41;
                            break;
                        case 40:
                            throw r.t0;
                        case 41:
                            r.next = 3;
                            break;
                        case 43:
                        case "end":
                            return r.stop()
                    }
                }, r, null, [
                    [4, 32]
                ])
            })
        }(t, e), (r = e, yr.a.mark(function t(e) {
            var n, i, o;
            return yr.a.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return t.prev = 1, t.next = 4, ve([T, C]);
                    case 4:
                        if ((n = t.sent).type !== T) {
                            t.next = 14;
                            break
                        }
                        return i = {
                            challenge: e,
                            trustedDeviceLabel: n.payload.label,
                            totp: n.payload.totp
                        }, t.next = 9, me(r, i);
                    case 9:
                        if (!(o = t.sent).succeeded) {
                            t.next = 12;
                            break
                        }
                        return t.abrupt("return", Nn(o.trustedDeviceId, i.trustedDeviceLabel));
                    case 12:
                        t.next = 15;
                        break;
                    case 14:
                        return t.abrupt("return", {
                            cancelled: !0,
                            succeeded: !1
                        });
                    case 15:
                        t.next = 21;
                        break;
                    case 17:
                        return t.prev = 17, t.t0 = t.catch(1), t.next = 21, ge(F(t.t0.toString()));
                    case 21:
                        t.next = 0;
                        break;
                    case 23:
                    case "end":
                        return t.stop()
                }
            }, t, null, [
                [1, 17]
            ])
        })));
        var r
    }

    function $n(t, e) {
        return yr.a.mark(function r(n) {
            return yr.a.wrap(function(r) {
                for (;;) switch (r.prev = r.next) {
                    case 0:
                        if (!n.payload.rememberUsername) {
                            r.next = 3;
                            break
                        }
                        return r.next = 3, me(t, n.payload.username);
                    case 3:
                        if (!n.payload.rememberPassword || !e) {
                            r.next = 6;
                            break
                        }
                        return r.next = 6, me(e, n.payload.username, n.payload.password);
                    case 6:
                        delete n.payload.password;
                    case 7:
                    case "end":
                        return r.stop()
                }
            }, r)
        })
    }
    var Jn, Qn, Zn, ti, ei = "LastPassDataDriver";

    function ri(t, e) {
        return e ? t.then(function(t) {
            e(null, t)
        }, function(t) {
            e(t)
        }) : t
    }
    var ni = window.openDatabase,
        ii = {
            _driver: "LastPassLoginsDriver",
            _initStorage: function() {
                return new Promise(function(t, e) {
                    if (ni)(Zn = ni("lp", "1.0", "LastPass Local Database", 2e5)).transaction(function(r) {
                        r.executeSql("CREATE TABLE IF NOT EXISTS LastPassSavedLogins2(username varchar(255) PRIMARY KEY, password text, last_login datetime, protected tinyint(1))", [], function(e, r) {
                            t()
                        }, function(t, r) {
                            return e(), !1
                        })
                    });
                    else if (indexedDB) {
                        var r = indexedDB.open("lp");
                        r.onerror = e, r.onsuccess = function() {
                            ti = r.result, t()
                        }, r.onupgradeneeded = function() {
                            r.result.createObjectStore("LastPassSavedLogins2", {
                                keyPath: "username"
                            }).createIndex("last_login", "last_login", {
                                unique: !1
                            })
                        }
                    } else e()
                })
            },
            iterate: function(t, e) {
                throw Error("Not implemented")
            },
            getItem: function(t, e) {
                var r = new Promise(function(t, e) {
                    if (Zn) Zn.transaction(function(r) {
                        r.executeSql("SELECT * FROM LastPassSavedLogins2 order by last_login desc", [], function(e, r) {
                            var n = [];
                            if (r.rows.length > 0)
                                for (var i = 0; i < r.rows.length; i++) {
                                    var o = {
                                        username: r.rows.item(i).username,
                                        password: r.rows.item(i).password,
                                        protected: r.rows.item(i).protected
                                    };
                                    n.push(o)
                                }
                            t(n)
                        }, function(t, r) {
                            return e(r), !1
                        })
                    });
                    else if (ti) {
                        var r = ti.transaction("LastPassSavedLogins2", "readwrite").objectStore("LastPassSavedLogins2"),
                            n = [];
                        r.openCursor().onsuccess = function(e) {
                            var r = e.target.result;
                            if (r) {
                                var i = {
                                    username: r.value.username,
                                    password: r.value.password,
                                    protected: r.value.protected
                                };
                                n.push(i), r.continue()
                            }
                            t(n)
                        }, r.openCursor().onerror = function() {
                            e()
                        }
                    }
                });
                return e && r.then(function(t) {
                    e(null, t)
                }, function(t) {
                    e(t)
                }), r
            },
            setItem: function(t, e, r) {
                var n = new Promise(function(t, r) {
                    var n = (new Date).getTime();
                    if (Zn) Zn.transaction(function(i) {
                        i.executeSql("INSERT OR IGNORE INTO LastPassSavedLogins2 (username, password, last_login,protected) VALUES (?, ?, ?,?)", [e.username, e.password, n, e.protected], function(r, i) {
                            r.executeSql("UPDATE LastPassSavedLogins2 SET last_login = ?, password = ?, protected = ? WHERE username = ?", [n, e.password, e.protected, e.username]), t()
                        }, function(t, e) {
                            return r(e), !1
                        })
                    });
                    else if (ti) {
                        var i = ti.transaction("LastPassSavedLogins2", "readwrite").objectStore("LastPassSavedLogins2").put({
                            username: e.username,
                            password: e.password,
                            last_login: n,
                            protected: e.protected
                        });
                        i.onsuccess = function() {
                            t()
                        }, i.onerror = r
                    }
                });
                return r && n.then(function(t) {
                    r(null, t)
                }, function(t) {
                    r(t)
                }), n
            },
            removeItem: function(t, e) {
                var r = new Promise(function(e, r) {
                    if (Zn) Zn.transaction(function(n) {
                        n.executeSql("DELETE FROM LastPassSavedLogins2 WHERE username=?", [t], function(t, r) {
                            e()
                        }, function(t, e) {
                            return r(e), !1
                        })
                    });
                    else if (ti) {
                        ti.transaction("LastPassSavedLogins2", "readwrite").objectStore("LastPassSavedLogins2").openCursor(IDBKeyRange.only(t)).onsuccess = function(n) {
                            var i = n.target.result;
                            if (i) {
                                if (i.value.username === t) {
                                    var o = i.delete();
                                    o.onsuccess = function() {
                                        e()
                                    }, o.onerror = r
                                }
                                i.continue()
                            }
                        }
                    }
                });
                return e && r.then(function(t) {
                    e(null, t)
                }, function(t) {
                    e(t)
                }), r
            },
            clear: function(t) {
                var e = new Promise(function(t, e) {
                    if (Zn) Zn.transaction(function(r) {
                        r.executeSql("DELETE FROM LastPassSavedLogins2", [], function(e, r) {
                            t()
                        }, function(t, r) {
                            return e(r), !1
                        })
                    });
                    else if (ti) {
                        var r = ti.transaction("LastPassSavedLogins2", "readwrite").objectStore("LastPassSavedLogins2").clear();
                        r.onsuccess = function() {
                            t()
                        }, r.onerror = e
                    }
                });
                return t && e.then(function(e) {
                    t(null, e)
                }, function(e) {
                    t(e)
                }), e
            },
            length: function(t) {
                throw Error("Not implemented")
            },
            key: function(t, e) {
                throw Error("Not implemented")
            },
            keys: function(t) {
                throw Error("Not implemented")
            }
        };
    Or.a.defineDriver(ii);
    var oi, ai = Or.a.createInstance({
            driver: "LastPassLoginsDriver"
        }),
        si = {
            get: function() {
                var t = Object(Rr.a)(yr.a.mark(function t() {
                    var e;
                    return yr.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, ai.getItem("login");
                            case 2:
                                return e = t.sent, t.abrupt("return", e);
                            case 4:
                            case "end":
                                return t.stop()
                        }
                    }, t)
                }));
                return function() {
                    return t.apply(this, arguments)
                }
            }(),
            set: function(t) {
                return ai.setItem(t.username, t)
            },
            remove: function(t) {
                return ai.removeItem(t)
            },
            clear: function() {
                return ai.clear()
            }
        };
    Or.a.defineDriver((oi = "accts", {
        _driver: ei,
        _initStorage: function() {
            return new Promise(function(t, e) {
                try {
                    if (Jn || Qn) t();
                    else if (window.openDatabase)(Jn = window.openDatabase("lp", "1.0", "LastPass Local Database", 2e5)).transaction(function(r) {
                        r.executeSql("CREATE TABLE IF NOT EXISTS LastPassData(\n                id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,\n                username_hash varchar(255),\n                type varchar(20),\n                data TEXT,\n                CONSTRAINT usertype UNIQUE (username_hash, type)\n              )", [], function() {
                            return t()
                        }, function(t, r) {
                            return e(r), !1
                        })
                    });
                    else if (window.indexedDB) {
                        var r = window.indexedDB.open("lp");
                        r.onerror = e, r.onsuccess = function() {
                            Qn = r.result, t()
                        }, r.onupgradeneeded = function() {
                            r.result.createObjectStore("LastPassData", {
                                keyPath: "usertype"
                            }).createIndex("username_hash", "username_hash", {
                                unique: !1
                            })
                        }
                    } else e()
                } catch (n) {
                    e(n)
                }
            })
        },
        getItem: function(t, e) {
            return ri(new Promise(function(e, r) {
                Jn ? Jn.transaction(function(n) {
                    n.executeSql("SELECT data FROM LastPassData WHERE username_hash=? AND type=?", [t, oi], function(t, r) {
                        e(1 === r.rows.length ? r.rows.item(0).data : null)
                    }, function(t, e) {
                        return r(e), !1
                    })
                }) : Qn && (Qn.transaction("LastPassData", "readwrite").objectStore("LastPassData").index("username_hash").openCursor(IDBKeyRange.only(t)).onsuccess = function(t) {
                    var r = t.target.result;
                    r ? (r.value.type === oi && e(r.value.data), r.continue()) : e(void 0)
                })
            }), e)
        },
        setItem: function(t, e, r) {
            return ri(new Promise(function(r, n) {
                if (Jn) Jn.transaction(function(i) {
                    i.executeSql("REPLACE INTO LastPassData (username_hash, type, data) VALUES (?, ?, ?)", [t, oi, e], function() {
                        r(e)
                    }, function(t, e) {
                        return n(e), !1
                    })
                });
                else if (Qn) {
                    var i = Qn.transaction("LastPassData", "readwrite").objectStore("LastPassData").put({
                        username_hash: t,
                        type: oi,
                        data: e,
                        usertype: t + "_" + oi
                    });
                    i.onsuccess = function() {
                        r()
                    }, i.onerror = n
                }
            }), r)
        },
        iterate: function() {
            throw Error("Not implemented")
        },
        removeItem: function() {
            throw Error("Not implemented")
        },
        clear: function() {
            throw Error("Not implemented")
        },
        length: function() {
            throw Error("Not implemented")
        },
        key: function() {
            throw Error("Not implemented")
        },
        keys: function() {
            throw Error("Not implemented")
        }
    }));
    var ui = Or.a.createInstance({
            driver: ei
        }),
        ci = {
            get: function(t) {
                return ui.getItem(Object(Ir.a)(t))
            },
            set: function(t, e) {
                return ui.setItem(Object(Ir.a)(t), e)
            }
        };
    var fi = 12e5;

    function li(t, e, r, n) {
        return n ? function(t, e, r, n) {
            return yr.a.mark(function i(o) {
                var a, s, u, c, f, l;
                return yr.a.wrap(function(i) {
                    for (;;) switch (i.prev = i.next) {
                        case 0:
                            return i.next = 2, me(t, o);
                        case 2:
                            return a = i.sent, i.next = 5, _e(e, o, a);
                        case 5:
                            return s = i.sent, u = !1, i.prev = 7, i.next = 10, ye({
                                loginOnlineResult: xe(s),
                                timeout: Se(5e3)
                            });
                        case 10:
                            c = i.sent, f = c.timeout, u = f, i.next = 27;
                            break;
                        case 15:
                            if (i.prev = 15, i.t0 = i.catch(7), !(i.t0 instanceof Wr)) {
                                i.next = 21;
                                break
                            }
                            throw i.t0;
                        case 21:
                            return i.next = 23, me(n, o, a);
                        case 23:
                            if (!i.sent) {
                                i.next = 26;
                                break
                            }
                            return i.abrupt("return", !0);
                        case 26:
                            throw i.t0;
                        case 27:
                            if (!u) {
                                i.next = 34;
                                break
                            }
                            return i.next = 30, me(n, o, a);
                        case 30:
                            if (!i.sent) {
                                i.next = 34;
                                break
                            }
                            return s.cancel(), i.abrupt("return", !0);
                        case 34:
                            return i.next = 36, xe(s);
                        case 36:
                            return l = i.sent, i.next = 39, me(r, o, a, l);
                        case 39:
                            return i.abrupt("return", i.sent);
                        case 40:
                        case "end":
                            return i.stop()
                    }
                }, i, null, [
                    [7, 15]
                ])
            })
        }(t, e, r, function(t, e) {
            return yr.a.mark(function r(n, i) {
                var o, a;
                return yr.a.wrap(function(r) {
                    for (;;) switch (r.prev = r.next) {
                        case 0:
                            return r.next = 2, me(ci.get, n.payload.username);
                        case 2:
                            if (!(o = r.sent)) {
                                r.next = 11;
                                break
                            }
                            return r.next = 6, me(t, n, o);
                        case 6:
                            if (!(a = r.sent)) {
                                r.next = 10;
                                break
                            }
                            return r.next = 10, _e(e, n, i);
                        case 10:
                            return r.abrupt("return", a);
                        case 11:
                            return r.abrupt("return", !1);
                        case 12:
                        case "end":
                            return r.stop()
                    }
                }, r)
            })
        }(n, function(t, e) {
            return yr.a.mark(function r(n, i) {
                var o, a;
                return yr.a.wrap(function(r) {
                    for (;;) switch (r.prev = r.next) {
                        case 0:
                            return r.prev = 0, r.next = 3, ge(f.D(!0));
                        case 3:
                            o = 3e4;
                        case 4:
                            return r.next = 7, ye({
                                timeout: Se(o),
                                logout: ve(f.i)
                            });
                        case 7:
                            if (!r.sent.timeout) {
                                r.next = 14;
                                break
                            }(o *= 2) > fi && (o = fi), r.next = 15;
                            break;
                        case 14:
                            return r.abrupt("return");
                        case 15:
                            return r.prev = 15, r.next = 18, me(t, n, i);
                        case 18:
                            return a = r.sent, r.next = 21, me(e, n, i, a);
                        case 21:
                            if (!r.sent) {
                                r.next = 25;
                                break
                            }
                            return r.next = 25, ge(f.B());
                        case 25:
                            return r.abrupt("return");
                        case 28:
                            r.prev = 28, r.t0 = r.catch(15);
                        case 30:
                            r.next = 4;
                            break;
                        case 32:
                            return r.prev = 32, r.next = 35, ge(f.D(!1));
                        case 35:
                            return r.finish(32);
                        case 36:
                        case "end":
                            return r.stop()
                    }
                }, r, null, [
                    [0, , 32, 36],
                    [15, 28]
                ])
            })
        }(e, r))) : function(t, e, r) {
            return yr.a.mark(function n(i) {
                var o, a;
                return yr.a.wrap(function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            return n.next = 2, me(t, i);
                        case 2:
                            return o = n.sent, n.next = 5, me(e, i, o);
                        case 5:
                            return a = n.sent, n.next = 8, me(r, i, o, a);
                        case 8:
                            return n.abrupt("return", n.sent);
                        case 9:
                        case "end":
                            return n.stop()
                    }
                }, n)
            })
        }(t, e, r)
    }

    function hi(t, e, r, o, a) {
        var s, u, l = function(t) {
                return yr.a.mark(function e(r) {
                    var n, i, o, a, s, u, c;
                    return yr.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, me(t, r.payload.username);
                            case 2:
                                return n = e.sent, e.next = 5, me(Cn.get, r.payload.username);
                            case 5:
                                return i = e.sent, e.next = 8, me(jn, r.payload.username, r.payload.password, n);
                            case 8:
                                return o = e.sent, a = jr(o, 2), s = a[0], u = a[1], c = {
                                    username: r.payload.username,
                                    key: s,
                                    hash: u,
                                    iterations: n,
                                    trustedDeviceId: i,
                                    federated: r.payload.federated
                                }, e.abrupt("return", c);
                            case 14:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                })
            }((s = e, yr.a.mark(function t(e) {
                var r, n;
                return yr.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, me(Tr.get, e);
                        case 2:
                            if (r = t.sent) {
                                t.next = 11;
                                break
                            }
                            return t.next = 6, me(s.iterations, e);
                        case 6:
                            if ((n = t.sent).type !== i.SUCCESS) {
                                t.next = 11;
                                break
                            }
                            return t.next = 10, me(Tr.set, e, n.body);
                        case 10:
                            return t.abrupt("return", n.body);
                        case 11:
                            return t.abrupt("return", r);
                        case 12:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))),
            h = yr.a.mark(function t(e) {
                var r, n;
                return yr.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, me(_n.get);
                        case 2:
                            return r = t.sent, n = [e].concat(wn(r.filter(function(t) {
                                return t !== e
                            }))), t.next = 6, me(_n.set, n);
                        case 6:
                            return t.next = 8, ge(f.E(n));
                        case 8:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }),
            d = o ? $n(h, (u = o, yr.a.mark(function t(e, r) {
                var n;
                return yr.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, me(u.protect, e, r);
                        case 2:
                            return n = t.sent, t.next = 5, me(si.set, n);
                        case 5:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))) : $n(h),
            p = function(t, e) {
                return yr.a.mark(function r(i, o, a) {
                    var s, u, c, l, h, d, p, v;
                    return yr.a.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                            case 0:
                                return s = new AbortController, r.prev = 1, r.next = 4, me(t.login, o, a, s.signal);
                            case 4:
                                u = r.sent, r.t0 = u.type, r.next = r.t0 === n.SUCCESS ? 8 : r.t0 === n.REQUIREPWCHANGE ? 12 : r.t0 === n.WRONG_SERVER ? 16 : r.t0 === n.WRONG_ITERATIONS ? 20 : r.t0 === n.MULTIFACTOR_CHALLENGE ? 22 : r.t0 === n.MULTIFACTOR_RETRY_RESPONSE ? 24 : 26;
                                break;
                            case 8:
                                return r.next = 10, me(e, u, i, o, a);
                            case 10:
                                return c = {
                                    succeeded: !0,
                                    trustedDeviceId: u.body.trustedDeviceId
                                }, r.abrupt("return", c);
                            case 12:
                                return r.next = 14, ge(f.u(i.payload.username));
                            case 14:
                                return l = {
                                    succeeded: !1
                                }, r.abrupt("return", l);
                            case 16:
                                return r.next = 18, ge(f.G(u.body.host));
                            case 18:
                                return h = {
                                    succeeded: !1
                                }, r.abrupt("return", h);
                            case 20:
                                return d = {
                                    succeeded: !1,
                                    iterationsUpdate: u.body.iterations
                                }, r.abrupt("return", d);
                            case 22:
                                return p = {
                                    succeeded: !1,
                                    challenge: u.body
                                }, r.abrupt("return", p);
                            case 24:
                                return v = {
                                    succeeded: !1,
                                    retryId: u.body.retryId
                                }, r.abrupt("return", v);
                            case 26:
                                return r.prev = 26, r.next = 29, de(ce, {});
                            case 29:
                                if (!r.sent) {
                                    r.next = 31;
                                    break
                                }
                                s.abort();
                            case 31:
                                return r.finish(26);
                            case 32:
                            case "end":
                                return r.stop()
                        }
                    }, r, null, [
                        [1, , 26, 32]
                    ])
                })
            }(e, function(t) {
                return yr.a.mark(function e(r, n, i, o) {
                    var a, s, u, c, l;
                    return yr.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (a = i.key, !r.body.suggestPasswordChange) {
                                    e.next = 6;
                                    break
                                }
                                return e.next = 4, ge(f.F());
                            case 4:
                                e.next = 23;
                                break;
                            case 6:
                                if (!r.body.upgradeIterations) {
                                    e.next = 23;
                                    break
                                }
                                return e.prev = 7, e.next = 10, me(jn, i.username, n.payload.password, r.body.upgradeIterations);
                            case 10:
                                return s = e.sent, u = jr(s, 2), c = u[0], l = u[1], e.next = 16, me(Rn, {
                                    username: i.username,
                                    csrf: r.body.csrf,
                                    iterations: r.body.upgradeIterations,
                                    from: i,
                                    to: {
                                        key: c,
                                        hash: l
                                    }
                                });
                            case 16:
                                return e.next = 18, _e(Tr.set, i.username, r.body.upgradeIterations);
                            case 18:
                                a = c, e.next = 23;
                                break;
                            case 21:
                                e.prev = 21, e.t0 = e.catch(7);
                            case 23:
                                return e.next = 25, me(t.setCSRF, r.body.csrf);
                            case 25:
                                return e.next = 27, ge(f.C(r.body.uid, i.username, r.body.csrf, a, r.body.legacyXML, o && o.challenge, r.body.redirect));
                            case 27:
                            case "end":
                                return e.stop()
                        }
                    }, e, null, [
                        [7, 21]
                    ])
                })
            }(t)),
            v = function(t, e) {
                return yr.a.mark(function r(n) {
                    return yr.a.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                            case 0:
                                return r.prev = 0, r.next = 3, me(t, n);
                            case 3:
                                if (!r.sent) {
                                    r.next = 9;
                                    break
                                }
                                return r.next = 7, _e(e, n);
                            case 7:
                                r.next = 10;
                                break;
                            case 9:
                                delete n.payload.password;
                            case 10:
                                r.next = 22;
                                break;
                            case 12:
                                if (r.prev = 12, r.t0 = r.catch(0), !(r.t0 instanceof Wr)) {
                                    r.next = 19;
                                    break
                                }
                                return r.next = 17, ge(f.w(r.t0.toString()));
                            case 17:
                                r.next = 22;
                                break;
                            case 19:
                                return r.next = 22, ge(f.w((new Kr).toString()));
                            case 22:
                            case "end":
                                return r.stop()
                        }
                    }, r, null, [
                        [0, 12]
                    ])
                })
            }(li(l, p, function(t, e) {
                return yr.a.mark(function r(n, i, o) {
                    var a, s, u, l, h, d, p;
                    return yr.a.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                            case 0:
                                if (a = o, !o.iterationsUpdate) {
                                    r.next = 14;
                                    break
                                }
                                return r.next = 4, _e(Tr.set, i.username, o.iterationsUpdate);
                            case 4:
                                return r.next = 6, me(jn, n.payload.username, n.payload.password, o.iterationsUpdate);
                            case 6:
                                return s = r.sent, u = jr(s, 2), l = u[0], h = u[1], i = Object(c.a)({}, i, {
                                    key: l,
                                    hash: h,
                                    iterations: o.iterationsUpdate
                                }), r.next = 13, me(t, n, i);
                            case 13:
                                a = r.sent;
                            case 14:
                                if (!a.challenge) {
                                    r.next = 27;
                                    break
                                }
                                return r.next = 17, ge(f.z(a.challenge, n.payload.username, n.payload.password));
                            case 17:
                                return d = Xn(e, yr.a.mark(function e(r) {
                                    return yr.a.wrap(function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, me(t, n, i, r);
                                            case 2:
                                                return e.abrupt("return", e.sent);
                                            case 3:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e)
                                })), r.next = 20, me(d, a.challenge);
                            case 20:
                                if (!(p = r.sent).cancelled) {
                                    r.next = 24;
                                    break
                                }
                                return r.next = 24, ge(f.v());
                            case 24:
                                return r.abrupt("return", p.succeeded);
                            case 27:
                                return r.abrupt("return", a.succeeded);
                            case 28:
                            case "end":
                                return r.stop()
                        }
                    }, r)
                })
            }(p, r), a), d);
        return yr.a.mark(function t() {
            return yr.a.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2, kr(f.h, v);
                    case 2:
                    case "end":
                        return t.stop()
                }
            }, t)
        })
    }
    var di = r(21);

    function pi(t) {
        var e = typeof t;
        return "boolean" === e || "string" === e || "number" === e
    }

    function vi(t) {
        return Object.keys(t).reduce(function(e, r) {
            return pi(t[r]) ? e + (e ? "&" : "") + r + "=" + encodeURIComponent(t[r].toString()) : e
        }, "")
    }
    var gi = yr.a.mark(Ei),
        yi = yr.a.mark(ki),
        bi = yr.a.mark(Ai),
        mi = yr.a.mark(Ti),
        wi = yr.a.mark(Ci),
        _i = window;

    function xi(t) {
        _i.openURL(_i.base_url + t)
    }

    function Ei(t) {
        return yr.a.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
                case 0:
                    e.prev = 0, _i.finishReactLogin(t.payload.uid, t.payload.username, t.payload.key.toString("binary"), t.payload.csrf, t.payload.legacyXml), e.next = 8;
                    break;
                case 4:
                    return e.prev = 4, e.t0 = e.catch(0), e.next = 8, ge(f.w(e.t0.toString()));
                case 8:
                case "end":
                    return e.stop()
            }
        }, gi, null, [
            [0, 4]
        ])
    }

    function Si(t) {
        switch (t) {
            case Yr.SESAME:
            case Yr.GRID:
            case Yr.FINGERPRINT:
                return !1;
            default:
                return !0
        }
    }

    function ki() {
        return yr.a.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
                case 0:
                    return t.next = 2, Ee();
                case 2:
                    t.sent.login.retryingOnline && _i.openURL(_i.getchromeurl("webclient-tab.html"));
                case 4:
                case "end":
                    return t.stop()
            }
        }, yi)
    }

    function Ai(t) {
        return yr.a.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
                case 0:
                    if (Si(t.payload.data.provider.type)) {
                        e.next = 6;
                        break
                    }
                    return _i.LP_do_login(t.payload.email, t.payload.password), e.next = 4, ge(f.v());
                case 4:
                    e.next = 10;
                    break;
                case 6:
                    return e.next = 8, Ee();
                case 8:
                    e.sent.login.retryingOnline && _i.openURL(_i.getchromeurl("webclient-tab.html"));
                case 10:
                case "end":
                    return e.stop()
            }
        }, bi)
    }

    function Oi(t) {
        return new Promise(function(e, r) {
            _i.FederatedLogin.isFederated(t, e, r)
        })
    }

    function Ii(t) {
        return new Promise(function(e, r) {
            _i.FederatedLogin.getPassword(t, function(t, r, n, i) {
                e([t, r, n, i])
            }, r)
        })
    }

    function Ti(t) {
        var e, r, n, i, o, a;
        return yr.a.wrap(function(s) {
            for (;;) switch (s.prev = s.next) {
                case 0:
                    return s.prev = 0, s.next = 3, me(Oi, t.payload.email);
                case 3:
                    if (!s.sent) {
                        s.next = 27;
                        break
                    }
                    return s.prev = 5, s.next = 8, me(Ii, t.payload.email);
                case 8:
                    return e = s.sent, r = jr(e, 4), n = r[0], i = r[1], o = r[2], a = r[3], s.next = 16, ge(f.x(t.payload.email, n, !1, !1, i, o, a));
                case 16:
                    s.next = 27;
                    break;
                case 18:
                    if (s.prev = 18, s.t0 = s.catch(5), "error" !== s.t0.toString().toLowerCase()) {
                        s.next = 25;
                        break
                    }
                    return s.next = 23, ge(f.w("Federated login is not supported in offline mode."));
                case 23:
                    s.next = 27;
                    break;
                case 25:
                    return s.next = 27, ge(f.w(s.t0.toString()));
                case 27:
                    s.next = 31;
                    break;
                case 29:
                    s.prev = 29, s.t1 = s.catch(0);
                case 31:
                case "end":
                    return s.stop()
            }
        }, mi, null, [
            [0, 29],
            [5, 18]
        ])
    }

    function ji(t) {
        xi("/disablemultifactor.php?".concat(vi({
            cmd: "sendemail",
            username: t.payload.challenge.username,
            multifactortype: t.payload.challenge.provider.type
        })))
    }

    function Ri(t) {
        xi("/passwordreset.php?".concat(vi({
            fromprompt: 1,
            lpnorefresh: 1,
            u: t.payload.username
        })))
    }

    function Ci() {
        return yr.a.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
                case 0:
                    return t.next = 2, Sr(f.l, function() {
                        xi("otp.php?forcelogin=1")
                    });
                case 2:
                    return t.next = 4, Sr(f.e, function() {
                        xi("forgot.php")
                    });
                case 4:
                    return t.next = 6, Sr(f.q, function() {
                        xi("terms.php")
                    });
                case 6:
                    return t.next = 8, Sr(f.p, function() {
                        xi("privacy.php")
                    });
                case 8:
                    return t.next = 10, Sr(f.o, function() {
                        _i.openURL("https://support.logmeininc.com/lastpass/help/manage-your-vault-lp010015#Offline")
                    });
                case 10:
                    return t.next = 12, Sr(f.n, Ei);
                case 12:
                    return t.next = 14, Sr(f.j, Ai);
                case 14:
                    return t.next = 16, Sr(P, ji);
                case 16:
                    return t.next = 18, Sr(f.a, Ri);
                case 18:
                    return t.next = 20, Sr(f.d, Ti);
                case 20:
                    return t.next = 22, Sr(f.t, ki);
                case 22:
                case "end":
                    return t.stop()
            }
        }, wi)
    }
    var Ni = r(22),
        Pi = {
            getIterations: function(t) {
                var e = /iterations=(\d*);/.exec(t);
                return e && e.length > 0 ? Number(e[1]) : 1
            },
            getOfflineMultifactor: function(t) {
                return -1 !== t.indexOf("type=sesameoffline\ndata=") ? Yr.SESAME : -1 !== t.indexOf("type=trueapioffline\ndata=") || -1 !== t.indexOf("type=omnikeyoffline\ndata=") ? Yr.FINGERPRINT : -1 !== t.indexOf("type=yubikeyoffline\ndata=") ? Yr.YUBIKEY : null
            }
        },
        Li = window;

    function Bi(t, e, r) {
        return new Promise(function(n, i) {
            Li.reactLoginOffline(t, e.toString("binary"), r, n), setTimeout(i, 5e3)
        })
    }
    var Di = r(55),
        Mi = r(15),
        Ui = r.n(Mi);

    function Fi(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = arguments.length > 2 ? arguments[2] : void 0;
        return {
            key: t,
            default: e,
            transform: function(t) {
                var e = "1" === t || !0 === t;
                return r ? r(e) : e
            }
        }
    }

    function zi(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = arguments.length > 2 ? arguments[2] : void 0;
        return {
            key: t,
            default: e,
            transform: function(t) {
                var e = parseInt(t);
                return r ? r(e) : e
            }
        }
    }
    var qi = {
            name: "name",
            type: "type",
            value: "value",
            checked: Fi("checked"),
            formname: "formName",
            url: "url",
            urid: "urid",
            otherfield: "otherField",
            otherlogin: "otherLogin"
        },
        Yi = {
            aid: "id",
            encname: "name",
            fav: Fi("favorite"),
            extra: "notes",
            encgroup: "folder",
            last_touch: zi("lastTouchAtGmt"),
            last_modified_gmt: zi("lastModifiedAtGmt"),
            created_gmt: zi("createdAtGmt"),
            pwprotect: Fi("passwordProtected"),
            sharefolderid: "sharedFolderId",
            username: "username",
            password: "password",
            url: "loginUrl",
            pwch: "supportsAutoPasswordChange",
            genpw: "generatedPassword",
            autologin: "autologin",
            never_autofill: Fi("autoFill", !1, function(t) {
                return !t
            }),
            basic_auth: Fi("basicAuthLogin"),
            breached: Fi("breached"),
            last_pwchange_gmt: zi("lastPasswordChangeAtGmt"),
            fields: {
                key: "fields",
                default: [],
                transform: function(t) {
                    return t.map(function(t) {
                        return Ui()(t, qi)
                    })
                }
            }
        };

    function Wi(t) {
        return Ui()(t, Yi)
    }
    var Ki = {
        id: "id",
        sharekey: "shareKey",
        sharename: "shareName",
        readonly: Fi("readOnly"),
        give: Fi("give"),
        sharekeyaes: "shareKeyAes",
        associative: Fi("associative"),
        accepted: Fi("accepted"),
        isHidden: "isHidden"
    };

    function Gi(t) {
        var e = {
            passwords: {},
            sharedFolders: {}
        };
        return Object.entries(t.sites).forEach(function(t) {
            var r = jr(t, 2),
                n = r[0],
                i = r[1];
            e.passwords[n] = Wi(i)
        }), t.sharedFolders.forEach(function(t) {
            var r;
            e.sharedFolders[t.id] = (r = t, Ui()(r, Ki))
        }), e
    }
    var Hi, Vi = function(t) {
        return {
            writeBlob: function(e) {
                t.dispatch(m(Gi(e)))
            },
            writeSite: function(e, r) {
                t.dispatch(y(e, Wi(r)))
            },
            removeSite: function(e) {
                t.dispatch(b(e))
            },
            logout: function() {
                t.dispatch(f.y())
            }
        }
    };
    ! function(t) {
        t.WEB = "web", t.CHROME = "cr", t.OPERA = "op", t.EDGE = "edge", t.EDGE_CHROMIUM = "edgecr", t.FIREFOX = "ff", t.SAFARI = "sfx"
    }(Hi || (Hi = {}));
    r.d(e, "api", function() {
        return Xi
    });
    var Xi = function(t) {
        var e, r, n, i = (e = t.platform, r = 2, n = t.version, function() {
                var t = Object(Rr.a)(yr.a.mark(function t(i, o) {
                    var a, s;
                    return yr.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, Object(di.b)(i.username, i.key);
                            case 2:
                                return a = t.sent, s = {
                                    version: n,
                                    hash: i.hash,
                                    xml: r,
                                    method: e,
                                    username: i.username,
                                    encrypted_username: a.toString("base64"),
                                    iterations: i.iterations,
                                    email: i.username,
                                    outofbandsupported: 1,
                                    authsessionid: i.federated.authSessionId,
                                    alpfragmentid: i.federated.fragmentIdFromAlp,
                                    calculatedfragmentid: i.federated.calculatedFragmentId,
                                    uuid: i.trustedDeviceId
                                }, o && (s.otp = o.totp, o.trustedDeviceLabel && (s.trustlabel = o.trustedDeviceLabel, s.cansetuuid = 1, s.canexpire = 1, s.uuid = ""), o.challenge && !o.totp && (s.outofbandrequest = 1, s.outofbandretry = o.retryId ? 1 : 0, s.outofbandretryid = o.retryId)), t.abrupt("return", s);
                            case 6:
                            case "end":
                                return t.stop()
                        }
                    }, t)
                }));
                return function(e, r) {
                    return t.apply(this, arguments)
                }
            }()),
            o = mn(t.fetch, i),
            a = Gn(t.fetch),
            s = Object(Di.a)(t.binaryService),
            u = t.stateSync(),
            c = function(t, e) {
                var r = [e, vr, S];
                return X(pr, {
                    settings: {
                        language: t.language
                    }
                }, tt.apply(void 0, r))
            }(t, Object(Ni.createSyncMiddleware)(u.broadcast));
        return u.initialize({
            dispatch: function(t) {
                c.dispatch(t)
            },
            getState: function() {
                return c.getState()
            }
        }), vr.run(hi(t.fetch, o, a, s, function(t) {
            return yr.a.mark(function e(r, n) {
                var i, o, a, s, u, c, l, h, d, p;
                return yr.a.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return i = r.payload.username, o = r.payload.password, e.next = 4, me(Pi.getIterations, n);
                        case 4:
                            return a = e.sent, e.next = 7, me(jn, i, o, a);
                        case 7:
                            return s = e.sent, u = jr(s, 1), c = u[0], e.next = 12, me(Pi.getOfflineMultifactor, n);
                        case 12:
                            if (!(l = e.sent)) {
                                e.next = 31;
                                break
                            }
                            if (l !== Yr.YUBIKEY) {
                                e.next = 31;
                                break
                            }
                            return h = {
                                username: i,
                                provider: {
                                    type: Yr.YUBIKEY
                                },
                                options: {
                                    outofband: !1,
                                    outofbandauto: !1,
                                    verificationCode: !0,
                                    disable: !1,
                                    trust: !1
                                },
                                trustExpired: !1
                            }, e.next = 18, ge(f.z(h, i, o));
                        case 18:
                            return d = Xn(t, yr.a.mark(function t(e) {
                                return yr.a.wrap(function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, me(Bi, i, c, e.totp);
                                        case 2:
                                            return t.abrupt("return", {
                                                succeeded: !0
                                            });
                                        case 3:
                                        case "end":
                                            return t.stop()
                                    }
                                }, t)
                            })), e.next = 21, me(d, h);
                        case 21:
                            if (!(p = e.sent).succeeded) {
                                e.next = 27;
                                break
                            }
                            return e.next = 25, ge(f.A(i, c));
                        case 25:
                            e.next = 30;
                            break;
                        case 27:
                            if (!p.cancelled) {
                                e.next = 30;
                                break
                            }
                            return e.next = 30, ge(f.v());
                        case 30:
                            return e.abrupt("return", p.succeeded);
                        case 31:
                            return e.next = 33, me(Bi, i, c);
                        case 33:
                            return e.next = 35, ge(f.A(i, c));
                        case 35:
                            return e.abrupt("return", !0);
                        case 36:
                        case "end":
                            return e.stop()
                    }
                }, e)
            })
        }(a))), vr.run(Ci), Vi(c)
    }({
        fetch: function() {
            var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {
                    return fetch.apply(window, arguments)
                },
                n = null,
                i = function() {
                    return n
                },
                o = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        e = arguments.length > 1 ? arguments[1] : void 0,
                        r = arguments.length > 2 ? arguments[2] : void 0;
                    return function() {
                        var n = Object(Rr.a)(yr.a.mark(function n(i, o, a) {
                            var s, u, f;
                            return yr.a.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return s = e(), n.next = 3, r(t + i, Object(c.a)({
                                            signal: a,
                                            credentials: "same-origin"
                                        }, o ? {
                                            method: "POST",
                                            headers: {
                                                "Content-Type": "application/x-www-form-urlencoded"
                                            },
                                            body: vi(s ? Object(c.a)({}, o, {
                                                token: s
                                            }) : o)
                                        } : {}));
                                    case 3:
                                        return u = n.sent, n.next = 6, u.text();
                                    case 6:
                                        return f = n.sent, n.abrupt("return", [f, u.status]);
                                    case 8:
                                    case "end":
                                        return n.stop()
                                }
                            }, n)
                        }));
                        return function(t, e, r) {
                            return n.apply(this, arguments)
                        }
                    }()
                }(e, i, r),
                a = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        e = arguments.length > 1 ? arguments[1] : void 0,
                        r = arguments.length > 2 ? arguments[2] : void 0;
                    return function() {
                        var n = Object(Rr.a)(yr.a.mark(function n(i, o, a) {
                            var s, u, f, l;
                            return yr.a.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return s = e(), u = {
                                            "Content-Type": "application/json"
                                        }, n.next = 4, r("".concat(t, "lmiapi/").concat(i), Object(c.a)({
                                            signal: a,
                                            credentials: "same-origin"
                                        }, o ? {
                                            method: "POST",
                                            headers: s ? Object(c.a)({}, u, {
                                                "X-CSRF-TOKEN": s
                                            }) : u,
                                            body: JSON.stringify(o)
                                        } : {}));
                                    case 4:
                                        return f = n.sent, l = "", n.prev = 6, n.next = 9, f.json();
                                    case 9:
                                        l = n.sent, n.next = 14;
                                        break;
                                    case 12:
                                        n.prev = 12, n.t0 = n.catch(6);
                                    case 14:
                                        return n.abrupt("return", [l, f.status]);
                                    case 15:
                                    case "end":
                                        return n.stop()
                                }
                            }, n, null, [
                                [6, 12]
                            ])
                        }));
                        return function(t, e, r) {
                            return n.apply(this, arguments)
                        }
                    }()
                }(e, i, r);
            return {
                legacy: o,
                legacyXML: (t = o, function() {
                    var e = Object(Rr.a)(yr.a.mark(function e(r, n, i) {
                        var o, a, s, u, c;
                        return yr.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t(r, n, i);
                                case 2:
                                    return o = e.sent, a = jr(o, 2), s = a[0], u = a[1], c = Vr(s), e.abrupt("return", [c, u]);
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    }));
                    return function(t, r, n) {
                        return e.apply(this, arguments)
                    }
                }()),
                lmiapi: a,
                setCSRF: function(t) {
                    n = t
                }
            }
        }("https://lastpass.com/"),
        platform: -1 != navigator.userAgent.indexOf(" OPR/") ? Hi.OPERA : Hi.CHROME,
        stateSync: Ni.createChromeStateSyncAPI,
        language: chrome.i18n.getUILanguage(),
        version: "4.41.0.3",
        binaryService: function(t) {
            return new Promise(function(e, r) {
                var n = {
                        argcount: t.arguments.length,
                        cmd: t.cmd
                    },
                    i = 0;
                t.arguments.forEach(function(t) {
                    n["arg" + i] = t, i++
                }), chrome.runtime.sendNativeMessage("com.lastpass.nplastpass", n, function(t) {
                    chrome.runtime.lastError ? r(chrome.runtime.lastError) : e(t.retval)
                })
            })
        }
    })
}]);