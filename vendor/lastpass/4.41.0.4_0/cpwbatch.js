var CPWbatch, g_batchpagealive = !0,
    g_batchpagealiveinterval = -1,
    g_cpw_batchstates = {};
CPWbatch = CPWbatch || new CPWbatch_lib;
var g_cpw_batch_aid = null,
    g_cpwfast = !1,
    g_cpw_aid_queue = [],
    g_cpw_status_update_lastmsg = "",
    F_OK = 1,
    F_FAIL = 2,
    F_TIMEOUT = 4,
    F_PENDING = 8,
    F_ALL = F_OK | F_FAIL | F_TIMEOUT | F_PENDING,
    P_RESET = !0,
    F_STARTED = "started",
    F_DONE = "done",
    F_NONE = null;

function close_cpw_tabs() {
    g_ischrome && get_selected_tab(null, function(t) {
        cpwbot_close_cpw_tab_handler(t)
    })
}

function cpwbot_close_cpw_tab_handler(t) {
    var e = gettabid(t);
    if (null !== g_cpw_server_initiated_tabid && null !== t && (e == CPWbot_bg.originating_tabid || e == CPWbot_bg.destination_tabid))
        if (g_ischrome) chrome.tabs.update(g_cpw_server_initiated_tabid, {
            active: !0
        });
        else if (g_issafari) {
        var _ = g_CS_tabs[g_cpw_server_initiated_tabid];
        _ && _.activate()
    } else if (g_isfirefoxsdk) {
        for (var a = 0; a < g_tabs.length; a++)
            if (g_tabs[a].id == g_cpw_server_initiated_tabid) {
                g_tabs[a].activate();
                break
            }
    } else g_isfirefox && activate_tabid(g_cpw_server_initiated_tabid);
    if (CPWbot_bg) {
        if (null !== CPWbot_bg.originating_tabid)
            if (g_ischrome) void 0 !== chrome.tabs.remove && chrome.tabs.remove(CPWbot_bg.originating_tabid, function() {});
            else if (g_issafari && null !== g_CS_tabs) {
            var i = g_CS_tabs[CPWbot_bg.originating_tabid];
            i && i.close()
        } else if (g_isfirefoxsdk) {
            for (var a = 0; a < g_tabs.length; a++)
                if (g_tabs[a].id == CPWbot_bg.originating_tabid) {
                    g_tabs[a].close();
                    break
                }
        } else g_isfirefox && close_tabid(CPWbot_bg.originating_tabid);
        if (null !== CPWbot_bg.destination_tabid)
            if (CPWbatch && CPWbatch.deregister_worker(CPWbot_bg.destination_tabid), g_ischrome) void 0 !== chrome.tabs.remove && chrome.tabs.remove(CPWbot_bg.destination_tabid, function() {
                chrome.runtime.lastError && debug && L(chrome.runtime.lastError)
            });
            else if (g_issafari && null !== g_CS_tabs) {
            var s = g_CS_tabs[CPWbot_bg.destination_tabid];
            s && s.close()
        } else if (g_isfirefoxsdk) {
            for (var a = 0; a < g_tabs.length; a++)
                if (g_tabs[a].id == CPWbot_bg.destination_tabid) {
                    g_tabs[a].close();
                    break
                }
        } else g_isfirefox && close_tabid(CPWbot_bg.destination_tabid)
    }
}

function start_pwchange_from_server(t, e) {
    if (debug && L("running start_pwchange_from_server for aid=" + e + " batchstate=" + CPWbatch.cpw_get_batchjob_state()), !lploggedin) return !1;
    CPWbatch && CPWbatch.cpw_get_batchjob_state() && CPWbatch.update_last_batch_timestamp();
    var _ = !0,
        a, i;
    return cpwbot_preinit(), dopwchange(e, !0, null, _)
}

function end_pwchange_from_server(t, e) {
    var _ = cpwbot_getpwchangestate();
    "FAIL" != _ && "CAPTCHA" != _ && "DONE" != _ && "OK" != _ && "TIMEOUT" != _ && 0 != _ && null !== _ && (CPWbatch && CPWbatch.cpw_get_batchjob_state() ? CPWbot_bg && e == CPWbot_bg.getpwchangeaid() ? (L("halting for aid=" + e + " current_state=" + _), cpwbot_halt()) : pass : cpwbot_halt()), g_isfirefox ? cpwbot_close_cpw_tab_handler(LP.mostRecent().getBrowser().selectedTab) : get_selected_tab(null, function(t) {
        cpwbot_close_cpw_tab_handler(t)
    })
}

