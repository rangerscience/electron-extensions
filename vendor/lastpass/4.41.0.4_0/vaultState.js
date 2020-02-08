VaultState = {},
    function() {
        var t = null,
            i = null,
            o = null,
            c = null,
            s = null,
            l = null,
            g = null,
            n = function(e) {
                if (LPTools.getOption(e, "incrementAccountsVersion", !1)) {
                    var t = LPTools.getOption(e, "incrementAccountsVersionAmount", 1);
                    o += t
                }
            };
        Topics.get(Topics.INITIALIZED).subscribe(function() {
            e()
        }), Topics.get(Topics.IDENTITY_ENABLE).subscribe(function(e) {
            i = e.getID()
        }), Topics.get(Topics.REQUEST_SUCCESS).subscribe(function(e) {
            n(e.requestSuccessOptions)
        }), Topics.get(Topics.UPDATE_VAULT_STATE).subscribe(n);
        var u = function() {
            if (bg.get("lploggedin")) {
                if (l && bg.get("g_identity") !== i) {
                    i = bg.get("g_identity");
                    for (var e = 0, t = l.length; e < t; ++e) i === l[e].getID() && l[e].enable({
                        reprompt: !1
                    })
                }
                var n = parseInt(bg.get("g_local_accts_version"));
                o < n ? (o = n, Topics.get(Topics.REFRESH_DATA).publish(), s = null) : n < o ? (null === s && (s = (new Date).getTime()), 15e3 < (new Date).getTime() - s && (s = null, o = n)) : s = null, c !== bg.get("g_showcredmon") && (c = bg.get("g_showcredmon"), Topics.get(Topics.REFRESH_PREFERENCES).publish())
            } else Topics.get(Topics.CLEAR_DATA).publish(), clearInterval(g), g = setInterval(function() {
                a()
            }, 1e3)
        };
        VaultState.incrementAccountsVersion = function() {
            ++o
        }, VaultState.setAccountsVersion = function(e) {
            o = e
        }, VaultState.setIdentities = function(e) {
            l = e
        };
        var r = function() {
                return bg && bg.get("lploggedin") && -1 < parseInt(bg.get("g_local_accts_version")) && LPPlatform.loadedPreferences()
            },
            a = function(e) {
                return !!r() && (t = bg.get("lploggedin"), i = bg.get("g_identity"), o = parseInt(bg.get("g_local_accts_version")), c = bg.get("g_showcredmon"), Topics.get(Topics.LOGIN).publish({
                    fadeIn: void 0 === e || e
                }), clearInterval(g), g = setInterval(function() {
                    u()
                }, 1e3), !0)
            },
            e = function() {
                a(!1) || (g = setInterval(function() {
                    a()
                }, 1e3))
            }
    }();
//# sourceMappingURL=sourcemaps/vaultState.js.map