var yubikeysubmit = !1;

function oninityubikey() {}

function onshowyubikey() {
    document.getElementById("yubikeyotp").value = "", setTimeout(function() {
        window.focus()
    }, 0), setTimeout(function() {
        document.getElementById("yubikeyotp").focus()
    }, 0), setTimeout(function() {
        document.getElementById("yubikeyotp").focus()
    }, 100), yubikeysubmit = !1, sendBG({
        cmd: "turnofficon"
    });
    var e = getQueryVariable("trustlabel");
    "" != e && (document.getElementById("lptrustyubi").checked = !0, document.getElementById("labelyubi").style.display = "block", document.getElementById("yubitrustlabel").value = e), 1 == getQueryVariable("trustexpired") && (set_innertext(document.getElementById("yubitrustexpired"), gs("Your trust token has expired.")), document.getElementById("yubitrustexpired").style.display = "block")
}

function onhideyubikey() {
    yubikeysubmit || sendBG({
        cmd: "yubikeyauth",
        otp: ""
    }), closemole()
}

function otpcheck() {
    var e = document.getElementById("yubikeyotp").value;
    if ("" != e) {
        var t, o = "";
        if (document.getElementById("lptrustyubi").checked) {
            var n = document.getElementById("yubitrustlabel").value;
            if ("" == n) return void(document.getElementById("labelyubi").style.color = "red");
            o = n
        }
        yubikeysubmit = !0, document.getElementById("yubikeyotp").blur(), sendBG({
            cmd: "yubikeyauth",
            otp: e,
            label: o
        }), onhideyubikey()
    } else alert(gs("Please enter your multifactor authentication code."))
}

function lostkey() {
    sendBG({
        cmd: "lostkey"
    }), closemole()
}
var googleauthsubmit = !1;

function oninitgoogleauth() {}

function onshowgoogleauth() {
    document.getElementById("googleauthotp").value = "", setTimeout(function() {
        window.focus()
    }, 0), setTimeout(function() {
        document.getElementById("googleauthotp").focus()
    }, 0), setTimeout(function() {
        document.getElementById("googleauthotp").focus()
    }, 100), googleauthsubmit = !1, sendBG({
        cmd: "turnofficon"
    });
    var e = getQueryVariable("trustlabel");
    "" != e && (document.getElementById("lptrustgoogleauth").checked = !0, document.getElementById("labelgoogleauth").style.display = "block", document.getElementById("googleauthtrustlabel").value = e), 1 == getQueryVariable("trustexpired") && (set_innertext(document.getElementById("googleauthtrustexpired"), gs("Your trust token has expired.")), document.getElementById("googleauthtrustexpired").style.display = "block")
}

function onhidegoogleauth() {
    googleauthsubmit || sendBG({
        cmd: "googleauthauth",
        otp: ""
    }), closemole()
}

function googleauthotpcheck() {
    var e = document.getElementById("googleauthotp").value;
    if ("" != e) {
        var t, o = "";
        if (document.getElementById("lptrustgoogleauth").checked) {
            var n = document.getElementById("googleauthtrustlabel").value;
            if ("" == n) return void(document.getElementById("labelgoogleauth").style.color = "red");
            o = n
        }
        googleauthsubmit = !0, sendBG({
            cmd: "googleauthauth",
            otp: e,
            label: o
        }), onhidegoogleauth()
    } else alert(gs("Please enter your multifactor authentication code."))
}

function googleauthlostkey() {
    sendBG({
        cmd: "googleauthlostkey"
    }), closemole()
}
var outofbandsubmit = !1;

function oninitoutofband() {}
var g_trustlabel = "",
    g_capabilities = new Array;

