var ChangePasswordDialog = function(t) {
    VaultItemSelectDialog.call(this, t, {
        title: Strings.translateString("Change Password"),
        nextButtonText: Strings.translateString("Change")
    })
};
ChangePasswordDialog.prototype = Object.create(VaultItemSelectDialog.prototype), (ChangePasswordDialog.prototype.constructor = ChangePasswordDialog).prototype.open = function(o) {
    if (!(o = o || {}).hasOwnProperty("items")) {
        var t = function() {
            for (var t = {}, e = o.excluded ? o.excluded.split(",") : [], a = 0, s = e.length; a < s; ++a) e[a] && (t[e[a]] = !0);
            return t
        }();
        o.items = [];
        for (var e = LPProxy.getSiteModels(), a = 0, s = e.length; a < s; ++a) {
            var r = e[a];
            t.hasOwnProperty(r.getID()) || r.hasGeneratedPassword() || LPProxy.getDomain(r.getURL()) !== o.domain || o.items.push(r)
        }
    }
    o.text = [LPTools.createElement("span", null, Strings.translateString("LastPass detected a password change for") + " "), LPTools.createElement("span", "bold", o.domain + "."), Strings.translateString("Please select which sites you wish to apply this change.")], o.handler = this.createDynamicHandler(function(t) {
        LPRequest.makeRequest(LPProxy.changePasswords, {
            params: {
                password: this.data.newPassword,
                items: t
            },
            success: function() {
                Topics.get(Topics.SUCCESS).publish(Strings.translateString("%1 passwords were updated.", t.length))
            }
        })
    }), VaultItemSelectDialog.prototype.open.call(this, o)
};
//# sourceMappingURL=sourcemaps/changePasswordDialog.js.map