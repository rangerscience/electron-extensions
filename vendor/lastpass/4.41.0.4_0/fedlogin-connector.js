! function() {
    var r = null,
        i = function(i) {
            i.fromExtension = !0, r && r.target.postMessage(i, r.origin)
        },
        o = LPPlatform.requestFrameworkInitializer(i),
        e = function(i) {
            var e = i.data,
                n = e && e.data;
            e.type && (null === r && (i.origin === window.origin || "undefined" != typeof bg && bg.get("base_url") === i.origin + "/") && (r = {
                target: i.source,
                origin: i.origin
            }), r && r.target === i.source && r.origin === i.origin && (e.fromExtension || n && n.cmd && "FederatedLogin" !== n.cmd[0] && "getVersion" !== n.cmd || o(e)))
        };
    window.addEventListener("message", e, !0)
}();
//# sourceMappingURL=sourcemaps/fedlogin-connector.js.map