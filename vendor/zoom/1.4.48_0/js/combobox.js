(function() {
    ComboBox = function(e, t) {
        this.edit = document.getElementById(e);
        if (!this.edit) {
            return null
        }
        var i = document.getElementById(e).parentNode.getElementsByTagName("DIV");
        if (i.length == 0 || i[0].className != "dropdownlist") {
            return null
        }
        this.dropdownlist = i[0];
        this.comboBoxDiv = this.dropdownlist.parentNode.parentNode.getElementsByTagName("DIV")[0];
        this.isOpen = false;
        this.switchOpen = function(e) {
            if (s.isOpen) {
                s.dropdownlist.style.display = "none";
                s.comboBoxDiv.className = "combobox";
                setTimeout(function() {
                    s.isOpen = false
                }, 150)
            } else {
                s.dropdownlist.style.display = "block";
                s.comboBoxDiv.className = "combobox combobox_active";
                setTimeout(function() {
                    s.isOpen = true;
                    s.edit.focus()
                }, 150)
            }
        };
        var n = this;
        n.fnChange = null;
        if (t && t.onChange) {
            n.fnChange = t.onChange
        }
        this.currentitem = null;
        this.currentitemindex = null;
        this.visiblecount = 0;
        var s = this;
        var r = document.getElementById(e).parentNode.getElementsByTagName("SPAN");
        r[0].onclick = function() {
            s.edit.click()
        };
        this.edit.onfocus = function() {
            if (!s.isOpen) s.switchOpen()
        };
        this.edit.onclick = function() {
            s.switchOpen()
        };
        this.edit.onblur = function() {
            if (l && s.isOpen) {
                s.switchOpen(true)
            }
        };
        var l = true;
        s.dropdownlist.onmousedown = function(e) {
            l = false;
            return false
        };
        s.dropdownlist.onmouseup = function(e) {
            setTimeout(function() {
                l = true
            }, 150);
            return false
        };
        this.listitems = this.dropdownlist.getElementsByTagName("A");
        for (var o = 0; o < this.listitems.length; o++) {
            var c = o;
            this.listitems[o].onclick = function() {
                var e = this.innerHTML;
                e = e.replace(/\<b\>/gi, "");
                e = e.replace(/\<\/b\>/gi, "");
                s.edit.value = e;
                if (n.fnChange) n.fnChange.apply(n, [e]);
                s.switchOpen();
                return false
            };
            this.listitems[o].onmouseover = function(e) {
                for (var t = 0; t < s.listitems.length; t++) {
                    if (this == s.listitems[t]) {
                        if (s.currentitem) {
                            s.currentitem.className = s.currentitem.className.replace(/light/g, "")
                        }
                        s.currentitem = s.listitems[t];
                        s.currentitemindex = t;
                        s.currentitem.className += " light"
                    }
                }
            }
        }
        this.edit.onkeydown = function(e) {
            e = e || window.event;
            if (e.keyCode == 13) {
                return false
            } else if (e.keyCode == 38) {
                var t = 0;
                if (s.visiblecount > 0) {
                    if (s.visiblecount == 1) {
                        s.currentitemindex = s.listitems.length - 1
                    }
                    do {
                        s.currentitemindex--;
                        t++
                    } while (s.currentitemindex > 0 && s.listitems[s.currentitemindex].style.display == "none");
                    if (s.currentitemindex < 0) s.currentitemindex = s.listitems.length - 1;
                    if (s.currentitem) {
                        s.currentitem.className = s.currentitem.className.replace(/light/g, "")
                    }
                    s.currentitem = s.listitems[s.currentitemindex];
                    s.currentitem.className += " light";
                    s.currentitem.scrollIntoView(false)
                }
                e.cancelBubble = true;
                if (navigator.appName != "Microsoft Internet Explorer") {
                    e.preventDefault();
                    e.stopPropagation()
                }
                return false
            } else if (e.keyCode == 40) {
                var i = 0;
                if (s.visiblecount > 0) {
                    do {
                        s.currentitemindex++
                    } while (s.currentitemindex < s.listitems.length && s.listitems[s.currentitemindex].style.display == "none");
                    if (s.currentitemindex >= s.listitems.length) s.currentitemindex = 0;
                    if (s.currentitem) {
                        s.currentitem.className = s.currentitem.className.replace(/light/g, "")
                    }
                    s.currentitem = s.listitems[s.currentitemindex];
                    s.currentitem.className += " light";
                    s.currentitem.scrollIntoView(false)
                }
                e.cancelBubble = true;
                if (navigator.appName != "Microsoft Internet Explorer") {
                    e.preventDefault();
                    e.stopPropagation()
                }
                return false
            }
        };
        this.edit.onkeyup = function(e) {
            e = e || window.event;
            if (e.keyCode == 9 || e.keyCode == 40 || e.keyCode == 38) {
                if (s.visiblecount == 0) {
                    s.visiblecount = s.listitems.length
                }
                return
            } else if (e.keyCode == 13) {
                if (s.visiblecount != 0 && s.currentitem) {
                    var t = s.currentitem.innerHTML;
                    s.edit.value = t
                }
                if (n.fnChange) {
                    n.fnChange.apply(n, [t])
                } else {
                    s.switchOpen();
                    e.cancelBubble = true;
                    return false
                }
            } else {}
        }
    }
})();