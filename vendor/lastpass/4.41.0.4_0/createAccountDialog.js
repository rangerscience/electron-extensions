var CreateAccountDialog = function(e) {
    Dialog.call(this, e, {
        views: [{
            selector: "#dataEntry"
        }, {
            selector: "#confirmation",
            title: Strings.translateString("Confirm Password")
        }],
        dynamicHeight: !0,
        additionalHeaderClasses: ["icon"],
        nextButtonText: Strings.translateString("Create Account"),
        largeButtons: !0,
        title: Strings.translateString("Create Account"),
        consentDetails: {
            countryCode: "",
            defaultConsentValue: null,
            ip: ""
        }
    })
};
CreateAccountDialog.prototype = Object.create(Dialog.prototype), CreateAccountDialog.prototype.constructor = CreateAccountDialog,
    function() {
        var s = !1,
            r = [],
            l, c;

        function t(t) {
            var e;
            ("undefined" == typeof bg ? getBG() : bg).LPServer.jsonRequest({
                url: "lmiapi/create-account/details",
                type: "GET",
                CSRFToken: !1,
                success: function(e) {
                    t && t(e)
                },
                error: function(e) {
                    t && t(null)
                }
            })
        }
        CreateAccountDialog.prototype.initialize = function(e) {
            Dialog.prototype.initialize.apply(this, arguments);
            var t = document.getElementById("createAccountDialog"),
                a = document.getElementById("chooseOtherwise"),
                s = document.getElementById("contactPermission"),
                r = document.getElementById("contactPermissionCheckbox"),
                n = document.getElementById("contactPermissionContainer"),
                o = document.getElementById("marketingOptOutSeen"),
                i;
            t.classList.add("loading"), this.getConsentDetails(function(e) {
                o.value = "0", s.value = e.defaultConsentValue, a.addEventListener("click", function() {
                    "0" === o.value && (r.checked = "1" === a.getAttribute("data-default-opt-out-value"), o.value = "1", n.classList.add("is-expanded"))
                }), r.addEventListener("change", function() {
                    r.checked ? s.value = "0" : s.value = "1"
                }), t.classList.remove("loading")
            }), this.inputFields.password.getElement().LP_addPasswordMeter(), (i = this).inputFields.email.onChange(function(e) {
                e && getBG().LPServer.textRequest({
                    type: "GET",
                    url: "create_account.php",
                    CSRFToken: !1,
                    data: {
                        username: e,
                        check: "avail",
                        mistype: 1
                    },
                    success: function(e) {
                        0 === e.indexOf("mistype:") ? i.addError("email", e.substring(8)) : "no" === e && i.addError("email", Strings.translateString("Email already in use."))
                    }
                })
            })
        }, CreateAccountDialog.prototype.getConsentDetails = function(e) {
            var a = this;
            if (s) return e(this.consentDetails);
            r.push(e), t(function(e) {
                for (s = !0, a.consentDetails = e; 0 < r.length;) {
                    var t = r.pop();
                    t && t(e)
                }
            })
        }, CreateAccountDialog.prototype.close = function(e) {
            var t;
            e ? Dialog.prototype.close.apply(this, arguments) : (t = this, LPTools.getOption(t.data, "showcloseconfirm", !0) ? dialogs.confirmation.open({
                title: "LastPass",
                text: Strings.translateString("Do you really want to quit?  You cannot use LastPass without creating an account."),
                handler: function() {
                    dialogs.alert.open({
                        title: "LastPass",
                        text: Strings.translateString("Please visit https://lastpass.com to create an account at a later time."),
                        handler: function() {
                            t.close(!0)
                        }
                    })
                }
            }) : t.close(!0))
        }, CreateAccountDialog.prototype.validate = function(e) {
            var t = Dialog.prototype.validate.apply(this, arguments);
            return e.email.length < 5 && (this.addError("email", Strings.translateString("It looks like you've entered an invalid or incomplete email address. Please try again.")), t = !1), e.password.length < 8 && (this.addError("password", Strings.translateString("Sorry, your password is too short. It must be a minimum of 8 characters long for security reasons.")), t = !1), e.password && e.password === e.email && (this.addError("password", Strings.translateString("Sorry, your password can not be the same as your email address.")), t = !1), (e.password.match(/^password\d{0,3}$/i) || "12345678" === e.password || "123456789" === e.password || "1234567890" === e.password || e.password.match(/^lastpass\d{0,3}$/i) || "lastpass.com" === e.password || "qwertyuiop" === e.password || "abcd1234" === e.password) && (this.addError("password", Strings.translateString("Your password is easily guessable, avoid simple runs of characters, or variations of 'password' or 'lastpass'.")), t = !1), e.password && -1 !== e.reminder.toLowerCase().indexOf(e.password.toLowerCase()) && (this.addError("reminder", Strings.translateString("Your Password Reminder can not be the same as your chosen Master Password for security reasons. Please edit your Reminder so that it does not contain your Master Password.")), t = !1), this.currentViewIndex === this.views.length - 1 && e.password !== e.reconfirm && (this.addError("reconfirm", Strings.translateString("Your Master Password and Confirm Master Password entries do not match, please enter them again.")), t = !1), t
        }, CreateAccountDialog.prototype.handleSubmit = (l = function(e, t, a, s, r) {
            var n = "";
            if (e) {
                var o = e;
                if (0 <= o.indexOf("ok")) a.set("g_manual_login", !0), a.LP_do_login(t.email, t.password, !0, !1, null, !0, null, null, function() {
                    r.close(!0)
                });
                else if (0 <= o.indexOf("usernametaken")) n = Strings.translateString("Email already in use, have you forgotten your password?");
                else if (0 <= o.indexOf("usernameinvalid") || 0 <= o.indexOf("emailfailed")) n = Strings.translateString("Invalid email address, try again");
                else {
                    var i = jQuery.parseXML(e);
                    if (i && i.documentElement) {
                        var l = i.getElementsByTagName("error");
                        l && 0 < l.length && l[0].getAttribute("msg") && (n = l[0].getAttribute("msg"))
                    }
                    "" === n && (n = Strings.translateString("A server error occurred while processing your request."))
                }
            } else n = Strings.translateString("Received empty response from server.");
            n ? c(n, t, s) : t = null
        }, c = function(e, t, a) {
            Topics.get(Topics.ERROR).publish(e), Topics.get(Topics.REQUEST_ERROR).publish({
                requestID: a
            }), t = null
        }, function(r) {
            r.email = bg.fix_username(r.email);
            var n = LPRequest.getNewRequestID(),
                o, i;
            o = bg, i = this, o.make_lp_key_hash(r.email, r.password, function(e, t, a) {
                var s = {
                    username: r.email,
                    email: r.email,
                    hash: t,
                    password_hint: r.reminder,
                    improve: 1,
                    loglogins: 1,
                    iterations: a,
                    xml: 1
                };
                s.contactPermission = r.contactPermission, s.marketingOptOutSeen = r.marketingOptOutSeen, BuildVariables && BuildVariables.createSource && (s[BuildVariables.createSource] = 1), Topics.get(Topics.REQUEST_START).publish({
                    requestID: n
                }), o.create_account_safe($.param(s), function(e) {
                    l(e, r, o, n, i)
                }, c)
            })
        })
    }();
//# sourceMappingURL=sourcemaps/createAccountDialog.js.map