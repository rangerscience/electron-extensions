LPFeatures = function() {
    var r = "feature-",
        o = "no-feature-",
        i = $(document.body),
        e = function(e) {
            var t = bg.get("g_prefoverrides")[e];
            return void 0 === t || "1" === t
        },
        a = function(e) {
            var t, n = bg.get("g_prefoverrides");
            switch (e) {
                case "showcredmon":
                    t = bg.get("g_showcredmon");
                    break;
                default:
                    t = n && n[e]
            }
            return "boolean" == typeof t && (t = t ? "1" : "0"), t
        },
        g = function(e, t, n) {
            i.removeClass(o + e), i.removeClass(r + e), void 0 !== n && !0 !== n || t ? void 0 !== n && !1 !== n || !t || i.addClass(r + e) : i.addClass(o + e)
        },
        u = function() {
            return null != bg.get("LPContentScriptFeatures") && void 0 !== bg.get("LPContentScriptFeatures") && void 0 !== bg.get("LPContentScriptFeatures").omaria && bg.get("LPContentScriptFeatures").omaria
        },
        t, s = function() {
            return null != bg.get("LPContentScriptFeatures") && void 0 !== bg.get("LPContentScriptFeatures") && void 0 !== bg.get("LPContentScriptFeatures").safari_legacy_messaging && bg.get("LPContentScriptFeatures").safari_legacy_messaging
        },
        n, c, d, l, _, p, b, S = function() {
            return null != bg.get("LPContentScriptFeatures") && void 0 !== bg.get("LPContentScriptFeatures") && void 0 !== bg.get("LPContentScriptFeatures").emergency_access_restricted && bg.get("LPContentScriptFeatures").emergency_access_restricted
        },
        F, P, C = function() {
            return null != bg.get("LPContentScriptFeatures") && void 0 !== bg.get("LPContentScriptFeatures") && void 0 !== bg.get("LPContentScriptFeatures").try_families_enabled && bg.get("LPContentScriptFeatures").try_families_enabled
        },
        L, f = function() {
            return null != bg.get("LPContentScriptFeatures") && void 0 !== bg.get("LPContentScriptFeatures") && void 0 !== bg.get("LPContentScriptFeatures").one_to_one_sharing_restricted && bg.get("LPContentScriptFeatures").one_to_one_sharing_restricted
        },
        v = function() {
            return bg.get("LPContentScriptFeatures") && !!bg.get("LPContentScriptFeatures").pbkdf2_iterations_migration_enabled
        },
        w = function() {
            return null != bg.get("LPContentScriptFeatures") && void 0 !== bg.get("LPContentScriptFeatures") && void 0 !== bg.get("LPContentScriptFeatures").download_extension_web_prompt && bg.get("LPContentScriptFeatures").download_extension_web_prompt
        },
        m = function() {
            return null != bg.get("LPContentScriptFeatures") && void 0 !== bg.get("LPContentScriptFeatures") && void 0 !== bg.get("LPContentScriptFeatures").emergency_access_repair && bg.get("LPContentScriptFeatures").emergency_access_repair
        },
        y = function() {
            return null != bg.get("LPContentScriptFeatures") && void 0 !== bg.get("LPContentScriptFeatures") && void 0 !== bg.get("LPContentScriptFeatures").license_expiration && bg.get("LPContentScriptFeatures").license_expiration
        },
        h = function() {
            return null != bg.get("LPContentScriptFeatures") && void 0 !== bg.get("LPContentScriptFeatures") && void 0 !== bg.get("LPContentScriptFeatures").redux_vault_data && bg.get("LPContentScriptFeatures").redux_vault_data
        };
    return {
        updateFeatures: function(e) {
            for (var t in e) {
                var n = a(t);
                "undefined" != typeof prevValue && g(t, "1" === n, e[t])
            }
            g("omaria", u()), g("safariLegacyMessaging", s()), bg.get("g_new_settings_enabled") && $("#newSettingsMenuItem").addClass("visible")
        },
        allowIndividualSharing: function() {
            return this.allowShare() && !this.allowShareOnlyFolders()
        },
        allowSharedFolders: function() {
            return this.allowShare()
        },
        allowClipboardCopy: function() {
            return bg.can_copy_to_clipboard()
        },
        allowImport: function() {
            return e("import")
        },
        allowShare: function() {
            return e("share")
        },
        allowShareOutsideEnterprise: function() {
            return e("shareout")
        },
        allowShareOnlyFolders: function() {
            return "1" === bg.get("g_prefoverrides").share_onlyfolders
        },
        allowShareDomain: function(e) {
            return !0
        },
        allowPasswordRevert: function() {
            return e("revert")
        },
        allowNotes: function() {
            return e("show_notes")
        },
        allowFingerprint: function() {
            return e("show_fingerprint")
        },
        allowBookmarklets: function() {
            return e("bookmarklets")
        },
        allowHint: function() {
            return e("hint")
        },
        allowGift: function() {
            return bg.get("LPContentScriptFeatures").gift_menu_item_button
        },
        allowLaunchApplication: function() {
            return bg.canLaunchApplication()
        },
        allowNewSettings: function() {
            return bg.get("g_new_settings_enabled")
        },
        allowTryFamilies: function() {
            return C()
        },
        restrictOneToOneSharing: function() {
            return f()
        },
        pbkdf2IterartionsMigration: function() {
            return v()
        },
        isDownloadExtensionWebPromptEnabled: function() {
            return w()
        },
        restrictEmergencyAccessForFree: function() {
            return S()
        },
        allowLicenseExpiration: function() {
            return y()
        },
        allowOmarIA: u,
        allowMigrationOptIn: function() {
            return null != bg.get("LPContentScriptFeatures") && void 0 !== bg.get("LPContentScriptFeatures") && void 0 !== bg.get("LPContentScriptFeatures").migration_opt_in && bg.get("LPContentScriptFeatures").migration_opt_in
        },
        allowFormfillMigration: function() {
            return !!bg.get("LPContentScriptFeatures").formfill_migration
        },
        allowOmarDrawer: function() {
            return null != bg.get("LPContentScriptFeatures") && void 0 !== bg.get("LPContentScriptFeatures") && void 0 !== bg.get("LPContentScriptFeatures").omardrawer && bg.get("LPContentScriptFeatures").omardrawer
        },
        isDogfood: function() {
            return null != bg.get("LPContentScriptFeatures") && void 0 !== bg.get("LPContentScriptFeatures") && void 0 !== bg.get("LPContentScriptFeatures").isDogfood && bg.get("LPContentScriptFeatures").isDogfood
        },
        safari_legacy_messaging: s,
        secondary_onboarding_visible: function() {
            return null != bg.get("LPContentScriptFeatures") && void 0 !== bg.get("LPContentScriptFeatures") && void 0 !== bg.get("LPContentScriptFeatures").secondary_onboarding_visible && bg.get("LPContentScriptFeatures").secondary_onboarding_visible
        },
        secondary_onboarding_new_design_incentive: function() {
            return null != bg.get("LPContentScriptFeatures") && void 0 !== bg.get("LPContentScriptFeatures") && void 0 !== bg.get("LPContentScriptFeatures").secondary_onboarding_new_design_incentive && bg.get("LPContentScriptFeatures").secondary_onboarding_new_design_incentive
        },
        secondary_onboarding_new_design_no_incentive: function() {
            return null != bg.get("LPContentScriptFeatures") && void 0 !== bg.get("LPContentScriptFeatures") && void 0 !== bg.get("LPContentScriptFeatures").secondary_onboarding_new_design_no_incentive && bg.get("LPContentScriptFeatures").secondary_onboarding_new_design_no_incentive
        },
        secondary_onboarding_old_design_incentive: function() {
            return null != bg.get("LPContentScriptFeatures") && void 0 !== bg.get("LPContentScriptFeatures") && void 0 !== bg.get("LPContentScriptFeatures").secondary_onboarding_old_design_incentive && bg.get("LPContentScriptFeatures").secondary_onboarding_old_design_incentive
        },
        secondary_onboarding_old_design_no_incentive: function() {
            return null != bg.get("LPContentScriptFeatures") && void 0 !== bg.get("LPContentScriptFeatures") && void 0 !== bg.get("LPContentScriptFeatures").secondary_onboarding_old_design_no_incentive && bg.get("LPContentScriptFeatures").secondary_onboarding_old_design_no_incentive
        },
        hide_cloud_apps_policy_enabled: function() {
            return null != bg.get("LPContentScriptFeatures") && void 0 !== bg.get("LPContentScriptFeatures") && void 0 !== bg.get("LPContentScriptFeatures").hide_cloud_apps_policy_enabled && bg.get("LPContentScriptFeatures").hide_cloud_apps_policy_enabled
        },
        familiesProvisioningUpdate: function() {
            return null != bg.get("LPContentScriptFeatures") && void 0 !== bg.get("LPContentScriptFeatures") && void 0 !== bg.get("LPContentScriptFeatures").families_provisioning_update && bg.get("LPContentScriptFeatures").families_provisioning_update
        },
        canBackgroundOpenPopover: function() {
            return LPPlatform.canBackgroundOpenPopover()
        }
    }
}();
//# sourceMappingURL=sourcemaps/features.js.map