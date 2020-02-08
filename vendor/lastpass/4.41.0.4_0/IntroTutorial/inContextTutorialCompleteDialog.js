var InContextTutorialCompleteDialog = function(t) {
    Dialog.call(this, t, {
        closeButtonEnabled: !1,
        maximizeButtonEnabled: !1,
        dynamicHeight: !1,
        hideHeader: !0,
        hideButtons: !0,
        confirmOnClose: !1
    })
};
InContextTutorialCompleteDialog.prototype = Object.create(Dialog.prototype), (InContextTutorialCompleteDialog.prototype.constructor = InContextTutorialCompleteDialog).prototype.initialize = function(t) {
    Dialog.prototype.initialize.apply(this, arguments);
    var o = this;
    bg.IntroTutorial.getState(function(t) {
        var o = t.inContextOnboardingStep;
        o && "try_autofill" == o && bg.IntroTutorial.setState({
            isAllSet: !0
        })
    }), o.imDoneButton = t.find("#imDone").bind("click", function() {
        bg.sendLpImprove("onboardingtour::complete", {
            action: "imdone",
            version: "incontext"
        }), bg.removeModalOverlay(), o.close()
    }), o.exploreMyVault = t.find("#exploreMyVault").bind("click", function() {
        bg.sendLpImprove("onboardingtour::complete", {
            action: "exploremyvault",
            version: "incontext"
        }), bg.removeModalOverlay(), bg.openvault(), o.close()
    })
}, InContextTutorialCompleteDialog.prototype.close = function() {
    var t = Dialog.prototype.close.apply(this, arguments);
    return t && (LPProxy.setPreferences("showIntroTutorial", !1), bg.IntroTutorial.setState({
        enabled: !1,
        domain: null,
        firstLogin: !0,
        name: null,
        isInContext: !1,
        isLoginTheLastPassWay: !1,
        inContextOnboardingStep: null,
        isAllSet: !1
    })), t
}, InContextTutorialCompleteDialog.prototype.getSize = function() {
    return {
        "max-height": "100%",
        "max-width": "100%"
    }
}, InContextTutorialCompleteDialog.prototype.setup = function(t, o) {
    var e = t.find(".topText"),
        n = t.find(".bottomText"),
        i = "fullycompleted";
    switch (bg.sendLpImprove("onboardingtour::view_onboarding_tour_complete", {
        origin: i,
        version: "incontext"
    }), o.textChoice) {
        case "completed":
            e.text(Strings.translateString("You've got the basics down!")), n.text(Strings.translateString("Now that you know how to save and fill passwords, let's see what else LastPass can do."));
            break;
        case "skipped":
            e.text(Strings.translateString("You're all set!")), n.text(Strings.translateString("LastPass will automatically save sites as you browse. Now check out your Vault to start using LastPass."))
    }
    o.css && t.css(o.css), o.alignBottom && t.css({
        top: "auto",
        right: "auto",
        bottom: 15,
        left: 30
    })
};
//# sourceMappingURL=sourcemaps/IntroTutorial/inContextTutorialCompleteDialog.js.map