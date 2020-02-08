var CPWbot_bg, g_v2engine = !0,
    g_v3engine = !1;
CPWbot_bg = CPWbot_bg || new CPWbot_bg_lib;
var g_cpw_server_initiated_tabid = null,
    g_cpw_do_fakeui = !1,
    TYPE_ID = "id",
    TYPE_NAME = "name",
    TYPE_XPATH = "xpath",
    FN_LOGIN = 1,
    FN_PASSWORD = 2,
    FN_LOGIN_OTHER = 5,
    FN_CURRENT_PASS = 10,
    FN_NEW_PASS = 11,
    FN_NEW_PASS_CONFIRM = 12,
    FN_CPW_OTHER = 13,
    FN_CPW_INVALID = 14,
    FN_LOGIN_INVALID = 15,
    FN_LOGIN_SUCCESS = 16,
    FN_LOGIN_SUCCESS_INVALID = 17,
    FN_NAVIGATE_TO_CPW = 18,
    FN_CPW_SUCCESS = 19,
    FN_CPW_SUCCESS_INVALID = 20,
    FN_NAVIGATE_TO_ACCTMGMT = 21,
    FN_CPW_SUBMIT = 22,
    FN_IS_LOGGED_IN = 23,
    FN_IS_LOGGED_IN_NEGATION = 24,
    FN_LOGIN_SUBMIT = 25,
    FN_POPUP_EXISTS = 26,
    FN_POPUP_DISMISS = 27,
    FN_REVEAL_LOGIN = 28,
    FN_CHALLENGE_LOGIN = 29,
    FN_CHALLENGE_PASSWORD = 30,
    FN_CHALLENGE_OTHER = 31,
    FN_CHALLENGE_SUBMIT = 32,
    FN_CHALLENGE_INVALID = 33,
    FN_CHALLENGE_SUCCESS = 34,
    FN_CHALLENGE_SUCCESS_INVALID = 35,
    FN_EPHEMERAL_STATE = 37,
    FN_NAVIGATE_TO_LOGOUT = 38,
    FN_CAPTCHA = 39,
    FN_MULTI_FACTOR = 40,
    FN_PASSWORD_HINT = 41,
    FN_POPUP_EXISTS_INVALID = 42,
    FN_FAKEUI_LOGGED_OUT_1 = 43,
    FN_FAKEUI_LOGGED_OUT_2 = 44,
    FN_FAKEUI_LOGGED_OUT_3 = 45,
    FN_FAKEUI_LOGGED_OUT_INPUT = 46,
    FN_FAKEUI_LOGGED_IN_1 = 47,
    FN_FAKEUI_LOGGED_IN_2 = 48,
    FN_FAKEUI_LOGGED_IN_3 = 49,
    FN_FAKEUI_LOGGED_IN_INPUT = 50,
    FN_FORCE_FAIL = 51,
    FN_CAPTCHA_SUCCESS = 52,
    FN_MULTI_FACTOR_SUCCESS = 53,
    FN_PASSWORD_HINT_SUCCESS = 54,
    FN_LOGIN_ENTRY_INVALID = 55,
    FN_LOGIN_ENTRY_USERNAME = 56,
    FN_LOGIN_ENTRY_SUBMIT = 57,
    FN_LOGIN_ENTRY_PASSWORD = 58,
    FN_LOGIN_ENTRY_SUCCESS_INVALID = 59,
    FN_LOGIN_ENTRY_SUCCESS = 60,
    FN_REVEAL_LOGOUT = 61,
    CONST_CLICK_NOMINAL = 0,
    CONST_CLICK_NO_FOCUS = 1,
    CONST_CLICK_MOUSEDOWN = 2,
    CONST_CLICK_STRANGE = 3,
    JS_PRE_NAVIGATE_CPW = 1,
    JS_PRE_LOGIN = 2,
    JS_POST_NAVIGATE_CPW = 3,
    JS_POST_LOGIN = 4,
    JS_PRE_CPW = 5,
    JS_POST_CPW = 6,
    JS_PRE_ACCTMGMT = 7,
    JS_POST_ACCTMGMT = 8,
    JS_LOGIN_REVEAL = 9,
    JS_VALIDATE_LOGIN_SUCCESS = 10,
    JS_VALIDATE_CPW_SUCCESS = 11,
    JS_LOGIN_SUBMIT = 12,
    JS_FINISH = 13,
    JS_PRE_CHALLENGE = 14,
    JS_POST_CHALLENGE = 15,
    JS_CHALLENGE_SUBMIT = 16,
    JS_VALIDATE_CHALLENGE_SUCCESS = 17,
    JS_BEGIN = 18,
    JS_PRE_LOGOUT = 19,
    JS_POST_LOGOUT = 20,
    JS_LOGIN_ENTRY_SUBMIT = 21,
    JS_PRE_LOGIN_ENTRY = 22,
    JS_POST_LOGIN_ENTRY = 23,
    JS_VALIDATE_LOGIN_ENTRY_SUCCESS = 24,
    JS_PRE_DOCAPTCHA = 25,
    JS_POST_DOCAPTCHA = 26;

function replace_constants(e) {
    if (!e) return null;
    if (void 0 !== e.field_info)
        for (var t = 0; t < e.field_info.length; t++) {
            if (void 0 !== e.field_info[t].id_type) switch (e.field_info[t].id_type) {
                case "TYPE_ID":
                    e.field_info[t].id_type = TYPE_ID;
                    break;
                case "TYPE_NAME":
                    e.field_info[t].id_type = TYPE_NAME;
                    break;
                case "TYPE_XPATH":
                    e.field_info[t].id_type = TYPE_XPATH
            }
            if (void 0 !== e.field_info[t].id_function) switch (e.field_info[t].id_function) {
                case "FN_LOGIN":
                    e.field_info[t].id_function = FN_LOGIN;
                    break;
                case "FN_PASSWORD":
                    e.field_info[t].id_function = FN_PASSWORD;
                    break;
                case "FN_LOGIN_OTHER":
                    e.field_info[t].id_function = FN_LOGIN_OTHER;
                    break;
                case "FN_CURRENT_PASS":
                    e.field_info[t].id_function = FN_CURRENT_PASS;
                    break;
                case "FN_NEW_PASS":
                    e.field_info[t].id_function = FN_NEW_PASS;
                    break;
                case "FN_NEW_PASS_CONFIRM":
                    e.field_info[t].id_function = FN_NEW_PASS_CONFIRM;
                    break;
                case "FN_CPW_OTHER":
                    e.field_info[t].id_function = FN_CPW_OTHER;
                    break;
                case "FN_CPW_INVALID":
                    e.field_info[t].id_function = FN_CPW_INVALID;
                    break;
                case "FN_LOGIN_INVALID":
                    e.field_info[t].id_function = FN_LOGIN_INVALID;
                    break;
                case "FN_LOGIN_SUCCESS":
                    e.field_info[t].id_function = FN_LOGIN_SUCCESS;
                    break;
                case "FN_LOGIN_SUCCESS_INVALID":
                    e.field_info[t].id_function = FN_LOGIN_SUCCESS_INVALID;
                    break;
                case "FN_NAVIGATE_TO_CPW":
                    e.field_info[t].id_function = FN_NAVIGATE_TO_CPW;
                    break;
                case "FN_CPW_SUCCESS":
                    e.field_info[t].id_function = FN_CPW_SUCCESS;
                    break;
                case "FN_CPW_SUCCESS_INVALID":
                    e.field_info[t].id_function = FN_CPW_SUCCESS_INVALID;
                    break;
                case "FN_NAVIGATE_TO_ACCTMGMT":
                    e.field_info[t].id_function = FN_NAVIGATE_TO_ACCTMGMT;
                    break;
                case "FN_CPW_SUBMIT":
                    e.field_info[t].id_function = FN_CPW_SUBMIT;
                    break;
                case "FN_IS_LOGGED_IN":
                    e.field_info[t].id_function = FN_IS_LOGGED_IN;
                    break;
                case "FN_IS_LOGGED_IN_NEGATION":
                    e.field_info[t].id_function = FN_IS_LOGGED_IN_NEGATION;
                    break;
                case "FN_LOGIN_SUBMIT":
                    e.field_info[t].id_function = FN_LOGIN_SUBMIT;
                    break;
                case "FN_POPUP_EXISTS":
                    e.field_info[t].id_function = FN_POPUP_EXISTS;
                    break;
                case "FN_POPUP_DISMISS":
                    e.field_info[t].id_function = FN_POPUP_DISMISS;
                    break;
                case "FN_REVEAL_LOGIN":
                    e.field_info[t].id_function = FN_REVEAL_LOGIN;
                    break;
                case "FN_CHALLENGE_LOGIN":
                    e.field_info[t].id_function = FN_CHALLENGE_LOGIN;
                    break;
                case "FN_CHALLENGE_PASSWORD":
                    e.field_info[t].id_function = FN_CHALLENGE_PASSWORD;
                    break;
                case "FN_CHALLENGE_OTHER":
                    e.field_info[t].id_function = FN_CHALLENGE_OTHER;
                    break;
                case "FN_CHALLENGE_SUBMIT":
                    e.field_info[t].id_function = FN_CHALLENGE_SUBMIT;
                    break;
                case "FN_CHALLENGE_INVALID":
                    e.field_info[t].id_function = FN_CHALLENGE_INVALID;
                    break;
                case "FN_CHALLENGE_SUCCESS":
                    e.field_info[t].id_function = FN_CHALLENGE_SUCCESS;
                    break;
                case "FN_CHALLENGE_SUCCESS_INVALID":
                    e.field_info[t].id_function = FN_CHALLENGE_SUCCESS_INVALID;
                    break;
                case "FN_NAVIGATE_TO_LOGOUT":
                    e.field_info[t].id_function = FN_NAVIGATE_TO_LOGOUT;
                    break;
                case "FN_EPHEMERAL_STATE":
                    e.field_info[t].id_function = FN_EPHEMERAL_STATE;
                    break;
                case "FN_CAPTCHA":
                    e.field_info[t].id_function = FN_CAPTCHA;
                    break;
                case "FN_MULTI_FACTOR":
                    e.field_info[t].id_function = FN_MULTI_FACTOR;
                    break;
                case "FN_PASSWORD_HINT":
                    e.field_info[t].id_function = FN_PASSWORD_HINT;
                    break;
                case "FN_POPUP_EXISTS_INVALID":
                    e.field_info[t].id_function = FN_POPUP_EXISTS_INVALID;
                    break;
                case "FN_FORCE_FAIL":
                    e.field_info[t].id_function = FN_FORCE_FAIL;
                    break;
                case "FN_CAPTCHA_SUCCESS":
                    e.field_info[t].id_function = FN_CAPTCHA_SUCCESS;
                    break;
                case "FN_MULTI_FACTOR_SUCCESS":
                    e.field_info[t].id_function = FN_MULTI_FACTOR_SUCCESS;
                    break;
                case "FN_PASSWORD_HINT_SUCCESS":
                    e.field_info[t].id_function = FN_PASSWORD_HINT_SUCCESS;
                    break;
                case "FN_LOGIN_ENTRY_INVALID":
                    e.field_info[t].id_function = FN_LOGIN_ENTRY_INVALID;
                    break;
                case "FN_LOGIN_ENTRY_USERNAME":
                    e.field_info[t].id_function = FN_LOGIN_ENTRY_USERNAME;
                    break;
                case "FN_LOGIN_ENTRY_PASSWORD":
                    e.field_info[t].id_function = FN_LOGIN_ENTRY_PASSWORD;
                    break;
                case "FN_LOGIN_ENTRY_SUBMIT":
                    e.field_info[t].id_function = FN_LOGIN_ENTRY_SUBMIT;
                    break;
                case "FN_LOGIN_ENTRY_SUCCESS":
                    e.field_info[t].id_function = FN_LOGIN_ENTRY_SUCCESS;
                    break;
                case "FN_LOGIN_ENTRY_SUCCESS_INVALID":
                    e.field_info[t].id_function = FN_LOGIN_ENTRY_SUCCESS_INVALID;
                    break;
                case "FN_REVEAL_LOGOUT":
                    e.field_info[t].id_function = FN_REVEAL_LOGOUT;
                    break;
                case "FN_FAKEUI_LOGGED_IN_1":
                    e.field_info[t].id_function = FN_FAKEUI_LOGGED_IN_1;
                    break;
                case "FN_FAKEUI_LOGGED_IN_2":
                    e.field_info[t].id_function = FN_FAKEUI_LOGGED_IN_2;
                    break;
                case "FN_FAKEUI_LOGGED_IN_3":
                    e.field_info[t].id_function = FN_FAKEUI_LOGGED_IN_3;
                    break;
                case "FN_FAKEUI_LOGGED_IN_INPUT":
                    e.field_info[t].id_function = FN_FAKEUI_LOGGED_IN_INPUT;
                    break;
                case "FN_FAKEUI_LOGGED_OUT_1":
                    e.field_info[t].id_function = FN_FAKEUI_LOGGED_OUT_1;
                    break;
                case "FN_FAKEUI_LOGGED_OUT_2":
                    e.field_info[t].id_function = FN_FAKEUI_LOGGED_OUT_2;
                    break;
                case "FN_FAKEUI_LOGGED_OUT_3":
                    e.field_info[t].id_function = FN_FAKEUI_LOGGED_OUT_3;
                    break;
                case "FN_FAKEUI_LOGGED_OUT_OUTPUT":
                    e.field_info[t].id_function = FN_FAKEUI_LOGGED_OUT_INPUT
            }
        }
    if (void 0 !== e.jsfrags)
        for (var t = 0; t < e.jsfrags.length; t++)
            if (void 0 !== e.jsfrags[t].jstype) switch (e.jsfrags[t].jstype) {
                case "JS_PRE_NAVIGATE_CPW":
                    e.jsfrags[t].jstype = JS_PRE_NAVIGATE_CPW;
                    break;
                case "JS_PRE_LOGIN":
                    e.jsfrags[t].jstype = JS_PRE_LOGIN;
                    break;
                case "JS_POST_NAVIGATE_CPW":
                    e.jsfrags[t].jstype = JS_POST_NAVIGATE_CPW;
                    break;
                case "JS_POST_LOGIN":
                    e.jsfrags[t].jstype = JS_POST_LOGIN;
                    break;
                case "JS_PRE_CPW":
                    e.jsfrags[t].jstype = JS_PRE_CPW;
                    break;
                case "JS_POST_CPW":
                    e.jsfrags[t].jstype = JS_POST_CPW;
                    break;
                case "JS_PRE_ACCTMGMT":
                    e.jsfrags[t].jstype = JS_PRE_ACCTMGMT;
                    break;
                case "JS_POST_ACCTMGMT":
                    e.jsfrags[t].jstype = JS_POST_ACCTMGMT;
                    break;
                case "JS_LOGIN_REVEAL":
                    e.jsfrags[t].jstype = JS_LOGIN_REVEAL;
                    break;
                case "JS_VALIDATE_LOGIN_SUCCESS":
                    e.jsfrags[t].jstype = JS_VALIDATE_LOGIN_SUCCESS;
                    break;
                case "JS_VALIDATE_CPW_SUCCESS":
                    e.jsfrags[t].jstype = JS_VALIDATE_CPW_SUCCESS;
                    break;
                case "JS_LOGIN_SUBMIT":
                    e.jsfrags[t].jstype = JS_LOGIN_SUBMIT;
                    break;
                case "JS_FINISH":
                    e.jsfrags[t].jstype = JS_FINISH;
                    break;
                case "JS_PRE_CHALLENGE":
                    e.jsfrags[t].jstype = JS_PRE_CHALLENGE;
                    break;
                case "JS_POST_CHALLENGE":
                    e.jsfrags[t].jstype = JS_POST_CHALLENGE;
                    break;
                case "JS_CHALLENGE_SUBMIT":
                    e.jsfrags[t].jstype = JS_CHALLENGE_SUBMIT;
                    break;
                case "JS_VALIDATE_CHALLENGE_SUCCESS":
                    e.jsfrags[t].jstype = JS_VALIDATE_CHALLENGE_SUCCESS;
                    break;
                case "JS_BEGIN":
                    e.jsfrags[t].jstype = JS_BEGIN;
                    break;
                case "JS_PRE_LOGOUT":
                    e.jsfrags[t].jstype = JS_PRE_LOGOUT;
                    break;
                case "JS_POST_LOGOUT":
                    e.jsfrags[t].jstype = JS_POST_LOGOUT;
                    break;
                case "JS_PRE_LOGIN_ENTRY":
                    e.jsfrags[t].jstype = JS_PRE_LOGIN_ENTRY;
                    break;
                case "JS_POST_LOGIN_ENTRY":
                    e.jsfrags[t].jstype = JS_POST_LOGIN_ENTRY;
                    break;
                case "JS_LOGIN_ENTRY_SUBMIT":
                    e.jsfrags[t].jstype = JS_LOGIN_ENTRY_SUBMIT;
                    break;
                case "JS_PRE_DOCAPTCHA":
                    e.jsfrags[t].jstype = JS_PRE_DOCAPTCHA;
                    break;
                case "JS_POST_DOCAPTCHA":
                    e.jsfrags[t].jstype = JS_POST_DOCAPTCHA
            }
    if (void 0 !== e.click_flavor) switch (e.click_flavor) {
        case "CLICK_NO_FOCUS":
            e.click_flavor = CONST_CLICK_NO_FOCUS;
            break;
        case "CLICK_MOUSEDOWN":
            e.click_flavor = CONST_CLICK_MOUSEDOWN;
            break;
        case "CLICK_STRANGE":
            e.click_flavor = CONST_CLICK_STRANGE;
            break;
        case "CLICK_NOMINAL":
        default:
            e.click_flavor = CONST_CLICK_NOMINAL
    }
    return e
}
var DEFAULT_CLICK_DELAY = 250,
    DEFAULT_FILL_DELAY = 250,
    DEFAULT_SESSION_TIMEOUT = 12e4,
    DEFAULT_VALIDATE_TIMEOUT = 1e4,
    CLICK_RETRY_TIME = 5e3,
    recipe_template = {
        version: 1,
        symbolic: "",
        login_url: "",
        acctmgmt_url: null,
        cpw_url: "",
        logout_url: "",
        login_entry_url: "",
        fakeui_loggedout_url: "",
        fakeui_loggedin_url: "",
        validate_timeout: 5e3,
        field_info: [],
        jsfrags: [],
        cpw_delay: 250,
        login_delay: 250,
        acctmgmt_delay: 250,
        login_reveal_delay: 250,
        logout_reveal_delay: 250,
        logout_delay: 250,
        fill_field_delay: 250,
        click_field_delay: 250,
        trigger_cpw_delay: 0,
        cpw_change_success_url: null,
        cpw_change_failure_url: null,
        login_failure_url: null,
        login_success_url: null,
        login_entry_failure_url: null,
        login_entry_success_url: null,
        challenge_invalidate_url: null,
        challenge_validate_url: null,
        click_flavor: CONST_CLICK_NOMINAL,
        generate_pref_overrides: null,
        reveal_login_js_delay: 0,
        reveal_cpw_js_delay: 0,
        navigate_acctmgmt_js_delay: 0,
        postreveallogin_sleep: 0,
        postacctmgmt_sleep: 0,
        postrevealcpw_sleep: 0,
        posttrigger_sleep: 0,
        postlogout_sleep: 0,
        start_delay: 0,
        post_login_submit_delay: 1100,
        post_js_begin_delay: 5555,
        js_finish_delay: 2e3,
        session_timeout: DEFAULT_SESSION_TIMEOUT,
        document_complete_timeout: 0,
        proceed_on_interactive: 0,
        click_on_fields_on_fill: 0,
        fill_password_fields_via_keys: 0
    },
    r_tesco = {},
    r_netflix = {},
    minimal_recipe = {
        symbolic: "",
        login_url: "",
        field_info: [],
        generate_pref_overrides: {
            minlength: 6
        }
    },
    telegraph = {
        symbolic: "Daily Telegraph"
    },
    amex = {
        symbolic: "American Express",
        field_info: [],
        jsfrag: []
    },
    boa = {
        symbolic: "Bank of America",
        login_url: "https://www.bankofamerica.com/sitemap/hub/signin.go",
        field_info: [{
            id_type: "TYPE_ID",
            id_value: "userId",
            id_function: "FN_LOGIN"
        }, {
            id_type: "TYPE_ID",
            id_value: "password",
            id_function: "FN_PASSWORD"
        }],
        jsfrag: []
    },
    capitalone = {
        generate_pref_overrides: {
            mindigits: 2,
            digits: 1,
            special: 0
        }
    },
    capitalone360 = {},
    testrig = {
        symbolic: "Test",
        login_url: "http://www.netrot.net/~chang/form/formtest1.html",
        field_info: [{
            id_type: "TYPE_ID",
            id_value: "email",
            id_function: "FN_LOGIN"
        }, {
            id_type: "TYPE_NAME",
            id_value: "password",
            id_function: "FN_PASSWORD"
        }, {
            id_type: "TYPE_XPATH",
            id_value: "//input[@type='submit']",
            id_function: "FN_LOGIN_SUBMIT"
        }, {
            id_type: "TYPE_ID",
            id_value: "email",
            id_function: "FN_IS_LOGGED_IN_NEGATION"
        }, {
            id_type: "TYPE_XPATH",
            id_value: "//input[@type='submit']",
            id_function: "FN_CPW_SUBMIT"
        }],
        jsfrag: [],
        generate_pref_overrides: {
            mindigits: 1,
            digits: 1,
            special: 0,
            minlength: 6
        }
    };

