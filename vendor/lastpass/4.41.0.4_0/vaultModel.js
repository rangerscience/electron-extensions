User = function(t, e, n, i) {
        var s;
        this._username = t, this._accountClass = e, this._roleName = i, this._element = null, this._userMenuText = null, this._identities = n, this._identityDropdown = null, (s = this).identityEnableCallback = function(t) {
            if (s._identityDropdown && s._identityDropdown.setValue(t._data.deciname, !1), s._userMenuText && s._userMenuText.children().detach(), t instanceof AllIdentity) s._userMenuText.append(s._userInfo);
            else {
                var e = LPTools.createElement("ul", "userMenuText");
                e.appendChild(LPTools.createElement("li", "userMenuTextSingle truncateShort", t.getName())), s._userMenuText.append(e)
            }
        }, s.identityAddedCallback = function(t) {
            s._identities.push(t), s._identityDropdown ? s._identityDropdown.setIdentities(s._identities) : s.initializeIdentityDropdown(s._element.get(0).firstChild)
        }, Topics.get(Topics.IDENTITY_ENABLE).subscribe(s.identityEnableCallback), Topics.get(Topics.IDENTITY_ADDED).subscribe(s.identityAddedCallback)
    },
    function(t) {
        User.prototype.destruct = function() {
            this._element.unbind(), this._element.empty(), this._userMenuText.empty(), Topics.get(Topics.IDENTITY_ENABLE).unsubscribe(this.identityEnableCallback), Topics.get(Topics.IDENTITY_ADDED).unsubscribe(this.identityAddedCallback), this._username = null, this._accountClass = null, this._roleName = null, this._element = null, this._userMenuText = null, this._identities = null, this._identityDropdown = null
        };
        var s = function(t, e, n, i, s) {
            (s = s || {}).id = n, s.class = "menuListItem";
            var r = LPTools.createElement("li"),
                o = LPTools.createElement(e, s);
            return o.textContent = i, r.appendChild(o), t.appendChild(r), r
        };
        User.prototype.initializeIdentityDropdown = function(t) {
            var e = LPTools.createElement("li", "menuListHeader identityDropdownMenuItem");
            e.appendChild(LPTools.createElement("div", {
                id: "identityDropdownContainer"
            })), e.children[0].appendChild(LPTools.createElement("img", {
                id: "identityDropdownIcon",
                src: "images/vault_4.0/Identity_Avatar.png"
            }));
            var n = LPTools.createElement("div");
            e.children[0].appendChild(n);
            var i = LPTools.createElement("input", {
                id: "identityDropdown",
                class: "dialogInput selectDropdown",
                type: "text"
            });
            n.appendChild(i), t.insertBefore(e, t.firstChild), this._identityDropdown = new IdentityDropdown(i, this._identities);
            for (var s = 0, r = this._identities.length; s < r; ++s) {
                var o = this._identities[s];
                o._enabled && this._identityDropdown.setValue(o.getName(), !1)
            }
            LPPlatform.addEventListener(e, "click", function(t) {
                t.stopPropagation()
            }), $(e.nextElementSibling).addClass("divider")
        }, User.prototype.initialize = function(t, e) {
            t.empty();
            var n = LPTools.createElement("ul"),
                i = "";
            this._userInfo = LPTools.createElement("ul", "userMenuText"), this._userInfo.appendChild(LPTools.createElement("li", "userMenuTextPrimary truncateShort", this._username)), i = this._accountClass === Constants.USER_ENTERPRISE_ROLE ? LPProxy.isIdentity() ? Strings.translateString("Identity %1 User", this._roleName) : Strings.translateString("Enterprise %1 User", this._roleName) : LPProxy.isFamilyUser() ? LPProxy.isAdmin() ? Strings.translateString("Family Manager") : Strings.translateString("Family member") : LPProxy.isIdentity() ? LPProxy.isAdmin() ? Strings.translateString("Identity Admin") : Strings.translateString("Identity User") : Strings.translateString(this._accountClass), this._userInfo.appendChild(LPTools.createElement("li", "userMenuTextSecondary", i)), e.append(this._userInfo), $(s(n, "div", "accountSettingsIcon", Strings.Vault.ACCOUNT_SETTINGS)).bind("click", function() {
                Topics.get(Topics.EDIT_SETTINGS).publish({
                    source: "accountdropdown"
                })
            }), $(s(n, "a", "helpCenterIcon", Strings.Vault.HELP_CENTER, {
                href: "https://support.logmeininc.com/lastpass",
                target: "_blank"
            })).bind("click", function() {
                window.open("https://support.logmeininc.com/lastpass")
            }), $(s(n, "a", "attendWebinarIcon", Strings.Vault.ATTEND_WEBINAR, {
                href: "https://register.gotowebinar.com/rt/8722554781298103307?source=s",
                target: "_blank"
            })).bind("click", function() {
                window.open("https://register.gotowebinar.com/rt/8722554781298103307?source=s")
            }), $(s(n, "div", "logoutIcon", Strings.Vault.LOGOUT)).bind("click", function() {
                bg.sendLpImprove("logout_clicked", {
                    source: "vault"
                }), LPProxy.logout()
            }), t.append(n), 1 < this._identities.length && this.initializeIdentityDropdown(n), this._element = t, this._userMenuText = e
        }, User.prototype.isFreeOrTrial = function() {
            return this._accountClass === Constants.USER_FREE || this._accountClass === Constants.USER_PREMIUM_TRIAL
        }, User.prototype.isFree = function() {
            return this._accountClass === Constants.USER_FREE
        }
    }(document);
//# sourceMappingURL=sourcemaps/vaultModel.js.map