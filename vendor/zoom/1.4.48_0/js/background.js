import APPCONFIG from "./config.js";
import COMMON from "./common.js";
var zoomPort = null;
var zoomCheckSharingInter = 0;
chrome.runtime.onMessage.addListener(function(e, t, o) {
    if (zoomPort && e.type == "WCL.userCancel") {
        zoomPort.postMessage({
            type: "WCL.userCancel"
        });
        if (zoomCheckSharingInter) {
            clearInterval(zoomCheckSharingInter);
            zoomCheckSharingInter = 0
        }
    } else if (e.type == "loadAppConfig") {
        o({
            type: "postAppConfig",
            info: APPCONFIG
        });
        COMMON.checkSyncForDataVersion()
    } else if (e.type == "getwebextmapping") {
        COMMON.toSyncEidMeetingMap()
    }
});
var injectIntoTab = function(e) {
    var t = chrome.app.getDetails().content_scripts[0].js;
    var o = 0,
        n = t.length;
    for (; o < n; o++) {
        chrome.tabs.executeScript(e.id, {
            file: t[o]
        })
    }
};

function GetUrlRelativePath(e) {
    var t = e.split("//");
    var o = t[1].indexOf("/");
    var n;
    if (o == -1) {
        n = t[1]
    } else {
        n = t[1].substring(0, o)
    }
    return n
}

function extractHostname(e) {
    var t;
    if (e.indexOf("//") > -1) {
        t = e.split("/")[2]
    } else {
        t = e.split("/")[0]
    }
    t = t.split(":")[0];
    t = t.split("?")[0];
    return t
}

function extractRootDomain(e) {
    var t = extractHostname(e),
        o = t.split("."),
        n = o.length;
    if (n > 2) {
        t = o[n - 2] + "." + o[n - 1];
        if (o[n - 2].length == 2 && o[n - 1].length == 2) {
            t = o[n - 3] + "." + t
        }
    }
    return t
}

