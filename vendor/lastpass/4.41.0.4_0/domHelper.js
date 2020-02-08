function createElement(e) {
    if (Array.isArray(e)) return e.map(function(e) {
        return createElement(e)
    });
    var t = document.createElement(e.type);
    if (e.attrs)
        for (var n in e.attrs)
            if (e.attrs.hasOwnProperty(n)) {
                var r = e.attrs[n];
                null != r && t.setAttribute(n, e.attrs[n])
            } return e.text ? t.textContent = e.text : e.children && e.children.forEach(function(e) {
        t.appendChild("string" == typeof e ? document.createTextNode(e) : createElement(e))
    }), t
}

function emptyElement(e) {
    if (e)
        for (var t = e.childNodes.length; t--;) e.removeChild(e.lastChild)
}

function replaceElement(t, e) {
    emptyElement(t);
    var n = createElement(e);
    Array.isArray(n) ? n.forEach(function(e) {
        t.appendChild(e)
    }) : t.appendChild(n)
}

function getAttributes(t, e) {
    return e = e || {}, t.style && g_ischrome && experimentaloverlay && (t["data-lpstyle"] = t.style, delete t.style), e.customEvent && (t.lpevent = e.customEvent, t.onclick = "this.dispatchEvent(lpcustomEvent);"), e.dynamic && e.dynamic.forEach(function(e) {
        t[e.name] = e.value
    }), t
}
//# sourceMappingURL=sourcemaps/domHelper.js.map