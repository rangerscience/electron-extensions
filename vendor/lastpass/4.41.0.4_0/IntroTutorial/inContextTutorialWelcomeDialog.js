var InContextTutorialWelcomeDialog = function(e) {
    Dialog.call(this, e, {
        closeButtonEnabled: !1,
        maximizeButtonEnabled: !1,
        dynamicHeight: !1,
        hideHeader: !0,
        hideButtons: !0,
        confirmOnClose: !1
    })
};
InContextTutorialWelcomeDialog.prototype = Object.create(Dialog.prototype), InContextTutorialWelcomeDialog.prototype.constructor = InContextTutorialWelcomeDialog,
    function(e) {
        function p(t, e, o, n) {
            var i = new lpTile({
                id: o,
                name: n.displayName,
                tileClass: "tile-sm",
                iconSrc: IntroTutorialImages.getImage(n.displayName.toLowerCase(), "square"),
                clickHandler: function(e) {
                    bg.removeModalOverlay(), e.preventDefault(), t.close(!0), bg.sendLpImprove("onboardingtour::selected", {
                        action: n.getDomainCode(),
                        version: "incontext"
                    }), bg.IntroTutorial.setState({
                        enabled: !0,
                        domains: n.domains,
                        name: n.displayName,
                        tile: n.getDomainCode(),
                        isInContext: !0,
                        firstLogin: !0,
                        inContextOnboardingStep: "add_first_site",
                        isAllSet: !1
                    }), bg.get("g_issafari") || bg.get("g_issafari_appext") ? bg.openURL(n.loginURL) : n.goToLogin()
                }
            });
            e.append(i.$tileEl)
        }
        InContextTutorialWelcomeDialog.prototype.initialize = function(e) {
            Dialog.prototype.initialize.apply(this, arguments);
            for (var o = this, t = e.find("#tileContainer"), n = LPSiteService.getSites(), i = 0; i < n.length; i++) p(o, t, "#tile" + (i + 1), n[i]);

            function a(e) {
                e.preventDefault(), bg.sendLpImprove("onboardingtour::selected", {
                    action: "nothanks",
                    version: "incontext"
                }), LPProxy.setPreferences("showIntroTutorial", !1), bg.IntroTutorial.completeTutorial({
                    textChoice: "skipped"
                }), o.close(!0)
            }
            var r = !0,
                l = LPProxy.getPreference("ShowIntroTutorialLater", null);
            l && Date.now() >= new Date(l) && (r = !1);
            var s = e.find("#showLater"),
                c = e.find("#noThanks"),
                g;
            r ? (c.hide(), s.show(), s.bind("click", function(e) {
                e.preventDefault(), bg.sendLpImprove("onboardingtour::selected", {
                    action: "later",
                    version: "incontext"
                });
                var t = new Date;
                t.setDate(t.getDate() + 3), LPProxy.setPreferences("ShowIntroTutorialLater", t.toString()), bg.IntroTutorial.completeTutorial({
                    textChoice: "skipped"
                }), o.close(!0)
            })) : (s.hide(), c.show(), c.bind("click", a)), e.find("#btnClose").bind("click", a), bg.sendLpImprove("onboardingtour::seen", {
                version: "incontext"
            })
        }, InContextTutorialWelcomeDialog.prototype.getSize = function() {
            return {
                "max-height": "100%",
                "max-width": "100%"
            }
        }, InContextTutorialWelcomeDialog.prototype.open = function(e) {
            Dialog.prototype.open.apply(this, arguments), bg.showModalOverlay()
        }
    }(jQuery);
//# sourceMappingURL=sourcemaps/IntroTutorial/inContextTutorialWelcomeDialog.js.map