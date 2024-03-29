LPServer.sitesAndNotes = function() {
    var e, t;
    return {
        saveCustomNoteTemplate: function(t) {
            LPServer.lmiapi.jsonRequest({
                url: "lmiapi/note-templates",
                data: t.params,
                success: function(e) {
                    t.success(LPServer.ext.translate("Custom Note Template: %1 created.", e.title), e)
                },
                userSupplied: t
            })
        },
        deleteCustomNoteTemplate: function(t) {
            var r = g_note_templates.filter(function(e) {
                return e.id === t.params.id
            });
            r && 0 < r.length && LPServer.lmiapi.jsonRequest({
                url: "lmiapi/note-templates/" + t.params.id + "/delete",
                success: function(e) {
                    t.success(LPServer.ext.translate("Custom Note Template: %1 deleted.", r[0].title), e)
                },
                userSupplied: t
            })
        }
    }
}(), LPServer.transact = function() {
    var e;
    return {
        sendReminder: function(e) {
            LPServer.lmiapi.jsonRequest({
                url: "lmiapi/transact/cross-device-reminder",
                data: e.params,
                userSupplied: e
            })
        }
    }
}();
//# sourceMappingURL=sourcemaps/serverSitesNotes.js.map