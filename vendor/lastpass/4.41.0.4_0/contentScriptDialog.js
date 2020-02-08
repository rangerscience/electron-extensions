! function() {
    var e = Dialog,
        i = LPTools.getURLParams(),
        t = function(t, o) {
            e.call(this, t, o), this.childDialogs = [], this.pendingAnimations = 0
        };
    ((t.prototype = Object.create(Dialog.prototype)).constructor = t).prototype.close = function(o) {
        this.childDialogs.forEach(function(t) {
            t.close(o)
        });
        var t = e.prototype.close.apply(this, arguments);
        return t && (0 === e.prototype.getDialogCount() && 0 === LPDialog.getPendingCount() ? csTop.LPFrame.close(i.dialogID) : this.setFrameSize()), this.data.modal && csTop.LPFrame.hideModal(), t
    }, t.prototype.setFrameSize = function(t) {
        csTop.LPFrame.css({
            id: i.dialogID,
            css: this.getSize(),
            callback: t && t.callback
        })
    }, t.prototype.addChildDialog = function(t) {
        this.childDialogs.push(t), this.$element.append(t.$element)
    };
    var a = function(t) {
        var o = t.getBoundingClientRect();
        return t = $(t), {
            top: o.top - parseInt(t.css("margin-top")),
            right: o.right + parseInt(t.css("margin-right")),
            bottom: o.bottom + parseInt(t.css("margin-bottom")),
            left: o.left - parseInt(t.css("margin-left"))
        }
    };
    t.prototype.getSize = function() {
        for (var t = $(".dialog:visible, .selectDropdownList:visible"), o = null, e = 0; e < t.length; ++e) {
            var i = a(t[e]);
            null === o ? o = i : (o.top = Math.min(o.top, i.top), o.right = Math.max(o.right, i.right), o.bottom = Math.max(o.bottom, i.bottom), o.left = Math.min(o.left, i.left))
        }
        return {
            "max-height": o ? o.bottom - o.top : 0,
            "max-width": o ? o.right - o.left : 0
        }
    }, t.prototype.isOverlay = function() {
        return !1
    }, t.prototype.requestAnimationFrame = function(t) {
        var o = this,
            e = function() {
                ++o.pendingAnimations, t(function(t) {
                    --o.pendingAnimations, 0 === o.pendingAnimations && o.setFrameSize(t)
                })
            };
        0 === this.pendingAnimations ? csTop.LPFrame.css({
            id: i.dialogID,
            css: {
                "max-height": "none",
                "max-width": "none"
            },
            callback: e
        }) : e()
    }, t.prototype.postSetup = function() {
        e.prototype.postSetup.apply(this, arguments), this.hide(), csTop.LPFrame.css({
            id: i.dialogID,
            css: {
                display: "block"
            },
            callback: this.createHandler(function() {
                this.showInitial()
            })
        })
    }, t.prototype.showInitial = function() {
        this.show(), this.data.modal && csTop.LPFrame.showModal(), this.data.fullScreen || csTop.LPFrame.css({
            id: i.dialogID,
            css: this.getSize()
        })
    }, t.prototype.addPasswordEye = function(t) {
        t.LP_addPasswordEye({
            checkPermissionHandler: this.checkViewPasswordHandler,
            includeGenerateButton: t.hasClass("generate"),
            textual: !0
        })
    };
    var o = $.extend({}, Dialog.prototype);
    $.extend(Dialog.prototype, t.prototype), Dialog = t, e.prototype = o
}();
//# sourceMappingURL=sourcemaps/contentScriptDialog.js.map