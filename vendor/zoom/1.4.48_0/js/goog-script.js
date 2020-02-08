var $zoom = jQuery.noConflict();

function check40MinDuration() {
    var e = false;
    try {
        if (document.querySelector("#xAlDaCbx[role=checkbox]").getAttribute("aria-checked") === "true") return true;
        if ($zoom("#xStDaIn").attr("data-date") !== $zoom("#xEnDaIn").attr("data-date")) {
            e = moreThan40Mins($zoom("input#xEnTiIn").attr("data-initial-value"), $zoom("input#xStTiIn").attr("data-initial-value"), true)
        } else {
            e = moreThan40Mins($zoom("input#xEnTiIn").attr("data-initial-value"), $zoom("input#xStTiIn").attr("data-initial-value"))
        }
    } catch (e) {
        sendLogToBackend({
            msgType: 4,
            msg: {
                msg: APPCONFIG.errors[11],
                filename: "goog-script.js",
                function: "check40MinDuration"
            }
        })
    }
    return e
}

function moreThan40Mins(e, t, o) {
    var n = false;
    var r = getMinutesByTime(e, o) - getMinutesByTime(t);
    if (r > 40) {
        n = true
    }
    return n
}

function getMinutesByTime(e, t) {
    var o = 0;
    var n = /(\d{1,2}):(\d{2})/gi.exec(e);
    if (n && n.length == 3) {
        o = parseInt(n[1], 10) * 60 + parseInt(n[2], 10);
        if (t) o = o + 24 * 60
    }
    return o
}

function triggerEvent(e, t) {
    var o = document.createEvent("HTMLEvents");
    o.initEvent(t, true, true);
    $zoom(e).get(0).dispatchEvent(o)
}

function triggerClickEvent(e) {
    triggerEvent(e, "click")
}

function triggerChangeEvent(e) {
    triggerEvent(e, "change")
}

function triggerMousedownEvent(e) {
    triggerEvent(e, "mousedown")
}

function triggerInputEvent(e) {
    triggerEvent(e, "input")
}

function getInputNode(e) {
    var t = $zoom("[id$=\\.location-label]"),
        o = "";
    if (t.length) {
        o = t.attr("id").split(".")[0]
    }
    return $zoom("#\\" + o + "\\." + e)
}

function paddingLeft(e, t) {
    e = e + "", need = t - e.length;
    if (need > 0) {
        for (var o = 0; o < need; o++) {
            e = "0" + e
        }
    }
    return e
}

function toISOString(e) {
    function t(e) {
        return e < 10 ? "0" + e : e
    }
    return e.getUTCFullYear() + "-" + t(e.getUTCMonth() + 1) + "-" + t(e.getUTCDate()) + "T" + t(e.getUTCHours()) + ":" + t(e.getUTCMinutes()) + ":" + t(e.getUTCSeconds()) + "Z"
}

function isMultiEmailsForAltHost(e) {
    var t = $zoom.trim(e).split(/[;,\n\r]+/);
    if ("" == t) return true;
    var o = true;
    for (var n in t) {
        var r = $zoom.trim(t[n]);
        o = o && isEmail(r)
    }
    return o === true
}

function isEmail(e) {
    return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(e)
}

function ajaxValidAltHost() {
    var e = true;
    if ($zoom("#alternative_host").is(":visible") && $zoom("#alternative_host").val() != "") {
        if ($zoom("#alternative_host").parent().hasClass("has-error")) e = false
    }
    return e
}

function validateAltHost() {
    var e = true;
    if ($zoom("#alternative_host").is(":visible") && $zoom("#alternative_host").val() != "") {
        if (!isMultiEmailsForAltHost($zoom("#alternative_host").val())) {
            $zoom("#alternative_host").parent().addClass("has-error");
            $zoom("#alternative_host").focus().next().show();
            $zoom("#alternative_host").focus().next().text(APPCONFIG.tips[0]);
            e = false
        } else {
            $zoom("#alternative_host").parent().removeClass("has-error");
            $zoom("#alternative_host").next().hide()
        }
    }
    return e
}

