"use strict";

function sendRequest(e) {
    if (null != e)
        if (e.cmd && "popupfillinputget" != e.cmd && "popupfilliconnumber" != e.cmd && L("IF -> BG : cmd=" + e.cmd), g_ischrome) try {
            chrome_runtime_sendMessage(e, function() {})
        } catch (e) {} else g_issafari ? safari.self.tab ? safari.self.tab.dispatchMessage(e.cmd, e) : safari.extension && safari.extension.globalPage && safari.extension.globalPage.contentWindow && safari.extension.globalPage.contentWindow.message_handler({
            name: e.cmd,
            message: e,
            target: window
        }) : g_isfirefoxsdk ? (e.messagetype = e.cmd, send_message(e)) : g_iscasper ? "function" == typeof t_sendmsg && t_sendmsg(e) : bg.LPPlatform.postLegacyMessage({
            name: "message",
            message: e
        })
}
var g_reference_url = "",
    InfieldIcons = {
        globe: "images/Globe.png",
        profile: "images/Profile.png",
        other: "images/Other.png",
        mastercard: "images/Mastercard.png",
        visa: "images/Visa.png",
        amex: "images/Amex.png",
        discover: "images/Discover.png"
    },
    InfieldCommands = function() {
        function t(e) {
            csTop.LPInfieldFrame.close(e)
        }

        function e(e) {
            bg.InfieldCommands.editSite(e, !0)
        }

        function n(e) {
            bg.InfieldCommands.fillUserData(e, !0), t("action")
        }

        function i(e) {
            bg.InfieldCommands.copyUrl(e, !0)
        }

        function r(e) {
            bg.InfieldCommands.copyUserName(e, !0)
        }

        function a(e) {
            bg.InfieldCommands.copyPassword(e, !0, "formv2")
        }

        function o(e, n) {
            bg.InfieldCommands.setGeneratePasswordPrefs({
                prefstr: e,
                genpwstr: n
            })
        }

        function s(e) {
            bg.InfieldCommands.editFormFill(e, !0, "formv2"), t("action")
        }

        function c(e) {
            bg.InfieldCommands.fillForm(e, !0, "formv2"), t("action")
        }

        function l(e, n) {
            if (bg.is_firefox_webext()) {
                var t = Clipboard.utilities.createTextArea(e);
                t.focus(), t.select(), document.execCommand("copy"), document.body.removeChild(t)
            } else bg.copytoclipboard(e);
            g("copypass", {
                action: n,
                source: "formv2"
            })
        }

        function d(e) {
            bg.InfieldCommands.getGeneratePasswordPrefs(e)
        }

        function p(e, n) {
            bg.InfieldCommands.fillGeneratedPassword(e, n, !0), t("action")
        }

        function u(e, n, t) {
            bg.InfieldCommands.searchVault(e, n, t)
        }

        function f(e) {
            bg.InfieldCommands.getPopupFillData(e)
        }

        function g(e, n) {
            bg.sendLpImprove(e, n)
        }
        return {
            closePopup: t,
            copyToClipboard: l,
            editSite: e,
            fillUsernamePass: n,
            copyUrl: i,
            copyUserName: r,
            copyPassword: a,
            editFormFill: s,
            fillForm: c,
            getGeneratePrefs: d,
            writeAllPrefs: o,
            fillGeneratedPassword: p,
            searchVault: u,
            getInitialData: f,
            sendLpImprove: g
        }
    }();
