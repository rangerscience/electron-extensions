var Policies = function() {
    return {
        logNameEnabled: e,
        logUserNameEnabled: n,
        logUrlEnabled: r,
        getSaveSiteToPersonal: t,
        getAccountSelectionBasedOnEmail: s,
        showSecureNotes: i
    };

    function o(e) {
        var o, n = g_prefoverrides;
        switch (e) {
            case "showcredmon":
                o = bg.get("g_showcredmon");
                break;
            default:
                o = n && n[e]
        }
        return "boolean" == typeof o && (o = o ? "1" : "0"), o
    }

    function e() {
        return g_loglogins && 4 == (4 & g_loglogins)
    }

    function n() {
        return g_loglogins && 8 == (8 & g_loglogins)
    }

    function r() {
        return g_loglogins && 2 == (2 & g_loglogins)
    }

    function t() {
        return o("savesitestopersonal")
    }

    function s(e) {
        return "function" == typeof e && e("1" === o("accountselectionbasedonemail")), "1" === o("accountselectionbasedonemail")
    }

    function i() {
        return void 0 === g_prefoverrides.show_notes || !!Number(g_prefoverrides.show_notes)
    }
}();
//# sourceMappingURL=sourcemaps/policies.js.map