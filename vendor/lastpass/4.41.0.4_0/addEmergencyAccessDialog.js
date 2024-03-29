var AddEmergencyAccessDialog = function(t) {
    VaultItemDialog.call(this, t, {
        additionalHeaderClasses: ["icon"],
        dynamicHeight: !0,
        title: Strings.translateString("Setup Emergency Access"),
        nextButtonText: Strings.translateString("Send Invite"),
        buttonAlign: this.RIGHT_ALIGN,
        excludedActions: [Constants.ACTION_EDIT, Constants.ACTION_EMAIL]
    })
};
AddEmergencyAccessDialog.prototype = Object.create(VaultItemDialog.prototype), (AddEmergencyAccessDialog.prototype.constructor = AddEmergencyAccessDialog).prototype.open = function(t) {
    VaultItemDialog.prototype.open.call(this, $.extend(t, {
        sourceFunction: LPProxy.getEmergencyAccessRecipientModel,
        defaultData: {
            hours_to_override: 48
        }
    }))
}, AddEmergencyAccessDialog.prototype.add = function(t) {
    var e;
    (new EmergencyAccessRecipient).addFromDialog(t), bg.sendLpImprove("added_emergency_contact")
}, AddEmergencyAccessDialog.prototype.setup = function() {
    VaultItemDialog.prototype.setup.apply(this, arguments), this.vaultItem ? (this.inputFields.username.disable(), this.nextButton.text(Strings.translateString("Save"))) : (this.inputFields.username.enable(), this.nextButton.text(Strings.translateString("Send Invite")))
};
//# sourceMappingURL=sourcemaps/addEmergencyAccessDialog.js.map