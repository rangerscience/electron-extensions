function verbose_log(a) {
    (debug || "undefined" != typeof verbose && !0 === verbose) && lplog(a)
}

function debug_checkpoint_handler(a, e) {
    var t = "dbgCS",
        o = "";
    if (e && is_user_debug_enabled() && void 0 !== e.msg && e.msg && 0 < e.msg.length) {
        try {
            o = JSON.parse(e.msg)
        } catch (a) {
            console_error("json parse failed on '" + e.msg + "'")
        }
        console_log(sprintf("DEBUG [%s][%d][%s][t=%d][url=%s] %s", a, e.docnum, e.docstate, e.timestamp, e.url, o));
        var i = {
            cmd: t,
            tabid: a,
            docnum: e.docnum,
            url: e.url,
            docstate: e.docstate,
            msg: o
        };
        void 0 !== e.history_cmd && e.history_cmd && (i.cmd = e.history_cmd), void 0 !== e.timestamp && e.timestamp && (i.timestamp = e.timestamp), void 0 !== e.aid && (i.aid = e.aid), void 0 !== e.num && (i.num = e.num), void 0 !== e.param1 && (i.param1 = e.param1), void 0 !== e.param2 && (i.param2 = e.param2), void 0 !== e.param3 && (i.param3 = e.param3), void 0 !== e.param4 && (i.param4 = e.param4), void 0 !== e.param5 && (i.param5 = e.param5), void 0 !== e.param6 && (i.param6 = e.param6), void 0 !== e.param7 && (i.param7 = e.param7), void 0 !== e.param8 && (i.param8 = e.param8), void 0 !== e.param9 && (i.param9 = e.param9), write_history(i)
    }
}

function opendebugtab() {
    openURL(getchromeurl("debug.html"))
}

function is_user_debug_enabled() {
    return g_isdebug
}

function trigger_notification(a, e, t, o) {
    if (!g_isdebug) return !1;
    var i = {
            add: "showaddnotification",
            change: "showchangenotification",
            error: "showerrornotification",
            basicauth: "showbasicauthnotification",
            context: "showcontext",
            formfill: "formfill",
            generic: "lpshownotification"
        },
        r = {
            9999: {
                aid: "9999",
                fields: [],
                save_all: 0,
                action: "",
                attachkey: "",
                autologin: !1,
                basic_auth: "0",
                breached: "0",
                deleted: "0",
                fav: "0",
                groupid: "0",
                group: "Travel",
                fiid: "9999",
                genpw: !1,
                last_touch: "0",
                method: "",
                name: "fake site",
                never_autofill: !1,
                url: "http://nowhere.co",
                tld: "nowhere.co",
                pwch: "0",
                pwprotect: !1,
                notetype: "",
                realm_data: "",
                sharedfromaid: "",
                sn: !1,
                useusername: "uxuxuxux",
                customjs: "",
                unencryptedUsername: "uxuxuxux",
                noalert: "",
                vulnerable: "",
                submit_id: "",
                username: "----------",
                password: "--------"
            }
        },
        s = !0,
        d = !0;
    switch (o = o || {}, e) {
        case "add":
            t = t || gs("Should LastPass remember this password?"), void 0 === o.tld && (o.url = "http://nowhere.co", o.tld = "nowhere.co"), void 0 === o.formdata && (o.formdata = "\tusername\tuuuuuuuu\ttext\tseen\n\tpwd\tpppp\tpassword\tseen\n\tlocale\tde-DE\thidden\tnotseen\n", o.username = "uuuuuuuu", o.password = "pppp");
            break;
        case "change":
            s = !1, t = t || gs("LastPass detected a password change for user:") + " whodat@nowhere.cc", void 0 === o.newpw && (o.newpw = "abcde"), void 0 === o.oldpw && (o.oldpw = ""), void 0 === o.tld && (o.tld = "nowhere.co"), void 0 === o.sitecount && (o.sitecount = 1), 1 === o.sitecount && (o.singleaid, 1) && (o.singleaid = 9999);
            break;
        case "formfill":
            t = t || gs("FillableFormDetected");
            break;
        case "error":
            t = t || gs("Generic Error Message"), void 0 === o.showFeedback && (o.showFeeback = !1), void 0 === o.showLogin && (o.showLogin = !1);
            break;
        case "basicauth":
            void 0 === o.needbinary ? o.needbinary = !0 : d = !!o.needbinary, t = t || (d ? gs("In order for LastPass to fill into basic authentication dialogs, you need to install the binary version of LastPass for Chrome.") : gs("In order for LastPass to fill into basic authentication dialogs, you need to enable access for assistive devices."));
            break;
        default:
            t = t || gs("Test Message")
    }
    if (void 0 === i[e]) return console.warn("invalid type " + e), !1;
    var n = {
        cmd: "lpshownotification",
        type: e,
        data: {
            text: t,
            notificationdata: s ? LPJSON.stringify(o) : o,
            do_40notify: g_40notify
        }
    };
    switch (e) {
        case "fill":
            delete n.data.notificationdata, n.data.sites = LPJSON.stringify(r);
            break;
        case "formfill":
            delete n.data.notificationdata, n.data.aid = 0, n.data.extra = void 0, n.data.extra2 = void 0, n.data.extra3 = void 0;
            break;
        case "basicauth":
            delete n.data.notificationdata, n.data.needbinary = d
    }
    return sendCS(a, n, "all"), !0
}
//# sourceMappingURL=sourcemaps/background_debug.js.map