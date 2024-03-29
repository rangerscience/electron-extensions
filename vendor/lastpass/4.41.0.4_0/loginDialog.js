var LoginDialog = function(o, t) {
    Dialog.call(this, o, $.extend({
        additionalHeaderClasses: ["icon", "leftIcon"],
        dynamicHeight: !0,
        responsive: !1,
        hideHeaderTitle: !0,
        confirmOnClose: !1,
        title: Strings.translateString("Log In"),
        closeButtonEnabled: !0
    }, t))
};
LoginDialog.prototype = Object.create(Dialog.prototype), (LoginDialog.prototype.constructor = LoginDialog).prototype.initialize = function(o) {
    var t, a, i;
    Dialog.prototype.initialize.apply(this, arguments), t = $(window), a = $(".inputCapsMatter"), t.bind("capsOn", function(o) {
        a.addClass("isCaps")
    }), t.bind("capsOff", function(o) {
        a.removeClass("isCaps")
    }), t.capslockstate(), a.addClass(t.capslockstate("state")), i = this, $("#forgotPassword").bind("click", function() {
        LPPlatform.openURL(LPPlatform.getBaseURL() + "forgot.php"), i.close()
    }), $("#newToLastPass").bind("click", function() {
        i.data.isPopup ? bg.LPPlatform.openTabDialog("createAccount") : dialogs.createAccount.open(), i.close()
    }), $("#logInButton").bind("click", function() {
        i.submit()
    }), o.find(".showKeyboard").bind("click", function() {
        i.data.isPopup ? (LPPlatform.openKeyboard(), i.close()) : i.toggleKeyboard()
    })
}, LoginDialog.prototype.validate = function(o) {
    var t = Dialog.prototype.validate.apply(this, arguments);
    return "" === o.email && (this.addError("email", Strings.translateString("Please enter your email.")), t = !1), "" === o.password && (this.addError("password", Strings.translateString("Please enter your password.")), t = !1), t
};
//# sourceMappingURL=sourcemaps/loginDialog.js.map