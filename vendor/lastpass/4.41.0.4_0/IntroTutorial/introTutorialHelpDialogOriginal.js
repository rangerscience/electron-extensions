var IntroTutorialUtils = function() {
        function t(t, o) {
            try {
                var e = {},
                    i;
                if (o ? e = o.tutorialStatus || o.tutorialData : (t = document.getElementsByClassName("lpiframeoverlay")[0], e.domain = document.domain), document.URL.toLowerCase().includes(e.domain)) e.domain.includes("google.com") ? (i = document.getElementById("Email")).className.includes("hidden") && (i = document.getElementById("Passwd")) : e.domain.includes("amazon.com") ? (i = document.getElementById("ap_email")) && i.type.includes("hidden") && (i = document.getElementById("ap_password")) : e.domain.includes("facebook.com") ? i = document.getElementById("email") ? document.getElementById("email") : document.getElementById("pass") : e.domain.includes("netflix.com") && (i = document.getElementsByName("email")[0]).type.includes("hidden") && (i = document.getElementsByName("password")[0]), t.style.top = i.getBoundingClientRect().top - 45 + "px", t.style.left = i.getBoundingClientRect().left - 390 + "px"
            } catch (t) {
                console.log("Error in setIFramePosition: " + t.message)
            }
        }

        function o(t, o) {
            var e = o.URL.toLowerCase();
            e.includes(t.tutorialStatus.domain) && (e.includes("amazon.com/gp/yourstore/home") && (document.location = "https://www.amazon.com/ap/cnep?_encoding=UTF8&openid.assoc_handle=usflex"), e.includes("netflix.com/login") || e.includes("facebook.com/login.php") || e.includes("facebook.com/?stype=lo") || e.includes("accounts.google.com/servicelogin") || e.includes("accounts.google.com/addsession") || e.includes("amazon.com/ap/signin") ? (bg.IntroTutorial.setState({
                firstLogin: !1
            }), t.do_tutorial = !0, t.iframe_size = "dialog", lpshownotification("add", t)) : (bg.IntroTutorial.setState({
                firstLogin: !1
            }), t.tutorialStatus.firstLogin && e.includes("facebook") && (t.do_interstitial = !0, t.iframe_size = "full", lpshownotification("add", t), document.getElementsByClassName("_5lxs")[0].click(), setTimeout(function() {
                document.getElementsByClassName("_w0d")[0].submit()
            }, 2e3)), t.tutorialStatus.firstLogin && (e.includes("https://www.netflix.com/logout") || e.includes("https://www.netflix.com/SignOut")) && (document.location = "https://www.netflix.com/Login")))
        }

        function e(t, o) {
            return t.tutorialData && document.URL.includes(t.tutorialData.domain) && t.notificationdata.includes(t.tutorialData.domain) && (o += "&hideoverlay=1", "showaddnotification" === t.cmd && (docURL = document.URL.toLowerCase(), docURL.includes("facebook.com/login") || docURL.includes("netflix.com/login") || docURL.includes("amazon.com/ap/signin") || docURL.includes("accounts.google.com/signin/challenge/sl/password") || docURL.includes("accounts.google.com/serviceloginauth") || docURL.includes("accounts.google.com/addsession#password") ? (o += "&showtryagain=1", t.iframe_size = "dialog") : (t.iframe_size = "full", o += "&showadddialog=1"))), o
        }
        return {
            setIFramePosition: t,
            introTutorialHelpDialogConfig: o,
            showTryAgain: e
        }
    }(),
    IntroTutorialHelpDialog = function() {};
