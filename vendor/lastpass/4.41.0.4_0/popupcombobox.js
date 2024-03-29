var KEY_UP = 38,
    KEY_DOWN = 40,
    KEY_ENTER = 13,
    ELEMENT_NODE = 1,
    KEY_ESCAPE = 27,
    KEY_F4 = 115,
    KEY_LEFT = 37,
    KEY_RIGHT = 39,
    KEY_HOME = 36,
    KEY_END = 35,
    g_do_complete = !0,
    g_do_svg = !0;

function openCombo(e, t, o, i) {
    var n = (i = i || document).getElementById(t);
    if (!n.disabled) {
        var l = gComboEx = i.getElementById(o),
            d = "block" == l.style.display,
            s;
        gItemNum = (d ? setStyle(l, "display", "none", "") : showCombo(n, l, null, i), -1), gFocusItem = n, ("undefined" != typeof window ? window : i.defaultView).setTimeout(function() {
            doFocus()
        }, 0)
    }
}
var g_iField = null,
    g_cb = null,
    g_combobox_button = null;

function showCombo(e, t, o, i) {
    if (i = i || document, g_cb = t, null != (g_iField = e)) {
        var n = getComboButtonId(e.id);
        g_combobox_button = i.getElementById(n), void 0 !== e.addEventListener ? e.addEventListener("move", function(e) {
            realShowCombo(i)
        }, !1) : e.attachEvent("onmove", function(e) {
            realShowCombo(i)
        })
    }
    realShowCombo(i)
}

function getY(e) {
    for (var t = 0; null != e;) t += e.offsetTop, e = e.offsetParent;
    return t
}

function getX(e) {
    for (var t = 0; null != e;) t += e.offsetLeft, e = e.offsetParent;
    return t
}

function realShowCombo(e) {
    null == e && (e = document);
    var t = getY(g_iField),
        o = getX(g_iField),
        i = t + g_iField.offsetHeight + "px",
        n = o + "px";
    g_cb.style.minWidth = g_iField.offsetWidth - 14 + "px", setStyle(g_cb, "top", i, ""), setStyle(g_cb, "left", n, ""), setStyle(g_cb, "display", "block", ""), g_combobox_button && setStyle(g_combobox_button, "display", "", "");
    var l = LP_getAbsolutePos(e, g_iField);
    if (null != l && 0 < l.left) {
        var d = "undefined" != typeof window && void 0 !== window.setTimeout ? window : e.defaultView,
            s = d.innerWidth;
        null == s && "undefined" != typeof getWindowWidth && (s = getWindowWidth(d)), null != s && 0 < s && (g_cb.style.maxWidth = parseInt(s) - parseInt(l.left) - 16 + "px", parseInt(g_cb.style.maxWidth) < parseInt(g_cb.style.minWidth) && (g_cb.style.minWidth = g_cb.style.maxWidth))
    }
}
var gItemNum = 0,
    gComboEx = null;

function focusCombo(e, t, o) {
    if (e = e || window.event) {
        var i = e.keyCode;
        if ("undefined" != typeof TABKEY && (i == TABKEY || i == SHIFTKEY)) {
            var n = "undefined" != typeof document && document.location ? document.location.href : "";
            if (-1 != n.indexOf("popupfilltab.html") || -1 != n.indexOf("#framesrc=LPMAGIC")) return tabfocuser(e), !1
        }
        var l = "undefined" != typeof document ? document : e.view.document,
            i = e.keyCode,
            d = !0,
            s = gComboEx = l.getElementById(o);
        if (i == KEY_DOWN || i == KEY_F4) {
            var r;
            d = !1, "block" == s.getAttribute("style.display") || showCombo(t, s, null, l);
            for (var a = s.childNodes, u = a.length, g = 0; null != a[g] && g < u;) {
                if (a[g].nodeType == ELEMENT_NODE && "item" == a[g].className && "none" != a[g].style.display) {
                    gFocusItem = a[g];
                    break
                }
                g++
            }
            u <= (gItemNum = g) && (gItemNum = 0), setTimeout(function() {
                doFocus()
            }, 0), d = !1
        } else i == KEY_ENTER || i == KEY_ESCAPE && (null != t.val && 0 < t.val.length ? d = !0 : (d = !1, setStyle(gComboEx, "display", "none", ""), gItemNum = -1));
        return d
    }
}

