var g_new_superbar = !0;
"undefined" != typeof g_isfirefox && g_isfirefox && (g_new_superbar = !1);
var SB_icons = {
    savesite: {
        id: "SB_addico",
        alt: gs("Save Site"),
        src: g_40_icons.Add,
        dock: "left",
        tooltiptext: gs("Save Password to Vault"),
        clickfn: function(e) {
            savesite_popupaction_iframe(LP_derive_doc(), e, null)
        }
    },
    sites: {
        id: "SB_siteico",
        alt: gs("Sites"),
        src: g_40_icons.Sites,
        dock: "left",
        tooltiptext: gs("Saved Passwords"),
        clickfn: function(e) {
            sites_popupaction(e, LP_derive_doc())
        }
    },
    formfill: {
        id: "SB_ffico",
        alt: gs("Form Fills"),
        src: g_40_icons.FormFill,
        dock: "left",
        tooltiptext: gs("Form Fill Profiles"),
        clickfn: function(e) {
            formfillprofile_popupaction(e, LP_derive_doc())
        }
    },
    generate: {
        id: "SB_genico",
        alt: gs("Generate"),
        src: g_40_icons.Generate,
        dock: "left",
        tooltiptext: gs("Generate"),
        clickfn: function(e) {
            generate_popupaction(e)
        }
    },
    never: {
        id: "SB_nevico",
        alt: gs("Never"),
        src: g_40_icons.Disable,
        dock: "left",
        tooltiptext: gs("Disable"),
        clickfn: function(e) {
            never_popupaction(e, LP_derive_doc(), "close")
        }
    },
    close: {
        id: "SB_closeico",
        alt: gs("Close"),
        src: g_40_icons.Close,
        dock: "right",
        tooltiptext: gs("Close"),
        clickfn: function(e) {
            close_popupaction(LP_derive_doc(), "close")
        }
    }
};

function set_new_superbox_40(e, t) {
    if (!e) return null;
    var c = "undefined" != typeof g_isfirefox && g_isfirefox ? "html:" : "",
        i = null;
    if (verbose && times && (times.createbox = LP_gettime()), !(i = n(e, t))) return null;
    var s = 0;

    function n(e, t) {
        if (!e || !t) return null;
        var i = e.createElement(c + "div");
        return i.id = "headerdiv", i.className = "bg40dialog", t.appendChild(i), verbose && times && (times.createheader = LP_gettime()), LP_addEventHandler(i, "selectstart", function() {
            return !1
        }), i
    }

    function o(e, t) {
        if (!e || !t) return !1;
        var i = e.createElement(c + "div");
        i.id = "SB_titlebox", i.className = "super40height bg40title super40title unselectable", g_isie && LP_getDocumentMode(e) < 10 && i.setAttribute("unselectable", "on");
        var s = e.createElement(c + "span");
        return s.id = "SB_titlebox_txt", s.setAttribute("draggable", "false"), s.className = "super40title", LP_elt_set_text(s, gs("What would you like to do?")), i.appendChild(s), verbose && ((s = e.createElement(c + "span")).id = "debug_txt", s.style.display = "inline", s.style.fontSize = "10px", s.style.marginLeft = "5px", i.appendChild(s)), t.appendChild(i), verbose && times && (times.createtitle = LP_gettime()), !0
    }

    function r(e, t) {
        var i;
        verbose && times && (times.doiconsstart = LP_gettime());
        var s = e.createElement(c + "div");
        for (i in s.id = "SB_iconbox", s.className = "super40height bg40header", s.setAttribute("role", "navigation"), t.appendChild(s), SB_icons) SB_icons.hasOwnProperty(i) && a(e, s, SB_icons[i]);
        return verbose && times && (times.doiconsdone = LP_gettime()), !0
    }

    function a(e, t, i, s) {
        if (!e || !t) return !1;
        var n = "",
            o = e.createElement(c + "a");
        o.id = i.id + "_a", n = "super40icon", "right" == i.dock ? (n += " floatright", i.tooltiptext && (n += " tooltip40super")) : (n += " floatleft", i.tooltiptext && (n += " tooltip40superlong")), o.setAttribute("draggable", "false"), o.className = n, t.appendChild(o);
        var r = d(e, i);
        if (o.appendChild(r), g_isie) {
            r.style.display = "none";
            var a = _(e, i);
            o.appendChild(a)
        }
        if (i.tooltiptext) {
            var l = e.createElement(c + "span");
            LP_elt_set_text(l, i.tooltiptext), o.appendChild(l)
        }
        return !0
    }

    function d(e, t) {
        if (!e || !t) return null;
        var i = e.createElement(c + "input");
        return i ? (i.id = t.id + "_img", i.type = "button", t.tooltiptext || i.setAttribute("title", t.alt), i.setAttribute("aria-label", t.alt), i.className = sprintf("bg40header super40icon_icon %s", i.id), i) : null
    }

    function _(e, t) {
        if (!e || !t) return null;
        var i = e.createElement("INPUT");
        return i.id = t.id + "_img_ie", i.type = "image", g_isie ? i.src = t.src : i.setAttribute("src", t.src), i.setAttribute("alt", t.alt), t.tooltiptext || i.setAttribute("title", t.alt), i.width = 16, i.height = 16, i.className = "super40icon_icon_ie", i
    }

    function l(e) {
        if (!e) return !1;
        var t;
        for (t in SB_icons)
            if (SB_icons.hasOwnProperty(t)) {
                var i = e.getElementById(SB_icons[t].id + "_img");
                i && LP_addEventHandler(i, "click", SB_icons[t].clickfn)
            } return !0
    }

    function f() {
        verbose && times
    }
    r(e, i), o(e, i), l(e)
}