! function(a) {
    var e = function(e, n, t) {
        var i = this;
        i._onResizeCallback = t, e && (e instanceof jQuery ? i._triggerElement = e : i._triggerElement = a("#" + e), n ? (i._triggerElement.click(function(e) {
            i.show(), i._setPosition(e)
        }), i._triggerElement.keypress(function(e) {
            i.show(), a(i._menuElement[0]).children().children()[0].focus(), i._setPosition(e)
        })) : (i._triggerElement.children().click(function(e) {
            i.show()
        }), i._triggerElement.children().keypress(function(e) {
            i.show(), a(i._menuElement[0]).children().children()[0].focus()
        })))
    };
    e.prototype._setPosition = function(e) {
        var n = a(e.currentTarget).offset();
        n.top += 20, n.left += 20, this._menuElement.offset(n)
    }, e.prototype.show = function() {
        a(".dropdown").hide(), a(".menuTriggered").removeClass("menuTriggered");
        var e = this,
            n;
        e._triggerElement.closest(".tile").addClass("menuTriggered"), e._triggerElement.addClass("menuTriggered"), this._menuElement && this._menuElement.show(0, function() {
            e._onResizeCallback && e._onResizeCallback(e._menuElement.height(), 90)
        })
    }, e.prototype.hide = function(e) {
        var n = this,
            t;
        n._triggerElement.closest(".tile").removeClass("menuTriggered"), n._triggerElement.removeClass("menuTriggered"), n._triggerElement.blur(), this._menuElement && (this._menuElement.hide(e), n._onResizeCallback())
    }, e.prototype.resetTimer = function(e) {
        var n = this;
        n._menuElement && (n._menuTimer = setTimeout(function() {
            n.hide()
        }, e || 1e3))
    }, e.prototype.createMenu = function(e, n, t) {
        var i = this;
        return i._menuElement = a("<div></div>").attr("id", e + "Menu").addClass("dropdown").addClass(n).hide().hover(function() {
            var e = i._triggerElement.closest(".tile");
            clearTimeout(i._menuTimer)
        }, function() {
            i.resetTimer(300)
        }).append(i._createMenuItems(t)), i._menuElement
    }, e.prototype._createMenuItems = function(e) {
        var n = this;
        n._menuItems = e;
        for (var t = a("<ul></ul>").addClass("menuList"), i = 0; i < n._menuItems.length; i++) {
            var r = a("<li></li>").attr("data-viewId", n._menuItems[i].id).attr("tabindex", "1").click(function(e) {
                n.hide(), n.select(e.currentTarget.getAttribute("data-viewId"), !0)
            }).focus(function() {
                clearTimeout(n._menuTimer)
            }).keypress(function(e) {
                n.hide(), n.select(e.currentTarget.getAttribute("data-viewId"), !0)
            }).append(a("<p></p>").text(n._menuItems[i].text));
            t.append(r)
        }
        return t
    }, e.prototype._findMenu = function(n) {
        var e = a.grep(this._menuItems, function(e) {
            return e.id === n
        });
        return e && 0 < e.length ? e[0] : null
    }, e.prototype.select = function(e, n) {
        var t = this._findMenu(e);
        t && this._triggerElement && this._triggerElement.find("p").text(t.selectedText), !0 === n && t && t.action && t.action()
    }, window.InfieldMenu = e
}(jQuery);
var InfieldView = function(t) {
        var n = [];

        function e(e) {
            Array.isArray(e) && 0 < e.length && (n = e, r())
        }

        function i(e) {
            -1 != n.indexOf(e) && (r(), t("#" + e).show())
        }

        function r() {
            t.each(n, function(e, n) {
                t("#" + n).hide()
            })
        }
        return {
            init: e,
            show: i
        }
    }(jQuery),
    InfieldGeneratePassword = function(a) {
        function e(n, e, t) {
            a("#moreOptions, #hideOptions").click(function() {
                s(), t && t()
            }), a("#length").on("input", function() {
                InfieldSearch.debounce(o(), 500)
            }), a(".pwgen").change(r), a("#generateBtn").click(r), a("#pronounceable").click(function() {
                a("#pronounceable").prop("checked") ? (a("#digits").prop("checked", !1), a("#digits").prop("disabled", !0), a("#special").prop("checked", !1), a("#special").prop("disabled", !0), a("#ambig").prop("checked", !1), a("#upper").prop("checked", !0), a("#lower").prop("checked", !0)) : (a("#digits").prop("checked", !0), a("#digits").prop("disabled", !1), a("#special").prop("checked", !0), a("#special").prop("disabled", !1))
            }), a("#ambig").click(function() {
                a("#ambig").prop("checked") && (a("#pronounceable").prop("checked", !1), a("#digits").prop("disabled", !1), a("#special").prop("disabled", !1))
            }), a("#password").on("copy", function() {
                bg.LPTabState.setCopiedGeneratedPassword(this.value)
            }).LP_addGeneratePasswordMeter(), bg.InfieldCommands.canCopy(function(e) {
                e ? a("#btnCopy").click(function() {
                    var e = a("#password").val();
                    n.copyToClipboard(e, "generatepassword"), a("#btnCopy").hide(), a("#copied").show(), setTimeout(function() {
                        a("#copied").hide(), a("#btnCopy").show()
                    }, 1e3), bg.LPTabState.setCopiedGeneratedPassword(e)
                }) : a("#btnCopy").hide()
            });
            var i = function() {
                var e = a("#password").val();
                n.fillGeneratedPassword(e, {
                    pronounceable: a("#pronounceable").prop("checked"),
                    length: a("#password").val().length,
                    expand: a("#moreOptions").is(":hidden"),
                    uppercase: a("#upper").prop("checked"),
                    lowercase: a("#lower").prop("checked"),
                    numeric: a("#digits").prop("checked"),
                    special: a("#special").prop("checked"),
                    avoidAmbiguous: a("#ambig").prop("checked"),
                    source: "formv2",
                    variation: "old",
                    generatedPasswordCount: a("#generatedPasswordCount").val()
                }), n.writeAllPrefs(JSON.stringify({
                    generate_pronounceable: a("#pronounceable").prop("checked") ? 1 : 0,
                    generate_length: a("#length").val(),
                    generate_upper: a("#upper").prop("checked") ? 1 : 0,
                    generate_lower: a("#lower").prop("checked") ? 1 : 0,
                    generate_digits: a("#digits").prop("checked") ? 1 : 0,
                    generate_special: a("#special").prop("checked") ? 1 : 0,
                    generate_ambig: a("#ambig").prop("checked") ? 1 : 0,
                    generate_mindigits: 2,
                    generate_reqevery: 0
                })), bg.GenPassHistory.add(e)
            };
            a("#fillPasswordBtn").click(i), a("#generateAndFillBtn").click(i), a("#generateAndFillBtn").keypress(i), a("#advancedView").hide(), a("#generateBtnContainer").hide()
        }

        function r() {
            a("#generatedPasswordCount").val(function() {
                return parseInt(a("#generatedPasswordCount").val()) + 1
            });
            var e = lpCreatePass(a("#length").val(), a("#upper").prop("checked"), a("#lower").prop("checked"), a("#digits").prop("checked"), a("#special").prop("checked"), 2, a("#ambig").prop("checked"), !0, a("#pronounceable").prop("checked"));
            a("#password").val(e).change(), bg.GenPassHistory.add(e)
        }

        function t() {
            var r = bg.get("g_prefoverrides").sitepwlen;
            r && (r = JSON.parse(r), bg.get_selected_tab_data_no_extension(null, function(e) {
                var n = bg.lp_gettld_url(e.url);
                if (r[n]) {
                    var t = r[n],
                        i = Math.max(a("#length").val(), t);
                    a("#length").attr({
                        min: t
                    }), a("#length").val(i), o()
                }
            }))
        }

        function n(e) {
            t();
            var n = JSON.parse(e.prefstr);
            a("#length").val(parseInt(n.generate_length)), o(), a("#upper").prop("checked", !!parseInt(n.generate_upper)), a("#lower").prop("checked", !!parseInt(n.generate_lower)), a("#digits").prop("checked", !!parseInt(n.generate_digits)), a("#special").prop("checked", !!parseInt(n.generate_special)), a("#ambig").prop("checked", !!parseInt(n.generate_ambig)), a("#advancedView").hide(), a("#generateAndFillView").show(), parseInt(n.generate_pronounceable) ? a("#pronounceable").click() : a("#pronounceable").prop("pronounceable", !1), a("#password").val(lpCreatePass(a("#length").val(), a("#upper").prop("checked"), a("#lower").prop("checked"), a("#digits").prop("checked"), a("#special").prop("checked"), 2, a("#ambig").prop("checked"), !0, a("#pronounceable").prop("checked"))).change()
        }

        function o() {
            a("#generatedPasswordLength").text(a("#length").val());
            var e = a("#length"),
                n = e.val(),
                t = e.attr("min"),
                i, r = (n - t) / (e.attr("max") - t) * 100;
            a("#sliderFill").width(r + "%")
        }

        function s() {
            a("#advancedView").toggle(), a("#generateAndFillView").toggle(), a("#generateBtnContainer").toggle(), a("#moreOptions").toggle()
        }

        function i() {
            a("#moreOptions").show(), a("#generateBtnContainer").hide()
        }

        function c() {
            a("#moreOptions").hide(), a("#generateBtnContainer").hide()
        }
        return {
            init: e,
            setup: n,
            show: i,
            hide: c
        }
    }(jQuery),
    InfieldTiles = function(l, d, p, u) {
        var f;

        function e(e, r, n, a, t, i) {
            f = t;
            var o = [];
            if (l("#menuContainer").empty(), l("#" + e).empty().append(l('<p class="italic"></p>').text(i)), n) {
                var s = l.map(n, function(e, n) {
                    return e
                });
                s.sort(function(e, n) {
                    return e
                }), l.each(s, function(e, n) {
                    var t = !1;
                    e + 1 === s.length && (t = !0);
                    var i = m(r, {
                        id: "sites" === r ? n.aid : n.ffid,
                        name: "sites" === r ? n.name : n.decprofilename,
                        description: "sites" === r ? n.unencryptedUsername : 1 == n.profiletype ? n.formattedCCNum : null,
                        icons: c(a, r, n),
                        moreText: "sites" === r ? u.translateString("More") : u.translateString("Edit"),
                        moreHandler: "sites" === r ? null : function() {
                            d.editFormFill(n.ffid)
                        },
                        clickHandler: "sites" === r ? function() {
                            csTop.Topics.publish(Topics.INFIELD_NOTIFICATION_FILLED), d.fillUsernamePass(n.aid)
                        } : function() {
                            d.fillForm(n.ffid)
                        },
                        lastTile: t
                    });
                    i && o.push(i)
                }), 0 < o.length && l("#" + e).empty().append(o)
            }
            return o.length
        }

        function c(e, n, t) {
            var i = "",
                r = "",
                a;
            if ("formfills" === n)
                if (0 == t.profiletype) i = InfieldIcons.profile;
                else switch (t.ccType) {
                    case "VISA":
                        i = InfieldIcons.visa;
                        break;
                    case "AMEX":
                        i = InfieldIcons.amex;
                        break;
                    case "MC":
                        i = InfieldIcons.mastercard;
                        break;
                    case "DISC":
                        i = InfieldIcons.discover;
                        break;
                    default:
                        i = InfieldIcons.other
                } else r = "icon-site", i = e && t.aid && e[t.aid] ? e[t.aid] : InfieldIcons.globe;
            return {
                normalEl: l("<img/>").attr("src", i).addClass("icon-default " + r)
            }
        }

        function g(e) {
            return l("<div></div>").addClass("col-2 no-left-gutter no-right-gutter").append(l("<div></div>").addClass("icon").append(e))
        }

        function m(e, n) {
            if (!n) return null;
            var t = null,
                i = l("<div></div>").addClass("col-8 text full-height"),
                r = l("<button></button>").attr("id", n.id + "btn").attr("tabindex", "1").text(n.moreText);
            switch (e) {
                case "formfills":
                    i.append(l("<span></span>").text(n.name)), n.description && i.removeClass("full-height").append(l("<br/>")).append(l("<span></span>").addClass("small").text(n.description));
                    break;
                case "sites":
                    i.append(l("<span></span>").addClass("small").text(n.name)), n.description && i.removeClass("full-height").append(l("<br/>")).append(l("<span></span>").text(n.description)), t = new p(r, !0, f);
                    var a = [{
                        id: "editSite",
                        text: u.translateString("Edit"),
                        action: function() {
                            d.editSite(n.id)
                        }
                    }];
                    bg.InfieldCommands.canCopy(function(e) {
                        e && (a.push({
                            id: "copyPassword",
                            text: u.translateString("Copy password"),
                            action: function() {
                                d.copyPassword(n.id)
                            }
                        }), a.push({
                            id: "copyUsername",
                            text: u.translateString("Copy username"),
                            action: function() {
                                d.copyUserName(n.id)
                            }
                        }), a.push({
                            id: "copyURL",
                            text: u.translateString("Copy URL"),
                            action: function() {
                                d.copyUrl(n.id)
                            }
                        })), l("#menuContainer").append(t.createMenu(n.id + "btn", "tileDropdown", a))
                    })
            }
            n.moreHandler && r.click(n.moreHandler);
            var o = l("<div></div>").addClass("col-2 no-right-gutter no-left-gutter pull-right more").append(r),
                s = g([n.icons.normalEl]);
            s.click(n.clickHandler), i.click(n.clickHandler);
            var c = l("<div></div>").addClass("tile col-12").attr("id", n.id).attr("tabindex", "1").append(l("<div></div>").addClass("row").append(s, i, o)).hover(function() {}, function() {
                c.removeClass("triggered")
            });
            return n.lastTile && c.addClass("lastTile"), r.focus(function() {
                c.addClass("triggered")
            }).blur(function() {
                c.removeClass("triggered")
            }).click(function() {
                c.addClass("menuTriggered"), c.removeClass("triggered")
            }), c
        }
        return {
            setup: e
        }
    }(jQuery, InfieldCommands, InfieldMenu, Strings),
    InfieldSearch = function(t) {
        var i, r, a, o, s, c;

        function e(n) {
            if (i = t("#searchContainer"), r = t("#currentTab"), a = t("#searchBtnContainer"), o = t("#inlineSearch"), s = t("#searchCloseBtn"), c = t("#searchBtn"), u(), t("#searchBtn").click(function() {
                    d()
                }).keypress(function() {
                    d()
                }), t("#searchCloseBtn").click(function() {
                    p(), n("")
                }).keypress(function() {
                    p(), n("")
                }), n) {
                var e = l(function(e) {
                    n(t(e.currentTarget).val())
                }, 500);
                o.keyup(e)
            }
        }

        function l(t, i) {
            var r;
            return function() {
                var e = this,
                    n = arguments;
                clearTimeout(r), r = setTimeout(function() {
                    r = null, t.apply(e, n)
                }, i)
            }
        }

        function d() {
            r.fadeOut(), i.show(), i.animate({
                width: "360px"
            }, 250, function() {
                s.show(), o.fadeIn().focus()
            }), c.addClass("searchBtnActive")
        }

        function p() {
            o.val(""), o.hide(), s.fadeOut(), i.show(), i.animate({
                width: "16px"
            }, 250, function() {
                a.fadeOut(), r.fadeIn()
            }), c.removeClass("searchBtnActive")
        }

        function u() {
            o.hide(), s.hide(), i.show().css({
                width: "16px"
            }), a.hide(), r.show(), c.removeClass("searchBtnActive")
        }

        function n() {
            i.show()
        }

        function f() {
            o.hide(), a.hide(), s.hide(), i.hide()
        }

        function g(e) {
            e && !0 === e ? n() : f()
        }
        return {
            init: e,
            debounce: l,
            showIcon: n,
            hideIcon: f,
            display: g
        }
    }(jQuery),
    lpInfield = function(o, s, n, c, l, d, p, e, t) {
        var u, f, i, g = t.translateString("No sites found for this web address. You can log in to this website to save your credentials"),
            r = t.translateString("No sites found matching your search."),
            m = t.translateString("No Form Fills saved. You can add one in your Vault."),
            a = t.translateString("No Form Fills found matching your search.");

        function h() {
            var e = Date.now();
            document.addEventListener("DOMContentLoaded", function() {
                y(function() {
                    var e;
                    t.translate(document.body), w(), I(), c.init(["sitesView", "formFillView", "generatePassView"]), v(), d.init(C), p.init(s, u, k), new MutationObserver(function() {
                        k()
                    }).observe(o(".infield-dialog")[0], {
                        subtree: !0,
                        childList: !0
                    }), s.getInitialData(P), o("#currentTabText").focus()
                })
            })
        }

        function w() {
            i = new e({
                $parentEl: o(".infield-dialog")
            }), b({
                position: 360
            })
        }

        function b(e) {
            i && e && e.position && o.isNumeric(e.position) && 10 < e.position && e.position < 370 && i.show("top", e.position)
        }

        function v() {
            var e = (u = new n("currentTab", null, k)).createMenu("navigation", null, [{
                id: "sitesView",
                text: t.translateString("Log in"),
                selectedText: t.translateString("Log in as"),
                action: function() {
                    f.type = "sites", P(f)
                }
            }, {
                id: "formFillView",
                text: t.translateString("Fill form"),
                selectedText: t.translateString("Fill form with"),
                action: function() {
                    f.type = "formfills", P(f)
                }
            }, {
                id: "generatePassView",
                text: t.translateString("Generate a password"),
                selectedText: t.translateString("Generate a password"),
                action: function() {
                    f.type = "generate", P(f)
                }
            }]);
            o("#navigationPlaceholder").append(e)
        }

        function I() {
            o("#btnClose").click(function() {
                s.closePopup("close")
            }), o("#btnClose").keypress(function() {
                s.closePopup("close")
            })
        }

        function y(i) {
            document.body.style.setProperty("display", "none", "important");
            var e = document.createElement("iframe");
            e.setAttribute("class", "backgroundFrame"), e.src = "backgroundFrame.html?lplanguage=" + encodeURIComponent(g_language), e.style.display = "none", e.addEventListener("load", function() {
                e.contentWindow.LPPlatform.getBackgroundInterface({
                    mainRequestFramework: !1,
                    interfaceDefinition: Interfaces.InfieldPopupInterface,
                    getData: !0,
                    context: "infieldPopup",
                    callback: function(e) {
                        window.bg = e
                    }
                }), e.contentWindow.Topics.get(e.contentWindow.Topics.REQUEST_FRAMEWORK_INITIALIZED).subscribe(function(e, n) {
                    var t = parseInt(e.topFrameID);
                    window.csTop = Interfaces.createInstance(Interfaces.ContentScriptInterface, {
                        direct: !1,
                        context: "infieldPopup",
                        requestFunction: function(e) {
                            n.sendRequest({
                                type: "contentScriptRequest",
                                data: e,
                                frameID: t
                            })
                        }
                    }), window.csTop.LPFrame.initializeRequestFramework(LPTools.getURLParams().dialogID, function(e) {
                        e && (document.body.style.removeProperty("display"), i && i())
                    })
                })
            }), document.body.appendChild(e)
        }

        function C(e) {
            s.searchVault(e, f.type, _)
        }

        function _(e) {
            var n = f.type;
            if (e) {
                var t = JSON.parse(e);
                if (t) switch (n) {
                    case "sites":
                        l.setup("sitesView", n, t.sites, t.bigicons, k, r);
                        break;
                    case "formfills":
                        l.setup("formFillView", n, t.formfills, null, k, a)
                }
            }
        }

        function k(e, n) {
            var t = o(".infield-dialog").outerHeight() + 20,
                i = o(".infield-dialog").outerWidth() + 10;
            e && o.isNumeric(e) && (t += e), n && o.isNumeric(n) && (i += n), csTop.LPInfieldFrame.resizeFrame(t, i)
        }

        function P(e) {
            if (e) {
                var n = 0;
                if ((f = e).type) switch (e.type) {
                    case "sites":
                        if (e.fillData.sites) {
                            var t = JSON.parse(e.fillData.sites),
                                i = e.fillData.bigIcons ? JSON.parse(e.fillData.bigIcons) : null,
                                r = l.setup("sitesView", e.type, t, i, k, g);
                            u.select("sitesView"), c.show("sitesView"), d.display(2 < r), p.hide(), n = Object.keys(t).length
                        }
                        break;
                    case "formfills":
                        var a = e.fillData.formFills ? JSON.parse(e.fillData.formFills) : {},
                            r = l.setup("formFillView", e.type, a, null, k, m);
                        u.select("formFillView"), c.show("formFillView"), d.display(2 < r), p.hide(), n = Object.keys(a).length;
                        break;
                    case "generate":
                        s.getGeneratePrefs(p.setup), u.select("generatePassView"), c.show("generatePassView"), d.display(!1), p.show()
                }
                csTop.LPInfieldFrame.positionFrame(function(e) {
                    csTop.Topics.publish(Topics.INFIELD_NOTIFICATION_OPENED, e)
                }), csTop.LPInfieldFrame.show(), o(".infield-dialog").show()
            } else s.closePopup("close")
        }
        return {
            init: h,
            setArrowPosition: b
        }
    }(jQuery, InfieldCommands, InfieldMenu, InfieldView, InfieldTiles, InfieldSearch, InfieldGeneratePassword, lpArrow, Strings);
lpInfield && lpInfield.init();
//# sourceMappingURL=sourcemaps/lpInfield.js.map