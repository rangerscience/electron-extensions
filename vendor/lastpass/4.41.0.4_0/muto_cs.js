var g_did_setupInputObserver = !1;

function setupInputObserver(e) {
    function r(e) {
        return "undefined" != typeof g_isfirefox && g_isfirefox ? e ? e.g_did_setupInputObserver : null : g_did_setupInputObserver
    }

    function t(e) {
        if ("undefined" != typeof g_isfirefox && g_isfirefox) {
            if (!e) return !1;
            e.g_did_setupInputObserver = !0
        } else g_did_setupInputObserver = !0;
        return !0
    }
    if (null == e && (e = document), !r(e)) {
        var o = "undefined" != typeof window && window ? window : e.defaultView,
            n = null;
        if ("undefined" != typeof WebKitMutationObserver) n = new WebKitMutationObserver(function(e) {
            setTimeout(function() {
                mutationObserverCallBack(e)
            }, 0)
        });
        else {
            if (void 0 === o.MutationObserver) return;
            if (e && e.location && e.location.href.indexOf(".xul")) return;
            n = new o.MutationObserver(function(e) {
                setTimeout(function() {
                    mutationObserverCallBack(e)
                }, 0)
            })
        }
        null != n && (n.observe(e, {
            childList: !0,
            subtree: !0
        }), t(e))
    }
}
var g_did_muto = !1,
    g_pending_recheck = !1,
    g_pending_eval = !1;

function mutationObserverCallBack(e) {
    var r = 1;
    LPCTR("mutationObserver");
    var n = !1;
    if (e.forEach(function(e) {
            var r = null,
                t;
            if (g_isfirefox && (r = LP.getBrowser()), 0 == n)
                for (t = 0; t < e.addedNodes.length; t++) {
                    var o;
                    if (1 === (o = e.addedNodes[t]).nodeType && ("INPUT" == o.tagName || 0 < o.getElementsByTagName("INPUT").length || "SCRIPT" == o.tagName && "" != o.src && "" === o.innerHTML)) {
                        n = !0;
                        break
                    }
                }
            if (0 == n)
                for (t = 0; t < e.removedNodes.length; t++) {
                    var o;
                    if (1 === (o = e.removedNodes[t]).nodeType && ("INPUT" == o.tagName || 0 < o.getElementsByTagName("INPUT").length)) {
                        n = !0;
                        break
                    }
                }
        }), n)
        if (g_did_muto = !0, g_isfirefox) {
            for (var t, o = LP.getBrowser().contentWindow; null != o.top && o.top != o;) o = o.top;
            var i = o.document,
                u = lpGetBrowserForDocument(i);
            verbose_log("mutation observer triggers checkShouldRecheck"), LP.checkShouldRecheck(u)
        } else {
            var f = LP_get_last_url_history(document);
            f.href != get_doc_location_href(document) && verbose_log("href changed from " + f.href + " to " + get_doc_location_href(document)), verbose_log("mutation observer triggers recheck, href = " + f.href + " hash = " + f.href_hash), g_pending_recheck || checkShouldRecheck({
                fromclick: !1,
                frommuto: !0,
                href: f.href,
                href_hash: f.href_hash
            })
        }
}
//# sourceMappingURL=sourcemaps/muto_cs.js.map