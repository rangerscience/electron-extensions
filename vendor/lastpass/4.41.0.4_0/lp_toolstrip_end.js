function setup_event_handlers() {
    for (var e = 1; e <= 2; e++)
        for (var t = document.getElementsByTagName(1 == e ? "div" : "img"), n = 0; n < t.length; n++) {
            if (t[n].id)
                if (0 == t[n].id.indexOf("opendelete")) t[n].onclick = function() {
                    menuaction(this.id, this.getAttribute("data-lptitle"))
                };
                else if (0 == t[n].id.indexOf("menurowmatch")) 0 == t[n].id.indexOf("menurowmatchedit") || 0 == t[n].id.indexOf("menurowmatchfill") || 0 == t[n].id.indexOf("menurowmatchcopyusername") || 0 == t[n].id.indexOf("menurowmatchcopyurl") || 0 == t[n].id.indexOf("menurowmatchcopypassword") || 0 == t[n].id.indexOf("menurowmatchcopynote") || 0 == t[n].id.indexOf("menurowmatchdelete") || 0 == t[n].id.indexOf("menurowmatchgotourl") ? t[n].onclick = function() {
                menuaction("match" + this.id.substring(12), this.getAttribute("data-lptitle"))
            } : t[n].onclick = function() {
                menuaction("matchopen" + this.id.substring(12), this.getAttribute("data-lptitle"))
            };
            else if (0 == t[n].id.indexOf("match")) t[n].onclick = function() {
                menuaction(this.id)
            };
            else if (0 == t[n].id.indexOf("menurow")) {
                var o = t[n].getAttribute("data-lpmenurowtype");
                o && (1 == o ? t[n].onclick = function() {
                    menuopen(this.id.substring(7), null, this.getAttribute("data-lptitle"))
                } : 2 == o ? t[n].onclick = function() {
                    menuaction(this.getAttribute("data-lpcmd"))
                } : 3 == o ? (t[n].onclick = function() {
                    menuaction(this.id.substring(7), this.getAttribute("data-lptitle"))
                }, t[n].oncontextmenu = function() {
                    return rightclickmenuaction(this.id.substring(7))
                }) : 4 == o && (t[n].onclick = function() {
                    deletenever(this.id.substring(7))
                }))
            }
            t[n].getAttribute("menu-lpwidth") && (t[n].style.width = t[n].getAttribute("menu-lpwidth") + "px"), t[n].getAttribute("menu-lpbackground") && (t[n].style.background = "url(" + t[n].getAttribute("menu-lpbackground") + ") no-repeat")
        }
}

function pwUpkeep(e) {
    void 0 !== e && (pronounceable = document.getElementById("pronounceable"), reqevery = document.getElementById("reqevery"), void 0 === e.id && void 0 !== e.target ? idname = e.target.id : idname = e.id, "reqevery" == idname ? (document.getElementById("mindigits").readOnly = !1, document.getElementById("mindigits").style.backgroundColor = "#ffffff", document.getElementById("upper").checked = !0, document.getElementById("lower").checked = !0, document.getElementById("digits").checked = !0, document.getElementById("special").checked = !0, document.getElementById("digits").disabled = !1, document.getElementById("special").disabled = !1, document.getElementById("ambig").disabled = !1) : "pronounceable" == idname && (document.getElementById("mindigits").style.backgroundColor = "#d1d1d1", document.getElementById("mindigits").readOnly = !0, document.getElementById("digits").checked = !1, document.getElementById("special").checked = !1, document.getElementById("ambig").checked = !1, document.getElementById("digits").disabled = !0, document.getElementById("special").disabled = !0, document.getElementById("ambig").disabled = !0)), dogenerate()
}

