var MigrationPopup = function(o) {
    Dialog.call(this, o, {
        submitDialog: !1,
        confirmOnClose: !1,
        hideButtons: !0,
        responsive: !1,
        hideHeader: !0
    })
};
MigrationPopup.prototype = Object.create(Dialog.prototype), (MigrationPopup.prototype.constructor = MigrationPopup).prototype.initialize = function() {
    var i;
    Dialog.prototype.initialize.apply(this, arguments), i = this, document.getElementById("openVault").onclick = function() {
        bg.sendLpImprove("migration_formfill_notification_clicked", {
            action: "update_now",
            version: "dropdown"
        }), bg.MigrationBackground.setShouldStartMigration(!0), bg.openvault(), i.close()
    }, document.getElementById("closePopup").onclick = function() {
        bg.sendLpImprove("migration_formfill_notification_clicked", {
            action: "not_now",
            version: "dropdown"
        });
        var o = 36e5;
        bg.MigrationBackground.postponeMigration(o), i.close()
    }, bg.sendLpImprove("migration_formfill_notification_shown", {
        version: "dropdown"
    })
};
//# sourceMappingURL=sourcemaps/migrationPopup.js.map