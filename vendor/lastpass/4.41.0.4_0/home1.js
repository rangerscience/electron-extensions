var g_current_version = 0;

function onLoad(e) {
    if (e) {
        var t = document.location.href.indexOf("?searchstr=");
        if (-1 != t) {
            var n = document.location.href.substring(t + 11),
                s = n.indexOf("&"); - 1 != s && (n = n.substring(0, s)), document.getElementById("searchbox").value = decodeURIComponent(n)
        }
        populate(), document.getElementById("searchbox").focus(), window.addEventListener("keydown", function(e) {
            handle_keydown(e)
        }, !1), setTimeout(function() {
            checkVersion()
        }, 500)
    } else get_data("vault", function() {
        onLoad(!0)
    })
}
var g_selectedrow = -1,
    g_searchhasfocus = !1;

function handle_keydown(e) {
    var t = 0 != e.keyCode ? e.keyCode : e.charCode;
    if (40 == t || 38 == t) {
        var n = 40 == t ? g_selectedrow + 1 : -1 == g_selectedrow ? g_ids.length : g_selectedrow - 1;
        n + 1 > g_ids.length || n < 0 || (-1 != g_selectedrow && (document.getElementById("site" + g_ids[g_selectedrow]).className = "site"), g_selectedrow = n, document.getElementById("site" + g_ids[g_selectedrow]).className = "site focus")
    } else 13 == t && -1 != g_selectedrow && ls(g_ids[g_selectedrow])
}

function clearkeyboardnav() {
    -1 != g_selectedrow && (document.getElementById("site" + g_ids[g_selectedrow]).className = "site", g_selectedrow = -1)
}
var g_ids = [],
    g_lastsearch = null;

function populate() {
    var e = getBG(),
        t = document.getElementById("searchbox").value.toLowerCase();
    g_lastsearch = t;
    var n = !e.g_prompts.edit_sn_prompt && e.get_searchNotesPref(),
        d = search_results(t, n, "gridsite");
    for (var a in void 0 !== d && d.sort(e.lp_sort_case_insensitive_name), s = [], g_ids = [], g_selectedrow = -1, event_handlers = {}, d) g_ids.push(get_record_id(d[a])), s.push(getsitehtml(d, a));
    var r = document.createElement("div");
    r.id = "gridclear", r.className = "clear", s.push(r), LP_decimate_children(document.getElementById("gridsite"));
    for (var a = 0; a < s.length; a++) document.getElementById("gridsite").appendChild(s[a]);
    for (var a in event_handlers) document.getElementById(a).onclick = event_handlers[a];
    s = null, g_current_version = e.g_local_accts_version, 0 < d.length && (g_selectedrow = 0, document.getElementById("site" + g_ids[0]).className = "site focus")
}

function checkVersion(e) {
    if (!g_issafari && !g_isfirefoxsdk || e) {
        var t = getBG();
        t.lploggedin && g_current_version == t.g_local_accts_version || populate(), setTimeout(function() {
            checkVersion()
        }, 500)
    } else getBG().update_state("search")
}

function search_go() {
    populate()
}

function search_clear() {
    document.getElementById("searchbox").value = "", document.getElementById("showallsites").classList.toggle("hidden", !0), populate()
}

function sp(e, t, n) {
    if (get_innertext(e) == gs("Show")) {
        var s = getBG(),
            d = get_record(t);
        if (null != d.sharedfromaid && "" != d.sharedfromaid && "0" != d.sharedfromaid && "null" != d.sharedfromaid) return void alert(gs("This is a shared site. You are not permitted to view the password."));
        if (!n && (d.pwprotect || s.g_prompts.view_pw_prompt)) return void s.security_prompt(function() {
            sp(e, t, !0)
        });
        set_innertext(e, s.getpasswordfromacct(get_record(t)))
    } else set_innertext(e, gs("Show"))
}

function os(e) {
    var t = getBG();
    return t.editAid(e, window), is_in_panel() && t.closecurrenttab("home.html"), !1
}