function focusItem(e, t, o) {
    for (var i = o.val, n = null, l = getItems(t), d = l.length, s = !1, r = 0; r < d; r++)
        if (l[r].hasChildNodes() && l[r].firstChild.nodeValue == i) {
            s = !0, n = l[r], gItemNum = r;
            break
        } if (s || (n = addItem(t, i, l.length), gItemNum = l.length), null != n) {
        if (gFocusItem = n, "block" != gComboEx.getAttribute("style.display")) {
            var a = o.offsetTop + o.offsetHeight + "px",
                u = o.offsetLeft + "px";
            setStyle(t, "top", a, ""), setStyle(t, "left", u, "")
        } else setStyle(t, "display", "none", "");
        setStyle(t, "display", "block", ""), setTimeout(function() {
            doFocus()
        }, 0)
    }
}

function addItem(e, t, o, i) {
    var n = (i = i || document).createElement("div"),
        l = void 0 !== t.label ? t.label : t,
        d = void 0 !== t.label ? t.value : t;
    if (n.val = d, n.label = l, void 0 !== t.label && (n.label = t.label, void 0 !== t.image)) {
        var s = i.createElement("img");
        s.src = t.image, s.style.paddingRight = "15px", n.appendChild(s), n.img = s.src
    }
    var r = i.createTextNode(l),
        a = n;
    return n.appendChild(r), n.setAttribute("tabindex", "-1"), n.setAttribute("class", "item"), n.setAttribute("data-lpcount", o), void 0 !== n.addEventListener ? (n.addEventListener("click", function() {
        gItemNum = this.getAttribute("data-lpcount")
    }), n.addEventListener("mouseover", function() {
        gFocusItem = this, doFocus()
    })) : (n.attachEvent("onclick", function() {
        gItemNum = a.getAttribute("data-lpcount")
    }), n.attachEvent("onmouseover", function() {
        gFocusItem = a, doFocus()
    })), n.setAttribute("role", "listitem"), n.setAttribute("origText", ofa(l)), e.appendChild(n), n
}

function doComboNav(e, t, o, i) {
    if (e = e || window.event) {
        var n = e.keyCode,
            l = !0;
        if (null == gComboEx && (gComboEx = t), n == KEY_UP || n == KEY_DOWN) {
            l = !1;
            var d = 0,
                s, r = (s = getItems(gComboEx)).length;
            if (n == KEY_UP)
                for (d = gItemNum - 1; 0 <= d && "none" == s[d].style.display;) "none" == s[d].style.display && d--;
            else {
                for ((d = gItemNum + 1) == r && (d = -1); 0 <= d && d < r && "none" == s[d].style.display;) "none" == s[d].style.display && d++;
                d == r && (d = -1)
            }
            gFocusItem = -1 == (gItemNum = d) ? i.getElementById(o) : s[d], setTimeout(function() {
                doFocus()
            }, 0)
        } else if (n == KEY_ENTER || !e.keyCode && 0 <= e.button) {
            var s, a = (s = getItems(gComboEx))[gItemNum];
            if (null != a && "true" != a.getAttribute("aria-disabled")) {
                var u = a.label,
                    g = a.val,
                    m = i.getElementById(o);
                m.value = u, m.val = g, void 0 !== a.img && (m.style.background = "url(" + a.img + ") no-repeat 2px 5px", m.style.paddingLeft = "25px"), m.onchange && m.onchange(), setStyle(gComboEx, "display", "none", ""), gItemNum = 0, gFocusItem = m, setTimeout(function() {
                    doFocus()
                }, 0)
            }
        } else n == KEY_ESCAPE && (l = !1, setStyle(t, "display", "none", ""), gItemNum = 0, gFocusItem = i.getElementById(o), setTimeout(function() {
            doFocus()
        }, 0));
        return l
    }
}

function getItems(e) {
    if (null === e) return [];
    for (var t = new Array, t = new Array, o = e.childNodes, i = o.length, n = 0; n < i; n++) o[n].nodeType != ELEMENT_NODE || "item" != o[n].getAttribute("class") && "item focus" != o[n].getAttribute("class") || (t[t.length] = o[n]);
    return t
}

function setStyle(e, t, o, i) {
    var n = !1;
    try {
        e.style && e.style.setProperty && (e.style.setProperty(t, o, i), n = !0)
    } catch (e) {
        alert("exception caught setting style: " + e.message)
    }
    if (!n) try {
        e.style[t] = o, n = !0
    } catch (e) {
        alert("exception caught setting direct style: " + e.message)
    }
    return n
}
var gFocusItem = null,
    gLastFocusItem = null;

