VaultLicenseExpiration = function() {
    var i, e, a, t, n, s, r = function() {
            switch (i) {
                case Constants.USER_ENTERPRISE_ADMIN:
                    p(t) ? (m("dismissedEnterpriseExpired"), "trial" === a ? dialogs.vaultTierExpiredDialog.open({
                        dialogId: "EnterpriseTrialExpired",
                        paymentPage: bg.openEnterprisePaymentPage,
                        storageItem: "dismissedEnterpriseExpired"
                    }) : dialogs.vaultTierExpiredDialog.open({
                        dialogId: "EnterpriseLicenseExpired",
                        paymentPage: bg.openEnterprisePaymentPage,
                        storageItem: "dismissedEnterpriseExpired"
                    })) : "normal" === a && o(t) && 1 !== n ? d("Your LastPass Enterprise license expires in %1 days.", t, bg.openEnterprisePaymentPage, "dismissedEnterpriseExpiring") : "trial" === a && o(t) && d("Your LastPass Enterprise trial expires in %1 days.", t, bg.openEnterprisePaymentPage, "dismissedEnterpriseExpiring");
                    break;
                case Constants.USER_TEAMS_ADMIN:
                    p(t) ? (m("dismissedTeamsExpired"), "trial" === a ? dialogs.vaultTierExpiredDialog.open({
                        dialogId: "TeamsTrialExpired",
                        paymentPage: bg.openTeamsPaymentPage,
                        storageItem: "dismissedTeamsExpired"
                    }) : dialogs.vaultTierExpiredDialog.open({
                        dialogId: "TeamsLicenseExpired",
                        paymentPage: bg.openTeamsPaymentPage,
                        storageItem: "dismissedTeamsExpired"
                    })) : "normal" === a && o(t) && 1 !== n ? d("Your LastPass Teams license expires in %1 days.", t, bg.openTeamsPaymentPage, "dismissedTeamsExpiring") : "trial" === a && o(t) && d("Your LastPass Teams trial expires in %1 days.", t, bg.openTeamsPaymentPage, "dismissedTeamsExpiring");
                    break;
                case Constants.USER_FAMILY_ADMIN:
                    p(t) ? (m("dismissedFamiliesExpired"), "trial" === a ? dialogs.vaultTierExpiredDialog.open({
                        dialogId: "FamiliesTrialExpired",
                        paymentPage: bg.openFamiliesPaymentPage,
                        storageItem: "dismissedFamiliesExpired"
                    }) : dialogs.vaultTierExpiredDialog.open({
                        dialogId: "FamiliesLicenseExpired",
                        paymentPage: bg.openFamiliesPaymentPage,
                        storageItem: "dismissedFamiliesExpired"
                    })) : "normal" === a && o(t) && 1 !== n ? d("Your LastPass Families license expires in %1 days.", t, bg.openFamiliesPaymentPage, "dismissedFamiliesExpiring") : "trial" === a && o(t) && d("Your LastPass Families trial expires in %1 days.", t, bg.openFamiliesPaymentPage, "dismissedFamiliesExpiring");
                    break;
                case Constants.USER_PREMIUM_TRIAL:
                    o(e) && d("Your LastPass Premium trial expires in %1 days.", e, bg.openPremiumPaymentPage, "dismissedPremiumTrialExpiring");
                    break;
                case Constants.USER_FREE:
                    l(_premiumTrialExpirationDays) && dialogs.vaultTierExpiredDialog.open({
                        dialogId: "PremiumTrialExpired",
                        paymentPage: bg.openPremiumPaymentPage,
                        storageItem: "dismissedPremiumTrialExpired"
                    })
            }
        },
        o = function(e) {
            return void 0 !== e && e <= 7 && 1 <= e
        },
        p = function(e) {
            return void 0 !== e && e < 1
        },
        l = function(e) {
            return void 0 !== e && e < 1 && -31 < e
        },
        d = function(e, i, s, a) {
            m(a), dialogs.vaultInfoBanner.open({
                title: Strings.translateString(e, i),
                dialogClass: "banner",
                segmentEvents: {
                    show: {
                        name: "license_expiration_seen"
                    },
                    upgrade: {
                        name: "license_expiration_upgrade"
                    },
                    learn: {
                        name: "license_expiration_learn_more"
                    },
                    close: {
                        name: "license_expiration_dismiss"
                    }
                },
                buttons: [{
                    style: "btn-link",
                    sizeStyle: "col-1 btn-container-sm",
                    text: Strings.translateString("Learn More"),
                    action: function() {
                        bg.openPricingPage()
                    },
                    closeOnClick: !0,
                    segment: "learn"
                }, {
                    style: "btn-gray",
                    sizeStyle: "col-2 btn-container-lg",
                    text: Strings.translateString("Upgrade"),
                    action: function() {
                        s()
                    },
                    closeOnClick: !0,
                    segment: "upgrade"
                }]
            })
        },
        m = function(e) {
            var i = JSON.parse(sessionStorage.getItem("expirationData"));
            null === i && (i = {}), i[e] = 1, sessionStorage.setItem("expirationData", JSON.stringify(i))
        },
        g = function(e, i, s) {
            var a = JSON.parse(e.getItem(i));
            if (null === a) return !1;
            var t = !1;
            return s.forEach(function(e) {
                t = t || a[e]
            }), t
        },
        E, x, c, u, P, y;
    return {
        initialize: function() {
            (i = LPProxy.getAccountClass()) !== Constants.USER_PREMIUM_TRIAL && i !== Constants.USER_FREE || (e = "number" == typeof bg.get("g_premium_trial_exp_days") ? bg.get("g_premium_trial_exp_days") : void 0)
        },
        setLicenseStatus: function(e, i, s) {
            a = e, t = i, n = s
        },
        removeStoredLocalStoreExpPrefs: function(e) {
            var i;
            360 < e && null !== JSON.parse(localStorage.getItem("expiredData")) && localStorage.removeItem("expiredData")
        },
        showExpirationMessage: r,
        premiumTrialStatusChecker: function() {
            return i === Constants.USER_PREMIUM_TRIAL && o(e) && !g(sessionStorage, "expirationData", ["dismissedPremiumTrialExpiring"]) || i === Constants.USER_FREE && l(e) && !g(localStorage, "expiredData", ["dismissedPremiumTrialExpired"])
        },
        companyLicenseStatusChecker: function() {
            var e = i === Constants.USER_FAMILY_ADMIN || i === Constants.USER_ENTERPRISE_ADMIN || i === Constants.USER_TEAMS_ADMIN;
            return e && bg.BackgroundServer.licensing.getCompanyLicensing(function(e) {
                !1 !== e.success || VaultLicenseExpiration.hasDismissedEnterpriseExpiredNotification() ? e.hasOwnProperty("daysleft") && !VaultLicenseExpiration.hasDismissedEnterpriseExpiringNotification() ? (VaultLicenseExpiration.removeStoredLocalStoreExpPrefs(e.daysleft), VaultLicenseExpiration.setLicenseStatus("normal", e.daysleft, e.hasOwnProperty("renewalstatus") ? e.renewalstatus : -1), VaultLicenseExpiration.showExpirationMessage()) : e.hasOwnProperty("trialdaysleft") && !VaultLicenseExpiration.hasDismissedEnterpriseExpiringNotification() && (VaultLicenseExpiration.setLicenseStatus("trial", e.trialdaysleft, -1), VaultLicenseExpiration.showExpirationMessage()) : (VaultLicenseExpiration.setLicenseStatus("TrialExpired" === e.code ? "trial" : "normal", 0, -1), VaultLicenseExpiration.showExpirationMessage())
            }), e
        },
        hasDismissedEnterpriseExpiringNotification: function() {
            return g(sessionStorage, "expirationData", ["dismissedEnterpriseExpiring", "dismissedTeamsExpiring", "dismissedFamiliesExpiring"])
        },
        hasDismissedEnterpriseExpiredNotification: function() {
            return g(localStorage, "expiredData", ["dismissedEnterpriseExpired", "dismissedTeamsExpired", "dismissedFamiliesExpired"])
        }
    }
}();
//# sourceMappingURL=sourcemaps/vaultLicenseExpiration.js.map