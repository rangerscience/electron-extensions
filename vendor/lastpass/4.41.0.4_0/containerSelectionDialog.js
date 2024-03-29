var ContainerSelectionDialog = function(e) {
    var l;
    VaultItemDialog.call(this, e, {
        additionalHeaderClasses: ["icon"],
        closeButtonEnabled: !0,
        maximizeButtonEnabled: !0,
        buttonAlign: this.RIGHT_ALIGN
    }), this.availableCollapsed = !1, this.selectedCollapsed = !1, this.toggleCollapse = (l = this, function(e, t, n) {
        var a = $(n.target);
        l[e] ? (t.expandAll(), l[e] = !1, a.attr("title", "Collapse All")) : (t.collapseAll(), l[e] = !0, a.attr("title", "Expand All")), a.toggleClass("selected")
    })
};
ContainerSelectionDialog.prototype = Object.create(VaultItemDialog.prototype), ContainerSelectionDialog.prototype.constructor = ContainerSelectionDialog,
    function(e) {
        ContainerSelectionDialog.prototype.initialize = function(e) {
            var t, n, a;
            VaultItemDialog.prototype.initialize.apply(this, arguments), t = this, e.find(".availableSearch").LP_addSearchHandlers("inputDialog", function(e) {
                t.containers.available.applySearch(e)
            }), e.find(".selectedSearch").LP_addSearchHandlers("inputDialog", function(e) {
                t.containers.selected.applySearch(e)
            }), e.find(".availableCollapseToggle").bind("click", function(e) {
                t.toggleCollapse("availableCollapsed", t.containers.available, e)
            }), e.find(".selectedCollapseToggle").bind("click", function(e) {
                t.toggleCollapse("selectedCollapsed", t.containers.selected, e)
            }), t.availableContainerElement = e.find(".containerSelectionDialogAvailable"), t.availableContainerElement.bind("dragover", function(e) {
                0 < t.selectedFromSelected.length && (e.preventDefault(), e.stopPropagation())
            }), t.availableContainerElement.bind("drop", function() {
                l(t.selectedFromSelected, t.containers.available)
            }), t.selectedContainerElement = e.find(".containerSelectionDialogSelected"), t.selectedContainerElement.bind("dragover", function(e) {
                0 < t.selectedFromAvailable.length && (e.preventDefault(), e.stopPropagation())
            }), t.selectedContainerElement.bind("drop", function() {
                l(t.selectedFromAvailable, t.containers.selected)
            }), t.availableVaultItemOverrides = {
                getContextMenuItems: function(e) {
                    return [new LPTools.ContextMenuItem(Constants.ACTION_ADD, {
                        text: t.getAddToSelectedText()
                    })]
                },
                isOverride: function(e) {
                    return e === Constants.ACTION_ADD
                },
                add: function() {
                    l(this.getItemsForAction(), t.containers.selected)
                }
            }, t.availableGroupOverrides = {
                getContextMenuItems: function(e) {
                    return [new LPTools.ContextMenuItem(Constants.ACTION_ADD, {
                        text: t.getAddToSelectedText()
                    })]
                },
                isOverride: function(e) {
                    return e === Constants.ACTION_ADD
                },
                add: function() {
                    l(this.getItemChildren(), t.containers.selected)
                }
            }, t.selectedVaultItemOverrides = {
                getContextMenuItems: function(e) {
                    return [new LPTools.ContextMenuItem(Constants.ACTION_REMOVE, {
                        text: t.getRemoveFromSelectedText()
                    })]
                },
                isOverride: function(e) {
                    return e === Constants.ACTION_REMOVE
                },
                remove: function() {
                    l(this.getItemsForAction(), t.containers.available)
                }
            }, t.selectedGroupOverrides = {
                getContextMenuItems: function(e) {
                    return [new LPTools.ContextMenuItem(Constants.ACTION_REMOVE, {
                        text: t.getRemoveFromSelectedText()
                    })]
                },
                isOverride: function(e) {
                    return e === Constants.ACTION_REMOVE
                },
                remove: function() {
                    l(this.getItemChildren(), t.containers.available)
                }
            }
        };
        var l = function(e, t) {
            for (var n = 0, a = (e = e.slice()).length; n < a; ++n) {
                var l = e[n],
                    o = l._parent._model,
                    i = l._model;
                l.destruct(), t.addChild(i.newDisplayObject(), o)
            }
        };
        ContainerSelectionDialog.prototype.getAddToSelectedText = function() {
            return Strings.translateString("Add to Selected")
        }, ContainerSelectionDialog.prototype.getRemoveFromSelectedText = function() {
            return Strings.translateString("Remove from Selected")
        }, ContainerSelectionDialog.prototype.setup = function(e, t) {
            var n;
            this.selectedFromAvailable = [], this.selectedFromSelected = [], (n = this).containers.available = new Container(n.getAvailableItems(t), {
                display: VaultItemBaseDisplay.prototype.DISPLAY_LIST,
                additionalItemClasses: "dialogItem noItemButtons",
                additionalGroupClasses: "dialogItemGroup",
                forceDrag: !0,
                allowDrop: !1,
                publishSelect: !1,
                dragstart: function() {
                    n.selectedFromAvailable = LPTools.getDragItems()
                },
                override: function() {
                    return this instanceof GroupDisplay ? n.availableGroupOverrides : n.availableVaultItemOverrides
                }
            }), n.containers.available.initialize(n.availableContainerElement.get(0)), n.containers.selected = new Container(n.getSelectedItems(t), {
                display: VaultItemBaseDisplay.prototype.DISPLAY_LIST,
                additionalItemClasses: "dialogItem noItemButtons",
                additionalGroupClasses: "dialogItemGroup",
                forceDrag: !0,
                allowDrop: !1,
                publishSelect: !1,
                dragstart: function() {
                    n.selectedFromSelected = LPTools.getDragItems()
                },
                override: function() {
                    return this instanceof GroupDisplay ? n.selectedGroupOverrides : n.selectedVaultItemOverrides
                }
            }), n.containers.selected.initialize(n.selectedContainerElement.get(0)), VaultItemDialog.prototype.setup.apply(this, arguments)
        }
    }(document);
//# sourceMappingURL=sourcemaps/containerSelectionDialog.js.map