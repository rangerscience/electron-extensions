document.title = "About";
var g_licensehost = "lastpass.com";

function on_load(e) {
    if (e) {
        if (document.body.appendChild(document.createTextNode("LastPass Extension")), getBG().LPISLOC && document.body.appendChild(document.createTextNode("(Local)")), document.body.appendChild(document.createElement("br")), document.body.appendChild(document.createElement("br")), document.body.appendChild(document.createTextNode("Version: " + lpversion)), document.body.appendChild(document.createElement("br")), document.body.appendChild(document.createTextNode("Built: " + build_date)), document.body.appendChild(document.createElement("br")), document.body.appendChild(document.createTextNode("Binary Component: ")), getBG().have_nplastpass()) document.body.appendChild(document.createTextNode("true (NPAPI " + "Version".toLowerCase() + " " + getBG().get_nplastpass_version() + ", built " + getBG().get_nplastpass_build_date_time() + ")"));
        else if (getBG().have_native_messaging() || getBG().have_binary()) {
            var t = "true (";
            getBG().have_native_messaging() && (t += g_isfirefoxsdk ? "ctypes" : "Native Messaging"), t += " " + "Version".toLowerCase() + " " + getBG().g_native_messaging_version + ", built " + getBG().g_native_messaging_build_date + " " + getBG().g_native_messaging_build_time + ")", document.body.appendChild(document.createTextNode(t))
        } else getBG().have_pplastpass() ? document.body.appendChild(document.createTextNode("false (Native Client only)")) : getBG().have_ws() ? document.body.appendChild(document.createTextNode("true (Helper App)")) : document.body.appendChild(document.createTextNode("false"));
        document.body.appendChild(document.createTextNode(" "));
        var n = document.createElement("span");
        n.id = "enable_binary_span", n.className = "displaynone";
        var d = document.createElement("button");
        d.id = "enable_binary_button", n.appendChild(d), document.body.appendChild(n), document.body.appendChild(document.createElement("br")), document.body.appendChild(document.createElement("br"));
        var a = "Copyright 2008 LastPass. All Rights Reserved.\nPortions of this software were licensed from third parties as described at: ",
            o = (a = a.replace(" 2008 ", " 2008-" + (new Date).getFullYear() + " ")).split("\n"),
            i, i;
        if (document.body.appendChild(document.createTextNode(o[0])), document.body.appendChild(document.createElement("br")), document.body.appendChild(document.createTextNode(o[1])), !getBG().g_hidelicenselink)(i = document.createElement("a")).setAttribute("target", "_blank"), i.setAttribute("href", "https://" + g_licensehost + "/docs/licenses.php"), set_innertext(i, "https://" + g_licensehost + "/docs/licenses.php"), document.body.appendChild(i);
        if (!getBG().g_hideaboutmanuallink) document.body.appendChild(document.createElement("br")), document.body.appendChild(document.createElement("br")), (i = document.createElement("a")).id = "openhelp", i.setAttribute("href", "#"), set_innertext(i, "Click here to view the LastPass User Manual"), document.body.appendChild(i), document.getElementById("openhelp").onclick = function() {
            return getBG().openhelp(), !1
        };
        if (getBG().g_issafari && !getBG().have_nplastpass() && !getBG().have_ws()) {
            document.body.appendChild(document.createElement("br")), document.body.appendChild(document.createElement("br"));
            var s = document.createElement("b");
            set_innertext(s, "Please Note (Yosemite Users):"), document.body.appendChild(s), document.body.appendChild(document.createTextNode(" In order to use the binary component, you must install the components and go to Safari Menu=>View=>Show LastPass Menu Bar."))
        }
        var l = function(e) {
            e ? getBG().have_binary() || (set_innertext(document.getElementById("enable_binary_button"), "Install Binary Component"), document.getElementById("enable_binary_button").onclick = LPPlatform.installBinary, document.getElementById("enable_binary_span").style.display = "inline") : (set_innertext(document.getElementById("enable_binary_button"), "Enable Native Messaging"), document.getElementById("enable_binary_button").onclick = function() {
                LPPlatform.requestNativeMessaging()
            }, document.getElementById("enable_binary_span").style.display = "inline")
        };
        (getBG().g_is_win || getBG().g_is_mac || getBG().g_is_linux) && (g_isfirefoxsdk || g_isedge || (supports_native_messaging() && getBG().g_do_native_messaging ? getBG().test_native_messaging(l) : l(!0)))
    } else get_data("about", function() {
        on_load(!0)
    })
}
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("load", function() {
        on_load()
    })
});
//# sourceMappingURL=sourcemaps/about1.js.map