! function(h) {
    var c = {
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
            isArray: h.isArray,
            isFunction: h.isFunction,
            isObject: h.isPlainObject,
            isUndefined: function(t) {
                return void 0 === t
            },
            bind: h.proxy,
            each: function(t, n) {
                function e(t, e) {
                    return n(e, t)
                }
                h.each(t, e)
            },
            map: h.map,
            filter: h.grep,
            every: function(n, i) {
                var r = !0;
                return n ? (h.each(n, function(t, e) {
                    if (!(r = i.call(null, e, t, n))) return !1
                }), !!r) : r
            },
            some: function(n, i) {
                var r = !1;
                return n ? (h.each(n, function(t, e) {
                    if (r = i.call(null, e, t, n)) return !1
                }), !!r) : r
            },
            mixin: h.extend,
            getUniqueId: (t = 0, function() {
                return t++
            }),
            templatify: function t(e) {
                return h.isFunction(e) ? e : n;

                function n() {
                    return String(e)
                }
            },
            defer: function(t) {
                setTimeout(function() {
                    t()
                }, 0)
            },
            debounce: function(r, s, o) {
                var u, a;
                return function() {
                    var t = this,
                        e = arguments,
                        n, i;
                    return n = function() {
                        u = null, o || (a = r.apply(t, e))
                    }, i = o && !u, clearTimeout(u), u = setTimeout(function() {
                        n()
                    }, s), i && (a = r.apply(t, e)), a
                }
            },
            throttle: function(n, i) {
                var r, s, o, u, a, h;
                return a = 0, h = function() {
                        a = new Date, o = null, u = n.apply(r, s)
                    },
                    function() {
                        var t = new Date,
                            e = i - (t - a);
                        return r = this, s = arguments, e <= 0 ? (clearTimeout(o), o = null, a = t, u = n.apply(r, s)) : o = o || setTimeout(function() {
                            h()
                        }, e), u
                    }
            },
            noop: function() {}
        },
        t, i = "0.10.1",
        e = (n = this, c.mixin(s.prototype, {
            set: function t(e, n) {
                var i = this.list.tail,
                    r;
                this.size >= this.maxSize && (this.list.remove(i), delete this.hash[i.key]), (r = this.hash[e]) ? (r.val = n, this.list.moveToFront(r)) : (r = new u(e, n), this.list.add(r), this.hash[e] = r, this.size++)
            },
            get: function t(e) {
                var n = this.hash[e];
                if (n) return this.list.moveToFront(n), n.val
            }
        }), c.mixin(o.prototype, {
            add: function t(e) {
                this.head && (e.next = this.head, this.head.prev = e), this.head = e, this.tail = this.tail || e
            },
            remove: function t(e) {
                e.prev ? e.prev.next = e.next : this.head = e.next, e.next ? e.next.prev = e.prev : this.tail = e.prev
            },
            moveToFront: function(t) {
                this.remove(t), this.add(t)
            }
        }), s),
        n, r;

    function s(t) {
        this.maxSize = t || 100, this.size = 0, this.hash = {}, this.list = new o
    }

    function o() {
        this.head = this.tail = null
    }

    function u(t, e) {
        this.key = t, this.val = e, this.prev = this.next = null
    }
    var a = function() {
            var r, t;
            try {
                (r = window.localStorage).setItem("~~~", "!"), r.removeItem("~~~")
            } catch (t) {
                r = null
            }

            function e(t) {
                this.prefix = ["__", t, "__"].join(""), this.ttlKey = "__ttl__", this.keyMatcher = new RegExp("^" + this.prefix)
            }
            return t = r && window.JSON ? {
                _prefix: function(t) {
                    return this.prefix + t
                },
                _ttlKey: function(t) {
                    return this._prefix(t) + this.ttlKey
                },
                get: function(t) {
                    return this.isExpired(t) && this.remove(t), n(r.getItem(this._prefix(t)))
                },
                set: function(t, e, n) {
                    return c.isNumber(n) ? r.setItem(this._ttlKey(t), s(i() + n)) : r.removeItem(this._ttlKey(t)), r.setItem(this._prefix(t), s(e))
                },
                remove: function(t) {
                    return r.removeItem(this._ttlKey(t)), r.removeItem(this._prefix(t)), this
                },
                clear: function() {
                    var t, e, n = [],
                        i = r.length;
                    for (t = 0; t < i; t++)(e = r.key(t)).match(this.keyMatcher) && n.push(e.replace(this.keyMatcher, ""));
                    for (t = n.length; t--;) this.remove(n[t]);
                    return this
                },
                isExpired: function(t) {
                    var e = n(r.getItem(this._ttlKey(t)));
                    return !!(c.isNumber(e) && i() > e)
                }
            } : {
                get: c.noop,
                set: c.noop,
                remove: c.noop,
                clear: c.noop,
                isExpired: c.noop
            }, c.mixin(e.prototype, t), e;

            function i() {
                return (new Date).getTime()
            }

            function s(t) {
                return JSON.stringify(c.isUndefined(t) ? null : t)
            }

            function n(t) {
                return JSON.parse(t)
            }
        }(),
        l = (d = 0, p = {}, f = 6, g = new e(10), m.setMaxPendingRequests = function t(e) {
            f = e
        }, m.resetCache = function t() {
            g = new e(10)
        }, c.mixin(m.prototype, {
            _get: function(e, t, n) {
                var i = this,
                    r;

                function s(t) {
                    n && n(t), g.set(e, t)
                }

                function o() {
                    d--, delete p[e], i.onDeckRequestArgs && (i._get.apply(i, i.onDeckRequestArgs), i.onDeckRequestArgs = null)
                }(r = p[e]) ? r.done(s): d < f ? (d++, p[e] = this._send(e, t).done(s).always(o)) : this.onDeckRequestArgs = [].slice.call(arguments, 0)
            },
            get: function(t, e, n) {
                var i = this,
                    r;
                return c.isFunction(e) && (n = e, e = {}), (r = g.get(t)) ? c.defer(function() {
                    n && n(r)
                }) : this._get(t, e, n), !!r
            }
        }), m),
        d, p, f, g;

    function m(t) {
        t = t || {}, this._send = t.transport ? y(t.transport) : h.ajax, this._get = t.rateLimiter ? t.rateLimiter(this._get) : this._get
    }

    function y(o) {
        return function t(e, n) {
            var i = h.Deferred();
            return o(e, n, r, s), i;

            function r(t) {
                c.defer(function() {
                    i.resolve(t)
                })
            }

            function s(t) {
                c.defer(function() {
                    i.reject(t)
                })
            }
        }
    }
    var v = (c.mixin(_.prototype, {
        bootstrap: function t(e) {
            this.datums = e.datums, this.trie = e.trie
        },
        add: function(t) {
            var o = this;
            t = c.isArray(t) ? t : [t], c.each(t, function(t) {
                var s, e;
                s = o.datums.push(t) - 1, e = w(o.datumTokenizer(t)), c.each(e, function(t) {
                    var e, n, i, r;
                    for (e = o.trie, n = t.split(""); i = n.shift();)(e = e.children[i] || (e.children[i] = {
                        ids: [],
                        children: {}
                    })).ids.push(s)
                })
            })
        },
        get: function t(e) {
            var s = this,
                n, o;
            return n = w(this.queryTokenizer(e)), c.each(n, function(t) {
                var e, n, i, r;
                if (o && 0 === o.length) return !1;
                for (e = s.trie, n = t.split(""); e && (i = n.shift());) e = e.children[i];
                if (!e || 0 !== n.length) return !(o = []);
                r = e.ids.slice(0), o = o ? k(o, r) : r
            }), o ? c.map(x(o), function(t) {
                return s.datums[t]
            }) : []
        },
        serialize: function t() {
            return {
                datums: this.datums,
                trie: this.trie
            }
        }
    }), _);

    function _(t) {
        (t = t || {}).datumTokenizer && t.queryTokenizer || h.error("datumTokenizer and queryTokenizer are both required"), this.datumTokenizer = t.datumTokenizer, this.queryTokenizer = t.queryTokenizer, this.datums = [], this.trie = {
            ids: [],
            children: {}
        }
    }

    function w(t) {
        return t = c.filter(t, function(t) {
            return !!t
        }), t = c.map(t, function(t) {
            return t.toLowerCase()
        })
    }

    function b() {
        return {
            ids: [],
            children: {}
        }
    }

    function x(t) {
        for (var e = {}, n = [], i = 0; i < t.length; i++) e[t[i]] || (e[t[i]] = !0, n.push(t[i]));
        return n
    }

    function k(t, e) {
        var n = 0,
            i = 0,
            r = [];
        for (t = t.sort(s), e = e.sort(s); n < t.length && i < e.length;) t[n] < e[i] ? n++ : (t[n] > e[i] || (r.push(t[n]), n++), i++);
        return r;

        function s(t, e) {
            return t - e
        }
    }
    var S = {
        local: C,
        prefetch: $,
        remote: D
    };

    function C(t) {
        var e = t.local || null;
        return c.isFunction(e) && (e = e.call(null)), e
    }

    function $(t) {
        var e, n;
        return n = {
            url: null,
            thumbprint: "",
            ttl: 864e5,
            filter: null,
            ajax: {}
        }, (e = t.prefetch || null) && (e = c.isString(e) ? {
            url: e
        } : e, (e = c.mixin(n, e)).thumbprint = i + e.thumbprint, e.ajax.type = e.ajax.type || "GET", e.ajax.dataType = e.ajax.dataType || "json", e.url || h.error("prefetch requires url to be set")), e
    }

    function D(t) {
        var e, n;
        return n = {
            url: null,
            wildcard: "%QUERY",
            replace: null,
            rateLimitBy: "debounce",
            rateLimitWait: 300,
            send: null,
            filter: null,
            ajax: {}
        }, (e = t.remote || null) && (e = c.isString(e) ? {
            url: e
        } : e, (e = c.mixin(n, e)).rateLimiter = /^throttle$/i.test(e.rateLimitBy) ? r(e.rateLimitWait) : i(e.rateLimitWait), e.ajax.type = e.ajax.type || "GET", e.ajax.dataType = e.ajax.dataType || "json", delete e.rateLimitBy, delete e.rateLimitWait, e.url || h.error("remote requires url to be set")), e;

        function i(e) {
            return function(t) {
                return c.debounce(t, e)
            }
        }

        function r(e) {
            return function(t) {
                return c.throttle(t, e)
            }
        }
    }
    var A = window.Bloodhound = (T = {
            data: "data",
            protocol: "protocol",
            thumbprint: "thumbprint"
        }, I.tokenizers = {
            whitespace: function t(e) {
                return e.split(/\s+/)
            },
            nonword: function t(e) {
                return e.split(/\W+/)
            }
        }, c.mixin(I.prototype, {
            _loadPrefetch: function t(n) {
                var i = this,
                    e, r;
                return r = (e = this._readFromStorage(n.thumbprint)) ? (this.index.bootstrap(e), h.Deferred().resolve()) : h.ajax(n.url, n.ajax).done(s);

                function s(t) {
                    var e;
                    e = n.filter ? n.filter(t) : t, i.add(e), i._saveToStorage(i.index.serialize(), n.thumbprint, n.ttl)
                }
            },
            _getFromRemote: function t(e, n) {
                var i = this,
                    r, s;
                return e = e || "", s = encodeURIComponent(e), r = this.remote.replace ? this.remote.replace(this.remote.url, e) : this.remote.url.replace(this.remote.wildcard, s), "function" == typeof shouldSearchGroups && shouldSearchGroups() && (r += "&grp=1"), "function" == typeof shouldSearchNoFriends && shouldSearchNoFriends() && (r += "&nofriends=1"), this.transport.get(r, this.remote.ajax, o);

                function o(t) {
                    var e = i.remote.filter ? i.remote.filter(t) : t;
                    n(e)
                }
            },
            _saveToStorage: function t(e, n, i) {
                this.storage && (this.storage.set(T.data, e, i), this.storage.set(T.protocol, location.protocol, i), this.storage.set(T.thumbprint, n, i))
            },
            _readFromStorage: function t(e) {
                var n = {},
                    i;
                return this.storage && (n.data = this.storage.get(T.data), n.protocol = this.storage.get(T.protocol), n.thumbprint = this.storage.get(T.thumbprint)), i = n.thumbprint !== e || n.protocol !== location.protocol, n.data && !i ? n.data : null
            },
            initialize: function t() {
                var e = this,
                    n;
                return n = this.prefetch ? this._loadPrefetch(this.prefetch) : h.Deferred().resolve(), this.local && n.done(i), this.transport = this.remote ? new l(this.remote) : null, this.initialize = function t() {
                    return n.promise()
                }, n.promise();

                function i() {
                    e.add(e.local)
                }
            },
            add: function t(e) {
                this.index.add(e)
            },
            get: function t(e, i) {
                var r = this,
                    s, n = !1;

                function o(t) {
                    var n = s.slice(0);
                    c.each(t, function(e) {
                        var t;
                        return (t = c.some(n, function(t) {
                            return r.dupDetector(e, t)
                        })) || n.push(e), n.length < r.limit
                    }), i && i(r.sorter(n))
                }
                s = this.index.get(e), (s = this.sorter(s).slice(0, this.limit)).length < this.limit && this.transport && (n = this._getFromRemote(e, o)), !n && i && i(s)
            },
            ttAdapter: function t() {
                return c.bind(this.get, this)
            }
        }), I),
        T;

    function I(t) {
        t && (t.local || t.prefetch || t.remote) || h.error("one of local, prefetch, or remote is required"), this.limit = t.limit || 5, this.sorter = K(t.sorter), this.dupDetector = t.dupDetector || q, this.local = S.local(t), this.prefetch = S.prefetch(t), this.remote = S.remote(t), this.cacheKey = this.prefetch ? this.prefetch.cacheKey || this.prefetch.url : null, this.index = new v({
            datumTokenizer: t.datumTokenizer,
            queryTokenizer: t.queryTokenizer
        }), this.storage = this.cacheKey ? new a(this.cacheKey) : null
    }

    function K(e) {
        return c.isFunction(e) ? t : n;

        function t(t) {
            return t.sort(e)
        }

        function n(t) {
            return t
        }
    }

    function q() {
        return !1
    }
    var z = {
            wrapper: '<span class="twitter-typeahead" style="width:100%"></span>',
            dropdown: '<span class="tt-dropdown-menu"></span>',
            dataset: '<div class="tt-dataset-%CLASS%"></div>',
            suggestions: '<span class="tt-suggestions"></span>',
            suggestion: '<div class="tt-suggestion">%BODY%</div>'
        },
        E = {
            wrapper: {
                position: "relative",
                display: "inline-block"
            },
            hint: {
                position: "absolute",
                top: "0",
                left: "0",
                borderColor: "transparent",
                boxShadow: "none"
            },
            input: {
                position: "relative",
                verticalAlign: "top",
                backgroundColor: "transparent"
            },
            inputWithNoHint: {
                position: "relative",
                verticalAlign: "top"
            },
            dropdown: {
                position: "absolute",
                top: "100%",
                left: "0",
                zIndex: "100",
                display: "none"
            },
            suggestions: {
                display: "block"
            },
            suggestion: {
                whiteSpace: "nowrap",
                cursor: "pointer"
            },
            suggestionChild: {
                whiteSpace: "normal"
            },
            ltr: {
                left: "0",
                right: "auto"
            },
            rtl: {
                left: "auto",
                right: " 0"
            }
        };
    c.isMsie() && c.mixin(E.input, {
        backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
    }), c.isMsie() && c.isMsie() <= 7 && c.mixin(E.input, {
        marginTop: "-1px"
    });
    var F = (R = "typeahead:", c.mixin(L.prototype, {
            trigger: function(t) {
                var e = [].slice.call(arguments, 1);
                this.$el.trigger(R + t, e)
            }
        }), L),
        R;

    function L(t) {
        t && t.el || h.error("EventBus initialized without el"), this.$el = h(t.el)
    }
    var V = (N = /\s+/, H = W(), {
            onSync: j,
            onAsync: B,
            off: Q,
            trigger: M
        }),
        N, H;

    function O(t, e, n, i) {
        var r;
        if (!n) return this;
        for (e = e.split(N), n = i ? P(n, i) : n, this._callbacks = this._callbacks || {}; r = e.shift();) this._callbacks[r] = this._callbacks[r] || {
            sync: [],
            async: []
        }, this._callbacks[r][t].push(n);
        return this
    }

    function B(t, e, n) {
        return O.call(this, "async", t, e, n)
    }

    function j(t, e, n) {
        return O.call(this, "sync", t, e, n)
    }

    function Q(t) {
        var e;
        if (!this._callbacks) return this;
        for (t = t.split(N); e = t.shift();) delete this._callbacks[e];
        return this
    }

    function M(t) {
        var e = this,
            n, i, r, s, o;
        if (!this._callbacks) return this;
        for (t = t.split(N), r = [].slice.call(arguments, 1);
            (n = t.shift()) && (i = this._callbacks[n]);) s = U(i.sync, this, [n].concat(r)), o = U(i.async, this, [n].concat(r)), s() && H(o);
        return this
    }

    function U(n, i, r) {
        return t;

        function t() {
            for (var t, e = 0; !t && e < n.length; e += 1) t = !1 === n[e].apply(i, r);
            return !t
        }
    }

    function W() {
        var t, e;
        return t = window.setImmediate ? function t(e) {
            setImmediate(function() {
                e()
            })
        } : function t(e) {
            setTimeout(function() {
                e()
            }, 0)
        }
    }

    function P(t, e) {
        return t.bind ? t.bind(e) : function() {
            t.apply(e, [].slice.call(arguments, 0))
        }
    }
    var G = (J = window.document, Y = {
            node: null,
            pattern: null,
            tagName: "strong",
            className: null,
            wordsOnly: !1,
            caseSensitive: !1
        }, function t(i) {
            var r;

            function e(t) {
                var e, n;
                return (e = r.exec(t.data)) && (wrapperNode = J.createElement(i.tagName), i.className && (wrapperNode.className = i.className), (n = t.splitText(e.index)).splitText(e[0].length), wrapperNode.appendChild(n.cloneNode(!0)), t.parentNode.replaceChild(wrapperNode, n)), !!e
            }

            function s(t, e) {
                for (var n, i = 3, r = 0; r < t.childNodes.length; r++) {
                    if (3 === (n = t.childNodes[r]).nodeType) {
                        e(n);
                        break
                    }
                    s(n, e)
                }
            }(i = c.mixin({}, Y, i)).node && i.pattern && (i.pattern = c.isArray(i.pattern) ? i.pattern : [i.pattern], r = Z(i.pattern, i.caseSensitive, i.wordsOnly), s(i.node, e))
        }),
        J, Y;

    function Z(t, e, n) {
        for (var i = [], r, s = 0; s < t.length; s++) i.push(c.escapeRegExChars(t[s]));
        return r = n ? "\\b(" + i.join("|") + ")\\b" : "(" + i.join("|") + ")", e ? new RegExp(r) : new RegExp(r, "i")
    }
    var X = (tt = {
            9: "tab",
            27: "esc",
            37: "left",
            39: "right",
            13: "enter",
            38: "up",
            40: "down"
        }, et.normalizeQuery = function(t) {
            return (t || "").replace(/^\s*/g, "").replace(/\s{2,}/g, " ")
        }, c.mixin(et.prototype, V, {
            _onBlur: function t(e) {
                this.resetInputValue(), this.trigger("blurred")
            },
            _onFocus: function t(e) {
                this.trigger("focused")
            },
            _onKeydown: function t(e) {
                var n = tt[e.which || e.keyCode];
                this._managePreventDefault(n, e), n && this._shouldTrigger(n, e) && this.trigger(n + "Keyed", e)
            },
            _onInput: function t(e) {
                this._checkInputValue()
            },
            _managePreventDefault: function t(e, n) {
                var i, r, s;
                switch (e) {
                    case "tab":
                        r = this.getHintValue(), s = this.getInputValue(), i = r && r !== s && !rt(n);
                        break;
                    case "up":
                    case "down":
                        i = !rt(n);
                        break;
                    default:
                        i = !1
                }
                i && n.preventDefault()
            },
            _shouldTrigger: function t(e, n) {
                var i;
                switch (e) {
                    case "tab":
                        i = !rt(n);
                        break;
                    default:
                        i = !0
                }
                return i
            },
            _checkInputValue: function t() {
                var e, n, i;
                i = !!(n = it(e = this.getInputValue(), this.query)) && this.query.length !== e.length, n ? i && this.trigger("whitespaceChanged", this.query) : this.trigger("queryChanged", this.query = e)
            },
            focus: function t() {
                this.$input.focus()
            },
            blur: function t() {
                this.$input.blur()
            },
            getQuery: function t() {
                return this.query
            },
            setQuery: function t(e) {
                this.query = e
            },
            getInputValue: function t() {
                return this.$input.val()
            },
            setInputValue: function t(e, n) {
                this.$input.val(e), n || this._checkInputValue()
            },
            getHintValue: function t() {
                return this.$hint.val()
            },
            setHintValue: function t(e) {
                this.$hint.val(e)
            },
            resetInputValue: function t() {
                this.$input.val(this.query)
            },
            clearHint: function t() {
                this.$hint.val("")
            },
            getLanguageDirection: function t() {
                return (this.$input.css("direction") || "ltr").toLowerCase()
            },
            hasOverflow: function t() {
                var e = this.$input.width() - 2;
                return this.$overflowHelper.text(this.getInputValue()), this.$overflowHelper.width() >= e
            },
            isCursorAtEnd: function() {
                var t, e, n;
                return t = this.$input.val().length, e = this.$input[0].selectionStart, c.isNumber(e) ? e === t : !document.selection || ((n = document.selection.createRange()).moveStart("character", -t), t === n.text.length)
            },
            destroy: function t() {
                this.$hint.off(".tt"), this.$input.off(".tt"), this.$hint = this.$input = this.$overflowHelper = null
            }
        }), et),
        tt;

    function et(t) {
        var e = this,
            n, i, r, s;
        (t = t || {}).input || h.error("input is missing"), n = c.bind(this._onBlur, this), i = c.bind(this._onFocus, this), r = c.bind(this._onKeydown, this), s = c.bind(this._onInput, this), this.$hint = h(t.hint), this.$input = h(t.input).on("blur.tt", n).on("focus.tt", i).on("keydown.tt", r), 0 === this.$hint.length && (this.setHintValue = this.getHintValue = this.clearHint = c.noop), c.isMsie() ? this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function(t) {
            tt[t.which || t.keyCode] || c.defer(c.bind(e._onInput, e, t))
        }) : this.$input.on("input.tt", s), this.query = this.$input.val(), this.$overflowHelper = nt(this.$input)
    }

    function nt(t) {
        return h('<pre aria-hidden="true"></pre>').css({
            position: "absolute",
            visibility: "hidden",
            whiteSpace: "nowrap",
            fontFamily: t.css("font-family"),
            fontSize: t.css("font-size"),
            fontStyle: t.css("font-style"),
            fontVariant: t.css("font-variant"),
            fontWeight: t.css("font-weight"),
            wordSpacing: t.css("word-spacing"),
            letterSpacing: t.css("letter-spacing"),
            textIndent: t.css("text-indent"),
            textRendering: t.css("text-rendering"),
            textTransform: t.css("text-transform")
        }).insertAfter(t)
    }

    function it(t, e) {
        return et.normalizeQuery(t) === et.normalizeQuery(e)
    }

    function rt(t) {
        return t.altKey || t.ctrlKey || t.metaKey || t.shiftKey
    }
    var st = (ot = "ttDataset", ut = "ttValue", at = "ttDatum", ht.extractDatasetName = function t(e) {
            return h(e).data(ot)
        }, ht.extractValue = function t(e) {
            return h(e).data(ut)
        }, ht.extractDatum = function t(e) {
            return h(e).data(at)
        }, c.mixin(ht.prototype, V, {
            _render: function t(i, r) {
                if (this.$el) {
                    var s = this,
                        e;
                    this.$el.empty(), !(e = r && r.length) && this.templates.empty ? this.$el.html(n()).prepend(s.templates.header ? u() : null).append(s.templates.footer ? a() : null) : e && this.$el.html(o()).prepend(s.templates.header ? u() : null).append(s.templates.footer ? a() : null), this.trigger("rendered")
                }

                function n() {
                    return s.templates.empty({
                        query: i,
                        isEmpty: !0
                    })
                }

                function o() {
                    var t, e;
                    return t = h(z.suggestions).css(E.suggestions), e = c.map(r, n), t.append.apply(t, e), s.highlight && G({
                        node: t[0],
                        pattern: i
                    }), t;

                    function n(t) {
                        var e, n, i;
                        return n = s.templates.suggestion(t), i = z.suggestion.replace("%BODY%", n), (e = h(i).data(ot, s.name).data(ut, s.displayFn(t)).data(at, t)).children().each(function() {
                            h(this).css(E.suggestionChild)
                        }), e
                    }
                }

                function u() {
                    return s.templates.header({
                        query: i,
                        isEmpty: !e
                    })
                }

                function a() {
                    return s.templates.footer({
                        query: i,
                        isEmpty: !e
                    })
                }
            },
            getRoot: function t() {
                return this.$el
            },
            update: function t(e) {
                var n = this;

                function i(t) {
                    e === n.query && n._render(e, t)
                }
                this.query = e, this.source(e, i)
            },
            clear: function t() {
                this._render(this.query || "")
            },
            isEmpty: function t() {
                return this.$el.is(":empty")
            },
            destroy: function t() {
                this.$el = null
            }
        }), ht),
        ot, ut, at;

    function ht(t) {
        (t = t || {}).templates = t.templates || {}, t.source || h.error("missing source"), t.name && !dt(t.name) && h.error("invalid dataset name: " + t.name), this.query = null, this.highlight = !!t.highlight, this.name = t.name || c.getUniqueId(), this.source = t.source, this.displayFn = ct(t.display || t.displayKey), this.templates = lt(t.templates, this.displayFn), this.$el = h(z.dataset.replace("%CLASS%", this.name))
    }

    function ct(e) {
        return e = e || "value", c.isFunction(e) ? e : t;

        function t(t) {
            return t[e]
        }
    }

    function lt(t, e) {
        return {
            empty: t.empty && c.templatify(t.empty),
            header: t.header && c.templatify(t.header),
            footer: t.footer && c.templatify(t.footer),
            suggestion: t.suggestion || n
        };

        function n(t) {
            return "<p>" + e(t) + "</p>"
        }
    }

    function dt(t) {
        return /^[_a-zA-Z0-9-]+$/.test(t)
    }
    var pt = (c.mixin(ft.prototype, V, {
        _onSuggestionClick: function t(e) {
            this.trigger("suggestionClicked", h(e.currentTarget))
        },
        _onSuggestionMouseEnter: function t(e) {
            this._removeCursor(), this._setCursor(h(e.currentTarget), !0)
        },
        _onSuggestionMouseLeave: function t(e) {
            this._removeCursor()
        },
        _onRendered: function t() {
            function e(t) {
                return t.isEmpty()
            }
            this.isEmpty = c.every(this.datasets, e), this.isEmpty ? this._hide() : this.isOpen && this._show(), this.trigger("datasetRendered")
        },
        _hide: function() {
            this.$menu.hide()
        },
        _show: function() {
            this.$menu.css("display", "block")
        },
        _getSuggestions: function t() {
            return this.$menu.find(".tt-suggestion")
        },
        _getCursor: function t() {
            return this.$menu.find(".tt-cursor").first()
        },
        _setCursor: function t(e, n) {
            e.first().addClass("tt-cursor"), n || this.trigger("cursorMoved")
        },
        _removeCursor: function t() {
            this._getCursor().removeClass("tt-cursor")
        },
        _moveCursor: function t(e) {
            var n, i, r, s;
            this.isOpen && (i = this._getCursor(), n = this._getSuggestions(), this._removeCursor(), -1 != (r = ((r = n.index(i) + e) + 1) % (n.length + 1) - 1) ? (r < -1 && (r = n.length - 1), this._setCursor(s = n.eq(r)), this._ensureVisible(s)) : this.trigger("cursorRemoved"))
        },
        _ensureVisible: function t(e) {
            var n, i, r, s;
            i = (n = e.position().top) + e.outerHeight(!0), r = this.$menu.scrollTop(), s = this.$menu.height() + parseInt(this.$menu.css("paddingTop"), 10) + parseInt(this.$menu.css("paddingBottom"), 10), n < 0 ? this.$menu.scrollTop(r + n) : s < i && this.$menu.scrollTop(r + (i - s))
        },
        close: function t() {
            this.isOpen && (this.isOpen = !1, this._removeCursor(), this._hide(), this.trigger("closed"))
        },
        open: function t() {
            this.isOpen || (this.isOpen = !0, this.isEmpty || this._show(), this.trigger("opened"))
        },
        setLanguageDirection: function t(e) {
            this.$menu.css("ltr" === e ? E.ltr : E.rtl)
        },
        moveCursorUp: function t() {
            this._moveCursor(-1)
        },
        moveCursorDown: function t() {
            this._moveCursor(1)
        },
        getDatumForSuggestion: function t(e) {
            var n = null;
            return e.length && (n = {
                raw: st.extractDatum(e),
                value: st.extractValue(e),
                datasetName: st.extractDatasetName(e)
            }), n
        },
        getDatumForCursor: function t() {
            return this.getDatumForSuggestion(this._getCursor().first())
        },
        getDatumForTopSuggestion: function t() {
            return this.getDatumForSuggestion(this._getSuggestions().first())
        },
        update: function t(e) {
            function n(t) {
                t.update(e)
            }
            c.each(this.datasets, n)
        },
        empty: function t() {
            function e(t) {
                t.clear()
            }
            c.each(this.datasets, e), this.isEmpty = !0
        },
        isVisible: function t() {
            return this.isOpen && !this.isEmpty
        },
        destroy: function t() {
            function e(t) {
                t.destroy()
            }
            this.$menu.off(".tt"), this.$menu = null, c.each(this.datasets, e)
        }
    }), ft);

    function ft(t) {
        var e = this,
            n, i, r;
        (t = t || {}).menu || h.error("menu is required"), this.isOpen = !1, this.isEmpty = !0, this.datasets = c.map(t.datasets, gt), n = c.bind(this._onSuggestionClick, this), i = c.bind(this._onSuggestionMouseEnter, this), r = c.bind(this._onSuggestionMouseLeave, this), this.$menu = h(t.menu).on("click.tt", ".tt-suggestion", n).on("mouseenter.tt", ".tt-suggestion", i).on("mouseleave.tt", ".tt-suggestion", r), c.each(this.datasets, function(t) {
            e.$menu.append(t.getRoot()), t.onSync("rendered", e._onRendered, e)
        })
    }

    function gt(t) {
        return new st(t)
    }
    var mt = (yt = "ttAttrs", c.mixin(bt.prototype, {
            _onSuggestionClicked: function t(e, n) {
                var i;
                (i = this.dropdown.getDatumForSuggestion(n)) && this._select(i)
            },
            _onCursorMoved: function t() {
                var e = this.dropdown.getDatumForCursor();
                this.input.clearHint(), this.input.setInputValue(e.value, !0), this.eventBus.trigger("cursorchanged", e.raw, e.datasetName)
            },
            _onCursorRemoved: function t() {
                this.input.resetInputValue(), this._updateHint()
            },
            _onDatasetRendered: function t() {
                this._updateHint()
            },
            _onOpened: function t() {
                this._updateHint(), this.eventBus.trigger("opened")
            },
            _onClosed: function t() {
                this.input.clearHint(), this.eventBus.trigger("closed")
            },
            _onFocused: function t() {
                this.dropdown.empty(), this.dropdown.isOpen || 0 != this.minLength || this.dropdown.update(""), this.dropdown.open()
            },
            _onBlurred: function t() {
                this.dropdown.close()
            },
            _onEnterKeyed: function t(e, n) {
                var i, r;
                i = this.dropdown.getDatumForCursor(), r = this.dropdown.getDatumForTopSuggestion(), i ? (this._select(i), n.preventDefault()) : this.autoselect && r && (this._select(r), n.preventDefault())
            },
            _onTabKeyed: function t(e, n) {
                var i;
                (i = this.dropdown.getDatumForCursor()) ? (this._select(i), n.preventDefault()) : this._autocomplete()
            },
            _onEscKeyed: function t() {
                this.dropdown.close(), this.input.resetInputValue()
            },
            _onUpKeyed: function t() {
                var e = this.input.getQuery();
                !this.dropdown.isOpen && e.length >= this.minLength && this.dropdown.update(e), this.dropdown.open(), this.dropdown.moveCursorUp()
            },
            _onDownKeyed: function t() {
                var e = this.input.getQuery();
                !this.dropdown.isOpen && e.length >= this.minLength && this.dropdown.update(e), this.dropdown.open(), this.dropdown.moveCursorDown()
            },
            _onLeftKeyed: function t() {
                "rtl" === this.dir && this._autocomplete()
            },
            _onRightKeyed: function t() {
                "ltr" === this.dir && this._autocomplete()
            },
            _onQueryChanged: function t(e, n) {
                this.input.clearHint(), this.dropdown.empty(), n.length >= this.minLength && this.dropdown.update(n), this.dropdown.open(), this._setLanguageDirection()
            },
            _onWhitespaceChanged: function t() {
                this._updateHint(), this.dropdown.open()
            },
            _setLanguageDirection: function t() {
                var e;
                this.dir !== (e = this.input.getLanguageDirection()) && (this.dir = e, this.$node.css("direction", e), this.dropdown.setLanguageDirection(e))
            },
            _updateHint: function t() {
                var e, n, i, r, s, o;
                if ((e = this.dropdown.getDatumForTopSuggestion()) && this.dropdown.isVisible() && !this.input.hasOverflow()) {
                    n = this.input.getInputValue(), i = X.normalizeQuery(n), r = c.escapeRegExChars(i);
                    var u = e.value,
                        a;
                    new RegExp("/^http[s]?:/").exec(r) || (u = "" !== e.raw.a ? e.raw.a : e.raw.domain), o = (s = new RegExp("^(?:" + r + ")(.*$)", "i")).exec(u), this.input.setHintValue(n + (o ? o[1] : ""))
                }
            },
            _autocomplete: function t() {
                var e, n, i;
                e = this.input.getHintValue(), n = this.input.getQuery(), e && n !== e && this.input.isCursorAtEnd() && ((i = this.dropdown.getDatumForTopSuggestion()) && this.input.setInputValue(i.value), this.eventBus.trigger("autocompleted", i.raw, i.datasetName))
            },
            _select: function t(e) {
                this.input.clearHint(), this.input.setQuery(e.value), this.input.setInputValue(e.value, !0), this._setLanguageDirection(), this.eventBus.trigger("selected", e.raw, e.datasetName), this.dropdown.close(), c.defer(c.bind(this.dropdown.empty, this.dropdown))
            },
            open: function t() {
                this.dropdown.open()
            },
            close: function t() {
                this.dropdown.close()
            },
            getQuery: function t() {
                return this.input.getQuery()
            },
            setQuery: function t(e) {
                this.input.setInputValue(e)
            },
            destroy: function t() {
                this.input.destroy(), this.dropdown.destroy(), St(this.$node), this.$node = null
            }
        }), bt),
        yt, vt, _t, wt;

    function bt(t) {
        var e, n, i, r;
        (t = t || {}).input || h.error("missing input"), this.autoselect = !!t.autoselect, this.minLength = c.isNumber(t.minLength) ? t.minLength : 1, this.$node = xt(t.input, t.withHint), e = this.$node.find(".tt-dropdown-menu"), n = this.$node.find(".tt-input"), i = this.$node.find(".tt-hint"), this.eventBus = t.eventBus || new F({
            el: n
        }), this.dropdown = new pt({
            menu: e,
            datasets: t.datasets
        }).onSync("suggestionClicked", this._onSuggestionClicked, this).onSync("cursorMoved", this._onCursorMoved, this).onSync("cursorRemoved", this._onCursorRemoved, this).onSync("opened", this._onOpened, this).onSync("closed", this._onClosed, this).onAsync("datasetRendered", this._onDatasetRendered, this), this.input = new X({
            input: n,
            hint: i
        }).onSync("focused", this._onFocused, this).onSync("blurred", this._onBlurred, this).onSync("enterKeyed", this._onEnterKeyed, this).onSync("tabKeyed", this._onTabKeyed, this).onSync("escKeyed", this._onEscKeyed, this).onSync("upKeyed", this._onUpKeyed, this).onSync("downKeyed", this._onDownKeyed, this).onSync("leftKeyed", this._onLeftKeyed, this).onSync("rightKeyed", this._onRightKeyed, this).onSync("queryChanged", this._onQueryChanged, this).onSync("whitespaceChanged", this._onWhitespaceChanged, this), e.on("mousedown.tt", function(t) {
            c.isMsie() && c.isMsie() < 9 && (n[0].onbeforedeactivate = function() {
                window.event.returnValue = !1, n[0].onbeforedeactivate = null
            }), t.preventDefault()
        })
    }

    function xt(t, e) {
        var n, i, r, s;
        n = h(t), i = h(z.wrapper).css(E.wrapper), r = h(z.dropdown).css(E.dropdown), (s = n.clone().css(E.hint).css(kt(n))).val("").removeData().addClass("tt-hint").removeAttr("id name placeholder").prop("disabled", !0).attr({
            autocomplete: "off",
            spellcheck: "false"
        }), n.data(yt, {
            dir: n.attr("dir"),
            autocomplete: n.attr("autocomplete"),
            spellcheck: n.attr("spellcheck"),
            style: n.attr("style")
        }), n.addClass("tt-input").attr({
            autocomplete: "off",
            spellcheck: !1
        }).css(e ? E.input : E.inputWithNoHint);
        try {
            n.attr("dir") || n.attr("dir", "auto")
        } catch (t) {}
        return n.wrap(i).parent().prepend(e ? s : null).append(r)
    }

    function kt(t) {
        return {
            backgroundAttachment: t.css("background-attachment"),
            backgroundClip: t.css("background-clip"),
            backgroundColor: t.css("background-color"),
            backgroundImage: t.css("background-image"),
            backgroundOrigin: t.css("background-origin"),
            backgroundPosition: t.css("background-position"),
            backgroundRepeat: t.css("background-repeat"),
            backgroundSize: t.css("background-size")
        }
    }

    function St(t) {
        var n = t.find(".tt-input");
        c.each(n.data(yt), function(t, e) {
            c.isUndefined(t) ? n.removeAttr(e) : n.attr(e, t)
        }), n.detach().removeData(yt).removeClass("tt-input").insertAfter(t), t.remove()
    }
    vt = h.fn.typeahead, _t = "ttTypeahead", wt = {
        initialize: function t(i, r) {
            return r = c.isArray(r) ? r : [].slice.call(arguments, 1), i = i || {}, this.each(e);

            function e() {
                var t = h(this),
                    e, n;
                c.each(r, function(t) {
                    t.highlight = !!i.highlight
                }), n = new mt({
                    input: t,
                    eventBus: e = new F({
                        el: t
                    }),
                    withHint: !!c.isUndefined(i.hint) || !!i.hint,
                    minLength: i.minLength,
                    autoselect: i.autoselect,
                    datasets: r
                }), t.data(_t, n)
            }
        },
        open: function t() {
            return this.each(e);

            function e() {
                var t, e;
                (e = h(this).data(_t)) && e.open()
            }
        },
        close: function t() {
            return this.each(e);

            function e() {
                var t, e;
                (e = h(this).data(_t)) && e.close()
            }
        },
        val: function t(n) {
            return arguments.length ? this.each(e) : i(this.first());

            function e() {
                var t, e;
                (e = h(this).data(_t)) && e.setQuery(n)
            }

            function i(t) {
                var e, n;
                return (e = t.data(_t)) && (n = e.getQuery()), n
            }
        },
        destroy: function t() {
            return this.each(e);

            function e() {
                var t = h(this),
                    e;
                (e = t.data(_t)) && (e.destroy(), t.removeData(_t))
            }
        }
    }, h.fn.typeahead = function(t) {
        return wt[t] ? wt[t].apply(this, [].slice.call(arguments, 1)) : wt.initialize.apply(this, arguments)
    }, h.fn.typeahead.noConflict = function t() {
        return h.fn.typeahead = vt, this
    }
}(window.jQuery);
//# sourceMappingURL=sourcemaps/typeahead.js.map