function setup_generate_handlers() {
    document.getElementById("lpform1").onsubmit = function() {
        return !1
    }, document.getElementById("advbutton").addEventListener("click", function() {
        showHideAdvIFrame(document)
    }), document.getElementById("advlabel").addEventListener("click", function() {
        showHideAdvIFrame(document)
    }), document.getElementById("advanchor").onclick = function() {
        return !1
    }, document.getElementById("generatebutton").addEventListener("click", function() {
        onhidegenerate(), dogenerate()
    }), document.getElementById("copypwbutton").addEventListener("click", function() {
        docopypw()
    }), document.getElementById("generatesave").addEventListener("click", function() {
        onhidegenerate(), dosave()
    }), document.getElementById("generateclose").addEventListener("click", function() {
        onhidegenerate(), closemole()
    }), document.getElementById("reqevery").addEventListener("click", function(e) {
        pwUpkeep(e)
    }), document.getElementById("pronounceable").addEventListener("click", function(e) {
        pwUpkeep(e)
    }), document.getElementById("length").addEventListener("change", function(e) {
        pwUpkeep(e)
    }), document.getElementById("special").addEventListener("click", function(e) {
        pwUpkeep(e)
    }), document.getElementById("digits").addEventListener("click", function(e) {
        pwUpkeep(e)
    }), document.getElementById("ambig").addEventListener("click", function(e) {
        pwUpkeep(e)
    }), document.getElementById("upper").addEventListener("click", function(e) {
        pwUpkeep(e)
    }), document.getElementById("lower").addEventListener("click", function(e) {
        pwUpkeep(e)
    }), document.getElementById("mindigits").addEventListener("keyup", function(e) {
        pwUpkeep(e)
    }), pwUpkeep()
}

function fix_height(e, t) {
    (e = document.getElementById(e)).style.height = parseInt(LP_getComputedStyle(window, e).height.replace("px", "")) + 20 * (t ? 1 : -1) + "px"
}

