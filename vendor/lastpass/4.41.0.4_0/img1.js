document.title = gs("View Image");
var data = null;

function onLoad(t) {
    if (t) {
        var e = getBG();
        if (e.g_img_data) data = e.g_img_data, e.g_img_data = null, document.getElementById("imgviewer").src = data;
        else if (e.g_audio_data) {
            var a = document.createElement("audio");
            a.setAttribute("controls", "controls"), a.setAttribute("autobuffer", "autobuffer"), a.setAttribute("autoplay", "autoplay");
            var d = document.createElement("source");
            d.setAttribute("src", e.g_audio_data), a.appendChild(d), document.body.appendChild(a), document.getElementById("imgviewer").style.display = "none"
        }
    } else get_data("img", function() {
        onLoad(!0)
    })
}
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("load", function() {
        onLoad()
    })
});
//# sourceMappingURL=sourcemaps/img1.js.map