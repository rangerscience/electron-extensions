LPServer.sharing = LPServer.sharing || {}, LPServer.sharing.individual = function() {
    var e = function() {
            var s = {
                    noemailspecified: function(e, r) {
                        r.error(LPServer.ext.translate("Please enter at least one email and try again."))
                    },
                    usernameisnotvalidemail: function(e, r) {
                        var a = LPServer.getRecordsFromResponse(e, "email", LPServer.getAttrInt(e, "numinvalid", 0));
                        r.error(LPServer.ext.translate("The following emails are invalid: %1", a.join(", ")))
                    },
                    toomanyemails: function(e, r) {
                        var a = LPServer.getAttrInt(e, "numexcess");
                        "1" === a ? r.error(LPServer.ext.translate("You are trying to share with too many people.  Please remove at least %1 email and try again.", a)) : r.error(LPServer.ext.translate("You are trying to share with too many people.  Please remove at least %1 emails and try again.", a))
                    },
                    upgradeneeded: function(e, r) {
                        r.error(LPServer.ext.translate("Free users are limited to sharing one item with one person only. Upgrade to LastPass Premium to allow one-to-many sharing."))
                    },
                    cantsharewithself: function(e, r) {
                        r.error(LPServer.ext.translate("You can not share with yourself."))
                    }
                },
                g = function(e, r, a) {
                    this.email = e, this.pubkey = r, this.encpass = a
                },
                i = function(e, r) {
                    this.aid = e.getAttribute("aid"), this.username = LPServer.ext.decrypt(e.getAttribute("username"), r), this.password = LPServer.ext.decrypt(e.getAttribute("password"), r), this.name = LPServer.ext.decrypt(e.getAttribute("name"), r), this.grouping = LPServer.ext.decrypt(e.getAttribute("grouping"), r), this.extra = LPServer.ext.decrypt(e.getAttribute("extra"), r), this.attachkey = LPServer.ext.decrypt(e.getAttribute("attachkey"), r), this.afids = this.parseFields(e.getAttribute("afids"), r), this.otherafids = this.parseFields(e.getAttribute("otherafids"), r), this.accts_notes = this.parseFields(e.getAttribute("accts_notes"), r), this.accts_usernames = this.parseFields(e.getAttribute("accts_usernames"), r), this.accts_passwords = this.parseFields(e.getAttribute("accts_passwords"), r), this.template = e.getAttribute("template")
                },
                n, r;
            i.prototype.parseFields = function(e, r) {
                var a = [];
                if (e)
                    for (var t = 0, s = (e = e.split("^")).length; t < s; ++t) {
                        var n = e[t];
                        "" !== n && (n = e[t].split("&"), a.push({
                            name: n[0],
                            value: LPServer.ext.decrypt(n[1], r)
                        }))
                    }
                return a
            }, i.prototype.encrypt = (n = function(e, r) {
                return e ? LPServer.ext.encryptCBC(e, r) : ""
            }, r = function(e, r) {
                for (var a = JSON.parse(JSON.stringify(e)), t = 0, s = a.length; t < s; ++t) a[t].value = n(a[t].value, r);
                return a
            }, function(e) {
                return {
                    username: n(this.username, e),
                    password: n(this.password, e),
                    name: n(this.name, e),
                    grouping: n(this.grouping, e),
                    extra: n(this.extra, e),
                    attachkey: n(this.attachkey, e),
                    afids: r(this.afids, e),
                    otherafids: r(this.otherafids, e),
                    accts_notes: r(this.accts_notes, e),
                    accts_usernames: r(this.accts_usernames, e),
                    accts_passwords: r(this.accts_passwords, e)
                }
            });
            var S = function(e, r, a, t) {
                    for (var s = 0, n = a.length; s < n; ++s) e[r + t + s + "name"] = a[s].name, e[r + t + s + "value"] = a[s].value;
                    e[r + "num" + t] = a.length
                },
                P = function(e, r) {
                    var a = LPServer.getAttrInt(e, "numemails", 0);
                    1 === a ? r.success(LPServer.ext.translate("Share sent to %1.", LPServer.getAttr(e, "email0", ""))) : r.success(LPServer.ext.translate("Share sent to %1 recipients.", a))
                },
                f = function(e, r, a) {
                    for (var t = {
                            cmd: "share",
                            sharemessage: "",
                            giveshare: a.params.giveshare ? 1 : 0,
                            numemails: e.length,
                            numaids: r.length,
                            fromrole: 0,
                            sharesyncpush: 0,
                            shareautopull: 0,
                            reportname: []
                        }, s = 0, n = e.length; s < n; ++s) {
                        var i = e[s],
                            o = LPServer.ext.createRandomHexString(64),
                            c = LPServer.ext.hex2bin(o),
                            l = new LPServer.ext.RSAKey;
                        LPServer.ext.parsePublicKey(l, i.pubkey);
                        var m = l.encrypt(c),
                            p = "email" + s;
                        t[p] = i.email, t["sharekeyenchex" + s] = m, t["sharekeyenchexsig" + s] = "", i.encpass && (t["encpass" + s] = i.encpass);
                        for (var u = 0; u < r.length; ++u) {
                            var h = r[u],
                                d = h.encrypt(c);
                            1 == a.params.logname && t.reportname.push({
                                aid: h.aid,
                                name: h.name
                            });
                            var v = p + "aid" + u;
                            t[v] = h.aid, t[v + "username"] = d.username, t[v + "password"] = d.password, t[v + "name"] = d.name, t[v + "grouping"] = d.grouping, t[v + "extra"] = d.extra, t[v + "attachkey"] = d.attachkey, t[v + "template"] = h.template, S(t, v, d.afids, "afid"), S(t, v, d.otherafids, "otherafid"), S(t, v, d.accts_notes, "accts_notes"), S(t, v, d.accts_usernames, "accts_usernames"), S(t, v, d.accts_passwords, "accts_passwords")
                        }
                    }
                    LPServer.xmlRequest({
                        url: "showshare.php",
                        data: t,
                        callbacks: {
                            shareok: P
                        },
                        userSupplied: a
                    })
                },
                L = function(e, r) {
                    for (var a = [], t = LPServer.getNodes(e, "encdata"), s = 0, n = t.length; s < n; ++s) a.push(new i(t[s], r));
                    return a
                },
                y = function(e, r) {
                    for (var a = [], t = 0, s = e.length; t < s; ++t) {
                        var n = e[t];
                        n && a.push({
                            email: n,
                            reason: r
                        })
                    }
                    return a
                },
                o = function(e, r) {
                    var a = LPServer.getAttrInt(e, "numsharesok", 0);
                    if (0 < a) {
                        for (var t = [], s = 0; s < a; ++s) {
                            var n = LPServer.getAttr(e, "emailok" + s, ""),
                                i = LPServer.getAttr(e, "emailokpubkeyhex" + s, ""),
                                o = LPServer.getAttr(e, "emailencp" + s, "");
                            t.push(new g(n, i, o))
                        }
                        f(t, L(e, r.params.key), r)
                    }
                    var c = LPServer.getAttrInt(e, "numsharesdne", 0);
                    0 < c && r.callbacks && r.callbacks.invite && r.callbacks.invite({
                        emails: LPServer.getRecordsFromResponse(e, "emaildne", c)
                    });
                    var l = LPServer.getAttr(e, "sharingwithself", ""),
                        m = LPServer.getAttrInt(e, "numsharesinv", 0),
                        p = LPServer.getAttrInt(e, "numsharesuns", 0),
                        u = LPServer.getAttrInt(e, "numsharesspa", 0),
                        h = LPServer.getAttrInt(e, "numsharesres", 0);
                    if ((l || 0 < m || 0 < p || 0 < u || 0 < h) && r.callbacks && r.callbacks.problems) {
                        var d = y([l], LPServer.ext.translate("You can not share with yourself."));
                        d = (d = (d = (d = d.concat(y(LPServer.getRecordsFromResponse(e, "emailinv", m), LPServer.ext.translate("Invalid email address.")))).concat(y(LPServer.getRecordsFromResponse(e, "emailuns", p), LPServer.ext.translate("The user must login to LastPass at least once to permit sharing.")))).concat(y(LPServer.getRecordsFromResponse(e, "emailspa", u), LPServer.ext.translate("The user does not want to receive emails from LastPass.")))).concat(y(LPServer.getRecordsFromResponse(e, "emailres", h), LPServer.ext.translate("Sharing is restricted by a LastPass Enterprise policy."))), r.callbacks.problems(d)
                    }
                    if (0 < p) {
                        var v = getBG();
                        v && v.sendLpImprove("sharing_failed")
                    }
                    0 === a && r.error()
                };
            return function(e) {
                e.callbacks = LPServer.extend(e.callbacks, s);
                for (var r = {
                        cmd: "getclientdata",
                        shareeusername: e.params.emails,
                        numaids: e.params.aids.length
                    }, a = 0, t = e.params.aids.length; a < t; ++a) r["aid" + a] = e.params.aids[a];
                LPServer.xmlRequest({
                    url: "showshare.php",
                    data: r,
                    callbacks: {
                        getclientdataack: o
                    },
                    userSupplied: e
                })
            }
        }(),
        r = (a = function(e, r) {
            r.success(LPServer.ext.translate("Share revoked from %1", r.params.email))
        }, function(e) {
            LPServer.xmlRequest({
                url: "showshare.php",
                data: {
                    cmd: "unshare",
                    aid: e.params.id,
                    username: e.params.email
                },
                callbacks: {
                    unshareok: a
                },
                userSupplied: e
            })
        }),
        a, t = (c = function(e, r) {
            r.success(LPServer.ext.translate("Share accepted."))
        }, l = function(e, r, a) {
            var t = LPServer.ext.decrypt(e, r);
            return t ? LPServer.ext.encryptCBC(t, a) : ""
        }, s = function(e) {
            var r = e.params.key,
                a = e.params.pendingShareKey,
                t = e.params.pendingShare,
                s = {
                    cmd: "acceptshare",
                    msgtosharer: "",
                    aid: t.id,
                    newgroup: LPServer.ext.encryptCBC(e.params.group, r),
                    name: l(t.sharename, a, r),
                    grouping: l(t.sharegroup, a, r),
                    username: l(t.username, a, r),
                    password: l(t.password, a, r),
                    extra: l(t.extra, a, r),
                    attachkey: l(t.attachkey, a, r)
                };
            s.newname = e.params.name ? LPServer.ext.encryptCBC(e.params.name, r) : s.name;
            var n = t.save_all ? "otherafid" : "afid";
            for (var i in t.shareafids) {
                var o = t.shareafids[i];
                o = o && l(o, a, r), s[n + i] = o
            }
            LPServer.xmlRequest({
                url: "showacceptshare.php",
                data: s,
                callbacks: {
                    acceptshareok: c
                },
                userSupplied: e
            })
        }, function(a) {
            a.params.pendingShare ? s(a) : a.params.id && u(LPServer.extend({}, a, {
                params: {
                    id: a.params.id
                },
                success: function(e) {
                    a.params.pendingShare = e.pendingShare;
                    var r = new LPServer.ext.RSAKey;
                    LPServer.ext.parsePrivateKey(r, LPServer.ext.extractPrivateKey(e.privateKey, a.params.key)), a.params.pendingShareKey = r.decrypt(a.params.pendingShare.sharekeyenchex), s(a)
                }
            }))
        }),
        c, l, s, n = (i = function(e, r) {
            r.success(LPServer.ext.translate("Share rejected."))
        }, function(e) {
            LPServer.xmlRequest({
                url: "showacceptshare.php",
                data: {
                    cmd: "rejectshare",
                    aid: e.params.id
                },
                callbacks: {
                    rejectshareok: i
                },
                userSupplied: e
            })
        }),
        i, o = (m = function(e, r) {
            if (r.callbacks && r.callbacks.problems) {
                var a = [],
                    t = LPServer.getAttrInt(e, "numalready", 0);
                if (0 < t) {
                    var s = LPServer.getRecordsFromResponse(e, "emailalready", t).join(", ");
                    a.push(LPServer.ext.translate("You have already invited the following friends: %1. Please send them a reminder using your personal email as the email invitation sent by LastPass might not have reached them.", s))
                }
                var n = LPServer.getAttrInt(e, "numspam", 0);
                if (0 < n) {
                    var i = LPServer.getRecordsFromResponse(e, "emailspam", n).join(", ");
                    a.push(LPServer.ext.translate("The following friends have marked your invitations as spam: %1.", i))
                }
                0 < a.length && r.callbacks.problems(a)
            }
            var o = LPServer.getAttrInt(e, "numsent", 0);
            1 === o ? r.success(LPServer.ext.translate("%1 was invited. We will send you a notification email when they join LastPass so you can retry sharing your data with them.", LPServer.getAttr(e, "emailsent0", ""))) : 1 < o ? r.success(LPServer.ext.translate("%1 friends were invited. We will send you a notification email when any of them join LastPass so you can retry sharing your data with them.", o)) : r.error()
        }, function(e) {
            for (var r = {
                    cmd: "invite",
                    numemails: e.params.emails.length
                }, a = 0, t = e.params.emails.length; a < t; ++a) r["email" + a] = e.params.emails[a];
            LPServer.xmlRequest({
                url: "showshare.php",
                data: r,
                callbacks: {
                    inviteack: m
                },
                userSupplied: e
            })
        }),
        m, p, u = function(e) {
            var r = e.params && e.params.id ? {
                aid: e.params.id
            } : {};
            e.params.url && h(e.params.url) && (r.from = "acceptshare", r.confirm_token = d(e.params.url)), LPServer.jsonRequest({
                url: "getReceivedShareInfo.php",
                data: r,
                userSupplied: e
            })
        },
        h = function(e) {
            return !!e.match(/acceptshare=/gi)
        },
        d = function(e) {
            var r = e.match(/confirm_token=[^&]*/gi);
            return r ? r[0].split("=")[1] : ""
        };
    return {
        shareItems: e,
        unshareItem: r,
        acceptShare: t,
        rejectShare: n,
        inviteFriends: o,
        getSentShareData: function(e) {
            LPServer.jsonRequest({
                url: "getSentShareInfo.php",
                data: e.params && e.params.id ? {
                    aid: e.params.id
                } : null,
                userSupplied: e
            })
        },
        getReceivedShareData: u
    }
}();
//# sourceMappingURL=sourcemaps/serverIndividualSharing.js.map