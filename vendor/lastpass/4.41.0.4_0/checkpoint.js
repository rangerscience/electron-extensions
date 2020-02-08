var Checkpoint = new checkpoint_lib;

function initCheckpoint() {
    return null == Checkpoint && (Checkpoint = new checkpoint_lib), null != Checkpoint
}

function doCheckpoint() {
    return !g_enable_checkpoint || "undefined" == typeof g_isdebug || !g_isdebug || (initCheckpoint(), Checkpoint.assert.apply(this, arguments))
}

function checkpoint_lib() {
    var t = this,
        r = 0,
        i = 0,
        a = 0,
        n = 0;
    if ("undefined" != typeof Date) {
        n = (new Date).getTime();
        var s = "",
            o = 2,
            d = 1,
            e = 0;
        this.checkpoint = function(e, n, r) {
            return !0
        }, this.init = function() {
            a = i = r = 0, n = (new Date).getTime(), s = ""
        }, this.reset = function() {
            t.init()
        }, this.assert = function() {
            var e = arguments;
            if ("undefined" == typeof g_isdebug || !g_isdebug) return a++, !0;
            var n = null;
            return void 0 !== e[3] && "function" == typeof e[3] && (n = e[3], void 0 !== e[4] ? n(e[4]) : n()), e.length <= 0 ? (i++, n(), !1) : void 0 !== e[2] && e[2] ? (a++, !0) : !0 === e[0] ? (r++, !0) : (i++, void u(o, sprintf("ASSERT FAILED: %s !== true%s", e[0], e[1] ? " : " + e[1] : "")))
        }, this.stats = function() {
            var e;
            return e = void 0 !== new Date(n).toUTCString ? new Date(n).toUTCString() : parseInt(n / 1e3).toString(), u(0, sprintf("Since %s, %d good, %d bad, %d skipped\n", e, r, i, a))
        }, this.getstats = function() {
            return {
                good: r,
                bad: i,
                skipped: a
            }
        }, this.validate_share_type = function(e, n) {
            if (!e) return !1;
            var r = !0;
            return r = (r = (r = (r = (r = (r = (r = r && t.assert("string" == typeof e.id, l("id", n))) && t.assert("string" == typeof e.sharekey, l("sharekey", n))) && t.assert("string" == typeof e.sharename, l("sharename", n))) && t.assert(t.in_array(e.readonly, ["0", "1"]), l("readonly", n))) && t.assert(t.in_array(e.give, ["0", "1"]), l("give", n))) && t.assert("string" == typeof e.sharekeyaes || "" === e.sharekeyaes, l("sharekeyaes", n))) && t.assert(t.in_array(e.associative, [0, "0", "1"]), l("associative", n)), void 0 !== e.linkedshare && (r = r && t.assert(t.in_array(e.linkedshare, ["0", "1"]), l("linkedshare", n))), r = (r = (r = (r = r && t.assert("string" == typeof e.key, l("key", n))) && t.assert("string" == typeof e.decsharename, l("decsharename", n))) && t.assert(lpdec(e.sharename, e.key) === e.decsharename, c("sharename/decsharename", n))) && t.assert(AES.hex2bin(lpmdec(e.sharekeyaes, !0)) === e.key, c("decrypted sharing key", n))
        }, this.validate_shareinfo_type = function(e, n) {
            if (!e) return !1;
            var r = !0;
            return r = (r = (r = (r = (r = (r = (r = r && t.assert("string" == typeof e.id, l("id", n))) && t.assert("string" == typeof e.sharekey, l("sharekey", n))) && t.assert("string" == typeof e.decsharename, l("decsharename", n))) && t.assert(t.in_array(e.readonly, ["0", "1"]), l("readonly", n))) && t.assert(t.in_array(e.give, ["0", "1"]), l("give", n))) && t.assert(t.in_array(e.associative, [0, "0", "1"]), l("associative", n))) && t.assert(t.in_array(e.linkedshare, ["0", "1"]), l("linkedshare", n))
        }, this.in_array = function(e, n) {
            if (null == n) return !1;
            for (var r = n.length, t = 0; t <= r; t++)
                if (void 0 !== n[t] && n[t] === e) return lpArrayOffset = t, !0;
            return !1
        }, this.validate_fieldinfo = function(e, n) {
            if (!e) return !1;
            n = n || {};
            var r = !0,
                t = !1;
            for (var i in n.save_all && (t = !0), null !== e.name && "string" == typeof e.name || (console_warn("FAIL: field.name"), r = !1), null !== e.type && ("string" == typeof e.type || lp_in_array(e.type, ["text", "password", "button", "file", "hidden", "checkbox", "radio", "textarea", "submit", "image", "select", "select-one"]) || lp_in_array(e.type, ["color", "date", "datetime", "datetime-local", "email", "month", "number", "range", "search", "tel", "time", "url", "week"])) || (console_warn("FAIL: field.type"), r = !1), "radio" == e.type || "checkbox" == e.type ? !0 !== e.checked && !1 !== e.checked && (console_warn("FAIL: field.checked for " + e.type), r = !1) : !1 !== e.checked && (r = !1), "1" === e.otherlogin ? ("" === e.url ? (console_warn("FAIL: field.url should be set in addruid case"), r = !1) : hex2url(e.url).match(/^https?:\/\//, "i") || (console_warn("FAIL: invalid field.url"), r = !1), "" !== e.urid && "0" !== e.urid || (console_warn("FAIL: field.urid should be set in addurid case"), r = !1), !1 !== e.otherfield && (console_warn("FAIL: field.otherfield must be false in addurid case"), r = !1)) : ("0" !== e.otherlogin && "" !== e.otherlogin && (console_warn("FAIL: field.otherlogin [deprecated?]"), r = !1), "" !== e.url && (console_warn("FAIL: field.url should be empty in non-addurid case"), r = !1), "0" !== e.urid && "" !== e.urid && (console_warn("FAIL: field.urid should be empty in non-addurid case"), r = !1)), !0 !== e.otherfield && !1 !== e.otherfield && (console_warn("FAIL: field.otherfield [deprecated?]"), r = !1), e) e.hasOwnProperty(i) && (lp_in_array(i, ["name", "type", "value", "formname", "checked", "urid", "otherlogin", "url", "otherfield"]) || (console_warn("found an unexpected property in field info: " + i), r = !1));
            return r
        }
    }

    function l(e, n) {
        return sprintf("%sproperty '%s' is missing or wrong type", n ? "[" + n + "] " : "", e)
    }

    function c(e, n) {
        return sprintf("%sunexpected value of %s was found", n ? "[" + n + "] " : "", e)
    }

    function u(e, n) {
        return n = LPPerl.chomp(n), s += n, "undefined" != typeof console && console && (e === d ? console.warn(n) : e === o ? console.error(n) : console.log(n)), !0
    }

    function f(e) {}

    function h(e) {}

    function p() {
        var e, n = !0;
        if ("undefined" != typeof g_shares && null !== g_shares)
            for (e in g_shares) n = n && t.validate_share_type(g_shares[e]);
        return n
    }

    function y() {}

    function g() {}
}
initCheckpoint();
//# sourceMappingURL=sourcemaps/checkpoint.js.map