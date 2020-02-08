EditableFieldsDialog = function(t, e) {
        (e = e || {}).views = [{
            selector: ".mainView"
        }, {
            selector: ".formFieldsView",
            title: Strings.translateString("Edit Form Fields"),
            dynamicHeight: !1
        }], DialogWithGroupInput.call(this, t, e), this.fieldsElement = null, this.addFieldsButton = null, this.fieldsTable = null, this.postSetupData = null, this.editFormFieldsButton = $(LPTools.buildItemButton(Constants.ACTION_EDIT)), this.editFormFieldsButton.attr("title", Strings.translateString("Edit Form Fields"))
    }, EditableFieldsDialog.prototype = Object.create(DialogWithGroupInput.prototype), EditableFieldsDialog.prototype.constructor = EditableFieldsDialog,
    function() {
        var i = function(t, e) {
            DialogInput.Input.call(this, void 0), this.fieldElements = [], this.container = t, this.parentDialog = e
        };
        ((i.prototype = Object.create(DialogInput.Input.prototype)).constructor = i).prototype.clear = function() {
            LPTools.removeDOMChildren(this.container)
        }, i.prototype.getValue = function() {
            for (var t = [], e = 0, i = this.fieldElements.length; e < i; ++e) {
                var l = this.fieldElements[e];
                l.data.value = l.input.getValue(), t.push($.extend({}, l.data))
            }
            return t
        }, i.prototype.setValue = function(t) {
            LPTools.removeDOMChildren(this.container), this.fieldElements = [];
            for (var e = 0, i = t.length; e < i; ++e) this.addField(t[e]);
            LPTools.addZebraStriping(this.container)
        }, i.prototype.addField = function(t) {
            if ("hidden" !== t.type) {
                var e = LPTools.createElement("tr", "settingsRow");
                e.appendChild(LPTools.createElement("td", "settingLabel", t.name));
                var i = Strings.translateString("Form Field ") + t.name,
                    l = null;
                switch (t.type) {
                    case "radio":
                    case "select":
                    case "select-one":
                        l = LPTools.createElement("input", {
                            class: "dialogInput",
                            type: "text",
                            "aria-label": i
                        });
                        break;
                    case "checkbox":
                        l = LPTools.buildCheckbox(void 0, {
                            checkboxAttributes: {
                                "aria-label": i
                            }
                        });
                        break;
                    default:
                        l = LPTools.createElement("input", {
                            class: "dialogInput",
                            type: t.type,
                            "aria-label": i
                        })
                }
                var a = (p = $(l)).is("input") ? l : p.find("input").get(0),
                    o = new DialogInput.Input(a);
                this.fieldElements.push({
                    data: t,
                    input: o
                }), o.setValue(t.value);
                var s = LPTools.createElement("td", "formFieldValue"),
                    n = LPTools.createElement("div");
                s.appendChild(n), n.appendChild(l), e.appendChild(s);
                var d = LPTools.createElement("div", "rightItemButtons"),
                    r = LPTools.buildItemButton(Constants.ACTION_REMOVE);
                $(r).bind("click", u(this.parentDialog, this.container, e, this.fieldElements, t)), d.appendChild(r), n.appendChild(d), this.container.appendChild(e), "password" === t.type && o.getElement().LP_addPasswordEye({
                    checkPermissionHandler: this.parentDialog.checkViewPasswordHandler
                })
            }
            var p
        };
        var u = function(a, o, s, n, d) {
            return function() {
                for (var t = null, e = 0, i = n.length; e < i; ++e)
                    if (n[e].data === d) {
                        t = e;
                        break
                    } if (null !== t) {
                    var l = function() {
                        o.removeChild(s), LPTools.addZebraStriping(o), n.splice(t, 1)
                    };
                    a.vaultItem ? LPRequest.makeUpdateRequest(LPProxy.deleteField, {
                        parameters: [a.vaultItem, a.vaultItem._data.fields[t]],
                        requestSuccessOptions: {
                            closeDialog: !1
                        },
                        success: function() {
                            l(), a.vaultItem.removeField(t), a.originalData = a.getData(!1)
                        },
                        confirm: {
                            title: Strings.Vault.DELETE,
                            text: Strings.translateString("Are you sure you want to delete field %1?", d.name)
                        }
                    }) : l()
                }
            }
        };
        EditableFieldsDialog.prototype.initialize = function(t) {
            var e;
            DialogWithGroupInput.prototype.initialize.apply(this, arguments), this.formFieldsView = t.find(".formFieldsView"), this.fieldsTable = t.find(".fieldsTable"), this.fieldsElement = t.find(".fieldsElement"), this.addFieldsButton = t.find(".addFormFieldButton"), this.inputFields.fields = new i(this.fieldsElement.get(0), this), this.addFieldsButton.bind("click", (e = this, function() {
                dialogs.addFormField.open({
                    sourceDialog: e
                })
            }))
        }, EditableFieldsDialog.prototype.getNextViewButton = function() {
            return this.editFormFieldsButton
        }, EditableFieldsDialog.prototype.setNextView = function(t) {
            DialogWithGroupInput.prototype.setNextView.apply(this, arguments), 0 < t ? this.editFormFieldsButton.hide() : this.editFormFieldsButton.show()
        }, EditableFieldsDialog.prototype.postSetup = function() {
            DialogWithGroupInput.prototype.postSetup.apply(this, arguments), this.postSetupData = this.getData()
        }, EditableFieldsDialog.prototype.clearFields = function() {
            DialogWithGroupInput.prototype.clearFields.apply(this, arguments), this.postSetupData = null
        }, EditableFieldsDialog.prototype.getData = function() {
            var t = DialogWithGroupInput.prototype.getData.apply(this, arguments),
                e = this.postSetupData;
            if (e && e.fields && t.fields)
                for (var i = t.unencryptedUsername !== e.unencryptedUsername, l = t.password !== e.password, a = null, o = null, s = 0; s < t.fields.length; ++s) {
                    var n = t.fields[s],
                        d = e.fields[s];
                    if (d) {
                        var r = n.value !== d.value;
                        e.unencryptedUsername && e.unencryptedUsername === d.value ? i ? n.value = t.unencryptedUsername : r && null === a ? t.unencryptedUsername = a = n.value : null !== a && (n.value = a) : e.password && e.password === d.value && (l ? n.value = t.password : r && null === o ? t.password = o = n.value : null !== o && (n.value = o))
                    }
                }
            return t
        }, EditableFieldsDialog.prototype.setup = function(t, e) {
            if (e.vaultItem ? this.addFieldsButton.LP_show() : this.addFieldsButton.LP_hide(), this.editFormFieldsButton.LP_hide(), this.$element.removeClass("saveAll"), this.fieldsTable.append(this.fieldsElement), this.formFieldsView.append(this.addFieldsButton), e.defaultData && e.defaultData.save_all || e.vaultItem && e.vaultItem._data.save_all) {
                this.$element.addClass("saveAll");
                var i = t.find(".saveAllFields");
                i.append(this.fieldsElement), i.after(this.addFieldsButton)
            } else e.vaultItem && this.editFormFieldsButton.LP_show();
            DialogWithGroupInput.prototype.setup.apply(this, arguments)
        }, EditableFieldsDialog.prototype.checkViewPassword = function(t) {
            var e;
            this.vaultItem ? this.vaultItem.canViewPassword() ? LPProxy.reprompt((e = this, function() {
                t(), bg.loglogin(e.vaultItem.getID())
            }), {
                types: AccountBaseWithFields.prototype.REPROMPT_TYPE_VIEW_PW
            }) : Topics.get(Topics.ERROR).publish(Strings.translateString("This is a shared site. You are not permitted to view the password.")) : t()
        }
    }();
