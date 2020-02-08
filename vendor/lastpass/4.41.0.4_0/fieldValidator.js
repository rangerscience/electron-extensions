var FieldValidator = function(t) {
    this.options = $.extend({
        summary: null,
        listParentEl: null,
        validators: [],
        isPopup: !1
    }, t), this.setup()
};
! function(e) {
    function r(t) {
        return !(!t || 0 === t.length) && t.filter(function(t) {
            return t.async ? !t.completed || t.isValidResult : !0 === t.isValidResult
        }).length == t.length
    }

    function i(t) {
        if (!t || 0 === t.length) return null;
        var i = t.filter(function(t) {
            return !1 === t.isValidResult
        });
        return 0 < i.length ? i[0].errorMsg : ""
    }

    function s(t, i) {
        t && (t.removeClass("empty"), t.removeClass("warning"), t.removeClass("check"), !0 === i ? t.addClass("check") : !1 === i ? t.addClass("warning") : t.addClass("empty"))
    }

    function o(t, i, s) {
        var o = LPTools.createElement("div", {
                class: "col-1"
            }, null),
            a = LPTools.createElement("div", {
                class: "validation-img " + (s ? "empty" : "")
            }, null);
        o.appendChild(a);
        var l = LPTools.createElement("div", {
            class: "col-11"
        }, null);
        i && l.appendChild(i);
        var n = LPTools.createElement("div", {
            id: t,
            class: "row"
        }, null);
        return n.appendChild(o), n.appendChild(l), {
            validatorEl: n,
            stateEl: e(a),
            msgEl: e(l)
        }
    }

    function p(t, i, s) {
        if (t && e.isFunction(t) && !1 === s && i && 0 < i.length)
            for (var o = i.filter(function(t) {
                    return !0 === t.isValidResult
                }), a = 0; a < o.length; a++) t(o.errorMsg)
    }
    FieldValidator.prototype.setup = function() {
        return this.setupSummary(), this.setupValidatorList(), this.isValid = !0, this
    }, FieldValidator.prototype.setupSummary = function() {
        if (this.options.summary && this.options.validators && 0 < this.options.validators.length) {
            var t = o(this.options.summary.id, this.options.summary.errorMsg, !1);
            this.options.summary.stateEl = t.stateEl, this.options.summary.msgEl = t.msgEl, this.options.summary.parentEl.empty(), this.options.summary.parentEl.append(t.validatorEl), this.options.summary.parentEl.hide()
        }
    }, FieldValidator.prototype.setupValidatorList = function() {
        if (this.options.listParentEl) {
            for (var t = LPTools.createElement("div", null, null), i = 0; i < this.options.validators.length; i++) {
                var s = o(this.options.validators[i].id, this.options.validators[i].name, !0);
                s && (this.options.validators[i].stateEl = s.stateEl, t.appendChild(s.validatorEl))
            }
            this.options.listParentEl.empty(), this.options.listParentEl.append(t)
        }
    }, FieldValidator.prototype.updateStateList = function() {
        if (this.options.validators && 0 < this.options.validators.length)
            for (var t = 0; t < this.options.validators.length; t++) s(this.options.validators[t].stateEl, this.options.validators[t].isValidResult)
    }, FieldValidator.prototype.updateStateSummary = function(t) {
        this.options.summary && this.options.validators && 0 < this.options.validators.length && (!1 === t ? (s(this.options.summary.stateEl, t), this.options.summary.msgEl.empty(), this.options.summary.msgEl.append(i(this.options.validators)), this.options.summary.parentEl.show(), this.options.summary.labelEl && this.options.summary.labelEl.hide()) : this.options.summary.parentEl.is(":visible") && (this.options.summary.parentEl.hide(), this.options.summary.labelEl && this.options.summary.labelEl.show()))
    }, FieldValidator.prototype.getValidationList = function() {
        var t = [];
        if (this.options.validators)
            for (var i = 0; i < this.options.validators.length; i++) this.options.validators[i].isValidResult || t.push(this.options.validators[i].id);
        return t
    }, FieldValidator.prototype.validate = function(t, i, s) {
        var o = this,
            a = !1;
        if (t && this.options.validators && 0 !== this.options.validators.length) {
            function l() {
                a = r(o.options.validators), s || o.updateStateSummary(a), o.updateStateList(), p(i, o.options.validators, a)
            }
            try {
                for (var n = 0; n < this.options.validators.length; n++) this.options.validators[n].async ? (this.options.validators[n].completed = !1, this.options.validators[n].isValidAsync(t, function(i) {
                    return function(t) {
                        o.options.validators[i].completed = !0, o.options.validators[i].isValidResult = t, l()
                    }
                }(n))) : this.options.validators[n].isValidResult = this.options.validators[n].isValid(t)
            } catch (t) {
                return console.log("Something went wrong while executing validation: " + t), !1
            }
            l()
        }
        return this.isValid = a
    }
}(jQuery);
//# sourceMappingURL=sourcemaps/fieldValidator.js.map