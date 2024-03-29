LPTab = function() {
    var u = function(t, n, e, i) {
        this.loadedContexts = {}, this.data = e, this.instance = n, this.tab = t, this.disconnect = i
    };
    return u.prototype.extendInstance = function(t) {
            t && t.context && !this.loadedContexts.hasOwnProperty(t.context) && (Interfaces.createInstance(Interfaces[this.tab.tabDetails.interfaceName], {
                instance: this.instance,
                direct: !1,
                context: t.context,
                requestFunction: this.data.contentScriptRequester
            }), this.loadedContexts[t.context] = !0)
        }, u.prototype.getFrameID = function() {
            return this.data.frameID
        }, u.prototype.isTop = function() {
            return this.data.topWindow
        }, u.prototype.getInstance = function() {
            return this.instance
        }, u.prototype.disconnect = function() {
            this.disconnect()
        },
        function(t) {
            var a = null,
                o = {},
                n = new LPEventManager,
                s = 0,
                e = null;
            this.tabDetails = t, this.getTop = function() {
                return a ? a.instance : null
            }, this.extendTop = function(t) {
                a.extendInstance(t)
            };
            var r = function() {
                clearTimeout(e), i() >= s ? n.publishEvent("framesloaded") : e = setTimeout(function() {
                    n.publishEvent("framesloaded")
                }, 1e3)
            };
            this.addFrame = function(t, n, e) {
                var i = new u(this, t, n, e);
                i.isTop() ? a = i : o[i.getFrameID()] = i, s += n.childFrameCount, r()
            }, this.removeFrame = function(t) {
                o[t] ? (delete o[t], --s) : a && a.getFrameID() === t && (a = null)
            }, this.getFrames = function() {
                var t = {};
                for (var n in o) t[n] = this.getFrame(n);
                return t
            }, this.extendFrames = function(t) {
                for (var n in o) o[n].extendInstance(t)
            }, this.getFrame = function(t) {
                var n = null;
                return o[t] ? n = o[t] : a && a.getFrameID() === t && (n = a), n ? n.getInstance() : null
            };
            var i = function() {
                return Object.keys(o).length
            };
            this.isEmpty = function() {
                return null === a && 0 === i()
            };
            var c = function(t, n) {
                var e = Object.keys(t).length,
                    i = 0,
                    a = function() {
                        ++i === e && n.done()
                    };
                for (var o in t) n.each(t[o], a) || --e;
                0 === e && n.done && n.done()
            };
            this.forEachFrame = function(t) {
                c(this.getFrames(), t)
            }, this.forEachWindow = function(t) {
                var n = this.getFrames(),
                    e = this.getTop();
                e && (n[0] = e), c(n, t)
            }, this.activate = function() {
                LPPlatform.activateTab({
                    tabID: this.tabDetails.tabID,
                    windowID: this.tabDetails.windowID
                })
            }, this.close = function() {
                LPPlatform.closeTab({
                    tabID: this.tabDetails.tabID,
                    windowID: this.tabDetails.windowID
                })
            }, this.onFramesLoaded = function(t) {
                n.addEventListenerOnce("framesloaded", t), setTimeout(r, 1e3)
            }, this.disconnect = function() {
                for (var t in a && (a.disconnect(), a = null), o) o[t].disconnect();
                o = null
            }
        }
}();
//# sourceMappingURL=sourcemaps/LPTab.js.map