LPBackgroundRequester = function(h) {
    return function(n, t) {
        var i = this,
            a = null,
            o = !1,
            r = [],
            c, s = (t = t || {}).interfaceDefinition,
            u = Date.now(),
            f = function(e) {
                LPMessaging.handleResponse(e)
            },
            d = function(e, n) {
                LPMessaging.handleRequest(s, e, function(e) {
                    l({
                        type: "contentScriptResponse",
                        data: e,
                        frameID: n
                    })
                }, {
                    context: t.reflectionContext,
                    additionalArguments: n
                })
            },
            l = function(n) {
                n.sourceFrameID = a, LPMessaging.makeRequest(c, n, function(e) {
                    l({
                        type: "contentScriptResponse",
                        data: e,
                        frameID: n.frameID || 0
                    })
                })
            },
            m = function(e) {
                if (null === a && e.request.initializationID === u) {
                    "undefined" != typeof Topics && Topics.get(Topics.REQUEST_FRAMEWORK_INITIALIZED).publish(e, i), a = e.frameID, o = !1, c({
                        type: "initialized",
                        sourceFrameID: a
                    });
                    for (var n = 0, t = r.length; n < t; ++n) r[n]()
                }
            },
            p = function(e) {
                var n = t.reflectionContext || window;
                "undefined" != typeof LPPlatform && LPPlatform.onLoad ? LPPlatform.onLoad(n, e) : "loading" === n.document.readyState ? n.addEventListener("DOMContentLoaded", e) : e()
            },
            g = (e = function(e) {
                if (e.frameID === a) switch (e.type) {
                    case "backgroundResponse":
                    case "contentScriptResponse":
                        f(e.data);
                        break;
                    case "contentScriptRequest":
                        d(e.data, e.sourceFrameID)
                } else "initialization" === e.type && m(e.data)
            }, h.Raven ? h.Raven.wrap(e) : e),
            e, I = function(e) {
                p(function() {
                    c({
                        type: "initialize",
                        data: {
                            initializationID: u,
                            interfaceName: t.interfaceName,
                            top: t.mainRequestFramework,
                            url: h.location.href,
                            childFrameCount: document.getElementsByTagName("iframe").length,
                            frameIdentity: e
                        }
                    })
                })
            };
        this.initialize = function(e) {
            null !== a || o || (c = n(g, R), t.frameIdentityManager ? t.frameIdentityManager.getFrameIdentity(I) : I(), o = !0), e && r.push(e)
        }, this.sendRequest = function(e) {
            null === a ? this.initialize(function() {
                l(e)
            }) : l(e)
        };
        var R = function() {
            a = null, r = []
        }
    }
}(this);
//# sourceMappingURL=sourcemaps/backgroundRequester.js.map