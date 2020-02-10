var OmarVaultMigrationDialog = function(t) {
    Dialog.call(this, t, {
        dynamicHeight: !1,
        buttonsInsideContent: !0,
        closeButtonEnabled: !1,
        hidePreviousDialogs: !0,
        hideHeader: !0
    })
};
OmarVaultMigrationDialog.prototype = Object.create(Dialog.prototype), (OmarVaultMigrationDialog.prototype.constructor = OmarVaultMigrationDialog).prototype.initialize = function(t) {
    Dialog.prototype.initialize.apply(this, arguments), t[0].addEventListener("onload", function() {
        bg.sendLpImprove("vault_migration_notification_seen", {
            version: "4"
        })
    }), document.getElementById("omar-vault-migration-update-now").addEventListener("click", function() {
        bg.sendLpImprove("vault_migration_notification_clicked", {
            version: "4"
        }), window.location.href = "https://lastpass.com/?ac=1"
    })
};
//# sourceMappingURL=sourcemaps/omarVaultMigrationDialog.js.map