var AddFormFieldDialog = function(t) {
    Dialog.call(this, t, {
        closeButtonEnabled: !0,
        nextButtonText: Strings.translateString("Add"),
        title: Strings.translateString("Add Form Field"),
        dynamicHeight: !0,
        overlayDialog: !0
    }), this.fieldsInput = null
};
AddFormFieldDialog.prototype = Object.create(Dialog.prototype), (AddFormFieldDialog.prototype.constructor = AddFormFieldDialog).prototype.initialize = function(t) {
    var o, s;
    Dialog.prototype.initialize.apply(this, arguments), (o = this).inputFields.type.onChange((s = !1, function(t) {
        var e = "checkbox" === t;
        if (e !== s) {
            var i = document.getElementById("addFormFieldDialogValue");
            if (LPTools.removeDOMChildren(i), s = e) {
                var l = LPTools.buildCheckbox();
                i.appendChild(l), o.inputFields.value.setElement($(l).find("input"))
            } else {
                var a = LPTools.createElement("input", {
                    class: "dialogInput",
                    type: "text"
                });
                i.appendChild(a), o.inputFields.value.setElement(a)
            }
        }
    }))
}, AddFormFieldDialog.prototype.setup = function(t, e) {
    e.sourceDialog && e.sourceDialog.vaultItem && e.sourceDialog.vaultItem._data.save_all ? $("#addFormFieldDialogFormName").LP_show() : $("#addFormFieldDialogFormName").LP_hide(), Dialog.prototype.setup.apply(this, arguments)
}, AddFormFieldDialog.prototype.validate = function(t) {
    var e = Dialog.prototype.validate.apply(this, arguments);
    if (t.name)
        for (var i = this.data.sourceDialog.inputFields.fields.getValue(), l = 0, a = i.length; l < a; ++l) i[l].name === t.name && (this.addError("name", Strings.translateString("A field with this name already exists.")), e = !1);
    else this.addError("name", Strings.translateString("Field Name is required.")), e = !1;
    return t.type || (this.addError("type", Strings.translateString("Field Type is required.")), e = !1), e
}, AddFormFieldDialog.prototype.handleSubmit = function(t) {
    var e, i;
    e = this.data.sourceDialog, i = $.extend({}, t), e.vaultItem.processEnteredFieldData(t), LPRequest.makeUpdateRequest(LPProxy.addField, {
        parameters: [e.vaultItem, t],
        success: function() {
            e.vaultItem.addField(t), e.inputFields.fields.addField(i), e.originalData = e.getData(!1)
        }
    })
};
//# sourceMappingURL=sourcemaps/editableFieldsDialog.js.map