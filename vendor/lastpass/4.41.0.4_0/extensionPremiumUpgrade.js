ExtensionPremiumUpgrade = function(e) {
    var t = $(e.body),
        s = 0,
        r = function(e) {
            s = e, t.addClass("extensionPremiumUpgrade panelIsActive"), i(), bg.sendLpImprove("consumer_test_ad_shown", {
                version: s
            })
        },
        i = function() {
            var e, t, r, i, n, a;
            switch (s) {
                case 1:
                    e = "Control Your Digital Life", t = "Stay secure with LastPass Premium", r = "Designate an emergency access contact & digital heir", i = "Share vital passwords with family and friends", n = "Fast-track yourself to priority tech support", a = "premium";
                    break;
                case 2:
                    e = "Dark Web Monitoring", t = "Stay safe with LastPass Premium", r = "Monitor the security of your online accounts", i = "Receive alerts if accounts are compromised", n = "Achieve peace of mind in your digital life", a = "dark";
                    break;
                case 3:
                    e = "Credit Monitoring", t = "Stay up to date with LastPass Premium", r = "Track your credit scores", i = "Get alerts when scores change", n = "Stay ahead of potential risks", a = "credit";
                    break;
                default:
                    o()
            }
            document.getElementById("premiumUpgradeHeader").innerHTML = e, document.getElementById("premiumUpgradeSubHeader").innerHTML = t, document.getElementById("premiumUpgradeText1").innerHTML = r, document.getElementById("premiumUpgradeText2").innerHTML = i, document.getElementById("premiumUpgradeText3").innerHTML = n, document.getElementById("upgradeImg").src = "images/premiumUpdatePanel/" + a + ".svg", $("#premiumUpgradeButton").click(function() {
                bg.sendLpImprove("consumer_test_ad_clicked", {
                    version: s
                }), bg.openURL("https://lastpass.com/premium/payment"), LPPlatform.closePopup(!0)
            })
        };

    function o() {
        t.removeClass("panelIsActive"), $("#premiumUpgradePanel").remove(), ExtensionDropdown.setSize()
    }
    return {
        initialize: r
    }
}(document);
//# sourceMappingURL=sourcemaps/extensionPremiumUpgrade.js.map