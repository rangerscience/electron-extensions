Interfaces.ContentScriptInterface = function() {
    var e = Interfaces.Definition,
        n = Interfaces.TYPE_FUNCTION;
    return {
        LPFrame: {
            css: new e(n, {
                include: ["contentScriptDialog", "infieldPopup"]
            }),
            close: new e(n),
            openDialog: new e(n),
            openFrame: new e(n),
            showModal: new e(n),
            hideModal: new e(n),
            initializeRequestFramework: new e(n, {
                include: ["contentScriptDialog", "infieldPopup"],
                appendAdditionalArguments: !0
            })
        },
        LPSiteNotification: {
            formExists: new e(n, {
                include: "background"
            }),
            showSiteNotification: new e(n, {
                include: "contentScript"
            }),
            getSiteNotification: new e(n, {
                include: "contentScript"
            }),
            setSkipNext: new e(n, {
                include: "contentScript",
                appendAdditionalArguments: !0
            })
        },
        LaunchTracking: {
            formExists: new e(n, {
                include: "background"
            })
        },
        LPContentScriptTools: {
            findText: new e(n, {
                include: "background"
            }),
            getFavicon: new e(n, {
                include: "contentScriptDialog"
            })
        },
        LPInfieldFrame: {
            openFrame: new e(n, {
                include: ["infieldPopup", "contentScript"]
            }),
            resizeFrame: new e(n, {
                include: ["infieldPopup", "contentScript"]
            }),
            positionFrame: new e(n, {
                include: ["infieldPopup", "contentScript"]
            }),
            close: new e(n, {
                include: ["infieldPopup", "contentScript"]
            }),
            show: new e(n, {
                include: ["infieldPopup", "contentScript"]
            }),
            fillGeneratedPassword: new e(n)
        },
        LPModule: {
            callService: new e(n, {
                includes: ["background", "contentScript"]
            })
        },
        jQuery: {
            ajax: new e(n)
        },
        Topics: {
            publish: new e(n)
        },
        basicAuth: {
            reloadPage: new e(n, {
                include: "contentScriptDialog"
            })
        },
        receiveBG: new e(n, {
            include: "background"
        })
    }
}();
//# sourceMappingURL=sourcemaps/contentScriptInterface.js.map