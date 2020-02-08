$(function() {
    $("#permission_submit").bind("click", function() {
        var n = this;
        chrome.permissions.request({
            origins: ["https://" + $(n).attr("domain") + "/"]
        }, function(n) {
            chrome.tabs.getCurrent(function(n) {
                chrome.tabs.remove(n.id, function() {})
            })
        })
    });
    $("#permission_cancel").bind("click", function() {
        chrome.tabs.getCurrent(function(n) {
            chrome.tabs.remove(n.id, function() {})
        });
        return false
    })
});