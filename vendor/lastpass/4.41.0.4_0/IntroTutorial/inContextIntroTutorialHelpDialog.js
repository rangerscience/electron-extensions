var InContextIntroTutorialHelpDialog = function(t) {
    Dialog.call(this, t, {
        submitDialog: !1,
        confirmOnClose: !1,
        hideButtons: !0,
        hideHeader: !0,
        additionalClasses: "lmiDialog"
    })
};
InContextIntroTutorialHelpDialog.prototype = Object.create(Dialog.prototype), InContextIntroTutorialHelpDialog.prototype.constructor = InContextIntroTutorialHelpDialog,
    function() {
        "use strict";

        function a(t) {
            var e = bg.get("LPContentScriptFeatures");
            e && "context" === e.intro_tutorial_version && t(!0)
        }
        InContextIntroTutorialHelpDialog.prototype.blurPreviousDialog = function() {}, InContextIntroTutorialHelpDialog.prototype.focusPreviousDialog = function() {}, InContextIntroTutorialHelpDialog.prototype.setArrowClass = function(t, e) {
            if (e.show) {
                var o = "arrow_box";
                switch (e.orientation) {
                    case "top":
                        o += " a-top";
                        break;
                    case "bottom":
                        o += " a-bottom";
                        break;
                    case "left":
                        o += " a-left";
                        break;
                    case "right":
                        o += " a-right"
                }
                switch (e.position) {
                    case "left":
                        o += " a-h-left";
                        break;
                    case "center":
                        o += " a-h-center";
                        break;
                    case "right":
                        o += " a-h-right";
                        break;
                    case "high":
                        o += " a-v-high";
                        break;
                    case "middle":
                        o += " a-v-middle";
                        break;
                    case "low":
                        o += " a-v-low"
                }
                if (e.positionTarget) {
                    var a = t.get(0).getBoundingClientRect(),
                        i = $(e.positionTarget).get(0).getBoundingClientRect(),
                        n = document.styleSheets[0];
                    switch (e.orientation) {
                        case "top":
                        case "bottom":
                            var r = i.left - a.left + i.width / 2;
                            n.insertRule(".arrow_box.a-top:before, .arrow_box.a-top:after { left: " + r + "px }", n.cssRules.length);
                            break;
                        case "left":
                        case "right":
                            var s = i.top - a.top + i.height / 2;
                            n.insertRule(".arrow_box.a-top:before, .arrow_box.a-top:after { top: " + s + "px }", n.cssRules.length)
                    }
                }
                t.find(".tutorialDialog").addClass(o)
            }
        }, InContextIntroTutorialHelpDialog.prototype.setup = function(t, e) {
            Dialog.prototype.setup.apply(this, arguments);
            var o = t.find(".topText"),
                a = t.find(".bottomText");
            switch (e.textChoice) {
                case "saveSite":
                    o.text(Strings.translateString("Step 2 of 2: Add this site to LastPass")), a.text(Strings.translateString("You'll never have to remember this password again!")), bg.sendLpImprove("onboardingtour::view_save_a_site_tool_tip", {
                        version: "incontext"
                    });
                    break;
                case "siteLanding":
                    bg.IntroTutorial.getState(function(t) {
                        var e = LPSiteService.getSite(t.domains[0]);
                        o.text(Strings.translateString("Step 1 of 2: Log in to your %1 account", e.displayName))
                    }), a.text(Strings.translateString("Once you add this password to LastPass, you'll always have it when you need it.")), bg.sendLpImprove("onboardingtour::chose_tile_log_in_tool_tip", {
                        version: "incontext"
                    });
                    break;
                case "downloadImporter":
                    o.text(Strings.translateString("The LastPass Importer is downloading")), a.text(Strings.translateString("When it's done, just run it!")), setTimeout(this.createHandler(this.close), 15e3);
                    break;
                case "loggingout":
                    e.css = {
                        top: "50%",
                        bottom: "50%",
                        left: "50%",
                        right: "50%"
                    }, o.text(Strings.translateString("Just a second...")), a.text(Strings.translateString("Logging you out"));
                    break;
                case "loginTheLastPassWay":
                    var i = 'Step 1 of 2: Click the <img class="lpIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC"> LastPass icon',
                        n = document.createElement("span");
                    n.setAttribute("compoundtranslation", ""), n.innerHTML = i, Strings.translate(n), o.append(n), a.text(Strings.translateString("You'll be able to see the account you've just added.")), bg.sendLpImprove("onboardingtour::view_logged_out_auto_fill_tool_tip", {
                        version: "incontext"
                    });
                    break;
                case "selectYourSite":
                    o.text(Strings.translateString("Step 2 of 2: Select your account")), a.text(Strings.translateString("LastPass will fill your password for you.")), bg.sendLpImprove("onboardingtour::view_select_your_account_tool_tip", {
                        version: "incontext"
                    })
            }
            this.setArrowClass(t, e.arrow), e.parentDialog && dialogs[e.parentDialog].getDialog().addChildDialog(this), e.css && t.css(e.css), e.alignBottom && t.css({
                top: "auto",
                right: "auto",
                bottom: 15,
                left: 30
            })
        }, InContextIntroTutorialHelpDialog.prototype.open = function(t) {
            var e;
            "saveSite" === t.textChoice && a(bg.showModalOverlay), Dialog.prototype.open.apply(this, arguments)
        }, InContextIntroTutorialHelpDialog.prototype.close = function(t) {
            var e = this,
                o = arguments;
            a(function(t) {
                t || bg.removeModalOverlay(), Dialog.prototype.close.apply(e, o)
            })
        }, InContextIntroTutorialHelpDialog.prototype.getSize = function() {
            return {
                "max-height": "100%",
                "max-width": "360px",
                height: "100%",
                width: "100%"
            }
        }
    }();
//# sourceMappingURL=sourcemaps/IntroTutorial/inContextIntroTutorialHelpDialog.js.map