function onshowoutofband() {
    setTimeout(function() {
        window.focus()
    }, 0), outofbandsubmit = !1, sendBG({
        cmd: "turnofficon"
    });
    var e = document.createElement("IMG");
    e.setAttribute("src", AES.hex2bin(getQueryVariable("outofbandimage"))), document.getElementById("oobright").appendChild(e);
    var t = getQueryVariable("capabilities");
    if (g_capabilities = "" != t ? t.split(",") : new Array, "" == getQueryVariable("textoverride") && lp_in_array("outofband", g_capabilities)) {
        if (!lp_in_array("outofbandauto", g_capabilities)) {
            LP_decimate_children(document.getElementById("lp_docwrite_lp_toolstrip60"));
            var o = document.createElement("a");
            o.setAttribute("href", "#"), o.setAttribute("class", "link"), o.id = "start_outofband_link", set_innertext(o, gs("Click here to initiate multifactor authentication on your phone or mobile device.")), document.getElementById("lp_docwrite_lp_toolstrip60").appendChild(o), document.getElementById("start_outofband_link").onclick = start_outofband
        }
    } else document.getElementById("outofband_text").style.display = "none", document.getElementById("lp_docwrite_lp_toolstrip60").style.display = "none";
    if (lp_in_array("passcode", g_capabilities)) {
        if (set_innertext(document.getElementById("lp_docwrite_lp_toolstrip64"), lp_in_array("outofband", g_capabilities) ? gs("No notification? Enter a one-time passcode from your authenticator app.") : gs("Enter a one-time passcode from your authenticator app.")), lp_in_array("sms", g_capabilities)) {
            var n = getQueryVariable("sms_nextcode");
            "" != n ? set_innertext(document.getElementById("lp_docwrite_lp_toolstrip65"), gs("Next SMS passcode starts with") + " " + of (n) + " (" + gs("send more") + ")") : set_innertext(document.getElementById("lp_docwrite_lp_toolstrip65"), gs("Send SMS passcodes")), document.getElementById("lp_docwrite_lp_toolstrip65").onclick = function() {
                getBG().send_sms_passcodes("smshash=" + encodeURIComponent(getQueryVariable("smshash")) + "&smstime=" + encodeURIComponent(getQueryVariable("smstime")) + "&smsuid=" + encodeURIComponent(getQueryVariable("smsuid")), function(e) {
                    alert(e)
                })
            }, document.getElementById("sms_text").style.display = "block"
        }
        document.getElementById("passcode_text").style.display = "block", document.getElementById("outofbandpasscodediv").style.display = "block", setTimeout(function() {
            document.getElementById("outofbandotp").focus()
        }, 0), setTimeout(function() {
            document.getElementById("outofbandotp").focus()
        }, 100)
    }
    "" != getQueryVariable("textoverride") && set_innertext(document.getElementById("lp_docwrite_lp_toolstrip64"), getQueryVariable("textoverride")), "1" == getQueryVariable("allowtrust") && (document.getElementById("outofbandtrustdiv").style.display = "block"), lp_in_array("outofbandauto", g_capabilities) && start_outofband(), setInterval(function() {
        var e = document.getElementById("lptrustoutofband").checked ? document.getElementById("outofbandtrustlabel").value : "";
        e != g_trustlabel && sendBG({
            cmd: "settrustlabel",
            trustlabel: g_trustlabel = e
        })
    }, 100);
    var u = getQueryVariable("trustlabel");
    "" != u && (document.getElementById("lptrustoutofband").checked = !0, document.getElementById("labeloutofband").style.display = "block", document.getElementById("outofbandtrustlabel").value = u), 1 == getQueryVariable("trustexpired") && (set_innertext(document.getElementById("outofbandtrustexpired"), gs("Your trust token has expired.")), document.getElementById("outofbandtrustexpired").style.display = "block")
}
var g_outofband_started = !1;

function start_outofband() {
    g_outofband_started || (g_outofband_started = !0, sendBG({
        cmd: "outofbandauth",
        otp: "dummy",
        label: ""
    }))
}

function onhideoutofband() {
    outofbandsubmit || sendBG({
        cmd: "outofbandauth",
        otp: ""
    }), closemole()
}

