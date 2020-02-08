var IdentityDialog = function(t) {
    ContainerSelectionDialog.call(this, t)
};
IdentityDialog.prototype = Object.create(ContainerSelectionDialog.prototype), IdentityDialog.prototype.constructor = IdentityDialog,
    function() {
        IdentityDialog.prototype.open = function(t) {
            (t = t || {}).title = t.vaultItem ? Strings.translateString("Edit Identity") : Strings.translateString("Add Identity"), ContainerSelectionDialog.prototype.open.call(this, t)
        };
        var i = function(t) {
            var e = LPProxy.getSites(t).concat(LPProxy.getNotes(t)),
                i = LPProxy.assignItemsToGroups(e, !1);
            if (!LPFeatures.allowOmarIA()) {
                var n = LPProxy.getFormFills(t);
                0 < n.length && i.push(new GroupDisplay(new DummyGroup(Strings.translateString("Form Fills")), n))
            }
            return i
        };
        IdentityDialog.prototype.getAvailableItems = function(t) {
            return i({
                identity: t.vaultItem,
                invertIdentity: !0
            })
        }, IdentityDialog.prototype.getSelectedItems = function(t) {
            var e = [];
            return t.vaultItem ? i({
                identity: t.vaultItem
            }) : e
        }, IdentityDialog.prototype.getData = function(t) {
            var e = ContainerSelectionDialog.prototype.getData.apply(this, arguments);
            if (null !== this.containers.selected) {
                for (var i = this.containers.selected.getItemModelChildren(), n = [], o = [], a = [], r = 0, l = i.length; r < l; ++r) {
                    var p = i[r];
                    p instanceof FormFill ? a.push(p.getID()) : p instanceof Application ? o.push(p.getID()) : n.push(p.getID())
                }
                e.aids = n.join(","), e.appaids = o.join(","), e.ffids = a.join(",")
            }
            return e
        }, IdentityDialog.prototype.add = function(t) {
            var e;
            (new Identity).addFromDialog(t)
        }, IdentityDialog.prototype.validate = function(t) {
            var e = ContainerSelectionDialog.prototype.validate.apply(this, arguments);
            return t.deciname || (this.addError("deciname", Strings.translateString("Name is required.")), e = !1), e
        }
    }();
//# sourceMappingURL=sourcemaps/identityDialog.js.map