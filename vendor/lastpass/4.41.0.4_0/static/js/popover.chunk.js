(window.webpackJsonp = window.webpackJsonp || []).push([
    [3], {
        276: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(4),
                a = n.n(r),
                c = n(12),
                o = n(73),
                s = n(25),
                u = n(11),
                i = n(5),
                p = a.a.mark(f);

            function f() {
                return a.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, Object(u.e)(i.d, function() {
                                location.href = "extensionLogin.html?showCreateAccount=true"
                            });
                        case 2:
                        case "end":
                            return t.stop()
                    }
                }, p)
            }
            var w = n(71),
                h = a.a.mark(b);

            function b() {
                return a.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, Object(u.a)(w.a, "extensionDropdown.html");
                        case 2:
                        case "end":
                            return t.stop()
                    }
                }, h)
            }

            function x() {
                return (x = Object(c.a)(a.a.mark(function t(e) {
                    return a.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, Object(o.a)(e);
                            case 2:
                                s.c.run(b), s.b.run(f);
                            case 4:
                            case "end":
                                return t.stop()
                        }
                    }, t)
                }))).apply(this, arguments)
            }
            var O = n(55),
                d = n(54),
                m = n(75),
                v = n(72);
            ! function(t) {
                x.apply(this, arguments)
            }({
                fetch: Object(m.a)("https://lastpass.com/"),
                platform: -1 != navigator.userAgent.indexOf(" OPR/") ? O.a.OPERA : O.a.CHROME,
                stateSync: d.createChromeStateSyncAPI,
                binaryService: v.a
            })
        }
    },
    [
        [276, 0, 1, 2]
    ]
]);