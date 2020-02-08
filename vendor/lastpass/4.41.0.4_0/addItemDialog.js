var AddItemDialog = function(e) {
    Dialog.call(this, e, {
        title: Strings.translateString("Add Item"),
        dynamicHeight: !1,
        closeButtonEnabled: !0,
        overlayDialog: !0,
        hideButtons: !0,
        additionalHeaderClasses: ["icon"],
        isExpanded: !1
    })
};
AddItemDialog.prototype = Object.create(Dialog.prototype), (AddItemDialog.prototype.constructor = AddItemDialog).prototype.addCard = function(e) {
    var t = LPTools.createElement("div", "col-3"),
        a = LPTools.createElement("button", e.classes ? [].concat("addItemCard", e.classes) : "addItemCard"),
        o;
    return t.appendChild(a), e.icon && a.appendChild(e.icon), a.appendChild(LPTools.createElement("span", "addItemCardName", e.name)), (e.isPrimaryItem ? $("#addItemOptions") : $("#addItemSecondaryOptions")).append(t), a
}, AddItemDialog.prototype.toggleExpanded = function() {
    var e = $("#addItemSecondaryOptionsContainer"),
        t = $("#addItemSecondaryOptionsLabel");
    e.slideToggle(), t.toggleClass("open"), Dialog.prototype.getCurrentDialog().element.classList.toggle("isMaximized"), this.isExpanded = !this.isExpanded
}, AddItemDialog.prototype.setup = function(e, t) {
    Dialog.prototype.setup.apply(this, arguments), t.isExpanded && !this.isExpanded && this.toggleExpanded()
}, AddItemDialog.prototype.initialize = function() {
    Dialog.prototype.initialize.apply(this, arguments);
    var n = this;
    $("#addItemSecondaryOptionsContainer").slideUp();
    var o = $("#addItemSecondaryOptions"),
        e = $("#addItemSecondaryOptionsLabel"),
        i = {
            postSetup: function() {
                n.close()
            }
        };
    e.bind("click", function() {
        n.toggleExpanded()
    });
    var d = bg.get("RecordTypeConfig");
    d.types.forEach(function(e) {
        var t = !1,
            a;
        if (bg && bg.get("g_prefoverrides") && bg.get("g_prefoverrides").noformfill) {
            var o = bg.get("g_prefoverrides").noformfill;
            t = o && o.includes("0") || o.includes(e.enterprisePolicyId)
        }
        e.composite || e.noAddItemCard || "Password" !== e.id && t || n.addCard({
            name: Strings.translateString(e.name),
            classes: e.id,
            isPrimaryItem: e.isPrimaryItem
        }).addEventListener("click", function() {
            if (bg.lpevent("m_add"), LPFeatures.allowOmarDrawer()) window.location.hash = "/drawers/(drawer:new-item/" + e.id + ")";
            else switch (e.recordType) {
                case d.TYPE.Password:
                    dialogs.site.open(i);
                    break;
                default:
                    dialogs.note.open($.extend(i, {
                        defaultData: {
                            notetype: e.recordType,
                            language: Note.prototype.isValidLanguage(navigator.language) ? navigator.language : "en-US"
                        }
                    }))
            }
        })
    });
    var a = function(t) {
        var a = n.addCard({
                parent: o,
                name: t.title,
                classes: "Custom"
            }),
            e = LPTools.createElement("button", "customTemplateDeleteButton");
        return e.appendChild(LPTools.createElement("i", "fa fa-trash")), a.appendChild(e), a.addEventListener("click", function() {
            dialogs.note.open($.extend(i, {
                defaultData: {
                    notetype: "Custom_" + t.id
                }
            }))
        }), e.addEventListener("click", function(e) {
            e.stopPropagation(), dialogs.confirmation.open({
                title: Strings.translateString("Confirm Deletion"),
                text: [Strings.translateString("Are you sure you want to delete %1?", t.title), Strings.translateString("Any notes you created using this template will not be deleted.")],
                nextButtonText: Strings.translateString("Continue"),
                backButtonText: Strings.Vault.CANCEL,
                handler: function() {
                    LPRequest.makeRequest(LPProxy.deleteCustomNoteTemplate, {
                        params: {
                            id: t.id
                        },
                        success: function() {
                            var e = a.parentElement;
                            e.parentElement.removeChild(e)
                        },
                        requestSuccessOptions: {
                            closeDialog: !1
                        }
                    })
                }
            })
        }), a
    };
    LPProxy.getCustomNoteTemplates().forEach(a), Topics.get(Topics.SECURENOTE_TEMPLATE_ADDED).subscribe(function(e) {
        var t = a(e);
        setTimeout(function() {
            t.focus()
        }, 0)
    });
    var t = this.addCard({
        parent: o.parent(),
        name: Strings.translateString("New custom item type"),
        icon: LPTools.createElement("i", "fa fa-plus")
    });
    $(t).addClass("customTemplateAddButton").bind("click", function() {
        dialogs.customNoteTemplate.open()
    })
};
//# sourceMappingURL=sourcemaps/addItemDialog.js.map