var IntroTutorialSelectSiteDialog = function(t) {
    Dialog.call(this, t, {
        closeButtonEnabled: !1,
        maximizeButtonEnabled: !1,
        dynamicHeight: !0,
        hideHeader: !0,
        hideButtons: !0,
        confirmOnClose: !1
    })
};
IntroTutorialSelectSiteDialog.prototype = Object.create(Dialog.prototype), IntroTutorialSelectSiteDialog.prototype.constructor = IntroTutorialSelectSiteDialog,
    function(c) {
        IntroTutorialSelectSiteDialog.prototype.getBigIcon = function(t) {
            var e = null;
            return c && (e = c.getImage(t.toLowerCase(), "large")), e
        }, IntroTutorialSelectSiteDialog.prototype.initialize = function(a) {
            Dialog.prototype.initialize.apply(this, arguments),
                function(e) {
                    var t = a.find("#btnClose");

                    function o(t, e, o) {
                        var i = t.find(e + " .bigIcon"),
                            n = t.find(e + " .launchButton"),
                            a = IntroTutorialSelectSiteDialog.prototype.getBigIcon(name);
                        i.attr("src", c.getImage(o.displayName.toLowerCase(), "large")), n.attr("href", o.loginURL), n.click(o.loginURL, function(t) {
                            t.preventDefault(), bg.sendLpImprove("onboardingtour::selected", {
                                action: o.getDomainCode(),
                                version: "sso"
                            }), bg.IntroTutorial.setState({
                                enabled: !0,
                                domain: o.domain,
                                name: o.displayName,
                                tile: o.getDomainCode(),
                                firstLogin: !0
                            }), o.goToLogin()
                        });
                        var r = t.find(e + " .name"),
                            l = t.find(e + " .overlayHelpText");
                        r.text(name), l.text(l.text() + " " + name)
                    }
                    for (var i = LPSiteService.getSites(), n = 0; n < i.length; n++) o(a, "#tile" + (n + 1), i[n]);
                    t.bind("click", function(t) {
                        t.preventDefault(), e.close(!0), LPPlatform.openTour()
                    })
                }(this)
        }, IntroTutorialSelectSiteDialog.prototype.close = function(t) {
            t ? (bg.sendLpImprove("onboardingtour::selected", {
                action: "nothanks",
                version: "sso"
            }), Dialog.prototype.close.call(this, t)) : dialogs.confirmation.open({
                title: Strings.translateString("Close"),
                text: Strings.translateString("Are you sure you'd like to exit the tutorial?"),
                handler: this.createHandler(this.close, !0)
            })
        }
    }(IntroTutorialImages);
//# sourceMappingURL=sourcemaps/IntroTutorial/introTutorialSelectSiteDialog.js.map