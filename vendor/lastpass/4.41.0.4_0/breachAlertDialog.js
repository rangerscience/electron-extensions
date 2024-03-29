var BreachAlertDialog = function(t) {
    Dialog.call(this, t, {
        title: Strings.translateString("This site was affected by a breach!"),
        dynamicHeight: !0,
        responsive: !1,
        closeButtonEnabled: !0,
        buttonsInsideContent: !0
    }), this.breached = ""
};
BreachAlertDialog.prototype = Object.create(Dialog.prototype), (BreachAlertDialog.prototype.constructor = BreachAlertDialog).prototype.initialize = function() {
    var t;
    Dialog.prototype.initialize.apply(this, arguments), t = this, $("#breachAlertDialogAction").bind("click", function() {
        t.submit()
    })
}, BreachAlertDialog.prototype.setupButtons = function() {}, BreachAlertDialog.prototype.close = function() {
    Dialog.prototype.close.apply(this, arguments), LPPlatform.closePopup()
}, BreachAlertDialog.prototype.setDynamicHeight = function() {
    var t = Dialog.prototype.setDynamicHeight.apply(this, arguments);
    t && this.data.resizer(t, this.$element.width())
}, BreachAlertDialog.prototype.setup = function(t, e) {
    e.notification && ($("#breachAlertDialogName").text(" " + e.notification.name), $("#breachAlertDialogUsername").text(" " + e.notification.username), this.breached = e.notification.breached), Dialog.prototype.setup.apply(this, arguments)
}, BreachAlertDialog.prototype.handleSubmit = function() {
    bg.openURL(bg.get("base_url") + "misc_challenge.php?breachid=" + this.breached), this.close()
};
//# sourceMappingURL=sourcemaps/breachAlertDialog.js.map