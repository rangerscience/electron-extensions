(window.webpackJsonp = window.webpackJsonp || []).push([
    [4], {
        275: function(t, e, n) {
            "use strict";
            n.r(e);
            var a = n(4),
                r = n.n(a),
                c = n(12),
                o = n(73),
                s = n(25),
                u = n(11),
                i = n(5),
                p = r.a.mark(f);

            function f() {
                return r.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, Object(u.e)(i.d, function() {
                                location.href = "tabDialog.html?dialog=createAccountSimple&cmd=open"
                            });
                        case 2:
                        case "end":
                            return t.stop()
                    }
                }, p)
            }
            var h = n(71),
                w = r.a.mark(l);

            function l() {
                return r.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, Object(u.a)(h.a, "vault.html");
                        case 2:
                        case "end":
                            return t.stop()
                    }
                }, w)
            }

            function b() {
                return (b = Object(c.a)(r.a.mark(function t(e) {
                    return r.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, Object(o.a)(e);
                            case 2:
                                s.c.run(l), s.b.run(f);
                            case 4:
                            case "end":
                                return t.stop()
                        }
                    }, t)
                }))).apply(this, arguments)
            }
            var m = n(55),
                d = n(54),
                v = n(75),
                O = n(72);
            ! function(t) {
                b.apply(this, arguments)
            }({
                fetch: Object(v.a)("https://lastpass.com/"),
                platform: -1 != navigator.userAgent.indexOf(" OPR/") ? m.a.OPERA : m.a.CHROME,
                stateSync: d.createChromeStateSyncAPI,
                binaryService: O.a
            })
        }
    },
    [
        [275, 0, 1, 2]
    ]
]);