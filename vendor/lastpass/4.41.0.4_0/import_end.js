document.title = gs("Import"), document.getElementById("lp_docwrite_import2") && set_innertext(document.getElementById("lp_docwrite_import2"), gs("Install the binary version of LastPass for Chrome to enable importing passwords from Google Chrome password manager")), document.getElementById("lp_docwrite_import4") && set_innertext(document.getElementById("lp_docwrite_import4"), gs("SITE")), document.getElementById("lp_docwrite_import5") && set_innertext(document.getElementById("lp_docwrite_import5"), gs("USERNAME")), document.getElementById("lp_docwrite_import6") && set_innertext(document.getElementById("lp_docwrite_import6"), gs("PASSWORDupper")), document.getElementById("lp_docwrite_import7") && set_innertext(document.getElementById("lp_docwrite_import7"), gs("IMPORT?")), document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("load", function() {
        onLoad()
    }), document.getElementById("lpimport").addEventListener("click", function() {
        lpimport()
    }), document.getElementById("cancel").addEventListener("click", function() {
        cancel()
    }), document.getElementById("selectall").addEventListener("click", function() {
        select_all()
    }), document.getElementById("unselectall").addEventListener("click", function() {
        unselect_all()
    }), document.getElementById("getbinary").onclick = function() {
        return getbinary(), !1
    }
});
//# sourceMappingURL=sourcemaps/import_end.js.map