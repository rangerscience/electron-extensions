function saveIconState(e, n, o) {
    try {
        var t = null;
        void 0 === (t = "undefined" != typeof LP && "function" == typeof LP.lpGetCurrentWindow ? void 0 !== LP.lpGetCurrentWindow().getBrowser ? LP.lpGetCurrentWindow().getBrowser().contentDocument : LP.getBrowser().contentDocument : g_isfirefox ? top.document : document).lpiconarr && (t.lpiconarr = []);
        var r = t.lpiconarr.length,
            i;
        for (i = 0; i < t.lpiconarr.length; i++) {
            var c = t.lpiconarr[i];
            if (c.idorname == n.idorname && c.IHTMLElement == n.IHTMLElement && c.inframe == n.inframe) {
                if (!checkIsDisplayed(o.ownerDocument, o, null, null, null, !0)) return;
                t.lpiconarr.splice(i, 1)
            }
        }
        t.lpiconarr.push(n)
    } catch (e) {
        verbose_log("save error " + e.message)
    }
}

function getIconState(e, n) {
    var o = null,
        t = {},
        r;
    if (void 0 !== (o = "undefined" != typeof LP && "function" == typeof LP.lpGetCurrentWindow ? void 0 !== LP.lpGetCurrentWindow().getBrowser ? LP.lpGetCurrentWindow().getBrowser().contentDocument : LP.getBrowser().contentDocument : g_isfirefox ? top.document : document).lpiconarr)
        for (r = 0; r < o.lpiconarr.length; r++) {
            var i = o.lpiconarr[r],
                c;
            if (i.idorname == n && (!g_isfirefox || i.inframe == (e != o))) t = i
        }
    return t
}

function hasIconState(e, n) {
    return !!getIconState(e, n)
}

function deleteIconState(e, n) {
    var o = null,
        t;
    if (o = "undefined" != typeof LP && "function" == typeof LP.lpGetCurrentWindow ? void 0 !== LP.lpGetCurrentWindow().getBrowser ? LP.lpGetCurrentWindow().getBrowser().contentDocument : LP.getBrowser().contentDocument : g_isfirefox ? top.document : document, verbose_log("delete icon state from " + o.location.href + " for " + n), void 0 !== o.lpiconarr)
        for (t = 0; t < o.lpiconarr.length; t++) {
            var r = o.lpiconarr[t];
            r.idorname != n || g_isfirefox && r.inframe != (e != o) || o.lpiconarr.splice(t, 1)
        }
}

function getAllIconStates() {
    var e = null;
    return e = "undefined" != typeof LP && "function" == typeof LP.lpGetCurrentWindow ? void 0 !== LP.lpGetCurrentWindow().getBrowser ? LP.lpGetCurrentWindow().getBrowser().contentDocument : LP.getBrowser().contentDocument : g_isfirefox ? top.document : document, verbose_log("getting all icon states for " + e.location.href), void 0 !== e.lpiconarr ? e.lpiconarr : []
}

function resetAllIconStates() {
    var e = null;
    e = "undefined" != typeof LP && "function" == typeof LP.lpGetCurrentWindow ? void 0 !== LP.lpGetCurrentWindow().getBrowser ? LP.lpGetCurrentWindow().getBrowser().contentDocument : LP.getBrowser().contentDocument : g_isfirefox ? top.document : document, verbose_log("resetting icon states for " + e.location.href), e.lpiconarr = []
}
//# sourceMappingURL=sourcemaps/iconstates_cs.js.map