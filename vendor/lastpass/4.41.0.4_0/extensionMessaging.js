LPMessaging = function(o) {
    var t = 0,
        s = {},
        a = 0,
        c = function(e) {
            var t = {},
                n = !1;
            for (var r in e)
                if (e.hasOwnProperty(r)) {
                    var a = e[r];
                    switch (typeof a) {
                        case "function":
                            n = n || !0, t[r] = a.length;
                            break;
                        case "object":
                            t[r] = c(a), n = n || null !== t[r]
                    }
                } return n ? t : null
        },
        u = function(e) {
            var t = {};
            for (var n in e)
                if (e.hasOwnProperty(n)) {
                    var r = e[n];
                    switch (typeof r) {
                        case "function":
                            t[n] = r, delete e[n];
                            break;
                        case "object":
                            t[n] = u(r)
                    }
                } return t
        },
        i = function(e) {
            return e && "object" == typeof e
        },
        f = function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        },
        l = function(e) {
            if (i(e)) switch (Object.prototype.toString.call(e)) {
                case "[object Array]":
                    return !1;
                case "[object Element]":
                    return !0;
                case "[object Object]":
                    return null !== Object.getPrototypeOf(Object.getPrototypeOf(e))
            }
            return !1
        },
        p = function(e) {
            var t = f(e) ? [] : {};
            if (!l(e))
                for (var n in e)
                    if (e.hasOwnProperty(n)) {
                        var r = e[n];
                        t[n] = i(r) ? p(r) : r
                    } return t
        },
        h = function(e, t) {
            e.args = p(e.args);
            var n = c(e.args);
            if (n) {
                var r = ++a;
                s[r] = {
                    functions: u(e.args),
                    sender: t
                }, e.requestID = r, e.functions = n
            }
        },
        e, n = function(e) {
            var t = s[e.responseRequestID].functions,
                n = s[e.responseRequestID].sender;
            delete s[e.responseRequestID];
            for (var r = 0, a = e.callbackPath.length; r < a; ++r) t = t[e.callbackPath[r]];
            var c = e.args;
            y(n, c, e.functions, e), t.apply(o, c)
        },
        v = function(a, c, o, e) {
            var s = function() {
                for (var e = {
                        responseRequestID: c.requestID,
                        callbackPath: o
                    }, t = [], n = 0, r = arguments.length; n < r; ++n) t.push(arguments[n]);
                e.args = t, h(e, a), a(e)
            };
            switch (e) {
                case 1:
                    return function(e) {
                        s.apply(this, arguments)
                    };
                case 2:
                    return function(e, t) {
                        s.apply(this, arguments)
                    };
                case 3:
                    return function(e, t, n) {
                        s.apply(this, arguments)
                    };
                case 4:
                    return function(e, t, n, r) {
                        s.apply(this, arguments)
                    };
                case 5:
                    return function(e, t, n, r, a) {
                        s.apply(this, arguments)
                    };
                default:
                    return 5 < e && Raven.captureException(new Error("Too many arguments passed.")),
                        function() {
                            s.apply(this, arguments)
                        }
            }
        },
        y = function(e, t, n, r, a) {
            for (var c in a = a || [], n) {
                var o = n[c];
                switch (typeof o) {
                    case "object":
                        y(e, t[c], o, r, a.concat(c));
                        break;
                    default:
                        t[c] = v(e, r, a.concat(c), o)
                }
            }
        },
        r, b;
    return {
        handleRequest: function(e, t, n, r) {
            var a = t.args;
            y(n, a, t.functions, t), LPReflection.callFunction(e, t.cmd, a, r)
        },
        makeRequest: function(e, t, n) {
            return h(t.data, n), e(t)
        },
        handleResponse: n,
        getNewMessageSourceID: function(e) {
            return ++t
        }
    }
}(this);
//# sourceMappingURL=sourcemaps/extensionMessaging.js.map