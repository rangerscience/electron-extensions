require("sdk/webextension").startup().then(function(e) {
    e.browser.runtime.onConnect.addListener(function(e) {
        var s = function() {
            e.postMessage({
                usernameHash: fix_userhash(g_username_hash),
                userPrefs: g_userprefs,
                globalPrefs: g_gblprefs
            })
        };
        "legacy-data" === e.name && (Topics.get(Topics.PREFERENCES_READ).subscribe(s), Topics.get(Topics.PREFERENCES_WRITE).subscribe(s))
    })
});
//# sourceMappingURL=sourcemaps/embedded_webext.js.map