function outofbandotpcheck() {
    var e = document.getElementById("outofbandotp").value;
    if ("" != e) {
        if (lp_in_array("passcode", g_capabilities)) {
            var t, o = "";
            if (document.getElementById("lptrustoutofband").checked) {
                var n = document.getElementById("outofbandtrustlabel").value;
                if ("" == n) return void(document.getElementById("labeloutofband").style.color = "red");
                o = n
            }
            outofbandsubmit = !0, sendBG({
                cmd: "outofbandauth",
                otp: e,
                label: o
            }), onhideoutofband()
        }
    } else alert(gs("Please enter your multifactor authentication code."))
}
var securityquestionsubmit = !1;

function oninitsecurityquestion() {}

function onshowsecurityquestion() {
    document.getElementById("securityquestionotp").value = "", setTimeout(function() {
        window.focus()
    }, 0), setTimeout(function() {
        document.getElementById("securityquestionotp").focus()
    }, 0), setTimeout(function() {
        document.getElementById("securityquestionotp").focus()
    }, 100), securityquestionsubmit = !1, sendBG({
        cmd: "turnofficon"
    }), set_innertext(document.getElementById("lp_docwrite_lp_toolstrip55"), getQueryVariable("question")), getQueryVariable("autotrust") && (document.getElementById("lptrustsecurityquestion").style.display = "none", document.getElementById("lp_docwrite_lp_toolstrip56").style.display = "none", document.getElementById("lptrustsecurityquestion").checked = !0, document.getElementById("securityquestiontrustlabel").value = (g_ischrome ? gs("Chrome") : g_issafari ? gs("Safari") : g_isfirefoxsdk ? gs("Firefox") : gs("Unknown")) + " - " + getQueryVariable("uuid")), "1" == getQueryVariable("hidedisable") && (document.getElementById("securityquestionlostkey").style.display = "none");
    var e = getQueryVariable("trustlabel");
    "" != e && (document.getElementById("lptrustsecurityquestion").checked = !0, document.getElementById("labelsecurityquestion").style.display = "block", document.getElementById("securityquestiontrustlabel").value = e), 1 == getQueryVariable("trustexpired") && (set_innertext(document.getElementById("securityquestiontrustexpired"), gs("Your trust token has expired.")), document.getElementById("securityquestiontrustexpired").style.display = "block")
}

function onhidesecurityquestion() {
    securityquestionsubmit || sendBG({
        cmd: "securityquestionauth",
        otp: ""
    }), closemole()
}

function securityquestionotpcheck() {
    var e, t = "";
    if (document.getElementById("lptrustsecurityquestion").checked) {
        var o = document.getElementById("securityquestiontrustlabel").value;
        if ("" == o) return void(document.getElementById("labelsecurityquestion").style.color = "red");
        t = o
    }
    var n = document.getElementById("securityquestionotp").value;
    "" != n && (securityquestionsubmit = !0, sendBG({
        cmd: "securityquestionauth",
        otp: n,
        label: t
    })), onhidesecurityquestion()
}

function securityquestionlostkey() {
    sendBG({
        cmd: "securityquestionlostkey"
    }), closemole()
}
var sesamesubmit = !1;

function oninitsesame() {}

function onshowsesame() {
    document.getElementById("sesameotplocal").value = "", setTimeout(function() {
        window.focus()
    }, 0), setTimeout(function() {
        document.getElementById("sesameotplocal").focus()
    }, 0), setTimeout(function() {
        document.getElementById("sesameotplocal").focus()
    }, 100), sesamesubmit = !1, sendBG({
        cmd: "turnofficon"
    });
    var e = getQueryVariable("trustlabel");
    "" != e && (document.getElementById("lptrustsesame").checked = !0, document.getElementById("labelsesame").style.display = "block", document.getElementById("sesametrustlabel").value = e), 1 == getQueryVariable("trustexpired") && (set_innertext(document.getElementById("sesametrustexpired"), gs("Your trust token has expired.")), document.getElementById("sesametrustexpired").style.display = "block")
}

