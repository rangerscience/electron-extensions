var DuplicatePasswordDialog = function(t) {
    Dialog.call(this, t, {
        title: Strings.translateString("Duplicate Password"),
        dynamicHeight: !0,
        responsive: !1,
        closeButtonEnabled: !0,
        buttonsInsideContent: !0
    })
};
DuplicatePasswordDialog.prototype = Object.create(Dialog.prototype), (DuplicatePasswordDialog.prototype.constructor = DuplicatePasswordDialog).prototype.initialize = function() {
    var t;
    Dialog.prototype.initialize.apply(this, arguments), t = this, $("#duplicatePasswordDialogDisableSite").bind("click", function() {
        bg.disablesitealert(t.data.notification.aid), t.close()
    }), $("#duplicatePasswordDialogDisableAll").bind("click", function() {
        bg.disableallalerts(), t.close()
    }), $("#duplicatePasswordDialogAction").bind("click", function() {
        t.submit()
    })
}, DuplicatePasswordDialog.prototype.setupButtons = function() {}, DuplicatePasswordDialog.prototype.close = function() {
    Dialog.prototype.close.apply(this, arguments), LPPlatform.closePopup()
}, DuplicatePasswordDialog.prototype.setDynamicHeight = function() {
    var t = Dialog.prototype.setDynamicHeight.apply(this, arguments);
    t && this.data.resizer(t, this.$element.width())
}, DuplicatePasswordDialog.prototype.setup = function(t, i) {
    i.notification && ($("#duplicatePasswordDialogName").text(" " + i.notification.name), $("#duplicatePasswordDialogUsername").text(" " + i.notification.username)), Dialog.prototype.setup.apply(this, arguments)
}, DuplicatePasswordDialog.prototype.handleSubmit = function() {
    bg.openURL("https://lastpass.com/?securitychallenge=1"), this.close()
};
//# sourceMappingURL=sourcemaps/duplicatePasswordDialog.js.map