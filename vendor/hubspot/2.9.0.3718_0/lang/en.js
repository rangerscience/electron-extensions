! function() {
    var e = {},
        n = {};
    e.exports = {
        en: {
            notifications: {
                clicked: "clicked '{{linkTitle}}'",
                clickedaLink: "clicked a link",
                viewed: "viewed",
                opened: "opened",
                neChat: "New chat on {{objectLink}}",
                clickToRespond: "Click to Respond",
                upgrade: "[Upgraded HubSpot Sales trial expired]",
                comboMessage: "{{message}} and {{length}} more"
            }
        }
    };
    n.translations = e.exports;
    n.translationsLoaded = {
        SignalsExtension: {
            en: "static-2.297"
        }
    };
    n.translationsAvailable = {
        SignalsExtension: {
            en: "static-2.297"
        }
    };
    hns("I18n", n);
    "object" == typeof I18n && I18n.trigger && I18n.trigger("loaded:SignalsExtension:en", {
        version: "static-2.297"
    })
}();

//# sourceMappingURL=en.js.map