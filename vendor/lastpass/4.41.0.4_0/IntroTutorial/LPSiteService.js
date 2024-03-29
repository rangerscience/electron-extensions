var LPSite = function() {
        "use strict";
        var e = function(e) {
            return this.displayName = "", this.domains = [""], this.loginURL = "", this.logoutURL = "", this.isSessionMaintained = !0, $.extend(this, e)
        };
        return e.prototype.getDomainCode = function() {
            return this.domains && this.domains[0] ? this.domains[0].charAt(0) : ""
        }, e.prototype.goToLogin = function() {
            this.goToPage(this.loginURL)
        }, e.prototype.isOnLoginPage = function(e) {
            var t = e.URL.toLowerCase();
            return (t.includes("login") || t.includes("signin") || t.includes("facebook.com/?stype=lo") || t.includes("accounts.google.com/addsession") || t.includes("linkedin.com/uas/login") || t.includes("login.salesforce.com") || t.includes("dropbox.com/login?src=logout")) && null !== this.getTrackingEl(e)
        }, e.prototype.logMeOut = function(e) {
            this.goToLogin()
        }, e.prototype.getTrackingEl = function(e) {}, e.prototype.goToPage = function(e, t) {
            t ? t.location = e : bg && bg.LPPlatform && bg.LPPlatform.navigateTab && "function" == typeof bg.LPPlatform.navigateTab && bg.LPPlatform.navigateTab({
                url: e
            })
        }, e.prototype.getCustomOptions = function() {
            return !1
        }, e
    }(),
    LPSiteService = function(e, i) {
        "use strict";
        var s = [new e({
                displayName: "Google",
                domains: ["google.com"],
                logoutURL: "https://accounts.google.com/logout",
                loginURL: "https://accounts.google.com/signin/v2/sl/pwd?flowEntry=ServiceLogin&flowName=GlifWebSignIn",
                userTypes: ["US", "International", "Enterprise"],
                isSessionMaintained: !1,
                logMeOut: function(e) {
                    this.goToPage(this.logoutURL)
                },
                getTrackingEl: function(e) {
                    var t = e.getElementById("Email");
                    if (t && !t.className.includes("hidden") || (t = e.getElementById("Passwd")), t) return t;
                    var o = e.getElementById("identifierId");
                    if (!o) {
                        var n = document.getElementsByName("password");
                        0 < n.length && (o = n[0])
                    }
                    return o = o || i("#view_container").find("form li")[1]
                }
            }), new e({
                displayName: "Facebook",
                domains: ["facebook.com"],
                loginURL: "https://www.facebook.com/login.php?login_attempt=1&lwv=100",
                logoutURL: "https://www.facebook.com/help/contact/logout?id=260749603972907",
                userTypes: ["International", "US"],
                isSessionMaintained: !0,
                getTrackingEl: function(e) {
                    var t = e.getElementById("email");
                    return t = t || e.getElementById("pass")
                },
                logMeOut: function(e, t) {
                    if (e)
                        if (e.URL.toLowerCase().includes("help/contact/logout?id=260749603972907")) {
                            LPFrame.openDialog(t, {
                                addHide: !1,
                                modal: !0,
                                textChoice: "loggingout"
                            }).css({
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0,
                                margin: "auto"
                            });
                            var o = e.getElementsByName("logout");
                            o && 1 === o.length ? setTimeout(function() {
                                e.getElementsByName("logout")[0].click()
                            }, 1e3) : this.logMeOut(e, t)
                        } else e.URL.toLowerCase().includes("help/contact/260749603972907") ? (this.goToPage(this.loginURL, e), bg && bg.get("g_isedge") && this.logMeOut(e, t)) : this.goToPage(this.logoutURL, e)
                }
            }), new e({
                displayName: "PayPal",
                domains: ["paypal.com"],
                loginURL: "https://www.paypal.com/signin",
                logoutURL: "https://www.paypal.com/signout",
                userTypes: ["International", "US"],
                isSessionMaintained: !0,
                getTrackingEl: function(e) {
                    var t = e.getElementById("email");
                    return t && t.type.includes("hidden") && (t = e.getElementById("password")), t
                },
                logMeOut: function(e) {
                    e && (e.URL.toLowerCase().includes("myaccount") ? this.goToPage(this.logoutURL, e) : this.goToPage(this.loginURL, e))
                },
                getCustomOptions: function() {
                    return IntroTutorialDialogOptions.InContextIntroTutorialDialogNoArrowOptions
                }
            }), new e({
                displayName: "Netflix",
                domains: ["netflix.com"],
                loginURL: "https://www.netflix.com/login",
                logoutURL: "https://www.netflix.com/signout",
                isSessionMaintained: !0,
                userTypes: ["US"],
                getTrackingEl: function(e) {
                    var t = e.getElementsByName("emailOrPhoneNumber")[0];
                    return (t = (t = t || e.getElementsByName("email")[0]) || e.getElementById("id_userLoginId")) && t.type.includes("hidden") && (t = e.getElementsByName("password")[0]), t
                },
                logMeOut: function(e) {
                    var t;
                    e.URL.toLowerCase().includes("logout") ? this.goToPage(this.loginURL, e) : this.goToPage(this.logoutURL, e)
                }
            }), new e({
                displayName: "LinkedIn",
                domains: ["linkedin.com"],
                loginURL: "https://www.linkedin.com/uas/login",
                logoutURL: "https://www.linkedin.com/m/logout",
                isSessionMaintained: !0,
                userTypes: ["International", "Enterprise"],
                getTrackingEl: function(e) {
                    var t = e.getElementById("username");
                    return t && t.type.includes("hidden") && (t = e.getElementById("password")), t
                },
                logMeOut: function(e) {
                    this.goToPage(this.logoutURL)
                }
            }), new e({
                displayName: "Salesforce",
                domains: ["salesforce.com"],
                loginURL: "https://login.salesforce.com/",
                isSessionMaintained: !1,
                userTypes: ["Enterprise"],
                getTrackingEl: function(e) {
                    var t = e.getElementById("username");
                    return t && t.type.includes("hidden") && (t = e.getElementById("password")), t
                },
                logMeOut: function(e) {
                    this.goToPage(this.loginURL)
                }
            }), new e({
                displayName: "Dropbox",
                domains: ["dropbox.com"],
                loginURL: "https://www.dropbox.com/login",
                logoutURL: "https://www.dropbox.com/logout",
                isSessionMaintained: !0,
                userTypes: ["Enterprise"],
                getTrackingEl: function(e) {
                    var t = e.querySelectorAll("input[type=email]")[0];
                    return t = t || e.querySelectorAll("input[type=password]")[0]
                },
                logMeOut: function(e) {
                    this.goToPage(this.logoutURL)
                },
                getCustomOptions: function() {
                    return IntroTutorialDialogOptions.InContextIntroTutorialDialogFlippedOptions
                }
            })],
            t = function() {
                return bg.get("g_enterpriseuser") && "2" !== bg.get("g_enterprisemodel") ? o("Enterprise") : !bg || "function" != typeof bg.get_lplanguage || "en-us" !== bg.get_lplanguage().toLowerCase() && "en_us" !== bg.get_lplanguage().toLowerCase() || "US" !== bg.get("countryfromip") ? o("International") : o("US")
            },
            o = function(t) {
                return s.filter(function(e) {
                    return e.userTypes.includes(t)
                })
            },
            n;
        return {
            getSites: t,
            getSite: function(e) {
                if (e)
                    for (var t = 0; t < s.length; t++)
                        for (var o = s[t], n = 0; n < o.domains.length; n++)
                            if (o.domains[n] === e) return o;
                return null
            }
        }
    }(LPSite, jQuery);
//# sourceMappingURL=sourcemaps/IntroTutorial/LPSiteService.js.map