var IntroTourDialog = function(f, u, m, _, w) {
    "use strict";
    var e = function(t) {
        _.call(this, t, {
            closeButtonEnabled: !1,
            maximizeButtonEnabled: !1,
            dynamicHeight: !0,
            hideHeader: !0,
            hideButtons: !0,
            confirmOnClose: !1,
            buttonsInsideContent: !0,
            isModal: !1
        }), e.prototype._arrow = null, e.prototype._options = null
    };

    function s(t, e, i, o, n) {
        var s = 0;
        switch (t) {
            case "top":
            case "left":
                s = e ? i : i + o;
                break;
            case "right":
            case "bottom":
                s = e ? i + o - n : i - n
        }
        return s
    }

    function r(t, e, i, o, n) {
        var s = 0;
        switch (t) {
            case "top":
            case "left":
                s = e;
                break;
            case "right":
            case "bottom":
                s = e + i - n;
                break;
            case "center":
            default:
                s = o - Math.round(n / 2)
        }
        return s
    }
    return e.prototype = Object.create(_.prototype), (e.prototype.constructor = e).prototype.createButton = function(t, e, i, o) {
        if (t && e) {
            var n = e.style || "",
                s = e.sizeStyle || "col-6",
                r = e.autoId || "",
                a = f("<div></div>").addClass(s).append(f("<button></button>").text(e.text).data("index", i).addClass("btn-base radius-sm " + n).attr("automation-id", r).off().on("click", o));
            t.append(a)
        }
    }, e.prototype.setup = function(t, n) {
        if (n && n.options && n.flow) {
            var s = this;
            s._options = f.extend({
                title: m.translateString("Tour")
            }, n.options);
            var e = s.$element.find(".buttons").empty();
            s.$element.removeClass().addClass("dialog responsive intro-tour-dialog"), s._options.class && s.$element.addClass(s._options.class);
            for (var r = function(t) {
                    t && ("string" == typeof t ? n.flow.executeAction(t) : t.event && n.flow.executeAction(t.event, t.params))
                }, i = 0; i < s._options.buttons.length; i++) {
                var o = function(t) {
                    t.preventDefault(), n.flow.closeCurrentStep();
                    var e = f(t.target).data("index");
                    if (f.isNumeric(e) && 0 <= e && e < s._options.buttons.length) {
                        var i = s._options.buttons[e];
                        if (i.action && Array.isArray(i.action))
                            for (var o = 0; o < i.action.length; o++) r(i.action[o]);
                        else r(i.action)
                    }
                };
                this.createButton(e, s._options.buttons[i], i, o)
            }
            var a = t.find("#btnClose");
            if (s._options.hideXCloseBtn) a.hide();
            else {
                var l = function(t) {
                    t.preventDefault(), n.flow.closeCurrentStep(), s._options.exitAction && n.flow.executeAction(s._options.exitAction)
                };
                a.off().on("click", l)
            }
            this.setText(this._options.title, this.$element.find("#mainTitle"));
            var p = "function" == typeof this._options.contentText1 ? this._options.contentText1() : this._options.contentText1;
            this.setText(p, this.$element.find("#contentText1"));
            var h = "function" == typeof this._options.contentText2 ? this._options.contentText2() : this._options.contentText2;
            if (this.setText(h, this.$element.find("#contentText2")), s._options.contentImage && s._options.contentImage.src && 0 === this.$element.find("." + s._options.contentImage.style).length) {
                var c = f("<img />").addClass(s._options.contentImage.style).attr("src", s._options.contentImage.src),
                    d = t.find("#contentSection1");
                "after" === s._options.contentImage.placement ? d.append(c) : d.prepend(c)
            }
            if (s._options.contentLink && s._options.contentLink.href && s._options.contentLink.text) {
                var g = f("<a>").addClass(s._options.contentLink.style).attr("target", "_blank").attr("href", s._options.contentLink.href).text(s._options.contentLink.text);
                t.find("#contentSection1 p").append(" ").append(g)
            }
            _.prototype.setup.apply(this, arguments), this.setSize(this._options.position), this.setPosition(this._options.position), this._options.position && this._options.position.arrowPosition ? (this._arrow = this._arrow || new u({
                $parentEl: this.$element,
                arrowClass: "arrow-box a-white"
            }), this._arrow.show(this._options.position.orientation, this._options.position.arrowPosition)) : this._arrow && this._arrow.hide(), this.$overlayDialogEl = f("#dialogOverlay"), this.$overlayDialogEl && 0 < this.$overlayDialogEl.length && this.$overlayDialogEl.detach(), this.subscribeToWindowResize()
        }
        w.get(w.INTRO_TOURS_LOADED).publish()
    }, e.prototype.setText = function(t, e) {
        t && e ? e.text(t).show() : e.hide()
    }, e.prototype.setPosition = function(t) {
        t.dialogPosition = null, t && t.targetId && (t.$targetEl = f(t.targetId), t.targetDimensions = this.getDimensions(t.$targetEl), t.dialogPosition = this.computeDialogPosition(this.$element, t)), t.dialogPosition && this.$element.offset(t.dialogPosition)
    }, e.prototype.setSize = function(t) {
        if (t) {
            t.$targetEl = f(t.targetId);
            var e = this.getDimensions(t.$targetEl),
                i;
            t.fillWidth ? (i = f(t.fillWidth)) && 0 < i.length ? this.$element.width(i.width()) : this.$element.width(e.width) : this.$element.css("width", ""), t.fillHeight ? (i = f(t.fillHeight)) && 0 < i.length ? this.$element.height(i.height()) : this.$element.height(e.height) : this.$element.css("height", "")
        }
    }, e.prototype.subscribeToWindowResize = function() {
        var t = this;
        t.positionAndResizeHandler = function() {
            t.setSize(t._options.position), t.setPosition(t._options.position)
        }, window && window.addEventListener("resize", t.positionAndResizeHandler), w.get(w.VAULT_LEFT_MENU_TOGGLE).subscribe(t.positionAndResizeHandler), w.get(w.EMPTY_VAULT_STATE_CHANGE).subscribe(t.positionAndResizeHandler)
    }, e.prototype.unSubscribeToWindowResize = function() {
        var t = this;
        "function" == typeof t.positionAndResizeHandler && (w.get(w.VAULT_LEFT_MENU_TOGGLE).unsubscribe(t.positionAndResizeHandler), w.get(w.EMPTY_VAULT_STATE_CHANGE).unsubscribe(t.positionAndResizeHandler), window && (window.removeEventListener && window.removeEventListener("resize", t.positionAndResizeHandler), t.positionAndResizeHandler = null))
    }, e.prototype.computeDialogPosition = function(t, e) {
        if (t && 0 < t.length && e && 0 < e.$targetEl.length) {
            var i = e.arrowPosition ? 15 : 0;
            e.dialogDimensions = this.getDimensions(t);
            var o = {
                    top: 0,
                    left: 0
                },
                n = e.align || "center";
            switch (e.orientation) {
                case "top":
                    o.left = r(n, e.targetDimensions.left, e.targetDimensions.width, e.targetDimensions.center.left, e.dialogDimensions.width), o.top = s(e.orientation, e.inside, e.targetDimensions.top, e.targetDimensions.height, e.dialogDimensions.height) + i;
                    break;
                case "bottom":
                    o.left = r(n, e.targetDimensions.left, e.targetDimensions.width, e.targetDimensions.center.left, e.dialogDimensions.width), o.top = s(e.orientation, e.inside, e.targetDimensions.top, e.targetDimensions.height, e.dialogDimensions.height) - i;
                    break;
                case "left":
                    o.top = r(n, e.targetDimensions.top, e.targetDimensions.height, e.targetDimensions.center.top, e.dialogDimensions.height), o.left = s(e.orientation, e.inside, e.targetDimensions.left, e.targetDimensions.width, e.dialogDimensions.width) + i;
                    break;
                case "right":
                    o.top = r(n, e.targetDimensions.top, e.targetDimensions.height, e.targetDimensions.center.top, e.dialogDimensions.height), o.left = s(e.orientation, e.inside, e.targetDimensions.left, e.targetDimensions.width, e.dialogDimensions.width) - i
            }
            return e.offset && (o.top += e.offset.top, o.left += e.offset.left), o
        }
        return null
    }, e.prototype.getDimensions = function(t) {
        if (t && 0 < t.length) {
            var e = f.extend({
                height: t.height(),
                width: t.width()
            }, t.offset());
            return e.center = {
                top: Math.round(e.top + e.height / 2),
                left: Math.round(e.left + e.width / 2)
            }, e
        }
        return null
    }, e.prototype.close = function(t) {
        t && (_.prototype.close.apply(this, arguments), this.unSubscribeToWindowResize())
    }, e.prototype.showBlurOverlay = function() {}, e.prototype.hideBlurOverlay = function() {}, e.prototype.closeOnSuccess = function() {}, e.prototype.getZIndex = function() {
        var t = this.$element.css("z-index");
        if ("auto" === t) return 0;
        var e = parseInt(t);
        return e < 8 ? 8 : e
    }, e
}(jQuery, lpArrow, Strings, Dialog, Topics);
//# sourceMappingURL=sourcemaps/Tour/introTourDialog.js.map