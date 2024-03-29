! function(c) {
    var n;
    c.getUnavailablePreferences = (n = c.getUnavailablePreferences, function() {
        var e = n();
        return e.enablenewlogin = !g_shownewloginoption, e.hidecontextspan = void 0 === chrome.contextMenus, e
    });
    var o = function(e) {
            return e ? {
                windowID: e.windowId,
                tabURL: e.url,
                tabID: e.id
            } : null
        },
        t;

    function r(e) {
        chrome.tabs.executeScript(e, {
            file: "modaloverlay/removeModalOverlay.js"
        }, function() {
            chrome.runtime.lastError && (console.log("Error removing modal overlay"), "Cannot access a chrome:// URL" === chrome.runtime.lastError.message ? console.log("Extensions cannot affect internal chrome:// URLs") : console.log(chrome.runtime.lastError.message))
        })
    }
    c.initialize = function() {
        chrome.runtime.onConnect.addListener(function(n) {
            if (0 === n.name.indexOf("requestPort")) {
                var e = c.initializeRequestFramework({
                    sendContentScript: function(e) {
                        n.postMessage(e)
                    },
                    tabDetails: o(n.sender && n.sender.tab),
                    frameIdentity: n.sender && n.sender.frameId ? n.sender.tab.id + "-" + n.sender.frameId : null
                });
                n.onMessage.addListener(e.requestHandler), n.onDisconnect.addListener(function() {
                    e.disconnectHandler()
                })
            }
        })
    }, c.getUILanguage = function() {
        return chrome.i18n.getUILanguage()
    }, c.openPopoverDialog = function(e) {
        c.openTabDialog.apply(c, arguments)
    }, c.refreshGroupNames = function() {}, c.closePopovers = function() {
        var e;
        chrome.extension.getViews({
            type: "popup"
        }).forEach(function(e) {
            e.close()
        })
    }, c.getFavicon = function() {
        if (g_ischrome && (g_isedge || g_isfirefoxwebext)) return function(e) {
            e.callback && e.callback(null)
        };
        var t = null,
            o = function(e) {
                var n = "";
                try {
                    var t = document.createElement("canvas");
                    t.height = e.clientHeight, t.width = e.clientWidth, t.getContext("2d").drawImage(e, 0, 0), n = t.toDataURL()
                } catch (e) {}
                return n
            },
            e = function(e, n) {
                var t = document.createElement("img");
                t.src = e, t.addEventListener("load", function() {
                    var e = o(t);
                    document.body.removeChild(t), n(e)
                }), t.addEventListener("error", function() {
                    n(""), document.body.removeChild(t)
                }), document.body.appendChild(t)
            },
            n = function(n) {
                n.url && n.callback && e("chrome://favicon/" + n.url, function(e) {
                    n.callback(e === t ? "" : e)
                })
            };
        return document.addEventListener("DOMContentLoaded", function() {
            e("chrome://favicon/", function(e) {
                t = e
            })
        }), n
    }(), t = function(a, i) {
        LPTabs.get({
            tabID: a.id,
            callback: function(e) {
                if (i.inject) {
                    var n = 0,
                        t = [].concat(i.inject.files),
                        o = function() {
                            ++n === t.length && (e.extendTop({
                                context: i.inject.context
                            }), i.inject.allFrames && e.extendFrames({
                                context: i.inject.context
                            }), i.loadHandler && i.loadHandler(e))
                        };
                    t.forEach(function(e) {
                        chrome.tabs.executeScript(a.id, {
                            file: e,
                            allFrames: i.inject.allFrames
                        }, o)
                    })
                } else i.loadHandler && i.loadHandler(e);
                if (i.closeHandler) var r = c.onTabClosed(function() {
                    r(), i.closeHandler()
                }, e.tabDetails)
            }
        })
    }, c.getTabInterface = t, c.getCurrentTab = function(n) {
        chrome.tabs.query({
            active: !0,
            currentWindow: !0
        }, function(e) {
            1 === e.length ? LPTabs.get({
                tabID: e[0].id,
                callback: n
            }) : n(null)
        })
    }, c.getCurrentTabDetails = function(n) {
        chrome.tabs.query({
            active: !0,
            currentWindow: !0
        }, function(e) {
            n(o(e[0]))
        })
    }, c.openDialogWindow = function(n) {
        var e = n.features || {};
        e.url = n.url, e.type = chrome.windows.CreateType.POPUP, chrome.windows.create(e, function(e) {
            t(e.tabs[0], n)
        })
    }, c.openTab = function(n) {
        chrome.tabs.create({
            url: n.url,
            active: !n.inactive
        }, function(e) {
            t(e, n), "function" == typeof n.onBeforeRequestCallback && c.onBeforeNavigate(n.onBeforeRequestCallback, {
                tabID: e.id
            })
        })
    }, c.openWindow = function(n) {
        chrome.windows.create({
            url: n.url
        }, function(e) {
            t(e.tabs[0], n)
        })
    }, c.openSame = function(n) {
        chrome.tabs.update(null, {
            url: n.url
        }, function(e) {
            t(e, n)
        })
    }, c.navigateTab = function(o) {
        chrome.tabs.update(o.tabId, {
            url: o.url,
            active: !0
        }, function(n) {
            var t = c.onTabUpdated(function(e) {
                e.tabDetails.tabID === n.id && (t(), "function" == typeof o.loadHandler && o.loadHandler(e))
            })
        })
    }, c.activateTab = function(e) {
        chrome.windows.update(e.windowID, {
            focused: !0
        }), chrome.tabs.update(e.tabID, {
            active: !0
        })
    }, c.closeTab = function(e) {
        chrome.tabs.remove(e.tabID)
    }, c.onTabUpdated = function(t) {
        if ("function" == typeof t) {
            var e = function(e, n) {
                "complete" === n.status && LPTabs.get({
                    tabID: e,
                    callback: t
                })
            };
            chrome.tabs.onUpdated.addListener(e)
        }
        return function() {
            chrome.tabs.onUpdated.removeListener(e)
        }
    }, c.onTabActivated = function(t) {
        if ("function" == typeof t) {
            var e = function(e) {
                var n = LPTabs.get({
                    tabID: e.tabId
                });
                n = n || new LPTab(o(e)), t(n)
            };
            chrome.tabs.onActivated.addListener(e)
        }
        return function() {
            chrome.tabs.onActivated.removeListener(e)
        }
    }, c.onTabClosed = function(n) {
        if ("function" == typeof n) {
            var e = function(e) {
                n(e)
            };
            chrome.tabs.onRemoved.addListener(e)
        }
        return function() {
            chrome.tabs.onRemoved.removeListener(e)
        }
    }, c.onTransition = function(n) {
        if ("function" == typeof n) {
            var e = function(e) {
                n(e)
            };
            chrome.webNavigation.onCommitted.addListener(e)
        }
        return function() {
            chrome.webNavigation.onCommitted.removeListener(e)
        }
    }, c.onAuthRequired = function(n) {
        if (chrome.webRequest.onAuthRequired) {
            if ("function" == typeof n) {
                var e = function(e) {
                    return n(e, e.tabId)
                };
                chrome.webRequest.onAuthRequired.addListener(e, {
                    urls: ["<all_urls>"]
                }, ["blocking"])
            }
            return function() {
                chrome.webRequest.onAuthRequired.removeListener(e)
            }
        }
        return function() {}
    }, c.showModalOverlay = function(n) {
        c.getCurrentTabDetails(function(e) {
            e && (e.tabURL && e.tabURL.indexOf(getchromeurl("")) < 0 && (c.activeOverlayTab = e.tabID, chrome.tabs.executeScript(e.tabID, {
                file: "modaloverlay/showModalOverlay.js"
            }, function() {
                chrome.runtime.lastError && ("Cannot access a chrome:// URL" === chrome.runtime.lastError.message ? console.log("Error showing modal overlay: Extensions cannot affect internal chrome:// URLs") : console.log("Error showing modal overlay: " + chrome.runtime.lastError.message))
            })), "function" == typeof n && n(e.tabID))
        })
    }, c.removeModalOverlay = function(e) {
        e ? r(e) : c.activeOverlayTab && r(c.activeOverlayTab)
    }, c.hideYoureAlmostDoneMarketingOverlay = function(e) {
        chrome.tabs.executeScript(e, {
            file: "modaloverlay/hideYoureAlmostDoneMarketingOverlay.js"
        }, function() {
            chrome.runtime.lastError && (console.log("Error hiding marketing overlay"), "Cannot access a chrome:// URL" === chrome.runtime.lastError.message ? console.log("Extensions cannot affect internal chrome:// URLs") : console.log(chrome.runtime.lastError.message))
        })
    }, c.onBeforeNavigate = function(t, o) {
        if ("function" == typeof t) {
            var e = function(e) {
                var n;
                return {
                    cancel: !1 === t(e.url, e.requestBody, o.tabID)
                }
            };
            chrome.webRequest.onBeforeRequest.addListener(e, {
                urls: ["<all_urls>"],
                tabId: o ? o.tabID : null
            }, ["blocking", "requestBody"])
        }
        return function() {
            chrome.webRequest.onBeforeRequest.removeListener(e)
        }
    }
}(LPPlatform);
//# sourceMappingURL=sourcemaps/platformBackgroundOverride.js.map