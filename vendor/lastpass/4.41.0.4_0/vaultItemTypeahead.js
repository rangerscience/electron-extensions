VaultItemTypeahead = function(t, e) {
    TypeaheadDropdown.call(this, t, null, e), this.filter = LPTools.getOption(e, "filter", null), this.sourceFunction = LPTools.getOption(e, "sourceFunction", null), this.refresh()
}, VaultItemTypeahead.prototype = Object.create(TypeaheadDropdown.prototype), VaultItemTypeahead.constructor = VaultItemTypeahead, VaultItemTypeahead.prototype.refresh = function() {
    this.dataContainer = new Container(this.sourceFunction ? this.sourceFunction() : [])
}, VaultItemTypeahead.prototype.buildOptions = function(t) {
    t = t || "";
    var e = [];
    if (this.dataContainer) {
        this.dataContainer._destructed && this.refresh();
        for (var a = this.dataContainer.getSearchResultItems(t), i = 0, o = a.length; i < o; ++i) {
            var n = a[i];
            if (!this.filter || this.filter(n)) {
                var s = n._model.getName();
                n instanceof AccountDisplay ? s += " (" + n._model.getUsername() + ")" : s += " (" + Strings.Vault.SECURE_NOTE + ")";
                var h = {
                    value: n._model.getID(),
                    label: s
                };
                0 === e.length && this.queryMatches(h, t) && this.setHint(t, h), e.push(h)
            }
        }
    }
    return this.setOptions(e), 0 < e.length
}, VaultItemTypeahead.prototype.updateDropdown = function(t) {
    this.buildOptions(t) ? (this.hasMatches = !0, this.shown ? this.addKeyBoardNavigation() : t && this.show()) : (this.hide(), this.clearHint())
};
//# sourceMappingURL=sourcemaps/vaultItemTypeahead.js.map