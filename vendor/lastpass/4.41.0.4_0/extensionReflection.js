LPReflection = function(a) {
    var c = function(n, t, i) {
            i = i || a, "string" == typeof t && (t = t.split("."));
            for (var e = 0, o = t.length; e < o; ++e) {
                var r = t[e];
                if (n) {
                    if (!n.hasOwnProperty(r)) throw "Cannot access " + t.join(".") + ". Not defined on the interface.";
                    n = n[r]
                }
                e < o - 1 && (i = i[r])
            }
            return {
                parent: i,
                property: t[t.length - 1],
                definition: n
            }
        },
        n, t, i;
    return {
        callFunction: function(n, t, i, e) {
            var o = c(n, t, e && e.context),
                r = o.parent[o.property];
            if (e && e.additionalArguments && o.definition.options && o.definition.options.appendAdditionalArguments) {
                for (var a = [].concat(e.additionalArguments), f = r.length - i.length - a.length, p = 0; p < f; ++p) i.push(void 0);
                i = i.concat(e.additionalArguments)
            }
            if (!o.definition || !o.definition.before) return r.apply(o.parent, i);
            o.definition.before.apply(o.definition, i.concat(function() {
                r.apply(o.parent, i)
            }))
        },
        setValue: function(n, t, i, e) {
            var o = c(n, t, e && e.context);
            if (o.definition && !o.definition.allowWrite()) throw ("string" == typeof t ? t : t.join(".")) + " is not writeable.";
            o.parent[o.property] = i
        },
        getValue: function(n, t, i) {
            var e = c(n, t, i && i.context);
            return e.parent[e.property]
        }
    }
}(this);
//# sourceMappingURL=sourcemaps/extensionReflection.js.map