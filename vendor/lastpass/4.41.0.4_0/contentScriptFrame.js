LPFrame = function() {
    var d = 0,
        m = {},
        t = null,
        n = function(e) {
            var t = ++d,
                i = e.tracking,
                r = null,
                n = new LPEventManager,
                o = [],
                a = null,
                l = null,
                s = e.interfaceDefinition;
            m[t] = this;
            var c = getchromeurl(e.url),
                u = "&lplanguage=";
            "undefined" != lplanguage && null != lplanguage ? u += lplanguage : u += bg.get("g_language"), c += (-1 < c.indexOf("?") ? "&" : "?") + "dialogID=" + t + u;
            var f = LPPlatform.newFrameContainer(c, t);
            this.close = function() {
                n.publishEvent("close"), f.close(), window.removeEventListener("resize", this.refreshPosition), window.removeEventListener("scroll", this.refreshPosition), delete m[t]
            }, this.onClose = function(e) {
                n.addEventListener("close", e)
            }, this.css = function(e) {
                f.css(e), this.refreshPosition()
            };
            var g = function(e, t, n) {
                if (n) {
                    if ("string" == typeof n) {
                        if (!n.indexOf("%")) throw "trackElement only supports numbers or percentages for translations";
                        n = e[t] * parseInt(n.substring(0, n.indexOf("%"))) / 100
                    }
                    return n
                }
                return 0
            };
            this.refreshPosition = function() {
                if (i) {
                    var e = i.element.getBoundingClientRect(),
                        t = e.top,
                        n = e.left;
                    i.frameTranslation && (t += g(f, "clientHeight", i.frameTranslation.y), n += g(f, "clientWidth", i.frameTranslation.x)), i.targetTranslation && (t += g(i.element, "clientHeight", i.targetTranslation.y), n += g(i.element, "clientWidth", i.targetTranslation.x)), f.css({
                        top: t,
                        left: n
                    })
                }
            }, this.trackElement = function(e) {
                i = e, window.addEventListener("resize", this.refreshPosition), window.addEventListener("scroll", this.refreshPosition)
            }, this.getInterface = function() {
                return null === l && (a = function(e) {
                    null === r ? o.push(e) : LPPlatform.requestFramework.sendRequest({
                        type: "contentScriptRequest",
                        data: e,
                        frameID: r
                    })
                }, l = Interfaces.createInstance(s, {
                    direct: !1,
                    context: "contentScript",
                    requestFunction: a
                })), l
            };
            var h = function() {
                for (var e = [], t = document.getElementsByTagName("iframe"), n = 0; n < t.length; ++n) {
                    var i = t[n];
                    i.src !== c && i.getAttribute("lpsrc") !== c || e.push(i)
                }
                return e
            };
            this.initialize = function(e) {
                if (null === r) {
                    var t = h();
                    if (!(1 < t.length)) {
                        r = e;
                        for (var n = 0; n < o.length; ++n) a(o[n]);
                        return !0
                    }
                    t.forEach(function(e) {
                        e.parentElement.removeChild(e)
                    })
                }
                return !1
            }, this.getParams = function() {
                return e.dialogData
            }, this.getDialogID = function() {
                return t
            }, i && this.trackElement(i)
        };
    Topics.get(Topics.CLEAR_DATA).subscribe(function() {
        for (var e in m) m[e].close()
    });
    var e, i, r, o, a, l, s = function(e) {
            return new n(e)
        },
        c, u;
    return {
        css: function(e) {
            if (e) {
                var t = m[e.id];
                t && t.css(e.css)
            }
            "function" == typeof e.callback && e.callback()
        },
        close: function(e) {
            var t = m[e];
            t && t.close()
        },
        openDialog: function(e, t, n) {
            var i = s({
                url: "contentScriptDialog.html",
                interfaceDefinition: Interfaces.ContentScriptDialogInterface
            });
            return i.getInterface().LPDialog.openDialog(e, t), n && (n.css && i.css(n.css), n.language && (i.url = "contentScriptDialog.html?lplanguage=" + encodeURIComponent(n.language)), n.callback && n.callback(i.getDialogID())), i
        },
        openFrame: s,
        initializeRequestFramework: function(e, t, n) {
            var i = m[e],
                r = !1;
            i && (r = i.initialize(n)), t && t(r)
        },
        getParams: function(e, t) {
            t(m[e].getParams())
        },
        showModal: function(e) {
            null === t && (t = document.createElement("div"), LPContentScriptTools.setCSS(t, {
                position: "fixed",
                "z-index": "2147483646",
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
                "background-color": "rgba(52, 61, 68, 0.6)"
            })), document.body.appendChild(t)
        },
        hideModal: function() {
            t && document.body.removeChild(t)
        },
        numberOfDialogs: function() {
            return m ? Object.keys(m).length : 0
        }
    }
}();
//# sourceMappingURL=sourcemaps/contentScriptFrame.js.map