var IdentityDropdown = function() {
    var n = function(t) {
        for (var o = [], n = 0, e = t.length; n < e; ++n) {
            var p = t[n],
                r = p._data.deciname;
            o.push({
                value: r,
                label: r,
                identity: p
            })
        }
        return o
    };
    return function(t, o) {
        DropdownInput.call(this, t, n(o)), this.setReadOnly(), this.setIdentities = function(t) {
            this.setOptions(n(t))
        }
    }
}();
IdentityDropdown.prototype = Object.create(DropdownInput.prototype), (IdentityDropdown.prototype.constructor = IdentityDropdown).prototype.setValue = function(t, o) {
    var n, e;
    void 0 === o || o ? (n = this).options[t].identity.enable({
        callback: function() {
            DropdownInput.prototype.setValue.call(n, t)
        }
    }) : DropdownInput.prototype.setValue.call(this, t)
};
//# sourceMappingURL=sourcemaps/identityDropdown.js.map