! function() {
    "use strict";
    IntroTutorialHelpDialog.prototype._dialog = null, IntroTutorialHelpDialog.prototype._options = {
        makeShade: !1,
        alignBottom: !1,
        addHide: !1,
        transparentBG: !1,
        textChoice: ""
    }, IntroTutorialHelpDialog.prototype.setBackgroundTransparent = function(t, o) {
        t && o && (document.body.style.background = "transparent")
    }, IntroTutorialHelpDialog.prototype.getTranslateFn = function() {
        return "undefined" != typeof bg && "function" == typeof bg.gs ? bg.gs : "function" == typeof gs ? gs : null
    }, IntroTutorialHelpDialog.prototype.setArrow = function(t, o) {
        var e = IntroTutorialHelpDialog.prototype._dialog;
        if (t && e && o) {
            switch (e.className += " arrow_box", o.orientation) {
                case "top":
                    e.className += " a-top";
                    break;
                case "bottom":
                    e.className += " a-bottom";
                    break;
                case "left":
                    e.className += " a-left";
                    break;
                case "right":
                    e.className += " a-right"
            }
            switch (o.position) {
                case "left":
                    e.className += " a-h-left";
                    break;
                case "center":
                    e.className += " a-h-center";
                    break;
                case "right":
                    e.className += " a-h-right";
                    break;
                case "high":
                    e.className += " a-v-high";
                    break;
                case "middle":
                    e.className += " a-v-middle";
                    break;
                case "low":
                    e.className += " a-v-low"
            }
        }
    }, IntroTutorialHelpDialog.prototype.createDialog = function(t, o) {
        var e = IntroTutorialHelpDialog.prototype.getTranslateFn();
        if (t && e) {
            var i = t.createElement("div");
            i.className = "tutorialDialog";
            var a = t.createElement("div");
            a.className = "dialogTextDiv";
            var n = t.createElement("p");
            n.className = "topText";
            var l = t.createElement("p");
            switch (l.className = "bottomText", o) {
                case "saveSite":
                    n.textContent = e("Easy, right?"), l.textContent = e("Now just save it to your vault.");
                    break;
                case "siteLanding":
                    n.textContent = e("Good choice!"), l.textContent = e("Next, sign in to your account.");
                    break;
                case "tryAgain":
                    n.textContent = e("Login failed"), l.textContent = e("Please try again.");
                    break;
                case "finishSaveSite":
                    n.textContent = e("Customize and Save"), l.textContent = e("You can set these details for each site");
                    break;
                case "downloadImporter":
                    n.textContent = e("The LastPass Importer is downloading"), l.textContent = e("When it's done, just run it!"), setTimeout(function() {
                        i.remove(t)
                    }, 15e3);
                    break;
                case "interstitial":
                    n.textContent = e("Just a second..."), l.textContent = e("Logging you out"), i.style.margin = "15px auto 0px auto"
            }
            return a.appendChild(n), a.appendChild(l), i.appendChild(a), i
        }
        return null
    }, IntroTutorialHelpDialog.prototype.setAlignment = function(t) {
        var o = IntroTutorialHelpDialog.prototype._dialog;
        o && t && (o.className += " downloadDialog")
    }, IntroTutorialHelpDialog.prototype.setFooter = function(t, o) {
        var e = IntroTutorialHelpDialog.prototype.getTranslateFn(),
            i = IntroTutorialHelpDialog.prototype._dialog;
        if (t && i) {
            var a = t.createElement("div");
            a.className = "footerDiv";
            var n = t.createElement("img");
            if (n.className = "dialogLPLogo", n.src = "images/vault_4.0/LastPass_Color_Small.png", a.appendChild(n), o) {
                var l = t.createElement("div");
                l.className = "hideDiv";
                var r = t.createElement("p");
                r.className = "hideP", r.textContent = e("Hide"), l.addEventListener("click", function() {
                    IntroTutorialHelpDialog.prototype.remove(t)
                }), l.appendChild(r), a.appendChild(l)
            }
            i.appendChild(a)
        }
    }, IntroTutorialHelpDialog.prototype.setShade = function(t, o, e) {
        if (t && o) {
            var i = t.createElement("div");
            i.className = "interstitial" === e ? "interstitialShade" : "shade", t.body.appendChild(i)
        }
    }, IntroTutorialHelpDialog.prototype.setPosition = function(t) {
        try {
            var o = IntroTutorialHelpDialog.prototype._dialog;
            if (o && t && t.positionFn && "function" == typeof t.positionFn) {
                var e = t.positionFn();
                e && e.top && e.left && (e.top += t.offset && t.offset.top ? t.offset.top : 0, e.left += t.offset && t.offset.left ? t.offset.left : 0, o.style.position = "absolute", o.style.top = e.top + "px", o.style.left = e.left + "px")
            }
        } catch (t) {
            console.log("Error in IntroTutorialHelpDialog.setPosition: " + t.message)
        }
    }, IntroTutorialHelpDialog.prototype.subscribeToWindowResize = function() {
        window && (window.addEventListener("resize", IntroTutorialHelpDialog.prototype.windowResizeHandler), "undefined" != typeof Topics && Topics.get(Topics.DIALOG_RESIZE).subscribe(function(t) {
            IntroTutorialHelpDialog.prototype.windowResizeHandler()
        }))
    }, IntroTutorialHelpDialog.prototype.unSubscribeToWindowResize = function() {
        window && IntroTutorialHelpDialog.prototype.windowResizeHandler && (window.removeEventListener ? window.removeEventListener("resize", IntroTutorialHelpDialog.prototype.windowResizeHandler) : window.detachEvent && window.detachEvent("resize", IntroTutorialHelpDialog.prototype.windowResizeHandler), IntroTutorialHelpDialog.prototype.windowResizeHandler = null)
    }, IntroTutorialHelpDialog.prototype.windowResizeHandler = function(t) {
        IntroTutorialHelpDialog.prototype.setPosition(IntroTutorialHelpDialog.prototype._options.position)
    }, IntroTutorialHelpDialog.prototype.initialize = function(t, o) {
        try {
            IntroTutorialHelpDialog.prototype._options = o || IntroTutorialHelpDialog.prototype._options, IntroTutorialHelpDialog.prototype.setBackgroundTransparent(t, o.transparentBG), IntroTutorialHelpDialog.prototype._dialog = IntroTutorialHelpDialog.prototype.createDialog(t, o.textChoice), IntroTutorialHelpDialog.prototype.setFooter(t, o.addHide), IntroTutorialHelpDialog.prototype.setArrow(t, o.arrow), IntroTutorialHelpDialog.prototype.setAlignment(o.alignBottom), o.position ? (IntroTutorialHelpDialog.prototype.setPosition(o.position), IntroTutorialHelpDialog.prototype.subscribeToWindowResize()) : IntroTutorialHelpDialog.prototype.unSubscribeToWindowResize();
            var e = t.getElementById(o.appendElementId);
            e ? e.appendChild(IntroTutorialHelpDialog.prototype._dialog) : t.body.appendChild(IntroTutorialHelpDialog.prototype._dialog), IntroTutorialHelpDialog.prototype.setShade(t, o.makeShade, o.textChoice)
        } catch (t) {
            console.log("Error in IntroTutorialHelpDialog.initialize: " + t.message)
        }
    }, IntroTutorialHelpDialog.prototype.remove = function(t) {
        IntroTutorialHelpDialog.prototype.unSubscribeToWindowResize(), t.getElementsByClassName("tutorialDialog")[0].remove(), t.getElementsByClassName("shade")[0] && (t.getElementsByClassName("shade")[0].remove(), window.top.postMessage("minimizeIframe", "*"))
    }, IntroTutorialHelpDialog.prototype.close = function(t) {
        document && IntroTutorialHelpDialog.prototype.remove(document)
    }
}();
//# sourceMappingURL=sourcemaps/IntroTutorial/introTutorialHelpDialogOriginal.js.map