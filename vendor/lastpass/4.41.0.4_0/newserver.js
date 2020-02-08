LPServer = function() {
    var r = null,
        o = null,
        l = function(e, t) {
            e && e.error && e.error(t)
        },
        u = function(e, t) {
            if (4 === e.readyState)
                if (200 === e.status) switch (t.dataType) {
                    case "xml":
                        t.success(e.responseXML, e.responseText);
                        break;
                    case "json":
                        var r = null;
                        try {
                            r = JSON.parse(e.responseText)
                        } catch (e) {}
                        t.success(r, e.responseText);
                        break;
                    default:
                        t.success(e.responseText)
                } else t.error && t.error(e, e.statusText)
        },
        c = (i = function(e) {
            var t = {};
            for (var r in e) {
                var n = e[r];
                if (null == n && (n = ""), "object" == typeof n)
                    for (var o in n) n.hasOwnProperty(o) && (t[r + "[" + o + "]"] = n[o]);
                else t[r] = n
            }
            return t
        }, a = function(e, t) {
            e = i(e), t = t || "";
            var r = [];
            for (var n in e) {
                var o = e[n];
                "object" == typeof o ? r = r.concat(a(o, n)) : (t && (n = t + "[" + n + "]"), r.push(n + "=" + encodeURIComponent(o)))
            }
            return r
        }, function(e) {
            return a(e).join("&")
        }),
        i, a, e = function(t) {
            var e = new XMLHttpRequest,
                r = t.contentType || "application/x-www-form-urlencoded";
            t.success && (e.onload = function() {
                u(e, t)
            }), t.error && (e.onerror = function() {
                t.error(e, e.statusText)
            });
            var n = function(e) {
                    if ("application/json" !== r) return c(t.data);
                    if ("GET" === e) return "";
                    try {
                        return JSON.parse(t.data), t.data
                    } catch (e) {
                        return JSON.stringify(t.data)
                    }
                },
                o = t.url;
            if ("GET" === t.type) {
                var i = n(t.type);
                o = t.url + (0 < i.length ? "?" + i : "")
            }
            if (e.open(t.type || "GET", o, !0), t.headers)
                for (var a in t.headers) t.headers.hasOwnProperty(a) && e.setRequestHeader(a, t.headers[a]);
            "POST" === t.type ? (e.setRequestHeader("Content-Type", r), t.beforeSend && t.beforeSend(e, t), e.send(n())) : (t.beforeSend && t.beforeSend(e, t), e.send())
        },
        t = function(t, e) {
            K.ajax({
                type: "POST",
                url: K.getBaseURL() + "getCSRFToken.php",
                success: function(e) {
                    t(r = e || null)
                },
                error: n(e)
            })
        },
        n = function(n) {
            return function(e, t, r) {
                "function" == typeof n ? n() : console.error(r)
            }
        },
        d = function(e, t, r, n) {
            y(e, t, r, n) || l(t, r)
        },
        y = (s = function(e, t, r, n) {
            if (e) {
                var o = e[r];
                if ("function" == typeof o) return o(n, t), !0
            }
            return !1
        }, function(e, t, r, n) {
            var o = s(e, t, r, n);
            return o = s(t.callbacks, t, r, n) || o
        }),
        s, f = function(e, t) {
            try {
                K.logException(e)
            } catch (e) {}
            if (e instanceof L ? l(t, e.message) : l(t), LPServer.throwExceptions) throw e
        },
        p = function(n, o) {
            return function(e, t) {
                try {
                    if (y(n, o, t)) return;
                    if (null === e && t && "undefined" != typeof DOMParser) try {
                        var r;
                        e = (new DOMParser).parseFromString(t, "application/xml")
                    } catch (e) {}
                    null === e ? l(o, "invalidxml") : g(e, n, o)
                } catch (e) {
                    f(e, o)
                }
            }
        },
        v = function(e, t) {
            return e.getElementsByTagName(t)
        },
        S = function(e, t) {
            var r = v(e, t);
            return 0 < r.length ? r[0] : null
        },
        b = function(e, t) {
            var r = S(e, t);
            return r ? r.textContent : ""
        },
        g = function(e, t, r) {
            var n = S(e, "result"),
                o = S(e, "ok"),
                i = S(e, "error"),
                a = S(e, "failed");
            if (n) {
                var u = n.getAttribute("rc"),
                    c = n.getAttribute("msg"),
                    s = n.getAttribute("success"),
                    f = n.getAttribute("ok");
                if (u) return void d(t, r, u, n);
                if (c) return void d(t, r, c, n);
                if (s) return void d(t, r, s, n);
                if (f) return void d(t, r, "ok");
                var p = n.textContent.trim();
                if ("ok" === p) return void(y(t, r, "ok") || d(t, r, b(e, "status")));
                if ("bad" === p) return void l(r, b(e, "message"))
            } else {
                if (o) return void d(t, r, "ok", o);
                if (i) return void(y(t, r, i.getAttribute("cause"), i) || d(t, r, i.getAttribute("message"), i));
                if (a) return void d(t, r, a.getAttribute("reason"), a)
            }
            l(r)
        },
        k = function(r, n) {
            return function(e, t) {
                try {
                    if (null === e && t) l(n, "invalidjson");
                    else {
                        if (e.error) return void(y(r, n, e.error, e) || l(n, e.errortxt || e.error));
                        if (e.hasOwnProperty("success")) {
                            if (e.success && y(r, n, "success", e)) return;
                            if (!e.success) return void l(n)
                        } else if (e.res) {
                            if ("success" !== e.res) return void(y(r, n, e.res, e) || l(n, e.errortxt));
                            if (y(r, n, e.res, e)) return
                        } else {
                            if (y(r, n, e.reason, e)) return;
                            if (y(r, n, e.status, e)) return;
                            if (y(r, n, e.cmd, e)) return
                        }
                    }
                    r && "function" == typeof r.default ? r.default(e, n) : "function" == typeof n.success && n.success(e)
                } catch (e) {
                    f(e, n)
                }
            }
        },
        x = function(n, o) {
            return function(e, t) {
                var r;
                try {
                    r = JSON.parse(e.responseText)
                } catch (e) {
                    return void l(o, "invalidjson")
                }
                y(n, o, r.code, r) || l(o, r.message)
            }
        },
        h = function(e, t, r) {
            for (var n = [], o = 0; o < r; ++o) n.push(C(e, t + o));
            return n
        },
        m = function(e) {
            e.userSupplied = e.userSupplied || {}, e.type = void 0 === e.type ? "POST" : e.type, e.url = K.getBaseURL() + e.url, e.data = P(e.data, e.userSupplied.requestArgs), e.data && void 0 === e.data.lpversion && "undefined" != typeof lpversion && (e.data.lpversion = lpversion), void 0 === e.error && e.userSupplied.error && (e.error = n(e.userSupplied.error)), !e.data || void 0 !== e.data.token || void 0 !== e.CSRFToken && !e.CSRFToken || null !== r ? K.ajax(e) : t(function() {
                K.ajax(e)
            }, e.userSupplied.error)
        },
        T = function(e, t) {
            var r = {},
                n = t.userSupplied;
            switch ("object" != typeof n && (n = t.userSupplied = {}), typeof t.success) {
                case "string":
                    return r[t.success] = n.success, e(r, n);
                case "function":
                    return r.default = t.success, e(r, n);
                default:
                    if (t.callbacks || n.success || n.callbacks) return e(t.callbacks, n)
            }
            return null
        },
        _ = function(e, t) {
            t.data && void 0 === t.data.token && (void 0 === t.CSRFToken || t.CSRFToken) && (t.data.token = r)
        },
        R = function(e) {
            e.dataType = "json", e.beforeSend = N(e.beforeSend, _), e.success = T(k, e), m(e)
        },
        w = function(e) {
            e.dataType = "xml", e.beforeSend = N(e.beforeSend, _), e.success = T(p, e), m(e)
        },
        j = function(e) {
            e.dataType = "text", e.beforeSend = N(e.beforeSend, _), m(e)
        },
        A = function(e, t, r) {
            for (var n in r = r || [], t) {
                var o = e[n],
                    i = t[n];
                if ("object" == typeof i) A(o, i, r.concat(n));
                else if (typeof o !== i) throw r.push(n), "Extension is missing the following property: " + r.join(".") + " (" + i + ")"
            }
        },
        E = function(e, t) {
            for (var r in A(e, q), t) K[r] = t[r];
            for (var n in F) K[n] = e[n];
            o = e
        },
        C = function(e, t, r) {
            var n = e.getAttribute(t);
            return void 0 === n ? r : n
        },
        O = function(e, t, r) {
            var n = parseInt(C(e, t, r));
            return isNaN(n) ? r : n
        },
        P = function(e) {
            e = e || {};
            for (var t = 1, r = arguments.length; t < r; ++t) {
                var n = arguments[t];
                for (var o in n) e[o] = n[o]
            }
            return e
        },
        N = function(t, r) {
            return t ? function() {
                var e = r.apply(window, arguments);
                t.apply(window, e || arguments)
            } : r
        },
        q = {
            StringUtils: {
                translate: "function"
            },
            AES: {
                Encrypt: "function",
                Decrypt: "function",
                hex2bin: "function",
                bin2hex: "function"
            },
            enc: "function",
            dec: "function",
            RSAKey: "function",
            createRandomHexString: "function",
            parse_public_key: "function",
            parse_private_key: "function",
            enccbc: "function",
            make_lp_key_iterations: "function",
            make_lp_hash_iterations: "function",
            get_random_password: "function"
        },
        F = {
            RSAKey: !0
        },
        K = {
            ajax: e,
            translate: function() {
                return o.StringUtils.translate.apply(o.StringUtils, arguments)
            },
            logException: function() {},
            hex2bin: function() {
                return o.AES.hex2bin.apply(o.AES, arguments)
            },
            bin2hex: function() {
                return o.AES.bin2hex.apply(o.AES, arguments)
            },
            encryptAES: function(e, t) {
                return o.enc(e, t)
            },
            decryptAES: function(e, t) {
                return o.dec(e, t)
            },
            encrypt: function(e, t) {
                return o.enc(e, t)
            },
            decrypt: function(e, t) {
                try {
                    return o.dec(e, t)
                } catch (e) {
                    return ""
                }
            },
            createRandomHexString: function() {
                return o.createRandomHexString.apply(o, arguments)
            },
            parsePublicKey: function() {
                return o.parse_public_key.apply(o, arguments)
            },
            parsePrivateKey: function(e, t) {
                if (!(t = t || o.rsaprivatekeyhex)) throw "rsaprivatekeyhex required for this action.";
                return o.parse_private_key(e, t)
            },
            extractPrivateKey: function(e, t) {
                return o.rsa_extract_privatekey(e, t)
            },
            encryptCBC: function() {
                return o.enccbc.apply(o, arguments)
            },
            makeKey: function() {
                return o.make_lp_key_iterations.apply(o, arguments)
            },
            makeHash: function() {
                return o.make_lp_hash_iterations.apply(o, arguments)
            },
            makeRandomPassword: function() {
                return o.get_random_password.apply(o, arguments)
            },
            getBaseURL: function() {
                return o.base_url || ""
            },
            getLocalKey: function() {
                return o.g_local_key
            },
            setLocalKey: function(e) {
                o.g_local_key = e
            }
        },
        L = function(e) {
            this.message = e, this.stack = (new Error).stack
        };
    L.prototype = Object.create(Error.prototype), L.prototype.name = "ClientException", L.prototype.constructor = L;
    var H, U, B = (J = function(e) {
            e.setRequestHeader("X-CSRF-TOKEN", r)
        }, {
            jsonRequest: function(e) {
                e.dataType = "json", e.contentType = "application/json", e.beforeSend = N(e.beforeSend, J), e.error = x(e.callbacks, e.userSupplied || {}), m(e)
            }
        }),
        J, M;
    return {
        ajax: e,
        getRecordsFromResponse: h,
        jsonRequest: R,
        xmlRequest: w,
        textRequest: j,
        initialize: E,
        ext: K,
        getNodes: v,
        getNode: S,
        getNodeText: b,
        getAttr: C,
        getAttrInt: O,
        extend: P,
        extendCallback: N,
        ClientException: L,
        clearCSRFToken: function() {
            r = null
        },
        getCSRFToken: t,
        callback: function(e, t) {
            e.callbacks && "function" == typeof e.callbacks[t] && e.callbacks[t].apply(window, Array.prototype.slice.call(arguments, 2))
        },
        lmiapi: B
    }
}();
//# sourceMappingURL=sourcemaps/newserver.js.map