var g_ischrome = "undefined" != typeof chrome && (void 0 !== chrome.runtime || void 0 !== chrome.extension),
    g_issafari = "undefined" != typeof safari && void 0 !== safari.self,
    close_img_src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABYklEQVR42qXTvWrCUBQHcKe+QqfundPFxT0OnTJ0MtChmw/g4NgH6FtkEwoBv8BEA8EYFGswBIIEhFCrU4V26cfp+Qe5RLlKwcAPknty/7mHe1NoNBoy9+yZJWzBcN3J3j0cuGJJt9ul0WhEYRjSfD4nz/Oo0+kQ10J2eSygyL4xcb1eyyAUIV/sWhawHY/HtFqtTvJ9HyGbw4B6r9ejNE3/ZdfOQz4gnkwmtFwuM7VajRRFIcMwyLIs3GNM1HetePmA9yAIKEkSoVqtUrlcBtzv1abTKQJe9wIwGMexgGd8GQ5rvFoEvOUDFtiqKIoEXddJVdWMpml7Ndd1EfCSD3jC3mPPoVKpUKlUItM0AavAmKi3220E1PMBF+zTcRyazWYn9ft9Qsuyc3DLfm3bRs8y2BFM/mFFWQDcsE2r1SKsZjgcZgaDATWbTUxOxSmUBwiPLGEfOzGrH/uZzlIgorP8ASYfyJK1fcokAAAAAElFTkSuQmCC",
    x3_img_src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABX0lEQVR42qXTsWrCUBTGcaFroZNTwQfo1KnQN3CQblLIkD2CFIqbaEBQsGAIJBAaCIoQI4JKoeADFDpVmuCsUyE4FJyznJ4vSEjkKgWFH4R7cv/RS8zNZjORO/bMXDZkT+xWdO/hwtV+E02n0wxeg1d2eSxQYD+TyYRc1xXiGSIblhcFPnGT4zgnjUYjRBaHgaLneWSa5r+Mx2NE7tOBvmVZ1O12Y8vlkqIoovl8ToPBANdYS+a2bSPwkg58YNBsNhNBENB2uwVcZ2a9Xg+Bt0yg1WpRrVZLNBoNPBlwnZm1220E3tOBIQKKoiRWqxWFYRhbr9eZWafTQcBIBx4NwyBZlmO+79Nut8OTAd8Ca8kc54WDTwcu2He9XqdyuXySqqqEnyx6D27YLyKlUkkEB4jNISuIAnDNFpqmUaVSIUmSYtVqlXRdx2Z88uJXOeuBuexrr8+Kx/5MZ8kR0Vn+AGczfuZVuZDxAAAAAElFTkSuQmCC",
    g_searchfillbox = null,
    g_searchloginbox = null,
    pass = !0,
    g_40notify = !1,
    showintro = !1,
    showinterstitial = !1,
    showadddialog = !1,
    showtryagain = !1,
    preventhideoverlay = !1;

function totp_enable() {
    var e = document.createElement("div");
    e.id = "totp_step2";
    var t = document.createElement("center"),
        n = document.createElement("img");
    n.setAttribute("src", "images/vault_4.0/Loading.gif"), t.appendChild(n), t.appendChild(document.createElement("br")), t.appendChild(document.createElement("br"));
    var i = document.createElement("b");
    i.appendChild(document.createTextNode(gs("Great. One moment, please."))), t.appendChild(i), e.appendChild(t);
    var o = document.getElementById("totp_step1");
    o.parentNode.replaceChild(e, o), sendRequest({
        cmd: "enabletotp",
        tld: getQueryVariable("tld")
    }, enabletotp_response)
}

function enabletotp_response(e) {
    var t = document.createElement("div"),
        n = document.createElement("b");
    n.appendChild(document.createTextNode(e.ok ? gs("You did it!") : gs("Great! Here's what you do."))), t.appendChild(n), t.appendChild(document.createElement("br")), t.appendChild(document.createElement("br")), t.appendChild(document.createTextNode(e.ok ? gs("Your preferences have been updated, so next time you need multifactor authentication on this page, you'll get a push notification.") : gs("Setting up push notifications with LastPass Authenticator is simple. Open the LastPass Authenticator app, and either scan or manually add this website's information in the multifactor authenticator settings.")));
    var i = document.getElementById("totp_step2");
    i.parentNode.replaceChild(t, i)
}

