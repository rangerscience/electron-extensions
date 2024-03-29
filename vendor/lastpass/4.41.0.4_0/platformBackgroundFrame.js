LPPlatform = "undefined" == typeof LPPlatform ? {} : LPPlatform,
    function() {
        LPPlatform.isMac = function() {
            return "undefined" != typeof navigator && -1 != navigator.appVersion.indexOf("Mac")
        };
        var t = function() {
            var e = {},
                n = document.location.href.split("?");
            if (2 === n.length)
                for (var t = n[1].split("&"), a = 0; a < t.length; ++a) {
                    var r = t[a].split("=");
                    2 === r.length && (e[r[0]] = r[1])
                }
            return e
        };
        LPPlatform.getUILanguage = function() {
            var e, n;
            return (t().lplanguage || "en-US").replace(/_/g, "-")
        }
    }(),
    function(c) {
        var n, t, e, i, o;
        c.translate = function(e) {
            return gs(e)
        }, c.isWin = function() {
            return "undefined" != typeof navigator && -1 != navigator.appVersion.indexOf("Windows")
        }, t = [], e = n = null, i = function(e) {
            var t = e.callback;
            e.callback = function(e) {
                for (var n in e) window[n] = e[n];
                t && t()
            }, n.LPData.getData(e)
        }, o = function(e) {
            "string" == typeof e && -1 === t.indexOf(e) && t.push(e), setInterval(function() {
                i({
                    context: t,
                    triggers: {
                        g_local_accts_version: n.get("g_local_accts_version")
                    }
                })
            }, 1e3)
        }, c.getBackgroundInterface = function(e) {
            return null === n && (n = c.createBackgroundInterface(e)), e.getData ? n.getData({
                context: e.context,
                callback: e.callback
            }) : e.callback && e.callback(n), n
        }, c.createBackgroundInterface = function(t) {
            g_bg = window;
            var n = new LPBackgroundRequester(c.requestFrameworkInitializer, {
                interfaceDefinition: t.interfaceDefinition,
                interfaceName: t.interfaceDefinition ? parent.Interfaces.getName(t.interfaceDefinition) : null,
                reflectionContext: parent,
                mainRequestFramework: void 0 === t.mainRequestFramework || t.mainRequestFramework
            });
            n.initialize();
            var a = function(e) {
                    n.sendRequest({
                        type: "backgroundRequest",
                        data: e
                    })
                },
                r = Interfaces.createInstance(Interfaces.BackgroundInterface, {
                    context: t.context,
                    source: window,
                    direct: !1,
                    requestFunction: a
                });
            return r.getData = function(e) {
                var n = e.callback;
                e.callback = function() {
                    t.pollBackground && o(e.context), n && n(r)
                }, i(e)
            }, parent.LPDialog && (parent.LPDialog.beforeLoad = function(e, n) {
                Interfaces.createInstance(Interfaces.BackgroundInterface, {
                    instance: r,
                    context: e,
                    source: window,
                    direct: !1,
                    requestFunction: a
                }), r.getData({
                    context: e,
                    callback: function() {
                        parent.LPProxy.initializeModel(), n()
                    }
                })
            }), t.backgroundIntitialization && t.backgroundIntitialization(r), r
        }, c.adjustPreferenceDefaults = function(e) {
            e.disablepasswordmanagerasked = !1
        }, c.getPreference = function(e) {
            return g_userprefs.hasOwnProperty(e) ? g_userprefs[e] : g_gblprefs[e]
        }, c.setUserPreference = function(e, n) {
            g_userprefs[e] = n
        }, c.setGlobalPreference = function(e, n) {
            g_gblprefs[e] = n
        }, c.writePreferences = function() {}
    }(LPPlatform);
//# sourceMappingURL=sourcemaps/platformBackgroundFrame.js.map