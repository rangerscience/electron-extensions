LPServer.vault = LPServer.vault || {}, LPServer.vault.history = function() {
    "use strict";
    var s = function(r, a) {
            for (var e = [], s = 0; s < r.length; s++) {
                var t = r[s];
                e[s] = {
                    value: t[0],
                    date: t[1],
                    whom: 2 < t.length ? t[2] : ""
                }
            }
            a.success(e)
        },
        r = function(e) {
            return function(r) {
                if (!r || !r.params || !r.params.aid) throw new Error("Missing parameter values.");
                var a = {
                    aid: r.params.aid
                };
                r.params.shareId && (a.sharedfolderid = r.params.shareId), LPServer.jsonRequest({
                    url: e,
                    data: a,
                    success: s,
                    userSupplied: r
                })
            }
        },
        a = r("getPasswordHist.php"),
        e = r("getUsernameHist.php"),
        t = r("getNoteHist.php"),
        i;
    return {
        revertPasswordChange: function(s) {
            if (!(s && s.params && s.params.key && s.params.aid)) throw new Error("Missing parameter values.");
            var r = function(r) {
                if (0 < r.length) {
                    var a = r[r.length - 1].value,
                        e = dec(a, s.params.key);
                    changePassword(e, [s.params.aid], !1, s.success, s.error)
                }
            };
            a({
                params: {
                    aid: s.params.aid,
                    shareId: s.params.shareId
                },
                success: r,
                error: s.error
            })
        },
        getPasswordHistory: a,
        getUsernameHistory: e,
        getNoteHistory: t
    }
}();
//# sourceMappingURL=sourcemaps/vaultHistory.js.map