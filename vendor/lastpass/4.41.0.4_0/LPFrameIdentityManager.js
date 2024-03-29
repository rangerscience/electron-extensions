LPFrameIdentityManager = function() {
    var n = 0,
        r = 0,
        i = [],
        e = function(t, a, n, r) {
            var i = function() {
                var e;
                !0 === n.apply(this, arguments) && t.removeEventListener(a, i, r)
            };
            t.addEventListener(a, i, r)
        },
        t, a = function(e) {
            for (var t = 0; t < i.length; ++t)
                if (i[t].frame === e) return i[t].id;
            var a = n + ":" + ++r;
            return i.push({
                frame: e,
                id: a
            }), a
        },
        s;
    return {
        getFrameIdentity: function(t) {
            if (window === top) t(n);
            else {
                var a = Date.now();
                window.parent.postMessage({
                    LPMessage: "getFrameIdentity",
                    requestID: a
                }, "*"), e(window, "message", function(e) {
                    if (e.source === window.parent && e.data && "gotFrameIdentity" === e.data.LPMessage && e.data.requestID === a) return n = e.data.frameIdentity, t(n), !0
                })
            }
        },
        initialize: function() {
            window.addEventListener("message", function(e) {
                e.source && e.data && "getFrameIdentity" === e.data.LPMessage && e.source.postMessage({
                    LPMessage: "gotFrameIdentity",
                    requestID: e.data.requestID,
                    frameIdentity: a(e.source)
                }, e.origin)
            })
        }
    }
}();
//# sourceMappingURL=sourcemaps/LPFrameIdentityManager.js.map