function onhidesesame() {
    sesamesubmit || sendBG({
        cmd: "sesameauth",
        otp: ""
    }), closemole()
}

function sesameotpcheck() {
    var e = document.getElementById("sesameotplocal").value;
    if ("" != e) {
        var t, o = "";
        if (document.getElementById("lptrustsesame").checked) {
            var n = document.getElementById("sesametrustlabel").value;
            if ("" == n) return void(document.getElementById("labelsesame").style.color = "red");
            o = n
        }
        sesamesubmit = !0, sendBG({
            cmd: "sesameauth",
            otp: e,
            label: o
        }), onhidesesame()
    } else alert(gs("Please enter your multifactor authentication code."))
}

function sesamelostkey() {
    sendBG({
        cmd: "sesamelostkey"
    }), closemole()
}
var gridsubmit = !1;

function oninitgrid() {}

function onshowgrid() {
    document.getElementById("lpgridinput1").value = "", document.getElementById("lpgridinput2").value = "", document.getElementById("lpgridinput3").value = "", document.getElementById("lpgridinput4").value = "", sendBG({
        cmd: "turnofficon"
    });
    var e = document.location.href,
        t = e.substr(e.indexOf("challenge=") + 10),
        o = t.indexOf("&"); - 1 != o && (t = t.substring(0, o));
    for (var n = (t = (t = decodeURIComponent(t)).replace(/^\s+|\s+$/g, "")).split(" "), u = 0; u < n.length; u++) set_innertext(document.getElementById("grid" + (u + 1) + "label"), n[u]);
    console_log(t), setTimeout(function() {
        window.focus()
    }, 0), setTimeout(function() {
        document.getElementById("lpgridinput1").focus()
    }, 0), setTimeout(function() {
        document.getElementById("lpgridinput1").focus()
    }, 100), gridsubmit = !1;
    var l = getQueryVariable("trustlabel");
    "" != l && (document.getElementById("lptrustgrid").checked = !0, document.getElementById("labelgrid").style.display = "block", document.getElementById("gridtrustlabel").value = l), 1 == getQueryVariable("trustexpired") && (set_innertext(document.getElementById("gridtrustexpired"), gs("Your trust token has expired.")), document.getElementById("gridtrustexpired").style.display = "block")
}

function onhidegrid() {
    gridsubmit || sendBG({
        cmd: "gridauth",
        gridvalues: ""
    }), closemole()
}

function gridcheck() {
    var e = "";
    if ("" == document.getElementById("lpgridinput1").value || "" == document.getElementById("lpgridinput2").value || "" == document.getElementById("lpgridinput3").value || "" == document.getElementById("lpgridinput4").value) return alert(gs("Please enter your multifactor authentication code.")), "" == document.getElementById("lpgridinput4").value && document.getElementById("lpgridinput4").focus(), "" == document.getElementById("lpgridinput3").value && document.getElementById("lpgridinput3").focus(), "" == document.getElementById("lpgridinput2").value && document.getElementById("lpgridinput2").focus(), void("" == document.getElementById("lpgridinput1").value && document.getElementById("lpgridinput1").focus());
    e = document.getElementById("lpgridinput1").value + "," + document.getElementById("lpgridinput2").value + "," + document.getElementById("lpgridinput3").value + "," + document.getElementById("lpgridinput4").value;
    var t, o = "";
    if (document.getElementById("lptrustgrid").checked) {
        var n = document.getElementById("gridtrustlabel").value;
        if ("" == n) return void(document.getElementById("labelgrid").style.color = "red");
        o = n
    }
    "" != e && (gridsubmit = !0, sendBG({
        cmd: "gridauth",
        gridvalues: e,
        label: o
    })), onhidegrid()
}

function lostgrid() {
    sendBG({
        cmd: "gridlostkey"
    }), closemole()
}
//# sourceMappingURL=sourcemaps/otp.js.map