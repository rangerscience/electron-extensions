"undefined" == typeof g_message_shim_setup && (g_message_shim_setup = !0, window.addEventListener("message", function(e) {
    try {
        if (e.origin != window.location.origin || "object" != typeof e.data || void 0 === e.data.messagefrom || "htmlpage" != e.data.messagefrom) return;
        self.port.emit("message", e.data)
    } catch (e) {}
}, !1), self.port.on("message", function(e) {
    e.messagefrom = "messageshim", document.defaultView ? document.defaultView.location.origin == window.location.origin && document.defaultView.postMessage(e, window.location.origin) : window.postMessage(e, window.location ? window.location.origin : "")
}));
//# sourceMappingURL=sourcemaps/message_shim.js.map