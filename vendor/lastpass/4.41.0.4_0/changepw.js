function oninitchangepw() {}

function onshowchangepw() {
    var e = getBG();
    set_innertext(document.getElementById("changepwtld"), g_changepwtld);
    var t = document.getElementById("changepwsites").contentWindow.document;
    LP_decimate_children(t.body);
    var n = t.createElement("link");
    n.setAttribute("rel", "stylesheet"), n.setAttribute("type", "text/css"), n.setAttribute("href", "general.css"), t.body.appendChild(n);
    var a = t.createElement("table");
    a.setAttribute("cellspacing", "2"), a.className = "stdtext";
    var i = e.getsites(g_changepwtld, !0, g_changepwexcludeid),
        d = new Array;
    for (var r in i) d[d.length] = e.g_sites[r];
    d.sort(e.lp_sort_case_insensitive_name);
    for (var c = 0; c < d.length; c++) {
        r = d[c].aid;
        var s = "";
        e.g_sites[r].group && 0 == e.g_sites[r].group.indexOf("Shared-") && (s = e.gs("(Shared Folder)"));
        var l = e.g_sites[r].name,
            g = e.getusernamefromacct(e.g_sites[r]);
        "" != g && (l += " (" + g + ")");
        var o = t.createElement("tr"),
            p = t.createElement("td");
        p.setAttribute("valign", "middle");
        var h = t.createElement("input");
        h.setAttribute("type", "checkbox"), h.id = "aid" + r, h.setAttribute("name", "aid" + r), p.appendChild(h), o.appendChild(p), p = t.createElement("td");
        var m = t.createElement("label");
        m.setAttribute("for", "aid" + r), set_innertext(m, l + s), p.appendChild(m), o.appendChild(p), a.appendChild(o)
    }
    t.body.appendChild(a)
}

function onhidechangepw() {}

function dochangepw() {
    for (var e = getBG(), t = new Array, n = document.getElementById("changepwsites").contentWindow.document.getElementsByTagName("input"), a = 0; a < n.length; a++) "checkbox" == n[a].type && n[a].checked && 0 == n[a].name.indexOf("aid") && (t[t.length] = n[a].name.substring(3));
    "function" == typeof e.checkmultiplefolders && !e.checkmultiplefolders(t) || (e.changePassword(g_changepwnewpw, t), closemole())
}
//# sourceMappingURL=sourcemaps/changepw.js.map