function totp_sendlink() {
    var e = document.createElement("div"),
        t = document.createElement("b"),
        n;
    t.appendChild(document.createTextNode(gs("Send me a link"))), e.appendChild(t), e.appendChild(document.createElement("br")), e.appendChild(document.createElement("br")), e.appendChild(document.createTextNode(gs("Simply choose if you'd like the link emailed to you or sent via SMS message."))), e.appendChild(document.createElement("br")), e.appendChild(document.createElement("br")), e.appendChild(document.createTextNode(gs("Email"))), e.appendChild(document.createElement("br")), (n = document.createElement("input")).id = "email", n.style.width = "100%", n.style.height = "50px", n.value = getQueryVariable("username"), e.appendChild(n);
    var i = document.createElement("center"),
        n;
    i.appendChild(document.createTextNode("- " + gs("or") + " -")), e.appendChild(i), e.appendChild(document.createTextNode(gs("Phone Number"))), e.appendChild(document.createElement("br")), (n = document.createElement("input")).id = "phone", n.style.width = "100%", n.style.height = "50px", e.appendChild(n), e.appendChild(document.createElement("br")), e.appendChild(document.createElement("br")), (n = document.createElement("input")).setAttribute("type", "button"), n.setAttribute("value", gs("Cancel")), n.addEventListener("click", function() {
        sendRequest({
            cmd: "hidetotp"
        })
    }), n.style.width = "48%", n.style.height = "50px", n.style.backgroundColor = "#3C4A54", n.style.color = "white", n.style.fontWeight = "bold", e.appendChild(n), (n = document.createElement("input")).setAttribute("type", "button"), n.setAttribute("value", gs("Send")), n.addEventListener("click", function() {
        sendRequest({
            cmd: "invitetotp",
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value
        }), sendRequest({
            cmd: "hidetotp"
        })
    }), n.style.width = "48%", n.style.height = "50px", n.style.backgroundColor = "#D32D27", n.style.color = "white", n.style.fontWeight = "bold", n.style.float = "right", e.appendChild(n);
    var o = document.getElementById("totp_step1");
    o.parentNode.replaceChild(e, o)
}

