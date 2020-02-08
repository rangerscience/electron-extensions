! function() {
    var e = "object" == typeof self && self.self === self && self || "object" == typeof global && global.global === global && global || this,
        t = e._,
        n = Array.prototype,
        r = Object.prototype,
        i = "undefined" != typeof Symbol ? Symbol.prototype : null,
        o = n.push,
        s = n.slice,
        a = r.toString,
        u = r.hasOwnProperty,
        c = Array.isArray,
        l = Object.keys,
        f = Object.create,
        h = function() {},
        p = function(e) {
            if (e instanceof p) return e;
            if (!(this instanceof p)) return new p(e);
            this._wrapped = e
        };
    if ("undefined" == typeof exports || exports.nodeType) e._ = p;
    else {
        "undefined" != typeof module && !module.nodeType && module.exports && (exports = module.exports = p);
        exports._ = p
    }
    p.VERSION = "1.8.3";
    var d = function(e, t, n) {
            if (void 0 === t) return e;
            switch (null == n ? 3 : n) {
                case 1:
                    return function(n) {
                        return e.call(t, n)
                    };
                case 3:
                    return function(n, r, i) {
                        return e.call(t, n, r, i)
                    };
                case 4:
                    return function(n, r, i, o) {
                        return e.call(t, n, r, i, o)
                    }
            }
            return function() {
                return e.apply(t, arguments)
            }
        },
        g = function(e, t, n) {
            return null == e ? p.identity : p.isFunction(e) ? d(e, t, n) : p.isObject(e) ? p.matcher(e) : p.property(e)
        };
    p.iteratee = function(e, t) {
        return g(e, t, 1 / 0)
    };
    var v = function(e, t) {
            t = null == t ? e.length - 1 : +t;
            return function() {
                for (var n = Math.max(arguments.length - t, 0), r = Array(n), i = 0; i < n; i++) r[i] = arguments[i + t];
                switch (t) {
                    case 0:
                        return e.call(this, r);
                    case 1:
                        return e.call(this, arguments[0], r);
                    case 2:
                        return e.call(this, arguments[0], arguments[1], r)
                }
                var o = Array(t + 1);
                for (i = 0; i < t; i++) o[i] = arguments[i];
                o[t] = r;
                return e.apply(this, o)
            }
        },
        y = function(e) {
            if (!p.isObject(e)) return {};
            if (f) return f(e);
            h.prototype = e;
            var t = new h;
            h.prototype = null;
            return t
        },
        m = function(e) {
            return function(t) {
                return null == t ? void 0 : t[e]
            }
        },
        _ = Math.pow(2, 53) - 1,
        b = m("length"),
        O = function(e) {
            var t = b(e);
            return "number" == typeof t && t >= 0 && t <= _
        };
    p.each = p.forEach = function(e, t, n) {
        t = d(t, n);
        var r, i;
        if (O(e))
            for (r = 0, i = e.length; r < i; r++) t(e[r], r, e);
        else {
            var o = p.keys(e);
            for (r = 0, i = o.length; r < i; r++) t(e[o[r]], o[r], e)
        }
        return e
    };
    p.map = p.collect = function(e, t, n) {
        t = g(t, n);
        for (var r = !O(e) && p.keys(e), i = (r || e).length, o = Array(i), s = 0; s < i; s++) {
            var a = r ? r[s] : s;
            o[s] = t(e[a], a, e)
        }
        return o
    };
    var w = function(e) {
        var t = function(t, n, r, i) {
            var o = !O(t) && p.keys(t),
                s = (o || t).length,
                a = e > 0 ? 0 : s - 1;
            if (!i) {
                r = t[o ? o[a] : a];
                a += e
            }
            for (; a >= 0 && a < s; a += e) {
                var u = o ? o[a] : a;
                r = n(r, t[u], u, t)
            }
            return r
        };
        return function(e, n, r, i) {
            var o = arguments.length >= 3;
            return t(e, d(n, i, 4), r, o)
        }
    };
    p.reduce = p.foldl = p.inject = w(1);
    p.reduceRight = p.foldr = w(-1);
    p.find = p.detect = function(e, t, n) {
        var r;
        if (void 0 !== (r = O(e) ? p.findIndex(e, t, n) : p.findKey(e, t, n)) && -1 !== r) return e[r]
    };
    p.filter = p.select = function(e, t, n) {
        var r = [];
        t = g(t, n);
        p.each(e, function(e, n, i) {
            t(e, n, i) && r.push(e)
        });
        return r
    };
    p.reject = function(e, t, n) {
        return p.filter(e, p.negate(g(t)), n)
    };
    p.every = p.all = function(e, t, n) {
        t = g(t, n);
        for (var r = !O(e) && p.keys(e), i = (r || e).length, o = 0; o < i; o++) {
            var s = r ? r[o] : o;
            if (!t(e[s], s, e)) return !1
        }
        return !0
    };
    p.some = p.any = function(e, t, n) {
        t = g(t, n);
        for (var r = !O(e) && p.keys(e), i = (r || e).length, o = 0; o < i; o++) {
            var s = r ? r[o] : o;
            if (t(e[s], s, e)) return !0
        }
        return !1
    };
    p.contains = p.includes = p.include = function(e, t, n, r) {
        O(e) || (e = p.values(e));
        ("number" != typeof n || r) && (n = 0);
        return p.indexOf(e, t, n) >= 0
    };
    p.invoke = v(function(e, t, n) {
        var r = p.isFunction(t);
        return p.map(e, function(e) {
            var i = r ? t : e[t];
            return null == i ? i : i.apply(e, n)
        })
    });
    p.pluck = function(e, t) {
        return p.map(e, p.property(t))
    };
    p.where = function(e, t) {
        return p.filter(e, p.matcher(t))
    };
    p.findWhere = function(e, t) {
        return p.find(e, p.matcher(t))
    };
    p.max = function(e, t, n) {
        var r, i, o = -1 / 0,
            s = -1 / 0;
        if (null == t || "number" == typeof t && "object" != typeof e[0] && null != e)
            for (var a = 0, u = (e = O(e) ? e : p.values(e)).length; a < u; a++) null != (r = e[a]) && r > o && (o = r);
        else {
            t = g(t, n);
            p.each(e, function(e, n, r) {
                if ((i = t(e, n, r)) > s || i === -1 / 0 && o === -1 / 0) {
                    o = e;
                    s = i
                }
            })
        }
        return o
    };
    p.min = function(e, t, n) {
        var r, i, o = 1 / 0,
            s = 1 / 0;
        if (null == t || "number" == typeof t && "object" != typeof e[0] && null != e)
            for (var a = 0, u = (e = O(e) ? e : p.values(e)).length; a < u; a++) null != (r = e[a]) && r < o && (o = r);
        else {
            t = g(t, n);
            p.each(e, function(e, n, r) {
                if ((i = t(e, n, r)) < s || i === 1 / 0 && o === 1 / 0) {
                    o = e;
                    s = i
                }
            })
        }
        return o
    };
    p.shuffle = function(e) {
        return p.sample(e, 1 / 0)
    };
    p.sample = function(e, t, n) {
        if (null == t || n) {
            O(e) || (e = p.values(e));
            return e[p.random(e.length - 1)]
        }
        var r = O(e) ? p.clone(e) : p.values(e),
            i = b(r);
        t = Math.max(Math.min(t, i), 0);
        for (var o = i - 1, s = 0; s < t; s++) {
            var a = p.random(s, o),
                u = r[s];
            r[s] = r[a];
            r[a] = u
        }
        return r.slice(0, t)
    };
    p.sortBy = function(e, t, n) {
        var r = 0;
        t = g(t, n);
        return p.pluck(p.map(e, function(e, n, i) {
            return {
                value: e,
                index: r++,
                criteria: t(e, n, i)
            }
        }).sort(function(e, t) {
            var n = e.criteria,
                r = t.criteria;
            if (n !== r) {
                if (n > r || void 0 === n) return 1;
                if (n < r || void 0 === r) return -1
            }
            return e.index - t.index
        }), "value")
    };
    var S = function(e, t) {
        return function(n, r, i) {
            var o = t ? [
                [],
                []
            ] : {};
            r = g(r, i);
            p.each(n, function(t, i) {
                var s = r(t, i, n);
                e(o, t, s)
            });
            return o
        }
    };
    p.groupBy = S(function(e, t, n) {
        p.has(e, n) ? e[n].push(t) : e[n] = [t]
    });
    p.indexBy = S(function(e, t, n) {
        e[n] = t
    });
    p.countBy = S(function(e, t, n) {
        p.has(e, n) ? e[n]++ : e[n] = 1
    });
    var I = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
    p.toArray = function(e) {
        return e ? p.isArray(e) ? s.call(e) : p.isString(e) ? e.match(I) : O(e) ? p.map(e) : p.values(e) : []
    };
    p.size = function(e) {
        return null == e ? 0 : O(e) ? e.length : p.keys(e).length
    };
    p.partition = S(function(e, t, n) {
        e[n ? 0 : 1].push(t)
    }, !0);
    p.first = p.head = p.take = function(e, t, n) {
        if (null != e) return null == t || n ? e[0] : p.initial(e, e.length - t)
    };
    p.initial = function(e, t, n) {
        return s.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
    };
    p.last = function(e, t, n) {
        if (null != e) return null == t || n ? e[e.length - 1] : p.rest(e, Math.max(0, e.length - t))
    };
    p.rest = p.tail = p.drop = function(e, t, n) {
        return s.call(e, null == t || n ? 1 : t)
    };
    p.compact = function(e) {
        return p.filter(e)
    };
    var E = function(e, t, n, r) {
        for (var i = (r = r || []).length, o = 0, s = b(e); o < s; o++) {
            var a = e[o];
            if (O(a) && (p.isArray(a) || p.isArguments(a)))
                if (t)
                    for (var u = 0, c = a.length; u < c;) r[i++] = a[u++];
                else {
                    E(a, t, n, r);
                    i = r.length
                }
            else n || (r[i++] = a)
        }
        return r
    };
    p.flatten = function(e, t) {
        return E(e, t, !1)
    };
    p.without = v(function(e, t) {
        return p.difference(e, t)
    });
    p.uniq = p.unique = function(e, t, n, r) {
        if (!p.isBoolean(t)) {
            r = n;
            n = t;
            t = !1
        }
        null != n && (n = g(n, r));
        for (var i = [], o = [], s = 0, a = b(e); s < a; s++) {
            var u = e[s],
                c = n ? n(u, s, e) : u;
            if (t) {
                s && o === c || i.push(u);
                o = c
            } else if (n) {
                if (!p.contains(o, c)) {
                    o.push(c);
                    i.push(u)
                }
            } else p.contains(i, u) || i.push(u)
        }
        return i
    };
    p.union = v(function(e) {
        return p.uniq(E(e, !0, !0))
    });
    p.intersection = function(e) {
        for (var t = [], n = arguments.length, r = 0, i = b(e); r < i; r++) {
            var o = e[r];
            if (!p.contains(t, o)) {
                var s;
                for (s = 1; s < n && p.contains(arguments[s], o); s++);
                s === n && t.push(o)
            }
        }
        return t
    };
    p.difference = v(function(e, t) {
        t = E(t, !0, !0);
        return p.filter(e, function(e) {
            return !p.contains(t, e)
        })
    });
    p.unzip = function(e) {
        for (var t = e && p.max(e, b).length || 0, n = Array(t), r = 0; r < t; r++) n[r] = p.pluck(e, r);
        return n
    };
    p.zip = v(p.unzip);
    p.object = function(e, t) {
        for (var n = {}, r = 0, i = b(e); r < i; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
        return n
    };
    var A = function(e) {
        return function(t, n, r) {
            n = g(n, r);
            for (var i = b(t), o = e > 0 ? 0 : i - 1; o >= 0 && o < i; o += e)
                if (n(t[o], o, t)) return o;
            return -1
        }
    };
    p.findIndex = A(1);
    p.findLastIndex = A(-1);
    p.sortedIndex = function(e, t, n, r) {
        for (var i = (n = g(n, r, 1))(t), o = 0, s = b(e); o < s;) {
            var a = Math.floor((o + s) / 2);
            n(e[a]) < i ? o = a + 1 : s = a
        }
        return o
    };
    var k = function(e, t, n) {
        return function(r, i, o) {
            var a = 0,
                u = b(r);
            if ("number" == typeof o) e > 0 ? a = o >= 0 ? o : Math.max(o + u, a) : u = o >= 0 ? Math.min(o + 1, u) : o + u + 1;
            else if (n && o && u) return r[o = n(r, i)] === i ? o : -1;
            if (i != i) return (o = t(s.call(r, a, u), p.isNaN)) >= 0 ? o + a : -1;
            for (o = e > 0 ? a : u - 1; o >= 0 && o < u; o += e)
                if (r[o] === i) return o;
            return -1
        }
    };
    p.indexOf = k(1, p.findIndex, p.sortedIndex);
    p.lastIndexOf = k(-1, p.findLastIndex);
    p.range = function(e, t, n) {
        if (null == t) {
            t = e || 0;
            e = 0
        }
        n || (n = t < e ? -1 : 1);
        for (var r = Math.max(Math.ceil((t - e) / n), 0), i = Array(r), o = 0; o < r; o++, e += n) i[o] = e;
        return i
    };
    p.chunk = function(e, t) {
        if (null == t || t < 1) return [];
        for (var n = [], r = 0, i = e.length; r < i;) n.push(s.call(e, r, r += t));
        return n
    };
    var T = function(e, t, n, r, i) {
        if (!(r instanceof t)) return e.apply(n, i);
        var o = y(e.prototype),
            s = e.apply(o, i);
        return p.isObject(s) ? s : o
    };
    p.bind = v(function(e, t, n) {
        if (!p.isFunction(e)) throw new TypeError("Bind must be called on a function");
        var r = v(function(i) {
            return T(e, r, t, this, n.concat(i))
        });
        return r
    });
    p.partial = v(function(e, t) {
        var n = p.partial.placeholder,
            r = function() {
                for (var i = 0, o = t.length, s = Array(o), a = 0; a < o; a++) s[a] = t[a] === n ? arguments[i++] : t[a];
                for (; i < arguments.length;) s.push(arguments[i++]);
                return T(e, r, this, this, s)
            };
        return r
    });
    p.partial.placeholder = p;
    p.bindAll = v(function(e, t) {
        var n = (t = E(t, !1, !1)).length;
        if (n < 1) throw new Error("bindAll must be passed function names");
        for (; n--;) {
            var r = t[n];
            e[r] = p.bind(e[r], e)
        }
    });
    p.memoize = function(e, t) {
        var n = function(r) {
            var i = n.cache,
                o = "" + (t ? t.apply(this, arguments) : r);
            p.has(i, o) || (i[o] = e.apply(this, arguments));
            return i[o]
        };
        n.cache = {};
        return n
    };
    p.delay = v(function(e, t, n) {
        return setTimeout(function() {
            return e.apply(null, n)
        }, t)
    });
    p.defer = p.partial(p.delay, p, 1);
    p.throttle = function(e, t, n) {
        var r, i, o, s, a = 0;
        n || (n = {});
        var u = function() {
                a = !1 === n.leading ? 0 : p.now();
                r = null;
                s = e.apply(i, o);
                r || (i = o = null)
            },
            c = function() {
                var c = p.now();
                a || !1 !== n.leading || (a = c);
                var l = t - (c - a);
                i = this;
                o = arguments;
                if (l <= 0 || l > t) {
                    if (r) {
                        clearTimeout(r);
                        r = null
                    }
                    a = c;
                    s = e.apply(i, o);
                    r || (i = o = null)
                } else r || !1 === n.trailing || (r = setTimeout(u, l));
                return s
            };
        c.cancel = function() {
            clearTimeout(r);
            a = 0;
            r = i = o = null
        };
        return c
    };
    p.debounce = function(e, t, n) {
        var r, i, o = function(t, n) {
                r = null;
                n && (i = e.apply(t, n))
            },
            s = v(function(s) {
                var a = n && !r;
                r && clearTimeout(r);
                if (a) {
                    r = setTimeout(o, t);
                    i = e.apply(this, s)
                } else n || (r = p.delay(o, t, this, s));
                return i
            });
        s.cancel = function() {
            clearTimeout(r);
            r = null
        };
        return s
    };
    p.wrap = function(e, t) {
        return p.partial(t, e)
    };
    p.negate = function(e) {
        return function() {
            return !e.apply(this, arguments)
        }
    };
    p.compose = function() {
        var e = arguments,
            t = e.length - 1;
        return function() {
            for (var n = t, r = e[t].apply(this, arguments); n--;) r = e[n].call(this, r);
            return r
        }
    };
    p.after = function(e, t) {
        return function() {
            if (--e < 1) return t.apply(this, arguments)
        }
    };
    p.before = function(e, t) {
        var n;
        return function() {
            --e > 0 && (n = t.apply(this, arguments));
            e <= 1 && (t = null);
            return n
        }
    };
    p.once = p.partial(p.before, 2);
    p.restArgs = v;
    var R = !{
            toString: null
        }.propertyIsEnumerable("toString"),
        C = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
        M = function(e, t) {
            var n = C.length,
                i = e.constructor,
                o = p.isFunction(i) && i.prototype || r,
                s = "constructor";
            p.has(e, s) && !p.contains(t, s) && t.push(s);
            for (; n--;)(s = C[n]) in e && e[s] !== o[s] && !p.contains(t, s) && t.push(s)
        };
    p.keys = function(e) {
        if (!p.isObject(e)) return [];
        if (l) return l(e);
        var t = [];
        for (var n in e) p.has(e, n) && t.push(n);
        R && M(e, t);
        return t
    };
    p.allKeys = function(e) {
        if (!p.isObject(e)) return [];
        var t = [];
        for (var n in e) t.push(n);
        R && M(e, t);
        return t
    };
    p.values = function(e) {
        for (var t = p.keys(e), n = t.length, r = Array(n), i = 0; i < n; i++) r[i] = e[t[i]];
        return r
    };
    p.mapObject = function(e, t, n) {
        t = g(t, n);
        for (var r = p.keys(e), i = r.length, o = {}, s = 0; s < i; s++) {
            var a = r[s];
            o[a] = t(e[a], a, e)
        }
        return o
    };
    p.pairs = function(e) {
        for (var t = p.keys(e), n = t.length, r = Array(n), i = 0; i < n; i++) r[i] = [t[i], e[t[i]]];
        return r
    };
    p.invert = function(e) {
        for (var t = {}, n = p.keys(e), r = 0, i = n.length; r < i; r++) t[e[n[r]]] = n[r];
        return t
    };
    p.functions = p.methods = function(e) {
        var t = [];
        for (var n in e) p.isFunction(e[n]) && t.push(n);
        return t.sort()
    };
    var P = function(e, t) {
        return function(n) {
            var r = arguments.length;
            t && (n = Object(n));
            if (r < 2 || null == n) return n;
            for (var i = 1; i < r; i++)
                for (var o = arguments[i], s = e(o), a = s.length, u = 0; u < a; u++) {
                    var c = s[u];
                    t && void 0 !== n[c] || (n[c] = o[c])
                }
            return n
        }
    };
    p.extend = P(p.allKeys);
    p.extendOwn = p.assign = P(p.keys);
    p.findKey = function(e, t, n) {
        t = g(t, n);
        for (var r, i = p.keys(e), o = 0, s = i.length; o < s; o++)
            if (t(e[r = i[o]], r, e)) return r
    };
    var x, L, N = function(e, t, n) {
        return t in n
    };
    p.pick = v(function(e, t) {
        var n = {},
            r = t[0];
        if (null == e) return n;
        if (p.isFunction(r)) {
            t.length > 1 && (r = d(r, t[1]));
            t = p.allKeys(e)
        } else {
            r = N;
            t = E(t, !1, !1);
            e = Object(e)
        }
        for (var i = 0, o = t.length; i < o; i++) {
            var s = t[i],
                a = e[s];
            r(a, s, e) && (n[s] = a)
        }
        return n
    });
    p.omit = v(function(e, t) {
        var n, r = t[0];
        if (p.isFunction(r)) {
            r = p.negate(r);
            t.length > 1 && (n = t[1])
        } else {
            t = p.map(E(t, !1, !1), String);
            r = function(e, n) {
                return !p.contains(t, n)
            }
        }
        return p.pick(e, r, n)
    });
    p.defaults = P(p.allKeys, !0);
    p.create = function(e, t) {
        var n = y(e);
        t && p.extendOwn(n, t);
        return n
    };
    p.clone = function(e) {
        return p.isObject(e) ? p.isArray(e) ? e.slice() : p.extend({}, e) : e
    };
    p.tap = function(e, t) {
        t(e);
        return e
    };
    p.isMatch = function(e, t) {
        var n = p.keys(t),
            r = n.length;
        if (null == e) return !r;
        for (var i = Object(e), o = 0; o < r; o++) {
            var s = n[o];
            if (t[s] !== i[s] || !(s in i)) return !1
        }
        return !0
    };
    x = function(e, t, n, r) {
        if (e === t) return 0 !== e || 1 / e == 1 / t;
        if (null == e || null == t) return e === t;
        if (e != e) return t != t;
        var i = typeof e;
        return ("function" === i || "object" === i || "object" == typeof t) && L(e, t, n, r)
    };
    L = function(e, t, n, r) {
        e instanceof p && (e = e._wrapped);
        t instanceof p && (t = t._wrapped);
        var o = a.call(e);
        if (o !== a.call(t)) return !1;
        switch (o) {
            case "[object RegExp]":
            case "[object String]":
                return "" + e == "" + t;
            case "[object Number]":
                return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
            case "[object Date]":
            case "[object Boolean]":
                return +e == +t;
            case "[object Symbol]":
                return i.valueOf.call(e) === i.valueOf.call(t)
        }
        var s = "[object Array]" === o;
        if (!s) {
            if ("object" != typeof e || "object" != typeof t) return !1;
            var u = e.constructor,
                c = t.constructor;
            if (u !== c && !(p.isFunction(u) && u instanceof u && p.isFunction(c) && c instanceof c) && "constructor" in e && "constructor" in t) return !1
        }
        n = n || [];
        r = r || [];
        for (var l = n.length; l--;)
            if (n[l] === e) return r[l] === t;
        n.push(e);
        r.push(t);
        if (s) {
            if ((l = e.length) !== t.length) return !1;
            for (; l--;)
                if (!x(e[l], t[l], n, r)) return !1
        } else {
            var f, h = p.keys(e);
            l = h.length;
            if (p.keys(t).length !== l) return !1;
            for (; l--;) {
                f = h[l];
                if (!p.has(t, f) || !x(e[f], t[f], n, r)) return !1
            }
        }
        n.pop();
        r.pop();
        return !0
    };
    p.isEqual = function(e, t) {
        return x(e, t)
    };
    p.isEmpty = function(e) {
        return null == e || (O(e) && (p.isArray(e) || p.isString(e) || p.isArguments(e)) ? 0 === e.length : 0 === p.keys(e).length)
    };
    p.isElement = function(e) {
        return !(!e || 1 !== e.nodeType)
    };
    p.isArray = c || function(e) {
        return "[object Array]" === a.call(e)
    };
    p.isObject = function(e) {
        var t = typeof e;
        return "function" === t || "object" === t && !!e
    };
    p.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error", "Symbol", "Map", "WeakMap", "Set", "WeakSet"], function(e) {
        p["is" + e] = function(t) {
            return a.call(t) === "[object " + e + "]"
        }
    });
    p.isArguments(arguments) || (p.isArguments = function(e) {
        return p.has(e, "callee")
    });
    var U = e.document && e.document.childNodes;
    "function" != typeof /./ && "object" != typeof Int8Array && "function" != typeof U && (p.isFunction = function(e) {
        return "function" == typeof e || !1
    });
    p.isFinite = function(e) {
        return !p.isSymbol(e) && isFinite(e) && !isNaN(parseFloat(e))
    };
    p.isNaN = function(e) {
        return p.isNumber(e) && isNaN(e)
    };
    p.isBoolean = function(e) {
        return !0 === e || !1 === e || "[object Boolean]" === a.call(e)
    };
    p.isNull = function(e) {
        return null === e
    };
    p.isUndefined = function(e) {
        return void 0 === e
    };
    p.has = function(e, t) {
        return null != e && u.call(e, t)
    };
    p.noConflict = function() {
        e._ = t;
        return this
    };
    p.identity = function(e) {
        return e
    };
    p.constant = function(e) {
        return function() {
            return e
        }
    };
    p.noop = function() {};
    p.property = m;
    p.propertyOf = function(e) {
        return null == e ? function() {} : function(t) {
            return e[t]
        }
    };
    p.matcher = p.matches = function(e) {
        e = p.extendOwn({}, e);
        return function(t) {
            return p.isMatch(t, e)
        }
    };
    p.times = function(e, t, n) {
        var r = Array(Math.max(0, e));
        t = d(t, n, 1);
        for (var i = 0; i < e; i++) r[i] = t(i);
        return r
    };
    p.random = function(e, t) {
        if (null == t) {
            t = e;
            e = 0
        }
        return e + Math.floor(Math.random() * (t - e + 1))
    };
    p.now = Date.now || function() {
        return (new Date).getTime()
    };
    var j = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        },
        q = p.invert(j),
        D = function(e) {
            var t = function(t) {
                    return e[t]
                },
                n = "(?:" + p.keys(e).join("|") + ")",
                r = RegExp(n),
                i = RegExp(n, "g");
            return function(e) {
                e = null == e ? "" : "" + e;
                return r.test(e) ? e.replace(i, t) : e
            }
        };
    p.escape = D(j);
    p.unescape = D(q);
    p.result = function(e, t, n) {
        var r = null == e ? void 0 : e[t];
        void 0 === r && (r = n);
        return p.isFunction(r) ? r.call(e) : r
    };
    var H = 0;
    p.uniqueId = function(e) {
        var t = ++H + "";
        return e ? e + t : t
    };
    p.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var G = /(.)^/,
        B = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        z = /\\|'|\r|\n|\u2028|\u2029/g,
        F = function(e) {
            return "\\" + B[e]
        };
    p.template = function(e, t, n) {
        !t && n && (t = n);
        t = p.defaults({}, t, p.templateSettings);
        var r, i = RegExp([(t.escape || G).source, (t.interpolate || G).source, (t.evaluate || G).source].join("|") + "|$", "g"),
            o = 0,
            s = "__p+='";
        e.replace(i, function(t, n, r, i, a) {
            s += e.slice(o, a).replace(z, F);
            o = a + t.length;
            n ? s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? s += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : i && (s += "';\n" + i + "\n__p+='");
            return t
        });
        s += "';\n";
        t.variable || (s = "with(obj||{}){\n" + s + "}\n");
        s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
        try {
            r = new Function(t.variable || "obj", "_", s)
        } catch (e) {
            e.source = s;
            throw e
        }
        var a = function(e) {
                return r.call(this, e, p)
            },
            u = t.variable || "obj";
        a.source = "function(" + u + "){\n" + s + "}";
        return a
    };
    p.chain = function(e) {
        var t = p(e);
        t._chain = !0;
        return t
    };
    var K = function(e, t) {
        return e._chain ? p(t).chain() : t
    };
    p.mixin = function(e) {
        p.each(p.functions(e), function(t) {
            var n = p[t] = e[t];
            p.prototype[t] = function() {
                var e = [this._wrapped];
                o.apply(e, arguments);
                return K(this, n.apply(p, e))
            }
        })
    };
    p.mixin(p);
    p.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
        var t = n[e];
        p.prototype[e] = function() {
            var n = this._wrapped;
            t.apply(n, arguments);
            "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0];
            return K(this, n)
        }
    });
    p.each(["concat", "join", "slice"], function(e) {
        var t = n[e];
        p.prototype[e] = function() {
            return K(this, t.apply(this._wrapped, arguments))
        }
    });
    p.prototype.value = function() {
        return this._wrapped
    };
    p.prototype.valueOf = p.prototype.toJSON = p.prototype.value;
    p.prototype.toString = function() {
        return "" + this._wrapped
    };
    "function" == typeof define && define.amd && define("underscore", [], function() {
        return p
    })
}();
if ("undefined" != typeof hubspot && hubspot.define) {
    hubspot.define("underscore", [], function() {
        return window._
    });
    hubspot.define("_", [], function() {
        return window._
    })
}! function(e) {
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
    var t, n = _(),
        r = function() {
            var e = {
                    task: void 0,
                    next: null
                },
                t = e,
                n = !1,
                i = void 0,
                o = !1,
                s = [];

            function a() {
                for (var t, r; e.next;) {
                    t = (e = e.next).task;
                    e.task = void 0;
                    if (r = e.domain) {
                        e.domain = void 0;
                        r.enter()
                    }
                    u(t, r)
                }
                for (; s.length;) u(t = s.pop());
                n = !1
            }

            function u(e, t) {
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
                    domain: o && process.domain,
                    next: null
                };
                if (!n) {
                    n = !0;
                    i()
                }
            };
            if ("function" == typeof setImmediate) i = "undefined" != typeof window ? setImmediate.bind(window, a) : function() {
                setImmediate(a)
            };
            else if ("undefined" != typeof MessageChannel) {
                var c = new MessageChannel;
                c.port1.onmessage = function() {
                    i = l;
                    c.port1.onmessage = a;
                    a()
                };
                var l = function() {
                    c.port2.postMessage(0)
                };
                i = function() {
                    setTimeout(a, 0);
                    l()
                }
            } else i = function() {
                setTimeout(a, 0)
            };
            r.runAfter = function(e) {
                s.push(e);
                if (!n) {
                    n = !0;
                    i()
                }
            };
            return r
        }(),
        i = Function.call;

    function o(e) {
        return function() {
            return i.apply(e, arguments)
        }
    }
    var s = o(Array.prototype.slice),
        a = o(Array.prototype.reduce),
        u = o(Array.prototype.indexOf),
        c = o(Array.prototype.map),
        l = Object.create,
        f = Object.defineProperty;

    function h(e) {
        return e === Object(e)
    }
    var p = "From previous event:";

    function d(t, n) {
        if (e && n.stack && "object" == typeof t && null !== t && t.stack) {
            for (var r = [], i = n; i; i = i.source)
                if (i.stack && (!t.__minimumStackCounter__ || t.__minimumStackCounter__ > i.stackCounter)) {
                    f(t, "__minimumStackCounter__", {
                        value: i.stackCounter,
                        configurable: !0
                    });
                    r.unshift(i.stack)
                } r.unshift(t.stack);
            var o = g(r.join("\n" + p + "\n"));
            f(t, "stack", {
                value: o,
                configurable: !0
            })
        }
    }

    function g(e) {
        for (var t = e.split("\n"), n = [], r = 0; r < t.length; ++r) {
            var i = t[r];
            m(i) || v(i) || !i || n.push(i)
        }
        return n.join("\n")
    }

    function v(e) {
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

    function m(e) {
        var r = y(e);
        if (!r) return !1;
        var i = r[0],
            o = r[1];
        return i === t && o >= n && o <= K
    }

    function _() {
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

    function b(e) {
        return e instanceof R ? e : P(e) ? G(e) : H(e)
    }
    var O = {
            longStackSupport: !1
        },
        w = 1;
    "object" == typeof process && process && process.env && process.env.Q_DEBUG && (O.longStackSupport = !0);

    function S() {
        var t, n = [],
            i = l(S.prototype),
            o = l(R.prototype);
        o.promiseDispatch = function(e, i, o) {
            var a = s(arguments);
            n ? n.push(a) : r(function() {
                t.promiseDispatch.apply(t, a)
            })
        };
        o._inspect = function() {
            return t ? t._inspect() : {
                state: "pending"
            }
        };
        if (O.longStackSupport && e) try {
            throw new Error
        } catch (e) {
            o.stack = e.stack.substring(e.stack.indexOf("\n") + 1);
            o.stackCounter = w++
        }

        function u(i) {
            t = i;
            O.longStackSupport && e && (o.source = i);
            a(n, function(e, t) {
                r(function() {
                    i.promiseDispatch.apply(i, t)
                })
            }, void 0);
            n = void 0
        }
        i.promise = o;
        i.resolve = function(e) {
            t || u(b(e))
        };
        i.reject = function(e) {
            t || u(D(e))
        };
        return i
    }
    O.Promise = I;

    function I(e) {
        if (!(this instanceof I)) throw Error("must use `new` with `Q.Promise` constructor.");
        if ("function" != typeof e) throw new TypeError("resolver must be a function.");
        var t = S();
        try {
            e(t.resolve, t.reject)
        } catch (e) {
            t.reject(e)
        }
        return t.promise
    }
    var E, A = (E = {}, function(e) {
        if (!E[e]) {
            E[e] = !0;
            window.enviro && (window.enviro.deployed && !window.enviro.deployed("q") || window.enviro.debug && window.enviro.debug("q")) && console.error(e);
            window.newrelic && window.newrelic.addPageAction && window.newrelic.addPageAction("Qv6DeprecationWarning", {
                deprecationMessage: e
            })
        }
    });

    function k(e, t, n) {
        return function r(i) {
            this instanceof r ? A("Q.Promise." + t + " is not a constructor") : this !== I && A("Q.Promise." + t + " not called on Q.Promise");
            n && (i && "function" == typeof i[Symbol.iterator] ? Array.isArray(i) || A("Q.Promise." + t + " called with non-array") : A("Q.Promise." + t + " called with non-iterable"));
            return e.apply(this, arguments)
        }
    }
    I.race = k(T, "race", !0);
    I.all = k(F, "all", !0);
    I.reject = k(D, "reject");
    I.resolve = k(b, "resolve");

    function T(e) {
        return new I(function(t, n) {
            for (var r = 0, i = e.length; r < i; r++) b(e[r]).then(t, n)
        })
    }

    function R(e, t, n) {
        void 0 === t && (t = function(e) {
            return D(new Error("Promise does not support operation: " + e))
        });
        void 0 === n && (n = function() {
            return {
                state: "unknown"
            }
        });
        var r = l(R.prototype);
        r.promiseDispatch = function(n, i, o) {
            var s;
            try {
                s = e[i] ? e[i].apply(r, o) : t.call(r, i, o)
            } catch (e) {
                s = D(e)
            }
            n && n(s)
        };
        r._inspect = n;
        if (n) {
            var i = n();
            "rejected" === i.state && (r.exception = i.reason)
        }
        return r
    }
    R.prototype.toString = function() {
        return "[object Promise]"
    };
    R.prototype.then = function(e, t) {
        var n = this,
            i = S(),
            o = !1;

        function s(t) {
            try {
                return "function" == typeof e ? e(t) : t
            } catch (e) {
                return D(e)
            }
        }

        function a(e) {
            if ("function" == typeof t) {
                d(e, n);
                try {
                    return t(e)
                } catch (e) {
                    return D(e)
                }
            }
            return D(e)
        }
        r(function() {
            n.promiseDispatch(function(e) {
                if (!o) {
                    o = !0;
                    i.resolve(s(e))
                }
            }, "when", [function(e) {
                if (!o) {
                    o = !0;
                    i.resolve(a(e))
                }
            }])
        });
        return i.promise
    };

    function C(e, t, n) {
        return b(e).then(t, n)
    }

    function M(e) {
        return e instanceof R
    }

    function P(e) {
        return h(e) && "function" == typeof e.then
    }
    var x = [],
        L = [],
        N = !0;

    function U() {
        x.length = 0;
        L.length = 0;
        N || (N = !0)
    }

    function j(e, t) {
        if (N) {
            L.push(e);
            var n = t + "";
            O.customizeRejectionString && (n = O.customizeRejectionString(t));
            t && void 0 !== t.stack ? t.stack.slice && t.stack.slice(0, n.length) === n ? x.push(t.stack) : x.push(n + "\n" + t.stack) : x.push("(no stack) " + n)
        }
    }

    function q(e) {
        if (N) {
            var t = u(L, e);
            if (-1 !== t) {
                L.splice(t, 1);
                x.splice(t, 1)
            }
        }
    }
    O.resetUnhandledRejections = U;
    O.getUnhandledReasons = function() {
        return x.slice()
    };
    O.stopUnhandledRejectionTracking = function() {
        U();
        N = !1
    };
    O.getUnhandledRejectionValues = function() {
        return c(L, function(e) {
            return e.exception
        })
    };
    U();

    function D(e) {
        var t = R({
            when: function(t) {
                t && q(this);
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
        j(t, e);
        return t
    }

    function H(e) {
        return R({
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

    function G(e) {
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

    function B(e, t, n) {
        var i = S();
        r(function() {
            e.promiseDispatch(i.resolve, t, n)
        });
        return i.promise
    }

    function z(e) {
        return B(e, "apply", [void 0, s(arguments, 1)])
    }

    function F(e) {
        return C(e, function(e) {
            var t = 0,
                n = S();
            a(e, function(r, i, o) {
                var s;
                if (M(i) && "fulfilled" === (s = i._inspect()).state) e[o] = s.value;
                else {
                    ++t;
                    C(i, function(r) {
                        e[o] = r;
                        0 == --t && n.resolve(e)
                    }, n.reject)
                }
            }, void 0);
            0 === t && n.resolve(e);
            return n.promise
        })
    }
    R.prototype.catch = function(e) {
        return this.then(void 0, e)
    };
    R.prototype.finally = function(e) {
        if (!e || "function" != typeof e.apply) throw new Error("Q can't apply finally callback");
        e = b(e);
        return this.then(function(t) {
            return z(e).then(function() {
                return t
            })
        }, function(t) {
            return z(e).then(function() {
                throw t
            })
        })
    };
    R.prototype.done = function(e, t) {
        var n = function(e) {
                r(function() {
                    d(e, i);
                    if (!O.onerror) throw e;
                    O.onerror(e)
                })
            },
            i = e || t ? this.then(e, t) : this;
        i.then(void 0, n)
    };
    var K = _();
    return O
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
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        e[r].call(i.exports, i, i.exports, n);
        i.l = !0;
        return i.exports
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
    n(n.s = 117)
}([function(e, t, n) {
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
        i = u(n(2)),
        o = u(n(27)),
        s = n(25),
        a = n(14);

    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function c(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var l = function() {
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
                if (!this._shouldLog(t, n)) return s.emptyFunction;
                var i = e.CONSOLE_FN[t] || e.CONSOLE_FN.log || s.emptyFunction;
                return function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    var o = new Array(t.length + 1);
                    o[0] = "[HubSpot Sales]";
                    for (var s = 0; s < t.length; s++) {
                        var u = t[s];
                        o[s + 1] = this._formatError(u)
                    }
                    r && o.length > 1 && (0, a.newErrorEntry)(o[1]);
                    return this._callLogFn(i, o)
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
                return "background" === o.default || this._aboveLevelThreshold(t)
            }
        }, {
            key: "_aboveLevelThreshold",
            value: function(t) {
                return i.default.deployed("console") ? t >= e.LEVELS.error : t >= e.LEVELS.log
            }
        }, {
            key: "_formatError",
            value: function(e) {
                return e instanceof Error ? e.stack ? e.message && -1 === e.stack.indexOf(e.message) ? "Error: " + e.message + "\n" + e.stack : e.stack : e.sourceURL ? e.message + "\n" + e.sourceURL + ":" + e.line : e : e
            }
        }]);
        return e
    }();
    l.LEVELS = {
        log: 0,
        debug: 1,
        info: 2,
        warn: 3,
        error: 4
    };
    l.CONSOLE_FN = window.console || {};
    t.default = new l;
    e.exports = t.default
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = chrome;
    e.exports = t.default
}, function(e, t) {
    e.exports = hubspot.requireSync("enviro")
}, function(e, t, n) {
    e.exports = hubspot.requireSync("q")
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.safeMode = t.retry = t.validateStatus = t.reportOptionsError = t.jsonResponse = t.responseInterceptor = t.onResponseError = t.onResponse = t.jsonBody = t.bodyType = t.standardApi = t.withApiAsOption = t.environmentUrl = t.httpsOnly = t.withQuery = t.query = t.base = t.header = t.method = t.defaultTo = t.withOptions = t.withUrl = t.resolveApi = t.validateOptions = t.services = void 0;
    var r = function() {
            function e(e, t) {
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var s, a = e[Symbol.iterator](); !(r = (s = a.next()).done); r = !0) {
                        n.push(s.value);
                        if (t && n.length === t) break
                    }
                } catch (e) {
                    i = !0;
                    o = e
                } finally {
                    try {
                        !r && a.return && a.return()
                    } finally {
                        if (i) throw o
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
        i = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        o = d(n(2)),
        s = n(9),
        a = n(8),
        u = n(6),
        c = n(29),
        l = n(30),
        f = p(n(41)),
        h = p(n(70));

    function p(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        t.default = e;
        return t
    }

    function d(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var g = function() {
            try {
                return window.localStorage
            } catch (e) {
                console.error("[hub-http] Exception accessing local storage.", e);
                return
            }
        },
        v = function() {
            return window.hubspot && window.hubspot.bender ? {
                name: window.hubspot.bender.currentProject,
                version: window.hubspot.bender.currentProjectVersion
            } : null
        },
        y = (t.services = function(e) {
            return i({
                location: window.location,
                cookies: window.document.cookie,
                localStorage: g(),
                document: window.document,
                appInfo: v()
            }, e)
        }, t.validateOptions = function(e, t) {
            return function(n) {
                if (!e || "function" != typeof e) throw new Error("validator must be a function");
                if (!e(n)) throw new Error(t);
                return n
            }
        }, t.resolveApi = function(e) {
            var t = o.default.getShort("hub-http"),
                n = "local" === t ? "local" : "deployed",
                r = e[n] ? e[n][t] : null;
            if (!r) throw new Error("No hostname defined for environment " + t + " and " + n);
            return r
        }),
        m = Symbol("url"),
        _ = t.withUrl = function(e) {
            return function(t) {
                var n = t[m] || (0, l.parseUrl)(t.url);
                n = e(n);
                t = (0, u.set)(m, n)(t);
                return t = (0, u.set)("url", (0, l.buildUrl)(n))(t)
            }
        },
        b = (t.withOptions = function(e, t) {
            return Object.assign({}, e, t)
        }, function(e, t) {
            var n = t && t._input ? t._input : t;
            return void 0 !== n[e] ? n[e] : void 0
        }),
        O = t.defaultTo = function(e, t) {
            return function(n) {
                return void 0 === b(e, n) ? (0, u.set)(e, t)(n) : n
            }
        },
        w = (t.method = function(e) {
            return O("method", e)
        }, t.header = function(e, t, n) {
            return function(r) {
                var i = h.getHeader(e, r);
                return n || void 0 === i ? h.setHeader(e, t, r) : r
            }
        }),
        S = (t.base = function(e) {
            return function(t) {
                return (0, u.set)("url", e + t.url)(t)
            }
        }, Symbol("initialQuery")),
        I = Symbol("noOverrideQuery"),
        E = Symbol("overrideQuery"),
        A = t.query = function(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            return _(function(n) {
                var o = n;
                void 0 === o[S] && (o = (0, u.set)(S, n.query || "")(o));
                var s = t ? [E, o[E], e] : [I, e, o[I]],
                    a = r(s, 3),
                    c = a[0],
                    l = a[1],
                    h = a[2];
                o = (0, u.setIn)([c], i({}, l, h))(o);
                return (0, u.set)("query", [o[S], f.stringify(i({}, o[E], o[I]))].filter(Boolean).join("&"))(o)
            })
        },
        k = (t.withQuery = function(e) {
            return A(e.query, !1)(e)
        }, t.httpsOnly = _((0, u.set)("protocol", "https")), t.environmentUrl = function(e) {
            return function(t) {
                return _(function(n) {
                    !n.protocol && t.location && (n.protocol = t.location.protocol.slice(0, -1));
                    if (!n.hostname) {
                        var r = t.api || e;
                        n.hostname = y(r)
                    }
                    return n
                })(t)
            }
        }),
        T = (t.withApiAsOption = function(e) {
            if (!e.api) throw new Error("Missing api option. Expected api object (you can create one with the standardApi function");
            return k(null)(e)
        }, t.standardApi = function(e, t) {
            return {
                local: {
                    qa: "local." + t + "qa.com",
                    prod: "local." + t + ".com"
                },
                deployed: {
                    qa: e + "." + t + "qa.com",
                    prod: e + "." + t + ".com"
                }
            }
        }, t.bodyType = function(e, t) {
            return function(n) {
                (n = w("content-type", e)(n)).rawData ? n.data = n.rawData : "function" == typeof t && h.getHeader("content-type", n) === e && (n.data = t(n.data));
                return n
            }
        }),
        R = (t.jsonBody = function(e) {
            return void 0 !== e.data || void 0 !== e.rawData ? T("application/json", JSON.stringify)(e) : e
        }, function(e) {
            return function(t) {
                try {
                    return e(t)
                } catch (e) {
                    e.response = t;
                    throw e
                }
            }
        }),
        C = t.onResponse = function(e) {
            return (0, c.handleResponse)(function(t) {
                return t.then(R(e))
            })
        },
        M = (t.onResponseError = function(e) {
            return (0, c.handleResponse)(function(t) {
                return t.catch(R(e))
            })
        }, t.responseInterceptor = function(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            return (0, c.handleResponse)(function(n) {
                return n.then(R(e), function(n) {
                    return t ? a.Promise.reject(e(n)) : e(n)
                })
            })
        }, function(e) {
            return e && e.headers && h.getHeader("content-type", e) || ""
        });
    t.jsonResponse = (0, s.createStack)(w("Accept", "application/json, text/javascript, */*; q=0.01"), C(function(e) {
        return (0, u.setIf)("string" == typeof e.data && 0 === M(e).indexOf("application/json"), "data", function() {
            return e.data.length ? JSON.parse(e.data) : void 0
        })(e)
    })), t.reportOptionsError = C(function(e) {
        return "OPTIONSERROR" === e.errorCode ? a.Promise.reject((0, c.responseError)(e, "hub-http error building request options: " + e.options.error.message)) : e
    }), t.validateStatus = function(e) {
        return C(function(t) {
            return t.status >= 200 && t.status < 300 ? t : a.Promise.reject((0, c.responseError)(t, "Request for " + e.url + " failed with status " + t.status + ". " + (t.statusText || "")))
        })(e)
    }, t.retry = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = t.reason,
            r = t.maxRetries,
            i = void 0 === r ? 1 : r,
            o = t.delay,
            c = void 0 === o ? 250 : o,
            l = t.onMaxAttemptsReached;
        return function(t) {
            var r = function(t) {
                if (e(t)) {
                    var r = (0, u.set)("retry", {
                        reason: n,
                        maxRetries: i,
                        delay: c,
                        exceededRetries: t.options.retryAttempts >= i
                    })(t);
                    return a.Promise.reject(r)
                }
                return t
            };
            return 0 === i ? t : (t.retryAttempts >= i && "function" == typeof l ? (0, s.createStack)(C(r), l) : C(r))(t)
        }
    }, t.safeMode = (0, u.set)("safeMode", !0)
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.requestUpdateCheck = t.addUpdateAvailableListener = t.addInstalledListener = t.getId = t.getManifestVersion = t.getLastError = t.reload = t.connect = t.sendMessage = t.addConnectListener = t.addMessageListener = t.callRuntimeMethodSafe = t.RUNTIME_ERROR_THRESHOLD = t.GET_ID = t.GET_MANIFEST_VERSION = t.LAST_ERROR = t.RELOAD = t.CONNECT = t.REQUEST_UPDATE_CHECK = t.ON_UPDATE_AVAILABLE_LISTENER = t.ON_INSTALLED_LISTENER = t.ON_CONNECT_LISTENER = t.ON_MESSAGE_LISTENER = t.SEND_MESSAGE = void 0;
    var r = n(31),
        i = n(32),
        o = t.SEND_MESSAGE = "SEND_MESSAGE",
        s = t.ON_MESSAGE_LISTENER = "ON_MESSAGE_LISTENER",
        a = t.ON_CONNECT_LISTENER = "ON_CONNECT_LISTENER",
        u = t.ON_INSTALLED_LISTENER = "ON_INSTALLED_LISTENER",
        c = t.ON_UPDATE_AVAILABLE_LISTENER = "ON_UPDATE_AVAILABLE_LISTENER",
        l = t.REQUEST_UPDATE_CHECK = "REQUEST_UPDATE_CHECK",
        f = t.CONNECT = "CONNECT",
        h = t.RELOAD = "RELOAD",
        p = t.LAST_ERROR = "LAST_ERROR",
        d = t.GET_MANIFEST_VERSION = "GET_MANIFEST_VERSION",
        g = t.GET_ID = "GET_ID",
        v = t.RUNTIME_ERROR_THRESHOLD = 5,
        y = t.callRuntimeMethodSafe = function(e) {
            for (var t, n, y, m, _, b, O, w, S, I = arguments.length, E = Array(I > 1 ? I - 1 : 0), A = 1; A < I; A++) E[A - 1] = arguments[A];
            try {
                switch (e) {
                    case o:
                        return (t = r.chrome.runtime).sendMessage.apply(t, E);
                    case s:
                        return (n = r.chrome.runtime.onMessage).addListener.apply(n, E);
                    case a:
                        return (y = r.chrome.runtime.onConnect).addListener.apply(y, E);
                    case f:
                        return (m = r.chrome.runtime).connect.apply(m, E);
                    case h:
                        return (_ = r.chrome.runtime).reload.apply(_, E);
                    case p:
                        return r.chrome.runtime.lastError;
                    case d:
                        return (b = r.chrome.runtime).getManifest.apply(b, E).version;
                    case g:
                        return r.chrome.runtime.id;
                    case u:
                        return (O = r.chrome.runtime.onInstalled).addListener.apply(O, E);
                    case c:
                        return (w = r.chrome.runtime.onUpdateAvailable).addListener.apply(w, E);
                    case l:
                        return (S = r.chrome.runtime).requestUpdateCheck.apply(S, E);
                    default:
                        return null
                }
            } catch (t) {
                if (!r.chrome.runtime) {
                    sessionStorage.runtimeError ? sessionStorage.runtimeError > v ? (0, i.LogWarn)({
                        error: t,
                        fingerprint: "SafeRuntime-SafeStorage: chrome.runtime is undefined"
                    }) : sessionStorage.runtimeError = parseInt(sessionStorage.runtimeError, 10) + 1 : sessionStorage.runtimeError = 1;
                    return null
                }(0, i.LogWarn)({
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
        return y.apply(void 0, [s].concat(t))
    }, t.addConnectListener = function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return y.apply(void 0, [a].concat(t))
    }, t.sendMessage = function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return y.apply(void 0, [o].concat(t))
    }, t.connect = function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return y.apply(void 0, [f].concat(t))
    }, t.reload = function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return y.apply(void 0, [h].concat(t))
    }, t.getLastError = function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return y.apply(void 0, [p].concat(t))
    }, t.getManifestVersion = function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return y.apply(void 0, [d].concat(t))
    }, t.getId = function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return y.apply(void 0, [g].concat(t))
    }, t.addInstalledListener = function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return y.apply(void 0, [u].concat(t))
    }, t.addUpdateAvailableListener = function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return y.apply(void 0, [c].concat(t))
    }, t.requestUpdateCheck = function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return y.apply(void 0, [l].concat(t))
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.setIf = t.setIn = t.push = t.set = void 0;
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        o = s(n(40));

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }
    var u = t.set = function(e, t) {
            return function(n) {
                (n = i({}, n))[e] = t;
                return n
            }
        },
        c = (t.push = function(e, t) {
            return function(n) {
                return u(e, [].concat(a(n[e] || []), [t]))(n)
            }
        }, function(e) {
            return "string" == typeof e[0] || e[0] instanceof String || "symbol" === r(e[0]) ? (0, o.default)({}) : (0, o.default)([])
        }),
        l = (t.setIn = function e(t, n) {
            return function() {
                var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c(t);
                return 1 === t.length ? u(t[0], n)(r) : u(t[0], e(t.slice(1), n)(r[t[0]]))(r)
            }
        }, function(e, t) {
            return "function" == typeof e ? e(t) : e
        }),
        f = function(e) {
            return "function" == typeof e ? e() : e
        };
    t.setIf = function(e, t, n) {
        return function(r) {
            return l(e, r) ? u(t, f(n))(r) : r
        }
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.portalSwitchHandler = t.updatePickedPortal = t.setPortalId = t.getPortalId = void 0;
    var r = n(22),
        i = n(20),
        o = n(23),
        s = n(52),
        a = c(n(24)),
        u = n(10);

    function c(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var l = 1e3,
        f = 2e3,
        h = null,
        p = (t.getPortalId = function() {
            return h
        }, t.setPortalId = function(e) {
            h = e
        }),
        d = t.updatePickedPortal = function(e) {
            if (e !== h) {
                o.UsageTracker.track(r.CLIENT_APP_INTERACTION, {
                    action: r.CHANGE_PORTAL
                });
                (0, i.sendToContentScripts)("message", {
                    sender: "SIG_EXTENSION",
                    type: "PICKED_PORTAL_CHANGED",
                    value: e
                });
                p(e);
                setTimeout(function() {
                    (0, u.restartExtension)()
                }, l)
            }
        };
    t.portalSwitchHandler = function(e) {
        (0, s.setPortalIdThroughApi)(e).then(function() {
            setTimeout(function() {
                a.default.captureMessage("UserContextActions: SignalsExtension did not recieve notification to restart", {
                    level: "info"
                });
                d(e)
            }, f)
        })
    }
}, function(e, t, n) {
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
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.createStack = void 0;
    var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        i = s(n(40)),
        o = n(8);

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(0, s(n(66)).default)();
    var a = function(e, t) {
        return o.Promise.resolve(e((0, i.default)(r({}, t, {
            _input: t
        }))))
    };
    t.createStack = function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        var r = t[0],
            i = t.slice(1);
        return function(e) {
            return 0 === i.length ? a(r, e) : i.reduce(function(e, t) {
                return e.then(t)
            }, a(r, e))
        }
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.redirectBasedOnTabs = t.openInActiveTab = t.restartExtension = t.reloadGmailTabs = t.closeTabs = t.openTabIfNotAlreadyOpen = t.forAllTabs = t.openNewTab = void 0;
    var r = a(n(1)),
        i = n(7),
        o = a(n(39)),
        s = n(5);

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var u = t.openNewTab = function(e) {
            return r.default.tabs.create({
                url: e,
                index: 1e3
            })
        },
        c = t.forAllTabs = function(e, t) {
            return new Promise(function(n, i) {
                try {
                    r.default.tabs.query({}, function(r) {
                        var i = !0,
                            o = !1,
                            s = void 0;
                        try {
                            for (var a, u = Array.from(r)[Symbol.iterator](); !(i = (a = u.next()).done); i = !0) {
                                var c = a.value;
                                null != e && -1 === c.url.indexOf(e) || t(c)
                            }
                        } catch (e) {
                            o = !0;
                            s = e
                        } finally {
                            try {
                                !i && u.return && u.return()
                            } finally {
                                if (o) throw s
                            }
                        }
                        n()
                    })
                } catch (e) {
                    i("Error in SignalsExtension: forAllTabs")
                }
            })
        },
        l = (t.openTabIfNotAlreadyOpen = function(e) {
            r.default.tabs.query({}, function(t) {
                var n = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var s, a = Array.from(t)[Symbol.iterator](); !(n = (s = a.next()).done); n = !0) {
                        var c = s.value;
                        if (c.url.includes(e)) {
                            r.default.tabs.update(c.id, {
                                active: !0
                            });
                            return
                        }
                    }
                } catch (e) {
                    i = !0;
                    o = e
                } finally {
                    try {
                        !n && a.return && a.return()
                    } finally {
                        if (i) throw o
                    }
                }
                u(e)
            })
        }, t.closeTabs = async function(e, t) {
            return await c(t, function(t) {
                "close" === e ? r.default.tabs.remove(t.id) : "reload" === e && r.default.tabs.reload(t.id, {
                    bypassCache: !0
                })
            })
        });
    t.reloadGmailTabs = async function() {
        return await l("reload", "mail.google.com")
    }, t.restartExtension = function() {
        (0, s.reload)()
    }, t.openInActiveTab = function(e) {
        return r.default.tabs.update(void 0, {
            url: e
        })
    }, t.redirectBasedOnTabs = function() {
        r.default.tabs.query({}, function(e) {
            var t = new o.default("/crm-settings-email/" + (0, i.getPortalId)() + "/email/extension", {
                    lb: "app",
                    protocol: "https"
                }).href,
                n = new o.default("/getting-started/" + (0, i.getPortalId)() + "/connect-inbox", {
                    lb: "app",
                    protocol: "https"
                }).href,
                s = e.find(function(e) {
                    return e.url.includes(t)
                }),
                a = e.find(function(e) {
                    return e.url.includes(n)
                });
            a ? r.default.tabs.update(a.id, {
                active: !0
            }) : s && r.default.tabs.update(s.id, {
                active: !0
            })
        })
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        i = (t.between = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                r = e.indexOf(t),
                i = e.indexOf(n);
            return e.substr(r + t.length, i - r - n.length)
        }, t.debounce = function(e, t) {
            var n = void 0,
                r = void 0;
            return function() {
                for (var i = arguments.length, o = Array(i), s = 0; s < i; s++) o[s] = arguments[s];
                n && clearTimeout(n);
                n = setTimeout(function() {
                    n = null;
                    r = e.apply(null, o)
                }, t);
                return r
            }
        }, t.defaults = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = Object.keys(t).reduce(function(n, r) {
                    void 0 === e[r] && (n[r] = t[r]);
                    return n
                }, {});
            return r({}, e, n)
        }, t.isArray = function(e) {
            return Array.hasOwnProperty("isArray") ? Array.isArray(e) : "[object Array]" === Object.prototype.toString.call(e)
        });
    t.makeUuid = function() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
            var t = 16 * Math.random() | 0;
            return ("x" === e ? t : 3 & t | 8).toString(16)
        })
    }, t.mapObject = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments[1];
        return Object.keys(e).reduce(function(n, r) {
            n[r] = t(r, e[r]);
            return n
        }, {})
    }, t.omit = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return Object.keys(e).reduce(function(r, i) {
            var o = -1 !== t.indexOf(i);
            (n ? o : !o) || (r[i] = e[i]);
            return r
        }, {})
    }, t.once = function(e) {
        var t = void 0,
            n = void 0;
        return function() {
            if (!t) {
                t = !0;
                n = e.apply(void 0, arguments)
            }
            return n
        }
    }, t.pluck = function(e, t) {
        var n = i(t),
            r = n ? [] : {};
        return Object.keys(t).reduce(function(r, i) {
            var o = n ? parseInt(i, 10) : i,
                s = t[o];
            r[o] = s[e];
            return r
        }, r)
    }, t.trim = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        0 === (e = "function" == typeof e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")).indexOf(t) && (e = e.substr(t.length));
        e.indexOf(t) === e.length - t.length && (e = e.substr(0, e.indexOf(t)));
        return e
    }, t.shallowCopy = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return Object.keys(e).reduce(function(t, n) {
            t[n] = e[n];
            return t
        }, {})
    }, t.cleanUrl = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        try {
            var t = (e = e.split("?")[0].split("#")[0]).split("/");
            if (t.length > 4) {
                var n = t.slice(0, 4),
                    r = t.slice(4, t.length).map(function(e) {
                        return /\d/.test(e) ? "*" : e
                    });
                e = n.join("/") + "/" + r.join("/")
            }
            "/" === e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1));
            if (e.length > 100) {
                e = e.substr(0, 100);
                e += "[...]"
            }
        } catch (t) {
            e = "parsing error"
        }
        return e
    }, t.resolveAsyncProperties = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments[1],
            n = arguments[2],
            r = {},
            i = Object.keys(e),
            o = i.length,
            s = i.reduce(function(t, n) {
                var i = e[n];
                i && "function" == typeof i && (i = i()) && "function" == typeof i.then ? t.push({
                    key: n,
                    promise: i
                }) : r[n] = i;
                return t
            }, []),
            a = function() {
                Object.keys(r).length === o && n(r)
            };
        s.length ? s.forEach(function(e) {
            var n = e.key;
            e.promise.then(function(e) {
                r[n] = e;
                a()
            }).catch(function(e) {
                r[n] = void 0;
                t(e);
                a()
            })
        }) : n(r)
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = t.accountId = 53;
    t.debugKey = "USAGE_TRACKER_JS", t.hstcKey = "__hstc", t.hamplitudeKey = "__hmpl", t.storageKey = "HUBLYTICS_EVENTS_" + r
}, function(e, t, n) {
    r = function() {
        "use strict";
        var e = Array.prototype.slice;

        function t(e, t) {
            t && (e.prototype = Object.create(t.prototype));
            e.prototype.constructor = e
        }

        function n(e) {
            return s(e) ? e : W(e)
        }
        t(r, n);

        function r(e) {
            return a(e) ? e : J(e)
        }
        t(i, n);

        function i(e) {
            return u(e) ? e : Y(e)
        }
        t(o, n);

        function o(e) {
            return s(e) && !c(e) ? e : Q(e)
        }

        function s(e) {
            return !(!e || !e[f])
        }

        function a(e) {
            return !(!e || !e[h])
        }

        function u(e) {
            return !(!e || !e[p])
        }

        function c(e) {
            return a(e) || u(e)
        }

        function l(e) {
            return !(!e || !e[d])
        }
        n.isIterable = s;
        n.isKeyed = a;
        n.isIndexed = u;
        n.isAssociative = c;
        n.isOrdered = l;
        n.Keyed = r;
        n.Indexed = i;
        n.Set = o;
        var f = "@@__IMMUTABLE_ITERABLE__@@",
            h = "@@__IMMUTABLE_KEYED__@@",
            p = "@@__IMMUTABLE_INDEXED__@@",
            d = "@@__IMMUTABLE_ORDERED__@@",
            g = "delete",
            v = 5,
            y = 1 << v,
            m = y - 1,
            _ = {},
            b = {
                value: !1
            },
            O = {
                value: !1
            };

        function w(e) {
            e.value = !1;
            return e
        }

        function S(e) {
            e && (e.value = !0)
        }

        function I() {}

        function E(e, t) {
            t = t || 0;
            for (var n = Math.max(0, e.length - t), r = new Array(n), i = 0; i < n; i++) r[i] = e[i + t];
            return r
        }

        function A(e) {
            void 0 === e.size && (e.size = e.__iterate(T));
            return e.size
        }

        function k(e, t) {
            if ("number" != typeof t) {
                var n = t >>> 0;
                if ("" + n !== t || 4294967295 === n) return NaN;
                t = n
            }
            return t < 0 ? A(e) + t : t
        }

        function T() {
            return !0
        }

        function R(e, t, n) {
            return (0 === e || void 0 !== n && e <= -n) && (void 0 === t || void 0 !== n && t >= n)
        }

        function C(e, t) {
            return P(e, t, 0)
        }

        function M(e, t) {
            return P(e, t, t)
        }

        function P(e, t, n) {
            return void 0 === e ? n : e < 0 ? Math.max(0, t + e) : void 0 === t ? e : Math.min(t, e)
        }
        var x = 0,
            L = 1,
            N = 2,
            U = "function" == typeof Symbol && Symbol.iterator,
            j = "@@iterator",
            q = U || j;

        function D(e) {
            this.next = e
        }
        D.prototype.toString = function() {
            return "[Iterator]"
        };
        D.KEYS = x;
        D.VALUES = L;
        D.ENTRIES = N;
        D.prototype.inspect = D.prototype.toSource = function() {
            return this.toString()
        };
        D.prototype[q] = function() {
            return this
        };

        function H(e, t, n, r) {
            var i = 0 === e ? t : 1 === e ? n : [t, n];
            r ? r.value = i : r = {
                value: i,
                done: !1
            };
            return r
        }

        function G() {
            return {
                value: void 0,
                done: !0
            }
        }

        function B(e) {
            return !!K(e)
        }

        function z(e) {
            return e && "function" == typeof e.next
        }

        function F(e) {
            var t = K(e);
            return t && t.call(e)
        }

        function K(e) {
            var t = e && (U && e[U] || e[j]);
            if ("function" == typeof t) return t
        }

        function V(e) {
            return e && "number" == typeof e.length
        }
        t(W, n);

        function W(e) {
            return null === e || void 0 === e ? se() : s(e) ? e.toSeq() : ce(e)
        }
        W.of = function() {
            return W(arguments)
        };
        W.prototype.toSeq = function() {
            return this
        };
        W.prototype.toString = function() {
            return this.__toString("Seq {", "}")
        };
        W.prototype.cacheResult = function() {
            if (!this._cache && this.__iterateUncached) {
                this._cache = this.entrySeq().toArray();
                this.size = this._cache.length
            }
            return this
        };
        W.prototype.__iterate = function(e, t) {
            return fe(this, e, t, !0)
        };
        W.prototype.__iterator = function(e, t) {
            return he(this, e, t, !0)
        };
        t(J, W);

        function J(e) {
            return null === e || void 0 === e ? se().toKeyedSeq() : s(e) ? a(e) ? e.toSeq() : e.fromEntrySeq() : ae(e)
        }
        J.prototype.toKeyedSeq = function() {
            return this
        };
        t(Y, W);

        function Y(e) {
            return null === e || void 0 === e ? se() : s(e) ? a(e) ? e.entrySeq() : e.toIndexedSeq() : ue(e)
        }
        Y.of = function() {
            return Y(arguments)
        };
        Y.prototype.toIndexedSeq = function() {
            return this
        };
        Y.prototype.toString = function() {
            return this.__toString("Seq [", "]")
        };
        Y.prototype.__iterate = function(e, t) {
            return fe(this, e, t, !1)
        };
        Y.prototype.__iterator = function(e, t) {
            return he(this, e, t, !1)
        };
        t(Q, W);

        function Q(e) {
            return (null === e || void 0 === e ? se() : s(e) ? a(e) ? e.entrySeq() : e : ue(e)).toSetSeq()
        }
        Q.of = function() {
            return Q(arguments)
        };
        Q.prototype.toSetSeq = function() {
            return this
        };
        W.isSeq = oe;
        W.Keyed = J;
        W.Set = Q;
        W.Indexed = Y;
        var X, $, Z, ee = "@@__IMMUTABLE_SEQ__@@";
        W.prototype[ee] = !0;
        t(te, Y);

        function te(e) {
            this._array = e;
            this.size = e.length
        }
        te.prototype.get = function(e, t) {
            return this.has(e) ? this._array[k(this, e)] : t
        };
        te.prototype.__iterate = function(e, t) {
            for (var n = this._array, r = n.length - 1, i = 0; i <= r; i++)
                if (!1 === e(n[t ? r - i : i], i, this)) return i + 1;
            return i
        };
        te.prototype.__iterator = function(e, t) {
            var n = this._array,
                r = n.length - 1,
                i = 0;
            return new D(function() {
                return i > r ? G() : H(e, i, n[t ? r - i++ : i++])
            })
        };
        t(ne, J);

        function ne(e) {
            var t = Object.keys(e);
            this._object = e;
            this._keys = t;
            this.size = t.length
        }
        ne.prototype.get = function(e, t) {
            return void 0 === t || this.has(e) ? this._object[e] : t
        };
        ne.prototype.has = function(e) {
            return this._object.hasOwnProperty(e)
        };
        ne.prototype.__iterate = function(e, t) {
            for (var n = this._object, r = this._keys, i = r.length - 1, o = 0; o <= i; o++) {
                var s = r[t ? i - o : o];
                if (!1 === e(n[s], s, this)) return o + 1
            }
            return o
        };
        ne.prototype.__iterator = function(e, t) {
            var n = this._object,
                r = this._keys,
                i = r.length - 1,
                o = 0;
            return new D(function() {
                var s = r[t ? i - o : o];
                return o++ > i ? G() : H(e, s, n[s])
            })
        };
        ne.prototype[d] = !0;
        t(re, Y);

        function re(e) {
            this._iterable = e;
            this.size = e.length || e.size
        }
        re.prototype.__iterateUncached = function(e, t) {
            if (t) return this.cacheResult().__iterate(e, t);
            var n = F(this._iterable),
                r = 0;
            if (z(n))
                for (var i; !(i = n.next()).done && !1 !== e(i.value, r++, this););
            return r
        };
        re.prototype.__iteratorUncached = function(e, t) {
            if (t) return this.cacheResult().__iterator(e, t);
            var n = F(this._iterable);
            if (!z(n)) return new D(G);
            var r = 0;
            return new D(function() {
                var t = n.next();
                return t.done ? t : H(e, r++, t.value)
            })
        };
        t(ie, Y);

        function ie(e) {
            this._iterator = e;
            this._iteratorCache = []
        }
        ie.prototype.__iterateUncached = function(e, t) {
            if (t) return this.cacheResult().__iterate(e, t);
            for (var n, r = this._iterator, i = this._iteratorCache, o = 0; o < i.length;)
                if (!1 === e(i[o], o++, this)) return o;
            for (; !(n = r.next()).done;) {
                var s = n.value;
                i[o] = s;
                if (!1 === e(s, o++, this)) break
            }
            return o
        };
        ie.prototype.__iteratorUncached = function(e, t) {
            if (t) return this.cacheResult().__iterator(e, t);
            var n = this._iterator,
                r = this._iteratorCache,
                i = 0;
            return new D(function() {
                if (i >= r.length) {
                    var t = n.next();
                    if (t.done) return t;
                    r[i] = t.value
                }
                return H(e, i, r[i++])
            })
        };

        function oe(e) {
            return !(!e || !e[ee])
        }

        function se() {
            return X || (X = new te([]))
        }

        function ae(e) {
            var t = Array.isArray(e) ? new te(e).fromEntrySeq() : z(e) ? new ie(e).fromEntrySeq() : B(e) ? new re(e).fromEntrySeq() : "object" == typeof e ? new ne(e) : void 0;
            if (!t) throw new TypeError("Expected Array or iterable object of [k, v] entries, or keyed object: " + e);
            return t
        }

        function ue(e) {
            var t = le(e);
            if (!t) throw new TypeError("Expected Array or iterable object of values: " + e);
            return t
        }

        function ce(e) {
            var t = le(e) || "object" == typeof e && new ne(e);
            if (!t) throw new TypeError("Expected Array or iterable object of values, or keyed object: " + e);
            return t
        }

        function le(e) {
            return V(e) ? new te(e) : z(e) ? new ie(e) : B(e) ? new re(e) : void 0
        }

        function fe(e, t, n, r) {
            var i = e._cache;
            if (i) {
                for (var o = i.length - 1, s = 0; s <= o; s++) {
                    var a = i[n ? o - s : s];
                    if (!1 === t(a[1], r ? a[0] : s, e)) return s + 1
                }
                return s
            }
            return e.__iterateUncached(t, n)
        }

        function he(e, t, n, r) {
            var i = e._cache;
            if (i) {
                var o = i.length - 1,
                    s = 0;
                return new D(function() {
                    var e = i[n ? o - s : s];
                    return s++ > o ? G() : H(t, r ? e[0] : s - 1, e[1])
                })
            }
            return e.__iteratorUncached(t, n)
        }

        function pe(e, t) {
            return t ? de(t, e, "", {
                "": e
            }) : ge(e)
        }

        function de(e, t, n, r) {
            return Array.isArray(t) ? e.call(r, n, Y(t).map(function(n, r) {
                return de(e, n, r, t)
            })) : ve(t) ? e.call(r, n, J(t).map(function(n, r) {
                return de(e, n, r, t)
            })) : t
        }

        function ge(e) {
            return Array.isArray(e) ? Y(e).map(ge).toList() : ve(e) ? J(e).map(ge).toMap() : e
        }

        function ve(e) {
            return e && (e.constructor === Object || void 0 === e.constructor)
        }

        function ye(e, t) {
            if (e === t || e != e && t != t) return !0;
            if (!e || !t) return !1;
            if ("function" == typeof e.valueOf && "function" == typeof t.valueOf) {
                if ((e = e.valueOf()) === (t = t.valueOf()) || e != e && t != t) return !0;
                if (!e || !t) return !1
            }
            return !("function" != typeof e.equals || "function" != typeof t.equals || !e.equals(t))
        }

        function me(e, t) {
            if (e === t) return !0;
            if (!s(t) || void 0 !== e.size && void 0 !== t.size && e.size !== t.size || void 0 !== e.__hash && void 0 !== t.__hash && e.__hash !== t.__hash || a(e) !== a(t) || u(e) !== u(t) || l(e) !== l(t)) return !1;
            if (0 === e.size && 0 === t.size) return !0;
            var n = !c(e);
            if (l(e)) {
                var r = e.entries();
                return t.every(function(e, t) {
                    var i = r.next().value;
                    return i && ye(i[1], e) && (n || ye(i[0], t))
                }) && r.next().done
            }
            var i = !1;
            if (void 0 === e.size)
                if (void 0 === t.size) "function" == typeof e.cacheResult && e.cacheResult();
                else {
                    i = !0;
                    var o = e;
                    e = t;
                    t = o
                } var f = !0,
                h = t.__iterate(function(t, r) {
                    if (n ? !e.has(t) : i ? !ye(t, e.get(r, _)) : !ye(e.get(r, _), t)) {
                        f = !1;
                        return !1
                    }
                });
            return f && e.size === h
        }
        t(_e, Y);

        function _e(e, t) {
            if (!(this instanceof _e)) return new _e(e, t);
            this._value = e;
            this.size = void 0 === t ? 1 / 0 : Math.max(0, t);
            if (0 === this.size) {
                if ($) return $;
                $ = this
            }
        }
        _e.prototype.toString = function() {
            return 0 === this.size ? "Repeat []" : "Repeat [ " + this._value + " " + this.size + " times ]"
        };
        _e.prototype.get = function(e, t) {
            return this.has(e) ? this._value : t
        };
        _e.prototype.includes = function(e) {
            return ye(this._value, e)
        };
        _e.prototype.slice = function(e, t) {
            var n = this.size;
            return R(e, t, n) ? this : new _e(this._value, M(t, n) - C(e, n))
        };
        _e.prototype.reverse = function() {
            return this
        };
        _e.prototype.indexOf = function(e) {
            return ye(this._value, e) ? 0 : -1
        };
        _e.prototype.lastIndexOf = function(e) {
            return ye(this._value, e) ? this.size : -1
        };
        _e.prototype.__iterate = function(e, t) {
            for (var n = 0; n < this.size; n++)
                if (!1 === e(this._value, n, this)) return n + 1;
            return n
        };
        _e.prototype.__iterator = function(e, t) {
            var n = this,
                r = 0;
            return new D(function() {
                return r < n.size ? H(e, r++, n._value) : G()
            })
        };
        _e.prototype.equals = function(e) {
            return e instanceof _e ? ye(this._value, e._value) : me(e)
        };

        function be(e, t) {
            if (!e) throw new Error(t)
        }
        t(Oe, Y);

        function Oe(e, t, n) {
            if (!(this instanceof Oe)) return new Oe(e, t, n);
            be(0 !== n, "Cannot step a Range by 0");
            e = e || 0;
            void 0 === t && (t = 1 / 0);
            n = void 0 === n ? 1 : Math.abs(n);
            t < e && (n = -n);
            this._start = e;
            this._end = t;
            this._step = n;
            this.size = Math.max(0, Math.ceil((t - e) / n - 1) + 1);
            if (0 === this.size) {
                if (Z) return Z;
                Z = this
            }
        }
        Oe.prototype.toString = function() {
            return 0 === this.size ? "Range []" : "Range [ " + this._start + "..." + this._end + (1 !== this._step ? " by " + this._step : "") + " ]"
        };
        Oe.prototype.get = function(e, t) {
            return this.has(e) ? this._start + k(this, e) * this._step : t
        };
        Oe.prototype.includes = function(e) {
            var t = (e - this._start) / this._step;
            return t >= 0 && t < this.size && t === Math.floor(t)
        };
        Oe.prototype.slice = function(e, t) {
            if (R(e, t, this.size)) return this;
            e = C(e, this.size);
            return (t = M(t, this.size)) <= e ? new Oe(0, 0) : new Oe(this.get(e, this._end), this.get(t, this._end), this._step)
        };
        Oe.prototype.indexOf = function(e) {
            var t = e - this._start;
            if (t % this._step == 0) {
                var n = t / this._step;
                if (n >= 0 && n < this.size) return n
            }
            return -1
        };
        Oe.prototype.lastIndexOf = function(e) {
            return this.indexOf(e)
        };
        Oe.prototype.__iterate = function(e, t) {
            for (var n = this.size - 1, r = this._step, i = t ? this._start + n * r : this._start, o = 0; o <= n; o++) {
                if (!1 === e(i, o, this)) return o + 1;
                i += t ? -r : r
            }
            return o
        };
        Oe.prototype.__iterator = function(e, t) {
            var n = this.size - 1,
                r = this._step,
                i = t ? this._start + n * r : this._start,
                o = 0;
            return new D(function() {
                var s = i;
                i += t ? -r : r;
                return o > n ? G() : H(e, o++, s)
            })
        };
        Oe.prototype.equals = function(e) {
            return e instanceof Oe ? this._start === e._start && this._end === e._end && this._step === e._step : me(this, e)
        };
        t(we, n);

        function we() {
            throw TypeError("Abstract")
        }
        t(Se, we);

        function Se() {}
        t(Ie, we);

        function Ie() {}
        t(Ee, we);

        function Ee() {}
        we.Keyed = Se;
        we.Indexed = Ie;
        we.Set = Ee;
        var Ae = "function" == typeof Math.imul && -2 === Math.imul(4294967295, 2) ? Math.imul : function(e, t) {
            var n = 65535 & (e |= 0),
                r = 65535 & (t |= 0);
            return n * r + ((e >>> 16) * r + n * (t >>> 16) << 16 >>> 0) | 0
        };

        function ke(e) {
            return e >>> 1 & 1073741824 | 3221225471 & e
        }

        function Te(e) {
            if (!1 === e || null === e || void 0 === e) return 0;
            if ("function" == typeof e.valueOf && (!1 === (e = e.valueOf()) || null === e || void 0 === e)) return 0;
            if (!0 === e) return 1;
            var t = typeof e;
            if ("number" === t) {
                if (e != e || e === 1 / 0) return 0;
                var n = 0 | e;
                n !== e && (n ^= 4294967295 * e);
                for (; e > 4294967295;) n ^= e /= 4294967295;
                return ke(n)
            }
            if ("string" === t) return e.length > De ? Re(e) : Ce(e);
            if ("function" == typeof e.hashCode) return e.hashCode();
            if ("object" === t) return Me(e);
            if ("function" == typeof e.toString) return Ce(e.toString());
            throw new Error("Value type " + t + " cannot be hashed.")
        }

        function Re(e) {
            var t = Be[e];
            if (void 0 === t) {
                t = Ce(e);
                if (Ge === He) {
                    Ge = 0;
                    Be = {}
                }
                Ge++;
                Be[e] = t
            }
            return t
        }

        function Ce(e) {
            for (var t = 0, n = 0; n < e.length; n++) t = 31 * t + e.charCodeAt(n) | 0;
            return ke(t)
        }

        function Me(e) {
            var t;
            if (Ue && void 0 !== (t = Ne.get(e))) return t;
            if (void 0 !== (t = e[qe])) return t;
            if (!xe) {
                if (void 0 !== (t = e.propertyIsEnumerable && e.propertyIsEnumerable[qe])) return t;
                if (void 0 !== (t = Le(e))) return t
            }
            t = ++je;
            1073741824 & je && (je = 0);
            if (Ue) Ne.set(e, t);
            else {
                if (void 0 !== Pe && !1 === Pe(e)) throw new Error("Non-extensible objects are not allowed as keys.");
                if (xe) Object.defineProperty(e, qe, {
                    enumerable: !1,
                    configurable: !1,
                    writable: !1,
                    value: t
                });
                else if (void 0 !== e.propertyIsEnumerable && e.propertyIsEnumerable === e.constructor.prototype.propertyIsEnumerable) {
                    e.propertyIsEnumerable = function() {
                        return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments)
                    };
                    e.propertyIsEnumerable[qe] = t
                } else {
                    if (void 0 === e.nodeType) throw new Error("Unable to set a non-enumerable property on object.");
                    e[qe] = t
                }
            }
            return t
        }
        var Pe = Object.isExtensible,
            xe = function() {
                try {
                    Object.defineProperty({}, "@", {});
                    return !0
                } catch (e) {
                    return !1
                }
            }();

        function Le(e) {
            if (e && e.nodeType > 0) switch (e.nodeType) {
                case 1:
                    return e.uniqueID;
                case 9:
                    return e.documentElement && e.documentElement.uniqueID
            }
        }
        var Ne, Ue = "function" == typeof WeakMap;
        Ue && (Ne = new WeakMap);
        var je = 0,
            qe = "__immutablehash__";
        "function" == typeof Symbol && (qe = Symbol(qe));
        var De = 16,
            He = 255,
            Ge = 0,
            Be = {};

        function ze(e) {
            be(e !== 1 / 0, "Cannot perform this action with an infinite size.")
        }
        t(Fe, Se);

        function Fe(e) {
            return null === e || void 0 === e ? it() : Ke(e) && !l(e) ? e : it().withMutations(function(t) {
                var n = r(e);
                ze(n.size);
                n.forEach(function(e, n) {
                    return t.set(n, e)
                })
            })
        }
        Fe.of = function() {
            var t = e.call(arguments, 0);
            return it().withMutations(function(e) {
                for (var n = 0; n < t.length; n += 2) {
                    if (n + 1 >= t.length) throw new Error("Missing value for key: " + t[n]);
                    e.set(t[n], t[n + 1])
                }
            })
        };
        Fe.prototype.toString = function() {
            return this.__toString("Map {", "}")
        };
        Fe.prototype.get = function(e, t) {
            return this._root ? this._root.get(0, void 0, e, t) : t
        };
        Fe.prototype.set = function(e, t) {
            return ot(this, e, t)
        };
        Fe.prototype.setIn = function(e, t) {
            return this.updateIn(e, _, function() {
                return t
            })
        };
        Fe.prototype.remove = function(e) {
            return ot(this, e, _)
        };
        Fe.prototype.deleteIn = function(e) {
            return this.updateIn(e, function() {
                return _
            })
        };
        Fe.prototype.update = function(e, t, n) {
            return 1 === arguments.length ? e(this) : this.updateIn([e], t, n)
        };
        Fe.prototype.updateIn = function(e, t, n) {
            if (!n) {
                n = t;
                t = void 0
            }
            var r = vt(this, wn(e), t, n);
            return r === _ ? void 0 : r
        };
        Fe.prototype.clear = function() {
            if (0 === this.size) return this;
            if (this.__ownerID) {
                this.size = 0;
                this._root = null;
                this.__hash = void 0;
                this.__altered = !0;
                return this
            }
            return it()
        };
        Fe.prototype.merge = function() {
            return ht(this, void 0, arguments)
        };
        Fe.prototype.mergeWith = function(t) {
            return ht(this, t, e.call(arguments, 1))
        };
        Fe.prototype.mergeIn = function(t) {
            var n = e.call(arguments, 1);
            return this.updateIn(t, it(), function(e) {
                return "function" == typeof e.merge ? e.merge.apply(e, n) : n[n.length - 1]
            })
        };
        Fe.prototype.mergeDeep = function() {
            return ht(this, pt, arguments)
        };
        Fe.prototype.mergeDeepWith = function(t) {
            var n = e.call(arguments, 1);
            return ht(this, dt(t), n)
        };
        Fe.prototype.mergeDeepIn = function(t) {
            var n = e.call(arguments, 1);
            return this.updateIn(t, it(), function(e) {
                return "function" == typeof e.mergeDeep ? e.mergeDeep.apply(e, n) : n[n.length - 1]
            })
        };
        Fe.prototype.sort = function(e) {
            return Bt(fn(this, e))
        };
        Fe.prototype.sortBy = function(e, t) {
            return Bt(fn(this, t, e))
        };
        Fe.prototype.withMutations = function(e) {
            var t = this.asMutable();
            e(t);
            return t.wasAltered() ? t.__ensureOwner(this.__ownerID) : this
        };
        Fe.prototype.asMutable = function() {
            return this.__ownerID ? this : this.__ensureOwner(new I)
        };
        Fe.prototype.asImmutable = function() {
            return this.__ensureOwner()
        };
        Fe.prototype.wasAltered = function() {
            return this.__altered
        };
        Fe.prototype.__iterator = function(e, t) {
            return new et(this, e, t)
        };
        Fe.prototype.__iterate = function(e, t) {
            var n = this,
                r = 0;
            this._root && this._root.iterate(function(t) {
                r++;
                return e(t[1], t[0], n)
            }, t);
            return r
        };
        Fe.prototype.__ensureOwner = function(e) {
            if (e === this.__ownerID) return this;
            if (!e) {
                this.__ownerID = e;
                this.__altered = !1;
                return this
            }
            return rt(this.size, this._root, e, this.__hash)
        };

        function Ke(e) {
            return !(!e || !e[We])
        }
        Fe.isMap = Ke;
        var Ve, We = "@@__IMMUTABLE_MAP__@@",
            Je = Fe.prototype;
        Je[We] = !0;
        Je[g] = Je.remove;
        Je.removeIn = Je.deleteIn;

        function Ye(e, t) {
            this.ownerID = e;
            this.entries = t
        }
        Ye.prototype.get = function(e, t, n, r) {
            for (var i = this.entries, o = 0, s = i.length; o < s; o++)
                if (ye(n, i[o][0])) return i[o][1];
            return r
        };
        Ye.prototype.update = function(e, t, n, r, i, o, s) {
            for (var a = i === _, u = this.entries, c = 0, l = u.length; c < l && !ye(r, u[c][0]); c++);
            var f = c < l;
            if (f ? u[c][1] === i : a) return this;
            S(s);
            (a || !f) && S(o);
            if (!a || 1 !== u.length) {
                if (!f && !a && u.length >= Ot) return ct(e, u, r, i);
                var h = e && e === this.ownerID,
                    p = h ? u : E(u);
                f ? a ? c === l - 1 ? p.pop() : p[c] = p.pop() : p[c] = [r, i] : p.push([r, i]);
                if (h) {
                    this.entries = p;
                    return this
                }
                return new Ye(e, p)
            }
        };

        function Qe(e, t, n) {
            this.ownerID = e;
            this.bitmap = t;
            this.nodes = n
        }
        Qe.prototype.get = function(e, t, n, r) {
            void 0 === t && (t = Te(n));
            var i = 1 << ((0 === e ? t : t >>> e) & m),
                o = this.bitmap;
            return 0 == (o & i) ? r : this.nodes[yt(o & i - 1)].get(e + v, t, n, r)
        };
        Qe.prototype.update = function(e, t, n, r, i, o, s) {
            void 0 === n && (n = Te(r));
            var a = (0 === t ? n : n >>> t) & m,
                u = 1 << a,
                c = this.bitmap,
                l = 0 != (c & u);
            if (!l && i === _) return this;
            var f = yt(c & u - 1),
                h = this.nodes,
                p = l ? h[f] : void 0,
                d = st(p, e, t + v, n, r, i, o, s);
            if (d === p) return this;
            if (!l && d && h.length >= wt) return ft(e, h, c, a, d);
            if (l && !d && 2 === h.length && at(h[1 ^ f])) return h[1 ^ f];
            if (l && d && 1 === h.length && at(d)) return d;
            var g = e && e === this.ownerID,
                y = l ? d ? c : c ^ u : c | u,
                b = l ? d ? mt(h, f, d, g) : bt(h, f, g) : _t(h, f, d, g);
            if (g) {
                this.bitmap = y;
                this.nodes = b;
                return this
            }
            return new Qe(e, y, b)
        };

        function Xe(e, t, n) {
            this.ownerID = e;
            this.count = t;
            this.nodes = n
        }
        Xe.prototype.get = function(e, t, n, r) {
            void 0 === t && (t = Te(n));
            var i = (0 === e ? t : t >>> e) & m,
                o = this.nodes[i];
            return o ? o.get(e + v, t, n, r) : r
        };
        Xe.prototype.update = function(e, t, n, r, i, o, s) {
            void 0 === n && (n = Te(r));
            var a = (0 === t ? n : n >>> t) & m,
                u = i === _,
                c = this.nodes,
                l = c[a];
            if (u && !l) return this;
            var f = st(l, e, t + v, n, r, i, o, s);
            if (f === l) return this;
            var h = this.count;
            if (l) {
                if (!f && --h < St) return lt(e, c, h, a)
            } else h++;
            var p = e && e === this.ownerID,
                d = mt(c, a, f, p);
            if (p) {
                this.count = h;
                this.nodes = d;
                return this
            }
            return new Xe(e, h, d)
        };

        function $e(e, t, n) {
            this.ownerID = e;
            this.keyHash = t;
            this.entries = n
        }
        $e.prototype.get = function(e, t, n, r) {
            for (var i = this.entries, o = 0, s = i.length; o < s; o++)
                if (ye(n, i[o][0])) return i[o][1];
            return r
        };
        $e.prototype.update = function(e, t, n, r, i, o, s) {
            void 0 === n && (n = Te(r));
            var a = i === _;
            if (n !== this.keyHash) {
                if (a) return this;
                S(s);
                S(o);
                return ut(this, e, t, n, [r, i])
            }
            for (var u = this.entries, c = 0, l = u.length; c < l && !ye(r, u[c][0]); c++);
            var f = c < l;
            if (f ? u[c][1] === i : a) return this;
            S(s);
            (a || !f) && S(o);
            if (a && 2 === l) return new Ze(e, this.keyHash, u[1 ^ c]);
            var h = e && e === this.ownerID,
                p = h ? u : E(u);
            f ? a ? c === l - 1 ? p.pop() : p[c] = p.pop() : p[c] = [r, i] : p.push([r, i]);
            if (h) {
                this.entries = p;
                return this
            }
            return new $e(e, this.keyHash, p)
        };

        function Ze(e, t, n) {
            this.ownerID = e;
            this.keyHash = t;
            this.entry = n
        }
        Ze.prototype.get = function(e, t, n, r) {
            return ye(n, this.entry[0]) ? this.entry[1] : r
        };
        Ze.prototype.update = function(e, t, n, r, i, o, s) {
            var a = i === _,
                u = ye(r, this.entry[0]);
            if (u ? i === this.entry[1] : a) return this;
            S(s);
            if (!a) {
                if (u) {
                    if (e && e === this.ownerID) {
                        this.entry[1] = i;
                        return this
                    }
                    return new Ze(e, this.keyHash, [r, i])
                }
                S(o);
                return ut(this, e, t, Te(r), [r, i])
            }
            S(o)
        };
        Ye.prototype.iterate = $e.prototype.iterate = function(e, t) {
            for (var n = this.entries, r = 0, i = n.length - 1; r <= i; r++)
                if (!1 === e(n[t ? i - r : r])) return !1
        };
        Qe.prototype.iterate = Xe.prototype.iterate = function(e, t) {
            for (var n = this.nodes, r = 0, i = n.length - 1; r <= i; r++) {
                var o = n[t ? i - r : r];
                if (o && !1 === o.iterate(e, t)) return !1
            }
        };
        Ze.prototype.iterate = function(e, t) {
            return e(this.entry)
        };
        t(et, D);

        function et(e, t, n) {
            this._type = t;
            this._reverse = n;
            this._stack = e._root && nt(e._root)
        }
        et.prototype.next = function() {
            for (var e = this._type, t = this._stack; t;) {
                var n, r = t.node,
                    i = t.index++;
                if (r.entry) {
                    if (0 === i) return tt(e, r.entry)
                } else if (r.entries) {
                    if (i <= (n = r.entries.length - 1)) return tt(e, r.entries[this._reverse ? n - i : i])
                } else if (i <= (n = r.nodes.length - 1)) {
                    var o = r.nodes[this._reverse ? n - i : i];
                    if (o) {
                        if (o.entry) return tt(e, o.entry);
                        t = this._stack = nt(o, t)
                    }
                    continue
                }
                t = this._stack = this._stack.__prev
            }
            return G()
        };

        function tt(e, t) {
            return H(e, t[0], t[1])
        }

        function nt(e, t) {
            return {
                node: e,
                index: 0,
                __prev: t
            }
        }

        function rt(e, t, n, r) {
            var i = Object.create(Je);
            i.size = e;
            i._root = t;
            i.__ownerID = n;
            i.__hash = r;
            i.__altered = !1;
            return i
        }

        function it() {
            return Ve || (Ve = rt(0))
        }

        function ot(e, t, n) {
            var r, i;
            if (e._root) {
                var o = w(b),
                    s = w(O);
                r = st(e._root, e.__ownerID, 0, void 0, t, n, o, s);
                if (!s.value) return e;
                i = e.size + (o.value ? n === _ ? -1 : 1 : 0)
            } else {
                if (n === _) return e;
                i = 1;
                r = new Ye(e.__ownerID, [
                    [t, n]
                ])
            }
            if (e.__ownerID) {
                e.size = i;
                e._root = r;
                e.__hash = void 0;
                e.__altered = !0;
                return e
            }
            return r ? rt(i, r) : it()
        }

        function st(e, t, n, r, i, o, s, a) {
            if (!e) {
                if (o === _) return e;
                S(a);
                S(s);
                return new Ze(t, r, [i, o])
            }
            return e.update(t, n, r, i, o, s, a)
        }

        function at(e) {
            return e.constructor === Ze || e.constructor === $e
        }

        function ut(e, t, n, r, i) {
            if (e.keyHash === r) return new $e(t, r, [e.entry, i]);
            var o, s = (0 === n ? e.keyHash : e.keyHash >>> n) & m,
                a = (0 === n ? r : r >>> n) & m;
            return new Qe(t, 1 << s | 1 << a, s === a ? [ut(e, t, n + v, r, i)] : (o = new Ze(t, r, i), s < a ? [e, o] : [o, e]))
        }

        function ct(e, t, n, r) {
            e || (e = new I);
            for (var i = new Ze(e, Te(n), [n, r]), o = 0; o < t.length; o++) {
                var s = t[o];
                i = i.update(e, 0, void 0, s[0], s[1])
            }
            return i
        }

        function lt(e, t, n, r) {
            for (var i = 0, o = 0, s = new Array(n), a = 0, u = 1, c = t.length; a < c; a++, u <<= 1) {
                var l = t[a];
                if (void 0 !== l && a !== r) {
                    i |= u;
                    s[o++] = l
                }
            }
            return new Qe(e, i, s)
        }

        function ft(e, t, n, r, i) {
            for (var o = 0, s = new Array(y), a = 0; 0 !== n; a++, n >>>= 1) s[a] = 1 & n ? t[o++] : void 0;
            s[r] = i;
            return new Xe(e, o + 1, s)
        }

        function ht(e, t, n) {
            for (var i = [], o = 0; o < n.length; o++) {
                var a = n[o],
                    u = r(a);
                s(a) || (u = u.map(function(e) {
                    return pe(e)
                }));
                i.push(u)
            }
            return gt(e, t, i)
        }

        function pt(e, t, n) {
            return e && e.mergeDeep && s(t) ? e.mergeDeep(t) : ye(e, t) ? e : t
        }

        function dt(e) {
            return function(t, n, r) {
                if (t && t.mergeDeepWith && s(n)) return t.mergeDeepWith(e, n);
                var i = e(t, n, r);
                return ye(t, i) ? t : i
            }
        }

        function gt(e, t, n) {
            return 0 === (n = n.filter(function(e) {
                return 0 !== e.size
            })).length ? e : 0 !== e.size || e.__ownerID || 1 !== n.length ? e.withMutations(function(e) {
                for (var r = t ? function(n, r) {
                        e.update(r, _, function(e) {
                            return e === _ ? n : t(e, n, r)
                        })
                    } : function(t, n) {
                        e.set(n, t)
                    }, i = 0; i < n.length; i++) n[i].forEach(r)
            }) : e.constructor(n[0])
        }

        function vt(e, t, n, r) {
            var i = e === _,
                o = t.next();
            if (o.done) {
                var s = i ? n : e,
                    a = r(s);
                return a === s ? e : a
            }
            be(i || e && e.set, "invalid keyPath");
            var u = o.value,
                c = i ? _ : e.get(u, _),
                l = vt(c, t, n, r);
            return l === c ? e : l === _ ? e.remove(u) : (i ? it() : e).set(u, l)
        }

        function yt(e) {
            e = (e = (858993459 & (e -= e >> 1 & 1431655765)) + (e >> 2 & 858993459)) + (e >> 4) & 252645135;
            e += e >> 8;
            return 127 & (e += e >> 16)
        }

        function mt(e, t, n, r) {
            var i = r ? e : E(e);
            i[t] = n;
            return i
        }

        function _t(e, t, n, r) {
            var i = e.length + 1;
            if (r && t + 1 === i) {
                e[t] = n;
                return e
            }
            for (var o = new Array(i), s = 0, a = 0; a < i; a++)
                if (a === t) {
                    o[a] = n;
                    s = -1
                } else o[a] = e[a + s];
            return o
        }

        function bt(e, t, n) {
            var r = e.length - 1;
            if (n && t === r) {
                e.pop();
                return e
            }
            for (var i = new Array(r), o = 0, s = 0; s < r; s++) {
                s === t && (o = 1);
                i[s] = e[s + o]
            }
            return i
        }
        var Ot = y / 4,
            wt = y / 2,
            St = y / 4;
        t(It, Ie);

        function It(e) {
            var t = Lt();
            if (null === e || void 0 === e) return t;
            if (Et(e)) return e;
            var n = i(e),
                r = n.size;
            if (0 === r) return t;
            ze(r);
            return r > 0 && r < y ? xt(0, r, v, null, new Tt(n.toArray())) : t.withMutations(function(e) {
                e.setSize(r);
                n.forEach(function(t, n) {
                    return e.set(n, t)
                })
            })
        }
        It.of = function() {
            return this(arguments)
        };
        It.prototype.toString = function() {
            return this.__toString("List [", "]")
        };
        It.prototype.get = function(e, t) {
            if ((e = k(this, e)) >= 0 && e < this.size) {
                var n = qt(this, e += this._origin);
                return n && n.array[e & m]
            }
            return t
        };
        It.prototype.set = function(e, t) {
            return Nt(this, e, t)
        };
        It.prototype.remove = function(e) {
            return this.has(e) ? 0 === e ? this.shift() : e === this.size - 1 ? this.pop() : this.splice(e, 1) : this
        };
        It.prototype.insert = function(e, t) {
            return this.splice(e, 0, t)
        };
        It.prototype.clear = function() {
            if (0 === this.size) return this;
            if (this.__ownerID) {
                this.size = this._origin = this._capacity = 0;
                this._level = v;
                this._root = this._tail = null;
                this.__hash = void 0;
                this.__altered = !0;
                return this
            }
            return Lt()
        };
        It.prototype.push = function() {
            var e = arguments,
                t = this.size;
            return this.withMutations(function(n) {
                Dt(n, 0, t + e.length);
                for (var r = 0; r < e.length; r++) n.set(t + r, e[r])
            })
        };
        It.prototype.pop = function() {
            return Dt(this, 0, -1)
        };
        It.prototype.unshift = function() {
            var e = arguments;
            return this.withMutations(function(t) {
                Dt(t, -e.length);
                for (var n = 0; n < e.length; n++) t.set(n, e[n])
            })
        };
        It.prototype.shift = function() {
            return Dt(this, 1)
        };
        It.prototype.merge = function() {
            return Ht(this, void 0, arguments)
        };
        It.prototype.mergeWith = function(t) {
            return Ht(this, t, e.call(arguments, 1))
        };
        It.prototype.mergeDeep = function() {
            return Ht(this, pt, arguments)
        };
        It.prototype.mergeDeepWith = function(t) {
            var n = e.call(arguments, 1);
            return Ht(this, dt(t), n)
        };
        It.prototype.setSize = function(e) {
            return Dt(this, 0, e)
        };
        It.prototype.slice = function(e, t) {
            var n = this.size;
            return R(e, t, n) ? this : Dt(this, C(e, n), M(t, n))
        };
        It.prototype.__iterator = function(e, t) {
            var n = 0,
                r = Pt(this, t);
            return new D(function() {
                var t = r();
                return t === Mt ? G() : H(e, n++, t)
            })
        };
        It.prototype.__iterate = function(e, t) {
            for (var n, r = 0, i = Pt(this, t);
                (n = i()) !== Mt && !1 !== e(n, r++, this););
            return r
        };
        It.prototype.__ensureOwner = function(e) {
            if (e === this.__ownerID) return this;
            if (!e) {
                this.__ownerID = e;
                return this
            }
            return xt(this._origin, this._capacity, this._level, this._root, this._tail, e, this.__hash)
        };

        function Et(e) {
            return !(!e || !e[At])
        }
        It.isList = Et;
        var At = "@@__IMMUTABLE_LIST__@@",
            kt = It.prototype;
        kt[At] = !0;
        kt[g] = kt.remove;
        kt.setIn = Je.setIn;
        kt.deleteIn = kt.removeIn = Je.removeIn;
        kt.update = Je.update;
        kt.updateIn = Je.updateIn;
        kt.mergeIn = Je.mergeIn;
        kt.mergeDeepIn = Je.mergeDeepIn;
        kt.withMutations = Je.withMutations;
        kt.asMutable = Je.asMutable;
        kt.asImmutable = Je.asImmutable;
        kt.wasAltered = Je.wasAltered;

        function Tt(e, t) {
            this.array = e;
            this.ownerID = t
        }
        Tt.prototype.removeBefore = function(e, t, n) {
            if (n === t ? 1 << t : 0 === this.array.length) return this;
            var r = n >>> t & m;
            if (r >= this.array.length) return new Tt([], e);
            var i, o = 0 === r;
            if (t > 0) {
                var s = this.array[r];
                if ((i = s && s.removeBefore(e, t - v, n)) === s && o) return this
            }
            if (o && !i) return this;
            var a = jt(this, e);
            if (!o)
                for (var u = 0; u < r; u++) a.array[u] = void 0;
            i && (a.array[r] = i);
            return a
        };
        Tt.prototype.removeAfter = function(e, t, n) {
            if (n === (t ? 1 << t : 0) || 0 === this.array.length) return this;
            var r, i = n - 1 >>> t & m;
            if (i >= this.array.length) return this;
            if (t > 0) {
                var o = this.array[i];
                if ((r = o && o.removeAfter(e, t - v, n)) === o && i === this.array.length - 1) return this
            }
            var s = jt(this, e);
            s.array.splice(i + 1);
            r && (s.array[i] = r);
            return s
        };
        var Rt, Ct, Mt = {};

        function Pt(e, t) {
            var n = e._origin,
                r = e._capacity,
                i = Gt(r),
                o = e._tail;
            return s(e._root, e._level, 0);

            function s(e, t, n) {
                return 0 === t ? a(e, n) : u(e, t, n)
            }

            function a(e, s) {
                var a = s === i ? o && o.array : e && e.array,
                    u = s > n ? 0 : n - s,
                    c = r - s;
                c > y && (c = y);
                return function() {
                    if (u === c) return Mt;
                    var e = t ? --c : u++;
                    return a && a[e]
                }
            }

            function u(e, i, o) {
                var a, u = e && e.array,
                    c = o > n ? 0 : n - o >> i,
                    l = 1 + (r - o >> i);
                l > y && (l = y);
                return function() {
                    for (;;) {
                        if (a) {
                            var e = a();
                            if (e !== Mt) return e;
                            a = null
                        }
                        if (c === l) return Mt;
                        var n = t ? --l : c++;
                        a = s(u && u[n], i - v, o + (n << i))
                    }
                }
            }
        }

        function xt(e, t, n, r, i, o, s) {
            var a = Object.create(kt);
            a.size = t - e;
            a._origin = e;
            a._capacity = t;
            a._level = n;
            a._root = r;
            a._tail = i;
            a.__ownerID = o;
            a.__hash = s;
            a.__altered = !1;
            return a
        }

        function Lt() {
            return Rt || (Rt = xt(0, 0, v))
        }

        function Nt(e, t, n) {
            if ((t = k(e, t)) != t) return e;
            if (t >= e.size || t < 0) return e.withMutations(function(e) {
                t < 0 ? Dt(e, t).set(0, n) : Dt(e, 0, t + 1).set(t, n)
            });
            t += e._origin;
            var r = e._tail,
                i = e._root,
                o = w(O);
            t >= Gt(e._capacity) ? r = Ut(r, e.__ownerID, 0, t, n, o) : i = Ut(i, e.__ownerID, e._level, t, n, o);
            if (!o.value) return e;
            if (e.__ownerID) {
                e._root = i;
                e._tail = r;
                e.__hash = void 0;
                e.__altered = !0;
                return e
            }
            return xt(e._origin, e._capacity, e._level, i, r)
        }

        function Ut(e, t, n, r, i, o) {
            var s, a = r >>> n & m,
                u = e && a < e.array.length;
            if (!u && void 0 === i) return e;
            if (n > 0) {
                var c = e && e.array[a],
                    l = Ut(c, t, n - v, r, i, o);
                if (l === c) return e;
                (s = jt(e, t)).array[a] = l;
                return s
            }
            if (u && e.array[a] === i) return e;
            S(o);
            s = jt(e, t);
            void 0 === i && a === s.array.length - 1 ? s.array.pop() : s.array[a] = i;
            return s
        }

        function jt(e, t) {
            return t && e && t === e.ownerID ? e : new Tt(e ? e.array.slice() : [], t)
        }

        function qt(e, t) {
            if (t >= Gt(e._capacity)) return e._tail;
            if (t < 1 << e._level + v) {
                for (var n = e._root, r = e._level; n && r > 0;) {
                    n = n.array[t >>> r & m];
                    r -= v
                }
                return n
            }
        }

        function Dt(e, t, n) {
            void 0 !== t && (t |= 0);
            void 0 !== n && (n |= 0);
            var r = e.__ownerID || new I,
                i = e._origin,
                o = e._capacity,
                s = i + t,
                a = void 0 === n ? o : n < 0 ? o + n : i + n;
            if (s === i && a === o) return e;
            if (s >= a) return e.clear();
            for (var u = e._level, c = e._root, l = 0; s + l < 0;) {
                c = new Tt(c && c.array.length ? [void 0, c] : [], r);
                l += 1 << (u += v)
            }
            if (l) {
                s += l;
                i += l;
                a += l;
                o += l
            }
            for (var f = Gt(o), h = Gt(a); h >= 1 << u + v;) {
                c = new Tt(c && c.array.length ? [c] : [], r);
                u += v
            }
            var p = e._tail,
                d = h < f ? qt(e, a - 1) : h > f ? new Tt([], r) : p;
            if (p && h > f && s < o && p.array.length) {
                for (var g = c = jt(c, r), y = u; y > v; y -= v) {
                    var _ = f >>> y & m;
                    g = g.array[_] = jt(g.array[_], r)
                }
                g.array[f >>> v & m] = p
            }
            a < o && (d = d && d.removeAfter(r, 0, a));
            if (s >= h) {
                s -= h;
                a -= h;
                u = v;
                c = null;
                d = d && d.removeBefore(r, 0, s)
            } else if (s > i || h < f) {
                l = 0;
                for (; c;) {
                    var b = s >>> u & m;
                    if (b !== h >>> u & m) break;
                    b && (l += (1 << u) * b);
                    u -= v;
                    c = c.array[b]
                }
                c && s > i && (c = c.removeBefore(r, u, s - l));
                c && h < f && (c = c.removeAfter(r, u, h - l));
                if (l) {
                    s -= l;
                    a -= l
                }
            }
            if (e.__ownerID) {
                e.size = a - s;
                e._origin = s;
                e._capacity = a;
                e._level = u;
                e._root = c;
                e._tail = d;
                e.__hash = void 0;
                e.__altered = !0;
                return e
            }
            return xt(s, a, u, c, d)
        }

        function Ht(e, t, n) {
            for (var r = [], o = 0, a = 0; a < n.length; a++) {
                var u = n[a],
                    c = i(u);
                c.size > o && (o = c.size);
                s(u) || (c = c.map(function(e) {
                    return pe(e)
                }));
                r.push(c)
            }
            o > e.size && (e = e.setSize(o));
            return gt(e, t, r)
        }

        function Gt(e) {
            return e < y ? 0 : e - 1 >>> v << v
        }
        t(Bt, Fe);

        function Bt(e) {
            return null === e || void 0 === e ? Kt() : zt(e) ? e : Kt().withMutations(function(t) {
                var n = r(e);
                ze(n.size);
                n.forEach(function(e, n) {
                    return t.set(n, e)
                })
            })
        }
        Bt.of = function() {
            return this(arguments)
        };
        Bt.prototype.toString = function() {
            return this.__toString("OrderedMap {", "}")
        };
        Bt.prototype.get = function(e, t) {
            var n = this._map.get(e);
            return void 0 !== n ? this._list.get(n)[1] : t
        };
        Bt.prototype.clear = function() {
            if (0 === this.size) return this;
            if (this.__ownerID) {
                this.size = 0;
                this._map.clear();
                this._list.clear();
                return this
            }
            return Kt()
        };
        Bt.prototype.set = function(e, t) {
            return Vt(this, e, t)
        };
        Bt.prototype.remove = function(e) {
            return Vt(this, e, _)
        };
        Bt.prototype.wasAltered = function() {
            return this._map.wasAltered() || this._list.wasAltered()
        };
        Bt.prototype.__iterate = function(e, t) {
            var n = this;
            return this._list.__iterate(function(t) {
                return t && e(t[1], t[0], n)
            }, t)
        };
        Bt.prototype.__iterator = function(e, t) {
            return this._list.fromEntrySeq().__iterator(e, t)
        };
        Bt.prototype.__ensureOwner = function(e) {
            if (e === this.__ownerID) return this;
            var t = this._map.__ensureOwner(e),
                n = this._list.__ensureOwner(e);
            if (!e) {
                this.__ownerID = e;
                this._map = t;
                this._list = n;
                return this
            }
            return Ft(t, n, e, this.__hash)
        };

        function zt(e) {
            return Ke(e) && l(e)
        }
        Bt.isOrderedMap = zt;
        Bt.prototype[d] = !0;
        Bt.prototype[g] = Bt.prototype.remove;

        function Ft(e, t, n, r) {
            var i = Object.create(Bt.prototype);
            i.size = e ? e.size : 0;
            i._map = e;
            i._list = t;
            i.__ownerID = n;
            i.__hash = r;
            return i
        }

        function Kt() {
            return Ct || (Ct = Ft(it(), Lt()))
        }

        function Vt(e, t, n) {
            var r, i, o = e._map,
                s = e._list,
                a = o.get(t),
                u = void 0 !== a;
            if (n === _) {
                if (!u) return e;
                if (s.size >= y && s.size >= 2 * o.size) {
                    r = (i = s.filter(function(e, t) {
                        return void 0 !== e && a !== t
                    })).toKeyedSeq().map(function(e) {
                        return e[0]
                    }).flip().toMap();
                    e.__ownerID && (r.__ownerID = i.__ownerID = e.__ownerID)
                } else {
                    r = o.remove(t);
                    i = a === s.size - 1 ? s.pop() : s.set(a, void 0)
                }
            } else if (u) {
                if (n === s.get(a)[1]) return e;
                r = o;
                i = s.set(a, [t, n])
            } else {
                r = o.set(t, s.size);
                i = s.set(s.size, [t, n])
            }
            if (e.__ownerID) {
                e.size = r.size;
                e._map = r;
                e._list = i;
                e.__hash = void 0;
                return e
            }
            return Ft(r, i)
        }
        t(Wt, J);

        function Wt(e, t) {
            this._iter = e;
            this._useKeys = t;
            this.size = e.size
        }
        Wt.prototype.get = function(e, t) {
            return this._iter.get(e, t)
        };
        Wt.prototype.has = function(e) {
            return this._iter.has(e)
        };
        Wt.prototype.valueSeq = function() {
            return this._iter.valueSeq()
        };
        Wt.prototype.reverse = function() {
            var e = this,
                t = Zt(this, !0);
            this._useKeys || (t.valueSeq = function() {
                return e._iter.toSeq().reverse()
            });
            return t
        };
        Wt.prototype.map = function(e, t) {
            var n = this,
                r = $t(this, e, t);
            this._useKeys || (r.valueSeq = function() {
                return n._iter.toSeq().map(e, t)
            });
            return r
        };
        Wt.prototype.__iterate = function(e, t) {
            var n, r = this;
            return this._iter.__iterate(this._useKeys ? function(t, n) {
                return e(t, n, r)
            } : (n = t ? yn(this) : 0, function(i) {
                return e(i, t ? --n : n++, r)
            }), t)
        };
        Wt.prototype.__iterator = function(e, t) {
            if (this._useKeys) return this._iter.__iterator(e, t);
            var n = this._iter.__iterator(L, t),
                r = t ? yn(this) : 0;
            return new D(function() {
                var i = n.next();
                return i.done ? i : H(e, t ? --r : r++, i.value, i)
            })
        };
        Wt.prototype[d] = !0;
        t(Jt, Y);

        function Jt(e) {
            this._iter = e;
            this.size = e.size
        }
        Jt.prototype.includes = function(e) {
            return this._iter.includes(e)
        };
        Jt.prototype.__iterate = function(e, t) {
            var n = this,
                r = 0;
            return this._iter.__iterate(function(t) {
                return e(t, r++, n)
            }, t)
        };
        Jt.prototype.__iterator = function(e, t) {
            var n = this._iter.__iterator(L, t),
                r = 0;
            return new D(function() {
                var t = n.next();
                return t.done ? t : H(e, r++, t.value, t)
            })
        };
        t(Yt, Q);

        function Yt(e) {
            this._iter = e;
            this.size = e.size
        }
        Yt.prototype.has = function(e) {
            return this._iter.includes(e)
        };
        Yt.prototype.__iterate = function(e, t) {
            var n = this;
            return this._iter.__iterate(function(t) {
                return e(t, t, n)
            }, t)
        };
        Yt.prototype.__iterator = function(e, t) {
            var n = this._iter.__iterator(L, t);
            return new D(function() {
                var t = n.next();
                return t.done ? t : H(e, t.value, t.value, t)
            })
        };
        t(Qt, J);

        function Qt(e) {
            this._iter = e;
            this.size = e.size
        }
        Qt.prototype.entrySeq = function() {
            return this._iter.toSeq()
        };
        Qt.prototype.__iterate = function(e, t) {
            var n = this;
            return this._iter.__iterate(function(t) {
                if (t) {
                    vn(t);
                    var r = s(t);
                    return e(r ? t.get(1) : t[1], r ? t.get(0) : t[0], n)
                }
            }, t)
        };
        Qt.prototype.__iterator = function(e, t) {
            var n = this._iter.__iterator(L, t);
            return new D(function() {
                for (;;) {
                    var t = n.next();
                    if (t.done) return t;
                    var r = t.value;
                    if (r) {
                        vn(r);
                        var i = s(r);
                        return H(e, i ? r.get(0) : r[0], i ? r.get(1) : r[1], t)
                    }
                }
            })
        };
        Jt.prototype.cacheResult = Wt.prototype.cacheResult = Yt.prototype.cacheResult = Qt.prototype.cacheResult = bn;

        function Xt(e) {
            var t = _n(e);
            t._iter = e;
            t.size = e.size;
            t.flip = function() {
                return e
            };
            t.reverse = function() {
                var t = e.reverse.apply(this);
                t.flip = function() {
                    return e.reverse()
                };
                return t
            };
            t.has = function(t) {
                return e.includes(t)
            };
            t.includes = function(t) {
                return e.has(t)
            };
            t.cacheResult = bn;
            t.__iterateUncached = function(t, n) {
                var r = this;
                return e.__iterate(function(e, n) {
                    return !1 !== t(n, e, r)
                }, n)
            };
            t.__iteratorUncached = function(t, n) {
                if (t === N) {
                    var r = e.__iterator(t, n);
                    return new D(function() {
                        var e = r.next();
                        if (!e.done) {
                            var t = e.value[0];
                            e.value[0] = e.value[1];
                            e.value[1] = t
                        }
                        return e
                    })
                }
                return e.__iterator(t === L ? x : L, n)
            };
            return t
        }

        function $t(e, t, n) {
            var r = _n(e);
            r.size = e.size;
            r.has = function(t) {
                return e.has(t)
            };
            r.get = function(r, i) {
                var o = e.get(r, _);
                return o === _ ? i : t.call(n, o, r, e)
            };
            r.__iterateUncached = function(r, i) {
                var o = this;
                return e.__iterate(function(e, i, s) {
                    return !1 !== r(t.call(n, e, i, s), i, o)
                }, i)
            };
            r.__iteratorUncached = function(r, i) {
                var o = e.__iterator(N, i);
                return new D(function() {
                    var i = o.next();
                    if (i.done) return i;
                    var s = i.value,
                        a = s[0];
                    return H(r, a, t.call(n, s[1], a, e), i)
                })
            };
            return r
        }

        function Zt(e, t) {
            var n = _n(e);
            n._iter = e;
            n.size = e.size;
            n.reverse = function() {
                return e
            };
            e.flip && (n.flip = function() {
                var t = Xt(e);
                t.reverse = function() {
                    return e.flip()
                };
                return t
            });
            n.get = function(n, r) {
                return e.get(t ? n : -1 - n, r)
            };
            n.has = function(n) {
                return e.has(t ? n : -1 - n)
            };
            n.includes = function(t) {
                return e.includes(t)
            };
            n.cacheResult = bn;
            n.__iterate = function(t, n) {
                var r = this;
                return e.__iterate(function(e, n) {
                    return t(e, n, r)
                }, !n)
            };
            n.__iterator = function(t, n) {
                return e.__iterator(t, !n)
            };
            return n
        }

        function en(e, t, n, r) {
            var i = _n(e);
            if (r) {
                i.has = function(r) {
                    var i = e.get(r, _);
                    return i !== _ && !!t.call(n, i, r, e)
                };
                i.get = function(r, i) {
                    var o = e.get(r, _);
                    return o !== _ && t.call(n, o, r, e) ? o : i
                }
            }
            i.__iterateUncached = function(i, o) {
                var s = this,
                    a = 0;
                e.__iterate(function(e, o, u) {
                    if (t.call(n, e, o, u)) {
                        a++;
                        return i(e, r ? o : a - 1, s)
                    }
                }, o);
                return a
            };
            i.__iteratorUncached = function(i, o) {
                var s = e.__iterator(N, o),
                    a = 0;
                return new D(function() {
                    for (;;) {
                        var o = s.next();
                        if (o.done) return o;
                        var u = o.value,
                            c = u[0],
                            l = u[1];
                        if (t.call(n, l, c, e)) return H(i, r ? c : a++, l, o)
                    }
                })
            };
            return i
        }

        function tn(e, t, n) {
            var r = Fe().asMutable();
            e.__iterate(function(i, o) {
                r.update(t.call(n, i, o, e), 0, function(e) {
                    return e + 1
                })
            });
            return r.asImmutable()
        }

        function nn(e, t, n) {
            var r = a(e),
                i = (l(e) ? Bt() : Fe()).asMutable();
            e.__iterate(function(o, s) {
                i.update(t.call(n, o, s, e), function(e) {
                    return (e = e || []).push(r ? [s, o] : o), e
                })
            });
            var o = mn(e);
            return i.map(function(t) {
                return gn(e, o(t))
            })
        }

        function rn(e, t, n, r) {
            var i = e.size;
            void 0 !== t && (t |= 0);
            void 0 !== n && (n === 1 / 0 ? n = i : n |= 0);
            if (R(t, n, i)) return e;
            var o = C(t, i),
                s = M(n, i);
            if (o != o || s != s) return rn(e.toSeq().cacheResult(), t, n, r);
            var a, u = s - o;
            u == u && (a = u < 0 ? 0 : u);
            var c = _n(e);
            c.size = 0 === a ? a : e.size && a || void 0;
            !r && oe(e) && a >= 0 && (c.get = function(t, n) {
                return (t = k(this, t)) >= 0 && t < a ? e.get(t + o, n) : n
            });
            c.__iterateUncached = function(t, n) {
                var i = this;
                if (0 === a) return 0;
                if (n) return this.cacheResult().__iterate(t, n);
                var s = 0,
                    u = !0,
                    c = 0;
                e.__iterate(function(e, n) {
                    if (!u || !(u = s++ < o)) {
                        c++;
                        return !1 !== t(e, r ? n : c - 1, i) && c !== a
                    }
                });
                return c
            };
            c.__iteratorUncached = function(t, n) {
                if (0 !== a && n) return this.cacheResult().__iterator(t, n);
                var i = 0 !== a && e.__iterator(t, n),
                    s = 0,
                    u = 0;
                return new D(function() {
                    for (; s++ < o;) i.next();
                    if (++u > a) return G();
                    var e = i.next();
                    return r || t === L ? e : H(t, u - 1, t === x ? void 0 : e.value[1], e)
                })
            };
            return c
        }

        function on(e, t, n) {
            var r = _n(e);
            r.__iterateUncached = function(r, i) {
                var o = this;
                if (i) return this.cacheResult().__iterate(r, i);
                var s = 0;
                e.__iterate(function(e, i, a) {
                    return t.call(n, e, i, a) && ++s && r(e, i, o)
                });
                return s
            };
            r.__iteratorUncached = function(r, i) {
                var o = this;
                if (i) return this.cacheResult().__iterator(r, i);
                var s = e.__iterator(N, i),
                    a = !0;
                return new D(function() {
                    if (!a) return G();
                    var e = s.next();
                    if (e.done) return e;
                    var i = e.value,
                        u = i[0],
                        c = i[1];
                    if (!t.call(n, c, u, o)) {
                        a = !1;
                        return G()
                    }
                    return r === N ? e : H(r, u, c, e)
                })
            };
            return r
        }

        function sn(e, t, n, r) {
            var i = _n(e);
            i.__iterateUncached = function(i, o) {
                var s = this;
                if (o) return this.cacheResult().__iterate(i, o);
                var a = !0,
                    u = 0;
                e.__iterate(function(e, o, c) {
                    if (!a || !(a = t.call(n, e, o, c))) {
                        u++;
                        return i(e, r ? o : u - 1, s)
                    }
                });
                return u
            };
            i.__iteratorUncached = function(i, o) {
                var s = this;
                if (o) return this.cacheResult().__iterator(i, o);
                var a = e.__iterator(N, o),
                    u = !0,
                    c = 0;
                return new D(function() {
                    var e, o, l;
                    do {
                        if ((e = a.next()).done) return r || i === L ? e : H(i, c++, i === x ? void 0 : e.value[1], e);
                        var f = e.value;
                        o = f[0];
                        l = f[1];
                        u && (u = t.call(n, l, o, s))
                    } while (u);
                    return i === N ? e : H(i, o, l, e)
                })
            };
            return i
        }

        function an(e, t) {
            var n = a(e),
                i = [e].concat(t).map(function(e) {
                    s(e) ? n && (e = r(e)) : e = n ? ae(e) : ue(Array.isArray(e) ? e : [e]);
                    return e
                }).filter(function(e) {
                    return 0 !== e.size
                });
            if (0 === i.length) return e;
            if (1 === i.length) {
                var o = i[0];
                if (o === e || n && a(o) || u(e) && u(o)) return o
            }
            var c = new te(i);
            n ? c = c.toKeyedSeq() : u(e) || (c = c.toSetSeq());
            (c = c.flatten(!0)).size = i.reduce(function(e, t) {
                if (void 0 !== e) {
                    var n = t.size;
                    if (void 0 !== n) return e + n
                }
            }, 0);
            return c
        }

        function un(e, t, n) {
            var r = _n(e);
            r.__iterateUncached = function(r, i) {
                var o = 0,
                    a = !1;

                function u(e, c) {
                    var l = this;
                    e.__iterate(function(e, i) {
                        (!t || c < t) && s(e) ? u(e, c + 1) : !1 === r(e, n ? i : o++, l) && (a = !0);
                        return !a
                    }, i)
                }
                u(e, 0);
                return o
            };
            r.__iteratorUncached = function(r, i) {
                var o = e.__iterator(r, i),
                    a = [],
                    u = 0;
                return new D(function() {
                    for (; o;) {
                        var e = o.next();
                        if (!1 === e.done) {
                            var c = e.value;
                            r === N && (c = c[1]);
                            if (t && !(a.length < t) || !s(c)) return n ? e : H(r, u++, c, e);
                            a.push(o);
                            o = c.__iterator(r, i)
                        } else o = a.pop()
                    }
                    return G()
                })
            };
            return r
        }

        function cn(e, t, n) {
            var r = mn(e);
            return e.toSeq().map(function(i, o) {
                return r(t.call(n, i, o, e))
            }).flatten(!0)
        }

        function ln(e, t) {
            var n = _n(e);
            n.size = e.size && 2 * e.size - 1;
            n.__iterateUncached = function(n, r) {
                var i = this,
                    o = 0;
                e.__iterate(function(e, r) {
                    return (!o || !1 !== n(t, o++, i)) && !1 !== n(e, o++, i)
                }, r);
                return o
            };
            n.__iteratorUncached = function(n, r) {
                var i, o = e.__iterator(L, r),
                    s = 0;
                return new D(function() {
                    return (!i || s % 2) && (i = o.next()).done ? i : s % 2 ? H(n, s++, t) : H(n, s++, i.value, i)
                })
            };
            return n
        }

        function fn(e, t, n) {
            t || (t = On);
            var r = a(e),
                i = 0,
                o = e.toSeq().map(function(t, r) {
                    return [r, t, i++, n ? n(t, r, e) : t]
                }).toArray();
            o.sort(function(e, n) {
                return t(e[3], n[3]) || e[2] - n[2]
            }).forEach(r ? function(e, t) {
                o[t].length = 2
            } : function(e, t) {
                o[t] = e[1]
            });
            return r ? J(o) : u(e) ? Y(o) : Q(o)
        }

        function hn(e, t, n) {
            t || (t = On);
            if (n) {
                var r = e.toSeq().map(function(t, r) {
                    return [t, n(t, r, e)]
                }).reduce(function(e, n) {
                    return pn(t, e[1], n[1]) ? n : e
                });
                return r && r[0]
            }
            return e.reduce(function(e, n) {
                return pn(t, e, n) ? n : e
            })
        }

        function pn(e, t, n) {
            var r = e(n, t);
            return 0 === r && n !== t && (void 0 === n || null === n || n != n) || r > 0
        }

        function dn(e, t, r) {
            var i = _n(e);
            i.size = new te(r).map(function(e) {
                return e.size
            }).min();
            i.__iterate = function(e, t) {
                for (var n, r = this.__iterator(L, t), i = 0; !(n = r.next()).done && !1 !== e(n.value, i++, this););
                return i
            };
            i.__iteratorUncached = function(e, i) {
                var o = r.map(function(e) {
                        return e = n(e), F(i ? e.reverse() : e)
                    }),
                    s = 0,
                    a = !1;
                return new D(function() {
                    var n;
                    if (!a) {
                        n = o.map(function(e) {
                            return e.next()
                        });
                        a = n.some(function(e) {
                            return e.done
                        })
                    }
                    return a ? G() : H(e, s++, t.apply(null, n.map(function(e) {
                        return e.value
                    })))
                })
            };
            return i
        }

        function gn(e, t) {
            return oe(e) ? t : e.constructor(t)
        }

        function vn(e) {
            if (e !== Object(e)) throw new TypeError("Expected [K, V] tuple: " + e)
        }

        function yn(e) {
            ze(e.size);
            return A(e)
        }

        function mn(e) {
            return a(e) ? r : u(e) ? i : o
        }

        function _n(e) {
            return Object.create((a(e) ? J : u(e) ? Y : Q).prototype)
        }

        function bn() {
            if (this._iter.cacheResult) {
                this._iter.cacheResult();
                this.size = this._iter.size;
                return this
            }
            return W.prototype.cacheResult.call(this)
        }

        function On(e, t) {
            return e > t ? 1 : e < t ? -1 : 0
        }

        function wn(e) {
            var t = F(e);
            if (!t) {
                if (!V(e)) throw new TypeError("Expected iterable or array-like: " + e);
                t = F(n(e))
            }
            return t
        }
        t(Sn, Se);

        function Sn(e, t) {
            var n, r = function(o) {
                    if (o instanceof r) return o;
                    if (!(this instanceof r)) return new r(o);
                    if (!n) {
                        n = !0;
                        var s = Object.keys(e);
                        kn(i, s);
                        i.size = s.length;
                        i._name = t;
                        i._keys = s;
                        i._defaultValues = e
                    }
                    this._map = Fe(o)
                },
                i = r.prototype = Object.create(In);
            i.constructor = r;
            return r
        }
        Sn.prototype.toString = function() {
            return this.__toString(An(this) + " {", "}")
        };
        Sn.prototype.has = function(e) {
            return this._defaultValues.hasOwnProperty(e)
        };
        Sn.prototype.get = function(e, t) {
            if (!this.has(e)) return t;
            var n = this._defaultValues[e];
            return this._map ? this._map.get(e, n) : n
        };
        Sn.prototype.clear = function() {
            if (this.__ownerID) {
                this._map && this._map.clear();
                return this
            }
            var e = this.constructor;
            return e._empty || (e._empty = En(this, it()))
        };
        Sn.prototype.set = function(e, t) {
            if (!this.has(e)) throw new Error('Cannot set unknown key "' + e + '" on ' + An(this));
            if (this._map && !this._map.has(e)) {
                if (t === this._defaultValues[e]) return this
            }
            var n = this._map && this._map.set(e, t);
            return this.__ownerID || n === this._map ? this : En(this, n)
        };
        Sn.prototype.remove = function(e) {
            if (!this.has(e)) return this;
            var t = this._map && this._map.remove(e);
            return this.__ownerID || t === this._map ? this : En(this, t)
        };
        Sn.prototype.wasAltered = function() {
            return this._map.wasAltered()
        };
        Sn.prototype.__iterator = function(e, t) {
            var n = this;
            return r(this._defaultValues).map(function(e, t) {
                return n.get(t)
            }).__iterator(e, t)
        };
        Sn.prototype.__iterate = function(e, t) {
            var n = this;
            return r(this._defaultValues).map(function(e, t) {
                return n.get(t)
            }).__iterate(e, t)
        };
        Sn.prototype.__ensureOwner = function(e) {
            if (e === this.__ownerID) return this;
            var t = this._map && this._map.__ensureOwner(e);
            if (!e) {
                this.__ownerID = e;
                this._map = t;
                return this
            }
            return En(this, t, e)
        };
        var In = Sn.prototype;
        In[g] = In.remove;
        In.deleteIn = In.removeIn = Je.removeIn;
        In.merge = Je.merge;
        In.mergeWith = Je.mergeWith;
        In.mergeIn = Je.mergeIn;
        In.mergeDeep = Je.mergeDeep;
        In.mergeDeepWith = Je.mergeDeepWith;
        In.mergeDeepIn = Je.mergeDeepIn;
        In.setIn = Je.setIn;
        In.update = Je.update;
        In.updateIn = Je.updateIn;
        In.withMutations = Je.withMutations;
        In.asMutable = Je.asMutable;
        In.asImmutable = Je.asImmutable;

        function En(e, t, n) {
            var r = Object.create(Object.getPrototypeOf(e));
            r._map = t;
            r.__ownerID = n;
            return r
        }

        function An(e) {
            return e._name || e.constructor.name || "Record"
        }

        function kn(e, t) {
            try {
                t.forEach(Tn.bind(void 0, e))
            } catch (e) {}
        }

        function Tn(e, t) {
            Object.defineProperty(e, t, {
                get: function() {
                    return this.get(t)
                },
                set: function(e) {
                    be(this.__ownerID, "Cannot set on an immutable record.");
                    this.set(t, e)
                }
            })
        }
        t(Rn, Ee);

        function Rn(e) {
            return null === e || void 0 === e ? Un() : Cn(e) && !l(e) ? e : Un().withMutations(function(t) {
                var n = o(e);
                ze(n.size);
                n.forEach(function(e) {
                    return t.add(e)
                })
            })
        }
        Rn.of = function() {
            return this(arguments)
        };
        Rn.fromKeys = function(e) {
            return this(r(e).keySeq())
        };
        Rn.prototype.toString = function() {
            return this.__toString("Set {", "}")
        };
        Rn.prototype.has = function(e) {
            return this._map.has(e)
        };
        Rn.prototype.add = function(e) {
            return Ln(this, this._map.set(e, !0))
        };
        Rn.prototype.remove = function(e) {
            return Ln(this, this._map.remove(e))
        };
        Rn.prototype.clear = function() {
            return Ln(this, this._map.clear())
        };
        Rn.prototype.union = function() {
            var t = e.call(arguments, 0);
            return 0 === (t = t.filter(function(e) {
                return 0 !== e.size
            })).length ? this : 0 !== this.size || this.__ownerID || 1 !== t.length ? this.withMutations(function(e) {
                for (var n = 0; n < t.length; n++) o(t[n]).forEach(function(t) {
                    return e.add(t)
                })
            }) : this.constructor(t[0])
        };
        Rn.prototype.intersect = function() {
            var t = e.call(arguments, 0);
            if (0 === t.length) return this;
            t = t.map(function(e) {
                return o(e)
            });
            var n = this;
            return this.withMutations(function(e) {
                n.forEach(function(n) {
                    t.every(function(e) {
                        return e.includes(n)
                    }) || e.remove(n)
                })
            })
        };
        Rn.prototype.subtract = function() {
            var t = e.call(arguments, 0);
            if (0 === t.length) return this;
            t = t.map(function(e) {
                return o(e)
            });
            var n = this;
            return this.withMutations(function(e) {
                n.forEach(function(n) {
                    t.some(function(e) {
                        return e.includes(n)
                    }) && e.remove(n)
                })
            })
        };
        Rn.prototype.merge = function() {
            return this.union.apply(this, arguments)
        };
        Rn.prototype.mergeWith = function(t) {
            var n = e.call(arguments, 1);
            return this.union.apply(this, n)
        };
        Rn.prototype.sort = function(e) {
            return jn(fn(this, e))
        };
        Rn.prototype.sortBy = function(e, t) {
            return jn(fn(this, t, e))
        };
        Rn.prototype.wasAltered = function() {
            return this._map.wasAltered()
        };
        Rn.prototype.__iterate = function(e, t) {
            var n = this;
            return this._map.__iterate(function(t, r) {
                return e(r, r, n)
            }, t)
        };
        Rn.prototype.__iterator = function(e, t) {
            return this._map.map(function(e, t) {
                return t
            }).__iterator(e, t)
        };
        Rn.prototype.__ensureOwner = function(e) {
            if (e === this.__ownerID) return this;
            var t = this._map.__ensureOwner(e);
            if (!e) {
                this.__ownerID = e;
                this._map = t;
                return this
            }
            return this.__make(t, e)
        };

        function Cn(e) {
            return !(!e || !e[Pn])
        }
        Rn.isSet = Cn;
        var Mn, Pn = "@@__IMMUTABLE_SET__@@",
            xn = Rn.prototype;
        xn[Pn] = !0;
        xn[g] = xn.remove;
        xn.mergeDeep = xn.merge;
        xn.mergeDeepWith = xn.mergeWith;
        xn.withMutations = Je.withMutations;
        xn.asMutable = Je.asMutable;
        xn.asImmutable = Je.asImmutable;
        xn.__empty = Un;
        xn.__make = Nn;

        function Ln(e, t) {
            if (e.__ownerID) {
                e.size = t.size;
                e._map = t;
                return e
            }
            return t === e._map ? e : 0 === t.size ? e.__empty() : e.__make(t)
        }

        function Nn(e, t) {
            var n = Object.create(xn);
            n.size = e ? e.size : 0;
            n._map = e;
            n.__ownerID = t;
            return n
        }

        function Un() {
            return Mn || (Mn = Nn(it()))
        }
        t(jn, Rn);

        function jn(e) {
            return null === e || void 0 === e ? Bn() : qn(e) ? e : Bn().withMutations(function(t) {
                var n = o(e);
                ze(n.size);
                n.forEach(function(e) {
                    return t.add(e)
                })
            })
        }
        jn.of = function() {
            return this(arguments)
        };
        jn.fromKeys = function(e) {
            return this(r(e).keySeq())
        };
        jn.prototype.toString = function() {
            return this.__toString("OrderedSet {", "}")
        };

        function qn(e) {
            return Cn(e) && l(e)
        }
        jn.isOrderedSet = qn;
        var Dn, Hn = jn.prototype;
        Hn[d] = !0;
        Hn.__empty = Bn;
        Hn.__make = Gn;

        function Gn(e, t) {
            var n = Object.create(Hn);
            n.size = e ? e.size : 0;
            n._map = e;
            n.__ownerID = t;
            return n
        }

        function Bn() {
            return Dn || (Dn = Gn(Kt()))
        }
        t(zn, Ie);

        function zn(e) {
            return null === e || void 0 === e ? Yn() : Fn(e) ? e : Yn().unshiftAll(e)
        }
        zn.of = function() {
            return this(arguments)
        };
        zn.prototype.toString = function() {
            return this.__toString("Stack [", "]")
        };
        zn.prototype.get = function(e, t) {
            var n = this._head;
            e = k(this, e);
            for (; n && e--;) n = n.next;
            return n ? n.value : t
        };
        zn.prototype.peek = function() {
            return this._head && this._head.value
        };
        zn.prototype.push = function() {
            if (0 === arguments.length) return this;
            for (var e = this.size + arguments.length, t = this._head, n = arguments.length - 1; n >= 0; n--) t = {
                value: arguments[n],
                next: t
            };
            if (this.__ownerID) {
                this.size = e;
                this._head = t;
                this.__hash = void 0;
                this.__altered = !0;
                return this
            }
            return Jn(e, t)
        };
        zn.prototype.pushAll = function(e) {
            if (0 === (e = i(e)).size) return this;
            ze(e.size);
            var t = this.size,
                n = this._head;
            e.reverse().forEach(function(e) {
                t++;
                n = {
                    value: e,
                    next: n
                }
            });
            if (this.__ownerID) {
                this.size = t;
                this._head = n;
                this.__hash = void 0;
                this.__altered = !0;
                return this
            }
            return Jn(t, n)
        };
        zn.prototype.pop = function() {
            return this.slice(1)
        };
        zn.prototype.unshift = function() {
            return this.push.apply(this, arguments)
        };
        zn.prototype.unshiftAll = function(e) {
            return this.pushAll(e)
        };
        zn.prototype.shift = function() {
            return this.pop.apply(this, arguments)
        };
        zn.prototype.clear = function() {
            if (0 === this.size) return this;
            if (this.__ownerID) {
                this.size = 0;
                this._head = void 0;
                this.__hash = void 0;
                this.__altered = !0;
                return this
            }
            return Yn()
        };
        zn.prototype.slice = function(e, t) {
            if (R(e, t, this.size)) return this;
            var n = C(e, this.size);
            if (M(t, this.size) !== this.size) return Ie.prototype.slice.call(this, e, t);
            for (var r = this.size - n, i = this._head; n--;) i = i.next;
            if (this.__ownerID) {
                this.size = r;
                this._head = i;
                this.__hash = void 0;
                this.__altered = !0;
                return this
            }
            return Jn(r, i)
        };
        zn.prototype.__ensureOwner = function(e) {
            if (e === this.__ownerID) return this;
            if (!e) {
                this.__ownerID = e;
                this.__altered = !1;
                return this
            }
            return Jn(this.size, this._head, e, this.__hash)
        };
        zn.prototype.__iterate = function(e, t) {
            if (t) return this.reverse().__iterate(e);
            for (var n = 0, r = this._head; r && !1 !== e(r.value, n++, this);) r = r.next;
            return n
        };
        zn.prototype.__iterator = function(e, t) {
            if (t) return this.reverse().__iterator(e);
            var n = 0,
                r = this._head;
            return new D(function() {
                if (r) {
                    var t = r.value;
                    r = r.next;
                    return H(e, n++, t)
                }
                return G()
            })
        };

        function Fn(e) {
            return !(!e || !e[Vn])
        }
        zn.isStack = Fn;
        var Kn, Vn = "@@__IMMUTABLE_STACK__@@",
            Wn = zn.prototype;
        Wn[Vn] = !0;
        Wn.withMutations = Je.withMutations;
        Wn.asMutable = Je.asMutable;
        Wn.asImmutable = Je.asImmutable;
        Wn.wasAltered = Je.wasAltered;

        function Jn(e, t, n, r) {
            var i = Object.create(Wn);
            i.size = e;
            i._head = t;
            i.__ownerID = n;
            i.__hash = r;
            i.__altered = !1;
            return i
        }

        function Yn() {
            return Kn || (Kn = Jn(0))
        }

        function Qn(e, t) {
            var n = function(n) {
                e.prototype[n] = t[n]
            };
            Object.keys(t).forEach(n);
            Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(t).forEach(n);
            return e
        }
        n.Iterator = D;
        Qn(n, {
            toArray: function() {
                ze(this.size);
                var e = new Array(this.size || 0);
                this.valueSeq().__iterate(function(t, n) {
                    e[n] = t
                });
                return e
            },
            toIndexedSeq: function() {
                return new Jt(this)
            },
            toJS: function() {
                return this.toSeq().map(function(e) {
                    return e && "function" == typeof e.toJS ? e.toJS() : e
                }).__toJS()
            },
            toJSON: function() {
                return this.toSeq().map(function(e) {
                    return e && "function" == typeof e.toJSON ? e.toJSON() : e
                }).__toJS()
            },
            toKeyedSeq: function() {
                return new Wt(this, !0)
            },
            toMap: function() {
                return Fe(this.toKeyedSeq())
            },
            toObject: function() {
                ze(this.size);
                var e = {};
                this.__iterate(function(t, n) {
                    e[n] = t
                });
                return e
            },
            toOrderedMap: function() {
                return Bt(this.toKeyedSeq())
            },
            toOrderedSet: function() {
                return jn(a(this) ? this.valueSeq() : this)
            },
            toSet: function() {
                return Rn(a(this) ? this.valueSeq() : this)
            },
            toSetSeq: function() {
                return new Yt(this)
            },
            toSeq: function() {
                return u(this) ? this.toIndexedSeq() : a(this) ? this.toKeyedSeq() : this.toSetSeq()
            },
            toStack: function() {
                return zn(a(this) ? this.valueSeq() : this)
            },
            toList: function() {
                return It(a(this) ? this.valueSeq() : this)
            },
            toString: function() {
                return "[Iterable]"
            },
            __toString: function(e, t) {
                return 0 === this.size ? e + t : e + " " + this.toSeq().map(this.__toStringMapper).join(", ") + " " + t
            },
            concat: function() {
                return gn(this, an(this, e.call(arguments, 0)))
            },
            includes: function(e) {
                return this.some(function(t) {
                    return ye(t, e)
                })
            },
            entries: function() {
                return this.__iterator(N)
            },
            every: function(e, t) {
                ze(this.size);
                var n = !0;
                this.__iterate(function(r, i, o) {
                    if (!e.call(t, r, i, o)) {
                        n = !1;
                        return !1
                    }
                });
                return n
            },
            filter: function(e, t) {
                return gn(this, en(this, e, t, !0))
            },
            find: function(e, t, n) {
                var r = this.findEntry(e, t);
                return r ? r[1] : n
            },
            forEach: function(e, t) {
                ze(this.size);
                return this.__iterate(t ? e.bind(t) : e)
            },
            join: function(e) {
                ze(this.size);
                e = void 0 !== e ? "" + e : ",";
                var t = "",
                    n = !0;
                this.__iterate(function(r) {
                    n ? n = !1 : t += e;
                    t += null !== r && void 0 !== r ? r.toString() : ""
                });
                return t
            },
            keys: function() {
                return this.__iterator(x)
            },
            map: function(e, t) {
                return gn(this, $t(this, e, t))
            },
            reduce: function(e, t, n) {
                ze(this.size);
                var r, i;
                arguments.length < 2 ? i = !0 : r = t;
                this.__iterate(function(t, o, s) {
                    if (i) {
                        i = !1;
                        r = t
                    } else r = e.call(n, r, t, o, s)
                });
                return r
            },
            reduceRight: function(e, t, n) {
                var r = this.toKeyedSeq().reverse();
                return r.reduce.apply(r, arguments)
            },
            reverse: function() {
                return gn(this, Zt(this, !0))
            },
            slice: function(e, t) {
                return gn(this, rn(this, e, t, !0))
            },
            some: function(e, t) {
                return !this.every(tr(e), t)
            },
            sort: function(e) {
                return gn(this, fn(this, e))
            },
            values: function() {
                return this.__iterator(L)
            },
            butLast: function() {
                return this.slice(0, -1)
            },
            isEmpty: function() {
                return void 0 !== this.size ? 0 === this.size : !this.some(function() {
                    return !0
                })
            },
            count: function(e, t) {
                return A(e ? this.toSeq().filter(e, t) : this)
            },
            countBy: function(e, t) {
                return tn(this, e, t)
            },
            equals: function(e) {
                return me(this, e)
            },
            entrySeq: function() {
                var e = this;
                if (e._cache) return new te(e._cache);
                var t = e.toSeq().map(er).toIndexedSeq();
                t.fromEntrySeq = function() {
                    return e.toSeq()
                };
                return t
            },
            filterNot: function(e, t) {
                return this.filter(tr(e), t)
            },
            findEntry: function(e, t, n) {
                var r = n;
                this.__iterate(function(n, i, o) {
                    if (e.call(t, n, i, o)) {
                        r = [i, n];
                        return !1
                    }
                });
                return r
            },
            findKey: function(e, t) {
                var n = this.findEntry(e, t);
                return n && n[0]
            },
            findLast: function(e, t, n) {
                return this.toKeyedSeq().reverse().find(e, t, n)
            },
            findLastEntry: function(e, t, n) {
                return this.toKeyedSeq().reverse().findEntry(e, t, n)
            },
            findLastKey: function(e, t) {
                return this.toKeyedSeq().reverse().findKey(e, t)
            },
            first: function() {
                return this.find(T)
            },
            flatMap: function(e, t) {
                return gn(this, cn(this, e, t))
            },
            flatten: function(e) {
                return gn(this, un(this, e, !0))
            },
            fromEntrySeq: function() {
                return new Qt(this)
            },
            get: function(e, t) {
                return this.find(function(t, n) {
                    return ye(n, e)
                }, void 0, t)
            },
            getIn: function(e, t) {
                for (var n, r = this, i = wn(e); !(n = i.next()).done;) {
                    var o = n.value;
                    if ((r = r && r.get ? r.get(o, _) : _) === _) return t
                }
                return r
            },
            groupBy: function(e, t) {
                return nn(this, e, t)
            },
            has: function(e) {
                return this.get(e, _) !== _
            },
            hasIn: function(e) {
                return this.getIn(e, _) !== _
            },
            isSubset: function(e) {
                e = "function" == typeof e.includes ? e : n(e);
                return this.every(function(t) {
                    return e.includes(t)
                })
            },
            isSuperset: function(e) {
                return (e = "function" == typeof e.isSubset ? e : n(e)).isSubset(this)
            },
            keyOf: function(e) {
                return this.findKey(function(t) {
                    return ye(t, e)
                })
            },
            keySeq: function() {
                return this.toSeq().map(Zn).toIndexedSeq()
            },
            last: function() {
                return this.toSeq().reverse().first()
            },
            lastKeyOf: function(e) {
                return this.toKeyedSeq().reverse().keyOf(e)
            },
            max: function(e) {
                return hn(this, e)
            },
            maxBy: function(e, t) {
                return hn(this, t, e)
            },
            min: function(e) {
                return hn(this, e ? nr(e) : or)
            },
            minBy: function(e, t) {
                return hn(this, t ? nr(t) : or, e)
            },
            rest: function() {
                return this.slice(1)
            },
            skip: function(e) {
                return this.slice(Math.max(0, e))
            },
            skipLast: function(e) {
                return gn(this, this.toSeq().reverse().skip(e).reverse())
            },
            skipWhile: function(e, t) {
                return gn(this, sn(this, e, t, !0))
            },
            skipUntil: function(e, t) {
                return this.skipWhile(tr(e), t)
            },
            sortBy: function(e, t) {
                return gn(this, fn(this, t, e))
            },
            take: function(e) {
                return this.slice(0, Math.max(0, e))
            },
            takeLast: function(e) {
                return gn(this, this.toSeq().reverse().take(e).reverse())
            },
            takeWhile: function(e, t) {
                return gn(this, on(this, e, t))
            },
            takeUntil: function(e, t) {
                return this.takeWhile(tr(e), t)
            },
            valueSeq: function() {
                return this.toIndexedSeq()
            },
            hashCode: function() {
                return this.__hash || (this.__hash = sr(this))
            }
        });
        var Xn = n.prototype;
        Xn[f] = !0;
        Xn[q] = Xn.values;
        Xn.__toJS = Xn.toArray;
        Xn.__toStringMapper = rr;
        Xn.inspect = Xn.toSource = function() {
            return this.toString()
        };
        Xn.chain = Xn.flatMap;
        Xn.contains = Xn.includes;
        Qn(r, {
            flip: function() {
                return gn(this, Xt(this))
            },
            mapEntries: function(e, t) {
                var n = this,
                    r = 0;
                return gn(this, this.toSeq().map(function(i, o) {
                    return e.call(t, [o, i], r++, n)
                }).fromEntrySeq())
            },
            mapKeys: function(e, t) {
                var n = this;
                return gn(this, this.toSeq().flip().map(function(r, i) {
                    return e.call(t, r, i, n)
                }).flip())
            }
        });
        var $n = r.prototype;
        $n[h] = !0;
        $n[q] = Xn.entries;
        $n.__toJS = Xn.toObject;
        $n.__toStringMapper = function(e, t) {
            return JSON.stringify(t) + ": " + rr(e)
        };
        Qn(i, {
            toKeyedSeq: function() {
                return new Wt(this, !1)
            },
            filter: function(e, t) {
                return gn(this, en(this, e, t, !1))
            },
            findIndex: function(e, t) {
                var n = this.findEntry(e, t);
                return n ? n[0] : -1
            },
            indexOf: function(e) {
                var t = this.keyOf(e);
                return void 0 === t ? -1 : t
            },
            lastIndexOf: function(e) {
                var t = this.lastKeyOf(e);
                return void 0 === t ? -1 : t
            },
            reverse: function() {
                return gn(this, Zt(this, !1))
            },
            slice: function(e, t) {
                return gn(this, rn(this, e, t, !1))
            },
            splice: function(e, t) {
                var n = arguments.length;
                t = Math.max(0 | t, 0);
                if (0 === n || 2 === n && !t) return this;
                e = C(e, e < 0 ? this.count() : this.size);
                var r = this.slice(0, e);
                return gn(this, 1 === n ? r : r.concat(E(arguments, 2), this.slice(e + t)))
            },
            findLastIndex: function(e, t) {
                var n = this.findLastEntry(e, t);
                return n ? n[0] : -1
            },
            first: function() {
                return this.get(0)
            },
            flatten: function(e) {
                return gn(this, un(this, e, !1))
            },
            get: function(e, t) {
                return (e = k(this, e)) < 0 || this.size === 1 / 0 || void 0 !== this.size && e > this.size ? t : this.find(function(t, n) {
                    return n === e
                }, void 0, t)
            },
            has: function(e) {
                return (e = k(this, e)) >= 0 && (void 0 !== this.size ? this.size === 1 / 0 || e < this.size : -1 !== this.indexOf(e))
            },
            interpose: function(e) {
                return gn(this, ln(this, e))
            },
            interleave: function() {
                var e = [this].concat(E(arguments)),
                    t = dn(this.toSeq(), Y.of, e),
                    n = t.flatten(!0);
                t.size && (n.size = t.size * e.length);
                return gn(this, n)
            },
            keySeq: function() {
                return Oe(0, this.size)
            },
            last: function() {
                return this.get(-1)
            },
            skipWhile: function(e, t) {
                return gn(this, sn(this, e, t, !1))
            },
            zip: function() {
                return gn(this, dn(this, ir, [this].concat(E(arguments))))
            },
            zipWith: function(e) {
                var t = E(arguments);
                t[0] = this;
                return gn(this, dn(this, e, t))
            }
        });
        i.prototype[p] = !0;
        i.prototype[d] = !0;
        Qn(o, {
            get: function(e, t) {
                return this.has(e) ? e : t
            },
            includes: function(e) {
                return this.has(e)
            },
            keySeq: function() {
                return this.valueSeq()
            }
        });
        o.prototype.has = Xn.includes;
        o.prototype.contains = o.prototype.includes;
        Qn(J, r.prototype);
        Qn(Y, i.prototype);
        Qn(Q, o.prototype);
        Qn(Se, r.prototype);
        Qn(Ie, i.prototype);
        Qn(Ee, o.prototype);

        function Zn(e, t) {
            return t
        }

        function er(e, t) {
            return [t, e]
        }

        function tr(e) {
            return function() {
                return !e.apply(this, arguments)
            }
        }

        function nr(e) {
            return function() {
                return -e.apply(this, arguments)
            }
        }

        function rr(e) {
            return "string" == typeof e ? JSON.stringify(e) : String(e)
        }

        function ir() {
            return E(arguments)
        }

        function or(e, t) {
            return e < t ? 1 : e > t ? -1 : 0
        }

        function sr(e) {
            if (e.size === 1 / 0) return 0;
            var t = l(e),
                n = a(e),
                r = t ? 1 : 0;
            return ar(e.__iterate(n ? t ? function(e, t) {
                r = 31 * r + ur(Te(e), Te(t)) | 0
            } : function(e, t) {
                r = r + ur(Te(e), Te(t)) | 0
            } : t ? function(e) {
                r = 31 * r + Te(e) | 0
            } : function(e) {
                r = r + Te(e) | 0
            }), r)
        }

        function ar(e, t) {
            t = Ae(t, 3432918353);
            t = Ae(t << 15 | t >>> -15, 461845907);
            t = Ae(t << 13 | t >>> -13, 5);
            t = Ae((t = (t + 3864292196 | 0) ^ e) ^ t >>> 16, 2246822507);
            return t = ke((t = Ae(t ^ t >>> 13, 3266489909)) ^ t >>> 16)
        }

        function ur(e, t) {
            return e ^ t + 2654435769 + (e << 6) + (e >> 2) | 0
        }
        var cr = {
            Iterable: n,
            Seq: W,
            Collection: we,
            Map: Fe,
            OrderedMap: Bt,
            List: It,
            Stack: zn,
            Set: Rn,
            OrderedSet: jn,
            Record: Sn,
            Range: Oe,
            Repeat: _e,
            is: ye,
            fromJS: pe
        };
        ! function() {
            try {
                Object.defineProperty(Xn, "length", {
                    get: function() {
                        if (!n.noLengthWarning) {
                            var e;
                            try {
                                throw new Error
                            } catch (t) {
                                e = t.stack
                            }
                            if (-1 === e.indexOf("_wrapObject")) {
                                console && console.warn && console.warn("iterable.length has been deprecated, use iterable.size or iterable.count(). This warning will become a silent error in a future version. " + e);
                                return this.size
                            }
                        }
                    }
                })
            } catch (e) {}
        }();
        return cr
    }, e.exports = r();
    var r
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = 20,
        i = [],
        o = t.newErrorEntry = function(e) {
            (i = i.slice(1, r)).push(e)
        };
    t.initDebugLog = function() {
        window.onerror = function(e, t, n) {
            o(e + " - " + t + " (" + n + ")")
        }
    }, t.getLastErrors = function() {
        return i
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        i = n(8),
        o = n(6),
        s = n(68),
        a = function(e) {
            if (e.useIframeRequest && window.iframeXMLHttpRequestPromise) return window.iframeXMLHttpRequestPromise.then(function(t) {
                return (0, o.set)("Request", t)(e)
            }).catch(function() {
                return (0, o.set)("Request", XMLHttpRequest)(e)
            });
            var t = e.useIframeRequest && window.iframeXMLHttpRequest && window.apiIframe && window.apiIframe.contentDocument,
                n = t ? window.iframeXMLHttpRequest : XMLHttpRequest,
                i = e;
            if (t) {
                var s = r({
                    "X-HS-Referer": window.location.href
                }, e.headers);
                i = (0, o.set)("headers", s)(i)
            }
            return (0, o.set)("Request", n)(i)
        },
        u = function(e) {
            return new i.Promise(function(t) {
                var n = new(e.Request || XMLHttpRequest);
                if (e.error) t((0, s.withResponseHandlers)((0, s.buildErrorResponse)(n, e.error.message, "OPTIONSERROR"), e));
                else if (e.externalResponse) {
                    var r = e.externalResponse instanceof XMLHttpRequest ? (0, s.buildResponse)(e.externalResponse) : Object.assign((0, s.buildResponse)(n), e.externalResponse);
                    t((0, s.withResponseHandlers)(r, e))
                } else {
                    n.open(e.method || "GET", e.url, !0);
                    "number" == typeof e.timeout && (n.timeout = e.timeout);
                    n.withCredentials = e.withCredentials;
                    e.responseType && (n.responseType = e.responseType);
                    "function" == typeof e.withXhr && e.withXhr(n);
                    Object.keys(e.headers || {}).forEach(function(t) {
                        !1 !== e.headers[t] && n.setRequestHeader(t, e.headers[t])
                    });
                    n.addEventListener("load", function() {
                        return t((0, s.withResponseHandlers)((0, s.buildResponse)(n), e))
                    });
                    n.addEventListener("error", function() {
                        return t((0, s.withResponseHandlers)((0, s.buildErrorResponse)(n, "Network request failed", "NETWORKERROR"), e))
                    });
                    n.addEventListener("timeout", function() {
                        return t((0, s.withResponseHandlers)((0, s.buildErrorResponse)(n, "Request timeout", "TIMEOUT"), e))
                    });
                    n.addEventListener("abort", function() {
                        return t((0, s.withResponseHandlers)((0, s.buildErrorResponse)(n, "Request aborted", "ABORT"), e))
                    });
                    n.send(void 0 === e.data ? null : e.data)
                }
            })
        },
        c = function(e) {
            return i.Promise.reject((0, s.buildRequestError)(e))
        };
    t.default = function(e) {
        var t = function(t, n) {
                return (0, s.withRetry)(r({}, n, {
                    url: t
                }), function(t) {
                    return e(t).catch(c).then(s.withTracking).then(a).then(u)
                }).then(s.trackSuccess, function(e) {
                    return i.Promise.reject((0, s.trackFailureBasedOnErrorResponse)(e))
                })
            },
            n = function(e) {
                return function(n, i) {
                    return t(n, r({}, i, {
                        method: e
                    }))
                }
            },
            o = function(e) {
                return function(t, r) {
                    return n(e)(t, r).then(function(e) {
                        return e.data
                    })
                }
            };
        return Object.assign(t, {
            get: o("GET"),
            post: o("POST"),
            put: o("PUT"),
            patch: o("PATCH"),
            delete: o("DELETE"),
            options: o("OPTIONS"),
            getWithResponse: n("GET"),
            postWithResponse: n("POST"),
            putWithResponse: n("PUT"),
            patchWithResponse: n("PATCH"),
            deleteWithResponse: n("DELETE"),
            optionsWithResponse: n("OPTIONS")
        })
    };
    e.exports = t.default
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.allowTimeoutOverride = t.rewriteUrl = void 0;
    var r = function() {
            function e(e, t) {
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var s, a = e[Symbol.iterator](); !(r = (s = a.next()).done); r = !0) {
                        n.push(s.value);
                        if (t && n.length === t) break
                    }
                } catch (e) {
                    i = !0;
                    o = e
                } finally {
                    try {
                        !r && a.return && a.return()
                    } finally {
                        if (i) throw o
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
        i = n(4),
        o = n(30),
        s = n(6),
        a = (t.rewriteUrl = function(e) {
            return (0, i.withUrl)(function(t) {
                var n = e.localStorage && e.localStorage.getItem("URL_REWRITE");
                if (!n) return t;
                var i = JSON.parse(n);
                if (!Array.isArray(i)) {
                    console.error("REWRITE_URL local storage key must be a stringified array");
                    return t
                }
                if (!i.length) return t;
                var s = (0, o.buildUrl)(t);
                ("string" == typeof i[0] || i[0] instanceof String) && (i = [i]);
                i.forEach(function(e) {
                    var t = r(e, 2),
                        n = t[0],
                        i = t[1];
                    s = s.replace(new RegExp(n), i)
                });
                return (0, o.parseUrl)(s)
            })(e)
        }, "HUB-HTTP_TIMEOUT");
    t.allowTimeoutOverride = function(e) {
        var t = e.localStorage && e.localStorage.getItem(a);
        if (null != t) {
            console.log("[hub-http] Using localStorage override " + a + " for request timeout.");
            return (0, s.set)("timeout", parseInt(t))(e)
        }
        return e
    }
}, function(e, t, n) {
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
        i = function(e) {
            var t = e.replace(/-/g, " ");
            return (t = t.replace(/_/g, " ")).replace(/\w\S*/g, function(e) {
                return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
            })
        },
        o = function(e, t, n) {
            return "\nusage-tracker " + e + ': "' + t + '"\n----------------------------------------\n' + n + "\n"
        };
    t.debugLog = function(e, t) {
        var n = t.eventKey,
            s = t.eventProperties,
            a = t.eventName,
            u = t.eventNamespace,
            c = {
                eventKey: n,
                eventType: "[" + i(u) + "] " + i(a),
                eventProperties: s
            };
        return o("debug log", e, Object.keys(c).reduce(function(e, t) {
            var n = c[t];
            "string" == typeof n ? e += t + ": " + n + "\n" : "object" === (void 0 === n ? "undefined" : r(n)) ? e += t + ": " + JSON.stringify(n, null, 2) + "\n" : e += t + ": " + (void 0 === n ? "undefined" : r(n)) + "\n";
            return e
        }, ""))
    }, t.genericError = function(e) {
        return new Error("usage-tracker error: " + e)
    }, t.configError = function(e) {
        return new Error("usage-tracker config error: " + e)
    }, t.eventError = function(e) {
        return new Error("usage-tracker event error: " + e)
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getEmail = t.getUserId = t.getSidekickId = t.clearUser = t.fetchUser = t.setUser = t.getUser = void 0;
    var r = function() {
            function e(e, t) {
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var s, a = e[Symbol.iterator](); !(r = (s = a.next()).done); r = !0) {
                        n.push(s.value);
                        if (t && n.length === t) break
                    }
                } catch (e) {
                    i = !0;
                    o = e
                } finally {
                    try {
                        !r && a.return && a.return()
                    } finally {
                        if (i) throw o
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
        i = n(13),
        o = n(20),
        s = h(n(0)),
        a = n(51),
        u = n(26),
        c = n(35),
        l = n(57),
        f = n(52);

    function h(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var p = (0, i.Map)(),
        d = (t.getUser = function() {
            return p
        }, t.setUser = function(e) {
            p = e;
            (0, o.sendToContentScripts)("userprofile:change", p.toJS())
        });
    t.fetchUser = async function() {
        try {
            var e = await Promise.all([(0, a.fetchUserInfo)(), (0, u.fetchAttributes)()]),
                t = r(e, 2),
                n = t[0],
                i = t[1];
            if (!i) return n;
            var o = null;
            try {
                o = await (0, f.fetchPortalId)()
            } catch (e) {
                s.default.log("User has no picked portal ID")
            }
            s.default.log("signalsUserId: ", i.get(c.SIDEKICK_ID_KEY));
            if (i.get(c.SIDEKICK_ID_KEY) > 0) {
                var h = void 0;
                try {
                    h = await (0, l.fetchGates)(o)
                } catch (e) {
                    403 === e.status && (o = null)
                }
                var p = n.merge({
                    sidekickId: +i.get(c.SIDEKICK_ID_KEY),
                    portal_id: o,
                    gates: h
                });
                d(p);
                return p
            }
            return null
        } catch (e) {
            if (401 !== e.status) {
                var g = "Unable to fetchUser: " + e.responseText;
                s.default.log(g)
            }
            return null
        }
    }, t.clearUser = function() {
        return d((0, i.Map)())
    }, t.getSidekickId = function() {
        return p.get("sidekickId")
    }, t.getUserId = function() {
        return p.get("userId")
    }, t.getEmail = function() {
        return p.get("email")
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(9),
        i = g(n(15)),
        o = d(n(4)),
        s = n(21),
        a = n(16),
        u = g(n(42)),
        c = n(43),
        l = g(n(44)),
        f = n(74),
        h = n(10),
        p = g(n(0));

    function d(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        t.default = e;
        return t
    }

    function g(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var v = function() {
            p.default.warn("SignalsExtension HubApiHttpClient: reloading on unauthorized");
            (0, h.restartExtension)()
        },
        y = function(e) {
            return p.default.warn("Error reloading on unauthed: " + (e && e.message))
        };
    t.default = (0, i.default)((0, r.createStack)(o.services, u.default, o.jsonBody, o.httpsOnly, o.environmentUrl(o.standardApi("api", "hubspot")), l.default, (0, f.reloadOnUnauthorized)(v, y), o.withQuery, a.rewriteUrl, s.retryOnError, o.validateStatus, c.immutableResponse));
    e.exports = t.default
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.sendToPopup = t.listenToContentScriptMethodsBatch = t.sendToContentScripts = void 0;
    var r = a(n(0)),
        i = a(n(1)),
        o = n(10),
        s = n(5);

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.sendToContentScripts = function(e, t) {
        (0, o.forAllTabs)(null, function(n) {
            i.default.tabs.sendMessage(n.id, {
                method: e,
                data: t
            })
        })
    }, t.listenToContentScriptMethodsBatch = function(e) {
        var t = function(t, n, i) {
            var o = e[t.method];
            if (o) {
                try {
                    o(t.data, i)
                } catch (e) {
                    r.default.error(e);
                    r.default.info(t.method);
                    r.default.debug(t)
                }
                return !0
            }
            return !1
        };
        (0, s.addMessageListener)(t)
    }, t.sendToPopup = function(e, t) {
        (0, s.sendMessage)({
            method: e,
            data: t
        })
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.retryOnError = t.logoutOnMissingPortalId = t.logoutOnUnauthorized = t.logoutOn = t.logoutOnError = t.timeoutInQuery = t.setRequest = t.maybeUseIframeRequest = t.hubapi = t.lab = t.defaults = void 0;
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = p(n(41)),
        o = n(30),
        s = n(4),
        a = n(29),
        u = n(71),
        c = h(n(73)),
        l = n(8),
        f = n(6);

    function h(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function p(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        t.default = e;
        return t
    }
    t.defaults = function(e) {
        return Object.assign({}, {
            timeout: 14e3,
            withCredentials: !0,
            portalId: window.hubspot && window.hubspot.portal && window.hubspot.portal.id,
            labs: window.hubspot && window.hubspot["__hub-http-labs"]
        }, e)
    };
    var d = function(e, t) {
            var n = "HUB-HTTP-LABS:" + e,
                i = t.localStorage && t.localStorage.getItem(n);
            if (i && "true" === i.toLowerCase()) {
                console.log("Using localStorage override for " + n + ": " + i);
                return "true" === i.toLowerCase()
            }
            return "object" === r(t.labs) && t.labs[e]
        },
        g = t.lab = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function(e) {
                return e
            };
            return function(r) {
                return d(e, r) ? t(r) : n(r)
            }
        },
        v = (t.hubapi = g("HUBAPIDOTCOM", (0, s.environmentUrl)((0, s.standardApi)("api", "hubapi")), (0, s.environmentUrl)((0, s.standardApi)("api", "hubspot"))), t.maybeUseIframeRequest = function(e) {
            var t = 0 === (0, o.parseUrl)(e.url).hostname.indexOf("api.hubspot");
            return (0, f.set)("useIframeRequest", t)(e)
        }),
        y = (t.setRequest = v, t.timeoutInQuery = function(e) {
            return "number" == typeof e.timeout ? (0, s.query)({
                clienttimeout: e.timeout
            })(e) : e
        }, function(e) {
            var t = {
                    hostname: (0, s.resolveApi)((0, s.standardApi)("app", "hubspot")),
                    path: "/login/"
                },
                n = {
                    loginRedirectUrl: e.location.href
                };
            e.portalId && (n.loginPortalId = e.portalId);
            t.query = i.stringify(n);
            return (0, o.buildUrl)(t)
        }),
        m = function(e) {
            return c.default.clear(e)
        },
        _ = function(e) {
            var t = y(e);
            if ((0, u.redirectTo)(t, e, m)) throw new Error("Aborting: redirection in progress");
            return e
        },
        b = function(e) {
            var t = e.options,
                n = y(t);
            (0, u.redirectTo)(n, t, m);
            return l.Promise.reject((0, a.responseError)(e, "Aborting: redirection in progress"))
        },
        O = (t.logoutOnError = (0, s.onResponseError)(b), t.logoutOn = function(e) {
            return function(t) {
                return (0, s.onResponse)(function(t) {
                    return e(t) ? b(t) : t
                })(t)
            }
        });
    t.logoutOnUnauthorized = O(function(e) {
        return 401 === e.status
    }), t.logoutOnMissingPortalId = function(e) {
        if (!e.portalId) {
            console.log("[hub-http] Could not find portal id. Redirecting");
            return _(e)
        }
        return e
    }, t.retryOnError = (0, s.retry)(function(e) {
        return "GET" === e.options.method && (e.status >= 500 || 0 === e.status && "NETWORKERROR" === e.errorCode)
    }, {
        reason: "Server error"
    })
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.CLIENT_APP_INTERACTION = "client-app-interaction", t.UPDATE_EXTENSION = "update-extension", t.UPDATE_AVAILABLE = "update-available-for-chrome", t.LOADED_REMOTE_BACKGROUND_PAGE = "loaded-remote-background-page", t.CHANGE_PORTAL = "change-portal", t.SUPPRESS_NOTIFICATION = "suppress-notification", t.CLEAR_BLOCKED_URL_CACHE = "clear-blocked-url-cache", t.FIRST_SHOW_NOTIFICATION = "extension-show-first-notification", t.FIRST_CLICK_NOTIFICATION = "extension-clicked-first-notification", t.SHOW_NOTIFICATION = "extension-show-notification", t.REGISTER_USER = "register-user"
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.UsageTracker = t.initAuthedTracker = t.initUnauthedTracker = void 0;
    var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        i = n(48),
        o = u(n(76)),
        s = n(77),
        a = u(n(58));

    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var c = {
        clientType: i.CHROME_EXTENSION,
        screen: i.GMAIL,
        namespace: i.WHERE_APP,
        fromSignalsExtension: !0,
        extensionVersion: (0, a.default)()
    };
    t.initUnauthedTracker = function() {
        s.SignalsExtensionUsageTracker.initUnauthedTracker(o.default, c)
    }, t.initAuthedTracker = function(e, t) {
        s.SignalsExtensionUsageTracker.initAuthedTracker(o.default, r({}, c, {
            email: e,
            hubId: t
        }))
    }, t.UsageTracker = s.SignalsExtensionUsageTracker
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = window.Raven;
    e.exports = t.default
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.emptyFunction = function() {}
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.setDoNotDisturb = t.getDoNotDisturb = t.clearAttributes = t.setAttribute = t.getAttribute = t.fetchAttributes = void 0;
    var r = n(13),
        i = a(n(55)),
        o = n(7),
        s = n(35);

    function a(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        t.default = e;
        return t
    }
    var u = new r.Map,
        c = (t.fetchAttributes = function() {
            return i.fetchAttributes([s.DND_KEY, s.SIDEKICK_ID_KEY, s.USER_REGISTRATION_KEY]).then(function(e) {
                return u = e
            })
        }, t.getAttribute = function(e) {
            return u.get(e)
        }),
        l = t.setAttribute = function(e, t) {
            u = u.set(e, t);
            return i.saveAttribute((0, o.getPortalId)(), e, t)
        };
    t.clearAttributes = function() {
        u = new r.Map
    }, t.getDoNotDisturb = function() {
        return "true" !== (c(s.DND_KEY) || "true").toLowerCase()
    }, t.setDoNotDisturb = function(e) {
        return l(s.DND_KEY, "" + !e)
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = s(n(2)),
        i = s(n(3)),
        o = s(n(28));

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    r.default.deployed("q") || (i.default.longStackSupport = !0);
    var a = "chrome-extension:",
        u = o.default.pathname,
        c = o.default.protocol,
        l = c === a && -1 !== u.indexOf("background.html"),
        f = c === a && -1 !== u.indexOf("popup.html"),
        h = null;
    h = l ? "background" : f ? "popup" : "content_script";
    t.default = h;
    e.exports = t.default
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = window.location;
    e.exports = t.default
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.responseError = t.handleResponse = t.responseHandlers = void 0;
    var r = n(6),
        i = Symbol("responseHandlers");
    t.responseHandlers = function(e) {
        return e[i]
    }, t.handleResponse = function(e) {
        return (0, r.push)(i, e)
    }, t.responseError = function(e, t, n, r) {
        return Object.assign(new Error, e, {
            message: t,
            code: n,
            previousError: r
        })
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
            function e(e, t) {
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var s, a = e[Symbol.iterator](); !(r = (s = a.next()).done); r = !0) {
                        n.push(s.value);
                        if (t && n.length === t) break
                    }
                } catch (e) {
                    i = !0;
                    o = e
                } finally {
                    try {
                        !r && a.return && a.return()
                    } finally {
                        if (i) throw o
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
        i = /^(?:(?:([^:\/?#]+):)?(?:\/\/([^:\/?#]+)(?::([0-9]+))?)+?)?([^?#]+)?(?:\?([^#]*))?(?:#(.+))?/,
        o = function(e) {
            var t = (e || "").toLowerCase();
            return t ? "http" === t ? 80 : "https" === t ? 443 : null : null
        },
        s = (t.parseUrl = function(e) {
            var t = i.exec(e),
                n = r(t, 7),
                s = n[1],
                a = n[2],
                u = n[3],
                c = n[4],
                l = n[5],
                f = n[6];
            return {
                protocol: s,
                hostname: a,
                port: void 0 !== u ? parseInt(u, 10) : o(s),
                path: c,
                query: l,
                hash: f
            }
        }, function(e) {
            if (!e.port) return !0;
            if (!e.protocol) return !0;
            var t = (e.protocol || "").toLowerCase();
            return "http" === t && 80 === e.port || "https" === t && 443 === e.port
        });
    t.buildUrl = function(e) {
        return [e.hostname ? (e.protocol || "https") + "://" : "", e.hostname, s(e) ? "" : ":" + e.port, e.hostname && e.path && "/" !== e.path.substr(0, 1) ? "/" + e.path : e.path, e.query ? "?" + e.query : "", e.hash ? "#" + e.hash : ""].join("")
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.open = window.open, t.chrome = window.chrome
}, function(e, t, n) {
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
        i = n(45),
        o = s(n(46));

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var a = t.reportError = function(e) {
        var t = e.error,
            n = e.level,
            r = e.fingerprint,
            o = void 0 === r ? [] : r,
            s = e.tags,
            a = void 0 === s ? {} : s,
            u = e.extraData,
            c = void 0 === u ? null : u,
            l = e.logger;
        c || (c = (0, i.getExtraErrorData)(t));
        window.Raven.captureException(t, {
            level: n,
            fingerprint: o,
            tags: a,
            extra: {
                error: c
            }
        });
        var f = window.Raven.lastEventId();
        l("(Event Id: " + (f || "") + ")\nError reported with '" + (t.message || "") + "'");
        c && Object.keys(c).forEach(function(e) {
            c[e] && l("Extra Data [" + e + "]: ", c[e])
        });
        return f
    };
    t.LogFatal = function(e) {
        return a(r({
            level: "fatal",
            logger: o.default.error
        }, e))
    }, t.LogError = function(e) {
        return a(r({
            level: "error",
            logger: o.default.error
        }, e))
    }, t.LogWarn = function(e) {
        return a(r({
            level: "warning",
            logger: o.default.warn
        }, e))
    }, t.LogInfo = function(e) {
        return a(r({
            level: "info",
            logger: o.default.info
        }, e))
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.localSet = t.localGet = t.syncSet = t.syncGet = t.callStorageMethodSafe = t.LOCAL_SET = t.LOCAL_GET = t.SYNC_SET = t.SYNC_GET = void 0;
    var r = n(31),
        i = n(32),
        o = n(33),
        s = t.SYNC_GET = "SYNC_GET",
        a = t.SYNC_SET = "SYNC_SET",
        u = t.LOCAL_GET = "LOCAL_GET",
        c = t.LOCAL_SET = "LOCAL_SET",
        l = t.callStorageMethodSafe = function(e) {
            for (var t, n, l, f, h = arguments.length, p = Array(h > 1 ? h - 1 : 0), d = 1; d < h; d++) p[d - 1] = arguments[d];
            try {
                switch (e) {
                    case s:
                        return (t = r.chrome.storage.sync).get.apply(t, p);
                    case a:
                        return (n = r.chrome.storage.sync).set.apply(n, p);
                    case u:
                        return (l = r.chrome.storage.local).get.apply(l, p);
                    case c:
                        return (f = r.chrome.storage.local).set.apply(f, p);
                    default:
                        return null
                }
            } catch (t) {
                if (!r.chrome.runtime) {
                    sessionStorage.runtimeError ? sessionStorage.runtimeError > o.RUNTIME_ERROR_THRESHOLD ? (0, i.LogWarn)({
                        error: t,
                        fingerprint: "SafeRuntime-SafeStorage: chrome.runtime is undefined"
                    }) : sessionStorage.runtimeError = parseInt(sessionStorage.runtimeError, 10) + 1 : sessionStorage.runtimeError = 1;
                    return null
                }(0, i.LogWarn)({
                    error: t,
                    fingerprint: "Error in chrome safeStorage",
                    extraData: {
                        method: e
                    }
                });
                return null
            }
        };
    t.syncGet = function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return l.apply(void 0, [s].concat(t))
    }, t.syncSet = function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return l.apply(void 0, [a].concat(t))
    }, t.localGet = function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return l.apply(void 0, [u].concat(t))
    }, t.localSet = function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return l.apply(void 0, [c].concat(t))
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.eventPropertySchema = t.eventDefinitionSchema = t.trackerPropertiesSchema = t.trackerConfigSchema = t.clientDependenciesSchema = t.eventPropertyTypes = t.eventClasses = void 0;
    var r = o(n(49)),
        i = n(17);

    function o(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        t.default = e;
        return t
    }
    var s = t.eventClasses = ["activation", "creation", "error", "exposure", "funnel", "interaction", "none", "signup", "usage", "view", "warning"],
        a = t.eventPropertyTypes = ["boolean", "string", "number", "array"];
    t.clientDependenciesSchema = r.create("client dependency", i.configError, {
        clientName: {
            types: ["string"],
            default: "custom"
        },
        getDebug: {
            types: ["function"]
        },
        getEmail: {
            types: ["function"]
        },
        getHubId: {
            types: ["function"]
        },
        getHstc: {
            types: ["function"]
        },
        getLang: {
            types: ["function"]
        },
        getTempStorage: {
            types: ["function"]
        },
        setTempStorage: {
            types: ["function"]
        },
        logMessage: {
            types: ["function"],
            default: function(e) {
                return console.log(e)
            }
        },
        logError: {
            types: ["function"],
            default: function(e) {
                return console.error(e)
            }
        },
        reportError: {
            types: ["function"]
        },
        send: {
            types: ["function"]
        }
    }), t.trackerConfigSchema = r.create("config option", i.configError, {
        events: {
            types: ["object"]
        },
        properties: {
            types: ["object"],
            default: {}
        },
        debug: {
            types: ["boolean", "function"]
        },
        onError: {
            types: ["function"]
        },
        allowUnauthed: {
            types: ["boolean"],
            default: !1
        },
        bypassPool: {
            types: ["boolean"],
            default: !1
        },
        isBeforeUnload: {
            types: ["boolean"],
            default: !1
        },
        isExternalHost: {
            types: ["boolean"],
            default: !1
        },
        lastKnownEventProperties: {
            types: ["array"],
            default: []
        },
        preserveTrackerProperties: {
            types: ["boolean"],
            default: !0
        }
    }), t.trackerPropertiesSchema = r.create("tracker properties", i.configError, {
        email: {
            types: ["string", "function", "object"]
        },
        hubId: {
            types: ["number", "function", "object"]
        },
        hstc: {
            types: ["string", "function", "object"]
        },
        lang: {
            types: ["string", "function", "object"]
        }
    }, !1), t.eventDefinitionSchema = r.create("event property", i.configError, {
        name: {
            types: ["string"]
        },
        namespace: {
            types: ["string"],
            default: ""
        },
        class: {
            types: ["string"], oneOf: s
        },
        version: {
            types: ["string"],
            default: "v1"
        },
        properties: {
            types: ["object"],
            default: {}
        }
    }), t.eventPropertySchema = r.create("event property", i.configError, {
        type: {
            types: ["string", "array"],
            oneOf: a
        },
        isOptional: {
            types: ["boolean"],
            default: !1
        }
    })
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.DND_KEY = "sidekick:notifications:subscribed_desktop_global", t.SIDEKICK_ID_KEY = "sidekick:migration:userId", t.USER_REGISTRATION_KEY = "sidekick:clients:chrome:addin:version", t.TRACKED_EMAILS_KEY = "sales:clients:emailAddresses", t.NOTIFICATIONS_KEY = "sales:clients:displayedNotifications", t.DISMISSED_ALERTS_KEY = "sales:clients:chrome:sidebar:dismissedAlerts", t.DISMISSED_MODALS_KEY = "sales:clients:dismissedModals", t.CONTACT_CRM_ONBOARDING_KEY = "sales:clients:chrome:onboarding:contactCrm", t.FIRST_RUN_ONBOARDING_KEY = "sales:clients:chrome:onboarding:firstRun"
}, function(e, t, n) {
    e.exports = hubspot.requireSync("_")
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = document;
    e.exports = t.default
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = window;
    e.exports = t.default
}, function(e, t, n) {
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
        i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        o = a(n(2)),
        s = a(n(96));

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function u(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var c = function(e) {
            return "boolean" == typeof e || null != e && e.valueOf && "boolean" == typeof e.valueOf()
        },
        l = function(e) {
            return !!e && "object" === (void 0 === e ? "undefined" : i(e))
        },
        f = function() {
            function e(t, n, r) {
                u(this, e);
                if (!l(t) || t instanceof e)(r = r || {}).url = t;
                else if (t === window.location) {
                    (r = r || {}).protocol = t.protocol.slice(0, -1);
                    r.hostname = t.hostname;
                    r.pathname = t.pathname;
                    r.search = t.search;
                    r.hash = t.hash
                } else r = t;
                if (r.url instanceof e) {
                    this._cloneFrom(r.url);
                    this.upsertParams(r.params || {})
                } else {
                    r.protocol = r.protocol || window.location.protocol.slice(0, -1);
                    this._set(r, n)
                }
                this.update(n)
            }
            r(e, [{
                key: "_set",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = e.url || "",
                        r = n.indexOf("#");
                    t.hash || (this.hash = r >= 0 ? n.substr(r) : e.hash || "");
                    var i = (n = r >= 0 ? n.substr(0, r) : n).indexOf("?");
                    if (!t.params && !t.search) {
                        this.search = i >= 0 ? n.substr(i) : e.search || "";
                        this.upsertParams(e.params || {})
                    }(i = (n = i >= 0 ? n.substr(0, i) : n).indexOf("//")) > 0 && ":" != n[i - 1] && (i = -1);
                    t.protocol || (this.protocol = i > 0 ? n.substr(0, i - 1) : e.protocol);
                    var o = i < 0 ? 0 : i + 2,
                        s = n.indexOf("/", o);
                    void 0 === t.pathname && (this.pathname = (s < 0 ? "" : n.substr(s)) || e.pathname || "");
                    if (void 0 === t.hostname) {
                        var a = (s < 0 ? n.substr(o) : n.substr(o, s - o)) || e.hostname;
                        if (a) {
                            this._lb = e.lb;
                            this.hostname = a
                        } else e.lb && this.setLb(e.lb, e)
                    }
                }
            }, {
                key: "update",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    e.protocol && (this.protocol = e.protocol);
                    void 0 !== e.hostname && (this.hostname = e.hostname);
                    void 0 !== e.pathname && (this.pathname = e.pathname);
                    void 0 !== e.hash && (this.hash = e.hash);
                    if (e.lb || void 0 !== e.production || void 0 !== e.local) {
                        var t = {
                            production: void 0 !== e.production ? e.production : this.production,
                            local: void 0 !== e.local ? e.local : this.local
                        };
                        this.setLb(e.lb || this._lb, t)
                    }
                    if (e.search) this.search = e.search;
                    else if (e.params) this.params = e.params;
                    else if (e.paramTuples) this.paramTuples = e.paramTuples;
                    else if (e.encodedParamTuples) {
                        this._lonelyQMark = !1;
                        this.encodedParamTuples = e.encodedParamTuples.slice(0);
                        this._rebuildParamInfo()
                    }
                }
            }, {
                key: "setLb",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = this.segments[0],
                        r = this._getProduction(t.production, n),
                        i = this._getLocal(t.local, n);
                    this._hostname = s.default.getDomain(e, r, i);
                    this._lb = this._hostname && e;
                    this._production = this._hostname && r;
                    this._local = this._hostname && i
                }
            }, {
                key: "normalize",
                value: function() {
                    this._lonelyQMark = !1
                }
            }, {
                key: "_rebuildParamInfo",
                value: function() {
                    var e = this;
                    this._paramIndex = {};
                    this.validParams = !0;
                    this.encodedParamTuples.forEach(function(t, n) {
                        e.validParams = e.validParams && 2 == t.length;
                        var r = decodeURIComponent(t[0]);
                        e._paramIndex[r] ? e._paramIndex[r].push(n) : e._paramIndex[r] = [n]
                    })
                }
            }, {
                key: "paramValues",
                value: function(e) {
                    var t = this;
                    return (this._paramIndex[e] || []).map(function(e) {
                        return decodeURIComponent(t.encodedParamTuples[e][1])
                    })
                }
            }, {
                key: "paramValue",
                value: function(e) {
                    var t = this.paramValues(e);
                    return t[t.length - 1]
                }
            }, {
                key: "encodedParamValues",
                value: function(e) {
                    var t = this;
                    return (this._paramIndex[decodeURIComponent(e)] || []).map(function(e) {
                        return t.encodedParamTuples[e][1]
                    })
                }
            }, {
                key: "encodedParamValue",
                value: function(e) {
                    var t = this.encodedParamValues(e);
                    return t[t.length - 1]
                }
            }, {
                key: "insertParamAt",
                value: function(e, t, n) {
                    this.insertEncodedParamAt(e, encodeURIComponent(t), encodeURIComponent(n))
                }
            }, {
                key: "insertEncodedParamAt",
                value: function(e, t, n) {
                    this.encodedParamTuples.splice(e, 0, [t, n]);
                    this._rebuildParamInfo()
                }
            }, {
                key: "pushParam",
                value: function(e, t) {
                    this.insertParamAt(this.encodedParamTuples.length, e, t)
                }
            }, {
                key: "pushEncodedParam",
                value: function(e, t) {
                    this.insertEncodedParamAt(this.encodedParamTuples.length, e, t)
                }
            }, {
                key: "upsertParam",
                value: function(e, t) {
                    var n = this,
                        r = this._paramIndex[e] || [];
                    r.length > 0 ? r.forEach(function(r) {
                        return n.updateParamAt(r, e, t)
                    }) : this.pushParam(e, t)
                }
            }, {
                key: "upsertParams",
                value: function(e) {
                    var t = this;
                    Object.keys(e).forEach(function(n) {
                        return t.upsertParam(n, e[n])
                    })
                }
            }, {
                key: "updateParamAt",
                value: function(e, t, n) {
                    this.updateEncodedParamAt(e, encodeURIComponent(t), encodeURIComponent(n))
                }
            }, {
                key: "updateEncodedParamAt",
                value: function(e, t, n) {
                    this.encodedParamTuples.splice(e, 1, [t, n]);
                    this._rebuildParamInfo()
                }
            }, {
                key: "removeParam",
                value: function(e) {
                    var t = this,
                        n = this._paramIndex[e] || [];
                    if (n.length > 0) {
                        n.reverse().forEach(function(e) {
                            return t.encodedParamTuples.splice(e, 1)
                        });
                        this._rebuildParamInfo()
                    }
                }
            }, {
                key: "removeParamAt",
                value: function(e) {
                    this.encodedParamTuples.splice(e, 1);
                    this._rebuildParamInfo()
                }
            }, {
                key: "clearParams",
                value: function() {
                    this.encodedParamTuples = [];
                    this.validParams = !0;
                    this._paramIndex = {};
                    this._lonelyQMark = !1
                }
            }, {
                key: "clone",
                value: function() {
                    return new e(this)
                }
            }, {
                key: "_cloneFrom",
                value: function(e) {
                    var t = this;
                    this.protocol = e.protocol;
                    this._hostname = e._hostname;
                    this._lb = e._lb;
                    this._production = e._production;
                    this._local = e._local;
                    this.pathname = e.pathname;
                    this.hash = e.hash;
                    this.encodedParamTuples = e.encodedParamTuples.slice(0);
                    this.validParams = e.validParams;
                    this._paramIndex = {};
                    Object.keys(e._paramIndex).forEach(function(n) {
                        t._paramIndex[n] = e._paramIndex[n].slice(0)
                    });
                    this._lonelyQMark = e._lonelyQMark;
                    return this
                }
            }, {
                key: "_getProduction",
                value: function(e, t) {
                    return c(e) ? e : c(this._production) ? this._production : "production" == o.default.get(t)
                }
            }, {
                key: "_getLocal",
                value: function(t, n) {
                    return c(t) ? t : c(this._local) ? this._local : !!n && ("local" == o.default.get(n) || e.localService(n))
                }
            }, {
                key: "href",
                get: function() {
                    return this.protocol + "://" + (this.hostname || "") + this.pathname + this.search + this.hash
                },
                set: function(e) {
                    this._set({
                        url: e
                    })
                }
            }, {
                key: "search",
                get: function() {
                    var e = this.encodedParamTuples.map(function(e) {
                        return e.join("=")
                    }).join("&");
                    return e.length > 0 || this._lonelyQMark ? "?" + e : e
                },
                set: function(e) {
                    var t = this;
                    this.encodedParamTuples = [];
                    this._lonelyQMark = !1;
                    e.length > 1 ? e.substr(1).split("&").forEach(function(e) {
                        return t.encodedParamTuples.push(e.split("="))
                    }) : "?" === e[0] && (this._lonelyQMark = !0);
                    this._rebuildParamInfo()
                }
            }, {
                key: "hostname",
                set: function(e) {
                    this._hostname = e;
                    var t = s.default.getLbInfo(e, this._lb);
                    this._lb = t && t.lb;
                    this._production = t && t.production;
                    this._local = t && t.local
                },
                get: function() {
                    return this._hostname
                }
            }, {
                key: "lb",
                get: function() {
                    return this._lb
                },
                set: function(e) {
                    this.setLb(e)
                }
            }, {
                key: "production",
                get: function() {
                    return this._production
                },
                set: function(e) {
                    if (this._lb) {
                        this._production = !!e;
                        this._hostname = s.default.getDomain(this._lb, this._production, this._local)
                    }
                }
            }, {
                key: "local",
                get: function() {
                    return this._local
                },
                set: function(e) {
                    if (this._lb) {
                        this._local = !!e;
                        this._hostname = s.default.getDomain(this._lb, this._production, this._local)
                    }
                }
            }, {
                key: "env",
                get: function() {
                    return void 0 === this._production ? "unknown" : this._production ? "prod" : "qa"
                }
            }, {
                key: "lbInfo",
                get: function() {
                    return {
                        lb: this._lb,
                        production: this._production,
                        local: this._local
                    }
                }
            }, {
                key: "segments",
                get: function() {
                    var e = this.pathname.replace(/(^\/)|\/$/g, "");
                    return (e ? e.split("/") : []).map(function(e) {
                        return decodeURIComponent(e)
                    })
                }
            }, {
                key: "paramTuples",
                get: function() {
                    return this.encodedParamTuples.map(function(e) {
                        return [decodeURIComponent(e[0]), decodeURIComponent(e[1])]
                    })
                },
                set: function(e) {
                    var t = this;
                    this.encodedParamTuples = [];
                    this._lonelyQMark = !1;
                    e.forEach(function(e) {
                        return t.encodedParamTuples.push([e[0], e[1]])
                    });
                    this._rebuildParamInfo()
                }
            }, {
                key: "params",
                get: function() {
                    var e = this,
                        t = {};
                    Object.keys(this._paramIndex).forEach(function(n) {
                        return t[n] = e.paramValue(n)
                    });
                    return t
                },
                set: function(e) {
                    var t = this;
                    this.encodedParamTuples = [];
                    this._lonelyQMark = !1;
                    Object.keys(e).forEach(function(n) {
                        return t.encodedParamTuples.push([n, encodeURIComponent(e[n])])
                    });
                    this._rebuildParamInfo()
                }
            }, {
                key: "valid",
                get: function() {
                    return !(!this.protocol || !this._hostname || !this.pathname && "" !== this.pathname || !this.validParams)
                }
            }, {
                key: "hostplus",
                get: function() {
                    return (this.hostname || "") + this.pathname + this.search + this.hash
                }
            }, {
                key: "pathplus",
                get: function() {
                    return this.pathname + this.search + this.hash
                }
            }], [{
                key: "localService",
                value: function(e) {
                    if (window.localStorage) {
                        var t = e.toUpperCase() + "_LOCAL";
                        try {
                            return "true" == window.localStorage.getItem(t)
                        } catch (e) {}
                    }
                    return !1
                }
            }]);
            return e
        }();
    f.loaded = new f(window.location);
    t.default = f;
    e.exports = t.default
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = i(n(2));

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var o = function(e) {
            return "function" == typeof e
        },
        s = Object.getOwnPropertySymbols || function() {
            return []
        };
    t.default = function(e) {
        if (r.default.deployed("hub-http") || !Object.freeze) return e;
        Object.freeze(e);
        Object.getOwnPropertyNames(e).concat(s(e)).forEach(function(t) {
            o(e) && "caller" !== t && "callee" !== t && null != e[t] && !Object.isFrozen(e[t]) && Object.freeze(e[t])
        });
        return e
    };
    e.exports = t.default
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e, t) {
            var n = [],
                r = !0,
                i = !1,
                o = void 0;
            try {
                for (var s, a = e[Symbol.iterator](); !(r = (s = a.next()).done); r = !0) {
                    n.push(s.value);
                    if (t && n.length === t) break
                }
            } catch (e) {
                i = !0;
                o = e
            } finally {
                try {
                    !r && a.return && a.return()
                } finally {
                    if (i) throw o
                }
            }
            return n
        }
        return function(t, n) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, n);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }();

    function i(e, t) {
        return encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t)
    }

    function o(e, t) {
        return t.reduce(function(t, n) {
            null != n && t.push(i("" + e, n));
            return t
        }, []).join("&")
    }
    t.stringify = function(e) {
        return null == e ? "" : "string" == typeof e || e instanceof String ? e : Object.keys(e).reduce(function(t, n) {
            var r = e[n];
            Array.isArray(r) ? r.length > 0 && t.push(o(n, r)) : null != r && t.push(i(n, r));
            return t
        }, []).join("&")
    }, t.parse = function(e) {
        return null == e || "" === e.trim() ? {} : e.split("&").reduce(function(e, t) {
            var n = t.split("="),
                i = r(n, 2),
                o = i[0],
                s = i[1],
                a = o,
                u = decodeURIComponent(s);
            a.length > 2 && a.lastIndexOf("[]") === a.length - 2 && (a = a.substring(0, a.length - 2));
            var c = e[a];
            void 0 !== c ? Array.isArray(c) ? c.push(u) : e[a] = [c, u] : e[a] = u;
            return e
        }, {})
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function(e) {
        return Object.assign({}, {
            method: "GET",
            timeout: 7e3,
            withCredentials: !0
        }, e)
    };
    t.default = r;
    e.exports = t.default
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.immutableResponse = t.immutableResponseWithReviver = void 0;
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = n(13),
        o = n(9),
        s = n(4),
        a = n(6),
        u = t.immutableResponseWithReviver = function(e) {
            var t = (0, s.onResponse)(function(t) {
                return (0, a.setIf)("object" === r(t.data), "data", (0, i.fromJS)(t.data, e))(t)
            });
            return (0, o.createStack)(s.jsonResponse, t)
        };
    t.immutableResponse = u()
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(4),
        i = n(5),
        o = n(33),
        s = "X-HubSpot-CSRF-hubspotapi";
    t.default = function(e) {
        return new Promise(function(t, n) {
            return (0, o.localGet)(s, function(o) {
                var a = (0, i.getLastError)(),
                    u = o[s];
                a && n(a);
                t(u ? (0, r.header)(s, u)(e) : e)
            })
        })
    };
    e.exports = t.default
}, function(e, t, n) {
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
        i = 2e3,
        o = ["number", "description", "line", "column"];
    t.getExtraErrorData = function(e) {
        if (!e) return null;
        var t = Object.keys(e).filter(function(e) {
            return !o.includes(e)
        });
        return t.length ? t.reduce(function(t, n) {
            switch (r(e[n])) {
                case "boolean":
                case "number":
                    t[n] = e[n];
                    break;
                case "string":
                    var o = e[n].length > i ? "..." : "";
                    t[n] = "" + e[n].substr(0, i) + o;
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
}, function(e, t, n) {
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

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var o = function() {
        function e() {
            i(this, e);
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
                    var i = new Array(t.length + 1);
                    i[0] = "[HubSpot Sales]";
                    for (var o = 0; o < t.length; o++) {
                        var s = t[o];
                        i[o + 1] = this._formatError(s)
                    }
                    return this._callLogFn(r, i)
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
    o.LEVELS = {
        log: 0,
        debug: 1,
        info: 2,
        warn: 3,
        error: 4
    };
    o.CONSOLE_FN = window.console || {};
    t.default = new o;
    e.exports = t.default
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.hasCooldownElapsed = t.setCooldown = void 0;
    var r = s(n(3)),
        i = n(5),
        o = n(33);

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e, t, n) {
        t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n;
        return e
    }
    t.setCooldown = function(e) {
        return new r.default.Promise(function(t, n) {
            (0, o.syncSet)(a({}, e, Date.now()), function() {
                var e = (0, i.getLastError)();
                e ? n(new Error(e)) : t()
            })
        })
    }, t.hasCooldownElapsed = function(e, t) {
        return new r.default.Promise(function(n, r) {
            (0, o.syncGet)(e, function(o) {
                var s = (0, i.getLastError)();
                if (s) r(new Error(s));
                else if ("number" != typeof o[e]) n(!0);
                else {
                    var a = new Date(o[e]).getTime();
                    n(Date.now() > a + t)
                }
            })
        })
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.WHERE_APP = "clients", t.CHROME = "chrome", t.GMAIL = "gmail", t.OUTLOOK_WEBAPP = "outlook-web-app", t.OUTLOOK_2010_PC = "outlook-2010-pc", t.OUTLOOK_2013_PC = "outlook-2013-pc", t.OUTLOOK_2016_PC = "outlook-2016-pc", t.OUTLOOK_2016_MAC = "outlook-2016-mac", t.CHROME_EXTENSION = "chrome-extension", t.OUTLOOK_365_CLIENT = "outlook-365", t.OUTLOOK_VSTO_CLIENT = "outlook-vsto", t.TRAY_APP_CLIENT = "tray-app", t.CLIENT_APP_INTERACTION = "client-app-interaction", t.APP_DROPDOWN_INTERACTION = "app-dropdown-interaction", t.EXTENSION_DROPDOWN_INTERACTION = "extension-dropdown-interaction", t.ONBOARDING_GUIDE_INTERACTION = "onboarding-guide-interaction", t.SALES_TOOLS_INTERACTION = "sales-tools-interaction", t.SIDEBAR_INTERACTION = "sidebar-interaction", t.PAGEVIEW = "pageview"
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.create = void 0;
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = n(11);
    t.create = function e(t, n, o) {
        var s = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            a = function() {
                return Object.keys(o)
            },
            u = function(e, s, u) {
                try {
                    a().forEach(function(a) {
                        var u = o[a],
                            c = u.types,
                            l = u.oneOf,
                            f = u.isOptional,
                            h = e[a],
                            p = void 0 !== h,
                            d = void 0 === h ? "undefined" : r(h);
                        (0, i.isArray)(h) && (d = "array");
                        if (!f || p) {
                            if (!p) throw n("Missing required " + t + ' "' + a + '". ' + s + " requires that a value be passed for " + t + ' "' + a + '". Received "undefined".');
                            if ("function" !== d && (0, i.isArray)(l) && -1 === l.indexOf(h)) throw n("Invalid " + t + ". " + s + ' requires that the "' + a + '" ' + t + ' be one of ["' + l.join('", "') + '"]. Received "' + h + '".');
                            if ((0, i.isArray)(c) && -1 === c.indexOf(d)) throw n("Invalid " + t + ". " + s + ' requires that the "' + a + '" ' + t + ' type be one of ["' + c.join('", "') + '"]. Received "' + d + '".')
                        }
                    })
                } catch (e) {
                    if (!u || "function" != typeof u) throw e;
                    u(e)
                }
            },
            c = function(e) {
                var t = (0, i.defaults)(e, (0, i.pluck)("default", o));
                return s ? (0, i.omit)(t, a(), !1) : t
            };
        return {
            getKeys: a,
            mutate: function(r) {
                var i = r(o);
                return e(t, n, i, s)
            },
            normalize: c,
            normalizeEach: function(e) {
                return Object.keys(e).reduce(function(t, n) {
                    var r = e[n];
                    t[n] = c(r);
                    return t
                }, {})
            },
            validate: u,
            validateEach: function(e, t, n) {
                try {
                    Object.keys(e).forEach(function(n) {
                        var r = e[n];
                        u(r, t)
                    })
                } catch (e) {
                    if (!n || "function" != typeof n) throw e;
                    n(e)
                }
            },
            _peek: function() {
                return o
            }
        }
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.waitForChromeCookies = void 0;
    var r = u(n(3)),
        i = u(n(93)),
        o = u(n(0)),
        s = u(n(1)),
        a = n(94);

    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var c = !1,
        l = 5,
        f = function e(t, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            o.default.log("Check for chrome cookie store context available");
            s.default.cookies.getAllCookieStores(function(s) {
                if (s.length) {
                    c = !0;
                    t()
                } else if (++r < l)(0, i.default)(1e3).then(function() {
                    return e(t, n, r)
                });
                else {
                    o.default.log("Chrome cookie store unavailable");
                    n("Unable to fetch chrome cookies");
                    (0, a.reloadIfNeeded)()
                }
            })
        };
    t.waitForChromeCookies = function() {
        return new r.default.Promise(function(e, t) {
            if (c) {
                o.default.log("Chrome cookie store available");
                e()
            } else f(e, t)
        })
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.fetchUserPortalInfo = t.fetchUserInfo = void 0;
    var r = i(n(95));

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.fetchUserInfo = function() {
        return r.default.get("/login-verify/echo/user")
    }, t.fetchUserPortalInfo = function(e) {
        return r.default.get("login-verify/echo/with-gates", {
            query: {
                portalId: e
            }
        })
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.setPortalIdThroughApi = t.fetchPortalId = void 0;
    var r = i(n(19));

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.fetchPortalId = function() {
        return r.default.get("users/v2/app/sidekick")
    }, t.setPortalIdThroughApi = function(e) {
        return r.default.put("users/v2/app/sidekick/" + e)
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = a(n(2)),
        i = a(n(0)),
        o = a(n(1)),
        s = n(8);

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var u = "REMOTE_ASSETS_ENV",
        c = "SALES_MODAL_IFRAME_DEPLOYED",
        l = "ENV",
        f = "DEPLOYED",
        h = function(e, t) {
            var n = t.remoteAssetsEnvironment,
                i = t.salesModalIframeDeployed;
            r.default.set(e);
            r.default.set(u, n);
            r.default.set(c, i);
            r.default.set(f, !0)
        },
        p = function() {
            return new s.Promise(function(e) {
                var t = "prod",
                    n = "prod",
                    r = !0;
                try {
                    o.default.storage.local.get([l, u, c], function(i) {
                        i[l] && (t = i[l]);
                        i[u] && (n = i[u]);
                        i[c] && (r = i[c]);
                        h(t, {
                            remoteAssetsEnvironment: n,
                            salesModalIframeDeployed: r
                        });
                        e()
                    })
                } catch (r) {
                    i.default.error("Error fetching from chrome.storage.local: ", r);
                    h(t, n);
                    e()
                }
            })
        };
    t.default = {
        init: p
    };
    e.exports = t.default
}, function(e, t) {
    e.exports = hubspot.requireSync("I18n")
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.deleteAttribute = t.saveAttribute = t.fetchAttributes = void 0;
    var r = n(13),
        i = o(n(19));

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.fetchAttributes = function(e) {
        return i.default.put("/users/v1/app/attributes/temp-hubless/bulk-get", {
            data: {
                keys: e
            },
            ignoreRedirect: !0
        }).then(function(e) {
            return (0, r.Map)().withMutations(function(t) {
                return e.get("attributes").map(function(e) {
                    return t.set(e.get("key"), e.get("value"))
                })
            })
        })
    }, t.saveAttribute = function(e, t, n) {
        return i.default.post("/users/v1/app/attributes?portalId=" + e, {
            portalId: e,
            data: {
                hubId: e,
                key: t,
                value: n
            }
        })
    }, t.deleteAttribute = function(e, t, n) {
        return i.default.delete("/users/v1/app/attributes/" + t + "/" + encodeURIComponent(n) + "?portalId=" + e, {
            portalId: e
        })
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = window.navigator;
    e.exports = t.default
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.userUngatedFor = t.fetchGates = void 0;
    var r = n(13),
        i = s(n(0)),
        o = n(51);

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var a = (0, r.List)();
    t.fetchGates = function(e) {
        return (0, o.fetchUserPortalInfo)(e).then(function(e) {
            a = e.get("gates");
            i.default.log("User gates: ", a.toJS());
            return a
        }, function(e) {
            if (403 === e.status) throw e;
            i.default.error("Could not get gates for user");
            return a
        })
    }, t.userUngatedFor = function(e) {
        return a.contains(e)
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(5);
    t.default = function() {
        return (0, r.getManifestVersion)()
    };
    e.exports = t.default
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = null;
    t.getSessionMonitor = function() {
        return r
    }, t.setSessionMonitor = function(e) {
        r = e
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.setNotFirstRun = t.isFirstRun = t.initFirstRunAndLoginTracker = void 0;
    var r = o(n(3)),
        i = o(n(1));

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var s = void 0;
    t.initFirstRunAndLoginTracker = function() {
        i.default.storage.sync.get("first_time", function(e) {
            s = null == e.first_time || e.first_time
        })
    }, t.isFirstRun = function() {
        return s
    }, t.setNotFirstRun = function() {
        return new r.default.Promise(function(e) {
            s = !1;
            i.default.storage.sync.set({
                first_time: !1
            }, e)
        })
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(9),
        i = l(n(15)),
        o = c(n(4)),
        s = n(16),
        a = n(21),
        u = l(n(44));

    function c(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        t.default = e;
        return t
    }

    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.default = (0, i.default)((0, r.createStack)(o.services, o.jsonBody, o.httpsOnly, a.hubapi, u.default, o.withQuery, s.rewriteUrl, o.validateStatus, o.jsonResponse));
    e.exports = t.default
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(9),
        i = c(n(15)),
        o = u(n(4)),
        s = n(16),
        a = n(21);

    function u(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        t.default = e;
        return t
    }

    function c(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.default = (0, i.default)((0, r.createStack)(o.services, o.jsonBody, o.httpsOnly, a.hubapi, o.withQuery, s.rewriteUrl, o.validateStatus, o.jsonResponse));
    e.exports = t.default
}, , function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = u(n(0)),
        i = n(26),
        o = u(n(1)),
        s = n(7),
        a = n(59);

    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var c = 0,
        l = function() {
            var e = "";
            c > 0 && (e = c.toString());
            o.default.browserAction.setBadgeText({
                text: e
            })
        },
        f = function() {
            c = 0;
            l()
        },
        h = function() {
            var e = (0, a.getSessionMonitor)().isLoggedIn();
            r.default.debug("Updating Browser Action Icon, loggedIn: " + e);
            var t = {};
            e && (0, s.getPortalId)() && !(0, i.getDoNotDisturb)() ? t.path = {
                19: "../img/hubspot-logo-bg-19.png",
                38: "../img/hubspot-logo-bg-48.png"
            } : t.path = {
                19: "../img/hubspot-logo-bg-19-grey.png",
                38: "../img/hubspot-logo-bg-48-grey.png"
            };
            o.default.browserAction.setIcon(t);
            l()
        },
        p = function() {
            c++;
            l()
        };
    t.default = {
        updateBadge: l,
        updateIcon: h,
        incrementBadge: p,
        clearBadge: f
    };
    e.exports = t.default
}, , function(e, t, n) {
    "use strict";
    (function(r) {
        "use es6";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        t.default = a;
        var o = s(n(2));

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a() {
            var e = window || r;
            if (("undefined" == typeof IS_STANDALONE || "boolean" == typeof IS_STANDALONE && !0 !== IS_STANDALONE) && e && e.hubspot) {
                var t = null !== e.hubspot.polyfills && "object" === i(e.hubspot.polyfills) && !0 === e.hubspot.polyfills.Symbol;
                if (!o.default.deployed("hub-http") && !t) {
                    var n = "Couldn't find HeadJS polyfills.\n\nMore information: https://product.hubteam.com/docs/frontend/docs/polyfills.html";
                    console.error(n)
                }
            }
        }
        e.exports = t.default
    }).call(t, n(67))
}, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.trackFailureBasedOnErrorResponse = t.trackSuccess = t.withRetry = t.withTracking = t.requestIdKey = t.buildRequestError = t.buildErrorResponse = t.buildResponse = t.withResponseHandlers = t.getResponseHeaders = t.handleResponse = void 0;
    var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        i = n(29),
        o = n(8),
        s = n(6),
        a = u(n(69));

    function u(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        t.default = e;
        return t
    }
    var c = t.handleResponse = function(e, t) {
            return t.reduce(function(e, t) {
                return t(e)
            }, e)
        },
        l = t.getResponseHeaders = function(e) {
            return (e.getAllResponseHeaders() || "").trim().split("\n").reduce(function(e, t) {
                var n = t.trim().split(":"),
                    r = n.shift().trim(),
                    i = n.join(":").trim();
                e[r] = i;
                return e
            }, {})
        },
        f = (t.withResponseHandlers = function(e, t) {
            e = (0, s.set)("options", t)(e);
            var n = (0, i.responseHandlers)(t);
            return n && n.length ? c(o.Promise.resolve(e), n) : o.Promise.resolve(e)
        }, function(e) {
            try {
                return 0 === e.getResponseHeader("content-type").indexOf("application/json") ? JSON.parse(e.responseText) : void 0
            } catch (e) {
                return
            }
        }),
        h = t.buildResponse = function(e) {
            return {
                status: e.status,
                statusText: e.statusText,
                data: "response" in e ? e.response : e.responseText,
                headers: l(e),
                xhr: e,
                responseText: e.responseText,
                responseJSON: f(e)
            }
        },
        p = (t.buildErrorResponse = function(e, t, n) {
            var r = h(e);
            return Object.assign(r, {
                statusText: r.statusText || t,
                responseJSON: f(e),
                errorMessage: t,
                errorCode: n
            })
        }, t.buildRequestError = function(e) {
            var t = void 0,
                n = "REQUEST ERROR";
            e instanceof Error ? t = e : ("string" == typeof e || e instanceof String) && (t = new Error(e));
            return Object.assign(t, {
                code: n,
                status: 0,
                statusText: t.message
            })
        }, t.requestIdKey = Symbol("requestId")),
        d = (t.withTracking = function(e) {
            if (!0 === e.doNotTrack) return e;
            var t = a.startTrackingRequest(e.url, "hub-http"),
                n = r({}, e);
            n[p] = t;
            return n
        }, t.withRetry = function e(t, n) {
            var s = t.retryAttempts || 0;
            return n(r({}, t, {
                retryAttempts: s
            })).catch(function(a) {
                if (a.retry && a.retry.exceededRetries) return o.Promise.reject((0, i.responseError)(a, "Request for " + a.options.method + " " + a.options.url + " failed with status code " + a.status + " after max retries exceeded (" + a.retry.maxRetries + "). " + (a.statusText || "")));
                if (a.retry) {
                    var u = a.retry.reason ? " Reason: " + a.retry.reason : "";
                    d(a, {
                        willBeRetried: !0,
                        retryReason: u,
                        retryAttempt: s + 1
                    });
                    console.log("Retrying. Retry attempt " + (s + 1) + " of " + a.retry.maxRetries + "." + u);
                    return new o.Promise(function(i) {
                        setTimeout(function() {
                            return i(e(r({}, t, {
                                retryAttempts: s + 1
                            }), n))
                        }, a.retry.delay)
                    })
                }
                return o.Promise.reject(a)
            })
        }, t.trackSuccess = function(e) {
            e.options && void 0 !== e.options[p] && a.finishTrackingRequest(e.options[p], e.options.url, "succeeded", {
                status: e.status,
                statusText: e.statusText
            });
            return e
        }, t.trackFailureBasedOnErrorResponse = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = t.willBeRetried,
                r = void 0 !== n && n,
                i = t.retryReason,
                o = t.retryAttempt;
            e.options && void 0 !== e.options[p] && ("ABORT" === e.errorCode ? a.finishTrackingRequest(e.options[p], e.options.url, "aborted", {
                status: e.status
            }) : "TIMEOUT" === e.errorCode ? a.finishTrackingRequest(e.options[p], e.options.url, "timedOut", {
                status: e.status
            }) : a.finishTrackingRequest(e.options[p], e.options.url, "failed", {
                status: e.status,
                statusText: e.statusText,
                willBeRetried: r,
                retryReason: i,
                retryAttempt: o
            }));
            return e
        })
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = window && window.performance && window.performance.timing && window.performance.timing.navigationStart,
        i = window && window.performance && window.performance.now,
        o = t.pageStartTimestamp = r ? window.performance.timing.navigationStart : (new Date).valueOf(),
        s = t.perfNow = i ? window.performance.now.bind(window.performance) : function() {
            return (new Date).valueOf() - o
        },
        a = 1;

    function u(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        if ("succeeded" === e || "timedOut" === e || "failed" === e || "aborted" === e) return !0;
        console && console.error && console.error("Invalid state passed " + (t ? "to " + t : "") + " (" + e + ")");
        return !1
    }

    function c(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        if ("pending" === e || u(e, t)) return !0;
        console && console.error && console.error("Invalid state passed " + (t ? "to " + t : "") + " (" + e + ")");
        return !1
    }
    var l = t.getHttpRequestStatsByState = function(e) {
            return c(e, "getHttpRequestStatsByState") && window.hubspot && window.hubspot._httpRequestStats && window.hubspot._httpRequestStats[e] ? Object.keys(window.hubspot._httpRequestStats[e]).map(function(t) {
                return window.hubspot._httpRequestStats[e][t]
            }) : []
        },
        f = t.getAllHttpRequestStats = function() {
            return l("pending").concat(l("succeeded"), l("timedOut"), l("failed"), l("aborted"))
        };
    if (window.hubspot) {
        window.hubspot.getAllHttpRequestStats || (window.hubspot.getAllHttpRequestStats = f);
        window.hubspot.getHttpRequestStatsByState || (window.hubspot.getHttpRequestStatsByState = l)
    }
    t.startTrackingRequest = function(e, t) {
        var n = a++;
        if (window.hubspot) {
            window.hubspot._httpRequestStats || (window.hubspot._httpRequestStats = {
                pending: {},
                succeeded: {},
                timedOut: {},
                failed: {},
                aborted: {}
            });
            window.hubspot._httpRequestStats.pending || (window.hubspot._httpRequestStats.pending = {});
            window.hubspot._httpRequestStats.pending[n] = {
                id: n,
                started: s(),
                state: "pending",
                url: e,
                via: t
            }
        }
        return n
    }, t.finishTrackingRequest = function(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "succeeded",
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (u(n, "finishTrackingRequest for " + t) && window.hubspot && window.hubspot._httpRequestStats && window.hubspot._httpRequestStats.pending) {
            var i = window.hubspot._httpRequestStats.pending[e];
            if (i) {
                delete window.hubspot._httpRequestStats.pending[e];
                i.finished = s();
                i.state = n;
                window.hubspot._httpRequestStats[n] || (window.hubspot._httpRequestStats[n] = {});
                window.hubspot._httpRequestStats[n][e] = i;
                Object.keys(r).forEach(function(e) {
                    null == i[e] && null != r[e] && (i[e] = r[e])
                })
            }
        }
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.setHeader = t.getHeader = void 0;
    var r = n(6);
    t.getHeader = function(e, t) {
        var n = t.headers;
        if (n)
            for (var r in n)
                if (n.hasOwnProperty(r) && r.toLowerCase() === e.toLowerCase()) return n[r]
    }, t.setHeader = function(e, t, n) {
        var i = n.headers;
        for (var o in i)
            if (i.hasOwnProperty(o) && o.toLowerCase() === e.toLowerCase()) return (0, r.setIn)(["headers", o], t)(n);
        return (0, r.setIn)(["headers", e], t)(n)
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.redirectTo = void 0;
    var r = function() {
            function e(e, t) {
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var s, a = e[Symbol.iterator](); !(r = (s = a.next()).done); r = !0) {
                        n.push(s.value);
                        if (t && n.length === t) break
                    }
                } catch (e) {
                    i = !0;
                    o = e
                } finally {
                    try {
                        !r && a.return && a.return()
                    } finally {
                        if (i) throw o
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
        i = n(72),
        o = function() {};
    t.redirectTo = function(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o,
            s = "HUB-HTTP_IGNORE_REDIRECTS",
            a = function(e) {
                return e && "true" === e.toLowerCase()
            },
            u = [
                [function() {
                    return t.ignoreRedirect
                }, "ignoreRedirect option is set"],
                [function() {
                    return t.localStorage && a(t.localStorage.getItem(s))
                }, "local storage key " + s + ' is set to "true"'],
                [function() {
                    return (0, i.isSafeMode)(t)
                }, "safe mode is enabled"]
            ].find(function(e) {
                return (0, r(e, 1)[0])()
            });
        if (u) {
            console.log("[hub-http] Skipping redirect because " + u[1]);
            return !1
        }
        n(t);
        t.location.href = e;
        return !0
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function(e) {
        return e && "true" === e.toLowerCase()
    };
    t.isSafeMode = function(e) {
        return e.safeMode || e.localStorage && r(e.localStorage.getItem("HUB-HTTP_SAFE_MODE"))
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = "hapijs_options",
        i = function(e) {
            return r + ":" + e.portalId
        },
        o = {
            get: function(e) {
                var t = e.localStorage && e.localStorage.getItem(i(e));
                return t ? JSON.parse(t) : {}
            },
            set: function(e, t) {
                e.localStorage && e.localStorage.setItem(i(e), JSON.stringify(t))
            },
            clear: function(e) {
                e.localStorage && e.localStorage.removeItem(i(e))
            }
        };
    t.default = o;
    e.exports = t.default
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.reloadOnUnauthorized = void 0;
    var r = n(47),
        i = n(75),
        o = "sales-extension-401-reload",
        s = 72e5;
    t.reloadOnUnauthorized = function(e, t) {
        return function(n) {
            return (0, i.onUnauthorized)(function() {
                return (0, r.hasCooldownElapsed)(o, s).then(function(t) {
                    (0, r.setCooldown)(o);
                    return t && e()
                }).catch(t).done()
            })(n)
        }
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.onUnauthorized = void 0;
    var r = i(n(4));

    function i(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        t.default = e;
        return t
    }
    t.onUnauthorized = function(e) {
        return function(t) {
            return r.onResponse(function(n) {
                t.ignoreRedirect || 401 !== n.status || e();
                return n
            })(t)
        }
    }
}, function(e, t) {
    e.exports = {
        "client-app-interaction": {
            name: "client-app-interaction",
            class: "interaction",
            properties: {
                action: "string",
                what_value: {
                    type: "number",
                    isOptional: !0
                },
                what_value_str: {
                    type: "string",
                    isOptional: !0
                },
                notificationAgeMinutes: {
                    type: "number",
                    isOptional: !0
                }
            },
            namespace: "clients"
        },
        "extension-show-notification": {
            name: "extension-show-notification",
            class: "usage",
            properties: {
                notificationAgeMinutes: "number",
                notificationSource: "string",
                isFromOnboarding: {
                    type: "boolean",
                    isOptional: !1
                }
            },
            namespace: "clients"
        },
        "extension-show-first-notification": {
            name: "extension-show-first-notification",
            class: "activation",
            namespace: "clients"
        },
        "extension-clicked-first-notification": {
            name: "extension-clicked-first-notification",
            class: "activation",
            namespace: "clients"
        },
        "extension-show-self-notification": {
            name: "extension-show-self-notification",
            class: "usage",
            namespace: "clients"
        },
        "update-extension": {
            name: "update-extension",
            class: "interaction",
            properties: {
                action: "string",
                version: "string"
            },
            namespace: "clients"
        },
        "simulated-remote-asset-update-triggered": {
            name: "simulated-remote-asset-update-triggered",
            class: "interaction",
            properties: {
                updateType: "string"
            },
            namespace: "clients"
        },
        pageview: {
            name: "pageview",
            class: "view",
            properties: {
                screen: {
                    type: "string",
                    isOptional: !0
                }
            },
            namespace: "clients"
        },
        "wizard-view": {
            name: "wizard-view",
            class: "view",
            properties: {
                action: "string",
                screen: "string",
                subscreen: {
                    type: "string",
                    isOptional: !0
                }
            },
            namespace: "clients"
        },
        "wizard-interaction": {
            name: "wizard-interaction",
            class: "interaction",
            properties: {
                action: "string",
                subAction: {
                    type: "string",
                    isOptional: !0
                },
                screen: "string",
                subscreen: {
                    type: "string",
                    isOptional: !0
                },
                what_value_str: {
                    type: "string",
                    isOptional: !0
                }
            },
            namespace: "clients"
        }
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.SignalsExtensionUsageTracker = void 0;
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
        i = n(78);

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }(t.SignalsExtensionUsageTracker = function() {
        function e() {
            o(this, e)
        }
        r(e, null, [{
            key: "initAuthedTracker",
            value: function(e, t) {
                this._tracker ? this._tracker = this._tracker.clone({
                    properties: t
                }) : this._tracker = (0, i.getTrackingClient)().createTracker({
                    events: e,
                    properties: t
                })
            }
        }, {
            key: "initUnauthedTracker",
            value: function(e, t) {
                t.email = null;
                t.hubId = null;
                this._tracker = (0, i.getTrackingClient)().createTracker({
                    events: e,
                    properties: t
                })
            }
        }, {
            key: "track",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                this._tracker ? this._tracker.track(e, t) : console.warn("Attempting to track an event before the tracker is set. Please make sure the tracker is initialized.")
            }
        }, {
            key: "getTracker",
            value: function() {
                return this._tracker
            }
        }]);
        return e
    }())._tracker = null
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getTrackingClient = void 0;
    var r = d(n(2)),
        i = d(n(79)),
        o = n(81),
        s = n(12),
        a = d(n(88)),
        u = p(n(89)),
        c = d(n(56)),
        l = n(92),
        f = n(18),
        h = n(7);

    function p(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        t.default = e;
        return t
    }

    function d(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var g = c.default && "function" == typeof c.default.sendBeacon,
        v = "https://app.hubspot" + ("qa" === r.default.getShort() ? "qa" : "") + ".com",
        y = "/usage-logging/v1/log/hublytics-multi/no-auth",
        m = function(e) {
            return console.error(e)
        };
    t.getTrackingClient = function() {
        return (0, o.createClient)({
            getDebug: function() {
                return r.default.debug(s.debugKey)
            },
            getEmail: function() {
                return (0, f.getVerifiedEmail)()
            },
            getHubId: function() {
                return (0, h.getPortalId)()
            },
            getHstc: function() {
                return (0, l.getHstcCookie)()
            },
            getLang: function() {
                return c.default.language || c.default.userLanguage || void 0
            },
            getTempStorage: u.get,
            setTempStorage: u.set,
            reportError: m,
            send: function(e) {
                var t = e.events,
                    n = e.query,
                    r = e.isBeforeUnload,
                    o = y + "?" + n,
                    s = t,
                    u = function() {
                        var e = i.default.post(o, {
                            data: s
                        }).catch(m);
                        e && "function" == typeof e.done && e.done()
                    };
                r && g ? (0, a.default)("" + v + o, s, u) : u()
            }
        })
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = o(n(15)),
        i = o(n(80));

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.default = (0, r.default)(i.default);
    e.exports = t.default
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(9),
        i = a(n(4)),
        o = a(n(21)),
        s = a(n(16));

    function a(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        t.default = e;
        return t
    }
    t.default = (0, r.createStack)(i.services, o.defaults, s.allowTimeoutOverride, i.jsonBody, i.httpsOnly, o.hubapi, i.withQuery, s.rewriteUrl, i.reportOptionsError, o.retryOnError, i.validateStatus, i.jsonResponse);
    e.exports = t.default
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.createClient = void 0;
    var r = n(34),
        i = l(n(82)),
        o = l(n(83)),
        s = l(n(84)),
        a = l(n(85)),
        u = l(n(86)),
        c = l(n(87));

    function l(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        t.default = e;
        return t
    }
    t.createClient = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = r.clientDependenciesSchema.normalize(e);
        r.clientDependenciesSchema.validate(t, '"createClient"', function(e) {
            throw e
        });
        var n = t.clientName,
            l = t.getDebug,
            f = t.getEmail,
            h = t.getHubId,
            p = t.getHstc,
            d = t.getLang,
            g = t.getTempStorage,
            v = t.logMessage,
            y = t.logError,
            m = t.reportError,
            _ = t.send,
            b = t.setTempStorage,
            O = i.createEventPool({
                getTempStorage: g,
                setTempStorage: b
            }),
            w = function(e, t) {
                var n = e.identifiers,
                    r = e.isBeforeUnload,
                    i = void 0 !== r && r,
                    o = e.isExternalHost,
                    s = void 0 !== o && o,
                    a = !(!n.raw.email || !n.raw.hubId),
                    u = "clientSendTimestamp=" + Date.now();
                s && (u += "&dil=true");
                _({
                    events: t,
                    isBeforeUnload: i,
                    isAuthed: a,
                    query: u
                })
            },
            S = function(e) {
                var t = e.identifiers,
                    n = O.flush();
                n && n.length && w({
                    identifiers: t
                }, n)
            },
            I = function(e, t) {
                var n = e.identifiers;
                O.getIsInitialized() || O.initialize({
                    normalizeEvent: function() {
                        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        return o.normalizeIdentifiers.apply(o, [n].concat(t))
                    }
                });
                O.push(t);
                i.scheduleFlush(function() {
                    return S({
                        identifiers: n
                    })
                })
            },
            E = function(e) {
                var t = e.bypassPool,
                    n = e.isBeforeUnload,
                    r = e.isExternalHost,
                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                t || n ? w({
                    identifiers: i,
                    isBeforeUnload: n,
                    isExternalHost: r
                }, [o]) : I({
                    identifiers: i
                }, o)
            },
            A = function() {
                return u.getMetaProperties({
                    clientName: n,
                    getTempStorage: g,
                    setTempStorage: b
                })
            };
        return {
            createTracker: function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return c.createLockedTracker.apply(c, [{
                    createIdentifiers: a.createIdentifiers,
                    createEventPayload: o.createEventPayload,
                    createDictionary: s.createDictionary,
                    dictionaryLookup: s.dictionaryLookup,
                    getMetaProperties: A,
                    getDebug: l,
                    getEmail: f,
                    getHubId: h,
                    getHstc: p,
                    getLang: d,
                    logError: y,
                    logMessage: v,
                    reportError: m,
                    sendToClient: E
                }].concat(t))
            }
        }
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.createEventPool = t.createQueue = t.scheduleFlush = void 0;
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = n(11),
        o = n(12),
        s = Date.now(),
        a = 6e3,
        u = 2e3,
        c = JSON.stringify([]),
        l = !1,
        f = !1,
        h = function() {
            return Date.now() - s
        },
        p = function() {
            return !f && h() < a
        },
        d = function(e) {
            return e()
        },
        g = function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            if (!l) {
                setTimeout(function() {
                    d.apply(void 0, t);
                    f = !0
                }, a - h());
                l = !0
            }
        },
        v = (0, i.debounce)(d, u),
        y = (t.scheduleFlush = function() {
            p() ? g.apply(void 0, arguments) : v.apply(void 0, arguments)
        }, t.createQueue = function() {
            var e = [];
            return {
                enqueue: function(t) {
                    return e.unshift(t)
                },
                dequeue: function() {
                    return e.shift()
                },
                peek: function() {
                    return e[0]
                }
            }
        });
    t.createEventPool = function(e) {
        var t = e.getTempStorage,
            n = e.setTempStorage,
            s = !1,
            a = y();
        return {
            getIsInitialized: function() {
                return s
            },
            initialize: function(e) {
                var n = e.normalizeEvent;
                try {
                    var u = t(o.storageKey) || c,
                        l = JSON.parse(u);
                    l && (0, i.isArray)(l) && l.forEach(function(e) {
                        e && "object" === (void 0 === e ? "undefined" : r(e)) && a.enqueue(n(e))
                    });
                    s = !0
                } catch (e) {}
            },
            push: function(e) {
                try {
                    var r = t(o.storageKey) || c,
                        i = JSON.parse(r);
                    i.push(e);
                    n(o.storageKey, JSON.stringify(i))
                } catch (e) {}
                a.enqueue(e)
            },
            flush: function() {
                var e = [];
                do {
                    var t = a.dequeue();
                    t && e.unshift(t)
                } while (a.peek());
                try {
                    n(o.storageKey, c)
                } catch (e) {}
                return e
            },
            peek: a.peek
        }
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.createEventPayload = t.transformEventPayload = t.normalizeIdentifiers = t.applyIdentifiers = void 0;
    var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        i = n(11),
        o = n(17),
        s = n(12);

    function a(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }

    function u(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
    }
    var c = {
            what_event_subtype: "what_event_subtype",
            what_value: "what_value",
            what_value_str: "what_value_str",
            where_subscreen2: "where_subscreen2",
            subscreen2: "where_subscreen2"
        },
        l = Object.keys(c),
        f = ["email", "userId", "hubId", "hstc", "utk"],
        h = ["USER_ID", "EMAIL"],
        p = ["TEMP_ID", "VISITOR"],
        d = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            return "string" == typeof e && -1 !== t.indexOf(e.split(":")[0])
        },
        g = function(e, t, n) {
            var r = t || n;
            if (!r || "*" === r) throw (0, o.eventError)('Namespace not found for "' + e + '".');
            return r
        },
        v = t.applyIdentifiers = function(e, t) {
            !t.who_email && e.raw.email && (t.who_email = e.raw.email);
            !t.who_identifier && e.raw.userId && (t.who_identifier = e.raw.userId);
            t.who_identifier_v2 || (t.who_identifier_v2 = e.user);
            t.who_team_identifier || (t.who_team_identifier = e.team);
            t.utk || (t.utk = e.utk);
            return t
        },
        y = (t.normalizeIdentifiers = function(e, t) {
            var n = d(e.user, h),
                r = d(t.who_identifier_v2, p),
                i = "[NOT YET SET, SHOULD GET SET PRIOR TO FLUSH]" === t.who_identifier_v2;
            (n && r || i) && (t.who_identifier_v2 = e.user);
            return v(e, t)
        }, t.transformEventPayload = function(e, t) {
            var n = t.namespace,
                o = t.lang,
                h = t.screen,
                p = t.subscreen,
                d = t.timestamp,
                v = t.screenWidth,
                y = t.screenHeight,
                m = t.windowWidth,
                _ = t.windowHeight,
                b = t.device_id,
                O = t.session_id,
                w = t.last_sequence_number,
                S = t.last_event_id,
                I = u(t, ["namespace", "lang", "screen", "subscreen", "timestamp", "screenWidth", "screenHeight", "windowWidth", "windowHeight", "device_id", "session_id", "last_sequence_number", "last_event_id"]),
                E = {
                    hublytics_account_id: s.accountId,
                    where_app: g(I.eventKey, e.namespace, n),
                    where_screen: h || "unknown",
                    where_subscreen: p || "",
                    when_timestamp: d,
                    device_id: b,
                    session_id: O,
                    event_id: S,
                    sequence_number: w,
                    language: o,
                    what_event: e.name,
                    what_event_class: e.class.toUpperCase(),
                    what_version: e.version,
                    library: {
                        name: "usage-tracker-js",
                        version: 1
                    },
                    what_extra_json: JSON.stringify(r({
                        screenWidth: v,
                        screenHeight: y,
                        windowWidth: m,
                        windowHeight: _,
                        locale: o
                    }, (0, i.omit)(I, [].concat(f, a(l)))))
                };
            l.forEach(function(e) {
                var n = t[e];
                "undefined" !== n && (E[c[e]] = n)
            });
            return E
        });
    t.createEventPayload = function(e, t, n) {
        var r = y(e, t);
        return v(n, r)
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.createDictionary = t.dictionaryLookup = t.deriveEventPropertySchema = void 0;
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = n(11),
        o = u(n(49)),
        s = n(17),
        a = n(34);

    function u(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        t.default = e;
        return t
    }
    var c = function(e) {
            return Object.keys(e).reduce(function(t, n) {
                var r = e[n];
                r.properties = (0, i.mapObject)(r.properties, function(e, t) {
                    return "string" == typeof t || (0, i.isArray)(t) ? {
                        type: t
                    } : t
                });
                r.properties = a.eventPropertySchema.normalizeEach(r.properties);
                t[n] = r;
                return t
            }, {})
        },
        l = t.deriveEventPropertySchema = function(e) {
            var t = e.properties || {},
                n = Object.keys(t).reduce(function(e, n) {
                    var r = t[n],
                        o = r.type,
                        s = r.isOptional;
                    if (-1 !== a.eventPropertyTypes.indexOf(o)) e[n] = {
                        types: [o],
                        isOptional: s
                    };
                    else if (-1 !== o.indexOf("oneOf")) {
                        var u = (0, i.between)(o, "[", "]").split(",").map(function(e) {
                            return (0, i.trim)((0, i.trim)(e, '"'), "'")
                        });
                        e[n] = {
                            oneOf: u,
                            isOptional: s
                        }
                    } else(0, i.isArray)(o) && (e[n] = {
                        oneOf: o,
                        isOptional: s
                    });
                    return e
                }, {});
            return o.create("event property", s.eventError, n, !1)
        },
        f = function(e, t, n) {
            if (!e || "object" !== (void 0 === e ? "undefined" : r(e))) throw (0, s.eventError)('Invalid event key. The event definition for "' + t + '" is undefined. Check your events.yaml dictionary.');
            e && l(e).validate(n, 'Event "' + t + '"')
        };
    t.dictionaryLookup = function(e, t, n) {
        var r = e[t];
        f(r, t, n);
        return r
    }, t.createDictionary = function(e, t) {
        var n = a.eventDefinitionSchema.normalizeEach(e);
        a.eventDefinitionSchema.validateEach(n, t);
        return c(n)
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.createIdentifiers = void 0;
    var r = n(12),
        i = n(17),
        o = function(e, t) {
            var n = e.utk,
                o = e.email,
                s = e.hubId,
                a = t.allowUnauthed,
                u = t.isExternalHost,
                c = void 0,
                l = void 0,
                f = void 0;
            s && (f = s);
            o ? l = "EMAIL:::" + o + ":::" + r.accountId : n && (c = u ? "TEMP_ID:::" + n + ":::" + r.accountId : "VISITOR:::" + n + ":::" + r.accountId);
            if (!c && !l) throw (0, i.eventError)("Could not identify user. Please specify either an email address or __hstc cookie identifer.");
            if (!a) {
                if (!l) throw (0, i.eventError)("Could not identify user. Please specify an email address.");
                if (!f) throw (0, i.eventError)("Could not identify hub. Please specify a hubId.")
            }
            return {
                user: l || c,
                team: f
            }
        },
        s = function(e) {
            var t = void 0;
            if (e) {
                var n = e.split(".");
                n.length > 1 && (t = n[1])
            }
            return t
        };
    t.createIdentifiers = function(e, t) {
        var n = e.email,
            r = e.userId,
            i = e.hubId,
            a = e.hstc,
            u = t.allowUnauthed,
            c = t.isExternalHost,
            l = s(a),
            f = o({
                utk: l,
                email: n,
                hubId: i
            }, {
                allowUnauthed: u,
                isExternalHost: c
            });
        return {
            user: f.user,
            team: f.team,
            utk: l,
            raw: {
                email: n,
                userId: r,
                hubId: i,
                hstc: a
            }
        }
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getMetaProperties = t.getStaticMetaProperties = t.getDynamicMetaProperties = t.refreshHamplitudeProperties = void 0;
    var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        i = n(11),
        o = n(12);

    function s(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
    }
    var a = 18e5,
        u = [{
            name: "windows 10",
            pattern: /(Windows 10.0|Windows NT 10.0)/
        }, {
            name: "windows 8",
            pattern: /(Windows 8|Windows8.1|Windows NT 6.2|Windows NT 6.3)/
        }, {
            name: "windows 7",
            pattern: /(Windows 7|Windows NT 6.1)/
        }, {
            name: "windows vista",
            pattern: /Windows NT 6.0/
        }, {
            name: "windows xp",
            pattern: /(Windows NT 5.1|Windows XP)/
        }, {
            name: "android",
            pattern: /Android/
        }, {
            name: "linux",
            pattern: /(Linux|X11)/
        }, {
            name: "ios",
            pattern: /(iPhone|iPad|iPod)/
        }, {
            name: "mac",
            pattern: /Mac OS X|MacPPC|MacIntel|Mac_PowerPC|Macintosh/
        }],
        c = null,
        l = function(e) {
            return {
                device_id: (0, i.makeUuid)(),
                last_event_id: 0,
                last_sequence_number: 0,
                last_timestamp_checked_against_session: e,
                session_id: e
            }
        },
        f = function(e, t) {
            var n = c;
            n || (n = (n = e(o.hamplitudeKey)) ? JSON.parse(n) : l(t));
            return n
        },
        h = function(e, t) {
            c = t;
            e(o.hamplitudeKey, JSON.stringify(t))
        },
        p = t.refreshHamplitudeProperties = function(e, t) {
            var n = e.last_event_id,
                i = e.last_sequence_number,
                o = e.session_id,
                u = e.last_timestamp_checked_against_session,
                c = s(e, ["last_event_id", "last_sequence_number", "session_id", "last_timestamp_checked_against_session"]),
                l = r({}, c);
            if (t - u > a) {
                l.last_event_id = 0;
                l.session_id = t
            } else {
                l.session_id = o;
                l.last_timestamp_checked_against_session = t
            }
            l.last_event_id = n + 1;
            l.last_sequence_number = i + 1;
            return l
        },
        d = function(e, t, n) {
            var r = p(f(e, n), n);
            h(t, r);
            return r
        },
        g = function(e) {
            var t = "unknown";
            try {
                u.forEach(function(n) {
                    var r = n.name;
                    n.pattern.test(e) && (t = r)
                })
            } catch (e) {}
            return t.toLowerCase()
        },
        v = t.getDynamicMetaProperties = function(e) {
            var t = e.getTempStorage,
                n = e.setTempStorage,
                o = Date.now(),
                s = d(t, n, o),
                a = r({}, s, {
                    timestamp: o,
                    currentPageUrl: "",
                    currentPageUrlCleaned: ""
                });
            if (window && window.location) {
                a.currentPageUrl = window.location.href;
                a.currentPageUrlCleaned = (0, i.cleanUrl)(a.currentPageUrl)
            }
            return a
        },
        y = t.getStaticMetaProperties = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments[1],
                n = {
                    windowWidth: -1,
                    windowHeight: -1,
                    screenWidth: -1,
                    screenHeight: -1,
                    screenSize: -1,
                    lastPageUrl: "",
                    lastPageUrlCleaned: "",
                    howOsDetailed: "",
                    singlePageAppSessionId: Date.now(),
                    trackingClient: t || "custom"
                };
            if (window) {
                n.windowWidth = window.innerWidth;
                n.windowHeight = window.innerHeight
            }
            navigator && "string" == typeof navigator.appVersion && (n.howOsDetailed = g((0, i.between)(navigator.appVersion, "(", ")")));
            if (e && e.width && e.height) {
                n.screenWidth = e.width;
                n.screenHeight = e.height;
                e.width > 1024 ? n.screenSize = "large (> 1024)" : e.width > 680 ? n.screenSize = "medium (680 - 1024)" : n.screenSize = "small (< 680)"
            }
            if (document) {
                n.lastPageUrl = document.referrer;
                n.lastPageUrlCleaned = (0, i.cleanUrl)(n.lastPageUrl)
            }
            return n
        },
        m = (0, i.once)(y);
    t.getMetaProperties = function(e) {
        var t = e.clientName,
            n = e.getTempStorage,
            i = e.setTempStorage;
        return r({}, m(screen, t), v({
            getTempStorage: n,
            setTempStorage: i
        }))
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.createLockedTracker = void 0;
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        o = n(17),
        s = n(11),
        a = n(34),
        u = ["eventKey", "namespace", "lang", "email", "userId", "hubId", "hstc"],
        c = function(e, t, n) {
            var r = e.events,
                i = e.logError,
                o = e.onError,
                s = e.dictionaryLookup;
            try {
                return s(r, t, n)
            } catch (e) {
                i(e);
                o(e);
                return null
            }
        },
        l = function(e, t) {
            var n = e.createIdentifiers,
                r = e.allowUnauthed,
                i = e.isExternalHost,
                o = e.logError,
                s = e.onError,
                a = t.email,
                u = t.userId,
                c = t.hubId,
                l = t.hstc;
            try {
                return n({
                    email: a,
                    userId: u,
                    hubId: c,
                    hstc: l
                }, {
                    allowUnauthed: r,
                    isExternalHost: i
                })
            } catch (e) {
                o(e);
                s(e);
                return null
            }
        },
        f = function(e, t, n, r) {
            var i = e.createEventPayload,
                o = e.logError,
                s = e.onError;
            try {
                return i(t, r, n)
            } catch (e) {
                o(e);
                s(e);
                return null
            }
        },
        h = function(e, t, n, r) {
            var i = e.logMessage;
            i((0, o.debugLog)("event tracked", {
                eventKey: '"' + t + '"',
                eventName: r.what_event,
                eventNamespace: r.where_app,
                eventProperties: (0, s.omit)(n, u)
            }));
            var a = JSON.parse(JSON.stringify(r));
            a.what_extra_json = JSON.parse(a.what_extra_json);
            i(a)
        },
        p = function(e, t, n) {
            var r = c(e, t, n),
                i = l(e, n);
            if (!r || !i) return !1;
            var o = f(e, r, i, n);
            if (!o) return !1;
            if ("function" == typeof e.debug ? e.debug() : e.debug) try {
                h(e, t, n, o)
            } catch (e) {}
            e.sendToClient(e, i, o);
            return !0
        },
        d = function(e, t, n, r) {
            return (0, s.defaults)((0, s.defaults)(i({
                eventKey: e
            }, t), (0, s.shallowCopy)(n)), (0, s.shallowCopy)(r))
        },
        g = function(e, t) {
            if (!t || "object" !== (void 0 === t ? "undefined" : r(t))) throw (0, o.configError)('Invalid argument. The "createTracker" function requires to be passed a config argument of type "object". Received type "' + (void 0 === t ? "undefined" : r(t)) + '".');
            var n = a.trackerConfigSchema.mutate(function(t) {
                    t.debug.default = e.getDebug;
                    t.onError.default = e.reportError;
                    return t
                }),
                u = a.trackerPropertiesSchema.mutate(function(t) {
                    t.email.default = e.getEmail;
                    t.hubId.default = e.getHubId;
                    t.hstc.default = e.getHstc;
                    t.lang.default = e.getLang;
                    return t
                }),
                c = n.normalize(t);
            n.validate(c, '"createTracker"');
            var l = u.normalize(c.properties);
            u.validate(l, '"createTracker"');
            var f = e.createDictionary(c.events, '"createTracker"');
            return i({
                events: f,
                properties: l
            }, (0, s.omit)(c, ["events", "properties"]), e)
        };
    t.createLockedTracker = function e(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            u = g(t, n),
            c = {},
            l = i({}, u.properties),
            f = !0,
            h = function(e) {
                u.lastKnownEventProperties && u.lastKnownEventProperties.length && u.lastKnownEventProperties.forEach(function(t) {
                    var n = e[t];
                    void 0 !== n ? c[t] = n : n = c[t];
                    n && n !== l[t] && (l[t] = n)
                })
            };
        return {
            clone: function() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (!n || "object" !== (void 0 === n ? "undefined" : r(n))) throw (0, o.genericError)('Invalid argument. The "clone" method requires to be passed a valid tracker config of type "object". Received type "' + (void 0 === n ? "undefined" : r(n)) + '".');
                var i = (0, s.omit)((0, s.defaults)(n, u), Object.keys(t)),
                    c = (0, s.omit)(l, a.trackerPropertiesSchema.getKeys(), !1),
                    f = (0, s.omit)(l, Object.keys(c));
                i.properties = (0, s.defaults)(n.properties || {}, c);
                u.preserveTrackerProperties && (i.properties = (0, s.defaults)(i.properties, f));
                return e(t, i)
            },
            config: i({}, (0, s.omit)(u, ["properties"]), {
                properties: l
            }),
            setProperties: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (!e || "object" !== (void 0 === e ? "undefined" : r(e))) throw (0, o.genericError)('Invalid argument. The "setProperties" method requires to be passed a properties argument of type "object". Received type "' + (void 0 === e ? "undefined" : r(e)) + '".');
                Object.keys(e).forEach(function(t) {
                    var n = e[t];
                    l[t] = n
                });
                f = !0
            },
            track: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (!e || "string" != typeof e) throw (0, o.genericError)('Invalid argument. The "track" method requires to be passed an eventKey of type "string". Received type "' + (void 0 === e ? "undefined" : r(e)) + '".');
                if (!t || "object" !== (void 0 === t ? "undefined" : r(t))) throw (0, o.genericError)('Invalid argument. The "track" method requires the 2nd arg to be passed eventProperties of type "object". Received type "' + (void 0 === t ? "undefined" : r(t)) + '".');
                var n = u.getMetaProperties(),
                    i = d(e, t, l, n);
                h(i);
                f ? (0, s.resolveAsyncProperties)(l, u.onError, function(r) {
                    l = (0, s.defaults)(r, l);
                    f = !1;
                    p(u, e, d(e, t, l, n))
                }) : p(u, e, i)
            }
        }
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = function(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {},
            r = void 0;
        try {
            r = navigator.sendBeacon(e, new Blob([JSON.stringify(t)], {
                type: "text/plain"
            }))
        } catch (e) {
            r = !1
        }
        r || "function" != typeof n || n();
        return r
    };
    e.exports = t.default
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.set = t.get = void 0;
    var r = i(n(90));

    function i(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        t.default = e;
        return t
    }
    var o = !1;
    try {
        o = window && window.localStorage
    } catch (e) {}
    t.get = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = "";
        if (o) try {
            t = window.localStorage[e] || ""
        } catch (n) {
            t = r.get(e)
        }
        return t
    }, t.set = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        if (o) try {
            window.localStorage[e] = t || ""
        } catch (n) {
            r.set(e, t)
        }
        return t
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.set = t.get = void 0;
    var r = n(91);
    t.get = function(e) {
        return (0, r.getCookie)(e, document.cookie)
    }, t.set = function(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5184e6,
            r = new Date,
            i = new Date(r.setTime(r.getTime() + n)).toUTCString();
        document.cookie = e + "=" + t + ";expires=" + i + ";path=/"
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getCookie = function(e, t) {
        var n = ("; " + t).split(";");
        if (n.length)
            for (var r = 0; r < n.length; r++) {
                var i = n[r].split("=");
                if (2 === i.length && i[0].trim() === e) return i[1]
            }
        return null
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getHstcCookie = void 0;
    var r = c(n(3)),
        i = c(n(1)),
        o = n(12),
        s = c(n(0)),
        a = n(50),
        u = n(5);

    function c(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.getHstcCookie = function() {
        return new r.default.Promise(function(e, t) {
            return (0, a.waitForChromeCookies)().then(function() {
                return i.default.cookies.get({
                    url: "https://hubspot.com",
                    name: o.hstcKey
                }, function(n) {
                    var r = null != n ? n.value : void 0;
                    if (r) return e(r);
                    var i = null,
                        a = (0, u.getLastError)();
                    i = a ? "getHstcCookie: Unable to get hstc cookie: " + a.message : "getHstcCookie: unable to get hstc cookie";
                    s.default.log(i);
                    return t(new Error("Error: Couldn't find " + o.hstcKey + " cookie"))
                })
            })
        })
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = i(n(3));

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e, t) {
        if (void 0 === t) {
            t = e;
            e = void 0
        }
        return new r.default.Promise(function(n) {
            setTimeout(function() {
                n(e)
            }, t)
        })
    }
    t.default = o;
    e.exports = t.default
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.reloadIfNeeded = void 0;
    var r = s(n(24)),
        i = n(47),
        o = n(10);

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var a = "sales-extension_last-reload",
        u = 216e5,
        c = function() {
            (0, i.setCooldown)(a);
            (0, o.restartExtension)()
        };
    t.reloadIfNeeded = async function() {
        try {
            await (0, i.hasCooldownElapsed)(a, u) && c()
        } catch (e) {
            r.default.captureException(e && e.message || e)
        }
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(9),
        i = l(n(15)),
        o = c(n(4)),
        s = n(16),
        a = l(n(42)),
        u = n(43);

    function c(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        t.default = e;
        return t
    }

    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.default = (0, i.default)((0, r.createStack)(o.services, a.default, o.jsonBody, o.httpsOnly, o.environmentUrl(o.standardApi("app", "hubspot")), o.withQuery, s.rewriteUrl, o.validateStatus, u.immutableResponse));
    e.exports = t.default
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r, i = function() {
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

    function s(e, t, n) {
        t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n;
        return e
    }
    var a = {
            hubapi: ["api", "email", "etsu", "feedback", "internal", "onboarding", "nav", "private", "users", "zorse"],
            hubspot: ["app", "developers", "cms2", "cta", "forms", "library", "login", "marketplace", "onboarding", "payment", "services", "signup", "sites", "spitfire", "uploads"],
            hubteam: ["graph", "mesos", "rodan2", "tools", "bootstrap", "test"]
        },
        u = ["sidekick", "sidekickapp", "leadin", "hs-sites", "mktg-grader", "inbound", "signals", "private-hubteam", "app-api"],
        c = {
            hubapi: "api",
            hubspot: "app",
            hubteam: "tools"
        },
        l = (s(r = {
            sidekick: {
                true: {
                    true: "local.getsidekick.com",
                    false: "api.getsidekick.com"
                },
                false: {
                    true: "local.getsidekickqa.com",
                    false: "api.getsidekickqa.com"
                }
            },
            sidekickapp: {
                true: {
                    true: "local.getsidekick.com",
                    false: "app.getsidekick.com"
                },
                false: {
                    true: "local.getsidekickqa.com",
                    false: "app.getsidekickqa.com"
                }
            },
            leadin: {
                true: {
                    true: "local.leadin.com",
                    false: "api.leadin.com"
                },
                false: {
                    true: "local.leadinqa.com",
                    false: "api.leadinqa.com"
                }
            }
        }, "hs-sites", {
            true: {
                true: "local.hs-sites.com",
                false: "hs-sites.com"
            },
            false: {
                true: "local.qa.hs-sites.com",
                false: "qa.hs-sites.com"
            }
        }), s(r, "mktg-grader", {
            true: {
                true: "local.grader.com",
                false: "marketing.grader.com"
            },
            false: {
                true: "local.graderqa.com",
                false: "marketing.graderqa.com"
            }
        }), s(r, "inbound", {
            true: {
                true: "local.inbound.org",
                false: "inbound.org"
            },
            false: {
                true: "local.dev.inbound.org",
                false: "dev.inbound.org"
            }
        }), s(r, "signals", {
            true: {
                true: "local.getsignals.com",
                false: "api.getsignals.com"
            },
            false: {
                true: "local.getsignalsqa.com",
                false: "api.getsignalsqa.com"
            }
        }), s(r, "private-hubteam", {
            true: {
                true: "local.hubteam.com",
                false: "private.hubteam.com"
            },
            false: {
                true: "local.hubteamqa.com",
                false: "private.hubteamqa.com"
            }
        }), s(r, "app-api", {
            true: {
                true: "local.hubspot.com",
                false: "api.hubspot.com"
            },
            false: {
                true: "local.hubspotqa.com",
                false: "api.hubspotqa.com"
            }
        }), r),
        f = new(function() {
            function e() {
                o(this, e);
                this.lbDomainMap = e._buildLbDomainMap();
                this.domainLbMap = e._buildDomainLbMap(this.lbDomainMap)
            }
            i(e, [{
                key: "getDomain",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        r = this.lbDomainMap[e];
                    if (r) return r[t][n]
                }
            }, {
                key: "getLbInfo",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                        n = this.domainLbMap[e];
                    if (n) {
                        var r = n.defaultLb;
                        t && n.multiple && n.lbs[t] && (r = t);
                        return {
                            lb: r,
                            production: n.production,
                            local: n.local
                        }
                    }
                }
            }, {
                key: "getLb",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                        n = this.getLbInfo(e, t);
                    if (n) return n.lb
                }
            }, {
                key: "getProduction",
                value: function(e) {
                    var t = this.getLbInfo(e);
                    if (t) return t.production
                }
            }, {
                key: "getLocal",
                value: function(e) {
                    var t = this.getLbInfo(e);
                    if (t) return t.local
                }
            }], [{
                key: "_buildLbDomainMap",
                value: function() {
                    var e = {};
                    Object.keys(a).forEach(function(t) {
                        return a[t].forEach(function(n) {
                            return e[n] = {
                                true: {
                                    true: "local." + t + ".com",
                                    false: n + "." + t + ".com"
                                },
                                false: {
                                    true: "local." + t + "qa.com",
                                    false: n + "." + t + "qa.com"
                                }
                            }
                        })
                    });
                    u.forEach(function(t) {
                        return e[t] = l[t]
                    });
                    return e
                }
            }, {
                key: "_buildDomainLbMap",
                value: function(e) {
                    var t = {};
                    Object.keys(e).forEach(function(n) {
                        return [!0, !1].forEach(function(r) {
                            return [!0, !1].forEach(function(i) {
                                var o = e[n][r][i],
                                    a = t[o];
                                if (a) {
                                    a.lbs[n] = !0;
                                    a.multiple = !0
                                } else t[o] = {
                                    defaultLb: n,
                                    lbs: s({}, n, !0),
                                    production: r,
                                    local: i
                                }
                            })
                        })
                    });
                    Object.keys(c).forEach(function(e) {
                        var n = c[e];
                        t["local." + e + "qa.com"].defaultLb = n;
                        t["local." + e + ".com"].defaultLb = n
                    });
                    return t
                }
            }]);
            return e
        }());
    f.STANDARD_LBS = a;
    f.NONSTANDARD_LBS = u;
    t.default = f;
    e.exports = t.default
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getAndSetCsrfForContentScript = void 0;
    var r = l(n(2)),
        i = l(n(1)),
        o = l(n(0)),
        s = l(n(108)),
        a = n(109),
        u = n(50),
        c = n(5);

    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function f(e, t, n) {
        t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n;
        return e
    }
    var h = "X-HubSpot-CSRF-hubspotapi",
        p = function(e) {
            i.default.storage.local.set(f({}, h, e.value))
        },
        d = t.getAndSetCsrfForContentScript = function() {
            return new Promise(function(e, t) {
                (0, u.waitForChromeCookies)().then(function() {
                    i.default.cookies.get({
                        url: a.HUBSPOT_API_COOKIE[r.default.getShort("api")].url,
                        name: a.HUBSPOT_CSRF_COOKIE_NAME
                    }, function(n) {
                        var r = (0, c.getLastError)();
                        if (!n && r) {
                            o.default.error("csrfCookieMonitor: Unable to get csrf cookie: " + r.message);
                            return t()
                        }
                        o.default.log("Detected csrf cookie on startup", n);
                        if (n && n.value) {
                            p(n);
                            return e(n.value)
                        }
                        return e(null)
                    })
                }, function(e) {
                    return t("csrfCookieMonitor failure: " + e)
                })
            })
        },
        g = async function() {
            try {
                await d()
            } catch (e) {
                o.default.error("No CSRF Cookie found: ", e)
            }(0, s.default)(a.HUBSPOT_CSRF_COOKIE_NAME, a.HUBSPOT_API_COOKIE[r.default.getShort("api")].domain, function(e) {
                var t = e.cookie;
                o.default.log("Detected csrf cookie change", t);
                t && t.value && p(t)
            })
        };
    t.default = {
        init: g
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = i(n(54));

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.default = function(e, t) {
        for (var n in t) "string" == typeof t[n] && (t[n] = r.default.SafeString(t[n]));
        return r.default.text(e, t)
    };
    e.exports = t.default
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = /^(?:coolrobot@hubspot.com|.*@setup.hubspot(?:qa)?.com)$/,
        i = t.emailFromActivity = function(e) {
            return e && e.source && e.source.email
        },
        o = t.isOnboardingTestEmail = function(e) {
            return !!e && r.test(e)
        };
    t.isActivityFromOnboarding = function(e) {
        return o(i(e))
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.RequestBlocker = void 0;
    var r = function() {
            function e(e, t) {
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var s, a = e[Symbol.iterator](); !(r = (s = a.next()).done); r = !0) {
                        n.push(s.value);
                        if (t && n.length === t) break
                    }
                } catch (e) {
                    i = !0;
                    o = e
                } finally {
                    try {
                        !r && a.return && a.return()
                    } finally {
                        if (i) throw o
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
        i = h(n(0)),
        o = f(n(18)),
        s = n(101),
        a = h(n(1)),
        u = n(22),
        c = n(23),
        l = n(102);

    function f(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        t.default = e;
        return t
    }

    function h(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function p(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var d = t.RequestBlocker = function e() {
        var t = this;
        p(this, e);
        this.blockedGoogleUrlCache = [];
        this.handleOwnTrackerRequest = function(t, n, r) {
            switch (t) {
                case e.TRACKER_TYPES.OPEN:
                    return e.BLOCKING_RESPONSES.block;
                case e.TRACKER_TYPES.CLICK:
                    return {
                        redirectUrl: n = r === e.LINK_TRACKER_TYPES.BASE_54_ENCODED ? (0, l.decodeBase54)(n) : decodeURIComponent(n)
                    };
                default:
                    return e.BLOCKING_RESPONSES.block
            }
        };
        this.insertIntoCache = function(e) {
            var n = t.blockedGoogleUrlCache.findIndex(function(t) {
                return t === e
            });
            if (n < 0) t.blockedGoogleUrlCache.push(e);
            else {
                var r = t.blockedGoogleUrlCache.splice(n, 1).pop();
                t.blockedGoogleUrlCache.push(r)
            }
        };
        this.handleTrackerRequest = function(n, i, o, a, u, c) {
            var l = i.match(s.GOOGLE_CONTENT_PROXY),
                f = +a === o,
                h = i.split("#"),
                p = r(h, 2),
                d = p[0],
                g = p[1];
            if (f) {
                l && t.insertIntoCache(d);
                return t.handleOwnTrackerRequest(n, u, c)
            }
            return l ? {
                redirectUrl: decodeURIComponent(g)
            } : e.BLOCKING_RESPONSES.allow
        };
        this.clearCacheIfNecessary = function() {
            if (t.blockedGoogleUrlCache.length > e.CACHE_MAX_SIZE) {
                t.blockedGoogleUrlCache = t.blockedGoogleUrlCache.slice(e.CACHE_MAX_SIZE / 2);
                c.UsageTracker.track(u.CLIENT_APP_INTERACTION, {
                    action: u.CLEAR_BLOCKED_URL_CACHE
                })
            }
        };
        this.blockRequest = function(n) {
            var i = n.url;
            t.clearCacheIfNecessary();
            var a = o.getSidekickId(),
                u = i.match(s.EVENT_TRACKER_SECONDARY_ID),
                c = i.match(s.EVENT_TRACKER_TARGET),
                l = i.split("#"),
                f = r(l, 1)[0];
            if (u && !c) {
                var h = r(u, 2)[1];
                return t.handleTrackerRequest(e.TRACKER_TYPES.OPEN, i, a, h)
            }
            if (u && c) {
                var p = r(u, 2)[1],
                    d = r(c, 3),
                    g = d[1],
                    v = d[2];
                return t.handleTrackerRequest(e.TRACKER_TYPES.CLICK, i, a, p, v, g)
            }
            return t.blockedGoogleUrlCache.includes(f) ? e.BLOCKING_RESPONSES.block : e.BLOCKING_RESPONSES.allow
        };
        this.startBlocking = function() {
            i.default.log("Start blocking self-opens");
            a.default.webRequest.onBeforeRequest.hasListener(t.blockRequest) && a.default.webRequest.onBeforeRequest.removeListener(t.blockRequest);
            return a.default.webRequest.onBeforeRequest.addListener(t.blockRequest, {
                urls: e.urls
            }, ["blocking"])
        }
    };
    d.BLOCKING_RESPONSES = {
        allow: {
            cancel: !1
        },
        block: {
            cancel: !0
        }
    };
    d.TRACKER_TYPES = {
        OPEN: "open",
        CLICK: "click"
    };
    d.urls = ["*://*.googleusercontent.com/proxy/*", "*://*/e1t/o/*", "*://*/e1t/c/*", "*://*/e2t/o/*", "*://*/e2t/c/*", "*://*/s1t/c/*", "*://*/s1t/o/*", "*://*/s2t/c/*", "*://*/s2t/o/*"];
    d.LINK_TRACKER_TYPES = {
        URI_ENCODED: "t",
        BASE_54_ENCODED: "te"
    };
    d.CACHE_MAX_SIZE = 1e3
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = new RegExp(".*/(?:s|e)[1-9]t/[oc]/.*?.*(?:si=([0-9a-z]+).*&(?:amp;)?pi=[0-9a-z-]+|pi=[0-9a-z-]+.*&(?:amp;)?si=([0-9a-z]+))", "i"),
        i = new RegExp(".*/(?:s|e)[1-9]t/[oc]/.*?.*(?:si=[0-9a-z]+.*&(?:amp;)?pi=([0-9a-z-]+)|pi=([0-9a-z-]+).*&(?:amp;)?si=[0-9a-z]+)", "i"),
        o = new RegExp(".*/(?:s|e)[1-9]t/[oc]/.*?.*(te?)=([^&]*)", "i"),
        s = new RegExp("://[0-9a-z]+.googleusercontent.com/proxy/", "i");
    t.default = {
        EVENT_TRACKER_SECONDARY_ID: r,
        EVENT_TRACKER_PRIMARY_ID: i,
        EVENT_TRACKER_TARGET: o,
        GOOGLE_CONTENT_PROXY: s
    };
    e.exports = t.default
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    };

    function i(e, t, n) {
        t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n;
        return e
    }
    var o = "0123456789bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ-_",
        s = [1, 54, 2916, 157464, 8503056, 459165024],
        a = Array.from(o).reduce(function(e, t, n) {
            return r({}, e, i({}, t, n))
        }, {}),
        u = function(e) {
            for (var t = "", n = e.length - 1; n >= 0; n--) t += e.charAt(n);
            return t
        },
        c = function() {
            var e = void 0;
            (function() {
                e = o.split("").map(function(e) {
                    return e.charCodeAt(0)
                })
            })();
            return function(t) {
                var n = "",
                    r = 54;
                do {
                    n += String.fromCharCode(e[t % r]);
                    t = Math.floor(t / r)
                } while (t > 0);
                return u(n)
            }
        }(),
        l = function(e) {
            return new Promise(function(t, n) {
                var r = new Blob([e]),
                    i = new FileReader;
                i.onload = function() {
                    t(i.result)
                };
                i.onerror = function() {
                    i.abort();
                    n(new Error("Error Generating Array buffer"))
                };
                i.readAsArrayBuffer(r)
            })
        },
        f = function(e) {
            for (var t = [], n = 0; n < e.length; n++) {
                var r = e.charCodeAt(n);
                if (r < 128) t.push(r);
                else if (r < 2048) t.push(192 | r >> 6, 128 | 63 & r);
                else if (r < 55296 || r >= 57344) t.push(224 | r >> 12, 128 | r >> 6 & 63, 128 | 63 & r);
                else {
                    n++;
                    r = 65536 + ((1023 & r) << 10 | 1023 & e.charCodeAt(n));
                    t.push(240 | r >> 18, 128 | r >> 12 & 63, 128 | r >> 6 & 63, 128 | 63 & r)
                }
            }
            return new Uint8Array(t).buffer
        },
        h = function(e, t) {
            return e + 7 * t
        },
        p = function(e) {
            return {
                lowerSize: e % 7,
                upperSize: Math.floor(e / 7)
            }
        },
        d = function(e, t, n, r) {
            var i = {
                    int: "",
                    padding: 0,
                    offset: 0
                },
                o = e.byteLength - t;
            if (o < 4) {
                n = 4 - o;
                var s = new ArrayBuffer(4),
                    a = new DataView(s);
                a.setUint32(0, 0);
                for (var u = 3; u >= n; --u) a.setUint8(u, e.getUint8(t++));
                r = a.getUint32(0, !1)
            } else {
                n = 0;
                r = e.getUint32(t, !1);
                t += 4
            }
            i.int = r;
            i.padding = n;
            i.offset = t;
            return i
        },
        g = function(e) {
            for (var t = new DataView(e), n = 0, r = 0, i = ""; r < t.byteLength;) {
                var o = d(t, r, n, ""),
                    s = c(o.int);
                n = o.padding;
                r = o.offset;
                var a = "";
                if (0 === n) {
                    var u = d(t, r, n, "");
                    a = c(u.int);
                    r = u.offset;
                    n = u.padding
                }
                var l = h(s.length, a.length);
                i += "" + c(l) + s + a
            }
            return "" + i + c(n)
        },
        v = (t.encodeToBase54 = function(e) {
            return l(e).then(function(e) {
                return g(e)
            })
        }, function(e) {
            var t = e.length;
            if (t - 1 >= s.length) throw new Error("Input too large to decode to integer without overflow");
            for (var n = 0, r = 0; r < t; ++r) {
                var i = t - r - 1;
                n += a[e.charAt(r)] * s[i]
            }
            return n
        }),
        y = function(e) {
            for (var t = [], n = 0, r = function(r) {
                    var i = v(e.substr(n, r));
                    t.push(i);
                    n += r
                }; n < e.length - 1;) {
                var i = a[e.charAt(n++)],
                    o = p(i),
                    s = o.lowerSize,
                    u = o.upperSize;
                r(s);
                u > 0 && r(u)
            }
            return t
        },
        m = function(e) {
            var t = new DataView(new ArrayBuffer(4));
            t.setUint32(0, e);
            return t
        },
        _ = function(e, t, n, r) {
            for (var i = m(n), o = 0, s = i.byteLength - 1; o < r && s >= 0; ++o, --s) e.setUint8(t + o, i.getUint8(s))
        },
        b = function(e) {
            for (var t = [1, 1, 1, 1, 2, 2, 3, 0], n = e.length, r = "", i = 0; i < n;) {
                var o = e[i++];
                if (128 & o) {
                    var s = t[o >> 3 & 7];
                    if (!(64 & o) || !s || i + s > n) return null;
                    o &= 63 >> s;
                    for (; s > 0; s -= 1) {
                        var a = e[i++];
                        if (128 != (192 & a)) return null;
                        o = o << 6 | 63 & a
                    }
                }
                r += String.fromCharCode(o)
            }
            return r
        };
    t.decodeBase54 = function(e) {
        var t = "-",
            n = ".";
        e = e.replace(n, t);
        var r = y(e),
            i = a[e.charAt(e.length - 1)],
            o = new ArrayBuffer((r.length << 2) - i),
            s = new DataView(o),
            u = 0,
            c = 0,
            l = !0,
            f = !1,
            h = void 0;
        try {
            for (var p, d = r[Symbol.iterator](); !(l = (p = d.next()).done); l = !0) {
                var g = p.value;
                if (c++ == r.length - 1 && i > 0) {
                    var v = 4 - i;
                    _(s, u, g, v);
                    u += v
                } else {
                    s.setUint32(u, g);
                    u += 4
                }
            }
        } catch (e) {
            f = !0;
            h = e
        } finally {
            try {
                !l && d.return && d.return()
            } finally {
                if (f) throw h
            }
        }
        return b(new Uint8Array(o))
    }, t.encodeToBase54Sync = function(e) {
        var t = f(e);
        return g(t)
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.apiProxyMethodHandler = void 0;
    var r = s(n(61)),
        i = s(n(62)),
        o = n(14);

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var a = /^(https?|ftp):\/\//i,
        u = function(e, t) {
            return new File([e], t, {
                type: e.type || "",
                lastModifiedDate: e.lastModifiedDate || Date.now()
            })
        },
        c = function(e) {
            for (var t = e.blobAsBinString, n = e.filename, r = e.mimeString, i = new Uint8Array(t.length), o = 0; o < i.length; o++) i[o] = t.charCodeAt(o);
            var s = new Blob([i], {
                    type: r
                }),
                a = u(s, n),
                c = new FormData;
            c.append("file", a);
            return c
        };
    t.apiProxyMethodHandler = function(e, t) {
        try {
            if (a.test(e.relativeUrl)) t({
                success: !1,
                data: {
                    message: "Invalid param: relativeUrl"
                }
            });
            else {
                var n = e.withoutCsrf ? i.default : r.default;
                e.blobOptions && (e.options.data = c(e.blobOptions));
                n[e.action](e.relativeUrl, e.options).then(function(e) {
                    return t({
                        success: !0,
                        data: e
                    })
                }).catch(function(e) {
                    (0, o.newErrorEntry)(e.message || e);
                    return t({
                        success: !1,
                        data: e
                    })
                })
            }
        } catch (e) {
            t({
                success: !1,
                data: {
                    message: "Error processing request: " + e
                }
            })
        }
        return !0
    }
}, , , , , function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = i(n(1));

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.default = function(e, t, n) {
        r.default.cookies.onChanged.addListener(function(r) {
            var i = r.cookie;
            i.domain.includes(t) && i.name === e && n(r)
        })
    };
    e.exports = t.default
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.HUBSPOT_API_COOKIE_NAME = "hubspotapi", t.HUBSPOT_CSRF_COOKIE_NAME = "hubspotapi-csrf";
    var r = t.HUBSPOT_DOMAIN = {
        prod: "hubspot.com",
        qa: "hubspotqa.com",
        local: "hubspotqa.com"
    };
    t.HUBSPOT_API_COOKIE = {
        prod: {
            domain: "." + r.prod,
            url: "https://" + r.prod
        },
        qa: {
            domain: "." + r.qa,
            url: "https://" + r.qa
        },
        local: {
            domain: "." + r.local,
            url: r.local
        }
    }, t.HUBSPOT_CSRF_COOKIE = {
        prod: {
            domain: "." + r.prod,
            url: "https://" + r.prod
        },
        qa: {
            domain: "." + r.qa,
            url: "https://" + r.qa
        },
        local: {
            domain: "." + r.local,
            url: r.local
        }
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.NotificationManager = t.MESSAGE_TYPES = t.CLIENT_TYPES = void 0;
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
        i = n(111),
        o = n(7),
        s = n(128),
        a = u(n(0));

    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function c(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var l = t.CLIENT_TYPES = {
            ABLY: "ABLY"
        },
        f = t.MESSAGE_TYPES = {
            ACTIVITY: "ACTIVITY",
            PICKED_PORTAL_CHANGED: "PICKED_PORTAL_CHANGED"
        },
        h = function(e) {
            (0, o.updatePickedPortal)(e.portalId)
        };
    t.NotificationManager = function() {
        function e() {
            c(this, e);
            this.clientType = null
        }
        r(e, [{
            key: "init",
            value: async function(e) {
                this.clientType = e;
                switch (this.clientType) {
                    case l.ABLY:
                        s.AblyManager.init();
                        break;
                    default:
                        a.default.warn("Unsupported notification client type: " + this.clientType)
                }
            }
        }, {
            key: "stop",
            value: async function() {
                switch (this.clientType) {
                    case l.ABLY:
                        s.AblyManager.stop();
                        break;
                    default:
                        a.default.warn("Unsupported notification client type: " + this.clientType)
                }
            }
        }], [{
            key: "onMessageReceived",
            value: function(e) {
                return function(t) {
                    var n = t.messageType,
                        r = t.data;
                    console.log("Received notification: ", r);
                    switch (n) {
                        case f.ACTIVITY:
                            (0, i.postNotificationFromActivity)(r, e);
                            break;
                        case f.PICKED_PORTAL_CHANGED:
                            h(r);
                            break;
                        default:
                            return
                    }
                }
            }
        }]);
        return e
    }()
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.buttonClicked = t.notificationClicked = t.postSampleNotification = t.postNotification = t.postNotificationFromActivity = t.postNotificationFromChannelJson = t.init = void 0;
    var r = b(n(54)),
        i = b(n(98)),
        o = b(n(112)),
        s = b(n(125)),
        a = n(64),
        u = n(26),
        c = b(n(0)),
        l = b(n(126)),
        f = b(n(19)),
        h = b(n(3)),
        p = b(n(36)),
        d = n(23),
        g = b(n(1)),
        v = b(n(114)),
        y = n(22),
        m = b(n(127)),
        _ = n(22);

    function b(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var O = 72e5,
        w = [],
        S = (t.init = function() {
            g.default.notifications.onClicked.addListener(T);
            g.default.notifications.onButtonClicked.addListener(R)
        }, t.postNotificationFromChannelJson = function(e) {
            return I(e.timestamp).then(function(t) {
                t && E(o.default.notificationFromJson(e))
            })
        }),
        I = (t.postNotificationFromActivity = function(e, t) {
            I(o.default.getHubSpotTimeStamp(e)).then(function(n) {
                n && E(o.default.notificationFromActivity(e, t))
            })
        }, function(e) {
            return new h.default.Promise(function(t) {
                var n = new Date;
                if (null != e && e < n - O) {
                    d.UsageTracker.track(y.CLIENT_APP_INTERACTION, {
                        action: y.SUPPRESS_NOTIFICATION,
                        notificationAgeMinutes: Math.floor((n - e) / 1e3 / 60)
                    });
                    t(!1)
                } else t(!0)
            })
        }),
        E = t.postNotification = function(e) {
            if (!(0, u.getDoNotDisturb)()) {
                var t = new Date;
                w.push(e);
                var n = p.default.filter(w, function(n) {
                    return n.notificationKey === e.notificationKey && n.timestamp > t - O
                });
                p.default.sortBy(n, "timestamp");
                (0, m.default)(e, n).then(function(t) {
                    return A(e, n, t)
                })
            }
        },
        A = (t.postSampleNotification = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = s.default.validNotificationWithProperties(e, t);
            n.timestamp = new Date;
            S(n)
        }, function(e, t, n) {
            return new h.default.Promise(function(o) {
                var s = {
                    title: e.bigTitle,
                    iconUrl: n,
                    eventTime: e.timestamp,
                    type: "basic"
                };
                e.buttons && (s.buttons = p.default.map(e.buttons, function(e) {
                    return p.default.pick(e, "title", "iconUrl")
                }));
                var a = r.default.moment(e.timestamp).fromNow();
                e.textBeforeTimestamp.length > 0 && (a = " " + a);
                s.message = e.showTimestamp ? e.boldActionInfo + " " + e.textBeforeTimestamp + a : e.boldActionInfo;
                t.length > 1 && (s.message = (0, i.default)("notifications.comboMessage", {
                    message: s.message,
                    length: t.length - 1
                }));
                var u = e.notificationKey;
                k(e, u, s, e.timestamp, !e.suppressTracking).then(o);
                c.default.log("Feeding notification to Chrome: ");
                c.default.log(s)
            })
        }),
        k = function(e, t, n, r, i) {
            var o = e.notificationSource,
                s = e.isFromOnboarding;
            return new h.default.Promise(function(e) {
                g.default.notifications.update(t, {
                    priority: 0
                }, function(u) {
                    if (i) {
                        c.default.log("Notification Sent - Extension: " + o);
                        d.UsageTracker.track(y.SHOW_NOTIFICATION, {
                            notificationAgeMinutes: Math.floor((new Date - r) / 1e3 / 60),
                            notificationSource: o,
                            isFromOnboarding: s
                        });
                        d.UsageTracker.track(_.FIRST_SHOW_NOTIFICATION);
                        l.default.record("notification_sent_extension")
                    }
                    if (u) {
                        var f = n.priority || 0;
                        n.priority = 1;
                        g.default.notifications.update(t, n, function() {
                            g.default.notifications.update(t, {
                                priority: f
                            }, function() {
                                c.default.log("Notification existed, re-showing...");
                                e()
                            })
                        })
                    } else g.default.notifications.create(t, n, function() {
                        c.default.log("New notification created");
                        (0, a.incrementBadge)();
                        e()
                    })
                })
            })
        },
        T = t.notificationClicked = function(e) {
            var t = p.default.findWhere(w, {
                notificationKey: e
            }).link;
            null != t && "#" !== t && (0, v.default)(t);
            d.UsageTracker.track(_.FIRST_CLICK_NOTIFICATION);
            g.default.notifications.clear(e)
        },
        R = t.buttonClicked = function(e, t) {
            var n = p.default.findWhere(w, {
                    notificationKey: e
                }).buttons[t],
                r = n.type,
                i = n.clickAction,
                o = n.requestPayload,
                s = n.requestUrl;
            null != i ? i() : "PATCH" === r.toUpperCase() ? f.default.patch(s, {
                data: o
            }) : f.default.get(s, {
                data: o
            });
            g.default.notifications.clear(e)
        }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = c(n(98)),
        i = c(n(36)),
        o = c(n(124)),
        s = c(n(39)),
        a = n(7),
        u = n(99);

    function c(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var l = {
            EMAIL: "EMAILOPEN",
            HUBSPOT: "HUBSPOT_REVISIT",
            HUBSPOT_COMPANYVISIT: "HUBSPOT_COMPANY_VISIT",
            PROSPECTS_REVISIT: "COMPANYPROSPECTS_REVISIT",
            PRESENTATION_REVISIT: "PRESENTATION_REVISIT",
            LINK: "EMAILCLICK",
            LIVE_CHAT_MESSAGE: "LIVE_CHAT_MESSAGE"
        },
        f = {
            imageUrl: chrome.extension.getURL("img/hubspot-logo-48.png"),
            overlayImageUrl: chrome.extension.getURL("img/notification-overlays/overlay-none.png"),
            textBeforeTimestamp: "",
            showTimestamp: !0
        },
        h = {
            EMAIL: "overlay-email-open.png",
            EMAIL_OPEN: "overlay-email-open.png",
            LINK: "overlay-link-click.png",
            EMAIL_CLICK: "overlay-link-click.png",
            HUBSPOT: "overlay-hubspot.png",
            HUBSPOT_COMPANYVISIT: "overlay-hubspot.png",
            HUBSPOT_COMPANY_VISIT: "overlay-hubspot.png",
            COMPANYPROSPECTS_REVISIT: "overlay-hubspot.png",
            PROSPECTS_REVISIT: "overlay-hubspot.png",
            PRESENTATION_REVISIT: "overlay-presentation.png"
        },
        p = i.default.invert(l),
        d = {},
        g = function(e, t) {
            var n = {},
                r = O(e);
            n.notificationSource = t;
            n.isFromOnboarding = (0, u.isActivityFromOnboarding)(e);
            null != e.avatar_url && e.avatar_url.length > 0 && (n.imageUrl = e.avatar_url);
            switch (e.type) {
                case "LIVE_CHAT_MESSAGE":
                    n.link = e.link;
                    break;
                default:
                    n.link = e.object_link
            }
            var s = d[e.type];
            if (null == s) throw new Error("No notification handler is available for " + e.type + ", did you call registerHandler?");
            var a = s(e);
            i.default.extend(n, a);
            if (null == n.bigTitle || null == n.boldActionInfo) throw new Error("Notification handler for " + e.type + " failed to provide a bigTitle and a boldActionInfo.");
            null == n.notificationKey && (n.notificationKey = "" + i.default.random(1, 1e5));
            n.overlayImageUrl && (n.overlayImageUrl = y(n.overlayImageUrl));
            n.bigTitle = o.default.stripHtml(n.bigTitle);
            n.boldActionInfo = o.default.stripHtml(n.boldActionInfo);
            n.textBeforeTimestamp = o.default.stripHtml(n.textBeforeTimestamp);
            n.timestamp = Math.min(r || 1 / 0, +new Date);
            return i.default.defaults(n, f)
        },
        v = function(e) {
            var t = {};
            t.suppressTracking = e.suppress_tracking || !1;
            t.notificationSource = "CHANNEL";
            e.image && e.image.length > 0 && (t.imageUrl = e.image);
            null != e.link && e.link.length > 0 && (t.link = e.link);
            null == e.object && (e.object = e.body.replace("opened ", ""));
            null == e.timestamp && (e.timestamp = +new Date);
            null == e.tracker_key && (e.tracker_key = e.tracker_key_name);
            t.timestamp = Math.min(e.timestamp, +new Date);
            (0, a.getPortalId)();
            switch (e.activity_type) {
                case l.EMAIL:
                    t.notificationKey = e.tracker_key;
                    t.bigTitle = e.object;
                    t.boldActionInfo = e.title;
                    t.textBeforeTimestamp = (0, r.default)("notifications.opened");
                    break;
                case l.LINK:
                    t.notificationKey = e.tracker_key;
                    t.bigTitle = e.object;
                    t.boldActionInfo = e.title;
                    var n = e.body.replace(e.object, "");
                    t.textBeforeTimestamp = n.substring(0, n.length - 4);
                    break;
                case l.HUBSPOT:
                    t.notificationKey = e.link;
                    t.bigTitle = e.title;
                    t.boldActionInfo = e.body.replace("is viewing ", "");
                    t.textBeforeTimestamp = (0, r.default)("notifications.viewed");
                    break;
                case l.PROSPECTS_REVISIT:
                    t.notificationKey = e.tracker_key;
                    t.bigTitle = e.title;
                    t.boldActionInfo = e.body;
                    t.textBeforeTimestamp = "";
                    break;
                default:
                    t.notificationKey = "" + i.default.random(1, 1e5);
                    t.bigTitle = e.title;
                    t.boldActionInfo = e.body
            }
            t.bigTitle = o.default.stripHtml(t.bigTitle);
            t.boldActionInfo = o.default.stripHtml(t.boldActionInfo);
            t.textBeforeTimestamp = o.default.stripHtml(t.textBeforeTimestamp);
            t.overlayImageUrl = m(e.activity_type);
            if (e.expired) {
                var u = (0, a.getPortalId)();
                t.boldActionInfo = (0, r.default)("notifications.upgrade");
                t.link = new s.default("/account-dashboard/" + u + "/account-summary", {
                    lb: "app",
                    protocol: "https"
                }).href
            }
            return i.default.defaults(t, f)
        },
        y = function(e) {
            if (e) return chrome.extension.getURL("img/notification-overlays/" + e)
        },
        m = function(e) {
            var t = h[p[e]];
            null != t && 0 !== t.length || (t = h[e]);
            return y(t)
        },
        _ = function(e, t) {
            d[e] = t;
            return console.log("Registered notification handler for type " + e + ".")
        },
        b = function(e) {
            var t = (null != e.name ? e.name.length : void 0) > 0 ? e.name : e.email;
            if (null != t && t.length > 0) return t;
            console.log(e);
            throw new Error("Notification parser tried to find a name for this activity and fall back to email address, but neither were present. You probably can't use getSuggestedNameFromSource for your notification type.")
        },
        O = function(e) {
            return e.timestamp ? e.timestamp : e.source.timestamp
        };
    t.default = {
        getSuggestedNameFromSource: b,
        notificationFromJson: v,
        notificationFromActivity: g,
        registerHandler: _,
        overlayImageForImagePath: y,
        getHubSpotTimeStamp: O
    };
    e.exports = t.default
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.NOTIFICATION_LOGO_URL = "../img/hubspot-logo-48.png"
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = window.open;
    e.exports = t.default
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.extensionCheckerHandler = t.getInstalledExtensions = void 0;
    var r = s(n(3)),
        i = s(n(1)),
        o = n(20);

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var a = {
        mlomiejdfkolichcflejclcbmpeaniij: "Ghostery",
        pkehgijcmpdhfbdbbnkijodmdjhbjlgp: "Privacy Badger",
        gkjnkapjmjfpipfcccnjbjcbgdnahpjp: "Yesware",
        ndnaehgpjlnokgebbaldlmgkapkpjkkb: "Mailtrack"
    };
    t.getInstalledExtensions = function() {
        return new r.default.Promise(function(e) {
            i.default.permissions.request({
                permissions: ["management"]
            }, function(t) {
                if (t) try {
                    i.default.management.getAll(function(t) {
                        e(t.map(function(e) {
                            return {
                                id: e.id,
                                name: e.name,
                                enabled: e.enabled,
                                version: e.version
                            }
                        }))
                    })
                } catch (t) {
                    e([])
                } else e([])
            })
        })
    }, t.extensionCheckerHandler = function() {
        i.default.permissions.request({
            permissions: ["management"]
        }, function(e) {
            e && i.default.management.getAll(function(e) {
                (0, o.sendToContentScripts)("blacklistedExtensions", {
                    blacklistedExtensions: e.filter(function(e) {
                        return a[e.id] && e.enabled
                    }).map(function(e) {
                        return a[e.id]
                    })
                })
            })
        })
    }
}, , function(e, t, n) {
    "use strict";
    "use es6";
    var r = b(n(54)),
        i = b(n(118)),
        o = _(n(111)),
        s = b(n(136)),
        a = b(n(137)),
        u = b(n(138)),
        c = n(60),
        l = b(n(139)),
        f = b(n(144)),
        h = b(n(97)),
        p = b(n(145)),
        d = b(n(146)),
        g = b(n(53)),
        v = n(147),
        y = n(148),
        m = n(14);

    function _(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        t.default = e;
        return t
    }

    function b(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(async function() {
        window.__extension = {
            fullReset: y.fullReset
        };
        (0, m.initDebugLog)();
        await g.default.init();
        p.default.init();
        d.default.init();
        (0, a.default)();
        (0, c.initFirstRunAndLoginTracker)();
        (0, l.default)();
        i.default.init();
        s.default.start();
        (0, u.default)();
        h.default.init();
        (0, v.setupWebsocketListener)();
        r.default.Info.then(function() {
            o.init()
        });
        hubspot.define("SignalsExtension/background/notifications/manager", [], function() {
            return o
        });
        hubspot.define("SignalsExtension/data/resolvePopupServices", [], function() {
            return f.default
        })
    })()
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(64),
        i = n(119),
        o = A(n(0)),
        s = E(n(18)),
        a = A(n(24)),
        u = n(60),
        c = n(59),
        l = n(7),
        f = n(26),
        h = n(23),
        p = n(48),
        d = n(97),
        g = n(35),
        v = n(22),
        y = A(n(58)),
        m = A(n(122)),
        _ = n(110),
        b = n(100),
        O = n(10),
        w = n(134),
        S = n(135),
        I = n(57);

    function E(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        t.default = e;
        return t
    }

    function A(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var k = 0,
        T = null,
        R = new b.RequestBlocker,
        C = function(e) {
            try {
                e && (0, h.initAuthedTracker)(s.getEmail(), e);
                h.UsageTracker.track(p.PAGEVIEW)
            } catch (e) {
                a.default.captureException(e && e.message || e)
            }
        },
        M = function() {
            k > 0 ? a.default.captureMessage("onLogin called more than once without onLogout") : k < 0 && a.default.captureMessage("onLogout called more than once without onLogin")
        },
        P = async function() {
            if (!(0, f.getAttribute)(g.USER_REGISTRATION_KEY)) try {
                await (0, f.setAttribute)(g.USER_REGISTRATION_KEY, (0, y.default)());
                h.UsageTracker.track(v.CLIENT_APP_INTERACTION, {
                    action: v.REGISTER_USER
                })
            } catch (e) {
                o.default.log("Error setting registration attribute: " + e)
            }
        }, x = async function() {
            try {
                M();
                k++;
                o.default.log("Logged In");
                var e = (await s.fetchUser()).get("portal_id");
                (0, l.setPortalId)(e);
                if (e) {
                    (0, r.updateIcon)();
                    await (0, f.fetchAttributes)();
                    T.init(_.CLIENT_TYPES.ABLY);
                    a.default.setUserContext({
                        email: s.getEmail(),
                        id: s.getUserId(),
                        sidekickId: s.getSidekickId()
                    });
                    C(e);
                    R.startBlocking();
                    (0, O.reloadGmailTabs)();
                    (0, r.updateIcon)();
                    await P()
                }
            } catch (e) {
                o.default.error("Error during onLogin: " + (e && e.message))
            }
        }, L = function(e) {
            if ((0, u.isFirstRun)()) {
                (0, u.setNotFirstRun)();
                e ? (0, I.userUngatedFor)("Clients:LoggedInOnboarding") && (0, S.startOnboardingFlow)(S.FIRST_RUN) : (0, S.startOnboardingFlow)(S.FIRST_RUN_LOGGED_OUT)
            }
        }, N = async function(e) {
            o.default.log("Extension Version: " + (0, y.default)());
            (0, r.updateIcon)();
            (0, i.initAlarmListeners)();
            (0, i.checkForAlarms)();
            setInterval(function() {
                return (0, i.checkForAlarms)()
            }, m.default);
            if (e) {
                await x();
                o.default.log("Already logged in on startup")
            } else {
                o.default.log("Not logged in on startup");
                (0, O.reloadGmailTabs)()
            }
            L(e)
        }, U = function() {
            k--;
            M();
            (0, r.updateIcon)();
            s.clearUser();
            (0, f.clearAttributes)();
            T.stop();
            (0, O.reloadGmailTabs)()
        }, j = async function() {
            T = new _.NotificationManager;
            try {
                await (0, d.getAndSetCsrfForContentScript)()
            } catch (e) {
                o.default.error("No CSRF Cookie found: ", e)
            }
            C();
            var e = new w.SessionMonitor(N, x, U);
            (0, c.setSessionMonitor)(e);
            await e.init()
        };
    t.default = {
        init: j
    };
    e.exports = t.default
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.initAlarmListeners = t.checkForAlarms = t.getHasNewAlarms = t.fetchFireAlarms = void 0;
    var r = n(120),
        i = a(n(121)),
        o = n(20),
        s = a(n(0));

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function u(e, t, n) {
        t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n;
        return e
    }
    var c = "requestFireAlarms",
        l = "requestNewAlarms",
        f = "markAlarmsAsSeen",
        h = "dismissAlarm",
        p = [],
        d = function(e, t) {
            (0, o.sendToPopup)(e, t);
            (0, o.sendToContentScripts)(e, t)
        },
        g = t.fetchFireAlarms = async function() {
            var e = await (0, r.fetchAlarms)(),
                t = JSON.parse(i.default.getItem("dismissedAlarms"));
            p = e.map(function(e) {
                var n = e.get("id"),
                    r = p.find(function(e) {
                        return e.id === n
                    });
                return r || {
                    id: n,
                    alarm: e,
                    seenByUser: t.includes(n),
                    dismissed: t.includes(n)
                }
            });
            var n = t.filter(function(e) {
                return !!p.find(function(t) {
                    return t.id === e
                })
            });
            i.default.setItem("dismissedAlarms", JSON.stringify(n));
            return p
        }, v = function() {
            return p.forEach(function(e) {
                e.seenByUser = !0
            })
        }, y = function(e) {
            var t = JSON.parse(i.default.getItem("dismissedAlarms"));
            t.push(e);
            i.default.setItem("dismissedAlarms", JSON.stringify(t));
            p.get(p.findIndex(function(t) {
                return t.id === e
            })).dismissed = !0
        }, m = (t.getHasNewAlarms = function() {
            return !!p.find(function(e) {
                return !e.seenByUser
            })
        }, t.checkForAlarms = async function() {
            try {
                var e = await g();
                d("backgroundFireAlarms", {
                    fireAlarms: e
                })
            } catch (e) {
                s.default.log("Fetch alarms failed with error: " + e)
            }
        });
    t.initAlarmListeners = function() {
        var e;
        i.default.getItem("dismissedAlarms") || i.default.setItem("dismissedAlarms", JSON.stringify([]));
        (0, o.listenToContentScriptMethodsBatch)((u(e = {}, c, function() {
            m()
        }), u(e, l, function() {
            m()
        }), u(e, f, function() {
            v();
            d("backgroundFireAlarms", {
                fireAlarms: p
            })
        }), u(e, h, function(e) {
            y(e.id);
            d("backgroundFireAlarms", {
                fireAlarms: p
            })
        }), e))
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.fetchAlarms = void 0;
    var r = i(n(19));

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.fetchAlarms = function() {
        return r.default.get("firealarm/v2/alarm/clients-gmail")
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = window.localStorage;
    e.exports = t.default
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = 18e5;
    e.exports = t.default
}, , function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = {
        stripHtml: function(e) {
            return null != e ? e.replace(/<(?:.|\n)*?>/gm, "") : e
        }
    };
    e.exports = t.default
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = s(n(36)),
        i = s(n(39)),
        o = n(113);

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var a = new i.default({
            lb: "api",
            protocol: "https"
        }).href,
        u = [{
            activity_key: "3dfba5e4-ce88-4f49-8d86-19d7a68522ae",
            activity_type: "EMAILOPEN",
            body: "opened test",
            expired: !1,
            html: null,
            id: "3dfba5e4-ce88-4f49-8d86-19d7a68522ae",
            image: o.NOTIFICATION_LOGO_URL,
            link: null,
            object: "test",
            sticky: !1,
            timestamp: 1427823308658,
            title: "Hubsy McHubspotFace",
            tracker_key: "47995535-ea0c-4baa-a35a-c6e94b25d7a9",
            tracker_key_name: "47995535-ea0c-4baa-a35a-c6e94b25d7a9"
        }, {
            activity_key: "352f562e-d846-4a5b-aecc-e6495ffd5d96",
            activity_type: "EMAILCLICK",
            body: "clicked Links! in Test Email",
            expired: !1,
            html: null,
            id: "352f562e-d846-4a5b-aecc-e6495ffd5d96",
            image: o.NOTIFICATION_LOGO_URL,
            link: null,
            object: "Test Email",
            sticky: !1,
            timestamp: 1427824245532,
            title: "Hubsy McHubspotFace",
            tracker_key: "1bcc3a79-4f27-4b26-9853-838f16038bc0-17841"
        }, {
            activity_key: "agxzfnNpZ25hbHNjcnhyUAsSC1VzZXJQcm9maWxlGICAgLveupwIDAsSCEFjdGl2aXR5Iipoc3JldmlzaXR8Zjc4N2ZhNDJkN2NlMTFlNDhkMzFhYmNkOGVhN2IwZDcM",
            activity_type: "HUBSPOT_REVISIT",
            body: 'is viewing <a class="activity-link" href="http://hubspot.com/pricing" target="_blank">Enterprise Pricing</a>',
            expired: !1,
            html: "",
            id: "None",
            image: o.NOTIFICATION_LOGO_URL,
            link: "http://app.hubspot.com/contacts/53/lists/contact/400379/",
            sticky: !1,
            title: "Dharmesh Shah",
            timestamp: 1427824245532,
            tracker_key_name: null
        }, {
            activity_key: "f8412886-4ffc-42ae-b491-b7d828986ada",
            activity_type: "COMPANYPROSPECTS_REVISIT",
            body: "clicked Some Link in Automation Workflows | HubSpot",
            expired: !1,
            html: null,
            id: "f8412886-4ffc-42ae-b491-b7d828986ada",
            image: o.NOTIFICATION_LOGO_URL,
            link: null,
            object: "Automation Workflows | HubSpot",
            sticky: !1,
            timestamp: 1433791508e3,
            title: "hubspot",
            tracker_key: "companyprospects.hubspot.com.1433870923009"
        }],
        c = {
            EMAIL_OPEN: {
                messageType: "ACTIVITY",
                data: {
                    object_link: "https://mail.google.com/mail/u/?authuser=jtsuji@hubspot.com#all/14ff66235bf0fa49",
                    owner_id: 4628763151171584,
                    tracker_key: "b36fa6fc-4894-4358-82c0-3d3bcbbefea9",
                    secondary_key: "joshuatsuji@gmail.com",
                    logged_to_crm: !1,
                    source: {
                        is_exact: !0,
                        is_mobile: !1,
                        ip: "66.249.83.240",
                        domain: "gmail.com",
                        name: "Hubsy McHubspotFace",
                        location: "",
                        email: "joshuatsuji@gmail.com"
                    },
                    type: "EMAIL_OPEN",
                    client_id: 1,
                    tracker_created: 1442947675740,
                    avatar_url: o.NOTIFICATION_LOGO_URL,
                    thread_info: {
                        depth: 0,
                        id: "b36fa6fc-4894-4358-82c0-3d3bcbbefea9"
                    },
                    guid: "2c81f670",
                    template_id: "",
                    portal_id: 468087,
                    object: "aaaa",
                    timestamp: 1442947712602
                },
                recipients: [],
                userId: 4628763151171584,
                timestamp: 1444831784880
            },
            EMAIL_CLICK: {
                messageType: "ACTIVITY",
                data: {
                    source: {
                        guid: "7ddbf9d8",
                        name: "Hubsy McHubspotFace",
                        email: "jtsuji@hubspot.com",
                        location: "Cambridge, Massachusetts",
                        user_agent: "",
                        ip: "",
                        link: "",
                        domain: "hubspot.com",
                        is_exact: !0,
                        is_mobile: !1,
                        timestamp: 1433430557237
                    },
                    type: "EMAIL_CLICK",
                    object: "Test Email",
                    object_link: "https://mail.google.com/mail/u/?authuser=",
                    link: "http://www.apple.com",
                    avatar_url: o.NOTIFICATION_LOGO_URL,
                    tracker_key: "60ec61a0-ac5a-4582-b677-b373e74ee165-16954",
                    secondary_key: "ablyakher@hubspot.com",
                    owner_id: 5706718366400512,
                    guid: "7ddbf9d8",
                    timestamp: 1433430557237,
                    link_title: "Links!",
                    muted: !1,
                    portal_id: null,
                    thread_info: null
                },
                recipients: [],
                userId: 4628763151171584,
                timestamp: 1427824245532
            },
            HUBSPOT_COMPANY_VISIT: {
                messageType: "ACTIVITY",
                recipients: [],
                userId: 4628763151171584,
                timestamp: 1427824245532,
                data: {
                    type: "HUBSPOT_COMPANY_VISIT",
                    source: {
                        name: "HubSpot",
                        email: "",
                        location: "",
                        user_agent: "",
                        ip: "1.1.1.1",
                        link: "",
                        domain: "hubspot.com",
                        is_exact: !1,
                        is_mobile: !1,
                        timestamp: 0
                    },
                    object_link: "http://www.hubspot.com",
                    link: "",
                    avatar_url: "",
                    tracker_key: "hubspot.com",
                    secondary_key: "",
                    owner_id: 5003267851419648,
                    guid: "a",
                    timestamp: 1393879369e3,
                    link_title: "",
                    deleted: !1,
                    updated_at: 0,
                    dual_write: !1,
                    team_id: 0,
                    muted: !1,
                    object: "Some Page"
                }
            },
            COMPANYPROSPECTS_REVISIT: {
                messageType: "ACTIVITY",
                recipients: [],
                userId: 4628763151171584,
                timestamp: 1427824245532,
                data: {
                    type: "COMPANYPROSPECTS_REVISIT",
                    source: {
                        name: "Hubsy McHubspotFace",
                        email: "jtsuji@hubspot.com",
                        location: "",
                        user_agent: "",
                        ip: "",
                        link: "",
                        domain: "",
                        is_exact: !1,
                        is_mobile: !1,
                        timestamp: 0
                    },
                    object_link: "https://ej4.com/",
                    link: "https://app.hubspot.com/sales/53/visits/list/view/69133",
                    avatar_url: "http://m.c.lnkd.licdn.com/media/p/1/000/271/38f/391301b.png",
                    tracker_key: "24r4444",
                    secondary_key: "",
                    owner_id: 3,
                    guid: "efe",
                    timestamp: 1443676697995,
                    link_title: "",
                    deleted: !1,
                    updated_at: 0,
                    dual_write: !0,
                    team_id: 0,
                    muted: !1,
                    object: "Some Page"
                }
            },
            PRESENTATION_REVISIT: {
                messageType: "ACTIVITY",
                recipients: [],
                userId: 4628763151171584,
                timestamp: 1427824245532,
                data: {
                    type: "PRESENTATION_REVISIT",
                    source: {
                        name: "Hubsy McHubspotFace",
                        email: "jtsuji@hubspot.com",
                        location: "",
                        user_agent: "",
                        ip: "",
                        link: "",
                        domain: "",
                        is_exact: !1,
                        is_mobile: !1,
                        timestamp: 0
                    },
                    object_link: "https://app.hubspot.com/presentations/53/present/19192",
                    link: "",
                    avatar_url: "",
                    tracker_key: "19192",
                    secondary_key: "",
                    owner_id: 6635603960004608,
                    guid: "25d9badf-4278-4495-b59a-6eddb22b73cc",
                    timestamp: 1432245434287,
                    link_title: "",
                    deleted: !1,
                    updated_at: 0,
                    dual_write: !0,
                    team_id: 0,
                    muted: !1,
                    object: "About HubSpot (PDF)"
                }
            }
        },
        l = [{
            suppressTracking: !1,
            imageUrl: o.NOTIFICATION_LOGO_URL,
            timestamp: 1427823308658,
            notificationKey: "47995535-ea0c-4baa-a35a-c6e94b25d7a9",
            bigTitle: "test",
            boldActionInfo: "Hubsy McHubspotFace",
            textBeforeTimestamp: "opened",
            overlayImageUrl: "overlay-email-open.png",
            link: a + "/stream",
            notificationSource: "CHANNEL"
        }, {
            bigTitle: "Test Email",
            boldActionInfo: "Hubsy McHubspotFace",
            imageUrl: o.NOTIFICATION_LOGO_URL,
            link: a + "/stream",
            notificationKey: "1bcc3a79-4f27-4b26-9853-838f16038bc0-17841",
            overlayImageUrl: "overlay-link-click.png",
            suppressTracking: !1,
            textBeforeTimestamp: "clicked Links!",
            timestamp: 1427824245532,
            notificationSource: "CHANNEL"
        }, {
            bigTitle: "Dharmesh Shah",
            boldActionInfo: "Enterprise Pricing",
            imageUrl: o.NOTIFICATION_LOGO_URL,
            link: "http://app.hubspot.com/contacts/53/lists/contact/400379/",
            notificationKey: "http://app.hubspot.com/contacts/53/lists/contact/400379/",
            overlayImageUrl: "overlay-hubspot.png",
            suppressTracking: !1,
            textBeforeTimestamp: "viewed",
            timestamp: 1427824245532,
            notificationSource: "CHANNEL"
        }],
        f = {
            EMAIL_OPEN: {
                notificationSource: "ABLY",
                imageUrl: o.NOTIFICATION_LOGO_URL,
                link: "https://mail.google.com/mail/u/?authuser=jtsuji@hubspot.com#all/14ff66235bf0fa49",
                notificationKey: "b36fa6fc-4894-4358-82c0-3d3bcbbefea9",
                bigTitle: "aaaa",
                boldActionInfo: "Hubsy McHubspotFace",
                textBeforeTimestamp: "opened",
                overlayImageUrl: "overlay-email-open.png",
                timestamp: 1445034637372
            },
            EMAIL_CLICK: {
                notificationSource: "ABLY",
                imageUrl: o.NOTIFICATION_LOGO_URL,
                link: "https://mail.google.com/mail/u/?authuser=",
                notificationKey: "60ec61a0-ac5a-4582-b677-b373e74ee165-16954",
                bigTitle: "Test Email",
                boldActionInfo: "Hubsy McHubspotFace",
                overlayImageUrl: a + "/static/img/notification-overlays/overlay-link-click.png",
                textBeforeTimestamp: "clicked Links!",
                timestamp: 1451940278510
            },
            HUBSPOT_COMPANY_VISIT: {
                notificationSource: "ABLY",
                link: "http://www.hubspot.com",
                notificationKey: "http://www.hubspot.com",
                bigTitle: "HubSpot",
                boldActionInfo: "Some Page",
                overlayImageUrl: a + "/static/img/notification-overlays/overlay-hubspot.png",
                textBeforeTimestamp: "viewed",
                timestamp: 1451940487600,
                imageUrl: o.NOTIFICATION_LOGO_URL
            },
            COMPANYPROSPECTS_REVISIT: {
                notificationSource: "ABLY",
                imageUrl: "http://m.c.lnkd.licdn.com/media/p/1/000/271/38f/391301b.png",
                link: "https://ej4.com/",
                notificationKey: "https://app.hubspot.com/sales/53/visits/list/view/69133",
                bigTitle: "Hubsy McHubspotFace",
                boldActionInfo: "Some Page",
                overlayImageUrl: a + "/static/img/notification-overlays/overlay-hubspot.png",
                textBeforeTimestamp: "viewed",
                timestamp: 1451940603477
            },
            PRESENTATION_REVISIT: {
                notificationSource: "ABLY",
                link: "https://app.hubspot.com/presentations/53/present/19192",
                notificationKey: "https://app.hubspot.com/presentations/53/present/19192",
                bigTitle: "Hubsy McHubspotFace",
                boldActionInfo: "About HubSpot (PDF)",
                overlayImageUrl: a + "/static/img/notification-overlays/overlay-hubspot.png",
                textBeforeTimestamp: "viewed",
                timestamp: 1451940635742,
                imageUrl: o.NOTIFICATION_LOGO_URL
            }
        },
        h = function(e, t) {
            null == e && (e = {});
            null == t && (t = 0);
            return r.default.defaults(e, u[t])
        };
    t.default = {
        validNotificationWithProperties: h,
        DEMO_NOTIFS: u,
        DEMO_ACTIVITY_NOTIFS: c,
        EXPECTED_PARSINGS: l,
        EXPECTED_ACTIVITY_PARSINGS: f
    };
    e.exports = t.default
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = h(n(54)),
        i = h(n(3)),
        o = n(36),
        s = h(n(2)),
        a = f(n(18)),
        u = n(59),
        c = h(n(19)),
        l = n(7);

    function f(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        t.default = e;
        return t
    }

    function h(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var p = void 0,
        d = "SIGNALS_CHROME",
        g = {
            eventName: "BlackBox must be given an event name string",
            endpoint: "Failed to send event to BlackBox"
        },
        v = function() {
            return (0, u.getSessionMonitor)().isLoggedIn() ? {
                email: a.getEmail(),
                user_id: a.getSidekickId()
            } : null
        },
        y = function(e, t) {
            null == t && (t = {});
            var n = t.appId;
            p = t.properties;
            return new i.default.Promise(function(t, i) {
                if ((0, o.isString)(e))
                    if (s.default.deployed("blackbox")) {
                        var a = v(),
                            u = {
                                name: e,
                                app_id: n || d,
                                timestamp: r.default.moment().valueOf()
                            };
                        null != a && (u.user_info = a);
                        null != p && (u.properties = p);
                        (0, o.defer)(async function() {
                            try {
                                var e = (0, l.getPortalId)();
                                await c.default.post("fcc/v2/metrics/events", {
                                    data: u,
                                    query: {
                                        portalId: e
                                    }
                                })
                            } catch (e) {
                                i(new Error(g.endpoint))
                            }
                        })
                    } else t();
                else i(new Error(g.eventName))
            })
        };
    t.default = {
        record: y
    };
    e.exports = t.default
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = a(n(3)),
        i = a(n(37)),
        o = n(38),
        s = n(113);

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var u = function(e) {
        return new r.default.Promise(function(t) {
            var n = i.default.createElement("canvas");
            n.width = 80;
            n.height = 80;
            var r = n.getContext("2d");
            r.rect(0, 0, n.width, n.height);
            var a = new o.Image,
                u = new o.Image,
                c = 18,
                l = n.height - c;
            a.onload = function() {
                u.onload = function() {
                    r.drawImage(u, 0, l, n.width, c);
                    var e = n.toDataURL("image/png");
                    t(e)
                };
                r.drawImage(a, c / 2, 0, l, l);
                u.src = e.overlayImageUrl
            };
            a.src = s.NOTIFICATION_LOGO_URL
        })
    };
    t.default = u;
    e.exports = t.default
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.AblyManager = void 0;
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
        i = c(n(0)),
        o = c(n(129)),
        s = n(132),
        a = n(110),
        u = c(n(133));

    function c(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function l(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var f = null,
        h = null,
        p = t.AblyManager = function() {
            function e() {
                l(this, e)
            }
            r(e, null, [{
                key: "fetchToken",
                value: function() {
                    return (0, s.fetchConfig)(h).then(function(e) {
                        return e.toJS()
                    })
                }
            }, {
                key: "ablyCallback",
                value: function(t, n) {
                    return e.fetchToken().then(function(e) {
                        n(null, e)
                    }).catch(function(e) {
                        return n(e)
                    })
                }
            }, {
                key: "init",
                value: async function() {
                    var t = this;
                    h = (0, u.default)();
                    var n = function(e) {
                        return a.NotificationManager.onMessageReceived(a.CLIENT_TYPES.ABLY)(t.transformEventData(e))
                    };
                    (f = new o.default.Realtime({
                        authCallback: e.ablyCallback,
                        clientId: h
                    })).connection.on(e.CONNECTED_EVENT, function() {
                        i.default.log("[Ably] Connection made");
                        try {
                            var e = Object.keys(JSON.parse(f.auth.tokenDetails.capability))[0],
                                t = f.channels.get(e);
                            i.default.log("[Ably] Subscribing to channel:", e);
                            t.presence.enter();
                            t.unsubscribe(n);
                            t.subscribe(n)
                        } catch (e) {
                            i.default.log("[Ably] Error encountered while subscribing:", e)
                        }
                    })
                }
            }, {
                key: "stop",
                value: function() {
                    i.default.log("[Ably] Closing connection");
                    f.connection.close()
                }
            }]);
            return e
        }();
    p.CONNECTED_EVENT = "connected";
    p.transformEventData = function(e) {
        var t = e.name,
            n = e.timestamp,
            r = e.data;
        try {
            return {
                messageType: t,
                timestamp: n,
                data: JSON.parse(r)
            }
        } catch (e) {
            i.default.log("[Ably] Error encountered parsing event data:", e);
            return null
        }
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = o(n(130)),
        i = n(131);

    function o(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        t.default = e;
        return t
    }
    var s = {
        Rest: r.Rest,
        msgpack: r.msgpack,
        Realtime: (0, i.enforceDefaultClientOptions)(r.Realtime)
    };
    t.default = s;
    e.exports = t.default
}, function(e, t) {
    var n, r, i, o = {},
        s = "object" == typeof window && window || "object" == typeof self && self,
        a = a || function(e, t) {
            var n = {},
                r = n.lib = {},
                i = r.Base = function() {
                    function e() {}
                    return {
                        extend: function(t) {
                            e.prototype = this;
                            var n = new e;
                            t && n.mixIn(t);
                            n.hasOwnProperty("init") || (n.init = function() {
                                n.$super.init.apply(this, arguments)
                            });
                            n.init.prototype = n;
                            n.$super = this;
                            return n
                        },
                        create: function() {
                            var e = this.extend();
                            e.init.apply(e, arguments);
                            return e
                        },
                        init: function() {},
                        mixIn: function(e) {
                            for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                            e.hasOwnProperty("toString") && (this.toString = e.toString)
                        },
                        clone: function() {
                            return this.init.prototype.extend(this)
                        }
                    }
                }(),
                o = r.WordArray = i.extend({
                    init: function(e, n) {
                        e = this.words = e || [];
                        this.sigBytes = n != t ? n : 4 * e.length
                    },
                    toString: function(e) {
                        return (e || a).stringify(this)
                    },
                    concat: function(e) {
                        var t = this.words,
                            n = e.words,
                            r = this.sigBytes,
                            i = e.sigBytes;
                        this.clamp();
                        if (r % 4)
                            for (var o = 0; o < i; o++) {
                                var s = n[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                                t[r + o >>> 2] |= s << 24 - (r + o) % 4 * 8
                            } else if (n.length > 65535)
                                for (o = 0; o < i; o += 4) t[r + o >>> 2] = n[o >>> 2];
                            else t.push.apply(t, n);
                        this.sigBytes += i;
                        return this
                    },
                    clamp: function() {
                        var t = this.words,
                            n = this.sigBytes;
                        t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8;
                        t.length = e.ceil(n / 4)
                    },
                    clone: function() {
                        var e = i.clone.call(this);
                        e.words = this.words.slice(0);
                        return e
                    },
                    random: function(t) {
                        for (var n, r = [], i = function(t) {
                                t = t;
                                var n = 987654321,
                                    r = 4294967295;
                                return function() {
                                    var i = ((n = 36969 * (65535 & n) + (n >> 16) & r) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & r) & r;
                                    i /= 4294967296;
                                    return (i += .5) * (e.random() > .5 ? 1 : -1)
                                }
                            }, s = 0; s < t; s += 4) {
                            var a = i(4294967296 * (n || e.random()));
                            n = 987654071 * a();
                            r.push(4294967296 * a() | 0)
                        }
                        return new o.init(r, t)
                    }
                }),
                s = n.enc = {},
                a = s.Hex = {
                    stringify: function(e) {
                        for (var t = e.words, n = e.sigBytes, r = [], i = 0; i < n; i++) {
                            var o = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                            r.push((o >>> 4).toString(16));
                            r.push((15 & o).toString(16))
                        }
                        return r.join("")
                    },
                    parse: function(e) {
                        for (var t = e.length, n = [], r = 0; r < t; r += 2) n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - r % 8 * 4;
                        return new o.init(n, t / 2)
                    }
                },
                u = s.Latin1 = {
                    stringify: function(e) {
                        for (var t = e.words, n = e.sigBytes, r = [], i = 0; i < n; i++) {
                            var o = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                            r.push(String.fromCharCode(o))
                        }
                        return r.join("")
                    },
                    parse: function(e) {
                        for (var t = e.length, n = [], r = 0; r < t; r++) n[r >>> 2] |= (255 & e.charCodeAt(r)) << 24 - r % 4 * 8;
                        return new o.init(n, t)
                    }
                },
                c = s.Utf8 = {
                    stringify: function(e) {
                        try {
                            return decodeURIComponent(escape(u.stringify(e)))
                        } catch (e) {
                            throw new Error("Malformed UTF-8 data")
                        }
                    },
                    parse: function(e) {
                        return u.parse(unescape(encodeURIComponent(e)))
                    }
                },
                l = r.BufferedBlockAlgorithm = i.extend({
                    reset: function() {
                        this._data = new o.init;
                        this._nDataBytes = 0
                    },
                    _append: function(e) {
                        "string" == typeof e && (e = c.parse(e));
                        this._data.concat(e);
                        this._nDataBytes += e.sigBytes
                    },
                    _process: function(t) {
                        var n = this._data,
                            r = n.words,
                            i = n.sigBytes,
                            s = this.blockSize,
                            a = i / (4 * s),
                            u = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * s,
                            c = e.min(4 * u, i);
                        if (u) {
                            for (var l = 0; l < u; l += s) this._doProcessBlock(r, l);
                            var f = r.splice(0, u);
                            n.sigBytes -= c
                        }
                        return new o.init(f, c)
                    },
                    clone: function() {
                        var e = i.clone.call(this);
                        e._data = this._data.clone();
                        return e
                    },
                    _minBufferSize: 0
                }),
                f = (r.Hasher = l.extend({
                    cfg: i.extend(),
                    init: function(e) {
                        this.cfg = this.cfg.extend(e);
                        this.reset()
                    },
                    reset: function() {
                        l.reset.call(this);
                        this._doReset()
                    },
                    update: function(e) {
                        this._append(e);
                        this._process();
                        return this
                    },
                    finalize: function(e) {
                        e && this._append(e);
                        return this._doFinalize()
                    },
                    blockSize: 16,
                    _createHelper: function(e) {
                        return function(t, n) {
                            return new e.init(n).finalize(t)
                        }
                    },
                    _createHmacHelper: function(e) {
                        return function(t, n) {
                            return new f.HMAC.init(e, n).finalize(t)
                        }
                    }
                }), n.algo = {});
            return n
        }(Math);
    ! function(e) {
        var t = a,
            n = t.lib,
            r = n.WordArray,
            i = n.Hasher,
            o = t.algo,
            s = [],
            u = [];
        ! function() {
            function t(t) {
                for (var n = e.sqrt(t), r = 2; r <= n; r++)
                    if (!(t % r)) return !1;
                return !0
            }

            function n(e) {
                return 4294967296 * (e - (0 | e)) | 0
            }
            for (var r = 2, i = 0; i < 64;) {
                if (t(r)) {
                    i < 8 && (s[i] = n(e.pow(r, .5)));
                    u[i] = n(e.pow(r, 1 / 3));
                    i++
                }
                r++
            }
        }();
        var c = [],
            l = o.SHA256 = i.extend({
                _doReset: function() {
                    this._hash = new r.init(s.slice(0))
                },
                _doProcessBlock: function(e, t) {
                    for (var n = this._hash.words, r = n[0], i = n[1], o = n[2], s = n[3], a = n[4], l = n[5], f = n[6], h = n[7], p = 0; p < 64; p++) {
                        if (p < 16) c[p] = 0 | e[t + p];
                        else {
                            var d = c[p - 15],
                                g = (d << 25 | d >>> 7) ^ (d << 14 | d >>> 18) ^ d >>> 3,
                                v = c[p - 2],
                                y = (v << 15 | v >>> 17) ^ (v << 13 | v >>> 19) ^ v >>> 10;
                            c[p] = g + c[p - 7] + y + c[p - 16]
                        }
                        var m = r & i ^ r & o ^ i & o,
                            _ = (r << 30 | r >>> 2) ^ (r << 19 | r >>> 13) ^ (r << 10 | r >>> 22),
                            b = h + ((a << 26 | a >>> 6) ^ (a << 21 | a >>> 11) ^ (a << 7 | a >>> 25)) + (a & l ^ ~a & f) + u[p] + c[p];
                        h = f;
                        f = l;
                        l = a;
                        a = s + b | 0;
                        s = o;
                        o = i;
                        i = r;
                        r = b + (_ + m) | 0
                    }
                    n[0] = n[0] + r | 0;
                    n[1] = n[1] + i | 0;
                    n[2] = n[2] + o | 0;
                    n[3] = n[3] + s | 0;
                    n[4] = n[4] + a | 0;
                    n[5] = n[5] + l | 0;
                    n[6] = n[6] + f | 0;
                    n[7] = n[7] + h | 0
                },
                _doFinalize: function() {
                    var t = this._data,
                        n = t.words,
                        r = 8 * this._nDataBytes,
                        i = 8 * t.sigBytes;
                    n[i >>> 5] |= 128 << 24 - i % 32;
                    n[14 + (i + 64 >>> 9 << 4)] = e.floor(r / 4294967296);
                    n[15 + (i + 64 >>> 9 << 4)] = r;
                    t.sigBytes = 4 * n.length;
                    this._process();
                    return this._hash
                },
                clone: function() {
                    var e = i.clone.call(this);
                    e._hash = this._hash.clone();
                    return e
                }
            });
        t.SHA256 = i._createHelper(l);
        t.HmacSHA256 = i._createHmacHelper(l)
    }(Math);
    r = (n = a).lib.Base, i = n.enc.Utf8, n.algo.HMAC = r.extend({
        init: function(e, t) {
            e = this._hasher = new e.init;
            "string" == typeof t && (t = i.parse(t));
            var n = e.blockSize,
                r = 4 * n;
            t.sigBytes > r && (t = e.finalize(t));
            t.clamp();
            for (var o = this._oKey = t.clone(), s = this._iKey = t.clone(), a = o.words, u = s.words, c = 0; c < n; c++) {
                a[c] ^= 1549556828;
                u[c] ^= 909522486
            }
            o.sigBytes = s.sigBytes = r;
            this.reset()
        },
        reset: function() {
            var e = this._hasher;
            e.reset();
            e.update(this._iKey)
        },
        update: function(e) {
            this._hasher.update(e);
            return this
        },
        finalize: function(e) {
            var t = this._hasher,
                n = t.finalize(e);
            t.reset();
            return t.finalize(this._oKey.clone().concat(n))
        }
    });
    ! function() {
        var e = a,
            t = e.lib.WordArray;
        e.enc.Base64 = {
            stringify: function(e) {
                var t = e.words,
                    n = e.sigBytes,
                    r = this._map;
                e.clamp();
                for (var i = [], o = 0; o < n; o += 3)
                    for (var s = (t[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 16 | (t[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255) << 8 | t[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, a = 0; a < 4 && o + .75 * a < n; a++) i.push(r.charAt(s >>> 6 * (3 - a) & 63));
                var u = r.charAt(64);
                if (u)
                    for (; i.length % 4;) i.push(u);
                return i.join("")
            },
            parse: function(e) {
                var n = e.length,
                    r = this._map,
                    i = r.charAt(64);
                if (i) {
                    var o = e.indexOf(i); - 1 != o && (n = o)
                }
                for (var s = [], a = 0, u = 0; u < n; u++)
                    if (u % 4) {
                        var c = r.indexOf(e.charAt(u - 1)) << u % 4 * 2,
                            l = r.indexOf(e.charAt(u)) >>> 6 - u % 4 * 2;
                        s[a >>> 2] |= (c | l) << 24 - a % 4 * 8;
                        a++
                    } return t.create(s, a)
            },
            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        }
    }();
    a.lib.Cipher || function(e) {
        var t = a,
            n = t.lib,
            r = n.Base,
            i = n.WordArray,
            o = n.BufferedBlockAlgorithm,
            s = t.enc,
            u = (s.Utf8, s.Base64),
            c = t.algo.EvpKDF,
            l = n.Cipher = o.extend({
                cfg: r.extend(),
                createEncryptor: function(e, t) {
                    return this.create(this._ENC_XFORM_MODE, e, t)
                },
                createDecryptor: function(e, t) {
                    return this.create(this._DEC_XFORM_MODE, e, t)
                },
                init: function(e, t, n) {
                    this.cfg = this.cfg.extend(n);
                    this._xformMode = e;
                    this._key = t;
                    this.reset()
                },
                reset: function() {
                    o.reset.call(this);
                    this._doReset()
                },
                process: function(e) {
                    this._append(e);
                    return this._process()
                },
                finalize: function(e) {
                    e && this._append(e);
                    return this._doFinalize()
                },
                keySize: 4,
                ivSize: 4,
                _ENC_XFORM_MODE: 1,
                _DEC_XFORM_MODE: 2,
                _createHelper: function() {
                    function e(e) {
                        return "string" == typeof e ? _ : y
                    }
                    return function(t) {
                        return {
                            encrypt: function(n, r, i) {
                                return e(r).encrypt(t, n, r, i)
                            },
                            decrypt: function(n, r, i) {
                                return e(r).decrypt(t, n, r, i)
                            }
                        }
                    }
                }()
            }),
            f = (n.StreamCipher = l.extend({
                _doFinalize: function() {
                    return this._process(!0)
                },
                blockSize: 1
            }), t.mode = {}),
            h = n.BlockCipherMode = r.extend({
                createEncryptor: function(e, t) {
                    return this.Encryptor.create(e, t)
                },
                createDecryptor: function(e, t) {
                    return this.Decryptor.create(e, t)
                },
                init: function(e, t) {
                    this._cipher = e;
                    this._iv = t
                }
            }),
            p = f.CBC = function() {
                var t = h.extend();
                t.Encryptor = t.extend({
                    processBlock: function(e, t) {
                        var r = this._cipher,
                            i = r.blockSize;
                        n.call(this, e, t, i);
                        r.encryptBlock(e, t);
                        this._prevBlock = e.slice(t, t + i)
                    }
                });
                t.Decryptor = t.extend({
                    processBlock: function(e, t) {
                        var r = this._cipher,
                            i = r.blockSize,
                            o = e.slice(t, t + i);
                        r.decryptBlock(e, t);
                        n.call(this, e, t, i);
                        this._prevBlock = o
                    }
                });

                function n(t, n, r) {
                    var i = this._iv;
                    if (i) {
                        var o = i;
                        this._iv = e
                    } else o = this._prevBlock;
                    for (var s = 0; s < r; s++) t[n + s] ^= o[s]
                }
                return t
            }(),
            d = (t.pad = {}).Pkcs7 = {
                pad: function(e, t) {
                    for (var n = 4 * t, r = n - e.sigBytes % n, o = r << 24 | r << 16 | r << 8 | r, s = [], a = 0; a < r; a += 4) s.push(o);
                    var u = i.create(s, r);
                    e.concat(u)
                },
                unpad: function(e) {
                    var t = 255 & e.words[e.sigBytes - 1 >>> 2];
                    e.sigBytes -= t
                }
            },
            g = (n.BlockCipher = l.extend({
                cfg: l.cfg.extend({
                    mode: p,
                    padding: d
                }),
                reset: function() {
                    l.reset.call(this);
                    var e = this.cfg,
                        t = e.iv,
                        n = e.mode;
                    if (this._xformMode == this._ENC_XFORM_MODE) var r = n.createEncryptor;
                    else {
                        r = n.createDecryptor;
                        this._minBufferSize = 1
                    }
                    this._mode = r.call(n, this, t && t.words)
                },
                _doProcessBlock: function(e, t) {
                    this._mode.processBlock(e, t)
                },
                _doFinalize: function() {
                    var e = this.cfg.padding;
                    if (this._xformMode == this._ENC_XFORM_MODE) {
                        e.pad(this._data, this.blockSize);
                        var t = this._process(!0)
                    } else {
                        t = this._process(!0);
                        e.unpad(t)
                    }
                    return t
                },
                blockSize: 4
            }), n.CipherParams = r.extend({
                init: function(e) {
                    this.mixIn(e)
                },
                toString: function(e) {
                    return (e || this.formatter).stringify(this)
                }
            })),
            v = (t.format = {}).OpenSSL = {
                stringify: function(e) {
                    var t = e.ciphertext,
                        n = e.salt;
                    if (n) var r = i.create([1398893684, 1701076831]).concat(n).concat(t);
                    else r = t;
                    return r.toString(u)
                },
                parse: function(e) {
                    var t = u.parse(e),
                        n = t.words;
                    if (1398893684 == n[0] && 1701076831 == n[1]) {
                        var r = i.create(n.slice(2, 4));
                        n.splice(0, 4);
                        t.sigBytes -= 16
                    }
                    return g.create({
                        ciphertext: t,
                        salt: r
                    })
                }
            },
            y = n.SerializableCipher = r.extend({
                cfg: r.extend({
                    format: v
                }),
                encrypt: function(e, t, n, r) {
                    r = this.cfg.extend(r);
                    var i = e.createEncryptor(n, r),
                        o = i.finalize(t),
                        s = i.cfg;
                    return g.create({
                        ciphertext: o,
                        key: n,
                        iv: s.iv,
                        algorithm: e,
                        mode: s.mode,
                        padding: s.padding,
                        blockSize: e.blockSize,
                        formatter: r.format
                    })
                },
                decrypt: function(e, t, n, r) {
                    r = this.cfg.extend(r);
                    t = this._parse(t, r.format);
                    return e.createDecryptor(n, r).finalize(t.ciphertext)
                },
                _parse: function(e, t) {
                    return "string" == typeof e ? t.parse(e, this) : e
                }
            }),
            m = (t.kdf = {}).OpenSSL = {
                execute: function(e, t, n, r) {
                    r || (r = i.random(8));
                    var o = c.create({
                            keySize: t + n
                        }).compute(e, r),
                        s = i.create(o.words.slice(t), 4 * n);
                    o.sigBytes = 4 * t;
                    return g.create({
                        key: o,
                        iv: s,
                        salt: r
                    })
                }
            },
            _ = n.PasswordBasedCipher = y.extend({
                cfg: y.cfg.extend({
                    kdf: m
                }),
                encrypt: function(e, t, n, r) {
                    var i = (r = this.cfg.extend(r)).kdf.execute(n, e.keySize, e.ivSize);
                    r.iv = i.iv;
                    var o = y.encrypt.call(this, e, t, i.key, r);
                    o.mixIn(i);
                    return o
                },
                decrypt: function(e, t, n, r) {
                    r = this.cfg.extend(r);
                    t = this._parse(t, r.format);
                    var i = r.kdf.execute(n, e.keySize, e.ivSize, t.salt);
                    r.iv = i.iv;
                    return y.decrypt.call(this, e, t, i.key, r)
                }
            })
    }();
    ! function() {
        var e = a,
            t = e.lib.BlockCipher,
            n = e.algo,
            r = [],
            i = [],
            o = [],
            s = [],
            u = [],
            c = [],
            l = [],
            f = [],
            h = [],
            p = [];
        ! function() {
            for (var e = [], t = 0; t < 256; t++) e[t] = t < 128 ? t << 1 : t << 1 ^ 283;
            var n = 0,
                a = 0;
            for (t = 0; t < 256; t++) {
                var d = a ^ a << 1 ^ a << 2 ^ a << 3 ^ a << 4;
                d = d >>> 8 ^ 255 & d ^ 99;
                r[n] = d;
                i[d] = n;
                var g = e[n],
                    v = e[g],
                    y = e[v],
                    m = 257 * e[d] ^ 16843008 * d;
                o[n] = m << 24 | m >>> 8;
                s[n] = m << 16 | m >>> 16;
                u[n] = m << 8 | m >>> 24;
                c[n] = m;
                m = 16843009 * y ^ 65537 * v ^ 257 * g ^ 16843008 * n;
                l[d] = m << 24 | m >>> 8;
                f[d] = m << 16 | m >>> 16;
                h[d] = m << 8 | m >>> 24;
                p[d] = m;
                if (n) {
                    n = g ^ e[e[e[y ^ g]]];
                    a ^= e[e[a]]
                } else n = a = 1
            }
        }();
        var d = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
            g = n.AES = t.extend({
                _doReset: function() {
                    for (var e = this._key, t = e.words, n = e.sigBytes / 4, i = 4 * ((this._nRounds = n + 6) + 1), o = this._keySchedule = [], s = 0; s < i; s++)
                        if (s < n) o[s] = t[s];
                        else {
                            var a = o[s - 1];
                            if (s % n) n > 6 && s % n == 4 && (a = r[a >>> 24] << 24 | r[a >>> 16 & 255] << 16 | r[a >>> 8 & 255] << 8 | r[255 & a]);
                            else {
                                a = r[(a = a << 8 | a >>> 24) >>> 24] << 24 | r[a >>> 16 & 255] << 16 | r[a >>> 8 & 255] << 8 | r[255 & a];
                                a ^= d[s / n | 0] << 24
                            }
                            o[s] = o[s - n] ^ a
                        } for (var u = this._invKeySchedule = [], c = 0; c < i; c++) {
                        s = i - c;
                        if (c % 4) a = o[s];
                        else a = o[s - 4];
                        u[c] = c < 4 || s <= 4 ? a : l[r[a >>> 24]] ^ f[r[a >>> 16 & 255]] ^ h[r[a >>> 8 & 255]] ^ p[r[255 & a]]
                    }
                },
                encryptBlock: function(e, t) {
                    this._doCryptBlock(e, t, this._keySchedule, o, s, u, c, r)
                },
                decryptBlock: function(e, t) {
                    var n = e[t + 1];
                    e[t + 1] = e[t + 3];
                    e[t + 3] = n;
                    this._doCryptBlock(e, t, this._invKeySchedule, l, f, h, p, i);
                    n = e[t + 1];
                    e[t + 1] = e[t + 3];
                    e[t + 3] = n
                },
                _doCryptBlock: function(e, t, n, r, i, o, s, a) {
                    for (var u = this._nRounds, c = e[t] ^ n[0], l = e[t + 1] ^ n[1], f = e[t + 2] ^ n[2], h = e[t + 3] ^ n[3], p = 4, d = 1; d < u; d++) {
                        var g = r[c >>> 24] ^ i[l >>> 16 & 255] ^ o[f >>> 8 & 255] ^ s[255 & h] ^ n[p++],
                            v = r[l >>> 24] ^ i[f >>> 16 & 255] ^ o[h >>> 8 & 255] ^ s[255 & c] ^ n[p++],
                            y = r[f >>> 24] ^ i[h >>> 16 & 255] ^ o[c >>> 8 & 255] ^ s[255 & l] ^ n[p++],
                            m = r[h >>> 24] ^ i[c >>> 16 & 255] ^ o[l >>> 8 & 255] ^ s[255 & f] ^ n[p++];
                        c = g;
                        l = v;
                        f = y;
                        h = m
                    }
                    g = (a[c >>> 24] << 24 | a[l >>> 16 & 255] << 16 | a[f >>> 8 & 255] << 8 | a[255 & h]) ^ n[p++], v = (a[l >>> 24] << 24 | a[f >>> 16 & 255] << 16 | a[h >>> 8 & 255] << 8 | a[255 & c]) ^ n[p++], y = (a[f >>> 24] << 24 | a[h >>> 16 & 255] << 16 | a[c >>> 8 & 255] << 8 | a[255 & l]) ^ n[p++], m = (a[h >>> 24] << 24 | a[c >>> 16 & 255] << 16 | a[l >>> 8 & 255] << 8 | a[255 & f]) ^ n[p++];
                    e[t] = g;
                    e[t + 1] = v;
                    e[t + 2] = y;
                    e[t + 3] = m
                },
                keySize: 8
            });
        e.AES = t._createHelper(g)
    }();
    ! function() {
        if ("undefined" != typeof ArrayBuffer) {
            var e = a.lib.WordArray,
                t = e.init;
            (e.init = function(e) {
                e instanceof ArrayBuffer ? e = new Uint8Array(e) : (e instanceof Int8Array || "undefined" != typeof Uint8ClampedArray && e instanceof Uint8ClampedArray || e instanceof Int16Array || e instanceof Uint16Array || e instanceof Int32Array || e instanceof Uint32Array || "undefined" != typeof Float32Array && e instanceof Float32Array || "undefined" != typeof Float64Array && e instanceof Float64Array) && (e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength));
                if (e instanceof Uint8Array) {
                    for (var n = e.byteLength, r = [], i = 0; i < n; i++) r[i >>> 2] |= e[i] << 24 - i % 4 * 8;
                    t.call(this, r, n)
                } else t.apply(this, arguments)
            }).prototype = e
        }
    }();
    var u = function() {
            function e() {}
            e.addListener = function(e, t, n) {
                e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent("on" + t, function() {
                    n.apply(e, arguments)
                })
            };
            e.removeListener = function(e, t, n) {
                e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent("on" + t, function() {
                    n.apply(e, arguments)
                })
            };
            e.addMessageListener = function(t, n) {
                e.addListener(t, "message", n)
            };
            e.removeMessageListener = function(t, n) {
                e.removeListener(t, "message", n)
            };
            e.addUnloadListener = function(t) {
                e.addListener(s, "unload", t)
            };
            return e
        }(),
        c = function() {
            "use strict";
            var e = {};
            e.inspect = t;

            function t(e) {
                if (void 0 === e) return "undefined";
                var t, n;
                if (e instanceof ArrayBuffer) {
                    n = "ArrayBuffer";
                    t = new DataView(e)
                } else if (e instanceof DataView) {
                    n = "DataView";
                    t = e
                }
                if (!t) return JSON.stringify(e);
                for (var r = [], i = 0; i < e.byteLength; i++) {
                    if (i > 20) {
                        r.push("...");
                        break
                    }
                    var o = t.getUint8(i).toString(16);
                    1 === o.length && (o = "0" + o);
                    r.push(o)
                }
                return "<" + n + " " + r.join(" ") + ">"
            }
            e.utf8Write = n;

            function n(e, t, n) {
                e.byteLength;
                for (var r = 0, i = n.length; r < i; r++) {
                    var o = n.charCodeAt(r);
                    if (o < 128) e.setUint8(t++, o >>> 0 & 127 | 0);
                    else if (o < 2048) {
                        e.setUint8(t++, o >>> 6 & 31 | 192);
                        e.setUint8(t++, o >>> 0 & 63 | 128)
                    } else if (o < 65536) {
                        e.setUint8(t++, o >>> 12 & 15 | 224);
                        e.setUint8(t++, o >>> 6 & 63 | 128);
                        e.setUint8(t++, o >>> 0 & 63 | 128)
                    } else {
                        if (!(o < 1114112)) throw new Error("bad codepoint " + o);
                        e.setUint8(t++, o >>> 18 & 7 | 240);
                        e.setUint8(t++, o >>> 12 & 63 | 128);
                        e.setUint8(t++, o >>> 6 & 63 | 128);
                        e.setUint8(t++, o >>> 0 & 63 | 128)
                    }
                }
            }
            e.utf8Read = r;

            function r(e, t, n) {
                for (var r = "", i = t, o = t + n; i < o; i++) {
                    var s = e.getUint8(i);
                    if (0 != (128 & s))
                        if (192 != (224 & s))
                            if (224 != (240 & s)) {
                                if (240 != (248 & s)) throw new Error("Invalid byte " + s.toString(16));
                                r += String.fromCharCode((7 & s) << 18 | (63 & e.getUint8(++i)) << 12 | (63 & e.getUint8(++i)) << 6 | (63 & e.getUint8(++i)) << 0)
                            } else r += String.fromCharCode((15 & s) << 12 | (63 & e.getUint8(++i)) << 6 | (63 & e.getUint8(++i)) << 0);
                    else r += String.fromCharCode((15 & s) << 6 | 63 & e.getUint8(++i));
                    else r += String.fromCharCode(s)
                }
                return r
            }
            e.utf8ByteCount = i;

            function i(e) {
                for (var t = 0, n = 0, r = e.length; n < r; n++) {
                    var i = e.charCodeAt(n);
                    if (i < 128) t += 1;
                    else if (i < 2048) t += 2;
                    else if (i < 65536) t += 3;
                    else {
                        if (!(i < 1114112)) throw new Error("bad codepoint " + i);
                        t += 4
                    }
                }
                return t
            }
            e.encode = function(e, t) {
                var n = g(e, t);
                if (0 != n) {
                    var r = new ArrayBuffer(n);
                    d(e, new DataView(r), 0, t);
                    return r
                }
            };
            e.decode = h;
            var o = 4294967296,
                s = 1 / o;

            function a(e, t) {
                t = t || 0;
                return e.getInt32(t) * o + e.getUint32(t + 4)
            }

            function u(e, t) {
                t = t || 0;
                return e.getUint32(t) * o + e.getUint32(t + 4)
            }

            function c(e, t, n) {
                if (n < 0x8000000000000000) {
                    e.setInt32(t, Math.floor(n * s));
                    e.setInt32(t + 4, -1 & n)
                } else {
                    e.setUint32(t, 2147483647);
                    e.setUint32(t + 4, 2147483647)
                }
            }

            function l(e, t, n) {
                if (n < 0x10000000000000000) {
                    e.setUint32(t, Math.floor(n * s));
                    e.setInt32(t + 4, -1 & n)
                } else {
                    e.setUint32(t, 4294967295);
                    e.setUint32(t + 4, 4294967295)
                }
            }

            function f(e, t) {
                this.offset = t || 0;
                this.view = e
            }
            f.prototype.map = function(e) {
                for (var t = {}, n = 0; n < e; n++) {
                    t[this.parse()] = this.parse()
                }
                return t
            };
            f.prototype.bin = f.prototype.buf = function(e) {
                var t = new ArrayBuffer(e);
                new Uint8Array(t).set(new Uint8Array(this.view.buffer, this.offset, e), 0);
                this.offset += e;
                return t
            };
            f.prototype.str = function(e) {
                var t = r(this.view, this.offset, e);
                this.offset += e;
                return t
            };
            f.prototype.array = function(e) {
                for (var t = new Array(e), n = 0; n < e; n++) t[n] = this.parse();
                return t
            };
            f.prototype.ext = function(e) {
                var t = {};
                t.type = this.view.getInt8(this.offset);
                this.offset++;
                t.data = this.buf(e);
                this.offset += e;
                return t
            };
            f.prototype.parse = function() {
                var e, t, n = this.view.getUint8(this.offset);
                if (0 == (128 & n)) {
                    this.offset++;
                    return n
                }
                if (128 == (240 & n)) {
                    t = 15 & n;
                    this.offset++;
                    return this.map(t)
                }
                if (144 == (240 & n)) {
                    t = 15 & n;
                    this.offset++;
                    return this.array(t)
                }
                if (160 == (224 & n)) {
                    t = 31 & n;
                    this.offset++;
                    return this.str(t)
                }
                if (224 == (224 & n)) {
                    e = this.view.getInt8(this.offset);
                    this.offset++;
                    return e
                }
                switch (n) {
                    case 192:
                        this.offset++;
                        return null;
                    case 193:
                        this.offset++;
                        return;
                    case 194:
                        this.offset++;
                        return !1;
                    case 195:
                        this.offset++;
                        return !0;
                    case 196:
                        t = this.view.getUint8(this.offset + 1);
                        this.offset += 2;
                        return this.bin(t);
                    case 197:
                        t = this.view.getUint16(this.offset + 1);
                        this.offset += 3;
                        return this.bin(t);
                    case 198:
                        t = this.view.getUint32(this.offset + 1);
                        this.offset += 5;
                        return this.bin(t);
                    case 199:
                        t = this.view.getUint8(this.offset + 1);
                        this.offset += 2;
                        return this.ext(t);
                    case 200:
                        t = this.view.getUint16(this.offset + 1);
                        this.offset += 3;
                        return this.ext(t);
                    case 201:
                        t = this.view.getUint32(this.offset + 1);
                        this.offset += 5;
                        return this.ext(t);
                    case 202:
                        e = this.view.getFloat32(this.offset + 1);
                        this.offset += 5;
                        return e;
                    case 203:
                        e = this.view.getFloat64(this.offset + 1);
                        this.offset += 9;
                        return e;
                    case 204:
                        e = this.view.getUint8(this.offset + 1);
                        this.offset += 2;
                        return e;
                    case 205:
                        e = this.view.getUint16(this.offset + 1);
                        this.offset += 3;
                        return e;
                    case 206:
                        e = this.view.getUint32(this.offset + 1);
                        this.offset += 5;
                        return e;
                    case 207:
                        e = u(this.view, this.offset + 1);
                        this.offset += 9;
                        return e;
                    case 208:
                        e = this.view.getInt8(this.offset + 1);
                        this.offset += 2;
                        return e;
                    case 209:
                        e = this.view.getInt16(this.offset + 1);
                        this.offset += 3;
                        return e;
                    case 210:
                        e = this.view.getInt32(this.offset + 1);
                        this.offset += 5;
                        return e;
                    case 211:
                        e = a(this.view, this.offset + 1);
                        this.offset += 9;
                        return e;
                    case 212:
                        t = 1;
                        this.offset++;
                        return this.ext(t);
                    case 213:
                        t = 2;
                        this.offset++;
                        return this.ext(t);
                    case 214:
                        t = 4;
                        this.offset++;
                        return this.ext(t);
                    case 215:
                        t = 8;
                        this.offset++;
                        return this.ext(t);
                    case 216:
                        t = 16;
                        this.offset++;
                        return this.ext(t);
                    case 217:
                        t = this.view.getUint8(this.offset + 1);
                        this.offset += 2;
                        return this.str(t);
                    case 218:
                        t = this.view.getUint16(this.offset + 1);
                        this.offset += 3;
                        return this.str(t);
                    case 219:
                        t = this.view.getUint32(this.offset + 1);
                        this.offset += 5;
                        return this.str(t);
                    case 220:
                        t = this.view.getUint16(this.offset + 1);
                        this.offset += 3;
                        return this.array(t);
                    case 221:
                        t = this.view.getUint32(this.offset + 1);
                        this.offset += 5;
                        return this.array(t);
                    case 222:
                        t = this.view.getUint16(this.offset + 1);
                        this.offset += 3;
                        return this.map(t);
                    case 223:
                        t = this.view.getUint32(this.offset + 1);
                        this.offset += 5;
                        return this.map(t)
                }
                throw new Error("Unknown type 0x" + n.toString(16))
            };

            function h(e) {
                var t = new f(new DataView(e)),
                    n = t.parse();
                if (t.offset !== e.byteLength) throw new Error(e.byteLength - t.offset + " trailing bytes");
                return n
            }

            function p(e, t) {
                return y.keysArray(e, !0).filter(function(n) {
                    var r = e[n];
                    return !(t && (void 0 === r || null === r) || "function" === typeof r && !r.toJSON)
                })
            }

            function d(e, t, r, o) {
                var s = typeof e;
                if ("string" === s) {
                    if ((a = i(e)) < 32) {
                        t.setUint8(r, 160 | a);
                        n(t, r + 1, e);
                        return 1 + a
                    }
                    if (a < 256) {
                        t.setUint8(r, 217);
                        t.setUint8(r + 1, a);
                        n(t, r + 2, e);
                        return 2 + a
                    }
                    if (a < 65536) {
                        t.setUint8(r, 218);
                        t.setUint16(r + 1, a);
                        n(t, r + 3, e);
                        return 3 + a
                    }
                    if (a < 4294967296) {
                        t.setUint8(r, 219);
                        t.setUint32(r + 1, a);
                        n(t, r + 5, e);
                        return 5 + a
                    }
                }
                ArrayBuffer.isView && ArrayBuffer.isView(e) && (e = e.buffer);
                if (e instanceof ArrayBuffer) {
                    if ((a = e.byteLength) < 256) {
                        t.setUint8(r, 196);
                        t.setUint8(r + 1, a);
                        new Uint8Array(t.buffer).set(new Uint8Array(e), r + 2);
                        return 2 + a
                    }
                    if (a < 65536) {
                        t.setUint8(r, 197);
                        t.setUint16(r + 1, a);
                        new Uint8Array(t.buffer).set(new Uint8Array(e), r + 3);
                        return 3 + a
                    }
                    if (a < 4294967296) {
                        t.setUint8(r, 198);
                        t.setUint32(r + 1, a);
                        new Uint8Array(t.buffer).set(new Uint8Array(e), r + 5);
                        return 5 + a
                    }
                }
                if ("number" === s) {
                    if (Math.floor(e) !== e) {
                        t.setUint8(r, 203);
                        t.setFloat64(r + 1, e);
                        return 9
                    }
                    if (e >= 0) {
                        if (e < 128) {
                            t.setUint8(r, e);
                            return 1
                        }
                        if (e < 256) {
                            t.setUint8(r, 204);
                            t.setUint8(r + 1, e);
                            return 2
                        }
                        if (e < 65536) {
                            t.setUint8(r, 205);
                            t.setUint16(r + 1, e);
                            return 3
                        }
                        if (e < 4294967296) {
                            t.setUint8(r, 206);
                            t.setUint32(r + 1, e);
                            return 5
                        }
                        if (e < 0x10000000000000000) {
                            t.setUint8(r, 207);
                            l(t, r + 1, e);
                            return 9
                        }
                        throw new Error("Number too big 0x" + e.toString(16))
                    }
                    if (e >= -32) {
                        t.setInt8(r, e);
                        return 1
                    }
                    if (e >= -128) {
                        t.setUint8(r, 208);
                        t.setInt8(r + 1, e);
                        return 2
                    }
                    if (e >= -32768) {
                        t.setUint8(r, 209);
                        t.setInt16(r + 1, e);
                        return 3
                    }
                    if (e >= -2147483648) {
                        t.setUint8(r, 210);
                        t.setInt32(r + 1, e);
                        return 5
                    }
                    if (e >= -0x8000000000000000) {
                        t.setUint8(r, 211);
                        c(t, r + 1, e);
                        return 9
                    }
                    throw new Error("Number too small -0x" + (-e).toString(16).substr(1))
                }
                if ("undefined" === s) {
                    if (o) return 0;
                    t.setUint8(r, 212);
                    t.setUint8(r + 1, 0);
                    t.setUint8(r + 2, 0);
                    return 3
                }
                if (null === e) {
                    if (o) return 0;
                    t.setUint8(r, 192);
                    return 1
                }
                if ("boolean" === s) {
                    t.setUint8(r, e ? 195 : 194);
                    return 1
                }
                if ("function" == typeof e.toJSON) return d(e.toJSON(), t, r, o);
                if ("object" === s) {
                    var a, u = 0,
                        f = Array.isArray(e);
                    if (f) a = e.length;
                    else {
                        var h = p(e, o);
                        a = h.length
                    }
                    if (a < 16) {
                        t.setUint8(r, a | (f ? 144 : 128));
                        u = 1
                    } else if (a < 65536) {
                        t.setUint8(r, f ? 220 : 222);
                        t.setUint16(r + 1, a);
                        u = 3
                    } else if (a < 4294967296) {
                        t.setUint8(r, f ? 221 : 223);
                        t.setUint32(r + 1, a);
                        u = 5
                    }
                    if (f)
                        for (var g = 0; g < a; g++) u += d(e[g], t, r + u, o);
                    else
                        for (g = 0; g < a; g++) {
                            var v = h[g];
                            u += d(v, t, r + u);
                            u += d(e[v], t, r + u, o)
                        }
                    return u
                }
                if ("function" === s) return 0;
                throw new Error("Unknown type " + s)
            }

            function g(e, t) {
                var n = typeof e;
                if ("string" === n) {
                    if ((r = i(e)) < 32) return 1 + r;
                    if (r < 256) return 2 + r;
                    if (r < 65536) return 3 + r;
                    if (r < 4294967296) return 5 + r
                }
                ArrayBuffer.isView && ArrayBuffer.isView(e) && (e = e.buffer);
                if (e instanceof ArrayBuffer) {
                    if ((r = e.byteLength) < 256) return 2 + r;
                    if (r < 65536) return 3 + r;
                    if (r < 4294967296) return 5 + r
                }
                if ("number" === n) {
                    if (Math.floor(e) !== e) return 9;
                    if (e >= 0) {
                        if (e < 128) return 1;
                        if (e < 256) return 2;
                        if (e < 65536) return 3;
                        if (e < 4294967296) return 5;
                        if (e < 0x10000000000000000) return 9;
                        throw new Error("Number too big 0x" + e.toString(16))
                    }
                    if (e >= -32) return 1;
                    if (e >= -128) return 2;
                    if (e >= -32768) return 3;
                    if (e >= -2147483648) return 5;
                    if (e >= -0x8000000000000000) return 9;
                    throw new Error("Number too small -0x" + e.toString(16).substr(1))
                }
                if ("boolean" === n) return 1;
                if (null === e) return t ? 0 : 1;
                if (void 0 === e) return t ? 0 : 3;
                if ("function" == typeof e.toJSON) return g(e.toJSON(), t);
                if ("object" === n) {
                    var r, o = 0;
                    if (Array.isArray(e)) {
                        r = e.length;
                        for (var s = 0; s < r; s++) o += g(e[s], t)
                    } else {
                        var a = p(e, t);
                        r = a.length;
                        for (s = 0; s < r; s++) {
                            var u = a[s];
                            o += g(u) + g(e[u], t)
                        }
                    }
                    if (r < 16) return 1 + o;
                    if (r < 65536) return 3 + o;
                    if (r < 4294967296) return 5 + o;
                    throw new Error("Array or object too long 0x" + r.toString(16))
                }
                if ("function" === n) return 0;
                throw new Error("Unknown type " + n)
            }
            return e
        }();
    "undefined" == typeof Window && "undefined" == typeof WorkerGlobalScope && console.log("Warning: this distribution of Ably is intended for browsers. On nodejs, please use the 'ably' package on npm");

    function l() {
        var e = s.location;
        return !s.WebSocket || !e || !e.origin || e.origin.indexOf("http") > -1
    }
    var f = s.navigator && s.navigator.userAgent.toString(),
        h = {
            libver: "js-web",
            logTimestamps: !0,
            userAgent: f,
            currentUrl: s.location && s.location.href,
            noUpgrade: f && f.match(/MSIE\s8\.0/),
            binaryType: "arraybuffer",
            WebSocket: s.WebSocket || s.MozWebSocket,
            xhrSupported: s.XMLHttpRequest && "withCredentials" in new XMLHttpRequest,
            jsonpSupported: "undefined" != typeof document,
            allowComet: l(),
            streamingSupported: !0,
            useProtocolHeartbeats: !0,
            createHmac: null,
            msgpack: c,
            supportsBinary: !!s.TextDecoder,
            preferBinary: !1,
            ArrayBuffer: s.ArrayBuffer,
            atob: s.atob,
            nextTick: function(e) {
                setTimeout(e, 0)
            },
            addEventListener: s.addEventListener,
            inspect: JSON.stringify,
            stringByteSize: function(e) {
                return s.TextDecoder && (new s.TextEncoder).encode(e).length || e.length
            },
            TextEncoder: s.TextEncoder,
            TextDecoder: s.TextDecoder,
            Promise: s.Promise,
            getRandomValues: function(e) {
                if (void 0 !== e) return function(t, n) {
                    e.getRandomValues(t);
                    n && n(null)
                }
            }(s.crypto || s.msCrypto)
        },
        p = function() {
            var e, t = "aes",
                n = 256,
                r = "cbc",
                i = 16,
                o = 4,
                s = 4294967296,
                u = 2147483648,
                c = a.lib.WordArray;
            if (h.getRandomWordArray) e = h.getRandomWordArray;
            else if ("undefined" != typeof Uint32Array && h.getRandomValues) {
                var l = new Uint32Array(o);
                e = function(e, t) {
                    var n = e / 4,
                        r = n == o ? l : new Uint32Array(n);
                    h.getRandomValues(r, function(e) {
                        t(e, v.toWordArray(r))
                    })
                }
            } else e = function(e, t) {
                w.logAction(w.LOG_MAJOR, "Ably.Crypto.generateRandom()", "Warning: the browser you are using does not support secure cryptographically secure randomness generation; falling back to insecure Math.random()");
                for (var n = e / 4, r = new Array(n), i = 0; i < n; i++) r[i] = Math.floor(Math.random() * s) - u;
                t(null, c.create(r))
            };

            function f(e) {
                return e + i & -i
            }

            function p(e) {
                if ("aes" === e.algorithm && "cbc" === e.mode) {
                    if (128 === e.keyLength || 256 === e.keyLength) return;
                    throw new Error("Unsupported key length " + e.keyLength + " for aes-cbc encryption. Encryption key must be 128 or 256 bits (16 or 32 ASCII characters)")
                }
            }

            function d(e) {
                return e.replace("_", "/").replace("-", "+")
            }
            c.create([0, 0, 0, 0]);
            var g = [c.create([269488144, 269488144, 269488144, 269488144], 16), c.create([16777216], 1), c.create([33685504], 2), c.create([50529024], 3), c.create([67372036], 4), c.create([84215045, 83886080], 5), c.create([101058054, 101056512], 6), c.create([117901063, 117901056], 7), c.create([134744072, 134744072], 8), c.create([151587081, 151587081, 150994944], 9), c.create([168430090, 168430090, 168427520], 10), c.create([185273099, 185273099, 185273088], 11), c.create([202116108, 202116108, 202116108], 12), c.create([218959117, 218959117, 218959117, 218103808], 13), c.create([235802126, 235802126, 235802126, 235798528], 14), c.create([252645135, 252645135, 252645135, 252645135], 15), c.create([269488144, 269488144, 269488144, 269488144], 16)];

            function y() {}

            function m() {
                this.algorithm = null;
                this.keyLength = null;
                this.mode = null;
                this.key = null
            }
            y.CipherParams = m;
            y.getDefaultParams = function(e) {
                var n;
                if ("function" != typeof e && "string" != typeof e) {
                    if (!e.key) throw new Error("Crypto.getDefaultParams: a key is required");
                    n = "string" == typeof e.key ? a.enc.Base64.parse(d(e.key)) : v.toWordArray(e.key);
                    var i = new m;
                    i.key = n;
                    i.algorithm = e.algorithm || t;
                    i.keyLength = 32 * n.words.length;
                    i.mode = e.mode || r;
                    if (e.keyLength && e.keyLength !== i.keyLength) throw new Error("Crypto.getDefaultParams: a keyLength of " + e.keyLength + " was specified, but the key actually has length " + i.keyLength);
                    p(i);
                    return i
                }
                w.deprecated("Crypto.getDefaultParams(key, callback)", "Crypto.getDefaultParams({key: key})");
                if ("function" == typeof e) y.generateRandomKey(function(t) {
                    e(null, y.getDefaultParams({
                        key: t
                    }))
                });
                else {
                    if ("function" != typeof arguments[1]) throw new Error("Invalid arguments for Crypto.getDefaultParams");
                    arguments[1](null, y.getDefaultParams({
                        key: e
                    }))
                }
            };
            y.generateRandomKey = function(t, r) {
                if (1 == arguments.length && "function" == typeof t) {
                    r = t;
                    t = void 0
                }
                e((t || n) / 8, r)
            };
            y.getCipher = function(e) {
                var t = e instanceof m ? e : y.getDefaultParams(e);
                return {
                    cipherParams: t,
                    cipher: new _(t, o, e.iv)
                }
            };

            function _(e, t, n) {
                this.algorithm = e.algorithm + "-" + String(e.keyLength) + "-" + e.mode;
                this.cjsAlgorithm = e.algorithm.toUpperCase().replace(/-\d+$/, "");
                this.key = v.toWordArray(e.key);
                n && (this.iv = v.toWordArray(n).clone());
                this.blockLengthWords = t
            }
            _.prototype.encrypt = function(t, n) {
                w.logAction(w.LOG_MICRO, "CBCCipher.encrypt()", "");
                var r = (t = v.toWordArray(t)).sigBytes,
                    o = f(r),
                    s = this,
                    u = function() {
                        s.getIv(function(e, i) {
                            if (e) n(e);
                            else {
                                var a = s.encryptCipher.process(t.concat(g[o - r])),
                                    u = i.concat(a);
                                n(null, u)
                            }
                        })
                    };
                if (this.encryptCipher) u();
                else if (this.iv) {
                    this.encryptCipher = a.algo[this.cjsAlgorithm].createEncryptor(this.key, {
                        iv: this.iv
                    });
                    u()
                } else e(i, function(e, t) {
                    if (e) n(e);
                    else {
                        s.encryptCipher = a.algo[s.cjsAlgorithm].createEncryptor(s.key, {
                            iv: t
                        });
                        s.iv = t;
                        u()
                    }
                })
            };
            _.prototype.decrypt = function(e) {
                w.logAction(w.LOG_MICRO, "CBCCipher.decrypt()", "");
                e = v.toWordArray(e);
                var t = this.blockLengthWords,
                    n = e.words,
                    r = c.create(n.slice(0, t)),
                    i = c.create(n.slice(t)),
                    o = a.algo[this.cjsAlgorithm].createDecryptor(this.key, {
                        iv: r
                    }),
                    s = o.process(i),
                    u = o.finalize();
                o.reset();
                u && u.sigBytes && s.concat(u);
                return s
            };
            _.prototype.getIv = function(t) {
                if (this.iv) {
                    var n = this.iv;
                    this.iv = null;
                    t(null, n)
                } else {
                    var r = this;
                    e(i, function(e, n) {
                        e ? t(e) : t(null, r.encryptCipher.process(n))
                    })
                }
            };
            return y
        }(),
        d = function() {
            var e, t, n = "ablyjs-storage-test";
            try {
                s.sessionStorage.setItem(n, n);
                s.sessionStorage.removeItem(n);
                e = !0
            } catch (t) {
                e = !1
            }
            try {
                s.localStorage.setItem(n, n);
                s.localStorage.removeItem(n);
                t = !0
            } catch (e) {
                t = !1
            }

            function r() {}

            function i(e) {
                return e ? s.sessionStorage : s.localStorage
            }

            function o(e, t, n, r) {
                var o = {
                    value: t
                };
                n && (o.expires = y.now() + n);
                return i(r).setItem(e, JSON.stringify(o))
            }

            function a(e, t) {
                var n = i(t).getItem(e);
                if (!n) return null;
                var r = JSON.parse(n);
                if (r.expires && r.expires < y.now()) {
                    i(t).removeItem(e);
                    return null
                }
                return r.value
            }

            function u(e, t) {
                return i(t).removeItem(e)
            }
            if (t) {
                r.set = function(e, t, n) {
                    return o(e, t, n, !1)
                };
                r.get = function(e) {
                    return a(e, !1)
                };
                r.remove = function(e) {
                    return u(e, !1)
                }
            }
            if (e) {
                r.setSession = function(e, t, n) {
                    return o(e, t, n, !0)
                };
                r.getSession = function(e) {
                    return a(e, !0)
                };
                r.removeSession = function(e) {
                    return u(e, !0)
                }
            }
            return r
        }(),
        g = {
            internetUpUrl: "https://internet-up.ably-realtime.com/is-the-internet-up.txt",
            jsonpInternetUpUrl: "https://internet-up.ably-realtime.com/is-the-internet-up-0-9.js",
            defaultTransports: ["xhr_polling", "xhr_streaming", "jsonp", "web_socket"],
            baseTransportOrder: ["xhr_polling", "xhr_streaming", "jsonp", "web_socket"],
            transportPreferenceOrder: ["jsonp", "xhr_polling", "xhr_streaming", "web_socket"],
            upgradeTransports: ["xhr_streaming", "web_socket"]
        };
    h.noUpgrade && (g.upgradeTransports = []);
    var v = function() {
            var e = a.lib.WordArray,
                t = h.ArrayBuffer,
                n = h.atob,
                r = h.TextEncoder,
                i = h.TextDecoder,
                o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                s = "0123456789abcdef";

            function u(e) {
                return null !== e && void 0 !== e && void 0 !== e.sigBytes
            }

            function c(e) {
                return null !== e && void 0 !== e && e.constructor === t
            }

            function l(e) {
                return t && t.isView && t.isView(e)
            }

            function f(e) {
                for (var t, n, r, i, s = "", a = o, u = e.byteLength, c = u % 3, l = u - c, f = 0; f < l; f += 3) {
                    t = (258048 & (i = e[f] << 16 | e[f + 1] << 8 | e[f + 2])) >> 12;
                    n = (4032 & i) >> 6;
                    r = 63 & i;
                    s += a[(16515072 & i) >> 18] + a[t] + a[n] + a[r]
                }
                if (1 == c) {
                    t = (3 & (i = e[l])) << 4;
                    s += a[(252 & i) >> 2] + a[t] + "=="
                } else if (2 == c) {
                    t = (1008 & (i = e[l] << 8 | e[l + 1])) >> 4;
                    n = (15 & i) << 2;
                    s += a[(64512 & i) >> 10] + a[t] + a[n] + "="
                }
                return s
            }

            function p(e) {
                for (var t = n(e), r = t.length, i = new Uint8Array(r), o = 0; o < r; o++) {
                    var s = t.charCodeAt(o);
                    i[o] = s
                }
                return i.buffer
            }

            function d() {}
            d.base64CharSet = o;
            d.hexCharSet = s;
            var g = d.isBuffer = function(e) {
                    return c(e) || u(e) || l(e)
                },
                v = d.toBuffer = function(e) {
                    if (!t) throw new Error("Can't convert to Buffer: browser does not support the necessary types");
                    if (c(e)) return new Uint8Array(e);
                    if (l(e)) return new Uint8Array(e.buffer);
                    if (u(e)) {
                        for (var n = new t(e.sigBytes), r = new Uint8Array(n), i = 0; i < e.sigBytes; i++) r[i] = e.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                        return r
                    }
                    throw new Error("BufferUtils.toBuffer expected an arraybuffer, typed array, or CryptoJS wordarray")
                };
            d.toArrayBuffer = function(e) {
                return c(e) ? e : v(e).buffer
            };
            d.toWordArray = function(t) {
                l(t) && (t = t.buffer);
                return u(t) ? t : e.create(t)
            };
            d.base64Encode = function(e) {
                return u(e) ? a.enc.Base64.stringify(e) : f(v(e))
            };
            d.base64Decode = function(e) {
                return t && n ? p(e) : a.enc.Base64.parse(e)
            };
            d.hexEncode = function(e) {
                e = d.toWordArray(e);
                return a.enc.Hex.stringify(e)
            };
            d.hexDecode = function(e) {
                var n = a.enc.Hex.parse(e);
                return t ? d.toArrayBuffer(n) : n
            };
            d.utf8Encode = function(e) {
                return r ? (new r).encode(e).buffer : a.enc.Utf8.parse(e)
            };
            d.utf8Decode = function(e) {
                if (!g(e)) throw new Error("Expected input of utf8decode to be an arraybuffer, typed array, or CryptoJS wordarray");
                if (i && !u(e)) return (new i).decode(e);
                e = d.toWordArray(e);
                return a.enc.Utf8.stringify(e)
            };
            d.bufferCompare = function(e, t) {
                if (!e) return -1;
                if (!t) return 1;
                e = d.toWordArray(e);
                t = d.toWordArray(t);
                e.clamp();
                t.clamp();
                var n = e.sigBytes - t.sigBytes;
                if (0 != n) return n;
                e = e.words;
                t = t.words;
                for (var r = 0; r < e.length; r++)
                    if (0 != (n = e[r] - t[r])) return n;
                return 0
            };
            d.byteLength = function(e) {
                return c(e) || l(e) ? e.byteLength : u(e) ? e.sigBytes : void 0
            };
            return d
        }(),
        y = function() {
            var e = h.msgpack;

            function t() {}

            function n(e) {
                return Math.floor(Math.random() * e.length)
            }
            t.mixin = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    if (!n) break;
                    var r = n.hasOwnProperty;
                    for (var i in n) r && !r.call(n, i) || (e[i] = n[i])
                }
                return e
            };
            t.copy = function(e) {
                return t.mixin({}, e)
            };
            t.isArray = Array.isArray || function(e) {
                return "[object Array]" == Object.prototype.toString.call(e)
            };
            t.ensureArray = function(e) {
                return t.isEmptyArg(e) ? [] : t.isArray(e) ? e : [e]
            };
            t.isObject = function(e) {
                return "[object Object]" == Object.prototype.toString.call(e)
            };
            t.isEmpty = function(e) {
                for (var t in e) return !1;
                return !0
            };
            t.isOnlyPropIn = function(e, t) {
                for (var n in e)
                    if (n !== t) return !1;
                return !0
            };
            t.isEmptyArg = function(e) {
                return null === e || void 0 === e
            };
            t.shallowClone = function(e) {
                var t = new Object;
                for (var n in e) t[n] = e[n];
                return t
            };
            t.prototypicalClone = function(e, n) {
                function r() {}
                r.prototype = e;
                var i = new r;
                n && t.mixin(i, n);
                return i
            };
            t.inherits = h.inherits || function(e, n) {
                e.super_ = n;
                e.prototype = t.prototypicalClone(n.prototype, {
                    constructor: e
                })
            };
            t.containsValue = function(e, t) {
                for (var n in e)
                    if (e[n] == t) return !0;
                return !1
            };
            t.intersect = function(e, n) {
                return t.isArray(n) ? t.arrIntersect(e, n) : t.arrIntersectOb(e, n)
            };
            t.arrIntersect = function(e, n) {
                for (var r = [], i = 0; i < e.length; i++) {
                    var o = e[i]; - 1 != t.arrIndexOf(n, o) && r.push(o)
                }
                return r
            };
            t.arrIntersectOb = function(e, t) {
                for (var n = [], r = 0; r < e.length; r++) {
                    var i = e[r];
                    i in t && n.push(i)
                }
                return n
            };
            t.arrSubtract = function(e, n) {
                for (var r = [], i = 0; i < e.length; i++) {
                    var o = e[i]; - 1 == t.arrIndexOf(n, o) && r.push(o)
                }
                return r
            };
            t.arrIndexOf = Array.prototype.indexOf ? function(e, t, n) {
                return e.indexOf(t, n)
            } : function(e, t, n) {
                n = n || 0;
                for (var r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            };
            t.arrIn = function(e, n) {
                return -1 !== t.arrIndexOf(e, n)
            };
            t.arrDeleteValue = function(e, n) {
                var r = t.arrIndexOf(e, n),
                    i = -1 != r;
                i && e.splice(r, 1);
                return i
            };
            t.arrWithoutValue = function(e, n) {
                var r = e.slice();
                t.arrDeleteValue(r, n);
                return r
            };
            t.keysArray = function(e, t) {
                var n = [];
                for (var r in e) t && !e.hasOwnProperty(r) || n.push(r);
                return n
            };
            t.valuesArray = function(e, t) {
                var n = [];
                for (var r in e) t && !e.hasOwnProperty(r) || n.push(e[r]);
                return n
            };
            t.arrForEach = Array.prototype.forEach ? function(e, t) {
                e.forEach(t)
            } : function(e, t) {
                for (var n = e.length, r = 0; r < n; r++) t(e[r], r, e)
            };
            t.safeArrForEach = function(e, n) {
                return t.arrForEach(e.slice(), n)
            };
            t.arrMap = Array.prototype.map ? function(e, t) {
                return e.map(t)
            } : function(e, t) {
                for (var n = [], r = e.length, i = 0; i < r; i++) n.push(t(e[i], i, e));
                return n
            };
            t.arrFilter = Array.prototype.filter ? function(e, t) {
                return e.filter(t)
            } : function(e, t) {
                for (var n = [], r = e.length, i = 0; i < r; i++) t(e[i]) && n.push(e[i]);
                return n
            };
            t.arrEvery = Array.prototype.every ? function(e, t) {
                return e.every(t)
            } : function(e, t) {
                for (var n = e.length, r = 0; r < n; r++)
                    if (!t(e[r], r, e)) return !1;
                return !0
            };
            t.allSame = function(e, n) {
                if (0 === e.length) return !0;
                var r = e[0][n];
                return t.arrEvery(e, function(e) {
                    return e[n] === r
                })
            };
            t.nextTick = h.nextTick;
            var r = {
                json: "application/json",
                jsonp: "application/javascript",
                xml: "application/xml",
                html: "text/html",
                msgpack: "application/x-msgpack"
            };
            t.defaultGetHeaders = function(e) {
                return {
                    accept: r[e || "json"],
                    "X-Ably-Version": g.apiVersion,
                    "X-Ably-Lib": g.libstring
                }
            };
            t.defaultPostHeaders = function(e) {
                var t;
                return {
                    accept: t = r[e || "json"],
                    "content-type": t,
                    "X-Ably-Version": g.apiVersion,
                    "X-Ably-Lib": g.libstring
                }
            };
            t.arrPopRandomElement = function(e) {
                return e.splice(n(e), 1)[0]
            };
            t.toQueryString = function(e) {
                var t = [];
                if (e)
                    for (var n in e) t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
                return t.length ? "?" + t.join("&") : ""
            };
            t.parseQueryString = function(e) {
                for (var t, n = /([^?&=]+)=?([^&]*)/g, r = {}; t = n.exec(e);) r[decodeURIComponent(t[1])] = decodeURIComponent(t[2]);
                return r
            };
            t.now = Date.now || function() {
                return (new Date).getTime()
            };
            t.inspect = h.inspect;
            t.isErrorInfo = function(e) {
                return "ErrorInfo" == e.constructor.name
            };
            t.inspectError = function(e) {
                return e && (t.isErrorInfo(e) || "Error" == e.constructor.name || e instanceof Error) ? e.toString() : t.inspect(e)
            };
            t.inspectBody = function(e) {
                return v.isBuffer(e) ? e.toString() : "string" == typeof e ? e : h.inspect(e)
            };
            t.dataSizeBytes = function(e) {
                if (v.isBuffer(e)) return v.byteLength(e);
                if ("string" == typeof e) return h.stringByteSize(e);
                throw new Error("Expected input of Utils.dataSizeBytes to be a buffer or string, but was: " + typeof e)
            };
            t.cheapRandStr = function() {
                return String(Math.random()).substr(2)
            };
            t.randomString = h.getRandomValues && "undefined" != typeof Uint8Array ? function(e) {
                var t = new Uint8Array(e);
                h.getRandomValues(t);
                return v.base64Encode(t)
            } : function(e) {
                for (var t = v.base64CharSet, r = Math.round(4 * e / 3), i = "", o = 0; o < r; o++) i += t[n(t)];
                return i
            };
            t.randomHexString = h.getRandomValues && "undefined" != typeof Uint8Array ? function(e) {
                var t = new Uint8Array(e);
                h.getRandomValues(t);
                return v.hexEncode(t)
            } : function(e) {
                for (var t = v.hexCharSet, r = 2 * e, i = "", o = 0; o < r; o++) i += t[n(t)];
                return i
            };
            t.arrChooseN = function(e, n) {
                for (var r = Math.min(n, e.length), i = e.slice(), o = [], s = 0; s < r; s++) o.push(t.arrPopRandomElement(i));
                return o
            };
            t.trim = String.prototype.trim ? function(e) {
                return e.trim()
            } : function(e) {
                return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
            };
            t.promisify = function(e, t, n) {
                return new Promise(function(r, i) {
                    e[t].apply(e, Array.prototype.slice.call(n).concat(function(e, t) {
                        e ? i(e) : r(t)
                    }))
                })
            };
            t.decodeBody = function(t, n) {
                return "msgpack" == n ? e.decode(t) : JSON.parse(String(t))
            };
            t.encodeBody = function(t, n) {
                return "msgpack" == n ? e.encode(t, !0) : JSON.stringify(t)
            };
            return t
        }(),
        m = function() {
            var e = function() {};

            function t() {}
            var n = Date.now || function() {
                return (new Date).getTime()
            };

            function r(e) {
                var t = e.statusCode;
                return 408 === t && !e.code || 400 === t && !e.code || t >= 500 && t <= 504
            }

            function i(e) {
                var t = e.connection,
                    n = t && t.connectionManager.host;
                return n ? [n].concat(g.getFallbackHosts(e.options)) : g.getHosts(e.options)
            }
            t._getHosts = i;
            t.methods = ["get", "delete", "post", "put", "patch"];
            t.methodsWithoutBody = ["get", "delete"];
            t.methodsWithBody = y.arrSubtract(t.methods, t.methodsWithoutBody);
            y.arrForEach(t.methodsWithoutBody, function(e) {
                t[e] = function(n, r, i, o, s) {
                    t.do(e, n, r, i, null, o, s)
                };
                t[e + "Uri"] = function(n, r, i, o, s) {
                    t.doUri(e, n, r, i, null, o, s)
                }
            });
            y.arrForEach(t.methodsWithBody, function(e) {
                t[e] = function(n, r, i, o, s, a) {
                    t.do(e, n, r, i, o, s, a)
                };
                t[e + "Uri"] = function(n, r, i, o, s, a) {
                    t.doUri(e, n, r, i, o, s, a)
                }
            });
            t.do = function(o, s, a, u, c, l, f) {
                f = f || e;
                var h = "function" == typeof a ? a : function(e) {
                        return s.baseUri(e) + a
                    },
                    p = (u && u.accept, arguments),
                    d = s._currentFallback;
                if (d) {
                    if (d.validUntil > n()) {
                        t.Request(o, s, h(d.host), u, l, c, function(e) {
                            if (e && r(e)) {
                                s._currentFallback = null;
                                t.do.apply(t, p)
                            } else f.apply(null, arguments)
                        });
                        return
                    }
                    s._currentFallback = null
                }
                var g = i(s);
                if (1 != g.length) {
                    var v = function(e, i) {
                        var a = e.shift();
                        t.doUri(o, s, h(a), u, c, l, function(t) {
                            if (t && r(t) && e.length) v(e, !0);
                            else {
                                i && (s._currentFallback = {
                                    host: a,
                                    validUntil: n() + s.options.timeouts.fallbackRetryTimeout
                                });
                                f.apply(null, arguments)
                            }
                        })
                    };
                    v(g)
                } else t.doUri(o, s, h(g[0]), u, c, l, f)
            };
            t.doUri = function(e, n, r, i, o, s, a) {
                t.Request(e, n, r, i, s, o, a)
            };
            t.supportsAuthHeaders = !1;
            t.supportsLinkHeaders = !1;
            return t
        }(),
        _ = function() {
            function e() {
                this.buffer = []
            }
            e.prototype.append = function(e) {
                this.buffer.push(e);
                return this
            };
            e.prototype.toString = function() {
                return this.buffer.join("")
            };
            var t = {
                codex: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                encode: function(r) {
                    for (var i = new e, o = t.codex, s = new n(r); s.moveNext();) {
                        var a = s.current;
                        s.moveNext();
                        var u = s.current;
                        s.moveNext();
                        var c = s.current,
                            l = a >> 2,
                            f = (3 & a) << 4 | u >> 4,
                            h = (15 & u) << 2 | c >> 6,
                            p = 63 & c;
                        isNaN(u) ? h = p = 64 : isNaN(c) && (p = 64);
                        i.append(o.charAt(l) + o.charAt(f) + o.charAt(h) + o.charAt(p))
                    }
                    return i.toString()
                },
                decode: function(t) {
                    for (var n = new e, i = new r(t); i.moveNext();) {
                        var o = i.current;
                        if (o < 128) n.append(String.fromCharCode(o));
                        else if (o > 191 && o < 224) {
                            i.moveNext();
                            var s = i.current;
                            n.append(String.fromCharCode((31 & o) << 6 | 63 & s))
                        } else {
                            i.moveNext();
                            s = i.current;
                            i.moveNext();
                            var a = i.current;
                            n.append(String.fromCharCode((15 & o) << 12 | (63 & s) << 6 | 63 & a))
                        }
                    }
                    return n.toString()
                }
            };

            function n(e) {
                this._input = e;
                this._index = -1;
                this._buffer = []
            }
            n.prototype = {
                current: Number.NaN,
                moveNext: function() {
                    if (this._buffer.length > 0) {
                        this.current = this._buffer.shift();
                        return !0
                    }
                    if (this._index >= this._input.length - 1) {
                        this.current = Number.NaN;
                        return !1
                    }
                    var e = this._input.charCodeAt(++this._index);
                    if (13 == e && 10 == this._input.charCodeAt(this._index + 1)) {
                        e = 10;
                        this._index += 2
                    }
                    if (e < 128) this.current = e;
                    else if (e > 127 && e < 2048) {
                        this.current = e >> 6 | 192;
                        this._buffer.push(63 & e | 128)
                    } else {
                        this.current = e >> 12 | 224;
                        this._buffer.push(e >> 6 & 63 | 128);
                        this._buffer.push(63 & e | 128)
                    }
                    return !0
                }
            };

            function r(e) {
                this._input = e;
                this._index = -1;
                this._buffer = []
            }
            r.prototype = {
                current: 64,
                moveNext: function() {
                    if (this._buffer.length > 0) {
                        this.current = this._buffer.shift();
                        return !0
                    }
                    if (this._index >= this._input.length - 1) {
                        this.current = 64;
                        return !1
                    }
                    var e = t.codex.indexOf(this._input.charAt(++this._index)),
                        n = t.codex.indexOf(this._input.charAt(++this._index)),
                        r = t.codex.indexOf(this._input.charAt(++this._index)),
                        i = t.codex.indexOf(this._input.charAt(++this._index)),
                        o = e << 2 | n >> 4,
                        s = (15 & n) << 4 | r >> 2,
                        a = (3 & r) << 6 | i;
                    this.current = o;
                    64 != r && this._buffer.push(s);
                    64 != i && this._buffer.push(a);
                    return !0
                }
            };
            return t
        }();
    g.ENVIRONMENT = "";
    g.REST_HOST = "rest.ably.io";
    g.REALTIME_HOST = "realtime.ably.io";
    g.FALLBACK_HOSTS = ["A.ably-realtime.com", "B.ably-realtime.com", "C.ably-realtime.com", "D.ably-realtime.com", "E.ably-realtime.com"];
    g.PORT = 80;
    g.TLS_PORT = 443;
    g.TIMEOUTS = {
        disconnectedRetryTimeout: 15e3,
        suspendedRetryTimeout: 3e4,
        httpRequestTimeout: 15e3,
        channelRetryTimeout: 15e3,
        fallbackRetryTimeout: 6e5,
        connectionStateTtl: 12e4,
        realtimeRequestTimeout: 1e4,
        recvTimeout: 9e4,
        preferenceConnectTimeout: 6e3,
        parallelUpgradeDelay: 6e3
    };
    g.httpMaxRetryCount = 3;
    g.maxMessageSize = 65536;
    g.errorReportingUrl = "https://errors.ably.io/api/15/store/";
    g.errorReportingHeaders = {
        "X-Sentry-Auth": "Sentry sentry_version=7, sentry_key=a04e33c8674c451f8a310fbec029acf5, sentry_client=ably-js/0.1",
        "Content-Type": "application/json"
    };
    g.version = "1.1.23";
    g.libstring = h.libver + "-" + g.version;
    g.apiVersion = "1.1";
    g.getHost = function(e, t, n) {
        return t = n ? t == e.restHost && e.realtimeHost || t || e.realtimeHost : t || e.restHost
    };
    g.getPort = function(e, t) {
        return t || e.tls ? e.tlsPort : e.port
    };
    g.getHttpScheme = function(e) {
        return e.tls ? "https://" : "http://"
    };
    g.getFallbackHosts = function(e) {
        var t = e.fallbackHosts,
            n = void 0 !== e.httpMaxRetryCount ? e.httpMaxRetryCount : g.httpMaxRetryCount;
        return t ? y.arrChooseN(t, n) : []
    };
    g.getHosts = function(e) {
        return [e.restHost].concat(g.getFallbackHosts(e))
    };

    function b(e) {
        if ("string" != typeof e) throw new E("host must be a string; was a " + typeof e, 4e4, 400);
        if (!e.length) throw new E("host must not be zero-length", 4e4, 400)
    }
    g.objectifyOptions = function(e) {
        return "string" == typeof e ? -1 == e.indexOf(":") ? {
            token: e
        } : {
            key: e
        } : e
    };
    g.normaliseOptions = function(e) {
        if (e.host) {
            w.deprecated("host", "restHost");
            e.restHost = e.host
        }
        if (e.wsHost) {
            w.deprecated("wsHost", "realtimeHost");
            e.realtimeHost = e.wsHost
        }
        if (e.queueEvents) {
            w.deprecated("queueEvents", "queueMessages");
            e.queueMessages = e.queueEvents
        }
        if (!0 === e.recover) {
            w.deprecated("{recover: true}", "{recover: function(lastConnectionDetails, cb) { cb(true); }}");
            e.recover = function(e, t) {
                t(!0)
            }
        }
        if ("function" == typeof e.recover && !0 === e.closeOnUnload) {
            w.logAction(w.LOG_ERROR, "Defaults.normaliseOptions", "closeOnUnload was true and a session recovery function was set - these are mutually exclusive, so unsetting the latter");
            e.recover = null
        }
        "closeOnUnload" in e || (e.closeOnUnload = !e.recover);
        if (e.transports && y.arrIn(e.transports, "xhr")) {
            w.deprecated('transports: ["xhr"]', 'transports: ["xhr_streaming"]');
            y.arrDeleteValue(e.transports, "xhr");
            e.transports.push("xhr_streaming")
        }
        "queueMessages" in e || (e.queueMessages = !0);
        var t = !1;
        if (e.restHost) e.realtimeHost = e.realtimeHost || e.restHost;
        else {
            var n = e.environment && String(e.environment).toLowerCase() || g.ENVIRONMENT;
            t = !n || "production" === n;
            e.restHost = t ? g.REST_HOST : n + "-" + g.REST_HOST;
            e.realtimeHost = t ? g.REALTIME_HOST : n + "-" + g.REALTIME_HOST
        }
        e.fallbackHosts = t || e.fallbackHostsUseDefault ? g.FALLBACK_HOSTS : e.fallbackHosts;
        y.arrForEach((e.fallbackHosts || []).concat(e.restHost, e.realtimeHost), b);
        e.port = e.port || g.PORT;
        e.tlsPort = e.tlsPort || g.TLS_PORT;
        e.maxMessageSize = e.maxMessageSize || g.maxMessageSize;
        "tls" in e || (e.tls = !0);
        e.timeouts = {};
        for (var r in g.TIMEOUTS) e.timeouts[r] = e[r] || g.TIMEOUTS[r];
        e.useBinaryProtocol = "useBinaryProtocol" in e ? h.supportsBinary && e.useBinaryProtocol : h.preferBinary;
        if (e.clientId) {
            (e.headers = e.headers || {})["X-Ably-ClientId"] = v.base64Encode(v.utf8Encode(e.clientId))
        }
        "idempotentRestPublishing" in e || (e.idempotentRestPublishing = !1);
        if (e.promises && !h.Promise) {
            w.logAction(w.LOG_ERROR, "Defaults.normaliseOptions", "{promises: true} was specified, but no Promise constructor found; disabling promises");
            e.promises = !1
        }
        return e
    };
    var O = function() {
            function e() {
                this.any = [];
                this.events = {};
                this.anyOnce = [];
                this.eventsOnce = {}
            }

            function t(e, t, n) {
                try {
                    t.apply(e, n)
                } catch (e) {
                    w.logAction(w.LOG_ERROR, "EventEmitter.emit()", "Unexpected listener exception: " + e + "; stack = " + (e && e.stack))
                }
            }

            function n(e, t, r) {
                var i, o, s, a;
                for (a = 0; a < e.length; a++) {
                    i = e[a];
                    r && (i = i[r]);
                    if (y.isArray(i)) {
                        for (; - 1 !== (o = y.arrIndexOf(i, t));) i.splice(o, 1);
                        r && 0 === i.length && delete e[a][r]
                    } else if (y.isObject(i))
                        for (s in i) i.hasOwnProperty(s) && y.isArray(i[s]) && n([i], t, s)
                }
            }
            e.prototype.on = function(e, t) {
                if (1 == arguments.length && "function" == typeof e) this.any.push(e);
                else if (y.isEmptyArg(e)) this.any.push(t);
                else if (y.isArray(e)) {
                    var n = this;
                    y.arrForEach(e, function(e) {
                        n.on(e, t)
                    })
                } else {
                    (this.events[e] || (this.events[e] = [])).push(t)
                }
            };
            e.prototype.off = function(e, t) {
                if (0 == arguments.length || y.isEmptyArg(e) && y.isEmptyArg(t)) {
                    this.any = [];
                    this.events = {};
                    this.anyOnce = [];
                    this.eventsOnce = {}
                } else {
                    if (1 == arguments.length && "function" == typeof e) {
                        t = e;
                        e = null
                    }
                    if (t && y.isEmptyArg(e)) n([this.any, this.events, this.anyOnce, this.eventsOnce], t);
                    else {
                        if (y.isArray(e)) {
                            var r = this;
                            y.arrForEach(e, function(e) {
                                r.off(e, t)
                            })
                        }
                        if (t) n([this.events, this.eventsOnce], t, e);
                        else {
                            delete this.events[e];
                            delete this.eventsOnce[e]
                        }
                    }
                }
            };
            e.prototype.listeners = function(e) {
                if (e) {
                    var t = this.events[e] || [];
                    this.eventsOnce[e] && Array.prototype.push.apply(t, this.eventsOnce[e]);
                    return t.length ? t : null
                }
                return this.any.length ? this.any : null
            };
            e.prototype.emit = function(e) {
                var n = Array.prototype.slice.call(arguments, 1),
                    r = {
                        event: e
                    },
                    i = [];
                if (this.anyOnce.length) {
                    Array.prototype.push.apply(i, this.anyOnce);
                    this.anyOnce = []
                }
                this.any.length && Array.prototype.push.apply(i, this.any);
                var o = this.eventsOnce[e];
                if (o) {
                    Array.prototype.push.apply(i, o);
                    delete this.eventsOnce[e]
                }
                var s = this.events[e];
                s && Array.prototype.push.apply(i, s);
                y.arrForEach(i, function(e) {
                    t(r, e, n)
                })
            };
            e.prototype.once = function(e, t) {
                var n = arguments.length,
                    r = this;
                if ((0 === n || 1 === n && "function" != typeof e) && h.Promise) return new h.Promise(function(t) {
                    r.once(e, t)
                });
                if (1 == arguments.length && "function" == typeof e) this.anyOnce.push(e);
                else if (y.isEmptyArg(e)) this.anyOnce.push(t);
                else {
                    if (y.isArray(e)) throw "Arrays of events can only be used with on(), not once()";
                    (this.eventsOnce[e] || (this.eventsOnce[e] = [])).push(t)
                }
            };
            e.prototype.whenState = function(e, n, r) {
                var i = {
                        event: e
                    },
                    o = this,
                    s = Array.prototype.slice.call(arguments, 3);
                if ("string" != typeof e || "string" != typeof n) throw "whenState requires a valid event String argument";
                if ("function" != typeof r && h.Promise) return new h.Promise(function(t) {
                    o.whenState.bind(o, e, n, t).apply(o, s)
                });
                e === n ? t(i, r, s) : this.once(e, r)
            };
            return e
        }(),
        w = function() {
            var e, t;
            if ("undefined" == typeof Window && "undefined" == typeof WorkerGlobalScope || s.console && s.console.log && "function" == typeof s.console.log.apply) {
                e = function() {
                    console.log.apply(console, arguments)
                };
                t = console.warn ? function() {
                    console.warn.apply(console, arguments)
                } : e
            } else e = t = s.console && s.console.log ? function() {
                Function.prototype.apply.call(console.log, console, arguments)
            } : function() {};

            function n(e, t) {
                return ("000" + e).slice(-2 - (t || 0))
            }
            var r = 0,
                i = 1,
                o = 2,
                a = 3,
                u = 4,
                c = i,
                l = u,
                f = c;

            function p(e) {
                return h.logTimestamps ? function(t) {
                    var r = new Date;
                    e(n(r.getHours()) + ":" + n(r.getMinutes()) + ":" + n(r.getSeconds()) + "." + n(r.getMilliseconds(), !0) + " " + t)
                } : e
            }
            var d = p(e),
                g = p(t);

            function v(e) {}
            v.LOG_NONE = r, v.LOG_ERROR = i, v.LOG_MAJOR = o, v.LOG_MINOR = a, v.LOG_MICRO = u;
            v.LOG_DEFAULT = c, v.LOG_DEBUG = l;
            v.logAction = function(e, t, n) {
                v.shouldLog(e) && (e === i ? g : d)("Ably: " + t + ": " + n)
            };
            v.deprecated = function(e, t) {
                v.shouldLog(i) && g("Ably: Deprecation warning - '" + e + "' is deprecated and will be removed from a future version. Please use '" + t + "' instead.")
            };
            v.shouldLog = function(e) {
                return e <= f
            };
            v.setLog = function(e, t) {
                void 0 !== e && (f = e);
                void 0 !== t && (d = g = t)
            };
            return v
        }(),
        S = function() {
            function e(e) {
                e = e || [];
                var t = function() {
                    for (var t = 0; t < e.length; t++) {
                        var n = e[t];
                        if (n) try {
                            n.apply(null, arguments)
                        } catch (e) {
                            w.logAction(w.LOG_ERROR, "Multicaster multiple callback handler", "Unexpected exception: " + e + "; stack = " + e.stack)
                        }
                    }
                };
                t.push = function() {
                    Array.prototype.push.apply(e, arguments)
                };
                return t
            }
            return e
        }(),
        I = function() {
            function e() {}
            e.levels = ["fatal", "error", "warning", "info", "debug"];
            e.report = function(e, t, n, r) {
                var i = {
                    event_id: y.randomHexString(16),
                    tags: y.mixin({
                        lib: h.libver
                    }, r),
                    platform: "javascript",
                    level: e,
                    release: g.version,
                    fingerprint: n && [n],
                    message: t,
                    request: {
                        headers: {
                            "User-Agent": h.userAgent
                        },
                        url: h.currentUrl
                    }
                };
                w.logAction(w.LOG_MICRO, "ErrorReporter", "POSTing to error reporter: " + t);
                m.postUri(null, g.errorReportingUrl, g.errorReportingHeaders, JSON.stringify(i), {}, function(e, t) {
                    w.logAction(w.LOG_MICRO, "ErrorReporter", "POSTing to error reporter resulted in: " + (e ? y.inspectError(e) : y.inspectBody(t)))
                })
            };
            return e
        }(),
        E = function() {
            function e(e, t, n, r) {
                this.message = e;
                this.code = t;
                this.statusCode = n;
                this.cause = r;
                this.href = void 0
            }
            e.prototype.toString = function() {
                var e = "[" + this.constructor.name;
                this.message && (e += ": " + this.message);
                this.statusCode && (e += "; statusCode=" + this.statusCode);
                this.code && (e += "; code=" + this.code);
                this.cause && (e += "; cause=" + y.inspectError(this.cause));
                !this.href || this.message && this.message.indexOf("help.ably.io") > -1 || (e += "; see " + this.href + " ");
                return e += "]"
            };
            e.fromValues = function(t) {
                var n = y.mixin(new e, t);
                t instanceof Error && (n.message = t.message);
                n.code && !n.href && (n.href = "https://help.ably.io/error/" + n.code);
                return n
            };
            return e
        }(),
        A = function() {
            function e() {
                this.name = void 0;
                this.id = void 0;
                this.timestamp = void 0;
                this.clientId = void 0;
                this.connectionId = void 0;
                this.connectionKey = void 0;
                this.data = void 0;
                this.encoding = void 0;
                this.extras = void 0;
                this.size = void 0
            }
            e.prototype.toJSON = function() {
                var e = {
                        name: this.name,
                        id: this.id,
                        clientId: this.clientId,
                        connectionId: this.connectionId,
                        connectionKey: this.connectionKey,
                        encoding: this.encoding,
                        extras: this.extras
                    },
                    t = this.data;
                if (t && v.isBuffer(t))
                    if (arguments.length > 0) {
                        var n = this.encoding;
                        e.encoding = n ? n + "/base64" : "base64";
                        t = v.base64Encode(t)
                    } else t = v.toBuffer(t);
                e.data = t;
                return e
            };
            e.prototype.toString = function() {
                var e = "[Message";
                this.name && (e += "; name=" + this.name);
                this.id && (e += "; id=" + this.id);
                this.timestamp && (e += "; timestamp=" + this.timestamp);
                this.clientId && (e += "; clientId=" + this.clientId);
                this.connectionId && (e += "; connectionId=" + this.connectionId);
                this.encoding && (e += "; encoding=" + this.encoding);
                this.extras && (e += "; extras =" + JSON.stringify(this.extras));
                this.data && ("string" == typeof this.data ? e += "; data=" + this.data : v.isBuffer(this.data) ? e += "; data (buffer)=" + v.base64Encode(this.data) : e += "; data (json)=" + JSON.stringify(this.data));
                this.extras && (e += "; extras=" + JSON.stringify(this.extras));
                return e += "]"
            };
            e.encrypt = function(e, t, n) {
                var r = e.data,
                    i = e.encoding,
                    o = t.channelCipher;
                i = i ? i + "/" : "";
                if (!v.isBuffer(r)) {
                    r = v.utf8Encode(String(r));
                    i += "utf-8/"
                }
                o.encrypt(r, function(t, r) {
                    if (t) n(t);
                    else {
                        e.data = r;
                        e.encoding = i + "cipher+" + o.algorithm;
                        n(null, e)
                    }
                })
            };
            e.encode = function(t, n, r) {
                var i, o = t.data;
                if (!("string" == typeof o || v.isBuffer(o) || null === o || void 0 === o)) {
                    if (!y.isObject(o) && !y.isArray(o)) throw new E("Data type is unsupported", 40013, 400);
                    t.data = JSON.stringify(o);
                    t.encoding = (i = t.encoding) ? i + "/json" : "json"
                }
                null != n && n.cipher ? e.encrypt(t, n, r) : r(null, t)
            };
            e.encodeArray = function(t, n, r) {
                for (var i = 0, o = 0; o < t.length; o++) e.encode(t[o], n, function(e, n) {
                    e ? r(e) : ++i == t.length && r(null, t)
                })
            };
            e.serialize = y.encodeBody;
            e.decode = function(e, t) {
                var n = e.encoding;
                if (n) {
                    var r, i = n.split("/"),
                        o = i.length,
                        s = e.data;
                    try {
                        for (;
                            (r = o) > 0;) {
                            var a = i[--o].match(/([\-\w]+)(\+([\w\-]+))?/);
                            if (!a) break;
                            var u = a[1];
                            switch (u) {
                                case "base64":
                                    s = v.base64Decode(String(s));
                                    continue;
                                case "utf-8":
                                    s = v.utf8Decode(s);
                                    continue;
                                case "json":
                                    s = JSON.parse(s);
                                    continue;
                                case "cipher":
                                    if (null != t && t.cipher) {
                                        var c = a[3],
                                            l = t.channelCipher;
                                        if (c != l.algorithm) throw new Error("Unable to decrypt message with given cipher; incompatible cipher params");
                                        s = l.decrypt(s);
                                        continue
                                    }
                                    throw new Error("Unable to decrypt message; not an encrypted channel");
                                default:
                                    throw new Error("Unknown encoding")
                            }
                            break
                        }
                    } catch (e) {
                        throw new E("Error processing the " + u + " encoding, decoder returned ‘" + e.message + "’", 40013, 400)
                    } finally {
                        e.encoding = r <= 0 ? null : i.slice(0, r).join("/");
                        e.data = s
                    }
                }
            };
            e.fromResponseBody = function(t, n, r) {
                r && (t = y.decodeBody(t, r));
                for (var i = 0; i < t.length; i++) {
                    var o = t[i] = e.fromValues(t[i]);
                    try {
                        e.decode(o, n)
                    } catch (e) {
                        w.logAction(w.LOG_ERROR, "Message.fromResponseBody()", e.toString())
                    }
                }
                return t
            };
            e.fromValues = function(t) {
                return y.mixin(new e, t)
            };
            e.fromValuesArray = function(t) {
                for (var n = t.length, r = new Array(n), i = 0; i < n; i++) r[i] = e.fromValues(t[i]);
                return r
            };

            function t(e) {
                if (e && e.cipher && !e.cipher.channelCipher) {
                    if (!p) throw new Error("Encryption not enabled; use ably.encryption.js instead");
                    var t = p.getCipher(e.cipher);
                    e.cipher = t.cipherParams;
                    e.channelCipher = t.cipher
                }
            }
            e.fromEncoded = function(n, r) {
                var i = e.fromValues(n);
                t(r);
                try {
                    e.decode(i, r)
                } catch (e) {
                    w.logAction(w.LOG_ERROR, "Message.fromEncoded()", e.toString())
                }
                return i
            };
            e.fromEncodedArray = function(n, r) {
                t(r);
                return y.arrMap(n, function(t) {
                    return e.fromEncoded(t, r)
                })
            };

            function n(e) {
                var t = 0;
                e.name && (t += e.name.length);
                e.clientId && (t += e.clientId.length);
                e.extras && (t += JSON.stringify(e.extras).length);
                e.data && (t += y.dataSizeBytes(e.data));
                return t
            }
            e.getMessagesSize = function(e) {
                for (var t, r = 0, i = 0; i < e.length; i++) r += (t = e[i]).size || (t.size = n(t));
                return r
            };
            return e
        }(),
        k = function() {
            h.msgpack;

            function e(e) {
                return y.arrIndexOf(t.Actions, e)
            }

            function t() {
                this.action = void 0;
                this.id = void 0;
                this.timestamp = void 0;
                this.clientId = void 0;
                this.connectionId = void 0;
                this.data = void 0;
                this.encoding = void 0;
                this.size = void 0
            }
            t.Actions = ["absent", "present", "enter", "leave", "update"];
            t.prototype.isSynthesized = function() {
                return this.id.substring(this.connectionId.length, 0) !== this.connectionId
            };
            t.prototype.parseId = function() {
                var e = this.id.split(":");
                return {
                    connectionId: e[0],
                    msgSerial: parseInt(e[1], 10),
                    index: parseInt(e[2], 10)
                }
            };
            t.prototype.toJSON = function() {
                var t = {
                        clientId: this.clientId,
                        action: e(this.action),
                        encoding: this.encoding
                    },
                    n = this.data;
                if (n && v.isBuffer(n))
                    if (arguments.length > 0) {
                        var r = this.encoding;
                        t.encoding = r ? r + "/base64" : "base64";
                        n = v.base64Encode(n)
                    } else n = v.toBuffer(n);
                t.data = n;
                return t
            };
            t.prototype.toString = function() {
                var e = "[PresenceMessage";
                e += "; action=" + this.action;
                this.id && (e += "; id=" + this.id);
                this.timestamp && (e += "; timestamp=" + this.timestamp);
                this.clientId && (e += "; clientId=" + this.clientId);
                this.connectionId && (e += "; connectionId=" + this.connectionId);
                this.encoding && (e += "; encoding=" + this.encoding);
                this.data && ("string" == typeof this.data ? e += "; data=" + this.data : v.isBuffer(this.data) ? e += "; data (buffer)=" + v.base64Encode(this.data) : e += "; data (json)=" + JSON.stringify(this.data));
                return e += "]"
            };
            t.encode = A.encode;
            t.decode = A.decode;
            t.fromResponseBody = function(e, n, r) {
                r && (e = y.decodeBody(e, r));
                for (var i = 0; i < e.length; i++) {
                    var o = e[i] = t.fromValues(e[i], !0);
                    try {
                        t.decode(o, n)
                    } catch (e) {
                        w.logAction(w.LOG_ERROR, "PresenceMessage.fromResponseBody()", e.toString())
                    }
                }
                return e
            };
            t.fromValues = function(e, n) {
                n && (e.action = t.Actions[e.action]);
                return y.mixin(new t, e)
            };
            t.fromValuesArray = function(e) {
                for (var n = e.length, r = new Array(n), i = 0; i < n; i++) r[i] = t.fromValues(e[i]);
                return r
            };
            t.fromEncoded = function(e, n) {
                var r = t.fromValues(e, !0);
                try {
                    t.decode(r, n)
                } catch (e) {
                    w.logAction(w.LOG_ERROR, "PresenceMessage.fromEncoded()", e.toString())
                }
                return r
            };
            t.fromEncodedArray = function(e, n) {
                return y.arrMap(e, function(e) {
                    return t.fromEncoded(e, n)
                })
            };
            t.getMessagesSize = A.getMessagesSize;
            return t
        }(),
        T = function() {
            function e() {
                this.action = void 0;
                this.flags = void 0;
                this.id = void 0;
                this.timestamp = void 0;
                this.count = void 0;
                this.error = void 0;
                this.connectionId = void 0;
                this.connectionKey = void 0;
                this.connectionSerial = void 0;
                this.channel = void 0;
                this.channelSerial = void 0;
                this.msgSerial = void 0;
                this.messages = void 0;
                this.presence = void 0;
                this.auth = void 0
            }
            var t = e.Action = {
                HEARTBEAT: 0,
                ACK: 1,
                NACK: 2,
                CONNECT: 3,
                CONNECTED: 4,
                DISCONNECT: 5,
                DISCONNECTED: 6,
                CLOSE: 7,
                CLOSED: 8,
                ERROR: 9,
                ATTACH: 10,
                ATTACHED: 11,
                DETACH: 12,
                DETACHED: 13,
                PRESENCE: 14,
                MESSAGE: 15,
                SYNC: 16,
                AUTH: 17
            };
            e.ActionName = [];
            y.arrForEach(y.keysArray(e.Action, !0), function(n) {
                e.ActionName[t[n]] = n
            });
            var n = {
                    HAS_PRESENCE: 1,
                    HAS_BACKLOG: 2,
                    RESUMED: 4,
                    TRANSIENT: 16,
                    PRESENCE: 65536,
                    PUBLISH: 1 << 17,
                    SUBSCRIBE: 1 << 18,
                    PRESENCE_SUBSCRIBE: 1 << 19
                },
                r = y.keysArray(n);
            n.MODE_ALL = n.PRESENCE | n.PUBLISH | n.SUBSCRIBE | n.PRESENCE_SUBSCRIBE;
            e.prototype.hasFlag = function(e) {
                return (this.flags & n[e]) > 0
            };
            e.prototype.setFlag = function(e) {
                return this.flags = this.flags | n[e]
            };
            e.prototype.getMode = function() {
                return this.flags && this.flags & n.MODE_ALL
            };
            e.serialize = y.encodeBody;
            e.deserialize = function(t, n) {
                var r = y.decodeBody(t, n);
                return e.fromDeserialized(r)
            };
            e.fromDeserialized = function(t) {
                var n = t.error;
                n && (t.error = E.fromValues(n));
                var r = t.messages;
                if (r)
                    for (var i = 0; i < r.length; i++) r[i] = A.fromValues(r[i]);
                var o = t.presence;
                if (o)
                    for (i = 0; i < o.length; i++) o[i] = k.fromValues(o[i], !0);
                return y.mixin(new e, t)
            };
            e.fromValues = function(t) {
                return y.mixin(new e, t)
            };

            function i(e) {
                var t = [];
                if (e)
                    for (var n = 0; n < e.length; n++) t.push(e[n].toString());
                return "[ " + t.join(", ") + " ]"
            }
            var o = "id channel channelSerial connectionId connectionKey connectionSerial count msgSerial timestamp".split(" ");
            e.stringify = function(t) {
                var n, s = "[ProtocolMessage";
                void 0 !== t.action && (s += "; action=" + e.ActionName[t.action] || t.action);
                for (var a = 0; a < o.length; a++) {
                    n = o[a];
                    void 0 !== t[n] && (s += "; " + n + "=" + t[n])
                }
                t.messages && (s += "; messages=" + i(A.fromValuesArray(t.messages)));
                t.presence && (s += "; presence=" + i(k.fromValuesArray(t.presence)));
                t.error && (s += "; error=" + E.fromValues(t.error).toString());
                t.auth && t.auth.accessToken && (s += "; token=" + t.auth.accessToken);
                t.flags && (s += "; flags=" + y.arrFilter(r, function(e) {
                    return t.hasFlag(e)
                }).join(","));
                return s += "]"
            };
            e.isDuplicate = function(e, n) {
                return e && n && (e.action === t.MESSAGE || e.action === t.PRESENCE) && e.action === n.action && e.channel === n.channel && e.id === n.id
            };
            return e
        }(),
        R = function() {
            function e(e) {
                this.count = e && e.count || 0;
                this.data = e && e.data || 0;
                this.uncompressedData = e && e.uncompressedData || 0;
                this.failed = e && e.failed || 0;
                this.refused = e && e.refused || 0
            }

            function t(t) {
                e.call(this, t);
                this.category = void 0;
                if (t && t.category) {
                    this.category = {};
                    for (var n in t.category) {
                        var r = t.category[n];
                        Object.prototype.hasOwnProperty.call(t.category, n) && r && (this.category[n] = new e(r))
                    }
                }
            }

            function n(e) {
                this.peak = e && e.peak || 0;
                this.min = e && e.min || 0;
                this.mean = e && e.mean || 0;
                this.opened = e && e.opened || 0;
                this.refused = e && e.refused || 0
            }

            function r(e) {
                this.succeeded = e && e.succeeded || 0;
                this.failed = e && e.failed || 0;
                this.refused = e && e.refused || 0
            }

            function i(e) {
                this.plain = new n(e && e.plain);
                this.tls = new n(e && e.tls);
                this.all = new n(e && e.all)
            }

            function o(e) {
                this.messages = new t(e && e.messages);
                this.presence = new t(e && e.presence);
                this.all = new t(e && e.all)
            }

            function s(e) {
                this.realtime = new o(e && e.realtime);
                this.rest = new o(e && e.rest);
                this.webhook = new o(e && e.webhook);
                this.sharedQueue = new o(e && e.sharedQueue);
                this.externalQueue = new o(e && e.externalQueue);
                this.httpEvent = new o(e && e.httpEvent);
                this.push = new o(e && e.push);
                this.all = new o(e && e.all)
            }

            function a(e) {
                this.all = new o(e && e.all);
                this.inbound = new s(e && e.inbound);
                this.outbound = new s(e && e.outbound)
            }

            function u(e) {
                this.all = new o(e && e.all);
                this.producerPaid = new a(e && e.producerPaid);
                this.consumerPaid = new a(e && e.consumerPaid)
            }

            function c(e) {
                this.messages = e && e.messages || 0;
                var t = e && e.notifications;
                this.notifications = {
                    invalid: t && t.invalid || 0,
                    attempted: t && t.attempted || 0,
                    successful: t && t.successful || 0,
                    failed: t && t.failed || 0
                };
                this.directPublishes = e && e.directPublishes || 0
            }

            function l(e) {
                this.succeeded = e && e.succeeded || 0;
                this.skipped = e && e.skipped || 0;
                this.failed = e && e.failed || 0
            }

            function f(e) {
                this.delta = void 0;
                if (e && e.delta) {
                    this.delta = {};
                    for (var t in e.delta) {
                        var n = e.delta[t];
                        Object.prototype.hasOwnProperty.call(e.delta, t) && n && (this.delta[t] = new l(n))
                    }
                }
            }

            function h(e) {
                a.call(this, e);
                this.persisted = new o(e && e.persisted);
                this.connections = new i(e && e.connections);
                this.channels = new n(e && e.channels);
                this.apiRequests = new r(e && e.apiRequests);
                this.tokenRequests = new r(e && e.tokenRequests);
                this.xchgProducer = new u(e && e.xchgProducer);
                this.xchgConsumer = new u(e && e.xchgConsumer);
                this.push = new c(e && e.pushStats);
                this.processed = new f(e && e.processed);
                this.inProgress = e && e.inProgress || void 0;
                this.unit = e && e.unit || void 0;
                this.intervalId = e && e.intervalId || void 0
            }
            h.fromValues = function(e) {
                return new h(e)
            };
            return h
        }(),
        C = function() {
            function e() {
                this.id = void 0;
                this.deviceSecret = void 0;
                this.platform = void 0;
                this.formFactor = void 0;
                this.clientId = void 0;
                this.metadata = void 0;
                this.deviceIdentityToken = void 0;
                this.push = {
                    recipient: void 0,
                    state: void 0,
                    errorReason: void 0
                }
            }
            e.prototype.toJSON = function() {
                return {
                    id: this.id,
                    deviceSecret: this.deviceSecret,
                    platform: this.platform,
                    formFactor: this.formFactor,
                    clientId: this.clientId,
                    metadata: this.metadata,
                    deviceIdentityToken: this.deviceIdentityToken,
                    push: {
                        recipient: this.push.recipient,
                        state: this.push.state,
                        errorReason: this.push.errorReason
                    }
                }
            };
            e.prototype.toString = function() {
                var e = "[DeviceDetails";
                this.id && (e += "; id=" + this.id);
                this.platform && (e += "; platform=" + this.platform);
                this.formFactor && (e += "; formFactor=" + this.formFactor);
                this.clientId && (e += "; clientId=" + this.clientId);
                this.metadata && (e += "; metadata=" + this.metadata);
                this.deviceIdentityToken && (e += "; deviceIdentityToken=" + JSON.stringify(this.deviceIdentityToken));
                this.push.recipient && (e += "; push.recipient=" + JSON.stringify(this.push.recipient));
                this.push.state && (e += "; push.state=" + this.push.state);
                this.push.errorReason && (e += "; push.errorReason=" + this.push.errorReason);
                this.push.metadata && (e += "; push.metadata=" + this.push.metadata);
                return e += "]"
            };
            e.toRequestBody = y.encodeBody;
            e.fromResponseBody = function(t, n) {
                n && (t = y.decodeBody(t, n));
                return y.isArray(t) ? e.fromValuesArray(t) : e.fromValues(t)
            };
            e.fromValues = function(t) {
                return y.mixin(new e, t)
            };
            e.fromValuesArray = function(t) {
                for (var n = t.length, r = new Array(n), i = 0; i < n; i++) r[i] = e.fromValues(t[i]);
                return r
            };
            return e
        }(),
        M = function() {
            function e() {
                this.channel = void 0;
                this.deviceId = void 0;
                this.clientId = void 0
            }
            e.prototype.toJSON = function() {
                return {
                    channel: this.channel,
                    deviceId: this.deviceId,
                    clientId: this.clientId
                }
            };
            e.prototype.toString = function() {
                var e = "[PushChannelSubscription";
                this.channel && (e += "; channel=" + this.channel);
                this.deviceId && (e += "; deviceId=" + this.deviceId);
                this.clientId && (e += "; clientId=" + this.clientId);
                return e += "]"
            };
            e.toRequestBody = y.encodeBody;
            e.fromResponseBody = function(t, n) {
                n && (t = y.decodeBody(t, n));
                return y.isArray(t) ? e.fromValuesArray(t) : e.fromValues(t)
            };
            e.fromValues = function(t) {
                return y.mixin(new e, t)
            };
            e.fromValuesArray = function(t) {
                for (var n = t.length, r = new Array(n), i = 0; i < n; i++) r[i] = e.fromValues(t[i]);
                return r
            };
            return e
        }(),
        P = {
            disconnected: E.fromValues({
                statusCode: 400,
                code: 80003,
                message: "Connection to server temporarily unavailable"
            }),
            suspended: E.fromValues({
                statusCode: 400,
                code: 80002,
                message: "Connection to server unavailable"
            }),
            failed: E.fromValues({
                statusCode: 400,
                code: 8e4,
                message: "Connection failed or disconnected by server"
            }),
            closing: E.fromValues({
                statusCode: 400,
                code: 80017,
                message: "Connection closing"
            }),
            closed: E.fromValues({
                statusCode: 400,
                code: 80017,
                message: "Connection closed"
            }),
            unknownConnectionErr: E.fromValues({
                statusCode: 500,
                code: 50002,
                message: "Internal connection error"
            }),
            unknownChannelErr: E.fromValues({
                statusCode: 500,
                code: 50001,
                message: "Internal channel error"
            })
        },
        x = function() {
            function e() {
                O.call(this);
                this.messages = []
            }
            y.inherits(e, O);
            e.prototype.count = function() {
                return this.messages.length
            };
            e.prototype.push = function(e) {
                this.messages.push(e)
            };
            e.prototype.shift = function() {
                return this.messages.shift()
            };
            e.prototype.last = function() {
                return this.messages[this.messages.length - 1]
            };
            e.prototype.copyAll = function() {
                return this.messages.slice()
            };
            e.prototype.append = function(e) {
                this.messages.push.apply(this.messages, e)
            };
            e.prototype.prepend = function(e) {
                this.messages.unshift.apply(this.messages, e)
            };
            e.prototype.completeMessages = function(e, t, n) {
                w.logAction(w.LOG_MICRO, "MessageQueue.completeMessages()", "serial = " + e + "; count = " + t);
                n = n || null;
                var r = this.messages,
                    i = r[0];
                if (i) {
                    var o = i.message.msgSerial,
                        s = e + t;
                    if (s > o)
                        for (var a = r.splice(0, s - o), u = 0; u < a.length; u++) a[u].callback(n);
                    0 == r.length && this.emit("idle")
                }
            };
            e.prototype.completeAllMessages = function(e) {
                this.completeMessages(0, Number.MAX_SAFE_INTEGER || Number.MAX_VALUE, e)
            };
            e.prototype.clear = function() {
                w.logAction(w.LOG_MICRO, "MessageQueue.clear()", "clearing " + this.messages.length + " messages");
                this.messages = [];
                this.emit("idle")
            };
            return e
        }(),
        L = function() {
            var e = T.Action;

            function t(e) {
                O.call(this);
                this.transport = e;
                this.messageQueue = new x;
                var t = this;
                e.on("ack", function(e, n) {
                    t.onAck(e, n)
                });
                e.on("nack", function(e, n, r) {
                    t.onNack(e, n, r)
                })
            }
            y.inherits(t, O);
            t.prototype.onAck = function(e, t) {
                w.logAction(w.LOG_MICRO, "Protocol.onAck()", "serial = " + e + "; count = " + t);
                this.messageQueue.completeMessages(e, t)
            };
            t.prototype.onNack = function(e, t, n) {
                w.logAction(w.LOG_ERROR, "Protocol.onNack()", "serial = " + e + "; count = " + t + "; err = " + y.inspectError(n));
                n || (n = new E("Unable to send message; channel not responding", 50001, 500));
                this.messageQueue.completeMessages(e, t, n)
            };
            t.prototype.onceIdle = function(e) {
                var t = this.messageQueue;
                0 !== t.count() ? t.once("idle", e) : e()
            };
            t.prototype.send = function(e) {
                e.ackRequired && this.messageQueue.push(e);
                w.shouldLog(w.LOG_MICRO) && w.logAction(w.LOG_MICRO, "Protocol.send()", "sending msg; " + T.stringify(e.message));
                e.sendAttempted = !0;
                this.transport.send(e.message)
            };
            t.prototype.getTransport = function() {
                return this.transport
            };
            t.prototype.getPendingMessages = function() {
                return this.messageQueue.copyAll()
            };
            t.prototype.clearPendingMessages = function() {
                return this.messageQueue.clear()
            };
            t.prototype.finish = function() {
                var e = this.transport;
                this.onceIdle(function() {
                    e.disconnect()
                })
            };

            function n(t, n) {
                this.message = t;
                this.callback = n;
                this.merged = !1;
                var r = t.action;
                this.sendAttempted = !1;
                this.ackRequired = r == e.MESSAGE || r == e.PRESENCE
            }
            t.PendingMessage = n;
            return t
        }(),
        N = function() {
            var e = !(void 0 === d || !d.get),
                t = !(void 0 === d || !d.getSession),
                n = T.Action,
                r = L.PendingMessage,
                i = function() {},
                o = g.transportPreferenceOrder,
                a = o[o.length - 1],
                u = "ably-transport-preference",
                c = "ably-connection-recovery";

            function l() {
                return t && d.getSession(c)
            }

            function f(e) {
                return t && d.setSession(c, e)
            }

            function p() {
                return t && d.removeSession(c)
            }

            function v(e, t) {
                return y.arrIndexOf(o, e.shortName) > y.arrIndexOf(o, t.shortName)
            }

            function _(e, t, n, r) {
                this.options = e;
                this.host = t;
                this.mode = n;
                this.connectionKey = r;
                this.format = e.useBinaryProtocol ? "msgpack" : "json";
                this.connectionSerial = void 0;
                this.timeSerial = void 0
            }
            _.prototype.getConnectParams = function(e) {
                var t = e ? y.copy(e) : {},
                    n = this.options;
                switch (this.mode) {
                    case "upgrade":
                        t.upgrade = this.connectionKey;
                        break;
                    case "resume":
                        t.resume = this.connectionKey;
                        void 0 !== this.timeSerial ? t.timeSerial = this.timeSerial : void 0 !== this.connectionSerial && (t.connectionSerial = this.connectionSerial);
                        break;
                    case "recover":
                        var r = n.recover.split(":");
                        if (r) {
                            t.recover = r[0];
                            var i = r[1];
                            isNaN(i) ? t.timeSerial = i : t.connectionSerial = i
                        }
                }
                void 0 !== n.clientId && (t.clientId = n.clientId);
                !1 === n.echoMessages && (t.echo = "false");
                void 0 !== this.format && (t.format = this.format);
                void 0 !== this.stream && (t.stream = this.stream);
                void 0 !== this.heartbeats && (t.heartbeats = this.heartbeats);
                t.v = g.apiVersion;
                t.lib = g.libstring;
                void 0 !== n.transportParams && y.mixin(t, n.transportParams);
                return t
            };
            _.prototype.toString = function() {
                var e = "[mode=" + this.mode;
                this.host && (e += ",host=" + this.host);
                this.connectionKey && (e += ",connectionKey=" + this.connectionKey);
                void 0 !== this.connectionSerial && (e += ",connectionSerial=" + this.connectionSerial);
                this.timeSerial && (e += ",timeSerial=" + this.timeSerial);
                this.format && (e += ",format=" + this.format);
                return e += "]"
            };

            function b(e, n) {
                O.call(this);
                this.realtime = e;
                this.options = n;
                var r = n.timeouts,
                    i = this,
                    o = r.preferenceConnectTimeout + r.realtimeRequestTimeout;
                this.states = {
                    initialized: {
                        state: "initialized",
                        terminal: !1,
                        queueEvents: !0,
                        sendEvents: !1,
                        failState: "disconnected"
                    },
                    connecting: {
                        state: "connecting",
                        terminal: !1,
                        queueEvents: !0,
                        sendEvents: !1,
                        retryDelay: o,
                        failState: "disconnected"
                    },
                    connected: {
                        state: "connected",
                        terminal: !1,
                        queueEvents: !1,
                        sendEvents: !0,
                        failState: "disconnected"
                    },
                    synchronizing: {
                        state: "connected",
                        terminal: !1,
                        queueEvents: !0,
                        sendEvents: !1,
                        forceQueueEvents: !0,
                        failState: "disconnected"
                    },
                    disconnected: {
                        state: "disconnected",
                        terminal: !1,
                        queueEvents: !0,
                        sendEvents: !1,
                        retryDelay: r.disconnectedRetryTimeout,
                        failState: "disconnected"
                    },
                    suspended: {
                        state: "suspended",
                        terminal: !1,
                        queueEvents: !1,
                        sendEvents: !1,
                        retryDelay: r.suspendedRetryTimeout,
                        failState: "suspended"
                    },
                    closing: {
                        state: "closing",
                        terminal: !1,
                        queueEvents: !1,
                        sendEvents: !1,
                        retryDelay: r.realtimeRequestTimeout,
                        failState: "closed"
                    },
                    closed: {
                        state: "closed",
                        terminal: !0,
                        queueEvents: !1,
                        sendEvents: !1,
                        failState: "closed"
                    },
                    failed: {
                        state: "failed",
                        terminal: !0,
                        queueEvents: !1,
                        sendEvents: !1,
                        failState: "failed"
                    }
                };
                this.state = this.states.initialized;
                this.errorReason = null;
                this.queuedMessages = new x;
                this.msgSerial = 0;
                this.connectionDetails = void 0;
                this.connectionId = void 0;
                this.connectionKey = void 0;
                this.timeSerial = void 0;
                this.connectionSerial = void 0;
                this.connectionStateTtl = r.connectionStateTtl;
                this.maxIdleInterval = null;
                this.transports = y.intersect(n.transports || g.defaultTransports, b.supportedTransports);
                this.baseTransport = y.intersect(g.baseTransportOrder, this.transports)[0];
                this.upgradeTransports = y.intersect(this.transports, g.upgradeTransports);
                this.transportPreference = null;
                this.httpHosts = g.getHosts(n);
                this.activeProtocol = null;
                this.proposedTransports = [];
                this.pendingTransports = [];
                this.host = null;
                this.lastAutoReconnectAttempt = null;
                this.lastActivity = null;
                this.mostRecentMsg = null;
                this.forceFallbackHost = !1;
                this.connectCounter = 0;
                w.logAction(w.LOG_MINOR, "Realtime.ConnectionManager()", "started");
                w.logAction(w.LOG_MICRO, "Realtime.ConnectionManager()", "requested transports = [" + (n.transports || g.defaultTransports) + "]");
                w.logAction(w.LOG_MICRO, "Realtime.ConnectionManager()", "available transports = [" + this.transports + "]");
                w.logAction(w.LOG_MICRO, "Realtime.ConnectionManager()", "http hosts = [" + this.httpHosts + "]");
                if (!this.transports.length) {
                    var s = "no requested transports available";
                    w.logAction(w.LOG_ERROR, "realtime.ConnectionManager()", s);
                    throw new Error(s)
                }
                var a = h.addEventListener;
                if (a) {
                    t && "function" == typeof n.recover && a("beforeunload", this.persistConnection.bind(this));
                    !0 === n.closeOnUnload && a("beforeunload", function() {
                        w.logAction(w.LOG_MAJOR, "Realtime.ConnectionManager()", "beforeunload event has triggered the connection to close as closeOnUnload is true");
                        i.requestState({
                            state: "closing"
                        })
                    });
                    a("online", function() {
                        if (i.state == i.states.disconnected || i.state == i.states.suspended) {
                            w.logAction(w.LOG_MINOR, "ConnectionManager caught browser ‘online’ event", "reattempting connection");
                            i.requestState({
                                state: "connecting"
                            })
                        }
                    });
                    a("offline", function() {
                        if (i.state == i.states.connected) {
                            w.logAction(w.LOG_MINOR, "ConnectionManager caught browser ‘offline’ event", "disconnecting active transport");
                            i.disconnectAllTransports()
                        }
                    })
                }
            }
            y.inherits(b, O);
            b.supportedTransports = {};
            b.prototype.createTransportParams = function(e, t) {
                var n = new _(this.options, e, t, this.connectionKey);
                this.timeSerial ? n.timeSerial = this.timeSerial : void 0 !== this.connectionSerial && (n.connectionSerial = this.connectionSerial);
                return n
            };
            b.prototype.getTransportParams = function(e) {
                var t = this;

                function n(e) {
                    if (t.connectionKey) e("resume");
                    else if ("string" != typeof t.options.recover) {
                        var n = t.options.recover,
                            r = l();
                        if (r && "function" == typeof n) {
                            w.logAction(w.LOG_MINOR, "ConnectionManager.getTransportParams()", "Calling clientOptions-provided recover function with last session data");
                            n(r, function(n) {
                                if (n) {
                                    t.options.recover = r.recoveryKey;
                                    e("recover")
                                } else e("clean")
                            })
                        } else e("clean")
                    } else e("recover")
                }
                n(function(n) {
                    var r = t.createTransportParams(null, n);
                    if ("recover" === n) {
                        w.logAction(w.LOG_MINOR, "ConnectionManager.getTransportParams()", "Transport recovery mode = recover; recoveryKey = " + t.options.recover);
                        var i = t.options.recover.split(":");
                        i && i[2] && (t.msgSerial = i[2])
                    } else w.logAction(w.LOG_MINOR, "ConnectionManager.getTransportParams()", "Transport params = " + r.toString());
                    e(r)
                })
            };
            b.prototype.tryATransport = function(e, t, n) {
                var r = this;
                e.host;
                w.logAction(w.LOG_MICRO, "ConnectionManager.tryATransport()", "trying " + t);
                b.supportedTransports[t].tryConnect(this, this.realtime.auth, e, function(i, o) {
                    var s = r.state;
                    if (s != r.states.closing && s != r.states.closed && s != r.states.failed)
                        if (i) {
                            w.logAction(w.LOG_MINOR, "ConnectionManager.tryATransport()", "transport " + t + " " + i.event + ", err: " + i.error.toString());
                            if (G.isTokenErr(i.error)) r.realtime.auth._forceNewToken(null, null, function(i) {
                                i ? r.actOnErrorFromAuthorize(i) : r.tryATransport(e, t, n)
                            });
                            else if ("failed" === i.event) {
                                r.notifyState({
                                    state: "failed",
                                    error: i.error
                                });
                                n(!0)
                            } else "disconnected" === i.event && n(!1)
                        } else {
                            w.logAction(w.LOG_MICRO, "ConnectionManager.tryATransport()", "viable transport " + t + "; setting pending");
                            r.setTransportPending(o, e);
                            n(null, o)
                        }
                    else {
                        if (o) {
                            w.logAction(w.LOG_MINOR, "ConnectionManager.tryATransport()", "connection " + s.state + " while we were attempting the transport; closing " + o);
                            o.close()
                        }
                        n(!0)
                    }
                })
            };
            b.prototype.setTransportPending = function(e, t) {
                var n = t.mode;
                w.logAction(w.LOG_MINOR, "ConnectionManager.setTransportPending()", "transport = " + e + "; mode = " + n);
                y.arrDeleteValue(this.proposedTransports, e);
                this.pendingTransports.push(e);
                var r = this;
                e.once("connected", function(i, o, s, u) {
                    if ("upgrade" == n && r.activeProtocol) e.shortName !== a && y.arrIn(r.getUpgradePossibilities(), a) ? setTimeout(function() {
                        r.scheduleTransportActivation(i, e, o, s, u)
                    }, r.options.timeouts.parallelUpgradeDelay) : r.scheduleTransportActivation(i, e, o, s, u);
                    else {
                        r.activateTransport(i, e, o, s, u);
                        y.nextTick(function() {
                            r.connectImpl(t)
                        })
                    }
                    if ("recover" === n && r.options.recover) {
                        r.options.recover = null;
                        r.unpersistConnection()
                    }
                });
                e.on(["disconnected", "closed", "failed"], function(t) {
                    r.deactivateTransport(e, this.event, t)
                });
                this.emit("transport.pending", e)
            };
            b.prototype.scheduleTransportActivation = function(e, t, n, r, i) {
                var o = this,
                    s = this.activeProtocol && this.activeProtocol.getTransport(),
                    a = function() {
                        t.disconnect();
                        y.arrDeleteValue(o.pendingTransports, t)
                    };
                if (this.state === this.states.connected || this.state === this.states.connecting)
                    if (!s || v(t, s)) {
                        w.logAction(w.LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Scheduling transport upgrade; transport = " + t);
                        this.realtime.channels.onceNopending(function(s) {
                            var u;
                            if (s) w.logAction(w.LOG_ERROR, "ConnectionManager.scheduleTransportActivation()", "Unable to activate transport; transport = " + t + "; err = " + s);
                            else if (t.isConnected) {
                                if (o.state === o.states.connected) {
                                    w.logAction(w.LOG_MICRO, "ConnectionManager.scheduleTransportActivation()", "Currently connected, so temporarily pausing events until the upgrade is complete");
                                    o.state = o.states.synchronizing;
                                    u = o.activeProtocol
                                } else if (o.state !== o.states.connecting) {
                                    w.logAction(w.LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Current connection state (" + o.state.state + (o.state === o.states.synchronizing ? ", but with an upgrade already in progress" : "") + ") is not valid to upgrade in; abandoning upgrade to " + t.shortName);
                                    a();
                                    return
                                }
                                var c = n !== o.connectionId,
                                    l = c ? i : o;
                                c && w.logAction(w.LOG_ERROR, "ConnectionManager.scheduleTransportActivation()", "Upgrade resulted in new connectionId; resetting library connection position from " + (o.timeSerial || o.connectionSerial) + " to " + (l.timeSerial || l.connectionSerial) + "; upgrade error was " + e);
                                w.logAction(w.LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Syncing transport; transport = " + t);
                                o.sync(t, l, function(n, i, s) {
                                    if (n) {
                                        if (o.state === o.states.synchronizing) {
                                            w.logAction(w.LOG_ERROR, "ConnectionManager.scheduleTransportActivation()", "Unexpected error attempting to sync transport; transport = " + t + "; err = " + n);
                                            o.disconnectAllTransports()
                                        }
                                    } else {
                                        var a = function() {
                                            w.logAction(w.LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Activating transport; transport = " + t);
                                            o.activateTransport(e, t, i, r, s);
                                            if (o.state === o.states.synchronizing) {
                                                w.logAction(w.LOG_MICRO, "ConnectionManager.scheduleTransportActivation()", "Pre-upgrade protocol idle, sending queued messages on upgraded transport; transport = " + t);
                                                o.state = o.states.connected
                                            } else w.logAction(w.LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Pre-upgrade protocol idle, but state is now " + o.state.state + ", so leaving unchanged");
                                            o.state.sendEvents && o.sendQueuedMessages()
                                        };
                                        u ? u.onceIdle(a) : a()
                                    }
                                })
                            } else {
                                w.logAction(w.LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Proposed transport " + t.shortName + "is no longer connected; abandoning upgrade");
                                a()
                            }
                        })
                    } else {
                        w.logAction(w.LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Proposed transport " + t.shortName + " is no better than current active transport " + s.shortName + " - abandoning upgrade");
                        a()
                    }
                else {
                    w.logAction(w.LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Current connection state (" + this.state.state + (this.state === this.states.synchronizing ? ", but with an upgrade already in progress" : "") + ") is not valid to upgrade in; abandoning upgrade to " + t.shortName);
                    a()
                }
            };
            b.prototype.activateTransport = function(e, t, n, r, i) {
                w.logAction(w.LOG_MINOR, "ConnectionManager.activateTransport()", "transport = " + t);
                e && w.logAction(w.LOG_ERROR, "ConnectionManager.activateTransport()", "error = " + e);
                n && w.logAction(w.LOG_MICRO, "ConnectionManager.activateTransport()", "connectionId =  " + n);
                r && w.logAction(w.LOG_MICRO, "ConnectionManager.activateTransport()", "connectionDetails =  " + JSON.stringify(r));
                i && w.logAction(w.LOG_MICRO, "ConnectionManager.activateTransport()", "serial =  " + (i.timeSerial || i.connectionSerial));
                this.persistTransportPreference(t);
                var o = this.state,
                    s = this.states.connected.state;
                w.logAction(w.LOG_MINOR, "ConnectionManager.activateTransport()", "current state = " + o.state);
                if (o.state == this.states.closing.state || o.state == this.states.closed.state || o.state == this.states.failed.state) {
                    w.logAction(w.LOG_MINOR, "ConnectionManager.activateTransport()", "Disconnecting transport and abandoning");
                    t.disconnect();
                    return !1
                }
                y.arrDeleteValue(this.pendingTransports, t);
                if (!t.isConnected) {
                    w.logAction(w.LOG_MINOR, "ConnectionManager.activateTransport()", "Declining to activate transport " + t + " since it appears to no longer be connected");
                    return !1
                }
                var a = this.activeProtocol;
                this.activeProtocol = new L(t);
                this.host = t.params.host;
                var u = r.connectionKey;
                u && this.connectionKey != u && this.setConnection(n, r, i, !!e);
                this.onConnectionDetailsUpdate(r, t);
                var c = this;
                y.nextTick(function() {
                    t.on("connected", function(e, n, r) {
                        c.onConnectionDetailsUpdate(r, t);
                        c.emit("update", new F(s, s, null, e))
                    })
                });
                if (o.state === this.states.connected.state) {
                    if (e) {
                        this.errorReason = this.realtime.connection.errorReason = e;
                        this.emit("update", new F(s, s, null, e))
                    }
                } else {
                    this.notifyState({
                        state: "connected",
                        error: e
                    });
                    this.errorReason = this.realtime.connection.errorReason = e || null
                }
                this.emit("transport.active", t);
                if (a) {
                    a.messageQueue.count() > 0 && w.logAction(w.LOG_ERROR, "ConnectionManager.activateTransport()", "Previous active protocol (for transport " + a.transport.shortName + ", new one is " + t.shortName + ") finishing with " + a.messageQueue.count() + " messages still pending");
                    if (a.transport === t) {
                        var l = "Assumption violated: activating a transport that was also the transport for the previous active protocol; transport = " + t.shortName + "; stack = " + (new Error).stack;
                        w.logAction(w.LOG_ERROR, "ConnectionManager.activateTransport()", l);
                        I.report("error", l, "transport-previously-active")
                    } else a.finish()
                }
                y.safeArrForEach(this.pendingTransports, function(e) {
                    if (e === t) {
                        var n = "Assumption violated: activating a transport that is still marked as a pending transport; transport = " + t.shortName + "; stack = " + (new Error).stack;
                        w.logAction(w.LOG_ERROR, "ConnectionManager.activateTransport()", n);
                        I.report("error", n, "transport-activating-pending");
                        y.arrDeleteValue(c.pendingTransports, t)
                    } else e.disconnect()
                });
                y.safeArrForEach(this.proposedTransports, function(e) {
                    if (e === t) {
                        var n = "Assumption violated: activating a transport that is still marked as a proposed transport; transport = " + t.shortName + "; stack = " + (new Error).stack;
                        w.logAction(w.LOG_ERROR, "ConnectionManager.activateTransport()", n);
                        I.report("error", n, "transport-activating-proposed");
                        y.arrDeleteValue(c.proposedTransports, t)
                    } else e.dispose()
                });
                return !0
            };
            b.prototype.deactivateTransport = function(e, t, n) {
                var r = this.activeProtocol,
                    i = r && r.getTransport() === e,
                    o = y.arrDeleteValue(this.pendingTransports, e),
                    s = y.arrDeleteValue(this.proposedTransports, e),
                    a = this.noTransportsScheduledForActivation();
                w.logAction(w.LOG_MINOR, "ConnectionManager.deactivateTransport()", "transport = " + e);
                w.logAction(w.LOG_MINOR, "ConnectionManager.deactivateTransport()", "state = " + t + (i ? "; was active" : o ? "; was pending" : s ? "; was proposed" : "") + (a ? "" : "; another transport is scheduled for activation"));
                n && n.message && w.logAction(w.LOG_MICRO, "ConnectionManager.deactivateTransport()", "reason =  " + n.message);
                if (i) {
                    w.logAction(w.LOG_MICRO, "ConnectionManager.deactivateTransport()", "Getting, clearing, and requeuing " + this.activeProtocol.messageQueue.count() + " pending messages");
                    this.queuePendingMessages(r.getPendingMessages());
                    y.nextTick(function() {
                        r.clearPendingMessages()
                    });
                    this.activeProtocol = this.host = null;
                    clearTimeout(this.channelResumeCheckTimer)
                }
                this.emit("transport.inactive", e);
                if (i && a || i && "failed" === t || "closed" === t || null === r && o && 0 === this.pendingTransports.length) {
                    if ("disconnected" === t && n && n.statusCode > 500 && this.httpHosts.length > 1) {
                        this.unpersistTransportPreference();
                        this.forceFallbackHost = !0;
                        this.notifyState({
                            state: t,
                            error: n,
                            retryImmediately: !0
                        });
                        return
                    }
                    var u = "failed" === t && G.isTokenErr(n) ? "disconnected" : t;
                    this.notifyState({
                        state: u,
                        error: n
                    })
                } else if (i && "disconnected" === t && this.state !== this.states.synchronizing) {
                    w.logAction(w.LOG_MICRO, "ConnectionManager.deactivateTransport()", "wasActive but another transport is connected and scheduled for activation, so going into the connecting state until it activates");
                    this.startSuspendTimer();
                    this.startTransitionTimer(this.states.connecting);
                    this.notifyState({
                        state: "connecting",
                        error: n
                    })
                }
            };
            b.prototype.noTransportsScheduledForActivation = function() {
                return y.isEmpty(this.pendingTransports) || this.pendingTransports.every(function(e) {
                    return !e.isConnected
                })
            };
            b.prototype.sync = function(e, t, r) {
                var i = setTimeout(function() {
                        e.off("sync");
                        r(new E("Timeout waiting for sync response", 5e4, 500))
                    }, this.options.timeouts.realtimeRequestTimeout),
                    o = T.fromValues({
                        action: n.SYNC,
                        connectionKey: this.connectionKey
                    });
                t.timeSerial ? o.timeSerial = t.timeSerial : void 0 !== t.connectionSerial && (o.connectionSerial = t.connectionSerial);
                e.send(o);
                e.once("sync", function(e, t) {
                    clearTimeout(i);
                    r(null, e, t)
                })
            };
            b.prototype.setConnection = function(e, t, n, r) {
                var i = this,
                    o = this.connectionid,
                    s = o && o !== e;
                if (s || !o && r) {
                    w.logAction(w.LOG_MINOR, "ConnectionManager.setConnection()", "Resetting msgSerial");
                    this.msgSerial = 0
                }
                if (this.connectionId !== e) {
                    w.logAction(w.LOG_MINOR, "ConnectionManager.setConnection()", "New connectionId; reattaching any attached channels");
                    y.nextTick(function() {
                        i.realtime.channels.reattach()
                    })
                } else if (this.options.checkChannelsOnResume) {
                    w.logAction(w.LOG_MINOR, "ConnectionManager.setConnection()", "Same connectionId; checkChannelsOnResume is enabled");
                    clearTimeout(this.channelResumeCheckTimer);
                    this.realtime.channels.resetAttachedMsgIndicators();
                    this.channelResumeCheckTimer = setTimeout(function() {
                        i.realtime.channels.checkAttachedMsgIndicators(e)
                    }, 3e4)
                }
                this.realtime.connection.id = this.connectionId = e;
                this.realtime.connection.key = this.connectionKey = t.connectionKey;
                var a = s || !o;
                this.setConnectionSerial(n, a)
            };
            b.prototype.clearConnection = function() {
                this.realtime.connection.id = this.connectionId = void 0;
                this.realtime.connection.key = this.connectionKey = void 0;
                this.clearConnectionSerial();
                this.msgSerial = 0;
                this.unpersistConnection()
            };
            b.prototype.setConnectionSerial = function(e, t) {
                var n = e.timeSerial,
                    r = e.connectionSerial;
                w.logAction(w.LOG_MICRO, "ConnectionManager.setConnectionSerial()", "Updating connection serial; serial = " + r + "; timeSerial = " + n + "; force = " + t + "; previous = " + this.connectionSerial);
                if (void 0 === n) {
                    if (void 0 !== r) {
                        if (r <= this.connectionSerial && !t) {
                            w.logAction(w.LOG_ERROR, "ConnectionManager.setConnectionSerial()", "received message with connectionSerial " + r + ", but current connectionSerial is " + this.connectionSerial + "; assuming message is a duplicate and discarding it");
                            return !0
                        }
                        this.realtime.connection.serial = this.connectionSerial = r;
                        this.setRecoveryKey()
                    }
                } else {
                    if (n <= this.timeSerial && !t) {
                        w.logAction(w.LOG_ERROR, "ConnectionManager.setConnectionSerial()", "received message with timeSerial " + n + ", but current timeSerial is " + this.timeSerial + "; assuming message is a duplicate and discarding it");
                        return !0
                    }
                    this.realtime.connection.timeSerial = this.timeSerial = n;
                    this.setRecoveryKey()
                }
            };
            b.prototype.clearConnectionSerial = function() {
                this.realtime.connection.serial = this.connectionSerial = void 0;
                this.realtime.connection.timeSerial = this.timeSerial = void 0;
                this.clearRecoveryKey()
            };
            b.prototype.setRecoveryKey = function() {
                this.realtime.connection.recoveryKey = this.connectionKey + ":" + (this.timeSerial || this.connectionSerial) + ":" + this.msgSerial
            };
            b.prototype.clearRecoveryKey = function() {
                this.realtime.connection.recoveryKey = null
            };
            b.prototype.checkConnectionStateFreshness = function() {
                if (this.lastActivity && this.connectionId) {
                    var e = y.now() - this.lastActivity;
                    if (e > this.connectionStateTtl + this.maxIdleInterval) {
                        w.logAction(w.LOG_MINOR, "ConnectionManager.checkConnectionStateFreshness()", "Last known activity from realtime was " + e + "ms ago; discarding connection state");
                        this.clearConnection();
                        this.states.connecting.failState = "suspended";
                        this.states.connecting.queueEvents = !1
                    }
                }
            };
            b.prototype.persistConnection = function() {
                if (t) {
                    var e = this.realtime.connection.recoveryKey;
                    e && f({
                        recoveryKey: e,
                        disconnectedAt: y.now(),
                        location: s.location,
                        clientId: this.realtime.auth.clientId
                    }, this.connectionStateTtl)
                }
            };
            b.prototype.unpersistConnection = function() {
                p()
            };
            b.prototype.getError = function() {
                return this.errorReason || this.getStateError()
            };
            b.prototype.getStateError = function() {
                return P[this.state.state]
            };
            b.prototype.activeState = function() {
                return this.state.queueEvents || this.state.sendEvents
            };
            b.prototype.enactStateChange = function(e) {
                var t = "failed" === e.current ? w.LOG_ERROR : w.LOG_MAJOR;
                w.logAction(t, "Connection state", e.current + (e.reason ? "; reason: " + e.reason : ""));
                w.logAction(w.LOG_MINOR, "ConnectionManager.enactStateChange", "setting new state: " + e.current + "; reason = " + (e.reason && e.reason.message));
                var n = this.state = this.states[e.current];
                if (e.reason) {
                    this.errorReason = e.reason;
                    this.realtime.connection.errorReason = e.reason
                }(n.terminal || "suspended" === n.state) && this.clearConnection();
                this.emit("connectionstate", e)
            };
            b.prototype.startTransitionTimer = function(e) {
                w.logAction(w.LOG_MINOR, "ConnectionManager.startTransitionTimer()", "transitionState: " + e.state);
                if (this.transitionTimer) {
                    w.logAction(w.LOG_MINOR, "ConnectionManager.startTransitionTimer()", "clearing already-running timer");
                    clearTimeout(this.transitionTimer)
                }
                var t = this;
                this.transitionTimer = setTimeout(function() {
                    if (t.transitionTimer) {
                        t.transitionTimer = null;
                        w.logAction(w.LOG_MINOR, "ConnectionManager " + e.state + " timer expired", "requesting new state: " + e.failState);
                        t.notifyState({
                            state: e.failState
                        })
                    }
                }, e.retryDelay)
            };
            b.prototype.cancelTransitionTimer = function() {
                w.logAction(w.LOG_MINOR, "ConnectionManager.cancelTransitionTimer()", "");
                if (this.transitionTimer) {
                    clearTimeout(this.transitionTimer);
                    this.transitionTimer = null
                }
            };
            b.prototype.startSuspendTimer = function() {
                var e = this;
                this.suspendTimer || (this.suspendTimer = setTimeout(function() {
                    if (e.suspendTimer) {
                        e.suspendTimer = null;
                        w.logAction(w.LOG_MINOR, "ConnectionManager suspend timer expired", "requesting new state: suspended");
                        e.states.connecting.failState = "suspended";
                        e.states.connecting.queueEvents = !1;
                        e.notifyState({
                            state: "suspended"
                        })
                    }
                }, this.connectionStateTtl))
            };
            b.prototype.checkSuspendTimer = function(e) {
                "disconnected" !== e && "suspended" !== e && "connecting" !== e && this.cancelSuspendTimer()
            };
            b.prototype.cancelSuspendTimer = function() {
                this.states.connecting.failState = "disconnected";
                this.states.connecting.queueEvents = !0;
                if (this.suspendTimer) {
                    clearTimeout(this.suspendTimer);
                    this.suspendTimer = null
                }
            };
            b.prototype.startRetryTimer = function(e) {
                var t = this;
                this.retryTimer = setTimeout(function() {
                    w.logAction(w.LOG_MINOR, "ConnectionManager retry timer expired", "retrying");
                    t.retryTimer = null;
                    t.requestState({
                        state: "connecting"
                    })
                }, e)
            };
            b.prototype.cancelRetryTimer = function() {
                if (this.retryTimer) {
                    clearTimeout(this.retryTimer);
                    this.retryTimer = null
                }
            };
            b.prototype.notifyState = function(e) {
                var t = e.state,
                    n = this,
                    r = "disconnected" === t && (this.state === this.states.connected || this.state === this.states.synchronizing || e.retryImmediately || this.state === this.states.connecting && e.error && G.isTokenErr(e.error) && !(this.errorReason && G.isTokenErr(this.errorReason)));
                w.logAction(w.LOG_MINOR, "ConnectionManager.notifyState()", "new state: " + t + (r ? "; will retry connection immediately" : ""));
                if (t != this.state.state) {
                    this.cancelTransitionTimer();
                    this.cancelRetryTimer();
                    this.checkSuspendTimer(e.state);
                    if (!this.state.terminal) {
                        var i = this.states[e.state],
                            o = new F(this.state.state, i.state, i.retryDelay, e.error || P[i.state]);
                        if (r) {
                            var s = function() {
                                    if (n.state === n.states.disconnected) {
                                        n.lastAutoReconnectAttempt = y.now();
                                        n.requestState({
                                            state: "connecting"
                                        })
                                    }
                                },
                                a = this.lastAutoReconnectAttempt && y.now() - this.lastAutoReconnectAttempt + 1;
                            if (a && a < 1e3) {
                                w.logAction(w.LOG_MICRO, "ConnectionManager.notifyState()", "Last reconnect attempt was only " + a + "ms ago, waiting another " + (1e3 - a) + "ms before trying again");
                                setTimeout(s, 1e3 - a)
                            } else y.nextTick(s)
                        } else "disconnected" !== t && "suspended" !== t || this.startRetryTimer(i.retryDelay);
                        ("disconnected" === t && !r || "suspended" === t || i.terminal) && y.nextTick(function() {
                            n.disconnectAllTransports()
                        });
                        "connected" != t || this.activeProtocol || w.logAction(w.LOG_ERROR, "ConnectionManager.notifyState()", "Broken invariant: attempted to go into connected state, but there is no active protocol");
                        this.enactStateChange(o);
                        if (this.state.sendEvents) this.sendQueuedMessages();
                        else if (!this.state.queueEvents) {
                            this.realtime.channels.propogateConnectionInterruption(t, o.reason);
                            this.failQueuedMessages(o.reason)
                        }
                    }
                }
            };
            b.prototype.requestState = function(e) {
                var t = e.state,
                    n = this;
                w.logAction(w.LOG_MINOR, "ConnectionManager.requestState()", "requested state: " + t + "; current state: " + this.state.state);
                if (t != this.state.state) {
                    this.cancelTransitionTimer();
                    this.cancelRetryTimer();
                    this.checkSuspendTimer(t);
                    if (!("connecting" == t && "connected" == this.state.state || "closing" == t && "closed" == this.state.state)) {
                        var r = this.states[t],
                            i = new F(this.state.state, r.state, null, e.error || P[r.state]);
                        this.enactStateChange(i);
                        "connecting" == t && y.nextTick(function() {
                            n.startConnect()
                        });
                        "closing" == t && this.closeImpl()
                    }
                }
            };
            b.prototype.startConnect = function() {
                if (this.state === this.states.connecting) {
                    var e = this.realtime.auth,
                        t = this,
                        n = ++this.connectCounter,
                        r = function() {
                            t.checkConnectionStateFreshness();
                            t.getTransportParams(function(e) {
                                n === t.connectCounter && t.connectImpl(e, n)
                            })
                        };
                    w.logAction(w.LOG_MINOR, "ConnectionManager.startConnect()", "starting connection");
                    this.startSuspendTimer();
                    this.startTransitionTimer(this.states.connecting);
                    if ("basic" === e.method) r();
                    else {
                        var i = function(e) {
                            n === t.connectCounter && (e ? t.actOnErrorFromAuthorize(e) : r())
                        };
                        this.errorReason && G.isTokenErr(this.errorReason) ? e._forceNewToken(null, null, i) : e._ensureValidAuthCredentials(!1, i)
                    }
                } else w.logAction(w.LOG_MINOR, "ConnectionManager.startConnect()", "Must be in connecting state to connect, but was " + this.state.state)
            };
            b.prototype.connectImpl = function(e, t) {
                var n = this.state.state;
                n !== this.states.connecting.state && n !== this.states.connected.state ? w.logAction(w.LOG_MINOR, "ConnectionManager.connectImpl()", "Must be in connecting state to connect (or connected to upgrade), but was " + n) : this.pendingTransports.length ? w.logAction(w.LOG_MINOR, "ConnectionManager.connectImpl()", "Transports " + this.pendingTransports[0].toString() + " currently pending; taking no action") : n == this.states.connected.state ? this.upgradeIfNeeded(e) : this.transports.length > 1 && this.getTransportPreference() ? this.connectPreference(e) : this.connectBase(e, t)
            };
            b.prototype.connectPreference = function(e) {
                var t = this.getTransportPreference(),
                    n = this,
                    r = !1;
                if (!y.arrIn(this.transports, t)) {
                    this.unpersistTransportPreference();
                    this.connectImpl(e)
                }
                w.logAction(w.LOG_MINOR, "ConnectionManager.connectPreference()", "Trying to connect with stored transport preference " + t);
                var i = setTimeout(function() {
                    r = !0;
                    if (n.state.state !== n.states.connected.state) {
                        w.logAction(w.LOG_MINOR, "ConnectionManager.connectPreference()", "Shortcircuit connection attempt with " + t + " failed; clearing preference and trying from scratch");
                        n.disconnectAllTransports();
                        n.unpersistTransportPreference()
                    }
                    n.connectImpl(e)
                }, this.options.timeouts.preferenceConnectTimeout);
                e.host = n.httpHosts[0];
                n.tryATransport(e, t, function(t, o) {
                    clearTimeout(i);
                    if (r && o) {
                        o.off();
                        o.disconnect();
                        y.arrDeleteValue(this.pendingTransports, o)
                    } else if (!o && !t) {
                        n.unpersistTransportPreference();
                        n.connectImpl(e)
                    }
                })
            };
            b.prototype.connectBase = function(e, t) {
                var n = this,
                    r = function(e) {
                        n.notifyState({
                            state: n.states.connecting.failState,
                            error: e
                        })
                    },
                    i = this.httpHosts.slice(),
                    o = function(e, r) {
                        t === n.connectCounter && (r || e || a())
                    };
                w.logAction(w.LOG_MINOR, "ConnectionManager.connectBase()", "Trying to connect with base transport " + this.baseTransport);
                var s = i.shift();
                if (s) {
                    e.host = s;
                    if (this.forceFallbackHost && i.length) {
                        this.forceFallbackHost = !1;
                        a()
                    } else this.tryATransport(e, this.baseTransport, o)
                } else r(new E("Unable to connect (no available host)", 80003, 404));

                function a() {
                    i.length ? m.checkConnectivity(function(s, a) {
                        if (t === n.connectCounter)
                            if (s) r(s);
                            else if (a) {
                            e.host = y.arrPopRandomElement(i);
                            n.tryATransport(e, n.baseTransport, o)
                        } else r(new E("Unable to connect (network unreachable)", 80003, 404))
                    }) : r(new E("Unable to connect (and no more fallback hosts to try)", 80003, 404))
                }
            };
            b.prototype.getUpgradePossibilities = function() {
                var e = this.activeProtocol.getTransport().shortName,
                    t = y.arrIndexOf(this.upgradeTransports, e);
                return this.upgradeTransports.slice(t + 1)
            };
            b.prototype.upgradeIfNeeded = function(e) {
                var t = this.getUpgradePossibilities(),
                    n = this;
                w.logAction(w.LOG_MINOR, "ConnectionManager.upgradeIfNeeded()", "upgrade possibilities: " + y.inspect(t));
                t.length && y.arrForEach(t, function(t) {
                    var r = n.createTransportParams(e.host, "upgrade");
                    n.tryATransport(r, t, i)
                })
            };
            b.prototype.closeImpl = function() {
                w.logAction(w.LOG_MINOR, "ConnectionManager.closeImpl()", "closing connection");
                this.cancelSuspendTimer();
                this.startTransitionTimer(this.states.closing);
                y.safeArrForEach(this.pendingTransports, function(e) {
                    w.logAction(w.LOG_MICRO, "ConnectionManager.closeImpl()", "Closing pending transport: " + e);
                    e && e.close()
                });
                y.safeArrForEach(this.proposedTransports, function(e) {
                    w.logAction(w.LOG_MICRO, "ConnectionManager.closeImpl()", "Disposing of proposed transport: " + e);
                    e && e.dispose()
                });
                if (this.activeProtocol) {
                    w.logAction(w.LOG_MICRO, "ConnectionManager.closeImpl()", "Closing active transport: " + this.activeProtocol.getTransport());
                    this.activeProtocol.getTransport().close()
                }
                this.notifyState({
                    state: "closed"
                })
            };
            b.prototype.onAuthUpdated = function(e, t) {
                var r = this;
                switch (this.state.state) {
                    case "connected":
                        w.logAction(w.LOG_MICRO, "ConnectionManager.onAuthUpdated()", "Sending AUTH message on active transport");
                        if ((this.pendingTransports.length || this.proposedTransports.length) && r.state !== r.states.synchronizing) {
                            this.disconnectAllTransports(!0);
                            var i = this.activeProtocol.getTransport().params;
                            y.nextTick(function() {
                                "connected" === r.state.state && r.upgradeIfNeeded(i)
                            })
                        }
                        this.activeProtocol.getTransport().onAuthUpdated(e);
                        var o = T.fromValues({
                            action: n.AUTH,
                            auth: {
                                accessToken: e.token
                            }
                        });
                        this.send(o);
                        var s = function() {
                                r.off(a);
                                t(null, e)
                            },
                            a = function(e) {
                                if ("failed" === e.current) {
                                    r.off(s);
                                    r.off(a);
                                    t(e.reason || r.getStateError())
                                }
                            };
                        this.once("connectiondetails", s);
                        this.on("connectionstate", a);
                        break;
                    case "connecting":
                        w.logAction(w.LOG_MICRO, "ConnectionManager.onAuthUpdated()", "Aborting current connection attempts in order to start again with the new auth details");
                        this.disconnectAllTransports();
                    default:
                        w.logAction(w.LOG_MICRO, "ConnectionManager.onAuthUpdated()", "Connection state is " + this.state.state + "; waiting until either connected or failed");
                        var u = function(n) {
                            switch (n.current) {
                                case "connected":
                                    r.off(u);
                                    t(null, e);
                                    break;
                                case "failed":
                                case "closed":
                                case "suspended":
                                    r.off(u);
                                    t(n.reason || r.getStateError())
                            }
                        };
                        r.on("connectionstate", u);
                        "connecting" === this.state.state ? r.startConnect() : r.requestState({
                            state: "connecting"
                        })
                }
            };
            b.prototype.disconnectAllTransports = function(e) {
                w.logAction(w.LOG_MINOR, "ConnectionManager.disconnectAllTransports()", "Disconnecting all transports" + (e ? " except the active transport" : ""));
                this.connectCounter++;
                y.safeArrForEach(this.pendingTransports, function(e) {
                    w.logAction(w.LOG_MICRO, "ConnectionManager.disconnectAllTransports()", "Disconnecting pending transport: " + e);
                    e && e.disconnect()
                });
                this.pendingTransports = [];
                y.safeArrForEach(this.proposedTransports, function(e) {
                    w.logAction(w.LOG_MICRO, "ConnectionManager.disconnectAllTransports()", "Disposing of proposed transport: " + e);
                    e && e.dispose()
                });
                this.proposedTransports = [];
                if (this.activeProtocol && !e) {
                    w.logAction(w.LOG_MICRO, "ConnectionManager.disconnectAllTransports()", "Disconnecting active transport: " + this.activeProtocol.getTransport());
                    this.activeProtocol.getTransport().disconnect()
                }
            };
            b.prototype.send = function(e, t, n) {
                n = n || i;
                var o = this.state;
                if (o.sendEvents) {
                    w.logAction(w.LOG_MICRO, "ConnectionManager.send()", "sending event");
                    this.sendImpl(new r(e, n))
                } else {
                    if (t && o.queueEvents || o.forceQueueEvents) {
                        w.shouldLog(w.LOG_MICRO) && w.logAction(w.LOG_MICRO, "ConnectionManager.send()", "queueing msg; " + T.stringify(e));
                        this.queue(e, n)
                    } else {
                        var s = "rejecting event, queueEvent was " + t + ", state was " + o.state;
                        w.logAction(w.LOG_MICRO, "ConnectionManager.send()", s);
                        n(this.errorReason || new E(s, 9e4, 400))
                    }
                }
            };
            b.prototype.sendImpl = function(e) {
                var t = e.message;
                if (e.ackRequired && !e.sendAttempted) {
                    t.msgSerial = this.msgSerial++;
                    this.setRecoveryKey()
                }
                try {
                    this.activeProtocol.send(e)
                } catch (e) {
                    w.logAction(w.LOG_ERROR, "ConnectionManager.sendImpl()", "Unexpected exception in transport.send(): " + e.stack)
                }
            };

            function k(e, t, r) {
                var i;
                if (e.channel !== t.channel) return !1;
                if ((i = e.action) !== n.PRESENCE && i !== n.MESSAGE) return !1;
                if (i !== t.action) return !1;
                var o = i === n.PRESENCE ? "presence" : "messages",
                    s = e[o].concat(t[o]);
                if (A.getMessagesSize(s) > r) return !1;
                if (!y.allSame(s, "clientId")) return !1;
                if (!y.arrEvery(s, function(e) {
                        return !e.id
                    })) return !1;
                e[o] = s;
                return !0
            }
            b.prototype.queue = function(e, t) {
                w.logAction(w.LOG_MICRO, "ConnectionManager.queue()", "queueing event");
                var n = this.queuedMessages.last(),
                    i = this.options.maxMessageSize;
                if (n && !n.sendAttempted && k(n.message, e, i)) {
                    if (!n.merged) {
                        n.callback = S([n.callback]);
                        n.merged = !0
                    }
                    n.callback.push(t)
                } else this.queuedMessages.push(new r(e, t))
            };
            b.prototype.sendQueuedMessages = function() {
                w.logAction(w.LOG_MICRO, "ConnectionManager.sendQueuedMessages()", "sending " + this.queuedMessages.count() + " queued messages");
                for (var e; e = this.queuedMessages.shift();) this.sendImpl(e)
            };
            b.prototype.queuePendingMessages = function(e) {
                if (e && e.length) {
                    w.logAction(w.LOG_MICRO, "ConnectionManager.queuePendingMessages()", "queueing " + e.length + " pending messages");
                    this.queuedMessages.prepend(e)
                }
            };
            b.prototype.failQueuedMessages = function(e) {
                var t = this.queuedMessages.count();
                if (t > 0) {
                    w.logAction(w.LOG_ERROR, "ConnectionManager.failQueuedMessages()", "failing " + t + " queued messages, err = " + y.inspectError(e));
                    this.queuedMessages.completeAllMessages(e)
                }
            };
            b.prototype.onChannelMessage = function(e, t) {
                var r = this.activeProtocol && t === this.activeProtocol.getTransport(),
                    i = y.arrIn(this.pendingTransports, t) && this.state == this.states.synchronizing,
                    o = e.action === n.MESSAGE || e.action === n.PRESENCE;
                if (r || i) {
                    if (o) {
                        if (this.setConnectionSerial(e)) return;
                        if (T.isDuplicate(e, this.mostRecentMsg)) {
                            w.logAction(w.LOG_ERROR, "ConnectionManager.onChannelMessage()", "received message with different connectionSerial, but same message id as a previous; discarding; id = " + e.id);
                            return
                        }
                        this.mostRecentMsg = e
                    }
                    this.realtime.channels.onChannelMessage(e)
                } else y.arrIndexOf([n.ACK, n.NACK, n.ERROR], e.action) > -1 ? this.realtime.channels.onChannelMessage(e) : w.logAction(w.LOG_MICRO, "ConnectionManager.onChannelMessage()", "received message " + JSON.stringify(e) + "on defunct transport; discarding")
            };
            b.prototype.ping = function(e, t) {
                if (e) {
                    w.logAction(w.LOG_MINOR, "ConnectionManager.ping()", "transport = " + e);
                    var n = function() {
                            e.off("heartbeat", o);
                            t(new E("Timeout waiting for heartbeat response", 5e4, 500))
                        },
                        r = y.now(),
                        i = y.cheapRandStr(),
                        o = function(n) {
                            if (n === i) {
                                e.off("heartbeat", o);
                                clearTimeout(s);
                                var a = y.now() - r;
                                t(null, a)
                            }
                        },
                        s = setTimeout(n, this.options.timeouts.realtimeRequestTimeout);
                    e.on("heartbeat", o);
                    e.ping(i)
                } else if ("connected" === this.state.state) {
                    var a = !1,
                        u = this,
                        c = function(e, n) {
                            u.off("transport.active", l);
                            if (!a) {
                                a = !0;
                                t(e, n)
                            }
                        },
                        l = function() {
                            if (!a) {
                                a = !0;
                                y.nextTick(function() {
                                    u.ping(null, t)
                                })
                            }
                        };
                    this.on("transport.active", l);
                    this.ping(this.activeProtocol.getTransport(), c)
                } else t(new E("Unable to ping service; not connected", 4e4, 400))
            };
            b.prototype.abort = function(e) {
                this.activeProtocol.getTransport().fail(e)
            };
            b.prototype.registerProposedTransport = function(e) {
                this.proposedTransports.push(e)
            };
            b.prototype.getTransportPreference = function() {
                return this.transportPreference || e && d.get(u)
            };
            b.prototype.persistTransportPreference = function(t) {
                if (y.arrIn(g.upgradeTransports, t.shortName)) {
                    this.transportPreference = t.shortName;
                    e && d.set(u, t.shortName)
                }
            };
            b.prototype.unpersistTransportPreference = function() {
                this.transportPreference = null;
                e && d.remove(u)
            };
            b.prototype.actOnErrorFromAuthorize = function(e) {
                if (40171 === e.code) this.notifyState({
                    state: "failed",
                    error: e
                });
                else if (403 === e.statusCode) {
                    var t = "Client configured authentication provider returned 403; failing the connection";
                    w.logAction(w.LOG_ERROR, "ConnectionManager.actOnErrorFromAuthorize()", t);
                    this.notifyState({
                        state: "failed",
                        error: new E(t, 80019, 403, e)
                    })
                } else {
                    t = "Client configured authentication provider request failed";
                    w.logAction(w.LOG_MINOR, "ConnectionManager.actOnErrorFromAuthorize", t);
                    this.notifyState({
                        state: this.state.failState,
                        error: new E(t, 80019, 401, e)
                    })
                }
            };
            b.prototype.onConnectionDetailsUpdate = function(e, t) {
                if (e) {
                    this.connectionDetails = e;
                    e.maxMessageSize && (this.options.maxMessageSize = e.maxMessageSize);
                    var n = e.clientId;
                    if (n) {
                        var r = this.realtime.auth._uncheckedSetClientId(n);
                        if (r) {
                            w.logAction(w.LOG_ERROR, "ConnectionManager.onConnectionDetailsUpdate()", r.message);
                            t.fail(r);
                            return
                        }
                    }
                    var i = e.connectionStateTtl;
                    i && (this.connectionStateTtl = i);
                    this.maxIdleInterval = e.maxIdleInterval;
                    this.emit("connectiondetails", e)
                }
            };
            return b
        }(),
        U = function() {
            var e = T.Action,
                t = T.fromValues({
                    action: e.CLOSE
                }),
                n = T.fromValues({
                    action: e.DISCONNECT
                });

            function r(e, t, n) {
                O.call(this);
                this.connectionManager = e;
                e.registerProposedTransport(this);
                this.auth = t;
                this.params = n;
                this.timeouts = n.options.timeouts;
                this.format = n.format;
                this.isConnected = !1;
                this.isFinished = !1;
                this.isDisposed = !1;
                this.maxIdleInterval = null;
                this.idleTimer = null;
                this.lastActivity = null
            }
            y.inherits(r, O);
            r.prototype.connect = function() {};
            r.prototype.close = function() {
                this.isConnected && this.requestClose();
                this.finish("closed", P.closed)
            };
            r.prototype.disconnect = function(e) {
                this.isConnected && this.requestDisconnect();
                this.finish("disconnected", e || P.disconnected)
            };
            r.prototype.fail = function(e) {
                this.isConnected && this.requestDisconnect();
                this.finish("failed", e || P.failed)
            };
            r.prototype.finish = function(e, t) {
                if (!this.isFinished) {
                    this.isFinished = !0;
                    this.isConnected = !1;
                    this.maxIdleInterval = null;
                    clearTimeout(this.idleTimer);
                    this.idleTimer = null;
                    this.emit(e, t);
                    this.dispose()
                }
            };
            r.prototype.onProtocolMessage = function(t) {
                w.shouldLog(w.LOG_MICRO) && w.logAction(w.LOG_MICRO, "Transport.onProtocolMessage()", "received on " + this.shortName + ": " + T.stringify(t) + "; connectionId = " + this.connectionManager.connectionId);
                this.onActivity();
                switch (t.action) {
                    case e.HEARTBEAT:
                        w.logAction(w.LOG_MICRO, "Transport.onProtocolMessage()", this.shortName + " heartbeat; connectionId = " + this.connectionManager.connectionId);
                        this.emit("heartbeat", t.id);
                        break;
                    case e.CONNECTED:
                        this.onConnect(t);
                        this.emit("connected", t.error, t.connectionId, t.connectionDetails, t);
                        break;
                    case e.CLOSED:
                        this.onClose(t);
                        break;
                    case e.DISCONNECTED:
                        this.onDisconnect(t);
                        break;
                    case e.ACK:
                        this.emit("ack", t.msgSerial, t.count);
                        break;
                    case e.NACK:
                        this.emit("nack", t.msgSerial, t.count, t.error);
                        break;
                    case e.SYNC:
                        if (void 0 !== t.connectionId) {
                            this.emit("sync", t.connectionId, t);
                            break
                        }
                        this.connectionManager.onChannelMessage(t, this);
                        break;
                    case e.AUTH:
                        this.auth.authorize(function(e) {
                            e && w.logAction(w.LOG_ERROR, "Transport.onProtocolMessage()", "Ably requested re-authentication, but unable to obtain a new token: " + y.inspectError(e))
                        });
                        break;
                    case e.ERROR:
                        w.logAction(w.LOG_MINOR, "Transport.onProtocolMessage()", "received error action; connectionId = " + this.connectionManager.connectionId + "; err = " + y.inspect(t.error) + (t.channel ? ", channel: " + t.channel : ""));
                        if (void 0 === t.channel) {
                            this.onFatalError(t);
                            break
                        }
                        this.connectionManager.onChannelMessage(t, this);
                        break;
                    default:
                        this.connectionManager.onChannelMessage(t, this)
                }
            };
            r.prototype.onConnect = function(e) {
                this.isConnected = !0;
                var t = e.connectionDetails.maxIdleInterval;
                if (t) {
                    this.maxIdleInterval = t + this.timeouts.realtimeRequestTimeout;
                    this.onActivity()
                }
            };
            r.prototype.onDisconnect = function(e) {
                var t = e && e.error;
                w.logAction(w.LOG_MINOR, "Transport.onDisconnect()", "err = " + y.inspectError(t));
                this.finish("disconnected", t)
            };
            r.prototype.onFatalError = function(e) {
                var t = e && e.error;
                w.logAction(w.LOG_MINOR, "Transport.onFatalError()", "err = " + y.inspectError(t));
                this.finish("failed", t)
            };
            r.prototype.onClose = function(e) {
                var t = e && e.error;
                w.logAction(w.LOG_MINOR, "Transport.onClose()", "err = " + y.inspectError(t));
                this.finish("closed", t)
            };
            r.prototype.requestClose = function() {
                w.logAction(w.LOG_MINOR, "Transport.requestClose()", "");
                this.send(t)
            };
            r.prototype.requestDisconnect = function() {
                w.logAction(w.LOG_MINOR, "Transport.requestDisconnect()", "");
                this.send(n)
            };
            r.prototype.ping = function(e) {
                var t = {
                    action: T.Action.HEARTBEAT
                };
                e && (t.id = e);
                this.send(T.fromValues(t))
            };
            r.prototype.dispose = function() {
                w.logAction(w.LOG_MINOR, "Transport.dispose()", "");
                this.isDisposed = !0;
                this.off()
            };
            r.prototype.onActivity = function() {
                if (this.maxIdleInterval) {
                    this.lastActivity = this.connectionManager.lastActivity = y.now();
                    this.setIdleTimer(this.maxIdleInterval + 100)
                }
            };
            r.prototype.setIdleTimer = function(e) {
                var t = this;
                this.idleTimer || (this.idleTimer = setTimeout(function() {
                    t.onIdleTimerExpire()
                }, e))
            };
            r.prototype.onIdleTimerExpire = function() {
                this.idleTimer = null;
                var e = y.now() - this.lastActivity,
                    t = this.maxIdleInterval - e;
                if (t <= 0) {
                    var n = "No activity seen from realtime in " + e + "ms; assuming connection has dropped";
                    w.logAction(w.LOG_ERROR, "Transport.onIdleTimerExpire()", n);
                    this.disconnect(new E(n, 80003, 408))
                } else this.setIdleTimer(t + 100)
            };
            r.prototype.onAuthUpdated = function() {};
            return r
        }(),
        j = (function() {
            var e = h.WebSocket,
                t = "web_socket";

            function n(e, n, r) {
                this.shortName = t;
                r.heartbeats = h.useProtocolHeartbeats;
                U.call(this, e, n, r);
                this.wsHost = g.getHost(r.options, r.host, !0)
            }
            y.inherits(n, U);
            n.isAvailable = function() {
                return !!e
            };
            n.isAvailable() && (N.supportedTransports[t] = n);
            n.tryConnect = function(e, t, r, i) {
                var o = new n(e, t, r),
                    s = function(e) {
                        i({
                            event: this.event,
                            error: e
                        })
                    };
                o.on(["failed", "disconnected"], s);
                o.on("wsopen", function() {
                    w.logAction(w.LOG_MINOR, "WebSocketTransport.tryConnect()", "viable transport " + o);
                    o.off(["failed", "disconnected"], s);
                    i(null, o)
                });
                o.connect()
            };
            n.prototype.createWebSocket = function(t, n) {
                var r = 0;
                if (n)
                    for (var i in n) t += (r++ ? "&" : "?") + i + "=" + n[i];
                this.uri = t;
                return new e(t)
            };
            n.prototype.toString = function() {
                return "WebSocketTransport; uri=" + this.uri
            };
            n.prototype.connect = function() {
                w.logAction(w.LOG_MINOR, "WebSocketTransport.connect()", "starting");
                U.prototype.connect.call(this);
                var e = this,
                    t = this.params,
                    n = t.options,
                    r = (n.tls ? "wss://" : "ws://") + this.wsHost + ":" + g.getPort(n) + "/";
                w.logAction(w.LOG_MINOR, "WebSocketTransport.connect()", "uri: " + r);
                this.auth.getAuthParams(function(n, i) {
                    if (!e.isDisposed) {
                        var o = "";
                        for (var s in i) o += " " + s + ": " + i[s] + ";";
                        w.logAction(w.LOG_MINOR, "WebSocketTransport.connect()", "authParams:" + o + " err: " + n);
                        if (n) e.disconnect(n);
                        else {
                            var a = t.getConnectParams(i);
                            try {
                                var u = e.wsConnection = e.createWebSocket(r, a);
                                u.binaryType = h.binaryType;
                                u.onopen = function() {
                                    e.onWsOpen()
                                };
                                u.onclose = function(t) {
                                    e.onWsClose(t)
                                };
                                u.onmessage = function(t) {
                                    e.onWsData(t.data)
                                };
                                u.onerror = function(t) {
                                    e.onWsError(t)
                                };
                                u.on && u.on("ping", function() {
                                    e.onActivity()
                                })
                            } catch (t) {
                                w.logAction(w.LOG_ERROR, "WebSocketTransport.connect()", "Unexpected exception creating websocket: err = " + (t.stack || t.message));
                                e.disconnect(t)
                            }
                        }
                    }
                })
            };
            n.prototype.send = function(e) {
                var t = this.wsConnection;
                if (t) try {
                    t.send(T.serialize(e, this.params.format))
                } catch (e) {
                    var n = "Exception from ws connection when trying to send: " + y.inspectError(e);
                    w.logAction(w.LOG_ERROR, "WebSocketTransport.send()", n);
                    this.finish("disconnected", new E(n, 5e4, 500))
                } else w.logAction(w.LOG_ERROR, "WebSocketTransport.send()", "No socket connection")
            };
            n.prototype.onWsData = function(e) {
                w.logAction(w.LOG_MICRO, "WebSocketTransport.onWsData()", "data received; length = " + e.length + "; type = " + typeof e);
                try {
                    this.onProtocolMessage(T.deserialize(e, this.format))
                } catch (e) {
                    w.logAction(w.LOG_ERROR, "WebSocketTransport.onWsData()", "Unexpected exception handing channel message: " + e.stack)
                }
            };
            n.prototype.onWsOpen = function() {
                w.logAction(w.LOG_MINOR, "WebSocketTransport.onWsOpen()", "opened WebSocket");
                this.emit("wsopen")
            };
            n.prototype.onWsClose = function(e) {
                var t, n;
                if ("object" == typeof e) {
                    t = e.wasClean;
                    n = e.code
                } else t = 1e3 == (n = e);
                delete this.wsConnection;
                if (t) {
                    w.logAction(w.LOG_MINOR, "WebSocketTransport.onWsClose()", "Cleanly closed WebSocket");
                    var r = new E("Websocket closed", 80003, 400);
                    this.finish("disconnected", r)
                } else {
                    var i = "Unclean disconnection of WebSocket ; code = " + n;
                    r = new E(i, 80003, 400);
                    w.logAction(w.LOG_MINOR, "WebSocketTransport.onWsClose()", i);
                    this.finish("disconnected", r)
                }
                this.emit("disposed")
            };
            n.prototype.onWsError = function(e) {
                w.logAction(w.LOG_MINOR, "WebSocketTransport.onError()", "Error from WebSocket: " + e.message);
                var t = this;
                y.nextTick(function() {
                    t.disconnect(e)
                })
            };
            n.prototype.dispose = function() {
                w.logAction(w.LOG_MINOR, "WebSocketTransport.dispose()", "");
                this.isDisposed = !0;
                var e = this.wsConnection;
                if (e) {
                    e.onmessage = function() {};
                    delete this.wsConnection;
                    y.nextTick(function() {
                        w.logAction(w.LOG_MICRO, "WebSocketTransport.dispose()", "closing websocket");
                        e.close()
                    })
                }
            }
        }(), function() {
            var e = 0,
                t = 1,
                n = 2,
                r = 3;

            function i(e) {
                var t = [80015, 80017, 80030];
                return !!e.code && (!G.isTokenErr(e) && (!!y.arrIn(t, e.code) || e.code >= 4e4 && e.code < 5e4))
            }

            function o(e) {
                return i(e) ? [T.fromValues({
                    action: T.Action.ERROR,
                    error: e
                })] : [T.fromValues({
                    action: T.Action.DISCONNECTED,
                    error: e
                })]
            }

            function s(e, t, n) {
                n.format = void 0;
                n.heartbeats = !0;
                U.call(this, e, t, n);
                this.stream = !("stream" in n) || n.stream;
                this.sendRequest = null;
                this.recvRequest = null;
                this.pendingCallback = null;
                this.pendingItems = null
            }
            y.inherits(s, U);
            s.REQ_SEND = e;
            s.REQ_RECV = t;
            s.REQ_RECV_POLL = n;
            s.REQ_RECV_STREAM = r;
            s.prototype.connect = function() {
                w.logAction(w.LOG_MINOR, "CometTransport.connect()", "starting");
                U.prototype.connect.call(this);
                var e = this,
                    n = this.params,
                    i = n.options,
                    s = g.getHost(i, n.host),
                    a = g.getPort(i),
                    u = i.tls ? "https://" : "http://";
                this.baseUri = u + s + ":" + a + "/comet/";
                var c = this.baseUri + "connect";
                w.logAction(w.LOG_MINOR, "CometTransport.connect()", "uri: " + c);
                this.auth.getAuthParams(function(n, i) {
                    if (n) e.disconnect(n);
                    else if (!e.isDisposed) {
                        e.authParams = i;
                        var s = e.params.getConnectParams(i);
                        "stream" in s && (e.stream = s.stream);
                        w.logAction(w.LOG_MINOR, "CometTransport.connect()", "connectParams:" + y.toQueryString(s));
                        var a = !1,
                            u = e.recvRequest = e.createRequest(c, null, s, null, e.stream ? r : t);
                        u.on("data", function(t) {
                            if (e.recvRequest) {
                                if (!a) {
                                    a = !0;
                                    e.emit("preconnect")
                                }
                                e.onData(t)
                            }
                        });
                        u.on("complete", function(t, n, r) {
                            e.recvRequest || (t = t || new E("Request cancelled", 80003, 400));
                            e.recvRequest = null;
                            e.onActivity();
                            t ? t.code ? e.onData(o(t)) : e.disconnect(t) : y.nextTick(function() {
                                e.recv()
                            })
                        });
                        u.exec()
                    }
                })
            };
            s.prototype.requestClose = function() {
                w.logAction(w.LOG_MINOR, "CometTransport.requestClose()");
                this._requestCloseOrDisconnect(!0)
            };
            s.prototype.requestDisconnect = function() {
                w.logAction(w.LOG_MINOR, "CometTransport.requestDisconnect()");
                this._requestCloseOrDisconnect(!1)
            };
            s.prototype._requestCloseOrDisconnect = function(t) {
                var n = t ? this.closeUri : this.disconnectUri;
                if (n) {
                    var r = this,
                        i = this.createRequest(n, null, this.authParams, null, e);
                    i.on("complete", function(e) {
                        if (e) {
                            w.logAction(w.LOG_ERROR, "CometTransport.request" + (t ? "Close()" : "Disconnect()"), "request returned err = " + y.inspectError(e));
                            r.finish("disconnected", e)
                        }
                    });
                    i.exec()
                }
            };
            s.prototype.dispose = function() {
                w.logAction(w.LOG_MINOR, "CometTransport.dispose()", "");
                if (!this.isDisposed) {
                    this.isDisposed = !0;
                    if (this.recvRequest) {
                        w.logAction(w.LOG_MINOR, "CometTransport.dispose()", "aborting recv request");
                        this.recvRequest.abort();
                        this.recvRequest = null
                    }
                    this.finish("disconnected", P.disconnected);
                    var e = this;
                    y.nextTick(function() {
                        e.emit("disposed")
                    })
                }
            };
            s.prototype.onConnect = function(e) {
                if (!this.isDisposed) {
                    var t = e.connectionKey;
                    U.prototype.onConnect.call(this, e);
                    var n = this.baseUri + t;
                    w.logAction(w.LOG_MICRO, "CometTransport.onConnect()", "baseUri = " + n + "; connectionKey = " + e.connectionKey);
                    this.sendUri = n + "/send";
                    this.recvUri = n + "/recv";
                    this.closeUri = n + "/close";
                    this.disconnectUri = n + "/disconnect"
                }
            };
            s.prototype.send = function(e) {
                if (this.sendRequest) {
                    this.pendingItems = this.pendingItems || [];
                    this.pendingItems.push(e)
                } else {
                    var t = this.pendingItems || [];
                    t.push(e);
                    this.pendingItems = null;
                    this.sendItems(t)
                }
            };
            s.prototype.sendAnyPending = function() {
                var e = this.pendingItems;
                if (e) {
                    this.pendingItems = null;
                    this.sendItems(e)
                }
            };
            s.prototype.sendItems = function(t) {
                var n = this,
                    r = this.sendRequest = n.createRequest(n.sendUri, null, n.authParams, this.encodeRequest(t), e);
                r.on("complete", function(e, t) {
                    e && w.logAction(w.LOG_ERROR, "CometTransport.sendItems()", "on complete: err = " + y.inspectError(e));
                    n.sendRequest = null;
                    t ? n.onData(t) : e && e.code ? n.onData(o(e)) : n.disconnect(e);
                    n.pendingItems && y.nextTick(function() {
                        n.sendRequest || n.sendAnyPending()
                    })
                });
                r.exec()
            };
            s.prototype.recv = function() {
                if (!this.recvRequest && this.isConnected) {
                    var e = this,
                        t = this.recvRequest = this.createRequest(this.recvUri, null, this.authParams, null, e.stream ? r : n);
                    t.on("data", function(t) {
                        e.onData(t)
                    });
                    t.on("complete", function(t) {
                        e.recvRequest = null;
                        e.onActivity();
                        t ? t.code ? e.onData(o(t)) : e.disconnect(t) : y.nextTick(function() {
                            e.recv()
                        })
                    });
                    t.exec()
                }
            };
            s.prototype.onData = function(e) {
                try {
                    var t = this.decodeResponse(e);
                    if (t && t.length)
                        for (var n = 0; n < t.length; n++) this.onProtocolMessage(T.fromDeserialized(t[n]))
                } catch (e) {
                    w.logAction(w.LOG_ERROR, "CometTransport.onData()", "Unexpected exception handing channel event: " + e.stack)
                }
            };
            s.prototype.encodeRequest = function(e) {
                return JSON.stringify(e)
            };
            s.prototype.decodeResponse = function(e) {
                "string" == typeof e && (e = JSON.parse(e));
                return e
            };
            s.prototype.onAuthUpdated = function(e) {
                this.authParams = {
                    access_token: e.token
                }
            };
            return s
        }()),
        q = function() {
            function e() {}

            function t(e) {
                this.channel = e;
                this.basePath = e.basePath + "/presence"
            }
            y.inherits(t, O);
            t.prototype.get = function(t, n) {
                w.logAction(w.LOG_MICRO, "Presence.get()", "channel = " + this.channel.name);
                if (void 0 === n)
                    if ("function" == typeof t) {
                        n = t;
                        t = null
                    } else {
                        if (this.channel.rest.options.promises) return y.promisify(this, "get", arguments);
                        n = e
                    } var r = this.channel.rest,
                    i = r.options.useBinaryProtocol ? "msgpack" : "json",
                    o = m.supportsLinkHeaders ? void 0 : i,
                    s = y.defaultGetHeaders(i);
                r.options.headers && y.mixin(s, r.options.headers);
                var a = this.channel.channelOptions;
                new H(r, this.basePath, s, o, function(e, t, n) {
                    return k.fromResponseBody(e, a, !n && i)
                }).get(t, n)
            };
            t.prototype.history = function(e, t) {
                w.logAction(w.LOG_MICRO, "Presence.history()", "channel = " + this.channel.name);
                this._history(e, t)
            };
            t.prototype._history = function(t, n) {
                if (void 0 === n)
                    if ("function" == typeof t) {
                        n = t;
                        t = null
                    } else {
                        if (this.channel.rest.options.promises) return y.promisify(this, "_history", arguments);
                        n = e
                    } var r = this.channel.rest,
                    i = r.options.useBinaryProtocol ? "msgpack" : "json",
                    o = m.supportsLinkHeaders ? void 0 : i,
                    s = y.defaultGetHeaders(i);
                this.channel;
                r.options.headers && y.mixin(s, r.options.headers);
                var a = this.channel.channelOptions;
                new H(r, this.basePath + "/history", s, o, function(e, t, n) {
                    return k.fromResponseBody(e, a, !n && i)
                }).get(t, n)
            };
            return t
        }(),
        D = function() {
            var e = h.msgpack;

            function t() {}

            function n(e, t, n, r, i) {
                m.supportsAuthHeaders ? e.auth.getAuthHeaders(function(e, o) {
                    e ? r(e) : i(y.mixin(o, t), n)
                }) : e.auth.getAuthParams(function(e, o) {
                    e ? r(e) : i(t, y.mixin(o, n))
                })
            }

            function r(e, t) {
                return function(n, r, i, o, s) {
                    if (!n || r) {
                        if (!o) try {
                            r = y.decodeBody(r, t)
                        } catch (t) {
                            e(t);
                            return
                        }
                        if (void 0 !== r.statusCode) {
                            var a = r.statusCode,
                                u = r.response,
                                c = r.headers;
                            if (a < 200 || a >= 300) {
                                var l = u && u.error || n;
                                l || ((l = new Error("Error in unenveloping " + r)).statusCode = a);
                                e(l, u, c, !0, a)
                            } else e(n, u, c, !0, a)
                        } else e(n, r, i, !0, s)
                    } else e(n)
                }
            }

            function i(e) {
                var t = [];
                if (e)
                    for (var n in e) t.push(n + "=" + e[n]);
                return t.join("&")
            }

            function o(e, t) {
                return e + (t ? "?" : "") + i(t)
            }

            function s(e, t, n, r) {
                return function(s, a, u, c, l) {
                    s ? w.logAction(w.LOG_MICRO, "Resource." + t + "()", "Received Error; " + o(n, r) + "; Error: " + y.inspectError(s)) : w.logAction(w.LOG_MICRO, "Resource." + t + "()", "Received; " + o(n, r) + "; Headers: " + i(u) + "; StatusCode: " + l + "; Body: " + (v.isBuffer(a) ? a.toString() : a));
                    e && e(s, a, u, c, l)
                }
            }
            y.arrForEach(m.methodsWithoutBody, function(e) {
                t[e] = function(n, r, i, o, s, a) {
                    t.do(e, n, r, null, i, o, s, a)
                }
            });
            y.arrForEach(m.methodsWithBody, function(e) {
                t[e] = function(n, r, i, o, s, a, u) {
                    t.do(e, n, r, i, o, s, a, u)
                }
            });
            t.do = function(t, i, a, u, c, l, f, h) {
                w.shouldLog(w.LOG_MICRO) && (h = s(h, t, a, l));
                if (f) {
                    h = h && r(h, f);
                    (l = l || {}).envelope = f
                }

                function p(r, s) {
                    w.shouldLog(w.LOG_MICRO) && w.logAction(w.LOG_MICRO, "Resource." + t + "()", "Sending; " + o(a, s));
                    var f = [i, a, r, u, s, function(e, t, r, o, s) {
                        e && G.isTokenErr(e) ? i.auth.authorize(null, null, function(e) {
                            e ? h(e) : n(i, c, l, h, p)
                        }) : h(e, t, r, o, s)
                    }];
                    u || f.splice(3, 1);
                    if (w.shouldLog(w.LOG_MICRO)) {
                        var d = u;
                        if ((r["content-type"] || "").indexOf("msgpack") > 0) try {
                            d = e.decode(u)
                        } catch (e) {
                            w.logAction(w.LOG_MICRO, "Resource." + t + "()", "Sending MsgPack Decoding Error: " + y.inspectError(e))
                        }
                        w.logAction(w.LOG_MICRO, "Resource." + t + "()", "Sending; " + o(a, s) + "; Body: " + d)
                    }
                    m[t].apply(this, f)
                }
                n(i, c, l, h, p)
            };
            return t
        }(),
        H = function() {
            function e(e) {
                var t = e.match(/^\.\/(\w+)\?(.*)$/);
                return t && y.parseQueryString(t[2])
            }

            function t(t) {
                "string" == typeof t && (t = t.split(","));
                for (var n = {}, r = 0; r < t.length; r++) {
                    var i = t[r].match(/^\s*<(.+)>;\s*rel="(\w+)"$/);
                    if (i) {
                        var o = e(i[1]);
                        o && (n[i[2]] = o)
                    }
                }
                return n
            }

            function n(e, t, n, r, i, o) {
                this.rest = e;
                this.path = t;
                this.headers = n;
                this.envelope = r;
                this.bodyHandler = i;
                this.useHttpPaginatedResponse = o || !1
            }
            y.arrForEach(m.methodsWithoutBody, function(e) {
                n.prototype[e] = function(t, n) {
                    var r = this;
                    D[e](r.rest, r.path, r.headers, t, r.envelope, function(e, t, i, o, s) {
                        r.handlePage(e, t, i, o, s, n)
                    })
                }
            });
            y.arrForEach(m.methodsWithBody, function(e) {
                n.prototype[e] = function(t, n, r) {
                    var i = this;
                    D[e](i.rest, i.path, n, i.headers, t, i.envelope, function(e, t, n, o, s) {
                        r && i.handlePage(e, t, n, o, s, r)
                    })
                }
            });

            function r(e, t, n) {
                return !(n && (t || "number" == typeof e.code))
            }
            n.prototype.handlePage = function(e, n, s, a, u, c) {
                if (e && r(e, n, this.useHttpPaginatedResponse)) {
                    w.logAction(w.LOG_ERROR, "PaginatedResource.handlePage()", "Unexpected error getting resource: err = " + y.inspectError(e));
                    c(e)
                } else {
                    var l, f, h;
                    try {
                        l = this.bodyHandler(n, s, a)
                    } catch (t) {
                        c(e || t);
                        return
                    }
                    s && (f = s.Link || s.link) && (h = t(f));
                    this.useHttpPaginatedResponse ? c(null, new o(this, l, s, u, h, e)) : c(null, new i(this, l, h))
                }
            };

            function i(e, t, n) {
                this.resource = e;
                this.items = t;
                if (n) {
                    var r = this;
                    "first" in n && (this.first = function(e) {
                        r.get(n.first, e)
                    });
                    "current" in n && (this.current = function(e) {
                        r.get(n.current, e)
                    });
                    this.next = function(e) {
                        "next" in n ? r.get(n.next, e) : e(null, null)
                    };
                    this.hasNext = function() {
                        return "next" in n
                    };
                    this.isLast = function() {
                        return !this.hasNext()
                    }
                }
            }
            i.prototype.get = function(e, t) {
                var n = this.resource;
                D.get(n.rest, n.path, n.headers, e, n.envelope, function(e, r, i, o, s) {
                    n.handlePage(e, r, i, o, s, t)
                })
            };

            function o(e, t, n, r, o, s) {
                i.call(this, e, t, o);
                this.statusCode = r;
                this.success = r < 300 && r >= 200;
                this.headers = n;
                this.errorCode = s && s.code;
                this.errorMessage = s && s.message
            }
            y.inherits(o, i);
            return n
        }(),
        G = function() {
            var e, t, n = Math.pow(2, 17);

            function r() {}

            function i() {
                return ("000000" + Math.floor(1e16 * Math.random())).slice(-16)
            }

            function o(e) {
                if (!y.isErrorInfo(e)) return new E(y.inspectError(e), e.code || 40170, e.statusCode || 401);
                if (!e.code)
                    if (403 === e.statusCode) e.code = 40300;
                    else {
                        e.code = 40170;
                        e.statusCode = 401
                    } return e
            }
            t = _.encode;
            e = function(e, t) {
                return a.HmacSHA256(e, t).toString(a.enc.Base64)
            };

            function s(e) {
                if (!e) return "";
                "string" == typeof e && (e = JSON.parse(e));
                var t = {},
                    n = y.keysArray(e, !0);
                if (!n) return "";
                n.sort();
                for (var r = 0; r < n.length; r++) t[n[r]] = e[n[r]].sort();
                return JSON.stringify(t)
            }

            function u(e) {
                if (e.authCallback) w.logAction(w.LOG_MINOR, "Auth()", "using token auth with authCallback");
                else if (e.authUrl) w.logAction(w.LOG_MINOR, "Auth()", "using token auth with authUrl");
                else if (e.key) w.logAction(w.LOG_MINOR, "Auth()", "using token auth with client-side signing");
                else {
                    if (!e.tokenDetails) {
                        var t = "authOptions must include valid authentication parameters";
                        w.logAction(w.LOG_ERROR, "Auth()", t);
                        throw new Error(t)
                    }
                    w.logAction(w.LOG_MINOR, "Auth()", "using token auth with supplied token only")
                }
            }

            function c(e) {
                return "useTokenAuth" in e && !e.useTokenAuth
            }

            function l(e) {
                return e.useTokenAuth || !c(e) && (e.authCallback || e.authUrl || e.token || e.tokenDetails)
            }

            function f(e) {
                return !e.key && !e.authCallback && !e.authUrl
            }
            var h = 0;

            function p() {
                return h++
            }

            function d(t, n) {
                this.client = t;
                this.tokenParams = n.defaultTokenParams || {};
                this.currentTokenRequestId = null;
                this.waitingForTokenRequest = null;
                if (l(n)) {
                    if (n.key && !e) {
                        var r = "client-side token request signing not supported";
                        w.logAction(w.LOG_ERROR, "Auth()", r);
                        throw new Error(r)
                    }
                    f(n) && w.logAction(w.LOG_ERROR, "Auth()", "Warning: library initialized with a token literal without any way to renew the token when it expires (no authUrl, authCallback, or key). See https://help.ably.io/error/40171 for help");
                    this._saveTokenOptions(n.defaultTokenParams, n);
                    u(this.authOptions)
                } else {
                    if (!n.key) {
                        r = "No authentication options provided; need one of: key, authUrl, or authCallback (or for testing only, token or tokenDetails)";
                        w.logAction(w.LOG_ERROR, "Auth()", r);
                        throw new E(r, 40160, 401)
                    }
                    w.logAction(w.LOG_MINOR, "Auth()", "anonymous, using basic auth");
                    this._saveBasicOptions(n)
                }
            }
            d.prototype.authorize = function(e, t, n) {
                if ("function" != typeof e || n) {
                    if ("function" == typeof t && !n) {
                        n = t;
                        t = null
                    }
                } else {
                    n = e;
                    t = e = null
                }
                if (!n) {
                    if (this.client.options.promises) return y.promisify(this, "authorize", arguments);
                    n = r
                }
                var i = this;
                if (t && t.key && this.authOptions.key !== t.key) throw new E("Unable to update auth options with incompatible key", 40102, 401);
                if (t && "force" in t) {
                    w.logAction(w.LOG_ERROR, "Auth.authorize", "Deprecation warning: specifying {force: true} in authOptions is no longer necessary, authorize() now always gets a new token. Please remove this, as in version 1.0 and later, having a non-null authOptions will overwrite stored library authOptions, which may not be what you want");
                    y.isOnlyPropIn(t, "force") && (t = null)
                }
                this._forceNewToken(e, t, function(e, t) {
                    e ? n(e) : i.client.connection ? i.client.connection.connectionManager.onAuthUpdated(t, n) : n(null, t)
                })
            };
            d.prototype.authorise = function() {
                w.deprecated("Auth.authorise", "Auth.authorize");
                this.authorize.apply(this, arguments)
            };
            d.prototype._forceNewToken = function(e, t, n) {
                var r = this;
                this.tokenDetails = null;
                this._saveTokenOptions(e, t);
                u(this.authOptions);
                this._ensureValidAuthCredentials(!0, function(e, t) {
                    delete r.tokenParams.timestamp;
                    delete r.authOptions.queryTime;
                    n(e, t)
                })
            };
            d.prototype.requestToken = function(e, t, i) {
                if ("function" != typeof e || i) {
                    if ("function" == typeof t && !i) {
                        i = t;
                        t = null
                    }
                } else {
                    i = e;
                    t = e = null
                }
                if (!i && this.client.options.promises) return y.promisify(this, "requestToken", arguments);
                t = t || this.authOptions;
                e = e || y.copy(this.tokenParams);
                i = i || r;
                var a, u = this.client;
                if (t.authCallback) {
                    w.logAction(w.LOG_MINOR, "Auth.requestToken()", "using token auth with authCallback");
                    a = t.authCallback
                } else if (t.authUrl) {
                    w.logAction(w.LOG_MINOR, "Auth.requestToken()", "using token auth with authUrl");
                    a = function(e, r) {
                        var i = y.mixin({
                                accept: "application/json, text/plain"
                            }, t.authHeaders),
                            o = t.authMethod && "post" === t.authMethod.toLowerCase();
                        if (!o) {
                            var s = t.authUrl.indexOf("?");
                            if (s > -1) {
                                var a = y.parseQueryString(t.authUrl.slice(s));
                                t.authUrl = t.authUrl.slice(0, s);
                                t.authParams = y.mixin(a, t.authParams)
                            }
                        }
                        var c = y.mixin({}, t.authParams || {}, e),
                            l = function(e, t, i, o) {
                                var s;
                                if (e) w.logAction(w.LOG_MICRO, "Auth.requestToken().tokenRequestCallback", "Received Error: " + y.inspectError(e));
                                else {
                                    s = i["content-type"];
                                    w.logAction(w.LOG_MICRO, "Auth.requestToken().tokenRequestCallback", "Received; content-type: " + s + "; body: " + y.inspectBody(t))
                                }
                                if (e || o) return r(e, t);
                                v.isBuffer(t) && (t = t.toString());
                                if (s) {
                                    var a = s.indexOf("application/json") > -1,
                                        u = s.indexOf("text/plain") > -1 || s.indexOf("application/jwt") > -1;
                                    if (a || u) {
                                        if (a) {
                                            if (t.length > n) {
                                                r(new E("authUrl response exceeded max permitted length", 40170, 401));
                                                return
                                            }
                                            try {
                                                t = JSON.parse(t)
                                            } catch (e) {
                                                r(new E("Unexpected error processing authURL response; err = " + e.message, 40170, 401));
                                                return
                                            }
                                        }
                                        r(null, t, s)
                                    } else r(new E("authUrl responded with unacceptable content-type " + s + ", should be either text/plain, application/jwt or application/json", 40170, 401))
                                } else r(new E("authUrl response is missing a content-type header", 40170, 401))
                            };
                        w.logAction(w.LOG_MICRO, "Auth.requestToken().tokenRequestCallback", "Requesting token from " + t.authUrl + "; Params: " + JSON.stringify(c) + "; method: " + (o ? "POST" : "GET"));
                        if (o) {
                            var f = i || {};
                            f["content-type"] = "application/x-www-form-urlencoded";
                            var h = y.toQueryString(c).slice(1);
                            m.postUri(u, t.authUrl, f, h, {}, l)
                        } else m.getUri(u, t.authUrl, i || {}, c, l)
                    }
                } else {
                    if (!t.key) {
                        var c = "Need a new token, but authOptions does not include any way to request one (no authUrl, authCallback, or key)";
                        w.logAction(w.LOG_ERROR, "Auth()", "library initialized with a token literal without any way to renew the token when it expires (no authUrl, authCallback, or key). See https://help.ably.io/error/40171 for help");
                        i(new E(c, 40171, 403));
                        return
                    }
                    var l = this;
                    w.logAction(w.LOG_MINOR, "Auth.requestToken()", "using token auth with client-side signing");
                    a = function(e, n) {
                        l.createTokenRequest(e, t, n)
                    }
                }
                "capability" in e && (e.capability = s(e.capability));
                var f = function(e, n) {
                        var r = "/keys/" + e.keyName + "/requestToken",
                            i = function(e) {
                                return u.baseUri(e) + r
                            },
                            o = y.defaultPostHeaders();
                        t.requestHeaders && y.mixin(o, t.requestHeaders);
                        w.logAction(w.LOG_MICRO, "Auth.requestToken().requestToken", "Sending POST to " + r + "; Token params: " + JSON.stringify(e));
                        e = JSON.stringify(e);
                        m.post(u, i, o, e, null, n)
                    },
                    h = !1,
                    p = this.client.options.timeouts.realtimeRequestTimeout,
                    d = setTimeout(function() {
                        h = !0;
                        var e = "Token request callback timed out after " + p / 1e3 + " seconds";
                        w.logAction(w.LOG_ERROR, "Auth.requestToken()", e);
                        i(new E(e, 40170, 401))
                    }, p);
                a(e, function(e, r, s) {
                    if (!h) {
                        clearTimeout(d);
                        if (e) {
                            w.logAction(w.LOG_ERROR, "Auth.requestToken()", "token request signing call returned error; err = " + y.inspectError(e));
                            i(o(e))
                        } else if ("string" != typeof r)
                            if ("object" == typeof r) {
                                var a = JSON.stringify(r).length;
                                if (a > n && !t.suppressMaxLengthCheck) i(new E("Token request/details object exceeded max permitted stringified size (was " + a + " bytes)", 40170, 401));
                                else if ("issued" in r) i(null, r);
                                else if ("keyName" in r) f(r, function(e, t, n, r) {
                                    if (e) {
                                        w.logAction(w.LOG_ERROR, "Auth.requestToken()", "token request API call returned error; err = " + y.inspectError(e));
                                        i(o(e))
                                    } else {
                                        r || (t = JSON.parse(t));
                                        w.logAction(w.LOG_MINOR, "Auth.getToken()", "token received");
                                        i(null, t)
                                    }
                                });
                                else {
                                    u = "Expected token request callback to call back with a token string, token request object, or token details object";
                                    w.logAction(w.LOG_ERROR, "Auth.requestToken()", u);
                                    i(new E(u, 40170, 401))
                                }
                            } else {
                                var u = "Expected token request callback to call back with a token string or token request/details object, but got a " + typeof r;
                                w.logAction(w.LOG_ERROR, "Auth.requestToken()", u);
                                i(new E(u, 40170, 401))
                            }
                        else 0 === r.length ? i(new E("Token string is empty", 40170, 401)) : r.length > n ? i(new E("Token string exceeded max permitted length (was " + r.length + " bytes)", 40170, 401)) : "undefined" === r || "null" === r ? i(new E("Token string was literal null/undefined", 40170, 401)) : "{" !== r[0] || s && s.indexOf("application/jwt") > -1 ? i(null, {
                            token: r
                        }) : i(new E("Token was double-encoded; make sure you're not JSON-encoding an already encoded token request or details", 40170, 401))
                    }
                })
            };
            d.prototype.createTokenRequest = function(t, n, r) {
                if ("function" != typeof t || r) {
                    if ("function" == typeof n && !r) {
                        r = n;
                        n = null
                    }
                } else {
                    r = t;
                    n = t = null
                }
                if (!r && this.client.options.promises) return y.promisify(this, "createTokenRequest", arguments);
                n = n || this.authOptions;
                t = t || y.copy(this.tokenParams);
                var o = n.key;
                if (o) {
                    var a = o.split(":"),
                        u = a[0],
                        c = a[1];
                    if (c)
                        if ("" !== t.clientId) {
                            "capability" in t && (t.capability = s(t.capability));
                            var l, f = y.mixin({
                                    keyName: u
                                }, t),
                                h = t.clientId || "",
                                p = t.ttl || "",
                                d = t.capability || "",
                                g = this;
                            l = function() {
                                var t = f.nonce || (f.nonce = i()),
                                    n = f.timestamp,
                                    o = f.keyName + "\n" + p + "\n" + d + "\n" + h + "\n" + n + "\n" + t + "\n";
                                f.mac = f.mac || e(o, c);
                                w.logAction(w.LOG_MINOR, "Auth.getTokenRequest()", "generated signed request");
                                r(null, f)
                            }, f.timestamp ? l() : g.getTimestamp(n && n.queryTime, function(e, t) {
                                if (e) r(e);
                                else {
                                    f.timestamp = t;
                                    l()
                                }
                            })
                        } else r(new E("clientId can’t be an empty string", 40012, 400));
                    else r(new E("Invalid key specified", 40101, 403))
                } else r(new E("No key specified", 40101, 403))
            };
            d.prototype.getAuthParams = function(e) {
                "basic" == this.method ? e(null, {
                    key: this.key
                }) : this._ensureValidAuthCredentials(!1, function(t, n) {
                    t ? e(t) : e(null, {
                        access_token: n.token
                    })
                })
            };
            d.prototype.getAuthHeaders = function(e) {
                "basic" == this.method ? e(null, {
                    authorization: "Basic " + this.basicKey
                }) : this._ensureValidAuthCredentials(!1, function(n, r) {
                    n ? e(n) : e(null, {
                        authorization: "Bearer " + t(r.token)
                    })
                })
            };
            d.prototype.getTimestamp = function(e, t) {
                this.isTimeOffsetSet() || !e && !this.authOptions.queryTime ? t(null, this.getTimestampUsingOffset()) : this.client.time(t)
            };
            d.prototype.getTimestampUsingOffset = function() {
                return y.now() + (this.client.serverTimeOffset || 0)
            };
            d.prototype.isTimeOffsetSet = function() {
                return null !== this.client.serverTimeOffset
            };
            d.prototype._saveBasicOptions = function(e) {
                this.method = "basic";
                this.key = e.key;
                this.basicKey = t(e.key);
                this.authOptions = e || {};
                "clientId" in e && this._userSetClientId(e.clientId)
            };
            d.prototype._saveTokenOptions = function(e, t) {
                this.method = "token";
                e && (this.tokenParams = e);
                if (t) {
                    t.token && (t.tokenDetails = "string" == typeof t.token ? {
                        token: t.token
                    } : t.token);
                    t.tokenDetails && (this.tokenDetails = t.tokenDetails);
                    "clientId" in t && this._userSetClientId(t.clientId);
                    this.authOptions = t
                }
            };
            d.prototype._ensureValidAuthCredentials = function(e, t) {
                var n = this,
                    i = this.tokenDetails;
                if (i) {
                    if (this._tokenClientIdMismatch(i.clientId)) {
                        t(new E("Mismatch between clientId in token (" + i.clientId + ") and current clientId (" + this.clientId + ")", 40102, 403));
                        return
                    }
                    if (!this.isTimeOffsetSet() || !i.expires || i.expires >= this.getTimestampUsingOffset()) {
                        w.logAction(w.LOG_MINOR, "Auth.getToken()", "using cached token; expires = " + i.expires);
                        t(null, i);
                        return
                    }
                    w.logAction(w.LOG_MINOR, "Auth.getToken()", "deleting expired token");
                    this.tokenDetails = null
                }(this.waitingForTokenRequest || (this.waitingForTokenRequest = S())).push(t);
                if (null === this.currentTokenRequestId || e) {
                    var o = this.currentTokenRequestId = p();
                    this.requestToken(this.tokenParams, this.authOptions, function(e, t) {
                        if (n.currentTokenRequestId > o) w.logAction(w.LOG_MINOR, "Auth._ensureValidAuthCredentials()", "Discarding token request response; overtaken by newer one");
                        else {
                            n.currentTokenRequestId = null;
                            var i = n.waitingForTokenRequest || r;
                            n.waitingForTokenRequest = null;
                            e ? i(e) : i(null, n.tokenDetails = t)
                        }
                    })
                }
            };
            d.prototype._userSetClientId = function(e) {
                if ("string" != typeof e && null !== e) throw new E("clientId must be either a string or null", 40012, 400);
                if ("*" === e) throw new E('Can’t use "*" as a clientId as that string is reserved. (To change the default token request behaviour to use a wildcard clientId, instantiate the library with {defaultTokenParams: {clientId: "*"}}), or if calling authorize(), pass it in as a tokenParam: authorize({clientId: "*"}, authOptions)', 40012, 400);
                var t = this._uncheckedSetClientId(e);
                if (t) throw t
            };
            d.prototype._uncheckedSetClientId = function(e) {
                if (this._tokenClientIdMismatch(e)) {
                    var t = "Unexpected clientId mismatch: client has " + this.clientId + ", requested " + e,
                        n = new E(t, 40102, 401);
                    w.logAction(w.LOG_ERROR, "Auth._uncheckedSetClientId()", t);
                    return n
                }
                this.clientId = this.tokenParams.clientId = e;
                return null
            };
            d.prototype._tokenClientIdMismatch = function(e) {
                return this.clientId && "*" !== this.clientId && e && "*" !== e && this.clientId !== e
            };
            d.isTokenErr = function(e) {
                return e.code && e.code >= 40140 && e.code < 40150
            };
            return d
        }(),
        B = function() {
            var e = function() {},
                t = h.msgpack;

            function n(e) {
                if (!(this instanceof n)) return new n(e);
                if (!e) {
                    var t = "no options provided";
                    w.logAction(w.LOG_ERROR, "Rest()", t);
                    throw new Error(t)
                }(e = g.objectifyOptions(e)).log && w.setLog(e.log.level, e.log.handler);
                w.logAction(w.LOG_MICRO, "Rest()", "initialized with clientOptions " + y.inspect(e));
                this.options = g.normaliseOptions(e);
                if (e.key) {
                    var i = e.key.match(/^([^:\s]+):([^:.\s]+)$/);
                    if (!i) {
                        t = "invalid key parameter";
                        w.logAction(w.LOG_ERROR, "Rest()", t);
                        throw new Error(t)
                    }
                    e.keyName = i[1];
                    e.keySecret = i[2]
                }
                if ("clientId" in e) {
                    if ("string" != typeof e.clientId && null !== e.clientId) throw new E("clientId must be either a string or null", 40012, 400);
                    if ("*" === e.clientId) throw new E('Can’t use "*" as a clientId as that string is reserved. (To change the default token request behaviour to use a wildcard clientId, use {defaultTokenParams: {clientId: "*"}})', 40012, 400)
                }
                w.logAction(w.LOG_MINOR, "Rest()", "started; version = " + g.libstring);
                this.baseUri = this.authority = function(t) {
                    return g.getHttpScheme(e) + t + ":" + g.getPort(e, !1)
                };
                this._currentFallback = null;
                this.serverTimeOffset = null;
                this.auth = new G(this, e);
                this.channels = new r(this);
                this.push = new W(this)
            }
            n.prototype.stats = function(t, n) {
                if (void 0 === n)
                    if ("function" == typeof t) {
                        n = t;
                        t = null
                    } else {
                        if (this.options.promises) return y.promisify(this, "stats", arguments);
                        n = e
                    } var r = y.defaultGetHeaders(),
                    i = this.options.useBinaryProtocol ? "msgpack" : "json",
                    o = m.supportsLinkHeaders ? void 0 : i;
                this.options.headers && y.mixin(r, this.options.headers);
                new H(this, "/stats", r, o, function(e, t, n) {
                    for (var r = n ? e : JSON.parse(e), i = 0; i < r.length; i++) r[i] = R.fromValues(r[i]);
                    return r
                }).get(t, n)
            };
            n.prototype.time = function(t, n) {
                if (void 0 === n)
                    if ("function" == typeof t) {
                        n = t;
                        t = null
                    } else {
                        if (this.options.promises) return y.promisify(this, "time", arguments);
                        n = e
                    } var r = y.defaultGetHeaders();
                this.options.headers && y.mixin(r, this.options.headers);
                var i = this,
                    o = function(e) {
                        return i.authority(e) + "/time"
                    };
                m.get(this, o, r, t, function(e, t, r, o) {
                    if (e) n(e);
                    else {
                        o || (t = JSON.parse(t));
                        var s = t[0];
                        if (s) {
                            i.serverTimeOffset = s - y.now();
                            n(null, s)
                        } else {
                            (e = new Error("Internal error (unexpected result type from GET /time)")).statusCode = 500;
                            n(e)
                        }
                    }
                })
            };
            n.prototype.request = function(n, r, i, o, s, a) {
                var u = this.options.useBinaryProtocol,
                    c = u ? t.encode : JSON.stringify,
                    l = u ? t.decode : JSON.parse,
                    f = u ? "msgpack" : "json",
                    h = m.supportsLinkHeaders ? void 0 : f;
                i = i || {};
                var p = "get" == (n = n.toLowerCase()) ? y.defaultGetHeaders(f) : y.defaultPostHeaders(f);
                if (void 0 === a) {
                    if (this.options.promises) return y.promisify(this, "request", [n, r, i, o, s]);
                    a = e
                }
                "string" != typeof o && (o = c(o));
                this.options.headers && y.mixin(p, this.options.headers);
                s && y.mixin(p, s);
                var d = new H(this, r, p, h, function(e, t, n) {
                    return y.ensureArray(n ? e : l(e))
                }, !0);
                if (!y.arrIn(m.methods, n)) throw new E("Unsupported method " + n, 40500, 405);
                y.arrIn(m.methodsWithBody, n) ? d[n](i, o, a) : d[n](i, a)
            };
            n.prototype.setLog = function(e) {
                w.setLog(e.level, e.handler)
            };

            function r(e) {
                this.rest = e;
                this.attached = {}
            }
            r.prototype.get = function(e, t) {
                e = String(e);
                var n = this.attached[e];
                n ? t && n.setOptions(t) : this.attached[e] = n = new J(this.rest, e, t);
                return n
            };
            r.prototype.release = function(e) {
                delete this.attached[String(e)]
            };
            return n
        }();
    B.Promise = function(e) {
        (e = g.objectifyOptions(e)).promises = !0;
        return new B(e)
    };
    B.Callbacks = B;
    var z = function() {
        function e(n) {
            if (!(this instanceof e)) return new e(n);
            w.logAction(w.LOG_MINOR, "Realtime()", "");
            B.call(this, n);
            this.connection = new V(this, this.options);
            this.channels = new t(this);
            !1 !== n.autoConnect && this.connect()
        }
        y.inherits(e, B);
        e.prototype.connect = function() {
            w.logAction(w.LOG_MINOR, "Realtime.connect()", "");
            this.connection.connect()
        };
        e.prototype.close = function() {
            w.logAction(w.LOG_MINOR, "Realtime.close()", "");
            this.connection.close()
        };

        function t(e) {
            O.call(this);
            this.realtime = e;
            this.all = {};
            this.inProgress = {};
            var t = this;
            e.connection.connectionManager.on("transport.active", function() {
                t.onTransportActive()
            })
        }
        y.inherits(t, O);
        t.prototype.onChannelMessage = function(e) {
            var t = e.channel;
            if (void 0 !== t) {
                var n = this.all[t];
                n ? n.onMessage(e) : w.logAction(w.LOG_ERROR, "Channels.onChannelMessage()", "received event for non-existent channel: " + t)
            } else w.logAction(w.LOG_ERROR, "Channels.onChannelMessage()", "received event unspecified channel, action = " + e.action)
        };
        t.prototype.onTransportActive = function() {
            for (var e in this.all) {
                var t = this.all[e];
                "attaching" === t.state || "detaching" === t.state ? t.checkPendingState() : "suspended" === t.state && t.attach()
            }
        };
        t.prototype.reattach = function(e) {
            for (var t in this.all) {
                var n = this.all[t];
                "attached" === n.state && n.requestState("attaching", e)
            }
        };
        t.prototype.resetAttachedMsgIndicators = function() {
            for (var e in this.all) {
                var t = this.all[e];
                "attached" === t.state && (t._attachedMsgIndicator = !1)
            }
        };
        t.prototype.checkAttachedMsgIndicators = function(e) {
            for (var t in this.all) {
                var n = this.all[t];
                if ("attached" === n.state && !1 === n._attachedMsgIndicator) {
                    var r = "30s after a resume, found channel which has not received an attached; channelId = " + t + "; connectionId = " + e;
                    w.logAction(w.LOG_ERROR, "Channels.checkAttachedMsgIndicators()", r);
                    I.report("error", r, "channel-no-attached-after-resume");
                    n.requestState("attaching")
                }
            }
        };
        t.prototype.propogateConnectionInterruption = function(e, t) {
            var n = ["attaching", "attached", "detaching", "suspended"],
                r = {
                    closing: "detached",
                    closed: "detached",
                    failed: "failed",
                    suspended: "suspended"
                } [e];
            for (var i in this.all) {
                var o = this.all[i];
                y.arrIn(n, o.state) && o.notifyState(r, t)
            }
        };
        t.prototype.get = function(e, t) {
            e = String(e);
            var n = this.all[e];
            n ? t && n.setOptions(t) : n = this.all[e] = new Y(this.realtime, e, t);
            return n
        };
        t.prototype.release = function(e) {
            this.all[e] && delete this.all[e]
        };
        t.prototype.setInProgress = function(e, t, n) {
            this.inProgress[e.name] = this.inProgress[e.name] || {};
            this.inProgress[e.name][t] = n;
            !n && this.hasNopending() && this.emit("nopending")
        };
        t.prototype.onceNopending = function(e) {
            this.hasNopending() ? e() : this.once("nopending", e)
        };
        t.prototype.hasNopending = function() {
            return y.arrEvery(y.valuesArray(this.inProgress, !0), function(e) {
                return !y.containsValue(e, !0)
            })
        };
        return e
    }();
    z.Promise = function(e) {
        (e = g.objectifyOptions(e)).promises = !0;
        return new z(e)
    };
    z.Callbacks = z;
    var F = function() {
            function e(e, t, n, r) {
                this.previous = e;
                this.current = t;
                n && (this.retryIn = n);
                r && (this.reason = r)
            }
            return e
        }(),
        K = function() {
            function e(e, t, n, r) {
                this.previous = e;
                this.current = t;
                "attached" === t && (this.resumed = n);
                r && (this.reason = r)
            }
            return e
        }(),
        V = function() {
            function e() {}

            function t(e, t) {
                O.call(this);
                this.ably = e;
                this.connectionManager = new N(e, t);
                this.state = this.connectionManager.state.state;
                this.key = void 0;
                this.id = void 0;
                this.serial = void 0;
                this.timeSerial = void 0;
                this.recoveryKey = void 0;
                this.errorReason = null;
                var n = this;
                this.connectionManager.on("connectionstate", function(e) {
                    var t = n.state = e.current;
                    y.nextTick(function() {
                        n.emit(t, e)
                    })
                });
                this.connectionManager.on("update", function(e) {
                    y.nextTick(function() {
                        n.emit("update", e)
                    })
                })
            }
            y.inherits(t, O);
            t.prototype.whenState = function(e, t) {
                O.prototype.whenState.call(this, e, this.state, t, new F(void 0, e))
            };
            t.prototype.connect = function() {
                w.logAction(w.LOG_MINOR, "Connection.connect()", "");
                this.connectionManager.requestState({
                    state: "connecting"
                })
            };
            t.prototype.ping = function(t) {
                w.logAction(w.LOG_MINOR, "Connection.ping()", "");
                if (!t) {
                    if (this.ably.options.promises) return y.promisify(this, "ping", arguments);
                    t = e
                }
                this.connectionManager.ping(null, t)
            };
            t.prototype.close = function() {
                w.logAction(w.LOG_MINOR, "Connection.close()", "connectionKey = " + this.key);
                this.connectionManager.requestState({
                    state: "closing"
                })
            };
            return t
        }(),
        W = function() {
            var e = function() {};

            function t(e) {
                this.rest = e;
                this.admin = new n(e)
            }

            function n(e) {
                this.rest = e;
                this.deviceRegistrations = new r(e);
                this.channelSubscriptions = new i(e)
            }
            n.prototype.publish = function(t, n, r) {
                var i = this.rest,
                    o = i.options.useBinaryProtocol ? "msgpack" : "json",
                    s = y.mixin({
                        recipient: t
                    }, n),
                    a = y.defaultPostHeaders(o),
                    u = {};
                if ("function" != typeof r) {
                    if (this.rest.options.promises) return y.promisify(this, "publish", arguments);
                    r = e
                }
                i.options.headers && y.mixin(a, i.options.headers);
                i.options.pushFullWait && y.mixin(u, {
                    fullWait: "true"
                });
                s = y.encodeBody(s, o);
                D.post(i, "/push/publish", s, a, u, !1, function(e) {
                    r(e)
                })
            };

            function r(e) {
                this.rest = e
            }
            r.prototype.save = function(t, n) {
                var r = this.rest,
                    i = r.options.useBinaryProtocol ? "msgpack" : "json",
                    o = C.fromValues(t),
                    s = y.defaultPostHeaders(i),
                    a = {};
                if ("function" != typeof n) {
                    if (this.rest.options.promises) return y.promisify(this, "save", arguments);
                    n = e
                }
                r.options.headers && y.mixin(s, r.options.headers);
                r.options.pushFullWait && y.mixin(a, {
                    fullWait: "true"
                });
                o = y.encodeBody(o, i);
                D.put(r, "/push/deviceRegistrations/" + encodeURIComponent(t.id), o, s, a, !1, function(e, t, r, o) {
                    n(e, !e && C.fromResponseBody(t, !o && i))
                })
            };
            r.prototype.get = function(t, n) {
                var r = this.rest,
                    i = r.options.useBinaryProtocol ? "msgpack" : "json",
                    o = y.defaultGetHeaders(i),
                    s = t.id || t;
                if ("function" != typeof n) {
                    if (this.rest.options.promises) return y.promisify(this, "get", arguments);
                    n = e
                }
                if ("string" == typeof s && s.length) {
                    r.options.headers && y.mixin(o, r.options.headers);
                    D.get(r, "/push/deviceRegistrations/" + encodeURIComponent(s), o, {}, !1, function(e, t, r, o) {
                        n(e, !e && C.fromResponseBody(t, !o && i))
                    })
                } else n(new E("First argument to DeviceRegistrations#get must be a deviceId string or DeviceDetails", 4e4, 400))
            };
            r.prototype.list = function(t, n) {
                var r = this.rest,
                    i = r.options.useBinaryProtocol ? "msgpack" : "json",
                    o = m.supportsLinkHeaders ? void 0 : i,
                    s = y.defaultGetHeaders(i);
                if ("function" != typeof n) {
                    if (this.rest.options.promises) return y.promisify(this, "list", arguments);
                    n = e
                }
                r.options.headers && y.mixin(s, r.options.headers);
                new H(r, "/push/deviceRegistrations", s, o, function(e, t, n) {
                    return C.fromResponseBody(e, !n && i)
                }).get(t, n)
            };
            r.prototype.remove = function(t, n) {
                var r = this.rest,
                    i = r.options.useBinaryProtocol ? "msgpack" : "json",
                    o = y.defaultGetHeaders(i),
                    s = {},
                    a = t.id || t;
                if ("function" != typeof n) {
                    if (this.rest.options.promises) return y.promisify(this, "remove", arguments);
                    n = e
                }
                if ("string" == typeof a && a.length) {
                    r.options.headers && y.mixin(o, r.options.headers);
                    r.options.pushFullWait && y.mixin(s, {
                        fullWait: "true"
                    });
                    D.delete(r, "/push/deviceRegistrations/" + encodeURIComponent(a), o, s, !1, function(e) {
                        n(e)
                    })
                } else n(new E("First argument to DeviceRegistrations#remove must be a deviceId string or DeviceDetails", 4e4, 400))
            };
            r.prototype.removeWhere = function(t, n) {
                var r = this.rest,
                    i = r.options.useBinaryProtocol ? "msgpack" : "json",
                    o = y.defaultGetHeaders(i);
                if ("function" != typeof n) {
                    if (this.rest.options.promises) return y.promisify(this, "removeWhere", arguments);
                    n = e
                }
                r.options.headers && y.mixin(o, r.options.headers);
                r.options.pushFullWait && y.mixin(t, {
                    fullWait: "true"
                });
                D.delete(r, "/push/deviceRegistrations", o, t, !1, function(e) {
                    n(e)
                })
            };

            function i(e) {
                this.rest = e
            }
            i.prototype.save = function(t, n) {
                var r = this.rest,
                    i = r.options.useBinaryProtocol ? "msgpack" : "json",
                    o = M.fromValues(t),
                    s = y.defaultPostHeaders(i),
                    a = {};
                if ("function" != typeof n) {
                    if (this.rest.options.promises) return y.promisify(this, "save", arguments);
                    n = e
                }
                r.options.headers && y.mixin(s, r.options.headers);
                r.options.pushFullWait && y.mixin(a, {
                    fullWait: "true"
                });
                o = y.encodeBody(o, i);
                D.post(r, "/push/channelSubscriptions", o, s, a, !1, function(e, t, r, o) {
                    n(e, !e && M.fromResponseBody(t, !o && i))
                })
            };
            i.prototype.list = function(t, n) {
                var r = this.rest,
                    i = r.options.useBinaryProtocol ? "msgpack" : "json",
                    o = m.supportsLinkHeaders ? void 0 : i,
                    s = y.defaultGetHeaders(i);
                if ("function" != typeof n) {
                    if (this.rest.options.promises) return y.promisify(this, "list", arguments);
                    n = e
                }
                r.options.headers && y.mixin(s, r.options.headers);
                new H(r, "/push/channelSubscriptions", s, o, function(e, t, n) {
                    return M.fromResponseBody(e, !n && i)
                }).get(t, n)
            };
            i.prototype.removeWhere = function(t, n) {
                var r = this.rest,
                    i = r.options.useBinaryProtocol ? "msgpack" : "json",
                    o = y.defaultGetHeaders(i);
                if ("function" != typeof n) {
                    if (this.rest.options.promises) return y.promisify(this, "removeWhere", arguments);
                    n = e
                }
                r.options.headers && y.mixin(o, r.options.headers);
                r.options.pushFullWait && y.mixin(t, {
                    fullWait: "true"
                });
                D.delete(r, "/push/channelSubscriptions", o, t, !1, function(e) {
                    n(e)
                })
            };
            i.prototype.remove = i.prototype.removeWhere;
            i.prototype.listChannels = function(t, n) {
                var r = this.rest,
                    i = r.options.useBinaryProtocol ? "msgpack" : "json",
                    o = m.supportsLinkHeaders ? void 0 : i,
                    s = y.defaultGetHeaders(i);
                if ("function" != typeof n) {
                    if (this.rest.options.promises) return y.promisify(this, "listChannels", arguments);
                    n = e
                }
                r.options.headers && y.mixin(s, r.options.headers);
                r.options.pushFullWait && y.mixin(t, {
                    fullWait: "true"
                });
                new H(r, "/push/channels", s, o, function(e, t, n) {
                    !n && i && (e = y.decodeBody(e, i));
                    for (var r = 0; r < e.length; r++) e[r] = String(e[r]);
                    return e
                }).get(t, n)
            };
            return t
        }(),
        J = function() {
            function e() {}
            var t = 9;

            function n(e, t, n) {
                w.logAction(w.LOG_MINOR, "Channel()", "started; name = " + t);
                O.call(this);
                this.rest = e;
                this.name = t;
                this.basePath = "/channels/" + encodeURIComponent(t);
                this.presence = new q(this);
                this.setOptions(n)
            }
            y.inherits(n, O);
            n.prototype.setOptions = function(e) {
                this.channelOptions = e = e || {};
                if (e.cipher) {
                    if (!p) throw new Error("Encryption not enabled; use ably.encryption.js instead");
                    var t = p.getCipher(e.cipher);
                    e.cipher = t.cipherParams;
                    e.channelCipher = t.cipher
                } else if ("cipher" in e) {
                    e.cipher = null;
                    e.channelCipher = null
                }
            };
            n.prototype.history = function(t, n) {
                w.logAction(w.LOG_MICRO, "Channel.history()", "channel = " + this.name);
                if (void 0 === n)
                    if ("function" == typeof t) {
                        n = t;
                        t = null
                    } else {
                        if (this.rest.options.promises) return y.promisify(this, "history", arguments);
                        n = e
                    } this._history(t, n)
            };
            n.prototype._history = function(e, t) {
                var n = this.rest,
                    r = n.options.useBinaryProtocol ? "msgpack" : "json",
                    i = m.supportsLinkHeaders ? void 0 : r,
                    o = y.defaultGetHeaders(r);
                n.options.headers && y.mixin(o, n.options.headers);
                var s = this.channelOptions;
                new H(n, this.basePath + "/messages", o, i, function(e, t, n) {
                    return A.fromResponseBody(e, s, !n && r)
                }).get(e, t)
            };

            function r(e) {
                return y.arrEvery(e, function(e) {
                    return !e.id
                })
            }
            n.prototype.publish = function() {
                var n, i, o = arguments.length,
                    s = arguments[0],
                    a = arguments[1],
                    u = arguments[o - 1],
                    c = this;
                if ("function" != typeof u) {
                    if (this.rest.options.promises) return y.promisify(this, "publish", arguments);
                    u = e
                }
                if ("string" == typeof s || null === s) {
                    n = [A.fromValues({
                        name: s,
                        data: a
                    })];
                    i = arguments[2]
                } else if (y.isObject(s)) {
                    n = [A.fromValues(s)];
                    i = arguments[1]
                } else {
                    if (!y.isArray(s)) throw new E("The single-argument form of publish() expects a message object or an array of message objects", 40013, 400);
                    n = A.fromValuesArray(s);
                    i = arguments[1]
                }
                "object" == typeof i && i || (i = {});
                var l = this.rest,
                    f = l.options,
                    h = f.useBinaryProtocol ? "msgpack" : "json",
                    p = l.options.idempotentRestPublishing,
                    d = y.defaultPostHeaders(h);
                f.headers && y.mixin(d, f.headers);
                if (p && r(n)) {
                    var g = y.randomString(t);
                    y.arrForEach(n, function(e, t) {
                        e.id = g + ":" + t.toString()
                    })
                }
                A.encodeArray(n, this.channelOptions, function(e) {
                    if (e) u(e);
                    else {
                        var t = A.getMessagesSize(n),
                            r = f.maxMessageSize;
                        t > r ? u(new E("Maximum size of messages that can be published at once exceeded ( was " + t + " bytes; limit is " + r + " bytes)", 40009, 400)) : c._publish(A.serialize(n, h), d, i, u)
                    }
                })
            };
            n.prototype._publish = function(e, t, n, r) {
                D.post(this.rest, this.basePath + "/messages", e, t, n, !1, r)
            };
            return n
        }(),
        Y = function() {
            var e = T.Action,
                t = function() {},
                n = "statechange",
                r = "sync";

            function i(e, t, n) {
                w.logAction(w.LOG_MINOR, "RealtimeChannel()", "started; name = " + t);
                J.call(this, e, t, n);
                this.realtime = e;
                this.presence = new Q(this, e.options);
                this.connectionManager = e.connection.connectionManager;
                this.state = "initialized";
                this.subscriptions = new O;
                this.syncChannelSerial = void 0;
                this.properties = {
                    attachSerial: void 0
                };
                this.setOptions(n);
                this.errorReason = null;
                this._requestedFlags = null;
                this._mode = null;
                this._attachedMsgIndicator = !1
            }
            y.inherits(i, J);
            i.invalidStateError = function(e) {
                return {
                    statusCode: 400,
                    code: 90001,
                    message: "Channel operation failed as channel state is " + e
                }
            };
            i.progressOps = {
                statechange: n,
                sync: r
            };
            i.processListenerArgs = function(e) {
                "function" == typeof(e = Array.prototype.slice.call(e))[0] && e.unshift(null);
                void 0 == e[e.length - 1] && e.pop();
                return e
            };
            i.prototype.publish = function() {
                var e = arguments.length,
                    n = arguments[0],
                    r = arguments[e - 1];
                if ("function" != typeof r) {
                    if (this.realtime.options.promises) return y.promisify(this, "publish", arguments);
                    r = t;
                    ++e
                }
                if (this.connectionManager.activeState()) {
                    if (2 == e)
                        if (y.isObject(n)) n = [A.fromValues(n)];
                        else {
                            if (!y.isArray(n)) throw new E("The single-argument form of publish() expects a message object or an array of message objects", 40013, 400);
                            n = A.fromValuesArray(n)
                        }
                    else n = [A.fromValues({
                        name: arguments[0],
                        data: arguments[1]
                    })];
                    var i = this,
                        o = this.realtime.options.maxMessageSize;
                    A.encodeArray(n, this.channelOptions, function(e) {
                        if (e) r(e);
                        else {
                            var t = A.getMessagesSize(n);
                            t > o ? r(new E("Maximum size of messages that can be published at once exceeded ( was " + t + " bytes; limit is " + o + " bytes)", 40009, 400)) : i._publish(n, r)
                        }
                    })
                } else r(this.connectionManager.getError())
            };
            i.prototype._publish = function(t, n) {
                w.logAction(w.LOG_MICRO, "RealtimeChannel.publish()", "message count = " + t.length);
                var r = this.state;
                switch (r) {
                    case "failed":
                    case "suspended":
                        n(E.fromValues(i.invalidStateError(r)));
                        break;
                    default:
                        w.logAction(w.LOG_MICRO, "RealtimeChannel.publish()", "sending message; channel state is " + r);
                        var o = new T;
                        o.action = e.MESSAGE;
                        o.channel = this.name;
                        o.messages = t;
                        this.sendMessage(o, n)
                }
            };
            i.prototype.onEvent = function(e) {
                w.logAction(w.LOG_MICRO, "RealtimeChannel.onEvent()", "received message");
                for (var t = this.subscriptions, n = 0; n < e.length; n++) {
                    var r = e[n];
                    t.emit(r.name, r)
                }
            };
            i.prototype.attach = function(e, t) {
                if ("function" == typeof e) {
                    t = e;
                    e = null
                }
                if (!t) {
                    if (this.realtime.options.promises) return y.promisify(this, "attach", arguments);
                    t = function(e) {
                        e && w.logAction(w.LOG_MAJOR, "RealtimeChannel.attach()", "Channel attach failed: " + e.toString())
                    }
                }
                e && (this._requestedFlags = e);
                var n = this.connectionManager;
                if (n.activeState()) switch (this.state) {
                    case "attached":
                        if (!e) {
                            t();
                            break
                        }
                        default:
                            this.requestState("attaching");
                        case "attaching":
                            this.once(function(e) {
                                switch (this.event) {
                                    case "attached":
                                        t();
                                        break;
                                    case "detached":
                                    case "suspended":
                                    case "failed":
                                        t(e.reason || n.getError());
                                        break;
                                    case "detaching":
                                        t(new E("Attach request superseded by a subsequent detach request", 9e4, 409))
                                }
                            })
                } else t(n.getError())
            };
            i.prototype.attachImpl = function() {
                w.logAction(w.LOG_MICRO, "RealtimeChannel.attachImpl()", "sending ATTACH message");
                this.setInProgress(n, !0);
                var r = T.fromValues({
                    action: e.ATTACH,
                    channel: this.name
                });
                this._requestedFlags && y.arrForEach(this._requestedFlags, function(e) {
                    r.setFlag(e)
                });
                this.sendMessage(r, t)
            };
            i.prototype.detach = function(e) {
                if (!e) {
                    if (this.realtime.options.promises) return y.promisify(this, "detach", arguments);
                    e = t
                }
                var n = this.connectionManager;
                if (n.activeState()) switch (this.state) {
                    case "detached":
                    case "failed":
                        e();
                        break;
                    default:
                        this.requestState("detaching");
                    case "detaching":
                        this.once(function(t) {
                            switch (this.event) {
                                case "detached":
                                    e();
                                    break;
                                case "attached":
                                case "suspended":
                                case "failed":
                                    e(t.reason || n.getError());
                                    break;
                                case "attaching":
                                    e(new E("Detach request superseded by a subsequent attach request", 9e4, 409))
                            }
                        })
                } else e(n.getError())
            };
            i.prototype.detachImpl = function(r) {
                w.logAction(w.LOG_MICRO, "RealtimeChannel.detach()", "sending DETACH message");
                this.setInProgress(n, !0);
                var i = T.fromValues({
                    action: e.DETACH,
                    channel: this.name
                });
                this.sendMessage(i, r || t)
            };
            i.prototype.subscribe = function() {
                var e = i.processListenerArgs(arguments),
                    n = e[0],
                    r = e[1],
                    o = e[2];
                if (!o) {
                    if (this.realtime.options.promises) return y.promisify(this, "subscribe", [n, r]);
                    o = t
                }
                if ("failed" !== this.state) {
                    this.subscriptions.on(n, r);
                    return this.attach(o)
                }
                o(E.fromValues(i.invalidStateError("failed")))
            };
            i.prototype.unsubscribe = function() {
                var e = i.processListenerArgs(arguments),
                    t = e[0],
                    n = e[1];
                this.subscriptions.off(t, n)
            };
            i.prototype.sync = function() {
                switch (this.state) {
                    case "initialized":
                    case "detaching":
                    case "detached":
                        throw new E("Unable to sync to channel; not attached", 4e4)
                }
                var t = this.connectionManager;
                if (!t.activeState()) throw t.getError();
                var n = T.fromValues({
                    action: e.SYNC,
                    channel: this.name
                });
                this.syncChannelSerial && (n.channelSerial = this.syncChannelSerial);
                t.send(n)
            };
            i.prototype.sendMessage = function(e, t) {
                this.connectionManager.send(e, this.realtime.options.queueMessages, t)
            };
            i.prototype.sendPresence = function(t, n) {
                var r = T.fromValues({
                    action: e.PRESENCE,
                    channel: this.name,
                    presence: y.isArray(t) ? k.fromValuesArray(t) : [k.fromValues(t)]
                });
                this.sendMessage(r, n)
            };
            i.prototype.onMessage = function(t) {
                var n, r = !1;
                switch (t.action) {
                    case e.ATTACHED:
                        this._attachedMsgIndicator = !0;
                        this.properties.attachSerial = t.channelSerial;
                        this._mode = t.getMode();
                        if ("attached" === this.state) {
                            var i = t.hasFlag("RESUMED");
                            if (!i || this.channelOptions.updateOnAttached) {
                                this.presence.onAttached(t.hasFlag("HAS_PRESENCE"));
                                var o = new K(this.state, this.state, i, t.error);
                                this.emit("update", o)
                            }
                        } else this.notifyState("attached", t.error, t.hasFlag("RESUMED"), t.hasFlag("HAS_PRESENCE"));
                        break;
                    case e.DETACHED:
                        var s = t.error ? E.fromValues(t.error) : new E("Channel detached", 90001, 404);
                        "detaching" === this.state ? this.notifyState("detached", s) : "attaching" === this.state ? this.notifyState("suspended", s) : this.requestState("attaching", s);
                        break;
                    case e.SYNC:
                        r = !0;
                        n = this.syncChannelSerial = t.channelSerial;
                        if (!t.presence) break;
                    case e.PRESENCE:
                        for (var a = t.presence, u = t.id, c = t.connectionId, l = t.timestamp, f = this.channelOptions, h = 0; h < a.length; h++) {
                            try {
                                var p = a[h];
                                k.decode(p, f)
                            } catch (e) {
                                w.logAction(w.LOG_ERROR, "RealtimeChannel.onMessage()", e.toString())
                            }
                            p.connectionId || (p.connectionId = c);
                            p.timestamp || (p.timestamp = l);
                            p.id || (p.id = u + ":" + h)
                        }
                        this.presence.setPresence(a, r, n);
                        break;
                    case e.MESSAGE:
                        var d = t.messages;
                        for (u = t.id, c = t.connectionId, l = t.timestamp, f = this.channelOptions, h = 0; h < d.length; h++) {
                            try {
                                var g = d[h];
                                A.decode(g, f)
                            } catch (e) {
                                w.logAction(w.LOG_MINOR, "RealtimeChannel.onMessage()", e.toString())
                            }
                            g.connectionId || (g.connectionId = c);
                            g.timestamp || (g.timestamp = l);
                            g.id || (g.id = u + ":" + h)
                        }
                        this.onEvent(d);
                        break;
                    case e.ERROR:
                        (s = t.error) && 80016 == s.code ? this.checkPendingState() : this.notifyState("failed", E.fromValues(s));
                        break;
                    default:
                        w.logAction(w.LOG_ERROR, "RealtimeChannel.onMessage()", "Fatal protocol error: unrecognised action (" + t.action + ")");
                        this.connectionManager.abort(P.unknownChannelErr)
                }
            };
            i.prototype.onAttached = function() {
                w.logAction(w.LOG_MINOR, "RealtimeChannel.onAttached", "activating channel; name = " + this.name)
            };
            i.prototype.notifyState = function(e, t, i, o) {
                w.logAction(w.LOG_MICRO, "RealtimeChannel.notifyState", "name = " + this.name + ", current state = " + this.state + ", notifying state " + e);
                this.clearStateTimer();
                if (e !== this.state) {
                    this.presence.actOnChannelState(e, o, t);
                    "suspended" === e && this.connectionManager.state.sendEvents ? this.startRetryTimer() : this.cancelRetryTimer();
                    t && (this.errorReason = t);
                    var s = new K(this.state, e, i, t),
                        a = "failed" === e ? w.LOG_ERROR : w.LOG_MAJOR;
                    w.logAction(a, 'Channel state for channel "' + this.name + '"', e + (t ? "; reason: " + t : ""));
                    if ("attached" === e) {
                        this.onAttached();
                        this.setInProgress(r, o);
                        this.setInProgress(n, !1)
                    } else if ("detached" === e || "failed" === e || "suspended" === e) {
                        this.setInProgress(n, !1);
                        this.setInProgress(r, !1)
                    }
                    this.state = e;
                    this.emit(e, s)
                }
            };
            i.prototype.requestState = function(e, t) {
                w.logAction(w.LOG_MINOR, "RealtimeChannel.requestState", "name = " + this.name + ", state = " + e);
                this.notifyState(e, t);
                this.checkPendingState()
            };
            i.prototype.checkPendingState = function() {
                var e = this.connectionManager.state;
                if (e.sendEvents || e.forceQueueEvents) {
                    w.logAction(w.LOG_MINOR, "RealtimeChannel.checkPendingState", "name = " + this.name + ", state = " + this.state);
                    switch (this.state) {
                        case "attaching":
                            this.startStateTimerIfNotRunning();
                            this.attachImpl();
                            break;
                        case "detaching":
                            this.startStateTimerIfNotRunning();
                            this.detachImpl();
                            break;
                        case "attached":
                            this.sync()
                    }
                } else w.logAction(w.LOG_MINOR, "RealtimeChannel.checkPendingState", "sendEvents is false; state is " + this.connectionManager.state.state)
            };
            i.prototype.timeoutPendingState = function() {
                switch (this.state) {
                    case "attaching":
                        var e = new E("Channel attach timed out", 90007, 408);
                        this.notifyState("suspended", e);
                        break;
                    case "detaching":
                        e = new E("Channel detach timed out", 90007, 408);
                        this.notifyState("attached", e);
                        break;
                    default:
                        this.checkPendingState()
                }
            };
            i.prototype.startStateTimerIfNotRunning = function() {
                var e = this;
                this.stateTimer || (this.stateTimer = setTimeout(function() {
                    w.logAction(w.LOG_MINOR, "RealtimeChannel.startStateTimerIfNotRunning", "timer expired");
                    e.stateTimer = null;
                    e.timeoutPendingState()
                }, this.realtime.options.timeouts.realtimeRequestTimeout))
            };
            i.prototype.clearStateTimer = function() {
                var e = this.stateTimer;
                if (e) {
                    clearTimeout(e);
                    this.stateTimer = null
                }
            };
            i.prototype.startRetryTimer = function() {
                var e = this;
                this.retryTimer || (this.retryTimer = setTimeout(function() {
                    if ("suspended" === e.state && e.connectionManager.state.sendEvents) {
                        e.retryTimer = null;
                        w.logAction(w.LOG_MINOR, "RealtimeChannel retry timer expired", "attempting a new attach");
                        e.requestState("attaching")
                    }
                }, this.realtime.options.timeouts.channelRetryTimeout))
            };
            i.prototype.cancelRetryTimer = function() {
                if (this.retryTimer) {
                    clearTimeout(this.retryTimer);
                    this.suspendTimer = null
                }
            };
            i.prototype.setInProgress = function(e, t) {
                this.rest.channels.setInProgress(this, e, t)
            };
            i.prototype.history = function(e, n) {
                w.logAction(w.LOG_MICRO, "RealtimeChannel.history()", "channel = " + this.name);
                if (void 0 === n)
                    if ("function" == typeof e) {
                        n = e;
                        e = null
                    } else {
                        if (this.rest.options.promises) return y.promisify(this, "history", arguments);
                        n = t
                    } if (e && e.untilAttach) {
                    if ("attached" !== this.state) {
                        n(new E("option untilAttach requires the channel to be attached", 4e4, 400));
                        return
                    }
                    if (!this.properties.attachSerial) {
                        n(new E("untilAttach was specified and channel is attached, but attachSerial is not defined", 4e4, 400));
                        return
                    }
                    delete e.untilAttach;
                    e.from_serial = this.properties.attachSerial
                }
                J.prototype._history.call(this, e, n)
            };
            i.prototype.whenState = function(e, t) {
                O.prototype.whenState.call(this, e, this.state, t)
            };
            return i
        }(),
        Q = function() {
            var e = function() {};

            function t(e) {
                return e.clientId + ":" + e.connectionId
            }

            function n(e) {
                return e.channel.realtime.auth.clientId
            }

            function r(e) {
                var t = e.channel.realtime,
                    n = t.auth.clientId;
                return (!n || "*" === n) && "connected" === t.connection.state
            }

            function i(e, t, n) {
                switch (e.state) {
                    case "attached":
                    case "suspended":
                        n();
                        break;
                    case "initialized":
                    case "detached":
                    case "detaching":
                    case "attaching":
                        e.attach(function(e) {
                            e ? t(e) : n()
                        });
                        break;
                    default:
                        t(E.fromValues(Y.invalidStateError(e.state)))
                }
            }

            function o(e, t) {
                q.call(this, e);
                this.syncComplete = !1;
                this.members = new s(this);
                this._myMembers = new s(this);
                this.subscriptions = new O;
                this.pendingPresence = []
            }
            y.inherits(o, q);
            o.prototype.enter = function(e, t) {
                if (r(this)) throw new E("clientId must be specified to enter a presence channel", 40012, 400);
                return this._enterOrUpdateClient(void 0, e, "enter", t)
            };
            o.prototype.update = function(e, t) {
                if (r(this)) throw new E("clientId must be specified to update presence data", 40012, 400);
                return this._enterOrUpdateClient(void 0, e, "update", t)
            };
            o.prototype.enterClient = function(e, t, n) {
                return this._enterOrUpdateClient(e, t, "enter", n)
            };
            o.prototype.updateClient = function(e, t, n) {
                return this._enterOrUpdateClient(e, t, "update", n)
            };
            o.prototype._enterOrUpdateClient = function(t, r, i, o) {
                if (!o)
                    if ("function" == typeof r) {
                        o = r;
                        r = null
                    } else {
                        if (this.channel.realtime.options.promises) return y.promisify(this, "_enterOrUpdateClient", [t, r, i]);
                        o = e
                    } var s = this.channel;
                if (s.connectionManager.activeState()) {
                    w.logAction(w.LOG_MICRO, "RealtimePresence." + i + "Client()", "channel = " + s.name + ", client = " + (t || "(implicit) " + n(this)));
                    var a = k.fromValues({
                        action: i,
                        data: r
                    });
                    t && (a.clientId = t);
                    var u = this;
                    k.encode(a, s.channelOptions, function(e) {
                        if (e) o(e);
                        else switch (s.state) {
                            case "attached":
                                s.sendPresence(a, o);
                                break;
                            case "initialized":
                            case "detached":
                                s.attach();
                            case "attaching":
                                u.pendingPresence.push({
                                    presence: a,
                                    callback: o
                                });
                                break;
                            default:
                                (e = new E("Unable to " + i + " presence channel (incompatible state)", 90001)).code = 90001;
                                o(e)
                        }
                    })
                } else o(s.connectionManager.getError())
            };
            o.prototype.leave = function(e, t) {
                if (r(this)) throw new E("clientId must have been specified to enter or leave a presence channel", 40012, 400);
                return this.leaveClient(void 0, e, t)
            };
            o.prototype.leaveClient = function(t, n, r) {
                if (!r)
                    if ("function" == typeof n) {
                        r = n;
                        n = null
                    } else {
                        if (this.channel.realtime.options.promises) return y.promisify(this, "leaveClient", [t, n]);
                        r = e
                    } var i = this.channel;
                if (i.connectionManager.activeState()) {
                    w.logAction(w.LOG_MICRO, "RealtimePresence.leaveClient()", "leaving; channel = " + this.channel.name + ", client = " + t);
                    var o = k.fromValues({
                        action: "leave",
                        data: n
                    });
                    t && (o.clientId = t);
                    switch (i.state) {
                        case "attached":
                            i.sendPresence(o, r);
                            break;
                        case "attaching":
                            this.pendingPresence.push({
                                presence: o,
                                callback: r
                            });
                            break;
                        case "initialized":
                        case "failed":
                            r(new E("Unable to leave presence channel (incompatible state)", 90001));
                            break;
                        default:
                            r(P.failed)
                    }
                } else r(i.connectionManager.getError())
            };
            o.prototype.get = function() {
                var t = Array.prototype.slice.call(arguments);
                1 == t.length && "function" == typeof t[0] && t.unshift(null);
                var n = t[0],
                    r = t[1],
                    o = !n || !("waitForSync" in n) || n.waitForSync;
                if (!r) {
                    if (this.channel.realtime.options.promises) return y.promisify(this, "get", t);
                    r = e
                }

                function s(e) {
                    r(null, n ? e.list(n) : e.values())
                }
                if ("suspended" !== this.channel.state) {
                    var a = this;
                    i(this.channel, r, function() {
                        var e = a.members;
                        o ? e.waitSync(function() {
                            s(e)
                        }) : s(e)
                    })
                } else o ? r(E.fromValues({
                    statusCode: 400,
                    code: 91005,
                    message: "Presence state is out of sync due to channel being in the SUSPENDED state"
                })) : s(this.members)
            };
            o.prototype.history = function(t, n) {
                w.logAction(w.LOG_MICRO, "RealtimePresence.history()", "channel = " + this.name);
                if (void 0 === n)
                    if ("function" == typeof t) {
                        n = t;
                        t = null
                    } else {
                        if (this.channel.realtime.options.promises) return y.promisify(this, "history", arguments);
                        n = e
                    } if (t && t.untilAttach)
                    if ("attached" === this.channel.state) {
                        delete t.untilAttach;
                        t.from_serial = this.channel.properties.attachSerial
                    } else n(new E("option untilAttach requires the channel to be attached, was: " + this.channel.state, 4e4, 400));
                q.prototype._history.call(this, t, n)
            };
            o.prototype.setPresence = function(e, t, n) {
                w.logAction(w.LOG_MICRO, "RealtimePresence.setPresence()", "received presence for " + e.length + " participants; syncChannelSerial = " + n);
                var r, i, o = this.members,
                    s = this._myMembers,
                    a = [],
                    u = this.channel.connectionManager.connectionId;
                if (t) {
                    this.members.startSync();
                    n && (i = n.match(/^[\w\-]+:(.*)$/)) && (r = i[1])
                }
                for (var c = 0; c < e.length; c++) {
                    switch ((l = k.fromValues(e[c])).action) {
                        case "leave":
                            o.remove(l) && a.push(l);
                            l.connectionId !== u || l.isSynthesized() || s.remove(l);
                            break;
                        case "enter":
                        case "present":
                        case "update":
                            o.put(l) && a.push(l);
                            l.connectionId === u && s.put(l)
                    }
                }
                if (t && !r) {
                    o.endSync();
                    this._ensureMyMembersPresent();
                    this.channel.setInProgress(Y.progressOps.sync, !1);
                    this.channel.syncChannelSerial = null
                }
                for (c = 0; c < a.length; c++) {
                    var l = a[c];
                    this.subscriptions.emit(l.action, l)
                }
            };
            o.prototype.onAttached = function(e) {
                w.logAction(w.LOG_MINOR, "RealtimePresence.onAttached()", "channel = " + this.channel.name + ", hasPresence = " + e);
                if (e) this.members.startSync();
                else {
                    this._synthesizeLeaves(this.members.values());
                    this.members.clear();
                    this._ensureMyMembersPresent()
                }
                var t = this.pendingPresence,
                    n = t.length;
                if (n) {
                    this.pendingPresence = [];
                    var r = [],
                        i = S();
                    w.logAction(w.LOG_MICRO, "RealtimePresence.onAttached", "sending " + n + " queued presence messages");
                    for (var o = 0; o < n; o++) {
                        var s = t[o];
                        r.push(s.presence);
                        i.push(s.callback)
                    }
                    this.channel.sendPresence(r, i)
                }
            };
            o.prototype.actOnChannelState = function(e, t, n) {
                switch (e) {
                    case "attached":
                        this.onAttached(t);
                        break;
                    case "detached":
                    case "failed":
                        this._clearMyMembers();
                        this.members.clear();
                    case "suspended":
                        this.failPendingPresence(n)
                }
            };
            o.prototype.failPendingPresence = function(e) {
                if (this.pendingPresence.length) {
                    w.logAction(w.LOG_MINOR, "RealtimeChannel.failPendingPresence", "channel; name = " + this.channel.name + ", err = " + y.inspectError(e));
                    for (var t = 0; t < this.pendingPresence.length; t++) try {
                        this.pendingPresence[t].callback(e)
                    } catch (e) {}
                    this.pendingPresence = []
                }
            };
            o.prototype._clearMyMembers = function() {
                this._myMembers.clear()
            };
            o.prototype._ensureMyMembersPresent = function() {
                var e = this,
                    t = this.members,
                    n = this._myMembers,
                    r = function(t) {
                        if (t) {
                            var n = "Presence auto-re-enter failed: " + t.toString(),
                                r = new E(n, 91004, 400);
                            w.logAction(w.LOG_ERROR, "RealtimePresence._ensureMyMembersPresent()", n);
                            var i = new K(e.channel.state, e.channel.state, !0, r);
                            e.channel.emit("update", i)
                        }
                    };
                for (var i in n.map)
                    if (!(i in t.map)) {
                        var o = n.map[i];
                        w.logAction(w.LOG_MICRO, "RealtimePresence._ensureMyMembersPresent()", 'Auto-reentering clientId "' + o.clientId + '" into the presence set');
                        this._enterOrUpdateClient(o.clientId, o.data, "enter", r);
                        delete n.map[i]
                    }
            };
            o.prototype._synthesizeLeaves = function(e) {
                var t = this.subscriptions;
                y.arrForEach(e, function(e) {
                    var n = k.fromValues({
                        action: "leave",
                        connectionId: e.connectionId,
                        clientId: e.clientId,
                        data: e.data,
                        encoding: e.encoding,
                        timestamp: y.now()
                    });
                    t.emit("leave", n)
                })
            };
            o.prototype.on = function() {
                w.deprecated("presence.on", "presence.subscribe");
                this.subscribe.apply(this, arguments)
            };
            o.prototype.off = function() {
                w.deprecated("presence.off", "presence.unsubscribe");
                this.unsubscribe.apply(this, arguments)
            };
            o.prototype.subscribe = function() {
                var t = Y.processListenerArgs(arguments),
                    n = t[0],
                    r = t[1],
                    i = t[2],
                    o = this.channel;
                if (!i) {
                    if (this.channel.realtime.options.promises) return y.promisify(this, "subscribe", [n, r]);
                    i = e
                }
                if ("failed" !== o.state) {
                    this.subscriptions.on(n, r);
                    o.attach(i)
                } else i(E.fromValues(Y.invalidStateError("failed")))
            };
            o.prototype.unsubscribe = function() {
                var e = Y.processListenerArgs(arguments),
                    t = e[0],
                    n = e[1];
                this.subscriptions.off(t, n)
            };

            function s(e) {
                O.call(this);
                this.presence = e;
                this.map = {};
                this.syncInProgress = !1;
                this.residualMembers = null
            }
            y.inherits(s, O);
            s.prototype.get = function(e) {
                return this.map[e]
            };
            s.prototype.getClient = function(e) {
                var t = this.map,
                    n = [];
                for (var r in t) {
                    var i = t[r];
                    i.clientId == e && "absent" != i.action && n.push(i)
                }
                return n
            };
            s.prototype.list = function(e) {
                var t = this.map,
                    n = e && e.clientId,
                    r = e && e.connectionId,
                    i = [];
                for (var o in t) {
                    var s = t[o];
                    "absent" !== s.action && (n && n != s.clientId || r && r != s.connectionId || i.push(s))
                }
                return i
            };

            function a(e, t) {
                if (e.isSynthesized() || t.isSynthesized()) return e.timestamp > t.timestamp;
                var n = e.parseId(),
                    r = t.parseId();
                return n.msgSerial === r.msgSerial ? n.index > r.index : n.msgSerial > r.msgSerial
            }
            s.prototype.put = function(e) {
                "enter" !== e.action && "update" !== e.action || ((e = k.fromValues(e)).action = "present");
                var n = this.map,
                    r = t(e);
                this.residualMembers && delete this.residualMembers[r];
                var i = n[r];
                if (i && !a(e, i)) return !1;
                n[r] = e;
                return !0
            };
            s.prototype.values = function() {
                var e = this.map,
                    t = [];
                for (var n in e) {
                    var r = e[n];
                    "absent" != r.action && t.push(r)
                }
                return t
            };
            s.prototype.remove = function(e) {
                var n = this.map,
                    r = t(e),
                    i = n[r];
                if (i && !a(e, i)) return !1;
                if (this.syncInProgress) {
                    (e = k.fromValues(e)).action = "absent";
                    n[r] = e
                } else delete n[r];
                return !0
            };
            s.prototype.startSync = function() {
                var e = this.map,
                    t = this.syncInProgress;
                w.logAction(w.LOG_MINOR, "PresenceMap.startSync()", "channel = " + this.presence.channel.name + "; syncInProgress = " + t);
                if (!this.syncInProgress) {
                    this.residualMembers = y.copy(e);
                    this.setInProgress(!0)
                }
            };
            s.prototype.endSync = function() {
                var e = this.map,
                    t = this.syncInProgress;
                w.logAction(w.LOG_MINOR, "PresenceMap.endSync()", "channel = " + this.presence.channel.name + "; syncInProgress = " + t);
                if (t) {
                    for (var n in e) {
                        "absent" === e[n].action && delete e[n]
                    }
                    this.presence._synthesizeLeaves(y.valuesArray(this.residualMembers));
                    for (var n in this.residualMembers) delete e[n];
                    this.residualMembers = null;
                    this.setInProgress(!1)
                }
                this.emit("sync")
            };
            s.prototype.waitSync = function(e) {
                var t = this.syncInProgress;
                w.logAction(w.LOG_MINOR, "PresenceMap.waitSync()", "channel = " + this.presence.channel.name + "; syncInProgress = " + t);
                t ? this.once("sync", e) : e()
            };
            s.prototype.clear = function(e) {
                this.map = {};
                this.setInProgress(!1);
                this.residualMembers = null
            };
            s.prototype.setInProgress = function(e) {
                w.logAction(w.LOG_MICRO, "PresenceMap.setInProgress()", "inProgress = " + e);
                this.syncInProgress = e;
                this.presence.syncComplete = !e
            };
            return o
        }(),
        X = function() {
            var e = function() {},
                t = 0,
                n = {},
                r = 0,
                i = 3;

            function o() {
                for (var e in n) n[e].dispose()
            }
            var a = void 0 !== s && s.XDomainRequest;

            function c() {
                var e = navigator.userAgent.toString().match(/MSIE\s([\d.]+)/);
                return e && Number(e[1])
            }

            function l() {
                var e;
                return a && (e = c()) && 10 === e
            }

            function f(e, t) {
                return e.getResponseHeader && e.getResponseHeader(t)
            }

            function p(e) {
                return e.getResponseHeader && (e.getResponseHeader("transfer-encoding") || !e.getResponseHeader("content-length"))
            }

            function d(e) {
                for (var t = y.trim(e.getAllResponseHeaders()).split("\r\n"), n = {}, r = 0; r < t.length; r++) {
                    var i = y.arrMap(t[r].split(":"), y.trim);
                    n[i[0].toLowerCase()] = i[1]
                }
                return n
            }

            function _(e, r, i, o, s, a, u) {
                O.call(this);
                (i = i || {}).rnd = y.cheapRandStr();
                l() && !i.envelope && (i.envelope = "json");
                this.uri = e + y.toQueryString(i);
                this.headers = r || {};
                this.body = o;
                this.method = u ? u.toUpperCase() : y.isEmptyArg(o) ? "GET" : "POST";
                this.requestMode = s;
                this.timeouts = a;
                this.timedOut = !1;
                this.requestComplete = !1;
                n[this.id = String(++t)] = this
            }
            y.inherits(_, O);
            var b = _.createRequest = function(e, t, n, r, i, o, s) {
                o = o || g.TIMEOUTS;
                return new _(e, t, y.copy(n), r, i, o, s)
            };
            _.prototype.complete = function(e, t, n, r, i) {
                if (!this.requestComplete) {
                    this.requestComplete = !0;
                    t && this.emit("data", t);
                    this.emit("complete", e, t, n, r, i);
                    this.dispose()
                }
            };
            _.prototype.abort = function() {
                this.dispose()
            };
            _.prototype.exec = function() {
                var e = this.requestMode == r ? this.timeouts.httpRequestTimeout : this.timeouts.recvTimeout,
                    t = this,
                    n = this.timer = setTimeout(function() {
                        t.timedOut = !0;
                        u.abort()
                    }, e),
                    o = this.body,
                    s = this.method,
                    a = this.headers,
                    u = this.xhr = new XMLHttpRequest,
                    c = a.accept,
                    l = "text";
                c ? 0 === c.indexOf("application/x-msgpack") && (l = "arraybuffer") : a.accept = "application/json";
                if (o) {
                    (a["content-type"] || (a["content-type"] = "application/json")).indexOf("application/json") > -1 && "string" != typeof o && (o = JSON.stringify(o))
                }
                u.open(s, this.uri, !0);
                u.responseType = l;
                "authorization" in a && (u.withCredentials = !0);
                for (var h in a) u.setRequestHeader(h, a[h]);
                var g = function(e, n, r, i) {
                    var o = n + " (event type: " + e.type + ")" + (t.xhr.statusText ? ", current statusText is " + t.xhr.statusText : "");
                    w.logAction(w.LOG_ERROR, "Request.on" + e.type + "()", o);
                    t.complete(new E(o, r, i))
                };
                u.onerror = function(e) {
                    g(e, "XHR error occurred", null, 400)
                };
                u.onabort = function(e) {
                    t.timedOut ? g(e, "Request aborted due to request timeout expiring", null, 408) : g(e, "Request cancelled", null, 400)
                };
                u.ontimeout = function(e) {
                    g(e, "Request timed out", null, 408)
                };
                var m, _, b, O, S = 0,
                    I = !1;

                function A() {
                    clearTimeout(n);
                    O = _ < 400;
                    204 != _ ? m = t.requestMode == i && O && p(u) : t.complete(null, null, null, null, _)
                }

                function k() {
                    try {
                        var e, n, r = f(u, "content-type");
                        if (r ? r.indexOf("application/json") >= 0 : "text" == u.responseType) {
                            (n = "arraybuffer" === u.responseType ? v.utf8Decode(u.response) : String(u.responseText)).length && (n = JSON.parse(n));
                            I = !0
                        } else n = u.response;
                        if (void 0 !== n.response) {
                            _ = n.statusCode;
                            O = _ < 400;
                            e = n.headers;
                            n = n.response
                        } else e = d(u)
                    } catch (e) {
                        t.complete(new E("Malformed response body from server: " + e.message, null, 400));
                        return
                    }
                    if (O || y.isArray(n)) t.complete(null, n, e, I, _);
                    else {
                        var i = n.error;
                        i || (i = new E("Error response received from server: " + _ + " body was: " + y.inspect(n), null, _));
                        t.complete(i, n, e, I, _)
                    }
                }

                function T() {
                    for (var e, t, n = (b = u.responseText).length - 1; S < n && (e = b.indexOf("\n", S)) > -1;) {
                        t = b.slice(S, e);
                        S = e + 1;
                        R(t)
                    }
                }

                function R(e) {
                    try {
                        e = JSON.parse(e)
                    } catch (e) {
                        t.complete(new E("Malformed response body from server: " + e.message, null, 400));
                        return
                    }
                    t.emit("data", e)
                }

                function C() {
                    T();
                    t.streamComplete = !0;
                    y.nextTick(function() {
                        t.complete()
                    })
                }
                u.onreadystatechange = function() {
                    var e = u.readyState;
                    if (!(e < 3) && 0 !== u.status) {
                        if (void 0 === _) {
                            1223 === (_ = u.status) && (_ = 204);
                            A()
                        }
                        3 == e && m ? T() : 4 == e && (m ? C() : k())
                    }
                };
                u.send(o)
            };
            _.prototype.dispose = function() {
                var t = this.xhr;
                if (t) {
                    t.onreadystatechange = t.onerror = t.onabort = t.ontimeout = e;
                    this.xhr = null;
                    var r = this.timer;
                    if (r) {
                        clearTimeout(r);
                        this.timer = null
                    }
                    this.requestComplete || t.abort()
                }
                delete n[this.id]
            };
            if (h.xhrSupported) {
                "object" == typeof u && u.addUnloadListener(o);
                if (void 0 !== m) {
                    m.supportsAuthHeaders = !0;
                    m.Request = function(e, t, n, i, o, s, a) {
                        var u = b(n, i, o, s, r, t && t.options.timeouts, e);
                        u.once("complete", a);
                        u.exec();
                        return u
                    };
                    m.checkConnectivity = function(e) {
                        var t = g.internetUpUrl;
                        w.logAction(w.LOG_MICRO, "(XHRRequest)Http.checkConnectivity()", "Sending; " + t);
                        m.getUri(null, t, null, null, function(t, n) {
                            var r = !t && "yes" == n.replace(/\n/, "");
                            w.logAction(w.LOG_MICRO, "(XHRRequest)Http.checkConnectivity()", "Result: " + r);
                            e(null, r)
                        })
                    }
                }
            }
            return _
        }();
    (function() {
        var e = "xhr_streaming";

        function t(t, n, r) {
            j.call(this, t, n, r);
            this.shortName = e
        }
        y.inherits(t, j);
        t.isAvailable = function() {
            return h.xhrSupported && h.streamingSupported && h.allowComet
        };
        t.tryConnect = function(e, n, r, i) {
            var o = new t(e, n, r),
                s = function(e) {
                    i({
                        event: this.event,
                        error: e
                    })
                };
            o.on(["failed", "disconnected"], s);
            o.on("preconnect", function() {
                w.logAction(w.LOG_MINOR, "XHRStreamingTransport.tryConnect()", "viable transport " + o);
                o.off(["failed", "disconnected"], s);
                i(null, o)
            });
            o.connect()
        };
        t.prototype.toString = function() {
            return "XHRStreamingTransport; uri=" + this.baseUri + "; isConnected=" + this.isConnected
        };
        t.prototype.createRequest = function(e, t, n, r, i) {
            return X.createRequest(e, t, n, r, i, this.timeouts)
        };
        void 0 !== N && t.isAvailable() && (N.supportedTransports[e] = t)
    })(),
    function() {
        var e = "xhr_polling";

        function t(t, n, r) {
            r.stream = !1;
            j.call(this, t, n, r);
            this.shortName = e
        }
        y.inherits(t, j);
        t.isAvailable = function() {
            return h.xhrSupported && h.allowComet
        };
        t.tryConnect = function(e, n, r, i) {
            var o = new t(e, n, r),
                s = function(e) {
                    i({
                        event: this.event,
                        error: e
                    })
                };
            o.on(["failed", "disconnected"], s);
            o.on("preconnect", function() {
                w.logAction(w.LOG_MINOR, "XHRPollingTransport.tryConnect()", "viable transport " + o);
                o.off(["failed", "disconnected"], s);
                i(null, o)
            });
            o.connect()
        };
        t.prototype.toString = function() {
            return "XHRPollingTransport; uri=" + this.baseUri + "; isConnected=" + this.isConnected
        };
        t.prototype.createRequest = function(e, t, n, r, i) {
            return X.createRequest(e, t, n, r, i, this.timeouts)
        };
        void 0 !== N && t.isAvailable() && (N.supportedTransports[e] = t)
    }(),
    function() {
        var e = function() {},
            t = s._ablyjs_jsonp = {};
        t._ = function(n) {
            return t["_" + n] || e
        };
        var n = 1,
            r = null,
            i = "jsonp";

        function o(e, t, n) {
            n.stream = !1;
            j.call(this, e, t, n);
            this.shortName = i
        }
        y.inherits(o, j);
        o.isAvailable = function() {
            return h.jsonpSupported && h.allowComet
        };
        o.isAvailable() && (N.supportedTransports[i] = o);
        h.jsonpSupported && (r = document.getElementsByTagName("head")[0]);
        var a = null;
        s.JSONPTransport = o;
        o.tryConnect = function(e, t, n, r) {
            var i = new o(e, t, n),
                s = function(e) {
                    r({
                        event: this.event,
                        error: e
                    })
                };
            i.on(["failed", "disconnected"], s);
            i.on("preconnect", function() {
                w.logAction(w.LOG_MINOR, "JSONPTransport.tryConnect()", "viable transport " + i);
                i.off(["failed", "disconnected"], s);
                r(null, i)
            });
            i.connect()
        };
        o.prototype.toString = function() {
            return "JSONPTransport; uri=" + this.baseUri + "; isConnected=" + this.isConnected
        };
        var u = o.prototype.createRequest = function(e, t, n, r, i, o, s) {
            o = this && this.timeouts || o || g.TIMEOUTS;
            return new c(void 0, e, t, y.copy(n), r, i, o, s)
        };

        function c(e, t, r, i, o, s, a, u) {
            O.call(this);
            void 0 === e && (e = n++);
            this.id = e;
            this.uri = t;
            this.params = i || {};
            this.params.rnd = y.cheapRandStr();
            if (r) {
                r["X-Ably-Version"] && (this.params.v = r["X-Ably-Version"]);
                r["X-Ably-Lib"] && (this.params.lib = r["X-Ably-Lib"])
            }
            this.body = o;
            this.method = u;
            this.requestMode = s;
            this.timeouts = a;
            this.requestComplete = !1
        }
        y.inherits(c, O);
        c.prototype.exec = function() {
            var e = this.id,
                n = this.body,
                i = this.method,
                o = this.uri,
                s = this.params,
                a = this;
            s.callback = "_ablyjs_jsonp._(" + e + ")";
            s.envelope = "jsonp";
            n && (s.body = n);
            i && "get" !== i && (s.method = i);
            var u = this.script = document.createElement("script"),
                c = o + y.toQueryString(s);
            u.src = c;
            u.src.split("/").slice(-1)[0] !== c.split("/").slice(-1)[0] && w.logAction(w.LOG_ERROR, "JSONP Request.exec()", "Warning: the browser appears to have truncated the script URI. This will likely result in the request failing due to an unparseable body param");
            u.async = !0;
            u.type = "text/javascript";
            u.charset = "UTF-8";
            u.onerror = function(e) {
                a.complete(new E("JSONP script error (event: " + y.inspect(e) + ")", null, 400))
            };
            t["_" + e] = function(e) {
                if (e.statusCode) {
                    var t = e.response;
                    if (204 == e.statusCode) a.complete(null, null, null, e.statusCode);
                    else if (t)
                        if (e.statusCode < 400 || y.isArray(t)) a.complete(null, t, e.headers, e.statusCode);
                        else {
                            var n = t.error || new E("Error response received from server", null, e.statusCode);
                            a.complete(n)
                        }
                    else a.complete(new E("Invalid server response: no envelope detected", null, 500))
                } else a.complete(null, e)
            };
            var l = this.requestMode == j.REQ_SEND ? this.timeouts.httpRequestTimeout : this.timeouts.recvTimeout;
            this.timer = setTimeout(function() {
                a.abort()
            }, l);
            r.insertBefore(u, r.firstChild)
        };
        c.prototype.complete = function(e, t, n, r) {
            n = n || {};
            if (!this.requestComplete) {
                this.requestComplete = !0;
                var i;
                if (t) {
                    i = "string" == typeof t ? "text/plain" : "application/json";
                    n["content-type"] = i;
                    this.emit("data", t)
                }
                this.emit("complete", e, t, n, !0, r);
                this.dispose()
            }
        };
        c.prototype.abort = function() {
            this.dispose()
        };
        c.prototype.dispose = function() {
            var e = this.timer;
            if (e) {
                clearTimeout(e);
                this.timer = null
            }
            var n = this.script;
            n.parentNode && n.parentNode.removeChild(n);
            delete t[this.id];
            this.emit("disposed")
        };
        if (h.jsonpSupported && !m.Request) {
            m.Request = function(e, t, n, r, i, o, s) {
                var a = u(n, r, i, o, j.REQ_SEND, t && t.options.timeouts, e);
                a.once("complete", s);
                y.nextTick(function() {
                    a.exec()
                });
                return a
            };
            m.checkConnectivity = function(e) {
                var t = g.jsonpInternetUpUrl;
                if (a) a.push(e);
                else {
                    a = [e];
                    w.logAction(w.LOG_MICRO, "(JSONP)Http.checkConnectivity()", "Sending; " + t);
                    var n = new c("isTheInternetUp", t, null, null, null, j.REQ_SEND, g.TIMEOUTS);
                    n.once("complete", function(e, t) {
                        var n = !e && t;
                        w.logAction(w.LOG_MICRO, "(JSONP)Http.checkConnectivity()", "Result: " + n);
                        for (var r = 0; r < a.length; r++) a[r](null, n);
                        a = null
                    });
                    y.nextTick(function() {
                        n.exec()
                    })
                }
            }
        }
    }();
    o.msgpack = c;
    o.Rest = B;
    o.Realtime = z;
    z.ConnectionManager = N;
    z.BufferUtils = B.BufferUtils = v;
    void 0 !== p && (z.Crypto = B.Crypto = p);
    z.Defaults = B.Defaults = g;
    z.Http = B.Http = m;
    z.Utils = B.Utils = y;
    z.Http = B.Http = m;
    z.Message = B.Message = A;
    z.PresenceMessage = B.PresenceMessage = k;
    z.ProtocolMessage = B.ProtocolMessage = T;
    e.exports = o;
    e.exports.__esModule = !0
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    };

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function s(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        });
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    t.enforceDefaultClientOptions = function(e) {
        return function(t) {
            s(n, e);

            function n(e) {
                i(this, n);
                var t = r({
                    environment: "hubspot",
                    fallbackHosts: ["hubspot-a-fallback.ably-realtime.com", "hubspot-b-fallback.ably-realtime.com"]
                }, e);
                return o(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, t))
            }
            return n
        }()
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.fetchConfig = void 0;
    var r = o(n(19)),
        i = n(7);

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.fetchConfig = function(e) {
        var t = (0, i.getPortalId)();
        return r.default.get("clientnotifications/v1/subscription/token-request/" + e, {
            query: {
                portalId: t
            }
        })
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
    t.default = function() {
        var e = (new Date).getTime(),
            t = function(t) {
                var n = (e + 16 * Math.random()) % 16 | 0;
                e = Math.floor(e / 16);
                return ("x" === t ? n : 7 & n | 8).toString(16)
            };
        return r.replace(/[xy]/g, t)
    };
    e.exports = t.default
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.SessionMonitor = void 0;
    var r = p(n(2)),
        i = n(109),
        o = n(50),
        s = p(n(1)),
        a = p(n(0)),
        u = p(n(108)),
        c = n(18),
        l = n(97),
        f = n(5),
        h = p(n(24));

    function p(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function d(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var g = t.SessionMonitor = function e(t, n, r) {
        var i = this;
        d(this, e);
        this.currentUserId = null;
        this.onReady = null;
        this.onLogin = null;
        this.onLogout = null;
        this.isLoggedIn = function() {
            return !!i.currentUserId
        };
        this.handleNextUserId = function(e) {
            a.default.log("[SessionMonitor] User changed from " + i.currentUserId + " to " + e);
            var t = e > 0,
                n = i.currentUserId > 0,
                r = i.currentUserId;
            i.currentUserId = e;
            !n && t ? i.onLogin() : n && !t && i.onLogout();
            n && t && r !== e && i.reinitialize()
        };
        this.reinitialize = function() {
            i.onLogout();
            i.onLogin()
        };
        this.initialize = async function() {
            a.default.log("[SessionMonitor] init");
            var t = await (0, c.fetchUser)();
            i.currentUserId = t && t.get("userId");
            try {
                await i.onReady(i.isLoggedIn())
            } catch (e) {
                h.default.captureMessage("[SessionMonitor onReady] " + (e && e.message || e))
            }
            await e.monitorAuthCookie(i.handleNextUserId)
        };
        this.init = async function() {
            a.default.log("[SessionMonitor] monitorNetwork");
            e.monitorNetwork(i.initialize)
        };
        this.onReady = async function() {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            a.default.log("[SessionMonitor] onReady(" + [].concat(n) + ")");
            await t.apply(void 0, n)
        };
        this.onLogin = function() {
            a.default.log("[SessionMonitor] onLogin()");
            n.apply(void 0, arguments)
        };
        this.onLogout = function() {
            a.default.log("[SessionMonitor] onLogout()");
            r.apply(void 0, arguments)
        }
    };
    g.monitorAuthCookie = async function(e) {
        var t = void 0;
        try {
            t = await (0, l.getAndSetCsrfForContentScript)()
        } catch (e) {
            console.log(e)
        }(0, u.default)(i.HUBSPOT_CSRF_COOKIE_NAME, i.HUBSPOT_CSRF_COOKIE[r.default.getShort("api")].domain, async function(n) {
            var r = n.cookie.value;
            if (n.removed) {
                a.default.log("[SessionMonitor] CSRF cookie removed", n);
                t = null;
                e(null)
            } else if (t !== r) {
                a.default.log("[SessionMonitor] CSRF cookie changed", t, r, n);
                t = r;
                var i = await (0, c.fetchUser)();
                e(i && i.get("userId"))
            }
        })
    };
    g.logout = async function() {
        try {
            await (0, o.waitForChromeCookies)();
            s.default.cookies.remove({
                url: i.HUBSPOT_API_COOKIE[r.default.getShort("api")].url,
                name: i.HUBSPOT_API_COOKIE_NAME
            }, function(e) {
                var t = (0, f.getLastError)();
                !e && t && a.default.error("[SessionMonitor] logout: unable to remove HubSpot cookie: " + t.message)
            })
        } catch (e) {
            a.default.error("[SessionMonitor] logout failed: " + e)
        }
    };
    g.monitorNetwork = function(e) {
        var t = !1,
            n = function() {
                if (!t) {
                    e();
                    t = !0
                }
            };
        window.addEventListener("online", n);
        navigator.onLine && n()
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.startOnboardingFlow = t.getOnboardingURL = t.FIRST_RUN = t.FIRST_RUN_LOGGED_OUT = void 0;
    var r = n(10),
        i = (t.FIRST_RUN_LOGGED_OUT = "FIRST_RUN_LOGGED_OUT", t.FIRST_RUN = "FIRST_RUN", t.getOnboardingURL = function(e) {
            return "https://mail.google.com?hubspot_sales_onboarding=" + e
        });
    t.startOnboardingFlow = function(e) {
        var t = i(e);
        (0, r.openInActiveTab)(t)
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(36),
        i = l(n(0)),
        o = n(22),
        s = n(38),
        a = n(23),
        u = n(10),
        c = n(5);

    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var f = 1e4,
        h = 6e4,
        p = 240 * h,
        d = (0, c.getManifestVersion)(),
        g = "update_available",
        v = function() {
            (0, c.addInstalledListener)(function() {
                if ("update" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).reason) {
                    i.default.log("Updated to " + d);
                    (0, r.delay)(function() {
                        return a.UsageTracker.track(o.UPDATE_EXTENSION, {
                            version: d,
                            action: o.UPDATE_AVAILABLE
                        })
                    }, f)
                }
            });
            return (0, c.addUpdateAvailableListener)(function() {
                (0, u.restartExtension)()
            })
        },
        y = (0, r.throttle)(function() {
            i.default.log("Requesting update check");
            (0, c.requestUpdateCheck)(function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                i.default.log("Update check result: " + e + " " + t.version);
                e === g && a.UsageTracker.track(o.UPDATE_EXTENSION, {
                    version: d,
                    action: o.UPDATE_AVAILABLE
                })
            })
        }, p),
        m = (0, r.once)(function() {
            v();
            (0, r.delay)(function() {
                y();
                (0, s.setInterval)(y, p)
            }, h)
        });
    t.default = {
        start: m
    };
    e.exports = t.default
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(23),
        i = n(48),
        o = s(n(0));

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.default = function() {
        try {
            (0, r.initUnauthedTracker)();
            r.UsageTracker.track(i.PAGEVIEW)
        } catch (e) {
            o.default.log(e)
        }
    };
    e.exports = t.default
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = a(n(98)),
        i = a(n(112)),
        o = a(n(1)),
        s = a(n(114));

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.default = function() {
        i.default.registerHandler("EMAIL_CLICK", function(e) {
            var t = e.tracker_key,
                n = e.object,
                o = e.source,
                s = e.link_title,
                a = e.object_link;
            return {
                notificationKey: t,
                bigTitle: n,
                boldActionInfo: i.default.getSuggestedNameFromSource(o),
                overlayImageUrl: "overlay-link-click.png",
                textBeforeTimestamp: s || a ? (0, r.default)("notifications.clicked", {
                    linkTitle: s || a
                }) : (0, r.default)("notifications.clickedaLink")
            }
        });
        i.default.registerHandler("HUBSPOT_COMPANY_VISIT", function(e) {
            var t = e.object,
                n = e.object_link,
                o = e.source;
            return {
                notificationKey: n,
                bigTitle: i.default.getSuggestedNameFromSource(o),
                boldActionInfo: t,
                overlayImageUrl: "overlay-hubspot.png",
                textBeforeTimestamp: (0, r.default)("notifications.viewed")
            }
        });
        i.default.registerHandler("HUBSPOT_REVISIT", function(e) {
            var t = e.object,
                n = e.object_link,
                o = e.source;
            return {
                notificationKey: n,
                bigTitle: i.default.getSuggestedNameFromSource(o),
                boldActionInfo: t,
                overlayImageUrl: "overlay-hubspot.png",
                textBeforeTimestamp: (0, r.default)("notifications.viewed")
            }
        });
        i.default.registerHandler("COMPANYPROSPECTS_REVISIT", function(e) {
            var t = e.object,
                n = e.source;
            return {
                notificationKey: e.link,
                bigTitle: i.default.getSuggestedNameFromSource(n),
                boldActionInfo: t,
                overlayImageUrl: "overlay-hubspot.png",
                textBeforeTimestamp: (0, r.default)("notifications.viewed")
            }
        });
        i.default.registerHandler("PRESENTATION_REVISIT", function(e) {
            var t = e.object,
                n = e.object_link,
                o = e.source;
            return {
                notificationKey: n,
                bigTitle: i.default.getSuggestedNameFromSource(o),
                boldActionInfo: t,
                overlayImageUrl: "overlay-hubspot.png",
                textBeforeTimestamp: (0, r.default)("notifications.viewed")
            }
        });
        i.default.registerHandler("EMAIL_OPEN", function(e) {
            var t = e.tracker_key,
                n = e.object,
                o = e.source;
            return {
                notificationKey: t,
                bigTitle: n,
                boldActionInfo: i.default.getSuggestedNameFromSource(o),
                overlayImageUrl: "overlay-email-open.png",
                textBeforeTimestamp: (0, r.default)("notifications.opened")
            }
        });
        i.default.registerHandler("LIVE_CHAT_MESSAGE", function(e) {
            var t = e.link,
                n = e.object,
                i = e.object_link;
            return {
                link: t,
                bigTitle: (0, r.default)("notifications.newChat", {
                    objectLink: i || ""
                }),
                boldActionInfo: '"' + n + '"',
                imageUrl: o.default.extension.getURL("img/notification-icons/icon-chat-open.svg"),
                showTimestamp: !1,
                buttons: [{
                    title: (0, r.default)("notifications.clickToRespond"),
                    clickAction: function() {
                        return (0, s.default)(t)
                    }
                }]
            }
        })
    };
    e.exports = t.default
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(20),
        i = n(103),
        o = d(n(0)),
        s = n(18),
        a = n(115),
        u = n(10),
        c = n(140),
        l = n(5),
        f = n(7),
        h = n(141),
        p = n(142);

    function d(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function g(e, t, n) {
        t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n;
        return e
    }
    var v = "blacklistedExtensions",
        y = "apiProxyMethod",
        m = "route:restart",
        _ = "openSignup",
        b = "switchedPortal",
        O = "xhr_interceptor",
        w = "sendDebugLog";
    t.default = function() {
        var e, t = (g(e = {}, v, a.extensionCheckerHandler), g(e, y, i.apiProxyMethodHandler), g(e, m, function() {
            return (0, u.restartExtension)()
        }), g(e, _, c.openSignupHandler), g(e, b, function(e) {
            return (0, f.portalSwitchHandler)(e)
        }), g(e, O, h.xhrInterceptorMethodHandler), g(e, w, p.sendDebugLogHandler), e);
        (0, r.listenToContentScriptMethodsBatch)(t);
        var n = function(e) {
            o.default.debug("Got connection");
            e.postMessage({
                method: "userModel",
                user_profile: (0, s.getUser)().toJS()
            })
        };
        (0, l.addConnectListener)(n)
    };
    e.exports = t.default
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.openSignupHandler = void 0;
    var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        i = o(n(1));

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var s = null,
        a = null,
        u = ["getting-started", "getting-to-know-you"],
        c = ["check-your-email-go-to-mail"],
        l = function(e) {
            return u.some(function(t) {
                return e.includes(t)
            })
        },
        f = function(e) {
            return c.some(function(t) {
                return e.includes(t)
            })
        };
    t.openSignupHandler = function(e) {
        var t = e.windowOptions,
            n = e.url;
        i.default.windows.create(r({
            url: n
        }, t), function(e) {
            s = e.id;
            a = e.tabs[0] && e.tabs[0].id
        });
        i.default.tabs.onUpdated.addListener(function(e, t) {
            e === a && t.url && (l(t.url) || f(t.url)) && i.default.windows.remove(s)
        })
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.xhrInterceptorMethodHandler = void 0;
    var r = i(n(24));

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.xhrInterceptorMethodHandler = function(e) {
        r.default.captureMessage(e.message, {
            level: "fatal",
            stacktrace: e.stacktrace
        })
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.sendDebugLogHandler = void 0;
    var r = n(20),
        i = n(115),
        o = l(n(143)),
        s = n(26),
        a = l(n(56)),
        u = n(5),
        c = n(14);

    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.sendDebugLogHandler = function() {
        (0, i.getInstalledExtensions)().then(function(e) {
            var t = {
                extensionVersion: (0, u.getManifestVersion)(),
                chromeVersion: (0, o.default)(),
                userAgent: a.default.userAgent,
                notification: !(0, s.getDoNotDisturb)(),
                lastExtensionErrors: (0, c.getLastErrors)(),
                installedExtensions: e
            };
            (0, r.sendToContentScripts)("sendDebugLog", {
                debugLogData: t
            })
        })
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = i(n(38));

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var o = function() {
        var e = r.default.navigator.userAgent.match(/Chrom(?:e|ium)\/([0-9\.]+)/);
        return e ? e[1] : null
    };
    t.default = o;
    e.exports = t.default
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = a(n(26)),
        i = n(59),
        o = a(n(64)),
        s = a(n(7));

    function a(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        t.default = e;
        return t
    }
    t.default = function() {
        return {
            attributes: r,
            sessionMonitor: (0, i.getSessionMonitor)(),
            browserAction: o,
            PortalIdContainer: s
        }
    };
    e.exports = t.default
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = a(n(0)),
        i = a(n(24)),
        o = a(n(2)),
        s = n(5);

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var u = "https://mail.google.com/_/scs/mail-static",
        c = ["InboxSDK Implementation Version", "waitFor timeout", "Extension context invalidated.", "n.apply is not a function", "a.apply is not a function", "Cannot read property 'apply' of undefined", /failed with status (0|403|404)/, /Invocation of form runtime\.connect/],
        l = [/platform-implementation-js/],
        f = [new RegExp("chrome-extension://" + (0, s.getId)())],
        h = function() {
            if (o.default.deployed("raven")) {
                var e = {
                        ignoreErrors: c,
                        includePaths: f,
                        shouldSendCallback: function(e) {
                            return !l.find(function(t) {
                                var n = e.culprit,
                                    r = e.transaction,
                                    i = r && r.search(t) > -1,
                                    o = n && n.search(t) > -1;
                                return i || o
                            })
                        },
                        dataCallback: function(e) {
                            var t = e.stacktrace;
                            if (!t || !t.frames) return e;
                            t.frames = t.frames.filter(function(e) {
                                return !e.filename.includes(u)
                            });
                            return e
                        },
                        release: (0, s.getManifestVersion)()
                    },
                    t = "https://ca51b55e85514c39bb26d69b40c4621b@exceptions.hubspot.com/20529";
                i.default.config(t, e).install();
                window.onerror = function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    var o = t.find(function(e) {
                        return e && e.message
                    });
                    if (o) {
                        r.default.error(o);
                        return o.stack ? i.default.captureException(o) : i.default.captureException(o.message || o)
                    }
                    return null
                };
                r.default.log("Raven initialized")
            }
        };
    t.default = {
        init: h
    };
    e.exports = t.default
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = i(n(1));

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var o = ["http://localhost:8102", "https://app.hubspot.com", "https://app.hubspotqa.com", "https://local.hubspot.com", "https://local.hubspotqa.com", "https://local.hsappstatic.net", "https://static.hsappstatic.net"],
        s = o.concat(["https://talkgadget.google.com", "http://*.talkgadget.google.com"]).join(" "),
        a = o.join(" "),
        u = /content-security-policy/i,
        c = {
            urls: ["https://mail.google.com/*", "https://inbox.google.com/*"]
        },
        l = ["blocking", "responseHeaders"],
        f = function(e) {
            var t = e.responseHeaders,
                n = !0,
                r = !1,
                i = void 0;
            try {
                for (var o, c = t[Symbol.iterator](); !(n = (o = c.next()).done); n = !0) {
                    var l = o.value;
                    if (u.test(l.name)) {
                        var f = l.value;
                        f = (f = (f = f.replace("script-src", "script-src " + s)).replace("style-src", "style-src " + s)).replace("frame-src", "frame-src " + a);
                        l.value = f
                    }
                }
            } catch (e) {
                r = !0;
                i = e
            } finally {
                try {
                    !n && c.return && c.return()
                } finally {
                    if (r) throw i
                }
            }
            return {
                responseHeaders: t
            }
        },
        h = function() {
            r.default.webRequest.onHeadersReceived.addListener(f, c, l)
        };
    t.default = {
        init: h
    };
    e.exports = t.default
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.setupWebsocketListener = void 0;
    var r = n(10),
        i = null,
        o = 1e4;
    t.setupWebsocketListener = function() {
        if ("undefined" != typeof DEV_SERVER_WEBSOCKET_PORT) {
            var e = "localhost:";
            console.log("[WebSocket] Setting up listener");
            (function t() {
                (i = new WebSocket("ws://" + e + DEV_SERVER_WEBSOCKET_PORT)).onopen = function(e) {
                    console.log("[WebSocket] WebSocket is open now, event:", e)
                };
                i.onclose = function(e) {
                    console.log("[WebSocket] onclose:", e);
                    1006 === e.code && setTimeout(t, o)
                };
                i.onmessage = function(e) {
                    e.data && "reload" === e.data && (0, r.restartExtension)()
                }
            })()
        }
    }
}, function(e, t, n) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.fullReset = void 0;
    var r = f(n(35)),
        i = n(55),
        o = l(n(0)),
        s = l(n(1)),
        a = l(n(19)),
        u = n(18),
        c = n(7);

    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function f(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        t.default = e;
        return t
    }
    var h = async function(e, t) {
        var n = !0,
            s = !1,
            a = void 0;
        try {
            for (var u, c = Object.values(r)[Symbol.iterator](); !(n = (u = c.next()).done); n = !0) {
                var l = u.value;
                try {
                    await (0, i.deleteAttribute)(e, t, l)
                } catch (e) {
                    404 === e.status ? o.default.info(l + " did not exist") : o.default.warn("Unable to delete attribute: " + l + " - " + e.message)
                }
            }
        } catch (e) {
            s = !0;
            a = e
        } finally {
            try {
                !n && c.return && c.return()
            } finally {
                if (s) throw a
            }
        }
    }, p = function() {
        s.default.storage.local.clear();
        window.localStorage.clear()
    }, d = async function() {
        try {
            await a.default.get("/login-api/v1/logout/all")
        } catch (e) {
            503 !== e.status && o.default.error(e)
        }
    };
    t.fullReset = async function() {
        try {
            var e = (0, u.getUserId)(),
                t = (0, c.getPortalId)();
            o.default.warn("Resetting environment for user:portal " + e + ":" + t);
            t && e ? await h(t, e) : o.default.warn("Cannot reset remote data");
            p();
            await d();
            s.default.runtime.reload()
        } catch (e) {
            o.default.error("Failed to fully reset extension environment: " + e)
        }
    }
}]);
//# sourceMappingURL=Background.js.map