var CreateCreditMonitoringDialog = function(t) {
    Dialog.call(this, t, {
        additionalHeaderClasses: ["icon"],
        dynamicHeight: !0,
        title: Strings.translateString("Create Credit Monitoring Profile"),
        nextButtonText: Strings.translateString("Create New Profile")
    })
};
CreateCreditMonitoringDialog.prototype = Object.create(Dialog.prototype), (CreateCreditMonitoringDialog.prototype.constructor = CreateCreditMonitoringDialog).prototype.initialize = function() {
    Dialog.prototype.initialize.apply(this, arguments), this.nextButton.addClass("dynamicWidth")
}, CreateCreditMonitoringDialog.prototype.setup = function() {
    if (function(e) {
            for (var t = [], i = LPProxy.getFormFills(), n = 0, o = i.length; n < o; ++n) {
                var r = i[n];
                "1" !== r._model._data.profiletype && t.push(r)
            }
            e.containers.formFill = new Container(t, {
                display: VaultItemBaseDisplay.prototype.DISPLAY_LIST,
                additionalItemClasses: "creditMonitoringItem",
                allowDrag: !1,
                allowDrop: !1,
                excludeActions: [Constants.ACTION_SHARE],
                multiSelect: !1,
                publishSelect: !1,
                selectCallback: function(t) {
                    0 === t ? e.nextButton.text(Strings.translateString("Create New Profile")) : e.nextButton.text(Strings.translateString("Enable Credit Monitoring"))
                }
            })
        }(this), this.containers.formFill.isEmpty()) document.getElementById("createCreditMonitoringProfile").textContent = Strings.translateString("None available");
    else {
        var t = document.getElementById("createCreditMonitoringProfile");
        LPTools.removeDOMChildren(t), this.containers.formFill.initialize(t)
    }
    this.nextButton.text(Strings.translateString("Create New Profile")), Dialog.prototype.setup.apply(this, arguments)
}, CreateCreditMonitoringDialog.prototype.handleSubmit = function() {
    var t = this.containers.formFill.getSelectedModelItems();
    if (0 < t.length) {
        var e = t[0];
        dialogs.formFill.open({
            vaultItem: e,
            show: !1,
            postSetup: function(e) {
                e.inputFields.creditmon.setValue(!0), e.performValidate({
                    data: e.getData(!1),
                    callback: function(t) {
                        t ? e.submit() : (e.setTitle(Strings.translateString("Enable Credit Monitoring")), e.$element.show(), dialogs.alert.open({
                            title: Strings.translateString("Error"),
                            text: Strings.translateString("Please correct the validation errors and then click Save to enable credit monitoring.")
                        }))
                    }
                })
            }
        })
    } else dialogs.formFill.open({
        title: this.getTitle(),
        defaultData: {
            creditmon: !0
        }
    });
    this.close(!0)
};
//# sourceMappingURL=sourcemaps/createCreditMonitoringDialog.js.map