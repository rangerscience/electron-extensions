var UpgradeFamiliesForFolderSharingDialog = function(o) {
    Dialog.call(this, o, {
        additionalHeaderClasses: [],
        dynamicHeight: !0,
        buttonsInsideContent: !0,
        title: Strings.translateString("It's time to upgrade!"),
        closeButtonEnabled: !0,
        hidePreviousDialogs: !0
    })
};
UpgradeFamiliesForFolderSharingDialog.prototype = Object.create(Dialog.prototype), (UpgradeFamiliesForFolderSharingDialog.prototype.constructor = UpgradeFamiliesForFolderSharingDialog).prototype.initialize = function(o) {
    var i;
    Dialog.prototype.initialize.apply(this, arguments), i = this, document.querySelector("#dialogCloseButton").classList.remove("dialogCloseButton"), document.querySelector("#dialogCloseButton").textContent = String.fromCharCode(10006), document.querySelector("#dialogCloseButton").classList.add("family-opt-in-close"), o.find("#families-upgrade-now").bind("click", function() {
        window.open("https://www.lastpass.com/families", "_blank"), bg.sendLpImprove("shared_folder_families_lightbox_click", {
            action: "upgrade"
        })
    }), o.find("#families-upgrade-postpone").bind("click", function() {
        i.close(!0), bg.sendLpImprove("shared_folder_families_lightbox_click", {
            action: "no_thanks"
        })
    }), o.find("#dialogCloseButton").bind("click", function() {
        i.close(!0), bg.sendLpImprove("shared_folder_families_lightbox_click", {
            action: "close"
        })
    })
};
//# sourceMappingURL=sourcemaps/upgradeFamiliesForFolderSharingDialog.js.map