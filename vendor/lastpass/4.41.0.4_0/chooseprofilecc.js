function oninitchooseprofilecc() {}

function onshowchooseprofilecc() {
    var e = getBG();
    document.getElementById("alwayschooseprofilecc").checked = 1 == e.lpGetPref("alwayschooseprofilecc", 0);
    for (var t = 1; t <= 2; t++) {
        var r;
        switch (t) {
            case 1:
                r = "profile";
                break;
            case 2:
                r = "cc"
        }
        var l = e.lpGetPref(r + "ffid", 0),
            i = !1,
            c = document.getElementById(r).contentWindow.document;
        LP_decimate_children(c.body);
        var o = c.createElement("link");
        o.setAttribute("rel", "stylesheet"), o.setAttribute("type", "text/css"), o.setAttribute("href", "general.css"), c.body.appendChild(o);
        var f = c.createElement("form");
        f.id = "radioform";
        var a = c.createElement("table");
        for (var d in a.setAttribute("cellspacing", "2"), e.g_formfills)
            if (e.check_ident_ffid(e.g_formfills[d].ffid) && (1 == t && 0 == e.g_formfills[d].profiletype || 2 == t && "" != e.g_formfills[d].ccnum)) {
                var n;
                e.g_formfills[d].ffid == l ? i = n = !0 : n = !1;
                var s = c.createElement("tr"),
                    p = c.createElement("td");
                p.setAttribute("valign", "middle");
                var m = c.createElement("input");
                m.setAttribute("type", "radio"), m.id = r + e.g_formfills[d].ffid, m.setAttribute("name", r), m.setAttribute("value", e.g_formfills[d].ffid), n && m.setAttribute("checked", "checked"), p.appendChild(m), s.appendChild(p), p = c.createElement("td");
                var h = c.createElement("label");
                h.setAttribute("for", r + e.g_formfills[d].ffid), set_innertext(h, e.g_formfills[d].decprofilename), p.appendChild(h), s.appendChild(p), a.appendChild(s)
            } f.appendChild(a), c.body.style.paddingLeft = 0, c.body.style.marginLeft = 0, c.body.appendChild(f), i || (c.getElementsByName(r)[0].checked = !0);
        for (var g = c.getElementsByName(r), d = 0; d < g.length; d++)
            if (g[d].checked) {
                g[d].focus();
                break
            }
    }
    resize_panel()
}

function onhidechooseprofilecc() {}

function dochooseprofilecc() {
    for (var e = getBG(), t = new Array, r = 1; r <= 2; r++) {
        var l;
        switch (r) {
            case 1:
                l = "profile";
                break;
            case 2:
                l = "cc"
        }
        for (var i, c = document.getElementById(l).contentWindow.document.getElementsByName(l), o = 0; o < c.length; o++)
            if (c[o].checked) {
                t[l] = c[o].value;
                break
            } e.lpPutUserPref(l + "ffid", t[l])
    }
    e.lpPutUserPref("alwayschooseprofilecc", document.getElementById("alwayschooseprofilecc").checked ? 1 : 0), e.lpWriteAllPrefs(), (g_issafari || g_isfirefoxsdk) && e.update_prefs("chooseprofilecc"), e.fillform(t.profile, !1, g_tabid, t.cc), closemole()
}
//# sourceMappingURL=sourcemaps/chooseprofilecc.js.map