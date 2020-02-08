LPSiteNotification = function() {
    var L = !1,
        i = !1,
        o = !1,
        w = !1,
        e = 500,
        n = function(t) {
            for (var e = 0; e < t.fields.length; ++e)
                if ("password" === t.fields[e].type) return !0;
            return !1
        },
        P = (r = !1, function(t) {
            r || (r = !0, setTimeout(function() {
                r = !1
            }, e), n(t) ? (t.generatedPassword || (L = !0), bg.LPTabState.processPasswordSubmit({
                formData: t,
                callback: t.generatedPassword || LPContentScriptTools.isUnloading() ? null : N
            })) : 0 < t.fields.length && (bg.LPTabState.processTextSubmit(t), bg.LPTabState.clear()))
        }),
        r, y = (a = 'input:not([type]),input[type="text"],input[type="email"],input[type="password"]', u = function(t) {
            return t.value && (t.value !== t.getAttribute("value") || 1 < t.value.length) && LPContentScriptTools.isVisible(t)
        }, s = function(t) {
            for (var e, n = [], r = (t || document.body).querySelectorAll(a), i = 0; i < r.length; ++i) u(r[i]) && n.push(r[i]);
            return n
        }, c = function(t) {
            for (var e = [], n = {}, r = {}, i = t.length < 1e3 ? t.length : 1e3, a = 0; a < i; ++a) {
                var o = t[a];
                switch (o.type) {
                    case "hidden":
                    case "text":
                    case "email":
                        !o.value || "hidden" !== o.type && LPContentScriptTools.isVisible(o) || (n.hasOwnProperty(o.value) ? delete r[o.value] : n[(r[o.value] = o).value] = !0)
                }
            }
            var u = LPContentScriptTools.findTextNodes({
                    searches: Object.keys(r),
                    searchAll: !0,
                    exactMatch: !0,
                    allowEmails: !0
                }),
                s = {};
            return u.filter(function(t) {
                return !s.hasOwnProperty(t.match) && (s[t.match] = !0)
            }).forEach(function(t) {
                t.parent && "OPTION" !== t.parent.nodeName && LPContentScriptTools.isVisible(t.parent) && e.push(r[t.match])
            }), e
        }, l = function(t) {
            var e = {
                type: t.type,
                value: t.value,
                id: t.id,
                label: LPContentScriptTools.getLabel(t),
                attributes: LPContentScriptTools.getAttributes(t, ["name", "ng-model", "data-reactid"])
            };
            return "password" !== e.type && "disc" === LPContentScriptTools.getCSS(t, "text-security") && (e.type = "password"), e
        }, f = function(t, e) {
            for (var n = [], r = 0; r < t.length; ++r) {
                var i = t[r];
                "password" !== i.inputData.type && (i.inputData.value = j.getUnmaskedValue({
                    input: i.input,
                    inputValue: i.inputData.value,
                    form: e.form
                })), i.inputData.formname = e.form && e.form.getAttribute("name") || "", n.push(i.inputData)
            }
            return {
                url: document.location.href,
                top: window === top,
                fields: n,
                generatedPassword: e.generatedPassword,
                username: j.getUsername()
            }
        }, function(t) {
            if (W(t.generateFormAction)) return null;
            var e = s(t.form);
            t.form && (e = c(t.form).concat(e));
            for (var n = [], r = 0; r < e.length; ++r) {
                var i = e[r];
                if (!LP_explicit_ignored(document, i)) {
                    var a = l(i);
                    n.push({
                        input: i,
                        inputData: a
                    })
                }
            }
            var o = f(n, t);
            return t.deferred || P(o), o
        }),
        a, u, s, c, l, f, C = (d = null, p = function() {
            d = null
        }, function(e) {
            return function(t) {
                if (d = !1 !== t.isTrusted && !1 !== d) try {
                    e(t)
                } catch (t) {
                    Raven.captureException(t)
                }
                setTimeout(p, 0)
            }
        }),
        d, p, t = (v = function(t, e, n) {
            var r = g(t);
            return !(!r || !LPContentScriptTools.isVisible(r)) && (n && !LPContentScriptTools.isClickable(r) ? !(i = !0) : !e.passwordChangeForm || r.value === t.value)
        }, g = function(t) {
            if (t.id) return document.getElementById(t.id);
            for (var e in t.attributes) {
                var n = document.querySelector("input[" + e + '="' + t.attributes[e] + '"]');
                if (n) return n
            }
            return null
        }, m = function(t, e) {
            for (var n = 0; n < t.fields.length; ++n) {
                var r = t.fields[n];
                if ("password" === r.type) return v(r, t, e)
            }
            return !1
        }, T = function(t, e) {
            var n = g(t);
            n && n.addEventListener("input", C(function() {
                e(!0)
            }))
        }, b = function(t, e) {
            for (var n = 0; n < t.fields.length; ++n) {
                var r = t.fields[n];
                "password" === r.type && T(r, e)
            }
        }, function(n, e) {
            var r = 0,
                t = 20,
                i = null,
                a = !1,
                o = function(t) {
                    a || (a = !(L = !1), clearInterval(i), e(t))
                };
            L ? (i = setInterval(function() {
                var t = 20 == ++r,
                    e = m(n, t);
                e && !t || o(e)
            }, 1e3), b(n, o)) : o(m(n))
        }),
        v, g, m, b, T, h = (S = !1, function(t) {
            if (!o && !S) {
                S = !0, t.postSetup = function() {
                    Topics.get(Topics.SITE_NOTIFICATION).publish(n)
                };
                var e = {
                        css: {
                            top: 10,
                            right: 10
                        }
                    },
                    n = LPFrame.openDialog("contentScriptSite", t, e);
                o = !0, E(t, e), n.onClose(function() {
                    o = !1
                })
            }
        }),
        S, E = function(t, e) {
            var n = 0,
                r, i = 6,
                a = setInterval(function() {
                    n++, document.getElementsByTagName("iframe").length < 1 && o && n <= 6 && (dialog = LPFrame.openDialog("contentScriptSite", t, e), clearInterval(a)), 6 < n && clearInterval(a)
                }, 3e3)
        },
        N = function(t) {
            LPContentScriptTools.isUnloading() || (Topics.get(Topics.SITE_NOTIFICATION_STATE).publish(t), t.dialogData && !i && (t.detectionType = "inject", csTop.LPSiteNotification.showSiteNotification(t)))
        },
        I = (x = function(t) {
            return -1 < (t = t.toLowerCase()).indexOf("submit") || -1 < t.indexOf("save")
        }, D = function(t) {
            for (var e = t.attributes, n = 0; n < e.length; ++n) {
                var r = e[n];
                if (x(r.name) || x(r.value)) return !0
            }
            return !1
        }, function(t) {
            if ("INPUT" === t.nodeName) return "submit" === t.type || "button" === t.type && D(t);
            for (var e = t; e && 0 === e.getElementsByTagName("input").length;) {
                if ("BUTTON" === e.nodeName) return "submit" === e.type || D(e);
                if (D(e)) return !0;
                e = e.parentElement
            }
            return !1
        }),
        x, D, O = function(t) {
            switch (t.nodeName) {
                case "TEXTAREA":
                case "SELECT":
                    return !0;
                case "INPUT":
                    switch (t.type) {
                        case "button":
                        case "submit":
                            return !1;
                        default:
                            return !0
                    }
                    default:
                        return !1
            }
        },
        A = (_ = null, k = [], q = function(t) {
            for (var e = 0; e < t.length; ++e) {
                var n = t[e];
                switch (n.type) {
                    case "attributes":
                        if (n.target.getAttribute(n.attributeName) !== n.oldValue) return !0;
                        break;
                    default:
                        return !0
                }
            }
            return !1
        }, U = function(t) {
            q(t) && (k.forEach(function(t) {
                t()
            }), V())
        }, {
            reset: V = function() {
                _ && (_.disconnect(), _ = null), k = []
            },
            onChange: function(t) {
                "undefined" != typeof MutationObserver && (_ || (_ = new MutationObserver(U)).observe(document.body, {
                    childList: !0,
                    attributes: !0,
                    characterData: !0,
                    subtree: !0,
                    attributeOldValue: !0
                }), -1 === k.indexOf(t) && k.push(t), setTimeout(function() {
                    V()
                }, 0))
            }
        }),
        _, k, V, q, U, F, R = (B = [], {
            startTracking: function(t, r) {
                var i = function(e) {
                    if (t(e.detail)) {
                        window.removeEventListener("lprequeststart", i);
                        var n = function(t) {
                            e.detail.requestID === t.detail.requestID && (window.removeEventListener("lprequestend", n), r(t.detail))
                        };
                        window.addEventListener("lprequestend", n)
                    }
                };
                window.addEventListener("lprequeststart", i), B.push(i)
            },
            stopTracking: function() {
                B.forEach(function(t) {
                    window.removeEventListener("lprequeststart", t)
                }), B = []
            }
        }),
        B, M, H, j = function() {
            var e = null,
                n = !1,
                i = [];
            Topics.get(Topics.FILLED_GENERATED_PW).subscribe(function(t) {
                w = !0, r({
                    target: t.element,
                    generatedPassword: t.password,
                    generateFormAction: !0
                })
            }), Topics.get(Topics.CLEAR_DATA).subscribe(function(t) {
                b()
            }), Topics.get(Topics.LOGIN).subscribe(function(t) {
                bg.LPTabState.getState(function(t) {
                    t.enabled && m(t)
                })
            });
            var r = function(t) {
                    if (t.form = LPContentScriptTools.getForm(t.target), !t.form) {
                        var e = document.querySelector("input[type=password]");
                        e && (t.form = LPContentScriptTools.getForm(e))
                    }
                    return y(t)
                },
                a = function() {
                    L = !1, bg.LPTabState.clear()
                },
                o = function(t) {
                    try {
                        return decodeURIComponent(t)
                    } catch (t) {}
                    return null
                },
                u = function(t) {
                    var i = t && t.formData;
                    i && 0 < i.fields.length && (R.stopTracking(), R.startTracking(function(t) {
                        if (t && t.data)
                            for (var e = o(t.data), n = 0; n < i.fields.length; ++n) {
                                var r = i.fields[n].value;
                                if (e && -1 < e.indexOf(r) || -1 < t.data.indexOf(r)) return !0
                            }
                        return !1
                    }, t.responseHandler))
                },
                s = (c = /^2[0-9][0-9]$/, function(t) {
                    return c.test(t)
                }),
                c, l = function(t) {
                    return 0 === t
                },
                f = function(t) {
                    u({
                        formData: t,
                        responseHandler: function(t) {
                            s(t.statusCode) || l(t.statusCode) || a()
                        }
                    })
                },
                d = function(t) {
                    var e = r({
                        target: t,
                        deferred: !0
                    });
                    u({
                        formData: e,
                        responseHandler: function(t) {
                            s(t.statusCode) && P(e)
                        }
                    })
                },
                p = LPContentScriptTools.debounce(function(t) {
                    A.reset(), f(r({
                        target: t.target,
                        type: t.type
                    }))
                }, 1e3, !0),
                v = {
                    submit: C(function(t) {
                        p(t)
                    }),
                    lpsubmit: function(t) {
                        A.reset(), y({
                            form: t.target,
                            type: "submit"
                        })
                    },
                    mouseup: C(function(t) {
                        var e = t.target;
                        I(e) ? p(t) : O(e) || (L && A.onChange(a), d(e))
                    }),
                    keydown: C(function(t) {
                        if (13 === (t.keyCode || t.which)) {
                            var e = t.target;
                            O(e) || I(e) ? (A.reset(), f(r({
                                target: e,
                                type: t.type
                            }))) : (L && A.onChange(a), d(e))
                        }
                    }),
                    change: C(function(t) {
                        var e = t.target;
                        if ("INPUT" === e.nodeName && e.value) switch (e.type) {
                            case "text":
                            case "email":
                                for (var n = 0; n < i.length; ++n)
                                    if (i[n].input === e) return void(i[n].value = e.value);
                                i.push({
                                    input: e,
                                    value: e.value
                                })
                        }
                    }),
                    paste: C(function(t) {
                        var e = t.target;
                        O(t.target) && bg.LPTabState.getCopiedGeneratedPassword(function(t) {
                            e.value === t && r({
                                target: e,
                                generatedPassword: t
                            })
                        })
                    })
                },
                g = function(t) {
                    e = t
                },
                t = function() {
                    if (e.usernames && 0 < e.usernames.length) return LPContentScriptTools.findText({
                        searches: e.usernames,
                        wordMatch: !0
                    })
                },
                m = function(t) {
                    if (should_do_lastpass_here(document) && (g(t), !n)) {
                        for (var e in v) document.addEventListener(e, v[e], !0);
                        n = !0
                    }
                },
                b = function() {
                    if (n) {
                        for (var t in v) document.removeEventListener(t, v[t], !0);
                        n = !1
                    }
                    i = []
                },
                T = function(t) {
                    return -1 < t.indexOf("*") || -1 < t.indexOf(String.fromCharCode(8226))
                },
                h = function(t, e) {
                    return t.value && !T(t.value) && t.value.length === e.length && (t.value[0] === e[0] || t.value[t.value.length - 1] === e[e.length - 1])
                },
                S = function(t) {
                    if (T(t.inputValue)) {
                        var e;
                        for (e = 0; e < i.length; ++e) {
                            var n = i[e];
                            if (n.input === t.input && n.value !== t.inputValue) return n.value
                        }
                        if (t.form)
                            for (e = 0; e < t.form.length; ++e) {
                                var r = t.form[e];
                                if (h(r, t.inputValue)) return r.value
                            }
                    }
                    return t.inputValue
                };
            return function() {
                var n = document.documentElement;
                if (n && "HTML" === n.nodeName)
                    if (g_ischrome || g_issafari_appext) {
                        var t = document.createElement("script");
                        t.appendChild(document.createTextNode(LPContentScriptConstants.JS.PageWebRequestEvents)), n.appendChild(t), n.removeChild(t)
                    } else Topics.get(Topics.INITIALIZED).subscribe(function() {
                        var t = bg.get("extensionBaseURL");
                        if (t) {
                            var e = document.createElement("script");
                            e.src = t + "pageWebRequestEvents.js", n.appendChild(e), n.removeChild(e)
                        }
                    })
            }(), {
                setup: m,
                teardown: b,
                getUnmaskedValue: S,
                getUsername: t
            }
        }(),
        G = LPContentScriptTools.debounce(function() {
            bg.LPTabState.getSiteNotification({
                callback: N
            })
        }, 1e3, !0);
    Topics.get(Topics.INITIALIZED).subscribe(function() {
        bg.LPTabState.pageLoaded = !0, bg.LPTabState.getState(function(t) {
            t.enabled && (j.setup(t), window === top ? G() : t.formSubmittedFrame && csTop.LPSiteNotification.getSiteNotification())
        })
    }), window !== top && window.addEventListener("beforeunload", function() {
        L && csTop.LPSiteNotification.getSiteNotification()
    }, !0);
    var W = function(t) {
        return !(t || !w) && !(w = !1)
    };
    return {
        formExists: t,
        showSiteNotification: h,
        getSiteNotification: G
    }
}();
//# sourceMappingURL=sourcemaps/addSiteNotification.js.map