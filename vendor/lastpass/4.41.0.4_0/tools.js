"undefined" != typeof LPPlatform && LPPlatform.addEventListener(document, "keydown", function(e) {
        try {
            var t;
            switch (e.keyCode || e.which) {
                case 13:
                    "checkbox" !== e.target.type ? Topics.get(Topics.ENTER).publish(e) : e.target.checked = !e.target.checked;
                    break;
                case 27:
                    Topics.get(Topics.ESCAPE).publish(e);
                    break;
                case 37:
                    Topics.get(Topics.LEFT_ARROW).publish(e);
                    break;
                case 38:
                    Topics.get(Topics.UP_ARROW).publish(e);
                    break;
                case 39:
                    Topics.get(Topics.RIGHT_ARROW).publish(e);
                    break;
                case 40:
                    Topics.get(Topics.DOWN_ARROW).publish(e)
            }
        } catch (e) {
            LPPlatform.logException(e)
        }
    }), LPTools = {},
    function(D) {
        var t = [],
            i, a;
        D.setDragItems = function(e) {
                t = e
            }, D.getDragItems = function() {
                return t
            }, D.buildItemButton = function(e) {
                var t = Constants.ACTION_BUTTONS[e];
                return D.createElement("button", {
                    class: "itemButton " + t.css,
                    vaultaction: e,
                    title: Strings.Vault[t.title],
                    allowmultiple: !1
                })
            }, D.setupMiddleEllipsis = function(e) {
                var t = e.find(".textOverflowContainer"),
                    n = Math.ceil(t.get(0).children[0].getBoundingClientRect().width),
                    i = n + Math.ceil(e.find(".textTail").get(0).getBoundingClientRect().width),
                    o = i - n;
                t.css("max-width", i), t.css("padding-right", o), t.css("margin-right", -o)
            }, D.requireBinary = function(e) {
                bg.have_binary() ? e() : LPPlatform.supportsBinary() ? dialogs.confirmation.open({
                    title: Strings.translateString("Install Binary Component"),
                    text: Strings.translateString("This feature requires the binary version of this browser extension. Would you like to install it now?"),
                    handler: function() {
                        LPPlatform.installBinary()
                    }
                }) : dialogs.alert.open({
                    title: Strings.translateString("Not Supported"),
                    text: Strings.translateString("This feature requires an external binary component, which is currently not supported on this platform.")
                })
            }, D.isType = function(e, t) {
                return Object.prototype.toString.call(e) === "[object " + t + "]"
            }, D.getURLParams = function() {
                var e = {},
                    t = document.location.href.split("?");
                if (2 === t.length)
                    for (var n = t[1].split("&"), i = 0; i < n.length; ++i) {
                        var o = n[i].split("=");
                        2 === o.length && (e[o[0]] = o[1])
                    }
                return e
            }, D.setContent = function(e, t) {
                if (e.empty(), t)
                    if ("string" == typeof t) {
                        for (var n = t.indexOf("<br/>"); - 1 < n;) e.append(document.createTextNode(t.substring(0, n))), e.append(document.createElement("br")), n = (t = t.substring(n + 5)).indexOf("<br/>");
                        e.append(document.createTextNode(t))
                    } else if (D.isType(t, "Array"))
                    for (var i = 0, o = t.length; i < o; ++i) {
                        var r = t[i];
                        "string" == typeof r && (r = D.createElement("p", "dialogText", r)), e.append(r)
                    } else e.append(t)
            }, D.hideContextMenu = function(e) {
                null !== e && (e.removeClass("bottomAligned"), e.hide(), D.removeKeyBoardNavigation())
            }, D.displayContextMenu = function(e, t) {
                var n = $(t);
                return e.clientY > window.innerHeight / 2 ? (n.addClass("bottomAligned"), n.css("bottom", window.innerHeight - e.clientY), n.css("top", "")) : (n.css("top", e.clientY), n.css("bottom", "")), n.css("left", e.clientX), n.show(), n
            }, D.getProperties = function(e) {
                var t = [];
                for (var n in e) t.push(n);
                return t
            }, D.openAlerts = (i = function(e, t, n) {
                return function() {
                    "function" == typeof e && e(), D.openAlerts(t, n)
                }
            }, function(e, t) {
                if (0 < e.length) {
                    var n = e.shift();
                    $.extend(n, {
                        handler: i(n.handler, e, t),
                        closeHandler: i(n.closeHandler, e, t)
                    }), dialogs[n.type].open(n)
                } else t && t()
            }), D.buildDialogItemContainer = function(e) {
                for (var t = D.createElement("div", "dialogItemContainer noSelect"), n = {
                        display: VaultItemBaseDisplay.prototype.DISPLAY_LIST,
                        allowDrag: !1,
                        additionalItemClasses: "dialogItem noItemButtons"
                    }, i = 0, o = e.length; i < o; ++i) {
                    var r = e[i].newDisplayObject();
                    t.appendChild(r.build(n))
                }
                return t
            }, D.buildEmptyPlaceholder = function(e, t, n) {
                var i;
                return i = "ul" === n.tagName.toLocaleLowerCase() ? D.createElement("li", "emptyPlaceholder " + t, e) : D.createElement("div", "emptyPlaceholder " + t, e)
            }, D.get_gmt_timestamp = function() {
                var e, t = (new Date).getTime(),
                    n;
                return parseInt(t / 1e3)
            }, D.ContextMenuItem = function(u, N) {
                this.getAction = function() {
                    return u
                }, this.build = function(e, t, n) {
                    var i = void 0 !== N && void 0 !== N.divider && N.divider,
                        o = void 0 !== N && void 0 !== N.submenu && N.submenu,
                        r = null;
                    i && (r = "divider"), o && (r += " subMenuOption");
                    var a = D.createElement("li", {
                            class: r,
                            vaultaction: u
                        }),
                        s, E, T, l, c, O;
                    if (void 0 === N || void 0 === N.text ? a.textContent = Strings.Vault[Constants.CONTEXT_MENU_ITEMS[u]] : a.textContent = N.text, e.appendChild(a), o) {
                        a.appendChild(D.createElement("div"));
                        var _ = D.createElement("ul", "subMenu");
                        a.appendChild(_), s = $(a), E = $(_), T = null, l = !1, c = function() {
                            l && (E.hide("fast"), D.addKeyBoardNavigation(e.children), Topics.get(Topics.LEFT_ARROW).unsubscribe(c))
                        }, O = function(e) {
                            l = !0, n(e), Topics.get(Topics.LEFT_ARROW).subscribe(c)
                        }, s.bind("click", O), s.bind("mouseenter", function(e) {
                            T = setTimeout(function() {
                                O(e)
                            }, 200)
                        }), s.bind("mouseleave", function() {
                            T && clearTimeout(T), c()
                        })
                    } else LPPlatform.addEventListener(a, "click", t)
                }
            }, D.parseUserSpecificMenu = function(e, t) {
                for (var n = e.firstElementChild; n;) {
                    var i = n.getAttribute("user");
                    if (null !== i) {
                        for (var o = i.split("|"), r = !0, a = 0, s = o.length; a < s; ++a)
                            if (t === o[a]) {
                                r = !1;
                                break
                            } r ? $(n).hide() : n.removeAttribute("style")
                    }
                    D.parseUserSpecificMenu(n, t), n = n.nextElementSibling
                }
            }, D.buildSentShareItems = function(e, t) {
                var n = [];
                if (t)
                    for (var i = 0, o = t.length; i < o; ++i) {
                        var r = t[i];
                        "1" === r.state ? n.push(new AcceptedSentSharedItem(e, r)) : "2" === r.state ? n.push(new DeclinedSentSharedItem(e, r)) : n.push(new PendingSentSharedItem(e, r))
                    }
                return n
            }, D.openShareDialog = function(t, e) {
                if (t && 1 === t.length && void 0 === e) return LPRequest.makeDataRequest(LPProxy.getSentShareData, {
                    params: {
                        id: t[0].getID()
                    },
                    requestSuccessOptions: {
                        closeDialog: !1
                    },
                    success: function(e) {
                        D.openShareDialog(t, e)
                    },
                    error: function() {
                        Topics.get(Topics.DIALOG_LOADED).publish()
                    }
                }), void Topics.get(Topics.DIALOG_LOADING).publish();
                if (!e || dialogs.share.loadedJS()) {
                    var n = e ? D.buildSentShareItems(t[0], e.sent[t[0].getID()]) : null,
                        i = e ? e.friends : null;
                    dialogs.share.open(t, n, i)
                } else dialogs.share.loadJS(function() {
                    D.openShareDialog(t, e)
                })
            }, D.objectsToArray = function() {
                for (var e = [], t = 0, n = arguments.length; t < n; ++t) {
                    var i = arguments[t];
                    for (var o in i) e.push(i[o])
                }
                return e
            }, D.createEventHandler = function(t) {
                return function(e) {
                    t.handleEvent(e)
                }
            }, D.getAttribute = function(e, t, n) {
                for (var i = t.getAttribute(n); null === i && t !== e && null !== (t = t.parentElement);) i = t.getAttribute(n);
                return i
            }, D.removeDOMChildren = function(e) {
                if (e)
                    for (var t = e.childNodes.length; t--;) e.removeChild(e.lastChild)
            }, D.removeDOMChildrenFrom = function(e, t) {
                if (e)
                    for (; t;) {
                        var n = t;
                        t = t.nextElementSibling, e.removeChild(n)
                    }
            }, D.createElement = (a = function(e, t, n) {
                n instanceof Array ? e.setAttribute(t, n.join(" ")) : e.setAttribute(t, n)
            }, function(e, t, n) {
                var i = document.createElement(e);
                if (("string" == typeof t || t instanceof Array) && (t = {
                        class: t
                    }), "input" !== e && "textarea" !== e || (t = $.extend(t, {
                        spellcheck: !1
                    })), "object" == typeof t)
                    for (var o in t) {
                        var r = t[o];
                        null != r && a(i, o, r)
                    }
                return void 0 !== n && (i.textContent = n), i
            }), D.addClass = function(e, t) {
                if (null !== e) {
                    t instanceof Array && (t = t.join(" "));
                    var n = e.getAttribute("class");
                    n && (t = n + " " + t), e.setAttribute("class", t)
                }
            }, D.getOption = function(e, t, n) {
                var i = n;
                return e && void 0 !== e[t] && (i = e[t]), i
            },
            function() {
                var r = null,
                    a = -1,
                    s = "hover",
                    E = "navindex",
                    o = "[" + E + "]",
                    T = null,
                    l = null,
                    c = null,
                    O = null,
                    _ = null,
                    u = null,
                    N = [],
                    C = null,
                    i = function(e) {
                        return r && -1 < e && e < r.length ? r[e] : null
                    },
                    n = function(e, t) {
                        if (a !== e && (d(a), u)) {
                            var n = u[a];
                            n && "function" == typeof n.navigateFrom && u[a].navigateFrom()
                        }
                        currentTarget = i(a = e), currentTarget && (currentTarget.addClass(s), t && _ && _.focusHandler && _.focusHandler(currentTarget))
                    },
                    d = function(e) {
                        var t = i(e);
                        t && t.removeClass(s)
                    },
                    p = function(e) {
                        var t = e.closest(o),
                            n = parseInt(t.attr(E)),
                            i = r[n];
                        return i && i.get(0) === t.get(0) ? n : -1
                    },
                    t = function(e) {
                        O = !0, $(document.body).unbind("mousemove", t)
                    };
                D.disableMouse = function(e) {
                    O && (O = !1, $(document.body).bind("mousemove", t))
                };
                var A = function(e) {
                        if (O) {
                            var t = $(e.target);
                            n(p(t))
                        }
                    },
                    I = function(e) {
                        if (O) {
                            var t = $(e.target);
                            d(p(t))
                        }
                    },
                    S = function(e) {
                        var t = e.offsetParent();
                        t.scrollTop(Math.max(t.scrollTop() + t.height(), t.scrollTop() + e.position().top + e.outerHeight()) - t.height())
                    },
                    f = function(e) {
                        var t = e.offsetParent();
                        t.scrollTop(Math.min(t.scrollTop(), t.scrollTop() + e.position().top))
                    },
                    h = function(e) {
                        var t = null;
                        a === r.length - 1 ? f(r[t = 0]) : S(r[t = a + 1]), n(t, !0), D.disableMouse(), e.preventDefault(), e.stopPropagation()
                    },
                    g = function(e) {
                        var t = null;
                        a < 1 ? (t = r.length - 1, S(r[t])) : R(t = a - 1) ? S(r[t]) : f(r[t]), n(t, !0), D.disableMouse(), e.preventDefault(), e.stopPropagation()
                    },
                    R = function(e) {
                        if (!isFinite(e)) return !1;
                        var t = r[e];
                        if (!t) return !1;
                        var n = t.offsetParent(),
                            i, o;
                        return !!n && n.height() < t.offset().top
                    },
                    v = function(e) {
                        if (e) {
                            var t = new Event(T, {
                                bubbles: !0
                            });
                            e.get(0).dispatchEvent(t)
                        }
                    },
                    m = function(e, t, n) {
                        if (e) {
                            var i = e[t];
                            if (i && "function" == typeof i[n = "arrow" + n.substr(0, 1).toUpperCase() + n.substr(1).toLowerCase() + "Override"]) return i[n]()
                        }
                        return !0
                    },
                    e = function(e) {
                        var t = m(u, a, e);
                        if (t)
                            for (var n = N.length - 1; 0 <= n && t; --n) {
                                var i = N[n];
                                t = m(i.options.displayItems, i.navIndex, e)
                            }
                        return t
                    },
                    P = e.bind(this, "left"),
                    M = e.bind(this, "right"),
                    b = function() {
                        if (u) {
                            var e = u[a];
                            if (e && "function" == typeof e.keyboardEnterOverride) return e.keyboardEnterOverride()
                        }
                        return !0
                    },
                    L = function() {
                        if (M() && c) {
                            var e = i(a);
                            if (e) {
                                if (l) {
                                    var t = e.find(l);
                                    t.length && (e = t)
                                }
                                v(e), D.disableMouse()
                            }
                        }
                        return !c
                    },
                    U = function() {
                        return P()
                    },
                    y = function() {
                        return b() && v(i(a)), !1
                    };
                D.setNavIndex = function(e) {
                    n(e);
                    var t = i();
                    t && t.get(0).scrollIntoView()
                }, D.getNavIndex = function() {
                    return a
                }, D.addKeyBoardNavigation = function(e, t) {
                    if (0 < e.length) {
                        C = {
                            elements: e,
                            options: t
                        }, r = [], a = -1, null === O && (O = !0), T = D.getOption(t, "mouseEvent", "click"), l = D.getOption(t, "rightArrowSelector", null), c = D.getOption(t, "useRightArrow", !0), u = D.getOption(t, "displayItems", null), _ = t;
                        for (var n = 0, i = e.length; n < i; ++n) {
                            var o = $(e[n]);
                            o.attr(E, n), o.unbind("mouseenter", A), o.bind("mouseenter", A), o.unbind("mouseleave", I), o.bind("mouseleave", I), o.hasClass(s) && (a = n), r.push(o)
                        }
                        Topics.get(Topics.DOWN_ARROW).subscribe(h), Topics.get(Topics.UP_ARROW).subscribe(g), Topics.get(Topics.ENTER).subscribeFirst(y), Topics.get(Topics.RIGHT_ARROW).subscribeFirst(L), Topics.get(Topics.LEFT_ARROW).subscribeFirst(U), D.getOption(t, "selectFirst", !1) && D.setNavIndex(0)
                    } else D.removeKeyBoardNavigation()
                }, D.removeKeyBoardNavigation = function() {
                    if (r)
                        for (var e = 0, t = r.length; e < t; ++e) r[e].unbind("mouseenter", A), r[e].unbind("mouseleave", I);
                    Topics.get(Topics.DOWN_ARROW).unsubscribe(h), Topics.get(Topics.UP_ARROW).unsubscribe(g), Topics.get(Topics.RIGHT_ARROW).unsubscribe(L), Topics.get(Topics.LEFT_ARROW).unsubscribe(U), Topics.get(Topics.ENTER).unsubscribe(y)
                }, D.pushKeyBoardNavigation = function(e, t) {
                    C && C.elements !== e && (C.navIndex = a, N.push(C)), D.removeKeyBoardNavigation(), D.addKeyBoardNavigation(e, t)
                }, D.popKeyBoardNavigation = function() {
                    var e = N.pop();
                    e && (D.removeKeyBoardNavigation(), D.addKeyBoardNavigation(e.elements, $.extend({}, e.options, {
                        selectFirst: !1
                    })))
                }
            }(), D.addZebraStriping = function(e) {
                for (var t = $(e).find("tr"), n = 0, i = t.length; n < i; ++n) n % 2 != 0 ? $(t[n]).addClass("odd") : $(t[n]).removeClass("odd")
            };
        var s = function(e) {
            var t = e.target.previousElementSibling;
            t.checked = !t.checked
        };
        D.buildCheckbox = function(e, t) {
            var n = t ? t.checkboxAttributes : void 0;
            n = $.extend(n, {
                class: "checkbox",
                type: "checkbox"
            });
            var i = D.createElement("input", n),
                o = D.createElement("label", e, D.getOption(t, "text", void 0));
            D.getOption(t, "addClickHandler", !0) && LPPlatform.addEventListener(o, "click", s);
            var r = D.createElement("div");
            return r.appendChild(i), r.appendChild(o), r
        }, D.buildRadioButton = function(e, t, n) {
            var i = D.createElement("input", {
                    class: "radio",
                    type: "radio",
                    name: e
                }),
                o = D.createElement("label", t, n);
            LPPlatform.addEventListener(o, "click", s);
            var r = D.createElement("div");
            return r.appendChild(i), r.appendChild(o), r
        }, D.hasProperties = function(e) {
            if (e)
                for (var t in e)
                    if (e.hasOwnProperty(t)) return !0;
            return !1
        }, D.createSelectElement = function(e, t) {
            var n = D.createElement("select", t);
            return $(n).addClass("dialogInput selectDropdown"), D.setSelectOptions(n, e), n
        }, D.setSelectOptions = function(e, t) {
            D.removeDOMChildren(e);
            for (var n = 0, i = t.length; n < i; ++n) {
                var o = t[n],
                    r = "object" == typeof o ? o.value : o,
                    a = "object" == typeof o && o.label ? o.label : r;
                e.appendChild(D.createElement("option", {
                    value: r
                }, a))
            }
        }
    }(LPTools), Constants = {
        ACTION_OPEN_MOVE_TO_SUB_FOLDER_MENU: "openMoveToSubFolderMenu",
        ACTION_OPEN_MOVE_TO_FOLDER_MENU: "openMoveToFolderMenu",
        ACTION_MOVE_TO_FOLDER: "moveToFolder",
        ACTION_SAVE: "save",
        ACTION_DELETE: "delete",
        ACTION_SHARE: "share",
        ACTION_COPY_USERNAME: "copyUsername",
        ACTION_COPY_PASSWORD: "copyPassword",
        ACTION_COPY_ADDRESS_1: "copyAddress1",
        ACTION_COPY_ADDRESS_2: "copyAddress2",
        ACTION_COPY_CITY_SLASH_TOWN: "copyCitySlashTown",
        ACTION_COPY_ZIP_SLASH_POSTAL_CODE: "copyZipSlashPostalCode",
        ACTION_COPY_EMAIL_ADDRESS: "copyEmailAddress",
        ACTION_COPY_PHONE_NUMBER: "copyPhoneNumber",
        ACTION_COPY_BANK_NAME: "copyBankName",
        ACTION_COPY_ACCOUNT_NUMBER: "copyAccountNumber",
        ACTION_COPY_ROUTING_NUMBER: "copyRoutingNumber",
        ACTION_COPY_NAME_ON_CARD: "copyNameOnCard",
        ACTION_COPY_SECURITY_CODE: "copySecurityCode",
        ACTION_COPY_GROUP_ID: "copyGroupId",
        ACTION_COPY_MEMBER_ID: "copyMemberId",
        ACTION_COPY_POLICY_NUMBER: "copyPolicyNumber",
        ACTION_COPY_MEMBERSHIP_NUMBER: "copyMembershipNumber",
        ACTION_COPY_NUMBER: "copyNumber",
        ACTION_COPY_LICENSE_KEY: "copyLicenseKey",
        ACTION_COPY_ORDER_NUMBER: "copyOrderNumber",
        ACTION_COPY_SSH_PASSPHRASE: "copySshPassphrase",
        ACTION_COPY_SSH_PUBLIC_KEY: "copySshPublicKey",
        ACTION_COPY_HOSTNAME: "copyHostname",
        ACTION_COPY_NOTE_USERNAME: "copyUsername",
        ACTION_COPY_NOTE_PASSWORD: "copyPassword",
        ACTION_COPY_URL: "copyURL",
        ACTION_EDIT: "edit",
        ACTION_LAUNCH: "launch",
        ACTION_GO_TO_URL: "goToURL",
        ACTION_TOGGLE_OPEN: "toggleOpen",
        ACTION_RENAME: "rename",
        ACTION_CONVERT: "convert",
        ACTION_ACCEPT: "acceptShare",
        ACTION_REJECT: "rejectShare",
        ACTION_ENABLE: "enable",
        ACTION_TOGGLE_SELECT: "toggleSelect",
        ACTION_CREATE_SUB_FOLDER: "createSubFolder",
        ACTION_OPEN_ALL: "openAll",
        ACTION_OPEN_MORE_OPTIONS: "openMoreOptions",
        ACTION_OPEN_IN_CONTEXT_OPTIONS: "openInContextOptions",
        ACTION_COPY_NOTE: "copyNote",
        ACTION_FILL: "fillForm",
        ACTION_OPEN: "open",
        ACTION_REVOKE: "revoke",
        ACTION_EMAIL: "email",
        ACTION_CANCEL: "cancel",
        ACTION_REMOVE: "remove",
        ACTION_PURGE: "purge",
        ACTION_PURGE_SHARED_FOLDER: "purgeSharedFolder",
        ACTION_RESTORE: "restore",
        ACTION_RESTORE_SHARED_FOLDER: "restoreSharedFolder",
        ACTION_UNLINK: "unlink",
        ACTION_STOP_DOWNLOADING: "stopDownloading",
        ACTION_START_DOWNLOADING: "startDownloading",
        ACTION_FILL_SITE: "fillSite",
        ACTION_CLONE: "clone",
        ACTION_ADD: "add",
        ACTION_MANAGE: "manage",
        ACTION_ACCESS: "access",
        ACTION_COPY_KEY: "copyKey",
        ACTION_DASHBOARD: "dashboard",
        ACTION_UPGRADE: "upgrade",
        ACTION_DO_NOTHING: "doNothing",
        USER_FREE: "Free User",
        USER_PREMIUM: "Premium User",
        USER_PREMIUM_TRIAL: "Premium Trial User",
        USER_ENTERPRISE: "Enterprise User",
        USER_ENTERPRISE_ADMIN: "Enterprise Admin",
        USER_ENTERPRISE_ROLE: "Enterprise Role User",
        USER_TEAMS: "Teams User",
        USER_TEAMS_ADMIN: "Teams Admin",
        USER_FAMILY: "Family User",
        USER_FAMILY_ADMIN: "Family Admin",
        UNAFFILIATED_COMPANY_ID: "0",
        EmailAddressRegularExpression: /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*/g
    },
    function(e) {
        e.ACTION_BUTTONS = {}, e.ACTION_BUTTONS[e.ACTION_EDIT] = {
            title: "EDIT",
            css: e.ACTION_EDIT
        }, e.ACTION_BUTTONS[e.ACTION_SHARE] = {
            title: "SHARE",
            css: e.ACTION_SHARE
        }, e.ACTION_BUTTONS[e.ACTION_DELETE] = {
            title: "DELETE",
            css: e.ACTION_DELETE
        }, e.ACTION_BUTTONS[e.ACTION_ACCEPT] = {
            title: "ACCEPT",
            css: e.ACTION_ACCEPT
        }, e.ACTION_BUTTONS[e.ACTION_REJECT] = {
            title: "REJECT",
            css: e.ACTION_REJECT
        }, e.ACTION_BUTTONS[e.ACTION_LAUNCH] = {
            title: "LAUNCH",
            css: null
        }, e.ACTION_BUTTONS[e.ACTION_ENABLE] = {
            title: "ENABLE",
            css: null
        }, e.ACTION_BUTTONS[e.ACTION_ACCESS] = {
            title: "REQUEST_ACCESS",
            css: null
        }, e.ACTION_BUTTONS[e.ACTION_REVOKE] = {
            title: "REVOKE",
            css: e.ACTION_REJECT
        }, e.ACTION_BUTTONS[e.ACTION_EMAIL] = {
            title: "RESEND",
            css: e.ACTION_EMAIL
        }, e.ACTION_BUTTONS[e.ACTION_CANCEL] = {
            title: "CANCEL_INVITE",
            css: e.ACTION_REJECT
        }, e.ACTION_BUTTONS[e.ACTION_REMOVE] = {
            title: "REMOVE",
            css: e.ACTION_REJECT
        }, e.ACTION_BUTTONS[e.ACTION_PURGE] = {
            title: "PURGE",
            css: e.ACTION_DELETE
        }, e.ACTION_BUTTONS[e.ACTION_PURGE_SHARED_FOLDER] = {
            title: "PURGE",
            css: e.ACTION_DELETE
        }, e.ACTION_BUTTONS[e.ACTION_RESTORE] = {
            title: "RESTORE",
            css: e.ACTION_RESTORE
        }, e.ACTION_BUTTONS[e.ACTION_RESTORE_SHARED_FOLDER] = {
            title: "RESTORE",
            css: e.ACTION_RESTORE
        }, e.ACTION_BUTTONS[e.ACTION_MANAGE] = {
            title: "MANAGE",
            css: e.ACTION_EDIT
        }, e.ACTION_BUTTONS[e.ACTION_UNLINK] = {
            title: "UNLINK",
            css: e.ACTION_DELETE
        }, e.CONTEXT_MENU_ITEMS = {}, e.CONTEXT_MENU_ITEMS[e.ACTION_EDIT] = "EDIT", e.CONTEXT_MENU_ITEMS[e.ACTION_SHARE] = "SHARE", e.CONTEXT_MENU_ITEMS[e.ACTION_DELETE] = "DELETE", e.CONTEXT_MENU_ITEMS[e.ACTION_GO_TO_URL] = "GO_TO_URL", e.CONTEXT_MENU_ITEMS[e.ACTION_COPY_USERNAME] = "COPY_USERNAME", e.CONTEXT_MENU_ITEMS[e.ACTION_COPY_PASSWORD] = "COPY_PASSWORD", e.CONTEXT_MENU_ITEMS[e.ACTION_COPY_URL] = "COPY_URL", e.CONTEXT_MENU_ITEMS[e.ACTION_OPEN_MOVE_TO_FOLDER_MENU] = "MOVE_TO_FOLDER", e.CONTEXT_MENU_ITEMS[e.ACTION_OPEN_MOVE_TO_SUB_FOLDER_MENU] = "MOVE_TO_SUB_FOLDER", e.CONTEXT_MENU_ITEMS[e.ACTION_ACCEPT] = "ACCEPT", e.CONTEXT_MENU_ITEMS[e.ACTION_REJECT] = "REJECT", e.CONTEXT_MENU_ITEMS[e.ACTION_ENABLE] = "ENABLE", e.CONTEXT_MENU_ITEMS[e.ACTION_RENAME] = "RENAME_FOLDER", e.CONTEXT_MENU_ITEMS[e.ACTION_CONVERT] = "CONVERT_FOLDER_TO_LEGACY", e.CONTEXT_MENU_ITEMS[e.ACTION_CREATE_SUB_FOLDER] = "CREATE_SUB_FOLDER", e.CONTEXT_MENU_ITEMS[e.ACTION_OPEN_ALL] = "OPEN_ALL", e.CONTEXT_MENU_ITEMS[e.ACTION_COPY_NOTE] = "COPY_NOTE", e.CONTEXT_MENU_ITEMS[e.ACTION_COPY_KEY] = "COPY_KEY", e.CONTEXT_MENU_ITEMS[e.ACTION_FILL] = "FILL", e.CONTEXT_MENU_ITEMS[e.ACTION_OPEN] = "OPEN", e.CONTEXT_MENU_ITEMS[e.ACTION_SAVE] = "SAVE", e.CONTEXT_MENU_ITEMS[e.ACTION_REVOKE] = "REVOKE", e.CONTEXT_MENU_ITEMS[e.ACTION_EMAIL] = "RESEND", e.CONTEXT_MENU_ITEMS[e.ACTION_CANCEL] = "CANCEL_INVITE", e.CONTEXT_MENU_ITEMS[e.ACTION_REMOVE] = "REMOVE", e.CONTEXT_MENU_ITEMS[e.ACTION_PURGE] = "PURGE", e.CONTEXT_MENU_ITEMS[e.ACTION_PURGE_SHARED_FOLDER] = "PURGE", e.CONTEXT_MENU_ITEMS[e.ACTION_RESTORE] = "RESTORE", e.CONTEXT_MENU_ITEMS[e.ACTION_RESTORE_SHARED_FOLDER] = "RESTORE", e.CONTEXT_MENU_ITEMS[e.ACTION_UNLINK] = "UNLINK_PERSONAL", e.CONTEXT_MENU_ITEMS[e.ACTION_STOP_DOWNLOADING] = "STOP_DOWNLOADING", e.CONTEXT_MENU_ITEMS[e.ACTION_START_DOWNLOADING] = "START_DOWNLOADING", e.CONTEXT_MENU_ITEMS[e.ACTION_FILL_SITE] = "AUTO_FILL", e.CONTEXT_MENU_ITEMS[e.ACTION_CLONE] = "CLONE", e.CONTEXT_MENU_ITEMS[e.ACTION_MANAGE] = "MANAGE_FOLDER", e.CONTEXT_MENU_ITEMS[e.ACTION_ACCESS] = "REQUEST_ACCESS", e.CONTEXT_MENU_ITEMS[e.ACTION_DASHBOARD] = "OPEN_DASHBOARD", e.CONTEXT_MENU_ITEMS[e.ACTION_UPGRADE] = "UPGRADE_PREMIUM", e.HISTORY_TYPES = {
            PASSWORD: 0,
            USERNAME: 1,
            NOTE: 2
        }
    }(Constants),
    function(T) {
        var i, l, c, O, n;
        T.fn.extend({
            LP_show: function() {
                return this.removeClass("displaynone"), this
            },
            LP_hide: function() {
                return this.addClass("displaynone"), this
            },
            LP_removeAttr: function(e) {
                for (var t = 0, n = this.length; t < n; ++t) this.get(t).removeAttribute(e)
            },
            LP_addSearchHandlers: function(e, t) {
                var n = T(LPTools.createElement("div", "searchInputContainer"));
                this.before(n), n.append(this);
                var i = "searchCloseButton";
                e && (i += " " + e);
                var o = T(LPTools.createElement("div", {
                    class: i,
                    title: Strings.translateString("Clear Search")
                }));
                n.append(o);
                var r = function(e) {
                        0 < e.length ? n.addClass("populated") : n.removeClass("populated")
                    },
                    a, s = function(e) {
                        clearTimeout(a), a = setTimeout(function() {
                            try {
                                t(e)
                            } catch (e) {
                                LPPlatform.logException(e)
                            }
                        }, 150)
                    },
                    E;
                return E = this, o.bind("click", function(e) {
                    E.val(""), e.stopPropagation(), e.preventDefault()
                }), this.LP_input("search", function(e) {
                    r(e), s(e)
                }), this
            },
            LP_createToggle: (n = function(e) {
                if ("INPUT" === e.nodeName && "checkbox" === e.getAttribute("type") && "LABEL" === e.nextElementSibling.nodeName) {
                    var t = LPTools.createElement("div", "toggleButton");
                    t.appendChild(LPTools.createElement("div")), e.nextElementSibling.appendChild(t)
                }
            }, function() {
                for (var e = 0, t = this.length; e < t; ++e) n(this.get(e));
                return this
            }),
            LP_addPasswordEye: (i = function(e, t, n) {
                e.passwordShown = !0, e.attr("type", "text"), t.attr("title", Strings.Vault.HIDE_PASSWORD), t.addClass("selected"), n && t.text(Strings.Vault.HIDE)
            }, l = function(e, t, n) {
                e.passwordShown = !1, e.attr("type", "password"), t.attr("title", Strings.Vault.SHOW_PASSWORD), t.removeClass("selected"), n && t.text(Strings.Vault.SHOW)
            }, c = function(e, t, n) {
                switch (e.attr("type")) {
                    case "password":
                        i(e, t, n);
                        break;
                    case "text":
                        l(e, t, n)
                }
                n && O(e, t)
            }, O = function(e, t) {
                e.css("padding-right", t.outerWidth())
            }, function(a) {
                this.addClass("password");
                var s = T(LPTools.createElement("div", "relative"));
                this.before(s), s.append(this), s.css({
                    margin: this.css("margin")
                }), this.css("margin", "0");
                var E = T(LPTools.createElement("button", {
                    class: "showPassword",
                    title: Strings.Vault.SHOW_PASSWORD
                }));
                return s.append(E),
                    function(t, e) {
                        var n = LPTools.getOption(a, "textual", !1),
                            i;
                        if (n ? (E.addClass("textual"), E.text(Strings.Vault.SHOW), t.one("focus", function() {
                                O(t, E)
                            })) : E.addClass("iconButton"), E.bind("click", function() {
                                "password" === t.attr("type") && e ? e(function() {
                                    c(t, E, n)
                                }) : c(t, E, n)
                            }), t.hidePassword = function() {
                                l(t, E, n)
                            }, LPTools.getOption(a, "includeGenerateButton", !1)) {
                            t.LP_input("passwordGenerate", function(e) {
                                e ? s.removeClass("empty") : (t.hidePassword(), s.addClass("empty"))
                            });
                            var o = T(LPTools.createElement("button", {
                                class: "generatePassword iconButton",
                                title: Strings.Vault.GENERATE_PASSWORD
                            }));
                            s.append(o), o.bind("click", function() {
                                var e;
                                (bg.get("LPContentScriptFeatures").better_generate_password_enabled ? dialogs.betterGeneratePassword : dialogs.generatePassword).open({
                                    fillGenerated: !1,
                                    saveOptions: {
                                        source: "vault"
                                    }
                                })
                            })
                        }

                        function r() {
                            0 === t.val().length ? E.addClass("displaynone") : E.removeClass("displaynone")
                        }
                        LPTools.getOption(a, "showOnlyIfPopulated", !1) && (r(), t.bind("keyup", r))
                    }(this, LPTools.getOption(a, "checkPermissionHandler", null)), this.val(this.val()), this
            }),
            LP_reflow: function() {
                for (var e = 0; e < this.length; ++e) this.get(e).offsetHeight;
                return this
            },
            LP_scrollParent: function() {
                var e;
                if (1 === this.length)
                    for (var t = this.get(0).parentElement; t;) {
                        var n = T(t);
                        if ("auto" === n.css("overflow") && n.css("max-height")) {
                            e = t;
                            break
                        }
                        t = t.parentElement
                    }
                return T(e)
            },
            LP_input: function(e, n) {
                var i = this;
                e = e ? "." + e : "", i.unbind("keypress" + e), i.unbind("keyup" + e), i.unbind("input" + e);
                var t = function(e) {
                    var t = e.which;
                    31 < t && n(i.val() + String.fromCharCode(t))
                };
                i.bind("keypress" + e, t);
                var o = function(e) {
                    switch (e.keyCode || e.which) {
                        case 8:
                        case 46:
                            n(i.val())
                    }
                };
                i.bind("keyup" + e, o);
                var r = function() {
                        i.unbind("keypress" + e, t), i.unbind("keyup" + e, o), i.unbind("input" + e, r)
                    },
                    a;
                i.bind("input" + e, r), i.bind("input" + e, function() {
                    n(i.val())
                }), i.val = (a = this.val, function() {
                    return 1 === arguments.length && n(arguments[0]), a.apply(i, arguments)
                })
            }
        })
    }(jQuery), NotifyException = function(e) {
        Topics.get(Topics.ERROR).publish(e), this.message = e, this.stack = (new Error).stack
    }, NotifyException.prototype = Object.create(Error.prototype), NotifyException.prototype.name = "InvalidArgumentException", NotifyException.prototype.constructor = NotifyException, AttachmentKeyException = function() {
        NotifyException.call(this, Strings.translateString("Could not decrypt attachment key."))
    }, AttachmentKeyException.prototype = Object.create(NotifyException.prototype), AttachmentKeyException.prototype.name = "AttachmentKeyException", AttachmentKeyException.prototype.constructor = AttachmentKeyException;
//# sourceMappingURL=sourcemaps/tools.js.map