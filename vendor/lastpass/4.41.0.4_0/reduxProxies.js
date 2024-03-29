var proxyLegacyGlobals = function() {
    function c(t) {
        try {
            t()
        } catch (t) {
            console.log(t)
        }
    }

    function u(r, t, i, o) {
        var u = null;
        return new Proxy(t, {
            set: function(t, e, n) {
                u || (u = {}, setTimeout(function() {
                    o(t) && c(function() {
                        i(r, u)
                    }), u = null
                })), t[e] = n, u[e] = n
            }
        })
    }

    function t(t, r, i, o) {
        var n = {};
        return new Proxy(t, {
            set: function(t, e, n) {
                t[e] = n, o(n) && c(function() {
                    r(e, n)
                })
            },
            deleteProperty: function(t, e) {
                var n = o(t[e]);
                delete t[e], n && c(function() {
                    i(e)
                })
            },
            get: function(t, e) {
                return !n[e] && t[e] && (n[e] = u(e, t[e], r, o)), n[e]
            }
        })
    }
    var e = function(t) {
            return "http://group" !== t.url
        },
        n = function(t, e) {
            var n = {};
            for (var r in t) e(t[r]) && (n[r] = t[r]);
            return n
        };
    return function() {
        "undefined" != typeof Proxy && reduxApp && (LPContentScriptFeatures.react_login || reduxApp.setVaultKey(g_local_key), g_sites = t(g_sites, reduxApp.writeSite, reduxApp.removeSite, e), reduxApp.writeBlob({
            sites: n(g_sites, e),
            sharedFolders: g_shares,
            applications: g_applications,
            identities: g_identities
        }))
    }
}();
//# sourceMappingURL=sourcemaps/reduxProxies.js.map