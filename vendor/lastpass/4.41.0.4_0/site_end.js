document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("load", function() {
        onLoad()
    })
}), g_cpwbot && window.addEventListener("unload", function() {
    var t = getBG();
    if (t && void 0 !== t.cpwbot_halt) {
        if (g_ischrome) var n = t.cpwbot_getpwchangestate();
        else var n = g_cpwbot_pwchangestate;
        "FAIL" != n && "CAPTCHA" != n && "DONE" != n && "OK" != n && "TIMEOUT" != n && 0 != n && null !== n && t.cpwbot_halt()
    }
}, !1);
//# sourceMappingURL=sourcemaps/site_end.js.map