function load() {
    if ("undefined" != typeof safari ? (safari.self.removeEventListener("message", handleMessage, !1), safari.self.addEventListener("message", handleMessage, !1)) : g_isfirefoxsdk && window.addEventListener("message", handleMessage, !1), 0 < document.location.href.indexOf("&do40=1") && (g_40notify = !0), 0 < document.location.href.indexOf("&doInterstitial=1") && (showinterstitial = !0), 0 < document.location.href.indexOf("&doIntro=1") && (showintro = !0), 0 < document.location.href.indexOf("&showadddialog=1") && (showadddialog = !0), 0 < document.location.href.indexOf("&showtryagain=1") && (showadddialog = !(showtryagain = !0)), 0 < document.location.href.indexOf("&hideoverlay=1") && (preventhideoverlay = !0), 0 < document.location.href.indexOf("&add=1")) document.body.style.background = get_notification_add_bg();
    else if (0 < document.location.href.indexOf("&error=1")) document.body.style.background = get_notification_error_bg();
    else if (0 < document.location.href.indexOf("&context=")) document.body.style.backgroundColor = "#E8EDF9", document.body.style.margin = "0px";
    else {
        if (0 < document.location.href.indexOf("&cpwbot")) {
            var e = getQueryVariable("symbolic"),
                t = getQueryVariable("cpwbot");
            return void display_cpw_message_loop(document, t, e)
        }
        if (0 < document.location.href.indexOf("&totp")) {
            var n = -1 != document.location.href.indexOf("&getting=1"),
                i = -1 != document.location.href.indexOf("&multifactorenabled=1"),
                o = -1 != document.location.href.indexOf("&lastpassauthenabled=1"),
                d = document.createElement("div");
            d.style.border = "1px solid #000", d.style.marginRight = "10px", d.style.padding = "20px", d.style.backgroundColor = "#fff", d.style.fontFamily = '"Open Sans",Arial,sans-serif', d.style.fontSize = "14px";
            var a = document.createElement("img");
            a.setAttribute("src", "images/authenticator.png"), d.appendChild(a);
            var l = document.createElement("a");
            l.setAttribute("href", "#"), l.onclick = function() {
                return lpshowmenudiv("totp"), !1
            }, (a = document.createElement("img")).id = "lptotp", a.setAttribute("src", "images/dropdown.png"), a.style.float = "right", l.appendChild(a), d.appendChild(l), d.appendChild(document.createElement("br")), d.appendChild(document.createElement("br"));
            var c = document.createElement("div");
            c.id = "totp_step1";
            var s = document.createElement("b"),
                r;
            if (s.appendChild(document.createTextNode(n ? gs("Check your device for a push notification") : gs("Tired of typing those 6 numbers?"))), c.appendChild(s), c.appendChild(document.createElement("br")), c.appendChild(document.createElement("br")), r = n ? gs("Simply approve the login verification and we'll take care of the rest.") : o ? gs("LastPass Authenticator can send you a push notification instead, and decrease your authentication annoyance with a single tap.") : i ? gs("LastPass Authenticator can send you a push notification instead, and decrease your authentication annoyance with a single tap.  Switch to LastPass Authenticator today.") : gs("LastPass Authenticator can send you a push notification instead, and decrease your authentication annoyance with a single tap.  Download LastPass Authenticator today."), c.appendChild(document.createTextNode(r)), !n) {
                c.appendChild(document.createElement("br")), c.appendChild(document.createElement("br")), o && ((l = document.createElement("a")).setAttribute("target", "_blank"), l.setAttribute("href", "https://support.logmeininc.com/lastpass/help/lastpass-authenticator-lp030014"), l.appendChild(document.createTextNode(gs("Learn more"))), c.appendChild(l), c.appendChild(document.createElement("br")), c.appendChild(document.createElement("br")));
                var u = document.createElement("input");
                u.setAttribute("type", "button"), u.setAttribute("value", o ? gs("Enable") : gs("Send me a link")), u.addEventListener("click", o ? totp_enable : totp_sendlink), u.style.width = "100%", u.style.height = "50px", u.style.backgroundColor = "#D32D27", u.style.color = "white", u.style.fontWeight = "bold", c.appendChild(u)
            }
            d.appendChild(c), document.body.appendChild(d), (d = document.createElement("div")).id = "lppopuptotp", d.className = "lppopup";
            var m = document.createElement("table");
            m.setAttribute("width", "100%");
            var p = document.createElement("tr"),
                f = document.createElement("td");
            f.style.height = "45px", f.appendChild(document.createTextNode(gs("Dismiss this notification"))), f.addEventListener("click", function() {
                sendRequest({
                    cmd: "hidetotp"
                })
            }), p.appendChild(f), m.appendChild(p), p = document.createElement("tr"), (f = document.createElement("td")).style.height = "45px";
            var g = getQueryVariable("tld");
            return f.appendChild(document.createTextNode(sprintf(gs("Don't show this for %s"), g))), f.addEventListener("click", function() {
                sendRequest({
                    cmd: "disabletotp",
                    tld: g
                }), sendRequest({
                    cmd: "hidetotp"
                })
            }), p.appendChild(f), m.appendChild(p), p = document.createElement("tr"), (f = document.createElement("td")).style.height = "45px", f.appendChild(document.createTextNode(gs("Don't show this option for any site"))), f.addEventListener("click", function() {
                sendRequest({
                    cmd: "disabletotp",
                    tld: "all"
                }), sendRequest({
                    cmd: "hidetotp"
                })
            }), p.appendChild(f), m.appendChild(p), d.appendChild(m), void document.body.appendChild(d)
        }
        document.body.style.background = get_notification_bg()
    }
    document.body.style.backgroundRepeat = "repeat-x", g_ischrome ? chrome_runtime_sendMessage({
        cmd: "getnotificationdata"
    }, function(e) {
        replaceElement(document.body, e.html), stylize_tags(), setup_extra(e.extra), setup_event_handlers(), initialize_sorttable(), g_40notify && diddle_40(document), setupIntroTutorial()
    }) : "undefined" != typeof safari ? safari.self.tab.dispatchMessage("getnotificationdata", {}) : g_isfirefoxsdk && send_message({
        messagetype: "getnotificationdata"
    })
}

