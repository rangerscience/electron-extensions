"function" != typeof Object.create && (Object.create = function(t) {
        function e() {}
        return e.prototype = t, new e
    }),
    function() {
        var a = function(t, e) {
            if (this._data = $.extend(!0, {}, t), this._sharedGroup = e) {
                var a = this.getTopLevelGroupName();
                e.getName() !== a && (this._data.group = e.getName() + this._data.group.substring(a.length))
            } else !this.useSharePrefix() && this._data.group && 0 === this._data.group.indexOf(this.SHARED_FOLDER_NAME_PREFIX) && (this._data.group = this._data.group.substring(this.SHARED_FOLDER_NAME_PREFIX.length))
        };
        VaultItemBase = function(t, e) {
            this._views = [], a.apply(this, arguments)
        }, VaultItemBase.prototype.refresh = function(t, e) {
            return a.apply(this, arguments), this
        }
    }(), VaultItemBase.prototype.defaultFields = function(t, e) {
        for (var a in e = e || this._data, t) void 0 === e[a] && (e[a] = t[a])
    }, VaultItemBase.prototype.SHARED_FOLDER_NAME_PREFIX = "Shared-", VaultItemBase.prototype.useSharePrefix = function() {
        var t;
        return !!this.getSharedGroup() && this._sharedGroup.useSharePrefix()
    }, VaultItemBase.prototype.getTopLevelGroupName = function() {
        var t = this._data.group || "",
            e = t.indexOf("\\");
        return -1 < e ? t.substring(0, e) : t
    }, VaultItem = function() {
        var a = {
                pwprotect: !1
            },
            t;
        return function(t, e) {
            VaultItemBase.call(this, t, e), this.defaultFields(a)
        }
    }(), VaultItem.prototype = Object.create(VaultItemBase.prototype), VaultItem.prototype.constructor = VaultItem, AccountBase = function() {
        var a = {
                action: "",
                aid: "0",
                basic_auth: "0",
                captcha_id: "",
                custom_js: "",
                extra: "",
                fields: [],
                group: "",
                fiid: "",
                getpw: !1,
                individualshare: !1,
                last_touch: "0",
                method: "",
                newvalues: [],
                realm_data: "",
                sharedfromuid: "",
                submit_id: "",
                urid: "0",
                fav: "0",
                username: "",
                password: ""
            },
            t;
        return function(t, e) {
            VaultItem.call(this, t, e), this.defaultFields(a)
        }
    }(), AccountBase.prototype = Object.create(VaultItem.prototype), AccountBase.prototype.constructor = AccountBase, AccountBaseWithFields = function(t, e) {
        AccountBase.call(this, t, e)
    }, AccountBaseWithFields.prototype = Object.create(AccountBase.prototype), AccountBaseWithFields.prototype.constructor = AccountBaseWithFields, Account = function(t, e) {
        AccountBaseWithFields.call(this, t, e), this._data.sn = 0
    }, Account.prototype = Object.create(AccountBaseWithFields.prototype), Account.prototype.constructor = Account, Account.prototype.getDisplayClass = function() {
        return AccountDisplay
    }, Account.prototype.TYPE = "Account", Account.prototype.getRecordType = function() {
        return Account.prototype.TYPE
    }, Group = function(t, e) {
        AccountBase.call(this, t, e), this._data.url = "http://group"
    }, Group.prototype = Object.create(AccountBase.prototype), Group.prototype.constructor = Group, Group.prototype.getDisplayClass = function() {
        return GroupDisplay
    }, Group.prototype.TYPE = "Group", DummyGroup = function(t, e) {
        Group.call(this, {
            group: t
        }, e)
    }, DummyGroup.prototype = Object.create(Group.prototype), DummyGroup.prototype.constructor = DummyGroup, DummyGroup.prototype.destruct = function() {
        this._views.forEach(function(t) {
            "function" == typeof t.destruct && t.destruct()
        })
    }, DummyGroup.prototype.getDisplayClass = function() {
        return DummyGroupDisplay
    }, DefaultGroup = function(t) {
        DummyGroup.call(this, t)
    }, DefaultGroup.prototype = Object.create(DummyGroup.prototype), DefaultGroup.prototype.constructor = DefaultGroup, DefaultGroup.prototype.getDisplayClass = function() {
        return DefaultGroupDisplay
    },
    function() {
        var o = {
                accepted: "1",
                association: "0",
                associative: "0",
                can_administer: "1",
                cgid: "0",
                deleted: "0",
                download: "1",
                give: "1",
                id: "0",
                invisible: "0",
                outside_enterprise: "0",
                readonly: "0",
                shareid: "0"
            },
            a = function(t, e) {
                this.useSharePrefix() && 0 !== this._data.group.indexOf(this.SHARED_FOLDER_NAME_PREFIX) && (this._data.group = this.SHARED_FOLDER_NAME_PREFIX + this._data.group), this._data.group = this.getTopLevelGroupName(), e = e || {};
                var a = LPTools.get_gmt_timestamp();
                o.create = a, o.last_modified = a, this.defaultFields(o, e), this._shareInfo = e, this._shareInfo.name = this.getShareGroupName(), this._shareInfo.decsharename = this._data.group, this.setID(this._data.aid)
            };
        SharedGroup = function(t, e) {
            Group.call(this, t), a.apply(this, arguments)
        }, SharedGroup.prototype = Object.create(Group.prototype), SharedGroup.prototype.constructor = SharedGroup, SharedGroup.prototype.refresh = function(t, e) {
            return Group.prototype.refresh.call(this, t), a.apply(this, arguments), this
        }
    }(), SharedGroup.prototype.getDisplayClass = function() {
        return SharedGroupDisplay
    }, LinkedGroup = function(t, e) {
        SharedGroup.call(this, t, e)
    }, LinkedGroup.prototype = Object.create(SharedGroup.prototype), LinkedGroup.prototype.constructor = LinkedGroup, LinkedGroup.prototype.getDisplayClass = function() {
        return LinkedGroupDisplay
    }, EmergencyAccessGroup = function(t, e) {
        LinkedGroup.call(this, t, e)
    }, EmergencyAccessGroup.prototype = Object.create(LinkedGroup.prototype), EmergencyAccessGroup.prototype.constructor = EmergencyAccessGroup, EmergencyAccessGroup.prototype.getDisplayClass = function() {
        return EmergencyAccessGroupDisplay
    },
    function() {
        var o = function(t, e, a) {
            this._data.sn = 1, this._data.url = "http://sn", this._attachments = a || [];
            for (var o = 0, r = this._attachments.length; o < r; ++o) this._attachments[o].setParentNote(this)
        };
        Note = function(t, e, a) {
            AccountBase.call(this, t, e), o.apply(this, arguments)
        }, Note.prototype = Object.create(AccountBase.prototype), Note.prototype.constructor = Note, Note.prototype.refresh = function(t, e, a) {
            return AccountBase.prototype.refresh.apply(this, arguments), o.apply(this, arguments), this
        }
    }(), Note.prototype.getDisplayClass = function() {
        return NoteDisplay
    }, Note.prototype.TYPE = "Note", FormFill = function() {
        var a = {
                address1: "",
                address2: "",
                address3: "",
                bankacctnum: "",
                bankname: "",
                bankroutingnum: "",
                birthday: "",
                cccsc: "",
                ccexp: "",
                ccissuenum: "",
                ccname: "",
                ccnum: "",
                ccstart: "",
                city: "",
                company: "",
                country: "",
                country_cc3l: "",
                country_name: "",
                county: "",
                creditmon: "",
                customfield1alttext: "",
                customfield1cfid: "0",
                customfield1text: "",
                customfield1value: "",
                customfield2alttext: "",
                customfield2cfid: "0",
                customfield2text: "",
                customfield2value: "",
                customfield3alttext: "",
                customfield3cfid: "0",
                customfield3text: "",
                customfield3value: "",
                deleteext: 0,
                driverlicensenum: "",
                email: "",
                eveext: "",
                evephone: "",
                evephone3lcc: "",
                fax: "",
                fax3lcc: "",
                faxext: "",
                ffid: 0,
                firstname: "",
                firstname2: "",
                firstname3: "",
                gender: "",
                group: "",
                lastname: "",
                lastname2: "",
                lastname3: "",
                middlename: "",
                mobileemail: "",
                mobileext: "",
                mobilephone: "",
                mobilephone3lcc: "",
                notes: "",
                phone: "",
                phone3lcc: "",
                phoneext: "",
                profilelanguage: "",
                profilename: "",
                profiletype: 0,
                ssn: "",
                state: "",
                state_name: "",
                taxid: "",
                timezone: "",
                title: "",
                username: "",
                zip: ""
            },
            t;
        return function(t, e) {
            VaultItem.call(this, t, e), this.defaultFields(a), void 0 === this._data.decprofilename && (this._data.decprofilename = LPProxy.decryptMobile(this._data.profilename, !0, this.getKey()))
        }
    }(), FormFill.prototype = Object.create(VaultItem.prototype), FormFill.prototype.constructor = FormFill, FormFill.prototype.getDisplayClass = function() {
        return FormFillDisplay
    }, FormFill.prototype.TYPE = "FormFill", FormFill.prototype.getRecordType = function() {
        return FormFill.prototype.TYPE
    }, Attachment = function(t) {
        VaultItemBase.call(this, t), this._filename = null
    }, Attachment.prototype = Object.create(VaultItemBase.prototype), Attachment.prototype.constructor = Attachment, Attachment.prototype.getDisplayClass = function() {
        return AttachmentDisplay
    }, Identity = function(t) {
        VaultItemBase.call(this, t), this.defaultFields({
            iid: "0"
        }), this._enabled = !1, void 0 === this._data.deciname && (this._data.deciname = LPProxy.decrypt(this._data.iname, this.getKey()))
    }, Identity.prototype = Object.create(VaultItemBase.prototype), Identity.prototype.constructor = Identity, Identity.prototype.getDisplayClass = function() {
        return IdentityDisplay
    }, AllIdentity = function() {
        Identity.call(this), this._data.deciname = Strings.translateString("All"), this._data.iid = ""
    }, AllIdentity.prototype = Object.create(Identity.prototype), AllIdentity.prototype.constructor = AllIdentity, AllIdentity.prototype.getDisplayClass = function() {
        return AllIdentityDisplay
    }, Application = function() {
        var a = {
                appaid: "0"
            },
            t;
        return function(t, e) {
            AccountBaseWithFields.call(this, t, e), this.defaultFields(a), this.setSaveAll()
        }
    }(), Application.prototype = Object.create(AccountBaseWithFields.prototype), Application.prototype.constructor = AccountBaseWithFields, Application.prototype.getDisplayClass = function() {
        return ApplicationDisplay
    }, Application.prototype.getRecordType = function() {
        return "Account"
    }, Application.prototype.TYPE = "Application",
    function(u, t, h, d) {
        var e, a, o, r, s, n, i, p, c, l, g, y, f, m, _, S, v, I, E;
        ! function() {
            var n = function(t, e, a) {
                    return e < t ? a ? 1 : -1 : t < e ? a ? -1 : 1 : 0
                },
                r;
            VaultItemBase.prototype.getRecordType = function() {
                return null
            }, VaultItemBase.prototype.sortByFunction = function(t, e, a, o) {
                var r = t[a].apply(t),
                    s = e[a].apply(e);
                return n(r, s, o)
            }, VaultItemBase.prototype.sortByTextFunction = (r = function(t, e) {
                var a = t[e].apply(t);
                return "string" == typeof a ? a.toLowerCase() : ""
            }, function(t, e, a, o) {
                return n(r(t, a), r(e, a), o)
            }), VaultItemBase.prototype.sortByNameAsc = function(t, e) {
                return VaultItemBase.prototype.sortByTextFunction(t, e, "getName", !0)
            }, VaultItemBase.prototype.sortByNameDesc = function(t, e) {
                return VaultItemBase.prototype.sortByTextFunction(t, e, "getName", !1)
            }, VaultItemBase.prototype.lockForUpdate = function() {
                for (var t = 0, e = this._views.length; t < e; ++t) this._views[t].lockForUpdate()
            }, VaultItemBase.prototype.unlock = function() {
                for (var t = 0, e = this._views.length; t < e; ++t) this._views[t].unlock()
            }, VaultItemBase.prototype.updateViews = function(t, e) {
                for (var a = this._views.slice(), o = 0, r = a.length; o < r; ++o) a[o].updateView(t, e)
            }, VaultItemBase.prototype.destroyViews = function() {
                for (var t = this._views.slice(), e = 0, a = t.length; e < a; ++e) t[e].destruct();
                this._views = []
            }, VaultItemBase.prototype.newDisplayObject = function() {
                var t;
                return new(this.getDisplayClass())(this)
            }, VaultItemBase.prototype.addView = function(t) {
                this._views.push(t)
            }, VaultItemBase.prototype.removeView = function(t) {
                for (var e = 0, a = this._views.length; e < a; ++e)
                    if (this._views[e] === t) {
                        this._views.splice(e, 1);
                        break
                    }
            }, VaultItemBase.prototype.isNew = function() {
                return "0" === this.getID()
            }, VaultItemBase.prototype.createHandler = function(t) {
                var e = this;
                if (1 < arguments.length) {
                    for (var a = [], o = 1, r = arguments.length; o < r; ++o) a.push(arguments[o]);
                    return function() {
                        t.apply(e, a)
                    }
                }
                return function() {
                    t.apply(e, arguments)
                }
            }, VaultItemBase.prototype.update = function(t, e, a) {
                if (d.removeItem(this), t && (this._data = t), d.addItem(this), this._sharedGroup = e ? e.getSharedGroup() : null, h.getOption(a, "updateViews", !0)) {
                    var o = null;
                    if (Array.isArray(this._views)) {
                        var r = this._views[0];
                        o = r && r._parent ? r._parent._model : null
                    }
                    if (this.updateViews(e, a), bg.get("g_nofolder_feature_enabled") && o && o._data && o._views) {
                        var s = o._data.group === Strings.Vault.NONE_GROUP || o._data.group === Strings.Consts.NONE_GROUP,
                            n = 0 === o._views.length;
                        s && n && d.removeItem(o)
                    }
                }
            }, VaultItemBase.prototype.deleteUpdates = function(t) {
                void 0 !== t && !t || this.publishDeleteSuccess(1);
                var e = Array.isArray(this._views) && this._views[0] && this._views[0]._parent ? this._views[0]._parent._model : null;
                if (this.destroyViews(), d.removeItem(this), Topics.get(Topics.ITEM_REMOVED).publish(), bg.get("g_nofolder_feature_enabled") && e && e._data && e._views) {
                    var a = e._data.group === Strings.Vault.NONE_GROUP || e._data.group === Strings.Consts.NONE_GROUP,
                        o = 0 === e._views.length;
                    a && o && d.removeItem(e)
                }
            }, VaultItemBase.prototype.getRepromptType = function() {
                return null
            }, VaultItemBase.prototype.publishAdd = function(t, e, a) {
                d.addItem(this), this.publishAddSuccess(1), Topics.get(t).publish(this, e, a)
            }, VaultItemBase.prototype.getSuccessfulAddMessage = function(t) {
                return 1 < t ? Strings.translateString("%1 items were added.", t) : Strings.translateString("%1 was added.", this.toString())
            }, VaultItemBase.prototype.getSuccessfulDeleteMessage = function(t) {
                return 1 < t ? Strings.translateString("%1 items were deleted.", t) : Strings.translateString("%1 was deleted.", this.toString())
            }, VaultItemBase.prototype.getSuccessfulDeleteMessage = function(t) {
                return 1 < t ? Strings.translateString("%1 items were deleted.", t) : Strings.translateString("%1 was deleted.", this.toString())
            }, VaultItemBase.prototype.getSuccessfulRestoreMessage = function(t) {
                return 1 < t ? Strings.translateString("%1 items were restored.", t) : Strings.translateString("%1 was restored.", this.toString())
            }, VaultItemBase.prototype.getSuccessfulRenameMessage = function(t) {
                return 1 < t ? Strings.translateString("%1 items were renamed.", t) : Strings.translateString("%1 was renamed.", this.toString())
            }, VaultItemBase.prototype.getSuccessfulRemoveMessage = function(t) {
                return 1 < t ? Strings.translateString("%1 items were removed.", t) : Strings.translateString("%1 was removed.", this.toString())
            }, VaultItemBase.prototype.getSuccessfulSaveMessage = function(t) {
                return 1 < t ? Strings.translateString("%1 items were saved.", t) : Strings.translateString("%1 was saved.", this.toString())
            }, VaultItemBase.prototype.getSuccessfulPurgeMessage = function(t) {
                return 1 < t ? Strings.translateString("%1 items were purged.", t) : Strings.translateString("%1 was purged.", this.toString())
            }, VaultItemBase.prototype.getSuccessfulMoveMessage = function(t, e) {
                return 1 < t ? Strings.translateString("%1 items were moved to %2.", t, e) : Strings.translateString("%1 was moved to %2.", this.toString(), e)
            }, VaultItemBase.prototype.getSuccessfulOrganizeMessage = function(t, e) {
                return 1 < t ? Strings.translateString("%1 items were organized to %2.", t, e) : Strings.translateString("%1 was organized to %2.", this.toString(), e)
            }, VaultItemBase.prototype.getSuccessfulAddToFavoritesMessage = function(t) {
                return 1 < t ? Strings.translateString("%1 items were added to Favorites.", t) : Strings.translateString("%1 was added to Favorites.", this.toString())
            }, VaultItemBase.prototype.publishAddSuccess = function(t) {
                Topics.get(Topics.SUCCESS).publish(this.getSuccessfulAddMessage(t))
            }, VaultItemBase.prototype.publishDeleteSuccess = function(t) {
                Topics.get(Topics.SUCCESS).publish(this.getSuccessfulDeleteMessage(t))
            }, VaultItemBase.prototype.publishRenameSuccess = function(t) {
                Topics.get(Topics.SUCCESS).publish(this.getSuccessfulRenameMessage(t))
            }, VaultItemBase.prototype.publishRemoveSuccess = function(t) {
                Topics.get(Topics.SUCCESS).publish(this.getSuccessfulRemoveMessage(t))
            }, VaultItemBase.prototype.publishRestoreSuccess = function(t) {
                Topics.get(Topics.SUCCESS).publish(this.getSuccessfulRestoreMessage(t))
            }, VaultItemBase.prototype.publishSaveSuccess = function(t) {
                Topics.get(Topics.SUCCESS).publish(this.getSuccessfulSaveMessage(t))
            }, VaultItemBase.prototype.publishPurgeSuccess = function(t) {
                Topics.get(Topics.SUCCESS).publish(this.getSuccessfulPurgeMessage(t))
            }, VaultItemBase.prototype.publishMoveSuccess = function(t, e) {
                Topics.get(Topics.SUCCESS).publish(this.getSuccessfulMoveMessage(t, e))
            }, VaultItemBase.prototype.publishOrganizeSuccess = function(t, e) {
                Topics.get(Topics.SUCCESS).publish(this.getSuccessfulOrganizeMessage(t, e))
            }, VaultItemBase.prototype.publishAddToFavoritesSuccess = function(t) {
                Topics.get(Topics.SUCCESS).publish(this.getSuccessfulAddToFavoritesMessage(t))
            }, VaultItemBase.prototype.handleClickEvent = function(t, e) {
                switch (t) {
                    case Constants.ACTION_EDIT:
                        this.edit(e);
                        break;
                    case Constants.ACTION_DELETE:
                        this.deleteItem(e);
                        break;
                    case Constants.ACTION_PURGE:
                        this.purge(e);
                        break;
                    case Constants.ACTION_RESTORE:
                        this.restore(e);
                        break;
                    case Constants.ACTION_MOVE_TO_FOLDER:
                        this.moveToFolder(e.group, e.itemsForAction, e)
                }
            }, VaultItemBase.prototype.isShared = function() {
                var t = this.getSharedGroup();
                return t && !(t instanceof LinkedGroup)
            }, VaultItemBase.prototype.shouldPasswordProtectShare = function() {
                return !0
            }, VaultItemBase.prototype.passwordProtect = function(t, e) {
                for (var a = h.getOption(e, "itemsForAction", [this]), o = !1, r = {}, s = 0, n = a.length; s < n; ++s) {
                    var i = a[s];
                    if (i.passwordProtected()) {
                        o = !0;
                        break
                    }
                    i.shouldPasswordProtectShare() && i.isShared() && (r.switch_f_prompt = !0)
                }
                e = e || {}, o ? delete e.types : e.types = h.getProperties(r).concat(h.getOption(e, "types", [])), this.reprompt(t, e)
            }, VaultItemBase.prototype.reprompt = function(t, e) {
                return d.reprompt(this.createHandler(function() {
                    t.apply(this)
                }), e)
            };
            var e = function(t, e) {
                    for (var a = t.itemsForAction, o, r = 0, s = a.length; r < s; ++r) {
                        var n = a[r];
                        if (void 0 === o) o = n.getShareID();
                        else if (o !== n.getShareID()) return void Topics.get(Topics.ERROR).publish(Strings.translateString("Sorry, you cannot perform this operation on a mix of shared and non-shared folders, or multiple shared folders at once."))
                    }
                    e(t, o)
                },
                o, a, s, i;
            VaultItemBase.prototype.purge = (o = function(t) {
                return 1 < t.length ? this instanceof Group ? Strings.translateString(Strings.VaultDynamic.CONFIRM_PURGE_PLURAL) : Strings.translateString(Strings.VaultDynamic.CONFRIM_PURGE_FOLDER) : Strings.translateString(Strings.VaultDynamic.CONFIRM_PURGE, t[0].toString())
            }, a = function(t, e) {
                var a = t.itemsForAction;
                LPRequest.makeUpdateRequest(d.purgeDeletedItems, {
                    parameters: [a, e],
                    success: function() {
                        for (var t = 0, e = a.length; t < e; t++) a[t].deleteUpdates(!1);
                        a[0].publishPurgeSuccess(a.length)
                    },
                    confirm: {
                        title: Strings.Vault.PURGE,
                        text: o.call(this, a)
                    }
                })
            }, function(t) {
                e(t, a)
            }), VaultItemBase.prototype.restore = (s = function(t) {
                return 1 < t.length ? this instanceof Group ? Strings.translateString(Strings.VaultDynamic.CONFIRM_RESTORE_FOLDER) : Strings.translateString(Strings.VaultDynamic.CONFIRM_RESTORE_PLURAL) : Strings.translateString(Strings.VaultDynamic.CONFIRM_RESTORE, t[0].toString())
            }, i = function(t, e) {
                var a = t.itemsForAction;
                LPRequest.makeRequest(d.restoreDeletedItems, {
                    parameters: [a, e],
                    success: function() {
                        for (var t = 0, e = a.length; t < e; t++) a[t].deleteUpdates(!1);
                        a[0].publishRestoreSuccess(a.length), d.refreshSites()
                    },
                    confirm: {
                        title: Strings.Vault.RESTORE,
                        text: s.call(this, a)
                    }
                })
            }, function(t) {
                e(t, i)
            }), VaultItemBase.prototype.confirmDelete = function(t) {
                return t && 1 < t.length ? {
                    title: Strings.Vault.DELETE,
                    text: Strings.translateString(Strings.VaultDynamic.DELETE_CONFIRM_PLURAL)
                } : (e = this, {
                    title: Strings.Vault.DELETE,
                    text: Strings.translateString(Strings.VaultDynamic.DELETE_CONFIRM, e.toString())
                });
                var e
            }, VaultItemBase.prototype.isDeleted = function() {
                return "1" === this._data.deleted
            }, VaultItemBase.prototype.getName = function() {
                var t = this._data.name;
                return t || ""
            }, VaultItemBase.prototype.getURL = function() {
                return this._data.url
            }, VaultItemBase.prototype.isFavorite = function() {
                return "1" === this._data.fav
            }, VaultItemBase.prototype.setFavorite = function(t) {
                this._data.fav = t ? "1" : "0"
            }, VaultItemBase.prototype.processEnteredData = function(t, e, a) {
                for (var o in t) {
                    var r = this._data[o];
                    "boolean" != typeof t[o] || "0" !== r && "1" !== r || (t[o] = t[o] ? "1" : "0")
                }
                e && e.getSharedGroup() ? t.sharefolderid = e.getShareID() : delete t.sharefolderid
            }, VaultItemBase.prototype.saveFromDialog = function(t, e, a) {
                var o = e ? e.getKey() : this.getKey();
                this.processEnteredData(t, e, o, a), t = u.extend({}, this._data, t), this.save(t, e, a), this.noFolderTrackingEvent(t)
            }, VaultItemBase.prototype.addFromDialog = function(t, e, a) {
                var o = e ? e.getKey() : this.getKey();
                this.processEnteredData(t, e, o, a), u.extend(this._data, t), this.add(e, a), this.noFolderTrackingEvent(t)
            }, VaultItemBase.prototype.getFormData = function(t) {
                var e = {};
                for (var a in t) {
                    var o = "pwprotect" === a || "autologin" === a || "never_autofill" === a || "fav" === a,
                        r = this._data[a];
                    o && "1" === r ? e[a] = !0 : o && "0" === r ? e[a] = !1 : void 0 !== r && "object" != typeof r && (e[a] = r)
                }
                return e
            }, VaultItemBase.prototype.getKey = function() {
                var t = this.getSharedGroup();
                return t ? t.getKey() : d.getLocalKey()
            }, VaultItemBase.prototype.getShareID = function() {
                var t = this.getSharedGroup();
                return t ? t.getID() : this._data.sharefolderid || ""
            }, VaultItemBase.prototype.isReadOnly = function() {
                var t = this.getSharedGroup();
                return !!t && t.isReadOnly()
            }, VaultItemBase.prototype.getShareInfo = function() {
                var t = this.getSharedGroup();
                return t ? t._shareInfo : null
            }, VaultItemBase.prototype.getSharedGroup = function() {
                return this._sharedGroup ? this._sharedGroup : null
            }, VaultItemBase.prototype.getURLArguments = function(t, e, a) {
                return u.param(this.getPostData(t, e, a))
            }, VaultItemBase.prototype.getGroupName = function() {
                return this._data.group
            }, VaultItemBase.prototype.getGroupParentName = function() {
                var t = this._data.group,
                    e = t.lastIndexOf("\\");
                return 0 < e ? t.substring(0, e) : ""
            }, VaultItemBase.prototype.getSearchTokens = function(t) {
                return [this.getName()]
            }, VaultItemBase.prototype.getPostData = function(t, e, a) {
                var o = {
                    extjs: 1,
                    localupdate: 1,
                    ajax: 1
                };
                return a && (a.source && (o.source = a.source), a.folder && (o.folder = a.folder)), bg.Policies.logNameEnabled() && (o.n = bg.AES.url2hex(t.name)), bg.Policies.logUserNameEnabled() && (o.un = bg.AES.url2hex(t.unencryptedUsername)), o
            }, VaultItemBase.prototype.passwordProtected = function() {
                return this.getRepromptType() && bg.get("g_prompts")[this.getRepromptType()]
            }, VaultItemBase.prototype.getLastTouch = function() {
                return 0
            }, VaultItemBase.prototype.edit = function(t) {
                Topics.get(this.getEditTopicID()).publish({
                    vaultItem: this,
                    dialogActions: t.dialogActions
                })
            }, VaultItemBase.prototype.encryptIfNecessary = function(t, e, a) {
                var o = this.getKey();
                return d.decryptMobile(this._data[t], !0, o) !== e || a !== o ? d.encryptMobile(e, !0, a) : this._data[t]
            }, VaultItemBase.prototype.noFolderTrackingEvent = function(t) {
                var e = t.group;
                if (e && e !== Strings.Vault.NONE_GROUP) {
                    for (var a = d.getGroups(), o = !1, r = !1, s = 0, n = a.length; s < n; ++s) {
                        var i;
                        switch (a[s].getName()) {
                            case e:
                                o = !0;
                                break;
                            case Strings.Vault.NONE_GROUP:
                                r = !0
                        }
                    }
                    var p = {
                        folder: e,
                        foldercount: r ? a.length : a.length + 1,
                        nofolderfeatureenabled: !!bg.get("g_nofolder_feature_enabled")
                    };
                    t.hasOwnProperty("groupParent") && (p.source = "manual"), o || bg.sendLpImprove("no_folder::user_folder_created", p)
                }
            }
        }(), VaultItem.prototype.handleClickEvent = function(t, e) {
                switch (t) {
                    case Constants.ACTION_SHARE:
                        this.share(e);
                        break;
                    default:
                        VaultItemBase.prototype.handleClickEvent.apply(this, arguments)
                }
            }, VaultItem.prototype.share = function(t) {
                this.passwordProtect(function() {
                    Topics.get(Topics.ITEM_SHARE).publish(t.itemsForAction)
                }, t)
            }, VaultItem.prototype.revertPasswordChange = function(t) {
                LPRequest.makeUpdateRequest(d.revertPasswordChange, {
                    params: {
                        key: this.getKey(),
                        aid: this.getID(),
                        shareId: this.getShareID()
                    },
                    success: function() {
                        t && "function" == typeof t.success && t.success()
                    },
                    error: function() {
                        t && "function" == typeof t.error && t.error()
                    }
                })
            }, VaultItem.prototype.deleteItem = function(a) {
                for (var o = a && a.itemsForAction || [this], t, e = 0, r = o.length; e < r; ++e) {
                    var s = o[e];
                    if (s.isReadOnly()) return void Topics.get(Topics.ERROR).publish(Strings.translateString(Strings.VaultDynamic.PERMISSION_ERROR_DELETE, s.getSharedGroup().toString()));
                    if (void 0 === t) t = s.getSharedGroup();
                    else if (t !== s.getSharedGroup()) return void Topics.get(Topics.ERROR).publish(Strings.translateString("Sorry, you cannot perform this operation on a mix of shared and non-shared folders, or multiple shared folders at once."))
                }
                this.passwordProtect(function() {
                    LPRequest.makeLockItemUpdateRequest(d.deleteItem, {
                        parameters: [o],
                        items: o,
                        success: function() {
                            o[0].publishDeleteSuccess(o.length);
                            for (var t = 0, e = o.length; t < e; ++t) o[t].deleteUpdates(!1);
                            a.success && a.success()
                        },
                        confirm: h.getOption(a, "confirm", !0) ? o[0].confirmDelete(o) : null
                    })
                }, a)
            },
            function() {
                VaultItem.prototype.moveToFolderPostCheck = function(o, t, r, s) {
                    if (0 < o.length || 0 < t.length) {
                        var n = h.getOption(s, "saveFromDialog", !1),
                            e = function() {
                                var a = o.concat(t);
                                LPRequest.makeLockItemUpdateRequest(d.moveToFolder, {
                                    parameters: [a, r],
                                    items: a,
                                    success: function(t) {
                                        if (i(o, t, r, s), p(t, r, s), !n) {
                                            var e = r.toString();
                                            bg.get("g_nofolder_feature_enabled") ? (e !== Strings.Vault.GROUP + " " + Strings.Vault.NONE_GROUP && e !== Strings.Vault.GROUP + " " + Strings.Consts.NONE_GROUP || (e = Strings.Vault.NO_FOLDER), a[0].publishOrganizeSuccess(a.length, e)) : a[0].publishMoveSuccess(a.length, e)
                                        }
                                        s && s.success && s.success()
                                    },
                                    confirm: c(o, r)
                                })
                            };
                        n ? e() : this.passwordProtect(e, {
                            itemsForAction: o.concat(t)
                        })
                    }
                }, Group.prototype.moveToFolderPostCheck = function(e, t, a, o) {
                    var r = u.extend(!0, {}, this._data),
                        s;
                    r.group = a.getName() + "\\" + this.getGroupName(), s = this, LPRequest.makeUpdateRequest(d.renameGroup, {
                        parameters: [s, r],
                        success: function(t) {
                            i([s], t, a, o), i(e, t, a, u.extend(o, {
                                updateViews: !1
                            })), p(t, a, o), s.publishMoveSuccess(1, a.toString())
                        },
                        confirm: c(e, a)
                    })
                };
                var i = function(t, e, a, o) {
                        for (var r = 0, s = t.length; r < s; ++r) {
                            var n = t[r],
                                i = n.getID();
                            e && e[i] ? (n.update(e[i], a, o), delete e[i]) : n.update(n._data, a, o)
                        }
                    },
                    p = function(t, e, a) {
                        for (var o in t) {
                            var r = t[o];
                            r.sn ? new Note(r, e.getSharedGroup()).publishAdd(Topics.NOTE_ADDED, e, a) : r.appaid ? new Application(r, e.getSharedGroup()).publishAdd(Topics.SITE_ADDED, e, a) : new Account(r, e.getSharedGroup()).publishAdd(Topics.SITE_ADDED, e, a)
                        }
                    },
                    c = function(t, e) {
                        for (var a = null, o = !1, r = !1, s = !1, n = !1, i = e ? e.getSharedGroup() : null, p = 0, c = t.length; p < c; ++p) {
                            var u = t[p],
                                l = u.getSharedGroup();
                            l ? i ? l !== i && (o = !0) : l instanceof LinkedGroup || (n = !0) : !i || i instanceof LinkedGroup || (u._data.individualshare ? s = !0 : r = !0)
                        }
                        if (o || r || n || s) {
                            var d = [];
                            o && d.push(Strings.translateString("You are moving items to a different shared folder. This may change who has access to them.")), r && d.push(Strings.translateString("You are moving sites to a shared folder. Others may now have access to them.")), n && d.push(Strings.translateString("You are moving items from a shared folder into your vault. Others may lose access to them.")), s ? (d.push(Strings.translateString("Any item that is currently shared with another user cannot be moved into a shared folder.")), d.push(Strings.translateString("Would you like to make a copy?"))) : d.push(Strings.translateString("Do you want to continue?")), a = {
                                title: Strings.translateString("Shared Folders"),
                                text: d
                            }
                        }
                        return a
                    };
                AccountBase.prototype.saveFromDialog = function(t, e) {
                    var a = c([this], e);
                    if (a) {
                        for (var o = [VaultItem.prototype.saveFromDialog], r = 0, s = arguments.length; r < s; ++r) o.push(arguments[r]);
                        a.handler = this.createHandler.apply(this, o), Topics.get(Topics.CONFIRM).publish(a)
                    } else VaultItem.prototype.saveFromDialog.apply(this, arguments)
                }, VaultItem.prototype.moveToFolder = function(t, e, a) {
                    if (t.isReadOnly()) Topics.get(Topics.ERROR).publish(Strings.translateString(Strings.VaultDynamic.PERMISSION_ERROR_MOVE, t.toString()));
                    else {
                        for (var o = [], r = [], s = [], n = [], i = t.getSharedGroup(), p = 0, c = e.length; p < c; ++p) {
                            var u = e[p];
                            u.isReadOnly() ? s.push(u) : i && u._data.individualshare ? 0 < parseInt(u._data.sharedfromaid) ? r.push(u) : o.push(u) : n.push(u)
                        }
                        var l = [];
                        0 < r.length && l.push({
                            type: "alert",
                            title: Strings.translateString("Error"),
                            text: [Strings.translateString("The following items have been individually shared with you and cannot be moved into a shared folder:"), h.buildDialogItemContainer(r)]
                        }), 0 < s.length && l.push({
                            type: "alert",
                            title: Strings.translateString("Error"),
                            text: [Strings.translateString("You do not have permission to move the following items from their respective shared folders:"), h.buildDialogItemContainer(s)]
                        }), 0 < o.length && l.push({
                            type: "confirmation",
                            title: Strings.translateString("Error"),
                            text: [Strings.translateString("The following items have already been shared individually and cannot be moved to a shared folder:"), Strings.translateString("Would you like to make a copy?"), h.buildDialogItemContainer(o)],
                            closeHandler: function() {
                                o.splice(0, o.length)
                            }
                        }), 0 < l.length ? h.openAlerts(l, (d = this, function() {
                            d.moveToFolderPostCheck.call(d, n, o, t, a)
                        })) : this.moveToFolderPostCheck.call(this, n, o, t, a)
                    }
                    var d
                }
            }(), VaultItem.prototype.passwordProtected = function() {
                return this._data.pwprotect || VaultItemBase.prototype.passwordProtected.apply(this, arguments)
            }, VaultItem.prototype.getPostData = function(t, e) {
                var a = VaultItemBase.prototype.getPostData.apply(this, arguments);
                return t.pwprotect && (a.pwprotect = "on"), a
            }, AccountBase.prototype.getLastTouch = function() {
                return parseInt(this._data.last_touch)
            }, AccountBase.prototype.getID = function() {
                return this._data.aid
            }, AccountBase.prototype.setID = function(t) {
                this._data.aid = t
            }, AccountBase.prototype.getFormData = function(t) {
                var e = VaultItem.prototype.getFormData.apply(this, arguments);
                return e.extra = d.decryptMobile(this._data.extra, !0, this.getKey()), e
            }, AccountBase.prototype.getPostData = function(t, e) {
                var a = VaultItem.prototype.getPostData.apply(this, arguments),
                    o = e ? e.getKey() : d.getLocalKey();
                a.aid = this.getID(), a.name = d.encryptWithKey(t.name, o), a.extra = d.encryptWithBTOA(t.extra);
                var r = e ? e.getSharedGroup() : null;
                return r ? (a.sharedfolderid = r.getID(), a.grouping = d.encryptWithKey(t.group.substring(r.getName().length + 1), o)) : a.grouping = d.encryptWithKey(t.group, o), t.pwprotect && (a.pwprotect = "on"), "1" === t.fav && (a.fav = "on"), a
            }, AccountBase.prototype.checkForSharedGroupChange = function(t) {
                var e = this.getSharedGroup(),
                    a = t.getSharedGroup();
                return (null !== e || null !== a) && e !== a
            }, AccountBase.prototype.handleClickEvent = function(t, e) {
                switch (t) {
                    case Constants.ACTION_COPY_USERNAME:
                        this.copyUsername();
                        break;
                    case Constants.ACTION_COPY_PASSWORD:
                        this.copyPassword(e);
                        break;
                    case Constants.ACTION_CLONE:
                        this.cloneItem();
                        break;
                    default:
                        VaultItem.prototype.handleClickEvent.apply(this, arguments)
                }
            }, AccountBase.prototype.getSearchTokens = function(t) {
                var e = VaultItem.prototype.getSearchTokens.apply(this, arguments);
                return t.searchNotes && this._data.extra && !this.passwordProtected() && e.push(d.decryptMobile(this._data.extra, !0, this.getKey())), e
            }, AccountBase.prototype.getCloneData = function() {
                var t = this.getFormData(DialogInput.getProperties(this._data));
                return t.name = t.name + " - " + Strings.translateString("Copy"), delete t.aid, t
            }, AccountBase.prototype.processEnteredData = function(t, e, a) {
                VaultItem.prototype.processEnteredData.apply(this, arguments), t.encgroup = this.encryptIfNecessary("encgroup", t.group, a), t.encname = this.encryptIfNecessary("encname", t.name, a), t.action && (t.action = bg.AES.bin2hex(t.action))
            }, AccountBase.prototype.isShared = function() {
                return VaultItem.prototype.isShared.apply(this, arguments) || this._data.individualshare || this._data.sharedfromaid
            }, AccountBase.prototype.isSharingEnabled = function() {
                return !(null !== this.getSharedGroup() || this._data.individualshare && this._data.sharedfromaid && "" !== this._data.sharedfromaid)
            }, AccountBase.prototype.copyUsername = function() {
                d.copyUsername(this)
            }, AccountBase.prototype.copyPassword = function() {
                this.canViewPassword() ? this.passwordProtect(function() {
                    d.copyPassword(this)
                }) : Topics.get(Topics.ERROR).publish(Strings.translateString("This is a shared site. You are not permitted to copy the password."))
            }, AccountBase.prototype.isReceivedShare = function() {
                return this._data.individualshare && this._data.sharedfromaid
            }, AccountBaseWithFields.prototype.REPROMPT_TYPE_VIEW_PW = "view_pw_prompt", AccountBaseWithFields.prototype.getFormData = function(t) {
                var e = AccountBase.prototype.getFormData.apply(this, arguments);
                e.fields = [];
                for (var a = 0, o = this._data.fields.length; a < o; ++a) {
                    var r = this._data.fields[a],
                        s = {
                            name: r.name || r.id,
                            type: r.type,
                            value: this.getFieldValue(r, !0),
                            formname: r.formname
                        };
                    "checkbox" === s.type && (s.valueAttribute = r.value), e.fields.push(s)
                }
                return e.save_all = this._data.save_all, e
            }, AccountBaseWithFields.prototype.processEnteredData = function(t, e, a, o) {
                AccountBase.prototype.processEnteredData.apply(this, arguments);
                var r = this.getKey(),
                    s = t.unencryptedUsername;
                if (t.username = this.encryptIfNecessary("username", t.unencryptedUsername, a), t.password = this.encryptIfNecessary("password", t.password, a), t.extra = this.encryptIfNecessary("extra", t.extra, a), t.fields)
                    for (var n = 0; n < t.fields.length; ++n) {
                        var i = t.fields[n],
                            p = this.getFieldValue(i),
                            c = this._data.fields[n],
                            u;
                        p !== this.getFieldValue(c, !0) || r !== a || i.formname !== c.formname || i.name !== c.name ? (this.processEnteredFieldData(i, e, a), p === s && "password" !== i.type ? i.value = t.username : t.password && "password" === i.type ? i.value = t.password : o.saveFields = !0) : t.fields[n] = c
                    }
            }, AccountBaseWithFields.prototype.getFieldValue = function(t, e) {
                var a = null;
                if (t) switch (a = t.value, t.type) {
                    case "checkbox":
                        void 0 !== t.checked && (a = t.checked);
                        break;
                    case "radio":
                    case "select":
                    case "select-one":
                        break;
                    default:
                        e && (a = d.decryptMobile(t.value, !0, this.getKey()))
                }
                return a
            }, AccountBaseWithFields.prototype.processEnteredFieldData = function(t, e, a) {
                switch (this.defaultFieldValues(t), t.type) {
                    case "checkbox":
                        t.checked = t.value, t.value = t.valueAttribute || "";
                        break;
                    case "radio":
                    case "select":
                    case "select-one":
                        break;
                    default:
                        void 0 === a && (a = e ? e.getKey() : this.getKey()), t.value = d.encryptMobile(t.value, !0, a)
                }
            }, AccountBaseWithFields.prototype.getFieldPostData = function(t, e) {
                var a = t.value;
                switch (t.type) {
                    case "checkbox":
                        e && (a += t.checked ? "-1" : "-0");
                        break;
                    case "radio":
                        a += "-1";
                        break;
                    case "select":
                    case "select-one":
                        break;
                    default:
                        a = d.encryptWithBTOA(t.value)
                }
                var o = {
                    name: t.name,
                    type: t.type,
                    value: a,
                    urid: t.urid
                };
                return t.formname && (o.formname = t.formname), o
            }, AccountBaseWithFields.prototype.defaultFieldValues = (e = {
                checked: !1,
                formname: "",
                name: "",
                otherfield: !1,
                otherlogin: "0",
                type: "",
                urid: "0",
                url: "",
                value: ""
            }, function(t) {
                this.defaultFields(e, t)
            }), AccountBaseWithFields.prototype.removeField = function(t) {
                this._data.fields.splice(t, 1)
            }, AccountBaseWithFields.prototype.addField = function(t, e) {
                return void 0 === e && (e = this._data.fields), t = u.extend({}, t), this.defaultFieldValues(t), e.push(t), e.length - 1
            }, AccountBaseWithFields.prototype.canViewPassword = function() {
                var t = this.getSharedGroup();
                return !t || t.hasPasswordAccess()
            }, AccountBaseWithFields.prototype.cloneItem = function() {
                this.canViewPassword() ? this.passwordProtect(function() {
                    Topics.get(this.getEditTopicID()).publish({
                        defaultData: this.getCloneData()
                    })
                }, {
                    types: this.REPROMPT_TYPE_VIEW_PW
                }) : Topics.get(Topics.ERROR).publish(Strings.translateString("This is a shared site. You are not permitted to copy the password."))
            },
            function() {
                Account.prototype.REPROMPT_TYPE = "edit_site_prompt", Account.prototype.isURLLaunchable = function() {
                    return void 0 !== this._data.url && (0 === this._data.url.indexOf("http://") || 0 === this._data.url.indexOf("https://") || 0 === this._data.url.indexOf("ssh://"))
                }, Account.prototype.isSharingEnabled = function() {
                    return this._data.url && AccountBase.prototype.isSharingEnabled.apply(this, arguments)
                }, Account.prototype.isLaunchEnabled = function() {
                    return this.isURLLaunchable()
                }, Account.prototype.canViewPassword = function() {
                    return AccountBaseWithFields.prototype.canViewPassword.apply(this, arguments) && !this.isReceivedShare()
                }, Account.prototype.getEditTopicID = function() {
                    return Topics.EDIT_SITE
                }, Account.prototype.getPassword = function() {
                    if (this._data.save_all) {
                        for (var t = 0, e = this._data.fields.length; t < e; ++t) {
                            var a = this._data.fields[t];
                            if ("password" === a.type && a.value) return d.decryptMobile(a.value, !0, this.getKey())
                        }
                        return ""
                    }
                    return d.decryptMobile(this._data.password, !0, this.getKey())
                }, Account.prototype.getSearchTokens = function(t) {
                    var e = AccountBaseWithFields.prototype.getSearchTokens.apply(this, arguments),
                        a = this.getUsername();
                    return a && e.push(a), this._data.url && e.push(bg.hostof(this._data.url)), e
                }, Account.prototype.getRepromptType = function() {
                    return this.REPROMPT_TYPE
                }, Account.prototype.getUsername = function() {
                    if (this._data.save_all)
                        for (var t = 0, e = this._data.fields.length; t < e; ++t) {
                            var a = this._data.fields[t];
                            switch (a.type) {
                                case "text":
                                case "email":
                                case "tel":
                                    if (a.value) return d.decryptMobile(a.value, !0, this.getKey())
                            }
                        }
                    return void 0 === this._data.unencryptedUsername && (this._data.unencryptedUsername = d.decryptMobile(this._data.username, !0, this.getKey())), this._data.unencryptedUsername
                }, Account.prototype.hasGeneratedPassword = function() {
                    return this._data.genpw || 0 === this.getName().indexOf(Strings.Vault.GENERATED_PREFIX)
                }, Account.prototype.toString = function() {
                    return Strings.Vault.SITE + ": " + this._data.name
                }, Account.prototype.handleClickEvent = function(t, e) {
                    switch (t) {
                        case Constants.ACTION_COPY_URL:
                            this.copyURL();
                            break;
                        case Constants.ACTION_LAUNCH:
                            this.launch(e);
                            break;
                        case Constants.ACTION_GO_TO_URL:
                            this.goToURL();
                            break;
                        case Constants.ACTION_FILL_SITE:
                            this.fill(e);
                            break;
                        default:
                            AccountBase.prototype.handleClickEvent.apply(this, arguments)
                    }
                }, Account.prototype.launch = function(t) {
                    this.passwordProtect(function() {
                        d.launchSite(this, t)
                    }, {
                        types: "login_site_prompt"
                    })
                }, Account.prototype.fill = function(t) {
                    this.passwordProtect(function() {
                        bg.sendLpImprove("sitelogin", {
                            copy: 0,
                            shareType: this.getShareType(),
                            autologin: this._data && this._data.autologin ? 1 : 0,
                            source: t && t.source ? t.source : null,
                            approach: t && t.approach ? t.approach : null
                        }), d.fillSite(this)
                    }, {
                        types: "login_site_prompt"
                    })
                }, Account.prototype.copyPassword = function(t) {
                    this.canViewPassword() ? this.passwordProtect(function() {
                        bg.sendLpImprove("sitelogin", {
                            copy: 1,
                            shareType: this.getShareType(),
                            autologin: this._data && this._data.autologin ? 1 : 0,
                            source: t && t.source ? t.source : null,
                            approach: t && t.approach ? t.approach : null
                        }), d.copyPassword(this, t)
                    }, {
                        types: this.REPROMPT_TYPE_VIEW_PW
                    }) : Topics.get(Topics.ERROR).publish(Strings.translateString("This is a shared site. You are not permitted to copy the password."))
                }, Account.prototype.copyURL = function() {
                    d.copyURL(this)
                }, Account.prototype.goToURL = function() {
                    d.goToURL(this)
                }, Account.prototype.getShareType = function() {
                    var t = this._data;
                    return t && !0 === t.individualshare ? "individual" : t && t.sharefolderid ? "folder" : "none"
                }, Account.prototype.processEnteredData = function(t, e, a) {
                    t.save_all && (delete t.unencryptedUsername, delete t.password), AccountBaseWithFields.prototype.processEnteredData.apply(this, arguments), t.url && (t.url = bg.punycode.URLToASCII(t.url.trim())), t.realm_data && (t.realm_data = d.encryptMobile(t.realm_data, !0, a))
                }, Account.prototype.getFormData = function(t) {
                    var e = AccountBaseWithFields.prototype.getFormData.apply(this, arguments);
                    return e.url && (e.url = bg.punycode.URLToUnicode(e.url)), t.password && (e.password = this.getPassword()), t.unencryptedUsername && (e.unencryptedUsername = this.getUsername()), e
                };
                var n = function(t, e) {
                    for (var a = d.getDomain(t.getURL()), o = [], r = d.getSiteModels(), s = 0, n = r.length; s < n; ++s) {
                        var i = r[s];
                        i !== t && d.getDomain(i.getURL()) === a && i.getPassword() === e && o.push(i)
                    }
                    0 < o.length && dialogs.changePassword.open({
                        domain: a,
                        items: o,
                        newPassword: t.getPassword()
                    })
                };
                Account.prototype.save = function(t, o, r) {
                    var s;
                    s = this, LPRequest.makeUpdateRequest(d.saveSite, {
                        parameters: [s, t, o, r],
                        success: function(t) {
                            var e = s.getPassword(),
                                a;
                            s.update(t, o), s.publishSaveSuccess(1), e !== s.getPassword() && n(s, e), r.success && r.success(s)
                        }
                    })
                }, Account.prototype.add = function(e, a) {
                    var o;
                    o = this, LPRequest.makeUpdateRequest(d.addSite, {
                        parameters: [o, e, a],
                        success: function(t) {
                            o.update(t, e), o.publishAdd(Topics.SITE_ADDED, e), a.success && a.success(o)
                        }
                    })
                }, Account.prototype.getPostData = function(t, e, a) {
                    var o = AccountBaseWithFields.prototype.getPostData.apply(this, arguments);
                    o.username = t.username ? d.encryptWithBTOA(t.username) : "", o.password = t.password ? d.encryptWithBTOA(t.password) : "";
                    var r = bg.AES.url2hex(t.url);
                    return h.getOption(a, "saveFromSubmit", !1) ? (o.ref = r, this.isNew() || (o.replacing = 1)) : o.url = r, t.never_autofill && (o.never_autofill = "on"), t.autologin && (o.autologin = "on"), (t.save_all || h.getOption(a, "saveFromSubmit", !1)) && (o.data = this.getFieldFormData(t.fields)), t.save_all && (o.save_all = 1), o.urid = t.urid, "1" === t.basic_auth && (o.basic_auth = "1"), t.realm_data && (o.realm = d.encryptWithBTOA(t.realm_data)), o
                }
            }(), Account.prototype.getFieldFormData = function(t) {
                for (var e = "", a = 0, o = t.length; a < o; ++a) {
                    var r = t[a],
                        s = this.getFieldPostData(r, !0).value;
                    e += r.formname + "\t" + encodeURIComponent(r.name) + "\t" + encodeURIComponent(s) + "\t" + encodeURIComponent(r.type) + "\n"
                }
                return bg.AES.bin2hex(e)
            }, Application.prototype.toString = function() {
                return Strings.Vault.APPLICATION + " " + this.getName()
            }, Application.prototype.getEditTopicID = function() {
                return Topics.EDIT_APPLICATION
            }, Application.prototype.shouldPasswordProtectShare = function() {
                return !1
            }, Application.prototype.getCloneData = function() {
                var t = AccountBaseWithFields.prototype.getCloneData.apply(this, arguments);
                return delete t.appaid, t
            }, Application.prototype.getID = function(t) {
                var e = this._data.appaid;
                return t && (e = "app" + e), e
            }, Application.prototype.setID = function(t) {
                this._data.appaid = t
            }, Application.prototype.isSharingEnabled = function() {
                return !1
            }, Application.prototype.getLastTouch = AccountBase.prototype.getLastTouch, Application.prototype.handleClickEvent = function(t, e) {
                switch (t) {
                    case Constants.ACTION_LAUNCH:
                        d.launchApplication(this);
                        break;
                    default:
                        AccountBaseWithFields.prototype.handleClickEvent.apply(this, arguments)
                }
            }, Application.prototype.update = function() {
                AccountBaseWithFields.prototype.update.apply(this, arguments), this.setSaveAll()
            }, Application.prototype.addField = function() {
                AccountBaseWithFields.prototype.addField.apply(this, arguments), this.setSaveAll()
            }, Application.prototype.removeField = function() {
                AccountBaseWithFields.prototype.removeField.apply(this, arguments), this.setSaveAll()
            }, Application.prototype.setSaveAll = function() {
                for (var t, e, a = 0; a < this._data.fields.length; ++a) {
                    var o = this._data.fields[a];
                    switch (o.type) {
                        case "password":
                            t = void 0 === t ? o : null;
                            break;
                        case "":
                            e = void 0 === e ? o : null
                    }
                }
                e && t ? (this._data.save_all = !1, this._data.unencryptedUsername = d.decryptMobile(e.value, !0, this.getKey()), this._data.username = e.value, this._data.password = t.value) : (this._data.save_all = !0, delete this._data.unencryptedUsername, delete this._data.username, delete this._data.password)
            }, Application.prototype.getUsername = function() {
                for (var t = 0; t < this._data.fields.length; ++t) {
                    var e = this._data.fields[t];
                    if ("password" !== e.type && e.value) return d.decryptMobile(e.value, !0, this.getKey())
                }
            }, Application.prototype.getPassword = function() {
                for (var t = 0; t < this._data.fields.length; ++t) {
                    var e = this._data.fields[t];
                    if ("password" === e.type && e.value) return d.decryptMobile(e.value, !0, this.getKey())
                }
            }, Application.prototype.getFormData = function(t) {
                var e = AccountBaseWithFields.prototype.getFormData.apply(this, arguments);
                return this._data.save_all || (e.password = d.decryptMobile(this._data.password, !0, this.getKey())), e
            }, Application.prototype.getSearchTokens = function() {
                var t = VaultItem.prototype.getSearchTokens.apply(this, arguments);
                return t.push(this._data.appname), t
            }, Application.prototype.add = function(e, t) {
                var a;
                a = this, LPRequest.makeUpdateRequest(d.addApplication, {
                    parameters: [a, e, t],
                    success: function(t) {
                        a.update(t, e), a.publishAdd(Topics.APPLICATION_ADDED, e)
                    }
                })
            }, Application.prototype.save = function(t, e, a) {
                var o;
                o = this, LPRequest.makeUpdateRequest(d.saveApplication, {
                    parameters: [o, t, e, a],
                    success: function() {
                        o.update(t, e), o.publishSaveSuccess(1)
                    }
                })
            }, Application.prototype.getPostData = function(t, e) {
                var a = AccountBase.prototype.getPostData.apply(this, arguments);
                if (a.appname = t.appname, t.fields)
                    for (var o = 0; o < t.fields.length; ++o) {
                        var r = t.fields[o];
                        a["fieldid" + o] = r.name || r.id, a["fieldtype" + o] = r.type, a["fieldvalue" + o] = this.getFieldPostData(r).value
                    }
                return a.appaid = a.aid, delete a.aid, this.isNew() || (a.cmd = "updatelpaa"), a
            }, Group.prototype.getDisplayClass = function() {
                return GroupDisplay
            }, Group.prototype.toString = function() {
                return Strings.Vault.GROUP + " " + this._data.group
            }, Group.prototype.getName = function() {
                return this._data.group
            }, Group.prototype.getGroupName = function() {
                return this._data.group.substring(this._data.group.lastIndexOf("\\") + 1)
            }, Group.prototype.handleClickEvent = function(t, e) {
                switch (t) {
                    case Constants.ACTION_RENAME:
                        Topics.get(Topics.RENAME_FOLDER).publish(this);
                        break;
                    case Constants.ACTION_CREATE_SUB_FOLDER:
                        Topics.get(Topics.CREATE_SUB_FOLDER).publish(this);
                        break;
                    case Constants.ACTION_SHARE:
                        Topics.get(Topics.CREATE_SHARED_FOLDER).publish(this, e.itemsForAction);
                        break;
                    default:
                        VaultItemBase.prototype.handleClickEvent.apply(this, arguments)
                }
            }, Group.prototype.confirmDelete = function(t) {
                return 0 < t ? (e = this, {
                    title: Strings.Vault.DELETE,
                    text: Strings.translateString(Strings.VaultDynamic.DELETE_CONFIRM, Strings.translateString("%1 containing %2 item(s)", e.toString(), t))
                }) : VaultItemBase.prototype.confirmDelete.apply(this);
                var e
            }, Group.prototype.deleteItem = function(t) {
                var e = t.itemsForAction.filter(function(t) {
                        return !(t instanceof Group)
                    }),
                    a;
                LPRequest.makeLockItemUpdateRequest(d.deleteFolder, {
                    parameters: [t.itemsForAction],
                    items: t.itemsForAction,
                    success: (a = this, function() {
                        a.deleteUpdates()
                    }),
                    confirm: this.confirmDelete(e.length)
                })
            }, Group.prototype.add = function(e) {
                var a;
                a = this, LPRequest.makeUpdateRequest(d.addGroup, {
                    parameters: a,
                    success: function(t) {
                        a.update(t, e), a.publishAdd(Topics.GROUP_ADDED, e)
                    }
                })
            }, Group.prototype.save = function(t, e) {
                var a;
                a = this, LPRequest.makeUpdateRequest(d.renameGroup, {
                    parameters: [a, t],
                    success: function() {
                        a.update(t, e), a.publishRenameSuccess(1)
                    }
                })
            }, Group.prototype.getFormData = function(t) {
                var e = VaultItemBase.prototype.getFormData.apply(this, arguments);
                return e.groupName = this.getGroupName(), e.groupParent = this.getGroupParentName(), e
            }, Group.prototype.processEnteredData = function(t) {
                VaultItemBase.prototype.processEnteredData.apply(this, arguments), t.groupName && (t.groupParent ? (t.group = t.groupParent + "\\" + t.groupName, delete t.groupParent) : t.group = t.groupName, delete t.groupName)
            }, SharedGroup.prototype.setID = function(t) {
                Group.prototype.setID.apply(this, arguments), this._data.sharefolderid = t, this._shareInfo.id = t, this._shareInfo.shareid = t
            }, SharedGroup.prototype.useSharePrefix = function() {
                return !0
            }, SharedGroup.prototype.update = function(t) {
                t && (this._shareInfo.decsharename = t.group), Group.prototype.update.apply(this, arguments)
            }, SharedGroup.prototype.isReadOnly = function() {
                return "1" === this._shareInfo.readonly
            }, SharedGroup.prototype.canAdminister = function() {
                return "1" === this._shareInfo.can_administer
            }, SharedGroup.prototype.isPending = function() {
                return "0" === this._shareInfo.accepted
            }, SharedGroup.prototype.canConvertToLegacy = function() {
                return d.isEligibleForLegacySharedFolders() && this.canAdminister() && "0" !== this._shareInfo.cid && bg.get("LPContentScriptFeatures").family_legacy_shared_folders_enabled
            }, SharedGroup.prototype.canConvertToEnterprise = function() {
                return d.isEnterpriseUser() && this.canAdminister() && "1" === this._shareInfo.outside_enterprise && "0" === this._shareInfo.cid
            }, SharedGroup.prototype.isDownloaded = function() {
                return "1" === this._shareInfo.download
            }, SharedGroup.prototype.hasPasswordAccess = function() {
                return "1" === this._shareInfo.give
            }, SharedGroup.prototype.isDeleted = function() {
                return "1" === this._shareInfo.deleted
            }, SharedGroup.prototype.isSharingEnabled = function() {
                return !1
            }, SharedGroup.prototype.getShareName = function() {
                return this._shareInfo.sharename
            }, SharedGroup.prototype.handleClickEvent = function(t, e) {
                switch (t) {
                    case Constants.ACTION_START_DOWNLOADING:
                        this.startDownloading();
                        break;
                    case Constants.ACTION_STOP_DOWNLOADING:
                        this.stopDownloading();
                        break;
                    case Constants.ACTION_MANAGE:
                        this.manage();
                        break;
                    case Constants.ACTION_RESTORE_SHARED_FOLDER:
                        this.restoreSharedFolder();
                        break;
                    case Constants.ACTION_PURGE_SHARED_FOLDER:
                        this.purgeSharedFolder();
                        break;
                    case Constants.ACTION_ACCEPT:
                        this.accept();
                        break;
                    case Constants.ACTION_REJECT:
                        this.reject();
                        break;
                    case Constants.ACTION_CONVERT:
                        this.convert();
                        break;
                    default:
                        Group.prototype.handleClickEvent.apply(this, arguments)
                }
            }, SharedGroup.prototype.convert = function() {
                dialogs.convertLegacySharedFolder.open({
                    shareId: this._shareInfo.id,
                    groupName: this.getGroupName()
                })
            }, SharedGroup.prototype.manage = (a = function() {
                this.canConvertToEnterprise() ? this.convertToEnterprise() : Topics.get(Topics.EDIT_SHARED_FOLDER).publish(this)
            }, function() {
                this.passwordProtect(a)
            }), SharedGroup.prototype.accept = (o = function(t) {
                "bad" == t.result && "verificationrequired" == t.status ? dialogs.verifyEmail.open({
                    email: bg.get("g_username")
                }) : (Topics.get(Topics.UPDATE_NOTIFICATION_COUNT).publish(), this.refresh(t.sharedFolder, t.shareInfo), this.update())
            }, function() {
                LPRequest.makeRequest(bg.BackgroundServer.sharing.folder.accept, {
                    params: {
                        sharedFolder: this._data,
                        shareInfo: this._shareInfo
                    },
                    lockItems: !0,
                    items: this,
                    success: this.createHandler(o)
                })
            }), SharedGroup.prototype.reject = (r = function() {
                Topics.get(Topics.UPDATE_NOTIFICATION_COUNT).publish(), this.deleteUpdates(!1)
            }, function() {
                LPRequest.makeUpdateRequest(bg.BackgroundServer.sharing.folder.reject, {
                    params: {
                        sharedFolder: this._data,
                        shareInfo: this._shareInfo
                    },
                    lockItems: !0,
                    items: this,
                    success: this.createHandler(r),
                    confirm: {
                        title: Strings.Vault.REJECT,
                        text: [Strings.translateString("Are you sure you want to reject %1?", this.toString())]
                    }
                })
            }), SharedGroup.prototype.stopDownloading = (s = function(t) {
                this.refresh(t.sharedFolder, t.shareInfo), this.update()
            }, function() {
                LPRequest.makeUpdateRequest(d.stopDownloadingFolder, {
                    params: {
                        sharedFolder: this._data,
                        shareInfo: this._shareInfo
                    },
                    lockItems: !0,
                    items: this,
                    success: this.createHandler(s),
                    successMessage: Strings.translateString("%1 will no longer be downloaded.", this.toString()),
                    confirm: {
                        title: Strings.Vault.STOP_DOWNLOADING,
                        text: [Strings.translateString("You are choosing to stop downloading the content of this Shared Folder to your vault. You may always begin downloading the folder content again in the Sharing Center."), Strings.translateString("Do you want to continue?")]
                    }
                })
            }), SharedGroup.prototype.add = (n = function(t, e, a) {
                var o = [],
                    r = {};
                if (t) {
                    var s = t.getName(),
                        n = a.getName(),
                        i = function(t) {
                            o.push(t.getID()), r[t.getID()] = t._data.group.replace(s, n)
                        };
                    if (e)
                        for (var p = 0, c = e.length; p < c; ++p) {
                            var u = e[p];
                            u instanceof DummyGroup || i(u)
                        }
                    t instanceof DummyGroup || i(t)
                }
                return {
                    itemsToMove: o,
                    parentMap: r
                }
            }, function(e, a, o) {
                var r = n(e, a, this);
                LPRequest.makeUpdateRequest(d.createSharedFolder, {
                    params: {
                        sharedFolder: this._data,
                        shareInfo: this._shareInfo
                    },
                    successMessage: 0 < r.itemsToMove.length ? "" : void 0,
                    success: this.createHandler(function(t) {
                        this.refresh(t.sharedFolder, t.shareInfo), this.update(), 0 < r.itemsToMove.length ? LPRequest.makeRequest(d.moveIntoSharedFolder, {
                            params: u.extend(r, {
                                toShareInfo: this._shareInfo
                            }),
                            success: this.createHandler(function() {
                                this.publishAdd(Topics.GROUP_ADDED), a && a.forEach(function(t) {
                                    t.update(t._data, this)
                                }, this), e && e.destruct()
                            })
                        }) : (this.publishAdd(Topics.GROUP_ADDED), e && e.destruct()), "function" == typeof o && o(t)
                    })
                })
            }), SharedGroup.prototype.deleteItem = (i = function(t) {
                this.refresh(t.sharedFolder, t.shareInfo), this.update()
            }, function() {
                LPRequest.makeLockItemUpdateRequest(d.deleteSharedFolder, {
                    params: {
                        sharedFolder: this._data,
                        shareInfo: this._shareInfo
                    },
                    items: this,
                    success: this.createHandler(i),
                    successMessage: this.getSuccessfulDeleteMessage(),
                    confirm: this.confirmDelete()
                })
            }), SharedGroup.prototype.getFormData = function(t) {
                var e = Group.prototype.getFormData.apply(this, arguments);
                return e.groupName = this.getShareGroupName(), e
            }, SharedGroup.prototype.processEnteredData = function(t) {
                t.group = this.SHARED_FOLDER_NAME_PREFIX + t.groupName, delete t.groupName
            }, SharedGroup.prototype.getShareGroupName = function(t) {
                return void 0 === t && (t = this._data.group), t.substring(this.SHARED_FOLDER_NAME_PREFIX.length)
            }, SharedGroup.prototype.saveFromDialog = function(t, e) {
                VaultItem.prototype.saveFromDialog.apply(this, arguments)
            }, SharedGroup.prototype.save = (p = function(t) {
                this.refresh(t.sharedFolder, t.shareInfo), this.update()
            }, function(t) {
                LPRequest.makeUpdateRequest(d.renameSharedGroup, {
                    params: {
                        sharedFolder: t,
                        shareInfo: this._shareInfo
                    },
                    success: this.createHandler(p),
                    successMessage: this.getSuccessfulRenameMessage()
                })
            }), SharedGroup.prototype.getKey = function() {
                return this._shareInfo.key
            }, SharedGroup.prototype.getSharedGroup = function() {
                return this
            }, SharedGroup.prototype.startDownloading = (c = function(t) {
                this.refresh(t.sharedFolder, t.shareInfo), this.update()
            }, function() {
                LPRequest.makeRequest(d.startDownloadingFolder, {
                    params: {
                        sharedFolder: this._data,
                        shareInfo: this._shareInfo
                    },
                    lockItems: !0,
                    items: this,
                    success: this.createHandler(c),
                    successMessage: Strings.translateString("%1 will now be downloaded.", this.toString())
                })
            }), SharedGroup.prototype.restoreSharedFolder = (l = function(t) {
                this.refresh(t.sharedFolder, t.shareInfo), this.update()
            }, function() {
                LPRequest.makeRequest(d.restoreDeletedSharedFolder, {
                    params: {
                        sharedFolder: this._data,
                        shareInfo: this._shareInfo
                    },
                    lockItems: !0,
                    items: this,
                    success: this.createHandler(l),
                    successMessage: this.getSuccessfulRestoreMessage()
                })
            }), SharedGroup.prototype.purgeSharedFolder = (g = function() {
                this.publishPurgeSuccess(1), this.deleteUpdates(!1)
            }, function() {
                LPRequest.makeLockItemUpdateRequest(d.purgeDeletedSharedFolder, {
                    params: {
                        sharedFolder: this._data,
                        shareInfo: this._shareInfo
                    },
                    items: this,
                    success: this.createHandler(g),
                    confirm: {
                        title: Strings.Vault.PURGE,
                        text: Strings.translateString(Strings.VaultDynamic.CONFIRM_PURGE, this.toString())
                    }
                })
            }), SharedGroup.prototype.convertToEnterprise = (y = function(t) {
                this.refresh(t.sharedFolder, t.shareInfo), this.update()
            }, function() {
                LPRequest.makeLockItemUpdateRequest(bg.BackgroundServer.sharing.folder.convertToEnterprise, {
                    params: {
                        sharedFolder: this._data,
                        shareInfo: this._shareInfo
                    },
                    items: this,
                    success: this.createHandler(y),
                    confirm: {
                        title: Strings.translateString("Convert to Enterprise"),
                        text: [Strings.translateString("This was a shared family folder, but you are now a part of a LastPass Enterprise account.  In order to continue administering this shared folder, you must move it into the enterprise account.  This may mean certain other members of the enterprise account will have access to it."), Strings.translateString("Do you want to continue?")]
                    }
                })
            }), SharedGroup.prototype.toString = function() {
                return Strings.Vault.SHARED_FOLDER + ": " + this.getName()
            }, LinkedGroup.prototype.useSharePrefix = function() {
                return !1
            }, LinkedGroup.prototype.handleClickEvent = function(t, e) {
                switch (t) {
                    case Constants.ACTION_UNLINK:
                        this.unlink();
                        break;
                    default:
                        SharedGroup.prototype.handleClickEvent.apply(this, arguments)
                }
            }, LinkedGroup.prototype.unlink = (f = function() {
                d.removeLinkedAccountInIe(), "function" == typeof bg.removeaccountlinktoken && bg.removeAccountLinkToken(), Topics.get(Topics.SUCCESS).publish(Strings.translateString("Account (%1) unlinked.", this.getName())), this.deleteUpdates(!1), d.refreshSites(), Topics.get(Topics.ACCOUNT_UNLINKED).publish();
                for (var t = d.getFormFillModels(), e = 0, a = t.length; e < a; ++e) {
                    var o = t[e];
                    o.getSharedGroup() === this && o.deleteUpdates(!1)
                }
            }, function() {
                LPRequest.makeUpdateRequest(d.unlinkAccount, {
                    params: {
                        id: this.getID()
                    },
                    success: this.createHandler(f),
                    confirm: {
                        title: Strings.Vault.UNLINK,
                        text: Strings.translateString("Are you sure you want to unlink your personal account (%1)", this.getName())
                    }
                })
            }), EmergencyAccessGroup.prototype.unlink = (m = function() {
                Topics.get(Topics.SUCCESS).publish(Strings.translateString("Account (%1) unlinked.", this.getName())), this.deleteUpdates(!1)
            }, function() {
                LPRequest.makeUpdateRequest(d.unlinkEmergencyAccessAccount, {
                    params: {
                        folderID: this.getID(),
                        email: this.getName()
                    },
                    success: this.createHandler(m),
                    confirm: {
                        title: Strings.Vault.UNLINK,
                        text: Strings.translateString("Are you sure you want to unlink your personal account (%1)", this.getName())
                    }
                })
            }),
            function() {
                Note.prototype.NOTE_TYPES = {
                    ADDRESS: "Address",
                    BANK: "Bank Account",
                    CREDIT: "Credit Card",
                    DATABASE: "Database",
                    DRIVERS_LICENSE: "Driver's License",
                    EMAIL: "Email Account",
                    GENERIC: "Generic",
                    HEALTH_INSURANCE: "Health Insurance",
                    IM: "Instant Messenger",
                    INSURANCE: "Insurance",
                    MEMBERSHIP: "Membership",
                    PASSPORT: "Passport",
                    SERVER: "Server",
                    SSN: "Social Security",
                    SOFTWARE_LICENSE: "Software License",
                    SSH_KEY: "SSH Key",
                    WIFI: "Wi-Fi Password",
                    CUSTOM: "Custom"
                };
                var e = function() {
                    var t = {};
                    for (var e in Note.prototype.NOTE_TYPES) t[Note.prototype.NOTE_TYPES[e]] = !0;
                    return t
                }();
                Note.prototype.REPROMPT_TYPE = "edit_sn_prompt";
                var a = function(t) {
                        if (t) {
                            var e = t.match(/^Custom_(\d+)$/);
                            return e && 2 == e.length
                        }
                        return !1
                    },
                    u = function(t) {
                        return a(t) || e[t]
                    },
                    o = function(t) {
                        var e;
                        return -1 !== ["zh-CN", "zh-TW", "da-DK", "nl-NL", "en-US", "en-GB", "fi-FI", "fr-FR", "fr-CA", "de-DE", "hu-HU", "it-IT", "ja-JP", "ko-FR", "nb-NO", "pl-PL", "pt-PT", "pt-BR", "ru-RU", "sk-SK", "es-ES", "es-MX", "sv-SE"].indexOf(t)
                    },
                    t, r, s, l, n, i, p, c;
                Note.prototype.isValidLanguage = o, Note.prototype.getNoteType = function() {
                    if (void 0 === this._noteType) {
                        var t = this._data.notetype ? this._data.notetype : this.getKeyValuePairs().NoteType;
                        this._noteType = u(t) ? t : this.NOTE_TYPES.GENERIC
                    }
                    return this._noteType
                }, Note.prototype.getLanguage = function() {
                    if (void 0 === this._language) {
                        var t = this._data.language ? this._data.language : this.getKeyValuePairs().Language;
                        o(t) || (t = navigator.language), this._language = o(t) ? t : "en-US"
                    }
                    return this._language
                }, Note.prototype.getRecordType = function() {
                    var t = this.getNoteType();
                    return a(t) ? "Custom" : t
                }, Note.prototype.getTemplate = function() {
                    return this._data.template
                }, Note.prototype.isCustom = function() {
                    return a(this.getNoteType())
                }, Note.prototype.getAttachmentKey = function() {
                    return this._data.attachkey ? bg.AES.hex2bin(d.decrypt(this._data.attachkey, this.getKey())) : null
                }, Note.prototype.cloneItem = function() {
                    this.passwordProtect(function() {
                        Topics.get(Topics.EDIT_NOTE).publish({
                            defaultData: this.getCloneData()
                        })
                    })
                }, Note.prototype.getRepromptType = function() {
                    return this.REPROMPT_TYPE
                }, Note.prototype.getEditTopicID = function() {
                    return Topics.EDIT_NOTE
                }, Note.prototype.handleClickEvent = function(t, e) {
                    switch (t) {
                        case Constants.ACTION_COPY_NOTE:
                            this.copyNote();
                            break;
                        case Constants.ACTION_COPY_KEY:
                            this.copyPrivateKey();
                            break;
                        case Constants.ACTION_FILL:
                            this.fill(e);
                            break;
                        case Constants.ACTION_COPY_ADDRESS_1:
                            this.copyNoteField("Address 1");
                            break;
                        case Constants.ACTION_COPY_ADDRESS_2:
                            this.copyNoteField("Address 2");
                            break;
                        case Constants.ACTION_COPY_CITY_SLASH_TOWN:
                            this.copyNoteField("City / Town");
                            break;
                        case Constants.ACTION_COPY_ZIP_SLASH_POSTAL_CODE:
                            this.copyNoteField("Zip / Postal Code");
                            break;
                        case Constants.ACTION_COPY_EMAIL_ADDRESS:
                            this.copyNoteField("Email Address");
                            break;
                        case Constants.ACTION_COPY_PHONE_NUMBER:
                            this.copyPhoneNumber();
                            break;
                        case Constants.ACTION_COPY_BANK_NAME:
                            this.copyNoteField("Bank Name");
                            break;
                        case Constants.ACTION_COPY_ACCOUNT_NUMBER:
                            this.copyNoteField("Account Number");
                            break;
                        case Constants.ACTION_COPY_ROUTING_NUMBER:
                            this.copyNoteField("Routing Number");
                            break;
                        case Constants.ACTION_COPY_NAME_ON_CARD:
                            this.copyNoteField("Name on Card");
                            break;
                        case Constants.ACTION_COPY_SECURITY_CODE:
                            this.copyNoteField("Security Code");
                            break;
                        case Constants.ACTION_COPY_POLICY_NUMBER:
                        case Constants.ACTION_COPY_HEATH_INS_POLICY_NUMBER:
                            this.copyNoteField("Policy Number");
                            break;
                        case Constants.ACTION_COPY_GROUP_ID:
                            this.copyNoteField("Group ID");
                            break;
                        case Constants.ACTION_COPY_MEMBER_ID:
                            this.copyNoteField("Member ID");
                            break;
                        case Constants.ACTION_COPY_INS_POLICY_NUMBER:
                            this.copyNoteField("Policy Number");
                            break;
                        case Constants.ACTION_COPY_MEMBERSHIP_NUMBER:
                            this.copyNoteField("Membership Number");
                            break;
                        case Constants.ACTION_COPY_PASSPORT_NUMBER:
                        case Constants.ACTION_COPY_NUMBER:
                            this.copyNoteField("Number");
                            break;
                        case Constants.ACTION_COPY_LICENSE_KEY:
                            this.copyNoteField("License Key");
                            break;
                        case Constants.ACTION_COPY_ORDER_NUMBER:
                            this.copyNoteField("Number");
                            break;
                        case Constants.ACTION_COPY_SSH_PASSPHRASE:
                            this.copyNoteField("Passphrase");
                            break;
                        case Constants.ACTION_COPY_SSH_PUBLIC_KEY:
                            this.copyNoteField("Public Key");
                            break;
                        case Constants.ACTION_COPY_HOSTNAME:
                            this.copyNoteField("Hostname");
                            break;
                        case Constants.ACTION_COPY_NOTE_USERNAME:
                            this.copyNoteField("Username");
                            break;
                        case Constants.ACTION_COPY_NOTE_PASSWORD:
                            this.copyNoteField("Password");
                            break;
                        default:
                            AccountBase.prototype.handleClickEvent.apply(this, arguments)
                    }
                }, Note.prototype.fill = function(t) {
                    var e = "",
                        a = "";
                    t && t.source && (e = t.source), t && t.approach && (a = t.approach), this.passwordProtect(function() {
                        bg.fillitem(this.getID(), !0, void 0, void 0, void 0, e, a)
                    })
                }, Note.prototype.copyNote = (t = function() {
                    d.copyToClipboard(this.getNoteField("Notes")), bg.loglogin(this.getID())
                }, function() {
                    this.passwordProtect(t)
                }), Note.prototype.copyNoteField = function(t) {
                    this.passwordProtect(function() {
                        d.copyToClipboard(this.getNoteField(t)), bg.loglogin(this.getID())
                    })
                }, Note.prototype.copyPhoneNumber = (r = function() {
                    d.copyToClipboard(JSON.parse(this.getNoteField("Phone")).num)
                }, function() {
                    this.passwordProtect(r)
                }), Note.prototype.copyPrivateKey = (s = function(t) {
                    var e = this.getPrivateKey(t.extra);
                    if (-1 === e.indexOf("-----BEGIN") && -1 === e.indexOf("END-----")) d.copyToClipboard(e);
                    else {
                        for (var a = e.split(/-----BEGIN.*KEY-----|-----END.*KEY-----/), o = e.split(/-----/), r = a[1], s = "", n = 0, i = r.length; n < i; ++n) ":" !== r.charAt(n - 1) ? s += r[n].replace(/\u0020/g, "\n") : s += r[n];
                        var p = "-----" + o[1] + "-----\n" + s + "\n-----" + o[3] + "-----";
                        d.copyToClipboard(p)
                    }
                    bg.loglogin(this.getID())
                }, function(t) {
                    var e = this;
                    this.passwordProtect(function() {
                        s.call(e, t)
                    })
                }), Note.prototype.getNoteField = function(t, e) {
                    var a = this.getKeyValuePairs(e);
                    for (var o in a) {
                        var r = a[o];
                        if (o === t && "" !== r) return r
                    }
                    return null
                }, Note.prototype.getPassword = function() {
                    return this.getNoteField("Password")
                }, Note.prototype.hasPassword = function() {
                    return null !== this.getPassword()
                }, Note.prototype.getUsername = function() {
                    return this.getNoteField("Username")
                }, Note.prototype.hasUsername = function() {
                    return null !== this.getUsername()
                }, Note.prototype.getPrivateKey = function(t) {
                    return this.getNoteField("Private Key", t)
                }, Note.prototype.hasPrivateKey = function() {
                    return null !== this.getPrivateKey()
                }, Note.prototype.hasNoteField = function(t) {
                    return null !== this.getNoteField(t)
                }, Note.prototype.toString = function() {
                    if (LPFeatures.allowOmarIA()) {
                        if (!this._displayName)
                            for (var t = bg.get("RecordTypeConfig"), e = 0; e < t.types.length; ++e) {
                                var a;
                                if (t.types[e].recordType === this.getRecordType()) {
                                    this._displayName = Strings.translateString(t.types[e].name) + ": " + this._data.name;
                                    break
                                }
                            }
                        return this._displayName
                    }
                    return Strings.Vault.SECURE_NOTE + ": " + this._data.name
                }, Note.prototype.getKeyValuePairs = (l = "NoteType:", function(t) {
                    var e = d.decryptMobile(this._data.extra, !0, this.getKey()),
                        a = new DialogInput.NestedFields;
                    if (e && u(e.substring(l.length, e.indexOf("\n"))))
                        for (var o, r = {}, s = 0, n = (e = e.split("\n")).length; s < n; ++s) {
                            var i = e[s],
                                p = i.indexOf(":");
                            if (0 < p) {
                                var c = i.substring(0, p);
                                if (void 0 === r[c] && ("object" != typeof t || t[c])) {
                                    a[c] = i.substring(p + 1), r[o = c] = !0;
                                    continue
                                }
                            }
                            o && (a[o] += "\n" + i)
                        } else a.Notes = e;
                    return a
                }), Note.prototype.getFormData = function(t) {
                    var e = VaultItem.prototype.getFormData.apply(this, arguments);
                    return e.extra = this.getKeyValuePairs(t.extra), e.notetype = this.getNoteType(), e.template = this._data.template, e
                }, Note.prototype.processEnteredData = function(t, e, a) {
                    AccountBase.prototype.processEnteredData.apply(this, arguments);
                    var o = "";
                    if (t.notetype !== this.NOTE_TYPES.GENERIC) {
                        o = "NoteType:" + t.notetype, LPFeatures.allowOmarIA() && (o += "\nLanguage:" + (t.language ? t.language : "en-US"));
                        var r = t.extra;
                        for (var s in r) o += "\n" + s + ":" + r[s]
                    } else o = t.extra.Notes;
                    if (t.extra = this.encryptIfNecessary("extra", o, a), this.getKey() !== a && (t.attachkey = d.encrypt(d.decrypt(this._data.attachkey, this.getKey()), a)), t.attacharraychanges && t.attacharraychanges.add && 0 < t.attacharraychanges.add.length) {
                        var n = this.getAttachmentKey();
                        if (null === n) n = bg.SHA256(bg.lpCreatePass(32, 1, 1, 1, 1, 1, 1, 1)), t.attachkey = d.encrypt(n, a), n = bg.AES.hex2bin(n);
                        else if (!n) throw new AttachmentKeyException;
                        for (var i = 0, p = t.attacharraychanges.add.length; i < p; ++i) {
                            var c = t.attacharraychanges.add[i],
                                u = this.getID();
                            "0" !== u && (c.id = u + "-" + c.id, c.parent = u), c.filename = d.encrypt(c.filename, n)
                        }
                    }
                }, Note.prototype.getPostData = (n = function(t, e) {
                    if (e.attacharraychanges && e.attacharraychanges.remove)
                        for (var a = 0, o = e.attacharraychanges.remove.length; a < o; ++a) t["rmattach" + a] = e.attacharraychanges.remove[a]
                }, i = function(t, e) {
                    if (e.attacharraychanges && e.attacharraychanges.add)
                        for (var a = 0, o = e.attacharraychanges.add.length; a < o; ++a) {
                            var r = e.attacharraychanges.add[a];
                            t["filename" + a] = r.filename, t["mimetype" + a] = r.mimetype, t["attachid" + a] = r.id.substring(r.id.indexOf("-") + 1), t["attachbytes" + a] = r.bytes
                        }
                }, function(t) {
                    var e = AccountBase.prototype.getPostData.apply(this, arguments);
                    return e.url = bg.AES.url2hex(this._data.url), e.u = e.url, e.username = "", e.password = "", e.template = t.template, e.hexName = bg.AES.url2hex(t.name), e.notetype = t.notetype, t.attachkey && (e.attachkey = t.attachkey), n(e, t), i(e, t), e
                }), Note.prototype.update = (p = function(t) {
                    if (t && t.remove)
                        for (var e = 0, a = t.remove.length; e < a; ++e) this.removeAttachment(t.remove[e])
                }, c = function(t) {
                    if (t && t.add)
                        for (var e = 0, a = t.add.length; e < a; ++e) this.addAttachment(new Attachment(t.add[e]))
                }, function(t, e, a) {
                    t && t.attacharraychanges && (a = JSON.parse(JSON.stringify(t.attacharraychanges))), AccountBase.prototype.update.apply(this, arguments), p.call(this, a), c.call(this, a), t.attachpresent = 0 < this._attachments.length ? "1" : "", t.attacharraychanges = {
                        add: [],
                        remove: []
                    }
                }), Note.prototype.add = function(a, t) {
                    var o, r;
                    r = (o = this)._data.attacharraychanges, LPRequest.makeUpdateRequest(d.addNote, {
                        parameters: [o, a, t],
                        success: function(t) {
                            var e = null != r ? JSON.parse(JSON.stringify(r)) : r;
                            o.update(t, a, e), o.publishAdd(Topics.NOTE_ADDED, a)
                        }
                    })
                }, Note.prototype.save = function(e, a, t) {
                    var o = this;
                    LPRequest.makeUpdateRequest(d.saveNote, {
                        parameters: [o, e, a, t],
                        success: function(t) {
                            o.update(t, a, e.attacharraychanges), o.publishSaveSuccess(1)
                        }
                    })
                }, Note.prototype.hasAttachments = function() {
                    return 0 < this._attachments.length
                }, Note.prototype.getAttachments = function() {
                    return this._attachments
                }, Note.prototype.addAttachment = function(t) {
                    t.setParentNote(this), this._attachments.push(t)
                }, Note.prototype.removeAttachment = function(t) {
                    for (var e = 0, a = this._attachments.length; e < a; ++e)
                        if (this._attachments[e] === t || this._attachments[e].getID() === t) return void this._attachments.splice(e, 1)
                }
            }(),
            function() {
                Attachment.prototype.setParentNote = function(t) {
                    (this._parentNote = t) && (this._data.parent = t.getID())
                }, Attachment.prototype.getID = function() {
                    return this._data.id
                }, Attachment.prototype.getName = function() {
                    if (null === this._filename)
                        if (null !== this._data.filename && this._data.filename.length) {
                            var t = this._parentNote ? this._parentNote.getAttachmentKey() : null;
                            t && (this._filename = d.decrypt(this._data.filename, t))
                        } else {
                            var e = this._data.mimetype,
                                a = "";
                            0 === e.indexOf("other:") ? a = "." + e.substring(6) : 0 === e.indexOf("data:audio") ? a = "." + e.substring(11) : 0 === e.indexOf("data:image") && (a = "." + e.substring(11)), this._filename = "attachment" + a
                        } return this._filename ? this._filename : this._data.filename
                }, Attachment.prototype.getType = function() {
                    return this._data.mimetype
                }, Attachment.prototype.getBytes = function() {
                    return this._data.bytes
                }, Attachment.prototype.handleClickEvent = function(t, e) {
                    switch (t) {
                        case Constants.ACTION_OPEN:
                            this.open();
                            break;
                        case Constants.ACTION_SAVE:
                            this.save();
                            break;
                        default:
                            VaultItemBase.prototype.handleClickEvent.apply(this, arguments)
                    }
                };
                var t = function(t) {
                    return function() {
                        this._parentNote ? t.apply(this, arguments) : dialogs.alert.open({
                            title: Strings.translateString("Error"),
                            text: Strings.translateString("Attachment must be saved before it can be viewed.")
                        })
                    }
                };
                Attachment.prototype.open = t(function() {
                    d.openAttachment(this)
                }), Attachment.prototype.save = t(function() {
                    d.saveAttachment(this)
                }), Attachment.prototype.deleteItem = function() {
                    Topics.get(Topics.ATTACHMENT_REMOVED).publish(this), this.destroyViews()
                }
            }(),
            function() {
                FormFill.prototype.REPROMPT_TYPE = "view_ff_prompt", FormFill.prototype.FORM_FILL_TYPE_GENERIC = "0", FormFill.prototype.FORM_FILL_TYPE_CREDIT_CARD = "1", FormFill.prototype.getRepromptType = function() {
                    return this.REPROMPT_TYPE
                }, FormFill.prototype.getEditTopicID = function() {
                    return Topics.EDIT_FORM_FILL
                }, FormFill.prototype.getName = function() {
                    return this._data.decprofilename
                }, FormFill.prototype.getID = function() {
                    return this._data.ffid
                }, FormFill.prototype.setID = function(t) {
                    this._data.ffid = t
                }, FormFill.prototype.isCreditCard = function() {
                    return this._data.profiletype === this.FORM_FILL_TYPE_CREDIT_CARD
                }, FormFill.prototype.toString = function() {
                    return Strings.Vault.FORM_FILL + ": " + this._data.decprofilename
                }, FormFill.prototype.handleClickEvent = function(t, e) {
                    switch (t) {
                        case Constants.ACTION_FILL:
                            this.fill(e);
                            break;
                        default:
                            VaultItem.prototype.handleClickEvent.apply(this, arguments)
                    }
                }, FormFill.prototype.fill = function(t) {
                    var e = t ? t.source : "vault";
                    d.fillProfile(this, e)
                }, FormFill.prototype.deleteItem = function(t) {
                    var e;
                    this.passwordProtect((e = this, function() {
                        LPRequest.makeLockItemUpdateRequest(d.deleteFormFill, {
                            parameters: [e, t],
                            items: e,
                            success: function() {
                                e.deleteUpdates()
                            },
                            confirm: e.confirmDelete()
                        })
                    }))
                }, FormFill.prototype.enableCreditMonitoring = function() {
                    LPRequest.makeUpdateRequest(d.createCreditMonitoringProfile, {
                        parameters: this
                    })
                }, FormFill.prototype.add = function(t, e) {
                    var a;
                    a = this, LPRequest.makeUpdateRequest(d.addFormFill, {
                        parameters: [a, e],
                        success: function(t) {
                            a.update(t), a._data.creditmon && a.enableCreditMonitoring(), a.publishAdd(Topics.FORM_FILL_ADDED)
                        },
                        confirm: a._data.creditmon ? r(a._data, a.getKey()) : null
                    })
                };
                var r = (s = function(t, e, a) {
                        var o = h.createElement("tr", "settingsRow");
                        if (o.appendChild(h.createElement("td", "settingLabel", e)), "string" == typeof a) o.appendChild(h.createElement("td", null, a));
                        else {
                            var r = h.createElement("td");
                            r.appendChild(a), o.appendChild(r)
                        }
                        t.appendChild(o)
                    }, n = function(t, e) {
                        var a = h.createElement("div");
                        return t.address1 && a.appendChild(h.createElement("p", null, d.decryptMobile(t.address1, !0, e))), t.address2 && a.appendChild(h.createElement("p", null, d.decryptMobile(t.address2, !0, e))), t.address3 && a.appendChild(h.createElement("p", null, d.decryptMobile(t.address3, !0, e))), a.appendChild(h.createElement("p", null, d.decryptMobile(t.city, !0, e) + ", " + d.decryptMobile(t.state, !0, e) + " " + d.decryptMobile(t.zip, !0, e))), a
                    }, i = function(t) {
                        return "•••• " + t.slice(-4)
                    }, p = function(t) {
                        return 11 === t.length && (t = t.substring(1)), "(" + t.substring(0, 3) + ") " + t.substring(3, 6) + "-" + t.substring(6)
                    }, function(t, e) {
                        var a = [Strings.translateString("Only the below information will be sent to LastPass."), Strings.translateString("Other confidential Form Fill information, such as credit card numbers, will not be sent.")],
                            o = h.createElement("table", "settings creditMonConfirm");
                        s(o, Strings.translateString("Name"), d.decryptMobile(t.firstname, !0, e) + " " + d.decryptMobile(t.lastname, !0, e)), s(o, Strings.translateString("Birthday"), d.decryptMobile(t.birthday, !0, e)), s(o, Strings.translateString("Social Security Number"), i(d.decryptMobile(t.ssn, !0, e))), s(o, Strings.translateString("Phone Number"), p(d.decryptMobile(t.phone, !0, e))), s(o, Strings.translateString("Address"), n(t, e)), h.addZebraStriping(o), a.push(o);
                        var r = h.createElement("p", {
                            compoundtranslation: !0,
                            class: "dialogText"
                        }, "I have read and agree with the ");
                        return r.appendChild(h.createElement("a", {
                            target: "_blank",
                            href: d.getBaseURL() + "creditmonitoring.php?cmd=showterms"
                        }, "LastPass Terms and Conditions")), Strings.translate(r), a.push(r), {
                            title: Strings.Vault.ADD_CREDIT_MON,
                            text: a,
                            nextButtonText: Strings.translateString("I Agree"),
                            backButtonText: Strings.translateString("I Do Not Agree")
                        }
                    }),
                    s, n, i, p;
                FormFill.prototype.save = function(t, e, a) {
                    var o;
                    o = this, LPRequest.makeUpdateRequest(d.saveFormFill, {
                        parameters: [o, t, a],
                        success: function() {
                            o.update(t), o.publishSaveSuccess(1)
                        },
                        confirm: t.creditmon && !o._data.creditmon ? r(t, o.getKey()) : null
                    })
                }, FormFill.prototype.update = function(t) {
                    var e = !1;
                    t.creditmon && !this._data.creditmon && (e = !0), VaultItem.prototype.update.apply(this, arguments), e && this.enableCreditMonitoring()
                }, FormFill.prototype.getPostData = function(t) {
                    var e = VaultItem.prototype.getPostData.apply(this, arguments),
                        a = this.getKey();
                    for (var o in t) {
                        var r = t[o];
                        if (this.isEncryptedField(o)) e[o] = d.encryptWithKey(d.decryptMobile(r, !0, a), a);
                        else switch (o) {
                            case "creditmon":
                            case "pwprotect":
                                break;
                            default:
                                e[o] = r
                        }
                    }
                    return e.ffid = this.getID(), void 0 !== e.custom_fields && delete e.custom_fields, t.creditmon && (e.creditmon = "on"), e
                }, FormFill.prototype.isEncryptedField = function(t) {
                    if (-1 !== t.indexOf("cfid")) return !1;
                    switch (t) {
                        case "decprofilename":
                        case "pwprotect":
                        case "creditmon":
                        case "custom_fields":
                        case "profiletype":
                            return !1;
                        default:
                            return !0
                    }
                };
                var u = function(t, e) {
                        try {
                            var a = JSON.parse(t[e]);
                            delete t[e], t[e + "ext"] = a.ext, t["phone" === e || "fax" === e ? e : e + "phone"] = a.num, t["phone" === e || "fax" === e ? e + "3lcc" : e + "phone3lcc"] = a.cc3l
                        } catch (t) {}
                    },
                    c = function(t, e, a) {
                        var o = {};
                        return o.ext = d.decryptMobile(t[e + "ext"], !0, a), o.num = d.decryptMobile(t["phone" === e || "fax" === e ? e : e + "phone"], !0, a), o.cc3l = d.decryptMobile(t["phone" === e || "fax" === e ? e + "3lcc" : e + "phone3lcc"], !0, a), JSON.stringify(o)
                    };
                FormFill.prototype.processEnteredData = function(t, e, a) {
                    for (var o in u(t, "phone"), u(t, "mobile"), u(t, "eve"), u(t, "fax"), t) {
                        var r = t[o];
                        if ("custom_fields" === o)
                            for (var s = "customfield", n = 0, i = r.length; n < i; ++n) {
                                var p = r[n],
                                    c = s + (n + 1);
                                t[c + "cfid"] = p.cfid, t[c + "text"] = d.encryptMobile(p.text, !0, a), t[c + "value"] = d.encryptMobile(p.value, !0, a), t[c + "alttext"] = ""
                            } else this.isEncryptedField(o) && (t[o] = this.encryptIfNecessary(o, t[o], a))
                    }
                    delete t.custom_fields, t.profilename = d.encryptMobile(t.decprofilename, !0, a)
                }, FormFill.prototype.getFormData = function(t) {
                    var e = {},
                        a = this.getKey();
                    for (var o in t) this.isEncryptedField(o) ? e[o] = d.decryptMobile(this._data[o], !0, a) : e[o] = this._data[o];
                    if (t.custom_fields) {
                        e.custom_fields = [];
                        for (var r = 0, s = this._data.custom_fields.length; r < s; ++r) {
                            var n = this._data.custom_fields[r],
                                i = {};
                            i.cfid = n.cfid, i.text = d.decryptMobile(n.text, !0, a), i.value = d.decryptMobile(n.value, !0, a);
                            var p = d.decryptMobile(n.alttext, !0, a);
                            "" !== p && (i.value += "\n" + p), e.custom_fields.push(i)
                        }
                    }
                    return e.phone = c(this._data, "phone", a), e.mobile = c(this._data, "mobile", a), e.eve = c(this._data, "eve", a), e.fax = c(this._data, "fax", a), e
                }
            }(), Identity.prototype.REPROMPT_TYPE = "switch_identity_prompt", Identity.prototype.getRepromptType = function() {
                return this.REPROMPT_TYPE
            }, Identity.prototype.getName = function() {
                return this._data.deciname
            }, Identity.prototype.getID = function() {
                return this._data.iid
            }, Identity.prototype.setID = function(t) {
                this._data.iid = t
            }, Identity.prototype.handleClickEvent = function(t, e) {
                switch (t) {
                    case Constants.ACTION_ENABLE:
                        this.enable();
                        break;
                    default:
                        VaultItemBase.prototype.handleClickEvent.apply(this, arguments)
                }
            }, Identity.prototype.getEditTopicID = function(t) {
                return Topics.EDIT_IDENTITY
            }, Identity.prototype.enable = (_ = function() {
                Topics.get(Topics.IDENTITY_ENABLE).publish(this), this._enabled = !0, this.updateViews()
            }, function(t) {
                h.getOption(t, "reprompt", !0) ? this.passwordProtect(function() {
                    _.apply(this), t && t.callback && t.callback()
                }) : _.apply(this)
            }), Identity.prototype.disable = function() {
                this._enabled = !1, this.updateViews()
            }, Identity.prototype.processEnteredData = function(t, e, a) {
                t.iname = d.encryptAES(t.deciname, a)
            }, Identity.prototype.save = (S = function(t) {
                this.update(t), this.publishSaveSuccess(1)
            }, function(t) {
                LPRequest.makeUpdateRequest(d.saveIdentity, {
                    params: {
                        identity: t
                    },
                    success: this.createHandler(S)
                })
            }), Identity.prototype.add = (v = function(t) {
                this.update(t), this.publishAdd(Topics.IDENTITY_ADDED)
            }, function() {
                LPRequest.makeUpdateRequest(d.addIdentity, {
                    params: {
                        identity: this._data
                    },
                    success: this.createHandler(v)
                })
            }), Identity.prototype.deleteItem = (I = function() {
                this.deleteUpdates()
            }, E = function() {
                d.logEvent("v_did"), LPRequest.makeLockItemUpdateRequest(d.deleteIdentity, {
                    params: {
                        id: this.getID()
                    },
                    items: this,
                    success: this.createHandler(I),
                    confirm: this.confirmDelete()
                })
            }, function() {
                this._enabled ? Topics.get(Topics.ERROR).publish(Strings.translateString("%1 cannot be deleted while enabled.", this.toString())) : this.passwordProtect(E)
            }), Identity.prototype.toString = function() {
                return Strings.Vault.IDENTITY + ": " + this.getName()
            }
    }($, document, LPTools, LPProxy);
//# sourceMappingURL=sourcemaps/model.js.map