function ds(e) {
    var t;
    return getBG().deleteAid(e, window), !1
}

function ls(e) {
    var t = getBG();
    return t.launch(e), setTimeout(function() {
        window_close("home.html")
    }, 0), is_in_panel() && t.closecurrenttab("home.html"), !1
}

function search_keyup(e, t) {
    var n = e.charCode ? e.charCode : e.keyCode ? e.keyCode : e.which ? e.which : 0,
        s = document.getElementById("searchbox").value;
    g_searchhasfocus && 40 != n && 38 != n && 13 != n && -1 < s.length && populate(), document.getElementById("showallsites").classList.toggle("hidden", 0 == s.length)
}
var MAX_GROUPNAME_LEN = 80,
    MAX_SITENAME_LEN = 30,
    MAX_SITEUSERNAME_LEN = 15;

function getsitehtml(e, t, n) {
    id = get_record_id(e[t]), name = trunc(e[t].name, MAX_SITENAME_LEN), username = void 0 !== e[t].unencryptedUsername ? trunc(e[t].unencryptedUsername, MAX_SITEUSERNAME_LEN) : "", event_handlers["launch" + id] = function() {
        return ls(this.id.substring(6))
    }, event_handlers["show" + id] = function() {
        return sp(this, this.id.substring(4))
    }, event_handlers["edit" + id] = function() {
        return os(this.id.substring(4))
    }, event_handlers["delete" + id] = function() {
        return ds(this.id.substring(6))
    };
    var s = document.createElement("div");
    s.className = "site", s.id = "site" + id;
    var d = document.createElement("div"),
        a;
    d.className = "border", (a = document.createElement("div")).className = "sitename";
    var r = document.createElement("span"),
        i, a, a, i, a, a, a, a, a;
    return r.className = "content", r.appendChild(sprite_gethtmlfromrecord(e[t])), (i = document.createElement("a")).setAttribute("target", "_blank"), i.id = "launch" + id, set_innertext(i, name), r.appendChild(i), a.appendChild(r), d.appendChild(a), (a = document.createElement("div")).className = "siteusername", (r = document.createElement("span")).className = "content", set_innertext(r, username), a.appendChild(r), d.appendChild(a), (a = document.createElement("div")).className = "sitepassword", (r = document.createElement("span")).className = "content", (i = document.createElement("a")).id = "show" + id, set_innertext(i, gs(0 < e[t].password.length ? "Show" : "")), r.appendChild(i), a.appendChild(r), d.appendChild(a), (a = document.createElement("div")).className = "sitefavorite", (r = document.createElement("span")).className = "content", "1" == e[t].fav && (r.innerText = "⭐"), a.appendChild(r), d.appendChild(a), (a = document.createElement("div")).className = "sitenote", (r = document.createElement("span")).className = "content", "" != e[t].extra && (r.innerText = "📝"), a.appendChild(r), d.appendChild(a), (a = document.createElement("div")).className = "siteprotected", (r = document.createElement("span")).className = "content", e[t].pwprotect && (r.innerText = "🔒"), a.appendChild(r), d.appendChild(a), (a = document.createElement("div")).className = "siteautologin", (r = document.createElement("span")).className = "content", e[t].autologin && (r.innerText = "✏️"), a.appendChild(r), d.appendChild(a), (a = document.createElement("div")).className = "siteaction", (i = document.createElement("a")).id = "edit" + id, set_innertext(i, gs("Edit")), a.appendChild(i), r = document.createElement("span"), set_innertext(r, "•"), a.appendChild(r), (i = document.createElement("a")).id = "delete" + id, set_innertext(i, gs("Delete")), a.appendChild(i), d.appendChild(a), s.appendChild(d), s
}

function sprite_gethtmlfromrecord(e) {
    var t;
    return getBG().geticonhtmlfromrecord(e, document)
}

function trunc(e, t) {
    return (e = e || "").length <= t ? e : e.substr(0, t) + "..."
}
//# sourceMappingURL=sourcemaps/home1.js.map