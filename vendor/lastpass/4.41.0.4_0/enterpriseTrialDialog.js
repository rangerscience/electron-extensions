var EnterpriseTrialDialog = function(t) {
    Dialog.call(this, t, {
        additionalHeaderClasses: ["icon"],
        dynamicHeight: !0,
        nextButtonText: Strings.translateString("Try Free for 14 Days"),
        buttonsInsideContent: !0
    })
};
EnterpriseTrialDialog.prototype = Object.create(Dialog.prototype), (EnterpriseTrialDialog.prototype.constructor = EnterpriseTrialDialog).prototype.initialize = function(t) {
    var i;
    Dialog.prototype.initialize.apply(this, arguments), i = this, t.find(".nbtn").bind("click", function() {
        i.close()
    })
};
//# sourceMappingURL=sourcemaps/enterpriseTrialDialog.js.map