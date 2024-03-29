Interfaces = function() {
    var a = function(t, n) {
            this.type = t, this.options = n, this.options && (this.options.include && (this.options.include = [].concat(this.options.include)), this.options.exclude && (this.options.exclude = [].concat(this.options.exclude)))
        },
        o = function(t, n) {
            var n = [].concat(n);
            for (i = 0; i < n.length; ++i)
                for (j = 0; j < t.length; ++j)
                    if (t[j] === n[i]) return !0;
            return !1
        };
    a.prototype.requiredBy = function(t) {
        var n;
        if (t && this.options) {
            if (this.options.include) return o(this.options.include, t);
            if (this.options.exclude) return !o(this.options.include, t)
        }
        return !0
    }, a.prototype.isSyncronized = function() {
        return this.options && !0 === this.options.sync
    }, a.prototype.isSyncronousFunction = function() {
        return this.type === Interfaces.TYPE_SYNC_FUNCTION
    }, a.prototype.isFunction = function() {
        return this.type === Interfaces.TYPE_FUNCTION || this.type === Interfaces.TYPE_SYNC_FUNCTION
    }, a.prototype.isConstructor = function() {
        return this.type === Interfaces.TYPE_CONSTRUCTOR
    }, a.prototype.isPrimitive = function() {
        return !this.isFunction() && !this.isConstructor()
    }, a.prototype.shouldSendIndirect = function() {
        return this.isPrimitive() ? !this.options || void 0 === this.options.sendIndirect || this.options.sendIndirect : this.options && !0 === this.options.sendIndirect
    }, a.prototype.allowWrite = function() {
        return this.options && !0 === this.options.write
    }, a.prototype.addIncludes = function(t) {
        this.options = this.options || {}, this.options.include = this.options.include.concat(t)
    };
    var t, n = (p = function(n, o) {
            return function(t) {
                if (o.hasOwnProperty(t)) return n[t];
                throw t + " is not defined in the interface."
            }
        }, h = function(i, e, r, c) {
            var s = function(t, n, o) {
                if (!t.allowWrite()) throw r.concat(n) + " is not writeable.";
                if (!t || typeof o !== t.type) throw n + " is not defined in the interface.";
                i[n] = o
            };
            return c.direct ? function(t, n) {
                var o = e[t];
                s(o, t, n)
            } : function(t, n) {
                var o = e[t];
                s(o, t, n), o.shouldSendIndirect() && c.requestFunction({
                    cmd: "LPData.setValue",
                    args: [r.concat(t), n]
                })
            }
        }, l = function(n, o, r, c) {
            return function() {
                var t = arguments;
                if (c.cloneObjects && !n.isSyncronousFunction()) {
                    var i = function(n) {
                            return "function" == typeof n ? function() {
                                var t = e(Array.from(arguments));
                                n.apply(null, t)
                            } : n
                        },
                        e = function(n) {
                            return n ? (Array.isArray(n) ? (o = [], n.forEach(function(t) {
                                "object" == typeof t ? o.push(e(t)) : o.push(i(t))
                            })) : (o = {}, Object.keys(n).forEach(function(t) {
                                n[t] && "object" == typeof n[t] ? o[t] = e(n[t]) : o[t] = i(n[t])
                            })), i(o)) : null;
                            var o
                        };
                    t = Array.prototype.map.call(t, function(t) {
                        return "object" == typeof t ? e(t) : i(t)
                    })
                }
                return r.apply(o, t)
            }
        }, y = function(i, e, r) {
            if ("function" == typeof r.requestFunction) return function() {
                for (var t = [], n = 0, o = arguments.length; n < o; ++n) t.push(arguments[n]);
                return r.requestFunction({
                    cmd: 0 < i.length ? i.concat(e) : e,
                    args: t
                })
            };
            throw "requestFunction must be specified for this interface since it is not direct access."
        }, d = function(t, n, o) {
            return function() {
                "function" == typeof n && n.apply(t, arguments), "function" == typeof o && o.apply(t, arguments)
            }
        }, v = function(t, n, o, i, e, r) {
            var c = !1,
                s = [];
            for (var u in i) {
                var f = i[u];
                f instanceof a ? f.isFunction() ? !f.requiredBy(r.context) || f.isSyncronousFunction() && r.asyncOnly || (r.direct || f.isSyncronousFunction() ? n && "function" == typeof n[u] ? (t[u] = l(f, n, n[u], r), !r.direct && f.shouldSendIndirect() && (t[u] = d(t, t[u], y(e, u, r)))) : s.push(f.type + ": " + e.concat(u).join(".")) : t[u] = y(e, u, r)) : f.isConstructor() ? f.requiredBy(r.context) && !r.asyncOnly && (n && "function" == typeof n[u] ? t[u] = n[u] : s.push(f.type + ": " + e.concat(u).join("."))) : c = !0 : (t.hasOwnProperty(u) || (t[u] = {}), v(t[u], n ? n[u] : n, o ? o[u] : o, i[u], e.concat(u), r))
            }
            if (c && (t.get = p(o, i), t.set = h(o, i, e, r)), 0 < s.length && r.checkMissing) throw "Background instance does not support the following:\n" + s.join("\n");
            return t
        }, function(t, n) {
            return v(n.instance || {}, n.source || n.sourceFunctions, n.source || n.sourceData, t, [], n)
        }),
        p, h, l, y, d, v, s = (c = {}, u = {}, f = function(t, n, o, i) {
            var e = [];
            for (var r in t) {
                var c = i ? i.concat(r) : [r],
                    s = t[r];
                s instanceof a ? s.isPrimitive() && s.requiredBy(n) && (!o || s.isSyncronized()) && e.push({
                    sourceFunction: s.options && s.options.sourceFunction,
                    path: c
                }) : e = e.concat(f(s, n, o, c))
            }
            return e
        }, function(t, n) {
            var o = [];
            t = [].concat(t);
            for (var i = 0; i < t.length; ++i) {
                var e = t[i],
                    r;
                n.syncronizedOnly ? void 0 === (r = u[e]) && (r = u[e] = f(n.interface, e, !0)) : void 0 === (r = c[e]) && (r = c[e] = f(n.interface, e, !1)), o = o.concat(r)
            }
            return o
        }),
        c, u, f, e, r;
    return {
        TYPE_CONSTRUCTOR: "contsructor",
        TYPE_SYNC_FUNCTION: "synchronous function",
        TYPE_FUNCTION: "function",
        TYPE_STRING: "string",
        TYPE_BOOLEAN: "boolean",
        TYPE_NUMBER: "number",
        TYPE_OBJECT: "object",
        Definition: a,
        extend: function(t, n) {
            for (var o in n) {
                var i = n[o];
                switch (typeof i) {
                    case "object":
                        t.hasOwnProperty(o) ? Interfaces.extend(t[o], i) : t[o] = i;
                        break;
                    default:
                        t[o] = i
                }
            }
        },
        createInstance: n,
        getPrimitives: function(t) {
            var n = {};
            if (t.context)
                for (var o = s(t.context, t), i = 0, e = o.length; i < e; ++i) {
                    var r = o[i],
                        c;
                    c = r.sourceFunction ? "function" == typeof r.sourceFunction ? r.sourceFunction() : LPReflection.callFunction(null, r.sourceFunction, [], {
                        context: t.source
                    }) : LPReflection.getValue(t.interface, r.path, {
                        context: t.source
                    }), LPReflection.setValue(null, r.path, c, {
                        context: n
                    })
                }
            return n
        },
        clearPrimitives: function(t) {
            if (t.context)
                for (var n = s(t.context, t), o = 0; o < n.length; ++o) LPReflection.setValue(null, n[o].path, null, {
                    context: t.source
                })
        },
        getName: function(t) {
            for (var n in this)
                if (t === this[n]) return n;
            throw new Error("Could not find interface name.")
        }
    }
}();
//# sourceMappingURL=sourcemaps/interfaces.js.map