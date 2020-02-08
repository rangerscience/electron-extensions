import APPCONFIG from "./config.js";
import COMMON from "./common.js";
$(function() {
    $("#content").delegate("a", "click", function(e) {
        e.stopPropagation();
        e.preventDefault()
    });
    $("#content").on("submit", "form", function(e) {
        e.preventDefault();
        e.stopPropagation()
    });
    var e = $("#header_container");
    var n = $("#content_container .btn-content");
    var t = $("#footer_container");
    var i = $("#content_container .sec-sign");
    var o = $("#loading");

    function s() {
        var e = new XMLHttpRequest;
        e.onreadystatechange = function() {
            if (e.readyState == 4) {
                try {
                    var n = JSON.parse(e.responseText);
                    $(".signout>a").text(g("popup_signout", n));
                    $("title").text(g("popup_title", n));
                    $("#loading>span").text(g("popup_loading", n));
                    $("a.btn-signin").text(g("popup_signin", n));
                    $("#main_schedule_meeting").text(g("popup_schedule", n));
                    $("button>span.btn-start").text(g("popup_start", n));
                    $("a.without-video").text(g("popup_videooff", n));
                    $("a.with-video").text(g("popup_videoon", n))
                } catch (e) {}
            }
        };
        e.open("GET", chrome.extension.getURL("/_locales/" + COMMON.getValue("zoom_locale") + "/messages.json"), true);
        e.send()
    }

    function a() {
        o.hide()
    }

    function u(e) {
        e = e || "Loading";
        o.find("span").text(e);
        o.show()
    }

    function r() {
        a();
        e.hide();
        i.show();
        n.hide();
        t.hide()
    }

    function l() {
        a();
        e.show();
        i.hide();
        n.show();
        t.show()
    }

    function c(n) {
        i.hide();
        COMMON.toSync(function() {
            u("Connecting")
        }, function() {
            if (n["email"] && n["email"] != "") {
                e.find(".profile-email").text(n["email"]).attr("title", n["email"])
            }
            if (n["displayPicUrl"] && n["displayPicUrl"] != "") {
                var t = n["displayPicUrl"];
                if (t.indexOf("https") == 0 || t.indexOf("http") == 0) {} else {
                    if (n["_zm_baseurl"] && "" != n["_zm_baseurl"]) {
                        t = n["_zm_baseurl"] + t
                    } else {
                        t = `https://${APPCONFIG.runEnv[0]}zoom${APPCONFIG.runEnv[1]}.us` + t
                    }
                }
                setTimeout(function() {
                    e.find(".profile-img").attr("src", t)
                }, 100)
            }
            if (n["displayName"] && n["displayName"] != "") {
                e.find(".profile-img").attr("alt", n["displayName"])
            }
            l()
        })
    }

    function m() {
        var e = COMMON.getGoogleToken();
        if (e) {
            COMMON.login(e, "", function() {
                c(COMMON.getZoomData())
            }, function() {
                r()
            })
        } else {
            r()
        }
    }
    var d = COMMON.hasZoomRqToken();
    var f = COMMON.getZoomData();
    if (d && f) {
        c(f)
    } else {
        m()
    }
    $("#login_with_google").click(function() {
        chrome.tabs.create({
            url: COMMON.getOAuthURL(),
            selected: false
        }, function(e) {
            chrome.tabs.update(e.id, {
                selected: true
            });
            COMMON.saveValue("zoom_oauth_tabid", e.id)
        })
    });
    $(".sso-back").delegate(".back-main", "click", function(e) {
        $(".sec-sign .sign-pannel").show();
        $(".sec-sign .sso-pannel").hide();
        $("#login_with_google").focus()
    });
    $("#sso-form").delegate("#manual-domain", "click", function(e) {
        $(".sec-sign #sso-form .company").hide();
        $(".sec-sign #sso-form .manual").show();
        $(".sso-msg").text("");
        $("#sso-form input#domain").focus().trigger("keyup")
    });
    $("#sso-form").delegate("#company-domain", "click", function(e) {
        $(".sec-sign #sso-form .company").show();
        $(".sec-sign #sso-form .manual").hide();
        $(".sso-msg").text("");
        $("#sso-form input#ssoemail").focus().trigger("keyup")
    });
    $("#login_with_sso").click(function() {
        $(".sec-sign .sign-pannel").hide();
        $(".sec-sign .sso-pannel").show();
        $("#ssoemail").val("").focus();
        $(".sso-msg").text("")
    });
    $("#login-form").delegate("input", "keyup", function(e) {
        var n = $(this);
        if (F($("input[name='email']").val().trim()) && $("#password").val().length >= 6) {
            $(".sign-pannel .signin > button").removeClass("disabled").attr("aria-disabled", "false")
        } else {
            $(".sign-pannel .signin > button").addClass("disabled").attr("aria-disabled", "true")
        }
    });
    $("#sso-form").delegate("input", "keyup", function(e) {
        var n = $(this);
        var t = n.val();
        if (t.length > 0) {
            window.setTimeout(function() {
                if ($("input[name='domain']").is(":visible")) {
                    if ("" != $("#domain").val().trim()) {
                        $(".sso-pannel .continue > button").removeClass("disabled").attr("aria-disabled", "false")
                    } else {
                        $(".sso-pannel .continue > button").addClass("disabled").attr("aria-disabled", "true")
                    }
                }
                if ($("input[name='ssoemail']").is(":visible")) {
                    if (F($("input[name='ssoemail']").val().trim())) {
                        $(".sso-pannel .continue > button").removeClass("disabled").attr("aria-disabled", "false")
                    } else {
                        $(".sso-pannel .continue > button").addClass("disabled").attr("aria-disabled", "true")
                    }
                }
            }, 100)
        } else {
            $(".sso-pannel .continue > button").addClass("disabled").attr("aria-disabled", "true")
        }
    });
    $(".signin>button").click(function() {
        var e = $(this);
        if (F($("#email").val().trim()) && $("#password").val().length >= 6) {
            e.addClass("inprogress");
            $(".signin .busy").show();
            COMMON.removeValue("zoom_govurl");
            COMMON.signin({
                email: $("input[name='email']").val().trim(),
                password: $("#password").val(),
                type: 100
            }, function(n) {
                if (n instanceof Object && n.redirectUrl) {
                    b(function() {
                        $(".signin .busy").show();
                        COMMON.govSignin({
                            email: $("input[name='email']").val().trim(),
                            password: $("#password").val(),
                            type: 100
                        }, n.redirectUrl, function() {
                            COMMON.login("", "", function() {
                                p()
                            }, function() {
                                $("#error-msg").show().text(APPCONFIG.errors[2])
                            })
                        }, function() {
                            $("#error-msg").show().text(APPCONFIG.errors[2])
                        }, function() {
                            e.removeClass("inprogress");
                            $(".signin .busy").hide()
                        })
                    })
                } else if (n.indexOf("/signin") > 0) {
                    var t = n.substring(0, n.indexOf("/signin")) + "/saml/login?from=extension";
                    chrome.tabs.create({
                        url: t,
                        selected: false
                    }, function(e) {
                        chrome.tabs.update(e.id, {
                            selected: true
                        });
                        COMMON.saveValue("zoom_oauth_tabid", e.id)
                    })
                } else {
                    let t = h(n);
                    let i;
                    if (t) {
                        i = t + "/" + COMMON.loginUrl
                    } else {
                        i = COMMON.getUserBaseUrl() + COMMON.loginUrl
                    }
                    let o = /https?:\/\/\w*\.?zoom\.com\.cn\/?/gi.exec(n);
                    if (o && o.length && o[0].indexOf("zoom.com.cn") > 0) {
                        O(function() {
                            $(".signin .busy").show();
                            COMMON._signin({
                                email: $("input[name='email']").val().trim(),
                                password: $("#password").val(),
                                type: 100
                            }, t + "/signin", function() {
                                COMMON._login(i, "", "", function() {
                                    chrome.runtime.sendMessage({
                                        type: "getwebextmapping"
                                    });
                                    p()
                                }, function() {
                                    $("#error-msg").show().text(APPCONFIG.errors[2])
                                })
                            }, function() {
                                $("#error-msg").show().text(APPCONFIG.errors[2])
                            }, function() {
                                e.removeClass("inprogress");
                                $(".signin .busy").hide()
                            })
                        })
                    } else {
                        COMMON._login(i, "", "", function() {
                            chrome.runtime.sendMessage({
                                type: "getwebextmapping"
                            });
                            p()
                        }, function() {
                            $("#error-msg").show().text(APPCONFIG.errors[2])
                        })
                    }
                }
            }, function(e) {
                $("#error-msg").show().text(APPCONFIG.errors[2])
            }, function() {
                e.removeClass("inprogress");
                $(".signin .busy").hide()
            })
        }
    });

    function p() {
        let e = parseInt(COMMON.getValue("zoom_login_req_option_tabid"));
        if (!isNaN(e)) {
            COMMON.removeValue("zoom_login_req_option_tabid");
            let n = parseInt(COMMON.getValue("zoom_popup_tabpage_tabid"));
            COMMON.removeValue("zoom_popup_tabpage_tabid");
            chrome.tabs.reload(e, function() {
                if (chrome.runtime.lastError) {}
            });
            chrome.tabs.remove(n, function() {
                if (chrome.runtime.lastError) {}
            });
            chrome.tabs.update(e, {
                active: true
            }, function(e) {
                if (chrome.runtime.lastError) {}
            })
        }
        window.location.reload()
    }
    $(".continue>button").click(function() {
        var e = $(this);
        if ($("input[name='ssoemail']").is(":visible") && F($("input[name='ssoemail']").val()) || $("input[name='domain']").is(":visible") && "" != $("input[name='domain']").val()) {
            $(".sso-msg").text("");
            e.addClass("inprogress");
            $(".continue .busy").show();
            COMMON.ssoCheck({
                email: $("input[name='ssoemail']").is(":visible") ? $("input[name='ssoemail']").val() : "",
                domain: $("input[name='domain']").is(":visible") ? $("input[name='domain']").val() + `.zoom${APPCONFIG.runEnv[1]}.us` : ""
            }, function(e) {
                chrome.tabs.create({
                    url: e,
                    selected: false
                }, function(e) {
                    chrome.tabs.update(e.id, {
                        selected: true
                    });
                    COMMON.saveValue("zoom_oauth_tabid", e.id)
                })
            }, function() {
                $("#sso-form input:visible").focus();
                $(".sso-msg").text(APPCONFIG.errors[0])
            }, function() {
                e.removeClass("inprogress");
                $(".continue .busy").hide()
            }, function(n) {
                b(function() {
                    $(".sso-msg").text("");
                    e.addClass("inprogress");
                    $(".continue .busy").show();
                    COMMON.govSsoCheck(n, {
                        email: $("input[name='ssoemail']").is(":visible") ? $("input[name='ssoemail']").val() : "",
                        domain: $("input[name='domain']").is(":visible") ? $("input[name='domain']").val() + ".zoom.us" : ""
                    }, function(e) {
                        COMMON.saveValue("zoom_govurl", e.substring(0, e.indexOf("/saml/login")) + "/");
                        chrome.tabs.create({
                            url: e,
                            selected: false
                        }, function(e) {
                            chrome.tabs.update(e.id, {
                                selected: true
                            });
                            COMMON.saveValue("zoom_oauth_tabid", e.id)
                        })
                    }, function() {
                        $("#sso-form input:visible").focus();
                        $(".sso-msg").text(APPCONFIG.errors[0])
                    }, function() {
                        e.removeClass("inprogress");
                        $(".continue .busy").hide()
                    })
                })
            })
        }
    });
    $("#footer_container .signout>a").click(function() {
        u("Connecting");
        COMMON.logout(function() {
            r()
        });
        return false
    });
    $("#content_container .btn-group").hover(function() {
        var e = $(this);
        if (!e.hasClass("open")) {
            e.addClass("open")
        }
    }, function() {
        var e = $(this);
        if (e.hasClass("open")) {
            e.removeClass("open")
        }
    });
    $("#content_container .btn-group").click(function() {
        $(this).toggleClass("open")
    });
    $("#content_container").delegate(".btn-group", "click", function(e) {
        var n = $("#content_container .btn-group");
        if ($(e.target).hasClass("with-video")) {
            chrome.tabs.create({
                url: COMMON.getMeetingWithVideoUrl()
            })
        } else if ($(e.target).hasClass("without-video")) {
            chrome.tabs.create({
                url: COMMON.getMeetingWithoutVideoUrl()
            })
        }
    });
    $(".profile .profile-email").click(function() {
        chrome.tabs.create({
            url: COMMON.getMyMeetingsUrl()
        })
    });
    $(".setting>a").click(function() {
        COMMON.saveValue("zoom_config_fte", false);
        chrome.tabs.create({
            url: chrome.extension.getURL("options.html")
        }, function(e) {
            COMMON.saveValue("zoom_options_tabid", 0)
        })
    });
    $("#main_schedule_meeting").click(function() {
        if (COMMON.getValue("zoom_config_fte")) {
            chrome.tabs.create({
                url: chrome.extension.getURL("options.html"),
                selected: false
            }, function(e) {
                chrome.tabs.update(e.id, {
                    selected: true
                });
                COMMON.saveValue("zoom_options_tabid", e.id)
            })
        } else {
            chrome.tabs.create({
                url: COMMON.getGoogleCalendarUrl()
            }, function(e) {})
        }
    });

    function g(e, n) {
        var t = chrome.i18n.getMessage(e);
        if (n) {
            t = n[e].message
        }
        return t
    }

    function F(e) {
        return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(e)
    }

    function h(e) {
        var n;
        var t = /https:\/\/([^\/]+)/gi.exec(e);
        if (t && t.length) {
            n = t[0]
        }
        return n
    }

    function b(e) {
        chrome.permissions.contains({
            origins: ["https://*.zoomgov.com/"]
        }, function(n) {
            if (!n) {
                chrome.tabs.create({
                    url: chrome.extension.getURL("permission.html"),
                    selected: false
                }, function(e) {
                    chrome.tabs.update(e.id, {
                        selected: true
                    })
                })
            } else {
                e()
            }
        })
    }

    function O(e) {
        chrome.permissions.contains({
            origins: ["https://*.zoom.com.cn/"]
        }, function(n) {
            if (!n) {
                chrome.tabs.create({
                    url: chrome.extension.getURL("permission2.html"),
                    selected: false
                }, function(e) {
                    chrome.tabs.update(e.id, {
                        selected: true
                    })
                })
            } else {
                e()
            }
        })
    }
});