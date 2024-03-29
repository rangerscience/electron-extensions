LPRequest = {},
    function(c) {
        var l = {},
            e = function() {
                for (var e in l) clearTimeout(l[e]);
                l = {}
            },
            t, u, p, g, f, d, o, n;
        Topics.get(Topics.REFRESH_DATA).subscribe(e), Topics.get(Topics.CLEAR_DATA).subscribe(e), c.getNewRequestID = (t = 0, function() {
            return ++t
        }), c.makeRequest = (u = function(r, s) {
            return function() {
                for (var e = 0, t = r.length; e < t; ++e) r[e].unlock();
                s && s.apply(window, arguments)
            }
        }, p = function(r, s) {
            return function() {
                for (var e = 0, t = r.length; e < t; ++e) r[e].lockForUpdate();
                s.apply(window, arguments)
            }
        }, g = function(r, t) {
            var s = function(e) {
                try {
                    Topics.get(Topics.REQUEST_SUCCESS).publish(r), t && (clearTimeout(t), delete l[r.requestID]), e && Topics.get(Topics.SUCCESS).publish(e)
                } catch (e) {
                    LPPlatform.logException(e)
                }
            };
            return r && r.success ? function() {
                var e = arguments,
                    t = r.successMessage;
                0 < e.length && "string" == typeof e[0] && (t = void 0 === t ? e[0] : t, e = Array.prototype.slice.call(e, 1));
                try {
                    r.success.apply(window, e)
                } catch (e) {
                    LPPlatform.logException(e)
                }
                s(t)
            } : s
        }, f = function(r, s) {
            var t = function(e, t) {
                try {
                    switch (s && (clearTimeout(s), delete l[r.requestID]), "object" == typeof t && (e = o(t)), Topics.get(Topics.REQUEST_ERROR).publish(r), e) {
                        case "throttled":
                            return n(t);
                        case "notoken":
                            e = Strings.translateString("No token was provided. Request could not be completed.");
                            break;
                        case "session_expired":
                            e = Strings.translateString("ErrorSessionMsg");
                            break;
                        case "not_allowed":
                            e = Strings.translateString("Your Shared Folder action failed. Please check your permissions before trying again");
                            break;
                        case "invalidxml":
                            e = Strings.translateString("Invalid XML response.");
                            break;
                        case "invalidjson":
                            e = Strings.translateString("Invalid JSON response.");
                            break;
                        case "offline":
                            e = Strings.translateString("This request cannot be completed because you are currently offline.");
                            break;
                        case "1_to_1_restricted_for_free":
                            LPVault.closeShareDialog(), e = LPVault.openRestrictedSharingDialog();
                            break;
                        case "policy":
                            e = Strings.translateString("Sorry, this operation is not allowed by a policy.");
                            break;
                        case "shouldverifyemail":
                            dialogs.verifyEmail.open({
                                email: bg.get("g_username")
                            }), e = null;
                            break;
                        case void 0:
                            e = Strings.Vault.UNEXPECTED_ERROR
                    }
                    Topics.get(Topics.ERROR).publish(e)
                } catch (e) {
                    LPPlatform.logException(e)
                }
            };
            return r && r.error ? r.shouldverifyemail ? void dialogs.verifyEmail.open({
                email: bg.get("g_username")
            }) : function(e) {
                t(e), r.error()
            } : t
        }, d = function(t) {
            return function(e) {
                Topics.get(Topics.REQUEST_STATUS).publish(e, t)
            }
        }, o = function(e) {
            if (!e || void 0 === e.__raven_xhr) return console.log("Unable to read error response object."), e;
            var t = e.__raven_xhr;
            return t.status_code && 429 == t.status_code ? "throttled" : Strings.Vault.UNEXPECTED_ERROR
        }, n = function(e) {
            if (e && void 0 !== e.__raven_xhr) {
                var t = e.__raven_xhr.url,
                    r = Strings.translateString("Too many requests were made in a short time. Please try again later."),
                    s = "Request to " + t + " was throttled.",
                    o;
                (function(e) {
                    return -1 < e.indexOf("deliver_and_add.php") || -1 < e.indexOf("show.php")
                })(t) ? Topics.get(Topics.ERROR).publish(r): console.log(s), LPPlatform.logException(s)
            } else console.log("Request to unknown url was throttled.")
        }, function(e, t) {
            if (t.confirm) {
                var r = t.confirm;
                return delete t.confirm, r.handler = function() {
                    c.makeRequest(e, t)
                }, void Topics.get(Topics.CONFIRM).publish(r)
            }
            t.requestID = c.getNewRequestID();
            var s = null;
            if (LPTools.getOption(t, "showTimeWarning", !0) && (s = setTimeout(function() {
                    i(Strings.translateString("Sorry, this request is taking longer than normal."))
                }, 3e4), l[t.requestID] = s), t.items && LPTools.getOption(t, "lockItems", !1)) {
                var o = t.items;
                o instanceof Array || (o = [o]), e = p(o, e), t.success = u(o, t.success), t.error = u(o, t.error), t.confirm && (t.confirm.closeHandler = u(o))
            }
            var n = g(t, s),
                i = f(t, s),
                a;
            t.params ? a = [{
                params: t.params,
                requestArgs: t.requestArgs,
                success: n,
                error: i,
                status: t.status ? d(t) : null
            }] : ((a = LPTools.getOption(t, "parameters", [])) instanceof Array || (a = [a]), a.push(n), a.push(i)), Topics.get(Topics.REQUEST_START).publish(t);
            try {
                e.apply(window, a)
            } catch (e) {
                LPPlatform.logException(e), i(Strings.Vault.UNEXPECTED_ERROR)
            }
        }), c.makeDataRequest = function(e, t) {
            c.makeRequest(e, $.extend(!0, t, {
                dialogRequest: !1
            }))
        }, c.makeUpdateRequest = function(e, t) {
            c.makeRequest(e, $.extend(!0, t, {
                requestSuccessOptions: {
                    incrementAccountsVersion: !0
                }
            }))
        }, c.makeLockItemUpdateRequest = function(e, t) {
            this.makeUpdateRequest(e, $.extend(t, {
                lockItems: !0
            }))
        }
    }(LPRequest);
//# sourceMappingURL=sourcemaps/request.js.map