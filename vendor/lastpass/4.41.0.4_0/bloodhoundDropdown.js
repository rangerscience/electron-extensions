BloodhoundDropdown = function(o, e, t, n) {
    var i, l;
    TypeaheadDropdown.call(this, o, null, n), e.datumTokenizer = e.datumTokenizer || Bloodhound.tokenizers.whitespace, e.queryTokenizer = e.queryTokenizer || Bloodhound.tokenizers.whitespace, e.remote = e.remote || {}, e.remote.transport = function(o, n, i) {
        bg.LPServer.ajax($.extend(o, {
            success: function(o, e, t) {
                n(o)
            },
            error: function(o, e, t) {
                i(t)
            }
        }))
    }, this.bloodhound = new Bloodhound(e), this.optionLabel = LPTools.getOption(t, "optionLabel", null), this.elementTemplate = LPTools.getOption(t, "elementTemplate", null), this.getValueFromDatum = LPTools.getOption(this.elementTemplate, "value", null), this.ignoreDatum = LPTools.getOption(t, "ignore", null), this.focused = !1, i = this, (l = $(o)).unbind("focus"), l.bind("focus", function() {
        i.focused = !0
    }), l.bind("blur", function() {
        i.focused = !1
    })
}, BloodhoundDropdown.prototype = Object.create(TypeaheadDropdown.prototype), BloodhoundDropdown.constructor = BloodhoundDropdown, BloodhoundDropdown.prototype.fireOnChange = function(o) {
    null !== this.onChangeCallback && this.options && this.options[o] && this.onChangeCallback(this.options[o].datum, o)
}, BloodhoundDropdown.prototype.getInputValue = function(o) {
    if (this.getValueFromDatum) return this.getValueFromDatum(o.datum);
    TypeaheadDropdown.prototype.getInputValue.apply(this, arguments)
}, BloodhoundDropdown.prototype.processBloodhoundResponse = function(o, e) {
    if (this.focused && 0 < o.length) {
        for (var t = [], n = 0, i = o.length; n < i; ++n) {
            var l = o[n],
                s = this.bloodhound.identify(l);
            if (null === this.ignoreDatum || !this.ignoreDatum(s, l)) {
                var u = {
                    value: s,
                    label: this.optionLabel(l),
                    datum: l
                };
                this.elementTemplate && (u.element = this.elementTemplate.template(l)), t.push(u), 0 === n && this.queryMatches(u, e) && this.setHint(e, u)
            }
        }
        this.setOptions(t), e && this.show(!0)
    } else this.hide(), this.clearHint()
}, BloodhoundDropdown.prototype.updateDropdown = function(e) {
    var t, o;
    o = function(o) {
        t.hasMatches = 0 < o.length, t.processBloodhoundResponse(o, e)
    }, (t = this).bloodhound.search(e, o, o)
};
//# sourceMappingURL=sourcemaps/bloodhoundDropdown.js.map