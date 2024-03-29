var LpTag = function(s, i) {
    "use strict";
    var t = function(t) {
        return this.options = s.extend({
            $parentEl: null,
            $lpTagEl: null,
            class: "lpTag",
            text: i.translateString("NEW"),
            id: ""
        }, t), this.setup(), this
    };
    return t.prototype.setup = function() {
        this.options.$lpTagEl = s("<span></span>").attr("id", "lpTag-" + this.options.id.split("#")[1]), this.options.$lpTagEl.addClass(this.options.class), this.options.$lpTagEl.text(this.options.text), this.options.$parentEl.append(this.options.$lpTagEl)
    }, t.prototype.remove = function() {
        return this.options.$lpTagEl && s("#lpTag-" + this.options.id.split("#")[1]).remove(), this
    }, t.prototype.show = function() {
        return this.options.$lpTagEl && this.options.$lpTagEl.show(), this
    }, t.prototype.hide = function() {
        return this.options.$lpTagEl && this.options.$lpTagEl.hide(), this
    }, t
}(jQuery, Strings);
//# sourceMappingURL=sourcemaps/lpTag.js.map