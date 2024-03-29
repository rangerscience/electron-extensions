var IntroTutorialCompleteDialog = function(o) {
    Dialog.call(this, o, {
        closeButtonEnabled: !1,
        maximizeButtonEnabled: !1,
        dynamicHeight: !0,
        hideHeader: !0,
        hideButtons: !0,
        confirmOnClose: !1
    })
};
IntroTutorialCompleteDialog.prototype = Object.create(Dialog.prototype), (IntroTutorialCompleteDialog.prototype.constructor = IntroTutorialCompleteDialog).prototype.initialize = function(t, o) {
    function e(o) {
        return a ? bg.sendLpImprove("onboardingtour::complete", {
            source: "congratspage",
            tour: "oms",
            action: o,
            version: "sso"
        }) : bg.sendLpImprove("onboardingtour::complete", {
            source: "congratspage",
            tour: "singlesite",
            action: o,
            version: "sso"
        })
    }

    function n() {
        var o = t.find("#welcomeTutoiralSecondAction");
        o.text(Strings.translateString("Download Importer")), o.show(), o.bind("click", function(o) {
            o.preventDefault(), LPPlatform.showDownloader() ? dialogs.introTutorialHelp.open({
                alignBottom: !0,
                addHide: !0,
                textChoice: "downloadImporter",
                arrow: {
                    orientation: "bottom",
                    position: "left"
                },
                postSetup: function() {
                    window.location = LPProxy.getBaseURL() + "installer"
                }
            }) : window.location = LPProxy.getBaseURL() + "installer", e("importsites"), i.close(!0)
        })
    }
    var i, a, r, l;
    Dialog.prototype.initialize.apply(this, arguments), i = this, a = bg.get("g_one_minute_signup_enabled"), r = t.find("#noThanks, #btnClose"), l = t.find("#siteName"), n(), o && o.tutorialState && o.tutorialState.name && l.text(" " + o.tutorialState.name + " "), r.bind("click", function(o) {
        e("nothanks"), o.preventDefault(), i.close(!0)
    }), LPProxy.setPreferences("showIntroTutorial", !1), bg.IntroTutorial.setState({
        enabled: !1
    })
};
//# sourceMappingURL=sourcemaps/IntroTutorial/introTutorialCompleteDialog.js.map