function setupIntroTutorial() {
    function e() {
        for (; document.body.firstChild;) document.body.removeChild(document.body.firstChild)
    }
    var t, t, t;
    if (showtryagain) e(), (t = new IntroTutorialHelpDialog).initialize(document, {
        makeShade: !1,
        alignBottom: !1,
        addHide: !0,
        transparentBG: !0,
        textChoice: "tryAgain",
        arrow: {
            orientation: "right",
            position: "middle"
        }
    });
    else if (showintro) {
        var t;
        e(), (t = new IntroTutorialHelpDialog).initialize(document, {
            makeShade: !1,
            alignBottom: !1,
            addHide: !0,
            transparentBG: !0,
            textChoice: "siteLanding",
            arrow: {
                orientation: "right",
                position: "middle"
            }
        })
    }
    showinterstitial && (e(), (t = new IntroTutorialHelpDialog).initialize(document, {
        makeShade: !0,
        alignBottom: !1,
        addHide: !1,
        transparentBG: !0,
        textChoice: "interstitial"
    }));
    showadddialog && (t = new IntroTutorialHelpDialog).initialize(document, {
        makeShade: !0,
        alignBottom: !1,
        addHide: !0,
        transparentBG: !1,
        appendElementId: "main",
        position: {
            positionFn: function() {
                return {
                    top: document.getElementById("lpaddsite").offsetTop,
                    left: document.getElementById("lpaddsite").offsetLeft
                }
            },
            offset: {
                top: 37,
                left: -217
            }
        },
        textChoice: "saveSite",
        arrow: {
            orientation: "top",
            position: "right"
        }
    })
}

function handleMessage(e) {
    if (!g_isfirefoxsdk || e.origin == window.location.origin) {
        if (g_isfirefoxsdk && (e.message = e.data, e.name = e.data.messagetype), ("gotnotificationdata" == e.name || "gotnotificationdata" == e.message.cmd) && setup_extra(e.message.extra)) {
            if (g_isfirefoxsdk) {
                LP_decimate_children(document.body);
                for (var t = (new DOMParser).parseFromString(e.message.html, "text/html"); t.body.firstChild;) document.body.appendChild(t.body.removeChild(t.body.firstChild))
            } else replaceElement(document.body, e.message.html);
            stylize_tags(), setup_event_handlers(), initialize_sorttable(), g_40notify && diddle_40(document), setupIntroTutorial()
        }
        "gotcpwmsg" != e.name && "gotcpwmsg" != e.message.cmd || (e.message.msg && display_cpw_message(document, e.message.msg), 1 === e.message.minimize_state && minimize_cpw_dialog(document)), "enabletotp_response" == e.name | "enabletotp_response" == e.message.cmd && enabletotp_response(e.message)
    }
}

function setup_extra(e) {
    return e = LPJSON.parse(e), -1 != document.location.href.indexOf("&" + e.type + "=") && (document_location_href = e.document_location_href, g_fillaid = e.g_fillaid, from = e.from, data = {}, void 0 !== e.notificationdata && (data.notificationdata = e.notificationdata), !0)
}

