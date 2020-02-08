var SharingKeyDialog = function(e) {
    Dialog.call(this, e, {
        additionalHeaderClasses: ["icon"],
        dynamicHeight: !0,
        responsive: !1,
        title: Strings.translateString("Generate Sharing Key"),
        nextButtonText: Strings.translateString("Generate")
    })
};
SharingKeyDialog.prototype = Object.create(Dialog.prototype), (SharingKeyDialog.prototype.constructor = SharingKeyDialog).prototype.handleSubmit = function(e, t) {
    LPRequest.makeRequest(LPProxy.generateSharingKeys, {
        success: t.callback,
        showTimeWarning: !1
    })
};
//# sourceMappingURL=sourcemaps/sharingKeyDialog.js.map