function doFocus() {
    null != gFocusItem && (gFocusItem.focus(), gLastFocusItem && "item focus" == gLastFocusItem.className && (gLastFocusItem.className = "item"), gFocusItem && "item" == gFocusItem.className && (gFocusItem.className = "item focus"), gLastFocusItem = gFocusItem, gFocusItem = null)
}

function create_combo(t, e, o, i, n, l, d, s, r) {
    n = n || "";
    var a = (i = i || document).getElementById(t),
        u = getComboId(t);
    if (a && !i.getElementById(u) && null !== u) {
        var g, m;
        a.onkeydown = function(e) {
            return focusCombo(e = e || window.event, a, u)
        }, a.onkeyup = function(e) {
            return e = e || window.event, keyupCombo(i, e, a, u), !1
        }, a.setAttribute("role", "textfield"), a.setAttribute("aria-haspopup", "true"), a.setAttribute("autocomplete", "off"), a.style.marginRight = "0px";
        var c, f = c = i.createElement(n + "div");
        c.setAttribute("role", "list"), c.style.display = "none", "undefined" != typeof g_isie && g_isie && (c.style.display = "none"), c.setAttribute("id", u), c.setAttribute("class", "dropStyle"), "undefined" != typeof g_isie && g_isie && (c.className = "dropStyle"), c.onkeydown = function(e) {
            return doComboNav(e, this, this.id.substring(0, this.id.length - 6), i)
        }, void 0 !== c.addEventListener ? c.addEventListener("click", function(e) {
            doComboNav(e, this, this.id.substring(0, this.id.length - 6), i)
        }) : c.attachEvent("onclick", function(e) {
            if (!(e = e || window.event)) return !1;
            doComboNav(e, f, f.id.substring(0, f.id.length - 6), i)
        }), c.style.overflowY = "auto", c.style.overflowX = "auto", "undefined" != typeof g_isie && g_isie && (c.style.background = "#fff"), c.style.paddingLeft = "6px", c.style.paddingRight = "6px", c.style.position = "absolute", c.setAttribute("autofilled", "false"), r ? insertAfter(i.getElementById(r), c) : void 0 !== i.body && i.body ? i.body.appendChild(c) : a.parentNode.parentNode.appendChild(c), void 0 !== a.ownerDocument.defaultView && void 0 !== a.ownerDocument.defaultView.addEventListener ? (a.ownerDocument.defaultView.addEventListener("click", function(e) {
            e.target.id != t && close_combo(t, i)
        }, !1), a.addEventListener("keydown", function(e) {
            9 == e.keyCode && close_combo(t, i)
        }, !1)) : (document.attachEvent("onclick", function(e) {
            window.event.srcElement.id != t && close_combo(t, i)
        }), document.attachEvent("onkeydown", function(e) {
            9 == window.event.keyCode && close_combo(t, i)
        }));
        for (var p = 0; p < e.length; p++) addItem(c, e[p], p, i);
        var b, h = 30,
            y = 20,
            v = ("undefined" == typeof gLocalBaseUrl ? "" : gLocalBaseUrl) + "images/pwdrop.png";
        if (g_do_svg && (v = ("undefined" == typeof gLocalBaseUrl ? "" : gLocalBaseUrl) + "images/teardrop.png"), ("undefined" != typeof g_isie && g_isie || "undefined" != typeof g_isfirefox && g_isfirefox) && (v = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAfElEQVQ4T2NkoDJgpLJ5DKMGUh6io2GIGobe3t4LGBkZ49FD9v///wu3bt2agC3ECYYhuqH4DANZQNDAgIAAgT9//hwAqtUH4ossLCwOGzZs+IArPRA0EKQRZOjv378nsLKyFuAzjCgXkpoyiXIhKYaOGkhKaGFXS/UwBABG2SEVsoLJ9AAAAABJRU5ErkJggg=="), o && "undefined" != typeof LP_getAbsolutePos) {
            var _ = 0,
                E = 0,
                c = i.createElement(n + "div");
            void 0 !== i.body && i.body ? l ? insertAfter(i.getElementById(l), c) : i.body.appendChild(c) : a.parentNode.appendChild(c);
            var I = getComboButtonId(t),
                m = new Array,
                C = 3,
                w, A, x;
            if (w = void 0 !== a.ownerDocument.defaultView && void 0 !== a.ownerDocument.defaultView.getComputedStyle ? a.ownerDocument.defaultView.getComputedStyle(a) : a.currentStyle, !(A = LP_getAbsolutePos(i, a))) return;
            if (null != A && 0 < A.left && 0 < A.top) {
                var N, N = A.left + parseInt(A.width) + 4 - 30;
                E = _ = 0, "undefined" != typeof g_isie && g_isie && (E = -4, _ = 2), m.left = N + E + "px", m.position = "absolute", m.top = parseInt(A.top) + 4 + _ + "px", "undefined" != typeof g_isfirefox && g_isfirefox || (m.padding = C + "px")
            }
            1 <= (x = Math.floor((30 - A.height) / 2)) && A.height < 30 && (E = _ = 0, "undefined" != typeof g_isie && g_isie, (m = new Array).position = "absolute", m.height = A.height - 4 + "px", m.width = A.height - 4 + "px", m.top = parseInt(A.top) + 4 + x + 4 + "px", N = A.left + parseInt(A.width) + 4 - 30 + x + 4, m.left = N + x + "px", (C -= 2 * x) < 0 && (C = 0), "undefined" != typeof g_isfirefox && g_isfirefox || (m.padding = C + "px"));
            var B = Math.round((A.height - 30) / 2);
            if (30 < A.height) {
                if (E = _ = 0, "undefined" != typeof g_isie && g_isie) {
                    var F = parseInt(w.borderTopWidth),
                        L;
                    B -= (F + parseInt(w.borderBottomWidth)) / 2, E = -5, _ = F
                }(m = new Array).left = N + E + "px", m.position = "absolute", m.top = A.top + B + _ + "px", C += 2 * B, "undefined" != typeof g_isfirefox && g_isfirefox || (m.padding = C + "px")
            }
            "undefined" != typeof g_isie && g_isie && (m.border = "0px"), a.style.textOverflow = "ellipsis", a.style.whiteSpace = "nowrap", l && (c.style.marginLeft = d ? d + "px" : "-15px", c.style.display = "inline", c.style.verticalAlign = "top", c.style.marginTop = "6px", s ? (m = new Array).marginTop = s + "px" : m.marginTop = "-18px");
            var S = c.ownerDocument.createElement(g_isfirefox ? "image" : "img"),
                k;
            if (S.setAttribute("id", I), S.setAttribute("src", v), S.setAttribute("valign", "middle"), c.appendChild(S), !(k = i.getElementById(I))) return;
            for (var p in m) m.hasOwnProperty(p) && (k.style[p] = m[p]);
            k.onclick = function(e) {
                openCombo(e, this.id.substring(0, this.id.length - 7), getComboId(this.id.substring(0, this.id.length - 7)), i), null != e ? e.cancelBubble = !0 : window.event.cancelBubble = !0
            }
        } else if (!o && "undefined" != typeof LP_getAbsolutePos) {
            var k, A, x;
            if ((k = i.createElement(n + "img")).id = getComboButtonId(t), null !== k.id && (k.onclick = function(e) {
                    openCombo(e, this.id.substring(0, this.id.length - 7), getComboId(this.id.substring(0, this.id.length - 7)), i), null != e ? e.cancelBubble = !0 : window.event.cancelBubble = !0
                }), k.setAttribute("src", v), k.setAttribute("valign", "middle"), void 0 !== i.body && i.body ? i.body.appendChild(k) : i.getElementById("main").appendChild(k), null != (A = LP_getAbsolutePos(i, a)) && 0 < A.left && 0 < A.top) {
                var N = A.left + A.width + 2;
                k.style.left = N + "px", k.style.position = "absolute", k.style.top = A.top + "px"
            }
            1 <= (x = Math.floor((30 - A.height) / 2)) && A.height < 30 && (k.style.height = A.height + "px", k.style.width = A.height + "px", k.style.top = A.top + x + "px");
            var B = Math.round((A.height - 30) / 2);
            30 < A.height && (k.style.top = A.top + B + "px")
        }
        k.className += "teardrop"
    }
}

function delete_combo_item(e, t) {
    var o = getComboId(e),
        i = document.getElementById(o);
    if (i)
        for (var n = getItems(i), l = 0; l < n.length; l++)
            if (n[l].innerHTML == t) {
                for (n.splice(l, 1); i.hasChildNodes();) i.removeChild(i.firstChild);
                for (var d = 0; d < n.length; d++) addItem(i, n[d].innerHTML, d);
                break
            }
}

function close_combo(e, t) {
    t = t || document;
    var o = getComboId(e),
        i = t.getElementById(o),
        n;
    i && ("block" == i.style.display && (setStyle(i, "display", "none", ""), gItemNum = -1), g_do_complete && unhighlight_combo_all_items(t, e))
}

function repopulate_combo(e, t, o) {
    o = o || document;
    var i = getComboId(e),
        n = o.getElementById(i);
    if (n) {
        for (; n.hasChildNodes();) n.removeChild(n.firstChild);
        for (var l = 0; l < t.length; l++) addItem(n, t[l], l, o)
    }
    var d = getComboButtonId(e),
        s = o.getElementById(d);
    s && setStyle(s, "display", "", "")
}

function destroy_combo(e, t) {
    if (t = t || document, !(null == e || e.length <= 0)) try {
        var o = getComboId(e),
            i = t.getElementById(o);
        if (i) {
            for (; i.hasChildNodes();) i.removeChild(i.firstChild);
            i.parentNode.removeChild(i)
        }
        var n = getComboButtonId(e),
            l = t.getElementById(n);
        l && l.parentNode.removeChild(l)
    } catch (e) {
        console_log("destroy_combo error: " + e.message)
    }
}

function highlight_combo_item(e, t, o, i) {
    return 0;
    var n, l, d
}

function unhighlight_combo_item(e, t, o) {
    return 0;
    var i
}

function unhighlight_combo_all_items(e, t) {
    return 0;
    var o, i, n, l
}

function getComboId(e) {
    return null === e || "" === e ? null : e + "_combo"
}

function getComboButtonId(e) {
    return null === e || "" === e ? null : e + "_button"
}

function hide_combo_item(e) {
    null !== e && setStyle(e, "display", "none", "")
}

function show_combo_item(e) {
    null !== e && setStyle(e, "display", "", "")
}

function show_all_combo_items(e, t) {
    if (e = e || document, !(null == t || t.length <= 0)) {
        var o = getComboId(t),
            i = e.getElementById(o);
        if (i)
            for (var n = getItems(i), l = 0; l < n.length; l++) show_combo_item(n[l])
    }
}

function combo_filter(e, t, o) {
    if (e = e || document, !(null === t || t.length <= 0)) {
        var i = !0,
            n = 0;
        null === o && (o = "");
        var l = of (o, e),
            d = !0,
            s = null,
            r = getComboId(t),
            a = e.getElementById(r);
        if (a) {
            for (var u = getItems(a), g = 0; g < u.length; g++) {
                var m = "undefined" != typeof g_isfirefox && g_isfirefox ? u[g].textContent : get_innertext(u[g]),
                    c = o,
                    f = m;
                f = void 0 === m.trim ? m.replace(/^\s*|\s+$/g, "") : m.trim(), "" === (c = void 0 === o.trim ? o.replace(/^\s*|\s+$/g, "") : o.trim()) || 0 <= f.toLowerCase().indexOf(l.toLowerCase()) ? (show_combo_item(u[g]), highlight_combo_item(e, t, u[g], o), i = !1, n++, s = u[g]) : (hide_combo_item(u[g]), unhighlight_combo_item(e, t, u[g]))
            }
            if (i) close_combo(t, e);
            else {
                var p = a.getAttribute("autofilled");
                if (1 === n && "false" == p) {
                    a.setAttribute("autofilled", "true");
                    var b = e.getElementById(t);
                    if (b) {
                        var h = b.value.length,
                            y = s.val.length;
                        if (b.value = s.val, "selectionStart" in b) b.selectionStart = h, b.selectionEnd = y;
                        else {
                            var v = b.createTextRange();
                            v.moveStart("character", h), v.collapse(), v.moveEnd("character", y), v.select()
                        }
                    }
                    close_combo(t, e)
                }
            }
        }
    }
}

function keyupCombo(e, t, o, i) {
    if (e = e || document, t = t || window.event) {
        var n = e.getElementById(i);
        if (null !== n && null !== o) {
            var l = t.keyCode;
            if (l != KEY_DOWN && l != KEY_F4 && l != KEY_UP && l != KEY_ENTER && l != KEY_ESCAPE) {
                if ("undefined" != typeof TABKEY && (l == TABKEY || l == SHIFTKEY)) {
                    var d = "undefined" != typeof document && document.location ? document.location.href : "";
                    if (-1 != d.indexOf("popupfilltab.html") || -1 != d.indexOf("#framesrc=LPMAGIC")) return tabfocuser(t), !1
                }
                isComboShowing(n) || (showCombo(o, n, null, e), gItemNum = -1, setTimeout(function() {
                    doFocus()
                }, 0)), combo_filter(e, o.id, o.value)
            }
        }
    }
}

function keydownCombo(e, t, o, i) {}

function isComboShowing(e) {
    return null !== e && "block" == e.style.display
}

function insertAfter(e, t) {
    e.parentNode.insertBefore(t, e.nextSibling)
}
//# sourceMappingURL=sourcemaps/popupcombobox.js.map