(function() {
    "use strict";
    var i = this,
        e, t, r, f, n, s, m, v, y, g, h, b, o, c, S;

    function w(e, t) {
        return o.call(e, t)
    }

    function a(e, t) {
        var i, r, o, n, s, c, a, u, l, p, d, f, m = t && t.split("/"),
            v = h.map,
            y = v && v["*"] || {};
        if (e) {
            for (s = (e = e.split("/")).length - 1, h.nodeIdCompat && S.test(e[s]) && (e[s] = e[s].replace(S, "")), "." === e[0].charAt(0) && m && (e = (f = m.slice(0, m.length - 1)).concat(e)), l = 0; l < e.length; l++)
                if ("." === (d = e[l])) e.splice(l, 1), l -= 1;
                else if (".." === d) {
                if (0 === l || 1 === l && ".." === e[2] || ".." === e[l - 1]) continue;
                0 < l && (e.splice(l - 1, 2), l -= 2)
            }
            e = e.join("/")
        }
        if ((m || y) && v) {
            for (l = (i = e.split("/")).length; 0 < l; l -= 1) {
                if (r = i.slice(0, l).join("/"), m)
                    for (p = m.length; 0 < p; p -= 1)
                        if (o = (o = v[m.slice(0, p).join("/")]) && o[r]) {
                            n = o, c = l;
                            break
                        } if (n) break;
                !a && y && y[r] && (a = y[r], u = l)
            }!n && a && (n = a, c = u), n && (i.splice(0, c, n), e = i.join("/"))
        }
        return e
    }

    function _(t, i) {
        return function() {
            var e = c.call(arguments, 0);
            return "string" != typeof e[0] && 1 === e.length && e.push(null), s.apply(f, e.concat([t, i]))
        }
    }

    function u(t) {
        return function(e) {
            return a(e, t)
        }
    }

    function P(t) {
        return function(e) {
            y[t] = e
        }
    }

    function x(e) {
        if (w(g, e)) {
            var t = g[e];
            delete g[e], b[e] = !0, n.apply(f, t)
        }
        if (!w(y, e) && !w(b, e)) throw new Error("No " + e);
        return y[e]
    }

    function l(e) {
        var t, i = e ? e.indexOf("!") : -1;
        return -1 < i && (t = e.substring(0, i), e = e.substring(i + 1, e.length)), [t, e]
    }

    function M(e) {
        return e ? l(e) : []
    }

    function p(e) {
        return function() {
            return h && h.config && h.config[e] || {}
        }
    }
    y = {}, g = {}, h = {}, b = {}, o = Object.prototype.hasOwnProperty, c = [].slice, S = /\.js$/, m = function(e, t) {
        var i, r = l(e),
            o = r[0],
            n = t[1];
        return e = r[1], o && (i = x(o = a(o, n))), o ? e = i && i.normalize ? i.normalize(e, u(n)) : a(e, n) : (o = (r = l(e = a(e, n)))[0], e = r[1], o && (i = x(o))), {
            f: o ? o + "!" + e : e,
            n: e,
            pr: o,
            p: i
        }
    }, v = {
        require: function(e) {
            return _(e)
        },
        exports: function(e) {
            var t = y[e];
            return void 0 !== t ? t : y[e] = {}
        },
        module: function(e) {
            return {
                id: e,
                uri: "",
                exports: y[e],
                config: p(e)
            }
        }
    }, n = function(e, t, i, r) {
        var o, n, s, c, a, u, l = [],
            p = typeof i,
            d;
        if (u = M(r = r || e), "undefined" == p || "function" == p) {
            for (t = !t.length && i.length ? ["require", "exports", "module"] : t, a = 0; a < t.length; a += 1)
                if ("require" === (n = (c = m(t[a], u)).f)) l[a] = v.require(e);
                else if ("exports" === n) l[a] = v.exports(e), d = !0;
            else if ("module" === n) o = l[a] = v.module(e);
            else if (w(y, n) || w(g, n) || w(b, n)) l[a] = x(n);
            else {
                if (!c.p) throw new Error(e + " missing " + n);
                c.p.load(c.n, _(r, !0), P(n), {}), l[a] = y[n]
            }
            s = i ? i.apply(y[e], l) : void 0, e && (o && o.exports !== f && o.exports !== y[e] ? y[e] = o.exports : s === f && d || (y[e] = s))
        } else e && (y[e] = i)
    }, e = t = s = function(e, t, i, r, o) {
        if ("string" == typeof e) return v[e] ? v[e](t) : x(m(e, M(t)).f);
        if (!e.splice) {
            if ((h = e).deps && s(h.deps, h.callback), !t) return;
            t.splice ? (e = t, t = i, i = null) : e = f
        }
        return t = t || function() {}, "function" == typeof i && (i = r, r = o), r ? n(f, e, t, i) : setTimeout(function() {
            n(f, e, t, i)
        }, 4), s
    }, s.config = function(e) {
        return s(e)
    }, e._defined = y, (r = function(e, t, i) {
        if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
        t.splice || (i = t, t = []), w(y, e) || w(g, e) || (g[e] = [e, t, i])
    }).amd = {
        jQuery: !0
    };
    var I = this && this.__awaiter || function(n, s, c, a) {
            return new(c = c || Promise)(function(e, t) {
                function i(e) {
                    try {
                        o(a.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    try {
                        o(a.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function o(t) {
                    t.done ? e(t.value) : new c(function(e) {
                        e(t.value)
                    }).then(i, r)
                }
                o((a = a.apply(n, s || [])).next())
            })
        },
        F = this && this.__generator || function(e, i) {
            var r = {
                    label: 0,
                    sent: function() {
                        if (1 & s[0]) throw s[1];
                        return s[1]
                    },
                    trys: [],
                    ops: []
                },
                o, n, s, t;
            return t = {
                next: c(0),
                throw: c(1),
                return: c(2)
            }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                return this
            }), t;

            function c(t) {
                return function(e) {
                    return a([t, e])
                }
            }

            function a(t) {
                if (o) throw new TypeError("Generator is already executing.");
                for (; r;) try {
                    if (o = 1, n && (s = 2 & t[0] ? n.return : t[0] ? n.throw || ((s = n.return) && s.call(n), 0) : n.next) && !(s = s.call(n, t[1])).done) return s;
                    switch (n = 0, s && (t = [2 & t[0], s.value]), t[0]) {
                        case 0:
                        case 1:
                            s = t;
                            break;
                        case 4:
                            return r.label++, {
                                value: t[1],
                                done: !1
                            };
                        case 5:
                            r.label++, n = t[1], t = [0];
                            continue;
                        case 7:
                            t = r.ops.pop(), r.trys.pop();
                            continue;
                        default:
                            if (!(s = 0 < (s = r.trys).length && s[s.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                r = 0;
                                continue
                            }
                            if (3 === t[0] && (!s || t[1] > s[0] && t[1] < s[3])) {
                                r.label = t[1];
                                break
                            }
                            if (6 === t[0] && r.label < s[1]) {
                                r.label = s[1], s = t;
                                break
                            }
                            if (s && r.label < s[2]) {
                                r.label = s[2], r.ops.push(t);
                                break
                            }
                            s[2] && r.ops.pop(), r.trys.pop();
                            continue
                    }
                    t = i.call(e, r)
                } catch (e) {
                    t = [6, e], n = 0
                } finally {
                    o = s = 0
                }
                if (5 & t[0]) throw t[1];
                return {
                    value: t[0] ? t[1] : void 0,
                    done: !0
                }
            }
        },
        d = this && this.__decorate || function(e, t, i, r) {
            var o = arguments.length,
                n = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, i) : r,
                s;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, i, r);
            else
                for (var c = e.length - 1; 0 <= c; c--)(s = e[c]) && (n = (o < 3 ? s(n) : 3 < o ? s(t, i, n) : s(t, i)) || n);
            return 3 < o && n && Object.defineProperty(t, i, n), n
        },
        T = this && this.__extends || (k = function(e, t) {
            return (k = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
                })(e, t)
        }, function(e, t) {
            function i() {
                this.constructor = e
            }
            k(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
        }),
        k;
    r("common/services/form-detection/form-profile", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }), r("common/services/form-detection/index", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }), r("common/interfaces/feature.repository", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }), r("common/interfaces/repository", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }), r("common/interfaces/segment.service", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }), r("common/enums/feature-type", ["require", "exports"], function(e, t) {
        var i, r;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), (r = i = t.FeatureType || (t.FeatureType = {})).BetterGeneratePasswordEnabled = "better_generate_password_enabled", r.Block30 = "block_3_0", r.EmergencyAccessRestricted = "emergency_access_restricted", r.FamilyLegacySharedFoldersEnabled = "family_legacy_shared_folders_enabled", r.FamilySharedFoldersEnabled = "family_shared_folders_enabled", r.FormfillMigration = "formfill_migration", r.Freamon = "freamon", r.IntroTutorialVersion = "intro_tutorial_version", r.IsDogfood = "isDogfood", r.IsMobileActive = "is_mobile_active", r.OmarDrawer = "omardrawer", r.OmarIa = "omaria", r.OmarInfieldB = "omar_infield_b", r.OmarInfieldC = "omar_infield_c", r.OneToOneSharingRestricted = "one_to_one_sharing_restricted", r.PasswordSubmittedEvent = "password_submitted_event", r.Pdkdf2IterationsMigration = "pbkdf2_iterations_migration", r.Retire30 = "retire_3_0", r.TryFamiliesEnabled = "try_families_enabled", r.Ziggy = "ziggy"
    }), r("common/enums/fill-source-type", ["require", "exports"], function(e, t) {
        var i, r;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), (r = i = t.FillSourceType || (t.FillSourceType = {})).Autofill = "Autofill", r.Infield = "Infield", r.IconDropdown = "Icon Dropdown", r.Vault = "Vault", r.ContextMenu = "Context Menu", r.HotKey = "HotKey", r.Generated = "Generated", r.Manual = "Manual"
    }), r("common/enums/repository-type", ["require", "exports"], function(e, t) {
        var i, r;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), (r = i = t.RepositoryType || (t.RepositoryType = {})).Feature = "Feature"
    }), r("common/enums/resolver-type", ["require", "exports"], function(e, t) {
        var i, r;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), (r = i = t.ResolverType || (t.ResolverType = {})).PasswordSubmitted = "Password Submitted", r.InjectedPasswordSubmitted = "Injected Password Submitted"
    }), r("common/enums/save-site-action", ["require", "exports"], function(e, t) {
        var i, r;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), (r = i = t.SaveSiteAction || (t.SaveSiteAction = {})).Add = "Add", r.OK = "OK", r.Update = "Update", r.NotNow = "Not Now", r.Undo = "Undo", r.Never = "Never"
    }), r("common/enums/save-site-event-type", ["require", "exports"], function(e, t) {
        var i, r;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), (r = i = t.SaveSiteDialogEventType || (t.SaveSiteDialogEventType = {})).SaveSiteDialogAction = "Save a Site Action Clicked", r.SaveSiteDialogDuplicateDeleteClicked = "Save a Site Duplicate Delete Clicked", r.SaveSiteDialogDuplicateKeepClicked = "Save a Site Duplicate Keep Clicked", r.SaveSiteDialogEditClicked = "Save a Site Edit Clicked", r.SaveSiteDialogNewClicked = "Save a Site New Clicked", r.SaveSiteDialogSelectClicked = "Save a Site Select Clicked", r.SaveSiteDialogViewed = "Save a Site Viewed", r.SaveSiteDialogAnotherClicked = "Save a Site Another Clicked"
    }), r("common/enums/segment-event-type", ["require", "exports"], function(e, t) {
        var i, r;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), (r = i = t.SegmentEventType || (t.SegmentEventType = {})).SaveSiteDialog = "savesitedialog", r.ExtensionMenuItemClicked = "extensionMenuItemClicked", r.FeedbackGoalClicked = "feedbackGoalClicked", r.FeedbackIssueClicked = "feedbackIssueClicked", r.CrossDomainFillWarningShown = "crossdomainfillwarningshown", r.FeedbackSent = "feedbacksent"
    }), r("common/enums/service-type", ["require", "exports"], function(e, t) {
        var i, r;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), (r = i = t.ServiceType || (t.ServiceType = {})).BasicAuth = "BasicAuth", r.ContentScriptTools = "ContentScriptTools", r.BackgroundTools = "BackgroundTools", r.DomUtils = "DomUtils", r.FormDetection = "FormDetection", r.FormParser = "FormParser", r.Segment = "Segment", r.Site = "Site", r.StringUtils = "StringUtils", r.Topic = "Topic", r.WebRequest = "WebRequest", r.WebRequestShim = "WebRequestShim", r.SiteNotification = "SiteNotification"
    }), r("common/enums/topic-type", ["require", "exports", "common/legacy"], function(e, t, i) {
        var r, o;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), (o = r = t.TopicType || (t.TopicType = {}))[o.ClearData = i.LegacyGlobalCommon.Topics.CLEAR_DATA] = "ClearData", o[o.FilledGeneratedPassword = i.LegacyGlobalCommon.Topics.FILLED_GENERATED_PW] = "FilledGeneratedPassword", o[o.Initialized = i.LegacyGlobalCommon.Topics.INITIALIZED] = "Initialized", o[o.Login = i.LegacyGlobalCommon.Topics.LOGIN] = "Login", o[o.LoginFinished = i.LegacyGlobalCommon.Topics.LOGIN_FINISHED] = "LoginFinished", o[o.ProcessedFormSubmit = i.LegacyGlobalCommon.Topics.PROCESSED_FORM_SUBMIT] = "ProcessedFormSubmit", o[o.RequestFrameworkInitialized = i.LegacyGlobalCommon.Topics.REQUEST_FRAMEWORK_INITIALIZED] = "RequestFrameworkInitialized", o[o.PasswordFormSubmitted = i.LegacyGlobalCommon.Topics.PASSWORD_FORM_SUBMITTED] = "PasswordFormSubmitted"
    }), r("common/enums/index", ["require", "exports", "common/enums/feature-type", "common/enums/fill-source-type", "common/enums/repository-type", "common/enums/resolver-type", "common/enums/save-site-action", "common/enums/save-site-event-type", "common/enums/segment-event-type", "common/enums/service-type", "common/enums/topic-type"], function(e, i, t, r, o, n, s, c, a, u, l) {
        function p(e) {
            for (var t in e) i.hasOwnProperty(t) || (i[t] = e[t])
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), p(t), p(r), p(o), p(n), p(s), p(c), p(a), p(u), p(l)
    }), r("common/interfaces/segment-event", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }), r("common/interfaces/serializable-callback", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }), r("common/interfaces/serializable-value", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }), r("common/interfaces/service", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }), r("common/interfaces/web-request-shim.service", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }), r("common/interfaces/web-request.service", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }), r("common/interfaces/sitenotification.service", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }), r("common/interfaces/index", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }), r("background/interfaces/content-script-target", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }), r("background/legacy", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.LegacyGlobal = i
    }), r("background/services/form-parser/field-parsers/field-parser.abstract", ["require", "exports", "background/legacy"], function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = (o.getFormFieldRegex = function(e) {
            var t = i.LegacyGlobal.get_ff_translation(e) || this.FormFieldRegex[e];
            if (t) return new RegExp(t)
        }, o.regexMatches = function(t, e) {
            var i = !1;
            if (t) {
                var r = function(e, t) {
                    return "string" == typeof t && e.test(t.toLowerCase())
                };
                Array.isArray(e) ? e.forEach(function(e) {
                    return i = i || r(t, e)
                }) : i = r(t, e)
            }
            return i
        }, o.prototype.parse = function(e, t) {
            for (var i = null, r = 0, o = this.operations; r < o.length; r++) {
                var n;
                if ((i = (0, o[r])(e, t)) || !1 === i) break
            }
            return i
        }, o.FormFieldRegex = {
            ff_otp_regexp: "(?:otc|otp|pin|token|rsa|totp)|(validation|verification|challenge|mfa).*code"
        }, o);

        function o() {
            this.operations = []
        }
        t.FieldParserAbstract = r
    }), r("background/services/form-parser/form-meta-data", ["require", "exports", "background/services/form-parser/field-parsers/field-parser.abstract"], function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = (o.prototype.aggregateField = function(e, t, i) {
            var r = i[t];
            r ? ++r.count : i[t] = {
                field: e,
                count: 1
            }
        }, o.prototype.isOneTimePasswordField = function(e) {
            return e && i.FieldParserAbstract.regexMatches(i.FieldParserAbstract.getFormFieldRegex("ff_otp_regexp"), [e.id, e.attributes.name, e.label])
        }, o);

        function o(e) {
            var t = this;
            this.passwordsByValue = {}, this.textFieldsByValue = {}, this.textFieldsByType = {}, this.uniqueTextValues = [], this.uniquePasswords = [], e.fields && (e.fields.forEach(function(e) {
                "password" !== e.type || "" === e.value || t.isOneTimePasswordField(e) ? (t.aggregateField(e, e.value, t.textFieldsByValue), t.aggregateField(e, e.type, t.textFieldsByType)) : t.aggregateField(e, e.value, t.passwordsByValue)
            }), this.uniqueTextValues = Object.keys(this.textFieldsByValue), this.uniquePasswords = Object.keys(this.passwordsByValue))
        }
        t.FormMetaData = r
    }), r("background/interfaces/parsed-form", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }), r("background/interfaces/index", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }), r("background/interfaces/legacy", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }), r("common/interfaces/legacy", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }), r("common/legacy", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.LegacyGlobalCommon = i
    }), r("common/module.abstract", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = (r.prototype.isInitialized = function(e) {
            this._isInitialized ? e() : this.initializedQueue.push(e)
        }, r);

        function r() {
            var e = this;
            this._isInitialized = !1, this.initializedQueue = [], setTimeout(function() {
                return I(e, void 0, void 0, function() {
                    return F(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, this.initialize()];
                            case 1:
                                return e.sent(), [4, this.postInitialize()];
                            case 2:
                                for (e.sent(), this._isInitialized = !0; this.initializedQueue.length;) try {
                                    this.initializedQueue.pop()()
                                } catch (e) {
                                    console.error(e)
                                }
                                return [2]
                        }
                    })
                })
            })
        }
        t.ModuleAbstract = i
    }), r("common/provider.abstract", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = (r.prototype.initialize = function() {
            var t = this;
            Object.keys(this.instances).forEach(function(e) {
                return t.instances[e].initialize()
            }), this.initialized = !0
        }, r.prototype.postInitialize = function() {
            var t = this;
            Object.keys(this.instances).forEach(function(e) {
                "function" == typeof t.instances[e].postInitialize && t.instances[e].postInitialize()
            })
        }, r.prototype.teardown = function() {
            var t = this;
            Object.keys(this.instances).forEach(function(e) {
                t.instances[e] && "function" == typeof t.instances[e].destroy && t.instances[e].destroy()
            })
        }, r);

        function r(e, i) {
            var r = this;
            void 0 === i && (i = !0), this.instances = {}, this.initialized = !1, e && e.size && (this.map = e, this.map.forEach(function(e, t) {
                e.delegated && !i || (r.instances[t] = new e.ctor)
            }))
        }
        t.ProviderAbstract = i
    }), r("common/decorators/register-repository.decorator", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = new Map;

        function i(t, i) {
            return void 0 === i && (i = !1),
                function(e) {
                    r.set(t, {
                        ctor: e,
                        delegated: i
                    })
                }
        }

        function o() {
            return r
        }
        t.RegisterRepository = i, t.getRepositoryRegistry = o
    }), r("common/decorators/register-service.decorator", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = new Map;

        function i(t, i) {
            return void 0 === i && (i = !1),
                function(e) {
                    r.set(t, {
                        ctor: e,
                        delegated: i
                    })
                }
        }

        function o() {
            return r
        }
        t.RegisterService = i, t.getServiceRegistry = o
    }), r("common/messaging/messaging", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = new WeakMap;

        function i(e, t) {
            var i = e.constructor,
                r = u.get(i);
            r && r.size ? r.add(t) : r = new Set([t]), u.set(i, r)
        }
        t.addVisibleMethod = i;
        var l = null;

        function r() {
            return l
        }

        function p(e, t) {
            if ("function" == typeof t) {
                var i = void 0;
                "string" == typeof e ? i = e : e instanceof Error && (i = "string" == typeof e.message ? e.message : "function" == typeof e.toString ? e.toString() : "Unknown error"), t(i)
            } else console.error(e)
        }

        function o(o, n, s, c, a) {
            return void 0 === s && (s = []), I(this, void 0, void 0, function() {
                var t, i, r;
                return F(this, function(e) {
                    switch (e.label) {
                        case 0:
                            if (e.trys.push([0, 3, 4, 5]), !o || !o.constructor) throw new Error("No target provided!");
                            if (!u.has(o.constructor)) throw new Error("Target has no visible methods.");
                            if (!u.get(o.constructor).has(n)) throw new Error("Method [ " + n + " ] is not a visible method.");
                            if ("function" != typeof(t = o[n])) throw new Error("Method [ " + n + " ] is not a function or does not exist on the target.");
                            return l = Object.freeze({
                                calleeTab: Object.freeze(a)
                            }), (i = t.bind(o).apply(void 0, s)) && "function" == typeof i.then ? [4, i] : [3, 2];
                        case 1:
                            i = e.sent(), e.label = 2;
                        case 2:
                            return c(null, i), [3, 5];
                        case 3:
                            return p(r = e.sent(), c), [3, 5];
                        case 4:
                            return l = null, [7];
                        case 5:
                            return [2]
                    }
                })
            })
        }
        t.getInvokatingMessageContext = r, t.handleCallbackError = p, t.callMethod = o
    }), r("common/decorators/visible.decorator", ["require", "exports", "common/messaging/messaging"], function(e, t, i) {
        function r(e, t) {
            i.addVisibleMethod(e, t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Visible = r
    }), r("common/decorators/index", ["require", "exports", "common/decorators/register-repository.decorator", "common/decorators/register-service.decorator", "common/decorators/visible.decorator"], function(e, i, t, r, o) {
        function n(e) {
            for (var t in e) i.hasOwnProperty(t) || (i[t] = e[t])
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), n(t), n(r), n(o)
    }), r("common/interfaces/site.service", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }), r("common/services/topic/topic.service", ["require", "exports", "common/decorators/index", "common/enums/index", "common/legacy"], function(e, t, i, r, o) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = (s.prototype.initialize = function() {}, s.prototype.subscribe = function(e, t) {
            o.LegacyGlobalCommon.Topics.get(e).subscribe(function(e) {
                return t(e)
            })
        }, s = d([i.RegisterService(r.ServiceType.Topic)], s));

        function s() {}
        t.TopicService = n
    }), r("common/services/utils/string-utils.service", ["require", "exports", "common/decorators/index", "common/enums/index"], function(e, t, i, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = (n.prototype.initialize = function() {}, n.prototype.stringContains = function(e, t) {
            if (e && t) {
                Array.isArray(t) || (t = [t]);
                for (var i = 0; i < t.length; ++i)
                    if (-1 < e.indexOf(t[i])) return !0
            }
            return !1
        }, n.prototype.containsMaskingCharacter = function(e) {
            return -1 < e.indexOf("*") || -1 < e.indexOf(String.fromCharCode(8226))
        }, n = d([i.RegisterService(r.ServiceType.StringUtils)], n));

        function n() {}
        t.StringUtilsService = o
    }), r("content-script/interfaces/content-script-instances-info", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }), r("content-script/interfaces/index", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }), r("content-script/interfaces/legacy", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }), r("content-script/legacy", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.LegacyGlobal = i
    }), r("content-script/repositories/feature/delegated-feature.repository", ["require", "exports", "common/decorators/index", "common/enums/index", "content-script/legacy"], function(e, t, i, o, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = (s.prototype.initialize = function() {}, s.prototype.get = function(e) {
            return new Promise(function(i, r) {
                n.LegacyGlobal.bg.LPModule.callRepository(o.RepositoryType.Feature, "get", [e], function(e, t) {
                    e ? r(e) : i(t)
                })
            })
        }, s.prototype.set = function(e, t) {
            n.LegacyGlobal.bg.LPModule.callRepository(o.RepositoryType.Feature, "set", [e, t])
        }, s = d([i.RegisterRepository(o.RepositoryType.Feature, !0)], s));

        function s() {}
        t.DelegatedFeatureRepository = r
    }), r("content-script/repositories/repository-provider", ["require", "exports", "common/provider.abstract", "content-script/legacy"], function(e, t, i, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = (o = i.ProviderAbstract, T(s, o), s.prototype.getRepository = function(e, t) {
                var i, r;
                if (this.initialized)(r = this.instances[e]) || (i = "Cannot find repository [ " + e + " ]");
                else {
                    if (t) return void this.queue.push({
                        repositoryType: e,
                        callback: t
                    });
                    i = "Repository provider is undefined."
                }
                if (i) throw new Error(i);
                if (!t) return r;
                t(null, r)
            }, s.prototype.initialize = function() {
                for (o.prototype.initialize.call(this); this.queue.length;) try {
                    var e = this.queue.shift(),
                        t = e.repositoryType,
                        i = e.callback;
                    this.getRepository(t, i)
                } catch (e) {
                    console.error(e)
                }
            }, s.prototype.postInitialize = function() {
                o.prototype.postInitialize.call(this)
            }, s.prototype.teardown = function() {
                o.prototype.teardown.call(this)
            }, s),
            o;

        function s() {
            var e = null !== o && o.apply(this, arguments) || this;
            return e.queue = [], e
        }

        function c(e, t, o, i) {
            if ("function" != typeof i) return new Promise(function(i, r) {
                n.LegacyGlobal.bg.LPModule.callRepository(e, t, o, function(e, t) {
                    e ? r(e) : i(t)
                })
            });
            n.LegacyGlobal.bg.LPModule.callRepository(e, t, o, i)
        }
        t.RepositoryProvider = r, t.callBackgroundRepository = c
    }), r("content-script/repositories/index", ["require", "exports", "content-script/repositories/feature/delegated-feature.repository", "content-script/repositories/repository-provider"], function(e, i, t, r) {
        function o(e) {
            for (var t in e) i.hasOwnProperty(t) || (i[t] = e[t])
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), o(t), o(r)
    }), r("content-script/services/site/delegated-site.service", ["require", "exports", "content-script/services/index", "common/enums/index", "common/decorators/index"], function(e, t, i, r, o) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = (s.prototype.initialize = function() {}, s.prototype.getUserNames = function(e) {
            return i.callBackgroundService(r.ServiceType.Site, "getUserNames", [e])
        }, s = d([o.RegisterService(r.ServiceType.Site, !0)], s));

        function s() {}
        t.DelegatedSiteService = n
    }), r("content-script/services/form-detection/form-detection.service", ["require", "exports", "common/decorators/index", "common/enums/index", "content-script/content-script.module", "content-script/legacy"], function(e, t, i, r, n, o) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = (c.prototype.initialize = function() {
            var o = this,
                e;
            if (this.siteService = n.getService(r.ServiceType.Site), this.stringUtils = n.getService(r.ServiceType.StringUtils), this.tools = n.getService(r.ServiceType.ContentScriptTools), this.webRequest = n.getService(r.ServiceType.WebRequest), this.csInfo = n.getContentScriptInstanceInfo(), n.getService(r.ServiceType.Topic).subscribe(r.TopicType.FilledGeneratedPassword, function(e) {
                    var t = e.element,
                        i = e.password,
                        r = o.getFormProfile(t);
                    o.setUsedGeneratedPassword(t), o.handleGeneratedPassword(i, r)
                }), "loading" !== document.readyState) this.onDocumentReady();
            else {
                var t = function() {
                    o.onDocumentReady(), document.removeEventListener("DOMContentLoaded", t)
                };
                document.addEventListener("DOMContentLoaded", t)
            }
        }, c.prototype.getHasGeneratedPasswordSinceLastAutofill = function() {
            return this.hasGeneratedPasswordSinceLastAutofill
        }, c.prototype.setHasGeneratedPasswordSinceLastAutofill = function(e) {
            this.hasGeneratedPasswordSinceLastAutofill = e
        }, c.prototype.onDocumentReady = function() {
            return I(this, void 0, void 0, function() {
                var t, i, r = this;
                return F(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return o.LegacyGlobal.should_do_lastpass_here(document) ? (this.orphansFormProfile = this.createFormProfile(), this.orphansFormProfile.containsOrphans = !0, [4, (t = this).siteService.getUserNames(document.location.hostname)]) : [2];
                        case 1:
                            return t.siteUserNames = e.sent(), this.documentBodyInputs = Array.from(document.body.querySelectorAll(this.inputSelector)), this.getInputs().forEach(this.addMappedInput), Array.from(document.querySelectorAll("form")).forEach(this.addMappedForm), window.addEventListener("lprequeststart", function() {
                                return r.trackForms(!0)
                            }), i = this.tools.debounce(this.updateInputMaps, 200, !1).bind(this), this.observer = new MutationObserver(i), this.observer.observe(document, {
                                attributes: !0,
                                attributeFilter: this.inputAttributes,
                                childList: !0,
                                subtree: !0
                            }), setTimeout(function() {
                                Array.from(r.inputMap.keys()).forEach(function(e) {
                                    r.setFieldValue({
                                        input: e
                                    })
                                })
                            }, 10), [2]
                    }
                })
            })
        }, c.prototype.setFillSource = function(t) {
            return I(this, void 0, void 0, function() {
                return F(this, function(e) {
                    return o.LegacyGlobal.bg.LPTabState.setLastFillSource(t), [2]
                })
            })
        }, c.prototype.handleGeneratedPassword = function(t, i) {
            return I(this, void 0, void 0, function() {
                return F(this, function(e) {
                    return i && i.generatedPassword !== t && (i.generatedPassword = t, this.setFillSource("Generated"), this.saveSiteDialogIsDisplayed || o.LegacyGlobal.bg.LPTabState.getSiteNotification({
                        callback: this.showSaveSiteDialog.bind(this)
                    })), [2]
                })
            })
        }, c.prototype.showSaveSiteDialog = function(e) {
            e.generatedPassword && e.defaultData && (e.dialogData.preSubmit = !0, this.hasGeneratedPasswordSinceLastAutofill = !0, o.LegacyGlobal.LPFrame.openDialog("contentScriptSite", e, {
                css: {
                    top: 10,
                    right: 10
                }
            }))
        }, c.prototype.createFormProfile = function() {
            return {
                fields: [],
                top: window === top,
                url: document.location.hostname
            }
        }, c = d([i.RegisterService(r.ServiceType.FormDetection)], c));

        function c() {
            var u = this;
            this.inputSelector = 'input:not([type]),input[type="text"],input[type="email"],input[type="password"],input[type="hidden"]', this.inputAttributes = ["name", "ng-model", "data-reactid", "id"], this.inputMap = new Map, this.formMap = new Map, this.hasPasswordInput = !1, this.saveSiteDialogIsDisplayed = !1, this.hasGeneratedPasswordSinceLastAutofill = !1, this.updateInputMaps = function() {
                Array.from(u.inputMap.entries()).forEach(function(e) {
                    var t = e[0];
                    u.removeMappedInput(t)
                }), u.hasPasswordInput = !1, Array.from(document.querySelectorAll("form")).forEach(u.addMappedForm), u.getInputs().forEach(u.addMappedInput), u.saveSiteDialogIsDisplayed = null !== document.getElementById("siteDialog"), u.hasPasswordInput = Array.from(u.inputMap.values()).some(function(e) {
                    return "password" === e.type
                })
            }, this.addMappedForm = function(e) {
                e.addEventListener("submit", u.submitListener), e.addEventListener("keydown", u.formKeydownListener), u.formMap.has(e) || u.formMap.set(e, u.createFormProfile())
            }, this.removeMappedForm = function(e) {
                u.formMap.delete(e) && e.removeEventListener("submit", u.submitListener)
            }, this.addMappedInput = function(e) {
                var t = u.getInputType(e);
                e.addEventListener("change", u.changeListener), e.addEventListener("keydown", u.keydownListener), "password" === t && (e.addEventListener("keydown", u.manuallyTypingPasswordListener), e.addEventListener("blur", u.blurListener));
                var i = {
                        value: e.value,
                        attributes: u.tools.getAttributes(e, u.inputAttributes),
                        label: u.tools.getElementLabel(e),
                        type: t
                    },
                    r;
                u.inputMap.set(e, i), u.getFormProfile(e).fields.push(i), u.hasPasswordInput = u.hasPasswordInput || "password" === t
            }, this.removeMappedInput = function(e) {
                var t = u.getFormProfile(e),
                    i = u.inputMap.get(e),
                    r = t.fields.indexOf(i); - 1 < r && t.fields.splice(r, 1), u.inputMap.delete(e) && (e.removeEventListener("change", u.changeListener), e.removeEventListener("keydown", u.keydownListener))
            }, this.setUsedGeneratedPassword = function(e) {
                var t;
                u.getFormProfile(e).usedGeneratedPassword = !0
            }, this.changeListener = function(e) {
                u.setFieldValue({
                    input: e.target,
                    fromUser: !0
                }), u.trackForms()
            }, this.keydownListener = function(e) {
                e.isTrusted && 13 === (e.keyCode || e.which) && (u.setFieldValue({
                    input: e.target,
                    fromUser: !0
                }), u.trackForms())
            }, this.manuallyTypingPasswordListener = function(e) {
                e.isTrusted && e.keyCode && u.setFillSource("Manual")
            }, this.formKeydownListener = function(e) {
                e.isTrusted && 13 === (e.keyCode || e.which) && (u.setFieldValue({
                    input: e.target,
                    fromUser: !0
                }), u.trackForms())
            }, this.blurListener = function(e) {
                e.isTrusted && (u.setFieldValue({
                    input: e.target,
                    fromUser: !0
                }), u.trackForms())
            }, this.submitListener = function(e) {
                e.isTrusted && u.trackForms(!0)
            }, this.trackForms = function(e) {
                void 0 === e && (e = !1), u.hasPasswordInput && (e && Array.from(new Set(u.inputMap.entries())).forEach(function(e) {
                    var t = e[0],
                        i = e[1];
                    u.setFieldValue({
                        input: t,
                        field: i
                    })
                }), u.tools.debounce(u.webRequest.trackFormSubmission, 200, !0).call(u, u.csInfo.tabId, Array.from(u.formMap.values()).concat([u.orphansFormProfile])))
            }, this.getInputType = function(e) {
                return "password" === e.type || "disc" === u.tools.getCSS(e, "text-security") ? "password" : "email" === e.type || "hidden" === e.type ? e.type : "text"
            }, this.getInputs = function(e) {
                void 0 === e && (e = document.body);
                var t = e === document.body ? u.documentBodyInputs : Array.from(e.querySelectorAll(u.inputSelector)),
                    i = [],
                    r = new Map;
                if (t.forEach(function(e) {
                        if (u.tools.isVisible(e))("" === e.value && "" === e.getAttribute("value") || e.value !== e.getAttribute("value") || 1 < e.value.length) && i.push(e);
                        else if (-1 < ["hidden", "text", "email"].indexOf(e.type)) {
                            var t = r.get(e.value) || {
                                matches: 0,
                                inputs: []
                            };
                            t.inputs.push(e), r.set(e.value, t)
                        }
                    }), r.size) {
                    for (var o = r.entries(), n = void 0; !(n = o.next()).done;) 1 < n.value[1].inputs.length && r.delete(n.value[0]);
                    for (var s = Array.from(r.keys()), c = document.createTreeWalker(document, NodeFilter.SHOW_TEXT), a = function() {
                            var t = c.currentNode;
                            if (["OPTION", "SCRIPT"].some(function(e) {
                                    return t.parentElement.nodeName === e
                                })) return "continue";
                            var i = t.nodeValue.trim();
                            if (s.some(function(e) {
                                    return e === i
                                })) {
                                if (!u.tools.isVisible(t)) return "continue";
                                var e = r.get(i);
                                e.matches++, r.set(i, e)
                            }
                        }; c.nextNode();) a();
                    for (o = r.entries(); !(n = o.next()).done;) 1 === n.value[1].matches && i.push(n.value[1].inputs[0])
                }
                return i
            }, this.setFieldValue = function(e) {
                var t = e.input,
                    i = e.field,
                    r = e.fromUser,
                    o = void 0 !== r && r;
                i = i || u.inputMap.get(t);
                var n = u.getFormProfile(t),
                    s = t.value;
                if ("password" === i.type) s && !n.originalPassword && (n.originalPassword = s), n.currentPassword = s || "";
                else {
                    if (u.stringUtils.containsMaskingCharacter(s))
                        if (i.value && i.value !== s && !u.stringUtils.containsMaskingCharacter(i.value)) s = i.value;
                        else {
                            var c = n.fields.filter(function(e) {
                                return !(e === i || !e.value || u.stringUtils.containsMaskingCharacter(e.value) || e.value.length !== s.length || e.value[0] !== s[0] && e.value[e.value.length - 1] !== i.value[s.length - 1])
                            })[0];
                            c && (s = c.value)
                        } u.siteUserNames.some(function(e) {
                        return e === s
                    }) ? n.username = s : n.username === i.value && (n.username = s)
                }
                i.dirty = i.dirty || o, i.value = s
            }, this.getFormProfile = function(e) {
                var t;
                return console.assert(e instanceof HTMLInputElement, "Input argument is not an HTMLInputElement"), e.form ? (t = u.formMap.get(e.form)) || (t = u.createFormProfile(), u.formMap.set(e.form, t)) : t = u.orphansFormProfile, t
            }
        }
        t.FormDetectionService = s
    }), r("content-script/services/segment/delegated-segment.service", ["require", "exports", "common/decorators/index", "common/enums/index", "content-script/legacy", "content-script/services/index"], function(e, t, i, r, o, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = (c.prototype.initialize = function() {}, c.prototype.send = function(e, t) {
            o.LegacyGlobal.bg.sendLpImprove(e, t)
        }, c.prototype.sendTypedEvent = function(e, t) {
            return n.callBackgroundService(r.ServiceType.Segment, "sendTypedEvent", [e, t])
        }, d([i.Visible], c.prototype, "sendTypedEvent", null), c = d([i.RegisterService(r.ServiceType.Segment, !0)], c));

        function c() {}
        t.DelegatedSegmentService = s
    }), r("content-script/services/service-provider", ["require", "exports", "common/provider.abstract", "common/messaging/messaging", "content-script/legacy"], function(e, t, i, n, s) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = (c = i.ProviderAbstract, T(o, c), o.prototype.getService = function(e) {
                return this.instances[e]
            }, o.prototype.initialize = function() {
                for (c.prototype.initialize.call(this); this.callQueue.length;) {
                    var e = this.callQueue.shift(),
                        t = e.serviceType,
                        i = e.method,
                        r = e.args,
                        o = e.callback;
                    n.callMethod(this.getService(t), i, r, o)
                }
            }, o.prototype.postInitialize = function() {
                c.prototype.postInitialize.call(this)
            }, o.prototype.teardown = function() {
                c.prototype.teardown.call(this)
            }, o.prototype.isInitialized = function() {
                return this.initialized
            }, o.prototype.call = function(e, t, i, r) {
                void 0 === i && (i = []);
                try {
                    this.isInitialized() ? n.callMethod(this.getService(e), t, i, r) : this.callQueue.push({
                        serviceType: e,
                        method: t,
                        args: i,
                        callback: r
                    })
                } catch (e) {
                    n.handleCallbackError(e, r)
                }
            }, o),
            c;

        function o() {
            var e = null !== c && c.apply(this, arguments) || this;
            return e.callQueue = [], e
        }

        function a(e, t, o, i) {
            if ("function" != typeof i) return new Promise(function(i, r) {
                s.LegacyGlobal.bg.LPModule.callService(e, t, o, function(e, t) {
                    e ? r(e) : i(t)
                })
            });
            s.LegacyGlobal.bg.LPModule.callService(e, t, o, i)
        }
        t.ServiceProvider = r, t.callBackgroundService = a
    }), r("content-script/services/tools/content-script-tools.service", ["require", "exports", "common/decorators/index", "common/enums/index"], function(e, t, i, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = (n.prototype.initialize = function() {
            var t = this;
            window.addEventListener("beforeunload", function(e) {
                !1 !== e.isTrusted && (t.unloading = !0)
            })
        }, n.prototype.isUnloading = function() {
            return this.unloading
        }, n.prototype.getCSS = function(e, t) {
            return window.getComputedStyle(e).getPropertyValue(t)
        }, n.prototype.getAttributes = function(i, e) {
            var r = this;
            return e.reduce(function(e, t) {
                return e[t] = r.getAttribute(i, t), e
            }, {})
        }, n.prototype.getAttribute = function(e, t) {
            return e.hasAttribute(t) ? e.getAttribute(t) : void 0
        }, n.prototype.isForm = function(e) {
            return "FORM" === e.nodeName
        }, n.prototype.getForm = function(e) {
            for (; e;) {
                if (this.isForm(e)) return e;
                e = e.parentElement
            }
            return null
        }, n.prototype.isClickable = function(e) {
            if ("function" != typeof document.elementFromPoint) return !0;
            var t = e.getBoundingClientRect();
            return document.elementFromPoint(t.left, t.top) === e || document.elementFromPoint(t.right, t.top) === e || document.elementFromPoint(t.left, t.bottom) === e || document.elementFromPoint(t.right, t.bottom) === e
        }, n.prototype.isScrollableX = function(e) {
            if (e.scrollWidth > e.clientWidth) {
                var t = this.getCSS(e, "overflow-x");
                return "auto" === t || "scroll" === t
            }
            return !1
        }, n.prototype.isScrollableY = function(e) {
            var t;
            if (e.scrollHeight > e.clientHeight) switch (this.getCSS(e, "overflow-y")) {
                case "auto":
                case "scroll":
                    return !0;
                case "visible":
                    return e === document.body || !e.parentElement
            }
            return !1
        }, n.prototype.getViewableArea = function(e) {
            for (var t = {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight
                }, i = e.parentElement; i;) 0 < i.scrollLeft && (t.left -= i.scrollLeft), 0 < i.scrollTop && (t.top -= i.scrollTop), this.isScrollableX(i) && (t.width += i.scrollWidth - i.clientWidth), this.isScrollableY(i) && (t.height += i.scrollHeight - i.clientHeight), i = i.parentElement;
            return t.right = t.left + t.width, t.bottom = t.top + t.height, t
        }, n.prototype.isVisible = function(e) {
            if (!(e && e instanceof HTMLElement)) return !1;
            var t;
            if (!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)) return !1;
            var i = e.getBoundingClientRect(),
                r = this.getViewableArea(e);
            return !(i.right < r.left || i.bottom < r.top || i.left > r.right || i.top > r.bottom)
        }, n.prototype.getElementLabel = function(r) {
            for (var e = [function() {
                    if (r.getAttribute("id")) {
                        var e = document.querySelector('label[for="' + r.getAttribute("id") + '"]');
                        if (e) return e.textContent
                    }
                    return null
                }, function() {
                    for (var e = r; e;) {
                        if ("LABEL" === e.tagName.toUpperCase()) return e.textContent;
                        e = e.parentElement
                    }
                    return null
                }, function() {
                    return r.getAttribute("placeholder")
                }, function() {
                    for (var e = r; e;) {
                        var t = e.textContent;
                        if (t) {
                            var i = t.split("\n").map(function(e) {
                                return e.trim()
                            }).filter(function(e) {
                                return 0 < e.length
                            });
                            if (1 === i.length) return i[0];
                            break
                        }
                        e = e.previousSibling || e.parentElement
                    }
                }], t = 0; t < e.length; ++t) {
                var i = e[t]();
                if (i) return i.trim()
            }
            return ""
        }, n.prototype.debounce = function(n, s, c) {
            var a;
            return function() {
                for (var e = this, t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
                var r = function() {
                        a = null, c || n.apply(e, t)
                    },
                    o = c && !a;
                clearTimeout(a), a = window.setTimeout(r, s), o && n.apply(this, t)
            }
        }, n = d([i.RegisterService(r.ServiceType.ContentScriptTools)], n));

        function n() {
            this.unloading = !1
        }
        t.ContentScriptTools = o
    }), r("content-script/services/tools/dom-utils.service", ["require", "exports", "common/decorators/index", "common/enums/index"], function(e, t, i, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = (n.prototype.initialize = function() {}, n.prototype.getXPathForElement = function(e) {
            var i = function(e, t) {
                    return e ? i(e.previousElementSibling, t || e.localName) + (e.localName === t) : 1
                },
                t = function(e) {
                    return e && e.nodeType === Node.ELEMENT_NODE ? e.id && document.querySelector("#" + e.id) === e ? ['id("' + e.id + '")'] : t(e.parentNode).concat([e.localName.toLowerCase() + "[" + i(e) + "]"]) : [""]
                };
            return t(e).join("/")
        }, n = d([i.RegisterService(r.ServiceType.DomUtils)], n));

        function n() {}
        t.DomUtils = o
    }), r("content-script/services/web-request/delegated-web-request.service", ["require", "exports", "common/decorators/index", "common/enums/index", "content-script/services/index"], function(e, t, i, r, o) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = (s.prototype.initialize = function() {
            var t = this;
            o.callBackgroundService(r.ServiceType.WebRequest, "isApiSupported", void 0).then(function(e) {
                return t.apiSupported = e
            }), o.callBackgroundService(r.ServiceType.WebRequest, "isEnabled", void 0).then(function(e) {
                return t.enabled = e
            })
        }, s.prototype.trackFormSubmission = function(e, t, i) {
            return o.callBackgroundService(r.ServiceType.WebRequest, "trackFormSubmission", [e, t, i])
        }, s.prototype.isApiSupported = function() {
            return this.apiSupported
        }, s.prototype.isEnabled = function() {
            return this.enabled
        }, s = d([i.RegisterService(r.ServiceType.WebRequest, !0)], s));

        function s() {
            this.apiSupported = !1, this.enabled = !1
        }
        t.DelegatedWebRequestService = n
    }), r("content-script/services/sitenotification/sitenotification.service", ["require", "exports", "common/decorators/index", "common/enums/index", "content-script/legacy"], function(e, t, i, r, o) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = (s.prototype.initialize = function() {}, s.prototype.showSiteNotification = function(e) {
            e.detectionType = "webrequest", o.LegacyGlobal.LPSiteNotification.showSiteNotification(e)
        }, d([i.Visible], s.prototype, "showSiteNotification", null), s = d([i.RegisterService(r.ServiceType.SiteNotification)], s));

        function s() {}
        t.SiteNotificationService = n
    }), r("content-script/services/index", ["require", "exports", "content-script/services/form-detection/form-detection.service", "content-script/services/segment/delegated-segment.service", "content-script/services/service-provider", "content-script/services/site/delegated-site.service", "content-script/services/tools/content-script-tools.service", "content-script/services/tools/dom-utils.service", "content-script/services/web-request/delegated-web-request.service", "common/services/topic/topic.service", "common/services/utils/string-utils.service", "content-script/services/sitenotification/sitenotification.service"], function(e, i, t, r, o, n, s, c, a, u, l, p) {
        function d(e) {
            for (var t in e) i.hasOwnProperty(t) || (i[t] = e[t])
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), d(t), d(r), d(o), d(n), d(s), d(c), d(a), d(u), d(l), d(p)
    }), r("content-script/views/basic-auth/basic-auth.view", ["require", "exports", "content-script/legacy"], function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = (o.prototype.init = function(e, t) {
            var i = this;
            e && (this.backgroundInterface = r.LegacyGlobal.bg, this.loadContent(function() {
                i.initContent(t)
            }))
        }, o.prototype.loadContent = function(i) {
            var r = this;
            $.get(chrome.runtime.getURL("/content-script/views/basic-auth/basic-auth.html"), function(e) {
                var t = r.replaceRelativePaths(e);
                $(document.body).empty().append(t), i()
            })
        }, o.prototype.initContent = function(e) {
            var t;
            $("#ba_username").focus(), e || $("#wronguserpass").hide(), document.title = "Lastpass basic auth login", $("#title").text(location.host), "http:" === location.protocol ? $("#secureWarning").show() : $("#secureWarning").hide(), this.subscribeEvents(), this.openPopupNotification(), this.backgroundInterface.sendLpImprove("basicauth::triggered")
        }, o.prototype.subscribeEvents = function() {
            var t = this;
            $("#lp-login-btn").click(function() {
                $(".js-notification").toggle("notification-visible"), t.doLogin()
            }), $("#password").keypress(function(e) {
                13 === e.which && t.doLogin()
            }), $("#lp-cancel-btn").click(function() {
                t.cancelBasicAuth(), t.backgroundInterface.sendLpImprove("basicauth::cancel")
            }), $(".notification__close__button").click(function() {
                $(".notification__body").removeClass("slide-in").addClass("slide-out"), t.backgroundInterface.basicAuth.closeNotification()
            })
        }, o.prototype.doLogin = function() {
            var e = $("#ba_username").val(),
                t = $("#ba_password").val();
            this.backgroundInterface.sendLpImprove("basicauth::login"), this.backgroundInterface.basicAuth.setAuthCredential(e, t, function() {
                return location.reload()
            })
        }, o.prototype.cancelBasicAuth = function() {
            this.backgroundInterface.basicAuth.cancelBasicAuth(), $("#login-body").hide(), location.reload()
        }, o.prototype.replaceRelativePaths = function(e) {
            var t = chrome.runtime.getURL("");
            return e.replace(new RegExp("{extensionUrl}", "g"), t)
        }, o.prototype.openPopupNotification = function() {
            this.backgroundInterface.basicAuth.isNotificationClosed(function(e) {
                e ? $(".notification__body").hide() : $(".notification__body").addClass("slide-in")
            })
        }, o);

        function o() {
            var i = this;
            r.LegacyGlobal.bg.basicAuth.hasFeature(function(e) {
                e && r.LegacyGlobal.bg.basicAuth.isBasicAuth(function(e, t) {
                    return i.init(e, t)
                })
            })
        }
        t.BasicAuthView = i
    }), r("content-script/views/index", ["require", "exports", "content-script/views/basic-auth/basic-auth.view"], function(e, i, t) {
        function r(e) {
            for (var t in e) i.hasOwnProperty(t) || (i[t] = e[t])
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), r(t)
    }), r("content-script/content-script.module", ["require", "exports", "common/enums/index", "content-script/repositories/index", "content-script/services/index", "content-script/views/index", "common/module.abstract", "common/decorators/index", "content-script/legacy"], function(e, t, i, s, c, r, o, a, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = (l = o.ModuleAbstract, T(p, l), p.getInstance = function() {
                return p.instance || (p.instance = new p), p.instance
            }, p.prototype.getContentScriptInstanceInfo = function() {
                return this.csInfo
            }, p.prototype.initialize = function() {
                return I(this, void 0, void 0, function() {
                    var t, i, r, o, n;
                    return F(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return this.serviceProvider = new c.ServiceProvider(a.getServiceRegistry()), this.repositoryProvider = new s.RepositoryProvider(a.getRepositoryRegistry()), [4, this.requestFrameworkInitialized];
                            case 1:
                                return t = e.sent(), i = t.tabID, r = t.frameID, o = t.topFrameID, n = t.request, this.csInfo = {
                                    tabId: i,
                                    frameId: r,
                                    topFrameId: o,
                                    childFrameCount: n.childFrameCount,
                                    isTop: n.top,
                                    url: n.url
                                }, this.repositoryProvider.initialize(), this.serviceProvider.initialize(), [2]
                        }
                    })
                })
            }, p.prototype.postInitialize = function() {
                return I(this, void 0, void 0, function() {
                    return F(this, function(e) {
                        return this.repositoryProvider.postInitialize(), this.serviceProvider.postInitialize(), self.basicAuth = new r.BasicAuthView, [2]
                    })
                })
            }, p.prototype.getServiceProvider = function() {
                return this.serviceProvider
            }, p.prototype.getRepositoryProvider = function() {
                return this.repositoryProvider
            }, p.prototype.getService = function(e) {
                if (!this.serviceProvider.isInitialized) throw new Error("Service provider is undefined.");
                var t = this.serviceProvider.getService(e);
                if (!t) throw new Error("Cannot find service [ " + e + " ]");
                return t
            }, p.prototype.getRepository = function(e) {
                var t = this.repositoryProvider.getRepository(e);
                if (!t) throw new Error("Cannot find repository [ " + e + " ]");
                return t
            }, p.prototype.isInitialized = function(e) {
                l.prototype.isInitialized.call(this, e)
            }, p.instance = null, p),
            l;

        function p() {
            var e = l.call(this) || this;
            return e.requestFrameworkInitialized = new Promise(function(t) {
                n.LegacyGlobal.Topics.get(i.TopicType.RequestFrameworkInitialized).subscribe(function(e) {
                    return t(e)
                })
            }), window.addEventListener("beforeunload", function() {
                e.serviceProvider && e.serviceProvider.teardown(), e.repositoryProvider && e.repositoryProvider.teardown()
            }), e
        }

        function d() {
            return u.getInstance().getContentScriptInstanceInfo()
        }

        function f(e) {
            return u.getInstance().getService(e)
        }

        function m(e) {
            return u.getInstance().getRepository(e)
        }

        function v(e) {
            return u.getInstance().isInitialized(e)
        }

        function y(e, t, i, r) {
            void 0 === i && (i = []), u.getInstance().getServiceProvider().call(e, t, i, r)
        }
        t.getContentScriptInstanceInfo = d, t.getService = f, t.getRepository = m, t.isInitialized = v, t.callService = y, t.default = u.getInstance()
    }), i.LPModule = t("content-script/content-script.module")
}).call(this);
//# sourceMappingURL=sourcemaps/modules-contentscript.js.map