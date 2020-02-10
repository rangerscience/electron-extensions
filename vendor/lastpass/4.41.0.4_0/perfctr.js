var LPctr = new LPctr_lib;

function init_LPctr() {
    LPctr = LPctr || new LPctr_lib
}

function LPCTR(t) {
    var e = 0;
    if ("undefined" != typeof g_isdebug && g_isdebug || "undefined" != typeof debug && debug) {
        init_LPctr();
        var e = LPctr.increment(t)
    }
    return 0 !== e
}

function LPctr_lib() {
    var e = this;
    this.timestamp = function() {
        return (new Date).getTime()
    };
    var t = e.timestamp(),
        i = 0,
        n = {},
        r = {};

    function u(t) {
        return !1
    }
    this.reset_all = function() {
        var t;
        r = {}, i = e.timestamp()
    }, this.increment = function(t) {
        return t ? (void 0 === n[t] ? n[t] = 1 : "number" == typeof n[t] && (n[t], 1) && (2147483647 <= n[t] ? n[t] = 1 : n[t]++, i = e.timestamp()), n[t]) : 0
    }, this.get = function(t) {
        return t && void 0 !== n[t] ? n[t] : 0
    }, this.clear = function(t) {
        return !(!t || "number" != typeof n[t] || (n[t], 0)) && delete n[t]
    }, this.start_timer = function(t) {
        return t ? (n[t] = {
            start: e.timestamp(),
            stop: 0
        }, n[t].start) : 0
    }, this.stop_timer = function(t) {
        return t && void 0 !== n[t] ? (n[t].stop = e.timestamp(), n[t].stop) : 0
    }, this.get_timer = function(t) {
        var e = 0;
        if (t && void 0 !== n[t]) {
            var i = n[t].start,
                r = n[t].stop;
            return isNaN(i) || isNaN(r) || null === i || null === r || void 0 === i || void 0 === r || r < i ? 0 : r - i
        }
        return 0
    }, this.clear_timer = function(t) {
        return e.reset_timer(t)
    }, this.reset_timer = function(t) {
        return !!t && !(n[t] = 0)
    }
}
//# sourceMappingURL=sourcemaps/perfctr.js.map