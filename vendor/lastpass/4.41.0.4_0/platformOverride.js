! function(t) {
    t.getExtensionDropdownDelay = function() {
        return bg.LPPlatform.isMac() ? 50 : -1
    };
    var o = (i = $(document.getElementsByTagName("html")), r = function(e, n) {
            bg.LPPlatform.isMac() ? (setTimeout(function() {
                i.css({
                    height: e + 1,
                    width: n
                })
            }, 50), setTimeout(function() {
                i.css({
                    height: e,
                    width: n
                })
            }, 100)) : i.css({
                height: e,
                width: n
            })
        }, function(e, n) {
            r(e, n)
        }),
        i, r, n, s;
    t.setDropdownPopoverSize = function(e, n) {
        o(e, n)
    }, t.checkBrowserPasswordManager = function(n) {
        chrome.privacy && chrome.privacy.services && chrome.privacy.services.passwordSavingEnabled && chrome.privacy.services.passwordSavingEnabled.get({}, function(e) {
            e.value && "controllable_by_this_extension" === e.levelOfControl && n()
        })
    }, t.setupDropdownImportMenu_single = t.setupDropdownImportMenu, t.setupDropdownImportMenu = function(e) {
        bg.is_opera_chromium() || bg.is_firefox_webext() || bg.get("g_is_mac") ? t.setupDropdownImportMenu_single(e) : ($("#chromeImportMenuItem").bind("click", function() {
            bg.lpevent("m_igoo"), bg.openimportchrome()
        }), $("#importMenuItem").bind("click", function() {
            bg.lpevent("m_i"), bg.openimport()
        }))
    }, t.canBackgroundOpenPopover = function() {
        return !1
    }, t.getUnavailablePreferences = (n = t.getUnavailablePreferences, function() {
        var e = n();
        return e.enablenewlogin = !bg.get("g_shownewloginoption"), e.hidecontextspan = void 0 === chrome.contextMenus, e
    }), t.handlePreferenceChanges = (s = t.handlePreferenceChanges, function(e) {
        s(e), void 0 !== e.hideContextMenus && bg.LPContextMenus.createContextMenus(), !1 === e.showmatchingbadge && bg.clear_badge_text()
    }), t.openCreateAccount = function() {
        bg.LPPlatform.openTabDialog("createAccountSimple")
    }, t.showDownloader = function() {
        return !0
    }, t.installBinary = function(n, o) {
        chrome.permissions.contains({
            permissions: ["nativeMessaging"]
        }, function(e) {
            n || e ? bg.openURL(bg.get("base_url") + "installer/") : t.requestNativeMessaging(o)
        })
    }, t.requestNativeMessaging = function(e) {
        bg.Preferences.set("native_messaging_asked", "1"), e ? window.open("/native_messaging.html?hidenever=1") : void 0 !== chrome.permissions && chrome.permissions.request({
            permissions: ["nativeMessaging", "privacy"]
        }, function(e) {
            e && alert(bg.gs("Please restart your browser to finish enabling native messaging."))
        })
    }
}(LPPlatform);
//# sourceMappingURL=sourcemaps/platformOverride.js.map