function setup_event_handlers() {
    for (var e = 1; e <= 3; e++)
        for (var t = document.getElementsByTagName(1 == e ? "img" : 2 == e ? "button" : "tr"), n = 0; n < t.length; n++)
            if (t[n].id)
                if ("lpaddcreditcard" == t[n].id) t[n].addEventListener("click", function() {
                    addcc()
                });
                else if ("lpaddprofile" == t[n].id) t[n].addEventListener("click", function() {
        addprofile()
    });
    else if ("lpaddsite" == t[n].id) t[n].addEventListener("click", function() {
        savethesite(utf8_to_b64(data.notificationdata))
    });
    else if ("lpautofill" == t[n].id) {
        var i;
        (i = t[n].getAttribute("lptype")) && "autofillsingle" == i ? t[n].addEventListener("click", function() {
            autofill(this.getAttribute("aid")), hideoverlay()
        }) : t[n].addEventListener("click", function() {
            clear_searchbox("autofill"), showmenu("autofill")
        })
    } else if (0 == t[n].id.indexOf("lpautofill")) t[n].addEventListener("click", function() {
        autofill(this.id.substring(10))
    });
    else if ("lpautologin" == t[n].id) {
        var i;
        (i = t[n].getAttribute("lptype")) && "autologinsingle" == i ? t[n].addEventListener("click", function() {
            autologin(this.getAttribute("aid"))
        }) : t[n].addEventListener("click", function() {
            clear_searchbox("autologin"), showmenu("autologin")
        })
    } else 0 == t[n].id.indexOf("lpautologin") ? t[n].addEventListener("click", function() {
        autologin(this.id.substring(11))
    }) : "lpbasicauthmoreinfobtn" == t[n].id ? t[n].addEventListener("click", function() {
        genericaction("basicauthmoreinfobtn", utf8_to_b64(LPJSON.stringify(data.notificationdata)))
    }) : "lpbasicauthneverbtn" == t[n].id ? t[n].addEventListener("click", function() {
        genericaction("basicauthneverbtn", utf8_to_b64(LPJSON.stringify(data.notificationdata)))
    }) : "lpchooseprofilecc" == t[n].id ? t[n].addEventListener("click", function() {
        chooseprofilecc()
    }) : "lpclearforms" == t[n].id ? t[n].addEventListener("click", function() {
        clearforms()
    }) : "lpconfirm" == t[n].id ? t[n].addEventListener("click", function() {
        changepw(utf8_to_b64(LPJSON.stringify(data.notificationdata)))
    }) : "lpcreateaccountbtn" == t[n].id ? t[n].addEventListener("click", function() {
        genericaction("createaccountbtn", utf8_to_b64(LPJSON.stringify(data.notificationdata)))
    }) : "lpdisablebtn" == t[n].id ? t[n].addEventListener("click", function() {
        genericaction("disablebtn", utf8_to_b64(LPJSON.stringify(data.notificationdata)))
    }) : "lpfeedbackbtn" == t[n].id ? t[n].addEventListener("click", function() {
        genericaction("feedbackbtn", utf8_to_b64(LPJSON.stringify(data.notificationdata)))
    }) : "lpstarttrialbtn" == t[n].id ? t[n].addEventListener("click", function() {
        genericaction("starttrialbtn", utf8_to_b64(LPJSON.stringify(data.notificationdata)))
    }) : "lpfillcurrent" == t[n].id ? t[n].addEventListener("click", function() {
        showmenu("fillcurrent")
    }) : 0 == t[n].id.indexOf("lpfillcurrent") ? t[n].addEventListener("click", function() {
        fillcurrent(this.id.substring(13))
    }) : "lpfillform" == t[n].id ? t[n].addEventListener("click", function() {
        showmenu("fillform")
    }) : 0 == t[n].id.indexOf("lpfillform") ? t[n].addEventListener("click", function() {
        fillform(this.id.substring(10))
    }) : "lpgenerate" == t[n].id ? t[n].addEventListener("click", function() {
        generate()
    }) : "lphideoverlay" == t[n].id ? (g_40notify || (t[n].addEventListener("mouseover", function() {
        this.src = x3_img_src
    }), t[n].addEventListener("mouseout", function() {
        this.src = close_img_src
    })), t[n].addEventListener("click", function() {
        hideoverlay(), bg.IntroTutorial.setState({
            enabled: !1
        }), sendAddSiteEvent({
            action: "notnow"
        })
    })) : "lpnever" == t[n].id ? t[n].addEventListener("click", function() {
        showmenu("never"), bg.IntroTutorial.setState({
            enabled: !1
        })
    }) : "lpneverautofill" == t[n].id ? t[n].addEventListener("click", function() {
        never("neverautofill", btoa(document_location_href), g_fillaid, from)
    }) : "lpneverdomain" == t[n].id ? t[n].addEventListener("click", function() {
        never("neverdomain", btoa(document_location_href), g_fillaid, from), bg.IntroTutorial.setState({
            enabled: !1
        }), sendAddSiteEvent({
            action: "never",
            neverType: "domain"
        })
    }) : "lpneverpage" == t[n].id ? t[n].addEventListener("click", function() {
        never("neverpage", btoa(document_location_href), g_fillaid, from), bg.IntroTutorial.setState({
            enabled: !1
        }), sendAddSiteEvent({
            action: "never",
            neverType: "page"
        })
    }) : "lpnotnow" == t[n].id ? t[n].addEventListener("click", function() {
        notnow(utf8_to_b64(data.notificationdata), btoa(lp_gettld_url(document_location_href)))
    }) : "lpsavenewsite" == t[n].id ? t[n].addEventListener("click", function() {
        savethesite(utf8_to_b64(LPJSON.stringify(data.notificationdata)))
    }) : "lptryagainbtn" == t[n].id ? t[n].addEventListener("click", function() {
        genericaction("tryagainbtn", utf8_to_b64(LPJSON.stringify(data.notificationdata)))
    }) : "lpcustombtn" == t[n].id ? t[n].addEventListener("click", function() {
        genericaction("custombtn", utf8_to_b64(LPJSON.stringify(data.notificationdata)))
    }) : "autofilltabsearchboxreset" == t[n].id ? (t[n].addEventListener("click", function() {
        clear_searchbox("autofill")
    }), t[n].src = x3_img_src) : "autologintabsearchboxreset" == t[n].id && (t[n].addEventListener("click", function() {
        clear_searchbox("autologin")
    }), t[n].src = x3_img_src);
    null != (g_searchfillbox = document.getElementById("autofilltabsearchbox")) && g_searchfillbox.addEventListener("keyup", function(e) {
        dofilter("autofill")
    }, !1), null != (g_searchloginbox = document.getElementById("autologintabsearchbox")) && g_searchloginbox.addEventListener("keyup", function(e) {
        dofilter("autologin")
    }, !1)
}

