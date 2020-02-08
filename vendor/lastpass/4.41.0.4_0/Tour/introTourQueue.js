var IntroTourQueue = function(n, t) {
    "use strict";
    var r = function(r) {
        this.tourSetData = new t;
        var i = this.tourSetData.getAvailableTours();
        if (r && r.remainingTours) {
            for (var e in i) i.hasOwnProperty(e) && r.remainingTours[e] && (i[e] = n.extend(!0, i[e], r.remainingTours[e]));
            this.remainingTours = i
        } else this.remainingTours = i
    };
    return r.prototype.laterThisTour = function() {
        var r = this._findNextAvailableTour();
        r && (r.showDate = new Date, r.showDate.setDate(r.showDate.getDate() + 3), r.isLater = !0)
    }, r.prototype.takeThisTour = function() {
        var r = this._findNextAvailableTour();
        r && (r.isTaken = !0)
    }, r.prototype.neverThisTour = function() {
        var r = this._findNextAvailableTour();
        r && (r.isNever = !0)
    }, r.prototype.getAvailableTour = function(r) {
        var i = null,
            e = this._findNextAvailableTour(r);
        return e && (i = n.extend(!0, {}, e)), i
    }, r.prototype._findNextAvailableTour = function(r) {
        for (var i in this.remainingTours)
            if (this.remainingTours.hasOwnProperty(i) && (r || !this.remainingTours[i].isTaken && !this.remainingTours[i].isNever && new Date >= new Date(this.remainingTours[i].showDate))) return this.remainingTours[i];
        return null
    }, r.prototype.getOptions = function() {
        var r = {};
        for (var i in this.remainingTours) this.remainingTours.hasOwnProperty(i) && (r[i] = {
            name: this.remainingTours[i].name,
            showDate: this.remainingTours[i].showDate,
            isLater: this.remainingTours[i].isLater,
            isTaken: this.remainingTours[i].isTaken,
            isNever: this.remainingTours[i].isNever
        });
        return {
            remainingTours: r
        }
    }, r.prototype.makeLaterNowTours = function() {
        for (var r in this.remainingTours) this.remainingTours.hasOwnProperty(r) && this.remainingTours[r] && !0 === this.remainingTours[r].isLater && (this.remainingTours[r].showDate = new Date)
    }, r
}(jQuery, IntroTourData);
//# sourceMappingURL=sourcemaps/Tour/introTourQueue.js.map