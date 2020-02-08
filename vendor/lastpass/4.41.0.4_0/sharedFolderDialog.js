var SharedFolderDialog = function(e) {
    var r = {
        additionalHeaderClasses: ["icon"],
        closeButtonEnabled: !0,
        maximizeButtonEnabled: !0,
        buttonAlign: this.RIGHT_ALIGN
    };
    Dialog.call(this, e, r), this.existingUsers = null, this.folder = null
};
SharedFolderDialog.prototype = Object.create(Dialog.prototype), SharedFolderDialog.prototype.constructor = SharedFolderDialog,
    function(t) {
        SharedFolderDialog.prototype.initialize = function(e) {
            var a, r, t;
            Dialog.prototype.initialize.apply(this, arguments), a = this, r = document.getElementById("sharedFolderDialogUserTypeahead"), LPProxy.isEnterpriseUser() ? ((t = new BloodhoundDropdown(r, {
                identify: function(e) {
                    return "group" === e.type ? e.cgid : e.uid
                },
                remote: {
                    url: LPProxy.getBaseURL() + "typeahead_remote.php?grp=1&q=%QUERY",
                    wildcard: "%QUERY"
                }
            }, {
                optionLabel: function(e) {
                    var r = e.name;
                    return "companyuser" === e.type ? "" === r ? r = e.email : "" !== e.email && (r += " (" + e.email + ")") : r += " (" + Strings.Vault.USER_GROUP + ")", r
                },
                ignore: function(e, r) {
                    return a.existingUsers[e] || void 0 === r.type && !LPFeatures.allowShareOutsideEnterprise()
                }
            })).onChange(function(e, r) {
                e = $.extend({}, e);
                var t = SharedFolderUser;
                "group" === e.type && (e.uid = e.cgid, delete e.cgid, t = SharedFolderUserGroup), e.username = e.email, delete e.email;
                var i = new t(e, a.folder);
                i._pending = !0, a.addNewUser(i), a.existingUsers[r] = !0
            }), a.inputFields.friends = t) : a.inputFields.friends = t = new TypeaheadDropdown(r), LPProxy.isFamilyUser() ? $("#sharedFolderDialogDisclaimer").show() : $("#sharedFolderDialogDisclaimer").hide(), t.autocomplete = function(e) {
                var r = e.target.value;
                if (null === this.hint && r) {
                    for (var t = a.parseFriendsInput(r), i = 0, s = t.length; i < s; ++i) a.addNewUser(t[i]);
                    e.preventDefault()
                }
                TypeaheadDropdown.prototype.autocomplete.apply(this, arguments)
            }, Topics.get(Topics.REMOVED_SHARED_FOLDER_USER).subscribe(function(e) {
                delete a.existingUsers[e.getID()], a.showHideInviteInput()
            }), $("#sharedFolderDialogInviteButton").bind("click", function() {
                a.submit()
            })
        }, SharedFolderDialog.prototype.parseFriendsInput = function(e) {
            for (var r = [], t = e.split(","), i = 0, s = t.length; i < s; ++i) {
                var a = t[i].trim(),
                    n;
                if (-1 < a.indexOf("@")) {
                    var o = a.match(Constants.EmailAddressRegularExpression);
                    if (o && 1 === o.length) {
                        var d = o[0];
                        n = new SharedFolderUser({
                            username: d
                        }, this.folder)
                    }
                } else a && (n = new SharedFolderUserGroup({
                    name: a
                }, this.folder));
                n && (n._pending = !0, n.setEditable(!0), r.push(n))
            }
            return r
        }, SharedFolderDialog.prototype.validate = function(e) {
            var r = Dialog.prototype.validate.apply(this, arguments);
            return e.friends && 0 === this.parseFriendsInput(e.friends).length && (this.addError("friends", Strings.translateString("You must enter a valid email or group name.")), r = !1), r
        }, SharedFolderDialog.prototype.defaultFields = function(e) {
            e.defaultData = $.extend({
                readonly: !0,
                hidePasswords: !0
            }, e.defaultData), Dialog.prototype.defaultFields.call(this, e)
        }, SharedFolderDialog.prototype.addNewUser = function(e) {
            this.containers.newMembers || (this.containers.newMembers = new Container([], {
                additionalItemClasses: "dialogItem"
            }), this.containers.newMembers.initialize(document.getElementById("sharedFolderDialogNewUsersContainer"))), this.containers.newMembers.addChild(e), this.inputFields.friends.clear(), this.inputFields.friends.focus()
        }, SharedFolderDialog.prototype.setup = function(e, r) {
            Dialog.prototype.setup.apply(this, arguments), this.containers.existingMembers && (this.containers.existingMembers.initialize(t.getElementById("folderMembers")), this.showHideInviteInput())
        }, SharedFolderDialog.prototype.showHideInviteInput = function() {
            LPProxy.isEnterpriseUser() || (5 < this.containers.existingMembers.getItemChildren().length ? ($("#sharedFolderMaxMembers").show(), $("#sharedFolderDialogInvites").hide()) : ($("#sharedFolderMaxMembers").hide(), $("#sharedFolderDialogInvites").show()))
        }, SharedFolderDialog.prototype.open = function(s) {
            var a;
            this.folder = s, a = this, LPRequest.makeDataRequest(LPProxy.getSharedFolderMembers, {
                params: {
                    shareid: s.getID()
                },
                success: function(e) {
                    for (var r = [], t = 0, i = e.users.length; t < i; ++t) r.push(new SharedFolderUser(e.users[t], s));
                    for (var t = 0, i = e.groups.length; t < i; ++t) r.push(new SharedFolderUserGroup(e.groups[t], s));
                    a.containers.existingMembers = new Container(r), a.existingUsers = {};
                    for (var t = 0, i = r.length; t < i; ++t) a.existingUsers[r[t].getID()] = !0;
                    Dialog.prototype.open.call(a, {
                        title: Strings.translateString("Manage Shared Folder") + ": " + a.folder.getShareGroupName()
                    })
                },
                error: function() {
                    Topics.get(Topics.DIALOG_LOADED).publish()
                }
            })
        }, SharedFolderDialog.prototype.getInvitedMembers = function() {
            var e = this.containers.newMembers ? this.containers.newMembers.getItems() : [];
            return e = e.concat(this.parseFriendsInput(this.inputFields.friends.getValue()))
        }, SharedFolderDialog.prototype.getData = function() {
            var e = Dialog.prototype.getData.apply(this, arguments);
            e.newMembers = {}, e.updatedPermissions = [];
            var r = this.getInvitedMembers();
            if (0 < r.length)
                for (var t = 0, i = r.length; t < i; ++t) {
                    var s = r[t];
                    e.newMembers[s.getUsername()] = {
                        uid: s.getID(),
                        type: s.getType()
                    }
                } else
                    for (var a = this.containers.existingMembers.getItemChildren(), t = 0, i = a.length; t < i; ++t) {
                        var n = a[t];
                        n.isModified() && e.updatedPermissions.push({
                            uid: n.getID(!0),
                            give: n.getCheckboxValue("give"),
                            readonly: n.getCheckboxValue("readonly"),
                            canadminister: LPProxy.isEnterpriseUser() ? n.getCheckboxValue("can_administer") : "0"
                        })
                    }
            return e
        }, SharedFolderDialog.prototype.handleSubmit = function(n) {
            var e = $.extend(n, {
                sharedFolder: this.folder._data,
                shareInfo: this.folder._shareInfo
            });
            LPTools.hasProperties(n.newMembers) ? LPRequest.makeRequest(LPProxy.addSharedFolderMembers, {
                params: e,
                requestSuccessOptions: {
                    closeDialog: !1
                },
                success: this.createDynamicHandler(function(e) {
                    for (var r = [], t = this.getInvitedMembers(), i = 0, s = t.length; i < s; ++i) {
                        var a = t[i];
                        e[a.getUsername()] && (a._pending = !1, a._data.readonly = n.readonly ? "1" : "0", a._data.give = n.hidePasswords ? "0" : "1", a._data.can_administer = n.can_administer ? "1" : "0", a.rebuild(), r.push(a)), a._parent && a._parent.removeChild(a)
                    }
                    this.containers.existingMembers.addChild(r), this.showHideInviteInput(), this.inputFields.friends.clear()
                })
            }) : 0 < n.updatedPermissions.length ? LPRequest.makeRequest(LPProxy.updateSharedFolderMemberPermissions, {
                params: e,
                success: this.createHandler(function() {
                    for (var e = this.containers.existingMembers.getItemChildren(), r = {}, t = 0, i = e.length; t < i; ++t) {
                        var s = e[t];
                        r[s.getID(!0)] = s
                    }
                    for (var t = 0, i = n.updatedPermissions.length; t < i; ++t) {
                        var a = n.updatedPermissions[t];
                        r[a.uid].updatePermissions(a)
                    }
                })
            }) : this.close(!0)
        }
    }(document);
//# sourceMappingURL=sourcemaps/sharedFolderDialog.js.map