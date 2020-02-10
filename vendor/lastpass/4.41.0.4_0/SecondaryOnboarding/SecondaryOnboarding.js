var SecondaryOnboardingCard = function() {
        function e(e, t, r, s) {
            this.data = e, this.setCompleted(t), this.designversion = r, this.isIncentiveEnabled = s, this.setCardElementValues()
        }
        return e.prototype.draw = function(e) {
            return this.isCompleted() ? this.drawCompleted() : this.drawIncomplete(e)
        }, e.prototype.setCardElementValues = function() {
            switch (this.designversion) {
                case 0:
                    this.headerText = this.data.header, this.bodyText = this.data.bodyText, this.iconSource = this.data.icon, this.cardElClass = "card-v0", this.cardIconClass = "card-icon-v0", this.cardHeaderClass = "card-header-v0", this.cardTextClass = "card-text-v0", this.cardButtonClass = "card-button btn-base btn-small btn-primary", this.cardProgressClass = "progress-circle progress-circle-v0";
                    break;
                case 1:
                    this.headerText = this.data.headerV1, this.bodyText = this.data.bodyTextV1, this.iconSource = this.data.iconV1, this.cardElClass = "card-v1", this.cardIconClass = "card-icon-v1", this.cardHeaderClass = "card-header-v1", this.cardTextClass = "card-text-v1", this.cardButtonClass = "card-button-v1", this.cardProgressClass = "progress-circle"
            }
        }, e.prototype.createCardTemplate = function() {
            var e = LPTools.createElement("div", {
                id: this.data.id,
                class: "" + this.cardElClass
            }, "");
            return "premiumIncentive" === this.data.id || "noPremiumIncentive" === this.data.id ? (e = this.createProgressCircle(e, !1), "noPremiumIncentive" === this.data.id && (e.appendChild(LPTools.createElement("div", {
                id: this.data.id + "-headerProgress",
                class: "" + this.cardHeaderClass
            }, Strings.translateString("" + this.data.header))), e.appendChild(LPTools.createElement("div", {
                id: this.data.id + "-textProgress",
                class: "" + this.cardTextClass
            }, Strings.translateString("" + this.data.bodyText))))) : e.appendChild(LPTools.createElement("img", {
                id: this.data.id + "-icon",
                class: "" + this.cardIconClass,
                src: "" + this.iconSource
            }, "")), e.appendChild(LPTools.createElement("div", {
                id: this.data.id + "-header",
                class: "" + this.cardHeaderClass
            }, Strings.translateString("" + this.headerText))), e.appendChild(LPTools.createElement("div", {
                id: this.data.id + "-text",
                class: "" + this.cardTextClass
            }, Strings.translateString("" + this.bodyText))), e
        }, e.prototype.drawIncomplete = function(e) {
            var t = this,
                r = this.createCardTemplate();
            if ("premiumIncentive" != this.data.id && "noPremiumIncentive" != this.data.id) {
                var s = LPTools.createElement("button", {
                    id: this.data.id + "-cta",
                    class: "" + this.cardButtonClass
                }, Strings.translateString(this.data.buttonText));
                s.onclick = function() {
                    t.data.cta(), bg.sendLpImprove("secondary_onboarding_card_click", {
                        cardname: t.data.id,
                        version: "V" + t.designversion
                    }), e.refreshAfterCTA(t.data.id)
                }, r.appendChild(s)
            }
            return r
        }, e.prototype.drawCompleted = function() {
            var e = this.createCardTemplate();
            switch (this.designversion) {
                case 0:
                    (e = LPTools.createElement("div", {
                        id: this.data.id,
                        class: "cardComplete card-v0"
                    }, "")).appendChild(LPTools.createElement("img", {
                        id: this.data.id + "-icon-completed",
                        class: "card-completed-icon-v0",
                        src: "images/SecondaryOnboarding/circle-success.png"
                    }, "")), e.appendChild(LPTools.createElement("div", {
                        id: this.data.id + "-text-completed",
                        class: "card-completed-header-v0"
                    }, Strings.translateString(this.data.completedText)));
                    break;
                case 1:
                    "premiumIncentive" === this.data.id || "noPremiumIncentive" === this.data.id ? (e = LPTools.createElement("div", {
                        id: this.data.id,
                        class: "" + this.cardElClass
                    }, ""), (e = this.createProgressCircle(e, !0)).appendChild(LPTools.createElement("div", {
                        id: this.data.id + "-headerCompleted",
                        class: "" + this.cardHeaderClass
                    }, Strings.translateString("" + this.data.completedTextHeader))), e.appendChild(LPTools.createElement("div", {
                        id: this.data.id + "-textCompleted",
                        class: "" + this.cardTextClass
                    }, Strings.translateString("" + this.data.completedText)))) : e.appendChild(LPTools.createElement("div", {
                        id: this.data.id + "success-text",
                        class: "card-completed-icon-v1"
                    }, "Completed"))
            }
            return e
        }, e.prototype.createProgressCircle = function(e, t) {
            var r = LPTools.createElement("div", {
                id: "cardProgressCircle",
                class: "" + this.cardProgressClass
            }, "");
            return e.appendChild(r), t ? r.appendChild(LPTools.createElement("img", {
                id: "cardProgressCompletionIcon-v1",
                class: "progressCircleCompletionIcon",
                src: "../images/SecondaryOnboarding/check-icon.svg"
            }, "")) : r.appendChild(LPTools.createElement("div", {
                id: "cardProgressCounter-v1",
                class: "progressCircleCounter"
            }, "")), e
        }, e.prototype.isCompleted = function() {
            return this.completed
        }, e.prototype.setCompleted = function(e) {
            this.completed = e
        }, e.prototype.getID = function() {
            return this.data.id
        }, e.prototype.getKey = function() {
            return this.data.key
        }, e.prototype.isVisible = function() {
            return this.data.isVisible()
        }, e
    }(),
    SecondaryOnboardingContainer = function() {
        function e(e, t) {
            void 0 === t && (t = !1), this.vaultEl = $("#vault"), this.designVersion = e, this.isIncentiveEnabled = t, this.cardWidth = 0 === this.designVersion ? 330 : 390, this.containerEl = $("#secondaryOnboardingContainer"), this.containerEl.hide(), this.preferences = new SecondaryOnboardingPreferences, this.progress = new SecondaryOnboardingProgressBar, this.showCarousel = $.proxy(this.showCarousel, this), this.postSlideHideCarousel = $.proxy(this.postSlideHideCarousel, this)
        }
        return e.prototype.init = function(e) {
            var t = e.cards;
            this.resetContainer(), this.cards = this.createCards(t), this.sortCards(this.cards);
            var r = LPTools.createElement("div", {
                id: "secondaryOnboardingHeader",
                class: "row"
            }, "");
            r.append(this.createProgressbar()), r.append(this.createToggleButton()), this.containerEl.append(r), this.cardsCarouselEl = $(this.drawCards(this.cards)), this.containerEl.append(this.cardsCarouselEl), this.vaultEl.addClass("secondary-onboarding-overrides"), this.containerEl.addClass("secondary-onboarding lp-grid container gutter-sm leftOfAd right"), e.expanded ? this.showCarousel(!1) : this.hideCarousel(), this.containerEl.show(), this.noPremiumIncentiveProgress(e), this.cardsSeen = this.calculateCardsSeen(), this.cardsShown = this.calculateCardsShown(this.cards), this.initialCardsSeen = this.cardsSeen, this.adjustVaultContentsPositioning(), bg.sendLpImprove("secondary_onboarding_container_shown", {
                version: "V" + this.designVersion
            })
        }, e.prototype.adjustVaultContentsPositioning = function() {
            $("#options").addClass("bottom"), $("#main").addClass("secondary-onboarding-bottom"), this.adjustContainerForDesign()
        }, e.prototype.calculateCardsShown = function(e) {
            var t = 0;
            return e.forEach(function(e) {
                e.isVisible() && (t += 1)
            }), t
        }, e.prototype.calculateCardsSeen = function() {
            var e = (parseInt($("#carousel").css("width")) - 50) / this.cardWidth;
            return .88 <= e % 1 && (e = Math.round(e)), e
        }, e.prototype.adjustContainerForDesign = function() {
            var e;
            switch ($("#prevArrow").hide(), $("#prev").css("pointer-events", "none"), this.designVersion) {
                case 0:
                    e = $("#nextArrow-v0");
                    break;
                case 1:
                    $("#carousel").css("height", "140px"), $(".arrow").css("margin", "-20px 0"), $("#collapseToggleButton").css("font-size", "13px"), e = $("#nextArrow-v1")
            }
            this.cardsSeen >= this.cardsShown && e.hide()
        }, e.prototype.resetContainer = function() {
            $("#secondaryOnboardingHeader").remove(), $("#carousel").remove()
        }, e.prototype.createCards = function(e) {
            for (var t = [], r, s = 0, n = Object.keys(e); s < n.length; s++) {
                var o = n[s],
                    i = DTO[o];
                i.id = o, t.push(new SecondaryOnboardingCard(i, e[o].completed, this.designVersion, this.isIncentiveEnabled))
            }
            return t
        }, e.prototype.createToggleButton = function() {
            var e = this,
                t, r;
            switch (this.designVersion) {
                case 0:
                    t = "images/SecondaryOnboarding/close_arrow.png", r = "images/SecondaryOnboarding/open_arrow.png";
                    break;
                case 1:
                    t = "images/SecondaryOnboarding/close-arrow-small.svg", r = "images/SecondaryOnboarding/open-arrow-small.svg"
            }
            var s = LPTools.createElement("div", {
                id: "collapseToggleElement",
                class: "collapseToggleElement col-3 pull-right content-pull-right"
            }, "");
            return s.appendChild(LPTools.createElement("span", {
                id: "collapseToggleButton"
            })), s.appendChild(LPTools.createElement("img", {
                id: "collapseToggleArrow",
                src: t,
                alt: "Secondary Onboarding Toggle Arrow"
            }, "")), s.appendChild(LPTools.createElement("img", {
                id: "expandToggleArrow",
                src: r,
                alt: "Secondary Onboarding Toggle Arrow"
            }, "")), $("#expandToggleArrow").hide(), $(s).click(function() {
                e.toggleContainerState()
            }), s
        }, e.prototype.createProgressbar = function() {
            var e;
            switch (this.designVersion) {
                case 0:
                    (e = LPTools.createElement("div", {
                        id: "progressBar",
                        class: "col-9"
                    }, "")).appendChild(LPTools.createElement("span", {
                        id: "progressBarText"
                    }, Strings.translateString("Get started with LastPass"))), e.appendChild(LPTools.createElement("span", {
                        id: "cardProgressCount"
                    }, "")), e.appendChild(LPTools.createElement("span", {
                        id: "cardProgressBar"
                    }, ""));
                    break;
                case 1:
                    e = LPTools.createElement("div", {
                        id: "progressBar-v1",
                        class: "col-9"
                    });
                    var t = LPTools.createElement("div", {
                        id: "headerProgressCircle",
                        class: "progress-circle",
                        style: "display: none"
                    }, "");
                    t.appendChild(LPTools.createElement("div", {
                        id: "headerProgressCounter",
                        class: "progressCircleCounter"
                    }, "")), e.appendChild(t), e.appendChild(LPTools.createElement("div", {
                        id: "progressBarHeader-v1"
                    }, "Walk the path to secure & easy online living")), this.isIncentiveEnabled && e.appendChild(LPTools.createElement("div", {
                        id: "progressBarText-v1",
                        style: "display: none"
                    }, "Get 30 days of LastPass Premium"))
            }
            return e
        }, e.prototype.showCarousel = function(e) {
            void 0 === e && (e = !1), this.vaultEl.removeClass("collapsed"), e ? (1 === this.designVersion && this.hideHeaderProgress(), this.cardsCarouselEl.slideToggle(300, this.showCarousel)) : ($("#collapseToggleButton").text("Collapse"), $("#expandToggleArrow").hide(), $("#collapseToggleArrow").show())
        }, e.prototype.hideHeaderProgress = function() {
            var e = this.preferences.retrieve();
            $("#headerProgressCircle").hide(), $("#progressBarText-v1").hide(), this.progress.showProgressCounter(e.completedCards, e.totalVisibleCards, this.designVersion), this.progress.showProgressElementCompletion(e.completedCards, e.totalVisibleCards, this.designVersion, this.isIncentiveEnabled)
        }, e.prototype.postSlideHideCarousel = function() {
            $("#collapseToggleButton").text("Expand"), $("#expandToggleArrow").show(), $("#collapseToggleArrow").hide(), this.vaultEl.addClass("collapsed"), 1 === this.designVersion && ($("#headerProgressCircle").show(), $("#progressBarText-v1").show())
        }, e.prototype.hideCarousel = function() {
            this.cardsCarouselEl.slideToggle(300, this.postSlideHideCarousel)
        }, e.prototype.hideContainer = function(e) {
            void 0 === e && (e = !1), this.vaultEl.removeClass("secondary-onboarding-overrides"), $("#main").removeClass("secondary-onboarding-bottom"), $("#options").removeClass("bottom"), this.containerEl.hide(), bg.sendLpImprove("secondary_onboarding_container_hidden")
        }, e.prototype.sortCards = function(e) {
            e.sort(function(e, t) {
                return !e.isCompleted() && !t.isCompleted() && e.getKey() > t.getKey() || e.isCompleted() && !t.isCompleted() ? 1 : -1
            })
        }, e.prototype.drawCards = function(e) {
            var t = this,
                r = LPTools.createElement("div", {
                    id: "carousel",
                    class: "carousel content row"
                }, ""),
                s = LPTools.createElement("div", {
                    id: "cardsCarousel",
                    class: "cards-carousel"
                }, ""),
                n = LPTools.createElement("div", {
                    id: "cards",
                    class: "cards"
                }, ""),
                o, i, a, d, c;
            s.appendChild(n), $(n).width(this.cardWidth * e.length + this.cardWidth);
            for (var l = 0, p = e; l < p.length; l++) {
                var h = p[l];
                h.isVisible() && n.appendChild(h.draw(this))
            }
            switch (this.designVersion) {
                case 0:
                    o = "arrow arrow-left-v0", i = "images/SecondaryOnboarding/arrow_left.png", a = "arrow arrow-right-v0", c = "nextArrow-v0", d = "images/SecondaryOnboarding/arrow_right.png";
                    break;
                case 1:
                    o = "arrow arrow-left-v1", i = "images/SecondaryOnboarding/arrow-left-v1.svg", a = "arrow arrow-right-v1", c = "nextArrow-v1", d = "images/SecondaryOnboarding/arrow-right-v1.svg"
            }
            var g = LPTools.createElement("div", {
                id: "prev",
                class: o
            }, "");
            g.onclick = function() {
                return t.scrollReverse(t.cardWidth)
            }, r.appendChild(g), g.appendChild(LPTools.createElement("img", {
                id: "prevArrow",
                class: "arrow-img",
                src: i
            }, "")), r.appendChild(s);
            var u = LPTools.createElement("div", {
                id: "next",
                class: a
            }, "");
            return u.onclick = function() {
                return t.scrollNext(t.cardWidth)
            }, u.appendChild(LPTools.createElement("img", {
                id: c,
                class: "arrow-img",
                src: d
            }, "")), r.appendChild(u), r
        }, e.prototype.scrollNext = function(e) {
            this.cardsSeen < this.cardsShown && ($("#cards").animate({
                left: "-=" + e
            }, 100), this.cardsSeen += 1, $("#prevArrow").show(), $("#prev").css("pointer-events", "visible"), this.cardsSeen >= this.cardsShown && (0 === this.designVersion ? $("#nextArrow-v0").hide() : $("#nextArrow-v1").hide(), $("#next").css("pointer-events", "none")))
        }, e.prototype.scrollReverse = function(e) {
            var t, r;
            $("#cards").animate({
                left: "+=" + e
            }, 100), this.cardsSeen -= 1, Math.round(this.cardsSeen) === Math.round(this.initialCardsSeen) ? ($("#prevArrow").hide(), $("#prev").css("pointer-events", "none")) : ($("#prev").show(), $("#prev").css("pointer-events", "visible")), this.cardsSeen < this.cardsShown && (0 === this.designVersion ? $("#nextArrow-v0").show() : $("#nextArrow-v1").show(), $("#next").css("pointer-events", "visible"))
        }, e.prototype.toggleContainerState = function() {
            var e = this.preferences.retrieve();
            e.expanded ? (this.hideCarousel(), bg.sendLpImprove("secondary_onboarding_container_collapsed", {
                version: "V" + this.designVersion
            })) : (this.showCarousel(!0), bg.sendLpImprove("secondary_onboarding_container_expanded", {
                version: "V" + this.designVersion
            })), e.expanded = !e.expanded, this.preferences.save(e)
        }, e.prototype.refreshAfterCTA = function(t) {
            var r = this;
            if ("getMobileApp" === t) {
                var e = this.drawCardsAfterCTA(t);
                $("#" + t).replaceWith(e.draw(this)), this.drawProgressCardsAfterCTA()
            } else Topics.get(Topics.DIALOG_CLOSE).subscribe(function() {
                var e = r.drawCardsAfterCTA(t);
                $("#" + t).replaceWith(e.draw(r)), r.drawProgressCardsAfterCTA(), Topics.get(Topics.DIALOG_CLOSE).unsubscribe()
            })
        }, e.prototype.drawProgressCardsAfterCTA = function() {
            var e = this.preferences.retrieve();
            if (e.totalVisibleCards === e.completedCards) {
                var t = this.isIncentiveEnabled ? "premiumIncentive" : "noPremiumIncentive";
                e.cards[t].completed = 1, this.preferences.save(e), bg.sendLpImprove("secondary_onboarding_card_complete", {
                    cardname: t,
                    version: "V" + this.designVersion
                });
                var r = new SecondaryOnboardingCard(DTO[t], e.cards[t].completed, this.designVersion, this.isIncentiveEnabled);
                $("#" + t).replaceWith(r.draw(this)), this.progress.showProgressCounter(e.completedCards, e.totalVisibleCards, this.designVersion), this.progress.showProgressElementCompletion(e.completedCards, e.totalVisibleCards, this.designVersion, this.isIncentiveEnabled)
            }
            this.noPremiumIncentiveProgress(e)
        }, e.prototype.drawCardsAfterCTA = function(e) {
            var t = DTO[e],
                r = this.preferences.retrieve(),
                s = "getMobileApp" === e || DTO[e].checkComplete(),
                n;
            return s && !r.cards[e].completed && (r.cards[e].completed |= s, r.completedCards++, this.progress.showProgressCounter(r.completedCards, r.totalVisibleCards, this.designVersion), this.progress.showProgressElementCompletion(r.completedCards, r.totalVisibleCards, this.designVersion, this.isIncentiveEnabled), this.preferences.save(r), "getMobileApp" !== e && bg.sendLpImprove("secondary_onboarding_card_complete", {
                cardname: e,
                version: "V" + this.designVersion
            })), new SecondaryOnboardingCard(t, r.cards[e].completed, this.designVersion, this.isIncentiveEnabled)
        }, e.prototype.noPremiumIncentiveProgress = function(e) {
            1 !== this.designVersion || this.isIncentiveEnabled || (0 < e.completedCards ? ($("#noPremiumIncentive-header").hide(), $("#noPremiumIncentive-text").hide(), $("#noPremiumIncentive-headerProgress").show(), $("#noPremiumIncentive-textProgress").show()) : ($("#noPremiumIncentive-headerProgress").hide(), $("#noPremiumIncentive-textProgress").hide()))
        }, e
    }(),
    DTO = {
        premiumIncentive: {
            key: 0,
            cta: function() {},
            checkComplete: function() {
                return !1
            },
            isVisible: function() {
                return bg.get("LPContentScriptFeatures").secondary_onboarding_new_design_incentive || bg.get("LPContentScriptFeatures").secondary_onboarding_old_design_incentive
            },
            header: "Get 30 days of LastPass Premium",
            headerV1: "Get 30 days of LastPass Premium",
            bodyText: "Walk the path and extend your trial by 30 days",
            bodyTextV1: "Walk the path and extend your trial by 30 days",
            completedTextHeader: "Congrats!",
            completedText: "We've added 30 days to your Premium Trial!",
            buttonText: "",
            icon: "",
            iconV1: ""
        },
        noPremiumIncentive: {
            key: 0,
            cta: function() {},
            checkComplete: function() {
                return !1
            },
            isVisible: function() {
                return bg.get("LPContentScriptFeatures").secondary_onboarding_new_design_no_incentive
            },
            header: "Feel it yet?",
            headerV1: "Every journey begins...",
            bodyText: "Can you feel your online life getting easier and safer? Keep it up!",
            bodyTextV1: "...with a single step toward security and simplicity!",
            completedTextHeader: "You did it!",
            completedText: "Stay smart, stay safe, stay easy! With LastPass",
            buttonText: "",
            icon: "",
            iconV1: ""
        },
        downloadExtension: {
            key: 1,
            cta: function() {
                bg.openURL("https://lastpass.com/misc_download2.php")
            },
            checkComplete: function() {
                return LPVault.isExtensionDownloaded()
            },
            isVisible: function() {
                return !0
            },
            header: "Get more from LastPass",
            headerV1: "Bring out the flavor",
            bodyText: "Install the LastPass browser extension to make your experience even more seamless.",
            bodyTextV1: "The browser extension is our secret sauce",
            completedText: "Extension Downloaded!",
            buttonText: "Get the extension",
            icon: "images/SecondaryOnboarding/mid-computer-color.png",
            iconV1: "images/SecondaryOnboarding/extension-v1.svg"
        },
        vaultTour: {
            key: 2,
            cta: function() {
                LPPlatform.openTour(!0, !0)
            },
            checkComplete: function() {
                if (LPProxy.getPreference("IntroTour")) {
                    var e = JSON.parse(LPProxy.getPreference("IntroTour")).remainingTours;
                    if (e) {
                        var t = Object.keys(e),
                            r = t[0];
                        if (t && r && e[r]) return e[r].isTaken
                    }
                }
                return !1
            },
            isVisible: function() {
                return !0
            },
            header: "New around here? Take the tour",
            headerV1: "Get smart, get safe",
            bodyText: "Take a guided tour of your LastPass vault and see how LastPass keeps you secure.",
            bodyTextV1: "Blast off into the LastPass stratosphere",
            completedText: "Vault tour complete!",
            buttonText: "Take the tour",
            icon: "images/SecondaryOnboarding/mid-safe-color.svg",
            iconV1: "images/SecondaryOnboarding/vaulttour-v1.svg"
        },
        addAPassword: {
            key: 3,
            cta: function() {
                LPVault.openSiteDialog()
            },
            checkComplete: function() {
                return "undefined" !== bg.get("g_sites") && 0 < Object.keys(bg.get("g_sites")).length
            },
            isVisible: function() {
                return !0
            },
            header: "Add a password now, save time later",
            headerV1: "Save Passwords, Save Time",
            bodyText: "Add your login information for your favorite website and save time on your next visit.",
            bodyTextV1: "Login made simple",
            completedText: "First password saved!",
            buttonText: "Add a password",
            icon: "images/SecondaryOnboarding/mid-lock-color.svg",
            iconV1: "images/SecondaryOnboarding/password-v1.svg"
        },
        getMobileApp: {
            key: 4,
            cta: function() {
                LPProxy.sendMobileDownload({
                    params: {},
                    success: function(e) {
                        if (e && e.success) {
                            var t = "getMobileApp",
                                r = new SecondaryOnboardingPreferences,
                                s = r.retrieve();
                            s.cards[t].completed = !0, r.save(s);
                            var n = bg.get("LPContentScriptFeatures").secondary_onboarding_new_design_no_incentive && !bg.get("LPContentScriptFeatures").secondary_onboarding_old_design_no_incentive ? 1 : 0;
                            bg.sendLpImprove("secondary_onboarding_card_complete", {
                                cardname: t,
                                version: "V" + n
                            })
                        }
                    }
                })
            },
            checkComplete: function() {
                return !1
            },
            isVisible: function() {
                return !0
            },
            header: "Take LastPass everywhere",
            headerV1: "Go mobile",
            bodyText: "Download the app for iOS or Android. We'll deliver a link right to your inbox.",
            bodyTextV1: "LastPass goes where you go",
            completedText: "Check your email to get the app!",
            buttonText: "Download the app",
            icon: "images/SecondaryOnboarding/mid-phone-color.svg",
            iconV1: "images/SecondaryOnboarding/mobile-v1.svg"
        },
        enableMFA: {
            key: 5,
            cta: function() {
                Topics.get(Topics.EDIT_SETTINGS).publish({
                    source: "sidebar",
                    defaulttab: "settings_multifactor"
                })
            },
            checkComplete: function() {
                return bg.get("g_2fa_inprocess")
            },
            isVisible: function() {
                return !0
            },
            header: "Enable Multi-Factor Authentication",
            headerV1: "Stonewall the hackers",
            bodyText: "Give your account an additional layer of security by setting up multi-factor authentication",
            bodyTextV1: "Add an extra layer of protection - It's free",
            completedText: "Multi-Factor Auth Enabled!",
            buttonText: "Add multifactor authentication",
            icon: "images/SecondaryOnboarding/mid-spy-color.svg",
            iconV1: "images/SecondaryOnboarding/mfa-v1.svg"
        },
        saveAPayment: {
            key: 6,
            cta: function() {
                LPVault.openNoteDialog({
                    defaultData: {
                        notetype: "Credit Card"
                    }
                })
            },
            checkComplete: function() {
                var e = bg.get("g_securenotes");
                for (var t in e)
                    if (e.hasOwnProperty(t) && "Credit Card" === e[t].notetype) return !0;
                return !1
            },
            isVisible: function() {
                return !1
            },
            header: "Save payment cards and shop smart",
            headerV1: "Make online shopping easy",
            bodyText: "Keep your payment card information ready and secure of bill pay and online shopping",
            bodyTextV1: "No more typing in card numbers",
            completedText: "Payment card saved!",
            buttonText: "Add a card",
            icon: "images/SecondaryOnboarding/mid-card-color.svg",
            iconV1: "images/SecondaryOnboarding/card-v1.svg"
        }
    },
    SecondaryOnboardingManager = function() {
        function e() {
            this.setDesignVersion(), this.preferences = new SecondaryOnboardingPreferences, this.container = new SecondaryOnboardingContainer(this.designVersion, this.isIncentiveEnabled), this.progress = new SecondaryOnboardingProgressBar
        }
        return e.prototype.setDesignVersion = function() {
            var e = bg.get("LPContentScriptFeatures").secondary_onboarding_old_design_no_incentive || bg.get("LPContentScriptFeatures").secondary_onboarding_old_design_incentive,
                t = bg.get("LPContentScriptFeatures").secondary_onboarding_new_design_no_incentive || bg.get("LPContentScriptFeatures").secondary_onboarding_new_design_incentive;
            this.isIncentiveEnabled = bg.get("LPContentScriptFeatures").secondary_onboarding_new_design_incentive || bg.get("LPContentScriptFeatures").secondary_onboarding_old_design_incentive, this.designVersion = e && t || !e && !t || e && !t ? 0 : 1
        }, e.prototype.init = function() {
            this.preferenceData = this.preferences.retrieve(), this.getCardCount(), this.updateCompletedCards(), this.preferences.save(this.preferenceData), this.allCardsCompleted() && this.isIncentiveEnabled && this.applyIncentive(), this.allCardsCompleted() ? this.hideContainer() : this.initContainer()
        }, e.prototype.initContainer = function() {
            this.container.init(this.preferenceData), this.updateProgressBar()
        }, e.prototype.hideContainer = function() {
            this.container.hideContainer()
        }, e.prototype.updateProgressBar = function() {
            var e = this.preferenceData.completedCards;
            this.progress.showProgressCounter(e, this.preferenceData.totalVisibleCards, this.designVersion), this.progress.showProgressElementCompletion(e, this.preferenceData.totalVisibleCards, this.designVersion, this.isIncentiveEnabled)
        }, e.prototype.getCardCount = function() {
            for (var e = Object.keys(this.preferenceData.cards), t = this.preferenceData.totalVisibleCards = 0, r = e; t < r.length; t++) {
                var s = r[t];
                DTO[s].isVisible() && "premiumIncentive" != s && "noPremiumIncentive" != s && this.preferenceData.totalVisibleCards++
            }
        }, e.prototype.allCardsCompleted = function() {
            return this.preferenceData.totalVisibleCards === this.preferenceData.completedCards
        }, e.prototype.updateCompletedCards = function() {
            for (var e, t = 0, r = Object.keys(this.preferenceData.cards); t < r.length; t++) {
                var s = r[t],
                    n = DTO[s].checkComplete();
                n && !this.preferenceData.cards[s].completed && (bg.sendLpImprove("secondary_onboarding_card_complete", {
                    cardname: s,
                    version: "V" + this.designVersion
                }), this.preferenceData.completedCards++), this.preferenceData.cards[s].completed |= n
            }
        }, e.prototype.applyIncentive = function() {
            var t = this;
            this.getToken(function(e) {
                $.ajax({
                    url: t.apiUrl + "/users/me/extendpremiumtrial",
                    method: "POST",
                    dataType: "json",
                    contentType: "application/json",
                    headers: {
                        "x-csrf-token": e
                    }
                })
            })
        }, e.prototype.getToken = function(t) {
            this.apiUrl = "/lmiapi", "string" == typeof bg.get("base_url") && (this.apiUrl = bg.get("base_url").replace(/\/$/, "") + this.apiUrl), $.post(this.apiUrl + "/csrf", function(e) {
                t(e)
            })
        }, e
    }(),
    SecondaryOnboardingPreferences = function() {
        function e() {
            this.defaultSecondaryOnboardingPref = {
                expanded: !0,
                completedCards: 0,
                totalVisibleCards: 0,
                cards: {
                    premiumIncentive: {
                        completed: !1
                    },
                    noPremiumIncentive: {
                        completed: !1
                    },
                    downloadExtension: {
                        completed: !1
                    },
                    vaultTour: {
                        completed: !1
                    },
                    addAPassword: {
                        completed: !1
                    },
                    getMobileApp: {
                        completed: !1
                    },
                    enableMFA: {
                        completed: !1
                    },
                    saveAPayment: {
                        completed: !1
                    }
                }
            }
        }
        return e.prototype.save = function(e) {
            LPProxy.setPreferences("SecondaryOnboarding", JSON.stringify(e))
        }, e.prototype.retrieve = function() {
            var e = LPProxy.getPreference("SecondaryOnboarding");
            return e && "null" !== e && "undefined" !== e ? JSON.parse(e) : this.defaultSecondaryOnboardingPref
        }, e
    }(),
    SecondaryOnboardingProgressBar = function() {
        function e() {}
        return e.prototype.showProgressCounter = function(e, t, r) {
            switch (r) {
                case 0:
                    $("#cardProgressCount").text("(" + e + "/" + t + ")");
                case 1:
                    $("#cardProgressCounter-v1").text(e + "/" + t), $("#headerProgressCounter").text(e + "/" + t)
            }
        }, e.prototype.showProgressElementCompletion = function(e, t, r, s) {
            switch (r) {
                case 0:
                    s && this.showProgressCircle(e, t), $(".cardCompletionPercentage").remove();
                    var n = LPTools.createElement("span", {
                        class: "cardCompletionPercentage"
                    }, "");
                    $(n).css("width", 20 * e + "px"), $("#cardProgressBar").append(n);
                    break;
                case 1:
                    this.showProgressCircle(e, t)
            }
        }, e.prototype.showProgressCircle = function(e, t) {
            var r = LPTools.createElement("div", {
                    class: "progressCompletionPercentage"
                }, ""),
                s = LPTools.createElement("div", {
                    class: "progressCompletionPercentage"
                }, ""),
                n = 120 / t;
            if (e <= t / 2) $(r).css("clip", "rect(0px 60px " + e * n + "px 30px"), $(s).css("clip", "rect(0px 60px " + e * n + "px 30px"), $("#headerProgressCircle").append(s), $("#cardProgressCircle").append(r);
            else {
                var o = LPTools.createElement("div", {
                        class: "progressCompletionPercentage"
                    }, ""),
                    i = LPTools.createElement("div", {
                        class: "progressCompletionPercentage"
                    }, "");
                $(r).css("clip", "rect(0px 100px 100px 30px"), $(s).css("clip", "rect(0px 100px 100px 30px"), $(o).css("clip", "rect(0px 100px " + (e - t / 2) * n + "px 30px"), $(i).css("clip", "rect(0px 100px " + (e - t / 2) * n + "px 30px"), $(o).css("transform", "rotate(180deg)"), $(i).css("transform", "rotate(180deg)"), $("#cardProgressCircle").append(r), $("#headerProgressCircle").append(s), $("#cardProgressCircle").append(o), $("#headerProgressCircle").append(i)
            }
        }, e
    }();
//# sourceMappingURL=sourcemaps/SecondaryOnboarding/SecondaryOnboarding.js.map