function validateTrackCodes() {
    var e = true;
    $zoom(".trackingcodes > .trackitems .trackfielderror").remove();
    if ($zoom(".trackingcodes > .trackitems").is(":visible")) {
        $zoom.each($zoom(".trackingcodes > .trackitems .combobox > input"), function(t, o) {
            if ("true" == $zoom(this).attr("require") && $zoom(this).val() == "") {
                $zoom(this).parent().addClass("has-error");
                $zoom(this).parent().parent().append('<div class="trackfielderror"><span style="color:red;">This field is required.</span></div>');
                e = false
            } else {
                $zoom(this).parent().removeClass("has-error")
            }
        })
    }
    return e
}

function validatePwdInput() {
    var e = true;
    if ($zoom("#meeting_pwd").is(":visible")) {
        if ("" == $zoom("#meeting_pwd").val().trim()) {
            $zoom("#meeting_pwd").parent().addClass("has-error");
            $zoom("#meeting_pwd").next().show();
            e = false
        } else {
            $zoom("#meeting_pwd").parent().removeClass("has-error");
            $zoom("#meeting_pwd").next().hide()
        }
    }
    return e
}

function collateUserInput() {
    let e = $zoom("#alternative_host").val();
    if ($zoom("#alternative_host").is(":visible") && e) {
        $zoom("#alternative_host").val(callateInputHandler(e))
    }
}

function callateInputHandler(e) {
    let t = "";
    $zoom.each($zoom.trim(e).split(/[;,\n\r]+/), (e, o) => {
        if (e > 0) {
            t += ","
        }
        t += $zoom.trim(o)
    });
    return t
}

function getTrackfieldValue(e) {
    var t = [];
    e.map(function() {
        if ($zoom(this).val().trim() != "") {
            t.push({
                id: $zoom(this).prev().html(),
                mtValue: $zoom(this).val()
            })
        }
    });
    if (t.length > 0) {
        return JSON.stringify(t)
    }
    return ""
}