function clear_searchbox(e) {
    var t;
    if ("autofill" == e) t = g_searchfillbox;
    else {
        if ("autologin" != e) return;
        t = g_searchloginbox
    }
    if (null != t) {
        t.value = "";
        for (var n = document.getElementsByTagName("tr"), i = 0; i < n.length; i++) {
            var o = n[i].id;
            if (0 == o.indexOf("lp" + e)) {
                var d = document.getElementById(o);
                "table-row" != d.style.display && (d.style.display = "table-row")
            }
        }
        var a = document.getElementById(e + "footer");
        null != a && (a.className = "lppopupsearchbox"), t.focus()
    }
}

function sendRequest(e, t) {
    g_ischrome ? chrome_runtime_sendMessage(e, t || function() {}) : g_issafari ? safari.self.tab.dispatchMessage(e.cmd, e) : g_isfirefoxsdk && (e.messagetype = e.cmd, send_message(e))
}

function hideoverlay() {
    sendRequest({
        cmd: "hideoverlay"
    })
}
addStyle(!0);
var g_firstmenu = !0;

function showmenu(e) {
    if (!g_firstmenu && document.getElementById("lppopup" + e) && "none" != document.getElementById("lppopup" + e).style.display) return hideMenus(), void sendRequest({
        cmd: "slideupoverlay"
    });
    g_firstmenu = !0, hideMenus(), sendRequest({
        cmd: "slidedownoverlay"
    }), lpshowmenudiv(e)
}

function autofill(e) {
    bg.getShareType(e, function(e) {
        bg.sendLpImprove("sitelogin", {
            copy: 0,
            shareType: e,
            autologin: 0,
            source: "context"
        })
    }), sendRequest({
        cmd: "autofillaid",
        aid: e,
        source: "notification"
    }), hideMenus(), slideup()
}

function autologin(e) {
    sendRequest({
        cmd: "autologinaid",
        aid: e,
        source: "notification"
    }), hideMenus(), slideup()
}

function fillcurrent(e) {
    sendRequest({
        cmd: "fillcurrentaid",
        aid: e
    }), hideMenus(), slideup()
}

function fillform(e) {
    sendRequest({
        cmd: "fillformffid",
        ffid: e,
        source: "context"
    }), hideMenus(), slideup()
}

function addprofile() {
    sendRequest({
        cmd: "addprofile",
        source: "context"
    }), hideMenus(), hidecontext()
}

function addcc() {
    sendRequest({
        cmd: "addcreditcard",
        source: "context"
    }), hideMenus(), hidecontext()
}

function clearforms() {
    sendRequest({
        cmd: "clearforms",
        source: "context"
    }), hideMenus(), hidecontext()
}

