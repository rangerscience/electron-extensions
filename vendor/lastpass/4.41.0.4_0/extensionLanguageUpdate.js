ExtensionLanguageUpdate = function(e) {
    var n = $(e.body),
        a = function() {
            n.addClass("languageUpdateInfo panelIsActive"), t(), bg.sendLpImprove("language_downgrade_notification_seen", {
                source: "extension_dropdown"
            })
        },
        t = function() {
            var e = $("#panelLanguageSelector"),
                n = $("#stepBackButton"),
                a = $("#saveLanguageChanges"),
                t = $("#readMoreLink"),
                i = $(".step"),
                s = bg.get("g_original_language"),
                o = $("#selectedLanguageDisplay"),
                c = i.length,
                g = 0;
            i.eq(0).addClass("active"), i.eq(1).addClass("next"), t.click(function() {
                bg.openTranslationsReadMore()
            }), $('input:radio[name="language"]').change(function() {
                $(this).is(":checked") && o.text($(this).siblings(".radioLabel").text())
            }), e.click(function() {
                g === c - 1 ? g = 0 : g++, l(g, i)
            }), n.click(function() {
                g === c - 1 ? g = 0 : g--, l(g, i)
            }), a.click(function() {
                var e = $('input:radio[name="language"]:checked').val();
                bg.switchLanguage(e), bg.saveUserLanguage(e), bg.setLanguageNotificationDismissal(function() {
                    bg.sendLpImprove("language_downgrade_notification_update", {
                        previous_language: s,
                        selected_language: e,
                        source: "extension_dropdown"
                    })
                }), g === c - 1 ? g = 0 : g++, l(g, i)
            }), $("#laterButton").click(function() {
                u(), bg.clear_badge_text(), bg.setLanguageNotificationDismissal(function() {
                    bg.sendLpImprove("language_downgrade_notification_dismiss", {
                        source: "extension_dropdown"
                    })
                })
            }), $("#doneButton").click(function() {
                u(), bg.clear_badge_text()
            })
        };

    function l(e, n) {
        var a = e,
            t = e - 1,
            i = e + 1; - 1 == t ? (n[a].className = "step active", n[i].className = "step next") : (a === n.length - 1 ? n[a].className = "step active" : (n[a].className = "step active", n[i].className = "step next"), n[t].className = "step prev")
    }

    function u() {
        n.removeClass("panelIsActive"), $("#steps").remove(), ExtensionDropdown.setSize()
    }
    return {
        initialize: a
    }
}(document);
//# sourceMappingURL=sourcemaps/extensionLanguageUpdate.js.map