function CPWbot_bg_lib() {
    var n = this,
        ce = 0,
        ue = null,
        C = null,
        de = null,
        N = null,
        h = 0,
        fe = null,
        ge = null,
        pe = null,
        be = null,
        l = null;
    se();
    var P = null,
        w = [],
        ve = !1,
        me = !1,
        Ce = !1,
        Ne = !1,
        he = !1,
        e = !1,
        _ = "",
        c = !1,
        u = !1,
        Se = !1,
        Le = !1,
        Ee = !1,
        Pe = !1,
        we = !1,
        Ie = !1,
        t = !1,
        a = !1,
        Ae = !1,
        s = !1,
        S = {},
        I = !1,
        A = !1,
        d = !1,
        f = !1,
        i = !0,
        g = !1,
        p = !1,
        b = !1,
        Te = !1,
        v = !1,
        D = !1,
        U = !1,
        m = E,
        E = 0,
        r = 1,
        o = 2,
        T = 3,
        O = 4,
        k = 5,
        F = 6,
        W = 7,
        G = 8,
        y = 9,
        R = 63,
        M = 64,
        j = 65,
        H = 66,
        V = 67,
        J = 68,
        B = 69,
        K = 70,
        Y = 71,
        x = 72,
        q = 73,
        z = 74,
        X = 75,
        Z = 76,
        Q = 128,
        Oe = 129,
        ke = 130,
        Fe = 131,
        We = 132,
        $ = 133,
        Ge = 134,
        ye = 135,
        De = 136,
        Ue = 137,
        ee = 138,
        te = 139,
        Re = 140,
        Me = 141,
        ne = 192,
        ie = 224,
        _e = 240,
        re = 248,
        oe = [];

    function ae() {
        return m_last_overlay_msg
    }

    function le(e) {
        m_last_overlay_msg = e
    }

    function se() {
        le("")
    }

    function je(e) {
        return e ? e.login_url : null
    }

    function He(e) {
        return e ? e.cpw_url : null
    }

    function Ve(e) {
        return e ? e.acctmgmt_url : null
    }

    function Je(e) {
        return e ? e.logout_url : null
    }

    function Be(e) {
        return e ? e.login_entry_url : null
    }

    function Ke(e) {
        return e ? e.fakeui_loggedout_url : null
    }

    function Ye(e) {
        return e ? e.fakeui_loggedin_url : null
    }

    function xe(e) {
        if (!e) return null;
        var t = e.click_flavor;
        if ("string" == typeof t) {
            var n = parseInt(t);
            if (!isNaN(n)) return n
        }
        return e.click_flavor
    }

    function qe(e) {
        return Ct(e, FN_PASSWORD)
    }

    function ze(e) {
        return Ct(e, FN_LOGIN)
    }

    function Xe(e) {
        return Ct(e, FN_CURRENT_PASS)
    }

    function Ze(e) {
        return Ct(e, FN_NEW_PASS)
    }

    function Qe(e) {
        return Ct(e, FN_NEW_PASS_CONFIRM)
    }

    function $e(e) {
        return Ct(e, FN_NAVIGATE_TO_CPW)
    }

    function et(e) {
        return Ct(e, FN_NAVIGATE_TO_ACCTMGMT)
    }

    function tt(e) {
        return Ct(e, FN_NAVIGATE_TO_LOGOUT)
    }

    function nt(e) {
        return Ct(e, FN_CPW_SUBMIT)
    }

    function it(e) {
        return Ct(e, FN_LOGIN_SUBMIT)
    }

    function _t(e) {
        return Ct(e, FN_REVEAL_LOGIN)
    }

    function rt(e) {
        return Ct(e, FN_CHALLENGE_PASSWORD)
    }

    function ot(e) {
        return Ct(e, FN_CHALLENGE_LOGIN)
    }

    function at(e) {
        return Ct(e, FN_CHALLENGE_SUBMIT)
    }

    function lt(e) {
        return Ct(e, FN_LOGIN_ENTRY_USERNAME)
    }

    function st(e) {
        return Ct(e, FN_LOGIN_ENTRY_PASSWORD)
    }

    function ct(e) {
        return Ct(e, FN_LOGIN_ENTRY_SUBMIT)
    }

    function ut(e) {
        return Ct(e, FN_FAKEUI_LOGGED_IN_1)
    }

    function dt(e) {
        return Ct(e, FN_FAKEUI_LOGGED_IN_2)
    }

    function ft(e) {
        return Ct(e, FN_FAKEUI_LOGGED_IN_3)
    }

    function gt(e) {
        return Ct(e, FN_FAKEUI_LOGGED_IN_INPUT)
    }

    function pt(e) {
        return Ct(e, FN_FAKEUI_LOGGED_OUT_1)
    }

    function bt(e) {
        return Ct(e, FN_FAKEUI_LOGGED_OUT_2)
    }

    function vt(e) {
        return Ct(e, FN_FAKEUI_LOGGED_OUT_3)
    }

    function mt(e) {
        return Ct(e, FN_FAKEUI_LOGGED_OUT_INPUT)
    }

    function Ct(e, t) {
        if (!e || !e.field_info) return null;
        var n, i = null,
            _ = null;
        for (n = 0; n < e.field_info.length; n++)
            if ((i = e.field_info[n]).id_function == t) {
                _ = {
                    id_type: i.id_type,
                    id_value: i.id_value
                };
                break
            } return _
    }

    function Nt(e) {
        return nn(e, JS_PRE_NAVIGATE_CPW)
    }

    function ht(e) {
        return nn(e, JS_POST_NAVIGATE_CPW)
    }

    function St(e) {
        return nn(e, JS_PRE_ACCTMGMT)
    }

    function Lt(e) {
        return nn(e, JS_POST_ACCTMGMT)
    }

    function Et(e) {
        return nn(e, JS_PRE_CPW)
    }

    function Pt(e) {
        return nn(e, JS_POST_CPW)
    }

    function wt(e) {
        return nn(e, JS_PRE_LOGIN)
    }

    function It(e) {
        return nn(e, JS_POST_LOGIN)
    }

    function At(e) {
        return nn(e, JS_LOGIN_REVEAL)
    }

    function Tt(e) {
        return nn(e, JS_LOGIN_SUBMIT)
    }

    function Ot(e) {
        return nn(e, JS_LOGIN_ENTRY_SUBMIT)
    }

    function kt(e) {
        return nn(e, JS_VALIDATE_LOGIN_SUCCESS)
    }

    function Ft(e) {
        return nn(e, JS_VALIDATE_CPW_SUCCESS)
    }

    function Wt(e) {
        return nn(e, JS_FINISH)
    }

    function Gt(e) {
        return nn(e, JS_PRE_CHALLENGE)
    }

    function yt(e) {
        return nn(e, JS_POST_CHALLENGE)
    }

    function Dt(e) {
        return nn(e, JS_CHALLENGE_SUBMIT)
    }

    function Ut(e) {
        return nn(e, JS_VALIDATE_CHALLENGE_SUCCESS)
    }

    function Rt(e) {
        return nn(e, JS_BEGIN)
    }

    function Mt(e) {
        return nn(e, JS_PRE_LOGOUT)
    }

    function jt(e) {
        return nn(e, JS_POST_LOGOUT)
    }

    function Ht(e) {
        return nn(e, JS_PRE_LOGIN_ENTRY)
    }

    function Vt(e) {
        return nn(e, JS_POST_LOGIN_ENTRY)
    }

    function Jt(e) {
        return nn(e, JS_VALIDATE_LOGIN_ENTRY_SUCCESS)
    }

    function Bt(e) {
        return nn(e, JS_PRE_DOCAPTCHA)
    }

    function Kt(e) {
        return nn(e, JS_POST_DOCAPTCHA)
    }

    function Yt(e) {
        var t = null;
        return e && void 0 !== e.cpw_change_success_url && (t = e.cpw_change_success_url), t
    }

    function xt(e) {
        var t = null;
        return e && void 0 !== e.cpw_change_failure_url && (t = e.cpw_change_failure_url), t
    }

    function qt(e) {
        var t = null;
        return e && void 0 !== e.login_failure_url && (t = e.login_failure_url), t
    }

    function zt(e) {
        var t = null;
        return e && void 0 !== e.login_success_url && (t = e.login_success_url), t
    }

    function Xt(e) {
        var t = null;
        return e && void 0 !== e.login_entry_failure_url && (t = e.login_entry_failure_url), t
    }

    function Zt(e) {
        var t = null;
        return e && void 0 !== e.login_entry_success_url && (t = e.login_entry_success_url), t
    }

    function Qt(e) {
        var t = null;
        return e && void 0 !== e.challenge_invalidate_url && (t = e.challenge_invalidate_url), t
    }

    function $t(e) {
        var t = null;
        return e && void 0 !== e.challenge_validate_url && (t = e.challenge_validate_url), t
    }

    function en(e) {
        return null
    }

    function tn(e) {
        return null
    }

    function nn(e, t) {
        if (!e || !e.jsfrags) return null;
        var n, i, _;
        for (n = 0; n < e.jsfrags.length; n++)
            if ((i = e.jsfrags[n]).jstype == t) {
                _ = i.jsfrag;
                break
            } return _
    }

    function _n(e, t, n) {
        if (!t || !n) return null;
        var i = n(t);
        if (i) {
            var _ = (new Date).getTime();
            null === _ && (_ = 0);
            var r = "function" == typeof lp_sha256 ? lp_sha256 : SHA256,
                o = r(e.toString() + i + _.toString()),
                a, l, a = (l = "function" == typeof fasthash ? fasthash : "function" == typeof crc32 ? crc32 : "function(j) { if (j) { return j.length; } return 0; }")(i);
            return verbose_log("injecting javascript fragment into CS: " + i), hi(vi, "Injected Javascript into Document"), sendCS(e, {
                cmd: "run_cpwbot_js",
                req_id: o,
                js: i,
                hash: a
            }, "all"), !0
        }
        return !1
    }

    function rn(e) {
        return "undefined" != typeof g_sites ? g_sites[e] : "undefined" != typeof lpaccts ? lpaccts[e] : null
    }

    function on(e, t, n, i, _, r, o) {
        if (!n) return !1;
        null === i && (i = 0), null === r && (r = 0), null == _ && (_ = DEFAULT_FILL_DELAY), hi(vi, "Filling Field");
        var a = (new Date).getTime();
        null === a && (a = 0);
        var l, s = ("function" == typeof lp_sha256 ? lp_sha256 : SHA256)(e.toString() + n.id_value + a.toString());
        return sendCS(e, {
            cmd: "cpwbot_fill_field",
            req_id: s,
            id_type: n.id_type,
            id_value: n.id_value,
            field_value: t,
            type: "text",
            formname: "",
            should_click: i,
            should_fill_via_keys: r,
            delay: _
        }, "all"), !0
    }

    function an(e, t, n, i, _, r, o) {
        if (!n) return !1;
        null === i && (i = 0), null === r && (r = 0), null == _ && (_ = DEFAULT_FILL_DELAY), hi(vi, "Filling Password Field");
        var a = (new Date).getTime();
        null === a && (a = 0);
        var l, s = ("function" == typeof lp_sha256 ? lp_sha256 : SHA256)(e.toString() + n.id_value + a.toString());
        return sendCS(e, {
            cmd: "cpwbot_fill_field",
            req_id: s,
            id_type: n.id_type,
            id_value: n.id_value,
            field_value: t,
            type: "password",
            formname: "",
            should_click: i,
            should_fill_via_keys: r,
            delay: _,
            flavor: o
        }, "all"), !0
    }

    function ln(e, t, n, i) {
        if (!t) return !1;
        null == n && (n = DEFAULT_CLICK_DELAY), void 0 === i && (i = CONST_CLICK_NOMINAL), S_ = (new Date).getTime() + CLICK_RETRY_TIME + n, L_ = !1, hi(vi, "Clicking");
        var _ = (new Date).getTime();
        null === _ && (_ = 0);
        var r, o = ("function" == typeof lp_sha256 ? lp_sha256 : SHA256)(e.toString() + t.id_value + _.toString());
        verbose_log("click_field id=" + o + " saved to m_pwchange_last_click_field_id"), E_ = 0;
        var a = {
            cmd: "cpwbot_click_field",
            msgid: l = o,
            pwchangestate: ue,
            id_type: t.id_type,
            id_value: t.id_value,
            delay: n,
            flavor: i
        };
        return sendCS(e, a, "all"), m_lastclick_metadata = a, !0
    }

    function sn(e, t, n, i) {
        if (!e) return !1;
        var _ = !0,
            r;
        if (g_isfirefox) {
            var o = n(e);
            for (r = 0; r < o.length; r++) {
                var a = o[r].id_type,
                    l = o[r].id_value,
                    s;
                if (!(s = getElementByIdentifier(doc, a, l))) {
                    _ = !1;
                    break
                }
            }
            if (_) {
                var c = i(e);
                for (r = 0; r < c.length; r++) {
                    var a = c[r].id_type,
                        l = c[r].id_value,
                        s;
                    if (s = getElementByIdentifier(doc, a, l)) {
                        _ = !1;
                        break
                    }
                }
            }
            return _
        }
        console_log("this probably will only works for firefox")
    }

    function cn(e, t, n) {
        if (!t || !n) return !1;
        var i = "",
            _ = "",
            r = rn(n.aid);
        if (!r) return J_("given invalid aid - data consistency error?"), !1;
        CPWbot_bg.do_milestone(e, J, t), L("pre-login-form-js"), _n(e, t, wt);
        var o = ze(t),
            a = qe(t),
            l = fi(t),
            s = gi(t),
            c = 0,
            u = rnd2 = 0;
        U && (u = ir(), rnd2 = ir());
        var d = 0,
            f = xe(t);
        return o && (d++, on(e, i = getusernamefromacct(r), o, l, 0 * d + u, !1, f)), a && (d++, an(e, _ = getpasswordfromacct(r), a, l, 0 * d + u + rnd2, s, f)), L("post-login-form-js"), _n(e, t, It), !0
    }

    function un(e, t, n) {
        if (!t) return !1;
        CPWbot_bg.do_milestone(e, B, t);
        var i = !1;
        Le = !1;
        var _ = it(t);
        if (_) {
            var r = DEFAULT_CLICK_DELAY,
                o;
            void 0 !== t.login_delay && (r = t.login_delay), Le = !0, ln(e, _, r, xe(t)), i = !0
        }
        return _n(e, t, Tt) && (i = !0), !i || null
    }

    function dn(e, t, n) {
        if (!t || !n) return !1;
        var i = "",
            _ = "",
            r = rn(n.aid);
        if (!r) return J_("given invalid aid - data consistency error?"), !1;
        CPWbot_bg.do_milestone(e, X, t), _n(e, t, Ht);
        var o = lt(t),
            a = st(t),
            l = fi(t),
            s = gi(t),
            c = 0,
            u = rnd2 = 0;
        U && (u = ir(), rnd2 = ir());
        var d = 0,
            f = xe(t);
        return o && (d++, on(e, i = getusernamefromacct(r), o, l, 0 * d + u, !1, f)), a && (d++, an(e, _ = getpasswordfromacct(r), a, l, 0 * d + u + rnd2, s, f)), _n(e, t, Vt), !0
    }

    function fn(e, t, n) {
        if (!t) return !1;
        CPWbot_bg.do_milestone(e, z, t);
        var i = !1;
        s = !1;
        var _ = ct(t);
        if (_) {
            var r = DEFAULT_CLICK_DELAY,
                o;
            void 0 !== t.login_delay && (r = t.login_delay), s = !0, ln(e, _, r, xe(t)), CPWbot_bg.mark_timestamp("wait_for_click_ack_M"), i = !0
        }
        return _n(e, t, Ot) && (i = !0), !i || null
    }

    function gn(e, t, n) {
        if (!t || !n) return !1;
        hi(mi, "Updating with New Password");
        var i = !0,
            _ = n.aid;
        console_log("cpwbot initiate: save_replace for aid=" + _);
        var r = rn(_),
            o, a;
        if (!r) return J_("given invalid aid - data consistency error?"), !1;
        var o = lpdec_acct(n.newpw, r, "undefined" == typeof g_shares ? lpshares : g_shares),
            a = lpdec_acct(n.curpw, r, "undefined" == typeof g_shares ? lpshares : g_shares);
        if (r && o && a)
            if (r.pwprotect && (i = !1), console_log("cpwbot initiate: calling changepw logic for aid=" + _), g_isfirefox)(i || LP.securityPrompt()) && lpchangepw(null, o, _, null, null, null, !0);
            else {
                var l = {
                    singleaid: _.toString(),
                    newpw: o,
                    autochange: 1
                };
                i ? changepw_wrapper(l) : security_prompt(function() {
                    changepw_wrapper(l)
                })
            }
        else verbose_log("no passwords to save? acct.aid = " + (r ? r.aid : "null") + " cur=" + (g_show_pw_in_logs || g_isadmin ? a : "REDACTED") + " newpw=" + (g_show_pw_in_logs || g_isadmin ? o : "REDACTED"));
        return !0
    }

    function pn(e) {
        if (verbose_log("entered cpwbot_cs_finish to clean up " + e), null !== C)
            if (C == e) {
                var t = {
                    aid: h,
                    recipe: N,
                    desc: "cpwbot_finish"
                };
                g_v2engine ? CPWbot_bg.wait_for_doc_complete(e, null, function(e) {
                    verbose_log("cpwbot_finish callback!  on tabid=" + e), sendCS(e, {
                        cmd: "cpwbot_finish"
                    }, "all")
                }, t) : sendCS(e, {
                    cmd: "cpwbot_finish"
                })
            } else null !== C && verbose_log("stale call: started up a new password change on different tab - ABORT - tabid==" + e + " g_pwchangetabid=" + C)
    }

    function bn(e) {
        var t = [],
            n = [FN_CPW_OTHER, FN_CURRENT_PASS, FN_NEW_PASS, FN_NEW_PASS_CONFIRM],
            i;
        for (i = 0; i < n.length; i++) {
            var _ = Kn(e, n[i]);
            _ && 0 < _.length && (t = t.concat(_))
        }
        return t
    }

    function vn(e) {
        var t = [],
            n = [FN_CPW_INVALID],
            i, _;
        for (i = 0; i < n.length; i++) {
            var r = Kn(e, n[i]);
            if (r && 0 < r.length)
                for (_ = 0; _ < r.length; _++) {
                    var o = r[_];
                    o && t.push(o)
                }
        }
        return t
    }

    function mn(e) {
        var t = [],
            n = [FN_CURRENT_PASS, FN_NEW_PASS, FN_NEW_PASS_CONFIRM],
            i;
        for (i = 0; i < n.length; i++) {
            var _ = Kn(e, n[i]);
            _ && 0 < _.length && (t = t.concat(_))
        }
    }

    function Cn(e) {
        var t = [],
            n = [FN_PASSWORD, FN_LOGIN_OTHER],
            i;
        for (i = 0; i < n.length; i++) {
            var _ = Kn(e, n[i]);
            _ && 0 < _.length && (t = t.concat(_))
        }
        return t
    }

    function Nn(e) {
        var t = [],
            n = [FN_LOGIN_INVALID],
            i;
        for (i = 0; i < n.length; i++) {
            var _ = Kn(e, n[i]);
            _ && 0 < _.length && (t = t.concat(_))
        }
        return t
    }

    function hn(e) {
        var t = [],
            n = [FN_LOGIN_ENTRY_USERNAME, FN_LOGIN_ENTRY_PASSWORD, FN_LOGIN_ENTRY_SUBMIT],
            i;
        for (i = 0; i < n.length; i++) {
            var _ = Kn(e, n[i]);
            _ && 0 < _.length && (t = t.concat(_))
        }
        return t
    }

    function Sn(e) {
        var t = [],
            n = [FN_LOGIN_ENTRY_USERNAME],
            i;
        for (i = 0; i < n.length; i++) {
            var _ = Kn(e, n[i]);
            _ && 0 < _.length && (t = t.concat(_))
        }
        return t
    }

    function Ln(e) {
        var t = [],
            n = [FN_LOGIN_ENTRY_INVALID],
            i;
        for (i = 0; i < n.length; i++) {
            var _ = Kn(e, n[i]);
            _ && 0 < _.length && (t = t.concat(_))
        }
        return t
    }

    function En(e) {
        var t = [],
            n = [FN_LOGIN_SUCCESS],
            i;
        for (i = 0; i < n.length; i++) {
            var _ = Kn(e, n[i]);
            _ && 0 < _.length && (t = t.concat(_))
        }
        return t
    }

    function Pn(e) {
        var t = [],
            n = [FN_LOGIN_SUCCESS_INVALID],
            i;
        for (i = 0; i < n.length; i++) {
            var _ = Kn(e, n[i]);
            _ && 0 < _.length && (t = t.concat(_))
        }
        return t
    }

    function wn(e) {
        var t = [],
            n = [FN_LOGIN_ENTRY_SUCCESS],
            i;
        for (i = 0; i < n.length; i++) {
            var _ = Kn(e, n[i]);
            _ && 0 < _.length && (t = t.concat(_))
        }
        return t
    }

    function In(e) {
        var t = [],
            n = [FN_LOGIN_ENTRY_SUCCESS_INVALID],
            i;
        for (i = 0; i < n.length; i++) {
            var _ = Kn(e, n[i]);
            _ && 0 < _.length && (t = t.concat(_))
        }
        return t
    }

    function An(e) {
        var t = [],
            n = [FN_CPW_SUCCESS],
            i;
        for (i = 0; i < n.length; i++) {
            var _ = Kn(e, n[i]);
            _ && 0 < _.length && (t = t.concat(_))
        }
        return t
    }

    function Tn(e) {
        var t = [],
            n = [FN_CPW_SUCCESS_INVALID],
            i;
        for (i = 0; i < n.length; i++) {
            var _ = Kn(e, n[i]);
            _ && 0 < _.length && (t = t.concat(_))
        }
        return t
    }

    function On(e) {
        var t = [],
            n = [FN_IS_LOGGED_IN],
            i;
        for (i = 0; i < n.length; i++) {
            var _ = Kn(e, n[i]);
            _ && 0 < _.length && (t = t.concat(_))
        }
        return t
    }

    function kn(e) {
        var t = [],
            n = [FN_IS_LOGGED_IN_NEGATION],
            i;
        for (i = 0; i < n.length; i++) {
            var _ = Kn(e, n[i]);
            _ && 0 < _.length && (t = t.concat(_))
        }
        return t
    }

    function Fn(e) {
        var t = [],
            n = [FN_CHALLENGE_PASSWORD, FN_CHALLENGE_OTHER],
            i;
        for (i = 0; i < n.length; i++) {
            var _ = Kn(e, n[i]);
            _ && 0 < _.length && (t = t.concat(_))
        }
        return t
    }

    function Wn(e) {
        var t = [],
            n = [FN_CHALLENGE_INVALID],
            i;
        for (i = 0; i < n.length; i++) {
            var _ = Kn(e, n[i]);
            _ && 0 < _.length && (t = t.concat(_))
        }
        return t
    }

    function Gn(e) {
        return Ct(recipe_obj, FN_CHALLENGE_SUCCESS)
    }

    function yn(e) {
        return Ct(recipe_obj, FN_CHALLENGE_SUCCESS_INVALID)
    }

    function Dn(e) {
        var t = [],
            n = [FN_CAPTCHA],
            i;
        for (i = 0; i < n.length; i++) {
            var _ = Kn(e, n[i]);
            _ && 0 < _.length && (t = t.concat(_))
        }
        return t
    }

    function Un(e) {
        var t = [],
            n = [FN_MULTI_FACTOR],
            i;
        for (i = 0; i < n.length; i++) {
            var _ = Kn(e, n[i]);
            _ && 0 < _.length && (t = t.concat(_))
        }
        return t
    }

    function Rn(e) {
        var t = [],
            n = [FN_PASSWORD_HINT],
            i;
        for (i = 0; i < n.length; i++) {
            var _ = Kn(e, n[i]);
            _ && 0 < _.length && (t = t.concat(_))
        }
        return t
    }

    function Mn(e) {
        var t = [],
            n = [FN_CAPTCHA, FN_PASSWORD_HINT, FN_MULTI_FACTOR],
            i;
        for (i = 0; i < n.length; i++) {
            var _ = Kn(e, n[i]);
            _ && 0 < _.length && (t = t.concat(_))
        }
        return t
    }

    function jn(e) {
        var t = [],
            n = [FN_CAPTCHA_SUCCESS, FN_PASSWORD_HINT_SUCCESS, FN_MULTI_FACTOR_SUCCESS],
            i;
        for (i = 0; i < n.length; i++) {
            var _ = Kn(e, n[i]);
            _ && 0 < _.length && (t = t.concat(_))
        }
        return t
    }

    function Hn(e) {
        var t = [],
            n = [FN_FAKEUI_LOGGED_IN_1, FN_FAKEUI_LOGGED_IN_2, FN_FAKEUI_LOGGED_IN_3],
            i;
        for (i = 0; i < n.length; i++) {
            var _ = Kn(e, n[i]);
            _ && 0 < _.length && (t = t.concat(_))
        }
        return t
    }

    function Vn(e) {
        var t = [],
            n = [FN_FAKEUI_LOGGED_OUT_1, FN_FAKEUI_LOGGED_OUT_2, FN_FAKEUI_LOGGED_OUT_3],
            i;
        for (i = 0; i < n.length; i++) {
            var _ = Kn(e, n[i]);
            _ && 0 < _.length && (t = t.concat(_))
        }
        return t
    }

    function Jn(e) {
        var t = [],
            n = [FN_FAKEUI_LOGGED_IN_INPUT],
            i;
        for (i = 0; i < n.length; i++) {
            var _ = Kn(e, n[i]);
            _ && 0 < _.length && (t = t.concat(_))
        }
        return t
    }

    function Bn(e) {
        var t = [],
            n = [FN_FAKEUI_LOGGED_OUT_INPUT],
            i;
        for (i = 0; i < n.length; i++) {
            var _ = Kn(e, n[i]);
            _ && 0 < _.length && (t = t.concat(_))
        }
        return t
    }

    function Kn(e, t) {
        var n = [],
            i, _, r;
        if (!e || !e.field_info) return n;
        for (i = 0; i < e.field_info.length; i++)(_ = e.field_info[i]).id_function == t && (r = {
            id_type: _.id_type,
            id_value: _.id_value
        }, n.push(r));
        return n
    }

    function Yn(e) {
        var t = DEFAULT_VALIDATE_TIMEOUT;
        if (!e) return t;
        if (void 0 !== e.validate_timeout) {
            var n = parseInt(e.validate_timeout);
            n && !isNaN(n) && (t = n)
        }
        return t
    }

    function xn(e, t, n) {
        if (null === n && (n = 1), null === e || !t) return !1;
        var i = t.desc,
            _ = t.recipe,
            r = t.fn_url_failed,
            o = t.fn_url_success,
            a = t.fn_required,
            l = t.fn_rejected,
            s = t.fn_captcha;
        Xi = !0, zi = (new Date).getTime();
        var c = !(A = I = !1);
        console_log("cpwbot check_tab_for_state for " + i);
        var u = a ? a(_) : [],
            d = l ? l(_) : [],
            f = CPWbot_bg.JSON.stringify(u),
            g = CPWbot_bg.JSON.stringify(d),
            p = Mn(_),
            b = CPWbot_bg.JSON.stringify(p);
        if (P = Ri(e), 0 == u.length && 0 == d.length && !o && !r) return L("WARN: " + i + " has no field or url criteria defined to validate against"), !0;
        var v = Yn(_),
            m = o ? o(_) : null,
            C = r ? r(_) : null,
            N = (new Date).getTime();
        null === N && (N = 0);
        var h, S = ("function" == typeof lp_sha256 ? lp_sha256 : SHA256)(e.toString() + i + N.toString());
        ge = S, m_ = f, C_ = g, verbose_log("interrogate id=" + ge + " desc=" + i), w = [];
        var E = {
            cmd: "cpwbot_validate_state",
            desc: i,
            required_fields: f,
            rejected_fields: g,
            id: ge,
            validate_timeout: v,
            timestamp: N,
            proceed_on_interactive: ai(_) ? 1 : 0,
            interactive_fields: b
        };
        return m && (E.required_url = m), C && (E.rejected_url = C), fe = E, pe = i, sendCS(e, E, "all"), verbose_log("setup setimeout for " + v / 1e3 + " seconds finish_cpwbot_validate_state"), setTimeout(function() {
            CPWbot_bg && CPWbot_bg.finish_cpwbot_validate_state(e, S, f, g, i)
        }, v), null
    }

    function qn() {
        return null
    }

    function zn(e, t, n, i) {
        if (i || !CPWbot_bg.get_docaptchastate()) {
            t ? le(t) : t = ae();
            var _ = {
                    msg: t,
                    symbolic: nr(n = n || N)
                },
                r = CPWbot_bg.JSON.stringify(_);
            sendCS(e, {
                cmd: "do_cpwbot_overlay",
                msg: r
            }, g_CS_tops[e])
        }
    }

    function Xn(e) {
        return sendCS(e, {
            cmd: "hide_cpwbot_overlay"
        }, "all"), !0
    }

    function Zn(e) {
        var t = null;
        return e && void 0 !== e.generate_pref_overrides && (t = e.generate_pref_overrides), t
    }

    function Qn(e) {
        var t = 0;
        return e ? (void 0 !== e.postacctmgmt_sleep && (t = e.postacctmgmt_sleep), t) : null
    }

    function $n(e) {
        var t = 0;
        return e ? (void 0 !== e.postrevealcpw_sleep && (t = e.postrevealcpw_sleep), t) : null
    }

    function ei(e) {
        var t = 0;
        return e ? (void 0 !== e.posttrigger_sleep && (t = e.posttrigger_sleep), t) : null
    }

    function ti(e) {
        var t = 0;
        return e ? (void 0 !== e.postreveallogin_sleep && (t = e.postreveallogin_sleep), t) : null
    }

    function ni(e) {
        var t = 0;
        return e ? (void 0 !== e.postlogout_sleep && (t = e.postlogout_sleep), t) : null
    }

    function ii(e) {
        var t = !1;
        return e ? (void 0 !== e.reveal_login_js_delay && (t = !!e.reveal_login_js_delay), t) : null
    }

    function _i(e) {
        var t = !1;
        return e ? (void 0 !== e.navigate_acctmgmt_js_delay && (t = !!e.navigate_acctmgmt_js_delay, "0" === e.navigate_acctmgmt_js_delay && (t = !1)), t) : null
    }

    function ri(e) {
        var t = !1;
        return e ? (void 0 !== e.reveal_cpw_js_delay && (t = !!e.reveal_cpw_js_delay, "0" === e.reveal_cpw_js_delay && (t = !1)), t) : null
    }

    function oi(e) {
        var t = !1;
        return e ? (void 0 !== e.logout_js_delay && (t = !!e.logout_js_delay, "0" === e.logout_js_delay && (t = !1)), t) : null
    }

    function ai(e) {
        var t = !1;
        return e ? (void 0 !== e.proceed_on_interactive && (t = !!e.proceed_on_interactive, "0" === e.proceed_on_interactive && (t = !1)), t) : null
    }

    function li(e) {
        var t = 0;
        return e ? (void 0 !== e.start_delay && (t = e.start_delay), t) : null
    }

    function si(e) {
        var t = 0;
        return e ? (void 0 !== e.post_login_submit_delay && (t = e.post_login_submit_delay), t) : null
    }

    function ci(e) {
        var t = 0;
        return e ? (void 0 !== e.post_js_begin_delay && (t = e.post_js_begin_delay), t) : null
    }

    function ui(e) {
        var t = 0;
        return e ? (void 0 !== e.js_finish_delay && (t = e.js_finish_delay), t) : null
    }

    function di(e) {
        var t = 0;
        return e ? (void 0 !== e.session_timeout && "number" == typeof e.session_timeout && (t = e.session_timeout), t) : null
    }

    function fi(e) {
        var t = 0;
        return e ? (void 0 !== e.click_on_fields_on_fill && (t = e.click_on_fields_on_fill ? 1 : 0), t) : null
    }

    function gi(e) {
        var t = 0;
        return e ? (void 0 !== e.fill_password_fields_via_keys && (t = e.fill_password_fields_via_keys ? 1 : 0), t) : null
    }

    function pi(e) {
        if (!e) return null;
        var t = DEFAULT_FILL_DELAY;
        return "number" == typeof e.fill_field_delay && (t = e.fill_field_delay), verbose_log("fill field delay : " + t), t
    }

    function bi(e) {
        var t = !1;
        return e ? (void 0 !== e.document_complete_timeout && (t = e.document_complete_timeout), t) : null
    }
    oe[E] = "", oe[1] = gs("LastPass is loading..."), oe[2] = gs("LastPass is loading website..."), oe[3] = gs("LastPass is logging in..."), oe[4] = gs("LastPass is changing your password now..."), oe[5] = gs("LastPass is changing your password now..."), oe[6] = gs("LastPass is changing your password now..."), oe[7] = gs("LastPass is changing your password now..."), oe[8] = gs("LastPass is logging in..."), oe[y] = gs("The website needs you to enter information. Please switch to the tab and enter it."), oe[63] = gs("Congratulations! Your password for %s was updated, and is now saved in your LastPass vault. Your change will sync on every device."), oe[Q] = gs("We're sorry. We were not able to change your password automatically for %s. Your password was not changed."), oe[re] = oe[Q] + " " + gs("The random password that was generated has been saved to your vault."), oe[De] = oe[Q], oe[$] = gs("Timed out waiting for the page to load.  Retry?"), oe[ke] = oe[Q], oe[Oe] = oe[Q], oe[Ge] = oe[Q], oe[ye] = oe[Q], oe[Fe] = oe[Q], oe[We] = oe[Q], oe[Ue] = oe[Q], oe[ee] = gs("Halt Requested"), oe[te] = gs("Unable to proceed, the website does not allow automated password change."), oe[Re] = gs("Timed out"), oe[Me] = oe[Q], "function" == typeof alertfrombg && (this.alert = alertfrombg), g_isfirefox && (this.alert = alert), this.JSON = JSON, JSON || (this.JSON = LPJSON), LPJSON, this.get_pwchangestate = function() {
        return ue
    }, this.get_pwchangetabid = function() {
        return C
    }, this.get_login_url = function(e) {
        return je(e)
    }, this.get_cpw_url = function(e) {
        return He(e)
    }, this.get_acctmgmt_url = function(e) {
        return Ve(e)
    }, this.conditional_js_exec = function(e, t, n) {
        return _n(e, t, n)
    }, this.show_cpwbot_overlay = function(e, t, n) {
        return zn(e, t, n)
    }, this.in_validate = function() {
        return fe && ge && null != pe && "" != pe && void 0 !== pe
    }, this.in_validate_outer = function() {
        return n.in_validate() || Xi || g_
    }, this.get_last_overlay_message = function() {
        return ae()
    }, this.get_fakeui_loggedout_url = function(e) {
        return Ke(e)
    }, this.get_fakeui_loggedin_url = function(e) {
        return Ye(e)
    }, this.reveal_cpw = function(e, t) {
        if (!t) return !1;
        var n = t.recipe,
            i = t.payload,
            _ = i.aid;
        if (!n || !i) return !1;
        L("reveal_cpw called after wait-for-document-complete tabid=" + e), CPWbot_bg.mark_timestamp("reveal_cpw"), hi(mi, "Reveal Change-Password Form"), me = !(ue = "D"), _n(e, n, Nt);
        var r = He(n);
        if (r) {
            L("call cpw:loadurl with " + r);
            var o = null;
            return g_CS_tops && (o = g_CS_tops[e], g_ischrome && 0 != o && L("loadurl is not sending to docnum==0 ! " + o)), sendCS(e, {
                cmd: "loadurl",
                url: r
            }, o), n_ = !0, verbose_log("m_in_loadurl set"), N = n, de = i, me = !0, null
        }
        Pe = !1;
        var a = $e(n),
            l;
        if (a) {
            verbose_log("click on FN_NAVIGATE_TO_CPW field!");
            var s = DEFAULT_CLICK_DELAY,
                c;
            void 0 !== n.cpw_delay && (s = n.cpw_delay), Pe = !0, L("now waiting for click_ack_D"), ln(e, a, s, xe(n)), CPWbot_bg.mark_timestamp("wait_for_click_ack_D")
        }
        return ri(n) && (me = !0, $n(n)) ? null : (_n(e, n, ht), t.didcallout ? (L("end of reveal_cpw thread with callout to CS - hack Dpickup to resume for aid=" + _), ue = "Dpickup", null) : (L("no callout to CS, so reveal_cpw does not end thread, returning to initiate"), !0))
    }, this.navigate_to_acctmgmt = function(e, t) {
        if (!t) return !1;
        var n = t.recipe,
            i = t.payload,
            _ = i.aid;
        if (L("navigate_to_acctmgmt called after wait-for-document-complete tabid=" + e), CPWbot_bg.mark_timestamp("acctmgmt_nav"), ue = "C", !n) return !1;
        hi(mi, "Navigate to Account Management Page"), Ce = !1, _n(e, n, St);
        var r = Ve(n);
        if (r) {
            L("call acctmgmt:loadurl with " + r);
            var o = null;
            return g_CS_tops && (o = g_CS_tops[e]), sendCS(e, {
                cmd: "loadurl",
                url: r
            }, o), n_ = !0, verbose_log("m_in_loadurl set"), N = n, de = i, Ce = !0, null
        }
        Ee = !1;
        var a = et(n),
            l;
        if (a) {
            verbose_log("click on FN_NAVIGATE_TO_ACCTMGMT field!");
            var s = DEFAULT_CLICK_DELAY,
                c;
            void 0 !== n.acctmgmt_delay && (s = n.acctmgmt_delay), Ee = !0, L("now waiting for click_ack C"), ln(e, a, s, xe(n)), CPWbot_bg.mark_timestamp("wait_for_click_ack_C")
        }
        return _i(n) && (Ce = !0, Qn(n)) ? null : (_n(e, n, Lt), t.didcallout ? (L("end of navigate_to_acctmgmt thread with callout to CS - hack Cpickup to resume for aid=" + _), ue = "Cpickup", null) : (g_v2engine || L("no callout to CS, so nav_to_acctmgmt does not end thread, returning to initiate"), !0))
    }, this.trigger_cpw = function(e, t) {
        if (D) return !1;
        if (D = !0, verbose_log("trigger_cpw entered"), CPWbot_bg.mark_timestamp("trigger_cpw"), !t) return !1;
        var n = t.recipe,
            i = t.payload;
        if (!n || !i) return !1;
        var _ = fi(n),
            r = gi(n);
        L("trigger_cpw called after wait-for-document-complete tabid=" + e), ue = "E";
        var o = !0,
            a = i.aid,
            l = rn(a),
            s = "";
        if (!l) return J_("given invalid aid - data consistency error?"), !1;
        s = l.url, _n(e, n, Et);
        var c = Xe(n),
            u = Ze(n),
            d = Qe(n),
            f = nt(n),
            g = xe(n),
            p = 15,
            b = 1,
            v = 1,
            m = 1,
            C = 0,
            N = 1,
            h = 0,
            S = 1,
            E = null,
            P, w;
        g_isfirefox ? (LP.lpprefsHasUserValue("genpw_passlen") && (p = LP.lpprefsGetIntPref("genpw_passlen")), LP.lpprefsHasUserValue("genpw_upper") && (b = LP.lpprefsGetBoolPref("genpw_upper") ? 1 : 0), LP.lpprefsHasUserValue("genpw_lower") && (v = LP.lpprefsGetBoolPref("genpw_lower") ? 1 : 0), LP.lpprefsHasUserValue("genpw_digits") && (m = LP.lpprefsGetBoolPref("genpw_digits") ? 1 : 0), LP.lpprefsHasUserValue("genpw_special") && (C = LP.lpprefsGetBoolPref("genpw_special") ? 1 : 0), LP.lpprefsHasUserValue("genpw_mindigits") && (N = LP.lpprefsGetIntPref("genpw_mindigits") ? 1 : 0), LP.lpprefsHasUserValue("genpw_ambig") && (h = LP.lpprefsGetBoolPref("genpw_ambig") ? 1 : 0), LP.lpprefsHasUserValue("genpw_reqevery") && (S = LP.lpprefsGetBoolPref("genpw_reqevery") ? 1 : 0), LP.lpprefsHasUserValue("genpw_pronounceable") && (E = LP.lpprefsGetBoolPref("genpw_pronounceable") ? 1 : 0)) : (p = parseInt(lpGetPref("generate_length", p)), b = parseInt(lpGetPref("generate_upper", b)), v = parseInt(lpGetPref("generate_lower", v)), m = parseInt(lpGetPref("generate_digits", m)), C = parseInt(lpGetPref("generate_special", C)), N = parseInt(lpGetPref("generate_mindigits", N)), h = parseInt(lpGetPref("generate_ambig", h)), S = parseInt(lpGetPref("generate_reqevery", S)), E = parseInt(lpGetPref("generate_pronounceable", E))), 0 == b && 0 == v && 0 == m && 0 == C && (b = v = m = 1);
        var I = getpasswordfromacct(l);
        I.length > p && (p = I.length);
        var A = Zn(n);
        null !== A && (void 0 !== A.length && null !== A.length && (p = A.length), void 0 !== A.maxlength && null !== A.maxlength && p > A.maxlength && (p = A.maxlength), void 0 !== A.minlength && null !== A.minlength && p < A.minlength && (p = A.minlength), void 0 !== A.special && null !== A.special && (C = A.special ? 1 : 0), void 0 !== A.digits && null !== A.digits && (m = A.digits ? 1 : 0), void 0 !== A.upper && null !== A.upper && (b = A.upper ? 1 : 0), void 0 !== A.lower && null !== A.lower && (v = A.lower ? 1 : 0), void 0 !== A.mindigits && null !== A.mindigits && (N = A.mindigits)), hi(mi, "Generating a new password that is " + p + " chars long, " + (b ? "with" : "without") + " uppercase chars, " + (v ? "with" : "without") + " lowercase chars, " + (m ? "with" : "without") + " numeric chars, " + (C ? "with" : "without") + " special chars, with at least " + N + " numbers,");
        var T, O = (g_isfirefox ? LP.lpCreatePass : lpCreatePass)(p, b, v, m, C, N, h, S, E);
        L("generated new password: " + (g_show_pw_in_logs || g_isadmin ? O : "REDACTED")), L("saving " + (g_show_pw_in_logs || g_isadmin ? O : "REDACTED") + " to " + s + " as generated password"), g_isfirefox ? ff_save_generated_password(O, s, !0, !0) : savePassword(O, s, e, 1), g_isfirefox ? null !== LP.lpgenpwlist && LP.lpgenpwlist.unshift(O) : null !== g_genpws && g_genpws.unshift(O), CPWbot_bg.do_milestone(e, 73, n), i.newpw = lpenc_acct(O, l, "undefined" == typeof g_shares ? lpshares : g_shares), i.curpw = lpenc_acct(I, l, "undefined" == typeof g_shares ? lpshares : g_shares), be = (de = i).newpw, hi(mi, "Filling Change-Password Form");
        var k = pi(n),
            F = rnd2 = rnd3 = rnd4 = 0;
        U && (F = ir(), rnd2 = ir(), rnd3 = ir(), rnd4 = ir());
        var W = 0;
        if (c && an(e, I, c, _, k * (W += 1) + F, r, g), u && an(e, O, u, _, k * (W += 1) + F + rnd2, r, g), d && an(e, O, d, _, k * (W += 1) + F + rnd2 + rnd3, r, g), f) {
            Se = !0, L("now waiting for click_ack E");
            var G = null;
            void 0 !== n.trigger_cpw_delay && (G = n.trigger_cpw_delay), verbose_log("trigger cpw delay : " + G + " + " + k * W);
            var y = G,
                g;
            ln(e, f, y = null === G ? k * W : G + k * W + rnd4, g = xe(n)), CPWbot_bg.mark_timestamp("wait_for_click_ack_E")
        }
        return pass, _n(e, n, Pt), t.didcallout ? (L("end of trigger_cpw thread with callout to CS - hack Epickup to resume for aid=" + a), ue = "Epickup", null) : (L("no callout to CS, so trigger_cpw does not end thread, returning to initiate"), !0)
    }, this.navigate_to_login = function(e, t) {
        if (!t) return !1;
        var n = t.recipe;
        if (ve = !(ue = "B"), !n) return !1;
        var i = !1;
        hi(mi, "Navigate to Login");
        var _ = je(n),
            r;
        if (_) {
            L("call login:loadurl with " + _);
            var o = null;
            return g_CS_tops && (o = g_CS_tops[e], g_ischrome && 0 != o && L("loadurl is not sending to docnum==0 ! " + o)), sendCS(e, {
                cmd: "loadurl",
                url: _
            }, o), n_ = !0, verbose_log("m_in_loadurl set"), N = n, de = t, ve = !0, null
        }
        return !g_v2engine && (ii(n) && (ve = !0, ti(n)) ? null : (_n(e, n, At), !0))
    }, this.check_is_logged_in = function(e, t, n) {
        if (!t) return !1;
        var i, _ = {
                recipe: t,
                desc: "validate_website_is_loggedin",
                fn_required: On,
                fn_rejected: kn,
                fn_url_success: qn,
                fn_url_failed: qn
            },
            i = null,
            r, o;
        return CPWbot_bg.should_wait_for_document_complete(e, _) ? (Xi = !0, CPWbot_bg.wait_for_doc_complete(e, null, xn, _), null) : (L("validate_website_is_loggedin returns true, no wait "), !0)
    }, this.validate_login_success = function(e, t, n) {
        if (!t) return !1;
        _n(e, t, kt);
        var i = {
            recipe: t,
            desc: "validate_login_success",
            fn_required: En,
            fn_rejected: Pn,
            fn_url_success: zt,
            fn_url_failed: qt
        };
        return CPWbot_bg.should_wait_for_document_complete(e, i) ? (Xi = !0, CPWbot_bg.wait_for_doc_complete(e, null, xn, i), null) : (L("validate_login_success returns true, no wait "), !0)
    }, this.validate_login_entry_success = function(e, t, n) {
        if (!t) return !1;
        _n(e, t, Jt);
        var i = {
            recipe: t,
            desc: "validate_login_entry_success",
            fn_required: wn,
            fn_rejected: In,
            fn_url_success: Zt,
            fn_url_failed: Xt
        };
        return CPWbot_bg.should_wait_for_document_complete(e, i) ? (Xi = !0, CPWbot_bg.wait_for_doc_complete(e, null, xn, i), null) : (L("validate_login_entry_success returns true, no wait "), !0)
    }, this.validate_cpw_success = function(e, t, n) {
        if (!t) return !1;
        _n(e, t, Ft);
        var i = {
            recipe: t,
            desc: "validate_cpw_success",
            fn_required: An,
            fn_rejected: Tn,
            fn_url_success: Yt,
            fn_url_failed: xt
        };
        return CPWbot_bg.should_wait_for_document_complete(e, i) ? (Xi = !0, CPWbot_bg.wait_for_doc_complete(e, null, xn, i), null) : (L("validate_cpw_success returns true, no wait "), !0)
    }, this.validate_login_form = function(e, t, n) {
        if (!t) return !1;
        var i = {
            recipe: t,
            desc: "validate_login_form",
            fn_required: Cn,
            fn_rejected: Nn,
            fn_url_success: qn,
            fn_url_failed: qn
        };
        return CPWbot_bg.should_wait_for_document_complete(e, i) ? (Xi = !0, CPWbot_bg.wait_for_doc_complete(e, null, xn, i), null) : (L("validate_login_form returns true, no wait "), !0)
    }, this.validate_cpw_form = function(e, t, n) {
        if (!t) return !1;
        var i = {
            recipe: t,
            desc: "validate_cpw_form",
            fn_required: bn,
            fn_rejected: vn,
            fn_url_success: qn,
            fn_url_failed: qn
        };
        return CPWbot_bg.should_wait_for_document_complete(e, i) ? (Xi = !0, CPWbot_bg.wait_for_doc_complete(e, null, xn, i), null) : (L("validate_cpw_form returns true, no wait "), !0)
    }, this.validate_login_entry_form = function(e, t, n) {
        if (!t) return !1;
        var i = {
            recipe: t,
            desc: "validate_login_entry_form",
            fn_required: Sn,
            fn_rejected: Ln,
            fn_url_success: qn,
            fn_url_failed: qn
        };
        return CPWbot_bg.should_wait_for_document_complete(e, i) ? (Xi = !0, CPWbot_bg.wait_for_doc_complete(e, null, xn, i), null) : (L("validate_login_entry_form returns true, no wait "), !0)
    }, this.revert_password = function(e, t, n) {
        return !!t && (alert("REVERT: TODO"), !0)
    }, this.initiate = function(e, t, n, i) {}, this.cpwbot_cs_finish_complete = function(e) {
        verbose_log("cpwbot_cs_finish_complete on tabid=" + e), C == e ? (null !== CPWbot_bg.session_timeout_st_id && clearTimeout(CPWbot_bg.session_timeout_st_id), (CPWbot_bg.session_timeout_st_id = null) !== CPWbot_bg.docaptcha_si_id && clearInterval(CPWbot_bg.docaptcha_si_id), CPWbot_bg.docaptcha_si_id = null, CPWbot_bg.mark_timestamp("finish_complete"), CPWbot_bg.logout(), Xn(e), CPWbot_bg.do_milestone(e, 66, null)) : null !== C && verbose_log("stale call: started up a new password change on different tab - ABORT - tabid==" + e + " g_pwchangetabid=" + C)
    }, this.finish_cpwbot_validate_state = function(e, t, n, i, _) {
        verbose_log("ENTERED finish_cpwbot_validate_state");
        var r = !1,
            o, a = !1;
        if (C != e) return verbose_log("finish_cpwbot_validate_state: !tabid, abort"), !1;
        if (t != ge) {
            var l = "";
            return verbose_log("finish_cpwbot_validate_state: ignoring stale request, current validate is " + pe + "/" + ge + ", stale req is " + _ + "/" + t + " "), !1
        }
        var s, c = Yn(N),
            u = ge;
        if (I && !A) return A = !(I = !1), L("finish_cpwbot_validate_state: reload1 extending timeout for " + _), setTimeout(function() {
            CPWbot_bg.finish_cpwbot_validate_state(e, u, n, i, _)
        }, c), !1;
        if (verbose_log("finish_cpwbot_validate_state: closing out request " + _ + "/" + t), null === w) return verbose_log("finish_cpwbot_validate_state: dup, abort"), !1;
        if (null === g_CS[e]) return lploggedin ? (L("finish_cpwbot_validate_state: reload2 extending timeout for " + _), setTimeout(function() {
            CPWbot_bg.finish_cpwbot_validate_state(e, u, n, i, _)
        }, c)) : (verbose_log("finish_cpwbot_validate_state: tab " + e + " closed "), CPWbot_bg.panic("logged out?")), !1;
        var d = P;
        for (g_CS[e].length == w.length && (a = !0), o = 0; o < w.length; o++)
            if (w[o]) {
                r = !0;
                break
            } a || verbose_log("finish_cpwbot_validate_state: sent out " + g_CS[e].length + " messages, received " + w.length + " messages, skipped " + d + " frames");
        var f = 0,
            g = 0,
            p;
        for (p in S) S.hasOwnProperty(p) && (this.skip_frame_by_score(p) || (f++, w[p] && g++));
        if (g < f && console_warn("CASE : still waiting to hear from important frames, expected to hear from " + f + ", heard from " + g), !r) {
            var b = JSON.parse(n),
                v = JSON.parse(i);
            0 == b.length && 0 < v.length && (r = !0)
        }
        if (fe = w = null, P = 0, g_v2engine) g_ = Xi = !1, L("VALIDATE_IN_DOCWAIT=false"), p_ = r, b_ = {}, console_log("finish_cpwbot_validate_state complete result=" + r + ", wait for next engine cycle at " + ue), pass;
        else {
            var m = {
                aid: h,
                recipe: N,
                validate_result: r
            };
            console_log("finish_cpwbot_validate_state resumed initiate with state=" + ue), CPWbot_bg.initiate(e, m, ue)
        }
        return !1
    }, this.chk_cpw_resume = function(e, t) {
        return !1
    }, this.cpwbot_validate_state_result_handler = function(e, t) {
        var n = !1;
        if (CPWbot_bg && null !== C && e == C) {
            var i = t.docnum;
            if (void 0 !== i && CPWbot_bg && null !== w) {
                var _ = JSON.parse(t.result),
                    r = JSON.parse(t.rejected_fields),
                    o = JSON.parse(t.required_fields),
                    a = !1,
                    l = null;
                t.result_obj && (l = JSON.parse(t.result_obj));
                var s = t.desc,
                    c = t.id;
                if (L("received a " + s + " validate result from [" + e + "][" + i + "][" + t.url + "][" + t.docstate + "][" + t.state + "]=" + _), pe && pe != s || ge && ge != c) return L("unexpected validate msg - perhaps from the last validate call.... ignoring it"), void L("got " + s + "/" + c + " expected " + pe + "/" + ge);
                var u = !1;
                l && (t.required_url && hi(vi, "[" + e + "][" + i + "] validate given success_url, result=" + l.url_success_match + " when matching success url = " + t.required_url), t.rejected_url && hi(vi, "[" + e + "][" + i + "] validate given bad_url, result=" + l.url_failure_match + " when matching failure url = " + t.rejected_url), hi(vi, sprintf("[%s][%d] %s found %d/%d success fields, given %d invalid fields and %s invalid fields, %s captcha-ish fields", e, i, s, l.num_ok_matches, l.num_okfields, l.num_badfields, l.found_bad_match ? "found" : "did not find", l.found_interactive ? "found" : "did not find")), 0 < l.num_ok_matches ? (Gi(e, t), l.found_interactive && (u = !0)) : l.found_bad_match ? (Gi(e, t), u = !0) : yi(e, t), l.found_interactive && (a = !0)), w[i] = _;
                var d = Ri(e);
                if (null === g_CS[e] && CPWbot_bg && fe) return L("interrupted by a page load/refresh, reissuing validate for state " + ue), w = [], void sendCS(e, fe, "all");
                g_CS[e] && g_CS[e].length == w.length && (n = !0), null === g_CS[e] ? verbose_log("tab is reloading but cannot retry validate ? WTF") : verbose_log("[" + e + "] " + s + " sent " + g_CS[e].length + " messages, heard from " + w.length + ", skipped " + d + " frames"), (_ || n || u || a) && ((w = null) === _ && (_ = !1), fe = null, g_ = Xi = !1, L("VALIDATE_IN_DOCWAIT=false"), L("validate complete, result is " + _ + " current state=" + ue), p_ = _, b_ = l)
            } else debug && L("stale2? validate result tabid=" + e + " g_pwchangetabid=" + C + " g_pwchange_validate_desc=" + pe)
        } else debug && L("stale1? validate result tabid=" + e + " g_pwchangetabid=" + C + " g_pwchange_validate_desc=" + pe)
    }, this.cpwbot_finish_ack_handler = function(e, t) {
        if (null !== e && t)
            if (sendCS(e, {
                    cmd: "cpwbot_finish_ack"
                }, "all"), sendCS(e, {
                    cmd: "hide_cpwbot_overlay"
                }, "all"), g_CS_tops[e] == t.docnum) CPWbot_bg.cpwbot_cs_finish_complete(e);
            else {
                if (null == g_CS_tops[e] || void 0 === g_CS_tops[e]) console_error("webpage has not finished loading");
                else {
                    console_error("WTF : top " + g_CS_tops[e] + " but docnum is " + t.docnum);
                    var n = getcsinfo(e, t.docnum),
                        i = getcsinfo(e, g_CS_tops[e]);
                    i && verbose_log("[" + g_CS_tops[e] + "] topdoc is " + i.url), n && verbose_log("[" + t.docnum + "] other doc is " + n.url), n && n.parent_docnum == n.docnum ? verbose_log("CS table says that " + t.docnum + " is top") : i && i.parent_docnum == i.docnum ? verbose_log("CS table says that " + g_CS_tops[e] + " is top") : verbose_log("CS table mismatch, or reloading ? ")
                }
                CPWbot_bg.cpwbot_cs_finish_complete(e)
            }
    }, this.cpwbot_skip_url = function(e, t) {
        return !1
    }, this.originating_tabid = null, this.destination_tabid = null, this.originating_tab = null, this.destination_tab = null, this.logout = function() {
        ce = 0, be = C = ge = pe = fe = de = N = h = ue = null, se(), A = I = c = u = !1, l = S = null, this.clear_event_queue(), s = Se = Ae = Pe = Ee = Ie = we = !1
    }, this.initialize = function(e) {
        e ? (C = e.tabid, debug && (h_ = e.tabid), N = e.recipe, h = e.aid, ue = 0, se(), u = Se = c = !1, g_robots_txt && sendCS(e.tabid, {
            cmd: "get_robots_txt"
        }, g_CS_tops[e.tabid]), l = null, Ji = "", v = Te = b = p = g = f = d = A = I = !(S = {}), e_ = 0, CPWbot_bg.clear_event_queue(), R_ = 1, wi(), D = !1, CPWbot_bg.broken_hearted_st_id = null, r_ = __ = i_ = n_ = !1, E_ = 0, this.cpw_dialog_minimize_state = 0) : console_error("passed invalid params")
    }, this.pwchangetabid_is_still_valid = function() {
        if (!CPWbot_bg) return !1;
        var e = C;
        return !(null === e || !g_CS || void 0 === g_CS[e] || null === g_CS[e])
    }, this.panic = function(e) {
        e = e || "UNEXPECTED ERROR", L("panic=" + e + ", g_pwchangetabid == " + C), CPWbot_bg.do_milestone(C, Q, N, e), pn(C), CPWbot_bg.cpwbot_cs_finish_complete(C)
    }, this.setmsg_cpwbot_overlay = function(e, t) {
        zn(e, t)
    }, this.initiate_on_complete = function(e, t, n) {
        var i = null,
            _ = 900,
            r = 45;
        if (!g_cpwbot || !CPWbot_bg || 45 < n) return CPWbot_bg.do_milestone(e, $, a, "initiate_on_complete"), CPWbot_bg.panic("TIMEOUT-initiate"), null;
        var o = t.aid,
            a = t.recipe;
        if (null == n && (n = 1), !Li(a)) {
            var l = rn(o),
                s = "(null)";
            l && l.url && (s = this.JSON.stringify(l.url));
            var c = "Bad Recipe";
            hi(Ni, c);
            var u = "Error for recipe on aid=" + o + ", url=" + s,
                d = {
                    severity: "fatal",
                    msg: c
                };
            return CPWbot_bg.phone_home(null, null, d), CPWbot_bg.panic(u), null
        }
        if (!I_) {
            var f = bi(a);
            f = f || _;
            var g = g_CS_tops[e];
            if (null !== g && (i = getcsinfo(e, g_CS_tops[e])) && "complete" == i.docstate) {
                CPWbot_bg.mark_timestamp("doc_complete"), ping(e);
                var p = n ? n * f / 1e3 : 0;
                if (isNaN(p) && verbose_log("WTF NaN: ctr=" + n + " url=" + s + " aid=" + o), M_) {
                    var b = M_.doc_complete - M_.openurl_callback;
                    0 < b && 0 != M_.doc_complete && M_.openurl_callback && (p = b / 1e3)
                }
                return 0 < p && hi(vi, "Waited " + p + " seconds for document-complete before calling initialize_engine"), CPWbot_bg.initialize_engine(e, t)
            }
            return I_ || !lploggedin ? (L("abort wait-for-doc-complete initiate"), !1) : (null !== g ? ping(e, g) : ping(e), verbose_log("waiting for tabid " + e + " topdocnum=" + g + " docstate=" + (i ? i.docstate : "null")), setTimeout(function() {
                CPWbot_bg.initiate_on_complete(e, t, n + 1)
            }, f), !0)
        }
        H_(e, a)
    }, this.get_user_debug_messages = function(e, t) {
        return _
    };
    var vi = 0,
        mi = 1,
        Ci = 2,
        Ni = 3;

    function hi(e, t) {
        var n;
        if ((e < vi || Ni < e) && (e = vi), g_isfirefox && lpisadmin || g_isdebug || g_isadmin) {
            var i = "[" + ["DEBUG", "INFO", "WARN", "ERR"][e] + "] " + t + "\n";
            return _ += i, verbose_log(i), write_history({
                cmd: "CPW",
                msg: i
            }), !0
        }
        return !1
    }

    function Si(e, t) {
        var n = !1;
        if (!t || !e) return debug && L("validate_xpath: none"), n;
        try {
            var i = g_isfirefox ? new e.defaultView.XPathEvaluator : new XPathEvaluator;
            if (!i && debug) return L("NO XPATH EVALUATOR AVAILABLE ????"), !0;
            var _ = i.evaluate(t, e.documentElement, null, g_isfirefox ? e.defaultView.XPathResult.FIRST_ORDERED_NODE_TYPE : XPathResult.FIRST_ORDERED_NODE_TYPE, null);
            n = !0
        } catch (e) {
            console_error("error validating '" + t + "', exception: " + e), n = !1
        }
        return n
    }

    function Li(e) {
        var t = g_isfirefox ? LP.getBrowser().selectedTab.linkedBrowser.contentDocument : document,
            n, i, _;
        if (!t || !e) return L("Bad Recipe: none"), !1;
        if (!je(e)) return L("Bad Recipe: no login url"), !1;
        if (!nr(e)) return L("Bad Recipe: no symbolic"), !1;
        if (!e.field_info || e.field_info.length <= 0) return L("Bad Recipe: no fields"), !1;
        if (!Ei(e)) return !1;
        var r = !1,
            o = !1,
            a = !1,
            l = !1,
            s = !1,
            c = !1,
            u = !1,
            d = !1,
            f = !1;
        for (n = 0; n < e.field_info.length; n++) switch ((i = e.field_info[n]).id_function) {
            case FN_LOGIN:
            case FN_LOGIN_SUBMIT:
            case FN_PASSWORD:
                r = !0;
                break;
            case FN_CURRENT_PASS:
            case FN_NEW_PASS:
            case FN_NEW_PASS_CONFIRM:
            case FN_CPW_SUBMIT:
                s = !0;
                break;
            case FN_CPW_SUCCESS:
            case FN_CPW_SUCCESS_INVALID:
                c = !0;
                break;
            case FN_LOGIN_SUCCESS:
            case FN_LOGIN_SUCCESS_INVALID:
                a = !0;
                break;
            case FN_IS_LOGGED_IN:
            case FN_IS_LOGGED_IN_NEGATION:
                o = !0;
                break;
            case FN_NAVIGATE_TO_LOGOUT:
                d = !0
        }
        if ((Yt(e) || xt(e) || Ft(e)) && (u = !0), (zt(e) || qt(e) || kt(e)) && (l = !0), Je(e) && (f = !0), !(r && o && (a || l) && s && (d || f) && (c || u))) return L("Bad Recipe for " + nr(e) + ": has_login_fields?" + r + " has_logged_in_fields?" + o + " has_login_success_fields?" + a + " has_login_success_alt?" + l + " has_logout_field?" + d + " has_logout_alt?" + f + " has_cpw_fields?" + s + " has_cpw_success_fields?" + c + " has_cpw_success_alt?" + u), !1;
        for (n = 0; n < e.field_info.length; n++)
            if ((i = e.field_info[n]).id_type == TYPE_XPATH) {
                if (!Si(t, i.id_value)) return L("Bad Recipe: bad xpath"), !1;
                if (i.id_value && 0 < i.id_value.indexOf("@clas,")) return L("Bad Recipe: @clas mispell"), !1
            } else if ((i.id_type == TYPE_ID || i.id_type == TYPE_NAME) && i.id_value && (0 <= i.id_value.indexOf("//") || 0 <= i.id_value.indexOf("text()") || 0 <= i.id_value.indexOf("contents("))) return L("Bad Recipe: xpath in non-xpath field def"), !1;
        return !0
    }

    function Ei(e) {
        var t, n, i, _ = !0,
            r = {
                id_function: 1,
                id_value: 1,
                id_type: 1
            };
        if (!e.field_info || e.field_info.length <= 0) return !1;
        for (n = 0; n < e.field_info.length; n++)
            for (i in (t = e.field_info[n]) && "number" != typeof t.id_function && (verbose_log(sprintf("field %s has invalid function '%s'", t.id_value, t.id_function)), _ = !1), t) t.hasOwnProperty(i) && (r[i] || (verbose_log(sprintf("found invalid field property '%s'", i)), _ = !1));
        if (r = {
                jsfrag: 1,
                jstype: 1
            }, e.jsfrags && 0 < e.jsfrags.length)
            for (n = 0; n < e.jsfrags.length; n++)
                for (i in (t = e.jsfrags[n]) && "number" != typeof t.jstype && (verbose_log(sprintf("js with invalid type '%s'", t.jstype)), _ = !1), t) t.hasOwnProperty(i) && (r[i] || (verbose_log(sprintf("found invalid javascript property '%s'", i)), _ = !1));
        if (r = {
                length: 1,
                maxlength: 1,
                minlength: 1,
                special: 1,
                digits: 1,
                upper: 1,
                lower: 1,
                mindigits: 1
            }, e.generate_pref_overrides)
            for (i in e.generate_pref_overrides) e.generate_pref_overrides.hasOwnProperty(i) && (r[i] || (verbose_log(sprintf("found invalid generate preference '%s'", i)), _ = !1));
        return _
    }

    function Pi() {
        return Se || Pe || Ee || Le || Ae || s || we || Ie
    }

    function wi() {
        Ie = we = s = Ae = Le = Ee = Pe = Se = !1
    }

    function Ii(e, t, n) {
        return !0
    }

    function Ai(e, t, n) {
        var i;
        return 0 < Dn(t).length || pass, !1
    }

    function Ti(e, t, n) {
        var i;
        return 0 < Un(t).length || pass, !1
    }

    function Oi(e, t, n) {
        var i;
        return 0 < Rn(t).length || pass, !1
    }

    function ki(e, t, n) {
        var i;
        return 0 < Mn(t).length
    }

    function Fi(e, t, n) {
        var i;
        return 0 < jn(t).length
    }

    function Wi(e, t) {}

    function Gi(e, t) {
        var n = t.docnum,
            i = t.url,
            _ = 2;
        return null !== S && (null !== S[n] && void 0 !== S[n] || CPWbot_bg.clear_frame_score(e, n, i), S[n] = S[n] + 2, !0)
    }

    function yi(e, t) {
        var n = t.docnum,
            i = t.url,
            _ = -2;
        return null !== S && (null !== S[n] && void 0 !== S[n] || CPWbot_bg.clear_frame_score(e, n, i), S[n] = S[n] + -2, !0)
    }

    function Di(e, t) {}

    function Ui(e, t, n) {}

    function Ri(e) {
        if (null === S || null === e) return 0;
        var t, n = 0,
            i, _;
        for (i in CS_table) CS_table.hasOwnProperty(i) && (_ = CS_table[i]).tabid === e && (t = _.docnum, (CPWbot_bg.skip_frame_by_score(t) || skip_CS_by_score(e, t)) && n++);
        return n
    }

    function Mi() {}

    function ji(e, t) {
        return !0
    }

    function Hi(e, t, n) {
        if (!t || !n) return !1;
        var i = "",
            _ = "",
            r = rn(n.aid);
        if (!r) return J_("given invalid aid - data consistency error?"), !1;
        L("pre-challenge-form-js"), _n(e, t, Gt);
        var o = ot(t),
            a = rt(t),
            l = fi(t),
            s = gi(t),
            c = pi(t),
            u = rnd2 = 0;
        U && (u = ir(), rnd2 = ir());
        var d = 0,
            f = xe(t);
        return o && (d++, on(e, i = getusernamefromacct(r), o, l, c * d + u, !1, f)), a && (d++, an(e, _ = getpasswordfromacct(r), a, l, c * d + u + rnd2, s, f)), L("post-challenge-form-js"), _n(e, t, yt), !0
    }

    function Vi(e, t, n) {
        if (!t) return !1;
        var i = !1;
        a = !1;
        var _ = at(t);
        if (_) {
            var r = DEFAULT_CLICK_DELAY,
                o;
            void 0 !== t.login_delay && (r = t.login_delay), a = !0, ln(e, _, r, xe(t)), i = !0
        }
        return _n(e, t, Dt) && (i = !0), !i || null
    }
    this.userlog = function(e, t) {
        return hi(e, t)
    }, this.click_ack_handler = function(e, t) {
        var n = t.docnum,
            i = t.url,
            _ = t.docstate,
            r = t.msgid,
            o = t.pwchangestate,
            a = t.found;
        return L("[T:" + e + "][D:" + n + "] cpwbot click_ack on " + t.id_value + " found=" + a + " url=" + i + " docstate=" + _ + " pwchangestate=" + o), l != r ? (console_error("response for last click request overlaps current click-wait, ignoring it, found=" + a), L("m_pwchange_last_click_field_id=" + l), L("found=" + a + " msgid = " + r), a && console_error("Bad Mojo")) : a && (Se = Se && !1, Le = Le && !1, Pe = Pe && !1, Ee = Ee && !1, we = we && !1, Ie = Ie && !1, Ae = Ae && !1, s = s && !1), !0
    }, this.fill_ack_handler = function(e, t) {
        var n = t.docnum,
            i = t.url,
            _ = t.docstate,
            r = t.msgid,
            o = t.pwchangestate,
            a = t.found;
        return verbose_log(sprintf("[%s][%s] cpwbot fill ack on %s found=%s docstate=%s url=%s req_id=%s", e, t.docnum, t.id_value, t.found, t.docstate ? t.docstate : "null", t.url ? t.url : "null", t.req_id ? t.req_id : "null")), !0
    }, this.js_ack_handler = function(e, t) {
        var n = "";
        try {
            n = JSON.parse(t.result)
        } catch (e) {
            console_warn("js_ack_handler: " + e)
        }
        return verbose_log(sprintf("[%s][%s] cpwbot js ack result=%s docstate=%s url=%s req_id=%s", e, t.docnum, n ? ofa(n) : "null", t.docstate ? t.docstate : "null", t.url ? t.url : "null", t.req_id ? t.req_id : "null")), !0
    }, this.check_for_robots = function(e, t, n) {}, this.check_robot_txt = function(e, t, n) {
        if (g_robots_txt) {
            if (!e) return !0;
            var i = je(e);
            if (null !== t) {
                var _, r = 0,
                    o = t.split("\n"),
                    a = !1,
                    l = !1;
                for (r = 0; r < o.length; r++)(0 == (_ = o[r]).length && "" == _ || "\r" == _) && (l = a = !1), "#" != _.charAt(0) && (0 != _.indexOf("User-agent: LastPass") && 0 != _.indexOf("User-agent: *") ? 0 != _.indexOf("Disallow: /") || (l = !0) : a = !0);
                return !a || !l
            }
            g_tmp_recipe = e
        }
    }, this.score_frame = function(e, t) {
        var n = t.docnum,
            i = t.url,
            _, r = -100,
            o = -100,
            a = 0,
            l = 100,
            s = lp_gettld_url(i),
            c = 0,
            u = ["doubleclick.net", "appads.com", "crwdcntrl.net", "googleadservices.com", "quantserve.com", "questionmarket.com", "advertising.com", "zedo.com", "checkm8.com", "zvents.com", "doubleclick.com", "yldmgrimg.net", "optmd.com", "casalemedia.com", "scorecardresearch.com", "quotemedia.com", "tacoda.net", "daylife.com", "brightcove.com", "wibiya.com", "clickability.com", "stats.com", "google-analytics.com", "adfusion.com", "2mdn.net", "adsonar.com", "everyclick.com", "shopica.com", "yeah.com", "vectorportal.com", "cnomy.com", "phpbb.com", "tracking101.com", "revsci.net", "revsci.com", "atdmt.com", "mmismm.com", "googlesyndication.com", "247realmedia.com", "pointroll.com", "bluekai.com", "serving-sys.com", "vizu.com", "cleanprint.com", "outbrain.com", "tweetmeme.com", "visiblemeasures.com", "starwave.com", "kaango.com", "gabriels.net", "overture.com", "yieldmanager.net", "2mdn.com", "eyewonder.com", "imgdownloads.com", "liverail.com", "adnxs.com", "addthis.com", "addthiscdn.com", "imshopping.com", "adtech.de", "2o7.net", "glanceguide.com", "performgroup.com", "undertone.com", "undertonevideo.com", "martiniadnetwork.com", "chartbeat.net", "omtrdc.net", "zoomflow.com", "crowdscience.com", "imrworldwide.com", "fwmrm.net", "tremormedia.com", "webtrends.com", "adzerk.net", "adzerk.com", "qubitproducts.com", "maxymiser.net", "maxymiser.com", "newrelic.com", "mathtag.com", "adroll.com", "criteo.com", "liveperson.com", "getclicky.com", "sitemeter.com", "displaymarketplace.com", "yieldmanager.com", "media6degrees.com", "betrad.com", "360yield.com", "adpredictive.com", "burstnet.com", "adtechus.com", "adsafeprotected.com", "turn.com", "contextweb.com", "p-td.com", "lijit.com", "rubiconproject.com", "ru4.com", "admeld.com", "openx.net", "pubmatic.com", "localyokelmedia.com", "qnsr.com", "wrating.com", "audienceiq.com", "mydas.mobi", "mopub.com", "visualrevenue.com", "adsymptotic.com", "admob.com", "adtrking.com", "4dsply.com", "adshostnet.com", "adziff.com", "33across.com", "vindicosuite.com", "securepaths.com", "taboola.com", "trk4.com", "crwdcntrl.com", "connexity.com", "connexity.net", "effectivemeasure.net", "visualdna.com", "amazon-adsystem.com", "4dsply.com", "adblade.com", "doubleverify.com", "technoratimedia.com", "adjuggler.com", "opbandit.com", "iesnare.com", "adexcite.com", "adadvisor.net", "agkn.com", "dntx.com", "revenuehits.com", "tribalfusion.com"],
            d = ["ads.cnn.com", "metrics.post-gazette.com", "ads.nwsource.com", "adbox.sina.com.cn", "ads.sina.com.cn", "ad.afy11.net", "avatar.cnn.com", "ads.cnn.com", "metrics.apple.com", "trailers.apple.com", "metrics.philly.com", "adsatt.espn.go.com", "player.ooyala.com", "seg.sharethis.com", "edge.sharethis.com", "bender.spoutable.com", "engine.spoutable.com"],
            f = ["facebook.com/plugins", "facebook.com/connect/xd_arbiter", "youtube.com/embed/", "platform.twitter.com/widget", "platform.twitter.com/tweet_button", "libsyn.com/embed", "amazon.com/gp/widget"];
        for (g_CS_tops && g_CS_tops[e] == t.docnum && (a = l), _ = 0; _ < u.length; _++)
            if (s == u[_]) {
                a = r, c = 1;
                break
            } if (!c)
            for (_ = 0; _ < d.length; _++)
                if (0 <= i.indexOf(d[_])) {
                    a = r, c = 1;
                    break
                } if (!c)
            for (_ = 0; _ < f.length; _++)
                if (0 <= i.indexOf(f[_])) {
                    a = o, c = 1;
                    break
                } return S && (S[n] = a), a
    }, this.score_topdoc = function(e, t, n) {
        var i = 100;
        if (null === S) return !1;
        null !== S[t] && void 0 !== S[t] || CPWbot_bg.clear_frame_score(e, t, n);
        var _ = getcsinfo(e, t);
        return _ && (state_param = _.flags, state_param && state_param.has_frameset) || (S[t] = S[t] + i), !0
    }, this.clear_frame_score = function(e, t, n) {
        var i = 0;
        return null !== S && !(S[t] = 0)
    }, this.reset_scores = function(e) {
        return !(S = null)
    }, this.skip_frame_by_score = function(e) {
        if (null === S || null === e) return !0;
        var t = 0;
        return L("skip? docnum =" + e + " score=" + S[e]), S[e] < 0
    }, this.recompute_scores_for_tab = function(e) {
        return !0
    }, this.retry_validate = function(e, t) {
        null === t && (t = "all"), fe && (w = [], sendCS(e, fe, t))
    }, this.wait_for_doc_complete = function(e, t, n, i, _, r) {
        var o = 900,
            a, l = i.aid,
            s = i.recipe,
            c = null,
            u = ai(s);
        _ = _ || 0;
        var d = bi(i.recipe);
        d = d || o;
        var f = g_CS_tops[e];
        if (void 0 === f && (f = null), null == t && (t = f), null !== t && (a = getcsinfo(e, t)) && (c = a.docstate, p(a.docstate) && p(r))) {
            var g = _ ? _ * d / 1e3 : 0;
            return isNaN(g) && verbose_log("WTF NaN: recursion_ctr=" + _ + " aid=" + l), 0 < g && hi(vi, sprintf("Waited %d seconds for %s on [tabid:%s][docnum:%d] to execute %s", g, u ? "interactive" : "complete", e, t, i.desc)), null !== CPWbot_bg.get_pwchangetabid() && CPWbot_bg.in_validate() && (g_ = !1, L("WAITED DONE, calling " + i.desc + " VALIDATE_IN_DOCWAIT=false")), n(e, i)
        }
        return I_ || !lploggedin || null === ue ? (L("abort wait-for-doc-complete " + i.desc), !1) : (ping(e), verbose_log("waiting for tabid " + e + " topdocnum=" + f + " passed_docnum=" + t + " docstate=" + (a ? a.docstate : "null") + " last_state=" + r), t != f && (console_error("edge case - top docnum changed due to page reload?  will wait for that instead" + t + "!=" + f), t = f), setTimeout(function() {
            lploggedin && CPWbot_bg && CPWbot_bg.wait_for_doc_complete(e, t, n, i, _ + 1, c)
        }, d), !0);

        function p(e) {
            return u ? "complete" == e || "interactive" == e : "complete" == e
        }
    }, this.should_wait_for_document_complete = function(e, t) {
        if (null === e || !t) return !1;
        var n = t.desc,
            i = t.recipe,
            _ = !0,
            r = t.fn_url_failed,
            o = t.fn_url_success,
            a = t.fn_required,
            l = t.fn_rejected,
            s = a ? a(i) : [],
            c = l ? l(i) : [],
            u = t.target_url,
            d = t.target_field,
            f = t.target_js;
        if (null == u && null == d && null == f || (_ = !1), _) {
            if (0 == s.length && 0 == c.length && !o && !r) return L("should_wait returns false, WARN: " + n + " has no field or url criteria defined to validate against"), !1
        } else if (!u && !d && !f) return L("should_wait returns false, no wait criteria, " + n), !1;
        return L("should_wait returns true for " + n + " is_validate=" + _), !0
    }, this.handle_challenge = function(e, t) {}, this.validate_challenge_page = function(e, t, n) {
        if (!t) return !1;
        var i = {
            recipe: t,
            desc: "validate_challenge_form",
            fn_required: Fn,
            fn_rejected: Wn,
            fn_url_success: $t,
            fn_url_failed: Qt
        };
        return CPWbot_bg.should_wait_for_document_complete(e, i) ? (Xi = !0, CPWbot_bg.wait_for_doc_complete(e, null, xn, i), null) : (L("validate_challenge_form returns false, no criteria to check, no wait"), !1)
    }, this.force_validate_retry = function(e) {
        I = e
    }, this.validate_challenge_success = function(e, t, n) {
        if (!t) return !1;
        _n(e, t, Ut);
        var i = {
            recipe: t,
            desc: "validate_challenge_success",
            fn_required: Gn,
            fn_rejected: yn,
            fn_url_success: qn,
            fn_url_failed: qn
        };
        return CPWbot_bg.should_wait_for_document_complete(e, i) ? (Xi = !0, CPWbot_bg.wait_for_doc_complete(e, null, xn, i), null) : (L("validate_challenge_success returns true, no wait "), !0)
    };
    var Ji = "";

    function Bi(e, t) {
        null !== e && null !== g_CS_tops[e] && sendCS(e, {
            cmd: "do_result_div",
            msg: t
        }, g_CS_tops[e])
    }

    function Ki(e) {
        var t = g_CS_tops[e],
            n = getcsinfo(e, t);
        if (n && n.flags) return n.flags.need_dynamic_delay
    }
    this.set_dialog_msg = function(e) {
        return Ji = e, !0
    }, this.get_dialog_msg = function() {
        return Ji
    }, this.clear_dialog_msg = function() {
        return !(Ji = "")
    }, this.get_failstate = function() {
        return g
    }, this.get_okstate = function() {
        return p
    }, this.get_captchastate = function() {
        return b
    }, this.get_docaptchastate = function() {
        return Te
    }, this.get_brokenheartstate = function() {
        return v
    }, this.get_failpwsavedstate = function() {
        return A_
    }, this.get_fail_pending = function() {
        return c
    }, this.get_success_pending = function() {
        return u
    }, this.show_selenium_ok = function(e) {
        Bi(e, "OK")
    }, this.show_selenium_fail = function(e) {
        Bi(e, "FAIL")
    }, this.preinit = function() {
        ue = "preinit", m = E, se(), _ = Ji = "", null !== CPWbot_bg.broken_hearted_st_id && clearTimeout(CPWbot_bg.broken_hearted_st_id), CPWbot_bg.broken_hearted_st_id = null, A_ = p = v = g = Te = b = I_ = !1
    }, this.do_milestone = function(e, t, n, i) {
        var _ = null;
        if (n = n || {
                symbolic: ""
            }, m = t, null == i && (i = ""), "undefined" != typeof Date) {
            var r = "",
                o = (new Date).toString();
            if (oe[t]) {
                var a = nr(n);
                a = a || gs("unnamed site"), _ = sprintf(oe[t], a)
            }
            switch (t) {
                case 1:
                case 2:
                    break;
                case 3:
                case 8:
                    break;
                case 4:
                    verbose_log("C: GOTO ACCTMGMT ");
                    break;
                case 5:
                    verbose_log("D: REVEAL");
                    break;
                case 6:
                    verbose_log("E: TRIGGER");
                    break;
                case 7:
                    verbose_log("F: VALIDATE");
                    break;
                case y:
                    cn(e, n, de), _n(e, n, Bt), Te = !0, g_isfirefox && zn(e, gs("The website needs you to enter information. Please close this overlay and enter it."), n, !0), Xn(e), CPWbot_bg.session_timeout_st_id && (clearTimeout(CPWbot_bg.session_timeout_st_id), CPWbot_bg.session_timeout_st_id = null), CPWbot_bg.docaptcha_si_id && clearInterval(CPWbot_bg.docaptcha_si_id), CPWbot_bg.docaptcha_si_id = setInterval(function() {
                        Te && xn(e, {
                            desc: "docaptcha",
                            recipe: n,
                            fn_required: jn
                        })
                    }, 1e3);
                    break;
                case 63:
                    hi(mi, "Saved and Replaced"), p = !0, (debug || g_isdebug) && (hi(mi, "showing selenium ok result"), CPWbot_bg.show_selenium_ok(e)), u = !0, CPWbot_bg.mark_timestamp("success");
                    break;
                case 65:
                    hi(mi, g_v2engine ? sprintf("[%s] v2 %s", o, gs("BEGIN")) : sprintf("[%s] %s", o, gs("BEGIN")));
                    break;
                case 66:
                    hi(mi, g_v2engine ? sprintf("[%s] v2 %s", o, gs("End").toUpperCase()) : sprintf("[%s] %s", o, gs("End").toUpperCase()));
                    break;
                case 67:
                    verbose_log("USER IS ALREADY LOGGED IN, SKIP LOGIN STATE"), hi(mi, "Appears to be Logged Into Site");
                    break;
                case X:
                case J:
                    hi(mi, "Filling Login Form");
                    break;
                case z:
                case B:
                    hi(mi, "Submit Login Form");
                    break;
                case 70:
                    hi(mi, "Going to Login"), verbose_log("B: GOTO LOGIN");
                    break;
                case 71:
                    hi(mi, "Perform Logout");
                    break;
                case 72:
                    1 != R_ && hi(mi, sprintf("Adjusting for %s site, %6.2f", 1 < R_ ? "slow" : "fast", R_));
                    break;
                case 73:
                    A_ = !0, hi(mi, "Generated Random Password and Saved to Vault");
                    break;
                case Q:
                    r = "UNEXPECTED ERROR";
                    break;
                case Fe:
                    r = "FILL LOGIN FORM [PW CHALLENGE] FAILED!";
                    break;
                case We:
                    r = "SUBMIT LOGIN FORM [PW CHALLENGE] FAILED!";
                    break;
                case Ge:
                    r = "Expected Change-Password Form";
                    break;
                case ye:
                    r = "Change Password Failed";
                    break;
                case ke:
                    r = "Expected Login Form";
                    break;
                case Oe:
                case Me:
                    r = "Login to Website Failed!";
                    break;
                case De:
                    r = "Unable to Save New Password";
                    break;
                case Ue:
                    r = "Unable to Log Out of Website";
                    break;
                case $:
                    r = gs("Timed out waiting for the page to load.  Retry?"), v = !0;
                    break;
                case Re:
                    r = "Session Timeout";
                    break;
                case ee:
                    r = "Halt Requested";
                    break;
                case te:
                    b = !0, r = "Interaction required; cannot proceed";
                    break;
                case E:
                default:
                    _ = ""
            }
            if ((t & Q) == Q) {
                g = !0, hi(Ni, r), (debug || g_isdebug) && (hi(mi, "showing selenium fail result"), CPWbot_bg.show_selenium_fail(e)), c = !0, CPWbot_bg.mark_timestamp("fail");
                var l = {
                    severity: "fatal",
                    msg: sprintf("%s[debug=%s]", r, i)
                };
                CPWbot_bg.phone_home(e, n, l), A_ && (_ = sprintf(oe[re], nr(n)))
            } else 64 == (64 & t) && (_ = "");
            if (_ && (zn(e, _, n), CPWbot_bg.set_dialog_msg(_)), CPWbatch && CPWbatch.cpw_get_batchjob_state() != F_NONE) {
                var s = "";
                63 == t ? s = "OK" : t == $ || t == Re ? s = "TIMEOUT" : (t & Q) == Q && t != $ && t != Re && (s = "FAIL")
            }
            return CPWbatch && CPWbatch.conditional_website_status_update({
                tabid: e,
                recipe: n,
                state: t,
                msg: _
            }), !0
        }
    };
    var Yi = null,
        xi = null,
        qi = null,
        zi = null,
        Xi = !1,
        Zi = !1,
        Qi = !1,
        Xi = !1,
        $i = [],
        e_ = 0,
        t_ = [],
        n_ = !1,
        i_ = !1,
        __ = !1,
        r_ = !1,
        o_ = !1,
        a_ = !1,
        l_ = !1,
        s_ = !1,
        c_ = !1,
        u_ = !1,
        d_ = !1,
        f_ = !1,
        g_ = null,
        p_ = null,
        b_ = {},
        v_ = null,
        m_ = null,
        C_ = null,
        N_ = !1,
        h_ = null,
        S_ = null,
        L_ = null,
        E_ = 0,
        P_ = 10,
        w_ = null,
        I_ = !1,
        A_ = !1;

    function T_(t, e) {
        var n = di(e);
        n = n || DEFAULT_SESSION_TIMEOUT, null !== R_ && 0 < R_ && !isNaN(R_) && (n *= R_);
        var i = CPWbot_bg.get_session();
        CPWbot_bg.session_timeout_st_id = setTimeout(function() {
            if (i == CPWbot_bg.get_session()) {
                CPWbot_bg.mark_timestamp("session_timeout");
                var e = CPWbot_bg.get_timestamp("session_timeout") - CPWbot_bg.get_timestamp("initial_cycle");
                if (verbose_log(sprintf("session timeout at %6.2f seconds after T=0", e / 1e3)), verbose_log("SESSION TIMEOUT WAKEUP"), !c && !u && C == t) return V_("timeout: a change is still running ? tabid=" + t + "last state =" + ue), void CPWbot_bg.panic("session timeout");
                pn(t), CPWbot_bg.cpwbot_cs_finish_complete(t)
            } else verbose_log("stale timeout")
        }, n)
    }
    this.broken_hearted_st_id = null, this.session_timeout_st_id = null, this.docaptcha_si_id = null;
    var O_ = 0;

    function k_(e, t, n) {
        var i = "";
        verbose_log("B1: validate_login_form "), ue = "B1";
        var _ = null,
            r = {
                aid: n.aid,
                recipe: t
            };
        return null === (_ = CPWbot_bg.validate_login_form(e, t, r)) ? (verbose_log("B1: validate_login_form / CS callout "), g_ = !0, L("VALIDATE_IN_DOCWAIT=true"), null) : _ ? (do_A4(e, t, n), !0) : (CPWbot_bg.do_milestone(e, ke, t, ""), pn(e), !1)
    }

    function F_(e, t, n) {
        var i;
        setTimeout(function() {
            lploggedin && CPWbot_bg && CPWbot_bg.engine(e, t, n)
        }, 250)
    }

    function W_() {
        var e, t;
        for (e = 0; e < t_.length; e++)
            if ("validate_response" == (t = t_[e]).type) return !0;
        return !1
    }

    function G_(e, t) {
        var n = m_lastclick_metadata;
        P_ < E_ && verbose_log("too many click retries"), n && (hi(mi, "Retry Click"), verbose_log("tabid=" + e + " id_type=" + n.id_type + " id_value=" + n.id_value), sendCS(e, n, t), E_++)
    }

    function y_(e) {
        var t = (new Date).getTime(),
            n;
        return S_ < t && !L_ && (L_ = !0, G_(e, "all"), !0)
    }

    function D_(e) {
        var t, n;
        return M_ && 1e4 < (n = M_.initial_cycle - M_.dopwchange) && 0 != M_.initial_cycle && 0 != M_.dopwchange && U_(e, R_ = 2), !0
    }

    function U_(e, t) {
        return L(sprintf("[%s] time factor adjustment=%6.2f", nr(e), t)), !0
    }
    this.engine = function(e, t, _) {
        var n = _.aid,
            i = _.recipe,
            a = (new Date).getTime(),
            r = !1;
        if (0 == e_ && (CPWbot_bg.mark_timestamp("initial_cycle"), D_(i), CPWbot_bg.do_milestone(e, 72, i), null !== CPWbot_bg.broken_hearted_st_id && clearTimeout(CPWbot_bg.broken_hearted_st_id), CPWbot_bg.broken_hearted_st_id = null, T_(e, i)), W("engine awaken tick=" + ++e_), null !== ue) {
            if (!I_ && lploggedin) {
                if (!Te) {
                    var o = di(i);
                    o = o || DEFAULT_SESSION_TIMEOUT;
                    var l = CPWbot_bg.get_timestamp("docaptcha_success");
                    if ((l = (l = l || CPWbot_bg.get_timestamp("initial_cycle")) || Yi) + o * R_ < a) return r = !0, CPWbot_bg.do_milestone(e, Re, i, "engine"), void CPWbot_bg.panic("TIMEOUT-engine")
                }
                var s = Yn(i);
                if (Xi && 0 < zi && zi + s < a && (W_(i) ? pass : (g_ = !1, L("ENGINE - VALIDATE_IN_DOCWAIT=false"), CPWbot_bg.finish_cpwbot_validate_state(e, ge, m_, C_, pe))), t && he) {
                    if (!(qi < a)) return W("CONTINUE SLEEPING"), void F_(e, ue, _);
                    W("AWAKEN FROM SLEEP")
                }
                var c = {},
                    u = null,
                    d, f;
                for (d = 0; d < t_.length; d++) {
                    var g = (f = t_[d]).data.docnum;
                    switch (W(sprintf("[%s][%s] processing event#%d cmd=%s", e, g, d, f.data.cmd)), f.type) {
                        case "validate_response":
                            CPWbot_bg.cpwbot_validate_state_result_handler(f.tabid, f.data);
                            break;
                        case "fill_ack":
                            CPWbot_bg && CPWbot_bg.fill_ack_handler(f.tabid, f.data);
                            break;
                        case "click_ack":
                            CPWbot_bg && CPWbot_bg.click_ack_handler(f.tabid, f.data);
                            break;
                        case "js_ack":
                            CPWbot_bg && CPWbot_bg.js_ack_handler(f.tabid, f.data);
                            break;
                        case "finish_ack":
                            CPWbot_bg && CPWbot_bg.cpwbot_finish_ack_handler(f.tabid, f.data);
                            break;
                        case "loadurl":
                            if (g_CS_tops && g_CS_tops[e] == g) switch (n_ && (n_ = !1, W("m_in_loadurl cleared")), W("loadurl/setprefs against top :" + g_CS_tops[e] + " == " + g + " start_state=" + CPWbot_bg.get_pwchangestate()), ue) {
                                case "A1":
                                case "A2":
                                case "A3":
                                case "M":
                                case "B1":
                                case "F":
                                    CPWbot_bg && fe && (CPWbot_bg.force_validate_retry(!0), CPWbot_bg.retry_validate(e));
                                    break;
                                case "B1R":
                                case "A3R":
                                    break;
                                case "FK0":
                                case "FKLL0":
                                    break;
                                case 0:
                                case "0":
                                    W("engine called in initial state - ignoring")
                            } else null !== CPWbot_bg.get_pwchangetabid() && CPWbot_bg.in_validate() ? (L("processing loadurl event, reissue last validate to new doc [" + e + "][" + g + "]"), CPWbot_bg.retry_validate(e, g)) : null !== CPWbot_bg.get_pwchangetabid() && Pi() && (L("loadurl sent while waiting for a click, issue last click to new frame" + g), f_ = !0, G_(e, g));
                            break;
                        case "unload":
                            break;
                        default:
                            W("need to handle this msg: " + f.data.cmd)
                    }
                }
                CPWbot_bg.clear_event_queue(), W("current state is " + ue);
                var p = de;
                switch (ue && null === p && (p = {
                    aid: n
                }), ue) {
                    case 0:
                        ne(e, i, p);
                        break;
                    case "A1":
                        if (CPWbot_bg.in_validate() || g_) W("waiting for validate to end, " + ue), pass;
                        else if (__) W("waiting for doc-complete for Cnav, " + ue), pass;
                        else if (Xi) W("A1: wait on m_in_validate");
                        else {
                            var b = u = p_;
                            b ? (CPWbot_bg.do_milestone(e, 67, i), ie(e, i, _)) : null === b ? CPWbot_bg.alert("A1 unexpected") : x(e, i, _)
                        }
                        break;
                    case "A3R":
                        we ? (W("waiting for click_ack, " + ue), y_(e), pass) : n_ ? (W("waiting for loadurl , " + ue), pass) : q(e, i, _);
                        break;
                    case "B1Rpre":
                        ee(e, i, _);
                        break;
                    case "B1R":
                        Ie ? (W("waiting for click_ack, " + ue), y_(e), pass) : n_ ? (W("waiting for loadurl , " + ue), pass) : Xi ? W("B1R: wait on m_in_validate") : k_(e, i, _);
                        break;
                    case "B1":
                        if (CPWbot_bg.in_validate() || g_) W("waiting for validate to end, " + ue), pass;
                        else if (Xi) W("B1: wait on m_in_validate");
                        else {
                            var v = u = p_;
                            if (b_ && b_.found_interactive) return console_error("B1: found interactive field"), void tr(e, i);
                            if (!v) {
                                debug && g_innerHTML_debug && b_.innerhtml && verbose_log("VALIDATE FAILURE, final innerHTML is " + b_.innerhtml);
                                var m = "";
                                return CPWbot_bg.do_milestone(e, ke, i, m), void pn(e)
                            }
                            X(e, i, _)
                        }
                        break;
                    case "A2":
                        if (CPWbot_bg.in_validate() || g_) W("waiting for validate to end, " + ue), pass;
                        else if (Xi) W("A2: wait on m_in_validate");
                        else if (__) W("A2: wait on navigate");
                        else {
                            if (b_ && b_.found_interactive) return console_error("A2: found interactive field"), void tr(e, i);
                            var C;
                            if (!(C = u = p_)) {
                                var m = "";
                                return CPWbot_bg.do_milestone(e, Oe, i, m), void pn(e)
                            }
                            G(e, i, _)
                        }
                        break;
                    case "A3":
                        if (CPWbot_bg.in_validate() || g_ || Xi) W("waiting for validate to end, " + ue), pass;
                        else {
                            var v = u = p_;
                            if (b_ && b_.found_interactive) return console_error("A3: found interactive field"), void tr(e, i);
                            v ? (W("A3: has login form, calling do_A4"), b_ && b_.found_interactive && W("A3: found_interactive=true"), X(e, i, _)) : (debug && g_innerHTML_debug && b_.innerhtml && verbose_log("VALIDATE FAILURE, final innerHTML is " + b_.innerhtml), $(e, i, _))
                        }
                        break;
                    case "M":
                        if (CPWbot_bg.in_validate() || g_ || Xi) W("waiting for validate to end, " + ue), pass;
                        else {
                            var N = u = p_;
                            if (b_ && b_.found_interactive) return console_error("M: found interactive field"), void tr(e, i);
                            N ? oe(e, i, _) : (verbose_log("did not find initial stage login form"), b_.innerhtml && verbose_log("final innerHTML is " + b_.innerhtml), _.check_login_entry_form = !1, z(e, i, _))
                        }
                        break;
                    case "M2":
                        if (CPWbot_bg.in_validate() || g_) W("waiting for validate to end, " + ue), pass;
                        else if (Xi) W("M2: wait on m_in_validate");
                        else if (__) W("M2: wait on navigate");
                        else {
                            if (b_ && b_.found_interactive) return console_error("M2: found interactive field"), void tr(e, i);
                            var C;
                            if (!(C = u = p_)) {
                                var m = "";
                                return b_ && (m = sprintf("found_bad_match=%s, num_ok_matches=%s, retval=%s, url_success_match=%s, url_failure_match=%s", b_.found_bad_match, b_.num_ok_matches, b_.retval, b_.url_success_match, b_.url_failure_match)), CPWbot_bg.do_milestone(e, Me, i, m), void pn(e)
                            }
                            _.check_login_entry_form = !1, z(e, i, _)
                        }
                        break;
                    case "A4":
                        break;
                    case "A5":
                        Q(e, i, _);
                        break;
                    case "M5":
                        le(e, i, _);
                        break;
                    case "A":
                        console_warn("engine state=A todo");
                        break;
                    case "B":
                        n_ ? (W("waiting for loadurl to complete, " + ue), pass) : o_ ? (W("waiting for doc-complete after loadurl, " + ue), pass) : te(e, i, _);
                        break;
                    case "Bsleep":
                        o_ ? (W("waiting for doc-complete after loadurl, " + ue), pass) : te(e, i, _);
                        break;
                    case "C":
                        if (Ee) W("waiting for click_ack, " + ue), y_(e), pass;
                        else if (n_) W("waiting for loadurl , " + ue), pass;
                        else if (r_) W("waiting for reveal-cpw doc-complete, " + ue), pass;
                        else {
                            var h;
                            void 0 === (h = g_CS_tops[e]) && (h = null);
                            var S = null;
                            if (null !== h)
                                if (S = getcsinfo(e, h)) {
                                    var E = S.docstate;
                                    "complete" == S.docstate && "complete" == E ? (W("C: wait completed " + ue), y(e, i, _)) : W("C: wait docstate:" + S.docstate + ",last:" + E)
                                } else W("C: fail");
                            else W("C: wtf - wait for page to finish loading?");
                            null !== h ? ping(e, h) : ping(e)
                        }
                        break;
                    case "Cnav":
                        L("aid = " + v_.payload.aid), CPWbot_bg.navigate_to_acctmgmt(e, v_), v_ = null;
                        break;
                    case "Cpickup":
                        Ee && (L("still waiting for click-C"), W("waiting for click_ack, " + ue), y_(e)), r_ ? L("still waiting for document-complete to run reveal_cpw") : y(e, i, _);
                        break;
                    case "A3Rsleep":
                        q(e, i, _);
                        break;
                    case "B1Rsleep":
                        z(e, i, _);
                        break;
                    case "Csleep":
                        r_ ? L("still waiting for document-complete to run reveal_cpw") : y(e, i, _);
                        break;
                    case "Dpickup":
                        iscpwfast() && CPWbatch.conditional_website_status_update({
                            aid: n,
                            state: 76,
                            msg: "SLOW"
                        }), Pe ? (L("still waiting for click-D"), W("waiting for click_ack, " + ue), y_(e)) : U(e, i, _);
                        break;
                    case "Dsleep":
                        U(e, i, _);
                        break;
                    case "Epickup":
                        iscpwfast() && CPWbatch.conditional_website_status_update({
                            aid: n,
                            state: 76,
                            msg: "SLOW"
                        }), Se ? (L("still waiting for click-E"), W("waiting for click_ack, " + ue), y_(e)) : (_.validate_result = null, B(e, i, _));
                        break;
                    case "Esleep":
                        _.validate_result = null, B(e, i, _);
                        break;
                    case "D":
                        if (W("engine handle D"), Pe || n_) Pe ? (W("waiting for click_ack, " + ue), y_(e)) : W("waiting for load to complete, " + ue), pass;
                        else {
                            var h;
                            void 0 === (h = g_CS_tops[e]) && (h = null);
                            var S = null;
                            if (null !== h)
                                if (S = getcsinfo(e, h)) {
                                    var E = S.docstate;
                                    "complete" == S.docstate && "complete" == E ? (W("D: wait completed " + ue), U(e, i, _)) : W("D: wait docstate:" + S.docstate + ",last:" + E)
                                } else W("D: fail");
                            else W("D: wtf - wait for page to finish loading?");
                            null !== h ? ping(e, h) : ping(e)
                        }
                        break;
                    case "Dreveal":
                        var P = CPWbot_bg.reveal_cpw(e, v_);
                        v_ = null;
                        break;
                    case "D1":
                        if (CPWbot_bg.in_validate() || g_) W("waiting for validate to end, " + ue), pass;
                        else if (Xi) W("D1: wait on m_in_validate");
                        else if (i_) W("D1: wait on doc-complete for trigger_cpw");
                        else {
                            var w = u = p_;
                            if (b_ && b_.found_interactive) return console_error("D1: found interactive field"), void tr(e, i);
                            w ? J(e, i, _) : M(e, i, _)
                        }
                        break;
                    case "D2":
                        if (CPWbot_bg.in_validate() || g_) W("waiting for validate to end, " + ue), pass;
                        else if (Xi) W("D2: wait on m_in_validate");
                        else {
                            var I;
                            if (!(u = p_)) {
                                var m = "";
                                return CPWbot_bg.do_milestone(e, Ge, i, m), void pn(e)
                            }
                            j(e, i, _)
                        }
                        break;
                    case "D4":
                        break;
                    case "D5":
                        Le ? (W("waiting for click_ack, " + ue), y_(e)) : i_ ? W("D5: wait on doc-complete for trigger_cpw") : J(e, i, _);
                        break;
                    case "D3":
                        console_error("D3 reached - should not happen");
                        break;
                    case "D_validate_cpw_form":
                        xn(e, v_), v_ = null;
                        break;
                    case "E":
                        console_error("E: should not occur");
                        break;
                    case "Etrigger":
                        Se ? (W("waiting for click_ack, " + ue), y_(e)) : n_ ? console_error("Etrigger: m_in_loadurl should not happen") : Xi ? console_error("Etrigger: m_in_validate should not happen") : (CPWbot_bg.trigger_cpw(e, v_), v_ = null);
                        break;
                    case "F":
                        if (CPWbot_bg.in_validate() || g_) W("waiting for validate to end, " + ue), pass;
                        else if (n_) W("waiting for loadurl and doc-complete"), pass;
                        else if (Xi) W("F: wait on m_in_validate"), pass;
                        else {
                            CPWbot_bg.bagration();
                            var A = u = p_;
                            if (null !== A) {
                                verbose_log("F: VALIDATE return from CS, returned " + A), debug && g_innerHTML_debug && p_.innerhtml && !A && verbose_log("VALIDATE FAILURE, final innerHTML is " + p_.innerhtml);
                                var m = "";
                                if (A)
                                    if (verbose_log("cpwbot initiate: validate cpw succeeded, now updating user record"), gn(e, i, p)) {
                                        CPWbot_bg.do_milestone(e, 63, i);
                                        var T = rn(n),
                                            O, O = lpdec_acct(be, T, "undefined" == typeof g_shares ? lpshares : g_shares),
                                            k = je(i),
                                            F = lp_gettld_url(k);
                                        verbose_log('remember to g_didchangepw for pw="' + (g_show_pw_in_logs || g_isadmin ? O : "REDACTED") + '" tld=' + F), remember_changed_pw(O, F) || verbose_log('save to g_didchangepw failed for pw="' + (g_show_pw_in_logs || g_isadmin ? O : "REDACTED") + '" tld=' + F), Y(e, i, _)
                                    } else CPWbot_bg.do_milestone(e, De, i, m);
                                else CPWbot_bg.do_milestone(e, ye, i, m)
                            }
                            pn(e), r = !0
                        }
                        break;
                    case "G":
                        break;
                    case "L":
                        if (Ae) W("waiting for click_ack, " + ue), y_(e), pass;
                        else if (n_) W("waiting for loadurl , " + ue), pass;
                        else {
                            var h;
                            void 0 === (h = g_CS_tops[e]) && (h = null);
                            var S = null;
                            null !== h && ((S = getcsinfo(e, h)) ? "complete" == S.docstate && (W("L: wait completed " + ue), _e(e, i, _)) : W("L: fail")), null !== h ? ping(e, h) : ping(e)
                        }
                        break;
                    case "Lsleep":
                        _e(e, i, _);
                        break;
                    case "Bagration":
                        break;
                    case "FK0":
                        Y_(e, i, _);
                        break;
                    case "FK1":
                        x_(e, i, _);
                        break;
                    case "FK2":
                        q_(e, i, _);
                        break;
                    case "FKI":
                        z_(e, i, _);
                        break;
                    case "FK3":
                        x(e, i, _);
                        break;
                    case "FKLL0":
                        X_(e, i, _);
                        break;
                    case "FKLL1":
                        Z_(e, i, _);
                        break;
                    case "FKLL2":
                        Q_(e, i, _);
                        break;
                    case "FKLLI":
                        $_(e, i, _);
                        break;
                    case "FKLL3":
                        G(e, i, _);
                        break;
                    default:
                        pass
                }
                return void(r || F_(e, ue, _))
            }
            H_(e, i)
        } else pn(e);

        function W(e) {
            if (debug) {
                var e = sprintf("[%s][%s] : %s", (new Date).toString(), "engine", e);
                console_log(e)
            }
        }

        function G(e, t, n) {
            var i, _ = {
                aid: n.aid,
                recipe: n.recipe
            };
            verbose_log("do_C " + ue), CPWbot_bg.do_milestone(e, 4, t);
            var r = {
                desc: "navigate_to_acctmgmt",
                didcallout: !1,
                payload: _,
                recipe: t,
                target_field: et(t),
                target_js: St(t) + "" + Lt(t),
                target_url: Ve(t)
            };
            return null === (i = CPWbot_bg.should_wait_for_document_complete(e, r) ? (L("wrapped navigate_to_acctmgmt around wait-for-document-complete"), r.didcallout = !0, __ = !0, CPWbot_bg.wait_for_doc_complete(e, null, function(e, t) {
                L("Cnav milestone"), ue = "Cnav", v_ = t
            }, r), null) : (r.didcallout = !1, L("execute navigate_to_acctmgmt, no wait "), CPWbot_bg.navigate_to_acctmgmt(e, r))) ? (L("callout to CS : navigate_to_acctmgmt"), i) : (!1 === i && console_error("C error"), L("execute navigate_to_acctmgmt, no wait "), D(e, t, n))
        }

        function y(e, t, n) {
            he = !1;
            var i = Qn(t);
            return (i = i || 2500) && !s_ ? (ue = "Csleep", L("C sleeping " + i), qi = (xi = a) + i, s_ = he = !0, null) : (s_ = !0, Ce && _n(e, t, Lt), D(e, t, n))
        }

        function D(e, t, n) {
            var i;
            verbose_log("do_D " + ue);
            var _ = {
                aid: n.aid,
                recipe: n.recipe
            };
            r_ = !1, CPWbot_bg.do_milestone(e, 5, t);
            var r = {
                desc: "reveal_cpw",
                payload: _,
                recipe: t,
                didcallout: !1,
                target_field: $e(t),
                target_js: Nt(t) + "" + ht(t),
                target_url: He(t)
            };
            return (i = CPWbot_bg.should_wait_for_document_complete(e, r) ? (L("wrapped reveal_cpw around wait-for-document-complete"), r.didcallout = !0, r_ = !0, CPWbot_bg.wait_for_doc_complete(e, null, function(e, t) {
                L("Dreveal milestone"), ue = "Dreveal", v_ = t
            }, r), null) : (r.didcallout = !1, L("execute reveal_cpw, no wait "), CPWbot_bg.reveal_cpw(e, r))) ? (L("execute reveal_cpw, no wait "), J(e, t, n)) : (L("callout to CS : reveal_cpw"), i)
        }

        function U(e, t, n) {
            he = !1;
            var i = $n(t);
            return (i = i || 2500) && !c_ ? (ue = "Dsleep", L("D sleeping " + i), qi = (xi = a) + i, c_ = he = !0, null) : (c_ = !0, me && _n(e, t, ht), R(e, t, n))
        }

        function R(e, t, n) {
            L("entered do_D1");
            var i = {
                aid: n.aid,
                recipe: t
            };
            ue = "D1";
            var _ = null;
            return null === (_ = CPWbot_bg.validate_cpw_form(e, t, i)) ? (verbose_log("D1: validate_cpw_form / CS callout "), g_ = !0, L("VALIDATE_IN_DOCWAIT=true"), null) : _ ? void 0 : M(e, t, n)
        }

        function M(e, t, n) {
            var i = "",
                _ = {
                    aid: n.aid,
                    recipe: t
                };
            ue = "D2";
            var r = null;
            return null === (r = CPWbot_bg.validate_login_form(e, t, _)) ? (g_ = !0, L("VALIDATE_IN_DOCWAIT=true"), verbose_log("D2: validate_login_form / CS callout "), null) : A ? j(e, t, n) : (CPWbot_bg.do_milestone(e, Ge, t, ""), pn(e), !1)
        }

        function j(e, t, n) {
            var i = "";
            ue = "D4", verbose_log("D4: FILL LOGIN/CHALLENGE");
            var _ = null;
            return (_ = cn(e, t, p)) ? H(e, t, n) : (CPWbot_bg.do_milestone(e, Fe, t, ""), pn(e), !1)
        }

        function H(e, t, n) {
            var i = "";
            verbose_log("D5: SUBMIT LOGIN"), ue = "D5";
            var _ = 1100,
                r = si(t);
            r && (_ = r), _ && verbose_log("waiting " + _ + " ms after login waiting for site to bootstrap");
            var o = un(e, t, p);
            return !1 === o ? (CPWbot_bg.do_milestone(e, We, t, ""), pn(e), !1) : null === o ? (_ && (he = !0, qi = (xi = a) + _), null) : J(e, t, n)
        }

        function V(e, t, n) {}

        function J(e, t, n) {
            var i;
            verbose_log("do_E " + ue);
            var _ = {
                aid: n.aid,
                recipe: n.recipe
            };
            CPWbot_bg.do_milestone(e, 6, t);
            var r = {
                desc: "trigger_cpw",
                payload: _,
                recipe: t,
                target_field: nt(t),
                target_js: Et(t) + "" + Pt(t),
                target_url: null
            };
            return (i = CPWbot_bg.should_wait_for_document_complete(e, r) ? (L("wrapped trigger_cpw around wait-for-document-complete"), r.didcallout = !0, i_ = !0, CPWbot_bg.wait_for_doc_complete(e, null, function(e, t) {
                L("Etrigger milestone"), ue = "Etrigger", v_ = t
            }, r), null) : (r.didcallout = !1, L("execute trigger_cpw, no wait "), CPWbot_bg.trigger_cpw(e, r))) ? (L("execute trigger_cpw, no wait "), B(e, t, n)) : (L("callout to CS : trigger_cpw"), i)
        }

        function B(e, t, n) {
            he = !1;
            var i = ei(t);
            return (i = i || 2500) && !u_ ? (ue = "Esleep", L("E sleeping " + i), qi = (xi = a) + i, u_ = he = !0, null) : (u_ = !0, n.validate_result = null, K(e, t, n))
        }

        function K(e, t, n) {
            var i;
            return CPWbot_bg.mark_timestamp("verify_cpw"), CPWbot_bg.do_milestone(e, 7, t), ue = "F", null === (i = CPWbot_bg.validate_cpw_success(e, t, p)) ? (verbose_log("F: VALIDATE callout to CS"), g_ = !0, L("VALIDATE_IN_DOCWAIT=true"), null) : (verbose_log("F: VALIDATE no callout to CS"), V_("no verify-cpw criteria defined"), CPWbot_bg.panic("fail"), !1)
        }

        function Y(e, t, n) {
            if (Wt(t)) {
                var i = 1234,
                    _ = ui(t);
                _ && (i = _), setTimeout(function() {
                    CPWbot_bg.conditional_js_exec(e, t, Wt)
                }, i)
            }
            return console_error("The End."), !0
        }

        function x(e, t, n) {
            CPWbot_bg.do_milestone(e, 3, t);
            var i = _t(t);
            if (i) {
                ue = "A3R", verbose_log("A3R: login-form-reveal");
                var _ = DEFAULT_CLICK_DELAY,
                    r;
                return void 0 !== t.login_reveal_delay && (_ = t.login_reveal_delay), we = !0, L("now waiting for click_ack A3R"), ln(e, i, _, xe(t)), CPWbot_bg.mark_timestamp("wait_for_click_ack_A3R"), null
            }
            return q(e, t, n)
        }

        function q(e, t, n) {
            L("post_A3R"), he = !1;
            var i = ti(t);
            return verbose_log("A3R sleepval=" + i), (i = i || 1e3) && !a_ ? (ue = "A3Rsleep", L("A3R sleeping " + i), qi = (xi = a) + i, a_ = he = !0, null) : (a_ = !0, n.validate_result = null, verbose_log("calling reveal JS after A3 state"), _n(e, t, At), z(e, t, n))
        }

        function z(e, t, n) {
            CPWbot_bg.do_milestone(e, 3, t);
            var i = !0;
            if (void 0 !== n.check_login_entry_form && (i = !!n.check_login_entry_form), ue = "A3", i && hn(t)) {
                verbose_log("M: validate_login_entry_form"), CPWbot_bg.mark_timestamp("login_entry"), ue = "M";
                var _ = null;
                if (verbose_log("calling validate_login_entry_form"), null === (_ = CPWbot_bg.validate_login_entry_form(e, t, p))) return verbose_log("M: validate_login_entry_form / CS callout "), g_ = !0, L("VALIDATE_IN_DOCWAIT=true"), null;
                verbose_log("M: validate_login_entry_form returns " + _ + " no call to CS")
            }
            verbose_log("A3: validate_login_form"), ue = "A3";
            var r = null;
            return verbose_log("calling validate_login_form"), null === (r = CPWbot_bg.validate_login_form(e, t, p)) ? (verbose_log("A3: validate_login_form / CS callout "), g_ = !0, L("VALIDATE_IN_DOCWAIT=true"), null) : (verbose_log("A3: validate_login_form returns " + r + " no call to CS"), r ? X(e, t, n) : $(e, t, n))
        }

        function X(e, t, n) {
            CPWbot_bg.mark_timestamp("login_cpw");
            var i = "";
            verbose_log("A4: FILL LOGIN"), ue = "A4";
            var _ = null;
            return (_ = cn(e, t, p)) ? Z(e, t, n) : (CPWbot_bg.do_milestone(e, ke, t, ""), pn(e), !1)
        }

        function Z(e, t, n) {
            verbose_log("A5: SUBMIT LOGIN"), ue = "A5";
            var i = "",
                _ = 1100,
                r = si(t);
            r && (_ = r), _ && verbose_log("waiting " + _ + " ms after login waiting for site to bootstrap");
            var o = un(e, t, p);
            return !1 === o ? (CPWbot_bg.do_milestone(e, Oe, t, ""), pn(e), !1) : null === o ? (_ && (he = !0, qi = (xi = a) + _), null) : Q(e, t, n)
        }

        function Q(e, t, n) {
            verbose_log("A2: validate_login_success "), ue = "A2";
            var i = null;
            if (null === (i = CPWbot_bg.validate_login_success(e, t, p))) return verbose_log("A2: validate_login_success / CS callout "), g_ = !0, L("VALIDATE_IN_DOCWAIT=true"), null;
            if (verbose_log("A2: validate_login_success " + i + " no CS callout "), !i) return CPWbot_bg.do_milestone(e, Oe, t, m), pn(e), retval;
            if (g_cpw_do_fakeui) {
                var _ = K_(e, t, n),
                    r = pi(t),
                    o;
                setTimeout(function() {
                    G(e, t, n)
                }, r * _ + 1021)
            } else G(e, t, n)
        }

        function $(e, t, n) {
            CPWbot_bg.mark_timestamp("navlogin_cpw"), ce++, CPWbot_bg.do_milestone(e, 70, t);
            var i = {
                    aid: n.aid,
                    recipe: n.recipe
                },
                _;
            CPWbot_bg.navigate_to_login(e, i) && te(e, t, n)
        }

        function ee(e, t, n) {
            Ie = !1;
            var i = _t(t);
            if (i) {
                ue = "B1R", verbose_log("B1R: login-form-reveal"), verbose_log("click on FN_REVEAL_LOGIN field!");
                var _ = DEFAULT_CLICK_DELAY,
                    r;
                return void 0 !== t.login_reveal_delay && (_ = t.login_reveal_delay), Ie = !0, verbose_log("now waiting for click_ack B1R"), ln(e, i, _, xe(t)), CPWbot_bg.mark_timestamp("wait_for_click_ack_B1R"), null
            }
            k_(e, t, n)
        }

        function te(e, t, n) {
            verbose_log("post_B"), he = !1;
            var i = ti(t);
            (i = i || 1e3) && !l_ ? (ue = "Bsleep", L("B sleeping " + i), qi = (xi = a) + i, l_ = he = !0) : (l_ = !0, n.desc = "post_B/Breveal", n.validate_result = null, (g_v2engine || ve) && (verbose_log("calling reveal JS after B state"), _n(e, t, At)), o_ = !0, CPWbot_bg.wait_for_doc_complete(e, null, function(e, t) {
                L("B-reveal milestone"), ue = "B1Rpre", v_ = t
            }, n))
        }

        function ne(e, t, n) {
            ue = "A1";
            var i = CPWbot_bg.check_is_logged_in(e, t, n);
            null === i ? (verbose_log("A1: check_is_logged_in / CS callout "), g_ = !0, L("VALIDATE_IN_DOCWAIT=true")) : (verbose_log("A1: check_is_logged_in returns " + i + " no CS callout "), (i = u = p_) ? ie(e, t, _) : x(e, t, _))
        }

        function ie(e, t, n) {
            var i = "";
            CPWbot_bg.do_milestone(e, 71, t), ue = "L", CPWbot_bg.mark_timestamp("logout_cpw");
            var _ = CPWbot_bg.navigate_to_logout(e, n);
            return null === _ ? verbose_log("L: navigate_to_logout / CS callout ") : _ ? x(e, t, n) : (CPWbot_bg.do_milestone(e, Ue, t, ""), pn(e)), !0
        }

        function _e(e, t, n) {
            L("post_L"), he = !1;
            var i = ni(t);
            if ((i = i || 1e3) && !d_) return ue = "Lsleep", L("L sleeping " + i), qi = (xi = a) + i, d_ = he = !0, null;
            if (d_ = !0, Ne && _n(e, t, jt), g_cpw_do_fakeui) {
                var _ = B_(e, t, n),
                    r = pi(t),
                    o;
                return setTimeout(function() {
                    x(e, t, n)
                }, r * _ + 1017), null
            }
            return x(e, t, n)
        }

        function re(e, t, n) {
            L("do_Z")
        }

        function oe(e, t, n) {
            CPWbot_bg.mark_timestamp("login_entry");
            var i = "";
            verbose_log("M4: FILL LOGIN"), ue = "M4";
            var _ = null;
            return (_ = dn(e, t, p)) ? ae(e, t, n) : (CPWbot_bg.do_milestone(e, ke, t, ""), pn(e), !1)
        }

        function ae(e, t, n) {
            verbose_log("M5: SUBMIT LOGIN ENTRY"), ue = "M5";
            var i = "",
                _ = 1100,
                r = si(t);
            r && (_ = r), _ && verbose_log("waiting " + _ + " ms after login waiting for site to bootstrap");
            var o = fn(e, t, p);
            return !1 === o ? (CPWbot_bg.do_milestone(e, Me, t, ""), pn(e), !1) : null === o ? (_ && (he = !0, qi = (xi = a) + _), null) : le(e, t, n)
        }

        function le(e, t, n) {
            verbose_log("M2: validate_login_entry_success "), ue = "M2";
            var i = null;
            return null === (i = CPWbot_bg.validate_login_entry_success(e, t, p)) ? (verbose_log("M2: validate_login_entry_success / CS callout "), g_ = !0, L("VALIDATE_IN_DOCWAIT=true"), null) : (verbose_log("M2: validate_login_entry_success " + i + " no CS callout "), i ? (n.check_login_entry_form = !1, void z(e, t, n)) : (CPWbot_bg.do_milestone(e, Me, t, m), pn(e), retval))
        }

        function se(e, t, n) {}
    }, this.initialize_engine = function(e, t) {
        Yi = (new Date).getTime();
        var n = t.recipe,
            i = t.aid;
        de = t, CPWbot_bg.mark_timestamp("initialize_engine");
        var _ = 0;
        m_in_logout_reveal = o_ = r_ = __ = i_ = n_ = !1, A_ = Xi = he = d_ = u_ = c_ = s_ = l_ = a_ = !1, CPWbot_bg.do_milestone(e, 65, n);
        var r = li(n);
        if (r) d || (d = !0, setTimeout(function() {
            return F_(e, 0, t), !1
        }, r));
        else if (Rt(n) && !f) {
            var o = 5e3,
                a = ci(n);
            a && (o = a), f = !0, verbose_log("initial JS inject before beginning - inject, and wait "), CPWbot_bg.conditional_js_exec(e, n, Rt), setTimeout(function() {
                return F_(e, 0, t), !1
            }, o)
        } else F_(e, 0, t)
    }, this.push_event_queue = function(e, t, n) {
        if ("validate_response" != e || void 0 === n.desc || "docaptcha" != n.desc) {
            var i = {};
            i.type = e, i.data = n, i.tabid = t, i.docnum = n.docnum, i.addtime = new Date, null === t_ && (t_ = []), void 0 !== i.docnum && verbose_log(sprintf("[%s][%d] pushed event : %s cmd=%s", t, i.docnum, e, n.cmd)), t_.push(i)
        } else Te && 0 < JSON.parse(n.result_obj).num_ok_matches && (CPWbot_bg.mark_timestamp("docaptcha_success"), _n(t, N, Kt), Te = !1, CPWbot_bg.show_cpwbot_overlay(t, null, null), T_(t, N), fe = null, Xi = !1, b_.found_interactive = !1, p_ = !0, F_(t, ue, de))
    }, this.clear_event_queue = function() {
        t_ = []
    }, this.select_execute = function(e, t, n, i) {
        var _
    }, this.select = function() {}, this.bagration = function() {
        ue = "Bagration"
    }, this.in_bagration = function() {
        return "Bagration" == ue
    }, this.get_selenium_tabid = function() {
        return h_
    }, this.navigate_to_logout = function(e, t) {
        if (!t) return !1;
        Ne = !(ue = "L");
        var n = t.recipe;
        if (!n) return !1;
        var i = t.aid,
            _ = !1,
            r = !1;
        r = _n(e, n, Mt), hi(mi, "Navigate to Logout");
        var o = Je(n);
        if (o) {
            L("call logout:loadurl with " + o);
            var a = null;
            return g_CS_tops && (a = g_CS_tops[e]), sendCS(e, {
                cmd: "loadurl",
                url: o
            }, a), n_ = !0, verbose_log("m_in_loadurl set"), N = n, de = t, Ne = !0, null
        }
        Ae = !1;
        var l = tt(n),
            s;
        if (l) {
            verbose_log("click on FN_NAVIGATE_TO_LOGOUT field!");
            var c = DEFAULT_CLICK_DELAY,
                u;
            void 0 !== n.logout_delay && (c = n.logout_delay), Ae = !0, verbose_log("now waiting for click_ack L"), ln(e, l, c, xe(n)), CPWbot_bg.mark_timestamp("wait_for_click_ack_L"), _ = null
        }
        return oi(n) && (Ne = !0, ni(n)) ? null : (r = r || _n(e, n, jt), !1 === _ && r && (_ = !0), _)
    };
    var R_ = 1,
        M_ = null;

    function j_() {
        var e = 0,
            t = 0,
            n = 0,
            i = 0,
            _ = 0,
            r = 0,
            o = 0,
            a = 0,
            l = 0,
            s = 0,
            c = 0,
            u = 0,
            d = 0,
            f = 0,
            g = 0,
            p = 0,
            b = 0,
            v = 0,
            m = 0,
            C = 0,
            N = 0,
            h = 0,
            S = 0,
            L = 0,
            E = 0,
            P = 0,
            w = 0,
            I = 0
    }

    function H_(e, t) {
        return CPWbot_bg.do_milestone(e, ee, t), pn(e), CPWbot_bg.cpwbot_cs_finish_complete(e), !0
    }

    function V_(e) {
        if (CPWbot_bg) {
            hi(Ni, e);
            var t = {
                severity: "fatal",
                msg: e
            };
            CPWbot_bg.phone_home(null, null, t)
        }
    }

    function J_(e) {
        hi(Ci, e);
        var t = {
            severity: "warning",
            msg: e
        };
        return CPWbot_bg.phone_home(null, null, t)
    }

    function B_(e, t, n) {
        if (!t || !n || null === e) return 0;
        if (!g_cpw_do_fakeui) return 0;
        ue = "FK0", verbose_log("entered do_logged_out_fake_ui");
        var i = 0;
        return 0
    }

    function K_(e, t, n) {
        if (!t || !n || null === e) return 0;
        if (!g_cpw_do_fakeui) return 0;
        ue = "FKLL0", verbose_log("entered do_logged_in_fake_ui");
        var i = 0;
        return 0
    }

    function Y_(e, t, n) {}

    function x_(e, t, n) {}

    function q_(e, t, n) {}

    function z_(e, t, n) {}

    function X_(e, t, n) {}

    function Z_(e, t, n) {}

    function Q_(e, t, n) {}

    function $_(e, t, n) {}

    function er(e, t, n) {
        return !(!t || !n || null === e)
    }

    function tr(e, t) {
        Fi(e, t) ? CPWbot_bg.do_milestone(e, y, t) : (CPWbot_bg.do_milestone(e, te, t), pn(e))
    }

    function nr(e) {
        return e ? e.symbolic : ""
    }

    function ir(e) {
        return e = e || 100, "undefined" == typeof Math ? 0 : Math.floor(Math.random(e) + 10)
    }

    function _r(e, t) {
        return e = e || 100, !1;
        var n
    }
    return this.get_timestamp = function(e) {
        return e ? (null === M_ && (M_ = new j_), M_[e]) : null
    }, this.get_timestamps = function() {
        return M_
    }, this.mark_timestamp = function(e) {
        null !== M_ && "dopwchange" != e || (M_ = new j_);
        var t = (new Date).getTime();
        return M_[e] = t, !0
    }, this.dump_timestamps = function() {
        var e;
        if (M_)
            for (e in M_) L(sprintf("[%s] timestamp %s : %d", nr(N), e, M_[e]));
        return U_(N, R_), !0
    }, this.get_last_timestamp = function(e) {
        var t, n = "dopwchange";
        if (M_) {
            for (t in M_)(!e || "fail" !== t && "finish_complete" != t && "success" != t) && M_[t] > M_[n] && (n = t);
            return n
        }
        return null
    }, this.broken_hearted = function(e) {
        if (CPWbot_bg) {
            if (e != CPWbot_bg.get_session()) return void hi(vi, "stale setTimeout - clearTimeout did not work");
            var t = CPWbot_bg.get_timestamp("initial_cycle"),
                n = (new Date).getTime();
            if (void 0 === t && (t = null), !(t || "preinit" != ue && ue || CPWbot_bg.get_okstate() || CPWbot_bg.get_failstate() || CPWbot_bg.in_bagration())) {
                var i = C,
                    _ = N;
                CPWbot_bg.do_milestone(i, $, _, "brokenhearted"), CPWbot_bg.panic("TIMEOUT-brokenhearted")
            }
        } else;
    }, this.new_session = function(e) {
        e = e || "";
        var t = (new Date).getTime();
        null === t && (t = 0);
        var n = "function" == typeof lp_sha256 ? lp_sha256 : SHA256;
        return w_ = n(e.toString() + t.toString())
    }, this.get_session = function() {
        return w_
    }, this.clear_session = function() {
        w_ = ""
    }, this.halt = function(e) {
        if (e && void 0 !== e.aid && CPWbot_bg.getpwchangeaid() !== e.aid) return !1;
        null !== CPWbot_bg.docaptcha_si_id && clearInterval(CPWbot_bg.docaptcha_si_id), CPWbot_bg.docaptcha_si_id = null, I_ = !0, L("Halt Requested")
    }, this.cpw_dialog_minimize_state = 0, this.getpwchangeaid = function() {
        return h
    }, this.phone_home = function(e, t, n) {
        if (!n) return !1;
        t = t || N;
        var i = (new Date).getTime(),
            _ = (i - CPWbot_bg.get_timestamp("dopwchange")) / 1e3;
        (_ < 0 || isNaN(_)) && (_ = 0);
        var r = (i - CPWbot_bg.get_timestamp("initial_cycle")) / 1e3;
        (r < 0 || isNaN(r)) && (r = 0);
        var o = !0,
            a = CPWbot_bg.get_last_timestamp(!0),
            l = n.severity ? n.severity : "",
            s = n.msg ? n.msg : "",
            c = sprintf("[%s][%s][R=%s][L=%s][M=%s][%6.2fsec elapsed][%2.1f TF][%6.2fsec TiE]", "cpw", l, t ? nr(t) : "bad-recipe", a, s, _, R_, r);
        return L(c), lpReportError(c, null), !0
    }, this.warning_phone_home = function(e) {
        return J_(e)
    }, this.site_html_url = "", "undefined" != typeof g_iscasper && g_iscasper && (this.get_validate_timeout = function(e) {
        return Yn.apply(this, arguments)
    }, this.get_symbolic = function(e) {
        return nr.apply(this, arguments)
    }, this.get_logout_url = function(e) {
        return Je.apply(this, arguments)
    }, this.get_generate_prefs_from_recipe = function(e) {
        return Zn.apply(this, arguments)
    }, this.set_last_overlay_message = function(e) {
        return le.apply(this, arguments)
    }, this.clear_last_overlay_message = function(e) {
        return se.apply(this, arguments)
    }, this.validate_xpath = function(e) {
        return Si.apply(this, arguments)
    }, this.validate_recipe = function(e) {
        return Li(e)
    }, this.get_cpw_login_password_field = function(e) {
        return qe.apply(this, arguments)
    }, this.get_cpw_login_username_field = function(e) {
        return ze.apply(this, arguments)
    }, this.get_login_submit_field = function(e) {
        return it.apply(this, arguments)
    }, this.get_login_reveal_field = function(e) {
        return _t.apply(this, arguments)
    }, this.replace_constants = function(e) {
        return replace_constants.apply(this, arguments)
    }, this.set_pwchangestate = function(e) {
        return ue = e, !0
    }, this.in_wait_for_click = function() {
        return Pi()
    }, this.submit_login_form = function(e, t, n) {
        return un(e, t, n)
    }, this.fill_login_form = function(e, t, n) {
        return cn(e, t, n)
    }, this.clear_wait_for_clicks = function() {
        return wi()
    }, this.get_event_queue = function() {
        return t_
    }, this.reset_private_test_vars = function() {
        g_ = Xi = D = !1
    }, this.should_click_on_fill = function(e) {
        return fi(e)
    }, this.should_fill_password_fields_via_keys = function(e) {
        return gi(e)
    }, this.get_fill_delay = function(e) {
        return pi(e)
    }, this.random_delay = function(e) {
        return ir(e)
    }, this.random_sleep = function(e, t) {
        return _r(e, t)
    }, this.get_cpw_session_timeout = function(e) {
        return di(e)
    }, this.fill_login_entry_form = function(e, t, n) {
        return dn(e, t, n)
    }, this.submit_login_entry_form = function(e, t, n) {
        return fn(e, t, n)
    }, this.set_pwchange_validate_desc = function(e) {
        return pe = e, !0
    }, this.check_recipe_symbols = function(e) {
        return Ei(e)
    }, this.set_in_validate_outer = function() {
        return g_ = Xi = !0
    }, this.set_in_validate_inner = function(e, t) {
        fe = {
            cmd: "cpwbot_validate_state",
            desc: t,
            id: e
        }, ge = e, n.set_pwchange_validate_desc(t), null === w && (w = [])
    }, this.get_in_sleep = function() {
        return he
    }, this.clear_sleeps = function() {
        he = d_ = u_ = c_ = s_ = l_ = a_ = !1
    }), !0
}

