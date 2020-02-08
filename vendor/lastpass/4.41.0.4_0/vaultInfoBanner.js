var VaultInfoBanner = function(d, t, c, e) {
    "use strict";
    var g = function(t) {
        c.call(this, t, {
            maximizeButtonEnabled: !1,
            dynamicHeight: !0,
            hideHeader: !0,
            hideButtons: !0,
            confirmOnClose: !1,
            buttonsInsideContent: !0,
            isModal: !1
        }), g.prototype._options = {}
    };

    function o(t) {
        var e = g.prototype._options.dimensions,
            o = d("#options"),
            n = d("#tools"),
            i = d("#sharingMenu"),
            s = d("#emergencyAccessMenu");
        t ? (o.removeAttr("style"), s.removeAttr("style"), n.removeAttr("style"), i.removeAttr("style"), d("#main").removeAttr("style")) : (o.is(":visible") && (o.css("top", e.dialogPosition.top + e.dialogDimensions.height), d("#main").css("top", o.innerHeight() + o.offset().top + "px")), i.is(":visible") && (i.css("top", e.dialogPosition.top + e.dialogDimensions.height), o.css("top", i.innerHeight() + i.offset().top + "px"), d("#main").css("top", o.innerHeight() + o.offset().top + "px")), n.is(":visible") && (n.css("top", e.dialogPosition.top + e.dialogDimensions.height), d("#main").css("top", n.innerHeight() + n.offset().top + "px")), s.is(":visible") && (s.css("top", e.dialogPosition.top + e.dialogDimensions.height), d("#main").css("top", s.innerHeight() + s.offset().top + "px")))
    }

    function i(t, e, o, n, i) {
        var s = 0;
        switch (t) {
            case "top":
            case "left":
                s = e ? o : o + n;
                break;
            case "right":
            case "bottom":
                s = e ? o + n - i : o - i
        }
        return s
    }

    function s(t, e, o, n, i) {
        var s = 0;
        switch (t) {
            case "top":
            case "left":
                s = e;
                break;
            case "right":
            case "bottom":
                s = e + o - i;
                break;
            case "center":
            default:
                s = n - Math.round(i / 2)
        }
        return s
    }
    return g.prototype = Object.create(c.prototype), g.prototype.createButton = function(t, e, o, n) {
        if (t && e) {
            var i = e.style || "",
                s = e.sizeStyle || "col-6",
                p = e.autoId || "",
                r = d("<div></div>").addClass(s + " infoBtn").append(d("<button></button>").text(e.text).data("index", o).addClass("btn-base radius-sm " + i).attr("automation-id", p).off().on("click", n));
            t.append(r)
        }
    }, g.prototype.setup = function(t, e) {
        if (c.prototype.setup.apply(this, arguments), e) {
            var n = this;
            g.prototype.$element = this.$element, g.prototype._options = e || {}, g.prototype.sendSegmentEvent("show"), g.prototype.$element.removeClass().addClass("dialog responsive vault-info-banner"), g.prototype._options.dialogClass && g.prototype.$element.addClass(g.prototype._options.dialogClass), g.prototype.setText(g.prototype._options.title, g.prototype.$element.find("#mainTitle"));
            var o = "function" == typeof g.prototype._options.contentText1 ? g.prototype._options.contentText1() : g.prototype._options.contentText1;
            g.prototype.setText(o, g.prototype.$element.find("#contentText1"));
            var i = "function" == typeof g.prototype._options.contentText2 ? g.prototype._options.contentText2() : g.prototype._options.contentText2;
            g.prototype.setText(i, g.prototype.$element.find("#contentText2"));
            var s = t.find("#btnClose");
            if (g.prototype._options.hideXCloseBtn) s.hide();
            else {
                var p = function(t) {
                    g.prototype._options.closeHandler && "function" == typeof g.prototype._options.closeHandler && g.prototype._options.closeHandler(), g.prototype.sendSegmentEvent("close"), n.close(!0)
                };
                s.off().on("click", p)
            }
            var r = n.$element.find(".buttons");
            d(".infoBtn").remove(), "banner" === g.prototype._options.dialogClass && (r = n.$element.find(".mainTitle")), g.prototype._options.buttons = g.prototype._options.buttons ? g.prototype._options.buttons : [];
            for (var a = 0; a < g.prototype._options.buttons.length; a++) {
                var l = function(t) {
                    t.preventDefault();
                    var e = d(t.target).data("index");
                    if (d.isNumeric(e) && 0 <= e && e < g.prototype._options.buttons.length) {
                        var o = g.prototype._options.buttons[e];
                        void 0 !== o.segment && g.prototype.sendSegmentEvent(o.segment), o.action && "function" == typeof o.action && o.action(), o.closeOnClick && n.close(!0)
                    }
                };
                g.prototype.createButton(r, g.prototype._options.buttons[a], a, l)
            }
            g.prototype._options.dimensions = {
                targetId: "#header",
                align: "left",
                orientation: "top",
                fillWidth: "#main"
            }, d("#vault").addClass("vault-info-overrides"), g.prototype.setSize(g.prototype.$element, g.prototype._options.dimensions), g.prototype.setPosition(g.prototype.$element, g.prototype._options.dimensions), g.prototype.subscribeToWindowResize()
        }
    }, g.prototype.setText = function(t, e) {
        t && e ? e.text(t).show() : e.hide()
    }, g.prototype.setPosition = function(t, e) {
        e.dialogPosition = null, e && e.targetId && (e.$targetEl = d(e.targetId), e.targetDimensions = g.prototype.getDimensions(e.$targetEl), e.dialogPosition = g.prototype.computeDialogPosition(t, e)), e.dialogPosition && t.offset(e.dialogPosition), o()
    }, g.prototype.setSize = function(t, e) {
        if (e) {
            e.$targetEl = d(e.targetId);
            var o = g.prototype.getDimensions(e.$targetEl),
                n;
            e.fillWidth ? (n = d(e.fillWidth)) && 0 < n.length ? t.width(n.width()) : t.width(o.width) : t.css("width", ""), e.fillHeight ? (n = d(e.fillHeight)) && 0 < n.length ? t.height(n.height()) : t.height(o.height) : t.css("height", "")
        }
    }, g.prototype.subscribeToWindowResize = function() {
        g.prototype.positionAndResizeHandler = function() {
            g.prototype.setPosition(g.prototype.$element, g.prototype._options.dimensions), g.prototype.setSize(g.prototype.$element, g.prototype._options.dimensions)
        }, window && window.addEventListener("resize", g.prototype.positionAndResizeHandler), e.get(e.VAULT_LEFT_MENU_TOGGLE).subscribe(g.prototype.positionAndResizeHandler), e.get(e.EMPTY_VAULT_STATE_CHANGE).subscribe(g.prototype.positionAndResizeHandler)
    }, g.prototype.unSubscribeToWindowResize = function() {
        "function" == typeof g.prototype.positionAndResizeHandler && (e.get(e.VAULT_LEFT_MENU_TOGGLE).unsubscribe(g.prototype.positionAndResizeHandler), e.get(e.EMPTY_VAULT_STATE_CHANGE).unsubscribe(g.prototype.positionAndResizeHandler), window && (window.removeEventListener && window.removeEventListener("resize", g.prototype.positionAndResizeHandler), g.prototype.positionAndResizeHandler = null))
    }, g.prototype.computeDialogPosition = function(t, e) {
        if (t && 0 < t.length && e && 0 < e.$targetEl.length) {
            e.dialogDimensions = g.prototype.getDimensions(t);
            var o = {
                    top: 0,
                    left: 0
                },
                n = e.align || "center";
            switch (e.orientation) {
                case "top":
                case "bottom":
                    o.left = s(n, e.targetDimensions.left, e.targetDimensions.width, e.targetDimensions.center.left, e.dialogDimensions.width), o.top = i(e.orientation, e.inside, e.targetDimensions.top, e.targetDimensions.height, e.dialogDimensions.height);
                    break;
                case "left":
                case "right":
                    o.top = s(n, e.targetDimensions.top, e.targetDimensions.height, e.targetDimensions.center.top, e.dialogDimensions.height), o.left = i(e.orientation, e.inside, e.targetDimensions.left, e.targetDimensions.width, e.dialogDimensions.width)
            }
            return e.offset && (o.top += e.offset.top, o.left += e.offset.left), o
        }
        return null
    }, g.prototype.getDimensions = function(t) {
        if (t && 0 < t.length) {
            var e = d.extend({
                height: t.height(),
                width: t.width()
            }, t.offset());
            return e.center = {
                top: Math.round(e.top + e.height / 2),
                left: Math.round(e.left + e.width / 2)
            }, e
        }
        return d.extend({
            height: 0,
            width: 0
        }, {
            top: 0,
            left: 0,
            center: {
                top: 0,
                left: 0
            }
        })
    }, g.prototype.close = function(t) {
        t && (o(!0), d("#vault").removeClass("vault-info-overrides"), c.prototype.close.apply(this, arguments), g.prototype.unSubscribeToWindowResize())
    }, g.prototype.getZIndex = function() {
        var t = g.prototype.$element ? g.prototype.$element.css("z-index") : "auto";
        if ("auto" === t) return 0;
        var e = parseInt(t);
        return e < 8 ? 8 : e
    }, g.prototype.sendSegmentEvent = function(t) {
        if (void 0 !== g.prototype._options.segmentEvents && void 0 !== g.prototype._options.segmentEvents[t]) {
            var e = {};
            void 0 !== g.prototype._options.segmentEvents[t].properties && (e = g.prototype._options.segmentEvents[t].properties), bg.sendLpImprove(g.prototype._options.segmentEvents[t].name, e)
        } else console.log(t + " is not a defined segment event")
    }, g
}(jQuery, Strings, Dialog, Topics);
//# sourceMappingURL=sourcemaps/vaultInfoBanner.js.map