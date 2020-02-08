var ExtensionCreateAccount = function(e, t) {
    t = t || {}, Dialog.call(this, e, $.extend(t, {
        dynamicHeight: !1,
        responsive: !1,
        buttonAlign: this.RIGHT_ALIGN,
        largeButtons: !0,
        buttonsInsideContent: !0,
        title: Strings.translateString("Create Account"),
        hideHeaderTitle: !0,
        hideBackButton: !0,
        version: ""
    })), this.isSubmitting = !1
};
ExtensionCreateAccount.prototype = Object.create(CreateAccountDialog.prototype), ExtensionCreateAccount.prototype.constructor = ExtensionCreateAccount,
    function() {
        var a, t, r = !1;

        function n() {
            var e = document.getElementById("chooseOtherwise");
            e && e.addEventListener("click", function(e) {
                var t = document.querySelector(".contactPermissionContainer");
                t && (r = !0, t.classList.add("is-expanded"))
            })
        }

        function i() {
            a.inputFields.email.getElement().unbind("change"), a.inputFields.email.onChange(function(t) {
                t && d(t, function(e) {
                    a.inputFields.email.validate({
                        response: e
                    }), w(t)
                })
            })
        }

        function s() {
            a.inputFields.password.onChange(function(e) {
                e && a.inputFields.password.validate({
                    password: a.inputFields.password.getValue(),
                    email: a.inputFields.email.getValue()
                })
            }), a.inputFields.password.getElement().keyup(function(e) {
                a.inputFields.password.validate({
                    password: a.inputFields.password.getValue(),
                    email: a.inputFields.email.getValue()
                }, !0)
            })
        }

        function o() {
            a.inputFields.reconfirm.onChange(function(e) {
                e && a.inputFields.reconfirm.validate({
                    reconfirm: a.inputFields.reconfirm.getValue(),
                    password: a.inputFields.password.getValue()
                })
            })
        }

        function l() {
            a.inputFields.reminder.onChange(function(e) {
                e && a.inputFields.reminder.validate({
                    reminder: a.inputFields.reminder.getValue(),
                    password: a.inputFields.password.getValue()
                })
            })
        }

        function d(e, t) {
            bg.LPServer.textRequest({
                type: "GET",
                url: "create_account.php",
                CSRFToken: !1,
                data: {
                    username: e,
                    check: "avail",
                    mistype: 1
                },
                success: t,
                error: t
            })
        }

        function u(n, i) {
            return function(e, t) {
                var r = !1;
                return i && (a.clearError(n), r = i.validate(e, function(e) {
                    a.addError(n, e)
                }, t)), r
            }
        }

        function c() {
            if (!a.inputFields.email.fieldValidator) {
                var e = LPTools.createElement("a", {
                        class: "pull-right recovery-link",
                        href: "https://lastpass.com/forgot.php",
                        target: "_blank"
                    }, Strings.translateString("Recovery Help")),
                    t = LPTools.createElement("p", null, Strings.translateString("Email address already in use "));
                t.appendChild(e);
                var r = new FieldValidator({
                    summary: {
                        id: "validatorSummaryEmail",
                        parentEl: $("label[for='createAccountEmail'].error-summary"),
                        labelEl: $("label[for='createAccountEmail'].validator-label")
                    },
                    validators: [{
                        id: "403",
                        errorMsg: LPTools.createElement("p", null, Strings.translateString("You've made too many attempts, wait 5 minutes and try again.")),
                        isValid: function(e) {
                            return !(e.response.status && 403 === e.response.status)
                        }
                    }, {
                        id: "emailUsed",
                        errorMsg: t,
                        isValid: function(e) {
                            return "no" !== e.response
                        }
                    }, {
                        id: "emailInvalid",
                        errorMsg: LPTools.createElement("p", null, Strings.translateString("Make sure to use a real email address")),
                        isValid: function(e) {
                            return "ok" === e.response && 0 !== e.response.indexOf("mistype:") && "emailinvalid" !== e.response
                        }
                    }]
                });
                a.inputFields.email.validate = u("email", r), a.inputFields.email.fieldValidator = r
            }
        }

        function p() {
            a.getConsentDetails(function(e) {
                var t = document.querySelector(".extensionCreateAccount"),
                    r, n;
                document.querySelector(".createAccountLoading").style.display = "none", t.style.display = "block", document.getElementById("termsAndConditionsSimple").style.display = "none"
            })
        }

        function m() {
            if (!a.inputFields.password.fieldValidator || "" === a.inputFields.password.input.val()) {
                var e = new FieldValidator({
                    summary: {
                        id: "validatorSummaryPassword",
                        parentEl: $("label[for='createAccountDialogPassword'].error-summary"),
                        labelEl: $("label[for='createAccountDialogPassword'].validator-label"),
                        errorMsg: LPTools.createElement("p", null, Strings.translateString("Sorry, your password is invalid"))
                    },
                    listParentEl: $("#mpValidators"),
                    isPopup: a.data.isPopup,
                    validators: [{
                        id: "passwordLength",
                        name: LPTools.createElement("p", null, Strings.translateString("At least 12 characters long")),
                        errorMsg: LPTools.createElement("p", null, Strings.translateString("Must be at least 12 characters")),
                        isValid: function(e) {
                            return !0 === (e.password && 12 <= e.password.length)
                        }
                    }, {
                        id: "passwordNumber",
                        name: LPTools.createElement("p", null, Strings.translateString("Have at least 1 number")),
                        errorMsg: LPTools.createElement("p", null, Strings.translateString("Must have at least 1 number")),
                        isValid: function(e) {
                            return !0 === (e.password && -1 < e.password.search(/^(?=.*[0-9]).+$/))
                        }
                    }, {
                        id: "passwordUpper",
                        name: LPTools.createElement("p", null, Strings.translateString("Have at least 1 uppercase letter")),
                        errorMsg: LPTools.createElement("p", null, Strings.translateString("Must have at least 1 uppercase letter")),
                        isValid: function(e) {
                            return !0 === (e.password && -1 < e.password.search(/^(?=.*[A-Z]).+$/))
                        }
                    }, {
                        id: "passwordLower",
                        name: LPTools.createElement("p", null, Strings.translateString("Have at least 1 lowercase letter")),
                        errorMsg: LPTools.createElement("p", null, Strings.translateString("Must have at least 1 lowercase letter")),
                        isValid: function(e) {
                            return !0 === (e.password && -1 < e.password.search(/^(?=.*[a-z]).+$/))
                        }
                    }, {
                        id: "passwordSameAsEmail",
                        name: LPTools.createElement("p", null, Strings.translateString("Not your email")),
                        errorMsg: LPTools.createElement("p", null, Strings.translateString("Shouldn't contain your email")),
                        isValid: function(e) {
                            return !0 === (e.password && e.email && -1 === e.password.toLowerCase().indexOf(e.email.toLowerCase()) && -1 === e.email.toLowerCase().indexOf(e.password.toLowerCase()))
                        }
                    }]
                });
                a.inputFields.password.validate = u("password", e), a.inputFields.password.fieldValidator = e
            }
        }

        function g() {
            if (!a.inputFields.reconfirm.fieldValidator || "" === a.inputFields.reconfirm.input.val()) {
                $("#twinsies").hide();
                var e = new FieldValidator({
                    summary: {
                        id: "validatorSummaryReconfirm",
                        parentEl: $("label[for='createAccountDialogConfirmPassword'].error-summary"),
                        labelEl: $("label[for='createAccountDialogConfirmPassword'].validator-label, #twinsies")
                    },
                    validators: [{
                        id: "reconfirmSameAsPassword",
                        name: LPTools.createElement("p", null, Strings.translateString("Reconfirm same as password")),
                        errorMsg: LPTools.createElement("p", null, Strings.translateString("Make sure this matches your master password")),
                        isValid: function(e) {
                            return !0 === (e.reconfirm && e.password === e.reconfirm)
                        }
                    }]
                });
                a.inputFields.reconfirm.validate = u("reconfirm", e), a.inputFields.reconfirm.fieldValidator = e
            }
        }

        function f() {
            if (!a.inputFields.reminder.fieldValidator || "" === a.inputFields.reminder.input.val()) {
                var e = new FieldValidator({
                    summary: {
                        id: "validatorSummaryReminder",
                        parentEl: $("label[for='createAccountReminder'].error-summary"),
                        labelEl: $("label[for='createAccountReminder'].validator-label")
                    },
                    validators: [{
                        id: "reminderNotPassword",
                        name: LPTools.createElement("p", null, Strings.translateString("Reminder doesn't contain password")),
                        errorMsg: LPTools.createElement("p", null, Strings.translateString("Reminder can't contain your master password")),
                        isValid: function(e) {
                            return !(e.password && -1 !== e.reminder.toLowerCase().indexOf(e.password.toLowerCase()))
                        }
                    }]
                });
                a.inputFields.reminder.validate = u("reminder", e), a.inputFields.reminder.fieldValidator = e
            }
        }

        function v() {
            var e = [];
            for (var t in a.inputFields) a.inputFields.hasOwnProperty(t) && a.inputFields[t].fieldValidator && (e = e.concat(a.inputFields[t].fieldValidator.getValidationList()));
            return e
        }

        function w(e) {
            e && $("#masterPasswordDialogTitle").text(e).attr("title", e)
        }
        ExtensionCreateAccount.prototype.initialize = function(e) {
            CreateAccountDialog.prototype.initialize.apply(this, arguments), $(".meterContainer").remove(), this.inputFields.password.getElement().LP_addPasswordMeter(this.inputFields.email.getElement(), !this.data.isPopup), a = this;
            var t = e.find(".buttonContent"),
                r = e.find(".buttons").detach();
            t.append(r), c(), p(), i(), s(), o(), l(), n(), a.setDynamicHeight()
        }, ExtensionCreateAccount.prototype.setNextView = function(e) {
            Dialog.prototype.setNextView.apply(this, arguments), bg.sendLpImprove("viewregform", {
                currentPage: 0 === this.currentViewIndex ? "email" : "mpw",
                version: a.data.version
            })
        }, ExtensionCreateAccount.prototype.close = function(e) {
            e ? Dialog.prototype.close.apply(this, arguments) : function(e) {
                LPTools.getOption(e.data, "showcloseconfirm", !0) ? (this._backgroundOverlay.show(), dialogs.confirmation.open({
                    title: "LastPass",
                    text: Strings.translateString("Do you really want to quit?  You cannot use LastPass without creating an account."),
                    closeHandler: function() {
                        t.hide()
                    },
                    handler: function() {
                        e.close(!0)
                    }
                })) : e.close(!0)
            }(this)
        }, ExtensionCreateAccount.prototype.clearError = function(e) {
            var t = this.inputFields[e];
            t && t.clearErrors()
        }, ExtensionCreateAccount.prototype.addError = function(e, t) {
            var r = this.inputFields[e];
            r && (r._errors.push(t), r.clearErrors = function() {
                this._errors = [], r._errorElement && r._errorElement.remove(), this._errorElement = null
            })
        }, ExtensionCreateAccount.prototype.validate = function(r, n) {
            if (0 === this.currentViewIndex) d(r.email, function(e) {
                var t = a.inputFields.email.validate({
                    response: e
                });
                t && (t &= a.inputFields.termsAndConditions.validate(r)), n && n(t)
            });
            else if (this.currentViewIndex === this.views.length - 1) {
                var e = a.inputFields.password.validate(r);
                e &= a.inputFields.reconfirm.validate(r), e &= a.inputFields.reminder.validate(r), n && n(e)
            }
        }, ExtensionCreateAccount.prototype.submit = function() {
            try {
                if (a.isSubmitting) return;
                a.isSubmitting = !0;
                var n = this.getData();
                n.marketingOptOutSeen = r ? "1" : "0", n.contactPermission = document.getElementById("contactPermissionCheckbox").checked ? "0" : "1", this.validate(n, function(e) {
                    if (e) {
                        var t = {
                            currentPage: "mpw",
                            version: a.data.version
                        };
                        bg.sendLpImprove("viewregform", t), a.getNextViewButton() === a.nextButton && a.views && a.currentViewIndex < a.views.length - 1 ? (m(), g(), f(), a.setNextView(a.currentViewIndex + 1), a.setDynamicHeight()) : (bg.sendLpImprove("completedregform", {
                            version: a.data.version
                        }), a.handleSubmit(n, this.data))
                    } else {
                        var r = v().join(","),
                            t = {
                                errorlist: r,
                                version: a.data.version
                            };
                        a.inputFields.reminder && "" !== a.inputFields.reminder.getValue() && (t.isReminder = !0), 0 < r.length && (t.currentPage = 0 === a.currentViewIndex ? "email" : "mpw", bg.sendLpImprove("validationregform", t))
                    }
                    a.isSubmitting = !1
                })
            } catch (e) {
                a.isSubmitting = !1, LPPlatform.logException(e)
            }
        }, ExtensionCreateAccount.prototype.showInProcessOverlay = function() {
            t.show(!0)
        }, ExtensionCreateAccount.prototype.setBackgroundOverlay = function(e) {
            t = e
        }, ExtensionCreateAccount.prototype.hideInProcessOverlay = function() {
            t.hide()
        }
    }();
//# sourceMappingURL=sourcemaps/extensionCreateAccount.js.map