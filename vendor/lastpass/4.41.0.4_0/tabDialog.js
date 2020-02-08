LPTabDialog = function() {
    Topics.get(Topics.DIALOG_OPEN).subscribe(function(o) {
        $("title").text(o.getTitle())
    }), Topics.get(Topics.DIALOG_CLOSE).subscribe(function(o) {
        if (0 === Dialog.prototype.getDialogCount() && 0 === LPDialog.getPendingCount()) LPPlatform.closeTab();
        else {
            var i = Dialog.prototype.getCurrentDialog();
            i && $("title").text(i.getTitle())
        }
    }), Topics.get(Topics.ESCAPE).subscribe(function() {
        Dialog.prototype.getCurrentDialog().close()
    }), Topics.get(Topics.REPROMPT).subscribe(function(o) {
        dialogs.reprompt.open({
            successCallback: o
        })
    }), Topics.get(Topics.CONFIRM).subscribe(function(o) {
        dialogs.confirmation.open(o)
    }), Topics.get(Topics.ITEM_SHARE).subscribe(function(o) {
        LPTools.openShareDialog(o)
    });
    var t = function(o, i, t) {
            t && t.dialogWindow && Dialog.prototype.setIsDialogWindow(!0), LPProxy.initializeModel(), LPDialog.openDialog(o, i)
        },
        o = function(o) {
            var i = LPTools.getURLParams();
            switch (i.cmd) {
                case "open":
                    t(i.dialog)
            }
        };
    LPPlatform.addEventListener(window, "unload", function() {
        Topics.get(Topics.CLEAR_DATA).publish()
    }), LPPlatform.addEventListener(document, "DOMContentLoaded", function() {
        Notifications.initialize()
    }), Topics.get(Topics.INITIALIZED).subscribe(function() {
        o()
    });
    var e = null,
        i = function() {
            LPTools.hideContextMenu(e), e = null
        };
    return LPPlatform.addEventListener(document.body, "click", function() {
        i()
    }), Topics.get(Topics.CONTEXT_MENU).subscribe(function(o, i) {
        e = LPTools.displayContextMenu(o, i)
    }), Topics.get(Topics.CONTEXT_CLOSE).subscribe(function() {
        i()
    }), {
        openDialog: t
    }
}();
//# sourceMappingURL=sourcemaps/tabDialog.js.map