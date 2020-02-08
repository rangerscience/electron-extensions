var LPTools = LPTools || {};
! function(r) {
    r.createUrlPattern = t, r.allUrls = u;
    var e, n, l = new RegExp("^" + "(\\*|(?:\\*\\.)?(?:[^/*]+))?" + "(/.*)" + "$");

    function t(r) {
        var e = l.exec(r);
        if (!e) return null;
        var n = e[1],
            t = e[2];
        return n ? a(n, t) : null
    }

    function a(r, e) {
        var n = "^";
        return r && ("*" === r ? n += "[^/]+?" : (r.match(/^\*\./) && (n += "[^/]*?", r = r.substring(2)), n += r.replace(/\./g, "\\."))), e && ("*" === e ? n += "(/.*)?" : "/" !== e[0] ? (n += "/", n += e.replace(/\*/g, ".*?"), n += "/?") : "/" === e && (n += "/?")), n += "$", new RegExp(n)
    }

    function u() {
        return /(http|https|file|ftp):\/\/.+/
    }
}(LPTools);
//# sourceMappingURL=sourcemaps/urlmatcher.js.map