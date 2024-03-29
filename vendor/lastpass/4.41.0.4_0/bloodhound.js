! function(e, r) {
    "function" == typeof define && define.amd ? define("bloodhound", ["jquery"], function(t) {
        return e.Bloodhound = r(t)
    }) : "object" == typeof exports ? module.exports = r(require("jquery")) : e.Bloodhound = r(jQuery)
}(this, function(l) {
    var f = function() {
            "use strict";
            return {
                isMsie: function() {
                    return !!/(msie|trident)/i.test(navigator.userAgent) && navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]
                },
                isBlankString: function(t) {
                    return !t || /^\s*$/.test(t)
                },
                escapeRegExChars: function(t) {
                    return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                },
                isString: function(t) {
                    return "string" == typeof t
                },
                isNumber: function(t) {
                    return "number" == typeof t
                },
                isArray: l.isArray,
                isFunction: l.isFunction,
                isObject: l.isPlainObject,
                isUndefined: function(t) {
                    return void 0 === t
                },
                isElement: function(t) {
                    return !(!t || 1 !== t.nodeType)
                },
                isJQuery: function(t) {
                    return t instanceof l
                },
                toStr: function t(e) {
                    return f.isUndefined(e) || null === e ? "" : e + ""
                },
                bind: l.proxy,
                each: function(t, r) {
                    function e(t, e) {
                        return r(e, t)
                    }
                    l.each(t, e)
                },
                map: l.map,
                filter: l.grep,
                every: function(r, n) {
                    var i = !0;
                    return r ? (l.each(r, function(t, e) {
                        if (!(i = n.call(null, e, t, r))) return !1
                    }), !!i) : i
                },
                some: function(r, n) {
                    var i = !1;
                    return r ? (l.each(r, function(t, e) {
                        if (i = n.call(null, e, t, r)) return !1
                    }), !!i) : i
                },
                mixin: l.extend,
                identity: function(t) {
                    return t
                },
                clone: function(t) {
                    return l.extend(!0, {}, t)
                },
                getIdGenerator: function() {
                    var t = 0;
                    return function() {
                        return t++
                    }
                },
                templatify: function t(e) {
                    return l.isFunction(e) ? e : r;

                    function r() {
                        return String(e)
                    }
                },
                defer: function(t) {
                    setTimeout(function() {
                        t()
                    }, 0)
                },
                debounce: function(i, s, o) {
                    var u, c;
                    return function() {
                        var t = this,
                            e = arguments,
                            r, n;
                        return r = function() {
                            u = null, o || (c = i.apply(t, e))
                        }, n = o && !u, clearTimeout(u), u = setTimeout(function() {
                            r()
                        }, s), n && (c = i.apply(t, e)), c
                    }
                },
                throttle: function(r, n) {
                    var i, s, o, u, c, a;
                    return c = 0, a = function() {
                            c = new Date, o = null, u = r.apply(i, s)
                        },
                        function() {
                            var t = new Date,
                                e = n - (t - c);
                            return i = this, s = arguments, e <= 0 ? (clearTimeout(o), o = null, c = t, u = r.apply(i, s)) : o = o || setTimeout(function() {
                                a()
                            }, e), u
                        }
                },
                stringify: function(t) {
                    return f.isString(t) ? t : JSON.stringify(t)
                },
                noop: function() {}
            }
        }(),
        u = "0.11.1",
        t = function() {
            "use strict";
            return {
                nonword: e,
                whitespace: t,
                obj: {
                    nonword: r(e),
                    whitespace: r(t)
                }
            };

            function t(t) {
                return (t = f.toStr(t)) ? t.split(/\s+/) : []
            }

            function e(t) {
                return (t = f.toStr(t)) ? t.split(/\W+/) : []
            }

            function r(i) {
                return function t(n) {
                    return n = f.isArray(n) ? n : [].slice.call(arguments, 0),
                        function t(e) {
                            var r = [];
                            return f.each(n, function(t) {
                                r = r.concat(i(f.toStr(e[t])))
                            }), r
                        }
                }
            }
        }(),
        r = function() {
            "use strict";

            function t(t) {
                this.maxSize = f.isNumber(t) ? t : 100, this.reset(), this.maxSize <= 0 && (this.set = this.get = l.noop)
            }

            function e() {
                this.head = this.tail = null
            }

            function s(t, e) {
                this.key = t, this.val = e, this.prev = this.next = null
            }
            return f.mixin(t.prototype, {
                set: function t(e, r) {
                    var n = this.list.tail,
                        i;
                    this.size >= this.maxSize && (this.list.remove(n), delete this.hash[n.key], this.size--), (i = this.hash[e]) ? (i.val = r, this.list.moveToFront(i)) : (i = new s(e, r), this.list.add(i), this.hash[e] = i, this.size++)
                },
                get: function t(e) {
                    var r = this.hash[e];
                    if (r) return this.list.moveToFront(r), r.val
                },
                reset: function t() {
                    this.size = 0, this.hash = {}, this.list = new e
                }
            }), f.mixin(e.prototype, {
                add: function t(e) {
                    this.head && (e.next = this.head, this.head.prev = e), this.head = e, this.tail = this.tail || e
                },
                remove: function t(e) {
                    e.prev ? e.prev.next = e.next : this.head = e.next, e.next ? e.next.prev = e.prev : this.tail = e.prev
                },
                moveToFront: function(t) {
                    this.remove(t), this.add(t)
                }
            }), t
        }(),
        e = function() {
            "use strict";
            var s;
            try {
                (s = window.localStorage).setItem("~~~", "!"), s.removeItem("~~~")
            } catch (t) {
                s = null
            }

            function t(t, e) {
                this.prefix = ["__", t, "__"].join(""), this.ttlKey = "__ttl__", this.keyMatcher = new RegExp("^" + f.escapeRegExChars(this.prefix)), this.ls = e || s, this.ls || this._noop()
            }
            return f.mixin(t.prototype, {
                _prefix: function(t) {
                    return this.prefix + t
                },
                _ttlKey: function(t) {
                    return this._prefix(t) + this.ttlKey
                },
                _noop: function() {
                    this.get = this.set = this.remove = this.clear = this.isExpired = f.noop
                },
                _safeSet: function(t, e) {
                    try {
                        this.ls.setItem(t, e)
                    } catch (t) {
                        "QuotaExceededError" === t.name && (this.clear(), this._noop())
                    }
                },
                get: function(t) {
                    return this.isExpired(t) && this.remove(t), r(this.ls.getItem(this._prefix(t)))
                },
                set: function(t, e, r) {
                    return f.isNumber(r) ? this._safeSet(this._ttlKey(t), i(n() + r)) : this.ls.removeItem(this._ttlKey(t)), this._safeSet(this._prefix(t), i(e))
                },
                remove: function(t) {
                    return this.ls.removeItem(this._ttlKey(t)), this.ls.removeItem(this._prefix(t)), this
                },
                clear: function() {
                    var t, e = o(this.keyMatcher);
                    for (t = e.length; t--;) this.remove(e[t]);
                    return this
                },
                isExpired: function(t) {
                    var e = r(this.ls.getItem(this._ttlKey(t)));
                    return !!(f.isNumber(e) && n() > e)
                }
            }), t;

            function n() {
                return (new Date).getTime()
            }

            function i(t) {
                return JSON.stringify(f.isUndefined(t) ? null : t)
            }

            function r(t) {
                return l.parseJSON(t)
            }

            function o(t) {
                var e, r, n = [],
                    i = s.length;
                for (e = 0; e < i; e++)(r = s.key(e)).match(t) && n.push(r.replace(t, ""));
                return n
            }
        }(),
        n = function() {
            "use strict";
            var c = 0,
                a = {},
                h = 6,
                e = new r(10);

            function t(t) {
                t = t || {}, this.cancelled = !1, this.lastReq = null, this._send = t.transport, this._get = t.limiter ? t.limiter(this._get) : this._get, this._cache = !1 === t.cache ? new r(0) : e
            }
            return t.setMaxPendingRequests = function t(e) {
                h = e
            }, t.resetCache = function t() {
                e.reset()
            }, f.mixin(t.prototype, {
                _fingerprint: function t(e) {
                    return (e = e || {}).url + e.type + l.param(e.data || {})
                },
                _get: function(t, e) {
                    var r = this,
                        n, i;

                    function s(t) {
                        e(null, t), r._cache.set(n, t)
                    }

                    function o() {
                        e(!0)
                    }

                    function u() {
                        c--, delete a[n], r.onDeckRequestArgs && (r._get.apply(r, r.onDeckRequestArgs), r.onDeckRequestArgs = null)
                    }
                    n = this._fingerprint(t), this.cancelled || n !== this.lastReq || ((i = a[n]) ? i.done(s).fail(o) : c < h ? (c++, a[n] = this._send(t).done(s).fail(o).always(u)) : this.onDeckRequestArgs = [].slice.call(arguments, 0))
                },
                get: function(t, e) {
                    var r, n;
                    e = e || l.noop, t = f.isString(t) ? {
                        url: t
                    } : t || {}, n = this._fingerprint(t), this.cancelled = !1, this.lastReq = n, (r = this._cache.get(n)) ? e(null, r) : this._get(t, e)
                },
                cancel: function() {
                    this.cancelled = !0
                }
            }), t
        }(),
        i = window.SearchIndex = function() {
            "use strict";
            var u = "c",
                c = "i";

            function t(t) {
                (t = t || {}).datumTokenizer && t.queryTokenizer || l.error("datumTokenizer and queryTokenizer are both required"), this.identify = t.identify || f.stringify, this.datumTokenizer = t.datumTokenizer, this.queryTokenizer = t.queryTokenizer, this.reset()
            }
            return f.mixin(t.prototype, {
                bootstrap: function t(e) {
                    this.datums = e.datums, this.trie = e.trie
                },
                add: function(t) {
                    var s = this;
                    t = f.isArray(t) ? t : [t], f.each(t, function(t) {
                        var i, e;
                        s.datums[i = s.identify(t)] = t, e = n(s.datumTokenizer(t)), f.each(e, function(t) {
                            var e, r, n;
                            for (e = s.trie, r = t.split(""); n = r.shift();)(e = e[u][n] || (e[u][n] = o()))[c].push(i)
                        })
                    })
                },
                get: function t(e) {
                    var r = this;
                    return f.map(e, function(t) {
                        return r.datums[t]
                    })
                },
                search: function t(e) {
                    var s = this,
                        r, o;
                    return r = n(this.queryTokenizer(e)), f.each(r, function(t) {
                        var e, r, n, i;
                        if (o && 0 === o.length) return !1;
                        for (e = s.trie, r = t.split(""); e && (n = r.shift());) e = e[u][n];
                        if (!e || 0 !== r.length) return !(o = []);
                        i = e[c].slice(0), o = o ? a(o, i) : i
                    }), o ? f.map(i(o), function(t) {
                        return s.datums[t]
                    }) : []
                },
                all: function t() {
                    var e = [];
                    for (var r in this.datums) e.push(this.datums[r]);
                    return e
                },
                reset: function t() {
                    this.datums = {}, this.trie = o()
                },
                serialize: function t() {
                    return {
                        datums: this.datums,
                        trie: this.trie
                    }
                }
            }), t;

            function n(t) {
                return t = f.filter(t, function(t) {
                    return !!t
                }), t = f.map(t, function(t) {
                    return t.toLowerCase()
                })
            }

            function o() {
                var t = {};
                return t[c] = [], t[u] = {}, t
            }

            function i(t) {
                for (var e = {}, r = [], n = 0, i = t.length; n < i; n++) e[t[n]] || (e[t[n]] = !0, r.push(t[n]));
                return r
            }

            function a(t, e) {
                var r = 0,
                    n = 0,
                    i = [];
                t = t.sort(), e = e.sort();
                for (var s = t.length, o = e.length; r < s && n < o;) t[r] < e[n] ? r++ : (t[r] > e[n] || (i.push(t[r]), r++), n++);
                return i
            }
        }(),
        s = function() {
            "use strict";
            var n;

            function t(t) {
                this.url = t.url, this.ttl = t.ttl, this.cache = t.cache, this.prepare = t.prepare, this.transform = t.transform, this.transport = t.transport, this.thumbprint = t.thumbprint, this.storage = new e(t.cacheKey)
            }
            return n = {
                data: "data",
                protocol: "protocol",
                thumbprint: "thumbprint"
            }, f.mixin(t.prototype, {
                _settings: function t() {
                    return {
                        url: this.url,
                        type: "GET",
                        dataType: "json"
                    }
                },
                store: function t(e) {
                    this.cache && (this.storage.set(n.data, e, this.ttl), this.storage.set(n.protocol, location.protocol, this.ttl), this.storage.set(n.thumbprint, this.thumbprint, this.ttl))
                },
                fromCache: function t() {
                    var e = {},
                        r;
                    return this.cache ? (e.data = this.storage.get(n.data), e.protocol = this.storage.get(n.protocol), e.thumbprint = this.storage.get(n.thumbprint), r = e.thumbprint !== this.thumbprint || e.protocol !== location.protocol, e.data && !r ? e.data : null) : null
                },
                fromNetwork: function(e) {
                    var r = this,
                        t;

                    function n() {
                        e(!0)
                    }

                    function i(t) {
                        e(null, r.transform(t))
                    }
                    e && (t = this.prepare(this._settings()), this.transport(t).fail(n).done(i))
                },
                clear: function t() {
                    return this.storage.clear(), this
                }
            }), t
        }(),
        o = function() {
            "use strict";

            function t(t) {
                this.url = t.url, this.prepare = t.prepare, this.transform = t.transform, this.transport = new n({
                    cache: t.cache,
                    limiter: t.limiter,
                    transport: t.transport
                })
            }
            return f.mixin(t.prototype, {
                _settings: function t() {
                    return {
                        url: this.url,
                        type: "GET",
                        dataType: "json"
                    }
                },
                get: function t(e, r) {
                    var n = this,
                        i;
                    if (r) return e = e || "", i = this.prepare(e, this._settings()), this.transport.get(i, s);

                    function s(t, e) {
                        r(t ? [] : n.transform(e))
                    }
                },
                cancelLastRequest: function t() {
                    this.transport.cancel()
                }
            }), t
        }(),
        c = function() {
            "use strict";
            return function t(e) {
                var r, n;
                return r = {
                    initialize: !0,
                    identify: f.stringify,
                    datumTokenizer: null,
                    queryTokenizer: null,
                    sufficient: 5,
                    sorter: null,
                    local: [],
                    prefetch: null,
                    remote: null
                }, (e = f.mixin(r, e || {})).datumTokenizer || l.error("datumTokenizer is required"), e.queryTokenizer || l.error("queryTokenizer is required"), n = e.sorter, e.sorter = n ? function(t) {
                    return t.sort(n)
                } : f.identity, e.local = f.isFunction(e.local) ? e.local() : e.local, e.prefetch = i(e.prefetch), e.remote = s(e.remote), e
            };

            function i(t) {
                var e;
                return t ? (e = {
                    url: null,
                    ttl: 864e5,
                    cache: !0,
                    cacheKey: null,
                    thumbprint: "",
                    prepare: f.identity,
                    transform: f.identity,
                    transport: null
                }, t = f.isString(t) ? {
                    url: t
                } : t, (t = f.mixin(e, t)).url || l.error("prefetch requires url to be set"), t.transform = t.filter || t.transform, t.cacheKey = t.cacheKey || t.url, t.thumbprint = u + t.thumbprint, t.transport = t.transport ? o(t.transport) : l.ajax, t) : null
            }

            function s(t) {
                var e;
                if (t) return e = {
                    url: null,
                    cache: !0,
                    prepare: null,
                    replace: null,
                    wildcard: null,
                    limiter: null,
                    rateLimitBy: "debounce",
                    rateLimitWait: 300,
                    transform: f.identity,
                    transport: null
                }, t = f.isString(t) ? {
                    url: t
                } : t, (t = f.mixin(e, t)).url || l.error("remote requires url to be set"), t.transform = t.filter || t.transform, t.prepare = r(t), t.limiter = n(t), t.transport = t.transport ? o(t.transport) : l.ajax, delete t.replace, delete t.wildcard, delete t.rateLimitBy, delete t.rateLimitWait, t
            }

            function r(t) {
                var e, r, n;
                return e = t.prepare, r = t.replace, n = t.wildcard, e || (e = r ? i : t.wildcard ? s : o);

                function i(t, e) {
                    return e.url = r(e.url, t), e
                }

                function s(t, e) {
                    return e.url = e.url.replace(n, encodeURIComponent(t)), e
                }

                function o(t, e) {
                    return e
                }
            }

            function n(t) {
                var e, r, n;
                return e = t.limiter, r = t.rateLimitBy, n = t.rateLimitWait, e = e || (/^throttle$/i.test(r) ? s(n) : i(n));

                function i(r) {
                    return function t(e) {
                        return f.debounce(e, r)
                    }
                }

                function s(r) {
                    return function t(e) {
                        return f.throttle(e, r)
                    }
                }
            }

            function o(s) {
                return function t(e) {
                    var r = l.Deferred();
                    return s(e, n, i), r;

                    function n(t) {
                        f.defer(function() {
                            r.resolve(t)
                        })
                    }

                    function i(t) {
                        f.defer(function() {
                            r.reject(t)
                        })
                    }
                }
            }
        }(),
        a;
    return function() {
        "use strict";
        var e;

        function r(t) {
            t = c(t), this.sorter = t.sorter, this.identify = t.identify, this.sufficient = t.sufficient, this.local = t.local, this.remote = t.remote ? new o(t.remote) : null, this.prefetch = t.prefetch ? new s(t.prefetch) : null, this.index = new i({
                identify: this.identify,
                datumTokenizer: t.datumTokenizer,
                queryTokenizer: t.queryTokenizer
            }), !1 !== t.initialize && this.initialize()
        }
        return e = window && window.Bloodhound, r.noConflict = function t() {
            return window && (window.Bloodhound = e), r
        }, r.tokenizers = t, f.mixin(r.prototype, {
            __ttAdapter: function t() {
                var n = this;
                return this.remote ? e : r;

                function e(t, e, r) {
                    return n.search(t, e, r)
                }

                function r(t, e) {
                    return n.search(t, e)
                }
            },
            _loadPrefetch: function t() {
                var r = this,
                    n, e;
                return n = l.Deferred(), this.prefetch ? (e = this.prefetch.fromCache()) ? (this.index.bootstrap(e), n.resolve()) : this.prefetch.fromNetwork(i) : n.resolve(), n.promise();

                function i(t, e) {
                    if (t) return n.reject();
                    r.add(e), r.prefetch.store(r.index.serialize()), n.resolve()
                }
            },
            _initialize: function t() {
                var e = this,
                    r;
                return this.clear(), (this.initPromise = this._loadPrefetch()).done(n), this.initPromise;

                function n() {
                    e.add(e.local)
                }
            },
            initialize: function t(e) {
                return !this.initPromise || e ? this._initialize() : this.initPromise
            },
            add: function t(e) {
                return this.index.add(e), this
            },
            get: function t(e) {
                return e = f.isArray(e) ? e : [].slice.call(arguments), this.index.get(e)
            },
            search: function t(e, r, n) {
                var i = this,
                    s;
                return s = this.sorter(this.index.search(e)), r(this.remote ? s.slice() : s), this.remote && s.length < this.sufficient ? this.remote.get(e, o) : this.remote && this.remote.cancelLastRequest(), this;

                function o(t) {
                    var r = [];
                    f.each(t, function(e) {
                        f.some(s, function(t) {
                            return i.identify(e) === i.identify(t)
                        }) || r.push(e)
                    }), n && n(r)
                }
            },
            all: function t() {
                return this.index.all()
            },
            clear: function t() {
                return this.index.reset(), this
            },
            clearPrefetchCache: function t() {
                return this.prefetch && this.prefetch.clear(), this
            },
            clearRemoteCache: function t() {
                return n.resetCache(), this
            },
            ttAdapter: function t() {
                return this.__ttAdapter()
            }
        }), r
    }()
});
//# sourceMappingURL=sourcemaps/bloodhound.js.map