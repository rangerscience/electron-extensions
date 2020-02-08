var FamiliesSharedFolderDialog = function(e) {
        Dialog.call(this, e, {
            additionalHeaderClasses: ["icon"],
            closeButtonEnabled: !0,
            maximizeButtonEnabled: !1,
            buttonAlign: this.RIGHT_ALIGN,
            nextButtonText: Strings.translateString("Add"),
            backButtonText: Strings.translateString("Manage Family"),
            backButtonOverrideFunc: FamiliesSharedFolderDialog.prototype.openFamilyAdminConsole,
            title: Strings.translateString("Add shared folder"),
            dynamicHeight: !1,
            overlayDialog: !0
        })
    },
    fullAccess = "fullAccess",
    readOnlyAccess = "readOnlyAccess",
    noAccess = "noAccess",
    selectedAttributeValue = "selected";
FamiliesSharedFolderDialog.prototype = Object.create(Dialog.prototype), (FamiliesSharedFolderDialog.prototype.constructor = FamiliesSharedFolderDialog).prototype.buildFamiliesSharedFolderList = function(e, r) {
    var a = $("#familyBody");
    a.empty();
    var t = bg.get("g_username") || "";
    e = e.sort(function(e, r) {
        return e.name < r.name ? -1 : e.name > r.name ? 1 : 0
    });
    for (var o = 0; o < e.length; o++) {
        var s = document.createElement("tr"),
            i = document.createElement("td");
        i.textContent = e[o].name, e[o].email === t && (i.textContent += " " + Strings.translateString("(you)")), s.appendChild(i);
        var l = document.createElement("td"),
            d = document.createElement("select");
        d.className = "dialogInput selectDropdown", d.id = e[o].uid;
        var n = document.createElement("option");
        n.value = fullAccess, n.text = Strings.translateString("Administrator");
        var m = document.createElement("option");
        m.value = readOnlyAccess, m.text = Strings.translateString("Read only access");
        var p = document.createElement("option");
        p.value = noAccess, p.text = Strings.translateString("No access"), r && e[o].email === t ? (n.setAttribute(selectedAttributeValue, selectedAttributeValue), d.disabled = !0) : e[o].permission == fullAccess ? n.setAttribute(selectedAttributeValue, selectedAttributeValue) : e[o].permission == readOnlyAccess ? m.setAttribute(selectedAttributeValue, selectedAttributeValue) : p.setAttribute(selectedAttributeValue, selectedAttributeValue), d.appendChild(n), d.appendChild(m), d.appendChild(p), l.appendChild(d), s.appendChild(l), a.append(s)
    }
}, FamiliesSharedFolderDialog.prototype.open = function(s) {
    function r(o) {
        LPRequest.makeDataRequest(LPProxy.getSharedFolderMembers, {
            params: {
                shareid: s.shareId
            },
            success: function(e) {
                for (var r = e.users, a = 0; a < o.length; a++) {
                    o[a].permission = noAccess, o[a].isNew = !0;
                    for (var t = 0; t < r.length; t++) o[a].uid === r[t].uid && (0 == r[t].readonly ? o[a].permission = fullAccess : o[a].permission = readOnlyAccess, o[a].isNew = !1)
                }
                s.familyMembers = o, Dialog.prototype.open.call(i, s)
            }
        })
    }
    var i;
    (s = s || {}).isNewFolder = void 0 === s.folder, s.folderName = s.isNewFolder ? "" : s.folder._shareInfo.name, s.shareId = s.isNewFolder ? "" : s.folder._data.sharefolderid, $("#groupName").val(s.folderName || ""), this.setTitle(s.isNewFolder ? Strings.translateString("Add shared folder") : Strings.translateString("Edit shared folder")), this.setNextButtonText(s.isNewFolder ? Strings.translateString("Add") : Strings.translateString("Save")), i = this, LPRequest.makeDataRequest(LPProxy.getFamilyMembers, {
        params: {},
        success: function(e) {
            s.isNewFolder ? (s.familyMembers = e, Dialog.prototype.open.call(i, s)) : r(e)
        }
    })
}, FamiliesSharedFolderDialog.prototype.setup = function(e, r) {
    Dialog.prototype.setup.apply(this, arguments), r.familyMembers = r.familyMembers || [], FamiliesSharedFolderDialog.prototype.buildFamiliesSharedFolderList(r.familyMembers, r.isNewFolder)
}, FamiliesSharedFolderDialog.prototype.postSetup = function(e) {
    Dialog.prototype.postSetup.apply(this, arguments), LPProxy.isAdmin() || this.backButton.hide(), $("#groupName").val(e.folderName), $("#loadedGroupName").val(e.folderName)
}, FamiliesSharedFolderDialog.prototype.validate = function(e) {
    var r = Dialog.prototype.validate.apply(this, arguments);
    if ("" === e.groupName) this.addError("groupName", "Folder Name is required."), r = !1;
    else if (-1 < e.groupName.indexOf(SharedGroup.prototype.SHARED_FOLDER_NAME_PREFIX)) this.addError("groupName", Strings.translateString("Sorry - group names starting with 'Shared-' are created by LastPass to indicate groups shared with other people. Please use a different name.")), r = !1;
    else {
        for (var a = LPProxy.getGroups(), t = 0, o = a.length; t < o; ++t)
            if (a[t].getName() === SharedGroup.prototype.SHARED_FOLDER_NAME_PREFIX + e.groupName && a[t].getName() != SharedGroup.prototype.SHARED_FOLDER_NAME_PREFIX + e.loadedGroupName) {
                this.addError("groupName", Strings.translateString("That folder already exists.")), r = !1;
                break
            } - 1 < e.groupName.indexOf("\\") && (this.addError("groupName", Strings.translateString("Folder name cannot contain backslashes.")), r = !1)
    }
    return r
}, FamiliesSharedFolderDialog.prototype.handleSubmit = function(e, a) {
    for (var t = {}, r = [], o = 0; o < a.familyMembers.length; o++) {
        var s = a.familyMembers[o].uid,
            i = $("#" + s).find(":selected").val();
        i != noAccess ? t[a.familyMembers[o].email] = {
            uid: s,
            type: a.familyMembers[o].type,
            readOnly: i === readOnlyAccess ? 1 : 0,
            canAdminister: i === fullAccess ? 1 : 0,
            hidePasswords: 0,
            isNew: a.familyMembers[o].isNew,
            hasPermissionChanged: a.familyMembers[o].permission != i
        } : a.familyMembers[o].permission != noAccess && i === noAccess && r.push({
            uid: a.familyMembers[o].uid,
            shareId: a.shareId
        })
    }
    if (a.isNewFolder) {
        var l = new SharedGroup({
            group: e.groupName
        });
        l.add(a.group, a.children, function(e) {
            var r = $.extend(e, {
                sharedFolder: e.sharedFolder,
                shareInfo: l.shareInfo,
                newMembers: t,
                notify: $("#notifyFamilyMembers").is(":checked") ? 1 : 0
            });
            FamiliesSharedFolderDialog.prototype.addSharedFolderUsers(r, a)
        })
    } else {
        var d = {},
            n = [];
        if (Object.keys(t).forEach(function(e) {
                var r = t[e];
                r.isNew ? d[e] = r : !r.isNew && r.hasPermissionChanged && n.push({
                    uid: r.uid,
                    readonly: r.readOnly,
                    canadminister: r.canAdminister,
                    give: r.hidePasswords ? 0 : 1
                })
            }), 0 < Object.keys(d).length) {
            var m = $.extend(a, {
                sharedFolder: a.folder._data,
                shareInfo: a.folder._shareInfo,
                newMembers: d,
                notify: $("#notifyFamilyMembers").is(":checked") ? 1 : 0
            });
            FamiliesSharedFolderDialog.prototype.addSharedFolderUsers(m, a)
        }
        if (0 < n.length) {
            var m = {
                shareInfo: {
                    id: a.shareId
                },
                updatedPermissions: n
            };
            FamiliesSharedFolderDialog.prototype.updateSharedFolderUsers(m)
        }
        if (0 < r.length) {
            var m = {
                removedMembers: r
            };
            FamiliesSharedFolderDialog.prototype.removeSharedFolderUsers(m)
        }
        if (a.folderName != e.groupName) {
            a.folder._data.group = SharedGroup.prototype.SHARED_FOLDER_NAME_PREFIX + e.groupName;
            var m = {
                sharedFolder: a.folder._data,
                shareInfo: a.folder._shareInfo
            };
            FamiliesSharedFolderDialog.prototype.renameSharedFolder(m)
        }
        0 == Object.keys(d).length && 0 == n.length && 0 == r.length && a.folderName === e.groupName && this.close(!0)
    }
}, FamiliesSharedFolderDialog.prototype.addSharedFolderUsers = function(e, r) {
    r = r || {}, e = e || {}, LPRequest.makeRequest(LPProxy.addSharedFolderMembers, {
        params: e,
        requestSuccessOptions: {
            closeDialog: !0
        }
    })
}, FamiliesSharedFolderDialog.prototype.updateSharedFolderUsers = function(e) {
    e = e || {}, LPRequest.makeRequest(LPProxy.updateSharedFolderMemberPermissions, {
        params: e,
        requestSuccessOptions: {
            closeDialog: !0
        }
    })
}, FamiliesSharedFolderDialog.prototype.removeSharedFolderUsers = function(e) {
    (e = e || {}).removedMembers.forEach(function(e) {
        LPRequest.makeUpdateRequest(LPProxy.removeSharedFolderMember, {
            params: {
                uid: e.uid,
                shareid: e.shareId
            },
            requestSuccessOptions: {
                closeDialog: !0
            },
            success: function(e) {
                Topics.get(Topics.REMOVED_SHARED_FOLDER_USER).publish(e)
            }
        })
    })
}, FamiliesSharedFolderDialog.prototype.renameSharedFolder = function(e) {
    e = e || {}, LPRequest.makeUpdateRequest(LPProxy.renameSharedGroup, {
        params: e,
        requestSuccessOptions: {
            closeDialog: !0
        },
        success: function(e) {
            $("#loadedGroupName").val(e.shareInfo.name), Topics.get(Topics.REFRESH_DATA).publish()
        },
        error: function() {
            Topics.get(Topics.REFRESH_DATA).publish()
        }
    })
}, FamiliesSharedFolderDialog.prototype.openFamilyAdminConsole = function() {
    bg.lpevent("v_ofc"), bg.openFamilyConsole()
};
//# sourceMappingURL=sourcemaps/familiesSharedFolderDialog.js.map