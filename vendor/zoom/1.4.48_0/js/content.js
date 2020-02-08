var $zoom = jQuery.noConflict();
let APPCONFIG;
(function(t) {
    let e, i, n, o;
    let a = false;
    let s;
    let l;
    let r;
    let d = false,
        c = {};
    let m = {};
    let u = "";
    let p = {
        renderData: null,
        selAuthLastVal: -1,
        $authentication: null,
        $zmEditDomainModule: null,
        authExceptionTimeout: null
    };
    v();

    function f() {
        return new Promise((t, e) => {
            chrome.runtime.sendMessage({
                type: "loadAppConfig"
            }, e => {
                if (e.type == "postAppConfig") {
                    t(e.info)
                } else {
                    alert("Failed to load app config!");
                    t({
                        errors: [],
                        tips: []
                    })
                }
            })
        })
    }
    async function v() {
        APPCONFIG = await f();
        r = `<a class="locked_by_admin" href="" aria-describedby="locktip" title="${APPCONFIG.tips[1]}"><i></i><span class="sr-only">Locked Option</span></a>`;
        g();
        document.addEventListener("visibilitychange", function(t) {
            if (document.visibilityState === "visible" && a) {
                g();
                a = false;
                wt(i)
            }
        });
        t("body").on("click", ".zoom-dialog a", function(t) {
            t.preventDefault();
            t.stopPropagation()
        });
        t("body").on("submit", ".zoom-dialog form", function(t) {
            t.preventDefault();
            t.stopPropagation()
        });
        _();
        t("body").on("click", ".I7OXgf.ZEeHrd #xDiscDiscBu", function(e) {
            if (t("#zoom-video-sec").is(":visible")) {
                let t = document.querySelector("#zm-quick2adv-number");
                if (t && t.innerHTML) {
                    t.innerHTML = ""
                }
            }
        });
        t("body").append('<div id="zoom_edit_event_flag">0</div>');
        t("body").on("click", "[jsname=mg9Pef] [jsname=j7LFlb][aria-label=Delete]", function() {
            sendLogToBackend({
                msgType: 2,
                msg: "user right-clicks to delete event."
            })
        });
        t("body").on("click", ".Q3pIde [jsname=j7LFlb][aria-label=Delete]", function() {
            sendLogToBackend({
                msgType: 2,
                msg: 'user clicks the Delete button in the menu "More actions" to delete event.'
            })
        });
        t("body").on("keydown", function(e) {
            if (e.keyCode == 8 || e.keyCode == 46) {
                if (t("#yDmH0d [jsname=bN97Pc] div[jsname=SF0uGd][data-eventid]").length || t("#zoom-video-sec").length > 0 || t("#b1w9Rc").length) {
                    return
                }
                sendLogToBackend({
                    msgType: 2,
                    msg: "user clicks the delete key on the keyboard."
                })
            }
        });
        chrome.extension.sendMessage({
            type: "getMeetingTrashUrl"
        }, function(t) {
            if (t.meetingTrashUrl) {
                u = t.meetingTrashUrl
            }
        })
    }

    function g() {
        if (!chrome.app || typeof chrome.app.isInstalled === "undefined") {
            return
        }
        s = chrome.runtime.connect({
            name: "Zoom"
        });
        s.onMessage.addListener(function(e) {
            if (e.error) {
                E();
                if (e.errorMsg === "login###again") {
                    ft()
                } else {
                    alert(e.errorMsg || APPCONFIG.errors[8])
                }
                return
            }
            if (e.type === "schedule" || e.type === "pmi") {
                var i = e.meeting;
                var n = l.getWhereNode();
                if (n.length && i.addJoinUrl) {
                    l.setWhereNodeValue(i.joinUrl)
                }
                var o = l.getTopicNode().val();
                var a = getUserLanguage();
                if (!o || o === k[a]) {
                    l.setTopicNodeValue(i.topic)
                }
                var s = H();
                s.attr("href", i.joinUrl).html("Join Zoom Meeting");
                l.setDescNodeValue(i.email);
                dt(s);
                window.setTimeout(function() {
                    n[0].focus()
                }, 100);
                t("#zoom_schedule_button_wrapper > *").hide();
                t("#zoom_schedule_meeting_url").show();
                l.getGoogleVideoCallButtons().hide();
                if (t("#YPCqFe #zm-quick2adv-number").length <= 0) {
                    t("#YPCqFe").append('<div id="zm-quick2adv-number" style="display:none;">' + b(i.number) + "</div>")
                } else {
                    t("#YPCqFe #zm-quick2adv-number").text(i.number)
                }
                if (t("#YPCqFe #zm-usepmi").length <= 0) {
                    t("#YPCqFe").append('<div id="zm-usepmi" style="display:none;">' + b(i.usepmi) + "</div>")
                } else {
                    t("#YPCqFe #zm-usepmi").text(i.usepmi)
                }
                rt()
            } else if (e.type === "updateZmOptions") {
                w(t("#zoom-setting .content_container form"), e.zmOpt)
            } else if (e.type === "delSuccess") {
                ct(e.meeting);
                if (e.meeting && e.meeting != 0) {
                    At()
                }
            } else if (e.type === "workemailSigninResult") {
                bt(e.info)
            } else if (e.type === "ssoSigninResult") {
                _t(e.info)
            } else if (e.type == "WCL.sharing") {
                window.postMessage({
                    sourceId: e.sourceId,
                    canRequestAudioTrack: e.canRequestAudioTrack
                }, "*")
            } else if (e.type == "WCL.PermissionDeniedError") {
                window.postMessage({
                    type: "WCL.PermissionDeniedError"
                }, "*")
            } else if (e.type == "WCL.userCancel") {
                window.postMessage({
                    type: "WCL.userCancel"
                }, "*")
            } else if (e.type == "deleteMeetingToast") {
                At()
            }
        });
        window.addEventListener("message", function(t) {
            if (t.source != window) return;
            if (t.data == "WCL.getSourceID") {
                s.postMessage({
                    type: t.data
                })
            }
        })
    }

    function h(t) {
        if (!s) {
            alert(APPCONFIG.errors[9]);
            return
        }
        s.postMessage(t)
    }
    window.sendLogToBackend = function(t) {
        if (t && t.msgType && t.msg) {
            h({
                type: "sendLog",
                info: t
            })
        }
    };
    window.addEventListener("error", t => {
        sendLogToBackend({
            msgType: 1,
            msg: {
                msg: t.message,
                filename: t.filename,
                lineno: t.lineno,
                colno: t.colno,
                stack: t.error ? t.error.stack : ""
            }
        })
    }, true);

    function b(t) {
        return DOMPurify.sanitize(t, {
            SAFE_FOR_JQUERY: true
        })
    }

    function _() {
        chrome.runtime.onMessage.addListener(function(t, e, i) {
            if (t.type === "authenticationSigninResult") {
                ht(t)
            } else if (t.type === "disConnect") {
                a = true
            }
        });
        var e = t("body>input#zm_auth_token").val();
        var i = t("body>input#zm_gov_url").val() || t("body>input#zm_web_domain").val();
        if (e && e.length > 32) {
            var n = t("body>input#zm_gov_url").val() || "";
            var o = /https?:\/\/\w*\.?zoomgov\.com\/?/gi.exec(n);
            if (n && o && o.length && o[0].indexOf("zoomgov.com") > 0) {
                chrome.extension.sendMessage({
                    type: "newPerm"
                }, function(t) {})
            } else {
                h({
                    type: "passOAuthToken",
                    info: {
                        token: e,
                        url: i,
                        term: false
                    }
                })
            }
        }
        t("a#term_service_btn").delegate("", "click", function() {
            var e = t("form>input#zm_auth_token").val();
            if (e && e.length > 32) {
                h({
                    type: "passOAuthToken",
                    info: {
                        token: e,
                        url: "",
                        term: true,
                        first_name: t("#firstName").val() || "",
                        last_name: t("#lastName").val() || ""
                    }
                })
            }
        });
        var s = t("body>input#zm_sso_login").val();
        var r = t("body>input#zm_domain_url").val() || "";
        if (s && s.length > 8) {
            h({
                type: "passSsoSession",
                info: {
                    url: r
                }
            })
        }
        t(xhrObserver).on("calendarIdObtained", function(t) {
            h({
                type: "saveNewCalendarEvent",
                info: {
                    calendarId: t.calendarId,
                    number: t.number,
                    event_baseid: t.event_baseid
                }
            })
        }).on("calendarIdRemoved", function(t) {
            if (m[t.event_baseid]) {
                h({
                    type: "removeCalendarEvent",
                    info: {
                        calendarId: t.calendarId,
                        event_baseid: t.event_baseid
                    }
                });
                delete m[t.event_baseid]
            }
        }).on("updateTimeAndTimezone", function(t) {
            let e = t.dates;
            h({
                type: "updateTimeAndTimezone",
                info: {
                    calendarId: t.calendarId,
                    startTime: S(e),
                    duration: F(e),
                    timezone: t.timezone || V()
                }
            })
        }).on("recordZmlog", function(t) {
            sendLogToBackend({
                msgType: t.msgType,
                msg: t.msg,
                operaType: t.operaType
            })
        });
        var d;
        var c;
        if ($zoom("body").attr("data-viewfamily")) {
            var u = new y(function(e) {
                if (check40MinDuration()) {
                    t(".zoom-free-tooltip").show()
                } else {
                    t(".zoom-free-tooltip").hide()
                }
            });
            var p = new y(function(e) {
                if (t("#zoom-video-sec").length > 0) {
                    u.observe(document.querySelector("#xStDaIn"), {
                        attributeFilter: ["data-date"],
                        attributes: true
                    });
                    u.observe(document.querySelector("#xStTiIn"), {
                        attributeFilter: ["data-initial-value"],
                        attributes: true
                    });
                    u.observe(document.querySelector("#xEnDaIn"), {
                        attributeFilter: ["data-date"],
                        attributes: true
                    });
                    u.observe(document.querySelector("#xEnTiIn"), {
                        attributeFilter: ["data-initial-value"],
                        attributes: true
                    });
                    if (document.querySelector("#xAlDaCbx")) {
                        u.observe(document.querySelector("#xAlDaCbx"), {
                            attributeFilter: ["aria-checked"],
                            attributes: true
                        })
                    }
                } else {
                    st(t("body").get(0))
                }
                e.forEach(function(e) {
                    try {
                        if (e.addedNodes[0].className.indexOf("XVt2Ub-bF1uUb") > -1 && document.querySelector(".Sb44q")) {
                            document.querySelector("#zoom_edit_event_flag").innerHTML = "0"
                        }
                    } catch (t) {}
                    var i = e.addedNodes[0] && e.addedNodes[0].outerHTML;
                    if (i && e.target == document.body && e.addedNodes[0].innerHTML) {
                        var n = e.addedNodes[0].innerHTML;
                        if (n.indexOf('id="J9Hpafc') > 0) {
                            var o = e.addedNodes[0].querySelector("div.YrbPvc");
                            var a = e.addedNodes[0].querySelector("div[role=button][aria-describedby^=J9Hpafc]");
                            if (a && a !== null && o) {
                                o.removeChild(a)
                            }
                        }
                    }
                    if (i && i.search('role="dialog"') !== -1) {
                        if ("EVENT_EDIT" == document.querySelector("body").dataset.viewfamily) {
                            t("div[jsname=troJl] div[jsname=V68bde]").unbind();
                            t("div[jsname=troJl] div[jsname=V68bde]").delegate("div[role=option]", "click", function(e) {
                                t(this).parents("div[jsname=troJl]").attr("zm_st_tzid", t(this).attr("data-value").replace("suggestion:", ""))
                            });
                            t("div[jsname=troJl] div[jsname=V68bde]").delegate("", "keydown", function(e) {
                                if (e.keyCode == 13) {
                                    var i = t(this).find("div[role=option][tabindex=0]").attr("data-value").replace("suggestion:", "");
                                    if (i) t(this).parents("div[jsname=troJl]").attr("zm_st_tzid", i)
                                }
                            });
                            t("div[jsname=c6xFrd]").delegate(">div[data-id=EBS5u]", "keydown", function(e) {
                                if (e.keyCode == 13) {
                                    t(this).trigger("click")
                                }
                            });
                            t("div[jsname=c6xFrd]").delegate(">div[data-id=EBS5u]", "click", function(e) {
                                var i = t("div[jsname=troJl]").attr("zm_st_tzid");
                                if (i) {
                                    t("div[jsname=L2QMlb] div[jsname=yxQRke]").attr("timezoneid", i)
                                } else {
                                    var n = document.body.innerHTML;
                                    var o = n.match(/\[\\"timezone\\",\\"(.*)\\\"],\[\\"defaultCalMode\\"/);
                                    var a = o && o[1];
                                    t("div[jsname=L2QMlb] div[jsname=yxQRke]").attr("timezoneid", a || "")
                                }
                            })
                        } else if ("EVENT" == document.querySelector("body").dataset.viewfamily) {
                            var s = Q();
                            if (i.search('jsname="c6xFrd"') !== -1 && s && s.url && i.search('jsname="VGHUeb"') == -1 && i.search('jsname="AOxYWc"') == -1) {
                                var r = e.addedNodes[0];
                                var d = r.querySelector("span[jsname=bN97Pc] >div");
                                if (d && d.innerHTML.search("zm-remove-line") == -1 && r.querySelector("div[jsname=d8Aqse]  textarea[jsname=YPqjbf]")) {
                                    var c = document.createElement("div");
                                    c.setAttribute("class", "zm-remove-line");
                                    var u = document.createElement("div");
                                    var p = document.createElement("div");
                                    u.appendChild(document.createTextNode("Topic"));
                                    p.appendChild(document.createTextNode(t("#rAECCd").text()));
                                    c.appendChild(u);
                                    c.appendChild(p);
                                    d.insertBefore(c, d.childNodes[1]);
                                    var f = document.createElement("div");
                                    f.setAttribute("class", "zm-remove-line");
                                    var v = document.createElement("div");
                                    var g = document.createElement("div");
                                    var b = t("#xDetDlgWhen").find(".DN1TJ").clone();
                                    var _ = b.find("span").remove();
                                    v.appendChild(document.createTextNode("Time"));
                                    g.appendChild(document.createTextNode(b.text() + " " + _.text()));
                                    f.appendChild(v);
                                    f.appendChild(g);
                                    d.insertBefore(f, d.childNodes[2])
                                }
                                t("div[jsaction][jsname=c6xFrd]").unbind();
                                t("div[jsaction][jsname=c6xFrd]").delegate("div[role=button]", "click", function(e) {
                                    var i = t(this).attr("data-id") || "";
                                    if (i === "di8rgd" || i === "deA65") {
                                        var n = Q();
                                        if (n && n.number) {
                                            sendLogToBackend({
                                                msgType: 2,
                                                msg: {
                                                    msg: "user confirms deletion in the popover",
                                                    meetingNumber: n.number,
                                                    jsname: t(this).attr("jsname")
                                                },
                                                operaType: 1
                                            });
                                            h({
                                                type: "delete",
                                                info: {
                                                    number: n.number
                                                }
                                            })
                                        }
                                    }
                                })
                            }
                            if (i.search('jsname="bN97Pc"') !== -1) {
                                var y = t("#yDmH0d [jsname=bN97Pc] div[jsname=SF0uGd][data-eventid]");
                                if (y.length > 0) {
                                    var k = [];
                                    k.push('\t<i class="zm-busy zm-busy24" style="margin-top:-25px;display:none;"></i>');
                                    k.push('\t<div role="button" class="quick-schedule zoom-pop-link U26fgb O0WRkf e3Duub C0oVfc" tabindex="0" >');
                                    k.push('\t\t<content><a class="RveJvd snByac">Make it a Zoom Meeting</a></content>');
                                    k.push("\t</div>");
                                    if (y.find(".quick-schedule").length <= 0) {
                                        y.find("div[jsname=x8hlje]").removeClass("zZhnYe e3Duub").addClass("nYqxP I2LGc");
                                        y.find("div[jsname=x8hlje]").parent().append(k.join(""));
                                        y.find("div[jsname=rhHFf] content>span").empty();
                                        t("#YPCqFe #zm-quick2adv-number").empty()
                                    }
                                    t("div.quick-schedule content>a").delegate("", "click", function() {
                                        var e = t("div[jsname=oAi9S] #xDetDlgVideo[data-details]").attr("data-details") || "";
                                        var i = X(e);
                                        let n = l.getDescNode();
                                        if (this.lock) {
                                            return
                                        }
                                        var o = this;
                                        var a = t("div[jsname=vHVaxd] input[role=combobox][jsname=YPqjbf]");
                                        var s = t("div[jsname=wU3vpb] div[jsname=ovr9Gb] div[role=button][jsname=ix0Hvc]");
                                        if ((s.is(":visible") || a.is(":visible")) && i && i.url) {
                                            o.lock = true;
                                            var r = t("div[jsname=nw2lBd] a[href*='/www.google.com/url?']").attr("href") || "";
                                            var d = "<br>" + "─".repeat(10) + "<br><br>" + i.url + "<br/><br/>" + '<a href="' + r + '" target="_blank">Joining Instructions</a>' + "<br><br>" + "─".repeat(10);
                                            var c = t.trim(n.html());
                                            if (c && "" != n.text()) {
                                                d = c + d
                                            }
                                            n.html(d);
                                            n[0].dispatchEvent(new Event("paste"));
                                            var m = a[0].getAttribute("data-initial-value");
                                            if (m && m.length > 0) {
                                                m = m + ", " + i.url
                                            } else {
                                                m = i.url
                                            }
                                            t("div[jsname=ovr9Gb] div[jsname=vRNCKf]").addClass("sMVRZe");
                                            t("div[jsname=ovr9Gb] div[jsname=vRNCKf] div[role=button][jsname=ix0Hvc]").trigger("click");
                                            t("div[jsname=ovr9Gb]").addClass("sMVRZe");
                                            t("div[jsname=vHVaxd] input[role=combobox][jsname=YPqjbf]")[0].dispatchEvent(new Event("input"));
                                            a[0].focus();
                                            a[0].select();
                                            document.execCommand("inserttext", false, m);
                                            t("div[jsname=vHVaxd] input[role=combobox][jsname=YPqjbf]")[0].dispatchEvent(new Event("input"));
                                            setTimeout(function() {
                                                o.lock = false;
                                                y.find("div[jsname=x8hlje]").trigger("click")
                                            }, 800)
                                        } else {
                                            t(".zm-busy24").show();
                                            o.lock = true;
                                            chrome.extension.sendMessage({
                                                type: "quickschedule",
                                                info: {
                                                    scheduleTime: I(),
                                                    trackfields: "",
                                                    timezone: ut()
                                                }
                                            }, function(e) {
                                                o.lock = false;
                                                t(".zm-busy24").hide();
                                                if (e && e.status) {
                                                    if (y.find("div[jsname=GYcwYe] input").val() == "") {
                                                        y.find("div[jsname=GYcwYe] input").val(e.result.topic).focus();
                                                        y.find("div[jsname=GYcwYe] input")[0].dispatchEvent(new Event("input", {
                                                            bubbles: true
                                                        }));
                                                        y.find("div[jsname=GYcwYe] input").blur()
                                                    }
                                                    var i = t("#yDmH0d > #zm-quick-location");
                                                    var n = t("#yDmH0d > #zm-quick-desc");
                                                    var a = t("#yDmH0d > #zm-quick-number");
                                                    if (e.result.addJoinUrl) {
                                                        var s = t("div[jsname=vHVaxd] input[role=combobox][jsname=YPqjbf]");
                                                        var r = t("div[jsname=wU3vpb] div[jsname=ovr9Gb] div[role=button][jsname=ix0Hvc]");
                                                        if (r.is(":visible") || s.is(":visible")) {
                                                            var d = s[0].getAttribute("data-initial-value");
                                                            if (d && d.length > 0) {
                                                                d = d + ", " + e.result.joinUrl
                                                            } else {
                                                                d = e.result.joinUrl
                                                            }
                                                            t("div[jsname=ovr9Gb]").addClass("sMVRZe");
                                                            t("div[jsname=ovr9Gb] div[jsname=vRNCKf] div[role=button][jsname=ix0Hvc]").trigger("click");
                                                            t("div[jsname=vHVaxd] input[role=combobox][jsname=YPqjbf]")[0].dispatchEvent(new Event("input"));
                                                            s[0].focus();
                                                            s[0].select();
                                                            document.execCommand("inserttext", false, d);
                                                            t("div[jsname=vHVaxd] input[role=combobox][jsname=YPqjbf]")[0].dispatchEvent(new Event("input"));
                                                            if (i.length <= 0) {
                                                                t("#yDmH0d").append('<div id="zm-quick-location" style="display:none;">' + (d || "") + "</div>")
                                                            } else {
                                                                i[0].textContent = d || ""
                                                            }
                                                        } else {
                                                            if (i.length <= 0) {
                                                                t("#yDmH0d").append('<div id="zm-quick-location" style="display:none;">' + (e.result.joinUrl || "") + "</div>")
                                                            } else {
                                                                i[0].textContent = e.result.joinUrl || ""
                                                            }
                                                        }
                                                    }
                                                    if (a.length <= 0) {
                                                        t("#yDmH0d").append('<div id="zm-quick-number" style="display:none;">' + (e.result.number || "") + "</div>")
                                                    } else {
                                                        a[0].textContent = e.result.number || ""
                                                    }
                                                    if (t("#zm-quick2adv-number").length <= 0) {
                                                        t("#YPCqFe").append('<div id="zm-quick2adv-number" style="display:none;">' + (e.result.number || "") + "</div>")
                                                    } else {
                                                        t("#YPCqFe #zm-quick2adv-number").text(e.result.number || "")
                                                    }
                                                    var c = l.getDescNode();
                                                    if (c.length > 0 && c.is(":visible")) {
                                                        var m = "<br>" + "─".repeat(10) + "<br><br>" + e.result.email.replace(/\r\n/g, "<br>") + "<br>" + "─".repeat(10);
                                                        var u = t.trim(c.html());
                                                        if (u && "" != c.text()) {
                                                            m = u + m
                                                        }
                                                        c.html(m);
                                                        c[0].dispatchEvent(new Event("paste"))
                                                    } else {
                                                        var p = encodeURIComponent(e.result.email) || "";
                                                        p = "\n" + encodeURIComponent("─".repeat(10)) + "\n" + p + "\n" + encodeURIComponent("─".repeat(10));
                                                        if (n.length <= 0) {
                                                            t("#yDmH0d").append('<div id="zm-quick-desc" style="display:none;">' + p + "</div>")
                                                        } else {
                                                            n[0].textContent = p
                                                        }
                                                    }
                                                    setTimeout(function() {
                                                        y.find("div[jsname=x8hlje]").trigger("click")
                                                    }, 800)
                                                } else if (e.errorCode == 201) {
                                                    ft()
                                                } else if (e.errorCode == 3068) {
                                                    y.find("div[jsname=rhPddf]").trigger("click");
                                                    j()
                                                } else {
                                                    alert(e.errorMessage)
                                                }
                                            })
                                        }
                                    });
                                    y.delegate("[jsname=I0Fcpe] > div", "click", function(e) {
                                        var i = t(this).attr("aria-controls") || "";
                                        if ("tabAway" === i || "tabReminder" === i || "tabTask" === i) {
                                            t(".quick-schedule").hide()
                                        } else {
                                            t(".quick-schedule").show()
                                        }
                                    });
                                    y.delegate("div[jsname=x8hlje]", "click", function(e) {
                                        var i = t("#yDmH0d > #zm-quick-number")[0];
                                        if (i && i.textContent.length > 8) {
                                            h({
                                                type: "update",
                                                info: {
                                                    number: i.textContent,
                                                    topic: y.find("div[jsname=GYcwYe] input").val(),
                                                    startTime: I(),
                                                    isRepeat: false,
                                                    zoomrooms: pt(),
                                                    duration: $(),
                                                    timezone: ut()
                                                }
                                            })
                                        }
                                    })
                                }
                            }
                        }
                        return
                    }
                    if (i && i.search('id="xDetDlgVideo"') !== -1 && "EVENT_EDIT" == document.querySelector("body").dataset.viewfamily) {
                        var s = W();
                        if (s && s.number) {
                            var z = t("#xRTCIn #xDetDlgVideo[data-details]").attr("data-details") || "";
                            var w = X(z);
                            if (w && w.number && w.number !== s.number) {
                                t("#xRemRtcBu").trigger("click")
                            }
                        }
                    }
                    var x = e.removedNodes[0] && e.removedNodes[0].outerHTML;
                    if (x) {
                        if (x.search('role="dialog"') !== -1) {
                            if ("EVENT" == document.querySelector("body").dataset.viewfamily) {
                                if (x.search('jsname="bN97Pc"') !== -1 && x.search('class="JtukPc"') !== -1) {
                                    setTimeout(function() {
                                        t("#yDmH0d > #zm-quick-desc").empty();
                                        t("#yDmH0d > #zm-quick-location").empty();
                                        t("#yDmH0d > #zm-quick-number").empty();
                                        t("#YPCqFe #zm-quick2adv-desc").empty()
                                    }, 1e3)
                                }
                            }
                        } else if (x.search('role="button"') !== -1 && x.search("data-eventid=") !== -1 && x.search('data-opens-details="true"') !== -1 && x.match(/jsaction=/g).length > 1 && x.search('role="main"') === -1 && x.search("jsaction=") < x.search("ynRLnc")) {
                            let e = new RegExp('(?<=data-eventid=")[a-zA-Z0-9/+]+(?=")').exec(x);
                            if (t.isArray(e)) {
                                e = e[0];
                                if (t(`[role=button][data-eventid=${e}]`).length < 1) {
                                    let t = "";
                                    try {
                                        let i = atob(e).split(" ");
                                        if (i[1].search("@") !== -1) {
                                            t = i[0]
                                        }
                                    } catch (t) {}
                                    if (t) {
                                        m[t] = true
                                    }
                                }
                            }
                        } else if ("EVENT_EDIT" == document.querySelector("body").dataset.viewfamily && x.search('jsname="aZ2wEe"') !== -1) {
                            var s = W();
                            if (s && s.number) {
                                var z = t("#xRTCIn #xDetDlgVideo[data-details]").attr("data-details") || "";
                                var w = X(z);
                                if (w && w.number && w.number !== s.number) {
                                    alert(APPCONFIG.tips[3]);
                                    t("#xRemRtcBu").trigger("click");
                                    sendLogToBackend({
                                        msgType: 2,
                                        msg: {
                                            msg: "automatically delete add-on meeting that conflict with extension meeting",
                                            meetingNumber: w.number,
                                            meetingLink: z,
                                            extMeetingNumber: s.number
                                        },
                                        operaType: 1
                                    });
                                    h({
                                        type: "deleteonly",
                                        info: {
                                            number: w.number
                                        }
                                    })
                                }
                            }
                        } else if ("EVENT_EDIT" == document.querySelector("body").dataset.viewfamily && x.search('id="xDetDlgVideo"') !== -1) {
                            var s = W();
                            if (s && s.number) {
                                var z = "";
                                var C = e.removedNodes[0].querySelector("#xDetDlgVideo[data-details]");
                                if (C) {
                                    z = C.getAttribute("data-details")
                                }
                                var w = X(z);
                                if (w && w.number && w.number == s.number) {
                                    ct();
                                    sendLogToBackend({
                                        msgType: 2,
                                        msg: {
                                            msg: "user delete zoom add-on meeting",
                                            meetingNumber: w.number
                                        },
                                        operaType: 1
                                    });
                                    h({
                                        type: "delete",
                                        info: {
                                            number: w.number
                                        }
                                    })
                                }
                            }
                        }
                    }
                })
            });
            p.observe(t("body").get(0), {
                attributes: false,
                childList: true,
                subtree: true
            });
            var f = new y(function(e) {
                e.forEach(function(e) {
                    if ("EVENT" == document.querySelector("body").dataset.viewfamily) {
                        var i = t("[jsname=bN97Pc] #xDtlDlgCt");
                        var n = t("[jsname=bN97Pc] #xDtlDlgCt > .zoom-join-link");
                        if (n && n.length > 0 && i.is(":visible")) {} else {
                            if (i.length > 0) {
                                var o = K(i);
                                var a = Q();
                                if (a && a.url) {
                                    var s = [];
                                    s.push('<div class="kMp0We OcVpRe zoom-join-link">');
                                    s.push('\t<div aria-hidden="true" class="nGJqzd OLw7vb">');
                                    s.push('\t\t<span class="DPvwYc zmlogo" aria-hidden="true"></span>');
                                    s.push("\t</div>");
                                    s.push('\t<div class="NI2kfb" id="xDetDlgWhen">');
                                    s.push('\t\t<div class="zoom-pop-link"><a role="button" class="btn-small btn-meeting" target="_blank">Join Zoom Meeting</a></div>');
                                    s.push("\t</div>");
                                    s.push("</div>");
                                    t("[jsname=bN97Pc] #xDtlDlgCt .kMp0We:eq(0)").after(s.join(""));
                                    t(".zoom-pop-link>a")[0].setAttribute("href", b(a.url));
                                    t("#xDetDlg div[role=button][jsname=VkLyEc]").delegate("", "click", function(t) {
                                        if (!o) {
                                            sendLogToBackend({
                                                msgType: 2,
                                                msg: {
                                                    msg: "in the event preview popover, the user clicks the delete button",
                                                    meetingNumber: a.number,
                                                    nodeId: this.id
                                                },
                                                operaType: 1
                                            });
                                            h({
                                                type: "delete",
                                                info: {
                                                    number: a.number
                                                }
                                            })
                                        }
                                    });
                                    i.find("a").each(function() {
                                        var e = t(this).text();
                                        if (mt(e)) {
                                            t(this).attr("href", e)
                                        }
                                    });
                                    i.find("#xDetDlgDesc").each(function() {
                                        var e = t(this).html();
                                        var i = e.match(/\+[0-9][0-9 ]+[0-9]/g);
                                        if (i && i.length > 0) {
                                            for (var n = 0; n < i.length; n++) {
                                                e = e.replace(i[n], '<a href="tel:' + i[n] + '">' + i[n] + "</a>")
                                            }
                                        }
                                        t(this).html(e)
                                    })
                                }
                            }
                        }
                    }
                })
            });
            f.observe(document.querySelector("#yDmH0d"), {
                attributes: false,
                childList: true,
                subtree: true
            })
        } else {
            t("#maincell #coverinner").unbind().bind("DOMSubtreeModified", function() {
                if (!d && !G() && U() && !D() && !J()) {
                    d = window.setTimeout(function() {
                        d = null;
                        tt()
                    }, 600)
                }
                if (!c && U() && J()) {
                    c = window.setTimeout(function() {
                        c = null;
                        var t = W();
                        if (t && t.url) {
                            var e = H();
                            setTimeout(function() {
                                if (e) {
                                    e.attr("href", b(t.url)).html("Join Zoom Meeting")
                                }
                            }, 100)
                        }
                    }, 600)
                }
            });
            if (t("#maincell #coverinner")) {
                var v = document.querySelector("body");
                var g = new y(function(e) {
                    var i = t(".ep-etz-dialog .ep-etz-box-start .tz-pck-timezone");
                    if (i && i.val()) {
                        t("span[id$=\\-edr-st-txt], span[id$=\\-edr-both-txt]").parents(".ep-edr-first-line").attr("timezoneid", i.val())
                    }
                    if (t(".ep-etz-dialog").is(":visible")) {
                        t(".ep-etz-dialog .ep-etz-dialog-buttons").unbind();
                        t(".ep-etz-dialog .ep-etz-dialog-buttons").delegate("> button[name=yes]", "click", function(e) {
                            var i = t("span[id$=\\-edr-st-txt], span[id$=\\-edr-both-txt]");
                            var n = i.parents(".ep-edr-first-line").attr("timezoneid");
                            if (n) {
                                t("span[id$=\\-edr-st-txt], span[id$=\\-edr-both-txt]").attr("timezoneid", n)
                            }
                        });
                        t(".ep-etz-dialog .ep-etz-dialog-buttons").delegate("> button[name=yes]", "keydown", function(e) {
                            if (e.keyCode == 13) {
                                t(this).trigger("click")
                            }
                        });
                        t(".ep-etz-dialog .ep-etz-dialog-buttons").delegate("> span", "keydown", function(e) {
                            t("span[id$=\\-edr-st-txt], span[id$=\\-edr-both-txt]").removeAttr("timezoneid")
                        });
                        t(".ep-etz-dialog .tz-pck-timezone").unbind();
                        t(".ep-etz-dialog .tz-pck-timezone").delegate("", "change", function(e) {
                            var i = t(".ep-etz-dialog .ep-etz-box-start .tz-pck-timezone");
                            t("span[id$=\\-edr-st-txt], span[id$=\\-edr-both-txt]").parents(".ep-edr-first-line").attr("timezoneid", i.val())
                        })
                    }
                    if (t(".ep-etz-remove-dialog").is(":visible")) {
                        t(".ep-etz-remove-dialog .ep-etz-remove-dialog-buttons").unbind();
                        t(".ep-etz-remove-dialog .ep-etz-remove-dialog-buttons").delegate("> button[name=ok]", "click", function(e) {
                            t("span[id$=\\-edr-st-txt], span[id$=\\-edr-both-txt]").removeAttr("timezoneid")
                        });
                        t(".ep-etz-remove-dialog .ep-etz-remove-dialog-buttons").delegate("> button[name=ok]", "keydown", function(e) {
                            if (e.keyCode == 13) {
                                t("span[id$=\\-edr-st-txt], span[id$=\\-edr-both-txt]").removeAttr("timezoneid")
                            }
                        })
                    }
                });
                if (v) {
                    g.observe(v, {
                        attributes: false,
                        childList: true,
                        subtree: true
                    })
                }
            }
        }
        l = uiOperation
    }
    var y = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    var k = {
        en: "Untitled event",
        zh: "无标题的活动",
        es: "Evento sin título",
        fr: "Événement sans titre"
    };

    function z(e) {
        var i = {};
        var n = t("#zoom-setting .content_container form");
        i.zoom_config_schedule_for = n.find(".schedule-for").val();
        i.zoom_config_video_host = n.find("[name=option_video_host]:checked").val();
        i.zoom_config_video_participants = n.find("[name=option_video_participants]:checked").val();
        i.zoom_config_audio = n.find("[name=option_audio]:checked").val();
        i.zoom_config_jbh = n.find("#setting_option_jbh").prop("checked");
        i.password = n.find("#setting_option_needpassword").is(":visible") ? n.find("[name=meeting_pwd]").val() : "";
        i.mute_upon_entry = n.find("#setting_option_uponentry").prop("checked");
        i.waiting_room = n.find("#setting_option_waitingroom").prop("checked");
        i.public_cal = n.find("#setting_option_public_cal").prop("checked");
        i.zoom_config_pmi = !!(n.find("[name=meeting_type]:checked").val() === "pmi");
        i.zoom_config_alternativehost = t("#alternative_host").is(":visible") ? t("#alternative_host").val() : "";
        i.scheduleTime = I();
        i.trackfields = getTrackfieldValue(t("input[name=trackfield]"));
        i.zoom_config_watermark = !!n.find("#setting_option_watermark").prop("checked");
        i.zoom_option_require_reg = !!n.find("#setting_option_requirereg").prop("checked");
        let o = n.find("#JBH_prior_start");
        if (!i.zoom_config_pmi && i.zoom_config_jbh && o.is(":visible")) {
            i.jbhTimeMinutes = o.val()
        }
        i.enableAuthentication = n.find("#setting_option_authentication").is(":visible") && n.find("#setting_option_authentication").prop("checked");
        if (i.enableAuthentication) {
            i.updateAuthOptionItem = ie()
        }
        if (t("#zoom-setting #meeting_type_pmi").prop("checked") && t("#zoom-setting #setting_option_needpassword").prop("checked")) {
            i.zoom_config_pmi_saved_pwd = n.find("[name=meeting_pwd]").val().trim()
        }
        i.zoom_config_audiomark = !!n.find("#setting_option_audiomark").prop("checked");
        i.record_type = e;
        i.zoom_config_joinurl = n.find("#setting_option_joinurl").prop("checked");
        Object.assign(i, It());
        return i
    }

    function w(e, i) {
        c = i;
        var n = i.zoom_config_schedule_for;
        var o = i.zoom_assistants;
        if ("0" !== i.zoom_config_pmiNum) {
            t(".meetingtype .pmi_number").text(i.zoom_config_pmiNum)
        }
        if (o && o.length > 0) {
            var a = e.find(".schedule-for")[0];
            a[0].setAttribute("data-email", i.host_email);
            a[0].setAttribute("data-pmi", i.zoom_config_pmiNum);
            t.each(o, function(i, o) {
                a[i + 1] = new Option(o.name, o.id);
                a[i + 1].setAttribute("data-email", o.email);
                a[i + 1].setAttribute("data-pmi", o.roomid);
                if (o.id == n) {
                    e.find(".schedule-for").val(n);
                    if ("000-000-000" !== o.roomid) {
                        e.find(".meetingtype .pmi_number").text(o.roomid)
                    } else {
                        e.find(".meetingtype .pmi_number").text("");
                        t("[name=meeting_type][value=onetime]").prop({
                            checked: true
                        })
                    }
                }
            })
        } else {
            t(".schedule").hide()
        }
        if (i && i.schedulePmiLock) {
            t("[name=meeting_type][value=pmi]").prop({
                checked: true
            });
            t("[name=meeting_type]").prop({
                disabled: true
            });
            t(".pmi").append(r).addClass("haslock")
        }
        var s = i.zoom_config_audio;
        var l = i.zoom_config_hasOther;
        if (!l) {
            e.find(".audio #option_audio_3rd").parent().hide();
            if ("other" == s) s = "both";
            e.find(".audio #option_audio_both").next().text("Both")
        }
        if (i.zoom_config_noBoth) {
            e.find(".audio #option_audio_both").parent().hide();
            if ("both" == s) s = "telephony"
        }
        var m = i.zoom_config_jbh;
        var u = i.zoom_config_mute_upon_entry;
        var p = i.zoom_config_waiting_room;
        var f = i.zoom_config_public_cal;
        var v = i.zoom_config_pmi;
        var g = i.zoom_config_video_host;
        var h = i.zoom_config_video_participants;
        var b = i.zoom_config_joinurl;
        d = i.jbhPwd_default;
        if ("0" === i.zoom_config_pmiNum) {
            v = false
        }
        t("[name=meeting_type][value=" + (v ? "pmi" : "onetime") + "]").prop({
            checked: true
        });
        e.find("#setting_option_uponentry").prop("checked", u);
        e.find("[name=option_video_host][value=" + g + "]").prop("checked", true);
        e.find("[name=option_video_participants][value=" + h + "]").prop("checked", true);
        e.find("[name=option_audio][value=" + s + "]").prop("checked", true);
        e.find("#setting_option_waitingroom").prop("checked", p);
        e.find("#setting_option_joinurl").prop("checked", b);
        e.find("#setting_option_jbh").prop("checked", m);
        if (!m) {
            e.find("#JBH_prior_start").prop("disabled", true).css("opacity", .5)
        }
        if (i.enableJBHPriorStartMeeting) {
            e.find(".control-row.jbh .prior-start-cont").addClass("showme");
            if (v) {
                e.find(".control-row.jbh").addClass("pmi")
            }
            let t = i.jbhTimeMinutes;
            if (t) {
                JBH_prior_start.value = t
            }
        }
        var _ = i.zoom_config_hasPubCal;
        if (!_) {
            t("#setting_option_public_cal").parents(".checkbox-inline").hide()
        } else {
            e.find("#setting_option_public_cal").prop("checked", f)
        }
        Et();
        $t();
        if (i.zoom_config_enable_watermark) {
            t("#setting_option_watermark").prop("checked", i.zoom_config_watermark)
        } else {
            t("#setting_option_watermark").parents(".watermark").remove()
        }
        if (i.zoom_config_enable_audiomark) {
            t("#setting_option_audiomark").prop("checked", i.zoom_config_audiomark)
        } else {
            t("#setting_option_audiomark").parents(".audiomark").remove()
        }
        if (i.zoom_audiomarkLocked) {
            t("#setting_option_audiomark").prop("checked", true).prop("disabled", true);
            t("#setting_option_audiomark").parent().append(r).parent().addClass("haslock")
        }
        if (i) {
            t("#alternative_host").parent().removeClass("has-error");
            t("#alternative_host").next().hide();
            if (i.zoom_support_althost) {
                t("#alternative_host").val(i.zoom_config_althost)
            } else {
                t(".altnativehost").hide()
            }
        } else {
            t(".altnativehost").hide()
        }
        var y = i.zoom_trackfields;
        if (y && y.length > 0) {
            t(".trackingcodes > .trackitems").empty();
            t.each(y, function(e, i) {
                t(".trackingcodes > .trackitems").append(x(i, ""));
                new ComboBox("trackitem" + i.id)
            })
        }
        if (i && (i.zoom_local_record || i.zoom_cloud_record)) {
            t("div.recording").removeClass("hideme");
            var k = i.zoom_record_type;
            if (1 == k || 2 == k) {
                t("#setting_recording_type").prop("checked", true)
            } else {
                t("#setting_recording_type").prop("checked", false)
            }
            if (i.zoom_local_record && i.zoom_cloud_record) {
                if (t("#setting_recording_type").prop("checked")) {
                    t(".recording-radio").removeClass("hideme");
                    if (2 == k) {
                        t("[name=option_rec_type][value=" + k + "]").prop({
                            checked: true
                        })
                    } else {
                        t("[name=option_rec_type][value=1]").prop({
                            checked: true
                        })
                    }
                }
            } else if (i.zoom_local_record) {
                t("#setting_recording_type").next().text(APPCONFIG.tips[4]);
                t(".recording-radio").remove()
            } else {
                t("#setting_recording_type").next().text(APPCONFIG.tips[5]);
                t(".recording-radio").remove()
            }
        }
        if (i.lockOpts) {
            var z = i.lockOpts;
            if (z.hostVideo_locked) {
                t("[name=option_video_host]").prop("disabled", true);
                t(".video .video-controls-label:first").append(r).addClass("haslock")
            }
            if (z.pVideo_locked) {
                t("[name=option_video_participants]").prop("disabled", true);
                t(".video .video-controls-label:last").append(r).addClass("haslock")
            }
            if (z.audio_locked) {
                t("[name=option_audio]").prop("disabled", true);
                t(".audio .controls[role=group]").append(r).addClass("haslock")
            }
            if (z.jbh_locked) {
                t(".jbh input").prop("disabled", true);
                t(".jbh > label").append(r).parent().addClass("haslock")
            }
            if (z.watermark_locked) {
                t("#setting_option_watermark").prop("checked", true).prop("disabled", true);
                t("#setting_option_watermark").parent().append(r).parent().addClass("haslock")
            }
            if (z.autoRecordLocked) {
                t(".recording input").prop("disabled", true);
                t(".recording > label").append(r).parent().addClass("haslock")
            }
            if (z.public_cal_locked) {
                t("#setting_option_public_cal").parent().append(r).parent().addClass("haslock");
                t("#setting_option_public_cal").prop("disabled", true)
            }
            if (z.waiting_room_locked) {
                t("#setting_option_waitingroom").parent().append(r).parent().addClass("haslock");
                t("#setting_option_waitingroom").prop("disabled", true)
            }
            if (z.mute_locked) {
                t("#setting_option_uponentry").prop("disabled", true);
                t("#setting_option_uponentry").parent().append(r).parent().addClass("haslock")
            }
        }
        if (i && i.option_enable_reg === true) {
            if (i.schedulePmiLock) {
                e.find("#setting_option_requirereg").prop({
                    disabled: true
                })
            } else if (i.zoom_option_require_reg === true) {
                e.find("#setting_option_requirereg").prop({
                    checked: true
                }).attr("checked", "checked").trigger("change")
            }
        } else {
            e.find("#setting_option_requirereg").parent().parent().hide()
        }
    }

    function x(e, i) {
        var n = e.mtValue;
        var o = [];
        o.push('\t\t\t\t\t\t\t<div class="form-group clearfix">');
        o.push('\t\t\t\t\t\t\t\t<label class="left-label control-labe" for="trackitem' + b(e.id) + '" >' + b(e.trackField));
        if (e.required) o.push("<i>*</i>");
        o.push('\t\t\t\t\t\t\t</label><div class="right-div">');
        o.push('\t\t\t\t\t\t\t\t\t<div class="combobox">');
        o.push('\t\t\t\t\t\t\t\t\t\t<label class="hideme">' + b(e.id) + "</label>");
        o.push('\t\t\t\t\t\t\t\t\t\t<input type="text" id="' + b(i) + "trackitem" + b(e.id) + '" name="trackfield" aria-required="' + b(e.required) + '" require="' + b(e.required) + '" maxlength="50" autocomplete="off" value="' + b(e.mtValue) + '" class="form-control" style="height:25px;"></input>');
        if (e.options.length > 0) {
            o.push('\t\t\t\t\t\t\t\t\t<span class="select2-arrow"><b></b></span>');
            o.push('\t\t\t\t\t\t\t\t\t<div class="dropdownlist">');
            t.each(e.options, function(t, e) {
                o.push('<a class="fieldtext">' + b(e) + "</a>")
            });
            o.push("\t\t\t\t\t\t\t\t\t</div>")
        }
        o.push("\t\t\t\t\t\t\t\t\t</div>");
        o.push("\t\t\t\t\t\t\t\t </div>");
        o.push("\t\t\t\t\t\t\t</div>");
        return o.join("")
    }

    function C(t, e, i) {
        var n = `\n\t\t<div id="zoom-setting" class="zoom-dialog modaldialog hideme" autocomplete="off">\n\t\t\t<div class="modal-dialog" role="dialog">\n\t\t    \t<div class="modal-content">\n\t\t        \t<div class="modal-header">\n\t\t\t\t\t\t<button type="button" class="close simplemodal-close" aria-describedby="myModalLabel" aria-label="close"> &times; </button>\n\t\t\t\t\t\t<h4 class="modal-title" id="myModalLabel" style="text-align:left;">  Schedule Options </h4>\n\t\t        \t</div>\n\t\t        \t<div class="modal-body">\n\t\t\t\t\t\t<div class="modal-body-container">\n\t\t\t\t\t\t\t<div class="content_container">\n\t\t\t\t\t\t\t\t<form role="form" id="tracking_form" class="form-horizontal">\n\t\t\t\t\t\t\t\t\t<div class="form-body">`;
        if (e) {
            n += `\t\t\t\t\t<div class="poppwd form-group clearfix">`;
            if (i) {
                n += `\n\t\t\t\t\t\t\t\t\t\t\t<label class="left-label control-label" for="meeting_pwd">Password</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class="right-div">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row requirepwd">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="setting_option_needpassword" name="setting_option_needpassword" checked />Require meeting password\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="password-type manual sel">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control" value="" name="meeting_pwd" maxlength="10" style="width: 126px;display:inline-block;vertical-align: top;" id="meeting_pwd" placeholder="Enter Password" aria-label="Enter Meeting Password">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class="has-error help-block hideme" for="meeting_pwd" style="margin-top:5px;margin-bottom:0;">${APPCONFIG.tips[6]}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>`
            } else {
                n += `\n\t\t\t\t\t\t\t\t\t\t\t<label class="left-label control-label" for="meeting_pwd">Meeting Password <i>*</i></label>\n\t\t\t\t\t\t\t\t\t\t\t<div class="right-div">\n\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control" value="" name="meeting_pwd" maxlength="10" style="width: 126px;display:inline-block;vertical-align: top;" id="meeting_pwd" placeholder="Enter Password" aria-label="Enter Meeting Password">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class="has-error help-block hideme" for="meeting_pwd" style="margin-top: 5px; margin-bottom: 0px; display: none;">${APPCONFIG.tips[6]}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>`
            }
            n += `\t\t\t\t\t</div>`
        }
        if (t) {
            n += `\t\t\t\t\t<div class="trackingcodes">\n\t\t\t\t\t\t\t\t\t\t\t<div class="trackitems"></div>\n\t\t\t\t\t\t\t\t\t\t</div>`
        }
        n += `\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="modal-footer">\n\t\t\t\t\t\t<button class="btn btn-primary submit"> Continue </button>\n\t\t\t\t\t\t<button type="button" class="btn btn-default simplemodal-close"> Cancel</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>`;
        return n
    }

    function T() {
        var t = [];
        t.push('<div id="zoom-setting" class="zoom-dialog modaldialog hideme" autocomplete="off">');
        t.push('   <div class="modal-dialog" role="dialog">');
        t.push('      <div class="modal-content">');
        t.push('         <div class="modal-header">');
        t.push('\t\t\t<button type="button" class="close simplemodal-close" aria-describedby="myModalLabel" aria-label="close"> &times; </button>');
        t.push('\t\t\t<h4 class="modal-title" id="myModalLabel" style="text-align:left;">  Schedule Options </h4>');
        t.push("        </div>");
        t.push('         <div class="modal-body">');
        t.push('\t\t\t<div class="modal-body-container">');
        t.push('\t\t\t\t<div class="content_container">');
        t.push('\t\t\t\t\t <form role="form" id="tracking_form" class="form-horizontal">');
        t.push('\t\t\t\t\t\t<div class="form-body">');
        t.push('\t\t\t\t\t\t\t<div class="trackingcodes"><div class="trackitems"></div></div>');
        t.push("\t\t\t\t\t\t</div>");
        t.push("\t\t\t\t\t </form>");
        t.push("\t\t\t\t</div>");
        t.push("\t\t\t</div>");
        t.push("         </div>");
        t.push('         <div class="modal-footer">');
        t.push('\t\t\t\t<button class="btn btn-primary submit"> Continue </button>');
        t.push('\t\t\t\t<button type="button" class="btn btn-default simplemodal-close"> Cancel</button>');
        t.push("         </div>");
        t.push("      </div>");
        t.push("   </div>");
        t.push("</div>");
        return t.join("")
    }

    function P() {
        var t = `\n\t\t<div id="zoom-setting" class="zoom-dialog modaldialog hideme" autocomplete="off">\n\t\t\t<div class="modal-dialog" role="dialog" >\n\t\t    \t<div class="modal-content">\n\t\t        \t<div class="modal-header">\n\t\t\t\t\t\t<button class="close simplemodal-close" aria-describedby="myModalLabel" aria-label="close"> &times; </button>\n\t\t\t\t\t\t<h4 class="modal-title" id="myModalLabel" style="text-align:left;">  Schedule Options </h4>\n\t\t        \t</div>\n\t\t\t\t\t<div class="modal-body">\n\t\t\t\t\t\t<div class="modal-body-container">\t\t\t\t\n\t\t\t\t\t\t\t<div class="content_container">\n\t\t\t\t\t\t\t\t<form role="form" id="setting_form" class="form-horizontal">\n\t\t\t\t\t\t\t\t\t<div class="form-body">\n\t\t\t\t\t\t\t\t\t\t<div class="schedule form-group clearfix">\n\t\t\t\t\t\t\t\t\t\t\t<label class="left-label control-label" for="mtg-schedulefor">Schedule For</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class="right-div">\n\t\t\t\t\t\t\t\t\t\t\t\t<div style="max-width:200px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select class="schedule-for form-control" id="mtg-schedulefor" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value="">Myself</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class="meetingtype form-group clearfix">\n\t\t\t\t\t\t\t\t\t\t\t<span class="left-label control-label">Meeting ID</span>\n\t\t\t\t\t\t\t\t\t\t\t<div class="right-div controls" role="group" aria-label="Meeting Type">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class="radio-inline"><input type="radio" id="meeting_type_normal" name="meeting_type" value="onetime" checked><span>One-time Meeting ID</span></label>\n\t\t\t\t\t\t\t\t\t\t\t\t<label class="radio-inline pmi"><input type="radio" id="meeting_type_pmi" name="meeting_type" value="pmi"><span>Use Personal Meeting ID <span class="pmi_number"></span></span></label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="pmi_txt1 hideme">${APPCONFIG.tips[7]}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="pmi_txt2 hideme">${APPCONFIG.tips[8]}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class="requirepwd-box form-group clearfix">\n\t\t\t\t\t\t\t\t\t\t\t<span class="left-label control-label">Password</span>\n\t\t\t\t\t\t\t\t\t\t\t<div class="right-div controls" role="group" aria-label="Password">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row requirepwd">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline"><input type="checkbox" id="setting_option_needpassword" name="setting_option_needpassword" />Require meeting password</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="password-type">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control" value="" name="meeting_pwd" maxlength="10" style="width: 126px;display:inline-block;vertical-align: top;" id="meeting_pwd" placeholder="Enter Password" aria-label="Enter Meeting Password">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class="has-error help-block hideme" for="meeting_pwd" style="margin-top:5px;margin-bottom:0;">${APPCONFIG.tips[6]}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div class="video form-group clearfix">\n\t\t\t\t\t\t\t\t\t\t\t<span class="left-label control-label">Video</span>\n\t\t\t\t\t\t\t\t\t\t\t<div class="right-div controls">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="clearfix">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="video-label control-label">Host</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="video-controls-label controls" role="group" aria-label="Host">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="radio-inline"><input type="radio" id="option_video_host_on" name="option_video_host" value="on" checked="checked"/>On</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="radio-inline"><input type="radio" id="option_video_host_off" name="option_video_host" value="off"/>Off</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="video-label control-label">Participant</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="video-controls-label controls" role="group" aria-label="Participant">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="radio-inline"><input type="radio" id="option_video_participant_on" name="option_video_participants" value="on" checked="checked"/>On</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="radio-inline"><input type="radio" id="option_video_participant_off" name="option_video_participants" value="off" />Off</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div> \n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class="audio form-group clearfix">\n\t\t\t\t\t\t\t\t\t\t\t<span class="left-label control-label">Audio</span>\n\t\t\t\t\t\t\t\t\t\t\t<div class="right-div controls" role="group" aria-label="Audio">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="radio-inline"><input type="radio" value="telephony" name="option_audio" id="option_audio_telephony"><span>Telephone</span></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="radio-inline"><input type="radio" value="voip" name="option_audio" id="option_audio_voip"><span>Computer Audio</span></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="radio-inline"><input type="radio" value="both" name="option_audio" id="option_audio_both"><span>Telephone and Computer Audio</span></label> \n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="radio-inline"><input type="radio" value="other" name="option_audio" id="option_audio_3rd"><span>3rd Party Audio</span></label>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div class="options form-group clearfix">\n\t\t\t\t\t\t\t\t\t\t\t<span class="left-label control-label">Options</span>\n\t\t\t\t\t\t\t\t\t\t\t<div class="right-div controls">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row requirereg">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline"><input type="checkbox" id="setting_option_requirereg" name="setting_option_requirereg" />Required registration</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row jbh">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="setting_option_jbh" name="setting_option_jbh" />Enable join before host\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="prior-start-cont"><select id="JBH_prior_start">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value="5">5 minutes</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value="10">10 minutes</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value="15">15 minutes</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value="0">Anytime</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tbefore start time</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row uponentry">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline"><input type="checkbox" id="setting_option_uponentry" name="setting_option_uponentry" />Mute participants upon entry</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row waitingroom">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline"><input type="checkbox" id="setting_option_waitingroom" />Enable waiting room</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row authentication"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row watermark">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="setting_option_watermark" name="setting_option_watermark" />Add watermark that identifies the viewing participant\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row audiomark">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="setting_option_audiomark" name="setting_option_audiomark" />Add audio watermark that identifies the participants\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row recording hideme">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="setting_recording_type" name="setting_recording_type" /><span>Record the meeting automatically</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="recording-radio hideme" role="group" aria-label="Record" style="padding-left:20px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="radio-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="radio" id="option_rec_type1" name="option_rec_type" value="1" checked /><span>On the local computer</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="radio-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="radio" id="option_rec_type2" name="option_rec_type" value="2"/><span>In the cloud</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row pubcal">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline"><input type="checkbox" id="setting_option_public_cal" name="setting_option_public_cal" />List in the Public Event List</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row joinurl">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline"><input type="checkbox" id="setting_option_joinurl" name="setting_option_joinurl" />Include join URL in location field</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class="altnativehost form-group clearfix">\n\t\t\t\t\t\t\t\t\t\t\t<span class="left-label control-label" for="alternative_host">Alternative hosts</span>\n\t\t\t\t\t\t\t\t\t\t\t<div class="right-div">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="" id="" style="max-width: 400px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" id="alternative_host" name="alternative_host" aria-label="Alternative hosts" placeholder="Example: john@company.com; peter@school.edu" value="" class="form-control" autocomplete="off">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span for="alternative_host" class="has-error help-block alternative_host_error" style="display: none;">${APPCONFIG.tips[0]}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\n\t\t\t\t\t\t\t\t\t\t<div class="trackingcodes"><div class="trackitems"></div></div>\t\t\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div style="display:none;" id="locktip">${APPCONFIG.tips[1]}</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="modal-footer">\n\t\t\t\t\t\t<button class="btn btn-primary submit"> Continue</button>\n\t\t\t\t\t\t<button type="button" class="btn btn-default simplemodal-close"> Cancel</button>\n\t\t\t\t\t\t<i class="busy zm-busy24" style="display:none;"></i>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t`;
        return t
    }

    function j(e) {
        h({
            type: "sync",
            info: {}
        });
        chrome.extension.sendMessage({
            type: "getZoomToken"
        }, function(i) {
            var n = i.inputManualPwd,
                o = i.zoom_config_pmi_saved_pwd,
                a = i.zoom_config_pmi;
            if (i.token) {
                if (i.fte || i.showSetting) {
                    t.modal(t(P()), t.extend({}, {
                        overlayId: "zm-setting-dialog-overlay",
                        containerId: "zm-setting-dialog-container",
                        minHeight: 520,
                        escClose: true,
                        fixed: false,
                        persist: true,
                        minWidth: 670,
                        close: true,
                        overlayClose: false,
                        onShow: function(n) {
                            p.$authentication = t("#zoom-setting .control-row.authentication");
                            h({
                                type: "loadZoomOptions"
                            });
                            let o = t("#zoom-setting .password-type");
                            t("#zoom-setting .submit").bind("click", function() {
                                t("#zoom-setting #alternative_host").trigger("blur");
                                if (t("#zoom-setting #setting_option_needpassword").prop("checked") && t("#meeting_pwd").is(":visible")) {
                                    if ("" == t("#meeting_pwd").val().trim()) {
                                        t("#meeting_pwd").parent().addClass("has-error");
                                        t("#meeting_pwd").next().show();
                                        return
                                    }
                                    if (t("[name=meeting_type][value=pmi]").prop("checked")) {
                                        o.addClass("manual")
                                    }
                                }
                                var n = -1;
                                if (t("#setting_recording_type").is(":visible")) {
                                    if (t("#setting_recording_type").prop("checked")) {
                                        if (i.hasLocalRecord && i.hasCloudRecord) {
                                            n = t("[name=option_rec_type]:checked").val()
                                        } else if (i.hasLocalRecord) {
                                            n = 1
                                        } else {
                                            n = 2
                                        }
                                    } else {
                                        n = 0
                                    }
                                }
                                if (ajaxValidAltHost() && ne() && validateAltHost() && validateTrackCodes()) {
                                    collateUserInput();
                                    if ("" != t("#zoom-setting #alternative_host").val()) {
                                        t("#zoom-setting .modal-footer .submit").addClass("inprogress");
                                        t("#zoom-setting .busy").show();
                                        chrome.extension.sendMessage({
                                            type: "validateAltHost",
                                            althosts: t("#zoom-setting #alternative_host").val()
                                        }, function(i) {
                                            t("#zoom-setting .busy").hide();
                                            t("#zoom-setting .modal-footer .submit").removeClass("inprogress");
                                            if (i && !i.status && (i.errorCode == 1113 || i.errorCode == 1114 || i.errorCode == 1115)) {
                                                t("#alternative_host").parent().addClass("has-error");
                                                t("#alternative_host").focus().next().show();
                                                t("#alternative_host").next().text(i.errorMessage)
                                            } else if (i && i.status) {
                                                h({
                                                    type: "saveOptionsAndSchedule",
                                                    info: z(n)
                                                });
                                                t.modal.close();
                                                lt(e)
                                            }
                                        })
                                    } else {
                                        h({
                                            type: "saveOptionsAndSchedule",
                                            info: z(n)
                                        });
                                        t.modal.close();
                                        lt(e)
                                    }
                                }
                            });
                            t("#zoom-setting #setting_option_needpassword").bind("change", function() {
                                var e = t("#zoom-setting #setting_option_needpassword").prop("checked") || false;
                                if (e) {
                                    o.addClass("sel")
                                } else {
                                    o.removeClass("sel")
                                }
                            });
                            t("#zoom-setting #meeting_pwd").bind("keyup", function() {
                                if (t(this).val().trim()) {
                                    t(this).parent().removeClass("has-error");
                                    t("#zoom-setting #meeting_pwd").next().hide()
                                }
                            });
                            t("#zoom-setting .schedule-for").bind("change", function() {
                                var e = t(this).find("option:selected").attr("data-pmi");
                                if ("0" !== e && "000-000-000" !== e) {
                                    t(".meetingtype .pmi_number").text(e)
                                } else {
                                    t(".meetingtype .pmi_number").text("")
                                }
                                return false
                            });
                            t("#zoom-setting #alternative_host").bind("blur", function(e) {
                                var i = t(this);
                                i.val(i.val().trim())
                            });
                            t("#zoom-setting #alternative_host").bind("keyup", function(e) {
                                var i = t(this);
                                var n = i.val();
                                if (n.length > 0) {
                                    window.setTimeout(function() {
                                        validateAltHost()
                                    }, 1e3)
                                } else {
                                    t("#alternative_host").parent().removeClass("has-error");
                                    t("#alternative_host").next().hide()
                                }
                                return false
                            });
                            t("#setting_recording_type").bind("change", function() {
                                var e = t("#setting_recording_type").prop("checked") || false;
                                if (e) {
                                    t(".recording-radio").removeClass("hideme")
                                } else {
                                    t(".recording-radio").addClass("hideme")
                                }
                            });
                            t("#zoom-setting #setting_option_requirereg").bind("change", function() {
                                var e = t("#zoom-setting #setting_option_requirereg").prop("checked") || false;
                                if (e && !t("#zoom-setting #meeting_type_normal").prop("checked")) {
                                    t("#zoom-setting #meeting_type_normal").prop("checked", true);
                                    t("#zoom-setting #meeting_type_normal").trigger("change")
                                }
                            });
                            t("#meeting_pwd").parent().removeClass("has-error");
                            t("#meeting_pwd").next().hide();
                            t("#zoom-setting [name=meeting_type]").bind("change", function() {
                                let e = t("#zoom-setting #meeting_type_pmi").prop("checked") || false;
                                if (e) {
                                    t("#zoom-setting #setting_option_requirereg").prop("checked", false).attr("checked", null);
                                    t("#zoom-setting .control-row.jbh").addClass("pmi")
                                } else {
                                    t("#zoom-setting .control-row.jbh").removeClass("pmi")
                                }
                                Et(true, true)
                            });
                            t("#zoom-setting #setting_option_jbh").bind("change", function() {
                                if (d && t("[name=meeting_type]:checked").val() === "pmi") {
                                    Et(true)
                                }
                                if (t(this).prop("checked")) {
                                    t("#zoom-setting #JBH_prior_start").prop("disabled", false).css("opacity", 1)
                                } else {
                                    t("#zoom-setting #JBH_prior_start").prop("disabled", true).css("opacity", .5)
                                }
                            })
                        },
                        onClose: function(e) {
                            t("#zoom-setting .modal-body").off("scroll");
                            t("#zoom-setting .submit").unbind("click");
                            t("#zoom-setting #setting_option_needpassword").unbind("change");
                            t("#zoom-setting #meeting_pwd").unbind("keyup");
                            t("#zoom-setting .schedule-for").unbind("change");
                            t("#zoom-setting #alternative_host").unbind("blur");
                            t("#zoom-setting #alternative_host").unbind("keyup");
                            t("#setting_recording_type").unbind("change");
                            t("#zoom-setting #setting_option_requirereg").unbind("change");
                            t("#zoom-setting [name=meeting_type]").unbind("change");
                            t("#zoom-setting #setting_option_jbh").unbind("change");
                            e.container.fadeOut("fast", function() {
                                e.overlay.fadeOut("fast", function() {
                                    t.modal.close();
                                    if (t("#zoom_schedule_button") && t("#zoom_schedule_button").is(":visible")) {
                                        t("#zoom_schedule_button").focus()
                                    } else {
                                        t(".ep-dp-calendar select[id$=\\.calendar]").focus()
                                    }
                                })
                            })
                        }
                    }))
                } else {
                    if (i.requireTracking || i.inputManualPwd) {
                        t.modal(t(C(i.requireTracking, i.inputManualPwd, i.pwdVoidable)), t.extend({}, {
                            overlayId: "zm-track-dialog-overlay",
                            containerId: "zm-track-dialog-container",
                            minHeight: 520,
                            escClose: true,
                            fixed: false,
                            persist: true,
                            minWidth: 670,
                            close: true,
                            overlayClose: false,
                            onShow: function(n) {
                                let s = t("#zoom-setting .password-type");
                                if (a && o) {
                                    t("#zoom-setting #meeting_pwd").val(o)
                                }
                                t("#zm-track-dialog-container #zoom-setting .submit").bind("click", function() {
                                    if (validatePwdInput() && validateTrackCodes()) {
                                        let n = t("#zoom-setting #meeting_pwd"),
                                            s = "schedule";
                                        let l = {
                                            scheduleTime: I(),
                                            trackfields: getTrackfieldValue(t("input[name=trackfield]")),
                                            timezone: V(),
                                            password: n.val() ? n.val().trim() : ""
                                        };
                                        if (a && n.is(":visible")) {
                                            if (i.pwdVoidable) {
                                                s = "saveOptionsAndQuickSchedule";
                                                l.mandatorypwd = true
                                            }
                                            if (n.val().trim() != o) {
                                                s = "saveOptionsAndQuickSchedule";
                                                l.changepwd = true
                                            }
                                        }
                                        h({
                                            type: s,
                                            info: l
                                        });
                                        t.modal.close();
                                        lt(e)
                                    }
                                });
                                t("#zoom-setting #setting_option_needpassword").bind("change", function() {
                                    var e = t("#zoom-setting #setting_option_needpassword").prop("checked") || false;
                                    if (e) {
                                        s.addClass("sel")
                                    } else {
                                        s.removeClass("sel")
                                    }
                                });
                                var l = i.trackfields;
                                if (l && l.length > 0) {
                                    t("#zm-track-dialog-container .trackingcodes > .trackitems").empty();
                                    t.each(l, function(e, i) {
                                        t("#zm-track-dialog-container .trackingcodes > .trackitems").append(x(i, ""));
                                        new ComboBox("trackitem" + i.id)
                                    })
                                }
                                t("#zoom-setting #meeting_pwd").bind("keyup", function() {
                                    if (t(this).val().trim()) {
                                        t(this).parent().removeClass("has-error");
                                        t("#zoom-setting #meeting_pwd").next().hide()
                                    }
                                })
                            },
                            onClose: function(e) {
                                t("#zm-track-dialog-container #zoom-setting .submit").unbind("click");
                                t("#zoom-setting #setting_option_needpassword").unbind("change");
                                t("#zoom-setting #meeting_pwd").unbind("keyup");
                                e.container.fadeOut("fast", function() {
                                    e.overlay.fadeOut("fast", function() {
                                        t.modal.close();
                                        if (t("#zoom_schedule_button") && t("#zoom_schedule_button").is(":visible")) {
                                            t("#zoom_schedule_button").focus()
                                        } else {
                                            t(".ep-dp-calendar select[id$=\\.calendar]").focus()
                                        }
                                    })
                                })
                            }
                        }))
                    } else {
                        h({
                            type: "schedule",
                            info: {
                                scheduleTime: I(),
                                timezone: V()
                            }
                        });
                        lt(e)
                    }
                }
            } else {
                ft()
            }
        })
    }

    function q(e) {
        chrome.extension.sendMessage({
            type: "getZoomToken"
        }, function(i) {
            var n = i.token;
            if (n) {
                if (i.requireTracking) {
                    t.modal(t(T()), t.extend({}, {
                        overlayId: "zm-track-dialog-overlay",
                        containerId: "zm-track-dialog-container",
                        minHeight: 520,
                        escClose: true,
                        fixed: false,
                        persist: true,
                        minWidth: 670,
                        close: true,
                        overlayClose: false,
                        onShow: function(n) {
                            t("#zm-track-dialog-container #zoom-setting .submit").bind("click", function() {
                                if (validateTrackCodes()) {
                                    h({
                                        type: "schedulepac",
                                        info: {
                                            trackfields: getTrackfieldValue(t("#zm-track-dialog-container input[name=trackfield]"))
                                        }
                                    });
                                    t.modal.close();
                                    lt(e)
                                }
                            });
                            var o = i.trackfields;
                            if (o && o.length > 0) {
                                t("#zm-track-dialog-container .trackingcodes > .trackitems").empty();
                                t.each(o, function(e, i) {
                                    t("#zm-track-dialog-container .trackingcodes > .trackitems").append(x(i, "pac"));
                                    new ComboBox("pactrackitem" + i.id)
                                })
                            }
                        },
                        onClose: function(e) {
                            t("#zm-track-dialog-container #zoom-setting .submit").unbind("click");
                            e.container.fadeOut("fast", function() {
                                e.overlay.fadeOut("fast", function() {
                                    t.modal.close();
                                    if (t("#zoom_schedule_button") && t("#zoom_schedule_button").is(":visible")) {
                                        t("#zoom_schedule_button").focus()
                                    } else {
                                        t(".ep-dp-calendar select[id$=\\.calendar]").focus()
                                    }
                                })
                            })
                        }
                    }))
                } else {
                    h({
                        type: "schedulepac",
                        info: {
                            trackfields: ""
                        }
                    });
                    lt(e)
                }
            } else {
                ft()
            }
        })
    }

    function D() {
        var e = false;
        var i = t("[id$=\\.save_top] .goog-imageless-button-content");
        if (i.data("click-event-registered")) {
            e = true
        }
        return e
    }

    function E() {
        t("#zoom_schedule_button_wrapper").show();
        rt()
    }

    function M(t) {
        t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var e = new RegExp("[\\?&]" + t + "=([^&#]*)"),
            i = e.exec(location.search);
        return i == null ? "" : decodeURIComponent(i[1].replace(/\+/g, " "))
    }

    function N() {
        var e = t("#wvQeg");
        if (e && e.length) return true;
        return false
    }

    function I() {
        var t = A();
        if (t) {
            t = toISOString(t)
        } else {
            t = ""
        }
        return t
    }

    function A() {
        var t;
        var e = l.parseTime(l.getStartTimeNode().val());
        var i = l.parseStartDate();
        if (i[0] !== -1 && e[0] !== -1) {
            year = paddingLeft(i[0], 4);
            month = paddingLeft(i[1], 2);
            day = paddingLeft(i[2], 2);
            hour = paddingLeft(e[0], 2);
            minute = paddingLeft(e[1], 2);
            t = new Date(year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":00.000Z")
        }
        return t
    }

    function S(t) {
        let e = t.split("/")[0];
        let i = L(e);
        return toISOString(i)
    }

    function F(t) {
        let e = t.split("/");
        let i = L(e[1]) - L(e[0]);
        return i / 6e4
    }

    function L(t) {
        let e = [0, 4, 6, 11, 13, 15],
            i = [];
        for (let n = 0; n < e.length - 1; n++) {
            i.push(t.substring(e[n], e[n + 1]))
        }
        let n = new Date(i[0] + "-" + i[1] + "-" + i[2] + ":" + i[3] + ":" + i[4] + "Z");
        if (O(n)) {
            return n
        } else {
            sendLogToBackend({
                msgType: 6,
                msg: {
                    msg: "Google calendar time format changed, unable to complete conversion!, method name: calendarTimeConver",
                    str: t,
                    res: n
                },
                operaType: 4
            })
        }
    }

    function O(t) {
        return t instanceof Date && !isNaN(t)
    }

    function $() {
        var e = 60;
        var i = l.getStartTimeNode();
        var n = l.getEndTimeNode();
        if (i.length && n.length) {
            var o, a, s, r;
            var d = l.parseTime(t.trim(i.val()));
            var c = l.parseTime(t.trim(n.val()));
            if (d[0] !== -1 && c[0] !== -1) {
                o = d[0];
                a = d[1];
                s = c[0];
                r = c[1];
                e = (s - o) * 60 + (r - a);
                if (e <= 0) e = 60;
                if (e > 1440) e = 1440
            }
        }
        return e
    }

    function V() {
        var t = l.getDefTimezone();
        var e = l.getStartTimezoneId().text() || "";
        var i = l.getEndTimezoneId().text() || "";
        if ("" == e && "" == i) {
            return R(t)
        } else if ("" != e) {
            return R(l.getStartTimezoneId().attr("timezoneid"))
        } else {
            return R(l.getEndTimezoneId().attr("timezoneid"))
        }
    }

    function R(e) {
        if (!e) {
            return ""
        }
        let i = /[a-zA-Z]+(\/[a-zA-Z_\-]+)+/;
        let n = i.exec(e);
        if (n && t.type(n) === "array") {
            let t = n[0];
            if (t !== e) {
                sendLogToBackend({
                    msgType: 4,
                    msg: {
                        msg: "Irregular time zone, method name: timezoneVerify",
                        timeZone: e,
                        res: t
                    }
                })
            }
            return t
        } else {
            if (e === "UTC") {
                return e
            }
            sendLogToBackend({
                msgType: 4,
                msg: {
                    msg: "Time zone error, method name: timezoneVerify",
                    timeZone: e
                }
            });
            return ""
        }
    }

    function H() {
        var e = t("#zoom_schedule_meeting_url");
        if (!e.length) {
            var i = l.getButtonsContainer();
            if (i.length) {
                e = t('<a id="zoom_schedule_meeting_url" role="button" class="btn-small btn-meeting hideme" target="_blank"></a>').appendTo(i)
            }
        }
        return e
    }

    function Y() {
        return t("#zoom_schedule_button")
    }

    function B() {
        return t("#zoom_schedulepac_button")
    }

    function G() {
        if (Y().length || B().length) {
            return true
        }
        return false
    }

    function Z() {
        var t = W();
        if (t) {
            result = true
        } else {
            result = G()
        }
        return result
    }

    function J() {
        var t = true;
        if (l.getTopicNode() && l.getTopicNode().length > 0) {
            t = false
        }
        return t
    }

    function U() {
        var t = l.getDescNode();
        if (t && t.length) {
            return true
        }
        return false
    }

    function W() {
        var t;
        var e = l.getDescNode();
        if (e.length) {
            t = X(l.getDescText())
        }
        var i = l.getWhereNode();
        if (!t && i.length) {
            t = X(i[0].getAttribute("data-initial-value"))
        }
        return t
    }

    function Q() {
        var t;
        var e = l.getPopupDescNode();
        if (e.length) {
            t = X(e.html().replace(/<br>/g, " "))
        }
        var i = $zoom("[jsname=bN97Pc] #xDtlDlgCt #xDetDlgLoc div>a");
        if (!t && i.length) {
            t = X(i.text())
        }
        return t
    }

    function K(t) {
        var e = t.find(".kMp0We.c44COb");
        if (e && e.length > 0) {
            return true
        }
        return false
    }

    function X(t) {
        t = t.replace(/&amp;/g, "&");
        var e;
        var i = new RegExp(`(?<!=)https?:\\/\\/[A-Za-z0-9_-]*\\.?zoom(${APPCONFIG.runEnv[1]})?\\.(us|com.cn|com)\\/[jsw]\\/(\\d+)(\\?\\w+=[^ <|\\n]*)?`, "ig").exec(t);
        if (i && i.length) {
            var n = i[0].replace("</a>", "");
            var o = i[3];
            e = {
                number: o,
                url: n.replace("<br>", ""),
                type: "meeting"
            }
        } else {
            var a = new RegExp(`https?:\\/\\/[A-Za-z0-9_-]*\\.?zoom(${APPCONFIG.runEnv[1]})?\\.(us|com.cn|com)\\/pac\\/join\\/(\\d+)(\\?\\w+=[^ |\\n]*)?`, "ig").exec(t);
            if (a && a.length) {
                e = {
                    number: a[3],
                    url: a[0].replace("<br>", ""),
                    type: "pac_meeting"
                }
            }
        }
        if (!e) {
            var s = /(?<!\=)https?:\/\/[A-Za-z0-9_-]*\.?zoomgov\.com\/[jsw]\/(\d+)(\?\w+=[^ <|\n]*)?/gi.exec(t);
            if (s && s.length) {
                e = {
                    number: s[1],
                    url: s[0].replace("<br>", ""),
                    type: "meeting"
                }
            } else {
                var a = /https?:\/\/[A-Za-z0-9_-]*\.?zoomgov\.com\/pac\/join\/(\d+)(\?\w+=[^ |\n]*)?/gi.exec(t);
                if (a && a.length) {
                    e = {
                        number: a[1],
                        url: a[0].replace("<br>", ""),
                        type: "pac_meeting"
                    }
                }
            }
        }
        return e
    }

    function tt(t) {
        et();
        var e = l.getDescNode();
        if (e.length) {
            var i = W();
            if (i) {
                var n = H();
                if (i.url) {
                    n.attr("href", b(i.url)).html("Join Zoom Meeting")
                }
                l.getGoogleVideoCallButtons().hide();
                dt(n)
            } else {
                nt(t)
            }
        }
    }

    function et() {
        var e = l.getWhereNode();
        if (e && e.length > 0) {
            e[0].dispatchEvent(new Event("input", {
                bubbles: true
            }))
        }
        var i = l.getSaveBtnNode();
        if (!i.data("click-event-registered")) {
            var n = l.getTopicNode();
            if (n.length) {
                n.attr("maxlength", 200)
            }
            i.data("click-event-registered", true);
            i.unbind("click").click(function() {
                var e = t(this);
                var i = W();
                if (i) {
                    var n = "1" === t("#YPCqFe #zm-usepmi").text();
                    var o = t("#YPCqFe #zm-quick2adv-number").text();
                    var a = n && o.length > 8 ? o : i.number;
                    var s = {
                        number: a,
                        zm_eid: t("#YPCqFe #zm-hidden-eid").text() || ""
                    };
                    s.event_baseid = it(s.zm_eid);
                    var r = l.getTopicNode();
                    if (r.length) {
                        t.extend(s, {
                            topic: r.val()
                        })
                    }
                    var d = A();
                    if (d) {
                        var c = $();
                        t.extend(s, {
                            startTime: toISOString(d),
                            duration: c
                        })
                    } else {
                        t.extend(s, {
                            startTime: "",
                            duration: 0
                        })
                    }
                    var m = l.isRepeat();
                    t.extend(s, {
                        isRepeat: m,
                        timezone: V(),
                        zoomrooms: l.getZoomRooms()
                    });
                    if (d || m) {
                        h({
                            type: "update",
                            info: s
                        });
                        document.querySelector("#zoom_edit_event_flag").innerHTML = "1"
                    }
                }
            })
        }
        t("[role=menuitem][jsname=j7LFlb] div[jsname=VkLyEc]").parent().unbind("click").click(function() {
            var t = W();
            if (t && t.number) {}
        })
    }

    function it(t) {
        let e = "";
        try {
            e = atob(t).split(" ")[0]
        } catch (e) {
            sendLogToBackend({
                msgType: 4,
                msg: {
                    msg: "convert Eid to Baseid failed, method name: convertEidToBaseid",
                    eid: t
                }
            })
        }
        return e
    }

    function nt(e) {
        if (Y().length) {
            return
        }
        var i = l.getButtonsContainer();
        i.addClass("zoom-button-container");
        var n = t("<button>", {
            id: "zoom_schedule_button",
            html: "Make it a Zoom Meeting",
            class: "btn-small btn-meeting"
        });
        if (t("#zoom_schedule_button_wrapper > #zoom_schedule_button").length > 0) {} else {
            i.append(t('<div id="zoom_schedule_button_wrapper"></div>').append(n))
        }
        var o = t("#zoom_schedule_button_wrapper");
        n.unbind("click").click(function() {
            var e = t(this);
            j()
        });
        chrome.extension.sendMessage({
            type: "supportPAC"
        }, function(e) {
            if (e.hasPac) {
                var i = t("<button>", {
                    id: "zoom_schedulepac_button",
                    html: "Personal Audio Conference",
                    class: "btn-small btn-pac"
                });
                o.append(i);
                i.unbind("click").click(function() {
                    q()
                })
            }
        });
        if (M("zoomrd") && (e || t("#YPCqFe").length && M("dates"))) {
            window.onload = function() {
                j()
            }
        } else {
            n.show()
        }
    }

    function ot() {
        var t = [];
        t.push('\t<div aria-hidden="true" class="tzcF6">');
        t.push('\t\t<span class="DPvwYc zmlogo" aria-hidden="true"></span>');
        t.push("\t</div>");
        t.push('\t<div class="j3nyw PxPKzc zoom-btn">');
        t.push("\t</div>");
        return t.join("")
    }

    function at() {
        var e = [];
        e.push('<div class="zoom-free-tooltip">');
        e.push('\t<div class="">');
        e.push('\t\t<span class="" aria-hidden="true">Your Zoom Basic plan has a 40-minute time limit on meetings with 3 or more participants. <a href="https://zoom.us/buy?plan=pro&from=pro&zcid=2166&utm_source=Product&utm_medium=email&utm_content=FreeToPro&utm_campaign=ChromeExtension" class="zoom-upgrade" target="_blank"> Upgrade now </a> to enjoy unlimited group meetings.</span>');
        e.push("\t</div>");
        e.push("</div>");
        if (t(".zoom-free-tooltip").length <= 0) {
            t("#xDaRaSel").after(e.join(""))
        }
    }

    function st(e) {
        var i = t(e).find("#tabEventDetails");
        if (i.children()[0]) {
            var n = t('<div id="zoom-video-sec" class="' + b(i.children()[0].className) + ' zoom-video-sec"></div>');
            t(i.children()[0]).after(n);
            n.append(ot());
            et();
            if (t("#hInySc0").text() === "" && t("#zm-quick2adv-desc").text() !== "") {
                l.setDescNodeValue(document.querySelector("#zm-quick2adv-desc").innerHTML)
            }
            var o = location.pathname.split("eventedit/");
            if (t("#zm-hidden-eid").length <= 0) {
                t("#YPCqFe").append('<div id="zm-hidden-eid" style="display:none;"></div>')
            }
            t("#YPCqFe #zm-quick2adv-number").empty();
            if (o && o.length == 2 && o[1].length > 48 && o[1].indexOf("duplicate/") == -1) {
                t("#YPCqFe #zm-hidden-eid").text(o[1])
            } else {
                t("#YPCqFe #zm-hidden-eid").text("");
                if (o && o.length == 2 && o[1].indexOf("duplicate/") > -1) {
                    var a = W();
                    if (a && a.number) {
                        var s = t("#xRTCIn #xDetDlgVideo[data-details]").attr("data-details") || "";
                        var r = X(s);
                        if (r && r.number) {
                            t("#xRemRtcBu").trigger("click")
                        }
                        l.removeSession();
                        j()
                    }
                }
            }
            t("#YPCqFe #zm-usepmi").empty();
            if (check40MinDuration()) {
                chrome.extension.sendMessage({
                    type: "checkUserType"
                }, function(t) {
                    if (t.freeUser) {
                        at()
                    }
                })
            }
            var a = W();
            if (a) {
                var d = H();
                if (a.url) {
                    d.attr("href", b(a.url)).html("Join Zoom Meeting")
                }
                t("#zoom_schedule_meeting_url").show();
                dt(d)
            } else {
                var c = n.find(".zoom-btn");
                c.addClass("zoom-button-container");
                var m = t("<button>", {
                    id: "zoom_schedule_button",
                    html: "Make it a Zoom Meeting",
                    class: "btn-small btn-meeting"
                });
                if (t("#zoom_schedule_button_wrapper > #zoom_schedule_button").length > 0) {} else {
                    c.prepend(t('<div id="zoom_schedule_button_wrapper"></div>').prepend(m))
                }
                var u = t("#zoom_schedule_button_wrapper");
                m.unbind("click").click(function() {
                    var e = t("#xRTCIn #xDetDlgVideo[data-details]").attr("data-details") || "";
                    var i = X(e);
                    if (i && i.url) {
                        var n = H();
                        l.setWhereNodeValue(i.url);
                        var o = t("#xRTCIn a[href*='/script.google.com/']").attr("href") || "";
                        l.setDescNodeValue(i.url + "<br><br>" + '<a href="' + o + '" target="_blank">Joining Instructions</a>');
                        n.attr("href", i.url).html("Join Zoom Meeting");
                        t("#zoom_schedule_meeting_url").show();
                        t("#zoom_schedule_button_wrapper > *").hide();
                        t("#zoom_schedule_meeting_url").show();
                        if (t("#YPCqFe #zm-quick2adv-number").length <= 0) {
                            t("#YPCqFe").append('<div id="zm-quick2adv-number" style="display:none;">' + i.number + "</div>")
                        } else {
                            t("#YPCqFe #zm-quick2adv-number").text(i.number)
                        }
                    } else {
                        j(m)
                    }
                });
                chrome.extension.sendMessage({
                    type: "supportPAC"
                }, function(e) {
                    if (e.hasPac) {
                        var i = t("<button>", {
                            id: "zoom_schedulepac_button",
                            html: "Personal Audio Conference",
                            class: "btn-small btn-pac"
                        });
                        if (t("#zoom_schedule_button_wrapper > #zoom_schedulepac_button").length > 0) {} else {
                            u.append(i)
                        }
                        i.unbind("click").click(function() {
                            q(i)
                        })
                    }
                });
                if (M("zoomrd") && (t("#YPCqFe").length && M("dates"))) {
                    if (document.readyState === "complete") {
                        setTimeout(function() {
                            j()
                        }, 1e3)
                    } else {
                        window.onload = function() {
                            j()
                        }
                    }
                } else {
                    m.show()
                }
            }
        }
    }

    function lt(e) {
        e = e || t("#zoom_schedule_button");
        if (e.length) {
            e.prop("disabled", true);
            e.addClass("zoom-loading")
        }
    }

    function rt() {
        let e = t(".zoom-button-container .zoom-loading");
        if (e.length) {
            e.prop("disabled", false);
            e.removeClass("zoom-loading")
        }
    }

    function dt(e) {
        var i = W();
        if (i) {
            if (t("#zoom_schedule_meeting_url + i.icon-trash").length <= 0) {
                var n = t("#xRTCIn #xDetDlgVideo[data-details]").attr("data-details") || "";
                var o = X(n);
                if (o && o.number && o.number == i.number) {} else {
                    e.parent().append('<i class="icon-trash" title="Remove Zoom Meeting" aria-label="Remove Zoom Meeting"></i>')
                }
            }
            t("#zoom_schedule_meeting_url + i.icon-trash").unbind();
            t("#zoom_schedule_meeting_url + i.icon-trash").delegate("", "click", function(e) {
                if (i && i.number) {
                    let e = "1" === t("#YPCqFe #zm-usepmi").text();
                    let n = t("#YPCqFe #zm-quick2adv-number").text();
                    let o = e && n.length > 8 ? n : i.number;
                    let a = it(t("#YPCqFe #zm-hidden-eid").text() || "");
                    sendLogToBackend({
                        msgType: 2,
                        msg: {
                            msg: "user click the trash button to delete meeting",
                            meetingNumber: o,
                            baseid: a
                        },
                        operaType: 1
                    });
                    h({
                        type: "icon_delete",
                        info: {
                            number: o,
                            event_baseid: a
                        }
                    });
                    t("#YPCqFe #zm-usepmi").empty();
                    t("#YPCqFe #zm-quick2adv-number").empty()
                }
            })
        }
    }

    function ct(e) {
        l.removeSession();
        var i = l.getButtonsContainer();
        i.addClass("zoom-button-container");
        var n = t("<button>", {
            id: "zoom_schedulepac_button",
            html: "Personal Audio Conference",
            class: "btn-small btn-pac"
        });
        if (t("#zoom_schedule_button_wrapper > #zoom_schedulepac_button").length > 0) {
            n.unbind("click").click(function() {
                q()
            })
        }
        var o = t("<button>", {
            id: "zoom_schedule_button",
            html: "Make it a Zoom Meeting",
            class: "btn-small btn-meeting"
        });
        if (t("#zoom_schedule_button_wrapper > #zoom_schedule_button").length > 0) {} else {
            i.prepend(t('<div id="zoom_schedule_button_wrapper"></div>').prepend(o))
        }
        o.unbind("click").click(function() {
            var e = t("#xRTCIn #xDetDlgVideo[data-details]").attr("data-details") || "";
            var i = X(e);
            if (i && i.url) {
                var n = H();
                l.setWhereNodeValue(i.url);
                var o = t("#xRTCIn a[href*='/script.google.com/']").attr("href") || "";
                l.setDescNodeValue(i.url + "<br><br>" + '<a href="' + o + '" target="_blank">Joining Instructions</a>');
                n.attr("href", i.url).html("Join Zoom Meeting");
                t("#zoom_schedule_meeting_url").show();
                t("#zoom_schedule_button_wrapper > *").hide();
                t("#zoom_schedule_meeting_url").show();
                if (t("#YPCqFe #zm-quick2adv-number").length <= 0) {
                    t("#YPCqFe").append('<div id="zm-quick2adv-number" style="display:none;">' + i.number + "</div>")
                } else {
                    t("#YPCqFe #zm-quick2adv-number").text(i.number)
                }
            } else {
                j()
            }
        });
        t("#zoom_schedule_meeting_url").hide();
        t("#zoom_schedule_button_wrapper > *").show();
        t("#zoom_schedule_meeting_url + i.icon-trash").remove()
    }

    function mt(t) {
        return /^(?:(?:(?:https?):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(t)
    }

    function ut() {
        return R(l.getDefTimezone())
    }

    function pt() {
        var e = [];
        t("div[jsname=wU3vpb] div[jsname=ovr9Gb] div[jsname=ix0Hvc] div.gco0Sd").each(function(i, n) {
            if (t(this).is(":visible")) {
                e[i] = t(this).text()
            }
        });
        return e.join(",")
    }

    function ft() {
        if (!i && !t("#zm-login-dialog").length) {
            t("body").append(gt());
            e = t("#zm-login-dialog");
            i = e.get(0);
            n = e.find(".workemail");
            o = e.find(".sso-pannel");
            vt()
        }
        zt(i)
    }

    function vt() {
        t(document).on("keydown", function(t) {
            if (t.keyCode === 27 && e.attr("open") === "open") {
                t.preventDefault();
                wt(i)
            }
        });
        e.on("click", "a", function(t) {
            t.preventDefault();
            t.stopPropagation()
        });
        e.on("submit", "form", function(t) {
            t.preventDefault();
            t.stopPropagation()
        });
        e.on("click", ".close-btn", function(t) {
            t.stopPropagation();
            wt(i)
        });
        e.on("click", ".login_with_sso", function(t) {
            t.stopPropagation();
            kt(e);
            e.find(".sign-pannel").addClass("hideme");
            e.find(".sso-pannel").removeClass("hideme");
            e.find("input:visible").focus()
        });
        e.on("click", ".back-main", function(t) {
            t.stopPropagation();
            kt(e);
            e.find(".sign-pannel").removeClass("hideme");
            e.find(".sso-pannel").addClass("hideme");
            e.find(".btn-google-signin").focus()
        });
        e.on("click", ".manual-domain", function(t) {
            t.stopPropagation();
            kt(e);
            e.find(".manual").removeClass("hideme");
            e.find(".company").addClass("hideme");
            e.find("input:visible").focus()
        });
        e.on("click", ".company-domain", function(t) {
            t.stopPropagation();
            kt(e);
            e.find(".manual").addClass("hideme");
            e.find(".company").removeClass("hideme");
            e.find("input:visible").focus()
        });
        e.on("click", ".btn-google-signin", function(t) {
            t.stopPropagation();
            h({
                type: "signWithGoogleEvent"
            })
        });
        let a = n.find(".error-msg"),
            s;
        n.on("keyup", "input", function(i) {
            i.stopPropagation();
            if (s) {
                clearTimeout(s)
            }
            s = setTimeout(function() {
                if (isEmail(t("#zoom-input-email").val().trim()) && t("#zoom-input-password").val().length >= 6) {
                    e.find(".btn-workemail-signin").removeClass("disabled").attr("aria-disabled", "false")
                } else {
                    e.find(".btn-workemail-signin").addClass("disabled").attr("aria-disabled", "true")
                }
                if (a.css("display") !== "none") {
                    a.hide()
                }
                s = null
            }, 100)
        });
        n.on("click", ".btn-workemail-signin", function(e) {
            e.stopPropagation();
            if (n.lock) {
                return
            }
            var i = t(this),
                o = i.parent();
            var s = t("#zoom-input-email").val().trim(),
                l = t("#zoom-input-password").val();
            if (isEmail(s) && l.length >= 6) {
                i.addClass("inprogress");
                o.find(".busy").show();
                if (a.css("display") !== "none") {
                    a.hide()
                }
                h({
                    type: "workemailSigninEvent",
                    info: {
                        email: s,
                        password: l,
                        type: 100
                    }
                });
                n.lock = true
            }
        });
        let l, r = o.find(".continue > button"),
            d = o.find(".sso-msg");
        o.on("keyup", "input", function(t) {
            t.stopPropagation();
            if (l) {
                clearTimeout(l)
            }
            l = setTimeout(function() {
                let t = o.find("input:visible");
                if (t.val() && t.val().length > 0) {
                    if (t.attr("name") === "domain") {
                        if ("" != t.val().trim()) {
                            r.removeClass("disabled").attr("aria-disabled", "false")
                        } else {
                            r.addClass("disabled").attr("aria-disabled", "true")
                        }
                    }
                    if (t.attr("name") === "ssoemail") {
                        if (isEmail(t.val().trim())) {
                            r.removeClass("disabled").attr("aria-disabled", "false")
                        } else {
                            r.addClass("disabled").attr("aria-disabled", "true")
                        }
                    }
                } else {
                    r.addClass("disabled").attr("aria-disabled", "true")
                }
                if (d.text()) {
                    d.text("")
                }
                l = null
            }, 100)
        });
        o.on("click", ".continue>button", function(e) {
            e.stopPropagation();
            let i = t(this),
                n = o.find("#zoom-input-ssoemail"),
                a = o.find("#zoom-input-domain");
            if (n.is(":visible") && isEmail(n.val()) || a.is(":visible") && a.val()) {
                o.find(".sso-msg").text("");
                i.addClass("inprogress");
                o.find(".continue .busy").show();
                h({
                    type: "ssoSigninEvent",
                    info: {
                        email: n.is(":visible") ? n.val() : "",
                        domain: a.is(":visible") ? a.val() + `.zoom${APPCONFIG.runEnv[1]}.us` : ""
                    }
                })
            }
        })
    }

    function gt() {
        var t = `\n\t\t<dialog id="zm-login-dialog" class="zm-login-dialog zoom-dialog">\n\t\t\t<header class="modal-header">\n\t\t\t\t<button class="close close-btn" aria-describedby="myModalLabel" aria-label="close"> &times; </button>\n\t\t\t\t<h4 class="modal-title">Sign in to Zoom</h4>\n\t\t\t</header>\n\t\t\t<div class="modal-body">\n\t\t\t\t<p class="notification">${APPCONFIG.tips[10]}</p>\n\t\t\t\t<div class="btns-container sign-pannel">\n\t\t\t\t\t<button class="btn btn-google-signin">Sign In with Google</button>\n\t\t\t\t\t<div class="split-line">or</div>\n\t\t\t\t\t<form class="workemail" action="" autocomplete="off" novalidate="novalidate">\t\t\t\t\t\t\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<label for="zoom-input-email" class="sr-only">Email address</label>\n\t\t\t\t\t\t\t\t<input type="email" id="zoom-input-email" name="email" aria-required="true" class="form-control input" autocomplete="off" maxlength="128" placeholder="Email address" value="">\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<label for="zoom-input-password" class="sr-only">Password</label>\n\t\t\t\t\t\t\t\t<input type="password" id="zoom-input-password" name="password" aria-required="true" autocomplete="off" class="form-control input" maxlength="32" placeholder="Password">\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<div class="signin">\n\t\t\t\t\t\t\t\t\t<button class="btn btn-workemail-signin submit disabled" aria-disabled="true">Sign In</button>\n\t\t\t\t\t\t\t\t\t<i class="busy busy24" style="display:none;"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t<div class="error-msg alert-danger hideme" role="alert"></div>\n\t\t\t\t\t</form>\n\t\t\t\t\t<div class="sso login-type-link"><a class="login_with_sso" href="">Sign In with SSO</a></div>\n\t\t\t\t</div>\n\t\t\t\t<div class="btns-container sso-pannel hideme">\n\t\t\t\t\t<form class="sso-form" action="" autocomplete="off" novalidate="novalidate">\n\t\t\t\t\t\t<div class="company">\n\t\t\t\t\t\t\t<p class="operation-tip">Find company domain by email address</p>\n\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t<label for="zoom-input-ssoemail" class="sr-only">Email address</label>\n\t\t\t\t\t\t\t\t<input type="ssoemail" id="zoom-input-ssoemail" name="ssoemail" class="form-control input" aria-required="true" autocomplete="off" maxlength="64" placeholder="Email address">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="has-error help-block sso-msg" role="alert"></div>\n\t\t\t\t\t\t\t<div class="sso-type login-type-link"><a href="" class="manual-domain">Manually enter domain</a></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="manual hideme">\n\t\t\t\t\t\t\t<p class="operation-tip">Enter your company domain</p>\n\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t<label for="zoom-input-domain" class="sr-only">Company domain</label>\n\t\t\t\t\t\t\t\t<input type="text" id="zoom-input-domain" name="domain" class="form-control input" aria-required="true" maxlength="64" placeholder="Company domain" >\n\t\t\t\t\t\t\t\t<span class="suffix">.zoom.us</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="has-error help-block sso-msg" role="alert"></div>\n\t\t\t\t\t\t\t<div class="sso-type login-type-link"><a href="" class="company-domain">I don't know the company domain</a></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="form-group action">\n\t\t\t\t\t\t\t<div class="continue">\n\t\t\t\t\t\t\t\t<button class="btn btn-switch disabled" aria-disabled="true">Continue</button>\n\t\t\t\t\t\t\t\t<i class="busy busy24" style="display:none;"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="sso-back login-type-link">\n\t\t\t\t\t\t\t\t<a href="" class="back-main">Back</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</dialog>\n\t\t`;
        return t
    }

    function ht(t) {
        wt(i);
        if (t.msg) {
            alert(t.msg)
        } else {
            Tt(APPCONFIG.tips[11]);
            yt()
        }
    }

    function bt(t) {
        n.find(".btn-workemail-signin").removeClass("inprogress");
        n.find(".busy").hide();
        if (t.state === 1) {
            wt(i);
            Tt(APPCONFIG.tips[11]);
            yt()
        } else if (t.state === 2) {
            n.find(".error-msg").show().text(t.msg)
        } else if (t.state === 3) {
            if (t.msg) {
                n.find(".error-msg").show().text(t.msg)
            }
        }
        n.lock = false
    }

    function _t(t) {
        o.find(".continue>button").removeClass("inprogress");
        o.find(".continue .busy").hide();
        if (t.state === 1) {} else if (t.state === 2) {
            o.find("input:visible").focus();
            o.find(".sso-msg:visible").text(t.msg)
        } else if (t.state === 3) {}
    }

    function yt() {
        if (typeof xDiscCancelBu !== "undefined") {
            t(xDiscCancelBu).trigger("click")
        }
    }

    function kt(t) {
        t.find("input").val("").trigger("keyup");
        t.find(".error-msg").text("");
        t.find(".sso-msg").text("")
    }

    function zt(e) {
        if (e && !t(e).attr("open")) {
            e.showModal();
            t(e).addClass("show");
            t(e).find(".btn-google-signin").focus()
        }
    }

    function wt(i) {
        if (i && t(i).hasClass("show")) {
            t(i).removeClass("show");
            kt(e);
            e.find(".sign-pannel").removeClass("hideme");
            e.find(".sso-pannel").addClass("hideme");
            e.find(".manual").addClass("hideme");
            e.find(".company").removeClass("hideme");
            setTimeout(function() {
                i.close()
            }, 150)
        }
    }
    let xt, Ct;

    function Tt(t) {
        if (!(xt && xt.length)) {
            Pt()
        }
        xt.text(t);
        jt(xt);
        if (Ct) {
            clearTimeout(Ct);
            Ct = null
        }
        Ct = setTimeout(function() {
            qt(xt)
        }, 5e3)
    }

    function Pt() {
        var e = `\n\t\t<div id="zoom-toast"></div>\n\t\t`;
        t("body").append(e);
        xt = t("#zoom-toast")
    }

    function jt(t) {
        t.css({
            display: "block"
        });
        if (t.timeout) {
            clearTimeout(t.timeout);
            t.timeout = null
        }
        t.timeout = setTimeout(function() {
            t.addClass("show");
            t.timeout = null
        }, 10)
    }

    function qt(t) {
        t.removeClass("show");
        if (t.timeout) {
            clearTimeout(t.timeout);
            t.timeout = null
        }
        t.timeout = setTimeout(function() {
            t.css({
                display: "none"
            });
            t.timeout = null
        }, 200)
    }
    let Dt = null;

    function Et(e, i) {
        let n = false;
        let o = false;
        let a = c.zoom_config_pwdtype;
        if (t.inArray(a, ["1", "2"]) < 0) {
            a = "1"
        }
        let s, l;
        if (e) {
            s = !!t("#setting_option_jbh").prop("checked");
            l = t("[name=meeting_type]:checked").val() === "pmi"
        } else {
            s = c.zoom_config_jbh;
            l = c.zoom_config_pmi;
            Dt = null
        }
        let r = c.jbhLock,
            m = c.allPimLock;
        if (l) {
            let i = c.zoom_config_jbh_pwd;
            let a = !!c.zoom_config_all_pmi_pwd;
            if (d) {
                if (e) {
                    if (s) {
                        n = true
                    } else {
                        n = !!t("#setting_option_needpassword").prop("checked")
                    }
                } else {
                    if (s && r) {
                        n = true
                    } else if (i === null) {
                        n = s
                    } else {
                        n = !!i;
                        if (!n && s) {
                            n = true
                        }
                    }
                }
                if (s) {
                    o = r
                }
            } else if (a) {
                n = true;
                o = m
            } else {
                n = false;
                o = m;
                let t = c.allPmiPwd_default;
                if (t) {
                    n = true
                }
            }
        } else {
            n = !!c.zoom_config_one_time_pwd;
            o = c.oneTimeLock
        }
        if (i) {
            if (Dt !== null && !(r && l && s)) {
                n = Dt
            }
            Dt = !!t("#setting_option_needpassword").prop("checked")
        }
        t("#zoom-setting #setting_option_needpassword").prop("checked", n);
        t("[name=option_password_type][value=" + a + "]").prop({
            checked: true
        });
        if (o) {
            Nt(t(".requirepwd > label"), true)
        } else {
            Nt(t(".requirepwd > label"), false)
        }
        if (l && c.zoom_config_pmi_saved_pwd) {
            t("#zoom-setting #meeting_pwd").val(c.zoom_config_pmi_saved_pwd)
        } else {
            t("#zoom-setting #meeting_pwd").val("")
        }
        Mt(a, l)
    }

    function Mt(e, i) {
        let n = t("#zoom-setting #setting_option_needpassword").prop("checked") || false;
        let o = t("#zoom-setting .password-type");
        if (n) {
            o.addClass("sel")
        } else {
            o.removeClass("sel")
        }
        if ("2" == e) {
            o.addClass("manual")
        } else {
            o.removeClass("manual")
        }
        if (i) {
            o.addClass("pmi")
        } else {
            o.removeClass("pmi")
        }
    }

    function Nt(t, e) {
        if (e) {
            if (!t.closest(".control-row").hasClass("haslock")) {
                t.append(r).closest(".control-row").addClass("haslock");
                t.find("input").prop("disabled", true)
            }
        } else {
            t.find(".locked_by_admin").remove();
            t.closest(".control-row").removeClass("haslock");
            t.find("input").prop("disabled", false)
        }
    }

    function It() {
        let e = t("[name=meeting_type]:checked").val() === "pmi";
        let i = t("#zoom-setting #setting_option_needpassword").prop("checked");
        let n = {};
        let o = !!c.zoom_config_one_time_pwd,
            a = !!c.zoom_config_jbh_pwd,
            s = !!c.zoom_config_all_pmi_pwd;
        if (e) {
            if (d) {
                n.option_password4Schedule = o;
                n.option_password = i;
                n.option_password4PMI = s
            } else {
                n.option_password4Schedule = o;
                n.option_password = a;
                n.option_password4PMI = i
            }
        } else {
            n.option_password4Schedule = i;
            n.option_password = a;
            n.option_password4PMI = s
        }
        return n
    }

    function At() {
        let t;
        if (u) {
            t = `Zoom meeting has been deleted. You can recover this meeting within 7 days on <a href="${u}" class="zoom-trash" target="_blank"> Recently Deleted </a> page from Zoom Web. `
        } else {
            t = `Zoom meeting has been deleted. You can recover this meeting within 7 days on Recently Deleted page from Zoom Web. `
        }
        Lt(t)
    }
    let St, Ft;

    function Lt(t) {
        if (!(xt && xt.length)) {
            Ot()
        }
        St.find(".del-msg").html(t);
        jt(St);
        if (Ft) {
            clearTimeout(Ft);
            Ft = null
        }
        Ft = setTimeout(function() {
            qt(St)
        }, 1e4)
    }

    function Ot() {
        var e = `\n\t\t<div id="zoom-del-toast"><div class="del-msg"></div><button class="close" aria-label="close"> × </button></div>\n\t\t`;
        t("body").append(e);
        St = t("#zoom-del-toast");
        St.on("click", ".close", function(t) {
            t.stopPropagation();
            if (St.hasClass("show")) {
                qt(St);
                if (Ft) {
                    clearTimeout(Ft);
                    Ft = null
                }
            }
        })
    }

    function $t() {
        let e = c.authentication;
        p.selAuthLastVal = -1;
        if (e.support) {
            p.renderData = Wt(e.optionLists, c.updateAuthOptionItem);
            let {
                htmlText: t,
                selVal: i
            } = Jt(p.renderData);
            p.$authentication.html(t);
            Rt();
            Vt(i, e)
        } else {
            p.$authentication.html("").hide();
            t("#zoom-setting .control-row.watermark").html("").hide();
            t("#zoom-setting .control-row.audiomark").html("").hide()
        }
    }

    function Vt(e, i) {
        let n = t("#zoom-setting #setting_option_authentication");
        if (e > -1) {
            let i = t("#zoom-setting #sel_for_authentication");
            i.val(e);
            i.trigger("change")
        } else if (p.$authentication.find(".domain-info-field").length) {
            Zt(0, true)
        }
        let o = c.enableAuthentication;
        n.prop("checked", o);
        n.trigger("change");
        if (i.locked) {
            Nt(t("#zoom-setting .authentication > label"), true)
        }
        if (!p.renderData.length) {
            n.prop("checked", false);
            n.prop("disabled", true);
            n.parent().addClass("nooption");
            let e = (new Date).getTime();
            t("#zoom-setting .modal-body").on("scroll", function(t) {
                let i = (new Date).getTime();
                if (i - e > 1e3) {
                    Gt();
                    e = i
                }
            })
        }
    }

    function Rt() {
        t("#zoom-setting #setting_option_authentication").on("change", function() {
            let e = t(this).prop("checked");
            if (e) {
                p.$authentication.addClass("check");
                Yt(e)
            } else {
                p.$authentication.removeClass("check");
                Yt(e);
                Ht()
            }
        });
        t("#zoom-setting #sel_for_authentication").on("change", function() {
            let e = t(this).val();
            Ht();
            Zt(e, true)
        });
        p.$authentication.on("click", ".domain-info-field .edit-button", function(t) {
            t.stopPropagation();
            Qt()
        });
        p.$authentication.on("click", ".nooption", function(t) {
            t.stopPropagation();
            Bt()
        })
    }

    function Ht() {
        if (p.$authentication.hasClass("edit-domain-state")) {
            ee()
        }
    }

    function Yt(e) {
        if (e) {
            t("#zoom-setting .control-row.watermark").show();
            t("#zoom-setting .control-row.audiomark").show()
        } else {
            t("#zoom-setting .control-row.watermark").hide();
            t("#zoom-setting .control-row.audiomark").hide()
        }
    }

    function Bt() {
        let e = t("#zoom-setting .authentication .exception-message");
        if (e.is(":visible")) {
            Gt()
        } else {
            if (p.$authentication.position().top * 2 > t("#zoom-setting .modal-body").height()) {
                e.removeClass("reversal")
            } else {
                e.addClass("reversal")
            }
            jt(e);
            p.authExceptionTimeout = setTimeout(function() {
                qt(e);
                p.authExceptionTimeout = null
            }, 5e3)
        }
    }

    function Gt() {
        if (p.authExceptionTimeout) {
            clearTimeout(p.authExceptionTimeout);
            p.authExceptionTimeout = null;
            qt(t("#zoom-setting .authentication .exception-message"))
        }
    }

    function Zt(t, e) {
        let i = p.renderData[t];
        p.$authentication.find(".name").text(": " + i.name);
        if (i.type == "1") {
            let t = i.domain || "",
                e, n = 0,
                o;
            if (t.length > 84) {
                e = t.slice(0, 83) + "..."
            } else {
                e = t
            }
            n = t.split(/,|;/).length;
            if (n > 0) {
                o = `View/edit all ${n} domains`
            } else {
                o = "edit domain"
            }
            let a = `\n\t\t\t<span class="domain-info-text">${b(e)}</span><span class="edit-button">${o}</span>\n\t\t\t`;
            p.$authentication.find(".domain-info-field").html(a).addClass("eyeable")
        } else {
            p.$authentication.find(".domain-info-field").html("").removeClass("eyeable")
        }
        if (e) {
            let e = p.renderData[p.selAuthLastVal];
            if (e && e.del) {
                p.$authentication.find(".del-opt-prompt").show()
            } else {
                p.$authentication.find(".del-opt-prompt").hide()
            }
            p.selAuthLastVal = t
        }
    }

    function Jt(t) {
        let e = "",
            i = "",
            n = -1,
            o = "",
            a = t.length;
        if (a > 1) {
            i = '<div class="select-field"><select id="sel_for_authentication">';
            for (var s = 0; s < a; s++) {
                let o = t[s];
                i += `\n\t\t\t\t\t<option value="${s}">${b(o.name)}</option>\n\t\t\t\t`;
                if (o.default) {
                    e = ": " + b(o.name);
                    n = s
                }
            }
            i += "</select></div>";
            o = `\n\t\t\t\t<div class="domain-info-field"></div>\n\t\t\t\t${Ut()}\n\t\t\t`
        } else if (a == 1) {
            e = ": " + b(t[0].name);
            o = `\n\t\t\t\t<div class="domain-info-field"></div>\n\t\t\t\t${Ut()}\n\t\t\t`
        } else {
            o = '<div class="exception-message">This option is disabled since there is no options available for you to select. Please check your meeting settings or contact your admin.</div>'
        }
        let l = `\n\t\t\t<label class="checkbox-inline"><input type="checkbox" id="setting_option_authentication" name="setting_option_authentication" />\n\t\t\t\t<optext>Only authenticated users can join<span class="name">${e}</span></optext>\n\t\t\t</label>\n\t\t\t${i}\n\t\t\t${o}\n\t\t\t<div class="del-opt-prompt">${APPCONFIG.tips[13]}</div>\n\t\t`;
        return {
            htmlText: l,
            selVal: n
        }
    }

    function Ut() {
        return `\n\t\t\t<div class="edit-domain-cont">\n\t\t\t\t<div class="box">\n\t\t\t\t\t<p class="notification">${APPCONFIG.tips[12]}</p>\n\t\t\t\t\t<div class="input-cont">\n\t\t\t\t\t\t<textarea id="auth_domain_info" name="auth_domain_info" placeholder="" value="" aria-label=""></textarea>\n\t\t\t\t\t\t<span class="has-error help-block" style="display: none;">${APPCONFIG.errors[10]}</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="btns-cont">\n\t\t\t\t\t\t<button class="btn btn-Cancel">Cancel</button>\n\t\t\t\t\t\t<button class="btn btn-Save">Save</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t`
    }

    function Wt(t, e) {
        if (e) {
            let o = false;
            e.default = true;
            for (var i = 0, n = t.length; i < n; i++) {
                let n = t[i];
                if (n.default) {
                    t[i].default = false
                }
                if (n.id == e.id) {
                    t[i] = e;
                    o = true
                }
            }
            if (!o) {
                e.del = true;
                t.unshift(e)
            }
        }
        return t
    }

    function Qt() {
        p.$zmEditDomainModule = t("#zoom-setting .edit-domain-cont");
        Kt();
        if (t("#zoom-setting .authentication").hasClass("haslock")) {
            p.$zmEditDomainModule.addClass("haslocked");
            p.$zmEditDomainModule.find("#auth_domain_info").prop("disabled", true);
            p.$zmEditDomainModule.find(".btn-Save").remove()
        }
        Xt();
        p.$authentication.addClass("edit-domain-state");
        p.$zmEditDomainModule.find("#auth_domain_info").focus()
    }

    function Kt() {
        p.$zmEditDomainModule.on("click", ".btn-Cancel", function(t) {
            t.stopPropagation();
            ee()
        });
        p.$zmEditDomainModule.on("click", ".btn-Save", function(e) {
            e.stopPropagation();
            if (toolFun.validateEmail()) {
                te();
                ee()
            } else {
                t("#zoom-setting #auth_domain_info").focus()
            }
        });
        let e = null,
            i = p.$zmEditDomainModule.find(".btn-Save");
        p.$zmEditDomainModule.find("#auth_domain_info").keyup(function(t) {
            let n = this;
            if (e) {
                clearTimeout(e)
            }
            e = setTimeout(function() {
                toolFun.validateEmail();
                if (n.value !== n.originalValue) {
                    i.prop("disabled", false)
                } else {
                    i.prop("disabled", true)
                }
                e = null
            }, 500);
            return false
        })
    }

    function Xt() {
        let e = p.renderData[t("#zoom-setting #sel_for_authentication").val() || 0];
        if (e && e.domain) {
            let t = p.$zmEditDomainModule.find("#auth_domain_info");
            t.val(e.domain);
            t.get(0).originalValue = e.domain
        }
        p.$zmEditDomainModule.find(".btn-Save").prop("disabled", true)
    }

    function te() {
        let e = callateInputHandler(t("#zoom-setting #auth_domain_info").val());
        let i = t("#zoom-setting #sel_for_authentication").val() || 0;
        let n = p.renderData[i];
        if (n && n.domain) {
            n.domain = e;
            Zt(i)
        }
    }

    function ee() {
        p.$authentication.removeClass("edit-domain-state");
        p.$zmEditDomainModule.find("input").val("").trigger("keyup");
        toolFun.hideHasErrorMsg(t("#zoom-setting #auth_domain_info"))
    }

    function ie() {
        let e = p.renderData[t("#zoom-setting #sel_for_authentication").val() || 0];
        if (e && e.id) {
            return {
                name: e.name,
                type: e.type,
                id: e.id,
                domain: e.domain || undefined
            }
        }
        return ""
    }

    function ne() {
        if (p.$zmEditDomainModule) {
            let e = p.$zmEditDomainModule.find(".btn-Save");
            if (e.is(":visible") && !e.prop("disabled")) {
                toolFun.showHasErrorMsg(t("#zoom-setting #auth_domain_info"), APPCONFIG.errors[17]);
                return false
            }
        }
        return true
    }
})($zoom);