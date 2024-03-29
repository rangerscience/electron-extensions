var NotificationDialog = function(t) {
    Dialog.call(this, t, {
        additionalHeaderClasses: ["icon", "leftIcon"],
        dynamicHeight: !0,
        responsive: !1,
        closeButtonEnabled: !0,
        buttonsInsideContent: !0
    })
};
NotificationDialog.prototype = Object.create(Dialog.prototype), (NotificationDialog.prototype.constructor = NotificationDialog).prototype.setupButtons = function() {
    var t;
    t = this, $("#notificationDialogFeedback").bind("click", function() {
        bg.openURL(bg.get("base_url") + "feedback.php"), t.close()
    }), $("#notificationDialogTryAgain").bind("click", function() {
        bg.get("LPContentScriptFeatures").react_login ? window.location.href = "webclient-popover.html" : (ExtensionDropdown.openDialog("loginTab"), t.close())
    }), $("#notificationDialogClose").bind("click", function() {
        t.close()
    }), $("#notificationDialogDisableMulti").bind("click", function() {
        bg.openURL(bg.get("base_url") + t.notification.multifactor_disable_url), t.close()
    }), $("#notificationDialogCreateAccount").bind("click", function() {
        bg.get("LPContentScriptFeatures") && "context" === bg.get("LPContentScriptFeatures").intro_tutorial_version ? bg.get("g_isedge") ? (ExtensionDropdown.openDialog("createAccountIcon"), t.close(!0)) : bg.showModalOverlay(function() {
            ExtensionDropdown.openDialog("createAccountIcon"), t.close(!0)
        }) : (bg.LPPlatform.openTabDialog("createAccountSimple"), t.close(!0))
    }), $("#notificationDialogStartTrial").bind("click", function() {
        bg.start_trial(), t.close()
    })
}, NotificationDialog.prototype.setup = function(t, o) {
    if (LPFeatures.updateFeatures({
            multifactor_disable: !0
        }), o.notification) {
        LPTools.setContent($("#notificationDialogMessage"), o.notification.msg);
        var i = [];
        o.notification.showFeedback && i.push("feedback"), o.notification.showLogin && i.push("tryAgain"), o.notification.showCreateAccount && i.push("createAccount"), o.notification.multifactor_disable_url && i.push("multifactor"), o.notification.showStartTrial && i.push("trial"), 0 === i.length && i.push("default"), this.dialogContent.children().first().attr("class", i.join(" "))
    }
    Dialog.prototype.setup.apply(this, arguments)
}, NotificationDialog.prototype.handleSubmit = function() {
    this.close()
};
//# sourceMappingURL=sourcemaps/notificationDialog.js.map