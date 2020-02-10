var stIsIE = !1;
if (sorttable = {
        search_array: {},
        init: function() {
            _timer && clearInterval(_timer), document.createElement && document.getElementsByTagName && (sorttable.DATE_RE = /^(\d\d?)[\/\.-](\d\d?)[\/\.-]((\d\d)?\d\d)$/, sorttable.search_array = {}, forEach(document.getElementsByTagName("table"), function(e) {
                if (-1 != e.className.search(/\bsortable\b/)) {
                    var t;
                    sorttable.makeSortable(e);
                    var r = sorttable.tokenize_popup_rows(e);
                    for (t in r) sorttable.search_array[t] = r[t]
                }
            }))
        },
        makeSortable: function(e) {
            if (0 == e.getElementsByTagName("thead").length && (the = document.createElement("thead"), the.appendChild(e.rows[0]), e.insertBefore(the, e.firstChild)), null == e.tHead && (e.tHead = e.getElementsByTagName("thead")[0]), 1 == e.tHead.rows.length) {
                sortbottomrows = [];
                for (var t = 0; t < e.rows.length; t++) - 1 != e.rows[t].className.search(/\bsortbottom\b/) && (sortbottomrows[sortbottomrows.length] = e.rows[t]);
                if (sortbottomrows) {
                    null == e.tFoot && (tfo = document.createElement("tfoot"), e.appendChild(tfo));
                    for (var t = 0; t < sortbottomrows.length; t++) tfo.appendChild(sortbottomrows[t]);
                    delete sortbottomrows
                }
                for (var r = e.tHead.rows[0].cells, t = 0; t < r.length; t++)
                    if (!r[t].className.match(/\bsorttable_nosort\b/)) {
                        var o = r[t].className.match(/\bsorttable_([a-z0-9]+)\b/),
                            a = "";
                        o && (a = o[1]), o && "function" == typeof sorttable["sort_" + a] ? r[t].sorttable_sortfunction = sorttable["sort_" + a] : r[t].sorttable_sortfunction = sorttable.guessType(e, t), r[t].sorttable_columnindex = t, r[t].sorttable_tbody = e.tBodies[0], r[t].addEventListener("click", function(e) {
                            var t, r, r, t;
                            if (-1 != this.className.search(/\bsorttable_sorted\b/)) return sorttable.reverse(this.sorttable_tbody), this.className = this.className.replace("sorttable_sorted", "sorttable_sorted_reverse"), (t = document.getElementById("sorttable_sortfwdind")) && t.parentNode.removeChild(t), (r = document.createElement("span")).id = "sorttable_sortrevind", set_innertext(r, " ▴"), void this.appendChild(r);
                            if (-1 != this.className.search(/\bsorttable_sorted_reverse\b/)) return sorttable.reverse(this.sorttable_tbody), this.className = this.className.replace("sorttable_sorted_reverse", "sorttable_sorted"), (r = document.getElementById("sorttable_sortrevind")) && r.parentNode.removeChild(r), (t = document.createElement("span")).id = "sorttable_sortfwdind", set_innertext(t, " ▾"), void this.appendChild(t);
                            var o = this.parentNode,
                                t, r;
                            forEach(o.childNodes, function(e) {
                                1 == e.nodeType && (e.className = e.className.replace("sorttable_sorted_reverse", ""), e.className = e.className.replace("sorttable_sorted", ""))
                            }), (t = document.getElementById("sorttable_sortfwdind")) && t.parentNode.removeChild(t), (r = document.getElementById("sorttable_sortrevind")) && r.parentNode.removeChild(r), this.className += " sorttable_sorted", (t = document.createElement("span")).id = "sorttable_sortfwdind", set_innertext(t, " ▾"), this.appendChild(t);
                            for (var a = [], s = this.sorttable_columnindex, n = this.sorttable_tbody.rows, l = 0; l < n.length; l++) a[a.length] = [sorttable.getInnerText(n[l].cells[s]), n[l]];
                            a.sort(this.sorttable_sortfunction);
                            for (var i = this.sorttable_tbody, l = 0; l < a.length; l++) i.appendChild(a[l][1]);
                            delete a
                        }, !1)
                    }
            }
        },
        guessType: function(e, t) {
            var r = sorttable.sort_alpha;
            if (0 == t || 1 == t) return r;
            if (2 == t) return sorttable.sort_reverse_numeric;
            for (var o = 0; o < e.tBodies[0].rows.length; o++) {
                var a = sorttable.getInnerText(e.tBodies[0].rows[o].cells[t]);
                if ("" != a) {
                    if (a.match(/^-?[\xA3$\xA4]?[\d,.]+%?$/)) return sorttable.sort_numeric;
                    var s = a.match(sorttable.DATE_RE);
                    if (s) {
                        var n = parseInt(s[1]),
                            l = parseInt(s[2]);
                        if (12 < n) return sorttable.sort_ddmm;
                        if (12 < l) return sorttable.sort_mmdd;
                        r = sorttable.sort_ddmm
                    }
                }
            }
            return r
        },
        getInnerText: function(e) {
            if (!e) return "";
            if (hasInputs = "function" == typeof e.getElementsByTagName && e.getElementsByTagName("input").length, null != e.getAttribute("sorttable_customkey")) return e.getAttribute("sorttable_customkey");
            if (void 0 !== e.textContent && !hasInputs) return e.textContent.replace(/^\s+|\s+$/g, "");
            if (void 0 !== e.innerText && !hasInputs) return e.innerText.replace(/^\s+|\s+$/g, "");
            if (void 0 !== e.text && !hasInputs) return e.text.replace(/^\s+|\s+$/g, "");
            switch (e.nodeType) {
                case 3:
                    if ("input" == e.nodeName.toLowerCase()) return e.value.replace(/^\s+|\s+$/g, "");
                case 4:
                    return e.nodeValue.replace(/^\s+|\s+$/g, "");
                case 1:
                case 11:
                    for (var t = "", r = 0; r < e.childNodes.length; r++) t += sorttable.getInnerText(e.childNodes[r]);
                    return t.replace(/^\s+|\s+$/g, "");
                default:
                    return ""
            }
        },
        reverse: function(e) {
            newrows = [];
            for (var t = 0; t < e.rows.length; t++) newrows[newrows.length] = e.rows[t];
            for (var t = newrows.length - 1; 0 <= t; t--) e.appendChild(newrows[t]);
            delete newrows
        },
        sort_numeric: function(e, t) {
            return aa = parseFloat(e[0].replace(/[^0-9.-]/g, "")), isNaN(aa) && (aa = 0), bb = parseFloat(t[0].replace(/[^0-9.-]/g, "")), isNaN(bb) && (bb = 0), aa - bb
        },
        sort_reverse_numeric: function(e, t) {
            return aa = parseFloat(e[0].replace(/[^0-9.-]/g, "")), isNaN(aa) && (aa = 0), bb = parseFloat(t[0].replace(/[^0-9.-]/g, "")), isNaN(bb) && (bb = 0), bb - aa
        },
        sort_alpha: function(e, t) {
            var r, o;
            return (r = void 0 !== e[0].toLowerCase ? e[0].toLowerCase() : e) == (o = void 0 !== t[0].toLowerCase ? t[0].toLowerCase() : t) ? 0 : r < o ? -1 : 1
        },
        sort_ddmm: function(e, t) {
            var r, o, a, s, n, l;
            return o = (r = e[0].match(sorttable.DATE_RE))[3], a = r[2], s = r[1], 1 == a.length && (a = "0" + a), 1 == s.length && (s = "0" + s), n = o + a + s, o = (r = t[0].match(sorttable.DATE_RE))[3], a = r[2], s = r[1], 1 == a.length && (a = "0" + a), 1 == s.length && (s = "0" + s), n == (l = o + a + s) ? 0 : n < l ? -1 : 1
        },
        sort_mmdd: function(e, t) {
            var r, o, a, s, n, l;
            return o = (r = e[0].match(sorttable.DATE_RE))[3], s = r[2], 1 == (a = r[1]).length && (a = "0" + a), 1 == s.length && (s = "0" + s), n = o + a + s, o = (r = t[0].match(sorttable.DATE_RE))[3], s = r[2], 1 == (a = r[1]).length && (a = "0" + a), 1 == s.length && (s = "0" + s), n == (l = o + a + s) ? 0 : n < l ? -1 : 1
        },
        shaker_sort: function(e, t) {
            for (var r = 0, o = e.length - 1, a = !0; a;) {
                a = !1;
                for (var s = r; s < o; ++s)
                    if (0 < t(e[s], e[s + 1])) {
                        var n = e[s];
                        e[s] = e[s + 1], e[s + 1] = n, a = !0
                    } if (o--, !a) break;
                for (var s = o; r < s; --s)
                    if (t(e[s], e[s - 1]) < 0) {
                        var n = e[s];
                        e[s] = e[s - 1], e[s - 1] = n, a = !0
                    } r++
            }
        },
        filter: function(e, t) {
            t = (t = (t = t.toLowerCase()).replace(/^\s+/, "")).replace(/\s+$/, "");
            for (var r = 0; r < e.rows.length; r++) {
                var o = e.rows[r].id;
                if ("autofilltabfooter" != o && "autologintabfooter" != o && "autologintabheader" != o && "autofilltabheader" != o && (0 == o.indexOf("lpautofill") || 0 == o.indexOf("lpautologin"))) {
                    var a = document.getElementById(o);
                    0 == t.length ? a.style.display = "table-row" : void 0 !== sorttable.search_array[o] && 0 <= sorttable.search_array[o].indexOf(t) ? a.style.display = "table-row" : (sorttable.search_array[o], a.style.display = "none")
                }
            }
        },
        tokenize_popup_rows: function(e) {
            for (var t = " ", r = {}, o = 0; o < e.rows.length; o++) {
                var a = [],
                    s = e.rows[o].id;
                if ("autofilltabfooter" != s && "autologintabfooter" != s && "autologintabheader" != s && "autofilltabheader" != s && (0 == s.indexOf("lpautofill") || 0 == s.indexOf("lpautologin"))) {
                    var n = e.rows[o];
                    if (void 0 !== n.childNodes && void 0 !== n.childNodes.length)
                        for (var l = 0; l < n.childNodes.length; l++) a.push(get_innertext(n.childNodes[l]));
                    var i = a.join(t);
                    i = i.toLowerCase(), r[s] = i
                }
            }
            return r
        },
        initial_sort: function(e) {
            var t = e.parentNode;
            forEach(t.childNodes, function(e) {
                1 == e.nodeType && (e.className = e.className.replace("sorttable_sorted_reverse", ""), e.className = e.className.replace("sorttable_sorted", ""))
            });
            var r = document.getElementById("sorttable_sortfwdind");
            r && r.parentNode.removeChild(r);
            var o = document.getElementById("sorttable_sortrevind");
            o && o.parentNode.removeChild(o), e.className += " sorttable_sorted", (r = document.createElement("span")).id = "sorttable_sortfwdind", set_innertext(r, " ▾"), e.appendChild(r);
            for (var a = [], s = e.sorttable_columnindex, n = e.sorttable_tbody.rows, l = 0; l < n.length; l++) a[a.length] = [sorttable.getInnerText(n[l].cells[s]), n[l]];
            a.sort(e.sorttable_sortfunction);
            for (var i = e.sorttable_tbody, l = 0; l < a.length; l++) i.appendChild(a[l][1]);
            delete a
        }
    }, "undefined" != typeof navigator && /WebKit/i.test(navigator.userAgent)) var _timer = setInterval(function() {
    /loaded|complete/.test(document.readyState) && sorttable.init()
}, 10);
Array.forEach || (Array.forEach = function(e, t, r) {
    for (var o = 0; o < e.length; o++) t.call(r, e[o], o, e)
}), String.forEach = function(r, o, a) {
    Array.forEach(r.split(""), function(e, t) {
        o.call(a, e, t, r)
    })
};
var forEach = function(e, t, r) {
    if (e) {
        var o = Object;
        "string" == typeof e ? o = String : "number" == typeof e.length && (o = Array), o.forEach(e, t, r)
    }
};
//# sourceMappingURL=sourcemaps/sorttable.js.map