var ExtensionCreateAccountSimple = function(t) {
    ExtensionCreateAccount.call(this, t, {
        views: [{
            selector: "#emailEntry",
            nextButtonText: Strings.translateString("Create Account")
        }, {
            selector: "#mpEntry",
            nextButtonText: Strings.translateString("Unlock my Vault")
        }],
        additionalHeaderClasses: ["icon"],
        nextButtonText: Strings.translateString("Create Account")
    })
};
ExtensionCreateAccountSimple.prototype = Object.create(ExtensionCreateAccount.prototype), ExtensionCreateAccountSimple.prototype.constructor = ExtensionCreateAccountSimple,
    function() {
        var i;
        ExtensionCreateAccountSimple.prototype.initialize = function(t) {
            ExtensionCreateAccount.prototype.initialize.apply(this, arguments);
            var e = this;
            e.data.version = "sso";
            var n = new FieldToolTip({
                    parentEl: t,
                    isPopup: e.data.isPopup
                }),
                o;
            i = new EmailToolTip({
                toolTipEl: t.find("#mpCurrentEmail"),
                parentEl: $("body"),
                emailField: e.inputFields.email,
                backActionFn: function() {
                    e.showPreviousView()
                }
            }), $("body").addClass("login-background"), t.find("#signInBtn").bind("click", function(t) {
                t.preventDefault(), bg.get("LPContentScriptFeatures").react_login ? window.location = "webclient-tab.html" : (bg.sendLpImprove("viewloginform", {
                    version: e.data.version
                }), dialogs.loginSimple.open({
                    isPopup: !1
                }), e.close(!0))
            }), ExtensionCreateAccount.prototype.setBackgroundOverlay(new BackgroundOverlay({
                parentEl: $("body")
            }))
        }, ExtensionCreateAccountSimple.prototype.setNextView = function(t) {
            ExtensionCreateAccount.prototype.setNextView.apply(this, arguments), i && i.toggle(0 < t)
        }
    }();
//# sourceMappingURL=sourcemaps/extensionCreateAccountSimple.js.map