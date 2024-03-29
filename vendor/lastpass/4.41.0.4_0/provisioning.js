var Provisioning;
! function(o) {
    "use strict";
    var e = (r.prototype.checkUserState = function(o) {
        !this.global.lploggedin && this.global.shouldOpenLogin() ? (o({
            error: "User is not logged in."
        }), this.platform.openLoginPopover()) : o({
            result: "OK."
        })
    }, r.prototype.sendApiCalls = function(o, i, n) {
        var s = this;
        this.platform.openTab({
            url: this.urlToCall(o),
            inactive: !0,
            loadHandler: function(t) {
                var o = {
                    global: !1,
                    type: i.action_type || "GET",
                    cache: !1,
                    url: i.url,
                    data: i.params,
                    success: function(o) {
                        s.handleResponseFromThridParty(t, n, o)
                    },
                    error: function(o, e, r) {
                        s.handleResponseFromThridParty(t, n, {
                            error: e
                        })
                    }
                };
                if (i.header) {
                    o.headers = {};
                    for (var e = 0; e < i.header.length; e++) o.headers[i.header[e].key] = i.header[e].value
                }
                if ("json" !== i.dataType) {
                    var r = [];
                    for (var a in i.data) r.push(a + "=" + encodeURIComponent(i.data[a]));
                    o.data = r.join("&")
                } else o.data = JSON.stringify(i.data);
                t.getTop().jQuery.ajax(o), s.cstimeout = setTimeout(function() {
                    s.handleResponseFromThridParty(t, n, {
                        error: "timeout"
                    })
                }, 1e4)
            }
        })
    }, r.prototype.handleResponseFromThridParty = function(o, e, r) {
        clearTimeout(this.cstimeout), e(r), o.close()
    }, r.prototype.getLocalKey = function(o) {
        o({
            key: g_local_key,
            hash: g_local_key_hash,
            hex: g_local_key_hex
        })
    }, r.prototype.urlToCall = function(o) {
        var e = lpParseUri(o);
        return e.protocol ? e.protocol + "://" + e.host : e.host
    }, r);

    function r(o, e) {
        this.platform = o, this.global = e
    }
    o.ProvisioningService = e, o.provisioning = new e(LPPlatform, window)
}(Provisioning = Provisioning || {});
//# sourceMappingURL=sourcemaps/provisioning.js.map