var UpgradePremiumDialog = function(i) {
    Dialog.call(this, i, {
        additionalHeaderClasses: ["icon"],
        dynamicHeight: !0,
        buttonsInsideContent: !0,
        title: Strings.translateString("Upgrade to Premium")
    })
};
UpgradePremiumDialog.prototype = Object.create(Dialog.prototype), (UpgradePremiumDialog.prototype.constructor = UpgradePremiumDialog).prototype.initialize = function(i) {
    var e;
    Dialog.prototype.initialize.apply(this, arguments), e = this, i.find("#premium-upgrade-close").bind("click", function() {
        e.close(), bg.sendLpImprove("upgrade_to_premium_lightbox_click", {
            action: "close"
        })
    }), i.find("#premium-upgrade-now").bind("click", function() {
        e.close(), bg.sendLpImprove("upgrade_to_premium_lightbox_click", {
            action: "upgrade now"
        })
    })
}, UpgradePremiumDialog.prototype.setup = function(i) {
    LPTools.setContent($("#upgradePremiumText"), this.data.upgradeText), Dialog.prototype.setup.apply(this, arguments)
};
//# sourceMappingURL=sourcemaps/upgradePremiumDialog.js.map