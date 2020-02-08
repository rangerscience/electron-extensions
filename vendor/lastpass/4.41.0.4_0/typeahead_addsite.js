! function(A, t) {
    function o(A, i) {
        var e = A.domain,
            a = e.indexOf("."),
            n = e.charAt(0).toUpperCase() + e.substring(1, 0 < a ? a : e.length);
        $("#name").val(n), t && $(i).val(t[e])
    }
    A.initializeURLTypeahead = function(A, e, i) {
        var a = $(A);
        if ("" === a.val()) {
            i = void 0 === i ? "" : i;
            var n = new Bloodhound({
                datumTokenizer: function(A) {
                    return Bloodhound.tokenizers.whitespace(A.url)
                },
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                limit: 10,
                remote: i + "typeahead_addsite.php?q=%QUERY"
            });
            n.initialize(), a.typeahead({
                minLength: 0,
                highlight: !0
            }, {
                displayKey: "url",
                source: n.ttAdapter(),
                templates: {
                    suggestion: function(A) {
                        var i = "" !== A.favicon ? A.favicon : "R0lGODlhEAAQAIcAAAAAAExnf1BpgWR0iHZ6hHeBkX+GkYiOmpeaopucoaSlqqWmqrm9w7q+xL+/wry/xcXGyc3Oz9HS1NPU1tnZ2d/h4+Di5OLj5uPl5+Tk5OXm6O7u7+7v8O/w8e/w8vDw8fHx8vLy8/Pz8/Pz9PT09fX19fX29vb29vf39/f3+Pj4+Pj4+fn5+vr6+/v7/Pz8/P39/f7+/v///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAAAALAAAAAAQABAAAAiQAAEIHEiw4MAFCBEmQCjBIIAFMiLK8CBjA4QIBiFu2Fgh4oYJDgpq5Chxw4KCCiqSlKigIAKVGyowYNDgAYGCB2BWsHABgwYDBQvA/CCiBAoVBQoOUNlBhAkVLV4MKCigIgenK1zAiCGgYICKIEhAhRExgFcZHEKcYEG27NkOI1K0aCvDLMEAePPqteuwr8CAADs=",
                            e = A.domain;
                        return "" !== A.a && (e = A.a + " (" + A.domain + ")"), '<div class="siteRecord"><div class="favicon"><img src="data:image/gif;base64,' + i + '"></div><span class="siteUrl">' + e + "</span></div>"
                    }
                }
            }).on("typeahead:selected", function(A, i) {
                o(i, e)
            }).on("typeahead:autocompleted", function(A, i) {
                o(i, e)
            }), a.css("background", "transparent")
        }
    }
}(window, siteCats);
//# sourceMappingURL=sourcemaps/typeahead_addsite.js.map