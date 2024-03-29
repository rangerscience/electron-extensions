var VerifyEmailDialog = function(t) {
    Dialog.call(this, t, {
        dynamicHeight: !0,
        closeButtonEnabled: !0,
        title: Strings.translateString("Verify Your Email Address"),
        nextButtonText: Strings.translateString("Send Verification Email"),
        buttonAlign: this.CENTER_ALIGN
    })
};
VerifyEmailDialog.prototype = Object.create(Dialog.prototype), (VerifyEmailDialog.prototype.constructor = VerifyEmailDialog).prototype.handleSubmit = function() {
    var t;
    t = this, LPRequest.makeRequest(LPProxy.sendVerificationEmail, {
        parameters: t.data.email,
        success: function(t) {
            Topics.get(Topics.SUCCESS).publish(t)
        }
    })
};
//# sourceMappingURL=sourcemaps/verifyEmailDialog.js.map