function get_recipe_for_url(e, _) {
    var t = lp_gettld_url(e),
        n = null,
        i, r;
    i((r = g_isfirefox ? (i = LP.lpMakeRequest, LP.lp_base) : (i = lpMakeRequest, base_url)) + "get_recipe.php", "url=" + encodeURIComponent(e), function(e) {
        if (4 == e.readyState) {
            if (200 == e.status && null != e.responseXML && null != e.responseXML.documentElement) {
                var t = e.responseXML.documentElement.getElementsByTagName("result");
                if (0 < t.length) {
                    var n = t[0].getAttribute("recipe");
                    if ("" != n) return void _(replace_constants(JSON.parse(n)));
                    CPWbatch && CPWbatch.cpw_get_batchjob_state() || CPWbot_bg.alert("This url is not supported yet");
                    var i = 128;
                    CPWbot_bg.do_milestone(null, i, null, "no recipe")
                }
            }
            _(null)
        }
    }, function() {
        _(null)
    })
}

function ping_ack_handler(e, t) {
    var n = t.docnum,
        i = t.url,
        _ = t.id,
        r = t.delta,
        o, a = (new Date).getTime() - t.timestamp;
    debug && L("received ping response from [tabid:" + e + "][docnum:" + n + "][id:" + _ + " sent: " + r + "ms, response: " + a + "ms docstate=" + t.docstate + " url=" + i);
    var l = getcsinfo(e, n);
    l || ((l = new CS_t).docnum = n, l.tabid = e), l.url = i, l.docstate = t.docstate, l.flags = t.flags, setcsinfo(e, n, l)
}

