function doexport(t) {
    if (t) {
        var e = document.createElement("pre");
        set_innertext(e, getBG().g_export_output), getBG().g_export_output = "", document.body.appendChild(e)
    } else get_data("export", function() {
        doexport(!0)
    })
}
document.title = gs("Export"), document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("load", function() {
        doexport()
    })
});
//# sourceMappingURL=sourcemaps/export1.js.map