function isInjectToTab(e) {
    if (!e) {
        return false
    }
    if (extractRootDomain(e) == "zoom.us") {
        return true
    } else {
        return false
    }
}
chrome.runtime.onInstalled.addListener(function(e) {
    chrome.tabs.query({}, function(e) {
        var t = e.length;
        for (var o = 0; o < t; o++) {
            if (e[o].url) {
                var n = GetUrlRelativePath(e[o].url);
                if (n && isInjectToTab(n)) {
                    injectIntoTab(e[o])
                }
            }
        }
    })
});
chrome.extension.onMessage.addListener(function(e, t, o) {
    var n = COMMON.getZoomData();
    var i;
    var a;
    var r;
    var s;
    var c = false;
    var f = false;
    if (n) {
        if (n["assistants"]) i = n["assistants"];
        if (n["forcelogin"]) a = n["forcelogin"];
        if (n["trackfields"]) r = n["trackfields"];
        if (n["recording"]) s = n["recording"];
        c = !!n["option_pmi_jbhpwd"];
        if (n["scheduleDefaultLockOption"]) f = "true" === n["scheduleDefaultLockOption"].usePMISchedule_locked
    }
    if (e.type == "getZoomToken") {
        let {
            needPassword: e,
            voidable: t
        } = COMMON.checkNeedPasswordForPopup();
        o({
            baseurl: COMMON.getUserBaseUrl(),
            token: COMMON.getZoomZakRequestToken(),
            fte: COMMON.getValue("zoom_config_fte"),
            showSetting: !!COMMON.getValue("zoom_config_fixed_popup"),
            inputManualPwd: e,
            pwdVoidable: t,
            zoomConfigPwdtype: COMMON.getValue("zoom_config_pwdtype"),
            showDomainInput: a && a.domain_login,
            hasAssistants: i && i.length > 0,
            requireTracking: r && r.length > 0,
            hasCloudRecord: s && s.option_cloud_recording,
            hasLocalRecord: s && s.option_local_recording,
            pmi_jbh2pwd: c,
            schedulePmiLock: f,
            trackfields: r,
            zoom_config_pmi_saved_pwd: COMMON.getPmiSavedPwd(),
            zoom_config_pmi: Boolean(COMMON.getValue("zoom_config_pmi"))
        })
    } else if (e.type == "getMeetingTrashUrl") {
        let e = COMMON.getZoomData();
        if (e && e["meetingTrashUrl"]) {
            o({
                meetingTrashUrl: COMMON.getUserBaseUrl() + e["meetingTrashUrl"]
            })
        }
    }
});
chrome.extension.onMessage.addListener(function(e, t, o) {
    var n = false,
        i = false;
    var a;
    var r = COMMON.getZoomData();
    if (r && r["audiopac"]) {
        a = r["audiopac"]
    }
    if (a && a.option_pac_enable) {
        n = true
    }
    if (r && r["option_freeuser"]) {
        i = !!r["option_freeuser"] && COMMON.hasZoomRqToken()
    }
    if (e.type == "supportPAC") {
        o({
            hasPac: n
        })
    } else if (e.type == "quickschedule") {
        var r = COMMON.getZoomData();
        var s = !!COMMON.getValue("zoom_config_jbh");
        var c = !!COMMON.getValue("zoom_config_pmi");
        var f = COMMON.checkNeedPassword();
        if (f) {
            if (c) {
                e.info.password = COMMON.getPmiSavedPwd()
            } else {
                e.info.password = COMMON.generatePassword()
            }
        }
        if (COMMON.hasZoomRqToken()) {
            COMMON._scheduleMeeting(false, e.info, function(e) {
                o(e)
            }, function(e) {
                o(e)
            })
        } else {
            o({
                errorCode: 201
            })
        }
    } else if (e.type == "newPerm") {
        chrome.tabs.create({
            url: chrome.extension.getURL("permission.html"),
            selected: false
        }, function(e) {
            chrome.tabs.update(e.id, {
                selected: true
            })
        })
    } else if (e.type == "validateAltHost") {
        COMMON.validAlternateHost(e.althosts, function(e) {
            o(e)
        }, function(e) {
            o(e)
        })
    } else if (e.type == "checkUserType") {
        o({
            freeUser: i
        })
    }
});
let connectPort;
chrome.runtime.onConnect.addListener(function e(t) {
    if (connectPort) {
        if (connectPort.sender.tab.url.indexOf("calendar") > -1) {
            chrome.tabs.sendMessage(connectPort.sender.tab.id, {
                type: "disConnect"
            })
        }
    }
    console.assert(t.name == "Zoom");
    connectPort = t;

    function o(e) {
        t.postMessage({
            error: true,
            errorMsg: e
        })
    }

    function n(e) {
        COMMON.editMeeting(e, function(e) {}, function(e) {})
    }
    var i = 0;

    function a(e) {
        COMMON.scheduleMeeting(e, function(e) {
            COMMON.saveValue("zoom_config_fte", false);
            t.postMessage({
                type: "schedule",
                meeting: e.result
            })
        }, function(e) {
            o(APPCONFIG.errors[5])
        })
    }

    function r(e, t) {
        if (!e || !e.length) {
            return zoomPort.postMessage({
                type: "WCL.PermissionDeniedError"
            })
        }
        zoomPort.postMessage({
            type: "WCL.sharing",
            sourceId: e,
            canRequestAudioTrack: !!t.canRequestAudioTrack
        })
    }

    function s(e) {
        let t = parseInt(COMMON.getValue("zoom_login_request_tabid"));
        if (!isNaN(t)) {
            COMMON.removeValue("zoom_login_request_tabid");
            chrome.tabs.update(t, {
                active: true
            }, function(o) {
                let n = {
                    type: "authenticationSigninResult",
                    state: e
                };
                if (e === 2) {
                    n.msg = APPCONFIG.errors[6]
                }
                chrome.tabs.sendMessage(t, n)
            })
        }
    }

    function c(e) {
        let t = parseInt(COMMON.getValue("zoom_login_req_option_tabid"));
        if (!isNaN(t)) {
            if (e === 1) {
                COMMON.removeValue("zoom_login_req_option_tabid");
                let e = parseInt(COMMON.getValue("zoom_popup_tabpage_tabid"));
                COMMON.removeValue("zoom_popup_tabpage_tabid");
                chrome.tabs.remove(e, function() {
                    if (chrome.runtime.lastError) {}
                });
                chrome.tabs.update(t, {
                    active: true
                }, function(e) {
                    if (!chrome.runtime.lastError) {
                        chrome.tabs.reload(t)
                    }
                })
            } else {
                let e = parseInt(COMMON.getValue("zoom_popup_tabpage_tabid"));
                chrome.tabs.update(e, {
                    active: true
                }, function(e) {
                    if (!chrome.runtime.lastError) {
                        alert(APPCONFIG.errors[6])
                    }
                })
            }
        }
    }
    t.onMessage.addListener(function(e) {
        if (e.type == "WCL.getSourceID") {
            zoomPort = t;
            var i = ["screen", "window"];
            if (!chrome.desktopCapture) {
                chrome.windows.create({
                    url: chrome.extension.getURL("sharing.html"),
                    type: "popup",
                    left: Math.abs(Number.parseInt((window.screen.width - 800) / 2)),
                    top: Math.abs(Number.parseInt((window.screen.height - 295) / 2)),
                    focused: true,
                    width: 800,
                    height: 295
                });
                if (!zoomCheckSharingInter) {
                    zoomCheckSharingInter = setInterval(function() {
                        if (chrome.desktopCapture) {
                            chrome.desktopCapture.chooseDesktopMedia(i, t.sender.tab, r);
                            clearInterval(zoomCheckSharingInter)
                        }
                    }, 1e3)
                }
            } else {
                chrome.desktopCapture.chooseDesktopMedia(i, t.sender.tab, r)
            }
            return
        } else if (e.type == "schedule") {
            var f = COMMON.hasZoomRqToken();
            if (f) {
                a(e.info)
            } else {
                o("login###again")
            }
        } else if (e.type == "schedulepac") {
            var f = COMMON.hasZoomRqToken();
            if (f) {
                COMMON.schedulePACMeeting(e.info, function(e) {
                    t.postMessage({
                        type: "schedule",
                        meeting: e.result
                    })
                }, function(e) {
                    o(APPCONFIG.errors[5])
                })
            } else {
                o("login###again")
            }
        } else if (e.type == "update") {
            var f = COMMON.hasZoomRqToken();
            if (f) {
                n(e.info)
            }
        } else if (e.type == "delete") {
            var f = COMMON.hasZoomRqToken();
            if (f) {
                COMMON.deleteMeeting(e.info, function(e) {
                    t.postMessage({
                        type: "delSuccess",
                        meeting: e.result
                    })
                }, function(e) {})
            }
        } else if (e.type == "icon_delete") {
            var f = COMMON.hasZoomRqToken();
            if (f) {
                COMMON.deleteMeeting(e.info, function(e) {
                    t.postMessage({
                        type: "delSuccess",
                        meeting: e.result
                    })
                }, function(e) {})
            } else {
                o("login###again")
            }
        } else if (e.type == "deleteonly") {
            var f = COMMON.hasZoomRqToken();
            if (f) {
                COMMON.deleteMeeting(e.info, function(e) {}, function(e) {})
            }
        } else if (e.type == "passOAuthToken") {
            COMMON.govLogin(e.info.term, e.info.first_name, e.info.last_name, e.info.url, e.info.token || "", "", function() {
                COMMON.saveGoogleToken(e.info.token);
                chrome.tabs.query({}, function(e) {
                    if (e.length > 1) {
                        chrome.tabs.remove(parseInt(COMMON.getValue("zoom_oauth_tabid")), function() {
                            if (chrome.runtime.lastError) {}
                        })
                    } else {
                        chrome.tabs.update(parseInt(COMMON.getValue("zoom_oauth_tabid")), {
                            url: "about:blank"
                        }, function() {
                            if (chrome.runtime.lastError) {}
                        })
                    }
                });
                s(1);
                c(1)
            }, function() {
                chrome.tabs.query({}, function(e) {
                    if (e.length > 1) {
                        chrome.tabs.remove(parseInt(COMMON.getValue("zoom_oauth_tabid")), function() {
                            if (chrome.runtime.lastError) {}
                        })
                    } else {
                        chrome.tabs.update(parseInt(COMMON.getValue("zoom_oauth_tabid")), {
                            url: "about:blank"
                        }, function() {
                            if (chrome.runtime.lastError) {}
                        })
                    }
                });
                s(2);
                c(2)
            })
        } else if (e.type == "passSsoSession") {
            COMMON._ssologin(e.info.url, "", "", function() {
                chrome.tabs.query({}, function(e) {
                    if (e.length > 1) {
                        chrome.tabs.remove(parseInt(COMMON.getValue("zoom_oauth_tabid")), function() {
                            if (chrome.runtime.lastError) {}
                        })
                    } else {
                        chrome.tabs.update(parseInt(COMMON.getValue("zoom_oauth_tabid")), {
                            url: "about:blank"
                        }, function() {
                            if (chrome.runtime.lastError) {}
                        })
                    }
                });
                s(1);
                c(1)
            }, function() {
                chrome.tabs.query({}, function(e) {
                    if (e.length > 1) {
                        chrome.tabs.remove(parseInt(COMMON.getValue("zoom_oauth_tabid")), function() {
                            if (chrome.runtime.lastError) {}
                        })
                    } else {
                        chrome.tabs.update(parseInt(COMMON.getValue("zoom_oauth_tabid")), {
                            url: "about:blank"
                        }, function() {
                            if (chrome.runtime.lastError) {}
                        })
                    }
                });
                s(2);
                c(2)
            })
        } else if (e.type == "loadZoomOptions") {
            t.postMessage({
                type: "updateZmOptions",
                zmOpt: COMMON.getZoomSetting()
            })
        } else if (e.type == "saveOptionsAndSchedule") {
            if (COMMON.hasZoomRqToken()) {
                COMMON.updateZoomSetting(e.info, function() {
                    COMMON.saveValue("zoom_config_pmi_saved_pwd", e.info.pmi_saved_pwd);
                    a(e.info)
                })
            } else {
                o("login###again")
            }
        } else if (e.type == "saveOptionsAndQuickSchedule") {
            if (COMMON.hasZoomRqToken()) {
                COMMON.updateSettingForQucik(e.info, function() {
                    a(e.info)
                })
            } else {
                o("login###again")
            }
        } else if (e.type == "sendLog") {
            if (COMMON.hasZoomRqToken()) {
                COMMON.sendLog(e.info, function() {})
            }
        } else if (e.type == "sync") {
            COMMON.toSync(function() {}, function() {})
        } else if (e.type == "saveNewCalendarEvent") {
            COMMON.createMeetingMp(e.info, function() {}, function() {})
        } else if (e.type == "removeCalendarEvent") {
            COMMON.sendLog({
                msgType: 3,
                msg: {
                    info: "zm-observer trigger to delete.",
                    baseid: e.info.event_baseid
                },
                operaType: 1
            });
            COMMON.removeMeetingMp(e.info, function(e) {
                if (e.result && e.result != 0) {
                    t.postMessage({
                        type: "deleteMeetingToast"
                    })
                }
            }, function() {})
        } else if (e.type == "updateTimeAndTimezone") {
            COMMON.updateMeetingTimeAndTimezone(e.info, function() {}, function() {})
        } else if (e.type == "getCalendarEvent") {
            COMMON.getMeetingMp(e.info, function() {}, function() {})
        } else if (e.type == "signWithGoogleEvent") {
            COMMON.signWithGoogle()
        } else if (e.type == "workemailSigninEvent") {
            COMMON.workemailSignin(e.info, function(e) {
                t.postMessage({
                    type: "workemailSigninResult",
                    info: e
                })
            })
        } else if (e.type == "ssoSigninEvent") {
            COMMON.ssoSignin(e.info, function(e) {
                t.postMessage({
                    type: "ssoSigninResult",
                    info: e
                })
            })
        } else if (e.type == "saveStorageData") {
            let t = e.key,
                o = e.val;
            COMMON.saveValue(t, o)
        } else if (e.type == "loadAppConfig") {
            t.postMessage({
                type: "postAppConfig",
                info: APPCONFIG
            })
        }
    })
});
chrome.runtime.onMessageExternal.addListener(function(e, t, o) {
    if (e && e.message && e.message == "version") {
        o({
            version: 1
        })
    }
    return true
});