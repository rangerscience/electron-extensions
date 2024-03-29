var lpicon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAKCAMAAACOlf6TAAAAPFBMVEVMaXFaWlpZWVlZWVlZWVlYWFhaWlpaWlpZWVlZWVlaWlpYWFhaWlpaWlpaWlpeXl5ZWVlbW1tZWVlaWlqPt7PZAAAAE3RSTlMA44bOvDmzxKzRmRslLsgTFEZFj0O9XgAAAD9JREFUeF6FztsKgDAMBNFRa9LUu/v//yr4JqF4HgcWln+VxIEr7GSeysK2+/qmQRoJqVGk2kt32PEZJt45kTzdRQJNGXFLsAAAAABJRU5ErkJggg==",
    lpgenerateicon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAAAnNCSVQICFXsRgQAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAABHklEQVQoz3WRMUtCYRSGj7RUEBQIjgmhg2CzsxGURENYe+Bgew1t/gEH/8DF2SG933O/IAoC/4BbRNIohOBSDS72NnhLs+JZDofnwMt5TTZPmApTPzffA0kCBggxICC5IFBiyARHjRqOCUNKc4Lf5JW+K3xduQJ93trpb4Ebxp2czGfp0vVZWSfHmLtYaK/zQUMmo+73/B51mYwGIikzGTuIsowMPQICemRklFG4KzNZdIxcUUYVxVRlrojcicxk11vInS8KXCCf/Qo54PF+2edpTvH51gpPvCgRC9ERoiKTtdPRoSxcoznNNXvUaWtJ5vYZccslI0Sw8GoZFSZxhvfo7FcXsnCbZ8SDO2D1j7JksmiDiKt/2oxJzHqc8glnzSOgfYOoRwAAAABJRU5ErkJggg==",
    lpformfillicon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAACpQTFRF////tra2rq6utbW1tLS0tLS0s7Ozs7Ozs7OztLS0s7Ozs7Ozs7Ozs7Oz5RWMIQAAAA10Uk5TAAcTMD1VYWh2mKyy++9xPvoAAABGSURBVAjXY2CAA9FyIAgEMnrvAsENIGOuMRDcBDEYuDcwQBhcC6CMnGNQxtybEAaTsbECmMEyc6YDKgMuBTMQbgXcUigAALv6JnRsfYWhAAAAAElFTkSuQmCC";

function lpcreate_icons() {
    for (var e = document.getElementsByTagName("form"), t = 0; t < e.length; t++) {
        var n = get_input_counts(e[t]);
        show_icons(e[t], n)
    }
}

function check_curr_password(e) {
    var t = /(?:existing|old|curr).*pass/i;
    return t.test(e.name) || t.test(e.id)
}

function get_input_counts(e) {
    for (var t = {
            text: 0,
            password: 0
        }, n = e.elements, A = 0; A < n.length; A++) {
        var o;
        if (!((n[A].hasAttribute("maxlength") ? n[A].getAttribute("maxlength") : 1e4) <= 4)) {
            var l = n[A].type;
            "none" != n[A].style.display && "hidden" != n[A].style.visibility && ("text" == l || "email" == l || "tel" == l ? t.text++ : "password" == l && t.password++)
        }
    }
    return t
}

function show_icons(e, t) {
    3 < t.text && 0 < t.password ? show_icons_formfill(e) : t.text <= 3 && 1 == t.password ? show_icons_login(e) : 1 < t.password && show_icons_generate(e)
}

function show_icons_formfill(e) {
    for (var t = 0, n = 0; n < e.elements.length; n++) t || "text" != e.elements[n].type ? "password" == e.elements[n].type && lpsetup_icon(e.elements[n], "generate") : (t = 1, lpsetup_icon(e.elements[n], "formfill"))
}

function show_icons_login(e) {
    for (var t = 0; t < e.elements.length; t++) {
        var n;
        (e.elements[t].hasAttribute("maxlength") ? e.elements[t].getAttribute("maxlength") : 1e4) <= 4 || ("text" == e.elements[t].type || "email" == e.elements[t].type || "tel" == e.elements[t].type ? lpsetup_icon(e.elements[t], "login") : "password" == e.elements[t].type && lpsetup_icon(e.elements[t], "login"))
    }
}

function show_icons_generate(e) {
    for (var t = 0; t < e.elements.length; t++) "password" == e.elements[t].type && lpsetup_icon(e.elements[t], check_curr_password(e.elements[t]) ? "login" : "generate")
}

function lpsetup_icon(e, s) {
    var t = lpicon;
    "generate" == s ? t = lpgenerateicon : "formfill" == s && (t = lpformfillicon), e.style.backgroundImage = "url(" + t + ")", e.style.backgroundPosition = "center right", e.style.backgroundRepeat = "no-repeat", e.addEventListener("touchstart", function(e) {
        var t = getAbsolutePos(document, e.target),
            n = e.touches[0].pageX + document.body.scrollLeft + document.documentElement.scrollLeft,
            A = e.touches[0].pageY + document.body.scrollTop + document.documentElement.scrollTop;
        if (e.handled = !1, t) {
            var o = 4,
                l = 18;
            "function" == typeof dp_to_px && (o = dp_to_px(o)), n > t.left + t.width - l - o && n < t.left + t.width + o && A > t.top - o && A < t.top + t.height + o && (e.handled = !0, e.preventDefault(), iconClicked(s))
        }
    })
}

function getAbsolutePos(e, t) {
    if (null == t) return null;
    if ("function" != typeof t.getBoundingClientRect) return null;
    var n = t.getBoundingClientRect(),
        A, o;
    A = void 0 === n.width ? n.right - n.left : n.width, o = void 0 === n.height ? n.bottom - n.top : n.height;
    var l = e.body.getBoundingClientRect();
    return {
        left: n.left + e.body.scrollLeft - l.left,
        top: n.top + e.body.scrollTop - l.top,
        width: A,
        height: o
    }
}
//# sourceMappingURL=sourcemaps/create_icon_mobile.js.map