function never(e, t, n, i) {
    var o = 1 == i ? 1 : 0,
        d = 2 == i ? 1 : 0,
        a = 3 == i ? 1 : 0;
    sendRequest({
        action: "never",
        cmd: e,
        url: atob(t),
        aid: n,
        fromsave: o,
        fromgenerate: d,
        fromformfill: a
    }), sendRequest({
        cmd: "hideoverlay"
    })
}

function notnow(e, t) {
    sendRequest({
        cmd: "notnow",
        notificationdata: b64_to_utf8(e),
        tld: atob(t)
    }), sendRequest({
        cmd: "hideoverlay"
    })
}

function savethesite(e) {
    sendRequest({
        cmd: "savethesite",
        notificationdata: b64_to_utf8(e)
    }), sendRequest({
        cmd: "hideoverlay"
    }), sendAddSiteEvent({
        action: "add"
    })
}

function changepw(e) {
    sendRequest({
        cmd: "changepw",
        notificationdata: b64_to_utf8(e)
    }), sendRequest({
        cmd: "hideoverlay"
    }), sendAddSiteEvent({
        action: "update"
    })
}

function genericaction(e, t) {
    sendRequest({
        cmd: e,
        notificationdata: b64_to_utf8(t)
    }), sendRequest({
        cmd: "hideoverlay"
    })
}

function generate() {
    sendRequest({
        cmd: "generate"
    }), !document.getElementById("lastpass-notification") || document.getElementById("lppopupfillform") || document.getElementById("lppopupfillcurrent") || (document.getElementById("lastpass-notification").style.display = "none"), hidecontext()
}

function chooseprofilecc() {
    sendRequest({
        cmd: "chooseprofilecc"
    }), sendRequest({
        cmd: "hideoverlay"
    }), hidecontext()
}

function slideup() {
    sendRequest({
        cmd: "slideupoverlay"
    })
}

function hideMenus() {
    document.getElementById("lppopupautofill") && (document.getElementById("lppopupautofill").style.display = "none"), document.getElementById("lppopupautologin") && (document.getElementById("lppopupautologin").style.display = "none"), document.getElementById("lppopupnever") && (document.getElementById("lppopupnever").style.display = "none"), document.getElementById("lppopupfillform") && (document.getElementById("lppopupfillform").style.display = "none"), document.getElementById("lppopupfillcurrent") && (document.getElementById("lppopupfillcurrent").style.display = "none"), -1 != document.location.href.indexOf("&bottom=1") && (document.body.style.marginTop = "", document.body.style.backgroundPosition = "")
}

function copyusername(e) {
    bg.sendLpImprove("copyitem", {
        itemtype: "username",
        source: "context"
    }), sendRequest({
        cmd: "copyusername",
        aid: e
    }), hidecontext()
}

function editAid(e) {
    bg.sendLpImprove("edititem", {
        source: "context"
    }), sendRequest({
        cmd: "editAid",
        aid: e
    }), hidecontext()
}

function copypassword(e) {
    bg.sendLpImprove("copypass", {
        action: "sitepassword",
        source: "context"
    }), sendRequest({
        cmd: "copypassword",
        aid: e
    }), hidecontext()
}

function openaddsecurenote() {
    sendRequest({
        cmd: "openaddsecurenote"
    }), hidecontext()
}

function copyurl(e) {
    sendRequest({
        cmd: "copyurl",
        aid: e
    }), hidecontext()
}

function recheckpage(e) {
    sendRequest({
        cmd: "recheckpagecontext",
        aid: e
    }), hidecontext()
}
var g_context = null,
    g_ffid = null;

function showcontext(e, t) {
    g_context = e, document.getElementById("contextmain").style.display = "none", e < 3 ? document.getElementById("contextsub").style.display = "block" : 3 == e ? document.getElementById("contextff").style.display = "block" : 6 == e ? document.getElementById("contextedit").style.display = "block" : 5 == e ? document.getElementById("contextsub").style.display = "block" : 4 == e && (document.getElementById("contextffsub").style.display = "block", g_ffid = t)
}

function docontextaction(e) {
    0 == g_context ? autofill(e) : 1 == g_context ? copyusername(e) : 2 == g_context ? copypassword(e) : 5 == g_context && copyurl(e), hidecontext()
}

