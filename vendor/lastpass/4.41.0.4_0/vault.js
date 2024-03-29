LPVault = {};
var initialize = function(r, a, i) {
    var n = Strings.translateString("Folder (a-z)"),
        o = Strings.translateString("Folder (z-a)"),
        s = Strings.translateString("Name (a-z)"),
        l = Strings.translateString("Name (z-a)"),
        c = Strings.translateString("Most Recent"),
        u = Strings.translateString("Sender (a-z)"),
        d = Strings.translateString("Sender (z-a)"),
        p = Strings.translateString("Recipient (a-z)"),
        g = Strings.translateString("Recipient (z-a)"),
        e = [n, o, s, l, c],
        t = [s, l],
        m = [s, l, p, g, c],
        f = [s, l, u, d, c],
        h = [s, l],
        y = [s, l],
        P = function(e) {
            this.options = e
        };
    P.prototype.getAddElement = function() {
        return void 0 === this.addElement && (this.addElement = LPTools.createElement("div", "addMenuItem"), this.build(this.addElement, this.options.icon ? this.options.icon : "images/vault_4.0/Add.png")), this.addElement
    }, P.prototype.build = function(e, t) {
        var n = this.options.autoId || "";
        e.appendChild(LPTools.createElement("span", null, Strings.Vault[this.options.text])).setAttribute("automation-id", n);
        var o = LPTools.createElement("div"),
            i = LPTools.createElement("div"),
            r = LPTools.createElement("img", {
                src: t
            });
        e.appendChild(o), o.appendChild(i), i.appendChild(r), $(e).bind("click", this.options.func)
    }, P.prototype.getMenuElement = function() {
        return void 0 === this.menuElement && (this.menuElement = LPTools.createElement("li", "addMenuItem"), this.build(this.menuElement, this.options.additionalIcon)), this.menuElement
    };
    var S = {
            Site: new P({
                text: "ADD_SITE",
                autoId: "vaultAddSiteButton",
                icon: "images/vault_4.0/Sites_Active.png",
                func: function() {
                    a.openSiteDialog({
                        saveOptions: {
                            source: "vault"
                        }
                    })
                }
            }),
            Note: new P({
                text: "ADD_NOTE",
                autoId: "vaultAddNoteButton",
                icon: "images/vault_4.0/Notes_Active.png",
                additionalIcon: "images/vault_4.0/Add_Secure_Note.png",
                func: function() {
                    a.openNoteDialog({
                        saveOptions: {
                            source: "vault"
                        }
                    })
                }
            }),
            FormFill: new P({
                text: "ADD_FORM_FILL",
                autoId: "vaultAddFormFillButton",
                icon: "images/vault_4.0/Form_Fills_Active.png",
                func: function() {
                    a.openFormFillDialog({
                        saveOptions: {
                            source: "vault"
                        }
                    })
                }
            }),
            SharedFolder: new P({
                text: "ADD_SHARED_FOLDER",
                autoId: "vaultAddSharedFolderButton",
                func: function() {
                    a.openCreateSharedFolderDialog()
                }
            }),
            Identity: new P({
                text: "ADD_IDENTITY",
                autoId: "vaultAddIdentityButton",
                func: function() {
                    a.openIdentityDialog()
                }
            }),
            EmergencyAccess: new P({
                text: "GIVE_EMER_ACCESS",
                autoId: "vaultGiveEmerAccessButton",
                func: function() {
                    LPProxy.getUser().isFreeOrTrial() && LPFeatures.restrictEmergencyAccessForFree() || LPProxy.isExpiredFamilyUser() ? (bg.sendLpImprove("restricted_emergency_access_lightbox_shown"), dialogs.restrictedEmergencyAccess.open()) : dialogs.addEmergencyAccess.open()
                }
            }),
            CreditMonitoring: new P({
                text: "ADD_CREDIT_MON",
                autoId: "vaultAddCreditButton",
                func: function() {
                    a.openCreateCreditMonitoringDialog()
                }
            }),
            Folder: new P({
                text: "ADD_FOLDER",
                autoId: "vaultAddNewFolderButton",
                additionalIcon: "images/vault_4.0/Add_Folder.png",
                func: function() {
                    a.openFolderDialog()
                }
            }),
            ShareItems: new P({
                text: "SHARE_ITEMS",
                autoId: "vaultAddShareItemsButton",
                additionalIcon: "images/vault_4.0/Add_Share.png",
                func: function() {
                    a.openShareDialog()
                }
            })
        },
        v = Strings.translateString("search my vault"),
        L = null,
        b = $("#advacedOptionsOverlay"),
        E = $("#inProgressOverlay"),
        T = $("#tools"),
        _ = $("#options"),
        I = $("#mainScroll"),
        C = $("#addMenu"),
        D = $("#addMenuItems"),
        A = $("#addMenuButton"),
        w = $("#addMenuButtonCustom"),
        F = $("#gridButton"),
        M = $("#listButton"),
        x = $("#collapseAllToggle"),
        k = $("#sizeToggle"),
        O = $("#orderOption"),
        R = $("#sortOrderMenu"),
        B = $("#sortOrderOption"),
        N = $("#userMenuItems"),
        U = $("#leftMenuMinimizeButton"),
        G = $("#moreActions"),
        z = r.getElementById("contextMenu").parentElement,
        V = $(r.body),
        H = $("#advancedMenuItem"),
        Y = r.getElementById("sortOrderMenu").children[0],
        q = $("#vaultSearch"),
        j = $("#userMenuContainer"),
        W = $("#pageTitle"),
        K = $("#cloudAppsMenuItem"),
        X = null,
        Q = null,
        Z = !0,
        J = null,
        ee = null,
        te = null,
        ne = function(e, t) {
            te.getContainer() === t && (te.removeBodyState(), te.addBodyState())
        },
        oe = function(e) {
            var n;
            e = e || {}, this.state = e.bodyState, this.menuElement = e.menuElement || null, this.emptyState = this.state + "Empty", this.container = null, this.sortOptions = e.sortOptions || null, this.persistent = LPTools.getOption(e, "persistent", !0), this.searchPlaceholder = LPTools.getOption(e, "searchPlaceholder", v), this.title = e.title || "", this.addMenu = e.addMenu, this.additionalOptionButtons = e.additionalOptionButtons, this.scrollParent = e.scrollParent, this.notificationCount = e.notificationCount, n = this, Topics.get(Topics.CLEAR_DATA).subscribe(function() {
                n.clear()
            }), e.menuElement && e.menuElement.unbind("click.menu").bind("click.menu", function() {
                var e = void 0;
                try {
                    var t = LPProxy.getConfigViewObject(n.getElement().id);
                    void 0 !== t.segmentEvent && bg.sendLpImprove(t.segmentEvent), e = t.url
                } catch (e) {}
                void 0 !== e ? bg.openOnNewTab(e) : n.parent ? n.parent.show(n) : n.show()
            })
        };
    oe.prototype.getElement = function() {
        return this.menuElement.get(0)
    }, oe.prototype.applyContainerFunction = function(e) {
        var t = this.getContainer();
        if (null !== t) switch (typeof e) {
            case "string":
                var n = [];
                if (1 < arguments.length)
                    for (var o = 1, i = arguments.length; o < i; ++o) n.push(arguments[o]);
                return t[e].apply(t, n);
            case "function":
                return e(t)
        }
    }, oe.prototype.updateNotificationCount = function(e) {
        var t = 0,
            n = this.menuElement.find(".tabNotification");
        return void 0 !== e ? (t = parseInt(n.text()), et(n, t - e), this.parent && this.parent.updateNotificationCount(e)) : this.notificationCount && (t = this.notificationCount(), et(n, t)), t
    }, oe.prototype.getSortOptions = function() {
        return this.sortOptions
    }, oe.prototype.getContainer = function() {
        return this.container
    }, oe.prototype.setContainer = function(e, t) {
        (this.container = e) && (e._buildOptions.stateChangeCallback = ne, LPTools.getOption(t, "checkForStateChange", !0) && te === this && ne(e.isEmpty(), e), te === this && "" !== q.val() && a.search(q.val()))
    }, oe.prototype.openAll = function() {
        this.applyContainerFunction("openAll")
    }, oe.prototype.collapseAll = function() {
        this.applyContainerFunction("collapseAll")
    }, oe.prototype.createSelectionContextMenu = function() {
        return this.applyContainerFunction("createSelectionContextMenu")
    }, oe.prototype.isEmpty = function() {
        return this.applyContainerFunction("isEmpty")
    }, oe.prototype.search = function(e) {
        var t = this.applyContainerFunction("applySearch", e);
        e && null === t && !this.isEmpty() ? V.addClass("searchEmpty") : V.removeClass("searchEmpty")
    }, oe.prototype.clearSelected = function() {
        this.applyContainerFunction("clearSelected")
    }, oe.prototype.getSelectedItems = function() {
        return this.applyContainerFunction("getSelectedItems")
    }, oe.prototype.getSortOrder = function() {
        if (void 0 === this.sortOrder) {
            var e = this.sortOptions ? this.sortOptions[0] : null;
            this.sortOrder = LPProxy.getPreference(this.state + "SortOrder", e)
        }
        return this.sortOrder
    }, oe.prototype.setSortOrder = function(e) {
        this.sortOrder = e, LPProxy.setPreferences(this.state + "SortOrder", e)
    }, oe.prototype.addBodyState = function() {
        V.addClass(this.getState());
        var e = this.getContainer();
        null !== e && e.isEmpty() ? V.addClass("empty") : V.removeClass("empty"), setTimeout(function() {
            Topics.get(Topics.EMPTY_VAULT_STATE_CHANGE).publish()
        }, 400)
    }, oe.prototype.removeBodyState = function() {
        V.removeClass(this.emptyState), V.removeClass(this.state)
    }, oe.prototype.hide = function() {
        if (null !== this.menuElement && this.menuElement.removeClass("selected"), this.parent && null !== this.parent.menuElement && this.parent.menuElement.removeClass("selected"), this.removeBodyState(), this.additionalOptionButtons)
            for (var e = 0, t = this.additionalOptionButtons.length; e < t; ++e) this.additionalOptionButtons[e].detach();
        this.persistent ? this.applyContainerFunction("hide") : this.clear()
    }, oe.prototype.getAddMenuItems = function() {
        var e = [];
        if (this.addMenu && 0 < this.addMenu.length)
            for (var t = 0, n = this.addMenu.length; t < n; ++t) {
                var o = this.addMenu[t];
                o === S.ShareItems && !LPFeatures.allowIndividualSharing() || o === S.Note && !LPFeatures.allowNotes() || e.push(o)
            }
        return e
    }, oe.prototype.show = function() {
        if (te !== this) {
            null !== te && (Fe(), te.hide()), q.attr("placeholder", this.searchPlaceholder), null !== this.menuElement && this.menuElement.addClass("selected"), this.parent && null !== this.parent.menuElement && this.parent.menuElement.addClass("selected"), W.text(this.title), this.addBodyState(), this.scrollParent.scrollTop(0);
            var e = this.getSortOptions();
            null !== te && te.getSortOptions() === e || xe(e);
            var t = (te = this).getSortOrder();
            t && a.sort(t), this.additionalOptionButtons && _.append(this.additionalOptionButtons), D.children().detach(), w.children().detach();
            var n = this.getAddMenuItems();
            if (0 < n.length) {
                var o = n[0];
                w.append(o.getAddElement());
                for (var i = n.length - 1; 0 < i; --i) D.append(n[i].getMenuElement());
                A.show()
            } else A.hide();
            LPProxy.getPreference("leftMenuMaximize") ? a.maximizeLeftMenu() : a.minimizeLeftMenu()
        }
    }, oe.prototype.getState = function() {
        return this.isEmpty() ? this.emptyState : this.state
    }, oe.prototype.clear = function() {
        this.container && (this.container.destruct(), this.container = null)
    };
    var ie = function(e) {
        var o;
        e.bodyState = e.bodyState || e.contentID, oe.call(this, e), this.contentElement = r.getElementById(e.contentID), this.containerType = e.containerType, this.dataSource = e.dataFunction, this.buildOptions = e.buildOptions, this.filter = e.filter, o = this, Topics.get(Topics.IDENTITY_ENABLE).subscribe(function(e) {
            o.refresh(e)
        }), o.initializeCallback = function(e, t) {
            var n = new o.containerType(e, o.buildOptions);
            n.initialize(o.contentElement, o.scrollParent), o.filter && n.applyFilter(o.filter, {
                checkForStateChange: !1
            }), o.setContainer(n, {
                checkForStateChange: LPTools.getOption(t, "checkForStateChange", !1)
            }), Topics.get(Topics.DIALOG_LOADED).publish()
        }
    };
    ((ie.prototype = Object.create(oe.prototype)).constructor = ie).prototype.makeDataRequest = function(e, t) {
        t.error = function() {
            Topics.get(Topics.DIALOG_LOADED).publish()
        }, LPRequest.makeDataRequest(e, t)
    }, ie.prototype.initialize = function(e, t) {
        var n, o;
        null === this.container && null !== this.containerType && null !== this.dataSource && (n = this, e = (o = e) ? function(e, t) {
            n.initializeCallback(e, t), o()
        } : n.initializeCallback, Topics.get(Topics.DIALOG_LOADING).publish(), this.dataSource.call(this, e, t))
    }, ie.prototype.show = function(e) {
        var t;
        null === this.container ? (t = this).initialize(function() {
            e && e(), oe.prototype.show.apply(t)
        }) : (oe.prototype.show.apply(this), e && e())
    }, ie.prototype.refresh = function(e) {
        null !== this.container && (this.container.destruct(), this.container = null, this.initialize(null, {
            identity: e,
            checkForStateChange: !0
        }))
    };
    var re = function(e) {
        oe.call(this, e), this.setContainer(e.container || null), this.filter = e.filter
    };
    ((re.prototype = Object.create(oe.prototype)).constructor = re).prototype.show = function() {
        this.container.applyFilter(this.filter, {
            checkForStateChange: !1
        }), oe.prototype.show.apply(this, arguments)
    };
    var ae = function(o) {
            var n = null,
                e;
            if (o.views && 0 < o.views.length) {
                for (var t = 0, i = o.views.length; t < i; ++t) o.views[t].parent = this;
                this.show = function(e, t) {
                    e ? (e.show(t), n = e) : (null === n && (n = o.defaultView()), n.show(t))
                }, this.clear = function() {
                    n = null
                }, this.menuElement = o.menuElement;
                var r = o.menuElement.find(".notificationBubble");
                this.updateNotificationCount = function(e) {
                    for (var t = 0, n = r.length; t < n; ++t) {
                        var o = $(r[t]);
                        et(o, parseInt(o.text()) - e)
                    }
                };
                var a = function() {
                    for (var e = 0, t = 0, n = o.views.length; t < n; ++t) e += o.views[t].updateNotificationCount();
                    et(r, e)
                };
                Topics.get(Topics.LOGIN).subscribe(a), Topics.get(Topics.REFRESH_DATA).subscribe(a), e = this, Topics.get(Topics.CLEAR_DATA).subscribe(function() {
                    e.clear()
                })
            }
        },
        se = new ie({
            containerType: IdentityContainer,
            dataFunction: function(e) {
                for (var t = [], n = 0, o = L._identities.length; n < o; ++n) t.push(L._identities[n].newDisplayObject());
                e(t)
            },
            sortOptions: y,
            contentID: "identityContent",
            bodyState: "identity",
            scrollParent: I,
            searchPlaceholder: Strings.translateString("search my identities"),
            buildOptions: {
                multiSelect: !1
            },
            title: Strings.translateString("Identities"),
            addMenu: [S.Identity]
        }),
        le = new ie({
            containerType: CreditMonitoringContainer,
            dataFunction: (ce = function(e, t, n) {
                for (var o = !0, i = [], r = 0, a = t.length; r < a; ++r) {
                    var s = t[r];
                    "1" !== s.premium && (o = !1), i.push(new CreditMonitoringProfile(s))
                }
                var l = $("#creditMonitoring .viewExplanation");
                o ? (l.hide(), le.title = Strings.translateString("Premium Credit Monitoring")) : (l.show(), le.title = Strings.translateString("Credit Monitoring")), e(i, n)
            }, function(t, n) {
                this.makeDataRequest(LPProxy.getCreditMonitoringData, {
                    success: function(e) {
                        ce(t, e, n)
                    }
                })
            }),
            persistent: !1,
            contentID: "creditMonitoring",
            scrollParent: I,
            title: Strings.translateString("Credit Monitoring"),
            addMenu: [S.CreditMonitoring]
        }),
        ce, ue = new ie({
            containerType: GridListContainer,
            dataFunction: function(e, t) {
                this.makeDataRequest(LPProxy.getDeletedItems, {
                    success: e
                })
            },
            filter: {
                showEmptyGroups: !1
            },
            sortOptions: e,
            contentID: "deletedItems",
            scrollParent: I,
            persistent: !1,
            searchPlaceholder: Strings.translateString("search my deleted items"),
            buildOptions: {
                allowDrag: !1,
                stickyFolders: !0,
                stickyFolderParent: r.getElementById("main")
            },
            title: Strings.translateString("Deleted Items"),
            additionalOptionButtons: [(de = LPTools.createElement("div", {
                class: "optionButton optionButtons",
                id: "purgeAllButton"
            }, Strings.Vault.PURGE_ALL), LPPlatform.addEventListener(de, "click", function() {
                var e = ue.getContainer();
                if (e) {
                    var t = e.getItemModelChildren();
                    0 < t.length && t[0].purge({
                        itemsForAction: t
                    })
                }
            }), $(de))]
        }),
        de;
    ue.refresh = function() {};
    var pe = new ie({
            containerType: EmergencyAccessRecipientContainer,
            dataFunction: function(e, t) {
                this.makeDataRequest(LPProxy.getEmergencyAccessRecipientInfo, {
                    success: e
                })
            },
            filter: {
                showEmptyGroups: !1
            },
            sortOptions: e,
            menuElement: $("#emergencyTrustedMenuItem"),
            contentID: "emergencyTrustedContainer",
            bodyState: "emergencyTrusted",
            scrollParent: I,
            persistent: !1,
            searchPlaceholder: Strings.translateString("search people I trust"),
            buildOptions: {
                allowDrag: !1
            },
            title: Strings.translateString("People I Trust"),
            addMenu: [S.EmergencyAccess]
        }),
        ge = new ie({
            containerType: EmergencyAccessSharerContainer,
            dataFunction: function(e, t) {
                this.makeDataRequest(LPProxy.getEmergencyAccessSharerInfo, {
                    success: e
                })
            },
            filter: {
                showEmptyGroups: !1
            },
            notificationCount: function() {
                var e = 0,
                    t = bg.get("g_emer_sharers");
                if (t)
                    for (var n = 0, o = t.length; n < o; ++n) "0" === t[n].accepted && ++e;
                return e
            },
            sortOptions: e,
            menuElement: $("#emergencyTrustingMenuItem"),
            contentID: "emergencyTrusting",
            bodyState: "emergencyTrusting",
            scrollParent: I,
            persistent: !1,
            searchPlaceholder: Strings.translateString("search people who trust me"),
            buildOptions: {
                allowDrag: !1
            },
            title: Strings.translateString("People Who Trust Me")
        }),
        me = new ae({
            menuElement: $("#emergencyAccessMenuItem"),
            defaultView: function() {
                return 0 < ge.notificationCount() ? ge : pe
            },
            views: [pe, ge]
        }),
        fe = new ie({
            containerType: IndividualShareContainer,
            sortOptions: f,
            menuElement: $("#receivedSharesMenuItem"),
            contentID: "receivedSharesContent",
            bodyState: "receivedShares",
            scrollParent: I,
            persistent: !1,
            notificationCount: function() {
                return bg.get("g_pendings").length
            },
            searchPlaceholder: Strings.translateString("search my received shares"),
            buildOptions: {
                multiSelect: !1
            },
            filter: {
                showEmptyGroups: !1,
                multiSelect: !1
            },
            title: Strings.translateString("Shared with Me"),
            addMenu: [S.ShareItems],
            dataFunction: (he = function(e) {
                for (var t = LPProxy.getAllModelItems(), n = [], o = 0, i = t.length; o < i; ++o) {
                    var r = t[o],
                        a = e[r.getID()];
                    a && "1" === a.state && r instanceof AccountBase && n.push(new AcceptedReceivedSharedItem(r, a))
                }
                return n
            }, ye = function(e) {
                for (var t = LPProxy.getPendingRecievedShares(), n = !1, o = 0, i = t.length; o < i; ++o) {
                    var r = t[o],
                        a = e[r._model.getID()];
                    a ? r._model._shareData = a : n = !0
                }
                return n && LPProxy.refreshSites(), t
            }, Pe = function(e, t, n) {
                var o = he(e),
                    i = ye(e);
                t(o.concat(i))
            }, function(t, n) {
                this.makeDataRequest(LPProxy.getReceivedShareData, {
                    params: {
                        url: document.location.href
                    },
                    success: function(e) {
                        Pe(e, t, n)
                    }
                })
            })
        }),
        he, ye, Pe, Se = new ie({
            containerType: IndividualShareContainer,
            sortOptions: m,
            menuElement: $("#sentSharesMenuItem"),
            contentID: "sentSharesContent",
            bodyState: "sentShares",
            scrollParent: I,
            persistent: !1,
            searchPlaceholder: Strings.translateString("search my sent shares"),
            buildOptions: {
                multiSelect: !1
            },
            filter: {
                showEmptyGroups: !1,
                multiSelect: !1
            },
            title: Strings.translateString("Shared with Others"),
            addMenu: [S.ShareItems],
            dataFunction: (ve = function(e, t, n) {
                for (var o = LPProxy.getAllModelItems(), i = [], r = 0, a = o.length; r < a; ++r) {
                    var s = o[r];
                    i = i.concat(LPTools.buildSentShareItems(s, e[s.getID()]))
                }
                t(i, n)
            }, function(t, n) {
                this.makeDataRequest(LPProxy.getSentShareData, {
                    params: {},
                    success: function(e) {
                        ve(e, t, n)
                    }
                })
            })
        }),
        ve, Le = new ie({
            containerType: SharedFolderContainer,
            dataFunction: (Ee = function(e, t, n) {
                for (var o = LPProxy.getAllSharedGroupModelsByID(), i = [], r = 0, a = e.length; r < a; ++r) {
                    var s = e[r];
                    if (s.sharedata) {
                        var l = o[s.shareid];
                        i.push(new SharedFolderItem(l, s))
                    }
                }
                t(i)
            }, function(t, n) {
                this.makeDataRequest(LPProxy.getSharedFolderData, {
                    params: {},
                    success: function(e) {
                        Ee(e, t, n)
                    }
                })
            }),
            notificationCount: function() {
                return bg.get("g_pending_shares").length
            },
            sortOptions: h,
            menuElement: $("#sharedFoldersMenuItem"),
            contentID: "sharedFoldersContent",
            bodyState: "sharedFolders",
            scrollParent: I,
            searchPlaceholder: Strings.translateString("search my shared folders"),
            buildOptions: {
                multiSelect: !1
            },
            title: Strings.translateString("Shared Folders"),
            addMenu: [S.SharedFolder],
            additionalOptionButtons: [(be = $(LPTools.buildCheckbox(null, {
                text: Strings.translateString("View Deleted Shared Folders")
            })), be.attr("id", "showDeletedSharedFoldersButton"), be.addClass("optionButtons"), be.bind("click", function() {
                ht()
            }), be)]
        }),
        be, Ee;
    Le.initialize = function(e, t) {
        var n, o;
        n = this, e = (o = e) ? function() {
            ft({
                checkForStateChange: !1
            }), o()
        } : function() {
            ft({
                checkForStateChange: !1
            })
        }, ie.prototype.initialize.call(this, e, t)
    };
    var Te = new ae({
            menuElement: $(".sharingMenuItem"),
            defaultView: function() {
                return 0 < fe.notificationCount() ? fe : LPProxy.getAccountClass() === Constants.USER_FREE || LPProxy.getAccountClass() === Constants.USER_PREMIUM && LPProxy.isPremiumAsAPerk() && !LPProxy.isLegacyPremium() ? Se : LPFeatures.allowSharedFolders() ? Le : fe
            },
            views: [Le, Se, fe]
        }),
        _e = new oe({
            menuElement: $("#newSettingsMenuItem"),
            bodyState: "newSettings",
            title: Strings.translateString("Settings"),
            addMenu: null,
            scrollParent: $(document.body)
        }),
        Ie = function() {
            LPTools.hideContextMenu(ee), ee = null
        },
        Ce = function(e) {
            e.preventDefault(), e.stopPropagation()
        },
        De = function() {
            q.val("")
        },
        Ae = function() {
            Ie(), dt(), Oe(), Be()
        },
        we = function() {
            te && te.clearSelected()
        },
        Fe = function() {
            De(), we()
        },
        Me = function(t) {
            return function(e) {
                Ie(), te.setSortOrder(t), a.sort(t), Ce(e)
            }
        },
        xe = function(e) {
            if (null !== e) {
                LPTools.removeDOMChildren(Y);
                for (var t = 0, n = e.length; t < n; ++t) {
                    var o = r.createElement("li"),
                        i = e[t];
                    o.textContent = i, LPPlatform.addEventListener(o, "click", Me(i)), Y.appendChild(o)
                }
                O.show()
            } else O.hide()
        },
        ke = function(e) {
            if (0 < e) {
                var t = Strings.translateString("%1 items selected", e);
                $("#selectedItemCounter").text(t)
            }
        },
        Oe = function() {
            H.removeClass("selected"), T.hide("fast"), b.hide()
        },
        Re = function() {
            C.addClass("open")
        },
        Be = function() {
            C.removeClass("open")
        },
        Ne = function(e, t) {
            var n = LPProxy.getAllItems({
                    identity: e
                }),
                o = new GridListContainer(n, {
                    separateItems: !0,
                    separateFavorites: !0,
                    stickyFolders: !0,
                    ignoreFilterOnSearch: !0,
                    keyboardNavigation: !0,
                    stickyFolderParent: r.getElementById("main"),
                    folderStateChange: Qe
                });
            for (var i in Xe(o), st(o, bt.all.getSortOrder()), o.initialize(r.getElementById("vaultContent"), I), o.applyFilter(t), Et(o), bt) bt[i].setContainer(o);
            return o
        };
    a.initializeWelcomeDialogs = function() {
        bg.get_method_async(function(t) {
            bg.MigrationBackground.getShouldStartMigration(function(e) {
                e ? (bg.MigrationBackground.setShouldStartMigration(!1), Ue()) : 3 === bg.get("LPContentScriptFeatures").omar_vault_migration ? a.openOmarVaultMigrationDialog() : bg.MigrationBackground.shouldShowMigrationNotification() && bg.MigrationBackground.hasFormFills() ? dialogs.vaultInfoBanner.open({
                    title: Strings.translateString("A new version of LastPass is here!"),
                    contentText1: Strings.translateString("You can now do even more with LastPass - Update now to see what's changed (it only takes a minute)."),
                    segmentEvents: {
                        show: {
                            name: "migration_formfill_notification_shown",
                            properties: {
                                version: "vault"
                            }
                        },
                        update: {
                            name: "migration_formfill_notification_clicked",
                            properties: {
                                action: "update_now",
                                version: "vault"
                            }
                        }
                    },
                    buttons: [{
                        style: "btn-blue",
                        sizeStyle: "col-2 btn-container-lg",
                        autoId: "updateNowBtn",
                        text: Strings.translateString("Update Now"),
                        closeOnClick: !0,
                        action: function() {
                            bg.MigrationBackground.setShouldStartMigration(!1), Ue()
                        },
                        segment: "update"
                    }],
                    hideXCloseBtn: !0
                }) : LPFeatures.safari_legacy_messaging() ? dialogs.vaultInfoBanner.open({
                    title: Strings.translateString("Safari extension update required"),
                    contentText1: Strings.translateString("Due to new Apple requirements, you need to download the new LastPass app to continue using LastPass in your Safari browser."),
                    contentText2: Strings.translateString("After download, simply login to your account again and use LastPass in Safari as you always have."),
                    buttons: [{
                        style: "btn-blue",
                        sizeStyle: "col-2 btn-container-lg",
                        autoId: "updateBtn",
                        text: Strings.translateString("Update"),
                        closeOnClick: !0,
                        action: function() {
                            bg && bg.openURL && bg.openURL("https://lastpass.com/safariAppExtension.php?source=vault")
                        }
                    }, {
                        style: "btn-link",
                        sizeStyle: "col-1 btn-container-sm",
                        autoId: "closeBtn",
                        text: Strings.translateString("Close"),
                        closeOnClick: !0
                    }]
                }) : void 0 === t && !a.isExtensionDownloaded() && LPFeatures.allowLicenseExpiration() && (VaultLicenseExpiration.premiumTrialStatusChecker() || VaultLicenseExpiration.companyLicenseStatusChecker()) ? VaultLicenseExpiration.showExpirationMessage() : bg.get("LPContentScriptFeatures").secondary_onboarding_visible && LPProxy.getAccountClass() === Constants.USER_PREMIUM_TRIAL ? LPPlatform.showSecondaryOnboarding() : void 0 === t && !a.isExtensionDownloaded() && LPFeatures.isDownloadExtensionWebPromptEnabled() ? dialogs.vaultInfoBanner.open({
                    title: Strings.translateString("Download the LastPass browser extension"),
                    segmentEvents: {
                        show: {
                            name: "download_extension_prompt_shown"
                        },
                        download: {
                            name: "download_extension_prompt_clicked",
                            properties: {
                                action: "download"
                            }
                        },
                        noThanks: {
                            name: "download_extension_prompt_clicked",
                            properties: {
                                action: "no_thanks"
                            }
                        },
                        close: {
                            name: "download_extension_prompt_clicked",
                            properties: {
                                action: "close"
                            }
                        }
                    },
                    contentText1: Strings.translateString("Get the most out of LastPass so you can automatically save and fill your passwords, credit cards, addresses, and more."),
                    contentText2: Strings.translateString("Install the LastPass browser extension for simple, quick access right from the LastPass icon in your browser toolbar."),
                    buttons: [{
                        style: "btn-blue",
                        sizeStyle: "col-2 btn-container-lg",
                        autoId: "downloadNowBtn",
                        text: Strings.translateString("Download Now"),
                        action: function() {
                            "object" == typeof top.LP_ExtInstall && "function" == typeof top.LP_ExtInstall.run ? top.LP_ExtInstall.run() : bg && bg.openURL && bg.openURL("https://lastpass.com/misc_download2.php")
                        },
                        segment: "download"
                    }, {
                        style: "btn-link",
                        sizeStyle: "col-1 btn-container-sm",
                        autoId: "noThanksBtn",
                        text: Strings.translateString("No Thanks"),
                        closeOnClick: !0,
                        segment: "noThanks"
                    }]
                }) : LPPlatform.showIntroTutorial()
            })
        })
    }, a.isExtensionDownloaded = function() {
        return null !== top.ext
    }, a.initialize = function(e) {
        try {
            if (bg.sendLpImprove("user_vault_opened"), r.body.removeAttribute("class"), Topics.get(Topics.REFRESH_DATA).publish(), $(".leftMenuItem").removeClass("selected"), LPProxy.getPreference("gridView") || a.displayAsList(), LPProxy.getPreference("compactView") && a.displayCompact(), this.firstTimeLogin(), U.attr("title", "Maximize Menu"), LPFeatures.allowGift()) {
                var t = $("#specialOfferMenu");
                t.show(), t.bind("click", function() {
                    bg.sendLpImprove("lpgift_ad_clicked"), bg.openURL(LPProxy.getBaseURL() + "gift.php")
                })
            }
            if (VaultLicenseExpiration.initialize(), Ve(), $e(), Ge(), LPFeatures.allowTryFamilies() && $("#lp-try-families").show(), "undefined" != typeof bg) {
                var n = LPProxy.getAccountClass();
                n !== Constants.USER_FREE && n !== Constants.USER_PREMIUM_TRIAL || ze()
            }
        } catch (e) {
            LPPlatform.logException(e)
        } finally {
            var o = $("#vaultLoadingOverlay");
            LPTools.getOption(e, "fadeIn", !1) ? (o.addClass("fadeIn"), setTimeout(function() {
                o.addClass("loaded")
            }, 500)) : o.addClass("loaded"), V.addClass("loaded")
        }
    };
    var $e = function() {
            bg.LPPartner && bg.LPPartner.getPartnerInfo && bg.LPPartner.getPartnerInfo(function(e) {
                e ? ($("#logoPartner").attr("src", e.logoWhiteUrl).addClass(e.classWhite), $("#logoPartnerContainer").addClass("show")) : $("#logoPartnerContainer").removeClass("show")
            })
        },
        Ue = function() {
            $("#inProgressMigration").show(), bg && bg.clear_badge && bg.clear_badge();
            var n = $("#inProgressMigration").find(".progress-bar");
            Migrator.executeMigrations(function(e, t) {
                n.css("width", Math.floor(e / t * 100) + "%")
            })
        },
        Ge = function() {
            $("#vaultFooter").addClass("disabled")
        },
        ze = function() {
            $("#upgradeButton").addClass("headerButtonActive").click(function() {
                bg.sendLpImprove("upgrade_button_vault_click"), LPPlatform.purchasePremium()
            })
        },
        Ve = (He = function(t) {
            a.openReceivedShareCenter(function() {
                var e = LPProxy.getPendingRecievedShare(t);
                e && a.openAcceptShareDialog(e)
            })
        }, Ye = function(t) {
            a.openReceivedShareCenter(function() {
                var e = LPProxy.getPendingRecievedShare(t);
                e && e.reject()
            })
        }, qe = function(e) {
            LPProxy.getSiteModel(e) ? a.openSiteDialog({
                vaultItem: e
            }) : LPProxy.getNoteModel(e) ? a.openNoteDialog({
                vaultItem: e
            }) : LPProxy.getFormFillModel(e) && a.openFormFillDialog({
                vaultItem: e
            })
        }, je = function(e) {
            switch (e) {
                case "emergencyAccess":
                    pe.show();
                    break;
                case "emergencyAccessOthers":
                    ge.show();
                    break;
                default:
                    bt.all.show()
            }
        }, We = function() {
            a.openManageIdentities(), a.openIdentityDialog()
        }, Ke = function(e) {
            for (var t = [], n = 0, o = (e = e.split(",")).length; n < o; ++n) {
                var i = e[n],
                    r = LPProxy.getSiteModel(i);
                (r = r || LPProxy.getNoteModel(i)) && t.push(r)
            }
            0 < t.length && a.openShareDialog(t)
        }, function() {
            var e = LPTools.getURLParams();
            for (var t in LPPlatform.setIntroTutorialDisable(!1), e) {
                var n = e[t];
                switch ("cmd" === t && (t = n), t) {
                    case "opengoogleauth":
                    case "opensettings":
                        Topics.get(Topics.EDIT_SETTINGS).publish();
                        break;
                    case "openhistory":
                        LPProxy.openHistory();
                        break;
                    case "openbookmarklets":
                        LPProxy.openBookmarklets();
                        break;
                    case "linkpersonal":
                        a.openLinkAccountDialog();
                        break;
                    case "unlinkpersonal":
                        a.unlinkAccount();
                        break;
                    case "sharedfolder":
                    case "sf":
                        a.openSharingCenter();
                        break;
                    case "sfadd":
                        a.openSharingCenter(), a.openCreateSharedFolderDialog();
                        break;
                    case "sfadduser":
                        if (a.openSharingCenter(), !e.shareid) break;
                        var o = LPProxy.getAllSharedGroupModelsByID()[e.shareid];
                        o && Topics.get(Topics.EDIT_SHARED_FOLDER).publish(o);
                        break;
                    case "sfaddsite":
                        if (a.openSharingCenter(), !e.shareid) break;
                        (o = LPProxy.getAllSharedGroupModelsByID()[e.shareid]) && o._shareInfo.name && a.openSiteDialog({
                            saveOptions: {
                                source: "vault"
                            },
                            defaultData: {
                                group: "Shared-" + o._shareInfo.name
                            }
                        });
                        break;
                    case "addidentity":
                        We();
                        break;
                    case "showdeleted":
                        a.openDeletedItems();
                        break;
                    case "viewcreditmon":
                        a.openCreditMonitoring();
                        break;
                    case "share":
                        Ke(n);
                        break;
                    case "ffid":
                    case "edit":
                        qe(n);
                        break;
                    case "acceptshare":
                        He(n);
                        break;
                    case "rejectshare":
                        Ye(n);
                        break;
                    case "omsstart":
                        LPPlatform.setIntroTutorialDisable(!0)
                }
            }
            null === te && je(e.view)
        }),
        He, Ye, qe, je, We, Ke, Xe = function(e) {
            var t = LPPlatform.getOpenGroups();
            if (null !== t) {
                for (var n = !0, o = e.getAllSubGroupsIncludingFavorites(!0), i = 0, r = o.length; i < r; ++i) {
                    var a = o[i];
                    t[a._model.getName()] ? (a.expand(), n = !1) : a.collapse()
                }
                n && Topics.get(Topics.ALL_COLLAPSED).publish()
            }
        },
        Qe = function(e) {
            if (e) {
                for (var t = e.getAllSubGroupsIncludingFavorites(!0), n = [], o = 0, i = t.length; o < i; ++o) {
                    var r = t[o];
                    r.isExpanded() && n.push(r._model.getName())
                }
                LPPlatform.setOpenGroups(n)
            }
        },
        Ze = function(e, t, n) {
            var o = r.getElementById("sharedFoldersMenuItem").parentElement;
            e === Constants.USER_FREE ? ($("#emptySharedFoldersIcon .tourText").append(LPTools.createElement("a", {
                class: "nbtn rbtn dynamicWidth",
                href: LPProxy.getBaseURL() + "go-premium",
                target: "_blank"
            }, Strings.translateString("Upgrade to Premium"))), o.parentElement.appendChild(o)) : e === Constants.USER_PREMIUM && t && !n && r.getElementById("sharedFoldersMenuItem").remove(), $(o.parentElement).children().last().addClass("last")
        },
        Je = function(e) {
            var t = $(".securityScore");
            t.text(null !== e ? Math.round(e) + "%" : ""), void 0 !== e ? t.parents(".menuIcon").addClass("score") : t.parents(".menuIcon").removeClass("score")
        };
    a.toggleInProgressOverlay = function() {
        E.toggle()
    };
    var et = function(e, t) {
            0 < t ? (e.text(t), e.show()) : e.hide()
        },
        tt = (nt = !1, function() {
            if (!nt)
                for (var e = LPProxy.getEmergencyAccessRecipientModels(), t = 0, n = e.length; t < n; ++t) {
                    var o = e[t];
                    if (o.allowedAccess() || o.hasRequestedAccess()) {
                        dialogs.denyEmergencyAccess.open({
                            sharee: o
                        }), nt = !0;
                        break
                    }
                }
        }),
        nt;
    a.openVault = function() {
        bt.all.show()
    }, a.openNotes = function() {
        bt.notes.show()
    }, a.openFormFills = function() {
        bt.formFill.show()
    }, a.toggleAdvancedMenu = function(e) {
        H.toggleClass("selected"), T.toggle("fast"), b.toggle(), Ce(e)
    }, a.clear = function() {
        L && (L.destruct(), L = null), $(r.body).addClass("loggedout"), LPPlatform.shouldShowVaultLoginButton() && $(r.body).addClass(LPPlatform.canBackgroundOpenPopover() ? "canopenpopover" : "cannotopenpopover"), $("#vaultLoadingOverlay").removeClass("loaded fadeIn"), Fe(), ee = J = Q = X = te = null
    }, a.maximizeLeftMenu = function() {
        V.addClass("maximized"), U.addClass("opened"), U.attr("title", Strings.translateString("Minimize")), setTimeout(Topics.get(Topics.VAULT_LEFT_MENU_TOGGLE).publish, 400)
    }, a.minimizeLeftMenu = function() {
        V.removeClass("maximized"), U.removeClass("opened"), U.attr("title", Strings.translateString("Maximize")), setTimeout(Topics.get(Topics.VAULT_LEFT_MENU_TOGGLE).publish, 400)
    }, a.toggleLeftMenu = function() {
        var e = !V.hasClass("maximized");
        LPProxy.setPreferences("leftMenuMaximize", e), e ? a.maximizeLeftMenu() : a.minimizeLeftMenu()
    }, a.addSource = function(e) {
        return e ? e.saveOptions && e.saveOptions.source || (e.saveOptions = {
            source: "vault"
        }) : e = {
            saveOptions: {
                source: "vault"
            }
        }, e
    }, a.openSiteDialog = function(e) {
        dialogs.site.open(a.addSource(e))
    }, a.openNoteDialog = function(e) {
        dialogs.note.open(a.addSource(e))
    }, a.openFormFillDialog = function(e) {
        dialogs.formFill.open(a.addSource(e))
    }, a.openFolderDialog = function(e, t) {
        dialogs.folder.open({
            vaultItem: e,
            defaultData: {
                groupParent: t ? t.getName() : ""
            },
            groups: J.getAllSubGroups()
        })
    }, a.openTryFamiliesDialog = function(e, t) {
        e = e || !1;
        var n = t ? {
            origin: t
        } : {};
        bg.sendLpImprove("try_families_lightbox_shown", n), dialogs.tryFamilies.open({
            forceAccepted: e
        })
    }, a.openUpgradeFamiliesForFolderSharingDialog = function(e) {
        var t = {
            forceAccepted: e || !1
        };
        bg.sendLpImprove("shared_folder_families_lightbox_shown"), dialogs.upgradeFamiliesForFolderSharing.open(t)
    }, a.openFamiliesInvitationDialog = function(t) {
        LPProxy.getFamiliesInvitations({
            params: {},
            success: function(e) {
                0 < e.length ? (e.sort(function(e, t) {
                    return new Date(t.date) - new Date(e.date)
                }), dialogs.familiesInvitation.open({
                    invitations: e,
                    callback: t
                })) : t(!1)
            },
            error: function() {
                t(!1)
            }
        })
    };
    var ot = function() {
            var e = LPProxy.getAccountClass();
            return e === Constants.USER_FREE || e === Constants.USER_PREMIUM_TRIAL || e === Constants.USER_PREMIUM
        },
        it = function() {
            var e = bg.localStorage_getItem("lp_families_dialog_snooze_timestamp"),
                t = bg.localStorage_getItem("lp_families_dialog_snooze_count"),
                n, o;
            return e && parseInt(e) > Date.now() && (t && "1" === t)
        },
        rt = function() {
            var e = bg.localStorage_getItem("lp_try_families_dialog_declined"),
                t = bg.localStorage_getItem("lp_families_dialog_snooze_count"),
                n = t && 1 < parseInt(t);
            return e || n
        },
        at;
    a.openCreateSharedFolderDialog = function(e, t) {
        !LPProxy.isLegacyPremium() && ot() && LPFeatures.allowTryFamilies() && !LPProxy.isFamiliesTrialStarted() ? a.openUpgradeFamiliesForFolderSharingDialog(!1) : LPProxy.isFamilyUser() && bg.get("LPContentScriptFeatures").family_shared_folders_enabled ? dialogs.familiesSharedFolder.open({
            group: e,
            children: t
        }) : LPProxy.getAccountClass() === Constants.USER_FREE ? (bg.sendLpImprove("upgrade_to_premium_lightbox_shown"), dialogs.upgradePremium.open({
            upgradeText: [LPTools.createElement("h1", "upgradeDialogHeader", Strings.translateString("Need to share passwords with family or friends?")), LPTools.createElement("p", "dialogText", Strings.translateString("Go Premium now to create a Shared Folder, invite family or friends, and fill the folder with passwords and notes. Give up to 5 people access to the Shared Folder. Changes are synced automatically, and you can assign read-only access. Go Premium now to create a Shared Folder!"))]
        })) : dialogs.createSharedFolder.open({
            group: e,
            children: t
        })
    }, a.openSettingsDialog = function() {
        null === X && (AccountSettingsService.call(function(e) {
            X = e, a.openSettingsDialog()
        }, function() {
            Notifications.displayErrorMessage("Could not retrieve account settings!")
        }), Topics.get(Topics.DIALOG_LOADING).publish()), dialogs.settings.open(X)
    }, a.openLinkAccountDialog = function() {
        LPProxy.callAcctsIFrameCommand("linkpersonal")
    }, a.openVerifyLinkedAccountDialog = function() {
        LPProxy.callAcctsIFrameCommand("verifypersonal")
    }, a.unlinkAccount = function() {
        var e = LPProxy.getLinkedAccount();
        e && e.unlink()
    }, a.toggleCollapseAll = (at = !1, Topics.get(Topics.ALL_COLLAPSED).subscribe(function() {
        at = !0, x.addClass("selected"), x.attr("title", Strings.Vault.EXPAND_ALL)
    }), Topics.get(Topics.ALL_EXPANDED).subscribe(function() {
        at = !1, x.removeClass("selected"), x.attr("title", Strings.Vault.COLLAPSE_ALL)
    }), function() {
        at ? (Topics.get(Topics.EXPAND_ALL).publish(), Topics.get(Topics.ALL_EXPANDED).publish()) : (Topics.get(Topics.COLLAPSE_ALL).publish(), Topics.get(Topics.ALL_COLLAPSED).publish())
    }), a.toggleSize = (a.displayLarge = function() {
        Topics.get(Topics.DISPLAY_LARGE).publish(), k.removeClass("selected"), k.attr("title", Strings.Vault.COMPACT_VIEW)
    }, a.displayCompact = function() {
        Topics.get(Topics.DISPLAY_COMPACT).publish(), k.addClass("selected"), k.attr("title", Strings.Vault.LARGE_VIEW)
    }, function() {
        LPProxy.getPreference("compactView") ? (a.displayCompact(), bg.lpevent(Z ? "v_grd_cmp" : "v_lst_cmp")) : (a.displayLarge(), bg.lpevent(Z ? "v_grd_lrg" : "v_lst_lrg"))
    }), a.displayAsGrid = function() {
        Topics.get(Topics.DISPLAY_GRID).publish(), F.addClass("selected"), M.removeClass("selected"), Z = !0
    }, a.displayAsList = function() {
        Topics.get(Topics.DISPLAY_LIST).publish(), M.addClass("selected"), F.removeClass("selected"), Z = !1
    }, a.search = function(e) {
        te && te.search(e)
    };
    var st = function(e, t) {
        switch (t) {
            case s:
                e.sortByName(!0);
                break;
            case l:
                e.sortByName(!1);
                break;
            case n:
                e.sortByFolder(!0);
                break;
            case o:
                e.sortByFolder(!1);
                break;
            case c:
                e.sortItemsByMostRecent();
                break;
            case u:
            case p:
                e.sortByEmail(!0);
                break;
            case d:
            case g:
                e.sortByEmail(!1)
        }
    };
    a.sort = function(e) {
        B.text(e), st(te.getContainer(), e)
    };
    var lt = function(e) {
            R.toggle("fast"), ee = R, LPTools.addKeyBoardNavigation(Y.children), Ce(e)
        },
        ct = function(e) {
            if (null === ee || ee.get(0).parentElement !== z) {
                var t = te.createSelectionContextMenu();
                z.appendChild(t), t.removeAttribute("style"), (ee = $(t)).show("fast")
            } else Ie();
            Ce(e)
        };
    a.showMoreOptionsMenu = function() {
        G.show("fast")
    }, a.hideMoreOptionsMenu = function() {
        G.hide("fast")
    };
    var ut = function(e) {
            j.toggleClass("selected"), N.toggle("fast"), Ce(e)
        },
        dt = function() {
            N.hide("fast"), j.removeClass("selected")
        };
    a.openEmergencyAccess = function() {
        me.show()
    }, a.openEmergencyAccessTrusted = function() {
        me.show(pe)
    }, a.openEmergencyAccessTrusting = function() {
        me.show(ge)
    }, a.openRestrictedEmergencyAccess = function() {
        dialogs.restrictedEmergencyAccess.open()
    }, a.openSharingCenter = function(e) {
        Te.show()
    }, a.openReceivedShareCenter = function(e) {
        Te.show(fe, e)
    }, a.openSentShareCenter = function(e) {
        Te.show(Se, e)
    };
    var pt = !(a.openSharedFolderCenter = function(e) {
            Te.show(Le, e)
        }),
        gt = function(e) {
            Le.getContainer().applyFilter({
                showEmptyGroups: !1,
                multiSelect: !1,
                func: function(e) {
                    return !e._model.isDeleted()
                }
            }, e), pt = !1
        },
        mt = function(e) {
            Le.getContainer().applyFilter({
                showEmptyGroups: !1,
                multiSelect: !1,
                func: function(e) {
                    return !0
                }
            }, e), pt = !0
        },
        ft = function(e) {
            pt ? mt(e) : gt(e)
        },
        ht = function() {
            pt ? gt() : mt()
        },
        yt;
    if (a.openAcceptShareDialog = function(e) {
            dialogs.acceptShare.open({
                vaultItem: e,
                groups: J.getAllSubGroups()
            })
        }, a.openShareDialog = function(e) {
            LPTools.openShareDialog(e)
        }, a.openSharedFolderDialog = function(e, t) {
            LPProxy.isFamilyUser() && e._shareInfo.cid !== Constants.UNAFFILIATED_COMPANY_ID && bg.get("LPContentScriptFeatures").family_shared_folders_enabled ? dialogs.familiesSharedFolder.open({
                folder: e,
                members: t
            }) : dialogs.sharedFolder.open(e, t)
        }, a.openSharedFolderAccessDialog = function(e) {
            dialogs.sharedfolderAccess.open(e)
        }, a.openRestrictedSharingDialog = function() {
            dialogs.restrictedSharing.open()
        }, a.closeShareDialog = function() {
            dialogs.share.close(!0)
        }, a.openOmarVaultMigrationDialog = function() {
            dialogs.omarVaultMigrationDialog.open()
        }, a.openManageIdentities = function() {
            se.show()
        }, a.openIdentityDialog = function(e) {
            dialogs.identity.open(e)
        }, a.enableIdentity = function(e) {
            null !== Q && Q !== e && (Q.disable(), LPProxy.enableIdentity(e)), Q = e;
            var t = J ? J._filter : null;
            null !== J && (Qe(J), J.destruct()), J = Ne(Q, t)
        }, a.openCreditMonitoring = function(e) {
            le.show()
        }, a.openCreateCreditMonitoringDialog = function() {
            dialogs.createCreditMonitoring.open()
        }, a.openDeletedItems = function(e) {
            ue.show()
        }, a.showAdPane = function() {
            var e;
            if (void 0 !== bg.is_edge ? bg.is_edge() : -1 !== navigator.userAgent.indexOf(" Edge/")) return !1;
            var t = bg.get("g_prompts").improve ? 1 : 0,
                n = r.getElementById("ad"),
                o = r.createElement("iframe");
            o.setAttribute("src", i.getPartnerURL(LPProxy.getBaseURL() + "ads.php?nobr=1&noga=1&rand=" + Math.floor(1e3 * Math.random()) + "&v=" + LPProxy.getVersion()) + "&g_lpImprove=" + t), o.setAttribute("sandbox", "allow-scripts allow-same-origin allow-popups"), n.appendChild(o), V.addClass("freeUser"), setInterval(function() {
                o.setAttribute("src", i.getPartnerURL(LPProxy.getBaseURL() + "ads.php?v=4.0&nobr=1&noga=1&rand=" + Math.floor(1e3 * Math.random()) + "&v=" + LPProxy.getVersion()) + "&g_lpImprove=" + t)
            }, 3e5)
        }, a.firstTimeLogin = function() {
            if (bg.get("g_first_time_login")) {
                var e = LPTools.createElement("iframe", {
                    class: "displaynone",
                    src: LPProxy.getBaseURL() + "lppixel.php"
                });
                $("#main").after(e)
            }
        }, V.bind("click", function() {
            Ae()
        }), $("#vault").bind("click", function() {
            we(), Ae()
        }), $("#loginButton").bind("click", function() {
            bg.open_login()
        }), LPPlatform.addEventListener(window, "unload", function() {
            Topics.get(Topics.CLEAR_DATA).publish()
        }), q.LP_addSearchHandlers("inputLight", function(e) {
            a.search(e)
        }), q.bind("keydown", function(e) {
            var t;
            if (40 === (e.keyCode || e.which)) {
                var n = te.getContainer();
                if (n) {
                    var o = n.getAllChildrenOrdered();
                    0 < o.length && (o[0].focus(), e.preventDefault(), e.stopPropagation())
                }
            }
        }), $("#orderOption").bind("click", lt), $("#actions").bind("click", ct), $(".sharingMenuItem").bind("click", function() {
            var e;
            bg.sendLpImprove("sharing_center_vault_click"), !LPProxy.isLegacyPremium() && ot() && LPFeatures.allowTryFamilies() && !rt() && !it() && LPProxy.isFamiliesTrialStarted() && a.openTryFamiliesDialog(!1, "sharing_menu_item"), a.openSharingCenter()
        }), H.bind("click", a.toggleAdvancedMenu), b.bind("click", Oe), U.bind("click", a.toggleLeftMenu), LPPlatform.addEventListener(r.getElementById("settingsMenuItem"), "click", function() {
            Topics.get(Topics.EDIT_SETTINGS).publish({
                source: "sidebar"
            })
        }), $("#linkAccountMenuItem").bind("click", function() {
            a.openLinkAccountDialog()
        }), $("#verifyLinkedAccountMenuItem").bind("click", function() {
            a.openVerifyLinkedAccountDialog()
        }), T.on("click", ".toolsMenuItem.subMenuOption", function() {
            return !1
        }), T.on("click", ".toolsMenuItem", Oe), C.bind("mouseenter", Re), C.bind("mouseleave", Be), C.bind("touchstart", function(e) {
            C.unbind("mousenter"), C.unbind("mouseleave"), C.hasClass("open") || (Re(), e.preventDefault())
        }), LPPlatform.addEventListener(r.getElementById("collapseAllToggle"), "click", function() {
            a.toggleCollapseAll()
        }), LPPlatform.addEventListener(r.getElementById("sizeToggle"), "click", function() {
            LPProxy.setPreferences("compactView", !LPProxy.getPreference("compactView")), a.toggleSize()
        }), LPPlatform.addEventListener(r.getElementById("gridButton"), "click", function() {
            a.displayAsGrid(), LPProxy.setPreferences("gridView", !0)
        }), LPPlatform.addEventListener(r.getElementById("listButton"), "click", function() {
            a.displayAsList(), LPProxy.setPreferences("gridView", !1)
        }), LPPlatform.addEventListener(r.getElementById("userMenuContainer"), "click", ut), LPPlatform.addEventListener(r.getElementById("manageIdentitiesMenuItem"), "click", function() {
            a.openManageIdentities()
        }), LPPlatform.addEventListener(r.getElementById("creditMonitoringMenuItem"), "click", function() {
            a.openCreditMonitoring()
        }), -1 != navigator.userAgent.indexOf(" Edge/") && r.getElementById("creditMonitoringMenuItem").remove(), LPPlatform.addEventListener(r.getElementById("openTourMenuItem"), "click", function() {
            LPPlatform.openTour(!0)
        }), $(".toolsMenuItem.subMenuOption").bind("click", function(e) {
            $(e.target.parentElement.nextElementSibling).toggle("fast"), $(e.target).toggleClass("selected"), Ce(e)
        }), LPPlatform.addEventListener(r.getElementById("toolsImport"), "click", function() {
            LPProxy.import()
        }), LPPlatform.addEventListener(r.getElementById("toolsExport"), "click", function() {
            LPProxy.export()
        }), LPPlatform.addEventListener(r.getElementById("toolsOpenFavorites"), "click", function() {
            LPProxy.openAllFavorites("vault")
        }), LPPlatform.addEventListener(r.getElementById("bookmarkletsMenuItem"), "click", function() {
            LPProxy.openBookmarklets()
        }), LPPlatform.addEventListener(r.getElementById("otpMenuItem"), "click", function() {
            $(this).attr("href", bg.get("base_url") + "otp.php")
        }), LPPlatform.addEventListener(r.getElementById("historyMenuItem"), "click", function() {
            LPProxy.openHistory()
        }), LPPlatform.addEventListener(r.getElementById("deletedMenuItem"), "click", function() {
            a.openDeletedItems()
        }), LPPlatform.addEventListener(r.getElementById("generateSharingKeys"), "click", function() {
            bg.lpevent("v_gsk"), dialogs.sharingKey.open()
        }), $("#generateSharingKeys").hide(), LPPlatform.addEventListener(r.getElementById("featureManager"), "click", function() {
            bg.openURL(window.location.origin + "/lastpass/index.html#/feature-manager")
        }), LPPlatform.addEventListener(r.getElementById("generatePasswordMenuItem"), "click", function() {
            var e;
            bg.lpevent("v_gpw"), (bg.get("LPContentScriptFeatures").better_generate_password_enabled ? dialogs.betterGeneratePassword : dialogs.generatePassword).open({
                fillGenerated: !1,
                saveOptions: {
                    source: "vault"
                }
            })
        }), $("#removedLinkedAccountMenuItem").bind("click", function() {
            a.unlinkAccount()
        }), $("#tryEnterprise").bind("click", function() {
            dialogs.enterpriseTrial.open()
        }), $("#emergencyAccessMenuItem").bind("click", function() {
            var e = 0 < bg.get("g_emer_sharers").length || 0 < bg.get("g_emer_sharees").length;
            !LPProxy.isFreeUser() && !LPProxy.isExpiredFamilyUser() || e ? (bg.sendLpImprove("emergency_access_vault_click"), a.openEmergencyAccess()) : (bg.sendLpImprove("restricted_emergency_access_lightbox_shown"), a.openRestrictedEmergencyAccess())
        }), $(".securityMenuItem").bind("click", function() {
            bg.lpevent("v_sec"), bg.openseccheck()
        }), $("#adminConsoleMenuItem").bind("click", function() {
            bg.lpevent("v_oec"), bg.openentconsole()
        }), $("#more-options-refer-a-friend").bind("click", function() {
            bg.sendLpImprove("refer_a_friend_more_options_click")
        }), $("#more-options-go-premium").bind("click", function() {
            bg.sendLpImprove("go_premium_more_options_vault_click")
        }), $("#familyAdminConsoleMenuItem").bind("click", function() {
            bg.lpevent("v_ofc"), bg.openFamilyConsole(), bg.sendLpImprove("families_manage_families_click")
        }), $("#lp-try-families").bind("click", function() {
            ot() && LPFeatures.allowTryFamilies() && a.openTryFamiliesDialog(!1, "try_families_submenu_item")
        }), Topics.get(Topics.ITEMS_DESELECTED).subscribe(function() {
            a.hideMoreOptionsMenu()
        }), Topics.get(Topics.ITEMS_SELECTED).subscribe(function() {
            a.showMoreOptionsMenu()
        }), Topics.get(Topics.SELECT_COUNT_CHANGE).subscribe(function(e) {
            ke(e)
        }), Topics.get(Topics.CONTEXT_MENU).subscribe(function(e, t) {
            t.parentElement !== r.body && r.body.appendChild(t), ee = LPTools.displayContextMenu(e, t)
        }), Topics.get(Topics.CONTEXT_CLOSE).subscribe(function() {
            Ie()
        }), Topics.get(Topics.ITEM_SHARE).subscribe(function(e) {
            LPFeatures.allowOmarDrawer() && 1 === e.length ? window.location.hash = "/drawers/(drawer:edit-item/" + e[0]._data.aid + "/sharing)" : a.openShareDialog(e)
        }), Topics.get(Topics.IDENTITY_ENABLE).subscribe(function(e) {
            a.enableIdentity(e), Et(J)
        }), Topics.get(Topics.CLEAR_DATA).subscribe(function() {
            a.clear(), Dialog.prototype.closeAllDialogs(!0), bg.closeSettingsIframe()
        }), Topics.get(Topics.LOGIN).subscribe(function(e) {
            _t(), a.initialize(e), Dialog.prototype.closeAllDialogs(!0), a.initializeWelcomeDialogs()
        }), Topics.get(Topics.REQUEST_SUCCESS).subscribe(function(e) {
            LPTools.getOption(e, "incrementAccountsVersion", !1) && we()
        }), yt = function(e, t, n) {
            Fe(), J.addChild(e.newDisplayObject(), t, n), Et(J)
        }, Topics.get(Topics.SITE_ADDED).subscribe(yt), Topics.get(Topics.NOTE_ADDED).subscribe(yt), Topics.get(Topics.FORM_FILL_ADDED).subscribe(yt), Topics.get(Topics.APPLICATION_ADDED).subscribe(yt), Topics.get(Topics.ITEM_REMOVED).subscribe(function() {
            Et(J)
        }), Topics.get(Topics.EDIT_SHARED_FOLDER_ACCESS).subscribe(function(e) {
            a.openSharedFolderAccessDialog(e)
        }), Topics.get(Topics.EDIT_SITE).subscribe(function(e) {
            LPFeatures.allowOmarDrawer() ? window.location.hash = "/drawers/(drawer:edit-item/" + e.vaultItem._data.aid + ")" : a.openSiteDialog(e)
        }), Topics.get(Topics.EDIT_NOTE).subscribe(function(e) {
            LPFeatures.allowOmarDrawer() ? window.location.hash = "/drawers/(drawer:edit-item/" + e.vaultItem._data.aid + ")" : a.openNoteDialog(e)
        }), Topics.get(Topics.EDIT_FORM_FILL).subscribe(function(e) {
            a.openFormFillDialog(e)
        }), Topics.get(Topics.EDIT_APPLICATION).subscribe(function(e) {
            dialogs.application.open(e)
        }), Topics.get(Topics.EDIT_SETTINGS).subscribe(function(e) {
            bg.sendLpImprove("viewvaultsettings", {
                source: e && e.source ? e.source : ""
            }), params = {}, bg.get("gRecovery") && (params.recovery = bg.get("gRecovery")), e && e.defaulttab && (params.defaulttab = e.defaulttab), LPProxy.callAcctsIFrameCommand("settings", null, params)
        }), Topics.get(Topics.EDIT_IDENTITY).subscribe(function(e) {
            a.openIdentityDialog(e)
        }), Topics.get(Topics.ACCEPT_SHARE).subscribe(function(e) {
            a.openAcceptShareDialog(e)
        }), Topics.get(Topics.RENAME_FOLDER).subscribe(function(e) {
            a.openFolderDialog(e)
        }), Topics.get(Topics.CREATE_SUB_FOLDER).subscribe(function(e) {
            a.openFolderDialog(null, e)
        }), Topics.get(Topics.GROUP_ADDED).subscribe(function(e, t) {
            if (Fe(), J.addChild(e.newDisplayObject(), t), e instanceof SharedGroup) {
                var n = Le.getContainer();
                if (null !== n) {
                    var o = new SharedFolderItem(e);
                    n.addChild(o)
                }
            }
        }), Topics.get(Topics.ESCAPE).subscribe(function(e) {
            var t = Dialog.prototype.getCurrentDialog();
            t && t.close(), we(), Ae()
        }), Topics.get(Topics.EDIT_SHARED_FOLDER).subscribe(function(e, t) {
            a.openSharedFolderDialog(e, t)
        }), Topics.get(Topics.IDENTITY_ADDED).subscribe(function(e) {
            se.getContainer().addChild(e.newDisplayObject())
        }), a.refreshVault = function() {
            LPProxy.initializeModel(), tt(), (L = LPProxy.getUser()).initialize(N, $("#userMenuText")), LPTools.parseUserSpecificMenu(r.getElementById("tools"), L._accountClass), LPTools.parseUserSpecificMenu(r.getElementById("leftMenu"), L._accountClass), Ze(LPProxy.getAccountClass(), LPProxy.isPremiumAsAPerk(), LPProxy.isLegacyPremium()), VaultState.setIdentities(L._identities), LPProxy.enableCurrentIdentity(L._identities), L.isFreeOrTrial() ? a.showAdPane() : V.removeClass("freeUser"), LPProxy.getSecurityChallengeScore(Je), Dialog.prototype.closeInProcessDialogs(), VaultItemDialog.prototype.refreshOpenDialogs(), Topics.get(Topics.REFRESH_PREFERENCES).publish(), Ie()
        }, Topics.get(Topics.REFRESH_DATA).subscribe(a.refreshVault), Topics.get(Topics.UPDATE_NOTIFICATION_COUNT).subscribe(function(e) {
            te && te.updateNotificationCount("number" == typeof e ? e : 1)
        }), Topics.get(Topics.ACCOUNT_LINKED).subscribe(function(e) {
            $("#linkAccountMenuItem").LP_hide(), $("#verifyLinkedAccountMenuItem").LP_hide(), $("#removedLinkedAccountMenuItem").LP_show()
        }), Topics.get(Topics.ACCOUNT_LINKED_NEEDS_VERIFICATION).subscribe(function(e) {
            $("#linkAccountMenuItem").LP_hide(), $("#verifyLinkedAccountMenuItem").LP_show(), $("#removedLinkedAccountMenuItem").LP_hide()
        }), Topics.get(Topics.ACCOUNT_UNLINKED).subscribe(function(e) {
            $("#linkAccountMenuItem").LP_show(), $("#verifyLinkedAccountMenuItem").LP_hide(), $("#removedLinkedAccountMenuItem").LP_hide()
        }), Topics.get(Topics.CREATE_SHARED_FOLDER).subscribe(function(e, t) {
            a.openCreateSharedFolderDialog(e, t)
        }), Topics.get(Topics.REPROMPT).subscribe(function(e) {
            dialogs.reprompt.open({
                successCallback: e
            })
        }), Topics.get(Topics.CONFIRM).subscribe(function(e) {
            dialogs.confirmation.open(e)
        }), Topics.get(Topics.EMERGENCY_RECIPIENT_ADDED).subscribe(function(e) {
            pe.getContainer().addChild(e.newDisplayObject())
        }), Topics.get(Topics.EDIT_EMERGENCY_RECIPIENT).subscribe(function(e) {
            dialogs.addEmergencyAccess.open({
                vaultItem: e
            })
        }), Topics.get(Topics.REAPPLY_SEARCH).subscribe(function(e, t) {
            var n = q.val();
            n && e.applySearch(n, t)
        }), Topics.get(Topics.ENROLLED_CREDIT_MONITORING).subscribe(function() {
            le.refresh()
        }), Topics.get(Topics.ITEM_SHARED).subscribe(function(e) {
            Se.refresh()
        }), Topics.get(Topics.REFRESH_PREFERENCES).subscribe(function() {
            switch (LPFeatures.updateFeatures({
                import: !0,
                noexport: !1,
                share: !0,
                share_onlyfolders: !1,
                show_notes: !0,
                bookmarklets: !0,
                hideidentities: !1,
                showcredmon: !0,
                link_personal: !0,
                show_formfills: !0
            }), LPProxy.hasReceivedShares() ? V.removeClass("noReceivedShares") : V.addClass("noReceivedShares"), te) {
                case Se:
                    LPFeatures.allowIndividualSharing() || (Te.clear(), bt.all.show(), dialogs.alert.open({
                        title: Strings.translateString("Policy Update"),
                        text: Strings.translateString("Your enterprise has prohibited individual sharing.")
                    }));
                    break;
                case Le:
                    LPFeatures.allowSharedFolders() || (bt.all.show(), dialogs.alert.open({
                        title: Strings.translateString("Policy Update"),
                        text: Strings.translateString("Your enterprise has prohibited sharing.")
                    }))
            }
        }), Strings.translate(r.body), $("input,textarea").prop("spellcheck", !1), LPFeatures.allowNewSettings()) {
        var Pt = document.getElementById("new-settings-iframe");
        Pt.src = LPProxy.getBaseURL() + "newvault/lp-vault/settings.html", Pt.addEventListener("load", function() {
            Pt.contentWindow.postMessage({
                localkey: parent.g_local_key
            }, LPProxy.getBaseURL())
        })
    }
    Topics.get(Topics.INTRO_TOURS_LOADED).subscribe(function(e) {
        var t = LPProxy.seenVaultPostFamilies(),
            n = LPProxy.predatesFamilies(),
            o = LPFeatures.allowTryFamilies(),
            i = LPProxy.isFamiliesTrialStarted();
        !o || !n || t || rt() || it() || !ot() || i || a.openTryFamiliesDialog(!1, "first_vault_entry")
    }), Notifications.initialize();
    var St = function(e, t, n) {
            var o = LPTools.createElement("div", $.extend(n, {
                class: "leftMenuItem",
                id: n.id
            }));
            return o.appendChild(t), o.appendChild(LPTools.createElement("span", {
                class: "menuText"
            }, e)), $(o)
        },
        vt = function(e, t) {
            return e instanceof GroupDisplay || e._model.getRecordType() === t.recordType
        },
        Lt = function(t, e) {
            if (t.types) {
                var n = e.filter(function(e) {
                    return -1 < t.types.indexOf(e.id)
                });
                return function(e) {
                    for (var t = 0; t < n.length; ++t)
                        if (vt(e, n[t])) return !0;
                    return !1
                }
            }
            return function(e) {
                return !(e instanceof FormFillDisplay)
            }
        },
        bt = {},
        Et = function(l) {
            if (LPFeatures.allowOmarIA()) {
                var n = document.getElementById("leftMenuItemsContainer");
                LPTools.removeDOMChildren(n);
                var c = LPProxy.getRecordConfig(),
                    u = !1,
                    d = !1,
                    p = function(e) {
                        u && (n.appendChild(LPTools.createElement("div", "leftMenuItemsDivider")), u = !1);
                        var t = bt[e.id].getElement();
                        n.appendChild(t), null != e.user && t.setAttribute("user", e.user)
                    },
                    g = function(e, t) {
                        if (Array.isArray(e)) u = 0 < t, e.forEach(g);
                        else {
                            var n = LPProxy.getConfigViewObject(e);
                            if (n.default) {
                                if (n.types) {
                                    var o = LPProxy.getConfigTypeObject(n.types[0]),
                                        i = bg.get("g_prefoverrides").noformfill ? bg.get("g_prefoverrides").noformfill : [],
                                        r;
                                    if (!(-1 !== LPProxy.getAllModelTypes().indexOf(o.recordType)) && "Account" !== o.recordType && (-1 !== i.indexOf("0") || -1 !== i.indexOf(o.enterprisePolicyId))) return
                                }
                                p(n)
                            } else {
                                var a = Lt(n, c.types),
                                    s = l._filter;
                                l.applyFilter({
                                    func: a
                                }, {
                                    checkForStateChange: !1
                                }), 0 < l.getItemChildren().length ? p(n) : bt[n.id] === te && (d = !0), l.applyFilter(s, {
                                    checkForStateChange: !1
                                })
                            }
                        }
                    };
                u = !0, c.viewConfig.forEach(g), LPTools.parseUserSpecificMenu(r.getElementById("leftMenu"), LPProxy.getAccountClass()), d && bt.all.show(), LPFeatures.hide_cloud_apps_policy_enabled() && $("#cloud-apps").LP_hide()
            }
        },
        Tt = function(e) {
            var t, n = LPProxy.getRecordConfig();
            return t = e.types && 0 < e.types.length ? n.icons[e.types[0]] : n.icons.all, LPTools.createElement("i", {
                class: ["menuIcon", t]
            })
        },
        _t = function() {
            if (LPFeatures.allowOmarIA()) {
                var i = LPProxy.getRecordConfig();
                i.views.forEach(function(o) {
                    bt[o.id] = new re({
                        filter: {
                            showEmptyGroups: !0,
                            func: Lt(o, i.types)
                        },
                        sortOptions: e,
                        menuElement: St(Strings.translateString(o.name), Tt(o), {
                            id: o.id
                        }),
                        bodyState: "vaultContent " + o.id,
                        scrollParent: I,
                        title: Strings.translateString(o.name),
                        addMenu: [new P({
                            text: "ADD_ITEM",
                            autoId: "vaultAddItemButton",
                            func: function() {
                                var t, n = bg.get("g_prefoverrides").noformfill ? bg.get("g_prefoverrides").noformfill : [];
                                o.types && -1 === n.indexOf("0") ? i.types.forEach(function(e) {
                                    if (e.id === o.types[0]) switch (t = e.recordType) {
                                        case i.TYPE.Password:
                                            dialogs.site.open();
                                            break;
                                        case i.TYPE.Custom:
                                            dialogs.addItem.open({
                                                isExpanded: !0
                                            });
                                            break;
                                        default:
                                            -1 !== n.indexOf(e.enterprisePolicyId) ? dialogs.addItem.open() : dialogs.note.open({
                                                defaultData: {
                                                    notetype: t,
                                                    language: Note.prototype.isValidLanguage(navigator.language) ? navigator.language : "en-US"
                                                }
                                            })
                                    }
                                }) : dialogs.addItem.open()
                            }
                        }), S.Folder]
                    })
                })
            } else bt.all = new re({
                filter: {
                    showEmptyGroups: !0,
                    func: function(e) {
                        return e instanceof AccountBaseDisplay || e instanceof ApplicationDisplay || e instanceof GroupDisplay
                    }
                },
                sortOptions: e,
                menuElement: $("#vaultMenuItem"),
                bodyState: "vaultContent site",
                scrollParent: I,
                title: Strings.translateString("Sites"),
                addMenu: [S.Site, S.Note, S.ShareItems, S.Folder]
            }), bt.notes = new re({
                filter: {
                    showEmptyGroups: !1,
                    func: function(e) {
                        return e instanceof NoteDisplay || e instanceof GroupDisplay
                    }
                },
                sortOptions: e,
                menuElement: $("#notesMenuItem"),
                bodyState: "vaultContent note",
                scrollParent: I,
                title: Strings.translateString("Secure Notes"),
                addMenu: [S.Note, S.ShareItems, S.Folder]
            }), bt.formFills = new re({
                filter: {
                    showEmptyGroups: !1,
                    multiSelect: !1,
                    hasFolderView: !1,
                    func: function(e) {
                        return e instanceof FormFillDisplay
                    }
                },
                sortOptions: t,
                menuElement: $("#formFillMenuItem"),
                bodyState: "vaultContent formFill",
                scrollParent: I,
                title: Strings.translateString("Form Fills"),
                addMenu: [S.FormFill]
            });
            LPFeatures.isDogfood() || $("#featureManager").LP_hide(), LPFeatures.hide_cloud_apps_policy_enabled() ? K.LP_hide() : K.LP_show().bind("click", function() {
                bg.sendLpImprove("vault_cloud_apps_clicked"), bg.openOnNewTab("saml/launch/nopassword?RelayState=/")
            }), LPFeatures.hide_cloud_apps_policy_enabled() ? $("#cloud-apps").LP_hide() : $("#cloud-apps").LP_show().bind("click", function() {
                bg.sendLpImproveCallback("vault_cloud_apps_clicked", function() {
                    window.location.href = "/saml/launch/nopassword?RelayState=/"
                })
            })
        }
};
Topics.get(Topics.INITIALIZED).subscribe(function() {
    initialize(document, LPVault, BuildVariables)
});
//# sourceMappingURL=sourcemaps/vault.js.map