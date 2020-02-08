var BackgroundOverlay = function(t) {
    this.options = $.extend({
        id: "blurBackground",
        parentEl: null,
        thisEl: null,
        spinnerEl: null,
        classStyle: "blur-background",
        shadeStyle: "dark",
        text: null,
        clickHandler: null
    }, t), this.setup()
};
! function(t) {
    BackgroundOverlay.prototype.setup = function() {
        this.options.parentEl && (this.options.thisEl = this.options.parentEl.find("#" + this.options.id), 0 === this.options.thisEl.length ? this.options.thisEl = t(LPTools.createElement("div", {
            id: this.options.id,
            class: this.options.classStyle + " " + this.options.shadeStyle
        }, null)) : this.options.thisEl.detach(), this.options.parentEl.append(this.options.thisEl), this.options.contentEl = t(LPTools.createElement("div", {
            class: "background-overlay-content"
        }, null)), this.options.thisEl.append(this.options.contentEl), this.setupSpinner(), this.setupText(), this.options.thisEl.hide(), this.options.clickHandler && this.options.thisEl.click(this.options.clickHandler))
    }, BackgroundOverlay.prototype.setupSpinner = function() {
        this.options.spinnerEl = this.options.thisEl.find(".loading"), 0 === this.options.spinnerEl.length && (this.options.spinnerEl = t(LPTools.createElement("div", {
            class: "loading"
        }, null)), this.options.spinnerEl.append(LPTools.createElement("div", {
            class: "loading-inner"
        }, null)), this.options.contentEl.append(this.options.spinnerEl)), this.options.spinnerEl.hide()
    }, BackgroundOverlay.prototype.setupText = function() {
        this.options.text && (this.options.textEl = t(LPTools.createElement("div", {
            class: "loading-text"
        }, this.options.text)), this.options.contentEl.append(this.options.textEl))
    }, BackgroundOverlay.prototype.toggleLoading = function(t) {
        this.options.thisEl && (t ? this.options.spinnerEl.show() : this.options.spinnerEl.hide())
    }, BackgroundOverlay.prototype.show = function(t) {
        this.options.thisEl && (this.toggleLoading(t), this.options.thisEl.show())
    }, BackgroundOverlay.prototype.hide = function() {
        this.options.thisEl && this.options.thisEl.hide()
    }
}(jQuery);
//# sourceMappingURL=sourcemaps/backgroundOverlay.js.map