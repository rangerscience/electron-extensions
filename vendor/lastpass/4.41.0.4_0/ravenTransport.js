var LPRavenTransport = function() {
    Topics.get(Topics.LOGIN_FINISHED).subscribe(function() {
        Raven.setUserContext({
            id: g_uid
        })
    });
    var e = null,
        i = [],
        t = function(i) {
            var t = function() {
                if (0 < i.length) {
                    var n = i.pop(),
                        e = n.onSuccess;
                    n.onSuccess = function() {
                        return t(), e.apply(n, arguments)
                    }, Raven._makeRequest(n)
                }
            };
            t()
        },
        n;
    return function() {
            LPServer.lmiapi.jsonRequest({
                url: "lmiapi/environment-config",
                type: "GET",
                CSRFToken: !1,
                success: function(n) {
                    (e = n.isSentryEnabled) && 0 < i.length && (t(i), i = [])
                }
            })
        }(),
        function(n) {
            !1 !== e ? (LPRavenSanitize && "function" == typeof LPRavenSanitize.sanitize && (n.data = LPRavenSanitize.sanitize(n.data)), Raven._makeRequest(n)) : i.push(n)
        }
}();
//# sourceMappingURL=sourcemaps/ravenTransport.js.map