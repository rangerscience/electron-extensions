var ConvertLegacySharedFolderDialog = function(e) {
    Dialog.call(this, e, {
        additionalHeaderClasses: ["icon"],
        dynamicHeight: !0,
        nextButtonText: Strings.translateString("Convert"),
        title: Strings.translateString("Convert to Legacy Shared Folder")
    })
};
ConvertLegacySharedFolderDialog.prototype = Object.create(Dialog.prototype), (ConvertLegacySharedFolderDialog.prototype.constructor = ConvertLegacySharedFolderDialog).prototype.open = function(e) {
    (e = e || {}).groupName = e.groupName, e.shareId = e.shareId, Dialog.prototype.open.call(this, e)
}, ConvertLegacySharedFolderDialog.prototype.postSetup = function(e) {
    Dialog.prototype.postSetup.apply(this, arguments), $("#legacy_premium_folder_name").text(e.groupName)
}, ConvertLegacySharedFolderDialog.prototype.handleSubmit = function(e, o) {
    LPRequest.makeRequest(LPProxy.convertLegacySharedFolder, {
        params: o,
        requestSuccessOptions: {
            closeDialog: !0
        },
        success: function() {
            Topics.get(Topics.SUCCESS).publish(Strings.translateString("Conversion Successful")), Topics.get(Topics.REFRESH_DATA).publish()
        }
    })
};
//# sourceMappingURL=sourcemaps/convertLegacySharedFolderDialog.js.map