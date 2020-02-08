var g_fromwelcome = -1 != document.location.href.indexOf("?fromwelcome=1"),
    g_results = null;

function onLoad() {
    populate()
}

function populate() {
    var e = getBG();
    e.have_binary_function("get_chrome_passwords") ? e.call_binary_function("get_chrome_passwords", function(e) {
        g_results = e = e || [];
        for (var t = new Array, s = 0; s < g_results.length; s++)(void 0 !== g_results[s].username && "" != g_results[s].username || void 0 !== g_results[s].password && "" != g_results[s].password) && (t[t.length] = g_results[s]);
        g_results = t;
        var r = [];
        for (var s in event_handlers = {}, g_results) r.push(getsitehtml(g_results, s));
        for (var s in r.push(createElement({
                type: "div",
                attrs: {
                    id: "gridclear",
                    class: "clear"
                }
            })), emptyElement(document.getElementById("gridsite")), r.forEach(function(e) {
                document.getElementById("gridsite").appendChild(e)
            }), event_handlers) document.getElementById(s).addEventListener("click", event_handlers[s]);
        r = null
    }) : g_isfirefoxsdk || (document.getElementById("needbinaryspan").style.display = "block")
}

function sp(e, t) {
    e.textContent == gs("Show") ? set_innertext(e, g_results[t].password) : set_innertext(e, gs("Show"))
}

function getsitehtml(e, t, s) {
    return id = t, name = e[t].url, username = void 0 !== e[t].username ? e[t].username : "", event_handlers["link" + id] = function() {
        sp(this, this.id.substring(4))
    }, createElement({
        type: "div",
        attrs: {
            class: "site",
            id: "site" + id
        },
        children: [{
            type: "div",
            attrs: {
                class: "border"
            },
            children: [{
                type: "div",
                attrs: {
                    class: "sitename"
                },
                children: [{
                    type: "span",
                    attrs: {
                        class: "content"
                    },
                    text: name
                }]
            }, {
                type: "div",
                attrs: {
                    class: "siteusername"
                },
                children: [{
                    type: "span",
                    attrs: {
                        class: "content"
                    },
                    text: username
                }]
            }, {
                type: "div",
                attrs: {
                    class: "sitepassword"
                },
                children: [{
                    type: "span",
                    attrs: {
                        class: "content"
                    },
                    children: [{
                        type: "a",
                        attrs: {
                            id: "link" + id
                        },
                        text: gs("Show")
                    }]
                }]
            }, {
                type: "div",
                attrs: {
                    class: "siteimport"
                },
                children: [{
                    type: "input",
                    attrs: {
                        type: "checkbox",
                        id: "import" + id,
                        checked: ""
                    },
                    text: username
                }]
            }]
        }]
    })
}

function trunc(e, t) {
    return e.length <= t ? e : e.substr(0, t) + "..."
}

function select_all() {
    for (var e = 0; e < g_results.length; e++) document.getElementById("import" + e).checked = !0
}

function unselect_all() {
    for (var e = 0; e < g_results.length; e++) document.getElementById("import" + e).checked = !1
}

function checkdup(e, t) {
    if ("http://sn" == e.url) return !1;
    var s = getBG().getsites(t);
    for (var r in s) {
        var n = getBG().g_sites[r];
        if (n && n.unencryptedUsername == e.username && getBG().lpmdec_acct(n.password, !0, n, getBG().g_shares) == e.password) return !0
    }
    return !1
}

function lpimport() {
    for (var e = new Array, t = "cmd=uploadaccounts&username=" + getBG().en(getBG().g_username), s = 0, r = 0; r < g_results.length; r++)
        if (document.getElementById("import" + r).checked) {
            var n = g_results[r],
                a = getname_url(n.url),
                l;
            if (checkdup(n, lp_gettld_url(n.url))) continue;
            t += "&url" + s + "=" + getBG().en(getBG().bin2hex(punycode.URLToASCII(n.url))), t += "&username" + s + "=" + getBG().en(getBG().lpenc(n.username)), t += "&password" + s + "=" + getBG().en(getBG().lpenc(n.password)), t += "&type" + s + "=ie", t += "&usernamefield" + s + "=" + getBG().en(n.username_field), t += "&passwordfield" + s + "=" + getBG().en("*" + n.password_field);
            for (var i = 1; i <= 1e3; i++)
                if (l = a, 1 < i && (l += " (" + i + ")"), !lp_in_array(l, e)) {
                    e[e.length] = l;
                    break
                } t += "&name" + s + "=" + getBG().en(getBG().lpenc(l)), s++, getBG().LPISLOC && lpImportChromePasswordLocal(n)
        } getBG().LPISLOC && (getBG().g_local_accts_version++, getBG().rewritelocalfile()), t += getBG().get_identity_param(), getBG().lpMakeRequest(base_url + "lastpass/api.php", t, lpUploadAccountsResponse)
}

function lpImportChromePasswordLocal(e) {
    var t = getBG(),
        s = t.createNewAcct();
    s.aid = get_new_id(), s.name = lp_gettld_url(e.url), s.url = e.url;
    var r = lp_gettld_url(s.url);
    s.tld = r, s.unencryptedUsername = e.username, s.username = t.lpmenc(e.username, !0), s.password = t.lpmenc(e.password, !0);
    var n = get_new_id();
    if (s.urid = n, addfield(s, e.username_field, "text", t.lpmenc(e.username, !0), n), addfield(s, e.password_field, "password", t.lpmenc(e.password, !0), n), void 0 === t.g_tlds[s.tld] && (t.g_tlds[s.tld] = {}), t.g_tlds[s.tld][s.aid] = !0, t.add_ident_aid(s.aid), void 0 !== t.g_equivalentdomains[r]) {
        var a = t.g_equivalentdomains[r];
        if (void 0 !== t.g_equivalentdomains[a])
            for (var l = 0; l < t.g_equivalentdomains[a].length; l++) {
                var i = t.g_equivalentdomains[a][l];
                void 0 === t.g_tlds[i] && (t.g_tlds[i] = {}), t.g_tlds[i][aid] = !0
            }
    }
    t.g_sites[s.aid] = s
}

function addfield(e, t, s, r, n) {
    var a = new Object;
    a.otherfield = !1, a.name = t, a.type = s, a.value = r, a.formname = "", a.checked = !1, a.urid = n, a.otherlogin = "0", a.url = "", e.fields[e.fields.length] = a
}

function lpUploadAccountsResponse(e) {
    e && 4 == e.readyState && 200 == e.status && (0 < e.responseText.indexOf("OK") ? (getBG().get_accts(), getBG().refresh_windows(), alert(gs("Your Google Chrome passwords have been imported successfully.")), getBG().closecurrenttab("import.html")) : alert(gs("An error occurred while importing your Google Chrome passwords.")))
}

function cancel() {
    getBG().closecurrenttab("import.html")
}

function getbinary() {
    LPPlatform.installBinary()
}
//# sourceMappingURL=sourcemaps/import1.js.map