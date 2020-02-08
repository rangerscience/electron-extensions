function LP_getElementByXPath(e, t) {
    return (e = e || LP_derive_doc()) ? LP_lookupElementByXPath(e, t) : null
}

function LP_getElementsByXPath(e, t) {
    return (e = e || LP_derive_doc()) ? LP_lookupElementsByXPath(e, t) : null
}

function LP_createXPathFromElement(e, t) {
    if (!e && !(e = LP_derive_doc())) return null;
    if (!t) return null;
    var n = null,
        a = LP_eltmap_get(e, t);
    if (null != a && a.uniqid) return a.uniqid;
    var i = 1,
        o, l;
    for (segs = []; t && 1 == t.nodeType; t = t.parentNode)
        if (t.hasAttribute("id")) {
            try {
                var r = e.querySelectorAll("#" + t.id)
            } catch (e) {
                r = []
            }
            var u;
            if (1 == r.length && r[0] == t) return segs.unshift('id("' + t.getAttribute("id") + '")'), n = segs.join("/"), LP_eltmap_set(e, t, {
                uniqid: n
            }), n;
            for (var s = t.parentNode ? t.parentNode.children : [], E = 0, f = 0; f < s.length && (void 0 !== s[f].hasAttribute && s[f].hasAttribute("id") && s[f].id == t.id && E++, !(1 < E)); f++);
            if (1 < E) {
                for (o = 1, l = t.previousSibling; l; l = l.previousSibling) l.localName == t.localName && o++;
                segs.unshift(t.localName.toLowerCase() + "[" + o + "]")
            } else segs.unshift(t.localName.toLowerCase() + '[@id="' + t.getAttribute("id") + '"]')
        } else if (t.hasAttribute("name")) segs.unshift(t.localName.toLowerCase() + '[@name="' + t.getAttribute("name") + '"]');
    else if (t.hasAttribute("action") && "FORM" == t.nodeName.toUpperCase()) segs.unshift(t.localName.toLowerCase() + '[@action="' + t.getAttribute("action") + '"]');
    else if (t.hasAttribute("class")) segs.unshift(t.localName.toLowerCase() + '[contains(@class,"' + t.getAttribute("class") + '")]');
    else {
        for (o = 1, l = t.previousSibling; l; l = l.previousSibling) l.localName == t.localName && o++;
        segs.unshift(t.localName.toLowerCase() + "[" + o + "]")
    }
    return n = segs.length ? "/" + segs.join("/") : null, LP_eltmap_set(e, t, {
        uniqid: n
    }), n
}

function LP_lookupElementByXPath(e, t) {
    return e && e.documentElement ? g_isfirefox && e && !e.defaultView ? null : "undefined" == (g_isfirefox ? typeof e.defaultView.XPathEvaluator : typeof XPathEvaluator) ? null : (g_isfirefox ? new e.defaultView.XPathEvaluator : new XPathEvaluator).evaluate(t, e.documentElement, null, g_isfirefox ? e.defaultView.XPathResult.FIRST_ORDERED_NODE_TYPE : XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue : null;
    var n, a
}

function LP_lookupElementsByXPath(e, t) {
    var n = [];
    if (!e || !e.documentElement) return n;
    if ("undefined" == (g_isfirefox ? typeof e.defaultView.XPathEvaluator : typeof XPathEvaluator)) return n;
    var a, i = (g_isfirefox ? new e.defaultView.XPathEvaluator : new XPathEvaluator).evaluate(t, e.documentElement, null, g_isfirefox ? e.defaultView.XPathResult.ORDERED_NODE_ITERATOR_TYPE : XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
    if (i)
        for (var o = i.iterateNext(); o;) o && n.push(o), o = i.iterateNext();
    return n
}
if (void 0 === Node) var Node = {
    ELEMENT_NODE: 1,
    ATTRIBUTE_NODE: 2,
    TEXT_NODE: 3,
    CDATA_SECTION_NODE: 4,
    ENTITY_REFERENCE_NODE: 5,
    ENTITY_NODE: 6,
    PROCESSING_INSTRUCTION_NODE: 7,
    COMMENT_NODE: 8,
    DOCUMENT_NODE: 9,
    DOCUMENT_TYPE_NODE: 10,
    DOCUMENT_FRAGMENT_NODE: 11,
    NOTATION_NODE: 12
};

function LP_getXPath(e) {
    var t = 1,
        n = 2,
        a = 3,
        i = 7,
        o = 8,
        l = 9,
        r, u = [],
        s = null,
        E = "",
        f = function(e) {
            var t = 1,
                n;
            if (2 == e.nodeType) return null;
            for (n = e.previousSibling; n; n = n.previousSibling) n.nodeName == e.nodeName && ++t;
            return t
        };
    if (_(e)) return "/";
    for (; e && !_(e); e = 2 == e.nodeType ? e.ownerElement : e.parentNode) {
        switch (r = u[u.length] = {}, e.nodeType) {
            case 1:
                r.name = "text()";
                break;
            case 2:
                r.name = "@" + e.nodeName;
                break;
            case 7:
                r.name = "processing-instruction()";
                break;
            case 8:
                r.name = "comment()";
                break;
            case 3:
                r.name = e.nodeName
        }
        r.position = f(e)
    }
    for (var d = u.length - 1; 0 <= d; d--) E += "/" + (r = u[d]).name, null != r.position && (E += "[" + r.position + "]");
    return E;

    function _(e) {
        return "undefined" != typeof Document ? e instanceof Document : e && 9 == e.nodeType
    }
}
//# sourceMappingURL=sourcemaps/xpath.js.map