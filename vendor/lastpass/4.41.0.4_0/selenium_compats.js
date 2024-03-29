function LPdriver() {
    this.derive_doc = function() {
        var e = null;
        return (e = "undefined" != typeof g_isfirefox && g_isfirefox && LP ? LP.getBrowser().contentDocument : document) || null
    }, this.find_element_by_id = function(e, n) {
        return (e = e || this.derive_doc()) ? e.getElementById(n) : null
    }, this.find_element_by_name = function(e, n) {
        if (!e && !(e = this.derive_doc())) return null;
        var t = e.getElementsByName(n);
        return !t || t.length < 1 ? null : t[0]
    }, this.find_element_by_xpath = function(e, n) {
        return (e = e || this.derive_doc()) ? LP_getElementByXPath(e, n) : null
    }, this.find_element_by_link_text = function(e, n) {
        return e = e || this.derive_doc(), null
    }, this.find_element_by_partial_link_text = function(e, n) {
        return e = e || this.derive_doc(), null
    }, this.find_element_by_tag_name = function(e, n) {
        if (!e && !(e = this.derive_doc())) return null;
        if (void 0 === e.getElementsByTagName) return null;
        var t = e.getElementsByTagName(n);
        return t && 0 < t.length ? t[0] : null
    }, this.find_element_by_class_name = function(e, n) {
        if (!e && !(e = this.derive_doc())) return null;
        var t = e.getElementsByClasName(n);
        return !t || t.length < 1 ? null : t[0]
    }, this.find_element_by_css_selector = function(e, n) {
        if (!e && !(e = this.derive_doc())) return null;
        if (void 0 === e.querySelectorAll) return null;
        var t = e.querySelectorAll(n);
        return t && 0 < t.length ? t : null
    }, this.find_elements_by_name = function(e, n) {
        return (e = e || this.derive_doc()) ? e.getElementsByName(n) : null
    }, this.find_elements_by_xpath = function(e, n) {
        return (e = e || this.derive_doc()) ? LP_getElementByXPath(e, n) : null
    }, this.find_elements_by_link_text = function(e, n) {
        return e = e || this.derive_doc(), null
    }, this.find_elements_by_partial_link_text = function(e, n) {
        return e = e || this.derive_doc(), null
    }, this.find_elements_by_tag_name = function(e, n) {
        if (!e && !(e = this.derive_doc())) return null;
        if (void 0 === e.getElementsByTagName) return null;
        var t = e.getElementsByTagName(n);
        return t && 0 < t.length ? t : null
    }, this.find_elements_by_class_name = function(e, n) {
        return (e = e || this.derive_doc()) ? e.getElementsByClassName(n) : null
    }, this.find_elements_by_css_selector = function(e, n) {
        if (!e && !(e = this.derive_doc())) return null;
        if (void 0 === e.querySelectorAll) return null;
        var t = e.querySelectorAll(n);
        return t && 0 < t.length ? t : null
    }, this.find_input_elements_by_id = function(e, n) {
        if (!e && !(e = this.derive_doc())) return null;
        if (void 0 !== e.getElementsByTagName) {
            var t = e.getElementsByTagName("INPUT"),
                l = [],
                i;
            if (t)
                for (i = 0; i < t.length; i++) t[i] && t[i].id == n && l.push(t[i]);
            return l.length < 1 ? null : l
        }
    }
}
//# sourceMappingURL=sourcemaps/selenium_compats.js.map