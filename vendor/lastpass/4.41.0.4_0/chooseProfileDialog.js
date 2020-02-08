var ChooseProfileDialog = function(e) {
    Dialog.call(this, e, {
        nextButtonText: Strings.translateString("Fill"),
        title: Strings.translateString("Choose Form Fill and Credit Card"),
        closeButtonEnabled: !0,
        maximizeButtonEnabled: !0
    })
};
ChooseProfileDialog.prototype = Object.create(Dialog.prototype), ChooseProfileDialog.prototype.constructor = ChooseProfileDialog,
    function() {
        ChooseProfileDialog.prototype.open = function(e) {
            e.saveOptions = $.extend({
                source: "vault"
            }, e.saveOptions), Dialog.prototype.open.call(this, $.extend(e, {
                defaultData: {
                    alwaysChoose: bg.Preferences.get("alwayschooseprofilecc")
                }
            }))
        }, ChooseProfileDialog.prototype.initialize = function() {
            Dialog.prototype.initialize.apply(this, arguments), this.profileElement = $("#profileContainer"), this.creditElement = $("#creditCardContainer")
        };
        var a = function(e, t, o, i) {
            var l = LPTools.buildRadioButton(t, void 0, e.getName());
            l.children[0].setAttribute("ffid", e.getID()), 0 !== o.children().length && e.getID() !== i || (l.children[0].checked = !0), o.append(l)
        };
        ChooseProfileDialog.prototype.setup = function() {
            Dialog.prototype.setup.apply(this, arguments);
            var e = LPProxy.getFormFillModels();
            this.profileElement.empty(), this.creditElement.empty();
            for (var t = bg.Preferences.get(FormFill.prototype.FORM_FILL_TYPE_GENERIC + "ffid"), o = bg.Preferences.get(FormFill.prototype.FORM_FILL_TYPE_CREDIT_CARD + "ffid"), i = 0, l = e.length; i < l; ++i) {
                var r = e[i];
                r.isCreditCard() ? r._data.ccnum && a(r, "selectedCreditCard", this.creditElement, o) : a(r, "selectedProfile", this.profileElement, t)
            }
        }, ChooseProfileDialog.prototype.handleSubmit = function(e) {
            var t = {},
                o = this.profileElement.find(".radio:checked").attr("ffid");
            t[FormFill.prototype.FORM_FILL_TYPE_GENERIC + "ffid"] = o;
            var i = this.creditElement.find(".radio:checked").attr("ffid");
            t[FormFill.prototype.FORM_FILL_TYPE_CREDIT_CARD + "ffid"] = i, t.alwayschooseprofilecc = e.alwaysChoose, bg.Preferences.set(t);
            var l = this.data.saveOptions && this.data.saveOptions.source ? this.data.saveOptions.source : "vault";
            this.data.tabID ? (bg.fillform(o, !1, this.data.tabID, i, null, null, l), this.close()) : bg.get_selected_tab_data(null, function(e) {
                bg.fillform(o, !1, e.id, i, null, null, l), this.close()
            })
        }
    }();
//# sourceMappingURL=sourcemaps/chooseProfileDialog.js.map