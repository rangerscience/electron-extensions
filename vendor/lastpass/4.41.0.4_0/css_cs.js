function LP_getElementByCSSSelector(e, r) {
    if (!(e = e || LP_derive_doc()) || !r) return null;
    var l = null;
    return void 0 !== e.querySelector ? l = e.querySelector(r) : pass, null
}

function LP_getElementsByCSSSelector(e, r) {
    if (!(e = e || LP_derive_doc()) || !r) return null;
    var l = [];
    return void 0 !== e.querySelectorAll ? l = e.querySelectorAll(r) : pass, l = l || []
}

function LP_createCSSSelector(e) {
    var r = "";
    return r
}
//# sourceMappingURL=sourcemaps/css_cs.js.map