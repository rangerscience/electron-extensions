if ("undefined" != typeof g_dopplastpass && g_dopplastpass) {
    var lpembed = document.createElement("embed");
    lpembed.setAttribute("name", "pplastpass"), lpembed.setAttribute("id", "pplastpass"), lpembed.setAttribute("width", "0"), lpembed.setAttribute("height", "0"), lpembed.setAttribute("src", "pplastpass.nmf"), lpembed.setAttribute("type", "application/x-pnacl"), document.getElementById("pplastpass_listener").appendChild(lpembed);
    var pplastpass_listener = document.getElementById("pplastpass_listener");
    pplastpass_listener && (pplastpass_listener.addEventListener("load", pplastpass_load, !0), pplastpass_listener.addEventListener("message", pplastpass_message, !0))
}
//# sourceMappingURL=sourcemaps/background2.js.map