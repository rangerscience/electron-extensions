var MAX_META = 50;

function LP_getLPMeta(t) {
    if (!(t = t || LP_derive_doc())) return null;
    for (var e = null, l = !1, a = "", r = "", n = t.getElementsByTagName("meta"), u = 0; u < n.length && u < MAX_META; u++)
        if (e = n[u]) {
            var i = e.getAttribute("name");
            if (i && "LASTPASS" == i.toUpperCase()) {
                var A = e.getAttribute("data-lpignore");
                null != A && (l = A), null != (A = e.getAttribute("data-lpfunction")) && (a = A), null != (A = e.getAttribute("data-lpflavor")) && (r = A)
            }
        } return {
        skiplp: l,
        lpfunction: a,
        lpflavor: r
    }
}
//# sourceMappingURL=sourcemaps/page_cs.js.map