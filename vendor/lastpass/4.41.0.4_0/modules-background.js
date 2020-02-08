(function() {
    "use strict";
    var r = this,
        e, t, i, f, n, s, v, g, m, b, y, h, o, a, S;

    function w(e, t) {
        return o.call(e, t)
    }

    function u(e, t) {
        var r, i, o, n, s, a, u, c, l, d, p, f, v = t && t.split("/"),
            g = y.map,
            m = g && g["*"] || {};
        if (e) {
            for (s = (e = e.split("/")).length - 1, y.nodeIdCompat && S.test(e[s]) && (e[s] = e[s].replace(S, "")), "." === e[0].charAt(0) && v && (e = (f = v.slice(0, v.length - 1)).concat(e)), l = 0; l < e.length; l++)
                if ("." === (p = e[l])) e.splice(l, 1), l -= 1;
                else if (".." === p) {
                if (0 === l || 1 === l && ".." === e[2] || ".." === e[l - 1]) continue;
                0 < l && (e.splice(l - 1, 2), l -= 2)
            }
            e = e.join("/")
        }
        if ((v || m) && g) {
            for (l = (r = e.split("/")).length; 0 < l; l -= 1) {
                if (i = r.slice(0, l).join("/"), v)
                    for (d = v.length; 0 < d; d -= 1)
                        if (o = (o = g[v.slice(0, d).join("/")]) && o[i]) {
                            n = o, a = l;
                            break
                        } if (n) break;
                !u && m && m[i] && (u = m[i], c = l)
            }!n && u && (n = u, a = c), n && (r.splice(0, a, n), e = r.join("/"))
        }
        return e
    }

    function P(t, r) {
        return function() {
            var e = a.call(arguments, 0);
            return "string" != typeof e[0] && 1 === e.length && e.push(null), s.apply(f, e.concat([t, r]))
        }
    }

    function c(t) {
        return function(e) {
            return u(e, t)
        }
    }

    function _(t) {
        return function(e) {
            m[t] = e
        }
    }

    function k(e) {
        if (w(b, e)) {
            var t = b[e];
            delete b[e], h[e] = !0, n.apply(f, t)
        }
        if (!w(m, e) && !w(h, e)) throw new Error("No " + e);
        return m[e]
    }

    function l(e) {
        var t, r = e ? e.indexOf("!") : -1;
        return -1 < r && (t = e.substring(0, r), e = e.substring(r + 1, e.length)), [t, e]
    }

    function q(e) {
        return e ? l(e) : []
    }

    function d(e) {
        return function() {
            return y && y.config && y.config[e] || {}
        }
    }
    m = {}, b = {}, y = {}, h = {}, o = Object.prototype.hasOwnProperty, a = [].slice, S = /\.js$/, v = function(e, t) {
        var r, i = l(e),
            o = i[0],
            n = t[1];
        return e = i[1], o && (r = k(o = u(o, n))), o ? e = r && r.normalize ? r.normalize(e, c(n)) : u(e, n) : (o = (i = l(e = u(e, n)))[0], e = i[1], o && (r = k(o))), {
            f: o ? o + "!" + e : e,
            n: e,
            pr: o,
            p: r
        }
    }, g = {
        require: function(e) {
            return P(e)
        },
        exports: function(e) {
            var t = m[e];
            return void 0 !== t ? t : m[e] = {}
        },
        module: function(e) {
            return {
                id: e,
                uri: "",
                exports: m[e],
                config: d(e)
            }
        }
    }, n = function(e, t, r, i) {
        var o, n, s, a, u, c, l = [],
            d = typeof r,
            p;
        if (c = q(i = i || e), "undefined" == d || "function" == d) {
            for (t = !t.length && r.length ? ["require", "exports", "module"] : t, u = 0; u < t.length; u += 1)
                if ("require" === (n = (a = v(t[u], c)).f)) l[u] = g.require(e);
                else if ("exports" === n) l[u] = g.exports(e), p = !0;
            else if ("module" === n) o = l[u] = g.module(e);
            else if (w(m, n) || w(b, n) || w(h, n)) l[u] = k(n);
            else {
                if (!a.p) throw new Error(e + " missing " + n);
                a.p.load(a.n, P(i, !0), _(n), {}), l[u] = m[n]
            }
            s = r ? r.apply(m[e], l) : void 0, e && (o && o.exports !== f && o.exports !== m[e] ? m[e] = o.exports : s === f && p || (m[e] = s))
        } else e && (m[e] = r)
    }, e = t = s = function(e, t, r, i, o) {
        if ("string" == typeof e) return g[e] ? g[e](t) : k(v(e, q(t)).f);
        if (!e.splice) {
            if ((y = e).deps && s(y.deps, y.callback), !t) return;
            t.splice ? (e = t, t = r, r = null) : e = f
        }
        return t = t || function() {}, "function" == typeof r && (r = i, i = o), i ? n(f, e, t, r) : setTimeout(function() {
            n(f, e, t, r)
        }, 4), s
    }, s.config = function(e) {
        return s(e)
    }, e._defined = m, (i = function(e, t, r) {
        if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
        t.splice || (r = t, t = []), w(m, e) || w(b, e) || (b[e] = [e, t, r])
    }).amd = {
        jQuery: !0
    };
    var x = this && this.__awaiter || function(n, s, a, u) {
            return new(a = a || Promise)(function(e, t) {
                function r(e) {
                    try {
                        o(u.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function i(e) {
                    try {
                        o(u.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function o(t) {
                    t.done ? e(t.value) : new a(function(e) {
                        e(t.value)
                    }).then(r, i)
                }
                o((u = u.apply(n, s || [])).next())
            })
        },
        F = this && this.__generator || function(e, r) {
            var i = {
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
                next: a(0),
                throw: a(1),
                return: a(2)
            }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                return this
            }), t;

            function a(t) {
                return function(e) {
                    return u([t, e])
                }
            }

            function u(t) {
                if (o) throw new TypeError("Generator is already executing.");
                for (; i;) try {
                    if (o = 1, n && (s = 2 & t[0] ? n.return : t[0] ? n.throw || ((s = n.return) && s.call(n), 0) : n.next) && !(s = s.call(n, t[1])).done) return s;
                    switch (n = 0, s && (t = [2 & t[0], s.value]), t[0]) {
                        case 0:
                        case 1:
                            s = t;
                            break;
                        case 4:
                            return i.label++, {
                                value: t[1],
                                done: !1
                            };
                        case 5:
                            i.label++, n = t[1], t = [0];
                            continue;
                        case 7:
                            t = i.ops.pop(), i.trys.pop();
                            continue;
                        default:
                            if (!(s = 0 < (s = i.trys).length && s[s.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                i = 0;
                                continue
                            }
                            if (3 === t[0] && (!s || t[1] > s[0] && t[1] < s[3])) {
                                i.label = t[1];
                                break
                            }
                            if (6 === t[0] && i.label < s[1]) {
                                i.label = s[1], s = t;
                                break
                            }
                            if (s && i.label < s[2]) {
                                i.label = s[2], i.ops.push(t);
                                break
                            }
                            s[2] && i.ops.pop(), i.trys.pop();
                            continue
                    }
                    t = r.call(e, i)
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
        T = this && this.__decorate || function(e, t, r, i) {
            var o = arguments.length,
                n = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i,
                s;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, r, i);
            else
                for (var a = e.length - 1; 0 <= a; a--)(s = e[a]) && (n = (o < 3 ? s(n) : 3 < o ? s(t, r, n) : s(t, r)) || n);
            return 3 < o && n && Object.defineProperty(t, r, n), n
        },
        O = this && this.__extends || (p = function(e, t) {
            return (p = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                })(e, t)
        }, function(e, t) {
            function r() {
                this.constructor = e
            }
            p(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
        }),
        p, R = this && this.__assign || function() {
            return (R = Object.assign || function(e) {
                for (var t, r = 1, i = arguments.length; r < i; r++)
                    for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }).apply(this, arguments)
        };
    i("common/services/form-detection/form-profile", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }), i("common/services/form-detection/index", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }), i("common/interfaces/feature.repository", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }), i("common/interfaces/repository", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }), i("common/interfaces/segment.service", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }), i("common/enums/feature-type", ["require", "exports"], function(e, t) {
        var r, i;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), (i = r = t.FeatureType || (t.FeatureType = {})).BetterGeneratePasswordEnabled = "better_generate_password_enabled", i.Block30 = "block_3_0", i.EmergencyAccessRestricted = "emergency_access_restricted", i.FamilyLegacySharedFoldersEnabled = "family_legacy_shared_folders_enabled", i.FamilySharedFoldersEnabled = "family_shared_folders_enabled", i.FormfillMigration = "formfill_migration", i.Freamon = "freamon", i.IntroTutorialVersion = "intro_tutorial_version", i.IsDogfood = "isDogfood", i.IsMobileActive = "is_mobile_active", i.OmarDrawer = "omardrawer", i.OmarIa = "omaria", i.OmarInfieldB = "omar_infield_b", i.OmarInfieldC = "omar_infield_c", i.OneToOneSharingRestricted = "one_to_one_sharing_restricted", i.PasswordSubmittedEvent = "password_submitted_event", i.Pdkdf2IterationsMigration = "pbkdf2_iterations_migration", i.Retire30 = "retire_3_0", i.TryFamiliesEnabled = "try_families_enabled", i.Ziggy = "ziggy"
    }), i("common/enums/fill-source-type", ["require", "exports"], function(e, t) {
        var r, i;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), (i = r = t.FillSourceType || (t.FillSourceType = {})).Autofill = "Autofill", i.Infield = "Infield", i.IconDropdown = "Icon Dropdown", i.Vault = "Vault", i.ContextMenu = "Context Menu", i.HotKey = "HotKey", i.Generated = "Generated", i.Manual = "Manual"
    }), i("common/enums/repository-type", ["require", "exports"], function(e, t) {
        var r, i;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), (i = r = t.RepositoryType || (t.RepositoryType = {})).Feature = "Feature"
    }), i("common/enums/resolver-type", ["require", "exports"], function(e, t) {
        var r, i;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), (i = r = t.ResolverType || (t.ResolverType = {})).PasswordSubmitted = "Password Submitted", i.InjectedPasswordSubmitted = "Injected Password Submitted"
    }), i("common/enums/save-site-action", ["require", "exports"], function(e, t) {
        var r, i;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), (i = r = t.SaveSiteAction || (t.SaveSiteAction = {})).Add = "Add", i.OK = "OK", i.Update = "Update", i.NotNow = "Not Now", i.Undo = "Undo", i.Never = "Never"
    }), i("common/enums/save-site-event-type", ["require", "exports"], function(e, t) {
        var r, i;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), (i = r = t.SaveSiteDialogEventType || (t.SaveSiteDialogEventType = {})).SaveSiteDialogAction = "Save a Site Action Clicked", i.SaveSiteDialogDuplicateDeleteClicked = "Save a Site Duplicate Delete Clicked", i.SaveSiteDialogDuplicateKeepClicked = "Save a Site Duplicate Keep Clicked", i.SaveSiteDialogEditClicked = "Save a Site Edit Clicked", i.SaveSiteDialogNewClicked = "Save a Site New Clicked", i.SaveSiteDialogSelectClicked = "Save a Site Select Clicked", i.SaveSiteDialogViewed = "Save a Site Viewed", i.SaveSiteDialogAnotherClicked = "Save a Site Another Clicked"
    }), i("common/enums/segment-event-type", ["require", "exports"], function(e, t) {
        var r, i;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), (i = r = t.SegmentEventType || (t.SegmentEventType = {})).SaveSiteDialog = "savesitedialog", i.ExtensionMenuItemClicked = "extensionMenuItemClicked", i.FeedbackGoalClicked = "feedbackGoalClicked", i.FeedbackIssueClicked = "feedbackIssueClicked", i.CrossDomainFillWarningShown = "crossdomainfillwarningshown", i.FeedbackSent = "feedbacksent"
    }), i("common/enums/service-type", ["require", "exports"], function(e, t) {
        var r, i;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), (i = r = t.ServiceType || (t.ServiceType = {})).BasicAuth = "BasicAuth", i.ContentScriptTools = "ContentScriptTools", i.BackgroundTools = "BackgroundTools", i.DomUtils = "DomUtils", i.FormDetection = "FormDetection", i.FormParser = "FormParser", i.Segment = "Segment", i.Site = "Site", i.StringUtils = "StringUtils", i.Topic = "Topic", i.WebRequest = "WebRequest", i.WebRequestShim = "WebRequestShim", i.SiteNotification = "SiteNotification"
    }), i("common/enums/topic-type", ["require", "exports", "common/legacy"], function(e, t, r) {
        var i, o;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), (o = i = t.TopicType || (t.TopicType = {}))[o.ClearData = r.LegacyGlobalCommon.Topics.CLEAR_DATA] = "ClearData", o[o.FilledGeneratedPassword = r.LegacyGlobalCommon.Topics.FILLED_GENERATED_PW] = "FilledGeneratedPassword", o[o.Initialized = r.LegacyGlobalCommon.Topics.INITIALIZED] = "Initialized", o[o.Login = r.LegacyGlobalCommon.Topics.LOGIN] = "Login", o[o.LoginFinished = r.LegacyGlobalCommon.Topics.LOGIN_FINISHED] = "LoginFinished", o[o.ProcessedFormSubmit = r.LegacyGlobalCommon.Topics.PROCESSED_FORM_SUBMIT] = "ProcessedFormSubmit", o[o.RequestFrameworkInitialized = r.LegacyGlobalCommon.Topics.REQUEST_FRAMEWORK_INITIALIZED] = "RequestFrameworkInitialized", o[o.PasswordFormSubmitted = r.LegacyGlobalCommon.Topics.PASSWORD_FORM_SUBMITTED] = "PasswordFormSubmitted"
    }), i("common/enums/index", ["require", "exports", "common/enums/feature-type", "common/enums/fill-source-type", "common/enums/repository-type", "common/enums/resolver-type", "common/enums/save-site-action", "common/enums/save-site-event-type", "common/enums/segment-event-type", "common/enums/service-type", "common/enums/topic-type"], function(e, r, t, i, o, n, s, a, u, c, l) {
        function d(e) {
            for (var t in e) r.hasOwnProperty(t) || (r[t] = e[t])
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), d(t), d(i), d(o), d(n), d(s), d(a), d(u), d(c), d(l)
    }), i("common/interfaces/segment-event", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }), i("common/interfaces/serializable-callback", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }), i("common/interfaces/serializable-value", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }), i("common/interfaces/service", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }), i("common/interfaces/web-request-shim.service", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }), i("common/interfaces/web-request.service", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }), i("common/interfaces/sitenotification.service", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }), i("common/interfaces/index", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }), i("background/interfaces/content-script-target", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }), i("background/legacy", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.LegacyGlobal = r
    }), i("background/services/form-parser/field-parsers/field-parser.abstract", ["require", "exports", "background/legacy"], function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = (o.getFormFieldRegex = function(e) {
            var t = r.LegacyGlobal.get_ff_translation(e) || this.FormFieldRegex[e];
            if (t) return new RegExp(t)
        }, o.regexMatches = function(t, e) {
            var r = !1;
            if (t) {
                var i = function(e, t) {
                    return "string" == typeof t && e.test(t.toLowerCase())
                };
                Array.isArray(e) ? e.forEach(function(e) {
                    return r = r || i(t, e)
                }) : r = i(t, e)
            }
            return r
        }, o.prototype.parse = function(e, t) {
            for (var r = null, i = 0, o = this.operations; i < o.length; i++) {
                var n;
                if ((r = (0, o[i])(e, t)) || !1 === r) break
            }
            return r
        }, o.FormFieldRegex = {
            ff_otp_regexp: "(?:otc|otp|pin|token|rsa|totp)|(validation|verification|challenge|mfa).*code"
        }, o);

        function o() {
            this.operations = []
        }
        t.FieldParserAbstract = i
    }), i("background/services/form-parser/form-meta-data", ["require", "exports", "background/services/form-parser/field-parsers/field-parser.abstract"], function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = (o.prototype.aggregateField = function(e, t, r) {
            var i = r[t];
            i ? ++i.count : r[t] = {
                field: e,
                count: 1
            }
        }, o.prototype.isOneTimePasswordField = function(e) {
            return e && r.FieldParserAbstract.regexMatches(r.FieldParserAbstract.getFormFieldRegex("ff_otp_regexp"), [e.id, e.attributes.name, e.label])
        }, o);

        function o(e) {
            var t = this;
            this.passwordsByValue = {}, this.textFieldsByValue = {}, this.textFieldsByType = {}, this.uniqueTextValues = [], this.uniquePasswords = [], e.fields && (e.fields.forEach(function(e) {
                "password" !== e.type || "" === e.value || t.isOneTimePasswordField(e) ? (t.aggregateField(e, e.value, t.textFieldsByValue), t.aggregateField(e, e.type, t.textFieldsByType)) : t.aggregateField(e, e.value, t.passwordsByValue)
            }), this.uniqueTextValues = Object.keys(this.textFieldsByValue), this.uniquePasswords = Object.keys(this.passwordsByValue))
        }
        t.FormMetaData = i
    }), i("background/interfaces/parsed-form", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }), i("background/interfaces/index", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }), i("background/interfaces/legacy", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }), i("common/interfaces/legacy", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }), i("common/legacy", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.LegacyGlobalCommon = r
    }), i("common/module.abstract", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = (i.prototype.isInitialized = function(e) {
            this._isInitialized ? e() : this.initializedQueue.push(e)
        }, i);

        function i() {
            var e = this;
            this._isInitialized = !1, this.initializedQueue = [], setTimeout(function() {
                return x(e, void 0, void 0, function() {
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
        t.ModuleAbstract = r
    }), i("common/provider.abstract", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = (i.prototype.initialize = function() {
            var t = this;
            Object.keys(this.instances).forEach(function(e) {
                return t.instances[e].initialize()
            }), this.initialized = !0
        }, i.prototype.postInitialize = function() {
            var t = this;
            Object.keys(this.instances).forEach(function(e) {
                "function" == typeof t.instances[e].postInitialize && t.instances[e].postInitialize()
            })
        }, i.prototype.teardown = function() {
            var t = this;
            Object.keys(this.instances).forEach(function(e) {
                t.instances[e] && "function" == typeof t.instances[e].destroy && t.instances[e].destroy()
            })
        }, i);

        function i(e, r) {
            var i = this;
            void 0 === r && (r = !0), this.instances = {}, this.initialized = !1, e && e.size && (this.map = e, this.map.forEach(function(e, t) {
                e.delegated && !r || (i.instances[t] = new e.ctor)
            }))
        }
        t.ProviderAbstract = r
    }), i("common/decorators/register-repository.decorator", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = new Map;

        function r(t, r) {
            return void 0 === r && (r = !1),
                function(e) {
                    i.set(t, {
                        ctor: e,
                        delegated: r
                    })
                }
        }

        function o() {
            return i
        }
        t.RegisterRepository = r, t.getRepositoryRegistry = o
    }), i("common/decorators/register-service.decorator", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = new Map;

        function r(t, r) {
            return void 0 === r && (r = !1),
                function(e) {
                    i.set(t, {
                        ctor: e,
                        delegated: r
                    })
                }
        }

        function o() {
            return i
        }
        t.RegisterService = r, t.getServiceRegistry = o
    }), i("common/messaging/messaging", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = new WeakMap;

        function r(e, t) {
            var r = e.constructor,
                i = c.get(r);
            i && i.size ? i.add(t) : i = new Set([t]), c.set(r, i)
        }
        t.addVisibleMethod = r;
        var l = null;

        function i() {
            return l
        }

        function d(e, t) {
            if ("function" == typeof t) {
                var r = void 0;
                "string" == typeof e ? r = e : e instanceof Error && (r = "string" == typeof e.message ? e.message : "function" == typeof e.toString ? e.toString() : "Unknown error"), t(r)
            } else console.error(e)
        }

        function o(o, n, s, a, u) {
            return void 0 === s && (s = []), x(this, void 0, void 0, function() {
                var t, r, i;
                return F(this, function(e) {
                    switch (e.label) {
                        case 0:
                            if (e.trys.push([0, 3, 4, 5]), !o || !o.constructor) throw new Error("No target provided!");
                            if (!c.has(o.constructor)) throw new Error("Target has no visible methods.");
                            if (!c.get(o.constructor).has(n)) throw new Error("Method [ " + n + " ] is not a visible method.");
                            if ("function" != typeof(t = o[n])) throw new Error("Method [ " + n + " ] is not a function or does not exist on the target.");
                            return l = Object.freeze({
                                calleeTab: Object.freeze(u)
                            }), (r = t.bind(o).apply(void 0, s)) && "function" == typeof r.then ? [4, r] : [3, 2];
                        case 1:
                            r = e.sent(), e.label = 2;
                        case 2:
                            return a(null, r), [3, 5];
                        case 3:
                            return d(i = e.sent(), a), [3, 5];
                        case 4:
                            return l = null, [7];
                        case 5:
                            return [2]
                    }
                })
            })
        }
        t.getInvokatingMessageContext = i, t.handleCallbackError = d, t.callMethod = o
    }), i("common/decorators/visible.decorator", ["require", "exports", "common/messaging/messaging"], function(e, t, r) {
        function i(e, t) {
            r.addVisibleMethod(e, t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Visible = i
    }), i("common/decorators/index", ["require", "exports", "common/decorators/register-repository.decorator", "common/decorators/register-service.decorator", "common/decorators/visible.decorator"], function(e, r, t, i, o) {
        function n(e) {
            for (var t in e) r.hasOwnProperty(t) || (r[t] = e[t])
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), n(t), n(i), n(o)
    }), i("common/interfaces/site.service", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }), i("common/services/topic/topic.service", ["require", "exports", "common/decorators/index", "common/enums/index", "common/legacy"], function(e, t, r, i, o) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = (s.prototype.initialize = function() {}, s.prototype.subscribe = function(e, t) {
            o.LegacyGlobalCommon.Topics.get(e).subscribe(function(e) {
                return t(e)
            })
        }, s = T([r.RegisterService(i.ServiceType.Topic)], s));

        function s() {}
        t.TopicService = n
    }), i("common/services/utils/string-utils.service", ["require", "exports", "common/decorators/index", "common/enums/index"], function(e, t, r, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = (n.prototype.initialize = function() {}, n.prototype.stringContains = function(e, t) {
            if (e && t) {
                Array.isArray(t) || (t = [t]);
                for (var r = 0; r < t.length; ++r)
                    if (-1 < e.indexOf(t[r])) return !0
            }
            return !1
        }, n.prototype.containsMaskingCharacter = function(e) {
            return -1 < e.indexOf("*") || -1 < e.indexOf(String.fromCharCode(8226))
        }, n = T([r.RegisterService(i.ServiceType.StringUtils)], n));

        function n() {}
        t.StringUtilsService = o
    }), i("background/repositories/feature/feature.repository", ["require", "exports", "common/decorators/index", "common/enums/index", "background/legacy"], function(e, t, r, i, o) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = (s.prototype.initialize = function() {}, s.prototype.get = function(e) {
            return o.LegacyGlobal.LPContentScriptFeatures[this.resolvePropertyName(e)]
        }, s.prototype.set = function(e, t) {
            o.LegacyGlobal.LPContentScriptFeatures[this.resolvePropertyName(e)] = t
        }, s.prototype.resolvePropertyName = function(e) {
            if (this.featureEnumNames.has(e)) return i.FeatureType[e];
            if (this.featurePropertyNames.has(e)) return e;
            throw new TypeError("Unrecognized feature name: [ " + e + " ]")
        }, T([r.Visible], s.prototype, "get", null), T([r.Visible], s.prototype, "set", null), s = T([r.RegisterRepository(i.RepositoryType.Feature)], s));

        function s() {
            var t = this;
            this.featureEnumNames = new Set, this.featurePropertyNames = new Set, Object.keys(i.FeatureType).forEach(function(e) {
                t.featureEnumNames.add(e), t.featurePropertyNames.add(i.FeatureType[e])
            })
        }
        t.FeatureRepository = n
    }), i("background/repositories/repository-provider", ["require", "exports", "common/provider.abstract", "common/messaging/messaging"], function(e, t, r, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = (o = r.ProviderAbstract, O(s, o), s.prototype.getRepository = function(e) {
                return this.instances[e]
            }, s.prototype.call = function(e, t, r, i, o) {
                void 0 === r && (r = []);
                try {
                    n.callMethod(this.getRepository(e), t, r, i, o)
                } catch (e) {
                    n.handleCallbackError(e, i)
                }
            }, s),
            o;

        function s() {
            return null !== o && o.apply(this, arguments) || this
        }
        t.RepositoryProvider = i
    }), i("background/repositories/index", ["require", "exports", "background/repositories/feature/feature.repository", "background/repositories/repository-provider"], function(e, r, t, i) {
        function o(e) {
            for (var t in e) r.hasOwnProperty(t) || (r[t] = e[t])
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), o(t), o(i)
    }), i("background/services/basic-auth/auth-credential", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = i;

        function i(e, t, r, i) {
            void 0 === t && (t = ""), void 0 === r && (r = ""), void 0 === i && (i = !1), this.url = e, this.userName = t, this.password = r, this.suppliedBefore = i, this.cancelled = !1
        }
        t.AuthCredential = r
    }), i("background/services/basic-auth/basic-auth.service", ["require", "exports", "common/decorators/index", "common/enums/index", "background/legacy", "background/services/basic-auth/auth-credential"], function(e, t, r, i, o, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = (a.prototype.initialize = function() {
            this.subscribeEvents()
        }, a.prototype.subscribeEvents = function() {
            var i = this;
            o.LegacyGlobal.LPPlatform.onAuthRequired(function(e, t) {
                if (o.LegacyGlobal.g_basicauth_feature_enabled && "basic" === e.scheme) {
                    var r = i.authCredentials[e.tabId];
                    if (r && !r.cancelled && !r.suppliedBefore) return i.authCredentials[e.tabId] = new n.AuthCredential(e.url, r.userName, r.password, !0), i.removeAuth(t), {
                        authCredentials: {
                            username: r.userName,
                            password: r.password
                        }
                    };
                    if (!r) return i.authCredentials[e.tabId] = new n.AuthCredential(e.url), {
                        cancel: !0
                    }
                }
            }), o.LegacyGlobal.LPPlatform.onTabClosed(function(e) {
                i.removeAuth(e)
            })
        }, a.prototype.removeAuth = function(e) {
            var t;
            this.authCredentials[e] && delete this.authCredentials[e]
        }, a.prototype.isBasicAuth = function(e, t) {
            var r = !1,
                i = !1;
            if (t && t.tabID) {
                var o = this.authCredentials[t.tabID];
                o && (o.url !== t.tabURL ? this.removeAuth(t.tabID) : o.cancelled || (r = !0, i = o.suppliedBefore))
            }
            e(r, i)
        }, a.prototype.setAuthCredential = function(e, t, r, i) {
            var o = this.authCredentials[i.tabID];
            o.userName = e, o.password = t, r()
        }, a.prototype.cancelBasicAuth = function(e) {
            var t;
            this.authCredentials[e.tabID] && (this.authCredentials[e.tabID].cancelled = !0)
        }, a.prototype.hasFeature = function(e) {
            e(!0)
        }, a.prototype.isNotificationClosed = function(e) {
            e("closed" === o.LegacyGlobal.localStorage_getItem("basicAuthPopupState"))
        }, a.prototype.closeNotification = function() {
            o.LegacyGlobal.localStorage_setItem("basicAuthPopupState", "closed")
        }, a = T([r.RegisterService(i.ServiceType.BasicAuth)], a));

        function a() {
            this.authCredentials = {}
        }
        t.BasicAuthService = s
    }), i("background/services/form-parser/field-parsers/password-field-parser", ["require", "exports", "background/services/form-parser/field-parsers/field-parser.abstract", "common/enums/index", "background/background.module"], function(e, t, n, r, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = (s = n.FieldParserAbstract, O(a, s), a.prototype.excludedFieldOperation = function(e) {
                for (var t = 0; t < e.fields.length; ++t)
                    for (var r = e.fields[t], i = 0; i < a.excludedFields.length; ++i) {
                        var o = a.excludedFields[i];
                        if (o.regex) {
                            if ("attr" === o.type && n.FieldParserAbstract.regexMatches(o.regex, [r.id, r.attributes.name])) return !1;
                            if ("text" === o.type && n.FieldParserAbstract.regexMatches(o.regex, r.label)) return !1
                        }
                    }
                return null
            }, a.prototype.singlePasswordFieldOperation = function(e, t) {
                if (1 !== t.uniquePasswords.length) return null;
                var r = t.uniquePasswords[0];
                return 2 === t.passwordsByValue[r].count && (2 === e.fields.length ? e.passwordChangeForm = !0 : e.createAccountForm = !0), r
            }, a.prototype.multiplePasswordOperation = function(e, t) {
                for (var r = 0, i = t.uniquePasswords; r < i.length; r++) {
                    var o = i[r],
                        n;
                    if (1 < t.passwordsByValue[o].count) return 2 === t.uniquePasswords.length ? (e.passwordChangeForm = !0, e.originalPassword = t.uniquePasswords[0] === o ? t.uniquePasswords[1] : t.uniquePasswords[0]) : e.createAccountForm = !0, o
                }
                return null
            }, a.prototype.multiplePasswordsOneExistingOperation = function(e, t) {
                if (2 === t.uniquePasswords.length) {
                    var r = this.findMatchingPassword(this.siteService.getSites(e.url), t.uniquePasswords);
                    if (r) return e.passwordChangeForm = !0, e.originalPassword = r, t.uniquePasswords[0] === r ? t.uniquePasswords[1] : t.uniquePasswords[0]
                }
                return null
            }, a.prototype.passwordLikeAttribute = function(e, t) {
                for (var r = 0, i = t.uniquePasswords; r < i.length; r++) {
                    var o = i[r],
                        n = t.passwordsByValue[o].field,
                        s = ["pw", "pass"];
                    if (this.stringUtils.stringContains(n.attributes.name, s) || this.stringUtils.stringContains(n.id, s)) return o
                }
            }, a.prototype.findMatchingPassword = function(e, t) {
                for (var r = 0; r < e.length; ++r) {
                    var i = this.siteService.findMatchingSitePassword(e[r], t);
                    if (i) return i
                }
                return null
            }, a.excludedFields = [], a),
            s;

        function a() {
            var t = s.call(this) || this;
            return t.stringUtils = i.getService(r.ServiceType.StringUtils), t.siteService = i.getService(r.ServiceType.Site), a.excludedFields.length || (a.excludedFields = [{
                type: "attr",
                regex: n.FieldParserAbstract.getFormFieldRegex("ff_ssn_regexp")
            }, {
                type: "attr",
                regex: n.FieldParserAbstract.getFormFieldRegex("ff_cccsc_regexp")
            }, {
                type: "attr",
                regex: n.FieldParserAbstract.getFormFieldRegex("ff_securityanswer_regexp")
            }, {
                type: "attr",
                regex: n.FieldParserAbstract.getFormFieldRegex("ff_captcha_regexp")
            }, {
                type: "text",
                regex: n.FieldParserAbstract.getFormFieldRegex("ff_text_ssn_regexp")
            }, {
                type: "text",
                regex: n.FieldParserAbstract.getFormFieldRegex("ff_text_cccsc_regexp")
            }]), t.operations = [t.excludedFieldOperation, t.singlePasswordFieldOperation, t.multiplePasswordsOneExistingOperation, t.multiplePasswordOperation, t.passwordLikeAttribute], t.operations = t.operations.map(function(e) {
                return e.bind(t)
            }), t
        }
        t.PasswordFieldParser = o
    }), i("background/services/form-parser/field-parsers/user-name-field-parser", ["require", "exports", "background/services/form-parser/field-parsers/field-parser.abstract", "common/enums/service-type", "background/legacy", "background/background.module"], function(e, t, o, r, i, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = (a = o.FieldParserAbstract, O(u, a), u.prototype.userNameLikeLabelOperation = function(e) {
                if (this.userNameRegEx)
                    for (var t = 0, r = e.fields; t < r.length; t++) {
                        var i = r[t];
                        if (o.FieldParserAbstract.regexMatches(this.userNameRegEx, i.label)) return i.value
                    }
                return null
            }, u.prototype.userNameLikeAttributeOperation = function(e, t) {
                for (var r = 0, i = t.uniqueTextValues; r < i.length; r++) {
                    var o = i[r],
                        n = t.textFieldsByValue[o].field,
                        s = "user";
                    if (this.stringUtils.stringContains(n.attributes.name, s) || this.stringUtils.stringContains(n.id, s)) return o
                }
                return null
            }, u.prototype.singleTextFieldOperation = function(e, t) {
                if (1 !== t.uniqueTextValues.length) return null;
                var r = t.uniqueTextValues[0];
                return 2 === t.textFieldsByValue[r].count && (e.createAccountForm = !0), r
            }, u.prototype.multipleTextFieldOperation = function(e, t) {
                for (var r = 0, i = t.uniqueTextValues; r < i.length; r++) {
                    var o = i[r];
                    if (1 < t.textFieldsByValue[o].count) return e.createAccountForm = !0, o
                }
                return null
            }, u.prototype.nearPasswordFieldOpeartion = function(e) {
                for (var t = e.fields, r = 1; r < t.length; ++r) {
                    var i;
                    if ("password" === t[r].type) {
                        var o = t[r - 1];
                        if ("password" !== o.type) return o.value
                    }
                }
                return null
            }, u.prototype.existingUserNameOperation = function(e, t) {
                for (var r in i.LegacyGlobal.g_sites)
                    if (-1 < t.uniqueTextValues.indexOf(i.LegacyGlobal.g_sites[r].unencryptedUsername)) return i.LegacyGlobal.g_sites[r].unencryptedUsername;
                return null
            }, u.prototype.uniqueEmailFieldOperation = function(e, t) {
                for (var r = [], i = 0, o = t.uniqueTextValues; i < o.length; i++) {
                    var n = o[i],
                        s = n.match(u.emailRegex);
                    s && 1 === s.length && r.push(n)
                }
                return 1 === r.length ? r[0] : null
            }, u.emailRegex = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*/g, u),
            a;

        function u(e) {
            var t = a.call(this) || this;
            return t.isStrict = e, t.userNameRegEx = o.FieldParserAbstract.getFormFieldRegex("ff_username_regexp"), t.stringUtils = n.getService(r.ServiceType.StringUtils), t.isStrict ? t.operations = [t.userNameLikeLabelOperation, t.uniqueEmailFieldOperation, t.userNameLikeAttributeOperation] : t.operations = [t.userNameLikeLabelOperation, t.uniqueEmailFieldOperation, t.userNameLikeAttributeOperation, t.singleTextFieldOperation, t.multipleTextFieldOperation, t.nearPasswordFieldOpeartion, t.existingUserNameOperation], t.operations = t.operations.map(function(e) {
                return e.bind(t)
            }), t
        }
        t.UserNameFieldParser = s
    }), i("background/services/form-parser/field-parsers/index", ["require", "exports", "background/services/form-parser/field-parsers/password-field-parser", "background/services/form-parser/field-parsers/user-name-field-parser"], function(e, r, t, i) {
        function o(e) {
            for (var t in e) r.hasOwnProperty(t) || (r[t] = e[t])
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), o(t), o(i)
    }), i("background/services/form-parser/parsed-form", ["require", "exports", "background/background.module", "common/enums/index", "background/services/form-parser/form-meta-data", "background/services/form-parser/field-parsers/index"], function(e, t, d, p, f, v) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = (i.prototype.submitted = function(e) {
            return "boolean" == typeof e && (this._submitted = e), this._submitted
        }, i.prototype.succeeded = function(e) {
            return "boolean" == typeof e && (this._succeeded = e), this._succeeded
        }, i.prototype.getUsernameField = function() {
            return this.userNameField
        }, i.prototype.getUsername = function() {
            return this.formProfile.username
        }, i.prototype.getPassword = function() {
            return this.formProfile.password
        }, i.prototype.getOriginalPassword = function() {
            return this.formProfile.originalPassword
        }, i.prototype.getFormProfile = function() {
            return this.formProfile
        }, i.prototype.getFormMetaData = function() {
            return this.metaData
        }, i.prototype.getFields = function() {
            return this.formProfile.fields
        }, i.prototype.isChangePasswordForm = function() {
            return !!this.formProfile.passwordChangeForm
        }, i.prototype.isCreateAccountForm = function() {
            return !!this.formProfile.passwordChangeForm || !!this.formProfile.generatedPassword
        }, i.prototype.isBasicAuthentication = function() {
            return !!this.formProfile.basicAuthentication
        }, i.prototype.shouldSaveFields = function() {
            return !this.isChangePasswordForm() && !this.isCreateAccountForm()
        }, i.prototype.getURL = function() {
            return this.formProfile.url
        }, i);

        function i(e, t) {
            this.formProfile = null, this.userNameField = null, this.metaData = null, this._succeeded = !1, this._submitted = !1;
            var r = d.getService(p.ServiceType.Site);
            if (e.fields = e.fields || [], this.metaData = new f.FormMetaData(e), !e.password) {
                var i = (new v.PasswordFieldParser).parse(e, this.metaData);
                e.generatedPassword ? e.password = e.generatedPassword : "string" == typeof i && (e.password = i)
            }
            var o, n = new v.UserNameFieldParser(t && t.strict).parse(e, this.metaData),
                s = [],
                a;
            "string" == typeof n && (s = r.getSites(e.url).filter(function(e) {
                return r.hasMatchingSiteUserName(e, n)
            }), e.username && 0 === s.length && !e.createAccountForm || (e.username = n));
            if (e.username && !e.createAccountForm)
                for (var u = 0, c = e.fields; u < c.length; u++) {
                    var l = c[u];
                    if (l.value === e.username) {
                        this.userNameField = l;
                        break
                    }
                }
            this.formProfile = e, this._submitted = !e.generatedPassword
        }
        t.ParsedForm = r
    }), i("background/services/form-parser/form-parser.service", ["require", "exports", "common/decorators/index", "common/enums/index", "background/services/form-parser/parsed-form"], function(e, t, r, i, o) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = (s.prototype.initialize = function() {}, s.prototype.parse = function(e, t) {
            return new o.ParsedForm(e, t)
        }, s = T([r.RegisterService(i.ServiceType.FormParser)], s));

        function s() {}
        t.FormParserService = n
    }), i("background/services/segment/events/save-site-dialog", ["require", "exports", "common/enums/index", "background/legacy", "common/enums/save-site-action"], function(e, t, o, i, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = (s.prototype.getProperties = function() {
            return x(this, void 0, void 0, function() {
                var t, r, i;
                return F(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, this.getTabState(this.sourceTabId)];
                        case 1:
                            return t = e.sent(), r = this.getCommonProperties(t, this.properties), [2, i = R({}, r, {
                                Action: n.SaveSiteAction[this.properties.action],
                                DetectionType: this.properties.detectionType,
                                saveSiteEvent: o.SaveSiteDialogEventType[this.properties.saveSiteEvent]
                            })]
                    }
                })
            })
        }, s.prototype.getCommonProperties = function(e, t) {
            var r = t.sameDomain,
                i = t.generatedPassword,
                o = this.getViewState(),
                n;
            return {
                "Domain Sites": this.getDomainSites(e),
                "Matching Sites": this.getMatchingSites(e),
                "Domain Changed": !r,
                "Generated Password": i,
                "View State": o
            }
        }, s.prototype.getTabState = function(r) {
            return x(this, void 0, void 0, function() {
                var t;
                return F(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, new Promise(function(e) {
                                return i.LegacyGlobal.LPTabState.getStateByTabId(r, e)
                            })];
                        case 1:
                            return (t = e.sent()) ? [2, t] : [2, null]
                    }
                })
            })
        }, s.prototype.getViewState = function() {
            var e = this.properties,
                t = e.matchingSites,
                r = e.defaultData;
            if (1 < t.length) return "Update Select";
            if (1 === t.length) return "Update";
            var i = r.domainSites,
                o = r.unencryptedUsername;
            return o && "" !== o ? "Add" : 1 < i.length ? "Update Select" : 1 === i.length ? "Update" : "Add"
        }, s.prototype.getMatchingSites = function(e) {
            var t = this.properties.matchingSites,
                r = e.getMatchingSites();
            return t ? t.length : r && void 0 !== r.length ? r.length : 0
        }, s.prototype.getDomainSites = function(e) {
            var t = this.properties.defaultData,
                r = e.getDomainSites();
            return t && void 0 !== t.domainSites ? t.domainSites.length : r && void 0 !== r.length ? r.length : 0
        }, s);

        function s(e, t) {
            if (this.sourceTabId = e, this.properties = t, this.type = o.SegmentEventType.SaveSiteDialog, !e || "number" != typeof e) throw new TypeError("Missing a valid source tab ID.");
            if (!t) throw new TypeError('Missing "properties" argument.');
            if (!t.saveSiteEvent) throw new TypeError('Missing "saveSiteEvent" property.');
            if (!t.defaultData || void 0 === t.matchingSites) throw new TypeError("Unable to retrieve necessary site data from properties.");
            if (t.saveSiteEvent === o.SaveSiteDialogEventType.SaveSiteDialogAction) throw new TypeError("Action argument required for SaveSiteDialogAction events.")
        }
        t.SaveSiteDialogEvent = r
    }), i("background/services/segment/events/event.factory", ["require", "exports", "background/services/segment/events/index", "common/enums/index"], function(e, t, a, u) {
        function r(o, n, s) {
            return x(this, void 0, void 0, function() {
                var t, r, i;
                return F(this, function(e) {
                    switch (e.label) {
                        case 0:
                            switch (r = "properties", o) {
                                case u.SegmentEventType.SaveSiteDialog:
                                    r = "saveSiteDialogProperties", t = new a.SaveSiteDialogEvent(n, s);
                                    break;
                                case u.SegmentEventType.CrossDomainFillWarningShown:
                                    break;
                                default:
                                    throw new Error("Unsupported Segment Event type: " + o)
                            }
                            return [4, t.getProperties()];
                        case 1:
                            return i = e.sent(), [2, [r, i]]
                    }
                })
            })
        }

        function i(o, n) {
            return x(this, void 0, void 0, function() {
                var t, r, i;
                return F(this, function(e) {
                    switch (e.label) {
                        case 0:
                            switch (r = "properties", o) {
                                case u.SegmentEventType.ExtensionMenuItemClicked:
                                    r = "extensionMenuItemClickedProperties", t = new a.ExtensionMenuItemClickedEvent(n);
                                    break;
                                case u.SegmentEventType.FeedbackGoalClicked:
                                    r = "feedbackGoalClickedProperties", t = new a.FeedbackGoalClickedEvent(n);
                                    break;
                                case u.SegmentEventType.FeedbackIssueClicked:
                                    r = "feedbackIssueClickedProperties", t = new a.FeedbackIssueClickedEvent(n);
                                    break;
                                case u.SegmentEventType.FeedbackSent:
                                    r = "feedbackSentProperties", t = new a.FeedbackSentEvent(n);
                                    break;
                                default:
                                    throw new Error("Unsupported Segment Event type: " + o)
                            }
                            return [4, t.getProperties()];
                        case 1:
                            return i = e.sent(), [2, [r, i]]
                    }
                })
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.createSegmentEvent = r, t.createExtensionSegmentEvent = i
    }), i("background/services/segment/events/extension-menu-item-clicked", ["require", "exports", "common/enums/index"], function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = (o.prototype.getProperties = function() {
            return x(this, void 0, void 0, function() {
                var t;
                return F(this, function(e) {
                    return [2, t = {
                        Item: this.properties.Item
                    }]
                })
            })
        }, o);

        function o(e) {
            if (this.properties = e, this.type = r.SegmentEventType.ExtensionMenuItemClicked, !e) throw new TypeError('Missing "properties" argument.')
        }
        t.ExtensionMenuItemClickedEvent = i
    }), i("background/services/segment/events/feedback-goal-clicked", ["require", "exports", "common/enums/index"], function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = (o.prototype.getProperties = function() {
            return x(this, void 0, void 0, function() {
                var t;
                return F(this, function(e) {
                    return [2, t = {
                        Goal: this.properties.Goal
                    }]
                })
            })
        }, o);

        function o(e) {
            if (this.properties = e, this.type = r.SegmentEventType.FeedbackGoalClicked, !e) throw new TypeError('Missing "properties" argument.')
        }
        t.FeedbackGoalClickedEvent = i
    }), i("background/services/segment/events/feedback-issue-clicked", ["require", "exports", "common/enums/index"], function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = (o.prototype.getProperties = function() {
            return x(this, void 0, void 0, function() {
                var t;
                return F(this, function(e) {
                    return [2, t = {
                        Issue: this.properties.Issue
                    }]
                })
            })
        }, o);

        function o(e) {
            if (this.properties = e, this.type = r.SegmentEventType.FeedbackIssueClicked, !e) throw new TypeError('Missing "properties" argument.')
        }
        t.FeedbackIssueClickedEvent = i
    }), i("background/services/segment/events/feedback-sent", ["require", "exports", "common/enums/index"], function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = (o.prototype.getProperties = function() {
            return x(this, void 0, void 0, function() {
                var t;
                return F(this, function(e) {
                    return [2, t = {
                        Domain: this.properties.Domain,
                        Goal: this.properties.Goal,
                        Issue: this.properties.Issue,
                        Description: this.properties.Description
                    }]
                })
            })
        }, o);

        function o(e) {
            if (this.properties = e, this.type = r.SegmentEventType.FeedbackSent, !e) throw new TypeError('Missing "properties" argument.')
        }
        t.FeedbackSentEvent = i
    }), i("background/services/segment/events/index", ["require", "exports", "background/services/segment/events/save-site-dialog", "background/services/segment/events/event.factory", "background/services/segment/events/extension-menu-item-clicked", "background/services/segment/events/feedback-goal-clicked", "background/services/segment/events/feedback-issue-clicked", "background/services/segment/events/feedback-sent"], function(e, r, t, i, o, n, s, a) {
        function u(e) {
            for (var t in e) r.hasOwnProperty(t) || (r[t] = e[t])
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), u(t), u(i), u(o), u(n), u(s), u(a)
    }), i("background/services/segment/segment.service", ["require", "exports", "common/decorators/index", "common/enums/index", "background/legacy", "background/services/segment/events/index", "common/messaging/messaging"], function(e, t, r, d, i, p, f) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = (n.prototype.initialize = function() {}, n.prototype.send = function(e, t) {
            i.LegacyGlobal.sendLpImprove(e, t)
        }, n.prototype.sendTypedEvent = function(c, l) {
            return x(this, void 0, void 0, function() {
                var t, r, i, o, n, s, i, o, a, u;
                return F(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return t = d.SegmentEventType[c], console.assert(t, "Segment event " + c + " is not a valid event!"), t ? t !== d.SegmentEventType.CrossDomainFillWarningShown ? [3, 1] : (this.send(t, null), [3, 5]) : [3, 5];
                        case 1:
                            return -1 < this.ExtensionEvents.indexOf(t) ? [4, p.createExtensionSegmentEvent(t, l)] : [3, 3];
                        case 2:
                            return r = e.sent(), i = r[0], (o = r[1]) && this.send(t, ((a = {})[i] = JSON.stringify(o), a)), [3, 5];
                        case 3:
                            return n = f.getInvokatingMessageContext(), [4, p.createSegmentEvent(t, n.calleeTab.tabID, l)];
                        case 4:
                            s = e.sent(), i = s[0], (o = s[1]) && this.send(t, ((u = {})[i] = JSON.stringify(o), u)), e.label = 5;
                        case 5:
                            return [2]
                    }
                })
            })
        }, T([r.Visible], n.prototype, "sendTypedEvent", null), n = T([r.RegisterService(d.ServiceType.Segment)], n));

        function n() {
            this.ExtensionEvents = [d.SegmentEventType.ExtensionMenuItemClicked, d.SegmentEventType.FeedbackSent, d.SegmentEventType.FeedbackGoalClicked, d.SegmentEventType.FeedbackIssueClicked]
        }
        t.SegmentService = o
    }), i("background/services/service-provider", ["require", "exports", "common/provider.abstract", "common/enums/index", "common/messaging/messaging", "background/background.module"], function(e, t, r, i, s, a) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = (n = r.ProviderAbstract, O(u, n), u.prototype.getService = function(e, t) {
                var r = this.map.get(e);
                if (!r) return null;
                var i = r.delegated,
                    o;
                if (!t && i) throw new Error("Must provide a target for delegated service [ " + e + " ]");
                if (t && !i) throw new Error("Target not supported for non-delegated service [ " + e + " ]");
                return i ? new r.ctor(t) : this.instances[e]
            }, u.prototype.postInitialize = function() {
                n.prototype.postInitialize.call(this), window.basicAuth = this.getService(i.ServiceType.BasicAuth)
            }, u.prototype.call = function(e, t, r, i, o) {
                void 0 === r && (r = []);
                try {
                    s.callMethod(this.getService(e), t, r, i, o)
                } catch (e) {
                    s.handleCallbackError(e, i)
                }
            }, u),
            n;

        function u() {
            return null !== n && n.apply(this, arguments) || this
        }

        function c(e, t, o, n, r) {
            a.getContentScriptInterfaces(e).then(function(e) {
                return e.forEach(function(e) {
                    if ("function" != typeof r) return new Promise(function(r, i) {
                        e.LPModule.callService(t, o, n, function(e, t) {
                            return e ? i(e) : r(t)
                        })
                    });
                    e.LPModule.callService(t, o, n, r)
                })
            }).catch(function(e) {
                s.handleCallbackError(e, r)
            })
        }
        t.ServiceProvider = o, t.callContentScriptService = c
    }), i("background/services/site/site.service", ["require", "exports", "common/decorators/index", "common/enums/index", "background/legacy", "background/background.module"], function(e, t, r, i, o, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = (a.prototype.initialize = function() {
            this.stringUtils = n.getService(i.ServiceType.StringUtils)
        }, a.prototype.getSites = function(e) {
            var t = o.LegacyGlobal.lp_gettld_url(e),
                r = this.siteGroups.get(e) || {
                    accountsVersion: NaN,
                    sites: []
                };
            return r.accountsVersion !== o.LegacyGlobal.g_local_accts_version && (r.accountsVersion = o.LegacyGlobal.g_local_accts_version, r.sites = o.LegacyGlobal.reorderOnURL(o.LegacyGlobal.getsites(t), e), this.siteGroups.set(e, r)), r.sites
        }, a.prototype.findSites = function(e, t, r) {
            var i = this;
            return this.getSites(e).filter(function(e) {
                return i.hasMatchingSiteUserName(e, t)
            }).filter(function(e) {
                return i.findMatchingSitePassword(e, r)
            })
        }, a.prototype.getUserNames = function(e) {
            return this.getSites(e).map(function(e) {
                return e.unencryptedUsername
            })
        }, a.prototype.decrypt = function(e, t) {
            return o.LegacyGlobal.lpmdec_acct(t, !0, e, o.LegacyGlobal.g_shares)
        }, a.prototype.findMatchingSitePassword = function(e, t) {
            Array.isArray(t) || (t = [t]);
            var r = t.indexOf(this.decrypt(e, e.password));
            if (-1 === r && e.fields && 0 < e.fields.length)
                for (var i = 0; i < e.fields.length; ++i) {
                    var o = e.fields[i];
                    if ("password" === o.type && -1 < (r = t.indexOf(this.decrypt(e, o.value)))) break
                }
            return -1 < r ? t[r] : null
        }, a.prototype.hasMatchingSiteUserName = function(e, t) {
            if (!t) return !1;
            if (this.userNamesMatch(e.unencryptedUsername, t)) return !0;
            if (e.fields && e.fields.length)
                for (var r = 0, i = e.fields; r < i.length; r++) {
                    var o = i[r];
                    switch (o.type) {
                        case "text":
                        case "email":
                        case "tel":
                            if (this.userNamesMatch(this.decrypt(e, o.value), t)) return !0
                    }
                }
            return !1
        }, a.prototype.userNamesMatch = function(e, t) {
            return e === t || this.userNameInEmail(e, t) || this.userNameInEmail(t, e) || this.isMaskedUsername(e, t)
        }, a.prototype.userNameInEmail = function(e, t) {
            if (t && -1 < t.indexOf("@")) {
                var r = t.split("@");
                return 2 === r.length && e === r[0]
            }
            return !1
        }, a.prototype.isMaskedUsername = function(e, t) {
            return !!this.stringUtils.containsMaskingCharacter(t) && e.length === t.length && (e[0] === t[0] || e[e.length - 1] === t[t.length - 1])
        }, T([r.Visible], a.prototype, "getUserNames", null), a = T([r.RegisterService(i.ServiceType.Site)], a));

        function a() {
            this.siteGroups = new Map
        }
        t.SiteService = s
    }), i("background/services/tools/background-tools.service", ["require", "exports", "common/decorators/index", "common/enums/index"], function(e, t, r, i) {
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
        }, n.prototype.debounce = function(n, s, a) {
            var u;
            return function() {
                for (var e = this, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                var i = function() {
                        u = null, a || n.apply(e, t)
                    },
                    o = a && !u;
                clearTimeout(u), u = window.setTimeout(i, s), o && n.apply(this, t)
            }
        }, n = T([r.RegisterService(i.ServiceType.BackgroundTools)], n));

        function n() {
            this.unloading = !1
        }
        t.BackgroundTools = o
    }), i("background/services/web-request/web-request-shim.service", ["require", "exports", "common/decorators/index", "common/enums/index", "background/background.module"], function(e, t, r, i, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = (s.prototype.initialize = function() {
            var o = this;
            this.webRequest = n.getService(i.ServiceType.WebRequest);
            var e = n.getService(i.ServiceType.Topic);
            e.subscribe(i.TopicType.LoginFinished, function() {
                o.webRequest.isEnabled() && (e.subscribe(i.TopicType.ProcessedFormSubmit, function(e) {
                    var t = e.password,
                        r = e.tabId,
                        i = e.inputValues;
                    t && o.handleOnBefore(r, i, "NONE")
                }), e.subscribe(i.TopicType.PasswordFormSubmitted, function(e) {
                    var t = e.form,
                        r = e.tabId;
                    t && o.handleOnCompleted(r, "NONE", 200)
                }))
            })
        }, s.prototype.handleOnBefore = function(e, t, r) {
            this.webRequest.isEnabled() && this.webRequest.addRequest({
                requestBody: {
                    formData: {
                        inputValues: t
                    }
                },
                requestId: r,
                tabId: e,
                method: void 0,
                url: void 0,
                timeStamp: void 0,
                frameId: void 0,
                parentFrameId: void 0,
                type: void 0
            })
        }, s.prototype.handleOnCompleted = function(e, t, r) {
            this.webRequest.isEnabled() && this.webRequest.resolveRequest({
                tabId: e,
                requestId: t,
                statusCode: r
            })
        }, s.prototype.handleOnError = function(e, t, r, i) {
            this.webRequest.isEnabled() && this.webRequest.resolveRequest({
                tabId: e,
                requestId: t,
                statusCode: r,
                error: i
            })
        }, T([r.Visible], s.prototype, "handleOnBefore", null), T([r.Visible], s.prototype, "handleOnCompleted", null), T([r.Visible], s.prototype, "handleOnError", null), s = T([r.RegisterService(i.ServiceType.WebRequestShim)], s));

        function s() {}
        t.WebRequestShimService = o
    }), i("background/services/web-request/request-resolvers/request-resolver.abstract", ["require", "exports"], function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = (Object.defineProperty(i.prototype, "Type", {
            get: function() {
                return this.type
            },
            enumerable: !0,
            configurable: !0
        }), i);

        function i(e) {
            this.type = e
        }
        t.RequestResolverAbstract = r
    }), i("background/services/web-request/request-resolvers/password-submitted-request-resolver.abstract", ["require", "exports", "background/services/web-request/request-resolvers/request-resolver.abstract", "background/legacy", "background/services/form-parser/parsed-form", "background/background.module", "common/enums/index"], function(e, t, r, l, d, i, o) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = (s = r.RequestResolverAbstract, O(a, s), a.prototype.sendSegmentEvent = function(u, c, l) {
                return x(this, void 0, void 0, function() {
                    var t, r, i, o, n, s, a;
                    return F(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, this.getTabState(c.tabId)];
                            case 1:
                                return t = e.sent(), i = (r = u).send, o = ["passwordsubmitted"], n = {
                                    type: l
                                }, a = (s = JSON).stringify, [4, this.getPasswordSubmittedProperties(c, t)];
                            case 2:
                                return i.apply(r, o.concat([(n.passwordSubmittedProperties = a.apply(s, [e.sent()]), n)])), t.clearFillSource(), [2]
                        }
                    })
                })
            }, a.prototype.getPasswordSubmittedProperties = function(u, c) {
                return x(this, void 0, void 0, function() {
                    var t, r, i, o, n, s, a;
                    return F(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return t = new d.ParsedForm(u), [4, c.getMatchingSites(u.username, u).length];
                            case 1:
                                return r = e.sent(), [4, c.getLastFillSource()];
                            case 2:
                                return i = e.sent(), [4, c.getFillSourceCounts()];
                            case 3:
                                return o = e.sent(), n = this.getUsedGeneratedPassword(t, c, i), s = (u.originalPassword !== u.currentPassword || n) && 0 < r, [2, a = {
                                    "Domain Sites": this.siteService.getSites(u.url).length,
                                    "Matching Sites": r,
                                    "Generated Password": n,
                                    "Input Counts": this.getInputCounts(t),
                                    "Password Changed": s,
                                    "Fill Source": i,
                                    "Fill Source Counts": o,
                                    Settings: {
                                        "Show Save Site Notification Bar": l.LegacyGlobal.Preferences.get("showSaveNotificationBar"),
                                        "Show Change Notification Bar": l.LegacyGlobal.Preferences.get("showChangeNotificationBar"),
                                        "Never Add Site": l.LegacyGlobal.hasNeverSave(l.LegacyGlobal.g_currenturl, l.LegacyGlobal.lp_gettld_url(l.LegacyGlobal.g_currenturl))
                                    }
                                }]
                        }
                    })
                })
            }, a.prototype.getInputCounts = function(e) {
                var r = e.getFormMetaData(),
                    t = Object.keys(r.passwordsByValue).reduce(function(e, t) {
                        return e + r.passwordsByValue[t].count
                    }, 0);
                return {
                    Username: e.getUsername() ? 1 : 0,
                    Password: t
                }
            }, a.prototype.getUsedGeneratedPassword = function(e, t, r) {
                var i = e.getFormMetaData(),
                    o;
                return e.getFormProfile().usedGeneratedPassword || -1 < i.uniquePasswords.indexOf(t.generatedPassword) || "Generated" === r
            }, a.prototype.getTabState = function(r) {
                return x(this, void 0, void 0, function() {
                    var t;
                    return F(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, new Promise(function(e) {
                                    return l.LegacyGlobal.LPTabState.getStateByTabId(r, e)
                                })];
                            case 1:
                                return (t = e.sent()) ? [2, t] : [2, null]
                        }
                    })
                })
            }, a),
            s;

        function a(e) {
            var t = s.call(this, e) || this;
            return t.siteService = i.getService(o.ServiceType.Site), t
        }
        t.PasswordSubmittedRequestResolverAbstract = n
    }), i("background/services/web-request/request-resolvers/injected-password-submitted", ["require", "exports", "background/services/web-request/request-resolvers/password-submitted-request-resolver.abstract", "common/enums/index", "background/background.module"], function(e, t, r, i, o) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = (s = r.PasswordSubmittedRequestResolverAbstract, O(a, s), a.prototype.resolveSuccess = function(e) {
                s.prototype.sendSegmentEvent.call(this, this.segmentService, e, "inject")
            }, a.prototype.resolveError = function(e, t) {
                this.segmentService.send("passwordsubmitted", {
                    type: "inject",
                    error: e,
                    status: t
                })
            }, a),
            s;

        function a() {
            var e = s.call(this, i.ResolverType.InjectedPasswordSubmitted) || this;
            return e.segmentService = o.getService(i.ServiceType.Segment), e
        }
        t.InjectedPasswordSubmittedResolver = n
    }), i("background/services/web-request/request-resolvers/password-submitted", ["require", "exports", "background/services/web-request/request-resolvers/password-submitted-request-resolver.abstract", "common/enums/index", "background/background.module", "background/legacy"], function(e, t, r, i, o, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = (a = r.PasswordSubmittedRequestResolverAbstract, O(u, a), u.prototype.resolveSuccess = function(e) {
                var t = n.LegacyGlobal.LPTabState.getStateByTabIdImmediate(e.tabId);
                if (a.prototype.sendSegmentEvent.call(this, this.segmentService, e, "webrequest"), !t.neverSave) {
                    this.delegatedSiteNotificationService = o.getService(i.ServiceType.SiteNotification, {
                        tabId: e.tabId
                    });
                    var r = t.getWebRequestSiteNotificationData(e);
                    r.showNotification && !r.generatedPassword && this.delegatedSiteNotificationService.showSiteNotification(e.tabId, r)
                }
            }, u.prototype.resolveError = function(e, t) {
                this.segmentService.send("passwordsubmitted", {
                    type: "webrequest",
                    error: e,
                    status: t
                })
            }, u),
            a;

        function u() {
            var e = a.call(this, i.ResolverType.PasswordSubmitted) || this;
            return e.segmentService = o.getService(i.ServiceType.Segment), e
        }
        t.PasswordSubmittedResolver = s
    }), i("background/services/web-request/request-resolvers/index", ["require", "exports", "background/services/web-request/request-resolvers/injected-password-submitted", "background/services/web-request/request-resolvers/password-submitted"], function(e, r, t, i) {
        function o(e) {
            for (var t in e) r.hasOwnProperty(t) || (r[t] = e[t])
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), o(t), o(i)
    }), i("background/services/web-request/web-request.service", ["require", "exports", "common/enums/index", "common/decorators/index", "background/legacy", "background/background.module", "background/services/web-request/request-resolvers/index"], function(e, t, a, r, i, o, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = (u.prototype.trackFormSubmission = function(e, t) {
            this.trackedFormProfiles[e] = {
                profiles: t
            }
        }, u.prototype.isApiSupported = function() {
            return !!this.webRequestApi && !i.LegacyGlobal.g_isedge
        }, u.prototype.isEnabled = function() {
            return this.features.get(a.FeatureType.PasswordSubmittedEvent)
        }, u.prototype.addRequest = function(e) {
            this.onBeforeRequestListener(e)
        }, u.prototype.resolveRequest = function(e) {
            var t = e.tabId,
                r = e.requestId,
                i = e.statusCode,
                o = e.error;
            o ? this.onErrorOccurredListener({
                tabId: t,
                requestId: r,
                statusCode: i,
                error: o
            }) : this.onCompletedListener({
                tabId: t,
                requestId: r,
                statusCode: i
            })
        }, u.prototype.shouldTrackRequest = function(e) {
            return e.requestBody && !e.requestBody.error && (e.requestBody.formData || e.requestBody.raw) && !i.LegacyGlobal.hasNeverEnableLP(e.url, i.LegacyGlobal.lp_gettld_url(e.url))
        }, u.prototype.takeRequest = function(e) {
            var t = this;
            if (!this.requests[e]) return null;
            var r = this.requests[e];
            if (r) delete this.requests[e];
            else {
                var i = this.parseRequestKey(e).tabId,
                    o = [];
                Object.keys(this.requests).forEach(function(e) {
                    t.parseRequestKey(e).tabId === i && (o.push(t.requests[e]), delete t.requests[e])
                }), o.length && (r = o[0])
            }
            return r
        }, u.prototype.requestHasFormData = function(e, t) {
            return e.some(function(e) {
                return e.fields.some(function(e) {
                    return "" !== e.value && -1 !== t.indexOf(e.value)
                })
            })
        }, u.prototype.getTrackedFormProfile = function(e) {
            var t = this.takeRequest(e);
            if (!t) return null;
            var r = this.getSubmittedDataString(t),
                i = this.trackedFormProfiles[t.tabId];
            if (!(i && i.profiles && i.profiles.length && r && this.requestHasFormData(i.profiles, r))) return null;
            var o = null,
                n;
            if (r) {
                if (!(o = i.profiles.filter(function(t) {
                        return t.fields.some(function(e) {
                            return !(!t.currentPassword || "" === e.value) && e.value === t.currentPassword && -1 < r.indexOf(e.value)
                        })
                    })[0])) return null;
                n = -1 < e.indexOf("NONE") ? a.ResolverType.InjectedPasswordSubmitted : a.ResolverType.PasswordSubmitted, delete this.trackedFormProfiles[t.tabId]
            }
            var s = this.parseRequestKey(e).tabId;
            return this.requestHasRecentlyResolved(s) ? null : {
                profile: o,
                action: n
            }
        }, u.prototype.requestHasRecentlyResolved = function(e) {
            return this.didTabResolveLoginRequest(e, !0)
        }, u.prototype.getSubmittedDataString = function(e) {
            return e.requestBody ? e.requestBody.formData ? JSON.stringify(e.requestBody.formData) : e.requestBody.raw.reduce(function(e, t) {
                return e + String.fromCharCode.apply(null, new Uint8Array(t.bytes))
            }, "") : null
        }, u.prototype.initialize = function() {
            var r = this;
            this.requestResolvers = this.setupRequestResolvers(), this.features = o.getRepository(a.RepositoryType.Feature);
            var e = o.getService(a.ServiceType.Topic);
            e.subscribe(a.TopicType.LoginFinished, function() {
                return r.setup()
            }), e.subscribe(a.TopicType.ClearData, function() {
                return r.teardown()
            }), i.LegacyGlobal.LPPlatform.onTabClosed(function(t) {
                delete r.trackedFormProfiles[t], Object.keys(r.requests).forEach(function(e) {
                    return r.parseRequestKey(e).tabId === t && delete r.requests[e]
                })
            })
        }, u.prototype.destroy = function() {
            this.teardown()
        }, u.prototype.setup = function() {
            if (this.isApiSupported() && this.isEnabled()) {
                var e = {
                    urls: ["<all_urls>"],
                    types: ["xmlhttprequest", "main_frame", "sub_frame", "other"]
                };
                this.webRequestApi.onBeforeRequest.addListener(this.onBeforeRequestListener, e, ["requestBody"]), this.webRequestApi.onCompleted.addListener(this.onCompletedListener, e, null), this.webRequestApi.onErrorOccurred.addListener(this.onErrorOccurredListener, e)
            }
        }, u.prototype.teardown = function() {
            this.isApiSupported() && this.isEnabled() && (this.webRequestApi.onBeforeRequest.removeListener(this.onBeforeRequestListener), this.webRequestApi.onCompleted.removeListener(this.onCompletedListener), this.webRequestApi.onErrorOccurred.removeListener(this.onErrorOccurredListener))
        }, u.prototype.setupRequestResolvers = function() {
            var e = [];
            return e[a.ResolverType.PasswordSubmitted] = new n.PasswordSubmittedResolver, e[a.ResolverType.InjectedPasswordSubmitted] = new n.InjectedPasswordSubmittedResolver, e
        }, u.prototype.getRequestKey = function(e, t) {
            return e + "-" + (t = t || "NONE")
        }, u.prototype.parseRequestKey = function(e) {
            var t = e.split("-"),
                r = t[0],
                i = t[1];
            return {
                tabId: parseInt(r, 10),
                requestId: i
            }
        }, u.prototype.getTabState = function(e) {
            var t = i.LegacyGlobal.LPTabState.getStateByTabIdImmediate(e);
            return t || null
        }, u.prototype.didTabResolveLoginRequest = function(e, t) {
            var r = this.getTabState(e);
            if (!r) return !1;
            var i = r.getLoginRequestRecentlyResolved();
            return void 0 !== t && r.setLoginRequestRecentlyResolved(), i
        }, T([r.Visible], u.prototype, "trackFormSubmission", null), T([r.Visible], u.prototype, "isApiSupported", null), T([r.Visible], u.prototype, "isEnabled", null), u = T([r.RegisterService(a.ServiceType.WebRequest)], u));

        function u() {
            var s = this;
            this.requests = {}, this.trackedFormProfiles = {}, this.onBeforeRequestListener = function(e) {
                s.shouldTrackRequest(e) && (s.requests[s.getRequestKey(e.tabId, e.requestId)] = e)
            }, this.onCompletedListener = function(e) {
                var t = e.tabId,
                    r = e.requestId,
                    i = s.getTrackedFormProfile(s.getRequestKey(t, r));
                i && (i.profile.tabId = t, s.requestResolvers[i.action].resolveSuccess(i.profile))
            }, this.onErrorOccurredListener = function(e) {
                var t = e.tabId,
                    r = e.requestId,
                    i = e.statusCode,
                    o = e.error,
                    n = s.getTrackedFormProfile(s.getRequestKey(t, r));
                n && s.requestResolvers[n.action].resolveError(o, i)
            }, "undefined" != typeof browser ? this.webRequestApi = browser.webRequest : "undefined" != typeof chrome && (this.webRequestApi = chrome.webRequest)
        }
        t.WebRequestService = s
    }), i("background/services/sitenotification/delegated-sitenotification.service", ["require", "exports", "common/decorators/index", "common/enums/index", "background/services/service-provider", "background/legacy"], function(e, t, r, s, a, u) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = (o.prototype.initialize = function() {}, o.prototype.showSiteNotification = function(e, t) {
            var r = function() {
                    a.callContentScriptService({
                        tabId: e
                    }, s.ServiceType.SiteNotification, "showSiteNotification", [t]), clearInterval(n)
                },
                i = 0,
                o = 50,
                n = setInterval(function() {
                    var e = 50 == ++i;
                    (u.LegacyGlobal.LPTabState.pageLoaded || e) && r()
                }, 5)
        }, T([r.Visible], o.prototype, "showSiteNotification", null), o = T([r.RegisterService(s.ServiceType.SiteNotification, !0)], o));

        function o() {}
        t.DelegatedSiteNotificationService = i
    }), i("background/services/index", ["require", "exports", "background/services/basic-auth/basic-auth.service", "background/services/form-parser/form-parser.service", "background/services/segment/segment.service", "background/services/service-provider", "background/services/site/site.service", "background/services/tools/background-tools.service", "background/services/web-request/web-request-shim.service", "background/services/web-request/web-request.service", "common/services/topic/topic.service", "common/services/utils/string-utils.service", "background/services/sitenotification/delegated-sitenotification.service"], function(e, r, t, i, o, n, s, a, u, c, l, d, p) {
        function f(e) {
            for (var t in e) r.hasOwnProperty(t) || (r[t] = e[t])
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), f(t), f(i), f(o), f(n), f(s), f(a), f(u), f(c), f(l), f(d), f(p)
    }), i("background/background.module", ["require", "exports", "background/repositories/index", "background/services/index", "common/decorators/index", "common/module.abstract", "background/legacy"], function(e, t, r, i, o, n, s) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = (u = n.ModuleAbstract, O(c, u), c.getInstance = function() {
                return c.instance || (c.instance = new c), c.instance
            }, c.prototype.initialize = function() {
                return x(this, void 0, void 0, function() {
                    return F(this, function(e) {
                        return this.repositoryProvider = new r.RepositoryProvider(o.getRepositoryRegistry()), this.serviceProvider = new i.ServiceProvider(o.getServiceRegistry()), this.repositoryProvider.initialize(), this.serviceProvider.initialize(), [2]
                    })
                })
            }, c.prototype.postInitialize = function() {
                return x(this, void 0, void 0, function() {
                    return F(this, function(e) {
                        return this.repositoryProvider.postInitialize(), this.serviceProvider.postInitialize(), [2]
                    })
                })
            }, c.prototype.getServiceProvider = function() {
                return this.serviceProvider
            }, c.prototype.getRepositoryProvider = function() {
                return this.repositoryProvider
            }, c.prototype.getService = function(e, t) {
                var r = this.serviceProvider.getService(e, t);
                if (!r) throw new Error("Cannot find service [ " + e + " ]");
                return r
            }, c.prototype.getRepository = function(e) {
                var t = this.repositoryProvider.getRepository(e);
                if (!t) throw new Error("Cannot find service [ " + e + " ]");
                return t
            }, c.instance = null, c),
            u;

        function c() {
            var e = u.call(this) || this;
            return window.addEventListener("beforeunload", function() {
                e.serviceProvider.teardown(), e.repositoryProvider.teardown()
            }), e
        }

        function l(o) {
            return x(this, void 0, void 0, function() {
                var t, r, i;
                return F(this, function(e) {
                    if (t = [], o.interface) t.push(o.interface);
                    else {
                        if (!o.tabId) throw new TypeError("Invalid target provided.");
                        if (!(r = s.LegacyGlobal.LPTabs.get({
                                tabID: o.tabId
                            }))) throw new TypeError("No tab with id " + o.tabId + " found.");
                        if (i = void 0, o.frameId && "top" !== o.frameId) {
                            if ("number" != typeof o.frameId) throw new TypeError("Unsupported frame id value: " + o.frameId);
                            i = r.getFrame(o.frameId)
                        } else i = r.getTop();
                        if (!i) throw new TypeError("No content script interface found for tab " + o.tabId);
                        t.push(i)
                    }
                    return [2, t]
                })
            })
        }

        function d(e, t) {
            return a.getInstance().getService(e, t)
        }

        function p(e) {
            return a.getInstance().getRepository(e)
        }

        function f(e) {
            return a.getInstance().isInitialized(e)
        }

        function v(e, t, r, i, o) {
            void 0 === r && (r = []), a.getInstance().getServiceProvider().call(e, t, r, i, o)
        }

        function g(e, t, r, i, o) {
            void 0 === r && (r = []), a.getInstance().getRepositoryProvider().call(e, t, r, i, o)
        }
        t.getContentScriptInterfaces = l, t.getService = d, t.getRepository = p, t.isInitialized = f, t.callService = v, t.callRepository = g, t.default = a.getInstance()
    }), r.LPModule = t("background/background.module")
}).call(this);
//# sourceMappingURL=sourcemaps/modules-background.js.map