var IntroTourShade = function(s) {
    "use strict";
    var t = function(t) {
        this.options = s.extend({
            $parentEl: s("body"),
            $shadeWrapEl: null,
            shadeClass: "shade-wrap"
        }, t), this.setup()
    };
    return t.prototype.setup = function() {
        this.options.$shadeWrapEl = s("<div></div>").addClass(this.options.shadeClass), this.options.$parentEl.append(this.options.$shadeWrapEl), this.hide()
    }, t.prototype.show = function() {
        this.options.$shadeWrapEl.show()
    }, t.prototype.hide = function() {
        this.options.$shadeWrapEl.hide()
    }, t.prototype.cleanup = function() {
        this.options.$shadeWrapEl && this.options.$shadeWrapEl.remove()
    }, t
}(jQuery);
//# sourceMappingURL=sourcemaps/Tour/introTourShade.js.map