function CPWbatch_lib() {
    var p = this;
    this.m_workers = {}, this.m_max_workers = 1, this.m_workermap = {};
    var o = 0,
        w = null,
        e = null,
        i = {};

    function _() {
        var t = 0,
            e = 0,
            _ = 0,
            a = 0,
            i = 0,
            s = 0,
            c = 0
    }

    function t() {
        this.m_workers = [], p.cpw_batchjob_reset_stats(), e = null
    }

    function c(t) {
        return "undefined" != typeof g_sites ? g_sites[t] : "undefined" != typeof lpaccts ? lpaccts[t] : null
    }
    this.register_worker = function(t, e) {
        if (null === this.m_workers || null == t) return !1;
        var _ = t.toString();
        return p.count_workers() >= this.m_max_workers ? (L("too many workers, " + p.count_workers() + " >= " + this.m_max_workers), !1) : (L("registered: worker " + _ + " aid=" + e), this.m_workers[_] = e, p.cpw_batchjob_mark_stats(F_PENDING), !0)
    }, this.count_workers = function() {
        if (null === this.m_workers) return -1;
        var t = 0,
            e;
        for (e in this.m_workers) this.m_workers.hasOwnProperty(e) && t++;
        return t
    }, this.deregister_worker = function(t) {
        if (null === this.m_workers || null == t) return !1;
        var e = t.toString();
        return this.m_workers[e] && (L("deregistered: worker " + e + " from aid=" + this.m_workers[e]), delete this.m_workers[e]), p.cpw_batchjob_mark_stats(F_PENDING), !0
    }, this.logout = function() {
        t(), o = 0
    }, this.init = function() {
        t()
    }, this.cpw_batchjob_mark_stats = function(t, e) {
        if (!i) return !1;
        var _ = null,
            a = null;
        return e && e.aid && (a = e.aid), e && e.reset && (_ = e.reset), 0 != (t & F_ALL) && ((t & F_OK) == F_OK && (void 0 !== _ && _ ? i.ok = 0 : i.ok++), (t & F_FAIL) == F_FAIL && (void 0 !== _ && _ ? i.fail = 0 : i.fail++), (t & F_TIMEOUT) == F_TIMEOUT && (void 0 !== _ && _ ? i.timeout = 0 : i.timeout++), (t & F_PENDING) == F_PENDING && (i.pending = void 0 !== _ && _ ? 0 : p.count_workers()), void 0 === i.byaid && (i.byaid = {}), a && (void 0 !== _ && _ ? delete i.byaid[a.toString()] : i.byaid[a.toString()] = t), !0)
    }, this.cpw_batchjob_reset_stats = function() {
        if (i = null, !(i = new _)) return !1;
        if (p.cpw_batchjob_mark_stats(F_ALL, {
                reset: P_RESET
            }), "undefined" == typeof Date) return !1;
        var t = (new Date).getTime();
        return i.start_time = t, !0
    }, this.cpw_batchjob_endjob_stats = function() {
        if (!i) return !1;
        var t = (new Date).getTime(),
            e = t - i.start_time;
        return i.end_time = t, i.elapsed = e, !0
    }, this.cpw_batchjob_getstats = function() {
        return i
    }, this.cpw_get_batchjob_state = function() {
        return e
    }, this.cpw_set_batchjob_state = function(t) {
        return void 0 === t ? (debug && L("batchjob state is missing"), !1) : (e = t, !0)
    }, this.cpw_get_batchjob_queue_length = function() {
        return !g_cpw_aid_queue || g_cpw_aid_queue.length < 0 || void 0 === g_cpw_aid_queue.length ? -1 : g_cpw_aid_queue.length
    }, this.cpw_queue_change_donext = function() {
        var t = p.cpw_queue_change_getnext();
        if (null != (g_cpw_batch_aid = t)) {
            var e;
            if (start_pwchange_from_server(g_cpw_server_initiated_tabid, t)) return t;
            CPWbatch.cpw_batchjob_mark_stats(F_FAIL, {
                aid: t
            });
            var _ = "failed to initiate pw change in batch job for aid=" + t;
            if (p.conditional_website_status_update({
                    aid: t,
                    msg: _
                }), console_error(_), lploggedin && !c(t)) return verbose_log("bad aid=" + t + " proceed to next"), p.cpw_queue_change_donext();
            if (lploggedin && c(t)) return verbose_log("other error for aid=" + t + " proceed to next"), p.cpw_queue_change_donext()
        }
        return setTimeout(function() {
            p.cpw_batch_end()
        }, 0), null
    }, this.cpw_queue_change_getnext = function() {
        return !g_cpw_aid_queue || g_cpw_aid_queue.length <= 0 ? null : g_cpw_aid_queue.shift();
        var t
    }, this.cpw_batch_end = function() {
        CPWbatch && (p.cpw_set_batchjob_state(F_DONE), g_cpwfast = !1, clearInterval(g_batchpagealiveinterval), g_cpw_batch_aid = null, CPWbatch && (p.cpw_batchjob_endjob_stats(), p.cpw_batchjob_mark_stats(F_PENDING)), p.conditional_website_status_update({
            msg: "done"
        }), setTimeout(function() {
            g_cpw_aid_queue = [], g_cpw_batchstates = {}
        }, 1e3))
    }, this.cpw_queue_push = function(t) {
        return null != t && (!isNaN(t) && (g_cpw_aid_queue.push(t), !0))
    }, this.cpw_batch_wait = function(t) {
        if (CPWbatch) {
            var e = 3e5,
                _ = !1,
                a = !1,
                i = !1,
                s = g_cpw_batch_aid,
                c = cpwbot_getpwchangestate();
            switch (L(sprintf("cpw_batch_wait wake up, state=%s batchstate=%s aid=%d\n", c, CPWbatch.cpw_get_batchjob_state(), s)), CPWbatch.cpw_get_batchjob_state() == F_DONE && (_ = !0), c) {
                case "TIMEOUT":
                case "CAPTCHA":
                case "FAIL":
                case "FAIL_PW_SAVED":
                    i = _ = !0;
                    break;
                case "OK":
                case "DONE":
                    _ = !0;
                    break;
                case "DOCAPTCHA":
                    a = !0;
                    break;
                case "preinit":
                case null:
                    CPWbot_bg.get_failstate() && (i = _ = !0)
            }
            var r = (new Date).getTime();
            0 < o && e < r - o && CPWbatch.cpw_get_batchjob_state() != F_DONE && (_ || (i = _ = !0, c = "TIMEOUT", L("BATCH JOB TIMED OUT"), CPWbatch.cpw_set_batchjob_state(F_DONE)));
            var n = "";
            if (_) {
                if (i ? "TIMEOUT" == c ? (n = "TIMEOUT", CPWbatch.cpw_batchjob_mark_stats(F_TIMEOUT, {
                        aid: s
                    })) : (n = "FAIL", CPWbatch.cpw_batchjob_mark_stats(F_FAIL, {
                        aid: s
                    })) : (n = "OK", CPWbatch.cpw_batchjob_mark_stats(F_OK, {
                        aid: s
                    })), CPWbatch.cpw_batchjob_mark_stats(F_PENDING), CPWbatch.cpw_get_batchjob_state() == F_DONE) return;
                end_pwchange_from_server(g_cpw_server_initiated_tabid, s), p.conditional_website_status_update({
                    aid: s,
                    msg: "finished change on " + s + " in current batchjob"
                }), t()
            } else pass;
            setTimeout(function() {
                p.cpw_batch_wait(t)
            }, 1001)
        }
    }, this.cpw_batch_begin = function(t) {
        var e = t || !1;
        p.cpw_reset_status_update_ack(), g_cpw_status_update_lastmsg = "", p.init();
        var _ = !1;
        for (var a in g_cpw_aid_queue) {
            var i = g_cpw_aid_queue[a];
            g_cpw_aid_queue.hasOwnProperty(a) && c(i) && c(i).pwprotect && (_ = !0)
        }
        if (e || !_) {
            g_batchpagealive = !0, g_batchpagealiveinterval = setInterval(function() {
                g_batchpagealive ? (console.error("heartbeat received. setting to false"), g_batchpagealive = !1) : (console.error("Killing the batch update. No heartbeat received."), g_cpw_aid_queue = [], cpwbot_halt())
            }, 3e4), p.cpw_batchjob_reset_stats(), p.cpw_set_batchjob_state(F_STARTED);
            var s = p.cpw_queue_change_donext();
            g_cpw_batch_aid = s, setTimeout(function() {
                p.cpw_batch_wait(p.cpw_queue_change_donext)
            }, 1001)
        } else security_prompt(function() {
            CPWbatch.cpw_batch_begin(!0)
        })
    }, this.conditional_website_status_update = function(t) {
        if (g_cpw_server_initiated_tabid) {
            var e = (t = t || {}).tabid;
            void 0 === e && (e = null);
            var _ = t.recipe;
            void 0 === _ && (_ = null);
            var a = t.msg;
            void 0 === a && (a = "");
            var i = t.aid;
            void 0 === i && (i = CPWbot_bg.getpwchangeaid());
            var s = t.state;
            void 0 === s && (s = cpwbot_getpwchangestate());
            var c = t.batchstate;
            void 0 === c && (c = CPWbatch.cpw_get_batchjob_state());
            var r = s,
                n = i;
            void 0 === g_cpw_batchstates[n] && (g_cpw_batchstates[n] = []), g_cpw_batchstates[n].push(r);
            var o = c,
                b;
            if (null !== o && CPWbatch) {
                CPWbatch.cpw_batchjob_mark_stats(F_PENDING);
                try {
                    b = LPJSON.stringify(CPWbatch.cpw_batchjob_getstats())
                } catch (t) {
                    var g = "JSON error: " + t;
                    CPWbot_bg && CPWbot_bg.warning_phone_home(g), console_error(g)
                }
            } else b = LPJSON.stringify(CPWbot_bg.get_timestamps());
            if (CPWbot_bg && null === CPWbot_bg.originating_tabid && null === CPWbot_bg.originating_tab && null !== g_cpw_server_initiated_tabid && null !== CPWbot_bg.destination_tabid && null !== CPWbot_bg.destination_tab) {
                var u = "";
                if (g_isdebug && (u = CPWbot_bg.get_user_debug_messages()), CPWbatch.cpw_get_batchjob_state()) {
                    if (!w) {
                        var h = g_cpw_status_update_lastmsg;
                        a != g_cpw_status_update_lastmsg && (a = g_cpw_status_update_lastmsg + "\n" + a), g_cpw_status_update_lastmsg = a
                    }
                    g_cpw_status_update_lastmsg = a, p.cpw_clear_status_update_ack();
                    var d = JSON.stringify({
                        aid: n,
                        state: JSON.stringify(g_cpw_batchstates),
                        msg: a,
                        debugmsg: u
                    });
                    sendCS(g_cpw_server_initiated_tabid, {
                        cmd: "cpw_batch_status_update",
                        msgstr: d,
                        batchstate: o,
                        stats: b
                    })
                } else sendCS(g_cpw_server_initiated_tabid, {
                    cmd: "cpw_status_update",
                    state: JSON.stringify(g_cpw_batchstates),
                    msg: a,
                    debugmsg: u,
                    aid: n,
                    batchstate: o,
                    stats: b
                })
            }
        }
    }, this.cpw_set_status_update_ack = function(t) {
        w = t
    }, this.cpw_get_status_update_ack = function() {
        return w
    }, this.cpw_clear_status_update_ack = function() {
        p.cpw_set_status_update_ack(!1)
    }, this.cpw_reset_status_update_ack = function() {
        w = null
    }, this.update_last_batch_timestamp = function() {
        return o = (new Date).getTime()
    }, this.get_last_batch_timestamp = function() {
        return o
    }
}

function iscpwfast() {
    if (void 0 !== g_cpwfast && !0 === g_cpwfast) return !0
}
//# sourceMappingURL=sourcemaps/cpwbatch.js.map