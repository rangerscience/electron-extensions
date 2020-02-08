var RestrictedSharingDialog = function(t) {
    Dialog.call(this, t, {
        additionalHeaderClasses: [],
        dynamicHeight: !0,
        buttonsInsideContent: !0,
        title: Strings.translateString("It's time to upgrade!"),
        closeButtonEnabled: !0,
        hidePreviousDialogs: !0
    })
};
RestrictedSharingDialog.prototype = Object.create(Dialog.prototype), (RestrictedSharingDialog.prototype.constructor = RestrictedSharingDialog).prototype.initialize = function(t) {
    var i;
    Dialog.prototype.initialize.apply(this, arguments), i = this, document.querySelector("#dialogCloseButton").classList.remove("dialogCloseButton"), document.querySelector("#dialogCloseButton").innerHTML = "&#10006;", t.find("#dialogOverlay").bind("click", function() {
        i.close(!0)
    }), t.find("#dialogCloseButton").bind("click", function() {
        i.close(!0)
    }), t.find("#restricted-sharing-no-thanks").bind("click", function() {
        i.close(!0)
    }), t.find("#restricted-sharing-go-premium").bind("click", function() {
        LPPlatform.openURL("https://lastpass.com/features_joinpremium4.php?a=1"), i.close(!0)
    })
}, RestrictedSharingDialog.prototype.postSetup = function(t) {
    Dialog.prototype.postSetup.apply(this, arguments)
};
//# sourceMappingURL=sourcemaps/restrictedSharingDialog.js.map