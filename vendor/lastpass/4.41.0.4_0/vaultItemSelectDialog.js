var VaultItemSelectDialog = function(t, e) {
    Dialog.call(this, t, $.extend(e, {
        closeButtonEnabled: !0,
        maximizeButtonEnabled: !0,
        dynamicHeight: !0,
        confirmOnClose: !1
    }))
};
VaultItemSelectDialog.prototype = Object.create(Dialog.prototype), (VaultItemSelectDialog.prototype.constructor = VaultItemSelectDialog).prototype.setup = function(t, e) {
    if (e.items) {
        for (var o = [], i = 0, l = e.items.length; i < l; ++i) o.push(e.items[i].newDisplayObject());
        this.containers.items = new Container(o, $.extend(e.buildOptions, {
            display: VaultItemBaseDisplay.prototype.DISPLAY_LIST,
            additionalItemClasses: "dialogItem noItemButtons",
            allowDrag: !1,
            publishSelect: !1
        })), this.containers.items.initialize(t.find(".vaultItemSelectDialogContainer").get(0))
    }
    LPTools.setContent(t.find(".vaultItemSelectDialogText"), e.text), this.nextButton.text(e.nextButtonText || Strings.Vault.SAVE), this.backButton.text(e.backButtonText || Strings.Vault.CANCEL), Dialog.prototype.setup.apply(this, arguments)
}, VaultItemSelectDialog.prototype.close = function(t) {
    Dialog.prototype.close.apply(this, arguments), t || "function" != typeof this.data.closeHandler || this.data.closeHandler()
}, VaultItemSelectDialog.prototype.handleSubmit = function(t, e) {
    if ("function" == typeof e.handler) {
        var o = this.containers.items.getSelectedModelItems();
        0 < o.length ? (e.handler(o), this.inProcess() || this.close(!0)) : dialogs.alert.open({
            title: Strings.Vault.ERROR,
            text: Strings.translateString("You must select an item.")
        })
    }
};
//# sourceMappingURL=sourcemaps/vaultItemSelectDialog.js.map