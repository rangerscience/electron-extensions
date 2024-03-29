SiteLaunchObserver = function(i) {
    function o() {
        this.acc = null, this.launchedSite = !1, this.formSubmitted = !1, this.userInteraction = !1, this.hasFormWithPassword = !1, this.formData = null, this.formDisappeared = !1, this.timeout = null, this.timedout = !1
    }
    var r = {},
        e = !1;

    function t(t, a) {
        t(g_launch_site_tracking_enabled)
    }

    function a(t, a) {
        u(t, a, 15), r[t].launchedSite = !0, D(r[t].acc, "Launched")
    }

    function n(t, a) {
        u(t, a, 15), D(r[t].acc, "Filled")
    }

    function u(a, t, e) {
        r[a] && !r[a].launchedSite && (clearTimeout(r[a].timeout), delete r[a]), r[a] = new o, r[a].acc = t, r[a].timeout = setTimeout(function() {
            var t = r[a];
            t && (t.formSubmitted ? (t.formDisappeared = !0, m(a, "Form disappeared")) : (t.timedout = !0, m(a, "Timeout")))
        }, 1e3 * e)
    }

    function m(t, a) {
        var e = r[t];
        e && (e.launchedSite ? i("SiteLaunchAttempt", {
            FORM_FOUND: e.hasFormWithPassword,
            FORM_SUBMITTED: e.formSubmitted,
            USER_SUBMIT: e.userInteraction,
            FORM_DISAPPEARED: e.formDisappeared,
            TIMEDOUT: e.timedout
        }) : i("infield_login_attempt", {
            form_found: e.hasFormWithPassword,
            form_submitted: e.formSubmitted,
            form_disappeared: e.formDisappeared,
            timedout: e.timedout
        }), c(e), clearTimeout(e.timeout), delete r[t])
    }

    function c(t) {
        t.hasFormWithPassword = !!t.formData || t.hasFormWithPassword, D(t.acc, " Tracking Results:"), D(t.acc, " FormFound: " + t.hasFormWithPassword), D(t.acc, " FormSubmitted: " + t.formSubmitted), D(t.acc, " FormDisappeared: " + t.formDisappeared), D(t.acc, " UserInteraction: " + t.userInteraction), D(t.acc, " TimedOut: " + t.timedout)
    }

    function s(t, a) {
        for (var e = 0; e < a.length; e++)
            for (var i in a[e])
                if (a[e][i] === t[i] && a[e].hasOwnProperty(i) && "" != a[e][i]) return !0;
        return !1
    }

    function d(t, a) {
        if (r[a.tabID]) {
            r[a.tabID].formData = t, r[a.tabID].formSubmitted = !0, r[a.tabID].userInteraction = t.userSubmit, h(a);
            var e = t.id ? t.id : t.name;
            D(r[a.tabID].acc, "Form(" + e + ") submitted.")
        }
    }

    function f(t, a) {
        t(r[a.tabID] && r[a.tabID].formSubmitted)
    }

    function h(e) {
        var i = r[e.tabID],
            t;
        i && LPTabs.get({
            tabID: e.tabID
        }).forEachWindow({
            each: function(t, a) {
                return t.LaunchTracking.formExists(i.formData, function(t) {
                    t && m(e.tabID, "Form still on page!")
                })
            }
        })
    }

    function b(t) {
        var a = r[t.tabID];
        a && a.formSubmitted && h(t)
    }

    function l(t) {
        r[t.tabID] && (r[t.tabID].hasFormWithPassword = !0, D(r[t.tabID].acc, "Form with password input found"))
    }

    function D(t, a) {
        e && console.log("%cApp: " + t.name + "%c " + a, "color: white; background: green", "color: blue")
    }
    return {
        isFeatureEnabled: t,
        startLaunchSite: a,
        startFillTracking: n,
        formSubmitted: d,
        getSubmitState: f,
        initiateFormExists: b,
        hasFormWithPassword: l
    }
}(sendLpImprove);
//# sourceMappingURL=sourcemaps/SiteLaunchObserver/siteLaunchObserverBG.js.map