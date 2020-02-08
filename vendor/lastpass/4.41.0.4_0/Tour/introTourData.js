var IntroTourData = function(t, u, n, i) {
    "use strict";
    var r = function() {};
    return r.prototype.getAvailableTours = function() {
        var r = {},
            a = {
                omarMigrationTour: n.getTourData(),
                familyOnboardingTour: i.getTourData(),
                omarVaultTour: t.getTourData(),
                vault41Tour: u.getTourData()
            };
        for (var o in a) a.hasOwnProperty(o) && a[o] && a[o].isAvailable() && (r[o] = a[o]);
        return r
    }, r
}(omarVaultTour, vault41Tour, omarMigrationTour, familyOnboardingTour);
//# sourceMappingURL=sourcemaps/Tour/introTourData.js.map