function update_title40(e, t) {
    if (!e) return !1;
    var i = e.getElementById("SB_titlebox_txt"),
        s = "";
    switch (t) {
        case "sites":
        case "never":
        case "formfill":
        case "generate":
        case "savesite":
            s = SB_icons[t].alt;
            break;
        case "zerostate":
            s = gs("What would you like to do?");
            break;
        case "delete":
            s = gs("Delete Site");
            break;
        case "deleteff":
            s = gs("Delete Formfill Profile");
            break;
        case "more":
            s = gs("More")
    }
    return s && LP_elt_set_text(i, s), !0
}

function set_active_img40(e, t) {
    if (!e) return !1;
    var i, s, n, o = SB_icons[t];
    switch (t) {
        case "sites":
        case "never":
        case "formfill":
        case "generate":
        case "savesite":
            for (i in SB_icons)
                if (SB_icons.hasOwnProperty(i))
                    if (s = SB_icons[i].id + "_img", n = SB_icons[i].id + "_active", i == t) {
                        var r;
                        if (!(r = e.getElementById(o.id + "_img"))) continue;
                        0 <= r.className.indexOf(s) && (r.className = r.className.replace(s, n))
                    } else {
                        var r;
                        if (!(r = e.getElementById(SB_icons[i].id + "_img"))) continue;
                        0 <= r.className.indexOf(n) && (r.className = r.className.replace(n, s))
                    } break;
        case "close":
        default:
            for (i in SB_icons) {
                var r;
                if (SB_icons.hasOwnProperty(i)) s = SB_icons[i].id + "_img", n = SB_icons[i].id + "_active", (r = e.getElementById(s)) && (r.className = r.className.replace(n, s))
            }
    }
    return !0
}

function reveal_real_icons(e) {
    for (var t in SB_icons) {
        var i = e.getElementById(SB_icons[t].id + "_img_ie"),
            s = e.getElementById(SB_icons[t].id + "_img");
        i && s && (i.style.display = "none", s.style.display = "block")
    }
    return !0
}
"undefined" != typeof g_isie && g_isie && void 0 !== getBG().LPContentScriptFeatures && getBG().LPContentScriptFeatures.omaria && delete SB_icons.formfill, "undefined" != typeof g_isie && g_isie && LP_addEventHandler(window, "load", function() {
    reveal_real_icons(document)
});
//# sourceMappingURL=sourcemaps/popupfilltab_40.js.map