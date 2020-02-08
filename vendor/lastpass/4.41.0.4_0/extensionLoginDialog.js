var ExtensionLoginDialog = function(e) {
    var d;
    LoginDialog.call(this, e, {
        closeButtonEnabled: !1
    }), this.populatedSavedLogin = !1, (d = this).savedLoginCallback = function(e) {
        for (var a = [], i = function(i) {
                return function(e) {
                    bg.delete_saved_login(i), e.stopPropagation(), e.preventDefault();
                    for (var a = 0; a < d.data.savedLogins.length; a++)
                        if (d.data.savedLogins[a].username === i) {
                            d.data.savedLogins.splice(a, 1);
                            break
                        } d.inputFields.email.removeValue(i), d.inputFields.email.inputObject.input.val(""), d.inputFields.password.setValue(""), d.inputFields.email.updateDropdown(""), d.inputFields.email.clearHint()
                }
            }, t = 0, o = e.length; t < o; ++t) {
            var n = e[t].username,
                s = LPTools.createElement("li", {
                    dropdownValue: n
                }, "");
            s.appendChild(LPTools.createElement("span", {
                class: "dropdownText"
            }, n));
            var r = LPTools.createElement("img", {
                src: "images/vault_4.0/Close_x.png",
                class: "ddl-remove"
            });
            LPPlatform.addEventListener(r, "mousedown", i(n)), s.appendChild(r), a.push({
                value: n,
                label: n,
                element: s
            })
        }
        if (d.inputFields.email.setOptions(a), 0 < e.length) {
            var l = e[0];
            d.data.savedLogins = e, d.inputFields.email.setValue(l.username), d.inputFields.password.focus()
        } else d.inputFields.email.focus();
        d.data.sesameusername && d.inputFields.email.setValue(d.data.sesameusername)
    }
};
ExtensionLoginDialog.prototype = Object.create(LoginDialog.prototype), ExtensionLoginDialog.prototype.constructor = ExtensionLoginDialog,
    function() {
        var a, e;
        ExtensionLoginDialog.prototype.populateSavedLogin = function(e) {
            this.inputFields.password.setValue(e), this.inputFields.rememberPassword.setValue("" !== e), this.populatedSavedLogin = !0
        }, ExtensionLoginDialog.prototype.parseSavedLogin = function(e) {
            switch (e.protected) {
                case 0:
                    this.populateSavedLogin(e.password);
                    break;
                case 1:
                    bg.unprotect_data(e.password, !1, this.createDynamicHandler(function(e) {
                        this.populateSavedLogin(e)
                    }));
                    break;
                case 2:
                    this.populateSavedLogin(bg.lpdec(e.password, bg.AES.hex2bin(bg.SHA256(e.username))))
            }
        }, ExtensionLoginDialog.prototype.initialize = function(e) {
            var a, i, t;
            LoginDialog.prototype.initialize.apply(this, arguments), this.inputFields.rememberPassword.getElement().bind("click", (a = this, i = !1, t = function() {
                i = !0, a.inputFields.rememberPassword.setValue(!0)
            }, function() {
                var e = a.inputFields.rememberPassword.getValue();
                !i && e ? (dialogs.confirmation.open({
                    title: Strings.translateString("Are you sure?"),
                    text: Strings.translateString("Using 'remember password' makes it easier to forget your password and decreases your security if your device is infected or stolen."),
                    handler: t,
                    onResize: a.data.onResize
                }), a.inputFields.rememberPassword.setValue(!1)) : i = !1
            }));
            var o = (s = this, function(e) {
                    bg.FederatedLogin.isFederated(e, function(e) {
                        e ? (bg.g_isLoginWithFederatedEmail = !0, s.showFederationState()) : (bg.g_isLoginWithFederatedEmail = !1, s.hideFederationState())
                    });
                    var a = s.populatedSavedLogin;
                    if (s.populatedSavedLogin = !1, s.data.savedLogins)
                        for (var i = 0, t = s.data.savedLogins.length; i < t; ++i) {
                            var o = s.data.savedLogins[i];
                            if (o.username === e) {
                                s.parseSavedLogin(o);
                                break
                            }
                        }
                    a && !s.populatedSavedLogin && (s.inputFields.password.clear(), s.inputFields.rememberPassword.clear());
                    var n = r;
                    r = e && bg.localStorage_getItem(bg.SHA256(e) + ".noremember") ? ($("#ExtensionLoginDialogRememberPasswordContainer").hide(), !1) : ($("#ExtensionLoginDialogRememberPasswordContainer").show(), !0)
                }),
                s, r;
            this.inputFields.email.onChange(o), this.inputFields.email.inputObject.onChange(o)
        }, ExtensionLoginDialog.prototype.federatedLoginStarted = function() {
            this.close(!0)
        }, ExtensionLoginDialog.prototype.setup = function() {
            LoginDialog.prototype.setup.apply(this, arguments), bg.get_saved_logins(this.savedLoginCallback), $("#loginDialogDisableBrowserDiv").hide()
        }, ExtensionLoginDialog.prototype.open = function(e) {
            LoginDialog.prototype.open.call(this, $.extend(e, {
                defaultData: {
                    rememberEmail: bg.Preferences.get("rememberemail"),
                    rememberPassword: bg.Preferences.get("rememberpassword"),
                    rememberShowVault: bg.Preferences.get("showvault")
                }
            }))
        }, ExtensionLoginDialog.prototype.handleSubmit = (a = null, e = function(e) {
            null === a && (a = setInterval(function() {
                "undefined" == typeof VaultState && bg.getData && bg.getData({
                    context: "login"
                }), bg.get("lploggedin") && (clearInterval(a), a = null, data.disablePasswordManager && "undefined" == typeof InstallTrigger ? bg.disablepasswordmanager(data.disablePasswordManager, e) : e.close())
            }, 1e3))
        }, function(i) {
            if (i.email = bg.fix_username(i.email), bg.Preferences.set({
                    rememberemail: i.rememberEmail,
                    rememberpassword: i.rememberPassword,
                    showvault: i.rememberShowVault
                }), bg.g_isLoginWithFederatedEmail) return bg.FederatedLogin.login(username), void dialog.federatedLoginStarted();
            var t, o;
            bg.make_lp_key_hash(i.email, i.password, (t = bg, o = this, function(e, a) {
                t.set("g_manual_login", !0), t.LP_do_login(i.email, i.password, i.rememberEmail, i.rememberPassword, null, i.rememberShowVault, e, a), o.data.isPopup && (i.disablePasswordManager && "undefined" == typeof InstallTrigger ? t.disablepasswordmanager(i.disablePasswordManager, o) : o.close(!0))
            })), this.data.isPopup ? i.disablePasswordManager && "undefined" == typeof InstallTrigger && bg.disablepasswordmanager(i.disablePasswordManager, this) : e(this, i.disablePasswordManager)
        })
    }();
//# sourceMappingURL=sourcemaps/extensionLoginDialog.js.map