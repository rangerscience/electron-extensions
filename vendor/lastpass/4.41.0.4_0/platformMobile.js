LPPlatform = function() {
    var s = "";
    window.lp_setmethod = function(t) {
        s = t
    };
    var t = function() {
            return s
        },
        f = "0.0.0";
    window.lp_setversion = function(t) {
        f = t
    };
    var n, r = (e = function(t) {
            return host.translate(t)
        }, o = function(t) {
            return t
        }, function(t) {
            return "undefined" != typeof host && "function" == typeof host.translate ? (LPPlatform.translate = e)(t) : (LPPlatform.translate = o)(t)
        }),
        e, o, u = (i = function(t, n, r) {
            host.status(t, n, r ? JSON.stringify(r) : null)
        }, c = function(t, n, r) {
            console.log(t + " " + n)
        }, function(t, n, r) {
            "undefined" != typeof host && "function" == typeof host.status ? (LPPlatform.returnResult = i)(t, n, r) : (LPPlatform.returnResult = c)(t, n, r)
        }),
        i, c, a = function(t, n) {
            u(!0, t, n)
        },
        l = function(t, n) {
            u(!1, t, n)
        },
        d;
    return {
        translate: r,
        returnResult: u,
        returnSuccess: a,
        returnError: l,
        makeRequest: function(t, n, r, e, o) {
            var u = a;
            "function" == typeof e ? u = function(t, n) {
                e(!0, t, n ? JSON.stringify(n) : null)
            } : void 0 === o && (o = e), o.requestArgs = {
                token: n,
                wxsessid: r,
                method: s,
                lpversion: f
            }, o.success = o.success || u, o.error = o.error || l, t(o)
        },
        getMethod: t,
        getVersion: function() {
            return f
        }
    }
}();
//# sourceMappingURL=sourcemaps/platformMobile.js.map