/*!
 * Copyright (c) 2016-Present Gmelius Ltd. All Rights Reserved.
 * ===================================================================================================================
 * 
 * Email ............ hello@gmelius.com
 * Website .......... https://gmelius.com
 * About ............ https://gmelius.com/about
 * Privacy Policy ... https://gmelius.com/legal/privacy
 * 
 * Gmelius customizes the look and feel of your inbox, protects your privacy and boosts your email productivity.
 * 
 * Gmelius is a company based in Geneva, Switzerland. Founded in 2016
 * 
 * Gmelius is a company based in Geneva, Switzerland. Founded in 2016
 * Gmelius is used daily by hundreds of thousands of users worldwide
 * 
 * == Press about Gmelius
 * TechCrunch ... https://techcrunch.com/2012/04/23/gmelius-promises-to-improve-the-look-and-feel-of-your-gmail-inbox/
 * Lifehacker ... http://lifehacker.com/gmelius-adds-tons-of-scheduling-snoozing-tweaking-an-1782183096
 * PC World ..... http://www.pcworld.com/article/261155/chrome_firefox_extension_gmelius_makes_gmail_more_readable.html
 * CNET ......... http://www.cnet.com/how-to/clean-up-the-look-of-gmail-with-gmelius/
 * 
 * == Chrome Webstore reviews ***** 5-star reputation
 * https://chrome.google.com/webstore/detail/gmelius-for-gmail/dheionainndbbpoacpnopgmnihkcmnkl/reviews
 * 
 * ============================================ NOTA BENE FOR REVIEWERS ==============================================
 * 
 * INBOX SDK (https://inboxsdk.com)
 * 
 * Gmelius releases new features to users on a weekly basis. Users love our fast updates and quick response to bugs.
 * In order to accomplish this we use the popular InboxSDK library (www.inboxsdk.com). It is used by
 * several large organizations:
 * 
 *   Dropbox ... https://chrome.google.com/webstore/detail/dropbox-for-gmail-beta/dpdmhfocilnekecfjgimjdeckachfbec
 *   HubSpot ... https://chrome.google.com/webstore/detail/hubspot-sales/oiiaigjnkhngdbnoookogelabohpglmd
 *   Stripe .... https://chrome.google.com/webstore/detail/stripe-for-gmail/dhnddbohjigcdbcfjdngilgkdcbjjhna
 *   Giphy ..... https://chrome.google.com/webstore/detail/giphy-for-gmail/andgibkjiikabclfdkecpmdkfanpdapf
 *   Clearbit .. https://chrome.google.com/webstore/detail/clearbit-connect-supercha/pmnhcgfcafcnkbengdcanjablaabjplo
 *   Streak .... https://chrome.google.com/webstore/detail/streak-crm-for-gmail/pnnfemgpilpdaojpnkjdgfgbnnjojfik
 * 
 * The use of the library is similar to using other popular JavaScript libraries like jQuery and Underscore.
 * 
 * The library allows us to load our application code from our server providing our users with fast updates
 * and the ability to quickly respond to bugs. In case of questions, please contact hello@gmelius.com. Thanks.
 * 
 * ===================================================================================================================
 */
! function(e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var i = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }
    var n = {};
    t.m = e, t.c = n, t.d = function(e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 170)
}([function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(130);
    t.assert = r.assert, t.assertionError = r.assertionError;
    var i = n(131);
    t.base64 = i.base64, t.base64Decode = i.base64Decode, t.base64Encode = i.base64Encode;
    var o = n(112);
    t.CONSTANTS = o.CONSTANTS;
    var a = n(227);
    t.deepCopy = a.deepCopy, t.deepExtend = a.deepExtend, t.patchProperty = a.patchProperty;
    var s = n(228);
    t.Deferred = s.Deferred;
    var u = n(229);
    t.getUA = u.getUA, t.isMobileCordova = u.isMobileCordova, t.isNodeSdk = u.isNodeSdk, t.isReactNative = u.isReactNative;
    var c = n(230);
    t.ErrorFactory = c.ErrorFactory, t.FirebaseError = c.FirebaseError, t.patchCapture = c.patchCapture;
    var l = n(132);
    t.jsonEval = l.jsonEval, t.stringify = l.stringify;
    var h = n(231);
    t.decode = h.decode, t.isAdmin = h.isAdmin, t.issuedAtTime = h.issuedAtTime, t.isValidFormat = h.isValidFormat, t.isValidTimestamp = h.isValidTimestamp;
    var f = n(133);
    t.clone = f.clone, t.contains = f.contains, t.every = f.every, t.extend = f.extend, t.findKey = f.findKey, t.findValue = f.findValue, t.forEach = f.forEach, t.getAnyKey = f.getAnyKey, t.getCount = f.getCount, t.getValues = f.getValues, t.isEmpty = f.isEmpty, t.isNonNullObject = f.isNonNullObject, t.map = f.map, t.safeGet = f.safeGet;
    var p = n(232);
    t.querystring = p.querystring, t.querystringDecode = p.querystringDecode;
    var d = n(233);
    t.Sha1 = d.Sha1;
    var v = n(235);
    t.async = v.async, t.createSubscribe = v.createSubscribe;
    var _ = n(236);
    t.errorPrefix = _.errorPrefix, t.validateArgCount = _.validateArgCount, t.validateCallback = _.validateCallback, t.validateContextObject = _.validateContextObject, t.validateNamespace = _.validateNamespace;
    var y = n(237);
    t.stringLength = y.stringLength, t.stringToByteArray = y.stringToByteArray
}, function(e, t, n) {
    var r = n(34)("wks"),
        i = n(29),
        o = n(2).Symbol,
        a = "function" == typeof o;
    (e.exports = function(e) {
        return r[e] || (r[e] = a && o[e] || (a ? o : i)("Symbol." + e))
    }).store = r
}, function(e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(0),
        o = n(0),
        a = n(0),
        s = n(0),
        u = n(0),
        c = n(86),
        l = n(0);
    t.LUIDGenerator = function() {
        var e = 1;
        return function() {
            return e++
        }
    }(), t.sha1 = function(e) {
        var t = s.stringToByteArray(e),
            n = new a.Sha1;
        n.update(t);
        var r = n.digest();
        return o.base64.encodeByteArray(r)
    };
    var h = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        for (var n = "", r = 0; r < e.length; r++) Array.isArray(e[r]) || e[r] && "object" == typeof e[r] && "number" == typeof e[r].length ? n += h.apply(null, e[r]) : "object" == typeof e[r] ? n += u.stringify(e[r]) : n += e[r], n += " ";
        return n
    };
    t.logger = null;
    var f = !0;
    t.enableLogging = function(e, n) {
        r.assert(!n || !0 === e || !1 === e, "Can't turn on custom loggers persistently."), !0 === e ? ("undefined" != typeof console && ("function" == typeof console.log ? t.logger = console.log.bind(console) : "object" == typeof console.log && (t.logger = function(e) {})), n && c.SessionStorage.set("logging_enabled", !0)) : "function" == typeof e ? t.logger = e : (t.logger = null, c.SessionStorage.remove("logging_enabled"))
    }, t.log = function() {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        if (!0 === f && (f = !1, null === t.logger && !0 === c.SessionStorage.get("logging_enabled") && t.enableLogging(!0)), t.logger) {
            var r = h.apply(null, e);
            t.logger(r)
        }
    }, t.logWrapper = function(e) {
        return function() {
            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
            t.log.apply(void 0, [e].concat(n))
        }
    }, t.error = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        if ("undefined" != typeof console) {
            var n = "FIREBASE INTERNAL ERROR: " + h.apply(void 0, e);
            void 0 !== console.error && console.error(n)
        }
    }, t.fatal = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var n = h.apply(void 0, e);
        throw new Error("FIREBASE FATAL ERROR: " + n)
    }, t.warn = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        if ("undefined" != typeof console) {
            var n = "FIREBASE WARNING: " + h.apply(void 0, e);
            void 0 !== console.warn && console.warn(n)
        }
    }, t.warnIfPageIsSecure = function() {
        "undefined" != typeof window && window.location && window.location.protocol && -1 !== window.location.protocol.indexOf("https:") && t.warn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")
    }, t.warnAboutUnsupportedMethod = function(e) {
        t.warn(e + " is unsupported and will likely change soon.  Please do not use.")
    }, t.isInvalidJSONNumber = function(e) {
        return "number" == typeof e && (e != e || e == Number.POSITIVE_INFINITY || e == Number.NEGATIVE_INFINITY)
    }, t.executeWhenDOMReady = function(e) {
        if (l.isNodeSdk() || "complete" === document.readyState) e();
        else {
            var t = !1,
                n = function() {
                    document.body ? t || (t = !0, e()) : setTimeout(n, Math.floor(10))
                };
            document.addEventListener ? (document.addEventListener("DOMContentLoaded", n, !1), window.addEventListener("load", n, !1)) : document.attachEvent && (document.attachEvent("onreadystatechange", function() {
                "complete" === document.readyState && n()
            }), window.attachEvent("onload", n))
        }
    }, t.MIN_NAME = "[MIN_NAME]", t.MAX_NAME = "[MAX_NAME]", t.nameCompare = function(e, n) {
        if (e === n) return 0;
        if (e === t.MIN_NAME || n === t.MAX_NAME) return -1;
        if (n === t.MIN_NAME || e === t.MAX_NAME) return 1;
        var r = t.tryParseInt(e),
            i = t.tryParseInt(n);
        return null !== r ? null !== i ? r - i == 0 ? e.length - n.length : r - i : -1 : null !== i ? 1 : e < n ? -1 : 1
    }, t.stringCompare = function(e, t) {
        return e === t ? 0 : e < t ? -1 : 1
    }, t.requireKey = function(e, t) {
        if (t && e in t) return t[e];
        throw new Error("Missing required key (" + e + ") in object: " + u.stringify(t))
    }, t.ObjectToUniqueKey = function(e) {
        if ("object" != typeof e || null === e) return u.stringify(e);
        var n = [];
        for (var r in e) n.push(r);
        n.sort();
        for (var i = "{", o = 0; o < n.length; o++) 0 !== o && (i += ","), i += u.stringify(n[o]), i += ":", i += t.ObjectToUniqueKey(e[n[o]]);
        return i += "}"
    }, t.splitStringBySize = function(e, t) {
        var n = e.length;
        if (n <= t) return [e];
        for (var r = [], i = 0; i < n; i += t) i + t > n ? r.push(e.substring(i, n)) : r.push(e.substring(i, i + t));
        return r
    }, t.each = function(e, t) {
        if (Array.isArray(e))
            for (var n = 0; n < e.length; ++n) t(n, e[n]);
        else i.forEach(e, function(e, n) {
            return t(n, e)
        })
    }, t.bindCallback = function(e, t) {
        return t ? e.bind(t) : e
    }, t.doubleToIEEE754String = function(e) {
        r.assert(!t.isInvalidJSONNumber(e), "Invalid JSON number");
        var n, i, o, a, s, u, c;
        for (0 === e ? (i = 0, o = 0, n = 1 / e == -1 / 0 ? 1 : 0) : (n = e < 0, (e = Math.abs(e)) >= Math.pow(2, -1022) ? (i = (a = Math.min(Math.floor(Math.log(e) / Math.LN2), 1023)) + 1023, o = Math.round(e * Math.pow(2, 52 - a) - Math.pow(2, 52))) : (i = 0, o = Math.round(e / Math.pow(2, -1074)))), u = [], s = 52; s; s -= 1) u.push(o % 2 ? 1 : 0), o = Math.floor(o / 2);
        for (s = 11; s; s -= 1) u.push(i % 2 ? 1 : 0), i = Math.floor(i / 2);
        u.push(n ? 1 : 0), u.reverse(), c = u.join("");
        var l = "";
        for (s = 0; s < 64; s += 8) {
            var h = parseInt(c.substr(s, 8), 2).toString(16);
            1 === h.length && (h = "0" + h), l += h
        }
        return l.toLowerCase()
    }, t.isChromeExtensionContentScript = function() {
        return !("object" != typeof window || !window.chrome || !window.chrome.extension || /^chrome/.test(window.location.href))
    }, t.isWindowsStoreApp = function() {
        return "object" == typeof Windows && "object" == typeof Windows.UI
    }, t.errorForServerCode = function(e, t) {
        var n = "Unknown Error";
        "too_big" === e ? n = "The data requested exceeds the maximum size that can be accessed with a single request." : "permission_denied" == e ? n = "Client doesn't have permission to access the desired data." : "unavailable" == e && (n = "The service is unavailable");
        var r = new Error(e + " at " + t.path.toString() + ": " + n);
        return r.code = e.toUpperCase(), r
    }, t.INTEGER_REGEXP_ = new RegExp("^-?\\d{1,10}$"), t.tryParseInt = function(e) {
        if (t.INTEGER_REGEXP_.test(e)) {
            var n = Number(e);
            if (n >= -2147483648 && n <= 2147483647) return n
        }
        return null
    }, t.exceptionGuard = function(e) {
        try {
            e()
        } catch (e) {
            setTimeout(function() {
                var n = e.stack || "";
                throw t.warn("Exception was thrown by user callback.", n), e
            }, Math.floor(0))
        }
    }, t.callUserCallback = function(e) {
        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
        "function" == typeof e && t.exceptionGuard(function() {
            e.apply(void 0, n)
        })
    }, t.beingCrawled = function() {
        return ("object" == typeof window && window.navigator && window.navigator.userAgent || "").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i) >= 0
    }, t.exportPropGetter = function(e, t, n) {
        Object.defineProperty(e, t, {
            get: n
        })
    }, t.setTimeoutNonBlocking = function(e, t) {
        var n = setTimeout(e, t);
        return "object" == typeof n && n.unref && n.unref(), n
    }
}, function(e, t) {
    var n = e.exports = {
        version: "2.5.1"
    };
    "number" == typeof __e && (__e = n)
}, function(e, t, n) {
    var r = n(9),
        i = n(28);
    e.exports = n(7) ? function(e, t, n) {
        return r.f(e, t, i(1, n))
    } : function(e, t, n) {
        return e[t] = n, e
    }
}, function(e, t, n) {
    var r = n(10);
    e.exports = function(e) {
        if (!r(e)) throw TypeError(e + " is not an object!");
        return e
    }
}, function(e, t, n) {
    e.exports = !n(20)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(3),
        i = n(0),
        o = function() {
            function e(e, t) {
                if (void 0 === t) {
                    this.pieces_ = e.split("/");
                    for (var n = 0, r = 0; r < this.pieces_.length; r++) this.pieces_[r].length > 0 && (this.pieces_[n] = this.pieces_[r], n++);
                    this.pieces_.length = n, this.pieceNum_ = 0
                } else this.pieces_ = e, this.pieceNum_ = t
            }
            return Object.defineProperty(e, "Empty", {
                get: function() {
                    return new e("")
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.getFront = function() {
                return this.pieceNum_ >= this.pieces_.length ? null : this.pieces_[this.pieceNum_]
            }, e.prototype.getLength = function() {
                return this.pieces_.length - this.pieceNum_
            }, e.prototype.popFront = function() {
                var t = this.pieceNum_;
                return t < this.pieces_.length && t++, new e(this.pieces_, t)
            }, e.prototype.getBack = function() {
                return this.pieceNum_ < this.pieces_.length ? this.pieces_[this.pieces_.length - 1] : null
            }, e.prototype.toString = function() {
                for (var e = "", t = this.pieceNum_; t < this.pieces_.length; t++) "" !== this.pieces_[t] && (e += "/" + this.pieces_[t]);
                return e || "/"
            }, e.prototype.toUrlEncodedString = function() {
                for (var e = "", t = this.pieceNum_; t < this.pieces_.length; t++) "" !== this.pieces_[t] && (e += "/" + encodeURIComponent(String(this.pieces_[t])));
                return e || "/"
            }, e.prototype.slice = function(e) {
                return void 0 === e && (e = 0), this.pieces_.slice(this.pieceNum_ + e)
            }, e.prototype.parent = function() {
                if (this.pieceNum_ >= this.pieces_.length) return null;
                for (var t = [], n = this.pieceNum_; n < this.pieces_.length - 1; n++) t.push(this.pieces_[n]);
                return new e(t, 0)
            }, e.prototype.child = function(t) {
                for (var n = [], r = this.pieceNum_; r < this.pieces_.length; r++) n.push(this.pieces_[r]);
                if (t instanceof e)
                    for (r = t.pieceNum_; r < t.pieces_.length; r++) n.push(t.pieces_[r]);
                else
                    for (var i = t.split("/"), r = 0; r < i.length; r++) i[r].length > 0 && n.push(i[r]);
                return new e(n, 0)
            }, e.prototype.isEmpty = function() {
                return this.pieceNum_ >= this.pieces_.length
            }, e.relativePath = function(t, n) {
                var r = t.getFront(),
                    i = n.getFront();
                if (null === r) return n;
                if (r === i) return e.relativePath(t.popFront(), n.popFront());
                throw new Error("INTERNAL ERROR: innerPath (" + n + ") is not within outerPath (" + t + ")")
            }, e.comparePaths = function(e, t) {
                for (var n = e.slice(), i = t.slice(), o = 0; o < n.length && o < i.length; o++) {
                    var a = r.nameCompare(n[o], i[o]);
                    if (0 !== a) return a
                }
                return n.length === i.length ? 0 : n.length < i.length ? -1 : 1
            }, e.prototype.equals = function(e) {
                if (this.getLength() !== e.getLength()) return !1;
                for (var t = this.pieceNum_, n = e.pieceNum_; t <= this.pieces_.length; t++, n++)
                    if (this.pieces_[t] !== e.pieces_[n]) return !1;
                return !0
            }, e.prototype.contains = function(e) {
                var t = this.pieceNum_,
                    n = e.pieceNum_;
                if (this.getLength() > e.getLength()) return !1;
                for (; t < this.pieces_.length;) {
                    if (this.pieces_[t] !== e.pieces_[n]) return !1;
                    ++t, ++n
                }
                return !0
            }, e
        }();
    t.Path = o;
    var a = function() {
        function e(e, t) {
            this.errorPrefix_ = t, this.parts_ = e.slice(), this.byteLength_ = Math.max(1, this.parts_.length);
            for (var n = 0; n < this.parts_.length; n++) this.byteLength_ += i.stringLength(this.parts_[n]);
            this.checkValid_()
        }
        return Object.defineProperty(e, "MAX_PATH_DEPTH", {
            get: function() {
                return 32
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "MAX_PATH_LENGTH_BYTES", {
            get: function() {
                return 768
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.push = function(e) {
            this.parts_.length > 0 && (this.byteLength_ += 1), this.parts_.push(e), this.byteLength_ += i.stringLength(e), this.checkValid_()
        }, e.prototype.pop = function() {
            var e = this.parts_.pop();
            this.byteLength_ -= i.stringLength(e), this.parts_.length > 0 && (this.byteLength_ -= 1)
        }, e.prototype.checkValid_ = function() {
            if (this.byteLength_ > e.MAX_PATH_LENGTH_BYTES) throw new Error(this.errorPrefix_ + "has a key path longer than " + e.MAX_PATH_LENGTH_BYTES + " bytes (" + this.byteLength_ + ").");
            if (this.parts_.length > e.MAX_PATH_DEPTH) throw new Error(this.errorPrefix_ + "path specified exceeds the maximum depth that can be written (" + e.MAX_PATH_DEPTH + ") or object contains a cycle " + this.toErrorString())
        }, e.prototype.toErrorString = function() {
            return 0 == this.parts_.length ? "" : "in property '" + this.parts_.join(".") + "'"
        }, e
    }();
    t.ValidationPath = a
}, function(e, t, n) {
    var r = n(6),
        i = n(56),
        o = n(45),
        a = Object.defineProperty;
    t.f = n(7) ? Object.defineProperty : function(e, t, n) {
        if (r(e), t = o(t, !0), r(n), i) try {
            return a(e, t, n)
        } catch (e) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (e[t] = n.value), e
    }
}, function(e, t) {
    e.exports = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}, function(e, t, n) {
    var r = n(2),
        i = n(4),
        o = n(14),
        a = n(5),
        s = function(e, t, n) {
            var u, c, l, h = e & s.F,
                f = e & s.G,
                p = e & s.S,
                d = e & s.P,
                v = e & s.B,
                _ = e & s.W,
                y = f ? i : i[t] || (i[t] = {}),
                g = y.prototype,
                m = f ? r : p ? r[t] : (r[t] || {}).prototype;
            f && (n = t);
            for (u in n)(c = !h && m && void 0 !== m[u]) && u in y || (l = c ? m[u] : n[u], y[u] = f && "function" != typeof m[u] ? n[u] : v && c ? o(l, r) : _ && m[u] == l ? function(e) {
                var t = function(t, n, r) {
                    if (this instanceof e) {
                        switch (arguments.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t);
                            case 2:
                                return new e(t, n)
                        }
                        return new e(t, n, r)
                    }
                    return e.apply(this, arguments)
                };
                return t.prototype = e.prototype, t
            }(l) : d && "function" == typeof l ? o(Function.call, l) : l, d && ((y.virtual || (y.virtual = {}))[u] = l, e & s.R && g && !g[u] && a(g, u, l)))
        };
    s.F = 1, s.G = 2, s.S = 4, s.P = 8, s.B = 16, s.W = 32, s.U = 64, s.R = 128, e.exports = s
}, function(e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function(e, t) {
        return n.call(e, t)
    }
}, function(e, t) {
    e.exports = {}
}, function(e, t, n) {
    var r = n(19);
    e.exports = function(e, t, n) {
        if (r(e), void 0 === t) return e;
        switch (n) {
            case 1:
                return function(n) {
                    return e.call(t, n)
                };
            case 2:
                return function(n, r) {
                    return e.call(t, n, r)
                };
            case 3:
                return function(n, r, i) {
                    return e.call(t, n, r, i)
                }
        }
        return function() {
            return e.apply(t, arguments)
        }
    }
}, function(e, t, n) {
    var r = n(47),
        i = n(25);
    e.exports = function(e) {
        return r(i(e))
    }
}, function(e, t, n) {
    "use strict";
    var r = this && this.__extends || function() {
        var e = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        };
        return function(t, n) {
            function r() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
        }
    }();
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i, o, a = n(88),
        s = n(3),
        u = n(22),
        c = n(89);
    t.setNodeFromJSON = function(e) {
        i = e
    }, t.setMaxNode = function(e) {
        o = e
    };
    var l = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return r(t, e), t.prototype.compare = function(e, t) {
            var n = e.node.getPriority(),
                r = t.node.getPriority(),
                i = n.compareTo(r);
            return 0 === i ? s.nameCompare(e.name, t.name) : i
        }, t.prototype.isDefinedOn = function(e) {
            return !e.getPriority().isEmpty()
        }, t.prototype.indexedValueChanged = function(e, t) {
            return !e.getPriority().equals(t.getPriority())
        }, t.prototype.minPost = function() {
            return u.NamedNode.MIN
        }, t.prototype.maxPost = function() {
            return new u.NamedNode(s.MAX_NAME, new c.LeafNode("[PRIORITY-POST]", o))
        }, t.prototype.makePost = function(e, t) {
            var n = i(e);
            return new u.NamedNode(t, new c.LeafNode("[PRIORITY-POST]", n))
        }, t.prototype.toString = function() {
            return ".priority"
        }, t
    }(a.Index);
    t.PriorityIndex = l, t.PRIORITY_INDEX = new l
}, function(e, t) {
    var n = {}.toString;
    e.exports = function(e) {
        return n.call(e).slice(8, -1)
    }
}, function(e, t, n) {
    "use strict";
    var r = this && this.__extends || function() {
        var e = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        };
        return function(t, n) {
            function r() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
        }
    }();
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i, o = n(0),
        a = n(3),
        s = n(90),
        u = n(22),
        c = n(139),
        l = n(16),
        h = n(79),
        f = n(141),
        p = n(89),
        d = n(143),
        v = function() {
            function e(e, t, n) {
                this.children_ = e, this.priorityNode_ = t, this.indexMap_ = n, this.lazyHash_ = null, this.priorityNode_ && c.validatePriorityNode(this.priorityNode_), this.children_.isEmpty() && o.assert(!this.priorityNode_ || this.priorityNode_.isEmpty(), "An empty node cannot have a priority")
            }
            return Object.defineProperty(e, "EMPTY_NODE", {
                get: function() {
                    return i || (i = new e(new s.SortedMap(d.NAME_COMPARATOR), null, f.IndexMap.Default))
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.isLeafNode = function() {
                return !1
            }, e.prototype.getPriority = function() {
                return this.priorityNode_ || i
            }, e.prototype.updatePriority = function(t) {
                return this.children_.isEmpty() ? this : new e(this.children_, t, this.indexMap_)
            }, e.prototype.getImmediateChild = function(e) {
                if (".priority" === e) return this.getPriority();
                var t = this.children_.get(e);
                return null === t ? i : t
            }, e.prototype.getChild = function(e) {
                var t = e.getFront();
                return null === t ? this : this.getImmediateChild(t).getChild(e.popFront())
            }, e.prototype.hasChild = function(e) {
                return null !== this.children_.get(e)
            }, e.prototype.updateImmediateChild = function(t, n) {
                if (o.assert(n, "We should always be passing snapshot nodes"), ".priority" === t) return this.updatePriority(n);
                var r = new u.NamedNode(t, n),
                    a = void 0,
                    s = void 0,
                    c = void 0;
                return n.isEmpty() ? (a = this.children_.remove(t), s = this.indexMap_.removeFromIndexes(r, this.children_)) : (a = this.children_.insert(t, n), s = this.indexMap_.addToIndexes(r, this.children_)), c = a.isEmpty() ? i : this.priorityNode_, new e(a, c, s)
            }, e.prototype.updateChild = function(e, t) {
                var n = e.getFront();
                if (null === n) return t;
                o.assert(".priority" !== e.getFront() || 1 === e.getLength(), ".priority must be the last token in a path");
                var r = this.getImmediateChild(n).updateChild(e.popFront(), t);
                return this.updateImmediateChild(n, r)
            }, e.prototype.isEmpty = function() {
                return this.children_.isEmpty()
            }, e.prototype.numChildren = function() {
                return this.children_.count()
            }, e.prototype.val = function(t) {
                if (this.isEmpty()) return null;
                var n = {},
                    r = 0,
                    i = 0,
                    o = !0;
                if (this.forEachChild(l.PRIORITY_INDEX, function(a, s) {
                        n[a] = s.val(t), r++, o && e.INTEGER_REGEXP_.test(a) ? i = Math.max(i, Number(a)) : o = !1
                    }), !t && o && i < 2 * r) {
                    var a = [];
                    for (var s in n) a[s] = n[s];
                    return a
                }
                return t && !this.getPriority().isEmpty() && (n[".priority"] = this.getPriority().val()), n
            }, e.prototype.hash = function() {
                if (null === this.lazyHash_) {
                    var e = "";
                    this.getPriority().isEmpty() || (e += "priority:" + c.priorityHashText(this.getPriority().val()) + ":"), this.forEachChild(l.PRIORITY_INDEX, function(t, n) {
                        var r = n.hash();
                        "" !== r && (e += ":" + t + ":" + r)
                    }), this.lazyHash_ = "" === e ? "" : a.sha1(e)
                }
                return this.lazyHash_
            }, e.prototype.getPredecessorChildName = function(e, t, n) {
                var r = this.resolveIndex_(n);
                if (r) {
                    var i = r.getPredecessorKey(new u.NamedNode(e, t));
                    return i ? i.name : null
                }
                return this.children_.getPredecessorKey(e)
            }, e.prototype.getFirstChildName = function(e) {
                var t = this.resolveIndex_(e);
                if (t) {
                    var n = t.minKey();
                    return n && n.name
                }
                return this.children_.minKey()
            }, e.prototype.getFirstChild = function(e) {
                var t = this.getFirstChildName(e);
                return t ? new u.NamedNode(t, this.children_.get(t)) : null
            }, e.prototype.getLastChildName = function(e) {
                var t = this.resolveIndex_(e);
                if (t) {
                    var n = t.maxKey();
                    return n && n.name
                }
                return this.children_.maxKey()
            }, e.prototype.getLastChild = function(e) {
                var t = this.getLastChildName(e);
                return t ? new u.NamedNode(t, this.children_.get(t)) : null
            }, e.prototype.forEachChild = function(e, t) {
                var n = this.resolveIndex_(e);
                return n ? n.inorderTraversal(function(e) {
                    return t(e.name, e.node)
                }) : this.children_.inorderTraversal(t)
            }, e.prototype.getIterator = function(e) {
                return this.getIteratorFrom(e.minPost(), e)
            }, e.prototype.getIteratorFrom = function(e, t) {
                var n = this.resolveIndex_(t);
                if (n) return n.getIteratorFrom(e, function(e) {
                    return e
                });
                for (var r = this.children_.getIteratorFrom(e.name, u.NamedNode.Wrap), i = r.peek(); null != i && t.compare(i, e) < 0;) r.getNext(), i = r.peek();
                return r
            }, e.prototype.getReverseIterator = function(e) {
                return this.getReverseIteratorFrom(e.maxPost(), e)
            }, e.prototype.getReverseIteratorFrom = function(e, t) {
                var n = this.resolveIndex_(t);
                if (n) return n.getReverseIteratorFrom(e, function(e) {
                    return e
                });
                for (var r = this.children_.getReverseIteratorFrom(e.name, u.NamedNode.Wrap), i = r.peek(); null != i && t.compare(i, e) > 0;) r.getNext(), i = r.peek();
                return r
            }, e.prototype.compareTo = function(e) {
                return this.isEmpty() ? e.isEmpty() ? 0 : -1 : e.isLeafNode() || e.isEmpty() ? 1 : e === t.MAX_NODE ? -1 : 0
            }, e.prototype.withIndex = function(t) {
                if (t === h.KEY_INDEX || this.indexMap_.hasIndex(t)) return this;
                var n = this.indexMap_.addIndex(t, this.children_);
                return new e(this.children_, this.priorityNode_, n)
            }, e.prototype.isIndexed = function(e) {
                return e === h.KEY_INDEX || this.indexMap_.hasIndex(e)
            }, e.prototype.equals = function(e) {
                if (e === this) return !0;
                if (e.isLeafNode()) return !1;
                var t = e;
                if (this.getPriority().equals(t.getPriority())) {
                    if (this.children_.count() === t.children_.count()) {
                        for (var n = this.getIterator(l.PRIORITY_INDEX), r = t.getIterator(l.PRIORITY_INDEX), i = n.getNext(), o = r.getNext(); i && o;) {
                            if (i.name !== o.name || !i.node.equals(o.node)) return !1;
                            i = n.getNext(), o = r.getNext()
                        }
                        return null === i && null === o
                    }
                    return !1
                }
                return !1
            }, e.prototype.resolveIndex_ = function(e) {
                return e === h.KEY_INDEX ? null : this.indexMap_.get(e.toString())
            }, e.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/, e
        }();
    t.ChildrenNode = v;
    var _ = function(e) {
        function t() {
            return e.call(this, new s.SortedMap(d.NAME_COMPARATOR), v.EMPTY_NODE, f.IndexMap.Default) || this
        }
        return r(t, e), t.prototype.compareTo = function(e) {
            return e === this ? 0 : 1
        }, t.prototype.equals = function(e) {
            return e === this
        }, t.prototype.getPriority = function() {
            return this
        }, t.prototype.getImmediateChild = function(e) {
            return v.EMPTY_NODE
        }, t.prototype.isEmpty = function() {
            return !1
        }, t
    }(v);
    t.MaxNode = _, t.MAX_NODE = new _, Object.defineProperties(u.NamedNode, {
        MIN: {
            value: new u.NamedNode(a.MIN_NAME, v.EMPTY_NODE)
        },
        MAX: {
            value: new u.NamedNode(a.MAX_NAME, t.MAX_NODE)
        }
    }), h.KeyIndex.__EMPTY_NODE = v.EMPTY_NODE, p.LeafNode.__childrenNodeConstructor = v, c.setMaxNode(t.MAX_NODE), l.setMaxNode(t.MAX_NODE)
}, function(e, t) {
    e.exports = function(e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e
    }
}, function(e, t) {
    e.exports = function(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}, function(e, t, n) {
    var r = n(9).f,
        i = n(12),
        o = n(1)("toStringTag");
    e.exports = function(e, t, n) {
        e && !i(e = n ? e : e.prototype, o) && r(e, o, {
            configurable: !0,
            value: t
        })
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e, t) {
            this.name = e, this.node = t
        }
        return e.Wrap = function(t, n) {
            return new e(t, n)
        }, e
    }();
    t.NamedNode = r
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return "object" == typeof e
    }

    function i() {
        return "undefined" != typeof Blob
    }
    t.a = function(e) {
        return null != e
    }, t.c = function(e) {
        return void 0 !== e
    }, t.b = function(e) {
        return "function" == typeof e
    }, t.i = r, t.g = function(e) {
        return r(e) && null !== e
    }, t.f = function(e) {
        return r(e) && !Array.isArray(e)
    }, t.j = function(e) {
        return "string" == typeof e || e instanceof String
    }, t.h = function(e) {
        return "number" == typeof e || e instanceof Number
    }, t.d = function(e) {
        return i() && e instanceof Blob
    }, t.e = i
}, function(e, t) {
    var n = Math.ceil,
        r = Math.floor;
    e.exports = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
    }
}, function(e, t) {
    e.exports = function(e) {
        if (void 0 == e) throw TypeError("Can't call method on  " + e);
        return e
    }
}, function(e, t, n) {
    var r = n(34)("keys"),
        i = n(29);
    e.exports = function(e) {
        return r[e] || (r[e] = i(e))
    }
}, function(e, t, n) {
    var r = n(10),
        i = n(2).document,
        o = r(i) && r(i.createElement);
    e.exports = function(e) {
        return o ? i.createElement(e) : {}
    }
}, function(e, t) {
    e.exports = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
}, function(e, t) {
    var n = 0,
        r = Math.random();
    e.exports = function(e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
    }
}, function(e, t, n) {
    e.exports = n(95)
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(n(83));
    t.default = function(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new r.default(function(e, n) {
                function i(o, a) {
                    try {
                        var s = t[o](a),
                            u = s.value
                    } catch (e) {
                        return void n(e)
                    }
                    if (!s.done) return r.default.resolve(u).then(function(e) {
                        i("next", e)
                    }, function(e) {
                        i("throw", e)
                    });
                    e(u)
                }
                return i("next")
            })
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(33),
        i = n(11),
        o = n(57),
        a = n(5),
        s = n(12),
        u = n(13),
        c = n(64),
        l = n(21),
        h = n(68),
        f = n(1)("iterator"),
        p = !([].keys && "next" in [].keys()),
        d = function() {
            return this
        };
    e.exports = function(e, t, n, v, _, y, g) {
        c(n, t, v);
        var m, b, E, w = function(e) {
                if (!p && e in N) return N[e];
                switch (e) {
                    case "keys":
                    case "values":
                        return function() {
                            return new n(this, e)
                        }
                }
                return function() {
                    return new n(this, e)
                }
            },
            T = t + " Iterator",
            S = "values" == _,
            C = !1,
            N = e.prototype,
            P = N[f] || N["@@iterator"] || _ && N[_],
            O = P || w(_),
            I = _ ? S ? w("entries") : O : void 0,
            A = "Array" == t ? N.entries || P : P;
        if (A && (E = h(A.call(new e))) !== Object.prototype && E.next && (l(E, T, !0), r || s(E, f) || a(E, f, d)), S && P && "values" !== P.name && (C = !0, O = function() {
                return P.call(this)
            }), r && !g || !p && !C && N[f] || a(N, f, O), u[t] = O, u[T] = d, _)
            if (m = {
                    values: S ? O : w("values"),
                    keys: y ? O : w("keys"),
                    entries: I
                }, g)
                for (b in m) b in N || o(N, b, m[b]);
            else i(i.P + i.F * (p || C), t, m);
        return m
    }
}, function(e, t) {
    e.exports = !0
}, function(e, t, n) {
    var r = n(2),
        i = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
    e.exports = function(e) {
        return i[e] || (i[e] = {})
    }
}, function(e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(e, t, n) {
    var r = n(17),
        i = n(1)("toStringTag"),
        o = "Arguments" == r(function() {
            return arguments
        }());
    e.exports = function(e) {
        var t, n, a;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
            try {
                return e[t]
            } catch (e) {}
        }(t = Object(e), i)) ? n : o ? r(t) : "Object" == (a = r(t)) && "function" == typeof t.callee ? "Arguments" : a
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return "storage/" + e
    }
    n.d(t, "a", function() {
        return o
    }), t.s = function() {
        return new i(o.UNKNOWN, "An unknown error occurred, please check the error payload for server response.")
    }, t.m = function(e) {
        return new i(o.OBJECT_NOT_FOUND, "Object '" + e + "' does not exist.")
    }, t.n = function(e) {
        return new i(o.QUOTA_EXCEEDED, "Quota for bucket '" + e + "' exceeded, please view quota on https://firebase.google.com/pricing/.")
    }, t.q = function() {
        return new i(o.UNAUTHENTICATED, "User is not authenticated, please authenticate using Firebase Authentication and try again.")
    }, t.r = function(e) {
        return new i(o.UNAUTHORIZED, "User does not have permission to access '" + e + "'.")
    }, t.o = function() {
        return new i(o.RETRY_LIMIT_EXCEEDED, "Max retry time for operation exceeded, please try again.")
    }, t.c = function() {
        return new i(o.CANCELED, "User canceled the upload/download.")
    }, t.k = function(e) {
        return new i(o.INVALID_URL, "Invalid URL '" + e + "'.")
    }, t.h = function(e) {
        return new i(o.INVALID_DEFAULT_BUCKET, "Invalid default bucket '" + e + "'.")
    }, t.d = function() {
        return new i(o.CANNOT_SLICE_BLOB, "Cannot slice blob for upload. Please retry the upload.")
    }, t.p = function() {
        return new i(o.SERVER_FILE_WRONG_SIZE, "Server recorded incorrect upload file size, please retry the upload.")
    }, t.l = function() {
        return new i(o.NO_DOWNLOAD_URL, "The given file does not have any download URLs.")
    }, t.f = function(e, t, n) {
        return new i(o.INVALID_ARGUMENT, "Invalid argument in `" + t + "` at index " + e + ": " + n)
    }, t.g = function(e, t, n, r) {
        var a, s;
        return e === t ? (a = e, s = 1 === e ? "argument" : "arguments") : (a = "between " + e + " and " + t, s = "arguments"), new i(o.INVALID_ARGUMENT_COUNT, "Invalid argument count in `" + n + "`: Expected " + a + " " + s + ", received " + r + ".")
    }, t.b = function() {
        return new i(o.APP_DELETED, "The Firebase app was deleted.")
    }, t.j = function(e) {
        return new i(o.INVALID_ROOT_OPERATION, "The operation '" + e + "' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")
    }, t.i = function(e, t) {
        return new i(o.INVALID_FORMAT, "String does not match format '" + e + "': " + t)
    }, t.e = function(e) {
        throw new i(o.INTERNAL_ERROR, "Internal error: " + e)
    };
    n(93);
    var i = function() {
            function e(e, t) {
                this.code_ = r(e), this.message_ = "Firebase Storage: " + t, this.serverResponse_ = null, this.name_ = "FirebaseError"
            }
            return e.prototype.codeProp = function() {
                return this.code
            }, e.prototype.codeEquals = function(e) {
                return r(e) === this.codeProp()
            }, e.prototype.serverResponseProp = function() {
                return this.serverResponse_
            }, e.prototype.setServerResponseProp = function(e) {
                this.serverResponse_ = e
            }, Object.defineProperty(e.prototype, "name", {
                get: function() {
                    return this.name_
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "code", {
                get: function() {
                    return this.code_
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "message", {
                get: function() {
                    return this.message_
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "serverResponse", {
                get: function() {
                    return this.serverResponse_
                },
                enumerable: !0,
                configurable: !0
            }), e
        }(),
        o = {
            UNKNOWN: "unknown",
            OBJECT_NOT_FOUND: "object-not-found",
            BUCKET_NOT_FOUND: "bucket-not-found",
            PROJECT_NOT_FOUND: "project-not-found",
            QUOTA_EXCEEDED: "quota-exceeded",
            UNAUTHENTICATED: "unauthenticated",
            UNAUTHORIZED: "unauthorized",
            RETRY_LIMIT_EXCEEDED: "retry-limit-exceeded",
            INVALID_CHECKSUM: "invalid-checksum",
            CANCELED: "canceled",
            INVALID_EVENT_NAME: "invalid-event-name",
            INVALID_URL: "invalid-url",
            INVALID_DEFAULT_BUCKET: "invalid-default-bucket",
            NO_DEFAULT_BUCKET: "no-default-bucket",
            CANNOT_SLICE_BLOB: "cannot-slice-blob",
            SERVER_FILE_WRONG_SIZE: "server-file-wrong-size",
            NO_DOWNLOAD_URL: "no-download-url",
            INVALID_ARGUMENT: "invalid-argument",
            INVALID_ARGUMENT_COUNT: "invalid-argument-count",
            APP_DELETED: "app-deleted",
            INVALID_ROOT_OPERATION: "invalid-root-operation",
            INVALID_FORMAT: "invalid-format",
            INTERNAL_ERROR: "internal-error"
        }
}, function(e, t, n) {
    "use strict";
    var r = n(63)(!0);
    n(32)(String, "String", function(e) {
        this._t = String(e), this._i = 0
    }, function() {
        var e, t = this._t,
            n = this._i;
        return n >= t.length ? {
            value: void 0,
            done: !0
        } : (e = r(t, n), this._i += e.length, {
            value: e,
            done: !1
        })
    })
}, function(e, t, n) {
    var r = n(58),
        i = n(35);
    e.exports = Object.keys || function(e) {
        return r(e, i)
    }
}, function(e, t, n) {
    var r = n(24),
        i = Math.min;
    e.exports = function(e) {
        return e > 0 ? i(r(e), 9007199254740991) : 0
    }
}, function(e, t, n) {
    n(69);
    for (var r = n(2), i = n(5), o = n(13), a = n(1)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), u = 0; u < s.length; u++) {
        var c = s[u],
            l = r[c],
            h = l && l.prototype;
        h && !h[a] && i(h, a, c), o[c] = o.Array
    }
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(n(187));
    t.default = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), (0, r.default)(e, i.key, i)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }()
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n.d(t, "firebase", function() {
        return i
    });
    var r = n(226),
        i = Object(r.a)();
    t.default = i
}, function(e, t, n) {
    var r = n(10);
    e.exports = function(e, t) {
        if (!r(e)) return e;
        var n, i;
        if (t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i;
        if ("function" == typeof(n = e.valueOf) && !r(i = n.call(e))) return i;
        if (!t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(e, t, n) {
    var r = n(6),
        i = n(65),
        o = n(35),
        a = n(26)("IE_PROTO"),
        s = function() {},
        u = function() {
            var e, t = n(27)("iframe"),
                r = o.length;
            for (t.style.display = "none", n(48).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), u = e.F; r--;) delete u.prototype[o[r]];
            return u()
        };
    e.exports = Object.create || function(e, t) {
        var n;
        return null !== e ? (s.prototype = r(e), n = new s, s.prototype = null, n[a] = e) : n = u(), void 0 === t ? n : i(n, t)
    }
}, function(e, t, n) {
    var r = n(17);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
        return "String" == r(e) ? e.split("") : Object(e)
    }
}, function(e, t, n) {
    var r = n(2).document;
    e.exports = r && r.documentElement
}, function(e, t, n) {
    var r = n(25);
    e.exports = function(e) {
        return Object(r(e))
    }
}, function(e, t, n) {
    var r = n(14),
        i = n(99),
        o = n(100),
        a = n(6),
        s = n(40),
        u = n(72),
        c = {},
        l = {};
    (t = e.exports = function(e, t, n, h, f) {
        var p, d, v, _, y = f ? function() {
                return e
            } : u(e),
            g = r(n, h, t ? 2 : 1),
            m = 0;
        if ("function" != typeof y) throw TypeError(e + " is not iterable!");
        if (o(y)) {
            for (p = s(e.length); p > m; m++)
                if ((_ = t ? g(a(d = e[m])[0], d[1]) : g(e[m])) === c || _ === l) return _
        } else
            for (v = y.call(e); !(d = v.next()).done;)
                if ((_ = i(v, g, d.value, t)) === c || _ === l) return _
    }).BREAK = c, t.RETURN = l
}, function(e, t, n) {
    "use strict";
    var r = n(19);
    e.exports.f = function(e) {
        return new function(e) {
            var t, n;
            this.promise = new e(function(e, r) {
                if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                t = e, n = r
            }), this.resolve = r(t), this.reject = r(n)
        }(e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(8),
        i = n(0),
        o = n(3),
        a = n(0),
        s = n(0);
    t.INVALID_KEY_REGEX_ = /[\[\].#$\/\u0000-\u001F\u007F]/, t.INVALID_PATH_REGEX_ = /[\[\].#$\u0000-\u001F\u007F]/, t.MAX_LEAF_SIZE_ = 10485760, t.isValidKey = function(e) {
        return "string" == typeof e && 0 !== e.length && !t.INVALID_KEY_REGEX_.test(e)
    }, t.isValidPathString = function(e) {
        return "string" == typeof e && 0 !== e.length && !t.INVALID_PATH_REGEX_.test(e)
    }, t.isValidRootPathString = function(e) {
        return e && (e = e.replace(/^\/*\.info(\/|$)/, "/")), t.isValidPathString(e)
    }, t.isValidPriority = function(e) {
        return null === e || "string" == typeof e || "number" == typeof e && !o.isInvalidJSONNumber(e) || e && "object" == typeof e && i.contains(e, ".sv")
    }, t.validateFirebaseDataArg = function(e, n, r, i, o) {
        o && void 0 === r || t.validateFirebaseData(a.errorPrefix(e, n, o), r, i)
    }, t.validateFirebaseData = function(e, n, a) {
        var u = a instanceof r.Path ? new r.ValidationPath(a, e) : a;
        if (void 0 === n) throw new Error(e + "contains undefined " + u.toErrorString());
        if ("function" == typeof n) throw new Error(e + "contains a function " + u.toErrorString() + " with contents = " + n.toString());
        if (o.isInvalidJSONNumber(n)) throw new Error(e + "contains " + n.toString() + " " + u.toErrorString());
        if ("string" == typeof n && n.length > t.MAX_LEAF_SIZE_ / 3 && s.stringLength(n) > t.MAX_LEAF_SIZE_) throw new Error(e + "contains a string greater than " + t.MAX_LEAF_SIZE_ + " utf8 bytes " + u.toErrorString() + " ('" + n.substring(0, 50) + "...')");
        if (n && "object" == typeof n) {
            var c = !1,
                l = !1;
            if (i.forEach(n, function(n, r) {
                    if (".value" === n) c = !0;
                    else if (".priority" !== n && ".sv" !== n && (l = !0, !t.isValidKey(n))) throw new Error(e + " contains an invalid key (" + n + ") " + u.toErrorString() + '.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');
                    u.push(n), t.validateFirebaseData(e, r, u), u.pop()
                }), c && l) throw new Error(e + ' contains ".value" child ' + u.toErrorString() + " in addition to actual children.")
        }
    }, t.validateFirebaseMergePaths = function(e, n) {
        var i, o;
        for (i = 0; i < n.length; i++)
            for (var a = (o = n[i]).slice(), s = 0; s < a.length; s++)
                if (".priority" === a[s] && s === a.length - 1);
                else if (!t.isValidKey(a[s])) throw new Error(e + "contains an invalid key (" + a[s] + ") in path " + o.toString() + '. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');
        n.sort(r.Path.comparePaths);
        var u = null;
        for (i = 0; i < n.length; i++) {
            if (o = n[i], null !== u && u.contains(o)) throw new Error(e + "contains a path " + u.toString() + " that is ancestor of another path " + o.toString());
            u = o
        }
    }, t.validateFirebaseMergeDataArg = function(e, n, o, s, u) {
        if (!u || void 0 !== o) {
            var c = a.errorPrefix(e, n, u);
            if (!o || "object" != typeof o || Array.isArray(o)) throw new Error(c + " must be an object containing the children to replace.");
            var l = [];
            i.forEach(o, function(e, n) {
                var i = new r.Path(e);
                if (t.validateFirebaseData(c, n, s.child(i)), ".priority" === i.getBack() && !t.isValidPriority(n)) throw new Error(c + "contains an invalid value for '" + i.toString() + "', which must be a valid Firebase priority (a string, finite number, server value, or null).");
                l.push(i)
            }), t.validateFirebaseMergePaths(c, l)
        }
    }, t.validatePriority = function(e, n, r, i) {
        if (!i || void 0 !== r) {
            if (o.isInvalidJSONNumber(r)) throw new Error(a.errorPrefix(e, n, i) + "is " + r.toString() + ", but must be a valid Firebase priority (a string, finite number, server value, or null).");
            if (!t.isValidPriority(r)) throw new Error(a.errorPrefix(e, n, i) + "must be a valid Firebase priority (a string, finite number, server value, or null).")
        }
    }, t.validateEventType = function(e, t, n, r) {
        if (!r || void 0 !== n) switch (n) {
            case "value":
            case "child_added":
            case "child_removed":
            case "child_changed":
            case "child_moved":
                break;
            default:
                throw new Error(a.errorPrefix(e, t, r) + 'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')
        }
    }, t.validateKey = function(e, n, r, i) {
        if (!(i && void 0 === r || t.isValidKey(r))) throw new Error(a.errorPrefix(e, n, i) + 'was an invalid key = "' + r + '".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')
    }, t.validatePathString = function(e, n, r, i) {
        if (!(i && void 0 === r || t.isValidPathString(r))) throw new Error(a.errorPrefix(e, n, i) + 'was an invalid path = "' + r + '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')
    }, t.validateRootPathString = function(e, n, r, i) {
        r && (r = r.replace(/^\/*\.info(\/|$)/, "/")), t.validatePathString(e, n, r, i)
    }, t.validateWritablePath = function(e, t) {
        if (".info" === t.getFront()) throw new Error(e + " failed = Can't modify data under /.info/")
    }, t.validateUrl = function(e, n, r) {
        var i = r.path.toString();
        if ("string" != typeof r.repoInfo.host || 0 === r.repoInfo.host.length || !t.isValidKey(r.repoInfo.namespace) && "localhost" !== r.repoInfo.host.split(":")[0] || 0 !== i.length && !t.isValidRootPathString(i)) throw new Error(a.errorPrefix(e, n, !1) + 'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')
    }, t.validateCredential = function(e, t, n, r) {
        if ((!r || void 0 !== n) && "string" != typeof n) throw new Error(a.errorPrefix(e, t, r) + "must be a valid credential (a string).")
    }, t.validateBoolean = function(e, t, n, r) {
        if ((!r || void 0 !== n) && "boolean" != typeof n) throw new Error(a.errorPrefix(e, t, r) + "must be a boolean.")
    }, t.validateString = function(e, t, n, r) {
        if ((!r || void 0 !== n) && "string" != typeof n) throw new Error(a.errorPrefix(e, t, r) + "must be a valid string.")
    }, t.validateObject = function(e, t, n, r) {
        if (!(r && void 0 === n || n && "object" == typeof n && null !== n)) throw new Error(a.errorPrefix(e, t, r) + "must be a valid object.")
    }, t.validateObjectContainsKey = function(e, t, n, r, o, s) {
        if (!(n && "object" == typeof n && i.contains(n, r))) {
            if (o) return;
            throw new Error(a.errorPrefix(e, t, o) + 'must contain the key "' + r + '"')
        }
        if (s) {
            var u = i.safeGet(n, r);
            if ("number" === s && "number" != typeof u || "string" === s && "string" != typeof u || "boolean" === s && "boolean" != typeof u || "function" === s && "function" != typeof u || "object" === s && "object" != typeof u && u) throw o ? new Error(a.errorPrefix(e, t, o) + 'contains invalid value for key "' + r + '" (must be of type "' + s + '")') : new Error(a.errorPrefix(e, t, o) + 'must contain the key "' + r + '" with type "' + s + '"')
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0);
    ! function(e) {
        e[e.OVERWRITE = 0] = "OVERWRITE", e[e.MERGE = 1] = "MERGE", e[e.ACK_USER_WRITE = 2] = "ACK_USER_WRITE", e[e.LISTEN_COMPLETE = 3] = "LISTEN_COMPLETE"
    }(t.OperationType || (t.OperationType = {}));
    var i = function() {
        function e(e, t, n, i) {
            this.fromUser = e, this.fromServer = t, this.queryId = n, this.tagged = i, r.assert(!i || t, "Tagged queries must be from server.")
        }
        return e.User = new e(!0, !1, null, !1), e.Server = new e(!1, !0, null, !1), e.forServerTaggedQuery = function(t) {
            return new e(!1, !0, t, !0)
        }, e
    }();
    t.OperationSource = i
}, function(e, t, n) {
    "use strict";
    var r = {
            AVAILABLE_IN_WINDOW: "only-available-in-window",
            AVAILABLE_IN_SW: "only-available-in-sw",
            SHOULD_BE_INHERITED: "should-be-overriden",
            BAD_SENDER_ID: "bad-sender-id",
            INCORRECT_GCM_SENDER_ID: "incorrect-gcm-sender-id",
            PERMISSION_DEFAULT: "permission-default",
            PERMISSION_BLOCKED: "permission-blocked",
            UNSUPPORTED_BROWSER: "unsupported-browser",
            NOTIFICATIONS_BLOCKED: "notifications-blocked",
            FAILED_DEFAULT_REGISTRATION: "failed-serviceworker-registration",
            SW_REGISTRATION_EXPECTED: "sw-registration-expected",
            GET_SUBSCRIPTION_FAILED: "get-subscription-failed",
            INVALID_SAVED_TOKEN: "invalid-saved-token",
            SW_REG_REDUNDANT: "sw-reg-redundant",
            TOKEN_SUBSCRIBE_FAILED: "token-subscribe-failed",
            TOKEN_SUBSCRIBE_NO_TOKEN: "token-subscribe-no-token",
            TOKEN_SUBSCRIBE_NO_PUSH_SET: "token-subscribe-no-push-set",
            TOKEN_UNSUBSCRIBE_FAILED: "token-unsubscribe-failed",
            TOKEN_UPDATE_FAILED: "token-update-failed",
            TOKEN_UPDATE_NO_TOKEN: "token-update-no-token",
            USE_SW_BEFORE_GET_TOKEN: "use-sw-before-get-token",
            INVALID_DELETE_TOKEN: "invalid-delete-token",
            DELETE_TOKEN_NOT_FOUND: "delete-token-not-found",
            DELETE_SCOPE_NOT_FOUND: "delete-scope-not-found",
            BG_HANDLER_FUNCTION_EXPECTED: "bg-handler-function-expected",
            NO_WINDOW_CLIENT_TO_MSG: "no-window-client-to-msg",
            UNABLE_TO_RESUBSCRIBE: "unable-to-resubscribe",
            NO_FCM_TOKEN_FOR_RESUBSCRIBE: "no-fcm-token-for-resubscribe",
            FAILED_TO_DELETE_TOKEN: "failed-to-delete-token",
            NO_SW_IN_REG: "no-sw-in-reg",
            BAD_SCOPE: "bad-scope",
            BAD_VAPID_KEY: "bad-vapid-key",
            BAD_SUBSCRIPTION: "bad-subscription",
            BAD_TOKEN: "bad-token",
            BAD_PUSH_SET: "bad-push-set",
            FAILED_DELETE_VAPID_KEY: "failed-delete-vapid-key",
            INVALID_PUBLIC_VAPID_KEY: "invalid-public-vapid-key",
            USE_PUBLIC_KEY_BEFORE_GET_TOKEN: "use-public-key-before-get-token",
            PUBLIC_KEY_DECRYPTION_FAILED: "public-vapid-key-decryption-failed"
        },
        i = (o = {}, o[r.AVAILABLE_IN_WINDOW] = "This method is available in a Window context.", o[r.AVAILABLE_IN_SW] = "This method is available in a service worker context.", o[r.SHOULD_BE_INHERITED] = "This method should be overriden by extended classes.", o[r.BAD_SENDER_ID] = "Please ensure that 'messagingSenderId' is set correctly in the options passed into firebase.initializeApp().", o[r.PERMISSION_DEFAULT] = "The required permissions were not granted and dismissed instead.", o[r.PERMISSION_BLOCKED] = "The required permissions were not granted and blocked instead.", o[r.UNSUPPORTED_BROWSER] = "This browser doesn't support the API's required to use the firebase SDK.", o[r.NOTIFICATIONS_BLOCKED] = "Notifications have been blocked.", o[r.FAILED_DEFAULT_REGISTRATION] = "We are unable to register the default service worker. {$browserErrorMessage}", o[r.SW_REGISTRATION_EXPECTED] = "A service worker registration was the expected input.", o[r.GET_SUBSCRIPTION_FAILED] = "There was an error when trying to get any existing Push Subscriptions.", o[r.INVALID_SAVED_TOKEN] = "Unable to access details of the saved token.", o[r.SW_REG_REDUNDANT] = "The service worker being used for push was made redundant.", o[r.TOKEN_SUBSCRIBE_FAILED] = "A problem occured while subscribing the user to FCM: {$message}", o[r.TOKEN_SUBSCRIBE_NO_TOKEN] = "FCM returned no token when subscribing the user to push.", o[r.TOKEN_SUBSCRIBE_NO_PUSH_SET] = "FCM returned an invalid response when getting an FCM token.", o[r.TOKEN_UNSUBSCRIBE_FAILED] = "A problem occured while unsubscribing the user from FCM: {$message}", o[r.TOKEN_UPDATE_FAILED] = "A problem occured while updating the user from FCM: {$message}", o[r.TOKEN_UPDATE_NO_TOKEN] = "FCM returned no token when updating the user to push.", o[r.USE_SW_BEFORE_GET_TOKEN] = "You must call useServiceWorker() before calling getToken() to ensure your service worker is used.", o[r.INVALID_DELETE_TOKEN] = "You must pass a valid token into deleteToken(), i.e. the token from getToken().", o[r.DELETE_TOKEN_NOT_FOUND] = "The deletion attempt for token could not be performed as the token was not found.", o[r.DELETE_SCOPE_NOT_FOUND] = "The deletion attempt for service worker scope could not be performed as the scope was not found.", o[r.BG_HANDLER_FUNCTION_EXPECTED] = "The input to setBackgroundMessageHandler() must be a function.", o[r.NO_WINDOW_CLIENT_TO_MSG] = "An attempt was made to message a non-existant window client.", o[r.UNABLE_TO_RESUBSCRIBE] = "There was an error while re-subscribing the FCM token for push messaging. Will have to resubscribe the user on next visit. {$message}", o[r.NO_FCM_TOKEN_FOR_RESUBSCRIBE] = "Could not find an FCM token and as a result, unable to resubscribe. Will have to resubscribe the user on next visit.", o[r.FAILED_TO_DELETE_TOKEN] = "Unable to delete the currently saved token.", o[r.NO_SW_IN_REG] = "Even though the service worker registration was successful, there was a problem accessing the service worker itself.", o[r.INCORRECT_GCM_SENDER_ID] = "Please change your web app manifest's 'gcm_sender_id' value to '103953800507' to use Firebase messaging.", o[r.BAD_SCOPE] = "The service worker scope must be a string with at least one character.", o[r.BAD_VAPID_KEY] = "The public VAPID key is not a Uint8Array with 65 bytes.", o[r.BAD_SUBSCRIPTION] = "The subscription must be a valid PushSubscription.", o[r.BAD_TOKEN] = "The FCM Token used for storage / lookup was not a valid token string.", o[r.BAD_PUSH_SET] = "The FCM push set used for storage / lookup was not not a valid push set string.", o[r.FAILED_DELETE_VAPID_KEY] = "The VAPID key could not be deleted.", o[r.INVALID_PUBLIC_VAPID_KEY] = "The public VAPID key must be a string.", o[r.PUBLIC_KEY_DECRYPTION_FAILED] = "The public VAPID key did not equal 65 bytes when decrypted.", o);
    t.a = {
        codes: r,
        map: i
    };
    var o
}, function(e, t, n) {
    "use strict";
    t.a = function(e) {
        return new Promise(e)
    }, t.c = function(e) {
        return Promise.resolve(e)
    }, t.b = function(e) {
        return Promise.reject(e)
    }
}, function(e, t, n) {
    e.exports = !n(7) && !n(20)(function() {
        return 7 != Object.defineProperty(n(27)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(e, t, n) {
    e.exports = n(5)
}, function(e, t, n) {
    var r = n(12),
        i = n(15),
        o = n(66)(!1),
        a = n(26)("IE_PROTO");
    e.exports = function(e, t) {
        var n, s = i(e),
            u = 0,
            c = [];
        for (n in s) n != a && r(s, n) && c.push(n);
        for (; t.length > u;) r(s, n = t[u++]) && (~o(c, n) || c.push(n));
        return c
    }
}, function(e, t) {
    e.exports = function(e, t) {
        return {
            value: t,
            done: !!e
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e, t, n, r, i) {
            this.type = e, this.snapshotNode = t, this.childName = n, this.oldSnap = r, this.prevName = i
        }
        return e.valueChange = function(t) {
            return new e(e.VALUE, t)
        }, e.childAddedChange = function(t, n) {
            return new e(e.CHILD_ADDED, n, t)
        }, e.childRemovedChange = function(t, n) {
            return new e(e.CHILD_REMOVED, n, t)
        }, e.childChangedChange = function(t, n, r) {
            return new e(e.CHILD_CHANGED, n, t, r)
        }, e.childMovedChange = function(t, n) {
            return new e(e.CHILD_MOVED, n, t)
        }, e.CHILD_ADDED = "child_added", e.CHILD_REMOVED = "child_removed", e.CHILD_CHANGED = "child_changed", e.CHILD_MOVED = "child_moved", e.VALUE = "value", e
    }();
    t.Change = r
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }

    function i(e, t) {
        for (var n in e) r(e, n) && t(n, e[n])
    }
    t.b = i, t.a = function(e) {
        if (null == e) return {};
        var t = {};
        return i(e, function(e, n) {
            t[e] = n
        }), t
    }
}, function(e, t) {}, function(e, t, n) {
    var r = n(24),
        i = n(25);
    e.exports = function(e) {
        return function(t, n) {
            var o, a, s = String(i(t)),
                u = r(n),
                c = s.length;
            return u < 0 || u >= c ? e ? "" : void 0 : (o = s.charCodeAt(u)) < 55296 || o > 56319 || u + 1 === c || (a = s.charCodeAt(u + 1)) < 56320 || a > 57343 ? e ? s.charAt(u) : o : e ? s.slice(u, u + 2) : a - 56320 + (o - 55296 << 10) + 65536
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(46),
        i = n(28),
        o = n(21),
        a = {};
    n(5)(a, n(1)("iterator"), function() {
        return this
    }), e.exports = function(e, t, n) {
        e.prototype = r(a, {
            next: i(1, n)
        }), o(e, t + " Iterator")
    }
}, function(e, t, n) {
    var r = n(9),
        i = n(6),
        o = n(39);
    e.exports = n(7) ? Object.defineProperties : function(e, t) {
        i(e);
        for (var n, a = o(t), s = a.length, u = 0; s > u;) r.f(e, n = a[u++], t[n]);
        return e
    }
}, function(e, t, n) {
    var r = n(15),
        i = n(40),
        o = n(67);
    e.exports = function(e) {
        return function(t, n, a) {
            var s, u = r(t),
                c = i(u.length),
                l = o(a, c);
            if (e && n != n) {
                for (; c > l;)
                    if ((s = u[l++]) != s) return !0
            } else
                for (; c > l; l++)
                    if ((e || l in u) && u[l] === n) return e || l || 0;
            return !e && -1
        }
    }
}, function(e, t, n) {
    var r = n(24),
        i = Math.max,
        o = Math.min;
    e.exports = function(e, t) {
        return (e = r(e)) < 0 ? i(e + t, 0) : o(e, t)
    }
}, function(e, t, n) {
    var r = n(12),
        i = n(49),
        o = n(26)("IE_PROTO"),
        a = Object.prototype;
    e.exports = Object.getPrototypeOf || function(e) {
        return e = i(e), r(e, o) ? e[o] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
    }
}, function(e, t, n) {
    "use strict";
    var r = n(70),
        i = n(59),
        o = n(13),
        a = n(15);
    e.exports = n(32)(Array, "Array", function(e, t) {
        this._t = a(e), this._i = 0, this._k = t
    }, function() {
        var e = this._t,
            t = this._k,
            n = this._i++;
        return !e || n >= e.length ? (this._t = void 0, i(1)) : "keys" == t ? i(0, n) : "values" == t ? i(0, e[n]) : i(0, [n, e[n]])
    }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries")
}, function(e, t) {
    e.exports = function() {}
}, function(e, t) {
    e.exports = function(e, t, n, r) {
        if (!(e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!");
        return e
    }
}, function(e, t, n) {
    var r = n(36),
        i = n(1)("iterator"),
        o = n(13);
    e.exports = n(4).getIteratorMethod = function(e) {
        if (void 0 != e) return e[i] || e["@@iterator"] || o[r(e)]
    }
}, function(e, t, n) {
    var r = n(6),
        i = n(19),
        o = n(1)("species");
    e.exports = function(e, t) {
        var n, a = r(e).constructor;
        return void 0 === a || void 0 == (n = r(a)[o]) ? t : i(n)
    }
}, function(e, t, n) {
    var r, i, o, a = n(14),
        s = n(101),
        u = n(48),
        c = n(27),
        l = n(2),
        h = l.process,
        f = l.setImmediate,
        p = l.clearImmediate,
        d = l.MessageChannel,
        v = l.Dispatch,
        _ = 0,
        y = {},
        g = function() {
            var e = +this;
            if (y.hasOwnProperty(e)) {
                var t = y[e];
                delete y[e], t()
            }
        },
        m = function(e) {
            g.call(e.data)
        };
    f && p || (f = function(e) {
        for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
        return y[++_] = function() {
            s("function" == typeof e ? e : Function(e), t)
        }, r(_), _
    }, p = function(e) {
        delete y[e]
    }, "process" == n(17)(h) ? r = function(e) {
        h.nextTick(a(g, e, 1))
    } : v && v.now ? r = function(e) {
        v.now(a(g, e, 1))
    } : d ? (o = (i = new d).port2, i.port1.onmessage = m, r = a(o.postMessage, o, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (r = function(e) {
        l.postMessage(e + "", "*")
    }, l.addEventListener("message", m, !1)) : r = "onreadystatechange" in c("script") ? function(e) {
        u.appendChild(c("script")).onreadystatechange = function() {
            u.removeChild(this), g.call(e)
        }
    } : function(e) {
        setTimeout(a(g, e, 1), 0)
    }), e.exports = {
        set: f,
        clear: p
    }
}, function(e, t) {
    e.exports = function(e) {
        try {
            return {
                e: !1,
                v: e()
            }
        } catch (e) {
            return {
                e: !0,
                v: e
            }
        }
    }
}, function(e, t, n) {
    var r = n(6),
        i = n(10),
        o = n(51);
    e.exports = function(e, t) {
        if (r(e), i(t) && t.constructor === e) return t;
        var n = o.f(e);
        return (0, n.resolve)(t), n.promise
    }
}, function(e, t, n) {
    var r = n(5);
    e.exports = function(e, t, n) {
        for (var i in t) n && e[i] ? e[i] = t[i] : r(e, i, t[i]);
        return e
    }
}, function(e, t, n) {
    e.exports = {
        default: n(107),
        __esModule: !0
    }
}, function(e, t, n) {
    "use strict";
    var r = this && this.__extends || function() {
        var e = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        };
        return function(t, n) {
            function r() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
        }
    }();
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i, o = n(88),
        a = n(22),
        s = n(3),
        u = n(0),
        c = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e), Object.defineProperty(t, "__EMPTY_NODE", {
                get: function() {
                    return i
                },
                set: function(e) {
                    i = e
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.compare = function(e, t) {
                return s.nameCompare(e.name, t.name)
            }, t.prototype.isDefinedOn = function(e) {
                throw u.assertionError("KeyIndex.isDefinedOn not expected to be called.")
            }, t.prototype.indexedValueChanged = function(e, t) {
                return !1
            }, t.prototype.minPost = function() {
                return a.NamedNode.MIN
            }, t.prototype.maxPost = function() {
                return new a.NamedNode(s.MAX_NAME, i)
            }, t.prototype.makePost = function(e, t) {
                return u.assert("string" == typeof e, "KeyIndex indexValue must always be a string."), new a.NamedNode(e, i)
            }, t.prototype.toString = function() {
                return ".key"
            }, t
        }(o.Index);
    t.KeyIndex = c, t.KEY_INDEX = new c
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (void 0 === t && (t = null), null === e) return i.ChildrenNode.EMPTY_NODE;
        if ("object" == typeof e && ".priority" in e && (t = e[".priority"]), u.assert(null === t || "string" == typeof t || "number" == typeof t || "object" == typeof t && ".sv" in t, "Invalid priority type found: " + typeof t), "object" == typeof e && ".value" in e && null !== e[".value"] && (e = e[".value"]), "object" != typeof e || ".sv" in e) {
            var n = e;
            return new o.LeafNode(n, r(t))
        }
        if (e instanceof Array || !p) {
            var d = i.ChildrenNode.EMPTY_NODE,
                v = e;
            return s.forEach(v, function(e, t) {
                if (s.contains(v, e) && "." !== e.substring(0, 1)) {
                    var n = r(t);
                    !n.isLeafNode() && n.isEmpty() || (d = d.updateImmediateChild(e, n))
                }
            }), d.updatePriority(r(t))
        }
        var _ = [],
            y = !1,
            g = e;
        if (s.forEach(g, function(e, t) {
                if ("string" != typeof e || "." !== e.substring(0, 1)) {
                    var n = r(g[e]);
                    n.isEmpty() || (y = y || !n.getPriority().isEmpty(), _.push(new a.NamedNode(e, n)))
                }
            }), 0 == _.length) return i.ChildrenNode.EMPTY_NODE;
        var m = c.buildChildSet(_, l.NAME_ONLY_COMPARATOR, function(e) {
            return e.name
        }, l.NAME_COMPARATOR);
        if (y) {
            var b = c.buildChildSet(_, f.PRIORITY_INDEX.getCompare());
            return new i.ChildrenNode(m, r(t), new h.IndexMap({
                ".priority": b
            }, {
                ".priority": f.PRIORITY_INDEX
            }))
        }
        return new i.ChildrenNode(m, r(t), h.IndexMap.Default)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(18),
        o = n(89),
        a = n(22),
        s = n(0),
        u = n(0),
        c = n(142),
        l = n(143),
        h = n(141),
        f = n(16),
        p = !0;
    t.nodeFromJSON = r, f.setNodeFromJSON(r)
}, function(e, t, n) {
    "use strict";

    function r(e) {
        for (var t = [], n = 0; n < e.length; n++) {
            var r = e.charCodeAt(n);
            if (r <= 127) t.push(r);
            else if (r <= 2047) t.push(192 | r >> 6, 128 | 63 & r);
            else if (55296 == (64512 & r)) {
                if (n < e.length - 1 && 56320 == (64512 & e.charCodeAt(n + 1))) {
                    r = 65536 | (1023 & r) << 10 | 1023 & e.charCodeAt(++n), t.push(240 | r >> 18, 128 | r >> 12 & 63, 128 | r >> 6 & 63, 128 | 63 & r)
                } else t.push(239, 191, 189)
            } else 56320 == (64512 & r) ? t.push(239, 191, 189) : t.push(224 | r >> 12, 128 | r >> 6 & 63, 128 | 63 & r)
        }
        return new Uint8Array(t)
    }

    function i(e, t) {
        switch (e) {
            case a.BASE64:
                var n = -1 !== t.indexOf("-"),
                    r = -1 !== t.indexOf("_");
                if (n || r) {
                    u = n ? "-" : "_";
                    throw o.i(e, "Invalid character '" + u + "' found: is it base64url encoded?")
                }
                break;
            case a.BASE64URL:
                var i = -1 !== t.indexOf("+"),
                    s = -1 !== t.indexOf("/");
                if (i || s) {
                    var u = i ? "+" : "/";
                    throw o.i(e, "Invalid character '" + u + "' found: is it base64 encoded?")
                }
                t = t.replace(/-/g, "+").replace(/_/g, "/")
        }
        var c;
        try {
            c = atob(t)
        } catch (t) {
            throw o.i(e, "Invalid character found")
        }
        for (var l = new Uint8Array(c.length), h = 0; h < c.length; h++) l[h] = c.charCodeAt(h);
        return l
    }
    n.d(t, "a", function() {
        return a
    }), t.c = function(e) {
        switch (e) {
            case a.RAW:
            case a.BASE64:
            case a.BASE64URL:
            case a.DATA_URL:
                return;
            default:
                throw "Expected one of the event types: [" + a.RAW + ", " + a.BASE64 + ", " + a.BASE64URL + ", " + a.DATA_URL + "]."
        }
    }, t.b = function(e, t) {
        switch (e) {
            case a.RAW:
                return new s(r(t));
            case a.BASE64:
            case a.BASE64URL:
                return new s(i(e, t));
            case a.DATA_URL:
                return new s(function(e) {
                    var t = new u(e);
                    return t.base64 ? i(a.BASE64, t.rest) : function(e) {
                        var t;
                        try {
                            t = decodeURIComponent(e)
                        } catch (e) {
                            throw o.i(a.DATA_URL, "Malformed data URL.")
                        }
                        return r(t)
                    }(t.rest)
                }(t), function(e) {
                    return new u(e).contentType
                }(t))
        }
        throw o.s()
    };
    var o = n(37),
        a = {
            RAW: "raw",
            BASE64: "base64",
            BASE64URL: "base64url",
            DATA_URL: "data_url"
        },
        s = function() {
            return function(e, t) {
                this.data = e, this.contentType = t || null
            }
        }(),
        u = function() {
            return function(e) {
                this.base64 = !1, this.contentType = null;
                var t = e.match(/^data:([^,]+)?,/);
                if (null === t) throw o.i(a.DATA_URL, "Must be formatted 'data:[<mediatype>][;base64],<data>");
                var n = t[1] || null;
                null != n && (this.base64 = function(e, t) {
                    return !!(e.length >= t.length) && e.substring(e.length - t.length) === t
                }(n, ";base64"), this.contentType = this.base64 ? n.substring(0, n.length - ";base64".length) : n), this.rest = e.substring(e.indexOf(",") + 1)
            }
        }()
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
        return r
    }), n.d(t, "a", function() {
        return i
    }), n.d(t, "c", function() {
        return o
    }), t.d = function(e) {
        switch (e) {
            case i.RUNNING:
            case i.PAUSING:
            case i.CANCELING:
                return o.RUNNING;
            case i.PAUSED:
                return o.PAUSED;
            case i.SUCCESS:
                return o.SUCCESS;
            case i.CANCELED:
                return o.CANCELED;
            case i.ERROR:
            default:
                return o.ERROR
        }
    };
    var r = {
            STATE_CHANGED: "state_changed"
        },
        i = {
            RUNNING: "running",
            PAUSING: "pausing",
            PAUSED: "paused",
            SUCCESS: "success",
            CANCELING: "canceling",
            CANCELED: "canceled",
            ERROR: "error"
        },
        o = {
            RUNNING: "running",
            PAUSED: "paused",
            SUCCESS: "success",
            CANCELED: "canceled",
            ERROR: "error"
        }
}, function(e, t, n) {
    e.exports = {
        default: n(97),
        __esModule: !0
    }
}, function(e, t, n) {
    "use strict";
    var r = n(2),
        i = n(4),
        o = n(9),
        a = n(7),
        s = n(1)("species");
    e.exports = function(e) {
        var t = "function" == typeof i[e] ? i[e] : r[e];
        a && t && !t[s] && o.f(t, s, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}, function(e, t) {
    t.f = {}.propertyIsEnumerable
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(242),
        i = n(243),
        o = function(e) {
            try {
                if ("undefined" != typeof window && void 0 !== window[e]) {
                    var t = window[e];
                    return t.setItem("firebase:sentinel", "cache"), t.removeItem("firebase:sentinel"), new r.DOMStorageWrapper(t)
                }
            } catch (e) {}
            return new i.MemoryStorage
        };
    t.PersistentStorage = o("localStorage"), t.SessionStorage = o("sessionStorage")
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.PROTOCOL_VERSION = "5", t.VERSION_PARAM = "v", t.TRANSPORT_SESSION_PARAM = "s", t.REFERER_PARAM = "r", t.FORGE_REF = "f", t.FORGE_DOMAIN = "firebaseio.com", t.LAST_SESSION_PARAM = "ls", t.WEBSOCKET = "websocket", t.LONG_POLLING = "long_polling"
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(22),
        i = n(3),
        o = function() {
            function e() {}
            return e.prototype.getCompare = function() {
                return this.compare.bind(this)
            }, e.prototype.indexedValueChanged = function(e, t) {
                var n = new r.NamedNode(i.MIN_NAME, e),
                    o = new r.NamedNode(i.MIN_NAME, t);
                return 0 !== this.compare(n, o)
            }, e.prototype.minPost = function() {
                return r.NamedNode.MIN
            }, e
        }();
    t.Index = o
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r, i = n(0),
        o = n(3),
        a = n(139),
        s = function() {
            function e(t, n) {
                void 0 === n && (n = e.__childrenNodeConstructor.EMPTY_NODE), this.value_ = t, this.priorityNode_ = n, this.lazyHash_ = null, i.assert(void 0 !== this.value_ && null !== this.value_, "LeafNode shouldn't be created with null/undefined value."), a.validatePriorityNode(this.priorityNode_)
            }
            return Object.defineProperty(e, "__childrenNodeConstructor", {
                get: function() {
                    return r
                },
                set: function(e) {
                    r = e
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.isLeafNode = function() {
                return !0
            }, e.prototype.getPriority = function() {
                return this.priorityNode_
            }, e.prototype.updatePriority = function(t) {
                return new e(this.value_, t)
            }, e.prototype.getImmediateChild = function(t) {
                return ".priority" === t ? this.priorityNode_ : e.__childrenNodeConstructor.EMPTY_NODE
            }, e.prototype.getChild = function(t) {
                return t.isEmpty() ? this : ".priority" === t.getFront() ? this.priorityNode_ : e.__childrenNodeConstructor.EMPTY_NODE
            }, e.prototype.hasChild = function() {
                return !1
            }, e.prototype.getPredecessorChildName = function(e, t) {
                return null
            }, e.prototype.updateImmediateChild = function(t, n) {
                return ".priority" === t ? this.updatePriority(n) : n.isEmpty() && ".priority" !== t ? this : e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t, n).updatePriority(this.priorityNode_)
            }, e.prototype.updateChild = function(t, n) {
                var r = t.getFront();
                return null === r ? n : n.isEmpty() && ".priority" !== r ? this : (i.assert(".priority" !== r || 1 === t.getLength(), ".priority must be the last token in a path"), this.updateImmediateChild(r, e.__childrenNodeConstructor.EMPTY_NODE.updateChild(t.popFront(), n)))
            }, e.prototype.isEmpty = function() {
                return !1
            }, e.prototype.numChildren = function() {
                return 0
            }, e.prototype.forEachChild = function(e, t) {
                return !1
            }, e.prototype.val = function(e) {
                return e && !this.getPriority().isEmpty() ? {
                    ".value": this.getValue(),
                    ".priority": this.getPriority().val()
                } : this.getValue()
            }, e.prototype.hash = function() {
                if (null === this.lazyHash_) {
                    var e = "";
                    this.priorityNode_.isEmpty() || (e += "priority:" + a.priorityHashText(this.priorityNode_.val()) + ":");
                    var t = typeof this.value_;
                    e += t + ":", e += "number" === t ? o.doubleToIEEE754String(this.value_) : this.value_, this.lazyHash_ = o.sha1(e)
                }
                return this.lazyHash_
            }, e.prototype.getValue = function() {
                return this.value_
            }, e.prototype.compareTo = function(t) {
                return t === e.__childrenNodeConstructor.EMPTY_NODE ? 1 : t instanceof e.__childrenNodeConstructor ? -1 : (i.assert(t.isLeafNode(), "Unknown node type"), this.compareToLeafNode_(t))
            }, e.prototype.compareToLeafNode_ = function(t) {
                var n = typeof t.value_,
                    r = typeof this.value_,
                    o = e.VALUE_TYPE_ORDER.indexOf(n),
                    a = e.VALUE_TYPE_ORDER.indexOf(r);
                return i.assert(o >= 0, "Unknown leaf type: " + n), i.assert(a >= 0, "Unknown leaf type: " + r), o === a ? "object" === r ? 0 : this.value_ < t.value_ ? -1 : this.value_ === t.value_ ? 0 : 1 : a - o
            }, e.prototype.withIndex = function() {
                return this
            }, e.prototype.isIndexed = function() {
                return !0
            }, e.prototype.equals = function(e) {
                if (e === this) return !0;
                if (e.isLeafNode()) {
                    var t = e;
                    return this.value_ === t.value_ && this.priorityNode_.equals(t.priorityNode_)
                }
                return !1
            }, e.VALUE_TYPE_ORDER = ["object", "boolean", "number", "string"], e
        }();
    t.LeafNode = s
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e, t, n, r, i) {
            void 0 === i && (i = null), this.isReverse_ = r, this.resultGenerator_ = i, this.nodeStack_ = [];
            for (var o = 1; !e.isEmpty();)
                if (e = e, o = t ? n(e.key, t) : 1, r && (o *= -1), o < 0) e = this.isReverse_ ? e.left : e.right;
                else {
                    if (0 === o) {
                        this.nodeStack_.push(e);
                        break
                    }
                    this.nodeStack_.push(e), e = this.isReverse_ ? e.right : e.left
                }
        }
        return e.prototype.getNext = function() {
            if (0 === this.nodeStack_.length) return null;
            var e, t = this.nodeStack_.pop();
            if (e = this.resultGenerator_ ? this.resultGenerator_(t.key, t.value) : {
                    key: t.key,
                    value: t.value
                }, this.isReverse_)
                for (t = t.left; !t.isEmpty();) this.nodeStack_.push(t), t = t.right;
            else
                for (t = t.right; !t.isEmpty();) this.nodeStack_.push(t), t = t.left;
            return e
        }, e.prototype.hasNext = function() {
            return this.nodeStack_.length > 0
        }, e.prototype.peek = function() {
            if (0 === this.nodeStack_.length) return null;
            var e = this.nodeStack_[this.nodeStack_.length - 1];
            return this.resultGenerator_ ? this.resultGenerator_(e.key, e.value) : {
                key: e.key,
                value: e.value
            }
        }, e
    }();
    t.SortedMapIterator = r;
    var i = function() {
        function e(t, n, r, i, o) {
            this.key = t, this.value = n, this.color = null != r ? r : e.RED, this.left = null != i ? i : a.EMPTY_NODE, this.right = null != o ? o : a.EMPTY_NODE
        }
        return e.prototype.copy = function(t, n, r, i, o) {
            return new e(null != t ? t : this.key, null != n ? n : this.value, null != r ? r : this.color, null != i ? i : this.left, null != o ? o : this.right)
        }, e.prototype.count = function() {
            return this.left.count() + 1 + this.right.count()
        }, e.prototype.isEmpty = function() {
            return !1
        }, e.prototype.inorderTraversal = function(e) {
            return this.left.inorderTraversal(e) || e(this.key, this.value) || this.right.inorderTraversal(e)
        }, e.prototype.reverseTraversal = function(e) {
            return this.right.reverseTraversal(e) || e(this.key, this.value) || this.left.reverseTraversal(e)
        }, e.prototype.min_ = function() {
            return this.left.isEmpty() ? this : this.left.min_()
        }, e.prototype.minKey = function() {
            return this.min_().key
        }, e.prototype.maxKey = function() {
            return this.right.isEmpty() ? this.key : this.right.maxKey()
        }, e.prototype.insert = function(e, t, n) {
            var r, i;
            return i = this, r = n(e, i.key), (i = r < 0 ? i.copy(null, null, null, i.left.insert(e, t, n), null) : 0 === r ? i.copy(null, t, null, null, null) : i.copy(null, null, null, null, i.right.insert(e, t, n))).fixUp_()
        }, e.prototype.removeMin_ = function() {
            if (this.left.isEmpty()) return a.EMPTY_NODE;
            var e = this;
            return e.left.isRed_() || e.left.left.isRed_() || (e = e.moveRedLeft_()), (e = e.copy(null, null, null, e.left.removeMin_(), null)).fixUp_()
        }, e.prototype.remove = function(e, t) {
            var n, r;
            if (n = this, t(e, n.key) < 0) n.left.isEmpty() || n.left.isRed_() || n.left.left.isRed_() || (n = n.moveRedLeft_()), n = n.copy(null, null, null, n.left.remove(e, t), null);
            else {
                if (n.left.isRed_() && (n = n.rotateRight_()), n.right.isEmpty() || n.right.isRed_() || n.right.left.isRed_() || (n = n.moveRedRight_()), 0 === t(e, n.key)) {
                    if (n.right.isEmpty()) return a.EMPTY_NODE;
                    r = n.right.min_(), n = n.copy(r.key, r.value, null, null, n.right.removeMin_())
                }
                n = n.copy(null, null, null, null, n.right.remove(e, t))
            }
            return n.fixUp_()
        }, e.prototype.isRed_ = function() {
            return this.color
        }, e.prototype.fixUp_ = function() {
            var e = this;
            return e.right.isRed_() && !e.left.isRed_() && (e = e.rotateLeft_()), e.left.isRed_() && e.left.left.isRed_() && (e = e.rotateRight_()), e.left.isRed_() && e.right.isRed_() && (e = e.colorFlip_()), e
        }, e.prototype.moveRedLeft_ = function() {
            var e = this.colorFlip_();
            return e.right.left.isRed_() && (e = (e = (e = e.copy(null, null, null, null, e.right.rotateRight_())).rotateLeft_()).colorFlip_()), e
        }, e.prototype.moveRedRight_ = function() {
            var e = this.colorFlip_();
            return e.left.left.isRed_() && (e = (e = e.rotateRight_()).colorFlip_()), e
        }, e.prototype.rotateLeft_ = function() {
            var t = this.copy(null, null, e.RED, null, this.right.left);
            return this.right.copy(null, null, this.color, t, null)
        }, e.prototype.rotateRight_ = function() {
            var t = this.copy(null, null, e.RED, this.left.right, null);
            return this.left.copy(null, null, this.color, null, t)
        }, e.prototype.colorFlip_ = function() {
            var e = this.left.copy(null, null, !this.left.color, null, null),
                t = this.right.copy(null, null, !this.right.color, null, null);
            return this.copy(null, null, !this.color, e, t)
        }, e.prototype.checkMaxDepth_ = function() {
            var e = this.check_();
            return Math.pow(2, e) <= this.count() + 1
        }, e.prototype.check_ = function() {
            var e;
            if (this.isRed_() && this.left.isRed_()) throw new Error("Red node has red child(" + this.key + "," + this.value + ")");
            if (this.right.isRed_()) throw new Error("Right child of (" + this.key + "," + this.value + ") is red");
            if ((e = this.left.check_()) !== this.right.check_()) throw new Error("Black depths differ");
            return e + (this.isRed_() ? 0 : 1)
        }, e.RED = !0, e.BLACK = !1, e
    }();
    t.LLRBNode = i;
    var o = function() {
        function e() {}
        return e.prototype.copy = function(e, t, n, r, i) {
            return this
        }, e.prototype.insert = function(e, t, n) {
            return new i(e, t, null)
        }, e.prototype.remove = function(e, t) {
            return this
        }, e.prototype.count = function() {
            return 0
        }, e.prototype.isEmpty = function() {
            return !0
        }, e.prototype.inorderTraversal = function(e) {
            return !1
        }, e.prototype.reverseTraversal = function(e) {
            return !1
        }, e.prototype.minKey = function() {
            return null
        }, e.prototype.maxKey = function() {
            return null
        }, e.prototype.check_ = function() {
            return 0
        }, e.prototype.isRed_ = function() {
            return !1
        }, e
    }();
    t.LLRBEmptyNode = o;
    var a = function() {
        function e(t, n) {
            void 0 === n && (n = e.EMPTY_NODE), this.comparator_ = t, this.root_ = n
        }
        return e.prototype.insert = function(t, n) {
            return new e(this.comparator_, this.root_.insert(t, n, this.comparator_).copy(null, null, i.BLACK, null, null))
        }, e.prototype.remove = function(t) {
            return new e(this.comparator_, this.root_.remove(t, this.comparator_).copy(null, null, i.BLACK, null, null))
        }, e.prototype.get = function(e) {
            for (var t, n = this.root_; !n.isEmpty();) {
                if (0 === (t = this.comparator_(e, n.key))) return n.value;
                t < 0 ? n = n.left : t > 0 && (n = n.right)
            }
            return null
        }, e.prototype.getPredecessorKey = function(e) {
            for (var t, n = this.root_, r = null; !n.isEmpty();) {
                if (0 === (t = this.comparator_(e, n.key))) {
                    if (n.left.isEmpty()) return r ? r.key : null;
                    for (n = n.left; !n.right.isEmpty();) n = n.right;
                    return n.key
                }
                t < 0 ? n = n.left : t > 0 && (r = n, n = n.right)
            }
            throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")
        }, e.prototype.isEmpty = function() {
            return this.root_.isEmpty()
        }, e.prototype.count = function() {
            return this.root_.count()
        }, e.prototype.minKey = function() {
            return this.root_.minKey()
        }, e.prototype.maxKey = function() {
            return this.root_.maxKey()
        }, e.prototype.inorderTraversal = function(e) {
            return this.root_.inorderTraversal(e)
        }, e.prototype.reverseTraversal = function(e) {
            return this.root_.reverseTraversal(e)
        }, e.prototype.getIterator = function(e) {
            return new r(this.root_, null, this.comparator_, !1, e)
        }, e.prototype.getIteratorFrom = function(e, t) {
            return new r(this.root_, e, this.comparator_, !1, t)
        }, e.prototype.getReverseIteratorFrom = function(e, t) {
            return new r(this.root_, e, this.comparator_, !0, t)
        }, e.prototype.getReverseIterator = function(e) {
            return new r(this.root_, null, this.comparator_, !0, e)
        }, e.EMPTY_NODE = new o, e
    }();
    t.SortedMap = a
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(145),
        i = n(80),
        o = n(8),
        a = n(146),
        s = n(248),
        u = n(259),
        c = n(0),
        l = n(3),
        h = n(0),
        f = n(260),
        p = n(117),
        d = n(262),
        v = n(151),
        _ = n(263),
        y = n(152),
        g = n(268),
        m = n(134),
        b = function() {
            function e(e, t, n) {
                var r = this;
                this.repoInfo_ = e, this.app = n, this.dataUpdateCount = 0, this.statsListener_ = null, this.eventQueue_ = new _.EventQueue, this.nextWriteId_ = 1, this.interceptServerDataCallback_ = null, this.onDisconnect_ = new a.SparseSnapshotTree, this.persistentConnection_ = null;
                var i = new f.AuthTokenProvider(n);
                if (this.stats_ = p.StatsManager.getCollection(e), t || l.beingCrawled()) this.server_ = new g.ReadonlyRestClient(this.repoInfo_, this.onDataUpdate_.bind(this), i), setTimeout(this.onConnectStatus_.bind(this, !0), 0);
                else {
                    var o = n.options.databaseAuthVariableOverride;
                    if (void 0 !== o && null !== o) {
                        if ("object" != typeof o) throw new Error("Only objects are supported for option databaseAuthVariableOverride");
                        try {
                            c.stringify(o)
                        } catch (e) {
                            throw new Error("Invalid authOverride provided: " + e)
                        }
                    }
                    this.persistentConnection_ = new y.PersistentConnection(this.repoInfo_, this.onDataUpdate_.bind(this), this.onConnectStatus_.bind(this), this.onServerInfoUpdate_.bind(this), i, o), this.server_ = this.persistentConnection_
                }
                i.addTokenChangeListener(function(e) {
                    r.server_.refreshAuthToken(e)
                }), this.statsReporter_ = p.StatsManager.getOrCreateReporter(e, function() {
                    return new d.StatsReporter(r.stats_, r.server_)
                }), this.transactions_init_(), this.infoData_ = new u.SnapshotHolder, this.infoSyncTree_ = new s.SyncTree({
                    startListening: function(e, t, n, i) {
                        var o = [],
                            a = r.infoData_.getNode(e.path);
                        return a.isEmpty() || (o = r.infoSyncTree_.applyServerOverwrite(e.path, a), setTimeout(function() {
                            i("ok")
                        }, 0)), o
                    },
                    stopListening: function() {}
                }), this.updateInfo_("connected", !1), this.serverSyncTree_ = new s.SyncTree({
                    startListening: function(e, t, n, i) {
                        return r.server_.listen(e, n, t, function(t, n) {
                            var o = i(t, n);
                            r.eventQueue_.raiseEventsForChangedPath(e.path, o)
                        }), []
                    },
                    stopListening: function(e, t) {
                        r.server_.unlisten(e, t)
                    }
                })
            }
            return e.prototype.toString = function() {
                return (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host
            }, e.prototype.name = function() {
                return this.repoInfo_.namespace
            }, e.prototype.serverTime = function() {
                var e = this.infoData_.getNode(new o.Path(".info/serverTimeOffset")).val() || 0;
                return (new Date).getTime() + e
            }, e.prototype.generateServerValues = function() {
                return r.generateWithValues({
                    timestamp: this.serverTime()
                })
            }, e.prototype.onDataUpdate_ = function(e, t, n, r) {
                this.dataUpdateCount++;
                var a = new o.Path(e);
                t = this.interceptServerDataCallback_ ? this.interceptServerDataCallback_(e, t) : t;
                var s = [];
                if (r)
                    if (n) {
                        var u = h.map(t, function(e) {
                            return i.nodeFromJSON(e)
                        });
                        s = this.serverSyncTree_.applyTaggedQueryMerge(a, u, r)
                    } else {
                        var c = i.nodeFromJSON(t);
                        s = this.serverSyncTree_.applyTaggedQueryOverwrite(a, c, r)
                    }
                else if (n) {
                    var l = h.map(t, function(e) {
                        return i.nodeFromJSON(e)
                    });
                    s = this.serverSyncTree_.applyServerMerge(a, l)
                } else {
                    var f = i.nodeFromJSON(t);
                    s = this.serverSyncTree_.applyServerOverwrite(a, f)
                }
                var p = a;
                s.length > 0 && (p = this.rerunTransactions_(a)), this.eventQueue_.raiseEventsForChangedPath(p, s)
            }, e.prototype.interceptServerData_ = function(e) {
                this.interceptServerDataCallback_ = e
            }, e.prototype.onConnectStatus_ = function(e) {
                this.updateInfo_("connected", e), !1 === e && this.runOnDisconnectEvents_()
            }, e.prototype.onServerInfoUpdate_ = function(e) {
                var t = this;
                l.each(e, function(e, n) {
                    t.updateInfo_(n, e)
                })
            }, e.prototype.updateInfo_ = function(e, t) {
                var n = new o.Path("/.info/" + e),
                    r = i.nodeFromJSON(t);
                this.infoData_.updateSnapshot(n, r);
                var a = this.infoSyncTree_.applyServerOverwrite(n, r);
                this.eventQueue_.raiseEventsForChangedPath(n, a)
            }, e.prototype.getNextWriteId_ = function() {
                return this.nextWriteId_++
            }, e.prototype.setWithPriority = function(e, t, n, o) {
                var a = this;
                this.log_("set", {
                    path: e.toString(),
                    value: t,
                    priority: n
                });
                var s = this.generateServerValues(),
                    u = i.nodeFromJSON(t, n),
                    c = r.resolveDeferredValueSnapshot(u, s),
                    h = this.getNextWriteId_(),
                    f = this.serverSyncTree_.applyUserOverwrite(e, c, h, !0);
                this.eventQueue_.queueEvents(f), this.server_.put(e.toString(), u.val(!0), function(t, n) {
                    var r = "ok" === t;
                    r || l.warn("set at " + e + " failed: " + t);
                    var i = a.serverSyncTree_.ackUserWrite(h, !r);
                    a.eventQueue_.raiseEventsForChangedPath(e, i), a.callOnCompleteCallback(o, t, n)
                });
                var p = this.abortTransactions_(e);
                this.rerunTransactions_(p), this.eventQueue_.raiseEventsForChangedPath(p, [])
            }, e.prototype.update = function(e, t, n) {
                var o = this;
                this.log_("update", {
                    path: e.toString(),
                    value: t
                });
                var a = !0,
                    s = this.generateServerValues(),
                    u = {};
                if (h.forEach(t, function(e, t) {
                        a = !1;
                        var n = i.nodeFromJSON(t);
                        u[e] = r.resolveDeferredValueSnapshot(n, s)
                    }), a) l.log("update() called with empty data.  Don't do anything."), this.callOnCompleteCallback(n, "ok");
                else {
                    var c = this.getNextWriteId_(),
                        f = this.serverSyncTree_.applyUserMerge(e, u, c);
                    this.eventQueue_.queueEvents(f), this.server_.merge(e.toString(), t, function(t, r) {
                        var i = "ok" === t;
                        i || l.warn("update at " + e + " failed: " + t);
                        var a = o.serverSyncTree_.ackUserWrite(c, !i),
                            s = a.length > 0 ? o.rerunTransactions_(e) : e;
                        o.eventQueue_.raiseEventsForChangedPath(s, a), o.callOnCompleteCallback(n, t, r)
                    }), h.forEach(t, function(t) {
                        var n = o.abortTransactions_(e.child(t));
                        o.rerunTransactions_(n)
                    }), this.eventQueue_.raiseEventsForChangedPath(e, [])
                }
            }, e.prototype.runOnDisconnectEvents_ = function() {
                var e = this;
                this.log_("onDisconnectEvents");
                var t = this.generateServerValues(),
                    n = [];
                r.resolveDeferredValueTree(this.onDisconnect_, t).forEachTree(o.Path.Empty, function(t, r) {
                    n = n.concat(e.serverSyncTree_.applyServerOverwrite(t, r));
                    var i = e.abortTransactions_(t);
                    e.rerunTransactions_(i)
                }), this.onDisconnect_ = new a.SparseSnapshotTree, this.eventQueue_.raiseEventsForChangedPath(o.Path.Empty, n)
            }, e.prototype.onDisconnectCancel = function(e, t) {
                var n = this;
                this.server_.onDisconnectCancel(e.toString(), function(r, i) {
                    "ok" === r && n.onDisconnect_.forget(e), n.callOnCompleteCallback(t, r, i)
                })
            }, e.prototype.onDisconnectSet = function(e, t, n) {
                var r = this,
                    o = i.nodeFromJSON(t);
                this.server_.onDisconnectPut(e.toString(), o.val(!0), function(t, i) {
                    "ok" === t && r.onDisconnect_.remember(e, o), r.callOnCompleteCallback(n, t, i)
                })
            }, e.prototype.onDisconnectSetWithPriority = function(e, t, n, r) {
                var o = this,
                    a = i.nodeFromJSON(t, n);
                this.server_.onDisconnectPut(e.toString(), a.val(!0), function(t, n) {
                    "ok" === t && o.onDisconnect_.remember(e, a), o.callOnCompleteCallback(r, t, n)
                })
            }, e.prototype.onDisconnectUpdate = function(e, t, n) {
                var r = this;
                if (h.isEmpty(t)) return l.log("onDisconnect().update() called with empty data.  Don't do anything."), void this.callOnCompleteCallback(n, "ok");
                this.server_.onDisconnectMerge(e.toString(), t, function(o, a) {
                    "ok" === o && h.forEach(t, function(t, n) {
                        var o = i.nodeFromJSON(n);
                        r.onDisconnect_.remember(e.child(t), o)
                    }), r.callOnCompleteCallback(n, o, a)
                })
            }, e.prototype.addEventCallbackForQuery = function(e, t) {
                var n;
                n = ".info" === e.path.getFront() ? this.infoSyncTree_.addEventRegistration(e, t) : this.serverSyncTree_.addEventRegistration(e, t), this.eventQueue_.raiseEventsAtPath(e.path, n)
            }, e.prototype.removeEventCallbackForQuery = function(e, t) {
                var n;
                n = ".info" === e.path.getFront() ? this.infoSyncTree_.removeEventRegistration(e, t) : this.serverSyncTree_.removeEventRegistration(e, t), this.eventQueue_.raiseEventsAtPath(e.path, n)
            }, e.prototype.interrupt = function() {
                this.persistentConnection_ && this.persistentConnection_.interrupt("repo_interrupt")
            }, e.prototype.resume = function() {
                this.persistentConnection_ && this.persistentConnection_.resume("repo_interrupt")
            }, e.prototype.stats = function(e) {
                if (void 0 === e && (e = !1), "undefined" != typeof console) {
                    var t;
                    e ? (this.statsListener_ || (this.statsListener_ = new v.StatsListener(this.stats_)), t = this.statsListener_.get()) : t = this.stats_.get();
                    var n = Object.keys(t).reduce(function(e, t) {
                        return Math.max(t.length, e)
                    }, 0);
                    h.forEach(t, function(e, t) {
                        for (var r = e.length; r < n + 2; r++) e += " "
                    })
                }
            }, e.prototype.statsIncrementCounter = function(e) {
                this.stats_.incrementCounter(e), this.statsReporter_.includeStat(e)
            }, e.prototype.log_ = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var n = "";
                this.persistentConnection_ && (n = this.persistentConnection_.id + ":"), l.log.apply(void 0, [n].concat(e))
            }, e.prototype.callOnCompleteCallback = function(e, t, n) {
                e && l.exceptionGuard(function() {
                    if ("ok" == t) e(null);
                    else {
                        var r = (t || "error").toUpperCase(),
                            i = r;
                        n && (i += ": " + n);
                        var o = new Error(i);
                        o.code = r, e(o)
                    }
                })
            }, Object.defineProperty(e.prototype, "database", {
                get: function() {
                    return this.__database || (this.__database = new m.Database(this))
                },
                enumerable: !0,
                configurable: !0
            }), e
        }();
    t.Repo = b
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e, t, n) {
            this.node_ = e, this.fullyInitialized_ = t, this.filtered_ = n
        }
        return e.prototype.isFullyInitialized = function() {
            return this.fullyInitialized_
        }, e.prototype.isFiltered = function() {
            return this.filtered_
        }, e.prototype.isCompleteForPath = function(e) {
            if (e.isEmpty()) return this.isFullyInitialized() && !this.filtered_;
            var t = e.getFront();
            return this.isCompleteForChild(t)
        }, e.prototype.isCompleteForChild = function(e) {
            return this.isFullyInitialized() && !this.filtered_ || this.node_.hasChild(e)
        }, e.prototype.getNode = function() {
            return this.node_
        }, e
    }();
    t.CacheNode = r
}, function(e, t, n) {
    "use strict";
    n.d(t, "f", function() {
        return r
    }), n.d(t, "g", function() {
        return i
    }), n.d(t, "a", function() {
        return o
    }), n.d(t, "b", function() {
        return a
    }), n.d(t, "c", function() {
        return s
    }), n.d(t, "d", function() {
        return u
    }), n.d(t, "e", function() {
        return c
    }), n.d(t, "h", function() {
        return l
    });
    var r = "https://firebasestorage.googleapis.com",
        i = "https://firebasestorage.googleapis.com",
        o = "/v0",
        a = "/v0",
        s = "storageBucket",
        u = 12e4,
        c = 6e4,
        l = -9007199254740991
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return i
    });
    var r = n(37),
        i = function() {
            function e(e, t) {
                this.bucket = e, this.path_ = t
            }
            return Object.defineProperty(e.prototype, "path", {
                get: function() {
                    return this.path_
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.fullServerUrl = function() {
                var e = encodeURIComponent;
                return "/b/" + e(this.bucket) + "/o/" + e(this.path)
            }, e.prototype.bucketOnlyServerUrl = function() {
                return "/b/" + encodeURIComponent(this.bucket) + "/o"
            }, e.makeFromBucketSpec = function(t) {
                var n;
                try {
                    n = e.makeFromUrl(t)
                } catch (n) {
                    return new e(t, "")
                }
                if ("" === n.path) return n;
                throw r.h(t)
            }, e.makeFromUrl = function(t) {
                for (var n = null, i = [{
                        regex: new RegExp("^gs://([A-Za-z0-9.\\-]+)(/(.*))?$", "i"),
                        indices: {
                            bucket: 1,
                            path: 3
                        },
                        postModify: function(e) {
                            "/" === e.path.charAt(e.path.length - 1) && (e.path_ = e.path_.slice(0, -1))
                        }
                    }, {
                        regex: new RegExp("^https?://firebasestorage\\.googleapis\\.com/v[A-Za-z0-9_]+/b/([A-Za-z0-9.\\-]+)/o(/([^?#]*).*)?$", "i"),
                        indices: {
                            bucket: 1,
                            path: 3
                        },
                        postModify: function(e) {
                            e.path_ = decodeURIComponent(e.path)
                        }
                    }], o = 0; o < i.length; o++) {
                    var a = i[o],
                        s = a.regex.exec(t);
                    if (s) {
                        var u = s[a.indices.bucket],
                            c = s[a.indices.path];
                        c || (c = ""), n = new e(u, c), a.postModify(n);
                        break
                    }
                }
                if (null == n) throw r.k(t);
                return n
            }, e
        }()
}, function(e, t, n) {
    var r = function() {
            return this
        }() || Function("return this")(),
        i = r.regeneratorRuntime && Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime") >= 0,
        o = i && r.regeneratorRuntime;
    if (r.regeneratorRuntime = void 0, e.exports = n(96), i) r.regeneratorRuntime = o;
    else try {
        delete r.regeneratorRuntime
    } catch (e) {
        r.regeneratorRuntime = void 0
    }
}, function(e, t) {
    ! function(t) {
        "use strict";

        function n(e, t, n, o) {
            var a = t && t.prototype instanceof i ? t : i,
                s = Object.create(a.prototype),
                u = new f(o || []);
            return s._invoke = function(e, t, n) {
                var i = S;
                return function(o, a) {
                    if (i === N) throw new Error("Generator is already running");
                    if (i === P) {
                        if ("throw" === o) throw a;
                        return d()
                    }
                    for (n.method = o, n.arg = a;;) {
                        var s = n.delegate;
                        if (s) {
                            var u = c(s, n);
                            if (u) {
                                if (u === O) continue;
                                return u
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if (i === S) throw i = P, n.arg;
                            n.dispatchException(n.arg)
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        i = N;
                        var l = r(e, t, n);
                        if ("normal" === l.type) {
                            if (i = n.done ? P : C, l.arg === O) continue;
                            return {
                                value: l.arg,
                                done: n.done
                            }
                        }
                        "throw" === l.type && (i = P, n.method = "throw", n.arg = l.arg)
                    }
                }
            }(e, n, u), s
        }

        function r(e, t, n) {
            try {
                return {
                    type: "normal",
                    arg: e.call(t, n)
                }
            } catch (e) {
                return {
                    type: "throw",
                    arg: e
                }
            }
        }

        function i() {}

        function o() {}

        function a() {}

        function s(e) {
            ["next", "throw", "return"].forEach(function(t) {
                e[t] = function(e) {
                    return this._invoke(t, e)
                }
            })
        }

        function u(e) {
            function t(n, i, o, a) {
                var s = r(e[n], e, i);
                if ("throw" !== s.type) {
                    var u = s.arg,
                        c = u.value;
                    return c && "object" == typeof c && y.call(c, "__await") ? Promise.resolve(c.__await).then(function(e) {
                        t("next", e, o, a)
                    }, function(e) {
                        t("throw", e, o, a)
                    }) : Promise.resolve(c).then(function(e) {
                        u.value = e, o(u)
                    }, a)
                }
                a(s.arg)
            }
            var n;
            this._invoke = function(e, r) {
                function i() {
                    return new Promise(function(n, i) {
                        t(e, r, n, i)
                    })
                }
                return n = n ? n.then(i, i) : i()
            }
        }

        function c(e, t) {
            var n = e.iterator[t.method];
            if (n === v) {
                if (t.delegate = null, "throw" === t.method) {
                    if (e.iterator.return && (t.method = "return", t.arg = v, c(e, t), "throw" === t.method)) return O;
                    t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return O
            }
            var i = r(n, e.iterator, t.arg);
            if ("throw" === i.type) return t.method = "throw", t.arg = i.arg, t.delegate = null, O;
            var o = i.arg;
            return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = v), t.delegate = null, O) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, O)
        }

        function l(e) {
            var t = {
                tryLoc: e[0]
            };
            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
        }

        function h(e) {
            var t = e.completion || {};
            t.type = "normal", delete t.arg, e.completion = t
        }

        function f(e) {
            this.tryEntries = [{
                tryLoc: "root"
            }], e.forEach(l, this), this.reset(!0)
        }

        function p(e) {
            if (e) {
                var t = e[m];
                if (t) return t.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var n = -1,
                        r = function t() {
                            for (; ++n < e.length;)
                                if (y.call(e, n)) return t.value = e[n], t.done = !1, t;
                            return t.value = v, t.done = !0, t
                        };
                    return r.next = r
                }
            }
            return {
                next: d
            }
        }

        function d() {
            return {
                value: v,
                done: !0
            }
        }
        var v, _ = Object.prototype,
            y = _.hasOwnProperty,
            g = "function" == typeof Symbol ? Symbol : {},
            m = g.iterator || "@@iterator",
            b = g.asyncIterator || "@@asyncIterator",
            E = g.toStringTag || "@@toStringTag",
            w = "object" == typeof e,
            T = t.regeneratorRuntime;
        if (T) w && (e.exports = T);
        else {
            (T = t.regeneratorRuntime = w ? e.exports : {}).wrap = n;
            var S = "suspendedStart",
                C = "suspendedYield",
                N = "executing",
                P = "completed",
                O = {},
                I = {};
            I[m] = function() {
                return this
            };
            var A = Object.getPrototypeOf,
                R = A && A(A(p([])));
            R && R !== _ && y.call(R, m) && (I = R);
            var k = a.prototype = i.prototype = Object.create(I);
            o.prototype = k.constructor = a, a.constructor = o, a[E] = o.displayName = "GeneratorFunction", T.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === o || "GeneratorFunction" === (t.displayName || t.name))
            }, T.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, a) : (e.__proto__ = a, E in e || (e[E] = "GeneratorFunction")), e.prototype = Object.create(k), e
            }, T.awrap = function(e) {
                return {
                    __await: e
                }
            }, s(u.prototype), u.prototype[b] = function() {
                return this
            }, T.AsyncIterator = u, T.async = function(e, t, r, i) {
                var o = new u(n(e, t, r, i));
                return T.isGeneratorFunction(t) ? o : o.next().then(function(e) {
                    return e.done ? e.value : o.next()
                })
            }, s(k), k[E] = "Generator", k[m] = function() {
                return this
            }, k.toString = function() {
                return "[object Generator]"
            }, T.keys = function(e) {
                var t = [];
                for (var n in e) t.push(n);
                return t.reverse(),
                    function n() {
                        for (; t.length;) {
                            var r = t.pop();
                            if (r in e) return n.value = r, n.done = !1, n
                        }
                        return n.done = !0, n
                    }
            }, T.values = p, f.prototype = {
                constructor: f,
                reset: function(e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = v, this.done = !1, this.delegate = null, this.method = "next", this.arg = v, this.tryEntries.forEach(h), !e)
                        for (var t in this) "t" === t.charAt(0) && y.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = v)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                },
                dispatchException: function(e) {
                    function t(t, r) {
                        return o.type = "throw", o.arg = e, n.next = t, r && (n.method = "next", n.arg = v), !!r
                    }
                    if (this.done) throw e;
                    for (var n = this, r = this.tryEntries.length - 1; r >= 0; --r) {
                        var i = this.tryEntries[r],
                            o = i.completion;
                        if ("root" === i.tryLoc) return t("end");
                        if (i.tryLoc <= this.prev) {
                            var a = y.call(i, "catchLoc"),
                                s = y.call(i, "finallyLoc");
                            if (a && s) {
                                if (this.prev < i.catchLoc) return t(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return t(i.finallyLoc)
                            } else if (a) {
                                if (this.prev < i.catchLoc) return t(i.catchLoc, !0)
                            } else {
                                if (!s) throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return t(i.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var r = this.tryEntries[n];
                        if (r.tryLoc <= this.prev && y.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                            var i = r;
                            break
                        }
                    }
                    i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                    var o = i ? i.completion : {};
                    return o.type = e, o.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, O) : this.complete(o)
                },
                complete: function(e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), O
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), h(n), O
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var i = r.arg;
                                h(n)
                            }
                            return i
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, t, n) {
                    return this.delegate = {
                        iterator: p(e),
                        resultName: t,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = v), O
                }
            }
        }
    }(function() {
        return this
    }() || Function("return this")())
}, function(e, t, n) {
    n(62), n(38), n(41), n(98), n(104), n(105), e.exports = n(4).Promise
}, function(e, t, n) {
    "use strict";
    var r, i, o, a, s = n(33),
        u = n(2),
        c = n(14),
        l = n(36),
        h = n(11),
        f = n(10),
        p = n(19),
        d = n(71),
        v = n(50),
        _ = n(73),
        y = n(74).set,
        g = n(102)(),
        m = n(51),
        b = n(75),
        E = n(76),
        w = u.TypeError,
        T = u.process,
        S = u.Promise,
        C = "process" == l(T),
        N = function() {},
        P = i = m.f,
        O = !! function() {
            try {
                var e = S.resolve(1),
                    t = (e.constructor = {})[n(1)("species")] = function(e) {
                        e(N, N)
                    };
                return (C || "function" == typeof PromiseRejectionEvent) && e.then(N) instanceof t
            } catch (e) {}
        }(),
        I = function(e) {
            var t;
            return !(!f(e) || "function" != typeof(t = e.then)) && t
        },
        A = function(e, t) {
            if (!e._n) {
                e._n = !0;
                var n = e._c;
                g(function() {
                    for (var r = e._v, i = 1 == e._s, o = 0, a = function(t) {
                            var n, o, a = i ? t.ok : t.fail,
                                s = t.resolve,
                                u = t.reject,
                                c = t.domain;
                            try {
                                a ? (i || (2 == e._h && D(e), e._h = 1), !0 === a ? n = r : (c && c.enter(), n = a(r), c && c.exit()), n === t.promise ? u(w("Promise-chain cycle")) : (o = I(n)) ? o.call(n, s, u) : s(n)) : u(r)
                            } catch (e) {
                                u(e)
                            }
                        }; n.length > o;) a(n[o++]);
                    e._c = [], e._n = !1, t && !e._h && R(e)
                })
            }
        },
        R = function(e) {
            y.call(u, function() {
                var t, n, r, i = e._v,
                    o = k(e);
                if (o && (t = b(function() {
                        C ? T.emit("unhandledRejection", i, e) : (n = u.onunhandledrejection) ? n({
                            promise: e,
                            reason: i
                        }) : (r = u.console) && r.error && r.error("Unhandled promise rejection", i)
                    }), e._h = C || k(e) ? 2 : 1), e._a = void 0, o && t.e) throw t.v
            })
        },
        k = function(e) {
            if (1 == e._h) return !1;
            for (var t, n = e._a || e._c, r = 0; n.length > r;)
                if ((t = n[r++]).fail || !k(t.promise)) return !1;
            return !0
        },
        D = function(e) {
            y.call(u, function() {
                var t;
                C ? T.emit("rejectionHandled", e) : (t = u.onrejectionhandled) && t({
                    promise: e,
                    reason: e._v
                })
            })
        },
        L = function(e) {
            var t = this;
            t._d || (t._d = !0, (t = t._w || t)._v = e, t._s = 2, t._a || (t._a = t._c.slice()), A(t, !0))
        },
        x = function(e) {
            var t, n = this;
            if (!n._d) {
                n._d = !0, n = n._w || n;
                try {
                    if (n === e) throw w("Promise can't be resolved itself");
                    (t = I(e)) ? g(function() {
                        var r = {
                            _w: n,
                            _d: !1
                        };
                        try {
                            t.call(e, c(x, r, 1), c(L, r, 1))
                        } catch (e) {
                            L.call(r, e)
                        }
                    }): (n._v = e, n._s = 1, A(n, !1))
                } catch (e) {
                    L.call({
                        _w: n,
                        _d: !1
                    }, e)
                }
            }
        };
    O || (S = function(e) {
        d(this, S, "Promise", "_h"), p(e), r.call(this);
        try {
            e(c(x, this, 1), c(L, this, 1))
        } catch (e) {
            L.call(this, e)
        }
    }, (r = function(e) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
    }).prototype = n(77)(S.prototype, {
        then: function(e, t) {
            var n = P(_(this, S));
            return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = C ? T.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && A(this, !1), n.promise
        },
        catch: function(e) {
            return this.then(void 0, e)
        }
    }), o = function() {
        var e = new r;
        this.promise = e, this.resolve = c(x, e, 1), this.reject = c(L, e, 1)
    }, m.f = P = function(e) {
        return e === S || e === a ? new o(e) : i(e)
    }), h(h.G + h.W + h.F * !O, {
        Promise: S
    }), n(21)(S, "Promise"), n(84)("Promise"), a = n(4).Promise, h(h.S + h.F * !O, "Promise", {
        reject: function(e) {
            var t = P(this);
            return (0, t.reject)(e), t.promise
        }
    }), h(h.S + h.F * (s || !O), "Promise", {
        resolve: function(e) {
            return E(s && this === a ? S : this, e)
        }
    }), h(h.S + h.F * !(O && n(103)(function(e) {
        S.all(e).catch(N)
    })), "Promise", {
        all: function(e) {
            var t = this,
                n = P(t),
                r = n.resolve,
                i = n.reject,
                o = b(function() {
                    var n = [],
                        o = 0,
                        a = 1;
                    v(e, !1, function(e) {
                        var s = o++,
                            u = !1;
                        n.push(void 0), a++, t.resolve(e).then(function(e) {
                            u || (u = !0, n[s] = e, --a || r(n))
                        }, i)
                    }), --a || r(n)
                });
            return o.e && i(o.v), n.promise
        },
        race: function(e) {
            var t = this,
                n = P(t),
                r = n.reject,
                i = b(function() {
                    v(e, !1, function(e) {
                        t.resolve(e).then(n.resolve, r)
                    })
                });
            return i.e && r(i.v), n.promise
        }
    })
}, function(e, t, n) {
    var r = n(6);
    e.exports = function(e, t, n, i) {
        try {
            return i ? t(r(n)[0], n[1]) : t(n)
        } catch (t) {
            var o = e.return;
            throw void 0 !== o && r(o.call(e)), t
        }
    }
}, function(e, t, n) {
    var r = n(13),
        i = n(1)("iterator"),
        o = Array.prototype;
    e.exports = function(e) {
        return void 0 !== e && (r.Array === e || o[i] === e)
    }
}, function(e, t) {
    e.exports = function(e, t, n) {
        var r = void 0 === n;
        switch (t.length) {
            case 0:
                return r ? e() : e.call(n);
            case 1:
                return r ? e(t[0]) : e.call(n, t[0]);
            case 2:
                return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
            case 3:
                return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
            case 4:
                return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
        }
        return e.apply(n, t)
    }
}, function(e, t, n) {
    var r = n(2),
        i = n(74).set,
        o = r.MutationObserver || r.WebKitMutationObserver,
        a = r.process,
        s = r.Promise,
        u = "process" == n(17)(a);
    e.exports = function() {
        var e, t, n, c = function() {
            var r, i;
            for (u && (r = a.domain) && r.exit(); e;) {
                i = e.fn, e = e.next;
                try {
                    i()
                } catch (r) {
                    throw e ? n() : t = void 0, r
                }
            }
            t = void 0, r && r.enter()
        };
        if (u) n = function() {
            a.nextTick(c)
        };
        else if (o) {
            var l = !0,
                h = document.createTextNode("");
            new o(c).observe(h, {
                characterData: !0
            }), n = function() {
                h.data = l = !l
            }
        } else if (s && s.resolve) {
            var f = s.resolve();
            n = function() {
                f.then(c)
            }
        } else n = function() {
            i.call(r, c)
        };
        return function(r) {
            var i = {
                fn: r,
                next: void 0
            };
            t && (t.next = i), e || (e = i, n()), t = i
        }
    }
}, function(e, t, n) {
    var r = n(1)("iterator"),
        i = !1;
    try {
        var o = [7][r]();
        o.return = function() {
            i = !0
        }, Array.from(o, function() {
            throw 2
        })
    } catch (e) {}
    e.exports = function(e, t) {
        if (!t && !i) return !1;
        var n = !1;
        try {
            var o = [7],
                a = o[r]();
            a.next = function() {
                return {
                    done: n = !0
                }
            }, o[r] = function() {
                return a
            }, e(o)
        } catch (e) {}
        return n
    }
}, function(e, t, n) {
    "use strict";
    var r = n(11),
        i = n(4),
        o = n(2),
        a = n(73),
        s = n(76);
    r(r.P + r.R, "Promise", {
        finally: function(e) {
            var t = a(this, i.Promise || o.Promise),
                n = "function" == typeof e;
            return this.then(n ? function(n) {
                return s(t, e()).then(function() {
                    return n
                })
            } : e, n ? function(n) {
                return s(t, e()).then(function() {
                    throw n
                })
            } : e)
        }
    })
}, function(e, t, n) {
    "use strict";
    var r = n(11),
        i = n(51),
        o = n(75);
    r(r.S, "Promise", {
        try: function(e) {
            var t = i.f(this),
                n = o(e);
            return (n.e ? t.reject : t.resolve)(n.v), t.promise
        }
    })
}, function(e, t, n) {
    var r = n(29)("meta"),
        i = n(10),
        o = n(12),
        a = n(9).f,
        s = 0,
        u = Object.isExtensible || function() {
            return !0
        },
        c = !n(20)(function() {
            return u(Object.preventExtensions({}))
        }),
        l = function(e) {
            a(e, r, {
                value: {
                    i: "O" + ++s,
                    w: {}
                }
            })
        },
        h = e.exports = {
            KEY: r,
            NEED: !1,
            fastKey: function(e, t) {
                if (!i(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                if (!o(e, r)) {
                    if (!u(e)) return "F";
                    if (!t) return "E";
                    l(e)
                }
                return e[r].i
            },
            getWeak: function(e, t) {
                if (!o(e, r)) {
                    if (!u(e)) return !0;
                    if (!t) return !1;
                    l(e)
                }
                return e[r].w
            },
            onFreeze: function(e) {
                return c && h.NEED && u(e) && !o(e, r) && l(e), e
            }
        }
}, function(e, t, n) {
    var r = n(4),
        i = r.JSON || (r.JSON = {
            stringify: JSON.stringify
        });
    e.exports = function(e) {
        return i.stringify.apply(i, arguments)
    }
}, function(e, t) {
    t.f = Object.getOwnPropertySymbols
}, function(e, t, n) {
    t.f = n(1)
}, function(e, t, n) {
    var r = n(2),
        i = n(4),
        o = n(33),
        a = n(109),
        s = n(9).f;
    e.exports = function(e) {
        var t = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
        "_" == e.charAt(0) || e in t || s(t, e, {
            value: a.f(e)
        })
    }
}, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.CONSTANTS = {
        NODE_CLIENT: !1,
        NODE_ADMIN: !1,
        SDK_VERSION: "${JSCORE_VERSION}"
    }
}, function(e, t, n) {
    "use strict";
    var r = this && this.__extends || function() {
        var e = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        };
        return function(t, n) {
            function r() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
        }
    }();
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(137),
        o = n(244),
        a = n(3),
        s = n(245),
        u = n(138),
        c = n(91),
        l = n(8),
        h = n(269),
        f = n(52),
        p = n(0),
        d = n(0),
        v = n(149),
        _ = function(e) {
            function t(t, n) {
                if (!(t instanceof c.Repo)) throw new Error("new Reference() no longer supported - use app.database().");
                return e.call(this, t, n, h.QueryParams.DEFAULT, !1) || this
            }
            return r(t, e), t.prototype.getKey = function() {
                return p.validateArgCount("Reference.key", 0, 0, arguments.length), this.path.isEmpty() ? null : this.path.getBack()
            }, t.prototype.child = function(e) {
                return p.validateArgCount("Reference.child", 1, 1, arguments.length), "number" == typeof e ? e = String(e) : e instanceof l.Path || (null === this.path.getFront() ? f.validateRootPathString("Reference.child", 1, e, !1) : f.validatePathString("Reference.child", 1, e, !1)), new t(this.repo, this.path.child(e))
            }, t.prototype.getParent = function() {
                p.validateArgCount("Reference.parent", 0, 0, arguments.length);
                var e = this.path.parent();
                return null === e ? null : new t(this.repo, e)
            }, t.prototype.getRoot = function() {
                p.validateArgCount("Reference.root", 0, 0, arguments.length);
                for (var e = this; null !== e.getParent();) e = e.getParent();
                return e
            }, t.prototype.databaseProp = function() {
                return this.repo.database
            }, t.prototype.set = function(e, t) {
                p.validateArgCount("Reference.set", 1, 2, arguments.length), f.validateWritablePath("Reference.set", this.path), f.validateFirebaseDataArg("Reference.set", 1, e, this.path, !1), p.validateCallback("Reference.set", 2, t, !0);
                var n = new d.Deferred;
                return this.repo.setWithPriority(this.path, e, null, n.wrapCallback(t)), n.promise
            }, t.prototype.update = function(e, t) {
                if (p.validateArgCount("Reference.update", 1, 2, arguments.length), f.validateWritablePath("Reference.update", this.path), Array.isArray(e)) {
                    for (var n = {}, r = 0; r < e.length; ++r) n["" + r] = e[r];
                    e = n, a.warn("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")
                }
                f.validateFirebaseMergeDataArg("Reference.update", 1, e, this.path, !1), p.validateCallback("Reference.update", 2, t, !0);
                var i = new d.Deferred;
                return this.repo.update(this.path, e, i.wrapCallback(t)), i.promise
            }, t.prototype.setWithPriority = function(e, t, n) {
                if (p.validateArgCount("Reference.setWithPriority", 2, 3, arguments.length), f.validateWritablePath("Reference.setWithPriority", this.path), f.validateFirebaseDataArg("Reference.setWithPriority", 1, e, this.path, !1), f.validatePriority("Reference.setWithPriority", 2, t, !1), p.validateCallback("Reference.setWithPriority", 3, n, !0), ".length" === this.getKey() || ".keys" === this.getKey()) throw "Reference.setWithPriority failed: " + this.getKey() + " is a read-only object.";
                var r = new d.Deferred;
                return this.repo.setWithPriority(this.path, e, t, r.wrapCallback(n)), r.promise
            }, t.prototype.remove = function(e) {
                return p.validateArgCount("Reference.remove", 0, 1, arguments.length), f.validateWritablePath("Reference.remove", this.path), p.validateCallback("Reference.remove", 1, e, !0), this.set(null, e)
            }, t.prototype.transaction = function(e, t, n) {
                if (p.validateArgCount("Reference.transaction", 1, 3, arguments.length), f.validateWritablePath("Reference.transaction", this.path), p.validateCallback("Reference.transaction", 1, e, !1), p.validateCallback("Reference.transaction", 2, t, !0), f.validateBoolean("Reference.transaction", 3, n, !0), ".length" === this.getKey() || ".keys" === this.getKey()) throw "Reference.transaction failed: " + this.getKey() + " is a read-only object.";
                void 0 === n && (n = !0);
                var r = new d.Deferred;
                "function" == typeof t && r.promise.catch(function() {});
                return this.repo.startTransaction(this.path, e, function(e, n, i) {
                    e ? r.reject(e) : r.resolve(new o.TransactionResult(n, i)), "function" == typeof t && t(e, n, i)
                }, n), r.promise
            }, t.prototype.setPriority = function(e, t) {
                p.validateArgCount("Reference.setPriority", 1, 2, arguments.length), f.validateWritablePath("Reference.setPriority", this.path), f.validatePriority("Reference.setPriority", 1, e, !1), p.validateCallback("Reference.setPriority", 2, t, !0);
                var n = new d.Deferred;
                return this.repo.setWithPriority(this.path.child(".priority"), e, null, n.wrapCallback(t)), n.promise
            }, t.prototype.push = function(e, t) {
                p.validateArgCount("Reference.push", 0, 2, arguments.length), f.validateWritablePath("Reference.push", this.path), f.validateFirebaseDataArg("Reference.push", 1, e, this.path, !0), p.validateCallback("Reference.push", 2, t, !0);
                var n, r = this.repo.serverTime(),
                    i = s.nextPushId(r),
                    o = this.child(i),
                    a = this.child(i);
                return n = null != e ? o.set(e, t).then(function() {
                    return a
                }) : Promise.resolve(a), o.then = n.then.bind(n), o.catch = n.then.bind(n, void 0), "function" == typeof t && n.catch(function() {}), o
            }, t.prototype.onDisconnect = function() {
                return f.validateWritablePath("Reference.onDisconnect", this.path), new i.OnDisconnect(this.repo, this.path)
            }, Object.defineProperty(t.prototype, "database", {
                get: function() {
                    return this.databaseProp()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "key", {
                get: function() {
                    return this.getKey()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "parent", {
                get: function() {
                    return this.getParent()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "root", {
                get: function() {
                    return this.getRoot()
                },
                enumerable: !0,
                configurable: !0
            }), t
        }(u.Query);
    t.Reference = _, u.Query.__referenceConstructor = _, v.SyncPoint.__referenceConstructor = _
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(52),
        o = n(8),
        a = n(16),
        s = function() {
            function e(e, t, n) {
                this.node_ = e, this.ref_ = t, this.index_ = n
            }
            return e.prototype.val = function() {
                return r.validateArgCount("DataSnapshot.val", 0, 0, arguments.length), this.node_.val()
            }, e.prototype.exportVal = function() {
                return r.validateArgCount("DataSnapshot.exportVal", 0, 0, arguments.length), this.node_.val(!0)
            }, e.prototype.toJSON = function() {
                return r.validateArgCount("DataSnapshot.toJSON", 0, 1, arguments.length), this.exportVal()
            }, e.prototype.exists = function() {
                return r.validateArgCount("DataSnapshot.exists", 0, 0, arguments.length), !this.node_.isEmpty()
            }, e.prototype.child = function(t) {
                r.validateArgCount("DataSnapshot.child", 0, 1, arguments.length), t = String(t), i.validatePathString("DataSnapshot.child", 1, t, !1);
                var n = new o.Path(t),
                    s = this.ref_.child(n);
                return new e(this.node_.getChild(n), s, a.PRIORITY_INDEX)
            }, e.prototype.hasChild = function(e) {
                r.validateArgCount("DataSnapshot.hasChild", 1, 1, arguments.length), i.validatePathString("DataSnapshot.hasChild", 1, e, !1);
                var t = new o.Path(e);
                return !this.node_.getChild(t).isEmpty()
            }, e.prototype.getPriority = function() {
                return r.validateArgCount("DataSnapshot.getPriority", 0, 0, arguments.length), this.node_.getPriority().val()
            }, e.prototype.forEach = function(t) {
                var n = this;
                if (r.validateArgCount("DataSnapshot.forEach", 1, 1, arguments.length), r.validateCallback("DataSnapshot.forEach", 1, t, !1), this.node_.isLeafNode()) return !1;
                return !!this.node_.forEachChild(this.index_, function(r, i) {
                    return t(new e(i, n.ref_.child(r), a.PRIORITY_INDEX))
                })
            }, e.prototype.hasChildren = function() {
                return r.validateArgCount("DataSnapshot.hasChildren", 0, 0, arguments.length), !this.node_.isLeafNode() && !this.node_.isEmpty()
            }, Object.defineProperty(e.prototype, "key", {
                get: function() {
                    return this.ref_.getKey()
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.numChildren = function() {
                return r.validateArgCount("DataSnapshot.numChildren", 0, 0, arguments.length), this.node_.numChildren()
            }, e.prototype.getRef = function() {
                return r.validateArgCount("DataSnapshot.ref", 0, 0, arguments.length), this.ref_
            }, Object.defineProperty(e.prototype, "ref", {
                get: function() {
                    return this.getRef()
                },
                enumerable: !0,
                configurable: !0
            }), e
        }();
    t.DataSnapshot = s
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r, i = n(90),
        o = n(8),
        a = n(3),
        s = n(0),
        u = function() {
            return r || (r = new i.SortedMap(a.stringCompare)), r
        },
        c = function() {
            function e(e, t) {
                void 0 === t && (t = u()), this.value = e, this.children = t
            }
            return e.fromObject = function(t) {
                var n = e.Empty;
                return s.forEach(t, function(e, t) {
                    n = n.set(new o.Path(e), t)
                }), n
            }, e.prototype.isEmpty = function() {
                return null === this.value && this.children.isEmpty()
            }, e.prototype.findRootMostMatchingPathAndValue = function(e, t) {
                if (null != this.value && t(this.value)) return {
                    path: o.Path.Empty,
                    value: this.value
                };
                if (e.isEmpty()) return null;
                var n = e.getFront(),
                    r = this.children.get(n);
                if (null !== r) {
                    var i = r.findRootMostMatchingPathAndValue(e.popFront(), t);
                    if (null != i) {
                        return {
                            path: new o.Path(n).child(i.path),
                            value: i.value
                        }
                    }
                    return null
                }
                return null
            }, e.prototype.findRootMostValueAndPath = function(e) {
                return this.findRootMostMatchingPathAndValue(e, function() {
                    return !0
                })
            }, e.prototype.subtree = function(t) {
                if (t.isEmpty()) return this;
                var n = t.getFront(),
                    r = this.children.get(n);
                return null !== r ? r.subtree(t.popFront()) : e.Empty
            }, e.prototype.set = function(t, n) {
                if (t.isEmpty()) return new e(n, this.children);
                var r = t.getFront(),
                    i = (this.children.get(r) || e.Empty).set(t.popFront(), n),
                    o = this.children.insert(r, i);
                return new e(this.value, o)
            }, e.prototype.remove = function(t) {
                if (t.isEmpty()) return this.children.isEmpty() ? e.Empty : new e(null, this.children);
                var n = t.getFront(),
                    r = this.children.get(n);
                if (r) {
                    var i = r.remove(t.popFront()),
                        o = void 0;
                    return o = i.isEmpty() ? this.children.remove(n) : this.children.insert(n, i), null === this.value && o.isEmpty() ? e.Empty : new e(this.value, o)
                }
                return this
            }, e.prototype.get = function(e) {
                if (e.isEmpty()) return this.value;
                var t = e.getFront(),
                    n = this.children.get(t);
                return n ? n.get(e.popFront()) : null
            }, e.prototype.setTree = function(t, n) {
                if (t.isEmpty()) return n;
                var r = t.getFront(),
                    i = (this.children.get(r) || e.Empty).setTree(t.popFront(), n),
                    o = void 0;
                return o = i.isEmpty() ? this.children.remove(r) : this.children.insert(r, i), new e(this.value, o)
            }, e.prototype.fold = function(e) {
                return this.fold_(o.Path.Empty, e)
            }, e.prototype.fold_ = function(e, t) {
                var n = {};
                return this.children.inorderTraversal(function(r, i) {
                    n[r] = i.fold_(e.child(r), t)
                }), t(e, this.value, n)
            }, e.prototype.findOnPath = function(e, t) {
                return this.findOnPath_(e, o.Path.Empty, t)
            }, e.prototype.findOnPath_ = function(e, t, n) {
                var r = !!this.value && n(t, this.value);
                if (r) return r;
                if (e.isEmpty()) return null;
                var i = e.getFront(),
                    o = this.children.get(i);
                return o ? o.findOnPath_(e.popFront(), t.child(i), n) : null
            }, e.prototype.foreachOnPath = function(e, t) {
                return this.foreachOnPath_(e, o.Path.Empty, t)
            }, e.prototype.foreachOnPath_ = function(t, n, r) {
                if (t.isEmpty()) return this;
                this.value && r(n, this.value);
                var i = t.getFront(),
                    o = this.children.get(i);
                return o ? o.foreachOnPath_(t.popFront(), n.child(i), r) : e.Empty
            }, e.prototype.foreach = function(e) {
                this.foreach_(o.Path.Empty, e)
            }, e.prototype.foreach_ = function(e, t) {
                this.children.inorderTraversal(function(n, r) {
                    r.foreach_(e.child(n), t)
                }), this.value && t(e, this.value)
            }, e.prototype.foreachChild = function(e) {
                this.children.inorderTraversal(function(t, n) {
                    n.value && e(t, n.value)
                })
            }, e.Empty = new e(null), e
        }();
    t.ImmutableTree = c
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(60),
        o = n(18),
        a = n(16),
        s = function() {
            function e(e) {
                this.index_ = e
            }
            return e.prototype.updateChild = function(e, t, n, o, a, s) {
                r.assert(e.isIndexed(this.index_), "A node must be indexed if only a child is updated");
                var u = e.getImmediateChild(t);
                return u.getChild(o).equals(n.getChild(o)) && u.isEmpty() == n.isEmpty() ? e : (null != s && (n.isEmpty() ? e.hasChild(t) ? s.trackChildChange(i.Change.childRemovedChange(t, u)) : r.assert(e.isLeafNode(), "A child remove without an old child only makes sense on a leaf node") : u.isEmpty() ? s.trackChildChange(i.Change.childAddedChange(t, n)) : s.trackChildChange(i.Change.childChangedChange(t, n, u))), e.isLeafNode() && n.isEmpty() ? e : e.updateImmediateChild(t, n).withIndex(this.index_))
            }, e.prototype.updateFullNode = function(e, t, n) {
                return null != n && (e.isLeafNode() || e.forEachChild(a.PRIORITY_INDEX, function(e, r) {
                    t.hasChild(e) || n.trackChildChange(i.Change.childRemovedChange(e, r))
                }), t.isLeafNode() || t.forEachChild(a.PRIORITY_INDEX, function(t, r) {
                    if (e.hasChild(t)) {
                        var o = e.getImmediateChild(t);
                        o.equals(r) || n.trackChildChange(i.Change.childChangedChange(t, r, o))
                    } else n.trackChildChange(i.Change.childAddedChange(t, r))
                })), t.withIndex(this.index_)
            }, e.prototype.updatePriority = function(e, t) {
                return e.isEmpty() ? o.ChildrenNode.EMPTY_NODE : e.updatePriority(t)
            }, e.prototype.filtersNodes = function() {
                return !1
            }, e.prototype.getIndexedFilter = function() {
                return this
            }, e.prototype.getIndex = function() {
                return this.index_
            }, e
        }();
    t.IndexedFilter = s
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(261),
        i = function() {
            function e() {}
            return e.getCollection = function(e) {
                var t = e.toString();
                return this.collections_[t] || (this.collections_[t] = new r.StatsCollection), this.collections_[t]
            }, e.getOrCreateReporter = function(e, t) {
                var n = e.toString();
                return this.reporters_[n] || (this.reporters_[n] = t()), this.reporters_[n]
            }, e.collections_ = {}, e.reporters_ = {}, e
        }();
    t.StatsManager = i
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(91),
        o = n(3),
        a = n(135),
        s = n(52);
    n(271);
    var u, c = function() {
        function e() {
            this.repos_ = {}, this.useRestClient_ = !1
        }
        return e.getInstance = function() {
            return u || (u = new e), u
        }, e.prototype.interrupt = function() {
            for (var e in this.repos_)
                for (var t in this.repos_[e]) this.repos_[e][t].interrupt()
        }, e.prototype.resume = function() {
            for (var e in this.repos_)
                for (var t in this.repos_[e]) this.repos_[e][t].resume()
        }, e.prototype.databaseFromApp = function(e, t) {
            var n = t || e.options.databaseURL;
            void 0 === n && o.fatal("Can't determine Firebase Database URL.  Be sure to include databaseURL option when calling firebase.initializeApp().");
            var r = a.parseRepoInfo(n),
                i = r.repoInfo;
            s.validateUrl("Invalid Firebase Database URL", 1, r), r.path.isEmpty() || o.fatal("Database URL must point to the root of a Firebase Database (not including a child path).");
            return this.createRepo(i, e).database
        }, e.prototype.deleteRepo = function(e) {
            var t = r.safeGet(this.repos_, e.app.name);
            t && r.safeGet(t, e.repoInfo_.toURLString()) === e || o.fatal("Database " + e.app.name + "(" + e.repoInfo_ + ") has already been deleted."), e.interrupt(), delete t[e.repoInfo_.toURLString()]
        }, e.prototype.createRepo = function(e, t) {
            var n = r.safeGet(this.repos_, t.name);
            n || (n = {}, this.repos_[t.name] = n);
            var a = r.safeGet(n, e.toURLString());
            return a && o.fatal("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."), a = new i.Repo(e, this.useRestClient_, t), n[e.toURLString()] = a, a
        }, e.prototype.forceRestClient = function(e) {
            this.useRestClient_ = e
        }, e
    }();
    t.RepoManager = c
}, function(e, t, n) {
    "use strict";
    t.a = function(e) {
        return function(e) {
            var t = new Uint8Array(e);
            return window.btoa(String.fromCharCode.apply(null, t))
        }(e).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
    }
}, function(e, t, n) {
    "use strict";
    var r = new Uint8Array([4, 51, 148, 247, 223, 161, 235, 177, 220, 3, 162, 94, 21, 113, 219, 72, 211, 46, 237, 237, 178, 52, 219, 183, 71, 58, 12, 143, 196, 204, 225, 111, 60, 140, 132, 223, 171, 182, 102, 62, 242, 12, 212, 139, 254, 227, 249, 118, 47, 20, 28, 99, 8, 106, 111, 45, 177, 26, 149, 176, 206, 55, 192, 156, 110]),
        i = {
            userVisibleOnly: !0,
            applicationServerKey: r
        };
    t.a = {
        DEFAULT_PUBLIC_VAPID_KEY: r,
        SUBSCRIPTION_DETAILS: i,
        ENDPOINT: "https://fcm.googleapis.com"
    }
}, function(e, t, n) {
    "use strict";
    t.g = function(e, t, n) {
        for (var i = t.length, o = t.length, a = 0; a < t.length; a++)
            if (t[a].optional) {
                i = a;
                break
            } if (!(i <= n.length && n.length <= o)) throw r.g(i, o, e, n.length);
        for (a = 0; a < n.length; a++) try {
            t[a].validator(n[a])
        } catch (t) {
            throw t instanceof Error ? r.f(a, e, t.message) : r.f(a, e, t)
        }
    }, t.e = function(e, t) {
        function n(e) {
            if (!o.j(e)) throw "Expected string."
        }
        var r;
        return r = e ? function(e, t) {
            return function(n) {
                e(n), t(n)
            }
        }(n, e) : n, new a(r, t)
    }, t.f = function() {
        return new a(function(e) {
            if (!(e instanceof Uint8Array || e instanceof ArrayBuffer || o.e() && e instanceof Blob)) throw "Expected Blob or File."
        })
    }, t.b = function(e) {
        return new a(i.c, e)
    }, t.c = function() {
        return new a(function(e) {
            if (!(o.h(e) && e >= 0)) throw "Expected a number 0 or greater."
        })
    }, t.a = function(e, t) {
        return new a(function(t) {
            if (!(null === t || o.a(t) && t instanceof Object)) throw "Expected an Object.";
            void 0 !== e && null !== e && e(t)
        }, t)
    }, t.d = function(e) {
        return new a(function(e) {
            if (null !== e && !o.b(e)) throw "Expected a Function."
        }, e)
    };
    var r = n(37),
        i = n(122),
        o = n(23),
        a = function() {
            return function(e, t) {
                var n = this;
                this.validator = function(t) {
                    n.optional && !o.c(t) || e(t)
                }, this.optional = !!t
            }
        }()
}, function(e, t, n) {
    "use strict";

    function r(e, t, n) {
        var r = {};
        r.type = "file";
        for (var i = n.length, a = 0; a < i; a++) {
            var s = n[a];
            r[s.local] = s.xform(r, t[s.server])
        }
        return function(e, t) {
            Object.defineProperty(e, "ref", {
                get: function() {
                    var n = e.bucket,
                        r = e.fullPath,
                        i = new o.a(n, r);
                    return t.makeStorageReference(i)
                }
            })
        }(r, e), r
    }
    t.b = function() {
        if (l) return l;
        var e = [];
        e.push(new c("bucket")), e.push(new c("generation")), e.push(new c("metageneration")), e.push(new c("name", "fullPath", !0));
        var t = new c("name");
        t.xform = function(e, t) {
            return function(e) {
                return !s.j(e) || e.length < 2 ? e : (e = e, a.b(e))
            }(t)
        }, e.push(t);
        var n = new c("size");
        return n.xform = function(e, t) {
            return s.a(t) ? +t : t
        }, e.push(n), e.push(new c("timeCreated")), e.push(new c("updated")), e.push(new c("md5Hash", null, !0)), e.push(new c("cacheControl", null, !0)), e.push(new c("contentDisposition", null, !0)), e.push(new c("contentEncoding", null, !0)), e.push(new c("contentLanguage", null, !0)), e.push(new c("contentType", null, !0)), e.push(new c("metadata", "customMetadata", !0)), e.push(new c("downloadTokens", "downloadURLs", !1, function(e, t) {
            if (!(s.j(t) && t.length > 0)) return [];
            var n = encodeURIComponent;
            return t.split(",").map(function(t) {
                var r = e.bucket,
                    i = e.fullPath,
                    o = "/b/" + n(r) + "/o/" + n(i);
                return u.a(o) + u.c({
                    alt: "media",
                    token: t
                })
            })
        })), l = e
    }, t.a = function(e, t, n) {
        var o = i.a(t);
        return null === o ? null : r(e, o, n)
    }, t.d = function(e, t) {
        for (var n = {}, r = t.length, i = 0; i < r; i++) {
            var o = t[i];
            o.writable && (n[o.server] = e[o.local])
        }
        return JSON.stringify(n)
    }, t.c = function(e) {
        if (!e || !s.i(e)) throw "Expected Metadata object.";
        for (var t in e) {
            var n = e[t];
            if ("customMetadata" === t) {
                if (!s.i(n)) throw "Expected object for 'customMetadata' mapping."
            } else if (s.g(n)) throw "Mapping for '" + t + "' cannot be an object."
        }
    };
    var i = n(288),
        o = n(94),
        a = n(165),
        s = n(23),
        u = n(123),
        c = function() {
            return function(e, t, n, r) {
                this.server = e, this.local = t || e, this.writable = !!n, this.xform = r || function(e, t) {
                    return t
                }
            }
        }(),
        l = null
}, function(e, t, n) {
    "use strict";
    t.b = function(e) {
        return r.f + r.a + e
    }, t.a = function(e) {
        return r.g + r.a + e
    }, t.d = function(e) {
        return r.f + r.b + e
    }, t.c = function(e) {
        var t = encodeURIComponent,
            n = "?";
        return i.b(e, function(e, r) {
            var i = t(e) + "=" + t(r);
            n = n + i + "&"
        }), n = n.slice(0, -1)
    };
    var r = n(93),
        i = n(61)
}, function(e, t, n) {
    "use strict";
    t.b = function(e, t) {
        return -1 !== e.indexOf(t)
    }, t.a = function(e) {
        return Array.prototype.slice.call(e)
    }, t.c = function(e, t) {
        var n = e.indexOf(t); - 1 !== n && e.splice(n, 1)
    }
}, function(e, t, n) {
    var r = n(10);
    e.exports = function(e, t) {
        if (!r(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!");
        return e
    }
}, function(e, t, n) {
    var r = n(17);
    e.exports = Array.isArray || function(e) {
        return "Array" == r(e)
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e) {
        return e && e.blacklist && e.blacklist.date ? i(e.blacklist) : e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(n(78)),
        a = r(n(30)),
        s = r(n(31)),
        u = r(n(42)),
        c = r(n(43)),
        l = n(191),
        h = function() {
            function e() {
                (0, u.default)(this, e)
            }
            return (0, c.default)(e, null, [{
                key: "fetch",
                value: function() {
                    var t = (0, s.default)(a.default.mark(function t() {
                        var n, r;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (n = e.fetchLocal(), r = !1, n && n.date && n.date > new Date / 1e3 - 86400) {
                                        t.next = 13;
                                        break
                                    }
                                    return t.prev = 3, t.next = 6, (0, l.fetchJSON)(l.endpoints.blacklistTrackers.list);
                                case 6:
                                    n = t.sent, t.next = 11;
                                    break;
                                case 9:
                                    t.prev = 9, t.t0 = t.catch(3);
                                case 11:
                                    t.next = 15;
                                    break;
                                case 13:
                                    n = n.blacklist, r = !0;
                                case 15:
                                    if (!(n = i(n)) || r) {
                                        t.next = 24;
                                        break
                                    }
                                    return t.prev = 17, t.next = 20, e.store(n);
                                case 20:
                                    t.next = 24;
                                    break;
                                case 22:
                                    t.prev = 22, t.t1 = t.catch(17);
                                case 24:
                                    return n || (n = {
                                        blacklist: ["track", "sbl-1com", "appmixmaxcomapitrack", "gmeliuscomv", "gmlemail"],
                                        dictionary: ["track", "open", "scOpen", "mailfoogae", "sender", "streak", "mp1", "bl-1", "transp", "blank", "p1x1", "zero", "pix", "emimp", "activeinboxhq", "baydin", "yesware", "analytics", "followup", "rightinbox", "sidekick", "read", "notif", "user", "signal", "sidekickopen", "salesforceiq"]
                                    }), t.abrupt("return", n);
                                case 26:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this, [
                            [3, 9],
                            [17, 22]
                        ])
                    }));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()
            }, {
                key: "store",
                value: function(e, t) {
                    var n = {
                        date: new Date / 1e3,
                        blacklist: e
                    };
                    window.localStorage.setItem("gmelius__blacklist", (0, o.default)(n))
                }
            }, {
                key: "fetchLocal",
                value: function(e) {
                    var t = window.localStorage.getItem("gmelius__blacklist"),
                        n = null;
                    try {
                        n = JSON.parse(t)
                    } catch (e) {
                        return null
                    }
                    return n && n.blacklist ? n : null
                }
            }]), e
        }();
    t.default = h
}, function(e, t, n) {
    var r = n(58),
        i = n(35).concat("length", "prototype");
    t.f = Object.getOwnPropertyNames || function(e) {
        return r(e, i)
    }
}, function(e, t) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }

    function r() {
        throw new Error("clearTimeout has not been defined")
    }

    function i(e) {
        if (c === setTimeout) return setTimeout(e, 0);
        if ((c === n || !c) && setTimeout) return c = setTimeout, setTimeout(e, 0);
        try {
            return c(e, 0)
        } catch (t) {
            try {
                return c.call(null, e, 0)
            } catch (t) {
                return c.call(this, e, 0)
            }
        }
    }

    function o() {
        d && f && (d = !1, f.length ? p = f.concat(p) : v = -1, p.length && a())
    }

    function a() {
        if (!d) {
            var e = i(o);
            d = !0;
            for (var t = p.length; t;) {
                for (f = p, p = []; ++v < t;) f && f[v].run();
                v = -1, t = p.length
            }
            f = null, d = !1,
                function(e) {
                    if (l === clearTimeout) return clearTimeout(e);
                    if ((l === r || !l) && clearTimeout) return l = clearTimeout, clearTimeout(e);
                    try {
                        l(e)
                    } catch (t) {
                        try {
                            return l.call(null, e)
                        } catch (t) {
                            return l.call(this, e)
                        }
                    }
                }(e)
        }
    }

    function s(e, t) {
        this.fun = e, this.array = t
    }

    function u() {}
    var c, l, h = e.exports = {};
    ! function() {
        try {
            c = "function" == typeof setTimeout ? setTimeout : n
        } catch (e) {
            c = n
        }
        try {
            l = "function" == typeof clearTimeout ? clearTimeout : r
        } catch (e) {
            l = r
        }
    }();
    var f, p = [],
        d = !1,
        v = -1;
    h.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        p.push(new s(e, t)), 1 !== p.length || d || i(a)
    }, s.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, h.title = "browser", h.browser = !0, h.env = {}, h.argv = [], h.version = "", h.versions = {}, h.on = u, h.addListener = u, h.once = u, h.off = u, h.removeListener = u, h.removeAllListeners = u, h.emit = u, h.prependListener = u, h.prependOnceListener = u, h.listeners = function(e) {
        return []
    }, h.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, h.cwd = function() {
        return "/"
    }, h.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, h.umask = function() {
        return 0
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(112);
    t.assert = function(e, n) {
        if (!e) throw t.assertionError(n)
    }, t.assertionError = function(e) {
        return new Error("Firebase Database (" + r.CONSTANTS.SDK_VERSION + ") INTERNAL ASSERT FAILED: " + e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function(e) {
            for (var t = [], n = 0, r = 0; r < e.length; r++) {
                var i = e.charCodeAt(r);
                i < 128 ? t[n++] = i : i < 2048 ? (t[n++] = i >> 6 | 192, t[n++] = 63 & i | 128) : 55296 == (64512 & i) && r + 1 < e.length && 56320 == (64512 & e.charCodeAt(r + 1)) ? (i = 65536 + ((1023 & i) << 10) + (1023 & e.charCodeAt(++r)), t[n++] = i >> 18 | 240, t[n++] = i >> 12 & 63 | 128, t[n++] = i >> 6 & 63 | 128, t[n++] = 63 & i | 128) : (t[n++] = i >> 12 | 224, t[n++] = i >> 6 & 63 | 128, t[n++] = 63 & i | 128)
            }
            return t
        },
        i = function(e) {
            for (var t = [], n = 0, r = 0; n < e.length;) {
                var i = e[n++];
                if (i < 128) t[r++] = String.fromCharCode(i);
                else if (i > 191 && i < 224) {
                    a = e[n++];
                    t[r++] = String.fromCharCode((31 & i) << 6 | 63 & a)
                } else if (i > 239 && i < 365) {
                    var o = ((7 & i) << 18 | (63 & (a = e[n++])) << 12 | (63 & (s = e[n++])) << 6 | 63 & e[n++]) - 65536;
                    t[r++] = String.fromCharCode(55296 + (o >> 10)), t[r++] = String.fromCharCode(56320 + (1023 & o))
                } else {
                    var a = e[n++],
                        s = e[n++];
                    t[r++] = String.fromCharCode((15 & i) << 12 | (63 & a) << 6 | 63 & s)
                }
            }
            return t.join("")
        };
    t.base64 = {
        byteToCharMap_: null,
        charToByteMap_: null,
        byteToCharMapWebSafe_: null,
        charToByteMapWebSafe_: null,
        ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        get ENCODED_VALS() {
            return this.ENCODED_VALS_BASE + "+/="
        },
        get ENCODED_VALS_WEBSAFE() {
            return this.ENCODED_VALS_BASE + "-_."
        },
        HAS_NATIVE_SUPPORT: "function" == typeof atob,
        encodeByteArray: function(e, t) {
            if (!Array.isArray(e)) throw Error("encodeByteArray takes an array as a parameter");
            this.init_();
            for (var n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_, r = [], i = 0; i < e.length; i += 3) {
                var o = e[i],
                    a = i + 1 < e.length,
                    s = a ? e[i + 1] : 0,
                    u = i + 2 < e.length,
                    c = u ? e[i + 2] : 0,
                    l = o >> 2,
                    h = (3 & o) << 4 | s >> 4,
                    f = (15 & s) << 2 | c >> 6,
                    p = 63 & c;
                u || (p = 64, a || (f = 64)), r.push(n[l], n[h], n[f], n[p])
            }
            return r.join("")
        },
        encodeString: function(e, t) {
            return this.HAS_NATIVE_SUPPORT && !t ? btoa(e) : this.encodeByteArray(r(e), t)
        },
        decodeString: function(e, t) {
            return this.HAS_NATIVE_SUPPORT && !t ? atob(e) : i(this.decodeStringToByteArray(e, t))
        },
        decodeStringToByteArray: function(e, t) {
            this.init_();
            for (var n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_, r = [], i = 0; i < e.length;) {
                var o = n[e.charAt(i++)],
                    a = i < e.length ? n[e.charAt(i)] : 0,
                    s = ++i < e.length ? n[e.charAt(i)] : 64,
                    u = ++i < e.length ? n[e.charAt(i)] : 64;
                if (++i, null == o || null == a || null == s || null == u) throw Error();
                var c = o << 2 | a >> 4;
                if (r.push(c), 64 != s) {
                    var l = a << 4 & 240 | s >> 2;
                    if (r.push(l), 64 != u) {
                        var h = s << 6 & 192 | u;
                        r.push(h)
                    }
                }
            }
            return r
        },
        init_: function() {
            if (!this.byteToCharMap_) {
                this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
                for (var e = 0; e < this.ENCODED_VALS.length; e++) this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e), this.charToByteMap_[this.byteToCharMap_[e]] = e, this.byteToCharMapWebSafe_[e] = this.ENCODED_VALS_WEBSAFE.charAt(e), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e, e >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e)
            }
        }
    }, t.base64Encode = function(e) {
        var n = r(e);
        return t.base64.encodeByteArray(n, !0)
    }, t.base64Decode = function(e) {
        try {
            return t.base64.decodeString(e, !0)
        } catch (e) {
            console.error("base64Decode failed: ", e)
        }
        return null
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.jsonEval = function(e) {
        return JSON.parse(e)
    }, t.stringify = function(e) {
        return JSON.stringify(e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.contains = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.safeGet = function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
    }, t.forEach = function(e, t) {
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t(n, e[n])
    }, t.extend = function(e, n) {
        return t.forEach(n, function(t, n) {
            e[t] = n
        }), e
    }, t.clone = function(e) {
        return t.extend({}, e)
    }, t.isNonNullObject = function(e) {
        return "object" == typeof e && null !== e
    }, t.isEmpty = function(e) {
        for (var t in e) return !1;
        return !0
    }, t.getCount = function(e) {
        var t = 0;
        for (var n in e) t++;
        return t
    }, t.map = function(e, t, n) {
        var r = {};
        for (var i in e) r[i] = t.call(n, e[i], i, e);
        return r
    }, t.findKey = function(e, t, n) {
        for (var r in e)
            if (t.call(n, e[r], r, e)) return r
    }, t.findValue = function(e, n, r) {
        var i = t.findKey(e, n, r);
        return i && e[i]
    }, t.getAnyKey = function(e) {
        for (var t in e) return t
    }, t.getValues = function(e) {
        var t = [],
            n = 0;
        for (var r in e) t[n++] = e[r];
        return t
    }, t.every = function(e, t) {
        for (var n in e)
            if (Object.prototype.hasOwnProperty.call(e, n) && !t(n, e[n])) return !1;
        return !0
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(3),
        i = n(135),
        o = n(8),
        a = n(113),
        s = n(91),
        u = n(118),
        c = n(0),
        l = n(52),
        h = function() {
            function e(e) {
                this.repo_ = e, e instanceof s.Repo || r.fatal("Don't call new Database() directly - please use firebase.database()."), this.root_ = new a.Reference(e, o.Path.Empty), this.INTERNAL = new f(this)
            }
            return Object.defineProperty(e.prototype, "app", {
                get: function() {
                    return this.repo_.app
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.ref = function(e) {
                return this.checkDeleted_("ref"), c.validateArgCount("database.ref", 0, 1, arguments.length), void 0 !== e ? this.root_.child(e) : this.root_
            }, e.prototype.refFromURL = function(e) {
                var t = "database.refFromURL";
                this.checkDeleted_(t), c.validateArgCount(t, 1, 1, arguments.length);
                var n = i.parseRepoInfo(e);
                l.validateUrl(t, 1, n);
                var o = n.repoInfo;
                return o.host !== this.repo_.repoInfo_.host && r.fatal(t + ": Host name does not match the current database: (found " + o.host + " but expected " + this.repo_.repoInfo_.host + ")"), this.ref(n.path.toString())
            }, e.prototype.checkDeleted_ = function(e) {
                null === this.repo_ && r.fatal("Cannot call " + e + " on a deleted database.")
            }, e.prototype.goOffline = function() {
                c.validateArgCount("database.goOffline", 0, 0, arguments.length), this.checkDeleted_("goOffline"), this.repo_.interrupt()
            }, e.prototype.goOnline = function() {
                c.validateArgCount("database.goOnline", 0, 0, arguments.length), this.checkDeleted_("goOnline"), this.repo_.resume()
            }, e.ServerValue = {
                TIMESTAMP: {
                    ".sv": "timestamp"
                }
            }, e
        }();
    t.Database = h;
    var f = function() {
        function e(e) {
            this.database = e
        }
        return e.prototype.delete = function() {
            return this.database.checkDeleted_("delete"), u.RepoManager.getInstance().deleteRepo(this.database.repo_), this.database.repo_ = null, this.database.root_ = null, this.database.INTERNAL = null, this.database = null, Promise.resolve()
        }, e
    }();
    t.DatabaseInternals = f
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(8),
        i = n(136),
        o = n(3);
    t.parseRepoInfo = function(e) {
        var n = t.parseURL(e),
            a = n.subdomain;
        "firebase" === n.domain && o.fatal(n.host + " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"), a && "undefined" != a || "localhost" === n.domain || o.fatal("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"), n.secure || o.warnIfPageIsSecure();
        var s = "ws" === n.scheme || "wss" === n.scheme;
        return {
            repoInfo: new i.RepoInfo(n.host, n.secure, a, s),
            path: new r.Path(n.pathString)
        }
    }, t.parseURL = function(e) {
        var t = "",
            n = "",
            r = "",
            i = "",
            a = !0,
            s = "https",
            u = 443;
        if ("string" == typeof e) {
            var c = e.indexOf("//");
            c >= 0 && (s = e.substring(0, c - 1), e = e.substring(c + 2));
            var l = e.indexOf("/"); - 1 === l && (l = e.length);
            var h = e.indexOf("?"); - 1 === h && (h = e.length), t = e.substring(0, Math.min(l, h)), l < h && (i = function(e) {
                for (var t = "", n = e.split("/"), r = 0; r < n.length; r++)
                    if (n[r].length > 0) {
                        var i = n[r];
                        try {
                            i = decodeURIComponent(i.replace(/\+/g, " "))
                        } catch (e) {}
                        t += "/" + i
                    } return t
            }(e.substring(l, h)));
            var f = function(e) {
                var t = {};
                e.startsWith("?") && (e = e.substring(1));
                for (var n = 0, r = e.split("&"); n < r.length; n++) {
                    var i = r[n],
                        a = i.split("=");
                    2 === a.length ? t[decodeURIComponent(a[0])] = decodeURIComponent(a[1]) : o.warn("Invalid query string segment: " + i)
                }
                return t
            }(e.substring(Math.min(e.length, h)));
            (c = t.indexOf(":")) >= 0 ? (a = "https" === s || "wss" === s, u = parseInt(t.substring(c + 1), 10)) : c = e.length;
            var p = t.split(".");
            3 === p.length ? (n = p[1], r = p[0].toLowerCase()) : 2 === p.length ? n = p[0] : "localhost" === p[0].slice(0, c).toLowerCase() && (n = "localhost"), "" === r && "ns" in f && (r = f.ns)
        }
        return {
            host: t,
            port: u,
            domain: n,
            subdomain: r,
            secure: a,
            scheme: s,
            pathString: i
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(0),
        o = n(86),
        a = n(87),
        s = function() {
            function e(e, t, n, r, i) {
                void 0 === i && (i = ""), this.secure = t, this.namespace = n, this.webSocketOnly = r, this.persistenceKey = i, this.host = e.toLowerCase(), this.domain = this.host.substr(this.host.indexOf(".") + 1), this.internalHost = o.PersistentStorage.get("host:" + e) || this.host
            }
            return e.prototype.needsQueryParam = function() {
                return this.host !== this.internalHost || this.isCustomHost()
            }, e.prototype.isCacheableHost = function() {
                return "s-" === this.internalHost.substr(0, 2)
            }, e.prototype.isDemoHost = function() {
                return "firebaseio-demo.com" === this.domain
            }, e.prototype.isCustomHost = function() {
                return "firebaseio.com" !== this.domain && "firebaseio-demo.com" !== this.domain
            }, e.prototype.updateHost = function(e) {
                e !== this.internalHost && (this.internalHost = e, this.isCacheableHost() && o.PersistentStorage.set("host:" + this.host, this.internalHost))
            }, e.prototype.connectionURL = function(e, t) {
                r.assert("string" == typeof e, "typeof type must == string"), r.assert("object" == typeof t, "typeof params must == object");
                var n;
                if (e === a.WEBSOCKET) n = (this.secure ? "wss://" : "ws://") + this.internalHost + "/.ws?";
                else {
                    if (e !== a.LONG_POLLING) throw new Error("Unknown connection type: " + e);
                    n = (this.secure ? "https://" : "http://") + this.internalHost + "/.lp?"
                }
                this.needsQueryParam() && (t.ns = this.namespace);
                var o = [];
                return i.forEach(t, function(e, t) {
                    o.push(e + "=" + t)
                }), n + o.join("&")
            }, e.prototype.toString = function() {
                var e = this.toURLString();
                return this.persistenceKey && (e += "<" + this.persistenceKey + ">"), e
            }, e.prototype.toURLString = function() {
                return (this.secure ? "https://" : "http://") + this.host
            }, e
        }();
    t.RepoInfo = s
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(52),
        o = n(3),
        a = n(0),
        s = function() {
            function e(e, t) {
                this.repo_ = e, this.path_ = t
            }
            return e.prototype.cancel = function(e) {
                r.validateArgCount("OnDisconnect.cancel", 0, 1, arguments.length), r.validateCallback("OnDisconnect.cancel", 1, e, !0);
                var t = new a.Deferred;
                return this.repo_.onDisconnectCancel(this.path_, t.wrapCallback(e)), t.promise
            }, e.prototype.remove = function(e) {
                r.validateArgCount("OnDisconnect.remove", 0, 1, arguments.length), i.validateWritablePath("OnDisconnect.remove", this.path_), r.validateCallback("OnDisconnect.remove", 1, e, !0);
                var t = new a.Deferred;
                return this.repo_.onDisconnectSet(this.path_, null, t.wrapCallback(e)), t.promise
            }, e.prototype.set = function(e, t) {
                r.validateArgCount("OnDisconnect.set", 1, 2, arguments.length), i.validateWritablePath("OnDisconnect.set", this.path_), i.validateFirebaseDataArg("OnDisconnect.set", 1, e, this.path_, !1), r.validateCallback("OnDisconnect.set", 2, t, !0);
                var n = new a.Deferred;
                return this.repo_.onDisconnectSet(this.path_, e, n.wrapCallback(t)), n.promise
            }, e.prototype.setWithPriority = function(e, t, n) {
                r.validateArgCount("OnDisconnect.setWithPriority", 2, 3, arguments.length), i.validateWritablePath("OnDisconnect.setWithPriority", this.path_), i.validateFirebaseDataArg("OnDisconnect.setWithPriority", 1, e, this.path_, !1), i.validatePriority("OnDisconnect.setWithPriority", 2, t, !1), r.validateCallback("OnDisconnect.setWithPriority", 3, n, !0);
                var o = new a.Deferred;
                return this.repo_.onDisconnectSetWithPriority(this.path_, e, t, o.wrapCallback(n)), o.promise
            }, e.prototype.update = function(e, t) {
                if (r.validateArgCount("OnDisconnect.update", 1, 2, arguments.length), i.validateWritablePath("OnDisconnect.update", this.path_), Array.isArray(e)) {
                    for (var n = {}, s = 0; s < e.length; ++s) n["" + s] = e[s];
                    e = n, o.warn("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")
                }
                i.validateFirebaseMergeDataArg("OnDisconnect.update", 1, e, this.path_, !1), r.validateCallback("OnDisconnect.update", 2, t, !0);
                var u = new a.Deferred;
                return this.repo_.onDisconnectUpdate(this.path_, e, u.wrapCallback(t)), u.promise
            }, e
        }();
    t.OnDisconnect = s
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r, i = n(0),
        o = n(79),
        a = n(16),
        s = n(140),
        u = n(144),
        c = n(3),
        l = n(8),
        h = n(52),
        f = n(0),
        p = n(246),
        d = n(0),
        v = function() {
            function e(e, t, n, r) {
                this.repo = e, this.path = t, this.queryParams_ = n, this.orderByCalled_ = r
            }
            return Object.defineProperty(e, "__referenceConstructor", {
                get: function() {
                    return i.assert(r, "Reference.ts has not been loaded"), r
                },
                set: function(e) {
                    r = e
                },
                enumerable: !0,
                configurable: !0
            }), e.validateQueryEndpoints_ = function(e) {
                var t = null,
                    n = null;
                if (e.hasStart() && (t = e.getIndexStartValue()), e.hasEnd() && (n = e.getIndexEndValue()), e.getIndex() === o.KEY_INDEX) {
                    var r = "Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",
                        l = "Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.";
                    if (e.hasStart()) {
                        if (e.getIndexStartName() != c.MIN_NAME) throw new Error(r);
                        if ("string" != typeof t) throw new Error(l)
                    }
                    if (e.hasEnd()) {
                        if (e.getIndexEndName() != c.MAX_NAME) throw new Error(r);
                        if ("string" != typeof n) throw new Error(l)
                    }
                } else if (e.getIndex() === a.PRIORITY_INDEX) {
                    if (null != t && !h.isValidPriority(t) || null != n && !h.isValidPriority(n)) throw new Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).")
                } else if (i.assert(e.getIndex() instanceof u.PathIndex || e.getIndex() === s.VALUE_INDEX, "unknown index type."), null != t && "object" == typeof t || null != n && "object" == typeof n) throw new Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.")
            }, e.validateLimit_ = function(e) {
                if (e.hasStart() && e.hasEnd() && e.hasLimit() && !e.hasAnchoredLimit()) throw new Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.")
            }, e.prototype.validateNoPreviousOrderByCall_ = function(e) {
                if (!0 === this.orderByCalled_) throw new Error(e + ": You can't combine multiple orderBy calls.")
            }, e.prototype.getQueryParams = function() {
                return this.queryParams_
            }, e.prototype.getRef = function() {
                return f.validateArgCount("Query.ref", 0, 0, arguments.length), new e.__referenceConstructor(this.repo, this.path)
            }, e.prototype.on = function(t, n, r, i) {
                f.validateArgCount("Query.on", 2, 4, arguments.length), h.validateEventType("Query.on", 1, t, !1), f.validateCallback("Query.on", 2, n, !1);
                var o = e.getCancelAndContextArgs_("Query.on", r, i);
                if ("value" === t) this.onValueEvent(n, o.cancel, o.context);
                else {
                    var a = {};
                    a[t] = n, this.onChildEvent(a, o.cancel, o.context)
                }
                return n
            }, e.prototype.onValueEvent = function(e, t, n) {
                var r = new p.ValueEventRegistration(e, t || null, n || null);
                this.repo.addEventCallbackForQuery(this, r)
            }, e.prototype.onChildEvent = function(e, t, n) {
                var r = new p.ChildEventRegistration(e, t, n);
                this.repo.addEventCallbackForQuery(this, r)
            }, e.prototype.off = function(e, t, n) {
                f.validateArgCount("Query.off", 0, 3, arguments.length), h.validateEventType("Query.off", 1, e, !0), f.validateCallback("Query.off", 2, t, !0), f.validateContextObject("Query.off", 3, n, !0);
                var r = null,
                    i = null;
                if ("value" === e) {
                    var o = t || null;
                    r = new p.ValueEventRegistration(o, null, n || null)
                } else e && (t && ((i = {})[e] = t), r = new p.ChildEventRegistration(i, null, n || null));
                this.repo.removeEventCallbackForQuery(this, r)
            }, e.prototype.once = function(t, n, r, i) {
                var o = this;
                f.validateArgCount("Query.once", 1, 4, arguments.length), h.validateEventType("Query.once", 1, t, !1), f.validateCallback("Query.once", 2, n, !0);
                var a = e.getCancelAndContextArgs_("Query.once", r, i),
                    s = !0,
                    u = new d.Deferred;
                u.promise.catch(function() {});
                var c = function(e) {
                    s && (s = !1, o.off(t, c), n && n.bind(a.context)(e), u.resolve(e))
                };
                return this.on(t, c, function(e) {
                    o.off(t, c), a.cancel && a.cancel.bind(a.context)(e), u.reject(e)
                }), u.promise
            }, e.prototype.limitToFirst = function(t) {
                if (f.validateArgCount("Query.limitToFirst", 1, 1, arguments.length), "number" != typeof t || Math.floor(t) !== t || t <= 0) throw new Error("Query.limitToFirst: First argument must be a positive integer.");
                if (this.queryParams_.hasLimit()) throw new Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");
                return new e(this.repo, this.path, this.queryParams_.limitToFirst(t), this.orderByCalled_)
            }, e.prototype.limitToLast = function(t) {
                if (f.validateArgCount("Query.limitToLast", 1, 1, arguments.length), "number" != typeof t || Math.floor(t) !== t || t <= 0) throw new Error("Query.limitToLast: First argument must be a positive integer.");
                if (this.queryParams_.hasLimit()) throw new Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");
                return new e(this.repo, this.path, this.queryParams_.limitToLast(t), this.orderByCalled_)
            }, e.prototype.orderByChild = function(t) {
                if (f.validateArgCount("Query.orderByChild", 1, 1, arguments.length), "$key" === t) throw new Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');
                if ("$priority" === t) throw new Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');
                if ("$value" === t) throw new Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');
                h.validatePathString("Query.orderByChild", 1, t, !1), this.validateNoPreviousOrderByCall_("Query.orderByChild");
                var n = new l.Path(t);
                if (n.isEmpty()) throw new Error("Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.");
                var r = new u.PathIndex(n),
                    i = this.queryParams_.orderBy(r);
                return e.validateQueryEndpoints_(i), new e(this.repo, this.path, i, !0)
            }, e.prototype.orderByKey = function() {
                f.validateArgCount("Query.orderByKey", 0, 0, arguments.length), this.validateNoPreviousOrderByCall_("Query.orderByKey");
                var t = this.queryParams_.orderBy(o.KEY_INDEX);
                return e.validateQueryEndpoints_(t), new e(this.repo, this.path, t, !0)
            }, e.prototype.orderByPriority = function() {
                f.validateArgCount("Query.orderByPriority", 0, 0, arguments.length), this.validateNoPreviousOrderByCall_("Query.orderByPriority");
                var t = this.queryParams_.orderBy(a.PRIORITY_INDEX);
                return e.validateQueryEndpoints_(t), new e(this.repo, this.path, t, !0)
            }, e.prototype.orderByValue = function() {
                f.validateArgCount("Query.orderByValue", 0, 0, arguments.length), this.validateNoPreviousOrderByCall_("Query.orderByValue");
                var t = this.queryParams_.orderBy(s.VALUE_INDEX);
                return e.validateQueryEndpoints_(t), new e(this.repo, this.path, t, !0)
            }, e.prototype.startAt = function(t, n) {
                void 0 === t && (t = null), f.validateArgCount("Query.startAt", 0, 2, arguments.length), h.validateFirebaseDataArg("Query.startAt", 1, t, this.path, !0), h.validateKey("Query.startAt", 2, n, !0);
                var r = this.queryParams_.startAt(t, n);
                if (e.validateLimit_(r), e.validateQueryEndpoints_(r), this.queryParams_.hasStart()) throw new Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");
                return void 0 === t && (t = null, n = null), new e(this.repo, this.path, r, this.orderByCalled_)
            }, e.prototype.endAt = function(t, n) {
                void 0 === t && (t = null), f.validateArgCount("Query.endAt", 0, 2, arguments.length), h.validateFirebaseDataArg("Query.endAt", 1, t, this.path, !0), h.validateKey("Query.endAt", 2, n, !0);
                var r = this.queryParams_.endAt(t, n);
                if (e.validateLimit_(r), e.validateQueryEndpoints_(r), this.queryParams_.hasEnd()) throw new Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");
                return new e(this.repo, this.path, r, this.orderByCalled_)
            }, e.prototype.equalTo = function(e, t) {
                if (f.validateArgCount("Query.equalTo", 1, 2, arguments.length), h.validateFirebaseDataArg("Query.equalTo", 1, e, this.path, !1), h.validateKey("Query.equalTo", 2, t, !0), this.queryParams_.hasStart()) throw new Error("Query.equalTo: Starting point was already set (by another call to startAt or equalTo).");
                if (this.queryParams_.hasEnd()) throw new Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");
                return this.startAt(e, t).endAt(e, t)
            }, e.prototype.toString = function() {
                return f.validateArgCount("Query.toString", 0, 0, arguments.length), this.repo.toString() + this.path.toUrlEncodedString()
            }, e.prototype.toJSON = function() {
                return f.validateArgCount("Query.toJSON", 0, 1, arguments.length), this.toString()
            }, e.prototype.queryObject = function() {
                return this.queryParams_.getQueryObject()
            }, e.prototype.queryIdentifier = function() {
                var e = this.queryObject(),
                    t = c.ObjectToUniqueKey(e);
                return "{}" === t ? "default" : t
            }, e.prototype.isEqual = function(t) {
                if (f.validateArgCount("Query.isEqual", 1, 1, arguments.length), !(t instanceof e)) {
                    throw new Error("Query.isEqual failed: First argument must be an instance of firebase.database.Query.")
                }
                var n = this.repo === t.repo,
                    r = this.path.equals(t.path),
                    i = this.queryIdentifier() === t.queryIdentifier();
                return n && r && i
            }, e.getCancelAndContextArgs_ = function(e, t, n) {
                var r = {
                    cancel: null,
                    context: null
                };
                if (t && n) r.cancel = t, f.validateCallback(e, 3, r.cancel, !0), r.context = n, f.validateContextObject(e, 4, r.context, !0);
                else if (t)
                    if ("object" == typeof t && null !== t) r.context = t;
                    else {
                        if ("function" != typeof t) throw new Error(f.errorPrefix(e, 3, !0) + " must either be a cancel callback or a context object.");
                        r.cancel = t
                    } return r
            }, Object.defineProperty(e.prototype, "ref", {
                get: function() {
                    return this.getRef()
                },
                enumerable: !0,
                configurable: !0
            }), e
        }();
    t.Query = v
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r, i = n(0),
        o = n(3),
        a = n(0);
    t.setMaxNode = function(e) {
        r = e
    }, t.priorityHashText = function(e) {
        return "number" == typeof e ? "number:" + o.doubleToIEEE754String(e) : "string:" + e
    }, t.validatePriorityNode = function(e) {
        if (e.isLeafNode()) {
            var t = e.val();
            i.assert("string" == typeof t || "number" == typeof t || "object" == typeof t && a.contains(t, ".sv"), "Priority must be a string or number.")
        } else i.assert(e === r || e.isEmpty(), "priority of unexpected type.");
        i.assert(e === r || e.getPriority().isEmpty(), "Priority nodes can't have a priority of their own.")
    }
}, function(e, t, n) {
    "use strict";
    var r = this && this.__extends || function() {
        var e = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        };
        return function(t, n) {
            function r() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
        }
    }();
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(88),
        o = n(22),
        a = n(3),
        s = n(80),
        u = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e), t.prototype.compare = function(e, t) {
                var n = e.node.compareTo(t.node);
                return 0 === n ? a.nameCompare(e.name, t.name) : n
            }, t.prototype.isDefinedOn = function(e) {
                return !0
            }, t.prototype.indexedValueChanged = function(e, t) {
                return !e.equals(t)
            }, t.prototype.minPost = function() {
                return o.NamedNode.MIN
            }, t.prototype.maxPost = function() {
                return o.NamedNode.MAX
            }, t.prototype.makePost = function(e, t) {
                var n = s.nodeFromJSON(e);
                return new o.NamedNode(t, n)
            }, t.prototype.toString = function() {
                return ".value"
            }, t
        }(i.Index);
    t.ValueIndex = u, t.VALUE_INDEX = new u
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r, i = n(0),
        o = n(142),
        a = n(0),
        s = n(22),
        u = n(16),
        c = n(79),
        l = {},
        h = function() {
            function e(e, t) {
                this.indexes_ = e, this.indexSet_ = t
            }
            return Object.defineProperty(e, "Default", {
                get: function() {
                    return i.assert(l && u.PRIORITY_INDEX, "ChildrenNode.ts has not been loaded"), r = r || new e({
                        ".priority": l
                    }, {
                        ".priority": u.PRIORITY_INDEX
                    })
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.get = function(e) {
                var t = a.safeGet(this.indexes_, e);
                if (!t) throw new Error("No index defined for " + e);
                return t === l ? null : t
            }, e.prototype.hasIndex = function(e) {
                return a.contains(this.indexSet_, e.toString())
            }, e.prototype.addIndex = function(t, n) {
                i.assert(t !== c.KEY_INDEX, "KeyIndex always exists and isn't meant to be added to the IndexMap.");
                for (var r = [], u = !1, h = n.getIterator(s.NamedNode.Wrap), f = h.getNext(); f;) u = u || t.isDefinedOn(f.node), r.push(f), f = h.getNext();
                var p;
                p = u ? o.buildChildSet(r, t.getCompare()) : l;
                var d = t.toString(),
                    v = a.clone(this.indexSet_);
                v[d] = t;
                var _ = a.clone(this.indexes_);
                return _[d] = p, new e(_, v)
            }, e.prototype.addToIndexes = function(t, n) {
                var r = this;
                return new e(a.map(this.indexes_, function(e, u) {
                    var c = a.safeGet(r.indexSet_, u);
                    if (i.assert(c, "Missing index implementation for " + u), e === l) {
                        if (c.isDefinedOn(t.node)) {
                            for (var h = [], f = n.getIterator(s.NamedNode.Wrap), p = f.getNext(); p;) p.name != t.name && h.push(p), p = f.getNext();
                            return h.push(t), o.buildChildSet(h, c.getCompare())
                        }
                        return l
                    }
                    var d = n.get(t.name),
                        v = e;
                    return d && (v = v.remove(new s.NamedNode(t.name, d))), v.insert(t, t.node)
                }), this.indexSet_)
            }, e.prototype.removeFromIndexes = function(t, n) {
                return new e(a.map(this.indexes_, function(e) {
                    if (e === l) return e;
                    var r = n.get(t.name);
                    return r ? e.remove(new s.NamedNode(t.name, r)) : e
                }), this.indexSet_)
            }, e
        }();
    t.IndexMap = h
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(90),
        i = n(90),
        o = Math.log(2),
        a = function() {
            function e(e) {
                this.count = function(e) {
                    return parseInt(Math.log(e) / o, 10)
                }(e + 1), this.current_ = this.count - 1;
                var t = function(e) {
                    return parseInt(Array(e + 1).join("1"), 2)
                }(this.count);
                this.bits_ = e + 1 & t
            }
            return e.prototype.nextBitIsOne = function() {
                var e = !(this.bits_ & 1 << this.current_);
                return this.current_--, e
            }, e
        }();
    t.buildChildSet = function(e, t, n, o) {
        e.sort(t);
        var s = function(t, i) {
                var o, a, u = i - t;
                if (0 == u) return null;
                if (1 == u) return o = e[t], a = n ? n(o) : o, new r.LLRBNode(a, o.node, r.LLRBNode.BLACK, null, null);
                var c = parseInt(u / 2, 10) + t,
                    l = s(t, c),
                    h = s(c + 1, i);
                return o = e[c], a = n ? n(o) : o, new r.LLRBNode(a, o.node, r.LLRBNode.BLACK, l, h)
            },
            u = function(t) {
                for (var i = null, o = null, a = e.length, u = function(t, i) {
                        var o = a - t,
                            u = a;
                        a -= t;
                        var l = s(o + 1, u),
                            h = e[o],
                            f = n ? n(h) : h;
                        c(new r.LLRBNode(f, h.node, i, null, l))
                    }, c = function(e) {
                        i ? (i.left = e, i = e) : (o = e, i = e)
                    }, l = 0; l < t.count; ++l) {
                    var h = t.nextBitIsOne(),
                        f = Math.pow(2, t.count - (l + 1));
                    h ? u(f, r.LLRBNode.BLACK) : (u(f, r.LLRBNode.BLACK), u(f, r.LLRBNode.RED))
                }
                return o
            }(new a(e.length));
        return new i.SortedMap(o || t, u)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(3);
    t.NAME_ONLY_COMPARATOR = function(e, t) {
        return r.nameCompare(e.name, t.name)
    }, t.NAME_COMPARATOR = function(e, t) {
        return r.nameCompare(e, t)
    }
}, function(e, t, n) {
    "use strict";
    var r = this && this.__extends || function() {
        var e = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        };
        return function(t, n) {
            function r() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
        }
    }();
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0),
        o = n(3),
        a = n(88),
        s = n(18),
        u = n(22),
        c = n(80),
        l = function(e) {
            function t(t) {
                var n = e.call(this) || this;
                return n.indexPath_ = t, i.assert(!t.isEmpty() && ".priority" !== t.getFront(), "Can't create PathIndex with empty path or .priority key"), n
            }
            return r(t, e), t.prototype.extractChild = function(e) {
                return e.getChild(this.indexPath_)
            }, t.prototype.isDefinedOn = function(e) {
                return !e.getChild(this.indexPath_).isEmpty()
            }, t.prototype.compare = function(e, t) {
                var n = this.extractChild(e.node),
                    r = this.extractChild(t.node),
                    i = n.compareTo(r);
                return 0 === i ? o.nameCompare(e.name, t.name) : i
            }, t.prototype.makePost = function(e, t) {
                var n = c.nodeFromJSON(e),
                    r = s.ChildrenNode.EMPTY_NODE.updateChild(this.indexPath_, n);
                return new u.NamedNode(t, r)
            }, t.prototype.maxPost = function() {
                var e = s.ChildrenNode.EMPTY_NODE.updateChild(this.indexPath_, s.MAX_NODE);
                return new u.NamedNode(o.MAX_NAME, e)
            }, t.prototype.toString = function() {
                return this.indexPath_.slice().join("/")
            }, t
        }(a.Index);
    t.PathIndex = l
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(8),
        o = n(146),
        a = n(89),
        s = n(80),
        u = n(16);
    t.generateWithValues = function(e) {
        return e = e || {}, e.timestamp = e.timestamp || (new Date).getTime(), e
    }, t.resolveDeferredValue = function(e, t) {
        return e && "object" == typeof e ? (r.assert(".sv" in e, "Unexpected leaf node or priority contents"), t[e[".sv"]]) : e
    }, t.resolveDeferredValueTree = function(e, n) {
        var r = new o.SparseSnapshotTree;
        return e.forEachTree(new i.Path(""), function(e, i) {
            r.remember(e, t.resolveDeferredValueSnapshot(i, n))
        }), r
    }, t.resolveDeferredValueSnapshot = function(e, n) {
        var r, i = e.getPriority().val(),
            o = t.resolveDeferredValue(i, n);
        if (e.isLeafNode()) {
            var c = e,
                l = t.resolveDeferredValue(c.getValue(), n);
            return l !== c.getValue() || o !== c.getPriority().val() ? new a.LeafNode(l, s.nodeFromJSON(o)) : e
        }
        var h = e;
        return r = h, o !== h.getPriority().val() && (r = r.updatePriority(new a.LeafNode(o))), h.forEachChild(u.PRIORITY_INDEX, function(e, i) {
            var o = t.resolveDeferredValueSnapshot(i, n);
            o !== i && (r = r.updateImmediateChild(e, o))
        }), r
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(8),
        i = n(16),
        o = n(147),
        a = function() {
            function e() {
                this.value_ = null, this.children_ = null
            }
            return e.prototype.find = function(e) {
                if (null != this.value_) return this.value_.getChild(e);
                if (e.isEmpty() || null == this.children_) return null;
                var t = e.getFront();
                if (e = e.popFront(), this.children_.contains(t)) {
                    return this.children_.get(t).find(e)
                }
                return null
            }, e.prototype.remember = function(t, n) {
                if (t.isEmpty()) this.value_ = n, this.children_ = null;
                else if (null !== this.value_) this.value_ = this.value_.updateChild(t, n);
                else {
                    null == this.children_ && (this.children_ = new o.CountedSet);
                    var r = t.getFront();
                    this.children_.contains(r) || this.children_.add(r, new e);
                    var i = this.children_.get(r);
                    t = t.popFront(), i.remember(t, n)
                }
            }, e.prototype.forget = function(e) {
                if (e.isEmpty()) return this.value_ = null, this.children_ = null, !0;
                if (null !== this.value_) {
                    if (this.value_.isLeafNode()) return !1;
                    var t = this.value_;
                    this.value_ = null;
                    var n = this;
                    return t.forEachChild(i.PRIORITY_INDEX, function(e, t) {
                        n.remember(new r.Path(e), t)
                    }), this.forget(e)
                }
                if (null !== this.children_) {
                    var o = e.getFront();
                    if (e = e.popFront(), this.children_.contains(o)) {
                        this.children_.get(o).forget(e) && this.children_.remove(o)
                    }
                    return !!this.children_.isEmpty() && (this.children_ = null, !0)
                }
                return !0
            }, e.prototype.forEachTree = function(e, t) {
                null !== this.value_ ? t(e, this.value_) : this.forEachChild(function(n, i) {
                    var o = new r.Path(e.toString() + "/" + n);
                    i.forEachTree(o, t)
                })
            }, e.prototype.forEachChild = function(e) {
                null !== this.children_ && this.children_.each(function(t, n) {
                    e(t, n)
                })
            }, e
        }();
    t.SparseSnapshotTree = a
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = function() {
            function e() {
                this.set = {}
            }
            return e.prototype.add = function(e, t) {
                this.set[e] = null === t || t
            }, e.prototype.contains = function(e) {
                return r.contains(this.set, e)
            }, e.prototype.get = function(e) {
                return this.contains(e) ? this.set[e] : void 0
            }, e.prototype.remove = function(e) {
                delete this.set[e]
            }, e.prototype.clear = function() {
                this.set = {}
            }, e.prototype.isEmpty = function() {
                return r.isEmpty(this.set)
            }, e.prototype.count = function() {
                return r.getCount(this.set)
            }, e.prototype.each = function(e) {
                r.forEach(this.set, function(t, n) {
                    return e(t, n)
                })
            }, e.prototype.keys = function() {
                var e = [];
                return r.forEach(this.set, function(t) {
                    e.push(t)
                }), e
            }, e
        }();
    t.CountedSet = i
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(53),
        i = n(8),
        o = function() {
            function e(e, t, n) {
                this.source = e, this.path = t, this.snap = n, this.type = r.OperationType.OVERWRITE
            }
            return e.prototype.operationForChild = function(t) {
                return this.path.isEmpty() ? new e(this.source, i.Path.Empty, this.snap.getImmediateChild(t)) : new e(this.source, this.path.popFront(), this.snap)
            }, e
        }();
    t.Overwrite = o
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r, i = n(92),
        o = n(18),
        a = n(0),
        s = n(0),
        u = n(150),
        c = n(252),
        l = function() {
            function e() {
                this.views_ = {}
            }
            return Object.defineProperty(e, "__referenceConstructor", {
                get: function() {
                    return a.assert(r, "Reference.ts has not been loaded"), r
                },
                set: function(e) {
                    a.assert(!r, "__referenceConstructor has already been defined"), r = e
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.isEmpty = function() {
                return s.isEmpty(this.views_)
            }, e.prototype.applyOperation = function(e, t, n) {
                var r = e.source.queryId;
                if (null !== r) {
                    var i = s.safeGet(this.views_, r);
                    return a.assert(null != i, "SyncTree gave us an op for an invalid query."), i.applyOperation(e, t, n)
                }
                var o = [];
                return s.forEach(this.views_, function(r, i) {
                    o = o.concat(i.applyOperation(e, t, n))
                }), o
            }, e.prototype.addEventRegistration = function(e, t, n, r, a) {
                var l = e.queryIdentifier(),
                    h = s.safeGet(this.views_, l);
                if (!h) {
                    var f = n.calcCompleteEventCache(a ? r : null),
                        p = !1;
                    f ? p = !0 : r instanceof o.ChildrenNode ? (f = n.calcCompleteEventChildren(r), p = !1) : (f = o.ChildrenNode.EMPTY_NODE, p = !1);
                    var d = new u.ViewCache(new i.CacheNode(f, p, !1), new i.CacheNode(r, a, !1));
                    h = new c.View(e, d), this.views_[l] = h
                }
                return h.addEventRegistration(t), h.getInitialEvents(t)
            }, e.prototype.removeEventRegistration = function(t, n, r) {
                var i = t.queryIdentifier(),
                    o = [],
                    a = [],
                    u = this.hasCompleteView();
                if ("default" === i) {
                    var c = this;
                    s.forEach(this.views_, function(e, t) {
                        a = a.concat(t.removeEventRegistration(n, r)), t.isEmpty() && (delete c.views_[e], t.getQuery().getQueryParams().loadsAllData() || o.push(t.getQuery()))
                    })
                } else {
                    var l = s.safeGet(this.views_, i);
                    l && (a = a.concat(l.removeEventRegistration(n, r)), l.isEmpty() && (delete this.views_[i], l.getQuery().getQueryParams().loadsAllData() || o.push(l.getQuery())))
                }
                return u && !this.hasCompleteView() && o.push(new e.__referenceConstructor(t.repo, t.path)), {
                    removed: o,
                    events: a
                }
            }, e.prototype.getQueryViews = function() {
                var e = this;
                return Object.keys(this.views_).map(function(t) {
                    return e.views_[t]
                }).filter(function(e) {
                    return !e.getQuery().getQueryParams().loadsAllData()
                })
            }, e.prototype.getCompleteServerCache = function(e) {
                var t = null;
                return s.forEach(this.views_, function(n, r) {
                    t = t || r.getCompleteServerCache(e)
                }), t
            }, e.prototype.viewForQuery = function(e) {
                if (e.getQueryParams().loadsAllData()) return this.getCompleteView();
                var t = e.queryIdentifier();
                return s.safeGet(this.views_, t)
            }, e.prototype.viewExistsForQuery = function(e) {
                return null != this.viewForQuery(e)
            }, e.prototype.hasCompleteView = function() {
                return null != this.getCompleteView()
            }, e.prototype.getCompleteView = function() {
                return s.findValue(this.views_, function(e) {
                    return e.getQuery().getQueryParams().loadsAllData()
                }) || null
            }, e
        }();
    t.SyncPoint = l
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(18),
        i = n(92),
        o = function() {
            function e(e, t) {
                this.eventCache_ = e, this.serverCache_ = t
            }
            return e.prototype.updateEventSnap = function(t, n, r) {
                return new e(new i.CacheNode(t, n, r), this.serverCache_)
            }, e.prototype.updateServerSnap = function(t, n, r) {
                return new e(this.eventCache_, new i.CacheNode(t, n, r))
            }, e.prototype.getEventCache = function() {
                return this.eventCache_
            }, e.prototype.getCompleteEventSnap = function() {
                return this.eventCache_.isFullyInitialized() ? this.eventCache_.getNode() : null
            }, e.prototype.getServerCache = function() {
                return this.serverCache_
            }, e.prototype.getCompleteServerSnap = function() {
                return this.serverCache_.isFullyInitialized() ? this.serverCache_.getNode() : null
            }, e.Empty = new e(new i.CacheNode(r.ChildrenNode.EMPTY_NODE, !1, !1), new i.CacheNode(r.ChildrenNode.EMPTY_NODE, !1, !1)), e
        }();
    t.ViewCache = o
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = function() {
            function e(e) {
                this.collection_ = e, this.last_ = null
            }
            return e.prototype.get = function() {
                var e = this.collection_.get(),
                    t = r.clone(e);
                return this.last_ && r.forEach(this.last_, function(e, n) {
                    t[e] = t[e] - n
                }), this.last_ = e, t
            }, e
        }();
    t.StatsListener = i
}, function(e, t, n) {
    "use strict";
    var r = this && this.__extends || function() {
        var e = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        };
        return function(t, n) {
            function r() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
        }
    }();
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(44),
        o = n(0),
        a = n(0),
        s = n(0),
        u = n(3),
        c = n(8),
        l = n(264),
        h = n(265),
        f = n(0),
        p = n(154),
        d = n(0),
        v = n(0),
        _ = 1e3,
        y = 3e5,
        g = function(e) {
            function t(n, r, i, o, a, s) {
                var c = e.call(this) || this;
                if (c.repoInfo_ = n, c.onDataUpdate_ = r, c.onConnectStatus_ = i, c.onServerInfoUpdate_ = o, c.authTokenProvider_ = a, c.authOverride_ = s, c.id = t.nextPersistentConnectionId_++, c.log_ = u.logWrapper("p:" + c.id + ":"), c.interruptReasons_ = {}, c.listens_ = {}, c.outstandingPuts_ = [], c.outstandingPutCount_ = 0, c.onDisconnectRequestQueue_ = [], c.connected_ = !1, c.reconnectDelay_ = _, c.maxReconnectDelay_ = y, c.securityDebugCallback_ = null, c.lastSessionId = null, c.establishConnectionTimer_ = null, c.visible_ = !1, c.requestCBHash_ = {}, c.requestNumber_ = 0, c.realtime_ = null, c.authToken_ = null, c.forceTokenRefresh_ = !1, c.invalidAuthTokenCount_ = 0, c.firstConnection_ = !0, c.lastConnectionAttemptTime_ = null, c.lastConnectionEstablishedTime_ = null, s && !v.isNodeSdk()) throw new Error("Auth override specified in options, but not supported on non Node.js platforms");
                return c.scheduleConnect_(0), l.VisibilityMonitor.getInstance().on("visible", c.onVisible_, c), -1 === n.host.indexOf("fblocal") && h.OnlineMonitor.getInstance().on("online", c.onOnline_, c), c
            }
            return r(t, e), t.prototype.sendRequest = function(e, t, n) {
                var r = ++this.requestNumber_,
                    i = {
                        r: r,
                        a: e,
                        b: t
                    };
                this.log_(a.stringify(i)), s.assert(this.connected_, "sendRequest call when we're not connected not allowed."), this.realtime_.sendRequest(i), n && (this.requestCBHash_[r] = n)
            }, t.prototype.listen = function(e, t, n, r) {
                var i = e.queryIdentifier(),
                    o = e.path.toString();
                this.log_("Listen called for " + o + " " + i), this.listens_[o] = this.listens_[o] || {}, s.assert(e.getQueryParams().isDefault() || !e.getQueryParams().loadsAllData(), "listen() called for non-default but complete query"), s.assert(!this.listens_[o][i], "listen() called twice for same path/queryId.");
                var a = {
                    onComplete: r,
                    hashFn: t,
                    query: e,
                    tag: n
                };
                this.listens_[o][i] = a, this.connected_ && this.sendListen_(a)
            }, t.prototype.sendListen_ = function(e) {
                var n = this,
                    r = e.query,
                    i = r.path.toString(),
                    o = r.queryIdentifier();
                this.log_("Listen on " + i + " for " + o);
                var a = {
                    p: i
                };
                e.tag && (a.q = r.queryObject(), a.t = e.tag), a.h = e.hashFn(), this.sendRequest("q", a, function(a) {
                    var s = a.d,
                        u = a.s;
                    t.warnOnListenWarnings_(s, r);
                    (n.listens_[i] && n.listens_[i][o]) === e && (n.log_("listen response", a), "ok" !== u && n.removeListen_(i, o), e.onComplete && e.onComplete(u, s))
                })
            }, t.warnOnListenWarnings_ = function(e, t) {
                if (e && "object" == typeof e && o.contains(e, "w")) {
                    var n = o.safeGet(e, "w");
                    if (Array.isArray(n) && ~n.indexOf("no_index")) {
                        var r = '".indexOn": "' + t.getQueryParams().getIndex().toString() + '"',
                            i = t.path.toString();
                        u.warn("Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding " + r + " at " + i + " to your security rules for better performance.")
                    }
                }
            }, t.prototype.refreshAuthToken = function(e) {
                this.authToken_ = e, this.log_("Auth token refreshed"), this.authToken_ ? this.tryAuth() : this.connected_ && this.sendRequest("unauth", {}, function() {}), this.reduceReconnectDelayIfAdminCredential_(e)
            }, t.prototype.reduceReconnectDelayIfAdminCredential_ = function(e) {
                (e && 40 === e.length || f.isAdmin(e)) && (this.log_("Admin auth credential detected.  Reducing max reconnect time."), this.maxReconnectDelay_ = 3e4)
            }, t.prototype.tryAuth = function() {
                var e = this;
                if (this.connected_ && this.authToken_) {
                    var t = this.authToken_,
                        n = f.isValidFormat(t) ? "auth" : "gauth",
                        r = {
                            cred: t
                        };
                    null === this.authOverride_ ? r.noauth = !0 : "object" == typeof this.authOverride_ && (r.authvar = this.authOverride_), this.sendRequest(n, r, function(n) {
                        var r = n.s,
                            i = n.d || "error";
                        e.authToken_ === t && ("ok" === r ? e.invalidAuthTokenCount_ = 0 : e.onAuthRevoked_(r, i))
                    })
                }
            }, t.prototype.unlisten = function(e, t) {
                var n = e.path.toString(),
                    r = e.queryIdentifier();
                this.log_("Unlisten called for " + n + " " + r), s.assert(e.getQueryParams().isDefault() || !e.getQueryParams().loadsAllData(), "unlisten() called for non-default but complete query");
                this.removeListen_(n, r) && this.connected_ && this.sendUnlisten_(n, r, e.queryObject(), t)
            }, t.prototype.sendUnlisten_ = function(e, t, n, r) {
                this.log_("Unlisten on " + e + " for " + t);
                var i = {
                    p: e
                };
                r && (i.q = n, i.t = r), this.sendRequest("n", i)
            }, t.prototype.onDisconnectPut = function(e, t, n) {
                this.connected_ ? this.sendOnDisconnect_("o", e, t, n) : this.onDisconnectRequestQueue_.push({
                    pathString: e,
                    action: "o",
                    data: t,
                    onComplete: n
                })
            }, t.prototype.onDisconnectMerge = function(e, t, n) {
                this.connected_ ? this.sendOnDisconnect_("om", e, t, n) : this.onDisconnectRequestQueue_.push({
                    pathString: e,
                    action: "om",
                    data: t,
                    onComplete: n
                })
            }, t.prototype.onDisconnectCancel = function(e, t) {
                this.connected_ ? this.sendOnDisconnect_("oc", e, null, t) : this.onDisconnectRequestQueue_.push({
                    pathString: e,
                    action: "oc",
                    data: null,
                    onComplete: t
                })
            }, t.prototype.sendOnDisconnect_ = function(e, t, n, r) {
                var i = {
                    p: t,
                    d: n
                };
                this.log_("onDisconnect " + e, i), this.sendRequest(e, i, function(e) {
                    r && setTimeout(function() {
                        r(e.s, e.d)
                    }, Math.floor(0))
                })
            }, t.prototype.put = function(e, t, n, r) {
                this.putInternal("p", e, t, n, r)
            }, t.prototype.merge = function(e, t, n, r) {
                this.putInternal("m", e, t, n, r)
            }, t.prototype.putInternal = function(e, t, n, r, i) {
                var o = {
                    p: t,
                    d: n
                };
                void 0 !== i && (o.h = i), this.outstandingPuts_.push({
                    action: e,
                    request: o,
                    onComplete: r
                }), this.outstandingPutCount_++;
                var a = this.outstandingPuts_.length - 1;
                this.connected_ ? this.sendPut_(a) : this.log_("Buffering put: " + t)
            }, t.prototype.sendPut_ = function(e) {
                var t = this,
                    n = this.outstandingPuts_[e].action,
                    r = this.outstandingPuts_[e].request,
                    i = this.outstandingPuts_[e].onComplete;
                this.outstandingPuts_[e].queued = this.connected_, this.sendRequest(n, r, function(r) {
                    t.log_(n + " response", r), delete t.outstandingPuts_[e], t.outstandingPutCount_--, 0 === t.outstandingPutCount_ && (t.outstandingPuts_ = []), i && i(r.s, r.d)
                })
            }, t.prototype.reportStats = function(e) {
                var t = this;
                if (this.connected_) {
                    var n = {
                        c: e
                    };
                    this.log_("reportStats", n), this.sendRequest("s", n, function(e) {
                        if ("ok" !== e.s) {
                            var n = e.d;
                            t.log_("reportStats", "Error sending stats: " + n)
                        }
                    })
                }
            }, t.prototype.onDataMessage_ = function(e) {
                if ("r" in e) {
                    this.log_("from server: " + a.stringify(e));
                    var t = e.r,
                        n = this.requestCBHash_[t];
                    n && (delete this.requestCBHash_[t], n(e.b))
                } else {
                    if ("error" in e) throw "A server-side error has occurred: " + e.error;
                    "a" in e && this.onDataPush_(e.a, e.b)
                }
            }, t.prototype.onDataPush_ = function(e, t) {
                this.log_("handleServerMessage", e, t), "d" === e ? this.onDataUpdate_(t.p, t.d, !1, t.t) : "m" === e ? this.onDataUpdate_(t.p, t.d, !0, t.t) : "c" === e ? this.onListenRevoked_(t.p, t.q) : "ac" === e ? this.onAuthRevoked_(t.s, t.d) : "sd" === e ? this.onSecurityDebugPacket_(t) : u.error("Unrecognized action received from server: " + a.stringify(e) + "\nAre you using the latest client?")
            }, t.prototype.onReady_ = function(e, t) {
                this.log_("connection ready"), this.connected_ = !0, this.lastConnectionEstablishedTime_ = (new Date).getTime(), this.handleTimestamp_(e), this.lastSessionId = t, this.firstConnection_ && this.sendConnectStats_(), this.restoreState_(), this.firstConnection_ = !1, this.onConnectStatus_(!0)
            }, t.prototype.scheduleConnect_ = function(e) {
                var t = this;
                s.assert(!this.realtime_, "Scheduling a connect when we're already connected/ing?"), this.establishConnectionTimer_ && clearTimeout(this.establishConnectionTimer_), this.establishConnectionTimer_ = setTimeout(function() {
                    t.establishConnectionTimer_ = null, t.establishConnection_()
                }, Math.floor(e))
            }, t.prototype.onVisible_ = function(e) {
                e && !this.visible_ && this.reconnectDelay_ === this.maxReconnectDelay_ && (this.log_("Window became visible.  Reducing delay."), this.reconnectDelay_ = _, this.realtime_ || this.scheduleConnect_(0)), this.visible_ = e
            }, t.prototype.onOnline_ = function(e) {
                e ? (this.log_("Browser went online."), this.reconnectDelay_ = _, this.realtime_ || this.scheduleConnect_(0)) : (this.log_("Browser went offline.  Killing connection."), this.realtime_ && this.realtime_.close())
            }, t.prototype.onRealtimeDisconnect_ = function() {
                if (this.log_("data client disconnected"), this.connected_ = !1, this.realtime_ = null, this.cancelSentTransactions_(), this.requestCBHash_ = {}, this.shouldReconnect_()) {
                    if (this.visible_) {
                        if (this.lastConnectionEstablishedTime_) {
                            (new Date).getTime() - this.lastConnectionEstablishedTime_ > 3e4 && (this.reconnectDelay_ = _), this.lastConnectionEstablishedTime_ = null
                        }
                    } else this.log_("Window isn't visible.  Delaying reconnect."), this.reconnectDelay_ = this.maxReconnectDelay_, this.lastConnectionAttemptTime_ = (new Date).getTime();
                    var e = (new Date).getTime() - this.lastConnectionAttemptTime_,
                        t = Math.max(0, this.reconnectDelay_ - e);
                    t = Math.random() * t, this.log_("Trying to reconnect in " + t + "ms"), this.scheduleConnect_(t), this.reconnectDelay_ = Math.min(this.maxReconnectDelay_, 1.3 * this.reconnectDelay_)
                }
                this.onConnectStatus_(!1)
            }, t.prototype.establishConnection_ = function() {
                if (this.shouldReconnect_()) {
                    this.log_("Making a connection attempt"), this.lastConnectionAttemptTime_ = (new Date).getTime(), this.lastConnectionEstablishedTime_ = null;
                    var e = this.onDataMessage_.bind(this),
                        n = this.onReady_.bind(this),
                        r = this.onRealtimeDisconnect_.bind(this),
                        i = this.id + ":" + t.nextConnectionId_++,
                        o = this,
                        a = this.lastSessionId,
                        c = !1,
                        l = null,
                        h = function() {
                            l ? l.close() : (c = !0, r())
                        },
                        f = function(e) {
                            s.assert(l, "sendRequest call when we're not connected not allowed."), l.sendRequest(e)
                        };
                    this.realtime_ = {
                        close: h,
                        sendRequest: f
                    };
                    var v = this.forceTokenRefresh_;
                    this.forceTokenRefresh_ = !1, this.authTokenProvider_.getToken(v).then(function(t) {
                        c ? u.log("getToken() completed but was canceled") : (u.log("getToken() completed. Creating connection."), o.authToken_ = t && t.accessToken, l = new p.Connection(i, o.repoInfo_, e, n, r, function(e) {
                            u.warn(e + " (" + o.repoInfo_.toString() + ")"), o.interrupt("server_kill")
                        }, a))
                    }).then(null, function(e) {
                        o.log_("Failed to get token: " + e), c || (d.CONSTANTS.NODE_ADMIN && u.warn(e), h())
                    })
                }
            }, t.prototype.interrupt = function(e) {
                u.log("Interrupting connection for reason: " + e), this.interruptReasons_[e] = !0, this.realtime_ ? this.realtime_.close() : (this.establishConnectionTimer_ && (clearTimeout(this.establishConnectionTimer_), this.establishConnectionTimer_ = null), this.connected_ && this.onRealtimeDisconnect_())
            }, t.prototype.resume = function(e) {
                u.log("Resuming connection for reason: " + e), delete this.interruptReasons_[e], o.isEmpty(this.interruptReasons_) && (this.reconnectDelay_ = _, this.realtime_ || this.scheduleConnect_(0))
            }, t.prototype.handleTimestamp_ = function(e) {
                var t = e - (new Date).getTime();
                this.onServerInfoUpdate_({
                    serverTimeOffset: t
                })
            }, t.prototype.cancelSentTransactions_ = function() {
                for (var e = 0; e < this.outstandingPuts_.length; e++) {
                    var t = this.outstandingPuts_[e];
                    t && "h" in t.request && t.queued && (t.onComplete && t.onComplete("disconnect"), delete this.outstandingPuts_[e], this.outstandingPutCount_--)
                }
                0 === this.outstandingPutCount_ && (this.outstandingPuts_ = [])
            }, t.prototype.onListenRevoked_ = function(e, t) {
                var n;
                n = t ? t.map(function(e) {
                    return u.ObjectToUniqueKey(e)
                }).join("$") : "default";
                var r = this.removeListen_(e, n);
                r && r.onComplete && r.onComplete("permission_denied")
            }, t.prototype.removeListen_ = function(e, t) {
                var n, r = new c.Path(e).toString();
                return void 0 !== this.listens_[r] ? (n = this.listens_[r][t], delete this.listens_[r][t], 0 === o.getCount(this.listens_[r]) && delete this.listens_[r]) : n = void 0, n
            }, t.prototype.onAuthRevoked_ = function(e, t) {
                u.log("Auth token revoked: " + e + "/" + t), this.authToken_ = null, this.forceTokenRefresh_ = !0, this.realtime_.close(), "invalid_token" !== e && "permission_denied" !== e || (this.invalidAuthTokenCount_++, this.invalidAuthTokenCount_ >= 3 && (this.reconnectDelay_ = 3e4, this.authTokenProvider_.notifyForInvalidToken()))
            }, t.prototype.onSecurityDebugPacket_ = function(e) {
                this.securityDebugCallback_ ? this.securityDebugCallback_(e) : "msg" in e && "undefined" != typeof console && e.msg.replace("\n", "\nFIREBASE: ")
            }, t.prototype.restoreState_ = function() {
                var e = this;
                this.tryAuth(), o.forEach(this.listens_, function(t, n) {
                    o.forEach(n, function(t, n) {
                        e.sendListen_(n)
                    })
                });
                for (var t = 0; t < this.outstandingPuts_.length; t++) this.outstandingPuts_[t] && this.sendPut_(t);
                for (; this.onDisconnectRequestQueue_.length;) {
                    var n = this.onDisconnectRequestQueue_.shift();
                    this.sendOnDisconnect_(n.action, n.pathString, n.data, n.onComplete)
                }
            }, t.prototype.sendConnectStats_ = function() {
                var e = {},
                    t = "js";
                d.CONSTANTS.NODE_ADMIN ? t = "admin_node" : d.CONSTANTS.NODE_CLIENT && (t = "node"), e["sdk." + t + "." + i.default.SDK_VERSION.replace(/\./g, "-")] = 1, v.isMobileCordova() ? e["framework.cordova"] = 1 : v.isReactNative() && (e["framework.reactnative"] = 1), this.reportStats(e)
            }, t.prototype.shouldReconnect_ = function() {
                var e = h.OnlineMonitor.getInstance().currentlyOnline();
                return o.isEmpty(this.interruptReasons_) && e
            }, t.nextPersistentConnectionId_ = 0, t.nextConnectionId_ = 0, t
        }(n(157).ServerActions);
    t.PersistentConnection = g
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = function() {
            function e(e) {
                this.allowedEvents_ = e, this.listeners_ = {}, r.assert(Array.isArray(e) && e.length > 0, "Requires a non-empty array")
            }
            return e.prototype.trigger = function(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                if (Array.isArray(this.listeners_[e]))
                    for (var r = this.listeners_[e].slice(), i = 0; i < r.length; i++) r[i].callback.apply(r[i].context, t)
            }, e.prototype.on = function(e, t, n) {
                this.validateEventType_(e), this.listeners_[e] = this.listeners_[e] || [], this.listeners_[e].push({
                    callback: t,
                    context: n
                });
                var r = this.getInitialEvent(e);
                r && t.apply(n, r)
            }, e.prototype.off = function(e, t, n) {
                this.validateEventType_(e);
                for (var r = this.listeners_[e] || [], i = 0; i < r.length; i++)
                    if (r[i].callback === t && (!n || n === r[i].context)) return void r.splice(i, 1)
            }, e.prototype.validateEventType_ = function(e) {
                r.assert(this.allowedEvents_.find(function(t) {
                    return t === e
                }), "Unknown event: " + e)
            }, e
        }();
    t.EventEmitter = i
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(3),
        i = n(86),
        o = n(87),
        a = n(266),
        s = function() {
            function e(e, t, n, i, o, s, u) {
                this.id = e, this.repoInfo_ = t, this.onMessage_ = n, this.onReady_ = i, this.onDisconnect_ = o, this.onKill_ = s, this.lastSessionId = u, this.connectionCount = 0, this.pendingDataMessages = [], this.state_ = 0, this.log_ = r.logWrapper("c:" + this.id + ":"), this.transportManager_ = new a.TransportManager(t), this.log_("Connection created"), this.start_()
            }
            return e.prototype.start_ = function() {
                var e = this,
                    t = this.transportManager_.initialTransport();
                this.conn_ = new t(this.nextTransportId_(), this.repoInfo_, void 0, this.lastSessionId), this.primaryResponsesRequired_ = t.responsesRequiredToBeHealthy || 0;
                var n = this.connReceiver_(this.conn_),
                    i = this.disconnReceiver_(this.conn_);
                this.tx_ = this.conn_, this.rx_ = this.conn_, this.secondaryConn_ = null, this.isHealthy_ = !1, setTimeout(function() {
                    e.conn_ && e.conn_.open(n, i)
                }, Math.floor(0));
                var o = t.healthyTimeout || 0;
                o > 0 && (this.healthyTimeout_ = r.setTimeoutNonBlocking(function() {
                    e.healthyTimeout_ = null, e.isHealthy_ || (e.conn_ && e.conn_.bytesReceived > 102400 ? (e.log_("Connection exceeded healthy timeout but has received " + e.conn_.bytesReceived + " bytes.  Marking connection healthy."), e.isHealthy_ = !0, e.conn_.markConnectionHealthy()) : e.conn_ && e.conn_.bytesSent > 10240 ? e.log_("Connection exceeded healthy timeout but has sent " + e.conn_.bytesSent + " bytes.  Leaving connection alive.") : (e.log_("Closing unhealthy connection after timeout."), e.close()))
                }, Math.floor(o)))
            }, e.prototype.nextTransportId_ = function() {
                return "c:" + this.id + ":" + this.connectionCount++
            }, e.prototype.disconnReceiver_ = function(e) {
                var t = this;
                return function(n) {
                    e === t.conn_ ? t.onConnectionLost_(n) : e === t.secondaryConn_ ? (t.log_("Secondary connection lost."), t.onSecondaryConnectionLost_()) : t.log_("closing an old connection")
                }
            }, e.prototype.connReceiver_ = function(e) {
                var t = this;
                return function(n) {
                    2 != t.state_ && (e === t.rx_ ? t.onPrimaryMessageReceived_(n) : e === t.secondaryConn_ ? t.onSecondaryMessageReceived_(n) : t.log_("message on old connection"))
                }
            }, e.prototype.sendRequest = function(e) {
                var t = {
                    t: "d",
                    d: e
                };
                this.sendData_(t)
            }, e.prototype.tryCleanupConnection = function() {
                this.tx_ === this.secondaryConn_ && this.rx_ === this.secondaryConn_ && (this.log_("cleaning up and promoting a connection: " + this.secondaryConn_.connId), this.conn_ = this.secondaryConn_, this.secondaryConn_ = null)
            }, e.prototype.onSecondaryControl_ = function(e) {
                if ("t" in e) {
                    var t = e.t;
                    "a" === t ? this.upgradeIfSecondaryHealthy_() : "r" === t ? (this.log_("Got a reset on secondary, closing it"), this.secondaryConn_.close(), this.tx_ !== this.secondaryConn_ && this.rx_ !== this.secondaryConn_ || this.close()) : "o" === t && (this.log_("got pong on secondary."), this.secondaryResponsesRequired_--, this.upgradeIfSecondaryHealthy_())
                }
            }, e.prototype.onSecondaryMessageReceived_ = function(e) {
                var t = r.requireKey("t", e),
                    n = r.requireKey("d", e);
                if ("c" == t) this.onSecondaryControl_(n);
                else {
                    if ("d" != t) throw new Error("Unknown protocol layer: " + t);
                    this.pendingDataMessages.push(n)
                }
            }, e.prototype.upgradeIfSecondaryHealthy_ = function() {
                this.secondaryResponsesRequired_ <= 0 ? (this.log_("Secondary connection is healthy."), this.isHealthy_ = !0, this.secondaryConn_.markConnectionHealthy(), this.proceedWithUpgrade_()) : (this.log_("sending ping on secondary."), this.secondaryConn_.send({
                    t: "c",
                    d: {
                        t: "p",
                        d: {}
                    }
                }))
            }, e.prototype.proceedWithUpgrade_ = function() {
                this.secondaryConn_.start(), this.log_("sending client ack on secondary"), this.secondaryConn_.send({
                    t: "c",
                    d: {
                        t: "a",
                        d: {}
                    }
                }), this.log_("Ending transmission on primary"), this.conn_.send({
                    t: "c",
                    d: {
                        t: "n",
                        d: {}
                    }
                }), this.tx_ = this.secondaryConn_, this.tryCleanupConnection()
            }, e.prototype.onPrimaryMessageReceived_ = function(e) {
                var t = r.requireKey("t", e),
                    n = r.requireKey("d", e);
                "c" == t ? this.onControl_(n) : "d" == t && this.onDataMessage_(n)
            }, e.prototype.onDataMessage_ = function(e) {
                this.onPrimaryResponse_(), this.onMessage_(e)
            }, e.prototype.onPrimaryResponse_ = function() {
                this.isHealthy_ || (this.primaryResponsesRequired_--, this.primaryResponsesRequired_ <= 0 && (this.log_("Primary connection is healthy."), this.isHealthy_ = !0, this.conn_.markConnectionHealthy()))
            }, e.prototype.onControl_ = function(e) {
                var t = r.requireKey("t", e);
                if ("d" in e) {
                    var n = e.d;
                    if ("h" === t) this.onHandshake_(n);
                    else if ("n" === t) {
                        this.log_("recvd end transmission on primary"), this.rx_ = this.secondaryConn_;
                        for (var i = 0; i < this.pendingDataMessages.length; ++i) this.onDataMessage_(this.pendingDataMessages[i]);
                        this.pendingDataMessages = [], this.tryCleanupConnection()
                    } else "s" === t ? this.onConnectionShutdown_(n) : "r" === t ? this.onReset_(n) : "e" === t ? r.error("Server Error: " + n) : "o" === t ? (this.log_("got pong on primary."), this.onPrimaryResponse_(), this.sendPingOnPrimaryIfNecessary_()) : r.error("Unknown control packet command: " + t)
                }
            }, e.prototype.onHandshake_ = function(e) {
                var t = e.ts,
                    n = e.v,
                    i = e.h;
                this.sessionId = e.s, this.repoInfo_.updateHost(i), 0 == this.state_ && (this.conn_.start(), this.onConnectionEstablished_(this.conn_, t), o.PROTOCOL_VERSION !== n && r.warn("Protocol version mismatch detected"), this.tryStartUpgrade_())
            }, e.prototype.tryStartUpgrade_ = function() {
                var e = this.transportManager_.upgradeTransport();
                e && this.startUpgrade_(e)
            }, e.prototype.startUpgrade_ = function(e) {
                var t = this;
                this.secondaryConn_ = new e(this.nextTransportId_(), this.repoInfo_, this.sessionId), this.secondaryResponsesRequired_ = e.responsesRequiredToBeHealthy || 0;
                var n = this.connReceiver_(this.secondaryConn_),
                    i = this.disconnReceiver_(this.secondaryConn_);
                this.secondaryConn_.open(n, i), r.setTimeoutNonBlocking(function() {
                    t.secondaryConn_ && (t.log_("Timed out trying to upgrade."), t.secondaryConn_.close())
                }, Math.floor(6e4))
            }, e.prototype.onReset_ = function(e) {
                this.log_("Reset packet received.  New host: " + e), this.repoInfo_.updateHost(e), 1 === this.state_ ? this.close() : (this.closeConnections_(), this.start_())
            }, e.prototype.onConnectionEstablished_ = function(e, t) {
                var n = this;
                this.log_("Realtime connection established."), this.conn_ = e, this.state_ = 1, this.onReady_ && (this.onReady_(t, this.sessionId), this.onReady_ = null), 0 === this.primaryResponsesRequired_ ? (this.log_("Primary connection is healthy."), this.isHealthy_ = !0) : r.setTimeoutNonBlocking(function() {
                    n.sendPingOnPrimaryIfNecessary_()
                }, Math.floor(5e3))
            }, e.prototype.sendPingOnPrimaryIfNecessary_ = function() {
                this.isHealthy_ || 1 !== this.state_ || (this.log_("sending ping on primary."), this.sendData_({
                    t: "c",
                    d: {
                        t: "p",
                        d: {}
                    }
                }))
            }, e.prototype.onSecondaryConnectionLost_ = function() {
                var e = this.secondaryConn_;
                this.secondaryConn_ = null, this.tx_ !== e && this.rx_ !== e || this.close()
            }, e.prototype.onConnectionLost_ = function(e) {
                this.conn_ = null, e || 0 !== this.state_ ? 1 === this.state_ && this.log_("Realtime connection lost.") : (this.log_("Realtime connection failed."), this.repoInfo_.isCacheableHost() && (i.PersistentStorage.remove("host:" + this.repoInfo_.host), this.repoInfo_.internalHost = this.repoInfo_.host)), this.close()
            }, e.prototype.onConnectionShutdown_ = function(e) {
                this.log_("Connection shutdown command received. Shutting down..."), this.onKill_ && (this.onKill_(e), this.onKill_ = null), this.onDisconnect_ = null, this.close()
            }, e.prototype.sendData_ = function(e) {
                if (1 !== this.state_) throw "Connection is not connected";
                this.tx_.send(e)
            }, e.prototype.close = function() {
                2 !== this.state_ && (this.log_("Closing realtime connection."), this.state_ = 2, this.closeConnections_(), this.onDisconnect_ && (this.onDisconnect_(), this.onDisconnect_ = null))
            }, e.prototype.closeConnections_ = function() {
                this.log_("Shutting down all connections"), this.conn_ && (this.conn_.close(), this.conn_ = null), this.secondaryConn_ && (this.secondaryConn_.close(), this.secondaryConn_ = null), this.healthyTimeout_ && (clearTimeout(this.healthyTimeout_), this.healthyTimeout_ = null)
            }, e
        }();
    t.Connection = s
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(3),
        i = n(147),
        o = n(117),
        a = n(267),
        s = n(87),
        u = n(0),
        c = n(0);
    t.FIREBASE_LONGPOLL_START_PARAM = "start", t.FIREBASE_LONGPOLL_CLOSE_COMMAND = "close", t.FIREBASE_LONGPOLL_COMMAND_CB_NAME = "pLPCommand", t.FIREBASE_LONGPOLL_DATA_CB_NAME = "pRTLPCB", t.FIREBASE_LONGPOLL_ID_PARAM = "id", t.FIREBASE_LONGPOLL_PW_PARAM = "pw", t.FIREBASE_LONGPOLL_SERIAL_PARAM = "ser", t.FIREBASE_LONGPOLL_CALLBACK_ID_PARAM = "cb", t.FIREBASE_LONGPOLL_SEGMENT_NUM_PARAM = "seg", t.FIREBASE_LONGPOLL_SEGMENTS_IN_PACKET = "ts", t.FIREBASE_LONGPOLL_DATA_PARAM = "d", t.FIREBASE_LONGPOLL_DISCONN_FRAME_PARAM = "disconn", t.FIREBASE_LONGPOLL_DISCONN_FRAME_REQUEST_PARAM = "dframe";
    var l = function() {
        function e(e, t, n, i) {
            this.connId = e, this.repoInfo = t, this.transportSessionId = n, this.lastSessionId = i, this.bytesSent = 0, this.bytesReceived = 0, this.everConnected_ = !1, this.log_ = r.logWrapper(e), this.stats_ = o.StatsManager.getCollection(t), this.urlFn = function(e) {
                return t.connectionURL(s.LONG_POLLING, e)
            }
        }
        return e.prototype.open = function(e, n) {
            var i = this;
            this.curSegmentNum = 0, this.onDisconnect_ = n, this.myPacketOrderer = new a.PacketReceiver(e), this.isClosed_ = !1, this.connectTimeoutTimer_ = setTimeout(function() {
                i.log_("Timed out trying to connect."), i.onClosed_(), i.connectTimeoutTimer_ = null
            }, Math.floor(3e4)), r.executeWhenDOMReady(function() {
                if (!i.isClosed_) {
                    i.scriptTagHolder = new h(function() {
                        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                        var r = e[0],
                            o = e[1],
                            a = e[2];
                        e[3], e[4];
                        if (i.incrementIncomingBytes_(e), i.scriptTagHolder)
                            if (i.connectTimeoutTimer_ && (clearTimeout(i.connectTimeoutTimer_), i.connectTimeoutTimer_ = null), i.everConnected_ = !0, r == t.FIREBASE_LONGPOLL_START_PARAM) i.id = o, i.password = a;
                            else {
                                if (r !== t.FIREBASE_LONGPOLL_CLOSE_COMMAND) throw new Error("Unrecognized command received: " + r);
                                o ? (i.scriptTagHolder.sendNewPolls = !1, i.myPacketOrderer.closeAfter(o, function() {
                                    i.onClosed_()
                                })) : i.onClosed_()
                            }
                    }, function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        var n = e[0],
                            r = e[1];
                        i.incrementIncomingBytes_(e), i.myPacketOrderer.handleResponse(n, r)
                    }, function() {
                        i.onClosed_()
                    }, i.urlFn);
                    var e = {};
                    e[t.FIREBASE_LONGPOLL_START_PARAM] = "t", e[t.FIREBASE_LONGPOLL_SERIAL_PARAM] = Math.floor(1e8 * Math.random()), i.scriptTagHolder.uniqueCallbackIdentifier && (e[t.FIREBASE_LONGPOLL_CALLBACK_ID_PARAM] = i.scriptTagHolder.uniqueCallbackIdentifier), e[s.VERSION_PARAM] = s.PROTOCOL_VERSION, i.transportSessionId && (e[s.TRANSPORT_SESSION_PARAM] = i.transportSessionId), i.lastSessionId && (e[s.LAST_SESSION_PARAM] = i.lastSessionId), !c.isNodeSdk() && "undefined" != typeof location && location.href && -1 !== location.href.indexOf(s.FORGE_DOMAIN) && (e[s.REFERER_PARAM] = s.FORGE_REF);
                    var n = i.urlFn(e);
                    i.log_("Connecting via long-poll to " + n), i.scriptTagHolder.addTag(n, function() {})
                }
            })
        }, e.prototype.start = function() {
            this.scriptTagHolder.startLongPoll(this.id, this.password), this.addDisconnectPingFrame(this.id, this.password)
        }, e.forceAllow = function() {
            e.forceAllow_ = !0
        }, e.forceDisallow = function() {
            e.forceDisallow_ = !0
        }, e.isAvailable = function() {
            return e.forceAllow_ || !e.forceDisallow_ && "undefined" != typeof document && null != document.createElement && !r.isChromeExtensionContentScript() && !r.isWindowsStoreApp() && !c.isNodeSdk()
        }, e.prototype.markConnectionHealthy = function() {}, e.prototype.shutdown_ = function() {
            this.isClosed_ = !0, this.scriptTagHolder && (this.scriptTagHolder.close(), this.scriptTagHolder = null), this.myDisconnFrame && (document.body.removeChild(this.myDisconnFrame), this.myDisconnFrame = null), this.connectTimeoutTimer_ && (clearTimeout(this.connectTimeoutTimer_), this.connectTimeoutTimer_ = null)
        }, e.prototype.onClosed_ = function() {
            this.isClosed_ || (this.log_("Longpoll is closing itself"), this.shutdown_(), this.onDisconnect_ && (this.onDisconnect_(this.everConnected_), this.onDisconnect_ = null))
        }, e.prototype.close = function() {
            this.isClosed_ || (this.log_("Longpoll is being closed."), this.shutdown_())
        }, e.prototype.send = function(e) {
            var t = u.stringify(e);
            this.bytesSent += t.length, this.stats_.incrementCounter("bytes_sent", t.length);
            for (var n = u.base64Encode(t), i = r.splitStringBySize(n, 1840), o = 0; o < i.length; o++) this.scriptTagHolder.enqueueSegment(this.curSegmentNum, i.length, i[o]), this.curSegmentNum++
        }, e.prototype.addDisconnectPingFrame = function(e, n) {
            if (!c.isNodeSdk()) {
                this.myDisconnFrame = document.createElement("iframe");
                var r = {};
                r[t.FIREBASE_LONGPOLL_DISCONN_FRAME_REQUEST_PARAM] = "t", r[t.FIREBASE_LONGPOLL_ID_PARAM] = e, r[t.FIREBASE_LONGPOLL_PW_PARAM] = n, this.myDisconnFrame.src = this.urlFn(r), this.myDisconnFrame.style.display = "none", document.body.appendChild(this.myDisconnFrame)
            }
        }, e.prototype.incrementIncomingBytes_ = function(e) {
            var t = u.stringify(e).length;
            this.bytesReceived += t, this.stats_.incrementCounter("bytes_received", t)
        }, e
    }();
    t.BrowserPollConnection = l;
    var h = function() {
        function e(n, o, a, s) {
            if (this.onDisconnect = a, this.urlFn = s, this.outstandingRequests = new i.CountedSet, this.pendingSegs = [], this.currentSerial = Math.floor(1e8 * Math.random()), this.sendNewPolls = !0, c.isNodeSdk()) this.commandCB = n, this.onMessageCB = o;
            else {
                this.uniqueCallbackIdentifier = r.LUIDGenerator(), window[t.FIREBASE_LONGPOLL_COMMAND_CB_NAME + this.uniqueCallbackIdentifier] = n, window[t.FIREBASE_LONGPOLL_DATA_CB_NAME + this.uniqueCallbackIdentifier] = o, this.myIFrame = e.createIFrame_();
                var u = "";
                if (this.myIFrame.src && "javascript:" === this.myIFrame.src.substr(0, "javascript:".length)) {
                    u = '<script>document.domain="' + document.domain + '";<\/script>'
                }
                var l = "<html><body>" + u + "</body></html>";
                try {
                    this.myIFrame.doc.open(), this.myIFrame.doc.write(l), this.myIFrame.doc.close()
                } catch (e) {
                    r.log("frame writing exception"), e.stack && r.log(e.stack), r.log(e)
                }
            }
        }
        return e.createIFrame_ = function() {
            var e = document.createElement("iframe");
            if (e.style.display = "none", !document.body) throw "Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
            document.body.appendChild(e);
            try {
                e.contentWindow.document || r.log("No IE domain setting required")
            } catch (n) {
                var t = document.domain;
                e.src = "javascript:void((function(){document.open();document.domain='" + t + "';document.close();})())"
            }
            return e.contentDocument ? e.doc = e.contentDocument : e.contentWindow ? e.doc = e.contentWindow.document : e.document && (e.doc = e.document), e
        }, e.prototype.close = function() {
            var n = this;
            if (this.alive = !1, this.myIFrame && (this.myIFrame.doc.body.innerHTML = "", setTimeout(function() {
                    null !== n.myIFrame && (document.body.removeChild(n.myIFrame), n.myIFrame = null)
                }, Math.floor(0))), c.isNodeSdk() && this.myID) {
                var r = {};
                r[t.FIREBASE_LONGPOLL_DISCONN_FRAME_PARAM] = "t", r[t.FIREBASE_LONGPOLL_ID_PARAM] = this.myID, r[t.FIREBASE_LONGPOLL_PW_PARAM] = this.myPW;
                var i = this.urlFn(r);
                e.nodeRestRequest(i)
            }
            var o = this.onDisconnect;
            o && (this.onDisconnect = null, o())
        }, e.prototype.startLongPoll = function(e, t) {
            for (this.myID = e, this.myPW = t, this.alive = !0; this.newRequest_(););
        }, e.prototype.newRequest_ = function() {
            if (this.alive && this.sendNewPolls && this.outstandingRequests.count() < (this.pendingSegs.length > 0 ? 2 : 1)) {
                this.currentSerial++;
                var e = {};
                e[t.FIREBASE_LONGPOLL_ID_PARAM] = this.myID, e[t.FIREBASE_LONGPOLL_PW_PARAM] = this.myPW, e[t.FIREBASE_LONGPOLL_SERIAL_PARAM] = this.currentSerial;
                for (var n = this.urlFn(e), r = "", i = 0; this.pendingSegs.length > 0;) {
                    if (!(this.pendingSegs[0].d.length + 30 + r.length <= 1870)) break;
                    var o = this.pendingSegs.shift();
                    r = r + "&" + t.FIREBASE_LONGPOLL_SEGMENT_NUM_PARAM + i + "=" + o.seg + "&" + t.FIREBASE_LONGPOLL_SEGMENTS_IN_PACKET + i + "=" + o.ts + "&" + t.FIREBASE_LONGPOLL_DATA_PARAM + i + "=" + o.d, i++
                }
                return n += r, this.addLongPollTag_(n, this.currentSerial), !0
            }
            return !1
        }, e.prototype.enqueueSegment = function(e, t, n) {
            this.pendingSegs.push({
                seg: e,
                ts: t,
                d: n
            }), this.alive && this.newRequest_()
        }, e.prototype.addLongPollTag_ = function(e, t) {
            var n = this;
            this.outstandingRequests.add(t, 1);
            var r = function() {
                    n.outstandingRequests.remove(t), n.newRequest_()
                },
                i = setTimeout(r, Math.floor(25e3));
            this.addTag(e, function() {
                clearTimeout(i), r()
            })
        }, e.prototype.addTag = function(e, t) {
            var n = this;
            c.isNodeSdk() ? this.doNodeLongPoll(e, t) : setTimeout(function() {
                try {
                    if (!n.sendNewPolls) return;
                    var i = n.myIFrame.doc.createElement("script");
                    i.type = "text/javascript", i.async = !0, i.src = e, i.onload = i.onreadystatechange = function() {
                        var e = i.readyState;
                        e && "loaded" !== e && "complete" !== e || (i.onload = i.onreadystatechange = null, i.parentNode && i.parentNode.removeChild(i), t())
                    }, i.onerror = function() {
                        r.log("Long-poll script failed to load: " + e), n.sendNewPolls = !1, n.close()
                    }, n.myIFrame.doc.body.appendChild(i)
                } catch (e) {}
            }, Math.floor(1))
        }, e
    }();
    t.FirebaseIFrameScriptHolder = h
}, function(e, t, n) {
    "use strict";
    (function(e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(44),
            i = n(0),
            o = n(3),
            a = n(117),
            s = n(87),
            u = n(0),
            c = n(86),
            l = n(0),
            h = n(0),
            f = null;
        "undefined" != typeof MozWebSocket ? f = MozWebSocket : "undefined" != typeof WebSocket && (f = WebSocket), t.setWebSocketImpl = function(e) {
            f = e
        };
        var p = function() {
            function t(e, n, r, i) {
                this.connId = e, this.keepaliveTimer = null, this.frames = null, this.totalFrames = 0, this.bytesSent = 0, this.bytesReceived = 0, this.log_ = o.logWrapper(this.connId), this.stats_ = a.StatsManager.getCollection(n), this.connURL = t.connectionURL_(n, r, i)
            }
            return t.connectionURL_ = function(e, t, n) {
                var r = {};
                return r[s.VERSION_PARAM] = s.PROTOCOL_VERSION, !h.isNodeSdk() && "undefined" != typeof location && location.href && -1 !== location.href.indexOf(s.FORGE_DOMAIN) && (r[s.REFERER_PARAM] = s.FORGE_REF), t && (r[s.TRANSPORT_SESSION_PARAM] = t), n && (r[s.LAST_SESSION_PARAM] = n), e.connectionURL(s.WEBSOCKET, r)
            }, t.prototype.open = function(t, n) {
                var i = this;
                this.onDisconnect = n, this.onMessage = t, this.log_("Websocket connecting to " + this.connURL), this.everConnected_ = !1, c.PersistentStorage.set("previous_websocket_failure", !0);
                try {
                    if (h.isNodeSdk()) {
                        var o = u.CONSTANTS.NODE_ADMIN ? "AdminNode" : "Node",
                            a = {
                                headers: {
                                    "User-Agent": "Firebase/" + s.PROTOCOL_VERSION + "/" + r.default.SDK_VERSION + "/" + e.platform + "/" + o
                                }
                            },
                            l = e.env,
                            p = 0 == this.connURL.indexOf("wss://") ? l.HTTPS_PROXY || l.https_proxy : l.HTTP_PROXY || l.http_proxy;
                        p && (a.proxy = {
                            origin: p
                        }), this.mySock = new f(this.connURL, [], a)
                    } else this.mySock = new f(this.connURL)
                } catch (e) {
                    this.log_("Error instantiating WebSocket.");
                    var d = e.message || e.data;
                    return d && this.log_(d), void this.onClosed_()
                }
                this.mySock.onopen = function() {
                    i.log_("Websocket connected."), i.everConnected_ = !0
                }, this.mySock.onclose = function() {
                    i.log_("Websocket connection was disconnected."), i.mySock = null, i.onClosed_()
                }, this.mySock.onmessage = function(e) {
                    i.handleIncomingFrame(e)
                }, this.mySock.onerror = function(e) {
                    i.log_("WebSocket error.  Closing connection.");
                    var t = e.message || e.data;
                    t && i.log_(t), i.onClosed_()
                }
            }, t.prototype.start = function() {}, t.forceDisallow = function() {
                t.forceDisallow_ = !0
            }, t.isAvailable = function() {
                var e = !1;
                if ("undefined" != typeof navigator && navigator.userAgent) {
                    var n = /Android ([0-9]{0,}\.[0-9]{0,})/,
                        r = navigator.userAgent.match(n);
                    r && r.length > 1 && parseFloat(r[1]) < 4.4 && (e = !0)
                }
                return !e && null !== f && !t.forceDisallow_
            }, t.previouslyFailed = function() {
                return c.PersistentStorage.isInMemoryStorage || !0 === c.PersistentStorage.get("previous_websocket_failure")
            }, t.prototype.markConnectionHealthy = function() {
                c.PersistentStorage.remove("previous_websocket_failure")
            }, t.prototype.appendFrame_ = function(e) {
                if (this.frames.push(e), this.frames.length == this.totalFrames) {
                    var t = this.frames.join("");
                    this.frames = null;
                    var n = l.jsonEval(t);
                    this.onMessage(n)
                }
            }, t.prototype.handleNewFrameCount_ = function(e) {
                this.totalFrames = e, this.frames = []
            }, t.prototype.extractFrameCount_ = function(e) {
                if (i.assert(null === this.frames, "We already have a frame buffer"), e.length <= 6) {
                    var t = Number(e);
                    if (!isNaN(t)) return this.handleNewFrameCount_(t), null
                }
                return this.handleNewFrameCount_(1), e
            }, t.prototype.handleIncomingFrame = function(e) {
                if (null !== this.mySock) {
                    var t = e.data;
                    if (this.bytesReceived += t.length, this.stats_.incrementCounter("bytes_received", t.length), this.resetKeepAlive(), null !== this.frames) this.appendFrame_(t);
                    else {
                        var n = this.extractFrameCount_(t);
                        null !== n && this.appendFrame_(n)
                    }
                }
            }, t.prototype.send = function(e) {
                this.resetKeepAlive();
                var t = l.stringify(e);
                this.bytesSent += t.length, this.stats_.incrementCounter("bytes_sent", t.length);
                var n = o.splitStringBySize(t, 16384);
                n.length > 1 && this.sendString_(String(n.length));
                for (var r = 0; r < n.length; r++) this.sendString_(n[r])
            }, t.prototype.shutdown_ = function() {
                this.isClosed_ = !0, this.keepaliveTimer && (clearInterval(this.keepaliveTimer), this.keepaliveTimer = null), this.mySock && (this.mySock.close(), this.mySock = null)
            }, t.prototype.onClosed_ = function() {
                this.isClosed_ || (this.log_("WebSocket is closing itself"), this.shutdown_(), this.onDisconnect && (this.onDisconnect(this.everConnected_), this.onDisconnect = null))
            }, t.prototype.close = function() {
                this.isClosed_ || (this.log_("WebSocket is being closed"), this.shutdown_())
            }, t.prototype.resetKeepAlive = function() {
                var e = this;
                clearInterval(this.keepaliveTimer), this.keepaliveTimer = setInterval(function() {
                    e.mySock && e.sendString_("0"), e.resetKeepAlive()
                }, Math.floor(45e3))
            }, t.prototype.sendString_ = function(e) {
                try {
                    this.mySock.send(e)
                } catch (e) {
                    this.log_("Exception thrown from WebSocket.send():", e.message || e.data, "Closing connection."), setTimeout(this.onClosed_.bind(this), 0)
                }
            }, t.responsesRequiredToBeHealthy = 2, t.healthyTimeout = 3e4, t
        }();
        t.WebSocketConnection = p
    }).call(t, n(129))
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e() {}
        return e.prototype.put = function(e, t, n, r) {}, e.prototype.merge = function(e, t, n, r) {}, e.prototype.refreshAuthToken = function(e) {}, e.prototype.onDisconnectPut = function(e, t, n) {}, e.prototype.onDisconnectMerge = function(e, t, n) {}, e.prototype.onDisconnectCancel = function(e, t) {}, e.prototype.reportStats = function(e) {}, e
    }();
    t.ServerActions = r
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(116),
        i = n(16),
        o = n(22),
        a = n(18),
        s = function() {
            function e(t) {
                this.indexedFilter_ = new r.IndexedFilter(t.getIndex()), this.index_ = t.getIndex(), this.startPost_ = e.getStartPost_(t), this.endPost_ = e.getEndPost_(t)
            }
            return e.prototype.getStartPost = function() {
                return this.startPost_
            }, e.prototype.getEndPost = function() {
                return this.endPost_
            }, e.prototype.matches = function(e) {
                return this.index_.compare(this.getStartPost(), e) <= 0 && this.index_.compare(e, this.getEndPost()) <= 0
            }, e.prototype.updateChild = function(e, t, n, r, i, s) {
                return this.matches(new o.NamedNode(t, n)) || (n = a.ChildrenNode.EMPTY_NODE), this.indexedFilter_.updateChild(e, t, n, r, i, s)
            }, e.prototype.updateFullNode = function(e, t, n) {
                t.isLeafNode() && (t = a.ChildrenNode.EMPTY_NODE);
                var r = t.withIndex(this.index_);
                r = r.updatePriority(a.ChildrenNode.EMPTY_NODE);
                var s = this;
                return t.forEachChild(i.PRIORITY_INDEX, function(e, t) {
                    s.matches(new o.NamedNode(e, t)) || (r = r.updateImmediateChild(e, a.ChildrenNode.EMPTY_NODE))
                }), this.indexedFilter_.updateFullNode(e, r, n)
            }, e.prototype.updatePriority = function(e, t) {
                return e
            }, e.prototype.filtersNodes = function() {
                return !0
            }, e.prototype.getIndexedFilter = function() {
                return this.indexedFilter_
            }, e.prototype.getIndex = function() {
                return this.index_
            }, e.getStartPost_ = function(e) {
                if (e.hasStart()) {
                    var t = e.getIndexStartName();
                    return e.getIndex().makePost(e.getIndexStartValue(), t)
                }
                return e.getIndex().minPost()
            }, e.getEndPost_ = function(e) {
                if (e.hasEnd()) {
                    var t = e.getIndexEndName();
                    return e.getIndex().makePost(e.getIndexEndValue(), t)
                }
                return e.getIndex().maxPost()
            }, e
        }();
    t.RangedFilter = s
}, function(e, t, n) {
    "use strict";
    var r = n(0),
        i = (n.n(r), n(54)),
        o = n(278),
        a = n(279),
        s = n(161),
        u = n(280),
        c = n(119),
        l = "messagingSenderId",
        h = function() {
            function e(e) {
                var t = this;
                if (this.errorFactory_ = new r.ErrorFactory("messaging", "Messaging", i.a.map), !e.options[l] || "string" != typeof e.options[l]) throw this.errorFactory_.create(i.a.codes.BAD_SENDER_ID);
                this.messagingSenderId_ = e.options[l], this.tokenDetailsModel_ = new o.a, this.vapidDetailsModel_ = new a.a, this.iidModel_ = new u.a, this.app = e, this.INTERNAL = {}, this.INTERNAL.delete = function() {
                    return t.delete()
                }
            }
            return e.prototype.getToken = function() {
                var e = this,
                    t = this.getNotificationPermission_();
                if (t !== s.a.granted) return t === s.a.denied ? Promise.reject(this.errorFactory_.create(i.a.codes.NOTIFICATIONS_BLOCKED)) : Promise.resolve(null);
                var n;
                return this.getSWRegistration_().then(function(t) {
                    return n = t, e.tokenDetailsModel_.getTokenDetailsFromSWScope(n.scope)
                }).then(function(t) {
                    return t ? e.manageExistingToken(t, n) : e.getNewToken(n)
                })
            }, e.prototype.manageExistingToken = function(e, t) {
                var n = this;
                return this.isTokenStillValid(e).then(function(r) {
                    if (r) {
                        return Date.now() < e.createTime + 6048e5 ? e.fcmToken : n.updateToken(e, t)
                    }
                    return n.deleteToken(e.fcmToken).then(function() {
                        return n.getNewToken(t)
                    })
                })
            }, e.prototype.isTokenStillValid = function(e) {
                return this.getPublicVapidKey_().then(function(t) {
                    return Object(c.a)(t) === e.vapidKey
                })
            }, e.prototype.updateToken = function(e, t) {
                var n, r, i, o = this;
                return this.getPublicVapidKey_().then(function(e) {
                    return n = e, o.getPushSubscription_(t, n)
                }).then(function(t) {
                    return i = t, o.iidModel_.updateToken(o.messagingSenderId_, e.fcmToken, e.fcmPushSet, i, n)
                }).catch(function(t) {
                    return o.deleteToken(e.fcmToken).then(function() {
                        throw t
                    })
                }).then(function(a) {
                    r = a;
                    var s = {
                        swScope: t.scope,
                        vapidKey: n,
                        subscription: i,
                        fcmSenderId: o.messagingSenderId_,
                        fcmToken: r,
                        fcmPushSet: e.fcmPushSet
                    };
                    return o.tokenDetailsModel_.saveTokenDetails(s)
                }).then(function() {
                    return o.vapidDetailsModel_.saveVapidDetails(t.scope, n)
                }).then(function() {
                    return r
                })
            }, e.prototype.getNewToken = function(e) {
                var t, n, r, i = this;
                return this.getPublicVapidKey_().then(function(n) {
                    return t = n, i.getPushSubscription_(e, t)
                }).then(function(e) {
                    return n = e, i.iidModel_.getToken(i.messagingSenderId_, n, t)
                }).then(function(o) {
                    r = o;
                    var a = {
                        swScope: e.scope,
                        vapidKey: t,
                        subscription: n,
                        fcmSenderId: i.messagingSenderId_,
                        fcmToken: r.token,
                        fcmPushSet: r.pushSet
                    };
                    return i.tokenDetailsModel_.saveTokenDetails(a)
                }).then(function() {
                    return i.vapidDetailsModel_.saveVapidDetails(e.scope, t)
                }).then(function() {
                    return r.token
                })
            }, e.prototype.deleteToken = function(e) {
                var t = this;
                return this.tokenDetailsModel_.deleteToken(e).then(function(e) {
                    return t.iidModel_.deleteToken(e.fcmSenderId, e.fcmToken, e.fcmPushSet)
                }).then(function() {
                    return t.getSWRegistration_().then(function(e) {
                        if (e) return e.pushManager.getSubscription()
                    }).then(function(e) {
                        if (e) return e.unsubscribe()
                    })
                })
            }, e.prototype.getSWRegistration_ = function() {
                throw this.errorFactory_.create(i.a.codes.SHOULD_BE_INHERITED)
            }, e.prototype.getPublicVapidKey_ = function() {
                throw this.errorFactory_.create(i.a.codes.SHOULD_BE_INHERITED)
            }, e.prototype.requestPermission = function() {
                throw this.errorFactory_.create(i.a.codes.AVAILABLE_IN_WINDOW)
            }, e.prototype.getPushSubscription_ = function(e, t) {
                throw this.errorFactory_.create(i.a.codes.AVAILABLE_IN_WINDOW)
            }, e.prototype.useServiceWorker = function(e) {
                throw this.errorFactory_.create(i.a.codes.AVAILABLE_IN_WINDOW)
            }, e.prototype.usePublicVapidKey = function(e) {
                throw this.errorFactory_.create(i.a.codes.AVAILABLE_IN_WINDOW)
            }, e.prototype.onMessage = function(e, t, n) {
                throw this.errorFactory_.create(i.a.codes.AVAILABLE_IN_WINDOW)
            }, e.prototype.onTokenRefresh = function(e, t, n) {
                throw this.errorFactory_.create(i.a.codes.AVAILABLE_IN_WINDOW)
            }, e.prototype.setBackgroundMessageHandler = function(e) {
                throw this.errorFactory_.create(i.a.codes.AVAILABLE_IN_SW)
            }, e.prototype.delete = function() {
                return Promise.all([this.tokenDetailsModel_.closeDatabase(), this.vapidDetailsModel_.closeDatabase()])
            }, e.prototype.getNotificationPermission_ = function() {
                return Notification.permission
            }, e.prototype.getTokenDetailsModel = function() {
                return this.tokenDetailsModel_
            }, e.prototype.getVapidDetailsModel = function() {
                return this.vapidDetailsModel_
            }, e.prototype.getIIDModel = function() {
                return this.iidModel_
            }, e
        }();
    t.a = h
}, function(e, t, n) {
    "use strict";
    var r = n(0),
        i = (n.n(r), n(54)),
        o = function() {
            function e(e, t) {
                this.errorFactory_ = new r.ErrorFactory("messaging", "Messaging", i.a.map), this.DB_NAME_ = e, this.dbVersion_ = t, this.openDbPromise_ = null, this.TRANSACTION_READ_WRITE = "readwrite"
            }
            return e.prototype.openDatabase = function() {
                var e = this;
                return this.openDbPromise_ ? this.openDbPromise_ : (this.openDbPromise_ = new Promise(function(t, n) {
                    var r = indexedDB.open(e.DB_NAME_, e.dbVersion_);
                    r.onerror = function(e) {
                        n(e.target.error)
                    }, r.onsuccess = function(e) {
                        t(e.target.result)
                    }, r.onupgradeneeded = function(t) {
                        try {
                            var r = t.target.result;
                            e.onDBUpgrade(r)
                        } catch (e) {
                            r.close(), n(e)
                        }
                    }
                }), this.openDbPromise_)
            }, e.prototype.closeDatabase = function() {
                var e = this;
                return Promise.resolve().then(function() {
                    if (e.openDbPromise_) return e.openDbPromise_.then(function(t) {
                        t.close(), e.openDbPromise_ = null
                    })
                })
            }, e.prototype.onDBUpgrade = function(e) {
                throw this.errorFactory_.create(i.a.codes.SHOULD_BE_INHERITED)
            }, e
        }();
    t.a = o
}, function(e, t, n) {
    "use strict";
    t.a = {
        granted: "granted",
        default: "default",
        denied: "denied"
    }
}, function(e, t, n) {
    "use strict";
    var r = {
        TYPE_OF_MSG: "firebase-messaging-msg-type",
        DATA: "firebase-messaging-msg-data"
    };
    t.a = {
        PARAMS: r,
        TYPES_OF_MSG: {
            PUSH_MSG_RECEIVED: "push-msg-received",
            NOTIFICATION_CLICKED: "notification-clicked"
        },
        createNewMsg: function(e, t) {
            return n = {}, n[r.TYPE_OF_MSG] = e, n[r.DATA] = t, n;
            var n
        }
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return r
    });
    var r;
    ! function(e) {
        e[e.NO_ERROR = 0] = "NO_ERROR", e[e.NETWORK_ERROR = 1] = "NETWORK_ERROR", e[e.ABORT = 2] = "ABORT"
    }(r || (r = {}))
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return d
    });
    var r = n(121),
        i = n(166),
        o = n(37),
        a = n(94),
        s = n(122),
        u = n(61),
        c = n(165),
        l = n(167),
        h = n(81),
        f = n(23),
        p = n(291),
        d = function() {
            function e(e, t) {
                this.authWrapper = e, t instanceof a.a ? this.location = t : this.location = a.a.makeFromUrl(t)
            }
            return e.prototype.toString = function() {
                return r.g("toString", [], arguments), "gs://" + this.location.bucket + "/" + this.location.path
            }, e.prototype.newRef = function(t, n) {
                return new e(t, n)
            }, e.prototype.mappings = function() {
                return s.b()
            }, e.prototype.child = function(e) {
                r.g("child", [r.e()], arguments);
                var t = c.a(this.location.path, e),
                    n = new a.a(this.location.bucket, t);
                return this.newRef(this.authWrapper, n)
            }, Object.defineProperty(e.prototype, "parent", {
                get: function() {
                    var e = c.c(this.location.path);
                    if (null === e) return null;
                    var t = new a.a(this.location.bucket, e);
                    return this.newRef(this.authWrapper, t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "root", {
                get: function() {
                    var e = new a.a(this.location.bucket, "");
                    return this.newRef(this.authWrapper, e)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "bucket", {
                get: function() {
                    return this.location.bucket
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "fullPath", {
                get: function() {
                    return this.location.path
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "name", {
                get: function() {
                    return c.b(this.location.path)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "storage", {
                get: function() {
                    return this.authWrapper.service()
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.put = function(e, t) {
                return void 0 === t && (t = null), r.g("put", [r.f(), r.b(!0)], arguments), this.throwIfRoot_("put"), new p.a(this, this.authWrapper, this.location, this.mappings(), new i.a(e), t)
            }, e.prototype.putString = function(e, t, n) {
                void 0 === t && (t = h.a.RAW), r.g("putString", [r.e(), r.e(h.c, !0), r.b(!0)], arguments), this.throwIfRoot_("putString");
                var o = h.b(t, e),
                    a = u.a(n);
                return !f.a(a.contentType) && f.a(o.contentType) && (a.contentType = o.contentType), new p.a(this, this.authWrapper, this.location, this.mappings(), new i.a(o.data, !0), a)
            }, e.prototype.delete = function() {
                r.g("delete", [], arguments), this.throwIfRoot_("delete");
                var e = this;
                return this.authWrapper.getAuthToken().then(function(t) {
                    var n = l.d(e.authWrapper, e.location);
                    return e.authWrapper.makeRequest(n, t).getPromise()
                })
            }, e.prototype.getMetadata = function() {
                r.g("getMetadata", [], arguments), this.throwIfRoot_("getMetadata");
                var e = this;
                return this.authWrapper.getAuthToken().then(function(t) {
                    var n = l.e(e.authWrapper, e.location, e.mappings());
                    return e.authWrapper.makeRequest(n, t).getPromise()
                })
            }, e.prototype.updateMetadata = function(e) {
                r.g("updateMetadata", [r.b()], arguments), this.throwIfRoot_("updateMetadata");
                var t = this;
                return this.authWrapper.getAuthToken().then(function(n) {
                    var r = l.i(t.authWrapper, t.location, e, t.mappings());
                    return t.authWrapper.makeRequest(r, n).getPromise()
                })
            }, e.prototype.getDownloadURL = function() {
                return r.g("getDownloadURL", [], arguments), this.throwIfRoot_("getDownloadURL"), this.getMetadata().then(function(e) {
                    var t = e.downloadURLs[0];
                    if (f.a(t)) return t;
                    throw o.l()
                })
            }, e.prototype.throwIfRoot_ = function(e) {
                if ("" === this.location.path) throw o.j(e)
            }, e
        }()
}, function(e, t, n) {
    "use strict";
    t.c = function(e) {
        if (0 == e.length) return null;
        var t = e.lastIndexOf("/");
        return -1 === t ? "" : e.slice(0, t)
    }, t.a = function(e, t) {
        var n = t.split("/").filter(function(e) {
            return e.length > 0
        }).join("/");
        return 0 === e.length ? n : e + "/" + n
    }, t.b = function(e) {
        var t = e.lastIndexOf("/", e.length - 2);
        return -1 === t ? e : e.slice(t + 1)
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return a
    });
    var r = n(289),
        i = n(81),
        o = n(23),
        a = function() {
            function e(e, t) {
                var n = 0,
                    r = "";
                o.d(e) ? (this.data_ = e, n = e.size, r = e.type) : e instanceof ArrayBuffer ? (t ? this.data_ = new Uint8Array(e) : (this.data_ = new Uint8Array(e.byteLength), this.data_.set(new Uint8Array(e))), n = this.data_.length) : e instanceof Uint8Array && (t ? this.data_ = e : (this.data_ = new Uint8Array(e.length), this.data_.set(e)), n = e.length), this.size_ = n, this.type_ = r
            }
            return e.prototype.size = function() {
                return this.size_
            }, e.prototype.type = function() {
                return this.type_
            }, e.prototype.slice = function(t, n) {
                if (o.d(this.data_)) {
                    var i = this.data_,
                        a = r.b(i, t, n);
                    return null === a ? null : new e(a)
                }
                return new e(new Uint8Array(this.data_.buffer, t, n - t), !0)
            }, e.getBlob = function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                if (o.e()) {
                    var a = t.map(function(t) {
                        return t instanceof e ? t.data_ : t
                    });
                    return new e(r.a.apply(null, a))
                }
                var s = t.map(function(e) {
                        return o.j(e) ? i.b(i.a.RAW, e).data : e.data_
                    }),
                    u = 0;
                s.forEach(function(e) {
                    u += e.byteLength
                });
                var c = new Uint8Array(u),
                    l = 0;
                return s.forEach(function(e) {
                    for (var t = 0; t < e.length; t++) c[l++] = e[t]
                }), new e(c, !0)
            }, e.prototype.uploadData = function() {
                return this.data_
            }, e
        }()
}, function(e, t, n) {
    "use strict";

    function r(e) {
        if (!e) throw h.s()
    }

    function i(e, t) {
        return function(n, i) {
            var o = f.a(e, i, t);
            return r(null !== o), o
        }
    }

    function o(e) {
        return function(t, n) {
            var r;
            return (r = 401 === t.getStatus() ? h.q() : 402 === t.getStatus() ? h.n(e.bucket) : 403 === t.getStatus() ? h.r(e.path) : n).setServerResponseProp(n.serverResponseProp()), r
        }
    }

    function a(e) {
        var t = o(e);
        return function(n, r) {
            var i = t(n, r);
            return 404 === n.getStatus() && (i = h.m(e.path)), i.setServerResponseProp(r.serverResponseProp()), i
        }
    }

    function s(e, t, n) {
        var r = p.a(n);
        return r.fullPath = e.path, r.size = t.size(), r.contentType || (r.contentType = function(e, t) {
            return e && e.contentType || t && t.type() || "application/octet-stream"
        }(null, t)), r
    }

    function u(e, t) {
        var n;
        try {
            n = e.getResponseHeader("X-Goog-Upload-Status")
        } catch (e) {
            r(!1)
        }
        var i = t || ["active"];
        return r(c.b(i, n)), n
    }
    t.e = function(e, t, n) {
        var r = t.fullServerUrl(),
            o = _.b(r),
            s = e.maxOperationRetryTime(),
            u = new d.a(o, "GET", i(e, n), s);
        return u.errorHandler = a(t), u
    }, t.i = function(e, t, n, r) {
        var o = t.fullServerUrl(),
            s = _.b(o),
            u = f.d(n, r),
            c = e.maxOperationRetryTime(),
            l = new d.a(s, "PATCH", i(e, r), c);
        return l.headers = {
            "Content-Type": "application/json; charset=utf-8"
        }, l.body = u, l.errorHandler = a(t), l
    }, t.d = function(e, t) {
        var n = t.fullServerUrl(),
            r = _.b(n),
            i = e.maxOperationRetryTime(),
            o = new d.a(r, "DELETE", function(e, t) {}, i);
        return o.successCodes = [200, 204], o.errorHandler = a(t), o
    }, t.g = function(e, t, n, r, a) {
        var u = t.bucketOnlyServerUrl(),
            c = {
                "X-Goog-Upload-Protocol": "multipart"
            },
            p = function() {
                for (var e = "", t = 0; t < 2; t++) e += Math.random().toString().slice(2);
                return e
            }();
        c["Content-Type"] = "multipart/related; boundary=" + p;
        var v = s(t, r, a),
            y = "--" + p + "\r\nContent-Type: application/json; charset=utf-8\r\n\r\n" + f.d(v, n) + "\r\n--" + p + "\r\nContent-Type: " + v.contentType + "\r\n\r\n",
            g = "\r\n--" + p + "--",
            m = l.a.getBlob(y, r, g);
        if (null === m) throw h.d();
        var b = {
                name: v.fullPath
            },
            E = _.d(u),
            w = e.maxUploadRetryTime(),
            T = new d.a(E, "POST", i(e, n), w);
        return T.urlParams = b, T.headers = c, T.body = m.uploadData(), T.errorHandler = o(t), T
    }, n.d(t, "a", function() {
        return y
    }), t.c = function(e, t, n, i, a) {
        var c = t.bucketOnlyServerUrl(),
            l = s(t, i, a),
            h = {
                name: l.fullPath
            },
            p = _.d(c),
            y = {
                "X-Goog-Upload-Protocol": "resumable",
                "X-Goog-Upload-Command": "start",
                "X-Goog-Upload-Header-Content-Length": i.size(),
                "X-Goog-Upload-Header-Content-Type": l.contentType,
                "Content-Type": "application/json; charset=utf-8"
            },
            g = f.d(l, n),
            m = e.maxUploadRetryTime(),
            b = new d.a(p, "POST", function(e, t) {
                u(e);
                var n;
                try {
                    n = e.getResponseHeader("X-Goog-Upload-URL")
                } catch (e) {
                    r(!1)
                }
                return r(v.j(n)), n
            }, m);
        return b.urlParams = h, b.headers = y, b.body = g, b.errorHandler = o(t), b
    }, t.f = function(e, t, n, i) {
        var a = e.maxUploadRetryTime(),
            s = new d.a(n, "POST", function(e, t) {
                var n, o = u(e, ["active", "final"]);
                try {
                    n = e.getResponseHeader("X-Goog-Upload-Size-Received")
                } catch (e) {
                    r(!1)
                }
                var a = parseInt(n, 10);
                return r(!isNaN(a)), new y(a, i.size(), "final" === o)
            }, a);
        return s.headers = {
            "X-Goog-Upload-Command": "query"
        }, s.errorHandler = o(t), s
    }, n.d(t, "h", function() {
        return g
    }), t.b = function(e, t, n, r, a, s, c, l) {
        var f = new y(0, 0);
        if (c ? (f.current = c.current, f.total = c.total) : (f.current = 0, f.total = r.size()), r.size() !== f.total) throw h.p();
        var p = f.total - f.current,
            v = p;
        a > 0 && (v = Math.min(v, a));
        var _ = f.current,
            g = _ + v,
            m = {
                "X-Goog-Upload-Command": v === p ? "upload, finalize" : "upload",
                "X-Goog-Upload-Offset": f.current
            },
            b = r.slice(_, g);
        if (null === b) throw h.d();
        var E = t.maxUploadRetryTime(),
            w = new d.a(n, "POST", function(e, n) {
                var o, a = u(e, ["active", "final"]),
                    c = f.current + v,
                    l = r.size();
                return o = "final" === a ? i(t, s)(e, n) : null, new y(c, l, "final" === a, o)
            }, E);
        return w.headers = m, w.body = b.uploadData(), w.progressCallback = l || null, w.errorHandler = o(e), w
    };
    var c = n(124),
        l = n(166),
        h = n(37),
        f = n(122),
        p = n(61),
        d = n(290),
        v = n(23),
        _ = n(123),
        y = function() {
            return function(e, t, n, r) {
                this.current = e, this.total = t, this.finalized = !!n, this.metadata = r || null
            }
        }(),
        g = 262144
}, function(e, t) {
    var n = {
        utf8: {
            stringToBytes: function(e) {
                return n.bin.stringToBytes(unescape(encodeURIComponent(e)))
            },
            bytesToString: function(e) {
                return decodeURIComponent(escape(n.bin.bytesToString(e)))
            }
        },
        bin: {
            stringToBytes: function(e) {
                for (var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n));
                return t
            },
            bytesToString: function(e) {
                for (var t = [], n = 0; n < e.length; n++) t.push(String.fromCharCode(e[n]));
                return t.join("")
            }
        }
    };
    e.exports = n
}, , function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var i = r(n(30)),
        o = r(n(31)),
        a = r(n(171)),
        s = r(n(186)),
        u = (r(n(212)), r(n(216))),
        c = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        }(n(217)),
        l = r(n(301)),
        h = [],
        f = {
            url: {
                application: "https://gmelius.io/app/",
                dashboard: "https://gmelius.io/",
                gmail: "https://mail.google.com/mail/u/",
                uninstall: "https://gmelius.io/uninstall",
                website: "https://gmelius.com/"
            }
        },
        p = new a.default,
        d = new a.default,
        v = function() {
            var e = (0, o.default)(i.default.mark(function e() {
                var t, n;
                return i.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            t = {
                                install: function() {
                                    u.default.showPostInstall(f)
                                },
                                start: function() {},
                                update: function() {},
                                update_available: function() {
                                    chrome.runtime.reload()
                                }
                            }, chrome.runtime.onInstalled.addListener(function(e) {
                                switch (e.reason) {
                                    case "install":
                                        t.install();
                                        break;
                                    case "update":
                                        t.update()
                                }
                            }), s.default.init(f);
                            try {
                                n = null, chrome.runtime.onConnect.addListener(function(e) {
                                    var t = this;
                                    "ping" === e.name ? e.onMessage.addListener(function() {
                                        var n = (0, o.default)(i.default.mark(function n(r) {
                                            return i.default.wrap(function(t) {
                                                for (;;) switch (t.prev = t.next) {
                                                    case 0:
                                                        e.postMessage("pong");
                                                    case 1:
                                                    case "end":
                                                        return t.stop()
                                                }
                                            }, n, t)
                                        }));
                                        return function(e) {
                                            return n.apply(this, arguments)
                                        }
                                    }()) : "authentication" === e.name ? e.onMessage.addListener(function() {
                                        var r = (0, o.default)(i.default.mark(function r(o) {
                                            var a, s, u, l, f;
                                            return i.default.wrap(function(t) {
                                                for (;;) switch (t.prev = t.next) {
                                                    case 0:
                                                        if (p.has(o.userEmail)) {
                                                            t.next = 13;
                                                            break
                                                        }
                                                        return a = Object({
                                                            apiKey: "AIzaSyCudZoCmJSsDE-ckcL7oylCo9NezoGwjnE",
                                                            authDomain: "gmelius-01.firebaseapp.com",
                                                            databaseURL: "https://gmelius-01.firebaseio.com",
                                                            storageBucket: ""
                                                        }), s = c.initializeApp(a, o.id), (u = s.auth()).setPersistence(c.auth.Auth.Persistence.NONE), l = s.database(), p.set(o.userEmail, l), d.set(o.userEmail, u), u.onAuthStateChanged(function(t) {
                                                            t && (n = t, e.postMessage({
                                                                currentUser: n,
                                                                isKnownId: h.includes(o.id)
                                                            }), h.includes(o.id) || h.push(o.id))
                                                        }), t.next = 11, u.signInWithCustomToken(o.realtimeToken);
                                                    case 11:
                                                        t.next = 17;
                                                        break;
                                                    case 13:
                                                        return (f = d.get(o.userEmail)).onAuthStateChanged(function(t) {
                                                            t ? (n = t, e.postMessage({
                                                                currentUser: n,
                                                                isKnownId: h.includes(o.id)
                                                            }), h.includes(o.id) || h.push(o.id)) : e.postMessage({
                                                                currentUser: null,
                                                                isKnownId: h.includes(o.id)
                                                            })
                                                        }), t.next = 17, f.signInWithCustomToken(o.realtimeToken);
                                                    case 17:
                                                    case "end":
                                                        return t.stop()
                                                }
                                            }, r, t)
                                        }));
                                        return function(e) {
                                            return r.apply(this, arguments)
                                        }
                                    }()) : "accountAuthenticated" === e.name ? e.postMessage(n) : e.onMessage.addListener(function() {
                                        var n = (0, o.default)(i.default.mark(function n(r) {
                                            var a, s, u;
                                            return i.default.wrap(function(n) {
                                                for (;;) switch (n.prev = n.next) {
                                                    case 0:
                                                        if (p.has(r.userEmail)) {
                                                            n.next = 2;
                                                            break
                                                        }
                                                        return n.abrupt("return");
                                                    case 2:
                                                        return a = p.get(r.userEmail).ref(_(r.path, r.userOrAdminEmail) + ("" !== r.suffix ? "/" + r.suffix : "")), s = !0, r.setupRealtime && ["child_added", "child_changed", "child_removed"].forEach(function(n) {
                                                            var r = function() {
                                                                var u = (0, o.default)(i.default.mark(function o(u) {
                                                                    var c;
                                                                    return i.default.wrap(function(t) {
                                                                        for (;;) switch (t.prev = t.next) {
                                                                            case 0:
                                                                                if (c = u.val(), !s) {
                                                                                    t.next = 3;
                                                                                    break
                                                                                }
                                                                                return t.abrupt("return");
                                                                            case 3:
                                                                                try {
                                                                                    e.postMessage({
                                                                                        key: u.key,
                                                                                        val: "child_removed" === n ? null : c
                                                                                    })
                                                                                } catch (e) {
                                                                                    a.off(n, r)
                                                                                }
                                                                                case 4:
                                                                                case "end":
                                                                                    return t.stop()
                                                                        }
                                                                    }, o, t)
                                                                }));
                                                                return function(e) {
                                                                    return u.apply(this, arguments)
                                                                }
                                                            }();
                                                            a.on(n, r)
                                                        }), n.next = 7, a.once("value");
                                                    case 7:
                                                        u = n.sent, s = !1, e.postMessage({
                                                            key: u.key,
                                                            val: u.val()
                                                        });
                                                    case 10:
                                                    case "end":
                                                        return n.stop()
                                                }
                                            }, n, t)
                                        }));
                                        return function(e) {
                                            return n.apply(this, arguments)
                                        }
                                    }())
                                })
                            } catch (e) {}
                            case 1:
                            case "end":
                                return e.stop()
                    }
                }, e, void 0)
            }));
            return function() {
                return e.apply(this, arguments)
            }
        }(),
        _ = function(e, t) {
            return "/" + e + "/" + (0, l.default)(t)
        };
    v()
}, function(e, t, n) {
    e.exports = {
        default: n(172),
        __esModule: !0
    }
}, function(e, t, n) {
    n(62), n(38), n(41), n(173), n(179), n(182), n(184), e.exports = n(4).Map
}, function(e, t, n) {
    "use strict";
    var r = n(174),
        i = n(125);
    e.exports = n(175)("Map", function(e) {
        return function() {
            return e(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }, {
        get: function(e) {
            var t = r.getEntry(i(this, "Map"), e);
            return t && t.v
        },
        set: function(e, t) {
            return r.def(i(this, "Map"), 0 === e ? 0 : e, t)
        }
    }, r, !0)
}, function(e, t, n) {
    "use strict";
    var r = n(9).f,
        i = n(46),
        o = n(77),
        a = n(14),
        s = n(71),
        u = n(50),
        c = n(32),
        l = n(59),
        h = n(84),
        f = n(7),
        p = n(106).fastKey,
        d = n(125),
        v = f ? "_s" : "size",
        _ = function(e, t) {
            var n, r = p(t);
            if ("F" !== r) return e._i[r];
            for (n = e._f; n; n = n.n)
                if (n.k == t) return n
        };
    e.exports = {
        getConstructor: function(e, t, n, c) {
            var l = e(function(e, r) {
                s(e, l, t, "_i"), e._t = t, e._i = i(null), e._f = void 0, e._l = void 0, e[v] = 0, void 0 != r && u(r, n, e[c], e)
            });
            return o(l.prototype, {
                clear: function() {
                    for (var e = d(this, t), n = e._i, r = e._f; r; r = r.n) r.r = !0, r.p && (r.p = r.p.n = void 0), delete n[r.i];
                    e._f = e._l = void 0, e[v] = 0
                },
                delete: function(e) {
                    var n = d(this, t),
                        r = _(n, e);
                    if (r) {
                        var i = r.n,
                            o = r.p;
                        delete n._i[r.i], r.r = !0, o && (o.n = i), i && (i.p = o), n._f == r && (n._f = i), n._l == r && (n._l = o), n[v]--
                    }
                    return !!r
                },
                forEach: function(e) {
                    d(this, t);
                    for (var n, r = a(e, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f;)
                        for (r(n.v, n.k, this); n && n.r;) n = n.p
                },
                has: function(e) {
                    return !!_(d(this, t), e)
                }
            }), f && r(l.prototype, "size", {
                get: function() {
                    return d(this, t)[v]
                }
            }), l
        },
        def: function(e, t, n) {
            var r, i, o = _(e, t);
            return o ? o.v = n : (e._l = o = {
                i: i = p(t, !0),
                k: t,
                v: n,
                p: r = e._l,
                n: void 0,
                r: !1
            }, e._f || (e._f = o), r && (r.n = o), e[v]++, "F" !== i && (e._i[i] = o)), e
        },
        getEntry: _,
        setStrong: function(e, t, n) {
            c(e, t, function(e, n) {
                this._t = d(e, t), this._k = n, this._l = void 0
            }, function() {
                for (var e = this, t = e._k, n = e._l; n && n.r;) n = n.p;
                return e._t && (e._l = n = n ? n.n : e._t._f) ? "keys" == t ? l(0, n.k) : "values" == t ? l(0, n.v) : l(0, [n.k, n.v]) : (e._t = void 0, l(1))
            }, n ? "entries" : "values", !n, !0), h(t)
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(2),
        i = n(11),
        o = n(106),
        a = n(20),
        s = n(5),
        u = n(77),
        c = n(50),
        l = n(71),
        h = n(10),
        f = n(21),
        p = n(9).f,
        d = n(176)(0),
        v = n(7);
    e.exports = function(e, t, n, _, y, g) {
        var m = r[e],
            b = m,
            E = y ? "set" : "add",
            w = b && b.prototype,
            T = {};
        return v && "function" == typeof b && (g || w.forEach && !a(function() {
            (new b).entries().next()
        })) ? (b = t(function(t, n) {
            l(t, b, e, "_c"), t._c = new m, void 0 != n && c(n, y, t[E], t)
        }), d("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), function(e) {
            var t = "add" == e || "set" == e;
            e in w && (!g || "clear" != e) && s(b.prototype, e, function(n, r) {
                if (l(this, b, e), !t && g && !h(n)) return "get" == e && void 0;
                var i = this._c[e](0 === n ? 0 : n, r);
                return t ? this : i
            })
        }), g || p(b.prototype, "size", {
            get: function() {
                return this._c.size
            }
        })) : (b = _.getConstructor(t, e, y, E), u(b.prototype, n), o.NEED = !0), f(b, e), T[e] = b, i(i.G + i.W + i.F, T), g || _.setStrong(b, e, y), b
    }
}, function(e, t, n) {
    var r = n(14),
        i = n(47),
        o = n(49),
        a = n(40),
        s = n(177);
    e.exports = function(e, t) {
        var n = 1 == e,
            u = 2 == e,
            c = 3 == e,
            l = 4 == e,
            h = 6 == e,
            f = 5 == e || h,
            p = t || s;
        return function(t, s, d) {
            for (var v, _, y = o(t), g = i(y), m = r(s, d, 3), b = a(g.length), E = 0, w = n ? p(t, b) : u ? p(t, 0) : void 0; b > E; E++)
                if ((f || E in g) && (v = g[E], _ = m(v, E, y), e))
                    if (n) w[E] = _;
                    else if (_) switch (e) {
                case 3:
                    return !0;
                case 5:
                    return v;
                case 6:
                    return E;
                case 2:
                    w.push(v)
            } else if (l) return !1;
            return h ? -1 : c || l ? l : w
        }
    }
}, function(e, t, n) {
    var r = n(178);
    e.exports = function(e, t) {
        return new(r(e))(t)
    }
}, function(e, t, n) {
    var r = n(10),
        i = n(126),
        o = n(1)("species");
    e.exports = function(e) {
        var t;
        return i(e) && ("function" != typeof(t = e.constructor) || t !== Array && !i(t.prototype) || (t = void 0), r(t) && null === (t = t[o]) && (t = void 0)), void 0 === t ? Array : t
    }
}, function(e, t, n) {
    var r = n(11);
    r(r.P + r.R, "Map", {
        toJSON: n(180)("Map")
    })
}, function(e, t, n) {
    var r = n(36),
        i = n(181);
    e.exports = function(e) {
        return function() {
            if (r(this) != e) throw TypeError(e + "#toJSON isn't generic");
            return i(this)
        }
    }
}, function(e, t, n) {
    var r = n(50);
    e.exports = function(e, t) {
        var n = [];
        return r(e, !1, n.push, n, t), n
    }
}, function(e, t, n) {
    n(183)("Map")
}, function(e, t, n) {
    "use strict";
    var r = n(11);
    e.exports = function(e) {
        r(r.S, e, {
            of: function() {
                for (var e = arguments.length, t = Array(e); e--;) t[e] = arguments[e];
                return new this(t)
            }
        })
    }
}, function(e, t, n) {
    n(185)("Map")
}, function(e, t, n) {
    "use strict";
    var r = n(11),
        i = n(19),
        o = n(14),
        a = n(50);
    e.exports = function(e) {
        r(r.S, e, {
            from: function(e) {
                var t, n, r, s, u = arguments[1];
                return i(this), (t = void 0 !== u) && i(u), void 0 == e ? new this : (n = [], t ? (r = 0, s = o(u, arguments[2], 2), a(e, !1, function(e) {
                    n.push(s(e, r++))
                })) : a(e, !1, n.push, n), new this(n))
            }
        })
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var i = r(n(30)),
        o = r(n(31)),
        a = r(n(42)),
        s = r(n(43)),
        u = r(n(190)),
        c = r(n(211)),
        l = function() {
            function e() {
                (0, a.default)(this, e)
            }
            return (0, s.default)(e, null, [{
                key: "init",
                value: function() {
                    var e = (0, o.default)(i.default.mark(function e(t) {
                        return i.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, u.default.init();
                                case 2:
                                    u.default.set(u.default.normal), c.default.init(t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }]), e
        }();
    e.exports = l
}, function(e, t, n) {
    e.exports = {
        default: n(188),
        __esModule: !0
    }
}, function(e, t, n) {
    n(189);
    var r = n(4).Object;
    e.exports = function(e, t, n) {
        return r.defineProperty(e, t, n)
    }
}, function(e, t, n) {
    var r = n(11);
    r(r.S + r.F * !n(7), "Object", {
        defineProperty: n(9).f
    })
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var i = r(n(30)),
        o = r(n(31)),
        a = r(n(42)),
        s = r(n(43)),
        u = r(n(127)),
        c = null,
        l = [],
        h = function() {
            function e() {
                (0, a.default)(this, e)
            }
            return (0, s.default)(e, null, [{
                key: "init",
                value: function() {
                    var e = (0, o.default)(i.default.mark(function e() {
                        var t, n, r;
                        return i.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, u.default.fetch();
                                case 2:
                                    t = e.sent, n = null, r = null, t && t.blacklist && t.blacklist.blacklist && t.blacklist.blacklist.blacklist ? n = t.blacklist.blacklist.blacklist : t && t.blacklist && t.blacklist.blacklist ? n = t.blacklist.blacklist : t && t.blacklist && (n = t.blacklist), t && t.blacklist && t.blacklist.blacklist && t.blacklist.blacklist.dictionary ? r = t.blacklist.blacklist.dictionary : t && t.blacklist && t.blacklist.dictionary ? r = t.blacklist.dictionary : t && t.dictionary && (r = t.dictionary), c = {
                                        blacklist: new RegExp(n.join("|"), "g"),
                                        dictionary: new RegExp(r.join("|"), "g")
                                    };
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "normal",
                value: function(e) {
                    if ("image" === e.type || "ping" === e.type || "xmlhttprequest" === e.type) {
                        if (l.filter(function(t) {
                                return t.url === e.url
                            }).length > 0) return {
                            cancel: !0
                        };
                        var t = {};
                        t.url = e.url.split("://").pop().split(".").join("").split("/").join(""), t.lastChar = t.url.substr(t.url.length - 1), t.fileType = e.url.split(".").pop(), t.fileName = e.url.split("/").pop().replace("." + t.fileType, "");
                        var n = !1;
                        if (t.url.match(c.dictionary) && t.url.match(c.dictionary).join("").split("").length > 0 && "=" === t.lastChar ? n = !0 : t.url.match(c.dictionary) && t.url.match(c.dictionary).join("").split("").length > 0 && /[?&=]/.test(t.url) ? n = !0 : t.url.match(c.blacklist) && t.url.match(c.blacklist).join("").split("").length > 0 && (n = !0), e.url.split("#").length > 1 && (l = l.filter(function(e) {
                                return e.timestamp > Math.floor(Date.now() / 1e3) - 3600
                            })).push({
                                url: e.url.split("#")[0],
                                timestamp: Math.floor(Date.now() / 1e3)
                            }), n) return {
                            cancel: !0
                        }
                    }
                }
            }, {
                key: "reset",
                value: function(e) {
                    chrome.webRequest.onBeforeRequest.hasListener(e) && chrome.webRequest.onBeforeRequest.removeListener(e)
                }
            }, {
                key: "set",
                value: function(t) {
                    e.reset(t), chrome.webRequest.onBeforeRequest.addListener(t, {
                        urls: ["https://*.googleusercontent.com/proxy/*=s0-d-e1-ft*", "https://gml.email/*"]
                    }, ["blocking"])
                }
            }]), e
        }();
    e.exports = h
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.endpoints = t.fetchJSON = void 0;
    var i = r(n(30)),
        o = r(n(83)),
        a = r(n(78)),
        s = r(n(192)),
        u = r(n(196)),
        c = r(n(31)),
        l = (t.fetchJSON = function() {
            var e = (0, c.default)(i.default.mark(function e(t) {
                var n, r, h, f, p = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return i.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return n = {}, r = t, h = "/" + p, f = d.method || null, "object" === (void 0 === t ? "undefined" : (0, u.default)(t)) && (r = t.url, (f = t.method) || (f = t.method)), "object" === (void 0 === p ? "undefined" : (0, u.default)(p)) && ("GET" === f || "PUT" === f || "DELETE" === f ? h = "" !== l.default.stringify(p) ? "?" + l.default.stringify(p) : "" : "POST" === f ? (h = "", d.body = p) : h = ""), d.method = f, (n = (0, s.default)({}, {
                                mode: "cors",
                                headers: {
                                    Accept: "application/json",
                                    "Content-Type": "application/json"
                                }
                            }, d)).body && (n.body = (0, a.default)(n.body)), e.abrupt("return", new o.default(function() {
                                var e = (0, c.default)(i.default.mark(function e(t, o) {
                                    var a, s, u;
                                    return i.default.wrap(function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, a = "v4", e.next = 4, window.fetch("https://api.gmelius.com/" + a + "/" + r + h, n);
                                            case 4:
                                                if (!((s = e.sent).status >= 200 && s.status < 400)) {
                                                    e.next = 9;
                                                    break
                                                }
                                                t(s.json()), e.next = 17;
                                                break;
                                            case 9:
                                                if (401 !== s.status) {
                                                    e.next = 13;
                                                    break
                                                }
                                                o({
                                                    message: s.statusText
                                                }), e.next = 17;
                                                break;
                                            case 13:
                                                return e.next = 15, s.json();
                                            case 15:
                                                u = e.sent, o(u);
                                            case 17:
                                                e.next = 22;
                                                break;
                                            case 19:
                                                e.prev = 19, e.t0 = e.catch(0), o(e.t0);
                                            case 22:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e, this, [
                                        [0, 19]
                                    ])
                                }));
                                return function(t, n) {
                                    return e.apply(this, arguments)
                                }
                            }()));
                        case 10:
                        case "end":
                            return e.stop()
                    }
                }, e, this)
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(), r(n(207))),
        h = r(n(210));
    t.endpoints = h.default
}, function(e, t, n) {
    e.exports = {
        default: n(193),
        __esModule: !0
    }
}, function(e, t, n) {
    n(194), e.exports = n(4).Object.assign
}, function(e, t, n) {
    var r = n(11);
    r(r.S + r.F, "Object", {
        assign: n(195)
    })
}, function(e, t, n) {
    "use strict";
    var r = n(39),
        i = n(108),
        o = n(85),
        a = n(49),
        s = n(47),
        u = Object.assign;
    e.exports = !u || n(20)(function() {
        var e = {},
            t = {},
            n = Symbol(),
            r = "abcdefghijklmnopqrst";
        return e[n] = 7, r.split("").forEach(function(e) {
            t[e] = e
        }), 7 != u({}, e)[n] || Object.keys(u({}, t)).join("") != r
    }) ? function(e, t) {
        for (var n = a(e), u = arguments.length, c = 1, l = i.f, h = o.f; u > c;)
            for (var f, p = s(arguments[c++]), d = l ? r(p).concat(l(p)) : r(p), v = d.length, _ = 0; v > _;) h.call(p, f = d[_++]) && (n[f] = p[f]);
        return n
    } : u
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.__esModule = !0;
    var i = r(n(197)),
        o = r(n(199)),
        a = "function" == typeof o.default && "symbol" == typeof i.default ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof o.default && e.constructor === o.default && e !== o.default.prototype ? "symbol" : typeof e
        };
    t.default = "function" == typeof o.default && "symbol" === a(i.default) ? function(e) {
        return void 0 === e ? "undefined" : a(e)
    } : function(e) {
        return e && "function" == typeof o.default && e.constructor === o.default && e !== o.default.prototype ? "symbol" : void 0 === e ? "undefined" : a(e)
    }
}, function(e, t, n) {
    e.exports = {
        default: n(198),
        __esModule: !0
    }
}, function(e, t, n) {
    n(38), n(41), e.exports = n(109).f("iterator")
}, function(e, t, n) {
    e.exports = {
        default: n(200),
        __esModule: !0
    }
}, function(e, t, n) {
    n(201), n(62), n(205), n(206), e.exports = n(4).Symbol
}, function(e, t, n) {
    "use strict";
    var r = n(2),
        i = n(12),
        o = n(7),
        a = n(11),
        s = n(57),
        u = n(106).KEY,
        c = n(20),
        l = n(34),
        h = n(21),
        f = n(29),
        p = n(1),
        d = n(109),
        v = n(110),
        _ = n(202),
        y = n(126),
        g = n(6),
        m = n(15),
        b = n(45),
        E = n(28),
        w = n(46),
        T = n(203),
        S = n(204),
        C = n(9),
        N = n(39),
        P = S.f,
        O = C.f,
        I = T.f,
        A = r.Symbol,
        R = r.JSON,
        k = R && R.stringify,
        D = p("_hidden"),
        L = p("toPrimitive"),
        x = {}.propertyIsEnumerable,
        M = l("symbol-registry"),
        F = l("symbols"),
        j = l("op-symbols"),
        U = Object.prototype,
        W = "function" == typeof A,
        B = r.QObject,
        V = !B || !B.prototype || !B.prototype.findChild,
        q = o && c(function() {
            return 7 != w(O({}, "a", {
                get: function() {
                    return O(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        }) ? function(e, t, n) {
            var r = P(U, t);
            r && delete U[t], O(e, t, n), r && e !== U && O(U, t, r)
        } : O,
        K = function(e) {
            var t = F[e] = w(A.prototype);
            return t._k = e, t
        },
        G = W && "symbol" == typeof A.iterator ? function(e) {
            return "symbol" == typeof e
        } : function(e) {
            return e instanceof A
        },
        H = function(e, t, n) {
            return e === U && H(j, t, n), g(e), t = b(t, !0), g(n), i(F, t) ? (n.enumerable ? (i(e, D) && e[D][t] && (e[D][t] = !1), n = w(n, {
                enumerable: E(0, !1)
            })) : (i(e, D) || O(e, D, E(1, {})), e[D][t] = !0), q(e, t, n)) : O(e, t, n)
        },
        Q = function(e, t) {
            g(e);
            for (var n, r = _(t = m(t)), i = 0, o = r.length; o > i;) H(e, n = r[i++], t[n]);
            return e
        },
        Y = function(e) {
            var t = x.call(this, e = b(e, !0));
            return !(this === U && i(F, e) && !i(j, e)) && (!(t || !i(this, e) || !i(F, e) || i(this, D) && this[D][e]) || t)
        },
        X = function(e, t) {
            if (e = m(e), t = b(t, !0), e !== U || !i(F, t) || i(j, t)) {
                var n = P(e, t);
                return !n || !i(F, t) || i(e, D) && e[D][t] || (n.enumerable = !0), n
            }
        },
        z = function(e) {
            for (var t, n = I(m(e)), r = [], o = 0; n.length > o;) i(F, t = n[o++]) || t == D || t == u || r.push(t);
            return r
        },
        J = function(e) {
            for (var t, n = e === U, r = I(n ? j : m(e)), o = [], a = 0; r.length > a;) !i(F, t = r[a++]) || n && !i(U, t) || o.push(F[t]);
            return o
        };
    W || (s((A = function() {
        if (this instanceof A) throw TypeError("Symbol is not a constructor!");
        var e = f(arguments.length > 0 ? arguments[0] : void 0),
            t = function(n) {
                this === U && t.call(j, n), i(this, D) && i(this[D], e) && (this[D][e] = !1), q(this, e, E(1, n))
            };
        return o && V && q(U, e, {
            configurable: !0,
            set: t
        }), K(e)
    }).prototype, "toString", function() {
        return this._k
    }), S.f = X, C.f = H, n(128).f = T.f = z, n(85).f = Y, n(108).f = J, o && !n(33) && s(U, "propertyIsEnumerable", Y, !0), d.f = function(e) {
        return K(p(e))
    }), a(a.G + a.W + a.F * !W, {
        Symbol: A
    });
    for (var $ = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), Z = 0; $.length > Z;) p($[Z++]);
    for (var ee = N(p.store), te = 0; ee.length > te;) v(ee[te++]);
    a(a.S + a.F * !W, "Symbol", {
        for: function(e) {
            return i(M, e += "") ? M[e] : M[e] = A(e)
        },
        keyFor: function(e) {
            if (!G(e)) throw TypeError(e + " is not a symbol!");
            for (var t in M)
                if (M[t] === e) return t
        },
        useSetter: function() {
            V = !0
        },
        useSimple: function() {
            V = !1
        }
    }), a(a.S + a.F * !W, "Object", {
        create: function(e, t) {
            return void 0 === t ? w(e) : Q(w(e), t)
        },
        defineProperty: H,
        defineProperties: Q,
        getOwnPropertyDescriptor: X,
        getOwnPropertyNames: z,
        getOwnPropertySymbols: J
    }), R && a(a.S + a.F * (!W || c(function() {
        var e = A();
        return "[null]" != k([e]) || "{}" != k({
            a: e
        }) || "{}" != k(Object(e))
    })), "JSON", {
        stringify: function(e) {
            if (void 0 !== e && !G(e)) {
                for (var t, n, r = [e], i = 1; arguments.length > i;) r.push(arguments[i++]);
                return "function" == typeof(t = r[1]) && (n = t), !n && y(t) || (t = function(e, t) {
                    if (n && (t = n.call(this, e, t)), !G(t)) return t
                }), r[1] = t, k.apply(R, r)
            }
        }
    }), A.prototype[L] || n(5)(A.prototype, L, A.prototype.valueOf), h(A, "Symbol"), h(Math, "Math", !0), h(r.JSON, "JSON", !0)
}, function(e, t, n) {
    var r = n(39),
        i = n(108),
        o = n(85);
    e.exports = function(e) {
        var t = r(e),
            n = i.f;
        if (n)
            for (var a, s = n(e), u = o.f, c = 0; s.length > c;) u.call(e, a = s[c++]) && t.push(a);
        return t
    }
}, function(e, t, n) {
    var r = n(15),
        i = n(128).f,
        o = {}.toString,
        a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    e.exports.f = function(e) {
        return a && "[object Window]" == o.call(e) ? function(e) {
            try {
                return i(e)
            } catch (e) {
                return a.slice()
            }
        }(e) : i(r(e))
    }
}, function(e, t, n) {
    var r = n(85),
        i = n(28),
        o = n(15),
        a = n(45),
        s = n(12),
        u = n(56),
        c = Object.getOwnPropertyDescriptor;
    t.f = n(7) ? c : function(e, t) {
        if (e = o(e), t = a(t, !0), u) try {
            return c(e, t)
        } catch (e) {}
        if (s(e, t)) return i(!r.f.call(e, t), e[t])
    }
}, function(e, t, n) {
    n(110)("asyncIterator")
}, function(e, t, n) {
    n(110)("observable")
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        return t.encode ? t.strict ? o(e) : encodeURIComponent(e) : e
    }

    function i(e) {
        return Array.isArray(e) ? e.sort() : "object" == typeof e ? i(Object.keys(e)).sort(function(e, t) {
            return Number(e) - Number(t)
        }).map(function(t) {
            return e[t]
        }) : e
    }
    var o = n(208),
        a = n(209);
    t.extract = function(e) {
        return e.split("?")[1] || ""
    }, t.parse = function(e, t) {
        var n = function(e) {
                var t;
                switch (e.arrayFormat) {
                    case "index":
                        return function(e, n, r) {
                            t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), t ? (void 0 === r[e] && (r[e] = {}), r[e][t[1]] = n) : r[e] = n
                        };
                    case "bracket":
                        return function(e, n, r) {
                            t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), t ? void 0 !== r[e] ? r[e] = [].concat(r[e], n) : r[e] = [n] : r[e] = n
                        };
                    default:
                        return function(e, t, n) {
                            void 0 !== n[e] ? n[e] = [].concat(n[e], t) : n[e] = t
                        }
                }
            }(t = a({
                arrayFormat: "none"
            }, t)),
            r = Object.create(null);
        return "string" != typeof e ? r : (e = e.trim().replace(/^(\?|#|&)/, "")) ? (e.split("&").forEach(function(e) {
            var t = e.replace(/\+/g, " ").split("="),
                i = t.shift(),
                o = t.length > 0 ? t.join("=") : void 0;
            o = void 0 === o ? null : decodeURIComponent(o), n(decodeURIComponent(i), o, r)
        }), Object.keys(r).sort().reduce(function(e, t) {
            var n = r[t];
            return Boolean(n) && "object" == typeof n && !Array.isArray(n) ? e[t] = i(n) : e[t] = n, e
        }, Object.create(null))) : r
    }, t.stringify = function(e, t) {
        var n = function(e) {
            switch (e.arrayFormat) {
                case "index":
                    return function(t, n, i) {
                        return null === n ? [r(t, e), "[", i, "]"].join("") : [r(t, e), "[", r(i, e), "]=", r(n, e)].join("")
                    };
                case "bracket":
                    return function(t, n) {
                        return null === n ? r(t, e) : [r(t, e), "[]=", r(n, e)].join("")
                    };
                default:
                    return function(t, n) {
                        return null === n ? r(t, e) : [r(t, e), "=", r(n, e)].join("")
                    }
            }
        }(t = a({
            encode: !0,
            strict: !0,
            arrayFormat: "none"
        }, t));
        return e ? Object.keys(e).sort().map(function(i) {
            var o = e[i];
            if (void 0 === o) return "";
            if (null === o) return r(i, t);
            if (Array.isArray(o)) {
                var a = [];
                return o.slice().forEach(function(e) {
                    void 0 !== e && a.push(n(i, e, a.length))
                }), a.join("&")
            }
            return r(i, t) + "=" + r(o, t)
        }).filter(function(e) {
            return e.length > 0
        }).join("&") : ""
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return encodeURIComponent(e).replace(/[!'()*]/g, function(e) {
            return "%" + e.charCodeAt(0).toString(16).toUpperCase()
        })
    }
}, function(e, t, n) {
    "use strict";
    var r = Object.getOwnPropertySymbols,
        i = Object.prototype.hasOwnProperty,
        o = Object.prototype.propertyIsEnumerable;
    e.exports = function() {
        try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
            for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
            if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) {
                    return t[e]
                }).join("")) return !1;
            var r = {};
            return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                r[e] = e
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
        } catch (e) {
            return !1
        }
    }() ? Object.assign : function(e, t) {
        for (var n, a, s = function(e) {
                if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(e)
            }(e), u = 1; u < arguments.length; u++) {
            n = Object(arguments[u]);
            for (var c in n) i.call(n, c) && (s[c] = n[c]);
            if (r) {
                a = r(n);
                for (var l = 0; l < a.length; l++) o.call(n, a[l]) && (s[a[l]] = n[a[l]])
            }
        }
        return s
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = {
        userAnon: {
            userFlow: {
                url: "users/userFlow",
                method: "POST"
            },
            subscribe: {
                url: "users/subscribe",
                method: "POST"
            },
            addusers: {
                url: "users/addusers",
                method: "POST"
            },
            cancel: {
                url: "users/cancel",
                method: "POST"
            },
            updatecompany: {
                url: "users/updatecompany",
                method: "POST"
            },
            authenticate: {
                url: "users/authenticate",
                method: "POST"
            }
        },
        oauth: {
            getUrl: {
                url: "oauth/geturl",
                method: "GET"
            },
            getUrlPost: {
                url: "oauth/geturl",
                method: "POST"
            },
            callback: {
                url: "oauth/callback",
                method: "GET"
            },
            token: {
                url: "oauth/token",
                method: "POST"
            },
            validateUser: {
                url: "oauth/validateUser",
                method: "POST"
            },
            authCode: {
                url: "oauth/authCode",
                method: "POST"
            }
        },
        auth: {
            firebaseAuth: {
                url: "firebase/auth",
                method: "GET"
            }
        },
        stripe: {
            webhook: {
                url: "stripe/webhook",
                method: "POST"
            }
        },
        pubsub: {
            post: {
                url: "pubsub",
                method: "POST"
            }
        },
        riffsy: {
            query: {
                url: "riffsy/query",
                method: "GET"
            }
        },
        imageFinder: {
            get: {
                url: "image",
                method: "GET"
            },
            json: {
                url: "image/json",
                method: "GET"
            }
        },
        trackingPixel: {
            get: {
                url: "t/image",
                method: "GET"
            }
        },
        blacklistTrackers: {
            list: {
                url: "blacklistTrackers",
                method: "GET"
            }
        },
        message: {
            send: {
                postProcessing: {
                    url: "message/send/postprocessing",
                    method: "POST"
                }
            }
        },
        features: {
            liveFeed: {
                get: {
                    url: "activity",
                    method: "GET"
                }
            },
            label: {
                modify: {
                    url: "features/label/modify",
                    method: "POST"
                },
                count: {
                    url: "features/label/count",
                    method: "GET"
                }
            },
            note: {
                get: {
                    url: "features/note",
                    method: "GET"
                },
                create: {
                    url: "features/note",
                    method: "POST"
                },
                createDemo: {
                    url: "features/note/demo",
                    method: "POST"
                },
                delete: {
                    url: "features/note",
                    method: "DELETE"
                },
                deleteDemo: {
                    url: "features/note/demo",
                    method: "DELETE"
                },
                search: {
                    url: "features/note/search",
                    method: "GET"
                }
            },
            rules: {
                get: {
                    url: "features/rules",
                    method: "GET"
                }
            },
            sharedEmail: {
                getSharedEmails: {
                    url: "features/sharedEmail",
                    method: "GET"
                },
                share: {
                    url: "features/sharedEmail",
                    method: "POST"
                },
                bulkShare: {
                    url: "features/sharedEmail/bulk",
                    method: "POST"
                },
                getSharedEmailUsers: {
                    url: "features/sharedEmail/users",
                    method: "GET"
                },
                getSharedEmailIdFromThreadId: {
                    url: "features/sharedEmail/convertThreadId",
                    method: "GET"
                },
                convertSharedEmailId: {
                    url: "features/sharedEmail/convertSharedEmailId",
                    method: "POST"
                }
            },
            sharedLabels: {
                getLinkedSharedLabels: {
                    url: "features/sharedLabels/linked",
                    method: "GET"
                }
            },
            assignment: {
                getThreadAssignee: {
                    url: "features/assignment/assign",
                    method: "GET"
                },
                getThreadsAssignmentData: {
                    url: "features/assignment/assign/threadsData",
                    method: "POST"
                },
                assignToUser: {
                    url: "features/assignment/assign",
                    method: "POST"
                },
                bulkAssignToUser: {
                    url: "features/assignment/assign/bulk",
                    method: "POST"
                },
                getThreadStatuses: {
                    url: "features/assignment/status",
                    method: "GET"
                },
                getThreadHistory: {
                    url: "features/sharedEmail/activity",
                    method: "GET"
                },
                updateThreadStatus: {
                    url: "features/assignment/status",
                    method: "PUT"
                },
                getCustomerTags: {
                    url: "features/assignment/tags",
                    method: "GET"
                },
                getThreadTags: {
                    url: "features/assignment/tags",
                    method: "GET"
                },
                postThreadTag: {
                    url: "features/assignment/tags",
                    method: "POST"
                },
                deleteThreadTag: {
                    url: "features/assignment/tags",
                    method: "DELETE"
                }
            },
            presence: {
                getPath: {
                    url: "presence/path",
                    method: "GET"
                },
                putPresence: {
                    url: "presence",
                    method: "PUT"
                },
                deletePresence: {
                    url: "presence",
                    method: "DELETE"
                }
            },
            schedule: {
                create: {
                    url: "features/schedule/create",
                    method: "POST"
                },
                delete: {
                    url: "features/schedule",
                    method: "DELETE"
                },
                get: {
                    url: "features/schedule",
                    method: "GET"
                }
            },
            sequences: {
                get: {
                    url: "features/sequence",
                    method: "GET"
                },
                enroll: {
                    url: "features/sequence/enroll",
                    method: "POST"
                },
                enrollCheck: {
                    url: "features/sequence/enroll/check",
                    method: "POST"
                }
            },
            snooze: {
                get: {
                    url: "features/snooze",
                    method: "GET"
                },
                create: {
                    url: "features/snooze",
                    method: "POST"
                },
                delete: {
                    url: "features/snooze",
                    method: "DELETE"
                }
            },
            stamp: {
                create: {
                    url: "features/stamp",
                    method: "POST"
                }
            },
            thread: {
                count: {
                    url: "features/thread/count",
                    method: "GET"
                }
            },
            templates: {
                get: {
                    url: "templates",
                    method: "GET"
                },
                create: {
                    url: "templates",
                    method: "POST"
                }
            },
            track: {
                create: {
                    url: "features/emailactivity",
                    method: "POST"
                },
                list: {
                    url: "features/emailactivity",
                    method: "GET"
                },
                getByThread: {
                    url: "features/emailactivity/bythread",
                    method: "GET"
                },
                write: {
                    url: "features/emailactivity/write",
                    method: "POST"
                },
                read: {
                    url: "features/emailactivity/read",
                    method: "POST"
                },
                mute: {
                    url: "features/emailactivity/mute",
                    method: "POST"
                },
                retrieve: {
                    url: "features/emailactivity/retrieve",
                    method: "GET"
                }
            },
            linkTracker: {
                create: {
                    url: "features/emaillinkactivity",
                    method: "POST"
                },
                getLinkOpensForConversation: {
                    url: "features/emaillinkactivity/getOpensConversation",
                    method: "GET"
                }
            },
            kanban: {
                read: {
                    url: "features/kanban/board",
                    method: "GET"
                },
                getFullCardData: {
                    url: "features/kanban/getFullCardData",
                    method: "GET"
                },
                getBoards: {
                    url: "features/kanban/boards",
                    method: "GET"
                },
                getBoardsWithColumns: {
                    url: "features/kanban/columns",
                    method: "GET"
                },
                getArchives: {
                    url: "features/kanban/archived",
                    method: "GET"
                },
                updateCardDate: {
                    url: "features/kanban/cardDate",
                    method: "PUT"
                },
                updateBoardName: {
                    url: "features/kanban/boardName",
                    method: "PUT"
                },
                updateCard: {
                    url: "features/kanban/card",
                    method: "PUT"
                },
                updateCards: {
                    url: "features/kanban/cards",
                    method: "PUT"
                },
                restoreArchivedCard: {
                    url: "features/kanban/restoreArchivedCard",
                    method: "PUT"
                },
                updateColumns: {
                    url: "features/kanban/columns",
                    method: "PUT"
                },
                updateTask: {
                    url: "features/kanban/task",
                    method: "PUT"
                },
                setBoardAsPrimary: {
                    url: "features/kanban/setBoardAsPrimary",
                    method: "PUT"
                },
                setBoardAsReadOnly: {
                    url: "features/kanban/setBoardAsReadOnly",
                    method: "PUT"
                },
                setBoardDueDateSort: {
                    url: "features/kanban/setBoardDueDateSort",
                    method: "PUT"
                },
                updateColumn: {
                    url: "features/kanban/column",
                    method: "PUT"
                },
                moveCard: {
                    url: "features/kanban/moveCard",
                    method: "PUT"
                },
                insertBoard: {
                    url: "features/kanban/board",
                    method: "POST"
                },
                insertColumn: {
                    url: "features/kanban/column",
                    method: "POST"
                },
                insertCard: {
                    url: "features/kanban/card",
                    method: "POST"
                },
                insertCustomCard: {
                    url: "features/kanban/customCard",
                    method: "POST"
                },
                insertTask: {
                    url: "features/kanban/task",
                    method: "POST"
                },
                getTasks: {
                    url: "features/kanban/tasks",
                    method: "GET"
                },
                shareBoard: {
                    url: "features/kanban/shareBoard",
                    method: "POST"
                },
                userHasLeft: {
                    url: "features/kanban/userHasLeft",
                    method: "POST"
                },
                userHasJoined: {
                    url: "features/kanban/userHasJoined",
                    method: "POST"
                },
                whoIsOnline: {
                    url: "features/kanban/whoIsOnline",
                    method: "POST"
                },
                deleteBoard: {
                    url: "features/kanban/board",
                    method: "DELETE"
                },
                deleteColumn: {
                    url: "features/kanban/column",
                    method: "DELETE"
                },
                deleteCard: {
                    url: "features/kanban/card",
                    method: "DELETE"
                },
                deleteArchivedCard: {
                    url: "features/kanban/archivedCard",
                    method: "DELETE"
                },
                deleteTask: {
                    url: "features/kanban/task",
                    method: "DELETE"
                },
                upvoteCard: {
                    url: "features/kanban/upvote",
                    method: "POST"
                },
                getAttachment: {
                    url: "features/kanban/attachment",
                    method: "GET"
                },
                getBoardActivity: {
                    url: "features/kanban/activity",
                    method: "GET"
                },
                getUnseenCountBoardActivity: {
                    url: "features/kanban/activity/unseenCount",
                    method: "GET"
                }
            },
            peopleWidget: {
                get: {
                    url: "features/peopleWidget",
                    method: "GET"
                }
            }
        },
        webhook: {
            get: {
                url: "webhook/events",
                method: "GET"
            },
            complete: {
                url: "webhook/complete",
                method: "DELETE"
            }
        },
        userAuth: {
            set: {
                url: "users/set",
                method: "POST"
            },
            get: {
                url: "users",
                method: "GET"
            },
            getInfo: {
                url: "users/info",
                method: "GET"
            },
            handle: {
                url: "users/handle",
                method: "POST"
            },
            info: {
                url: "users/info",
                method: "POST"
            },
            teamEmails: {
                url: "users/team",
                method: "GET"
            },
            teamDetails: {
                url: "users/team/full",
                method: "GET"
            },
            suggestedTeam: {
                url: "users/team/suggested",
                method: "GET"
            },
            firebaseAuth: {
                url: "firebase/auth",
                method: "GET"
            }
        },
        settings: {
            get: {
                url: "settings",
                method: "GET"
            },
            set: {
                url: "settings",
                method: "PUT"
            },
            refresh: {
                url: "settings/refresh",
                method: "POST"
            }
        },
        plans: {
            get: {
                url: "plans",
                method: "GET"
            }
        },
        sharedTemplates: {
            get: {
                url: "templates/shared",
                method: "GET"
            }
        },
        contact: {
            getContactInfo: {
                url: "users/getContactInfo",
                method: "POST"
            }
        },
        subscriptions: {
            findUsers: {
                url: "users/subscription/findusers",
                method: "GET"
            }
        },
        sign: {
            create: {
                url: "sign/create",
                method: "POST"
            },
            callback: {
                url: "sign/callback",
                method: "POST"
            }
        },
        events: {
            trigger: {
                url: "events/trigger",
                method: "POST"
            },
            incrementProperty: {
                url: "events/incrementProperty",
                method: "POST"
            }
        },
        onboarding: {
            get: {
                url: "onboarding",
                method: "GET"
            },
            set: {
                url: "onboarding",
                method: "PUT"
            },
            invite: {
                url: "onboarding/invite",
                method: "POST"
            }
        }
    }
}, function(e, t, n) {
    "use strict";
    e.exports = {
        init: function(e) {
            chrome.runtime.setUninstallURL(e.url.uninstall), chrome.runtime.onStartup.addListener(function() {
                on.start()
            }), chrome.runtime.onUpdateAvailable.addListener(function() {
                on.update_available()
            }), chrome.runtime.onSuspend.addListener(function() {})
        }
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var i = r(n(30)),
        o = r(n(31)),
        a = r(n(42)),
        s = r(n(43)),
        u = r(n(213)),
        c = r(n(214)),
        l = function() {
            function e() {
                (0, a.default)(this, e)
            }
            return (0, s.default)(e, null, [{
                key: "init",
                value: function() {
                    var e = (0, o.default)(i.default.mark(function e(t) {
                        var n;
                        return i.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = new u.default, e.next = 3, n.set();
                                case 3:
                                    c.default.start(t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }]), e
        }();
    e.exports = l
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var i = r(n(78)),
        o = r(n(30)),
        a = r(n(31)),
        s = r(n(42)),
        u = r(n(43)),
        c = r(n(127)),
        l = function() {
            function e() {
                (0, s.default)(this, e)
            }
            return (0, u.default)(e, [{
                key: "set",
                value: function() {
                    var t = (0, a.default)(o.default.mark(function t() {
                        var n;
                        return o.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return safari.extension.setContentBlocker(null), t.next = 3, e.rules();
                                case 3:
                                    n = t.sent, safari.extension.setContentBlocker(n);
                                case 5:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()
            }], [{
                key: "rules",
                value: function() {
                    var e = (0, a.default)(o.default.mark(function e() {
                        var t, n, r;
                        return o.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, c.default.fetch();
                                case 2:
                                    return t = e.sent, n = t.blacklist.concat(t.dictionary), r = n.map(function(e) {
                                        return {
                                            action: {
                                                type: "block"
                                            },
                                            trigger: {
                                                "url-filter": e,
                                                "resource-type": ["image"],
                                                "load-type": ["third-party"],
                                                "unless-domain": ["google.com", "gmelius.io"]
                                            }
                                        }
                                    }), e.abrupt("return", (0, i.default)(r));
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }]), e
        }();
    e.exports = l
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var i = r(n(42)),
        o = r(n(43)),
        a = r(n(215)),
        s = function() {
            function e() {
                (0, i.default)(this, e)
            }
            return (0, o.default)(e, null, [{
                key: "install",
                value: function(e) {
                    0 === a.default.reload() && a.default.create()
                }
            }, {
                key: "update",
                value: function(e) {
                    a.default.reload()
                }
            }, {
                key: "start",
                value: function(t) {
                    var n = window.localStorage.getItem("gmelius:version");
                    n !== safari.extension.displayVersion && (n ? e.update(t) : e.install(t), window.localStorage.setItem("gmelius:version", safari.extension.displayVersion))
                }
            }]), e
        }();
    e.exports = s
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var i = r(n(42)),
        o = r(n(43)),
        a = function() {
            function e() {
                (0, i.default)(this, e)
            }
            return (0, o.default)(e, null, [{
                key: "reload",
                value: function() {
                    for (var e = 0, t = 0; t < safari.application.browserWindows.length; t++)
                        for (var n = 0; n < safari.application.browserWindows[t].tabs.length; n++) {
                            var r = safari.application.browserWindows[t].tabs[n];
                            r.url && r.url.match("mail.google.com") && (r.url = r.url, e++)
                        }
                    return e
                }
            }, {
                key: "create",
                value: function() {
                    safari.application.activeBrowserWindow.openTab().url = "https://mail.google.com"
                }
            }]), e
        }();
    e.exports = a
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var i = r(n(42)),
        o = r(n(43)),
        a = function() {
            function e() {
                (0, i.default)(this, e)
            }
            return (0, o.default)(e, null, [{
                key: "reload",
                value: function(e, t, n, r) {
                    chrome.tabs.query({
                        active: !0
                    }, function(i) {
                        chrome.tabs.update(i.id, {
                            url: e ? r.url.gmail + n + "/#" + t + "/" + encodeURI(e) : r.url.gmail,
                            active: !0
                        })
                    })
                }
            }, {
                key: "showPostInstall",
                value: function(e) {
                    chrome.tabs.query({
                        url: ["*://gmelius.io/*"]
                    }, function(e) {
                        e.length > 0 ? e.forEach(function(e) {
                            chrome.tabs.update(e.id, {
                                url: e.url,
                                active: !0
                            })
                        }) : chrome.tabs.create({
                            url: "https://gmelius.io/signup?ref=extension"
                        })
                    })
                }
            }]), e
        }();
    e.exports = a
}, function(e, t, n) {
    var r = n(218);
    n(238), n(240), n(275), n(284), e.exports = r
}, function(e, t, n) {
    n(219), e.exports = n(44).default
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(220),
        i = (n.n(r), n(224)),
        o = (n.n(i), n(225));
    n.n(o)
}, function(e, t, n) {
    (function(e) {
        var t = function() {
            if (void 0 !== e) return e;
            if ("undefined" != typeof window) return window;
            if ("undefined" != typeof self) return self;
            throw new Error("unable to locate global object")
        }();
        "undefined" == typeof Promise && (t.Promise = Promise = n(221))
    }).call(t, n(111))
}, function(e, t, n) {
    (function(t) {
        ! function(n) {
            function r() {}

            function i(e) {
                if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
                if ("function" != typeof e) throw new TypeError("not a function");
                this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], c(e, this)
            }

            function o(e, t) {
                for (; 3 === e._state;) e = e._value;
                0 !== e._state ? (e._handled = !0, i._immediateFn(function() {
                    var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                    if (null !== n) {
                        var r;
                        try {
                            r = n(e._value)
                        } catch (e) {
                            return void s(t.promise, e)
                        }
                        a(t.promise, r)
                    } else(1 === e._state ? a : s)(t.promise, e._value)
                })) : e._deferreds.push(t)
            }

            function a(e, t) {
                try {
                    if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
                    if (t && ("object" == typeof t || "function" == typeof t)) {
                        var n = t.then;
                        if (t instanceof i) return e._state = 3, e._value = t, void u(e);
                        if ("function" == typeof n) return void c(function(e, t) {
                            return function() {
                                e.apply(t, arguments)
                            }
                        }(n, t), e)
                    }
                    e._state = 1, e._value = t, u(e)
                } catch (t) {
                    s(e, t)
                }
            }

            function s(e, t) {
                e._state = 2, e._value = t, u(e)
            }

            function u(e) {
                2 === e._state && 0 === e._deferreds.length && i._immediateFn(function() {
                    e._handled || i._unhandledRejectionFn(e._value)
                });
                for (var t = 0, n = e._deferreds.length; t < n; t++) o(e, e._deferreds[t]);
                e._deferreds = null
            }

            function c(e, t) {
                var n = !1;
                try {
                    e(function(e) {
                        n || (n = !0, a(t, e))
                    }, function(e) {
                        n || (n = !0, s(t, e))
                    })
                } catch (e) {
                    if (n) return;
                    n = !0, s(t, e)
                }
            }
            var l = setTimeout;
            i.prototype.catch = function(e) {
                return this.then(null, e)
            }, i.prototype.then = function(e, t) {
                var n = new this.constructor(r);
                return o(this, new function(e, t, n) {
                    this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
                }(e, t, n)), n
            }, i.all = function(e) {
                var t = Array.prototype.slice.call(e);
                return new i(function(e, n) {
                    function r(o, a) {
                        try {
                            if (a && ("object" == typeof a || "function" == typeof a)) {
                                var s = a.then;
                                if ("function" == typeof s) return void s.call(a, function(e) {
                                    r(o, e)
                                }, n)
                            }
                            t[o] = a, 0 == --i && e(t)
                        } catch (e) {
                            n(e)
                        }
                    }
                    if (0 === t.length) return e([]);
                    for (var i = t.length, o = 0; o < t.length; o++) r(o, t[o])
                })
            }, i.resolve = function(e) {
                return e && "object" == typeof e && e.constructor === i ? e : new i(function(t) {
                    t(e)
                })
            }, i.reject = function(e) {
                return new i(function(t, n) {
                    n(e)
                })
            }, i.race = function(e) {
                return new i(function(t, n) {
                    for (var r = 0, i = e.length; r < i; r++) e[r].then(t, n)
                })
            }, i._immediateFn = "function" == typeof t && function(e) {
                t(e)
            } || function(e) {
                l(e, 0)
            }, i._unhandledRejectionFn = function(e) {
                "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
            }, i._setImmediateFn = function(e) {
                i._immediateFn = e
            }, i._setUnhandledRejectionFn = function(e) {
                i._unhandledRejectionFn = e
            }, void 0 !== e && e.exports ? e.exports = i : n.Promise || (n.Promise = i)
        }(this)
    }).call(t, n(222).setImmediate)
}, function(e, t, n) {
    function r(e, t) {
        this._id = e, this._clearFn = t
    }
    var i = Function.prototype.apply;
    t.setTimeout = function() {
        return new r(i.call(setTimeout, window, arguments), clearTimeout)
    }, t.setInterval = function() {
        return new r(i.call(setInterval, window, arguments), clearInterval)
    }, t.clearTimeout = t.clearInterval = function(e) {
        e && e.close()
    }, r.prototype.unref = r.prototype.ref = function() {}, r.prototype.close = function() {
        this._clearFn.call(window, this._id)
    }, t.enroll = function(e, t) {
        clearTimeout(e._idleTimeoutId), e._idleTimeout = t
    }, t.unenroll = function(e) {
        clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
    }, t._unrefActive = t.active = function(e) {
        clearTimeout(e._idleTimeoutId);
        var t = e._idleTimeout;
        t >= 0 && (e._idleTimeoutId = setTimeout(function() {
            e._onTimeout && e._onTimeout()
        }, t))
    }, n(223), t.setImmediate = setImmediate, t.clearImmediate = clearImmediate
}, function(e, t, n) {
    (function(e, t) {
        ! function(e, n) {
            "use strict";

            function r(e) {
                delete s[e]
            }

            function i(e) {
                if (u) setTimeout(i, 0, e);
                else {
                    var t = s[e];
                    if (t) {
                        u = !0;
                        try {
                            ! function(e) {
                                var t = e.callback,
                                    r = e.args;
                                switch (r.length) {
                                    case 0:
                                        t();
                                        break;
                                    case 1:
                                        t(r[0]);
                                        break;
                                    case 2:
                                        t(r[0], r[1]);
                                        break;
                                    case 3:
                                        t(r[0], r[1], r[2]);
                                        break;
                                    default:
                                        t.apply(n, r)
                                }
                            }(t)
                        } finally {
                            r(e), u = !1
                        }
                    }
                }
            }
            if (!e.setImmediate) {
                var o, a = 1,
                    s = {},
                    u = !1,
                    c = e.document,
                    l = Object.getPrototypeOf && Object.getPrototypeOf(e);
                l = l && l.setTimeout ? l : e, "[object process]" === {}.toString.call(e.process) ? o = function(e) {
                    t.nextTick(function() {
                        i(e)
                    })
                } : function() {
                    if (e.postMessage && !e.importScripts) {
                        var t = !0,
                            n = e.onmessage;
                        return e.onmessage = function() {
                            t = !1
                        }, e.postMessage("", "*"), e.onmessage = n, t
                    }
                }() ? function() {
                    var t = "setImmediate$" + Math.random() + "$",
                        n = function(n) {
                            n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && i(+n.data.slice(t.length))
                        };
                    e.addEventListener ? e.addEventListener("message", n, !1) : e.attachEvent("onmessage", n), o = function(n) {
                        e.postMessage(t + n, "*")
                    }
                }() : e.MessageChannel ? function() {
                    var e = new MessageChannel;
                    e.port1.onmessage = function(e) {
                        i(e.data)
                    }, o = function(t) {
                        e.port2.postMessage(t)
                    }
                }() : c && "onreadystatechange" in c.createElement("script") ? function() {
                    var e = c.documentElement;
                    o = function(t) {
                        var n = c.createElement("script");
                        n.onreadystatechange = function() {
                            i(t), n.onreadystatechange = null, e.removeChild(n), n = null
                        }, e.appendChild(n)
                    }
                }() : o = function(e) {
                    setTimeout(i, 0, e)
                }, l.setImmediate = function(e) {
                    "function" != typeof e && (e = new Function("" + e));
                    for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
                    var r = {
                        callback: e,
                        args: t
                    };
                    return s[a] = r, o(a), a++
                }, l.clearImmediate = r
            }
        }("undefined" == typeof self ? void 0 === e ? this : e : self)
    }).call(t, n(111), n(129))
}, function(e, t) {
    Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
        value: function(e) {
            if (null == this) throw new TypeError('"this" is null or not defined');
            var t = Object(this),
                n = t.length >>> 0;
            if ("function" != typeof e) throw new TypeError("predicate must be a function");
            for (var r = arguments[1], i = 0; i < n;) {
                var o = t[i];
                if (e.call(r, o, i, t)) return o;
                i++
            }
        }
    })
}, function(e, t) {
    Array.prototype.findIndex || Object.defineProperty(Array.prototype, "findIndex", {
        value: function(e) {
            if (null == this) throw new TypeError('"this" is null or not defined');
            var t = Object(this),
                n = t.length >>> 0;
            if ("function" != typeof e) throw new TypeError("predicate must be a function");
            for (var r = arguments[1], i = 0; i < n;) {
                var o = t[i];
                if (e.call(r, o, i, t)) return i;
                i++
            }
            return -1
        }
    })
}, function(e, t, n) {
    "use strict";

    function r() {
        function e(e) {
            return e = e || s, a(l, e) || i("no-app", {
                name: e
            }), l[e]
        }

        function t() {
            return Object.keys(l).map(function(e) {
                return l[e]
            })
        }

        function n(e, t) {
            Object.keys(h).forEach(function(n) {
                var r = u(e, n);
                null !== r && f[r] && f[r](t, e)
            })
        }

        function u(e, t) {
            if ("serverAuth" === t) return null;
            var n = t;
            e.options;
            return n
        }
        var l = {},
            h = {},
            f = {},
            p = {
                __esModule: !0,
                initializeApp: function(e, t) {
                    void 0 === t ? t = s : "string" == typeof t && "" !== t || i("bad-app-name", {
                        name: t + ""
                    }), a(l, t) && i("duplicate-app", {
                        name: t
                    });
                    var r = new c(e, t, p);
                    return l[t] = r, n(r, "create"), r
                },
                app: e,
                apps: null,
                Promise: Promise,
                SDK_VERSION: "4.10.0",
                INTERNAL: {
                    registerService: function(n, r, a, s, u) {
                        h[n] && i("duplicate-service", {
                            name: n
                        }), h[n] = r, s && (f[n] = s, t().forEach(function(e) {
                            s("create", e)
                        }));
                        var l = function(t) {
                            return void 0 === t && (t = e()), "function" != typeof t[n] && i("invalid-app-argument", {
                                name: n
                            }), t[n]()
                        };
                        return void 0 !== a && Object(o.deepExtend)(l, a), p[n] = l, c.prototype[n] = function() {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            return this._getService.bind(this, n).apply(this, u ? e : [])
                        }, l
                    },
                    createFirebaseNamespace: r,
                    extendNamespace: function(e) {
                        Object(o.deepExtend)(p, e)
                    },
                    createSubscribe: o.createSubscribe,
                    ErrorFactory: o.ErrorFactory,
                    removeApp: function(e) {
                        n(l[e], "delete"), delete l[e]
                    },
                    factories: h,
                    useAsService: u,
                    Promise: Promise,
                    deepExtend: o.deepExtend
                }
            };
        return Object(o.patchProperty)(p, "default", p), Object.defineProperty(p, "apps", {
            get: t
        }), Object(o.patchProperty)(e, "App", c), p
    }

    function i(e, t) {
        throw l.create(e, t)
    }
    t.a = r;
    var o = n(0),
        a = (n.n(o), function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }),
        s = "[DEFAULT]",
        u = [],
        c = function() {
            function e(e, t, n) {
                this.firebase_ = n, this.isDeleted_ = !1, this.services_ = {}, this.name_ = t, this.options_ = Object(o.deepCopy)(e), this.INTERNAL = {
                    getUid: function() {
                        return null
                    },
                    getToken: function() {
                        return Promise.resolve(null)
                    },
                    addAuthTokenListener: function(e) {
                        u.push(e), setTimeout(function() {
                            return e(null)
                        }, 0)
                    },
                    removeAuthTokenListener: function(e) {
                        u = u.filter(function(t) {
                            return t !== e
                        })
                    }
                }
            }
            return Object.defineProperty(e.prototype, "name", {
                get: function() {
                    return this.checkDestroyed_(), this.name_
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "options", {
                get: function() {
                    return this.checkDestroyed_(), this.options_
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.delete = function() {
                var e = this;
                return new Promise(function(t) {
                    e.checkDestroyed_(), t()
                }).then(function() {
                    e.firebase_.INTERNAL.removeApp(e.name_);
                    var t = [];
                    return Object.keys(e.services_).forEach(function(n) {
                        Object.keys(e.services_[n]).forEach(function(r) {
                            t.push(e.services_[n][r])
                        })
                    }), Promise.all(t.map(function(e) {
                        return e.INTERNAL.delete()
                    }))
                }).then(function() {
                    e.isDeleted_ = !0, e.services_ = {}
                })
            }, e.prototype._getService = function(e, t) {
                if (void 0 === t && (t = s), this.checkDestroyed_(), this.services_[e] || (this.services_[e] = {}), !this.services_[e][t]) {
                    var n = t !== s ? t : void 0,
                        r = this.firebase_.INTERNAL.factories[e](this, this.extendApp.bind(this), n);
                    this.services_[e][t] = r
                }
                return this.services_[e][t]
            }, e.prototype.extendApp = function(e) {
                var t = this;
                Object(o.deepExtend)(this, e), e.INTERNAL && e.INTERNAL.addAuthTokenListener && (u.forEach(function(e) {
                    t.INTERNAL.addAuthTokenListener(e)
                }), u = [])
            }, e.prototype.checkDestroyed_ = function() {
                this.isDeleted_ && i("app-deleted", {
                    name: this.name_
                })
            }, e
        }();
    c.prototype.name && c.prototype.options || c.prototype.delete;
    var l = new o.ErrorFactory("app", "Firebase", {
        "no-app": "No Firebase App '{$name}' has been created - call Firebase App.initializeApp()",
        "bad-app-name": "Illegal App name: '{$name}",
        "duplicate-app": "Firebase App named '{$name}' already exists",
        "app-deleted": "Firebase App named '{$name}' already deleted",
        "duplicate-service": "Firebase service named '{$name}' already registered",
        "sa-not-supported": "Initializing the Firebase SDK with a service account is only allowed in a Node.js environment. On client devices, you should instead initialize the SDK with an api key and auth domain",
        "invalid-app-argument": "firebase.{$name}() takes either no argument or a Firebase App instance."
    })
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(t instanceof Object)) return t;
        switch (t.constructor) {
            case Date:
                var n = t;
                return new Date(n.getTime());
            case Object:
                void 0 === e && (e = {});
                break;
            case Array:
                e = [];
                break;
            default:
                return t
        }
        for (var i in t) t.hasOwnProperty(i) && (e[i] = r(e[i], t[i]));
        return e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.deepCopy = function(e) {
        return r(void 0, e)
    }, t.deepExtend = r, t.patchProperty = function(e, t, n) {
        e[t] = n
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e() {
            var e = this;
            this.promise = new Promise(function(t, n) {
                e.resolve = t, e.reject = n
            })
        }
        return e.prototype.wrapCallback = function(e) {
            var t = this;
            return function(n, r) {
                n ? t.reject(n) : t.resolve(r), "function" == typeof e && (t.promise.catch(function() {}), 1 === e.length ? e(n) : e(n, r))
            }
        }, e
    }();
    t.Deferred = r
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(112);
    t.getUA = function() {
        return "undefined" != typeof navigator && "string" == typeof navigator.userAgent ? navigator.userAgent : ""
    }, t.isMobileCordova = function() {
        return "undefined" != typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(t.getUA())
    }, t.isReactNative = function() {
        return "object" == typeof navigator && "ReactNative" === navigator.product
    }, t.isNodeSdk = function() {
        return !0 === r.CONSTANTS.NODE_CLIENT || !0 === r.CONSTANTS.NODE_ADMIN
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = "FirebaseError",
        i = Error.captureStackTrace;
    t.patchCapture = function(e) {
        var t = i;
        return i = e, t
    };
    var o = function() {
        return function(e, t) {
            if (this.code = e, this.message = t, i) i(this, a.prototype.create);
            else {
                var n = Error.apply(this, arguments);
                this.name = r, Object.defineProperty(this, "stack", {
                    get: function() {
                        return n.stack
                    }
                })
            }
        }
    }();
    t.FirebaseError = o, o.prototype = Object.create(Error.prototype), o.prototype.constructor = o, o.prototype.name = r;
    var a = function() {
        function e(e, t, n) {
            this.service = e, this.serviceName = t, this.errors = n, this.pattern = /\{\$([^}]+)}/g
        }
        return e.prototype.create = function(e, t) {
            void 0 === t && (t = {});
            var n, r = this.errors[e],
                i = this.service + "/" + e;
            n = void 0 === r ? "Error" : r.replace(this.pattern, function(e, n) {
                var r = t[n];
                return void 0 !== r ? r.toString() : "<" + n + "?>"
            }), n = this.serviceName + ": " + n + " (" + i + ").";
            var a = new o(i, n);
            for (var s in t) t.hasOwnProperty(s) && "_" !== s.slice(-1) && (a[s] = t[s]);
            return a
        }, e
    }();
    t.ErrorFactory = a
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(131),
        i = n(132);
    t.decode = function(e) {
        var t = {},
            n = {},
            o = {},
            a = "";
        try {
            var s = e.split(".");
            t = i.jsonEval(r.base64Decode(s[0]) || ""), n = i.jsonEval(r.base64Decode(s[1]) || ""), a = s[2], o = n.d || {}, delete n.d
        } catch (e) {}
        return {
            header: t,
            claims: n,
            data: o,
            signature: a
        }
    }, t.isValidTimestamp = function(e) {
        var n, r, i = t.decode(e).claims,
            o = Math.floor((new Date).getTime() / 1e3);
        return "object" == typeof i && (i.hasOwnProperty("nbf") ? n = i.nbf : i.hasOwnProperty("iat") && (n = i.iat), r = i.hasOwnProperty("exp") ? i.exp : n + 86400), o && n && r && o >= n && o <= r
    }, t.issuedAtTime = function(e) {
        var n = t.decode(e).claims;
        return "object" == typeof n && n.hasOwnProperty("iat") ? n.iat : null
    }, t.isValidFormat = function(e) {
        var n = t.decode(e),
            r = n.claims;
        return !!n.signature && !!r && "object" == typeof r && r.hasOwnProperty("iat")
    }, t.isAdmin = function(e) {
        var n = t.decode(e).claims;
        return "object" == typeof n && !0 === n.admin
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(133);
    t.querystring = function(e) {
        var t = [];
        return r.forEach(e, function(e, n) {
            Array.isArray(n) ? n.forEach(function(n) {
                t.push(encodeURIComponent(e) + "=" + encodeURIComponent(n))
            }) : t.push(encodeURIComponent(e) + "=" + encodeURIComponent(n))
        }), t.length ? "&" + t.join("&") : ""
    }, t.querystringDecode = function(e) {
        var t = {};
        return e.replace(/^\?/, "").split("&").forEach(function(e) {
            if (e) {
                var n = e.split("=");
                t[n[0]] = n[1]
            }
        }), t
    }
}, function(e, t, n) {
    "use strict";
    var r = this && this.__extends || function() {
        var e = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        };
        return function(t, n) {
            function r() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
        }
    }();
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function(e) {
        function t() {
            var t = e.call(this) || this;
            t.chain_ = [], t.buf_ = [], t.W_ = [], t.pad_ = [], t.inbuf_ = 0, t.total_ = 0, t.blockSize = 64, t.pad_[0] = 128;
            for (var n = 1; n < t.blockSize; ++n) t.pad_[n] = 0;
            return t.reset(), t
        }
        return r(t, e), t.prototype.reset = function() {
            this.chain_[0] = 1732584193, this.chain_[1] = 4023233417, this.chain_[2] = 2562383102, this.chain_[3] = 271733878, this.chain_[4] = 3285377520, this.inbuf_ = 0, this.total_ = 0
        }, t.prototype.compress_ = function(e, t) {
            t || (t = 0);
            var n = this.W_;
            if ("string" == typeof e)
                for (l = 0; l < 16; l++) n[l] = e.charCodeAt(t) << 24 | e.charCodeAt(t + 1) << 16 | e.charCodeAt(t + 2) << 8 | e.charCodeAt(t + 3), t += 4;
            else
                for (l = 0; l < 16; l++) n[l] = e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3], t += 4;
            for (l = 16; l < 80; l++) {
                h = n[l - 3] ^ n[l - 8] ^ n[l - 14] ^ n[l - 16];
                n[l] = 4294967295 & (h << 1 | h >>> 31)
            }
            for (var r, i, o = this.chain_[0], a = this.chain_[1], s = this.chain_[2], u = this.chain_[3], c = this.chain_[4], l = 0; l < 80; l++) {
                l < 40 ? l < 20 ? (r = u ^ a & (s ^ u), i = 1518500249) : (r = a ^ s ^ u, i = 1859775393) : l < 60 ? (r = a & s | u & (a | s), i = 2400959708) : (r = a ^ s ^ u, i = 3395469782);
                var h = (o << 5 | o >>> 27) + r + c + i + n[l] & 4294967295;
                c = u, u = s, s = 4294967295 & (a << 30 | a >>> 2), a = o, o = h
            }
            this.chain_[0] = this.chain_[0] + o & 4294967295, this.chain_[1] = this.chain_[1] + a & 4294967295, this.chain_[2] = this.chain_[2] + s & 4294967295, this.chain_[3] = this.chain_[3] + u & 4294967295, this.chain_[4] = this.chain_[4] + c & 4294967295
        }, t.prototype.update = function(e, t) {
            if (null != e) {
                void 0 === t && (t = e.length);
                for (var n = t - this.blockSize, r = 0, i = this.buf_, o = this.inbuf_; r < t;) {
                    if (0 == o)
                        for (; r <= n;) this.compress_(e, r), r += this.blockSize;
                    if ("string" == typeof e) {
                        for (; r < t;)
                            if (i[o] = e.charCodeAt(r), ++o, ++r, o == this.blockSize) {
                                this.compress_(i), o = 0;
                                break
                            }
                    } else
                        for (; r < t;)
                            if (i[o] = e[r], ++o, ++r, o == this.blockSize) {
                                this.compress_(i), o = 0;
                                break
                            }
                }
                this.inbuf_ = o, this.total_ += t
            }
        }, t.prototype.digest = function() {
            var e = [],
                t = 8 * this.total_;
            this.inbuf_ < 56 ? this.update(this.pad_, 56 - this.inbuf_) : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
            for (r = this.blockSize - 1; r >= 56; r--) this.buf_[r] = 255 & t, t /= 256;
            this.compress_(this.buf_);
            for (var n = 0, r = 0; r < 5; r++)
                for (var i = 24; i >= 0; i -= 8) e[n] = this.chain_[r] >> i & 255, ++n;
            return e
        }, t
    }(n(234).Hash);
    t.Sha1 = i
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        return function() {
            this.blockSize = -1
        }
    }();
    t.Hash = r
}, function(e, t, n) {
    "use strict";

    function r() {}
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.createSubscribe = function(e, t) {
        var n = new i(e, t);
        return n.subscribe.bind(n)
    };
    var i = function() {
        function e(e, t) {
            var n = this;
            this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = t, this.task.then(function() {
                e(n)
            }).catch(function(e) {
                n.error(e)
            })
        }
        return e.prototype.next = function(e) {
            this.forEachObserver(function(t) {
                t.next(e)
            })
        }, e.prototype.error = function(e) {
            this.forEachObserver(function(t) {
                t.error(e)
            }), this.close(e)
        }, e.prototype.complete = function() {
            this.forEachObserver(function(e) {
                e.complete()
            }), this.close()
        }, e.prototype.subscribe = function(e, t, n) {
            var i, o = this;
            if (void 0 === e && void 0 === t && void 0 === n) throw new Error("Missing Observer.");
            void 0 === (i = function(e, t) {
                if ("object" != typeof e || null === e) return !1;
                for (var n = 0, r = t; n < r.length; n++) {
                    var i = r[n];
                    if (i in e && "function" == typeof e[i]) return !0
                }
                return !1
            }(e, ["next", "error", "complete"]) ? e : {
                next: e,
                error: t,
                complete: n
            }).next && (i.next = r), void 0 === i.error && (i.error = r), void 0 === i.complete && (i.complete = r);
            var a = this.unsubscribeOne.bind(this, this.observers.length);
            return this.finalized && this.task.then(function() {
                try {
                    o.finalError ? i.error(o.finalError) : i.complete()
                } catch (e) {}
            }), this.observers.push(i), a
        }, e.prototype.unsubscribeOne = function(e) {
            void 0 !== this.observers && void 0 !== this.observers[e] && (delete this.observers[e], this.observerCount -= 1, 0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this))
        }, e.prototype.forEachObserver = function(e) {
            if (!this.finalized)
                for (var t = 0; t < this.observers.length; t++) this.sendOne(t, e)
        }, e.prototype.sendOne = function(e, t) {
            var n = this;
            this.task.then(function() {
                if (void 0 !== n.observers && void 0 !== n.observers[e]) try {
                    t(n.observers[e])
                } catch (e) {
                    "undefined" != typeof console && console.error && console.error(e)
                }
            })
        }, e.prototype.close = function(e) {
            var t = this;
            this.finalized || (this.finalized = !0, void 0 !== e && (this.finalError = e), this.task.then(function() {
                t.observers = void 0, t.onNoObservers = void 0
            }))
        }, e
    }();
    t.async = function(e, t) {
        return function() {
            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
            Promise.resolve(!0).then(function() {
                e.apply(void 0, n)
            }).catch(function(e) {
                t && t(e)
            })
        }
    }
}, function(e, t, n) {
    "use strict";

    function r(e, t, n) {
        var r = "";
        switch (t) {
            case 1:
                r = n ? "first" : "First";
                break;
            case 2:
                r = n ? "second" : "Second";
                break;
            case 3:
                r = n ? "third" : "Third";
                break;
            case 4:
                r = n ? "fourth" : "Fourth";
                break;
            default:
                throw new Error("errorPrefix called with argumentNumber > 4.  Need to update it?")
        }
        var i = e + " failed: ";
        return i += r + " argument "
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.validateArgCount = function(e, t, n, r) {
        var i;
        if (r < t ? i = "at least " + t : r > n && (i = 0 === n ? "none" : "no more than " + n), i) {
            var o = e + " failed: Was called with " + r + (1 === r ? " argument." : " arguments.") + " Expects " + i + ".";
            throw new Error(o)
        }
    }, t.errorPrefix = r, t.validateNamespace = function(e, t, n, i) {
        if ((!i || n) && "string" != typeof n) throw new Error(r(e, t, i) + "must be a valid firebase namespace.")
    }, t.validateCallback = function(e, t, n, i) {
        if ((!i || n) && "function" != typeof n) throw new Error(r(e, t, i) + "must be a valid function.")
    }, t.validateContextObject = function(e, t, n, i) {
        if ((!i || n) && ("object" != typeof n || null === n)) throw new Error(r(e, t, i) + "must be a valid context object.")
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(130);
    t.stringToByteArray = function(e) {
        for (var t = [], n = 0, i = 0; i < e.length; i++) {
            var o = e.charCodeAt(i);
            if (o >= 55296 && o <= 56319) {
                var a = o - 55296;
                i++, r.assert(i < e.length, "Surrogate pair missing trail surrogate.");
                o = 65536 + (a << 10) + (e.charCodeAt(i) - 56320)
            }
            o < 128 ? t[n++] = o : o < 2048 ? (t[n++] = o >> 6 | 192, t[n++] = 63 & o | 128) : o < 65536 ? (t[n++] = o >> 12 | 224, t[n++] = o >> 6 & 63 | 128, t[n++] = 63 & o | 128) : (t[n++] = o >> 18 | 240, t[n++] = o >> 12 & 63 | 128, t[n++] = o >> 6 & 63 | 128, t[n++] = 63 & o | 128)
        }
        return t
    }, t.stringLength = function(e) {
        for (var t = 0, n = 0; n < e.length; n++) {
            var r = e.charCodeAt(n);
            r < 128 ? t++ : r < 2048 ? t += 2 : r >= 55296 && r <= 56319 ? (t += 4, n++) : t += 3
        }
        return t
    }
}, function(e, t, n) {
    n(239)
}, function(e, t, n) {
    (function(e) {
        (function() {
            function e(e) {
                return "string" == typeof e
            }

            function t(e) {
                return "boolean" == typeof e
            }

            function r() {}

            function i(e) {
                var t = typeof e;
                if ("object" == t) {
                    if (!e) return "null";
                    if (e instanceof Array) return "array";
                    if (e instanceof Object) return t;
                    var n = Object.prototype.toString.call(e);
                    if ("[object Window]" == n) return "object";
                    if ("[object Array]" == n || "number" == typeof e.length && void 0 !== e.splice && void 0 !== e.propertyIsEnumerable && !e.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == n || void 0 !== e.call && void 0 !== e.propertyIsEnumerable && !e.propertyIsEnumerable("call")) return "function"
                } else if ("function" == t && void 0 === e.call) return "object";
                return t
            }

            function o(e) {
                return null === e
            }

            function a(e) {
                return "array" == i(e)
            }

            function s(e) {
                var t = i(e);
                return "array" == t || "object" == t && "number" == typeof e.length
            }

            function u(e) {
                return "function" == i(e)
            }

            function c(e) {
                var t = typeof e;
                return "object" == t && null != e || "function" == t
            }

            function l(e, t, n) {
                return e.call.apply(e.bind, arguments)
            }

            function h(e, t, n) {
                if (!e) throw Error();
                if (2 < arguments.length) {
                    var r = Array.prototype.slice.call(arguments, 2);
                    return function() {
                        var n = Array.prototype.slice.call(arguments);
                        return Array.prototype.unshift.apply(n, r), e.apply(t, n)
                    }
                }
                return function() {
                    return e.apply(t, arguments)
                }
            }

            function f(e, t, n) {
                return (f = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? l : h).apply(null, arguments)
            }

            function p(e, t) {
                var n = Array.prototype.slice.call(arguments, 1);
                return function() {
                    var t = n.slice();
                    return t.push.apply(t, arguments), e.apply(this, t)
                }
            }

            function d(e, t) {
                function n() {}
                n.prototype = t.prototype, e.ib = t.prototype, e.prototype = new n, e.prototype.constructor = e, e.Rc = function(e, n, r) {
                    for (var i = Array(arguments.length - 2), o = 2; o < arguments.length; o++) i[o - 2] = arguments[o];
                    return t.prototype[n].apply(e, i)
                }
            }

            function v(e) {
                if (Error.captureStackTrace) Error.captureStackTrace(this, v);
                else {
                    var t = Error().stack;
                    t && (this.stack = t)
                }
                e && (this.message = String(e))
            }

            function _(e, t) {
                for (var n = e.split("%s"), r = "", i = Array.prototype.slice.call(arguments, 1); i.length && 1 < n.length;) r += n.shift() + i.shift();
                return r + n.join("%s")
            }

            function y(e) {
                return xa.test(e) ? (-1 != e.indexOf("&") && (e = e.replace(Ia, "&amp;")), -1 != e.indexOf("<") && (e = e.replace(Aa, "&lt;")), -1 != e.indexOf(">") && (e = e.replace(Ra, "&gt;")), -1 != e.indexOf('"') && (e = e.replace(ka, "&quot;")), -1 != e.indexOf("'") && (e = e.replace(Da, "&#39;")), -1 != e.indexOf("\0") && (e = e.replace(La, "&#0;")), e) : e
            }

            function g(e, t) {
                return -1 != e.indexOf(t)
            }

            function m(e, t) {
                return e < t ? -1 : e > t ? 1 : 0
            }

            function b(e, t) {
                t.unshift(e), v.call(this, _.apply(null, t)), t.shift()
            }

            function E(e, t) {
                throw new b("Failure" + (e ? ": " + e : ""), Array.prototype.slice.call(arguments, 1))
            }

            function w(e, t) {
                return 0 <= Fa(e, t)
            }

            function T(e, t) {
                var n;
                return (n = 0 <= (t = Fa(e, t))) && Array.prototype.splice.call(e, t, 1), n
            }

            function S(t, n) {
                var r = 0;
                ! function(t, n) {
                    var r = t.length,
                        i = e(t) ? t.split("") : t;
                    for (--r; 0 <= r; --r) r in i && n.call(void 0, i[r], r, t)
                }(t, function(e, i) {
                    n.call(void 0, e, i, t) && 1 == Array.prototype.splice.call(t, i, 1).length && r++
                })
            }

            function C(e) {
                return Array.prototype.concat.apply([], arguments)
            }

            function N(e) {
                var t = e.length;
                if (0 < t) {
                    for (var n = Array(t), r = 0; r < t; r++) n[r] = e[r];
                    return n
                }
                return []
            }

            function P(e) {
                return g(Ma, e)
            }

            function O(e, t) {
                for (var n in e) t.call(void 0, e[n], n, e)
            }

            function I(e) {
                var t, n = [],
                    r = 0;
                for (t in e) n[r++] = e[t];
                return n
            }

            function A(e) {
                var t, n = [],
                    r = 0;
                for (t in e) n[r++] = t;
                return n
            }

            function R(e) {
                for (var t in e) return !1;
                return !0
            }

            function k(e, t) {
                for (var n in e)
                    if (!(n in t) || e[n] !== t[n]) return !1;
                for (n in t)
                    if (!(n in e)) return !1;
                return !0
            }

            function D(e) {
                var t, n = {};
                for (t in e) n[t] = e[t];
                return n
            }

            function L(e, t) {
                for (var n, r, i = 1; i < arguments.length; i++) {
                    r = arguments[i];
                    for (n in r) e[n] = r[n];
                    for (var o = 0; o < qa.length; o++) n = qa[o], Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
            }

            function x(e) {
                return x[" "](e), e
            }

            function M() {
                var e = Sa.document;
                return e ? e.documentMode : void 0
            }

            function F(e) {
                return function(e, t) {
                    var n = ts;
                    return Object.prototype.hasOwnProperty.call(n, e) ? n[e] : n[e] = t(e)
                }(e, function() {
                    for (var t = 0, n = Oa(String(Ka)).split("."), r = Oa(String(e)).split("."), i = Math.max(n.length, r.length), o = 0; 0 == t && o < i; o++) {
                        var a = n[o] || "",
                            s = r[o] || "";
                        do {
                            if (a = /(\d*)(\D*)(.*)/.exec(a) || ["", "", "", ""], s = /(\d*)(\D*)(.*)/.exec(s) || ["", "", "", ""], 0 == a[0].length && 0 == s[0].length) break;
                            t = m(0 == a[1].length ? 0 : parseInt(a[1], 10), 0 == s[1].length ? 0 : parseInt(s[1], 10)) || m(0 == a[2].length, 0 == s[2].length) || m(a[2], s[2]), a = a[3], s = s[3]
                        } while (0 == t)
                    }
                    return 0 <= t
                })
            }

            function j(e) {
                e.prototype.then = e.prototype.then, e.prototype.$goog_Thenable = !0
            }

            function U(e) {
                if (!e) return !1;
                try {
                    return !!e.$goog_Thenable
                } catch (e) {
                    return !1
                }
            }

            function W(e, t, n) {
                this.f = n, this.c = e, this.g = t, this.b = 0, this.a = null
            }

            function B(e, t) {
                e.g(t), e.b < e.f && (e.b++, t.next = e.a, e.a = t)
            }

            function V() {
                var e = ss,
                    t = null;
                return e.a && (t = e.a, e.a = e.a.next, e.a || (e.b = null), t.next = null), t
            }

            function q() {
                this.next = this.b = this.a = null
            }

            function K(e) {
                Sa.setTimeout(function() {
                    throw e
                }, 0)
            }

            function G(e, t) {
                os || function() {
                    if (-1 != String(Sa.Promise).indexOf("[native code]")) {
                        var e = Sa.Promise.resolve(void 0);
                        os = function() {
                            e.then(H)
                        }
                    } else os = function() {
                        var e = H;
                        !u(Sa.setImmediate) || Sa.Window && Sa.Window.prototype && !P("Edge") && Sa.Window.prototype.setImmediate == Sa.setImmediate ? (is || (is = function() {
                            var e = Sa.MessageChannel;
                            if (void 0 === e && "undefined" != typeof window && window.postMessage && window.addEventListener && !P("Presto") && (e = function() {
                                    var e = document.createElement("IFRAME");
                                    e.style.display = "none", e.src = "", document.documentElement.appendChild(e);
                                    var t = e.contentWindow;
                                    (e = t.document).open(), e.write(""), e.close();
                                    var n = "callImmediate" + Math.random(),
                                        r = "file:" == t.location.protocol ? "*" : t.location.protocol + "//" + t.location.host;
                                    e = f(function(e) {
                                        "*" != r && e.origin != r || e.data != n || this.port1.onmessage()
                                    }, this), t.addEventListener("message", e, !1), this.port1 = {}, this.port2 = {
                                        postMessage: function() {
                                            t.postMessage(n, r)
                                        }
                                    }
                                }), void 0 !== e && !P("Trident") && !P("MSIE")) {
                                var t = new e,
                                    n = {},
                                    r = n;
                                return t.port1.onmessage = function() {
                                        if (void 0 !== n.next) {
                                            var e = (n = n.next).pb;
                                            n.pb = null, e()
                                        }
                                    },
                                    function(e) {
                                        r.next = {
                                            pb: e
                                        }, r = r.next, t.port2.postMessage(0)
                                    }
                            }
                            return "undefined" != typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function(e) {
                                var t = document.createElement("SCRIPT");
                                t.onreadystatechange = function() {
                                    t.onreadystatechange = null, t.parentNode.removeChild(t), t = null, e(), e = null
                                }, document.documentElement.appendChild(t)
                            } : function(e) {
                                Sa.setTimeout(e, 0)
                            }
                        }()), is(e)) : Sa.setImmediate(e)
                    }
                }(), as || (os(), as = !0);
                var n = ss,
                    r = rs.get();
                r.set(e, t), n.b ? n.b.next = r : n.a = r, n.b = r
            }

            function H() {
                for (var e; e = V();) {
                    try {
                        e.a.call(e.b)
                    } catch (e) {
                        K(e)
                    }
                    B(rs, e)
                }
                as = !1
            }

            function Q(e, t) {
                if (this.a = us, this.i = void 0, this.f = this.b = this.c = null, this.g = this.h = !1, e != r) try {
                    var n = this;
                    e.call(t, function(e) {
                        re(n, cs, e)
                    }, function(e) {
                        if (!(e instanceof ce)) try {
                            if (e instanceof Error) throw e;
                            throw Error("Promise rejected.")
                        } catch (e) {}
                        re(n, ls, e)
                    })
                } catch (e) {
                    re(this, ls, e)
                }
            }

            function Y() {
                this.next = this.f = this.b = this.g = this.a = null, this.c = !1
            }

            function X(e, t, n) {
                var r = hs.get();
                return r.g = e, r.b = t, r.f = n, r
            }

            function z(e) {
                if (e instanceof Q) return e;
                var t = new Q(r);
                return re(t, cs, e), t
            }

            function J(e) {
                return new Q(function(t, n) {
                    n(e)
                })
            }

            function $(e, t, n) {
                ie(e, t, n, null) || G(p(t, e))
            }

            function Z(e, t) {
                return t = X(t, t, void 0), t.c = !0, te(e, t), e
            }

            function ee(e, t) {
                if (e.a == us)
                    if (e.c) {
                        var n = e.c;
                        if (n.b) {
                            for (var r = 0, i = null, o = null, a = n.b; a && (a.c || (r++, a.a == e && (i = a), !(i && 1 < r))); a = a.next) i || (o = a);
                            i && (n.a == us && 1 == r ? ee(n, t) : (o ? ((r = o).next == n.f && (n.f = r), r.next = r.next.next) : ae(n), se(n, i, ls, t)))
                        }
                        e.c = null
                    } else re(e, ls, t)
            }

            function te(e, t) {
                e.b || e.a != cs && e.a != ls || oe(e), e.f ? e.f.next = t : e.b = t, e.f = t
            }

            function ne(e, t, n, r) {
                var i = X(null, null, null);
                return i.a = new Q(function(e, o) {
                    i.g = t ? function(n) {
                        try {
                            var i = t.call(r, n);
                            e(i)
                        } catch (e) {
                            o(e)
                        }
                    } : e, i.b = n ? function(t) {
                        try {
                            var i = n.call(r, t);
                            void 0 === i && t instanceof ce ? o(t) : e(i)
                        } catch (e) {
                            o(e)
                        }
                    } : o
                }), i.a.c = e, te(e, i), i.a
            }

            function re(e, t, n) {
                e.a == us && (e === n && (t = ls, n = new TypeError("Promise cannot resolve to itself")), e.a = 1, ie(n, e.Ac, e.Bc, e) || (e.i = n, e.a = t, e.c = null, oe(e), t != ls || n instanceof ce || function(e, t) {
                    e.g = !0, G(function() {
                        e.g && fs.call(null, t)
                    })
                }(e, n)))
            }

            function ie(e, t, n, i) {
                if (e instanceof Q) return te(e, X(t || r, n || null, i)), !0;
                if (U(e)) return e.then(t, n, i), !0;
                if (c(e)) try {
                    var o = e.then;
                    if (u(o)) return function(e, t, n, r, i) {
                        function o(e) {
                            s || (s = !0, r.call(i, e))
                        }

                        function a(e) {
                            s || (s = !0, n.call(i, e))
                        }
                        var s = !1;
                        try {
                            t.call(e, a, o)
                        } catch (e) {
                            o(e)
                        }
                    }(e, o, t, n, i), !0
                } catch (e) {
                    return n.call(i, e), !0
                }
                return !1
            }

            function oe(e) {
                e.h || (e.h = !0, G(e.Qb, e))
            }

            function ae(e) {
                var t = null;
                return e.b && (t = e.b, e.b = t.next, t.next = null), e.b || (e.f = null), t
            }

            function se(e, t, n, r) {
                if (n == ls && t.b && !t.c)
                    for (; e && e.g; e = e.c) e.g = !1;
                if (t.a) t.a.c = null, ue(t, n, r);
                else try {
                    t.c ? t.g.call(t.f) : ue(t, n, r)
                } catch (e) {
                    fs.call(null, e)
                }
                B(hs, t)
            }

            function ue(e, t, n) {
                t == cs ? e.g.call(e.f, n) : e.b && e.b.call(e.f, n)
            }

            function ce(e) {
                v.call(this, e)
            }

            function le() {
                this.a = "", this.b = ds
            }

            function he(e) {
                return e instanceof le && e.constructor === le && e.b === ds ? e.a : (E("expected object of type Const, got '" + e + "'"), "type_error:Const")
            }

            function fe(e) {
                var t = new le;
                return t.a = e, t
            }

            function pe() {
                this.a = "", this.b = ys
            }

            function de(e) {
                return e instanceof pe && e.constructor === pe && e.b === ys ? e.a : (E("expected object of type TrustedResourceUrl, got '" + e + "' of type " + i(e)), "type_error:TrustedResourceUrl")
            }

            function ve(e, t) {
                return e = function(e, t) {
                    var n = he(e);
                    if (!_s.test(n)) throw Error("Invalid TrustedResourceUrl format: " + n);
                    return n.replace(vs, function(e, r) {
                        if (!Object.prototype.hasOwnProperty.call(t, r)) throw Error('Found marker, "' + r + '", in format string, "' + n + '", but no valid label mapping found in args: ' + JSON.stringify(t));
                        return (e = t[r]) instanceof le ? he(e) : encodeURIComponent(String(e))
                    })
                }(e, t), t = new pe, t.a = e, t
            }

            function _e() {
                this.a = "", this.b = ms
            }

            function ye(e) {
                return e instanceof _e && e.constructor === _e && e.b === ms ? e.a : (E("expected object of type SafeUrl, got '" + e + "' of type " + i(e)), "type_error:SafeUrl")
            }

            function ge(e) {
                return e instanceof _e ? e : (e = e.la ? e.ja() : String(e), gs.test(e) || (e = "about:invalid#zClosurez"), me(e))
            }

            function me(e) {
                var t = new _e;
                return t.a = e, t
            }

            function be() {
                this.a = "", this.b = bs
            }

            function Ee(e) {
                var t = new be;
                return t.a = e, t
            }

            function we(t) {
                var n = document;
                return e(t) ? n.getElementById(t) : t
            }

            function Te(e, t) {
                O(t, function(t, n) {
                    t && t.la && (t = t.ja()), "style" == n ? e.style.cssText = t : "class" == n ? e.className = t : "for" == n ? e.htmlFor = t : Es.hasOwnProperty(n) ? e.setAttribute(Es[n], t) : 0 == n.lastIndexOf("aria-", 0) || 0 == n.lastIndexOf("data-", 0) ? e.setAttribute(n, t) : e[n] = t
                })
            }

            function Se(t, n, r) {
                var i = arguments,
                    o = document,
                    l = String(i[0]),
                    h = i[1];
                if (!ps && h && (h.name || h.type)) {
                    if (l = ["<", l], h.name && l.push(' name="', y(h.name), '"'), h.type) {
                        l.push(' type="', y(h.type), '"');
                        var f = {};
                        L(f, h), delete f.type, h = f
                    }
                    l.push(">"), l = l.join("")
                }
                return l = o.createElement(l), h && (e(h) ? l.className = h : a(h) ? l.className = h.join(" ") : Te(l, h)), 2 < i.length && function(t, n, r) {
                    function i(r) {
                        r && n.appendChild(e(r) ? t.createTextNode(r) : r)
                    }
                    for (var o = 2; o < r.length; o++) {
                        var a = r[o];
                        !s(a) || c(a) && 0 < a.nodeType ? i(a) : ja(function(e) {
                            if (e && "number" == typeof e.length) {
                                if (c(e)) return "function" == typeof e.item || "string" == typeof e.item;
                                if (u(e)) return "function" == typeof e.item
                            }
                            return !1
                        }(a) ? N(a) : a, i)
                    }
                }(o, l, i), l
            }

            function Ce(e) {
                var t = [];
                return Ne(new function() {}, e, t), t.join("")
            }

            function Ne(e, t, n) {
                if (null == t) n.push("null");
                else {
                    if ("object" == typeof t) {
                        if (a(t)) {
                            var r = t;
                            t = r.length, n.push("[");
                            for (var i = "", o = 0; o < t; o++) n.push(i), Ne(e, r[o], n), i = ",";
                            return void n.push("]")
                        }
                        if (!(t instanceof String || t instanceof Number || t instanceof Boolean)) {
                            n.push("{"), i = "";
                            for (r in t) Object.prototype.hasOwnProperty.call(t, r) && "function" != typeof(o = t[r]) && (n.push(i), Pe(r, n), n.push(":"), Ne(e, o, n), i = ",");
                            return void n.push("}")
                        }
                        t = t.valueOf()
                    }
                    switch (typeof t) {
                        case "string":
                            Pe(t, n);
                            break;
                        case "number":
                            n.push(isFinite(t) && !isNaN(t) ? String(t) : "null");
                            break;
                        case "boolean":
                            n.push(String(t));
                            break;
                        case "function":
                            n.push("null");
                            break;
                        default:
                            throw Error("Unknown type: " + typeof t)
                    }
                }
            }

            function Pe(e, t) {
                t.push('"', e.replace(Ts, function(e) {
                    var t = ws[e];
                    return t || (t = "\\u" + (65536 | e.charCodeAt(0)).toString(16).substr(1), ws[e] = t), t
                }), '"')
            }

            function Oe() {
                0 != Ss && (Cs[this[Ca] || (this[Ca] = ++Na)] = this), this.oa = this.oa, this.Fa = this.Fa
            }

            function Ie(e) {
                e.oa || (e.oa = !0, e.ta(), 0 != Ss && (e = e[Ca] || (e[Ca] = ++Na), delete Cs[e]))
            }

            function Ae(e, t) {
                this.type = e, this.b = this.target = t, this.Bb = !0
            }

            function Re(t, n) {
                if (Ae.call(this, t ? t.type : ""), this.relatedTarget = this.b = this.target = null, this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0, this.key = "", this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1, this.pointerId = 0, this.pointerType = "", this.a = null, t) {
                    var r = this.type = t.type,
                        i = t.changedTouches ? t.changedTouches[0] : null;
                    if (this.target = t.target || t.srcElement, this.b = n, n = t.relatedTarget) {
                        if (Xa) {
                            e: {
                                try {
                                    x(n.nodeName);
                                    var o = !0;
                                    break e
                                } catch (e) {}
                                o = !1
                            }
                            o || (n = null)
                        }
                    } else "mouseover" == r ? n = t.fromElement : "mouseout" == r && (n = t.toElement);
                    this.relatedTarget = n, null === i ? (this.clientX = void 0 !== t.clientX ? t.clientX : t.pageX, this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY, this.screenX = t.screenX || 0, this.screenY = t.screenY || 0) : (this.clientX = void 0 !== i.clientX ? i.clientX : i.pageX, this.clientY = void 0 !== i.clientY ? i.clientY : i.pageY, this.screenX = i.screenX || 0, this.screenY = i.screenY || 0), this.button = t.button, this.key = t.key || "", this.ctrlKey = t.ctrlKey, this.altKey = t.altKey, this.shiftKey = t.shiftKey, this.metaKey = t.metaKey, this.pointerId = t.pointerId || 0, this.pointerType = e(t.pointerType) ? t.pointerType : As[t.pointerType] || "", this.a = t, t.defaultPrevented && this.c()
                }
            }

            function ke(e) {
                e.ma = !0, e.listener = null, e.a = null, e.src = null, e.La = null
            }

            function De(e) {
                this.src = e, this.a = {}, this.b = 0
            }

            function Le(e, t, n, r, i, o) {
                var a = t.toString();
                (t = e.a[a]) || (t = e.a[a] = [], e.b++);
                var s = Me(t, n, i, o);
                return -1 < s ? (e = t[s], r || (e.Ha = !1)) : (e = new function(e, t, n, r, i) {
                    this.listener = e, this.a = null, this.src = t, this.type = n, this.capture = !!r, this.La = i, this.key = ++ks, this.ma = this.Ha = !1
                }(n, e.src, a, !!i, o), e.Ha = r, t.push(e)), e
            }

            function xe(e, t) {
                var n = t.type;
                n in e.a && T(e.a[n], t) && (ke(t), 0 == e.a[n].length && (delete e.a[n], e.b--))
            }

            function Me(e, t, n, r) {
                for (var i = 0; i < e.length; ++i) {
                    var o = e[i];
                    if (!o.ma && o.listener == t && o.capture == !!n && o.La == r) return i
                }
                return -1
            }

            function Fe(e, t, n, r, i) {
                if (r && r.once) Ue(e, t, n, r, i);
                else if (a(t))
                    for (var o = 0; o < t.length; o++) Fe(e, t[o], n, r, i);
                else n = Qe(n), e && e[Rs] ? ze(e, t, n, c(r) ? !!r.capture : !!r, i) : je(e, t, n, !1, r, i)
            }

            function je(e, t, n, r, i, o) {
                if (!t) throw Error("Invalid event type");
                var a = c(i) ? !!i.capture : !!i,
                    s = He(e);
                if (s || (e[Ds] = s = new De(e)), !(n = Le(s, t, n, r, a, o)).a) {
                    if (r = function() {
                            var e = Ge,
                                t = Ps ? function(n) {
                                    return e.call(t.src, t.listener, n)
                                } : function(n) {
                                    if (!(n = e.call(t.src, t.listener, n))) return n
                                };
                            return t
                        }(), n.a = r, r.src = e, r.listener = n, e.addEventListener) Is || (i = a), void 0 === i && (i = !1), e.addEventListener(t.toString(), r, i);
                    else {
                        if (!e.attachEvent) throw Error("addEventListener and attachEvent are unavailable.");
                        e.attachEvent(Ve(t.toString()), r)
                    }
                    xs++
                }
            }

            function Ue(e, t, n, r, i) {
                if (a(t))
                    for (var o = 0; o < t.length; o++) Ue(e, t[o], n, r, i);
                else n = Qe(n), e && e[Rs] ? Je(e, t, n, c(r) ? !!r.capture : !!r, i) : je(e, t, n, !0, r, i)
            }

            function We(e, t, n, r, i) {
                if (a(t))
                    for (var o = 0; o < t.length; o++) We(e, t[o], n, r, i);
                else r = c(r) ? !!r.capture : !!r, n = Qe(n), e && e[Rs] ? (e = e.u, (t = String(t).toString()) in e.a && (o = e.a[t], -1 < (n = Me(o, n, r, i)) && (ke(o[n]), Array.prototype.splice.call(o, n, 1), 0 == o.length && (delete e.a[t], e.b--)))) : e && (e = He(e)) && (t = e.a[t.toString()], e = -1, t && (e = Me(t, n, r, i)), (n = -1 < e ? t[e] : null) && Be(n))
            }

            function Be(e) {
                if ("number" != typeof e && e && !e.ma) {
                    var t = e.src;
                    if (t && t[Rs]) xe(t.u, e);
                    else {
                        var n = e.type,
                            r = e.a;
                        t.removeEventListener ? t.removeEventListener(n, r, e.capture) : t.detachEvent && t.detachEvent(Ve(n), r), xs--, (n = He(t)) ? (xe(n, e), 0 == n.b && (n.src = null, t[Ds] = null)) : ke(e)
                    }
                }
            }

            function Ve(e) {
                return e in Ls ? Ls[e] : Ls[e] = "on" + e
            }

            function qe(e, t, n, r) {
                var i = !0;
                if ((e = He(e)) && (t = e.a[t.toString()]))
                    for (t = t.concat(), e = 0; e < t.length; e++) {
                        var o = t[e];
                        o && o.capture == n && !o.ma && (o = Ke(o, r), i = i && !1 !== o)
                    }
                return i
            }

            function Ke(e, t) {
                var n = e.listener,
                    r = e.La || e.src;
                return e.Ha && Be(e), n.call(r, t)
            }

            function Ge(e, t) {
                if (e.ma) return !0;
                if (!Ps) {
                    if (!t) e: {
                        t = ["window", "event"];
                        for (var n = Sa, r = 0; r < t.length; r++)
                            if (null == (n = n[t[r]])) {
                                t = null;
                                break e
                            } t = n
                    }
                    if (r = t, t = new Re(r, this), n = !0, !(0 > r.keyCode || void 0 != r.returnValue)) {
                        e: {
                            var i = !1;
                            if (0 == r.keyCode) try {
                                r.keyCode = -1;
                                break e
                            } catch (e) {
                                i = !0
                            }(i || void 0 == r.returnValue) && (r.returnValue = !0)
                        }
                        for (r = [], i = t.b; i; i = i.parentNode) r.push(i);
                        for (e = e.type, i = r.length - 1; 0 <= i; i--) {
                            t.b = r[i];
                            var o = qe(r[i], e, !0, t);
                            n = n && o
                        }
                        for (i = 0; i < r.length; i++) t.b = r[i],
                        o = qe(r[i], e, !1, t),
                        n = n && o
                    }
                    return n
                }
                return Ke(e, new Re(t, this))
            }

            function He(e) {
                return (e = e[Ds]) instanceof De ? e : null
            }

            function Qe(e) {
                return u(e) ? e : (e[Ms] || (e[Ms] = function(t) {
                    return e.handleEvent(t)
                }), e[Ms])
            }

            function Ye() {
                Oe.call(this), this.u = new De(this), this.Ib = this, this.Ra = null
            }

            function Xe(t, n) {
                var r, i = t.Ra;
                if (i)
                    for (r = []; i; i = i.Ra) r.push(i);
                if (t = t.Ib, i = n.type || n, e(n)) n = new Ae(n, t);
                else if (n instanceof Ae) n.target = n.target || t;
                else {
                    var o = n;
                    L(n = new Ae(i, t), o)
                }
                if (o = !0, r)
                    for (var a = r.length - 1; 0 <= a; a--) {
                        var s = n.b = r[a];
                        o = $e(s, i, !0, n) && o
                    }
                if (s = n.b = t, o = $e(s, i, !0, n) && o, o = $e(s, i, !1, n) && o, r)
                    for (a = 0; a < r.length; a++) s = n.b = r[a], o = $e(s, i, !1, n) && o
            }

            function ze(e, t, n, r, i) {
                Le(e.u, String(t), n, !1, r, i)
            }

            function Je(e, t, n, r, i) {
                Le(e.u, String(t), n, !0, r, i)
            }

            function $e(e, t, n, r) {
                if (!(t = e.u.a[String(t)])) return !0;
                t = t.concat();
                for (var i = !0, o = 0; o < t.length; ++o) {
                    var a = t[o];
                    if (a && !a.ma && a.capture == n) {
                        var s = a.listener,
                            u = a.La || a.src;
                        a.Ha && xe(e.u, a), i = !1 !== s.call(u, r) && i
                    }
                }
                return i && 0 != r.Bb
            }

            function Ze(e, t, n) {
                if (u(e)) n && (e = f(e, n));
                else {
                    if (!e || "function" != typeof e.handleEvent) throw Error("Invalid listener argument");
                    e = f(e.handleEvent, e)
                }
                return 2147483647 < Number(t) ? -1 : Sa.setTimeout(e, t || 0)
            }

            function et(e) {
                var t = null;
                return new Q(function(n, r) {
                    -1 == (t = Ze(function() {
                        n(void 0)
                    }, e)) && r(Error("Failed to schedule timer."))
                }).s(function(e) {
                    throw Sa.clearTimeout(t), e
                })
            }

            function tt(e, t, n, r, i) {
                this.reset(e, t, n, r, i)
            }

            function nt(e) {
                this.f = e, this.b = this.c = this.a = null
            }

            function rt(e, t) {
                this.name = e, this.value = t
            }

            function it(e) {
                return e.c ? e.c : e.a ? it(e.a) : (E("Root logger has no level set."), null)
            }

            function ot(e) {
                Vs || (Vs = new nt(""), Bs[""] = Vs, Vs.c = Us);
                var t;
                if (!(t = Bs[e])) {
                    t = new nt(e);
                    var n = e.lastIndexOf("."),
                        r = e.substr(n + 1);
                    (n = ot(e.substr(0, n))).b || (n.b = {}), n.b[r] = t, t.a = n, Bs[e] = t
                }
                return t
            }

            function at(e, t) {
                this.b = {}, this.a = [], this.c = 0;
                var n = arguments.length;
                if (1 < n) {
                    if (n % 2) throw Error("Uneven number of arguments");
                    for (var r = 0; r < n; r += 2) this.set(arguments[r], arguments[r + 1])
                } else if (e) {
                    e instanceof at ? (n = e.S(), r = e.P()) : (n = A(e), r = I(e));
                    for (var i = 0; i < n.length; i++) this.set(n[i], r[i])
                }
            }

            function st(e) {
                if (e.c != e.a.length) {
                    for (var t = 0, n = 0; t < e.a.length;) {
                        var r = e.a[t];
                        ut(e.b, r) && (e.a[n++] = r), t++
                    }
                    e.a.length = n
                }
                if (e.c != e.a.length) {
                    var i = {};
                    for (n = t = 0; t < e.a.length;) r = e.a[t], ut(i, r) || (e.a[n++] = r, i[r] = 1), t++;
                    e.a.length = n
                }
            }

            function ut(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }

            function ct(e, t) {
                e && e.log(Ws, t, void 0)
            }

            function lt(e) {
                var t = "";
                return function(e, t) {
                    function n(t) {
                        for (; r < e.length;) {
                            var n = e.charAt(r++),
                                i = Ks[n];
                            if (null != i) return i;
                            if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n)
                        }
                        return t
                    }! function() {
                        if (!qs) {
                            qs = {}, Ks = {};
                            for (var e = 0; 65 > e; e++) qs[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(e), Ks[qs[e]] = e, 62 <= e && (Ks["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(e)] = e)
                        }
                    }();
                    for (var r = 0;;) {
                        var i = n(-1),
                            o = n(0),
                            a = n(64),
                            s = n(64);
                        if (64 === s && -1 === i) break;
                        t(i << 2 | o >> 4), 64 != a && (t(o << 4 & 240 | a >> 2), 64 != s && t(a << 6 & 192 | s))
                    }
                }(e, function(e) {
                    t += String.fromCharCode(e)
                }), t
            }

            function ht(e, t) {
                this.g = [], this.v = e, this.o = t || null, this.f = this.a = !1, this.c = void 0, this.u = this.w = this.i = !1, this.h = 0, this.b = null, this.l = 0
            }

            function ft(e, t, n) {
                e.a = !0, e.c = n, e.f = !t, _t(e)
            }

            function pt(e) {
                if (e.a) {
                    if (!e.u) throw new yt;
                    e.u = !1
                }
            }

            function dt(e, t, n, r) {
                e.g.push([t, n, r]), e.a && _t(e)
            }

            function vt(e) {
                return Wa(e.g, function(e) {
                    return u(e[1])
                })
            }

            function _t(e) {
                if (e.h && e.a && vt(e)) {
                    var t = e.h,
                        n = Hs[t];
                    n && (Sa.clearTimeout(n.a), delete Hs[t]), e.h = 0
                }
                e.b && (e.b.l--, delete e.b), t = e.c;
                for (var r = n = !1; e.g.length && !e.i;) {
                    var i = e.g.shift(),
                        o = i[0],
                        a = i[1];
                    if (i = i[2], o = e.f ? a : o) try {
                        var s = o.call(i || e.o, t);
                        void 0 !== s && (e.f = e.f && (s == t || s instanceof Error), e.c = t = s), (U(t) || "function" == typeof Sa.Promise && t instanceof Sa.Promise) && (r = !0, e.i = !0)
                    } catch (r) {
                        t = r, e.f = !0, vt(e) || (n = !0)
                    }
                }
                e.c = t, r && (s = f(e.m, e, !0), r = f(e.m, e, !1), t instanceof ht ? (dt(t, s, r), t.w = !0) : t.then(s, r)), n && (t = new mt(t), Hs[t.a] = t, e.h = t.a)
            }

            function yt() {
                v.call(this)
            }

            function gt() {
                v.call(this)
            }

            function mt(e) {
                this.a = Sa.setTimeout(f(this.c, this), 0), this.b = e
            }

            function bt(e, t) {
                this.b = -1, this.b = Qs, this.f = Sa.Uint8Array ? new Uint8Array(this.b) : Array(this.b), this.g = this.c = 0, this.a = [], this.i = e, this.h = t, this.l = Sa.Int32Array ? new Int32Array(64) : Array(64), Gs || (Gs = Sa.Int32Array ? new Int32Array($s) : $s), this.reset()
            }

            function Et(e) {
                for (var t = e.f, n = e.l, r = 0, i = 0; i < t.length;) n[r++] = t[i] << 24 | t[i + 1] << 16 | t[i + 2] << 8 | t[i + 3], i = 4 * r;
                for (t = 16; 64 > t; t++) {
                    i = 0 | n[t - 15], r = 0 | n[t - 2];
                    var o = (0 | n[t - 16]) + ((i >>> 7 | i << 25) ^ (i >>> 18 | i << 14) ^ i >>> 3) | 0,
                        a = (0 | n[t - 7]) + ((r >>> 17 | r << 15) ^ (r >>> 19 | r << 13) ^ r >>> 10) | 0;
                    n[t] = o + a | 0
                }
                r = 0 | e.a[0], i = 0 | e.a[1];
                var s = 0 | e.a[2],
                    u = 0 | e.a[3],
                    c = 0 | e.a[4],
                    l = 0 | e.a[5],
                    h = 0 | e.a[6];
                for (o = 0 | e.a[7], t = 0; 64 > t; t++) {
                    var f = ((r >>> 2 | r << 30) ^ (r >>> 13 | r << 19) ^ (r >>> 22 | r << 10)) + (r & i ^ r & s ^ i & s) | 0;
                    a = (o = o + ((c >>> 6 | c << 26) ^ (c >>> 11 | c << 21) ^ (c >>> 25 | c << 7)) | 0) + ((a = (a = c & l ^ ~c & h) + (0 | Gs[t]) | 0) + (0 | n[t]) | 0) | 0, o = h, h = l, l = c, c = u + a | 0, u = s, s = i, i = r, r = a + f | 0
                }
                e.a[0] = e.a[0] + r | 0, e.a[1] = e.a[1] + i | 0, e.a[2] = e.a[2] + s | 0, e.a[3] = e.a[3] + u | 0, e.a[4] = e.a[4] + c | 0, e.a[5] = e.a[5] + l | 0, e.a[6] = e.a[6] + h | 0, e.a[7] = e.a[7] + o | 0
            }

            function wt(t, n, r) {
                void 0 === r && (r = n.length);
                var i = 0,
                    o = t.c;
                if (e(n))
                    for (; i < r;) t.f[o++] = n.charCodeAt(i++), o == t.b && (Et(t), o = 0);
                else {
                    if (!s(n)) throw Error("message must be string or array");
                    for (; i < r;) {
                        var a = n[i++];
                        if (!("number" == typeof a && 0 <= a && 255 >= a && a == (0 | a))) throw Error("message must be a byte array");
                        t.f[o++] = a, o == t.b && (Et(t), o = 0)
                    }
                }
                t.c = o, t.g += r
            }

            function Tt() {
                bt.call(this, 8, Zs)
            }

            function St(t) {
                if (t.P && "function" == typeof t.P) return t.P();
                if (e(t)) return t.split("");
                if (s(t)) {
                    for (var n = [], r = t.length, i = 0; i < r; i++) n.push(t[i]);
                    return n
                }
                return I(t)
            }

            function Ct(t) {
                if (t.S && "function" == typeof t.S) return t.S();
                if (!t.P || "function" != typeof t.P) {
                    if (s(t) || e(t)) {
                        var n = [];
                        t = t.length;
                        for (var r = 0; r < t; r++) n.push(r);
                        return n
                    }
                    return A(t)
                }
            }

            function Nt(e, t) {
                if (this.b = this.l = this.c = "", this.i = null, this.h = this.g = "", this.f = !1, e instanceof Nt) {
                    this.f = void 0 !== t ? t : e.f, Pt(this, e.c), this.l = e.l, this.b = e.b, Ot(this, e.i), this.g = e.g, t = e.a;
                    var n = new Ft;
                    n.c = t.c, t.a && (n.a = new at(t.a), n.b = t.b), It(this, n), this.h = e.h
                } else e && (n = String(e).match(eu)) ? (this.f = !!t, Pt(this, n[1] || "", !0), this.l = Lt(n[2] || ""), this.b = Lt(n[3] || "", !0), Ot(this, n[4]), this.g = Lt(n[5] || "", !0), It(this, n[6] || "", !0), this.h = Lt(n[7] || "")) : (this.f = !!t, this.a = new Ft(null, 0, this.f))
            }

            function Pt(e, t, n) {
                e.c = n ? Lt(t, !0) : t, e.c && (e.c = e.c.replace(/:$/, ""))
            }

            function Ot(e, t) {
                if (t) {
                    if (t = Number(t), isNaN(t) || 0 > t) throw Error("Bad port number " + t);
                    e.i = t
                } else e.i = null
            }

            function It(e, t, n) {
                t instanceof Ft ? (e.a = t, function(e, t) {
                    t && !e.f && (jt(e), e.c = null, e.a.forEach(function(e, t) {
                        var n = t.toLowerCase();
                        t != n && (Bt(this, t), qt(this, n, e))
                    }, e)), e.f = t
                }(e.a, e.f)) : (n || (t = xt(t, iu)), e.a = new Ft(t, 0, e.f))
            }

            function At(e, t, n) {
                e.a.set(t, n)
            }

            function Rt(e, t) {
                return e.a.get(t)
            }

            function kt(e) {
                return e instanceof Nt ? new Nt(e) : new Nt(e, void 0)
            }

            function Dt(e, t) {
                var n = new Nt(null, void 0);
                return Pt(n, "https"), e && (n.b = e), t && (n.g = t), n
            }

            function Lt(e, t) {
                return e ? t ? decodeURI(e.replace(/%25/g, "%2525")) : decodeURIComponent(e) : ""
            }

            function xt(t, n, r) {
                return e(t) ? (t = encodeURI(t).replace(n, Mt), r && (t = t.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), t) : null
            }

            function Mt(e) {
                return "%" + ((e = e.charCodeAt(0)) >> 4 & 15).toString(16) + (15 & e).toString(16)
            }

            function Ft(e, t, n) {
                this.b = this.a = null, this.c = e || null, this.f = !!n
            }

            function jt(e) {
                e.a || (e.a = new at, e.b = 0, e.c && function(e, t) {
                    if (e) {
                        e = e.split("&");
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n].indexOf("="),
                                i = null;
                            if (0 <= r) {
                                var o = e[n].substring(0, r);
                                i = e[n].substring(r + 1)
                            } else o = e[n];
                            t(o, i ? decodeURIComponent(i.replace(/\+/g, " ")) : "")
                        }
                    }
                }(e.c, function(t, n) {
                    Wt(e, decodeURIComponent(t.replace(/\+/g, " ")), n)
                }))
            }

            function Ut(e) {
                var t = Ct(e);
                if (void 0 === t) throw Error("Keys are undefined");
                var n = new Ft(null, 0, void 0);
                e = St(e);
                for (var r = 0; r < t.length; r++) {
                    var i = t[r],
                        o = e[r];
                    a(o) ? qt(n, i, o) : Wt(n, i, o)
                }
                return n
            }

            function Wt(e, t, n) {
                jt(e), e.c = null, t = Kt(e, t);
                var r = e.a.get(t);
                r || e.a.set(t, r = []), r.push(n), e.b += 1
            }

            function Bt(e, t) {
                jt(e), t = Kt(e, t), ut(e.a.b, t) && (e.c = null, e.b -= e.a.get(t).length, e = e.a, ut(e.b, t) && (delete e.b[t], e.c--, e.a.length > 2 * e.c && st(e)))
            }

            function Vt(e, t) {
                return jt(e), t = Kt(e, t), ut(e.a.b, t)
            }

            function qt(e, t, n) {
                Bt(e, t), 0 < n.length && (e.c = null, e.a.set(Kt(e, t), N(n)), e.b += n.length)
            }

            function Kt(e, t) {
                return t = String(t), e.f && (t = t.toLowerCase()), t
            }

            function Gt() {}

            function Ht(e) {
                return e.c || (e.c = e.b())
            }

            function Qt() {}

            function Yt(e) {
                if (!e.f && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
                    for (var t = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], n = 0; n < t.length; n++) {
                        var r = t[n];
                        try {
                            return new ActiveXObject(r), e.f = r
                        } catch (e) {}
                    }
                    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed")
                }
                return e.f
            }

            function Xt(e) {
                Ye.call(this), this.headers = new at, this.w = e || null, this.b = !1, this.v = this.a = null, this.g = this.I = this.i = "", this.c = this.G = this.h = this.A = !1, this.f = 0, this.m = null, this.l = su, this.o = this.N = !1
            }

            function zt(t, n, r, i, o) {
                if (t.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + t.i + "; newUri=" + n);
                r = r ? r.toUpperCase() : "GET", t.i = n, t.g = "", t.I = r, t.A = !1, t.b = !0, t.a = t.w ? t.w.a() : au.a(), t.v = Ht(t.w ? t.w : au), t.a.onreadystatechange = f(t.Ab, t);
                try {
                    ct(t.J, an(t, "Opening Xhr")), t.G = !0, t.a.open(r, String(n), !0), t.G = !1
                } catch (e) {
                    return ct(t.J, an(t, "Error opening Xhr: " + e.message)), void $t(t, e)
                }
                n = i || "";
                var a = new at(t.headers);
                o && function(t, n) {
                    if (t.forEach && "function" == typeof t.forEach) t.forEach(n, void 0);
                    else if (s(t) || e(t)) ja(t, n, void 0);
                    else
                        for (var r = Ct(t), i = St(t), o = i.length, a = 0; a < o; a++) n.call(void 0, i[a], r && r[a], t)
                }(o, function(e, t) {
                    a.set(t, e)
                }), o = function(t) {
                    e: {
                        for (var n = Jt, r = t.length, i = e(t) ? t.split("") : t, o = 0; o < r; o++)
                            if (o in i && n.call(void 0, i[o], o, t)) {
                                n = o;
                                break e
                            } n = -1
                    }
                    return 0 > n ? null : e(t) ? t.charAt(n) : t[n]
                }(a.S()), i = Sa.FormData && n instanceof Sa.FormData, !w(hu, r) || o || i || a.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8"), a.forEach(function(e, t) {
                    this.a.setRequestHeader(t, e)
                }, t), t.l && (t.a.responseType = t.l), "withCredentials" in t.a && t.a.withCredentials !== t.N && (t.a.withCredentials = t.N);
                try {
                    nn(t), 0 < t.f && (t.o = function(e) {
                        return Ha && F(9) && "number" == typeof e.timeout && void 0 !== e.ontimeout
                    }(t.a), ct(t.J, an(t, "Will abort after " + t.f + "ms if incomplete, xhr2 " + t.o)), t.o ? (t.a.timeout = t.f, t.a.ontimeout = f(t.Ea, t)) : t.m = Ze(t.Ea, t.f, t)), ct(t.J, an(t, "Sending request")), t.h = !0, t.a.send(n), t.h = !1
                } catch (e) {
                    ct(t.J, an(t, "Send error: " + e.message)), $t(t, e)
                }
            }

            function Jt(e) {
                return "content-type" == e.toLowerCase()
            }

            function $t(e, t) {
                e.b = !1, e.a && (e.c = !0, e.a.abort(), e.c = !1), e.g = t, Zt(e), tn(e)
            }

            function Zt(e) {
                e.A || (e.A = !0, Xe(e, "complete"), Xe(e, "error"))
            }

            function en(e) {
                if (e.b && void 0 !== Ta)
                    if (e.v[1] && 4 == rn(e) && 2 == on(e)) ct(e.J, an(e, "Local request error detected and ignored"));
                    else if (e.h && 4 == rn(e)) Ze(e.Ab, 0, e);
                else if (Xe(e, "readystatechange"), 4 == rn(e)) {
                    ct(e.J, an(e, "Request complete")), e.b = !1;
                    try {
                        var t = on(e);
                        e: switch (t) {
                            case 200:
                            case 201:
                            case 202:
                            case 204:
                            case 206:
                            case 304:
                            case 1223:
                                var n = !0;
                                break e;
                            default:
                                n = !1
                        }
                        var r;
                        if (!(r = n)) {
                            var i;
                            if (i = 0 === t) {
                                var o = String(e.i).match(eu)[1] || null;
                                if (!o && Sa.self && Sa.self.location) {
                                    var a = Sa.self.location.protocol;
                                    o = a.substr(0, a.length - 1)
                                }
                                i = !lu.test(o ? o.toLowerCase() : "")
                            }
                            r = i
                        }
                        if (r) Xe(e, "complete"), Xe(e, "success");
                        else {
                            try {
                                var s = 2 < rn(e) ? e.a.statusText : ""
                            } catch (t) {
                                ct(e.J, "Can not get status: " + t.message), s = ""
                            }
                            e.g = s + " [" + on(e) + "]", Zt(e)
                        }
                    } finally {
                        tn(e)
                    }
                }
            }

            function tn(e, t) {
                if (e.a) {
                    nn(e);
                    var n = e.a,
                        i = e.v[0] ? r : null;
                    e.a = null, e.v = null, t || Xe(e, "ready");
                    try {
                        n.onreadystatechange = i
                    } catch (t) {
                        (e = e.J) && e.log(js, "Problem encountered resetting onreadystatechange: " + t.message, void 0)
                    }
                }
            }

            function nn(e) {
                e.a && e.o && (e.a.ontimeout = null), "number" == typeof e.m && (Sa.clearTimeout(e.m), e.m = null)
            }

            function rn(e) {
                return e.a ? e.a.readyState : 0
            }

            function on(e) {
                try {
                    return 2 < rn(e) ? e.a.status : -1
                } catch (e) {
                    return -1
                }
            }

            function an(e, t) {
                return t + " [" + e.I + " " + e.i + " " + on(e) + "]"
            }

            function sn(e) {
                var t = {},
                    n = t.document || document,
                    r = de(e),
                    i = document.createElement("SCRIPT"),
                    o = {
                        Cb: i,
                        Ea: void 0
                    },
                    a = new ht(un, o),
                    s = null,
                    u = null != t.timeout ? t.timeout : 5e3;
                return 0 < u && (s = window.setTimeout(function() {
                        cn(i, !0);
                        var e = new ln(du, "Timeout reached for loading script " + r);
                        pt(a), ft(a, !1, e)
                    }, u), o.Ea = s), i.onload = i.onreadystatechange = function() {
                        i.readyState && "loaded" != i.readyState && "complete" != i.readyState || (cn(i, t.Sc || !1, s), a.A(null))
                    }, i.onerror = function() {
                        cn(i, !0, s);
                        var e = new ln(pu, "Error while loading script " + r);
                        pt(a), ft(a, !1, e)
                    }, o = t.attributes || {}, L(o, {
                        type: "text/javascript",
                        charset: "UTF-8"
                    }), Te(i, o), i.src = de(e),
                    function(e) {
                        var t;
                        return (t = (e || document).getElementsByTagName("HEAD")) && 0 != t.length ? t[0] : e.documentElement
                    }(n).appendChild(i), a
            }

            function un() {
                if (this && this.Cb) {
                    var e = this.Cb;
                    e && "SCRIPT" == e.tagName && cn(e, !0, this.Ea)
                }
            }

            function cn(e, t, n) {
                null != n && Sa.clearTimeout(n), e.onload = r, e.onerror = r, e.onreadystatechange = r, t && window.setTimeout(function() {
                    e && e.parentNode && e.parentNode.removeChild(e)
                }, 0)
            }

            function ln(e, t) {
                var n = "Jsloader error (code #" + e + ")";
                t && (n += ": " + t), v.call(this, n), this.code = e
            }

            function hn() {}

            function fn() {
                this.a = new XDomainRequest, this.readyState = 0, this.onreadystatechange = null, this.responseText = "", this.status = -1, this.statusText = this.responseXML = null, this.a.onload = f(this.Wb, this), this.a.onerror = f(this.xb, this), this.a.onprogress = f(this.Xb, this), this.a.ontimeout = f(this.Yb, this)
            }

            function pn(e, t) {
                e.readyState = t, e.onreadystatechange && e.onreadystatechange()
            }

            function dn() {
                var e = On();
                return Ha && !!es && 11 == es || /Edge\/\d+/.test(e)
            }

            function vn() {
                return Sa.window && Sa.window.location.href || ""
            }

            function _n(e, t) {
                t = t || Sa.window;
                var n = "about:blank";
                e && (n = ye(ge(e))), t.location.href = n
            }

            function yn(e, t) {
                var n, r = [];
                for (n in e) n in t ? typeof e[n] != typeof t[n] ? r.push(n) : a(e[n]) ? k(e[n], t[n]) || r.push(n) : "object" == typeof e[n] && null != e[n] && null != t[n] ? 0 < yn(e[n], t[n]).length && r.push(n) : e[n] !== t[n] && r.push(n) : r.push(n);
                for (n in t) n in e || r.push(n);
                return r
            }

            function gn(e) {
                return !!((e = (e || On()).toLowerCase()).match(/android/) || e.match(/webos/) || e.match(/iphone|ipad|ipod/) || e.match(/blackberry/) || e.match(/windows phone/) || e.match(/iemobile/))
            }

            function mn(e) {
                e = e || Sa.window;
                try {
                    e.close()
                } catch (e) {}
            }

            function bn(e, t, n) {
                var r = Math.floor(1e9 * Math.random()).toString();
                t = t || 500, n = n || 600;
                var o = (window.screen.availHeight - n) / 2,
                    a = (window.screen.availWidth - t) / 2;
                t = {
                    width: t,
                    height: n,
                    top: 0 < o ? o : 0,
                    left: 0 < a ? a : 0,
                    location: !0,
                    resizable: !0,
                    statusbar: !0,
                    toolbar: !1
                }, n = On().toLowerCase(), r && (t.target = r, g(n, "crios/") && (t.target = "_blank")), Nn(On()) == _u && (e = e || "http://localhost", t.scrollbars = !0), n = e || "", (r = t) || (r = {}), e = window, t = n instanceof _e ? n : ge(void 0 !== n.href ? n.href : String(n)), n = r.target || n.target, o = [];
                for (s in r) switch (s) {
                    case "width":
                    case "height":
                    case "top":
                    case "left":
                        o.push(s + "=" + r[s]);
                        break;
                    case "target":
                    case "noreferrer":
                        break;
                    default:
                        o.push(s + "=" + (r[s] ? 1 : 0))
                }
                var s = o.join(",");
                if ((P("iPhone") && !P("iPod") && !P("iPad") || P("iPad") || P("iPod")) && e.navigator && e.navigator.standalone && n && "_self" != n ? (s = e.document.createElement("A"), t instanceof _e || t instanceof _e || (t = t.la ? t.ja() : String(t), gs.test(t) || (t = "about:invalid#zClosurez"), t = me(t)), s.href = ye(t), s.setAttribute("target", n), r.noreferrer && s.setAttribute("rel", "noreferrer"), (r = document.createEvent("MouseEvent")).initMouseEvent("click", !0, !0, e, 1), s.dispatchEvent(r), s = {}) : r.noreferrer ? (s = e.open("", n, s), e = ye(t), s && (Ya && g(e, ";") && (e = "'" + e.replace(/'/g, "%27") + "'"), s.opener = null, fe("b/12014412, meta tag with sanitized URL"), e = '<META HTTP-EQUIV="refresh" content="0; url=' + y(e) + '">', e = Ee(e), s.document.write(function(e) {
                        return e instanceof be && e.constructor === be && e.b === bs ? e.a : (E("expected object of type SafeHtml, got '" + e + "' of type " + i(e)), "type_error:SafeHtml")
                    }(e)), s.document.close())) : s = e.open(ye(t), n, s), s) try {
                    s.focus()
                } catch (e) {}
                return s
            }

            function En() {
                var e = null;
                return new Q(function(t) {
                    "complete" == Sa.document.readyState ? t() : (e = function() {
                        t()
                    }, Ue(window, "load", e))
                }).s(function(t) {
                    throw We(window, "load", e), t
                })
            }

            function wn(e) {
                return e = e || On(), !("file:" !== Dn() || !e.toLowerCase().match(/iphone|ipad|ipod|android/))
            }

            function Tn() {
                var e = Sa.window;
                try {
                    return !(!e || e == e.top)
                } catch (e) {
                    return !1
                }
            }

            function Sn() {
                return wa.INTERNAL.hasOwnProperty("reactNative") ? "ReactNative" : wa.INTERNAL.hasOwnProperty("node") ? "Node" : "Browser"
            }

            function Cn() {
                var e = Sn();
                return "ReactNative" === e || "Node" === e
            }

            function Nn(e) {
                var t = e.toLowerCase();
                return g(t, "opera/") || g(t, "opr/") || g(t, "opios/") ? "Opera" : g(t, "iemobile") ? "IEMobile" : g(t, "msie") || g(t, "trident/") ? "IE" : g(t, "edge/") ? "Edge" : g(t, "firefox/") ? _u : g(t, "silk/") ? "Silk" : g(t, "blackberry") ? "Blackberry" : g(t, "webos") ? "Webos" : !g(t, "safari/") || g(t, "chrome/") || g(t, "crios/") || g(t, "android") ? !g(t, "chrome/") && !g(t, "crios/") || g(t, "edge/") ? g(t, "android") ? "Android" : (e = e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) && 2 == e.length ? e[1] : "Other" : yu : "Safari"
            }

            function Pn(e, t) {
                t = t || [];
                var n, r = [],
                    i = {};
                for (n in gu) i[gu[n]] = !0;
                for (n = 0; n < t.length; n++) void 0 !== i[t[n]] && (delete i[t[n]], r.push(t[n]));
                return r.sort(), (t = r).length || (t = ["FirebaseCore-web"]), r = Sn(), i = "", (i = "Browser" === r ? Nn(On()) : r) + "/JsCore/" + e + "/" + t.join(",")
            }

            function On() {
                return Sa.navigator && Sa.navigator.userAgent || ""
            }

            function In(e, t) {
                e = e.split("."), t = t || Sa;
                for (var n = 0; n < e.length && "object" == typeof t && null != t; n++) t = t[e[n]];
                return n != e.length && (t = void 0), t
            }

            function An() {
                try {
                    var e = Sa.localStorage,
                        t = jn();
                    if (e) return e.setItem(t, "1"), e.removeItem(t), !dn() || !!Sa.indexedDB
                } catch (e) {}
                return !1
            }

            function Rn() {
                return (kn() || "chrome-extension:" === Dn() || wn()) && !Cn() && An()
            }

            function kn() {
                return "http:" === Dn() || "https:" === Dn()
            }

            function Dn() {
                return Sa.location && Sa.location.protocol || null
            }

            function Ln(e) {
                return e = e || On(), !gn(e) && Nn(e) != _u
            }

            function xn(e) {
                return void 0 === e ? null : Ce(e)
            }

            function Mn(e) {
                var t, n = {};
                for (t in e) e.hasOwnProperty(t) && null !== e[t] && void 0 !== e[t] && (n[t] = e[t]);
                return n
            }

            function Fn(e) {
                if (null !== e) return JSON.parse(e)
            }

            function jn(e) {
                return e || "" + Math.floor(1e9 * Math.random()).toString()
            }

            function Un(e) {
                return e = e || On(), "Safari" != Nn(e) && !e.toLowerCase().match(/iphone|ipad|ipod/)
            }

            function Wn() {
                var e = Sa.___jsl;
                if (e && e.H)
                    for (var t in e.H)
                        if (e.H[t].r = e.H[t].r || [], e.H[t].L = e.H[t].L || [], e.H[t].r = e.H[t].L.concat(), e.CP)
                            for (var n = 0; n < e.CP.length; n++) e.CP[n] = null
            }

            function Bn() {
                var e = Sa.navigator;
                return !e || "boolean" != typeof e.onLine || !kn() && "chrome-extension:" !== Dn() && void 0 === e.connection || e.onLine
            }

            function Vn(e, t, n, r) {
                if (e > t) throw Error("Short delay should be less than long delay!");
                this.c = e, this.b = t, e = n || On(), r = r || Sn(), this.a = gn(e) || "ReactNative" === r
            }

            function qn() {
                var e = Sa.document;
                return !e || void 0 === e.visibilityState || "visible" == e.visibilityState
            }

            function Kn(e) {
                try {
                    var t = new Date(parseInt(e, 10));
                    if (!isNaN(t.getTime()) && !/[^0-9]/.test(e)) return t.toUTCString()
                } catch (e) {}
                return null
            }

            function Gn(e, t, n) {
                mu ? Object.defineProperty(e, t, {
                    configurable: !0,
                    enumerable: !0,
                    value: n
                }) : e[t] = n
            }

            function Hn(e, t) {
                if (t)
                    for (var n in t) t.hasOwnProperty(n) && Gn(e, n, t[n])
            }

            function Qn(e) {
                var t = {};
                return Hn(t, e), t
            }

            function Yn(e) {
                var t = e;
                if ("object" == typeof e && null != e) {
                    t = "length" in e ? [] : {};
                    for (var n in e) Gn(t, n, Yn(e[n]))
                }
                return t
            }

            function Xn(e, t) {
                this.code = Iu + e, this.message = t || Au[e] || ""
            }

            function zn(e) {
                var t = e && e.code;
                return t ? new Xn(t.substring(Iu.length), e.message) : null
            }

            function Jn(e) {
                var t = e[Lu];
                if (void 0 === t) throw new Xn("missing-continue-uri");
                if ("string" != typeof t || "string" == typeof t && !t.length) throw new Xn("invalid-continue-uri");
                this.h = t, this.c = this.a = null, this.g = !1;
                var n = e[Ru];
                if (n && "object" == typeof n) {
                    t = n[Fu];
                    var r = n[xu];
                    if (n = n[Mu], "string" == typeof t && t.length) {
                        if (this.a = t, void 0 !== r && "boolean" != typeof r) throw new Xn("argument-error", xu + " property must be a boolean when specified.");
                        if (this.g = !!r, void 0 !== n && ("string" != typeof n || "string" == typeof n && !n.length)) throw new Xn("argument-error", Mu + " property must be a non empty string when specified.");
                        this.c = n || null
                    } else {
                        if (void 0 !== t) throw new Xn("argument-error", Fu + " property must be a non empty string when specified.");
                        if (void 0 !== r || void 0 !== n) throw new Xn("missing-android-pkg-name")
                    }
                } else if (void 0 !== n) throw new Xn("argument-error", Ru + " property must be a non null object when specified.");
                if (this.b = null, (t = e[Du]) && "object" == typeof t) {
                    if ("string" == typeof(t = t[ju]) && t.length) this.b = t;
                    else if (void 0 !== t) throw new Xn("argument-error", ju + " property must be a non empty string when specified.")
                } else if (void 0 !== t) throw new Xn("argument-error", Du + " property must be a non null object when specified.");
                if (void 0 !== (e = e[ku]) && "boolean" != typeof e) throw new Xn("argument-error", ku + " property must be a boolean when specified.");
                if ((this.f = !!e) && !this.b && !this.a) throw new Xn("argument-error", ku + " property can't be true when no mobile application is provided.")
            }

            function $n(e) {
                var t = {};
                t.continueUrl = e.h, t.canHandleCodeInApp = e.f, (t.androidPackageName = e.a) && (t.androidMinimumVersion = e.c, t.androidInstallApp = e.g), t.iOSBundleId = e.b;
                for (var n in t) null === t[n] && delete t[n];
                return t
            }

            function Zn(e) {
                if (3 != (e = e.split(".")).length) return null;
                for (var t = (4 - (e = e[1]).length % 4) % 4, n = 0; n < t; n++) e += ".";
                try {
                    var r = JSON.parse(lt(e));
                    if (r.sub && r.iss && r.aud && r.exp) return new function(e) {
                        this.b = e.sub, Pa(), this.a = e.provider_id || e.firebase && e.firebase.sign_in_provider || null
                    }(r)
                } catch (e) {}
                return null
            }

            function er(e) {
                for (var t in Bu)
                    if (Bu[t].Na == e) return Bu[t];
                return null
            }

            function tr(e) {
                var t = {};
                t["facebook.com"] = ir, t["google.com"] = ar, t["github.com"] = or, t["twitter.com"] = sr;
                var n = e && e[qu];
                try {
                    if (n) return t[n] ? new t[n](e) : new rr(e);
                    if (void 0 !== e[Vu]) return new nr(e)
                } catch (e) {}
                return null
            }

            function nr(e) {
                var t = e[qu];
                if (!t && e[Vu]) {
                    var n = Zn(e[Vu]);
                    n && n.a && (t = n.a)
                }
                if (!t) throw Error("Invalid additional user info!");
                "anonymous" != t && "custom" != t || (t = null), n = !1, void 0 !== e.isNewUser ? n = !!e.isNewUser : "identitytoolkit#SignupNewUserResponse" === e.kind && (n = !0), Gn(this, "providerId", t), Gn(this, "isNewUser", n)
            }

            function rr(e) {
                nr.call(this, e), Gn(this, "profile", Yn((e = Fn(e.rawUserInfo || "{}")) || {}))
            }

            function ir(e) {
                if (rr.call(this, e), "facebook.com" != this.providerId) throw Error("Invalid provider ID!")
            }

            function or(e) {
                if (rr.call(this, e), "github.com" != this.providerId) throw Error("Invalid provider ID!");
                Gn(this, "username", this.profile && this.profile.login || null)
            }

            function ar(e) {
                if (rr.call(this, e), "google.com" != this.providerId) throw Error("Invalid provider ID!")
            }

            function sr(e) {
                if (rr.call(this, e), "twitter.com" != this.providerId) throw Error("Invalid provider ID!");
                Gn(this, "username", e.screenName || null)
            }

            function ur(e, t) {
                return e.then(function(e) {
                    if (e[Hu]) {
                        var n = Zn(e[Hu]);
                        if (!n || t != n.b) throw new Xn("user-mismatch");
                        return e
                    }
                    throw new Xn("user-mismatch")
                }).s(function(e) {
                    throw e && e.code && e.code == Iu + "user-not-found" ? new Xn("user-mismatch") : e
                })
            }

            function cr(e, t) {
                if (t.idToken || t.accessToken) t.idToken && Gn(this, "idToken", t.idToken), t.accessToken && Gn(this, "accessToken", t.accessToken);
                else {
                    if (!t.oauthToken || !t.oauthTokenSecret) throw new Xn("internal-error", "failed to construct a credential");
                    Gn(this, "accessToken", t.oauthToken), Gn(this, "secret", t.oauthTokenSecret)
                }
                Gn(this, "providerId", e)
            }

            function lr(e) {
                var t = {};
                return e.idToken && (t.id_token = e.idToken), e.accessToken && (t.access_token = e.accessToken), e.secret && (t.oauth_token_secret = e.secret), t.providerId = e.providerId, {
                    postBody: Ut(t).toString(),
                    requestUri: "http://localhost"
                }
            }

            function hr(e, t) {
                this.rc = t || [], Hn(this, {
                    providerId: e,
                    isOAuthProvider: !0
                }), this.rb = {}, this.Wa = (er(e) || {}).Ma || null, this.Ua = null
            }

            function fr(e) {
                hr.call(this, e, Wu), this.a = []
            }

            function pr() {
                fr.call(this, "facebook.com")
            }

            function dr(e) {
                if (!e) throw new Xn("argument-error", "credential failed: expected 1 argument (the OAuth access token).");
                var t = e;
                return c(e) && (t = e.accessToken), (new pr).credential(null, t)
            }

            function vr() {
                fr.call(this, "github.com")
            }

            function _r(e) {
                if (!e) throw new Xn("argument-error", "credential failed: expected 1 argument (the OAuth access token).");
                var t = e;
                return c(e) && (t = e.accessToken), (new vr).credential(null, t)
            }

            function yr() {
                fr.call(this, "google.com"), this.sa("profile")
            }

            function gr(e, t) {
                var n = e;
                return c(e) && (n = e.idToken, t = e.accessToken), (new yr).credential(n, t)
            }

            function mr() {
                hr.call(this, "twitter.com", Uu)
            }

            function br(e, t) {
                var n = e;
                if (c(n) || (n = {
                        oauthToken: e,
                        oauthTokenSecret: t
                    }), !n.oauthToken || !n.oauthTokenSecret) throw new Xn("argument-error", "credential failed: expected 2 arguments (the OAuth access token and secret).");
                return new cr("twitter.com", n)
            }

            function Er(e, t) {
                this.a = e, this.f = t, Gn(this, "providerId", "password")
            }

            function wr() {
                Hn(this, {
                    providerId: "password",
                    isOAuthProvider: !1
                })
            }

            function Tr(e) {
                if (!(e.Pa && e.Oa || e.Da && e.Y)) throw new Xn("internal-error");
                this.a = e, Gn(this, "providerId", "phone")
            }

            function Sr(e) {
                return e.a.Da && e.a.Y ? {
                    temporaryProof: e.a.Da,
                    phoneNumber: e.a.Y
                } : {
                    sessionInfo: e.a.Pa,
                    code: e.a.Oa
                }
            }

            function Cr(e) {
                try {
                    this.a = e || wa.auth()
                } catch (e) {
                    throw new Xn("argument-error", "Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().")
                }
                Hn(this, {
                    providerId: "phone",
                    isOAuthProvider: !1
                })
            }

            function Nr(e, t) {
                if (!e) throw new Xn("missing-verification-id");
                if (!t) throw new Xn("missing-verification-code");
                return new Tr({
                    Pa: e,
                    Oa: t
                })
            }

            function Pr(e) {
                if (e.temporaryProof && e.phoneNumber) return new Tr({
                    Da: e.temporaryProof,
                    Y: e.phoneNumber
                });
                var t = e && e.providerId;
                if (!t || "password" === t) return null;
                var n = e && e.oauthAccessToken,
                    r = e && e.oauthTokenSecret;
                e = e && e.oauthIdToken;
                try {
                    switch (t) {
                        case "google.com":
                            return gr(e, n);
                        case "facebook.com":
                            return dr(n);
                        case "github.com":
                            return _r(n);
                        case "twitter.com":
                            return br(n, r);
                        default:
                            return new fr(t).credential(e, n)
                    }
                } catch (e) {
                    return null
                }
            }

            function Or(e) {
                if (!e.isOAuthProvider) throw new Xn("invalid-oauth-provider")
            }

            function Ir(e, t, n, r, i) {
                if (this.b = e, this.c = t || null, this.f = n || null, this.g = r || null, this.a = i || null, !this.f && !this.a) throw new Xn("invalid-auth-event");
                if (this.f && this.a) throw new Xn("invalid-auth-event");
                if (this.f && !this.g) throw new Xn("invalid-auth-event")
            }

            function Ar(e) {
                return (e = e || {}).type ? new Ir(e.type, e.eventId, e.urlResponse, e.sessionId, e.error && zn(e.error)) : null
            }

            function Rr() {
                this.b = null, this.a = []
            }

            function kr(e) {
                var t = "unauthorized-domain",
                    n = void 0,
                    r = kt(e);
                e = r.b, "chrome-extension" == (r = r.c) ? n = _("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", e) : "http" == r || "https" == r ? n = _("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", e) : t = "operation-not-supported-in-this-environment", Xn.call(this, t, n)
            }

            function Dr(e, t, n) {
                Xn.call(this, e, n), (e = t || {}).sb && Gn(this, "email", e.sb), e.Y && Gn(this, "phoneNumber", e.Y), e.credential && Gn(this, "credential", e.credential)
            }

            function Lr(e) {
                if (e.code) {
                    var t = e.code || "";
                    0 == t.indexOf(Iu) && (t = t.substring(Iu.length));
                    var n = {
                        credential: Pr(e)
                    };
                    if (e.email) n.sb = e.email;
                    else {
                        if (!e.phoneNumber) return new Xn(t, e.message || void 0);
                        n.Y = e.phoneNumber
                    }
                    return new Dr(t, n, e.message)
                }
                return null
            }

            function xr(e) {
                this.f = e
            }

            function Mr(e, t, n) {
                var r = "Node" == Sn();
                if (!(r = Sa.XMLHttpRequest || r && wa.INTERNAL.node && wa.INTERNAL.node.XMLHttpRequest)) throw new Xn("internal-error", "The XMLHttpRequest compatibility library was not found.");
                this.b = e, e = t || {}, this.i = e.secureTokenEndpoint || "https://securetoken.googleapis.com/v1/token", this.l = e.secureTokenTimeout || Qu, this.c = D(e.secureTokenHeaders || Yu), this.g = e.firebaseEndpoint || "https://www.googleapis.com/identitytoolkit/v3/relyingparty/", this.h = e.firebaseTimeout || Xu, this.a = D(e.firebaseHeaders || zu), n && (this.a["X-Client-Version"] = n, this.c["X-Client-Version"] = n), this.f = new hn, this.o = new xr(r)
            }

            function Fr(e, t) {
                t ? e.a["X-Firebase-Locale"] = t : delete e.a["X-Firebase-Locale"]
            }

            function jr(e, t) {
                t ? (e.a["X-Client-Version"] = t, e.c["X-Client-Version"] = t) : (delete e.a["X-Client-Version"], delete e.c["X-Client-Version"])
            }

            function Ur(e, t, n, r, i, o, a) {
                Bn() ? (function() {
                    var e = On();
                    return !((e = Nn(e) != yu ? null : (e = e.match(/\sChrome\/(\d+)/i)) && 2 == e.length ? parseInt(e[1], 10) : null) && 30 > e || Ha && es && !(9 < es))
                }() ? e = f(e.m, e) : (Gu || (Gu = new Q(function(e, t) {
                    ! function(e, t) {
                        if (((window.gapi || {}).client || {}).request) e();
                        else {
                            Sa[$u] = function() {
                                ((window.gapi || {}).client || {}).request ? e() : t(Error("CORS_UNSUPPORTED"))
                            };
                            ! function(e, t) {
                                dt(e, null, t, void 0)
                            }(sn(ve(Ju, {
                                onload: $u
                            })), function() {
                                t(Error("CORS_UNSUPPORTED"))
                            })
                        }
                    }(e, t)
                })), e = f(e.u, e)), e(t, n, r, i, o, a)) : n && n(null)
            }

            function Wr(e) {
                if (!fu.test(e.email)) throw new Xn("invalid-email")
            }

            function Br(e) {
                "email" in e && Wr(e)
            }

            function Vr(e) {
                if (!e[Hu]) throw new Xn("internal-error")
            }

            function qr(e) {
                if (e.phoneNumber || e.temporaryProof) {
                    if (!e.phoneNumber || !e.temporaryProof) throw new Xn("internal-error")
                } else {
                    if (!e.sessionInfo) throw new Xn("missing-verification-id");
                    if (!e.code) throw new Xn("missing-verification-code")
                }
            }

            function Kr(e) {
                if (!e.requestUri || !e.sessionId && !e.postBody) throw new Xn("internal-error")
            }

            function Gr(e) {
                var t = null;
                if (e.needConfirmation ? (e.code = "account-exists-with-different-credential", t = Lr(e)) : "FEDERATED_USER_ID_ALREADY_LINKED" == e.errorMessage ? (e.code = "credential-already-in-use", t = Lr(e)) : "EMAIL_EXISTS" == e.errorMessage ? (e.code = "email-already-in-use", t = Lr(e)) : e.errorMessage && (t = Jr(e.errorMessage)), t) throw t;
                if (!e[Hu]) throw new Xn("internal-error")
            }

            function Hr(e, t) {
                return t.returnIdpCredential = !0, zr(e, yc, t)
            }

            function Qr(e, t) {
                return t.returnIdpCredential = !0, zr(e, mc, t)
            }

            function Yr(e, t) {
                return t.returnIdpCredential = !0, t.autoCreate = !1, zr(e, gc, t)
            }

            function Xr(e) {
                if (!e.oobCode) throw new Xn("invalid-action-code")
            }

            function zr(e, t, n) {
                if (! function(e, t) {
                        if (!t || !t.length) return !0;
                        if (!e) return !1;
                        for (var n = 0; n < t.length; n++) {
                            var r = e[t[n]];
                            if (void 0 === r || null === r || "" === r) return !1
                        }
                        return !0
                    }(n, t.ea)) return J(new Xn("internal-error"));
                var r, i = t.zb || "POST";
                return z(n).then(t.D).then(function() {
                    return t.T && (n.returnSecureToken = !0),
                        function(e, t, n, r, i, o) {
                            var a = kt(e.g + t);
                            At(a, "key", e.b), o && At(a, "cb", Pa().toString());
                            var s = "GET" == n;
                            if (s)
                                for (var u in r) r.hasOwnProperty(u) && At(a, u, r[u]);
                            return new Q(function(t, o) {
                                Ur(e, a.toString(), function(e) {
                                    e ? e.error ? o($r(e, i || {})) : t(e) : o(new Xn("network-request-failed"))
                                }, n, s ? void 0 : Ce(Mn(r)), e.a, e.h.get())
                            })
                        }(e, t.endpoint, i, n, t.Pb, t.nb || !1)
                }).then(function(e) {
                    return r = e
                }).then(t.O).then(function() {
                    if (!t.ga) return r;
                    if (!(t.ga in r)) throw new Xn("internal-error");
                    return r[t.ga]
                })
            }

            function Jr(e) {
                return $r({
                    error: {
                        errors: [{
                            message: e
                        }],
                        code: 400,
                        message: e
                    }
                })
            }

            function $r(e, t) {
                var n = (e.error && e.error.errors && e.error.errors[0] || {}).reason || "",
                    r = {
                        keyInvalid: "invalid-api-key",
                        ipRefererBlocked: "app-not-authorized"
                    };
                if (n = r[n] ? new Xn(r[n]) : null) return n;
                n = e.error && e.error.message || "", L(r = {
                    INVALID_CUSTOM_TOKEN: "invalid-custom-token",
                    CREDENTIAL_MISMATCH: "custom-token-mismatch",
                    MISSING_CUSTOM_TOKEN: "internal-error",
                    INVALID_IDENTIFIER: "invalid-email",
                    MISSING_CONTINUE_URI: "internal-error",
                    INVALID_EMAIL: "invalid-email",
                    INVALID_PASSWORD: "wrong-password",
                    USER_DISABLED: "user-disabled",
                    MISSING_PASSWORD: "internal-error",
                    EMAIL_EXISTS: "email-already-in-use",
                    PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
                    INVALID_IDP_RESPONSE: "invalid-credential",
                    FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
                    INVALID_MESSAGE_PAYLOAD: "invalid-message-payload",
                    INVALID_RECIPIENT_EMAIL: "invalid-recipient-email",
                    INVALID_SENDER: "invalid-sender",
                    EMAIL_NOT_FOUND: "user-not-found",
                    EXPIRED_OOB_CODE: "expired-action-code",
                    INVALID_OOB_CODE: "invalid-action-code",
                    MISSING_OOB_CODE: "internal-error",
                    CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
                    INVALID_ID_TOKEN: "invalid-user-token",
                    TOKEN_EXPIRED: "user-token-expired",
                    USER_NOT_FOUND: "user-token-expired",
                    CORS_UNSUPPORTED: "cors-unsupported",
                    DYNAMIC_LINK_NOT_ACTIVATED: "dynamic-link-not-activated",
                    INVALID_APP_ID: "invalid-app-id",
                    TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
                    WEAK_PASSWORD: "weak-password",
                    OPERATION_NOT_ALLOWED: "operation-not-allowed",
                    USER_CANCELLED: "user-cancelled",
                    CAPTCHA_CHECK_FAILED: "captcha-check-failed",
                    INVALID_APP_CREDENTIAL: "invalid-app-credential",
                    INVALID_CODE: "invalid-verification-code",
                    INVALID_PHONE_NUMBER: "invalid-phone-number",
                    INVALID_SESSION_INFO: "invalid-verification-id",
                    INVALID_TEMPORARY_PROOF: "invalid-credential",
                    MISSING_APP_CREDENTIAL: "missing-app-credential",
                    MISSING_CODE: "missing-verification-code",
                    MISSING_PHONE_NUMBER: "missing-phone-number",
                    MISSING_SESSION_INFO: "missing-verification-id",
                    QUOTA_EXCEEDED: "quota-exceeded",
                    SESSION_EXPIRED: "code-expired",
                    INVALID_CONTINUE_URI: "invalid-continue-uri",
                    MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
                    MISSING_IOS_BUNDLE_ID: "missing-ios-bundle-id",
                    UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
                    INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
                    INVALID_CERT_HASH: "invalid-cert-hash"
                }, t || {}), t = (t = n.match(/^[^\s]+\s*:\s*(.*)$/)) && 1 < t.length ? t[1] : void 0;
                for (var i in r)
                    if (0 === n.indexOf(i)) return new Xn(r[i], t);
                return !t && e && (t = xn(e)), new Xn("internal-error", t)
            }

            function Zr(e) {
                for (var t in Cc)
                    if (Cc[t].id === e) return e = Cc[t], {
                        firebaseEndpoint: e.Va,
                        secureTokenEndpoint: e.ab
                    };
                return null
            }

            function ei(e) {
                this.b = e, this.a = null, this.Ya = function(e) {
                    return (Ic || (Ic = new Q(function(e, t) {
                        if (Bn()) {
                            var n = function() {
                                Wn(), In("gapi.load")("gapi.iframes", {
                                    callback: e,
                                    ontimeout: function() {
                                        Wn(), t(Error("Network Error"))
                                    },
                                    timeout: Pc.get()
                                })
                            };
                            if (In("gapi.iframes.Iframe")) e();
                            else if (In("gapi.load")) n();
                            else {
                                var r = "__iframefcb" + Math.floor(1e6 * Math.random()).toString();
                                Sa[r] = function() {
                                    In("gapi.load") ? n() : t(Error("Network Error"))
                                }, z(sn(r = ve(Nc, {
                                    onload: r
                                }))).s(function() {
                                    t(Error("Network Error"))
                                })
                            }
                        } else t(Error("Network Error"))
                    }).s(function(e) {
                        throw Ic = null, e
                    }))).then(function() {
                        return new Q(function(t, n) {
                            In("gapi.iframes.getContext")().open({
                                where: document.body,
                                url: e.b,
                                messageHandlersFilter: In("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"),
                                attributes: {
                                    style: {
                                        position: "absolute",
                                        top: "-100px",
                                        width: "1px",
                                        height: "1px"
                                    }
                                },
                                dontclear: !0
                            }, function(r) {
                                function i() {
                                    clearTimeout(o), t()
                                }
                                e.a = r, e.a.restyle({
                                    setHideOnLeave: !1
                                });
                                var o = setTimeout(function() {
                                    n(Error("Network Error"))
                                }, Oc.get());
                                r.ping(i).then(i, function() {
                                    n(Error("Network Error"))
                                })
                            })
                        })
                    })
                }(this)
            }

            function ti(e, t, n) {
                this.i = e, this.g = t, this.h = n, this.f = null, this.a = Dt(this.i, "/__/auth/iframe"), At(this.a, "apiKey", this.g), At(this.a, "appName", this.h), this.b = null, this.c = []
            }

            function ni(e, t, n, r, i) {
                this.m = e, this.u = t, this.c = n, this.l = r, this.i = this.g = this.h = null, this.a = i, this.f = null
            }

            function ri(e) {
                try {
                    return wa.app(e).auth().Ka()
                } catch (e) {
                    return []
                }
            }

            function ii(e, t, n, r, i) {
                this.u = e, this.f = t, this.b = n, this.c = r || null, this.h = i || null, this.m = this.o = this.v = null, this.g = [], this.l = this.a = null
            }

            function oi(e) {
                var t = vn();
                return function(e) {
                    return zr(e, lc, {}).then(function(e) {
                        return e.authorizedDomains || []
                    })
                }(e).then(function(e) {
                    e: {
                        var n = kt(t),
                            r = n.c;n = n.b;
                        for (var i = 0; i < e.length; i++) {
                            var o = e[i],
                                a = n,
                                s = r;
                            if (0 == o.indexOf("chrome-extension://") ? a = kt(o).b == a && "chrome-extension" == s : "http" != s && "https" != s ? a = !1 : vu.test(o) ? a = a == o : (o = o.split(".").join("\\."), a = new RegExp("^(.+\\." + o + "|" + o + ")$", "i").test(a)), a) {
                                e = !0;
                                break e
                            }
                        }
                        e = !1
                    }
                    if (!e) throw new kr(vn())
                })
            }

            function ai(e) {
                return e.l ? e.l : (e.l = En().then(function() {
                    if (!e.o) {
                        var t = e.c,
                            n = e.h,
                            r = ri(e.b),
                            i = new ti(e.u, e.f, e.b);
                        i.f = t, i.b = n, i.c = N(r || []), e.o = i.toString()
                    }
                    e.i = new ei(e.o),
                        function(e) {
                            if (!e.i) throw Error("IfcHandler must be initialized!");
                            ! function(e, t) {
                                e.Ya.then(function() {
                                    e.a.register("authEvent", t, In("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))
                                })
                            }(e.i, function(t) {
                                var n = {};
                                if (t && t.authEvent) {
                                    var r = !1;
                                    for (t = Ar(t.authEvent), n = 0; n < e.g.length; n++) r = e.g[n](t) || r;
                                    return n = {}, n.status = r ? "ACK" : "ERROR", z(n)
                                }
                                return n.status = "ERROR", z(n)
                            })
                        }(e)
                }), e.l)
            }

            function si(e) {
                return e.m || (e.v = e.c ? Pn(e.c, ri(e.b)) : null, e.m = new Mr(e.f, Zr(e.h), e.v)), e.m
            }

            function ui(e, t, n, r, i, o, a, s, u, c) {
                return e = new ni(e, t, n, r, i), e.h = o, e.g = a, e.i = s, e.b = D(u || null), e.f = c, e.toString()
            }

            function ci(e) {
                var t = {
                    type: "webStorageSupport"
                };
                return ai(e).then(function() {
                    return function(e, t) {
                        return e.Ya.then(function() {
                            return new Q(function(n) {
                                e.a.send(t.type, t, n, In("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))
                            })
                        })
                    }(e.i, t)
                }).then(function(e) {
                    if (e && e.length && void 0 !== e[0].webStorageSupport) return e[0].webStorageSupport;
                    throw Error()
                })
            }

            function li(e) {
                if (this.a = e || wa.INTERNAL.reactNative && wa.INTERNAL.reactNative.AsyncStorage, !this.a) throw new Xn("internal-error", "The React Native compatibility library was not found.")
            }

            function hi() {
                this.a = {}
            }

            function fi(e, t, n, r, i, o) {
                try {
                    var a = !!Sa.indexedDB
                } catch (e) {
                    a = !1
                }
                if (!a) throw new Xn("web-storage-unsupported");
                this.u = e, this.h = t, this.g = n, this.l = r, this.m = i, this.f = {}, this.c = [], this.a = 0, this.o = o || Sa.indexedDB
            }

            function pi(e) {
                return e.i || (e.i = function(e) {
                    return new Q(function(t, n) {
                        var r = e.o.open(e.u, e.m);
                        r.onerror = function(e) {
                            n(Error(e.target.errorCode))
                        }, r.onupgradeneeded = function(t) {
                            t = t.target.result;
                            try {
                                t.createObjectStore(e.h, {
                                    keyPath: e.g
                                })
                            } catch (e) {
                                n(e)
                            }
                        }, r.onsuccess = function(e) {
                            t(e.target.result)
                        }
                    })
                }(e)), e.i
            }

            function di(e, t) {
                return t.objectStore(e.h)
            }

            function vi(e, t, n) {
                return t.transaction([e.h], n ? "readwrite" : "readonly")
            }

            function _i(e) {
                return new Q(function(t, n) {
                    e.onsuccess = function(e) {
                        e && e.target ? t(e.target.result) : t()
                    }, e.onerror = function(e) {
                        n(Error(e.target.errorCode))
                    }
                })
            }

            function yi() {
                if (! function() {
                        var e = "Node" == Sn();
                        if (!(e = gi() || e && wa.INTERNAL.node && wa.INTERNAL.node.localStorage)) return !1;
                        try {
                            return e.setItem("__sak", "1"), e.removeItem("__sak"), !0
                        } catch (e) {
                            return !1
                        }
                    }()) {
                    if ("Node" == Sn()) throw new Xn("internal-error", "The LocalStorage compatibility library was not found.");
                    throw new Xn("web-storage-unsupported")
                }
                this.a = gi() || wa.INTERNAL.node.localStorage
            }

            function gi() {
                try {
                    var e = Sa.localStorage,
                        t = jn();
                    return e && (e.setItem(t, "1"), e.removeItem(t)), e
                } catch (e) {
                    return null
                }
            }

            function mi() {}

            function bi() {
                if (! function() {
                        var e = "Node" == Sn();
                        if (!(e = Ei() || e && wa.INTERNAL.node && wa.INTERNAL.node.sessionStorage)) return !1;
                        try {
                            return e.setItem("__sak", "1"), e.removeItem("__sak"), !0
                        } catch (e) {
                            return !1
                        }
                    }()) {
                    if ("Node" == Sn()) throw new Xn("internal-error", "The SessionStorage compatibility library was not found.");
                    throw new Xn("web-storage-unsupported")
                }
                this.a = Ei() || wa.INTERNAL.node.sessionStorage
            }

            function Ei() {
                try {
                    var e = Sa.sessionStorage,
                        t = jn();
                    return e && (e.setItem(t, "1"), e.removeItem(t)), e
                } catch (e) {
                    return null
                }
            }

            function wi(e, t, n, r, i) {
                this.i = e, this.g = t, this.A = n, this.u = r, this.v = i, this.a = {}, Rc || (Rc = new function() {
                    var e = {};
                    e.Browser = Dc, e.Node = Lc, e.ReactNative = xc, this.a = e[Sn()]
                }), e = Rc;
                try {
                    if (dn()) {
                        Ac || (Ac = new fi("firebaseLocalStorageDb", "firebaseLocalStorage", "fbase_key", "value", 1));
                        var o = Ac
                    } else o = new e.a.C;
                    this.l = o
                } catch (e) {
                    this.l = new hi, this.u = !0
                }
                try {
                    this.o = new e.a.jb
                } catch (e) {
                    this.o = new hi
                }
                this.w = new hi, this.h = f(this.m, this), this.b = {}
            }

            function Ti() {
                return kc || (kc = new wi("firebase", ":", !(Un(On()) || !Tn()), Ln(), An())), kc
            }

            function Si(e, t) {
                switch (t) {
                    case "session":
                        return e.o;
                    case "none":
                        return e.w;
                    default:
                        return e.l
                }
            }

            function Ci(e, t, n) {
                return e.i + e.g + t.name + (n ? e.g + n : "")
            }

            function Ni(e, t, n) {
                return n = Ci(e, t, n), "local" == t.C && (e.b[n] = null), Si(e, t.C).X(n)
            }

            function Pi(e, t, n, r) {
                t = Ci(e, t, n), e.v && (e.b[t] = Sa.localStorage.getItem(t)), R(e.a) && (Si(e, "local").ia(e.h), e.u || dn() || !e.v || function(e) {
                    Ii(e), e.f = setInterval(function() {
                        for (var t in e.a) {
                            var n = Sa.localStorage.getItem(t),
                                r = e.b[t];
                            n != r && (e.b[t] = n, n = new Re({
                                type: "storage",
                                key: t,
                                target: window,
                                oldValue: r,
                                newValue: n,
                                a: !0
                            }), e.m(n))
                        }
                    }, 1e3)
                }(e)), e.a[t] || (e.a[t] = []), e.a[t].push(r)
            }

            function Oi(e, t, n) {
                t = Ci(e, Wo("local"), t), e.a[t] && (S(e.a[t], function(e) {
                    return e == n
                }), 0 == e.a[t].length && delete e.a[t]), R(e.a) && function(e) {
                    Si(e, "local").da(e.h), Ii(e)
                }(e)
            }

            function Ii(e) {
                e.f && (clearInterval(e.f), e.f = null)
            }

            function Ai(e, t, n, r, i, o, a) {
                this.u = e, this.i = t, this.l = n, this.m = r || null, this.o = a || null, this.h = t + ":" + n, this.A = new function() {
                    this.a = Ti()
                }, this.g = new function(e) {
                    this.a = e, this.b = Ti()
                }(this.h), this.f = null, this.b = [], this.v = i || 500, this.w = o || 2e3, this.a = this.c = null
            }

            function Ri(e) {
                return new Xn("invalid-cordova-configuration", e)
            }

            function ki(e) {
                var t = new Tt;
                wt(t, e), e = [];
                var n = 8 * t.g;
                56 > t.c ? wt(t, Js, 56 - t.c) : wt(t, Js, t.b - (t.c - 56));
                for (var r = 63; 56 <= r; r--) t.f[r] = 255 & n, n /= 256;
                for (Et(t), r = n = 0; r < t.i; r++)
                    for (var i = 24; 0 <= i; i -= 8) e[n++] = t.a[r] >> i & 255;
                return function(e) {
                    return Ua(e, function(e) {
                        return 1 < (e = e.toString(16)).length ? e : "0" + e
                    }).join("")
                }(e)
            }

            function Di(e, t, n, r) {
                var i = function() {
                        for (var e = 20, t = []; 0 < e;) t.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), e--;
                        return t.join("")
                    }(),
                    o = new Ir(t, r, null, i, new Xn("no-auth-event")),
                    a = In("BuildInfo.packageName", Sa);
                if ("string" != typeof a) throw new Xn("invalid-cordova-configuration");
                var s = In("BuildInfo.displayName", Sa),
                    u = {};
                if (On().toLowerCase().match(/iphone|ipad|ipod/)) u.ibi = a;
                else {
                    if (!On().toLowerCase().match(/android/)) return J(new Xn("operation-not-supported-in-this-environment"));
                    u.apn = a
                }
                s && (u.appDisplayName = s), i = ki(i), u.sessionId = i;
                var c = ui(e.u, e.i, e.l, t, n, null, r, e.m, u, e.o);
                return e.ba().then(function() {
                    var t = e.h;
                    return e.A.a.set(Fc, o.B(), t)
                }).then(function() {
                    var t = In("cordova.plugins.browsertab.isAvailable", Sa);
                    if ("function" != typeof t) throw new Xn("invalid-cordova-configuration");
                    var n = null;
                    t(function(t) {
                        if (t) {
                            if ("function" != typeof(n = In("cordova.plugins.browsertab.openUrl", Sa))) throw new Xn("invalid-cordova-configuration");
                            n(c)
                        } else {
                            if ("function" != typeof(n = In("cordova.InAppBrowser.open", Sa))) throw new Xn("invalid-cordova-configuration");
                            t = !(!(t = On()).match(/(iPad|iPhone|iPod).*OS 7_\d/i) && !t.match(/(iPad|iPhone|iPod).*OS 8_\d/i)), e.a = n(c, t ? "_blank" : "_system", "location=yes")
                        }
                    })
                })
            }

            function Li(e, t) {
                for (var n = 0; n < e.b.length; n++) try {
                    e.b[n](t)
                } catch (e) {}
            }

            function xi(e) {
                return e.f || (e.f = e.ba().then(function() {
                    return new Q(function(t) {
                        function n(r) {
                            return t(r), e.Ja(n), !1
                        }
                        e.ua(n),
                            function(e) {
                                function t(t) {
                                    r = !0, i && i.cancel(), Mi(e).then(function(r) {
                                        var i = n;
                                        if (r && t && t.url) {
                                            i = null;
                                            var o = t.url,
                                                a = kt(o),
                                                s = Rt(a, "link"),
                                                u = Rt(kt(s), "link");
                                            a = Rt(a, "deep_link_id"), -1 != (o = Rt(kt(a), "link") || a || u || s || o).indexOf("/__/auth/callback") && (i = kt(o), i = Fn(Rt(i, "firebaseError") || null), i = (i = "object" == typeof i ? zn(i) : null) ? new Ir(r.b, r.c, null, null, i) : new Ir(r.b, r.c, o, r.g)), i = i || n
                                        }
                                        Li(e, i)
                                    })
                                }
                                var n = new Ir("unknown", null, null, null, new Xn("no-auth-event")),
                                    r = !1,
                                    i = et(e.v).then(function() {
                                        return Mi(e).then(function() {
                                            r || Li(e, n)
                                        })
                                    }),
                                    o = Sa.handleOpenURL;
                                Sa.handleOpenURL = function(e) {
                                    if (0 == e.toLowerCase().indexOf(In("BuildInfo.packageName", Sa).toLowerCase() + "://") && t({
                                            url: e
                                        }), "function" == typeof o) try {
                                        o(e)
                                    } catch (e) {
                                        console.error(e)
                                    }
                                }, Ku || (Ku = new Rr), Ku.subscribe(t)
                            }(e)
                    })
                })), e.f
            }

            function Mi(e) {
                var t = null;
                return function(e) {
                    return e.b.get(Fc, e.a).then(function(e) {
                        return Ar(e)
                    })
                }(e.g).then(function(n) {
                    return t = n, n = e.g, Ni(n.b, Fc, n.a)
                }).then(function() {
                    return t
                })
            }

            function Fi(e) {
                return Ni(e.b, jc, e.a)
            }

            function ji(e, t, n) {
                this.v = e, this.l = t, this.u = n, this.h = [], this.f = !1, this.i = f(this.m, this), this.c = new Gi, this.o = new Xi, this.g = new function(e) {
                    this.a = e, this.b = Ti()
                }(this.l + ":" + this.u), this.b = {}, this.b.unknown = this.c, this.b.signInViaRedirect = this.c, this.b.linkViaRedirect = this.c, this.b.reauthViaRedirect = this.c, this.b.signInViaPopup = this.o, this.b.linkViaPopup = this.o, this.b.reauthViaPopup = this.o, this.a = Ui(this.v, this.l, this.u, ec)
            }

            function Ui(e, t, n, r) {
                var i = wa.SDK_VERSION || null;
                return wn() ? new Ai(e, t, n, i, void 0, void 0, r) : new ii(e, t, n, i, r)
            }

            function Wi(e) {
                e.f || (e.f = !0, e.a.ua(e.i));
                var t = e.a;
                return e.a.ba().s(function(n) {
                    throw e.a == t && e.reset(), n
                })
            }

            function Bi(e) {
                e.a.Db() && Wi(e).s(function(t) {
                    var n = new Ir("unknown", null, null, null, new Xn("operation-not-supported-in-this-environment"));
                    qi(t) && e.m(n)
                }), e.a.yb() || Hi(e.c)
            }

            function Vi(e, t, n, r, i, o) {
                return e.a.vb(t, n, r, function() {
                    e.f || (e.f = !0, e.a.ua(e.i))
                }, function() {
                    e.reset()
                }, i, o)
            }

            function qi(e) {
                return !(!e || "auth/cordova-not-ready" != e.code)
            }

            function Ki(e, t, n) {
                var r = t + ":" + n;
                return Bc[r] || (Bc[r] = new ji(e, t, n)), Bc[r]
            }

            function Gi() {
                this.b = null, this.f = [], this.c = [], this.a = null, this.g = !1
            }

            function Hi(e) {
                e.g || (e.g = !0, Yi(e, !1, null, null))
            }

            function Qi(e, t) {
                if (e.b = function() {
                        return z(t)
                    }, e.f.length)
                    for (var n = 0; n < e.f.length; n++) e.f[n](t)
            }

            function Yi(e, t, n, r) {
                t ? r ? function(e, t) {
                    if (e.b = function() {
                            return J(t)
                        }, e.c.length)
                        for (var n = 0; n < e.c.length; n++) e.c[n](t)
                }(e, r) : Qi(e, n) : Qi(e, {
                    user: null
                }), e.f = [], e.c = []
            }

            function Xi() {}

            function zi(e, t) {
                this.a = t, Gn(this, "verificationId", e)
            }

            function Ji(e, t, n, r) {
                return new Cr(e).Qa(t, n).then(function(e) {
                    return new zi(e, r)
                })
            }

            function $i(e, t, n, r, i, o) {
                if (this.h = e, this.i = t, this.g = n, this.c = r, this.f = i, this.l = !!o, this.b = null, this.a = this.c, this.f < this.c) throw Error("Proactive refresh lower bound greater than upper bound!")
            }

            function Zi(e, t) {
                eo(e), e.b = et(function(e, t) {
                    return t ? (e.a = e.c, e.g()) : (t = e.a, e.a *= 2, e.a > e.f && (e.a = e.f), t)
                }(e, t)).then(function() {
                    return e.l ? z() : function() {
                        var e = Sa.document,
                            t = null;
                        return qn() || !e ? z() : new Q(function(n) {
                            t = function() {
                                qn() && (e.removeEventListener("visibilitychange", t, !1), n())
                            }, e.addEventListener("visibilitychange", t, !1)
                        }).s(function(n) {
                            throw e.removeEventListener("visibilitychange", t, !1), n
                        })
                    }()
                }).then(function() {
                    return e.h()
                }).then(function() {
                    Zi(e, !0)
                }).s(function(t) {
                    e.i(t) && Zi(e, !1)
                })
            }

            function eo(e) {
                e.b && (e.b.cancel(), e.b = null)
            }

            function to(e) {
                this.f = e, this.b = this.a = null, this.c = 0
            }

            function no(e, t) {
                var n = t[Hu],
                    r = t.refreshToken;
                t = ro(t.expiresIn), e.b = n, e.c = t, e.a = r
            }

            function ro(e) {
                return Pa() + 1e3 * parseInt(e, 10)
            }

            function io(e, t) {
                return function(e, t) {
                    return new Q(function(n, r) {
                        "refresh_token" == t.grant_type && t.refresh_token || "authorization_code" == t.grant_type && t.code ? Ur(e, e.i + "?key=" + encodeURIComponent(e.b), function(e) {
                            e ? e.error ? r($r(e)) : e.access_token && e.refresh_token ? n(e) : r(new Xn("internal-error")) : r(new Xn("network-request-failed"))
                        }, "POST", Ut(t).toString(), e.c, e.l.get()) : r(new Xn("internal-error"))
                    })
                }(e.f, t).then(function(t) {
                    return e.b = t.access_token, e.c = ro(t.expires_in), e.a = t.refresh_token, {
                        accessToken: e.b,
                        expirationTime: e.c,
                        refreshToken: e.a
                    }
                }).s(function(t) {
                    throw "auth/user-token-expired" == t.code && (e.a = null), t
                })
            }

            function oo(e, t) {
                this.a = e || null, this.b = t || null, Hn(this, {
                    lastSignInTime: Kn(t || null),
                    creationTime: Kn(e || null)
                })
            }

            function ao(e, t) {
                Ae.call(this, e);
                for (var n in t) this[n] = t[n]
            }

            function so(e, t, n) {
                this.A = [], this.G = e.apiKey, this.o = e.appName, this.w = e.authDomain || null, e = wa.SDK_VERSION ? Pn(wa.SDK_VERSION) : null, this.c = new Mr(this.G, Zr(ec), e), this.h = new to(this.c), vo(this, t[Hu]), no(this.h, t), Gn(this, "refreshToken", this.h.a), go(this, n || {}), Ye.call(this), this.I = !1, this.w && Rn() && (this.a = Ki(this.w, this.G, this.o)), this.N = [], this.i = null, this.l = function(e) {
                    return new $i(function() {
                        return e.F(!0)
                    }, function(e) {
                        return !(!e || "auth/network-request-failed" != e.code)
                    }, function() {
                        var t = e.h.c - Pa() - 3e5;
                        return 0 < t ? t : 0
                    }, 3e4, 96e4, !1)
                }(this), this.U = f(this.Ga, this);
                var r = this;
                this.ha = null, this.ra = function(e) {
                    r.na(e.h)
                }, this.W = null, this.R = [], this.qa = function(e) {
                    co(r, e.f)
                }, this.V = null
            }

            function uo(e, t) {
                e.W && We(e.W, "languageCodeChanged", e.ra), (e.W = t) && Fe(t, "languageCodeChanged", e.ra)
            }

            function co(e, t) {
                e.R = t, jr(e.c, wa.SDK_VERSION ? Pn(wa.SDK_VERSION, e.R) : null)
            }

            function lo(e, t) {
                e.V && We(e.V, "frameworkChanged", e.qa), (e.V = t) && Fe(t, "frameworkChanged", e.qa)
            }

            function ho(e) {
                try {
                    return wa.app(e.o).auth()
                } catch (t) {
                    throw new Xn("internal-error", "No firebase.auth.Auth instance is available for the Firebase App '" + e.o + "'!")
                }
            }

            function fo(e) {
                e.m || e.l.b || (e.l.start(), We(e, "tokenChanged", e.U), Fe(e, "tokenChanged", e.U))
            }

            function po(e) {
                We(e, "tokenChanged", e.U), eo(e.l)
            }

            function vo(e, t) {
                e.pa = t, Gn(e, "_lat", t)
            }

            function _o(e) {
                for (var t = [], n = 0; n < e.N.length; n++) t.push(e.N[n](e));
                return function(e) {
                    return new Q(function(t) {
                        var n = e.length,
                            r = [];
                        if (n)
                            for (var i, o = function(e, i, o) {
                                    n--, r[e] = i ? {
                                        Ub: !0,
                                        value: o
                                    } : {
                                        Ub: !1,
                                        reason: o
                                    }, 0 == n && t(r)
                                }, a = 0; a < e.length; a++) i = e[a], $(i, p(o, a, !0), p(o, a, !1));
                        else t(r)
                    })
                }(t).then(function() {
                    return e
                })
            }

            function yo(e) {
                e.a && !e.I && (e.I = !0, e.a.subscribe(e))
            }

            function go(e, t) {
                Hn(e, {
                    uid: t.uid,
                    displayName: t.displayName || null,
                    photoURL: t.photoURL || null,
                    email: t.email || null,
                    emailVerified: t.emailVerified || !1,
                    phoneNumber: t.phoneNumber || null,
                    isAnonymous: t.isAnonymous || !1,
                    metadata: new oo(t.createdAt, t.lastLoginAt),
                    providerData: []
                })
            }

            function mo() {}

            function bo(e) {
                return z().then(function() {
                    if (e.m) throw new Xn("app-deleted")
                })
            }

            function Eo(e) {
                return Ua(e.providerData, function(e) {
                    return e.providerId
                })
            }

            function wo(e, t) {
                t && (To(e, t.providerId), e.providerData.push(t))
            }

            function To(e, t) {
                S(e.providerData, function(e) {
                    return e.providerId == t
                })
            }

            function So(e, t, n) {
                ("uid" != t || n) && e.hasOwnProperty(t) && Gn(e, t, n)
            }

            function Co(e, t) {
                e != t && (Hn(e, {
                    uid: t.uid,
                    displayName: t.displayName,
                    photoURL: t.photoURL,
                    email: t.email,
                    emailVerified: t.emailVerified,
                    phoneNumber: t.phoneNumber,
                    isAnonymous: t.isAnonymous,
                    providerData: []
                }), t.metadata ? Gn(e, "metadata", function(e) {
                    return new oo(e.a, e.b)
                }(t.metadata)) : Gn(e, "metadata", new oo), ja(t.providerData, function(t) {
                    wo(e, t)
                }), e.h = t.h, Gn(e, "refreshToken", e.h.a))
            }

            function No(e) {
                return e.F().then(function(t) {
                    var n = e.isAnonymous;
                    return function(e, t) {
                        return zr(e.c, sc, {
                            idToken: t
                        }).then(f(e.kc, e))
                    }(e, t).then(function() {
                        return n || So(e, "isAnonymous", !1), t
                    })
                })
            }

            function Po(e, t) {
                t[Hu] && e.pa != t[Hu] && (no(e.h, t), Xe(e, new ao("tokenChanged")), vo(e, t[Hu]), So(e, "refreshToken", e.h.a))
            }

            function Oo(e) {
                return (e = e.providerUserInfo) && e.length ? Ua(e, function(e) {
                    return new function(e, t, n, r, i, o) {
                        Hn(this, {
                            uid: e,
                            displayName: r || null,
                            photoURL: i || null,
                            email: n || null,
                            phoneNumber: o || null,
                            providerId: t
                        })
                    }(e.rawId, e.providerId, e.email, e.displayName, e.photoUrl, e.phoneNumber)
                }) : []
            }

            function Io(e, t) {
                return No(e).then(function() {
                    if (w(Eo(e), t)) return _o(e).then(function() {
                        throw new Xn("provider-already-linked")
                    })
                })
            }

            function Ao(e, t, n) {
                var r = Pr(t);
                return t = tr(t), Qn({
                    user: e,
                    credential: r,
                    additionalUserInfo: t,
                    operationType: n
                })
            }

            function Ro(e, t) {
                return Po(e, t), e.reload().then(function() {
                    return e
                })
            }

            function ko(e, t, n, r, i) {
                if (!Rn()) return J(new Xn("operation-not-supported-in-this-environment"));
                if (e.i && !i) return J(e.i);
                var o = er(n.providerId),
                    a = jn(e.uid + ":::"),
                    s = null;
                (!Ln() || Tn()) && e.w && n.isOAuthProvider && (s = ui(e.w, e.G, e.o, t, n, null, a, wa.SDK_VERSION || null));
                var u = bn(s, o && o.za, o && o.ya);
                return r = r().then(function() {
                    if (Lo(e), !i) return e.F().then(function() {})
                }).then(function() {
                    return Vi(e.a, u, t, n, a, !!s)
                }).then(function() {
                    return new Q(function(n, r) {
                        e.fa(t, null, new Xn("cancelled-popup-request"), e.g || null), e.f = n, e.v = r, e.g = a, e.b = e.a.Ca(e, t, u, a)
                    })
                }).then(function(e) {
                    return u && mn(u), e ? Qn(e) : null
                }).s(function(e) {
                    throw u && mn(u), e
                }), xo(e, r, i)
            }

            function Do(e, t, n, r, i) {
                if (!Rn()) return J(new Xn("operation-not-supported-in-this-environment"));
                if (e.i && !i) return J(e.i);
                var o = null,
                    a = jn(e.uid + ":::");
                return r = r().then(function() {
                    if (Lo(e), !i) return e.F().then(function() {})
                }).then(function() {
                    return e.Z = a, _o(e)
                }).then(function(t) {
                    return e.ca && (t = e.ca, t = t.b.set(Vc, e.B(), t.a)), t
                }).then(function() {
                    return e.a.Aa(t, n, a)
                }).s(function(t) {
                    if (o = t, e.ca) return Fo(e.ca);
                    throw o
                }).then(function() {
                    if (o) throw o
                }), xo(e, r, i)
            }

            function Lo(e) {
                if (!e.a || !e.I) {
                    if (e.a && !e.I) throw new Xn("internal-error");
                    throw new Xn("auth-domain-config-required")
                }
            }

            function xo(e, t, n) {
                var r = function(e, t, n) {
                    return e.i && !n ? (t.cancel(), J(e.i)) : t.s(function(t) {
                        throw !t || "auth/user-disabled" != t.code && "auth/user-token-expired" != t.code || (e.i || Xe(e, new ao("userInvalidated")), e.i = t), t
                    })
                }(e, t, n);
                return e.A.push(r), Z(r, function() {
                    T(e.A, r)
                }), r
            }

            function Mo(e) {
                if (!e.apiKey) return null;
                var t = {
                        apiKey: e.apiKey,
                        authDomain: e.authDomain,
                        appName: e.appName
                    },
                    n = {};
                if (!(e.stsTokenManager && e.stsTokenManager.accessToken && e.stsTokenManager.expirationTime)) return null;
                n[Hu] = e.stsTokenManager.accessToken, n.refreshToken = e.stsTokenManager.refreshToken || null, n.expiresIn = (e.stsTokenManager.expirationTime - Pa()) / 1e3;
                var r = new so(t, n, e);
                return e.providerData && ja(e.providerData, function(e) {
                    e && wo(r, Qn(e))
                }), e.redirectEventId && (r.Z = e.redirectEventId), r
            }

            function Fo(e) {
                return Ni(e.b, Vc, e.a)
            }

            function jo(e, t) {
                this.a = e, this.b = t || Ti(), this.c = null, this.f = function(e) {
                    var t = Wo("local"),
                        n = Wo("session"),
                        r = Wo("none");
                    return e.b.get(n, e.a).then(function(i) {
                        return i ? n : e.b.get(r, e.a).then(function(n) {
                            return n ? r : e.b.get(t, e.a).then(function(n) {
                                return n ? t : e.b.get(qc, e.a).then(function(e) {
                                    return e ? Wo(e) : t
                                })
                            })
                        })
                    }).then(function(t) {
                        return e.c = t, Uo(e, t.C)
                    }).s(function() {
                        e.c || (e.c = t)
                    })
                }(this), Pi(this.b, Wo("local"), this.a, f(this.g, this))
            }

            function Uo(e, t) {
                var n, r = [];
                for (n in Mc) Mc[n] !== t && r.push(Ni(e.b, Wo(Mc[n]), e.a));
                return r.push(Ni(e.b, qc, e.a)),
                    function(e) {
                        return new Q(function(t, n) {
                            var r = e.length,
                                i = [];
                            if (r)
                                for (var o, a = function(e, n) {
                                        r--, i[e] = n, 0 == r && t(i)
                                    }, s = function(e) {
                                        n(e)
                                    }, u = 0; u < e.length; u++) o = e[u], $(o, p(a, u), s);
                            else t(i)
                        })
                    }(r)
            }

            function Wo(e) {
                return {
                    name: "authUser",
                    C: e
                }
            }

            function Bo(e, t) {
                return Ko(e, function() {
                    return e.b.set(e.c, t.B(), e.a)
                })
            }

            function Vo(e) {
                return Ko(e, function() {
                    return Ni(e.b, e.c, e.a)
                })
            }

            function qo(e, t) {
                return Ko(e, function() {
                    return e.b.get(e.c, e.a).then(function(e) {
                        return e && t && (e.authDomain = t), Mo(e || {})
                    })
                })
            }

            function Ko(e, t) {
                return e.f = e.f.then(t, t), e.f
            }

            function Go(e) {
                if (this.l = !1, Gn(this, "app", e), !$o(this).options || !$o(this).options.apiKey) throw new Xn("invalid-api-key");
                e = wa.SDK_VERSION ? Pn(wa.SDK_VERSION) : null, this.c = new Mr($o(this).options && $o(this).options.apiKey, Zr(ec), e), this.N = [], this.m = [], this.I = [], this.Kb = wa.INTERNAL.createSubscribe(f(this.ac, this)), this.R = void 0, this.Lb = wa.INTERNAL.createSubscribe(f(this.bc, this)), zo(this, null), this.h = new jo($o(this).options.apiKey + ":" + $o(this).name), this.G = new function(e) {
                        this.a = e, this.b = Ti()
                    }($o(this).options.apiKey + ":" + $o(this).name), this.U = na(this, function(e) {
                        var t = $o(e).options.authDomain,
                            n = function(e) {
                                var t = function(e, t) {
                                    return e.b.get(Vc, e.a).then(function(e) {
                                        return e && t && (e.authDomain = t), Mo(e || {})
                                    })
                                }(e.G, $o(e).options.authDomain).then(function(t) {
                                    return (e.w = t) && (t.ca = e.G), Fo(e.G)
                                });
                                return na(e, t)
                            }(e).then(function() {
                                return qo(e.h, t)
                            }).then(function(t) {
                                return t ? (t.ca = e.G, e.w && (e.w.Z || null) == (t.Z || null) ? t : t.reload().then(function() {
                                    return Bo(e.h, t).then(function() {
                                        return t
                                    })
                                }).s(function(n) {
                                    return "auth/network-request-failed" == n.code ? t : Vo(e.h)
                                })) : null
                            }).then(function(t) {
                                zo(e, t || null)
                            });
                        return na(e, n)
                    }(this)), this.i = na(this, function(e) {
                        return e.U.then(function() {
                            return e.aa()
                        }).s(function() {}).then(function() {
                            if (!e.l) return e.ha()
                        }).s(function() {}).then(function() {
                            if (!e.l) {
                                e.W = !0;
                                var t = e.h;
                                Pi(t.b, Wo("local"), t.a, e.ha)
                            }
                        })
                    }(this)), this.W = !1, this.ha = f(this.yc, this), this.Ga = f(this.ka, this), this.pa = f(this.Tb, this), this.qa = f(this.Zb, this), this.ra = f(this.$b, this),
                    function(e) {
                        var t = $o(e).options.authDomain,
                            n = $o(e).options.apiKey;
                        t && Rn() && (e.Jb = e.U.then(function() {
                            if (!e.l) {
                                if (e.a = Ki(t, n, $o(e).name), e.a.subscribe(e), Zo(e) && yo(Zo(e)), e.w) {
                                    yo(e.w);
                                    var r = e.w;
                                    r.na(e.$()), uo(r, e), co(r = e.w, e.A), lo(r, e), e.w = null
                                }
                                return e.a
                            }
                        }))
                    }(this), this.INTERNAL = {}, this.INTERNAL.delete = f(this.delete, this), this.INTERNAL.logFramework = f(this.gc, this), this.o = 0, Ye.call(this),
                    function(e) {
                        Object.defineProperty(e, "lc", {
                            get: function() {
                                return this.$()
                            },
                            set: function(e) {
                                this.na(e)
                            },
                            enumerable: !1
                        }), e.V = null
                    }(this), this.A = []
            }

            function Ho(e) {
                Ae.call(this, "languageCodeChanged"), this.h = e
            }

            function Qo(e) {
                Ae.call(this, "frameworkChanged"), this.f = e
            }

            function Yo(e) {
                return e.Jb || J(new Xn("auth-domain-config-required"))
            }

            function Xo(e, t) {
                var n = {};
                return n.apiKey = $o(e).options.apiKey, n.authDomain = $o(e).options.authDomain, n.appName = $o(e).name, e.U.then(function() {
                    return function(e, t, n, r) {
                        var i = new so(e, t);
                        return n && (i.ca = n), r && co(i, r), i.reload().then(function() {
                            return i
                        })
                    }(n, t, e.G, e.Ka())
                }).then(function(t) {
                    return Zo(e) && t.uid == Zo(e).uid ? (Co(Zo(e), t), e.ka(t)) : (zo(e, t), yo(t), e.ka(t))
                }).then(function() {
                    ta(e)
                })
            }

            function zo(e, t) {
                Zo(e) && (function(e, t) {
                    S(e.N, function(e) {
                        return e == t
                    })
                }(Zo(e), e.Ga), We(Zo(e), "tokenChanged", e.pa), We(Zo(e), "userDeleted", e.qa), We(Zo(e), "userInvalidated", e.ra), po(Zo(e))), t && (t.N.push(e.Ga), Fe(t, "tokenChanged", e.pa), Fe(t, "userDeleted", e.qa), Fe(t, "userInvalidated", e.ra), 0 < e.o && fo(t)), Gn(e, "currentUser", t), t && (t.na(e.$()), uo(t, e), co(t, e.A), lo(t, e))
            }

            function Jo(e, t) {
                var n = null,
                    r = null;
                return na(e, t.then(function(t) {
                    return n = Pr(t), r = tr(t), Xo(e, t)
                }).then(function() {
                    return Qn({
                        user: Zo(e),
                        credential: n,
                        additionalUserInfo: r,
                        operationType: "signIn"
                    })
                }))
            }

            function $o(e) {
                return e.app
            }

            function Zo(e) {
                return e.currentUser
            }

            function ea(e) {
                return Zo(e) && Zo(e)._lat || null
            }

            function ta(e) {
                if (e.W) {
                    for (var t = 0; t < e.m.length; t++) e.m[t] && e.m[t](ea(e));
                    if (e.R !== e.getUid() && e.I.length)
                        for (e.R = e.getUid(), t = 0; t < e.I.length; t++) e.I[t] && e.I[t](ea(e))
                }
            }

            function na(e, t) {
                return e.N.push(t), Z(t, function() {
                    T(e.N, t)
                }), t
            }

            function ra(e, t, n, r) {
                e: {
                    n = Array.prototype.slice.call(n);
                    for (var i = 0, o = !1, a = 0; a < t.length; a++)
                        if (t[a].optional) o = !0;
                        else {
                            if (o) throw new Xn("internal-error", "Argument validator encountered a required argument after an optional argument.");
                            i++
                        } if (o = t.length, n.length < i || o < n.length) r = "Expected " + (i == o ? 1 == i ? "1 argument" : i + " arguments" : i + "-" + o + " arguments") + " but got " + n.length + ".";
                    else {
                        for (i = 0; i < n.length; i++)
                            if (o = t[i].optional && void 0 === n[i], !t[i].M(n[i]) && !o) {
                                if (t = t[i], 0 > i || i >= Kc.length) throw new Xn("internal-error", "Argument validator received an unsupported number of arguments.");
                                n = Kc[i], r = (r ? "" : n + " argument ") + (t.name ? '"' + t.name + '" ' : "") + "must be " + t.K + ".";
                                break e
                            } r = null
                    }
                }
                if (r) throw new Xn("argument-error", e + " failed: " + r)
            }

            function ia(t, n) {
                return {
                    name: t || "",
                    K: "a valid string",
                    optional: !!n,
                    M: e
                }
            }

            function oa() {
                return {
                    name: "opt_forceRefresh",
                    K: "a boolean",
                    optional: !0,
                    M: t
                }
            }

            function aa(e, t) {
                return {
                    name: e || "",
                    K: "a valid object",
                    optional: !!t,
                    M: c
                }
            }

            function sa(e, t) {
                return {
                    name: e || "",
                    K: "a function",
                    optional: !!t,
                    M: u
                }
            }

            function ua(e, t) {
                return {
                    name: e || "",
                    K: "null",
                    optional: !!t,
                    M: o
                }
            }

            function ca(e) {
                return {
                    name: e ? e + "Credential" : "credential",
                    K: e ? "a valid " + e + " credential" : "a valid credential",
                    optional: !1,
                    M: function(t) {
                        if (!t) return !1;
                        var n = !e || t.providerId === e;
                        return !(!t.wa || !n)
                    }
                }
            }

            function la() {
                return {
                    name: "applicationVerifier",
                    K: "an implementation of firebase.auth.ApplicationVerifier",
                    optional: !1,
                    M: function(t) {
                        return !!(t && e(t.type) && u(t.verify))
                    }
                }
            }

            function ha(e, t, n, r) {
                return {
                    name: n || "",
                    K: e.K + " or " + t.K,
                    optional: !!r,
                    M: function(n) {
                        return e.M(n) || t.M(n)
                    }
                }
            }

            function fa(e, t, n, r, i, o) {
                if (Gn(this, "type", "recaptcha"), this.b = this.c = null, this.m = !1, this.l = t, this.a = n || {
                        theme: "light",
                        type: "image"
                    }, this.g = [], this.a[Qc]) throw new Xn("argument-error", "sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");
                if (this.h = "invisible" === this.a[Yc], !we(t) || !this.h && we(t).hasChildNodes()) throw new Xn("argument-error", "reCAPTCHA container is either not found or already contains inner elements!");
                this.u = new Mr(e, o || null, i || null), this.o = r || function() {
                    return null
                };
                var a = this;
                this.i = [];
                var s = this.a[Gc];
                this.a[Gc] = function(e) {
                    if (pa(a, e), "function" == typeof s) s(e);
                    else if ("string" == typeof s) {
                        var t = In(s, Sa);
                        "function" == typeof t && t(e)
                    }
                };
                var u = this.a[Hc];
                this.a[Hc] = function() {
                    if (pa(a, null), "function" == typeof u) u();
                    else if ("string" == typeof u) {
                        var e = In(u, Sa);
                        "function" == typeof e && e()
                    }
                }
            }

            function pa(e, t) {
                for (var n = 0; n < e.i.length; n++) try {
                    e.i[n](t)
                } catch (e) {}
            }

            function da(e, t) {
                return e.g.push(t), Z(t, function() {
                    T(e.g, t)
                }), t
            }

            function va(e) {
                if (e.m) throw new Xn("internal-error", "RecaptchaVerifier instance has been destroyed.")
            }

            function _a() {
                return zc || (zc = new function() {
                    this.b = Sa.grecaptcha ? 1 / 0 : 0, this.c = null, this.a = "__rcb" + Math.floor(1e6 * Math.random()).toString()
                }), zc
            }

            function ya(e, t, n) {
                try {
                    this.f = n || wa.app()
                } catch (e) {
                    throw new Xn("argument-error", "No firebase.app.App instance is currently initialized.")
                }
                if (!this.f.options || !this.f.options.apiKey) throw new Xn("invalid-api-key");
                n = this.f.options.apiKey;
                var r = this,
                    i = null;
                try {
                    i = this.f.auth().Ka()
                } catch (e) {}
                i = wa.SDK_VERSION ? Pn(wa.SDK_VERSION, i) : null, fa.call(this, n, e, t, function() {
                    try {
                        var e = r.f.auth().$()
                    } catch (t) {
                        e = null
                    }
                    return e
                }, i, Zr(ec))
            }

            function ga(e, t) {
                for (var n in t) {
                    var r = t[n].name;
                    e[r] = ba(r, e[n], t[n].j)
                }
            }

            function ma(e, t, n, r) {
                e[t] = ba(t, n, r)
            }

            function ba(e, t, n) {
                function r() {
                    var e = Array.prototype.slice.call(arguments);
                    return ra(o, n, e), t.apply(this, e)
                }
                if (!n) return t;
                var i, o = function(e) {
                    return (e = e.split("."))[e.length - 1]
                }(e);
                for (i in t) r[i] = t[i];
                for (i in t.prototype) r.prototype[i] = t.prototype[i];
                return r
            }
            var Ea, wa = n(44).default,
                Ta = Ta || {},
                Sa = this,
                Ca = "closure_uid_" + (1e9 * Math.random() >>> 0),
                Na = 0,
                Pa = Date.now || function() {
                    return +new Date
                };
            d(v, Error), v.prototype.name = "CustomError";
            var Oa = String.prototype.trim ? function(e) {
                    return e.trim()
                } : function(e) {
                    return e.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
                },
                Ia = /&/g,
                Aa = /</g,
                Ra = />/g,
                ka = /"/g,
                Da = /'/g,
                La = /\x00/g,
                xa = /[\x00&<>"']/;
            d(b, v), b.prototype.name = "AssertionError";
            var Ma, Fa = Array.prototype.indexOf ? function(e, t, n) {
                    return Array.prototype.indexOf.call(e, t, n)
                } : function(t, n, r) {
                    if (r = null == r ? 0 : 0 > r ? Math.max(0, t.length + r) : r, e(t)) return e(n) && 1 == n.length ? t.indexOf(n, r) : -1;
                    for (; r < t.length; r++)
                        if (r in t && t[r] === n) return r;
                    return -1
                },
                ja = Array.prototype.forEach ? function(e, t, n) {
                    Array.prototype.forEach.call(e, t, n)
                } : function(t, n, r) {
                    for (var i = t.length, o = e(t) ? t.split("") : t, a = 0; a < i; a++) a in o && n.call(r, o[a], a, t)
                },
                Ua = Array.prototype.map ? function(e, t, n) {
                    return Array.prototype.map.call(e, t, n)
                } : function(t, n, r) {
                    for (var i = t.length, o = Array(i), a = e(t) ? t.split("") : t, s = 0; s < i; s++) s in a && (o[s] = n.call(r, a[s], s, t));
                    return o
                },
                Wa = Array.prototype.some ? function(e, t, n) {
                    return Array.prototype.some.call(e, t, n)
                } : function(t, n, r) {
                    for (var i = t.length, o = e(t) ? t.split("") : t, a = 0; a < i; a++)
                        if (a in o && n.call(r, o[a], a, t)) return !0;
                    return !1
                };
            e: {
                var Ba = Sa.navigator;
                if (Ba) {
                    var Va = Ba.userAgent;
                    if (Va) {
                        Ma = Va;
                        break e
                    }
                }
                Ma = ""
            }
            var qa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
            x[" "] = r;
            var Ka, Ga = P("Opera"),
                Ha = P("Trident") || P("MSIE"),
                Qa = P("Edge"),
                Ya = Qa || Ha,
                Xa = P("Gecko") && !(g(Ma.toLowerCase(), "webkit") && !P("Edge")) && !(P("Trident") || P("MSIE")) && !P("Edge"),
                za = g(Ma.toLowerCase(), "webkit") && !P("Edge");
            e: {
                var Ja = "",
                    $a = function() {
                        var e = Ma;
                        return Xa ? /rv\:([^\);]+)(\)|;)/.exec(e) : Qa ? /Edge\/([\d\.]+)/.exec(e) : Ha ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e) : za ? /WebKit\/(\S+)/.exec(e) : Ga ? /(?:Version)[ \/]?(\S+)/.exec(e) : void 0
                    }();
                if ($a && (Ja = $a ? $a[1] : ""), Ha) {
                    var Za = M();
                    if (null != Za && Za > parseFloat(Ja)) {
                        Ka = String(Za);
                        break e
                    }
                }
                Ka = Ja
            }
            var es, ts = {},
                ns = Sa.document;
            es = ns && Ha ? M() || ("CSS1Compat" == ns.compatMode ? parseInt(Ka, 10) : 5) : void 0, W.prototype.get = function() {
                if (0 < this.b) {
                    this.b--;
                    var e = this.a;
                    this.a = e.next, e.next = null
                } else e = this.c();
                return e
            };
            var rs = new W(function() {
                return new q
            }, function(e) {
                e.reset()
            }, 100);
            q.prototype.set = function(e, t) {
                this.a = e, this.b = t, this.next = null
            }, q.prototype.reset = function() {
                this.next = this.b = this.a = null
            };
            var is, os, as = !1,
                ss = new function() {
                    this.b = this.a = null
                },
                us = 0,
                cs = 2,
                ls = 3;
            Y.prototype.reset = function() {
                this.f = this.b = this.g = this.a = null, this.c = !1
            };
            var hs = new W(function() {
                return new Y
            }, function(e) {
                e.reset()
            }, 100);
            Q.prototype.then = function(e, t, n) {
                return ne(this, u(e) ? e : null, u(t) ? t : null, n)
            }, j(Q), (Ea = Q.prototype).s = function(e, t) {
                return ne(this, null, e, t)
            }, Ea.cancel = function(e) {
                this.a == us && G(function() {
                    ee(this, new ce(e))
                }, this)
            }, Ea.Ac = function(e) {
                this.a = us, re(this, cs, e)
            }, Ea.Bc = function(e) {
                this.a = us, re(this, ls, e)
            }, Ea.Qb = function() {
                for (var e; e = ae(this);) se(this, e, this.a, this.i);
                this.h = !1
            };
            var fs = K;
            d(ce, v), ce.prototype.name = "cancel";
            var ps = !Ha || 9 <= Number(es);
            le.prototype.la = !0, le.prototype.ja = function() {
                return this.a
            }, le.prototype.toString = function() {
                return "Const{" + this.a + "}"
            };
            var ds = {};
            fe(""), pe.prototype.la = !0, pe.prototype.ja = function() {
                return this.a
            }, pe.prototype.toString = function() {
                return "TrustedResourceUrl{" + this.a + "}"
            };
            var vs = /%{(\w+)}/g,
                _s = /^(?:https:)?\/\/[0-9a-z.:[\]-]+\/|^\/[^\/\\]|^about:blank(#|$)/i,
                ys = {};
            _e.prototype.la = !0, _e.prototype.ja = function() {
                return this.a
            }, _e.prototype.toString = function() {
                return "SafeUrl{" + this.a + "}"
            };
            var gs = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
                ms = {};
            me("about:blank"), be.prototype.la = !0, be.prototype.ja = function() {
                return this.a
            }, be.prototype.toString = function() {
                return "SafeHtml{" + this.a + "}"
            };
            var bs = {};
            Ee("<!DOCTYPE html>"), Ee(""), Ee("<br>");
            var Es = {
                    cellpadding: "cellPadding",
                    cellspacing: "cellSpacing",
                    colspan: "colSpan",
                    frameborder: "frameBorder",
                    height: "height",
                    maxlength: "maxLength",
                    nonce: "nonce",
                    role: "role",
                    rowspan: "rowSpan",
                    type: "type",
                    usemap: "useMap",
                    valign: "vAlign",
                    width: "width"
                },
                ws = {
                    '"': '\\"',
                    "\\": "\\\\",
                    "/": "\\/",
                    "\b": "\\b",
                    "\f": "\\f",
                    "\n": "\\n",
                    "\r": "\\r",
                    "\t": "\\t",
                    "\v": "\\u000b"
                },
                Ts = /\uffff/.test("￿") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g,
                Ss = 0,
                Cs = {};
            Oe.prototype.oa = !1, Oe.prototype.ta = function() {
                if (this.Fa)
                    for (; this.Fa.length;) this.Fa.shift()()
            };
            var Ns = Object.freeze || function(e) {
                    return e
                },
                Ps = !Ha || 9 <= Number(es),
                Os = Ha && !F("9"),
                Is = function() {
                    if (!Sa.addEventListener || !Object.defineProperty) return !1;
                    var e = !1,
                        t = Object.defineProperty({}, "passive", {
                            get: function() {
                                e = !0
                            }
                        });
                    return Sa.addEventListener("test", r, t), Sa.removeEventListener("test", r, t), e
                }();
            Ae.prototype.c = function() {
                this.Bb = !1
            }, d(Re, Ae);
            var As = Ns({
                2: "touch",
                3: "pen",
                4: "mouse"
            });
            Re.prototype.c = function() {
                Re.ib.c.call(this);
                var e = this.a;
                if (e.preventDefault) e.preventDefault();
                else if (e.returnValue = !1, Os) try {
                    (e.ctrlKey || 112 <= e.keyCode && 123 >= e.keyCode) && (e.keyCode = -1)
                } catch (e) {}
            }, Re.prototype.g = function() {
                return this.a
            };
            var Rs = "closure_listenable_" + (1e6 * Math.random() | 0),
                ks = 0,
                Ds = "closure_lm_" + (1e6 * Math.random() | 0),
                Ls = {},
                xs = 0,
                Ms = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);
            d(Ye, Oe), Ye.prototype[Rs] = !0, Ye.prototype.removeEventListener = function(e, t, n, r) {
                We(this, e, t, n, r)
            }, Ye.prototype.ta = function() {
                if (Ye.ib.ta.call(this), this.u) {
                    var e, t = this.u;
                    for (e in t.a) {
                        for (var n = t.a[e], r = 0; r < n.length; r++) 0, ke(n[r]);
                        delete t.a[e], t.b--
                    }
                }
                this.Ra = null
            }, tt.prototype.a = null;
            var Fs = 0;
            tt.prototype.reset = function(e, t, n, r, i) {
                "number" == typeof i || Fs++, r || Pa(), this.b = t, delete this.a
            }, rt.prototype.toString = function() {
                return this.name
            };
            var js = new rt("SEVERE", 1e3),
                Us = new rt("CONFIG", 700),
                Ws = new rt("FINE", 500);
            nt.prototype.log = function(e, t, n) {
                if (e.value >= it(this).value)
                    for (u(t) && (t = t()), e = new tt(e, String(t), this.f), n && (e.a = n), n = "log:" + e.b, (e = Sa.console) && e.timeStamp && e.timeStamp(n), (e = Sa.msWriteProfilerMark) && e(n), n = this; n;) n = n.a
            };
            var Bs = {},
                Vs = null;
            (Ea = at.prototype).P = function() {
                st(this);
                for (var e = [], t = 0; t < this.a.length; t++) e.push(this.b[this.a[t]]);
                return e
            }, Ea.S = function() {
                return st(this), this.a.concat()
            }, Ea.clear = function() {
                this.b = {}, this.c = this.a.length = 0
            }, Ea.get = function(e, t) {
                return ut(this.b, e) ? this.b[e] : t
            }, Ea.set = function(e, t) {
                ut(this.b, e) || (this.c++, this.a.push(e)), this.b[e] = t
            }, Ea.forEach = function(e, t) {
                for (var n = this.S(), r = 0; r < n.length; r++) {
                    var i = n[r],
                        o = this.get(i);
                    e.call(t, o, i, this)
                }
            };
            var qs = null,
                Ks = null;
            ht.prototype.cancel = function(e) {
                if (this.a) this.c instanceof ht && this.c.cancel();
                else {
                    if (this.b) {
                        var t = this.b;
                        delete this.b, e ? t.cancel(e) : (t.l--, 0 >= t.l && t.cancel())
                    }
                    this.v ? this.v.call(this.o, this) : this.u = !0, this.a || (e = new gt, pt(this), ft(this, !1, e))
                }
            }, ht.prototype.m = function(e, t) {
                this.i = !1, ft(this, e, t)
            }, ht.prototype.A = function(e) {
                pt(this), ft(this, !0, e)
            }, ht.prototype.then = function(e, t, n) {
                var r, i, o = new Q(function(e, t) {
                    r = e, i = t
                });
                return dt(this, r, function(e) {
                    e instanceof gt ? o.cancel() : i(e)
                }), o.then(e, t, n)
            }, j(ht), d(yt, v), yt.prototype.message = "Deferred has already fired", yt.prototype.name = "AlreadyCalledError", d(gt, v), gt.prototype.message = "Deferred was canceled", gt.prototype.name = "CanceledError", mt.prototype.c = function() {
                throw delete Hs[this.a], this.b
            };
            var Gs, Hs = {};
            d(bt, function() {
                this.b = -1
            });
            for (var Qs = 64, Ys = Qs - 1, Xs = [], zs = 0; zs < Ys; zs++) Xs[zs] = 0;
            var Js = C(128, Xs);
            bt.prototype.reset = function() {
                this.g = this.c = 0, this.a = Sa.Int32Array ? new Int32Array(this.h) : N(this.h)
            };
            var $s = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
            d(Tt, bt);
            var Zs = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225],
                eu = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
            Nt.prototype.toString = function() {
                var e = [],
                    t = this.c;
                t && e.push(xt(t, tu, !0), ":");
                var n = this.b;
                return (n || "file" == t) && (e.push("//"), (t = this.l) && e.push(xt(t, tu, !0), "@"), e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), null != (n = this.i) && e.push(":", String(n))), (n = this.g) && (this.b && "/" != n.charAt(0) && e.push("/"), e.push(xt(n, "/" == n.charAt(0) ? ru : nu, !0))), (n = this.a.toString()) && e.push("?", n), (n = this.h) && e.push("#", xt(n, ou)), e.join("")
            };
            var tu = /[#\/\?@]/g,
                nu = /[\#\?:]/g,
                ru = /[\#\?]/g,
                iu = /[\#\?@]/g,
                ou = /#/g;
            (Ea = Ft.prototype).clear = function() {
                this.a = this.c = null, this.b = 0
            }, Ea.forEach = function(e, t) {
                jt(this), this.a.forEach(function(n, r) {
                    ja(n, function(n) {
                        e.call(t, n, r, this)
                    }, this)
                }, this)
            }, Ea.S = function() {
                jt(this);
                for (var e = this.a.P(), t = this.a.S(), n = [], r = 0; r < t.length; r++)
                    for (var i = e[r], o = 0; o < i.length; o++) n.push(t[r]);
                return n
            }, Ea.P = function(t) {
                jt(this);
                var n = [];
                if (e(t)) Vt(this, t) && (n = C(n, this.a.get(Kt(this, t))));
                else {
                    t = this.a.P();
                    for (var r = 0; r < t.length; r++) n = C(n, t[r])
                }
                return n
            }, Ea.set = function(e, t) {
                return jt(this), this.c = null, e = Kt(this, e), Vt(this, e) && (this.b -= this.a.get(e).length), this.a.set(e, [t]), this.b += 1, this
            }, Ea.get = function(e, t) {
                return 0 < (e = e ? this.P(e) : []).length ? String(e[0]) : t
            }, Ea.toString = function() {
                if (this.c) return this.c;
                if (!this.a) return "";
                for (var e = [], t = this.a.S(), n = 0; n < t.length; n++) {
                    var r = t[n],
                        i = encodeURIComponent(String(r));
                    r = this.P(r);
                    for (var o = 0; o < r.length; o++) {
                        var a = i;
                        "" !== r[o] && (a += "=" + encodeURIComponent(String(r[o]))), e.push(a)
                    }
                }
                return this.c = e.join("&")
            }, Gt.prototype.c = null;
            var au;
            d(Qt, Gt), Qt.prototype.a = function() {
                var e = Yt(this);
                return e ? new ActiveXObject(e) : new XMLHttpRequest
            }, Qt.prototype.b = function() {
                var e = {};
                return Yt(this) && (e[0] = !0, e[1] = !0), e
            }, au = new Qt, d(Xt, Ye);
            var su = "",
                uu = Xt.prototype,
                cu = ot("goog.net.XhrIo");
            uu.J = cu;
            var lu = /^https?$/i,
                hu = ["POST", "PUT"];
            (Ea = Xt.prototype).Ea = function() {
                void 0 !== Ta && this.a && (this.g = "Timed out after " + this.f + "ms, aborting", ct(this.J, an(this, this.g)), Xe(this, "timeout"), this.abort(8))
            }, Ea.abort = function() {
                this.a && this.b && (ct(this.J, an(this, "Aborting")), this.b = !1, this.c = !0, this.a.abort(), this.c = !1, Xe(this, "complete"), Xe(this, "abort"), tn(this))
            }, Ea.ta = function() {
                this.a && (this.b && (this.b = !1, this.c = !0, this.a.abort(), this.c = !1), tn(this, !0)), Xt.ib.ta.call(this)
            }, Ea.Ab = function() {
                this.oa || (this.G || this.h || this.c ? en(this) : this.jc())
            }, Ea.jc = function() {
                en(this)
            }, Ea.getResponse = function() {
                try {
                    if (!this.a) return null;
                    if ("response" in this.a) return this.a.response;
                    switch (this.l) {
                        case su:
                        case "text":
                            return this.a.responseText;
                        case "arraybuffer":
                            if ("mozResponseArrayBuffer" in this.a) return this.a.mozResponseArrayBuffer
                    }
                    var e = this.J;
                    return e && e.log(js, "Response type " + this.l + " is not supported on this browser", void 0), null
                } catch (e) {
                    return ct(this.J, "Can not get response: " + e.message), null
                }
            };
            var fu = /^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/,
                pu = 0,
                du = 1;
            d(ln, v), d(hn, Gt), hn.prototype.a = function() {
                var e = new XMLHttpRequest;
                if ("withCredentials" in e) return e;
                if ("undefined" != typeof XDomainRequest) return new fn;
                throw Error("Unsupported browser")
            }, hn.prototype.b = function() {
                return {}
            }, (Ea = fn.prototype).open = function(e, t, n) {
                if (null != n && !n) throw Error("Only async requests are supported.");
                this.a.open(e, t)
            }, Ea.send = function(e) {
                if (e) {
                    if ("string" != typeof e) throw Error("Only string data is supported");
                    this.a.send(e)
                } else this.a.send()
            }, Ea.abort = function() {
                this.a.abort()
            }, Ea.setRequestHeader = function() {}, Ea.getResponseHeader = function(e) {
                return "content-type" == e.toLowerCase() ? this.a.contentType : ""
            }, Ea.Wb = function() {
                this.status = 200, this.responseText = this.a.responseText, pn(this, 4)
            }, Ea.xb = function() {
                this.status = 500, this.responseText = "", pn(this, 4)
            }, Ea.Yb = function() {
                this.xb()
            }, Ea.Xb = function() {
                this.status = 200, pn(this, 1)
            }, Ea.getAllResponseHeaders = function() {
                return "content-type: " + this.a.contentType
            };
            var vu = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
                _u = "Firefox",
                yu = "Chrome",
                gu = {
                    Gc: "FirebaseCore-web",
                    Ic: "FirebaseUI-web"
                };
            Vn.prototype.get = function() {
                return this.a ? this.b : this.c
            };
            var mu, bu = {};
            try {
                var Eu = {};
                Object.defineProperty(Eu, "abcd", {
                    configurable: !0,
                    enumerable: !0,
                    value: 1
                }), Object.defineProperty(Eu, "abcd", {
                    configurable: !0,
                    enumerable: !0,
                    value: 2
                }), mu = 2 == Eu.abcd
            } catch (e) {
                mu = !1
            }
            var wu = "email",
                Tu = "newEmail",
                Su = "requestType",
                Cu = "email",
                Nu = "fromEmail",
                Pu = "data",
                Ou = "operation";
            d(Xn, Error), Xn.prototype.B = function() {
                return {
                    code: this.code,
                    message: this.message
                }
            }, Xn.prototype.toJSON = function() {
                return this.B()
            };
            var Iu = "auth/",
                Au = {
                    "argument-error": "",
                    "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
                    "app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
                    "captcha-check-failed": "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
                    "code-expired": "The SMS code has expired. Please re-send the verification code to try again.",
                    "cordova-not-ready": "Cordova framework is not ready.",
                    "cors-unsupported": "This browser is not supported.",
                    "credential-already-in-use": "This credential is already associated with a different user account.",
                    "custom-token-mismatch": "The custom token corresponds to a different audience.",
                    "requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
                    "dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
                    "email-already-in-use": "The email address is already in use by another account.",
                    "expired-action-code": "The action code has expired. ",
                    "cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.",
                    "internal-error": "An internal error has occurred.",
                    "invalid-app-credential": "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
                    "invalid-app-id": "The mobile app identifier is not registed for the current project.",
                    "invalid-user-token": "The user's credential is no longer valid. The user must sign in again.",
                    "invalid-auth-event": "An internal error has occurred.",
                    "invalid-verification-code": "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.",
                    "invalid-continue-uri": "The continue URL provided in the request is invalid.",
                    "invalid-cordova-configuration": "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
                    "invalid-custom-token": "The custom token format is incorrect. Please check the documentation.",
                    "invalid-email": "The email address is badly formatted.",
                    "invalid-api-key": "Your API key is invalid, please check you have copied it correctly.",
                    "invalid-cert-hash": "The SHA-1 certificate hash provided is invalid.",
                    "invalid-credential": "The supplied auth credential is malformed or has expired.",
                    "invalid-persistence-type": "The specified persistence type is invalid. It can only be local, session or none.",
                    "invalid-message-payload": "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
                    "invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
                    "invalid-oauth-client-id": "The OAuth client ID provided is either invalid or does not match the specified API key.",
                    "unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
                    "invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
                    "wrong-password": "The password is invalid or the user does not have a password.",
                    "invalid-phone-number": "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
                    "invalid-recipient-email": "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
                    "invalid-sender": "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
                    "invalid-verification-id": "The verification ID used to create the phone auth credential is invalid.",
                    "missing-android-pkg-name": "An Android Package Name must be provided if the Android App is required to be installed.",
                    "auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
                    "missing-app-credential": "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
                    "missing-verification-code": "The phone auth credential was created with an empty SMS verification code.",
                    "missing-continue-uri": "A continue URL must be provided in the request.",
                    "missing-iframe-start": "An internal error has occurred.",
                    "missing-ios-bundle-id": "An iOS Bundle ID must be provided if an App Store ID is provided.",
                    "missing-phone-number": "To send verification codes, provide a phone number for the recipient.",
                    "missing-verification-id": "The phone auth credential was created with an empty verification ID.",
                    "app-deleted": "This instance of FirebaseApp has been deleted.",
                    "account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
                    "network-request-failed": "A network error (such as timeout, interrupted connection or unreachable host) has occurred.",
                    "no-auth-event": "An internal error has occurred.",
                    "no-such-provider": "User was not linked to an account with the given provider.",
                    "operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
                    "operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
                    "popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.",
                    "popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.",
                    "provider-already-linked": "User can only be linked to one identity for the given provider.",
                    "quota-exceeded": "The project's quota for this operation has been exceeded.",
                    "redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.",
                    "redirect-operation-pending": "A redirect sign-in operation is already pending.",
                    timeout: "The operation has timed out.",
                    "user-token-expired": "The user's credential is no longer valid. The user must sign in again.",
                    "too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.",
                    "unauthorized-continue-uri": "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
                    "unsupported-persistence-type": "The current environment does not support the specified persistence type.",
                    "user-cancelled": "User did not grant your application the permissions it requested.",
                    "user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.",
                    "user-disabled": "The user account has been disabled by an administrator.",
                    "user-mismatch": "The supplied credentials do not correspond to the previously signed in user.",
                    "user-signed-out": "",
                    "weak-password": "The password must be 6 characters long or more.",
                    "web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled."
                },
                Ru = "android",
                ku = "handleCodeInApp",
                Du = "iOS",
                Lu = "url",
                xu = "installApp",
                Mu = "minimumVersion",
                Fu = "packageName",
                ju = "bundleId",
                Uu = "oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),
                Wu = ["client_id", "response_type", "scope", "redirect_uri", "state"],
                Bu = {
                    Hc: {
                        Ma: "locale",
                        za: 500,
                        ya: 600,
                        Na: "facebook.com",
                        $a: Wu
                    },
                    Jc: {
                        Ma: null,
                        za: 500,
                        ya: 620,
                        Na: "github.com",
                        $a: Wu
                    },
                    Kc: {
                        Ma: "hl",
                        za: 515,
                        ya: 680,
                        Na: "google.com",
                        $a: Wu
                    },
                    Qc: {
                        Ma: "lang",
                        za: 485,
                        ya: 705,
                        Na: "twitter.com",
                        $a: Uu
                    }
                },
                Vu = "idToken",
                qu = "providerId";
            d(rr, nr), d(ir, rr), d(or, rr), d(ar, rr), d(sr, rr), cr.prototype.wa = function(e) {
                return Hr(e, lr(this))
            }, cr.prototype.b = function(e, t) {
                var n = lr(this);
                return n.idToken = t, Qr(e, n)
            }, cr.prototype.c = function(e, t) {
                return ur(Yr(e, lr(this)), t)
            }, cr.prototype.B = function() {
                var e = {
                    providerId: this.providerId
                };
                return this.idToken && (e.oauthIdToken = this.idToken), this.accessToken && (e.oauthAccessToken = this.accessToken), this.secret && (e.oauthTokenSecret = this.secret), e
            }, hr.prototype.Ba = function(e) {
                return this.rb = D(e), this
            }, d(fr, hr), fr.prototype.sa = function(e) {
                return w(this.a, e) || this.a.push(e), this
            }, fr.prototype.wb = function() {
                return N(this.a)
            }, fr.prototype.credential = function(e, t) {
                if (!e && !t) throw new Xn("argument-error", "credential failed: must provide the ID token and/or the access token.");
                return new cr(this.providerId, {
                    idToken: e || null,
                    accessToken: t || null
                })
            }, d(pr, fr), Gn(pr, "PROVIDER_ID", "facebook.com"), d(vr, fr), Gn(vr, "PROVIDER_ID", "github.com"), d(yr, fr), Gn(yr, "PROVIDER_ID", "google.com"), d(mr, hr), Gn(mr, "PROVIDER_ID", "twitter.com"), Er.prototype.wa = function(e) {
                return zr(e, Ec, {
                    email: this.a,
                    password: this.f
                })
            }, Er.prototype.b = function(e, t) {
                return zr(e, vc, {
                    idToken: t,
                    email: this.a,
                    password: this.f
                })
            }, Er.prototype.c = function(e, t) {
                return ur(this.wa(e), t)
            }, Er.prototype.B = function() {
                return {
                    email: this.a,
                    password: this.f
                }
            }, Hn(wr, {
                PROVIDER_ID: "password"
            }), Tr.prototype.wa = function(e) {
                return e.Qa(Sr(this))
            }, Tr.prototype.b = function(e, t) {
                var n = Sr(this);
                return n.idToken = t, zr(e, Tc, n)
            }, Tr.prototype.c = function(e, t) {
                var n = Sr(this);
                return n.operation = "REAUTH", e = zr(e, Sc, n), ur(e, t)
            }, Tr.prototype.B = function() {
                var e = {
                    providerId: "phone"
                };
                return this.a.Pa && (e.verificationId = this.a.Pa), this.a.Oa && (e.verificationCode = this.a.Oa), this.a.Da && (e.temporaryProof = this.a.Da), this.a.Y && (e.phoneNumber = this.a.Y), e
            }, Cr.prototype.Qa = function(t, n) {
                var r = this.a.c;
                return z(n.verify()).then(function(i) {
                    if (!e(i)) throw new Xn("argument-error", "An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");
                    switch (n.type) {
                        case "recaptcha":
                            return function(e, t) {
                                return zr(e, pc, t)
                            }(r, {
                                phoneNumber: t,
                                recaptchaToken: i
                            }).then(function(e) {
                                return "function" == typeof n.reset && n.reset(), e
                            }, function(e) {
                                throw "function" == typeof n.reset && n.reset(), e
                            });
                        default:
                            throw new Xn("argument-error", 'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.')
                    }
                })
            }, Hn(Cr, {
                PROVIDER_ID: "phone"
            }), Ir.prototype.B = function() {
                return {
                    type: this.b,
                    eventId: this.c,
                    urlResponse: this.f,
                    sessionId: this.g,
                    error: this.a && this.a.B()
                }
            };
            var Ku = null;
            Rr.prototype.subscribe = function(e) {
                var t = this;
                this.a.push(e), this.b || (this.b = function(e) {
                    for (var n = 0; n < t.a.length; n++) t.a[n](e)
                }, "function" == typeof(e = In("universalLinks.subscribe", Sa)) && e(null, this.b))
            }, Rr.prototype.unsubscribe = function(e) {
                S(this.a, function(t) {
                    return t == e
                })
            }, d(kr, Xn), d(Dr, Xn), Dr.prototype.B = function() {
                var e = {
                    code: this.code,
                    message: this.message
                };
                this.email && (e.email = this.email), this.phoneNumber && (e.phoneNumber = this.phoneNumber);
                var t = this.credential && this.credential.B();
                return t && L(e, t), e
            }, Dr.prototype.toJSON = function() {
                return this.B()
            }, d(xr, Gt), xr.prototype.a = function() {
                return new this.f
            }, xr.prototype.b = function() {
                return {}
            };
            var Gu, Hu = "idToken",
                Qu = new Vn(3e4, 6e4),
                Yu = {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                Xu = new Vn(3e4, 6e4),
                zu = {
                    "Content-Type": "application/json"
                };
            Mr.prototype.m = function(e, t, n, r, i, o) {
                var a = "Node" == Sn(),
                    s = Cn() ? a ? new Xt(this.o) : new Xt : new Xt(this.f);
                if (o) {
                    s.f = Math.max(0, o);
                    var u = setTimeout(function() {
                        Xe(s, "timeout")
                    }, o)
                }
                ze(s, "complete", function() {
                    u && clearTimeout(u);
                    var e = null;
                    try {
                        e = JSON.parse(function(e) {
                            try {
                                return e.a ? e.a.responseText : ""
                            } catch (t) {
                                return ct(e.J, "Can not get responseText: " + t.message), ""
                            }
                        }(this)) || null
                    } catch (t) {
                        e = null
                    }
                    t && t(e)
                }), Je(s, "ready", function() {
                    u && clearTimeout(u), Ie(this)
                }), Je(s, "timeout", function() {
                    u && clearTimeout(u), Ie(this), t && t(null)
                }), zt(s, e, n, r, i)
            };
            var Ju = fe("https://apis.google.com/js/client.js?onload=%{onload}"),
                $u = "__fcb" + Math.floor(1e6 * Math.random()).toString();
            Mr.prototype.u = function(e, t, n, r, i) {
                var o = this;
                Gu.then(function() {
                    window.gapi.client.setApiKey(o.b);
                    var a = window.gapi.auth.getToken();
                    window.gapi.auth.setToken(null), window.gapi.client.request({
                        path: e,
                        method: n,
                        body: r,
                        headers: i,
                        authType: "none",
                        callback: function(e) {
                            window.gapi.auth.setToken(a), t && t(e)
                        }
                    })
                }).s(function(e) {
                    t && t({
                        error: {
                            message: e && e.message || "CORS_UNSUPPORTED"
                        }
                    })
                })
            }, Mr.prototype.gb = function() {
                return zr(this, _c, {})
            }, Mr.prototype.kb = function(e, t) {
                return zr(this, dc, {
                    idToken: e,
                    email: t
                })
            }, Mr.prototype.lb = function(e, t) {
                return zr(this, vc, {
                    idToken: e,
                    password: t
                })
            };
            var Zu = {
                displayName: "DISPLAY_NAME",
                photoUrl: "PHOTO_URL"
            };
            (Ea = Mr.prototype).mb = function(e, t) {
                var n = {
                        idToken: e
                    },
                    r = [];
                return O(Zu, function(e, i) {
                    var o = t[i];
                    null === o ? r.push(e) : i in t && (n[i] = o)
                }), r.length && (n.deleteAttribute = r), zr(this, dc, n)
            }, Ea.cb = function(e, t) {
                return e = {
                    requestType: "PASSWORD_RESET",
                    email: e
                }, L(e, t), zr(this, cc, e)
            }, Ea.bb = function(e, t) {
                return e = {
                    requestType: "VERIFY_EMAIL",
                    idToken: e
                }, L(e, t), zr(this, uc, e)
            }, Ea.Qa = function(e) {
                return zr(this, wc, e)
            }, Ea.Ta = function(e, t) {
                return zr(this, fc, {
                    oobCode: e,
                    newPassword: t
                })
            }, Ea.Ia = function(e) {
                return zr(this, nc, {
                    oobCode: e
                })
            }, Ea.Sa = function(e) {
                return zr(this, tc, {
                    oobCode: e
                })
            };
            var ec, tc = {
                    endpoint: "setAccountInfo",
                    D: Xr,
                    ga: "email"
                },
                nc = {
                    endpoint: "resetPassword",
                    D: Xr,
                    O: function(e) {
                        if (!e.email || !e.requestType) throw new Xn("internal-error")
                    }
                },
                rc = {
                    endpoint: "signupNewUser",
                    D: function(e) {
                        if (Wr(e), !e.password) throw new Xn("weak-password")
                    },
                    O: Vr,
                    T: !0
                },
                ic = {
                    endpoint: "createAuthUri"
                },
                oc = {
                    endpoint: "deleteAccount",
                    ea: ["idToken"]
                },
                ac = {
                    endpoint: "setAccountInfo",
                    ea: ["idToken", "deleteProvider"],
                    D: function(e) {
                        if (!a(e.deleteProvider)) throw new Xn("internal-error")
                    }
                },
                sc = {
                    endpoint: "getAccountInfo"
                },
                uc = {
                    endpoint: "getOobConfirmationCode",
                    ea: ["idToken", "requestType"],
                    D: function(e) {
                        if ("VERIFY_EMAIL" != e.requestType) throw new Xn("internal-error")
                    },
                    ga: "email"
                },
                cc = {
                    endpoint: "getOobConfirmationCode",
                    ea: ["requestType"],
                    D: function(e) {
                        if ("PASSWORD_RESET" != e.requestType) throw new Xn("internal-error");
                        Wr(e)
                    },
                    ga: "email"
                },
                lc = {
                    nb: !0,
                    endpoint: "getProjectConfig",
                    zb: "GET"
                },
                hc = {
                    nb: !0,
                    endpoint: "getRecaptchaParam",
                    zb: "GET",
                    O: function(e) {
                        if (!e.recaptchaSiteKey) throw new Xn("internal-error")
                    }
                },
                fc = {
                    endpoint: "resetPassword",
                    D: Xr,
                    ga: "email"
                },
                pc = {
                    endpoint: "sendVerificationCode",
                    ea: ["phoneNumber", "recaptchaToken"],
                    ga: "sessionInfo"
                },
                dc = {
                    endpoint: "setAccountInfo",
                    ea: ["idToken"],
                    D: Br,
                    T: !0
                },
                vc = {
                    endpoint: "setAccountInfo",
                    ea: ["idToken"],
                    D: function(e) {
                        if (Br(e), !e.password) throw new Xn("weak-password")
                    },
                    O: Vr,
                    T: !0
                },
                _c = {
                    endpoint: "signupNewUser",
                    O: Vr,
                    T: !0
                },
                yc = {
                    endpoint: "verifyAssertion",
                    D: Kr,
                    O: Gr,
                    T: !0
                },
                gc = {
                    endpoint: "verifyAssertion",
                    D: Kr,
                    O: function(e) {
                        if (e.errorMessage && "USER_NOT_FOUND" == e.errorMessage) throw new Xn("user-not-found");
                        if (e.errorMessage) throw Jr(e.errorMessage);
                        if (!e[Hu]) throw new Xn("internal-error")
                    },
                    T: !0
                },
                mc = {
                    endpoint: "verifyAssertion",
                    D: function(e) {
                        if (Kr(e), !e.idToken) throw new Xn("internal-error")
                    },
                    O: Gr,
                    T: !0
                },
                bc = {
                    endpoint: "verifyCustomToken",
                    D: function(e) {
                        if (!e.token) throw new Xn("invalid-custom-token")
                    },
                    O: Vr,
                    T: !0
                },
                Ec = {
                    endpoint: "verifyPassword",
                    D: function(e) {
                        if (Wr(e), !e.password) throw new Xn("wrong-password")
                    },
                    O: Vr,
                    T: !0
                },
                wc = {
                    endpoint: "verifyPhoneNumber",
                    D: qr,
                    O: Vr
                },
                Tc = {
                    endpoint: "verifyPhoneNumber",
                    D: function(e) {
                        if (!e.idToken) throw new Xn("internal-error");
                        qr(e)
                    },
                    O: function(e) {
                        if (e.temporaryProof) throw e.code = "credential-already-in-use", Lr(e);
                        Vr(e)
                    }
                },
                Sc = {
                    Pb: {
                        USER_NOT_FOUND: "user-not-found"
                    },
                    endpoint: "verifyPhoneNumber",
                    D: qr,
                    O: Vr
                },
                Cc = {
                    Mc: {
                        Va: "https://www.googleapis.com/identitytoolkit/v3/relyingparty/",
                        ab: "https://securetoken.googleapis.com/v1/token",
                        id: "p"
                    },
                    Oc: {
                        Va: "https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
                        ab: "https://staging-securetoken.sandbox.googleapis.com/v1/token",
                        id: "s"
                    },
                    Pc: {
                        Va: "https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",
                        ab: "https://test-securetoken.sandbox.googleapis.com/v1/token",
                        id: "t"
                    }
                };
            ec = Zr("__EID__") ? "__EID__" : void 0;
            var Nc = fe("https://apis.google.com/js/api.js?onload=%{onload}"),
                Pc = new Vn(3e4, 6e4),
                Oc = new Vn(5e3, 15e3),
                Ic = null;
            ti.prototype.toString = function() {
                return this.f ? At(this.a, "v", this.f) : Bt(this.a.a, "v"), this.b ? At(this.a, "eid", this.b) : Bt(this.a.a, "eid"), this.c.length ? At(this.a, "fw", this.c.join(",")) : Bt(this.a.a, "fw"), this.a.toString()
            }, ni.prototype.toString = function() {
                var e = Dt(this.m, "/__/auth/handler");
                if (At(e, "apiKey", this.u), At(e, "appName", this.c), At(e, "authType", this.l), this.a.isOAuthProvider) {
                    var t = this.a;
                    try {
                        var n = wa.app(this.c).auth().$()
                    } catch (e) {
                        n = null
                    }
                    t.Ua = n, At(e, "providerId", this.a.providerId), n = Mn((t = this.a).rb);
                    for (var r in n) n[r] = n[r].toString();
                    r = t.rc, n = D(n);
                    for (var i = 0; i < r.length; i++) {
                        var o = r[i];
                        o in n && delete n[o]
                    }
                    t.Wa && t.Ua && !n[t.Wa] && (n[t.Wa] = t.Ua), R(n) || At(e, "customParameters", xn(n))
                }
                if ("function" == typeof this.a.wb && (t = this.a.wb()).length && At(e, "scopes", t.join(",")), this.h ? At(e, "redirectUrl", this.h) : Bt(e.a, "redirectUrl"), this.g ? At(e, "eventId", this.g) : Bt(e.a, "eventId"), this.i ? At(e, "v", this.i) : Bt(e.a, "v"), this.b)
                    for (var a in this.b) this.b.hasOwnProperty(a) && !Rt(e, a) && At(e, a, this.b[a]);
                return this.f ? At(e, "eid", this.f) : Bt(e.a, "eid"), (a = ri(this.c)).length && At(e, "fw", a.join(",")), e.toString()
            }, (Ea = ii.prototype).Ca = function(e, t, n) {
                var r = new Xn("popup-closed-by-user"),
                    i = new Xn("web-storage-unsupported"),
                    o = this,
                    a = !1;
                return this.ba().then(function() {
                    ci(o).then(function(n) {
                        n || (e && mn(e), t(i), a = !0)
                    })
                }).s(function() {}).then(function() {
                    if (!a) return function(e) {
                        return new Q(function(t) {
                            function n() {
                                et(2e3).then(function() {
                                    if (e && !e.closed) return n();
                                    t()
                                })
                            }
                            return n()
                        })
                    }(e)
                }).then(function() {
                    if (!a) return et(n).then(function() {
                        t(r)
                    })
                })
            }, Ea.Db = function() {
                var e = On();
                return !Ln(e) && !Un(e)
            }, Ea.yb = function() {
                return !1
            }, Ea.vb = function(e, t, n, r, i, o, a) {
                if (!e) return J(new Xn("popup-blocked"));
                if (a && !Ln()) return this.ba().s(function(t) {
                    mn(e), i(t)
                }), r(), z();
                this.a || (this.a = oi(si(this)));
                var s = this;
                return this.a.then(function() {
                    var t = s.ba().s(function(t) {
                        throw mn(e), i(t), t
                    });
                    return r(), t
                }).then(function() {
                    if (Or(n), !a) {
                        _n(ui(s.u, s.f, s.b, t, n, null, o, s.c, void 0, s.h), e)
                    }
                }).s(function(e) {
                    throw "auth/network-request-failed" == e.code && (s.a = null), e
                })
            }, Ea.Aa = function(e, t, n) {
                this.a || (this.a = oi(si(this)));
                var r = this;
                return this.a.then(function() {
                    Or(t);
                    _n(ui(r.u, r.f, r.b, e, t, vn(), n, r.c, void 0, r.h))
                }).s(function(e) {
                    throw "auth/network-request-failed" == e.code && (r.a = null), e
                })
            }, Ea.ba = function() {
                var e = this;
                return ai(this).then(function() {
                    return e.i.Ya
                }).s(function() {
                    throw e.a = null, new Xn("network-request-failed")
                })
            }, Ea.Hb = function() {
                return !0
            }, Ea.ua = function(e) {
                this.g.push(e)
            }, Ea.Ja = function(e) {
                S(this.g, function(t) {
                    return t == e
                })
            }, (Ea = li.prototype).get = function(e) {
                return z(this.a.getItem(e)).then(function(e) {
                    return e && Fn(e)
                })
            }, Ea.set = function(e, t) {
                return z(this.a.setItem(e, xn(t)))
            }, Ea.X = function(e) {
                return z(this.a.removeItem(e))
            }, Ea.ia = function() {}, Ea.da = function() {}, (Ea = hi.prototype).get = function(e) {
                return z(this.a[e])
            }, Ea.set = function(e, t) {
                return this.a[e] = t, z()
            }, Ea.X = function(e) {
                return delete this.a[e], z()
            }, Ea.ia = function() {}, Ea.da = function() {};
            var Ac;
            (Ea = fi.prototype).set = function(e, t) {
                var n, r = !1,
                    i = this;
                return Z(pi(this).then(function(t) {
                    return n = t, t = di(i, vi(i, n, !0)), _i(t.get(e))
                }).then(function(o) {
                    var a = di(i, vi(i, n, !0));
                    return o ? (o.value = t, _i(a.put(o))) : (i.a++, r = !0, o = {}, o[i.g] = e, o[i.l] = t, _i(a.add(o)))
                }).then(function() {
                    i.f[e] = t
                }), function() {
                    r && i.a--
                })
            }, Ea.get = function(e) {
                var t = this;
                return pi(this).then(function(n) {
                    return _i(di(t, vi(t, n, !1)).get(e))
                }).then(function(e) {
                    return e && e.value
                })
            }, Ea.X = function(e) {
                var t = !1,
                    n = this;
                return Z(pi(this).then(function(r) {
                    return t = !0, n.a++, _i(di(n, vi(n, r, !0)).delete(e))
                }).then(function() {
                    delete n.f[e]
                }), function() {
                    t && n.a--
                })
            }, Ea.zc = function() {
                var e = this;
                return pi(this).then(function(t) {
                    var n = di(e, vi(e, t, !1));
                    return n.getAll ? _i(n.getAll()) : new Q(function(e, t) {
                        var r = [],
                            i = n.openCursor();
                        i.onsuccess = function(t) {
                            (t = t.target.result) ? (r.push(t.value), t.continue()) : e(r)
                        }, i.onerror = function(e) {
                            t(Error(e.target.errorCode))
                        }
                    })
                }).then(function(t) {
                    var n = {},
                        r = [];
                    if (0 == e.a) {
                        for (r = 0; r < t.length; r++) n[t[r][e.g]] = t[r][e.l];
                        r = yn(e.f, n), e.f = n
                    }
                    return r
                })
            }, Ea.ia = function(e) {
                0 == this.c.length && function(e) {
                    function t() {
                        return e.b = et(800).then(f(e.zc, e)).then(function(t) {
                            0 < t.length && ja(e.c, function(e) {
                                e(t)
                            })
                        }).then(t).s(function(e) {
                            "STOP_EVENT" != e.message && t()
                        }), e.b
                    }
                    e.b && e.b.cancel("STOP_EVENT"), t()
                }(this), this.c.push(e)
            }, Ea.da = function(e) {
                S(this.c, function(t) {
                    return t == e
                }), 0 == this.c.length && this.b && this.b.cancel("STOP_EVENT")
            }, (Ea = yi.prototype).get = function(e) {
                var t = this;
                return z().then(function() {
                    return Fn(t.a.getItem(e))
                })
            }, Ea.set = function(e, t) {
                var n = this;
                return z().then(function() {
                    var r = xn(t);
                    null === r ? n.X(e) : n.a.setItem(e, r)
                })
            }, Ea.X = function(e) {
                var t = this;
                return z().then(function() {
                    t.a.removeItem(e)
                })
            }, Ea.ia = function(e) {
                Sa.window && Fe(Sa.window, "storage", e)
            }, Ea.da = function(e) {
                Sa.window && We(Sa.window, "storage", e)
            }, (Ea = mi.prototype).get = function() {
                return z(null)
            }, Ea.set = function() {
                return z()
            }, Ea.X = function() {
                return z()
            }, Ea.ia = function() {}, Ea.da = function() {}, (Ea = bi.prototype).get = function(e) {
                var t = this;
                return z().then(function() {
                    return Fn(t.a.getItem(e))
                })
            }, Ea.set = function(e, t) {
                var n = this;
                return z().then(function() {
                    var r = xn(t);
                    null === r ? n.X(e) : n.a.setItem(e, r)
                })
            }, Ea.X = function(e) {
                var t = this;
                return z().then(function() {
                    t.a.removeItem(e)
                })
            }, Ea.ia = function() {}, Ea.da = function() {};
            var Rc, kc, Dc = {
                    C: yi,
                    jb: bi
                },
                Lc = {
                    C: yi,
                    jb: bi
                },
                xc = {
                    C: li,
                    jb: mi
                },
                Mc = {
                    Lc: "local",
                    NONE: "none",
                    Nc: "session"
                };
            wi.prototype.get = function(e, t) {
                return Si(this, e.C).get(Ci(this, e, t))
            }, wi.prototype.set = function(e, t, n) {
                var r = Ci(this, e, n),
                    i = this,
                    o = Si(this, e.C);
                return o.set(r, t).then(function() {
                    return o.get(r)
                }).then(function(t) {
                    "local" == e.C && (i.b[r] = t)
                })
            }, wi.prototype.m = function(e) {
                if (e && e.g) {
                    var t = e.a.key;
                    if (null == t)
                        for (var n in this.a) {
                            var r = this.b[n];
                            void 0 === r && (r = null);
                            var i = Sa.localStorage.getItem(n);
                            i !== r && (this.b[n] = i, this.c(n))
                        } else if (0 == t.indexOf(this.i + this.g) && this.a[t]) {
                            if (void 0 !== e.a.a ? Si(this, "local").da(this.h) : Ii(this), this.A)
                                if (n = Sa.localStorage.getItem(t), (r = e.a.newValue) !== n) null !== r ? Sa.localStorage.setItem(t, r) : Sa.localStorage.removeItem(t);
                                else if (this.b[t] === r && void 0 === e.a.a) return;
                            var o = this;
                            n = function() {
                                void 0 === e.a.a && o.b[t] === Sa.localStorage.getItem(t) || (o.b[t] = Sa.localStorage.getItem(t), o.c(t))
                            }, Ha && es && 10 == es && Sa.localStorage.getItem(t) !== e.a.newValue && e.a.newValue !== e.a.oldValue ? setTimeout(n, 10) : n()
                        }
                } else ja(e, f(this.c, this))
            }, wi.prototype.c = function(e) {
                this.a[e] && ja(this.a[e], function(e) {
                    e()
                })
            };
            var Fc = {
                name: "authEvent",
                C: "local"
            };
            (Ea = Ai.prototype).ba = function() {
                return this.xa ? this.xa : this.xa = (wn(void 0) ? En().then(function() {
                    return new Q(function(e, t) {
                        var n = Sa.document,
                            r = setTimeout(function() {
                                t(Error("Cordova framework is not ready."))
                            }, 1e3);
                        n.addEventListener("deviceready", function() {
                            clearTimeout(r), e()
                        }, !1)
                    })
                }) : J(Error("Cordova must run in an Android or iOS file scheme."))).then(function() {
                    if ("function" != typeof In("universalLinks.subscribe", Sa)) throw Ri("cordova-universal-links-plugin is not installed");
                    if (void 0 === In("BuildInfo.packageName", Sa)) throw Ri("cordova-plugin-buildinfo is not installed");
                    if ("function" != typeof In("cordova.plugins.browsertab.openUrl", Sa)) throw Ri("cordova-plugin-browsertab is not installed");
                    if ("function" != typeof In("cordova.InAppBrowser.open", Sa)) throw Ri("cordova-plugin-inappbrowser is not installed")
                }, function() {
                    throw new Xn("cordova-not-ready")
                })
            }, Ea.Ca = function(e, t) {
                return t(new Xn("operation-not-supported-in-this-environment")), z()
            }, Ea.vb = function() {
                return J(new Xn("operation-not-supported-in-this-environment"))
            }, Ea.Hb = function() {
                return !1
            }, Ea.Db = function() {
                return !0
            }, Ea.yb = function() {
                return !0
            }, Ea.Aa = function(e, t, n) {
                if (this.c) return J(new Xn("redirect-operation-pending"));
                var r = this,
                    i = Sa.document,
                    o = null,
                    a = null,
                    s = null,
                    u = null;
                return this.c = Z(z().then(function() {
                    return Or(t), xi(r)
                }).then(function() {
                    return Di(r, e, t, n)
                }).then(function() {
                    return new Q(function(e, t) {
                        a = function() {
                            var t = In("cordova.plugins.browsertab.close", Sa);
                            return e(), "function" == typeof t && t(), r.a && "function" == typeof r.a.close && (r.a.close(), r.a = null), !1
                        }, r.ua(a), s = function() {
                            o || (o = et(r.w).then(function() {
                                t(new Xn("redirect-cancelled-by-user"))
                            }))
                        }, u = function() {
                            qn() && s()
                        }, i.addEventListener("resume", s, !1), On().toLowerCase().match(/android/) || i.addEventListener("visibilitychange", u, !1)
                    }).s(function(e) {
                        return Mi(r).then(function() {
                            throw e
                        })
                    })
                }), function() {
                    s && i.removeEventListener("resume", s, !1), u && i.removeEventListener("visibilitychange", u, !1), o && o.cancel(), a && r.Ja(a), r.c = null
                })
            }, Ea.ua = function(e) {
                this.b.push(e), xi(this).s(function(t) {
                    "auth/invalid-cordova-configuration" === t.code && (t = new Ir("unknown", null, null, null, new Xn("no-auth-event")), e(t))
                })
            }, Ea.Ja = function(e) {
                S(this.b, function(t) {
                    return t == e
                })
            };
            var jc = {
                name: "pendingRedirect",
                C: "session"
            };
            ji.prototype.reset = function() {
                this.f = !1, this.a.Ja(this.i), this.a = Ui(this.v, this.l, this.u)
            }, ji.prototype.subscribe = function(e) {
                if (w(this.h, e) || this.h.push(e), !this.f) {
                    var t = this;
                    (function(e) {
                        return e.b.get(jc, e.a).then(function(e) {
                            return "pending" == e
                        })
                    })(this.g).then(function(e) {
                        e ? Fi(t.g).then(function() {
                            Wi(t).s(function(e) {
                                var n = new Ir("unknown", null, null, null, new Xn("operation-not-supported-in-this-environment"));
                                qi(e) && t.m(n)
                            })
                        }) : Bi(t)
                    }).s(function() {
                        Bi(t)
                    })
                }
            }, ji.prototype.unsubscribe = function(e) {
                S(this.h, function(t) {
                    return t == e
                })
            }, ji.prototype.m = function(e) {
                if (!e) throw new Xn("invalid-auth-event");
                for (var t = !1, n = 0; n < this.h.length; n++) {
                    var r = this.h[n];
                    if (r.ob(e.b, e.c)) {
                        (t = this.b[e.b]) && t.h(e, r), t = !0;
                        break
                    }
                }
                return Hi(this.c), t
            };
            var Uc = new Vn(2e3, 1e4),
                Wc = new Vn(3e4, 6e4);
            ji.prototype.aa = function() {
                return this.c.aa()
            }, ji.prototype.Aa = function(e, t, n) {
                var r, i = this;
                return function(e) {
                    return e.b.set(jc, "pending", e.a)
                }(this.g).then(function() {
                    return i.a.Aa(e, t, n).s(function(e) {
                        if (qi(e)) throw new Xn("operation-not-supported-in-this-environment");
                        return r = e, Fi(i.g).then(function() {
                            throw r
                        })
                    }).then(function() {
                        return i.a.Hb() ? new Q(function() {}) : Fi(i.g).then(function() {
                            return i.aa()
                        }).then(function() {}).s(function() {})
                    })
                })
            }, ji.prototype.Ca = function(e, t, n, r) {
                return this.a.Ca(n, function(n) {
                    e.fa(t, null, n, r)
                }, Uc.get())
            };
            var Bc = {};
            Gi.prototype.reset = function() {
                this.b = null, this.a && (this.a.cancel(), this.a = null)
            }, Gi.prototype.h = function(e, t) {
                if (!e) return J(new Xn("invalid-auth-event"));
                this.reset(), this.g = !0;
                var n = e.b,
                    r = e.c,
                    i = e.a && "auth/web-storage-unsupported" == e.a.code,
                    o = e.a && "auth/operation-not-supported-in-this-environment" == e.a.code;
                return "unknown" != n || i || o ? e.a ? (Yi(this, !0, null, e.a), e = z()) : e = t.va(n, r) ? function(e, t, n) {
                    n = n.va(t.b, t.c);
                    var r = t.f,
                        i = t.g,
                        o = !!t.b.match(/Redirect$/);
                    return n(r, i).then(function(t) {
                        Yi(e, o, t, null)
                    }).s(function(t) {
                        Yi(e, o, null, t)
                    })
                }(this, e, t) : J(new Xn("invalid-auth-event")) : (Yi(this, !1, null, null), e = z()), e
            }, Gi.prototype.aa = function() {
                var e = this;
                return new Q(function(t, n) {
                    e.b ? e.b().then(t, n) : (e.f.push(t), e.c.push(n), function(e) {
                        var t = new Xn("timeout");
                        e.a && e.a.cancel(), e.a = et(Wc.get()).then(function() {
                            e.b || Yi(e, !0, null, t)
                        })
                    }(e))
                })
            }, Xi.prototype.h = function(e, t) {
                if (!e) return J(new Xn("invalid-auth-event"));
                var n = e.b,
                    r = e.c;
                return e.a ? (t.fa(e.b, null, e.a, e.c), e = z()) : e = t.va(n, r) ? function(e, t) {
                    var n = e.c,
                        r = e.b;
                    return t.va(r, n)(e.f, e.g).then(function(e) {
                        t.fa(r, e, null, n)
                    }).s(function(e) {
                        t.fa(r, null, e, n)
                    })
                }(e, t) : J(new Xn("invalid-auth-event")), e
            }, zi.prototype.confirm = function(e) {
                return e = Nr(this.verificationId, e), this.a(e)
            }, $i.prototype.start = function() {
                this.a = this.c, Zi(this, !0)
            }, to.prototype.B = function() {
                return {
                    apiKey: this.f.b,
                    refreshToken: this.a,
                    accessToken: this.b,
                    expirationTime: this.c
                }
            }, to.prototype.getToken = function(e) {
                return e = !!e, this.b && !this.a ? J(new Xn("user-token-expired")) : e || !this.b || Pa() > this.c - 3e4 ? this.a ? io(this, {
                    grant_type: "refresh_token",
                    refresh_token: this.a
                }) : z(null) : z({
                    accessToken: this.b,
                    expirationTime: this.c,
                    refreshToken: this.a
                })
            }, oo.prototype.B = function() {
                return {
                    lastLoginAt: this.b,
                    createdAt: this.a
                }
            }, d(ao, Ae), d(so, Ye), so.prototype.na = function(e) {
                this.ha = e, Fr(this.c, e)
            }, so.prototype.$ = function() {
                return this.ha
            }, so.prototype.Ka = function() {
                return N(this.R)
            }, so.prototype.Ga = function() {
                this.l.b && (eo(this.l), this.l.start())
            }, Gn(so.prototype, "providerId", "firebase"), (Ea = so.prototype).reload = function() {
                var e = this;
                return xo(this, bo(this).then(function() {
                    return No(e).then(function() {
                        return _o(e)
                    }).then(mo)
                }))
            }, Ea.F = function(e) {
                var t = this;
                return xo(this, bo(this).then(function() {
                    return t.h.getToken(e)
                }).then(function(e) {
                    if (!e) throw new Xn("internal-error");
                    return e.accessToken != t.pa && (vo(t, e.accessToken), Xe(t, new ao("tokenChanged"))), So(t, "refreshToken", e.refreshToken), e.accessToken
                }))
            }, Ea.getToken = function(e) {
                return bu["firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead."] || (bu["firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead."] = !0, "undefined" != typeof console && "function" == typeof console.warn && console.warn("firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead.")), this.F(e)
            }, Ea.kc = function(e) {
                if (!(e = e.users) || !e.length) throw new Xn("internal-error");
                go(this, {
                    uid: (e = e[0]).localId,
                    displayName: e.displayName,
                    photoURL: e.photoUrl,
                    email: e.email,
                    emailVerified: !!e.emailVerified,
                    phoneNumber: e.phoneNumber,
                    lastLoginAt: e.lastLoginAt,
                    createdAt: e.createdAt
                });
                for (var t = Oo(e), n = 0; n < t.length; n++) wo(this, t[n]);
                So(this, "isAnonymous", !(this.email && e.passwordHash || this.providerData && this.providerData.length))
            }, Ea.Za = function(e) {
                var t = this,
                    n = null;
                return xo(this, e.c(this.c, this.uid).then(function(e) {
                    return Po(t, e), n = Ao(t, e, "reauthenticate"), t.i = null, t.reload()
                }).then(function() {
                    return n
                }), !0)
            }, Ea.mc = function(e) {
                return this.Za(e).then(function() {})
            }, Ea.Xa = function(e) {
                var t = this,
                    n = null;
                return xo(this, Io(this, e.providerId).then(function() {
                    return t.F()
                }).then(function(n) {
                    return e.b(t.c, n)
                }).then(function(e) {
                    return n = Ao(t, e, "link"), Ro(t, e)
                }).then(function() {
                    return n
                }))
            }, Ea.cc = function(e) {
                return this.Xa(e).then(function(e) {
                    return e.user
                })
            }, Ea.dc = function(e, t) {
                var n = this;
                return xo(this, Io(this, "phone").then(function() {
                    return Ji(ho(n), e, t, f(n.Xa, n))
                }))
            }, Ea.nc = function(e, t) {
                var n = this;
                return xo(this, z().then(function() {
                    return Ji(ho(n), e, t, f(n.Za, n))
                }), !0)
            }, Ea.kb = function(e) {
                var t = this;
                return xo(this, this.F().then(function(n) {
                    return t.c.kb(n, e)
                }).then(function(e) {
                    return Po(t, e), t.reload()
                }))
            }, Ea.Dc = function(e) {
                var t = this;
                return xo(this, this.F().then(function(n) {
                    return e.b(t.c, n)
                }).then(function(e) {
                    return Po(t, e), t.reload()
                }))
            }, Ea.lb = function(e) {
                var t = this;
                return xo(this, this.F().then(function(n) {
                    return t.c.lb(n, e)
                }).then(function(e) {
                    return Po(t, e), t.reload()
                }))
            }, Ea.mb = function(e) {
                if (void 0 === e.displayName && void 0 === e.photoURL) return bo(this);
                var t = this;
                return xo(this, this.F().then(function(n) {
                    return t.c.mb(n, {
                        displayName: e.displayName,
                        photoUrl: e.photoURL
                    })
                }).then(function(e) {
                    return Po(t, e), So(t, "displayName", e.displayName || null), So(t, "photoURL", e.photoUrl || null), ja(t.providerData, function(e) {
                        "password" === e.providerId && (Gn(e, "displayName", t.displayName), Gn(e, "photoURL", t.photoURL))
                    }), _o(t)
                }).then(mo))
            }, Ea.Cc = function(e) {
                var t = this;
                return xo(this, No(this).then(function(n) {
                    return w(Eo(t), e) ? function(e, t, n) {
                        return zr(e, ac, {
                            idToken: t,
                            deleteProvider: n
                        })
                    }(t.c, n, [e]).then(function(e) {
                        var n = {};
                        return ja(e.providerUserInfo || [], function(e) {
                            n[e.providerId] = !0
                        }), ja(Eo(t), function(e) {
                            n[e] || To(t, e)
                        }), n[Cr.PROVIDER_ID] || Gn(t, "phoneNumber", null), _o(t)
                    }) : _o(t).then(function() {
                        throw new Xn("no-such-provider")
                    })
                }))
            }, Ea.delete = function() {
                var e = this;
                return xo(this, this.F().then(function(t) {
                    return zr(e.c, oc, {
                        idToken: t
                    })
                }).then(function() {
                    Xe(e, new ao("userDeleted"))
                })).then(function() {
                    for (var t = 0; t < e.A.length; t++) e.A[t].cancel("app-deleted");
                    uo(e, null), lo(e, null), e.A = [], e.m = !0, po(e), Gn(e, "refreshToken", null), e.a && e.a.unsubscribe(e)
                })
            }, Ea.ob = function(e, t) {
                return !!("linkViaPopup" == e && (this.g || null) == t && this.f || "reauthViaPopup" == e && (this.g || null) == t && this.f || "linkViaRedirect" == e && (this.Z || null) == t || "reauthViaRedirect" == e && (this.Z || null) == t)
            }, Ea.fa = function(e, t, n, r) {
                "linkViaPopup" != e && "reauthViaPopup" != e || r != (this.g || null) || (n && this.v ? this.v(n) : t && !n && this.f && this.f(t), this.b && (this.b.cancel(), this.b = null), delete this.f, delete this.v)
            }, Ea.va = function(e, t) {
                return "linkViaPopup" == e && t == (this.g || null) ? f(this.tb, this) : "reauthViaPopup" == e && t == (this.g || null) ? f(this.ub, this) : "linkViaRedirect" == e && (this.Z || null) == t ? f(this.tb, this) : "reauthViaRedirect" == e && (this.Z || null) == t ? f(this.ub, this) : null
            }, Ea.ec = function(e) {
                var t = this;
                return ko(this, "linkViaPopup", e, function() {
                    return Io(t, e.providerId).then(function() {
                        return _o(t)
                    })
                }, !1)
            }, Ea.oc = function(e) {
                return ko(this, "reauthViaPopup", e, function() {
                    return z()
                }, !0)
            }, Ea.fc = function(e) {
                var t = this;
                return Do(this, "linkViaRedirect", e, function() {
                    return Io(t, e.providerId)
                }, !1)
            }, Ea.pc = function(e) {
                return Do(this, "reauthViaRedirect", e, function() {
                    return z()
                }, !0)
            }, Ea.tb = function(e, t) {
                var n = this;
                this.b && (this.b.cancel(), this.b = null);
                var r = null;
                return xo(this, this.F().then(function(r) {
                    return Qr(n.c, {
                        requestUri: e,
                        sessionId: t,
                        idToken: r
                    })
                }).then(function(e) {
                    return r = Ao(n, e, "link"), Ro(n, e)
                }).then(function() {
                    return r
                }))
            }, Ea.ub = function(e, t) {
                var n = this;
                this.b && (this.b.cancel(), this.b = null);
                var r = null;
                return xo(this, z().then(function() {
                    return ur(Yr(n.c, {
                        requestUri: e,
                        sessionId: t
                    }), n.uid)
                }).then(function(e) {
                    return r = Ao(n, e, "reauthenticate"), Po(n, e), n.i = null, n.reload()
                }).then(function() {
                    return r
                }), !0)
            }, Ea.bb = function(e) {
                var t = this,
                    n = null;
                return xo(this, this.F().then(function(t) {
                    return n = t, void 0 === e || R(e) ? {} : $n(new Jn(e))
                }).then(function(e) {
                    return t.c.bb(n, e)
                }).then(function(e) {
                    if (t.email != e) return t.reload()
                }).then(function() {}))
            }, Ea.toJSON = function() {
                return this.B()
            }, Ea.B = function() {
                var e = {
                    uid: this.uid,
                    displayName: this.displayName,
                    photoURL: this.photoURL,
                    email: this.email,
                    emailVerified: this.emailVerified,
                    phoneNumber: this.phoneNumber,
                    isAnonymous: this.isAnonymous,
                    providerData: [],
                    apiKey: this.G,
                    appName: this.o,
                    authDomain: this.w,
                    stsTokenManager: this.h.B(),
                    redirectEventId: this.Z || null
                };
                return this.metadata && L(e, this.metadata.B()), ja(this.providerData, function(t) {
                    e.providerData.push(function(e) {
                        var t, n = {};
                        for (t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
                        return n
                    }(t))
                }), e
            };
            var Vc = {
                name: "redirectUser",
                C: "session"
            };
            jo.prototype.g = function() {
                var e = this,
                    t = Wo("local");
                Ko(this, function() {
                    return z().then(function() {
                        return e.c && "local" != e.c.C ? e.b.get(t, e.a) : null
                    }).then(function(n) {
                        if (n) return Uo(e, "local").then(function() {
                            e.c = t
                        })
                    })
                })
            };
            var qc = {
                name: "persistence",
                C: "session"
            };
            jo.prototype.eb = function(e) {
                var t = null,
                    n = this;
                return function(e) {
                    var t = new Xn("invalid-persistence-type"),
                        n = new Xn("unsupported-persistence-type");
                    e: {
                        for (r in Mc)
                            if (Mc[r] == e) {
                                var r = !0;
                                break e
                            } r = !1
                    }
                    if (!r || "string" != typeof e) throw t;
                    switch (Sn()) {
                        case "ReactNative":
                            if ("session" === e) throw n;
                            break;
                        case "Node":
                            if ("none" !== e) throw n;
                            break;
                        default:
                            if (!An() && "none" !== e) throw n
                    }
                }(e), Ko(this, function() {
                    return e != n.c.C ? n.b.get(n.c, n.a).then(function(r) {
                        return t = r, Uo(n, e)
                    }).then(function() {
                        if (n.c = Wo(e), t) return n.b.set(n.c, t, n.a)
                    }) : z()
                })
            }, d(Go, Ye), d(Ho, Ae), d(Qo, Ae), (Ea = Go.prototype).eb = function(e) {
                return e = this.h.eb(e), na(this, e)
            }, Ea.na = function(e) {
                this.V === e || this.l || (this.V = e, Fr(this.c, this.V), Xe(this, new Ho(this.$())))
            }, Ea.$ = function() {
                return this.V
            }, Ea.Ec = function() {
                var e = Sa.navigator;
                this.na(e ? e.languages && e.languages[0] || e.language || e.userLanguage || null : null)
            }, Ea.gc = function(e) {
                this.A.push(e), jr(this.c, wa.SDK_VERSION ? Pn(wa.SDK_VERSION, this.A) : null), Xe(this, new Qo(this.A))
            }, Ea.Ka = function() {
                return N(this.A)
            }, Ea.toJSON = function() {
                return {
                    apiKey: $o(this).options.apiKey,
                    authDomain: $o(this).options.authDomain,
                    appName: $o(this).name,
                    currentUser: Zo(this) && Zo(this).B()
                }
            }, Ea.ob = function(e, t) {
                switch (e) {
                    case "unknown":
                    case "signInViaRedirect":
                        return !0;
                    case "signInViaPopup":
                        return this.g == t && !!this.f;
                    default:
                        return !1
                }
            }, Ea.fa = function(e, t, n, r) {
                "signInViaPopup" == e && this.g == r && (n && this.v ? this.v(n) : t && !n && this.f && this.f(t), this.b && (this.b.cancel(), this.b = null), delete this.f, delete this.v)
            }, Ea.va = function(e, t) {
                return "signInViaRedirect" == e || "signInViaPopup" == e && this.g == t && this.f ? f(this.Sb, this) : null
            }, Ea.Sb = function(e, t) {
                var n = this;
                e = {
                    requestUri: e,
                    sessionId: t
                }, this.b && (this.b.cancel(), this.b = null);
                var r = null,
                    i = null,
                    o = Hr(n.c, e).then(function(e) {
                        return r = Pr(e), i = tr(e), e
                    });
                return e = n.U.then(function() {
                    return o
                }).then(function(e) {
                    return Xo(n, e)
                }).then(function() {
                    return Qn({
                        user: Zo(n),
                        credential: r,
                        additionalUserInfo: i,
                        operationType: "signIn"
                    })
                }), na(this, e)
            }, Ea.wc = function(e) {
                if (!Rn()) return J(new Xn("operation-not-supported-in-this-environment"));
                var t = this,
                    n = er(e.providerId),
                    r = jn(),
                    i = null;
                (!Ln() || Tn()) && $o(this).options.authDomain && e.isOAuthProvider && (i = ui($o(this).options.authDomain, $o(this).options.apiKey, $o(this).name, "signInViaPopup", e, null, r, wa.SDK_VERSION || null));
                var o = bn(i, n && n.za, n && n.ya);
                return n = Yo(this).then(function(t) {
                    return Vi(t, o, "signInViaPopup", e, r, !!i)
                }).then(function() {
                    return new Q(function(e, n) {
                        t.fa("signInViaPopup", null, new Xn("cancelled-popup-request"), t.g), t.f = e, t.v = n, t.g = r, t.b = t.a.Ca(t, "signInViaPopup", o, r)
                    })
                }).then(function(e) {
                    return o && mn(o), e ? Qn(e) : null
                }).s(function(e) {
                    throw o && mn(o), e
                }), na(this, n)
            }, Ea.xc = function(e) {
                if (!Rn()) return J(new Xn("operation-not-supported-in-this-environment"));
                var t = this;
                return na(this, Yo(this).then(function() {
                    return function(e) {
                        return Ko(e, function() {
                            return e.b.set(qc, e.c.C, e.a)
                        })
                    }(t.h)
                }).then(function() {
                    return t.a.Aa("signInViaRedirect", e)
                }))
            }, Ea.aa = function() {
                if (!Rn()) return J(new Xn("operation-not-supported-in-this-environment"));
                var e = this;
                return na(this, Yo(this).then(function() {
                    return e.a.aa()
                }).then(function(e) {
                    return e ? Qn(e) : null
                }))
            }, Ea.hb = function() {
                var e = this;
                return na(this, this.i.then(function() {
                    return Zo(e) ? (zo(e, null), Vo(e.h).then(function() {
                        ta(e)
                    })) : z()
                }))
            }, Ea.yc = function() {
                var e = this;
                return qo(this.h, $o(this).options.authDomain).then(function(t) {
                    if (!e.l) {
                        var n;
                        if (n = Zo(e) && t) {
                            n = Zo(e).uid;
                            var r = t.uid;
                            n = void 0 !== n && null !== n && "" !== n && void 0 !== r && null !== r && "" !== r && n == r
                        }
                        if (n) return Co(Zo(e), t), Zo(e).F();
                        (Zo(e) || t) && (zo(e, t), t && (yo(t), t.ca = e.G), e.a && e.a.subscribe(e), ta(e))
                    }
                })
            }, Ea.ka = function(e) {
                return Bo(this.h, e)
            }, Ea.Tb = function() {
                ta(this), this.ka(Zo(this))
            }, Ea.Zb = function() {
                this.hb()
            }, Ea.$b = function() {
                this.hb()
            }, Ea.ac = function(e) {
                var t = this;
                this.addAuthTokenListener(function() {
                    e.next(Zo(t))
                })
            }, Ea.bc = function(e) {
                var t = this;
                ! function(e, t) {
                    e.I.push(t), na(e, e.i.then(function() {
                        !e.l && w(e.I, t) && e.R !== e.getUid() && (e.R = e.getUid(), t(ea(e)))
                    }))
                }(this, function() {
                    e.next(Zo(t))
                })
            }, Ea.ic = function(e, t, n) {
                var r = this;
                return this.W && wa.Promise.resolve().then(function() {
                    u(e) ? e(Zo(r)) : u(e.next) && e.next(Zo(r))
                }), this.Kb(e, t, n)
            }, Ea.hc = function(e, t, n) {
                var r = this;
                return this.W && wa.Promise.resolve().then(function() {
                    r.R = r.getUid(), u(e) ? e(Zo(r)) : u(e.next) && e.next(Zo(r))
                }), this.Lb(e, t, n)
            }, Ea.Vb = function(e) {
                var t = this;
                return na(this, this.i.then(function() {
                    return Zo(t) ? Zo(t).F(e).then(function(e) {
                        return {
                            accessToken: e
                        }
                    }) : null
                }))
            }, Ea.tc = function(e) {
                return this.Eb(e).then(function(e) {
                    return e.user
                })
            }, Ea.Eb = function(e) {
                var t = this;
                return this.i.then(function() {
                    return Jo(t, zr(t.c, bc, {
                        token: e
                    }))
                }).then(function(e) {
                    var n = e.user;
                    return So(n, "isAnonymous", !1), t.ka(n), e
                })
            }, Ea.Fb = function(e, t) {
                var n = this;
                return this.i.then(function() {
                    return Jo(n, zr(n.c, Ec, {
                        email: e,
                        password: t
                    }))
                })
            }, Ea.uc = function(e, t) {
                return this.Fb(e, t).then(function(e) {
                    return e.user
                })
            }, Ea.Ob = function(e, t) {
                return this.qb(e, t).then(function(e) {
                    return e.user
                })
            }, Ea.qb = function(e, t) {
                var n = this;
                return this.i.then(function() {
                    return Jo(n, zr(n.c, rc, {
                        email: e,
                        password: t
                    }))
                })
            }, Ea.sc = function(e) {
                return this.fb(e).then(function(e) {
                    return e.user
                })
            }, Ea.fb = function(e) {
                var t = this;
                return this.i.then(function() {
                    return Jo(t, e.wa(t.c))
                })
            }, Ea.gb = function() {
                return this.Gb().then(function(e) {
                    return e.user
                })
            }, Ea.Gb = function() {
                var e = this;
                return this.i.then(function() {
                    var t = Zo(e);
                    if (t && t.isAnonymous) {
                        return Qn({
                            user: t,
                            credential: null,
                            additionalUserInfo: Qn({
                                providerId: null,
                                isNewUser: !1
                            }),
                            operationType: "signIn"
                        })
                    }
                    return Jo(e, e.c.gb()).then(function(t) {
                        var n = t.user;
                        return So(n, "isAnonymous", !0), e.ka(n), t
                    })
                })
            }, Ea.getUid = function() {
                return Zo(this) && Zo(this).uid || null
            }, Ea.Mb = function(e) {
                this.addAuthTokenListener(e), this.o++, 0 < this.o && Zo(this) && fo(Zo(this))
            }, Ea.qc = function(e) {
                var t = this;
                ja(this.m, function(n) {
                    n == e && t.o--
                }), 0 > this.o && (this.o = 0), 0 == this.o && Zo(this) && po(Zo(this)), this.removeAuthTokenListener(e)
            }, Ea.addAuthTokenListener = function(e) {
                var t = this;
                this.m.push(e), na(this, this.i.then(function() {
                    t.l || w(t.m, e) && e(ea(t))
                }))
            }, Ea.removeAuthTokenListener = function(e) {
                S(this.m, function(t) {
                    return t == e
                })
            }, Ea.delete = function() {
                this.l = !0;
                for (var e = 0; e < this.N.length; e++) this.N[e].cancel("app-deleted");
                return this.N = [], this.h && (e = this.h, Oi(e.b, e.a, this.ha)), this.a && this.a.unsubscribe(this), wa.Promise.resolve()
            }, Ea.Rb = function(e) {
                return na(this, function(e, t) {
                    return zr(e, ic, {
                        identifier: t,
                        continueUri: kn() ? vn() : "http://localhost"
                    }).then(function(e) {
                        return e.allProviders || []
                    })
                }(this.c, e))
            }, Ea.Fc = function(e) {
                return this.Ia(e).then(function(e) {
                    return e.data.email
                })
            }, Ea.Ta = function(e, t) {
                return na(this, this.c.Ta(e, t).then(function() {}))
            }, Ea.Ia = function(e) {
                return na(this, this.c.Ia(e).then(function(e) {
                    return new function(e) {
                        var t = {},
                            n = e[wu],
                            r = e[Tu];
                        if (e = e[Su], !n || !e) throw Error("Invalid provider user info!");
                        t[Nu] = r || null, t[Cu] = n, Gn(this, Ou, e), Gn(this, Pu, Yn(t))
                    }(e)
                }))
            }, Ea.Sa = function(e) {
                return na(this, this.c.Sa(e).then(function() {}))
            }, Ea.cb = function(e, t) {
                var n = this;
                return na(this, z().then(function() {
                    return void 0 === t || R(t) ? {} : $n(new Jn(t))
                }).then(function(t) {
                    return n.c.cb(e, t)
                }).then(function() {}))
            }, Ea.vc = function(e, t) {
                return na(this, Ji(this, e, t, f(this.fb, this)))
            };
            var Kc = "First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" "),
                Gc = "callback",
                Hc = "expired-callback",
                Qc = "sitekey",
                Yc = "size";
            (Ea = fa.prototype).xa = function() {
                var e = this;
                return this.c ? this.c : this.c = da(this, z().then(function() {
                    if (kn()) return En();
                    throw new Xn("operation-not-supported-in-this-environment", "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.")
                }).then(function() {
                    return function(e, t) {
                        return new Q(function(n, r) {
                            Bn() ? !Sa.grecaptcha || t !== e.c && !e.b ? (Sa[e.a] = function() {
                                if (Sa.grecaptcha) {
                                    e.c = t;
                                    var i = Sa.grecaptcha.render;
                                    Sa.grecaptcha.render = function(t, n) {
                                        return t = i(t, n), e.b++, t
                                    }, n()
                                } else r(new Xn("internal-error"));
                                delete Sa[e.a]
                            }, z(sn(ve(Xc, {
                                onload: e.a,
                                hl: t || ""
                            }))).s(function() {
                                r(new Xn("internal-error", "Unable to load external reCAPTCHA dependencies!"))
                            })) : n() : r(new Xn("network-request-failed"))
                        })
                    }(_a(), e.o())
                }).then(function() {
                    return zr(e.u, hc, {})
                }).then(function(t) {
                    e.a[Qc] = t.recaptchaSiteKey
                }).s(function(t) {
                    throw e.c = null, t
                }))
            }, Ea.render = function() {
                va(this);
                var e = this;
                return da(this, this.xa().then(function() {
                    if (null === e.b) {
                        var t = e.l;
                        if (!e.h) {
                            var n = we(t);
                            t = Se("DIV"), n.appendChild(t)
                        }
                        e.b = grecaptcha.render(t, e.a)
                    }
                    return e.b
                }))
            }, Ea.verify = function() {
                va(this);
                var e = this;
                return da(this, this.render().then(function(t) {
                    return new Q(function(n) {
                        var r = grecaptcha.getResponse(t);
                        if (r) n(r);
                        else {
                            var i = function(t) {
                                t && (function(e, t) {
                                    S(e.i, function(e) {
                                        return e == t
                                    })
                                }(e, i), n(t))
                            };
                            e.i.push(i), e.h && grecaptcha.execute(e.b)
                        }
                    })
                }))
            }, Ea.reset = function() {
                va(this), null !== this.b && grecaptcha.reset(this.b)
            }, Ea.clear = function() {
                va(this), this.m = !0, _a().b--;
                for (var e = 0; e < this.g.length; e++) this.g[e].cancel("RecaptchaVerifier instance has been destroyed.");
                if (!this.h) {
                    e = we(this.l);
                    for (var t; t = e.firstChild;) e.removeChild(t)
                }
            };
            var Xc = fe("https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"),
                zc = null;
            d(ya, fa), ga(Go.prototype, {
                    Sa: {
                        name: "applyActionCode",
                        j: [ia("code")]
                    },
                    Ia: {
                        name: "checkActionCode",
                        j: [ia("code")]
                    },
                    Ta: {
                        name: "confirmPasswordReset",
                        j: [ia("code"), ia("newPassword")]
                    },
                    Ob: {
                        name: "createUserWithEmailAndPassword",
                        j: [ia("email"), ia("password")]
                    },
                    qb: {
                        name: "createUserAndRetrieveDataWithEmailAndPassword",
                        j: [ia("email"), ia("password")]
                    },
                    Rb: {
                        name: "fetchProvidersForEmail",
                        j: [ia("email")]
                    },
                    aa: {
                        name: "getRedirectResult",
                        j: []
                    },
                    hc: {
                        name: "onAuthStateChanged",
                        j: [ha(aa(), sa(), "nextOrObserver"), sa("opt_error", !0), sa("opt_completed", !0)]
                    },
                    ic: {
                        name: "onIdTokenChanged",
                        j: [ha(aa(), sa(), "nextOrObserver"), sa("opt_error", !0), sa("opt_completed", !0)]
                    },
                    cb: {
                        name: "sendPasswordResetEmail",
                        j: [ia("email"), ha(aa("opt_actionCodeSettings", !0), ua(null, !0), "opt_actionCodeSettings", !0)]
                    },
                    eb: {
                        name: "setPersistence",
                        j: [ia("persistence")]
                    },
                    fb: {
                        name: "signInAndRetrieveDataWithCredential",
                        j: [ca()]
                    },
                    gb: {
                        name: "signInAnonymously",
                        j: []
                    },
                    Gb: {
                        name: "signInAnonymouslyAndRetrieveData",
                        j: []
                    },
                    sc: {
                        name: "signInWithCredential",
                        j: [ca()]
                    },
                    tc: {
                        name: "signInWithCustomToken",
                        j: [ia("token")]
                    },
                    Eb: {
                        name: "signInAndRetrieveDataWithCustomToken",
                        j: [ia("token")]
                    },
                    uc: {
                        name: "signInWithEmailAndPassword",
                        j: [ia("email"), ia("password")]
                    },
                    Fb: {
                        name: "signInAndRetrieveDataWithEmailAndPassword",
                        j: [ia("email"), ia("password")]
                    },
                    vc: {
                        name: "signInWithPhoneNumber",
                        j: [ia("phoneNumber"), la()]
                    },
                    wc: {
                        name: "signInWithPopup",
                        j: [{
                            name: "authProvider",
                            K: "a valid Auth provider",
                            optional: !1,
                            M: function(e) {
                                return !!(e && e.providerId && e.hasOwnProperty && e.hasOwnProperty("isOAuthProvider"))
                            }
                        }]
                    },
                    xc: {
                        name: "signInWithRedirect",
                        j: [{
                            name: "authProvider",
                            K: "a valid Auth provider",
                            optional: !1,
                            M: function(e) {
                                return !!(e && e.providerId && e.hasOwnProperty && e.hasOwnProperty("isOAuthProvider"))
                            }
                        }]
                    },
                    hb: {
                        name: "signOut",
                        j: []
                    },
                    toJSON: {
                        name: "toJSON",
                        j: [ia(null, !0)]
                    },
                    Ec: {
                        name: "useDeviceLanguage",
                        j: []
                    },
                    Fc: {
                        name: "verifyPasswordResetCode",
                        j: [ia("code")]
                    }
                }),
                function(e, t) {
                    for (var n in t) {
                        var r = t[n].name;
                        if (r !== n) {
                            var i = t[n].Nb;
                            Object.defineProperty(e, r, {
                                get: function() {
                                    return this[n]
                                },
                                set: function(e) {
                                    ra(r, [i], [e], !0), this[n] = e
                                },
                                enumerable: !0
                            })
                        }
                    }
                }(Go.prototype, {
                    lc: {
                        name: "languageCode",
                        Nb: ha(ia(), ua(), "languageCode")
                    }
                }), (Go.Persistence = Mc).LOCAL = "local", Go.Persistence.SESSION = "session", Go.Persistence.NONE = "none", ga(so.prototype, {
                    delete: {
                        name: "delete",
                        j: []
                    },
                    F: {
                        name: "getIdToken",
                        j: [oa()]
                    },
                    getToken: {
                        name: "getToken",
                        j: [oa()]
                    },
                    Xa: {
                        name: "linkAndRetrieveDataWithCredential",
                        j: [ca()]
                    },
                    cc: {
                        name: "linkWithCredential",
                        j: [ca()]
                    },
                    dc: {
                        name: "linkWithPhoneNumber",
                        j: [ia("phoneNumber"), la()]
                    },
                    ec: {
                        name: "linkWithPopup",
                        j: [{
                            name: "authProvider",
                            K: "a valid Auth provider",
                            optional: !1,
                            M: function(e) {
                                return !!(e && e.providerId && e.hasOwnProperty && e.hasOwnProperty("isOAuthProvider"))
                            }
                        }]
                    },
                    fc: {
                        name: "linkWithRedirect",
                        j: [{
                            name: "authProvider",
                            K: "a valid Auth provider",
                            optional: !1,
                            M: function(e) {
                                return !!(e && e.providerId && e.hasOwnProperty && e.hasOwnProperty("isOAuthProvider"))
                            }
                        }]
                    },
                    Za: {
                        name: "reauthenticateAndRetrieveDataWithCredential",
                        j: [ca()]
                    },
                    mc: {
                        name: "reauthenticateWithCredential",
                        j: [ca()]
                    },
                    nc: {
                        name: "reauthenticateWithPhoneNumber",
                        j: [ia("phoneNumber"), la()]
                    },
                    oc: {
                        name: "reauthenticateWithPopup",
                        j: [{
                            name: "authProvider",
                            K: "a valid Auth provider",
                            optional: !1,
                            M: function(e) {
                                return !!(e && e.providerId && e.hasOwnProperty && e.hasOwnProperty("isOAuthProvider"))
                            }
                        }]
                    },
                    pc: {
                        name: "reauthenticateWithRedirect",
                        j: [{
                            name: "authProvider",
                            K: "a valid Auth provider",
                            optional: !1,
                            M: function(e) {
                                return !!(e && e.providerId && e.hasOwnProperty && e.hasOwnProperty("isOAuthProvider"))
                            }
                        }]
                    },
                    reload: {
                        name: "reload",
                        j: []
                    },
                    bb: {
                        name: "sendEmailVerification",
                        j: [ha(aa("opt_actionCodeSettings", !0), ua(null, !0), "opt_actionCodeSettings", !0)]
                    },
                    toJSON: {
                        name: "toJSON",
                        j: [ia(null, !0)]
                    },
                    Cc: {
                        name: "unlink",
                        j: [ia("provider")]
                    },
                    kb: {
                        name: "updateEmail",
                        j: [ia("email")]
                    },
                    lb: {
                        name: "updatePassword",
                        j: [ia("password")]
                    },
                    Dc: {
                        name: "updatePhoneNumber",
                        j: [ca("phone")]
                    },
                    mb: {
                        name: "updateProfile",
                        j: [aa("profile")]
                    }
                }), ga(Q.prototype, {
                    s: {
                        name: "catch"
                    },
                    then: {
                        name: "then"
                    }
                }), ga(zi.prototype, {
                    confirm: {
                        name: "confirm",
                        j: [ia("verificationCode")]
                    }
                }), ma(wr, "credential", function(e, t) {
                    return new Er(e, t)
                }, [ia("email"), ia("password")]), ga(pr.prototype, {
                    sa: {
                        name: "addScope",
                        j: [ia("scope")]
                    },
                    Ba: {
                        name: "setCustomParameters",
                        j: [aa("customOAuthParameters")]
                    }
                }), ma(pr, "credential", dr, [ha(ia(), aa(), "token")]), ga(vr.prototype, {
                    sa: {
                        name: "addScope",
                        j: [ia("scope")]
                    },
                    Ba: {
                        name: "setCustomParameters",
                        j: [aa("customOAuthParameters")]
                    }
                }), ma(vr, "credential", _r, [ha(ia(), aa(), "token")]), ga(yr.prototype, {
                    sa: {
                        name: "addScope",
                        j: [ia("scope")]
                    },
                    Ba: {
                        name: "setCustomParameters",
                        j: [aa("customOAuthParameters")]
                    }
                }), ma(yr, "credential", gr, [ha(ia(), ha(aa(), ua()), "idToken"), ha(ia(), ua(), "accessToken", !0)]), ga(mr.prototype, {
                    Ba: {
                        name: "setCustomParameters",
                        j: [aa("customOAuthParameters")]
                    }
                }), ma(mr, "credential", br, [ha(ia(), aa(), "token"), ia("secret", !0)]), ga(fr.prototype, {
                    sa: {
                        name: "addScope",
                        j: [ia("scope")]
                    },
                    credential: {
                        name: "credential",
                        j: [ha(ia(), ua(), "idToken", !0), ha(ia(), ua(), "accessToken", !0)]
                    },
                    Ba: {
                        name: "setCustomParameters",
                        j: [aa("customOAuthParameters")]
                    }
                }), ma(Cr, "credential", Nr, [ia("verificationId"), ia("verificationCode")]), ga(Cr.prototype, {
                    Qa: {
                        name: "verifyPhoneNumber",
                        j: [ia("phoneNumber"), la()]
                    }
                }), ga(Xn.prototype, {
                    toJSON: {
                        name: "toJSON",
                        j: [ia(null, !0)]
                    }
                }), ga(Dr.prototype, {
                    toJSON: {
                        name: "toJSON",
                        j: [ia(null, !0)]
                    }
                }), ga(kr.prototype, {
                    toJSON: {
                        name: "toJSON",
                        j: [ia(null, !0)]
                    }
                }), ga(ya.prototype, {
                    clear: {
                        name: "clear",
                        j: []
                    },
                    render: {
                        name: "render",
                        j: []
                    },
                    verify: {
                        name: "verify",
                        j: []
                    }
                }),
                function() {
                    if (void 0 === wa || !wa.INTERNAL || !wa.INTERNAL.registerService) throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");
                    var e = {
                        Auth: Go,
                        Error: Xn
                    };
                    ma(e, "EmailAuthProvider", wr, []), ma(e, "FacebookAuthProvider", pr, []), ma(e, "GithubAuthProvider", vr, []), ma(e, "GoogleAuthProvider", yr, []), ma(e, "TwitterAuthProvider", mr, []), ma(e, "OAuthProvider", fr, [ia("providerId")]), ma(e, "PhoneAuthProvider", Cr, [{
                        name: "auth",
                        K: "an instance of Firebase Auth",
                        optional: !0,
                        M: function(e) {
                            return !!(e && e instanceof Go)
                        }
                    }]), ma(e, "RecaptchaVerifier", ya, [ha(ia(), {
                        name: "",
                        K: "an HTML element",
                        optional: !1,
                        M: function(e) {
                            return !!(e && e instanceof Element)
                        }
                    }, "recaptchaContainer"), aa("recaptchaParameters", !0), {
                        name: "app",
                        K: "an instance of Firebase App",
                        optional: !0,
                        M: function(e) {
                            return !!(e && e instanceof wa.app.App)
                        }
                    }]), wa.INTERNAL.registerService("auth", function(e, t) {
                        return e = new Go(e), t({
                            INTERNAL: {
                                getUid: f(e.getUid, e),
                                getToken: f(e.Vb, e),
                                addAuthTokenListener: f(e.Mb, e),
                                removeAuthTokenListener: f(e.qc, e)
                            }
                        }), e
                    }, e, function(e, t) {
                        if ("create" === e) try {
                            t.auth()
                        } catch (e) {}
                    }), wa.INTERNAL.extendNamespace({
                        User: so
                    })
                }()
        }).call(void 0 !== e ? e : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }).call(t, n(111))
}, function(e, t, n) {
    e.exports = n(241)
}, function(e, t, n) {
    "use strict";

    function r(t) {
        var n = t.INTERNAL.registerService("database", function(e, t, n) {
            return c.RepoManager.getInstance().databaseFromApp(e, n)
        }, {
            Reference: s.Reference,
            Query: a.Query,
            Database: o.Database,
            enableLogging: u.enableLogging,
            INTERNAL: l,
            ServerValue: p,
            TEST_ACCESS: h
        }, null, !0);
        f.isNodeSdk() && (e.exports = n)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(44),
        o = n(134);
    t.Database = o.Database;
    var a = n(138);
    t.Query = a.Query;
    var s = n(113);
    t.Reference = s.Reference;
    var u = n(3);
    t.enableLogging = u.enableLogging;
    var c = n(118),
        l = n(273),
        h = n(274),
        f = n(0),
        p = o.Database.ServerValue;
    t.ServerValue = p, t.registerDatabase = r, r(i.default);
    var d = n(114);
    t.DataSnapshot = d.DataSnapshot;
    var v = n(137);
    t.OnDisconnect = v.OnDisconnect
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = function() {
            function e(e) {
                this.domStorage_ = e, this.prefix_ = "firebase:"
            }
            return e.prototype.set = function(e, t) {
                null == t ? this.domStorage_.removeItem(this.prefixedName_(e)) : this.domStorage_.setItem(this.prefixedName_(e), r.stringify(t))
            }, e.prototype.get = function(e) {
                var t = this.domStorage_.getItem(this.prefixedName_(e));
                return null == t ? null : r.jsonEval(t)
            }, e.prototype.remove = function(e) {
                this.domStorage_.removeItem(this.prefixedName_(e))
            }, e.prototype.prefixedName_ = function(e) {
                return this.prefix_ + e
            }, e.prototype.toString = function() {
                return this.domStorage_.toString()
            }, e
        }();
    t.DOMStorageWrapper = i
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = function() {
            function e() {
                this.cache_ = {}, this.isInMemoryStorage = !0
            }
            return e.prototype.set = function(e, t) {
                null == t ? delete this.cache_[e] : this.cache_[e] = t
            }, e.prototype.get = function(e) {
                return r.contains(this.cache_, e) ? this.cache_[e] : null
            }, e.prototype.remove = function(e) {
                delete this.cache_[e]
            }, e
        }();
    t.MemoryStorage = i
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = function() {
            function e(e, t) {
                this.committed = e, this.snapshot = t
            }
            return e.prototype.toJSON = function() {
                return r.validateArgCount("TransactionResult.toJSON", 0, 1, arguments.length), {
                    committed: this.committed,
                    snapshot: this.snapshot.toJSON()
                }
            }, e
        }();
    t.TransactionResult = i
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0);
    t.nextPushId = function() {
        var e = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",
            t = 0,
            n = [];
        return function(i) {
            var o = i === t;
            t = i;
            var a, s = new Array(8);
            for (a = 7; a >= 0; a--) s[a] = e.charAt(i % 64), i = Math.floor(i / 64);
            r.assert(0 === i, "Cannot push at time == 0");
            var u = s.join("");
            if (o) {
                for (a = 11; a >= 0 && 63 === n[a]; a--) n[a] = 0;
                n[a]++
            } else
                for (a = 0; a < 12; a++) n[a] = Math.floor(64 * Math.random());
            for (a = 0; a < 12; a++) u += e.charAt(n[a]);
            return r.assert(20 === u.length, "nextPushId: Length should be 20."), u
        }
    }()
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(114),
        i = n(247),
        o = n(0),
        a = n(0),
        s = function() {
            function e(e, t, n) {
                this.callback_ = e, this.cancelCallback_ = t, this.context_ = n
            }
            return e.prototype.respondsTo = function(e) {
                return "value" === e
            }, e.prototype.createEvent = function(e, t) {
                var n = t.getQueryParams().getIndex();
                return new i.DataEvent("value", this, new r.DataSnapshot(e.snapshotNode, t.getRef(), n))
            }, e.prototype.getEventRunner = function(e) {
                var t = this.context_;
                if ("cancel" === e.getEventType()) {
                    a.assert(this.cancelCallback_, "Raising a cancel event on a listener with no cancel callback");
                    var n = this.cancelCallback_;
                    return function() {
                        n.call(t, e.error)
                    }
                }
                var r = this.callback_;
                return function() {
                    r.call(t, e.snapshot)
                }
            }, e.prototype.createCancelEvent = function(e, t) {
                return this.cancelCallback_ ? new i.CancelEvent(this, e, t) : null
            }, e.prototype.matches = function(t) {
                return t instanceof e && (!t.callback_ || !this.callback_ || t.callback_ === this.callback_ && t.context_ === this.context_)
            }, e.prototype.hasAnyCallback = function() {
                return null !== this.callback_
            }, e
        }();
    t.ValueEventRegistration = s;
    var u = function() {
        function e(e, t, n) {
            this.callbacks_ = e, this.cancelCallback_ = t, this.context_ = n
        }
        return e.prototype.respondsTo = function(e) {
            var t = "children_added" === e ? "child_added" : e;
            return t = "children_removed" === t ? "child_removed" : t, o.contains(this.callbacks_, t)
        }, e.prototype.createCancelEvent = function(e, t) {
            return this.cancelCallback_ ? new i.CancelEvent(this, e, t) : null
        }, e.prototype.createEvent = function(e, t) {
            a.assert(null != e.childName, "Child events should have a childName.");
            var n = t.getRef().child(e.childName),
                o = t.getQueryParams().getIndex();
            return new i.DataEvent(e.type, this, new r.DataSnapshot(e.snapshotNode, n, o), e.prevName)
        }, e.prototype.getEventRunner = function(e) {
            var t = this.context_;
            if ("cancel" === e.getEventType()) {
                a.assert(this.cancelCallback_, "Raising a cancel event on a listener with no cancel callback");
                var n = this.cancelCallback_;
                return function() {
                    n.call(t, e.error)
                }
            }
            var r = this.callbacks_[e.eventType];
            return function() {
                r.call(t, e.snapshot, e.prevName)
            }
        }, e.prototype.matches = function(t) {
            if (t instanceof e) {
                if (!this.callbacks_ || !t.callbacks_) return !0;
                if (this.context_ === t.context_) {
                    var n = o.getCount(t.callbacks_);
                    if (n === o.getCount(this.callbacks_)) {
                        if (1 === n) {
                            var r = o.getAnyKey(t.callbacks_),
                                i = o.getAnyKey(this.callbacks_);
                            return !(i !== r || t.callbacks_[r] && this.callbacks_[i] && t.callbacks_[r] !== this.callbacks_[i])
                        }
                        return o.every(this.callbacks_, function(e, n) {
                            return t.callbacks_[e] === n
                        })
                    }
                }
            }
            return !1
        }, e.prototype.hasAnyCallback = function() {
            return null !== this.callbacks_
        }, e
    }();
    t.ChildEventRegistration = u
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = function() {
            function e(e, t, n, r) {
                this.eventType = e, this.eventRegistration = t, this.snapshot = n, this.prevName = r
            }
            return e.prototype.getPath = function() {
                var e = this.snapshot.getRef();
                return "value" === this.eventType ? e.path : e.getParent().path
            }, e.prototype.getEventType = function() {
                return this.eventType
            }, e.prototype.getEventRunner = function() {
                return this.eventRegistration.getEventRunner(this)
            }, e.prototype.toString = function() {
                return this.getPath().toString() + ":" + this.eventType + ":" + r.stringify(this.snapshot.exportVal())
            }, e
        }();
    t.DataEvent = i;
    var o = function() {
        function e(e, t, n) {
            this.eventRegistration = e, this.error = t, this.path = n
        }
        return e.prototype.getPath = function() {
            return this.path
        }, e.prototype.getEventType = function() {
            return "cancel"
        }, e.prototype.getEventRunner = function() {
            return this.eventRegistration.getEventRunner(this)
        }, e.prototype.toString = function() {
            return this.path.toString() + ":cancel"
        }, e
    }();
    t.CancelEvent = o
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(3),
        o = n(249),
        a = n(18),
        s = n(0),
        u = n(115),
        c = n(250),
        l = n(251),
        h = n(53),
        f = n(148),
        p = n(8),
        d = n(149),
        v = n(257),
        _ = function() {
            function e(e) {
                this.listenProvider_ = e, this.syncPointTree_ = u.ImmutableTree.Empty, this.pendingWriteTree_ = new v.WriteTree, this.tagToQueryMap_ = {}, this.queryToTagMap_ = {}
            }
            return e.prototype.applyUserOverwrite = function(e, t, n, r) {
                return this.pendingWriteTree_.addOverwrite(e, t, n, r), r ? this.applyOperationToSyncPoints_(new f.Overwrite(h.OperationSource.User, e, t)) : []
            }, e.prototype.applyUserMerge = function(e, t, n) {
                this.pendingWriteTree_.addMerge(e, t, n);
                var r = u.ImmutableTree.fromObject(t);
                return this.applyOperationToSyncPoints_(new l.Merge(h.OperationSource.User, e, r))
            }, e.prototype.ackUserWrite = function(e, t) {
                void 0 === t && (t = !1);
                var n = this.pendingWriteTree_.getWrite(e);
                if (this.pendingWriteTree_.removeWrite(e)) {
                    var r = u.ImmutableTree.Empty;
                    return null != n.snap ? r = r.set(p.Path.Empty, !0) : s.forEach(n.children, function(e, t) {
                        r = r.set(new p.Path(e), t)
                    }), this.applyOperationToSyncPoints_(new o.AckUserWrite(n.path, r, t))
                }
                return []
            }, e.prototype.applyServerOverwrite = function(e, t) {
                return this.applyOperationToSyncPoints_(new f.Overwrite(h.OperationSource.Server, e, t))
            }, e.prototype.applyServerMerge = function(e, t) {
                var n = u.ImmutableTree.fromObject(t);
                return this.applyOperationToSyncPoints_(new l.Merge(h.OperationSource.Server, e, n))
            }, e.prototype.applyListenComplete = function(e) {
                return this.applyOperationToSyncPoints_(new c.ListenComplete(h.OperationSource.Server, e))
            }, e.prototype.applyTaggedQueryOverwrite = function(t, n, r) {
                var i = this.queryKeyForTag_(r);
                if (null != i) {
                    var o = e.parseQueryKey_(i),
                        a = o.path,
                        s = o.queryId,
                        u = p.Path.relativePath(a, t),
                        c = new f.Overwrite(h.OperationSource.forServerTaggedQuery(s), u, n);
                    return this.applyTaggedOperation_(a, c)
                }
                return []
            }, e.prototype.applyTaggedQueryMerge = function(t, n, r) {
                var i = this.queryKeyForTag_(r);
                if (i) {
                    var o = e.parseQueryKey_(i),
                        a = o.path,
                        s = o.queryId,
                        c = p.Path.relativePath(a, t),
                        f = u.ImmutableTree.fromObject(n),
                        d = new l.Merge(h.OperationSource.forServerTaggedQuery(s), c, f);
                    return this.applyTaggedOperation_(a, d)
                }
                return []
            }, e.prototype.applyTaggedListenComplete = function(t, n) {
                var r = this.queryKeyForTag_(n);
                if (r) {
                    var i = e.parseQueryKey_(r),
                        o = i.path,
                        a = i.queryId,
                        s = p.Path.relativePath(o, t),
                        u = new c.ListenComplete(h.OperationSource.forServerTaggedQuery(a), s);
                    return this.applyTaggedOperation_(o, u)
                }
                return []
            }, e.prototype.addEventRegistration = function(t, n) {
                var i = t.path,
                    o = null,
                    s = !1;
                this.syncPointTree_.foreachOnPath(i, function(e, t) {
                    var n = p.Path.relativePath(e, i);
                    o = o || t.getCompleteServerCache(n), s = s || t.hasCompleteView()
                });
                var u = this.syncPointTree_.get(i);
                u ? (s = s || u.hasCompleteView(), o = o || u.getCompleteServerCache(p.Path.Empty)) : (u = new d.SyncPoint, this.syncPointTree_ = this.syncPointTree_.set(i, u));
                var c;
                if (null != o) c = !0;
                else {
                    c = !1, o = a.ChildrenNode.EMPTY_NODE;
                    this.syncPointTree_.subtree(i).foreachChild(function(e, t) {
                        var n = t.getCompleteServerCache(p.Path.Empty);
                        n && (o = o.updateImmediateChild(e, n))
                    })
                }
                var l = u.viewExistsForQuery(t);
                if (!l && !t.getQueryParams().loadsAllData()) {
                    var h = e.makeQueryKey_(t);
                    r.assert(!(h in this.queryToTagMap_), "View does not exist, but we have a tag");
                    var f = e.getNextQueryTag_();
                    this.queryToTagMap_[h] = f, this.tagToQueryMap_["_" + f] = h
                }
                var v = this.pendingWriteTree_.childWrites(i),
                    _ = u.addEventRegistration(t, n, v, o, c);
                if (!l && !s) {
                    var y = u.viewForQuery(t);
                    _ = _.concat(this.setupListener_(t, y))
                }
                return _
            }, e.prototype.removeEventRegistration = function(t, n, r) {
                var i = this,
                    o = t.path,
                    a = this.syncPointTree_.get(o),
                    s = [];
                if (a && ("default" === t.queryIdentifier() || a.viewExistsForQuery(t))) {
                    var u = a.removeEventRegistration(t, n, r);
                    a.isEmpty() && (this.syncPointTree_ = this.syncPointTree_.remove(o));
                    var c = u.removed;
                    s = u.events;
                    var l = -1 !== c.findIndex(function(e) {
                            return e.getQueryParams().loadsAllData()
                        }),
                        h = this.syncPointTree_.findOnPath(o, function(e, t) {
                            return t.hasCompleteView()
                        });
                    if (l && !h) {
                        var f = this.syncPointTree_.subtree(o);
                        if (!f.isEmpty())
                            for (var p = this.collectDistinctViewsForSubTree_(f), d = 0; d < p.length; ++d) {
                                var v = p[d],
                                    _ = v.getQuery(),
                                    y = this.createListenerForView_(v);
                                this.listenProvider_.startListening(e.queryForListening_(_), this.tagForQuery_(_), y.hashFn, y.onComplete)
                            }
                    }
                    if (!h && c.length > 0 && !r)
                        if (l) {
                            this.listenProvider_.stopListening(e.queryForListening_(t), null)
                        } else c.forEach(function(t) {
                            var n = i.queryToTagMap_[e.makeQueryKey_(t)];
                            i.listenProvider_.stopListening(e.queryForListening_(t), n)
                        });
                    this.removeTags_(c)
                }
                return s
            }, e.prototype.calcCompleteEventCache = function(e, t) {
                var n = this.pendingWriteTree_,
                    r = this.syncPointTree_.findOnPath(e, function(t, n) {
                        var r = p.Path.relativePath(t, e),
                            i = n.getCompleteServerCache(r);
                        if (i) return i
                    });
                return n.calcCompleteEventCache(e, r, t, !0)
            }, e.prototype.collectDistinctViewsForSubTree_ = function(e) {
                return e.fold(function(e, t, n) {
                    if (t && t.hasCompleteView()) {
                        return [t.getCompleteView()]
                    }
                    var r = [];
                    return t && (r = t.getQueryViews()), s.forEach(n, function(e, t) {
                        r = r.concat(t)
                    }), r
                })
            }, e.prototype.removeTags_ = function(t) {
                for (var n = 0; n < t.length; ++n) {
                    var r = t[n];
                    if (!r.getQueryParams().loadsAllData()) {
                        var i = e.makeQueryKey_(r),
                            o = this.queryToTagMap_[i];
                        delete this.queryToTagMap_[i], delete this.tagToQueryMap_["_" + o]
                    }
                }
            }, e.queryForListening_ = function(e) {
                return e.getQueryParams().loadsAllData() && !e.getQueryParams().isDefault() ? e.getRef() : e
            }, e.prototype.setupListener_ = function(t, n) {
                var i = t.path,
                    o = this.tagForQuery_(t),
                    a = this.createListenerForView_(n),
                    u = this.listenProvider_.startListening(e.queryForListening_(t), o, a.hashFn, a.onComplete),
                    c = this.syncPointTree_.subtree(i);
                if (o) r.assert(!c.value.hasCompleteView(), "If we're adding a query, it shouldn't be shadowed");
                else
                    for (var l = c.fold(function(e, t, n) {
                            if (!e.isEmpty() && t && t.hasCompleteView()) return [t.getCompleteView().getQuery()];
                            var r = [];
                            return t && (r = r.concat(t.getQueryViews().map(function(e) {
                                return e.getQuery()
                            }))), s.forEach(n, function(e, t) {
                                r = r.concat(t)
                            }), r
                        }), h = 0; h < l.length; ++h) {
                        var f = l[h];
                        this.listenProvider_.stopListening(e.queryForListening_(f), this.tagForQuery_(f))
                    }
                return u
            }, e.prototype.createListenerForView_ = function(e) {
                var t = this,
                    n = e.getQuery(),
                    r = this.tagForQuery_(n);
                return {
                    hashFn: function() {
                        return (e.getServerCache() || a.ChildrenNode.EMPTY_NODE).hash()
                    },
                    onComplete: function(e) {
                        if ("ok" === e) return r ? t.applyTaggedListenComplete(n.path, r) : t.applyListenComplete(n.path);
                        var o = i.errorForServerCode(e, n);
                        return t.removeEventRegistration(n, null, o)
                    }
                }
            }, e.makeQueryKey_ = function(e) {
                return e.path.toString() + "$" + e.queryIdentifier()
            }, e.parseQueryKey_ = function(e) {
                var t = e.indexOf("$");
                return r.assert(-1 !== t && t < e.length - 1, "Bad queryKey."), {
                    queryId: e.substr(t + 1),
                    path: new p.Path(e.substr(0, t))
                }
            }, e.prototype.queryKeyForTag_ = function(e) {
                return this.tagToQueryMap_["_" + e]
            }, e.prototype.tagForQuery_ = function(t) {
                var n = e.makeQueryKey_(t);
                return s.safeGet(this.queryToTagMap_, n)
            }, e.getNextQueryTag_ = function() {
                return e.nextQueryTag_++
            }, e.prototype.applyTaggedOperation_ = function(e, t) {
                var n = this.syncPointTree_.get(e);
                r.assert(n, "Missing sync point for query tag that we're tracking");
                var i = this.pendingWriteTree_.childWrites(e);
                return n.applyOperation(t, i, null)
            }, e.prototype.applyOperationToSyncPoints_ = function(e) {
                return this.applyOperationHelper_(e, this.syncPointTree_, null, this.pendingWriteTree_.childWrites(p.Path.Empty))
            }, e.prototype.applyOperationHelper_ = function(e, t, n, r) {
                if (e.path.isEmpty()) return this.applyOperationDescendantsHelper_(e, t, n, r);
                var i = t.get(p.Path.Empty);
                null == n && null != i && (n = i.getCompleteServerCache(p.Path.Empty));
                var o = [],
                    a = e.path.getFront(),
                    s = e.operationForChild(a),
                    u = t.children.get(a);
                if (u && s) {
                    var c = n ? n.getImmediateChild(a) : null,
                        l = r.child(a);
                    o = o.concat(this.applyOperationHelper_(s, u, c, l))
                }
                return i && (o = o.concat(i.applyOperation(e, r, n))), o
            }, e.prototype.applyOperationDescendantsHelper_ = function(e, t, n, r) {
                var i = this,
                    o = t.get(p.Path.Empty);
                null == n && null != o && (n = o.getCompleteServerCache(p.Path.Empty));
                var a = [];
                return t.children.inorderTraversal(function(t, o) {
                    var s = n ? n.getImmediateChild(t) : null,
                        u = r.child(t),
                        c = e.operationForChild(t);
                    c && (a = a.concat(i.applyOperationDescendantsHelper_(c, o, s, u)))
                }), o && (a = a.concat(o.applyOperation(e, r, n))), a
            }, e.nextQueryTag_ = 1, e
        }();
    t.SyncTree = _
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(8),
        o = n(53),
        a = function() {
            function e(e, t, n) {
                this.path = e, this.affectedTree = t, this.revert = n, this.type = o.OperationType.ACK_USER_WRITE, this.source = o.OperationSource.User
            }
            return e.prototype.operationForChild = function(t) {
                if (this.path.isEmpty()) {
                    if (null != this.affectedTree.value) return r.assert(this.affectedTree.children.isEmpty(), "affectedTree should not have overlapping affected paths."), this;
                    var n = this.affectedTree.subtree(new i.Path(t));
                    return new e(i.Path.Empty, n, this.revert)
                }
                return r.assert(this.path.getFront() === t, "operationForChild called for unrelated child."), new e(this.path.popFront(), this.affectedTree, this.revert)
            }, e
        }();
    t.AckUserWrite = a
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(8),
        i = n(53),
        o = function() {
            function e(e, t) {
                this.source = e, this.path = t, this.type = i.OperationType.LISTEN_COMPLETE
            }
            return e.prototype.operationForChild = function(t) {
                return this.path.isEmpty() ? new e(this.source, r.Path.Empty) : new e(this.source, this.path.popFront())
            }, e
        }();
    t.ListenComplete = o
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(53),
        i = n(148),
        o = n(8),
        a = n(0),
        s = function() {
            function e(e, t, n) {
                this.source = e, this.path = t, this.children = n, this.type = r.OperationType.MERGE
            }
            return e.prototype.operationForChild = function(t) {
                if (this.path.isEmpty()) {
                    var n = this.children.subtree(new o.Path(t));
                    return n.isEmpty() ? null : n.value ? new i.Overwrite(this.source, o.Path.Empty, n.value) : new e(this.source, o.Path.Empty, n)
                }
                return a.assert(this.path.getFront() === t, "Can't get a merge for a child not on the path of the operation"), new e(this.source, this.path.popFront(), this.children)
            }, e.prototype.toString = function() {
                return "Operation(" + this.path + ": " + this.source.toString() + " merge: " + this.children.toString() + ")"
            }, e
        }();
    t.Merge = s
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(116),
        i = n(253),
        o = n(18),
        a = n(92),
        s = n(150),
        u = n(256),
        c = n(0),
        l = n(53),
        h = n(60),
        f = n(16),
        p = function() {
            function e(e, t) {
                this.query_ = e, this.eventRegistrations_ = [];
                var n = this.query_.getQueryParams(),
                    c = new r.IndexedFilter(n.getIndex()),
                    l = n.getNodeFilter();
                this.processor_ = new i.ViewProcessor(l);
                var h = t.getServerCache(),
                    f = t.getEventCache(),
                    p = c.updateFullNode(o.ChildrenNode.EMPTY_NODE, h.getNode(), null),
                    d = l.updateFullNode(o.ChildrenNode.EMPTY_NODE, f.getNode(), null),
                    v = new a.CacheNode(p, h.isFullyInitialized(), c.filtersNodes()),
                    _ = new a.CacheNode(d, f.isFullyInitialized(), l.filtersNodes());
                this.viewCache_ = new s.ViewCache(_, v), this.eventGenerator_ = new u.EventGenerator(this.query_)
            }
            return e.prototype.getQuery = function() {
                return this.query_
            }, e.prototype.getServerCache = function() {
                return this.viewCache_.getServerCache().getNode()
            }, e.prototype.getCompleteServerCache = function(e) {
                var t = this.viewCache_.getCompleteServerSnap();
                return t && (this.query_.getQueryParams().loadsAllData() || !e.isEmpty() && !t.getImmediateChild(e.getFront()).isEmpty()) ? t.getChild(e) : null
            }, e.prototype.isEmpty = function() {
                return 0 === this.eventRegistrations_.length
            }, e.prototype.addEventRegistration = function(e) {
                this.eventRegistrations_.push(e)
            }, e.prototype.removeEventRegistration = function(e, t) {
                var n = [];
                if (t) {
                    c.assert(null == e, "A cancel should cancel all event registrations.");
                    var r = this.query_.path;
                    this.eventRegistrations_.forEach(function(e) {
                        t = t;
                        var i = e.createCancelEvent(t, r);
                        i && n.push(i)
                    })
                }
                if (e) {
                    for (var i = [], o = 0; o < this.eventRegistrations_.length; ++o) {
                        var a = this.eventRegistrations_[o];
                        if (a.matches(e)) {
                            if (e.hasAnyCallback()) {
                                i = i.concat(this.eventRegistrations_.slice(o + 1));
                                break
                            }
                        } else i.push(a)
                    }
                    this.eventRegistrations_ = i
                } else this.eventRegistrations_ = [];
                return n
            }, e.prototype.applyOperation = function(e, t, n) {
                e.type === l.OperationType.MERGE && null !== e.source.queryId && (c.assert(this.viewCache_.getCompleteServerSnap(), "We should always have a full cache before handling merges"), c.assert(this.viewCache_.getCompleteEventSnap(), "Missing event cache, even though we have a server cache"));
                var r = this.viewCache_,
                    i = this.processor_.applyOperation(r, e, t, n);
                return this.processor_.assertIndexed(i.viewCache), c.assert(i.viewCache.getServerCache().isFullyInitialized() || !r.getServerCache().isFullyInitialized(), "Once a server snap is complete, it should never go back"), this.viewCache_ = i.viewCache, this.generateEventsForChanges_(i.changes, i.viewCache.getEventCache().getNode(), null)
            }, e.prototype.getInitialEvents = function(e) {
                var t = this.viewCache_.getEventCache(),
                    n = [];
                if (!t.getNode().isLeafNode()) {
                    t.getNode().forEachChild(f.PRIORITY_INDEX, function(e, t) {
                        n.push(h.Change.childAddedChange(e, t))
                    })
                }
                return t.isFullyInitialized() && n.push(h.Change.valueChange(t.getNode())), this.generateEventsForChanges_(n, t.getNode(), e)
            }, e.prototype.generateEventsForChanges_ = function(e, t, n) {
                var r = n ? [n] : this.eventRegistrations_;
                return this.eventGenerator_.generateEventsForChanges(e, t, r)
            }, e
        }();
    t.View = p
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(53),
        i = n(0),
        o = n(254),
        a = n(60),
        s = n(18),
        u = n(79),
        c = n(115),
        l = n(8),
        h = n(255),
        f = function() {
            return function(e, t) {
                this.viewCache = e, this.changes = t
            }
        }();
    t.ProcessorResult = f;
    var p = function() {
        function e(e) {
            this.filter_ = e
        }
        return e.prototype.assertIndexed = function(e) {
            i.assert(e.getEventCache().getNode().isIndexed(this.filter_.getIndex()), "Event snap not indexed"), i.assert(e.getServerCache().getNode().isIndexed(this.filter_.getIndex()), "Server snap not indexed")
        }, e.prototype.applyOperation = function(t, n, a, s) {
            var u, c, l = new o.ChildChangeAccumulator;
            if (n.type === r.OperationType.OVERWRITE) {
                var h = n;
                h.source.fromUser ? u = this.applyUserOverwrite_(t, h.path, h.snap, a, s, l) : (i.assert(h.source.fromServer, "Unknown source."), c = h.source.tagged || t.getServerCache().isFiltered() && !h.path.isEmpty(), u = this.applyServerOverwrite_(t, h.path, h.snap, a, s, c, l))
            } else if (n.type === r.OperationType.MERGE) {
                var p = n;
                p.source.fromUser ? u = this.applyUserMerge_(t, p.path, p.children, a, s, l) : (i.assert(p.source.fromServer, "Unknown source."), c = p.source.tagged || t.getServerCache().isFiltered(), u = this.applyServerMerge_(t, p.path, p.children, a, s, c, l))
            } else if (n.type === r.OperationType.ACK_USER_WRITE) {
                var d = n;
                u = d.revert ? this.revertUserWrite_(t, d.path, a, s, l) : this.ackUserWrite_(t, d.path, d.affectedTree, a, s, l)
            } else {
                if (n.type !== r.OperationType.LISTEN_COMPLETE) throw i.assertionError("Unknown operation type: " + n.type);
                u = this.listenComplete_(t, n.path, a, l)
            }
            var v = l.getChanges();
            return e.maybeAddValueEvent_(t, u, v), new f(u, v)
        }, e.maybeAddValueEvent_ = function(e, t, n) {
            var r = t.getEventCache();
            if (r.isFullyInitialized()) {
                var i = r.getNode().isLeafNode() || r.getNode().isEmpty(),
                    o = e.getCompleteEventSnap();
                (n.length > 0 || !e.getEventCache().isFullyInitialized() || i && !r.getNode().equals(o) || !r.getNode().getPriority().equals(o.getPriority())) && n.push(a.Change.valueChange(t.getCompleteEventSnap()))
            }
        }, e.prototype.generateEventCacheAfterServerEvent_ = function(e, t, n, r, o) {
            var a = e.getEventCache();
            if (null != n.shadowingWrite(t)) return e;
            var u = void 0,
                c = void 0;
            if (t.isEmpty())
                if (i.assert(e.getServerCache().isFullyInitialized(), "If change path is empty, we must have complete server data"), e.getServerCache().isFiltered()) {
                    var l = e.getCompleteServerSnap(),
                        h = l instanceof s.ChildrenNode ? l : s.ChildrenNode.EMPTY_NODE,
                        f = n.calcCompleteEventChildren(h);
                    u = this.filter_.updateFullNode(e.getEventCache().getNode(), f, o)
                } else {
                    var p = n.calcCompleteEventCache(e.getCompleteServerSnap());
                    u = this.filter_.updateFullNode(e.getEventCache().getNode(), p, o)
                }
            else {
                var d = t.getFront();
                if (".priority" == d) {
                    i.assert(1 == t.getLength(), "Can't have a priority with additional path components");
                    var v = a.getNode();
                    c = e.getServerCache().getNode();
                    var _ = n.calcEventCacheAfterServerOverwrite(t, v, c);
                    u = null != _ ? this.filter_.updatePriority(v, _) : a.getNode()
                } else {
                    var y = t.popFront(),
                        g = void 0;
                    if (a.isCompleteForChild(d)) {
                        c = e.getServerCache().getNode();
                        var m = n.calcEventCacheAfterServerOverwrite(t, a.getNode(), c);
                        g = null != m ? a.getNode().getImmediateChild(d).updateChild(y, m) : a.getNode().getImmediateChild(d)
                    } else g = n.calcCompleteChild(d, e.getServerCache());
                    u = null != g ? this.filter_.updateChild(a.getNode(), d, g, y, r, o) : a.getNode()
                }
            }
            return e.updateEventSnap(u, a.isFullyInitialized() || t.isEmpty(), this.filter_.filtersNodes())
        }, e.prototype.applyServerOverwrite_ = function(e, t, n, r, i, o, a) {
            var s, u = e.getServerCache(),
                c = o ? this.filter_ : this.filter_.getIndexedFilter();
            if (t.isEmpty()) s = c.updateFullNode(u.getNode(), n, null);
            else if (c.filtersNodes() && !u.isFiltered()) {
                var l = u.getNode().updateChild(t, n);
                s = c.updateFullNode(u.getNode(), l, null)
            } else {
                var f = t.getFront();
                if (!u.isCompleteForPath(t) && t.getLength() > 1) return e;
                var p = t.popFront(),
                    d = u.getNode().getImmediateChild(f).updateChild(p, n);
                s = ".priority" == f ? c.updatePriority(u.getNode(), d) : c.updateChild(u.getNode(), f, d, p, h.NO_COMPLETE_CHILD_SOURCE, null)
            }
            var v = e.updateServerSnap(s, u.isFullyInitialized() || t.isEmpty(), c.filtersNodes()),
                _ = new h.WriteTreeCompleteChildSource(r, v, i);
            return this.generateEventCacheAfterServerEvent_(v, t, r, _, a)
        }, e.prototype.applyUserOverwrite_ = function(e, t, n, r, i, o) {
            var a, u, c = e.getEventCache(),
                l = new h.WriteTreeCompleteChildSource(r, e, i);
            if (t.isEmpty()) u = this.filter_.updateFullNode(e.getEventCache().getNode(), n, o), a = e.updateEventSnap(u, !0, this.filter_.filtersNodes());
            else {
                var f = t.getFront();
                if (".priority" === f) u = this.filter_.updatePriority(e.getEventCache().getNode(), n), a = e.updateEventSnap(u, c.isFullyInitialized(), c.isFiltered());
                else {
                    var p = t.popFront(),
                        d = c.getNode().getImmediateChild(f),
                        v = void 0;
                    if (p.isEmpty()) v = n;
                    else {
                        var _ = l.getCompleteChild(f);
                        v = null != _ ? ".priority" === p.getBack() && _.getChild(p.parent()).isEmpty() ? _ : _.updateChild(p, n) : s.ChildrenNode.EMPTY_NODE
                    }
                    if (d.equals(v)) a = e;
                    else {
                        var y = this.filter_.updateChild(c.getNode(), f, v, p, l, o);
                        a = e.updateEventSnap(y, c.isFullyInitialized(), this.filter_.filtersNodes())
                    }
                }
            }
            return a
        }, e.cacheHasChild_ = function(e, t) {
            return e.getEventCache().isCompleteForChild(t)
        }, e.prototype.applyUserMerge_ = function(t, n, r, i, o, a) {
            var s = this,
                u = t;
            return r.foreach(function(r, c) {
                var l = n.child(r);
                e.cacheHasChild_(t, l.getFront()) && (u = s.applyUserOverwrite_(u, l, c, i, o, a))
            }), r.foreach(function(r, c) {
                var l = n.child(r);
                e.cacheHasChild_(t, l.getFront()) || (u = s.applyUserOverwrite_(u, l, c, i, o, a))
            }), u
        }, e.prototype.applyMerge_ = function(e, t) {
            return t.foreach(function(t, n) {
                e = e.updateChild(t, n)
            }), e
        }, e.prototype.applyServerMerge_ = function(e, t, n, r, i, o, a) {
            var s = this;
            if (e.getServerCache().getNode().isEmpty() && !e.getServerCache().isFullyInitialized()) return e;
            var u, h = e;
            u = t.isEmpty() ? n : c.ImmutableTree.Empty.setTree(t, n);
            var f = e.getServerCache().getNode();
            return u.children.inorderTraversal(function(t, n) {
                if (f.hasChild(t)) {
                    var u = e.getServerCache().getNode().getImmediateChild(t),
                        c = s.applyMerge_(u, n);
                    h = s.applyServerOverwrite_(h, new l.Path(t), c, r, i, o, a)
                }
            }), u.children.inorderTraversal(function(t, n) {
                var u = !e.getServerCache().isCompleteForChild(t) && null == n.value;
                if (!f.hasChild(t) && !u) {
                    var c = e.getServerCache().getNode().getImmediateChild(t),
                        p = s.applyMerge_(c, n);
                    h = s.applyServerOverwrite_(h, new l.Path(t), p, r, i, o, a)
                }
            }), h
        }, e.prototype.ackUserWrite_ = function(e, t, n, r, i, o) {
            if (null != r.shadowingWrite(t)) return e;
            var a = e.getServerCache().isFiltered(),
                s = e.getServerCache();
            if (null != n.value) {
                if (t.isEmpty() && s.isFullyInitialized() || s.isCompleteForPath(t)) return this.applyServerOverwrite_(e, t, s.getNode().getChild(t), r, i, a, o);
                if (t.isEmpty()) {
                    var h = c.ImmutableTree.Empty;
                    return s.getNode().forEachChild(u.KEY_INDEX, function(e, t) {
                        h = h.set(new l.Path(e), t)
                    }), this.applyServerMerge_(e, t, h, r, i, a, o)
                }
                return e
            }
            var f = c.ImmutableTree.Empty;
            return n.foreach(function(e, n) {
                var r = t.child(e);
                s.isCompleteForPath(r) && (f = f.set(e, s.getNode().getChild(r)))
            }), this.applyServerMerge_(e, t, f, r, i, a, o)
        }, e.prototype.listenComplete_ = function(e, t, n, r) {
            var i = e.getServerCache(),
                o = e.updateServerSnap(i.getNode(), i.isFullyInitialized() || t.isEmpty(), i.isFiltered());
            return this.generateEventCacheAfterServerEvent_(o, t, n, h.NO_COMPLETE_CHILD_SOURCE, r)
        }, e.prototype.revertUserWrite_ = function(e, t, n, r, o) {
            var a;
            if (null != n.shadowingWrite(t)) return e;
            var u = new h.WriteTreeCompleteChildSource(n, e, r),
                c = e.getEventCache().getNode(),
                f = void 0;
            if (t.isEmpty() || ".priority" === t.getFront()) {
                var p = void 0;
                if (e.getServerCache().isFullyInitialized()) p = n.calcCompleteEventCache(e.getCompleteServerSnap());
                else {
                    var d = e.getServerCache().getNode();
                    i.assert(d instanceof s.ChildrenNode, "serverChildren would be complete if leaf node"), p = n.calcCompleteEventChildren(d)
                }
                p = p, f = this.filter_.updateFullNode(c, p, o)
            } else {
                var v = t.getFront(),
                    _ = n.calcCompleteChild(v, e.getServerCache());
                null == _ && e.getServerCache().isCompleteForChild(v) && (_ = c.getImmediateChild(v)), (f = null != _ ? this.filter_.updateChild(c, v, _, t.popFront(), u, o) : e.getEventCache().getNode().hasChild(v) ? this.filter_.updateChild(c, v, s.ChildrenNode.EMPTY_NODE, t.popFront(), u, o) : c).isEmpty() && e.getServerCache().isFullyInitialized() && (a = n.calcCompleteEventCache(e.getCompleteServerSnap())).isLeafNode() && (f = this.filter_.updateFullNode(f, a, o))
            }
            return a = e.getServerCache().isFullyInitialized() || null != n.shadowingWrite(l.Path.Empty), e.updateEventSnap(f, a, this.filter_.filtersNodes())
        }, e
    }();
    t.ViewProcessor = p
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(60),
        o = n(0),
        a = function() {
            function e() {
                this.changeMap_ = {}
            }
            return e.prototype.trackChildChange = function(e) {
                var t = e.type,
                    n = e.childName;
                o.assert(t == i.Change.CHILD_ADDED || t == i.Change.CHILD_CHANGED || t == i.Change.CHILD_REMOVED, "Only child changes supported for tracking"), o.assert(".priority" !== n, "Only non-priority child changes can be tracked.");
                var a = r.safeGet(this.changeMap_, n);
                if (a) {
                    var s = a.type;
                    if (t == i.Change.CHILD_ADDED && s == i.Change.CHILD_REMOVED) this.changeMap_[n] = i.Change.childChangedChange(n, e.snapshotNode, a.snapshotNode);
                    else if (t == i.Change.CHILD_REMOVED && s == i.Change.CHILD_ADDED) delete this.changeMap_[n];
                    else if (t == i.Change.CHILD_REMOVED && s == i.Change.CHILD_CHANGED) this.changeMap_[n] = i.Change.childRemovedChange(n, a.oldSnap);
                    else if (t == i.Change.CHILD_CHANGED && s == i.Change.CHILD_ADDED) this.changeMap_[n] = i.Change.childAddedChange(n, e.snapshotNode);
                    else {
                        if (t != i.Change.CHILD_CHANGED || s != i.Change.CHILD_CHANGED) throw o.assertionError("Illegal combination of changes: " + e + " occurred after " + a);
                        this.changeMap_[n] = i.Change.childChangedChange(n, e.snapshotNode, a.oldSnap)
                    }
                } else this.changeMap_[n] = e
            }, e.prototype.getChanges = function() {
                return r.getValues(this.changeMap_)
            }, e
        }();
    t.ChildChangeAccumulator = a
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(92),
        i = function() {
            function e() {}
            return e.prototype.getCompleteChild = function(e) {
                return null
            }, e.prototype.getChildAfterChild = function(e, t, n) {
                return null
            }, e
        }();
    t.NoCompleteChildSource_ = i, t.NO_COMPLETE_CHILD_SOURCE = new i;
    var o = function() {
        function e(e, t, n) {
            void 0 === n && (n = null), this.writes_ = e, this.viewCache_ = t, this.optCompleteServerCache_ = n
        }
        return e.prototype.getCompleteChild = function(e) {
            var t = this.viewCache_.getEventCache();
            if (t.isCompleteForChild(e)) return t.getNode().getImmediateChild(e);
            var n = null != this.optCompleteServerCache_ ? new r.CacheNode(this.optCompleteServerCache_, !0, !1) : this.viewCache_.getServerCache();
            return this.writes_.calcCompleteChild(e, n)
        }, e.prototype.getChildAfterChild = function(e, t, n) {
            var r = null != this.optCompleteServerCache_ ? this.optCompleteServerCache_ : this.viewCache_.getCompleteServerSnap(),
                i = this.writes_.calcIndexedSlice(r, t, 1, n, e);
            return 0 === i.length ? null : i[0]
        }, e
    }();
    t.WriteTreeCompleteChildSource = o
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(22),
        i = n(60),
        o = n(0),
        a = function() {
            function e(e) {
                this.query_ = e, this.index_ = this.query_.getQueryParams().getIndex()
            }
            return e.prototype.generateEventsForChanges = function(e, t, n) {
                var r = this,
                    o = [],
                    a = [];
                return e.forEach(function(e) {
                    e.type === i.Change.CHILD_CHANGED && r.index_.indexedValueChanged(e.oldSnap, e.snapshotNode) && a.push(i.Change.childMovedChange(e.childName, e.snapshotNode))
                }), this.generateEventsForType_(o, i.Change.CHILD_REMOVED, e, n, t), this.generateEventsForType_(o, i.Change.CHILD_ADDED, e, n, t), this.generateEventsForType_(o, i.Change.CHILD_MOVED, a, n, t), this.generateEventsForType_(o, i.Change.CHILD_CHANGED, e, n, t), this.generateEventsForType_(o, i.Change.VALUE, e, n, t), o
            }, e.prototype.generateEventsForType_ = function(e, t, n, r, i) {
                var o = this,
                    a = n.filter(function(e) {
                        return e.type === t
                    });
                a.sort(this.compareChanges_.bind(this)), a.forEach(function(t) {
                    var n = o.materializeSingleChange_(t, i);
                    r.forEach(function(r) {
                        r.respondsTo(t.type) && e.push(r.createEvent(n, o.query_))
                    })
                })
            }, e.prototype.materializeSingleChange_ = function(e, t) {
                return "value" === e.type || "child_removed" === e.type ? e : (e.prevName = t.getPredecessorChildName(e.childName, e.snapshotNode, this.index_), e)
            }, e.prototype.compareChanges_ = function(e, t) {
                if (null == e.childName || null == t.childName) throw o.assertionError("Should only compare child_ events.");
                var n = new r.NamedNode(e.childName, e.snapshotNode),
                    i = new r.NamedNode(t.childName, t.snapshotNode);
                return this.index_.compare(n, i)
            }, e
        }();
    t.EventGenerator = a
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(0),
        o = n(8),
        a = n(258),
        s = n(16),
        u = n(18),
        c = function() {
            function e() {
                this.visibleWrites_ = a.CompoundWrite.Empty, this.allWrites_ = [], this.lastWriteId_ = -1
            }
            return e.prototype.childWrites = function(e) {
                return new l(e, this)
            }, e.prototype.addOverwrite = function(e, t, n, r) {
                i.assert(n > this.lastWriteId_, "Stacking an older write on top of newer ones"), void 0 === r && (r = !0), this.allWrites_.push({
                    path: e,
                    snap: t,
                    writeId: n,
                    visible: r
                }), r && (this.visibleWrites_ = this.visibleWrites_.addWrite(e, t)), this.lastWriteId_ = n
            }, e.prototype.addMerge = function(e, t, n) {
                i.assert(n > this.lastWriteId_, "Stacking an older merge on top of newer ones"), this.allWrites_.push({
                    path: e,
                    children: t,
                    writeId: n,
                    visible: !0
                }), this.visibleWrites_ = this.visibleWrites_.addWrites(e, t), this.lastWriteId_ = n
            }, e.prototype.getWrite = function(e) {
                for (var t = 0; t < this.allWrites_.length; t++) {
                    var n = this.allWrites_[t];
                    if (n.writeId === e) return n
                }
                return null
            }, e.prototype.removeWrite = function(e) {
                var t = this,
                    n = this.allWrites_.findIndex(function(t) {
                        return t.writeId === e
                    });
                i.assert(n >= 0, "removeWrite called with nonexistent writeId.");
                var o = this.allWrites_[n];
                this.allWrites_.splice(n, 1);
                for (var a = o.visible, s = !1, u = this.allWrites_.length - 1; a && u >= 0;) {
                    var c = this.allWrites_[u];
                    c.visible && (u >= n && this.recordContainsPath_(c, o.path) ? a = !1 : o.path.contains(c.path) && (s = !0)), u--
                }
                if (a) {
                    if (s) return this.resetTree_(), !0;
                    if (o.snap) this.visibleWrites_ = this.visibleWrites_.removeWrite(o.path);
                    else {
                        var l = o.children;
                        r.forEach(l, function(e) {
                            t.visibleWrites_ = t.visibleWrites_.removeWrite(o.path.child(e))
                        })
                    }
                    return !0
                }
                return !1
            }, e.prototype.getCompleteWriteData = function(e) {
                return this.visibleWrites_.getCompleteNode(e)
            }, e.prototype.calcCompleteEventCache = function(t, n, r, i) {
                if (r || i) {
                    var a = this.visibleWrites_.childCompoundWrite(t);
                    if (!i && a.isEmpty()) return n;
                    if (i || null != n || a.hasCompleteWrite(o.Path.Empty)) {
                        var s = function(e) {
                                return (e.visible || i) && (!r || !~r.indexOf(e.writeId)) && (e.path.contains(t) || t.contains(e.path))
                            },
                            c = e.layerTree_(this.allWrites_, s, t),
                            l = n || u.ChildrenNode.EMPTY_NODE;
                        return c.apply(l)
                    }
                    return null
                }
                var h = this.visibleWrites_.getCompleteNode(t);
                if (null != h) return h;
                var f = this.visibleWrites_.childCompoundWrite(t);
                if (f.isEmpty()) return n;
                if (null != n || f.hasCompleteWrite(o.Path.Empty)) {
                    l = n || u.ChildrenNode.EMPTY_NODE;
                    return f.apply(l)
                }
                return null
            }, e.prototype.calcCompleteEventChildren = function(e, t) {
                var n = u.ChildrenNode.EMPTY_NODE,
                    r = this.visibleWrites_.getCompleteNode(e);
                if (r) return r.isLeafNode() || r.forEachChild(s.PRIORITY_INDEX, function(e, t) {
                    n = n.updateImmediateChild(e, t)
                }), n;
                if (t) {
                    var i = this.visibleWrites_.childCompoundWrite(e);
                    return t.forEachChild(s.PRIORITY_INDEX, function(e, t) {
                        var r = i.childCompoundWrite(new o.Path(e)).apply(t);
                        n = n.updateImmediateChild(e, r)
                    }), i.getCompleteChildren().forEach(function(e) {
                        n = n.updateImmediateChild(e.name, e.node)
                    }), n
                }
                return this.visibleWrites_.childCompoundWrite(e).getCompleteChildren().forEach(function(e) {
                    n = n.updateImmediateChild(e.name, e.node)
                }), n
            }, e.prototype.calcEventCacheAfterServerOverwrite = function(e, t, n, r) {
                i.assert(n || r, "Either existingEventSnap or existingServerSnap must exist");
                var o = e.child(t);
                if (this.visibleWrites_.hasCompleteWrite(o)) return null;
                var a = this.visibleWrites_.childCompoundWrite(o);
                return a.isEmpty() ? r.getChild(t) : a.apply(r.getChild(t))
            }, e.prototype.calcCompleteChild = function(e, t, n) {
                var r = e.child(t),
                    i = this.visibleWrites_.getCompleteNode(r);
                if (null != i) return i;
                if (n.isCompleteForChild(t)) {
                    return this.visibleWrites_.childCompoundWrite(r).apply(n.getNode().getImmediateChild(t))
                }
                return null
            }, e.prototype.shadowingWrite = function(e) {
                return this.visibleWrites_.getCompleteNode(e)
            }, e.prototype.calcIndexedSlice = function(e, t, n, r, i, a) {
                var s, u = this.visibleWrites_.childCompoundWrite(e),
                    c = u.getCompleteNode(o.Path.Empty);
                if (null != c) s = c;
                else {
                    if (null == t) return [];
                    s = u.apply(t)
                }
                if ((s = s.withIndex(a)).isEmpty() || s.isLeafNode()) return [];
                for (var l = [], h = a.getCompare(), f = i ? s.getReverseIteratorFrom(n, a) : s.getIteratorFrom(n, a), p = f.getNext(); p && l.length < r;) 0 !== h(p, n) && l.push(p), p = f.getNext();
                return l
            }, e.prototype.recordContainsPath_ = function(e, t) {
                return e.snap ? e.path.contains(t) : !!r.findKey(e.children, function(n, r) {
                    return e.path.child(r).contains(t)
                })
            }, e.prototype.resetTree_ = function() {
                this.visibleWrites_ = e.layerTree_(this.allWrites_, e.DefaultFilter_, o.Path.Empty), this.allWrites_.length > 0 ? this.lastWriteId_ = this.allWrites_[this.allWrites_.length - 1].writeId : this.lastWriteId_ = -1
            }, e.DefaultFilter_ = function(e) {
                return e.visible
            }, e.layerTree_ = function(e, t, n) {
                for (var s = a.CompoundWrite.Empty, u = 0; u < e.length; ++u) {
                    var c = e[u];
                    if (t(c)) {
                        var l = c.path,
                            h = void 0;
                        if (c.snap) n.contains(l) ? (h = o.Path.relativePath(n, l), s = s.addWrite(h, c.snap)) : l.contains(n) && (h = o.Path.relativePath(l, n), s = s.addWrite(o.Path.Empty, c.snap.getChild(h)));
                        else {
                            if (!c.children) throw i.assertionError("WriteRecord should have .snap or .children");
                            if (n.contains(l)) h = o.Path.relativePath(n, l), s = s.addWrites(h, c.children);
                            else if (l.contains(n))
                                if ((h = o.Path.relativePath(l, n)).isEmpty()) s = s.addWrites(o.Path.Empty, c.children);
                                else {
                                    var f = r.safeGet(c.children, h.getFront());
                                    if (f) {
                                        var p = f.getChild(h.popFront());
                                        s = s.addWrite(o.Path.Empty, p)
                                    }
                                }
                        }
                    }
                }
                return s
            }, e
        }();
    t.WriteTree = c;
    var l = function() {
        function e(e, t) {
            this.treePath_ = e, this.writeTree_ = t
        }
        return e.prototype.calcCompleteEventCache = function(e, t, n) {
            return this.writeTree_.calcCompleteEventCache(this.treePath_, e, t, n)
        }, e.prototype.calcCompleteEventChildren = function(e) {
            return this.writeTree_.calcCompleteEventChildren(this.treePath_, e)
        }, e.prototype.calcEventCacheAfterServerOverwrite = function(e, t, n) {
            return this.writeTree_.calcEventCacheAfterServerOverwrite(this.treePath_, e, t, n)
        }, e.prototype.shadowingWrite = function(e) {
            return this.writeTree_.shadowingWrite(this.treePath_.child(e))
        }, e.prototype.calcIndexedSlice = function(e, t, n, r, i) {
            return this.writeTree_.calcIndexedSlice(this.treePath_, e, t, n, r, i)
        }, e.prototype.calcCompleteChild = function(e, t) {
            return this.writeTree_.calcCompleteChild(this.treePath_, e, t)
        }, e.prototype.child = function(t) {
            return new e(this.treePath_.child(t), this.writeTree_)
        }, e
    }();
    t.WriteTreeRef = l
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(115),
        i = n(8),
        o = n(0),
        a = n(22),
        s = n(16),
        u = n(0),
        c = function() {
            function e(e) {
                this.writeTree_ = e
            }
            return e.prototype.addWrite = function(t, n) {
                if (t.isEmpty()) return new e(new r.ImmutableTree(n));
                var o = this.writeTree_.findRootMostValueAndPath(t);
                if (null != o) {
                    var a = o.path,
                        s = o.value,
                        u = i.Path.relativePath(a, t);
                    return s = s.updateChild(u, n), new e(this.writeTree_.set(a, s))
                }
                var c = new r.ImmutableTree(n);
                return new e(this.writeTree_.setTree(t, c))
            }, e.prototype.addWrites = function(e, t) {
                var n = this;
                return o.forEach(t, function(t, r) {
                    n = n.addWrite(e.child(t), r)
                }), n
            }, e.prototype.removeWrite = function(t) {
                if (t.isEmpty()) return e.Empty;
                return new e(this.writeTree_.setTree(t, r.ImmutableTree.Empty))
            }, e.prototype.hasCompleteWrite = function(e) {
                return null != this.getCompleteNode(e)
            }, e.prototype.getCompleteNode = function(e) {
                var t = this.writeTree_.findRootMostValueAndPath(e);
                return null != t ? this.writeTree_.get(t.path).getChild(i.Path.relativePath(t.path, e)) : null
            }, e.prototype.getCompleteChildren = function() {
                var e = [],
                    t = this.writeTree_.value;
                return null != t ? t.isLeafNode() || t.forEachChild(s.PRIORITY_INDEX, function(t, n) {
                    e.push(new a.NamedNode(t, n))
                }) : this.writeTree_.children.inorderTraversal(function(t, n) {
                    null != n.value && e.push(new a.NamedNode(t, n.value))
                }), e
            }, e.prototype.childCompoundWrite = function(t) {
                if (t.isEmpty()) return this;
                var n = this.getCompleteNode(t);
                return new e(null != n ? new r.ImmutableTree(n) : this.writeTree_.subtree(t))
            }, e.prototype.isEmpty = function() {
                return this.writeTree_.isEmpty()
            }, e.prototype.apply = function(t) {
                return e.applySubtreeWrite_(i.Path.Empty, this.writeTree_, t)
            }, e.Empty = new e(new r.ImmutableTree(null)), e.applySubtreeWrite_ = function(t, n, r) {
                if (null != n.value) return r.updateChild(t, n.value);
                var i = null;
                return n.children.inorderTraversal(function(n, o) {
                    ".priority" === n ? (u.assert(null !== o.value, "Priority writes must always be leaf nodes"), i = o.value) : r = e.applySubtreeWrite_(t.child(n), o, r)
                }), r.getChild(t).isEmpty() || null === i || (r = r.updateChild(t.child(".priority"), i)), r
            }, e
        }();
    t.CompoundWrite = c
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(18),
        i = function() {
            function e() {
                this.rootNode_ = r.ChildrenNode.EMPTY_NODE
            }
            return e.prototype.getNode = function(e) {
                return this.rootNode_.getChild(e)
            }, e.prototype.updateSnapshot = function(e, t) {
                this.rootNode_ = this.rootNode_.updateChild(e, t)
            }, e
        }();
    t.SnapshotHolder = i
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(3),
        i = function() {
            function e(e) {
                this.app_ = e
            }
            return e.prototype.getToken = function(e) {
                return this.app_.INTERNAL.getToken(e).then(null, function(e) {
                    return e && "auth/token-not-initialized" === e.code ? (r.log("Got auth/token-not-initialized error.  Treating as null token."), null) : Promise.reject(e)
                })
            }, e.prototype.addTokenChangeListener = function(e) {
                this.app_.INTERNAL.addAuthTokenListener(e)
            }, e.prototype.removeTokenChangeListener = function(e) {
                this.app_.INTERNAL.removeAuthTokenListener(e)
            }, e.prototype.notifyForInvalidToken = function() {
                var e = 'Provided authentication credentials for the app named "' + this.app_.name + '" are invalid. This usually indicates your app was not initialized correctly. ';
                "credential" in this.app_.options ? e += 'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : "serviceAccount" in this.app_.options ? e += 'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : e += 'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.', r.warn(e)
            }, e
        }();
    t.AuthTokenProvider = i
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(0),
        o = function() {
            function e() {
                this.counters_ = {}
            }
            return e.prototype.incrementCounter = function(e, t) {
                void 0 === t && (t = 1), i.contains(this.counters_, e) || (this.counters_[e] = 0), this.counters_[e] += t
            }, e.prototype.get = function() {
                return r.deepCopy(this.counters_)
            }, e
        }();
    t.StatsCollection = o
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(3),
        o = n(151),
        a = 1e4,
        s = 3e4,
        u = function() {
            function e(e, t) {
                this.server_ = t, this.statsToReport_ = {}, this.statsListener_ = new o.StatsListener(e);
                var n = a + (s - a) * Math.random();
                i.setTimeoutNonBlocking(this.reportStats_.bind(this), Math.floor(n))
            }
            return e.prototype.includeStat = function(e) {
                this.statsToReport_[e] = !0
            }, e.prototype.reportStats_ = function() {
                var e = this,
                    t = this.statsListener_.get(),
                    n = {},
                    o = !1;
                r.forEach(t, function(t, i) {
                    i > 0 && r.contains(e.statsToReport_, t) && (n[t] = i, o = !0)
                }), o && this.server_.reportStats(n), i.setTimeoutNonBlocking(this.reportStats_.bind(this), Math.floor(2 * Math.random() * 3e5))
            }, e
        }();
    t.StatsReporter = u
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(3),
        i = function() {
            function e() {
                this.eventLists_ = [], this.recursionDepth_ = 0
            }
            return e.prototype.queueEvents = function(e) {
                for (var t = null, n = 0; n < e.length; n++) {
                    var r = e[n],
                        i = r.getPath();
                    null === t || i.equals(t.getPath()) || (this.eventLists_.push(t), t = null), null === t && (t = new o(i)), t.add(r)
                }
                t && this.eventLists_.push(t)
            }, e.prototype.raiseEventsAtPath = function(e, t) {
                this.queueEvents(t), this.raiseQueuedEventsMatchingPredicate_(function(t) {
                    return t.equals(e)
                })
            }, e.prototype.raiseEventsForChangedPath = function(e, t) {
                this.queueEvents(t), this.raiseQueuedEventsMatchingPredicate_(function(t) {
                    return t.contains(e) || e.contains(t)
                })
            }, e.prototype.raiseQueuedEventsMatchingPredicate_ = function(e) {
                this.recursionDepth_++;
                for (var t = !0, n = 0; n < this.eventLists_.length; n++) {
                    var r = this.eventLists_[n];
                    if (r) {
                        e(r.getPath()) ? (this.eventLists_[n].raise(), this.eventLists_[n] = null) : t = !1
                    }
                }
                t && (this.eventLists_ = []), this.recursionDepth_--
            }, e
        }();
    t.EventQueue = i;
    var o = function() {
        function e(e) {
            this.path_ = e, this.events_ = []
        }
        return e.prototype.add = function(e) {
            this.events_.push(e)
        }, e.prototype.raise = function() {
            for (var e = 0; e < this.events_.length; e++) {
                var t = this.events_[e];
                if (null !== t) {
                    this.events_[e] = null;
                    var n = t.getEventRunner();
                    r.logger && r.log("event: " + t.toString()), r.exceptionGuard(n)
                }
            }
        }, e.prototype.getPath = function() {
            return this.path_
        }, e
    }();
    t.EventList = o
}, function(e, t, n) {
    "use strict";
    var r = this && this.__extends || function() {
        var e = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        };
        return function(t, n) {
            function r() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
        }
    }();
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(153),
        o = n(0),
        a = function(e) {
            function t() {
                var t, n, r = e.call(this, ["visible"]) || this;
                return "undefined" != typeof document && void 0 !== document.addEventListener && (void 0 !== document.hidden ? (n = "visibilitychange", t = "hidden") : void 0 !== document.mozHidden ? (n = "mozvisibilitychange", t = "mozHidden") : void 0 !== document.msHidden ? (n = "msvisibilitychange", t = "msHidden") : void 0 !== document.webkitHidden && (n = "webkitvisibilitychange", t = "webkitHidden")), r.visible_ = !0, n && document.addEventListener(n, function() {
                    var e = !document[t];
                    e !== r.visible_ && (r.visible_ = e, r.trigger("visible", e))
                }, !1), r
            }
            return r(t, e), t.getInstance = function() {
                return new t
            }, t.prototype.getInitialEvent = function(e) {
                return o.assert("visible" === e, "Unknown event type: " + e), [this.visible_]
            }, t
        }(i.EventEmitter);
    t.VisibilityMonitor = a
}, function(e, t, n) {
    "use strict";
    var r = this && this.__extends || function() {
        var e = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        };
        return function(t, n) {
            function r() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
        }
    }();
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0),
        o = n(153),
        a = n(0),
        s = function(e) {
            function t() {
                var t = e.call(this, ["online"]) || this;
                return t.online_ = !0, "undefined" == typeof window || void 0 === window.addEventListener || a.isMobileCordova() || (window.addEventListener("online", function() {
                    t.online_ || (t.online_ = !0, t.trigger("online", !0))
                }, !1), window.addEventListener("offline", function() {
                    t.online_ && (t.online_ = !1, t.trigger("online", !1))
                }, !1)), t
            }
            return r(t, e), t.getInstance = function() {
                return new t
            }, t.prototype.getInitialEvent = function(e) {
                return i.assert("online" === e, "Unknown event type: " + e), [this.online_]
            }, t.prototype.currentlyOnline = function() {
                return this.online_
            }, t
        }(o.EventEmitter);
    t.OnlineMonitor = s
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(155),
        i = n(156),
        o = n(3),
        a = function() {
            function e(e) {
                this.initTransports_(e)
            }
            return Object.defineProperty(e, "ALL_TRANSPORTS", {
                get: function() {
                    return [r.BrowserPollConnection, i.WebSocketConnection]
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initTransports_ = function(t) {
                var n = i.WebSocketConnection && i.WebSocketConnection.isAvailable(),
                    r = n && !i.WebSocketConnection.previouslyFailed();
                if (t.webSocketOnly && (n || o.warn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."), r = !0), r) this.transports_ = [i.WebSocketConnection];
                else {
                    var a = this.transports_ = [];
                    o.each(e.ALL_TRANSPORTS, function(e, t) {
                        t && t.isAvailable() && a.push(t)
                    })
                }
            }, e.prototype.initialTransport = function() {
                if (this.transports_.length > 0) return this.transports_[0];
                throw new Error("No transports available")
            }, e.prototype.upgradeTransport = function() {
                return this.transports_.length > 1 ? this.transports_[1] : null
            }, e
        }();
    t.TransportManager = a
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(3),
        i = function() {
            function e(e) {
                this.onMessage_ = e, this.pendingResponses = [], this.currentResponseNum = 0, this.closeAfterResponse = -1, this.onClose = null
            }
            return e.prototype.closeAfter = function(e, t) {
                this.closeAfterResponse = e, this.onClose = t, this.closeAfterResponse < this.currentResponseNum && (this.onClose(), this.onClose = null)
            }, e.prototype.handleResponse = function(e, t) {
                var n = this;
                this.pendingResponses[e] = t;
                for (var i = function() {
                        var e = o.pendingResponses[o.currentResponseNum];
                        delete o.pendingResponses[o.currentResponseNum];
                        for (var t = function(t) {
                                e[t] && r.exceptionGuard(function() {
                                    n.onMessage_(e[t])
                                })
                            }, i = 0; i < e.length; ++i) t(i);
                        if (o.currentResponseNum === o.closeAfterResponse) return o.onClose && (o.onClose(), o.onClose = null), "break";
                        o.currentResponseNum++
                    }, o = this; this.pendingResponses[this.currentResponseNum];) {
                    if ("break" === i()) break
                }
            }, e
        }();
    t.PacketReceiver = i
}, function(e, t, n) {
    "use strict";
    var r = this && this.__extends || function() {
        var e = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        };
        return function(t, n) {
            function r() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
        }
    }();
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0),
        o = n(3),
        a = n(0),
        s = n(0),
        u = n(0),
        c = function(e) {
            function t(t, n, r) {
                var i = e.call(this) || this;
                return i.repoInfo_ = t, i.onDataUpdate_ = n, i.authTokenProvider_ = r, i.log_ = o.logWrapper("p:rest:"), i.listens_ = {}, i
            }
            return r(t, e), t.prototype.reportStats = function(e) {
                throw new Error("Method not implemented.")
            }, t.getListenId_ = function(e, t) {
                return void 0 !== t ? "tag$" + t : (i.assert(e.getQueryParams().isDefault(), "should have a tag if it's not a default query."), e.path.toString())
            }, t.prototype.listen = function(e, n, r, i) {
                var o = this,
                    a = e.path.toString();
                this.log_("Listen called for " + a + " " + e.queryIdentifier());
                var u = t.getListenId_(e, r),
                    c = {};
                this.listens_[u] = c;
                var l = e.getQueryParams().toRestQueryStringParameters();
                this.restRequest_(a + ".json", l, function(e, t) {
                    var n = t;
                    if (404 === e && (n = null, e = null), null === e && o.onDataUpdate_(a, n, !1, r), s.safeGet(o.listens_, u) === c) {
                        i(e ? 401 == e ? "permission_denied" : "rest_error:" + e : "ok", null)
                    }
                })
            }, t.prototype.unlisten = function(e, n) {
                var r = t.getListenId_(e, n);
                delete this.listens_[r]
            }, t.prototype.refreshAuthToken = function(e) {}, t.prototype.restRequest_ = function(e, t, n) {
                var r = this;
                void 0 === t && (t = {}), t.format = "export", this.authTokenProvider_.getToken(!1).then(function(i) {
                    var s = i && i.accessToken;
                    s && (t.auth = s);
                    var c = (r.repoInfo_.secure ? "https://" : "http://") + r.repoInfo_.host + e + "?" + u.querystring(t);
                    r.log_("Sending REST request for " + c);
                    var l = new XMLHttpRequest;
                    l.onreadystatechange = function() {
                        if (n && 4 === l.readyState) {
                            r.log_("REST Response for " + c + " received. status:", l.status, "response:", l.responseText);
                            var e = null;
                            if (l.status >= 200 && l.status < 300) {
                                try {
                                    e = a.jsonEval(l.responseText)
                                } catch (e) {
                                    o.warn("Failed to parse JSON response for " + c + ": " + l.responseText)
                                }
                                n(null, e)
                            } else 401 !== l.status && 404 !== l.status && o.warn("Got unsuccessful REST response for " + c + " Status: " + l.status), n(l.status);
                            n = null
                        }
                    }, l.open("GET", c, !0), l.send()
                })
            }, t
        }(n(157).ServerActions);
    t.ReadonlyRestClient = c
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(3),
        o = n(79),
        a = n(16),
        s = n(140),
        u = n(144),
        c = n(116),
        l = n(270),
        h = n(158),
        f = n(0),
        p = function() {
            function e() {
                this.limitSet_ = !1, this.startSet_ = !1, this.startNameSet_ = !1, this.endSet_ = !1, this.endNameSet_ = !1, this.limit_ = 0, this.viewFrom_ = "", this.indexStartValue_ = null, this.indexStartName_ = "", this.indexEndValue_ = null, this.indexEndName_ = "", this.index_ = a.PRIORITY_INDEX
            }
            return e.prototype.hasStart = function() {
                return this.startSet_
            }, e.prototype.isViewFromLeft = function() {
                return "" === this.viewFrom_ ? this.startSet_ : this.viewFrom_ === e.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT
            }, e.prototype.getIndexStartValue = function() {
                return r.assert(this.startSet_, "Only valid if start has been set"), this.indexStartValue_
            }, e.prototype.getIndexStartName = function() {
                return r.assert(this.startSet_, "Only valid if start has been set"), this.startNameSet_ ? this.indexStartName_ : i.MIN_NAME
            }, e.prototype.hasEnd = function() {
                return this.endSet_
            }, e.prototype.getIndexEndValue = function() {
                return r.assert(this.endSet_, "Only valid if end has been set"), this.indexEndValue_
            }, e.prototype.getIndexEndName = function() {
                return r.assert(this.endSet_, "Only valid if end has been set"), this.endNameSet_ ? this.indexEndName_ : i.MAX_NAME
            }, e.prototype.hasLimit = function() {
                return this.limitSet_
            }, e.prototype.hasAnchoredLimit = function() {
                return this.limitSet_ && "" !== this.viewFrom_
            }, e.prototype.getLimit = function() {
                return r.assert(this.limitSet_, "Only valid if limit has been set"), this.limit_
            }, e.prototype.getIndex = function() {
                return this.index_
            }, e.prototype.copy_ = function() {
                var t = new e;
                return t.limitSet_ = this.limitSet_, t.limit_ = this.limit_, t.startSet_ = this.startSet_, t.indexStartValue_ = this.indexStartValue_, t.startNameSet_ = this.startNameSet_, t.indexStartName_ = this.indexStartName_, t.endSet_ = this.endSet_, t.indexEndValue_ = this.indexEndValue_, t.endNameSet_ = this.endNameSet_, t.indexEndName_ = this.indexEndName_, t.index_ = this.index_, t.viewFrom_ = this.viewFrom_, t
            }, e.prototype.limit = function(e) {
                var t = this.copy_();
                return t.limitSet_ = !0, t.limit_ = e, t.viewFrom_ = "", t
            }, e.prototype.limitToFirst = function(t) {
                var n = this.copy_();
                return n.limitSet_ = !0, n.limit_ = t, n.viewFrom_ = e.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT, n
            }, e.prototype.limitToLast = function(t) {
                var n = this.copy_();
                return n.limitSet_ = !0, n.limit_ = t, n.viewFrom_ = e.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_RIGHT, n
            }, e.prototype.startAt = function(e, t) {
                var n = this.copy_();
                return n.startSet_ = !0, void 0 === e && (e = null), n.indexStartValue_ = e, null != t ? (n.startNameSet_ = !0, n.indexStartName_ = t) : (n.startNameSet_ = !1, n.indexStartName_ = ""), n
            }, e.prototype.endAt = function(e, t) {
                var n = this.copy_();
                return n.endSet_ = !0, void 0 === e && (e = null), n.indexEndValue_ = e, void 0 !== t ? (n.endNameSet_ = !0, n.indexEndName_ = t) : (n.endNameSet_ = !1, n.indexEndName_ = ""), n
            }, e.prototype.orderBy = function(e) {
                var t = this.copy_();
                return t.index_ = e, t
            }, e.prototype.getQueryObject = function() {
                var t = e.WIRE_PROTOCOL_CONSTANTS_,
                    n = {};
                if (this.startSet_ && (n[t.INDEX_START_VALUE] = this.indexStartValue_, this.startNameSet_ && (n[t.INDEX_START_NAME] = this.indexStartName_)), this.endSet_ && (n[t.INDEX_END_VALUE] = this.indexEndValue_, this.endNameSet_ && (n[t.INDEX_END_NAME] = this.indexEndName_)), this.limitSet_) {
                    n[t.LIMIT] = this.limit_;
                    var r = this.viewFrom_;
                    "" === r && (r = this.isViewFromLeft() ? t.VIEW_FROM_LEFT : t.VIEW_FROM_RIGHT), n[t.VIEW_FROM] = r
                }
                return this.index_ !== a.PRIORITY_INDEX && (n[t.INDEX] = this.index_.toString()), n
            }, e.prototype.loadsAllData = function() {
                return !(this.startSet_ || this.endSet_ || this.limitSet_)
            }, e.prototype.isDefault = function() {
                return this.loadsAllData() && this.index_ == a.PRIORITY_INDEX
            }, e.prototype.getNodeFilter = function() {
                return this.loadsAllData() ? new c.IndexedFilter(this.getIndex()) : this.hasLimit() ? new l.LimitedFilter(this) : new h.RangedFilter(this)
            }, e.prototype.toRestQueryStringParameters = function() {
                var t = e.REST_QUERY_CONSTANTS_,
                    n = {};
                if (this.isDefault()) return n;
                var i;
                return this.index_ === a.PRIORITY_INDEX ? i = t.PRIORITY_INDEX : this.index_ === s.VALUE_INDEX ? i = t.VALUE_INDEX : this.index_ === o.KEY_INDEX ? i = t.KEY_INDEX : (r.assert(this.index_ instanceof u.PathIndex, "Unrecognized index type!"), i = this.index_.toString()), n[t.ORDER_BY] = f.stringify(i), this.startSet_ && (n[t.START_AT] = f.stringify(this.indexStartValue_), this.startNameSet_ && (n[t.START_AT] += "," + f.stringify(this.indexStartName_))), this.endSet_ && (n[t.END_AT] = f.stringify(this.indexEndValue_), this.endNameSet_ && (n[t.END_AT] += "," + f.stringify(this.indexEndName_))), this.limitSet_ && (this.isViewFromLeft() ? n[t.LIMIT_TO_FIRST] = this.limit_ : n[t.LIMIT_TO_LAST] = this.limit_), n
            }, e.WIRE_PROTOCOL_CONSTANTS_ = {
                INDEX_START_VALUE: "sp",
                INDEX_START_NAME: "sn",
                INDEX_END_VALUE: "ep",
                INDEX_END_NAME: "en",
                LIMIT: "l",
                VIEW_FROM: "vf",
                VIEW_FROM_LEFT: "l",
                VIEW_FROM_RIGHT: "r",
                INDEX: "i"
            }, e.REST_QUERY_CONSTANTS_ = {
                ORDER_BY: "orderBy",
                PRIORITY_INDEX: "$priority",
                VALUE_INDEX: "$value",
                KEY_INDEX: "$key",
                START_AT: "startAt",
                END_AT: "endAt",
                LIMIT_TO_FIRST: "limitToFirst",
                LIMIT_TO_LAST: "limitToLast"
            }, e.DEFAULT = new e, e
        }();
    t.QueryParams = p
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(158),
        i = n(18),
        o = n(22),
        a = n(0),
        s = n(60),
        u = function() {
            function e(e) {
                this.rangedFilter_ = new r.RangedFilter(e), this.index_ = e.getIndex(), this.limit_ = e.getLimit(), this.reverse_ = !e.isViewFromLeft()
            }
            return e.prototype.updateChild = function(e, t, n, r, a, s) {
                return this.rangedFilter_.matches(new o.NamedNode(t, n)) || (n = i.ChildrenNode.EMPTY_NODE), e.getImmediateChild(t).equals(n) ? e : e.numChildren() < this.limit_ ? this.rangedFilter_.getIndexedFilter().updateChild(e, t, n, r, a, s) : this.fullLimitUpdateChild_(e, t, n, a, s)
            }, e.prototype.updateFullNode = function(e, t, n) {
                var r;
                if (t.isLeafNode() || t.isEmpty()) r = i.ChildrenNode.EMPTY_NODE.withIndex(this.index_);
                else if (2 * this.limit_ < t.numChildren() && t.isIndexed(this.index_)) {
                    r = i.ChildrenNode.EMPTY_NODE.withIndex(this.index_);
                    u = void 0;
                    u = this.reverse_ ? t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(), this.index_) : t.getIteratorFrom(this.rangedFilter_.getStartPost(), this.index_);
                    for (l = 0; u.hasNext() && l < this.limit_;) {
                        f = u.getNext();
                        if (!(this.reverse_ ? this.index_.compare(this.rangedFilter_.getStartPost(), f) <= 0 : this.index_.compare(f, this.rangedFilter_.getEndPost()) <= 0)) break;
                        r = r.updateImmediateChild(f.name, f.node), l++
                    }
                } else {
                    r = (r = t.withIndex(this.index_)).updatePriority(i.ChildrenNode.EMPTY_NODE);
                    var o = void 0,
                        a = void 0,
                        s = void 0,
                        u = void 0;
                    if (this.reverse_) {
                        u = r.getReverseIterator(this.index_), o = this.rangedFilter_.getEndPost(), a = this.rangedFilter_.getStartPost();
                        var c = this.index_.getCompare();
                        s = function(e, t) {
                            return c(t, e)
                        }
                    } else u = r.getIterator(this.index_), o = this.rangedFilter_.getStartPost(), a = this.rangedFilter_.getEndPost(), s = this.index_.getCompare();
                    for (var l = 0, h = !1; u.hasNext();) {
                        var f = u.getNext();
                        !h && s(o, f) <= 0 && (h = !0);
                        h && l < this.limit_ && s(f, a) <= 0 ? l++ : r = r.updateImmediateChild(f.name, i.ChildrenNode.EMPTY_NODE)
                    }
                }
                return this.rangedFilter_.getIndexedFilter().updateFullNode(e, r, n)
            }, e.prototype.updatePriority = function(e, t) {
                return e
            }, e.prototype.filtersNodes = function() {
                return !0
            }, e.prototype.getIndexedFilter = function() {
                return this.rangedFilter_.getIndexedFilter()
            }, e.prototype.getIndex = function() {
                return this.index_
            }, e.prototype.fullLimitUpdateChild_ = function(e, t, n, r, u) {
                var c;
                if (this.reverse_) {
                    var l = this.index_.getCompare();
                    c = function(e, t) {
                        return l(t, e)
                    }
                } else c = this.index_.getCompare();
                var h = e;
                a.assert(h.numChildren() == this.limit_, "");
                var f = new o.NamedNode(t, n),
                    p = this.reverse_ ? h.getFirstChild(this.index_) : h.getLastChild(this.index_),
                    d = this.rangedFilter_.matches(f);
                if (h.hasChild(t)) {
                    for (var v = h.getImmediateChild(t), _ = r.getChildAfterChild(this.index_, p, this.reverse_); null != _ && (_.name == t || h.hasChild(_.name));) _ = r.getChildAfterChild(this.index_, _, this.reverse_);
                    var y = null == _ ? 1 : c(_, f);
                    if (d && !n.isEmpty() && y >= 0) return null != u && u.trackChildChange(s.Change.childChangedChange(t, n, v)), h.updateImmediateChild(t, n);
                    null != u && u.trackChildChange(s.Change.childRemovedChange(t, v));
                    var g = h.updateImmediateChild(t, i.ChildrenNode.EMPTY_NODE);
                    return null != _ && this.rangedFilter_.matches(_) ? (null != u && u.trackChildChange(s.Change.childAddedChange(_.name, _.node)), g.updateImmediateChild(_.name, _.node)) : g
                }
                return n.isEmpty() ? e : d && c(p, f) >= 0 ? (null != u && (u.trackChildChange(s.Change.childRemovedChange(p.name, p.node)), u.trackChildChange(s.Change.childAddedChange(t, n))), h.updateImmediateChild(t, n).updateImmediateChild(p.name, i.ChildrenNode.EMPTY_NODE)) : e
            }, e
        }();
    t.LimitedFilter = u
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r, i = n(0),
        o = n(113),
        a = n(114),
        s = n(8),
        u = n(272),
        c = n(16),
        l = n(3),
        h = n(145),
        f = n(52),
        p = n(0),
        d = n(80),
        v = n(18),
        _ = n(91);
    ! function(e) {
        e[e.RUN = 0] = "RUN", e[e.SENT = 1] = "SENT", e[e.COMPLETED = 2] = "COMPLETED", e[e.SENT_NEEDS_ABORT = 3] = "SENT_NEEDS_ABORT", e[e.NEEDS_ABORT = 4] = "NEEDS_ABORT"
    }(r = t.TransactionStatus || (t.TransactionStatus = {})), _.Repo.MAX_TRANSACTION_RETRIES_ = 25, _.Repo.prototype.transactions_init_ = function() {
        this.transactionQueueTree_ = new u.Tree
    }, _.Repo.prototype.startTransaction = function(e, t, n, s) {
        this.log_("transaction on " + e);
        var u = function() {},
            _ = new o.Reference(this, e);
        _.on("value", u);
        var y = {
                path: e,
                update: t,
                onComplete: n,
                status: null,
                order: l.LUIDGenerator(),
                applyLocally: s,
                retryCount: 0,
                unwatcher: function() {
                    _.off("value", u)
                },
                abortReason: null,
                currentWriteId: null,
                currentInputSnapshot: null,
                currentOutputSnapshotRaw: null,
                currentOutputSnapshotResolved: null
            },
            g = this.getLatestState_(e);
        y.currentInputSnapshot = g;
        var m = y.update(g.val());
        if (void 0 === m) {
            if (y.unwatcher(), y.currentOutputSnapshotRaw = null, y.currentOutputSnapshotResolved = null, y.onComplete) {
                var b = new a.DataSnapshot(y.currentInputSnapshot, new o.Reference(this, y.path), c.PRIORITY_INDEX);
                y.onComplete(null, !1, b)
            }
        } else {
            f.validateFirebaseData("transaction failed: Data returned ", m, y.path), y.status = r.RUN;
            var E = this.transactionQueueTree_.subTree(e),
                w = E.getValue() || [];
            w.push(y), E.setValue(w);
            var T = void 0;
            if ("object" == typeof m && null !== m && p.contains(m, ".priority")) T = p.safeGet(m, ".priority"), i.assert(f.isValidPriority(T), "Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.");
            else {
                T = (this.serverSyncTree_.calcCompleteEventCache(e) || v.ChildrenNode.EMPTY_NODE).getPriority().val()
            }
            T = T;
            var S = this.generateServerValues(),
                C = d.nodeFromJSON(m, T),
                N = h.resolveDeferredValueSnapshot(C, S);
            y.currentOutputSnapshotRaw = C, y.currentOutputSnapshotResolved = N, y.currentWriteId = this.getNextWriteId_();
            var P = this.serverSyncTree_.applyUserOverwrite(e, N, y.currentWriteId, y.applyLocally);
            this.eventQueue_.raiseEventsForChangedPath(e, P), this.sendReadyTransactions_()
        }
    }, _.Repo.prototype.getLatestState_ = function(e, t) {
        return this.serverSyncTree_.calcCompleteEventCache(e, t) || v.ChildrenNode.EMPTY_NODE
    }, _.Repo.prototype.sendReadyTransactions_ = function(e) {
        var t = this;
        if (void 0 === e && (e = this.transactionQueueTree_), e || this.pruneCompletedTransactionsBelowNode_(e), null !== e.getValue()) {
            var n = this.buildTransactionQueue_(e);
            i.assert(n.length > 0, "Sending zero length transaction queue");
            n.every(function(e) {
                return e.status === r.RUN
            }) && this.sendTransactionQueue_(e.path(), n)
        } else e.hasChildren() && e.forEachChild(function(e) {
            t.sendReadyTransactions_(e)
        })
    }, _.Repo.prototype.sendTransactionQueue_ = function(e, t) {
        for (var n = this, u = t.map(function(e) {
                return e.currentWriteId
            }), h = this.getLatestState_(e, u), f = h, p = h.hash(), d = 0; d < t.length; d++) {
            var v = t[d];
            i.assert(v.status === r.RUN, "tryToSendTransactionQueue_: items in queue should all be run."), v.status = r.SENT, v.retryCount++;
            var _ = s.Path.relativePath(e, v.path);
            f = f.updateChild(_, v.currentOutputSnapshotRaw)
        }
        var y = f.val(!0),
            g = e;
        this.server_.put(g.toString(), y, function(i) {
            n.log_("transaction put response", {
                path: g.toString(),
                status: i
            });
            var s = [];
            if ("ok" === i) {
                for (var u = [], h = 0; h < t.length; h++) {
                    if (t[h].status = r.COMPLETED, s = s.concat(n.serverSyncTree_.ackUserWrite(t[h].currentWriteId)), t[h].onComplete) {
                        var f = t[h].currentOutputSnapshotResolved,
                            p = new o.Reference(n, t[h].path),
                            d = new a.DataSnapshot(f, p, c.PRIORITY_INDEX);
                        u.push(t[h].onComplete.bind(null, null, !0, d))
                    }
                    t[h].unwatcher()
                }
                n.pruneCompletedTransactionsBelowNode_(n.transactionQueueTree_.subTree(e)), n.sendReadyTransactions_(), n.eventQueue_.raiseEventsForChangedPath(e, s);
                for (h = 0; h < u.length; h++) l.exceptionGuard(u[h])
            } else {
                if ("datastale" === i)
                    for (h = 0; h < t.length; h++) t[h].status === r.SENT_NEEDS_ABORT ? t[h].status = r.NEEDS_ABORT : t[h].status = r.RUN;
                else {
                    l.warn("transaction at " + g.toString() + " failed: " + i);
                    for (h = 0; h < t.length; h++) t[h].status = r.NEEDS_ABORT, t[h].abortReason = i
                }
                n.rerunTransactions_(e)
            }
        }, p)
    }, _.Repo.prototype.rerunTransactions_ = function(e) {
        var t = this.getAncestorTransactionNode_(e),
            n = t.path(),
            r = this.buildTransactionQueue_(t);
        return this.rerunTransactionQueue_(r, n), n
    }, _.Repo.prototype.rerunTransactionQueue_ = function(e, t) {
        if (0 !== e.length) {
            for (var n = [], u = [], v = e.filter(function(e) {
                    return e.status === r.RUN
                }).map(function(e) {
                    return e.currentWriteId
                }), y = 0; y < e.length; y++) {
                var g = e[y],
                    m = s.Path.relativePath(t, g.path),
                    b = !1,
                    E = void 0;
                if (i.assert(null !== m, "rerunTransactionsUnderNode_: relativePath should not be null."), g.status === r.NEEDS_ABORT) b = !0, E = g.abortReason, u = u.concat(this.serverSyncTree_.ackUserWrite(g.currentWriteId, !0));
                else if (g.status === r.RUN)
                    if (g.retryCount >= _.Repo.MAX_TRANSACTION_RETRIES_) b = !0, E = "maxretry", u = u.concat(this.serverSyncTree_.ackUserWrite(g.currentWriteId, !0));
                    else {
                        var w = this.getLatestState_(g.path, v);
                        g.currentInputSnapshot = w;
                        var T = e[y].update(w.val());
                        if (void 0 !== T) {
                            f.validateFirebaseData("transaction failed: Data returned ", T, g.path);
                            var S = d.nodeFromJSON(T);
                            "object" == typeof T && null != T && p.contains(T, ".priority") || (S = S.updatePriority(w.getPriority()));
                            var C = g.currentWriteId,
                                N = this.generateServerValues(),
                                P = h.resolveDeferredValueSnapshot(S, N);
                            g.currentOutputSnapshotRaw = S, g.currentOutputSnapshotResolved = P, g.currentWriteId = this.getNextWriteId_(), v.splice(v.indexOf(C), 1), u = (u = u.concat(this.serverSyncTree_.applyUserOverwrite(g.path, P, g.currentWriteId, g.applyLocally))).concat(this.serverSyncTree_.ackUserWrite(C, !0))
                        } else b = !0, E = "nodata", u = u.concat(this.serverSyncTree_.ackUserWrite(g.currentWriteId, !0))
                    } if (this.eventQueue_.raiseEventsForChangedPath(t, u), u = [], b && (e[y].status = r.COMPLETED, function(e) {
                        setTimeout(e, Math.floor(0))
                    }(e[y].unwatcher), e[y].onComplete))
                    if ("nodata" === E) {
                        var O = new o.Reference(this, e[y].path),
                            I = e[y].currentInputSnapshot,
                            A = new a.DataSnapshot(I, O, c.PRIORITY_INDEX);
                        n.push(e[y].onComplete.bind(null, null, !1, A))
                    } else n.push(e[y].onComplete.bind(null, new Error(E), !1, null))
            }
            this.pruneCompletedTransactionsBelowNode_(this.transactionQueueTree_);
            for (y = 0; y < n.length; y++) l.exceptionGuard(n[y]);
            this.sendReadyTransactions_()
        }
    }, _.Repo.prototype.getAncestorTransactionNode_ = function(e) {
        for (var t, n = this.transactionQueueTree_; null !== (t = e.getFront()) && null === n.getValue();) n = n.subTree(t), e = e.popFront();
        return n
    }, _.Repo.prototype.buildTransactionQueue_ = function(e) {
        var t = [];
        return this.aggregateTransactionQueuesForNode_(e, t), t.sort(function(e, t) {
            return e.order - t.order
        }), t
    }, _.Repo.prototype.aggregateTransactionQueuesForNode_ = function(e, t) {
        var n = this,
            r = e.getValue();
        if (null !== r)
            for (var i = 0; i < r.length; i++) t.push(r[i]);
        e.forEachChild(function(e) {
            n.aggregateTransactionQueuesForNode_(e, t)
        })
    }, _.Repo.prototype.pruneCompletedTransactionsBelowNode_ = function(e) {
        var t = this,
            n = e.getValue();
        if (n) {
            for (var i = 0, o = 0; o < n.length; o++) n[o].status !== r.COMPLETED && (n[i] = n[o], i++);
            n.length = i, e.setValue(n.length > 0 ? n : null)
        }
        e.forEachChild(function(e) {
            t.pruneCompletedTransactionsBelowNode_(e)
        })
    }, _.Repo.prototype.abortTransactions_ = function(e) {
        var t = this,
            n = this.getAncestorTransactionNode_(e).path(),
            r = this.transactionQueueTree_.subTree(e);
        return r.forEachAncestor(function(e) {
            t.abortTransactionsOnNode_(e)
        }), this.abortTransactionsOnNode_(r), r.forEachDescendant(function(e) {
            t.abortTransactionsOnNode_(e)
        }), n
    }, _.Repo.prototype.abortTransactionsOnNode_ = function(e) {
        var t = e.getValue();
        if (null !== t) {
            for (var n = [], o = [], a = -1, s = 0; s < t.length; s++)
                if (t[s].status === r.SENT_NEEDS_ABORT);
                else if (t[s].status === r.SENT) i.assert(a === s - 1, "All SENT items should be at beginning of queue."), a = s, t[s].status = r.SENT_NEEDS_ABORT, t[s].abortReason = "set";
            else if (i.assert(t[s].status === r.RUN, "Unexpected transaction status in abort"), t[s].unwatcher(), o = o.concat(this.serverSyncTree_.ackUserWrite(t[s].currentWriteId, !0)), t[s].onComplete) {
                n.push(t[s].onComplete.bind(null, new Error("set"), !1, null))
            } - 1 === a ? e.setValue(null) : t.length = a + 1, this.eventQueue_.raiseEventsForChangedPath(e.path(), o);
            for (s = 0; s < n.length; s++) l.exceptionGuard(n[s])
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(8),
        o = n(0),
        a = function() {
            return function() {
                this.children = {}, this.childCount = 0, this.value = null
            }
        }();
    t.TreeNode = a;
    var s = function() {
        function e(e, t, n) {
            void 0 === e && (e = ""), void 0 === t && (t = null), void 0 === n && (n = new a), this.name_ = e, this.parent_ = t, this.node_ = n
        }
        return e.prototype.subTree = function(t) {
            for (var n, r = t instanceof i.Path ? t : new i.Path(t), s = this; null !== (n = r.getFront());) {
                s = new e(n, s, o.safeGet(s.node_.children, n) || new a), r = r.popFront()
            }
            return s
        }, e.prototype.getValue = function() {
            return this.node_.value
        }, e.prototype.setValue = function(e) {
            r.assert(void 0 !== e, "Cannot set value to undefined"), this.node_.value = e, this.updateParents_()
        }, e.prototype.clear = function() {
            this.node_.value = null, this.node_.children = {}, this.node_.childCount = 0, this.updateParents_()
        }, e.prototype.hasChildren = function() {
            return this.node_.childCount > 0
        }, e.prototype.isEmpty = function() {
            return null === this.getValue() && !this.hasChildren()
        }, e.prototype.forEachChild = function(t) {
            var n = this;
            o.forEach(this.node_.children, function(r, i) {
                t(new e(r, n, i))
            })
        }, e.prototype.forEachDescendant = function(e, t, n) {
            t && !n && e(this), this.forEachChild(function(t) {
                t.forEachDescendant(e, !0, n)
            }), t && n && e(this)
        }, e.prototype.forEachAncestor = function(e, t) {
            for (var n = t ? this : this.parent(); null !== n;) {
                if (e(n)) return !0;
                n = n.parent()
            }
            return !1
        }, e.prototype.forEachImmediateDescendantWithValue = function(e) {
            this.forEachChild(function(t) {
                null !== t.getValue() ? e(t) : t.forEachImmediateDescendantWithValue(e)
            })
        }, e.prototype.path = function() {
            return new i.Path(null === this.parent_ ? this.name_ : this.parent_.path() + "/" + this.name_)
        }, e.prototype.name = function() {
            return this.name_
        }, e.prototype.parent = function() {
            return this.parent_
        }, e.prototype.updateParents_ = function() {
            null !== this.parent_ && this.parent_.updateChild_(this.name_, this)
        }, e.prototype.updateChild_ = function(e, t) {
            var n = t.isEmpty(),
                r = o.contains(this.node_.children, e);
            n && r ? (delete this.node_.children[e], this.node_.childCount--, this.updateParents_()) : n || r || (this.node_.children[e] = t.node_, this.node_.childCount++, this.updateParents_())
        }, e
    }();
    t.Tree = s
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(156),
        i = n(155);
    t.forceLongPolling = function() {
        r.WebSocketConnection.forceDisallow(), i.BrowserPollConnection.forceAllow()
    }, t.forceWebSockets = function() {
        i.BrowserPollConnection.forceDisallow()
    }, t.isWebSocketsAvailable = function() {
        return r.WebSocketConnection.isAvailable()
    }, t.setSecurityDebugCallback = function(e, t) {
        e.repo.persistentConnection_.securityDebugCallback_ = t
    }, t.stats = function(e, t) {
        e.repo.stats(t)
    }, t.statsIncrementCounter = function(e, t) {
        e.repo.statsIncrementCounter(t)
    }, t.dataUpdateCount = function(e) {
        return e.repo.dataUpdateCount
    }, t.interceptServerData = function(e, t) {
        return e.repo.interceptServerData_(t)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(136),
        i = n(152),
        o = n(118),
        a = n(154);
    t.DataConnection = i.PersistentConnection, i.PersistentConnection.prototype.simpleListen = function(e, t) {
        this.sendRequest("q", {
            p: e
        }, t)
    }, i.PersistentConnection.prototype.echo = function(e, t) {
        this.sendRequest("echo", {
            d: e
        }, t)
    }, t.RealTimeConnection = a.Connection, t.hijackHash = function(e) {
        var t = i.PersistentConnection.prototype.put;
        return i.PersistentConnection.prototype.put = function(n, r, i, o) {
                void 0 !== o && (o = e()), t.call(this, n, r, i, o)
            },
            function() {
                i.PersistentConnection.prototype.put = t
            }
    }, t.ConnectionTarget = r.RepoInfo, t.queryIdentifier = function(e) {
        return e.queryIdentifier()
    }, t.listens = function(e) {
        return e.repo.persistentConnection_.listens_
    }, t.forceRestClient = function(e) {
        o.RepoManager.getInstance().forceRestClient(e)
    }
}, function(e, t, n) {
    n(276)
}, function(e, t, n) {
    "use strict";

    function r(e) {
        var t = {
            Messaging: i.a
        };
        e.INTERNAL.registerService("messaging", function(e) {
            return self && "ServiceWorkerGlobalScope" in self ? new o.a(e) : new i.a(e)
        }, t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.registerMessaging = r;
    var i = n(277),
        o = n(283);
    r(n(44).firebase)
}, function(e, t, n) {
    "use strict";
    var r = n(159),
        i = n(54),
        o = n(162),
        a = n(281),
        s = n(161),
        u = n(120),
        c = n(282),
        l = n(0),
        h = (n.n(l), this && this.__extends || function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            };
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }()),
        f = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.messageObserver_ = null, n.onMessage_ = Object(l.createSubscribe)(function(e) {
                    n.messageObserver_ = e
                }), n.tokenRefreshObserver_ = null, n.onTokenRefresh_ = Object(l.createSubscribe)(function(e) {
                    n.tokenRefreshObserver_ = e
                }), n.registrationToUse_, n.manifestCheckPromise_, n.messageObserver_ = null, n.onMessage_ = Object(l.createSubscribe)(function(e) {
                    n.messageObserver_ = e
                }), n.tokenRefreshObserver_ = null, n.onTokenRefresh_ = Object(l.createSubscribe)(function(e) {
                    n.tokenRefreshObserver_ = e
                }), n.setupSWMessageListener_(), n
            }
            return h(t, e), t.prototype.getToken = function() {
                var t = this;
                return this.isSupported_() ? this.manifestCheck_().then(function() {
                    return e.prototype.getToken.call(t)
                }) : Promise.reject(this.errorFactory_.create(i.a.codes.UNSUPPORTED_BROWSER))
            }, t.prototype.manifestCheck_ = function() {
                var e = this;
                if (this.manifestCheckPromise_) return this.manifestCheckPromise_;
                var t = document.querySelector('link[rel="manifest"]');
                return this.manifestCheckPromise_ = t ? fetch(t.href).then(function(e) {
                    return e.json()
                }).catch(function() {
                    return Promise.resolve()
                }).then(function(t) {
                    if (t && t.gcm_sender_id && "103953800507" !== t.gcm_sender_id) throw e.errorFactory_.create(i.a.codes.INCORRECT_GCM_SENDER_ID)
                }) : Promise.resolve(), this.manifestCheckPromise_
            }, t.prototype.requestPermission = function() {
                var e = this;
                return Notification.permission === s.a.granted ? Promise.resolve() : new Promise(function(t, n) {
                    var r = function(r) {
                            return r === s.a.granted ? t() : n(r === s.a.denied ? e.errorFactory_.create(i.a.codes.PERMISSION_BLOCKED) : e.errorFactory_.create(i.a.codes.PERMISSION_DEFAULT))
                        },
                        o = Notification.requestPermission(r);
                    o && o.then(r)
                })
            }, t.prototype.useServiceWorker = function(e) {
                if (!(e instanceof ServiceWorkerRegistration)) throw this.errorFactory_.create(i.a.codes.SW_REGISTRATION_EXPECTED);
                if (void 0 !== this.registrationToUse_) throw this.errorFactory_.create(i.a.codes.USE_SW_BEFORE_GET_TOKEN);
                this.registrationToUse_ = e
            }, t.prototype.usePublicVapidKey = function(e) {
                if ("string" != typeof e) throw this.errorFactory_.create(i.a.codes.INVALID_PUBLIC_VAPID_KEY);
                if (void 0 !== this.publicVapidKeyToUse_) throw this.errorFactory_.create(i.a.codes.USE_PUBLIC_KEY_BEFORE_GET_TOKEN);
                var t = Object(c.a)(e);
                if (65 !== t.length) throw this.errorFactory_.create(i.a.codes.PUBLIC_KEY_DECRYPTION_FAILED);
                this.publicVapidKeyToUse_ = t
            }, t.prototype.onMessage = function(e, t, n) {
                return this.onMessage_(e, t, n)
            }, t.prototype.onTokenRefresh = function(e, t, n) {
                return this.onTokenRefresh_(e, t, n)
            }, t.prototype.waitForRegistrationToActivate_ = function(e) {
                var t = this,
                    n = e.installing || e.waiting || e.active;
                return new Promise(function(r, o) {
                    if (n)
                        if ("activated" !== n.state)
                            if ("redundant" !== n.state) {
                                var a = function() {
                                    if ("activated" === n.state) r(e);
                                    else {
                                        if ("redundant" !== n.state) return;
                                        o(t.errorFactory_.create(i.a.codes.SW_REG_REDUNDANT))
                                    }
                                    n.removeEventListener("statechange", a)
                                };
                                n.addEventListener("statechange", a)
                            } else o(t.errorFactory_.create(i.a.codes.SW_REG_REDUNDANT));
                    else r(e);
                    else o(t.errorFactory_.create(i.a.codes.NO_SW_IN_REG))
                })
            }, t.prototype.getSWRegistration_ = function() {
                var e = this;
                return this.registrationToUse_ ? this.waitForRegistrationToActivate_(this.registrationToUse_) : (this.registrationToUse_ = null, navigator.serviceWorker.register(a.a.path, {
                    scope: a.a.scope
                }).catch(function(t) {
                    throw e.errorFactory_.create(i.a.codes.FAILED_DEFAULT_REGISTRATION, {
                        browserErrorMessage: t.message
                    })
                }).then(function(t) {
                    return e.waitForRegistrationToActivate_(t).then(function() {
                        return e.registrationToUse_ = t, t.update(), t
                    })
                }))
            }, t.prototype.getPublicVapidKey_ = function() {
                return this.publicVapidKeyToUse_ ? Promise.resolve(this.publicVapidKeyToUse_) : Promise.resolve(u.a.DEFAULT_PUBLIC_VAPID_KEY)
            }, t.prototype.getPushSubscription_ = function(e, t) {
                return e.pushManager.getSubscription().then(function(n) {
                    return n || e.pushManager.subscribe({
                        userVisibleOnly: !0,
                        applicationServerKey: t
                    })
                })
            }, t.prototype.setupSWMessageListener_ = function() {
                var e = this;
                "serviceWorker" in navigator && navigator.serviceWorker.addEventListener("message", function(t) {
                    if (t.data && t.data[o.a.PARAMS.TYPE_OF_MSG]) {
                        var n = t.data;
                        switch (n[o.a.PARAMS.TYPE_OF_MSG]) {
                            case o.a.TYPES_OF_MSG.PUSH_MSG_RECEIVED:
                            case o.a.TYPES_OF_MSG.NOTIFICATION_CLICKED:
                                var r = n[o.a.PARAMS.DATA];
                                e.messageObserver_ && e.messageObserver_.next(r)
                        }
                    }
                }, !1)
            }, t.prototype.isSupported_ = function() {
                return "serviceWorker" in navigator && "PushManager" in window && "Notification" in window && "fetch" in window && ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification") && PushSubscription.prototype.hasOwnProperty("getKey")
            }, t
        }(r.a);
    t.a = f
}, function(e, t, n) {
    "use strict";

    function r() {}
    var i = n(160),
        o = n(54),
        a = n(119),
        s = this && this.__extends || function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            };
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }(),
        u = 1;
    r.prototype.fcmToken, r.prototype.swScope, r.prototype.vapidKey, r.prototype.subscription, r.prototype.fcmSenderId, r.prototype.fcmPushSet;
    var c = function(e) {
        function t() {
            return e.call(this, t.DB_NAME, u) || this
        }
        return s(t, e), Object.defineProperty(t, "DB_NAME", {
            get: function() {
                return "fcm_token_details_db"
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.onDBUpgrade = function(e) {
            var t = e.createObjectStore("fcm_token_object_Store", {
                keyPath: "swScope"
            });
            t.createIndex("fcmSenderId", "fcmSenderId", {
                unique: !1
            }), t.createIndex("fcmToken", "fcmToken", {
                unique: !0
            })
        }, t.prototype.validateInputs_ = function(e) {
            return !e.fcmToken || "string" == typeof e.fcmToken && 0 !== e.fcmToken.length ? !e.swScope || "string" == typeof e.swScope && 0 !== e.swScope.length ? !e.vapidKey || e.vapidKey instanceof Uint8Array && 65 === e.vapidKey.length ? !e.subscription || e.subscription instanceof PushSubscription ? !e.fcmSenderId || "string" == typeof e.fcmSenderId && 0 !== e.fcmSenderId.length ? !e.fcmPushSet || "string" == typeof e.fcmPushSet && 0 !== e.fcmPushSet.length ? Promise.resolve() : Promise.reject(this.errorFactory_.create(o.a.codes.BAD_PUSH_SET)) : Promise.reject(this.errorFactory_.create(o.a.codes.BAD_SENDER_ID)) : Promise.reject(this.errorFactory_.create(o.a.codes.BAD_SUBSCRIPTION)) : Promise.reject(this.errorFactory_.create(o.a.codes.BAD_VAPID_KEY)) : Promise.reject(this.errorFactory_.create(o.a.codes.BAD_SCOPE)) : Promise.reject(this.errorFactory_.create(o.a.codes.BAD_TOKEN))
        }, t.prototype.getTokenDetailsFromToken = function(e) {
            var t = this;
            return e ? this.validateInputs_({
                fcmToken: e
            }).then(function() {
                return t.openDatabase()
            }).then(function(t) {
                return new Promise(function(n, r) {
                    var i = t.transaction(["fcm_token_object_Store"]).objectStore("fcm_token_object_Store").index("fcmToken").get(e);
                    i.onerror = function(e) {
                        r(e.target.error)
                    }, i.onsuccess = function(e) {
                        var t = e.target.result ? e.target.result : null;
                        n(t)
                    }
                })
            }) : Promise.reject(this.errorFactory_.create(o.a.codes.BAD_TOKEN))
        }, t.prototype.getTokenDetailsFromSWScope = function(e) {
            var t = this;
            return e ? this.validateInputs_({
                swScope: e
            }).then(function() {
                return t.openDatabase()
            }).then(function(t) {
                return new Promise(function(n, r) {
                    var i = t.transaction(["fcm_token_object_Store"]).objectStore("fcm_token_object_Store").get(e);
                    i.onerror = function(e) {
                        r(e.target.error)
                    }, i.onsuccess = function(e) {
                        var t = e.target.result ? e.target.result : null;
                        n(t)
                    }
                })
            }) : Promise.reject(this.errorFactory_.create(o.a.codes.BAD_SCOPE))
        }, t.prototype.saveTokenDetails = function(e) {
            var t = this,
                n = e.swScope,
                r = e.vapidKey,
                i = e.subscription,
                s = e.fcmSenderId,
                u = e.fcmToken,
                c = e.fcmPushSet;
            return n ? r ? i ? s ? u ? c ? this.validateInputs_({
                swScope: n,
                vapidKey: r,
                subscription: i,
                fcmSenderId: s,
                fcmToken: u,
                fcmPushSet: c
            }).then(function() {
                return t.openDatabase()
            }).then(function(e) {
                var o = {
                    swScope: n,
                    vapidKey: Object(a.a)(r),
                    endpoint: i.endpoint,
                    auth: Object(a.a)(i.getKey("auth")),
                    p256dh: Object(a.a)(i.getKey("p256dh")),
                    fcmSenderId: s,
                    fcmToken: u,
                    fcmPushSet: c,
                    createTime: Date.now()
                };
                return new Promise(function(n, r) {
                    var i = e.transaction(["fcm_token_object_Store"], t.TRANSACTION_READ_WRITE).objectStore("fcm_token_object_Store").put(o);
                    i.onerror = function(e) {
                        r(e.target.error)
                    }, i.onsuccess = function(e) {
                        n()
                    }
                })
            }) : Promise.reject(this.errorFactory_.create(o.a.codes.BAD_PUSH_SET)) : Promise.reject(this.errorFactory_.create(o.a.codes.BAD_TOKEN)) : Promise.reject(this.errorFactory_.create(o.a.codes.BAD_SENDER_ID)) : Promise.reject(this.errorFactory_.create(o.a.codes.BAD_SUBSCRIPTION)) : Promise.reject(this.errorFactory_.create(o.a.codes.BAD_VAPID_KEY)) : Promise.reject(this.errorFactory_.create(o.a.codes.BAD_SCOPE))
        }, t.prototype.deleteToken = function(e) {
            var t = this;
            return "string" != typeof e || 0 === e.length ? Promise.reject(this.errorFactory_.create(o.a.codes.INVALID_DELETE_TOKEN)) : this.getTokenDetailsFromToken(e).then(function(e) {
                if (!e) throw t.errorFactory_.create(o.a.codes.DELETE_TOKEN_NOT_FOUND);
                return t.openDatabase().then(function(n) {
                    return new Promise(function(r, i) {
                        var a = n.transaction(["fcm_token_object_Store"], t.TRANSACTION_READ_WRITE).objectStore("fcm_token_object_Store").delete(e.swScope);
                        a.onerror = function(e) {
                            i(e.target.error)
                        }, a.onsuccess = function(n) {
                            0 !== n.target.result ? r(e) : i(t.errorFactory_.create(o.a.codes.FAILED_TO_DELETE_TOKEN))
                        }
                    })
                })
            })
        }, t
    }(i.a);
    t.a = c
}, function(e, t, n) {
    "use strict";
    var r = n(160),
        i = n(54),
        o = this && this.__extends || function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            };
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }(),
        a = 1,
        s = function(e) {
            function t() {
                return e.call(this, t.DB_NAME, a) || this
            }
            return o(t, e), Object.defineProperty(t, "DB_NAME", {
                get: function() {
                    return "fcm_vapid_details_db"
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.onDBUpgrade = function(e) {
                e.createObjectStore("fcm_vapid_object_Store", {
                    keyPath: "swScope"
                })
            }, t.prototype.getVapidFromSWScope = function(e) {
                return "string" != typeof e || 0 === e.length ? Promise.reject(this.errorFactory_.create(i.a.codes.BAD_SCOPE)) : this.openDatabase().then(function(t) {
                    return new Promise(function(n, r) {
                        var i = t.transaction(["fcm_vapid_object_Store"]).objectStore("fcm_vapid_object_Store").get(e);
                        i.onerror = function() {
                            r(i.error)
                        }, i.onsuccess = function() {
                            var e = i.result,
                                t = null;
                            e && (t = e.vapidKey), n(t)
                        }
                    })
                })
            }, t.prototype.saveVapidDetails = function(e, t) {
                var n = this;
                if ("string" != typeof e || 0 === e.length) return Promise.reject(this.errorFactory_.create(i.a.codes.BAD_SCOPE));
                if (null === t || 65 !== t.length) return Promise.reject(this.errorFactory_.create(i.a.codes.BAD_VAPID_KEY));
                var r = {
                    swScope: e,
                    vapidKey: t
                };
                return this.openDatabase().then(function(e) {
                    return new Promise(function(t, i) {
                        var o = e.transaction(["fcm_vapid_object_Store"], n.TRANSACTION_READ_WRITE).objectStore("fcm_vapid_object_Store").put(r);
                        o.onerror = function() {
                            i(o.error)
                        }, o.onsuccess = function() {
                            t()
                        }
                    })
                })
            }, t.prototype.deleteVapidDetails = function(e) {
                var t = this;
                return this.getVapidFromSWScope(e).then(function(n) {
                    if (!n) throw t.errorFactory_.create(i.a.codes.DELETE_SCOPE_NOT_FOUND);
                    return t.openDatabase().then(function(r) {
                        return new Promise(function(o, a) {
                            var s = r.transaction(["fcm_vapid_object_Store"], t.TRANSACTION_READ_WRITE).objectStore("fcm_vapid_object_Store").delete(e);
                            s.onerror = function() {
                                a(s.error)
                            }, s.onsuccess = function() {
                                0 !== s.result ? o(n) : a(t.errorFactory_.create(i.a.codes.FAILED_DELETE_VAPID_KEY))
                            }
                        })
                    })
                })
            }, t
        }(r.a);
    t.a = s
}, function(e, t, n) {
    "use strict";
    var r = n(0),
        i = (n.n(r), n(54)),
        o = n(119),
        a = n(120),
        s = function() {
            function e() {
                this.errorFactory_ = new r.ErrorFactory("messaging", "Messaging", i.a.map)
            }
            return e.prototype.getToken = function(e, t, n) {
                var r = this,
                    s = Object(o.a)(t.getKey("p256dh")),
                    u = Object(o.a)(t.getKey("auth")),
                    c = "authorized_entity=" + e + "&endpoint=" + t.endpoint + "&encryption_key=" + s + "&encryption_auth=" + u;
                if (n !== a.a.DEFAULT_PUBLIC_VAPID_KEY) {
                    c += "&application_pub_key=" + Object(o.a)(n)
                }
                var l = new Headers;
                l.append("Content-Type", "application/x-www-form-urlencoded");
                var h = {
                    method: "POST",
                    headers: l,
                    body: c
                };
                return fetch(a.a.ENDPOINT + "/fcm/connect/subscribe", h).then(function(e) {
                    return e.json()
                }).catch(function() {
                    throw r.errorFactory_.create(i.a.codes.TOKEN_SUBSCRIBE_FAILED)
                }).then(function(e) {
                    var t = e;
                    if (t.error) {
                        var n = t.error.message;
                        throw r.errorFactory_.create(i.a.codes.TOKEN_SUBSCRIBE_FAILED, {
                            message: n
                        })
                    }
                    if (!t.token) throw r.errorFactory_.create(i.a.codes.TOKEN_SUBSCRIBE_NO_TOKEN);
                    if (!t.pushSet) throw r.errorFactory_.create(i.a.codes.TOKEN_SUBSCRIBE_NO_PUSH_SET);
                    return {
                        token: t.token,
                        pushSet: t.pushSet
                    }
                })
            }, e.prototype.updateToken = function(e, t, n, r, s) {
                var u = this,
                    c = Object(o.a)(r.getKey("p256dh")),
                    l = Object(o.a)(r.getKey("auth")),
                    h = "push_set=" + n + "&token=" + t + "&authorized_entity=" + e + "&endpoint=" + r.endpoint + "&encryption_key=" + c + "&encryption_auth=" + l;
                if (s !== a.a.DEFAULT_PUBLIC_VAPID_KEY) {
                    h += "&application_pub_key=" + Object(o.a)(s)
                }
                var f = new Headers;
                f.append("Content-Type", "application/x-www-form-urlencoded");
                var p, d = {
                    method: "POST",
                    headers: f,
                    body: h
                };
                return fetch(a.a.ENDPOINT + "/fcm/connect/subscribe", d).then(function(e) {
                    return p = e, e.json()
                }).catch(function() {
                    throw u.errorFactory_.create(i.a.codes.TOKEN_UPDATE_FAILED)
                }).then(function(e) {
                    if (!p.ok) {
                        var t = e.error.message;
                        throw u.errorFactory_.create(i.a.codes.TOKEN_UPDATE_FAILED, {
                            message: t
                        })
                    }
                    if (!e.token) throw u.errorFactory_.create(i.a.codes.TOKEN_UPDATE_NO_TOKEN);
                    return e.token
                })
            }, e.prototype.deleteToken = function(e, t, n) {
                var r = this,
                    o = "authorized_entity=" + e + "&token=" + t + "&pushSet=" + n,
                    s = new Headers;
                s.append("Content-Type", "application/x-www-form-urlencoded");
                var u = {
                    method: "POST",
                    headers: s,
                    body: o
                };
                return fetch(a.a.ENDPOINT + "/fcm/connect/unsubscribe", u).then(function(e) {
                    if (!e.ok) return e.json().then(function(e) {
                        if (e.error) {
                            var t = e.error.message;
                            throw r.errorFactory_.create(i.a.codes.TOKEN_UNSUBSCRIBE_FAILED, {
                                message: t
                            })
                        }
                    }, function(e) {
                        throw r.errorFactory_.create(i.a.codes.TOKEN_UNSUBSCRIBE_FAILED)
                    })
                })
            }, e
        }();
    t.a = s
}, function(e, t, n) {
    "use strict";
    t.a = {
        path: "/firebase-messaging-sw.js",
        scope: "/firebase-cloud-messaging-push-scope"
    }
}, function(e, t, n) {
    "use strict";
    t.a = function(e) {
        for (var t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"), n = window.atob(t), r = new Uint8Array(n.length), i = 0; i < n.length; ++i) r[i] = n.charCodeAt(i);
        return r
    }
}, function(e, t, n) {
    "use strict";
    var r = n(159),
        i = n(54),
        o = n(120),
        a = n(162),
        s = this && this.__extends || function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            };
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }(),
        u = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return self.addEventListener("push", function(e) {
                    return n.onPush_(e)
                }, !1), self.addEventListener("pushsubscriptionchange", function(e) {
                    return n.onSubChange_(e)
                }, !1), self.addEventListener("notificationclick", function(e) {
                    return n.onNotificationClick_(e)
                }, !1), n.bgMessageHandler_ = null, n
            }
            return s(t, e), t.prototype.onPush_ = function(e) {
                var t, n = this;
                try {
                    t = e.data.json()
                } catch (e) {
                    return
                }
                var r = this.hasVisibleClients_().then(function(e) {
                    if (e) {
                        if (t.notification || n.bgMessageHandler_) return n.sendMessageToWindowClients_(t)
                    } else {
                        var r = n.getNotificationData_(t);
                        if (r) {
                            var i = r.title || "";
                            return n.getSWRegistration_().then(function(e) {
                                return e.showNotification(i, r)
                            })
                        }
                        if (n.bgMessageHandler_) return n.bgMessageHandler_(t)
                    }
                });
                e.waitUntil(r)
            }, t.prototype.onSubChange_ = function(e) {
                var t = this,
                    n = this.getSWRegistration_().then(function(e) {
                        return e.pushManager.getSubscription().then(function(e) {}).catch(function(n) {
                            return t.getTokenDetailsModel().getTokenDetailsFromSWScope(e.scope).then(function(e) {
                                if (!e) throw n;
                                return t.deleteToken(e.fcmToken).then(function() {
                                    throw n
                                })
                            })
                        })
                    }).catch(function(e) {
                        throw t.errorFactory_.create(i.a.codes.UNABLE_TO_RESUBSCRIBE, {
                            message: e
                        })
                    });
                e.waitUntil(n)
            }, t.prototype.onNotificationClick_ = function(e) {
                var t = this;
                if (e.notification && e.notification.data && e.notification.data.FCM_MSG) {
                    e.stopImmediatePropagation(), e.notification.close();
                    var n = e.notification.data.FCM_MSG;
                    if (n.notification) {
                        var r = n.notification.click_action;
                        if (r) {
                            var i = this.getWindowClient_(r).then(function(e) {
                                return e ? e.focus() : self.clients.openWindow(r)
                            }).then(function(e) {
                                if (e) {
                                    n.notification;
                                    delete n.notification;
                                    var r = a.a.createNewMsg(a.a.TYPES_OF_MSG.NOTIFICATION_CLICKED, n);
                                    return t.attemptToMessageClient_(e, r)
                                }
                            });
                            e.waitUntil(i)
                        }
                    }
                }
            }, t.prototype.getNotificationData_ = function(e) {
                if (e && "object" == typeof e.notification) {
                    var t = Object.assign({}, e.notification);
                    return t.data = (n = {}, n.FCM_MSG = e, n), t;
                    var n
                }
            }, t.prototype.setBackgroundMessageHandler = function(e) {
                if (!e || "function" != typeof e) throw this.errorFactory_.create(i.a.codes.BG_HANDLER_FUNCTION_EXPECTED);
                this.bgMessageHandler_ = e
            }, t.prototype.getWindowClient_ = function(e) {
                var t = new URL(e, self.location).href;
                return self.clients.matchAll({
                    type: "window",
                    includeUncontrolled: !0
                }).then(function(e) {
                    for (var n = null, r = 0; r < e.length; r++) {
                        if (new URL(e[r].url, self.location).href === t) {
                            n = e[r];
                            break
                        }
                    }
                    return n || null
                })
            }, t.prototype.attemptToMessageClient_ = function(e, t) {
                return e ? (e.postMessage(t), Promise.resolve()) : Promise.reject(this.errorFactory_.create(i.a.codes.NO_WINDOW_CLIENT_TO_MSG))
            }, t.prototype.hasVisibleClients_ = function() {
                return self.clients.matchAll({
                    type: "window",
                    includeUncontrolled: !0
                }).then(function(e) {
                    return e.some(function(e) {
                        return "visible" === e.visibilityState
                    })
                })
            }, t.prototype.sendMessageToWindowClients_ = function(e) {
                var t = this;
                return self.clients.matchAll({
                    type: "window",
                    includeUncontrolled: !0
                }).then(function(n) {
                    var r = a.a.createNewMsg(a.a.TYPES_OF_MSG.PUSH_MSG_RECEIVED, e);
                    return Promise.all(n.map(function(e) {
                        return t.attemptToMessageClient_(e, r)
                    }))
                })
            }, t.prototype.getSWRegistration_ = function() {
                return Promise.resolve(self.registration)
            }, t.prototype.getPublicVapidKey_ = function() {
                var e = this;
                return this.getSWRegistration_().then(function(t) {
                    return e.getVapidDetailsModel().getVapidFromSWScope(t.scope)
                }).then(function(e) {
                    return null === e ? o.a.DEFAULT_PUBLIC_VAPID_KEY : e
                })
            }, t
        }(r.a);
    t.a = u
}, function(e, t, n) {
    n(285)
}, function(e, t, n) {
    "use strict";

    function r(e, t, n) {
        return new l.a(e, new u.a, n)
    }

    function i(e) {
        var t = {
            TaskState: s.c,
            TaskEvent: s.b,
            StringFormat: a.a,
            Storage: l.a,
            Reference: c.a
        };
        e.INTERNAL.registerService(h, r, t, void 0, !0)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.registerStorage = i;
    var o = n(44),
        a = n(81),
        s = n(82),
        u = n(286),
        c = n(164),
        l = n(295),
        h = "storage";
    i(o.default)
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return i
    });
    var r = n(287),
        i = function() {
            function e() {}
            return e.prototype.createXhrIo = function() {
                return new r.a
            }, e
        }()
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return u
    });
    var r = n(37),
        i = n(61),
        o = n(55),
        a = n(23),
        s = n(163),
        u = function() {
            function e() {
                var e = this;
                this.sent_ = !1, this.xhr_ = new XMLHttpRequest, this.errorCode_ = s.a.NO_ERROR, this.sendPromise_ = o.a(function(t, n) {
                    e.xhr_.addEventListener("abort", function(n) {
                        e.errorCode_ = s.a.ABORT, t(e)
                    }), e.xhr_.addEventListener("error", function(n) {
                        e.errorCode_ = s.a.NETWORK_ERROR, t(e)
                    }), e.xhr_.addEventListener("load", function(n) {
                        t(e)
                    })
                })
            }
            return e.prototype.send = function(e, t, n, o) {
                var s = this;
                if (this.sent_) throw r.e("cannot .send() more than once");
                if (this.sent_ = !0, this.xhr_.open(t, e, !0), a.a(o)) {
                    var u = o;
                    i.b(u, function(e, t) {
                        s.xhr_.setRequestHeader(e, t.toString())
                    })
                }
                return a.a(n) ? this.xhr_.send(n) : this.xhr_.send(), this.sendPromise_
            }, e.prototype.getErrorCode = function() {
                if (!this.sent_) throw r.e("cannot .getErrorCode() before sending");
                return this.errorCode_
            }, e.prototype.getStatus = function() {
                if (!this.sent_) throw r.e("cannot .getStatus() before sending");
                try {
                    return this.xhr_.status
                } catch (e) {
                    return -1
                }
            }, e.prototype.getResponseText = function() {
                if (!this.sent_) throw r.e("cannot .getResponseText() before sending");
                return this.xhr_.responseText
            }, e.prototype.abort = function() {
                this.xhr_.abort()
            }, e.prototype.getResponseHeader = function(e) {
                return this.xhr_.getResponseHeader(e)
            }, e.prototype.addUploadProgressListener = function(e) {
                a.a(this.xhr_.upload) && this.xhr_.upload.addEventListener("progress", e)
            }, e.prototype.removeUploadProgressListener = function(e) {
                a.a(this.xhr_.upload) && this.xhr_.upload.removeEventListener("progress", e)
            }, e
        }()
}, function(e, t, n) {
    "use strict";
    t.a = function(e) {
        var t;
        try {
            t = JSON.parse(e)
        } catch (e) {
            return null
        }
        return r.f(t) ? t : null
    };
    var r = n(23)
}, function(e, t, n) {
    "use strict";

    function r() {
        return "undefined" != typeof BlobBuilder ? BlobBuilder : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : void 0
    }
    t.a = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var n = r();
        if (void 0 !== n) {
            for (var o = new n, a = 0; a < e.length; a++) o.append(e[a]);
            return o.getBlob()
        }
        if (i.e()) return new Blob(e);
        throw Error("This browser doesn't seem to support creating Blobs")
    }, t.b = function(e, t, n) {
        return e.webkitSlice ? e.webkitSlice(t, n) : e.mozSlice ? e.mozSlice(t, n) : e.slice ? e.slice(t, n) : null
    };
    var i = n(23)
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return r
    });
    var r = function() {
        return function(e, t, n, r) {
            this.url = e, this.method = t, this.handler = n, this.timeout = r, this.urlParams = {}, this.headers = {}, this.body = null, this.errorHandler = null, this.progressCallback = null, this.successCodes = [200], this.additionalRetryCodes = []
        }
    }()
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return p
    });
    var r = n(82),
        i = n(292),
        o = n(293),
        a = n(121),
        s = n(124),
        u = n(294),
        c = n(37),
        l = n(55),
        h = n(167),
        f = n(23),
        p = function() {
            function e(e, t, n, i, o, a) {
                void 0 === a && (a = null);
                var s = this;
                this.transferred_ = 0, this.needToFetchStatus_ = !1, this.needToFetchMetadata_ = !1, this.observers_ = [], this.error_ = null, this.uploadUrl_ = null, this.request_ = null, this.chunkMultiplier_ = 1, this.resolve_ = null, this.reject_ = null, this.ref_ = e, this.authWrapper_ = t, this.location_ = n, this.blob_ = o, this.metadata_ = a, this.mappings_ = i, this.resumable_ = this.shouldDoResumable_(this.blob_), this.state_ = r.a.RUNNING, this.errorHandler_ = function(e) {
                    s.request_ = null, s.chunkMultiplier_ = 1, e.codeEquals(c.a.CANCELED) ? (s.needToFetchStatus_ = !0, s.completeTransitions_()) : (s.error_ = e, s.transition_(r.a.ERROR))
                }, this.metadataErrorHandler_ = function(e) {
                    s.request_ = null, e.codeEquals(c.a.CANCELED) ? s.completeTransitions_() : (s.error_ = e, s.transition_(r.a.ERROR))
                }, this.promise_ = l.a(function(e, t) {
                    s.resolve_ = e, s.reject_ = t, s.start_()
                }), this.promise_.then(null, function() {})
            }
            return e.prototype.makeProgressCallback_ = function() {
                var e = this,
                    t = this.transferred_;
                return function(n, r) {
                    e.updateProgress_(t + n)
                }
            }, e.prototype.shouldDoResumable_ = function(e) {
                return e.size() > 262144
            }, e.prototype.start_ = function() {
                this.state_ === r.a.RUNNING && null === this.request_ && (this.resumable_ ? null === this.uploadUrl_ ? this.createResumable_() : this.needToFetchStatus_ ? this.fetchStatus_() : this.needToFetchMetadata_ ? this.fetchMetadata_() : this.continueUpload_() : this.oneShotUpload_())
            }, e.prototype.resolveToken_ = function(e) {
                var t = this;
                this.authWrapper_.getAuthToken().then(function(n) {
                    switch (t.state_) {
                        case r.a.RUNNING:
                            e(n);
                            break;
                        case r.a.CANCELING:
                            t.transition_(r.a.CANCELED);
                            break;
                        case r.a.PAUSING:
                            t.transition_(r.a.PAUSED)
                    }
                })
            }, e.prototype.createResumable_ = function() {
                var e = this;
                this.resolveToken_(function(t) {
                    var n = h.c(e.authWrapper_, e.location_, e.mappings_, e.blob_, e.metadata_),
                        r = e.authWrapper_.makeRequest(n, t);
                    e.request_ = r, r.getPromise().then(function(t) {
                        e.request_ = null, e.uploadUrl_ = t, e.needToFetchStatus_ = !1, e.completeTransitions_()
                    }, e.errorHandler_)
                })
            }, e.prototype.fetchStatus_ = function() {
                var e = this,
                    t = this.uploadUrl_;
                this.resolveToken_(function(n) {
                    var r = h.f(e.authWrapper_, e.location_, t, e.blob_),
                        i = e.authWrapper_.makeRequest(r, n);
                    e.request_ = i, i.getPromise().then(function(t) {
                        t = t, e.request_ = null, e.updateProgress_(t.current), e.needToFetchStatus_ = !1, t.finalized && (e.needToFetchMetadata_ = !0), e.completeTransitions_()
                    }, e.errorHandler_)
                })
            }, e.prototype.continueUpload_ = function() {
                var e = this,
                    t = h.h * this.chunkMultiplier_,
                    n = new h.a(this.transferred_, this.blob_.size()),
                    i = this.uploadUrl_;
                this.resolveToken_(function(o) {
                    var a;
                    try {
                        a = h.b(e.location_, e.authWrapper_, i, e.blob_, t, e.mappings_, n, e.makeProgressCallback_())
                    } catch (t) {
                        return e.error_ = t, void e.transition_(r.a.ERROR)
                    }
                    var s = e.authWrapper_.makeRequest(a, o);
                    e.request_ = s, s.getPromise().then(function(t) {
                        e.increaseMultiplier_(), e.request_ = null, e.updateProgress_(t.current), t.finalized ? (e.metadata_ = t.metadata, e.transition_(r.a.SUCCESS)) : e.completeTransitions_()
                    }, e.errorHandler_)
                })
            }, e.prototype.increaseMultiplier_ = function() {
                h.h * this.chunkMultiplier_ < 33554432 && (this.chunkMultiplier_ *= 2)
            }, e.prototype.fetchMetadata_ = function() {
                var e = this;
                this.resolveToken_(function(t) {
                    var n = h.e(e.authWrapper_, e.location_, e.mappings_),
                        i = e.authWrapper_.makeRequest(n, t);
                    e.request_ = i, i.getPromise().then(function(t) {
                        e.request_ = null, e.metadata_ = t, e.transition_(r.a.SUCCESS)
                    }, e.metadataErrorHandler_)
                })
            }, e.prototype.oneShotUpload_ = function() {
                var e = this;
                this.resolveToken_(function(t) {
                    var n = h.g(e.authWrapper_, e.location_, e.mappings_, e.blob_, e.metadata_),
                        i = e.authWrapper_.makeRequest(n, t);
                    e.request_ = i, i.getPromise().then(function(t) {
                        e.request_ = null, e.metadata_ = t, e.updateProgress_(e.blob_.size()), e.transition_(r.a.SUCCESS)
                    }, e.errorHandler_)
                })
            }, e.prototype.updateProgress_ = function(e) {
                var t = this.transferred_;
                this.transferred_ = e, this.transferred_ !== t && this.notifyObservers_()
            }, e.prototype.transition_ = function(e) {
                if (this.state_ !== e) switch (e) {
                    case r.a.CANCELING:
                    case r.a.PAUSING:
                        this.state_ = e, null !== this.request_ && this.request_.cancel();
                        break;
                    case r.a.RUNNING:
                        var t = this.state_ === r.a.PAUSED;
                        this.state_ = e, t && (this.notifyObservers_(), this.start_());
                        break;
                    case r.a.PAUSED:
                        this.state_ = e, this.notifyObservers_();
                        break;
                    case r.a.CANCELED:
                        this.error_ = c.c(), this.state_ = e, this.notifyObservers_();
                        break;
                    case r.a.ERROR:
                    case r.a.SUCCESS:
                        this.state_ = e, this.notifyObservers_()
                }
            }, e.prototype.completeTransitions_ = function() {
                switch (this.state_) {
                    case r.a.PAUSING:
                        this.transition_(r.a.PAUSED);
                        break;
                    case r.a.CANCELING:
                        this.transition_(r.a.CANCELED);
                        break;
                    case r.a.RUNNING:
                        this.start_()
                }
            }, Object.defineProperty(e.prototype, "snapshot", {
                get: function() {
                    var e = r.d(this.state_);
                    return new o.a(this.transferred_, this.blob_.size(), e, this.metadata_, this, this.ref_)
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.on = function(e, t, n, o) {
                function s(e) {
                    try {
                        return void l(e)
                    } catch (e) {}
                    try {
                        h(e);
                        if (!(f.c(e.next) || f.c(e.error) || f.c(e.complete))) throw "";
                        return
                    } catch (e) {
                        throw c
                    }
                }

                function u(e) {
                    return function(t, n, r) {
                        null !== e && a.g("on", e, arguments);
                        var s = new i.a(t, n, o);
                        return d.addObserver_(s),
                            function() {
                                d.removeObserver_(s)
                            }
                    }
                }
                void 0 === t && (t = void 0), void 0 === n && (n = void 0), void 0 === o && (o = void 0);
                var c = "Expected a function or an Object with one of `next`, `error`, `complete` properties.",
                    l = a.d(!0).validator,
                    h = a.a(null, !0).validator,
                    p = [a.e(function(t) {
                        if (e !== r.b.STATE_CHANGED) throw "Expected one of the event types: [" + r.b.STATE_CHANGED + "]."
                    }), a.a(s, !0), a.d(!0), a.d(!0)];
                a.g("on", p, arguments);
                var d = this,
                    v = [a.a(function(e) {
                        if (null === e) throw c;
                        s(e)
                    }), a.d(!0), a.d(!0)];
                return !(f.c(t) || f.c(n) || f.c(o)) ? u(v) : u(null)(t, n, o)
            }, e.prototype.then = function(e, t) {
                return this.promise_.then(e, t)
            }, e.prototype.catch = function(e) {
                return this.then(null, e)
            }, e.prototype.addObserver_ = function(e) {
                this.observers_.push(e), this.notifyObserver_(e)
            }, e.prototype.removeObserver_ = function(e) {
                s.c(this.observers_, e)
            }, e.prototype.notifyObservers_ = function() {
                var e = this;
                this.finishPromise_();
                s.a(this.observers_).forEach(function(t) {
                    e.notifyObserver_(t)
                })
            }, e.prototype.finishPromise_ = function() {
                if (null !== this.resolve_) {
                    var e = !0;
                    switch (r.d(this.state_)) {
                        case r.c.SUCCESS:
                            Object(u.a)(this.resolve_.bind(null, this.snapshot))();
                            break;
                        case r.c.CANCELED:
                        case r.c.ERROR:
                            var t = this.reject_;
                            Object(u.a)(t.bind(null, this.error_))();
                            break;
                        default:
                            e = !1
                    }
                    e && (this.resolve_ = null, this.reject_ = null)
                }
            }, e.prototype.notifyObserver_ = function(e) {
                switch (r.d(this.state_)) {
                    case r.c.RUNNING:
                    case r.c.PAUSED:
                        null !== e.next && Object(u.a)(e.next.bind(e, this.snapshot))();
                        break;
                    case r.c.SUCCESS:
                        null !== e.complete && Object(u.a)(e.complete.bind(e))();
                        break;
                    case r.c.CANCELED:
                    case r.c.ERROR:
                        null !== e.error && Object(u.a)(e.error.bind(e, this.error_))();
                        break;
                    default:
                        null !== e.error && Object(u.a)(e.error.bind(e, this.error_))()
                }
            }, e.prototype.resume = function() {
                a.g("resume", [], arguments);
                var e = this.state_ === r.a.PAUSED || this.state_ === r.a.PAUSING;
                return e && this.transition_(r.a.RUNNING), e
            }, e.prototype.pause = function() {
                a.g("pause", [], arguments);
                var e = this.state_ === r.a.RUNNING;
                return e && this.transition_(r.a.PAUSING), e
            }, e.prototype.cancel = function() {
                a.g("cancel", [], arguments);
                var e = this.state_ === r.a.RUNNING || this.state_ === r.a.PAUSING;
                return e && this.transition_(r.a.CANCELING), e
            }, e
        }()
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return i
    });
    var r = n(23),
        i = function() {
            return function(e, t, n) {
                if (r.b(e) || r.a(t) || r.a(n)) this.next = e, this.error = t || null, this.complete = n || null;
                else {
                    var i = e;
                    this.next = i.next || null, this.error = i.error || null, this.complete = i.complete || null
                }
            }
        }()
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return r
    });
    var r = function() {
        function e(e, t, n, r, i, o) {
            this.bytesTransferred = e, this.totalBytes = t, this.state = n, this.metadata = r, this.task = i, this.ref = o
        }
        return Object.defineProperty(e.prototype, "downloadURL", {
            get: function() {
                if (null !== this.metadata) {
                    var e = this.metadata.downloadURLs;
                    return null != e && null != e[0] ? e[0] : null
                }
                return null
            },
            enumerable: !0,
            configurable: !0
        }), e
    }()
}, function(e, t, n) {
    "use strict";
    t.a = function(e) {
        return function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            r.c(!0).then(function() {
                e.apply(null, t)
            })
        }
    };
    var r = n(55)
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return c
    });
    var r = n(121),
        i = n(296),
        o = n(94),
        a = n(55),
        s = n(299),
        u = n(164),
        c = function() {
            function e(e, t, n) {
                if (this.bucket_ = null, this.authWrapper_ = new i.a(e, function(e, t) {
                        return new u.a(e, t)
                    }, s.a, this, t), this.app_ = e, null != n) this.bucket_ = o.a.makeFromBucketSpec(n);
                else {
                    var r = this.authWrapper_.bucket();
                    null != r && (this.bucket_ = new o.a(r, ""))
                }
                this.internals_ = new l(this)
            }
            return e.prototype.ref = function(e) {
                if (r.g("ref", [r.e(function(e) {
                        if (/^[A-Za-z]+:\/\//.test(e)) throw "Expected child path but got a URL, use refFromURL instead."
                    }, !0)], arguments), null == this.bucket_) throw new Error("No Storage Bucket defined in Firebase Options.");
                var t = new u.a(this.authWrapper_, this.bucket_);
                return null != e ? t.child(e) : t
            }, e.prototype.refFromURL = function(e) {
                return r.g("refFromURL", [r.e(function(e) {
                    if (!/^[A-Za-z]+:\/\//.test(e)) throw "Expected full URL but got a child path, use ref instead.";
                    try {
                        o.a.makeFromUrl(e)
                    } catch (e) {
                        throw "Expected valid full URL but got an invalid one."
                    }
                }, !1)], arguments), new u.a(this.authWrapper_, e)
            }, Object.defineProperty(e.prototype, "maxUploadRetryTime", {
                get: function() {
                    return this.authWrapper_.maxUploadRetryTime()
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.setMaxUploadRetryTime = function(e) {
                r.g("setMaxUploadRetryTime", [r.c()], arguments), this.authWrapper_.setMaxUploadRetryTime(e)
            }, Object.defineProperty(e.prototype, "maxOperationRetryTime", {
                get: function() {
                    return this.authWrapper_.maxOperationRetryTime()
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.setMaxOperationRetryTime = function(e) {
                r.g("setMaxOperationRetryTime", [r.c()], arguments), this.authWrapper_.setMaxOperationRetryTime(e)
            }, Object.defineProperty(e.prototype, "app", {
                get: function() {
                    return this.app_
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "INTERNAL", {
                get: function() {
                    return this.internals_
                },
                enumerable: !0,
                configurable: !0
            }), e
        }(),
        l = function() {
            function e(e) {
                this.service_ = e
            }
            return e.prototype.delete = function() {
                return this.service_.authWrapper_.deleteApp(), a.c(void 0)
            }, e
        }()
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return l
    });
    var r = n(93),
        i = n(37),
        o = n(297),
        a = n(94),
        s = n(55),
        u = n(298),
        c = n(23),
        l = function() {
            function e(t, n, i, o, a) {
                if (this.bucket_ = null, this.deleted_ = !1, this.app_ = t, null !== this.app_) {
                    var s = this.app_.options;
                    c.a(s) && (this.bucket_ = e.extractBucket_(s))
                }
                this.storageRefMaker_ = n, this.requestMaker_ = i, this.pool_ = a, this.service_ = o, this.maxOperationRetryTime_ = r.d, this.maxUploadRetryTime_ = r.e, this.requestMap_ = new u.a
            }
            return e.extractBucket_ = function(e) {
                var t = e[r.c] || null;
                if (null == t) return null;
                return a.a.makeFromBucketSpec(t).bucket
            }, e.prototype.getAuthToken = function() {
                return null !== this.app_ && c.a(this.app_.INTERNAL) && c.a(this.app_.INTERNAL.getToken) ? this.app_.INTERNAL.getToken().then(function(e) {
                    return null !== e ? e.accessToken : null
                }, function(e) {
                    return null
                }) : s.c(null)
            }, e.prototype.bucket = function() {
                if (this.deleted_) throw i.b();
                return this.bucket_
            }, e.prototype.service = function() {
                return this.service_
            }, e.prototype.makeStorageReference = function(e) {
                return this.storageRefMaker_(this, e)
            }, e.prototype.makeRequest = function(e, t) {
                if (this.deleted_) return new o.a(i.b());
                var n = this.requestMaker_(e, t, this.pool_);
                return this.requestMap_.addRequest(n), n
            }, e.prototype.deleteApp = function() {
                this.deleted_ = !0, this.app_ = null, this.requestMap_.clear()
            }, e.prototype.maxUploadRetryTime = function() {
                return this.maxUploadRetryTime_
            }, e.prototype.setMaxUploadRetryTime = function(e) {
                this.maxUploadRetryTime_ = e
            }, e.prototype.maxOperationRetryTime = function() {
                return this.maxOperationRetryTime_
            }, e.prototype.setMaxOperationRetryTime = function(e) {
                this.maxOperationRetryTime_ = e
            }, e
        }()
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return i
    });
    var r = n(55),
        i = function() {
            function e(e) {
                this.promise_ = r.b(e)
            }
            return e.prototype.getPromise = function() {
                return this.promise_
            }, e.prototype.cancel = function(e) {
                void 0 === e && (e = !1)
            }, e
        }()
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return o
    });
    var r = n(61),
        i = n(93),
        o = function() {
            function e() {
                this.map_ = {}, this.id_ = i.h
            }
            return e.prototype.addRequest = function(e) {
                function t() {
                    delete r.map_[n]
                }
                var n = this.id_;
                this.id_++, this.map_[n] = e;
                var r = this;
                e.getPromise().then(t, t)
            }, e.prototype.clear = function() {
                r.b(this.map_, function(e, t) {
                    t && t.cancel(!0)
                }), this.map_ = {}
            }, e
        }()
}, function(e, t, n) {
    "use strict";
    t.a = function(e, t, n) {
        var i = l.c(e.urlParams),
            o = e.url + i,
            a = s.a(e.headers);
        return function(e, t) {
                null !== t && t.length > 0 && (e.Authorization = "Firebase " + t)
            }(a, t),
            function(e) {
                var t = void 0 !== r.default ? r.default.SDK_VERSION : "AppManager";
                e["X-Firebase-Storage-Version"] = "webjs/" + t
            }(a), new f(o, e.method, a, e.body, e.successCodes, e.additionalRetryCodes, e.handler, e.errorHandler, e.timeout, e.progressCallback, n)
    };
    var r = n(44),
        i = n(124),
        o = n(300),
        a = n(37),
        s = n(61),
        u = n(55),
        c = n(23),
        l = n(123),
        h = n(163),
        f = function() {
            function e(e, t, n, r, i, o, a, s, c, l, h) {
                this.pendingXhr_ = null, this.backoffId_ = null, this.resolve_ = null, this.reject_ = null, this.canceled_ = !1, this.appDelete_ = !1, this.url_ = e, this.method_ = t, this.headers_ = n, this.body_ = r, this.successCodes_ = i.slice(), this.additionalRetryCodes_ = o.slice(), this.callback_ = a, this.errorCallback_ = s, this.progressCallback_ = l, this.timeout_ = c, this.pool_ = h;
                var f = this;
                this.promise_ = u.a(function(e, t) {
                    f.resolve_ = e, f.reject_ = t, f.start_()
                })
            }
            return e.prototype.start_ = function() {
                function e(e, t) {
                    function r(e) {
                        var t = e.loaded,
                            r = e.lengthComputable ? e.total : -1;
                        null !== n.progressCallback_ && n.progressCallback_(t, r)
                    }
                    if (t) e(!1, new p(!1, null, !0));
                    else {
                        var o = n.pool_.createXhrIo();
                        n.pendingXhr_ = o, null !== n.progressCallback_ && o.addUploadProgressListener(r), o.send(n.url_, n.method_, n.body_, n.headers_).then(function(t) {
                            null !== n.progressCallback_ && t.removeUploadProgressListener(r), n.pendingXhr_ = null;
                            var o = (t = t).getErrorCode() === h.a.NO_ERROR,
                                a = t.getStatus();
                            if (o && !n.isRetryStatusCode_(a)) {
                                var s = i.b(n.successCodes_, a);
                                e(!0, new p(s, t))
                            } else {
                                var u = t.getErrorCode() === h.a.ABORT;
                                e(!1, new p(!1, null, u))
                            }
                        })
                    }
                }

                function t(e, t) {
                    var r = n.resolve_,
                        i = n.reject_,
                        o = t.xhr;
                    if (t.wasSuccessCode) try {
                        var s = n.callback_(o, o.getResponseText());
                        c.c(s) ? r(s) : r()
                    } catch (e) {
                        i(e)
                    } else if (null !== o) {
                        (u = a.s()).setServerResponseProp(o.getResponseText()), i(n.errorCallback_ ? n.errorCallback_(o, u) : u)
                    } else if (t.canceled) {
                        i(u = n.appDelete_ ? a.b() : a.c())
                    } else {
                        var u = a.o();
                        i(u)
                    }
                }
                var n = this;
                this.canceled_ ? t(0, new p(!1, null, !0)) : this.backoffId_ = o.a(e, t, this.timeout_)
            }, e.prototype.getPromise = function() {
                return this.promise_
            }, e.prototype.cancel = function(e) {
                this.canceled_ = !0, this.appDelete_ = e || !1, null !== this.backoffId_ && o.b(this.backoffId_), null !== this.pendingXhr_ && this.pendingXhr_.abort()
            }, e.prototype.isRetryStatusCode_ = function(e) {
                var t = e >= 500 && e < 600,
                    n = i.b([408, 429], e),
                    r = i.b(this.additionalRetryCodes_, e);
                return t || n || r
            }, e
        }(),
        p = function() {
            return function(e, t, n) {
                this.wasSuccessCode = e, this.xhr = t, this.canceled = !!n
            }
        }()
}, function(e, t, n) {
    "use strict";
    t.a = function(e, t, n) {
        function r() {
            return 2 === h
        }

        function i() {
            f || (f = !0, t.apply(null, arguments))
        }

        function o(t) {
            c = setTimeout(function() {
                c = null, e(a, r())
            }, t)
        }

        function a(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            if (!f)
                if (e) i.apply(null, arguments);
                else if (r() || l) i.apply(null, arguments);
            else {
                u < 64 && (u *= 2);
                var a;
                1 === h ? (h = 2, a = 0) : a = 1e3 * (u + Math.random()), o(a)
            }
        }

        function s(e) {
            p || (p = !0, f || (null !== c ? (e || (h = 2), clearTimeout(c), o(0)) : e || (h = 1)))
        }
        var u = 1,
            c = null,
            l = !1,
            h = 0,
            f = !1,
            p = !1;
        return o(0), setTimeout(function() {
            l = !0, s(!0)
        }, n), s
    }, t.b = function(e) {
        e(!1)
    }
}, function(e, t, n) {
    ! function() {
        var t = n(302),
            r = n(168).utf8,
            i = n(303),
            o = n(168).bin,
            a = function(e, n) {
                e.constructor == String ? e = n && "binary" === n.encoding ? o.stringToBytes(e) : r.stringToBytes(e) : i(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || (e = e.toString());
                for (var s = t.bytesToWords(e), u = 8 * e.length, c = 1732584193, l = -271733879, h = -1732584194, f = 271733878, p = 0; p < s.length; p++) s[p] = 16711935 & (s[p] << 8 | s[p] >>> 24) | 4278255360 & (s[p] << 24 | s[p] >>> 8);
                s[u >>> 5] |= 128 << u % 32, s[14 + (u + 64 >>> 9 << 4)] = u;
                for (var d = a._ff, v = a._gg, _ = a._hh, y = a._ii, p = 0; p < s.length; p += 16) {
                    var g = c,
                        m = l,
                        b = h,
                        E = f;
                    l = y(l = y(l = y(l = y(l = _(l = _(l = _(l = _(l = v(l = v(l = v(l = v(l = d(l = d(l = d(l = d(l, h = d(h, f = d(f, c = d(c, l, h, f, s[p + 0], 7, -680876936), l, h, s[p + 1], 12, -389564586), c, l, s[p + 2], 17, 606105819), f, c, s[p + 3], 22, -1044525330), h = d(h, f = d(f, c = d(c, l, h, f, s[p + 4], 7, -176418897), l, h, s[p + 5], 12, 1200080426), c, l, s[p + 6], 17, -1473231341), f, c, s[p + 7], 22, -45705983), h = d(h, f = d(f, c = d(c, l, h, f, s[p + 8], 7, 1770035416), l, h, s[p + 9], 12, -1958414417), c, l, s[p + 10], 17, -42063), f, c, s[p + 11], 22, -1990404162), h = d(h, f = d(f, c = d(c, l, h, f, s[p + 12], 7, 1804603682), l, h, s[p + 13], 12, -40341101), c, l, s[p + 14], 17, -1502002290), f, c, s[p + 15], 22, 1236535329), h = v(h, f = v(f, c = v(c, l, h, f, s[p + 1], 5, -165796510), l, h, s[p + 6], 9, -1069501632), c, l, s[p + 11], 14, 643717713), f, c, s[p + 0], 20, -373897302), h = v(h, f = v(f, c = v(c, l, h, f, s[p + 5], 5, -701558691), l, h, s[p + 10], 9, 38016083), c, l, s[p + 15], 14, -660478335), f, c, s[p + 4], 20, -405537848), h = v(h, f = v(f, c = v(c, l, h, f, s[p + 9], 5, 568446438), l, h, s[p + 14], 9, -1019803690), c, l, s[p + 3], 14, -187363961), f, c, s[p + 8], 20, 1163531501), h = v(h, f = v(f, c = v(c, l, h, f, s[p + 13], 5, -1444681467), l, h, s[p + 2], 9, -51403784), c, l, s[p + 7], 14, 1735328473), f, c, s[p + 12], 20, -1926607734), h = _(h, f = _(f, c = _(c, l, h, f, s[p + 5], 4, -378558), l, h, s[p + 8], 11, -2022574463), c, l, s[p + 11], 16, 1839030562), f, c, s[p + 14], 23, -35309556), h = _(h, f = _(f, c = _(c, l, h, f, s[p + 1], 4, -1530992060), l, h, s[p + 4], 11, 1272893353), c, l, s[p + 7], 16, -155497632), f, c, s[p + 10], 23, -1094730640), h = _(h, f = _(f, c = _(c, l, h, f, s[p + 13], 4, 681279174), l, h, s[p + 0], 11, -358537222), c, l, s[p + 3], 16, -722521979), f, c, s[p + 6], 23, 76029189), h = _(h, f = _(f, c = _(c, l, h, f, s[p + 9], 4, -640364487), l, h, s[p + 12], 11, -421815835), c, l, s[p + 15], 16, 530742520), f, c, s[p + 2], 23, -995338651), h = y(h, f = y(f, c = y(c, l, h, f, s[p + 0], 6, -198630844), l, h, s[p + 7], 10, 1126891415), c, l, s[p + 14], 15, -1416354905), f, c, s[p + 5], 21, -57434055), h = y(h, f = y(f, c = y(c, l, h, f, s[p + 12], 6, 1700485571), l, h, s[p + 3], 10, -1894986606), c, l, s[p + 10], 15, -1051523), f, c, s[p + 1], 21, -2054922799), h = y(h, f = y(f, c = y(c, l, h, f, s[p + 8], 6, 1873313359), l, h, s[p + 15], 10, -30611744), c, l, s[p + 6], 15, -1560198380), f, c, s[p + 13], 21, 1309151649), h = y(h, f = y(f, c = y(c, l, h, f, s[p + 4], 6, -145523070), l, h, s[p + 11], 10, -1120210379), c, l, s[p + 2], 15, 718787259), f, c, s[p + 9], 21, -343485551), c = c + g >>> 0, l = l + m >>> 0, h = h + b >>> 0, f = f + E >>> 0
                }
                return t.endian([c, l, h, f])
            };
        a._ff = function(e, t, n, r, i, o, a) {
            var s = e + (t & n | ~t & r) + (i >>> 0) + a;
            return (s << o | s >>> 32 - o) + t
        }, a._gg = function(e, t, n, r, i, o, a) {
            var s = e + (t & r | n & ~r) + (i >>> 0) + a;
            return (s << o | s >>> 32 - o) + t
        }, a._hh = function(e, t, n, r, i, o, a) {
            var s = e + (t ^ n ^ r) + (i >>> 0) + a;
            return (s << o | s >>> 32 - o) + t
        }, a._ii = function(e, t, n, r, i, o, a) {
            var s = e + (n ^ (t | ~r)) + (i >>> 0) + a;
            return (s << o | s >>> 32 - o) + t
        }, a._blocksize = 16, a._digestsize = 16, e.exports = function(e, n) {
            if (void 0 === e || null === e) throw new Error("Illegal argument " + e);
            var r = t.wordsToBytes(a(e, n));
            return n && n.asBytes ? r : n && n.asString ? o.bytesToString(r) : t.bytesToHex(r)
        }
    }()
}, function(e, t) {
    ! function() {
        var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            n = {
                rotl: function(e, t) {
                    return e << t | e >>> 32 - t
                },
                rotr: function(e, t) {
                    return e << 32 - t | e >>> t
                },
                endian: function(e) {
                    if (e.constructor == Number) return 16711935 & n.rotl(e, 8) | 4278255360 & n.rotl(e, 24);
                    for (var t = 0; t < e.length; t++) e[t] = n.endian(e[t]);
                    return e
                },
                randomBytes: function(e) {
                    for (var t = []; e > 0; e--) t.push(Math.floor(256 * Math.random()));
                    return t
                },
                bytesToWords: function(e) {
                    for (var t = [], n = 0, r = 0; n < e.length; n++, r += 8) t[r >>> 5] |= e[n] << 24 - r % 32;
                    return t
                },
                wordsToBytes: function(e) {
                    for (var t = [], n = 0; n < 32 * e.length; n += 8) t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
                    return t
                },
                bytesToHex: function(e) {
                    for (var t = [], n = 0; n < e.length; n++) t.push((e[n] >>> 4).toString(16)), t.push((15 & e[n]).toString(16));
                    return t.join("")
                },
                hexToBytes: function(e) {
                    for (var t = [], n = 0; n < e.length; n += 2) t.push(parseInt(e.substr(n, 2), 16));
                    return t
                },
                bytesToBase64: function(e) {
                    for (var n = [], r = 0; r < e.length; r += 3)
                        for (var i = e[r] << 16 | e[r + 1] << 8 | e[r + 2], o = 0; o < 4; o++) 8 * r + 6 * o <= 8 * e.length ? n.push(t.charAt(i >>> 6 * (3 - o) & 63)) : n.push("=");
                    return n.join("")
                },
                base64ToBytes: function(e) {
                    e = e.replace(/[^A-Z0-9+\/]/gi, "");
                    for (var n = [], r = 0, i = 0; r < e.length; i = ++r % 4) 0 != i && n.push((t.indexOf(e.charAt(r - 1)) & Math.pow(2, -2 * i + 8) - 1) << 2 * i | t.indexOf(e.charAt(r)) >>> 6 - 2 * i);
                    return n
                }
            };
        e.exports = n
    }()
}, function(e, t) {
    function n(e) {
        return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
    }
    e.exports = function(e) {
        return null != e && (n(e) || function(e) {
            return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0))
        }(e) || !!e._isBuffer)
    }
}]);
//# sourceMappingURL=https://localhost:9000/sourcemap/../sourcemap/background.chrome.js.map