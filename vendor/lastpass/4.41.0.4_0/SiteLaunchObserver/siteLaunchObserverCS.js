var LaunchTracking = function() {
    var i = !1,
        n = ["click", "submit", "keydown", "change"],
        t = function(e) {
            return "FORM" === e.nodeName.toUpperCase()
        },
        r = function(e) {
            for (; e;) {
                if (t(e)) return e;
                e = e.parentElement
            }
            return null
        },
        a = (u = function(e) {
            return -1 < (e = e.toLowerCase()).indexOf("submit") || -1 < e.indexOf("save")
        }, o = function(e) {
            for (var t = e.attributes, n = 0; n < t.length; ++n) {
                var r = t[n];
                if (u(r.name) || u(r.value)) return !0
            }
            return !1
        }, function(e) {
            if ("INPUT" === e.nodeName) return "submit" === e.type || "button" === e.type && o(e);
            for (var t = e; t && 0 === t.getElementsByTagName("input").length;) {
                if ("BUTTON" === t.nodeName) return "submit" === t.type || o(t);
                if (o(t)) return !0;
                t = t.parentElement
            }
            return !1
        }),
        u, o, s = function(e) {
            e && e.target && a(e.target) && (i = !0, bg.SiteLaunchObserver.formSubmitted({
                id: r(e.target) ? r(e.target).id : e.target.id,
                name: r(e.target) ? r(e.target).name : e.target.name,
                class: r(e.target) ? r(e.target).className : e.target.className,
                userSubmit: e.isTrusted
            }), f())
        };
    window.addEventListener("load", function() {
        bg.SiteLaunchObserver.isFeatureEnabled(function(e) {
            if (e)
                for (var t in bg.SiteLaunchObserver.initiateFormExists(), c(), n) n.hasOwnProperty(t) && document.addEventListener(n[t], s, !0)
        })
    });
    var f = function() {
        for (var e in n) n.hasOwnProperty(e) && document.removeEventListener(n[e], s, !0)
    };

    function e(t, n) {
        var r = 0,
            a = null;
        if (i) a = setInterval(function() {
            ++r;
            var e = m(t);
            (!e || 4 < r) && (clearInterval(a), n(!!e))
        }, 1e3);
        else {
            var e = m(t);
            n(!!e)
        }
    }

    function m(e) {
        if (e && e.id) return document.getElementById(e.id);
        for (var t = document.getElementsByTagName("form"), n = 0; n < t.length; n++) {
            var r = $(t[n]).find('input[type="password"]');
            if (1 === r.length) return r[0]
        }
    }

    function c() {
        var e = 0,
            t = null,
            n = !1,
            r = function() {
                for (var e = document.getElementsByTagName("form"), t = 0; t < e.length; t++) 1 === $(e[t]).find('input[type="password"]').length && (bg.SiteLaunchObserver.hasFormWithPassword(), n = !0)
            };
        r(), t = setInterval(function() {
            (8 < e || n) && clearInterval(t), ++e, r()
        }, 1e3)
    }
    return {
        formExists: e
    }
}();
//# sourceMappingURL=sourcemaps/SiteLaunchObserver/siteLaunchObserverCS.js.map