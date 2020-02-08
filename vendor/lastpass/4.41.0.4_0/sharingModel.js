VaultItemBaseDisplay.prototype.isAccepted = function() {
    return !1
}, VaultItemBaseDisplay.prototype.isDeclined = function() {
    return !1
}, VaultItemBaseDisplay.prototype.isPending = function() {
    return !1
}, SharedFolderItem = function(e, t) {
    if (!e && t.sharedata) {
        var n = atob(t.sharedata),
            r = [],
            o = [];
        bg.parsemobile(n, n.length, 100, 0, null, o, null, null, null, null, null, null, !0, !1, null, null, null, null, null, null, null, null, r, null, null, null, null, null, null, null, null, !1, null, null, null, null, r), 1 === r.length && $.extend(t, r[0]), e = new SharedGroup({
            group: t.decsharename || t.name,
            aid: t.shareid,
            shareid: t.shareid
        }, t)
    } else $.extend(e._shareInfo, t);
    VaultItemBaseDisplay.call(this, e)
}, SharedFolderItem.prototype = Object.create(VaultItemBaseDisplay.prototype), SharedFolderItem.prototype.constructor = SharedFolderItem;
var SharedItem = function(e, t) {
    VaultItemBaseDisplay.call(this, e), VaultItemBase.call(this, t), this._itemModelDisplay = e.newDisplayObject()
};
SharedItem.prototype = Object.create(VaultItemBase.prototype), $.extend(SharedItem.prototype, VaultItemBaseDisplay.prototype), (SharedItem.prototype.constructor = SharedItem).prototype.updateTextElements = function() {
    this._itemModelDisplay.updateTextElements()
}, SharedItem.prototype.toString = function() {
    return this._model.toString()
}, SharedItem.prototype.getID = function() {
    return this._model.getID()
}, SharedItem.prototype.getDialogActions = function() {
    for (var e = [], t = this._itemModelDisplay.getItemButtonActions(), n = 0, r = t.length; n < r; ++n) this._itemModelDisplay.isExcludedAction(t[n]) || e.push(t[n]);
    return e
}, PendingReceivedSharedItem = function(e) {
    var t, n;
    VaultItemBase.call(this, e), this.getKey = (t = null, function() {
        if (null === t) {
            var e = new bg.RSAKey;
            LPProxy.parsePrivateKey(e), t = e.decrypt(this._data.sharekeyenchex)
        }
        return t
    }), this.decrypt = (n = !1, function() {
        var e = this.getKey();
        this._name = LPProxy.decrypt(this._data.sharename, e), this._username = LPProxy.decrypt(this._data.username, e), this._sender = bg.AES.hex2bin(this._data.sharerusername)
    })
}, PendingReceivedSharedItem.prototype = Object.create(VaultItemBase.prototype), PendingReceivedSharedItem.prototype.constructor = PendingReceivedSharedItem, PendingReceivedSharedItem.prototype.getDisplayClass = function() {
    return PendingReceivedSharedItemDisplay
};
var PendingReceivedSharedItemDisplay = function(e) {
    VaultItemBaseDisplay.call(this, e), e.decrypt()
};
PendingReceivedSharedItemDisplay.prototype = Object.create(VaultItemBaseDisplay.prototype), (PendingReceivedSharedItemDisplay.prototype.constructor = PendingReceivedSharedItemDisplay).prototype.isPending = function() {
    return !0
}, PendingSentSharedItem = function(e, t) {
    SharedItem.call(this, e, t)
}, PendingSentSharedItem.prototype = Object.create(SharedItem.prototype), PendingSentSharedItem.prototype.constructor = PendingSentSharedItem, PendingSentSharedItem.prototype.getEmailLabel = function() {
    return Strings.Vault.SHARED_WITH
}, PendingSentSharedItem.prototype.isPending = function() {
    return !0
}, PendingSentSharedItem.prototype.getItemButtonActions = function() {
    return [Constants.ACTION_EDIT, Constants.ACTION_SHARE, Constants.ACTION_EMAIL, Constants.ACTION_CANCEL]
}, PendingSentSharedItem.prototype.getContextMenuItems = function(e) {
    var t = [];
    return e || (t.push(new LPTools.ContextMenuItem(Constants.ACTION_EDIT)), t.push(new LPTools.ContextMenuItem(Constants.ACTION_SHARE)), t.push(new LPTools.ContextMenuItem(Constants.ACTION_EMAIL)), t.push(new LPTools.ContextMenuItem(Constants.ACTION_CANCEL))), t
}, PendingSentSharedItem.prototype.handleClickEvent = function(e) {
    switch (e) {
        case Constants.ACTION_EMAIL:
            this.resendInvitation();
            break;
        case Constants.ACTION_CANCEL:
            this.cancel();
            break;
        default:
            SharedItem.prototype.handleClickEvent.apply(this, arguments)
    }
}, PendingSentSharedItem.prototype.resendInvitation = function(e) {
    LPRequest.makeLockItemUpdateRequest(LPProxy.resendShareInvitation, {
        params: {
            emails: this.getEmail(),
            aids: [this.getID()]
        },
        items: this,
        successMessage: Strings.translateString("Pending invitation for %1 was resent to %2", this.toString(), this.getEmail())
    })
}, PendingSentSharedItem.prototype.cancel = function() {
    var e = function() {
        Topics.get(Topics.REMOVED_SHARE).publish(this), this.destruct()
    };
    return function() {
        LPRequest.makeLockItemUpdateRequest(LPProxy.unshareItem, {
            params: {
                id: this.getID(),
                email: this.getEmail()
            },
            items: this,
            success: this.createHandler(e),
            successMessage: Strings.translateString("Pending invitation for %1 was cancelled for %2", this.toString(), this.getEmail()),
            confirm: {
                title: Strings.Vault.CANCEL_INVITE,
                text: Strings.translateString("Are you sure you want to cancel this invitation?")
            },
            requestSuccessOptions: {
                closeDialog: !1
            }
        })
    }
}(), AcceptedSentSharedItem = function(e, t) {
    SharedItem.call(this, e, t)
}, AcceptedSentSharedItem.prototype = Object.create(SharedItem.prototype), AcceptedSentSharedItem.prototype.constructor = AcceptedSentSharedItem, AcceptedSentSharedItem.prototype.getEmailLabel = function() {
    return Strings.Vault.SHARED_WITH
}, AcceptedSentSharedItem.prototype.isAccepted = function() {
    return !0
}, AcceptedSentSharedItem.prototype.getItemButtonActions = function() {
    return [Constants.ACTION_EDIT, Constants.ACTION_SHARE, Constants.ACTION_REVOKE]
}, AcceptedSentSharedItem.prototype.getContextMenuItems = function(e) {
    var t = [];
    return e || (t.push(new LPTools.ContextMenuItem(Constants.ACTION_EDIT)), t.push(new LPTools.ContextMenuItem(Constants.ACTION_SHARE)), t.push(new LPTools.ContextMenuItem(Constants.ACTION_REVOKE))), t
}, AcceptedSentSharedItem.prototype.handleClickEvent = function(e) {
    switch (e) {
        case Constants.ACTION_REVOKE:
            this.revoke();
            break;
        default:
            SharedItem.prototype.handleClickEvent.apply(this, arguments)
    }
}, AcceptedSentSharedItem.prototype.revoke = function() {
    var e = function() {
        Topics.get(Topics.REMOVED_SHARE).publish(this), this.destruct()
    };
    return function() {
        LPRequest.makeLockItemUpdateRequest(LPProxy.unshareItem, {
            params: {
                id: this.getID(),
                email: this.getEmail()
            },
            items: this,
            success: this.createHandler(e),
            confirm: {
                title: Strings.Vault.REVOKE,
                text: Strings.translateString("Are you sure you want to revoke access for %1? They will no longer be able to access this item.", this.getEmail())
            },
            requestSuccessOptions: {
                closeDialog: !1
            }
        })
    }
}();
var AcceptedReceivedSharedItem = function(e, t) {
    SharedItem.call(this, e, t)
};
AcceptedReceivedSharedItem.prototype = Object.create(SharedItem.prototype), (AcceptedReceivedSharedItem.prototype.constructor = AcceptedReceivedSharedItem).prototype.getEmailLabel = function() {
    return Strings.Vault.SHARED_BY
}, AcceptedReceivedSharedItem.prototype.isAccepted = function() {
    return !0
}, AcceptedReceivedSharedItem.prototype.getItemButtonActions = function() {
    return [Constants.ACTION_EDIT, Constants.ACTION_REMOVE]
}, AcceptedReceivedSharedItem.prototype.getContextMenuItems = function(e) {
    var t = [];
    return e || t.push(new LPTools.ContextMenuItem(Constants.ACTION_EDIT)), t.push(new LPTools.ContextMenuItem(Constants.ACTION_REMOVE)), t
}, AcceptedReceivedSharedItem.prototype.handleClickEvent = function(e, t) {
    switch (e) {
        case Constants.ACTION_REMOVE:
            SharedItem.prototype.handleClickEvent.call(this, Constants.ACTION_DELETE, t);
            break;
        default:
            SharedItem.prototype.handleClickEvent.apply(this, arguments)
    }
}, DeclinedSentSharedItem = function(e, t) {
    SharedItem.call(this, e, t)
}, DeclinedSentSharedItem.prototype = Object.create(SharedItem.prototype), DeclinedSentSharedItem.prototype.constructor = DeclinedSentSharedItem, DeclinedSentSharedItem.prototype.getEmailLabel = function() {
    return Strings.Vault.SHARED_WITH
}, DeclinedSentSharedItem.prototype.isDeclined = function() {
    return !0
}, DeclinedSentSharedItem.prototype.getItemButtonActions = PendingSentSharedItem.prototype.getItemButtonActions, DeclinedSentSharedItem.prototype.getContextMenuItems = PendingSentSharedItem.prototype.getContextMenuItems, SharingContainer = function(e, t) {
    Container.call(this, e, t)
}, SharingContainer.prototype = Object.create(Container.prototype), SharingContainer.prototype.constructor = SharingContainer, IndividualShareContainer = function() {
    var n = function(e) {
        for (var t = [], n = [], r = [], o = 0, i = e.length; o < i; ++o) {
            var a = e[o];
            a.isAccepted() ? n.push(a) : a.isPending() ? t.push(a) : r.push(a)
        }
        var s = [];
        return 0 < t.length && s.push(new SharedSiteGroup(Strings.translateString("Pending"), "pendingFolder", t)), 0 < r.length && s.push(new SharedSiteGroup(Strings.translateString("Declined"), "declinedFolder", r)), 0 < n.length && s.push(new SharedSiteGroup(Strings.translateString("Accepted"), "acceptedFolder", n)), s
    };
    return function(e, t) {
        SharingContainer.call(this, n(e), t)
    }
}(), IndividualShareContainer.prototype = Object.create(SharingContainer.prototype), IndividualShareContainer.prototype.constructor = IndividualShareContainer;
var SharedFolderContainer = function(e, t) {
    this.pendingGroup = new SharedSiteGroup(Strings.translateString("Pending")), this.adminGroup = new SharedSiteGroup(Strings.translateString("Administrator")), this.defaultGroup = new SharedSiteGroup(Strings.translateString("Non-Administrator")), SharingContainer.call(this, [this.pendingGroup, this.adminGroup, this.defaultGroup], t);
    for (var n = 0, r = e.length; n < r; ++n) this.addChild(e[n])
};
SharedFolderContainer.prototype = Object.create(SharingContainer.prototype), (SharedFolderContainer.prototype.constructor = SharedFolderContainer).prototype.addChild = function() {
    var e = function(e) {
        e._model.isPending() ? this.pendingGroup.addChild(e) : e._model.canAdminister() ? this.adminGroup.addChild(e) : this.defaultGroup.addChild(e)
    };
    return function() {
        this.checkForStateChange(e, arguments)
    }
}(), SharedSiteGroup = function(e, t, n) {
    DefaultGroupDisplay.call(this, new DummyGroup(e), n), this._css = t || null
}, SharedSiteGroup.prototype = Object.create(DefaultGroupDisplay.prototype), SharedSiteGroup.prototype.constructor = SharedSiteGroup;
var Invitee = function(e) {
    VaultItemBaseDisplay.call(this, this), VaultItemBase.call(this, e)
};
Invitee.prototype = Object.create(VaultItemBase.prototype), $.extend(Invitee.prototype, VaultItemBaseDisplay.prototype), (Invitee.prototype.constructor = Invitee).prototype.setEditable = function(e) {
    this.editable = e
}, Invitee.prototype.edit = function() {
    if (this.editable) {
        var e = LPTools.createElement("input", {
            class: "dialogInput",
            type: "text",
            spellcheck: !1
        });
        e.value = this.getName(), t = this, (n = $(e)).bind("blur", function() {
            t.setName(e.value), e.parentElement.insertBefore(t._element, e), e.parentElement.removeChild(e), t.updateTextElements(), n.unbind()
        }), this._element.parentElement.insertBefore(e, this._element), this._element.parentElement.removeChild(this._element), e.focus()
    }
    var t, n
}, Invitee.prototype.build = function() {
    var e = VaultItemBaseDisplay.prototype.build.apply(this, arguments);
    return e.setAttribute("vaultaction", Constants.ACTION_EDIT), e
}, Invitee.prototype.remove = function() {
    this._parent.removeChild(this), Topics.get(Topics.REMOVED_SHARED_FOLDER_USER).publish(this)
}, Invitee.prototype.handleClickEvent = function(e) {
    switch (e) {
        case Constants.ACTION_REMOVE:
            this.remove();
            break;
        default:
            VaultItemBaseDisplay.prototype.handleClickEvent.apply(this, arguments)
    }
}, Invitee.prototype.buildItemIconElement = function() {
    return null
}, Invitee.prototype.getItemButtonActions = function() {
    return [Constants.ACTION_REMOVE]
}, Invitee.prototype.getContextMenuItems = function() {
    return [new LPTools.ContextMenuItem(Constants.ACTION_REMOVE)]
}, Invitee.prototype.getEmail = function() {
    return this._data.email
}, Invitee.prototype.getName = function() {
    return this._data.email
}, Invitee.prototype.setName = function(e) {
    this._data.email = e
};
var SharedFolderMember = function(e, t) {
    Invitee.call(this, e), this._pending = !1, this._sharedGroup = t, this._checkboxes = {}
};
SharedFolderMember.prototype = Object.create(Invitee.prototype), (SharedFolderMember.prototype.constructor = SharedFolderMember).prototype.buildCheckbox = function(e, t) {
    var n = LPTools.createElement("td", e),
        r = LPTools.createElement("input", {
            class: "checkbox",
            type: "checkbox"
        });
    return this.isMissingSharedFolderUser() && r.setAttribute("disabled", "disabled"), this._checkboxes[e] = {
        element: r,
        invert: t
    }, n.appendChild(r), n.appendChild(LPTools.createElement("label", "noText")), n
}, SharedFolderMember.prototype.updatePermissions = function(e) {
    this._data.readonly = e.readonly, this._data.can_administer = e.canadminister, this._data.give = e.give
}, SharedFolderMember.prototype.isModified = function() {
    for (var e in this._checkboxes)
        if (this._data[e] !== this.getCheckboxValue(e)) return !0;
    return !1
}, SharedFolderMember.prototype.getCheckboxValue = function(e) {
    var t = this._checkboxes[e],
        n = t.invert ? "0" : "1",
        r = t.invert ? "1" : "0";
    return this._checkboxes[e].element.checked ? n : r
}, SharedFolderMember.prototype.build = function(e) {
    if (this._pending) return Invitee.prototype.build.apply(this, arguments);
    var t = null;
    t = LPTools.createElement("tr", "settingsRow");
    var n = this.createTextElement("td", this.getName, "name");
    if (LPProxy.isEnterpriseUser() && "1" === this._data.external) {
        var r = LPTools.createElement("p", "small infoLabel", Strings.Vault.OUTSIDE_ENT);
        r.insertBefore(LPTools.createElement("i", "badge warn small"), r.firstChild), n.appendChild(r)
    }
    if (this.isMissingSharedFolderUser()) {
        var o = LPTools.createElement("p", "small infoLabel", Strings.Vault.NO_SHARING_KEYS);
        o.insertBefore(LPTools.createElement("i", "badge danger small"), o.firstChild), n.appendChild(o)
    }
    t.appendChild(n), t.appendChild(this.buildCheckbox("readonly")), LPProxy.isEnterpriseUser() && t.appendChild(this.buildCheckbox("can_administer")), t.appendChild(this.buildCheckbox("give", !0)), t.appendChild(LPTools.createElement("td", "accepted", "1" === this._data.accepted ? Strings.Vault.YES : Strings.Vault.NO));
    var i = LPTools.createElement("td", "actionCell"),
        a = LPTools.createElement("div", "centerItemButtons");
    i.appendChild(a);
    for (var s = this.getItemButtonActions(), l = 0; l < s.length; ++l) a.appendChild(LPTools.buildItemButton(s[l]));
    return t.appendChild(i), t
};
var checkboxHandler = function(e) {
    var t = e.target.previousElementSibling;
    t.checked = !t.checked, e.stopPropagation()
};
SharedFolderMember.prototype.postBuild = function(e, t) {
        for (var n in Invitee.prototype.postBuild.apply(this, arguments), this._checkboxes) {
            var r = this._checkboxes[n];
            r.element.checked = this._data[n] === (r.invert ? "0" : "1"), this.isMissingSharedFolderUser() || LPPlatform.addEventListener(r.element.nextElementSibling, "click", checkboxHandler)
        }
    }, SharedFolderMember.prototype.getType = function() {
        return this._data.type
    }, SharedFolderMember.prototype.getUsername = function() {
        return this._data.username
    }, SharedFolderMember.prototype.getName = function() {
        var e = VaultItemBase.prototype.getName.apply(this);
        return null != e && 0 !== e.length || (e = this._data.username), e
    }, SharedFolderMember.prototype.setName = function(e) {
        this._data.username = e
    }, SharedFolderMember.prototype.getID = function() {
        return this._data.uid
    }, SharedFolderMember.prototype.getShareID = function() {
        return this._sharedGroup.getID()
    }, SharedFolderMember.prototype.setID = function(e) {
        this._data.uid = e
    }, SharedFolderMember.prototype.isMissingSharedFolderUser = function() {
        return "1" === this._data.msfuser
    }, SharedFolderMember.prototype.getContextMenuItems = function() {
        var e = Invitee.prototype.getContextMenuItems.apply(this, arguments);
        return this._pending || e.unshift(new LPTools.ContextMenuItem(Constants.ACTION_EDIT, {
            text: Strings.Vault.EDIT_ACCESS
        })), e
    }, SharedFolderMember.prototype.getItemButtonActions = function() {
        var e = Invitee.prototype.getItemButtonActions.apply(this, arguments);
        return this._pending || this.isMissingSharedFolderUser() || e.unshift(Constants.ACTION_EDIT), e
    }, SharedFolderMember.prototype.handleClickEvent = function(e, t) {
        switch (e) {
            case Constants.ACTION_EDIT:
                this._pending || Topics.get(Topics.EDIT_SHARED_FOLDER_ACCESS).publish(this);
                break;
            default:
                Invitee.prototype.handleClickEvent.apply(this, arguments)
        }
    }, SharedFolderMember.prototype.remove = function() {
        var e;
        this._pending ? Invitee.prototype.remove.apply(this, arguments) : LPRequest.makeUpdateRequest(LPProxy.removeSharedFolderMember, {
            params: {
                uid: this.getID(!0),
                shareid: this._sharedGroup.getID(),
                msfuser: this.isMissingSharedFolderUser()
            },
            success: (e = this, function() {
                e._parent.removeChild(e), e.publishRemoveSuccess(1), Topics.get(Topics.REMOVED_SHARED_FOLDER_USER).publish(e)
            }),
            successMessage: this.getSuccessfulRemoveMessage(),
            confirm: {
                title: Strings.Vault.REMOVE,
                text: Strings.translateString("Are you sure you want to remove %1? They will no longer be able to access items in this folder.", this.toString())
            }
        })
    }, SharedFolderUser = function(e, t) {
        SharedFolderMember.call(this, e, t), this._data.type = SharedFolderUser.prototype.MEMBER_TYPE
    }, SharedFolderUser.prototype = Object.create(SharedFolderMember.prototype), SharedFolderUser.prototype.constructor = SharedFolderUser, SharedFolderUser.prototype.MEMBER_TYPE = "companyuser", SharedFolderUser.prototype.toString = function() {
        return Strings.Vault.USER + ": " + this.getName()
    }, SharedFolderUserGroup = function(e, t) {
        SharedFolderMember.call(this, e, t), this._data.type = SharedFolderUserGroup.prototype.MEMBER_TYPE
    }, SharedFolderUserGroup.prototype = Object.create(SharedFolderMember.prototype), SharedFolderUserGroup.prototype.constructor = SharedFolderUserGroup, SharedFolderUserGroup.prototype.MEMBER_TYPE = "group", SharedFolderUserGroup.prototype.newDisplayObject = function() {
        var e = new SharedFolderUserGroup(this._data, this._sharedGroup);
        return e._pending = this._pending, e
    }, SharedFolderUserGroup.prototype.toString = function() {
        return Strings.Vault.USER_GROUP + ": " + this.getName()
    }, SharedFolderUserGroup.prototype.getID = function(e) {
        var t = SharedFolderMember.prototype.getID.apply(this, arguments);
        return e ? "group:" + t : t
    }, SharedFolderUserGroup.prototype.getUsername = function() {
        return this._data.name
    },
    function() {
        var a = function(e, t) {
                return VaultItemBase.prototype.sortByTextFunction(e, t, "getEmail", !0)
            },
            s = function(e, t) {
                return VaultItemBase.prototype.sortByTextFunction(e, t, "getEmail", !1)
            };
        SharingContainer.prototype.displayItemsInSpecifiedGroup = function() {
            return !1
        }, SharingContainer.prototype.buildItems = function(e, t, n) {
            delete n.sortFunction, Container.prototype.buildItems.apply(this, arguments)
        }, SharingContainer.prototype.sortByEmail = function(e) {
            var t = e ? a : s;
            if (t !== this.sortFunction) {
                this._buildOptions.sortFunction = t;
                for (var n = this.getChildren(), r = 0, o = n.length; r < o; ++r) {
                    var i;
                    n[r].sortChildren(t)
                }
            }
        }, SharingContainer.prototype.sortByName = function(e) {
            var t = e ? this.sortByNameAsc : this.sortByNameDesc;
            if (t !== this._buildOptions.sortFunction) {
                this._buildOptions.sortFunction = t;
                for (var n = this.getChildren(), r = 0, o = n.length; r < o; ++r) {
                    var i;
                    n[r].sortChildren(t)
                }
            }
        }, SharingContainer.prototype.sortByFolder = function(e) {}, SharingContainer.prototype.sortItemsByMostRecent = function() {
            if (this._buildOptions.sortFunction !== this.sortByMostRecent) {
                this._buildOptions.sortFunction = this.sortByMostRecent;
                for (var e = this.getChildren(), t = 0, n = e.length; t < n; ++t) {
                    var r;
                    e[t].sortChildren(this.sortByMostRecent)
                }
            }
        }, SharingContainer.prototype.removeChild = function() {}
    }(),
    function() {
        var n = function() {
            return this.buildItemInfoTextElement([LPTools.createElement("p", "small infoLabel", this.getEmailLabel()), this.createTextElement("p", this.getEmail, "small")])
        };
        SharedItem.prototype.getItemClass = function() {
            return VaultItemBaseDisplay.prototype.DISPLAY_LIST
        }, SharedItem.prototype.isDraggable = function() {
            return !1
        }, SharedItem.prototype.buildItemInfoTextElements = function(e) {
            var t = [];
            return LPTools.getOption(e, "minimized", !1) || (t = this._itemModelDisplay.buildItemInfoTextElements()).splice(1, 1), t.push(n.call(this)), t
        }, SharedItem.prototype.getEmail = function() {
            return this._data.email
        }, SharedItem.prototype.getLastTouchValue = function() {
            return this._data.sharedate
        }, SharedItem.prototype.buildItemIconElement = function(e) {
            return LPTools.getOption(e, "minimized", !1) ? null : this._itemModelDisplay.buildItemIconElement()
        }, PendingReceivedSharedItemDisplay.prototype.getEmailLabel = function() {
            return Strings.Vault.SHARED_BY
        }, PendingReceivedSharedItemDisplay.prototype.getLaunchElementAction = function() {
            return Constants.ACTION_ACCEPT
        }, PendingReceivedSharedItemDisplay.prototype.buildItemIconElement = function() {
            var e = VaultItemBaseDisplay.prototype.buildItemIconElement.apply(this, arguments);
            return this.bigImg || e.setAttribute("class", e.getAttribute("class") + " smallIcon"), e
        }, PendingReceivedSharedItemDisplay.prototype.getIconElement = AccountDisplay.prototype.getIconElement, PendingReceivedSharedItemDisplay.prototype.buildItemInfoTextElements = function() {
            var e = VaultItemBaseDisplay.prototype.buildItemInfoTextElements.apply(this, arguments);
            return e.push(n.call(this)), e
        }, PendingReceivedSharedItemDisplay.prototype.getContextMenuItems = function(e) {
            var t = VaultItemBaseDisplay.prototype.getContextMenuItems.apply(this, arguments);
            return e || (t.push(new LPTools.ContextMenuItem(Constants.ACTION_ACCEPT)), t.push(new LPTools.ContextMenuItem(Constants.ACTION_REJECT))), t
        }, PendingReceivedSharedItemDisplay.prototype.getEmail = function() {
            return this._model._sender
        }, PendingReceivedSharedItemDisplay.prototype.getItemButtonActions = function() {
            return [Constants.ACTION_ACCEPT, Constants.ACTION_REJECT]
        }, PendingReceivedSharedItemDisplay.prototype.getUsernameValue = function() {
            return this._model.getUsername()
        }, PendingReceivedSharedItemDisplay.prototype.createSecondaryNameTextElement = function() {
            if (this.getUsernameValue()) return this.createTextElement("p", this.getUsernameValue, "small infoLabel")
        }
    }(),
    function() {
        var e;
        PendingReceivedSharedItem.prototype.getID = function() {
            return this._data.id
        }, PendingReceivedSharedItem.prototype.getName = function() {
            return this._name || ""
        }, PendingReceivedSharedItem.prototype.getUsername = function() {
            return this._username || ""
        }, PendingReceivedSharedItem.prototype.getLastTouch = function() {
            return this._data.sharedate
        }, PendingReceivedSharedItem.prototype.getSearchTokens = function() {
            return [this.getName(), this.getUsername(), this._sender]
        }, PendingReceivedSharedItem.prototype.toString = function() {
            return Strings.Vault.PENDING_SHARE + ": " + this.getName()
        }, PendingReceivedSharedItem.prototype.handleClickEvent = function(e) {
            switch (e) {
                case Constants.ACTION_REJECT:
                    this.reject();
                    break;
                case Constants.ACTION_ACCEPT:
                    Topics.get(Topics.ACCEPT_SHARE).publish(this);
                    break;
                default:
                    VaultItemBase.prototype.handleClickEvent.apply(this, arguments)
            }
        }, PendingReceivedSharedItem.prototype.getFormData = function(e) {
            this.decrypt();
            var t = {};
            return t.name = this.getName(), t.group = Strings.translateString("(Accepted Share Offers)"), t.message = this._data.sharemessage, t
        }, PendingReceivedSharedItem.prototype.accept = function(e, t) {
            LPProxy.logEvent("v_apt"), LPRequest.makeRequest(LPProxy.acceptShare, {
                params: $.extend(e, {
                    pendingShare: this._data,
                    key: t.getKey(),
                    pendingShareKey: this.getKey()
                })
            })
        }, PendingReceivedSharedItem.prototype.reject = (e = function() {
            Topics.get(Topics.UPDATE_NOTIFICATION_COUNT).publish(), this.deleteUpdates(!1)
        }, function() {
            LPProxy.logEvent("v_rjt"), LPRequest.makeLockItemUpdateRequest(LPProxy.rejectShare, {
                params: {
                    id: this.getID()
                },
                items: this,
                success: this.createHandler(e),
                confirm: {
                    title: Strings.Vault.REJECT,
                    text: Strings.translateString("Are you sure you want to reject %1?", this.toString())
                }
            })
        })
    }(), SharedFolderItem.prototype.buildItemInfoTextElements = function() {
        var e = VaultItemBaseDisplay.prototype.buildItemInfoTextElements.apply(this, arguments);
        return this._model.isPending() && this.getSharer() && e.push(this.buildItemInfoTextElement([LPTools.createElement("p", "small infoLabel", Strings.translateString("Invited by")), this.createTextElement("p", this.getSharer, "small")])), e
    }, SharedFolderItem.prototype.getSharer = function() {
        return this._model._shareInfo.sharer || ""
    }, SharedFolderItem.prototype.createSecondaryNameTextElement = function() {
        var e = [];
        if ("1" === this._model._shareInfo.invisible) {
            var t = LPTools.createElement("span", "small infoLabel", Strings.translateString("Shared by Policy"));
            t.insertBefore(LPTools.createElement("i", "badge success small"), t.firstChild), e.push(t)
        }
        if (this._model.isDeleted()) {
            var n = LPTools.createElement("span", "small infoLabel", Strings.translateString("Deleted"));
            n.insertBefore(LPTools.createElement("i", "badge danger small"), n.firstChild), e.push(n)
        } else if (!this._model.isDownloaded()) {
            var r = LPTools.createElement("span", "small infoLabel", Strings.Vault.NOT_DOWNLOADED);
            r.insertBefore(LPTools.createElement("i", "badge warn small"), r.firstChild), e.push(r)
        }
        if (this._model.canConvertToEnterprise()) {
            var o = LPTools.createElement("span", "small infoLabel", Strings.translateString("Personal Folder"));
            o.insertBefore(LPTools.createElement("i", "badge warn small"), o.firstChild), e.push(o)
        }
        return e
    }, SharedFolderItem.prototype.updateView = function() {
        var e = this.getContainer();
        this.rebuild(), e && e.addChild(this)
    }, SharedFolderItem.prototype.getLaunchElementAction = function() {
        return this._model.isPending() ? Constants.ACTION_ACCEPT : this._model.canAdminister() ? Constants.ACTION_MANAGE : null
    }, SharedFolderItem.prototype.getIconElement = function() {
        return LPTools.createElement("img", {
            src: "images/vault_4.0/Shared_Folder.png",
            class: "bigIcon"
        })
    }, SharedFolderItem.prototype.getItemButtonActions = function() {
        return this._model.isPending() ? [Constants.ACTION_ACCEPT, Constants.ACTION_REJECT] : this._model.canAdminister() ? [Constants.ACTION_MANAGE, Constants.ACTION_DELETE] : []
    }, SharedFolderItem.prototype.getDeletedItemButtonActions = function() {
        return [Constants.ACTION_RESTORE_SHARED_FOLDER, Constants.ACTION_PURGE_SHARED_FOLDER]
    }, SharedFolderItem.prototype.getContextMenuItems = function(e) {
        var t = VaultItemBaseDisplay.prototype.getContextMenuItems.apply(this, arguments);
        return this._model.isPending() ? [new LPTools.ContextMenuItem(Constants.ACTION_ACCEPT), new LPTools.ContextMenuItem(Constants.ACTION_REJECT)] : (this._model.isDownloaded() ? t.push(new LPTools.ContextMenuItem(Constants.ACTION_STOP_DOWNLOADING)) : t.push(new LPTools.ContextMenuItem(Constants.ACTION_START_DOWNLOADING)), this._model.canAdminister() && (e || (t.push(new LPTools.ContextMenuItem(Constants.ACTION_MANAGE)), t.push(new LPTools.ContextMenuItem(Constants.ACTION_RENAME)), this._model.canConvertToLegacy() && t.push(new LPTools.ContextMenuItem(Constants.ACTION_CONVERT))), t.push(new LPTools.ContextMenuItem(Constants.ACTION_DELETE))), t)
    }, SharedFolderItem.prototype.getDeletedContextMenuItems = function(e) {
        return [new LPTools.ContextMenuItem(Constants.ACTION_RESTORE_SHARED_FOLDER), new LPTools.ContextMenuItem(Constants.ACTION_PURGE_SHARED_FOLDER)]
    }, SharedSiteGroup.prototype.build = function() {
        var e = GroupDisplay.prototype.build.apply(this, arguments);
        return LPTools.addClass(e.children[0].children[0], this._css), e
    }, SharedSiteGroup.prototype.handleContextMenu = function(e) {}, ShareRecipient = function(e) {
        Invitee.call(this, e)
    }, ShareRecipient.prototype = Object.create(Invitee.prototype), ShareRecipient.prototype.constructor = ShareRecipient, ShareRecipient.prototype.getLabel = function() {
        var e = this._data.name;
        return void 0 === e || "" === e ? e = this._data.email : "" !== this._data.email && (e += " (" + this._data.email + ")"), e
    }, ShareRecipient.prototype.getID = function() {
        return this._data.email
    };
//# sourceMappingURL=sourcemaps/sharingModel.js.map