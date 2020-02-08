var SiteDialog = function(t) {
    Topics.get(Topics.CONTENT_SCRIPT_ADD_SITE_DIALOG_OPENED).publish(), DialogWithGroupInput.call(this, t, {
        confirmOnClose: !1,
        hideButtons: !0,
        hideHeader: !0,
        type: Account,
        additionalClasses: "lmiDialog",
        additionalDropdownClasses: "lmiDropdown"
    }), this.tiles = [], this.activeTile = null, this.selectedTile = null, this.isSelectable = !1, this.submitted = !1
};
SiteDialog.prototype = Object.create(DialogWithGroupInput.prototype), SiteDialog.prototype.constructor = SiteDialog,
    function() {
        var k = function(t, e, i) {
            var a = $.extend(null, t.data, {
                action: i,
                saveSiteEvent: e
            });
            bg.LPModule.callService("Segment", "sendTypedEvent", ["SaveSiteDialog", a], function(t) {
                t && console.error(t)
            })
        };
        SiteDialog.prototype.initialize = function(i) {
            var a;
            DialogWithGroupInput.prototype.initialize.apply(this, arguments), a = this, i.on("click", ".neverSave", function() {
                a.data.generatedPasswordSaved && a.deleteItem(), bg.handleNeverURL({
                    action: "never",
                    cmd: "neverdomain",
                    url: a.data.defaultData.url,
                    fromsave: !0
                }), k(a, "SaveSiteDialogAction", "Never"), bg.IntroTutorial.getState(function(t) {
                    for (var e = !1, i = 0; i < t.domains.length; i++) a.data.defaultData.url.includes(t.domains[i]) && (e = !0);
                    t.enabled && e ? bg.IntroTutorial.completeTutorial({
                        textChoice: "skipped"
                    }) : bg.IntroTutorial.resetState(), a.close()
                })
            }), i.on("input change", function() {
                a.data.generatedPasswordSaved && (a.nextButton.text(Strings.translateString("Update")), a.data.inputChanged = !0), bg.Policies.getAccountSelectionBasedOnEmail(function(t) {
                    t && bg.getLinkedAccount(function(t) {
                        var e = a.getData();
                        t && e.unencryptedUsername === bg.get("g_username") && -1 !== e.group.indexOf(t.group) ? i.find("#submit").attr("disabled", "disabled") : i.find("#submit").removeAttr("disabled")
                    })
                })
            }), a.backButton = i.find("#close").bind("click", function() {
                a.data.generatedPassword ? a.data.generatedPasswordSaved ? (a.data.matchingSites && 0 === a.data.matchingSites.length ? a.$element.find("#undo").text(Strings.translateString("Yes, remove")) : a.$element.find("#undo").text(Strings.translateString("Yes, undo")), a.dialogContent.css({
                    height: a.dialogContent.css("height")
                }), a.$element.addClass("removeGeneratedConfirmation")) : (k(a, "SaveSiteDialogAction", "NotNow"), a.close()) : (k(a, "SaveSiteDialogAction", "NotNow"), bg.IntroTutorial.getState(function(t) {
                    for (var e = !1, i = 0; i < t.domains.length; i++) a.data.defaultData.url.includes(t.domains[i]) && (e = !0);
                    t.enabled && e ? bg.IntroTutorial.completeTutorial({
                        textChoice: "skipped"
                    }) : bg.IntroTutorial.resetState(), a.close()
                }))
            }), a.nextButton = i.find("#submit").bind("click", function() {
                a.isSelectable ? a.selectedTile && a.submit() : a.submit()
            }), i.find("#closeConfirmation").bind("click", function() {
                k(a, "SaveSiteDialogAction", "OK"), a.close()
            }), i.find("#undo").bind("click", function() {
                k(a, "SaveSiteDialogAction", "Undo"), a.data.matchingSites && 0 === a.data.matchingSites.length ? a.deleteItem(function() {
                    a.close()
                }) : a.revertPasswordChange(function() {
                    a.close()
                })
            }), i.find(".addNewSiteButton").bind("click", function() {
                k(a, "SaveSiteDialogNewClicked");
                var t = a.tiles.slice();
                a.defaultFields(a.data), a.originalData = a.getData(), a.populateFields(a.data.dialogData);
                var e = a.setupAdd();
                a.setSelectable(!1), $(this).LP_hide();
                for (var i = 0; i < t.length; ++i) t[i].remove();
                e.showDetails({
                    animate: !1,
                    clearErrors: !0,
                    tileHeight: "auto"
                })
            }), i.find(".updateAnotherSiteButton").bind("click", function() {
                k(a, "SaveSiteDialogAnotherClicked");
                var t = a.tiles.slice();
                $(this).LP_hide();
                for (var e = 0; e < t.length; ++e) t[e].remove();
                a.setupUpdateAnother()
            })
        };
        var i = function(t) {
                for (var e = {}, i = t.find("[dialogFieldDisplay]"), a = 0; a < i.length; ++a) {
                    var n;
                    e[i[a].getAttribute("dialogFieldDisplay")] = !0
                }
                return e
            },
            I = function(t, e) {
                for (var i = t.find("[dialogFieldDisplay]"), a = 0; a < i.length; ++a) {
                    var n = i[a],
                        o = e[n.getAttribute("dialogFieldDisplay")];
                    o && (n.textContent = o)
                }
            };
        SiteDialog.prototype.deleteItem = function(t) {
            this.vaultItem.deleteItem({
                confirm: !1,
                success: t
            })
        }, SiteDialog.prototype.revertPasswordChange = function(t) {
            this.vaultItem.revertPasswordChange({
                confirm: !1,
                success: t
            })
        }, SiteDialog.prototype.setupAdd = function(t) {
            t = t || this.data, this.$element.find(".question").text(Strings.translateString("Add to LastPass?")), this.nextButton.text(Strings.translateString("Add")), this.$element.find(".updateAnotherSiteButton").LP_hide();
            var e = new this.SiteTile;
            return t.defaultData.unencryptedUsername || e.showDetails({
                animate: !1,
                clearErrors: !0,
                tileHeight: "auto"
            }), e
        }, SiteDialog.prototype.setupUpdateAnother = function(t) {
            var e;
            t = t || this.data, this.$element.find(".question").text(Strings.translateString("Which account should we update?")), this.nextButton.text(Strings.translateString("Update")), this.$element.find(".addNewSiteButton").LP_hide();
            for (var i = 0; i < t.defaultData.domainSites.length; ++i)(e = new this.SiteTile({
                site: LPProxy.getSiteModel(t.defaultData.domainSites[i])
            })).setSelectable(!0);
            this.hasDuplicates() && this.$element.find(".explanation").text(Strings.translateString("Choose one to update and delete the duplicate.")), this.setFrameSize()
        };
        var O = function(t, e, i) {
                var a = $.extend({}, t.defaultData);
                return e && $.extend(a, e.getFormData($.extend(i, DialogInput.getProperties(t.dialogData), DialogInput.getProperties(t.defaultData)))), a
            },
            A = function(t, e, i) {
                return $.extend(O(t, e, i), t.dialogData)
            },
            t = function(i, a) {
                bg.LPIcons.get({
                    url: i.defaultData.url,
                    square: !0,
                    callback: function(t) {
                        if (t) a(t);
                        else {
                            var e = function() {
                                bg.LPPlatform.getFavicon({
                                    url: i.defaultData.url,
                                    callback: a
                                })
                            };
                            i.sameDomain ? csTop.LPContentScriptTools.getFavicon(function(t) {
                                t ? a(t) : e()
                            }) : e()
                        }
                    }
                })
            };
        SiteDialog.prototype.hasDuplicates = function() {
            if (!this.data.defaultData.unencryptedUsername) return !1;
            for (var t = 0; t < this.tiles.length; ++t)
                if (0 < this.tiles[t].getDuplicates().length) return !0;
            return !1
        }, SiteDialog.prototype.setup = function(n, o) {
            o.saveOptions = {
                source: "saveSite"
            }, n.find(".addSiteFavicon").append(LPTools.createElement("img", {
                class: "favicon",
                src: o.favicon ? o.favicon : "images/site/world.png"
            }));
            var b = this,
                y = n.find(".tileContainer"),
                l = n.find(".question"),
                s = n.find(".explanation"),
                C = n.find(".dialogForm"),
                w = n.find(".tile.template"),
                T = n.find(".deleteOverlayContainer.template"),
                P = i(w),
                x = DialogInput.getProperties(b.inputFields);
            this.csFeatures = bg.get("LPContentScriptFeatures");
            var r = this.SiteTile = function(t) {
                t = t || {};
                var n = this,
                    l = w.clone().removeClass("template"),
                    e = null,
                    o = b.data,
                    i = !1,
                    a = !1,
                    s = null,
                    r = !1,
                    d = O(o, t.site, x),
                    c = A(o, t.site, x),
                    u = null,
                    g = function(t) {
                        t && b.clearErrors(), b.originalData = d, b.populateFields(c)
                    },
                    h, p;
                this.showedPassword = function() {
                    return r
                }, this.getDialogData = function() {
                    return c
                }, this.getOriginalData = function() {
                    return d
                }, this.getOriginalDialogData = function() {
                    return A(o, t.site, x)
                }, this.getDuplicates = function() {
                    if (null === u && (u = [], o.defaultData.unencryptedUsername)) {
                        var i = bg.hostof(c.url),
                            a = n.getDialogData().unencryptedUsername;
                        b.tiles.forEach(function(t) {
                            var e = t.getDialogData();
                            t !== n && bg.hostof(e.url) === i && e.unencryptedUsername === a && u.push(t)
                        })
                    }
                    return u
                }, this.handleHeightChange = (h = function(e, i) {
                    var a = function(t) {
                        t.target === this && (e.unbind("transitionend", a), i())
                    };
                    e.bind("transitionend", a)
                }, p = function(a, e) {
                    a = a || {};
                    var n = LPTools.getOption(a, "animate", !0),
                        i = "animating";
                    n && (a.animationClass && (i += " " + a.animationClass), l.addClass(i));
                    var o = function(t) {
                        l.removeClass(i), t && t.transitionEndHandler && t.transitionEndHandler(), e({
                            callback: t && t.onFrameResizeComplete
                        })
                    };
                    a.change(function(t) {
                        var e = LPTools.getOption(t, "tileHeight", LPTools.getOption(a, "tileHeight", l.children().first().outerHeight())),
                            i = l.height();
                        return l.css("height", e), e !== i && n ? h(l, function() {
                            o(t)
                        }) : o(t), e
                    })
                }, function(e) {
                    LPTools.getOption(e, "animate", !0) ? b.requestAnimationFrame(function(t) {
                        p(e, t)
                    }) : p(e, function(t) {
                        b.setFrameSize(), t && t.callback && t.callback()
                    })
                }), this.showDetails = function(i) {
                    this.handleHeightChange($.extend(i, {
                        animationClass: "details-animatation",
                        change: function(t) {
                            null === s && (s = l.height()), b.activeTile && b.activeTile !== n && b.activeTile.hideDetails(i), b.activeTile = n, g(i && i.clearErrors), l.find(".tileContent").append(C), l.addClass("details");
                            var e = t();
                            b.clickedEdit || (b.clickedEdit = !0, b.adjustView(!0), b.adjustScrollHeight(e - s))
                        }
                    }))
                }, this.preSubmit = function() {
                    b.activeTile !== this && (b.activeTile && (b.activeTile.hideDetails(), b.activeTile = null), g()), b.vaultItem = t.site, !b.vaultItem && o.dialogData.fields && (o.saveOptions.saveFromSubmit = !0)
                }, this.hideDetails = function(t) {
                    c = b.getData();
                    var e = C.clone();
                    this.handleHeightChange($.extend(t, {
                        animationClass: "details-animatation",
                        change: function(t) {
                            l.find(".tileContent").append(e), l.removeClass("details"), t({
                                transitionEndHandler: function() {
                                    e.remove()
                                },
                                tileHeight: s
                            })
                        }
                    }))
                }, this.unselect = function() {
                    i && (b.selectedTile = null, i = !1, l.removeClass("selected"), b.$element.removeClass("selected"), b.nextButton.prop("disabled", !0))
                }, this.toggleSelect = function() {
                    i ? (this.unselect(), this.getDuplicates().forEach(function(t) {
                        t.hideDeleteOverlay()
                    })) : (this.getDuplicates().forEach(function(t) {
                        t.showDeleteOverlay()
                    }), b.tiles.forEach(function(t) {
                        t.unselect()
                    }), b.selectedTile = this, i = !0, l.addClass("selected"), b.$element.addClass("selected"), b.nextButton.prop("disabled", !1), k(b, "SaveSiteDialogSelectClicked"))
                }, this.remove = function() {
                    l.remove();
                    for (var t = 0; t < b.tiles.length; ++t)
                        if (b.tiles[t] === this) {
                            b.tiles.splice(t, 1);
                            break
                        }
                }, this.showDeleteOverlay = function() {
                    null === e && ((e = T.clone().removeClass("template")).find(".cancelDeleteButton").bind("click", function() {
                        k(b, "SaveSiteDialogDuplicateKeepClicked"), n.hideDeleteOverlay()
                    }), e.find(".deleteButton").bind("click", function() {
                        k(b, "SaveSiteDialogDuplicateDeleteClicked"), t.site.deleteItem({
                            confirm: !1,
                            success: function() {
                                n.remove()
                            }
                        }), n.hideDeleteOverlay()
                    })), l.append(e), l.addClass("duplicate")
                }, this.hideDeleteOverlay = function() {
                    l.removeClass("duplicate"), e.one("animationend", function() {
                        l.hasClass("duplicate") || e.detach()
                    })
                }, this.setSelectable = function(t) {
                    a = t;
                    var e = l.find(".favicon");
                    a ? (e.addClass("hoverFadeOut"), l.find(".checkmark").LP_show()) : (e.removeClass("hoverFadeOut"), l.find(".checkmark").LP_hide()), b.setSelectable(t)
                };
                var f = l.find(".circle"),
                    m = function() {
                        f.addClass("circleHover")
                    },
                    S = function() {
                        f.removeClass("circleHover")
                    },
                    v = l.find(".tileEditCell"),
                    D = null;
                v.bind("mouseenter", function() {
                    clearTimeout(D), D = setTimeout(m, 50)
                }), v.bind("mouseleave", function() {
                    clearTimeout(D), D = setTimeout(S, 50)
                }), l.find(".tileEditCell").bind("click", function() {
                    k(b, "SaveSiteDialogEditClicked"), n.showDetails({
                        clearErrors: !0
                    })
                }), l.find(".tileEditCell").addClass("showCell"), l.find(".checkmark").bind("click", function() {
                    n.toggleSelect()
                }), l.on("click", ".showPassword", function() {
                    r = !0
                }), y.append(l), I(l, t.site ? t.site.getFormData(P) : o.defaultData), b.tiles.push(this)
            };
            if (SiteDialog.prototype.setSiteDialogMessage = function(t, e) {
                    var i = !1;
                    if (1 < t.length) {
                        for (var a = 0; a < t.length; ++a) new r({
                            site: LPProxy.getSiteModel(t[a])
                        }).setSelectable(!0);
                        l.text(Strings.translateString("Which account should we update?")), this.hasDuplicates() && s.text(Strings.translateString("Choose one to update and delete the duplicate.")), n.find(".addNewSiteButton").LP_show(), this.nextButton.text(Strings.translateString("Update")), i = !0
                    } else 1 === t.length ? (o.generatedPasswordSaved ? (l.text(Strings.translateString("We've updated your password")), this.nextButton.text(Strings.translateString("OK")), this.backButton.text(Strings.translateString("Undo"))) : (l.text(Strings.translateString("Update password?")), this.nextButton.text(Strings.translateString("Update")), n.find(".addNewSiteButton").LP_show()), o.vaultItem = LPProxy.getSiteModel(t[0]), new r({
                        site: o.vaultItem
                    }), i = !0) : e && (o.generatedPasswordSaved ? (l.text(Strings.translateString("This site has been added to your LastPass vault")), this.nextButton.text(Strings.translateString("OK")), this.backButton.text(Strings.translateString("Remove")), new r({
                        site: o.vaultItem
                    })) : this.setupAdd(o), i = !0);
                    return i
                }, o.matchingSites) {
                var t = !!o.defaultData.unencryptedUsername,
                    e;
                this.setSiteDialogMessage(o.matchingSites, t) || t || this.setSiteDialogMessage(o.defaultData.domainSites, !t)
            }!o.generatedPassword || o.generatedPasswordSaved || o.sameDomain || (l.text(Strings.translateString("Oops! What would you like to do with your generated password?")), this.backButton.text(Strings.translateString("Discard"))), DialogWithGroupInput.prototype.setup.apply(this, arguments), this.inputFields.unencryptedUsername.setValues(LPProxy.getSiteUsernames()), this.inputFields.unencryptedUsername.disableClickToggle()
        }, SiteDialog.prototype.setSelectable = function(t) {
            t ? (this.$element.addClass("selectable"), this.nextButton.prop("disabled", !0)) : (this.$element.removeClass("selectable"), this.nextButton.prop("disabled", !1))
        }, SiteDialog.prototype.validate = function(t) {
            var e = DialogWithGroupInput.prototype.validate.apply(this, arguments);
            return "" === t.unencryptedUsername && (this.addError("unencryptedUsername", Strings.translateString("Please enter a username.")), e = !1), e
        }, SiteDialog.prototype.getDialogActions = function(t) {}, SiteDialog.prototype.close = function(t) {
            bg.LPTabState.clear({
                force: !0
            }), DialogWithGroupInput.prototype.close.apply(this, arguments)
        }, SiteDialog.prototype.open = function(e) {
            var i = this;
            t(e, function(t) {
                e.favicon = t, DialogWithGroupInput.prototype.open.call(i, e)
            })
        }, SiteDialog.prototype.adjustScrollHeight = function(t) {
            this.scrollHeight && (this.scrollHeight += t, this.tileContainer.css({
                "max-height": this.scrollHeight
            }))
        }, SiteDialog.prototype.setInitialScrollHeight = function() {
            if (3 < this.tiles.length) {
                this.tileContainer = this.$element.find(".tileContainer");
                var t = this.tileContainer.height(),
                    e = this.$element.find(".tile").first().height(),
                    i = (t - e * this.tiles.length) / (this.tiles.length - 1);
                this.scrollHeight = 3.5 * e + 3 * i, this.tileContainer.css({
                    overflow: "auto",
                    "max-height": this.scrollHeight
                })
            }
        }, SiteDialog.prototype.showInitial = function() {
            var e;
            (e = this).requestAnimationFrame(function(t) {
                e.show(), e.setInitialScrollHeight(), e.$element.addClass("animate-enter").one("animationend", function() {
                    e.$element.removeClass("animate-enter"), t()
                }), k(e, "SaveSiteDialogViewed")
            })
        };
        var a = null,
            n = !1;
        SiteDialog.prototype.showInProcessOverlay = function() {
            if (this.submitted) {
                var t = this.$element;
                t.addClass("inProcess").one("animationend", function() {
                    t.addClass("waiting"), setTimeout(function() {
                        n = !0, a && a()
                    }, 500)
                })
            }
        }, SiteDialog.prototype.hideInProcessOverlay = function() {
            this.$element.removeClass("inProcess waiting")
        }, SiteDialog.prototype.closeOnSuccess = function() {
            if (this.submitted) {
                var t = this;
                t.$element.addClass("inProcess waiting");
                var e = function() {
                    t.$element.removeClass("waiting").addClass("success").one("animationend.success", function() {
                        setTimeout(function() {
                            t.close()
                        }, 500)
                    })
                };
                n ? e() : a = function() {
                    setTimeout(function() {
                        e()
                    }, 0)
                }
            }
        }, SiteDialog.prototype.performValidate = function(t) {
            var a = this;
            if (a.selectedTile)
                if (a.selectedTile === a.activeTile) a.activeTile.handleHeightChange({
                    change: function(e) {
                        var i = t.callback;
                        t.callback = function() {
                            var t = arguments;
                            e({
                                onFrameResizeComplete: function() {
                                    i && i.apply(a, t)
                                }
                            })
                        }, DialogWithGroupInput.prototype.performValidate.call(a, t)
                    }
                });
                else {
                    var e = t.callback;
                    t.callback = function(t) {
                        t || a.selectedTile.showDetails(), e && e.apply(this, arguments)
                    }, DialogWithGroupInput.prototype.performValidate.call(a, t)
                }
        }, SiteDialog.prototype.getErrorOptions = function() {
            return {
                static: !0,
                alignTop: !0,
                showErrorLabel: !1
            }
        }, SiteDialog.prototype.submit = function() {
            1 === this.tiles.length && (this.selectedTile = this.tiles[0]), this.selectedTile.preSubmit(), DialogWithGroupInput.prototype.submit.apply(this, arguments), this.data.generatedPasswordSaved && !this.data.inputChanged ? k(this, "SaveSiteDialogAction", "OK") : this.vaultItem ? k(this, "SaveSiteDialogAction", "Update") : k(this, "SaveSiteDialogAction", "Add"), bg.LPTabState.clear({
                force: !0
            })
        };
        var e = function(t, e) {
                for (var i = 0; i < t.length; ++i) {
                    var a = t[i];
                    if (a.value === e) return a
                }
                return null
            },
            o = function(e, i) {
                e.fields && e.fields.forEach(function(t) {
                    e.unencryptedUsername && e.unencryptedUsername === t.value && "password" !== t.type ? t.value = i.unencryptedUsername : "password" === t.type && (t.value = i.password)
                })
            },
            l = function(t, e, i) {
                if (i.fields) {
                    o(e, i), o(t, i);
                    var a = e.fields ? e.fields : [];
                    t.fields && (a = a.concat(t.fields.filter(function(t) {
                        for (var e = 0; e < a.length; ++e) {
                            var i = a[e];
                            if (t.type === i.type && t.name === i.name && t.formname === i.formname) return !1
                        }
                        return !0
                    }))), i.fields = a
                }
            };
        SiteDialog.prototype.handleSubmit = function(t) {
            this.submitted = !0, l(this.selectedTile.getOriginalDialogData(), this.selectedTile.getOriginalData(), t), DialogWithGroupInput.prototype.handleSubmit.apply(this, arguments)
        }
    }();
//# sourceMappingURL=sourcemaps/contentScriptSiteDialog.js.map