var IntroTourPreferences = function(r) {
    "use strict";

    function n() {}
    return n.save = function(e) {
        r.setPreferences("IntroTour", JSON.stringify(e))
    }, n.retrieve = function() {
        var e = r.getPreference("IntroTour");
        return e && "null" !== e && "undefined" !== e ? JSON.parse(e) : null
    }, n.migrateOldPrefs = function() {
        var e = n.retrieve();
        e && e.remainingTours && 0 == e.remainingTours.length && (e.remainingTours = {
            vault41Tour: {
                name: "vault41Tour",
                showDate: new Date,
                isLater: !1,
                isTaken: !0,
                isNever: !1
            }
        }, n.save(e))
    }, n
}(LPProxy);
//# sourceMappingURL=sourcemaps/Tour/introTourPreferences.js.map