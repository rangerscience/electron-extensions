document.getElementById("import").value = gs("Import"), document.getElementById("choosefile").style.display = g_getfile ? "block" : "none", document.title = gs("Import"), document.getElementById("lp_docwrite_import_other2") && set_innertext(document.getElementById("lp_docwrite_import_other2"), gs("Source:")), document.getElementById("lp_docwrite_import_other3") && set_innertext(document.getElementById("lp_docwrite_import_other3"), gs("Full path of the file to import:")), document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("load", function() {
        load()
    }), document.getElementById("source").addEventListener("change", function() {
        fix_instructions()
    }), document.getElementById("import").addEventListener("click", function() {
        doimport()
    })
});
//# sourceMappingURL=sourcemaps/import_other_end.js.map