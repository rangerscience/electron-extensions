if (/calendar.google.com/g.test(window.location.host)) {
    var $zoom = jQuery.noConflict();
    var xhrObserver = new function() {
        function e() {
            if (!window.XMLHttpRequest) {
                return
            }
            var e = window.XMLHttpRequest;
            window.XMLHttpRequest = function() {
                var t = new e;
                var n;
                let r = "";
                let i = document.querySelector("#zm-quick2adv-number");
                if (i && i !== null) {
                    r = i.innerHTML
                }
                let a = "";

                function o(e) {
                    var t = {};
                    var n = e.split("&");
                    for (var r = 0; r < n.length; r++) {
                        var i = n[r].split("=");
                        t[decodeURIComponent(i[0])] = decodeURIComponent(i[1])
                    }
                    return t
                }

                function l(e, t) {
                    var n = o(e);
                    if (typeof n[t] !== "undefined") {
                        return n[t]
                    }
                    return null
                }

                function d(e) {
                    var t = null;
                    try {
                        e = e.replace(/\n/g, " ");
                        e = e.substring(e.indexOf("'") + 1, e.length);
                        var n = new Function('"use strict"; return ' + e);
                        t = n()
                    } catch (e) {}
                    return t
                }

                function s(e, t, n) {
                    let r = c(e, n);
                    if (t) {
                        u(e, t);
                        if (r !== t) {
                            console.log("The rule for converting nId to eid is error:", r, t)
                        } else {
                            console.log("The rule for converting nId to eid is right!")
                        }
                    } else {
                        t = f(e);
                        if (t) {
                            if (r !== t) {
                                console.log("The rule for converting nId to eid is error:", r, t)
                            } else {
                                console.log("The rule for converting nId to eid is right!")
                            }
                        } else {
                            console.log("No eid for this nid: ", e)
                        }
                    }
                }

                function c(e, t) {
                    let n = t.split("@");
                    if (n[1] === "gmail.com") {
                        t = n[0] + "@m"
                    }
                    return btoa(e + " " + t).split("=")[0]
                }

                function u(e, t) {
                    let n = localStorage.nidEidMap;
                    if (n) {
                        n = JSON.parse(n);
                        if (Object.prototype.toString.call(n) === "[object Object]") {
                            n[e] = t;
                            localStorage.nidEidMap = JSON.stringify(n);
                            return
                        }
                    }
                    n = {};
                    n[e] = t;
                    localStorage.nidEidMap = JSON.stringify(n)
                }

                function f(e) {
                    let t = localStorage.nidEidMap;
                    if (t) {
                        t = JSON.parse(t);
                        if (Object.prototype.toString.call(t) === "[object Object]") {
                            return t[e]
                        }
                    }
                    return null
                }
                var m = t.open;
                t.open = function(e, t, i) {
                    this.addEventListener("readystatechange", function() {
                        if (this.readyState !== 4) {
                            return
                        }
                        var e = l(n, "action");
                        if (t === "event" && e === "CREATE") {
                            var i = d(this.responseText);
                            var o = "";
                            var s = document.querySelector("#zm-quick2adv-number");
                            if (s && s !== null) {
                                o = s.innerHTML
                            }
                            if (i && typeof i[0] !== "undefined" && typeof i[0][1] !== "undefined" && o !== "") {
                                let e = i[7][1];
                                if (typeof e === "string" && e.length > 20) {
                                    window.postMessage({
                                        calendarId: e,
                                        action: "event",
                                        number: o
                                    }, "*")
                                }
                                document.querySelector("#zm-quick2adv-number").innerHTML = ""
                            }
                        } else if (t === "deleteevent") {
                            var c = l(n, "eid");
                            if (c && c.length < 128) {
                                window.postMessage({
                                    calendarId: c,
                                    action: "deleteevent"
                                }, "*")
                            }
                        } else if (t === "event" && e === "EDIT") {
                            var s = document.querySelector("#zm-quick2adv-number");
                            if (s && s.innerHTML) {
                                s.innerHTML = ""
                            }
                            let e = l(n, "eid");
                            let t = l(n, "dates");
                            let r = document.querySelector("#zoom_edit_event_flag").innerHTML;
                            document.querySelector("#zoom_edit_event_flag").innerHTML = "0";
                            if (r === "0" && e && t) {
                                let n = null;
                                try {
                                    let e = d(this.responseText);
                                    n = JSON.parse(e[0][1])[22][3][0]
                                } catch (e) {}
                                window.postMessage({
                                    calendarId: e,
                                    action: "updatetimeandtimezone",
                                    dates: t,
                                    timezone: n
                                }, "*")
                            }
                        } else if (t === "sync.sync") {
                            let e = null;
                            try {
                                e = JSON.parse(l(n, "f.req"))
                            } catch (e) {}
                            let t = d(this.responseText);
                            let i = null,
                                o = null,
                                s = null,
                                c = null,
                                u = null,
                                f = null;
                            try {
                                u = t[0][2][3][0][1][0][3];
                                if (!u) {
                                    u = t[0][2][3][1][1][0][3]
                                }
                            } catch (e) {}
                            if (Array.isArray(u)) {
                                i = u[2];
                                s = u[1];
                                c = u[0]
                            }
                            try {
                                o = t[0][2][11][2]
                            } catch (e) {}
                            try {
                                f = t[0][2][3][0][0]
                            } catch (e) {}
                            if (i) {
                                let e = i.split("eid=")[1];
                                if (o && c) {
                                    let n = "";
                                    try {
                                        n = atob(o).split(c)[1]
                                    } catch (e) {
                                        console.log("Markup field format changes!")
                                    }
                                    if (n.length < 4) {
                                        let t = "";
                                        let n = document.querySelector("#zm-quick2adv-number");
                                        if (r) {
                                            t = r
                                        } else if (n && n !== null) {
                                            t = n.innerHTML
                                        }
                                        if (e && t) {
                                            if (typeof e === "string" && e.length > 20) {
                                                window.postMessage({
                                                    calendarId: e,
                                                    action: "event",
                                                    number: t,
                                                    event_baseid: c
                                                }, "*")
                                            }
                                            if (r == n.innerHTML) {
                                                document.querySelector("#zm-quick2adv-number").innerHTML = ""
                                            }
                                        }
                                        if (!a) {
                                            console.log("The create request occurs, but sendBaseid has no value!");
                                            window.postMessage({
                                                event_baseid: c,
                                                action: "recordZmlog",
                                                msgType: 7,
                                                msg: {
                                                    msg: "The create request occurs, but sendBaseid has no value!",
                                                    nid: c,
                                                    filename: "zm-observer.js"
                                                },
                                                operaType: 3
                                            }, "*")
                                        } else {
                                            if (a != c) {
                                                console.log("The create request occurs, but sendBaseid is not equal to nid!");
                                                window.postMessage({
                                                    event_baseid: c,
                                                    action: "recordZmlog",
                                                    msgType: 7,
                                                    msg: {
                                                        msg: "The create request occurs, but sendBaseid is not equal to nid!",
                                                        nid: c,
                                                        sendBaseid: a,
                                                        filename: "zm-observer.js"
                                                    },
                                                    operaType: 3
                                                }, "*")
                                            }
                                            a = ""
                                        }
                                    } else {
                                        let n = document.querySelector("#zm-quick2adv-number");
                                        if (n && n.innerHTML) {
                                            n.innerHTML = ""
                                        }
                                        let r = document.querySelector("#zoom_edit_event_flag").innerHTML;
                                        document.querySelector("#zoom_edit_event_flag").innerHTML = "0";
                                        if (r === "0" && e) {
                                            let n = null,
                                                r = null;
                                            try {
                                                let e = t[0][2][3][0][1][0][3];
                                                let i = e[35][1][0],
                                                    a = e[36][1][0];
                                                let o = JSON.parse(document.querySelector("#timezonedata").innerText)[0];
                                                r = e[35][2];
                                                if (!r) {
                                                    r = document.querySelector("#xTimezone").innerText
                                                }
                                                let l = 0;
                                                for (let e = 0, t = o.length; e < t; e++) {
                                                    let t = o[e];
                                                    if (t[0] === r) {
                                                        l = parseInt(t[1].slice(4, 7)) * 36e5;
                                                        let e = parseInt(t[1].slice(8, 10)) * 6e4;
                                                        if (e > 0) {
                                                            l = l > 0 ? l + e : l - e
                                                        }
                                                        break
                                                    }
                                                }
                                                i = new Date(i + l).toJSON().split(".000Z")[0].replace(/-/g, "").replace(/:/g, "");
                                                a = new Date(a + l).toJSON().split(".000Z")[0].replace(/-/g, "").replace(/:/g, "");
                                                n = i + "/" + a
                                            } catch (e) {
                                                console.log("Dates conversion failed: " + e)
                                            }
                                            if (n) {
                                                window.postMessage({
                                                    calendarId: e,
                                                    action: "updatetimeandtimezone",
                                                    dates: n,
                                                    timezone: r
                                                }, "*")
                                            }
                                        }
                                    }
                                }
                            } else if (s === 2) {
                                let e = false;
                                try {
                                    let n = atob(t[0][2][11][2]);
                                    if (n.indexOf(c) > -1 && n.indexOf(f) > -1) {
                                        e = true
                                    }
                                } catch (e) {}
                                if (!e) {
                                    return
                                }
                                try {
                                    let n = t[0][2][3][1][1][0][3][34][0];
                                    if (n) {
                                        e = false
                                    }
                                } catch (e) {}
                                try {
                                    let n = t[0][2][3][3][1][0][3][2];
                                    if (n) {
                                        e = false
                                    }
                                } catch (e) {}
                                try {
                                    let n = t[0][2][3][1][1][1][3][2];
                                    if (n) {
                                        e = false
                                    }
                                } catch (e) {}
                                try {
                                    let n = t[0][2][4][0];
                                    if (n === undefined) {
                                        e = false
                                    }
                                } catch (e) {}
                                if (e) {
                                    window.postMessage({
                                        event_baseid: c,
                                        action: "deleteevent"
                                    }, "*")
                                }
                            }
                            if (a) {
                                console.log("The sendBaseid has value, but create request does not exist!");
                                window.postMessage({
                                    event_baseid: a,
                                    action: "recordZmlog",
                                    msgType: 7,
                                    msg: {
                                        msg: "The sendBaseid has value, but create request does not exist!",
                                        sendBaseid: a,
                                        filename: "zm-observer.js"
                                    },
                                    operaType: 3
                                }, "*")
                            }
                        } else {
                            return
                        }
                    }, true);
                    return m.apply(this, arguments)
                };
                var p = t.send;
                t.send = function(e) {
                    var t = document.querySelector("#zm-quick-desc");
                    var r = document.querySelector("#zm-quick-location");
                    if (typeof e === "string" && e.indexOf("f.req=") >= 0) {
                        let n = e.split("&"),
                            i = null;
                        for (let e = 0, t = n.length; e < t; e++) {
                            let t = n[e];
                            if (t.indexOf("f.req=") >= 0) {
                                try {
                                    i = JSON.parse(decodeURIComponent(t.split("f.req=")[1]))
                                } catch (e) {}
                                break
                            }
                        }
                        if (Array.isArray(i)) {
                            let n = false;
                            if (t && t.innerHTML !== "") {
                                try {
                                    if (i[0][4][0][2]) {
                                        i[0][4][0][2][0][2][3][1][2][1] = decodeURIComponent(t.innerHTML)
                                    } else if (i[0][4][2][2]) {
                                        i[0][4][2][2][0][2][3][1][2][1] = decodeURIComponent(t.innerHTML)
                                    }
                                    n = true
                                } catch (e) {}
                            }
                            if (r && "" !== r.innerHTML) {
                                try {
                                    i[0][4][0][2][0][2][3][3][11] = [null, null, [
                                        [
                                            [null, r.innerHTML]
                                        ]
                                    ]];
                                    n = true
                                } catch (e) {}
                            }
                            if (n) {
                                e = e.replace(/f\.req\=[\w\W]*?(?=&)/, "f.req=" + encodeURIComponent(JSON.stringify(i)))
                            }
                            try {
                                if (i[0][4][0][2]) {
                                    a = i[0][4][0][2][0][2][0]
                                } else if (i[0][4][3][2]) {
                                    a = i[0][4][3][2][0][2][0]
                                }
                            } catch (e) {}
                        }
                    } else {
                        if (t && t.innerHTML !== "") {
                            e = e.replace(/&details&/g, "&details=" + t.innerHTML + "&")
                        }
                        if (r && "" !== r.innerHTML) {
                            e = e.replace(/&location&/g, "&location=" + r.innerHTML + "&")
                        }
                    }
                    n = e;
                    return p.apply(this, [].slice.call(arguments))
                };
                return t
            }
        }
        var t = "(" + e.toString() + ")();";
        var n = document.createElement("script");
        n.textContent = t;
        (document.head || document.documentElement).appendChild(n);
        var r = this;
        window.addEventListener("message", function(e) {
            if (e.data.calendarId !== undefined || e.data.event_baseid !== undefined) {
                if (e.data.action === "event") {
                    $zoom(r).trigger({
                        type: "calendarIdObtained",
                        calendarId: e.data.calendarId,
                        number: e.data.number,
                        event_baseid: e.data.event_baseid
                    })
                } else if (e.data.action === "deleteevent") {
                    $zoom(r).trigger({
                        type: "calendarIdRemoved",
                        calendarId: e.data.calendarId,
                        event_baseid: e.data.event_baseid
                    })
                } else if (e.data.action === "updatetimeandtimezone") {
                    $zoom(r).trigger({
                        type: "updateTimeAndTimezone",
                        calendarId: e.data.calendarId,
                        dates: e.data.dates,
                        timezone: e.data.timezone
                    })
                } else if (e.data.action === "recordZmlog") {
                    $zoom(r).trigger({
                        type: "recordZmlog",
                        msgType: e.data.msgType,
                        msg: e.data.msg,
                        operaType: e.data.operaType
                    })
                }
            }
        }, false)
    }
}