var pwagelabel = document.getElementById("pwagelabel");
pwagelabel && set_innertext(pwagelabel, "");
var cpwbtn = document.getElementById("cpwbtn"),
    cpwbtnmini = document.getElementById("cpwbtnmini");
cpwbtnmini && set_innertext(cpwbtnmini, gs("Change Password Automatically"));
var cpwfieldbtn = document.getElementById("cpwfieldbtn");
cpwfieldbtn && set_innertext(cpwfieldbtn, gs("Change Password Automatically")), sr(document, "save", "value", "Save"), sr(document, "cancel", "value", "Cancel"), document.getElementById("deltext") && set_innertext(document.getElementById("deltext"), gs("Delete")), document.getElementById("sharetext") && set_innertext(document.getElementById("sharetext"), gs("Share")), document.getElementById("sharehistory") && set_innertext(document.getElementById("sharehistory"), gs("History"));
//# sourceMappingURL=sourcemaps/site21.js.map