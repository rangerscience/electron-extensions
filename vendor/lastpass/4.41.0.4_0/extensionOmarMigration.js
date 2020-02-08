ExtensionOmarMigration = function(e) {
    var t = $(e.body),
        o = 0,
        a = function(e) {
            if (3 === (o = e)) {
                var a = document.getElementById("panelContainer");
                $("#panelContainer").remove(), $("#container").append(a), document.getElementById("panelContainer").setAttribute("id", "panelContainerOmarPhase3"), t.addClass("omarMigrationphase3 extensionOmarMigration panelIsActive"), document.getElementById("innerWrapper").style.opacity = "0.1"
            } else t.addClass("extensionOmarMigration panelIsActive");
            n(), bg.sendLpImprove("vault_migration_notification_seen", {
                version: o
            })
        },
        n = function() {
            var e, a, t, n, i;
            switch (o) {
                case 1:
                    e = "The new LastPass is waiting", a = "Bold, fast, and easy to navigate", t = "Organized the way you live and work", n = "Built for sharing passwords and more", i = "omarVaultMigrationPhase1";
                    break;
                case 2:
                    e = "Why wait 12 days? Get the new LastPass now!", a = "Bold, fast, and easy to navigate", t = "Organized the way you live and work", n = "Built for sharing passwords and more", i = "omarVaultMigrationPhase2";
                    break;
                case 3:
                    e = "The time has come, the time is now", a = "Update LastPass. We’ll show you how.", n = t = "", i = "omarVaultMigrationPhase3";
                    break;
                default:
                    r()
            }
            3 === o ? document.getElementById("omarVaultMigrationHeaderPhase3").innerHTML = e : document.getElementById("omarVaultMigrationHeader").innerHTML = e, document.getElementById("omarVaultMigrationText1").innerHTML = a, document.getElementById("omarVaultMigrationText2").innerHTML = t, document.getElementById("omarVaultMigrationText3").innerHTML = n, document.getElementById("omarVaultMigrationImg").src = "images/omarVaultMigration/" + i + ".svg", $("#omarVaultMigrationButton").click(function() {
                bg.sendLpImprove("vault_migration_notification_clicked", {
                    version: o
                }), bg.openURL("https://lastpass.com/?ac=1"), LPPlatform.closePopup(!0)
            })
        };

    function r() {
        t.removeClass("panelIsActive"), $("#omaVaultMigrationPanel").remove(), document.getElementById("innerWrapper").style.opacity = "100%", ExtensionDropdown.setSize()
    }
    return {
        initialize: a
    }
}(document);
//# sourceMappingURL=sourcemaps/extensionOmarMigration.js.map