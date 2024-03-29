! function(a) {
    "use strict";
    var t = function(n) {
        bg.IntroTutorial.getState(function(t) {
            for (var e = !1, o = 0; o < t.domains.length; o++) document.location.host.toLowerCase().includes(t.domains[o]) && (e = !0);
            if (t.enabled && e) {
                var i = t.isInContext ? a.InContextIntroTutorialDialogDefaultOptions : a.VaultIntroTutorialDialogOptions;
                n(t, i)
            }
        })
    };
    Topics.get(Topics.SITE_NOTIFICATION_STATE).subscribe(function(n) {
        var a = null;

        function s(t) {
            a && t && LPFrame.css({
                id: a.getDialogID(),
                css: {
                    top: t.top + 45,
                    left: t.left + t.infieldOffset + 25
                }
            })
        }

        function r(o) {
            a ? (Topics.get(Topics.INFIELD_FRAME_POSITION_CHANGED).unsubscribe(s), bg.IntroTutorial.getState(function(t) {
                var e;
                "add_first_site" !== t.inContextOnboardingStep && (a.close(!0), a = null, o && o())
            })) : o && o()
        }
        t(function(t, e) {
            var o = LPSiteService.getSite(t.domains[0]);
            if (o.isOnLoginPage(document)) {
                if (bg.IntroTutorial.setState({
                        firstLogin: !1
                    }), 0 === LPFrame.numberOfDialogs()) {
                    var e = o.getCustomOptions() ? o.getCustomOptions() : e;
                    if (t.isLoginTheLastPassWay ? a = LPFrame.openDialog(e.name, {
                            addHide: !0,
                            textChoice: "loginTheLastPassWay",
                            arrow: e.getArrowOptions()
                        }, {
                            css: e.getCssOptions()
                        }) : t.isSiteSaved ? bg.IntroTutorial.resetState() : a = LPFrame.openDialog(e.name, {
                            addHide: !0,
                            textChoice: "siteLanding",
                            arrow: e.getArrowOptions()
                        }, {
                            css: e.getCssOptions()
                        }), a) {
                        var i = e.getTrackElementOptions();
                        i.element = o.getTrackingEl(document), a.trackElement(i)
                    }
                }
            } else t.firstLogin ? o.logMeOut(document, e.name) : t.isAllSet && bg.IntroTutorial.completeTutorial({
                textChoice: "completed"
            })
        }), Topics.get(Topics.SITE_NOTIFICATION).subscribe(function(o) {
            var i = "saveSite";
            t(function(t, e) {
                bg.IntroTutorial.setState({
                    inContextOnboardingStep: "add_site_to_lastpass"
                }), setTimeout(function() {
                    LPFrame && 1 < LPFrame.numberOfDialogs() && LPFrame.close(1), bg.sendLpImprove("onboardingtour::displayed_onboarding_save_a_site", {
                        version: "incontext"
                    });
                    var t = window.location.hostname;
                    n && n.defaultData && n.defaultData.name && (t = n.defaultData.name), o.getInterface().LPDialog.openDialog(e.name, {
                        addHide: !0,
                        siteName: t,
                        textChoice: i,
                        parentDialog: "contentScriptSite",
                        css: {
                            position: "absolute",
                            top: "100%",
                            "margin-top": "10px",
                            "margin-right": 0,
                            right: 0
                        },
                        arrow: {
                            orientation: "top",
                            positionTarget: "#submit"
                        }
                    })
                }, 1e3)
            })
        }), Topics.get(Topics.INFIELD_NOTIFICATION_OPENED).subscribe(function(i) {
            t(function(e, o) {
                var t;
                r(function() {
                    var t = e.inContextOnboardingStep;
                    t && "add_first_site" !== t && (a = LPFrame.openDialog(o.name, {
                        addHide: !0,
                        textChoice: "selectYourSite",
                        arrow: o.getArrowOptions()
                    }, {
                        css: {
                            width: "auto",
                            height: "auto",
                            "min-width": "168px"
                        }
                    })), Topics.get(Topics.INFIELD_FRAME_POSITION_CHANGED).subscribe(s), s(i)
                })
            })
        }), Topics.get(Topics.INFIELD_NOTIFICATION_FILLED).subscribe(function() {
            t(function(t, e) {
                t.enabled && (bg.IntroTutorial.setState({
                    isLoginTheLastPassWay: !1
                }), bg.IntroTutorial.completeTutorial({
                    textChoice: "completed",
                    siteName: t.domains[0]
                }))
            })
        }), Topics.get(Topics.INFIELD_NOTIFICATION_CLOSED).subscribe(function() {
            t(function(t, e) {
                r()
            })
        })
    })
}(IntroTutorialDialogOptions);
//# sourceMappingURL=sourcemaps/IntroTutorial/introTutorialContentScript.js.map