function ffsub(e) {
    0 == e ? sendRequest({
        cmd: "fillformffid",
        ffid: g_ffid,
        source: "context"
    }) : 1 == e && sendRequest({
        cmd: "editprofile",
        ffid: g_ffid,
        source: "context"
    }), hidecontext()
}

function fillitem(e) {
    bg.fillitem(e, null, null, null, null, "context", null), hidecontext()
}

function hidecontext() {
    sendRequest({
        cmd: "hidecontext"
    })
}
document.addEventListener("click", function(e) {
    if (!preventhideoverlay) {
        var t = ["autologintab", "autologintabfooter", "autologintabheader", "autologintabsearchlabel", "autofilltab", "autofilltabfooter", "autofilltabheader", "autofilltabsearchlabel", "sorttable_sortrevind", "sorttable_sortfwdind"],
            n = null,
            i = null;
        void 0 !== e.target && (n = e.target.id, void 0 !== e.target.parentElement && null != e.target.parentElement && (i = e.target.parentElement.id));
        var o = !1;
        for (var d in t) {
            if (null != n && n == t[d]) {
                o = !0;
                break
            }
            if (null != i && i == t[d]) {
                o = !0;
                break
            }
        }
        o || (showintro ? sendRequest({
            cmd: "hideoverlay"
        }) : "BUTTON" != e.target.nodeName && (hideMenus(), sendRequest({
            cmd: "slideupoverlay"
        })))
    }
}, !1);
var g_lastsize = -1;

function dofilter(e) {
    var t;
    if ("autofill" == e) t = g_searchfillbox;
    else {
        if ("autologin" != e) return;
        t = g_searchloginbox
    }
    if (null != t) {
        var n = document.getElementById(e + "tab"),
            i = t.value.toLowerCase();
        sorttable.filter(n, i)
    }
}

function initialize_sorttable() {
    sorttable.init();
    var e = document.getElementById("autofilltab");
    null != e && sorttable.initial_sort(e.tHead.rows[0].cells[2]), null != (e = document.getElementById("autologintab")) && sorttable.initial_sort(e.tHead.rows[0].cells[2]), g_searchfillbox = document.getElementById("autofilltabsearchbox"), g_searchloginbox = document.getElementById("autologintabsearchbox")
}

function utf8_to_b64(e) {
    return window.btoa(unescape(encodeURIComponent(e)))
}

function b64_to_utf8(e) {
    return decodeURIComponent(escape(window.atob(e)))
}

function stylize_tags() {
    if (g_ischrome)
        for (var e = new Array("img", "div", "th", "tr", "td"), t = 0; t < e.length; t++)
            for (var n = document.getElementsByTagName(e[t]), i = 0; i < n.length; i++) n[i].getAttribute("data-lpstyle") && (n[i].style.cssText = n[i].getAttribute("data-lpstyle"))
}

function diddle_40(e) {
    var t = (e = e || document).getElementsByTagName("button"),
        n;
    if (t)
        for (n = 0; n < t.length; n++) t[n].className += " lpbutton40 lptext40";
    var i = e.getElementById("lastpass-content");
    i && (i.className += " lptext40");
    var o = null,
        d = e.getElementsByTagName("MAIN");
    return 0 < d.length && (o = d[0]), o && (o.style.backgroundColor = e.body.style.backgroundColor, o.style.borderColor = o.style.backgroundColor, o.style.borderWidth = "8px", o.style.borderStyle = "solid"), e.body && (e.body.style.backgroundColor = "transparent", e.body.style.margin = "0"), !0
}
window.onresize = function(e) {
    document && document.body && (g_lastsize > document.body.clientHeight && hideMenus(), g_lastsize = document.body.clientHeight)
}, document.addEventListener("DOMContentLoaded", function() {
    g_isfirefoxsdk ? load() : window.addEventListener("load", function() {
        load()
    })
});
var sendAddSiteEvent = function(e) {
    (-1 < document.location.href.indexOf("add=1") || -1 < document.location.href.indexOf("change=1")) && bg.sendLpImprove("savesitegreenbar", e)
};
//# sourceMappingURL=sourcemaps/overlay1.js.map