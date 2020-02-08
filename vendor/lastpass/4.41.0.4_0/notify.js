var g_notifytype = null,
    g_notifydata = null,
    g_matchingsites = null;

function oninitnotify() {}

function onshownotify() {
    lpdbg("notify", "showing notification");
    var e = getBG();
    if (e) {
        if (lpdbg("notify", "got background page"), g_notifytype = e.g_notification_type, g_notifydata = e.g_notification_data, $("#body").css("background", "#e6e6e6"), $("#body").css("minHeight", "auto"), "error" == g_notifytype) {
            void 0 !== g_notifydata.yellow && g_notifydata.yellow || ($("#body").css("background", "#d32d27"), $("#notifytable").css("color", "#fff"), $("#notifymsg").css("color", "#fff")), LP_decimate_children(document.getElementById("notifymsg"));
            for (var t = "string" == typeof g_notifydata.msg ? g_notifydata.msg.split("<br/>") : [], n = 0; n < t.length; n++) 0 < n && document.getElementById("notifymsg").appendChild(document.createElement("br")), document.getElementById("notifymsg").appendChild(document.createTextNode(t[n]));
            document.getElementById("notifyfeedbackbtn").style.display = g_notifydata.showFeedback ? "inline" : "none", document.getElementById("notifytryagainbtn").style.display = g_notifydata.showLogin ? "inline" : "none", g_notifydata.custombutton && g_notifydata.customaction ? (document.getElementById("notifytryagainbtn").style.display = "none", document.getElementById("notifycustombtn").value = g_notifydata.custombutton, document.getElementById("notifycustombtn").style.display = "inline", document.getElementById("notifycustombtn").addEventListener("click", function() {
                getBG().openURL(g_notifydata.customaction), closemole()
            })) : document.getElementById("notifycustombtn").style.display = "none", document.getElementById("notifycreateaccountbtn").style.display = g_notifydata.showCreateAccount && !e.LPISLOC ? "inline-block" : "none", document.getElementById("notifydisablebtn").style.display = g_notifydata.multifactor_disable_url ? "inline-block" : "none", document.getElementById("notifydisablesinglebtn").style.display = "none", document.getElementById("notifystarttrialbtn").style.display = g_notifydata.showStartTrial ? "inline-block" : "none"
        } else if ("save" == g_notifytype) $("#body").css("background", "#87d087"), set_innertext(document.getElementById("notifymsg"), gs("Should LastPass remember this password?") + " (" + g_notifydata.tld + ")");
        else if ("alert" == g_notifytype) {
            var o;
            lpdbg("notify", "notify type is alert"), $("#body").css("background", "#ddd"), document.getElementById("lefticon").src = (e.g_ischrome, "images/warning.png"), "weak" == g_notifydata.alerttype ? (lpdbg("notify", "alert type is weak"), set_innertext(document.getElementById("notifymsg"), gs("Weak Password")), set_innertext(document.getElementById("alertdescription"), gs("LastPass has detected that you are using a weak password for the site below. We recommend going to your account settings for this site, and creating a new password. Use LastPass to generate a unique, strong password for this account. You can then save the changes on the site, and to LastPass.")), 1 == g_notifydata.pwch && set_innertext(document.getElementById("notifyseccheck"), gs("Change Password Automatically"))) : "duplicate" == g_notifydata.alerttype ? (lpdbg("notify", "alert type is duplicate"), set_innertext(document.getElementById("notifymsg"), gs("Duplicate password")), set_innertext(document.getElementById("alertdescription"), gs("LastPass has detected that you have used the password for this login on other sites, too. We recommend going to your account settings for this site, and creating a new password. Use LastPass to generate a unique, strong password for this account. You can then save the changes on the site, and to LastPass.")), 1 == g_notifydata.pwch && set_innertext(document.getElementById("notifyseccheck"), gs("Change Password Automatically"))) : "mpw_reuse" == g_notifydata.alerttype ? (set_innertext(document.getElementById("notifymsg"), gs("Security Alert: Master Password Reused")), set_innertext(document.getElementById("alertdescription"), gs("LastPass has detected that you have used your Master Password as the password for this site. It is highly recommended that you change your LastPass Master Password to protect all of your online accounts."))) : "hacked" == g_notifydata.alerttype && (LP_decimate_children(document.getElementById("notifymsg")), document.getElementById("notifymsg").appendChild(document.createTextNode(gs("Security Alert:"))), document.getElementById("notifymsg").appendChild(document.createElement("br")), document.getElementById("notifymsg").appendChild(document.createTextNode(gs("Site Hacked Detected"))), set_innertext(document.getElementById("alertdescription"), gs("We detected that a site you use has announced it was hacked. Please change your password for that site now.")), document.getElementById("disables").style.display = "none", set_innertext(document.getElementById("notifyseccheck"), gs("Change Password Automatically"))), (o = document.createElement("span")).className = "alertheader";
            for (var a = [], n = 0; n < document.getElementById("notifymsg").childNodes.length; n++) a[n] = document.getElementById("notifymsg").childNodes[n];
            LP_decimate_children(document.getElementById("notifymsg"));
            for (var n = 0; n < a.length; n++) o.appendChild(a[n]);
            document.getElementById("notifymsg").appendChild(o), set_innertext(document.getElementById("alertsite"), g_notifydata.name), set_innertext(document.getElementById("alertusername"), g_notifydata.username), lpdbg("notify", "done creating alert"), document.body.className += " alertbody"
        } else if ("change" == g_notifytype) {
            var i;
            if (g_matchingsites = e.getsites(g_notifydata.tld, !0), 1 == array_length(g_matchingsites))
                for (var n in g_matchingsites) {
                    i = gs("LastPass detected a password change for user:") + " " + of (e.getusernamefromacct(e.g_sites[n]));
                    break
                } else i = gs("LastPass detected a password change for domain:") + " " + of (g_notifydata.tld);
            set_innertext(document.getElementById("notifymsg"), i)
        } else if ("upgrade" == g_notifytype) g_notifydata.upgrade ? (set_innertext(document.getElementById("notifymsg"), gs("An Update is Available. Would you like to install?")), document.getElementById("notifyyesbtn").style.display = "inline-block", document.getElementById("notifynobtn").style.display = "inline-block") : (g_notifydata.checking ? set_innertext(document.getElementById("notifymsg"), gs("Checking For Updates...")) : set_innertext(document.getElementById("notifymsg"), gs("No Updates Are Available")), document.getElementById("notifyyesbtn").style.display = "none", document.getElementById("notifynobtn").style.display = "none");
        else if ("lpalert" == g_notifytype) {
            var d = g_notifydata.data,
                s = d.lpa_title,
                l = d.lpa_msg,
                c = d.lpa_onclicktext,
                r = d.lpa_onclickurl;
            r += "?lang=" + en(lpGetPref("language", navigator.language));
            var g = d.lpa_iconurl ? of (d.lpa_iconurl) : "",
                y = d.lpa_secondary_msg;
            lpdbg("notify", "alert type is lpalert"), LP_decimate_children(document.getElementById("notifylpalert"));
            var m = document.createElement("h2");
            m.id = "lpalertheader";
            var f = document.createElement("img");
            f.id = "lpalertheaderimg", f.setAttribute("src", "images/lastpass_dialog_24x24.png"), m.appendChild(f), m.appendChild(document.createTextNode(s)), document.getElementById("notifylpalert").appendChild(m);
            var u = document.createElement("p"),
                o;
            (f = document.createElement("img")).id = "lpalert_icon", f.setAttribute("src", g), u.appendChild(f), document.getElementById("notifylpalert").appendChild(u), u = document.createElement("p"), set_innertext(u, l), document.getElementById("notifylpalert").appendChild(u), u = document.createElement("p"), (o = document.createElement("span")).id = "lpalert_warning", set_innertext(o, y), u.appendChild(o), document.getElementById("notifylpalert").appendChild(u), (u = document.createElement("p")).id = "btn_wrap";
            var p = document.createElement("a");
            p.id = "changepw", p.setAttribute("target", "_blank"), p.setAttribute("href", "#"), p.className = "rbtn nbtn btn_exp_h btn_midi", set_innertext(p, c), u.appendChild(p), document.getElementById("notifylpalert").appendChild(u);
            var h = "450px";
            document.getElementById("changepw").onclick = function() {
                return getBG().openURL(r), 0 === r.indexOf(base_url) && e.unlock_plug2web(), !1
            }, $("#lpnotify").css("display", "block"), $("#body").css("background", "#ffffff"), $("#notifytable").css("color", "#fff"), $("#body").css("width", h), $("#notifytable").css("width", h), $("#tablenotify").css("color", "#00000"), $("#lpalert_Warning").css("color", "#d32d27"), $("#notifytable").css("white-space", "normal"), set_innertext(document.getElementById("alertdescription"), gs("LastPass has detected that you have used the password for this login on other sites, too. We recommend going to your account settings for this site, and creating a new password. Use LastPass to generate a unique, strong password for this account. You can then save the changes on the site, and to LastPass.")), g || (document.getElementById("lpalert_icon").style.display = "none")
        }
        for (var _ = document.getElementsByTagName("div"), n = 0; n < _.length; n++) lpdbg("notify", "looking at div " + n), 0 == _[n].id.indexOf("notify") && "popup" != _[n].id.substring(_[n].id.length - 5) && (lpdbg("notify", "hiding div " + n), _[n].style.display = "none");
        void 0 === document.getElementById("notify" + g_notifytype) && onshownotify(), document.getElementById("notify" + g_notifytype).style.display = "block", lpdbg("notify", "done showing notification"), document.body.style.minHeight = "inherit"
    }
    resize_panel()
}

