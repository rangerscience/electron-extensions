var TierExpiredDialog = function(e) {
    Dialog.call(this, e, {
        additionalHeaderClasses: [],
        dynamicHeight: !0,
        buttonsInsideContent: !0,
        closeButtonEnabled: !1
    })
};
TierExpiredDialog.prototype = Object.create(Dialog.prototype), (TierExpiredDialog.prototype.constructor = TierExpiredDialog).prototype.initialize = function(o) {
    Dialog.prototype.initialize.apply(this, arguments),
        function(i) {
            var e = i.data.dialogId;
            if (e) {
                bg.sendLpImprove("license_expiration_seen");
                var t = i.data.paymentPage,
                    n = i.data.storageItem;
                o.find("#" + e).addClass("visibleContent"), o.find("#" + e + " .try-btn").bind("click", function() {
                    t && "function" == typeof t && t(), bg.sendLpImprove("license_expiration_upgrade"), i.close()
                }), o.find("#" + e + " .no-thanks-btn").bind("click", function() {
                    var e = JSON.parse(localStorage.getItem("expiredData"));
                    n && (null === e && (e = {}), e[n] = 1, localStorage.setItem("expiredData", JSON.stringify(e))), bg.sendLpImprove("license_expiration_dismiss"), i.close()
                }), o.find(".tierExpiredLearnMore").bind("click", function() {
                    bg.sendLpImprove("license_expiration_learn_more"), bg.openPricingPage()
                })
            }
        }(this)
};
//# sourceMappingURL=sourcemaps/vaultTierExpiredDialog.js.map