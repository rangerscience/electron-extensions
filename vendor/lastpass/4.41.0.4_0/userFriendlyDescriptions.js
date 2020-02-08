var fillableNoteTypes = ["Credit Card", "Bank Account", "Address"];

function addUserFriendlyDescription(e) {
    e.decprofilename = lpmdec_acct(e.encname, !0, e, g_shares);
    var t = lpmdec_acct(e.extra, !0, e, g_shares),
        r = " • ";
    switch (e.notetype) {
        case "Credit Card":
            var a = "Ending in %1",
                s = LP.getNoteValue("Number", t).slice(-4);
            a = 0 === s.length ? "" : a, e.description = StringUtils.translate(a, s), e.ccType = LPCC.getCCType(LP.getNoteValue("Number", t));
            break;
        case "Address":
            e.description = LP.getNoteValue("Address 1", t)
    }
    return e
}
//# sourceMappingURL=sourcemaps/userFriendlyDescriptions.js.map