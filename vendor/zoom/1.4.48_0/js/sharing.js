function ZoomRTCUnload(e) {
    chrome.runtime.sendMessage({
        type: "WCL.userCancel"
    });
    return false
}
window.addEventListener("beforeunload", ZoomRTCUnload);
$(function() {
    $("#permission_submit").bind("click", function() {
        chrome.permissions.request({
            permissions: ["desktopCapture"]
        }, function(e) {
            window.removeEventListener("beforeunload", ZoomRTCUnload);
            if (!e) {
                chrome.runtime.sendMessage({
                    type: "WCL.userCancel"
                })
            }
            window.close()
        })
    });
    $("#permission_cancel").bind("click", function() {
        chrome.runtime.sendMessage({
            type: "WCL.userCancel"
        });
        window.removeEventListener("beforeunload", ZoomRTCUnload);
        window.close();
        return false
    })
});