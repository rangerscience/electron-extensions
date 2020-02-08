! function(g) {
    var p = "poor",
        m = "bad",
        v = "ok",
        f = "good",
        u = "great",
        S = "best",
        L = function(t, e, a) {
            var r = 0;
            if ("" === e && "" === t) return 0;
            var n = t.toLowerCase(),
                s = e.toLowerCase();
            if (n === s || s && -1 !== n.indexOf(s) || s && -1 !== s.indexOf(n)) return 1;
            if (r += t.length, 0 < t.length && t.length <= 7) return 1;
            8 <= t.length && t.length <= 15 ? r += 12 : 16 <= t.length && (r += 18), t.match(/[a-z]/) && (r += 1), t.match(/[A-Z]/) && (r += 5), t.match(/\d/) && (r += 5), t.match(/.*\d.*\d.*\d/) && (r += 5), t.match(/[!,@,#,$,%,^,&,*,?,_,~]/) && (r += 5), t.match(/.*[!,@,#,$,%,^,&,*,?,_,~].*[!,@,#,$,%,^,&,*,?,_,~]/) && (r += 5), t.match(/(?=.*[a-z])(?=.*[A-Z])/) && (r += 2), t.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/) && (r += 2), t.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!,@,#,$,%,^,&,*,?,_,~])/) && (r += 2);
            for (var i = {}, o = 0, l = 0, d = t.length; l < d; ++l) {
                var h = t.charAt(l);
                void 0 === i[h] && (i[h] = 1, ++o)
            }
            return 1 === o ? 2 : ((r *= 2) < 0 ? r = 0 : 100 < r && (r = 100), r)
        },
        l = function(t, e, a, r, n) {
            var s = L(t, a, r),
                i = p,
                o = Strings.translateString("Invalid");
            if (s < 17 || (o = s < 34 ? (i = m, Strings.translateString("Weak")) : s < 51 ? (i = v, Strings.translateString("Okay")) : s < 68 ? (i = f, Strings.translateString("Good")) : s < 85 ? (i = u, Strings.translateString("Secure")) : (i = S, Strings.translateString("Super!"))), n) {
                e.attr("class", "score-segment").addClass(i), e.css("width", "20%");
                var l = e.parent();
                l.empty(), l.append(e);
                for (var d = Math.floor(s / 20) || 1, h = 1; h < 5; h++) {
                    var c = e.clone();
                    d <= h && c.removeClass(i), c.insertAfter("div.score-segment:last")
                }
            } else e.attr("class", i), e.css("width", s + "%");
            r && (t ? (g(r.parent()).css("opacity", 1), r.text(o), r.removeClass("strength")) : (g(r.parent()).css("opacity", .5), r.text(Strings.translateString("Strength")), e.attr("class", "strength"), e.css("width", "100%")))
        };
    jQuery.fn.LP_addGeneratePasswordMeter = function(t) {
        if (this && 0 < this.length) {
            var e = g(LPTools.createElement("div", "meter-gen-pass")),
                a = g(LPTools.createElement("div"));
            this.parent().append(e.append(a));
            var r = t || !1,
                n = function() {
                    l(g(this).val(), a, "somestringthathopefullydoesnotmatchpassword", null, r)
                };
            this.on("input", n).on("change", n)
        }
    }, jQuery.fn.LP_addPasswordMeter = function(e, t, a) {
        var r = LPTools.createElement("div", "meterContainer"),
            n = LPTools.createElement("div", "meter"),
            s = LPTools.createElement("div"),
            i = null;
        n.appendChild(s), r.appendChild(n), n = g(n), s = g(s), t && (i = LPTools.createElement("label", "meterLabel", "Strength"), r.appendChild(i), i = g(i), n.css("width", "88%"), i.css("width", "12%")), this.parent().append(r);
        var o = a || !1;
        this.LP_input("passwordMeter", function(t) {
            l(t, s, e ? e.val() : "", i, o)
        })
    }
}(jQuery);
//# sourceMappingURL=sourcemaps/passwordMeter.js.map