function getDefLanguage() {
    var e = "en";
    var t = document.body.innerHTML;
    var o = t.match(/\[\\"locale\\",\\"(.*)\\\"],\[\\"format24HourTime\\"/);
    var n = o && o[1];
    if (n && n.indexOf("_") > 0) {
        e = n.split("_")[0]
    }
    return e
}

function getUserLanguage() {
    var e = "en";
    var t = document.body.innerHTML;
    var o = t.match(/\[\\"locale\\",\\"(.*)\\\"],\[\\"format24HourTime\\"/);
    var n = o && o[1];
    if (n && n.indexOf("_") > 0) {
        e = n.split("_")[0]
    }
    return e
}

function getCalendarHostEmail() {
    return $("p#xCalOwn").text()
}
let toolFun = {
    logForQueryDom(e) {
        sendLogToBackend({
            msgType: 6,
            msg: {
                msg: "Failed to query the Google calendar dom node: " + e,
                filename: "goog-script.js",
                function: "newui." + e
            },
            operaType: 2
        })
    },
    showHasErrorMsg(e, t) {
        if (e.length) {
            e.parent().addClass("has-error");
            e.focus().next().text(t).show()
        }
    },
    hideHasErrorMsg(e) {
        if (e.length) {
            e.parent().removeClass("has-error");
            e.next().text("").hide()
        }
    },
    isMultiEmailDomains(e) {
        if (!e) return false;
        var t = $zoom.trim(e).split(/[;,\n\r]+/);
        let o = true;
        for (var n in t) {
            e = $zoom.trim(t[n]);
            o = o && isEmail("a@" + e)
        }
        return o === true
    },
    validateEmail() {
        let e = true;
        let t = $zoom("#zoom-setting #auth_domain_info");
        if (t.is(":visible") && $zoom("#zoom-setting #setting_option_authentication").prop("checked")) {
            if (!this.isMultiEmailDomains(t.val())) {
                this.showHasErrorMsg(t, APPCONFIG.errors[10]);
                e = false
            } else {
                this.hideHasErrorMsg(t)
            }
        }
        return e
    }
};
let uiOperation = {
    getSaveBtnNode: function() {
        let e = $zoom("div[role='button'][jsname='x8hlje']");
        if (!e.length) {
            toolFun.logForQueryDom("getSaveBtnNode")
        }
        return e
    },
    getTopicNode: function() {
        let e = $zoom("div[jsname=GYcwYe] input");
        if (!e.length) {
            toolFun.logForQueryDom("getTopicNode")
        }
        return e
    },
    getVideoCallNode: function() {
        return null
    },
    setTopicNodeValue: function(e) {
        var t = this.getTopicNode();
        t.val(e);
        triggerInputEvent(t)
    },
    getDefTimezone: function() {
        let e = $zoom("#xTimezone");
        if (!e.length) {
            toolFun.logForQueryDom("getDefTimezone")
        }
        return e.text()
    },
    getStartDateNode: function() {
        let e = $zoom("div[jsname=iKdrbf] input[jsname=YPqjbf]:visible");
        if (!e.length) {
            toolFun.logForQueryDom("getStartDateNode")
        }
        return e
    },
    getStartTimeNode: function() {
        let e = $zoom("div[jsname=B4GDSd] input[jsname=YPqjbf]:visible");
        if (!e.length) {
            toolFun.logForQueryDom("getStartTimeNode")
        }
        return e
    },
    getEndDateNode: function() {
        let e = $zoom("div[jsname=NNrqNc] input[jsname=YPqjbf]:visible");
        if (!e.length) {
            toolFun.logForQueryDom("getEndDateNode")
        }
        return e
    },
    getEndTimeNode: function() {
        let e = $zoom("div[jsname=XCHdmd] input[jsname=YPqjbf]:visible");
        if (!e.length) {
            toolFun.logForQueryDom("getEndTimeNode")
        }
        return e
    },
    getStartTimezoneId: function() {
        let e = $zoom("div[jsname=L2QMlb] div[jsname=PH80Af]");
        if (!e.length) {
            toolFun.logForQueryDom("getStartTimezoneId")
        }
        return e
    },
    getEndTimezoneId: function() {
        let e = $zoom("div[jsname=L2QMlb] div[jsname=yxQRke]");
        if (!e.length) {
            toolFun.logForQueryDom("getEndTimezoneId")
        }
        return e
    },
    getRepeatNode: function() {
        let e = $zoom("div[jsname=T7keRc] div[jsname=d9BH4c] div[data-value][aria-selected=true]");
        if (!e.length) {
            toolFun.logForQueryDom("isRepeat")
        }
        return e
    },
    isRepeat: function() {
        let e = this.getRepeatNode().data("value");
        if (e) {
            return !!e[1]
        }
        return false
    },
    getGoogleVideoCallButtons: function() {
        var e = this.getButtonsContainer();
        return e.find("[jsname=mWZCyf]")
    },
    getButtonsContainer: function() {
        var e = $zoom("div.zoom-video-sec > .zoom-btn");
        if (!e.length || !e.is(":visible")) {
            var t = [];
            t.push('<div class="FrSOzf zoom-video-sec">');
            t.push('\t<div aria-hidden="true" class="tzcF6">');
            t.push('\t\t<span class="DPvwYc zmlogo" aria-hidden="true"></span>');
            t.push("\t</div>");
            t.push('\t<div class="j3nyw PxPKzc zoom-btn">');
            t.push("\t</div>");
            t.push("</div>");
            $zoom("[jsname=PAiuue][role=tabpanel] div.FrSOzf:eq(0)").after(t.join(""));
            return $zoom("div.zoom-video-sec > .zoom-btn")
        }
        return e
    },
    parseTime: function(e) {
        var t = $zoom("div[jsname=B4GDSd]:visible div[jsname=V68bde][role=listbox] > div");
        if (e && t.length > 0) {
            var o = t.find("> div");
            var n = o.length;
            if (n > 0 && n % 24 === 0) {
                var r = 60 / n * 24;
                for (var i = 0; i < o.length; i++) {
                    if ($zoom.trim($zoom(o[i]).text()) === e) {
                        var a = i * r;
                        var u = Math.floor(a / 60);
                        var s = a % 60;
                        return [u, s]
                    } else {
                        var l = /\d{2}/gi;
                        var m = e.match(l);
                        var d = 0;
                        if (m.length >= 1) {
                            d = parseInt(m[m.length - 1])
                        }
                        var v = e.replace(/:\d{2}/gi, ":00");
                        if ($zoom.trim($zoom(o[i]).text()) === v) {
                            var a = i * r + d;
                            var u = Math.floor(a / 60);
                            var s = a % 60;
                            return [u, s]
                        }
                    }
                }
            }
        }
        return [-1, -1]
    },
    parseStartDate: function() {
        var e = $zoom("div[jsname=iKdrbf] input[jsname=YPqjbf]").attr("data-date");
        var t = -1,
            o = -1,
            n = -1;
        var r = /(\d{4})(\d{2})(\d{2})/gi.exec(e);
        if (r && r.length === 4) {
            t = parseInt(r[1], 10);
            n = parseInt(r[2], 10);
            o = parseInt(r[3], 10)
        }
        return [t, n, o]
    },
    getWhereNode: function() {
        return $zoom("div[jsname=yNrILb] div[jsname=YPqjbf] input[jsname=YPqjbf][role=combobox]")
    },
    setWhereNodeValue: function(e) {
        var t = this.getWhereNode();
        var o = t[0].getAttribute("data-initial-value");
        if (o && o.length > 0) {
            o = o + ", " + e
        } else {
            o = e
        }
        triggerEvent(t, "focus");
        t[0].dispatchEvent(new Event("input", {
            bubbles: true
        }));
        t[0].focus();
        t[0].select();
        document.execCommand("inserttext", false, o);
        t[0].dispatchEvent(new Event("input", {
            bubbles: true
        }))
    },
    getDescNode: function() {
        let e = $zoom("#xDescIn div[jsname=yrriRe]");
        if (!e.length) {
            e = $zoom("#xDescIn div[contenteditable]")
        }
        return e
    },
    getPopupDescNode: function() {
        let e = $zoom("[jsname=bN97Pc] #xDtlDlgCt #xDetDlgDesc");
        return e
    },
    getDescText: function() {
        var e = this.getDescNode();
        return e.html().replace(/<br>/g, " ")
    },
    setDescNodeValue: function(e) {
        var t = "<br>" + "─".repeat(10);
        var o = "<br><br>" + "─".repeat(10);
        e = t + "<br><br>" + e.replace(/\r\n/g, "<br>") + o;
        var n = this.getDescNode();
        if (n.length) {
            var r = $zoom.trim(n.html());
            var i = e;
            if (r && "" != n.text()) {
                i = r + e
            }
            triggerEvent(n, "focus");
            n[0].innerHTML = i;
            n[0].dispatchEvent(new Event("paste"));
            n.parents("[jsname=NorrI]").addClass("CDELXb")
        } else {
            toolFun.logForQueryDom("setDescNodeValue")
        }
    },
    removeSession: function() {
        var e = this.getWhereNode();
        if (e.length > 0) {
            e[0].dispatchEvent(new Event("input", {
                bubbles: true
            }));
            e[0].focus();
            e[0].select();
            document.execCommand("inserttext", false, this.removeZmSession());
            e[0].dispatchEvent(new Event("input", {
                bubbles: true
            }))
        }
        var t = this.getDescNode();
        if (t.length > 0) {
            t[0].innerHTML = this.removeZmDesc(t[0].innerHTML);
            t[0].dispatchEvent(new Event("paste"))
        }
    },
    removeZmSession: function() {
        var e = this.getWhereNode().val();
        e = e.replace(/[ ,;]?https:\/\/.*\/[jsw]\/(\d+)(\?\w+=[^ ,;]*)?/g, "");
        return e
    },
    removeZmDesc: function(e) {
        let t = /(?:\<br\>)?\u2500{10}[\w\W]*(?=\<br\>\u2500{10})\<br\>\u2500{10}/;
        return e.replace(t, "")
    },
    getZoomRooms: function() {
        var e = [];
        $zoom(".ilbnVd div[jsname=vnuzGe] .smD7sb>span:visible").each(function(t, o) {
            e[t] = $zoom(this).text()
        });
        return e.join(",")
    }
};