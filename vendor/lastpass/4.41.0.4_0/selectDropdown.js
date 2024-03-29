DropdownInput = function(t, e, o) {
        if (DialogInput.ErrorDisplayInput.call(this), this.options = e || {}, this.config = o || {}, this.inputObject = new DialogInput.Input(t || LPTools.createElement("input", {
                type: "text",
                class: "dialogInput"
            }), this.config.dialog), this.shown = !1, this.onChangeCallback = null, this.disabled = !1, this.dropdownEnabled = !0, this.searchValue = "", this.clearSearchValueTimeout = null, this.dynamic = LPTools.getOption(o, "dynamic", !0), this.selectedOption = null, t) {
            var n = t.parentElement,
                i = t.nextElementSibling;
            n.insertBefore(this.buildInputElement(), i)
        }
        var s;
        (s = this).clearSearchValue = function() {
            s.searchValue = ""
        }
    }, DropdownInput.prototype = Object.create(DialogInput.ErrorDisplayInput.prototype), DropdownInput.prototype.constructor = DropdownInput, DropdownInput.prototype.ATTR_DROPDOWN_VALUE = "dropdownValue",
    function(t) {
        var s;
        DropdownInput.prototype.adjustView = function() {
            DialogInput.ErrorDisplayInput.prototype.adjustView.apply(this, arguments);
            var t = this.inputObject.getElement();
            try {
                t.css("margin", ""), this.dropdownElement.parent().css({
                    "margin-top": t.css("margin-top"),
                    "margin-right": t.css("margin-right"),
                    "margin-bottom": t.css("margin-bottom"),
                    "margin-left": t.css("margin-left")
                }), t.css("margin", 0);
                var e = t.css("border-bottom-right-radius");
                this.dropdownElement.css({
                    "margin-top": "-" + e,
                    "border-bottom-left-radius": e,
                    "border-bottom-right-radius": e
                })
            } catch (t) {}
        }, DropdownInput.prototype.buildInputElement = function() {
            var t = this.inputObject.getElement();
            if ("SELECT" === t.prop("nodeName")) {
                this.dynamic = !1, this.options = [];
                for (var e = t.children(), o = 0, n = e.length; o < n; ++o) {
                    var i = e[o];
                    this.options.push({
                        value: i.getAttribute("value"),
                        label: i.textContent.trim(),
                        class: i.getAttribute("class")
                    })
                }
                t = $(LPTools.createElement("input", {
                    class: "dialogInput",
                    type: "text",
                    readonly: !0
                })), this.inputObject.setElement(t)
            }
            this.dropdownElement = $(LPTools.createElement("div", "dropdownMenu selectDropdownList")), this.dropdownElement.append(LPTools.createElement("ul"));
            var s = $(LPTools.createElement("div", "dropdownContainer")),
                r, p;
            return s.append(t), s.append(this.dropdownElement), this.setOptions(this.options), this.config.additionalDropdownClasses && this.dropdownElement.addClass(this.config.additionalDropdownClasses), r = this, p = !1, t.unbind("blur").bind("blur", function() {
                p ? (t.focus(), p = !1) : r.hide()
            }), t.unbind("keypress").bind("keypress", function(t) {
                r.dropdownEnabled && 0 < t.charCode && r.handleKeypress(String.fromCharCode(t.charCode))
            }), t.unbind("keydown").bind("keydown", function(t) {
                var e = t.keyCode || t.which;
                switch (e) {
                    case 8:
                    case 46:
                        r.dropdownEnabled && r.handleDelete(e);
                        break;
                    case 40:
                        !1 === r.shown && (r.handleDownArrow(), t.preventDefault(), t.stopPropagation())
                }
            }), r.toggleHandler = function(t) {
                r.toggle(t)
            }, r.enableClickToggle(), r.dropdownElement.children().first().unbind("mousedown").bind("mousedown", function(t) {
                r.setValue(r.getDropdownValue(t.target)), t.stopPropagation(), t.preventDefault()
            }), r.dropdownElement.unbind("mousedown").bind("mousedown", function(t) {
                t.stopPropagation(), t.preventDefault(), LPPlatform.canPreventBlur() || (p = !0)
            }), t.addClass(this.getDropdownClass()), s.get(0)
        }, DropdownInput.prototype.enableClickToggle = function() {
            this.inputObject.getElement().bind("mousedown", this.toggleHandler).addClass("clickToggles")
        }, DropdownInput.prototype.disableClickToggle = function() {
            this.inputObject.getElement().unbind("mousedown", this.toggleHandler).removeClass("clickToggles")
        }, DropdownInput.prototype.enableDropdown = function() {
            this.dropdownEnabled || (this.getElement().removeClass("dropdownDisabled"), this.dropdownEnabled = !0)
        }, DropdownInput.prototype.disableDropdown = function() {
            this.dropdownEnabled && (this.getElement().addClass("dropdownDisabled"), this.dropdownEnabled = !1)
        }, DropdownInput.prototype.getElement = function() {
            return this.inputObject.getElement()
        }, DropdownInput.prototype.getDialog = function() {
            return this.inputObject.getDialog()
        }, DropdownInput.prototype.buildError = function() {
            return this.buildErrorElement({
                alignTop: !0,
                element: this.dropdownElement.parent()
            })
        }, DropdownInput.prototype.validate = function() {
            return !0
        }, DropdownInput.prototype.getDropdownClass = function() {
            return "selectDropdown"
        }, DropdownInput.prototype.setValues = function(t) {
            var e = [];
            if (t)
                for (var o = 0, n = t.length; o < n; ++o) {
                    var i = t[o];
                    e.push({
                        value: i,
                        label: i
                    })
                }
            this.setOptions(e)
        }, DropdownInput.prototype.default = function() {
            this.inputObject.default()
        }, DropdownInput.prototype.addOption = function(t) {
            this.options[t.value] = t
        }, DropdownInput.prototype.removeValue = function(t, e) {
            e && this.setValue(e), delete this.options[t], this.dropdownElement.find("li[" + DropdownInput.prototype.ATTR_DROPDOWN_VALUE + '="' + t + '"]').remove(), LPTools.hasProperties(this.options) || (this.inputObject.getElement().removeClass("toggled"), this.dropdownElement.hide())
        }, DropdownInput.prototype.setOptions = function(t, e) {
            if (t && (this.options = {}, this.orderedOptions = [], this.dropdownElement)) {
                var o = this.dropdownElement.children().first();
                o.empty();
                for (var n = 0, i = t.length; n < i; ++n) {
                    var s = t[n];
                    s.index = n, void 0 === s.element ? s.element = LPTools.createElement("li", {
                        dropdownValue: s.value,
                        class: s.class
                    }, s.label) : s.element.setAttribute(this.ATTR_DROPDOWN_VALUE, s.value), e && (s.element.className = e), void 0 !== s.click && LPPlatform.addEventListener(s.element, "mousedown", s.click), o.append(s.element), this.options[s.value] = s, this.orderedOptions.push(s)
                }
            }
        }, DropdownInput.prototype.focus = function() {
            this.getElement().focus()
        }, DropdownInput.prototype.onChange = function(t) {
            this.onChangeCallback = t
        }, DropdownInput.prototype.fireOnChange = function(t) {
            null !== this.onChangeCallback && this.onChangeCallback(t)
        }, DropdownInput.prototype.getDropdownValue = function(t) {
            return $(t).closest("[" + DropdownInput.prototype.ATTR_DROPDOWN_VALUE + "]").attr(DropdownInput.prototype.ATTR_DROPDOWN_VALUE)
        }, DropdownInput.prototype.addKeyBoardNavigation = function() {
            LPTools.addKeyBoardNavigation(this.dropdownElement.children().first().children(), {
                mouseEvent: "mousedown",
                useRightArrow: !1,
                focusHandler: this.getKeyboardNavigationFocusHandler()
            })
        }, DropdownInput.prototype.getKeyboardNavigationFocusHandler = function() {
            return null
        }, DropdownInput.prototype.show = function() {
            !this.disabled && this.dropdownEnabled && !this.shown && LPTools.hasProperties(this.options) && (this.shown = !0, this.inputObject.getElement().addClass("toggled"), this.addKeyBoardNavigation(), this.dropdownElement.show(), this.dropdownElement.scrollTop(0), Topics.get(Topics.DROPDOWN_SHOWN).publish(this))
        }, DropdownInput.prototype.positionAbsoluteBody = (s = function(t, e) {
            e.hide();
            var o = t.get(0).scrollHeight > t.height();
            e.show();
            var n = e.get(0);
            o || t.css("overflow", "hidden");
            var i = n.getBoundingClientRect();
            o || t.css("overflow", "auto"), document.body.appendChild(n), e.css({
                width: i.width,
                left: i.left,
                top: i.top - parseInt(e.css("margin-top"))
            })
        }, function() {
            var t = this,
                e = this.inputObject.getElement(),
                o = e.LP_scrollParent();
            if (0 < o.length) {
                s(o, this.dropdownElement);
                var n = function() {
                    t.hide(), o.unbind("scroll.selectDropdown", n)
                };
                o.unbind("scroll.selectDropdown").bind("scroll.selectDropdown", n);
                var i = function() {
                    t.dropdownElement.insertAfter(e), t.dropdownElement.css({
                        width: "",
                        left: "",
                        top: ""
                    }), Topics.get(Topics.DROPDOWN_HIDE).unsubscribe(i)
                };
                Topics.get(Topics.DROPDOWN_HIDE).subscribe(i)
            }
        }), DropdownInput.prototype.hide = function() {
            this.shown && LPTools.hasProperties(this.options) && (this.shown = !1, LPTools.removeKeyBoardNavigation(), this.dropdownElement.hide(), this.inputObject.getElement().removeClass("toggled"), Topics.get(Topics.DROPDOWN_HIDE).publish(this))
        }, DropdownInput.prototype.toggle = function(t) {
            this.shown ? this.hide() : this.show(!0), void 0 !== t && t.stopPropagation()
        }, DropdownInput.prototype.disable = function() {
            this.disabled || (this.getElement().parent().append(LPTools.createElement("div", "dialogInputOverlay")), this.inputObject.disable(), this.disabled = !0)
        }, DropdownInput.prototype.enable = function() {
            this.disabled && (this.getElement().parent().children().last().remove(), this.inputObject.enable(), this.disabled = !1)
        }, DropdownInput.prototype.setReadOnly = function() {
            this.getElement().prop("readonly", !0)
        }, DropdownInput.prototype.removeReadOnly = function() {
            this.getElement().prop("readonly", !0)
        }, DropdownInput.prototype.getValue = function() {
            var t = this.inputObject.getValue();
            if (this.selectedOption && this.selectedOption.label === t) return this.selectedOption.value;
            if (this.dropdownEnabled && this.options)
                for (var e in this.options)
                    if (t === this.options[e].label) {
                        t = e;
                        break
                    } return t
        }, DropdownInput.prototype.getInputValue = function(t) {
            return t.label
        }, DropdownInput.prototype.clear = function() {
            DialogInput.ErrorDisplayInput.prototype.clear.apply(this, arguments), this.setValue("")
        }, DropdownInput.prototype.setValue = function(t) {
            if (this.dropdownEnabled && this.options && this.options[t]) {
                var e = this.options[t];
                this.inputObject.setValue(this.getInputValue(e)), this.optionIndex = e.index, this.selectedOption = e
            } else this.inputObject.setValue(t), this.selectedOption = null;
            this.hide(), this.fireOnChange(t)
        }, DropdownInput.prototype.handleKeypress = function(t) {
            this.searchValue += t, this.updateValue(this.searchValue), this.clearSearchValueTimeout && clearTimeout(this.clearSearchValueTimeout);
            var e = this.clearSearchValue;
            this.clearSearchValueTimeout = setTimeout(function() {
                e()
            }, 500)
        }, DropdownInput.prototype.handleDelete = function(t) {
            this.searchValue = "", this.updateValue(this.searchValue)
        }, DropdownInput.prototype.handleDownArrow = function() {
            this.show(), LPTools.setNavIndex(this.optionIndex)
        }, DropdownInput.prototype.queryMatches = function(t, e, o) {
            var n = t.label.toLowerCase(),
                i = e.toLowerCase(),
                s = n.indexOf(i);
            return o ? -1 < s : 0 === s
        }, DropdownInput.prototype.updateValue = function(t) {
            for (var e = 0, o = this.orderedOptions.length; e < o; ++e) {
                var n = this.orderedOptions[e];
                if (this.queryMatches(n, t)) {
                    this.setValue(n.value);
                    break
                }
            }
        }
    }(document);
//# sourceMappingURL=sourcemaps/selectDropdown.js.map