var ExtensionPreferences = function() {
    var t = {};
    return {
        getConst: function(e, n) {
            n(window[e])
        },
        getDefault: function(e, n) {
            n(Preferences.getDefault(e))
        },
        read: function(e, n) {
            n(Preferences.get(e))
        },
        write: function(e, n, r) {
            Preferences.set(e, n)
        },
        addListener: function(e, n) {
            var r = t[e] || [];
            r.push(n), t[e] = r
        },
        removeListener: function(e, n) {
            var r = t[e] || [];
            t[e] = r.filter(function(e) {
                return e !== n
            })
        },
        triggerChange: function(e, n) {
            var r;
            (t[e] || []).forEach(function(e) {
                e(n)
            })
        },
        getUnavailablePreferences: function(e) {
            e(LPPlatform.getUnavailablePreferences())
        }
    }
}();
//# sourceMappingURL=sourcemaps/preferences/preferences.js.map