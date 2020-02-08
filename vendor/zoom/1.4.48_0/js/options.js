import APPCONFIG from "./config.js";
import COMMON from "./common.js";
$(function() {
    let e = COMMON.getZoomData(),
        t = $("#meeting_pwd");
    let o = `<a class="locked_by_admin" href="" aria-describedby="locktip" title="${APPCONFIG.tips[1]}"><i></i><span class="sr-only">Locked Option</span></a>`;
    let i = null;
    let n = false;
    let a;
    let r = null;
    let s, l;
    let c = -1;
    let p = $(".control-row.authentication"),
        d = $(".control-row.watermark"),
        u = $(".control-row.audiomark");
    try {
        n = e.scheduleDefaultLockOption.password === "true"
    } catch (e) {}
    _();

    function _() {
        if (!(parseInt(COMMON.getValue("dataVersion")) > 0)) {
            g("Updating Settings data online...", false, null, 5e3);
            COMMON.toSyncImmediate().done(function(e) {
                g("Network update data successfully!", false, null, 2e3);
                COMMON.saveValue("dataVersion", "1");
                f()
            }).fail(function() {
                g("Network update data failed!", true, null, 2e3);
                COMMON.saveValue("dataVersion", "1");
                f()
            })
        } else {
            f()
        }
    }

    function f() {
        m();
        z();
        V()
    }

    function m() {
        $(".meetingtype .pmi_txt1").html(APPCONFIG.tips[7]);
        $(".meetingtype .pmi_txt2").html(APPCONFIG.tips[8]);
        $("#locktip").html(APPCONFIG.tips[1]);
        if (APPCONFIG.envIndex !== 5) {
            $(".content-footer .controls").append(`\n\t\t\t\t<button id="setting_refresh" class="btn btn-refresh" title="Click the button to synchronize the latest Settings.">\n\t\t\t\t\t<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.51175 0.333344C3.43539 0.333344 0.110196 3.6594 0.00252797 7.79301C-0.106392 12.0135 3.31895 15.636 7.45541 15.6667H7.51175C9.58999 15.6667 11.4679 14.8106 12.82 13.4178C13.3571 12.8709 13.8166 12.2371 14.1772 11.5433C14.3437 11.2251 14.1997 10.8316 13.8717 10.6961L13.8241 10.6757C13.749 10.6437 13.6714 10.6297 13.595 10.6297C13.3797 10.6297 13.1731 10.7472 13.0692 10.953C12.775 11.5343 12.3931 12.0646 11.9437 12.5233C10.8044 13.6733 9.23945 14.3889 7.51175 14.3889C3.91489 14.3889 1.02412 11.2877 1.267 7.56301C1.47107 4.43884 3.92365 1.89351 6.98217 1.63412C7.1612 1.61879 7.33648 1.61112 7.51175 1.61112C9.27701 1.61112 10.8682 2.36501 12.0075 3.55334L13.8592 5.44445H11.6182C11.2588 5.44445 10.9797 5.73834 10.9922 6.11018C11.006 6.45645 11.3064 6.72223 11.647 6.72223H15.374C15.4504 6.72223 15.5368 6.70945 15.6131 6.67112C15.6495 6.65834 15.687 6.63279 15.7258 6.62001C15.7634 6.58168 15.7872 6.55612 15.8122 6.53057C15.8761 6.47945 15.9124 6.41557 15.9499 6.3389V6.32612C15.9887 6.24945 16 6.16001 16 6.08334V2.25001C16 1.89223 15.7133 1.61112 15.374 1.61112C15.3227 1.61112 15.2714 1.61751 15.2188 1.63157C14.9371 1.70312 14.748 1.97912 14.748 2.27684V4.55001C14.748 4.55001 12.7574 2.51834 12.646 2.41612C11.3052 1.12557 9.48984 0.333344 7.51175 0.333344Z" fill="#747487"/></svg>\n\t\t\t\t\t<span class="sr-only">Refresh Set</span>\n\t\t\t\t</button>\n\t\t\t`)
        }
    }
    var h;

    function g(e, t, o, i) {
        var n = $("#content_success_msg");
        if (t) {
            n.removeClass("alert-success").addClass("alert-danger")
        } else {
            n.addClass("alert-success").removeClass("alert-danger")
        }
        o = o || n;
        i = i || 5e3;
        o.html(e);
        var a = (parseInt($(document.body).outerWidth(true)) - n.outerWidth(true)) / 2;
        if (o === n) {
            o.css("left", a)
        }
        if (h) {
            window.clearTimeout(h)
        }
        o.fadeIn("slow");
        h = window.setTimeout(function() {
            o.fadeOut("slow")
        }, i)
    }

    function v(e) {
        if (e) {
            d.show();
            u.show()
        } else {
            d.hide();
            u.hide()
        }
    }

    function b() {
        var e = $("#setting_option_needpassword").prop("checked") || false;
        if (e) {
            $(".requirepwd").addClass("sel")
        } else {
            $(".requirepwd").removeClass("sel")
        }
    }

    function O() {
        var e = $("#setting_option_requirereg").prop("checked") || false;
        if (e && !$("#zoom-setting #meeting_type_normal").prop("checked")) {
            $("#meeting_type_normal").prop("checked", true);
            $("#meeting_type_normal").trigger("change")
        }
    }

    function M() {
        var e = $("#meeting_type_pmi").prop("checked") || false;
        if (e) {
            $(".pmi_txt2").show();
            $("#setting_option_requirereg").prop("checked", false).attr("checked", null);
            $(".requirepwd").addClass("show-input-pwd");
            $(".control-row.jbh").addClass("pmi")
        } else {
            $(".pmi_txt2").hide();
            $(".requirepwd").removeClass("show-input-pwd");
            $(".control-row.jbh").removeClass("pmi")
        }
    }

    function C() {
        let e = true;
        let t = $("#auth_domain_info");
        if (t.is(":visible") && $("#setting_option_authentication").prop("checked")) {
            if (!q(t.val())) {
                ne(t, APPCONFIG.errors[10]);
                e = false
            } else {
                ae(t)
            }
        }
        return e
    }

    function k() {
        let e = $("#alternative_host").val();
        if ($("#alternative_host").is(":visible") && e) {
            $("#alternative_host").val(w(e))
        }
    }

    function w(e) {
        let t = "";
        $.each($.trim(e).split(/[;,\n\r]+/), (e, o) => {
            if (e > 0) {
                t += ","
            }
            t += $.trim(o)
        });
        return t
    }

    function F() {
        var e = true;
        if ($("#alternative_host").is(":visible") && $("#alternative_host").val() != "") {
            if (!S($("#alternative_host").val())) {
                $("#alternative_host").parent().addClass("has-error");
                $("#alternative_host").focus().next().show();
                $("#alternative_host").next().text(APPCONFIG.tips[0]);
                e = false
            } else {
                $("#alternative_host").parent().removeClass("has-error");
                $("#alternative_host").next().hide()
            }
        }
        return e
    }

    function x(e, t) {
        var o = chrome.i18n.getMessage(e);
        if (t) {
            o = t[e].message
        }
        return o
    }

    function N() {
        var e = new XMLHttpRequest;
        e.onreadystatechange = function() {
            if (e.readyState == 4) {
                try {
                    var t = JSON.parse(e.responseText);
                    $(".content-header>p").text(x("setting_h1", t));
                    $(".video > span").text(x("setting_video", t));
                    $(".video .control-row .video-label").first().text(x("setting_video_host", t));
                    $(".video .control-row .video-label").last().text(x("setting_video_participant", t));
                    $(".video #option_video_host_on").next().text(x("setting_video_on", t));
                    $(".video #option_video_participant_on").next().text(x("setting_video_on", t));
                    $(".video #option_video_host_off").next().text(x("setting_video_off", t));
                    $(".video #option_video_participant_off").next().text(x("setting_video_off", t));
                    $(".audio > span").text(x("setting_audio", t));
                    $(".audio #option_audio_telephony").next().text(x("setting_audio_tel", t));
                    $(".audio #option_audio_voip").next().text(x("setting_audio_voip", t));
                    $(".options > span").text(x("setting_opts", t));
                    $(".options #setting_option_needpassword").next().text(x("setting_opts_requirepwd", t));
                    $(".options #setting_option_jbh").next().text(x("setting_opts_jbh", t));
                    $(".altnativehost > span").text(x("setting_opts_althost", t))
                } catch (e) {}
            }
        };
        e.open("GET", chrome.extension.getURL("/_locales/" + COMMON.getValue("zoom_locale") + "/messages.json"), true);
        e.send()
    }

    function y() {
        if (e && !!e["option_pmi_jbhpwd"] && $("[name=meeting_type]:checked").val() === "pmi" && $("#setting_option_jbh").prop("checked")) {
            if (!$("#setting_option_needpassword").prop("checked")) {
                $("#setting_option_needpassword").prop("checked", true).trigger("change")
            }
            if ($(".requirepwd > label .locked_by_admin").length > 0) {} else {
                $(".requirepwd > label").append(o).parent().addClass("haslock")
            }
            $("#setting_option_needpassword").prop("disabled", true)
        } else {
            $(".requirepwd > label").parent().removeClass("haslock");
            $(".requirepwd > label").find(".locked_by_admin").remove();
            $("#setting_option_needpassword").prop("disabled", false)
        }
    }

    function z() {
        if (!(e && e["audiopac"])) {
            $(".content-header > .topnav").hide()
        }
        var t;
        if (e) {
            t = e.lockedoptions
        }
        var o = !!COMMON.getValue("zoom_config_pmi");
        $("[name=meeting_type][value=" + (o ? "pmi" : "onetime") + "]").prop({
            checked: true
        });
        if (e && "0" !== e["PMI"]) {
            $(".meetingtype .pmi_number").text(e["PMI"]);
            if (o) {
                $(".pmi_txt2").show()
            }
        } else {
            $("[name=meeting_type][value=onetime]").prop({
                checked: true
            })
        }
        var i = COMMON.getValue("zoom_config_schedule_for");
        var n;
        if (e && e["assistants"]) {
            n = e["assistants"]
        }
        if (n && n.length > 0) {
            var r = $(".schedule-for")[0];
            r[0].setAttribute("data-email", e["email"] || "");
            r[0].setAttribute("data-pmi", e["PMI"] || "");
            $.each(n, function(e, t) {
                r[e + 1] = new Option(t.name, t.id);
                r[e + 1].setAttribute("data-email", t.email);
                r[e + 1].setAttribute("data-pmi", t.roomid);
                if (t.id == i) {
                    $(".schedule-for").val(i);
                    if ("000-000-000" !== t.roomid) {
                        $(".meetingtype .pmi_number").text(t.roomid)
                    } else {
                        $("[name=meeting_type][value=onetime]").prop({
                            checked: true
                        });
                        $(".meetingtype .pmi_number").text("")
                    }
                }
            })
        } else {
            $(".schedule").hide()
        }
        if (e && e["scheduleDefaultLockOption"] && "true" === e["scheduleDefaultLockOption"].usePMISchedule_locked) {
            $("[name=meeting_type][value=pmi]").prop({
                checked: true
            });
            G($(".meetingtype .control-row"), true)
        }
        var s = COMMON.getValue("zoom_config_video_host") || "on";
        var l = COMMON.getValue("zoom_config_video_participants") || "on";
        $("[name=option_video_host][value=" + s + "]").prop({
            checked: true
        });
        $("[name=option_video_participants][value=" + l + "]").prop({
            checked: true
        });
        if (t && t.hostVideo_locked) {
            G($(".video .video-controls-label:first"), true)
        }
        if (t && t.pVideo_locked) {
            G($(".video .video-controls-label:last"), true)
        }
        var c = COMMON.getValue("zoom_config_audio") || "both";
        if (e && !e["option_has3rd"]) {
            $(".audio>div.controls #option_audio_3rd").parent().remove();
            if ("other" == c) c = "both";
            $("#option_audio_both").next().text("Both")
        }
        if (e && e["option_noboth"]) {
            $(".audio>div.controls #option_audio_both").parent().remove();
            if ("both" == c) c = "telephony"
        }
        $("[name=option_audio][value=" + c + "]").prop({
            checked: true
        });
        if (t && t.audio_locked) {
            G($(".audio .controls[role=group]"), true)
        }
        var p = !!COMMON.getValue("zoom_config_jbh");
        $("#setting_option_jbh").prop("checked", p);
        if (!p) {
            $("#JBH_prior_start").prop("disabled", true).css("opacity", .5)
        }
        if (t && t.jbh_locked) {
            G($(".control-row.jbh"), true)
        }
        if (e && e["enableJBHPriorStartMeeting"]) {
            $(".control-row.jbh .prior-start-cont").addClass("showme");
            let e = COMMON.getJbhTimeMinutes();
            if (e) {
                JBH_prior_start.value = e
            }
        }
        E();
        var d = !!COMMON.getValue("zoom_config_mute_upon_entry");
        $("#setting_option_uponentry").prop("checked", d);
        if (t && t.mute_locked) {
            G($(".control-row.entry"), true)
        }
        var u = !!COMMON.getValue("zoom_config_waiting_room");
        $("#setting_option_waitingroom").prop("checked", u);
        if (t && t.waiting_room_locked) {
            G($(".control-row.waitingroom"), true)
        }
        H();
        if (e && e["option_enable_watermark"]) {
            var _ = !!COMMON.getValue("zoom_config_watermark");
            $("#setting_option_watermark").prop("checked", _);
            if (t && t.watermark_locked) {
                $("#setting_option_watermark").prop("checked", true);
                G($(".control-row.watermark"), true)
            }
        } else {
            $("#setting_option_watermark").parents("div.control-row").remove()
        }
        if (e && e["scheduleDefaultLockOption"] && "true" === e["scheduleDefaultLockOption"].audioWaterMark) {
            var f = !!COMMON.getValue("zoom_config_audiomark");
            $("#setting_option_audiomark").prop("checked", f);
            if ("true" === e["scheduleDefaultLockOption"].audioWaterMark_locked) {
                $("#setting_option_audiomark").prop("checked", true);
                G($(".control-row.audiomark"), true)
            }
        } else {
            $("#setting_option_audiomark").parents("div.control-row").remove()
        }
        if (e && e["option_haspublic_cal"]) {
            var m = !!COMMON.getValue("zoom_config_public_cal");
            $("#setting_option_public_cal").prop("checked", m);
            if (t && t.public_cal_locked) {
                G($(".control-row.pubcalendar"), true)
            }
        } else {
            $("#setting_option_public_cal").parents("div.control-row").remove()
        }
        if (e && e["recording"] && e["recording"].option_recording) {
            $("div.recording").removeClass("hideme");
            var h = COMMON.getValue("zoom_config_rectype") || 0;
            if (1 == h || 2 == h) {
                $("#setting_recording_type").prop("checked", true)
            } else {
                $("#setting_recording_type").prop("checked", false)
            }
            if (e && e["recording"].option_local_recording && e["recording"].option_cloud_recording) {
                if (!$("#setting_recording_type").prop("checked")) {
                    $(".recording-radio").hide()
                }
                if (2 == h) {
                    $("[name=option_rec_type][value=" + h + "]").prop({
                        checked: true
                    })
                } else {
                    $("[name=option_rec_type][value=1]").prop({
                        checked: true
                    })
                }
            } else if (e && e["recording"].option_local_recording) {
                $("#setting_recording_type").next().append(" on the local computer");
                $(".recording-radio").remove()
            } else {
                $("#setting_recording_type").next().append(" in the cloud");
                $(".recording-radio").remove()
            }
            if (t && t.autoRecordLocked) {
                G($(".recording > label"), true)
            }
        }
        var g = true;
        if (COMMON.getValue("zoom_config_joinurl") != null) {
            g = !!COMMON.getValue("zoom_config_joinurl")
        }
        $("#setting_option_joinurl").prop("checked", g);
        if (e && e["option_enable_reg"] === true) {
            if (e["scheduleDefaultLockOption"] && "true" === e["scheduleDefaultLockOption"].usePMISchedule_locked) {
                $("#setting_option_requirereg").prop({
                    disabled: true
                })
            } else if (COMMON.getValue("zoom_option_require_reg") === true) {
                $("#setting_option_requirereg").prop({
                    checked: true
                }).attr("checked", "checked").trigger("change")
            }
        } else {
            $(".requirereg").hide()
        }
        if (e) {
            if (e["alt_hosts"] === undefined) {
                $(".altnativehost").hide()
            } else {
                $("#alternative_host").val(COMMON.getValue("zoom_config_althost") || "")
            }
        } else {
            $(".altnativehost").hide()
        }
        $("#fixed_popup").prop("checked", !!COMMON.getValue("zoom_config_fixed_popup"));
        var v = parseInt(COMMON.getValue("zoom_config_pacindex") || "1", 10);
        if (isNaN(v) || v < 1 || v > 2) {
            v = 1;
            COMMON.saveValue("zoom_config_pacindex", "1")
        }
        if (e && e["audiopac"]) {
            a = e["audiopac"]
        }
        if (a && a.option_pac_enable) {
            var b = v - 1;
            if (a.acclist.length < 2) {
                $("#option_pac_acc2").parent().remove();
                b = 0;
                v = 1
            }
            $("[name=option_pac][value=" + v + "]").prop("checked", true);
            var O = a.acclist[b];
            var C = $(".pac").find(".pac-toll-numbers");
            $.each(O.toll_numbers, function(e, t) {
                C.append("<label>" + L(t) + "</label>")
            });
            $(".pac").find(".pac-mtg-number").text(O.meeting_number);
            if (O.did_numbers && O.did_numbers != "") {
                $(".pac").find(".pac-did-numbers").html("<label>" + L(O.did_numbers) + "</label>")
            } else {
                $(".pac").find(".pac-did-numbers").parent().hide()
            }
        }
        if (COMMON.getValue("zoom_config_fte") && parseInt(COMMON.getValue("zoom_options_tabid")) > 0) {
            $("#setting_submit").text("Save and Continue");
            $("#setting_cancel").hide();
            $("#setting_refresh").hide()
        } else {
            $("#setting_submit").text("Save Changes");
            $("#setting_cancel").show();
            $("#setting_refresh").show()
        }
        M()
    }

    function V() {
        $("body").on("click", "a", function(e) {
            e.preventDefault();
            e.stopPropagation()
        });
        $("#setting_option_needpassword").change(function() {
            b()
        });
        $("#setting_option_requirereg").change(function() {
            O()
        });
        $("[name=meeting_type]").change(function() {
            M();
            E(true, true)
        });
        $("#setting_option_jbh").change(function() {
            let e = $("[name=meeting_type]:checked").val() === "pmi";
            if (e && n) {
                E(true)
            }
            if ($(this).prop("checked")) {
                $("#JBH_prior_start").prop("disabled", false).css("opacity", 1)
            } else {
                $("#JBH_prior_start").prop("disabled", true).css("opacity", .5)
            }
        });
        $("#setting_recording_type").change(function() {
            var e = $("#setting_recording_type").prop("checked") || false;
            if (e) {
                $(".recording-radio").show()
            } else {
                $(".recording-radio").hide()
            }
        });
        $(".schedule-for").change(function() {
            var e = $(this).find("option:selected").attr("data-pmi");
            if ("0" !== e && "000-000-000" !== e) {
                $(".meetingtype .pmi_number").text(e)
            } else {
                $(".meetingtype .pmi_number").text("")
            }
            return false
        });
        let e = null;
        $("#alternative_host").keyup(function(t) {
            var o = $(this);
            var i = o.val();
            if (i.length > 0) {
                if (e) {
                    clearTimeout(e)
                }
                e = window.setTimeout(function() {
                    F();
                    e = null
                }, 500)
            } else {
                $("#alternative_host").parent().removeClass("has-error");
                $("#alternative_host").next().hide()
            }
            return false
        });
        $(".topnav").delegate("li[data-tab]", "click", function(e) {
            if (!F()) return;
            if (!$(this).hasClass("active")) {
                $(".topnav > li").removeClass("active");
                $(this).addClass("active");
                $(".content-body > form >div.tab-pane").hide();
                $(".content-body > form >div." + $(this).data("tab")).show()
            }
            e.preventDefault();
            e.stopPropagation()
        });
        $("[name=option_pac]").change(function() {
            var e = parseInt($(this).val(), 10) - 1;
            if (a && a.option_pac_enable) {
                var t = a.acclist[e];
                var o = $(".pac").find(".pac-toll-numbers").empty();
                $.each(t.toll_numbers, function(e, t) {
                    o.append("<label>" + L(t) + "</label>")
                });
                $(".pac").find(".pac-mtg-number").text(t.meeting_number);
                if (t.did_numbers && t.did_numbers != "") {
                    $(".pac").find(".pac-did-numbers").html("<label>" + L(t.did_numbers) + "</label>");
                    $(".pac").find(".pac-did-numbers").parent().show()
                } else {
                    $(".pac").find(".pac-did-numbers").parent().hide()
                }
            }
        });
        t.on("input", function() {
            if (t.parent().hasClass("has-error")) {
                t.parent().removeClass("has-error");
                t.next().hide()
            }
        });
        $("#setting_submit").click(function() {
            if (!COMMON.hasZoomRqToken()) {
                D();
                return
            }
            if ($("#setting_option_needpassword").prop("checked") && t.is(":visible")) {
                if ("" == t.val().trim()) {
                    t.parent().addClass("has-error");
                    t.next().show();
                    t.focus();
                    return
                }
                $("#option_manual").prop("checked", true)
            }
            if ($(".topnav").is(":visible") && $(".topnav li:last-child").hasClass("active")) {
                $(".topnav li:first-child").click()
            }
            let e = $("#setting_option_jbh").prop("checked");
            let o = $("[name=meeting_type]:checked").val() === "pmi";
            COMMON.saveValue("zoom_config_schedule_for", $(".schedule-for").val());
            COMMON.saveValue("zoom_config_pmi", o);
            COMMON.saveValue("zoom_config_jbh", e);
            COMMON.saveValue("zoom_config_mute_upon_entry", $("#setting_option_uponentry").prop("checked"));
            COMMON.saveValue("zoom_config_waiting_room", $("#setting_option_waitingroom").prop("checked"));
            COMMON.saveValue("zoom_config_public_cal", $("#setting_option_public_cal").is(":visible") && $("#setting_option_public_cal").prop("checked"));
            COMMON.saveValue("zoom_config_video_host", $("[name=option_video_host]:checked").val());
            COMMON.saveValue("zoom_config_video_participants", $("[name=option_video_participants]:checked").val());
            COMMON.saveValue("zoom_config_audio", $("[name=option_audio]:checked").val());
            COMMON.saveValue("zoom_config_pacindex", $("[name=option_pac]:checked").val() || "1");
            COMMON.saveValue("zoom_config_watermark", $("#setting_option_watermark").is(":visible") && $("#setting_option_watermark").prop("checked"));
            COMMON.saveValue("zoom_config_audiomark", $("#setting_option_audiomark").is(":visible") && $("#setting_option_audiomark").prop("checked"));
            COMMON.saveValue("zoom_config_joinurl", $("#setting_option_joinurl").prop("checked"));
            COMMON.saveValue("zoom_option_require_reg", $("#setting_option_requirereg").prop("checked"));
            let i = $("#JBH_prior_start");
            if (!o && e && i.is(":visible")) {
                COMMON.setJbhTimeMinutes(i.val())
            }
            var n = -1;
            var a = COMMON.getZoomData();
            if ($("#setting_recording_type").is(":visible")) {
                if ($("#setting_recording_type").prop("checked")) {
                    if (a && a["recording"].option_local_recording && a["recording"].option_cloud_recording) {
                        n = $("[name=option_rec_type]:checked").val()
                    } else if (a && a["recording"].option_local_recording) {
                        n = 1
                    } else {
                        n = 2
                    }
                } else {
                    n = 0
                }
            }
            COMMON.saveValue("zoom_config_rectype", n);
            COMMON.saveValue("zoom_config_fixed_popup", $("#fixed_popup").is(":visible") && $("#fixed_popup").prop("checked"));
            let r = J();
            let s = $("#setting_option_authentication").is(":visible") && $("#setting_option_authentication").prop("checked"),
                l;
            COMMON.saveValue("enableAuthentication", s);
            if (s) {
                l = ue();
                if (l) {
                    COMMON.setUpdateAuthOptionItem(l)
                }
            }
            if (!F()) return false;
            k();
            var c = {};
            c.zoom_config_schedule_for = $(".schedule-for").val();
            c.zoom_config_pmi = o;
            c.zoom_config_jbh = e;
            c.public_cal = $("#setting_option_public_cal").is(":visible") && $("#setting_option_public_cal").prop("checked");
            c.mute_upon_entry = $("#setting_option_uponentry").prop("checked");
            c.waiting_room = $("#setting_option_waitingroom").prop("checked");
            c.zoom_config_video_host = $("[name=option_video_host]:checked").val();
            c.zoom_config_video_participants = $("[name=option_video_participants]:checked").val();
            c.zoom_config_audio = $("[name=option_audio]:checked").val();
            c.zoom_config_pacindex = $("[name=option_pac]:checked").val();
            c.record_type = n;
            c.zoom_config_watermark = $("#setting_option_watermark").is(":visible") && $("#setting_option_watermark").prop("checked");
            c.zoom_config_audiomark = $("#setting_option_audiomark").is(":visible") && $("#setting_option_audiomark").prop("checked");
            c.zoom_config_alternativehost = $("#alternative_host").val();
            c.zoom_config_fixed_popup = $("#fixed_popup").is(":visible") && $("#fixed_popup").prop("checked");
            c.zoom_config_joinurl = $("#setting_option_joinurl").prop("checked");
            c.require_reg = $("#setting_option_requirereg").prop("checked");
            c.enableAuthentication = s;
            c.updateAuthOptionItem = JSON.stringify(COMMON.getUpdateAuthOptionItem());
            Object.assign(c, r);
            if (t.is(":visible")) {
                c.pmi_saved_pwd = t.val().trim()
            } else {
                c.pmi_saved_pwd = COMMON.getValue("zoom_config_pmi_saved_pwd")
            }
            let p = $("#setting_submit");
            p.addClass("loading");
            p.add("#setting_refresh").prop("disabled", true);
            if (COMMON.getValue("zoom_config_fte") && parseInt(COMMON.getValue("zoom_options_tabid")) > 0) {
                COMMON.saveZoomSetting(c, function() {
                    COMMON.saveValue("zoom_config_fte", false);
                    COMMON.saveValue("zoom_config_althost", $("#alternative_host").val());
                    if (t.is(":visible")) {
                        COMMON.saveValue("zoom_config_pmi_saved_pwd", t.val().trim())
                    }
                    chrome.tabs.update(parseInt(COMMON.getValue("zoom_options_tabid")), {
                        url: COMMON.getGoogleCalendarUrl()
                    }, function(e) {})
                }, function(e) {
                    $("#alternative_host").parent().addClass("has-error");
                    $("#alternative_host").focus().next().text(e.errorMessage);
                    $("#alternative_host").focus().next().show()
                }, function() {
                    D()
                }, function() {
                    j()
                })
            } else {
                COMMON.saveZoomSetting(c, function() {
                    COMMON.saveValue("zoom_config_althost", $("#alternative_host").val());
                    if (t.is(":visible")) {
                        COMMON.saveValue("zoom_config_pmi_saved_pwd", t.val().trim())
                    }
                    g("Your settings have been saved.")
                }, function(e) {
                    $("#alternative_host").parent().addClass("has-error");
                    $("#alternative_host").focus().next().text(e.errorMessage);
                    $("#alternative_host").focus().next().show()
                }, function() {
                    D()
                }, function() {
                    j()
                })
            }
            return false
        });
        $("#setting_cancel").click(function() {
            chrome.tabs.getCurrent(function(e) {
                chrome.tabs.remove(e.id, function() {})
            });
            return false
        });
        $("#setting_refresh").on("click", function(e) {
            e.stopPropagation();
            let t = $(this);
            if (!t.hasClass("loading")) {
                t.addClass("loading");
                t.add("#setting_submit").prop("disabled", true);
                I()
            }
        });
        $(":checkbox").click(function() {
            $(this).attr("checked", !$(this).attr("checked"))
        });
        $(":radio").click(function() {
            var e = $(this).attr("name");
            $("[name=" + e + "]").not(this).attr("checked", false);
            $(this).attr("checked", true)
        })
    }

    function D() {
        let e = parseInt(COMMON.getValue("zoom_login_req_option_tabid"));
        let t = parseInt(COMMON.getValue("zoom_popup_tabpage_tabid"));
        if (!(isNaN(e) || isNaN(t))) {
            chrome.tabs.update(t, {
                active: true
            }, function() {
                if (chrome.runtime.lastError) {
                    P()
                }
            })
        } else {
            P()
        }
    }

    function P() {
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function(e) {
            let t = e[0].id;
            chrome.tabs.create({
                url: chrome.extension.getURL("popup.html"),
                active: true
            }, function(e) {
                COMMON.saveValue("zoom_login_req_option_tabid", t);
                COMMON.saveValue("zoom_popup_tabpage_tabid", e.id)
            })
        })
    }

    function I() {
        if (COMMON.hasZoomRqToken()) {
            COMMON.toSyncImmediate().done(function(e) {
                if (e.status && $.type(e.result) === "object") {
                    window.location.reload()
                } else {
                    A();
                    g(APPCONFIG.errors[7], true)
                }
            }).fail(function() {
                A();
                g(APPCONFIG.errors[7], true)
            })
        } else {
            A();
            D()
        }
    }

    function A() {
        let e = $("#setting_refresh");
        e.removeClass("loading");
        e.add("#setting_submit").prop("disabled", false);
        e.get(0).focus()
    }

    function j() {
        let e = $("#setting_submit");
        e.removeClass("loading");
        e.add("#setting_refresh").prop("disabled", false)
    }

    function q(e) {
        if (!e) return false;
        var t = $.trim(e).split(/[;,\n\r]+/);
        let o = true;
        for (var i in t) {
            e = $.trim(t[i]);
            o = o && T("a@" + e)
        }
        return o === true
    }

    function S(e) {
        var t = $.trim(e).split(/[;,\n\r]+/);
        if ("" == t) return true;
        let o = true;
        for (var i in t) {
            var n = $.trim(t[i]);
            o = o && T(n)
        }
        return o === true
    }

    function T(e) {
        return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(e)
    }

    function L(e) {
        return DOMPurify.sanitize(e, {
            SAFE_FOR_JQUERY: true
        })
    }

    function E(o, a) {
        let r = false;
        let s = false;
        let l = COMMON.getValue("zoom_config_pwdtype") || "1";
        if ($.inArray(l, ["1", "2"]) < 0) {
            l = "1"
        }
        let c, p;
        if (o) {
            c = !!$("#setting_option_jbh").prop("checked");
            p = $("[name=meeting_type]:checked").val() === "pmi"
        } else {
            c = !!COMMON.getValue("zoom_config_jbh");
            p = !!COMMON.getValue("zoom_config_pmi");
            i = null
        }
        let d = false,
            u = false;
        try {
            d = e.scheduleDefaultLockOption.password_locked === "true";
            u = e.scheduleDefaultLockOption.password4PMI_locked === "true"
        } catch (e) {}
        if (p) {
            let e = COMMON.getValue("zoom_config_jbh_pwd");
            let t = !!COMMON.getValue("zoom_config_all_pmi_pwd");
            if (n) {
                if (o) {
                    if (c) {
                        r = true
                    } else {
                        r = !!$("#setting_option_needpassword").prop("checked")
                    }
                } else {
                    if (c && d) {
                        r = true
                    } else if (e === null) {
                        r = c
                    } else {
                        r = !!e
                    }
                }
                if (c) {
                    s = d
                }
            } else if (t) {
                r = true;
                s = u
            } else {
                r = false;
                s = u
            }
        } else {
            r = !!COMMON.getValue("zoom_config_one_time_pwd");
            try {
                s = e.scheduleDefaultLockOption.password4Schedule_locked === "true"
            } catch (e) {}
        }
        if (a) {
            if (i !== null && !(d && p && c)) {
                r = i
            }
            i = !!$("#setting_option_needpassword").prop("checked")
        }
        $("#setting_option_needpassword").prop("checked", r);
        $("[name=option_password_type][value=" + l + "]").prop({
            checked: true
        });
        if (s) {
            G($(".requirepwd > label"), true)
        } else {
            G($(".requirepwd > label"), false)
        }
        let _ = COMMON.getPmiSavedPwd();
        if (_) {
            t.val(_)
        }
        b()
    }

    function G(e, t) {
        if (t) {
            if (!e.closest(".control-row").hasClass("haslock")) {
                e.append(o).closest(".control-row").addClass("haslock");
                e.find("input").prop("disabled", true)
            }
        } else {
            e.find(".locked_by_admin").remove();
            e.closest(".control-row").removeClass("haslock");
            e.find("input").prop("disabled", false)
        }
    }

    function J() {
        let t = $("[name=meeting_type]:checked").val() === "pmi";
        let o = $("#setting_option_needpassword").prop("checked");
        let i = COMMON.getValue("zoom_config_pwdtype") || "1";
        if (!t && o) {
            i = $("[name=option_password_type]:checked").val()
        }
        COMMON.saveValue("zoom_config_pwdtype", i);
        let a = {
            zoom_config_pwdtype: i
        };
        let r = !!COMMON.getValue("zoom_config_one_time_pwd"),
            s = !!COMMON.getValue("zoom_config_jbh_pwd"),
            l = !!COMMON.getValue("zoom_config_all_pmi_pwd");
        let c = false;
        try {
            c = e.scheduleDefaultLockOption.password4PMI === "true"
        } catch (e) {}
        if (t) {
            if (n) {
                COMMON.saveValue("zoom_config_jbh_pwd", o);
                a.option_password4Schedule = r;
                a.option_password = o;
                a.option_password4PMI = l
            } else {
                COMMON.saveValue("zoom_config_all_pmi_pwd", o);
                a.option_password4Schedule = r;
                a.option_password = s;
                a.option_password4PMI = o
            }
        } else {
            COMMON.saveValue("zoom_config_one_time_pwd", o);
            a.option_password4Schedule = o;
            a.option_password = s;
            a.option_password4PMI = l
        }
        return a
    }

    function H() {
        if (!e) {
            return
        }
        let t = e.authentication;
        if (t.support) {
            r = K(t.optionLists, COMMON.getUpdateAuthOptionItem());
            let {
                htmlText: e,
                selVal: o
            } = X(r);
            p.html(e);
            B();
            R(o, t)
        } else {
            p.html("").hide();
            d.html("").hide();
            u.html("").hide()
        }
    }

    function R(e, t) {
        let o = $("#setting_option_authentication");
        if (e > -1) {
            sel_for_authentication.value = e;
            $("#sel_for_authentication").trigger("change")
        } else if (p.find(".domain-info-field").length) {
            Q(0, true)
        }
        let i = !!COMMON.getValue("enableAuthentication");
        o.prop("checked", i);
        o.trigger("change");
        if (t.locked) {
            G($(".authentication > label"), true)
        }
        if (!r.length) {
            o.prop("checked", false);
            o.prop("disabled", true);
            o.parent().addClass("nooption");
            let e = (new Date).getTime();
            $("body").on("scroll", function(t) {
                let o = (new Date).getTime();
                if (o - e > 1e3) {
                    Y();
                    e = o
                }
            })
        }
    }

    function B() {
        $("#setting_option_authentication").on("change", function() {
            let e = $(this).prop("checked");
            if (e) {
                p.addClass("check");
                v(e)
            } else {
                p.removeClass("check");
                v(e)
            }
        });
        $("#sel_for_authentication").on("change", function() {
            let e = $(this).val();
            Q(e, true)
        });
        p.on("click", ".domain-info-field .edit-button", function(e) {
            e.stopPropagation();
            ee()
        });
        p.on("click", ".nooption", function(e) {
            e.stopPropagation();
            W()
        })
    }
    var U = $(".authentication .exception-message"),
        Z;

    function W() {
        if (U.is(":visible")) {
            Y()
        } else {
            le(U);
            Z = setTimeout(function() {
                ce(U);
                Z = null
            }, 5e3)
        }
    }

    function Y() {
        if (Z) {
            clearTimeout(Z);
            Z = null;
            ce(U)
        }
    }

    function Q(e, t) {
        let o = r[e];
        p.find(".name").text(": " + o.name);
        if (o.type == "1") {
            let e = o.domain || "",
                t, i = 0,
                n;
            if (e.length > 84) {
                t = e.slice(0, 83) + "..."
            } else {
                t = e
            }
            i = e.split(/,|;/).length;
            if (i > 0) {
                n = `View/edit all ${i} domains`
            } else {
                n = "edit domain"
            }
            let a = `\n\t\t\t<span class="domain-info-text">${L(t)}</span><span class="edit-button">${n}</span>\n\t\t\t`;
            p.find(".domain-info-field").html(a).addClass("eyeable")
        } else {
            p.find(".domain-info-field").html("").removeClass("eyeable")
        }
        if (t) {
            let t = r[c];
            if (t && t.del) {
                p.find(".del-opt-prompt").show()
            } else {
                p.find(".del-opt-prompt").hide()
            }
            c = e
        }
    }

    function X(e) {
        let t = "",
            o = "",
            i = -1,
            n = "",
            a = e.length;
        if (a > 1) {
            o = '<div class="select-field"><select id="sel_for_authentication">';
            for (var r = 0; r < a; r++) {
                let n = e[r];
                o += `\n\t\t\t\t\t<option value="${r}">${L(n.name)}</option>\n\t\t\t\t`;
                if (n.default) {
                    t = ": " + L(n.name);
                    i = r
                }
            }
            o += "</select></div>";
            n = '<div class="domain-info-field"></div>'
        } else if (a == 1) {
            t = ": " + L(e[0].name);
            n = '<div class="domain-info-field"></div>'
        } else {
            n = '<div class="exception-message">This option is disabled since there is no options available for you to select. Please check your meeting settings or contact your admin.</div>'
        }
        let s = `\n\t\t\t<label class="checkbox-inline"><input type="checkbox" id="setting_option_authentication" name="setting_option_authentication" />\n\t\t\t\t<optext>Only authenticated users can join<span class="name">${t}</span></optext>\n\t\t\t</label>\n\t\t\t${o}\n\t\t\t${n}\n\t\t\t<div class="del-opt-prompt">${APPCONFIG.tips[13]}</div>\n\t\t`;
        return {
            htmlText: s,
            selVal: i
        }
    }

    function K(e, t) {
        if (t) {
            let n = false;
            t.default = true;
            for (var o = 0, i = e.length; o < i; o++) {
                let i = e[o];
                if (i.default) {
                    e[o].default = false
                }
                if (i.id == t.id) {
                    e[o] = t;
                    n = true
                }
            }
            if (!n) {
                t.del = true;
                e.unshift(t)
            }
        }
        return e
    }

    function ee() {
        if (!l && !$("#edit_domain_dialog").length) {
            $("body").append(de());
            s = $("#edit_domain_dialog");
            l = s.get(0);
            te();
            if ($(".authentication").hasClass("haslock")) {
                s.addClass("haslocked");
                s.find("#auth_domain_info").prop("disabled", true);
                s.find(".btn-Save").remove()
            }
        }
        ie();
        re(l)
    }

    function te() {
        s.on("click", ".btn-Cancel", function(e) {
            e.stopPropagation();
            se(l)
        });
        $(document).on("keydown", function(e) {
            if (e.keyCode === 27 && s.attr("open") === "open") {
                e.preventDefault();
                se(l)
            }
        });
        s.on("click", ".btn-Save", function(e) {
            e.stopPropagation();
            if (C()) {
                oe();
                se(l)
            } else {
                $("#auth_domain_info").focus()
            }
        });
        let e = null,
            t = s.find(".btn-Save");
        s.find("#auth_domain_info").keyup(function(o) {
            let i = this;
            if (e) {
                clearTimeout(e)
            }
            e = setTimeout(function() {
                C();
                if (i.value !== i.originalValue) {
                    t.prop("disabled", false)
                } else {
                    t.prop("disabled", true)
                }
                e = null
            }, 500);
            return false
        })
    }

    function oe() {
        let e = w($("#auth_domain_info").val());
        let t = $("#sel_for_authentication").val() || 0;
        let o = r[t];
        if (o && o.domain) {
            o.domain = e;
            Q(t)
        }
    }

    function ie() {
        let e = r[$("#sel_for_authentication").val() || 0];
        if (e && e.domain) {
            let t = s.find("#auth_domain_info");
            t.val(e.domain);
            t.get(0).originalValue = e.domain
        }
        s.find(".btn-Save").prop("disabled", true)
    }

    function ne(e, t) {
        if (e.length) {
            e.parent().addClass("has-error");
            e.focus().next().text(t).show()
        }
    }

    function ae(e) {
        if (e.length) {
            e.parent().removeClass("has-error");
            e.next().text("").hide()
        }
    }

    function re(e) {
        if (e && !$(e).attr("open")) {
            e.showModal();
            $(e).addClass("show")
        }
    }

    function se(e) {
        if (e && $(e).hasClass("show")) {
            $(e).removeClass("show");
            pe(s);
            setTimeout(function() {
                e.close()
            }, 150)
        }
    }

    function le(e) {
        e.css({
            display: "block"
        });
        if (e.timeout) {
            clearTimeout(e.timeout);
            e.timeout = null
        }
        e.timeout = setTimeout(function() {
            e.addClass("show");
            e.timeout = null
        }, 10)
    }

    function ce(e) {
        e.removeClass("show");
        if (e.timeout) {
            clearTimeout(e.timeout);
            e.timeout = null
        }
        e.timeout = setTimeout(function() {
            e.css({
                display: "none"
            });
            e.timeout = null
        }, 150)
    }

    function pe(e) {
        e.find("input").val("").trigger("keyup");
        ae($("#auth_domain_info"))
    }

    function de() {
        return `\n\t\t\t<dialog id="edit_domain_dialog">\n\t\t\t\t<h4 class="title">View/edit domains</h4>\n\t\t\t\t<p class="notification">${APPCONFIG.tips[12]}</p>\n\t\t\t\t<div class="input-cont">\n\t\t\t\t\t<textarea id="auth_domain_info" name="auth_domain_info" placeholder="" value="" aria-label=""></textarea>\n\t\t\t\t\t<span class="has-error help-block" style="display: none;"></span>\n\t\t\t\t</div>\n\t\t\t\t<div class="btns-cont">\n\t\t\t\t\t<button class="btn btn-Cancel">Cancel</button>\n\t\t\t\t\t<button class="btn btn-Save">Save</button>\n\t\t\t\t</div>\n\t\t\t</dialog>\n\t\t`
    }

    function ue() {
        let e = r[$("#sel_for_authentication").val() || 0];
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
});