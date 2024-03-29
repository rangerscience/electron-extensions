var EmailToolTip = function(o) {
    EmailToolTip.prototype.options = $.extend({
        toolTipEl: null,
        parentEl: null,
        emailField: null,
        backActionFn: null
    }, o), EmailToolTip.prototype.setup()
};
! function(o) {
    EmailToolTip.prototype.setup = function() {
        if (EmailToolTip.prototype.options.parentEl && EmailToolTip.prototype.options.toolTipEl) {
            EmailToolTip.prototype.options.toolTipEl.detach(), EmailToolTip.prototype.options.parentEl.prepend(EmailToolTip.prototype.options.toolTipEl), EmailToolTip.prototype.options.toolTipEl.hide();
            var p = EmailToolTip.prototype.options.toolTipEl.find("#currentEmail"),
                o;
            if (EmailToolTip.prototype.options.emailField.input.bind("change", function(o) {
                    p.text(EmailToolTip.prototype.options.emailField.getValue())
                }), EmailToolTip.prototype.options.backActionFn) EmailToolTip.prototype.options.toolTipEl.find("#backBtn").click(EmailToolTip.prototype.options.backActionFn)
        }
    }, EmailToolTip.prototype.toggle = function(o) {
        EmailToolTip.prototype.options.toolTipEl && (o ? EmailToolTip.prototype.options.toolTipEl.show() : EmailToolTip.prototype.options.toolTipEl.hide())
    }
}(jQuery);
//# sourceMappingURL=sourcemaps/emailToolTip.js.map