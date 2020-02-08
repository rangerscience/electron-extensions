function rich_notification(e) {
    var t = e.lpa_title,
        a = e.lpa_iconurl,
        r = e.lpa_id,
        l = e.lpa_onclicktext,
        i = e.lpa_onclickurl,
        o = e.lpa_msg;
    e.lpa_breachunlock && sendLpImprove("alert_response_breach_unlock_tried"), localStorage.setItem(g_username + "-breach_ids", r), LPNotifications.createNotification({
        title: t,
        message: o,
        callback: function() {
            openURL(i)
        },
        iconUrl: a,
        buttonText: l
    })
}

function handle_new_alerts(e) {
    var t = g_username + "-breach_ids";
    for (var a in alert_response = {}, e.attributes) alert_response[e.attributes[a].name] = e.attributes[a].value;
    var r = alert_response.lpa_breachonlyifaffected,
        l = alert_response.lpa_breach,
        i = alert_response.lpa_breachurl,
        o = alert_response.lpa_breachhasrecipe;
    if (i && o) {
        var _ = !1;
        for (var a in g_sites) lp_gettld_url(g_sites[a].url) == lp_gettld_url(i) && (g_sites[a].pwch = "1", _ = !0);
        _ && rewritelocalfile()
    }
    var n = !0;
    if ("" != i && "1" == r && "1" == l)
        for (var a in n = !1, g_sites)
            if (lp_gettld_url(g_sites[a].url) == lp_gettld_url(i)) {
                n = !0;
                break
            } n && (void 0 !== localStorage[t] && alert_response.lpa_id == localStorage[t] || (1 == alert_response.lpa_rich && rich_notification(alert_response), 1 == alert_response.lpa_toolbar && (g_notification_type = "lpalert", g_badgedata = {
        cmd: "notification",
        type: g_notification_type
    }, g_notification_data = {
        data: alert_response,
        cmd: "notification",
        type: "lpalert"
    }, set_badge(g_notification_data, getcurrenttabid()), drawIconAtRotation(0), sendTS(g_badgedata))))
}
//# sourceMappingURL=sourcemaps/lpalerts.js.map