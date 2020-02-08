LPServer.sharing = LPServer.sharing || {}, LPServer.sharing.folder = function() {
    var p = "share.php",
        s = "companyuser",
        o = "Shared-",
        l = 5e3,
        n = function(e, r) {
            r.success(e, {
                sharedFolder: r.params.sharedFolder,
                shareInfo: r.params.shareInfo
            })
        },
        c = function(e, r, a) {
            if (0 < r.length) {
                e.adminuidcnt = r.length;
                for (var s = 0, n = r.length; s < n; ++s) {
                    var t = r[s],
                        d = new LPServer.ext.RSAKey;
                    LPServer.ext.parsePublicKey(d, t.key), e["adminsharekey" + s] = d.encrypt(LPServer.ext.bin2hex(a)), e["adminuid" + s] = t.uid
                }
            }
        },
        t = (d = function(e) {
            var r = [];
            if (e.groupname)
                for (var a = e.groupname.split(","), s = 0, n = a.length; s < n; ++s) r.push(a[s]);
            return r
        }, r = {
            nouser: function(e, r) {
                r.error && r.error(""), LPServer.callback(r, "invite", {
                    emails: e.unknownusers.split(",")
                })
            },
            default: e = function(e, r) {
                if (e.success) {
                    for (var a = {}, s = 0; void 0 !== e["pubkey" + s];) a[e["username" + s]] = {
                        uid: e["uid" + s],
                        cgid: e["cgid" + s],
                        pubkey: e["pubkey" + s]
                    }, ++s;
                    var n = d(e);
                    0 < n.length && LPServer.callback(r, "emptyGroups", n), r.success(a)
                } else r.error()
            },
            emptygroup: e,
            noshareerr: function(e, r) {
                r.error(LPServer.ext.translate("Sorry, company policy prohibits use of this feature."))
            }
        }, function(e) {
            LPServer.jsonRequest({
                url: p,
                data: {
                    getpubkey: 1,
                    uid: "string" == typeof e.params.userInfo ? e.params.userInfo : JSON.stringify(e.params.userInfo),
                    jsonr: 1
                },
                callbacks: r,
                userSupplied: e
            })
        }),
        d, e, r, a, i = (m = function(e, r) {
            var a = new LPServer.ext.RSAKey;
            return LPServer.ext.parsePublicKey(a, r), a.encrypt(LPServer.ext.bin2hex(e))
        }, f = function(e, r) {
            for (var a in r) {
                var s = r[a];
                if ("group" === s.type && e.cgid === s.uid) return a
            }
            return null
        }, u = function(e, r) {
            var a = {
                    id: r.params.shareInfo.id,
                    update: 1,
                    add: 1,
                    sharename: r.params.shareInfo.sharename,
                    name: r.params.shareInfo.name,
                    readonly: r.params.readonly ? 1 : 0,
                    give: r.params.hidePasswords ? 0 : 1,
                    notify: r.params.notify ? 1 : 0,
                    canadminister: r.params.can_administer ? 1 : 0,
                    xmlr: 1
                },
                s = r.params.newMembers ? r.params.newMembers : {},
                n = 0,
                t = 0,
                d = [],
                i = {};
            for (var u in e) {
                var o = e[u];
                s[u] && void 0 !== s[u] || (s[u] = {}), o.readOnly = "object" == typeof s && s[u].readOnly ? 1 : a.readonly, o.canAdminister = "object" == typeof s && s[u].canAdminister ? 1 : a.canadminister, o.give = "object" != typeof s || s[u].hidePasswords || void 0 === s[u].hidePasswords ? a.give : 1, o.pubkey ? (a["sharekey" + n] = m(r.params.shareInfo.key, o.pubkey), a["uid" + n] = o.uid, a["cgid" + n] = o.cgid, a["readonly" + n] = o.readOnly, a["canadminister" + n] = o.canAdminister, a["give" + n] = o.give, ++n) : (a["msfuser" + t] = o.uid, a["msfcgid" + t] = o.cgid, a["msfreadonly" + t] = o.readOnly, a["msfcanadminister" + t] = o.canAdminister, a["msfgive" + t] = o.give, d.push(u), ++t), i[f(o, s) || u] = !0
            }
            var l = n + t;
            0 < l ? LPServer.xmlRequest({
                url: p,
                data: a,
                callbacks: {
                    useradded: function(e, r) {
                        l <= 6 && 0 < d.length && LPServer.callback(r, "noSharingKeyUsers", d), r.success(LPServer.ext.translate("%1 users/groups were invited.", Object.keys(i).length), i)
                    }
                },
                userSupplied: r
            }) : r.error()
        }, function(r) {
            t(LPServer.extend({}, r, {
                params: {
                    userInfo: r.params.newMembers
                },
                success: function(e) {
                    u(e, r)
                }
            }))
        }),
        m, f, u, h = (S = {
            ok: function(e, r) {
                var a = LPServer.getAttr(e, "id");
                r.params.sharedFolder.aid = a, r.params.shareInfo.id = a, r.params.shareInfo.shareid = a, r.params.shareInfo.uid = LPServer.getAttr(e, "uid"), n(LPServer.ext.translate("Shared Folder %1 created.", r.params.sharedFolder.group), r)
            },
            exceededlimit: function(e, r) {
                r.error(LPServer.ext.translate("Sorry, as a premium user, you are limited to one Shared Folder. Please consider using LastPass Enterprise if you would like more."))
            },
            premiumrequired: function(e, r) {
                r.error(LPServer.ext.translate("Sorry, LastPass Premium is required to create a Shared Family Folder"))
            },
            alreadyexists: function(e, r) {
                r.error(LPServer.ext.translate("That folder already exists."))
            }
        }, v = function(e, r) {
            var a = e[r.params.username].pubkey;
            if (a) {
                var s = r.params.sharedFolder,
                    n = r.params.shareInfo = r.params.shareInfo || {},
                    t = {
                        id: 0,
                        update: 1,
                        newusername: r.params.username + "-" + s.group,
                        name: 0 === s.group.indexOf(o) ? s.group.substring(o.length) : s.group,
                        xmlr: 1
                    },
                    d = LPServer.ext.makeRandomPassword(),
                    i = n.key = LPServer.ext.makeKey(t.newusername, d, l);
                t.newhash = LPServer.ext.makeHash(i, d, l);
                var u = new LPServer.ext.RSAKey;
                LPServer.ext.parsePublicKey(u, a), t.sharekey = n.sharekey = u.encrypt(LPServer.ext.bin2hex(i)), t.sharename = n.sharename = LPServer.ext.encryptCBC(s.group, i), c(t, r.params.superusers, i), LPServer.xmlRequest({
                    url: p,
                    data: t,
                    callbacks: S,
                    userSupplied: r
                })
            } else LPServer.callback(r, "sharingkeyrequired"), r.error && r.error("")
        }, P = function(e, r) {
            var a = {};
            a[r.params.username] = {
                uid: r.params.uid,
                type: s
            }, r.params.superusers = e, t(LPServer.extend({}, r, {
                params: {
                    userInfo: a
                },
                success: function(e) {
                    v(e, r)
                }
            }))
        }, function(e) {
            LPServer.jsonRequest({
                url: "getSuperUserInfo.php",
                success: P,
                userSupplied: e
            })
        }),
        S, v, P, g = (L = {
            ok: function(e, r) {
                n(LPServer.ext.translate("Shared Folder %1 was renamed.", r.params.shareInfo.name), r)
            }
        }, function(e) {
            e.params.shareInfo.name = e.params.sharedFolder.group.substring(o.length), e.params.shareInfo.sharename = LPServer.ext.encryptCBC(e.params.sharedFolder.group, e.params.shareInfo.key), LPServer.xmlRequest({
                url: p,
                data: {
                    update: 1,
                    rename: 1,
                    id: e.params.shareInfo.id,
                    name: e.params.shareInfo.name,
                    sharename: e.params.shareInfo.sharename,
                    xmlr: 1
                },
                callbacks: L,
                userSupplied: e
            })
        }),
        L, y = (x = function(e, r) {
            r.params.shareInfo.deleted = "1", n(LPServer.ext.translate("Shared Folder deleted."), r)
        }, function(e) {
            LPServer.xmlRequest({
                url: p,
                data: {
                    id: e.params.shareInfo.id,
                    delete: 1,
                    xmlr: 1
                },
                callbacks: {
                    deleted: x
                },
                userSupplied: e
            })
        }),
        x, b = (k = function(e, r) {
            r.success(LPServer.ext.translate("Member removed."))
        }, function(e) {
            var r = {
                id: e.params.shareid,
                xmlr: 1
            };
            e.params.msfuser ? (r.msfdelete = 1, r.msfuser = e.params.uid) : (r.update = 1, r.delete = 1, r.uid = e.params.uid), LPServer.xmlRequest({
                url: p,
                data: r,
                callbacks: {
                    ok: k
                },
                userSupplied: e
            })
        }),
        k, I, R, w = (F = function(e, r) {
            r.success(LPServer.ext.translate("Permissions saved."))
        }, function(e) {
            LPServer.xmlRequest({
                url: "editSharedFolderUsers.php",
                data: {
                    cmd: "edit",
                    xml: 1,
                    shareid: e.params.shareInfo.id,
                    request: JSON.stringify(e.params.updatedPermissions)
                },
                callbacks: {
                    ok: F
                },
                userSupplied: e
            })
        }),
        F, q = function(e, r, a) {
            var s = {
                id: r.params.shareInfo.id,
                xmlr: 1
            };
            s[e] = 1, LPServer.xmlRequest({
                url: p,
                data: s,
                callbacks: a,
                userSupplied: r
            })
        },
        j = (A = function(e, r) {
            r.params.shareInfo.download = "1", n(LPServer.ext.translate("Shared Folder will now be downloaded."), r)
        }, function(e) {
            q("startdownloading", e, {
                ok: A
            })
        }),
        A, M = (K = function(e, r) {
            r.params.shareInfo.download = "0", n(LPServer.ext.translate("Shared Folder will no longer be downloaded."), r)
        }, function(e) {
            q("stopdownloading", e, {
                ok: K
            })
        }),
        K, O = (E = {
            undeleted: function(e, r) {
                r.params.shareInfo.deleted = "0", n(LPServer.ext.translate("Shared Folder restored."), r)
            }
        }, function(e) {
            LPServer.xmlRequest({
                url: p,
                data: {
                    id: e.params.shareInfo.id,
                    undelete: 1,
                    xmlr: 1
                },
                callbacks: E,
                userSupplied: e
            })
        }),
        E, D = (_ = {
            purged: function(e, r) {
                r.success(LPServer.ext.translate("Shared Folder purged."))
            }
        }, function(e) {
            LPServer.xmlRequest({
                url: p,
                data: {
                    id: e.params.shareInfo.id,
                    purge: 1,
                    xmlr: 1
                },
                callbacks: _,
                userSupplied: e
            })
        }),
        _, C = (U = function(e, r) {
            r.success(e.folders)
        }, function(e) {
            LPServer.jsonRequest({
                url: "getSharedFolderInfo.php",
                success: U,
                userSupplied: e
            })
        }),
        U, N = (B = {
            success: function(e, r) {
                r.params.shareInfo.accepted = "1", n(LPServer.ext.translate("Shared Folder accepted."), r)
            }
        }, function(e) {
            LPServer.jsonRequest({
                url: p,
                data: {
                    folder: e.params.shareInfo.id,
                    acceptfolder: 1,
                    jsonr: 1
                },
                callbacks: B,
                userSupplied: e
            })
        }),
        B, H = (J = {
            success: function(e, r) {
                r.success(LPServer.ext.translate("Shared Folder rejected."))
            }
        }, function(e) {
            LPServer.jsonRequest({
                url: p,
                data: {
                    id: e.params.shareInfo.id,
                    rejectfolder: 1,
                    jsonr: 1
                },
                callbacks: J,
                userSupplied: e
            })
        }),
        J, T = (G = {
            success: function(e, r) {
                r.success(LPServer.ext.translate("Shared Folder member reinvited."))
            }
        }, function(e) {
            var r = {
                reinvite: 1,
                invitee: e.params.uid,
                folder: e.params.shareid,
                jsonr: 1
            };
            "1" === e.params.ent && (r.ent = "on"), LPServer.jsonRequest({
                url: p,
                data: r,
                callbacks: G,
                userSupplied: e
            })
        }),
        G, X = (Y = {
            success: function(e, r) {
                r.params.shareInfo.cid = LPServer.getAttr(e, "cid"), r.params.shareInfo.outside_enterprise = LPServer.getAttr(e, "outside_enterprise"), n(LPServer.ext.translate("Personal Shared Folder moved into Enterprise. You can now adminster the folder."), r)
            }
        }, z = function(e, r) {
            var a = {
                id: r.params.shareInfo.id,
                moveintoenterprise: 1,
                xmlr: 1
            };
            c(a, e, r.params.shareInfo.key), LPServer.xmlRequest({
                url: p,
                data: a,
                callbacks: Y,
                userSupplied: r
            })
        }, function(e) {
            LPServer.jsonRequest({
                url: "getSuperUserInfo.php",
                success: z,
                userSupplied: e
            })
        }),
        Y, z;
    return {
        SHARED_FOLDER_NAME_PREFIX: o,
        getFolders: C,
        getPublicKeys: t,
        create: h,
        rename: g,
        remove: y,
        accept: N,
        reject: H,
        addMembers: i,
        getMembers: function(e) {
            LPServer.jsonRequest({
                url: "getSharedFolderMembers.php",
                data: {
                    shareid: e.params.shareid
                },
                userSupplied: e
            })
        },
        removeMember: b,
        reinviteMember: T,
        updateMemberPermissions: w,
        getRestrictions: function(e) {
            LPServer.jsonRequest({
                url: "getSharedFolderRestrictions.php",
                data: e.params,
                userSupplied: e
            })
        },
        updateRestrictions: function(e) {
            LPServer.textRequest({
                url: p,
                data: {
                    id: e.params.shareid,
                    edit: 1,
                    limit: 1,
                    aids: e.params.aids,
                    numaids: 0 < e.params.aids.length ? e.params.aids.split(",").length : 0,
                    additionaluids: e.params.additionaluids,
                    hidebydefault: e.params.hidebydefault ? 1 : 0,
                    uid: e.params.uid,
                    xmlr: 1
                },
                success: function() {
                    e.success(LPServer.ext.translate("Access restrictions updated."))
                },
                userSupplied: e
            })
        },
        startDownloading: j,
        stopDownloading: M,
        restoreDeleted: O,
        purgeDeleted: D,
        convertToEnterprise: X
    }
}();
//# sourceMappingURL=sourcemaps/serverSharedFolders.js.map