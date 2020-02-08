var FieldHistoryDialog = function(t) {
    Dialog.call(this, t, {
        backButtonText: Strings.translateString("Hide All"),
        nextButtonText: Strings.translateString("Show All"),
        closeButtonEnabled: !0,
        dynamicHeight: !0,
        confirmOnClose: !1,
        overlayDialog: !0
    }), this.toggles = null
};
FieldHistoryDialog.prototype = Object.create(Dialog.prototype), FieldHistoryDialog.prototype.constructor = FieldHistoryDialog,
    function(p) {
        var c = function(t, e, i) {
                this.show = function() {
                    i.value = LPProxy.decrypt(t, e.getKey())
                }, this.getElement = function() {
                    return o
                };
                var o = LPTools.createElement("div", "action", Strings.translateString("Show")),
                    n;
                $(o).bind("click", (n = this, function() {
                    n.show()
                }))
            },
            u = function(t, e) {
                var i = !1;
                this.show = function() {
                    n.value = LPProxy.decrypt(t, e.getKey()), s.addClass("selected"), i = !0
                }, this.hide = function() {
                    n.value = r, s.removeClass("selected"), i = !1
                }, this.toggle = function() {
                    i ? this.hide() : this.show()
                }, this.getElement = function() {
                    return o
                };
                var o = LPTools.createElement("div", "relative"),
                    n = LPTools.createElement("input", {
                        class: "dialogInput",
                        readonly: !0,
                        type: "text"
                    });
                n.value = r, o.appendChild(n);
                var s = LPTools.createElement("div", "showPassword iconButton"),
                    l;
                o.appendChild(s), (s = $(s)).bind("click", (l = this, function() {
                    l.toggle()
                }))
            },
            r = "********************";
        FieldHistoryDialog.prototype.open = function(t) {
            this.toggles = [], (t = t || {}).title = Strings.translateString("Password History"), t.historyType === Constants.HISTORY_TYPES.USERNAME ? t.title = Strings.translateString("Username History") : t.historyType === Constants.HISTORY_TYPES.NOTE && (t.title = Strings.translateString("Note History")), Dialog.prototype.open.call(this, t)
        }, FieldHistoryDialog.prototype.initialize = function() {
            var i;
            Dialog.prototype.initialize.apply(this, arguments), this.backButton.unbind("click"), this.nextButton.unbind("click"), (i = this).backButton.bind("click", function() {
                for (var t = 0, e = i.toggles.length; t < e; ++t) i.toggles[t].hide()
            }), i.nextButton.bind("click", function() {
                for (var t = 0, e = i.toggles.length; t < e; ++t) i.toggles[t].show()
            })
        }, FieldHistoryDialog.prototype.close = function() {
            Dialog.prototype.close.apply(this, arguments), p.getElementById("fieldHistoryNoteDisplay").value = "", $("#fieldHistoryElements").empty()
        }, FieldHistoryDialog.prototype.setup = function(t, e) {
            var i = Strings.translateString("Password");
            e.historyType === Constants.HISTORY_TYPES.USERNAME ? i = Strings.translateString("Username") : e.historyType === Constants.HISTORY_TYPES.NOTE && (i = Strings.translateString("Action"));
            var o = p.getElementById("fieldHistoryNoteDisplay");
            $("#fieldHistoryColumnHeader").text(i);
            var n = document.getElementById("fieldHistoryElements");
            if (e.history && 0 < e.history.length) {
                this.$element.removeClass("empty");
                for (var s = 0, l = e.history.length; s < l; ++s) {
                    var r = e.history[s],
                        a = LPTools.createElement("tr");
                    n.appendChild(a);
                    var y = LPTools.createElement("td", "fieldHistoryDate", r.date),
                        g = r.whom && r.whom.length ? Strings.translateString("by") + " " + r.whom : "";
                    y.appendChild(LPTools.createElement("p", "fieldHistoryWhom", g)), a.appendChild(y);
                    var d = null;
                    d = e.historyType === Constants.HISTORY_TYPES.NOTE ? new c(r.value, e.vaultItem, o) : new u(r.value, e.vaultItem);
                    var h = LPTools.createElement("td");
                    h.appendChild(d.getElement()), a.appendChild(h), this.toggles.push(d)
                }
            } else this.$element.addClass("empty");
            Dialog.prototype.setup.apply(this, arguments), e.history && 0 < e.history.length && e.historyType === Constants.HISTORY_TYPES.NOTE ? (this.$element.addClass("noteHistory"), this.dialogContent.css("bottom", "0")) : this.$element.removeClass("noteHistory")
        }
    }(document);
//# sourceMappingURL=sourcemaps/fieldHistoryDialog.js.map