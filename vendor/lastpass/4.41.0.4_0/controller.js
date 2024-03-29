LPProxy = {},
    function() {
        var g = null;
        Topics.get(Topics.CLEAR_DATA).subscribe(function() {
            J = null, LPProxy.clearModel()
        }), LPProxy.getBaseURL = function() {
            return bg.get("base_url")
        }, LPProxy.logEvent = function(e) {
            bg.lpevent(e)
        }, LPProxy.encryptAES = function(e, r) {
            return bg.enc(e, r)
        }, LPProxy.decryptAES = function(e, r) {
            return bg.dec(e, r)
        };
        var l = function(n) {
                return function(e, r, t) {
                    n(t)
                }
            },
            d = function(t, n) {
                return function(e) {
                    try {
                        switch (e) {
                            case "exceededlimit":
                                t(Strings.translateString("Sorry, as a premium user, you are limited to one Shared Folder. Please consider using LastPass Enterprise if you would like more."));
                                break;
                            default:
                                var r = $(jQuery.parseXML(e));
                                o(r, t, n)
                        }
                    } catch (e) {
                        LPPlatform.logException(e), t(Strings.Vault.UNEXPECTED_ERROR)
                    }
                }
            },
            P = function(e, r, t) {
                var n = e[r];
                return "function" == typeof n && (n(t), !0)
            },
            o = function(e, r, t) {
                var n = e.find("result"),
                    o = e.find("ok"),
                    a = e.find("error"),
                    i = e.find("failed");
                if (n.length) {
                    var s = n.attr("rc"),
                        c = n.attr("msg"),
                        g = n.attr("success"),
                        u = n.attr("ok"),
                        l = n.text().trim();
                    if (void 0 !== s) {
                        var d = t[s];
                        if ("function" == typeof d) return void d(n);
                        switch (s) {
                            case "notoken":
                                return void r(Strings.translateString("No token was provided. Request could not be completed"));
                            case "cantsharewithself":
                                return void r(Strings.translateString("Cannot share an item with yourself."));
                            case "alreadyexists":
                                return void r(Strings.translateString("That folder already exists."))
                        }
                    } else if (void 0 !== c) {
                        if (P(t, c, n)) return
                    } else if (void 0 !== g) {
                        if (P(t, g, n)) return
                    } else if (void 0 !== u) {
                        if (P(t, "ok")) return
                    } else if ("ok" === l) {
                        if (P(t, "ok")) return;
                        if (P(t, e.find("status").text())) return
                    } else if ("bad" === l) return void r(e.find("message").text())
                } else if (o.length) {
                    if (P(t, "ok", o)) return
                } else if (a.length) {
                    var f = a.attr("message");
                    if (f) return void r(f)
                } else if (i.length && P(t, i.attr("reason"), i)) return;
                r(Strings.Vault.UNEXPECTED_ERROR)
            },
            n = function(n, o) {
                return function(e) {
                    try {
                        if (e = jQuery.parseJSON(e), "object" == typeof o) {
                            var r = o[e.error] || o[e.res] || o[e.reason] || o[e.status];
                            if ("function" == typeof r) return void r(e);
                            o = o.default
                        }
                        if (e.error) switch (e.error) {
                            case "session_expired":
                                return void n(Strings.translateString("ErrorSessionMsg"));
                            case "not_allowed":
                                return void n(Strings.translateString("Your Shared Folder action failed. Please check your permissions before trying again"));
                            default:
                                var t = e.errortxt || Strings.Vault.UNEXPECTED_ERROR;
                                return void n(t)
                        }
                        if (e.res) switch (e.res) {
                            case "success":
                                break;
                            default:
                                return void n(Strings.Vault.UNEXPECTED_ERROR)
                        }
                        o(e)
                    } catch (e) {
                        LPPlatform.logException(e), n(Strings.Vault.UNEXPECTED_ERROR)
                    }
                }
            },
            e = function(e) {
                return function() {
                    bg.have_binary() ? e.apply(this, arguments) : LPPlatform.supportsBinary() ? dialogs.confirmation.open({
                        title: Strings.translateString("Install Binary Component"),
                        text: Strings.translateString("This feature requires the binary version of this browser extension. Would you like to install it now?"),
                        handler: function() {
                            LPPlatform.installBinary()
                        }
                    }) : dialogs.alert.open({
                        title: Strings.translateString("Not Supported"),
                        text: Strings.translateString("This feature requires an external binary component, which is currently not supported on this platform.")
                    })
                }
            };
        LPProxy.logout = function() {
            bg.lpevent("v_off"), bg.loggedOut(!1, "homelocal2")
        }, LPProxy.copyUsername = function(e) {
            bg.lpevent("v_cu"), bg.copytoclipboard(e.getUsername())
        }, LPProxy.copyPassword = function(e, r) {
            bg.lpevent("v_cp"), bg.copytoclipboard(e.getPassword()), bg.sendLpImprove("sitelogin", {
                copy: 1,
                shareType: e.getShareType(),
                autologin: e._data && e._data.autologin ? 1 : 0,
                source: r && r.source ? r.source : null,
                approach: r && r.approach ? r.approach : null
            }), r && r.source && bg.sendLpImprove("copypass", {
                source: r.source,
                action: "sitepassword"
            }), bg.loglogin(e.getID(), "notrack")
        }, LPProxy.copyGeneratedPassword = function(e, r, t) {
            LPProxy.copyToClipboard(e), Topics.get(Topics.SUCCESS).publish(Strings.translateString("Password Copied")), bg && bg.sendLpImprove && bg.sendLpImprove("genpassword", {
                action: "copypassword",
                source: r,
                generatedPasswordCount: t
            })
        }, LPProxy.copyURL = function(e) {
            bg.lpevent("v_curl"), "function" == typeof bg.copytoclipboard ? bg.copytoclipboard(e.getURL()) : r(e.getURL())
        }, LPProxy.goToURL = function(e) {
            bg.lpevent("v_g2"), bg.openURL(e.getURL())
        }, LPProxy.copyToClipboard = function(e) {
            "function" == typeof bg.copytoclipboard ? bg.copytoclipboard(e) : r(e)
        };
        var r = function(r) {
                var t = function(e) {
                    e.preventDefault(), e.clipboardData ? e.clipboardData.setData("text/plain", r) : window.clipboardData && window.clipboardData.setData("Text", r), document.body.removeEventListener("copy", t)
                };
                document.body.addEventListener("copy", t), document.execCommand("copy")
            },
            i = function(e) {
                for (var r = [], t = 0, n = e.length; t < n; ++t) "0" !== e[t].getID() && r.push(e[t].getID(!0));
                return r.join(",")
            },
            t;
        LPProxy.deleteItem = function(e, r) {
            bg.lpevent("v_d"), bg.deleteAid(i(e), null, !0, !0, r)
        }, LPProxy.deleteFormFill = function(e, r, t, n) {
            var o = r && r.source ? r.source : "vault";
            bg.lpevent("v_dff"), bg.deleteformfill(e._data.ffid, !0, !1, null, t, n, o)
        }, LPProxy.deleteFolder = function(e, r) {
            bg.lpevent("v_dg"), bg.deleteAid(i(e), null, !0, !0, r)
        }, LPProxy.launchSite = function(e, r) {
            bg.lpevent("v_ls"), bg.launch(e.getID(), !0), bg.sendLpImprove("sitelogin", {
                copy: 0,
                shareType: e.getShareType(),
                source: r && r.source ? r.source : null,
                autologin: e._data && e._data.autologin ? 1 : 0,
                action: "launch"
            }), bg.loglogin(e.getID(), "notrack")
        }, LPProxy.launchApplication = e(function(e) {
            bg.launchApp(e.getID())
        }), LPProxy.moveToFolder = function(e, r, t, n) {
            if (bg.Policies.getAccountSelectionBasedOnEmail() && (r instanceof LinkedGroup || r instanceof Group && r._sharedGroup instanceof LinkedGroup))
                for (var o = 0; o < e.length; o++) {
                    var a;
                    if (e[o]._data.unencryptedUsername === bg.get("g_username")) return n("policy"), !1
                }
            bg.moveSelectedToGroup(r._data.group, i(e), {
                skipConfirm: !0
            }, t, n)
        }, LPProxy.moveIntoSharedFolder = (t = function(e) {
            var r = null;
            return e && ((r = $.extend({}, e)).sharekey = r.key), r
        }, function(e) {
            bg.moveIntoSharedFolder(t(e.params.toShareInfo), t(e.params.fromShareInfo), e.params.itemsToMove, e.params.parentMap, !1, !1, !0, {
                successCallback: e.success,
                errorCallback: e.error
            })
        }), LPProxy.addGroup = function(e, r, t) {
            bg.addEmptyGroup(e._data.group, r, t)
        }, LPProxy.renameGroup = function(e, r, t, n) {
            bg.renameGroup(e._data.group, r.group, {
                skipConfirm: !0
            }, t, n)
        };
        var a = function(r) {
                return function() {
                    var e = arguments;
                    LPProxy.getToken(function() {
                        r.apply(window, e)
                    }, arguments[arguments.length - 1])
                }
            },
            s = (c = function(e) {
                e ? dialogs.alert.open({
                    title: Strings.translateString("Generating Sharing Keys"),
                    text: Strings.translateString("LastPass is currently generating unique sharing keys required for this action. Please try again later.")
                }) : dialogs.sharingKey.open({
                    showTimeWarning: !1
                })
            }, function() {
                LPPlatform.generateSharingKeys(c)
            }),
            c, u = function(a) {
                return function() {
                    for (var e = [], r = 0, t = arguments.length; r < t; ++r) e.push(arguments[r]);
                    var n = e[e.length - 1],
                        o = new SharedFolderUser({
                            uid: bg.get("g_uid"),
                            username: bg.get("g_username")
                        });
                    LPProxy.getPublicKeys([o], function() {
                        o.pubkey ? (e.push(o), a.apply(window, e)) : (s(), n())
                    }, n)
                }
            },
            f = function(e) {
                dialogs.inviteFriends.open(e)
            },
            p;
        LPProxy.shareItems = (p = {
            invite: f,
            problems: function(e) {
                var r = LPTools.createElement("table", "settings dialogMargin"),
                    t = LPTools.createElement("tr", "settingsHeader");
                t.appendChild(LPTools.createElement("th", null, Strings.translateString("Email Address"))), t.appendChild(LPTools.createElement("th", null, Strings.translateString("Reason"))), r.appendChild(t);
                for (var n = 0, o = e.length; n < o; ++n) {
                    var a = e[n],
                        i = LPTools.createElement("tr", "settingsRow" + (n % 2 != 0 ? " odd" : ""));
                    i.appendChild(LPTools.createElement("td", null, a.email)), i.appendChild(LPTools.createElement("td", null, a.reason)), r.appendChild(i)
                }
                dialogs.alert.open({
                    title: Strings.translateString("Failed To Share With Some Users"),
                    text: [Strings.translateString("We failed to share with the following users:"), r]
                })
            }
        }, function(e) {
            bg.BackgroundServer.sharing.individual.shareItems($.extend(!0, e, {
                params: {
                    logname: bg.get("g_prefoverrides").logname
                },
                callbacks: $.extend({}, p, {
                    emailnotverified: function() {
                        e.error(""), dialogs.verifyEmail.open({
                            email: bg.get("g_username")
                        })
                    }
                }),
                success: y(e.success, function() {
                    Topics.get(Topics.ITEM_SHARED).publish()
                })
            }))
        });
        var y = function(e, r) {
            return e ? function() {
                r.apply(window, arguments), e.apply(window, arguments)
            } : r
        };
        LPProxy.resendShareInvitation = function(e) {
            bg.BackgroundServer.sharing.individual.shareItems(e)
        }, LPProxy.unshareItem = function() {
            bg.BackgroundServer.sharing.individual.unshareItem.apply(bg, arguments)
        }, LPProxy.acceptShare = function() {
            bg.BackgroundServer.sharing.individual.acceptShare.apply(bg, arguments)
        }, LPProxy.rejectShare = function() {
            bg.BackgroundServer.sharing.individual.rejectShare.apply(bg, arguments)
        }, LPProxy.renameSharedGroup = function(e) {
            bg.BackgroundServer.sharing.folder.rename(e)
        }, LPProxy.parsePrivateKey = function(e) {
            bg.parse_private_key(e, bg.get("rsaprivatekeyhex"))
        }, LPProxy.parsePublicKey = function(e, r) {
            bg.parse_public_key(e, r)
        }, LPProxy.encrypt = function(e, r) {
            return bg.enc(e, r)
        }, LPProxy.decrypt = function(e, r) {
            try {
                return bg.dec(e, r)
            } catch (e) {
                return ""
            }
        }, LPProxy.getLocalKey = function() {
            return bg.get("g_local_key")
        }, LPProxy.encryptWithKey = function(e, r) {
            return bg.lpenc(e, r)
        }, LPProxy.encryptWithBTOA = function(e) {
            return bg.crypto_btoa(e)
        }, LPProxy.encryptMobile = function(e, r, t) {
            return null !== bg ? bg.lpmenc(e, r, t) : e
        }, LPProxy.decryptMobile = function(e, r, t) {
            return null !== bg ? bg.lpmdec(e, r, t) : e
        };
        var m = (h = function(e, r, t, n, o, a) {
                if (e._data.save_all && e.isNew() && e instanceof Account) {
                    var i = e.getURLArguments(r, t, n);
                    bg.saveAllSite(i, e._data, o, a)
                } else {
                    var i = e.getURLArguments(r, t, n);
                    bg.saveSite(i, r, o, a)
                }
            }, function(o, a, i, s, c, g) {
                if (a.attacharraychanges && a.attacharraychanges.add && 0 < a.attacharraychanges.add.length) {
                    var e = bg.AES.hex2bin(bg.lpdec(a.attachkey, i.getKey()));
                    if (!e) throw new AttachmentKeyException;
                    bg.fastEncryptAttachments(e, a.attacharraychanges.add, function(e) {
                        for (var r in a.attacharraychanges.add)
                            if (a.attacharraychanges.add.hasOwnProperty(r) && a.attacharraychanges.add[r])
                                for (var t = 0, n = e.length; t < n; ++t) a.attacharraychanges.add[r].id == e[t].id && (a.attacharraychanges.add[r].bytes = e[t].data);
                        h(o, a, i, s, c, g)
                    })
                } else h(o, a, i, s, c, g)
            }),
            h, v = function(r, e, t, n, o, a) {
                return !(r.isNew() || !r.checkForSharedGroupChange(t)) && (LPProxy.moveIntoSharedFolder({
                    params: {
                        fromShareInfo: r.getShareInfo(),
                        toShareInfo: t.getShareInfo(),
                        itemsToMove: [e],
                        parentMap: (i = {}, i[r.getID()] = t.getName(), i)
                    },
                    success: function(e) {
                        o(e[r.getID()])
                    },
                    error: a
                }), !0);
                var i
            };
        LPProxy.saveSite = function(e, r, t, n, o, a) {
            if (v(e, r, t, n, o, a));
            else if (LPTools.getOption(n, "saveFromSubmit", !1)) bg.saveSiteFromSubmit(e.getURLArguments(r, t, n), r, o, a);
            else {
                var i = o;
                if (!e._data.save_all && LPTools.getOption(n, "saveFields", !1))
                    if (r.fields.length > e._data.fields.length) {
                        var s = {
                                data: e.getFieldFormData(r.fields),
                                ref: bg.AES.url2hex(r.url),
                                updatefields: 1,
                                aid: r.aid
                            },
                            c;
                        (c = e.getShareInfo()) && (s.sharedfolderid = c.id), i = function() {
                            bg.updateFieldsFromSubmit($.param(s), r, o, a)
                        }
                    } else {
                        for (var g = {
                                aid: e.getID(),
                                urid: 0,
                                auto: 1,
                                update: 1
                            }, u = $.param(g), s = {}, l = 0; l < r.fields.length; ++l) {
                            var d = r.fields[l];
                            if ("checkbox" != d.type || d.checked) {
                                var f = e.getFieldPostData(d),
                                    P = "_" + d.name;
                                d.otherfield && void 0 !== d.formname && (P = "_" + d.formname + P), s[P] = f.value
                            }
                        }
                        var c;
                        (c = e.getShareInfo()) && (s.sharedfolderid = c.id), s = $.param(s), i = function() {
                            bg.saveFields(u, s, {
                                aid: e.getID()
                            }, function() {
                                o(r)
                            }, a)
                        }
                    } m(e, r, t, n, i, a)
            }
        }, LPProxy.addSite = function(e, r, t, n, o) {
            LPTools.getOption(t, "saveFromSubmit", !1) ? bg.saveSiteFromSubmit(e.getURLArguments(e._data, r, t), e._data, n, o) : m(e, e._data, r, t, n, o)
        }, LPProxy.saveNote = function(e, r, t, n, o, a) {
            v(e, r, t, n, o, a) || m(e, r, t, n, o, a)
        }, LPProxy.addNote = function(e, r, t, n, o) {
            m(e, e._data, r, t, n, o)
        }, LPProxy.saveApplication = function(e, r, t, n, o, a) {
            m(e, r, t, n, o, a)
        }, LPProxy.addApplication = function(e, r, t, n, o) {
            m(e, e._data, r, t, n, o)
        }, LPProxy.addFormFill = function(e, r, t, n) {
            var o = e.getPostData(e._data, null, r);
            o.cmd = e._data.cmd = "add", bg.addeditformfill(o, e._data, t, n)
        }, LPProxy.saveFormFill = function(e, r, t, n, o) {
            var a = e.getPostData(r, null, t);
            a.cmd = r.cmd = "edit", bg.addeditformfill(a, r, n, o)
        }, LPProxy.getShareInfo = function(t) {
            var n = null;
            return $.each(bg.get("g_shares"), function(e, r) {
                if (r.id === t) return n = r, !1
            }), n
        };
        var L = function(e) {
                for (var r in e) {
                    var t = e[r],
                        n = t._model.getGroupParentName();
                    if (n) {
                        var o = e[n];
                        void 0 !== o && null === t._parent && (o._subGroups.push(t), t.setParent(o))
                    }
                }
            },
            b = function() {
                var e = {};
                for (var r in F) e[r] = F[r].newDisplayObject();
                return e
            },
            x;
        LPProxy.getImage = function(e, r) {
            var t = !0,
                n = r && r.useSquareIcon ? bg.getbigicon(e._model.getURL(), "sq") : bg.getbigicon(e._model.getURL());
            return null === n && (t = !1, n = bg.geticonurlfromrecord(e._model._data, !0)), e.bigImg = t, n
        }, LPProxy.hasReceivedShares = (x = function(e) {
            for (var r in e)
                if (e[r].isReceivedShare()) return !0;
            return !1
        }, function() {
            return 0 < bg.get("g_pendings").length || x(E) || x(T)
        }), LPProxy.getPendingRecievedShares = function() {
            var e = [];
            if (LPTools.hasProperties(w))
                if (bg.get("rsaprivatekeyhex")) {
                    var r = 0;
                    for (var t in w) try {
                        e.push(w[t].newDisplayObject())
                    } catch (e) {
                        ++r
                    }
                    0 < r && Topics.get(Topics.ERROR).publish(Strings.translateString("%1 Pending Shares could not be decrypted.", r))
                } else Topics.get(Topics.ERROR).publish(Strings.translateString("No private key. Cannot decrypt Pending Shares."));
            return e
        }, LPProxy.getPendingRecievedShare = function(e) {
            return w[e]
        }, LPProxy.getEmergencyAccessRecipientModels = function() {
            var e = [];
            for (var r in C) e.push(C[r]);
            return e
        }, LPProxy.getEmergencyAccessRecipientModel = function(e) {
            return C[e]
        }, LPProxy.assignItemsToGroups = function(e, r) {
            var t = b();
            r = void 0 === r || r;
            for (var n = 0, o = e.length; n < o; ++n) {
                var a = e[n],
                    i = a._model._data.group || Strings.Vault.NONE_GROUP,
                    s = t[i];
                if (void 0 === s) {
                    for (var c = LPProxy.addDummyGroups(a._model, !1), g = 0, u = c.length; g < u; ++g) {
                        var l = c[g];
                        t[l.getName()] = l.newDisplayObject()
                    }
                    s = t[i]
                }
                s._items.push(a), a.setParent(s)
            }
            L(t);
            var d = [];
            for (var f in t) {
                var P = t[f];
                P._destructed || (r || 0 !== P.getItemChildren().length ? null === P._parent && d.push(P) : P.destruct())
            }
            return d
        };
        var S = function(e, o) {
                var a = null;
                null !== e && (a = bg.get("g_identity"), void 0 !== e && (a = e.getID()));
                var i = null;
                return null !== a && $.each(bg.get("g_identities"), function(e, r) {
                    if (r.iid === a) {
                        i = {};
                        for (var t = r[o].split(","), n = 0; n < t.length; ++n) i[t[n]] = !0;
                        return !1
                    }
                }), i
            },
            _ = function(e, r, t) {
                return !r || r[e] && !t || void 0 === r[e] && t
            };
        LPProxy.getAllModelItems = function() {
            return LPTools.objectsToArray(E, T, A)
        }, LPProxy.getAllModelTypes = function() {
            var t = [];
            return this.getAllModelItems().forEach(function(e) {
                var r = e.getRecordType(); - 1 === t.indexOf(r) && t.push(r)
            }), t
        }, LPProxy.getAllSharedGroupModelsByID = function() {
            return $.extend({}, R)
        }, LPProxy.getAllItems = function(e) {
            var r = LPProxy.getSites(e).concat(LPProxy.getNotes(e)).concat(LPProxy.getApplications(e)),
                t = !0;
            e && e.identity instanceof Identity && (t = e.identity instanceof AllIdentity);
            var n = LPProxy.assignItemsToGroups(r, t);
            return LPFeatures.allowOmarIA() ? n : n.concat(LPProxy.getFormFills(e))
        }, LPProxy.getApplicationModel = function(e) {
            return k[e]
        }, LPProxy.getApplications = function(e) {
            return Q(k, "appaids", e)
        };
        var E = {},
            T = {},
            A = {},
            k = {},
            R = {},
            I = {},
            w = {},
            D = {},
            C = {},
            F = {},
            U = !1,
            N = function(e) {
                return e instanceof Account ? E : e instanceof Note ? T : e instanceof FormFill ? A : e instanceof Application ? k : e instanceof SharedGroup ? R : e instanceof Group ? I : "undefined" != typeof PendingReceivedSharedItem && e instanceof PendingReceivedSharedItem ? w : "undefined" != typeof EmergencyAccessRecipient && e instanceof EmergencyAccessRecipient ? C : "undefined" != typeof EmergencyAccessSharer && e instanceof EmergencyAccessSharer ? D : void 0
            },
            O;
        LPProxy.removeItem = function(e) {
            var r = N(e);
            r && delete r[e.getID()], e instanceof Group && delete F[e.getName()]
        }, LPProxy.addItem = function(e) {
            var r = N(e);
            r && (r[e.getID()] = e), e instanceof Group && (F[e.getName()] = e)
        }, LPProxy.getExistingGroupParent = function(e) {
            for (; 0 < e.length;) {
                if (void 0 !== F[e]) return F[e];
                e = e.substring(0, e.lastIndexOf("\\"))
            }
            return null
        }, LPProxy.addDummyGroups = (O = function(e, r, t, n) {
            var o = new e(r, n);
            return void 0 !== t && !t || (F[o.getName()] = o), o
        }, function(e, r) {
            var t = e.getSharedGroup(),
                n = e._data.group,
                o = [];
            if (e instanceof DummyGroup && (F[e.getName()] = e), n) {
                var a = -1;
                do {
                    a = n.indexOf("\\", a + 1);
                    var i = n.substring(0, -1 === a ? n.length : a),
                        s;
                    void 0 === F[i] && o.push(O(DummyGroup, i, r, t))
                } while (-1 < a)
            } else void 0 === F[Strings.Vault.NONE_GROUP] && o.push(O(DefaultGroup, Strings.Vault.NONE_GROUP, r));
            return o
        }), LPProxy.clearModel = function() {
            E = {}, T = {}, A = {}, k = {}, I = {}, R = {}, F = {}, w = {}, D = {}, U = !(C = {})
        };
        var M = function(e) {
                var r = bg.get_personal_linked(),
                    t = bg.get_personal_linked_needs_verification();
                r ? Topics.get(Topics.ACCOUNT_LINKED).publish() : t ? Topics.get(Topics.ACCOUNT_LINKED_NEEDS_VERIFICATION).publish() : Topics.get(Topics.ACCOUNT_UNLINKED).publish();
                var n = {},
                    o = LPPlatform.getBackgroundData(bg.get("g_sites"));
                for (var a in o) {
                    var i = o[a];
                    if ("http://group" === i.url && i.sharefolderid === a) {
                        var s = LPProxy.getShareInfo(a),
                            c = R[a];
                        a === r ? (c = c ? c.refresh(i, s) : new LinkedGroup(i, s), g = c) : c = e[i.group] ? c ? c.refresh(i, s) : new EmergencyAccessGroup(i, s) : e[i.group.substring(SharedGroup.prototype.SHARED_FOLDER_NAME_PREFIX.length)] ? (i.group = i.group.substring(SharedGroup.prototype.SHARED_FOLDER_NAME_PREFIX.length), c ? c.refresh(i, s) : new EmergencyAccessGroup(i, s)) : c ? c.refresh(i, s) : new SharedGroup(i, s), R[a] = c, n[a] = !0
                    }
                }
                G(R, n), j(R)
            },
            B = function() {
                var e = {},
                    r = {},
                    t = LPPlatform.getBackgroundData(bg.get("g_sites"));
                for (var n in t) {
                    var o = t[n],
                        a = R[o.sharefolderid];
                    if ("http://group" === o.url) {
                        if (void 0 === a || -1 < o.group.indexOf("\\")) {
                            var i = I[n];
                            i = i ? i.refresh(o, a) : new Group(o, a), I[n] = i, r[n] = !0
                        }
                    } else {
                        var s = E[n];
                        E[n] = s ? s.refresh(o, a) : new Account(o, a), e[n] = !0
                    }
                }
                G(E, e), G(I, r), j(I), K(I), K(E)
            },
            G = function(e, r) {
                for (var t in e)
                    if (void 0 === r[t]) {
                        var n = e[t];
                        n.deleteUpdates(!1), n.removed = !0
                    }
            },
            j = function(e) {
                for (var r in e) {
                    var t = e[r];
                    F[t.getName()] = t
                }
            },
            K = function(e) {
                for (var r in e) LPProxy.addDummyGroups(e[r])
            },
            V = function() {
                var e = {},
                    r = LPPlatform.getBackgroundData(bg.get("g_securenotes")),
                    t = LPPlatform.getBackgroundData(bg.get("lp_attaches"));
                for (var n in r) {
                    var o = r[n],
                        a = [];
                    if ("1" === o.attachpresent && t)
                        for (var i = 0, s = t.length; i < s; ++i) {
                            var c = t[i];
                            c.parent === o.aid && a.push(new Attachment(c))
                        }
                    var g = R[o.sharefolderid],
                        u = T[n];
                    T[n] = u ? u.refresh(o, g, a) : new Note(o, g, a), e[n] = !0
                }
                G(T, e), K(T)
            },
            H = function() {
                var e = {},
                    r = LPPlatform.getBackgroundData(bg.get("g_applications"));
                for (var t in r) {
                    var n = r[t],
                        o = k[t],
                        a = R[n.sharefolderid];
                    k[t] = o ? o.refresh(n, a) : new Application(n, a), e[t] = !0
                }
                G(k, e), K(k)
            },
            q = function() {
                var e = {},
                    r = LPPlatform.getBackgroundData(bg.get("g_formfills"));
                if (r) {
                    for (var t = 0, n = r.length; t < n; ++t) {
                        var o = r[t],
                            a = o.ffid,
                            i = A[a],
                            s = R[o.sharefolderid];
                        A[a] = i ? i.refresh(o, s) : new FormFill(o, s), e[a] = !0
                    }
                    G(A, e)
                }
            },
            X = function() {
                var e = {},
                    r = LPPlatform.getBackgroundData(bg.get("g_pendings"));
                if ("undefined" != typeof PendingReceivedSharedItem)
                    for (var t = 0, n = r.length; t < n; ++t) {
                        var o = r[t],
                            a = o.id,
                            i = w[a];
                        w[a] = i ? i.refresh(o) : new PendingReceivedSharedItem(o), e[a] = !0
                    }
                G(w, e)
            },
            W = function() {
                var e = {},
                    r = LPPlatform.getBackgroundData(bg.get("g_emer_sharees"));
                if (r && "undefined" != typeof EmergencyAccessRecipient)
                    for (var t = 0, n = r.length; t < n; ++t) {
                        var o = r[t],
                            a = o.username,
                            i = C[a];
                        C[a] = i ? i.refresh(o) : new EmergencyAccessRecipient(o), e[a] = !0
                    }
                G(C, e)
            },
            Y = function() {
                var e = {},
                    r = {},
                    t = LPPlatform.getBackgroundData(bg.get("g_emer_sharers"));
                if (t && "undefined" != typeof EmergencyAccessSharer)
                    for (var n = 0, o = t.length; n < o; ++n) {
                        var a = t[n],
                            i = a.username,
                            s = D[i];
                        D[i] = s = s ? s.refresh(a) : new EmergencyAccessSharer(a), e[i] = !0, s.allowedAccess() && (r[s.getName()] = !0)
                    }
                return G(D, e), r
            },
            z = function() {
                U = LPPlatform.getBackgroundData(bg.get("RecordTypeConfig"))
            };
        LPProxy.initializeModel = function() {
            F = {};
            var e = Y();
            W(), M(e), B(), V(), H(), q(), X(), z(), bg.refreshGroupNames()
        }, LPProxy.getModel = function(e, r) {
            switch (r) {
                case "Account":
                    return LPProxy.getSiteModel(e);
                case "Note":
                    return LPProxy.getNoteModel(e);
                case "FormFill":
                    return LPProxy.getFormFillModel(e);
                case "Application":
                    return LPProxy.getApplicationModel(e)
            }
        }, LPProxy.getGroups = function() {
            return LPTools.objectsToArray(F)
        }, LPProxy.getGroupByName = function(e) {
            return F[e]
        };
        var Q = function(e, r, t) {
            var n = LPTools.getOption(t, "identity", void 0),
                o = LPTools.getOption(t, "filter", S(n, r)),
                a = LPTools.getOption(t, "invertIdentity", !1) || LPTools.getOption(t, "invertFilter", !1),
                i = [];
            if (o && !a) {
                for (var s in o)
                    if (_(s, o, a)) {
                        var c = e[s];
                        c && i.push(c.newDisplayObject())
                    }
            } else
                for (var g in e) _(g, o, a) && i.push(e[g].newDisplayObject());
            return i
        };
        LPProxy.getSiteModel = function(e) {
            return E[e]
        }, LPProxy.getSiteModels = function(e) {
            if (e) {
                var r = LPPlatform.getBackgroundData(bg.get("g_sites")),
                    t = bg.reorderOnURL(r, e);
                return t = t.filter(function(e) {
                    return "group" !== e.tld
                }).map(function(e) {
                    return E[e.aid]
                }), LPTools.objectsToArray(t)
            }
            return LPTools.objectsToArray(E)
        }, LPProxy.getSite = function(e) {
            var r = E[e];
            return r ? r.newDisplayObject() : null
        }, LPProxy.getSites = function(e) {
            return Q(E, "aids", e)
        }, LPProxy.getSiteUsernames = function() {
            var e = {};
            for (var r in E) e[E[r].getUsername()] = !0;
            var t = [];
            for (var n in e) n && t.push(n);
            return t
        }, LPProxy.getNoteModel = function(e) {
            return T[e]
        }, LPProxy.getNote = function(e) {
            var r = T[e];
            return r ? r.newDisplayObject() : null
        }, LPProxy.getNotes = function(e) {
            return Q(T, "aids", e)
        }, LPProxy.getRecordConfig = function() {
            return U || z(), U
        }, LPProxy.getConfigViewObject = function(e) {
            for (var r = this.getRecordConfig(), t = 0; t < r.views.length; t++)
                if (e === r.views[t].id) return r.views[t];
            throw new TypeError("View Not Found")
        }, LPProxy.getConfigTypeObject = function(e) {
            for (var r = this.getRecordConfig(), t = 0; t < r.types.length; t++)
                if (e === r.types[t].id) return r.types[t];
            throw new TypeError("Type id not found: [ " + e + " ]")
        }, LPProxy.getConfigTypeObjectByNoteType = function(e) {
            if (e) {
                var r = this.getRecordConfig();
                this.getCustomTemplateIdFromNoteType(e) && (e = "Custom");
                for (var t = 0; t < r.types.length; t++)
                    if (e === r.types[t].recordType) return r.types[t]
            }
            throw new TypeError("Note type not found: [ " + e + " ]")
        }, LPProxy.getCustomTemplateIdFromNoteType = function(e) {
            if (e) {
                var r = e.match(/^Custom_(\d+)$/);
                if (r && 2 == r.length) return r[1]
            }
            return null
        }, LPProxy.getItemsByShareID = function(e) {
            for (var r = [], t = LPProxy.getAllModelItems(), n = 0, o = t.length; n < o; ++n) {
                var a = t[n];
                a.getShareID() === e && r.push(a)
            }
            return r
        }, LPProxy.getFormFillModel = function(e) {
            return A[e]
        }, LPProxy.getFormFillModels = function() {
            return LPTools.objectsToArray(A)
        }, LPProxy.getModelCount = function() {
            return LPTools.objectsToArray(E).length + LPTools.objectsToArray(A).length + LPTools.objectsToArray(T).length
        }, LPProxy.getFormFill = function(e) {
            var r = A[e];
            return r ? r.newDisplayObject() : null
        }, LPProxy.getFormFills = function(e) {
            var r = [],
                t = LPTools.getOption(e, "identity", void 0),
                n = LPTools.getOption(e, "filter", S(t, "ffids")),
                o = LPTools.getOption(e, "invertIdentity", !1);
            for (var a in A) {
                var i = A[a];
                _(a, n, o) && r.push(new FormFillDisplay(i))
            }
            return r
        }, LPProxy.getIdentities = function() {
            var n = [new AllIdentity];
            return $.each(bg.get("g_identities"), function(e, r) {
                var t = new Identity(r);
                n.push(t)
            }), n
        }, LPProxy.enableCurrentIdentity = function(e) {
            for (var r, t = 0, n = e.length; t < n; ++t) {
                var o = e[t];
                if (o.getID() === bg.get("g_identity")) return void o.enable({
                    reprompt: !1
                });
                o instanceof AllIdentity && (r = o)
            }
            r.enable({
                reprompt: !1
            })
        }, LPProxy.enableIdentity = function(e) {
            bg.lpevent("v_cid"), bg.switch_identity(e._data.iid, !0)
        }, LPProxy.getAccountClass = function() {
            var e = "1" == bg.get("g_iscompanyadmin"),
                r = !!bg.get("g_enterpriseuserrole"),
                t = "1" == bg.get("g_enterpriseuser"),
                n = bg.get("g_premium_exp") > LPTools.get_gmt_timestamp(),
                o = "1" == bg.get("g_is_premium_trial"),
                a = 1 * bg.get("g_enterprisemodel");
            if (e) switch (a) {
                case 2:
                    return Constants.USER_FAMILY_ADMIN;
                case 1:
                    return Constants.USER_TEAMS_ADMIN;
                default:
                    return Constants.USER_ENTERPRISE_ADMIN
            } else {
                if (r && 0 == a) return Constants.USER_ENTERPRISE_ROLE;
                if (t) switch (a) {
                    case 2:
                        return Constants.USER_FAMILY;
                    case 1:
                        return Constants.USER_TEAMS;
                    default:
                        return Constants.USER_ENTERPRISE
                } else {
                    if (n) return Constants.USER_PREMIUM;
                    if (o) return Constants.USER_PREMIUM_TRIAL
                }
            }
            return Constants.USER_FREE
        }, LPProxy.getRoleName = function() {
            return bg.get("g_enterpriseuserrole")
        }, LPProxy.getUser = function() {
            return new User(bg.get("g_username"), LPProxy.getAccountClass(), this.getIdentities(), LPProxy.getRoleName())
        }, LPProxy.isFreeUser = function() {
            return LPProxy.getAccountClass() === Constants.USER_FREE
        }, LPProxy.isPremiumUser = function() {
            return LPProxy.getAccountClass() === Constants.USER_PREMIUM
        }, LPProxy.isPremiumTrialUser = function() {
            return LPProxy.getAccountClass() === Constants.USER_PREMIUM_TRIAL
        }, LPProxy.isLegacyPremium = function() {
            return "1" == bg.get("g_is_legacy_premium")
        }, LPProxy.isPremiumAsAPerk = function() {
            return "1" == bg.get("g_is_premium_as_a_perk")
        }, LPProxy.isFamiliesTrialStarted = function() {
            return "1" == bg.get("g_is_families_trial_started")
        }, LPProxy.predatesFamilies = function() {
            return "1" == bg.get("g_predates_families")
        }, LPProxy.seenVaultPostFamilies = function() {
            return "1" == bg.get("g_seen_vault_post_families")
        }, LPProxy.isEligibleForLegacySharedFolders = function() {
            return LPProxy.isLegacyPremium() && LPProxy.isFamilyUser()
        }, LPProxy.isMFAOnly = function() {
            return "1" == bg.get("g_enterpriseoffering")
        }, LPProxy.isIdentity = function() {
            return "3" == bg.get("g_enterpriseoffering")
        }, LPProxy.isAdmin = function() {
            var e = LPProxy.getAccountClass();
            return e === Constants.USER_ENTERPRISE_ADMIN || e === Constants.USER_TEAMS_ADMIN || e === Constants.USER_FAMILY_ADMIN
        }, LPProxy.isEnterpriseUser = function() {
            if (LPProxy.isMFAOnly()) return !1;
            var e = LPProxy.getAccountClass();
            return e === Constants.USER_ENTERPRISE || e === Constants.USER_ENTERPRISE_ADMIN || e === Constants.USER_ENTERPRISE_ROLE || e === Constants.USER_TEAMS || e === Constants.USER_TEAMS_ADMIN
        }, LPProxy.isFamilyUser = function() {
            var e = LPProxy.getAccountClass();
            return e === Constants.USER_FAMILY || e === Constants.USER_FAMILY_ADMIN
        }, LPProxy.isExpiredFamilyUser = function() {
            return LPProxy.isFamilyUser() && LPProxy.isExpiredCompanyUser()
        }, LPProxy.isExpiredCompanyUser = function() {
            return bg.get("g_is_company_subscription_expired")
        }, LPProxy.setCompanyExpiration = function() {
            (LPProxy.isFamilyUser() || LPProxy.isEnterpriseUser()) && null === bg.get("g_is_company_subscription_expired") && bg.BackgroundServer.licensing.isCompanyExpired(function(e) {
                bg.BackgroundServer.licensing.setCompanyExpired(e)
            })
        }, LPProxy.getCreditMonitoringData = function(e, r) {
            var t = LPProxy.getBaseURL() + "getCreditMonitoringData.php";
            LPPlatform.ajax({
                url: t,
                dataType: "text",
                success: n(r, e),
                error: l(r)
            })
        }, LPProxy.getReceivedShareData = function(e) {
            bg.BackgroundServer.sharing.individual.getReceivedShareData(e)
        }, LPProxy.getSharedFolderData = function(e) {
            bg.BackgroundServer.sharing.folder.getFolders(e)
        }, LPProxy.getSentShareData = function(e) {
            bg.BackgroundServer.sharing.individual.getSentShareData(e)
        };
        var J = null,
            Z, ee, re, te, ne, oe, ae, ie, se, ce;
        LPProxy.getToken = function(r, e) {
            if (void 0 === r) return J;
            null !== J ? r(J) : LPPlatform.ajax({
                type: "POST",
                url: LPProxy.getBaseURL() + "getCSRFToken.php",
                data: {
                    token: J
                },
                success: function(e) {
                    r(J = e)
                },
                error: l(e)
            })
        }, LPProxy.convertLegacySharedFolder = a(function(e, r, t) {
            LPPlatform.ajax({
                type: "POST",
                url: LPProxy.getBaseURL() + "share.php",
                data: {
                    movetolegacypremium: 1,
                    id: e.params.shareId,
                    token: J
                },
                dataType: "text",
                success: d(e.error, {
                    folderconverted: e.success
                }),
                error: l(e.error)
            })
        }), LPProxy.deleteIdentity = function(e) {
            bg.BackgroundServer.identities.remove(e)
        }, LPProxy.addIdentity = function(e) {
            bg.BackgroundServer.identities.add(e)
        }, LPProxy.saveIdentity = function(e) {
            bg.BackgroundServer.identities.update(e)
        }, LPProxy.import = function() {
            bg.lpevent("v_i"), bg.openimport()
        }, LPProxy.export = function() {
            bg.lpevent("v_e"), bg.openexport()
        }, LPProxy.openAllFavorites = function(e) {
            bg.lpevent("v_of"), bg.openfavorites(!1, e)
        }, LPProxy.openBookmarklets = function() {
            bg.lpevent("v_bk"), LPProxy.callAcctsIFrameCommand("bookmarklets")
        }, LPProxy.openHistory = function() {
            bg.lpevent("v_his"), LPProxy.callAcctsIFrameCommand("history")
        }, LPProxy.reprompt = (Z = function(e, r) {
            var t = (new Date).getTime(),
                n = bg.Preferences.get("reprompttime"),
                o = bg.Preferences.get("lastreprompttime");
            o < t && t - o <= 1e3 * n ? e() : Topics.get(Topics.REPROMPT).publish(e)
        }, ee = function(e) {
            if (e) {
                e instanceof Array || (e = [e]);
                for (var r = 0, t = e.length; r < t; ++r)
                    if (bg.get("g_prompts")[e[r]]) return !0;
                return !1
            }
            return !0
        }, function(e, r) {
            if (ee(LPTools.getOption(r, "types", null))) {
                if ("function" == typeof bg.singlefactor_reprompt) return bg.singlefactor_reprompt(function() {
                    Z(e, r)
                }, e), !0;
                Z(e, r)
            } else e();
            return !1
        }), LPProxy.callAcctsIFrameCommand = function(e, r, t) {
            bg.unlock_plug2web(), Topics.get(Topics.DIALOG_LOADING).publish(), t = $.extend({}, t, {
                rand: 1e3 * Math.random(),
                command: e,
                version: LPProxy.getVersion(),
                newvault: 1
            }), r && (t.commandid = r), bg.get_method_async(function(e) {
                t.method = e, LPPlatform.openAcctsIframe(t, function() {
                    Topics.get(Topics.DIALOG_LOADED).publish()
                })
            })
        }, LPProxy.getDeletedItems = (re = function(e, r) {
            for (var t = 0, n = e.length; t < n; ++t) {
                var o = e[t];
                o.url = bg.AES.hex2url(o.url), "http://group" !== o.url && r.push(new Account(o).newDisplayObject())
            }
        }, te = function(e, r) {
            for (var t = 0, n = e.length; t < n; ++t) r.push(new Note(e[t]).newDisplayObject())
        }, ne = function(e, r) {
            var t = [],
                n = [];
            e = atob(e), bg.parsemobile(e, e.length, -1, 0, null, t, n, null, null, null, null, null, !0, !1, null, null, null, null, null, null, null, null, [], null, null, null, null, null, null, null);
            var o = [];
            re(t, o), te(n, o);
            for (var a = LPProxy.assignItemsToGroups(o, !1), i = 0, s = a.length; i < s; ++i) a[i].setDeleted();
            r(a)
        }, function(r, e) {
            var t = LPProxy.getBaseURL() + "getaccts.php",
                n = {
                    mobile: 1,
                    b64: 1,
                    shap: 1
                };
            n.u = bg.get("g_username_hash"), n.only_deleted = 1, LPPlatform.ajax({
                type: "POST",
                url: t,
                data: n,
                dataType: "text",
                success: function(e) {
                    ne(e, r)
                },
                error: l(e)
            })
        }), LPProxy.getSharedFolderMembers = function(e) {
            bg.BackgroundServer.sharing.folder.getMembers(e)
        }, LPProxy.restoreDeletedItems = a(function(e, r, t, n) {
            var o = {
                src: "website",
                fromwebsite: 1,
                ajax: 1,
                extjs: 1,
                undelete: 1,
                aid: i(e),
                token: J
            };
            r && (o.sharedfolderid = r), LPPlatform.ajax({
                type: "POST",
                url: LPProxy.getBaseURL() + "show_website.php",
                data: o,
                dataType: "text",
                success: d(n, {
                    accountundeleted: t,
                    reload: t
                }),
                error: l(n)
            })
        }), LPProxy.purgeDeletedItems = a(function(e, r, t, n) {
            var o = {
                src: "website",
                fromwebsite: 1,
                ajax: 1,
                extjs: 1,
                purgeext: 1,
                aid: i(e),
                token: J
            };
            r && (o.sharedfolderid = r), LPPlatform.ajax({
                type: "POST",
                url: LPProxy.getBaseURL() + "show_website.php",
                data: o,
                dataType: "text",
                success: d(n, {
                    accountpurged: t
                }),
                error: l(n)
            })
        }), LPProxy.removeSharedFolderMember = function(e) {
            bg.BackgroundServer.sharing.folder.removeMember(e)
        }, LPProxy.getPublicKeys = (oe = {
            emptyGroups: function(e) {
                dialogs.alert.open({
                    title: Strings.translateString("Error"),
                    text: [Strings.translateString("The following user groups are empty and cannot be added."), Strings.translateString("Please try again once users have been added."), LPTools.buildDialogItemContainer(e)]
                })
            }
        }, function(e) {
            bg.BackgroundServer.sharing.folder.getPublicKeys($.extend(!0, e, {
                callbacks: oe
            }))
        }), LPProxy.addSharedFolderMembers = (ae = {
            invite: f,
            noSharingKeyUsers: function(e) {
                for (var r = LPTools.createElement("ul", "bulletList"), t = 0, n = e.length; t < n; ++t) {
                    var o = e[t],
                        a = o instanceof SharedFolderUser ? o.getName() : o;
                    r.appendChild(LPTools.createElement("li", null, a))
                }
                dialogs.alert.open({
                    title: Strings.translateString("No Sharing Support"),
                    text: [Strings.translateString("The following users do not currently have sharing keys."), Strings.translateString("They can generate sharing keys by logging into LastPass via the LastPass Internet Explorer, Firefox, or Google Chrome browser extensions, or by logging into the website and clicking on the Generate Sharing Keys link."), Strings.translateString("Once they do that this Shared Folder will become accessible to them."), r]
                })
            },
            emptyGroups: function(e) {
                for (var r = [], t = 0, n = e.length; t < n; ++t) {
                    var o = new SharedFolderUserGroup({
                        name: e[t]
                    });
                    o._pending = !0, r.push(o)
                }
                dialogs.alert.open({
                    title: Strings.translateString("Error"),
                    text: [Strings.translateString("The following user groups are empty and cannot be added."), Strings.translateString("Please try again once users have been added."), LPTools.buildDialogItemContainer(r)]
                })
            }
        }, function(e) {
            bg.BackgroundServer.sharing.folder.addMembers($.extend(!0, e, {
                callbacks: ae
            }))
        }), LPProxy.createSharedFolder = (ie = {
            sharingkeyrequired: s
        }, function(e) {
            bg.BackgroundServer.sharing.folder.create($.extend(!0, e, {
                callbacks: ie
            }))
        }), LPProxy.deleteSharedFolder = function(e) {
            bg.BackgroundServer.sharing.folder.remove(e)
        }, LPProxy.createCreditMonitoringProfile = a(function(e, r, t) {
            var n = {
                cmd: "enroll",
                xml: 1,
                ffid: e.getID(),
                token: J
            };
            $.extend(n, e.getFormData({
                firstname: !0,
                lastname: !0,
                birthday: !0,
                ssn: !0,
                address1: !0,
                address2: !0,
                address3: !0,
                city: !0,
                state: !0,
                country: !0,
                zip: !0,
                phone: !0
            })), LPPlatform.ajax({
                type: "POST",
                url: LPProxy.getBaseURL() + "creditmon.php",
                data: n,
                dataType: "text",
                success: d(t, {
                    1: function() {
                        Topics.get(Topics.SUCCESS).publish(Strings.translateString("Enrolled in credit monitoring.")), Topics.get(Topics.ENROLLED_CREDIT_MONITORING).publish(), r()
                    },
                    "": function(e) {
                        t(e.attr("reason2"))
                    }
                }),
                error: l(t)
            })
        }), LPProxy.sendVerificationEmail = a(function(e, r, t) {
            LPPlatform.ajax({
                type: "POST",
                url: LPProxy.getBaseURL() + "settings.php",
                data: {
                    testemail: 1,
                    email: e,
                    extra: "verifysharing",
                    token: J
                },
                success: r,
                error: l(t)
            })
        }), LPProxy.revertPasswordChange = function() {
            bg.BackgroundServer.vault.history.revertPasswordChange.apply(this, arguments)
        }, LPProxy.getPasswordHistory = function() {
            bg.BackgroundServer.vault.history.getPasswordHistory.apply(this, arguments)
        }, LPProxy.getUsernameHistory = function() {
            bg.BackgroundServer.vault.history.getUsernameHistory.apply(this, arguments)
        }, LPProxy.getNoteHistory = function() {
            bg.BackgroundServer.vault.history.getNoteHistory.apply(this, arguments)
        }, LPProxy.getSecurityChallengeScore = function(e) {
            bg.get_securityChallengeScore(e)
        }, LPProxy.getSharedFolderRestrictions = function(e) {
            bg.BackgroundServer.sharing.folder.getRestrictions(e)
        }, LPProxy.updateSharedFolderRestrictions = function(e) {
            bg.BackgroundServer.sharing.folder.updateRestrictions(e)
        }, LPProxy.unlinkAccount = a(function(e) {
            LPProxy.removeLinkedAccountInIe(), LPPlatform.ajax({
                type: "POST",
                url: LPProxy.getBaseURL() + "share.php",
                data: {
                    unlink: 1,
                    uid: e.params.id,
                    token: J
                },
                dataType: "text",
                success: d(e.error, {
                    ok: e.success
                }),
                error: l(e.error)
            })
        }), LPProxy.linkAccount = (se = u(function(e, r, t, n, o, a, i, s) {
            var c = new bg.RSAKey;
            LPProxy.parsePublicKey(c, s.pubkey);
            var g = c.encrypt(bg.AES.bin2hex(r)),
                u = {
                    id: 0,
                    update: 1,
                    link: 1,
                    xml: 1
                };
            u.token = e.attr("token"), u.newusername = o.linkedEmail, u.newhash = t, u.sharekey = g, u.sharename = LPProxy.encryptWithKey(o.linkedEmail, r), u.name = o.linkedEmail, u.uid = e.attr("uid"), u.linkvalid = 1, LPPlatform.ajax({
                type: "POST",
                url: LPProxy.getBaseURL() + "share.php",
                data: u,
                dataType: "text",
                success: d(i, {
                    ok: a
                }),
                error: l(i)
            })
        }), ce = function(r, t, n, o, a, i) {
            var e = {
                verifylink: 1,
                outofbandsupported: 1,
                outofbandrequest: 0,
                outofbandretry: 0,
                xml: 1
            };
            e.username = o.linkedEmail, e.hash = t, e.iterations = n;
            var s = function(e) {
                se(e, r, t, n, o, a, i)
            };
            LPPlatform.ajax({
                type: "POST",
                url: LPProxy.getBaseURL() + "login.php",
                data: e,
                dataType: "text",
                success: d(i, {
                    ok: s
                }),
                error: l(i)
            })
        }, function(n, o, a) {
            bg.make_lp_key_hash(n.linkedEmail, n.linkedPassword, function(e, r, t) {
                ce(e, r, t, n, o, a)
            })
        }), LPProxy.refreshSites = function() {
            bg.refreshsites()
        }, LPProxy.removeLinkedAccountInIe = function() {
            "function" == typeof bg.removeLinkedAccount && bg.removeLinkedAccount()
        }, LPProxy.getLinkedAccount = function() {
            return g
        }, LPProxy.updateSharedFolderMemberPermissions = function(e) {
            bg.BackgroundServer.sharing.folder.updateMemberPermissions(e)
        }, LPProxy.startDownloadingFolder = function(e) {
            bg.BackgroundServer.sharing.folder.startDownloading(e)
        }, LPProxy.stopDownloadingFolder = function(e) {
            bg.BackgroundServer.sharing.folder.stopDownloading(e)
        };
        var ge = function(e, r, t, n, o) {
                var a = r.getFieldPostData(t, !0);
                a.aid = r.getID(), a.auto = 1, a[e] = 1;
                var i = $.param(a),
                    s = r.getShareInfo(),
                    c = "";
                s && (c = $.param({
                    sharedfolderid: s.id
                })), bg.saveFields(i, c, {
                    aid: r.getID()
                }, n, o)
            },
            ue;
        LPProxy.addField = function(e, r, t, n) {
            ge("add", e, r, t, n)
        }, LPProxy.deleteField = function(e, r, t, n) {
            ge("delete", e, r, t, n)
        }, LPProxy.autoChangePassword = function(e) {
            bg.sendLpImprove("auto_change_password_click"), bg.editAid(e, null, null, "1")
        }, LPProxy.getPreference = function(e, r) {
            return bg.Preferences.get(e, r)
        }, LPProxy.setPreferences = function(e, r) {
            bg.Preferences.set(e, r)
        }, LPProxy.fillSite = function(e) {
            bg.LPPlatform.fill(e.getID())
        }, LPProxy.fillProfile = function(e, r) {
            bg.lpevent("m_ff"), bg.fillform(e.getID(), null, null, null, null, null, r)
        }, LPProxy.addAttachment = (ue = function(e, r, t) {
            var n = bg.check_filename_badchars(e);
            n === bg.get("FILENAME_FRAGMENT_BAD_SHELL_CHARS") ? Topics.get(Topics.ERROR).publish(Strings.translateString("Suspicious characters found in selected filename, will not process it")) : n === bg.get("FILENAME_FRAGMENT_BAD_CONTROL_CHARS") ? Topics.get(Topics.ERROR).publish(Strings.translateString("Control characters found in selected filename, will not process it")) : t(new Attachment({
                filename: e,
                id: Math.floor(99999 * Math.random()).toString(),
                mimetype: bg.get_mimetype_from_filename(e),
                bytes: r
            }))
        }, e(function(r) {
            bg.addAttach(function(e) {
                e.error ? dialogs.alert.open({
                    title: Strings.translateString("Error"),
                    text: e.error.split("\n")
                }) : e.name && 0 < e.name.length && ue(e.name, e.bytes, r)
            })
        })), LPProxy.openAttachment = e(function(e) {
            LPPlatform.openAttachment(e)
        }), LPProxy.saveAttachment = e(function(e) {
            LPPlatform.saveAttachment(e)
        }), LPProxy.openAll = function(e) {
            for (var r = [], t = 0, n = e.length; t < n; ++t) {
                var o = e[t];
                o instanceof Account && r.push(o._data)
            }
            bg.openAllSites(r)
        }, LPProxy.getDomain = function(e) {
            return bg.lp_gettld_url(e)
        }, LPProxy.addToFavorites = a(function(e, r, t) {
            var n = i(e);
            LPPlatform.ajax({
                type: "POST",
                url: LPProxy.getBaseURL() + "groups.php",
                data: {
                    aids: n,
                    newfavaids: n,
                    token: J,
                    xml: 1
                },
                dataType: "text",
                success: d(t, {
                    ok: r
                }),
                error: l(t)
            })
        }), LPProxy.restoreDeletedSharedFolder = function(e) {
            bg.BackgroundServer.sharing.folder.restoreDeleted(e)
        }, LPProxy.purgeDeletedSharedFolder = function(e) {
            bg.BackgroundServer.sharing.folder.purgeDeleted(e)
        };
        var le = function(e) {
                for (var r = [], t = 0, n = e.length; t < n; ++t) r.push(e[t].getID());
                return r
            },
            de, fe, Pe, pe, ye, me;
        LPProxy.changePasswords = function(e) {
            bg.changePassword(e.params.password, le(e.params.items), !1, e.success, e.error)
        }, LPProxy.inviteFriends = (de = {
            problems: function(e) {
                dialogs.alert.open({
                    title: Strings.Vault.ERROR,
                    text: e
                })
            }
        }, function(e) {
            bg.BackgroundServer.sharing.individual.inviteFriends($.extend(!0, e, {
                callbacks: de
            }))
        }), LPProxy.updateEmergencyAccessRecipient = (fe = {
            enterprise: function(e, r) {
                r.error(Strings.translateString("Sorry, LastPass Enterprise users can not act as emergency contacts."))
            }
        }, function(e) {
            e.callbacks = fe, bg.BackgroundServer.emergencyAccess.updateRecipient(e)
        }), LPProxy.addEmergencyAccessRecipient = (Pe = {
            invite: f,
            nosharingkeys: function(e, r) {
                r.error(Strings.translateString("User is missing sharing keys, please ask them to login to become an emergency contact."))
            }
        }, function(e) {
            e.callbacks = Pe, bg.BackgroundServer.emergencyAccess.addRecipient(e)
        }), LPProxy.revokeEmergencyAccessOffer = function(e) {
            bg.BackgroundServer.emergencyAccess.removeRecipient(e)
        }, LPProxy.getEmergencyAccessRecipientInfo = (pe = function(e) {
            for (var r = [], t = 0, n = e.length; t < n; ++t) {
                var o = e[t];
                if (o.username) {
                    var a = C[o.username];
                    a ? a.refresh(o) : (a = new EmergencyAccessRecipient(o), LPProxy.addItem(a)), r.push(a.newDisplayObject())
                }
            }
            return r
        }, function(r, e) {
            bg.BackgroundServer.emergencyAccess.getRecipientInfo({
                params: {
                    email: bg.get("g_username")
                },
                success: function(e) {
                    r(pe(e))
                },
                error: e
            })
        }), LPProxy.getEmergencyAccessSharerInfo = (ye = function(e) {
            for (var r = [], t = 0, n = e.length; t < n; ++t) {
                var o = e[t];
                if (o.username) {
                    var a = D[o.username];
                    a ? a.refresh(o) : (a = new EmergencyAccessSharer(o), LPProxy.addItem(a)), r.push(a.newDisplayObject())
                }
            }
            return r
        }, a(function(r, e) {
            bg.BackgroundServer.emergencyAccess.getSharerInfo({
                success: function(e) {
                    r(ye(e))
                },
                error: e
            })
        })), LPProxy.acceptEmergencyAccessOffer = function(e) {
            bg.BackgroundServer.emergencyAccess.acceptOffer(e)
        }, LPProxy.declineEmergencyAccessOffer = function(e) {
            bg.BackgroundServer.emergencyAccess.declineOffer(e)
        }, LPProxy.requestEmergencyAccess = (me = {
            linked: function(e, r) {
                r.error(Strings.translateString("This account is already linked"))
            },
            denied: function(e, r) {
                r.error(Strings.translateString("You do not have permission to link this account"))
            },
            successLinked: function(e, r) {
                Topics.get(Topics.SUCCESS).publish(Strings.translateString("Access granted")), r.success(e)
            },
            successGranted: function(e, r) {
                Topics.get(Topics.SUCCESS).publish(Strings.translateString("Access will be granted on %1", new EmergencyAccessSharer(e).getAccessDateAsString())), r.success(e)
            }
        }, function(e) {
            e.callbacks = me, bg.BackgroundServer.emergencyAccess.requestAccess(e)
        }), LPProxy.unlinkEmergencyAccessAccount = function(e) {
            bg.BackgroundServer.emergencyAccess.unlinkAccount(e)
        }, LPProxy.denyEmergencyAccess = function(e) {
            bg.BackgroundServer.emergencyAccess.denyAccess(e)
        }, LPProxy.getVersion = function() {
            return bg.lpversion || bg.get("lpversion")
        }, LPProxy.generateSharingKeys = function(r) {
            bg.generateSharingKeysFromVault(function(e) {
                e ? Topics.get(Topics.ERROR).publish(Strings.translateString(e)) : Topics.get(Topics.SUCCESS).publish(Strings.translateString("Sharing keys generated.")), r()
            })
        }, LPProxy.deleteCreditMonitoringAlert = a(function(e, r, t) {
            LPPlatform.ajax({
                type: "POST",
                url: LPProxy.getBaseURL() + "creditmon.php",
                dataType: "text",
                data: {
                    src: "website",
                    cmd: "deletealert",
                    id: e,
                    token: J,
                    _dc: (new Date).getTime()
                },
                success: d(t, {
                    ok: r
                }),
                error: l(t)
            })
        }), LPProxy.getSiteMeta = function(e, r, t) {
            bg.LPServer.jsonRequest({
                type: "GET",
                url: "typeahead_addsite.php",
                data: {
                    q: e
                },
                success: r,
                error: t
            })
        }, LPProxy.getFamilyMembers = function(e) {
            bg.BackgroundServer.families.getMembers(e)
        }, LPProxy.getCustomNoteTemplates = function() {
            return bg.get("g_note_templates")
        }, LPProxy.getCustomNoteTemplate = function(r) {
            return LPProxy.getCustomNoteTemplates().find(function(e) {
                return e.id == r
            })
        }, LPProxy.familiesExistingUserTrial = function(e) {
            bg.BackgroundServer.families.existingUserTrial(e)
        }, LPProxy.saveCustomNoteTemplate = function(e) {
            bg.BackgroundServer.sitesAndNotes.saveCustomNoteTemplate(e)
        }, LPProxy.deleteCustomNoteTemplate = function(e) {
            bg.BackgroundServer.sitesAndNotes.deleteCustomNoteTemplate(e)
        }, LPProxy.getFamiliesInvitations = function(e) {
            bg.BackgroundServer.families.getInvitations(e)
        }, LPProxy.dismissInvitation = function(e) {
            bg.BackgroundServer.invitation.dismissInvitation(e)
        }, LPProxy.acceptInvitation = function(e) {
            bg.BackgroundServer.invitation.acceptInvitation(e)
        }, LPProxy.sendMobileDownload = function(e) {
            bg.BackgroundServer.transact.sendMobileDownload(e)
        }
    }();
//# sourceMappingURL=sourcemaps/controller.js.map