function resize_panel() {
    g_isfirefoxsdk ? setTimeout(function() {
        getBG().resize_panel(Math.max(400, $(document).width() + 10), $(document.body).height() + 10)
    }, 0) : g_issafari && "error" == g_notifytype && setTimeout(function() {
        safari.self.width = Math.max(400, $(document).width() + 10), safari.self.height = $(document.body).height() + 10
    }, 0)
}

function savethesite() {
    var e = getBG();
    g_notifydata.addsite = 1, e.g_site_data = g_notifydata, e.openURL(getchromeurl("site.html"), null, e.g_site_data), closemole()
}

function clicknever(e) {
    var t = {
            neversite: {
                title: gs("Never For This Site"),
                cmd: "neversite"
            },
            neverdomain: {
                title: gs("Never For This Domain"),
                cmd: "neverdomain"
            }
        },
        n = [],
        o, a = {};
    for (o in t)
        if (null != t[o]) {
            var i = document.createElement("div");
            i.id = o, i.className = "notifybutton", void 0 !== t[o].cmd && i.setAttribute("data-lpcmd", t[o].cmd);
            var d = document.createElement("div");
            set_innertext(d, t[o].title), i.appendChild(d), n.push(i), a[o] = function() {
                notifyaction(this.getAttribute("data-lpcmd"))
            }
        } else n += '<div id="' + o + '" class="notifyspacer"><div></div></div>';
    var s = document.getElementById("notifyneverpopup");
    LP_decimate_children(s), s.style.left = e.x;
    for (var o = s.style.top = 0; o < n.length; o++) s.appendChild(n[o]);
    for (var o in a) document.getElementById(o).addEventListener("click", a[o])
}

function notifyaction(e) {
    var t = g_notifydata.url,
        n = getBG();
    "neversite" == e ? t = n.lpcanonizeUrl(t) : "neverdomain" == e && (t = n.lp_gettld_url(t)), n.addNever(t), closemole()
}

function changeconfirm() {
    if (1 == array_length(g_matchingsites))
        for (var e in g_matchingsites) {
            getBG().changePassword(g_notifydata.newpw, new Array(e));
            break
        } else {
            if (g_browseraction) return void receiveBG({
                cmd: "changepw",
                newpw: g_notifydata.newpw,
                tld: g_notifydata.tld
            });
            getBG().openchangepw(g_notifydata.newpw, g_notifydata.tld)
        }
    closemole()
}
//# sourceMappingURL=sourcemaps/notify.js.map