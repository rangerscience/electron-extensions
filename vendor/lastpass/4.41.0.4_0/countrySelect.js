! function(l) {
    var t = null;
    l.createCountrySelect = function(a) {
        return null === t && (t = [{
            value: "AF",
            label: Strings.translateString("Afghanistan")
        }, {
            value: "AX",
            label: Strings.translateString("Aland Islands")
        }, {
            value: "AL",
            label: Strings.translateString("Albania")
        }, {
            value: "DZ",
            label: Strings.translateString("Algeria")
        }, {
            value: "AS",
            label: Strings.translateString("American Samoa")
        }, {
            value: "AD",
            label: Strings.translateString("Andorra")
        }, {
            value: "AO",
            label: Strings.translateString("Angola")
        }, {
            value: "AI",
            label: Strings.translateString("Anguilla")
        }, {
            value: "AQ",
            label: Strings.translateString("Antarctica")
        }, {
            value: "AG",
            label: Strings.translateString("Antigua and Barbuda")
        }, {
            value: "AR",
            label: Strings.translateString("Argentina")
        }, {
            value: "AM",
            label: Strings.translateString("Armenia")
        }, {
            value: "AW",
            label: Strings.translateString("Aruba")
        }, {
            value: "AU",
            label: Strings.translateString("Australia")
        }, {
            value: "AT",
            label: Strings.translateString("Austria")
        }, {
            value: "AZ",
            label: Strings.translateString("Azerbaijan")
        }, {
            value: "BS",
            label: Strings.translateString("Bahamas")
        }, {
            value: "BH",
            label: Strings.translateString("Bahrain")
        }, {
            value: "BD",
            label: Strings.translateString("Bangladesh")
        }, {
            value: "BB",
            label: Strings.translateString("Barbados")
        }, {
            value: "BY",
            label: Strings.translateString("Belarus")
        }, {
            value: "BE",
            label: Strings.translateString("Belgium")
        }, {
            value: "BZ",
            label: Strings.translateString("Belize")
        }, {
            value: "BJ",
            label: Strings.translateString("Benin")
        }, {
            value: "BM",
            label: Strings.translateString("Bermuda")
        }, {
            value: "BT",
            label: Strings.translateString("Bhutan")
        }, {
            value: "BO",
            label: Strings.translateString("Bolivia")
        }, {
            value: "BA",
            label: Strings.translateString("Bosnia and Herzegovina")
        }, {
            value: "BW",
            label: Strings.translateString("Botswana")
        }, {
            value: "BV",
            label: Strings.translateString("Bouvet Island")
        }, {
            value: "BR",
            label: Strings.translateString("Brazil")
        }, {
            value: "IO",
            label: Strings.translateString("British Indian Ocean Territory")
        }, {
            value: "BN",
            label: Strings.translateString("Brunei Darussalam")
        }, {
            value: "BG",
            label: Strings.translateString("Bulgaria")
        }, {
            value: "BF",
            label: Strings.translateString("Burkina Faso")
        }, {
            value: "BI",
            label: Strings.translateString("Burundi")
        }, {
            value: "KH",
            label: Strings.translateString("Cambodia")
        }, {
            value: "CM",
            label: Strings.translateString("Cameroon")
        }, {
            value: "CA",
            label: Strings.translateString("Canada")
        }, {
            value: "IC",
            label: Strings.translateString("Canary Islands")
        }, {
            value: "CV",
            label: Strings.translateString("Cape Verde")
        }, {
            value: "KY",
            label: Strings.translateString("Cayman Islands")
        }, {
            value: "CF",
            label: Strings.translateString("Central African Republic")
        }, {
            value: "TD",
            label: Strings.translateString("Chad")
        }, {
            value: "CL",
            label: Strings.translateString("Chile")
        }, {
            value: "CN",
            label: Strings.translateString("China")
        }, {
            value: "CX",
            label: Strings.translateString("Christmas Island")
        }, {
            value: "CC",
            label: Strings.translateString("Cocos (Keeling) Islands")
        }, {
            value: "CO",
            label: Strings.translateString("Colombia")
        }, {
            value: "KM",
            label: Strings.translateString("Comoros")
        }, {
            value: "CG",
            label: Strings.translateString("Congo")
        }, {
            value: "CD",
            label: Strings.translateString("The Democratic Republic of The Congo")
        }, {
            value: "CK",
            label: Strings.translateString("Cook Islands")
        }, {
            value: "CR",
            label: Strings.translateString("Costa Rica")
        }, {
            value: "CI",
            label: Strings.translateString("Cote D'ivoire")
        }, {
            value: "HR",
            label: Strings.translateString("Croatia")
        }, {
            value: "CU",
            label: Strings.translateString("Cuba")
        }, {
            value: "CY",
            label: Strings.translateString("Cyprus")
        }, {
            value: "CZ",
            label: Strings.translateString("Czech Republic")
        }, {
            value: "DK",
            label: Strings.translateString("Denmark")
        }, {
            value: "DJ",
            label: Strings.translateString("Djibouti")
        }, {
            value: "DM",
            label: Strings.translateString("Dominica")
        }, {
            value: "DO",
            label: Strings.translateString("Dominican Republic")
        }, {
            value: "EC",
            label: Strings.translateString("Ecuador")
        }, {
            value: "EG",
            label: Strings.translateString("Egypt")
        }, {
            value: "SV",
            label: Strings.translateString("El Salvador")
        }, {
            value: "GQ",
            label: Strings.translateString("Equatorial Guinea")
        }, {
            value: "ER",
            label: Strings.translateString("Eritrea")
        }, {
            value: "EE",
            label: Strings.translateString("Estonia")
        }, {
            value: "ET",
            label: Strings.translateString("Ethiopia")
        }, {
            value: "FK",
            label: Strings.translateString("Falkland Islands (Malvinas)")
        }, {
            value: "FO",
            label: Strings.translateString("Faroe Islands")
        }, {
            value: "FJ",
            label: Strings.translateString("Fiji")
        }, {
            value: "FI",
            label: Strings.translateString("Finland")
        }, {
            value: "FR",
            label: Strings.translateString("France")
        }, {
            value: "GF",
            label: Strings.translateString("French Guiana")
        }, {
            value: "PF",
            label: Strings.translateString("French Polynesia")
        }, {
            value: "TF",
            label: Strings.translateString("French Southern Territories")
        }, {
            value: "GA",
            label: Strings.translateString("Gabon")
        }, {
            value: "GM",
            label: Strings.translateString("Gambia")
        }, {
            value: "GE",
            label: Strings.translateString("Georgia")
        }, {
            value: "DE",
            label: Strings.translateString("Germany")
        }, {
            value: "GH",
            label: Strings.translateString("Ghana")
        }, {
            value: "GI",
            label: Strings.translateString("Gibraltar")
        }, {
            value: "GR",
            label: Strings.translateString("Greece")
        }, {
            value: "GL",
            label: Strings.translateString("Greenland")
        }, {
            value: "GD",
            label: Strings.translateString("Grenada")
        }, {
            value: "GP",
            label: Strings.translateString("Guadeloupe")
        }, {
            value: "GU",
            label: Strings.translateString("Guam")
        }, {
            value: "GT",
            label: Strings.translateString("Guatemala")
        }, {
            value: "GG",
            label: Strings.translateString("Guernsey")
        }, {
            value: "GN",
            label: Strings.translateString("Guinea")
        }, {
            value: "GW",
            label: Strings.translateString("Guinea-Bissau")
        }, {
            value: "GY",
            label: Strings.translateString("Guyana")
        }, {
            value: "HT",
            label: Strings.translateString("Haiti")
        }, {
            value: "HM",
            label: Strings.translateString("Heard Island and Mcdonald Islands")
        }, {
            value: "VA",
            label: Strings.translateString("Holy See (Vatican City State)")
        }, {
            value: "HN",
            label: Strings.translateString("Honduras")
        }, {
            value: "HK",
            label: Strings.translateString("Hong Kong")
        }, {
            value: "HU",
            label: Strings.translateString("Hungary")
        }, {
            value: "IS",
            label: Strings.translateString("Iceland")
        }, {
            value: "IN",
            label: Strings.translateString("India")
        }, {
            value: "ID",
            label: Strings.translateString("Indonesia")
        }, {
            value: "IR",
            label: Strings.translateString("Iran (Islamic Republic Of)")
        }, {
            value: "IQ",
            label: Strings.translateString("Iraq")
        }, {
            value: "IE",
            label: Strings.translateString("Ireland")
        }, {
            value: "IM",
            label: Strings.translateString("Isle of Man")
        }, {
            value: "IL",
            label: Strings.translateString("Israel")
        }, {
            value: "IT",
            label: Strings.translateString("Italy")
        }, {
            value: "JM",
            label: Strings.translateString("Jamaica")
        }, {
            value: "JP",
            label: Strings.translateString("Japan")
        }, {
            value: "JE",
            label: Strings.translateString("Jersey")
        }, {
            value: "JO",
            label: Strings.translateString("Jordan")
        }, {
            value: "KZ",
            label: Strings.translateString("Kazakhstan")
        }, {
            value: "KE",
            label: Strings.translateString("Kenya")
        }, {
            value: "KI",
            label: Strings.translateString("Kiribati")
        }, {
            value: "KP",
            label: Strings.translateString("Democratic People's Republic Of Korea")
        }, {
            value: "KR",
            label: Strings.translateString("Republic Of Korea")
        }, {
            value: "KW",
            label: Strings.translateString("Kuwait")
        }, {
            value: "KG",
            label: Strings.translateString("Kyrgyzstan")
        }, {
            value: "LA",
            label: Strings.translateString("Lao People's Democratic Republic")
        }, {
            value: "LV",
            label: Strings.translateString("Latvia")
        }, {
            value: "LB",
            label: Strings.translateString("Lebanon")
        }, {
            value: "LS",
            label: Strings.translateString("Lesotho")
        }, {
            value: "LR",
            label: Strings.translateString("Liberia")
        }, {
            value: "LY",
            label: Strings.translateString("Libyan Arab Jamahiriya")
        }, {
            value: "LI",
            label: Strings.translateString("Liechtenstein")
        }, {
            value: "LT",
            label: Strings.translateString("Lithuania")
        }, {
            value: "LU",
            label: Strings.translateString("Luxembourg")
        }, {
            value: "MO",
            label: Strings.translateString("Macao")
        }, {
            value: "MK",
            label: Strings.translateString("The Former Yugoslav Republic Of Macedonia")
        }, {
            value: "MG",
            label: Strings.translateString("Madagascar")
        }, {
            value: "MW",
            label: Strings.translateString("Malawi")
        }, {
            value: "MY",
            label: Strings.translateString("Malaysia")
        }, {
            value: "MV",
            label: Strings.translateString("Maldives")
        }, {
            value: "ML",
            label: Strings.translateString("Mali")
        }, {
            value: "MT",
            label: Strings.translateString("Malta")
        }, {
            value: "MH",
            label: Strings.translateString("Marshall Islands")
        }, {
            value: "MQ",
            label: Strings.translateString("Martinique")
        }, {
            value: "MR",
            label: Strings.translateString("Mauritania")
        }, {
            value: "MU",
            label: Strings.translateString("Mauritius")
        }, {
            value: "YT",
            label: Strings.translateString("Mayotte")
        }, {
            value: "MX",
            label: Strings.translateString("Mexico")
        }, {
            value: "FM",
            label: Strings.translateString("Federated States Of Micronesia")
        }, {
            value: "MD",
            label: Strings.translateString("Republic Of Moldova")
        }, {
            value: "MC",
            label: Strings.translateString("Monaco")
        }, {
            value: "MN",
            label: Strings.translateString("Mongolia")
        }, {
            value: "ME",
            label: Strings.translateString("Montenegro")
        }, {
            value: "MS",
            label: Strings.translateString("Montserrat")
        }, {
            value: "MA",
            label: Strings.translateString("Morocco")
        }, {
            value: "MZ",
            label: Strings.translateString("Mozambique")
        }, {
            value: "MM",
            label: Strings.translateString("Myanmar")
        }, {
            value: "NA",
            label: Strings.translateString("Namibia")
        }, {
            value: "NR",
            label: Strings.translateString("Nauru")
        }, {
            value: "NP",
            label: Strings.translateString("Nepal")
        }, {
            value: "NL",
            label: Strings.translateString("Netherlands")
        }, {
            value: "AN",
            label: Strings.translateString("Netherlands Antilles")
        }, {
            value: "NC",
            label: Strings.translateString("New Caledonia")
        }, {
            value: "NZ",
            label: Strings.translateString("New Zealand")
        }, {
            value: "NI",
            label: Strings.translateString("Nicaragua")
        }, {
            value: "NE",
            label: Strings.translateString("Niger")
        }, {
            value: "NG",
            label: Strings.translateString("Nigeria")
        }, {
            value: "NU",
            label: Strings.translateString("Niue")
        }, {
            value: "NF",
            label: Strings.translateString("Norfolk Island")
        }, {
            value: "MP",
            label: Strings.translateString("Northern Mariana Islands")
        }, {
            value: "NO",
            label: Strings.translateString("Norway")
        }, {
            value: "OM",
            label: Strings.translateString("Oman")
        }, {
            value: "PK",
            label: Strings.translateString("Pakistan")
        }, {
            value: "PW",
            label: Strings.translateString("Palau")
        }, {
            value: "PS",
            label: Strings.translateString("Palestinian Territories")
        }, {
            value: "PA",
            label: Strings.translateString("Panama")
        }, {
            value: "PG",
            label: Strings.translateString("Papua New Guinea")
        }, {
            value: "PY",
            label: Strings.translateString("Paraguay")
        }, {
            value: "PE",
            label: Strings.translateString("Peru")
        }, {
            value: "PH",
            label: Strings.translateString("Philippines")
        }, {
            value: "PN",
            label: Strings.translateString("Pitcairn")
        }, {
            value: "PL",
            label: Strings.translateString("Poland")
        }, {
            value: "PT",
            label: Strings.translateString("Portugal")
        }, {
            value: "PR",
            label: Strings.translateString("Puerto Rico")
        }, {
            value: "QA",
            label: Strings.translateString("Qatar")
        }, {
            value: "RE",
            label: Strings.translateString("Reunion")
        }, {
            value: "RO",
            label: Strings.translateString("Romania")
        }, {
            value: "RU",
            label: Strings.translateString("Russian Federation")
        }, {
            value: "RW",
            label: Strings.translateString("Rwanda")
        }, {
            value: "BL",
            label: Strings.translateString("Saint Barthelemy")
        }, {
            value: "SH",
            label: Strings.translateString("Saint Helena")
        }, {
            value: "KN",
            label: Strings.translateString("Saint Kitts and Nevis")
        }, {
            value: "LC",
            label: Strings.translateString("Saint Lucia")
        }, {
            value: "MF",
            label: Strings.translateString("Saint Martin (French Part)")
        }, {
            value: "PM",
            label: Strings.translateString("Saint Pierre and Miquelon")
        }, {
            value: "VC",
            label: Strings.translateString("Saint Vincent and the Grenadines")
        }, {
            value: "WS",
            label: Strings.translateString("Samoa")
        }, {
            value: "SM",
            label: Strings.translateString("San Marino")
        }, {
            value: "ST",
            label: Strings.translateString("Sao Tome and Principe")
        }, {
            value: "SA",
            label: Strings.translateString("Saudi Arabia")
        }, {
            value: "SN",
            label: Strings.translateString("Senegal")
        }, {
            value: "RS",
            label: Strings.translateString("Serbia")
        }, {
            value: "SC",
            label: Strings.translateString("Seychelles")
        }, {
            value: "SL",
            label: Strings.translateString("Sierra Leone")
        }, {
            value: "SG",
            label: Strings.translateString("Singapore")
        }, {
            value: "SK",
            label: Strings.translateString("Slovakia")
        }, {
            value: "SI",
            label: Strings.translateString("Slovenia")
        }, {
            value: "SB",
            label: Strings.translateString("Solomon Islands")
        }, {
            value: "SO",
            label: Strings.translateString("Somalia")
        }, {
            value: "ZA",
            label: Strings.translateString("South Africa")
        }, {
            value: "GS",
            label: Strings.translateString("South Georgia and the South Sandwich Islands")
        }, {
            value: "ES",
            label: Strings.translateString("Spain")
        }, {
            value: "LK",
            label: Strings.translateString("Sri Lanka")
        }, {
            value: "SD",
            label: Strings.translateString("Sudan")
        }, {
            value: "SR",
            label: Strings.translateString("Suriname")
        }, {
            value: "SJ",
            label: Strings.translateString("Svalbard and Jan Mayen")
        }, {
            value: "SZ",
            label: Strings.translateString("Swaziland")
        }, {
            value: "SE",
            label: Strings.translateString("Sweden")
        }, {
            value: "CH",
            label: Strings.translateString("Switzerland")
        }, {
            value: "SY",
            label: Strings.translateString("Syrian Arab Republic")
        }, {
            value: "TW",
            label: Strings.translateString("Taiwan")
        }, {
            value: "TJ",
            label: Strings.translateString("Tajikistan")
        }, {
            value: "TH",
            label: Strings.translateString("Thailand")
        }, {
            value: "TL",
            label: Strings.translateString("Timor-Leste")
        }, {
            value: "TG",
            label: Strings.translateString("Togo")
        }, {
            value: "TK",
            label: Strings.translateString("Tokelau")
        }, {
            value: "TO",
            label: Strings.translateString("Tonga")
        }, {
            value: "TT",
            label: Strings.translateString("Trinidad and Tobago")
        }, {
            value: "TN",
            label: Strings.translateString("Tunisia")
        }, {
            value: "TR",
            label: Strings.translateString("Turkey")
        }, {
            value: "TM",
            label: Strings.translateString("Turkmenistan")
        }, {
            value: "TC",
            label: Strings.translateString("Turks and Caicos Islands")
        }, {
            value: "TV",
            label: Strings.translateString("Tuvalu")
        }, {
            value: "UG",
            label: Strings.translateString("Uganda")
        }, {
            value: "UA",
            label: Strings.translateString("Ukraine")
        }, {
            value: "AE",
            label: Strings.translateString("United Arab Emirates")
        }, {
            value: "GB",
            label: Strings.translateString("United Kingdom")
        }, {
            value: "TZ",
            label: Strings.translateString("United Republic Of Tanzania")
        }, {
            value: "US",
            label: Strings.translateString("United States")
        }, {
            value: "UM",
            label: Strings.translateString("United States Minor Outlying Islands")
        }, {
            value: "UY",
            label: Strings.translateString("Uruguay")
        }, {
            value: "UZ",
            label: Strings.translateString("Uzbekistan")
        }, {
            value: "VU",
            label: Strings.translateString("Vanuatu")
        }, {
            value: "VE",
            label: Strings.translateString("Venezuela")
        }, {
            value: "VN",
            label: Strings.translateString("Viet Nam")
        }, {
            value: "VG",
            label: Strings.translateString("Virgin Islands (British)")
        }, {
            value: "VI",
            label: Strings.translateString("Virgin Islands (U.S.)")
        }, {
            value: "WF",
            label: Strings.translateString("Wallis and Futuna")
        }, {
            value: "EH",
            label: Strings.translateString("Western Sahara")
        }, {
            value: "YE",
            label: Strings.translateString("Yemen")
        }, {
            value: "YU",
            label: Strings.translateString("Yugoslavia")
        }, {
            value: "ZM",
            label: Strings.translateString("Zambia")
        }, {
            value: "ZW",
            label: Strings.translateString("Zimbabwe")
        }]), l.createSelectElement(t, a)
    }
}(LPTools);
//# sourceMappingURL=sourcemaps/countrySelect.js.map