! function(m) {
    m.contextMenu = {
        shadow: !0,
        shadowOffset: 0,
        shadowOffsetX: 5,
        shadowOffsetY: 5,
        shadowWidthAdjust: -3,
        shadowHeightAdjust: -3,
        shadowOpacity: .2,
        shadowClass: "context-menu-shadow",
        shadowColor: "black",
        offsetX: 0,
        offsetY: 0,
        appendTo: "body",
        direction: "down",
        constrainToScreen: !0,
        showTransition: "show",
        hideTransition: "hide",
        showSpeed: null,
        hideSpeed: null,
        showCallback: null,
        hideCallback: null,
        className: "context-menu",
        itemClassName: "context-menu-item",
        itemHoverClassName: "context-menu-item-hover",
        disabledItemClassName: "context-menu-item-disabled",
        disabledItemHoverClassName: "context-menu-item-disabled-hover",
        separatorClassName: "context-menu-separator",
        innerDivClassName: "context-menu-item-inner",
        themePrefix: "context-menu-theme-",
        theme: "default",
        separator: "context-menu-separator",
        target: null,
        menu: null,
        shadowObj: null,
        bgiframe: null,
        shown: !1,
        useIframe: !1,
        create: function(e, t) {
            var a = m.extend({}, this, t);
            return "string" == typeof e ? a.menu = m(e) : "function" == typeof e ? a.menuFunction = e : a.menu = a.createMenu(e, a), a.menu && (a.menu.css({
                display: "none"
            }), m(a.appendTo).append(a.menu)), a.shadow && (a.createShadow(a), a.shadowOffset && (a.shadowOffsetX = a.shadowOffsetY = a.shadowOffset)), m("body").bind("contextmenu", function() {
                a.hide()
            }), a
        },
        createIframe: function() {
            return m('<iframe frameborder="0" tabindex="-1" src="javascript:false" style="display:block;position:absolute;z-index:-1;filter:Alpha(Opacity=0);"/>')
        },
        createMenu: function(e, a) {
            var n = a.className;
            m.each(a.theme.split(","), function(e, t) {
                n += " " + a.themePrefix + t
            });
            for (var t = m("<table cellspacing=0 cellpadding=0></table>").click(function() {
                    return a.hide(), !1
                }), s = m("<tr></tr>"), o = m("<td></td>"), i = m('<div class="' + n + '"></div>'), d = 0; d < e.length; d++) {
                var r;
                if (e[d] == m.contextMenu.separator) i.append(a.createSeparator());
                else
                    for (var h in e[d]) i.append(a.createMenuItem(h, e[d][h]))
            }
            return a.useIframe && o.append(a.createIframe()), t.append(s.append(o.append(i))), t
        },
        createMenuItem: function(e, t) {
            var a = this;
            "function" == typeof t && (t = {
                onclick: t
            });
            var n = m.extend({
                    onclick: function() {},
                    className: "",
                    hoverClassName: a.itemHoverClassName,
                    icon: "",
                    disabled: !1,
                    title: "",
                    hoverItem: a.hoverItem,
                    hoverItemOut: a.hoverItemOut
                }, t),
                s = n.icon ? "background-image:url(" + n.icon + ");" : "";
            "" != s && (s = ' style="' + s + '"');
            var o = m('<div class="' + a.itemClassName + " " + n.className + (n.disabled ? " " + a.disabledItemClassName : "") + '" title="' + n.title + '"></div>').click(function(e) {
                    return !a.isItemDisabled(this) && n.onclick.call(a.target, this, a, e)
                }).hover(function() {
                    n.hoverItem.call(this, a.isItemDisabled(this) ? a.disabledItemHoverClassName : n.hoverClassName)
                }, function() {
                    n.hoverItemOut.call(this, a.isItemDisabled(this) ? a.disabledItemHoverClassName : n.hoverClassName)
                }),
                i = m('<div class="' + a.innerDivClassName + '"' + s + ">" + e + "</div>");
            return o.append(i), o
        },
        createSeparator: function() {
            return m('<div class="' + this.separatorClassName + '"></div>')
        },
        isItemDisabled: function(e) {
            return m(e).is("." + this.disabledItemClassName)
        },
        hoverItem: function(e) {
            m(this).addClass(e)
        },
        hoverItemOut: function(e) {
            m(this).removeClass(e)
        },
        createShadow: function(e) {
            e.shadowObj = m('<div class="' + e.shadowClass + '"></div>').css({
                display: "none",
                position: "absolute",
                zIndex: 9998,
                opacity: e.shadowOpacity,
                backgroundColor: e.shadowColor
            }), m(e.appendTo).append(e.shadowObj)
        },
        showShadow: function(e, t, a) {
            var n = this;
            n.shadow && n.shadowObj.css({
                width: n.menu.width() + n.shadowWidthAdjust + "px",
                height: n.menu.height() + n.shadowHeightAdjust + "px",
                top: t + n.shadowOffsetY + "px",
                left: e + n.shadowOffsetX + "px"
            }).addClass(n.shadowClass)[n.showTransition](n.showSpeed)
        },
        beforeShow: function() {
            return !0
        },
        show: function(e, t) {
            var a = this,
                n = t.pageX,
                s = t.pageY;
            if (a.target = e, !1 !== a.beforeShow()) {
                a.menuFunction && (a.menu && m(a.menu).remove(), a.menu = a.createMenu(a.menuFunction(a, e), a), a.menu.css({
                    display: "none"
                }), m(a.appendTo).append(a.menu));
                var o = a.menu;
                n += a.offsetX, s += a.offsetY;
                var i = a.getPosition(n, s, a, t);
                a.showShadow(i.x, i.y, t), a.useIframe && o.find("iframe").css({
                    width: o.width() + a.shadowOffsetX + a.shadowWidthAdjust,
                    height: o.height() + a.shadowOffsetY + a.shadowHeightAdjust
                }), o.css({
                    top: i.y + "px",
                    left: i.x + "px",
                    position: "absolute",
                    zIndex: 9999
                })[a.showTransition](a.showSpeed, a.showCallback ? function() {
                    a.showCallback.call(a)
                } : null), a.shown = !0, m(document).one("click", null, function() {
                    a.hide()
                })
            }
        },
        getPosition: function(e, t, a, n) {
            var s = e + a.offsetX,
                o = t + a.offsetY,
                i = m(a.menu).height(),
                d = m(a.menu).width(),
                r = a.direction;
            if (a.constrainToScreen) {
                var h = m(window),
                    l = h.height(),
                    c = h.width();
                "down" == r && l / 2 < o && (r = "up");
                var u = s + d - h.scrollLeft();
                c < u && (s -= u - c)
            }
            return "up" == r && (o -= i), {
                x: s,
                y: o
            }
        },
        hide: function() {
            var e = this;
            e.shown && (e.iframe && m(e.iframe).hide(), e.menu && e.menu[e.hideTransition](e.hideSpeed, e.hideCallback ? function() {
                e.hideCallback.call(e)
            } : null), e.shadow && e.shadowObj[e.hideTransition](e.hideSpeed)), e.shown = !1
        }
    }, m.fn.contextMenu = function(e, t) {
        var a = m.contextMenu.create(e, t);
        return this.each(function() {
            m(this).bind("contextmenu", function(e) {
                return a.show(this, e), !1
            })
        })
    }
}(jQuery);
//# sourceMappingURL=sourcemaps/jquery.contextmenu.js.map