function getdefaulttrustname() {
    var e = navigator.userAgent.toLowerCase(),
        t = navigator.platform.toLowerCase(),
        n = "",
        o = "";
    return -1 != e.indexOf("opera") ? n = "Opera" : -1 != e.indexOf("edg") ? n = "Edge" : -1 != e.indexOf("chrome") ? n = "Chrome" : -1 != e.indexOf("firefox") ? n = "Firefox" : -1 != e.indexOf("safari") ? n = "Safari" : -1 != e.indexOf("msie") && (n = "Internet Explorer"), -1 != t.indexOf("mac") ? o = "Mac OSX" : -1 != t.indexOf("win") ? o = "Windows" : -1 != t.indexOf("linux") && (o = "Linux"), "" != n && "" != o ? n + " " + o : "" != n ? n : "" != o ? o : ""
}
document.getElementById("lp_docwrite_lp_toolstrip1") && set_innertext(document.getElementById("lp_docwrite_lp_toolstrip1"), gs("Login to LastPass")), document.getElementById("lp_docwrite_lp_toolstrip2") && set_innertext(document.getElementById("lp_docwrite_lp_toolstrip2"), gs("LastPass")), document.getElementById("lp_docwrite_lp_toolstrip7") && create_label(document.getElementById("lp_docwrite_lp_toolstrip7"), "advanced", gs("Show Advanced Options")), document.getElementById("lp_docwrite_lp_toolstrip8") && set_innertext(document.getElementById("lp_docwrite_lp_toolstrip8"), gs("Password length")), document.getElementById("lp_docwrite_lp_toolstrip9") && create_label(document.getElementById("lp_docwrite_lp_toolstrip9"), "pronounceable", gs("Pronounceable")), document.getElementById("lp_docwrite_lp_toolstrip10") && create_label(document.getElementById("lp_docwrite_lp_toolstrip10"), "upper", gs("A-Zupper")), document.getElementById("lp_docwrite_lp_toolstrip11") && create_label(document.getElementById("lp_docwrite_lp_toolstrip11"), "lower", gs("a-zlower")), document.getElementById("lp_docwrite_lp_toolstrip12") && create_label(document.getElementById("lp_docwrite_lp_toolstrip12"), "digits", gs("0-9")), document.getElementById("lp_docwrite_lp_toolstrip13") && create_label(document.getElementById("lp_docwrite_lp_toolstrip13"), "special", gs("Special")), document.getElementById("lp_docwrite_lp_toolstrip14") && create_label(document.getElementById("lp_docwrite_lp_toolstrip14"), "mindigits", gs("Minimum Numeric Characters")), document.getElementById("lp_docwrite_lp_toolstrip15") && create_label(document.getElementById("lp_docwrite_lp_toolstrip15"), "ambig", gs("Avoid Ambiguous Characters")), document.getElementById("lp_docwrite_lp_toolstrip16") && create_label(document.getElementById("lp_docwrite_lp_toolstrip16"), "reqevery", gs("Require Every Character Type")), document.getElementById("lp_docwrite_lp_toolstrip19") && set_innertext(document.getElementById("lp_docwrite_lp_toolstrip19"), gs("Profile")), document.getElementById("lp_docwrite_lp_toolstrip20") && set_innertext(document.getElementById("lp_docwrite_lp_toolstrip20"), gs("Credit cardformfill")), document.getElementById("lp_docwrite_lp_toolstrip21") && set_innertext(document.getElementById("lp_docwrite_lp_toolstrip21"), gs("Always Choose Profile and Credit Card")), document.getElementById("lp_docwrite_lp_toolstrip23") && set_innertext(document.getElementById("lp_docwrite_lp_toolstrip23"), gs("LastPass detected a password change for")), document.getElementById("changepwtitle") && set_innertext(document.getElementById("changepwtitle"), gs("Change Password")), document.getElementById("lp_docwrite_lp_toolstrip24") && set_innertext(document.getElementById("lp_docwrite_lp_toolstrip24"), gs("Please select which sites you wish to apply this change.")), document.getElementById("yubititle") && set_innertext(document.getElementById("yubititle"), gs("YubiKey Multifactor Authentication")), document.getElementById("lp_docwrite_lp_toolstrip27") && set_innertext(document.getElementById("lp_docwrite_lp_toolstrip27"), gs("1. Insert your YubiKey in the USB-port with the USB-contact facing upward")), document.getElementById("lp_docwrite_lp_toolstrip28") && set_innertext(document.getElementById("lp_docwrite_lp_toolstrip28"), gs("2. Wait until your YubiKey touch-button shines with a steady light")), document.getElementById("lp_docwrite_lp_toolstrip29") && set_innertext(document.getElementById("lp_docwrite_lp_toolstrip29"), gs("3. Hold your fingertip on the touch-button for 1 second")), document.getElementById("lp_docwrite_lp_toolstrip30") && set_innertext(document.getElementById("lp_docwrite_lp_toolstrip30"), gs("Trust this computer for 30 days")), document.getElementById("lp_docwrite_lp_toolstrip31") && set_innertext(document.getElementById("lp_docwrite_lp_toolstrip31"), gs("Please provide this computer a name")), document.getElementById("lp_docwrite_lp_toolstrip32") && set_innertext(document.getElementById("lp_docwrite_lp_toolstrip32"), gs("I've lost my YubiKey device")), document.getElementById("googtitle") && set_innertext(document.getElementById("googtitle"), gs("Google Authenticator Multifactor Authentication")), document.getElementById("microsofttitle") && set_innertext(document.getElementById("microsofttitle"), gs("Microsoft Authenticator Multifactor Authentication")), document.getElementById("googdesc") && set_innertext(document.getElementById("googdesc"), gs("Enter a one-time passcode from your authenticator app.")), document.getElementById("microsoftdesc") && set_innertext(document.getElementById("microsoftdesc"), gs("Enter a one-time passcode from your authenticator app.")), document.getElementById("lp_docwrite_lp_toolstrip37") && set_innertext(document.getElementById("lp_docwrite_lp_toolstrip37"), gs("Trust this computer for 30 days.")), document.getElementById("lp_docwrite_lp_toolstrip38") && set_innertext(document.getElementById("lp_docwrite_lp_toolstrip38"), gs("Please provide this computer a name")), document.getElementById("lp_docwrite_lp_toolstrip39") && set_innertext(document.getElementById("lp_docwrite_lp_toolstrip39"), gs("I've lost my Google Authenticator device")), document.getElementById("lp_docwrite_lp_toolstrip40") && set_innertext(document.getElementById("lp_docwrite_lp_toolstrip40"), gs("I've lost my Microsoft Authenticator device")), document.getElementById("sesametitle") && set_innertext(document.getElementById("sesametitle"), gs("Sesame Multifactor Authentication")), document.getElementById("lp_docwrite_lp_toolstrip41") && set_innertext(document.getElementById("lp_docwrite_lp_toolstrip41"), gs("1. Run the LastPass Sesame application to generate a one time password")), document.getElementById("lp_docwrite_lp_toolstrip42") && set_innertext(document.getElementById("lp_docwrite_lp_toolstrip42"), gs("2. Paste the one time password in the input box below and click 'Authenticate'")), document.getElementById("lp_docwrite_lp_toolstrip43") && set_innertext(document.getElementById("lp_docwrite_lp_toolstrip43"), gs("Trust this computer for 30 days")), document.getElementById("lp_docwrite_lp_toolstrip44") && set_innertext(document.getElementById("lp_docwrite_lp_toolstrip44"), gs("Please provide this computer a name")), document.getElementById("lp_docwrite_lp_toolstrip45") && set_innertext(document.getElementById("lp_docwrite_lp_toolstrip45"), gs("I've lost my Sesame device")), document.getElementById("gridtitle") && set_innertext(document.getElementById("gridtitle"), gs("LastPass Grid Multifactor Authentication")), document.getElementById("lp_docwrite_lp_toolstrip48") && set_innertext(document.getElementById("lp_docwrite_lp_toolstrip48"), gs("For each coordinate listed below, find the value on your grid and enter the value.")), document.getElementById("lp_docwrite_lp_toolstrip49") && set_innertext(document.getElementById("lp_docwrite_lp_toolstrip49"), gs("Trust this computer for 30 days")), document.getElementById("lp_docwrite_lp_toolstrip50") && set_innertext(document.getElementById("lp_docwrite_lp_toolstrip50"), gs("Please provide this computer a name")), document.getElementById("lp_docwrite_lp_toolstrip51") && set_innertext(document.getElementById("lp_docwrite_lp_toolstrip51"), gs("I've lost my grid")), document.getElementById("lp_docwrite_lp_toolstrip52") && set_innertext(document.getElementById("lp_docwrite_lp_toolstrip52"), gs("Security Question Multifactor Authentication")), document.getElementById("lp_docwrite_lp_toolstrip53") && set_innertext(document.getElementById("lp_docwrite_lp_toolstrip53"), gs("Please answer the following question:")), document.getElementById("lp_docwrite_lp_toolstrip56") && create_label(document.getElementById("lp_docwrite_lp_toolstrip56"), "lptrustsecurityquestion", gs("Trust this computer for 30 days")), document.getElementById("lp_docwrite_lp_toolstrip57") && set_innertext(document.getElementById("lp_docwrite_lp_toolstrip57"), gs("Please provide this computer a name")), document.getElementById("lp_docwrite_lp_toolstrip58") && set_innertext(document.getElementById("lp_docwrite_lp_toolstrip58"), gs("I've forgot the answer")), document.getElementById("oobtitle") && set_innertext(document.getElementById("oobtitle"), gs("Multifactor Authentication")), document.getElementById("lp_docwrite_lp_toolstrip60") && set_innertext(document.getElementById("lp_docwrite_lp_toolstrip60"), gs("Please complete multifactor authentication on your phone or mobile device.")), document.getElementById("lp_docwrite_lp_toolstrip61") && set_innertext(document.getElementById("lp_docwrite_lp_toolstrip61"), gs("I've lost my device")), document.getElementById("lp_docwrite_lp_toolstrip62") && set_innertext(document.getElementById("lp_docwrite_lp_toolstrip62"), gs("Trust this computer for 30 days")), document.getElementById("lp_docwrite_lp_toolstrip63") && set_innertext(document.getElementById("lp_docwrite_lp_toolstrip63"), gs("Please provide this computer a name")), document.getElementById("googleauthtrustlabel") && (document.getElementById("googleauthtrustlabel").value = getdefaulttrustname()), document.getElementById("yubitrustlabel") && (document.getElementById("yubitrustlabel").value = getdefaulttrustname()), document.getElementById("outofbandtrustlabel") && (document.getElementById("outofbandtrustlabel").value = getdefaulttrustname()), document.getElementById("sesametrustlabel") && (document.getElementById("sesametrustlabel").value = getdefaulttrustname()), document.getElementById("gridtrustlabel") && (document.getElementById("gridtrustlabel").value = getdefaulttrustname()), document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("load", function() {
        onLoad()
    }), window.addEventListener("unload", function() {
        onUnload()
    }), document.getElementById("lpbutton").addEventListener("click", function() {
        openmenu()
    }), document.getElementById("closemole1").onclick = function() {
        return closemole(), !1
    }, document.getElementById("notifysavesitebtn").addEventListener("click", function() {
        savethesite()
    }), document.getElementById("notifyneverbtn").addEventListener("click", function(e) {
        clicknever(e)
    }), document.getElementById("notifyclosebtn").addEventListener("click", function() {
        closemole()
    }), document.getElementById("notifychangeconfirmbtn").addEventListener("click", function() {
        changeconfirm()
    }), document.getElementById("notifychangesavenewsitebtn").addEventListener("click", function() {
        savethesite()
    }), document.getElementById("notifyfeedbackbtn").addEventListener("click", function() {
        getBG().openURL(getBG().base_url + "feedback.php"), closemole()
    }), document.getElementById("notifytryagainbtn").addEventListener("click", function() {
        window.location = "extensionLogin.html"
    }), document.getElementById("notifycreateaccountbtn").addEventListener("click", function() {
        getBG().openURL(getchromeurl("welcome.html")), closemole()
    }), document.getElementById("notifydisablebtn").addEventListener("click", function() {
        getBG().openURL(getBG().base_url + g_notifydata.multifactor_disable_url), closemole()
    }), document.getElementById("notifydisablesinglebtn").addEventListener("click", function() {
        getBG().disable_single_factor(), closemole()
    }), document.getElementById("notifystarttrialbtn").addEventListener("click", function() {
        getBG().start_trial(), closemole()
    }), document.getElementById("notifyyesbtn").addEventListener("click", function() {
        getBG().openURL(g_notifydata.upgradeurl), closemole()
    }), document.getElementById("notifynobtn").addEventListener("click", function() {
        closemole()
    }), document.getElementById("lpform2").onsubmit = function() {
        return !1
    }, document.getElementById("chooseprofileccok").addEventListener("click", function() {
        dochooseprofilecc()
    }), document.getElementById("chooseprofilecccancel").addEventListener("click", function() {
        closemole()
    }), document.getElementById("lpform3").onsubmit = function() {
        return !1
    }, document.getElementById("changepwchange").addEventListener("click", function() {
        dochangepw()
    }), document.getElementById("changepwclose").addEventListener("click", function() {
        closemole()
    }), document.getElementById("lpform4").onsubmit = function() {
        return otpcheck(), !1
    }, document.getElementById("lptrustyubi").addEventListener("click", function() {
        document.getElementById("labelyubi").style.display = this.checked ? "block" : "none"
    }), document.getElementById("lostkey").onclick = function() {
        return lostkey(), !1
    }, document.getElementById("lpform5").onsubmit = function() {
        return googleauthotpcheck(), !1
    }, document.getElementById("lpform9").onsubmit = function() {
        return outofbandotpcheck(), !1
    }, document.getElementById("lpform8").onsubmit = function() {
        return securityquestionotpcheck(), !1
    }, document.getElementById("lptrustgoogleauth").addEventListener("click", function() {
        document.getElementById("labelgoogleauth").style.display = this.checked ? "block" : "none"
    }), document.getElementById("lptrustoutofband").addEventListener("click", function() {
        document.getElementById("labeloutofband").style.display = this.checked ? "block" : "none"
    }), document.getElementById("lptrustsecurityquestion").addEventListener("click", function() {
        document.getElementById("labelsecurityquestion").style.display = this.checked ? "block" : "none"
    }), document.getElementById("googleauthlostkey").onclick = function() {
        return googleauthlostkey(), !1
    }, document.getElementById("securityquestionlostkey").onclick = function() {
        return securityquestionlostkey(), !1
    }, document.getElementById("lpform6").onsubmit = function() {
        return sesameotpcheck(), !1
    }, document.getElementById("lptrustsesame").addEventListener("click", function() {
        document.getElementById("labelsesame").style.display = this.checked ? "block" : "none"
    }), document.getElementById("sesamelostkey").onclick = function() {
        return sesamelostkey(), !1
    }, document.getElementById("lpform7").onsubmit = function() {
        return gridcheck(), !1
    }, document.getElementById("lpgridinput1").addEventListener("keyup", function() {
        0 < this.value.length && document.getElementById("lpgridinput2").focus()
    }), document.getElementById("lpgridinput2").addEventListener("keyup", function() {
        0 < this.value.length && document.getElementById("lpgridinput3").focus()
    }), document.getElementById("lpgridinput3").addEventListener("keyup", function() {
        0 < this.value.length && document.getElementById("lpgridinput4").focus()
    }), document.getElementById("lpgridinput4").addEventListener("keyup", function() {
        0 < this.value.length && document.getElementById("gridauth").focus()
    }), document.getElementById("lptrustgrid").addEventListener("click", function() {
        document.getElementById("labelgrid").style.display = this.checked ? "block" : "none"
    }), document.getElementById("lostgrid").onclick = function() {
        return lostgrid(), !1
    }
});
//# sourceMappingURL=sourcemaps/lp_toolstrip_end.js.map