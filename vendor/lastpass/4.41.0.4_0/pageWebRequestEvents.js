! function() {
    var e = 0,
        n = function(t, e) {
            return "function" != typeof t || t.replaced ? t : (e.replaced = !0, e)
        },
        o, r, u;
    if ("undefined" != typeof CustomEvent && "function" == typeof window.dispatchEvent) {
        var s = function(t) {
                try {
                    if ("object" == typeof t && (t = JSON.stringify(t)), "string" == typeof t) return window.dispatchEvent(new CustomEvent("lprequeststart", {
                        detail: {
                            data: t,
                            requestID: ++e
                        }
                    })), e
                } catch (t) {}
            },
            c = function(t) {
                try {
                    window.dispatchEvent(new CustomEvent("lprequestend", {
                        detail: t
                    }))
                } catch (t) {}
            };
        "undefined" != typeof XMLHttpRequest && XMLHttpRequest.prototype && XMLHttpRequest.prototype.send && (XMLHttpRequest.prototype.send = n(XMLHttpRequest.prototype.send, (u = XMLHttpRequest.prototype.send, function(t) {
            var e = this,
                n = s(t);
            return n && e.addEventListener("loadend", function() {
                c({
                    requestID: n,
                    statusCode: e.status
                })
            }), u.apply(e, arguments)
        }))), "function" == typeof fetch && (fetch = n(fetch, (r = fetch, function(t, e) {
            var n = s(e),
                o = r.apply(this, arguments);
            if (n) {
                var u = function(t) {
                    c({
                        requestID: n,
                        statusCode: t && t.status
                    })
                };
                o.then(u).catch(u)
            }
            return o
        })));
        var i = function(t) {
                return n(t, function() {
                    try {
                        this.dispatchEvent(new CustomEvent("lpsubmit"))
                    } catch (t) {}
                    return t.apply(this, arguments)
                })
            },
            t = function() {
                if (document && document.forms && 0 < document.forms.length)
                    for (var t = 0; t < document.forms.length; ++t) document.forms[t].submit = i(document.forms[t].submit)
            };
        document && "interactive" === document.readyState || "complete" === document.readyState ? t() : window.addEventListener("DOMContentLoaded", t, !0), Document.prototype.createElement = n(Document.prototype.createElement, (o = Document.prototype.createElement, function() {
            var t = o.apply(this, arguments);
            return t && "FORM" === t.nodeName && t.submit && (t.submit = i(t.submit)), t
        }))
    }
}();
//# sourceMappingURL=sourcemaps/pageWebRequestEvents.js.map