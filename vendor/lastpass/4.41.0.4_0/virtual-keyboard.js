function showkeyboard() {
    var e;
    "undefined" != typeof TrackingPixel && TrackingPixel.sendGAEvents(document.querySelector("#LP_Login"), "onscreenkeyboard"), $("#virtualkeyboard").is(":visible") ? ($("#virtualkeyboard").slideUp(100), $("#loginDialog") && $("#loginDialog").removeClass("keyboard")) : ($("#virtualkeyboard").slideDown(100), $("#loginDialog") && $("#loginDialog").addClass("keyboard")), $("#email") ? "" == $("#email").val() ? $("#email").select() : $("#password").select() : "" == $("#loginDialogEmail").val() ? $("#loginDialogEmail").select() : $("#loginDialogPassword").select()
}
$(function() {
    var e = window.SimpleKeyboard.default,
        n, i = !1,
        a = new e({
            onChange: function(e) {
                return onChange(e)
            },
            onKeyPress: function(e) {
                return l(e)
            },
            physicalKeyboardHighlight: !0
        });
    onInputFocus = function(e) {
        n = "#".concat(e.target.id), a.setOptions({
            inputName: e.target.id
        })
    };
    var o = document.querySelectorAll("input"),
        t;
    for (t = 0; t < o.length; t++) o[t].addEventListener("focus", onInputFocus);

    function l(e) {
        var o = n || "input";
        a.setInput(document.querySelector(o).value), i && (i = !1, r()), "{shift}" === e && (i = !i), "{shift}" !== e && "{lock}" !== e || r()
    }

    function r() {
        var e, o = "default" === a.options.layoutName ? "shift" : "default";
        a.setOptions({
            layoutName: o
        })
    }
    onChange = function(e) {
        var o = n || "input";
        document.querySelector(o).value = e
    }
});
//# sourceMappingURL=sourcemaps/virtual-keyboard.js.map