! function() {
    function s(e, o, n, l) {
        bg && bg.sendLpImprove && bg.sendLpImprove("formfill-stats", {
            "own-formfills": e || "0",
            "has-linked-account": o ? "true" : "false",
            "linked-form-fills": n || "0",
            "broken-formfill-count": l || "0"
        })
    }
    Topics.get(Topics.LOGIN).subscribe(function() {
        var e = 0,
            o = 0,
            n = 0,
            l = LPProxy.getFormFills(),
            i = !!LPProxy.getLinkedAccount();
        for (var r in l) {
            var c = l[r]._model._data,
                f = !!l[r]._model._sharedGroup,
                t;
            (!c.evephone3lcc && (c.evephone || c.evephone) || !c.mobilephone3lcc && (c.mobilephone || c.mobileext) || !c.fax && (c.fax3lcc || c.faxext)) && n++, f ? o++ : e++
        }
        s(e, i, o, n)
    })
}();
//# sourceMappingURL=sourcemaps/formfill-custom-fields-usage.js.map