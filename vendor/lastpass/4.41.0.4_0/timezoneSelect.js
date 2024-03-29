! function(t) {
    var l = null;
    t.createTimezoneSelect = function(a) {
        return null === l && (l = [{
            value: "-12:00,0",
            label: "(-12:00) " + Strings.translateString("International Date Line West")
        }, {
            value: "-11:00,0",
            label: "(-11:00) " + Strings.translateString("Midway Island, Samoa")
        }, {
            value: "-10:00,0",
            label: "(-10:00) " + Strings.translateString("Hawaii")
        }, {
            value: "-09:00,1",
            label: "(-09:00) " + Strings.translateString("Alaska")
        }, {
            value: "-08:00,1",
            label: "(-08:00) " + Strings.translateString("Pacific Time (US & Canada)")
        }, {
            value: "-07:00,0",
            label: "(-07:00) " + Strings.translateString("Arizona")
        }, {
            value: "-07:00,1",
            label: "(-07:00) " + Strings.translateString("Mountain Time (US & Canada)")
        }, {
            value: "-06:00,0",
            label: "(-06:00) " + Strings.translateString("Central America, Saskatchewan")
        }, {
            value: "-06:00,1",
            label: "(-06:00) " + Strings.translateString("Central Time (US & Canada), Guadalajara, Mexico City")
        }, {
            value: "-05:00,0",
            label: "(-05:00) " + Strings.translateString("Indiana, Bogota, Lima, Quito, Rio Branco")
        }, {
            value: "-05:00,1",
            label: "(-05:00) " + Strings.translateString("Eastern Time (US & Canada)")
        }, {
            value: "-04:30,0",
            label: "(-04:30) " + Strings.translateString("Caracas")
        }, {
            value: "-04:00,1",
            label: "(-04:00) " + Strings.translateString("Atlantic Time (Canada), Manaus, Santiago")
        }, {
            value: "-04:00,0",
            label: "(-04:00) " + Strings.translateString("La Paz")
        }, {
            value: "-03:30,1",
            label: "(-03:30) " + Strings.translateString("Newfoundland")
        }, {
            value: "-03:00,1",
            label: "(-03:00) " + Strings.translateString("Greenland, Brasilia, Montevideo")
        }, {
            value: "-03:00,0",
            label: "(-03:00) " + Strings.translateString("Buenos Aires, Georgetown")
        }, {
            value: "-02:00,1",
            label: "(-02:00) " + Strings.translateString("Mid-Atlantic")
        }, {
            value: "-02:00,0",
            label: "(-02:00) " + Strings.translateString("South Georgia")
        }, {
            value: "-01:00,1",
            label: "(-01:00) " + Strings.translateString("Azores")
        }, {
            value: "-01:00,0",
            label: "(-01:00) " + Strings.translateString("Cape Verde Is.")
        }, {
            value: "00:00,0",
            label: "(00:00) " + Strings.translateString("Casablanca, Monrovia, Reykjavik")
        }, {
            value: "00:00,1",
            label: "(00:00) " + Strings.translateString("GMT: Dublin, Edinburgh, Lisbon, London")
        }, {
            value: "+01:00,1",
            label: "(+01:00) " + Strings.translateString("Amsterdam, Berlin, Rome, Vienna, Prague, Brussels")
        }, {
            value: "+01:00,0",
            label: "(+01:00) " + Strings.translateString("West Central Africa")
        }, {
            value: "+02:00,1",
            label: "(+02:00) " + Strings.translateString("Amman, Athens, Istanbul, Beirut, Cairo, Jerusalem")
        }, {
            value: "+02:00,0",
            label: "(+02:00) " + Strings.translateString("Harare, Pretoria")
        }, {
            value: "+03:00,1",
            label: "(+03:00) " + Strings.translateString("Baghdad")
        }, {
            value: "+03:00,0",
            label: "(+03:00) " + Strings.translateString("Kuwait, Riyadh, Nairobi, Moscow, St. Petersburg, Volgograd")
        }, {
            value: "+03:30,1",
            label: "(+03:30) " + Strings.translateString("Tehran")
        }, {
            value: "+04:00,0",
            label: "(+04:00) " + Strings.translateString("Abu Dhabi, Muscat, Tbilisi, Izhevsk")
        }, {
            value: "+04:00,1",
            label: "(+04:00) " + Strings.translateString("Baku, Yerevan")
        }, {
            value: "+04:30,0",
            label: "(+04:30) " + Strings.translateString("Kabul")
        }, {
            value: "+05:00,1",
            label: "(+05:00) " + Strings.translateString("GMT+5")
        }, {
            value: "+05:00,0",
            label: "(+05:00) " + Strings.translateString("Islamabad, Karachi, Tashkent, Ekaterinburg")
        }, {
            value: "+05:30,0",
            label: "(+05:30) " + Strings.translateString("Chennai, Kolkata, Mumbai, New Delhi, Sri Jayawardenepura")
        }, {
            value: "+05:45,0",
            label: "(+05:45) " + Strings.translateString("Kathmandu")
        }, {
            value: "+06:00,0",
            label: "(+06:00) " + Strings.translateString("Astana, Dhaka, Novosibirsk")
        }, {
            value: "+06:00,1",
            label: "(+06:00) " + Strings.translateString("Almaty")
        }, {
            value: "+06:30,0",
            label: "(+06:30) " + Strings.translateString("Yangon (Rangoon)")
        }, {
            value: "+07:00,1",
            label: "(+07:00) " + Strings.translateString("GMT+7")
        }, {
            value: "+07:00,0",
            label: "(+07:00) " + Strings.translateString("Bangkok, Hanoi, Jakarta, Krasnoyarsk")
        }, {
            value: "+08:00,0",
            label: "(+08:00) " + Strings.translateString("Beijing, Hong Kong, Singapore, Taipei, Irkutsk")
        }, {
            value: "+08:00,1",
            label: "(+08:00) " + Strings.translateString("Ulaan Bataar, Perth")
        }, {
            value: "+09:00,1",
            label: "(+09:00) " + Strings.translateString("GMT+9")
        }, {
            value: "+09:00,0",
            label: "(+09:00) " + Strings.translateString("Seoul, Osaka, Sapporo, Tokyo, Yakutsk")
        }, {
            value: "+09:30,0",
            label: "(+09:30) " + Strings.translateString("Darwin")
        }, {
            value: "+09:30,1",
            label: "(+09:30) " + Strings.translateString("Adelaide")
        }, {
            value: "+10:00,0",
            label: "(+10:00) " + Strings.translateString("Brisbane, Guam, Port Moresby, Vladivostok")
        }, {
            value: "+10:00,1",
            label: "(+10:00) " + Strings.translateString("Canberra, Melbourne, Sydney, Hobart")
        }, {
            value: "+11:00,0",
            label: "(+11:00) " + Strings.translateString("Magadan, Solomon Is., New Caledonia")
        }, {
            value: "+12:00,1",
            label: "(+12:00) " + Strings.translateString("Auckland, Wellington")
        }, {
            value: "+12:00,0",
            label: "(+12:00) " + Strings.translateString("Fiji, Kamchatka, Marshall Is.")
        }, {
            value: "+13:00,0",
            label: "(+13:00) " + Strings.translateString("Nuku'alofa")
        }]), t.createSelectElement(l, a)
    }
}(LPTools);
//# sourceMappingURL=sourcemaps/timezoneSelect.js.map