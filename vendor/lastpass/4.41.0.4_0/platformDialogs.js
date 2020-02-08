LPPlatform = {
    getResourcePath: function(e) {
        if ("undefined" == typeof filemtimes || void 0 === filemtimes[e]) return e;
        var n = filemtimes[e];
        return "../m.php/newvault_" + (e = e.replace(/[\.\/]/g, "_")) + "?" + encodeURIComponent(n)
    },
    getResourceName: function(e) {
        return -1 === document.location.href.indexOf("dev.lastpass.com") && -1 === document.location.href.indexOf("127.0.0.1") ? e.replace(/\.js$/, "c.js") : e
    },
    openURL: function(e) {
        window.open(e)
    },
    getBaseURL: function(e) {
        return ""
    },
    logException: function(e) {
        var n = e.message;
        e.stack && (n += "\n" + e.stack), LPPlatform.logError(n)
    },
    logError: function(e) {
        e = "Page: " + window.location.href + " Error: " + e, console.error(e)
    },
    getHTML: function(e, n) {
        $.ajax({
            url: e,
            success: n,
            dataType: "text"
        })
    },
    translate: function(e) {
        var n = e.replace(/%/g, "^").replace(/\n/g, "");
        if ("undefined" != typeof translations) {
            if (translations.hasOwnProperty("newvault_" + n)) return translations["newvault_" + n].replace(/\^/g, "%");
            if (translations.hasOwnProperty(n)) return translations[n].replace(/\^/g, "%")
        }
        return e
    },
    addEventListener: function(e) {
        for (var n = [], t = 1; t < arguments.length; ++t) n.push(arguments[t]);
        e.addEventListener.apply(e, n)
    },
    removeEventListener: function(e) {
        for (var n = [], t = 1; t < arguments.length; ++t) n.push(arguments[t]);
        e.removeEventListener.apply(e, n)
    }
};
//# sourceMappingURL=sourcemaps/platformDialogs.js.map