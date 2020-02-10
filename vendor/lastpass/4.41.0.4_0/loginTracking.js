LPTabState = function() {
    var o = {},
        t = null,
        s = 6e3,
        r = 50;
    LPPlatform.onTabClosed(function(e) {
        delete o[e]
    }), Topics.get(Topics.CLEAR_DATA).subscribe(function() {
        o = {}
    });
    var a = function(e) {
        this.tabID = e.tabID, this.domain = lp_gettld_url(e.tabURL), this.sites = [], this.acccountsVersion = null, this.usernameField = null, this.username = null, this.lastFillSource = null, this.fillSourceCounts = {}, this.formParser = LPModule.getService("FormParser"), this.siteService = LPModule.getService("Site"), this.backgroundTools = LPModule.getService("BackgroundTools"), this.pageLoaded = !1
    };
    a.prototype.getDomainSites = function() {
        if (this.acccountsVersion !== g_local_accts_version) {
            this.sites = [];
            var e = getsites(this.domain);
            for (var t in e) this.sites.push(g_sites[t]);
            this.acccountsVersion = g_local_accts_version
        }
        return this.passwordForm ? reorderOnURL(getsites(this.domain), this.passwordForm.getURL()) : this.sites
    }, a.prototype.getFields = function() {
        var e = [];
        this.passwordForm && (e = this.passwordForm.getFields());
        var t = this.getUsernameField(),
            s;
        t && t.value === this.getUsername() && 0 === e.filter(function(e) {
            return e.name === t.name && e.value === t.value
        }).length && e.unshift(t);
        return e.filter(function(e) {
            return e.id || e.attributes.name
        })
    }, a.prototype.getUsernameField = function() {
        if (!this.usernameField)
            for (var e in o) {
                var t = o[e];
                if (t.usernameField && compare_tlds(t.domain, this.domain)) {
                    this.usernameField = t.usernameField;
                    break
                }
            }
        return this.usernameField
    }, a.prototype.setUsernameField = function(e) {
        e && (this.usernameField = e)
    }, a.prototype.setUsername = function(e) {
        this.username = e, this.timeUsernameLastCached = Date.now()
    }, a.prototype.getUsername = function() {
        var e = 1 < this.sites.length;
        if (!this.username && this.passwordForm && this.setUsername(this.passwordForm.getUsername()), !this.username && !e)
            for (var t in o) {
                var s = o[t];
                if (s.username && compare_tlds(s.domain, this.domain)) {
                    this.setUsername(s.username);
                    break
                }
            }
        return this.username
    }, a.prototype.getLastFillSource = function() {
        return this.lastFillSource
    }, a.prototype.clearFillSource = function() {
        this.lastFillSource = null, this.fillSourceCounts = {}
    }, a.prototype.setLastFillSource = function(e) {
        "Manual" !== (this.lastFillSource = e) && (this.fillSourceCounts.hasOwnProperty(e) || (this.fillSourceCounts[e] = 0), this.fillSourceCounts[e]++)
    }, a.prototype.debouncedSetLastFillSource = null, a.prototype.getFillSourceCounts = function() {
        return this.fillSourceCounts
    };
    var i = function(e, t) {
        switch (t.transitionType) {
            case "auto_subframe":
            case "manual_subframe":
                return !1
        }
        return -1 < t.transitionQualifiers.indexOf("from_address_bar") || -1 < t.transitionQualifiers.indexOf("forward_back")
    };
    a.prototype.processPasswordSubmit = function(e, t) {
        this.passwordForm = this.formParser.parse(e), e.username ? this.setUsername(e.username) : this.passwordForm.getUsername() ? this.setUsername(this.passwordForm.getUsername()) : this.shouldUseCachedUsername() || this.setUsername(null), delete this.isMultiStepLogin, this.setUsernameField(this.passwordForm.getUsernameField()), e.generatedPassword ? this.generatedPassword = e.generatedPassword : LPPlatform.once(LPPlatform.onTransition, function(e) {
            i(this, e) && this.clear()
        }, this)
    }, a.prototype.shouldUseCachedUsername = function() {
        var e = this.username && this.timeUsernameLastCached > new Date(Date.now() + 6e4),
            t, s = 1 === this.getDomainSites().length && this.passwordForm.isChangePasswordForm;
        return !e && (this.isMultiStepLogin || s)
    }, a.prototype.processTextSubmit = function(e, t) {
        var s = this.formParser.parse(e, {
            strict: !0
        });
        0 === this.getMatchingSites(s.getUsername()).length && (this.isMultiStepLogin = !0), this.setUsernameField(s.getUsernameField()), this.setUsername(s.getUsername())
    }, a.prototype.getMatchingSites = function(t, s) {
        var r = this,
            e = r.getDomainSites(),
            i = [],
            t;
        if (t = t || r.getUsername()) i = e.filter(function(e) {
            return this.siteService.hasMatchingSiteUserName(e, t)
        }, this);
        else if (s) i = e.filter(function(e) {
            return null !== this.siteService.findMatchingSitePassword(e, s.password)
        }, this);
        else {
            var o = r.passwordForm && r.passwordForm.getOriginalPassword(),
                a = r.passwordForm ? r.passwordForm.getFormMetaData() : null,
                n = null !== a && 1 === a.uniquePasswords.length;
            o && (i = e.filter(function(e) {
                return null !== this.siteService.findMatchingSitePassword(e, o)
            }, this)), n && r.passwordForm.getPassword() && (i = e.filter(function(e) {
                return null !== this.siteService.findMatchingSitePassword(e, r.passwordForm.getPassword())
            }, this))
        }
        return r.matchingSiteCount = i.length, i
    }, a.prototype.shouldShowNotification = function(e) {
        var t = !1,
            s = this.findMatchingPassword(this.siteService.getSites(e.url), e.password);
        return (e.password !== e.currentPassword || e.originalPassword !== e.currentPassword && "" !== e.originalPassword) && (e.isChangePasswordForm = !0, t = Preferences.get("showChangeNotificationBar")), e.password === e.currentPassword && null === s && (e.isCreateAccountForm = !0, t = Preferences.get("showSaveNotificationBar")), t
    }, a.prototype.findMatchingPassword = function(e, t) {
        for (var s = 0; s < e.length; ++s) {
            var r = this.siteService.findMatchingSitePassword(e[s], t);
            if (r) return r
        }
        return null
    }, a.prototype.shouldShowSiteNotification = function() {
        return !!this.passwordForm && (!!(this.passwordForm.succeeded() || this.passwordForm.isChangePasswordForm() || this.passwordForm.isCreateAccountForm()) && (this.passwordForm.isChangePasswordForm() ? Preferences.get("showChangeNotificationBar") : Preferences.get("showSaveNotificationBar")))
    };
    var n = (l = function(e) {
            var t = "";
            return e.forEach(function(e) {
                t += e.formname + "\t" + encodeURIComponent(e.name) + "\t" + encodeURIComponent(crypto_btoa(e.value)) + "\t" + encodeURIComponent(e.type) + "\n"
            }), bin2hex(t)
        }, function(e, t) {
            if (!(0 == t.length || 100 < e.fields.length)) {
                e.fields = e.fields.concat(t), g_local_accts_version++, rewritelocalfile();
                var s = {
                    data: l(t),
                    ref: url2hex(e.url),
                    updatefields: 1,
                    aid: e.aid
                };
                e.sharedfolderid && (s.sharedfolderid = e.sharedfolderid), e.postdata = new PostParams(s).toString(), e.posturl = base_url + "gm_deliver.php", e.newvalues = t, updateFieldsFromSubmit(e.postdata, e)
            }
        }),
        l, u = function(e) {
            return {
                name: e.attributes.name || e.id,
                type: e.type,
                value: e.value,
                formname: ""
            }
        },
        c = function(e, t) {
            return t === e.unencryptedUsername ? e.username : t === this.siteService.decrypt(e, e.password) ? e.password : lpmenc_acct(t, !0, e, g_shares)
        },
        d, m;
    a.prototype.addFields = function(e) {
        if (this.getUsername()) {
            var o = this,
                t = this.getFields();
            e.forEach(function(r) {
                if (r.fields) {
                    var i = [];
                    t.forEach(function(t) {
                        var s = u(t),
                            e;
                        0 === r.fields.filter(function(e) {
                            return e.name === s.name && (!r.save_all || e.formname === t.formname)
                        }).length && i.push({
                            otherfield: r.save_all,
                            name: s.name,
                            type: s.type,
                            value: c.call(o, r, t.value),
                            checked: !1,
                            formname: r.save_all ? t.formname : "",
                            urid: "0",
                            otherlogin: "0",
                            url: ""
                        })
                    }), n(r, i)
                }
            })
        }
    }, a.prototype.getSiteNotificationData = function(e) {
        if (this.passwordForm) {
            var t = {
                formSubmitted: this.passwordForm.submitted(),
                formSucceeded: this.passwordForm.succeeded()
            };
            if (1 == t.formSubmitted && Topics.get(Topics.PASSWORD_FORM_SUBMITTED).publish({
                    form: this.passwordForm,
                    tabId: e.tabID
                }), this.shouldShowSiteNotification()) {
                var s = this.passwordForm.getFormProfile(),
                    r = this.getMatchingSites(),
                    i = r.filter(function(e) {
                        return null !== this.siteService.findMatchingSitePassword(e, this.passwordForm.getPassword())
                    }, this),
                    o;
                if (0 < i.length) return this.addFields(i), this.clear({
                    force: !0
                }), {};
                if ((t = this.getNotificationTabStateData(r)).defaultData.url = this.passwordForm.shouldSaveFields() ? s.url : hostof(s.url), t.defaultData.unencryptedUsername = this.getUsername(), t.defaultData.realm = s.realm, t.defaultData.domain = lp_gettld_url(e.tabURL), t.dialogData = {
                        password: this.passwordForm.getPassword()
                    }, t.matchingSiteSameSubDomain = 1 === r.length && hostof(r[0].url) === hostof(this.passwordForm.getFormProfile().url), t.sameDomain = compare_tlds(lp_gettld_url(this.passwordForm.getFormProfile().url), lp_gettld_url(e.tabURL)), t.generatedPassword = this.generatedPassword === this.passwordForm.getPassword(), this.passwordForm.shouldSaveFields()) 0 < this.getFields().length && (t.dialogData.fields = this.getFields().map(u))
            } else this.clear();
            return t
        }
        return {}
    }, a.prototype.getNotificationGroupName = function() {
        var e = "",
            t = "";
        g_nofolder_feature_enabled || (t = e = siteCats[this.domain] || "");
        var s = getacct(get_personal_linked()),
            r = Policies.getSaveSiteToPersonal();
        return r && s && -1 === r.indexOf(this.domain) && (t = s.group), Policies.getAccountSelectionBasedOnEmail() && s && this.username === s.group && (t = s.group), "" !== t && "" !== e && t !== e && (t += "\\" + e), t
    }, a.prototype.getNotificationTabStateData = function(e) {
        var t = {};
        t.matchingSites = e.map(function(e) {
            return e.aid
        });
        var s = this.getNotificationGroupName(),
            r = this.getDomainSites().map(function(e) {
                return e.aid
            });
        return t.defaultData = {
            name: this.domain,
            group: s,
            domainSites: r
        }, t
    }, a.prototype.getWebRequestSiteNotificationData = function(e) {
        var t = {
            formSubmitted: !0,
            formSucceeded: !0
        };
        if (this.shouldShowNotification(e)) {
            var s = this.getMatchingSites(e.username, e);
            (t = this.getNotificationTabStateData(s)).showNotification = !0, t.defaultData.url = e.url, t.defaultData.unencryptedUsername = e.username, t.defaultData.domain = lp_gettld_url(e.url), t.dialogData = {
                password: e.currentPassword
            }, t.matchingSiteSameSubDomain = 1 === s.length && hostof(s[0].url) === hostof(e.url), t.sameDomain = compare_tlds(lp_gettld_url(e.url), lp_gettld_url(e.url)), t.generatedPassword = this.generatedPassword === e.password, e.isChangePasswordForm || e.isCreateAccountForm || 0 < e.fields.length && (t.dialogData.fields = e.fields.map(u))
        } else this.clear();
        return t
    }, a.prototype.getFormSubmissionTabState = function() {
        for (var e = this; e;) {
            if (e.passwordForm) return e;
            e = e.previousTabState
        }
        return this
    }, a.prototype.getUsernames = function() {
        return this.getDomainSites().map(function(e) {
            return e.unencryptedUsername
        })
    }, a.prototype.getSiteNotification = (d = function(s, e, t) {
        var r = s.getUsernames();
        e.forEachWindow({
            each: function(e, t) {
                return e.LPContentScriptTools.findText({
                    searches: r,
                    callback: function(e) {
                        s.setUsername(e), t()
                    }
                })
            },
            done: t
        })
    }, m = function(s, e, t) {
        var r = !1,
            i = LPTabs.get({
                tabID: s.tabID
            }),
            o = function() {
                s.passwordForm && (s.passwordForm.succeeded() || s.passwordForm.succeeded(!r), s.passwordForm.succeeded() && !s.passwordForm.getUsername() && 0 < s.getDomainSites().length) ? d(s, i, t) : t()
            };
        if (e) {
            var a = i.getFrame(e.frameID);
            a && a.LPSiteNotification.formExists(s.passwordForm.getFormProfile(), function(e) {
                r = e, o()
            })
        } else s.passwordForm.getFormProfile().top ? i.getTop().LPSiteNotification.formExists(s.passwordForm.getFormProfile(), function(e) {
            r = e, o()
        }) : i.onFramesLoaded(function() {
            i.forEachFrame({
                each: function(e, t) {
                    return e.LPSiteNotification.formExists(s.passwordForm.getFormProfile(), function(e) {
                        r = r || e, t()
                    })
                },
                done: o
            })
        })
    }, function(e, t) {
        if (e.callback) {
            var s = this.getFormSubmissionTabState(),
                r = function() {
                    e.callback(s.getSiteNotificationData(t))
                };
            if (s.passwordForm && s.passwordForm.getPassword()) {
                if (s.domain === this.domain && !s.passwordForm.isBasicAuthentication()) return void m(s, e.source, r);
                s.passwordForm.succeeded(!0)
            }
            r()
        }
    }), a.prototype.clear = function(e) {
        var t = e && e.force,
            s = !0;
        return this.previousTabState && (s = this.previousTabState.clear(e)) && delete this.previousTabState, this.passwordForm && (this.passwordForm.getPassword() === this.generatedPassword && (this.passwordForm.submitted(!1), s = !1), (s || t) && (delete this.passwordForm, delete this.generatedPassword)), s
    }, a.prototype.processBasicAuthentication = function(e) {
        this.passwordForm = this.formParser.parse({
            basicAuthentication: !0,
            url: e.url,
            realm: e.realm,
            username: e.username,
            password: e.password
        })
    }, a.prototype.setLoginRequestRecentlyResolved = function() {
        var e = this;
        e.loginRequestRecentlyResolved && (clearTimeout(e.loginRequestRecentlyResolved), delete e.loginRequestRecentlyResolved), this.loginRequestRecentlyResolved = setTimeout(function() {
            delete e.loginRequestRecentlyResolved
        }, s)
    }, a.prototype.getLoginRequestRecentlyResolved = function() {
        return !!this.loginRequestRecentlyResolved
    };
    var f = function(e) {
            if (!lploggedin) return !1;
            var t = lp_gettld_url(e.tabURL);
            return !hasNeverEnableLP(e.tabURL, t) && !lp_url_is_lastpass(e.tabURL) && !lp_url_is_lastpassext(e.tabURL)
        },
        h = function(e, t) {
            if (e) {
                if (f(e)) {
                    var s = lp_gettld_url(e.tabURL),
                        r = o[e.tabID];
                    if (!r || !compare_tlds(r.domain, lp_gettld_url(e.tabURL))) {
                        var i = o[e.tabID] = new a(e);
                        i.previousTabState = r, r = i
                    }
                    r.neverSave = hasNeverSave(e.tabURL, s), t(r)
                }
            } else LPPlatform.getCurrentTab(function(e) {
                e && h(e.tabDetails, t)
            })
        },
        e = function(e, t) {
            if (e) {
                var s = o[e];
                t(s)
            } else LPPlatform.getCurrentTab(function(e) {
                e && h(e.tabDetails, t)
            })
        },
        p, g, S, w, F, v, b, P, _, U = function(e) {
            h(e, function(e) {
                e.setLoginRequestRecentlyResolved()
            })
        },
        y = function() {
            h(null, function(e) {
                e.clearFillSource()
            })
        },
        R = function(t) {
            h(null, function(e) {
                e.debouncedSetLastFillSource || (e.debouncedSetLastFillSource = e.backgroundTools.debounce(e.setLastFillSource, r, !1)), e.debouncedSetLastFillSource.call(e, t)
            })
        },
        D = function(e) {
            h(null, function(e) {
                e.getLastFillSource()
            })
        },
        L = function() {
            h(null, function(e) {
                e.getFillSourceCounts()
            })
        };
    return {
        getSiteNotification: function(t, s) {
            h(s, function(e) {
                e.getSiteNotification(t, s)
            })
        },
        clear: function(t, e) {
            h(e, function(e) {
                e.clear(t)
            })
        },
        processPasswordSubmit: function(t, s) {
            h(s, function(e) {
                e.neverSave || (e.processPasswordSubmit(t.formData, s), e.getSiteNotification({
                    callback: t.callback,
                    source: s
                }, s), Topics.get(Topics.PROCESSED_FORM_SUBMIT).publish({
                    password: !0,
                    tabId: e.tabID,
                    inputValues: t.formData.fields
                }))
            })
        },
        processTextSubmit: function(t, s) {
            h(s, function(e) {
                e.neverSave || (e.processTextSubmit(t, s), Topics.get(Topics.PROCESSED_FORM_SUBMIT).publish({
                    password: !1,
                    tabId: e.tabID,
                    inputValues: t.fields
                }))
            })
        },
        processBasicAuthentication: function(t, e) {
            h(e, function(e) {
                e.processBasicAuthentication(t)
            })
        },
        getState: function(t, e) {
            var s = {
                enabled: f(e)
            };
            s.enabled ? h(e, function(e) {
                s.usernames = e.getUsernames(), s.formSubmittedFrame = e.passwordForm && !e.passwordForm.getFormProfile().top, t(s)
            }) : t(s)
        },
        getTabState: h,
        getStateByTabId: e,
        getStateByTabIdImmediate: function(e) {
            return e ? o[e] : null
        },
        setLoginRequestRecentlyResolved: U,
        setCopiedGeneratedPassword: function(e) {
            t = e
        },
        getCopiedGeneratedPassword: function(e) {
            e(t)
        },
        clearFillSource: y,
        setLastFillSource: R,
        getLastFillSource: D,
        getFillSourceCounts: L
    }
}();
//# sourceMappingURL=sourcemaps/loginTracking.js.map