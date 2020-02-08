var omarVaultTour = function(t, e, n, o, i, a) {
    "use strict";
    var r = function() {
            return t.getModelCount()
        },
        s = {
            name: "omarVaultTour",
            showDate: new Date,
            isLater: !1,
            isTaken: !1,
            isNever: !1,
            isAvailable: function() {
                return e.allowOmarIA()
            },
            tour: {
                welcomeStep: {
                    class: "tour-welcome-step",
                    title: o.translateString("Welcome to your vault!"),
                    contentText1: o.translateString("Your vault is a safe place to store passwords, notes, profiles for online shopping, and even documents."),
                    contentText2: o.translateString("And no matter where you work, your vault keeps everything in sync, so you can stay organized and save time."),
                    buttons: [{
                        style: "btn-blue",
                        autoId: "tourShowAroundBtnWelcome",
                        sizeStyle: "button--cta",
                        text: o.translateString("Show me around"),
                        action: "start"
                    }, {
                        style: "btn-link",
                        autoId: "tourLaterdBtnWelcome",
                        sizeStyle: "button--secondary",
                        text: o.translateString("Later"),
                        action: "later"
                    }, {
                        style: "btn-link",
                        autoId: "tourNeverBtnWelcome",
                        sizeStyle: "button--secondary",
                        text: o.translateString("Never"),
                        action: "never"
                    }],
                    position: {
                        targetId: "#header",
                        align: "left",
                        orientation: "top",
                        fillWidth: "#main"
                    },
                    openAction: function() {
                        n.maximizeLeftMenu(), a("#vault").addClass("tour-overrides")
                    },
                    closeAction: function() {
                        a("#vault").removeClass("tour-overrides")
                    },
                    exitAction: "never"
                },
                laterStep: {
                    class: "tour-welcome-step",
                    title: o.translateString("Welcome back!"),
                    contentText1: o.translateString("Ready to get started? We'll help you set up your vault. It's easy-to-use, searchable, and organized just the way you like."),
                    buttons: [{
                        style: "btn-blue",
                        autoId: "tourShowAroundBtnLater",
                        sizeStyle: "button--cta",
                        text: o.translateString("Show me around"),
                        action: "start"
                    }, {
                        style: "btn-link",
                        autoId: "tourNoThanksBtnLater",
                        sizeStyle: "button--secondary",
                        text: o.translateString("No thanks"),
                        action: "never"
                    }],
                    position: {
                        targetId: "#header",
                        align: "left",
                        orientation: "top",
                        fillWidth: "#main"
                    },
                    openAction: function() {
                        n.maximizeLeftMenu(), a("#vault").addClass("tour-overrides")
                    },
                    closeAction: function() {
                        a("#vault").removeClass("tour-overrides")
                    },
                    exitAction: "never"
                },
                steps: [{
                    class: "omar-override",
                    hideXCloseBtn: !0,
                    title: o.translateString("All your passwords, in one safe place."),
                    contentText1: function() {
                        return 1 <= r() ? o.translateString("LastPass remembers the login information for all of your favorite websites - and helps you create stronger passwords, too. Click any site in your vault to launch it and log in instantly.") : o.translateString("Save username and passwords to fill on the next visit to your favorite sites.")
                    },
                    buttons: [{
                        autoId: "tourCloseBtnPwd",
                        style: "btn-link",
                        text: o.translateString("Close"),
                        action: "exit"
                    }, {
                        autoId: "tourNextBtnPwd",
                        style: "btn-primary",
                        text: o.translateString("Next"),
                        action: "next"
                    }],
                    position: {
                        targetId: "#passwords",
                        align: "top",
                        orientation: "left",
                        offset: {
                            left: 0,
                            top: -66
                        },
                        pingOffset: {
                            left: 95,
                            top: 0
                        },
                        arrowPosition: 87
                    },
                    openAction: function() {
                        n.maximizeLeftMenu(), a(this.position.targetId).click()
                    },
                    exitAction: "exit"
                }, {
                    class: "omar-override",
                    hideXCloseBtn: !0,
                    title: o.translateString("Keep your notes secure, always."),
                    contentText1: o.translateString("Store important memos and notes securely for easy access."),
                    buttons: [{
                        autoId: "tourCloseBtnNotes",
                        style: "btn-link",
                        text: o.translateString("Close"),
                        action: "exit"
                    }, {
                        autoId: "tourNextBtnNotes",
                        style: "btn-primary",
                        text: o.translateString("Next"),
                        action: "next"
                    }],
                    position: {
                        targetId: "#notes",
                        align: "top",
                        orientation: "left",
                        offset: {
                            left: 0,
                            top: -66
                        },
                        pingOffset: {
                            left: 95,
                            top: 0
                        },
                        arrowPosition: 87
                    },
                    openAction: function() {
                        a(this.position.targetId).click()
                    },
                    exitAction: "exit"
                }, {
                    class: "omar-override",
                    hideXCloseBtn: !0,
                    title: o.translateString("Addresses, everything about you."),
                    contentText1: o.translateString("Add personal information and addresses to save time filling out forms."),
                    buttons: [{
                        autoId: "tourCloseBtnAddr",
                        style: "btn-link",
                        text: o.translateString("Close"),
                        action: "exit"
                    }, {
                        autoId: "tourNextBtnAddr",
                        style: "btn-primary",
                        text: o.translateString("Next"),
                        action: "next"
                    }],
                    position: {
                        targetId: "#addresses",
                        align: "top",
                        orientation: "left",
                        offset: {
                            left: 0,
                            top: -66
                        },
                        pingOffset: {
                            left: 95,
                            top: 0
                        },
                        arrowPosition: 87
                    },
                    openAction: function() {
                        a(this.position.targetId).click()
                    },
                    exitAction: "exit"
                }, {
                    class: "omar-override",
                    hideXCloseBtn: !0,
                    title: o.translateString("Payment cards, your digital wallet."),
                    contentText1: o.translateString("Save payment information to speed through online checkout."),
                    buttons: [{
                        autoId: "tourCloseBtnPym",
                        style: "btn-link",
                        text: o.translateString("Close"),
                        action: "exit"
                    }, {
                        autoId: "tourNextBtnPym",
                        style: "btn-primary",
                        text: o.translateString("Next"),
                        action: "next"
                    }],
                    position: {
                        targetId: "#payment-cards",
                        align: "top",
                        orientation: "left",
                        offset: {
                            left: 0,
                            top: -65
                        },
                        pingOffset: {
                            left: 95,
                            top: 0
                        },
                        arrowPosition: 87
                    },
                    openAction: function() {
                        a(this.position.targetId).click()
                    },
                    exitAction: "exit"
                }, {
                    class: "omar-override",
                    hideXCloseBtn: !0,
                    title: o.translateString("Bank accounts, secure in your Vault."),
                    contentText1: o.translateString("Store account and routing numbers as well as other banking information to streamline online bill pay."),
                    buttons: [{
                        autoId: "tourCloseBtnAcc",
                        style: "btn-link",
                        text: o.translateString("Close"),
                        action: "exit"
                    }, {
                        autoId: "tourNextBtnAcc",
                        style: "btn-primary",
                        text: o.translateString("Next"),
                        action: "next"
                    }],
                    position: {
                        targetId: "#bank-accounts",
                        align: "top",
                        orientation: "left",
                        offset: {
                            left: 0,
                            top: -66
                        },
                        pingOffset: {
                            left: 95,
                            top: 0
                        },
                        arrowPosition: 87
                    },
                    openAction: function() {
                        a(this.position.targetId).click()
                    },
                    exitAction: "exit"
                }, {
                    class: "omar-override",
                    hideXCloseBtn: !0,
                    title: o.translateString("Psst! Need to share a secret?"),
                    contentText1: o.translateString("Grant access to your need-to-know networks. Easily add, remove, or manage their access."),
                    buttons: [{
                        autoId: "tourCloseBtnShc",
                        style: "btn-link",
                        text: o.translateString("Close"),
                        action: "exit"
                    }, {
                        autoId: "tourNextBtnShc",
                        style: "btn-primary",
                        text: o.translateString("Next"),
                        action: "next"
                    }],
                    position: {
                        targetId: "#sharingMenuItemOmaria",
                        align: "top",
                        orientation: "left",
                        offset: {
                            left: 0,
                            top: -65
                        },
                        pingOffset: {
                            left: 95,
                            top: 0
                        },
                        arrowPosition: 87
                    },
                    openAction: function() {
                        n.openSharingCenter()
                    },
                    exitAction: "exit"
                }, {
                    class: "omar-override",
                    hideXCloseBtn: !0,
                    title: o.translateString("Add Items, fill up your Vault."),
                    contentText1: o.translateString("Use this button to add new sites, notes, and profiles, from anywhere in your Vault."),
                    buttons: [{
                        autoId: "tourCloseBtnAdd",
                        style: "btn-link",
                        text: o.translateString("Close"),
                        action: "exit"
                    }, {
                        autoId: "tourNextBtnAdd",
                        style: "btn-primary",
                        text: o.translateString("Next"),
                        action: "next"
                    }],
                    position: {
                        targetId: "#addMenuButton",
                        align: "bottom",
                        orientation: "right",
                        offset: {
                            left: -80,
                            top: -35
                        },
                        pingOffset: {
                            left: -100,
                            top: -30
                        },
                        arrowPosition: 140
                    },
                    openAction: function() {
                        n.openVault()
                    },
                    exitAction: "exit"
                }, {
                    class: "omar-override",
                    hideXCloseBtn: !0,
                    title: o.translateString("You're ready to get started!"),
                    contentText1: o.translateString("If you ever need a refresher, you can revisit any time by selecting More options - Help - Vault Tour."),
                    buttons: [{
                        autoId: "tourDoneBtn",
                        style: "btn-primary",
                        sizeStyle: "col-12",
                        text: o.translateString("Done"),
                        action: "close"
                    }],
                    position: {
                        targetId: "#advancedMenuItem",
                        align: "left",
                        orientation: "bottom",
                        offset: {
                            left: 35,
                            top: 0
                        },
                        pingOffset: {
                            left: 95,
                            top: 0
                        },
                        arrowPosition: 180
                    },
                    exitAction: "close"
                }],
                exitStep: {
                    class: "omar-override",
                    hideXCloseBtn: !0,
                    title: o.translateString("Not a good time?"),
                    contentText1: o.translateString("If you change your mind, you can revisit any time by selecting More options - Help - Vault Tour."),
                    buttons: [{
                        autoId: "tourGotItBtn",
                        style: "btn-primary",
                        sizeStyle: "col-12",
                        text: o.translateString("Got it"),
                        action: "close"
                    }],
                    exitAction: "close",
                    position: {
                        targetId: "#advancedMenuItem",
                        align: "left",
                        orientation: "bottom",
                        offset: {
                            left: 30,
                            top: 0
                        },
                        pingOffset: {
                            left: 95,
                            top: 0
                        },
                        arrowPosition: 180
                    },
                    autoClose: 5e3
                }
            }
        };
    return {
        getTourData: function() {
            return s
        }
    }
}(LPProxy, LPFeatures, LPVault, Strings, Topics, jQuery);
//# sourceMappingURL=sourcemaps/Tour/OmarVaultTour/omarVaultTour.js.map