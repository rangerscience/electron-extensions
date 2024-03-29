var ApplicationDialog = function(t) {
    EditableFieldsDialog.call(this, t, {
        closeButtonEnabled: !0,
        maximizeButtonEnabled: !0,
        dynamicHeight: !0,
        type: Application
    })
};
ApplicationDialog.prototype = Object.create(EditableFieldsDialog.prototype), (ApplicationDialog.prototype.constructor = ApplicationDialog).prototype.open = function(t) {
    EditableFieldsDialog.prototype.open.call(this, $.extend(t, {
        sourceFunction: LPProxy.getApplicationModel,
        title: t.vaultItem ? Strings.translateString("Edit Application") : Strings.translateString("Clone Application")
    }))
}, ApplicationDialog.prototype.initialize = function(t) {
    var i;
    EditableFieldsDialog.prototype.initialize.apply(this, arguments), this.addFavButton().appendChild(this.editFormFieldsButton.get(0)), this.inputFields.password.getElement().LP_addPasswordMeter(this.inputFields.unencryptedUsername.getElement())
};
//# sourceMappingURL=sourcemaps/applicationDialog.js.map