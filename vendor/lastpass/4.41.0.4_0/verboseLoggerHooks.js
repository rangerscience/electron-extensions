var allMethods = ["assert", "debug", "dir", "dirxml", "error", "info", "log", "table", "trace", "warn"],
    supportedMethods = allMethods.filter(function(o) {
        return "function" == typeof console[o]
    });

function ConsoleHook(o, t) {
    if (!(this instanceof ConsoleHook)) return new ConsoleHook(o, t);
    this.hooks = {}, this.refs = {}, this.isDispatching = !1, this.logger = o || console, this.silent = t || !1
}
ConsoleHook.prototype.attach = function o(t, s) {
    return "string" != typeof t ? (s = t, supportedMethods.forEach(function(o) {
        this.attach(o, s)
    }, this)) : this.hooks[t] ? this.hooks[t].push(s) : (this.hooks[t] = [s], this.override(t)), this
}, ConsoleHook.prototype.detach = function o(t, s) {
    return t ? (this.hooks[t] = s ? this.hooks[t].filter(function(o) {
        return o !== s
    }) : [], this.hooks.length || this.restore(t)) : supportedMethods.forEach(function(o) {
        this.refs[o] && this.detach(o)
    }, this), this
}, ConsoleHook.prototype.override = function o(i) {
    if (!this.refs[i]) {
        this.refs[i] = this.logger[i];
        var e = this;
        this.logger[i] = function() {
            if (!e.isDispatching) {
                var t = [i, arguments];
                e.isDispatching = !0, e.hooks[i].forEach(function(o) {
                    o.apply(this, t)
                }, this), e.isDispatching = !1
            }
            if (!e.silent) {
                var o = e.refs[i];
                if (o.apply) o.apply(this, arguments);
                else {
                    var s = Array.prototype.slice.apply(arguments).join(" ");
                    o.call(this, arguments[0])
                }
            }
        }
    }
}, ConsoleHook.prototype.restore = function o(t) {
    this.logger[t] = this.refs[t], delete this.refs[t]
};
//# sourceMappingURL=sourcemaps/verboseLoggerHooks.js.map