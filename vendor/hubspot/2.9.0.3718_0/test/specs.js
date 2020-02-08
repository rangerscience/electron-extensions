! function() {
    var e = "object" == typeof self && self.self === self && self || "object" == typeof global && global.global === global && global || this,
        t = e._,
        r = Array.prototype,
        n = Object.prototype,
        o = "undefined" != typeof Symbol ? Symbol.prototype : null,
        i = r.push,
        u = r.slice,
        a = n.toString,
        s = n.hasOwnProperty,
        c = Array.isArray,
        f = Object.keys,
        l = Object.create,
        p = function() {},
        d = function(e) {
            if (e instanceof d) return e;
            if (!(this instanceof d)) return new d(e);
            this._wrapped = e
        };
    if ("undefined" == typeof exports || exports.nodeType) e._ = d;
    else {
        "undefined" != typeof module && !module.nodeType && module.exports && (exports = module.exports = d);
        exports._ = d
    }
    d.VERSION = "1.8.3";
    var h = function(e, t, r) {
            if (void 0 === t) return e;
            switch (null == r ? 3 : r) {
                case 1:
                    return function(r) {
                        return e.call(t, r)
                    };
                case 3:
                    return function(r, n, o) {
                        return e.call(t, r, n, o)
                    };
                case 4:
                    return function(r, n, o, i) {
                        return e.call(t, r, n, o, i)
                    }
            }
            return function() {
                return e.apply(t, arguments)
            }
        },
        v = function(e, t, r) {
            return null == e ? d.identity : d.isFunction(e) ? h(e, t, r) : d.isObject(e) ? d.matcher(e) : d.property(e)
        };
    d.iteratee = function(e, t) {
        return v(e, t, 1 / 0)
    };
    var y = function(e, t) {
            t = null == t ? e.length - 1 : +t;
            return function() {
                for (var r = Math.max(arguments.length - t, 0), n = Array(r), o = 0; o < r; o++) n[o] = arguments[o + t];
                switch (t) {
                    case 0:
                        return e.call(this, n);
                    case 1:
                        return e.call(this, arguments[0], n);
                    case 2:
                        return e.call(this, arguments[0], arguments[1], n)
                }
                var i = Array(t + 1);
                for (o = 0; o < t; o++) i[o] = arguments[o];
                i[t] = n;
                return e.apply(this, i)
            }
        },
        _ = function(e) {
            if (!d.isObject(e)) return {};
            if (l) return l(e);
            p.prototype = e;
            var t = new p;
            p.prototype = null;
            return t
        },
        g = function(e) {
            return function(t) {
                return null == t ? void 0 : t[e]
            }
        },
        m = Math.pow(2, 53) - 1,
        b = g("length"),
        w = function(e) {
            var t = b(e);
            return "number" == typeof t && t >= 0 && t <= m
        };
    d.each = d.forEach = function(e, t, r) {
        t = h(t, r);
        var n, o;
        if (w(e))
            for (n = 0, o = e.length; n < o; n++) t(e[n], n, e);
        else {
            var i = d.keys(e);
            for (n = 0, o = i.length; n < o; n++) t(e[i[n]], i[n], e)
        }
        return e
    };
    d.map = d.collect = function(e, t, r) {
        t = v(t, r);
        for (var n = !w(e) && d.keys(e), o = (n || e).length, i = Array(o), u = 0; u < o; u++) {
            var a = n ? n[u] : u;
            i[u] = t(e[a], a, e)
        }
        return i
    };
    var E = function(e) {
        var t = function(t, r, n, o) {
            var i = !w(t) && d.keys(t),
                u = (i || t).length,
                a = e > 0 ? 0 : u - 1;
            if (!o) {
                n = t[i ? i[a] : a];
                a += e
            }
            for (; a >= 0 && a < u; a += e) {
                var s = i ? i[a] : a;
                n = r(n, t[s], s, t)
            }
            return n
        };
        return function(e, r, n, o) {
            var i = arguments.length >= 3;
            return t(e, h(r, o, 4), n, i)
        }
    };
    d.reduce = d.foldl = d.inject = E(1);
    d.reduceRight = d.foldr = E(-1);
    d.find = d.detect = function(e, t, r) {
        var n;
        if (void 0 !== (n = w(e) ? d.findIndex(e, t, r) : d.findKey(e, t, r)) && -1 !== n) return e[n]
    };
    d.filter = d.select = function(e, t, r) {
        var n = [];
        t = v(t, r);
        d.each(e, function(e, r, o) {
            t(e, r, o) && n.push(e)
        });
        return n
    };
    d.reject = function(e, t, r) {
        return d.filter(e, d.negate(v(t)), r)
    };
    d.every = d.all = function(e, t, r) {
        t = v(t, r);
        for (var n = !w(e) && d.keys(e), o = (n || e).length, i = 0; i < o; i++) {
            var u = n ? n[i] : i;
            if (!t(e[u], u, e)) return !1
        }
        return !0
    };
    d.some = d.any = function(e, t, r) {
        t = v(t, r);
        for (var n = !w(e) && d.keys(e), o = (n || e).length, i = 0; i < o; i++) {
            var u = n ? n[i] : i;
            if (t(e[u], u, e)) return !0
        }
        return !1
    };
    d.contains = d.includes = d.include = function(e, t, r, n) {
        w(e) || (e = d.values(e));
        ("number" != typeof r || n) && (r = 0);
        return d.indexOf(e, t, r) >= 0
    };
    d.invoke = y(function(e, t, r) {
        var n = d.isFunction(t);
        return d.map(e, function(e) {
            var o = n ? t : e[t];
            return null == o ? o : o.apply(e, r)
        })
    });
    d.pluck = function(e, t) {
        return d.map(e, d.property(t))
    };
    d.where = function(e, t) {
        return d.filter(e, d.matcher(t))
    };
    d.findWhere = function(e, t) {
        return d.find(e, d.matcher(t))
    };
    d.max = function(e, t, r) {
        var n, o, i = -1 / 0,
            u = -1 / 0;
        if (null == t || "number" == typeof t && "object" != typeof e[0] && null != e)
            for (var a = 0, s = (e = w(e) ? e : d.values(e)).length; a < s; a++) null != (n = e[a]) && n > i && (i = n);
        else {
            t = v(t, r);
            d.each(e, function(e, r, n) {
                if ((o = t(e, r, n)) > u || o === -1 / 0 && i === -1 / 0) {
                    i = e;
                    u = o
                }
            })
        }
        return i
    };
    d.min = function(e, t, r) {
        var n, o, i = 1 / 0,
            u = 1 / 0;
        if (null == t || "number" == typeof t && "object" != typeof e[0] && null != e)
            for (var a = 0, s = (e = w(e) ? e : d.values(e)).length; a < s; a++) null != (n = e[a]) && n < i && (i = n);
        else {
            t = v(t, r);
            d.each(e, function(e, r, n) {
                if ((o = t(e, r, n)) < u || o === 1 / 0 && i === 1 / 0) {
                    i = e;
                    u = o
                }
            })
        }
        return i
    };
    d.shuffle = function(e) {
        return d.sample(e, 1 / 0)
    };
    d.sample = function(e, t, r) {
        if (null == t || r) {
            w(e) || (e = d.values(e));
            return e[d.random(e.length - 1)]
        }
        var n = w(e) ? d.clone(e) : d.values(e),
            o = b(n);
        t = Math.max(Math.min(t, o), 0);
        for (var i = o - 1, u = 0; u < t; u++) {
            var a = d.random(u, i),
                s = n[u];
            n[u] = n[a];
            n[a] = s
        }
        return n.slice(0, t)
    };
    d.sortBy = function(e, t, r) {
        var n = 0;
        t = v(t, r);
        return d.pluck(d.map(e, function(e, r, o) {
            return {
                value: e,
                index: n++,
                criteria: t(e, r, o)
            }
        }).sort(function(e, t) {
            var r = e.criteria,
                n = t.criteria;
            if (r !== n) {
                if (r > n || void 0 === r) return 1;
                if (r < n || void 0 === n) return -1
            }
            return e.index - t.index
        }), "value")
    };
    var S = function(e, t) {
        return function(r, n, o) {
            var i = t ? [
                [],
                []
            ] : {};
            n = v(n, o);
            d.each(r, function(t, o) {
                var u = n(t, o, r);
                e(i, t, u)
            });
            return i
        }
    };
    d.groupBy = S(function(e, t, r) {
        d.has(e, r) ? e[r].push(t) : e[r] = [t]
    });
    d.indexBy = S(function(e, t, r) {
        e[r] = t
    });
    d.countBy = S(function(e, t, r) {
        d.has(e, r) ? e[r]++ : e[r] = 1
    });
    var O = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
    d.toArray = function(e) {
        return e ? d.isArray(e) ? u.call(e) : d.isString(e) ? e.match(O) : w(e) ? d.map(e) : d.values(e) : []
    };
    d.size = function(e) {
        return null == e ? 0 : w(e) ? e.length : d.keys(e).length
    };
    d.partition = S(function(e, t, r) {
        e[r ? 0 : 1].push(t)
    }, !0);
    d.first = d.head = d.take = function(e, t, r) {
        if (null != e) return null == t || r ? e[0] : d.initial(e, e.length - t)
    };
    d.initial = function(e, t, r) {
        return u.call(e, 0, Math.max(0, e.length - (null == t || r ? 1 : t)))
    };
    d.last = function(e, t, r) {
        if (null != e) return null == t || r ? e[e.length - 1] : d.rest(e, Math.max(0, e.length - t))
    };
    d.rest = d.tail = d.drop = function(e, t, r) {
        return u.call(e, null == t || r ? 1 : t)
    };
    d.compact = function(e) {
        return d.filter(e)
    };
    var k = function(e, t, r, n) {
        for (var o = (n = n || []).length, i = 0, u = b(e); i < u; i++) {
            var a = e[i];
            if (w(a) && (d.isArray(a) || d.isArguments(a)))
                if (t)
                    for (var s = 0, c = a.length; s < c;) n[o++] = a[s++];
                else {
                    k(a, t, r, n);
                    o = n.length
                }
            else r || (n[o++] = a)
        }
        return n
    };
    d.flatten = function(e, t) {
        return k(e, t, !1)
    };
    d.without = y(function(e, t) {
        return d.difference(e, t)
    });
    d.uniq = d.unique = function(e, t, r, n) {
        if (!d.isBoolean(t)) {
            n = r;
            r = t;
            t = !1
        }
        null != r && (r = v(r, n));
        for (var o = [], i = [], u = 0, a = b(e); u < a; u++) {
            var s = e[u],
                c = r ? r(s, u, e) : s;
            if (t) {
                u && i === c || o.push(s);
                i = c
            } else if (r) {
                if (!d.contains(i, c)) {
                    i.push(c);
                    o.push(s)
                }
            } else d.contains(o, s) || o.push(s)
        }
        return o
    };
    d.union = y(function(e) {
        return d.uniq(k(e, !0, !0))
    });
    d.intersection = function(e) {
        for (var t = [], r = arguments.length, n = 0, o = b(e); n < o; n++) {
            var i = e[n];
            if (!d.contains(t, i)) {
                var u;
                for (u = 1; u < r && d.contains(arguments[u], i); u++);
                u === r && t.push(i)
            }
        }
        return t
    };
    d.difference = y(function(e, t) {
        t = k(t, !0, !0);
        return d.filter(e, function(e) {
            return !d.contains(t, e)
        })
    });
    d.unzip = function(e) {
        for (var t = e && d.max(e, b).length || 0, r = Array(t), n = 0; n < t; n++) r[n] = d.pluck(e, n);
        return r
    };
    d.zip = y(d.unzip);
    d.object = function(e, t) {
        for (var r = {}, n = 0, o = b(e); n < o; n++) t ? r[e[n]] = t[n] : r[e[n][0]] = e[n][1];
        return r
    };
    var I = function(e) {
        return function(t, r, n) {
            r = v(r, n);
            for (var o = b(t), i = e > 0 ? 0 : o - 1; i >= 0 && i < o; i += e)
                if (r(t[i], i, t)) return i;
            return -1
        }
    };
    d.findIndex = I(1);
    d.findLastIndex = I(-1);
    d.sortedIndex = function(e, t, r, n) {
        for (var o = (r = v(r, n, 1))(t), i = 0, u = b(e); i < u;) {
            var a = Math.floor((i + u) / 2);
            r(e[a]) < o ? i = a + 1 : u = a
        }
        return i
    };
    var R = function(e, t, r) {
        return function(n, o, i) {
            var a = 0,
                s = b(n);
            if ("number" == typeof i) e > 0 ? a = i >= 0 ? i : Math.max(i + s, a) : s = i >= 0 ? Math.min(i + 1, s) : i + s + 1;
            else if (r && i && s) return n[i = r(n, o)] === o ? i : -1;
            if (o != o) return (i = t(u.call(n, a, s), d.isNaN)) >= 0 ? i + a : -1;
            for (i = e > 0 ? a : s - 1; i >= 0 && i < s; i += e)
                if (n[i] === o) return i;
            return -1
        }
    };
    d.indexOf = R(1, d.findIndex, d.sortedIndex);
    d.lastIndexOf = R(-1, d.findLastIndex);
    d.range = function(e, t, r) {
        if (null == t) {
            t = e || 0;
            e = 0
        }
        r || (r = t < e ? -1 : 1);
        for (var n = Math.max(Math.ceil((t - e) / r), 0), o = Array(n), i = 0; i < n; i++, e += r) o[i] = e;
        return o
    };
    d.chunk = function(e, t) {
        if (null == t || t < 1) return [];
        for (var r = [], n = 0, o = e.length; n < o;) r.push(u.call(e, n, n += t));
        return r
    };
    var T = function(e, t, r, n, o) {
        if (!(n instanceof t)) return e.apply(r, o);
        var i = _(e.prototype),
            u = e.apply(i, o);
        return d.isObject(u) ? u : i
    };
    d.bind = y(function(e, t, r) {
        if (!d.isFunction(e)) throw new TypeError("Bind must be called on a function");
        var n = y(function(o) {
            return T(e, n, t, this, r.concat(o))
        });
        return n
    });
    d.partial = y(function(e, t) {
        var r = d.partial.placeholder,
            n = function() {
                for (var o = 0, i = t.length, u = Array(i), a = 0; a < i; a++) u[a] = t[a] === r ? arguments[o++] : t[a];
                for (; o < arguments.length;) u.push(arguments[o++]);
                return T(e, n, this, this, u)
            };
        return n
    });
    d.partial.placeholder = d;
    d.bindAll = y(function(e, t) {
        var r = (t = k(t, !1, !1)).length;
        if (r < 1) throw new Error("bindAll must be passed function names");
        for (; r--;) {
            var n = t[r];
            e[n] = d.bind(e[n], e)
        }
    });
    d.memoize = function(e, t) {
        var r = function(n) {
            var o = r.cache,
                i = "" + (t ? t.apply(this, arguments) : n);
            d.has(o, i) || (o[i] = e.apply(this, arguments));
            return o[i]
        };
        r.cache = {};
        return r
    };
    d.delay = y(function(e, t, r) {
        return setTimeout(function() {
            return e.apply(null, r)
        }, t)
    });
    d.defer = d.partial(d.delay, d, 1);
    d.throttle = function(e, t, r) {
        var n, o, i, u, a = 0;
        r || (r = {});
        var s = function() {
                a = !1 === r.leading ? 0 : d.now();
                n = null;
                u = e.apply(o, i);
                n || (o = i = null)
            },
            c = function() {
                var c = d.now();
                a || !1 !== r.leading || (a = c);
                var f = t - (c - a);
                o = this;
                i = arguments;
                if (f <= 0 || f > t) {
                    if (n) {
                        clearTimeout(n);
                        n = null
                    }
                    a = c;
                    u = e.apply(o, i);
                    n || (o = i = null)
                } else n || !1 === r.trailing || (n = setTimeout(s, f));
                return u
            };
        c.cancel = function() {
            clearTimeout(n);
            a = 0;
            n = o = i = null
        };
        return c
    };
    d.debounce = function(e, t, r) {
        var n, o, i = function(t, r) {
                n = null;
                r && (o = e.apply(t, r))
            },
            u = y(function(u) {
                var a = r && !n;
                n && clearTimeout(n);
                if (a) {
                    n = setTimeout(i, t);
                    o = e.apply(this, u)
                } else r || (n = d.delay(i, t, this, u));
                return o
            });
        u.cancel = function() {
            clearTimeout(n);
            n = null
        };
        return u
    };
    d.wrap = function(e, t) {
        return d.partial(t, e)
    };
    d.negate = function(e) {
        return function() {
            return !e.apply(this, arguments)
        }
    };
    d.compose = function() {
        var e = arguments,
            t = e.length - 1;
        return function() {
            for (var r = t, n = e[t].apply(this, arguments); r--;) n = e[r].call(this, n);
            return n
        }
    };
    d.after = function(e, t) {
        return function() {
            if (--e < 1) return t.apply(this, arguments)
        }
    };
    d.before = function(e, t) {
        var r;
        return function() {
            --e > 0 && (r = t.apply(this, arguments));
            e <= 1 && (t = null);
            return r
        }
    };
    d.once = d.partial(d.before, 2);
    d.restArgs = y;
    var P = !{
            toString: null
        }.propertyIsEnumerable("toString"),
        A = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
        x = function(e, t) {
            var r = A.length,
                o = e.constructor,
                i = d.isFunction(o) && o.prototype || n,
                u = "constructor";
            d.has(e, u) && !d.contains(t, u) && t.push(u);
            for (; r--;)(u = A[r]) in e && e[u] !== i[u] && !d.contains(t, u) && t.push(u)
        };
    d.keys = function(e) {
        if (!d.isObject(e)) return [];
        if (f) return f(e);
        var t = [];
        for (var r in e) d.has(e, r) && t.push(r);
        P && x(e, t);
        return t
    };
    d.allKeys = function(e) {
        if (!d.isObject(e)) return [];
        var t = [];
        for (var r in e) t.push(r);
        P && x(e, t);
        return t
    };
    d.values = function(e) {
        for (var t = d.keys(e), r = t.length, n = Array(r), o = 0; o < r; o++) n[o] = e[t[o]];
        return n
    };
    d.mapObject = function(e, t, r) {
        t = v(t, r);
        for (var n = d.keys(e), o = n.length, i = {}, u = 0; u < o; u++) {
            var a = n[u];
            i[a] = t(e[a], a, e)
        }
        return i
    };
    d.pairs = function(e) {
        for (var t = d.keys(e), r = t.length, n = Array(r), o = 0; o < r; o++) n[o] = [t[o], e[t[o]]];
        return n
    };
    d.invert = function(e) {
        for (var t = {}, r = d.keys(e), n = 0, o = r.length; n < o; n++) t[e[r[n]]] = r[n];
        return t
    };
    d.functions = d.methods = function(e) {
        var t = [];
        for (var r in e) d.isFunction(e[r]) && t.push(r);
        return t.sort()
    };
    var M = function(e, t) {
        return function(r) {
            var n = arguments.length;
            t && (r = Object(r));
            if (n < 2 || null == r) return r;
            for (var o = 1; o < n; o++)
                for (var i = arguments[o], u = e(i), a = u.length, s = 0; s < a; s++) {
                    var c = u[s];
                    t && void 0 !== r[c] || (r[c] = i[c])
                }
            return r
        }
    };
    d.extend = M(d.allKeys);
    d.extendOwn = d.assign = M(d.keys);
    d.findKey = function(e, t, r) {
        t = v(t, r);
        for (var n, o = d.keys(e), i = 0, u = o.length; i < u; i++)
            if (t(e[n = o[i]], n, e)) return n
    };
    var j, C, L = function(e, t, r) {
        return t in r
    };
    d.pick = y(function(e, t) {
        var r = {},
            n = t[0];
        if (null == e) return r;
        if (d.isFunction(n)) {
            t.length > 1 && (n = h(n, t[1]));
            t = d.allKeys(e)
        } else {
            n = L;
            t = k(t, !1, !1);
            e = Object(e)
        }
        for (var o = 0, i = t.length; o < i; o++) {
            var u = t[o],
                a = e[u];
            n(a, u, e) && (r[u] = a)
        }
        return r
    });
    d.omit = y(function(e, t) {
        var r, n = t[0];
        if (d.isFunction(n)) {
            n = d.negate(n);
            t.length > 1 && (r = t[1])
        } else {
            t = d.map(k(t, !1, !1), String);
            n = function(e, r) {
                return !d.contains(t, r)
            }
        }
        return d.pick(e, n, r)
    });
    d.defaults = M(d.allKeys, !0);
    d.create = function(e, t) {
        var r = _(e);
        t && d.extendOwn(r, t);
        return r
    };
    d.clone = function(e) {
        return d.isObject(e) ? d.isArray(e) ? e.slice() : d.extend({}, e) : e
    };
    d.tap = function(e, t) {
        t(e);
        return e
    };
    d.isMatch = function(e, t) {
        var r = d.keys(t),
            n = r.length;
        if (null == e) return !n;
        for (var o = Object(e), i = 0; i < n; i++) {
            var u = r[i];
            if (t[u] !== o[u] || !(u in o)) return !1
        }
        return !0
    };
    j = function(e, t, r, n) {
        if (e === t) return 0 !== e || 1 / e == 1 / t;
        if (null == e || null == t) return e === t;
        if (e != e) return t != t;
        var o = typeof e;
        return ("function" === o || "object" === o || "object" == typeof t) && C(e, t, r, n)
    };
    C = function(e, t, r, n) {
        e instanceof d && (e = e._wrapped);
        t instanceof d && (t = t._wrapped);
        var i = a.call(e);
        if (i !== a.call(t)) return !1;
        switch (i) {
            case "[object RegExp]":
            case "[object String]":
                return "" + e == "" + t;
            case "[object Number]":
                return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
            case "[object Date]":
            case "[object Boolean]":
                return +e == +t;
            case "[object Symbol]":
                return o.valueOf.call(e) === o.valueOf.call(t)
        }
        var u = "[object Array]" === i;
        if (!u) {
            if ("object" != typeof e || "object" != typeof t) return !1;
            var s = e.constructor,
                c = t.constructor;
            if (s !== c && !(d.isFunction(s) && s instanceof s && d.isFunction(c) && c instanceof c) && "constructor" in e && "constructor" in t) return !1
        }
        r = r || [];
        n = n || [];
        for (var f = r.length; f--;)
            if (r[f] === e) return n[f] === t;
        r.push(e);
        n.push(t);
        if (u) {
            if ((f = e.length) !== t.length) return !1;
            for (; f--;)
                if (!j(e[f], t[f], r, n)) return !1
        } else {
            var l, p = d.keys(e);
            f = p.length;
            if (d.keys(t).length !== f) return !1;
            for (; f--;) {
                l = p[f];
                if (!d.has(t, l) || !j(e[l], t[l], r, n)) return !1
            }
        }
        r.pop();
        n.pop();
        return !0
    };
    d.isEqual = function(e, t) {
        return j(e, t)
    };
    d.isEmpty = function(e) {
        return null == e || (w(e) && (d.isArray(e) || d.isString(e) || d.isArguments(e)) ? 0 === e.length : 0 === d.keys(e).length)
    };
    d.isElement = function(e) {
        return !(!e || 1 !== e.nodeType)
    };
    d.isArray = c || function(e) {
        return "[object Array]" === a.call(e)
    };
    d.isObject = function(e) {
        var t = typeof e;
        return "function" === t || "object" === t && !!e
    };
    d.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error", "Symbol", "Map", "WeakMap", "Set", "WeakSet"], function(e) {
        d["is" + e] = function(t) {
            return a.call(t) === "[object " + e + "]"
        }
    });
    d.isArguments(arguments) || (d.isArguments = function(e) {
        return d.has(e, "callee")
    });
    var q = e.document && e.document.childNodes;
    "function" != typeof /./ && "object" != typeof Int8Array && "function" != typeof q && (d.isFunction = function(e) {
        return "function" == typeof e || !1
    });
    d.isFinite = function(e) {
        return !d.isSymbol(e) && isFinite(e) && !isNaN(parseFloat(e))
    };
    d.isNaN = function(e) {
        return d.isNumber(e) && isNaN(e)
    };
    d.isBoolean = function(e) {
        return !0 === e || !1 === e || "[object Boolean]" === a.call(e)
    };
    d.isNull = function(e) {
        return null === e
    };
    d.isUndefined = function(e) {
        return void 0 === e
    };
    d.has = function(e, t) {
        return null != e && s.call(e, t)
    };
    d.noConflict = function() {
        e._ = t;
        return this
    };
    d.identity = function(e) {
        return e
    };
    d.constant = function(e) {
        return function() {
            return e
        }
    };
    d.noop = function() {};
    d.property = g;
    d.propertyOf = function(e) {
        return null == e ? function() {} : function(t) {
            return e[t]
        }
    };
    d.matcher = d.matches = function(e) {
        e = d.extendOwn({}, e);
        return function(t) {
            return d.isMatch(t, e)
        }
    };
    d.times = function(e, t, r) {
        var n = Array(Math.max(0, e));
        t = h(t, r, 1);
        for (var o = 0; o < e; o++) n[o] = t(o);
        return n
    };
    d.random = function(e, t) {
        if (null == t) {
            t = e;
            e = 0
        }
        return e + Math.floor(Math.random() * (t - e + 1))
    };
    d.now = Date.now || function() {
        return (new Date).getTime()
    };
    var N = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        },
        U = d.invert(N),
        D = function(e) {
            var t = function(t) {
                    return e[t]
                },
                r = "(?:" + d.keys(e).join("|") + ")",
                n = RegExp(r),
                o = RegExp(r, "g");
            return function(e) {
                e = null == e ? "" : "" + e;
                return n.test(e) ? e.replace(o, t) : e
            }
        };
    d.escape = D(N);
    d.unescape = D(U);
    d.result = function(e, t, r) {
        var n = null == e ? void 0 : e[t];
        void 0 === n && (n = r);
        return d.isFunction(n) ? n.call(e) : n
    };
    var z = 0;
    d.uniqueId = function(e) {
        var t = ++z + "";
        return e ? e + t : t
    };
    d.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var B = /(.)^/,
        K = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        H = /\\|'|\r|\n|\u2028|\u2029/g,
        F = function(e) {
            return "\\" + K[e]
        };
    d.template = function(e, t, r) {
        !t && r && (t = r);
        t = d.defaults({}, t, d.templateSettings);
        var n, o = RegExp([(t.escape || B).source, (t.interpolate || B).source, (t.evaluate || B).source].join("|") + "|$", "g"),
            i = 0,
            u = "__p+='";
        e.replace(o, function(t, r, n, o, a) {
            u += e.slice(i, a).replace(H, F);
            i = a + t.length;
            r ? u += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'" : n ? u += "'+\n((__t=(" + n + "))==null?'':__t)+\n'" : o && (u += "';\n" + o + "\n__p+='");
            return t
        });
        u += "';\n";
        t.variable || (u = "with(obj||{}){\n" + u + "}\n");
        u = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + u + "return __p;\n";
        try {
            n = new Function(t.variable || "obj", "_", u)
        } catch (e) {
            e.source = u;
            throw e
        }
        var a = function(e) {
                return n.call(this, e, d)
            },
            s = t.variable || "obj";
        a.source = "function(" + s + "){\n" + u + "}";
        return a
    };
    d.chain = function(e) {
        var t = d(e);
        t._chain = !0;
        return t
    };
    var G = function(e, t) {
        return e._chain ? d(t).chain() : t
    };
    d.mixin = function(e) {
        d.each(d.functions(e), function(t) {
            var r = d[t] = e[t];
            d.prototype[t] = function() {
                var e = [this._wrapped];
                i.apply(e, arguments);
                return G(this, r.apply(d, e))
            }
        })
    };
    d.mixin(d);
    d.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
        var t = r[e];
        d.prototype[e] = function() {
            var r = this._wrapped;
            t.apply(r, arguments);
            "shift" !== e && "splice" !== e || 0 !== r.length || delete r[0];
            return G(this, r)
        }
    });
    d.each(["concat", "join", "slice"], function(e) {
        var t = r[e];
        d.prototype[e] = function() {
            return G(this, t.apply(this._wrapped, arguments))
        }
    });
    d.prototype.value = function() {
        return this._wrapped
    };
    d.prototype.valueOf = d.prototype.toJSON = d.prototype.value;
    d.prototype.toString = function() {
        return "" + this._wrapped
    };
    "function" == typeof define && define.amd && define("underscore", [], function() {
        return d
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
        r = t.Q;
    t.Q = e();
    t.Q.noConflict = function() {
        t.Q = r;
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
    var t, r = m(),
        n = function() {
            var e = {
                    task: void 0,
                    next: null
                },
                t = e,
                r = !1,
                o = void 0,
                i = !1,
                u = [];

            function a() {
                for (var t, n; e.next;) {
                    t = (e = e.next).task;
                    e.task = void 0;
                    if (n = e.domain) {
                        e.domain = void 0;
                        n.enter()
                    }
                    s(t, n)
                }
                for (; u.length;) s(t = u.pop());
                r = !1
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
            n = function(e) {
                t = t.next = {
                    task: e,
                    domain: i && process.domain,
                    next: null
                };
                if (!r) {
                    r = !0;
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
            n.runAfter = function(e) {
                u.push(e);
                if (!r) {
                    r = !0;
                    o()
                }
            };
            return n
        }(),
        o = Function.call;

    function i(e) {
        return function() {
            return o.apply(e, arguments)
        }
    }
    var u = i(Array.prototype.slice),
        a = i(Array.prototype.reduce),
        s = i(Array.prototype.indexOf),
        c = i(Array.prototype.map),
        f = Object.create,
        l = Object.defineProperty;

    function p(e) {
        return e === Object(e)
    }
    var d = "From previous event:";

    function h(t, r) {
        if (e && r.stack && "object" == typeof t && null !== t && t.stack) {
            for (var n = [], o = r; o; o = o.source)
                if (o.stack && (!t.__minimumStackCounter__ || t.__minimumStackCounter__ > o.stackCounter)) {
                    l(t, "__minimumStackCounter__", {
                        value: o.stackCounter,
                        configurable: !0
                    });
                    n.unshift(o.stack)
                } n.unshift(t.stack);
            var i = v(n.join("\n" + d + "\n"));
            l(t, "stack", {
                value: i,
                configurable: !0
            })
        }
    }

    function v(e) {
        for (var t = e.split("\n"), r = [], n = 0; n < t.length; ++n) {
            var o = t[n];
            g(o) || y(o) || !o || r.push(o)
        }
        return r.join("\n")
    }

    function y(e) {
        return -1 !== e.indexOf("(module.js:") || -1 !== e.indexOf("(node.js:")
    }

    function _(e) {
        var t = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(e);
        if (t) return [t[1], Number(t[2])];
        var r = /at ([^ ]+):(\d+):(?:\d+)$/.exec(e);
        if (r) return [r[1], Number(r[2])];
        var n = /.*@(.+):(\d+)$/.exec(e);
        return n ? [n[1], Number(n[2])] : void 0
    }

    function g(e) {
        var n = _(e);
        if (!n) return !1;
        var o = n[0],
            i = n[1];
        return o === t && i >= r && i <= G
    }

    function m() {
        if (e) try {
            throw new Error
        } catch (e) {
            var r = e.stack.split("\n"),
                n = _(r[0].indexOf("@") > 0 ? r[1] : r[2]);
            if (!n) return;
            t = n[0];
            return n[1]
        }
    }

    function b(e) {
        return e instanceof P ? e : M(e) ? B(e) : z(e)
    }
    var w = {
            longStackSupport: !1
        },
        E = 1;
    "object" == typeof process && process && process.env && process.env.Q_DEBUG && (w.longStackSupport = !0);

    function S() {
        var t, r = [],
            o = f(S.prototype),
            i = f(P.prototype);
        i.promiseDispatch = function(e, o, i) {
            var a = u(arguments);
            r ? r.push(a) : n(function() {
                t.promiseDispatch.apply(t, a)
            })
        };
        i._inspect = function() {
            return t ? t._inspect() : {
                state: "pending"
            }
        };
        if (w.longStackSupport && e) try {
            throw new Error
        } catch (e) {
            i.stack = e.stack.substring(e.stack.indexOf("\n") + 1);
            i.stackCounter = E++
        }

        function s(o) {
            t = o;
            w.longStackSupport && e && (i.source = o);
            a(r, function(e, t) {
                n(function() {
                    o.promiseDispatch.apply(o, t)
                })
            }, void 0);
            r = void 0
        }
        o.promise = i;
        o.resolve = function(e) {
            t || s(b(e))
        };
        o.reject = function(e) {
            t || s(D(e))
        };
        return o
    }
    w.Promise = O;

    function O(e) {
        if (!(this instanceof O)) throw Error("must use `new` with `Q.Promise` constructor.");
        if ("function" != typeof e) throw new TypeError("resolver must be a function.");
        var t = S();
        try {
            e(t.resolve, t.reject)
        } catch (e) {
            t.reject(e)
        }
        return t.promise
    }
    var k, I = (k = {}, function(e) {
        if (!k[e]) {
            k[e] = !0;
            window.enviro && (window.enviro.deployed && !window.enviro.deployed("q") || window.enviro.debug && window.enviro.debug("q")) && console.error(e);
            window.newrelic && window.newrelic.addPageAction && window.newrelic.addPageAction("Qv6DeprecationWarning", {
                deprecationMessage: e
            })
        }
    });

    function R(e, t, r) {
        return function n(o) {
            this instanceof n ? I("Q.Promise." + t + " is not a constructor") : this !== O && I("Q.Promise." + t + " not called on Q.Promise");
            r && (o && "function" == typeof o[Symbol.iterator] ? Array.isArray(o) || I("Q.Promise." + t + " called with non-array") : I("Q.Promise." + t + " called with non-iterable"));
            return e.apply(this, arguments)
        }
    }
    O.race = R(T, "race", !0);
    O.all = R(F, "all", !0);
    O.reject = R(D, "reject");
    O.resolve = R(b, "resolve");

    function T(e) {
        return new O(function(t, r) {
            for (var n = 0, o = e.length; n < o; n++) b(e[n]).then(t, r)
        })
    }

    function P(e, t, r) {
        void 0 === t && (t = function(e) {
            return D(new Error("Promise does not support operation: " + e))
        });
        void 0 === r && (r = function() {
            return {
                state: "unknown"
            }
        });
        var n = f(P.prototype);
        n.promiseDispatch = function(r, o, i) {
            var u;
            try {
                u = e[o] ? e[o].apply(n, i) : t.call(n, o, i)
            } catch (e) {
                u = D(e)
            }
            r && r(u)
        };
        n._inspect = r;
        if (r) {
            var o = r();
            "rejected" === o.state && (n.exception = o.reason)
        }
        return n
    }
    P.prototype.toString = function() {
        return "[object Promise]"
    };
    P.prototype.then = function(e, t) {
        var r = this,
            o = S(),
            i = !1;

        function u(t) {
            try {
                return "function" == typeof e ? e(t) : t
            } catch (e) {
                return D(e)
            }
        }

        function a(e) {
            if ("function" == typeof t) {
                h(e, r);
                try {
                    return t(e)
                } catch (e) {
                    return D(e)
                }
            }
            return D(e)
        }
        n(function() {
            r.promiseDispatch(function(e) {
                if (!i) {
                    i = !0;
                    o.resolve(u(e))
                }
            }, "when", [function(e) {
                if (!i) {
                    i = !0;
                    o.resolve(a(e))
                }
            }])
        });
        return o.promise
    };

    function A(e, t, r) {
        return b(e).then(t, r)
    }

    function x(e) {
        return e instanceof P
    }

    function M(e) {
        return p(e) && "function" == typeof e.then
    }
    var j = [],
        C = [],
        L = !0;

    function q() {
        j.length = 0;
        C.length = 0;
        L || (L = !0)
    }

    function N(e, t) {
        if (L) {
            C.push(e);
            var r = t + "";
            w.customizeRejectionString && (r = w.customizeRejectionString(t));
            t && void 0 !== t.stack ? t.stack.slice && t.stack.slice(0, r.length) === r ? j.push(t.stack) : j.push(r + "\n" + t.stack) : j.push("(no stack) " + r)
        }
    }

    function U(e) {
        if (L) {
            var t = s(C, e);
            if (-1 !== t) {
                C.splice(t, 1);
                j.splice(t, 1)
            }
        }
    }
    w.resetUnhandledRejections = q;
    w.getUnhandledReasons = function() {
        return j.slice()
    };
    w.stopUnhandledRejectionTracking = function() {
        q();
        L = !1
    };
    w.getUnhandledRejectionValues = function() {
        return c(C, function(e) {
            return e.exception
        })
    };
    q();

    function D(e) {
        var t = P({
            when: function(t) {
                t && U(this);
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
        N(t, e);
        return t
    }

    function z(e) {
        return P({
            when: function() {
                return e
            },
            apply: function(t, r) {
                return e.apply(t, r)
            }
        }, void 0, function() {
            return {
                state: "fulfilled",
                value: e
            }
        })
    }

    function B(e) {
        var t = S();
        n(function() {
            try {
                e.then(t.resolve, t.reject)
            } catch (e) {
                t.reject(e)
            }
        });
        return t.promise
    }

    function K(e, t, r) {
        var o = S();
        n(function() {
            e.promiseDispatch(o.resolve, t, r)
        });
        return o.promise
    }

    function H(e) {
        return K(e, "apply", [void 0, u(arguments, 1)])
    }

    function F(e) {
        return A(e, function(e) {
            var t = 0,
                r = S();
            a(e, function(n, o, i) {
                var u;
                if (x(o) && "fulfilled" === (u = o._inspect()).state) e[i] = u.value;
                else {
                    ++t;
                    A(o, function(n) {
                        e[i] = n;
                        0 == --t && r.resolve(e)
                    }, r.reject)
                }
            }, void 0);
            0 === t && r.resolve(e);
            return r.promise
        })
    }
    P.prototype.catch = function(e) {
        return this.then(void 0, e)
    };
    P.prototype.finally = function(e) {
        if (!e || "function" != typeof e.apply) throw new Error("Q can't apply finally callback");
        e = b(e);
        return this.then(function(t) {
            return H(e).then(function() {
                return t
            })
        }, function(t) {
            return H(e).then(function() {
                throw t
            })
        })
    };
    P.prototype.done = function(e, t) {
        var r = function(e) {
                n(function() {
                    h(e, o);
                    if (!w.onerror) throw e;
                    w.onerror(e)
                })
            },
            o = e || t ? this.then(e, t) : this;
        o.then(void 0, r)
    };
    var G = m();
    return w
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

    function r(n) {
        if (t[n]) return t[n].exports;
        var o = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        e[n].call(o.exports, o, o.exports, r);
        o.l = !0;
        return o.exports
    }
    r.m = e;
    r.c = t;
    r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    };
    r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        r.d(t, "a", t);
        return t
    };
    r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    };
    r.p = "//static.hsappstatic.net/SignalsExtension/static-2.297/";
    r(r.s = 154)
}([function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1;
                    n.configurable = !0;
                    "value" in n && (n.writable = !0);
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                r && e(t.prototype, r);
                n && e(t, n);
                return t
            }
        }(),
        o = s(r(2)),
        i = s(r(27)),
        u = r(25),
        a = r(14);

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
        n(e, [{
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
            value: function(t, r) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (!this._shouldLog(t, r)) return u.emptyFunction;
                var o = e.CONSOLE_FN[t] || e.CONSOLE_FN.log || u.emptyFunction;
                return function() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    var i = new Array(t.length + 1);
                    i[0] = "[HubSpot Sales]";
                    for (var u = 0; u < t.length; u++) {
                        var s = t[u];
                        i[u + 1] = this._formatError(s)
                    }
                    n && i.length > 1 && (0, a.newErrorEntry)(i[1]);
                    return this._callLogFn(o, i)
                }.bind(this)
            }
        }, {
            key: "_callLogFn",
            value: function(t, r) {
                return t.apply(e.CONSOLE_FN, r)
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
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = chrome;
    e.exports = t.default
}, function(e, t) {
    e.exports = hubspot.requireSync("enviro")
}, function(e, t, r) {
    e.exports = hubspot.requireSync("q")
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.safeMode = t.retry = t.validateStatus = t.reportOptionsError = t.jsonResponse = t.responseInterceptor = t.onResponseError = t.onResponse = t.jsonBody = t.bodyType = t.standardApi = t.withApiAsOption = t.environmentUrl = t.httpsOnly = t.withQuery = t.query = t.base = t.header = t.method = t.defaultTo = t.withOptions = t.withUrl = t.resolveApi = t.validateOptions = t.services = void 0;
    var n = function() {
            function e(e, t) {
                var r = [],
                    n = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var u, a = e[Symbol.iterator](); !(n = (u = a.next()).done); n = !0) {
                        r.push(u.value);
                        if (t && r.length === t) break
                    }
                } catch (e) {
                    o = !0;
                    i = e
                } finally {
                    try {
                        !n && a.return && a.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return r
            }
            return function(t, r) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, r);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        o = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        },
        i = h(r(2)),
        u = r(9),
        a = r(8),
        s = r(6),
        c = r(29),
        f = r(30),
        l = d(r(41)),
        p = d(r(70));

    function d(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        t.default = e;
        return t
    }

    function h(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var v = function() {
            try {
                return window.localStorage
            } catch (e) {
                console.error("[hub-http] Exception accessing local storage.", e);
                return
            }
        },
        y = function() {
            return window.hubspot && window.hubspot.bender ? {
                name: window.hubspot.bender.currentProject,
                version: window.hubspot.bender.currentProjectVersion
            } : null
        },
        _ = (t.services = function(e) {
            return o({
                location: window.location,
                cookies: window.document.cookie,
                localStorage: v(),
                document: window.document,
                appInfo: y()
            }, e)
        }, t.validateOptions = function(e, t) {
            return function(r) {
                if (!e || "function" != typeof e) throw new Error("validator must be a function");
                if (!e(r)) throw new Error(t);
                return r
            }
        }, t.resolveApi = function(e) {
            var t = i.default.getShort("hub-http"),
                r = "local" === t ? "local" : "deployed",
                n = e[r] ? e[r][t] : null;
            if (!n) throw new Error("No hostname defined for environment " + t + " and " + r);
            return n
        }),
        g = Symbol("url"),
        m = t.withUrl = function(e) {
            return function(t) {
                var r = t[g] || (0, f.parseUrl)(t.url);
                r = e(r);
                t = (0, s.set)(g, r)(t);
                return t = (0, s.set)("url", (0, f.buildUrl)(r))(t)
            }
        },
        b = (t.withOptions = function(e, t) {
            return Object.assign({}, e, t)
        }, function(e, t) {
            var r = t && t._input ? t._input : t;
            return void 0 !== r[e] ? r[e] : void 0
        }),
        w = t.defaultTo = function(e, t) {
            return function(r) {
                return void 0 === b(e, r) ? (0, s.set)(e, t)(r) : r
            }
        },
        E = (t.method = function(e) {
            return w("method", e)
        }, t.header = function(e, t, r) {
            return function(n) {
                var o = p.getHeader(e, n);
                return r || void 0 === o ? p.setHeader(e, t, n) : n
            }
        }),
        S = (t.base = function(e) {
            return function(t) {
                return (0, s.set)("url", e + t.url)(t)
            }
        }, Symbol("initialQuery")),
        O = Symbol("noOverrideQuery"),
        k = Symbol("overrideQuery"),
        I = t.query = function(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            return m(function(r) {
                var i = r;
                void 0 === i[S] && (i = (0, s.set)(S, r.query || "")(i));
                var u = t ? [k, i[k], e] : [O, e, i[O]],
                    a = n(u, 3),
                    c = a[0],
                    f = a[1],
                    p = a[2];
                i = (0, s.setIn)([c], o({}, f, p))(i);
                return (0, s.set)("query", [i[S], l.stringify(o({}, i[k], i[O]))].filter(Boolean).join("&"))(i)
            })
        },
        R = (t.withQuery = function(e) {
            return I(e.query, !1)(e)
        }, t.httpsOnly = m((0, s.set)("protocol", "https")), t.environmentUrl = function(e) {
            return function(t) {
                return m(function(r) {
                    !r.protocol && t.location && (r.protocol = t.location.protocol.slice(0, -1));
                    if (!r.hostname) {
                        var n = t.api || e;
                        r.hostname = _(n)
                    }
                    return r
                })(t)
            }
        }),
        T = (t.withApiAsOption = function(e) {
            if (!e.api) throw new Error("Missing api option. Expected api object (you can create one with the standardApi function");
            return R(null)(e)
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
            return function(r) {
                (r = E("content-type", e)(r)).rawData ? r.data = r.rawData : "function" == typeof t && p.getHeader("content-type", r) === e && (r.data = t(r.data));
                return r
            }
        }),
        P = (t.jsonBody = function(e) {
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
        A = t.onResponse = function(e) {
            return (0, c.handleResponse)(function(t) {
                return t.then(P(e))
            })
        },
        x = (t.onResponseError = function(e) {
            return (0, c.handleResponse)(function(t) {
                return t.catch(P(e))
            })
        }, t.responseInterceptor = function(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            return (0, c.handleResponse)(function(r) {
                return r.then(P(e), function(r) {
                    return t ? a.Promise.reject(e(r)) : e(r)
                })
            })
        }, function(e) {
            return e && e.headers && p.getHeader("content-type", e) || ""
        });
    t.jsonResponse = (0, u.createStack)(E("Accept", "application/json, text/javascript, */*; q=0.01"), A(function(e) {
        return (0, s.setIf)("string" == typeof e.data && 0 === x(e).indexOf("application/json"), "data", function() {
            return e.data.length ? JSON.parse(e.data) : void 0
        })(e)
    })), t.reportOptionsError = A(function(e) {
        return "OPTIONSERROR" === e.errorCode ? a.Promise.reject((0, c.responseError)(e, "hub-http error building request options: " + e.options.error.message)) : e
    }), t.validateStatus = function(e) {
        return A(function(t) {
            return t.status >= 200 && t.status < 300 ? t : a.Promise.reject((0, c.responseError)(t, "Request for " + e.url + " failed with status " + t.status + ". " + (t.statusText || "")))
        })(e)
    }, t.retry = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = t.reason,
            n = t.maxRetries,
            o = void 0 === n ? 1 : n,
            i = t.delay,
            c = void 0 === i ? 250 : i,
            f = t.onMaxAttemptsReached;
        return function(t) {
            var n = function(t) {
                if (e(t)) {
                    var n = (0, s.set)("retry", {
                        reason: r,
                        maxRetries: o,
                        delay: c,
                        exceededRetries: t.options.retryAttempts >= o
                    })(t);
                    return a.Promise.reject(n)
                }
                return t
            };
            return 0 === o ? t : (t.retryAttempts >= o && "function" == typeof f ? (0, u.createStack)(A(n), f) : A(n))(t)
        }
    }, t.safeMode = (0, s.set)("safeMode", !0)
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.requestUpdateCheck = t.addUpdateAvailableListener = t.addInstalledListener = t.getId = t.getManifestVersion = t.getLastError = t.reload = t.connect = t.sendMessage = t.addConnectListener = t.addMessageListener = t.callRuntimeMethodSafe = t.RUNTIME_ERROR_THRESHOLD = t.GET_ID = t.GET_MANIFEST_VERSION = t.LAST_ERROR = t.RELOAD = t.CONNECT = t.REQUEST_UPDATE_CHECK = t.ON_UPDATE_AVAILABLE_LISTENER = t.ON_INSTALLED_LISTENER = t.ON_CONNECT_LISTENER = t.ON_MESSAGE_LISTENER = t.SEND_MESSAGE = void 0;
    var n = r(31),
        o = r(32),
        i = t.SEND_MESSAGE = "SEND_MESSAGE",
        u = t.ON_MESSAGE_LISTENER = "ON_MESSAGE_LISTENER",
        a = t.ON_CONNECT_LISTENER = "ON_CONNECT_LISTENER",
        s = t.ON_INSTALLED_LISTENER = "ON_INSTALLED_LISTENER",
        c = t.ON_UPDATE_AVAILABLE_LISTENER = "ON_UPDATE_AVAILABLE_LISTENER",
        f = t.REQUEST_UPDATE_CHECK = "REQUEST_UPDATE_CHECK",
        l = t.CONNECT = "CONNECT",
        p = t.RELOAD = "RELOAD",
        d = t.LAST_ERROR = "LAST_ERROR",
        h = t.GET_MANIFEST_VERSION = "GET_MANIFEST_VERSION",
        v = t.GET_ID = "GET_ID",
        y = t.RUNTIME_ERROR_THRESHOLD = 5,
        _ = t.callRuntimeMethodSafe = function(e) {
            for (var t, r, _, g, m, b, w, E, S, O = arguments.length, k = Array(O > 1 ? O - 1 : 0), I = 1; I < O; I++) k[I - 1] = arguments[I];
            try {
                switch (e) {
                    case i:
                        return (t = n.chrome.runtime).sendMessage.apply(t, k);
                    case u:
                        return (r = n.chrome.runtime.onMessage).addListener.apply(r, k);
                    case a:
                        return (_ = n.chrome.runtime.onConnect).addListener.apply(_, k);
                    case l:
                        return (g = n.chrome.runtime).connect.apply(g, k);
                    case p:
                        return (m = n.chrome.runtime).reload.apply(m, k);
                    case d:
                        return n.chrome.runtime.lastError;
                    case h:
                        return (b = n.chrome.runtime).getManifest.apply(b, k).version;
                    case v:
                        return n.chrome.runtime.id;
                    case s:
                        return (w = n.chrome.runtime.onInstalled).addListener.apply(w, k);
                    case c:
                        return (E = n.chrome.runtime.onUpdateAvailable).addListener.apply(E, k);
                    case f:
                        return (S = n.chrome.runtime).requestUpdateCheck.apply(S, k);
                    default:
                        return null
                }
            } catch (t) {
                if (!n.chrome.runtime) {
                    sessionStorage.runtimeError ? sessionStorage.runtimeError > y ? (0, o.LogWarn)({
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
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return _.apply(void 0, [u].concat(t))
    }, t.addConnectListener = function() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return _.apply(void 0, [a].concat(t))
    }, t.sendMessage = function() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return _.apply(void 0, [i].concat(t))
    }, t.connect = function() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return _.apply(void 0, [l].concat(t))
    }, t.reload = function() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return _.apply(void 0, [p].concat(t))
    }, t.getLastError = function() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return _.apply(void 0, [d].concat(t))
    }, t.getManifestVersion = function() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return _.apply(void 0, [h].concat(t))
    }, t.getId = function() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return _.apply(void 0, [v].concat(t))
    }, t.addInstalledListener = function() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return _.apply(void 0, [s].concat(t))
    }, t.addUpdateAvailableListener = function() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return _.apply(void 0, [c].concat(t))
    }, t.requestUpdateCheck = function() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return _.apply(void 0, [f].concat(t))
    }
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.setIf = t.setIn = t.push = t.set = void 0;
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        o = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        },
        i = u(r(40));

    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e) {
        if (Array.isArray(e)) {
            for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
            return r
        }
        return Array.from(e)
    }
    var s = t.set = function(e, t) {
            return function(r) {
                (r = o({}, r))[e] = t;
                return r
            }
        },
        c = (t.push = function(e, t) {
            return function(r) {
                return s(e, [].concat(a(r[e] || []), [t]))(r)
            }
        }, function(e) {
            return "string" == typeof e[0] || e[0] instanceof String || "symbol" === n(e[0]) ? (0, i.default)({}) : (0, i.default)([])
        }),
        f = (t.setIn = function e(t, r) {
            return function() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c(t);
                return 1 === t.length ? s(t[0], r)(n) : s(t[0], e(t.slice(1), r)(n[t[0]]))(n)
            }
        }, function(e, t) {
            return "function" == typeof e ? e(t) : e
        }),
        l = function(e) {
            return "function" == typeof e ? e() : e
        };
    t.setIf = function(e, t, r) {
        return function(n) {
            return f(e, n) ? s(t, l(r))(n) : n
        }
    }
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.portalSwitchHandler = t.updatePickedPortal = t.setPortalId = t.getPortalId = void 0;
    var n = r(22),
        o = r(20),
        i = r(23),
        u = r(52),
        a = c(r(24)),
        s = r(10);

    function c(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var f = 1e3,
        l = 2e3,
        p = null,
        d = (t.getPortalId = function() {
            return p
        }, t.setPortalId = function(e) {
            p = e
        }),
        h = t.updatePickedPortal = function(e) {
            if (e !== p) {
                i.UsageTracker.track(n.CLIENT_APP_INTERACTION, {
                    action: n.CHANGE_PORTAL
                });
                (0, o.sendToContentScripts)("message", {
                    sender: "SIG_EXTENSION",
                    type: "PICKED_PORTAL_CHANGED",
                    value: e
                });
                d(e);
                setTimeout(function() {
                    (0, s.restartExtension)()
                }, f)
            }
        };
    t.portalSwitchHandler = function(e) {
        (0, u.setPortalIdThroughApi)(e).then(function() {
            setTimeout(function() {
                a.default.captureMessage("UserContextActions: SignalsExtension did not recieve notification to restart", {
                    level: "info"
                });
                h(e)
            }, l)
        })
    }
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = window.Promise;
    window.hubspot.require(["q"], function(e) {
        t.Promise = n = e.Promise
    });
    t.Promise = n
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.createStack = void 0;
    var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        },
        o = u(r(40)),
        i = r(8);

    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(0, u(r(66)).default)();
    var a = function(e, t) {
        return i.Promise.resolve(e((0, o.default)(n({}, t, {
            _input: t
        }))))
    };
    t.createStack = function() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        var n = t[0],
            o = t.slice(1);
        return function(e) {
            return 0 === o.length ? a(n, e) : o.reduce(function(e, t) {
                return e.then(t)
            }, a(n, e))
        }
    }
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.redirectBasedOnTabs = t.openInActiveTab = t.restartExtension = t.reloadGmailTabs = t.closeTabs = t.openTabIfNotAlreadyOpen = t.forAllTabs = t.openNewTab = void 0;
    var n = a(r(1)),
        o = r(7),
        i = a(r(39)),
        u = r(5);

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var s = t.openNewTab = function(e) {
            return n.default.tabs.create({
                url: e,
                index: 1e3
            })
        },
        c = t.forAllTabs = function(e, t) {
            return new Promise(function(r, o) {
                try {
                    n.default.tabs.query({}, function(n) {
                        var o = !0,
                            i = !1,
                            u = void 0;
                        try {
                            for (var a, s = Array.from(n)[Symbol.iterator](); !(o = (a = s.next()).done); o = !0) {
                                var c = a.value;
                                null != e && -1 === c.url.indexOf(e) || t(c)
                            }
                        } catch (e) {
                            i = !0;
                            u = e
                        } finally {
                            try {
                                !o && s.return && s.return()
                            } finally {
                                if (i) throw u
                            }
                        }
                        r()
                    })
                } catch (e) {
                    o("Error in SignalsExtension: forAllTabs")
                }
            })
        },
        f = (t.openTabIfNotAlreadyOpen = function(e) {
            n.default.tabs.query({}, function(t) {
                var r = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var u, a = Array.from(t)[Symbol.iterator](); !(r = (u = a.next()).done); r = !0) {
                        var c = u.value;
                        if (c.url.includes(e)) {
                            n.default.tabs.update(c.id, {
                                active: !0
                            });
                            return
                        }
                    }
                } catch (e) {
                    o = !0;
                    i = e
                } finally {
                    try {
                        !r && a.return && a.return()
                    } finally {
                        if (o) throw i
                    }
                }
                s(e)
            })
        }, t.closeTabs = async function(e, t) {
            return await c(t, function(t) {
                "close" === e ? n.default.tabs.remove(t.id) : "reload" === e && n.default.tabs.reload(t.id, {
                    bypassCache: !0
                })
            })
        });
    t.reloadGmailTabs = async function() {
        return await f("reload", "mail.google.com")
    }, t.restartExtension = function() {
        (0, u.reload)()
    }, t.openInActiveTab = function(e) {
        return n.default.tabs.update(void 0, {
            url: e
        })
    }, t.redirectBasedOnTabs = function() {
        n.default.tabs.query({}, function(e) {
            var t = new i.default("/crm-settings-email/" + (0, o.getPortalId)() + "/email/extension", {
                    lb: "app",
                    protocol: "https"
                }).href,
                r = new i.default("/getting-started/" + (0, o.getPortalId)() + "/connect-inbox", {
                    lb: "app",
                    protocol: "https"
                }).href,
                u = e.find(function(e) {
                    return e.url.includes(t)
                }),
                a = e.find(function(e) {
                    return e.url.includes(r)
                });
            a ? n.default.tabs.update(a.id, {
                active: !0
            }) : u && n.default.tabs.update(u.id, {
                active: !0
            })
        })
    }
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        },
        o = (t.between = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                n = e.indexOf(t),
                o = e.indexOf(r);
            return e.substr(n + t.length, o - n - r.length)
        }, t.debounce = function(e, t) {
            var r = void 0,
                n = void 0;
            return function() {
                for (var o = arguments.length, i = Array(o), u = 0; u < o; u++) i[u] = arguments[u];
                r && clearTimeout(r);
                r = setTimeout(function() {
                    r = null;
                    n = e.apply(null, i)
                }, t);
                return n
            }
        }, t.defaults = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                r = Object.keys(t).reduce(function(r, n) {
                    void 0 === e[n] && (r[n] = t[n]);
                    return r
                }, {});
            return n({}, e, r)
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
        return Object.keys(e).reduce(function(r, n) {
            r[n] = t(n, e[n]);
            return r
        }, {})
    }, t.omit = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return Object.keys(e).reduce(function(n, o) {
            var i = -1 !== t.indexOf(o);
            (r ? i : !i) || (n[o] = e[o]);
            return n
        }, {})
    }, t.once = function(e) {
        var t = void 0,
            r = void 0;
        return function() {
            if (!t) {
                t = !0;
                r = e.apply(void 0, arguments)
            }
            return r
        }
    }, t.pluck = function(e, t) {
        var r = o(t),
            n = r ? [] : {};
        return Object.keys(t).reduce(function(n, o) {
            var i = r ? parseInt(o, 10) : o,
                u = t[i];
            n[i] = u[e];
            return n
        }, n)
    }, t.trim = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        0 === (e = "function" == typeof e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")).indexOf(t) && (e = e.substr(t.length));
        e.indexOf(t) === e.length - t.length && (e = e.substr(0, e.indexOf(t)));
        return e
    }, t.shallowCopy = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return Object.keys(e).reduce(function(t, r) {
            t[r] = e[r];
            return t
        }, {})
    }, t.cleanUrl = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        try {
            var t = (e = e.split("?")[0].split("#")[0]).split("/");
            if (t.length > 4) {
                var r = t.slice(0, 4),
                    n = t.slice(4, t.length).map(function(e) {
                        return /\d/.test(e) ? "*" : e
                    });
                e = r.join("/") + "/" + n.join("/")
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
            r = arguments[2],
            n = {},
            o = Object.keys(e),
            i = o.length,
            u = o.reduce(function(t, r) {
                var o = e[r];
                o && "function" == typeof o && (o = o()) && "function" == typeof o.then ? t.push({
                    key: r,
                    promise: o
                }) : n[r] = o;
                return t
            }, []),
            a = function() {
                Object.keys(n).length === i && r(n)
            };
        u.length ? u.forEach(function(e) {
            var r = e.key;
            e.promise.then(function(e) {
                n[r] = e;
                a()
            }).catch(function(e) {
                n[r] = void 0;
                t(e);
                a()
            })
        }) : r(n)
    }
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = t.accountId = 53;
    t.debugKey = "USAGE_TRACKER_JS", t.hstcKey = "__hstc", t.hamplitudeKey = "__hmpl", t.storageKey = "HUBLYTICS_EVENTS_" + n
}, function(e, t, r) {
    n = function() {
        "use strict";
        var e = Array.prototype.slice;

        function t(e, t) {
            t && (e.prototype = Object.create(t.prototype));
            e.prototype.constructor = e
        }

        function r(e) {
            return u(e) ? e : V(e)
        }
        t(n, r);

        function n(e) {
            return a(e) ? e : Q(e)
        }
        t(o, r);

        function o(e) {
            return s(e) ? e : Y(e)
        }
        t(i, r);

        function i(e) {
            return u(e) && !c(e) ? e : J(e)
        }

        function u(e) {
            return !(!e || !e[l])
        }

        function a(e) {
            return !(!e || !e[p])
        }

        function s(e) {
            return !(!e || !e[d])
        }

        function c(e) {
            return a(e) || s(e)
        }

        function f(e) {
            return !(!e || !e[h])
        }
        r.isIterable = u;
        r.isKeyed = a;
        r.isIndexed = s;
        r.isAssociative = c;
        r.isOrdered = f;
        r.Keyed = n;
        r.Indexed = o;
        r.Set = i;
        var l = "@@__IMMUTABLE_ITERABLE__@@",
            p = "@@__IMMUTABLE_KEYED__@@",
            d = "@@__IMMUTABLE_INDEXED__@@",
            h = "@@__IMMUTABLE_ORDERED__@@",
            v = "delete",
            y = 5,
            _ = 1 << y,
            g = _ - 1,
            m = {},
            b = {
                value: !1
            },
            w = {
                value: !1
            };

        function E(e) {
            e.value = !1;
            return e
        }

        function S(e) {
            e && (e.value = !0)
        }

        function O() {}

        function k(e, t) {
            t = t || 0;
            for (var r = Math.max(0, e.length - t), n = new Array(r), o = 0; o < r; o++) n[o] = e[o + t];
            return n
        }

        function I(e) {
            void 0 === e.size && (e.size = e.__iterate(T));
            return e.size
        }

        function R(e, t) {
            if ("number" != typeof t) {
                var r = t >>> 0;
                if ("" + r !== t || 4294967295 === r) return NaN;
                t = r
            }
            return t < 0 ? I(e) + t : t
        }

        function T() {
            return !0
        }

        function P(e, t, r) {
            return (0 === e || void 0 !== r && e <= -r) && (void 0 === t || void 0 !== r && t >= r)
        }

        function A(e, t) {
            return M(e, t, 0)
        }

        function x(e, t) {
            return M(e, t, t)
        }

        function M(e, t, r) {
            return void 0 === e ? r : e < 0 ? Math.max(0, t + e) : void 0 === t ? e : Math.min(t, e)
        }
        var j = 0,
            C = 1,
            L = 2,
            q = "function" == typeof Symbol && Symbol.iterator,
            N = "@@iterator",
            U = q || N;

        function D(e) {
            this.next = e
        }
        D.prototype.toString = function() {
            return "[Iterator]"
        };
        D.KEYS = j;
        D.VALUES = C;
        D.ENTRIES = L;
        D.prototype.inspect = D.prototype.toSource = function() {
            return this.toString()
        };
        D.prototype[U] = function() {
            return this
        };

        function z(e, t, r, n) {
            var o = 0 === e ? t : 1 === e ? r : [t, r];
            n ? n.value = o : n = {
                value: o,
                done: !1
            };
            return n
        }

        function B() {
            return {
                value: void 0,
                done: !0
            }
        }

        function K(e) {
            return !!G(e)
        }

        function H(e) {
            return e && "function" == typeof e.next
        }

        function F(e) {
            var t = G(e);
            return t && t.call(e)
        }

        function G(e) {
            var t = e && (q && e[q] || e[N]);
            if ("function" == typeof t) return t
        }

        function W(e) {
            return e && "number" == typeof e.length
        }
        t(V, r);

        function V(e) {
            return null === e || void 0 === e ? ue() : u(e) ? e.toSeq() : ce(e)
        }
        V.of = function() {
            return V(arguments)
        };
        V.prototype.toSeq = function() {
            return this
        };
        V.prototype.toString = function() {
            return this.__toString("Seq {", "}")
        };
        V.prototype.cacheResult = function() {
            if (!this._cache && this.__iterateUncached) {
                this._cache = this.entrySeq().toArray();
                this.size = this._cache.length
            }
            return this
        };
        V.prototype.__iterate = function(e, t) {
            return le(this, e, t, !0)
        };
        V.prototype.__iterator = function(e, t) {
            return pe(this, e, t, !0)
        };
        t(Q, V);

        function Q(e) {
            return null === e || void 0 === e ? ue().toKeyedSeq() : u(e) ? a(e) ? e.toSeq() : e.fromEntrySeq() : ae(e)
        }
        Q.prototype.toKeyedSeq = function() {
            return this
        };
        t(Y, V);

        function Y(e) {
            return null === e || void 0 === e ? ue() : u(e) ? a(e) ? e.entrySeq() : e.toIndexedSeq() : se(e)
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
            return le(this, e, t, !1)
        };
        Y.prototype.__iterator = function(e, t) {
            return pe(this, e, t, !1)
        };
        t(J, V);

        function J(e) {
            return (null === e || void 0 === e ? ue() : u(e) ? a(e) ? e.entrySeq() : e : se(e)).toSetSeq()
        }
        J.of = function() {
            return J(arguments)
        };
        J.prototype.toSetSeq = function() {
            return this
        };
        V.isSeq = ie;
        V.Keyed = Q;
        V.Set = J;
        V.Indexed = Y;
        var X, Z, $, ee = "@@__IMMUTABLE_SEQ__@@";
        V.prototype[ee] = !0;
        t(te, Y);

        function te(e) {
            this._array = e;
            this.size = e.length
        }
        te.prototype.get = function(e, t) {
            return this.has(e) ? this._array[R(this, e)] : t
        };
        te.prototype.__iterate = function(e, t) {
            for (var r = this._array, n = r.length - 1, o = 0; o <= n; o++)
                if (!1 === e(r[t ? n - o : o], o, this)) return o + 1;
            return o
        };
        te.prototype.__iterator = function(e, t) {
            var r = this._array,
                n = r.length - 1,
                o = 0;
            return new D(function() {
                return o > n ? B() : z(e, o, r[t ? n - o++ : o++])
            })
        };
        t(re, Q);

        function re(e) {
            var t = Object.keys(e);
            this._object = e;
            this._keys = t;
            this.size = t.length
        }
        re.prototype.get = function(e, t) {
            return void 0 === t || this.has(e) ? this._object[e] : t
        };
        re.prototype.has = function(e) {
            return this._object.hasOwnProperty(e)
        };
        re.prototype.__iterate = function(e, t) {
            for (var r = this._object, n = this._keys, o = n.length - 1, i = 0; i <= o; i++) {
                var u = n[t ? o - i : i];
                if (!1 === e(r[u], u, this)) return i + 1
            }
            return i
        };
        re.prototype.__iterator = function(e, t) {
            var r = this._object,
                n = this._keys,
                o = n.length - 1,
                i = 0;
            return new D(function() {
                var u = n[t ? o - i : i];
                return i++ > o ? B() : z(e, u, r[u])
            })
        };
        re.prototype[h] = !0;
        t(ne, Y);

        function ne(e) {
            this._iterable = e;
            this.size = e.length || e.size
        }
        ne.prototype.__iterateUncached = function(e, t) {
            if (t) return this.cacheResult().__iterate(e, t);
            var r = F(this._iterable),
                n = 0;
            if (H(r))
                for (var o; !(o = r.next()).done && !1 !== e(o.value, n++, this););
            return n
        };
        ne.prototype.__iteratorUncached = function(e, t) {
            if (t) return this.cacheResult().__iterator(e, t);
            var r = F(this._iterable);
            if (!H(r)) return new D(B);
            var n = 0;
            return new D(function() {
                var t = r.next();
                return t.done ? t : z(e, n++, t.value)
            })
        };
        t(oe, Y);

        function oe(e) {
            this._iterator = e;
            this._iteratorCache = []
        }
        oe.prototype.__iterateUncached = function(e, t) {
            if (t) return this.cacheResult().__iterate(e, t);
            for (var r, n = this._iterator, o = this._iteratorCache, i = 0; i < o.length;)
                if (!1 === e(o[i], i++, this)) return i;
            for (; !(r = n.next()).done;) {
                var u = r.value;
                o[i] = u;
                if (!1 === e(u, i++, this)) break
            }
            return i
        };
        oe.prototype.__iteratorUncached = function(e, t) {
            if (t) return this.cacheResult().__iterator(e, t);
            var r = this._iterator,
                n = this._iteratorCache,
                o = 0;
            return new D(function() {
                if (o >= n.length) {
                    var t = r.next();
                    if (t.done) return t;
                    n[o] = t.value
                }
                return z(e, o, n[o++])
            })
        };

        function ie(e) {
            return !(!e || !e[ee])
        }

        function ue() {
            return X || (X = new te([]))
        }

        function ae(e) {
            var t = Array.isArray(e) ? new te(e).fromEntrySeq() : H(e) ? new oe(e).fromEntrySeq() : K(e) ? new ne(e).fromEntrySeq() : "object" == typeof e ? new re(e) : void 0;
            if (!t) throw new TypeError("Expected Array or iterable object of [k, v] entries, or keyed object: " + e);
            return t
        }

        function se(e) {
            var t = fe(e);
            if (!t) throw new TypeError("Expected Array or iterable object of values: " + e);
            return t
        }

        function ce(e) {
            var t = fe(e) || "object" == typeof e && new re(e);
            if (!t) throw new TypeError("Expected Array or iterable object of values, or keyed object: " + e);
            return t
        }

        function fe(e) {
            return W(e) ? new te(e) : H(e) ? new oe(e) : K(e) ? new ne(e) : void 0
        }

        function le(e, t, r, n) {
            var o = e._cache;
            if (o) {
                for (var i = o.length - 1, u = 0; u <= i; u++) {
                    var a = o[r ? i - u : u];
                    if (!1 === t(a[1], n ? a[0] : u, e)) return u + 1
                }
                return u
            }
            return e.__iterateUncached(t, r)
        }

        function pe(e, t, r, n) {
            var o = e._cache;
            if (o) {
                var i = o.length - 1,
                    u = 0;
                return new D(function() {
                    var e = o[r ? i - u : u];
                    return u++ > i ? B() : z(t, n ? e[0] : u - 1, e[1])
                })
            }
            return e.__iteratorUncached(t, r)
        }

        function de(e, t) {
            return t ? he(t, e, "", {
                "": e
            }) : ve(e)
        }

        function he(e, t, r, n) {
            return Array.isArray(t) ? e.call(n, r, Y(t).map(function(r, n) {
                return he(e, r, n, t)
            })) : ye(t) ? e.call(n, r, Q(t).map(function(r, n) {
                return he(e, r, n, t)
            })) : t
        }

        function ve(e) {
            return Array.isArray(e) ? Y(e).map(ve).toList() : ye(e) ? Q(e).map(ve).toMap() : e
        }

        function ye(e) {
            return e && (e.constructor === Object || void 0 === e.constructor)
        }

        function _e(e, t) {
            if (e === t || e != e && t != t) return !0;
            if (!e || !t) return !1;
            if ("function" == typeof e.valueOf && "function" == typeof t.valueOf) {
                if ((e = e.valueOf()) === (t = t.valueOf()) || e != e && t != t) return !0;
                if (!e || !t) return !1
            }
            return !("function" != typeof e.equals || "function" != typeof t.equals || !e.equals(t))
        }

        function ge(e, t) {
            if (e === t) return !0;
            if (!u(t) || void 0 !== e.size && void 0 !== t.size && e.size !== t.size || void 0 !== e.__hash && void 0 !== t.__hash && e.__hash !== t.__hash || a(e) !== a(t) || s(e) !== s(t) || f(e) !== f(t)) return !1;
            if (0 === e.size && 0 === t.size) return !0;
            var r = !c(e);
            if (f(e)) {
                var n = e.entries();
                return t.every(function(e, t) {
                    var o = n.next().value;
                    return o && _e(o[1], e) && (r || _e(o[0], t))
                }) && n.next().done
            }
            var o = !1;
            if (void 0 === e.size)
                if (void 0 === t.size) "function" == typeof e.cacheResult && e.cacheResult();
                else {
                    o = !0;
                    var i = e;
                    e = t;
                    t = i
                } var l = !0,
                p = t.__iterate(function(t, n) {
                    if (r ? !e.has(t) : o ? !_e(t, e.get(n, m)) : !_e(e.get(n, m), t)) {
                        l = !1;
                        return !1
                    }
                });
            return l && e.size === p
        }
        t(me, Y);

        function me(e, t) {
            if (!(this instanceof me)) return new me(e, t);
            this._value = e;
            this.size = void 0 === t ? 1 / 0 : Math.max(0, t);
            if (0 === this.size) {
                if (Z) return Z;
                Z = this
            }
        }
        me.prototype.toString = function() {
            return 0 === this.size ? "Repeat []" : "Repeat [ " + this._value + " " + this.size + " times ]"
        };
        me.prototype.get = function(e, t) {
            return this.has(e) ? this._value : t
        };
        me.prototype.includes = function(e) {
            return _e(this._value, e)
        };
        me.prototype.slice = function(e, t) {
            var r = this.size;
            return P(e, t, r) ? this : new me(this._value, x(t, r) - A(e, r))
        };
        me.prototype.reverse = function() {
            return this
        };
        me.prototype.indexOf = function(e) {
            return _e(this._value, e) ? 0 : -1
        };
        me.prototype.lastIndexOf = function(e) {
            return _e(this._value, e) ? this.size : -1
        };
        me.prototype.__iterate = function(e, t) {
            for (var r = 0; r < this.size; r++)
                if (!1 === e(this._value, r, this)) return r + 1;
            return r
        };
        me.prototype.__iterator = function(e, t) {
            var r = this,
                n = 0;
            return new D(function() {
                return n < r.size ? z(e, n++, r._value) : B()
            })
        };
        me.prototype.equals = function(e) {
            return e instanceof me ? _e(this._value, e._value) : ge(e)
        };

        function be(e, t) {
            if (!e) throw new Error(t)
        }
        t(we, Y);

        function we(e, t, r) {
            if (!(this instanceof we)) return new we(e, t, r);
            be(0 !== r, "Cannot step a Range by 0");
            e = e || 0;
            void 0 === t && (t = 1 / 0);
            r = void 0 === r ? 1 : Math.abs(r);
            t < e && (r = -r);
            this._start = e;
            this._end = t;
            this._step = r;
            this.size = Math.max(0, Math.ceil((t - e) / r - 1) + 1);
            if (0 === this.size) {
                if ($) return $;
                $ = this
            }
        }
        we.prototype.toString = function() {
            return 0 === this.size ? "Range []" : "Range [ " + this._start + "..." + this._end + (1 !== this._step ? " by " + this._step : "") + " ]"
        };
        we.prototype.get = function(e, t) {
            return this.has(e) ? this._start + R(this, e) * this._step : t
        };
        we.prototype.includes = function(e) {
            var t = (e - this._start) / this._step;
            return t >= 0 && t < this.size && t === Math.floor(t)
        };
        we.prototype.slice = function(e, t) {
            if (P(e, t, this.size)) return this;
            e = A(e, this.size);
            return (t = x(t, this.size)) <= e ? new we(0, 0) : new we(this.get(e, this._end), this.get(t, this._end), this._step)
        };
        we.prototype.indexOf = function(e) {
            var t = e - this._start;
            if (t % this._step == 0) {
                var r = t / this._step;
                if (r >= 0 && r < this.size) return r
            }
            return -1
        };
        we.prototype.lastIndexOf = function(e) {
            return this.indexOf(e)
        };
        we.prototype.__iterate = function(e, t) {
            for (var r = this.size - 1, n = this._step, o = t ? this._start + r * n : this._start, i = 0; i <= r; i++) {
                if (!1 === e(o, i, this)) return i + 1;
                o += t ? -n : n
            }
            return i
        };
        we.prototype.__iterator = function(e, t) {
            var r = this.size - 1,
                n = this._step,
                o = t ? this._start + r * n : this._start,
                i = 0;
            return new D(function() {
                var u = o;
                o += t ? -n : n;
                return i > r ? B() : z(e, i++, u)
            })
        };
        we.prototype.equals = function(e) {
            return e instanceof we ? this._start === e._start && this._end === e._end && this._step === e._step : ge(this, e)
        };
        t(Ee, r);

        function Ee() {
            throw TypeError("Abstract")
        }
        t(Se, Ee);

        function Se() {}
        t(Oe, Ee);

        function Oe() {}
        t(ke, Ee);

        function ke() {}
        Ee.Keyed = Se;
        Ee.Indexed = Oe;
        Ee.Set = ke;
        var Ie = "function" == typeof Math.imul && -2 === Math.imul(4294967295, 2) ? Math.imul : function(e, t) {
            var r = 65535 & (e |= 0),
                n = 65535 & (t |= 0);
            return r * n + ((e >>> 16) * n + r * (t >>> 16) << 16 >>> 0) | 0
        };

        function Re(e) {
            return e >>> 1 & 1073741824 | 3221225471 & e
        }

        function Te(e) {
            if (!1 === e || null === e || void 0 === e) return 0;
            if ("function" == typeof e.valueOf && (!1 === (e = e.valueOf()) || null === e || void 0 === e)) return 0;
            if (!0 === e) return 1;
            var t = typeof e;
            if ("number" === t) {
                if (e != e || e === 1 / 0) return 0;
                var r = 0 | e;
                r !== e && (r ^= 4294967295 * e);
                for (; e > 4294967295;) r ^= e /= 4294967295;
                return Re(r)
            }
            if ("string" === t) return e.length > De ? Pe(e) : Ae(e);
            if ("function" == typeof e.hashCode) return e.hashCode();
            if ("object" === t) return xe(e);
            if ("function" == typeof e.toString) return Ae(e.toString());
            throw new Error("Value type " + t + " cannot be hashed.")
        }

        function Pe(e) {
            var t = Ke[e];
            if (void 0 === t) {
                t = Ae(e);
                if (Be === ze) {
                    Be = 0;
                    Ke = {}
                }
                Be++;
                Ke[e] = t
            }
            return t
        }

        function Ae(e) {
            for (var t = 0, r = 0; r < e.length; r++) t = 31 * t + e.charCodeAt(r) | 0;
            return Re(t)
        }

        function xe(e) {
            var t;
            if (qe && void 0 !== (t = Le.get(e))) return t;
            if (void 0 !== (t = e[Ue])) return t;
            if (!je) {
                if (void 0 !== (t = e.propertyIsEnumerable && e.propertyIsEnumerable[Ue])) return t;
                if (void 0 !== (t = Ce(e))) return t
            }
            t = ++Ne;
            1073741824 & Ne && (Ne = 0);
            if (qe) Le.set(e, t);
            else {
                if (void 0 !== Me && !1 === Me(e)) throw new Error("Non-extensible objects are not allowed as keys.");
                if (je) Object.defineProperty(e, Ue, {
                    enumerable: !1,
                    configurable: !1,
                    writable: !1,
                    value: t
                });
                else if (void 0 !== e.propertyIsEnumerable && e.propertyIsEnumerable === e.constructor.prototype.propertyIsEnumerable) {
                    e.propertyIsEnumerable = function() {
                        return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments)
                    };
                    e.propertyIsEnumerable[Ue] = t
                } else {
                    if (void 0 === e.nodeType) throw new Error("Unable to set a non-enumerable property on object.");
                    e[Ue] = t
                }
            }
            return t
        }
        var Me = Object.isExtensible,
            je = function() {
                try {
                    Object.defineProperty({}, "@", {});
                    return !0
                } catch (e) {
                    return !1
                }
            }();

        function Ce(e) {
            if (e && e.nodeType > 0) switch (e.nodeType) {
                case 1:
                    return e.uniqueID;
                case 9:
                    return e.documentElement && e.documentElement.uniqueID
            }
        }
        var Le, qe = "function" == typeof WeakMap;
        qe && (Le = new WeakMap);
        var Ne = 0,
            Ue = "__immutablehash__";
        "function" == typeof Symbol && (Ue = Symbol(Ue));
        var De = 16,
            ze = 255,
            Be = 0,
            Ke = {};

        function He(e) {
            be(e !== 1 / 0, "Cannot perform this action with an infinite size.")
        }
        t(Fe, Se);

        function Fe(e) {
            return null === e || void 0 === e ? ot() : Ge(e) && !f(e) ? e : ot().withMutations(function(t) {
                var r = n(e);
                He(r.size);
                r.forEach(function(e, r) {
                    return t.set(r, e)
                })
            })
        }
        Fe.of = function() {
            var t = e.call(arguments, 0);
            return ot().withMutations(function(e) {
                for (var r = 0; r < t.length; r += 2) {
                    if (r + 1 >= t.length) throw new Error("Missing value for key: " + t[r]);
                    e.set(t[r], t[r + 1])
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
            return it(this, e, t)
        };
        Fe.prototype.setIn = function(e, t) {
            return this.updateIn(e, m, function() {
                return t
            })
        };
        Fe.prototype.remove = function(e) {
            return it(this, e, m)
        };
        Fe.prototype.deleteIn = function(e) {
            return this.updateIn(e, function() {
                return m
            })
        };
        Fe.prototype.update = function(e, t, r) {
            return 1 === arguments.length ? e(this) : this.updateIn([e], t, r)
        };
        Fe.prototype.updateIn = function(e, t, r) {
            if (!r) {
                r = t;
                t = void 0
            }
            var n = yt(this, wr(e), t, r);
            return n === m ? void 0 : n
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
            return ot()
        };
        Fe.prototype.merge = function() {
            return pt(this, void 0, arguments)
        };
        Fe.prototype.mergeWith = function(t) {
            return pt(this, t, e.call(arguments, 1))
        };
        Fe.prototype.mergeIn = function(t) {
            var r = e.call(arguments, 1);
            return this.updateIn(t, ot(), function(e) {
                return "function" == typeof e.merge ? e.merge.apply(e, r) : r[r.length - 1]
            })
        };
        Fe.prototype.mergeDeep = function() {
            return pt(this, dt, arguments)
        };
        Fe.prototype.mergeDeepWith = function(t) {
            var r = e.call(arguments, 1);
            return pt(this, ht(t), r)
        };
        Fe.prototype.mergeDeepIn = function(t) {
            var r = e.call(arguments, 1);
            return this.updateIn(t, ot(), function(e) {
                return "function" == typeof e.mergeDeep ? e.mergeDeep.apply(e, r) : r[r.length - 1]
            })
        };
        Fe.prototype.sort = function(e) {
            return Kt(fr(this, e))
        };
        Fe.prototype.sortBy = function(e, t) {
            return Kt(fr(this, t, e))
        };
        Fe.prototype.withMutations = function(e) {
            var t = this.asMutable();
            e(t);
            return t.wasAltered() ? t.__ensureOwner(this.__ownerID) : this
        };
        Fe.prototype.asMutable = function() {
            return this.__ownerID ? this : this.__ensureOwner(new O)
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
            var r = this,
                n = 0;
            this._root && this._root.iterate(function(t) {
                n++;
                return e(t[1], t[0], r)
            }, t);
            return n
        };
        Fe.prototype.__ensureOwner = function(e) {
            if (e === this.__ownerID) return this;
            if (!e) {
                this.__ownerID = e;
                this.__altered = !1;
                return this
            }
            return nt(this.size, this._root, e, this.__hash)
        };

        function Ge(e) {
            return !(!e || !e[Ve])
        }
        Fe.isMap = Ge;
        var We, Ve = "@@__IMMUTABLE_MAP__@@",
            Qe = Fe.prototype;
        Qe[Ve] = !0;
        Qe[v] = Qe.remove;
        Qe.removeIn = Qe.deleteIn;

        function Ye(e, t) {
            this.ownerID = e;
            this.entries = t
        }
        Ye.prototype.get = function(e, t, r, n) {
            for (var o = this.entries, i = 0, u = o.length; i < u; i++)
                if (_e(r, o[i][0])) return o[i][1];
            return n
        };
        Ye.prototype.update = function(e, t, r, n, o, i, u) {
            for (var a = o === m, s = this.entries, c = 0, f = s.length; c < f && !_e(n, s[c][0]); c++);
            var l = c < f;
            if (l ? s[c][1] === o : a) return this;
            S(u);
            (a || !l) && S(i);
            if (!a || 1 !== s.length) {
                if (!l && !a && s.length >= wt) return ct(e, s, n, o);
                var p = e && e === this.ownerID,
                    d = p ? s : k(s);
                l ? a ? c === f - 1 ? d.pop() : d[c] = d.pop() : d[c] = [n, o] : d.push([n, o]);
                if (p) {
                    this.entries = d;
                    return this
                }
                return new Ye(e, d)
            }
        };

        function Je(e, t, r) {
            this.ownerID = e;
            this.bitmap = t;
            this.nodes = r
        }
        Je.prototype.get = function(e, t, r, n) {
            void 0 === t && (t = Te(r));
            var o = 1 << ((0 === e ? t : t >>> e) & g),
                i = this.bitmap;
            return 0 == (i & o) ? n : this.nodes[_t(i & o - 1)].get(e + y, t, r, n)
        };
        Je.prototype.update = function(e, t, r, n, o, i, u) {
            void 0 === r && (r = Te(n));
            var a = (0 === t ? r : r >>> t) & g,
                s = 1 << a,
                c = this.bitmap,
                f = 0 != (c & s);
            if (!f && o === m) return this;
            var l = _t(c & s - 1),
                p = this.nodes,
                d = f ? p[l] : void 0,
                h = ut(d, e, t + y, r, n, o, i, u);
            if (h === d) return this;
            if (!f && h && p.length >= Et) return lt(e, p, c, a, h);
            if (f && !h && 2 === p.length && at(p[1 ^ l])) return p[1 ^ l];
            if (f && h && 1 === p.length && at(h)) return h;
            var v = e && e === this.ownerID,
                _ = f ? h ? c : c ^ s : c | s,
                b = f ? h ? gt(p, l, h, v) : bt(p, l, v) : mt(p, l, h, v);
            if (v) {
                this.bitmap = _;
                this.nodes = b;
                return this
            }
            return new Je(e, _, b)
        };

        function Xe(e, t, r) {
            this.ownerID = e;
            this.count = t;
            this.nodes = r
        }
        Xe.prototype.get = function(e, t, r, n) {
            void 0 === t && (t = Te(r));
            var o = (0 === e ? t : t >>> e) & g,
                i = this.nodes[o];
            return i ? i.get(e + y, t, r, n) : n
        };
        Xe.prototype.update = function(e, t, r, n, o, i, u) {
            void 0 === r && (r = Te(n));
            var a = (0 === t ? r : r >>> t) & g,
                s = o === m,
                c = this.nodes,
                f = c[a];
            if (s && !f) return this;
            var l = ut(f, e, t + y, r, n, o, i, u);
            if (l === f) return this;
            var p = this.count;
            if (f) {
                if (!l && --p < St) return ft(e, c, p, a)
            } else p++;
            var d = e && e === this.ownerID,
                h = gt(c, a, l, d);
            if (d) {
                this.count = p;
                this.nodes = h;
                return this
            }
            return new Xe(e, p, h)
        };

        function Ze(e, t, r) {
            this.ownerID = e;
            this.keyHash = t;
            this.entries = r
        }
        Ze.prototype.get = function(e, t, r, n) {
            for (var o = this.entries, i = 0, u = o.length; i < u; i++)
                if (_e(r, o[i][0])) return o[i][1];
            return n
        };
        Ze.prototype.update = function(e, t, r, n, o, i, u) {
            void 0 === r && (r = Te(n));
            var a = o === m;
            if (r !== this.keyHash) {
                if (a) return this;
                S(u);
                S(i);
                return st(this, e, t, r, [n, o])
            }
            for (var s = this.entries, c = 0, f = s.length; c < f && !_e(n, s[c][0]); c++);
            var l = c < f;
            if (l ? s[c][1] === o : a) return this;
            S(u);
            (a || !l) && S(i);
            if (a && 2 === f) return new $e(e, this.keyHash, s[1 ^ c]);
            var p = e && e === this.ownerID,
                d = p ? s : k(s);
            l ? a ? c === f - 1 ? d.pop() : d[c] = d.pop() : d[c] = [n, o] : d.push([n, o]);
            if (p) {
                this.entries = d;
                return this
            }
            return new Ze(e, this.keyHash, d)
        };

        function $e(e, t, r) {
            this.ownerID = e;
            this.keyHash = t;
            this.entry = r
        }
        $e.prototype.get = function(e, t, r, n) {
            return _e(r, this.entry[0]) ? this.entry[1] : n
        };
        $e.prototype.update = function(e, t, r, n, o, i, u) {
            var a = o === m,
                s = _e(n, this.entry[0]);
            if (s ? o === this.entry[1] : a) return this;
            S(u);
            if (!a) {
                if (s) {
                    if (e && e === this.ownerID) {
                        this.entry[1] = o;
                        return this
                    }
                    return new $e(e, this.keyHash, [n, o])
                }
                S(i);
                return st(this, e, t, Te(n), [n, o])
            }
            S(i)
        };
        Ye.prototype.iterate = Ze.prototype.iterate = function(e, t) {
            for (var r = this.entries, n = 0, o = r.length - 1; n <= o; n++)
                if (!1 === e(r[t ? o - n : n])) return !1
        };
        Je.prototype.iterate = Xe.prototype.iterate = function(e, t) {
            for (var r = this.nodes, n = 0, o = r.length - 1; n <= o; n++) {
                var i = r[t ? o - n : n];
                if (i && !1 === i.iterate(e, t)) return !1
            }
        };
        $e.prototype.iterate = function(e, t) {
            return e(this.entry)
        };
        t(et, D);

        function et(e, t, r) {
            this._type = t;
            this._reverse = r;
            this._stack = e._root && rt(e._root)
        }
        et.prototype.next = function() {
            for (var e = this._type, t = this._stack; t;) {
                var r, n = t.node,
                    o = t.index++;
                if (n.entry) {
                    if (0 === o) return tt(e, n.entry)
                } else if (n.entries) {
                    if (o <= (r = n.entries.length - 1)) return tt(e, n.entries[this._reverse ? r - o : o])
                } else if (o <= (r = n.nodes.length - 1)) {
                    var i = n.nodes[this._reverse ? r - o : o];
                    if (i) {
                        if (i.entry) return tt(e, i.entry);
                        t = this._stack = rt(i, t)
                    }
                    continue
                }
                t = this._stack = this._stack.__prev
            }
            return B()
        };

        function tt(e, t) {
            return z(e, t[0], t[1])
        }

        function rt(e, t) {
            return {
                node: e,
                index: 0,
                __prev: t
            }
        }

        function nt(e, t, r, n) {
            var o = Object.create(Qe);
            o.size = e;
            o._root = t;
            o.__ownerID = r;
            o.__hash = n;
            o.__altered = !1;
            return o
        }

        function ot() {
            return We || (We = nt(0))
        }

        function it(e, t, r) {
            var n, o;
            if (e._root) {
                var i = E(b),
                    u = E(w);
                n = ut(e._root, e.__ownerID, 0, void 0, t, r, i, u);
                if (!u.value) return e;
                o = e.size + (i.value ? r === m ? -1 : 1 : 0)
            } else {
                if (r === m) return e;
                o = 1;
                n = new Ye(e.__ownerID, [
                    [t, r]
                ])
            }
            if (e.__ownerID) {
                e.size = o;
                e._root = n;
                e.__hash = void 0;
                e.__altered = !0;
                return e
            }
            return n ? nt(o, n) : ot()
        }

        function ut(e, t, r, n, o, i, u, a) {
            if (!e) {
                if (i === m) return e;
                S(a);
                S(u);
                return new $e(t, n, [o, i])
            }
            return e.update(t, r, n, o, i, u, a)
        }

        function at(e) {
            return e.constructor === $e || e.constructor === Ze
        }

        function st(e, t, r, n, o) {
            if (e.keyHash === n) return new Ze(t, n, [e.entry, o]);
            var i, u = (0 === r ? e.keyHash : e.keyHash >>> r) & g,
                a = (0 === r ? n : n >>> r) & g;
            return new Je(t, 1 << u | 1 << a, u === a ? [st(e, t, r + y, n, o)] : (i = new $e(t, n, o), u < a ? [e, i] : [i, e]))
        }

        function ct(e, t, r, n) {
            e || (e = new O);
            for (var o = new $e(e, Te(r), [r, n]), i = 0; i < t.length; i++) {
                var u = t[i];
                o = o.update(e, 0, void 0, u[0], u[1])
            }
            return o
        }

        function ft(e, t, r, n) {
            for (var o = 0, i = 0, u = new Array(r), a = 0, s = 1, c = t.length; a < c; a++, s <<= 1) {
                var f = t[a];
                if (void 0 !== f && a !== n) {
                    o |= s;
                    u[i++] = f
                }
            }
            return new Je(e, o, u)
        }

        function lt(e, t, r, n, o) {
            for (var i = 0, u = new Array(_), a = 0; 0 !== r; a++, r >>>= 1) u[a] = 1 & r ? t[i++] : void 0;
            u[n] = o;
            return new Xe(e, i + 1, u)
        }

        function pt(e, t, r) {
            for (var o = [], i = 0; i < r.length; i++) {
                var a = r[i],
                    s = n(a);
                u(a) || (s = s.map(function(e) {
                    return de(e)
                }));
                o.push(s)
            }
            return vt(e, t, o)
        }

        function dt(e, t, r) {
            return e && e.mergeDeep && u(t) ? e.mergeDeep(t) : _e(e, t) ? e : t
        }

        function ht(e) {
            return function(t, r, n) {
                if (t && t.mergeDeepWith && u(r)) return t.mergeDeepWith(e, r);
                var o = e(t, r, n);
                return _e(t, o) ? t : o
            }
        }

        function vt(e, t, r) {
            return 0 === (r = r.filter(function(e) {
                return 0 !== e.size
            })).length ? e : 0 !== e.size || e.__ownerID || 1 !== r.length ? e.withMutations(function(e) {
                for (var n = t ? function(r, n) {
                        e.update(n, m, function(e) {
                            return e === m ? r : t(e, r, n)
                        })
                    } : function(t, r) {
                        e.set(r, t)
                    }, o = 0; o < r.length; o++) r[o].forEach(n)
            }) : e.constructor(r[0])
        }

        function yt(e, t, r, n) {
            var o = e === m,
                i = t.next();
            if (i.done) {
                var u = o ? r : e,
                    a = n(u);
                return a === u ? e : a
            }
            be(o || e && e.set, "invalid keyPath");
            var s = i.value,
                c = o ? m : e.get(s, m),
                f = yt(c, t, r, n);
            return f === c ? e : f === m ? e.remove(s) : (o ? ot() : e).set(s, f)
        }

        function _t(e) {
            e = (e = (858993459 & (e -= e >> 1 & 1431655765)) + (e >> 2 & 858993459)) + (e >> 4) & 252645135;
            e += e >> 8;
            return 127 & (e += e >> 16)
        }

        function gt(e, t, r, n) {
            var o = n ? e : k(e);
            o[t] = r;
            return o
        }

        function mt(e, t, r, n) {
            var o = e.length + 1;
            if (n && t + 1 === o) {
                e[t] = r;
                return e
            }
            for (var i = new Array(o), u = 0, a = 0; a < o; a++)
                if (a === t) {
                    i[a] = r;
                    u = -1
                } else i[a] = e[a + u];
            return i
        }

        function bt(e, t, r) {
            var n = e.length - 1;
            if (r && t === n) {
                e.pop();
                return e
            }
            for (var o = new Array(n), i = 0, u = 0; u < n; u++) {
                u === t && (i = 1);
                o[u] = e[u + i]
            }
            return o
        }
        var wt = _ / 4,
            Et = _ / 2,
            St = _ / 4;
        t(Ot, Oe);

        function Ot(e) {
            var t = Ct();
            if (null === e || void 0 === e) return t;
            if (kt(e)) return e;
            var r = o(e),
                n = r.size;
            if (0 === n) return t;
            He(n);
            return n > 0 && n < _ ? jt(0, n, y, null, new Tt(r.toArray())) : t.withMutations(function(e) {
                e.setSize(n);
                r.forEach(function(t, r) {
                    return e.set(r, t)
                })
            })
        }
        Ot.of = function() {
            return this(arguments)
        };
        Ot.prototype.toString = function() {
            return this.__toString("List [", "]")
        };
        Ot.prototype.get = function(e, t) {
            if ((e = R(this, e)) >= 0 && e < this.size) {
                var r = Ut(this, e += this._origin);
                return r && r.array[e & g]
            }
            return t
        };
        Ot.prototype.set = function(e, t) {
            return Lt(this, e, t)
        };
        Ot.prototype.remove = function(e) {
            return this.has(e) ? 0 === e ? this.shift() : e === this.size - 1 ? this.pop() : this.splice(e, 1) : this
        };
        Ot.prototype.insert = function(e, t) {
            return this.splice(e, 0, t)
        };
        Ot.prototype.clear = function() {
            if (0 === this.size) return this;
            if (this.__ownerID) {
                this.size = this._origin = this._capacity = 0;
                this._level = y;
                this._root = this._tail = null;
                this.__hash = void 0;
                this.__altered = !0;
                return this
            }
            return Ct()
        };
        Ot.prototype.push = function() {
            var e = arguments,
                t = this.size;
            return this.withMutations(function(r) {
                Dt(r, 0, t + e.length);
                for (var n = 0; n < e.length; n++) r.set(t + n, e[n])
            })
        };
        Ot.prototype.pop = function() {
            return Dt(this, 0, -1)
        };
        Ot.prototype.unshift = function() {
            var e = arguments;
            return this.withMutations(function(t) {
                Dt(t, -e.length);
                for (var r = 0; r < e.length; r++) t.set(r, e[r])
            })
        };
        Ot.prototype.shift = function() {
            return Dt(this, 1)
        };
        Ot.prototype.merge = function() {
            return zt(this, void 0, arguments)
        };
        Ot.prototype.mergeWith = function(t) {
            return zt(this, t, e.call(arguments, 1))
        };
        Ot.prototype.mergeDeep = function() {
            return zt(this, dt, arguments)
        };
        Ot.prototype.mergeDeepWith = function(t) {
            var r = e.call(arguments, 1);
            return zt(this, ht(t), r)
        };
        Ot.prototype.setSize = function(e) {
            return Dt(this, 0, e)
        };
        Ot.prototype.slice = function(e, t) {
            var r = this.size;
            return P(e, t, r) ? this : Dt(this, A(e, r), x(t, r))
        };
        Ot.prototype.__iterator = function(e, t) {
            var r = 0,
                n = Mt(this, t);
            return new D(function() {
                var t = n();
                return t === xt ? B() : z(e, r++, t)
            })
        };
        Ot.prototype.__iterate = function(e, t) {
            for (var r, n = 0, o = Mt(this, t);
                (r = o()) !== xt && !1 !== e(r, n++, this););
            return n
        };
        Ot.prototype.__ensureOwner = function(e) {
            if (e === this.__ownerID) return this;
            if (!e) {
                this.__ownerID = e;
                return this
            }
            return jt(this._origin, this._capacity, this._level, this._root, this._tail, e, this.__hash)
        };

        function kt(e) {
            return !(!e || !e[It])
        }
        Ot.isList = kt;
        var It = "@@__IMMUTABLE_LIST__@@",
            Rt = Ot.prototype;
        Rt[It] = !0;
        Rt[v] = Rt.remove;
        Rt.setIn = Qe.setIn;
        Rt.deleteIn = Rt.removeIn = Qe.removeIn;
        Rt.update = Qe.update;
        Rt.updateIn = Qe.updateIn;
        Rt.mergeIn = Qe.mergeIn;
        Rt.mergeDeepIn = Qe.mergeDeepIn;
        Rt.withMutations = Qe.withMutations;
        Rt.asMutable = Qe.asMutable;
        Rt.asImmutable = Qe.asImmutable;
        Rt.wasAltered = Qe.wasAltered;

        function Tt(e, t) {
            this.array = e;
            this.ownerID = t
        }
        Tt.prototype.removeBefore = function(e, t, r) {
            if (r === t ? 1 << t : 0 === this.array.length) return this;
            var n = r >>> t & g;
            if (n >= this.array.length) return new Tt([], e);
            var o, i = 0 === n;
            if (t > 0) {
                var u = this.array[n];
                if ((o = u && u.removeBefore(e, t - y, r)) === u && i) return this
            }
            if (i && !o) return this;
            var a = Nt(this, e);
            if (!i)
                for (var s = 0; s < n; s++) a.array[s] = void 0;
            o && (a.array[n] = o);
            return a
        };
        Tt.prototype.removeAfter = function(e, t, r) {
            if (r === (t ? 1 << t : 0) || 0 === this.array.length) return this;
            var n, o = r - 1 >>> t & g;
            if (o >= this.array.length) return this;
            if (t > 0) {
                var i = this.array[o];
                if ((n = i && i.removeAfter(e, t - y, r)) === i && o === this.array.length - 1) return this
            }
            var u = Nt(this, e);
            u.array.splice(o + 1);
            n && (u.array[o] = n);
            return u
        };
        var Pt, At, xt = {};

        function Mt(e, t) {
            var r = e._origin,
                n = e._capacity,
                o = Bt(n),
                i = e._tail;
            return u(e._root, e._level, 0);

            function u(e, t, r) {
                return 0 === t ? a(e, r) : s(e, t, r)
            }

            function a(e, u) {
                var a = u === o ? i && i.array : e && e.array,
                    s = u > r ? 0 : r - u,
                    c = n - u;
                c > _ && (c = _);
                return function() {
                    if (s === c) return xt;
                    var e = t ? --c : s++;
                    return a && a[e]
                }
            }

            function s(e, o, i) {
                var a, s = e && e.array,
                    c = i > r ? 0 : r - i >> o,
                    f = 1 + (n - i >> o);
                f > _ && (f = _);
                return function() {
                    for (;;) {
                        if (a) {
                            var e = a();
                            if (e !== xt) return e;
                            a = null
                        }
                        if (c === f) return xt;
                        var r = t ? --f : c++;
                        a = u(s && s[r], o - y, i + (r << o))
                    }
                }
            }
        }

        function jt(e, t, r, n, o, i, u) {
            var a = Object.create(Rt);
            a.size = t - e;
            a._origin = e;
            a._capacity = t;
            a._level = r;
            a._root = n;
            a._tail = o;
            a.__ownerID = i;
            a.__hash = u;
            a.__altered = !1;
            return a
        }

        function Ct() {
            return Pt || (Pt = jt(0, 0, y))
        }

        function Lt(e, t, r) {
            if ((t = R(e, t)) != t) return e;
            if (t >= e.size || t < 0) return e.withMutations(function(e) {
                t < 0 ? Dt(e, t).set(0, r) : Dt(e, 0, t + 1).set(t, r)
            });
            t += e._origin;
            var n = e._tail,
                o = e._root,
                i = E(w);
            t >= Bt(e._capacity) ? n = qt(n, e.__ownerID, 0, t, r, i) : o = qt(o, e.__ownerID, e._level, t, r, i);
            if (!i.value) return e;
            if (e.__ownerID) {
                e._root = o;
                e._tail = n;
                e.__hash = void 0;
                e.__altered = !0;
                return e
            }
            return jt(e._origin, e._capacity, e._level, o, n)
        }

        function qt(e, t, r, n, o, i) {
            var u, a = n >>> r & g,
                s = e && a < e.array.length;
            if (!s && void 0 === o) return e;
            if (r > 0) {
                var c = e && e.array[a],
                    f = qt(c, t, r - y, n, o, i);
                if (f === c) return e;
                (u = Nt(e, t)).array[a] = f;
                return u
            }
            if (s && e.array[a] === o) return e;
            S(i);
            u = Nt(e, t);
            void 0 === o && a === u.array.length - 1 ? u.array.pop() : u.array[a] = o;
            return u
        }

        function Nt(e, t) {
            return t && e && t === e.ownerID ? e : new Tt(e ? e.array.slice() : [], t)
        }

        function Ut(e, t) {
            if (t >= Bt(e._capacity)) return e._tail;
            if (t < 1 << e._level + y) {
                for (var r = e._root, n = e._level; r && n > 0;) {
                    r = r.array[t >>> n & g];
                    n -= y
                }
                return r
            }
        }

        function Dt(e, t, r) {
            void 0 !== t && (t |= 0);
            void 0 !== r && (r |= 0);
            var n = e.__ownerID || new O,
                o = e._origin,
                i = e._capacity,
                u = o + t,
                a = void 0 === r ? i : r < 0 ? i + r : o + r;
            if (u === o && a === i) return e;
            if (u >= a) return e.clear();
            for (var s = e._level, c = e._root, f = 0; u + f < 0;) {
                c = new Tt(c && c.array.length ? [void 0, c] : [], n);
                f += 1 << (s += y)
            }
            if (f) {
                u += f;
                o += f;
                a += f;
                i += f
            }
            for (var l = Bt(i), p = Bt(a); p >= 1 << s + y;) {
                c = new Tt(c && c.array.length ? [c] : [], n);
                s += y
            }
            var d = e._tail,
                h = p < l ? Ut(e, a - 1) : p > l ? new Tt([], n) : d;
            if (d && p > l && u < i && d.array.length) {
                for (var v = c = Nt(c, n), _ = s; _ > y; _ -= y) {
                    var m = l >>> _ & g;
                    v = v.array[m] = Nt(v.array[m], n)
                }
                v.array[l >>> y & g] = d
            }
            a < i && (h = h && h.removeAfter(n, 0, a));
            if (u >= p) {
                u -= p;
                a -= p;
                s = y;
                c = null;
                h = h && h.removeBefore(n, 0, u)
            } else if (u > o || p < l) {
                f = 0;
                for (; c;) {
                    var b = u >>> s & g;
                    if (b !== p >>> s & g) break;
                    b && (f += (1 << s) * b);
                    s -= y;
                    c = c.array[b]
                }
                c && u > o && (c = c.removeBefore(n, s, u - f));
                c && p < l && (c = c.removeAfter(n, s, p - f));
                if (f) {
                    u -= f;
                    a -= f
                }
            }
            if (e.__ownerID) {
                e.size = a - u;
                e._origin = u;
                e._capacity = a;
                e._level = s;
                e._root = c;
                e._tail = h;
                e.__hash = void 0;
                e.__altered = !0;
                return e
            }
            return jt(u, a, s, c, h)
        }

        function zt(e, t, r) {
            for (var n = [], i = 0, a = 0; a < r.length; a++) {
                var s = r[a],
                    c = o(s);
                c.size > i && (i = c.size);
                u(s) || (c = c.map(function(e) {
                    return de(e)
                }));
                n.push(c)
            }
            i > e.size && (e = e.setSize(i));
            return vt(e, t, n)
        }

        function Bt(e) {
            return e < _ ? 0 : e - 1 >>> y << y
        }
        t(Kt, Fe);

        function Kt(e) {
            return null === e || void 0 === e ? Gt() : Ht(e) ? e : Gt().withMutations(function(t) {
                var r = n(e);
                He(r.size);
                r.forEach(function(e, r) {
                    return t.set(r, e)
                })
            })
        }
        Kt.of = function() {
            return this(arguments)
        };
        Kt.prototype.toString = function() {
            return this.__toString("OrderedMap {", "}")
        };
        Kt.prototype.get = function(e, t) {
            var r = this._map.get(e);
            return void 0 !== r ? this._list.get(r)[1] : t
        };
        Kt.prototype.clear = function() {
            if (0 === this.size) return this;
            if (this.__ownerID) {
                this.size = 0;
                this._map.clear();
                this._list.clear();
                return this
            }
            return Gt()
        };
        Kt.prototype.set = function(e, t) {
            return Wt(this, e, t)
        };
        Kt.prototype.remove = function(e) {
            return Wt(this, e, m)
        };
        Kt.prototype.wasAltered = function() {
            return this._map.wasAltered() || this._list.wasAltered()
        };
        Kt.prototype.__iterate = function(e, t) {
            var r = this;
            return this._list.__iterate(function(t) {
                return t && e(t[1], t[0], r)
            }, t)
        };
        Kt.prototype.__iterator = function(e, t) {
            return this._list.fromEntrySeq().__iterator(e, t)
        };
        Kt.prototype.__ensureOwner = function(e) {
            if (e === this.__ownerID) return this;
            var t = this._map.__ensureOwner(e),
                r = this._list.__ensureOwner(e);
            if (!e) {
                this.__ownerID = e;
                this._map = t;
                this._list = r;
                return this
            }
            return Ft(t, r, e, this.__hash)
        };

        function Ht(e) {
            return Ge(e) && f(e)
        }
        Kt.isOrderedMap = Ht;
        Kt.prototype[h] = !0;
        Kt.prototype[v] = Kt.prototype.remove;

        function Ft(e, t, r, n) {
            var o = Object.create(Kt.prototype);
            o.size = e ? e.size : 0;
            o._map = e;
            o._list = t;
            o.__ownerID = r;
            o.__hash = n;
            return o
        }

        function Gt() {
            return At || (At = Ft(ot(), Ct()))
        }

        function Wt(e, t, r) {
            var n, o, i = e._map,
                u = e._list,
                a = i.get(t),
                s = void 0 !== a;
            if (r === m) {
                if (!s) return e;
                if (u.size >= _ && u.size >= 2 * i.size) {
                    n = (o = u.filter(function(e, t) {
                        return void 0 !== e && a !== t
                    })).toKeyedSeq().map(function(e) {
                        return e[0]
                    }).flip().toMap();
                    e.__ownerID && (n.__ownerID = o.__ownerID = e.__ownerID)
                } else {
                    n = i.remove(t);
                    o = a === u.size - 1 ? u.pop() : u.set(a, void 0)
                }
            } else if (s) {
                if (r === u.get(a)[1]) return e;
                n = i;
                o = u.set(a, [t, r])
            } else {
                n = i.set(t, u.size);
                o = u.set(u.size, [t, r])
            }
            if (e.__ownerID) {
                e.size = n.size;
                e._map = n;
                e._list = o;
                e.__hash = void 0;
                return e
            }
            return Ft(n, o)
        }
        t(Vt, Q);

        function Vt(e, t) {
            this._iter = e;
            this._useKeys = t;
            this.size = e.size
        }
        Vt.prototype.get = function(e, t) {
            return this._iter.get(e, t)
        };
        Vt.prototype.has = function(e) {
            return this._iter.has(e)
        };
        Vt.prototype.valueSeq = function() {
            return this._iter.valueSeq()
        };
        Vt.prototype.reverse = function() {
            var e = this,
                t = $t(this, !0);
            this._useKeys || (t.valueSeq = function() {
                return e._iter.toSeq().reverse()
            });
            return t
        };
        Vt.prototype.map = function(e, t) {
            var r = this,
                n = Zt(this, e, t);
            this._useKeys || (n.valueSeq = function() {
                return r._iter.toSeq().map(e, t)
            });
            return n
        };
        Vt.prototype.__iterate = function(e, t) {
            var r, n = this;
            return this._iter.__iterate(this._useKeys ? function(t, r) {
                return e(t, r, n)
            } : (r = t ? yr(this) : 0, function(o) {
                return e(o, t ? --r : r++, n)
            }), t)
        };
        Vt.prototype.__iterator = function(e, t) {
            if (this._useKeys) return this._iter.__iterator(e, t);
            var r = this._iter.__iterator(C, t),
                n = t ? yr(this) : 0;
            return new D(function() {
                var o = r.next();
                return o.done ? o : z(e, t ? --n : n++, o.value, o)
            })
        };
        Vt.prototype[h] = !0;
        t(Qt, Y);

        function Qt(e) {
            this._iter = e;
            this.size = e.size
        }
        Qt.prototype.includes = function(e) {
            return this._iter.includes(e)
        };
        Qt.prototype.__iterate = function(e, t) {
            var r = this,
                n = 0;
            return this._iter.__iterate(function(t) {
                return e(t, n++, r)
            }, t)
        };
        Qt.prototype.__iterator = function(e, t) {
            var r = this._iter.__iterator(C, t),
                n = 0;
            return new D(function() {
                var t = r.next();
                return t.done ? t : z(e, n++, t.value, t)
            })
        };
        t(Yt, J);

        function Yt(e) {
            this._iter = e;
            this.size = e.size
        }
        Yt.prototype.has = function(e) {
            return this._iter.includes(e)
        };
        Yt.prototype.__iterate = function(e, t) {
            var r = this;
            return this._iter.__iterate(function(t) {
                return e(t, t, r)
            }, t)
        };
        Yt.prototype.__iterator = function(e, t) {
            var r = this._iter.__iterator(C, t);
            return new D(function() {
                var t = r.next();
                return t.done ? t : z(e, t.value, t.value, t)
            })
        };
        t(Jt, Q);

        function Jt(e) {
            this._iter = e;
            this.size = e.size
        }
        Jt.prototype.entrySeq = function() {
            return this._iter.toSeq()
        };
        Jt.prototype.__iterate = function(e, t) {
            var r = this;
            return this._iter.__iterate(function(t) {
                if (t) {
                    vr(t);
                    var n = u(t);
                    return e(n ? t.get(1) : t[1], n ? t.get(0) : t[0], r)
                }
            }, t)
        };
        Jt.prototype.__iterator = function(e, t) {
            var r = this._iter.__iterator(C, t);
            return new D(function() {
                for (;;) {
                    var t = r.next();
                    if (t.done) return t;
                    var n = t.value;
                    if (n) {
                        vr(n);
                        var o = u(n);
                        return z(e, o ? n.get(0) : n[0], o ? n.get(1) : n[1], t)
                    }
                }
            })
        };
        Qt.prototype.cacheResult = Vt.prototype.cacheResult = Yt.prototype.cacheResult = Jt.prototype.cacheResult = mr;

        function Xt(e) {
            var t = gr(e);
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
            t.cacheResult = mr;
            t.__iterateUncached = function(t, r) {
                var n = this;
                return e.__iterate(function(e, r) {
                    return !1 !== t(r, e, n)
                }, r)
            };
            t.__iteratorUncached = function(t, r) {
                if (t === L) {
                    var n = e.__iterator(t, r);
                    return new D(function() {
                        var e = n.next();
                        if (!e.done) {
                            var t = e.value[0];
                            e.value[0] = e.value[1];
                            e.value[1] = t
                        }
                        return e
                    })
                }
                return e.__iterator(t === C ? j : C, r)
            };
            return t
        }

        function Zt(e, t, r) {
            var n = gr(e);
            n.size = e.size;
            n.has = function(t) {
                return e.has(t)
            };
            n.get = function(n, o) {
                var i = e.get(n, m);
                return i === m ? o : t.call(r, i, n, e)
            };
            n.__iterateUncached = function(n, o) {
                var i = this;
                return e.__iterate(function(e, o, u) {
                    return !1 !== n(t.call(r, e, o, u), o, i)
                }, o)
            };
            n.__iteratorUncached = function(n, o) {
                var i = e.__iterator(L, o);
                return new D(function() {
                    var o = i.next();
                    if (o.done) return o;
                    var u = o.value,
                        a = u[0];
                    return z(n, a, t.call(r, u[1], a, e), o)
                })
            };
            return n
        }

        function $t(e, t) {
            var r = gr(e);
            r._iter = e;
            r.size = e.size;
            r.reverse = function() {
                return e
            };
            e.flip && (r.flip = function() {
                var t = Xt(e);
                t.reverse = function() {
                    return e.flip()
                };
                return t
            });
            r.get = function(r, n) {
                return e.get(t ? r : -1 - r, n)
            };
            r.has = function(r) {
                return e.has(t ? r : -1 - r)
            };
            r.includes = function(t) {
                return e.includes(t)
            };
            r.cacheResult = mr;
            r.__iterate = function(t, r) {
                var n = this;
                return e.__iterate(function(e, r) {
                    return t(e, r, n)
                }, !r)
            };
            r.__iterator = function(t, r) {
                return e.__iterator(t, !r)
            };
            return r
        }

        function er(e, t, r, n) {
            var o = gr(e);
            if (n) {
                o.has = function(n) {
                    var o = e.get(n, m);
                    return o !== m && !!t.call(r, o, n, e)
                };
                o.get = function(n, o) {
                    var i = e.get(n, m);
                    return i !== m && t.call(r, i, n, e) ? i : o
                }
            }
            o.__iterateUncached = function(o, i) {
                var u = this,
                    a = 0;
                e.__iterate(function(e, i, s) {
                    if (t.call(r, e, i, s)) {
                        a++;
                        return o(e, n ? i : a - 1, u)
                    }
                }, i);
                return a
            };
            o.__iteratorUncached = function(o, i) {
                var u = e.__iterator(L, i),
                    a = 0;
                return new D(function() {
                    for (;;) {
                        var i = u.next();
                        if (i.done) return i;
                        var s = i.value,
                            c = s[0],
                            f = s[1];
                        if (t.call(r, f, c, e)) return z(o, n ? c : a++, f, i)
                    }
                })
            };
            return o
        }

        function tr(e, t, r) {
            var n = Fe().asMutable();
            e.__iterate(function(o, i) {
                n.update(t.call(r, o, i, e), 0, function(e) {
                    return e + 1
                })
            });
            return n.asImmutable()
        }

        function rr(e, t, r) {
            var n = a(e),
                o = (f(e) ? Kt() : Fe()).asMutable();
            e.__iterate(function(i, u) {
                o.update(t.call(r, i, u, e), function(e) {
                    return (e = e || []).push(n ? [u, i] : i), e
                })
            });
            var i = _r(e);
            return o.map(function(t) {
                return hr(e, i(t))
            })
        }

        function nr(e, t, r, n) {
            var o = e.size;
            void 0 !== t && (t |= 0);
            void 0 !== r && (r === 1 / 0 ? r = o : r |= 0);
            if (P(t, r, o)) return e;
            var i = A(t, o),
                u = x(r, o);
            if (i != i || u != u) return nr(e.toSeq().cacheResult(), t, r, n);
            var a, s = u - i;
            s == s && (a = s < 0 ? 0 : s);
            var c = gr(e);
            c.size = 0 === a ? a : e.size && a || void 0;
            !n && ie(e) && a >= 0 && (c.get = function(t, r) {
                return (t = R(this, t)) >= 0 && t < a ? e.get(t + i, r) : r
            });
            c.__iterateUncached = function(t, r) {
                var o = this;
                if (0 === a) return 0;
                if (r) return this.cacheResult().__iterate(t, r);
                var u = 0,
                    s = !0,
                    c = 0;
                e.__iterate(function(e, r) {
                    if (!s || !(s = u++ < i)) {
                        c++;
                        return !1 !== t(e, n ? r : c - 1, o) && c !== a
                    }
                });
                return c
            };
            c.__iteratorUncached = function(t, r) {
                if (0 !== a && r) return this.cacheResult().__iterator(t, r);
                var o = 0 !== a && e.__iterator(t, r),
                    u = 0,
                    s = 0;
                return new D(function() {
                    for (; u++ < i;) o.next();
                    if (++s > a) return B();
                    var e = o.next();
                    return n || t === C ? e : z(t, s - 1, t === j ? void 0 : e.value[1], e)
                })
            };
            return c
        }

        function or(e, t, r) {
            var n = gr(e);
            n.__iterateUncached = function(n, o) {
                var i = this;
                if (o) return this.cacheResult().__iterate(n, o);
                var u = 0;
                e.__iterate(function(e, o, a) {
                    return t.call(r, e, o, a) && ++u && n(e, o, i)
                });
                return u
            };
            n.__iteratorUncached = function(n, o) {
                var i = this;
                if (o) return this.cacheResult().__iterator(n, o);
                var u = e.__iterator(L, o),
                    a = !0;
                return new D(function() {
                    if (!a) return B();
                    var e = u.next();
                    if (e.done) return e;
                    var o = e.value,
                        s = o[0],
                        c = o[1];
                    if (!t.call(r, c, s, i)) {
                        a = !1;
                        return B()
                    }
                    return n === L ? e : z(n, s, c, e)
                })
            };
            return n
        }

        function ir(e, t, r, n) {
            var o = gr(e);
            o.__iterateUncached = function(o, i) {
                var u = this;
                if (i) return this.cacheResult().__iterate(o, i);
                var a = !0,
                    s = 0;
                e.__iterate(function(e, i, c) {
                    if (!a || !(a = t.call(r, e, i, c))) {
                        s++;
                        return o(e, n ? i : s - 1, u)
                    }
                });
                return s
            };
            o.__iteratorUncached = function(o, i) {
                var u = this;
                if (i) return this.cacheResult().__iterator(o, i);
                var a = e.__iterator(L, i),
                    s = !0,
                    c = 0;
                return new D(function() {
                    var e, i, f;
                    do {
                        if ((e = a.next()).done) return n || o === C ? e : z(o, c++, o === j ? void 0 : e.value[1], e);
                        var l = e.value;
                        i = l[0];
                        f = l[1];
                        s && (s = t.call(r, f, i, u))
                    } while (s);
                    return o === L ? e : z(o, i, f, e)
                })
            };
            return o
        }

        function ur(e, t) {
            var r = a(e),
                o = [e].concat(t).map(function(e) {
                    u(e) ? r && (e = n(e)) : e = r ? ae(e) : se(Array.isArray(e) ? e : [e]);
                    return e
                }).filter(function(e) {
                    return 0 !== e.size
                });
            if (0 === o.length) return e;
            if (1 === o.length) {
                var i = o[0];
                if (i === e || r && a(i) || s(e) && s(i)) return i
            }
            var c = new te(o);
            r ? c = c.toKeyedSeq() : s(e) || (c = c.toSetSeq());
            (c = c.flatten(!0)).size = o.reduce(function(e, t) {
                if (void 0 !== e) {
                    var r = t.size;
                    if (void 0 !== r) return e + r
                }
            }, 0);
            return c
        }

        function ar(e, t, r) {
            var n = gr(e);
            n.__iterateUncached = function(n, o) {
                var i = 0,
                    a = !1;

                function s(e, c) {
                    var f = this;
                    e.__iterate(function(e, o) {
                        (!t || c < t) && u(e) ? s(e, c + 1) : !1 === n(e, r ? o : i++, f) && (a = !0);
                        return !a
                    }, o)
                }
                s(e, 0);
                return i
            };
            n.__iteratorUncached = function(n, o) {
                var i = e.__iterator(n, o),
                    a = [],
                    s = 0;
                return new D(function() {
                    for (; i;) {
                        var e = i.next();
                        if (!1 === e.done) {
                            var c = e.value;
                            n === L && (c = c[1]);
                            if (t && !(a.length < t) || !u(c)) return r ? e : z(n, s++, c, e);
                            a.push(i);
                            i = c.__iterator(n, o)
                        } else i = a.pop()
                    }
                    return B()
                })
            };
            return n
        }

        function sr(e, t, r) {
            var n = _r(e);
            return e.toSeq().map(function(o, i) {
                return n(t.call(r, o, i, e))
            }).flatten(!0)
        }

        function cr(e, t) {
            var r = gr(e);
            r.size = e.size && 2 * e.size - 1;
            r.__iterateUncached = function(r, n) {
                var o = this,
                    i = 0;
                e.__iterate(function(e, n) {
                    return (!i || !1 !== r(t, i++, o)) && !1 !== r(e, i++, o)
                }, n);
                return i
            };
            r.__iteratorUncached = function(r, n) {
                var o, i = e.__iterator(C, n),
                    u = 0;
                return new D(function() {
                    return (!o || u % 2) && (o = i.next()).done ? o : u % 2 ? z(r, u++, t) : z(r, u++, o.value, o)
                })
            };
            return r
        }

        function fr(e, t, r) {
            t || (t = br);
            var n = a(e),
                o = 0,
                i = e.toSeq().map(function(t, n) {
                    return [n, t, o++, r ? r(t, n, e) : t]
                }).toArray();
            i.sort(function(e, r) {
                return t(e[3], r[3]) || e[2] - r[2]
            }).forEach(n ? function(e, t) {
                i[t].length = 2
            } : function(e, t) {
                i[t] = e[1]
            });
            return n ? Q(i) : s(e) ? Y(i) : J(i)
        }

        function lr(e, t, r) {
            t || (t = br);
            if (r) {
                var n = e.toSeq().map(function(t, n) {
                    return [t, r(t, n, e)]
                }).reduce(function(e, r) {
                    return pr(t, e[1], r[1]) ? r : e
                });
                return n && n[0]
            }
            return e.reduce(function(e, r) {
                return pr(t, e, r) ? r : e
            })
        }

        function pr(e, t, r) {
            var n = e(r, t);
            return 0 === n && r !== t && (void 0 === r || null === r || r != r) || n > 0
        }

        function dr(e, t, n) {
            var o = gr(e);
            o.size = new te(n).map(function(e) {
                return e.size
            }).min();
            o.__iterate = function(e, t) {
                for (var r, n = this.__iterator(C, t), o = 0; !(r = n.next()).done && !1 !== e(r.value, o++, this););
                return o
            };
            o.__iteratorUncached = function(e, o) {
                var i = n.map(function(e) {
                        return e = r(e), F(o ? e.reverse() : e)
                    }),
                    u = 0,
                    a = !1;
                return new D(function() {
                    var r;
                    if (!a) {
                        r = i.map(function(e) {
                            return e.next()
                        });
                        a = r.some(function(e) {
                            return e.done
                        })
                    }
                    return a ? B() : z(e, u++, t.apply(null, r.map(function(e) {
                        return e.value
                    })))
                })
            };
            return o
        }

        function hr(e, t) {
            return ie(e) ? t : e.constructor(t)
        }

        function vr(e) {
            if (e !== Object(e)) throw new TypeError("Expected [K, V] tuple: " + e)
        }

        function yr(e) {
            He(e.size);
            return I(e)
        }

        function _r(e) {
            return a(e) ? n : s(e) ? o : i
        }

        function gr(e) {
            return Object.create((a(e) ? Q : s(e) ? Y : J).prototype)
        }

        function mr() {
            if (this._iter.cacheResult) {
                this._iter.cacheResult();
                this.size = this._iter.size;
                return this
            }
            return V.prototype.cacheResult.call(this)
        }

        function br(e, t) {
            return e > t ? 1 : e < t ? -1 : 0
        }

        function wr(e) {
            var t = F(e);
            if (!t) {
                if (!W(e)) throw new TypeError("Expected iterable or array-like: " + e);
                t = F(r(e))
            }
            return t
        }
        t(Er, Se);

        function Er(e, t) {
            var r, n = function(i) {
                    if (i instanceof n) return i;
                    if (!(this instanceof n)) return new n(i);
                    if (!r) {
                        r = !0;
                        var u = Object.keys(e);
                        Ir(o, u);
                        o.size = u.length;
                        o._name = t;
                        o._keys = u;
                        o._defaultValues = e
                    }
                    this._map = Fe(i)
                },
                o = n.prototype = Object.create(Sr);
            o.constructor = n;
            return n
        }
        Er.prototype.toString = function() {
            return this.__toString(kr(this) + " {", "}")
        };
        Er.prototype.has = function(e) {
            return this._defaultValues.hasOwnProperty(e)
        };
        Er.prototype.get = function(e, t) {
            if (!this.has(e)) return t;
            var r = this._defaultValues[e];
            return this._map ? this._map.get(e, r) : r
        };
        Er.prototype.clear = function() {
            if (this.__ownerID) {
                this._map && this._map.clear();
                return this
            }
            var e = this.constructor;
            return e._empty || (e._empty = Or(this, ot()))
        };
        Er.prototype.set = function(e, t) {
            if (!this.has(e)) throw new Error('Cannot set unknown key "' + e + '" on ' + kr(this));
            if (this._map && !this._map.has(e)) {
                if (t === this._defaultValues[e]) return this
            }
            var r = this._map && this._map.set(e, t);
            return this.__ownerID || r === this._map ? this : Or(this, r)
        };
        Er.prototype.remove = function(e) {
            if (!this.has(e)) return this;
            var t = this._map && this._map.remove(e);
            return this.__ownerID || t === this._map ? this : Or(this, t)
        };
        Er.prototype.wasAltered = function() {
            return this._map.wasAltered()
        };
        Er.prototype.__iterator = function(e, t) {
            var r = this;
            return n(this._defaultValues).map(function(e, t) {
                return r.get(t)
            }).__iterator(e, t)
        };
        Er.prototype.__iterate = function(e, t) {
            var r = this;
            return n(this._defaultValues).map(function(e, t) {
                return r.get(t)
            }).__iterate(e, t)
        };
        Er.prototype.__ensureOwner = function(e) {
            if (e === this.__ownerID) return this;
            var t = this._map && this._map.__ensureOwner(e);
            if (!e) {
                this.__ownerID = e;
                this._map = t;
                return this
            }
            return Or(this, t, e)
        };
        var Sr = Er.prototype;
        Sr[v] = Sr.remove;
        Sr.deleteIn = Sr.removeIn = Qe.removeIn;
        Sr.merge = Qe.merge;
        Sr.mergeWith = Qe.mergeWith;
        Sr.mergeIn = Qe.mergeIn;
        Sr.mergeDeep = Qe.mergeDeep;
        Sr.mergeDeepWith = Qe.mergeDeepWith;
        Sr.mergeDeepIn = Qe.mergeDeepIn;
        Sr.setIn = Qe.setIn;
        Sr.update = Qe.update;
        Sr.updateIn = Qe.updateIn;
        Sr.withMutations = Qe.withMutations;
        Sr.asMutable = Qe.asMutable;
        Sr.asImmutable = Qe.asImmutable;

        function Or(e, t, r) {
            var n = Object.create(Object.getPrototypeOf(e));
            n._map = t;
            n.__ownerID = r;
            return n
        }

        function kr(e) {
            return e._name || e.constructor.name || "Record"
        }

        function Ir(e, t) {
            try {
                t.forEach(Rr.bind(void 0, e))
            } catch (e) {}
        }

        function Rr(e, t) {
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
        t(Tr, ke);

        function Tr(e) {
            return null === e || void 0 === e ? Lr() : Pr(e) && !f(e) ? e : Lr().withMutations(function(t) {
                var r = i(e);
                He(r.size);
                r.forEach(function(e) {
                    return t.add(e)
                })
            })
        }
        Tr.of = function() {
            return this(arguments)
        };
        Tr.fromKeys = function(e) {
            return this(n(e).keySeq())
        };
        Tr.prototype.toString = function() {
            return this.__toString("Set {", "}")
        };
        Tr.prototype.has = function(e) {
            return this._map.has(e)
        };
        Tr.prototype.add = function(e) {
            return jr(this, this._map.set(e, !0))
        };
        Tr.prototype.remove = function(e) {
            return jr(this, this._map.remove(e))
        };
        Tr.prototype.clear = function() {
            return jr(this, this._map.clear())
        };
        Tr.prototype.union = function() {
            var t = e.call(arguments, 0);
            return 0 === (t = t.filter(function(e) {
                return 0 !== e.size
            })).length ? this : 0 !== this.size || this.__ownerID || 1 !== t.length ? this.withMutations(function(e) {
                for (var r = 0; r < t.length; r++) i(t[r]).forEach(function(t) {
                    return e.add(t)
                })
            }) : this.constructor(t[0])
        };
        Tr.prototype.intersect = function() {
            var t = e.call(arguments, 0);
            if (0 === t.length) return this;
            t = t.map(function(e) {
                return i(e)
            });
            var r = this;
            return this.withMutations(function(e) {
                r.forEach(function(r) {
                    t.every(function(e) {
                        return e.includes(r)
                    }) || e.remove(r)
                })
            })
        };
        Tr.prototype.subtract = function() {
            var t = e.call(arguments, 0);
            if (0 === t.length) return this;
            t = t.map(function(e) {
                return i(e)
            });
            var r = this;
            return this.withMutations(function(e) {
                r.forEach(function(r) {
                    t.some(function(e) {
                        return e.includes(r)
                    }) && e.remove(r)
                })
            })
        };
        Tr.prototype.merge = function() {
            return this.union.apply(this, arguments)
        };
        Tr.prototype.mergeWith = function(t) {
            var r = e.call(arguments, 1);
            return this.union.apply(this, r)
        };
        Tr.prototype.sort = function(e) {
            return qr(fr(this, e))
        };
        Tr.prototype.sortBy = function(e, t) {
            return qr(fr(this, t, e))
        };
        Tr.prototype.wasAltered = function() {
            return this._map.wasAltered()
        };
        Tr.prototype.__iterate = function(e, t) {
            var r = this;
            return this._map.__iterate(function(t, n) {
                return e(n, n, r)
            }, t)
        };
        Tr.prototype.__iterator = function(e, t) {
            return this._map.map(function(e, t) {
                return t
            }).__iterator(e, t)
        };
        Tr.prototype.__ensureOwner = function(e) {
            if (e === this.__ownerID) return this;
            var t = this._map.__ensureOwner(e);
            if (!e) {
                this.__ownerID = e;
                this._map = t;
                return this
            }
            return this.__make(t, e)
        };

        function Pr(e) {
            return !(!e || !e[xr])
        }
        Tr.isSet = Pr;
        var Ar, xr = "@@__IMMUTABLE_SET__@@",
            Mr = Tr.prototype;
        Mr[xr] = !0;
        Mr[v] = Mr.remove;
        Mr.mergeDeep = Mr.merge;
        Mr.mergeDeepWith = Mr.mergeWith;
        Mr.withMutations = Qe.withMutations;
        Mr.asMutable = Qe.asMutable;
        Mr.asImmutable = Qe.asImmutable;
        Mr.__empty = Lr;
        Mr.__make = Cr;

        function jr(e, t) {
            if (e.__ownerID) {
                e.size = t.size;
                e._map = t;
                return e
            }
            return t === e._map ? e : 0 === t.size ? e.__empty() : e.__make(t)
        }

        function Cr(e, t) {
            var r = Object.create(Mr);
            r.size = e ? e.size : 0;
            r._map = e;
            r.__ownerID = t;
            return r
        }

        function Lr() {
            return Ar || (Ar = Cr(ot()))
        }
        t(qr, Tr);

        function qr(e) {
            return null === e || void 0 === e ? Br() : Nr(e) ? e : Br().withMutations(function(t) {
                var r = i(e);
                He(r.size);
                r.forEach(function(e) {
                    return t.add(e)
                })
            })
        }
        qr.of = function() {
            return this(arguments)
        };
        qr.fromKeys = function(e) {
            return this(n(e).keySeq())
        };
        qr.prototype.toString = function() {
            return this.__toString("OrderedSet {", "}")
        };

        function Nr(e) {
            return Pr(e) && f(e)
        }
        qr.isOrderedSet = Nr;
        var Ur, Dr = qr.prototype;
        Dr[h] = !0;
        Dr.__empty = Br;
        Dr.__make = zr;

        function zr(e, t) {
            var r = Object.create(Dr);
            r.size = e ? e.size : 0;
            r._map = e;
            r.__ownerID = t;
            return r
        }

        function Br() {
            return Ur || (Ur = zr(Gt()))
        }
        t(Kr, Oe);

        function Kr(e) {
            return null === e || void 0 === e ? Qr() : Hr(e) ? e : Qr().unshiftAll(e)
        }
        Kr.of = function() {
            return this(arguments)
        };
        Kr.prototype.toString = function() {
            return this.__toString("Stack [", "]")
        };
        Kr.prototype.get = function(e, t) {
            var r = this._head;
            e = R(this, e);
            for (; r && e--;) r = r.next;
            return r ? r.value : t
        };
        Kr.prototype.peek = function() {
            return this._head && this._head.value
        };
        Kr.prototype.push = function() {
            if (0 === arguments.length) return this;
            for (var e = this.size + arguments.length, t = this._head, r = arguments.length - 1; r >= 0; r--) t = {
                value: arguments[r],
                next: t
            };
            if (this.__ownerID) {
                this.size = e;
                this._head = t;
                this.__hash = void 0;
                this.__altered = !0;
                return this
            }
            return Vr(e, t)
        };
        Kr.prototype.pushAll = function(e) {
            if (0 === (e = o(e)).size) return this;
            He(e.size);
            var t = this.size,
                r = this._head;
            e.reverse().forEach(function(e) {
                t++;
                r = {
                    value: e,
                    next: r
                }
            });
            if (this.__ownerID) {
                this.size = t;
                this._head = r;
                this.__hash = void 0;
                this.__altered = !0;
                return this
            }
            return Vr(t, r)
        };
        Kr.prototype.pop = function() {
            return this.slice(1)
        };
        Kr.prototype.unshift = function() {
            return this.push.apply(this, arguments)
        };
        Kr.prototype.unshiftAll = function(e) {
            return this.pushAll(e)
        };
        Kr.prototype.shift = function() {
            return this.pop.apply(this, arguments)
        };
        Kr.prototype.clear = function() {
            if (0 === this.size) return this;
            if (this.__ownerID) {
                this.size = 0;
                this._head = void 0;
                this.__hash = void 0;
                this.__altered = !0;
                return this
            }
            return Qr()
        };
        Kr.prototype.slice = function(e, t) {
            if (P(e, t, this.size)) return this;
            var r = A(e, this.size);
            if (x(t, this.size) !== this.size) return Oe.prototype.slice.call(this, e, t);
            for (var n = this.size - r, o = this._head; r--;) o = o.next;
            if (this.__ownerID) {
                this.size = n;
                this._head = o;
                this.__hash = void 0;
                this.__altered = !0;
                return this
            }
            return Vr(n, o)
        };
        Kr.prototype.__ensureOwner = function(e) {
            if (e === this.__ownerID) return this;
            if (!e) {
                this.__ownerID = e;
                this.__altered = !1;
                return this
            }
            return Vr(this.size, this._head, e, this.__hash)
        };
        Kr.prototype.__iterate = function(e, t) {
            if (t) return this.reverse().__iterate(e);
            for (var r = 0, n = this._head; n && !1 !== e(n.value, r++, this);) n = n.next;
            return r
        };
        Kr.prototype.__iterator = function(e, t) {
            if (t) return this.reverse().__iterator(e);
            var r = 0,
                n = this._head;
            return new D(function() {
                if (n) {
                    var t = n.value;
                    n = n.next;
                    return z(e, r++, t)
                }
                return B()
            })
        };

        function Hr(e) {
            return !(!e || !e[Gr])
        }
        Kr.isStack = Hr;
        var Fr, Gr = "@@__IMMUTABLE_STACK__@@",
            Wr = Kr.prototype;
        Wr[Gr] = !0;
        Wr.withMutations = Qe.withMutations;
        Wr.asMutable = Qe.asMutable;
        Wr.asImmutable = Qe.asImmutable;
        Wr.wasAltered = Qe.wasAltered;

        function Vr(e, t, r, n) {
            var o = Object.create(Wr);
            o.size = e;
            o._head = t;
            o.__ownerID = r;
            o.__hash = n;
            o.__altered = !1;
            return o
        }

        function Qr() {
            return Fr || (Fr = Vr(0))
        }

        function Yr(e, t) {
            var r = function(r) {
                e.prototype[r] = t[r]
            };
            Object.keys(t).forEach(r);
            Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(t).forEach(r);
            return e
        }
        r.Iterator = D;
        Yr(r, {
            toArray: function() {
                He(this.size);
                var e = new Array(this.size || 0);
                this.valueSeq().__iterate(function(t, r) {
                    e[r] = t
                });
                return e
            },
            toIndexedSeq: function() {
                return new Qt(this)
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
                return new Vt(this, !0)
            },
            toMap: function() {
                return Fe(this.toKeyedSeq())
            },
            toObject: function() {
                He(this.size);
                var e = {};
                this.__iterate(function(t, r) {
                    e[r] = t
                });
                return e
            },
            toOrderedMap: function() {
                return Kt(this.toKeyedSeq())
            },
            toOrderedSet: function() {
                return qr(a(this) ? this.valueSeq() : this)
            },
            toSet: function() {
                return Tr(a(this) ? this.valueSeq() : this)
            },
            toSetSeq: function() {
                return new Yt(this)
            },
            toSeq: function() {
                return s(this) ? this.toIndexedSeq() : a(this) ? this.toKeyedSeq() : this.toSetSeq()
            },
            toStack: function() {
                return Kr(a(this) ? this.valueSeq() : this)
            },
            toList: function() {
                return Ot(a(this) ? this.valueSeq() : this)
            },
            toString: function() {
                return "[Iterable]"
            },
            __toString: function(e, t) {
                return 0 === this.size ? e + t : e + " " + this.toSeq().map(this.__toStringMapper).join(", ") + " " + t
            },
            concat: function() {
                return hr(this, ur(this, e.call(arguments, 0)))
            },
            includes: function(e) {
                return this.some(function(t) {
                    return _e(t, e)
                })
            },
            entries: function() {
                return this.__iterator(L)
            },
            every: function(e, t) {
                He(this.size);
                var r = !0;
                this.__iterate(function(n, o, i) {
                    if (!e.call(t, n, o, i)) {
                        r = !1;
                        return !1
                    }
                });
                return r
            },
            filter: function(e, t) {
                return hr(this, er(this, e, t, !0))
            },
            find: function(e, t, r) {
                var n = this.findEntry(e, t);
                return n ? n[1] : r
            },
            forEach: function(e, t) {
                He(this.size);
                return this.__iterate(t ? e.bind(t) : e)
            },
            join: function(e) {
                He(this.size);
                e = void 0 !== e ? "" + e : ",";
                var t = "",
                    r = !0;
                this.__iterate(function(n) {
                    r ? r = !1 : t += e;
                    t += null !== n && void 0 !== n ? n.toString() : ""
                });
                return t
            },
            keys: function() {
                return this.__iterator(j)
            },
            map: function(e, t) {
                return hr(this, Zt(this, e, t))
            },
            reduce: function(e, t, r) {
                He(this.size);
                var n, o;
                arguments.length < 2 ? o = !0 : n = t;
                this.__iterate(function(t, i, u) {
                    if (o) {
                        o = !1;
                        n = t
                    } else n = e.call(r, n, t, i, u)
                });
                return n
            },
            reduceRight: function(e, t, r) {
                var n = this.toKeyedSeq().reverse();
                return n.reduce.apply(n, arguments)
            },
            reverse: function() {
                return hr(this, $t(this, !0))
            },
            slice: function(e, t) {
                return hr(this, nr(this, e, t, !0))
            },
            some: function(e, t) {
                return !this.every(en(e), t)
            },
            sort: function(e) {
                return hr(this, fr(this, e))
            },
            values: function() {
                return this.__iterator(C)
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
                return I(e ? this.toSeq().filter(e, t) : this)
            },
            countBy: function(e, t) {
                return tr(this, e, t)
            },
            equals: function(e) {
                return ge(this, e)
            },
            entrySeq: function() {
                var e = this;
                if (e._cache) return new te(e._cache);
                var t = e.toSeq().map($r).toIndexedSeq();
                t.fromEntrySeq = function() {
                    return e.toSeq()
                };
                return t
            },
            filterNot: function(e, t) {
                return this.filter(en(e), t)
            },
            findEntry: function(e, t, r) {
                var n = r;
                this.__iterate(function(r, o, i) {
                    if (e.call(t, r, o, i)) {
                        n = [o, r];
                        return !1
                    }
                });
                return n
            },
            findKey: function(e, t) {
                var r = this.findEntry(e, t);
                return r && r[0]
            },
            findLast: function(e, t, r) {
                return this.toKeyedSeq().reverse().find(e, t, r)
            },
            findLastEntry: function(e, t, r) {
                return this.toKeyedSeq().reverse().findEntry(e, t, r)
            },
            findLastKey: function(e, t) {
                return this.toKeyedSeq().reverse().findKey(e, t)
            },
            first: function() {
                return this.find(T)
            },
            flatMap: function(e, t) {
                return hr(this, sr(this, e, t))
            },
            flatten: function(e) {
                return hr(this, ar(this, e, !0))
            },
            fromEntrySeq: function() {
                return new Jt(this)
            },
            get: function(e, t) {
                return this.find(function(t, r) {
                    return _e(r, e)
                }, void 0, t)
            },
            getIn: function(e, t) {
                for (var r, n = this, o = wr(e); !(r = o.next()).done;) {
                    var i = r.value;
                    if ((n = n && n.get ? n.get(i, m) : m) === m) return t
                }
                return n
            },
            groupBy: function(e, t) {
                return rr(this, e, t)
            },
            has: function(e) {
                return this.get(e, m) !== m
            },
            hasIn: function(e) {
                return this.getIn(e, m) !== m
            },
            isSubset: function(e) {
                e = "function" == typeof e.includes ? e : r(e);
                return this.every(function(t) {
                    return e.includes(t)
                })
            },
            isSuperset: function(e) {
                return (e = "function" == typeof e.isSubset ? e : r(e)).isSubset(this)
            },
            keyOf: function(e) {
                return this.findKey(function(t) {
                    return _e(t, e)
                })
            },
            keySeq: function() {
                return this.toSeq().map(Zr).toIndexedSeq()
            },
            last: function() {
                return this.toSeq().reverse().first()
            },
            lastKeyOf: function(e) {
                return this.toKeyedSeq().reverse().keyOf(e)
            },
            max: function(e) {
                return lr(this, e)
            },
            maxBy: function(e, t) {
                return lr(this, t, e)
            },
            min: function(e) {
                return lr(this, e ? tn(e) : on)
            },
            minBy: function(e, t) {
                return lr(this, t ? tn(t) : on, e)
            },
            rest: function() {
                return this.slice(1)
            },
            skip: function(e) {
                return this.slice(Math.max(0, e))
            },
            skipLast: function(e) {
                return hr(this, this.toSeq().reverse().skip(e).reverse())
            },
            skipWhile: function(e, t) {
                return hr(this, ir(this, e, t, !0))
            },
            skipUntil: function(e, t) {
                return this.skipWhile(en(e), t)
            },
            sortBy: function(e, t) {
                return hr(this, fr(this, t, e))
            },
            take: function(e) {
                return this.slice(0, Math.max(0, e))
            },
            takeLast: function(e) {
                return hr(this, this.toSeq().reverse().take(e).reverse())
            },
            takeWhile: function(e, t) {
                return hr(this, or(this, e, t))
            },
            takeUntil: function(e, t) {
                return this.takeWhile(en(e), t)
            },
            valueSeq: function() {
                return this.toIndexedSeq()
            },
            hashCode: function() {
                return this.__hash || (this.__hash = un(this))
            }
        });
        var Jr = r.prototype;
        Jr[l] = !0;
        Jr[U] = Jr.values;
        Jr.__toJS = Jr.toArray;
        Jr.__toStringMapper = rn;
        Jr.inspect = Jr.toSource = function() {
            return this.toString()
        };
        Jr.chain = Jr.flatMap;
        Jr.contains = Jr.includes;
        Yr(n, {
            flip: function() {
                return hr(this, Xt(this))
            },
            mapEntries: function(e, t) {
                var r = this,
                    n = 0;
                return hr(this, this.toSeq().map(function(o, i) {
                    return e.call(t, [i, o], n++, r)
                }).fromEntrySeq())
            },
            mapKeys: function(e, t) {
                var r = this;
                return hr(this, this.toSeq().flip().map(function(n, o) {
                    return e.call(t, n, o, r)
                }).flip())
            }
        });
        var Xr = n.prototype;
        Xr[p] = !0;
        Xr[U] = Jr.entries;
        Xr.__toJS = Jr.toObject;
        Xr.__toStringMapper = function(e, t) {
            return JSON.stringify(t) + ": " + rn(e)
        };
        Yr(o, {
            toKeyedSeq: function() {
                return new Vt(this, !1)
            },
            filter: function(e, t) {
                return hr(this, er(this, e, t, !1))
            },
            findIndex: function(e, t) {
                var r = this.findEntry(e, t);
                return r ? r[0] : -1
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
                return hr(this, $t(this, !1))
            },
            slice: function(e, t) {
                return hr(this, nr(this, e, t, !1))
            },
            splice: function(e, t) {
                var r = arguments.length;
                t = Math.max(0 | t, 0);
                if (0 === r || 2 === r && !t) return this;
                e = A(e, e < 0 ? this.count() : this.size);
                var n = this.slice(0, e);
                return hr(this, 1 === r ? n : n.concat(k(arguments, 2), this.slice(e + t)))
            },
            findLastIndex: function(e, t) {
                var r = this.findLastEntry(e, t);
                return r ? r[0] : -1
            },
            first: function() {
                return this.get(0)
            },
            flatten: function(e) {
                return hr(this, ar(this, e, !1))
            },
            get: function(e, t) {
                return (e = R(this, e)) < 0 || this.size === 1 / 0 || void 0 !== this.size && e > this.size ? t : this.find(function(t, r) {
                    return r === e
                }, void 0, t)
            },
            has: function(e) {
                return (e = R(this, e)) >= 0 && (void 0 !== this.size ? this.size === 1 / 0 || e < this.size : -1 !== this.indexOf(e))
            },
            interpose: function(e) {
                return hr(this, cr(this, e))
            },
            interleave: function() {
                var e = [this].concat(k(arguments)),
                    t = dr(this.toSeq(), Y.of, e),
                    r = t.flatten(!0);
                t.size && (r.size = t.size * e.length);
                return hr(this, r)
            },
            keySeq: function() {
                return we(0, this.size)
            },
            last: function() {
                return this.get(-1)
            },
            skipWhile: function(e, t) {
                return hr(this, ir(this, e, t, !1))
            },
            zip: function() {
                return hr(this, dr(this, nn, [this].concat(k(arguments))))
            },
            zipWith: function(e) {
                var t = k(arguments);
                t[0] = this;
                return hr(this, dr(this, e, t))
            }
        });
        o.prototype[d] = !0;
        o.prototype[h] = !0;
        Yr(i, {
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
        i.prototype.has = Jr.includes;
        i.prototype.contains = i.prototype.includes;
        Yr(Q, n.prototype);
        Yr(Y, o.prototype);
        Yr(J, i.prototype);
        Yr(Se, n.prototype);
        Yr(Oe, o.prototype);
        Yr(ke, i.prototype);

        function Zr(e, t) {
            return t
        }

        function $r(e, t) {
            return [t, e]
        }

        function en(e) {
            return function() {
                return !e.apply(this, arguments)
            }
        }

        function tn(e) {
            return function() {
                return -e.apply(this, arguments)
            }
        }

        function rn(e) {
            return "string" == typeof e ? JSON.stringify(e) : String(e)
        }

        function nn() {
            return k(arguments)
        }

        function on(e, t) {
            return e < t ? 1 : e > t ? -1 : 0
        }

        function un(e) {
            if (e.size === 1 / 0) return 0;
            var t = f(e),
                r = a(e),
                n = t ? 1 : 0;
            return an(e.__iterate(r ? t ? function(e, t) {
                n = 31 * n + sn(Te(e), Te(t)) | 0
            } : function(e, t) {
                n = n + sn(Te(e), Te(t)) | 0
            } : t ? function(e) {
                n = 31 * n + Te(e) | 0
            } : function(e) {
                n = n + Te(e) | 0
            }), n)
        }

        function an(e, t) {
            t = Ie(t, 3432918353);
            t = Ie(t << 15 | t >>> -15, 461845907);
            t = Ie(t << 13 | t >>> -13, 5);
            t = Ie((t = (t + 3864292196 | 0) ^ e) ^ t >>> 16, 2246822507);
            return t = Re((t = Ie(t ^ t >>> 13, 3266489909)) ^ t >>> 16)
        }

        function sn(e, t) {
            return e ^ t + 2654435769 + (e << 6) + (e >> 2) | 0
        }
        var cn = {
            Iterable: r,
            Seq: V,
            Collection: Ee,
            Map: Fe,
            OrderedMap: Kt,
            List: Ot,
            Stack: Kr,
            Set: Tr,
            OrderedSet: qr,
            Record: Er,
            Range: we,
            Repeat: me,
            is: _e,
            fromJS: de
        };
        ! function() {
            try {
                Object.defineProperty(Jr, "length", {
                    get: function() {
                        if (!r.noLengthWarning) {
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
        return cn
    }, e.exports = n();
    var n
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = 20,
        o = [],
        i = t.newErrorEntry = function(e) {
            (o = o.slice(1, n)).push(e)
        };
    t.initDebugLog = function() {
        window.onerror = function(e, t, r) {
            i(e + " - " + t + " (" + r + ")")
        }
    }, t.getLastErrors = function() {
        return o
    }
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        },
        o = r(8),
        i = r(6),
        u = r(68),
        a = function(e) {
            if (e.useIframeRequest && window.iframeXMLHttpRequestPromise) return window.iframeXMLHttpRequestPromise.then(function(t) {
                return (0, i.set)("Request", t)(e)
            }).catch(function() {
                return (0, i.set)("Request", XMLHttpRequest)(e)
            });
            var t = e.useIframeRequest && window.iframeXMLHttpRequest && window.apiIframe && window.apiIframe.contentDocument,
                r = t ? window.iframeXMLHttpRequest : XMLHttpRequest,
                o = e;
            if (t) {
                var u = n({
                    "X-HS-Referer": window.location.href
                }, e.headers);
                o = (0, i.set)("headers", u)(o)
            }
            return (0, i.set)("Request", r)(o)
        },
        s = function(e) {
            return new o.Promise(function(t) {
                var r = new(e.Request || XMLHttpRequest);
                if (e.error) t((0, u.withResponseHandlers)((0, u.buildErrorResponse)(r, e.error.message, "OPTIONSERROR"), e));
                else if (e.externalResponse) {
                    var n = e.externalResponse instanceof XMLHttpRequest ? (0, u.buildResponse)(e.externalResponse) : Object.assign((0, u.buildResponse)(r), e.externalResponse);
                    t((0, u.withResponseHandlers)(n, e))
                } else {
                    r.open(e.method || "GET", e.url, !0);
                    "number" == typeof e.timeout && (r.timeout = e.timeout);
                    r.withCredentials = e.withCredentials;
                    e.responseType && (r.responseType = e.responseType);
                    "function" == typeof e.withXhr && e.withXhr(r);
                    Object.keys(e.headers || {}).forEach(function(t) {
                        !1 !== e.headers[t] && r.setRequestHeader(t, e.headers[t])
                    });
                    r.addEventListener("load", function() {
                        return t((0, u.withResponseHandlers)((0, u.buildResponse)(r), e))
                    });
                    r.addEventListener("error", function() {
                        return t((0, u.withResponseHandlers)((0, u.buildErrorResponse)(r, "Network request failed", "NETWORKERROR"), e))
                    });
                    r.addEventListener("timeout", function() {
                        return t((0, u.withResponseHandlers)((0, u.buildErrorResponse)(r, "Request timeout", "TIMEOUT"), e))
                    });
                    r.addEventListener("abort", function() {
                        return t((0, u.withResponseHandlers)((0, u.buildErrorResponse)(r, "Request aborted", "ABORT"), e))
                    });
                    r.send(void 0 === e.data ? null : e.data)
                }
            })
        },
        c = function(e) {
            return o.Promise.reject((0, u.buildRequestError)(e))
        };
    t.default = function(e) {
        var t = function(t, r) {
                return (0, u.withRetry)(n({}, r, {
                    url: t
                }), function(t) {
                    return e(t).catch(c).then(u.withTracking).then(a).then(s)
                }).then(u.trackSuccess, function(e) {
                    return o.Promise.reject((0, u.trackFailureBasedOnErrorResponse)(e))
                })
            },
            r = function(e) {
                return function(r, o) {
                    return t(r, n({}, o, {
                        method: e
                    }))
                }
            },
            i = function(e) {
                return function(t, n) {
                    return r(e)(t, n).then(function(e) {
                        return e.data
                    })
                }
            };
        return Object.assign(t, {
            get: i("GET"),
            post: i("POST"),
            put: i("PUT"),
            patch: i("PATCH"),
            delete: i("DELETE"),
            options: i("OPTIONS"),
            getWithResponse: r("GET"),
            postWithResponse: r("POST"),
            putWithResponse: r("PUT"),
            patchWithResponse: r("PATCH"),
            deleteWithResponse: r("DELETE"),
            optionsWithResponse: r("OPTIONS")
        })
    };
    e.exports = t.default
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.allowTimeoutOverride = t.rewriteUrl = void 0;
    var n = function() {
            function e(e, t) {
                var r = [],
                    n = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var u, a = e[Symbol.iterator](); !(n = (u = a.next()).done); n = !0) {
                        r.push(u.value);
                        if (t && r.length === t) break
                    }
                } catch (e) {
                    o = !0;
                    i = e
                } finally {
                    try {
                        !n && a.return && a.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return r
            }
            return function(t, r) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, r);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        o = r(4),
        i = r(30),
        u = r(6),
        a = (t.rewriteUrl = function(e) {
            return (0, o.withUrl)(function(t) {
                var r = e.localStorage && e.localStorage.getItem("URL_REWRITE");
                if (!r) return t;
                var o = JSON.parse(r);
                if (!Array.isArray(o)) {
                    console.error("REWRITE_URL local storage key must be a stringified array");
                    return t
                }
                if (!o.length) return t;
                var u = (0, i.buildUrl)(t);
                ("string" == typeof o[0] || o[0] instanceof String) && (o = [o]);
                o.forEach(function(e) {
                    var t = n(e, 2),
                        r = t[0],
                        o = t[1];
                    u = u.replace(new RegExp(r), o)
                });
                return (0, i.parseUrl)(u)
            })(e)
        }, "HUB-HTTP_TIMEOUT");
    t.allowTimeoutOverride = function(e) {
        var t = e.localStorage && e.localStorage.getItem(a);
        if (null != t) {
            console.log("[hub-http] Using localStorage override " + a + " for request timeout.");
            return (0, u.set)("timeout", parseInt(t))(e)
        }
        return e
    }
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        o = function(e) {
            var t = e.replace(/-/g, " ");
            return (t = t.replace(/_/g, " ")).replace(/\w\S*/g, function(e) {
                return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
            })
        },
        i = function(e, t, r) {
            return "\nusage-tracker " + e + ': "' + t + '"\n----------------------------------------\n' + r + "\n"
        };
    t.debugLog = function(e, t) {
        var r = t.eventKey,
            u = t.eventProperties,
            a = t.eventName,
            s = t.eventNamespace,
            c = {
                eventKey: r,
                eventType: "[" + o(s) + "] " + o(a),
                eventProperties: u
            };
        return i("debug log", e, Object.keys(c).reduce(function(e, t) {
            var r = c[t];
            "string" == typeof r ? e += t + ": " + r + "\n" : "object" === (void 0 === r ? "undefined" : n(r)) ? e += t + ": " + JSON.stringify(r, null, 2) + "\n" : e += t + ": " + (void 0 === r ? "undefined" : n(r)) + "\n";
            return e
        }, ""))
    }, t.genericError = function(e) {
        return new Error("usage-tracker error: " + e)
    }, t.configError = function(e) {
        return new Error("usage-tracker config error: " + e)
    }, t.eventError = function(e) {
        return new Error("usage-tracker event error: " + e)
    }
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getEmail = t.getUserId = t.getSidekickId = t.clearUser = t.fetchUser = t.setUser = t.getUser = void 0;
    var n = function() {
            function e(e, t) {
                var r = [],
                    n = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var u, a = e[Symbol.iterator](); !(n = (u = a.next()).done); n = !0) {
                        r.push(u.value);
                        if (t && r.length === t) break
                    }
                } catch (e) {
                    o = !0;
                    i = e
                } finally {
                    try {
                        !n && a.return && a.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return r
            }
            return function(t, r) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, r);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        o = r(13),
        i = r(20),
        u = p(r(0)),
        a = r(51),
        s = r(26),
        c = r(35),
        f = r(57),
        l = r(52);

    function p(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var d = (0, o.Map)(),
        h = (t.getUser = function() {
            return d
        }, t.setUser = function(e) {
            d = e;
            (0, i.sendToContentScripts)("userprofile:change", d.toJS())
        });
    t.fetchUser = async function() {
        try {
            var e = await Promise.all([(0, a.fetchUserInfo)(), (0, s.fetchAttributes)()]),
                t = n(e, 2),
                r = t[0],
                o = t[1];
            if (!o) return r;
            var i = null;
            try {
                i = await (0, l.fetchPortalId)()
            } catch (e) {
                u.default.log("User has no picked portal ID")
            }
            u.default.log("signalsUserId: ", o.get(c.SIDEKICK_ID_KEY));
            if (o.get(c.SIDEKICK_ID_KEY) > 0) {
                var p = void 0;
                try {
                    p = await (0, f.fetchGates)(i)
                } catch (e) {
                    403 === e.status && (i = null)
                }
                var d = r.merge({
                    sidekickId: +o.get(c.SIDEKICK_ID_KEY),
                    portal_id: i,
                    gates: p
                });
                h(d);
                return d
            }
            return null
        } catch (e) {
            if (401 !== e.status) {
                var v = "Unable to fetchUser: " + e.responseText;
                u.default.log(v)
            }
            return null
        }
    }, t.clearUser = function() {
        return h((0, o.Map)())
    }, t.getSidekickId = function() {
        return d.get("sidekickId")
    }, t.getUserId = function() {
        return d.get("userId")
    }, t.getEmail = function() {
        return d.get("email")
    }
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(9),
        o = v(r(15)),
        i = h(r(4)),
        u = r(21),
        a = r(16),
        s = v(r(42)),
        c = r(43),
        f = v(r(44)),
        l = r(74),
        p = r(10),
        d = v(r(0));

    function h(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        t.default = e;
        return t
    }

    function v(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var y = function() {
            d.default.warn("SignalsExtension HubApiHttpClient: reloading on unauthorized");
            (0, p.restartExtension)()
        },
        _ = function(e) {
            return d.default.warn("Error reloading on unauthed: " + (e && e.message))
        };
    t.default = (0, o.default)((0, n.createStack)(i.services, s.default, i.jsonBody, i.httpsOnly, i.environmentUrl(i.standardApi("api", "hubspot")), f.default, (0, l.reloadOnUnauthorized)(y, _), i.withQuery, a.rewriteUrl, u.retryOnError, i.validateStatus, c.immutableResponse));
    e.exports = t.default
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.sendToPopup = t.listenToContentScriptMethodsBatch = t.sendToContentScripts = void 0;
    var n = a(r(0)),
        o = a(r(1)),
        i = r(10),
        u = r(5);

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.sendToContentScripts = function(e, t) {
        (0, i.forAllTabs)(null, function(r) {
            o.default.tabs.sendMessage(r.id, {
                method: e,
                data: t
            })
        })
    }, t.listenToContentScriptMethodsBatch = function(e) {
        var t = function(t, r, o) {
            var i = e[t.method];
            if (i) {
                try {
                    i(t.data, o)
                } catch (e) {
                    n.default.error(e);
                    n.default.info(t.method);
                    n.default.debug(t)
                }
                return !0
            }
            return !1
        };
        (0, u.addMessageListener)(t)
    }, t.sendToPopup = function(e, t) {
        (0, u.sendMessage)({
            method: e,
            data: t
        })
    }
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.retryOnError = t.logoutOnMissingPortalId = t.logoutOnUnauthorized = t.logoutOn = t.logoutOnError = t.timeoutInQuery = t.setRequest = t.maybeUseIframeRequest = t.hubapi = t.lab = t.defaults = void 0;
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        o = d(r(41)),
        i = r(30),
        u = r(4),
        a = r(29),
        s = r(71),
        c = p(r(73)),
        f = r(8),
        l = r(6);

    function p(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function d(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
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
    var h = function(e, t) {
            var r = "HUB-HTTP-LABS:" + e,
                o = t.localStorage && t.localStorage.getItem(r);
            if (o && "true" === o.toLowerCase()) {
                console.log("Using localStorage override for " + r + ": " + o);
                return "true" === o.toLowerCase()
            }
            return "object" === n(t.labs) && t.labs[e]
        },
        v = t.lab = function(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function(e) {
                return e
            };
            return function(n) {
                return h(e, n) ? t(n) : r(n)
            }
        },
        y = (t.hubapi = v("HUBAPIDOTCOM", (0, u.environmentUrl)((0, u.standardApi)("api", "hubapi")), (0, u.environmentUrl)((0, u.standardApi)("api", "hubspot"))), t.maybeUseIframeRequest = function(e) {
            var t = 0 === (0, i.parseUrl)(e.url).hostname.indexOf("api.hubspot");
            return (0, l.set)("useIframeRequest", t)(e)
        }),
        _ = (t.setRequest = y, t.timeoutInQuery = function(e) {
            return "number" == typeof e.timeout ? (0, u.query)({
                clienttimeout: e.timeout
            })(e) : e
        }, function(e) {
            var t = {
                    hostname: (0, u.resolveApi)((0, u.standardApi)("app", "hubspot")),
                    path: "/login/"
                },
                r = {
                    loginRedirectUrl: e.location.href
                };
            e.portalId && (r.loginPortalId = e.portalId);
            t.query = o.stringify(r);
            return (0, i.buildUrl)(t)
        }),
        g = function(e) {
            return c.default.clear(e)
        },
        m = function(e) {
            var t = _(e);
            if ((0, s.redirectTo)(t, e, g)) throw new Error("Aborting: redirection in progress");
            return e
        },
        b = function(e) {
            var t = e.options,
                r = _(t);
            (0, s.redirectTo)(r, t, g);
            return f.Promise.reject((0, a.responseError)(e, "Aborting: redirection in progress"))
        },
        w = (t.logoutOnError = (0, u.onResponseError)(b), t.logoutOn = function(e) {
            return function(t) {
                return (0, u.onResponse)(function(t) {
                    return e(t) ? b(t) : t
                })(t)
            }
        });
    t.logoutOnUnauthorized = w(function(e) {
        return 401 === e.status
    }), t.logoutOnMissingPortalId = function(e) {
        if (!e.portalId) {
            console.log("[hub-http] Could not find portal id. Redirecting");
            return m(e)
        }
        return e
    }, t.retryOnError = (0, u.retry)(function(e) {
        return "GET" === e.options.method && (e.status >= 500 || 0 === e.status && "NETWORKERROR" === e.errorCode)
    }, {
        reason: "Server error"
    })
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.CLIENT_APP_INTERACTION = "client-app-interaction", t.UPDATE_EXTENSION = "update-extension", t.UPDATE_AVAILABLE = "update-available-for-chrome", t.LOADED_REMOTE_BACKGROUND_PAGE = "loaded-remote-background-page", t.CHANGE_PORTAL = "change-portal", t.SUPPRESS_NOTIFICATION = "suppress-notification", t.CLEAR_BLOCKED_URL_CACHE = "clear-blocked-url-cache", t.FIRST_SHOW_NOTIFICATION = "extension-show-first-notification", t.FIRST_CLICK_NOTIFICATION = "extension-clicked-first-notification", t.SHOW_NOTIFICATION = "extension-show-notification", t.REGISTER_USER = "register-user"
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.UsageTracker = t.initAuthedTracker = t.initUnauthedTracker = void 0;
    var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        },
        o = r(48),
        i = s(r(76)),
        u = r(77),
        a = s(r(58));

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var c = {
        clientType: o.CHROME_EXTENSION,
        screen: o.GMAIL,
        namespace: o.WHERE_APP,
        fromSignalsExtension: !0,
        extensionVersion: (0, a.default)()
    };
    t.initUnauthedTracker = function() {
        u.SignalsExtensionUsageTracker.initUnauthedTracker(i.default, c)
    }, t.initAuthedTracker = function(e, t) {
        u.SignalsExtensionUsageTracker.initAuthedTracker(i.default, n({}, c, {
            email: e,
            hubId: t
        }))
    }, t.UsageTracker = u.SignalsExtensionUsageTracker
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = window.Raven;
    e.exports = t.default
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.emptyFunction = function() {}
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.setDoNotDisturb = t.getDoNotDisturb = t.clearAttributes = t.setAttribute = t.getAttribute = t.fetchAttributes = void 0;
    var n = r(13),
        o = a(r(55)),
        i = r(7),
        u = r(35);

    function a(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        t.default = e;
        return t
    }
    var s = new n.Map,
        c = (t.fetchAttributes = function() {
            return o.fetchAttributes([u.DND_KEY, u.SIDEKICK_ID_KEY, u.USER_REGISTRATION_KEY]).then(function(e) {
                return s = e
            })
        }, t.getAttribute = function(e) {
            return s.get(e)
        }),
        f = t.setAttribute = function(e, t) {
            s = s.set(e, t);
            return o.saveAttribute((0, i.getPortalId)(), e, t)
        };
    t.clearAttributes = function() {
        s = new n.Map
    }, t.getDoNotDisturb = function() {
        return "true" !== (c(u.DND_KEY) || "true").toLowerCase()
    }, t.setDoNotDisturb = function(e) {
        return f(u.DND_KEY, "" + !e)
    }
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = u(r(2)),
        o = u(r(3)),
        i = u(r(28));

    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    n.default.deployed("q") || (o.default.longStackSupport = !0);
    var a = "chrome-extension:",
        s = i.default.pathname,
        c = i.default.protocol,
        f = c === a && -1 !== s.indexOf("background.html"),
        l = c === a && -1 !== s.indexOf("popup.html"),
        p = null;
    p = f ? "background" : l ? "popup" : "content_script";
    t.default = p;
    e.exports = t.default
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = window.location;
    e.exports = t.default
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.responseError = t.handleResponse = t.responseHandlers = void 0;
    var n = r(6),
        o = Symbol("responseHandlers");
    t.responseHandlers = function(e) {
        return e[o]
    }, t.handleResponse = function(e) {
        return (0, n.push)(o, e)
    }, t.responseError = function(e, t, r, n) {
        return Object.assign(new Error, e, {
            message: t,
            code: r,
            previousError: n
        })
    }
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
            function e(e, t) {
                var r = [],
                    n = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var u, a = e[Symbol.iterator](); !(n = (u = a.next()).done); n = !0) {
                        r.push(u.value);
                        if (t && r.length === t) break
                    }
                } catch (e) {
                    o = !0;
                    i = e
                } finally {
                    try {
                        !n && a.return && a.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return r
            }
            return function(t, r) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, r);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        o = /^(?:(?:([^:\/?#]+):)?(?:\/\/([^:\/?#]+)(?::([0-9]+))?)+?)?([^?#]+)?(?:\?([^#]*))?(?:#(.+))?/,
        i = function(e) {
            var t = (e || "").toLowerCase();
            return t ? "http" === t ? 80 : "https" === t ? 443 : null : null
        },
        u = (t.parseUrl = function(e) {
            var t = o.exec(e),
                r = n(t, 7),
                u = r[1],
                a = r[2],
                s = r[3],
                c = r[4],
                f = r[5],
                l = r[6];
            return {
                protocol: u,
                hostname: a,
                port: void 0 !== s ? parseInt(s, 10) : i(u),
                path: c,
                query: f,
                hash: l
            }
        }, function(e) {
            if (!e.port) return !0;
            if (!e.protocol) return !0;
            var t = (e.protocol || "").toLowerCase();
            return "http" === t && 80 === e.port || "https" === t && 443 === e.port
        });
    t.buildUrl = function(e) {
        return [e.hostname ? (e.protocol || "https") + "://" : "", e.hostname, u(e) ? "" : ":" + e.port, e.hostname && e.path && "/" !== e.path.substr(0, 1) ? "/" + e.path : e.path, e.query ? "?" + e.query : "", e.hash ? "#" + e.hash : ""].join("")
    }
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.open = window.open, t.chrome = window.chrome
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.LogInfo = t.LogWarn = t.LogError = t.LogFatal = t.reportError = void 0;
    var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        },
        o = r(45),
        i = u(r(46));

    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var a = t.reportError = function(e) {
        var t = e.error,
            r = e.level,
            n = e.fingerprint,
            i = void 0 === n ? [] : n,
            u = e.tags,
            a = void 0 === u ? {} : u,
            s = e.extraData,
            c = void 0 === s ? null : s,
            f = e.logger;
        c || (c = (0, o.getExtraErrorData)(t));
        window.Raven.captureException(t, {
            level: r,
            fingerprint: i,
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
        return a(n({
            level: "fatal",
            logger: i.default.error
        }, e))
    }, t.LogError = function(e) {
        return a(n({
            level: "error",
            logger: i.default.error
        }, e))
    }, t.LogWarn = function(e) {
        return a(n({
            level: "warning",
            logger: i.default.warn
        }, e))
    }, t.LogInfo = function(e) {
        return a(n({
            level: "info",
            logger: i.default.info
        }, e))
    }
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.localSet = t.localGet = t.syncSet = t.syncGet = t.callStorageMethodSafe = t.LOCAL_SET = t.LOCAL_GET = t.SYNC_SET = t.SYNC_GET = void 0;
    var n = r(31),
        o = r(32),
        i = r(33),
        u = t.SYNC_GET = "SYNC_GET",
        a = t.SYNC_SET = "SYNC_SET",
        s = t.LOCAL_GET = "LOCAL_GET",
        c = t.LOCAL_SET = "LOCAL_SET",
        f = t.callStorageMethodSafe = function(e) {
            for (var t, r, f, l, p = arguments.length, d = Array(p > 1 ? p - 1 : 0), h = 1; h < p; h++) d[h - 1] = arguments[h];
            try {
                switch (e) {
                    case u:
                        return (t = n.chrome.storage.sync).get.apply(t, d);
                    case a:
                        return (r = n.chrome.storage.sync).set.apply(r, d);
                    case s:
                        return (f = n.chrome.storage.local).get.apply(f, d);
                    case c:
                        return (l = n.chrome.storage.local).set.apply(l, d);
                    default:
                        return null
                }
            } catch (t) {
                if (!n.chrome.runtime) {
                    sessionStorage.runtimeError ? sessionStorage.runtimeError > i.RUNTIME_ERROR_THRESHOLD ? (0, o.LogWarn)({
                        error: t,
                        fingerprint: "SafeRuntime-SafeStorage: chrome.runtime is undefined"
                    }) : sessionStorage.runtimeError = parseInt(sessionStorage.runtimeError, 10) + 1 : sessionStorage.runtimeError = 1;
                    return null
                }(0, o.LogWarn)({
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
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return f.apply(void 0, [u].concat(t))
    }, t.syncSet = function() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return f.apply(void 0, [a].concat(t))
    }, t.localGet = function() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return f.apply(void 0, [s].concat(t))
    }, t.localSet = function() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return f.apply(void 0, [c].concat(t))
    }
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.eventPropertySchema = t.eventDefinitionSchema = t.trackerPropertiesSchema = t.trackerConfigSchema = t.clientDependenciesSchema = t.eventPropertyTypes = t.eventClasses = void 0;
    var n = i(r(49)),
        o = r(17);

    function i(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        t.default = e;
        return t
    }
    var u = t.eventClasses = ["activation", "creation", "error", "exposure", "funnel", "interaction", "none", "signup", "usage", "view", "warning"],
        a = t.eventPropertyTypes = ["boolean", "string", "number", "array"];
    t.clientDependenciesSchema = n.create("client dependency", o.configError, {
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
    }), t.trackerConfigSchema = n.create("config option", o.configError, {
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
    }), t.trackerPropertiesSchema = n.create("tracker properties", o.configError, {
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
    }, !1), t.eventDefinitionSchema = n.create("event property", o.configError, {
        name: {
            types: ["string"]
        },
        namespace: {
            types: ["string"],
            default: ""
        },
        class: {
            types: ["string"], oneOf: u
        },
        version: {
            types: ["string"],
            default: "v1"
        },
        properties: {
            types: ["object"],
            default: {}
        }
    }), t.eventPropertySchema = n.create("event property", o.configError, {
        type: {
            types: ["string", "array"],
            oneOf: a
        },
        isOptional: {
            types: ["boolean"],
            default: !1
        }
    })
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.DND_KEY = "sidekick:notifications:subscribed_desktop_global", t.SIDEKICK_ID_KEY = "sidekick:migration:userId", t.USER_REGISTRATION_KEY = "sidekick:clients:chrome:addin:version", t.TRACKED_EMAILS_KEY = "sales:clients:emailAddresses", t.NOTIFICATIONS_KEY = "sales:clients:displayedNotifications", t.DISMISSED_ALERTS_KEY = "sales:clients:chrome:sidebar:dismissedAlerts", t.DISMISSED_MODALS_KEY = "sales:clients:dismissedModals", t.CONTACT_CRM_ONBOARDING_KEY = "sales:clients:chrome:onboarding:contactCrm", t.FIRST_RUN_ONBOARDING_KEY = "sales:clients:chrome:onboarding:firstRun"
}, function(e, t, r) {
    e.exports = hubspot.requireSync("_")
}, , , function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1;
                    n.configurable = !0;
                    "value" in n && (n.writable = !0);
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                r && e(t.prototype, r);
                n && e(t, n);
                return t
            }
        }(),
        o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = a(r(2)),
        u = a(r(96));

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var c = function(e) {
            return "boolean" == typeof e || null != e && e.valueOf && "boolean" == typeof e.valueOf()
        },
        f = function(e) {
            return !!e && "object" === (void 0 === e ? "undefined" : o(e))
        },
        l = function() {
            function e(t, r, n) {
                s(this, e);
                if (!f(t) || t instanceof e)(n = n || {}).url = t;
                else if (t === window.location) {
                    (n = n || {}).protocol = t.protocol.slice(0, -1);
                    n.hostname = t.hostname;
                    n.pathname = t.pathname;
                    n.search = t.search;
                    n.hash = t.hash
                } else n = t;
                if (n.url instanceof e) {
                    this._cloneFrom(n.url);
                    this.upsertParams(n.params || {})
                } else {
                    n.protocol = n.protocol || window.location.protocol.slice(0, -1);
                    this._set(n, r)
                }
                this.update(r)
            }
            n(e, [{
                key: "_set",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = e.url || "",
                        n = r.indexOf("#");
                    t.hash || (this.hash = n >= 0 ? r.substr(n) : e.hash || "");
                    var o = (r = n >= 0 ? r.substr(0, n) : r).indexOf("?");
                    if (!t.params && !t.search) {
                        this.search = o >= 0 ? r.substr(o) : e.search || "";
                        this.upsertParams(e.params || {})
                    }(o = (r = o >= 0 ? r.substr(0, o) : r).indexOf("//")) > 0 && ":" != r[o - 1] && (o = -1);
                    t.protocol || (this.protocol = o > 0 ? r.substr(0, o - 1) : e.protocol);
                    var i = o < 0 ? 0 : o + 2,
                        u = r.indexOf("/", i);
                    void 0 === t.pathname && (this.pathname = (u < 0 ? "" : r.substr(u)) || e.pathname || "");
                    if (void 0 === t.hostname) {
                        var a = (u < 0 ? r.substr(i) : r.substr(i, u - i)) || e.hostname;
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
                        r = this.segments[0],
                        n = this._getProduction(t.production, r),
                        o = this._getLocal(t.local, r);
                    this._hostname = u.default.getDomain(e, n, o);
                    this._lb = this._hostname && e;
                    this._production = this._hostname && n;
                    this._local = this._hostname && o
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
                    this.encodedParamTuples.forEach(function(t, r) {
                        e.validParams = e.validParams && 2 == t.length;
                        var n = decodeURIComponent(t[0]);
                        e._paramIndex[n] ? e._paramIndex[n].push(r) : e._paramIndex[n] = [r]
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
                value: function(e, t, r) {
                    this.insertEncodedParamAt(e, encodeURIComponent(t), encodeURIComponent(r))
                }
            }, {
                key: "insertEncodedParamAt",
                value: function(e, t, r) {
                    this.encodedParamTuples.splice(e, 0, [t, r]);
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
                    var r = this,
                        n = this._paramIndex[e] || [];
                    n.length > 0 ? n.forEach(function(n) {
                        return r.updateParamAt(n, e, t)
                    }) : this.pushParam(e, t)
                }
            }, {
                key: "upsertParams",
                value: function(e) {
                    var t = this;
                    Object.keys(e).forEach(function(r) {
                        return t.upsertParam(r, e[r])
                    })
                }
            }, {
                key: "updateParamAt",
                value: function(e, t, r) {
                    this.updateEncodedParamAt(e, encodeURIComponent(t), encodeURIComponent(r))
                }
            }, {
                key: "updateEncodedParamAt",
                value: function(e, t, r) {
                    this.encodedParamTuples.splice(e, 1, [t, r]);
                    this._rebuildParamInfo()
                }
            }, {
                key: "removeParam",
                value: function(e) {
                    var t = this,
                        r = this._paramIndex[e] || [];
                    if (r.length > 0) {
                        r.reverse().forEach(function(e) {
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
                    Object.keys(e._paramIndex).forEach(function(r) {
                        t._paramIndex[r] = e._paramIndex[r].slice(0)
                    });
                    this._lonelyQMark = e._lonelyQMark;
                    return this
                }
            }, {
                key: "_getProduction",
                value: function(e, t) {
                    return c(e) ? e : c(this._production) ? this._production : "production" == i.default.get(t)
                }
            }, {
                key: "_getLocal",
                value: function(t, r) {
                    return c(t) ? t : c(this._local) ? this._local : !!r && ("local" == i.default.get(r) || e.localService(r))
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
                    var t = u.default.getLbInfo(e, this._lb);
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
                        this._hostname = u.default.getDomain(this._lb, this._production, this._local)
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
                        this._hostname = u.default.getDomain(this._lb, this._production, this._local)
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
                    Object.keys(this._paramIndex).forEach(function(r) {
                        return t[r] = e.paramValue(r)
                    });
                    return t
                },
                set: function(e) {
                    var t = this;
                    this.encodedParamTuples = [];
                    this._lonelyQMark = !1;
                    Object.keys(e).forEach(function(r) {
                        return t.encodedParamTuples.push([r, encodeURIComponent(e[r])])
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
    l.loaded = new l(window.location);
    t.default = l;
    e.exports = t.default
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = o(r(2));

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var i = function(e) {
            return "function" == typeof e
        },
        u = Object.getOwnPropertySymbols || function() {
            return []
        };
    t.default = function(e) {
        if (n.default.deployed("hub-http") || !Object.freeze) return e;
        Object.freeze(e);
        Object.getOwnPropertyNames(e).concat(u(e)).forEach(function(t) {
            i(e) && "caller" !== t && "callee" !== t && null != e[t] && !Object.isFrozen(e[t]) && Object.freeze(e[t])
        });
        return e
    };
    e.exports = t.default
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e(e, t) {
            var r = [],
                n = !0,
                o = !1,
                i = void 0;
            try {
                for (var u, a = e[Symbol.iterator](); !(n = (u = a.next()).done); n = !0) {
                    r.push(u.value);
                    if (t && r.length === t) break
                }
            } catch (e) {
                o = !0;
                i = e
            } finally {
                try {
                    !n && a.return && a.return()
                } finally {
                    if (o) throw i
                }
            }
            return r
        }
        return function(t, r) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, r);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }();

    function o(e, t) {
        return encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t)
    }

    function i(e, t) {
        return t.reduce(function(t, r) {
            null != r && t.push(o("" + e, r));
            return t
        }, []).join("&")
    }
    t.stringify = function(e) {
        return null == e ? "" : "string" == typeof e || e instanceof String ? e : Object.keys(e).reduce(function(t, r) {
            var n = e[r];
            Array.isArray(n) ? n.length > 0 && t.push(i(r, n)) : null != n && t.push(o(r, n));
            return t
        }, []).join("&")
    }, t.parse = function(e) {
        return null == e || "" === e.trim() ? {} : e.split("&").reduce(function(e, t) {
            var r = t.split("="),
                o = n(r, 2),
                i = o[0],
                u = o[1],
                a = i,
                s = decodeURIComponent(u);
            a.length > 2 && a.lastIndexOf("[]") === a.length - 2 && (a = a.substring(0, a.length - 2));
            var c = e[a];
            void 0 !== c ? Array.isArray(c) ? c.push(s) : e[a] = [c, s] : e[a] = s;
            return e
        }, {})
    }
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function(e) {
        return Object.assign({}, {
            method: "GET",
            timeout: 7e3,
            withCredentials: !0
        }, e)
    };
    t.default = n;
    e.exports = t.default
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.immutableResponse = t.immutableResponseWithReviver = void 0;
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        o = r(13),
        i = r(9),
        u = r(4),
        a = r(6),
        s = t.immutableResponseWithReviver = function(e) {
            var t = (0, u.onResponse)(function(t) {
                return (0, a.setIf)("object" === n(t.data), "data", (0, o.fromJS)(t.data, e))(t)
            });
            return (0, i.createStack)(u.jsonResponse, t)
        };
    t.immutableResponse = s()
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(4),
        o = r(5),
        i = r(33),
        u = "X-HubSpot-CSRF-hubspotapi";
    t.default = function(e) {
        return new Promise(function(t, r) {
            return (0, i.localGet)(u, function(i) {
                var a = (0, o.getLastError)(),
                    s = i[u];
                a && r(a);
                t(s ? (0, n.header)(u, s)(e) : e)
            })
        })
    };
    e.exports = t.default
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        o = 2e3,
        i = ["number", "description", "line", "column"];
    t.getExtraErrorData = function(e) {
        if (!e) return null;
        var t = Object.keys(e).filter(function(e) {
            return !i.includes(e)
        });
        return t.length ? t.reduce(function(t, r) {
            switch (n(e[r])) {
                case "boolean":
                case "number":
                    t[r] = e[r];
                    break;
                case "string":
                    var i = e[r].length > o ? "..." : "";
                    t[r] = "" + e[r].substr(0, o) + i;
                    break;
                case "function":
                    t[r] = "function() { /* Function removed */ }";
                    break;
                case "object":
                    null === e[r] ? t[r] = e[r] : t[r] = "/* Object, Error, or Array removed */"
            }
            return t
        }, {}) : null
    }
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1;
                n.configurable = !0;
                "value" in n && (n.writable = !0);
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, r, n) {
            r && e(t.prototype, r);
            n && e(t, n);
            return t
        }
    }();

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var i = function() {
        function e() {
            o(this, e);
            this._assignMethods()
        }
        n(e, [{
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
            value: function(t, r) {
                if (!this._shouldLog(t, r)) return function() {};
                var n = e.CONSOLE_FN[t] || e.CONSOLE_FN.log || function() {};
                return function() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    var o = new Array(t.length + 1);
                    o[0] = "[HubSpot Sales]";
                    for (var i = 0; i < t.length; i++) {
                        var u = t[i];
                        o[i + 1] = this._formatError(u)
                    }
                    return this._callLogFn(n, o)
                }.bind(this)
            }
        }, {
            key: "_callLogFn",
            value: function(t, r) {
                return t.apply(e.CONSOLE_FN, r)
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
    i.LEVELS = {
        log: 0,
        debug: 1,
        info: 2,
        warn: 3,
        error: 4
    };
    i.CONSOLE_FN = window.console || {};
    t.default = new i;
    e.exports = t.default
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.hasCooldownElapsed = t.setCooldown = void 0;
    var n = u(r(3)),
        o = r(5),
        i = r(33);

    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e, t, r) {
        t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r;
        return e
    }
    t.setCooldown = function(e) {
        return new n.default.Promise(function(t, r) {
            (0, i.syncSet)(a({}, e, Date.now()), function() {
                var e = (0, o.getLastError)();
                e ? r(new Error(e)) : t()
            })
        })
    }, t.hasCooldownElapsed = function(e, t) {
        return new n.default.Promise(function(r, n) {
            (0, i.syncGet)(e, function(i) {
                var u = (0, o.getLastError)();
                if (u) n(new Error(u));
                else if ("number" != typeof i[e]) r(!0);
                else {
                    var a = new Date(i[e]).getTime();
                    r(Date.now() > a + t)
                }
            })
        })
    }
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.WHERE_APP = "clients", t.CHROME = "chrome", t.GMAIL = "gmail", t.OUTLOOK_WEBAPP = "outlook-web-app", t.OUTLOOK_2010_PC = "outlook-2010-pc", t.OUTLOOK_2013_PC = "outlook-2013-pc", t.OUTLOOK_2016_PC = "outlook-2016-pc", t.OUTLOOK_2016_MAC = "outlook-2016-mac", t.CHROME_EXTENSION = "chrome-extension", t.OUTLOOK_365_CLIENT = "outlook-365", t.OUTLOOK_VSTO_CLIENT = "outlook-vsto", t.TRAY_APP_CLIENT = "tray-app", t.CLIENT_APP_INTERACTION = "client-app-interaction", t.APP_DROPDOWN_INTERACTION = "app-dropdown-interaction", t.EXTENSION_DROPDOWN_INTERACTION = "extension-dropdown-interaction", t.ONBOARDING_GUIDE_INTERACTION = "onboarding-guide-interaction", t.SALES_TOOLS_INTERACTION = "sales-tools-interaction", t.SIDEBAR_INTERACTION = "sidebar-interaction", t.PAGEVIEW = "pageview"
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.create = void 0;
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        o = r(11);
    t.create = function e(t, r, i) {
        var u = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            a = function() {
                return Object.keys(i)
            },
            s = function(e, u, s) {
                try {
                    a().forEach(function(a) {
                        var s = i[a],
                            c = s.types,
                            f = s.oneOf,
                            l = s.isOptional,
                            p = e[a],
                            d = void 0 !== p,
                            h = void 0 === p ? "undefined" : n(p);
                        (0, o.isArray)(p) && (h = "array");
                        if (!l || d) {
                            if (!d) throw r("Missing required " + t + ' "' + a + '". ' + u + " requires that a value be passed for " + t + ' "' + a + '". Received "undefined".');
                            if ("function" !== h && (0, o.isArray)(f) && -1 === f.indexOf(p)) throw r("Invalid " + t + ". " + u + ' requires that the "' + a + '" ' + t + ' be one of ["' + f.join('", "') + '"]. Received "' + p + '".');
                            if ((0, o.isArray)(c) && -1 === c.indexOf(h)) throw r("Invalid " + t + ". " + u + ' requires that the "' + a + '" ' + t + ' type be one of ["' + c.join('", "') + '"]. Received "' + h + '".')
                        }
                    })
                } catch (e) {
                    if (!s || "function" != typeof s) throw e;
                    s(e)
                }
            },
            c = function(e) {
                var t = (0, o.defaults)(e, (0, o.pluck)("default", i));
                return u ? (0, o.omit)(t, a(), !1) : t
            };
        return {
            getKeys: a,
            mutate: function(n) {
                var o = n(i);
                return e(t, r, o, u)
            },
            normalize: c,
            normalizeEach: function(e) {
                return Object.keys(e).reduce(function(t, r) {
                    var n = e[r];
                    t[r] = c(n);
                    return t
                }, {})
            },
            validate: s,
            validateEach: function(e, t, r) {
                try {
                    Object.keys(e).forEach(function(r) {
                        var n = e[r];
                        s(n, t)
                    })
                } catch (e) {
                    if (!r || "function" != typeof r) throw e;
                    r(e)
                }
            },
            _peek: function() {
                return i
            }
        }
    }
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.waitForChromeCookies = void 0;
    var n = s(r(3)),
        o = s(r(93)),
        i = s(r(0)),
        u = s(r(1)),
        a = r(94);

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var c = !1,
        f = 5,
        l = function e(t, r) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            i.default.log("Check for chrome cookie store context available");
            u.default.cookies.getAllCookieStores(function(u) {
                if (u.length) {
                    c = !0;
                    t()
                } else if (++n < f)(0, o.default)(1e3).then(function() {
                    return e(t, r, n)
                });
                else {
                    i.default.log("Chrome cookie store unavailable");
                    r("Unable to fetch chrome cookies");
                    (0, a.reloadIfNeeded)()
                }
            })
        };
    t.waitForChromeCookies = function() {
        return new n.default.Promise(function(e, t) {
            if (c) {
                i.default.log("Chrome cookie store available");
                e()
            } else l(e, t)
        })
    }
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.fetchUserPortalInfo = t.fetchUserInfo = void 0;
    var n = o(r(95));

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.fetchUserInfo = function() {
        return n.default.get("/login-verify/echo/user")
    }, t.fetchUserPortalInfo = function(e) {
        return n.default.get("login-verify/echo/with-gates", {
            query: {
                portalId: e
            }
        })
    }
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.setPortalIdThroughApi = t.fetchPortalId = void 0;
    var n = o(r(19));

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.fetchPortalId = function() {
        return n.default.get("users/v2/app/sidekick")
    }, t.setPortalIdThroughApi = function(e) {
        return n.default.put("users/v2/app/sidekick/" + e)
    }
}, , , function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.deleteAttribute = t.saveAttribute = t.fetchAttributes = void 0;
    var n = r(13),
        o = i(r(19));

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.fetchAttributes = function(e) {
        return o.default.put("/users/v1/app/attributes/temp-hubless/bulk-get", {
            data: {
                keys: e
            },
            ignoreRedirect: !0
        }).then(function(e) {
            return (0, n.Map)().withMutations(function(t) {
                return e.get("attributes").map(function(e) {
                    return t.set(e.get("key"), e.get("value"))
                })
            })
        })
    }, t.saveAttribute = function(e, t, r) {
        return o.default.post("/users/v1/app/attributes?portalId=" + e, {
            portalId: e,
            data: {
                hubId: e,
                key: t,
                value: r
            }
        })
    }, t.deleteAttribute = function(e, t, r) {
        return o.default.delete("/users/v1/app/attributes/" + t + "/" + encodeURIComponent(r) + "?portalId=" + e, {
            portalId: e
        })
    }
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = window.navigator;
    e.exports = t.default
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.userUngatedFor = t.fetchGates = void 0;
    var n = r(13),
        o = u(r(0)),
        i = r(51);

    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var a = (0, n.List)();
    t.fetchGates = function(e) {
        return (0, i.fetchUserPortalInfo)(e).then(function(e) {
            a = e.get("gates");
            o.default.log("User gates: ", a.toJS());
            return a
        }, function(e) {
            if (403 === e.status) throw e;
            o.default.error("Could not get gates for user");
            return a
        })
    }, t.userUngatedFor = function(e) {
        return a.contains(e)
    }
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(5);
    t.default = function() {
        return (0, n.getManifestVersion)()
    };
    e.exports = t.default
}, , function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.setNotFirstRun = t.isFirstRun = t.initFirstRunAndLoginTracker = void 0;
    var n = i(r(3)),
        o = i(r(1));

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var u = void 0;
    t.initFirstRunAndLoginTracker = function() {
        o.default.storage.sync.get("first_time", function(e) {
            u = null == e.first_time || e.first_time
        })
    }, t.isFirstRun = function() {
        return u
    }, t.setNotFirstRun = function() {
        return new n.default.Promise(function(e) {
            u = !1;
            o.default.storage.sync.set({
                first_time: !1
            }, e)
        })
    }
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(9),
        o = f(r(15)),
        i = c(r(4)),
        u = r(16),
        a = r(21),
        s = f(r(44));

    function c(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        t.default = e;
        return t
    }

    function f(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.default = (0, o.default)((0, n.createStack)(i.services, i.jsonBody, i.httpsOnly, a.hubapi, s.default, i.withQuery, u.rewriteUrl, i.validateStatus, i.jsonResponse));
    e.exports = t.default
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(9),
        o = c(r(15)),
        i = s(r(4)),
        u = r(16),
        a = r(21);

    function s(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        t.default = e;
        return t
    }

    function c(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.default = (0, o.default)((0, n.createStack)(i.services, i.jsonBody, i.httpsOnly, a.hubapi, i.withQuery, u.rewriteUrl, i.validateStatus, i.jsonResponse));
    e.exports = t.default
}, , , , function(e, t, r) {
    "use strict";
    (function(n) {
        "use es6";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        t.default = a;
        var i = u(r(2));

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a() {
            var e = window || n;
            if (("undefined" == typeof IS_STANDALONE || "boolean" == typeof IS_STANDALONE && !0 !== IS_STANDALONE) && e && e.hubspot) {
                var t = null !== e.hubspot.polyfills && "object" === o(e.hubspot.polyfills) && !0 === e.hubspot.polyfills.Symbol;
                if (!i.default.deployed("hub-http") && !t) {
                    var r = "Couldn't find HeadJS polyfills.\n\nMore information: https://product.hubteam.com/docs/frontend/docs/polyfills.html";
                    console.error(r)
                }
            }
        }
        e.exports = t.default
    }).call(t, r(67))
}, function(e, t) {
    var r;
    r = function() {
        return this
    }();
    try {
        r = r || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (r = window)
    }
    e.exports = r
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.trackFailureBasedOnErrorResponse = t.trackSuccess = t.withRetry = t.withTracking = t.requestIdKey = t.buildRequestError = t.buildErrorResponse = t.buildResponse = t.withResponseHandlers = t.getResponseHeaders = t.handleResponse = void 0;
    var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        },
        o = r(29),
        i = r(8),
        u = r(6),
        a = s(r(69));

    function s(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        t.default = e;
        return t
    }
    var c = t.handleResponse = function(e, t) {
            return t.reduce(function(e, t) {
                return t(e)
            }, e)
        },
        f = t.getResponseHeaders = function(e) {
            return (e.getAllResponseHeaders() || "").trim().split("\n").reduce(function(e, t) {
                var r = t.trim().split(":"),
                    n = r.shift().trim(),
                    o = r.join(":").trim();
                e[n] = o;
                return e
            }, {})
        },
        l = (t.withResponseHandlers = function(e, t) {
            e = (0, u.set)("options", t)(e);
            var r = (0, o.responseHandlers)(t);
            return r && r.length ? c(i.Promise.resolve(e), r) : i.Promise.resolve(e)
        }, function(e) {
            try {
                return 0 === e.getResponseHeader("content-type").indexOf("application/json") ? JSON.parse(e.responseText) : void 0
            } catch (e) {
                return
            }
        }),
        p = t.buildResponse = function(e) {
            return {
                status: e.status,
                statusText: e.statusText,
                data: "response" in e ? e.response : e.responseText,
                headers: f(e),
                xhr: e,
                responseText: e.responseText,
                responseJSON: l(e)
            }
        },
        d = (t.buildErrorResponse = function(e, t, r) {
            var n = p(e);
            return Object.assign(n, {
                statusText: n.statusText || t,
                responseJSON: l(e),
                errorMessage: t,
                errorCode: r
            })
        }, t.buildRequestError = function(e) {
            var t = void 0,
                r = "REQUEST ERROR";
            e instanceof Error ? t = e : ("string" == typeof e || e instanceof String) && (t = new Error(e));
            return Object.assign(t, {
                code: r,
                status: 0,
                statusText: t.message
            })
        }, t.requestIdKey = Symbol("requestId")),
        h = (t.withTracking = function(e) {
            if (!0 === e.doNotTrack) return e;
            var t = a.startTrackingRequest(e.url, "hub-http"),
                r = n({}, e);
            r[d] = t;
            return r
        }, t.withRetry = function e(t, r) {
            var u = t.retryAttempts || 0;
            return r(n({}, t, {
                retryAttempts: u
            })).catch(function(a) {
                if (a.retry && a.retry.exceededRetries) return i.Promise.reject((0, o.responseError)(a, "Request for " + a.options.method + " " + a.options.url + " failed with status code " + a.status + " after max retries exceeded (" + a.retry.maxRetries + "). " + (a.statusText || "")));
                if (a.retry) {
                    var s = a.retry.reason ? " Reason: " + a.retry.reason : "";
                    h(a, {
                        willBeRetried: !0,
                        retryReason: s,
                        retryAttempt: u + 1
                    });
                    console.log("Retrying. Retry attempt " + (u + 1) + " of " + a.retry.maxRetries + "." + s);
                    return new i.Promise(function(o) {
                        setTimeout(function() {
                            return o(e(n({}, t, {
                                retryAttempts: u + 1
                            }), r))
                        }, a.retry.delay)
                    })
                }
                return i.Promise.reject(a)
            })
        }, t.trackSuccess = function(e) {
            e.options && void 0 !== e.options[d] && a.finishTrackingRequest(e.options[d], e.options.url, "succeeded", {
                status: e.status,
                statusText: e.statusText
            });
            return e
        }, t.trackFailureBasedOnErrorResponse = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                r = t.willBeRetried,
                n = void 0 !== r && r,
                o = t.retryReason,
                i = t.retryAttempt;
            e.options && void 0 !== e.options[d] && ("ABORT" === e.errorCode ? a.finishTrackingRequest(e.options[d], e.options.url, "aborted", {
                status: e.status
            }) : "TIMEOUT" === e.errorCode ? a.finishTrackingRequest(e.options[d], e.options.url, "timedOut", {
                status: e.status
            }) : a.finishTrackingRequest(e.options[d], e.options.url, "failed", {
                status: e.status,
                statusText: e.statusText,
                willBeRetried: n,
                retryReason: o,
                retryAttempt: i
            }));
            return e
        })
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = window && window.performance && window.performance.timing && window.performance.timing.navigationStart,
        o = window && window.performance && window.performance.now,
        i = t.pageStartTimestamp = n ? window.performance.timing.navigationStart : (new Date).valueOf(),
        u = t.perfNow = o ? window.performance.now.bind(window.performance) : function() {
            return (new Date).valueOf() - i
        },
        a = 1;

    function s(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        if ("succeeded" === e || "timedOut" === e || "failed" === e || "aborted" === e) return !0;
        console && console.error && console.error("Invalid state passed " + (t ? "to " + t : "") + " (" + e + ")");
        return !1
    }

    function c(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        if ("pending" === e || s(e, t)) return !0;
        console && console.error && console.error("Invalid state passed " + (t ? "to " + t : "") + " (" + e + ")");
        return !1
    }
    var f = t.getHttpRequestStatsByState = function(e) {
            return c(e, "getHttpRequestStatsByState") && window.hubspot && window.hubspot._httpRequestStats && window.hubspot._httpRequestStats[e] ? Object.keys(window.hubspot._httpRequestStats[e]).map(function(t) {
                return window.hubspot._httpRequestStats[e][t]
            }) : []
        },
        l = t.getAllHttpRequestStats = function() {
            return f("pending").concat(f("succeeded"), f("timedOut"), f("failed"), f("aborted"))
        };
    if (window.hubspot) {
        window.hubspot.getAllHttpRequestStats || (window.hubspot.getAllHttpRequestStats = l);
        window.hubspot.getHttpRequestStatsByState || (window.hubspot.getHttpRequestStatsByState = f)
    }
    t.startTrackingRequest = function(e, t) {
        var r = a++;
        if (window.hubspot) {
            window.hubspot._httpRequestStats || (window.hubspot._httpRequestStats = {
                pending: {},
                succeeded: {},
                timedOut: {},
                failed: {},
                aborted: {}
            });
            window.hubspot._httpRequestStats.pending || (window.hubspot._httpRequestStats.pending = {});
            window.hubspot._httpRequestStats.pending[r] = {
                id: r,
                started: u(),
                state: "pending",
                url: e,
                via: t
            }
        }
        return r
    }, t.finishTrackingRequest = function(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "succeeded",
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (s(r, "finishTrackingRequest for " + t) && window.hubspot && window.hubspot._httpRequestStats && window.hubspot._httpRequestStats.pending) {
            var o = window.hubspot._httpRequestStats.pending[e];
            if (o) {
                delete window.hubspot._httpRequestStats.pending[e];
                o.finished = u();
                o.state = r;
                window.hubspot._httpRequestStats[r] || (window.hubspot._httpRequestStats[r] = {});
                window.hubspot._httpRequestStats[r][e] = o;
                Object.keys(n).forEach(function(e) {
                    null == o[e] && null != n[e] && (o[e] = n[e])
                })
            }
        }
    }
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.setHeader = t.getHeader = void 0;
    var n = r(6);
    t.getHeader = function(e, t) {
        var r = t.headers;
        if (r)
            for (var n in r)
                if (r.hasOwnProperty(n) && n.toLowerCase() === e.toLowerCase()) return r[n]
    }, t.setHeader = function(e, t, r) {
        var o = r.headers;
        for (var i in o)
            if (o.hasOwnProperty(i) && i.toLowerCase() === e.toLowerCase()) return (0, n.setIn)(["headers", i], t)(r);
        return (0, n.setIn)(["headers", e], t)(r)
    }
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.redirectTo = void 0;
    var n = function() {
            function e(e, t) {
                var r = [],
                    n = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var u, a = e[Symbol.iterator](); !(n = (u = a.next()).done); n = !0) {
                        r.push(u.value);
                        if (t && r.length === t) break
                    }
                } catch (e) {
                    o = !0;
                    i = e
                } finally {
                    try {
                        !n && a.return && a.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return r
            }
            return function(t, r) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, r);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        o = r(72),
        i = function() {};
    t.redirectTo = function(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i,
            u = "HUB-HTTP_IGNORE_REDIRECTS",
            a = function(e) {
                return e && "true" === e.toLowerCase()
            },
            s = [
                [function() {
                    return t.ignoreRedirect
                }, "ignoreRedirect option is set"],
                [function() {
                    return t.localStorage && a(t.localStorage.getItem(u))
                }, "local storage key " + u + ' is set to "true"'],
                [function() {
                    return (0, o.isSafeMode)(t)
                }, "safe mode is enabled"]
            ].find(function(e) {
                return (0, n(e, 1)[0])()
            });
        if (s) {
            console.log("[hub-http] Skipping redirect because " + s[1]);
            return !1
        }
        r(t);
        t.location.href = e;
        return !0
    }
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function(e) {
        return e && "true" === e.toLowerCase()
    };
    t.isSafeMode = function(e) {
        return e.safeMode || e.localStorage && n(e.localStorage.getItem("HUB-HTTP_SAFE_MODE"))
    }
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = "hapijs_options",
        o = function(e) {
            return n + ":" + e.portalId
        },
        i = {
            get: function(e) {
                var t = e.localStorage && e.localStorage.getItem(o(e));
                return t ? JSON.parse(t) : {}
            },
            set: function(e, t) {
                e.localStorage && e.localStorage.setItem(o(e), JSON.stringify(t))
            },
            clear: function(e) {
                e.localStorage && e.localStorage.removeItem(o(e))
            }
        };
    t.default = i;
    e.exports = t.default
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.reloadOnUnauthorized = void 0;
    var n = r(47),
        o = r(75),
        i = "sales-extension-401-reload",
        u = 72e5;
    t.reloadOnUnauthorized = function(e, t) {
        return function(r) {
            return (0, o.onUnauthorized)(function() {
                return (0, n.hasCooldownElapsed)(i, u).then(function(t) {
                    (0, n.setCooldown)(i);
                    return t && e()
                }).catch(t).done()
            })(r)
        }
    }
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.onUnauthorized = void 0;
    var n = o(r(4));

    function o(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        t.default = e;
        return t
    }
    t.onUnauthorized = function(e) {
        return function(t) {
            return n.onResponse(function(r) {
                t.ignoreRedirect || 401 !== r.status || e();
                return r
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
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.SignalsExtensionUsageTracker = void 0;
    var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1;
                    n.configurable = !0;
                    "value" in n && (n.writable = !0);
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                r && e(t.prototype, r);
                n && e(t, n);
                return t
            }
        }(),
        o = r(78);

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }(t.SignalsExtensionUsageTracker = function() {
        function e() {
            i(this, e)
        }
        n(e, null, [{
            key: "initAuthedTracker",
            value: function(e, t) {
                this._tracker ? this._tracker = this._tracker.clone({
                    properties: t
                }) : this._tracker = (0, o.getTrackingClient)().createTracker({
                    events: e,
                    properties: t
                })
            }
        }, {
            key: "initUnauthedTracker",
            value: function(e, t) {
                t.email = null;
                t.hubId = null;
                this._tracker = (0, o.getTrackingClient)().createTracker({
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
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getTrackingClient = void 0;
    var n = h(r(2)),
        o = h(r(79)),
        i = r(81),
        u = r(12),
        a = h(r(88)),
        s = d(r(89)),
        c = h(r(56)),
        f = r(92),
        l = r(18),
        p = r(7);

    function d(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        t.default = e;
        return t
    }

    function h(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var v = c.default && "function" == typeof c.default.sendBeacon,
        y = "https://app.hubspot" + ("qa" === n.default.getShort() ? "qa" : "") + ".com",
        _ = "/usage-logging/v1/log/hublytics-multi/no-auth",
        g = function(e) {
            return console.error(e)
        };
    t.getTrackingClient = function() {
        return (0, i.createClient)({
            getDebug: function() {
                return n.default.debug(u.debugKey)
            },
            getEmail: function() {
                return (0, l.getVerifiedEmail)()
            },
            getHubId: function() {
                return (0, p.getPortalId)()
            },
            getHstc: function() {
                return (0, f.getHstcCookie)()
            },
            getLang: function() {
                return c.default.language || c.default.userLanguage || void 0
            },
            getTempStorage: s.get,
            setTempStorage: s.set,
            reportError: g,
            send: function(e) {
                var t = e.events,
                    r = e.query,
                    n = e.isBeforeUnload,
                    i = _ + "?" + r,
                    u = t,
                    s = function() {
                        var e = o.default.post(i, {
                            data: u
                        }).catch(g);
                        e && "function" == typeof e.done && e.done()
                    };
                n && v ? (0, a.default)("" + y + i, u, s) : s()
            }
        })
    }
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(r(15)),
        o = i(r(80));

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.default = (0, n.default)(o.default);
    e.exports = t.default
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(9),
        o = a(r(4)),
        i = a(r(21)),
        u = a(r(16));

    function a(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        t.default = e;
        return t
    }
    t.default = (0, n.createStack)(o.services, i.defaults, u.allowTimeoutOverride, o.jsonBody, o.httpsOnly, i.hubapi, o.withQuery, u.rewriteUrl, o.reportOptionsError, i.retryOnError, o.validateStatus, o.jsonResponse);
    e.exports = t.default
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.createClient = void 0;
    var n = r(34),
        o = f(r(82)),
        i = f(r(83)),
        u = f(r(84)),
        a = f(r(85)),
        s = f(r(86)),
        c = f(r(87));

    function f(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        t.default = e;
        return t
    }
    t.createClient = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = n.clientDependenciesSchema.normalize(e);
        n.clientDependenciesSchema.validate(t, '"createClient"', function(e) {
            throw e
        });
        var r = t.clientName,
            f = t.getDebug,
            l = t.getEmail,
            p = t.getHubId,
            d = t.getHstc,
            h = t.getLang,
            v = t.getTempStorage,
            y = t.logMessage,
            _ = t.logError,
            g = t.reportError,
            m = t.send,
            b = t.setTempStorage,
            w = o.createEventPool({
                getTempStorage: v,
                setTempStorage: b
            }),
            E = function(e, t) {
                var r = e.identifiers,
                    n = e.isBeforeUnload,
                    o = void 0 !== n && n,
                    i = e.isExternalHost,
                    u = void 0 !== i && i,
                    a = !(!r.raw.email || !r.raw.hubId),
                    s = "clientSendTimestamp=" + Date.now();
                u && (s += "&dil=true");
                m({
                    events: t,
                    isBeforeUnload: o,
                    isAuthed: a,
                    query: s
                })
            },
            S = function(e) {
                var t = e.identifiers,
                    r = w.flush();
                r && r.length && E({
                    identifiers: t
                }, r)
            },
            O = function(e, t) {
                var r = e.identifiers;
                w.getIsInitialized() || w.initialize({
                    normalizeEvent: function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return i.normalizeIdentifiers.apply(i, [r].concat(t))
                    }
                });
                w.push(t);
                o.scheduleFlush(function() {
                    return S({
                        identifiers: r
                    })
                })
            },
            k = function(e) {
                var t = e.bypassPool,
                    r = e.isBeforeUnload,
                    n = e.isExternalHost,
                    o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                t || r ? E({
                    identifiers: o,
                    isBeforeUnload: r,
                    isExternalHost: n
                }, [i]) : O({
                    identifiers: o
                }, i)
            },
            I = function() {
                return s.getMetaProperties({
                    clientName: r,
                    getTempStorage: v,
                    setTempStorage: b
                })
            };
        return {
            createTracker: function() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return c.createLockedTracker.apply(c, [{
                    createIdentifiers: a.createIdentifiers,
                    createEventPayload: i.createEventPayload,
                    createDictionary: u.createDictionary,
                    dictionaryLookup: u.dictionaryLookup,
                    getMetaProperties: I,
                    getDebug: f,
                    getEmail: l,
                    getHubId: p,
                    getHstc: d,
                    getLang: h,
                    logError: _,
                    logMessage: y,
                    reportError: g,
                    sendToClient: k
                }].concat(t))
            }
        }
    }
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.createEventPool = t.createQueue = t.scheduleFlush = void 0;
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        o = r(11),
        i = r(12),
        u = Date.now(),
        a = 6e3,
        s = 2e3,
        c = JSON.stringify([]),
        f = !1,
        l = !1,
        p = function() {
            return Date.now() - u
        },
        d = function() {
            return !l && p() < a
        },
        h = function(e) {
            return e()
        },
        v = function() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            if (!f) {
                setTimeout(function() {
                    h.apply(void 0, t);
                    l = !0
                }, a - p());
                f = !0
            }
        },
        y = (0, o.debounce)(h, s),
        _ = (t.scheduleFlush = function() {
            d() ? v.apply(void 0, arguments) : y.apply(void 0, arguments)
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
            r = e.setTempStorage,
            u = !1,
            a = _();
        return {
            getIsInitialized: function() {
                return u
            },
            initialize: function(e) {
                var r = e.normalizeEvent;
                try {
                    var s = t(i.storageKey) || c,
                        f = JSON.parse(s);
                    f && (0, o.isArray)(f) && f.forEach(function(e) {
                        e && "object" === (void 0 === e ? "undefined" : n(e)) && a.enqueue(r(e))
                    });
                    u = !0
                } catch (e) {}
            },
            push: function(e) {
                try {
                    var n = t(i.storageKey) || c,
                        o = JSON.parse(n);
                    o.push(e);
                    r(i.storageKey, JSON.stringify(o))
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
                    r(i.storageKey, c)
                } catch (e) {}
                return e
            },
            peek: a.peek
        }
    }
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.createEventPayload = t.transformEventPayload = t.normalizeIdentifiers = t.applyIdentifiers = void 0;
    var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        },
        o = r(11),
        i = r(17),
        u = r(12);

    function a(e) {
        if (Array.isArray(e)) {
            for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
            return r
        }
        return Array.from(e)
    }

    function s(e, t) {
        var r = {};
        for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
        return r
    }
    var c = {
            what_event_subtype: "what_event_subtype",
            what_value: "what_value",
            what_value_str: "what_value_str",
            where_subscreen2: "where_subscreen2",
            subscreen2: "where_subscreen2"
        },
        f = Object.keys(c),
        l = ["email", "userId", "hubId", "hstc", "utk"],
        p = ["USER_ID", "EMAIL"],
        d = ["TEMP_ID", "VISITOR"],
        h = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            return "string" == typeof e && -1 !== t.indexOf(e.split(":")[0])
        },
        v = function(e, t, r) {
            var n = t || r;
            if (!n || "*" === n) throw (0, i.eventError)('Namespace not found for "' + e + '".');
            return n
        },
        y = t.applyIdentifiers = function(e, t) {
            !t.who_email && e.raw.email && (t.who_email = e.raw.email);
            !t.who_identifier && e.raw.userId && (t.who_identifier = e.raw.userId);
            t.who_identifier_v2 || (t.who_identifier_v2 = e.user);
            t.who_team_identifier || (t.who_team_identifier = e.team);
            t.utk || (t.utk = e.utk);
            return t
        },
        _ = (t.normalizeIdentifiers = function(e, t) {
            var r = h(e.user, p),
                n = h(t.who_identifier_v2, d),
                o = "[NOT YET SET, SHOULD GET SET PRIOR TO FLUSH]" === t.who_identifier_v2;
            (r && n || o) && (t.who_identifier_v2 = e.user);
            return y(e, t)
        }, t.transformEventPayload = function(e, t) {
            var r = t.namespace,
                i = t.lang,
                p = t.screen,
                d = t.subscreen,
                h = t.timestamp,
                y = t.screenWidth,
                _ = t.screenHeight,
                g = t.windowWidth,
                m = t.windowHeight,
                b = t.device_id,
                w = t.session_id,
                E = t.last_sequence_number,
                S = t.last_event_id,
                O = s(t, ["namespace", "lang", "screen", "subscreen", "timestamp", "screenWidth", "screenHeight", "windowWidth", "windowHeight", "device_id", "session_id", "last_sequence_number", "last_event_id"]),
                k = {
                    hublytics_account_id: u.accountId,
                    where_app: v(O.eventKey, e.namespace, r),
                    where_screen: p || "unknown",
                    where_subscreen: d || "",
                    when_timestamp: h,
                    device_id: b,
                    session_id: w,
                    event_id: S,
                    sequence_number: E,
                    language: i,
                    what_event: e.name,
                    what_event_class: e.class.toUpperCase(),
                    what_version: e.version,
                    library: {
                        name: "usage-tracker-js",
                        version: 1
                    },
                    what_extra_json: JSON.stringify(n({
                        screenWidth: y,
                        screenHeight: _,
                        windowWidth: g,
                        windowHeight: m,
                        locale: i
                    }, (0, o.omit)(O, [].concat(l, a(f)))))
                };
            f.forEach(function(e) {
                var r = t[e];
                "undefined" !== r && (k[c[e]] = r)
            });
            return k
        });
    t.createEventPayload = function(e, t, r) {
        var n = _(e, t);
        return y(r, n)
    }
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.createDictionary = t.dictionaryLookup = t.deriveEventPropertySchema = void 0;
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        o = r(11),
        i = s(r(49)),
        u = r(17),
        a = r(34);

    function s(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        t.default = e;
        return t
    }
    var c = function(e) {
            return Object.keys(e).reduce(function(t, r) {
                var n = e[r];
                n.properties = (0, o.mapObject)(n.properties, function(e, t) {
                    return "string" == typeof t || (0, o.isArray)(t) ? {
                        type: t
                    } : t
                });
                n.properties = a.eventPropertySchema.normalizeEach(n.properties);
                t[r] = n;
                return t
            }, {})
        },
        f = t.deriveEventPropertySchema = function(e) {
            var t = e.properties || {},
                r = Object.keys(t).reduce(function(e, r) {
                    var n = t[r],
                        i = n.type,
                        u = n.isOptional;
                    if (-1 !== a.eventPropertyTypes.indexOf(i)) e[r] = {
                        types: [i],
                        isOptional: u
                    };
                    else if (-1 !== i.indexOf("oneOf")) {
                        var s = (0, o.between)(i, "[", "]").split(",").map(function(e) {
                            return (0, o.trim)((0, o.trim)(e, '"'), "'")
                        });
                        e[r] = {
                            oneOf: s,
                            isOptional: u
                        }
                    } else(0, o.isArray)(i) && (e[r] = {
                        oneOf: i,
                        isOptional: u
                    });
                    return e
                }, {});
            return i.create("event property", u.eventError, r, !1)
        },
        l = function(e, t, r) {
            if (!e || "object" !== (void 0 === e ? "undefined" : n(e))) throw (0, u.eventError)('Invalid event key. The event definition for "' + t + '" is undefined. Check your events.yaml dictionary.');
            e && f(e).validate(r, 'Event "' + t + '"')
        };
    t.dictionaryLookup = function(e, t, r) {
        var n = e[t];
        l(n, t, r);
        return n
    }, t.createDictionary = function(e, t) {
        var r = a.eventDefinitionSchema.normalizeEach(e);
        a.eventDefinitionSchema.validateEach(r, t);
        return c(r)
    }
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.createIdentifiers = void 0;
    var n = r(12),
        o = r(17),
        i = function(e, t) {
            var r = e.utk,
                i = e.email,
                u = e.hubId,
                a = t.allowUnauthed,
                s = t.isExternalHost,
                c = void 0,
                f = void 0,
                l = void 0;
            u && (l = u);
            i ? f = "EMAIL:::" + i + ":::" + n.accountId : r && (c = s ? "TEMP_ID:::" + r + ":::" + n.accountId : "VISITOR:::" + r + ":::" + n.accountId);
            if (!c && !f) throw (0, o.eventError)("Could not identify user. Please specify either an email address or __hstc cookie identifer.");
            if (!a) {
                if (!f) throw (0, o.eventError)("Could not identify user. Please specify an email address.");
                if (!l) throw (0, o.eventError)("Could not identify hub. Please specify a hubId.")
            }
            return {
                user: f || c,
                team: l
            }
        },
        u = function(e) {
            var t = void 0;
            if (e) {
                var r = e.split(".");
                r.length > 1 && (t = r[1])
            }
            return t
        };
    t.createIdentifiers = function(e, t) {
        var r = e.email,
            n = e.userId,
            o = e.hubId,
            a = e.hstc,
            s = t.allowUnauthed,
            c = t.isExternalHost,
            f = u(a),
            l = i({
                utk: f,
                email: r,
                hubId: o
            }, {
                allowUnauthed: s,
                isExternalHost: c
            });
        return {
            user: l.user,
            team: l.team,
            utk: f,
            raw: {
                email: r,
                userId: n,
                hubId: o,
                hstc: a
            }
        }
    }
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getMetaProperties = t.getStaticMetaProperties = t.getDynamicMetaProperties = t.refreshHamplitudeProperties = void 0;
    var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        },
        o = r(11),
        i = r(12);

    function u(e, t) {
        var r = {};
        for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
        return r
    }
    var a = 18e5,
        s = [{
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
        f = function(e) {
            return {
                device_id: (0, o.makeUuid)(),
                last_event_id: 0,
                last_sequence_number: 0,
                last_timestamp_checked_against_session: e,
                session_id: e
            }
        },
        l = function(e, t) {
            var r = c;
            r || (r = (r = e(i.hamplitudeKey)) ? JSON.parse(r) : f(t));
            return r
        },
        p = function(e, t) {
            c = t;
            e(i.hamplitudeKey, JSON.stringify(t))
        },
        d = t.refreshHamplitudeProperties = function(e, t) {
            var r = e.last_event_id,
                o = e.last_sequence_number,
                i = e.session_id,
                s = e.last_timestamp_checked_against_session,
                c = u(e, ["last_event_id", "last_sequence_number", "session_id", "last_timestamp_checked_against_session"]),
                f = n({}, c);
            if (t - s > a) {
                f.last_event_id = 0;
                f.session_id = t
            } else {
                f.session_id = i;
                f.last_timestamp_checked_against_session = t
            }
            f.last_event_id = r + 1;
            f.last_sequence_number = o + 1;
            return f
        },
        h = function(e, t, r) {
            var n = d(l(e, r), r);
            p(t, n);
            return n
        },
        v = function(e) {
            var t = "unknown";
            try {
                s.forEach(function(r) {
                    var n = r.name;
                    r.pattern.test(e) && (t = n)
                })
            } catch (e) {}
            return t.toLowerCase()
        },
        y = t.getDynamicMetaProperties = function(e) {
            var t = e.getTempStorage,
                r = e.setTempStorage,
                i = Date.now(),
                u = h(t, r, i),
                a = n({}, u, {
                    timestamp: i,
                    currentPageUrl: "",
                    currentPageUrlCleaned: ""
                });
            if (window && window.location) {
                a.currentPageUrl = window.location.href;
                a.currentPageUrlCleaned = (0, o.cleanUrl)(a.currentPageUrl)
            }
            return a
        },
        _ = t.getStaticMetaProperties = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments[1],
                r = {
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
                r.windowWidth = window.innerWidth;
                r.windowHeight = window.innerHeight
            }
            navigator && "string" == typeof navigator.appVersion && (r.howOsDetailed = v((0, o.between)(navigator.appVersion, "(", ")")));
            if (e && e.width && e.height) {
                r.screenWidth = e.width;
                r.screenHeight = e.height;
                e.width > 1024 ? r.screenSize = "large (> 1024)" : e.width > 680 ? r.screenSize = "medium (680 - 1024)" : r.screenSize = "small (< 680)"
            }
            if (document) {
                r.lastPageUrl = document.referrer;
                r.lastPageUrlCleaned = (0, o.cleanUrl)(r.lastPageUrl)
            }
            return r
        },
        g = (0, o.once)(_);
    t.getMetaProperties = function(e) {
        var t = e.clientName,
            r = e.getTempStorage,
            o = e.setTempStorage;
        return n({}, g(screen, t), y({
            getTempStorage: r,
            setTempStorage: o
        }))
    }
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.createLockedTracker = void 0;
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        o = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        },
        i = r(17),
        u = r(11),
        a = r(34),
        s = ["eventKey", "namespace", "lang", "email", "userId", "hubId", "hstc"],
        c = function(e, t, r) {
            var n = e.events,
                o = e.logError,
                i = e.onError,
                u = e.dictionaryLookup;
            try {
                return u(n, t, r)
            } catch (e) {
                o(e);
                i(e);
                return null
            }
        },
        f = function(e, t) {
            var r = e.createIdentifiers,
                n = e.allowUnauthed,
                o = e.isExternalHost,
                i = e.logError,
                u = e.onError,
                a = t.email,
                s = t.userId,
                c = t.hubId,
                f = t.hstc;
            try {
                return r({
                    email: a,
                    userId: s,
                    hubId: c,
                    hstc: f
                }, {
                    allowUnauthed: n,
                    isExternalHost: o
                })
            } catch (e) {
                i(e);
                u(e);
                return null
            }
        },
        l = function(e, t, r, n) {
            var o = e.createEventPayload,
                i = e.logError,
                u = e.onError;
            try {
                return o(t, n, r)
            } catch (e) {
                i(e);
                u(e);
                return null
            }
        },
        p = function(e, t, r, n) {
            var o = e.logMessage;
            o((0, i.debugLog)("event tracked", {
                eventKey: '"' + t + '"',
                eventName: n.what_event,
                eventNamespace: n.where_app,
                eventProperties: (0, u.omit)(r, s)
            }));
            var a = JSON.parse(JSON.stringify(n));
            a.what_extra_json = JSON.parse(a.what_extra_json);
            o(a)
        },
        d = function(e, t, r) {
            var n = c(e, t, r),
                o = f(e, r);
            if (!n || !o) return !1;
            var i = l(e, n, o, r);
            if (!i) return !1;
            if ("function" == typeof e.debug ? e.debug() : e.debug) try {
                p(e, t, r, i)
            } catch (e) {}
            e.sendToClient(e, o, i);
            return !0
        },
        h = function(e, t, r, n) {
            return (0, u.defaults)((0, u.defaults)(o({
                eventKey: e
            }, t), (0, u.shallowCopy)(r)), (0, u.shallowCopy)(n))
        },
        v = function(e, t) {
            if (!t || "object" !== (void 0 === t ? "undefined" : n(t))) throw (0, i.configError)('Invalid argument. The "createTracker" function requires to be passed a config argument of type "object". Received type "' + (void 0 === t ? "undefined" : n(t)) + '".');
            var r = a.trackerConfigSchema.mutate(function(t) {
                    t.debug.default = e.getDebug;
                    t.onError.default = e.reportError;
                    return t
                }),
                s = a.trackerPropertiesSchema.mutate(function(t) {
                    t.email.default = e.getEmail;
                    t.hubId.default = e.getHubId;
                    t.hstc.default = e.getHstc;
                    t.lang.default = e.getLang;
                    return t
                }),
                c = r.normalize(t);
            r.validate(c, '"createTracker"');
            var f = s.normalize(c.properties);
            s.validate(f, '"createTracker"');
            var l = e.createDictionary(c.events, '"createTracker"');
            return o({
                events: l,
                properties: f
            }, (0, u.omit)(c, ["events", "properties"]), e)
        };
    t.createLockedTracker = function e(t) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            s = v(t, r),
            c = {},
            f = o({}, s.properties),
            l = !0,
            p = function(e) {
                s.lastKnownEventProperties && s.lastKnownEventProperties.length && s.lastKnownEventProperties.forEach(function(t) {
                    var r = e[t];
                    void 0 !== r ? c[t] = r : r = c[t];
                    r && r !== f[t] && (f[t] = r)
                })
            };
        return {
            clone: function() {
                var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (!r || "object" !== (void 0 === r ? "undefined" : n(r))) throw (0, i.genericError)('Invalid argument. The "clone" method requires to be passed a valid tracker config of type "object". Received type "' + (void 0 === r ? "undefined" : n(r)) + '".');
                var o = (0, u.omit)((0, u.defaults)(r, s), Object.keys(t)),
                    c = (0, u.omit)(f, a.trackerPropertiesSchema.getKeys(), !1),
                    l = (0, u.omit)(f, Object.keys(c));
                o.properties = (0, u.defaults)(r.properties || {}, c);
                s.preserveTrackerProperties && (o.properties = (0, u.defaults)(o.properties, l));
                return e(t, o)
            },
            config: o({}, (0, u.omit)(s, ["properties"]), {
                properties: f
            }),
            setProperties: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (!e || "object" !== (void 0 === e ? "undefined" : n(e))) throw (0, i.genericError)('Invalid argument. The "setProperties" method requires to be passed a properties argument of type "object". Received type "' + (void 0 === e ? "undefined" : n(e)) + '".');
                Object.keys(e).forEach(function(t) {
                    var r = e[t];
                    f[t] = r
                });
                l = !0
            },
            track: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (!e || "string" != typeof e) throw (0, i.genericError)('Invalid argument. The "track" method requires to be passed an eventKey of type "string". Received type "' + (void 0 === e ? "undefined" : n(e)) + '".');
                if (!t || "object" !== (void 0 === t ? "undefined" : n(t))) throw (0, i.genericError)('Invalid argument. The "track" method requires the 2nd arg to be passed eventProperties of type "object". Received type "' + (void 0 === t ? "undefined" : n(t)) + '".');
                var r = s.getMetaProperties(),
                    o = h(e, t, f, r);
                p(o);
                l ? (0, u.resolveAsyncProperties)(f, s.onError, function(n) {
                    f = (0, u.defaults)(n, f);
                    l = !1;
                    d(s, e, h(e, t, f, r))
                }) : d(s, e, o)
            }
        }
    }
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = function(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {},
            n = void 0;
        try {
            n = navigator.sendBeacon(e, new Blob([JSON.stringify(t)], {
                type: "text/plain"
            }))
        } catch (e) {
            n = !1
        }
        n || "function" != typeof r || r();
        return n
    };
    e.exports = t.default
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.set = t.get = void 0;
    var n = o(r(90));

    function o(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        t.default = e;
        return t
    }
    var i = !1;
    try {
        i = window && window.localStorage
    } catch (e) {}
    t.get = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = "";
        if (i) try {
            t = window.localStorage[e] || ""
        } catch (r) {
            t = n.get(e)
        }
        return t
    }, t.set = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        if (i) try {
            window.localStorage[e] = t || ""
        } catch (r) {
            n.set(e, t)
        }
        return t
    }
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.set = t.get = void 0;
    var n = r(91);
    t.get = function(e) {
        return (0, n.getCookie)(e, document.cookie)
    }, t.set = function(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5184e6,
            n = new Date,
            o = new Date(n.setTime(n.getTime() + r)).toUTCString();
        document.cookie = e + "=" + t + ";expires=" + o + ";path=/"
    }
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getCookie = function(e, t) {
        var r = ("; " + t).split(";");
        if (r.length)
            for (var n = 0; n < r.length; n++) {
                var o = r[n].split("=");
                if (2 === o.length && o[0].trim() === e) return o[1]
            }
        return null
    }
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getHstcCookie = void 0;
    var n = c(r(3)),
        o = c(r(1)),
        i = r(12),
        u = c(r(0)),
        a = r(50),
        s = r(5);

    function c(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.getHstcCookie = function() {
        return new n.default.Promise(function(e, t) {
            return (0, a.waitForChromeCookies)().then(function() {
                return o.default.cookies.get({
                    url: "https://hubspot.com",
                    name: i.hstcKey
                }, function(r) {
                    var n = null != r ? r.value : void 0;
                    if (n) return e(n);
                    var o = null,
                        a = (0, s.getLastError)();
                    o = a ? "getHstcCookie: Unable to get hstc cookie: " + a.message : "getHstcCookie: unable to get hstc cookie";
                    u.default.log(o);
                    return t(new Error("Error: Couldn't find " + i.hstcKey + " cookie"))
                })
            })
        })
    }
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = o(r(3));

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e, t) {
        if (void 0 === t) {
            t = e;
            e = void 0
        }
        return new n.default.Promise(function(r) {
            setTimeout(function() {
                r(e)
            }, t)
        })
    }
    t.default = i;
    e.exports = t.default
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.reloadIfNeeded = void 0;
    var n = u(r(24)),
        o = r(47),
        i = r(10);

    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var a = "sales-extension_last-reload",
        s = 216e5,
        c = function() {
            (0, o.setCooldown)(a);
            (0, i.restartExtension)()
        };
    t.reloadIfNeeded = async function() {
        try {
            await (0, o.hasCooldownElapsed)(a, s) && c()
        } catch (e) {
            n.default.captureException(e && e.message || e)
        }
    }
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(9),
        o = f(r(15)),
        i = c(r(4)),
        u = r(16),
        a = f(r(42)),
        s = r(43);

    function c(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        t.default = e;
        return t
    }

    function f(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.default = (0, o.default)((0, n.createStack)(i.services, a.default, i.jsonBody, i.httpsOnly, i.environmentUrl(i.standardApi("app", "hubspot")), i.withQuery, u.rewriteUrl, i.validateStatus, s.immutableResponse));
    e.exports = t.default
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n, o = function() {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1;
                n.configurable = !0;
                "value" in n && (n.writable = !0);
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, r, n) {
            r && e(t.prototype, r);
            n && e(t, n);
            return t
        }
    }();

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function u(e, t, r) {
        t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r;
        return e
    }
    var a = {
            hubapi: ["api", "email", "etsu", "feedback", "internal", "onboarding", "nav", "private", "users", "zorse"],
            hubspot: ["app", "developers", "cms2", "cta", "forms", "library", "login", "marketplace", "onboarding", "payment", "services", "signup", "sites", "spitfire", "uploads"],
            hubteam: ["graph", "mesos", "rodan2", "tools", "bootstrap", "test"]
        },
        s = ["sidekick", "sidekickapp", "leadin", "hs-sites", "mktg-grader", "inbound", "signals", "private-hubteam", "app-api"],
        c = {
            hubapi: "api",
            hubspot: "app",
            hubteam: "tools"
        },
        f = (u(n = {
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
        }), u(n, "mktg-grader", {
            true: {
                true: "local.grader.com",
                false: "marketing.grader.com"
            },
            false: {
                true: "local.graderqa.com",
                false: "marketing.graderqa.com"
            }
        }), u(n, "inbound", {
            true: {
                true: "local.inbound.org",
                false: "inbound.org"
            },
            false: {
                true: "local.dev.inbound.org",
                false: "dev.inbound.org"
            }
        }), u(n, "signals", {
            true: {
                true: "local.getsignals.com",
                false: "api.getsignals.com"
            },
            false: {
                true: "local.getsignalsqa.com",
                false: "api.getsignalsqa.com"
            }
        }), u(n, "private-hubteam", {
            true: {
                true: "local.hubteam.com",
                false: "private.hubteam.com"
            },
            false: {
                true: "local.hubteamqa.com",
                false: "private.hubteamqa.com"
            }
        }), u(n, "app-api", {
            true: {
                true: "local.hubspot.com",
                false: "api.hubspot.com"
            },
            false: {
                true: "local.hubspotqa.com",
                false: "api.hubspotqa.com"
            }
        }), n),
        l = new(function() {
            function e() {
                i(this, e);
                this.lbDomainMap = e._buildLbDomainMap();
                this.domainLbMap = e._buildDomainLbMap(this.lbDomainMap)
            }
            o(e, [{
                key: "getDomain",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        n = this.lbDomainMap[e];
                    if (n) return n[t][r]
                }
            }, {
                key: "getLbInfo",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                        r = this.domainLbMap[e];
                    if (r) {
                        var n = r.defaultLb;
                        t && r.multiple && r.lbs[t] && (n = t);
                        return {
                            lb: n,
                            production: r.production,
                            local: r.local
                        }
                    }
                }
            }, {
                key: "getLb",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                        r = this.getLbInfo(e, t);
                    if (r) return r.lb
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
                        return a[t].forEach(function(r) {
                            return e[r] = {
                                true: {
                                    true: "local." + t + ".com",
                                    false: r + "." + t + ".com"
                                },
                                false: {
                                    true: "local." + t + "qa.com",
                                    false: r + "." + t + "qa.com"
                                }
                            }
                        })
                    });
                    s.forEach(function(t) {
                        return e[t] = f[t]
                    });
                    return e
                }
            }, {
                key: "_buildDomainLbMap",
                value: function(e) {
                    var t = {};
                    Object.keys(e).forEach(function(r) {
                        return [!0, !1].forEach(function(n) {
                            return [!0, !1].forEach(function(o) {
                                var i = e[r][n][o],
                                    a = t[i];
                                if (a) {
                                    a.lbs[r] = !0;
                                    a.multiple = !0
                                } else t[i] = {
                                    defaultLb: r,
                                    lbs: u({}, r, !0),
                                    production: n,
                                    local: o
                                }
                            })
                        })
                    });
                    Object.keys(c).forEach(function(e) {
                        var r = c[e];
                        t["local." + e + "qa.com"].defaultLb = r;
                        t["local." + e + ".com"].defaultLb = r
                    });
                    return t
                }
            }]);
            return e
        }());
    l.STANDARD_LBS = a;
    l.NONSTANDARD_LBS = s;
    t.default = l;
    e.exports = t.default
}, , , function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = /^(?:coolrobot@hubspot.com|.*@setup.hubspot(?:qa)?.com)$/,
        o = t.emailFromActivity = function(e) {
            return e && e.source && e.source.email
        },
        i = t.isOnboardingTestEmail = function(e) {
            return !!e && n.test(e)
        };
    t.isActivityFromOnboarding = function(e) {
        return i(o(e))
    }
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.RequestBlocker = void 0;
    var n = function() {
            function e(e, t) {
                var r = [],
                    n = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var u, a = e[Symbol.iterator](); !(n = (u = a.next()).done); n = !0) {
                        r.push(u.value);
                        if (t && r.length === t) break
                    }
                } catch (e) {
                    o = !0;
                    i = e
                } finally {
                    try {
                        !n && a.return && a.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return r
            }
            return function(t, r) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, r);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        o = p(r(0)),
        i = l(r(18)),
        u = r(101),
        a = p(r(1)),
        s = r(22),
        c = r(23),
        f = r(102);

    function l(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        t.default = e;
        return t
    }

    function p(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function d(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var h = t.RequestBlocker = function e() {
        var t = this;
        d(this, e);
        this.blockedGoogleUrlCache = [];
        this.handleOwnTrackerRequest = function(t, r, n) {
            switch (t) {
                case e.TRACKER_TYPES.OPEN:
                    return e.BLOCKING_RESPONSES.block;
                case e.TRACKER_TYPES.CLICK:
                    return {
                        redirectUrl: r = n === e.LINK_TRACKER_TYPES.BASE_54_ENCODED ? (0, f.decodeBase54)(r) : decodeURIComponent(r)
                    };
                default:
                    return e.BLOCKING_RESPONSES.block
            }
        };
        this.insertIntoCache = function(e) {
            var r = t.blockedGoogleUrlCache.findIndex(function(t) {
                return t === e
            });
            if (r < 0) t.blockedGoogleUrlCache.push(e);
            else {
                var n = t.blockedGoogleUrlCache.splice(r, 1).pop();
                t.blockedGoogleUrlCache.push(n)
            }
        };
        this.handleTrackerRequest = function(r, o, i, a, s, c) {
            var f = o.match(u.GOOGLE_CONTENT_PROXY),
                l = +a === i,
                p = o.split("#"),
                d = n(p, 2),
                h = d[0],
                v = d[1];
            if (l) {
                f && t.insertIntoCache(h);
                return t.handleOwnTrackerRequest(r, s, c)
            }
            return f ? {
                redirectUrl: decodeURIComponent(v)
            } : e.BLOCKING_RESPONSES.allow
        };
        this.clearCacheIfNecessary = function() {
            if (t.blockedGoogleUrlCache.length > e.CACHE_MAX_SIZE) {
                t.blockedGoogleUrlCache = t.blockedGoogleUrlCache.slice(e.CACHE_MAX_SIZE / 2);
                c.UsageTracker.track(s.CLIENT_APP_INTERACTION, {
                    action: s.CLEAR_BLOCKED_URL_CACHE
                })
            }
        };
        this.blockRequest = function(r) {
            var o = r.url;
            t.clearCacheIfNecessary();
            var a = i.getSidekickId(),
                s = o.match(u.EVENT_TRACKER_SECONDARY_ID),
                c = o.match(u.EVENT_TRACKER_TARGET),
                f = o.split("#"),
                l = n(f, 1)[0];
            if (s && !c) {
                var p = n(s, 2)[1];
                return t.handleTrackerRequest(e.TRACKER_TYPES.OPEN, o, a, p)
            }
            if (s && c) {
                var d = n(s, 2)[1],
                    h = n(c, 3),
                    v = h[1],
                    y = h[2];
                return t.handleTrackerRequest(e.TRACKER_TYPES.CLICK, o, a, d, y, v)
            }
            return t.blockedGoogleUrlCache.includes(l) ? e.BLOCKING_RESPONSES.block : e.BLOCKING_RESPONSES.allow
        };
        this.startBlocking = function() {
            o.default.log("Start blocking self-opens");
            a.default.webRequest.onBeforeRequest.hasListener(t.blockRequest) && a.default.webRequest.onBeforeRequest.removeListener(t.blockRequest);
            return a.default.webRequest.onBeforeRequest.addListener(t.blockRequest, {
                urls: e.urls
            }, ["blocking"])
        }
    };
    h.BLOCKING_RESPONSES = {
        allow: {
            cancel: !1
        },
        block: {
            cancel: !0
        }
    };
    h.TRACKER_TYPES = {
        OPEN: "open",
        CLICK: "click"
    };
    h.urls = ["*://*.googleusercontent.com/proxy/*", "*://*/e1t/o/*", "*://*/e1t/c/*", "*://*/e2t/o/*", "*://*/e2t/c/*", "*://*/s1t/c/*", "*://*/s1t/o/*", "*://*/s2t/c/*", "*://*/s2t/o/*"];
    h.LINK_TRACKER_TYPES = {
        URI_ENCODED: "t",
        BASE_54_ENCODED: "te"
    };
    h.CACHE_MAX_SIZE = 1e3
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = new RegExp(".*/(?:s|e)[1-9]t/[oc]/.*?.*(?:si=([0-9a-z]+).*&(?:amp;)?pi=[0-9a-z-]+|pi=[0-9a-z-]+.*&(?:amp;)?si=([0-9a-z]+))", "i"),
        o = new RegExp(".*/(?:s|e)[1-9]t/[oc]/.*?.*(?:si=[0-9a-z]+.*&(?:amp;)?pi=([0-9a-z-]+)|pi=([0-9a-z-]+).*&(?:amp;)?si=[0-9a-z]+)", "i"),
        i = new RegExp(".*/(?:s|e)[1-9]t/[oc]/.*?.*(te?)=([^&]*)", "i"),
        u = new RegExp("://[0-9a-z]+.googleusercontent.com/proxy/", "i");
    t.default = {
        EVENT_TRACKER_SECONDARY_ID: n,
        EVENT_TRACKER_PRIMARY_ID: o,
        EVENT_TRACKER_TARGET: i,
        GOOGLE_CONTENT_PROXY: u
    };
    e.exports = t.default
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    };

    function o(e, t, r) {
        t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r;
        return e
    }
    var i = "0123456789bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ-_",
        u = [1, 54, 2916, 157464, 8503056, 459165024],
        a = Array.from(i).reduce(function(e, t, r) {
            return n({}, e, o({}, t, r))
        }, {}),
        s = function(e) {
            for (var t = "", r = e.length - 1; r >= 0; r--) t += e.charAt(r);
            return t
        },
        c = function() {
            var e = void 0;
            (function() {
                e = i.split("").map(function(e) {
                    return e.charCodeAt(0)
                })
            })();
            return function(t) {
                var r = "",
                    n = 54;
                do {
                    r += String.fromCharCode(e[t % n]);
                    t = Math.floor(t / n)
                } while (t > 0);
                return s(r)
            }
        }(),
        f = function(e) {
            return new Promise(function(t, r) {
                var n = new Blob([e]),
                    o = new FileReader;
                o.onload = function() {
                    t(o.result)
                };
                o.onerror = function() {
                    o.abort();
                    r(new Error("Error Generating Array buffer"))
                };
                o.readAsArrayBuffer(n)
            })
        },
        l = function(e) {
            for (var t = [], r = 0; r < e.length; r++) {
                var n = e.charCodeAt(r);
                if (n < 128) t.push(n);
                else if (n < 2048) t.push(192 | n >> 6, 128 | 63 & n);
                else if (n < 55296 || n >= 57344) t.push(224 | n >> 12, 128 | n >> 6 & 63, 128 | 63 & n);
                else {
                    r++;
                    n = 65536 + ((1023 & n) << 10 | 1023 & e.charCodeAt(r));
                    t.push(240 | n >> 18, 128 | n >> 12 & 63, 128 | n >> 6 & 63, 128 | 63 & n)
                }
            }
            return new Uint8Array(t).buffer
        },
        p = function(e, t) {
            return e + 7 * t
        },
        d = function(e) {
            return {
                lowerSize: e % 7,
                upperSize: Math.floor(e / 7)
            }
        },
        h = function(e, t, r, n) {
            var o = {
                    int: "",
                    padding: 0,
                    offset: 0
                },
                i = e.byteLength - t;
            if (i < 4) {
                r = 4 - i;
                var u = new ArrayBuffer(4),
                    a = new DataView(u);
                a.setUint32(0, 0);
                for (var s = 3; s >= r; --s) a.setUint8(s, e.getUint8(t++));
                n = a.getUint32(0, !1)
            } else {
                r = 0;
                n = e.getUint32(t, !1);
                t += 4
            }
            o.int = n;
            o.padding = r;
            o.offset = t;
            return o
        },
        v = function(e) {
            for (var t = new DataView(e), r = 0, n = 0, o = ""; n < t.byteLength;) {
                var i = h(t, n, r, ""),
                    u = c(i.int);
                r = i.padding;
                n = i.offset;
                var a = "";
                if (0 === r) {
                    var s = h(t, n, r, "");
                    a = c(s.int);
                    n = s.offset;
                    r = s.padding
                }
                var f = p(u.length, a.length);
                o += "" + c(f) + u + a
            }
            return "" + o + c(r)
        },
        y = (t.encodeToBase54 = function(e) {
            return f(e).then(function(e) {
                return v(e)
            })
        }, function(e) {
            var t = e.length;
            if (t - 1 >= u.length) throw new Error("Input too large to decode to integer without overflow");
            for (var r = 0, n = 0; n < t; ++n) {
                var o = t - n - 1;
                r += a[e.charAt(n)] * u[o]
            }
            return r
        }),
        _ = function(e) {
            for (var t = [], r = 0, n = function(n) {
                    var o = y(e.substr(r, n));
                    t.push(o);
                    r += n
                }; r < e.length - 1;) {
                var o = a[e.charAt(r++)],
                    i = d(o),
                    u = i.lowerSize,
                    s = i.upperSize;
                n(u);
                s > 0 && n(s)
            }
            return t
        },
        g = function(e) {
            var t = new DataView(new ArrayBuffer(4));
            t.setUint32(0, e);
            return t
        },
        m = function(e, t, r, n) {
            for (var o = g(r), i = 0, u = o.byteLength - 1; i < n && u >= 0; ++i, --u) e.setUint8(t + i, o.getUint8(u))
        },
        b = function(e) {
            for (var t = [1, 1, 1, 1, 2, 2, 3, 0], r = e.length, n = "", o = 0; o < r;) {
                var i = e[o++];
                if (128 & i) {
                    var u = t[i >> 3 & 7];
                    if (!(64 & i) || !u || o + u > r) return null;
                    i &= 63 >> u;
                    for (; u > 0; u -= 1) {
                        var a = e[o++];
                        if (128 != (192 & a)) return null;
                        i = i << 6 | 63 & a
                    }
                }
                n += String.fromCharCode(i)
            }
            return n
        };
    t.decodeBase54 = function(e) {
        var t = "-",
            r = ".";
        e = e.replace(r, t);
        var n = _(e),
            o = a[e.charAt(e.length - 1)],
            i = new ArrayBuffer((n.length << 2) - o),
            u = new DataView(i),
            s = 0,
            c = 0,
            f = !0,
            l = !1,
            p = void 0;
        try {
            for (var d, h = n[Symbol.iterator](); !(f = (d = h.next()).done); f = !0) {
                var v = d.value;
                if (c++ == n.length - 1 && o > 0) {
                    var y = 4 - o;
                    m(u, s, v, y);
                    s += y
                } else {
                    u.setUint32(s, v);
                    s += 4
                }
            }
        } catch (e) {
            l = !0;
            p = e
        } finally {
            try {
                !f && h.return && h.return()
            } finally {
                if (l) throw p
            }
        }
        return b(new Uint8Array(i))
    }, t.encodeToBase54Sync = function(e) {
        var t = l(e);
        return v(t)
    }
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.apiProxyMethodHandler = void 0;
    var n = u(r(61)),
        o = u(r(62)),
        i = r(14);

    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var a = /^(https?|ftp):\/\//i,
        s = function(e, t) {
            return new File([e], t, {
                type: e.type || "",
                lastModifiedDate: e.lastModifiedDate || Date.now()
            })
        },
        c = function(e) {
            for (var t = e.blobAsBinString, r = e.filename, n = e.mimeString, o = new Uint8Array(t.length), i = 0; i < o.length; i++) o[i] = t.charCodeAt(i);
            var u = new Blob([o], {
                    type: n
                }),
                a = s(u, r),
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
                var r = e.withoutCsrf ? o.default : n.default;
                e.blobOptions && (e.options.data = c(e.blobOptions));
                r[e.action](e.relativeUrl, e.options).then(function(e) {
                    return t({
                        success: !0,
                        data: e
                    })
                }).catch(function(e) {
                    (0, i.newErrorEntry)(e.message || e);
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
}, , , , function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(36),
        o = function() {
            var e = [],
                t = {
                    sendMessage: function(t) {
                        (0, n.forEach)(e, function(e) {
                            return e(t)
                        })
                    },
                    onMessage: {
                        addListener: function(t) {
                            e.push(t)
                        }
                    },
                    mockSendMessage: function(t, r) {
                        (0, n.forEach)(e, function(e) {
                            return e(t, null, r)
                        })
                    }
                };
            spyOn(t, "sendMessage").and.callThrough();
            spyOn(t.onMessage, "addListener").and.callThrough();
            return t
        };
    t.default = {
        get: o
    };
    e.exports = t.default
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, r) {
    "use strict";
    "use es6";
    var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        },
        o = r(155);
    window.chrome = n({}, window.chrome || {}, {
        runtime: {
            getManifest: function() {
                return {
                    version: "2.2.2"
                }
            }
        }
    });
    var i = r(158);
    i.keys().forEach(i);
    (0, o.runModules)()
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    };
    t.onDocumentReady = s;
    t.run = l;
    t.loadModules = p;
    t.runModules = d;
    t.formatSuite = v;
    t.getTestResults = g;
    t.reportRunnerState = m;
    var o = r(156),
        i = u(r(157));

    function u(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        t.default = e;
        return t
    }

    function a(e) {
        if (Array.isArray(e)) {
            for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
            return r
        }
        return Array.from(e)
    }

    function s(e) {
        "loading" !== document.readyState ? e() : document.addEventListener("DOMContentLoaded", e)
    }

    function c() {
        var e = i.Spec.prototype.addExpectationResult;
        i.Spec.prototype.addExpectationResult = function(t, r) {
            if (!t) {
                console.groupCollapsed(this.getFullName());
                console.trace(r && (r.stack || r.error) || r);
                console.groupEnd()
            }
            return e.call(this, t, r)
        };
        var t = i.getEnv();
        t.addReporter(i.htmlReporter);
        s(function() {
            i.htmlReporter.initialize();
            t.execute()
        })
    }

    function f() {
        window.AUTORUN_TESTS && i.getEnv().execute();
        window.getTestResults = g
    }

    function l() {
        var e = i.getEnv();
        e.describe("jasmine runner", function() {
            e.it("There must be at least one spec", function() {
                e.expect(jsApiReporter.specs().length).toBeGreaterThan(0)
            })
        });
        window.HEADLESS ? f() : c()
    }

    function p() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : /[./]spec[./]/,
            t = arguments[1],
            r = e instanceof RegExp ? function(t) {
                return t.match(e)
            } : e,
            n = Object.keys((0, o.getAllModuleDefinitions)()).filter(r);
        (0, o.require)(n, t)
    }

    function d(e) {
        p(e, l)
    }
    var h = "----------------------------------";

    function v(e) {
        var t = [e.status + " - " + e.fullName];
        e.failedExpectations && t.push.apply(t, a(e.failedExpectations.map(function(e) {
            return JSON.stringify(e, null, 2)
        })));
        return t
    }

    function y(e) {
        var t = e.description;
        if (e instanceof i.Spec) {
            var r = e.result,
                n = r.failedExpectations,
                o = r.passedExpectations,
                u = r.status;
            return {
                type: "spec",
                description: t,
                fullName: e.getFullName(),
                result: {
                    failedExpectations: _(n),
                    passedExpectations: o,
                    status: u
                }
            }
        }
        return {
            type: "suite",
            description: t,
            children: e.children.map(y)
        }
    }

    function _(e) {
        return e.map(function(e) {
            return n({}, e, {
                expected: void 0,
                actual: void 0
            })
        })
    }

    function g() {
        if (!jsApiReporter.finished) return {
            finished: !1
        };
        var e = jsApiReporter.specs(),
            t = {},
            r = e.filter(function(e) {
                var r = e.status;
                t[r] = (t[r] || 0) + 1;
                return "passed" !== r && "pending" !== r && "disabled" !== r
            }),
            n = [h];
        e.forEach(function(e) {
            return n.push.apply(n, a(v(e)).concat([h]))
        });
        n.push("");
        n.push(e.length + " specs");
        Object.keys(t).forEach(function(e) {
            n.push("  " + t[e] + " " + e)
        });
        return {
            summary: n.join("\n"),
            passed: e.length > 0 && 0 === r.length,
            finished: !0,
            runner: "jasmine-runner/static-1.27/",
            results: y(i.getEnv().topSuite())
        }
    }

    function m() {
        var e = window.hubspot.getBlockingModules().filter(function(e) {
                return "hubspot.HapiJS.events" !== e
            }),
            t = [];
        if (e.length > 0) {
            t.push("\nBlocking legacy modules detected:");
            e.forEach(function(e) {
                t.push("- " + e)
            })
        }
        if (window.Q) {
            var r = window.Q.getUnhandledReasons();
            if (r.length > 0) {
                t.push("\nUnhandled promise rejections detected:");
                r.forEach(function(e) {
                    t.push("- " + e)
                })
            }
        }
        console.error(t.join("\n"))
    }
    window.reportRunnerState = m
}, function(e, t) {
    e.exports = hubspot.requireSync("hubspot")
}, function(e, t) {
    e.exports = hubspot.requireSync("jasmine")
}, function(e, t, r) {
    var n = {
        "./background/apiProxyMethodHandler.js": 159,
        "./background/backgroundMessaging.js": 160,
        "./background/notifications/notificationsSelectors.js": 161,
        "./background/requestBlocker.js": 162,
        "./data/firstTimeTracker.js": 163,
        "./utils/tabs.js": 165
    };

    function o(e) {
        return r(i(e))
    }

    function i(e) {
        var t = n[e];
        if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
        return t
    }
    o.keys = function() {
        return Object.keys(n)
    };
    o.resolve = i;
    e.exports = o;
    o.id = 158
}, function(e, t, r) {
    "use strict";
    "use es6";
    var n = c(r(3)),
        o = c(r(61)),
        i = c(r(62)),
        u = c(r(1)),
        a = c(r(107)),
        s = r(103);

    function c(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    describe("background/apiProxyMethodHandler", function() {
        beforeEach(function() {
            u.default.runtime = a.default.get()
        });
        it("should handle apiProxyMethod", function() {
            var e = {
                action: "get",
                relativeUrl: "test/test"
            };
            expect((0, s.apiProxyMethodHandler)(e, function() {})).toBeTruthy()
        });
        it("should pass correct params to api client", function() {
            var e = "put",
                t = "test/testfetch",
                r = {
                    query: {
                        portalId: 1234
                    }
                };
            spyOn(o.default, e).and.callThrough();
            var n = {
                action: e,
                relativeUrl: t,
                options: r
            };
            (0, s.apiProxyMethodHandler)(n, function() {});
            expect(o.default[e]).toHaveBeenCalledWith(t, r)
        });
        it("should handle withCsrf flag", function() {
            var e = "delete",
                t = "/test/testfetch",
                r = {
                    query: {
                        portalId: 1234
                    }
                };
            spyOn(i.default, e).and.callThrough();
            var n = {
                action: e,
                relativeUrl: t,
                options: r,
                withoutCsrf: !0
            };
            (0, s.apiProxyMethodHandler)(n, function() {});
            expect(i.default[e]).toHaveBeenCalledWith(t, r)
        });
        it("should reject urls with protocol", function() {
            var e = "get",
                t = "https://test.com/api/testfetch",
                r = {
                    query: {
                        portalId: 1234
                    }
                };
            spyOn(o.default, e).and.callThrough();
            var n = {
                action: e,
                relativeUrl: t,
                options: r
            };
            (0, s.apiProxyMethodHandler)(n, function(e) {
                expect(e).toEqual({
                    success: !1,
                    data: {
                        message: "Invalid param: relativeUrl"
                    }
                })
            })
        });
        it("should resolve to success response", function(e) {
            var t = "post",
                r = "/test/testfetch",
                i = {
                    query: {
                        portalId: 1234
                    }
                },
                u = {
                    test: "test"
                };
            spyOn(o.default, t).and.returnValue(n.default.Promise.resolve(u));
            var a = {
                action: t,
                relativeUrl: r,
                options: i
            };
            (0, s.apiProxyMethodHandler)(a, function(t) {
                expect(t).toEqual({
                    success: !0,
                    data: u
                });
                e()
            })
        });
        it("should reject to error response", function(e) {
            var t = "post",
                r = "/test/testfetch",
                i = {
                    query: {
                        portalId: 1234
                    }
                },
                u = {
                    message: "failed"
                };
            spyOn(o.default, t).and.returnValue(n.default.Promise.reject(u));
            var a = {
                action: t,
                relativeUrl: r,
                options: i
            };
            (0, s.apiProxyMethodHandler)(a, function(t) {
                expect(t).toEqual({
                    success: !1,
                    data: u
                });
                e()
            })
        });
        it("should catch exception and send error response", function(e) {
            var t = "post",
                r = {
                    message: "failed"
                };
            spyOn(o.default, t).and.returnValue(n.default.Promise.reject(r));
            var i = null;
            (0, s.apiProxyMethodHandler)(i, function(t) {
                expect(t.success).toBeFalsy();
                e()
            })
        })
    })
}, function(e, t, r) {
    "use strict";
    "use es6";
    var n = u(r(1)),
        o = u(r(107)),
        i = r(20);

    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e, t, r) {
        t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r;
        return e
    }
    describe("background/backgroundMessaging", function() {
        beforeEach(function() {
            n.default.runtime = o.default.get()
        });
        describe("listenToContentScriptMethodsBatch", function() {
            it("should invoke addListener", function() {
                (0, i.listenToContentScriptMethodsBatch)();
                expect(n.default.runtime.onMessage.addListener).toHaveBeenCalled()
            });
            it("should register listener that invokes matching method handler", function() {
                var e = "testMethod",
                    t = !1,
                    r = a({}, e, function() {
                        t = !0
                    });
                (0, i.listenToContentScriptMethodsBatch)(r);
                n.default.runtime.sendMessage({
                    method: e
                });
                expect(t).toBeTruthy()
            });
            it("should register listener that skips non-matching method handler", function() {
                var e = !1,
                    t = a({}, "testMethod", function() {
                        e = !0
                    });
                (0, i.listenToContentScriptMethodsBatch)(t);
                n.default.runtime.sendMessage({
                    method: "notTestMethod"
                });
                expect(e).toBeFalsy()
            });
            it("should invoke method handler with correct request data", function() {
                var e = "testMethod",
                    t = {
                        test: "data"
                    },
                    r = !1,
                    o = a({}, e, function(e) {
                        r = e === t
                    });
                (0, i.listenToContentScriptMethodsBatch)(o);
                n.default.runtime.sendMessage({
                    method: e,
                    data: t
                });
                expect(r).toBeTruthy()
            });
            it("should invoke method handler with sendResponse callback", function() {
                var e = "testMethod",
                    t = {
                        test: "data"
                    },
                    r = a({}, e, function(e, t) {
                        t(e)
                    });
                (0, i.listenToContentScriptMethodsBatch)(r);
                n.default.runtime.mockSendMessage({
                    method: e,
                    data: t
                }, function(e) {
                    expect(e).toEqual(t)
                })
            })
        })
    })
}, function(e, t, r) {
    "use strict";
    "use es6";
    var n = r(99);
    describe("notificationsSelectors", function() {
        describe("isOnboardingTestEmail", function() {
            var e = function(e, t) {
                    return describe("is " + t, function() {
                        e.forEach(function(e) {
                            it("for " + e, function() {
                                expect((0, n.isOnboardingTestEmail)(e)).toBe(t)
                            })
                        })
                    })
                },
                t = ["person@example.com", "", null, !0, " ", "selenium@hubspot.com", "selenium@hubspotqa.com"];
            e(["coolrobot@hubspot.com", "something@setup.hubspot.com", "robot@setup.hubspotqa.com", "can-be-anything@setup.hubspot.com", "can-be-anything-on-qa@setup.hubspotqa.com"], !0);
            e(t, !1)
        })
    })
}, function(e, t, r) {
    "use strict";
    "use es6";
    var n = function() {
            function e(e, t) {
                var r = [],
                    n = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var u, a = e[Symbol.iterator](); !(n = (u = a.next()).done); n = !0) {
                        r.push(u.value);
                        if (t && r.length === t) break
                    }
                } catch (e) {
                    o = !0;
                    i = e
                } finally {
                    try {
                        !n && a.return && a.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return r
            }
            return function(t, r) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, r);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        o = r(100),
        i = f(r(18)),
        u = c(r(107)),
        a = c(r(1)),
        s = r(13);

    function c(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function f(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        t.default = e;
        return t
    }
    var l = 7000000000724504,
        p = "37d1a386-842d-4c14-b117-6adffc355773",
        d = function(e, t) {
            return "https://t.sidekickopen10.com/s1t/o/5/f18dQhb0S7kC8dDMPbW2n0x6l2B9gXrN7sKj6v5KRM2W56DHr41qfTsKW16gGDP614LWm101?si=" + e + "&pi=" + t + "&ti=null"
        },
        h = function(e, t, r) {
            return "https://ci5.googleusercontent.com/proxy/2vz" + (r && "#" + d(e, t))
        };
    describe("background/requestBlocker", function() {
        var e = void 0;
        beforeEach(function() {
            a.default.runtime = u.default.get();
            e = new o.RequestBlocker;
            i.setUser((0, s.Map)([
                ["sidekickId", l]
            ]))
        });
        describe("handleOwnTrackerRequest", function() {
            it("should block on opens", function() {
                var t = e.handleOwnTrackerRequest(o.RequestBlocker.TRACKER_TYPES.OPEN);
                expect(t).toBe(o.RequestBlocker.BLOCKING_RESPONSES.block)
            });
            it("should redirect on clicks", function() {
                var t = "google.com",
                    r = e.handleOwnTrackerRequest(o.RequestBlocker.TRACKER_TYPES.CLICK, t);
                expect(r).toEqual({
                    redirectUrl: decodeURIComponent(t)
                })
            });
            it("b54 should redirect on clicks", function() {
                var t = "https://api.hubapi.com/s1t/c/5/f18dQhb0S7lM8dDMPbW2n0x6l2B9nMJN7t5X-FdSD1CW4XXF0K64J9s0V16MRg24JcsR103?te=W3R5hFj4cm2zwW3K6KcQ3GG-zSW3Hf8kH3GGYWVW3_rjjW3zgCRrW30sjdP32H8XzW1ZpHB-4mjDFrF3_VN6ZvnrB1&si=" + l + "&pi=55592d57-bc89-4eb1-ab7e-8aa317ef93f8",
                    r = e.blockRequest({
                        url: t
                    }).redirectUrl;
                expect(r).toEqual("https://embed.vidyard.com/share/RUKRSuK45ksVwBTWmj8S9a?")
            })
        });
        describe("handleTrackerRequest", function() {
            it("should call handleOwnTrackerRequest if sidekick ID matches URL", function() {
                spyOn(e, "handleOwnTrackerRequest");
                e.handleTrackerRequest(o.RequestBlocker.TRACKER_TYPES.OPEN, d(l, p), l, l);
                expect(e.handleOwnTrackerRequest).toHaveBeenCalled()
            });
            it("should not call handleOwnTrackerRequest if sidekick ID does not match URL", function() {
                spyOn(e, "handleOwnTrackerRequest");
                var t = e.handleTrackerRequest(o.RequestBlocker.TRACKER_TYPES.OPEN, d(l, p), l + 1, l);
                expect(e.handleOwnTrackerRequest).not.toHaveBeenCalled();
                expect(t).toBe(o.RequestBlocker.BLOCKING_RESPONSES.allow)
            });
            it("should add google proxy urls to blockedGoogleUrlCache", function() {
                var t = h(l, p, !0),
                    r = t.split("#"),
                    i = n(r, 1)[0];
                e.handleTrackerRequest(o.RequestBlocker.TRACKER_TYPES.OPEN, t, l, l);
                expect(e.blockedGoogleUrlCache.includes(i)).toBeTruthy()
            })
        });
        describe("blockRequest", function() {
            it("should block tracker URL if url matches sidekick user", function() {
                spyOn(i, "getSidekickId").and.returnValue(l);
                var t = d(l, p),
                    r = e.blockRequest({
                        url: t
                    });
                expect(r).toBe(o.RequestBlocker.BLOCKING_RESPONSES.block)
            });
            it("should not block tracker URL if url does not match sidekick user", function() {
                spyOn(i, "getSidekickId").and.returnValue(l + 1);
                var t = d(l, p),
                    r = e.blockRequest({
                        url: t
                    });
                expect(r).toBe(o.RequestBlocker.BLOCKING_RESPONSES.allow)
            });
            it("should block google proxy URL if redirect url matches sidekick user", function() {
                spyOn(i, "getSidekickId").and.returnValue(l);
                var t = h(l, p, !0),
                    r = e.blockRequest({
                        url: t
                    });
                expect(r).toBe(o.RequestBlocker.BLOCKING_RESPONSES.block)
            });
            it("should block google proxy URL without redirect portion after blocking it with a redirect", function() {
                spyOn(i, "getSidekickId").and.returnValue(l);
                var t = h(l, p, !0),
                    r = e.blockRequest({
                        url: t
                    }),
                    u = t.split("#"),
                    a = n(u, 1)[0],
                    s = e.blockRequest({
                        url: a
                    });
                expect(r).toBe(o.RequestBlocker.BLOCKING_RESPONSES.block);
                expect(s).toBe(o.RequestBlocker.BLOCKING_RESPONSES.block)
            });
            it("should not block other google proxy URLs", function() {
                spyOn(i, "getSidekickId").and.returnValue(l);
                var t = h(l, p, !0),
                    r = e.blockRequest({
                        url: t
                    }),
                    n = "https://ci5.googleusercontent.com/proxy/23e8y",
                    u = e.blockRequest({
                        url: n
                    });
                expect(r).toBe(o.RequestBlocker.BLOCKING_RESPONSES.block);
                expect(u).toBe(o.RequestBlocker.BLOCKING_RESPONSES.allow)
            })
        });
        describe("cache methods", function() {
            var t = ["apple.com", "google.com", "facebook.com"];
            it("insertIntoCache should insert URL at end of list if it doesn't exist", function() {
                e.blockedGoogleUrlCache = [t[0]];
                var r = t[1];
                e.insertIntoCache(r);
                var n = e.blockedGoogleUrlCache.length - 1;
                expect(e.blockedGoogleUrlCache[n]).toEqual(r)
            });
            it("insertIntoCache should move URL to end of list if it already exist", function() {
                e.blockedGoogleUrlCache = t;
                var r = t[0];
                e.insertIntoCache(r);
                var n = e.blockedGoogleUrlCache.length - 1;
                expect(e.blockedGoogleUrlCache[n]).toEqual(r);
                expect(e.blockedGoogleUrlCache.includes(t[1])).toBeTruthy();
                expect(e.blockedGoogleUrlCache.includes(t[2])).toBeTruthy()
            });
            it("clearCacheIfNecessary should remove the half least recently used URLs", function() {
                for (var t = "google.com", r = 0; r < o.RequestBlocker.CACHE_MAX_SIZE; r++) e.insertIntoCache("" + t + r);
                var n = "apple.com";
                e.insertIntoCache(n);
                e.clearCacheIfNecessary();
                var i = o.RequestBlocker.CACHE_MAX_SIZE / 2 + 1;
                expect(e.blockedGoogleUrlCache.includes(n)).toBeTruthy();
                expect(e.blockedGoogleUrlCache.length).toEqual(i)
            })
        })
    })
}, function(e, t, r) {
    "use strict";
    "use es6";
    var n = r(60),
        o = u(r(1)),
        i = u(r(164));

    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    describe("data/firstRunTracker", function() {
        beforeEach(function() {
            o.default.storage = {
                sync: i.default.get()
            }
        });
        it("isFirstRun should return true when first run", function() {
            o.default.storage.sync.set({
                first_time: void 0
            });
            (0, n.initFirstRunAndLoginTracker)();
            expect((0, n.isFirstRun)()).toBe(!0)
        });
        it("isFirstRun should return false when not first run", function() {
            o.default.storage.sync.set({
                first_time: !1
            });
            (0, n.initFirstRunAndLoginTracker)();
            expect((0, n.isFirstRun)()).toBe(!1)
        });
        it("setNotFirstRun should set first_time false", function() {
            (0, n.initFirstRunAndLoginTracker)();
            (0, n.setNotFirstRun)();
            expect(o.default.storage.sync.set).toHaveBeenCalledWith({
                first_time: !1
            }, jasmine.any(Function));
            expect((0, n.isFirstRun)()).toBe(!1)
        })
    })
}, function(e, t, r) {
    "use strict";
    "use es6";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(25);

    function o(e, t, r) {
        t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r;
        return e
    }
    var i = function() {
        var e = {},
            t = {
                get: function(t) {
                    (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.emptyFunction)(o({}, t, e[t]))
                },
                set: function(t) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.emptyFunction;
                    Object.assign(e, t);
                    r()
                }
            };
        spyOn(t, "get").and.callThrough();
        spyOn(t, "set").and.callThrough();
        return t
    };
    t.default = {
        get: i
    };
    e.exports = t.default
}, function(e, t, r) {
    "use strict";
    "use es6";
    var n = r(10),
        o = a(r(1)),
        i = a(r(39)),
        u = r(7);

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    describe("utils/tabs", function() {
        o.default.tabs = {
            query: function() {},
            create: function() {},
            update: function() {}
        };
        var e = [{
                active: !1,
                index: 1,
                id: 17802,
                selected: !1,
                title: "Getting Started",
                url: new i.default("/getting-started/" + (0, u.getPortalId)() + "/connect-inbox", {
                    lb: "app",
                    protocol: "https"
                }).href
            }],
            t = [{
                active: !1,
                index: 1,
                id: 123,
                selected: !1,
                title: "Settings",
                url: new i.default("/crm-settings-email/" + (0, u.getPortalId)() + "/email/extension", {
                    lb: "app",
                    protocol: "https"
                }).href
            }];
        beforeEach(function() {
            spyOn(o.default.tabs, "update");
            spyOn(o.default.tabs, "create")
        });
        it("redirectBasedOnTabs should switch to onboarding if the tab exists", function() {
            spyOn(o.default.tabs, "query").and.callFake(function(t, r) {
                return r(e)
            });
            (0, n.redirectBasedOnTabs)();
            expect(o.default.tabs.update).toHaveBeenCalledWith(17802, {
                active: !0
            })
        });
        it("redirectBasedOnTabs should switch to settings if the tab exists", function() {
            spyOn(o.default.tabs, "query").and.callFake(function(e, r) {
                return r(t)
            });
            (0, n.redirectBasedOnTabs)();
            expect(o.default.tabs.update).toHaveBeenCalledWith(123, {
                active: !0
            })
        })
    })
}]);
//# sourceMappingURL=specs.js.map