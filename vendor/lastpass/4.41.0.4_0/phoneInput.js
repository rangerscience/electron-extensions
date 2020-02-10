var PhoneInput = function() {
    var t = function() {
        var e;
        DialogInput.ErrorDisplayInput.call(this), this.container = LPTools.createElement("div"), this.countryCodeDropdown = new DialogInput.CountryInput, this.countryCode = this.countryCodeDropdown.getValue(), this.numberCell = LPTools.createElement("td", "phoneNumberCell"), this.areaCodeInput = LPTools.createElement("input", {
            class: "dialogInput areaCode",
            type: "text",
            size: 3,
            maxlength: 3
        }), this.phoneInput1 = LPTools.createElement("input", {
            class: "dialogInput phonePartOne",
            type: "text",
            size: 3,
            maxlength: 3
        }), this.phoneInput2 = LPTools.createElement("input", {
            class: "dialogInput phonePartTwo",
            type: "text",
            size: 4,
            maxlength: 4
        }), this.ccInput = LPTools.createElement("input", {
            type: "text",
            class: "dialogInput countryCode",
            size: 3,
            maxlength: 3,
            disabled: !0
        }), this.phoneInput = LPTools.createElement("input", {
            class: "dialogInput phone",
            type: "text"
        }), this.extInput = LPTools.createElement("input", {
            class: "dialogInput",
            type: "text"
        }), (e = this).countryCodeDropdown.onChange(function(t) {
            e.setCountryCode(CC3L[t])
        })
    };
    ((t.prototype = Object.create(DialogInput.ErrorDisplayInput.prototype)).constructor = t).prototype.getElement = function() {
        return $(this.container)
    }, t.prototype.validate = function(t, e, n) {
        return !n || "" !== this.countryCodeDropdown.getValue() || (t.addError(e, Strings.translateString("Country must be entered for this phone number.")), !1)
    }, t.prototype.buildError = function() {
        return this.buildErrorElement({
            element: $(this.container)
        })
    }, t.prototype.buildPhoneNumberInput = function() {
        LPTools.removeDOMChildren(this.numberCell), this.isDomestic() ? (this.numberCell.appendChild(document.createTextNode("(")), this.numberCell.appendChild(this.areaCodeInput), this.numberCell.appendChild(document.createTextNode(")")), this.numberCell.appendChild(this.phoneInput1), this.numberCell.appendChild(this.phoneInput2)) : (this.numberCell.appendChild(this.ccInput), this.numberCell.appendChild(this.phoneInput))
    }, t.prototype.buildInputElement = function() {
        LPTools.removeDOMChildren(this.container);
        var t = LPTools.createElement("table", "phoneNumber"),
            e = LPTools.createElement("tbody"),
            n = LPTools.createElement("tr");
        this.container.appendChild(this.countryCodeDropdown.getNativeElement()), this.container.appendChild(t), t.appendChild(e), e.appendChild(n), n.appendChild(this.numberCell), this.buildPhoneNumberInput(), n.appendChild(LPTools.createElement("td", "extensionLabel", "ext."));
        var o = LPTools.createElement("td", "extensionCell");
        return n.appendChild(o), o.appendChild(this.extInput), this.container
    }, t.prototype.isDomestic = function() {
        return "1" === e[this.countryCode]
    }, t.prototype.getNumericCountryCode = function() {
        return e[this.countryCode]
    }, t.prototype.setCountryCode = function(t) {
        var e = this.countryCode,
            n = this.isDomestic(),
            o = this.getValueInternal().num,
            i = this.getNumericCountryCode();
        o = i ? o.substring(i.length) : o, this.countryCode = t, e && n === this.isDomestic() || this.buildPhoneNumberInput(), i = this.getNumericCountryCode(), this.setPhoneNumber(i ? i + o : "")
    }, t.prototype.clear = function() {
        DialogInput.ErrorDisplayInput.prototype.clear.apply(this, arguments), this.areaCodeInput.value = "", this.phoneInput1.value = "", this.phoneInput2.value = "", this.ccInput.value = "", this.phoneInput.value = "", this.extInput.value = "", this.countryCodeDropdown.clear()
    }, t.prototype.default = function() {
        this.clear()
    }, t.prototype.getValue = function() {
        var t = this.getValueInternal();
        return t.num || t.ext ? JSON.stringify(t) : ""
    }, t.prototype.getValueInternal = function() {
        var t;
        return {
            num: t = this.isDomestic() ? "1" + this.areaCodeInput.value + this.phoneInput1.value + this.phoneInput2.value : this.ccInput.value + this.phoneInput.value,
            ext: this.extInput.value,
            cc3l: this.countryCode
        }
    };
    var n = function(t) {
        for (var e in CC3L)
            if (CC3L[e] === t) return e;
        return ""
    };
    t.prototype.setPhoneNumber = function(t) {
        if (t)
            if (this.isDomestic()) this.areaCodeInput.value = t.substring(1, 4), this.phoneInput1.value = t.substring(4, 7), this.phoneInput2.value = t.substring(7);
            else {
                var e = this.getNumericCountryCode();
                e ? (this.ccInput.value = e, this.phoneInput.value = t.substring(e.length)) : (this.ccInput.value = "", this.phoneInput.value = "")
            }
    }, t.prototype.setValue = function(t) {
        try {
            var e = JSON.parse(t);
            this.countryCode = e.cc3l, this.countryCodeDropdown.setValue(n(e.cc3l)), this.setPhoneNumber(e.num), this.buildPhoneNumberInput(), this.extInput.value = e.ext || ""
        } catch (t) {
            this.clear()
        }
    };
    var e = {
        AFG: "93",
        ALA: "358",
        ALB: "355",
        DZA: "213",
        ASM: "1",
        AND: "376",
        AGO: "244",
        AIA: "1",
        ATA: "672",
        ATG: "1",
        ARG: "54",
        ARM: "374",
        ABW: "297",
        AUS: "61",
        AUT: "43",
        AZE: "994",
        BHS: "1",
        BHR: "973",
        BGD: "880",
        BRB: "1",
        BLR: "375",
        BEL: "32",
        BLZ: "501",
        BEN: "229",
        BMU: "1",
        BTN: "975",
        BOL: "591",
        BIH: "387",
        BWA: "267",
        BVT: "47",
        BRA: "55",
        IOT: "246",
        BRN: "673",
        BGR: "359",
        BFA: "226",
        BDI: "257",
        KHM: "855",
        CMR: "237",
        CAN: "1",
        CPV: "238",
        CYM: "1",
        CAF: "236",
        TCD: "235",
        CHL: "56",
        CHN: "86",
        CXR: "61",
        CCK: "61",
        COL: "57",
        COM: "269",
        COG: "242",
        COD: "243",
        COK: "682",
        CRI: "506",
        CIV: "225",
        HRV: "385",
        CUB: "53",
        CYP: "357",
        CZE: "420",
        DNK: "45",
        DJI: "253",
        DMA: "1",
        DOM: "1",
        ECU: "593",
        EGY: "20",
        SLV: "503",
        GNQ: "240",
        ERI: "291",
        EST: "372",
        ETH: "251",
        FLK: "500",
        FRO: "298",
        FJI: "679",
        FIN: "358",
        FRA: "33",
        GUF: "594",
        PYF: "689",
        ATF: "596",
        GAB: "241",
        GMB: "220",
        GEO: "995",
        DEU: "49",
        GHA: "233",
        GIB: "350",
        GRC: "30",
        GRL: "299",
        GRD: "1",
        GLP: "590",
        GUM: "1",
        GTM: "502",
        GGY: "44",
        GIN: "224",
        GNB: "245",
        GUY: "592",
        HTI: "509",
        HMD: "672",
        VAT: "379",
        HND: "504",
        HKG: "852",
        HUN: "36",
        ISL: "354",
        IND: "91",
        IDN: "62",
        IRN: "98",
        IRQ: "964",
        IRL: "353",
        IMM: "44",
        ISR: "972",
        ITA: "39",
        JAM: "1",
        JPN: "81",
        JEY: "44",
        JOR: "962",
        KAZ: "7",
        KEN: "254",
        KIR: "686",
        PRK: "850",
        KOR: "82",
        KWT: "965",
        KGZ: "996",
        LAO: "856",
        LVA: "371",
        LBN: "961",
        LSO: "266",
        LBR: "231",
        LBY: "218",
        LIE: "423",
        LTU: "370",
        LUX: "352",
        MAC: "853",
        MKD: "389",
        MDG: "261",
        MWI: "265",
        MYS: "60",
        MDV: "960",
        MLI: "223",
        MLT: "356",
        MHL: "692",
        MTQ: "596",
        MRT: "222",
        MUS: "230",
        MYT: "262",
        MEX: "52",
        FSM: "691",
        MDA: "373",
        MCO: "377",
        MNG: "976",
        MNE: "382",
        MSR: "1",
        MAR: "212",
        MOZ: "258",
        MMR: "95",
        NAM: "264",
        NRU: "674",
        NPL: "977",
        NLD: "31",
        ANT: "599",
        NCL: "687",
        NZL: "64",
        NIC: "505",
        NER: "227",
        NGA: "234",
        NIU: "683",
        NFK: "672",
        MNP: "1",
        NOR: "47",
        OMN: "968",
        PAK: "92",
        PLW: "680",
        PSE: "970",
        PAN: "507",
        PNG: "675",
        PRY: "595",
        PER: "51",
        PHL: "63",
        PCN: "872",
        POL: "48",
        PRT: "351",
        PRI: "1",
        QAT: "974",
        REU: "262",
        ROU: "40",
        RUS: "7",
        RWA: "250",
        BLM: "590",
        SHN: "290",
        KNA: "1",
        LCA: "1",
        MAF: "590",
        SPM: "508",
        VCT: "1",
        WSM: "685",
        SMR: "378",
        STP: "239",
        SAU: "966",
        SEN: "221",
        SRB: "381",
        SYC: "248",
        SLE: "232",
        SGP: "65",
        SVK: "421",
        SVN: "386",
        SLB: "677",
        SOM: "252",
        ZAF: "27",
        SGS: "995",
        ESP: "34",
        LKA: "94",
        SDN: "249",
        SUR: "597",
        SJM: "47",
        SWZ: "268",
        SWE: "46",
        CHE: "41",
        SYR: "963",
        TWN: "886",
        TJK: "992",
        TZA: "255",
        THA: "66",
        TLS: "670",
        TGO: "228",
        TKL: "690",
        TON: "676",
        TTO: "1",
        TUN: "216",
        TUR: "90",
        TKM: "993",
        TCA: "1",
        TUV: "688",
        UGA: "256",
        UKR: "380",
        ARE: "971",
        GBR: "44",
        USA: "1",
        UMI: "1",
        URY: "598",
        UZB: "998",
        VUT: "678",
        VEN: "58",
        VNM: "84",
        VGB: "1",
        VIR: "1",
        WLF: "681",
        ESH: "212",
        YEM: "967",
        YUG: "381",
        ZMB: "260",
        ZWE: "263",
        ESC: "34"
    };
    return t
}();
//# sourceMappingURL=sourcemaps/phoneInput.js.map