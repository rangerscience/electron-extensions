bg = chrome.extension.getBackgroundPage().LPPlatform.getBackgroundInterface(), bg && document.addEventListener("DOMContentLoaded", function() {
    Topics.get(Topics.INITIALIZED).publish(), bg.get_selected_tab(null, function(e) {
        bg.setcurrenttabid(e.id), bg.setcurrenturl(bg.gettaburl(e)), ExtensionDropdown.open()
    })
});
//# sourceMappingURL=sourcemaps/initializeDropdown.js.map