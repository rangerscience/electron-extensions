can_clear_clipboard = function() {
    return g_can_clear_clipboard
}, can_copy_to_clipboard = function() {
    return g_can_copy_to_clipboard
}, db_prepend = function(e) {
    return e
}, have_binary = function() {
    return g_have_binary
}, setcurrenttabid = function(e) {
    g_currenttabid = e
}, setcurrenturl = function(e) {
    g_currenturl = e
}, getClearRecentTime = function() {
    return clearRecentTime
}, getmatchingsites = function() {
    return g_sites_tld
}, is_chrome_portable = function() {
    return g_is_chrome_portable
}, is_user_debug_enabled = function() {
    return g_user_debug_enabled
}, clear_badge = function() {
    g_badgedata = null
}, get_key_iterations = function() {
    return g_key_iterations
}, lpGetPref = function(e, n) {
    return Preferences.get(e, n)
};
//# sourceMappingURL=sourcemaps/backgroundFrame.js.map