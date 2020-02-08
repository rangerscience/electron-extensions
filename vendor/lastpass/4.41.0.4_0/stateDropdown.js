var StateDropdown = function(a) {
    a = $.extend(a, {
        dynamic: !1
    }), TypeaheadDropdown.call(this, null, [{
        value: "AL",
        label: Strings.translateString("Alabama")
    }, {
        value: "AK",
        label: Strings.translateString("Alaska")
    }, {
        value: "AZ",
        label: Strings.translateString("Arizona")
    }, {
        value: "AR",
        label: Strings.translateString("Arkansas")
    }, {
        value: "CA",
        label: Strings.translateString("California")
    }, {
        value: "CO",
        label: Strings.translateString("Colorado")
    }, {
        value: "CT",
        label: Strings.translateString("Connecticut")
    }, {
        value: "DE",
        label: Strings.translateString("Delaware")
    }, {
        value: "DC",
        label: Strings.translateString("District of Columbia")
    }, {
        value: "FL",
        label: Strings.translateString("Florida")
    }, {
        value: "GA",
        label: Strings.translateString("Georgia")
    }, {
        value: "HI",
        label: Strings.translateString("Hawaii")
    }, {
        value: "ID",
        label: Strings.translateString("Idaho")
    }, {
        value: "IL",
        label: Strings.translateString("Illinois")
    }, {
        value: "IN",
        label: Strings.translateString("Indiana")
    }, {
        value: "IA",
        label: Strings.translateString("Iowa")
    }, {
        value: "KS",
        label: Strings.translateString("Kansas")
    }, {
        value: "KY",
        label: Strings.translateString("Kentucky")
    }, {
        value: "LA",
        label: Strings.translateString("Louisiana")
    }, {
        value: "ME",
        label: Strings.translateString("Maine")
    }, {
        value: "MD",
        label: Strings.translateString("Maryland")
    }, {
        value: "MA",
        label: Strings.translateString("Massachusetts")
    }, {
        value: "MI",
        label: Strings.translateString("Michigan")
    }, {
        value: "MN",
        label: Strings.translateString("Minnesota")
    }, {
        value: "MS",
        label: Strings.translateString("Mississippi")
    }, {
        value: "MO",
        label: Strings.translateString("Missouri")
    }, {
        value: "MT",
        label: Strings.translateString("Montana")
    }, {
        value: "NE",
        label: Strings.translateString("Nebraska")
    }, {
        value: "NV",
        label: Strings.translateString("Nevada")
    }, {
        value: "NH",
        label: Strings.translateString("New Hampshire")
    }, {
        value: "NJ",
        label: Strings.translateString("New Jersey")
    }, {
        value: "NM",
        label: Strings.translateString("New Mexico")
    }, {
        value: "NY",
        label: Strings.translateString("New York")
    }, {
        value: "NC",
        label: Strings.translateString("North Carolina")
    }, {
        value: "ND",
        label: Strings.translateString("North Dakota")
    }, {
        value: "OH",
        label: Strings.translateString("Ohio")
    }, {
        value: "OK",
        label: Strings.translateString("Oklahoma")
    }, {
        value: "OR",
        label: Strings.translateString("Oregon")
    }, {
        value: "PA",
        label: Strings.translateString("Pennsylvania")
    }, {
        value: "RI",
        label: Strings.translateString("Rhode Island")
    }, {
        value: "SC",
        label: Strings.translateString("South Carolina")
    }, {
        value: "SD",
        label: Strings.translateString("South Dakota")
    }, {
        value: "TN",
        label: Strings.translateString("Tennessee")
    }, {
        value: "TX",
        label: Strings.translateString("Texas")
    }, {
        value: "UT",
        label: Strings.translateString("Utah")
    }, {
        value: "VT",
        label: Strings.translateString("Vermont")
    }, {
        value: "VA",
        label: Strings.translateString("Virginia")
    }, {
        value: "WA",
        label: Strings.translateString("Washington")
    }, {
        value: "WV",
        label: Strings.translateString("West Virginia")
    }, {
        value: "WI",
        label: Strings.translateString("Wisconsin")
    }, {
        value: "WY",
        label: Strings.translateString("Wyoming")
    }, {
        class: "divider",
        value: "AA",
        label: Strings.translateString("Armed Forces Americas")
    }, {
        value: "AE",
        label: Strings.translateString("Armed Forces EMEAC")
    }, {
        value: "AP",
        label: Strings.translateString("Armed Forces Pacific")
    }, {
        class: "divider",
        value: "AS",
        label: Strings.translateString("American Samoa")
    }, {
        value: "FM",
        label: Strings.translateString("Federated States of Micronesia")
    }, {
        value: "GU",
        label: Strings.translateString("Guam")
    }, {
        value: "MH",
        label: Strings.translateString("Marshall Islands")
    }, {
        value: "MP",
        label: Strings.translateString("Northern Mariana Islands")
    }, {
        value: "PW",
        label: Strings.translateString("Palau")
    }, {
        value: "PR",
        label: Strings.translateString("Puerto Rico")
    }, {
        value: "VI",
        label: Strings.translateString("Virgin Islands")
    }, {
        class: "divider",
        value: "AB",
        label: Strings.translateString("Alberta")
    }, {
        value: "BC",
        label: Strings.translateString("British Columbia")
    }, {
        value: "MB",
        label: Strings.translateString("Manitoba")
    }, {
        value: "NB",
        label: Strings.translateString("New Brunswick")
    }, {
        value: "NL",
        label: Strings.translateString("Newfoundland and Labrador")
    }, {
        value: "NT",
        label: Strings.translateString("Northwest Territories")
    }, {
        value: "NS",
        label: Strings.translateString("Nova Scotia")
    }, {
        value: "NU",
        label: Strings.translateString("Nunavut")
    }, {
        value: "ON",
        label: Strings.translateString("Ontario")
    }, {
        value: "PE",
        label: Strings.translateString("Prince Edward Island")
    }, {
        value: "QC",
        label: Strings.translateString("Quebec")
    }, {
        value: "SK",
        label: Strings.translateString("Saskatchewan")
    }, {
        value: "YT",
        label: Strings.translateString("Yukon")
    }], a)
};
StateDropdown.prototype = Object.create(TypeaheadDropdown.prototype), StateDropdown.prototype.constructor = StateDropdown;
//# sourceMappingURL=sourcemaps/stateDropdown.js.map