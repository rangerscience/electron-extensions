var VaultRepromptDialog = function(e) {
    RepromptDialog.call(this, e)
};
VaultRepromptDialog.prototype = Object.create(RepromptDialog.prototype), (VaultRepromptDialog.prototype.constructor = VaultRepromptDialog).prototype.open = function(e) {
    RepromptDialog.prototype.open.call(this, $.extend(e, {
        defaultData: {
            delayRepromptTime: bg.Preferences.get("reprompttime")
        }
    }))
}, VaultRepromptDialog.prototype.initialize = function(e) {
    var t;
    RepromptDialog.prototype.initialize.apply(this, arguments), (t = this).inputFields.delayRepromptTime.onChange(function(e) {
        t.inputFields.delayReprompt.setValue(0 < parseInt(e))
    }), t.inputFields.delayReprompt.onChange(function(e) {
        e || t.inputFields.delayRepromptTime.setValue("0")
    })
}, VaultRepromptDialog.prototype.success = function(e) {
    bg.Preferences.set("reprompttime", e.delayRepromptTime), bg.Preferences.set("lastreprompttime", Date.now()), "function" == typeof this.data.successCallback ? this.data.successCallback() : bg.repromptSuccess()
}, VaultRepromptDialog.prototype.validateReprompt = function(p) {
    bg.make_lp_key_hash(bg.get("g_username"), p.params.password, function(e, t) {
        e === LPProxy.getLocalKey() ? p.success(p.params) : p.repromptFailed()
    })
};
//# sourceMappingURL=sourcemaps/vaultRepromptDialog.js.map