function ping(e, t) {
    var n = (new Date).getTime(),
        i = !1;
    null == e && (i = !0), null == t && (t = "all");
    var _, r = ("function" == typeof lp_sha256 ? lp_sha256 : SHA256)(g_username + "" + e + t + n);
    if (debug && L("sending ping id=" + r), i)
        for (e in g_CS) null != e && sendCS(e, {
            cmd: "ping_req",
            id: r,
            timestamp: n
        }, t);
    else sendCS(e, {
        cmd: "ping_req",
        id: r,
        timestamp: n
    }, t)
}

function cpwbot_getpwchangestate() {
    return g_cpwbot && CPWbot_bg ? "Bagration" == CPWbot_bg.get_pwchangestate() ? !0 === CPWbot_bg.get_failstate() ? !0 === CPWbot_bg.get_failpwsavedstate() ? "FAIL_PW_SAVED" : "FAIL" : !0 === CPWbot_bg.get_okstate() ? "OK" : null : !0 === CPWbot_bg.get_captchastate() ? "CAPTCHA" : !0 === CPWbot_bg.get_docaptchastate() ? "DOCAPTCHA" : !0 === CPWbot_bg.get_brokenheartstate() ? "TIMEOUT" : "preinit" == CPWbot_bg.get_pwchangestate() ? null : !0 === CPWbot_bg.get_failstate() ? !0 === CPWbot_bg.get_failpwsavedstate() ? "FAIL_PW_SAVED" : "FAIL" : !0 === CPWbot_bg.get_okstate() ? "OK" : CPWbot_bg.get_pwchangestate() : "FAIL"
}

function cpwbot_preinit() {
    CPWbot_bg && CPWbot_bg.preinit()
}

function cpwbot_get_user_debug_messages() {
    if (CPWbot_bg) return CPWbot_bg.get_user_debug_messages()
}

function cpwbot_get_dialog_msg() {
    if (CPWbot_bg) return CPWbot_bg.get_dialog_msg()
}

function cpwbot_halt() {
    if (CPWbot_bg) return CPWbot_bg.halt()
}

function cpwbot_minimize_dialog() {
    CPWbot_bg && (CPWbot_bg.cpw_dialog_minimize_state = 1)
}

function cpwbot_maximize_dialog() {
    CPWbot_bg && (CPWbot_bg.cpw_dialog_minimize_state = 0)
}

function cpwbot_get_minimize_dialog_state() {
    if (CPWbot_bg) return CPWbot_bg.cpw_dialog_minimize_state
}
//# sourceMappingURL=sourcemaps/cpwbot_bg.js.map