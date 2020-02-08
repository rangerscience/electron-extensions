LPContentScriptTools = function() {
    var f = (r = function(t) {
            var e = "";
            try {
                var n = document.createElement("canvas");
                n.height = t.clientHeight, n.width = t.clientWidth, n.getContext("2d").drawImage(t, 0, 0), e = n.toDataURL()
            } catch (t) {}
            return e
        }, function(t, e) {
            var n = document.createElement("img");
            n.src = t, n.addEventListener("load", function() {
                var t = r(n);
                document.body.removeChild(n), e(t)
            }), n.addEventListener("error", function() {
                e(""), document.body.removeChild(n)
            }), document.body.appendChild(n)
        }),
        r, t = function(e) {
            for (var n = [], t = document.getElementsByTagName("link"), r = 0, i = t.length; r < i; ++r) {
                var o = t[r],
                    l = o.getAttribute("rel");
                if (l && -1 < l.indexOf("icon")) {
                    var u = o.getAttribute("href");
                    "svg" !== u.substring(u.length - 3) && n.push(u)
                }
            }
            n.push(document.location.origin + "/favicon.ico");
            var c = 0,
                a = function(t) {
                    t ? e(t) : c > n.length - 1 ? bg.LPPlatform.getFavicon({
                        url: document.location.href,
                        callback: e
                    }) : f(n[c++], a)
                };
            a()
        },
        o = function(t, e) {
            for (var n = null, r = 0, i = e.searches.length; r < i; ++r) {
                var o = e.searches[r];
                if (-1 !== t.indexOf(o))
                    if (e.exactMatch) {
                        if (t === o) return o;
                        if (e.allowEmails) {
                            var l = t.split("@");
                            if (2 === l.length && l[0] === o) return o
                        }
                    } else if (e.wordMatch) {
                    for (var u = t.split(/\s/), c = 0; c < u.length; ++c)
                        if (u[c] === o) return o
                } else(null === n || o.length > n.length) && (n = o)
            }
            return n
        },
        i = (l = function(t) {
            if (t.parentElement) switch (t.parentElement.nodeName) {
                case "SCRIPT":
                case "STYLE":
                    return !1
            }
            return !0
        }, function(t) {
            var e = [];
            if (t.searches) {
                t.searches = [].concat(t.searches);
                for (var n = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT); n.nextNode();)
                    if (l(n.currentNode)) {
                        var r = n.currentNode.nodeValue.trim(),
                            i = o(r, t);
                        if (i && (e.push({
                                parent: n.currentNode.parentElement,
                                match: i,
                                matchingText: r
                            }), !t.searchAll)) break
                    }
            }
            return t.searchAll ? e : e[0]
        }),
        l, e = function(t) {
            var e = i(t),
                n = e ? e.match : null;
            return t.callback && t.callback(n), n
        },
        n = (u = !1, window.addEventListener("beforeunload", function(t) {
            !1 !== t.isTrusted && (u = !0)
        }), function() {
            return u
        }),
        u, c = function(t, e) {
            return window.getComputedStyle(t).getPropertyValue(e)
        },
        a = function(t) {
            return "FORM" === t.nodeName
        },
        d = function(t) {
            for (; t;) {
                if (a(t)) return t;
                t = t.parentElement
            }
            return null
        },
        s = function(t) {
            if ("function" != typeof document.elementFromPoint) return !0;
            var e = t.getBoundingClientRect();
            return document.elementFromPoint(e.left + parseInt(e.width / 2), e.top + parseInt(e.height / 2)) === t
        },
        h = function(t) {
            if (t.scrollWidth > t.clientWidth) {
                var e = c(t, "overflow-x");
                return "auto" === e || "scroll" === e
            }
        },
        g = function(t) {
            var e;
            if (t.scrollHeight > t.clientHeight) switch (c(t, "overflow-y")) {
                case "auto":
                case "scroll":
                    return !0;
                case "visible":
                    return t === document.body || !t.parentElement
            }
            return !1
        },
        m = function(t) {
            for (var e = {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight
                }, n = t.parentElement; n;) 0 < n.scrollLeft && (e.left -= n.scrollLeft), 0 < n.scrollTop && (e.top -= n.scrollTop), h(n) && (e.width += n.scrollWidth - n.clientWidth), g(n) && (e.height += n.scrollHeight - n.clientHeight), n = n.parentElement;
            return e.right = e.left + e.width, e.bottom = e.top + e.height, e
        },
        v = function(t) {
            var e;
            if (!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)) return !1;
            var n = t.getBoundingClientRect(),
                r = m(t);
            return !(n.right < r.left || n.bottom < r.top || n.left > r.right || n.top > r.bottom)
        },
        p = (b = [function(t) {
            if (t.getAttribute("id")) {
                var e = document.querySelector('label[for="' + t.getAttribute("id") + '"]');
                if (e) return e.textContent
            }
            return null
        }, function(t) {
            for (var e = t; e;) {
                if ("LABEL" === e.tagName.toUpperCase()) return e.textContent;
                e = e.parentElement
            }
            return null
        }, function(t) {
            return t.getAttribute("placeholder")
        }, function(t) {
            for (var e = t; e;) {
                var n = e.textContent;
                if (n) {
                    var r = n.split("\n").map(function(t) {
                        return t.trim()
                    }).filter(function(t) {
                        return 0 < t.length
                    });
                    if (1 === r.length) return r[0];
                    break
                }
                e = e.previousSibling || e.parentElement
            }
        }], function(t) {
            for (var e = 0; e < b.length; ++e) {
                var n = b[e](t);
                if (n) return n.trim()
            }
            return ""
        }),
        b, w = function(t, e) {
            for (var n = {}, r = 0; r < e.length; ++r) {
                var i = t.getAttribute(e[r]);
                i && (n[e[r]] = i)
            }
            return n
        },
        E = function(i, o, l) {
            var u;
            return function() {
                var t = this,
                    e = arguments,
                    n = function() {
                        u = null, l || i.apply(t, e)
                    },
                    r = l && !u;
                clearTimeout(u), u = setTimeout(n, o), r && i.apply(t, e)
            }
        },
        y = (C = function(t) {
            return "string" == typeof t ? t : "number" == typeof t ? t + "px" : ""
        }, function(t, e) {
            for (var n in e) t.style.setProperty(n, C(e[n]), "important");
            return t
        }),
        C, T = (L = outerWidth / innerWidth, window.addEventListener("click", function(t) {
            L = (t.screenX - screenLeft) / t.clientX
        }, !0), function() {
            return L
        }),
        L;
    return {
        getFavicon: t,
        findText: e,
        isUnloading: n,
        findTextNodes: i,
        isForm: a,
        getForm: d,
        isClickable: s,
        isVisible: v,
        getLabel: p,
        getAttributes: w,
        debounce: E,
        getCSS: c,
        setCSS: y,
        getZoom: T
    }
}();
//# sourceMappingURL=sourcemaps/contentScriptTools.js.map