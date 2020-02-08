! function() {
    var e = document.createElement("iframe");
    e.setAttribute("class", "backgroundFrame"), e.src = "backgroundFrame.html?lplanguage=" + encodeURIComponent(LPTools.getURLParams().lplanguage), e.addEventListener("load", function() {
        e.contentWindow.LPPlatform.getBackgroundInterface({
            mainRequestFramework: !1,
            interfaceDefinition: Interfaces.ContentScriptDialogInterface,
            callback: function(e) {
                window.bg = e
            }
        }), e.contentWindow.Topics.get(e.contentWindow.Topics.REQUEST_FRAMEWORK_INITIALIZED).subscribe(function(e, t) {
            var o = parseInt(e.topFrameID);
            csTop = Interfaces.createInstance(Interfaces.ContentScriptInterface, {
                direct: !1,
                context: "contentScriptDialog",
                requestFunction: function(e) {
                    t.sendRequest({
                        type: "contentScriptRequest",
                        data: e,
                        frameID: o
                    })
                }
            }), csTop.LPFrame.initializeRequestFramework(LPTools.getURLParams().dialogID)
        })
    }), document.body.appendChild(e), Topics.get(Topics.REPROMPT).subscribe(function(e) {
        bg.LPPlatform.openPopoverDialog("reprompt", {
            successCallback: e
        })
    }), Topics.get(Topics.CONFIRM).subscribe(function(e) {
        dialogs.confirmation.open(e)
    }), Topics.get(Topics.DROPDOWN_SHOWN).subscribe(function(e) {
        e.positionAbsoluteBody(), e.getDialog().setFrameSize()
    }), Topics.get(Topics.DROPDOWN_HIDE).subscribe(function(e) {
        e.getDialog().setFrameSize()
    }), Topics.get(Topics.ERROR).subscribe(function(e) {
        var t = Dialog.prototype.getCurrentDialog().data.type;
        0 < Dialog.prototype.getDialogCount() && dialogs.alert.open({
            title: Strings.translateString("Error"),
            text: e
        })
    })
}();
//# sourceMappingURL=sourcemaps/initializeContentScriptDialog.js.map