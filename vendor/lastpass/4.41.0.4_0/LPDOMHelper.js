var LPDOMHelper = new LPDOMHelper_lib;

function LPDOMHelper_lib() {
    var r = this;
    this.InputIsText = function(t) {
        return !(!t || "string" != typeof t) && !!lp_in_array(t.toLowerCase(), ["text", "email", "tel"])
    }, this.InputIsPassword = function(t) {
        return !(!t || "string" != typeof t) && "password" == t.toLowerCase()
    }, this.InputIsCheckable = function(t) {
        return !(!t || "string" != typeof t) && !!lp_in_array(t.toLowerCase(), ["radio", "checkbox"])
    }, this.elt_getId = function(t) {
        if (!t) return "";
        if ("string" == typeof t.id) return t.id;
        var e = t.getAttribute("id");
        return null === e && (e = ""), e
    }, this.elt_getName = function(t) {
        if (!t) return "";
        if ("string" == typeof t.name) return t.name;
        var e = t.getAttribute("name");
        return null === e && (e = ""), e
    }, this.elt_getType = function(t) {
        if (!t) return "";
        if ("string" == typeof t.type) return t.type;
        var e = t.getAttribute("type");
        return null === e && (e = ""), e
    }, this.elt_getAttribute = function(t, e) {
        return t && e ? void 0 === t.getAttribute ? "" : t.getAttribute(e) : ""
    }, this.is_encrypted_field = function(t) {
        return "function" == typeof is_encrypted_field ? is_encrypted_field(t) : "text" == t || "password" == t || "textarea" == t || "email" == t || "tel" == t || "url" == t
    }, this.getDocumentMode = function(t) {
        return LP_getDocumentMode(t)
    }, this.getQuirksMode = function(t) {
        return LP_getQuirksMode(t)
    }, this.GetHrefFromDocument = function(t) {
        var e = "";
        if (!t) return "";
        if ("function" == typeof get_doc_location_ref) return get_doc_location_href(t);
        try {
            var n = r.GetLocationFromDocument(t);
            n && (e = n.href), void 0 === e && (e = "")
        } catch (t) {
            is_user_debug_enabled() && console_warn(t.message), e = ""
        }
        return e
    }, this.GetHrefFromWindow = function(t) {
        var e = "";
        if (!t) return "";
        try {
            var n = r.GetLocationFromWindow(t);
            n && (e = n.href), void 0 === e && (e = "")
        } catch (t) {
            is_user_debug_enabled() && console_warn(t.message), e = ""
        }
        return e
    }, this.GetLocationFromDocument = function(t) {
        var e = null;
        if (!t) return null;
        try {
            var n = t.location;
            n && (e = n), isEmptyObject(n) && (e = null), void 0 === e && (e = null)
        } catch (t) {
            is_user_debug_enabled() && console_warn(t.message), e = null
        }
        return e
    }, this.GetLocationFromWindow = function(t) {
        var e = null;
        if (!t) return null;
        try {
            var n = t.location;
            n && (e = n), isEmptyObject(n) && (e = null), void 0 === e && (e = null)
        } catch (t) {
            is_user_debug_enabled() && console_warn(t.message), e = null
        }
        return e
    }, this.GetOriginFromDocument = function(t) {
        if (!t) return "";
        var e = "";
        try {
            var n = r.GetLocationFromDocument(t);
            n && (e = void 0 !== t.origin ? n.origin : sprintf("%s//%s%s", n.protocol, n.hostname, n.port ? ":" + n.port : ""))
        } catch (t) {
            is_user_debug_enabled() && console_warn(t.message), e = ""
        }
        return e
    }, this.GetOriginFromWindow = function(t) {
        if (!t) return "";
        var e = "";
        try {
            var n = r.GetLocationFromWindow(t);
            n && (e = void 0 !== t.origin ? t.origin : sprintf("%s//%s%s", n.protocol, n.hostname, n.port ? ":" + n.port : ""))
        } catch (t) {
            is_user_debug_enabled() && console_warn(t.message), e = ""
        }
        return e
    }, this.GetOriginFromLocation = function(t) {
        if (!t) return "";
        var e = "";
        try {
            e = void 0 === t.origin ? sprintf("%s//%s%s", t.protocol, t.hostname, t.port ? ":" + t.port : "") : t.origin
        } catch (t) {
            is_user_debug_enabled() && console_warn(t.message), e = ""
        }
        return e
    }, this.GetTagName = function(t) {
        return t ? void 0 === t.tagName ? null : t.tagName : ""
    }, this.GetOwnerDocument = function(t) {
        return t ? void 0 === t.ownerDocument ? null : t.ownerDocument : null
    }, this.GetWindowFromDocument = function(t) {
        return t ? void 0 === t.defaultView ? null : t.defaultView : null
    }, this.FieldIsReadOnly = function(t) {
        return LP_fieldIsReadOnly(t)
    }, this.FieldIsDisabled = function(t) {
        return LP_fieldIsDisabled(t)
    }, this.GetDocumentReadyState = function(t) {
        return t ? void 0 === t.readyState ? "" : t.readyState : ""
    }, this.DoFocus = function(t) {
        if (!t) return !1;
        var e = !1;
        try {
            t.focus(), e = !0
        } catch (t) {
            e = !1
        }
        return e
    }, this.DoBlur = function(t) {
        if (!t) return !1;
        var e = !1;
        try {
            t.blur(), e = !0
        } catch (t) {
            e = !1
        }
        return e
    }, this.set_aria_hidden = function(t, e) {
        return !!t && t.setAttribute("aria_hidden", e)
    }, this.dump_page = function() {
        pass
    }, this.GetName = function() {
        return LP_getname.apply(this, arguments)
    }, this.GetValue = function(t) {
        return t ? void 0 !== t.value ? t.value : t.getAttribute("value") : null
    }, this.GetElementById = function(t) {
        var e = LP_derive_doc();
        return e && t ? e.getElementById(t) : null
    }, this.IsVisible = function(t) {
        return lpIsVisible.apply(this, arguments)
    }, this.win_getName = function(t) {
        return t ? t.name : null
    }, this.GetDocumentTld = function(t) {
        return (t = t || LP_derive_doc()) ? lp_gettld_url(punycode.URLToASCII(get_doc_location_href())) : null
    }, this.GetOwnerForm = function(t) {
        return t ? LP_getFormEquivalent(r.GetOwnerDocument(t), t) : null
    }, this.FindElementById = function(t) {
        var e = LP_derive_doc();
        return "undefined" != typeof LPDriver && void 0 !== LPDriver.find_element_by_id ? LPDriver.find_element_by_id(e, t) : r.GetElementById(t)
    }, this.FindElementByName = function(t) {
        var e = LP_derive_doc();
        if ("undefined" != typeof LPDriver && void 0 !== LPDriver.find_element_by_name) return LPDriver.find_element_by_name(e, t);
        var n = e.getElementsByName(t);
        return !n || n.length < 1 ? null : n[0]
    }, this.SetFieldDisabled = function(t) {
        return !!t && (t.disabled = !0)
    }, this.DetachElement = function(t) {
        if (!t) return null;
        var e = t.parentNode;
        return e && e.removeChild(t), t
    }, this.AppendChild = function(t, e) {
        return t && e ? (t.appendChild(e), e) : null
    }, this.GetParentElement = function(t) {
        return t ? t.parentElement : null
    }, this.ElementIsDetached = function(t) {
        var e = r.GetOwnerDocument(t);
        return element_is_detached(e, t)
    }, this.SetAttribute = function(t, e, n) {
        return !(!t || !e) && (void 0 !== t.setAttribute && (t.setAttribute(e, n), !0))
    }, this.RemoveAttribute = function(t, e) {
        return !!t && (void 0 !== t.removeAttribute && (t.removeAttribute(e), !0))
    }, this.CASE_INSENSITIVE = function() {
        return 0
    }, this.CASE_SENSITIVE = function() {
        return 1
    }, this.GetAttribute = function(t, e) {
        return r.elt_getAttribute(t, e)
    }
}
//# sourceMappingURL=sourcemaps/LPDOMHelper.js.map