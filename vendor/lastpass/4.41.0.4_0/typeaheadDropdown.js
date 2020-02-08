TypeaheadDropdown = function(t, e, o) {
        var n;
        this.hintElement = null, this.hint = null, this.autoCompleteBlurs = LPTools.getOption(o, "autoCompleteBlurs", !0), this.hasMatches = !1, DropdownInput.call(this, t, e, o), (n = this).optionFocusHandler = function(t) {
            var e = n.options[n.getDropdownValue(t)],
                o = n.inputObject.getValue();
            n.queryMatches(e, o) ? n.setHint(o, e) : n.clearHint()
        }
    }, TypeaheadDropdown.prototype = Object.create(DropdownInput.prototype), TypeaheadDropdown.prototype.constructor = TypeaheadDropdown,
    function() {
        TypeaheadDropdown.prototype.adjustView = function() {
            DropdownInput.prototype.adjustView.apply(this, arguments);
            var t = this.inputObject.getElement(),
                e = $(this.hintElement.parentElement);
            e.css({
                "line-height": t.css("height"),
                "padding-left": t.css("padding-left"),
                "padding-right": t.css("padding-right"),
                "font-weight": t.css("font-weight")
            }), "border-box" === t.css("box-sizing") && e.css({
                left: t.css("border-left-width"),
                right: t.css("border-right-width")
            })
        }, TypeaheadDropdown.prototype.buildInputElement = function() {
            var t = DropdownInput.prototype.buildInputElement.apply(this, arguments),
                e = this,
                o = e.getElement();
            o.bind("keydown", function(t) {
                if (e.dropdownEnabled) switch (t.keyCode || t.which) {
                    case 9:
                        e.autocomplete(t);
                        break;
                    case 27:
                        e.shown && (e.hide(), t.stopPropagation(), t.preventDefault())
                }
            });
            var n = $(LPTools.createElement("div", "dropdownHint"));
            this.hintElement = LPTools.createElement("span"), n.append(this.hintElement);
            var p = $(LPTools.createElement("div", "relative"));
            return o.before(p), p.append(n), p.append(o), o.prop("readonly", !1), t
        }, TypeaheadDropdown.prototype.autocomplete = function(t) {
            this.hint && (this.setValue(this.hint.value), this.autoCompleteBlurs || (t.preventDefault(), t.stopPropagation()))
        }, TypeaheadDropdown.prototype.getDropdownClass = function() {
            return "typeaheadDropdown"
        }, TypeaheadDropdown.prototype.clear = function() {
            DropdownInput.prototype.clear.apply(this, arguments), this.dynamic && this.setOptions([])
        }, TypeaheadDropdown.prototype.default = function() {
            DropdownInput.prototype.default.apply(this, arguments), this.updateDropdown("")
        }, TypeaheadDropdown.prototype.hide = function() {
            DropdownInput.prototype.hide.apply(this), this.clearHint()
        }, TypeaheadDropdown.prototype.show = function() {
            this.hasMatches && DropdownInput.prototype.show.apply(this)
        }, TypeaheadDropdown.prototype.setHint = function(t, e) {
            0 < t.length ? (this.hintElement.textContent = t + e.label.substring(Math.min(t.length, e.label.length)), this.hint = e) : this.clearHint()
        }, TypeaheadDropdown.prototype.clearHint = function() {
            this.hintElement && (this.hintElement.textContent = ""), this.hint = null
        };
        var e = function(t, e) {
            var o = (t = t.get(0)).value,
                n = t.selectionStart || 0,
                p = t.selectionEnd || 0,
                i = o.substring(0, n),
                a = o.substring(p, o.length);
            return n === p && (0 < n && 8 === e ? i = i.substring(0, i.length - 1) : p < o.length && 46 === e && (a = a.substring(1))), "number" != typeof e && (i += e), i + a
        };
        TypeaheadDropdown.prototype.handleKeypress = function(t) {
            this.updateDropdown(e(this.inputObject.getElement(), t))
        }, TypeaheadDropdown.prototype.handleDelete = function(t) {
            this.updateDropdown(e(this.inputObject.getElement(), t))
        }, TypeaheadDropdown.prototype.handleDownArrow = function() {
            this.show(), LPTools.setNavIndex(0)
        }, DropdownInput.prototype.getKeyboardNavigationFocusHandler = function() {
            return this.optionFocusHandler
        }, TypeaheadDropdown.prototype.updateDropdown = function(t) {
            var e = !1;
            this.hasMatches = !1;
            var o = this.dropdownElement.children().first();
            for (var n in o.empty(), this.options) {
                var p = this.options[n];
                this.queryMatches(p, t, !0) && (o.append(p.element), this.hasMatches = !0, !e && this.queryMatches(p, t) && (this.setHint(t, p), e = !0))
            }
            e || this.clearHint(), this.hasMatches ? this.shown ? this.addKeyBoardNavigation() : t && this.show() : this.hide()
        }
    }();
//# sourceMappingURL=sourcemaps/typeaheadDropdown.js.map