! function(a) {
    var c = "unknown",
        t = {
            init: function(n) {
                var t = a.extend({}, n),
                    e = !0 === /MacPPC|MacIntel/.test(window.navigator.platform),
                    o = function(n) {
                        var t = !1;
                        n.shiftKey ? t = n.shiftKey : n.modifiers && (t = !!(4 & n.modifiers));
                        var o = String.fromCharCode(n.which);
                        return o.toUpperCase() === o.toLowerCase() || (o.toUpperCase() === o ? !0 == e && t || (c = !t) : o.toLowerCase() === o && (c = t)), c
                    },
                    r = function(n) {
                        var t;
                        return 20 === n.which && "unknown" !== c && (c = !c), c
                    },
                    i = function(n, t) {
                        n !== t && (a("body").trigger("capsChanged"), !0 === t ? a("body").trigger("capsOn") : !1 === t ? a("body").trigger("capsOff") : "unknown" === t && a("body").trigger("capsUnknown"))
                    };
                return a("body").bind("keypress.capslockstate", function(n) {
                    var t = c;
                    c = o(n), i(t, c)
                }), a("body").bind("keydown.capslockstate", function(n) {
                    var t = c;
                    c = r(n), i(t, c)
                }), a(window).bind("focus.capslockstate", function() {
                    var n;
                    i(c, c = "unknown")
                }), i(null, "unknown"), this.each(function() {})
            },
            state: function() {
                return c
            },
            destroy: function() {
                return this.each(function() {
                    a("body").unbind(".capslockstate"), a(window).unbind(".capslockstate")
                })
            }
        };
    jQuery.fn.capslockstate = function(n) {
        return t[n] ? t[n].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof n && n ? void a.error("Method " + n + " does not exist on jQuery.capslockstate") : t.init.apply(this, arguments)
    }
}(jQuery);
//# sourceMappingURL=sourcemaps/capslockstate.js.map