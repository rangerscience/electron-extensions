/*
: Gmail.js, Copyright (c) 2014 Kartik Talwar
 @license: Licensed under The MIT License.
 modified from https://github.com/KartikTalwar/gmail.js/tree/master
: date.js, Copyright (c) 2006-2008, Coolite Inc. (http://www.coolite.com/). All rights reserved.
 @license: Licensed under The MIT License. See license.txt and http://www.datejs.com/license/.
 @website: http://www.datejs.com/
: Licensed under The MIT License. See LICENSE.txt and https://bitbucket.org/pellepim/jstimezonedetect/src/default/LICENCE.txt
 @website: https://bitbucket.org/pellepim/jstimezonedetect/src/6c427658686c
: word_count licensed under Apache License.
 word_count function Ported from https://github.com/ipeirotis/ReadabilityMetrics based on StackOverflow recommendations
*/
var $jscomp = {
  scope: {},
  getGlobal: function(E) {
    return "undefined" != typeof window && window === E ? E : "undefined" != typeof global ? global : E
  }
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.patches = {};
$jscomp.patch = function(E, I) {
  ($jscomp.patches[E] = $jscomp.patches[E] || []).push(I);
  for (var B = $jscomp.global, H = E.split("."), P = 0; P < H.length - 1 && B; P++) B = B[H[P]];
  H = H[H.length - 1];
  B && B[H] instanceof Function && (B[H] = I(B[H]))
};
$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
$jscomp.initSymbol = function() {
  $jscomp.initSymbol = function() {};
  if (!$jscomp.global.Symbol) {
    $jscomp.global.Symbol = $jscomp.Symbol;
    var E = [],
      I = function(B) {
        return function(H) {
          E = [];
          H = B(H);
          for (var I = [], m = 0, D = H.length; m < D; m++) {
            var Y;
            a: if (Y = H[m], Y.length < $jscomp.SYMBOL_PREFIX.length) Y = !1;
              else {
                for (var ha = 0; ha < $jscomp.SYMBOL_PREFIX.length; ha++)
                  if (Y[ha] != $jscomp.SYMBOL_PREFIX[ha]) {
                    Y = !1;
                    break a
                  } Y = !0
              } Y ? E.push(H[m]) : I.push(H[m])
          }
          return I
        }
      };
    $jscomp.patch("Object.keys", I);
    $jscomp.patch("Object.getOwnPropertyNames",
      I);
    $jscomp.patch("Object.getOwnPropertySymbols", function(B) {
      return function(H) {
        I.unused = Object.getOwnPropertyNames(H);
        E.push.apply(B(H));
        return E
      }
    })
  }
};
$jscomp.symbolCounter_ = 0;
$jscomp.Symbol = function(E) {
  return $jscomp.SYMBOL_PREFIX + E + $jscomp.symbolCounter_++
};
$jscomp.initSymbolIterator = function() {
  $jscomp.initSymbol();
  $jscomp.global.Symbol.iterator || ($jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator"));
  $jscomp.initSymbolIterator = function() {}
};
$jscomp.makeIterator = function(E) {
  $jscomp.initSymbolIterator();
  $jscomp.initSymbol();
  $jscomp.initSymbolIterator();
  var I = E[Symbol.iterator];
  if (I) return I.call(E);
  var B = 0;
  return {
    next: function() {
      return B < E.length ? {
        done: !1,
        value: E[B++]
      } : {
        done: !0
      }
    }
  }
};
(function() {
  function E(a) {
    return 17 === a || 18 === a || 19 === a || a >= db
  }

  function I(b) {
    return /^[a-zA-Z0-9\._+\-]+@[a-zA-Z0-9\.\-]+\.[a-z\.A-Z]+$/.test(a.trim(b))
  }

  function B(a) {
    a = a || 0;
    var d;
    document.getElementById("b4g-style-css") || (d = document.createElement("link"), d.id = "b4g-style-css", d.type = "text/css", d.rel = "stylesheet", d.href = "https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/css/extensionsafestyle.css?v=3", d.media = "screen", d.onerror = function() {
      var d = document.getElementById("b4g-style-css");
      d.parentElement.removeChild(d);
      10 > a && B(a + 1)
    }, uc.appendChild(d));
    document.getElementById("b4g-jqueryui-css") || (d = document.createElement("link"), d.id = "b4g-jqueryui-css", d.type = "text/css", d.rel = "stylesheet", d.href = "https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/css/extensionsafejqueryui.css", d.media = "screen", d.onerror = function() {
      var d = document.getElementById("b4g-jqueryui-css");
      d.parentElement.removeChild(d);
      10 > a && B(a + 1)
    }, uc.appendChild(d))
  }

  function H() {
    ua = {};
    var a = window.location.toString(),
      d = a.indexOf("?"),
      c = a.lastIndexOf("#");
    0 > d || (0 > c && (c = a.length), a.substring(d + 1, c).split("&").forEach(function(a) {
      var d = a.indexOf("=");
      ua[a.substr(0, d)] = a.substr(d + 1)
    }))
  }

  function P(a, d) {
    var c = new XMLHttpRequest;
    c.open("GET", a, !0);
    c.onreadystatechange = function() {
      if (4 == c.readyState && 200 == c.status) {
        var a = document.createElement("script");
        a.text = c.responseText;
        document.head.appendChild(a).parentNode.removeChild(a);
        d && d()
      }
    };
    c.send()
  }

  function m() {
    ba === top.location.toString() && 0 > ba.indexOf("ContactManager") && 0 > ba.indexOf("mu/mp") && -1 === ba.indexOf("mail-static") &&
      1 < window.innerWidth && 1 < window.innerHeight && "true" !== document.body.contentEditable && -1 === document.body.className.indexOf("editable") && (H(), P("https://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js", function() {
        clearTimeout(vc);
        D()
      }), D(), B())
  }

  function D() {
    ba = String(document.location);
    "undefined" === typeof window.jQuery && 0 > ba.indexOf("ContactManager") ? vc = setTimeout(D, 500) : (a = qa = window.jQuery.noConflict(!0), window.boomerang4gmail.$ = a, setTimeout(pb, 0))
  }

  function Y(a) {
    var d = setInterval(function() {
      var c =
        y();
      null != c && "" !== c && (a(), clearInterval(d))
    }, 500)
  }

  function ha(b) {
    function d() {
      a("#loading").is(":visible") || (b(), clearInterval(c))
    }
    var c = setInterval(d, 1E3);
    d()
  }

  function pb() {
    function a() {
      var d = document.getElementById("canvas_frame");
      if (!d) return document;
      d = d.contentWindow || d.contentDocument;
      return d.document && (d = d.document), d
    }! function(a, b) {
      function e(b, c) {
        var e = b.nodeName.toLowerCase();
        if ("area" === e) {
          var h, e = b.parentNode,
            r = e.name;
          return !(!b.href || !r || "map" !== e.nodeName.toLowerCase()) && !!(h = a("img[usemap=#" +
            r + "]")[0]) && f(h)
        }
        return (/input|select|textarea|button|object/.test(e) ? !b.disabled : "a" == e ? b.href || c : c) && f(b)
      }

      function f(b) {
        return !a(b).parents().andSelf().filter(function() {
          return "hidden" === a.curCSS(this, "visibility") || a.expr.filters.hidden(this)
        }).length
      }
      a.ui = a.ui || {};
      a.ui.version || (a.extend(a.ui, {
        version: "1.8.13",
        keyCode: {
          ALT: 18,
          BACKSPACE: 8,
          CAPS_LOCK: 20,
          COMMA: 188,
          COMMAND: 91,
          COMMAND_LEFT: 91,
          COMMAND_RIGHT: 93,
          CONTROL: 17,
          DELETE: 46,
          DOWN: 40,
          END: 35,
          ENTER: 13,
          ESCAPE: 27,
          HOME: 36,
          INSERT: 45,
          LEFT: 37,
          MENU: 93,
          NUMPAD_ADD: 107,
          NUMPAD_DECIMAL: 110,
          NUMPAD_DIVIDE: 111,
          NUMPAD_ENTER: 108,
          NUMPAD_MULTIPLY: 106,
          NUMPAD_SUBTRACT: 109,
          PAGE_DOWN: 34,
          PAGE_UP: 33,
          PERIOD: 190,
          RIGHT: 39,
          SHIFT: 16,
          SPACE: 32,
          TAB: 9,
          UP: 38,
          WINDOWS: 91
        }
      }), a.fn.extend({
        _focus: a.fn.focus,
        focus: function(b, c) {
          return "number" == typeof b ? this.each(function() {
            var e = this;
            setTimeout(function() {
              a(e).focus();
              c && c.call(e)
            }, b)
          }) : this._focus.apply(this, arguments)
        },
        scrollParent: function() {
          var b;
          return b = a.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ?
            this.parents().filter(function() {
              return /(relative|absolute|fixed)/.test(a.curCSS(this, "position", 1)) && /(auto|scroll)/.test(a.curCSS(this, "overflow", 1) + a.curCSS(this, "overflow-y", 1) + a.curCSS(this, "overflow-x", 1))
            }).eq(0) : this.parents().filter(function() {
              return /(auto|scroll)/.test(a.curCSS(this, "overflow", 1) + a.curCSS(this, "overflow-y", 1) + a.curCSS(this, "overflow-x", 1))
            }).eq(0), /fixed/.test(this.css("position")) || !b.length ? a(document) : b
        },
        zIndex: function(b) {
          if (void 0 !== b) return this.css("zIndex", b);
          if (this.length) {
            var c,
              e;
            for (b = a(this[0]); b.length && b[0] !== document;) {
              if (("absolute" === (c = b.css("position")) || "relative" === c || "fixed" === c) && (e = parseInt(b.css("zIndex"), 10), !isNaN(e) && 0 !== e)) return e;
              b = b.parent()
            }
          }
          return 0
        },
        disableSelection: function() {
          return this.bind((a.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(a) {
            a.preventDefault()
          })
        },
        enableSelection: function() {
          return this.unbind(".ui-disableSelection")
        }
      }), a.each(["Width", "Height"], function(b, c) {
        function e(b, c, r, p) {
          return a.each(h,
            function() {
              c -= parseFloat(a.curCSS(b, "padding" + this, !0)) || 0;
              r && (c -= parseFloat(a.curCSS(b, "border" + this + "Width", !0)) || 0);
              p && (c -= parseFloat(a.curCSS(b, "margin" + this, !0)) || 0)
            }), c
        }
        var h = "Width" === c ? ["Left", "Right"] : ["Top", "Bottom"],
          r = c.toLowerCase(),
          p = {
            innerWidth: a.fn.innerWidth,
            innerHeight: a.fn.innerHeight,
            outerWidth: a.fn.outerWidth,
            outerHeight: a.fn.outerHeight
          };
        a.fn["inner" + c] = function(b) {
          return void 0 === b ? p["inner" + c].call(this) : this.each(function() {
            a(this).css(r, e(this, b) + "px")
          })
        };
        a.fn["outer" + c] =
          function(b, h) {
            return "number" != typeof b ? p["outer" + c].call(this, b) : this.each(function() {
              a(this).css(r, e(this, b, !0, h) + "px")
            })
          }
      }), a.extend(a.expr[":"], {
        data: function(b, c, e) {
          return !!a.data(b, e[3])
        },
        focusable: function(b) {
          return e(b, !isNaN(a.attr(b, "tabindex")))
        },
        tabbable: function(b) {
          var c = a.attr(b, "tabindex"),
            k = isNaN(c);
          return (k || 0 <= c) && e(b, !k)
        }
      }), a(function() {
        var b = document.body,
          c = b.appendChild(c = document.createElement("div"));
        a.extend(c.style, {
          minHeight: "100px",
          height: "auto",
          padding: 0,
          borderWidth: 0
        });
        a.support.minHeight = 100 === c.offsetHeight;
        a.support.selectstart = "onselectstart" in c;
        b.removeChild(c).style.display = "none"
      }), a.extend(a.ui, {
        plugin: {
          add: function(b, c, e) {
            b = a.ui[b].prototype;
            for (var h in e) b.plugins[h] = b.plugins[h] || [], b.plugins[h].push([c, e[h]])
          },
          call: function(a, d, b) {
            if ((d = a.plugins[d]) && a.element[0].parentNode)
              for (var h = 0; h < d.length; h++) a.options[d[h][0]] && d[h][1].apply(a.element, b)
          }
        },
        contains: function(a, d) {
          return document.compareDocumentPosition ? 16 & a.compareDocumentPosition(d) : a !==
            d && a.contains(d)
        },
        hasScroll: function(b, c) {
          if ("hidden" === a(b).css("overflow")) return !1;
          var e = c && "left" === c ? "scrollLeft" : "scrollTop",
            h = !1;
          return 0 < b[e] || (b[e] = 1, h = 0 < b[e], b[e] = 0, h)
        },
        isOverAxis: function(a, d, b) {
          return a > d && a < d + b
        },
        isOver: function(b, c, e, h, r, p) {
          return a.ui.isOverAxis(b, e, r) && a.ui.isOverAxis(c, h, p)
        }
      }))
    }(qa);
    (function(a, b) {
      if (a.cleanData) {
        var e = a.cleanData;
        a.cleanData = function(b) {
          for (var c, k = 0; null != (c = b[k]); k++) a(c).triggerHandler("remove");
          e(b)
        }
      } else {
        var f = a.fn.remove;
        a.fn.remove = function(b,
          c) {
          return this.each(function() {
            return c || b && !a.filter(b, [this]).length || a("*", this).add([this]).each(function() {
              a(this).triggerHandler("remove")
            }), f.call(a(this), b, c)
          })
        }
      }
      a.widget = function(b, c, e) {
        var h, r = b.split(".")[0];
        h = r + "-" + (b = b.split(".")[1]);
        e || (e = c, c = a.Widget);
        a.expr[":"][h] = function(h) {
          return !!a.data(h, b)
        };
        a[r] = a[r] || {};
        a[r][b] = function(a, d) {
          arguments.length && this._createWidget(a, d)
        };
        c = new c;
        c.options = a.extend(!0, {}, c.options);
        a[r][b].prototype = a.extend(!0, c, {
          namespace: r,
          widgetName: b,
          widgetEventPrefix: a[r][b].prototype.widgetEventPrefix ||
            b,
          widgetBaseClass: h
        }, e);
        a.widget.bridge(b, a[r][b])
      };
      a.widget.bridge = function(b, c) {
        a.fn[b] = function(e) {
          var h = "string" == typeof e,
            r = Array.prototype.slice.call(arguments, 1),
            p = this;
          return e = !h && r.length ? a.extend.apply(null, [!0, e].concat(r)) : e, h && "_" === e.charAt(0) ? p : (h ? this.each(function() {
            var h = a.data(this, b),
              c = h && a.isFunction(h[e]) ? h[e].apply(h, r) : h;
            if (c !== h && void 0 !== c) return p = c, !1
          }) : this.each(function() {
            var h = a.data(this, b);
            h ? h.option(e || {})._init() : a.data(this, b, new c(e, this))
          }), p)
        }
      };
      a.Widget = function(a,
        d) {
        arguments.length && this._createWidget(a, d)
      };
      a.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        options: {
          disabled: !1
        },
        _createWidget: function(b, c) {
          a.data(c, this.widgetName, this);
          this.element = a(c);
          this.options = a.extend(!0, {}, this.options, this._getCreateOptions(), b);
          var e = this;
          this.element.bind("remove." + this.widgetName, function() {
            e.destroy()
          });
          this._create();
          this._trigger("create");
          this._init()
        },
        _getCreateOptions: function() {
          return a.metadata && a.metadata.get(this.element[0])[this.widgetName]
        },
        _create: function() {},
        _init: function() {},
        destroy: function() {
          this.element.unbind("." + this.widgetName).removeData(this.widgetName);
          this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled ui-state-disabled")
        },
        widget: function() {
          return this.element
        },
        option: function(b, c) {
          var e = b;
          if (0 === arguments.length) return a.extend({}, this.options);
          if ("string" == typeof b) {
            if (void 0 === c) return this.options[b];
            (e = {})[b] = c
          }
          return this._setOptions(e), this
        },
        _setOptions: function(b) {
          var c =
            this;
          return a.each(b, function(a, d) {
            c._setOption(a, d)
          }), this
        },
        _setOption: function(a, d) {
          return this.options[a] = d, "disabled" === a && this.widget()[d ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled ui-state-disabled").attr("aria-disabled", d), this
        },
        enable: function() {
          return this._setOption("disabled", !1)
        },
        disable: function() {
          return this._setOption("disabled", !0)
        },
        _trigger: function(b, c, e) {
          var h = this.options[b];
          if (c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(),
            e = e || {}, c.originalEvent) {
            var r;
            for (b = a.event.props.length; b;) c[r = a.event.props[--b]] = c.originalEvent[r]
          }
          return this.element.trigger(c, e), !(a.isFunction(h) && !1 === h.call(this.element[0], c, e) || c.isDefaultPrevented())
        }
      }
    })(qa);
    (function(a, b) {
      a.ui = a.ui || {};
      var e = /left|center|right/,
        f = /top|center|bottom/,
        g = a.fn.position,
        l = a.fn.offset;
      a.fn.position = function(b) {
        if (!b || !b.of) return g.apply(this, arguments);
        b = a.extend({}, b);
        var h, c, p, l = a(b.of),
          w = l[0],
          C = (b.collision || "flip").split(" "),
          O = b.offset ? b.offset.split(" ") : [0, 0];
        return 9 === w.nodeType ? (h = l.width(), c = l.height(), p = {
          top: 0,
          left: 0
        }) : w.setTimeout ? (h = l.width(), c = l.height(), p = {
          top: l.scrollTop(),
          left: l.scrollLeft()
        }) : w.preventDefault ? (b.at = "left top", h = c = 0, p = {
          top: b.of.pageY,
          left: b.of.pageX
        }) : (h = l.outerWidth(), c = l.outerHeight(), p = l.offset()), a.each(["my", "at"], function() {
          var a = (b[this] || "").split(" ");
          1 === a.length && (a = e.test(a[0]) ? a.concat(["center"]) : f.test(a[0]) ? ["center"].concat(a) : ["center", "center"]);
          a[0] = e.test(a[0]) ? a[0] : "center";
          a[1] = f.test(a[1]) ? a[1] :
            "center";
          b[this] = a
        }), 1 === C.length && (C[1] = C[0]), O[0] = parseInt(O[0], 10) || 0, 1 === O.length && (O[1] = O[0]), O[1] = parseInt(O[1], 10) || 0, "right" === b.at[0] ? p.left += h : "center" === b.at[0] && (p.left += h / 2), "bottom" === b.at[1] ? p.top += c : "center" === b.at[1] && (p.top += c / 2), p.left += O[0], p.top += O[1], this.each(function() {
          var e, g = a(this),
            f = g.outerWidth(),
            l = g.outerHeight(),
            w = parseInt(a.curCSS(this, "marginLeft", !0)) || 0,
            t = parseInt(a.curCSS(this, "marginTop", !0)) || 0,
            n = f + w + (parseInt(a.curCSS(this, "marginRight", !0)) || 0),
            q = l + t + (parseInt(a.curCSS(this,
              "marginBottom", !0)) || 0),
            m = a.extend({}, p);
          "right" === b.my[0] ? m.left -= f : "center" === b.my[0] && (m.left -= f / 2);
          "bottom" === b.my[1] ? m.top -= l : "center" === b.my[1] && (m.top -= l / 2);
          m.left = Math.round(m.left);
          m.top = Math.round(m.top);
          e = {
            left: m.left - w,
            top: m.top - t
          };
          a.each(["left", "top"], function(p, g) {
            a.ui.position[C[p]] && a.ui.position[C[p]][g](m, {
              targetWidth: h,
              targetHeight: c,
              elemWidth: f,
              elemHeight: l,
              collisionPosition: e,
              collisionWidth: n,
              collisionHeight: q,
              offset: O,
              my: b.my,
              at: b.at
            })
          });
          a.fn.bgiframe && g.bgiframe();
          g.offset(a.extend(m, {
            using: b.using
          }))
        })
      };
      a.ui.position = {
        fit: {
          left: function(b, h) {
            var c = a(window),
              c = h.collisionPosition.left + h.collisionWidth - c.width() - c.scrollLeft();
            b.left = 0 < c ? b.left - c : Math.max(b.left - h.collisionPosition.left, b.left)
          },
          top: function(b, h) {
            var c = a(window),
              c = h.collisionPosition.top + h.collisionHeight - c.height() - c.scrollTop();
            b.top = 0 < c ? b.top - c : Math.max(b.top - h.collisionPosition.top, b.top)
          }
        },
        flip: {
          left: function(b, h) {
            if ("center" !== h.at[0]) {
              var c = a(window),
                c = h.collisionPosition.left + h.collisionWidth - c.width() -
                c.scrollLeft(),
                e = "left" === h.my[0] ? -h.elemWidth : "right" === h.my[0] ? h.elemWidth : 0,
                g = "left" === h.at[0] ? h.targetWidth : -h.targetWidth,
                f = -2 * h.offset[0];
              b.left += 0 > h.collisionPosition.left ? e + g + f : 0 < c ? e + g + f : 0
            }
          },
          top: function(b, h) {
            if ("center" !== h.at[1]) {
              var c = a(window),
                c = h.collisionPosition.top + h.collisionHeight - c.height() - c.scrollTop(),
                e = "top" === h.my[1] ? -h.elemHeight : "bottom" === h.my[1] ? h.elemHeight : 0,
                g = "top" === h.at[1] ? h.targetHeight : -h.targetHeight,
                f = -2 * h.offset[1];
              b.top += 0 > h.collisionPosition.top ? e + g + f : 0 < c ? e +
                g + f : 0
            }
          }
        }
      };
      a.offset.setOffset || (a.offset.setOffset = function(b, h) {
        /static/.test(a.curCSS(b, "position")) && (b.style.position = "relative");
        var c = a(b),
          e = c.offset(),
          g = parseInt(a.curCSS(b, "top", !0), 10) || 0,
          f = parseInt(a.curCSS(b, "left", !0), 10) || 0,
          e = {
            top: h.top - e.top + g,
            left: h.left - e.left + f
          };
        "using" in h ? h.using.call(b, e) : c.css(e)
      }, a.fn.offset = function(b) {
        var h = this[0];
        return h && h.ownerDocument ? b ? this.each(function() {
          a.offset.setOffset(this, b)
        }) : l.call(this) : null
      })
    })(qa);
    (function(a, b) {
      var e = {
          buttons: !0,
          height: !0,
          maxHeight: !0,
          maxWidth: !0,
          minHeight: !0,
          minWidth: !0,
          width: !0
        },
        f = {
          maxHeight: !0,
          maxWidth: !0,
          minHeight: !0,
          minWidth: !0
        },
        g = a.attrFn || {
          val: !0,
          css: !0,
          html: !0,
          text: !0,
          data: !0,
          width: !0,
          height: !0,
          offset: !0,
          click: !0
        };
      a.widget("ui.dialog", {
        options: {
          autoOpen: !0,
          buttons: {},
          closeOnEscape: !0,
          closeText: "close",
          dialogClass: "",
          draggable: !0,
          hide: null,
          height: "auto",
          maxHeight: !1,
          maxWidth: !1,
          minHeight: 150,
          minWidth: 150,
          modal: !1,
          position: {
            my: "center",
            at: "center",
            collision: "fit",
            using: function(b) {
              var c = a(this).css(b).offset().top;
              0 > c && a(this).css("top", b.top - c)
            }
          },
          resizable: !0,
          show: null,
          stack: !0,
          title: "",
          width: 300,
          zIndex: 1E3
        },
        _create: function() {
          this.originalTitle = this.element.attr("title");
          "string" != typeof this.originalTitle && (this.originalTitle = "");
          this.options.title = this.options.title || this.originalTitle;
          var b = this,
            c = b.options,
            h = c.title || "&#160;",
            e = a.ui.dialog.getTitleId(b.element),
            p = (b.uiDialog = a("<div></div>")).appendTo(document.body).hide().addClass("b4g-ui-dialog b4g-ui-widget b4g-ui-widget-content b4g-ui-corner-all " +
              c.dialogClass).css({
              zIndex: c.zIndex
            }).attr("tabIndex", -1).css("outline", 0).keydown(function(h) {
              c.closeOnEscape && h.keyCode && h.keyCode === a.ui.keyCode.ESCAPE && (b.close(h), h.preventDefault())
            }).attr({
              role: "dialog",
              "aria-labelledby": e
            }).mousedown(function(a) {
              b.moveToTop(!1, a)
            }),
            g = (b.element.show().removeAttr("title").addClass("b4g-ui-dialog-content b4g-ui-widget-content").appendTo(p), (b.uiDialogTitlebar = a("<div></div>")).addClass("b4g-ui-dialog-titlebar b4g-ui-widget-header b4g-ui-corner-all b4g-ui-helper-clearfix").prependTo(p)),
            f = a("<a></a>").addClass("b4g-ui-dialog-titlebar-close b4g-ui-corner-all").attr("role", "button").focus(function() {
              f.addClass("ui-state-focus")
            }).blur(function() {
              f.removeClass("ui-state-focus")
            }).click(function(a) {
              return b.close(a), !1
            }).appendTo(g);
          (b.uiDialogTitlebarCloseText = a("<span></span>")).addClass("ui-icon ui-icon-closethick").text(c.closeText).appendTo(f);
          a("<span></span>").addClass("b4g-ui-dialog-title").attr("id", e).html(h).prependTo(g);
          a.isFunction(c.beforeclose) && !a.isFunction(c.beforeClose) &&
            (c.beforeClose = c.beforeclose);
          g.find("*").add(g).disableSelection();
          c.draggable && a.fn.draggable && b._makeDraggable();
          c.resizable && a.fn.resizable && b._makeResizable();
          b._createButtons(c.buttons);
          b._isOpen = !1;
          a.fn.bgiframe && p.bgiframe()
        },
        _init: function() {
          this.options.autoOpen && this.open()
        },
        destroy: function() {
          return this.overlay && this.overlay.destroy(), this.uiDialog.hide(), this.element.unbind(".dialog").removeData("dialog").removeClass("b4g-ui-dialog-content b4g-ui-widget-content").hide().appendTo("body"),
            this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), this
        },
        widget: function() {
          return this.uiDialog
        },
        close: function(b) {
          var c, h, e = this;
          if (!1 !== e._trigger("beforeClose", b)) return e.overlay && e.overlay.destroy(), e.uiDialog.unbind("keypress.b4g-ui-dialog"), e._isOpen = !1, e.options.hide ? e.uiDialog.hide(e.options.hide, function() {
            e._trigger("close", b)
          }) : (e.uiDialog.hide(), e._trigger("close", b)), a.ui.dialog.overlay.resize(), e.options.modal && (c = 0, a(".b4g-ui-dialog").each(function() {
            this !==
              e.uiDialog[0] && (h = a(this).css("z-index"), isNaN(h) || (c = Math.max(c, h)))
          }), a.ui.dialog.maxZ = c), e
        },
        isOpen: function() {
          return this._isOpen
        },
        moveToTop: function(b, c) {
          var h, e = this.options;
          return e.modal && !b || !e.stack && !e.modal ? this._trigger("focus", c) : (e.zIndex > a.ui.dialog.maxZ && (a.ui.dialog.maxZ = e.zIndex), this.overlay && (a.ui.dialog.maxZ += 1, this.overlay.$el.css("z-index", a.ui.dialog.overlay.maxZ = a.ui.dialog.maxZ)), h = {
              scrollTop: this.element.attr("scrollTop"),
              scrollLeft: this.element.attr("scrollLeft")
            }, a.ui.dialog.maxZ +=
            1, this.uiDialog.css("z-index", a.ui.dialog.maxZ), this.element.attr(h), this._trigger("focus", c), this)
        },
        open: function() {
          if (!this._isOpen) {
            var b = this.options,
              c = this.uiDialog;
            return this.overlay = b.modal ? new a.ui.dialog.overlay(this) : null, this._size(), this._position(b.position), c.show(b.show), this.moveToTop(!0), b.modal && c.bind("keypress.b4g-ui-dialog", function(b) {
              if (b.keyCode === a.ui.keyCode.TAB) {
                var c = a(":tabbable", this),
                  e = c.filter(":first"),
                  c = c.filter(":last");
                return b.target !== c[0] || b.shiftKey ? b.target ===
                  e[0] && b.shiftKey ? (c.focus(1), !1) : void 0 : (e.focus(1), !1)
              }
            }), a(this.element.find(":tabbable").get().concat(c.find(".b4g-ui-dialog-buttonpane :tabbable").get().concat(c.get()))).eq(0).focus(), this._isOpen = !0, this._trigger("open"), this
          }
        },
        _createButtons: function(b) {
          var c = this,
            h = !1,
            e = a("<div></div>").addClass("b4g-ui-dialog-buttonpane b4g-ui-widget-content b4g-ui-helper-clearfix"),
            p = a("<div></div>").addClass("b4g-ui-dialog-buttonset").appendTo(e);
          c.uiDialog.find(".b4g-ui-dialog-buttonpane").remove();
          "object" ==
          typeof b && null !== b && a.each(b, function() {
            return !(h = !0)
          });
          h && (a.each(b, function(b, h) {
            h = a.isFunction(h) ? {
              click: h,
              text: b
            } : h;
            var e = a('<button type="button"></button>').click(function() {
              h.click.apply(c.element[0], arguments)
            }).appendTo(p);
            a.each(h, function(a, b) {
              "click" !== a && (a in g ? e[a](b) : e.attr(a, b))
            });
            a.fn.button && e.button()
          }), e.appendTo(c.uiDialog))
        },
        _makeDraggable: function() {
          function b(a) {
            return {
              position: a.position,
              offset: a.offset
            }
          }
          var c, h = this,
            e = h.options,
            p = a(document);
          h.uiDialog.draggable({
            cancel: ".b4g-ui-dialog-content, .b4g-ui-dialog-titlebar-close",
            handle: ".b4g-ui-dialog-titlebar",
            containment: "document",
            start: function(p, g) {
              c = "auto" === e.height ? "auto" : a(this).height();
              a(this).height(a(this).height()).addClass("b4g-ui-dialog-dragging");
              h._trigger("dragStart", p, b(g))
            },
            drag: function(a, d) {
              h._trigger("drag", a, b(d))
            },
            stop: function(g, f) {
              e.position = [f.position.left - p.scrollLeft(), f.position.top - p.scrollTop()];
              a(this).removeClass("b4g-ui-dialog-dragging").height(c);
              h._trigger("dragStop", g, b(f));
              a.ui.dialog.overlay.resize()
            }
          })
        },
        _makeResizable: function(b) {
          function c(a) {
            return {
              originalPosition: a.originalPosition,
              originalSize: a.originalSize,
              position: a.position,
              size: a.size
            }
          }
          b = void 0 === b ? this.options.resizable : b;
          var h = this,
            e = h.options,
            p = h.uiDialog.css("position");
          b = "string" == typeof b ? b : "n,e,s,w,se,sw,ne,nw";
          h.uiDialog.resizable({
            cancel: ".b4g-ui-dialog-content",
            containment: "document",
            alsoResize: h.element,
            maxWidth: e.maxWidth,
            maxHeight: e.maxHeight,
            minWidth: e.minWidth,
            minHeight: h._minHeight(),
            handles: b,
            start: function(b, e) {
              a(this).addClass("b4g-ui-dialog-resizing");
              h._trigger("resizeStart", b, c(e))
            },
            resize: function(a,
              b) {
              h._trigger("resize", a, c(b))
            },
            stop: function(b, p) {
              a(this).removeClass("b4g-ui-dialog-resizing");
              e.height = a(this).height();
              e.width = a(this).width();
              h._trigger("resizeStop", b, c(p));
              a.ui.dialog.overlay.resize()
            }
          }).css("position", p).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
        },
        _minHeight: function() {
          var a = this.options;
          return "auto" === a.height ? a.minHeight : Math.min(a.minHeight, a.height)
        },
        _position: function(b) {
          var c, h = [],
            e = [0, 0];
          b ? (("string" == typeof b || "object" == typeof b && "0" in b) &&
            (1 === (h = b.split ? b.split(" ") : [b[0], b[1]]).length && (h[1] = h[0]), a.each(["left", "top"], function(a, b) {
              +h[a] === h[a] && (e[a] = h[a], h[a] = b)
            }), b = {
              my: h.join(" "),
              at: h.join(" "),
              offset: e.join(" ")
            }), b = a.extend({}, a.ui.dialog.prototype.options.position, b)) : b = a.ui.dialog.prototype.options.position;
          (c = this.uiDialog.is(":visible")) || this.uiDialog.show();
          this.uiDialog.css({
            top: 0,
            left: 0
          }).position(a.extend({
            of: window
          }, b));
          c || this.uiDialog.hide()
        },
        _setOptions: function(b) {
          var c = this,
            h = {},
            r = !1;
          a.each(b, function(a, b) {
            c._setOption(a,
              b);
            a in e && (r = !0);
            a in f && (h[a] = b)
          });
          r && this._size();
          this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", h)
        },
        _setOption: function(b, c) {
          var h = this.uiDialog;
          switch (b) {
            case "beforeclose":
              b = "beforeClose";
              break;
            case "buttons":
              this._createButtons(c);
              break;
            case "closeText":
              this.uiDialogTitlebarCloseText.text("" + c);
              break;
            case "dialogClass":
              h.removeClass(this.options.dialogClass).addClass("b4g-ui-dialog b4g-ui-widget b4g-ui-widget-content b4g-ui-corner-all " + c);
              break;
            case "disabled":
              c ? h.addClass("b4g-ui-dialog-disabled") :
                h.removeClass("b4g-ui-dialog-disabled");
              break;
            case "draggable":
              var e = h.is(":data(draggable)");
              e && !c && h.draggable("destroy");
              !e && c && this._makeDraggable();
              break;
            case "position":
              this._position(c);
              break;
            case "resizable":
              (e = h.is(":data(resizable)")) && !c && h.resizable("destroy");
              e && "string" == typeof c && h.resizable("option", "handles", c);
              e || !1 === c || this._makeResizable(c);
              break;
            case "title":
              a(".b4g-ui-dialog-title", this.uiDialogTitlebar).html("" + (c || "&#160;"))
          }
          a.Widget.prototype._setOption.apply(this, arguments)
        },
        _size: function() {
          var b, c, h = this.options,
            e = this.uiDialog.is(":visible");
          (this.element.show().css({
            width: "auto",
            minHeight: 0,
            height: 0
          }), h.minWidth > h.width && (h.width = h.minWidth), b = this.uiDialog.css({
            height: "auto",
            width: h.width
          }).height(), c = Math.max(0, h.minHeight - b), "auto" === h.height) ? a.support.minHeight ? this.element.css({
            minHeight: c,
            height: "auto"
          }) : (this.uiDialog.show(), b = this.element.css("height", "auto").height(), e || this.uiDialog.hide(), this.element.height(Math.max(b, c))): this.element.height(Math.max(h.height -
            b, 0));
          this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        }
      });
      a.extend(a.ui.dialog, {
        version: "1.8.13",
        uuid: 0,
        maxZ: 0,
        getTitleId: function(a) {
          a = a.attr("id");
          return a || (this.uuid += 1, a = this.uuid), "b4g-ui-dialog-title-" + a
        },
        overlay: function(b) {
          this.$el = a.ui.dialog.overlay.create(b)
        }
      });
      a.extend(a.ui.dialog.overlay, {
        instances: [],
        oldInstances: [],
        maxZ: 0,
        events: a.map("focus mousedown mouseup keydown keypress click".split(" "), function(a) {
          return a + ".dialog-overlay"
        }).join(" "),
        create: function(b) {
          0 === this.instances.length && (setTimeout(function() {
            a.ui.dialog.overlay.instances.length && a(document).bind(a.ui.dialog.overlay.events, function(b) {
              if (a(b.target).zIndex() < a.ui.dialog.overlay.maxZ) return !1
            })
          }, 1), a(document).bind("keydown.dialog-overlay", function(c) {
            b.options.closeOnEscape && c.keyCode && c.keyCode === a.ui.keyCode.ESCAPE && (b.close(c), c.preventDefault())
          }), a(window).bind("resize.dialog-overlay", a.ui.dialog.overlay.resize));
          var c = (this.oldInstances.pop() || a("<div></div>").addClass("b4g-ui-widget-overlay")).appendTo(document.body).css({
            width: this.width(),
            height: this.height()
          });
          return a.fn.bgiframe && c.bgiframe(), this.instances.push(c), c
        },
        destroy: function(b) {
          var c = a.inArray(b, this.instances); - 1 != c && this.oldInstances.push(this.instances.splice(c, 1)[0]);
          0 === this.instances.length && a([document, window]).unbind(".dialog-overlay");
          b.remove();
          var h = 0;
          a.each(this.instances, function() {
            h = Math.max(h, this.css("z-index"))
          });
          this.maxZ = h
        },
        height: function() {
          var b, c;
          return a.browser.msie && 7 > a.browser.version ? (b = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight),
            c = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight), b < c ? a(window).height() + "px" : b + "px") : a(document).height() + "px"
        },
        width: function() {
          var b, c;
          return a.browser.msie && 7 > a.browser.version ? (b = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth), c = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth), b < c ? a(window).width() + "px" : b + "px") : a(document).width() + "px"
        },
        resize: function() {
          var b = a([]);
          a.each(a.ui.dialog.overlay.instances, function() {
            b = b.add(this)
          });
          b.css({
            width: 0,
            height: 0
          }).css({
            width: a.ui.dialog.overlay.width(),
            height: a.ui.dialog.overlay.height()
          })
        }
      });
      a.extend(a.ui.dialog.overlay.prototype, {
        destroy: function() {
          a.ui.dialog.overlay.destroy(this.$el)
        }
      })
    })(qa);
    (function(d, c) {
      function e() {
        this.debug = !1;
        this._curInst = null;
        this._keyEvent = !1;
        this._disabledInputs = [];
        this._inDialog = this._datepickerShowing = !1;
        this._mainDivId = "b4g-ui-datepicker-div";
        this._inlineClass = "b4g-ui-datepicker-inline";
        this._appendClass = "b4g-ui-datepicker-append";
        this._triggerClass =
          "b4g-ui-datepicker-trigger";
        this._dialogClass = "b4g-ui-datepicker-dialog";
        this._disableClass = "b4g-ui-datepicker-disabled";
        this._unselectableClass = "b4g-ui-datepicker-unselectable";
        this._currentClass = "b4g-ui-datepicker-current-day";
        this._dayOverClass = "b4g-ui-datepicker-days-cell-over";
        this.regional = [];
        this.regional[""] = {
          closeText: "Done",
          prevText: "Prev",
          nextText: "Next",
          currentText: "Today",
          monthNames: "January February March April May June July August September October November December".split(" "),
          monthNamesShort: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
          dayNames: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
          dayNamesShort: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
          dayNamesMin: "Su Mo Tu We Th Fr Sa".split(" "),
          weekHeader: "Wk",
          dateFormat: "mm/dd/yy",
          firstDay: 0,
          isRTL: !1,
          showMonthAfterYear: !1,
          yearSuffix: ""
        };
        this._defaults = {
          showOn: "focus",
          showAnim: "fadeIn",
          showOptions: {},
          defaultDate: null,
          appendText: "",
          buttonText: "...",
          buttonImage: "",
          buttonImageOnly: !1,
          hideIfNoPrevNext: !1,
          navigationAsDateFormat: !1,
          gotoCurrent: !1,
          changeMonth: !1,
          changeYear: !1,
          yearRange: "c-10:c+10",
          showOtherMonths: !1,
          selectOtherMonths: !1,
          showWeek: !1,
          calculateWeek: this.iso8601Week,
          shortYearCutoff: "+10",
          minDate: null,
          maxDate: null,
          duration: "fast",
          beforeShowDay: null,
          beforeShow: null,
          onSelect: null,
          onChangeMonthYear: null,
          onClose: null,
          numberOfMonths: 1,
          showCurrentAtPos: 0,
          stepMonths: 1,
          stepBigMonths: 12,
          altField: "",
          altFormat: "",
          constrainInput: !0,
          showButtonPanel: !1,
          autoSize: !1
        };
        d.extend(this._defaults, this.regional[""]);
        this.dpDiv = f(d('<div id="' + this._mainDivId + '" class="b4g-ui-datepicker b4g-ui-widget b4g-ui-widget-content b4g-ui-helper-clearfix b4g-ui-corner-all"></div>'))
      }

      function f(a) {
        return a.delegate("button, .b4g-ui-datepicker-prev, .b4g-ui-datepicker-next, .b4g-ui-datepicker-calendar td a", "mouseout", function() {
          d(this).removeClass("ui-state-hover"); - 1 != this.className.indexOf("b4g-ui-datepicker-prev") && d(this).removeClass("b4g-ui-datepicker-prev-hover"); - 1 != this.className.indexOf("b4g-ui-datepicker-next") && d(this).removeClass("b4g-ui-datepicker-next-hover")
        }).delegate("button, .b4g-ui-datepicker-prev, .b4g-ui-datepicker-next, .b4g-ui-datepicker-calendar td a",
          "mouseover",
          function() {
            d.datepicker._isDisabledDatepicker(k.inline ? a.parent()[0] : k.input[0]) || (d(this).parents(".b4g-ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), d(this).addClass("ui-state-hover"), -1 != this.className.indexOf("b4g-ui-datepicker-prev") && d(this).addClass("b4g-ui-datepicker-prev-hover"), -1 != this.className.indexOf("b4g-ui-datepicker-next") && d(this).addClass("b4g-ui-datepicker-next-hover"))
          })
      }

      function g(a, b) {
        d.extend(a, b);
        for (var e in b) null != b[e] && b[e] != c || (a[e] = b[e]);
        return a
      }
      d.extend(d.ui, {
        datepicker: {
          version: "1.8.13"
        }
      });
      var l = (new Date).getTime(),
        k;
      d.extend(e.prototype, {
        markerClassName: "hasDatepicker",
        log: function() {
          this.debug && console.log.apply("", arguments)
        },
        _widgetDatepicker: function() {
          return this.dpDiv
        },
        setDefaults: function(a) {
          return g(this._defaults, a || {}), this
        },
        _attachDatepicker: function(a, b) {
          var c = null,
            e;
          for (e in this._defaults) {
            var g = a.getAttribute("date:" + e);
            if (g) {
              c = c || {};
              try {
                c[e] = eval(g)
              } catch (f) {
                c[e] = g
              }
            }
          }
          e = a.nodeName.toLowerCase();
          g = "div" == e || "span" ==
            e;
          a.id || (this.uuid += 1, a.id = "dp" + this.uuid);
          var k = this._newInst(d(a), g);
          k.settings = d.extend({}, b || {}, c || {});
          "input" == e ? this._connectDatepicker(a, k) : g && this._inlineDatepicker(a, k)
        },
        _newInst: function(a, b) {
          return {
            id: a[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1"),
            input: a,
            selectedDay: 0,
            selectedMonth: 0,
            selectedYear: 0,
            drawMonth: 0,
            drawYear: 0,
            inline: b,
            dpDiv: b ? f(d('<div class="' + this._inlineClass + ' b4g-ui-datepicker b4g-ui-widget b4g-ui-widget-content b4g-ui-helper-clearfix b4g-ui-corner-all"></div>')) : this.dpDiv
          }
        },
        _connectDatepicker: function(a, b) {
          var c = d(a);
          b.append = d([]);
          b.trigger = d([]);
          c.hasClass(this.markerClassName) || (this._attachments(c, b), c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function(a, d, c) {
            b.settings[d] = c
          }).bind("getData.datepicker", function(a, d) {
            return this._get(b, d)
          }), this._autoSize(b), d.data(a, "datepicker", b))
        },
        _attachments: function(a, b) {
          var c = this._get(b, "appendText"),
            e = this._get(b, "isRTL");
          b.append && b.append.remove();
          c && (b.append = d('<span class="' + this._appendClass + '">' + c + "</span>"), a[e ? "before" : "after"](b.append));
          a.unbind("focus", this._showDatepicker);
          b.trigger && b.trigger.remove();
          c = this._get(b, "showOn");
          if ("focus" != c && "both" != c || a.focus(this._showDatepicker), "button" == c || "both" == c) {
            var c = this._get(b, "buttonText"),
              g = this._get(b, "buttonImage");
            b.trigger = d(this._get(b, "buttonImageOnly") ? d("<img/>").addClass(this._triggerClass).attr({
              src: g,
              alt: c,
              title: c
            }) : d('<button type="button"></button>').addClass(this._triggerClass).html("" ==
              g ? c : d("<img/>").attr({
                src: g,
                alt: c,
                title: c
              })));
            a[e ? "before" : "after"](b.trigger);
            b.trigger.click(function() {
              return d.datepicker._datepickerShowing && d.datepicker._lastInput == a[0] ? d.datepicker._hideDatepicker() : d.datepicker._showDatepicker(a[0]), !1
            })
          }
        },
        _autoSize: function(a) {
          if (this._get(a, "autoSize") && !a.inline) {
            var b = new Date(2009, 11, 20),
              d = this._get(a, "dateFormat");
            if (d.match(/[DM]/)) {
              var c = function(a) {
                for (var b = 0, d = 0, c = 0; c < a.length; c++) a[c].length > b && (b = a[c].length, d = c);
                return d
              };
              b.setMonth(c(this._get(a,
                d.match(/MM/) ? "monthNames" : "monthNamesShort")));
              b.setDate(c(this._get(a, d.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - b.getDay())
            }
            a.input.attr("size", this._formatDate(a, b).length)
          }
        },
        _inlineDatepicker: function(a, b) {
          var c = d(a);
          c.hasClass(this.markerClassName) || (c.addClass(this.markerClassName).append(b.dpDiv).bind("setData.datepicker", function(a, d, c) {
              b.settings[d] = c
            }).bind("getData.datepicker", function(a, d) {
              return this._get(b, d)
            }), d.data(a, "datepicker", b), this._setDate(b, this._getDefaultDate(b), !0),
            this._updateDatepicker(b), this._updateAlternate(b), b.dpDiv.show())
        },
        _dialogDatepicker: function(a, b, c, e, f) {
          a = this._dialogInst;
          a || (this.uuid += 1, this._dialogInput = d('<input type="text" id="dp' + this.uuid + '" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>'), this._dialogInput.keydown(this._doKeyDown), d("body").append(this._dialogInput), (a = this._dialogInst = this._newInst(this._dialogInput, !1)).settings = {}, d.data(this._dialogInput[0], "datepicker", a));
          (g(a.settings, e || {}), b = b && b.constructor ==
            Date ? this._formatDate(a, b) : b, this._dialogInput.val(b), this._pos = f ? f.length ? f : [f.pageX, f.pageY] : null, this._pos) || (this._pos = [document.documentElement.clientWidth / 2 - 100 + (document.documentElement.scrollLeft || document.body.scrollLeft), document.documentElement.clientHeight / 2 - 150 + (document.documentElement.scrollTop || document.body.scrollTop)]);
          return this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), a.settings.onSelect = c, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass),
            this._showDatepicker(this._dialogInput[0]), d.blockUI && d.blockUI(this.dpDiv), d.data(this._dialogInput[0], "datepicker", a), this
        },
        _destroyDatepicker: function(a) {
          var b = d(a),
            c = d.data(a, "datepicker");
          if (b.hasClass(this.markerClassName)) {
            var e = a.nodeName.toLowerCase();
            d.removeData(a, "datepicker");
            "input" == e ? (c.append.remove(), c.trigger.remove(), b.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) :
              "div" != e && "span" != e || b.removeClass(this.markerClassName).empty()
          }
        },
        _enableDatepicker: function(a) {
          var b = d(a),
            c = d.data(a, "datepicker");
          if (b.hasClass(this.markerClassName)) {
            var e = a.nodeName.toLowerCase();
            if ("input" == e) a.disabled = !1, c.trigger.filter("button").each(function() {
              this.disabled = !1
            }).end().filter("img").css({
              opacity: "1.0",
              cursor: ""
            });
            else if ("div" == e || "span" == e) b = b.children("." + this._inlineClass), b.children().removeClass("ui-state-disabled"), b.find("select.b4g-ui-datepicker-month, select.b4g-ui-datepicker-year").removeAttr("disabled");
            this._disabledInputs = d.map(this._disabledInputs, function(b) {
              return b == a ? null : b
            })
          }
        },
        _disableDatepicker: function(a) {
          var b = d(a),
            c = d.data(a, "datepicker");
          if (b.hasClass(this.markerClassName)) {
            var e = a.nodeName.toLowerCase();
            if ("input" == e) a.disabled = !0, c.trigger.filter("button").each(function() {
              this.disabled = !0
            }).end().filter("img").css({
              opacity: "0.5",
              cursor: "default"
            });
            else if ("div" == e || "span" == e) b = b.children("." + this._inlineClass), b.children().addClass("ui-state-disabled"), b.find("select.b4g-ui-datepicker-month, select.b4g-ui-datepicker-year").attr("disabled",
              "disabled");
            this._disabledInputs = d.map(this._disabledInputs, function(b) {
              return b == a ? null : b
            });
            this._disabledInputs[this._disabledInputs.length] = a
          }
        },
        _isDisabledDatepicker: function(a) {
          if (!a) return !1;
          for (var b = 0; b < this._disabledInputs.length; b++)
            if (this._disabledInputs[b] == a) return !0;
          return !1
        },
        _getInst: function(a) {
          try {
            return d.data(a, "datepicker")
          } catch (b) {
            throw "Missing instance data for this datepicker";
          }
        },
        _optionDatepicker: function(a, b, e) {
          var f = this._getInst(a);
          if (2 == arguments.length && "string" == typeof b) return "defaults" ==
            b ? d.extend({}, d.datepicker._defaults) : f ? "all" == b ? d.extend({}, f.settings) : this._get(f, b) : null;
          var k = b || {};
          if ("string" == typeof b && ((k = {})[b] = e), f) {
            this._curInst == f && this._hideDatepicker();
            var l = this._getDateDatepicker(a, !0),
              O = this._getMinMaxDate(f, "min"),
              S = this._getMinMaxDate(f, "max");
            g(f.settings, k);
            null !== O && k.dateFormat !== c && k.minDate === c && (f.settings.minDate = this._formatDate(f, O));
            null !== S && k.dateFormat !== c && k.maxDate === c && (f.settings.maxDate = this._formatDate(f, S));
            this._attachments(d(a), f);
            this._autoSize(f);
            this._setDate(f, l);
            this._updateAlternate(f);
            this._updateDatepicker(f)
          }
        },
        _changeDatepicker: function(a, b, d) {
          this._optionDatepicker(a, b, d)
        },
        _refreshDatepicker: function(a) {
          (a = this._getInst(a)) && this._updateDatepicker(a)
        },
        _setDateDatepicker: function(a, b) {
          var d = this._getInst(a);
          d && (this._setDate(d, b), this._updateDatepicker(d), this._updateAlternate(d))
        },
        _getDateDatepicker: function(a, b) {
          var d = this._getInst(a);
          return d && !d.inline && this._setDateFromField(d, b), d ? this._getDate(d) : null
        },
        _doKeyDown: function(a) {
          var b =
            d.datepicker._getInst(a.target),
            c = !0,
            e = b.dpDiv.is(".b4g-ui-datepicker-rtl");
          if (b._keyEvent = !0, d.datepicker._datepickerShowing) switch (a.keyCode) {
            case 9:
              d.datepicker._hideDatepicker();
              c = !1;
              break;
            case 13:
              return c = d("td." + d.datepicker._dayOverClass + ":not(." + d.datepicker._currentClass + ")", b.dpDiv), c[0] ? d.datepicker._selectDay(a.target, b.selectedMonth, b.selectedYear, c[0]) : d.datepicker._hideDatepicker(), !1;
            case 27:
              d.datepicker._hideDatepicker();
              break;
            case 33:
              d.datepicker._adjustDate(a.target, a.ctrlKey ? -d.datepicker._get(b,
                "stepBigMonths") : -d.datepicker._get(b, "stepMonths"), "M");
              break;
            case 34:
              d.datepicker._adjustDate(a.target, a.ctrlKey ? +d.datepicker._get(b, "stepBigMonths") : +d.datepicker._get(b, "stepMonths"), "M");
              break;
            case 35:
              (a.ctrlKey || a.metaKey) && d.datepicker._clearDate(a.target);
              c = a.ctrlKey || a.metaKey;
              break;
            case 36:
              (a.ctrlKey || a.metaKey) && d.datepicker._gotoToday(a.target);
              c = a.ctrlKey || a.metaKey;
              break;
            case 37:
              (a.ctrlKey || a.metaKey) && d.datepicker._adjustDate(a.target, e ? 1 : -1, "D");
              c = a.ctrlKey || a.metaKey;
              a.originalEvent.altKey &&
                d.datepicker._adjustDate(a.target, a.ctrlKey ? -d.datepicker._get(b, "stepBigMonths") : -d.datepicker._get(b, "stepMonths"), "M");
              break;
            case 38:
              (a.ctrlKey || a.metaKey) && d.datepicker._adjustDate(a.target, -7, "D");
              c = a.ctrlKey || a.metaKey;
              break;
            case 39:
              (a.ctrlKey || a.metaKey) && d.datepicker._adjustDate(a.target, e ? -1 : 1, "D");
              c = a.ctrlKey || a.metaKey;
              a.originalEvent.altKey && d.datepicker._adjustDate(a.target, a.ctrlKey ? +d.datepicker._get(b, "stepBigMonths") : +d.datepicker._get(b, "stepMonths"), "M");
              break;
            case 40:
              (a.ctrlKey ||
                a.metaKey) && d.datepicker._adjustDate(a.target, 7, "D");
              c = a.ctrlKey || a.metaKey;
              break;
            default:
              c = !1
          } else 36 == a.keyCode && a.ctrlKey ? d.datepicker._showDatepicker(this) : c = !1;
          c && (a.preventDefault(), a.stopPropagation())
        },
        _doKeyPress: function(a) {
          var b = d.datepicker._getInst(a.target);
          if (d.datepicker._get(b, "constrainInput")) {
            var b = d.datepicker._possibleChars(d.datepicker._get(b, "dateFormat")),
              e = String.fromCharCode(a.charCode == c ? a.keyCode : a.charCode);
            return a.ctrlKey || a.metaKey || " " > e || !b || -1 < b.indexOf(e)
          }
        },
        _doKeyUp: function(a) {
          a =
            d.datepicker._getInst(a.target);
          if (a.input.val() != a.lastVal) try {
            d.datepicker.parseDate(d.datepicker._get(a, "dateFormat"), a.input ? a.input.val() : null, d.datepicker._getFormatConfig(a)) && (d.datepicker._setDateFromField(a), d.datepicker._updateAlternate(a), d.datepicker._updateDatepicker(a))
          } catch (b) {
            d.datepicker.log(b)
          }
          return !0
        },
        _showDatepicker: function(a) {
          if ("input" != (a = a.target || a).nodeName.toLowerCase() && (a = d("input", a.parentNode)[0]), !d.datepicker._isDisabledDatepicker(a) && d.datepicker._lastInput !=
            a) {
            var b = d.datepicker._getInst(a);
            d.datepicker._curInst && d.datepicker._curInst != b && d.datepicker._curInst.dpDiv.stop(!0, !0);
            var c = d.datepicker._get(b, "beforeShow");
            g(b.settings, c ? c.apply(a, [a, b]) : {});
            b.lastVal = null;
            d.datepicker._lastInput = a;
            d.datepicker._setDateFromField(b);
            d.datepicker._inDialog && (a.value = "");
            d.datepicker._pos || (d.datepicker._pos = d.datepicker._findPos(a), d.datepicker._pos[1] += a.offsetHeight);
            var e = !1;
            d(a).parents().each(function() {
              return !(e |= "fixed" == d(this).css("position"))
            });
            e &&
              d.browser.opera && (d.datepicker._pos[0] -= document.documentElement.scrollLeft, d.datepicker._pos[1] -= document.documentElement.scrollTop);
            c = {
              left: d.datepicker._pos[0],
              top: d.datepicker._pos[1]
            };
            if (d.datepicker._pos = null, b.dpDiv.empty(), b.dpDiv.css({
                position: "absolute",
                display: "block",
                top: "-1000px"
              }), d.datepicker._updateDatepicker(b), c = d.datepicker._checkOffset(b, c, e), b.dpDiv.css({
                position: d.datepicker._inDialog && d.blockUI ? "static" : e ? "fixed" : "absolute",
                display: "none",
                left: c.left + "px",
                top: c.top + "px"
              }), !b.inline) {
              var c =
                d.datepicker._get(b, "showAnim"),
                f = d.datepicker._get(b, "duration"),
                k = function() {
                  var a = b.dpDiv.find("iframe.b4g-ui-datepicker-cover");
                  if (a.length) {
                    var c = d.datepicker._getBorders(b.dpDiv);
                    a.css({
                      left: -c[0],
                      top: -c[1],
                      width: b.dpDiv.outerWidth(),
                      height: b.dpDiv.outerHeight()
                    })
                  }
                };
              b.dpDiv.zIndex(d(a).zIndex() + 1);
              d.datepicker._datepickerShowing = !0;
              d.effects && d.effects[c] ? b.dpDiv.show(c, d.datepicker._get(b, "showOptions"), f, k) : b.dpDiv[c || "show"](c ? f : null, k);
              c && f || k();
              b.input.is(":visible") && !b.input.is(":disabled") &&
                b.input.focus();
              d.datepicker._curInst = b
            }
          }
        },
        _updateDatepicker: function(a) {
          var b = d.datepicker._getBorders(a.dpDiv);
          k = a;
          a.dpDiv.empty().append(this._generateHTML(a));
          var c = a.dpDiv.find("iframe.b4g-ui-datepicker-cover");
          c.length && c.css({
            left: -b[0],
            top: -b[1],
            width: a.dpDiv.outerWidth(),
            height: a.dpDiv.outerHeight()
          });
          a.dpDiv.find("." + this._dayOverClass + " a").mouseover();
          b = this._getNumberOfMonths(a);
          c = b[1];
          if (a.dpDiv.removeClass("b4g-ui-datepicker-multi-2 b4g-ui-datepicker-multi-3 b4g-ui-datepicker-multi-4").width(""),
            1 < c && a.dpDiv.addClass("b4g-ui-datepicker-multi-" + c).css("width", 17 * c + "em"), a.dpDiv[(1 != b[0] || 1 != b[1] ? "add" : "remove") + "Class"]("b4g-ui-datepicker-multi"), a.dpDiv[(this._get(a, "isRTL") ? "add" : "remove") + "Class"]("b4g-ui-datepicker-rtl"), a == d.datepicker._curInst && d.datepicker._datepickerShowing && a.input && a.input.is(":visible") && !a.input.is(":disabled") && a.input[0] != document.activeElement && a.input.focus(), a.yearshtml) {
            var e = a.yearshtml;
            setTimeout(function() {
              e === a.yearshtml && a.yearshtml && a.dpDiv.find("select.b4g-ui-datepicker-year:first").replaceWith(a.yearshtml);
              e = a.yearshtml = null
            }, 0)
          }
          a.dpDiv.find("[b4gonclick]").each(function() {
            d(this).click(function() {
              var a = d(this).attr("b4gonclick");
              eval(a)
            })
          });
          a.dpDiv.find("[b4gonchange]").each(function() {
            d(this).click(function() {
              var a = d(this).attr("b4gOnChange");
              eval(a)
            })
          });
          d(".ui-icon").css("background-image", "url(https://b4g.baydin.com/site_media/bookmarklet/ui-icons.png)")
        },
        _getBorders: function(a) {
          var b = function(a) {
            return {
              thin: 1,
              medium: 2,
              thick: 3
            } [a] || a
          };
          return [parseFloat(b(a.css("border-left-width"))), parseFloat(b(a.css("border-top-width")))]
        },
        _checkOffset: function(a, b, c) {
          var e = a.dpDiv.outerWidth(),
            f = a.dpDiv.outerHeight(),
            g = a.input ? a.input.outerWidth() : 0,
            k = a.input ? a.input.outerHeight() : 0,
            l = document.documentElement.clientWidth + d(document).scrollLeft(),
            na = document.documentElement.clientHeight + d(document).scrollTop();
          return b.left -= this._get(a, "isRTL") ? e - g : 0, b.left -= c && b.left == a.input.offset().left ? d(document).scrollLeft() : 0, b.top -= c && b.top == a.input.offset().top + k ? d(document).scrollTop() : 0, b.left -= Math.min(b.left, b.left + e > l && l > e ? Math.abs(b.left +
            e - l) : 0), b.top -= Math.min(b.top, b.top + f > na && na > f ? Math.abs(f + k) : 0), b
        },
        _findPos: function(a) {
          for (var b = this._getInst(a), b = this._get(b, "isRTL"); a && ("hidden" == a.type || 1 != a.nodeType || d.expr.filters.hidden(a));) a = a[b ? "previousSibling" : "nextSibling"];
          a = d(a).offset();
          return [a.left, a.top]
        },
        _hideDatepicker: function(a) {
          var b = this._curInst;
          if (b && (!a || b == d.data(a, "datepicker")) && this._datepickerShowing) {
            a = this._get(b, "showAnim");
            var c = this._get(b, "duration"),
              e = function() {
                d.datepicker._tidyDialog(b);
                this._curInst =
                  null
              };
            d.effects && d.effects[a] ? b.dpDiv.hide(a, d.datepicker._get(b, "showOptions"), c, e) : b.dpDiv["slideDown" == a ? "slideUp" : "fadeIn" == a ? "fadeOut" : "hide"](a ? c : null, e);
            a || e();
            (a = this._get(b, "onClose")) && a.apply(b.input ? b.input[0] : null, [b.input ? b.input.val() : "", b]);
            this._datepickerShowing = !1;
            this._lastInput = null;
            this._inDialog && (this._dialogInput.css({
              position: "absolute",
              left: "0",
              top: "-100px"
            }), d.blockUI && (d.unblockUI(), d("body").append(this.dpDiv)));
            this._inDialog = !1
          }
        },
        _tidyDialog: function(a) {
          a.dpDiv.removeClass(this._dialogClass).unbind(".b4g-ui-datepicker-calendar")
        },
        _checkExternalClick: function(a) {
          d.datepicker._curInst && (a = d(a.target), a[0].id == d.datepicker._mainDivId || 0 != a.parents("#" + d.datepicker._mainDivId).length || a.hasClass(d.datepicker.markerClassName) || a.hasClass(d.datepicker._triggerClass) || !d.datepicker._datepickerShowing || d.datepicker._inDialog && d.blockUI || d.datepicker._hideDatepicker())
        },
        _adjustDate: function(c, e, f) {
          var g, k = a(),
            k = d(c, k);
          try {
            g = this._getInst(k[0])
          } catch (l) {
            k = d(c), g = this._getInst(k[0])
          }
          this._isDisabledDatepicker(k[0]) || (this._adjustInstDate(g,
            e + ("M" == f ? this._get(g, "showCurrentAtPos") : 0), f), this._updateDatepicker(g))
        },
        _gotoToday: function(c) {
          var e, f = a(),
            f = d(c, f);
          try {
            e = this._getInst(f[0])
          } catch (g) {
            f = d(c), e = this._getInst(f[0])
          }
          this._get(e, "gotoCurrent") && e.currentDay ? (e.selectedDay = e.currentDay, e.drawMonth = e.selectedMonth = e.currentMonth, e.drawYear = e.selectedYear = e.currentYear) : (c = new Date, e.selectedDay = c.getDate(), e.drawMonth = e.selectedMonth = c.getMonth(), e.drawYear = e.selectedYear = c.getFullYear());
          this._notifyChange(e);
          this._adjustDate(f)
        },
        _selectMonthYear: function(c, e, f) {
          var g, k = a(),
            k = d(c, k);
          try {
            g = this._getInst(k[0])
          } catch (l) {
            k = d(c), g = this._getInst(k[0])
          }
          g._selectingMonthYear = !1;
          g["selected" + ("M" == f ? "Month" : "Year")] = g["draw" + ("M" == f ? "Month" : "Year")] = parseInt(e.options[e.selectedIndex].value, 10);
          this._notifyChange(g);
          this._adjustDate(k)
        },
        _clickMonthYear: function(c) {
          var e, f = a(),
            f = d(c, f);
          try {
            e = this._getInst(f[0])
          } catch (g) {
            f = d(c), e = this._getInst(f[0])
          }
          e.input && e._selectingMonthYear && setTimeout(function() {
            e.input.focus()
          }, 0);
          e._selectingMonthYear = !e._selectingMonthYear
        },
        _selectDay: function(c, e, f, g) {
          var k = a(),
            k = d(c, k);
          if (!d(g).hasClass(this._unselectableClass) && !this._isDisabledDatepicker(k[0])) {
            var l;
            try {
              l = this._getInst(k[0])
            } catch (O) {
              k = d(c), l = this._getInst(k[0])
            }
            l.selectedDay = l.currentDay = d("a", g).html();
            l.selectedMonth = l.currentMonth = e;
            l.selectedYear = l.currentYear = f;
            this._selectDate(c, this._formatDate(l, l.currentDay, l.currentMonth, l.currentYear))
          }
        },
        _clearDate: function(c) {
          var e = a(),
            e = d(c, e);
          try {
            this._getInst(e[0])
          } catch (f) {
            e = d(c), this._getInst(e[0])
          }
          this._selectDate(e,
            "")
        },
        _selectDate: function(c, e) {
          var f, g = a(),
            g = d(c, g);
          try {
            f = this._getInst(g[0])
          } catch (k) {
            g = d(c), f = this._getInst(g[0])
          }
          e = null != e ? e : this._formatDate(f);
          f.input && f.input.val(e);
          this._updateAlternate(f);
          (g = this._get(f, "onSelect")) ? g.apply(f.input ? f.input[0] : null, [e, f]): f.input && f.input.trigger("change");
          f.inline ? this._updateDatepicker(f) : (this._hideDatepicker(), this._lastInput = f.input[0], "object" != typeof f.input[0] && f.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function(a) {
          var b = this._get(a, "altField");
          if (b) {
            var c = this._get(a, "altFormat") || this._get(a, "dateFormat"),
              e = this._getDate(a),
              f = this.formatDate(c, e, this._getFormatConfig(a));
            d(b).each(function() {
              d(this).val(f)
            })
          }
        },
        noWeekends: function(a) {
          a = a.getDay();
          return [0 < a && 6 > a, ""]
        },
        iso8601Week: function(a) {
          a = new Date(a.getTime());
          a.setDate(a.getDate() + 4 - (a.getDay() || 7));
          var b = a.getTime();
          return a.setMonth(0), a.setDate(1), Math.floor(Math.round((b - a) / 864E5) / 7) + 1
        },
        parseDate: function(a, b, c) {
          if (null == a || null == b) throw "Invalid arguments";
          if ("" == (b = "object" ==
              typeof b ? b.toString() : b + "")) return null;
          for (var e = (c ? c.shortYearCutoff : null) || this._defaults.shortYearCutoff, e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), f = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort, g = (c ? c.dayNames : null) || this._defaults.dayNames, k = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort, l = (c ? c.monthNames : null) || this._defaults.monthNames, na = c = -1, L = -1, n = -1, m = !1, q = function(b) {
              b = A + 1 < a.length && a.charAt(A + 1) == b;
              return b && A++, b
            }, u = function(a) {
              var d = q(a);
              a = new RegExp("^\\d{1," + ("@" == a ? 14 : "!" == a ? 20 : "y" == a && d ? 4 : "o" == a ? 3 : 2) + "}");
              a = b.substring(x).match(a);
              if (!a) throw "Missing number at position " + x;
              return x += a[0].length, parseInt(a[0], 10)
            }, y = function(a, c, e) {
              a = d.map(q(a) ? e : c, function(a, b) {
                return [
                  [b, a]
                ]
              }).sort(function(a, b) {
                return -(a[1].length - b[1].length)
              });
              var h = -1;
              if (d.each(a, function(a, d) {
                  var c = d[1];
                  if (b.substr(x, c.length).toLowerCase() == c.toLowerCase()) return h = d[0], x += c.length, !1
                }), -1 != h) return h + 1;
              throw "Unknown name at position " + x;
            }, z = function() {
              if (b.charAt(x) !=
                a.charAt(A)) throw "Unexpected literal at position " + x;
              x++
            }, x = 0, A = 0; A < a.length; A++)
            if (m) "'" != a.charAt(A) || q("'") ? z() : m = !1;
            else switch (a.charAt(A)) {
              case "d":
                L = u("d");
                break;
              case "D":
                y("D", f, g);
                break;
              case "o":
                n = u("o");
                break;
              case "m":
                na = u("m");
                break;
              case "M":
                na = y("M", k, l);
                break;
              case "y":
                c = u("y");
                break;
              case "@":
                c = (D = new Date(u("@"))).getFullYear();
                na = D.getMonth() + 1;
                L = D.getDate();
                break;
              case "!":
                c = (D = new Date((u("!") - this._ticksTo1970) / 1E4)).getFullYear();
                na = D.getMonth() + 1;
                L = D.getDate();
                break;
              case "'":
                q("'") ?
                  z() : m = !0;
                break;
              default:
                z()
            }
          if (-1 == c ? c = (new Date).getFullYear() : 100 > c && (c += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (c <= e ? 0 : -100)), -1 < n)
            for (na = 1, L = n;;) {
              e = this._getDaysInMonth(c, na - 1);
              if (L <= e) break;
              na++;
              L -= e
            }
          var D = this._daylightSavingAdjust(new Date(c, na - 1, L));
          if (D.getFullYear() != c || D.getMonth() + 1 != na || D.getDate() != L) throw "Invalid date";
          return D
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 864E9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function(a, b, d) {
          if (!b) return "";
          var c = (d ? d.dayNamesShort : null) || this._defaults.dayNamesShort,
            e = (d ? d.dayNames : null) || this._defaults.dayNames,
            f = (d ? d.monthNamesShort : null) || this._defaults.monthNamesShort;
          d = (d ? d.monthNames : null) || this._defaults.monthNames;
          var g = function(b) {
              b = m + 1 < a.length && a.charAt(m + 1) == b;
              return b && m++, b
            },
            k = function(a, b, d) {
              b = "" + b;
              if (g(a))
                for (; b.length <
                  d;) b = "0" + b;
              return b
            },
            l = function(a, b, d, c) {
              return g(a) ? c[b] : d[b]
            },
            L = "",
            n = !1;
          if (b)
            for (var m = 0; m < a.length; m++)
              if (n) "'" != a.charAt(m) || g("'") ? L += a.charAt(m) : n = !1;
              else switch (a.charAt(m)) {
                case "d":
                  L += k("d", b.getDate(), 2);
                  break;
                case "D":
                  L += l("D", b.getDay(), c, e);
                  break;
                case "o":
                  L += k("o", (b.getTime() - (new Date(b.getFullYear(), 0, 0)).getTime()) / 864E5, 3);
                  break;
                case "m":
                  L += k("m", b.getMonth() + 1, 2);
                  break;
                case "M":
                  L += l("M", b.getMonth(), f, d);
                  break;
                case "y":
                  L += g("y") ? b.getFullYear() : (10 > b.getYear() % 100 ? "0" : "") + b.getYear() %
                    100;
                  break;
                case "@":
                  L += b.getTime();
                  break;
                case "!":
                  L += 1E4 * b.getTime() + this._ticksTo1970;
                  break;
                case "'":
                  g("'") ? L += "'" : n = !0;
                  break;
                default:
                  L += a.charAt(m)
              }
          return L
        },
        _possibleChars: function(a) {
          for (var b = "", d = !1, c = function(b) {
              b = e + 1 < a.length && a.charAt(e + 1) == b;
              return b && e++, b
            }, e = 0; e < a.length; e++)
            if (d) "'" != a.charAt(e) || c("'") ? b += a.charAt(e) : d = !1;
            else switch (a.charAt(e)) {
              case "d":
              case "m":
              case "y":
              case "@":
                b += "0123456789";
                break;
              case "D":
              case "M":
                return null;
              case "'":
                c("'") ? b += "'" : d = !0;
                break;
              default:
                b += a.charAt(e)
            }
          return b
        },
        _get: function(a, b) {
          return a.settings[b] !== c ? a.settings[b] : this._defaults[b]
        },
        _setDateFromField: function(a, b) {
          if (a.input.val() != a.lastVal) {
            var d, c, e = this._get(a, "dateFormat"),
              f = a.lastVal = a.input ? a.input.val() : null;
            d = c = this._getDefaultDate(a);
            var g = this._getFormatConfig(a);
            try {
              d = this.parseDate(e, f, g) || c
            } catch (k) {
              this.log(k), f = b ? "" : f
            }
            a.selectedDay = d.getDate();
            a.drawMonth = a.selectedMonth = d.getMonth();
            a.drawYear = a.selectedYear = d.getFullYear();
            a.currentDay = f ? d.getDate() : 0;
            a.currentMonth = f ? d.getMonth() :
              0;
            a.currentYear = f ? d.getFullYear() : 0;
            this._adjustInstDate(a)
          }
        },
        _getDefaultDate: function(a) {
          return this._restrictMinMax(a, this._determineDate(a, this._get(a, "defaultDate"), new Date))
        },
        _determineDate: function(a, b, c) {
          b = null == b || "" === b ? c : "string" == typeof b ? function(b) {
            try {
              return d.datepicker.parseDate(d.datepicker._get(a, "dateFormat"), b, d.datepicker._getFormatConfig(a))
            } catch (c) {}
            for (var e = (b.toLowerCase().match(/^c/) ? d.datepicker._getDate(a) : null) || new Date, f = e.getFullYear(), g = e.getMonth(), e = e.getDate(),
                k = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = k.exec(b); l;) {
              switch (l[2] || "d") {
                case "d":
                case "D":
                  e += parseInt(l[1], 10);
                  break;
                case "w":
                case "W":
                  e += 7 * parseInt(l[1], 10);
                  break;
                case "m":
                case "M":
                  g += parseInt(l[1], 10);
                  e = Math.min(e, d.datepicker._getDaysInMonth(f, g));
                  break;
                case "y":
                case "Y":
                  f += parseInt(l[1], 10), e = Math.min(e, d.datepicker._getDaysInMonth(f, g))
              }
              l = k.exec(b)
            }
            return new Date(f, g, e)
          }(b) : "number" == typeof b ? isNaN(b) ? c : function(a) {
            var b = new Date;
            return b.setDate(b.getDate() + a), b
          }(b) : new Date(b.getTime());
          return (b = b && "Invalid Date" == b.toString() ? c : b) && (b.setHours(0), b.setMinutes(0), b.setSeconds(0), b.setMilliseconds(0)), this._daylightSavingAdjust(b)
        },
        _daylightSavingAdjust: function(a) {
          return a ? (a.setHours(12 < a.getHours() ? a.getHours() + 2 : 0), a) : null
        },
        _setDate: function(a, b, d) {
          var c = !b,
            e = a.selectedMonth,
            f = a.selectedYear;
          b = this._restrictMinMax(a, this._determineDate(a, b, new Date));
          a.selectedDay = a.currentDay = b.getDate();
          a.drawMonth = a.selectedMonth = a.currentMonth = b.getMonth();
          a.drawYear = a.selectedYear = a.currentYear =
            b.getFullYear();
          e == a.selectedMonth && f == a.selectedYear || d || this._notifyChange(a);
          this._adjustInstDate(a);
          a.input && a.input.val(c ? "" : this._formatDate(a))
        },
        _getDate: function(a) {
          return !a.currentYear || a.input && "" == a.input.val() ? null : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay))
        },
        _generateHTML: function(a) {
          var b = new Date,
            b = this._daylightSavingAdjust(new Date(b.getFullYear(), b.getMonth(), b.getDate())),
            c = this._get(a, "isRTL"),
            e = this._get(a, "showButtonPanel"),
            f = this._get(a, "hideIfNoPrevNext"),
            g = this._get(a, "navigationAsDateFormat"),
            k = this._getNumberOfMonths(a),
            S = this._get(a, "showCurrentAtPos"),
            n = this._get(a, "stepMonths"),
            L = 1 != k[0] || 1 != k[1],
            m = this._daylightSavingAdjust(a.currentDay ? new Date(a.currentYear, a.currentMonth, a.currentDay) : new Date(9999, 9, 9)),
            q = this._getMinMaxDate(a, "min"),
            u = this._getMinMaxDate(a, "max"),
            S = a.drawMonth - S,
            y = a.drawYear;
          if (0 > S && (S += 12, y--), u)
            for (var x = this._daylightSavingAdjust(new Date(u.getFullYear(), u.getMonth() - k[0] * k[1] + 1, u.getDate())), x = q && x < q ? q : x; this._daylightSavingAdjust(new Date(y,
                S, 1)) > x;) 0 > --S && (S = 11, y--);
          a.drawMonth = S;
          a.drawYear = y;
          for (var x = this._get(a, "prevText"), x = g ? this.formatDate(x, this._daylightSavingAdjust(new Date(y, S - n, 1)), this._getFormatConfig(a)) : x, x = this._canAdjustMonth(a, -1, y, S) ? '<a class="b4g-ui-datepicker-prev b4g-ui-corner-all" b4gonclick="DP_jQuery_' + l + ".datepicker._adjustDate('#" + a.id + "', -" + n + ", 'M');\" title=\"" + x + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "e" : "w") + '">' + x + "</span></a>" : f ? "" : '<a class="b4g-ui-datepicker-prev b4g-ui-corner-all ui-state-disabled" title="' +
              x + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "e" : "w") + '">' + x + "</span></a>", z = this._get(a, "nextText"), z = g ? this.formatDate(z, this._daylightSavingAdjust(new Date(y, S + n, 1)), this._getFormatConfig(a)) : z, f = this._canAdjustMonth(a, 1, y, S) ? '<a class="b4g-ui-datepicker-next b4g-ui-corner-all" b4gonclick="DP_jQuery_' + l + ".datepicker._adjustDate('#" + a.id + "', +" + n + ", 'M');\" title=\"" + z + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "w" : "e") + '">' + z + "</span></a>" : f ? "" : '<a class="b4g-ui-datepicker-next b4g-ui-corner-all ui-state-disabled" title="' +
              z + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "w" : "e") + '">' + z + "</span></a>", n = this._get(a, "currentText"), z = this._get(a, "gotoCurrent") && a.currentDay ? m : b, n = g ? this.formatDate(n, z, this._getFormatConfig(a)) : n, g = a.inline ? "" : '<button type="button" class="b4g-ui-datepicker-close ui-state-default ui-priority-primary b4g-ui-corner-all" b4gonclick="DP_jQuery_' + l + '.datepicker._hideDatepicker();">' + this._get(a, "closeText") + "</button>", e = e ? '<div class="b4g-ui-datepicker-buttonpane b4g-ui-widget-content">' +
              (c ? g : "") + (this._isInRange(a, z) ? '<button type="button" class="b4g-ui-datepicker-current ui-state-default ui-priority-secondary b4g-ui-corner-all" b4gonclick="DP_jQuery_' + l + ".datepicker._gotoToday('#" + a.id + "');\">" + n + "</button>" : "") + (c ? "" : g) + "</div>" : "", g = parseInt(this._get(a, "firstDay"), 10), g = isNaN(g) ? 0 : g, n = this._get(a, "showWeek"), z = this._get(a, "dayNames"), D = (this._get(a, "dayNamesShort"), this._get(a, "dayNamesMin")), A = this._get(a, "monthNames"), J = this._get(a, "monthNamesShort"), B = this._get(a, "beforeShowDay"),
              F = this._get(a, "showOtherMonths"), E = this._get(a, "selectOtherMonths"), G = (this._get(a, "calculateWeek") || this.iso8601Week, this._getDefaultDate(a)), M = "", H = 0; H < k[0]; H++) {
            for (var Q = "", I = 0; I < k[1]; I++) {
              var v = this._daylightSavingAdjust(new Date(y, S, a.selectedDay)),
                N = " b4g-ui-corner-all",
                K = "";
              if (L) {
                if (K += '<div class="b4g-ui-datepicker-group', 1 < k[1]) switch (I) {
                  case 0:
                    K += " b4g-ui-datepicker-group-first";
                    N = " b4g-ui-corner-" + (c ? "right" : "left");
                    break;
                  case k[1] - 1:
                    K += " b4g-ui-datepicker-group-last";
                    N = " b4g-ui-corner-" +
                      (c ? "left" : "right");
                    break;
                  default:
                    K += " b4g-ui-datepicker-group-middle", N = ""
                }
                K += '">'
              }
              for (var K = K + ('<div class="b4g-ui-datepicker-header b4g-ui-widget-header b4g-ui-helper-clearfix' + N + '">' + (/all|left/.test(N) && 0 == H ? c ? f : x : "") + (/all|right/.test(N) && 0 == H ? c ? x : f : "") + this._generateMonthYearHeader(a, S, y, q, u, 0 < H || 0 < I, A, J) + '</div><table class="b4g-ui-datepicker-calendar"><thead><tr>'), Ha = n ? '<th class="b4g-ui-datepicker-week-col">' + this._get(a, "weekHeader") + "</th>" : "", N = 0; 7 > N; N++) var V = (N + g) % 7,
                Ha = Ha + ("<th" + (5 <=
                  (N + g + 6) % 7 ? ' class="b4g-ui-datepicker-week-end"' : "") + '><span title="' + z[V] + '">' + D[V] + "</span></th>");
              K += Ha + "</tr></thead><tbody>";
              Ha = this._getDaysInMonth(y, S);
              y == a.selectedYear && S == a.selectedMonth && (a.selectedDay = Math.min(a.selectedDay, Ha));
              for (var N = (this._getFirstDayOfMonth(y, S) - g + 7) % 7, Ha = L ? 6 : Math.ceil((N + Ha) / 7), V = this._daylightSavingAdjust(new Date(y, S, 1 - N)), da = 0; da < Ha; da++) {
                for (var K = K + "<tr>", Tb = n ? '<td class="b4g-ui-datepicker-week-col">' + this._get(a, "calculateWeek")(V) + "</td>" : "", N = 0; 7 > N; N++) {
                  var qb =
                    B ? B.apply(a.input ? a.input[0] : null, [V]) : [!0, ""],
                    ja = V.getMonth() != S,
                    Ub = ja && !E || !qb[0] || q && V < q || u && V > u,
                    Tb = Tb + ('<td class="' + (5 <= (N + g + 6) % 7 ? " b4g-ui-datepicker-week-end" : "") + (ja ? " b4g-ui-datepicker-other-month" : "") + (V.getTime() == v.getTime() && S == a.selectedMonth && a._keyEvent || G.getTime() == V.getTime() && G.getTime() == v.getTime() ? " " + this._dayOverClass : "") + (Ub ? " " + this._unselectableClass + " ui-state-disabled" : "") + (ja && !F ? "" : " " + qb[1] + (V.getTime() == m.getTime() ? " " + this._currentClass : "") + (V.getTime() == b.getTime() ?
                      " b4g-ui-datepicker-today" : "")) + '"' + (ja && !F || !qb[2] ? "" : ' title="' + qb[2] + '"') + (Ub ? "" : ' b4gonclick="DP_jQuery_' + l + ".datepicker._selectDay('#" + a.id + "'," + V.getMonth() + "," + V.getFullYear() + ', this);"') + ">" + (ja && !F ? "&#xa0;" : Ub ? '<span class="ui-state-default">' + V.getDate() + "</span>" : '<a class="ui-state-default' + (V.getTime() == b.getTime() ? " ui-state-highlight" : "") + (V.getTime() == m.getTime() ? " ui-state-active" : "") + (ja ? " ui-priority-secondary" : "") + '">' + V.getDate() + "</a>") + "</td>");
                  V.setDate(V.getDate() + 1);
                  V = this._daylightSavingAdjust(V)
                }
                K +=
                  Tb + "</tr>"
              }
              11 < ++S && (S = 0, y++);
              Q += K + ("</tbody></table>" + (L ? "</div>" + (0 < k[0] && I == k[1] - 1 ? '<div class="b4g-ui-datepicker-row-break"></div>' : "") : ""))
            }
            M += Q
          }
          return M += e + (d.browser.msie && 7 > parseInt(d.browser.version, 10) && !a.inline ? '<iframe src="javascript:false;" class="b4g-ui-datepicker-cover" frameborder="0"></iframe>' : ""), a._keyEvent = !1, M
        },
        _generateMonthYearHeader: function(a, b, d, c, e, f, g, k) {
          var n = this._get(a, "changeMonth"),
            L = this._get(a, "changeYear"),
            m = this._get(a, "showMonthAfterYear"),
            q = '<div class="b4g-ui-datepicker-title">',
            u = "";
          if (f || !n) u += '<span class="b4g-ui-datepicker-month">' + g[b] + "</span>";
          else {
            g = c && c.getFullYear() == d;
            for (var y = e && e.getFullYear() == d, u = u + ('<select class="b4g-ui-datepicker-month" b4gonchange="DP_jQuery_' + l + ".datepicker._selectMonthYear('#" + a.id + "', this, 'M');\" b4gonclick=\"DP_jQuery_" + l + ".datepicker._clickMonthYear('#" + a.id + "');\">"), x = 0; 12 > x; x++)(!g || x >= c.getMonth()) && (!y || x <= e.getMonth()) && (u += '<option value="' + x + '"' + (x == b ? ' selected="selected"' : "") + ">" + k[x] + "</option>");
            u += "</select>"
          }
          if (m ||
            (q += u + (!f && n && L ? "" : "&#xa0;")), !a.yearshtml)
            if (a.yearshtml = "", f || !L) q += '<span class="b4g-ui-datepicker-year">' + d + "</span>";
            else {
              k = this._get(a, "yearRange").split(":");
              var z = (new Date).getFullYear();
              g = function(a) {
                a = a.match(/c[+-].*/) ? d + parseInt(a.substring(1), 10) : a.match(/[+-].*/) ? z + parseInt(a, 10) : parseInt(a, 10);
                return isNaN(a) ? z : a
              };
              b = g(k[0]);
              k = Math.max(b, g(k[1] || ""));
              b = c ? Math.max(b, c.getFullYear()) : b;
              k = e ? Math.min(k, e.getFullYear()) : k;
              for (a.yearshtml += '<select class="b4g-ui-datepicker-year" b4gonchange="DP_jQuery_' +
                l + ".datepicker._selectMonthYear('#" + a.id + "', this, 'Y');\" b4gonclick=\"DP_jQuery_" + l + ".datepicker._clickMonthYear('#" + a.id + "');\">"; b <= k; b++) a.yearshtml += '<option value="' + b + '"' + (b == d ? ' selected="selected"' : "") + ">" + b + "</option>";
              a.yearshtml += "</select>";
              q += a.yearshtml;
              a.yearshtml = null
            } return q += this._get(a, "yearSuffix"), m && (q += (!f && n && L ? "" : "&#xa0;") + u), q += "</div>"
        },
        _adjustInstDate: function(a, b, d) {
          var c = a.drawYear + ("Y" == d ? b : 0),
            e = a.drawMonth + ("M" == d ? b : 0);
          b = Math.min(a.selectedDay, this._getDaysInMonth(c,
            e)) + ("D" == d ? b : 0);
          c = this._restrictMinMax(a, this._daylightSavingAdjust(new Date(c, e, b)));
          a.selectedDay = c.getDate();
          a.drawMonth = a.selectedMonth = c.getMonth();
          a.drawYear = a.selectedYear = c.getFullYear();
          "M" != d && "Y" != d || this._notifyChange(a)
        },
        _restrictMinMax: function(a, b) {
          var d = this._getMinMaxDate(a, "min"),
            c = this._getMinMaxDate(a, "max"),
            d = d && b < d ? d : b;
          return c && d > c ? c : d
        },
        _notifyChange: function(a) {
          var b = this._get(a, "onChangeMonthYear");
          b && b.apply(a.input ? a.input[0] : null, [a.selectedYear, a.selectedMonth + 1, a])
        },
        _getNumberOfMonths: function(a) {
          a = this._get(a, "numberOfMonths");
          return null == a ? [1, 1] : "number" == typeof a ? [1, a] : a
        },
        _getMinMaxDate: function(a, b) {
          return this._determineDate(a, this._get(a, b + "Date"), null)
        },
        _getDaysInMonth: function(a, b) {
          return 32 - this._daylightSavingAdjust(new Date(a, b, 32)).getDate()
        },
        _getFirstDayOfMonth: function(a, b) {
          return (new Date(a, b, 1)).getDay()
        },
        _canAdjustMonth: function(a, b, d, c) {
          var e = this._getNumberOfMonths(a);
          d = this._daylightSavingAdjust(new Date(d, c + (0 > b ? b : e[0] * e[1]), 1));
          return 0 >
            b && d.setDate(this._getDaysInMonth(d.getFullYear(), d.getMonth())), this._isInRange(a, d)
        },
        _isInRange: function(a, b) {
          var d = this._getMinMaxDate(a, "min"),
            c = this._getMinMaxDate(a, "max");
          return (!d || b.getTime() >= d.getTime()) && (!c || b.getTime() <= c.getTime())
        },
        _getFormatConfig: function(a) {
          var b = this._get(a, "shortYearCutoff");
          return b = "string" != typeof b ? b : (new Date).getFullYear() % 100 + parseInt(b, 10), {
            shortYearCutoff: b,
            dayNamesShort: this._get(a, "dayNamesShort"),
            dayNames: this._get(a, "dayNames"),
            monthNamesShort: this._get(a,
              "monthNamesShort"),
            monthNames: this._get(a, "monthNames")
          }
        },
        _formatDate: function(a, b, d, c) {
          b || (a.currentDay = a.selectedDay, a.currentMonth = a.selectedMonth, a.currentYear = a.selectedYear);
          b = b ? "object" == typeof b ? b : this._daylightSavingAdjust(new Date(c, d, b)) : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
          return this.formatDate(this._get(a, "dateFormat"), b, this._getFormatConfig(a))
        }
      });
      d.fn.datepicker = function(a) {
        if (!this.length) return this;
        d.datepicker.initialized || (d(document).mousedown(d.datepicker._checkExternalClick).find("body").append(d.datepicker.dpDiv),
          d.datepicker.initialized = !0);
        var b = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof a || "isDisabled" != a && "getDate" != a && "widget" != a ? "option" == a && 2 == arguments.length && "string" == typeof arguments[1] ? d.datepicker["_" + a + "Datepicker"].apply(d.datepicker, [this[0]].concat(b)) : this.each(function() {
          "string" == typeof a ? d.datepicker["_" + a + "Datepicker"].apply(d.datepicker, [this].concat(b)) : d.datepicker._attachDatepicker(this, a)
        }) : d.datepicker["_" + a + "Datepicker"].apply(d.datepicker, [this[0]].concat(b))
      };
      d.datepicker = new e;
      d.datepicker.initialized = !1;
      d.datepicker.uuid = (new Date).getTime();
      d.datepicker.version = "1.8.13";
      window["DP_jQuery_" + l] = d
    })(qa);
    (function(a) {
      function b(c) {
        for (var e = f(c), h = [], r = 0, p, t = e.length; r < t; r++)
          for (p = 0; p < t; p++) r !== p && g(e[r], e[p]) && h.push(c[p]);
        return a.unique(h)
      }

      function e(a, b) {
        for (var d = f(a), c = f(b), e = 0, t, w = d.length, C = c.length; e < w; e++)
          for (t = 0; t < C; t++)
            if (a[e] !== b[t] && g(d[e], c[t])) return !0;
        return !1
      }

      function f(b) {
        for (var c, e, f = [], g = 0; e = b[g++];) c = a(e).offset(), f.push([c.top, c.left,
          e.offsetWidth, e.offsetHeight
        ]);
        return f
      }

      function g(a, b) {
        var d = a[1],
          c = a[0],
          e = a[2],
          f = a[3],
          g = b[1],
          C = b[0],
          O = b[2];
        return !(C + b[3] < c || c + f < C || g + O < d || d + e < g)
      }
      a.fn.overlaps = function(f) {
        return 0 === arguments.length ? this.pushStack(b(this)) : e(this, a(f))
      };
      a.expr[":"].overlaps = function(a, b, d, c) {
        return e([a], c)
      };
      a.expr[":"].overlapping = a.expr[":"].overlaps
    })(qa);
    (function(a) {
      "$:nomunge";
      a.fn.replaceText = function(b, e, f) {
        return this.each(function() {
          var g, l, k = this.firstChild,
            h = [];
          if (k) {
            do 3 === k.nodeType && (l = (g = k.nodeValue).replace(b,
              e)) !== g && (!f && /</.test(l) ? (a(k).before(l), h.push(k)) : k.nodeValue = l); while (k = k.nextSibling)
          }
          h.length && a(h).remove()
        })
      }
    })(qa);
    Od.watch_for_new_compose_containers();
    M.init();
    va.init();
    Y(Ba);
    ua.b4g_troubleshoot && Pd(ua.b4g_troubleshoot)
  }

  function Ba() {
    Qd();
    ha(Rd)
  }

  function Rd() {
    var a = y().charAt(0).toLowerCase();
    Vb = Sd;
    Va = "m" === a ? "Remind me" : "Boomerang this";
    eb = eb.replace("{{boomerang_on_send}}", Va);
    rb = rb.replace("{{boomerang_on_send}}", Va);
    var a = R("hasSeenB4GTutorial"),
      d = y();
    null == a && d && (null != R("b4gMenuEntries") ?
      A("hasSeenB4GTutorial", "yes") : U("https://b4g.baydin.com/mailcruncher/hasseentutorial?guser=" + encodeURIComponent(d), Td, ""))
  }

  function Pd(a) {
    var d = R("b4g_extensions"),
      c = "The Boomerang extension has been loaded successfully. ";
    if (d) {
      for (var e = "ocpljaamllnldhepankaeljmeeeghnid gbohoafagnlmidmhhpfdnmfpodhohaad fcinnggknmdfkilogcndkgpojpfojeem gakklmehjhhdfjjgnmpkjoemjmeomnli gkjnkapjmjfpipfcccnjbjcbgdnahpjp ddaloccgjfibfpkalenodgehlhkgoahe pkehgijcmpdhfbdbbnkijodmdjhbjlgp ldpochfccmkkmhdbclfhpagapcfdljkj cnkgdfnjmgamkcpjdljdncfjcegpgcdg kohihleiencpadoaakajafdlmcimglea cffgjgigjfgjkfdopbobbdadaelbhepo mfldbojpjpgjlphijlbgefdjebkhdjom dcjichoefijpinlfnjghokpkojhlhkgl klbibkeccnjlkjkiokjodocebajanakg hmkichigbnaamgiokhbjkigjlggpeenf jplnlifepflhkbkgonidnobkakhmpnmh alehdleagcgnimdipdmllebddejplpbi".split(" "),
          f = "annoaihhfdegphdkkkbahheignkgigpd jpbnpbfpgjkblmejlgkfkekajajhjcid dlppikdhbkdinhpfbneekdbjhgphknad ijhapcklhkanndjbdnhichfmolhiaekg mflnemhkomgploogccdmcloekbloobgb nfddgbpdnaeliohhkbdbcmenpnkepkgn pnnfemgpilpdaojpnkjdgfgbnnjojfik gllmkcahdekdbapmdfnffclacbpnicaj kemincbhdgppphceahdgebffjcfgbigp biohbbbijnpljcdhobbjakhgpkelmjpg obpicmhmbfddhkcbiapfeginbafnjmmm".split(" "), g = ["mlomiejdfkolichcflejclcbmpeaniij", "odjhifogjcknibkahlpidmdajjpkkcfn", "dheionainndbbpoacpnopgmnihkcmnkl"], l = JSON.parse(d),
          d = [], k = 0; k < l.length; k++) {
        var h = l[k],
          r = h.id;
        (-1 < e.indexOf(r) || -1 < f.indexOf(r) || -1 < g.indexOf(r)) && d.push(h)
      }
      if (0 < d.length) {
        c += "However, you should check the following extensions for possible conflicts:<h4>Extension Conflicts:</h4><ul>";
        for (e = 0; e < d.length; e++) c += "<li>" + d[e].name + "</li>";
        c += "</ul>"
      }
    }
    var p = u(c + "<div id='b4g-inline-troubleshoot-holder'/>", "Boomerang For Gmail", {
      Close: {
        text: "Close",
        "class": "b4g-button green",
        click: function() {
          window.location = "https://mail.google.com"
        }
      }
    });
    "inline-manage" ===
    a && setTimeout(function() {
      Ud(p)
    }, 0);
    localStorage.removeItem("b4g_extensions")
  }

  function F() {
    var a = document.getElementById("canvas_frame");
    if (!a) return document;
    a = a.contentWindow || a.contentDocument;
    a.document && (a = a.document);
    return a
  }

  function wc() {
    return a(".adn.ads:visible").map(function() {
      return a(this).attr("data-legacy-message-id")
    }).get()
  }

  function Vd() {
    var b = a("[gh='tl'] div[role='checkbox'][aria-checked='true']").map(function() {
      return a(this).parents(".zA").find("[data-thread-id]").attr("data-thread-id")
    }).get();
    0 === b.length && (b = a("[gh='tl'] div[role='checkbox'][aria-checked='true']").map(function() {
      return a(this).parents(".zA").next().find("[data-thread-id]").attr("data-thread-id")
    }).get());
    if (0 === b.length && (sb() || tb())) {
      var d = a(".hP:visible").first().attr("data-thread-perm-id");
      d && (b = [d])
    }
    for (d = 0; d < b.length; d++) b[d] = b[d].replace("#", "");
    0 === b.length && (b = Wd());
    return b
  }

  function Wd() {
    var b = a("[gh='tl'] div[role='checkbox'][aria-checked='true']").map(function() {
      return a(this).parents(".zA").find("[data-legacy-thread-id]").attr("data-legacy-thread-id")
    }).get();
    0 === b.length && (b = a("[gh='tl'] div[role='checkbox'][aria-checked='true']").map(function() {
      return a(this).parents(".zA").next().find("[data-legacy-thread-id]").attr("data-legacy-thread-id")
    }).get());
    if (0 === b.length && (sb() || tb())) {
      var d = a(".hP:visible").first().attr("data-legacy-thread-id");
      d && (b = [d])
    }
    return b
  }

  function fa() {
    if (1 === q()) {
      var b, d, c = window.location.hash.toString();
      if (!c) {
        var e = window.location.toString();
        d = e.lastIndexOf("#"); - 1 < d && (c = e.substr(e.lastIndexOf("#")))
      }
      d = c.lastIndexOf("/"); - 1 <
        d && (b = c.substr(d + 1), b = /[0-9a-f]+(?=$|\?)/.exec(b));
      b = b ? b[0] : ua.th || ""
    } else(b = a(".hP:visible").first().attr("data-thread-perm-id")) && (b = b.replace("#", ""));
    return b
  }

  function Wb(a) {
    return wa("rt", a).val().replace("#", "")
  }

  function Wa(a) {
    a = a || window.event;
    return a.target || a.srcElement
  }

  function wa(b, d) {
    d || (d = F());
    return a("*[name='" + b + "']", d).filter(":first")
  }

  function y() {
    if (ub) return ub;
    var b = vb;
    if (1 !== q()) {
      var d = "";
      a("header a[aria-expanded]").each(function() {
        var c = a(this).attr("aria-label");
        if (c = b.exec(c)) return d =
          c, !1
      })
    } else var c = a(".msg").html(),
      d = b.exec(c);
    if (d) d = d[0];
    else
      for (var d = "", c = document.title.split(" "), e = 0; e < c.length; e++) {
        var f = b.exec(c[e]);
        f && (d = f[0])
      }
    return ub = d
  }

  function q() {
    if ("Safari" === z || "Old Safari" === z) return 3;
    var a = "undefined" === typeof GM_RFT_ENABLED ? window.opener : window;
    return "true" === a.GM_RFT_ENABLED ? 3 : "true" === a.GM_SPT_ENABLED ? 2 : 1
  }

  function Xb() {
    return 3 === q() ? a(".nM") : null
  }

  function W(b, d) {
    d || (d = F());
    var c = "";
    a("[name='" + b + "']", d).each(function() {
      c += a(this).val() + " "
    });
    return c ? wb(c) :
      ""
  }

  function Yb() {
    a("#wc_screen").remove()
  }

  function Xd() {
    var a = /mail\.google\.com\/mail\/u\/(\d+)/.exec(String(document.location));
    return null == a ? 0 : a[1]
  }

  function fb() {
    return "true" === ua.b4gEdit
  }

  function Yd() {
    for (var b = F(), d = b.getElementsByClassName("hP")[0].childNodes, c = "", e = 0; e < d.length; e++) {
      var f = d[e].nodeValue;
      null != f && (c += f)
    }
    b = a(xc, b);
    return 1 > b.length ? "" : c + " " + b.get(0).firstChild.textContent
  }

  function K() {
    var b;
    if (b = 0 < ba.indexOf("ui=2") || 0 < ba.indexOf("view=cm")) b = F(), b = 0 === a("[role='banner']:visible",
      b).length;
    return b
  }

  function Ia(a) {
    return 0 < a.closest(".nH.Hd[role='dialog']").length
  }

  function xb(b, d) {
    d || (d = F());
    return a("[role='button']", d).filter(function() {
      return a(this).text().trim() === b
    })
  }

  function yc(b) {
    b || (b = F());
    var d;
    (d = b) || (d = F());
    var c = a(".T-I.J-J5-Ji.Bq.nS.T-I-ax7.L3", d).first().text();
    c || (c = a(".T-I.J-J5-Ji.Bq.nS.T-I-KE.L3", d).first().text());
    c || (c = a(".T-I.J-J5-Ji.Bq.nS.T-I-ax7.L3", d).first().text());
    c || (c = a(".T-I.J-J5-Ji.aoO.L3.T-I-ax7", d).first().text());
    c || (c = a(".T-I.J-J5-Ji.aoO.T-I-atl.L3",
      d).first().text());
    c || (c = "Send");
    d = c;
    var c = b,
      e = a(".T-I.J-J5-Ji.Uo.T-I-atl.L3", c).first().text();
    e || (e = a(".T-I.J-J5-Ji.Bq.undefined.T-I-ax7.L3", c).first().text());
    c = e = e ? e.replace("&amp;", "&") : "Send & Archive";
    return xb(d, b).add(xb(c, b))
  }

  function zc(b) {
    b || (b = F());
    return a(".T-I.J-J5-Ji.hG.T-I-atl.L3", b)
  }

  function Zd() {
    return a($d, x).map(function() {
      return a(this).attr("email")
    }).toArray()
  }

  function ae() {
    return a(be, x).map(function() {
      var b = a(this).attr("alt").replace(" at", "");
      return null == Date.parse(b) ?
        null : Date.parse(b).valueOf()
    }).toArray()
  }

  function yb() {
    var b = a(".aic").find("[role='button']");
    return 0 == b.length ? !0 : 0 <= b.text().toLowerCase().indexOf("compose") ? !0 : !1
  }

  function sb() {
    var b = F();
    return 0 < a(".aph", b).filter(":visible").length
  }

  function tb() {
    var b = F();
    return 0 < a(".apj", b).filter(":visible").length
  }

  function Ca(b, d) {
    var c, e = a(b);
    c = e.closest(".nH.Hd[role='dialog']");
    if (0 < c.length) return c;
    c = e.closest(".aoI");
    if (0 < c.length) return c;
    c = e.closest(".ip.adB");
    if (0 < c.length) return c;
    c = e.find(".aoI");
    if (0 < c.length) return c;
    if (void 0 !== d) return d;
    n(["dev", "get_compose_container failed"]);
    return document
  }

  function ra(b) {
    b = a(".Am.Al:not(:has(iframe)), .LW-avf, .Am.Al > iframe", b);
    if (!b[0]) return null;
    b[0].contentDocument && (b = a(b[0].contentDocument.body));
    return b
  }

  function ce(b) {
    function d() {
      var d = e.text().trim().toLowerCase();
      if ("plain text" === d || "rich text" === d) {
        var d = "plain text" === d,
          g = !d && d !== c.data("is-plain-text");
        c.data("is-plain-text", d);
        var l = a(".b4g-tracking-toggle", b);
        g && l.trigger("b4g-toggle-state",
          !!c.data("had-tracking-enabled"));
        d && l.data("is-selected") && (u("Click tracking and read receipts do not work with plain text emails."), c.data("had-tracking-enabled", l.data("is-selected")), l.trigger("b4g-toggle-state", !1))
      }
    }
    var c = ra(b),
      e = a(".aWQ", b);
    0 < e.length && ((new ka(d)).observe(e[0], {
      childList: !0,
      characterData: !0,
      subtree: !0
    }), d([]))
  }

  function Ac(b) {
    var d = a(".aDj", b);
    d || (d = a(".aDh", b));
    return d
  }

  function u(b, d, c, e, f) {
    var g = {
      Ok: {
        text: "OK",
        "class": "b4g-button dialog-gray",
        click: function() {
          a(this).dialog("destroy")
        }
      }
    };
    c = "undefined" === typeof c ? g : c;
    d = "undefined" === typeof d ? "Boomerang for Gmail" : d;
    f = "undefined" === typeof f ? "dialogdiv" : f;
    var l;
    "Old Safari" === z ? alert(b) : (g = F(), a("." + f).remove(), 0 <= b.indexOf("unable to connect to your Gmail account") && (b = b.replace("Attempt failed:", "")), l = a("<div class='" + f + "' style='display:none;'>" + b + "</div>"), a("body", g).append(l), a("." + f, g).dialog(a.extend({
      title: d,
      modal: !0,
      closeOnEscape: !0,
      buttons: c
    }, e || {})), Xa(), 0 <= b.indexOf("unable to connect to your Gmail account") && a(".b4g-ui-dialog").css("width",
      "500px"));
    n(["Show dialog", b]);
    return l
  }

  function de(b, d) {
    if ("Old Safari" === z) alert(b);
    else {
      var c = F();
      a(".dialogdiv").remove();
      var e = "<div class='dialogdiv' style='display:none;'>" + b + "</div>";
      a("body", c).append(a(e));
      a(".dialogdiv", c).dialog({
        title: " &nbsp &nbsp   " + d,
        modal: !0,
        closeOnEscape: !0,
        width: 450,
        buttons: {
          Ok: {
            text: "Ok",
            "class": "b4g-button dialog-gray",
            click: function() {
              a(this).dialog("destroy")
            }
          }
        }
      });
      Xa()
    }
  }

  function ee() {
    var b = F();
    a(".nH .hh", b).filter(function() {
      if ("Boomerang for Gmail" === a(".cZ",
          this).text()) return !0
    }).hide()
  }

  function Xa(b) {
    b = b || ".dialogdiv a";
    var d = F();
    "Chrome" !== z && "Opera" !== z && "Edge" !== z || a(b, d).click(function() {
      var b = a(this).attr("href"); - 1 === b.indexOf("javascript") && window.open(b, "_blank")
    })
  }

  function Bc() {
    a(".UD", x).first().css("visibility", "");
    a(".UB", x).first().css("visibility", "");
    a(".vh", x).first().css("visibility", "").closest(".b8.UC").css("top", -1E4);
    3 !== q() && a(".vh", x).first().html("")
  }

  function Qa(b, d) {
    a(".vh", x).first().html(b);
    a(".UD", x).first().css("visibility",
      "visible");
    a(".UB", x).first().css("visibility", "visible");
    a(".vh", x).first().css("visibility", "visible").closest(".b8.UC").css("top", 0);
    setTimeout(Bc, d)
  }

  function Zb() {
    try {
      var b = a(".dialog-content");
      b.css("text-align", "left");
      "Chrome" === z ? b.html("If you did not see an authentication window, please allow pop-ups for mail.google.com. <ol><li>Click this icon in the upper right corner of your browser window: <img src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/popupblockericon.jpg' style='padding-top:5px;padding-bottom:5px;'/> </li><li>Select <strong>\"Always allow popups from mail.google.com\"</strong>.</li><li><a class='auth-reload'>Refresh</a> the page, and try again.</li></ol>") :
        "Opera" === z ? b.html("If you did not see an authentication window, please allow pop-ups for mail.google.com. <ol><li>Click this icon in the upper right corner of your browser window: <img src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/operapopupblockericon.png' style='padding-top:5px;padding-bottom:5px;'/> </li><li>Select <strong>\"Always allow popups from mail.google.com\"</strong>.</li><li><a class='auth-reload'>Refresh</a> the page, and try again.</li></ol>") : "Edge" === z && b.html("If you did not see an authentication window, please allow pop-ups for mail.google.com. <ol><li>Select <strong>\"Always allow\"</strong> at the bottom of your browser window. <img src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/edgepopupblockericon.png' style='padding-top:5px;padding-bottom:5px;'/> </li><li><a class='auth-reload'>Refresh</a> the page, and try again.</li></ol>");
      b.find(".auth-reload").click(function() {
        window.location.reload()
      });
      a("#blue-arrow").css("visibility", "visible")
    } catch (d) {}
  }

  function aa() {
    var b = F(),
      b = a("[role='button']", b).filter(function() {
        return "20" === a(this).attr("act")
      });
    b.each(ga);
    3 === q() && 1 < b.length && (topButton = b.first(), topButton.each(ga))
  }

  function ga(a) {
    a = x.createEvent("MouseEvents");
    a.initMouseEvent("mousedown", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
    this.dispatchEvent(a);
    a = x.createEvent("MouseEvents");
    a.initMouseEvent("mouseup", !0, !0,
      window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
    this.dispatchEvent(a);
    a = x.createEvent("MouseEvents");
    a.initMouseEvent("mouseout", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
    this.dispatchEvent(a)
  }

  function zb() {
    x = F();
    var b = a(".iH .J-Zh-I-KE", x);
    0 === b.length && (b = a("[role='button']:visible", x));
    b.filter(function() {
      return "7" === a(this).attr("act")
    }).each(ga)
  }

  function Cc() {
    x = F();
    var b = a("[role='button']", x),
      b = b.filter(function() {
        return "19" === a(this).attr("act")
      }).first(),
      d = a('div[act="19"]', x).attr("aria-label");
    1 >
      b.length && (b = a(".iH .VP5otc-tOAp0c", x), b = b.filter(function() {
        return -1 !== a(this).text().indexOf(d)
      }).first());
    1 > b.length && (b = a(".iH .QkhFhe", x), b = b.filter(function() {
      return -1 !== a(this).parent().attr("title").indexOf(d)
    }).first());
    var c = 0 < b.length;
    b.each(ga);
    return c
  }

  function fe(b, d) {
    var c = window.location.hash;
    fb() && (Ab = !1, window.close());
    if ("return" === d) {
      if (K()) {
        zb();
        Ab = !1;
        window.onbeforeunload = !1;
        alert(b);
        window.close();
        return
      }
      zb();
      Cc()
    } else if ("send" === d || "send_new_compose" === d) {
      ba = String(document.location);
      if (K()) {
        alert(b);
        window.close();
        return
      }
      if (!Cc()) {
        window.location.hash = $b ? "#mbox" : "#inbox";
        if (sb() || tb()) a(".gB.acO", x).hide().after("<div>" + b + "</div>"), X();
        setTimeout(aa, 5E3)
      }
    }
    Bc();
    aa();
    var e = setInterval(function() {
      if (window.location.hash !== c || "#inbox" === c || "#mbox" === c) Qa(b, 5E3), clearInterval(e)
    }, 2E3)
  }

  function Ya(a, d, c) {
    setTimeout(function() {
      fe(a, c)
    }, d)
  }

  function Dc(a) {
    var d;
    3 === q() ? (d = a.find(".conditional-caption-text").width(), d = "Boomerang this" === Va ? [535 + d, 450 + d] : [515 + d, 430 + d]) : d = "Boomerang this" ===
      Va ? [580, 530] : [565, 485];
    var c = Ac(a).width();
    a.toggleClass("b4g-narrow", c < d[0]);
    a.toggleClass("b4g-narrow-sm", c < d[1]);
    c = a.parent().find(".email-meter");
    if (d = c.data("$expandedView")) a = Bb(c) ? c.closest(".nH[role=list]") : a, c = 0 > a.height() - 50 - d.find(".email-meter-display-inner").get(0).scrollHeight || fb(), a.toggleClass("em-short", c), d.toggleClass("em-short", c)
  }

  function Ec(b, d) {
    var c = W("bcc", b);
    if (0 < a.trim(d).length && 0 > c.indexOf(d)) {
      var c = b.find("[name=bcc]").first(),
        e = c.val();
      0 < a.trim(e).length ? c.val(e + ", " +
        d) : c.val(d);
      1 !== q() && (b.find(".aB.gQ.pB").click(), b.find("[name=to]").focus())
    }
  }

  function Fc() {
    u("It looks like Gmail hasn't saved this draft yet. Please allow Gmail to autosave (such as by adding an extra space after the email content and waiting until 'Saved' appears), and then click Send Later again.")
  }

  function ac(b, d) {
    window.getSelection().removeAllRanges();
    a(ra(b)).append("<span/>").each(ga);
    a("[role='toolbar'] > [command='+bold']", b).each(ga);
    setTimeout(function() {
      a("[role='toolbar'] > [command='+bold']",
        b).each(ga);
      e()
    }, 300);
    a(".oG", b).text("");
    a(".aOy", b).removeClass("aOy");
    a(".zu", b).removeClass("zu");
    var c = 0,
      e = function g() {
        c++;
        if (40 < c) d(null);
        else {
          var e = a(".oG", b);
          e.hasClass("aOy") || 38 < c && 0 < a.trim(e.text()).length || 0 < a(".zu", b).length ? setTimeout(function() {
            d(null)
          }, 2E3) : setTimeout(function() {
            g(b, d)
          }, 250)
        }
      }
  }

  function Qd() {
    ge();
    setInterval(he, 500);
    Gc(function() {
      Ja({
        type: "is-inbox-zero"
      })
    });
    ie();
    je()
  }

  function je() {
    for (var a = "........................................;.......................=II=.............;...................~+++777777:..........;...............,7+===+?777777ZZ:........;............+ZZZI+====III777$ZZZI.......;.........~ZZZZZZ?=++........7ZZZZZ......;.......I$$$ZZZZZ,.............,ZZZ7.....;.....$$$$$ZZ:...........................;...,$$$7~...............................;........................................;                                        ; Like Boomerang for Gmail?              ; Join us at: https://boomerangapp.com/jobs.html;                                        ".split(";"),
        d = 0; d < a.length; d++) console.log("%c" + a[d], "color: blue; font-family: monospace; font-size: small")
  }

  function he() {
    ba = String(document.location);
    0 < ba.indexOf("mbox") && ($b = !0);
    0 < ba.indexOf("inbox") && ($b = !1);
    K() || ke();
    x = F();
    if (fb()) le();
    else {
      a(me, x);
      var b = a(Hc, x);
      0 < a(".aDh").length && (K() ? (Ic(), Jc(a("body"))) : ne());
      0 < b.length && (oe(), sb() || tb() || pe(), Ic(), ee());
      qe();
      re();
      b = 0 < a("#ibp-main").length;
      if (bc()) a(".ibp-ftue-tooltip").remove(), a("#ibp-main").remove();
      else if (b) cc();
      else if (dc()) {
        se();
        cc();
        var b =
          new Date,
          d = new Date(R("ibp_sync_timeout_window_" + y()));
        b < d || (Kc(), te())
      } else ue(), cc(), ve();
      we();
      0 < a(".boomerang-menu-is-active").length && 0 === a(".boomerang-menu-is-active").find("#b4g_menu").length && a(".boomerang-menu-is-active").removeClass("boomerang-menu-is-active aqw");
      xe()
    }
  }

  function ye(a) {
    a.preventDefault();
    a.stopPropagation()
  }

  function we() {
    a(".zA:not(.boomeranginlinebutton)").each(function(b, d) {
      a(d).addClass("boomeranginlinebutton");
      var c = a(d).find("*[role='toolbar']");
      0 === c.find("*[data-tooltip='Boomerang']").length &&
        ($boomerang = a('<li class="bqX boomerang-button" data-tooltip="Boomerang"><img src="https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/tinyboomlogo.png" style="vertical-align: middle;"></li>'), c.prepend($boomerang), a(d).mouseout(function(b) {
          a(this).hasClass("boomerang-menu-is-active") && b.stopImmediatePropagation()
        }), $boomerang.click(function(b) {
          var c = 0 < a(".boomerang-menu-is-active").length;
          if (1 === a(d).find("#b4g_menu").length) a(".boomerang-menu-is-active").removeClass("boomerang-menu-is-active"),
            a("#b4g_menu").remove();
          else {
            c && (a(".boomerang-menu-is-active").removeClass("boomerang-menu-is-active"), a("#b4g_menu").remove());
            var g = a(d).find("[data-thread-id]").attr("data-thread-id").replace("#", "");
            a(d).addClass("boomerang-menu-is-active");
            ec(b, this, function(b) {
              var c = a("#note_entry", x).val();
              null == c && (c = "");
              T = b = xa(b, 6);
              var e = Ka(b, !1),
                f = b.valueOf(),
                p = "true" === a("#gm-boomerang-reply-checkbox").find(".gm-checkbox").attr("aria-checked"),
                t = a("<div class='overlay' style='background: #FFF; opacity: 0.1; filter:alpha(opacity=1);'></div>");
              a("body").append(t);
              Lc();
              Da(function() {
                a.ajax({
                  type: "post",
                  url: "https://b4g.baydin.com/gmailmigration/boomerangfromthreadlist",
                  data: {
                    conditional: p,
                    notes: c,
                    date: f,
                    threadIds: g
                  },
                  xhr: J,
                  success: function(b) {
                    var c = b.status;
                    if ("success" === c) {
                      a(d).find(".brq").each(ga).click();
                      aa();
                      var f = "Messages will return " + e + ". ";
                      setTimeout(function() {
                        Qa(f, 5E3)
                      }, 2E3)
                    } else "error" === c ? u(b.message) : "upgrade" === c ? u(b.message, "Boomerang for Gmail", {
                      Upgrade: {
                        text: "Upgrade to schedule",
                        "class": "b4g-button green",
                        click: function() {
                          window.open("https://b4g.baydin.com/subscriptions",
                            "_blank")
                        }
                      },
                      "Never mind": {
                        text: "Never mind",
                        "class": "b4g-button dialog-gray",
                        click: function() {
                          a(this).dialog("destroy")
                        }
                      }
                    }, {
                      width: 350,
                      dialogClass: "b4g-upgradenag-dialog"
                    }) : u("Something went wrong while using bulk boomerang. Please try again.")
                  },
                  error: function(a) {
                    u("Something went wrong while using bulk boomerang. Please try again.")
                  },
                  complete: function() {
                    X();
                    aa();
                    M.expire_cache();
                    t.remove()
                  },
                  dataType: "json"
                })
              })
            });
            b = parseInt(a("#b4g_menu").css("left"));
            a("#b4g_menu").css({
              left: (b - 100).toString() + "px"
            })
          }
        }))
    })
  }

  function ke() {
    var b = F();
    if (!(0 < a("#b4g_manage", b).length || "" === y())) {
      var d = a("#gbwa");
      0 === d.length && (d = a("gb_kb"));
      var c, e;
      3 === q() ? (c = "width: 40px; height: 40px; padding: 4px;display: inline-block;vertical-align: middle;", e = "top: 13.5px; left: 9px;") : (c = "", e = "top: 7px; left: 3px;");
      d.first().before('<div class="manage_menu" style="display: inline-block; -webkit-flex: 0 0 auto; flex: 0 0 auto;' + c + '" id="b4g_manage"><div><img id="b4g_app_loader_icon" src="https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/b4g_launcher_light.png" title="Boomerang" style="position: relative;' +
        e + '"/></div></div>');
      a(".gb_ca").click(function() {
        a(b).click()
      });
      a("#b4g_app_loader_icon").hover(function() {
        a(this).attr("src", "https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/b4g_launcher_color.png")
      }, function() {
        a(this).attr("src", "https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/b4g_launcher_light.png")
      });
      a("#b4g_manage", b).click(function() {
        Mc(a(this))
      });
      d = a(".gb_5.gb_tb.gb_f.gb_sb");
      c = d.css("min-width");
      c = (parseInt(c, 10) + 40).toString() + "px";
      d.css("min-width", c)
    }
  }

  function Mc(b) {
    var d,
      c;
    b = a(".b4g_manage_dropdown", x);
    if (0 < b.length) a(b).remove();
    else {
      b = Xd();
      c = "https://b4g.baydin.com/managelogin?guser=" + encodeURIComponent(y()) + "&userNum=" + b;
      b = "https://b4g.baydin.com/submitinvitelogin?email=" + encodeURIComponent(y());
      var e = la();
      b = Nc(e) ? "<ul style='list-style-type: none; line-height: 1.8em; padding: 0px 10px; margin-top: 10px; margin-bottom: 10px;'> <li id='tmmanage' > <a href='" + c + "' class='top_menu_option' target='_blank' >Manage scheduled messages</a></li><li id='tmsettings' ><a class='top_menu_option' target='_blank' style='cursor:pointer;'>Settings</a></li><li id='tmtoolbox' > <a href='https://b4g.baydin.com/toolbox' class='top_menu_option' target='_blank' >Toolbox</a></li><li id='tminsights' ><a href='https://b4g.baydin.com/insights/insightsfromgmail?guser=" +
        encodeURIComponent(y()) + "' class='top_menu_option' target='_blank'>Boomerang Insights <span class='b4g-insights-new'>NEW</span></a></li></ul><div style='padding:0px 8px'><div style=\"border-top-style: solid;border-width: 1px;border-color: #ccc;\"></div></div><ul style='list-style-type: none; line-height: 1.8em; padding: 0px 10px; margin-top: 10px; margin-bottom: 10px;'> <li id='tmpremiumsupport' > <a href='https://b4g.baydin.com/premiumsupport' class='top_menu_option' target='_blank' >Premium Support</a></li><li id='tmfaq' > <a href='https://www.boomeranggmail.com/faq.html' class='top_menu_option' target='_blank' >Help</a></li><li id='tmhowto' > <a class='top_menu_option' target='_blank' style='cursor: pointer'>How To</a></li></ul><div style='padding:0px 8px'><div style=\"border-top-style: solid;border-width: 1px;border-color: #ccc;\"></div></div><ul style='list-style-type: none; line-height: 1.8em; padding: 0px 10px; margin-top: 10px; margin-bottom: 10px'> <li id='tmfriend' ><a href='" +
        b + "' class='top_menu_option' target='_blank'>Refer a friend</a></li><li id='tmbuy' > <a href='https://b4g.baydin.com/subscriptions?guser=" + encodeURIComponent(y()) + "' class='top_menu_option' target='_blank'>Buy a subscription</a></li></ul><div style='padding:0px 8px'><div style=\"border-top-style: solid;border-width: 1px;border-color: #ccc;\"></div></div><ul style='list-style-type: none; line-height: 1.8em; padding: 0px 10px; margin-top: 10px; margin-bottom: 10px'> <li id='tmblog' ><a href='https://blog.boomerangapp.com?utm_source=b4g+dropdown&utm_medium=gmail' class='top_menu_option' target='_blank'>Data-backed productivity tips</a></li><li id='tmjobs' > <a href='https://www.boomerangapp.com/jobs.html?utm_source=b4g+dropdown&utm_medium=gmail' class='top_menu_option' target='_blank'>We are hiring!</a></li></ul>" :
        "<ul style='list-style-type: none; line-height: 1.8em; padding: 0px 10px; margin-top: 10px; margin-bottom: 10px;'> <li id='tmmanage' > <a href='" + c + "' class='top_menu_option' target='_blank' >Manage scheduled messages</a></li><li id='tmsettings' ><a class='top_menu_option' target='_blank' style='cursor:pointer;'>Settings</a></li><li id='tminsights' ><a href='https://b4g.baydin.com/insights/insightsfromgmail?guser=" + encodeURIComponent(y()) + "' class='top_menu_option' target='_blank'>Boomerang Insights <span class='b4g-insights-new'>NEW</span></a></li></ul><div style='padding:0px 8px'><div style=\"border-top-style: solid;border-width: 1px;border-color: #ccc;\"></div></div><ul style='list-style-type: none; line-height: 1.8em; padding: 0px 10px; margin-top: 10px; margin-bottom: 10px;'> <li id='tmfaq' > <a href='https://www.boomeranggmail.com/faq.html' class='top_menu_option' target='_blank' >Help</a></li><li id='tmhowto' > <a class='top_menu_option' target='_blank' style='cursor: pointer'>How To</span></li></ul><div style='padding:0px 8px'><div style=\"border-top-style: solid;border-width: 1px;border-color: #ccc;\"></div></div><ul style='list-style-type: none; line-height: 1.8em; padding: 0px 10px; margin-top: 10px; margin-bottom: 10px'> <li id='tmfriend' ><a href='" +
        b + "' class='top_menu_option' target='_blank'>Refer a friend</a></li><li id='tmbuy' > <a href='https://b4g.baydin.com/subscriptions?guser=" + encodeURIComponent(y()) + "' class='top_menu_option' target='_blank'>Buy a subscription</a></li></ul><div style='padding:0px 8px'><div style=\"border-top-style: solid;border-width: 1px;border-color: #ccc;\"></div></div><ul style='list-style-type: none; line-height: 1.8em; padding: 0px 10px; margin-top: 10px; margin-bottom: 10px'> <li id='tmblog' ><a href='https://blog.boomerangapp.com?utm_source=b4g+dropdown&utm_medium=gmail' class='top_menu_option' target='_blank'>Data-backed productivity tips</a></li><li id='tmjobs' > <a href='https://www.boomerangapp.com/jobs.html?utm_source=b4g+dropdown&utm_medium=gmail' class='top_menu_option' target='_blank'>We are hiring!</a></li></ul>";
      var f;
      3 === q() ? (c = "", f = "12px", e = "J-M J-M-ayU aka gm-manage-boomerang", f = "") : (c = "box-shadow: 0 2px 10px rgba(0,0,0,.2); left:-15px;", f = "auto", e = "", f = '<div class="b4g_manage_dropdown" style="display:block; margin-left:5px; left:' + f + '; border-color: transparent;border-style: dashed dashed solid;border-width: 0 8px 8px;position: absolute;z-index: 1;height: 0;width: 0;-webkit-animation: gb__a .2s;animation: gb__a .2s;border-bottom-color: #ccc;border-bottom-color: rgba(0,0,0,.2);top: 36px;"></div><div class="b4g_manage_dropdown" style="display:block; margin-left:5px; left:' +
        f + '; border-color: transparent;border-bottom-color: #fff;border-style: dashed dashed solid;border-width: 0 8px 8px;position: absolute;top: 37px;z-index: 1;height: 0;width: 0;-webkit-animation: gb__a .2s;animation: gb__a .2s;"></div>');
      d = a('<div class="b4g_manage_dropdown manage_menu ' + e + '" style="' + c + 'display: block; width:200px; margin-left:-5px; background: #fff; border: 1px solid #ccc; border-color: rgba(0,0,0,.2); overflow: hidden; position: absolute; right: 0; top: 44px; -webkit-animation: gb__a .2s; animation: gb__a .2s; -webkit-border-radius: 2px; border-radius: 2px; -webkit-user-select: text; ">' +
        b + "</div>" + f);
      0 <= ["newmanjb@gmail.com", "nick.douglas@lifehacker.com", "katie.offleash@gmail.com", "reggrog@gmail.com", "mikaelabennett35@gmail.com"].indexOf(y().toLowerCase()) || y().endsWith("@baydin.com");
      3 !== q() ? (b = d.find("a"), b.css("color", "#36c"), b.css("text-decoration", "none"), b.hover(function() {
        a(this).css("text-decoration", "underline")
      }, function() {
        a(this).css("text-decoration", "none")
      })) : (d.find("li").click(function(b) {
        var d = "A" !== b.target.nodeName;
        b = containsLink = a(b.target).find("a").attr("href");
        d && containsLink && window.open(b, "_blank")
      }), b = a("#b4g_app_loader_icon").offset(), d.css({
        top: b.top + 36 + "px",
        left: b.left - 70 + "px",
        position: "fixed"
      }));
      d.appendTo("#b4g_manage");
      n(["Top Menu", "Open menu"]);
      b = R("b4g-inline-manage-last-update-" + y());
      null == b && (b = new Date, b = b.getMonth() + 1 + "/" + b.getDate() + "/" + b.getFullYear() + " 12:00 AM");
      a(".tmdataupdate", x).text(b);
      a(x).click(function l(b) {
        b = Wa(b);
        0 === a(b).parents().andSelf().filter("#b4g_manage").length && (a(d).remove(), a(x).unbind("click", l))
      });
      a("#tmdata",
        x).click(function() {
        Q(function() {
          M.expire_cache();
          Qa("Updating...", 2E3)
        })
      });
      a("#tmmanage", x).click(function() {
        n(["Top Menu", "Click manage scheduled messages"])
      });
      a("#tmbuy", x).click(function() {
        n(["Top Menu", "Click buy a subscription"])
      });
      a("#tmfaq", x).click(function() {
        n(["Top Menu", "Click help"])
      });
      a("#tmhowto", x).click(function() {
        Vb(1);
        n(["Top Menu", "Click How To"])
      });
      a("#tmfriend", x).click(function() {
        n(["Top Menu", "Click tell a friend"])
      });
      a("#tmblog", x).click(function() {
        n(["Top Menu", "Click blog"])
      });
      a("#tminsights", x).click(function() {
        n(["Top Menu", "Click insights"])
      });
      a("#tmjobs", x).click(function() {
        n(["Top Menu", "Click jobs"])
      });
      a("#tmtoolbox", x).click(function() {
        n(["Top Menu", "Click toolbox"])
      });
      a("#tmpremiumsupport", x).click(function() {
        n(["Top Menu", "Click premium support"])
      });
      a("#tmsettings", x).click(function() {
        Q(ze);
        n(["Top Menu", "Click settings"])
      })
    }
  }

  function oe() {
    var b = F();
    if (!(0 < a(".boomerang-button:visible", b).length || 1 > a(xc, b).length)) {
      var d = document.createElement("div"),
        c = "";
      3 ===
        q() && (c = " gm-boomerang-button-thread");
      d.innerHTML = "<div aria-haspopup='true' style='-webkit-user-select: none; -moz-user-select:none;margin-bottom:0px;margin-top:-2px; outline: none;' role='button' class='T-I J-J5-Ji ar7 nf T-I-ax7 L3" + c + "' tabindex='0'><img class='f tk3N6e-I-J3' src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/tinyboomlogo.png' style='vertical-align: middle;'/> Boomerang <div class='VP5otc-d2fWKd tk3N6e-I-J3 J-J5-Ji'> </div></div>";
      a(d).attr("class", "G-Ni J-J5-Ji boomerang-button b4g_button");
      for (var c = null, b = a(Ae, b), e = 0; e < b.length; e++) c = d.cloneNode(!0), a(c).click(function(a) {
        ec(a, this, Oc);
        n(["thread menu", "click"])
      }), b.get(e).appendChild(c)
    }
  }

  function ne() {
    function b(b) {
      if (0 === a(".sendLaterTable", b).length) {
        var c = a(".aDj", b);
        if (0 === c.length) return;
        var e = 3 === q() ? eb : rb;
        c.append(e);
        a(".send-later-button", b).click(function(a) {
          Pc(a, this, !1)
        });
        a(".sendboomerang-button", b).click(function(a) {
          Qc(a, this, !1)
        });
        try {
          Rc(b)
        } catch (w) {}
        var c = yc(b),
          f = zc(b),
          g = function() {
            var c = a(".boomerangSendCheck", b).is(":checked"),
              e = oa(b);
            c ? (c = Sc(b), 1 === q() ? (c = gb("https://b4g.baydin.com/mailcruncher/schedulereturndelay", c), U(c, function(a) {
              E(a) || 20 === a ? (sa(a), M.expire_cache()) : 1 !== a ? u("Your most recent Boomerang-on-Send failed. To Boomerang your sent email, please open your message in 'Sent Mail' and Boomerang the message manually. <br/><br/> Error Details:<br/> " + pa[a]) : 1 === a && (Ja({
                type: "return-later"
              }), M.expire_cache())
            }, "success")) : a.ajax({
              type: "POST",
              url: "https://b4g.baydin.com/gmailmigration/boomerangfromdraft",
              data: c,
              xhr: J,
              success: function(a) {
                Tc(a)
              }
            })) : e && Uc(b)
          };
        c.click(g).keydown(function(a) {
          32 !== a.which && 13 !== a.which || g()
        });
        var l = function() {
          var c = a(".boomerangSendCheck", b).is(":checked"),
            e = oa(b);
          if (c || e) f.each(ga), u("<p style='padding-top: 15px; font-size: 18px; font-weight: bold; margin: 0px 55px; color:#444;'><img style='position: absolute; left:40px; width: 23px;' src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/warning.png'>Using Gmail's Schedule Send will disable all Boomerang features on this message.</p><p style='font-size: 14px; color:#444; margin: 0px 55px;'>Instead, please use Boomerang's <img class='b4g-send-later-button-img' style='position: relative; top: 16px; width: 93px;' src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/send-later-button.png'> to schedule this message.</p>",
            "Boomerang for Gmail", {
              Okay: {
                text: "OK, I'll use Send Later",
                "class": "b4g-button blue scheduled-send-ok",
                click: function() {
                  a(this).dialog("destroy");
                  a(".send-later-button", b).click();
                  n(["gmail scheduled send dialog", "ok"])
                }
              },
              Disable: {
                text: "Disable Boomerang features on this message",
                "class": "b4g-button dialog-gray scheduled-send-disable",
                click: function() {
                  c && a(".boomerangSendCheck", b).attr("checked", !1);
                  e && a(".b4g-tracking-toggle", b).trigger("b4g-toggle-state");
                  a(this).dialog("destroy");
                  n(["gmail scheduled send dialog",
                    "disable"
                  ])
                }
              }
            }, {
              width: 550,
              dialogClass: ""
            }), n(["gmail scheduled send dialog", "show"]), a(".scheduled-send-ok,.scheduled-send-disable").css({
            display: "block",
            margin: "10px auto",
            width: "400px",
            height: "30px"
          }), a(".b4g-ui-dialog-buttonpane").css({
            "text-align": "center",
            "padding-bottom": "35px"
          }), a(".b4g-send-later-button-img").click(function() {
            a(".scheduled-send-ok").click()
          })
        };
        f.click(l).keydown(function(a) {
          32 !== a.which && 13 !== a.which || l()
        });
        a(".boomerangSendCheck", b).click(function() {
          Za(b)
        });
        a(".boomerangSendCheck",
          b).change(function() {
          n(["boomerang this", a(this).is(":checked") ? "checked" : "un-checked"])
        });
        a(".boomerangSendCondition", b).change(function() {
          a(".boomerangSendCheck", b).attr("checked", !0);
          var c = a(this).val();
          n(["Send and Boomerang", "Change 'if i don't hear back' field", c]);
          if ("no click" === c || "no open" === c) oa(b) || a(".b4g-tracking-toggle", b).trigger("b4g-toggle-state");
          Za(b)
        });
        var k = a(".GW, .bv8", b);
        if (0 < k.length) {
          var h = parseInt(k.css("bottom"), 10),
            r = a(".aoD.hl", b)[0],
            p = a(".fX.aXjCH", b)[0],
            t = function() {
              if (a(r).is(":visible")) k.css("bottom",
                h.toString() + "px");
              else {
                var b = a(p).innerHeight();
                k.css("bottom", (h + 42 + b - 78).toString() + "px")
              }
            };
          (new ka(function(a) {
            a.forEach(t)
          })).observe(r, {
            attributes: !0
          });
          a(".fX.aXjCH", b).bind("click keyup keydown", t);
          a(".fX.aXjCH textarea", b).bind("focus blur", t);
          a(".aB.gQ.pE, .aB.gQ.pB", b).bind("click", function() {
            setTimeout(function() {
              t()
            })
          })
        }
        0 === b.find(".HQ").length && (a(".Am.Al", b).focus(), setTimeout(function() {
          a(".aoD.hl", b).focus()
        }, 100));
        Vc(b);
        va.add_compose_listen(b)
      }
      Dc(b)
    }
    a(".nH.Hd[role='dialog']").each(function() {
      var d =
        a(this);
      ra(d) && b(d)
    })
  }

  function Tc(a) {
    var d = a.status;
    "success" === d ? (Ja({
      type: "return-later"
    }), M.expire_cache()) : "nag" === d || "paywall" === a.message ? (ya(a.message), M.expire_cache()) : "error" === d && u("Your most recent Boomerang-on-Send failed. To Boomerang your sent email, please open your message in 'Sent Mail' and Boomerang the message manually. <br/><br/> Error Details:<br/> " + a.message)
  }

  function Ic() {
    function b(b) {
      if (0 === a(".sendLaterTable", b).length) {
        var c;
        if (3 !== q() || K()) 3 === q() && K() ? (c = b.find(".aDh"),
          c.after(eb)) : (c = b.find(".aDh"), c.after(rb));
        else {
          b.find(".aDh").parent().parent().after(Be);
          c = b.find(".aDh");
          c.append(eb);
          a(".sendLaterTable", b).addClass("b4g-adjust-reply-send-later-container");
          var e = b.find(".aDj")[0],
            f = function() {
              if (!(Date.now() < g)) {
                g = Date.now() + 15;
                sendLaterDistFromTop = b.find(".send-later-button")[0].getBoundingClientRect().bottom;
                screenHeight = window.innerHeight;
                var a = 0 > screenHeight - sendLaterDistFromTop;
                l != a && (a ? b.find(".sendLaterTable").css({
                    position: "relative",
                    bottom: "12px"
                  }) :
                  b.find(".sendLaterTable").css({
                    position: "initial",
                    bottom: "0px"
                  }));
                l = a
              }
            },
            g = Date.now() + 15,
            l = !1,
            k = new ka(function(a) {
              a.forEach(f)
            });
          k.observe(e, {
            attributes: !0,
            attributeFilter: ["style"]
          })
        }
        b.append("<div>&nbsp</div><div>&nbsp</div><div>&nbsp</div>");
        e = 0 < a(".aDd").length;
        if (K() && !e) {
          var h = c.height();
          c.css("height", (h + 42).toString() + "px");
          var r = a(".aoD.hl")[0],
            p = c.css("margin-top"),
            t = parseInt(p, 10) - h,
            t = 3 === q() ? t - 2 : t,
            t = t.toString() + "px",
            f = function() {
              a(r).is(":visible") ? c.css("margin-top", t) : c.css("margin-top",
                p)
            },
            k = new ka(function(a) {
              a.forEach(f)
            });
          k.observe(r, {
            attributes: !0
          });
          f();
          var k = a(".GP")[0],
            w = function() {
              Ce(function() {
                var b = a(".qz.aXjCH"),
                  c = b.css("max-height"),
                  c = (parseInt(c, 10) - h).toString() + "px";
                b.css("max-height", c);
                b = a(".Am.Al");
                c = b.css("min-height");
                c = (parseInt(c, 10) - h).toString() + "px";
                b.css("min-height", c)
              }, 250)
            };
          (new ka(function(a) {
            a.forEach(w)
          })).observe(k, {
            attributes: !0
          });
          w();
          k = a(".sendLaterTable", b);
          k.css("margin-top", "-" + (42).toString() + "px");
          k.css("border-top-width", "1px");
          var C = function() {
            var c =
              a(".GW", b);
            if (0 < c.length) {
              var e = parseInt(c.css("bottom"), 10);
              e ? c.css("bottom", (e + 42).toString() + "px") : c.css("bottom", (42).toString() + "px")
            } else setTimeout(C, 2E3)
          };
          C()
        }
        a(".send-later-button", b).click(function(a) {
          Pc(a, this, !0)
        });
        a(".sendboomerang-button", b).click(function(a) {
          Qc(a, this, !0)
        });
        a(".boomerangSendCondition", b).change(function() {
          a(".boomerangSendCheck", b).attr("checked", !0);
          var c = a(this).val();
          n(["Send and Boomerang", "Change 'if i don't hear back' field", c]);
          if ("no click" === c || "no open" ===
            c) oa(b) || a(".b4g-tracking-toggle", b).trigger("b4g-toggle-state");
          Za(b)
        });
        try {
          Rc(b)
        } catch (L) {}
        var k = yc(b),
          O = zc(b),
          S = function() {
            var c = a(".boomerangSendCheck", b).is(":checked"),
              e = oa(b);
            c ? (c = Sc(b), 1 === q() ? (c = gb("https://b4g.baydin.com/mailcruncher/schedulereturndelay", c), U(c, function(a, b, c) {
              E(a) || 20 === a ? (sa(a), M.expire_cache()) : 1 !== a ? u("Your most recent Boomerang-on-Send failed. To Boomerang your sent email, please open your message in 'Sent Mail' and Boomerang the message manually. <br/><br/> Error Details:<br/> " +
                pa[a]) : 1 === a && (Ja({
                type: "return-later"
              }), M.expire_cache())
            }, "success")) : a.ajax({
              type: "POST",
              url: "https://b4g.baydin.com/gmailmigration/boomerangfromdraft",
              data: c,
              xhr: J,
              success: function(a) {
                Tc(a)
              }
            })) : e && Uc(b)
          };
        k.click(S).keydown(function(a) {
          32 !== a.which && 13 !== a.which || S()
        });
        var m = function() {
          var c = a(".boomerangSendCheck", b).is(":checked"),
            e = oa(b);
          if (c || e) O.each(ga), u("<p style='padding-top: 15px; font-size: 18px; font-weight: bold; margin: 0px 55px; color:#444;'><img style='position: absolute; left:40px; width: 23px;' src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/warning.png'>Using Gmail's Schedule Send will disable all Boomerang features on this message.</p><p style='font-size: 14px; color:#444; margin: 0px 55px;'>Instead, please use Boomerang's <img class='b4g-send-later-button-img' style='position: relative; top: 16px; width: 93px;' src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/send-later-button.png'> to schedule this message.</p>",
            "Boomerang for Gmail", {
              Okay: {
                text: "OK, I'll use Send Later",
                "class": "b4g-button blue scheduled-send-ok",
                click: function() {
                  a(this).dialog("destroy");
                  a(".send-later-button", b).click();
                  n(["gmail scheduled send dialog", "ok"])
                }
              },
              Disable: {
                text: "Disable Boomerang features on this message",
                "class": "b4g-button dialog-gray scheduled-send-disable",
                click: function() {
                  c && a(".boomerangSendCheck", b).attr("checked", !1);
                  e && a(".b4g-tracking-toggle", b).trigger("b4g-toggle-state");
                  a(this).dialog("destroy");
                  n(["gmail scheduled send dialog",
                    "disable"
                  ])
                }
              }
            }, {
              width: 550,
              dialogClass: ""
            }), n(["gmail scheduled send dialog", "show"]), a(".scheduled-send-ok,.scheduled-send-disable").css({
            display: "block",
            margin: "10px auto",
            width: "400px",
            height: "30px"
          }), a(".b4g-ui-dialog-buttonpane").css({
            "text-align": "center",
            "padding-bottom": "35px"
          }), a(".b4g-send-later-button-img").click(function() {
            a(".scheduled-send-ok").click()
          })
        };
        O.click(m).keydown(function(a) {
          32 !== a.which && 13 !== a.which || m()
        });
        !e && K() && (a(".Am.Al", b).focus(), setTimeout(function() {
          a(".aoD.hl",
            b).focus()
        }, 100), ua.boomerangtheweb && (e = b.find("[name=to]").first(), k = y(), e.val(k)));
        a(".boomerangSendCheck", b).click(function() {
          Za(b)
        });
        Vc(b);
        va.add_compose_listen(b)
      }
      Dc(b)
    }
    a(".HE").each(function() {
      var a = Ca(this);
      ra(a) && b(a)
    })
  }

  function pe() {
    var b = F(),
      d = a(".b4g-magic", b);
    if (3 !== q()) var c = a(".cf.hX:contains('Boomerang')", b);
    else c = Xb(), c = a(".aim.ain:contains('Boomerang')", c);
    if (!(0 < d.length || 0 < c.length)) {
      c = Yd();
      c = De(c);
      d = Ee(c, new Date, 6);
      if (3 === q()) {
        a(".nH.V8djrc.byY", b).after("<div id='gm-boomerang-magic'></div>");
        var e = a("#gm-boomerang-magic", b)
      } else e = a(Fe, b);
      if (0 < d.length && d[0] > new Date && d[0] < (new Date).addMonths(18)) {
        var c = null != extractTime(c),
          f = new Date(d[0]),
          f = c ? f.addHours(-2) : f.addDays(-1);
        if (f > new Date) {
          var g = d[0],
            d = " <img class='f' src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/tinyboomlogo.png' style='margin: 1px 0px -1px 0px; vertical-align: middle;'/> Boomerang this? <select style='padding: 1px  0;line-height: 12px;' name='magicChoice' id='magicChoice' ><option value='the week before'>the week before</option><option value='the day before'>the day before</option><option value='the morning of'>the morning of</option><option value='2 hours before'>2 hours before</option><option value='the afternoon of'>the afternoon of</option><option value='the day after'>the day after</option><option value='the week after'>the week after</option></select>" +
            ("<strong> " + g.toString("MMM d, yyyy") + " " + g.toString("h:mmtt") + "</strong>. "),
            d = d + "<input type='submit' id='confirmMagic' value='Confirm'/>";
          e.attr("style", "height: 25px; padding-top: 5px; margin-bottom: 5px; text-align:center;");
          e.html("<span class='vh boomerang b4g-magic' style='font-weight: normal !important; background-color: #FFC; padding: 5px 5px 5px 5px; font-size: 80%; color: rgb(42, 93, 176);'>" + d + "</span> ");
          c ? a("#magicChoice option[value='2 hours before']", b).attr("selected", "selected") :
            a("#magicChoice option[value='the day before']", b).attr("selected", "selected");
          a("#confirmMagic", b).click(function() {
            var c = a("#magicChoice", b).val(),
              d;
            switch (c) {
              case "the week before":
                d = (new Date(g)).clearTime().addDays(-7).addHours(6);
                break;
              case "the day before":
                d = (new Date(g)).clearTime().addDays(-1).addHours(6);
                break;
              case "the morning of":
                d = (new Date(g)).clearTime().addHours(6);
                break;
              case "2 hours before":
                d = (new Date(g)).addHours(-2);
                break;
              case "the afternoon of":
                d = (new Date(g)).clearTime().addHours(12);
                break;
              case "the day after":
                d = (new Date(g)).clearTime().addDays(1).addHours(6);
                break;
              case "the week after":
                d = (new Date(g)).clearTime().addDays(7).addHours(6);
                break;
              default:
                d = (new Date(g)).addHours(-2)
            }
            e.attr("style", "height: 32px; list-style-type:none;padding: 0px 5px 5px 5px;text-align:center;");
            e.html("<img class='b4g-magic' src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/b4gloading.gif' alt='Loading...'>");
            Oc(d, {
              isByMagic: !0
            });
            n(["magic link", "click", c])
          })
        } else e.html("<span class='vh boomerang b4g-magic' style='display:none'></span>"),
          3 === q() && e.hide()
      } else e.html("<span class='vh boomerang b4g-magic' style='display:none'></span>"), 3 === q() && e.hide()
    }
  }

  function hb(b) {
    var d = F(),
      c = Wa(b);
    0 !== c.className.indexOf("ui") && 0 !== c.className.indexOf("f") && -1 === c.className.indexOf("VP5otc-d2fWKd") && -1 === c.className.indexOf("menu-anchor") && -1 === c.className.indexOf("b4g_menu") && -1 === c.className.indexOf("menu-caption") && -1 === c.className.indexOf("send-later-button") && -1 === c.className.indexOf("boomerang-button") && -1 === c.className.indexOf("sendboomerang-button") &&
      -1 === c.className.indexOf("conditional-caption") && -1 === c.className.indexOf("conditional-caption-text") && -1 === c.className.indexOf("overlay") && -1 === c.className.indexOf("ge-btn") && 0 === a(c).closest(".b4g-ui-datepicker,.b4g_menu,.b4g-ui-corner-all,.boomerang-button").length && (X(b, b.data.owner), a(d).unbind("click", hb))
  }

  function X(b, d) {
    a("#b4g_menu").remove();
    d && a("div", d).removeClass("T-I-Kq")
  }

  function $a(b) {
    b.datepicker({
      showOn: "button",
      buttonImage: "https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/calendarpicker_17x15.png",
      buttonImageOnly: !0,
      constrainInput: !1,
      dateFormat: "m/dd/yy",
      minDate: 0,
      onSelect: function(a, c) {
        var e = (new Date).toString("hh:mm tt");
        b.val(b.val() + " " + e);
        n(["boomerang menu", "select custom time", b.val()])
      },
      onClose: function(a, c) {
        b.focus()
      }
    });
    a(".b4g-ui-datepicker-trigger", x).css("margin-left", "5px");
    a(".b4g-ui-datepicker-trigger", x).css("vertical-align", "middle");
    3 === q() && a("#b4g-ui-datepicker-div").addClass("gm-datepicker")
  }

  function za(b) {
    var d = F();
    b && (Z = Ea(b), b = Ka(Z, !0), null == Z ? a("#date-preview", d).html("<span class='b4g_menu' style='color:#ff0000;'>" +
      b + "</span>") : Z < new Date ? a("#date-preview", d).html("<span class='b4g_menu' style='color:#ff0000;'>" + b + "</span>") : a("#date-preview", d).html("<span class='b4g_menu'>" + b + "</span>"), ia())
  }

  function ib(a) {
    a.submit(function(a) {
      a.preventDefault()
    })
  }

  function Wc(a, d) {
    var c = '<div class="b4g-menu-option">' + ('<a href="javascript:void(0)" style="border-width:0px;text-decoration:none;color:#333;line-height:1.1em;padding: 3px 11px;display:block;cursor:pointer;" class="b4g_menu_item menu-anchor J-N">' + a + "</a>") + "</div>";
    d && (c += '<div class="b4g-menu-divider" style="height:1px;margin:6px 11px;background:#ddd;"></div>');
    return c
  }

  function fc(a, d) {
    return '<div class="b4g-menu-option">' + ('<a href="javascript:void(0)" style="border-width:0px;text-decoration:none;color:#333;line-height:1.1em;padding: 3px 11px;display:block;cursor:pointer;" class="b4g-custom-menu-item menu-anchor J-N">' + a + "</a>") + "</div>"
  }

  function Cb(b) {
    a(".b4g_menu_item:contains('hour'):last", b).parent().after('<div class="b4g-menu-divider" style="height:1px;margin:6px 11px;background:#ddd;"></div>');
    a(".b4g_menu_item:contains('Tomorrow'):last", b).parent().after('<div class="b4g-menu-divider" style="height:1px;margin:6px 11px;background:#ddd;"></div>');
    var d = a(".b4g_menu_item:contains('days'),.b4g_menu_item:contains('week'),.b4g_menu_item:contains('month')").last(),
      d = a(d, b);
    d.parent().after('<div class="b4g-menu-divider" style="height:1px;margin:6px 11px;background:#ddd;"></div>')
  }

  function Xc(b) {
    a(".b4g-custom-menu-item:last", b).parent().after('<div class="b4g-menu-divider" style="height:1px;margin:6px 11px;background:#ddd;"></div>')
  }

  function Yc() {
    var b = F(),
      b = a("#b4g_inner_menu", b);
    0 < b.length && (b.empty(), a(".b4g-ui-datepicker").css("display", "none"), b.append('<li style="list-style-type:none;text-align:center;padding:15px 2px;margin:0px 0px;">Processing message...</li>'), b.append('<li style="list-style-type:none;padding:0px 10px 15px 10px;text-align:center;"><img src="https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/b4gloading.gif" alt="Loading..."></li>'), ia())
  }

  function La(b, d) {
    b.hover(function() {
      var b, e = xa(a(this).text(),
        d, !1);
      switch (a(this).text().toLowerCase()) {
        case "monday morning":
        case "tomorrow morning":
        case "tomorrow afternoon":
          b = Zc(e, !0);
          e = "" + e.toString("h:mm tt");
          b = b + ", around " + e;
          break;
        case "- by 5pm today":
        case "by 5pm today":
          b = "At a random time before 5pm today";
          break;
        case "- within 1 week":
        case "within 1 week":
          b = "At a random time within 1 week";
          break;
        case "- within 1 month":
        case "within 1 month":
          b = "At a random time within 1 month";
          break;
        case "- within 1 year":
        case "within 1 year":
          b = "At a random time within 1 year";
          break;
        default:
          b = Ka(e, !0)
      }
      null == b && (b = "");
      a(this).attr("title", b)
    }, function() {
      a(this).attr("title", "")
    })
  }

  function ia() {
    try {
      var b = F(),
        d = a("#b4g_inner_menu", b),
        c = a("#b4g_menu", b);
      d.height();
      c.css("min-height", d.height() + "px")
    } catch (e) {}
  }

  function gc() {
    var b = a("#b4g_user_menu_option_list li").length,
      d = a('#b4g-menu-default-times input[type="checkbox"]:checked').length;
    return b + d
  }

  function Db() {
    var b = gc(),
      d = a("#b4g-used-slot-indicator");
    a("#b4g_current_menu_item_count").text(b);
    13 <= b ? d.css("visibility", "visible") :
      d.css("visibility", "hidden")
  }

  function hc() {
    function b() {
      setTimeout(function() {
        h = !0
      }, 500)
    }
    X();
    var d = {
      Ok: {
        "class": "b4g-button blue b4g-custom-menu-update-button",
        text: "Update Menu",
        click: function() {
          Ge();
          a(this).dialog("destroy")
        }
      },
      Cancel: {
        "class": "b4g-button dialog-gray",
        text: "Cancel",
        click: function() {
          a(this).dialog("destroy")
        }
      }
    };
    if ("Old Safari" === z) alert(message);
    else {
      var c = F();
      a(".dialogdiv").remove();
      a("body", c).append(a("<div class='dialogdiv' id='b4g-customize-menu-dialog' style='display:none;'><div id='custom-b4g-container'><div id='customize_b4g_custom_menu_options'><h3 class='b4g-time-list-title'>Add your own menu item:</h3><div class='customize_menu_samples'>Examples: Tomorrow 8am, Monday 7am, +15 days, +3 weeks, +6 months, Dec 31</div><div id='custom_time_input'></div><ul id='b4g_user_menu_option_list'></ul></div><div id='customize_b4g_default_menu_options'><h3 class='b4g-time-list-title' style='margin-bottom:4px;'>Default items:</h3><table id='b4g-menu-default-times'><tr><td><input class='b4g-default-menu-item-checkbox' type='checkbox' checked /></td><td><span class='b4g-time-option'>In 1 hour</span></td></tr><tr><td><input class='b4g-default-menu-item-checkbox' type='checkbox' checked /></td><td><span class='b4g-time-option'>In 2 hours</span></td></tr><tr><td><input class='b4g-default-menu-item-checkbox' type='checkbox' checked /></td><td><span class='b4g-time-option'>In 4 hours</span></td></tr><tr><td><input class='b4g-default-menu-item-checkbox' type='checkbox' checked /></td><td><span class='b4g-time-option'>Tomorrow morning</span></td></tr><tr><td><input class='b4g-default-menu-item-checkbox' type='checkbox' checked /></td><td><span class='b4g-time-option'>Tomorrow afternoon</span></td></tr><tr><td><input class='b4g-default-menu-item-checkbox' type='checkbox' checked /></td><td><span class='b4g-time-option'>In 2 days</span></td></tr><tr><td><input class='b4g-default-menu-item-checkbox' type='checkbox' checked /></td><td><span class='b4g-time-option'>In 4 days</span></td></tr><tr><td><input class='b4g-default-menu-item-checkbox' type='checkbox' checked /></td><td><span class='b4g-time-option'>In 1 week</span></td></tr><tr><td><input class='b4g-default-menu-item-checkbox' type='checkbox' checked /></td><td><span class='b4g-time-option'>In 2 weeks</span></td></tr><tr><td><input class='b4g-default-menu-item-checkbox' type='checkbox' checked /></td><td><span class='b4g-time-option'>In 1 month</span></td></tr></table></div></div></div>"));
      a(".dialogdiv", c).dialog(a.extend({
        title: "Customize Boomerang Menu",
        modal: !0,
        height: "auto",
        closeOnEscape: !0,
        buttons: d,
        width: 415
      }));
      Xa();
      a(".b4g-ui-dialog-buttonset .b4g-button.blue").before("<span id='b4g-used-slot-indicator'>Using <span id='b4g_current_menu_item_count'>x</span> of 15 available slots</span>");
      3 === q() && a(".b4g-ui-dialog").addClass("gm-customize-modal");
      var e = {},
        c = JSON.parse(R("b4g-menu-customizations"));
      null != c && (e = c.defaultEntries);
      a("#customize_b4g_default_menu_options .b4g-time-option").parent().parent().each(function() {
        a(this).text() in
          e && !e[a(this).text()] && a(this).find("input:first").removeAttr("checked")
      });
      d = a("<form autocomplete='off' id='b4g-custom-time-input-form'><input type='text' name='time'/><input type='button' class='by-button by-button-secondary' id='b4g-add-button' style='margin: 3px 0 5px 3px;padding:3px 13px;' value='Add'/><div id='b4g-custom-time-entry-date-preview-div' style='color:#969696; margin-left:3px;'><span id='date-preview' style='color:green'></span></div></form>");
      a("#custom_time_input").replaceWith(d);
      var f = d.find("input[type=text]");
      ib(d);
      var g = a("#b4g-custom-time-input-form").outerWidth(!0),
        l = a("#b4g-add-button").outerWidth(!0),
        k = parseInt(f.css("border-left-width"), 10),
        k = k + parseInt(f.css("border-right-width"), 10);
      f.outerWidth(g - l - k);
      f.focus().select();
      f.keyup(function() {
        za(a(this).val())
      });
      var h = !0;
      f.keydown(function(b) {
        13 === b.keyCode && h && (h = !1, a("#b4g-add-button").trigger("click"))
      });
      f.focus(function() {
        za(a(this).val())
      });
      l = a(window).height();
      g = a("#b4g_user_menu_option_list").offset().top;
      k =
        a(".b4g-ui-dialog-buttonset").first().outerHeight();
      l = l - k - 20;
      a("#b4g_user_menu_option_list").css("max-height", l - g);
      g = [];
      null != c && (g = c.customEntries);
      for (c = 0; c < g.length; c++) $c(g[c], a("#b4g_user_menu_option_list"));
      Db();
      d.find("input[type=button]").click(function() {
        Z = Ea(f.val());
        var c = f.val().toLowerCase(),
          d = [];
        a(".b4g-custom-time-entry-text").each(function() {
          d.push(a(this).text().toLowerCase())
        });
        null == Z ? (alert("Boomerang doesn't understand your date format. Please try again."), b()) : Z < new Date ? (alert("This date is in the past. Please try again."),
          b()) : -1 !== d.indexOf(c) ? (alert("You have already added this custom menu item."), b()) : gc() < ad ? ($c(f.val(), a("#b4g_user_menu_option_list")), f.val(""), a("#date-preview").html(""), h = !0, a("#b4g_user_menu_option_list").animate({
          scrollTop: a("#b4g_user_menu_option_list").children("li").last().position().top
        }, 500)) : (alert(bd), b());
        Db()
      });
      d = a(".dialogdiv").parent().height();
      c = a(window).height();
      d > c && (g = a("#custom-b4g-container").height(), a("#custom-b4g-container").height(g - (d - c)), a("#custom-b4g-container").css({
        "overflow-y": "scroll"
      }));
      a(".dialogdiv").dialog({
        position: "center"
      });
      n(["Show dialog", "Customize Boomerang Menu"]);
      a(".b4g-default-menu-item-checkbox").change(function() {
        a(this).attr("checked") && gc() > ad && (a(this).attr("checked", !1), alert(bd));
        Db()
      })
    }
  }

  function He(a) {
    var d = R("b4gMenuEntries"),
      c = {};
    if (null == d) c[a] = 1;
    else if (c = JSON.parse(d), d = c[a], null == d) Ie(c), c[a] = 1;
    else {
      var e = [],
        f;
      for (f in c) c.hasOwnProperty(f) && e.push([f, c[f]]);
      e.sort(function(a, b) {
        return b[1] - a[1]
      });
      f = 1;
      2 < e.length && (f = e[2][1] / 2);
      c[a] = d + f
    }
    A("b4gMenuEntries",
      JSON.stringify(c))
  }

  function Ie(a) {
    var d = [],
      c;
    for (c in a) a.hasOwnProperty(c) && d.push([c, a[c]]);
    d.sort(function(a, b) {
      return b[1] - a[1]
    });
    if (25 < d.length)
      for (c = 10; c < d.length; c++) delete a[d[c][0]];
    if (1E3 < d[0][1])
      for (var e in a) a.hasOwnProperty(e) && (a[e] = Math.ceil(a[e] / 25));
    return a
  }

  function ic() {
    var a = R("b4g-menu-customizations"),
      d = [];
    null != a && (d = JSON.parse(a).customEntries);
    return d
  }

  function $c(b, d) {
    var c = a("<span class='b4g-custom-time-entry' style='margin-left:20px;'><img style='cursor:pointer;' src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/delete.png'></img></span>");
    c.click(function() {
      a(this).closest("li").remove();
      Db()
    });
    c.hover(function() {
      a(this).css("opacity", "1")
    }, function() {
      a(this).css("opacity", ".8")
    });
    var e = a("<span class='b4g-custom-time-entry-text b4g-custom-time-entry'>" + b.charAt(0).toUpperCase() + b.slice(1) + "</span>");
    d.append(e);
    e.wrap("<li class='b4g-custom-time-entry-wrapper'></li>");
    e.after(c)
  }

  function Ge() {
    var b = {};
    a("#customize_b4g_default_menu_options .b4g-time-option").each(function() {
      var c = a(this).text(),
        d = a(this).closest("tr").find("input:first").attr("checked");
      b[c] = d
    });
    var d = [];
    a("#b4g_user_menu_option_list .b4g-custom-time-entry-text").each(function() {
      d.push(a(this).text())
    });
    var c = {};
    c.customEntries = d;
    c.defaultEntries = b;
    A("b4g-menu-customizations", JSON.stringify(c))
  }

  function Eb(a) {
    var d = "In 1 hour;In 2 hours;In 4 hours;Tomorrow morning;Tomorrow afternoon;In 2 days;In 4 days;In 1 week;In 2 weeks;In 1 month".split(";"),
      c = JSON.parse(R("b4g-menu-customizations")),
      e = [];
    if (null != c)
      for (var c = c.defaultEntries, f = Object.keys(c), g = 0; g < f.length; g++) e[f[g].toLowerCase()] =
        c[f[g]];
    for (c = 0; c < d.length; c++) f = d[c], g = f.toLowerCase(), g in e && !e[g] || (f = Wc(f, !1), a.append(f))
  }

  function jc(b) {
    var d = a(this),
      c = d.find("div[role='checkbox']"),
      e = "true" !== c.attr("aria-checked"),
      f = "gm-boomerang-note-checkbox" === d.attr("id"),
      g = "gm-boomerang-reply-checkbox" === d.attr("id");
    "gm-boomerang-edit-note" !== b.target.id && (g && (n(["thread menu", "conditional boomerang", e ? "checked" : "un-checked"]), A("b4g_standard_boomerang_sticky_conditional-" + y(), e)), e ? f ? a("#notes_toggle").trigger("click") : (c.addClass("gm-checkbox-checked").attr("aria-checked",
      "true"), d.addClass("gm-checkbox-background-checked").removeClass("gm-checkbox-background-unchecked")) : (c.removeClass("gm-checkbox-checked").attr("aria-checked", "false"), d.addClass("gm-checkbox-background-unchecked").removeClass("gm-checkbox-background-checked"), a("#note_entry", x).val(""), f && a("#gm-boomerang-edit-note").hide()))
  }

  function ec(b, d, c) {
    var e = F();
    if (!(0 < a(b.target).closest("#b4g_menu").length)) {
      var f = e.getElementById("b4g_menu");
      if (f) X(b, d);
      else {
        a("div", d).addClass("T-I-Kq");
        var g, l, k, h,
          r = ["By 5pm today", "Within 1 week", "Within 1 month", "Within 1 year"];
        3 === q() ? (g = "J-M J-M-ayU aka gm-boomerang-menu", l = '<span style="padding: 0px; color: #666666!important;">Return Conversation to Inbox...</span>', k = '<li id="gm-boomerang-note-checkbox" class="b4g_menu b4g-menu-option" title="Attach a note for yourself. When the message returns to your Inbox, your note will be appended to the message thread."><div class="gm-checkbox" tabindex="1" role="checkbox" aria-checked="false" ><div class="T-Jo-auh"></div></div><span>with a note</span><img id="gm-boomerang-edit-note" data-tooltip="Edit Note" data-tooltip-delay="400" src="https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/notes_on@2x.png" /></li><li id="gm-boomerang-reply-checkbox" class="b4g_menu b4g-menu-option" title="Remember to follow up on messages if you don\'t get a response by a certain time."><div class="gm-checkbox" tabindex="1" role="checkbox" aria-checked="false" ><div class="T-Jo-auh"></div></div><span>if no reply</span></li>',
          h = "display: none;") : (g = "", l = '<span style="padding: 0px;">Return Conversation to Inbox:</span>', k = '<li class="b4g_menu b4g-menu-option" style="padding:6px 11px 6px 11px;"><input type="checkbox" id="conditionalBoomerang" class="b4g_menu" name="condBoomerang"/> Only if nobody responds</li>', h = "", r.forEach(function(a, b, c) {
          return c[b] = "- " + c[b]
        }));
        b = '<ul id="b4g_menu" tabindex="0" class="b4g_menu" style="padding:0px;position:absolute;left:' + a(b.currentTarget).position().left + 'px;  background-color: rgb(255, 255, 255); -webkit-user-select: none; min-width: 17em;min-height:auto;" role="menu" aria-haspopup="true" aria-activedescendant=""><div id="b4g_inner_menu" class="b4g_menu SK AX ' +
          g + '" style="-webkit-user-select: none; font-size:12px;color:#333;padding:0;"><li class="menu-caption" style="list-style-type:none;padding: 7px 11px 0 11px;margin: 0 0 1px 0;">' + l + '<img class="b4g_menu" id="notes_toggle" data-tooltip="Add Note to Self" data-tooltip-delay="400" src="https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/notes_off.png"  height="16px" style="opacity:.9;position:absolute;right:31px;top:6px;cursor:pointer;' + h + '"/><img id="b4g-menu-customization-button" data-tooltip="Customize Menu" data-tooltip-delay="400" src="https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/gear.png" height="16px" style="opacity:.9;position:absolute;right:11px;top:7px;cursor:pointer;"></li><div id="notes_menu" class="b4g_menu SK AX" style="display:none;min-width:17em;min-height:auto;left:2px;margin:5px;border:none;box-shadow:none;-moz-box-shadow:none;">' +
          Fb + "</div>" + k + '<li class="b4g-menu-divider" style="height:1px;margin:6px 11px 6px 11px;background:#ddd;"></li><li class="b4g-standard-times"></li><li class="b4g-custom-times"></li><li class="menu-caption" style="padding:7px 11px 4px 11px;">At a specific time:</li><li class="b4g-menu-option" style="padding: 0 0 7px 11px;"><div style="color: #666; font-style: italic; font-size: 10px; margin-top: 3px;" class="b4g_menu">Examples: "Monday 9am", "Dec 23"</div><div autocomplete="off"><div style="padding-top:3px; vertical-align: middle;" class="b4g_menu"><input style="margin-left:1px;padding:3px 22px 2px 2px;" class="b4g_menu" type="text" name="time" id="datepicker"><input id="specific-time-submit" type="submit" value="Confirm" style="margin: 0px 7px 5px 9px;font-size:11px;vertical-align:top;" class="b4g_menu by-button by-button-secondary"></div><div style="color:#969696;margin-left:1px;"><span id="date-preview" class="b4g_menu" style="color:green;"></span></div></div></li><li class="b4g-menu-divider" style="height:1px;margin:0px 11px;background:#ddd;"></li><li class="b4g-menu-option"><a id="random-time" class="menu-anchor" href="javascript:void(0)" style="margin:4px 0px;border-width:0px;color:#333;padding: 6px 11px;cursor:pointer;"><span style="vertical-align:bottom;margin-left:0px;">Random time</span><img src="https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/down.png" width="10px" style="opacity:.7;vertical-align:middle;margin:-2px 0px 0px 5px;"/></a></li><li class="random b4g-menu-option" style="display:none;"><a class="random_link menu-anchor" href="javascript:void(0)" style="border-width:0px;text-decoration:none;color:#333;line-height:1.1em;padding:3px 13px;display:block;cursor:pointer;">' +
          r[0] + '</a></li><li class="random b4g-menu-option" style="display:none;"><a class="random_link menu-anchor" href="javascript:void(0)" style="border-width:0px;text-decoration:none;color:#333;line-height:1.1em;padding:3px 13px;display:block;cursor:pointer;">' + r[1] + '</a></li><li class="random b4g-menu-option" style="display:none;"><a class="random_link menu-anchor" href="javascript:void(0)" style="border-width:0px;text-decoration:none;color:#333;line-height:1.1em;padding:3px 13px;display:block;cursor:pointer;">' +
          r[2] + '</a></li><li class="random b4g-menu-option" style="display:none;margin-bottom:6px;"><a class="random_link menu-anchor" href="javascript:void(0)" style="border-width:0px;text-decoration:none;color:#333;line-height:1.1em;padding:3px 13px;display:block;cursor:pointer;">' + r[3] + "</a></li></div></ul>";
        a(d).parent().append(b);
        b = a("#b4g_menu", e);
        g = b.find("form").first();
        ib(g);
        3 === q() && (a("#gm-boomerang-reply-checkbox, #gm-boomerang-note-checkbox").click(jc), a("#gm-boomerang-reply-checkbox > .gm-checkbox, #gm-boomerang-note-checkbox > .gm-checkbox").mousedown(function(a) {
            a.preventDefault()
          }),
          a("#gm-boomerang-edit-note").click(function(b) {
            a("#notes_toggle").trigger("click")
          }), b.css({
            top: "35px"
          }));
        va.enable_menu_arrow_keys(b);
        Nc(la()) && "true" === R("b4g_standard_boomerang_sticky_conditional-" + y()) && (3 === q() ? (a("#gm-boomerang-reply-checkbox").addClass("gm-checkbox-background-checked"), a("#gm-boomerang-reply-checkbox").find("div[role='checkbox']").addClass("gm-checkbox-checked").attr("aria-checked", "true")) : a("#conditionalBoomerang", e).attr("checked", !0));
        a("#conditionalBoomerang", e).change(function() {
          var b =
            a(this).is(":checked");
          n(["thread menu", "conditional boomerang", b ? "checked" : "un-checked"]);
          A("b4g_standard_boomerang_sticky_conditional-" + y(), b)
        });
        Eb(a(".b4g-standard-times", e));
        Cb(e);
        a(".b4g_menu_item", e).click(function() {
          var b = a(this).text();
          c(b);
          n(["boomerang menu", "send later time", b])
        });
        La(a(".b4g_menu_item", e), 6);
        Z = null == T || T < new Date ? Date.today().addDays(2).addHours(8) : T;
        g = Z.toString("M/d/yyyy h:mm tt");
        b = a("#datepicker", e);
        b.val(g);
        b.keyup(function() {
          var b = a(this).val();
          za(b)
        });
        b.focus(function() {
          var b =
            a(this).val();
          za(b)
        });
        a("input#specific-time-submit", e).click(function(a) {
          Gb(a, c)
        });
        a("#datepicker", e).keypress(function(a) {
          13 === a.which && Gb(a, c)
        });
        g = ic();
        if (0 < g.length) {
          for (l = 0; l < g.length; l++) k = fc(g[l], null), a(".b4g-custom-times", e).append(k);
          a(".b4g-custom-menu-item", e).hover(function() {
            a(this).addClass("J-N-JT")
          }, function() {
            a(this).removeClass("J-N-JT")
          });
          a(".b4g-custom-menu-item", e).click(function() {
            var b = a(this).text();
            cd(b, c);
            n(["b4g menu", "picked", b])
          });
          La(a(".b4g-custom-menu-item", e), 6)
        }
        a("#random-time",
          e).parent().toggle(function() {
          var b = a("#random-time:first-child", e);
          a(".random", f).show();
          b.html('<span style="vertical-align:bottom;margin-left:0px;">Random time</span><img src="https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/up.png" width="10px" style="opacity:.7;vertical-align:middle;margin:-2px 0px 0px 5px;"/>');
          ia();
          b = a("#b4g_inner_menu");
          b.scrollTop(b[0].scrollHeight);
          n(["thread menu", "random time", "opened"])
        }, function() {
          var b = a("#random-time:first-child", e);
          a(".random", f).hide();
          b.html('<span style="vertical-align:bottom;margin-left:0px;">Random time</span><img src="https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/down.png" width="10px" style="opacity:.7;vertical-align:middle;margin:-2px 0px 0px 5px;"/>');
          ia();
          n(["thread menu", "random time", "closed"])
        });
        a(".random_link", e).click(function() {
          var b = a(this).text();
          3 === q() && (b = "- " + b);
          c(b);
          n(["b4g menu", "random time", "picked - " + b])
        });
        La(a(".random_link", e), 6);
        Xc(e);
        g = a("#b4g-menu-customization-button", e);
        g.click(function() {
          hc()
        });
        g.hover(function() {
          a(this).css("opacity", "1")
        }, function() {
          a(this).css("opacity", ".9")
        });
        a(e).bind("click", {
          owner: d
        }, hb);
        $a(b);
        a(".b4g-ui-datepicker-trigger", e).css("cursor", "pointer");
        a(".b4g-ui-datepicker-trigger", e).css("margin-left",
          "-21px");
        a(".b4g-ui-datepicker-trigger", e).css("margin-top", "-2px");
        a(".b4g-ui-datepicker-trigger", e).hover(function() {
          a(this).css("box-shadow", "0px 0px 3px #aaa")
        }, function() {
          a(this).css("box-shadow", "none")
        });
        b.mousedown(function(a) {
          a.stopImmediatePropagation()
        });
        b.css("-moz-user-select", "text");
        b.parents().each(function() {
          a(this).css("-moz-user-select", "text")
        });
        a("#b4g_menu").parent().hasClass("bqY") || b.focus();
        b.select();
        a("span#date-preview.b4g_menu", e).text("");
        a("#note_entry", e).val("");
        a("#notes_toggle",
          e).click(function() {
          Hb(kc, dd, ed);
          n(["notes", "click"])
        }).hover(function() {
          a(this).css("opacity", "1")
        }, function() {
          a(this).css("opacity", ".9")
        });
        a("#notes_save_button, #notes_cancel_button").mousedown(function(a) {
          a.preventDefault()
        });
        a("#notes_save_button", e).click(function() {
          var b = a("#note_entry", e).val();
          if (Ib(b)) u(Jb);
          else {
            var c = a("#gm-boomerang-note-checkbox");
            3 === q() && (a("#note_entry", e).val() ? (a("#gm-boomerang-edit-note").show(), c.find("div[role='checkbox']").addClass("gm-checkbox-checked").attr("aria-checked",
              "true"), c.addClass("gm-checkbox-background-checked").removeClass("gm-checkbox-background-unchecked")) : (c.find("div[role='checkbox']").removeClass("gm-checkbox-checked").attr("aria-checked", "false"), c.addClass("gm-checkbox-background-unchecked").removeClass("gm-checkbox-background-checked"), a("#gm-boomerang-edit-note").hide()));
            jb();
            b && (a("#notes_toggle", e).attr("src", "https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/notes_on.png"), a("#notes_toggle", e).attr("data-tooltip", "Edit Note to Self"),
              a("#notes_toggle", e).css("top", "6px"));
            ia();
            3 === q() && (a("#datepicker").focus().parents().eq(2).addClass("b4g-state-selected"), a("#gm-boomerang-note-checkbox").removeClass("b4g-state-selected"))
          }
        });
        a("#notes_cancel_button", e).click(function() {
          if (3 === q()) {
            var b = a("#gm-boomerang-note-checkbox");
            b.find("div[role='checkbox']").removeClass("gm-checkbox-checked").attr("aria-checked", "false");
            b.addClass("gm-checkbox-background-unchecked").removeClass("gm-checkbox-background-checked");
            a("#gm-boomerang-edit-note").hide()
          }
          jb();
          a("#note_entry", e).val("");
          a("#notes_toggle", e).attr("src", "https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/notes_off.png");
          a("#notes_toggle", e).attr("data-tooltip", "Add Note to Self");
          a("#notes_toggle", e).css("top", "6px");
          ia();
          3 === q() && (a("#datepicker").focus().parents().eq(2).addClass("b4g-state-selected"), a("#gm-boomerang-note-checkbox").removeClass("b4g-state-selected"))
        });
        ia();
        3 === q() && a("#b4g_menu").click(ye)
      }
    }
  }

  function Oc(b, d) {
    function c() {
      Yc();
      U(w, function(a, b, c) {
        E(a) ? (sa(a), M.expire_cache()) :
          20 === a ? (sa(a), window.location = C, M.expire_cache()) : 1 !== a ? (u("Attempt failed: " + pa[a]), window.location = C) : 1 === a && (Ja({
            type: "return-later",
            isByMagic: d.isByMagic
          }), M.expire_cache())
      }, O);
      Ya(O, 300, "return")
    }

    function e() {
      var b;
      b = 3 === q() ? "true" === a("#gm-boomerang-reply-checkbox").find(".gm-checkbox").attr("aria-checked") ? "True" : "False" : a("#conditionalBoomerang", f).attr("checked") ? "True" : "False";
      Yc();
      b = {
        guser: g,
        gmailId: a(".adn.ads[data-message-id]:visible").last().attr("data-message-id").replace("#", ""),
        notes: t,
        offset: r.valueOf(),
        conditional: b,
        threadId: fa()
      };
      a.ajax({
        type: "POST",
        url: "https://b4g.baydin.com/gmailmigration/boomerangfromconversation",
        data: b,
        xhr: J,
        success: function(a) {
          var b = a.status;
          "success" === b ? (Ja({
            type: "return-later",
            isByMagic: d.isByMagic
          }), M.expire_cache()) : "nag" === b && "paywall" !== a.message ? (ya(a.message), M.expire_cache()) : "nag" === b && "paywall" === a.message ? (ya(a.message), window.location = C, M.expire_cache()) : (u("Attempt failed: " + a.message), window.location = C)
        }
      });
      Ya(O, 300, "return")
    }
    d = d || {};
    var f =
      F(),
      g = y(),
      l = a(Hc, x).filter(":visible").text(),
      k = Zd(),
      h = ae(),
      r = xa(b, 6);
    T = r;
    var p = Ka(r, !1),
      t = a("#note_entry", f).val();
    null == t && (t = "");
    var w = "https://b4g.baydin.com/mailcruncher/schedulereturn",
      w = w + "?subject=" + encodeURIComponent(l),
      w = w + "&senders=" + encodeURIComponent(JSON.stringify(k)),
      w = w + "&guser=" + encodeURIComponent(g),
      w = w + "&sentDates=" + encodeURIComponent(JSON.stringify(h)),
      w = w + "&offset=" + encodeURIComponent(r.valueOf()),
      w = w + "&threadId=" + encodeURIComponent(fa()),
      w = yb() ? w + "&language=English" : w + "&language=notEnglish",
      w = a("#conditionalBoomerang", f).attr("checked") ? w + "&conditional=" + encodeURIComponent("True") : w + "&conditional=" + encodeURIComponent("False"),
      w = 0 < wa("^i").length && 0 < ba.indexOf("label") ? w + "&inbox=True" : w + "&inbox=False",
      w = w + "&notes=" + encodeURIComponent(t),
      C = String(document.location),
      O = "Message will return " + p + ". ";
    1 === q() ? Da(c, X) : Da(e, X)
  }

  function Gb(b, d) {
    var c = F(),
      e = Date.parse(Z);
    if (null != e) {
      var c = a("#datepicker", c).val(),
        f = new Date;
      0 < Ea(c) - (f.getTime() - 3E5) ? (He(c), d(e)) : (u("The time you entered is in the past. We can only schedule messages for the future."),
        n(["boomerang menu", "confirm specific time", "error time in the past entered"]))
    } else u("Unable to read specified time. Please try again."), n(["boomerang menu", "confirm specific time", "error invalid time"]);
    n(["boomerang menu", "confirm specific time", "clicked"])
  }

  function cd(a, d) {
    var c = Ea(a);
    null != c ? d(c) : u("Something went wrong processing the customized date. Please let the Boomerang team know.")
  }

  function fd(b, d) {
    d || (d = F());
    var c = a(".conditional-caption", d);
    A("b4g_sticky_send_and_boomerang-" + y(), b);
    var e = xa(b, 6);
    T = e;
    c.data("returnDate", e);
    a(".conditional-caption-text", d).text(String(b));
    a(".b4g-ui-datepicker").css("display", "none");
    a(".boomerangSendCheck", d).attr("checked", !0);
    Za(d);
    3 === q() && K() ? a(".b4g_menu").remove() : a(".b4g_menu", d).remove();
    n(["boomerang menu", "send boomrang menu", "clicked"])
  }

  function Vc(b) {
    var d = la(),
      c = R("b4g_sticky_send_and_boomerang-" + y());
    if (c) {
      var e = xa(c, 6);
      a(".conditional-caption", b).data("returnDate", e);
      a(".conditional-caption-text", b).text(c)
    }
    if ("premium" === d) {
      var d =
        JSON.parse(R("b4g_preferences-" + y())),
        f = d.onSendSetting ? "checked" : "",
        g = null == d.onSendOffset ? "1_weeks" : d.onSendOffset,
        l = null == d.onSendCond ? "reply" : d.onSendCond,
        k = d.readReceipts ? "on" : "off";
      "checked" !== f && "on" !== k || Da(function() {
        if ("checked" === f && ("no click" === l || "no open" === l) || "on" === k) oa(b) || a(".b4g-tracking-toggle", b).trigger("b4g-toggle-state");
        var c = g.split("_"),
          d = " in " + c[0] + " " + c[1];
        "1" === c[0] && "s" === d.charAt(d.length - 1) && (d = d.substring(0, d.length - 1));
        var e = c[0],
          t = new Date,
          w = Math.floor(30 * Math.random()) -
          15;
        switch (c[1]) {
          case "hours":
            t = t.addHours(parseInt(e));
            break;
          case "days":
            t = t.addDays(parseInt(e)).addMinutes(w);
            break;
          case "weeks":
            t = t.addWeeks(parseInt(e)).addMinutes(w);
            break;
          case "months":
            t = t.addMonths(parseInt(e)).addMinutes(w);
            break;
          default:
            t = 0
        }
        c = t;
        "checked" === f && (a(".boomerangSendCheck", b).get(0).checked = "checked" === f ? 1 : 0, a("[name=ifResponse]", b).val(l), a(".conditional-caption", b).data("returnDate", c), a(".conditional-caption-text", b).text(d))
      });
      d.crm.active && ("every" === d.crm.bccIncludeWith ||
        "boomerang" === d.crm.bccIncludeWith && "checked" === f) && Ec(b, d.crm.bccAddress);
      n(["Compose Window", "boomerang on-send setting applied successfully"])
    }
  }

  function Qc(b, d, c) {
    var e, f = Wa(b);
    if (-1 !== f.className.indexOf("J-Zh-I") || 0 === f.className.indexOf("f") || -1 !== f.className.indexOf("VP5otc-d2fWKd") || -1 !== f.className.indexOf("conditional-caption") || -1 !== f.className.indexOf("conditional-caption-text") || -1 !== f.className.indexOf("conditional-caption-arrow")) {
      var g = F(),
        l = Ca(d);
      if (f = g.getElementById("b4g_menu")) X(b,
        d);
      else {
        n(["Send and Boomerang", "Open menu"]);
        var k;
        3 === q() ? (f = "J-M J-M-ayU aka gm-boomerang-menu", k = "display: none;", attachNote = '<li id="gm-boomerang-note-checkbox" class="b4g_menu b4g-menu-option gm-boomerang-reminder-on-send" title="Attach a note for yourself. When the message returns to your Inbox, your note will be appended to the message thread."><div class="gm-checkbox" tabindex="1" role="checkbox" aria-checked="false" ><div class="T-Jo-auh"></div></div><span>with a note</span><img id="gm-boomerang-edit-note" data-tooltip="Edit Note" data-tooltip-delay="400" src="https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/notes_on@2x.png" /></li>') :
          attachNote = k = f = "";
        f = '<ul id="b4g_menu" tabindex="0" class="b4g_menu" style="padding:0px;background:#fff;position:absolute; bottom: ' + (c ? -21 : 22) + 'px; left: 195px;" role="menu" aria-haspopup="true" aria-activedescendant=""><div id="b4g_inner_menu" class="b4g_menu SK AX ' + f + '" style="-webkit-user-select: none; font-size:12px;padding:0;"><li id="b4g_menu_title" class="menu-caption b4g-menu-option" style="list-style-type:none;padding:6px 11px 6px 11px;">' + Va + ': <img class="b4g_menu" id="notes_toggle" data-tooltip="Add Note to Self" data-tooltip-delay="400" src="https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/notes_off.png"  height="16px" style="' +
          k + 'opacity:.9;position:absolute;right:33px;top:6px;cursor:pointer;"/><img id="b4g-menu-customization-button" data-tooltip="Customize Menu" data-tooltip-delay="400" src="https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/gear.png" height="16px" style="opacity:.9;height:16px;width:16px;position:absolute;right:13px;top:6px;cursor:pointer;"></li>' + attachNote + '<div id="notes_menu" class="b4g_menu SK AX" style="display:none;min-width:17em;min-height:auto;left:2px;margin:5px;border:none;box-shadow:none;-moz-box-shadow:none;">' +
          Fb + '</div><li class="b4g-menu-divider" style="height:1px;margin:0 11px 6px 11px;background:#ddd;"></li><li class="b4g-standard-times"></li><li class="b4g-custom-times"></li><li class="menu-caption" style="padding:7px 11px 4px 11px;">At a specific time:</li><li class="b4g-menu-option" style="padding: 0 0 7px 11px;"><div style="color: #666; font-style: italic; font-size: 10px; margin-top: 3px;" class="b4g_menu">Examples: "Monday 9am", "Dec 23"</div><form autocomplete="off"><div style="padding-top:3px; vertical-align: middle;" class="b4g_menu"><input style="margin-left:1px;padding:3px 22px 2px 2px;" class="b4g_menu" type="text" name="time" id="datepicker"><input id="specific-time-submit" type="submit" value="Confirm" style="margin: 0px 7px 5px 9px;font-size:11px;vertical-align:top;" class="b4g_menu by-button by-button-secondary"></div><div style="color:#969696; margin-left: 1px;"><span id="date-preview" class="b4g_menu" style="color:green;"></span></div></form></li></div></ul>';
        3 === q() && K() ? a("body").append(f) : 3 === q() ? Ca(d).append(f) : a(d).parent().append(f);
        f = a("#b4g_menu", g);
        k = f.find("form").first();
        ib(k);
        3 === q() && (a("#gm-boomerang-note-checkbox").click(jc), a("#gm-boomerang-note-checkbox > .gm-checkbox").mousedown(function(a) {
          a.preventDefault()
        }), a("#gm-boomerang-edit-note").click(function(b) {
          a("#notes_toggle").trigger("click")
        }), k = c ? 65 : 26, a("#b4g_menu").css({
          "margin-bottom": k + "px"
        }));
        va.enable_menu_arrow_keys(f);
        Eb(a(".b4g-standard-times", g));
        Cb(g);
        a(".b4g_menu_item",
          g).click(function() {
          var b = a(this).text();
          fd(b, l);
          n(["boomerang menu", "send later time", b])
        });
        La(a(".b4g_menu_item", g), 6);
        Z = null == T || T < new Date ? Date.today().addDays(2).addHours(8) : T;
        e = Z.toString("M/d/yyyy h:mm tt");
        k = a("#datepicker", g);
        k.val(e);
        k.keyup(function() {
          var b = a(this).val();
          za(b)
        });
        k.focus(function() {
          var b = a(this).val();
          za(b)
        });
        a("input#specific-time-submit", g).click(function(b) {
          n(["Send and Boomerang", "At a specific time"]);
          b = Date.parse(Z);
          if (null != b) {
            var c = l;
            c || (c = F());
            var d = a(".conditional-caption",
                c),
              e = xa(b, 6);
            new Date(e) < new Date ? (u("The time you entered is in the past. We can only schedule messages for the future."), n(["boomerang menu", "confirm specific time", "error time in the past entered"])) : (T = e, d.data("returnDate", e), a(".conditional-caption-text", c).html("<span class='by-text'>by </span>" + b.toString("ddd MMM d h:mm tt")), a(".b4g-ui-datepicker").css("display", "none"), a(".boomerangSendCheck", c).attr("checked", !0), Za(c), a(".b4g_menu", c).remove(), n(["boomerang menu", "send specific time",
              "clicked"
            ]))
          } else u("Unable to read specified time. Please try again.")
        });
        var h = ic();
        if (0 < h.length) {
          for (var r = 0; r < h.length; r++) e = fc(h[r], null), a(".b4g-custom-times", g).append(e);
          a(".b4g-custom-times").append('<li class="b4g-menu-divider" style="height:1px;margin:0 11px 6px 11px;background:#ddd;"></li>');
          a(".b4g-custom-menu-item", g).click(function() {
            var b = a(this).text();
            fd(b, l);
            n(["b4g menu", "picked", b])
          });
          La(a(".b4g-custom-menu-item", g), 6)
        }
        e = a("#b4g-menu-customization-button", g);
        e.click(function() {
          hc()
        });
        e.hover(function() {
          a(this).css("opacity", "1")
        }, function() {
          a(this).css("opacity", ".9")
        });
        a(g).bind("click", {
          owner: d
        }, hb);
        $a(k);
        3 === q() && c && f.position({
          of: a(b.currentTarget),
          my: "left bottom",
          at: "left top"
        });
        a(".b4g-ui-datepicker-trigger", g).css("cursor", "pointer");
        a(".b4g-ui-datepicker-trigger", g).css("margin-left", "-21px");
        a(".b4g-ui-datepicker-trigger", g).css("margin-top", "-2px");
        a(".b4g-ui-datepicker-trigger", g).hover(function() {
          a(this).css("box-shadow", "0px 0px 3px #aaa")
        }, function() {
          a(this).css("box-shadow",
            "none")
        });
        k.mousedown(function(a) {
          a.stopImmediatePropagation()
        });
        k.css("-moz-user-select", "text");
        k.parents().each(function() {
          a(this).css("-moz-user-select", "text")
        });
        k.focus();
        k.select();
        a("span#date-preview.b4g_menu", g).text("");
        d = l.data("notes");
        l.data("notes") ? (a("#note_entry", g).val(d), a("#notes_toggle", g).attr("src", "https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/notes_on.png"), a("#notes_toggle", g).attr("data-tooltip", "Edit Note to Self"), a("#notes_toggle", g).css("top", "6px")) : a("#note_entry",
          g).val("");
        3 !== q() || K() ? 3 === q() && K() && (d = 20, f = a("#b4g_menu"), k = Number(f.css("bottom").slice(0, -2)), f.css({
          top: "",
          bottom: k + d + "px"
        })) : (d = 20, f = a("#b4g_menu"), k = Number(f.css("bottom").slice(0, -2)), e = Number(f.css("left").slice(0, -2)), f.css({
          bottom: k + d + "px",
          left: e + -14 + "px"
        }));
        a("#notes_toggle", g).click(function() {
          Hb(kc, dd, ed);
          n(["notes", "click"])
        }).hover(function() {
          a(this).css("opacity", "1")
        }, function() {
          a(this).css("opacity", ".9")
        });
        a("#notes_save_button, #notes_cancel_button").mousedown(function(a) {
          a.preventDefault()
        });
        a("#notes_save_button", g).click(function() {
          var b = a("#note_entry", g).val();
          if (Ib(b)) u(Jb);
          else {
            var c = a("#gm-boomerang-note-checkbox");
            3 === q() && (a("#note_entry", g).val() ? (a("#gm-boomerang-edit-note").show(), c.find("div[role='checkbox']").addClass("gm-checkbox-checked").attr("aria-checked", "true"), c.addClass("gm-checkbox-background-checked").removeClass("gm-checkbox-background-unchecked")) : (c.find("div[role='checkbox']").removeClass("gm-checkbox-checked").attr("aria-checked", "false"), c.addClass("gm-checkbox-background-unchecked").removeClass("gm-checkbox-background-checked"),
              a("#gm-boomerang-edit-note").hide()));
            jb();
            b && (a("#notes_toggle", g).attr("src", "https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/notes_on.png"), a("#notes_toggle", g).attr("data-tooltip", "Edit Note to Self"), a("#notes_toggle", g).css("top", "6px"), l.data("notes", a("#note_entry", g).val()));
            ia();
            3 === q() && (a("#datepicker").focus(), a("#gm-boomerang-note-checkbox").find("div[role='checkbox']").removeClass("b4g-state-selected"))
          }
        });
        a("#notes_cancel_button", g).click(function() {
          if (3 === q()) {
            var b = a("#gm-boomerang-note-checkbox");
            b.find("div[role='checkbox']").removeClass("gm-checkbox-checked").attr("aria-checked", "false");
            b.addClass("gm-checkbox-background-unchecked").removeClass("gm-checkbox-background-checked");
            a("#gm-boomerang-edit-note").hide()
          }
          jb();
          a("#note_entry", g).val("");
          a("#notes_toggle", g).attr("src", "https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/notes_off.png");
          a("#notes_toggle", g).attr("data-tooltip", "Add Note to Self");
          a("#notes_toggle", g).css("top", "6px");
          l.data("notes", "");
          ia();
          3 === q() && (a("#datepicker").focus(),
            a("#gm-boomerang-note-checkbox").find("div[role='checkbox']").removeClass("b4g-state-selected"))
        });
        ia();
        "Safari" === z && 3 === q() && c && !K() && (f = a("#b4g_menu"), f.position({
          of: a(b.currentTarget),
          my: "left top",
          at: "left bottom",
          collision: "none"
        }), b = f.offset().top, a("#b4g_menu").closest(".Tm.aeJ").scrollTop(b))
      }
    }
  }

  function Sc(b) {
    params = {};
    var d = y(),
      c = wa("subjectbox", b).val(),
      e = a(".J-JN-M-I.J-J5-Ji.az2.az4.L3", b);
    0 < e.length && wb(e.text());
    var e = W("to", b),
      f = W("cc", b),
      g = W("bcc", b),
      l = Wb(b);
    if (null == l || "undefined" ===
      l) l = fa();
    params.subject = c;
    params.senders = JSON.stringify([]);
    params.guser = d;
    params.sentDates = JSON.stringify([]);
    params.threadId = l;
    yb() ? params.language = "English" : params.language = "notEnglish";
    c = a(".boomerangSendCondition", b).val();
    d = gd(b);
    switch (c) {
      case "no reply":
        c = "reply";
        break;
      case "no click":
        c = "click";
        break;
      case "no open":
        c = "open";
        break;
      case "always":
        c = "none";
        break;
      default:
        c = "none"
    }
    params.offset = d.valueOf();
    params.conditional = c;
    0 < wa("^i").length ? params.inbox = !0 : params.inbox = !1;
    params.to = e;
    params.cc =
      f;
    params.bcc = g;
    oa(b) && (params.trackingCode = kb(b));
    b = b.data("notes");
    null == b && (b = "");
    params.notes = b;
    return params
  }

  function gd(b) {
    b = a(".conditional-caption", b).data("returnDate");
    null == b && (b = Date.today().addDays(2).addHours(7).addMinutes(Math.floor(30 * Math.random()) - 15));
    return b
  }

  function jb() {
    var b = F();
    a("#notes_menu", b).toggle();
    b = a("#b4g_inner_menu", b);
    b.children().not("#notes_menu").toggle();
    a(".random", b).hide();
    ia()
  }

  function dd() {
    jb();
    a("#note_entry", x).focus()
  }

  function ed() {
    u("A Personal or Pro subscription is required to use this feature. To add notes, please upgrade your subscription.",
      "Boomerang for Gmail", {
        Upgrade: {
          text: "Upgrade to add notes",
          "class": "b4g-button green",
          click: function() {
            window.open("https://b4g.baydin.com/subscriptions", "_blank")
          }
        },
        "Never mind": {
          text: "Never mind",
          "class": "b4g-button dialog-gray",
          click: function() {
            a(this).dialog("destroy")
          }
        }
      }, {
        width: 350,
        dialogClass: "b4g-upgradenag-dialog"
      });
    n(["notes", "blocked non-subscriber"])
  }

  function Ib(a) {
    return a.match("\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f]|\ud83d[\ude80-\udeff]")
  }

  function qe() {
    a(".Cq.aqL>div>div", x).each(function() {
      var b =
        a(".bulkboomerang", this),
        d = 0 < a("[act='10']", this).filter(":visible").length;
      if (0 === b.length) {
        var c = "";
        3 === q() && (c = " gm-boomerang-button-home");
        var e = a("<div aria-haspopup='true' style='-webkit-user-select: none; -moz-user-select:none;margin-bottom:0px;outline: none;' role='button' class='J-J5-Ji W6eDmd L3 J-Zh-I J-J5-Ji Bq L3' tabindex='0'><img class='f tk3N6e-I-J3' src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/tinyboomlogo.png' style='vertical-align: middle;'/> Boomerang <div class='VP5otc-d2fWKd tk3N6e-I-J3 J-J5-Ji'> </div></div>"),
          f = a("[role='button']", x).filter(function() {
            return "20" === a(this).attr("act")
          }).attr("class");
        e.attr("class", "f " + f + " bulkboomerang b4g_button" + c);
        e.css("display", "inline-block");
        e.hide();
        3 === q() && e.removeClass("T-I-ax7");
        (1 < a("[gh=tl]:visible").length || 0 < a(".qh:visible").length) && 1 === q() ? (e.css("opacity", ".4"), e.attr("data-tooltip", "Priority Inbox and Multiple Inboxes are not yet\r\nsupported when using Boomerang from this view.\r\nPlease open each message individually to Boomerang it."), e.click(function() {
            u("Priority Inbox and Multiple Inboxes are not yet supported when using Boomerang from this view. <b>Please open each message individually</b> to Boomerang it.")
          })) :
          e.click(function(a) {
            ec(a, this, Je);
            n(["bulk boomerang", "click"])
          });
        a(this).append(e)
      }
      d ? b.css("display", "inline-block") : b.hide()
    })
  }

  function Je(b) {
    var d = a("#note_entry", x).val();
    null == d && (d = "");
    if (25 < a('[gh="tl"] div[role="checkbox"][aria-checked="true"]').length) u("You can Boomerang at most 25 messages at a time. Please choose up to 25 messages to Boomerang.");
    else {
      T = b = xa(b, 6);
      var c = Ka(b, !1),
        e = b.valueOf(),
        f;
      f = 3 === q() ? "true" === a("#gm-boomerang-reply-checkbox").find(".gm-checkbox").attr("aria-checked") :
        a("#conditionalBoomerang", x).attr("checked");
      var g = a("<div class='overlay' style='background: #FFF; opacity: 0.1; filter:alpha(opacity=1);'></div>");
      a("body").append(g);
      Lc();
      Da(function() {
        if (1 === q()) {
          try {
            for (var b = (new Ke).get.selected_emails_data(), k = [], h = 0; h < b.length; h++) k.push(b[h].last_email)
          } catch (r) {
            g.remove();
            X();
            u("Something went wrong while using bulk boomerang. Please try again.");
            return
          }
          b = {
            conditional: f,
            notes: d,
            date: e,
            gmailIds: k.join()
          };
          a.ajax({
            type: "get",
            url: "https://b4g.baydin.com/mailcruncher/schedulereturnbulk2",
            data: b,
            xhr: J,
            success: function(b) {
              var d = b.status;
              if ("success" === d) {
                zb();
                aa();
                var e = "Messages will return " + c + ". ";
                setTimeout(function() {
                  Qa(e, 5E3)
                }, 2E3)
              } else "error" === d ? u(b.message) : "upgrade" === d ? u(b.message, "Boomerang for Gmail", {
                  Upgrade: {
                    text: "Upgrade to schedule",
                    "class": "b4g-button green",
                    click: function() {
                      window.open("https://b4g.baydin.com/subscriptions", "_blank")
                    }
                  },
                  "Never mind": {
                    text: "Never mind",
                    "class": "b4g-button dialog-gray",
                    click: function() {
                      a(this).dialog("destroy")
                    }
                  }
                }, {
                  width: 350,
                  dialogClass: "b4g-upgradenag-dialog"
                }) :
                u("Something went wrong while using bulk boomerang. Please try again.")
            },
            error: function(a) {
              u("Something went wrong while using bulk boomerang. Please try again.")
            },
            complete: function() {
              X();
              aa();
              g.remove();
              M.expire_cache()
            },
            dataType: "json"
          })
        } else b = Vd(), 0 == b.length ? (u("Something went wrong while using Boomerang. Please try again. If still unsuccessful, contact support@baydin.com for help resolving the issue."), X(), g.remove()) : (b = {
          conditional: f,
          notes: d,
          date: e,
          threadIds: b.join()
        }, a.ajax({
          type: "post",
          url: "https://b4g.baydin.com/gmailmigration/boomerangfromthreadlist",
          data: b,
          xhr: J,
          success: function(b) {
            var d = b.status;
            if ("success" === d) {
              zb();
              aa();
              var e = "Messages will return " + c + ". ";
              setTimeout(function() {
                Qa(e, 5E3)
              }, 2E3)
            } else "error" === d ? u(b.message) : "upgrade" === d ? u(b.message, "Boomerang for Gmail", {
              Upgrade: {
                text: "Upgrade to schedule",
                "class": "b4g-button green",
                click: function() {
                  window.open("https://b4g.baydin.com/subscriptions", "_blank")
                }
              },
              "Never mind": {
                text: "Never mind",
                "class": "b4g-button dialog-gray",
                click: function() {
                  a(this).dialog("destroy")
                }
              }
            }, {
              width: 350,
              dialogClass: "b4g-upgradenag-dialog"
            }) : u("Something went wrong while using bulk boomerang. Please try again.")
          },
          error: function(a) {
            u("Something went wrong while using bulk boomerang. Please try again.")
          },
          complete: function() {
            X();
            aa();
            M.expire_cache();
            g.remove()
          },
          dataType: "json"
        }))
      }, function() {
        X();
        g.remove()
      })
    }
  }

  function Lc() {
    var b = F(),
      b = a("#b4g_inner_menu", b);
    0 < b.length && (b.empty(), a(".b4g-ui-datepicker").css("display", "none"), b.append('<li style="list-style-type:none;text-align:center;padding:0px 2px;margin:6px 0px;">Processing...</li>'),
      b.append('<li style="list-style-type:none;padding:5px 10px;text-align:center;"><img src="https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/b4gloading.gif" alt="Loading..."></li>'), ia())
  }

  function Pc(b, d, c) {
    var e = F(),
      f = function(a) {
        Le(a, d)
      },
      g = function() {
        Me(d)
      },
      l = function() {
        u("A Pro subscription is required to use this feature. To schedule recurring messages, please upgrade your subscription.", "Boomerang for Gmail", {
          Upgrade: {
            text: "Upgrade to schedule",
            "class": "b4g-button green",
            click: function() {
              window.open("https://b4g.baydin.com/subscriptions",
                "_blank")
            }
          },
          "Never mind": {
            text: "Never mind",
            "class": "b4g-button dialog-gray",
            click: function() {
              a(this).dialog("destroy")
            }
          }
        }, {
          width: 350,
          dialogClass: "b4g-upgradenag-dialog"
        });
        n(["compose dialog schedule recurring message", "blocked non-subscriber"])
      },
      k = Wa(b);
    if (-1 !== k.className.indexOf("J-Zh-I") || 0 === k.className.indexOf("f") || -1 !== k.className.indexOf("VP5otc-d2fWKd") || 3 === q())
      if (k = e.getElementById("b4g_menu")) X(b, d);
      else {
        n(["send later compose menu", "click"]);
        var h = c ? a(b.currentTarget).position().top +
          73 : a(b.currentTarget).position().top,
          r = c ? a(b.currentTarget).position().left + 40 : a(b.currentTarget).position().left,
          p;
        p = 3 === q() ? "J-M J-M-ayU aka gm-boomerang-menu" : "";
        h = '<ul id="b4g_menu" tabindex="0" class="b4g_menu" style="position: absolute; padding: 0px; top:' + h + "px; left:" + r + 'px;  background-color: rgb(255, 255, 255); -webkit-user-select: none; min-width: 17em;height: auto;min-height: 398px;" role="menu" aria-haspopup="true" aria-activedescendant=""><div id="b4g_inner_menu" class="b4g_menu SK AX ' +
          p + '" style="-webkit-user-select: none; font-size:12px;padding:0;"><li id="b4g_menu_title" class="menu-caption" style="list-style-type:none;padding: 6px 11px 0 11px;">Send Message:<img id="b4g-menu-customization-button" class="Ha"  data-tooltip="Customize Menu" data-tooltip-delay="400" src="https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/gear.png" height="16px" style="opacity:.9;background:none;height:16px;width:16px;position:absolute;right:13px;top:6px;cursor:pointer;"></li><li class="b4g-menu-divider" style="height:1px;margin:6px 11px 6px 11px;background:#ddd;"></li><li class="b4g-standard-times"></li><li class="b4g-custom-times"></li><li class="menu-caption" style="padding:7px 11px 4px 11px;">At a specific time:</li><li class="b4g-menu-option" style="padding: 0 0 7px 11px;"><div style="color: #666; font-style: italic; font-size: 10px; margin-top: 3px;" class="b4g_menu">Examples: "Monday 9am", "Dec 23"</div><div autocomplete="off"><div style="padding-top:3px; vertical-align: middle;" class="b4g_menu"><input style="margin-left:1px;padding:3px 22px 2px 2px;" class="b4g_menu" type="text" name="time" id="datepicker"><input id="specific-time-submit" type="submit" value="Confirm" style="margin: 0px 7px 5px 9px;font-size:11px;vertical-align:top;" class="b4g_menu by-button by-button-secondary"></div><div style="color:#969696; margin-left: 1px;"><span id="date-preview" class="b4g_menu" style="color:green;"></span></div></div></li><li class="b4g-menu-divider" style="height:1px;margin:0px 11px;background:#ddd;"></li><li class="b4g-menu-option" ><a id="recurring" style="margin:4px 0px;border-width:0px;color:black;cursor:pointer;display:block;padding: 6px 12px;" class="menu-anchor"><img id="recurring-image"  class="menu-anchor" src="https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/recurring.png" height="16px" style="vertical-align:middle;"/><span style="vertical-align:middle;margin-left:6px;">Schedule recurring message</span></a></li></div></ul>';
        r = a(".if > .aHU");
        1 == r.length && 3 !== q() ? r.append(h) : 3 !== q() || c ? a(d).parent().append(h) : Ca(d).append(h);
        h = a("#b4g_menu", e);
        r = h.find("form").first();
        ib(r);
        va.enable_menu_arrow_keys(h);
        c ? (r = 3 === q() ? '<li id="gm-boomerang-reply-checkbox" class="b4g_menu b4g-menu-option gm-boomerang-if-no-reply" title="Remember to follow up on messages if you don\'t get a response by a certain time."><div class="gm-checkbox" tabindex="1" role="checkbox" aria-checked="false" ><div class="T-Jo-auh"></div></div><span>if no reply</span></li>' :
          '<li class="b4g_menu b4g-menu-option" style="padding:6px;"><input type="checkbox" id="conditionalSendLater" class="b4g_menu" name="condBoomerang"/> Only if nobody replies</li>', a("#b4g_menu_title", e).after(r), 3 === q() && (a("#gm-boomerang-reply-checkbox").click(jc), a("#gm-boomerang-reply-checkbox > .gm-checkbox").mousedown(function(a) {
            a.preventDefault()
          }))) : 3 === q() && a(".b4g-standard-times").css({
          "margin-top": "6px"
        });
        Eb(a(".b4g-standard-times", e));
        Cb(e);
        a(".b4g_menu_item", e).click(function() {
          var b = a(this).text();
          f(b);
          n(["boomerang menu", "send later time", b])
        });
        La(a(".b4g_menu_item", e), 9.5);
        Z = null == T || T < new Date ? Date.today().addDays(2).addHours(8) : T;
        p = Z.toString("M/d/yyyy h:mm tt");
        r = a("#datepicker", e);
        r.val(p);
        r.keyup(function() {
          var b = a(this).val();
          za(b)
        });
        r.focus(function() {
          var b = a(this).val();
          za(b)
        });
        a("input#specific-time-submit", e).click(function(a) {
          Gb(a, f)
        });
        a("#datepicker", e).keypress(function(a) {
          13 === a.which && Gb(a, f)
        });
        p = ic();
        if (0 < p.length) {
          for (var t = 0; t < p.length; t++) {
            var w = fc(p[t], null);
            a(".b4g-custom-times",
              e).append(w)
          }
          a(".b4g-custom-menu-item", e).click(function() {
            var b = a(this).text();
            cd(b, f);
            n(["b4g menu", "picked", b])
          });
          La(a(".b4g-custom-menu-item", e), 9.5)
        }
        Xc(e);
        if (3 === q() && !K()) Ca(d).append(h);
        else if (!c || K()) K() ? a(d).closest(".HE").after(h) : a(d).parent().append(h);
        p = a("#b4g-menu-customization-button", e);
        p.click(function() {
          hc()
        });
        p.hover(function() {
          a(this).css("opacity", "1")
        }, function() {
          a(this).css("opacity", ".9")
        });
        p = a("a#recurring", e);
        p.click(function() {
          n(["compose dialog schedule recurring message",
            "clicked"
          ]);
          lc(g, l)
        });
        p.hover(function() {
          a(this).addClass("J-N-JT")
        }, function() {
          a(this).removeClass("J-N-JT")
        });
        a(e).bind("click", {
          owner: d
        }, hb);
        $a(r);
        a(".b4g-ui-datepicker-trigger", e).css("cursor", "pointer");
        a(".b4g-ui-datepicker-trigger", e).css("margin-left", "-21px");
        a(".b4g-ui-datepicker-trigger", e).css("margin-top", "-2px");
        a(".b4g-ui-datepicker-trigger", e).hover(function() {
          a(this).css("box-shadow", "0px 0px 3px #aaa")
        }, function() {
          a(this).css("box-shadow", "none")
        });
        r.mousedown(function(a) {
          a.stopImmediatePropagation()
        });
        r.css("-moz-user-select", "text");
        r.parents().each(function() {
          a(this).css("-moz-user-select", "text")
        });
        a("#conditionalSendLater", e).click(function() {
          0 < a("[name='subject']:visible", e).length && (de("<p>If you change the message subject, the new message becomes part of a separate conversation, so Boomerang's response tracking will not work properly.</p><p>To ensure that responses are detected accurately, please copy your message text, discard this email, and paste the text into a new reply.</p>", "Did you change the subject?"),
            a(this).attr("checked", !0))
        });
        r.select();
        a("span#date-preview.b4g_menu", e).text("");
        ia();
        3 === q() && c && (k = a("#b4g_menu"), k.position({
          of: a(b.currentTarget),
          my: "left bottom",
          at: "left top"
        }), r = k.css("top"), -35 > parseInt(r) && (k.position({
          of: a(b.currentTarget),
          my: "left top",
          at: "left bottom",
          collision: "none"
        }), r = k.offset().top, a("#b4g_menu").closest(".Tm.aeJ").scrollTop(r)));
        3 === q() ? (k = a("#b4g_menu"), k.position({
          of: a(b.currentTarget),
          my: "left bottom",
          at: "left top"
        })) : c ? (r = 0 < a(".aDd").length, K() && r ? (b = a(h).height() -
          198, a(h).css("top", "-" + b + "px"), a(h).css("left", "39px")) : (k = a("#b4g_menu"), k.position({
          of: a(b.currentTarget),
          my: "left bottom",
          at: "left top"
        }), r = k.css("top"), -35 > parseInt(r) && (k.position({
          of: a(b.currentTarget),
          my: "left top",
          at: "left bottom",
          collision: "none"
        }), r = k.offset().top, a("#b4g_menu").closest(".Tm.aeJ").scrollTop(r)))) : (b = a(h).height() - 47, a(h).css("top", "-" + b + "px"));
        3 !== q() || c ? 3 === q() && c && (c = k.css("top").slice(0, -2), k.css({
          top: c - 25 + "px"
        })) : (c = Number(h.css("top").slice(0, -2)), k.css({
          top: c - 25 + "px"
        }))
      }
  }

  function Le(b, d) {
    var c = Ca(d),
      e = y(),
      f = wa("subjectbox", c).val();
    if (200 < f.length) u("You've exceeded the maximum subject length. Please shorten your subject and try again.");
    else {
      var g = a(".J-JN-M-I.J-J5-Ji.az2.az4.L3", c),
        g = 0 < g.length ? wb(g.text()) : e,
        l = W("to", c),
        k = W("cc", c),
        h = W("bcc", c);
      if (l || k || h)
        if (0 < a(".vQ .vT", c).length) u("One of the addresses you entered is not recognized. Please make sure that all addresses are properly formed.");
        else {
          var r = vb,
            r = (l + " " + k + " " + h).toLowerCase().match(r),
            r = hd(r);
          if (100 <
            r.length) u("Boomerang limits you to 100 recipients at a time. Please enter a shorter list.");
          else {
            var p = xa(b, 9.5);
            T = p;
            var t = Ka(p, !1),
              w = new Date,
              C = "None";
            if (a(".boomerangSendCheck", c).is(":checked")) {
              r = gd(c);
              if (r <= p) {
                u("Your Send Later message must be scheduled earlier than your Boomerang reminder.");
                return
              }
              C = r.valueOf()
            }
            var O = "";
            switch (a(".boomerangSendCondition", c).val()) {
              case "no reply":
                O = "reply";
                break;
              case "no click":
                O = "click";
                break;
              case "no open":
                O = "open";
                break;
              case "always":
                O = "none";
                break;
              default:
                O =
                  "none"
            }
            var n = "False",
              r = F();
            3 !== q() ? a("#conditionalSendLater", r).attr("checked") && (n = "True") : "true" === a("#gm-boomerang-reply-checkbox").find(".gm-checkbox").attr("aria-checked") && (n = "True");
            wa("draft", c).val();
            var m = c.find("*[name='draft']").first().val();
            m && (m = m.replace("#", ""));
            X();
            a(c).append('<div class="b4g-ui-widget-overlay b4g-overlay overlay"></div>').append('<div class="b4g-overlay" style="position: absolute; top: 50%; left: 50%; margin: -38px 0 0 -120px; background: white; width: 220px; text-align: center; padding: 15px; z-index: 1001;"><div style="font-size: 14px; padding-bottom: 15px;">Scheduling message...</div><img height="32" width="32" src="https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/b4gloading.gif"></div>');
            0 < a(".dQ", c).length ? (u("Please wait for your attachments to upload before sending."), a(".b4g-overlay", c).remove()) : ac(c, function(a) {
              if (a) Fc();
              else {
                var b = Wb(c);
                if (null == b || "undefined" === b) b = fa();
                a = {};
                a.guser = e;
                a.from = g;
                a.subject = f;
                a.rank = "0/0";
                a.esttimesaved = w.valueOf();
                a.offset = p.valueOf();
                a.to = l;
                a.cc = k;
                a.bcc = h;
                a.boomerangoffset = C;
                a.boomerangconditional = O;
                a.sendlaterconditional = n;
                a.threadId = b;
                a.draftId = m;
                yb() ? a.language = "English" : a.language = "notEnglish";
                oa(c) && (b = kb(c), a.trackingCode = b);
                b = c.data("notes");
                null == b && (b = "");
                a.notes = b;
                b = 1 === q() ? gb("https://b4g.baydin.com/mailcruncher/schedulesend", a) : "https://b4g.baydin.com/gmailmigration/sendlater";
                Ne(b, t, c, {
                  condition: n
                }, a)
              }
            })
          }
        }
      else u("Please enter a recipient.")
    }
  }

  function gb(a, d) {
    var c = "?",
      e;
    for (e in d) "?" !== c && (c += "&"), c += e + "=" + encodeURIComponent(d[e]);
    "?" === c && (c = "");
    return a + c
  }

  function Ne(b, d, c, e, f) {
    e = e || {};
    var g = String(document.location),
      l = "Message will be sent " + d + ". ";
    oa(c) && kb(c);
    Da(function() {
      function d(a, b, f) {
        1 === a ? (Ja({
          type: "send-later",
          isIfNoReply: "True" ===
            e.condition
        }), M.expire_cache(), K() ? Ya(l, 0, "send_new_compose") : Ia(c) ? (aa(), Qa(l, 5E3)) : aa()) : E(a) ? (sa(a), M.expire_cache()) : 20 === a ? (sa(a), window.location = g, M.expire_cache()) : 1 !== a && (u("Attempt failed: " + pa[a]), window.location = g)
      }
      setTimeout(function() {
        a(".Ha", c).each(ga)
      }, 0);
      1 === q() ? U(b, d, l) : a.ajax({
        type: "POST",
        url: b,
        data: f,
        xhr: J,
        success: function(a) {
          var b = a.status;
          "success" === b ? (Ja({
              type: "send-later",
              isIfNoReply: "True" === e.condition
            }), M.expire_cache(), K() ? Ya(l, 0, "send_new_compose") : Ia(c) ? (aa(), Qa(l, 5E3)) :
            aa()) : "nag" === b && "paywall" !== a.message ? (ya(a.message), M.expire_cache()) : "nag" === b && "paywall" === a.message ? (ya(a.message), window.location = g, M.expire_cache()) : "error" === b && (u("Attempt failed: " + a.message), window.location = g)
        }
      });
      K() || Ia(c) || Ya(l, 0, "send_new_compose")
    }, function() {
      a(".b4g-overlay", c).remove()
    })
  }

  function Oe() {
    var b = a(".gU.Up > .J-J5-Ji");
    if (!(0 < b.find(".by-button").length)) {
      var d = ua.b4goldgid,
        c = ua.b4gnewtid,
        e = a('<button class="by-button by-button-secondary" style="height: 30px; margin: 6px 0;"><span class="by-button-text">Save message</span></button>'),
        f = a('<button class="by-button" style="height: 30px; margin: 6px 0 6px 5px;"><span class="by-button-text">Cancel</span></button>'),
        g = !1,
        l = function(b, c) {
          var d = b.responseText || b.error;
          "string" !== a.type(d) && (d = "Sorry, there was an error. We can't edit your message at the moment. Try again later.");
          alert(d);
          e.find(".by-button-text").text("Save message");
          f.find(".by-button-text").text("Cancel")
        };
      e.click(function() {
        var b = "https://b4g.baydin.com/inline-manage/update-",
          b = b + (0 < a(".b4g-inline-send").length ?
            "send-later" : "recurring");
        e.find(".by-button-text").text("Saving...");
        var f = Ca(e);
        ac(f, function(e) {
          a.ajax({
            type: "post",
            url: b,
            data: {
              oldGmailId: d,
              newThreadId: c
            },
            xhr: J,
            success: function(a) {
              a.success ? window.close() : l(a)
            },
            error: l,
            dataType: "json"
          });
          g = !0
        })
      });
      f.click(function() {
        f.find(".by-button-text").text("Cancelling...");
        a.ajax({
          type: "post",
          url: "https://b4g.baydin.com/inline-manage/delete-draft",
          data: {
            gmailId: ua.b4gdraftgid
          },
          xhr: J,
          success: function(a) {
            a.success ? window.close() : l(a)
          },
          error: l,
          dataType: "json"
        });
        g = !0
      });
      b.append(e).append(f).children(".T-I-atl").remove();
      a(".T-I.J-J5-Ji.aoO.L3.T-I-ax7").hide();
      a(".T-I.J-J5-Ji.Uo.T-I-atl.L3").hide();
      var b = a(".gU.er"),
        k = b.position();
      k && a(".eq").css("left", k.left + b.outerWidth() - 4);
      window.onbeforeunload = window.onunload = function() {
        g || f.click();
        window.opener.postMessage("b4g-edit-window-close", "https://mail.google.com")
      }
    }
  }

  function le() {
    Oe();
    a(".adf.ads:visible").length && a(".T-I-JN.L3 .gx").each(ga).click();
    0 < a(".h7.Jux0I").length && a(".h7:not(.Jux0I)").hide();
    a(".nH.oy8Mbf.qp",
      x).hide();
    a(".Bu.y3", x).hide();
    a(".nH.Gn", x).hide();
    a(".cf.gz", x).hide();
    a(".Cp", x).hide();
    a("[role='button']", x).not(".conditional-caption, .wG.J-Z-I").filter(function() {
      return 0 >= a(this).closest(".aDh, [role='toolbar']").length
    }).hide();
    a(".oh, .az5 .Uz").hide();
    a(".boomerang-button", x).hide();
    a(".d2", x).hide();
    a(".hP", x).hide();
    a(".nH > .ha").hide();
    a(".aeH").hide();
    a(".ar5.J-J5-Ji").hide();
    a(".mq, .ae4").hide();
    a(".PS").hide();
    a(".adz").hide();
    a(".w-asV.aiw").hide();
    a(".AT").hide();
    a("body").addClass("b4g-state-edit-message").attr("style",
      "overflow: auto!important");
    a(".nH.oy8Mbf.nn.aeN", x).css({
      visibility: "hidden",
      width: 100
    });
    a(".gB.acO").css({
      "padding-top": 0,
      border: "none"
    });
    a(".adn").css("padding-bottom", 0);
    a(".G3.G2").css("border", "none");
    a(".aeJ").css({
      height: "auto",
      "padding-right": 0,
      overflow: "hidden"
    });
    a(".aeJ")[0].scrollTop = 0;
    var b = a(".aoY").width() - (a(".b4g-inline-manage:visible").outerWidth() - a(".I5").outerWidth());
    a(".aoY").css({
      visibility: "hidden"
    }).width(b);
    a("#b4g_clicktoclose", x).click(function() {
      Ab = !1;
      window.close();
      setTimeout(function() {
        window.location = "mail.google.com"
      }, 250)
    })
  }

  function Me(b) {
    var d = F(),
      c = Ca(b);
    X();
    if ("Old Safari" === z) alert("This feature is available in Safari versions 5.1 and higher. Please update Safari to use this feature.");
    else {
      b = W("to", c);
      var e = W("cc", c),
        f = W("bcc", c);
      b || e || f ? 0 < a(".vQ .vT", c).length ? u("One of the addresses you entered is not recognized. Please make sure that all addresses are properly formed.") : (a(".dialogdiv").remove(), b = "", b = 3 === q() ? "<div class='dialogdiv' style='display:none;'><div id='recurring_dialog' class='recurring-dialog-new-ui'><div class='recurring-menu-title-new-ui'>Schedule Recurring Message</div><div id='start_date_time' class='recurring-field-new-ui'><span class='recurring-row-title'>Starts</span><span id='start_date' class='recurring_right_col'><input id='start_date_input' type='text' name='starts' size='15'/><span id='start_time'>Send Time: <input id='start_time_input' name='time' size='10'/></span></span></div><div  class='recurring-field-new-ui'><span class='recurring-row-title'>Repeats</span><select id='frequency'  class='recurring_right_col'><option value='day'> Daily</option><option value='week' selected='selected'>Weekly</option><option value='weekday' >Every Weekday</option><option value='month' >Monthly on the same date</option><option value='monthweek' >Monthly on the same week</option><option value='year'>Yearly</option></select></div><div id='num_time_interval'  class='recurring-field-new-ui'> Every <span class='recurring_right_col'> <input type='number' value='1' min='1' max='12' name='num_interval' id='num_interval'/><span id='interval'> week</span><div id='date_position_div' style='display: inline-block;'><span class='recurring-field-new-ui'>Date: <input type='number' value='1' min='1' max='31' id='date_position' name='date_position'/></span></div><div id='set_position_div' style='display: inline-block;'><span class='recurring-field-new-ui'><select id='set_position'><option value='1'>First</option><option value='2'>Second</option><option value='3'>Third</option><option value='4'>Fourth</option><option value='-1'>Last</option></select></span><span class='recurring-field-new-ui'><select id='set_position_day'><option value='6'>Sunday</option><option value='0'>Monday</option><option value='1'>Tuesday</option><option value='2'>Wednesday</option><option value='3'>Thursday</option><option value='4'>Friday</option><option value='5'>Saturday</option></select></span></div></div><div id='days_of_week'  class='recurring-field-new-ui'><span class='recurring-row-title'>On</span><span class='recurring_right_col' style='vertical-align: top;'><input class='day_cb' type='checkbox' value='6' name='Sun' style='margin-left:0px'/> Sun<input class='day_cb' type='checkbox' value='0' name='Mon'/> Mon<input class='day_cb' type='checkbox' value='1' name='Tue'/> Tue<input class='day_cb' type='checkbox' value='2' name='Wed'/> Wed<input class='day_cb' type='checkbox' value='3' name='Thur'/> Thur<input class='day_cb' type='checkbox' value='4' name='Fri'/> Fri<input class='day_cb' type='checkbox' value='5' name='Sat'/> Sat</span></div><div  class='recurring-field-new-ui'><span class='recurring-row-title'> Ends </span><div class='recurring_right_col' style='display:inline-block;vertical-align: middle; line-height: 24px;'><div style='margin-bottom:3px;'><input type='radio' id='radio_num_occurences' name='end_group' checked/> After <input type='number' value='10' min='1' max='100' id='num_occurences' name='num_occurences'/> messages</div><div style='margin-bottom:3px;'><input type='radio' id='radio_end_date' name='end_group'/> On <input id='end_date' value='' name='end_date' size='15'/></div><div style='margin-bottom:3px;'><input type='radio' id='radio_no_end' name='end_group'/> No end date <br/></div></div></div><br/><br/><br/><br/><div id='summary' class='recurring-field-new-ui'><span class='recurring-row-title'>Summary:</span><div id='recurring_feedback' class='recurring_right_col' style='display:inline-block;padding-right:20px;'> </div></div><div class='b4g-button-container recurring-btn-container-new-ui' align='right'><button id='schedule_recurring' class='b4g-button red recurring-schedule-btn-new-ui'> Schedule </button><button id='cancel_recurring' class='b4g-button dialog-gray recurring-cancel-btn-new-ui'>Cancel</button></div><br/></div></div>" :
        "<div class='dialogdiv' style='display:none;'><div id='recurring_dialog'><div id='start_date_time' class='recurring_field'><span class='recurring-row-title'>Starts</span><span id='start_date' class='recurring_right_col'><input id='start_date_input' type='text' name='starts' size='15'/><span id='start_time'>Send Time: <input id='start_time_input' name='time' size='10'/></span></span></div><div  class='recurring_field'><span class='recurring-row-title'>Repeats</span><select id='frequency'  class='recurring_right_col'><option value='day'> Daily</option><option value='week' selected='selected'>Weekly</option><option value='weekday' >Every Weekday</option><option value='month' >Monthly on the same date</option><option value='monthweek' >Monthly on the same week</option><option value='year'>Yearly</option></select></div><div id='num_time_interval'  class='recurring_field'> Every <span class='recurring_right_col'> <input type='number' value='1' min='1' max='12' name='num_interval' id='num_interval'/><span id='interval'> week</span><div id='date_position_div' style='display: inline-block;'><span class='recurring_field'>Date: <input type='number' value='1' min='1' max='31' id='date_position' name='date_position'/></span></div><div id='set_position_div' style='display: inline-block;'><span class='recurring_field'><select id='set_position'><option value='1'>First</option><option value='2'>Second</option><option value='3'>Third</option><option value='4'>Fourth</option><option value='-1'>Last</option></select></span><span class='recurring_field'><select id='set_position_day'><option value='6'>Sunday</option><option value='0'>Monday</option><option value='1'>Tuesday</option><option value='2'>Wednesday</option><option value='3'>Thursday</option><option value='4'>Friday</option><option value='5'>Saturday</option></select></span></div></div><div id='days_of_week'  class='recurring_field'><span class='recurring-row-title'>On</span><span class='recurring_right_col' style='vertical-align: top;'><input class='day_cb' type='checkbox' value='6' name='Sun' style='margin-left:0px'/> Sun<input class='day_cb' type='checkbox' value='0' name='Mon'/> Mon<input class='day_cb' type='checkbox' value='1' name='Tue'/> Tue<input class='day_cb' type='checkbox' value='2' name='Wed'/> Wed<input class='day_cb' type='checkbox' value='3' name='Thur'/> Thur<input class='day_cb' type='checkbox' value='4' name='Fri'/> Fri<input class='day_cb' type='checkbox' value='5' name='Sat'/> Sat</span></div><div  class='recurring_field'><span class='recurring-row-title'> Ends </span><div class='recurring_right_col' style='display:inline-block;vertical-align: middle; line-height: 24px;'><div style='margin-bottom:3px;'><input type='radio' id='radio_num_occurences' name='end_group' checked/> After <input type='number' value='10' min='1' max='100' id='num_occurences' name='num_occurences'/> messages</div><div style='margin-bottom:3px;'><input type='radio' id='radio_end_date' name='end_group'/> On <input id='end_date' value='' name='end_date' size='15'/></div><div style='margin-bottom:3px;'><input type='radio' id='radio_no_end' name='end_group'/> No end date <br/></div></div></div><br/><br/><br/><br/><div id='summary' class='recurring_field'><span class='recurring-row-title'>Summary:</span><div id='recurring_feedback' class='recurring_right_col' style='display:inline-block;padding-right:20px;'> </div></div><div class='b4g-button-container' align='center'><button id='schedule_recurring' class='b4g-button red' style='margin:4px 10px;'> Schedule </button><button id='cancel_recurring' class='b4g-button dialog-gray' style='margin:4px 10px;'>Cancel</button></div><br/></div></div>",
        a("body", d).append(a(b)), b = a(".dialogdiv", d).dialog({
          modal: !0,
          title: "Schedule Recurring Message",
          closeOnEscape: !0,
          width: 530,
          dialogClass: "recurringDialog"
        }), 3 === q() && (b.parent().children().first().remove(), b.parent().removeClass("b4g-ui-widget-content"), b.addClass("b4g-recurring-dialog-container-new-ui")), a(".dialogdiv", d).css({
          padding: "0px"
        }), a("#start_date_input", d).datepicker({
          showOn: "button",
          buttonImage: "https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/calendarpicker_17x15.png",
          buttonImageOnly: !0,
          constrainInput: !1,
          defaultDate: 0,
          minDate: 0
        }), a("#end_date", d).datepicker({
          showOn: "button",
          buttonImage: "https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/calendarpicker_17x15.png",
          buttonImageOnly: !0,
          constrainInput: !1,
          defaultDate: 0,
          minDate: 0,
          onClose: function(b, c) {
            a("#radio_end_date").attr("checked", !0)
          }
        }), a(".b4g-ui-datepicker-trigger", d).css({
          cursor: "pointer",
          margin: "-2px 0px 0px -25px"
        }).hover(function() {
            a(this).css("box-shadow", "0px 0px 3px #aaa");
            a(this).css("-moz-box-shadow", "0px 0px 3px #aaa")
          },
          function() {
            a(this).css("box-shadow", "none");
            a(this).css("-moz-box-shadow", "none")
          }), a("#schedule_recurring", d).click(function() {
          Pe(c);
          n("compose dialog recurring dialog", "click", "schedule recurring")
        }), a("#cancel_recurring", d).click(function() {
          a(".dialogdiv").dialog("close")
        }), b = (new Date).addMinutes(10), a("#start_date_input", d).val(b.toString("MM/dd/yyyy")), a("#start_time_input", d).val(b.toString("h:mm tt")), id(), a("#frequency").change(), K() && a("#recurring_dialog", d).css("font-size", "1.3em"), n("compose dialog recurring dialog",
          "show")) : u("Please enter a recipient.")
    }
  }

  function Pe(b) {
    a(".dialogdiv").dialog("close");
    a(b).append('<div class="b4g-ui-widget-overlay b4g-overlay overlay"></div>').append('<div class="b4g-overlay" style="position: absolute; top: 50%; left: 50%; margin: -38px 0 0 -120px; background: white; width: 220px; text-align: center; padding: 10px; z-index: 1001;"><img height="32" width="32" src="https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/b4gloading.gif"><br><span style="font-size: 14px;">Setting up recurring messages</span></div>');
    ac(b, function(d) {
      d ? Fc() : Qe(b, function() {
        a(".b4g-overlay", b).remove()
      })
    })
  }

  function Qe(b, d) {
    function c() {
      function c(a, b, e) {
        1 === a || E(a) ? (setTimeout(function() {
          d(null)
        }, 0), E(a) && sa(a), M.expire_cache(), aa()) : 20 === a ? (sa(a), d({
          "pay-wall": !0
        })) : (u("Attempt failed: " + pa[a]), d({
          failure: pa[a]
        }))
      }
      a(".Ha", b).each(ga);
      1 === q() ? U(B, c, F) : a.ajax({
        type: "POST",
        url: B,
        data: A,
        xhr: J,
        success: function(a) {
          var b = a.status;
          "nag" === b && "paywall" === a.message ? (ya(a.message), d({
            "pay-wall": !0
          })) : "success" === b || "nag" === b ? (setTimeout(function() {
              d(null)
            },
            0), "nag" === b && ya(a.message), M.expire_cache(), aa()) : (u("Attempt failed: " + a.message), d({
            failure: a.message
          }))
        }
      });
      K() || Ia(b) || Ya(F, 0, "send_new_compose")
    }
    d = d || a.noop;
    if (0 < a(".dU", x).length) u("Please wait for your attachments to upload before sending."), setTimeout(function() {
      d({
        "active-attachments": !0
      })
    });
    else {
      var e = new Date,
        f = y(),
        g = wa("subjectbox", b).val();
      if (200 < g.length) u("You've exceeded the maximum subject length. Please shorten your subject and try again."), setTimeout(function() {
        d({
          "long-subject": !0
        })
      });
      else {
        var l = a(".J-JN-M-I.J-J5-Ji.az2.az4.L3", b),
          l = 0 < l.length ? wb(l.text()) : f,
          k = W("to", b),
          h = W("cc", b),
          r = W("bcc", b);
        if (k || h || r)
          if (0 < a(".vQ .vT", b).length) u("One of the addresses you entered is not recognized. Please make sure that all addresses are properly formed."), setTimeout(function() {
            d({
              "invalid-recipient": !0
            })
          });
          else {
            var p = vb,
              p = (k + " " + h + " " + r).toLowerCase().match(p),
              p = hd(p);
            if (100 < p.length) u("<p>Boomerang limits you to 100 recipients at a time. Please enter a shorter list.</p>"), setTimeout(function() {
              d({
                "too-many-recipients": !0
              })
            });
            else if (p = a("#start_date_input").val() + " " + a("#start_time_input").val(), p = Date.parse(p), null == p || p < new Date) alert("Invalid start date"), setTimeout(function() {
              d({
                "invalid-start-date": !0
              })
            });
            else {
              var t = Kb(),
                w = null;
              if ("monthweek" == a("#frequency").val()) var w = a("#set_position").val(),
                C = Re();
              else C = Lb(p);
              var O = a("#num_interval").val();
              if ("" === C) alert("You must select a day of the week."), setTimeout(function() {
                d({
                  "no-day-selected": !0
                })
              });
              else {
                var n = "None",
                  m = "None";
                if (a("#radio_num_occurences").attr("checked")) n =
                  a("#num_occurences").val();
                else if (a("#radio_end_date").attr("checked")) {
                  m = a("#end_date").val() + " " + a("#start_time_input").val();
                  m = Date.parse(m);
                  if (null == m) {
                    alert("Invalid end date");
                    setTimeout(function() {
                      d({
                        "invalid-end-date": !0
                      })
                    });
                    return
                  }
                  m = m.valueOf()
                }
                var L = Wb(b);
                if (null == L || "undefined" === L) L = fa();
                var z = b.find("*[name='draft']").first().val();
                z && (z = z.replace("#", ""));
                var D = jstz.determine().name(),
                  A = {};
                A.guser = f;
                A.from = l;
                A.subject = g;
                A.to = k;
                A.cc = h;
                A.bcc = r;
                A.esttimesaved = e.valueOf();
                A.frequency = t;
                A.interval = O;
                w && (A.setPosition = w);
                A.utc_weekday = C;
                A.start = p.valueOf();
                A.end = m;
                A.num_occurences = n;
                A.threadId = L;
                A.draftId = z;
                yb() ? A.language = "English" : A.language = "notEnglish";
                A.tz = D;
                oa(b) && (e = kb(b), A.trackingCode = e);
                var B;
                B = 1 === q() ? gb("https://b4g.baydin.com/mailcruncher/schedulerecurring", A) : "https://b4g.baydin.com/gmailmigration/sendrecurring";
                var F = "Recurring message scheduled: " + a("#recurring_feedback").text();
                Da(c)
              }
            }
          }
        else u("Please enter a recipient."), setTimeout(function() {
          d({
            "no-recipient": !0
          })
        })
      }
    }
  }

  function jd(b) {
    var d = F();
    if ("Old Safari" === z) alert("This feature is available in Safari versions 5.1 and higher. Please update Safari to use this feature.");
    else {
      a(".dialogdiv").remove();
      var c = a("<div class='dialogdiv' style='display:none;'><div id='recurring_dialog'><div id='start_date_time' class='recurring_field'><span class='recurring-row-title'>Starts</span><span id='start_date' class='recurring_right_col'><input id='start_date_input' type='text' name='starts' size='15'/><span id='start_time'>Send Time: <input id='start_time_input' name='time' size='10'/></span></span></div><div  class='recurring_field'><span class='recurring-row-title'>Repeats</span><select id='frequency'  class='recurring_right_col'><option value='day'> Daily</option><option value='week' selected='selected'>Weekly</option><option value='weekday' >Every Weekday</option><option value='month' >Monthly on the same date</option><option value='monthweek' >Monthly on the same week</option><option value='year'>Yearly</option></select></div><div id='num_time_interval'  class='recurring_field'> Every <span class='recurring_right_col'> <input type='number' value='1' min='1' max='12' name='num_interval' id='num_interval'/><span id='interval'> week</span><div id='date_position_div' style='display: inline-block;'><span class='recurring_field'>Date: <input type='number' value='1' min='1' max='31' id='date_position' name='date_position'/></span></div><div id='set_position_div' style='display: inline-block;'><span class='recurring_field'><select id='set_position'><option value='1'>First</option><option value='2'>Second</option><option value='3'>Third</option><option value='4'>Fourth</option><option value='-1'>Last</option></select></span><span class='recurring_field'><select id='set_position_day'><option value='6'>Sunday</option><option value='0'>Monday</option><option value='1'>Tuesday</option><option value='2'>Wednesday</option><option value='3'>Thursday</option><option value='4'>Friday</option><option value='5'>Saturday</option></select></span></div></div><div id='days_of_week'  class='recurring_field'><span class='recurring-row-title'>On</span><span class='recurring_right_col' style='vertical-align: top;'><input class='day_cb' type='checkbox' value='6' name='Sun' style='margin-left:0px'/> Sun<input class='day_cb' type='checkbox' value='0' name='Mon'/> Mon<input class='day_cb' type='checkbox' value='1' name='Tue'/> Tue<input class='day_cb' type='checkbox' value='2' name='Wed'/> Wed<input class='day_cb' type='checkbox' value='3' name='Thur'/> Thur<input class='day_cb' type='checkbox' value='4' name='Fri'/> Fri<input class='day_cb' type='checkbox' value='5' name='Sat'/> Sat</span></div><div  class='recurring_field'><span class='recurring-row-title'> Ends </span><div class='recurring_right_col' style='display:inline-block;vertical-align: middle; line-height: 24px;'><div style='margin-bottom:3px;'><input type='radio' id='radio_num_occurences' name='end_group' checked/> After <input type='number' value='10' min='1' max='100' id='num_occurences' name='num_occurences'/> messages</div><div style='margin-bottom:3px;'><input type='radio' id='radio_end_date' name='end_group'/> On <input id='end_date' value='' name='end_date' size='15'/></div><div style='margin-bottom:3px;'><input type='radio' id='radio_no_end' name='end_group'/> No end date <br/></div></div></div><br/><br/><br/><br/><div id='summary' class='recurring_field'><span class='recurring-row-title'>Summary:</span><div id='recurring_feedback' class='recurring_right_col' style='display:inline-block;padding-right:20px;'> </div></div><div class='b4g-button-container' align='center'><button id='schedule_recurring' class='b4g-button red' style='margin:4px 10px;'> Schedule </button><button id='cancel_recurring' class='b4g-button dialog-gray' style='margin:4px 10px;'>Cancel</button></div><br/></div></div>");
      a("body", d).append(c);
      a(".dialogdiv", d).dialog({
        modal: !0,
        title: "Schedule Recurring Message",
        closeOnEscape: !0,
        width: 530,
        dialogClass: "recurringDialog"
      });
      a(".dialogdiv", d).css({
        padding: "0px"
      });
      a("#start_date_input", d).datepicker({
        showOn: "button",
        buttonImage: "https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/calendarpicker_17x15.png",
        buttonImageOnly: !0,
        constrainInput: !1,
        defaultDate: 0,
        minDate: 0
      });
      a("#end_date", d).datepicker({
        showOn: "button",
        buttonImage: "https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/calendarpicker_17x15.png",
        buttonImageOnly: !0,
        constrainInput: !1,
        defaultDate: 0,
        minDate: 0,
        onClose: function(b, c) {
          a("#radio_end_date").attr("checked", !0)
        }
      });
      a(".b4g-ui-datepicker-trigger", d).css({
        cursor: "pointer",
        margin: "-2px 0px 0px -25px"
      }).hover(function() {
        a(this).css("box-shadow", "0px 0px 3px #aaa");
        a(this).css("-moz-box-shadow", "0px 0px 3px #aaa")
      }, function() {
        a(this).css("box-shadow", "none");
        a(this).css("-moz-box-shadow", "none")
      });
      id();
      a("#schedule_recurring").click(function() {
        (b || schedule_recurring)()
      });
      a("#cancel_recurring").click(function() {
        a(".dialogdiv").dialog("close")
      });
      d = (new Date).addMinutes(10);
      a("#start_date_input").val(d.toString("MM/dd/yy"));
      a("#start_time_input").val(d.toString("h:mm tt"));
      return c
    }
  }

  function kd(a) {
    return a.replace("6", "x").replace("5", "6").replace("4", "5").replace("3", "4").replace("2", "3").replace("1", "2").replace("0", "1").replace("x", "0")
  }

  function ld(a) {
    return a.replace("0", "x").replace("1", "0").replace("2", "1").replace("3", "2").replace("4", "3").replace("5", "4").replace("6", "5").replace("x", "6")
  }

  function Kb() {
    var b = a("#frequency").val();
    switch (b) {
      case "day":
        b = "DAILY";
        break;
      case "week":
        b = "WEEKLY";
        break;
      case "weekday":
        b = "WEEKLY";
        break;
      case "month":
        b = "MONTHLY";
        break;
      case "monthweek":
        b = "MONTHLY";
        break;
      case "YEARLY":
        b = "YEARLY";
        break;
      default:
        b = "YEARLY"
    }
    return b
  }

  function Re() {
    for (var b = a(".day_cb:checked").map(function(b, c) {
        return a(c).val()
      }).get(), d = "", c = 0; c < b.length; c++) d = "" === d ? d + ("(" + b[c]) : d + ("," + b[c]);
    "" !== d && (d += ")");
    return d
  }

  function Lb(b) {
    for (var d = a(".day_cb:checked").map(function(b, c) {
        return a(c).val()
      }).get(), c = "", e = 0; e < d.length; e++) c =
      "" === c ? c + ("(" + d[e]) : c + ("," + d[e]);
    "" !== c && (c += ")");
    if (b.getUTCDay() > b.getDay() || 0 === b.getUTCDay() && 6 === b.getDay()) c = kd(c);
    else if (b.getUTCDay() < b.getDay() || 6 === b.getUTCDay() && 0 === b.getDay()) c = ld(c);
    return c
  }

  function Ra() {
    a("#recurring_feedback").text("");
    var b = "";
    try {
      var d = Kb(),
        c = a("#num_interval").val(),
        e = null;
      "monthweek" == a("#frequency").val() && (e = a("#set_position").val());
      var f = a("#start_date_input").val() + " " + a("#start_time_input").val(),
        g = Date.parse(f),
        l = g.getUTCMinutes(),
        k = g.getUTCHours(),
        h =
        g.getUTCDate(),
        r = g.getUTCMonth() + 1,
        p = Lb(g);
      var t = Date.UTC((new Date).getFullYear(), r - 1, h, k, l),
        w = new Date(t),
        l = p;
      if (w.getUTCDay() > w.getDay() || 0 === w.getUTCDay() && 6 === w.getDay()) l = ld(p);
      else if (w.getUTCDay() < w.getDay() || 6 === w.getUTCDay() && 0 === w.getDay()) l = kd(p);
      for (var p = "", C = l.replace("(", "").replace(")", ""), l = 0; l < Fa.length; l++) C = C.replace(l.toString(), Fa[l]);
      p += C;
      if ("" === p) b = "";
      else {
        C = "Every ";
        1 < c && (C += c + " ");
        switch (d) {
          case "DAILY":
            C += "day";
            break;
          case "WEEKLY":
            C += "week";
            break;
          case "MONTHLY":
            C += "month";
            break;
          case "YEARLY":
            C += "year"
        }
        1 < c && (C += "s");
        C += ", ";
        "WEEKLY" === d && (C += "on " + p.split(",").join(", ") + " ");
        if ("MONTHLY" === d)
          if (null == e) C += "on day " + w.getDate(), 28 < w.getDate() && (C += "(or the last day of the month)"), C += " ";
          else {
            switch (e) {
              case "-1":
                C += "on last ";
                break;
              case "1":
                C += "on first ";
                break;
              case "2":
                C += "on second ";
                break;
              case "3":
                C += "on third ";
                break;
              case "4":
                C += "on fourth "
            }
            C += p + " "
          }
        "YEARLY" === d && (C += "on " + w.toString("MMM d") + " ");
        b = C += "at " + w.toString("h:mm tt")
      }
    } catch (O) {}
    a("#recurring_feedback").text(b)
  }

  function md() {
    a("input.day_cb").attr("checked", !0);
    a("#days_of_week").css("display", "none")
  }

  function nd() {
    a("#days_of_week").css("display", "block")
  }

  function id() {
    function b() {
      var b = a("#set_position_day").val();
      a("input.day_cb").attr("checked", !1);
      a("input.day_cb").filter("[value=" + b + "]").attr("checked", !0)
    }
    a("#frequency").change(function() {
      a("#num_interval").val(1);
      "week" === a("#frequency").val() ? (nd(), a("input.day_cb").attr("checked", !1), a("#set_position_div").hide(), a("#date_position_div").hide(),
        a("#interval").text(" week")) : "weekday" === a("#frequency").val() ? (nd(), a("input.day_cb").filter("[value='0'], [value='1'], [value='2'], [value='3'], [value='4']").attr("checked", !0), a("input.day_cb").filter("[value='5'], [value='6']").attr("checked", !1), a("#set_position_div").hide(), a("#date_position_div").hide(), a("#interval").text(" week")) : "monthweek" == a("#frequency").val() ? (md(), b(), a("#set_position_div").show(), a("#date_position_div").hide(), a("#interval").text(" month")) : ("month" == a("#frequency").val() ?
        a("#date_position_div").show() : a("#date_position_div").hide(), md(), a("#set_position_div").hide(), a("#interval").text(" " + a("#frequency").val()));
      a("#start_date_input").change()
    });
    a("#num_interval").change(function() {
      Ra()
    });
    a("#num_interval").click(function() {
      Ra()
    });
    a(".day_cb, #start_time_input").change(function() {
      Ra()
    });
    a("#start_time_input").keyup(function() {
      Ra()
    });
    a("#start_date_input").change(function() {
      var d = a("#start_date_input").val(),
        d = Date.parse(d),
        c;
      c = d;
      null == c && (c = new Date);
      var e = c.getDate(),
        e = Math.floor((e - 1) / 7);
      c = c.getDay();
      e += 1;
      5 == e && (e = -1);
      --c; - 1 == c && (c = 6);
      c = {
        n: e,
        weekday: c
      };
      a("#set_position").val(c.n);
      a("#set_position_day").val(c.weekday);
      a("#date_position").attr("max", Date.getDaysInMonth(d.getYear(), d.getMonth()));
      a("#date_position").val(d.getDate());
      "week" != a("#frequency").val() && "monthweek" != a("#frequency").val() || b();
      Ra()
    });
    a("#set_position, #set_position_day").change(function() {
      b();
      var d = parseInt(a("#set_position").val()),
        c = parseInt(a("#set_position_day").val()),
        d = od(d, c);
      a("#start_date_input").val(d.toString("M/d/yyyy"));
      Ra()
    });
    a("#date_position").change(function() {
      var b = a("#start_date_input").val(),
        b = Date.parse(b),
        c = parseInt(a(this).val());
      try {
        b.set({
          day: c
        });
        var e = new Date;
        if (b < e) {
          var f = (e.getMonth() + 1) % 12;
          b.set({
            month: f
          })
        }
      } catch (g) {
        g instanceof RangeError && b.moveToLastDayOfMonth()
      }
      a("#start_date_input").val(b.toString("M/d/yyyy"));
      Ra()
    })
  }

  function pd() {
    return Math.random().toString(36).substr(5) + Date.now().toString(36)
  }

  function qd(b) {
    a("a[href^='http://mailstat.us/tr/opt-out?guid'],img[src^='http://mailstat.us/tr/'],.b4g-open-track",
      b).remove()
  }

  function Se(b, d) {
    a("a[href^='http://mailstat.us/tr/opt-out']", b).not(":has(img[src^='http://mailstat.us/tr/'])").remove().end().not("[href='http://mailstat.us/tr/opt-out?guid=" + d + "']").remove();
    a("img[src^='http://mailstat.us/tr/']", b).filter(function() {
      return "a" !== this.parentNode.tagName.toLowerCase()
    }).remove()
  }

  function rd(b) {
    return b.tagName ? "img" === b.tagName.toLowerCase() ? [b] : a(b).find("a, img").andSelf().filter("a, img").toArray() : []
  }

  function lb(b) {
    var d = a(".b4g-tracking-toggle",
        b).data("is-selected"),
      c = ra(b);
    if (d) {
      c.data("has-tracking-opt-out-observer") || ((new ka(function(c) {
        for (var d = 0; d < c.length; d++)
          for (var e = c[d], k = a.map(e.addedNodes || [], rd), e = a.map(e.removedNodes || [], rd), k = [].concat(k, e), e = 0; e < k.length; e++) {
            var h = k[e],
              r = h.tagName.toLowerCase();
            if ("a" === r && 0 === h.href.indexOf("http://mailstat.us/tr/opt-out?guid=")) {
              lb(b);
              return
            }
            if ("img" === r && 0 === h.src.indexOf("http://mailstat.us/tr/")) {
              lb(b);
              return
            }
          }
      })).observe(c[0], {
        childList: !0,
        subtree: !0
      }), c.data("has-tracking-opt-out-observer",
        !0));
      d = c.data("thread-guid") || pd();
      c.data("thread-guid", d);
      var e = a("a[href='http://mailstat.us/tr/opt-out?guid=" + d + "']:has(img[src^='http://mailstat.us/tr/'])", c);
      0 < e.length ? (Se(c, d), e.slice(1).remove().end().addClass("b4g-open-track")) : (qd(c), e = a('<a href="http://mailstat.us/tr/opt-out?guid=' + d + '"><img src="http://mailstat.us/tr/optout-blk-nologo.png?guid=' + d + '" /></a>').addClass("b4g-open-track"), c.append(e), e.prev().is("br") || e.before("<br/>"))
    } else qd(c)
  }

  function Te(a) {
    ra(a).find("*:not(a)").andSelf().replaceText(Ue,
      function(a, b) {
        var e = b;
        0 !== e.indexOf("http://") && 0 !== e.indexOf("https://") && (e = "http://" + e);
        return '<a href="' + e + '" target="_blank">' + b + "</a>"
      })
  }

  function mc(a) {
    var d = Ve.exec(a);
    return d ? d[1] : a
  }

  function We(b) {
    a("a[href^='http://mailstat.us/tr/t/']", b).each(function() {
      var b = a(this);
      if (b.is(".b4g-track-dummy")) b.remove();
      else {
        var c = mc(this.href);
        b.attr("href", c).removeClass("b4g-track-link")
      }
    })
  }

  function sd(b) {
    return b.tagName ? "a" === b.tagName.toLowerCase() ? [b] : a(b).find("a").toArray() : []
  }

  function Mb(b) {
    var d =
      a(".b4g-tracking-toggle", b).data("is-selected"),
      c = ra(b);
    if (d)
      if (c.data("has-click-tracking-observer") || ((new ka(function(c) {
            for (var d = 0; d < c.length; d++) {
              var e = c[d],
                k = a.map(e.addedNodes || [], sd),
                h = a.map(e.removedNodes || [], sd),
                h = [].concat(k, h);
              "attributes" === e.type && h.push(e.target);
              for (e = 0; e < h.length; e++) {
                var r = h[e],
                  p = a(r).removeClass("b4g-track-link").attr("href");
                if ("/" !== p.charAt(0)) {
                  -1 < a.inArray(r, k) && (r.href = mc(p));
                  Mb(b);
                  return
                }
              }
            }
          })).observe(c[0], {
            childList: !0,
            attributes: !0,
            subtree: !0,
            attributeFilter: ["href"]
          }),
          c.data("has-click-tracking-observer", !0)), d = a("a:not(.b4g-track-wont)", c), d = d.each(function() {
          var b = this.href;
          0 === b.indexOf("mailto:") && a(this).addClass("b4g-track-wont");
          0 === b.indexOf("http://mailstat.us/tr/opt-out?guid=") && a(this).addClass("b4g-track-wont")
        }).not(".b4g-track-wont"), 0 >= d.length) d = a('<a href="http://mailstat.us/tr/t/dummy"></a>').addClass("b4g-track-link b4g-track-dummy").css({
        border: "0",
        "text-decoration": "none",
        width: "1px"
      }).hide(), c.append(d);
      else {
        if (d.filter("[href^='http://mailstat.us/tr/t/dummy']:not(.b4g-track-dummy)").addClass("b4g-track-dummy"),
          d = d.not(".b4g-track-dummy"), 0 < d.length && a(".b4g-track-dummy", c).remove(), d = d.not(".b4g-track-link, .b4g-track-wont"), !(0 >= d.length)) {
          var e = c.data("thread-guid") || pd();
          c.data("thread-guid", e);
          c = d.not("[href^='http://mailstat.us/tr/t/" + e + "']");
          0 >= c.length ? d.addClass("b4g-track-link") : c.each(function() {
            var b;
            b = this.href;
            b = mc(b);
            b = "http://mailstat.us/tr/t/" + e + "/" + Xe() + "/" + b;
            a(this).attr("href", b).addClass("b4g-track-link")
          })
        }
      }
    else We(c)
  }

  function Rc(b) {
    var d = ra(b),
      c = 3 === q() ? "20" : "21",
      e = a(".J-Z-aEu-I.J-Z-I.J-J5-Ji",
        b).first().clone().addClass("b4g-tracking-toggle").removeClass("gU").hover(function() {
        a(this).addClass("J-Z-I-JW J-Z-I-KO")
      }, function() {
        a(this).removeClass("J-Z-I-JW");
        "true" !== a(this).attr("aria-selected") && a(this).removeClass("J-Z-I-KO")
      }).bind("b4g-toggle-state", function(b, c) {
        var d = a(this);
        null == c && (c = "true" !== d.attr("aria-selected"));
        d.toggleClass("J-Z-I-KO", c).attr("aria-selected", c + "");
        a(this).data("is-selected", c);
        c && M.enable()
      }).click(function() {
        var c = a(this);
        Da(function() {
          c.trigger("b4g-toggle-state");
          Nb(function(a) {
            !a && c.data("is-selected") && Ye(b)
          })
        }, function() {
          a("#b4g-message-not-scheduled").text("Your read receipt was NOT included.")
        })
      }).attr("data-tooltip", "Request read receipt and track clicks").attr("command", "").attr("aria-label", "Request read receipt and track clicks").attr("id", null).css({
        width: "24px",
        display: "inline-block",
        margin: "-1px 5px 0 5px",
        padding: "3px 2px 0 2px",
        "text-align": "center"
      }).find(".aaB").attr("style", "background-image: url(https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/tracking-toggle.png) !important;background-size: " +
        c + "px !important;background-position: center 0 !important;margin: 0px 0px 0px 4px;opacity: 1;").end();
    a(".sendLaterTable .b4g-tracking-toggle-holder", b).replaceWith(e);
    c = (c = 0 < a("a[href^='http://mailstat.us/tr/t/']", d).length) || 0 < a("a[href^='http://mailstat.us/tr/opt-out?guid=']:has(img[src^='http://mailstat.us/tr/'])", d).length;
    e.trigger("b4g-toggle-state", c).bind("b4g-toggle-state", function() {
      if (d.data("is-plain-text")) return a(this).data("is-selected") && (u("Read receipts and click tracking do not work with plain text emails."),
        a(this).trigger("b4g-toggle-state", !1)), !1;
      lb(b);
      Mb(b)
    });
    a(".aoO, .send-later-button", b).bind("mousedown focus", function() {
      var b = a(this).closest(".I5,.fN");
      lb(b);
      e.data("is-selected") && Te(b);
      Mb(b)
    });
    lb(b);
    Mb(b);
    ce(b);
    Ze(b)
  }

  function oa(b) {
    return a(".b4g-tracking-toggle", b).data("is-selected")
  }

  function kb(a) {
    return ra(a).data("thread-guid")
  }

  function $e(a) {
    var d = y(),
      c = wa("subject", a).val(),
      e = W("to", a),
      f = W("cc", a),
      g = W("bcc", a),
      l = wa("draft", a).val(),
      k = wa("draft", a).val();
    a = kb(a);
    var h = {};
    h.subject = c;
    h.guser =
      d;
    h.threadId = l;
    h.draftId = k;
    h.trackingCode = a;
    h.to = e;
    h.cc = f;
    h.bcc = g;
    return [1 === q() ? gb("https://b4g.baydin.com/mailcruncher/trackemail", h) : "https://b4g.baydin.com/gmailmigration/track", h]
  }

  function Uc(b) {
    var d = $jscomp.makeIterator($e(b));
    b = d.next().value;
    d = d.next().value;
    1 === q() ? U(b, function(a, b, d) {
      E(a) || 20 === a ? sa(a) : 1 !== a ? u("Your most recent Boomerang-on-Send failed. To Boomerang your sent email, please open your message in 'Sent Mail' and Boomerang the message manually. <br/><br/> Error Details:<br/> " +
        pa[a]) : M.expire_cache()
    }, "success") : a.ajax({
      type: "POST",
      url: b,
      data: d,
      xhr: J,
      success: function(a) {
        var b = a.status;
        "success" === b ? M.expire_cache() : "error" === b ? u(a.message) : "nag" === b && (ya(a.message), M.expire_cache())
      }
    })
  }

  function ze() {
    var b = F();
    a(".dialogdiv").remove();
    var d;
    d = 3 === q() ? "<div class='dialogdiv b4g-settings-dialog-div-new-ui'><div class='b4g_settings_loading b4g-settings-loading-new-ui b4g-settings-loading-new-ui'>Loading...</div><div class='b4g_settings_dialog b4g-settings-dialog-new-ui'><div class='b4g-settings-menu-title-new-ui'>Boomerang Settings</div><div class='b4g_send_condition_settings_box'><div class='b4g-settings-send-condition-new-ui'><div class='b4g-settings-send-condition-title-new-ui'>When messages are returned, they should be</div><div class='bullet_text b4g-settings-bullet-text-new-ui'><div class='b4g-settings-option-container-new-ui'><input type='checkbox' class='pref b4g-settings-cb-new-ui' id='unread'> <label for='unread' class='b4g-settings-text-new-ui'>Marked as unread</label></div><div class='b4g-settings-option-container-new-ui'><input type='checkbox' class='pref b4g-settings-cb-new-ui' id='starred'> <label for='starred' class='b4g-settings-text-new-ui'>Starred</label></div><div class='b4g-settings-option-container-new-ui'><input type='checkbox' class='pref b4g-settings-cb-new-ui' id='topinbox'> <label for='topinbox' class='b4g-settings-text-new-ui'>At the top of your inbox</label></div><div class='b4g-settings-option-container-new-ui'><input type='checkbox' class='pref b4g-settings-cb-new-ui' id='labelled'> <label for='labelled' class='b4g-settings-text-new-ui'>Labeled as 'Boomerang-Returned'</label></div></div></div><div class='b4g-settings-features-list-new-ui'><div><div class='b4g-settings-option-container-new-ui'><input type='checkbox' class='pref b4g-settings-cb-new-ui' id='b4g_enable_respondable'> <label class='b4g-settings-text-new-ui' for='b4g_enable_respondable'>Enable Respondable</label> </div><div class='b4g-settings-premium-respondable-new-ui'><div class='b4g_settings_respondable_upgrade_link' class='b4g-settings-premium-respondable-upgrade-link-new-ui'><a href='https://b4g.baydin.com/subscriptions?utm_source=b4g&utm_medium=settings&utm_campaign=settingslink'>Upgrade to the Pro or Premium plan to enable this feature.</a></div><div class='b4g_respondable_text_disabled b4g-settings-respondable-text-diabled-new-ui b4g-settings-advanced-respondable-container-new-ui b4g-settings-disabled-if-not-pro-new-ui'><input type='checkbox' class='pref b4g-settings-cb-new-ui' id='b4g_enable_premium_respondable'> <label class='b4g-settings-text-new-ui' for='b4g_enable_premium_respondable'>Enable Respondable with advanced machine learning</label> <img src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/questionmark.png' class='b4g_settings_respondable_question b4g-settings-respondable-question-new-ui'><div class='b4g-settings-advanced-respondable-text-new-ui'>Enables politeness, sentiment, and subjectivity analysis. Your message information will be sent to Boomerang servers for analysis, but message data will not be retained.</div></div></div></div><div id='inbox-pause-settings' class='b4g-settings-relative-position-new-ui'><div id='inbox-pause-tooltip' class='b4g-settings-ibp-tooltip-new-ui b4g-settings-option-container-new-ui' data-tooltip-align='b,l'><input id='inbox-pause-enabled' type='checkbox' class='pref b4g-settings-cb-new-ui' checked='checked' /> <label id='inbox-pause-label' for='inbox-pause-enabled' class='b4g-settings-inbox-pause-label-new-ui'>Enable Inbox Pause</label> </div><img id='inbox-pause-more' src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/questionmark.png' class='b4g_settings_inbox_pause_question b4g-settings-inbox-pause-question-new-ui'><div class='b4g-settings-ibp-explanation-text-new-ui'>Stop new email from coming into your Inbox until you're ready for it.</div></div><div class='b4g-settings-option-container-new-ui'><input type='checkbox' class='pref b4g-settings-cb-new-ui b4g-settings-relative-position-new-ui' id='keyboard-shortcuts'> <label class='b4g-settings-text-new-ui' for='keyboard-shortcuts'>Enable keyboard shortcuts</label> </div><img src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/questionmark.png' class='b4g_settings_shortcuts_question b4g-settings-shortcuts-question-new-ui'><ul class='b4g-settings-ks-list-new-ui'><li>Press <strong>b</strong> to open the Boomerang menu</li><li>Press <strong>Ctrl/Cmd + s</strong> to open the send later menu (while you are composing a message)</li><li>Use the arrow keys, space bar, and enter to navigate inside the menus.</li></ul></div><div class='bullet_text'><div class='b4g-settings-premium-title-new-ui'>Premium Settings</div><div class='b4g_settings_premium_link b4g-settings-premium-link-new-ui'><a href='https://b4g.baydin.com/subscriptions?utm_source=b4g&utm_medium=settings&utm_campaign=settingslink'>Upgrade to the Premium plan to enable these features.</a></div><div class='b4g_premium-text-disabled b4g-settings-premium-link-diabled-new-ui'><div class='b4g-settings-option-container-new-ui b4g-settings-disabled-if-not-premium-new-ui'><input type='checkbox' class='pref pref-check b4g-settings-cb-new-ui' id='b4g_read_receipt_check'> <label for='b4g_read_receipt_check' class='b4g-settings-text-new-ui'>Request a read receipt for every email I send</label></div><div class='b4g-settings-option-container-new-ui b4g-settings-disabled-if-not-premium-new-ui'><input type='checkbox' class='pref pref-check b4g-settings-cb-new-ui' id='b4g_send_check'> <label for='b4g_send_check' class='b4g-settings-text-new-ui'>Enable Boomerang for every email I send:</label> </div><div class='b4g_send_condition_value_settings_box b4g-settings-send-condition-value-new-ui b4g-settings-disabled-if-not-premium-new-ui'><span class='b4g-settings-remind-me-new-ui'>Remind me</span><span class='b4g-settings-response-options-new-ui'><select name='ifResponseSettingNum' id='b4g_send_check_num' class='b4g-enabled-pref pref pref-select'><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option><option value='6'>6</option><option value='7'>7</option><option value='8'>8</option><option value='9'>9</option><option value='10'>10</option><option value='11'>11</option><option value='12'>12</option><option value='13'>13</option><option value='14'>14</option><option value='15'>15</option><option value='16'>16</option><option value='17'>17</option><option value='18'>18</option><option value='19'>19</option><option value='20'>20</option><option value='21'>21</option><option value='22'>22</option><option value='23'>23</option><option value='24'>24</option><option value='25'>25</option><option value='26'>26</option><option value='27'>27</option><option value='28'>28</option><option value='29'>29</option><option value='30'>30</option><option value='31'>31</option></select></span><span class='b4g-settings-response-options-new-ui'><select name='ifResponseSettingUnit' id='b4g_send_check_unit' class='b4g-enabled-pref pref pref-select'><option value='hours'>hours</option><option value='days'>days</option><option value='weeks'>weeks</option><option value='months'>months</option></select></span><span class='b4g-settings-premium-after-sending-title-new-ui'>after sending</span><span class='b4g-settings-response-options-new-ui'><select name='ifResponseSettingCond' id='b4g_send_check_cond' class='b4g-enabled-pref pref pref-select'><option value='no reply'>if no reply</option><option value='no open'>if not opened</option><option value='always'>regardless</option></select></span></div></div><div class='b4g_premium-text-disabled b4g-settings-enable-crm-container-new-ui'><div class='b4g-settings-option-container-new-ui b4g-settings-disabled-if-not-premium-new-ui'><input type='checkbox' id='b4g_crm_enabled' class='pref b4g-settings-cb-new-ui'> <label for='b4g_crm_enabled' class='b4g-settings-text-new-ui'>Enable CRM Integration</label><br/></div><div class='b4g_crm_hide_if_disabled' style='display: none;'><div class='b4g-settings-crm-options-new-ui'><span class='b4g-settings-select-crm-title-new-ui' >Select CRM</span> <select id='b4g_crm_select' class='pref b4g-settings-crm-select-new-ui'><option value='salesforce'>Salesforce</option><option value='highrise'>Highrise</option><option value='insightly'>Insightly</option><option value='capsule'>Capsule</option><option value='sugar'>Sugar</option><option value='pipedrive'>Pipedrive</option><option value='zoho'>Zoho</option><option value='other'>Other</option></select></div><div class='b4g-settings-crm-bcc-container-new-ui'><span class='b4g-settings-crm-bcc-title-new-ui'>Bcc Address <img src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/questionmark.png' class='b4g_settings_bccaddress_question b4g-settings-bcc-address-question-new-ui'></span> <input id='b4g_bccAddress' class='b4g-settings-bcc-address-input-new-ui' placeholder='example@salesforce.com' type='text'><span id='b4g_bccAddressDisplay' class='b4g-settings-bcc-address-display-new-ui'></span><span id='b4g_edit_link' class='b4g-settings-edit-save-links-new-ui'>Edit</span><span id='b4g_save_link' class='b4g-settings-edit-save-links-new-ui'>Save</span></div><div class='b4g-settings-crm-include-with-every-email-container-new-ui'><span class='b4g-settings-crm-include-with-every-email-title-new-ui'>Include with</span> <input class='pref b4g_crm_include_with b4g-settings-crm-include-with-option-new-ui' type='radio' id='b4g_crm_include_with_every' name='b4g_crm_include_with' value='every'/><label for='b4g_crm_include_with_every'>every email I send</label></div><div class='b4g-settings-crm-include-with-boomerang-container-new-ui'><span class='b4g-settings-crm-include-with-boomerang-title-new-ui'></span> <input class='pref b4g_crm_include_with b4g-settings-crm-include-with-option-new-ui' type='radio' id='b4g_crm_include_with_boomerang' name='b4g_crm_include_with' value='boomerang' /><label for='b4g_crm_include_with_boomerang'>only emails I Boomerang when sending</label></div></div></div></div></div></div></div>" :
      "<div class='dialogdiv' style='display:none; margin: 3px; color: #333'><div class='b4g_settings_loading' style='margin: 20px 0; font-size: 24px; width: %100; text-align: center;'>Loading...</div><div class='b4g_settings_dialog' style='font-size: 13px;'><div class='b4g_send_condition_settings_box'><div style='margin: 2px 0 0 0;'><h3 style='margin: 0 0 10px 0;'>When messages are returned, they should be:</h3><div class='bullet_text' style='margin:10px 0 0 0;'><input type='checkbox' class='pref' id='unread' style='margin: 4px 0;vertical-align: middle;'> <label for='unread' style='vertical-align: middle;'>Marked as unread</label><br/><input type='checkbox' class='pref' id='starred' style='margin: 4px 0;vertical-align: middle;'> <label for='starred' style='vertical-align: middle;'>Starred</label> <br/><input type='checkbox' class='pref' id='topinbox' style='margin: 4px 0;vertical-align: middle;'> <label for='topinbox' style='vertical-align: middle;'>At the top of your inbox</label><br/><input type='checkbox' class='pref' id='labelled' style='margin: 4px 0;vertical-align: middle;'> <label for='labelled' style='vertical-align: middle;'>Labeled as 'Boomerang-Returned'</label> <br/></div></div><div style='margin: 15px 0'><div><input type='checkbox' class='pref' id='b4g_enable_respondable' style='margin: 4px 0;vertical-align: middle;'> <label style='vertical-align: middle;' for='b4g_enable_respondable'>Enable Respondable</label> <div style='margin: 2px 16px;'><div class='b4g_settings_respondable_upgrade_link' style='margin-bottom:5px;'><a href='https://b4g.baydin.com/subscriptions?utm_source=b4g&utm_medium=settings&utm_campaign=settingslink'>Upgrade to the Pro or Premium plan to enable this feature.</a></div><div class='b4g_respondable_text_disabled' style='color: #999;'><input type='checkbox' class='pref' id='b4g_enable_premium_respondable' style='margin: 4px 0;vertical-align: middle;'> <label style='vertical-align: middle;' for='b4g_enable_premium_respondable'>Enable Respondable with advanced machine learning</label> <img src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/questionmark.png' class='b4g_settings_respondable_question' style='cursor:pointer; width:14px; height:14px; vertical-align:middle;'><div style='margin-left: 17px; padding: 3px 0px; font-style: italic; color:#666; display:none;'>Enables politeness, sentiment, and subjectivity analysis. Your message information will be sent to Boomerang servers for analysis, but message data will not be retained.</div></div></div></div><div id='inbox-pause-settings' style='position: relative;'><div id='inbox-pause-tooltip' data-tooltip-align='b,l' style='width: 10px; height: 21px;'><input id='inbox-pause-enabled' type='checkbox' class='pref' style='margin: 4px 0; vertical-align: middle;' checked='checked' /> <label id='inbox-pause-label' for='inbox-pause-enabled' style='white-space: nowrap; position: relative; top: -19.5px; left: 16.5px; vertical-align: middle;'>Enable Inbox Pause</label> </div><img id='inbox-pause-more' src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/questionmark.png' class='b4g_settings_inbox_pause_question' style='float: left; position: absolute; top: 3px; cursor:pointer; width:14px; height:14px;'><div style='margin-top: 1px; margin-left: 17px; padding: 3px 0px; font-style: italic; color:#666; display:none;'>Stop new email from coming into your Inbox until you're ready for it.</div></div><input type='checkbox' class='pref' id='keyboard-shortcuts' style='margin: 4px 0;vertical-align: middle;position:relative;'> <label style='vertical-align: middle;' for='keyboard-shortcuts'>Enable keyboard shortcuts</label> <img src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/questionmark.png' class='b4g_settings_shortcuts_question' style='cursor:pointer; width:14px; height:14px; vertical-align:middle;'><ul style='display:none; padding-left: 35px; color:#666; margin-top: 5px;'><li>Press <strong>b</strong> to open the Boomerang menu</li><li>Press <strong>Ctrl/Cmd + s</strong> to open the send later menu (while you are composing a message)</li><li>Use the arrow keys, space bar, and enter to navigate inside the menus.</li></ul></div><div class='bullet_text'><h3 style='margin: 0 0 10px 0;'>Premium Settings</h3><div class='b4g_settings_premium_link' style='margin-bottom:5px;'><a href='https://b4g.baydin.com/subscriptions?utm_source=b4g&utm_medium=settings&utm_campaign=settingslink'>Upgrade to the Premium plan to enable these features.</a></div><div class='b4g_premium-text-disabled' style='color: #999;'><input type='checkbox' class='pref pref-check' id='b4g_read_receipt_check' style='margin: 4px 0;vertical-align: middle;'> <label for='b4g_read_receipt_check' style='vertical-align: middle;'>Request a read receipt for every email I send</label><br/><input type='checkbox' class='pref pref-check' id='b4g_send_check' style='margin: 4px 0;vertical-align: middle;'> <label for='b4g_send_check' style='vertical-align: middle;'>Enable Boomerang for every email I send:</label> <div class='b4g_send_condition_value_settings_box' style='margin-top:5px;'><span style='margin:8px 9px 8px 18px; color:#666; position:relative; bottom: 3px;'>Remind me</span><span class='' style='height: 20px; top: 3px; margin: 0 0 6px 10px; padding: 1px 0px;'><select name='ifResponseSettingNum' id='b4g_send_check_num' class='b4g-enabled-pref pref pref-select' style=''><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option><option value='6'>6</option><option value='7'>7</option><option value='8'>8</option><option value='9'>9</option><option value='10'>10</option><option value='11'>11</option><option value='12'>12</option><option value='13'>13</option><option value='14'>14</option><option value='15'>15</option><option value='16'>16</option><option value='17'>17</option><option value='18'>18</option><option value='19'>19</option><option value='20'>20</option><option value='21'>21</option><option value='22'>22</option><option value='23'>23</option><option value='24'>24</option><option value='25'>25</option><option value='26'>26</option><option value='27'>27</option><option value='28'>28</option><option value='29'>29</option><option value='30'>30</option><option value='31'>31</option></select></span><span class='' style='height: 20px; top: 3px; margin: 0 0 6px 4px; padding: 1px 0px;'><select name='ifResponseSettingUnit' id='b4g_send_check_unit' class='b4g-enabled-pref pref pref-select' style=''><option value='hours'>hours</option><option value='days'>days</option><option value='weeks'>weeks</option><option value='months'>months</option></select></span><span style='margin:8px 7px 8px 8px; color:#777;'>after sending</span><span class='' style='height: 20px; top: 3px; margin: 0 0 6px 4px; padding: 1px 0px;'><select name='ifResponseSettingCond' id='b4g_send_check_cond' class='b4g-enabled-pref pref pref-select' style=''><option value='no reply'>if no reply</option><option value='no open'>if not opened</option><option value='always'>regardless</option></select></span></div></div><div class='b4g_premium-text-disabled' style='color: #999;margin-top:10px;'><input type='checkbox' id='b4g_crm_enabled' class='pref' style='vertical-align: middle;'> <label style='vertical-align: middle;' for='b4g_crm_enabled'>Enable CRM Integration</label><br/><div class='b4g_crm_hide_if_disabled' style='display:none;'><div style='clear:both; margin-top:10px; color:#777;'><span style='margin:3px 0px 12px 18px; width:120px; float:left; color:#777;' >Select CRM</span> <select id='b4g_crm_select' class='pref' style='float:left;'><option value='salesforce'>Salesforce</option><option value='highrise'>Highrise</option><option value='insightly'>Insightly</option><option value='capsule'>Capsule</option><option value='sugar'>Sugar</option><option value='pipedrive'>Pipedrive</option><option value='zoho'>Zoho</option><option value='other'>Other</option></select></div><div style='clear:both; color:#777;'><span style='margin:3px 0px 12px 18px; width:120px; float:left; color:#777;' >Bcc Address <img src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/questionmark.png' class='b4g_settings_bccaddress_question' style='margin-right: 5px; cursor:pointer; width:14px; height:14px; vertical-align:middle;'></span> <input id='b4g_bccAddress' class='' placeholder='example@salesforce.com' type='text' style='float:left;width:250px; margin-left:0px; padding-left:4px;'><span id='b4g_bccAddressDisplay' style='margin:3px 0px 12px 2px; float:left;'></span><span id='b4g_edit_link' style='margin:3px 0px 12px 15px; float:left; color: #333; text-decoration: underline; cursor: pointer;'>Edit</span><span id='b4g_save_link' style='margin:3px 0px 12px 15px; float:left; color: #333; text-decoration: underline; cursor: pointer;'>Save</span></div><div style='clear:both; color:#777;'><span style='margin:0px 2px 0px 18px; width:120px; float:left; color:#777;' >Include with</span> <input style='margin-left: 0px; margin-right: 2px; vertical-align:middle;' class='pref b4g_crm_include_with' type='radio' id='b4g_crm_include_with_every' name='b4g_crm_include_with' value='every'/><label for='b4g_crm_include_with_every'>every email I send</label></div><div style='clear:both; margin-top: 5px; color:#777;'><span style='margin:3px 2px 0px 18px; width:120px; float:left;' ></span> <input style='margin-left: 0px; margin-right: 2px; vertical-align:middle;' class='pref b4g_crm_include_with' type='radio' id='b4g_crm_include_with_boomerang' name='b4g_crm_include_with' value='boomerang' /><label for='b4g_crm_include_with_boomerang'>only emails I Boomerang when sending</label></div></div></div></div></div></div></div>";
    a("body", b).append(a(d));
    af();
    3 === q() ? (d = a(".dialogdiv", b).dialog({
      modal: !0,
      closeOnEscape: !0,
      width: 500,
      buttons: {
        Ok: {
          text: "OK",
          "class": "b4g-button b4g-settings-accept-btn-new-ui",
          click: function() {
            td(a(this)) && a(this).dialog("destroy")
          }
        },
        Cancel: {
          text: "Cancel",
          "class": "b4g-button b4g-settings-cancel-btn-new-ui",
          click: function() {
            a(this).dialog("destroy")
          }
        }
      }
    }), d.parent().children().first().remove(), d.parent().removeClass("b4g-ui-widget-content")) : a(".dialogdiv", b).dialog({
      modal: !0,
      closeOnEscape: !0,
      width: 500,
      title: "Boomerang Settings",
      buttons: {
        Ok: {
          text: "OK",
          style: "padding: 5px 20px;",
          "class": "b4g-button by-button by-button-secondary",
          click: function() {
            td(a(this)) && a(this).dialog("destroy")
          }
        },
        Cancel: {
          text: "Cancel",
          style: "padding: 5px 20px;",
          "class": "b4g-button dialog-gray by-button",
          click: function() {
            a(this).dialog("destroy")
          }
        }
      }
    });
    Xa();
    a(".dialogdiv .b4g_settings_dialog").hide();
    a(".dialogdiv .b4g_settings_shortcuts_question").click(function(b) {
      a(this).next("ul").toggle();
      n(["keyboard-shortcuts-explanation",
        "toggle"
      ])
    });
    a(".dialogdiv .b4g_settings_respondable_question").click(function(b) {
      a(this).next("div").toggle();
      n(["respondable-explanation", "toggle"])
    });
    a(".dialogdiv .b4g_settings_inbox_pause_question").click(function(b) {
      a(this).next("div").toggle();
      n(["inbox-pause-settings-explanation", "toggle"])
    });
    a.ajax({
      method: "get",
      url: "https://b4g.baydin.com/getpreferences/",
      xhr: function() {
        var b = a.ajaxSettings.xhr();
        b.withCredentials = !0;
        return b
      },
      success: function(c) {
        if (c) {
          var d = c.unread ? "checked" : "",
            f = c.starred ?
            "checked" : "",
            g = c.topInbox ? "checked" : "",
            l = c.labelled ? "checked" : "",
            k = c.onSendSetting ? "checked" : "",
            h = null == c.onSendOffset ? "1_weeks" : c.onSendOffset,
            r = null == c.onSendCond ? "reply" : c.onSendCond,
            p = c.readReceipts ? "checked" : "",
            t = "premium" === c.plan ? !0 : !1,
            w = "pro" === c.plan ? !0 : !1;
          a("#unread", b).attr("checked", d);
          a("#starred", b).attr("checked", f);
          a("#topinbox", b).attr("checked", g);
          a("#labelled", b).attr("checked", l);
          a("#keyboard-shortcuts", b).attr("checked", va.is_enabled());
          a("#inbox-pause-enabled", b).attr("checked",
            !bc());
          a("#b4g_enable_respondable", b).attr("checked", Ma().enabled);
          dc() && !bc() && (a("#inbox-pause-enabled").attr("disabled", "disabled"), a("#inbox-pause-label").css({
            color: "#999"
          }), a("#inbox-pause-tooltip").prepend("<div style='position: absolute; margin: 4px 0; height: 13px; width: 13px;'></div>"), a("#inbox-pause-tooltip").append("<div class='T-ays-a45'><div style='text-align: left;'>Your Inbox is currently paused. Please unpause&#10;before disabling the Inbox Pause feature.</div></div>"), a("#inbox-pause-tooltip").attr("data-tooltip-contained",
            "true"));
          n(["Settings Dialog", "successful launch"]);
          w || t ? (a(".b4g_settings_respondable_upgrade_link", b).hide(), a(".b4g_respondable_text_disabled", b).removeClass(".b4g_premium-text-disabled"), a(".b4g_respondable_text_disabled", b).css("color", "#333"), a("#b4g_enable_premium_respondable", b).attr("checked", Ma().machineLearningEnabled), 3 === q() && a(".b4g-settings-disabled-if-not-pro-new-ui").addClass("b4g-settings-visible-new-ui")) : a("#b4g_enable_premium_respondable").attr("disabled", "disabled");
          if (t) {
            if (3 ===
              q()) {
              var C = a(".b4g-settings-disabled-if-not-premium-new-ui");
              C.each(function(b) {
                a(C[b]).addClass("b4g-settings-visible-new-ui")
              })
            }
            a(".b4g_settings_premium_link", b).hide();
            a(".b4g_premium-text-disabled", b).removeClass(".b4g_premium-text-disabled").css("color", "#333");
            a(".b4g_send_condition_settings_box", b).show();
            a("#b4g_send_check", b).attr("checked", k);
            a("[name=ifResponseSettingCond]", b).val(r);
            a("#b4g_read_receipt_check", b).attr("checked", p);
            d = h.split("_");
            a("[name=ifResponseSettingNum]", b).val(d[0]);
            a("[name=ifResponseSettingUnit]", b).val(d[1]);
            "checked" !== k && (a(".pref-select", b).attr("disabled", "disabled").removeClass("b4g-enabled-pref").addClass("b4g-disabled-pref"), a(".b4g_send_condition_value_settings_box", b).addClass("b4g-disabled-send-condition"));
            a("#b4g_crm_enabled").click(function() {
              a(this).is(":checked") ? a(".b4g_crm_hide_if_disabled").show() : a(".b4g_crm_hide_if_disabled").hide()
            });
            c.crm.active && (a("#b4g_crm_enabled").attr("checked", !0), a(".b4g_crm_hide_if_disabled").show());
            k = c.crm.bccAddress;
            a("#b4g_bccAddress").val(k);
            a("#b4g_bccAddressDisplay").text(k);
            d = c.crm.crm;
            a("#b4g_crm_select").val(d);
            a(".b4g_crm_include_with[value=" + c.crm.bccIncludeWith + "]").attr("checked", !0);
            var O = function() {
              a("#b4g_bccAddress").show().select();
              a("#b4g_bccAddressDisplay").hide();
              a("#b4g_edit_link").hide();
              a("#b4g_save_link").show()
            };
            c = function() {
              a("#b4g_bccAddress").hide();
              a("#b4g_bccAddressDisplay").show();
              a("#b4g_edit_link").show();
              a("#b4g_save_link").hide();
              var b = a("#b4g_bccAddress").val();
              if (I(b)) return a("#b4g_bccAddressDisplay").text(b),
                !0;
              O();
              console.log(b);
              alert("Please enter a valid email address.");
              return !1
            };
            0 < a.trim(k).length ? c() : O();
            a("#b4g_edit_link").click(O);
            a("#b4g_save_link").click(c);
            c = function() {
              var b = a("#b4g_crm_select").val(),
                c = a("#b4g_bccAddress");
              switch (b) {
                case "salesforce":
                  c.attr("placeholder", "example@salesforce.com");
                  break;
                case "highrise":
                  c.attr("placeholder", "dropbox@12345678.highrisehq.com");
                  break;
                case "insightly":
                  c.attr("placeholder", "example@mailbox.insight.ly");
                  break;
                case "capsule":
                  c.attr("placeholder", "dropbox@12345678.example.capsulecrm.com");
                  break;
                case "sugar":
                  c.attr("placeholder", "example@sugarondemand.com");
                  break;
                case "pipedrive":
                  c.attr("placeholder", "12345@dropbox.pipedrive.com");
                  break;
                case "zoho":
                  c.attr("placeholder", "example@emails.zohocrm.com");
                  break;
                default:
                  c.attr("placeholder", "example@example.com")
              }
            };
            c();
            a("#b4g_crm_select").change(c)
          } else a(".b4g_send_condition_settings_box", b).show(), a(".pref-select", b).attr("disabled", "disabled").removeClass("b4g-enabled-pref").addClass("b4g-disabled-pref"), a("#b4g_send_check", b).attr("disabled",
            "disabled"), a("#b4g_read_receipt_check", b).attr("disabled", "disabled"), a("#b4g_crm_enabled", b).attr("disabled", "disabled"), a(".b4g_send_condition_settings_box", b).addClass("b4g-disabled-send-condition");
          a(".b4g_settings_loading", b).hide();
          a(".b4g_settings_dialog", b).show();
          a("#inbox-pause-more").css({
            left: a("#inbox-pause-label").width() + 16.5 + 4 + "px"
          });
          a(".pref", b).not("#b4g_enable_premium_respondable").change(function() {
            this === a("#unread", b).get(0) && 0 == this.checked ? a("#topinbox", b).get(0).checked =
              0 : this === a("#topinbox").get(0) && 1 == this.checked && (a("#unread").get(0).checked = 1);
            a("#b4g_enable_premium_respondable", b).is(":checked") && !a("#b4g_enable_respondable", b).is(":checked") && a("#b4g_enable_premium_respondable", b).attr("checked", !1);
            t && (this === a("#b4g_send_check_cond").get(0) ? "no open" === a(this).val() && a("#b4g_read_receipt_check").attr("checked", "checked") : this === a("#b4g_read_receipt_check").get(0) && (a(this).is(":checked") || "no open" !== a("#b4g_send_check_cond").val() || a("#b4g_send_check_cond").val("always")),
              a("#b4g_send_check", b).get(0).checked ? (a(".pref-select", b).removeAttr("disabled").removeClass("b4g-disabled-pref").addClass("b4g-enabled-pref"), a(".b4g_send_condition_value_settings_box", b).removeClass("b4g-disabled-send-condition")) : (a(".pref-select", b).attr("disabled", "disabled").removeClass("b4g-enabled-pref").addClass("b4g-disabled-pref"), a(".b4g_send_condition_value_settings_box", b).addClass("b4g-disabled-send-condition")))
          });
          a("#b4g_enable_premium_respondable").change(function() {
            if (!Ob() && a(this).is(":checked")) {
              var b =
                this;
              a(b).attr("checked", !1);
              ud(function() {
                a.ajax({
                  type: "post",
                  url: "https://b4g.baydin.com/mailcruncher/respondableconsent",
                  xhr: J,
                  success: function(c) {
                    var d = c.status;
                    c = c.message;
                    "success" == d ? (Sa(), a(b).attr("checked", !0), a("#b4g_enable_respondable").attr("checked", !0)) : "error" == d && u(c)
                  }
                })
              })
            } else a("#b4g_enable_premium_respondable").is(":checked") && !a("#b4g_enable_respondable").is(":checked") && a("#b4g_enable_respondable").attr("checked", !0)
          })
        } else n(["Settings Dialog", "failed launch"]), a(".dialogdiv").remove(),
          u("<p>There seems to be an issue with your login credentials. Try visiting the <a href='https://b4g.baydin.com/settings'>manage page</a> to adjust your settings.</p>")
      },
      error: function() {
        window.open("https://b4g.baydin.com/settings", "_blank");
        a(".dialogdiv").remove();
        n(["dev-CORS", "failure", "XHR-failure"])
      },
      complete: function() {
        M.expire_cache()
      },
      dataType: "json"
    })
  }

  function td(b) {
    a("#keyboard-shortcuts", b).is(":checked") ? (va.enable(), n(["keyboard-shortcuts", "toggle", "enabled"])) : (va.disable(), n(["keyboard-shortcuts",
      "toggle", "disabled"
    ]));
    a("#inbox-pause-enabled", b).is(":checked") ? (localStorage.removeItem("ibp_hide"), n(["inbox-pause-enabled", "toggle", "enabled"])) : (A("ibp_hide", "true"), n(["inbox-pause-enabled", "toggle", "disabled"]));
    var d = 1 == a("#unread", b).get(0).checked ? "True" : "False",
      c = 1 == a("#starred", b).get(0).checked ? "True" : "False",
      e = 1 == a("#topinbox", b).get(0).checked ? "True" : "False",
      f = 1 == a("#labelled", b).get(0).checked ? "True" : "False",
      g = 1 == a("#b4g_send_check", b).get(0).checked ? "True" : "False",
      l = a("#b4g_send_check_num option:selected",
        b).val() + "_" + a("#b4g_send_check_unit", b).val(),
      k = a("#b4g_send_check_cond option:selected", b).val(),
      h = 1 == a("#b4g_read_receipt_check", b).get(0).checked ? "True" : "False",
      r = a("#b4g_crm_enabled").is(":checked") ? "True" : "False",
      p = a("#b4g_crm_select").val(),
      t = a("#b4g_bccAddress").val();
    if ("True" === r && !I(t)) return alert("Please enter a valid email address."), !1;
    var w = a(".b4g_crm_include_with:checked").val(),
      d = {
        unread: d,
        starred: c,
        topInbox: e,
        labelled: f,
        onSendSetting: g,
        onSendOffset: l,
        onSendCond: k,
        readReceipts: h,
        crmActive: r,
        crmSelect: p,
        crmBcc: t,
        crmInclude: w
      };
    a("#b4g_enable_respondable", b).is(":checked") ? d.respondableEnabled = "True" : d.respondableEnabled = "False";
    a("#b4g_enable_premium_respondable", b).is(":checked") ? d.machineLearningEnabled = "True" : d.machineLearningEnabled = "False";
    a.ajax({
      type: "post",
      url: "https://b4g.baydin.com/changepreferences",
      xhr: function() {
        var b = a.ajaxSettings.xhr();
        b.withCredentials = !0;
        return b
      },
      data: d,
      success: function(a) {
        Sa(vd);
        n(["Settings Dialog", "settings changed successfully"])
      },
      error: function(a) {
        n(["dev-CORS",
          "failure", "XHR-failure"
        ])
      }
    });
    return !0
  }

  function Sa(b) {
    b || (b = a.noop);
    localStorage.removeItem("b4g_respondable-" + y());
    Q(b)
  }

  function Ud(b) {
    var d = a("<div id='b4g-inline-troubleshoot'><h4>Inline manage:</h4><ul><li>Is enabled: <b class='b4g-inline-enabled'></b></li><li>Local data last updated: <br><b class='b4g-inline-lastupdated'></b></li><li>Number inline-manage threads: <b class='b4g-inline-threadscount'></b></li><li>Is server data accessible: <b class='b4g-inline-serverdata'></b></li></ul></div>");
    b.css("height", "auto").find("#b4g-inline-troubleshoot-holder").append(d);
    var c = function(b, c, g) {
      a(b, d).text(c).css("color", g)
    };
    M.troubleshoot({
      local: function(a, b) {
        var d = M.is_enabled();
        c(".b4g-inline-enabled", d ? "Yes" : "No", d ? "green" : "red");
        var d = new Date(b["last-updated"]),
          l = Object.keys(b["thread-ids"]).length;
        c(".b4g-inline-lastupdated", d + "", "blue");
        c(".b4g-inline-threadscount", l, "blue")
      },
      server: function(a) {
        a ? c(".b4g-inline-serverdata", a, "red") : c(".b4g-inline-serverdata", "Yes", "green")
      }
    });
    c(".b4g-inline-enabled",
      "Loading...", "blue");
    c(".b4g-inline-lastupdated", "Loading...", "blue");
    c(".b4g-inline-threadscount", "Loading...", "blue");
    c(".b4g-inline-serverdata", "Loading...", "blue")
  }

  function af() {
    a(".b4g_settings_bccaddress_question").click(function() {
      var b = a("#b4g_crm_select").val(),
        d = "<p style='margin-left:20px;'>Enter the email address that your CRM provides.</p>",
        c = "Other";
      switch (b) {
        case "salesforce":
          c = "How to Find the Bcc Address for Salesforce";
          d = "<p><strong>How to activate:</strong></p><ol>   <li>Find where it says 'Setup' in the upper right corner and select this option.</li>   <li>In the left menu bar, select 'Email Administration'. </li>   <li>Select the 'Email to Salesforce' tab.</li>   <li>Edit the settings and select the box to activate this feature.</li></ol><p><strong>How to find your Bcc address:</strong></p> <ol>   <li>Find your user name at the upper right corner and select the drop down bar.</li>   <li>Select 'My Settings'.</li>   <li>Select the Email tab under 'My Settings'</li>   <li>Select the 'My Email to Salesforce Tab' (this does not exist until you activate the feature).</li>   <li>You will see your email to salesforce address highlighted.</li></ol>";
          break;
        case "highrise":
          c = "How to Find the Bcc Address for Highrise";
          d = "<ol>   <li>Log into your Highrise account.</li>   <li>Find 'Account and Settings' and select the drop down bar.</li>   <li>Select 'My Info' from the drop down list.</li>   <li>You will see your BCC email address displayed under '<strong>Your Personal Email Dropbox</strong>'.</li></ol>";
          break;
        case "insightly":
          c = "How to Find the Bcc Address for Insightly";
          d = "<ol>   <li>Log into your Insightly account.</li>   <li>Select 'Emails' from the menu bar on the left.</li>   <li>You will see your BCC email address displayed there.</li></ol>";
          break;
        case "capsule":
          c = "How to Find the Bcc Address for Capsule";
          d = "<ol>   <li>Log into your Capsule account.</li>   <li>Select 'User' and then 'My Preferences' in the Capsule navigation bar.</li>   <li>You will see your BCC email address under <strong>'Mail Drop Box'</strong>.</li></ol>";
          break;
        case "sugar":
          c = "How to Find the Bcc Address for Sugar";
          d = "<p><strong>To activate Sugar Email Archiving for your instance, you must be the admin or request your account admin to follow the steps below:</strong></p><ol>   <li>Log into Sugar CRM.</li>   <li>Navigate to Admin > Email Archiving.</li>   <li>Read and agree to the privacy agreement.</li>   <li>Click <strong>'Enable Email Archiving'</strong>.</li>   <li>Then you will see your BCC address in the field 'Email Archiving Address'.</li></ol>";
          break;
        case "pipedrive":
          c = "How to Find the Bcc Address for Pipedrive";
          d = "<ol>   <li>Log into Pipedrive CRM.</li>   <li>Go to your Personal Settings.</li>   <li>Select the section named 'Email drop-box'.</li>   <li>Click the radio button 'Enabled' next to Dropbox status.</li>   <li>You will find your BCC address in the 'Your dropbox address' field.</li>   <li>Enter your email address in the box below and click 'Save changes'.</li></ol>";
          break;
        case "zoho":
          c = "How to Find the Bcc Address for Zoho", d = "<p>To activate BCC Dropbox in Zoho:</p><ol>   <li>Log into your Zoho account.</li>   <li>Click <strong>Setup > Users &amp; Permissions > Profiles</strong>.</li>   <li>In the <em>Profiles</em> page, click the <strong>Edit</strong> link corresponding to the profile that you want to edit.</li>   <li>From the list of profiles, select the <strong>BCC Dropbox</strong> check box under <em>General Permissions</em>.</li>   <li>Click <strong>Save</strong>.</li></ol><p>The BCC Dropbox email address will be available in Zoho CRM under <strong>Setup > Personal Settings >BCCDropbox.</strong></p><p>Note: This feature in Zoho is only available to the users on Professional and Enterprise plans.</p>"
      }
      var e =
        d;
      "other" !== b && (e = "<div class='dialogdiv'>" + e + "<p><img style='vertical-align:middle;' src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/email.png'/><a id='emailme' style='vertical-align:middle;'>Email me these instructions</a></p></div>");
      u(e, c, void 0, {
        width: 500
      }, "crmhelp");
      a("#emailme").click(function() {
        var b = "https://b4g.baydin.com/mailcruncher/sendcrmreminder?instructions=" + encodeURIComponent(d) + "&subject=" + c;
        U(b, a.noop());
        a(this).replaceWith("<span style='vertical-align:middle;'>Instructions sent!</span>")
      })
    })
  }

  function wd(b, d, c, e) {
    b = u(b, "", d, c, e);
    d = b.parent();
    a(".b4g-ui-dialog-titlebar", d).remove();
    d.addClass("em-dialog").prepend(a("<div/>").addClass("em-close").html("&#215;"));
    return b
  }

  function ud(b, d) {
    var c = wd("<h1>Respondable Advanced Features</h1><p>These features use machine learning techniques to provide rich analysis of the messages you write. Pro and premium Boomerang users can see the effects of the following parameters on the quality of their messages.</p><h2>Positivity</h2><p>Positivity is a measurement of how positive (words like \"wonderful\") or negative (\"terrible\") the tone of your message is.</p><h2>Politeness</h2><p>Indicators of politeness include attempts to minimize or apologize for imposition and using language that reflects gratitude.</p><h2>Subjectivity</h2><p>Subjectivity is a measure of the ratio of opinions to factual statements in your message.</p><div class='em-dialog-inset'><strong>If you enable these features, Boomerang will securely send data about your messages to our servers for analysis. After the analysis is complete, your data is discarded. For more information about our data practices, please visit <a href='https://www.boomeranggmail.com/faq.html#respondable' target='_blank'>our FAQ</a>.</strong><input type='checkbox' class='' id='respondable_consent_checkbox' style='vertical-align: middle;'><label style='vertical-align: middle;' for='respondable_consent_checkbox'>I consent to send my data to Boomerang's servers for analysis.</label></div>", {
      Enable: {
        text: "Enable",
        "class": "b4g-button red",
        click: function() {
          a(this).find("#respondable_consent_checkbox").is(":checked") ? (a(this).dialog("destroy"), n(["respondable", "consent", "accepted"]), b()) : alert("Please check the checkbox before clicking Enable")
        }
      },
      Cancel: {
        text: "Cancel",
        "class": "b4g-button grey cancelConsent",
        click: function() {
          a(this).dialog("destroy");
          n(["respondable", "consent", "declined"]);
          d && d()
        }
      }
    }, {}, "respondable-consent").parent();
    Xa(".em-dialog a");
    var e = c.find(".b4g-button.red");
    e.attr("disabled",
      !0);
    a("#respondable_consent_checkbox", c).change(function() {
      e.attr("disabled", !this.checked)
    });
    c.find(".em-close").click(function() {
      c.find(".cancelConsent").click()
    })
  }

  function bf(b, d) {
    var c = wd("<p>Respondable only supports English at the present time</p><p>It looks like you're using Gmail in a different language.</p>", {
      "Turn Off": {
        text: "Turn off Respondable",
        "class": "b4g-button red",
        click: function() {
          a(this).dialog("destroy");
          b()
        }
      },
      "Try It Anyway": {
        text: "Try it anyway!",
        "class": "b4g-button grey",
        click: function() {
          a(this).dialog("destroy");
          d()
        }
      }
    }, {}, "respondable-non-english").parent();
    c.css("width", "400px");
    a(".b4g-ui-dialog-titlebar", c).remove()
  }

  function Ma() {
    var a = {
        machineLearningEnabled: !1,
        enabled: !0,
        hasConsented: !1,
        hasSeenFTUE: !1
      },
      d = R("b4g_respondable-" + y()),
      c;
    if (null == d) c = a;
    else try {
      c = JSON.parse(d)
    } catch (e) {
      console.log("Unexpected error in get_respondable_preferences"), console.log(d), c = a
    }
    return c
  }

  function Ta() {
    var a = la();
    return a && ("pro" === a || "premium" === a)
  }

  function ma() {
    return Ta() && Ma().machineLearningEnabled && Ob()
  }

  function Ob() {
    return Ma().hasConsented
  }

  function vd() {
    a(".email-meter-display").remove();
    a(".em-email-meter-gauge").remove();
    var b = a(".email-meter");
    b.removeData();
    b.removeClass("email-meter")
  }

  function xd() {
    a.ajax({
      type: "post",
      url: "https://b4g.baydin.com/changepreferences",
      data: {
        respondableEnabled: "False"
      },
      xhr: J,
      success: function(a) {
        Sa(vd)
      }
    })
  }

  function ge() {
    var a = new Date(null);
    A("ibp_sync_timeout_window_" + y(), a.toString())
  }

  function bc() {
    return "true" === R("ibp_hide")
  }

  function yd(b) {
    a(".dialogdiv").remove();
    b = a("<div class='ibp-menu'><div class='ibp-menu-header'>Inbox Pause<span class='ibp-menu-header-signature'> by Boomerang</span><span data-tooltip-contained=\"true\" data-tooltip-align=\"r,l\"><img src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/questionmark.png' class='ibp-tooltip-icon'><div class='T-ays-a45'><div class='ibp-menu-tooltip'>While you have your Inbox paused, all\nyour new messages will be rerouted to\na special label. You won't see them\nuntil you unpause. We will move all of\nthose messages back into your Inbox\nwhen you unpause.</div></div></span></div><div class='ibp-menu-divider'></div><div class='ibp-menu-main'><p>Your Inbox has been paused from another computer.</p><p>" +
      b + "</p></div><div class='ibp-menu-divider'></div><div class='ibp-menu-footer'><div class='ibp-menu-footer-button-group'><button class='ibp-submit-pause ibp-keep-paused ibp-menu-button'>Keep my Inbox paused</button> <button class='ibp-unpause-now by-button ibp-menu-button'>Unpause</button></div></div></div>");
    var d = a("<div class='ibp-overlay' style='background: #666666; opacity: 0.50; filter:alpha(opacity=50);position:absolute; left:0px; top:0px; width:100%; height:100%; z-index:1000;'></div>");
    a("body").append(d);
    a("body").append(b);
    a(".ibp-submit-pause").click(function() {
      n(["already paused dialog", "keep paused"]);
      mb(!0);
      Pb();
      ab()
    });
    a(".ibp-unpause-now").click(function() {
      n(["already paused dialog", "unpause now"]);
      ab();
      Qb()
    })
  }

  function cc() {
    if (3 === q()) {
      var b = 0,
        b = a(".nH.oy8Mbf.nn"),
        d = b.find("#ibp-main"),
        b = !b.hasClass("bhZ") || b.hasClass("bhZ") && b.hasClass("bym") ? zd : Ad;
      b === zd ? (d.removeClass("ibp-new-ui-panel-expanded"), a(".ibp-ftue-tooltip").show()) : b === Ad && (d.addClass("ibp-new-ui-panel-expanded"), 14 > d.find(".ibp-main-button-logo-new-ui").width() &&
        (d.addClass("ibp-main-new-ui-temp-width-toggle"), setTimeout(function() {
          d.removeClass("ibp-main-new-ui-temp-width-toggle")
        })), a(".ibp-ftue-tooltip").hide())
    }
  }

  function bb(b) {
    var d = y();
    a.ajax({
      url: "https://b4g.baydin.com/inboxpause/checkpaused",
      data: {
        guser: d
      },
      type: "GET",
      xhr: J,
      success: function(a) {
        a = JSON.parse(a);
        if (a.hasSeenInboxPauseFTUE)
          if (a.enabled)
            if (a.isPaused) {
              var d = "";
              a.nextUnpauseTimeString && (d = a.nextUnpauseTimeString);
              n(["inbox pause main button clicked", "already paused dialog opened"]);
              yd(d)
            } else n(["inbox pause main button clicked",
              "pause dialog opened"
            ]), cf(a.stickySettings);
        else n(["inbox pause main button clicked", "user settings auth screen shown"]), df(b);
        else ef(), A("hasSeenIBPTutorialTooltip", "yes")
      },
      complete: function() {
        ta()
      }
    })
  }

  function cf(b) {
    function d(a) {
      $ibpMenu = Ga();
      $ibpMenu.find(".ibp-unpause-automatically-time").data("automaticUnpauseOption", a)
    }

    function c(b, c) {
      if (document.getElementById("b4g_menu")) X(b, c);
      else {
        var e, f;
        3 === q() ? (e = "J-M J-M-ayU aka", f = "min-width: 245px;") : f = e = "";
        e = '<ul id="b4g_menu" tabindex="0" class="b4g_menu" style="padding:0px;background:#fff;position:absolute; bottom: 10px; left: 128px;" role="menu" aria-haspopup="true" aria-activedescendant=""><div id="b4g_inner_menu" class="b4g_menu SK AX ' +
          e + '" style="' + f + '-webkit-user-select: none; font-size:12px;padding:10px 0px 0px 0px;"><li class="b4g-standard-times"></li><li class="menu-caption" style="padding:7px 11px 4px 11px;">At a specific time:</li><li class="b4g-menu-option" style="padding: 0 0 7px 11px;"><div style="color: #666; font-style: italic; font-size: 10px; margin-top: 3px;" class="b4g_menu">Examples: "Monday 9am", "Dec 23"</div><form autocomplete="off"><div style="padding-top:3px; vertical-align: middle;" class="b4g_menu"><input style="margin-left:1px;padding:3px 22px 2px 2px;" class="b4g_menu" type="text" name="time" id="datepicker"><input id="specific-time-submit" type="submit" value="Confirm" style="margin: 0px 7px 5px 9px;font-size:11px;vertical-align:top;" class="b4g_menu by-button by-button-secondary"></div><div style="color:#969696; margin-left: 1px;"><span id="date-preview" class="b4g_menu" style="color:green;"></span></div></form></li></div></ul>';
        a(c).parent().append(e);
        var g = Ga();
        e = a("#b4g_menu", g);
        f = e.find("form").first();
        ib(f);
        va.enable_menu_arrow_keys(e);
        Eb(a(".b4g-standard-times", g));
        e = Wc("Monday morning", !1);
        a(".b4g-menu-option:contains(Tomorrow morning)", g).before(e);
        a(".b4g-menu-option:contains(2 weeks)", g).nextAll().each(function() {
          a(this).remove()
        });
        a(".b4g_menu_item", g).each(function() {
          a(this).text(function() {
            return a(this).text().replace("In", "After")
          })
        });
        Cb(g);
        a(".b4g_menu_item", g).click(function() {
          var b = a(this).text();
          d(b);
          a(".b4g-ui-datepicker",
            g).css("display", "none");
          a(".b4g_menu", g).remove();
          a(".ibp-unpause-automatically-time-text", g).text(String(b));
          var c = a(".ibp-unpause-automatically-checkbox", g);
          c.is(":checked") || n(["inbox pause dialog", "automatic unpause enabled"]);
          c.attr("checked", "checked");
          n(["inbox pause dialog", "automatic unpause time selected", b])
        });
        La(a(".b4g_menu_item", g), 6);
        Z = null == T || T < new Date ? Date.today().addDays(2).addHours(8) : T;
        e = Z.toString("M/d/yyyy h:mm tt");
        f = a("#datepicker", g);
        f.val(e);
        f.keyup(function() {
          var b = a(this).val();
          za(b)
        });
        f.focus(function() {
          var b = a(this).val();
          za(b)
        });
        a("input#specific-time-submit", g).click(function(b) {
          b = Date.parse(Z);
          if (null == b) u("Unable to read specified time. Please try again.");
          else if (b < new Date) u("The time you entered is in the past. We can only unpause your Inbox in the future.");
          else {
            var c = xa(b, 6);
            T = c;
            a(".ibp-unpause-automatically-time", g).data("unpauseDate", c);
            a(".b4g-ui-datepicker", g).css("display", "none");
            a(".b4g_menu", g).remove();
            a(".ibp-unpause-automatically-time-text", g).html("<span class='by-text'>on </span>" +
              b.toString("ddd MMM d yyyy h:mm tt"));
            b = a(".ibp-unpause-automatically-checkbox");
            b.is(":checked") || n(["inbox pause dialog", "automatic unpause enabled"]);
            b.attr("checked", "checked");
            d("");
            n(["inbox pause dialog", "automatic unpause time selected", "manual"])
          }
        });
        a(document).bind("click", {
          owner: c
        }, hb);
        $a(f);
        a(".b4g-ui-datepicker-trigger", g).css("cursor", "pointer");
        a(".b4g-ui-datepicker-trigger", g).css("margin-left", "-21px");
        a(".b4g-ui-datepicker-trigger", g).css("margin-top", "-2px");
        a(".b4g-ui-datepicker-trigger",
          g).hover(function() {
          a(this).css("box-shadow", "0px 0px 3px #aaa")
        }, function() {
          a(this).css("box-shadow", "none")
        });
        f.mousedown(function(a) {
          a.stopImmediatePropagation()
        });
        f.css("-moz-user-select", "text");
        f.parents().each(function() {
          a(this).css("-moz-user-select", "text")
        });
        f.focus();
        f.select();
        a("span#date-preview.b4g_menu", g).text("")
      }
    }

    function e() {
      var b = Ga(),
        c = y(),
        d = b.find(".ibp-autoresponder-checkbox").is(":checked"),
        e = b.find(".ibp-hide-label-checkbox").is(":checked"),
        f = b.find(".ibp-autoresponder-subject").val(),
        g = b.find(".ibp-autoresponder-body").html(),
        k = b.find(".ibp-viral-hook").first().is(":visible"),
        h = b.find(".ibp-periodic-unpause-checkbox").is(":checked"),
        l = b.find(".ibp-delivery-exceptions-checkbox").is(":checked"),
        p = b.find("#ibp-delivery-exceptions-addresses").val(),
        r = b.find("#ibp-delivery-exceptions-to-addresses").val(),
        t = b.find("#ibp-delivery-exceptions-domains").val(),
        n = b.find("#ibp-delivery-exceptions-words").val(),
        m = b.find(".ibp-unpause-automatically-checkbox").is(":checked") ? b.find(".ibp-unpause-automatically-time").data().unpauseDate.valueOf() :
        "None",
        q;
      $ibpMenu = Ga();
      q = $ibpMenu.find(".ibp-unpause-automatically-time").data("automaticUnpauseOption");
      f = encodeURIComponent(f);
      g = encodeURIComponent(g);
      p = encodeURIComponent(p);
      r = encodeURIComponent(r);
      t = encodeURIComponent(t);
      n = encodeURIComponent(n);
      a.ajax({
        url: "https://b4g.baydin.com/inboxpause/createpauseweb",
        data: {
          guser: c,
          timezone: jstz.determine().name(),
          autoresponse: d,
          hidelabel: e,
          subject: f,
          body: g,
          addViralHook: k,
          periodicUnpauseEnabled: h,
          deliveryExceptionEnabled: l,
          deliveryExceptionAddresses: p,
          deliveryExceptionToAddresses: r,
          deliveryExceptionDomains: t,
          deliveryExceptionWords: n,
          automaticUnpauseTime: m,
          automaticUnpauseOption: q
        },
        type: "POST",
        dataType: "json",
        xhr: J,
        success: function(b) {
          if ("error" === b.status) Na(b);
          else {
            if (a("#ibp_hide_label").is(":checked")) {
              var c = y();
              A("inbox_pause_hide_label_" + c, "checked='yes'")
            } else A("inbox_pause_hide_label_" + c, "");
            mb(!0);
            Kc();
            a(".ibp-periodic-unpause-checkbox").is(":checked") ? ff() : (Pb(), ab())
          }
        },
        error: function(a) {
          Na({
            errorCode: a.status
          })
        },
        complete: function() {
          b.find(".ibp-submit-pause-text").text("Pause");
          var a = b.find(".ibp-submit-pause");
          a.removeAttr("disabled");
          a.removeClass("ibp-main-button-show-spinner-hide-logo")
        }
      })
    }

    function f(a, b, c, d) {
      a.is(":checked") ? b.slideDown() : b.slideUp();
      a.bind("change", function() {
        a.is(":checked") ? (b.slideDown(), n(c)) : (b.slideUp(), n(d))
      })
    }

    function g(b) {
      var c = [];
      a(".ibp-periodic-unpause-time").each(function() {
        var b = a(this).children().first().val() + " " + a(this).children().find(":selected").val();
        (b = Date.parse(b)) && c.push(b)
      });
      var d;
      do {
        validPeriodicTime = !0;
        d = b ? b : Math.floor(24 *
          Math.random());
        var e = 5 * Math.floor(12 * Math.random());
        d = Date.today().addHours(d).addMinutes(e);
        for (e = 0; e < c.length; e++) {
          var f = c[e];
          f.isBefore(d.clone().addMinutes(15)) && f.isAfter(d.clone().addMinutes(-15)) && (validPeriodicTime = !1)
        }
      } while (!validPeriodicTime);
      return d
    }

    function l(b) {
      var c = a(".ibp-periodic-unpause-time").length;
      if (10 > c) {
        var d = a(".ibp-periodic-unpause-add"),
          e = a("<li class='ibp-periodic-unpause-time'><input type='text'><div class='VP5otc-d2fWKd tk3N6e-I-J3 J-J5-Ji ibp-periodic-unpause-am-pm-select-container'><select class='G-asx ibp-periodic-unpause-am-pm-select'><option value='AM'>AM</option><option value='PM'>PM</option></select></div><span class='ibp-remove-periodic-button'><img src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/removesignature.png' class='ibp-remove-periodic-button-image'></span></li>");
        d.before(e);
        if (b) {
          var f = b.toString("h:mm");
          b = b.toString("tt");
          e.find("input").val(f);
          e.find('option[value="' + b + '"]').attr("selected", "selected")
        } else e.find("input").focus();
        e.find(".ibp-remove-periodic-button").click(function(a) {
          e.remove();
          d.is(":hidden") && 10 > c && d.show();
          a.stopPropagation()
        })
      }
    }

    function k() {
      var b = [],
        c = !0;
      a(".ibp-periodic-unpause-time").each(function() {
        var d = a(this).children().first().val() + " " + a(this).children().find(":selected").val();
        if (!extractTime(d)) return c = !1;
        d = Date.parse(d);
        b.push(d)
      });
      if (!c) return !1;
      b.sort();
      if (0 == b.length) return !1;
      for (var d = 0; d < b.length - 1; d++) {
        var e = b[d].clone(),
          f = b[d + 1].clone();
        e.addMinutes(15);
        if (e.isAfter(f)) return !1
      }
      d = b[b.length - 1].clone();
      e = b[0].clone().addDays(1);
      d.addMinutes(15);
      return d.isAfter(e) ? !1 : !0
    }
    a("#ibp-main");
    var h = 3 === q() ? gf() : hf(),
      r = a("<div class='ibp-overlay' style='background: #666666; opacity: 0.50; filter:alpha(opacity=50);position:absolute; left:0px; top:0px; width:100%; height:100%; z-index:1000;'></div>");
    a("body").append(r);
    a("body").append(h);
    (function(b) {
      var c = Ga();
      b.hideLabel && c.find(".ibp-hide-label-checkbox").attr("checked", "checked");
      b.autoresponderEnabled && c.find(".ibp-autoresponder-checkbox").attr("checked", "checked");
      0 < b.autoresponderSubject.length && c.find(".ibp-autoresponder-subject").val(b.autoresponderSubject);
      0 < b.autoresponderBody.length && (c.find(".ibp-autoresponder-body")[0].innerHTML = b.autoresponderBody);
      0 < b.deliveryExceptionAddresses.length && c.find("#ibp-delivery-exceptions-addresses").val(b.deliveryExceptionAddresses);
      0 < b.deliveryExceptionToAddresses.length && c.find("#ibp-delivery-exceptions-to-addresses").val(b.deliveryExceptionToAddresses);
      0 < b.deliveryExceptionDomains.length && c.find("#ibp-delivery-exceptions-domains").val(b.deliveryExceptionDomains);
      0 < b.deliveryExceptionWords.length && c.find("#ibp-delivery-exceptions-words").val(b.deliveryExceptionWords);
      b.weekdaysOnly && c.find(".ibp-periodic-weekdays-only").attr("checked", "checked");
      b.automaticUnpauseEnabled && c.find(".ibp-unpause-automatically-checkbox").attr("checked",
        "checked");
      if (b.automaticUnpauseOption && 0 < b.automaticUnpauseOption.length) c.find(".ibp-unpause-automatically-time-text").text(b.automaticUnpauseOption), c.find(".ibp-unpause-automatically-time").data("automaticUnpauseOption", b.automaticUnpauseOption);
      else {
        var e = c.find(".ibp-unpause-automatically-time-text").text();
        d(e)
      }
      e = JSON.parse(b.periodicUnpauseTimes);
      0 < e.length ? a.each(e.sort(), function(a, b) {
        l(new Date(b))
      }) : (l(g(8)), l(g(13)), l(g(16)));
      lc(function() {
        b.deliveryExceptionEnabled && c.find(".ibp-delivery-exceptions-checkbox").attr("checked",
          "checked");
        b.periodicUnpauseEnabled && c.find(".ibp-periodic-unpause-checkbox").attr("checked", "checked")
      }, function() {})
    })(b);
    f(a(".ibp-autoresponder-checkbox"), a(".ibp-autoresponder-input"), ["inbox pause dialog", "autoresponder enabled"], ["inbox pause dialog", "autoresponder disabled"]);
    f(a(".ibp-periodic-unpause-checkbox"), a(".ibp-periodic-unpause-input"), ["inbox pause dialog", "periodic unpause enabled"], ["inbox pause dialog", "periodic unpause disabled"]);
    f(a(".ibp-delivery-exceptions-checkbox"), a(".ibp-delivery-exceptions-input"),
      ["inbox pause dialog", "delivery exceptions enabled"], ["inbox pause dialog", "delivery exceptions disabled"]);
    (function() {
      a(".ibp-periodic-unpause-add").click(function() {
        l();
        10 <= a(".ibp-periodic-unpause-time").length && a(this).hide()
      })
    })();
    var p = h.find("#ibp-unpause-automatically-checkbox");
    p.bind("change", function() {
      p.is(":checked") ? n(["inbox pause dialog", "automatic unpause enabled"]) : n(["inbox pause dialog", "automatic unpause disabled"])
    });
    var t = h.find("#ibp-hide-label-checkbox");
    t.bind("change",
      function() {
        t.is(":checked") ? n(["inbox pause dialog", "hide label enabled"]) : n(["inbox pause dialog", "hide label disabled"])
      });
    a(".ibp-menu-cancel").click(function() {
      n(["inbox pause dialog", "cancel button clicked"]);
      ab()
    });
    a(".ibp-submit-pause").click(function() {
      a(this).attr("disabled", "disabled");
      if (a(".ibp-unpause-automatically-checkbox").is(":checked")) {
        var b = a(".ibp-unpause-automatically-time-text").text(),
          b = xa(b, 6);
        a(".ibp-unpause-automatically-time").data("unpauseDate", b)
      }
      a(".ibp-periodic-unpause-checkbox").is(":checked") &&
        !k() ? (u("Please choose valid times that are more than 15 minutes apart."), a(this).removeAttr("disabled"), n(["inbox pause dialog", "pause button clicked", "invalid periodic unpauses"])) : (a(this).find(".ibp-submit-pause-text").text(""), a(this).addClass("ibp-main-button-show-spinner-hide-logo"), n(["inbox pause dialog", "pause button clicked", "pause created"]), e())
    });
    a(".ibp-auto-unpause-picker").click(function(a) {
      c(a, this)
    });
    Hb(kc, function() {
      function c() {
        var b = a(".ibp-autoresponder-body-container").first(),
          d = b.find(".ibp-viral-hook").first(),
          e = b.find(".ibp-autoresponder-body").first();
        d.hide();
        e.height(b.height())
      }
      if (b.addViralHook) {
        var d = a(".ibp-viral-hook-close-button").first();
        d.click(c);
        d.find(".ibp-viral-hook-close-button-image").first().addClass("ibp-can-remove-hook")
      } else c()
    }, function() {
      var b = a(".ibp-viral-hook-close-button").first();
      b.click(function() {
        var c = a('<div class="T-ays ibp-viral-hook-tooltip-element" role="tooltip"><div class="T-ays-W095bf"><div class="ibp-menu-tooltip ibp-viral-hook-close-tooltip">Please <a href=\'http://www.boomeranggmail.com/subscriptions.html?utm_source=ip-paywall&utm_medium=signature-removal\'>upgrade to any paid plan</a> to\nremove this signature.</div></div><div class="T-ays-hFsbo T-ays-atG ibp-viral-hook-tooltip-arrow"><div class="T-ays-atD"></div><div class="T-ays-atC"></div></div></div>');
        b.after(c);
        var d = Ga(),
          e = a(".ibp-viral-hook-close-button-image").first(),
          f = a(".ibp-viral-hook-tooltip-arrow").first().find(".T-ays-atC").first(),
          f = e.offset().top - d.offset().top + f.outerHeight() / 2 + e.outerHeight() / 2;
        c.css("top", f);
        d = e.offset().left - d.offset().left;
        c.css("left", d);
        e = c.outerWidth() / 2 - e.outerWidth() / 2;
        c.css("transform", "translateX(-" + e + "px)");
        a(document).click(function Nd(b) {
          b = Wa(b);
          0 === a(b).parents().andSelf().filter(".ibp-viral-hook-tooltip-element, .ibp-viral-hook-close-button").length &&
            (c.remove(), a(document).unbind("click", Nd))
        })
      })
    });
    lc(a.noop, function() {
      var b = Ga(),
        c = a("<div class='ibp-paywall-link-container'><a href='http://www.boomeranggmail.com/subscriptions.html?utm_source=ip-paywall&utm_medium=delivery-exceptions' class='ibp-paywall-link'>Upgrade to the Pro or Premium plan to enable this feature.</a></div>"),
        d = b.find(".ibp-menu-item-delivery-exceptions-body").first();
      d.append(c);
      var e = a("<div class='ibp-paywall-link-container'><a href='http://www.boomeranggmail.com/subscriptions.html?utm_source=ip-paywall&utm_medium=periodic-unpause' class='ibp-paywall-link'>Upgrade to the Pro or Premium plan to enable this feature.</a></div>"),
        c = b.find(".ibp-periodic-unpause-body").first();
      c.append(e);
      d = d.parent().find(".b4g-toggle-slider").first();
      c = c.parent().find(".b4g-toggle-slider").first();
      d.add(c).addClass("b4g-toggle-slider-disabled");
      d = b.find(".ibp-delivery-exceptions-checkbox").first();
      b = b.find(".ibp-periodic-unpause-checkbox").first();
      d.add(b).attr("disabled", "disabled")
    })
  }

  function hf() {
    var b = y().split("@");
    return a("<div class='ibp-menu'><div class='ibp-menu-header'>Inbox Pause<span class='ibp-menu-header-signature'> by Boomerang</span><span data-tooltip-contained=\"true\" data-tooltip-align=\"r,l\"><img src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/questionmark.png' class='ibp-tooltip-icon'><div class='T-ays-a45'><div class='ibp-menu-tooltip'>While you have your Inbox paused, all\nyour new messages will be rerouted to\na special label. You won't see them\nuntil you unpause. We will move all of\nthose messages back into your Inbox\nwhen you unpause.</div></div></span></div><div class='ibp-menu-divider'></div><div class='ibp-menu-main'><div class='ibp-menu-main-left'><div class='ibp-menu-item'><label class='b4g-toggle-switch'><input type='checkbox' id='ibp-autoresponder-checkbox' class='ibp-autoresponder-checkbox'><div class='b4g-toggle-slider'></div></label><div class='ibp-menu-item-body'><label for='ibp-autoresponder-checkbox' class='ibp-menu-item-body-title'>Turn on Auto-Responder</label><div class='ibp-menu-item-body-detail ibp-autoresponder-input'><li><strong>Subject: </strong><input type='text' class='ibp-autoresponder-subject' value='My Inbox is Paused'></li><li><div class='ibp-autoresponder-body-container'><div class='ibp-autoresponder-body' contenteditable='true'>Thanks for emailing! I paused my Inbox, so I won't see your email for a while. If this is urgent, please contact me another way!</div><div class='ibp-viral-hook'><div>--</div><span class='ibp-viral-hook-close-button'><img src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/removesignature.png' class='ibp-viral-hook-close-button-image'></span><div>Want to pause your Inbox too?</div><div><strong>Learn more at <a target='_blank' href='http://inboxpause.com'>inboxpause.com</a></strong></div></div></div></li></div></div></div><div class='ibp-menu-item'><label class='b4g-toggle-switch'><input type='checkbox' id='ibp-delivery-exceptions-checkbox' class='ibp-delivery-exceptions-checkbox'><div class='b4g-toggle-slider'></div></label><div class='ibp-menu-item-body ibp-menu-item-delivery-exceptions-body'><label for='ibp-delivery-exceptions-checkbox' class='ibp-menu-item-body-title'>Delivery exceptions</label><div class='ibp-menu-item-body-detail ibp-delivery-exceptions-input'><li>While paused, continue delivering messages</li><li class='ibp-delivery-exceptions-item'>from addresses: <textarea type='text' id='ibp-delivery-exceptions-addresses' class='ibp-delivery-exceptions-textarea' placeholder='john@example.com, sara@example.com'></textarea></li><li class='ibp-delivery-exceptions-item'>or addressed to: <textarea type='text' id='ibp-delivery-exceptions-to-addresses' class='ibp-delivery-exceptions-textarea' placeholder='" +
      (b[0] + "+urgent@" + b[1]) + ", work@company.com'></textarea></li><li class='ibp-delivery-exceptions-item'>or from domains: <textarea type='text' id='ibp-delivery-exceptions-domains' class='ibp-delivery-exceptions-textarea'  placeholder='example.com'></textarea></li><li class='ibp-delivery-exceptions-item'>or with words: <textarea type='text' id='ibp-delivery-exceptions-words' class='ibp-delivery-exceptions-textarea' placeholder='urgent'></textarea></li></div></div></div></div><div class='ibp-menu-main-right'><div class='ibp-menu-item'><label class='b4g-toggle-switch'><input type='checkbox' id='ibp-hide-label-checkbox' class='ibp-hide-label-checkbox'><div class='b4g-toggle-slider'></div></label><div class='ibp-menu-item-body'><label for='ibp-hide-label-checkbox' class='ibp-menu-item-body-title'>Hide label</label><span data-tooltip-contained='true' data-tooltip-align='r,l'><img src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/questionmark.png' class='ibp-tooltip-icon'><div class='T-ays-a45'><div class='ibp-menu-tooltip'>While your Inbox is paused, all new\nincoming emails get moved to a\ntemporary label. We can hide the\ntemporary label from being\ndisplayed in your label list so you\ndon't get tempted to go check it.</div></div></span></div></div><div class='ibp-menu-item'><label class='b4g-toggle-switch'><input type='checkbox' id='ibp-periodic-unpause-checkbox' class='ibp-periodic-unpause-checkbox'><div class='b4g-toggle-slider'></div></label><div class='ibp-menu-item-body ibp-periodic-unpause-body'><label for='ibp-periodic-unpause-checkbox' class='ibp-menu-item-body-title'>Bring messages into Inbox on a schedule</label><div class='ibp-menu-item-body-detail ibp-periodic-unpause-input'><label for='ibp-periodic-weekdays-only-checkbox'><input class='ibp-periodic-weekdays-only' type='checkbox' id='ibp-periodic-weekdays-only-checkbox'><span> Weekdays only</span></label><button class='ibp-menu-button ibp-periodic-unpause-add by-button'>Add Time</button></div></div></div></div></div><div class='ibp-menu-divider'></div><div class='ibp-menu-footer'><div class='ibp-menu-footer-option'><label class='b4g-toggle-switch'><input type='checkbox' id='ibp-unpause-automatically-checkbox' class='ibp-unpause-automatically-checkbox'><div class='b4g-toggle-slider'></div></label><div class='ibp-menu-item-body ibp-unpause-automatically'><label for='ibp-unpause-automatically-checkbox' class='ibp-menu-item-body-title'>Unpause automatically</label><div class=\"T-I J-J5-Ji Bq lX T-I-ax7 L3 ibp-auto-unpause-picker\" style=\"padding: 1px 2px; font-weight: normal; font-size: 12px; height: 18px; border: 1px solid #EEEEEE; border-radius: 0px; background-color: #ffffff; background-image: none; color: #000; margin-left: 5px;\"><div class=\"ibp-unpause-automatically-time\" aria-haspopup=\"true\" style=\"line-height: 20px;\" role=\"button\" tabindex=\"0\"><span class=\"ibp-unpause-automatically-time-text conditional-caption-text\" style=\"margin-left: 2px; text-transform: none;\">After 2 hours</span><div class=\"VP5otc-d2fWKd tk3N6e-I-J3 J-J5-Ji\"><div class=\"conditional-caption-arrow G-asx T-I-J3 J-J5-Ji ibp-auto-unpause-caption-arrow\" style=\"margin-left: 15px; margin-right: 5px;\">&nbsp;</div></div></div></div></div></div><div class='ibp-menu-footer-button-group'><button class='ibp-submit-pause ibp-menu-button'><img class='ibp-main-button-spinner' src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/b4g_ibp_spinner.gif'><span class='ibp-submit-pause-text'>Pause</span></button> <button class='ibp-menu-cancel by-button ibp-menu-button'>Cancel</button></div></div></div>")
  }

  function gf() {
    var b = y().split("@");
    return a("<div class='ibp-menu-new-ui'><div class='ibp-menu-header-new-ui'>Inbox Pause<span class='ibp-menu-header-signature-new-ui'> by Boomerang</span><span data-tooltip-contained=\"true\" data-tooltip-align=\"r,l\"><img src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/questionmark.png' class='ibp-tooltip-icon'><div class='T-ays-a45'><div class='ibp-menu-tooltip'>While you have your Inbox paused, all\nyour new messages will be rerouted to\na special label. You won't see them\nuntil you unpause. We will move all of\nthose messages back into your Inbox\nwhen you unpause.</div></div></span></div><div class='ibp-menu-main-new-ui'><div class='ibp-menu-main-left'><div class='ibp-menu-item-new-ui'><label class='b4g-toggle-switch'><input type='checkbox' id='ibp-autoresponder-checkbox' class='ibp-autoresponder-checkbox'><div class='b4g-toggle-slider'></div></label><div class='ibp-menu-item-body'><label for='ibp-autoresponder-checkbox' class='ibp-menu-item-body-title'>Turn on Auto-Responder</label><div class='ibp-menu-item-body-detail ibp-autoresponder-input'><li><strong>Subject: </strong><input type='text' class='ibp-autoresponder-subject' value='My Inbox is Paused'></li><li><div class='ibp-autoresponder-body-container'><div class='ibp-autoresponder-body' contenteditable='true'>Thanks for emailing! I paused my Inbox, so I won't see your email for a while. If this is urgent, please contact me another way!</div><div class='ibp-viral-hook'><div>--</div><span class='ibp-viral-hook-close-button'><img src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/removesignature.png' class='ibp-viral-hook-close-button-image'></span><div>Want to pause your Inbox too?</div><div><strong>Get Boomerang at <a target='_blank' href='http://boomeranggmail.com'>boomeranggmail.com</a></strong></div></div></div></li></div></div></div><div class='ibp-menu-item-new-ui'><label class='b4g-toggle-switch'><input type='checkbox' id='ibp-delivery-exceptions-checkbox' class='ibp-delivery-exceptions-checkbox'><div class='b4g-toggle-slider'></div></label><div class='ibp-menu-item-body ibp-menu-item-delivery-exceptions-body'><label for='ibp-delivery-exceptions-checkbox' class='ibp-menu-item-body-title'>Delivery exceptions</label><div class='ibp-menu-item-body-detail ibp-delivery-exceptions-input'><li>While paused, continue delivering messages</li><li class='ibp-delivery-exceptions-item'>from addresses: <textarea type='text' id='ibp-delivery-exceptions-addresses' class='ibp-delivery-exceptions-textarea' placeholder='john@example.com, sara@example.com'></textarea></li><li class='ibp-delivery-exceptions-item'>or addressed to: <textarea type='text' id='ibp-delivery-exceptions-to-addresses' class='ibp-delivery-exceptions-textarea' placeholder='" +
      (b[0] + "+urgent@" + b[1]) + ", work@company.com'></textarea></li><li class='ibp-delivery-exceptions-item'>or from domains: <textarea type='text' id='ibp-delivery-exceptions-domains' class='ibp-delivery-exceptions-textarea'  placeholder='example.com'></textarea></li><li class='ibp-delivery-exceptions-item'>or with words: <textarea type='text' id='ibp-delivery-exceptions-words' class='ibp-delivery-exceptions-textarea' placeholder='urgent'></textarea></li></div></div></div></div><div class='ibp-menu-main-right'><div class='ibp-menu-item-new-ui'><label class='b4g-toggle-switch'><input type='checkbox' id='ibp-hide-label-checkbox' class='ibp-hide-label-checkbox'><div class='b4g-toggle-slider'></div></label><div class='ibp-menu-item-body'><label for='ibp-hide-label-checkbox' class='ibp-menu-item-body-title'>Hide label</label><span data-tooltip-contained='true' data-tooltip-align='r,l'><img src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/questionmark.png' class='ibp-tooltip-icon'><div class='T-ays-a45'><div class='ibp-menu-tooltip'>While your Inbox is paused, all new\nincoming emails get moved to a\ntemporary label. We can hide the\ntemporary label from being\ndisplayed in your label list so you\ndon't get tempted to go check it.</div></div></span></div></div><div class='ibp-menu-item-new-ui'><label class='b4g-toggle-switch'><input type='checkbox' id='ibp-periodic-unpause-checkbox' class='ibp-periodic-unpause-checkbox'><div class='b4g-toggle-slider'></div></label><div class='ibp-menu-item-body ibp-periodic-unpause-body'><label for='ibp-periodic-unpause-checkbox' class='ibp-menu-item-body-title'>Bring messages into Inbox on a schedule</label><div class='ibp-menu-item-body-detail ibp-periodic-unpause-input'><label for='ibp-periodic-weekdays-only-checkbox'><input class='ibp-periodic-weekdays-only' type='checkbox' id='ibp-periodic-weekdays-only-checkbox'><span> Weekdays only</span></label><button class='ibp-menu-button ibp-periodic-unpause-add by-button'>Add Time</button></div></div></div></div></div><div class='ibp-menu-divider'></div><div class='ibp-menu-footer'><div class='ibp-menu-footer-option'><label class='b4g-toggle-switch'><input type='checkbox' id='ibp-unpause-automatically-checkbox' class='ibp-unpause-automatically-checkbox'><div class='b4g-toggle-slider'></div></label><div class='ibp-menu-item-body ibp-unpause-automatically'><label for='ibp-unpause-automatically-checkbox' class='ibp-menu-item-body-title'>Unpause automatically</label><div class=\"T-I J-J5-Ji Bq lX T-I-ax7 L3 ibp-auto-unpause-picker\" style=\"padding: 1px 2px; font-weight: normal; font-size: 12px; height: 18px; border: 1px solid #EEEEEE; border-radius: 0px; background-color: #ffffff; background-image: none; color: #000; margin-left: 5px;\"><div class=\"ibp-unpause-automatically-time\" aria-haspopup=\"true\" style=\"line-height: 20px;\" role=\"button\" tabindex=\"0\"><span class=\"ibp-unpause-automatically-time-text conditional-caption-text\" style=\"margin-left: 2px; text-transform: none;\">After 2 hours</span><div class=\"VP5otc-d2fWKd tk3N6e-I-J3 J-J5-Ji\"><div class=\"conditional-caption-arrow G-asx T-I-J3 J-J5-Ji ibp-auto-unpause-caption-arrow\" style=\"margin-left: 15px; margin-right: 5px;\">&nbsp;</div></div></div></div></div></div><div class='ibp-menu-footer-button-group'><button class='ibp-submit-pause ibp-submit-pause-new-ui ibp-menu-button-new-ui'><img class='ibp-main-button-spinner' src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/b4g_ibp_spinner.gif'><span class='ibp-submit-pause-text'>Pause</span></button> <button class='ibp-menu-cancel by-button ibp-menu-button-new-ui'>Cancel</button></div></div></div>")
  }

  function ab() {
    Ga().remove();
    a(".ibp-overlay").remove()
  }

  function Ga() {
    var b;
    3 === q() ? (b = a(".ibp-menu-new-ui").first(), 0 === b.length && (b = a(".ibp-menu").first())) : b = a(".ibp-menu").first();
    return b
  }

  function ff() {
    var b = [];
    a(".ibp-periodic-unpause-time").each(function() {
      var c = a(this).children().first().val() + " " + a(this).children().find(":selected").val(),
        c = Date.parse(c).valueOf();
      b.push(c)
    });
    var d = y(),
      c = a(".ibp-periodic-weekdays-only").is(":checked");
    a.ajax({
      url: "https://b4g.baydin.com/inboxpause/schedulerecurringunpauseweb",
      data: {
        guser: d,
        weekdaysOnly: c,
        times: JSON.stringify(b)
      },
      type: "POST",
      dataType: "json",
      xhr: J,
      success: function(a) {
        "error" === a.status ? Na(a) : (Pb(), ab())
      }
    })
  }

  function Qb() {
    function b(b) {
      b.isPaused ? (b = y(), a.ajax({
        url: "https://b4g.baydin.com/inboxpause/cleanupweb",
        data: {
          guser: b
        },
        type: "POST",
        dataType: "json",
        xhr: J,
        success: function(a) {
          "error" == a.status ? Na(a) : d()
        },
        error: function(a) {
          Na({
            errorCode: a.status
          })
        }
      })) : (mb(!1), aa(), nc())
    }

    function d() {
      var b = y();
      a.ajax({
        url: "https://b4g.baydin.com/inboxpause/checktask",
        data: {
          guser: b
        },
        type: "GET",
        dataType: "json",
        xhr: J,
        success: function(b) {
          if ("error" == b.status) Na(b);
          else {
            var g = b.current,
              h = b.total,
              r = f,
              p = -1 < g && 100 <= h && !b.imapEnabled;
            p && r ? (jf(g, h), r = !1) : p && (g = "Moving messages back to Inbox : </br>" + g + " of " + h, a("#ibp_moving_messages_text").html(g));
            f = r;
            e(b.taskStatus, c, d)
          }
        }
      })
    }

    function c() {
      mb(!1);
      a(".ibp-inboxpauseprogress").remove();
      aa();
      nc()
    }

    function e(a, b, c) {
      switch (a) {
        case "SUCCESS":
          b();
          break;
        case "FAILURE":
          Na({
            errorCode: "GenericUnpauseError",
            errorMessage: "Sorry, something went wrong while unpausing your inbox. <b>Please try again.</b></br></br> If you continue to encounter this error, please visit <a style='word-break: break-all;' href='https://www.boomeranggmail.com/faq.html#inboxpausemanual'>our FAQ page</a> for help."
          });
          break;
        default:
          setTimeout(function() {
            c("")
          }, 2E3)
      }
    }
    var f = !0;
    Bd();
    (function() {
      var c = a("#ibp-main");
      c.find("#ibp-main-text").text("");
      c.addClass("ibp-main-button-show-spinner-hide-logo");
      c = y();
      a.ajax({
        url: "https://b4g.baydin.com/inboxpause/checkpaused",
        data: {
          guser: c
        },
        type: "GET",
        dataType: "json",
        xhr: J,
        success: function(a) {
          b(a)
        },
        error: function(a) {
          Na({
            errorCode: a.status
          })
        }
      })
    })()
  }

  function Cd() {
    var b = xb("Mail").add(xb("Gmail"));
    0 === b.length && (b = a(".akh[role=button]"));
    return b
  }

  function dc() {
    var a = "is_it_paused" +
      y();
    return "true" == R(a)
  }

  function se() {
    if (3 === q()) kf();
    else {
      var b = Cd(),
        d = a("<button id='ibp-main' class='ibp-main-button ibp-menu-button'><img class='ibp-main-button-spinner' src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/b4g_ibp_spinner.gif'><img class='ibp-main-button-logo' src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/b4g_ibp_boomerang.png'><span id='ibp-main-text'>Unpause</span></button>");
      d.unbind("click");
      oc(null, null);
      d.click(function() {
        Oa();
        n(["inbox pause main button clicked",
          "unpause"
        ]);
        Q(Qb, ta, !1, !0)
      });
      b.after(d)
    }
  }

  function ue() {
    if (3 === q()) lf();
    else {
      var b = Cd(),
        d = a("<button id='ibp-main' class='ibp-main-button ibp-menu-button'><img class='ibp-main-button-spinner' src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/b4g_ibp_spinner.gif'><img class='ibp-main-button-logo' src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/b4g_ibp_boomerang.png'><span id='ibp-main-text'>Pause</span></button>");
      d.unbind("click");
      d.click(function() {
        Oa();
        Q(bb, ta, !1, !0)
      });
      b.after(d)
    }
  }

  function kf() {
    var b = a("<button id='ibp-main' class='ibp-main-new-ui'><img class='ibp-main-button-spinner' src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/IP_Loading.gif'><img class='ibp-main-button-logo-new-ui ibp-main-button-logo-new-ui-play' src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/new-ui/IP-Play.png'><span id='ibp-main-text' class='ibp-main-text-new-ui ibp-main-text-new-ui-unpause-margin'>Unpause Inbox</span></button>");
    b.unbind("click");
    oc(null, null);
    b.click(function() {
      Oa();
      n(["inbox pause main button clicked", "unpause"]);
      Q(Qb, ta, !1, !0)
    });
    var d = Xb();
    a(d.children()[0]).after(b)
  }

  function lf() {
    var b = a("<button id='ibp-main' class='ibp-main-new-ui' data-tooltip-contained='true' data-tooltip-align='b,r'><img class='ibp-main-button-spinner' src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/IP_Loading.gif'><img class='ibp-main-button-logo-new-ui' src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/new-ui/IP-Pause.png'><span id='ibp-main-text' class='ibp-main-text-new-ui ibp-main-text-new-ui-pause-margin'>Pause Inbox</span><div class='T-ays-a45'>Stop new email from coming into your Inbox</div></button>");
    b.unbind("click");
    b.click(function() {
      Oa();
      Q(bb, ta, !1, !0)
    });
    var d = Xb();
    a(d.children()[0]).after(b)
  }

  function oc(b, d) {
    var c = "<div class='ibp_notification_bar'>Your Inbox is currently paused. Please visit your <a href='#inbox'>Inbox</a> and click the blue <strong>UNPAUSE</strong> button to see what's waiting for you.</div>";
    3 === q() && (c = "<div class='ibp_notification_bar'>Your Inbox is currently paused. Please visit your <a href='#inbox'>Inbox</a> and click the <strong>Unpause Inbox</strong> button to see what's waiting for you.</div>");
    if (null != d && null != b && 0 < d.length && "checked='yes'" == b) {
      for (var e = mf(d).sort(), c = new Date, f = e[0], g = 1; g < e.length; g++)
        if (e[g].getHours() > c.getHours()) {
          f = e[g];
          break
        } else if (e[g].getHours() == c.getHours() && e[g].getMinutes() > c.getMinutes()) {
        f = e[g];
        break
      }
      setInterval(function() {
        var b = new Date;
        f = e[0];
        for (var c = 1; c < e.length; c++)
          if (e[c].getHours() > b.getHours()) {
            f = e[c];
            break
          } else if (e[c].getHours() == b.getHours() && e[c].getMinutes() > b.getMinutes()) {
          f = e[c];
          break
        }
        b = f.toLocaleTimeString("en-US").split(":");
        b = b[0] + ":" +
          b[1] + " " + b[2].split(" ")[1];
        a(".ibp_notification_display_time").text(b)
      }, 6E4);
      c = f.toLocaleTimeString("en-US").split(":");
      c = c[0] + ":" + c[1] + " " + c[2].split(" ")[1];
      c = "<div class='ibp_notification_bar'>Your inbox is currently paused. Messages will next arrive at <strong class='ibp_notification_display_time'>" + c + "</strong>. To unpause now, visit your <a href='#inbox'>Inbox</a> and click the blue <strong>UNPAUSE</strong> button.</div>"
    }
    c = a(c);
    a(".w-MH").remove();
    0 == a(".ibp_notification_bar").length && a(".aiw").find(".nH").first().show().append(c)
  }

  function mb(a) {
    var d = "is_it_paused" + y();
    A(d, a)
  }

  function ta() {
    a("#ibp-main").removeAttr("disabled")
  }

  function Oa() {
    a("#ibp-main").attr("disabled", "disabled")
  }

  function Pb() {
    var b = a("#ibp-main");
    b.removeClass("ibp-main-button-show-spinner-hide-logo");
    b.unbind("click");
    ta();
    b.click(function() {
      Oa();
      n(["inbox pause main button clicked", "unpause"]);
      Q(Qb, ta, !1, !0)
    });
    var d = b.find("#ibp-main-text"),
      c = "Unpause";
    3 === q() && (b.find(".ibp-main-button-logo-new-ui").attr("src", "https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/new-ui/IP-Play.png"),
      c = "Unpause Inbox", d.addClass("ibp-main-text-new-ui-unpause-margin"), d.removeClass("ibp-main-text-new-ui-pause-margin"));
    d.text(c);
    oc(null, null)
  }

  function Bd() {
    a(".ibp_notification_bar").remove()
  }

  function nc() {
    var b = a("#ibp-main");
    b.removeClass("ibp-main-button-show-spinner-hide-logo");
    b.unbind("click");
    ta();
    b.click(function() {
      Oa();
      Q(bb, ta, !1, !0)
    });
    var d = b.find("#ibp-main-text"),
      c = "Pause";
    3 === q() && (b.find(".ibp-main-button-logo-new-ui").attr("src", "https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/new-ui/IP-Pause.png"),
      c = "Pause Inbox", d.addClass("ibp-main-text-new-ui-pause-margin"), d.removeClass("ibp-main-text-new-ui-unpause-margin"));
    d.text(c)
  }

  function jf(b, d) {
    a(".ibp-inboxpauseprogress").remove();
    a(".ibp_dialogdiv").dialog("close");
    var c = "<div class='ibp-inboxpauseprogress'><div class='ibp-inboxpauseprogress-message'>" + ("<p id='ibp_moving_messages_text'>Moving messages back to Inbox : </br>" + b + " of " + d + "</p>") + "<img height='32' width='32' src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/b4gloading.gif'></div>";
    a("body").append(a(c));
    a(".ibp-inboxpauseprogress").dialog({
      modal: !0,
      resizable: !1,
      open: function(b, c) {
        a(this).prev().hide()
      }
    })
  }

  function Na(b) {
    function d() {
      Ga().remove();
      a(".ibp-overlay").remove()
    }

    function c() {
      dc() ? Pb() : pc()
    }
    var e = b.errorMessage;
    switch (b.errorCode) {
      case 403:
        u("Something unexpected occurred. Please refresh Gmail and try again.");
        d();
        c();
        n(["inbox pause error", "inbox pause 403"]);
        break;
      case 500:
        u("Something unexpected occurred. Please refresh Gmail and try again.");
        d();
        c();
        n(["inbox pause error",
          "inbox pause 500"
        ]);
        break;
      case "AlreadyPaused":
        ab();
        e = "";
        b.nextUnpauseTimeString && (e = b.nextUnpauseTimeString);
        yd(e);
        break;
      case "AlreadyScheduled":
        n(["inbox pause error", "already scheduled error"]);
        break;
      case "FilterExists":
        u(e);
        n(["inbox pause error", "filter already exists error"]);
        break;
      case "GenericPeriodicUnpauseError":
        u(e);
        d();
        c();
        n(["inbox pause error", "generic periodic unpause error"]);
        break;
      case "GenericUnpauseError":
        a(".ibp-inboxpauseprogress").remove();
        aa();
        u(e);
        c();
        n(["inbox pause error",
          "generic unpause error"
        ]);
        break;
      case "GmailAPI403Error":
        u(e);
        d();
        c();
        n(["inbox pause error", "settings api insufficient permissions"]);
        break;
      case "GmailAPI500Error":
        u(e);
        d();
        c();
        n(["inbox pause error", "settings api backend error"]);
        break;
      case "IncorrectPlan":
        n(["inbox pause error", "incorrect plan error"]);
        break;
      case "InvalidPeriodicUnpauseTimes":
        u(e);
        d();
        c();
        n(["inbox pause error", "invalid periodic times error"]);
        break;
      case "NoPauseFound":
        pc();
        n(["inbox pause error", "no pause found error"]);
        break;
      case "TooManyFilters":
        u(e);
        n(["inbox pause error", "too many filters error"]);
        break;
      case "TooManyPeriodicUnpauses":
        u(e);
        n(["inbox pause error", "too many periodic unpauses error"]);
        break;
      default:
        u("Something unexpected occurred. Please refresh Gmail and try again.")
    }
  }

  function mf(a) {
    var d = [],
      c;
    c = new Date;
    c = c.hasDaylightSavingTime() && c.getTimezoneOffset() === Date.today().set({
      month: 6,
      day: 1
    }).getTimezoneOffset();
    for (var e = 0; e < a.length; e++) {
      var f = new Date(0);
      f.setMilliseconds(a[e]);
      f.addHours(c ? 1 : 0);
      d.push(f)
    }
    return d
  }

  function df(a) {
    var d, c = "https://b4g.baydin.com/inboxpause/addsettingsoauth?guser=" + y();
    if (a) nf();
    else {
      d = window.open(c, "_blank");
      Oa();
      var e = setInterval(function() {
        if (!d && "Chrome" !== z && "Opera" !== z && "Edge" !== z || d.closed) clearInterval(e), ta(), Q(function() {
          bb(!0)
        })
      }, 300)
    }
  }

  function nf() {
    var b, d = "https://b4g.baydin.com/inboxpause/addsettingsoauth?guser=" + y();
    u("<p>The Inbox Pause feature requires an additional Settings permission to create filters. <strong>Without this permission, Inbox Pause will not work.</strong> If you would like to use this feature, please grant permission.</p>",
      "Inbox Pause", {
        Enable: {
          text: "Grant Permission",
          "class": "b4g-button red",
          click: function() {
            b = window.open(d);
            var c = this,
              e = setInterval(function() {
                if (!b && "Chrome" !== z && "Opera" !== z && "Edge" !== z || b.closed) a(c).dialog("destroy"), clearInterval(e), Q(function() {
                  bb(!0)
                })
              }, 300)
          }
        },
        Cancel: {
          text: "Cancel",
          "class": "b4g-button grey cancelConsent",
          click: function() {
            a(this).dialog("destroy")
          }
        }
      }, {
        width: 500
      }, "inbox-pause-consent");
    a(".inbox-pause-consent").css("margin", "20px")
  }

  function Kc() {
    var a = new Date;
    a.setHours(a.getHours() +
      1);
    A("ibp_sync_timeout_window_" + y(), a.toString())
  }

  function te() {
    function b() {
      var a = y(),
        b = 0,
        c;
      for (c in GLOBALS) GLOBALS[c] == a && 0 == b && (b = c - 1);
      return GLOBALS[b]
    }

    function d() {
      var a = document.cookie.indexOf("GMAIL_AT=") + 9,
        b = document.cookie.indexOf(";", document.cookie.indexOf("GMAIL_AT"));
      return document.cookie.substring(a, b)
    }

    function c() {
      var a = String(document.location),
        b = a.indexOf("?") + 1;
      0 < b ? a = a.substr(0, a.indexOf("?") + 1) : (b = a.lastIndexOf("/"), a = a.substring(0, b) + "?");
      return a
    }(function() {
      var e = b(),
        f = d(),
        g = c(),
        g = g + ("ik=" + e) + ("&at=" + f) + "&view=up&act=df&pcd=1&mb=0&rt=c";
      a.post(g, "tfi=none&", function(a) {
        var b = a.indexOf('["fi",'),
          c = a.indexOf('["ua",'); - 1 == a.substring(b, c).search("Inbox-Paused-") && of ()
      })
    })()
  }

  function of () {
    var b = y();
    a.ajax({
      url: "https://b4g.baydin.com/inboxpause/checkpaused",
      data: {
        guser: b
      },
      type: "GET",
      xhr: J,
      success: function(a) {
        JSON.parse(a).isPaused || pc()
      },
      error: function() {}
    })
  }

  function pc() {
    mb(!1);
    Bd();
    nc()
  }

  function qc() {
    var a = "true" === R("b4gshowcardexpired"),
      d = Date.parse(R("b4gshowcardexpiredafter")) ||
      Date.today().addDays(-4),
      c = Date.parse(R("b4glastcheckedbillingstatusdate") || Date.today().addDays(-365));
    a && -1 < Date.compare(Date.today(), d) ? Dd() : -1 < Date.compare(Date.today(), Date.parse(c).addDays(5)) && Dd()
  }

  function Dd() {
    (new Date - new Date(2013, 3, 17)) / 864E5 / 5 > Math.random() && U("https://b4g.baydin.com/mailcruncher/checkbillinginfo?guser=" + y(), function(a, d, c) {
      A("b4glastcheckedbillingstatusdate", Date.today().toString("ddd, dd MMM yyyy HH:mm:ss"));
      3 === a ? (pf(), A("b4gshowcardexpired", !0)) : A("b4gshowcardexpired",
        !1)
    })
  }

  function pf() {
    var b = F(),
      d = y(),
      c = a("<div class='b4g_card_expired_bar'><div>Your credit card payment for Boomerang was declined. <strong>Please update your billing information.</strong></div> <div style='height: 50px; line-height: 50px;'><a class='b4g-button red' id='b4g_card_expired_fix' style='display: inline; margin:0px;' target='_blank' href='https://b4g.baydin.com/fixexpiredbilling?guser=" + encodeURIComponent(d) + "'>FIX THIS</a><a id='billing_expired_snooze'>Remind me later</a><a id='billing_expired_downgrade' style='text-decoration: none;' target='_blank' href='https://b4g.baydin.com/account'>Cancel my subscription</a></div></div>");
    c.css({
      padding: "20px 0px 10px 0px",
      color: "#555",
      background: "#FFF1A8",
      border: "1px solid #EEE",
      "text-align": "center"
    });
    0 === a(".b4g_card_expired_bar", b).length && a(".aiw", b).find(".nH").first().show().append(c);
    a("#billing_expired_snooze", b).click(function() {
      c.hide();
      A("b4gshowcardexpiredafter", Date.today().addDays(3).toString("ddd, dd MMM yyyy HH:mm:ss"));
      A("b4gshowcardexpired", !0);
      n(["credit card expiration", "clicked_RemindLater"])
    });
    a("#b4g_card_expired_fix", b).click(function() {
      c.hide();
      A("b4gshowcardexpired",
        !0);
      A("b4gshowcardexpiredafter", Date.today().addDays(3).toString("ddd, dd MMM yyyy HH:mm:ss"));
      n(["credit card expiration", "clicked_FixThis"])
    });
    a("#billing_expired_downgrade", b).click(function() {
      c.hide();
      A("b4gshowcardexpired", !1);
      n(["credit card expiration", "clicked_CancelMySubscription"])
    });
    n(["credit card expiration", "show"])
  }

  function lc(a, d) {
    Hb(qf, a, d)
  }

  function Hb(a, d, c) {
    var e = la();
    e && a(e) ? d() : Q(function() {
      var e = la();
      a(e) ? d() : c()
    })
  }

  function la() {
    var a = y();
    return R("b4g_plan-" + a)
  }

  function kc(a) {
    return a &&
      "basic" !== a
  }

  function qf(a) {
    return a && (-1 < a.indexOf("pro") || "premium" === a)
  }

  function Nc(a) {
    return a && "premium" === a
  }

  function ya(b) {
    n(["new nag screen", "show", String(b)]);
    if ("nag_screen_one" === b) Aa("<p style='margin: 15px;'>Boomerang Basic provides 10 credits per month for free, but you can get unlimited access by upgrading your subscription:</p> <a href='https://b4g.baydin.com/subscriptions' class='b4g-button green' id='signup-button' target='_blank'>Upgrade</a>", !1, "Give me 1 more message!"), a(".closeLink").parent().css("margin-top",
      "6px");
    else if ("nag_screen_two" === b) Aa("<p style='margin: 15px;'>Boomerang Basic provides 10 credits per month for free.</p> <div style='text-align:center;'><img src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/coffecup.png' style='margin:0px auto;'/></div> <p style='margin:0 15px 15px;'>For not much more than a trip to Starbucks a month, you can schedule an unlimited number of messages and help us keep Boomerang running.</p> <a href='https://b4g.baydin.com/subscriptions' class='b4g-button green' id='signup-button' target='_blank'>Upgrade</a>",
      !1, "Give me 1 more message!"), a(".closeLink").parent().css("margin-top", "6px");
    else if ("nag_screen_three" === b) Aa("<p style='margin: 15px;'>Boomerang Basic provides 10 credits per month for free. <strong>You just used your last credit.</strong></p>  <p style='margin: 0 15px 15px 15px;'>You can get more free messages by telling others about Boomerang!</p> <p style='text-align: center;'><a href='https://b4g.baydin.com/subscriptions' class='b4g-button green' id='signup-button' target='_blank'>Upgrade</a> <span class='b4g-button blue' id='multi-friend-button'>Invite your contacts</span></p>",
      !1, "No, thanks.");
    else if ("paywall" === b) Aa("<ul style='list-style-type: none;'><li><i>Our dinner's not steak and fondue</i></li><li><i>Instead it's ramen and stew</i></li><li><i>If our users don't buy</i></li><li><i>We'll starve and then die</i></li><li><i>So no more messages for you!</i></li></ul><p style='margin: 0 15px;'>You\u2019ve used all your credits for this month. <span style='color:red;'><strong id='b4g-message-not-scheduled'>Your message was NOT scheduled.</strong></span></p><p style='margin: 5px 0 0 15px;'>Please upgrade your subscription to get unlimited message scheduling.</p> <a href='https://b4g.baydin.com/subscriptions' class='b4g-button green gm-signup-button' id='signup-button' target='_blank' style='margin-left: 80px;'>Upgrade Subscription</a> <p style='margin: 5px 0 0 15px;'>You can also refer a friend to earn some message credits. </p><a href='https://b4g.baydin.com/refer' class=' b4g-button dialog-gray' id='refer-button' target='_blank'>Refer a friend</a>",
      !1, "<span id='referral_confirm'>No, thanks.</span>");
    else {
      var d = "<div id='referral_success'></div><div id='referral_dialog'><p style='margin: 0 0 18px 0;'>Boomerang Basic provides 10 messages per month for free. </p><p>It costs us money to provide Boomerang to you, so to continue scheduling messages, you can either buy a subscription, or <strong>share Boomerang with your followers and earn 25 more credits as thanks.</strong></p> <p class='referral-share-options'><a href='https://b4g.baydin.com/subscriptions' class='b4g-button green' id='signup-button' target='_blank'>Upgrade</a> <span>or</span> ";
      0 === (Number.parseInt(b) - db & 1) && (d += "<a class='b4g-button blue' id='tweet-button' target='_blank'>Tweet Now</a>");
      Aa(d + "</p></div>", !1, "<span id='referral_confirm'>No! Give me 1 more message anyway.</span>")
    }
  }

  function sa(a) {
    n(["nag screen", "show", String(a)]);
    if ("Old Safari" !== z)
      if (17 === a) Aa("<p style='margin: 15px;'>Hey, did you know that you've already scheduled more than 10 messages with Boomerang this month?</p> <a href='https://b4g.baydin.com/subscriptions' class='b4g-button green' id='signup-button' target='_blank'>Upgrade</a>",
        !1, "Give me 1 more message!");
      else if (18 === a) Aa("<p style='margin: 15px;'>You have already scheduled beyond the 10 messages Boomerang Basic provides for free.</p> <div style='text-align:center;'><img src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/coffecup.png' style='margin:0px auto;'/></div> <p style='margin:0 15px 15px;'>For not much more than a trip to Starbucks a month, you can schedule an unlimited number of messages and help us keep Boomerang running. We've scheduled your message anyway.</p> <a href='https://b4g.baydin.com/subscriptions' class='b4g-button green' id='signup-button' target='_blank'>Upgrade</a>",
      !1, "Give me 1 more message!");
    else if (19 === a) Aa("<p style='margin: 15px;'>You have already scheduled beyond the 10 messages Boomerang Basic provides for free.</p>  <p style='margin: 0 15px 15px 15px;'>You can get more free messages by telling others about Boomerang!</p> <span class='b4g-button green' id='multi-friend-button'>INVITE YOUR CONTACTS</span>", !1, "Give me 1 more message!");
    else if (20 === a) Aa("<ul style='list-style-type: none;'><li><i>Our dinner's not steak and fondue</i></li><li><i>Instead it's ramen and stew</i></li><li><i>If our users don't buy</i></li><li><i>We'll starve and then die</i></li><li><i>So no more messages for you!</i></li></ul><p style='margin: 0 15px;'>You've hit your quota of messages for this month. Boomerang Basic provides for 10, but you've scheduled more than 15. <span style='color:red;'><strong>Your message was NOT scheduled.</strong></span></p><p style='margin: 5px 0 0 15px;'>Please upgrade your subscription to get unlimited message scheduling.</p> <a href='https://b4g.baydin.com/subscriptions' class='b4g-button green gm-signup-button' id='signup-button' target='_blank' style='margin-left: 80px;'>Upgrade Subscription</a> <p style='margin: 5px 0 0 15px;'>You can also refer a friend to earn some message credits. </p><a href='https://b4g.baydin.com/refer' class=' b4g-button dialog-gray' id='refer-button' target='_blank'>Refer a friend</a>",
      !1, "<span id='referral_confirm'>No, thanks.</span>");
    else {
      if (a >= db) {
        var d = "<div id='referral_success'></div><div id='referral_dialog'><p style='margin: 0 0 18px 0;'>Boomerang Basic provides 10 messages per month for free. You've already scheduled 15 this month.</p><p>It costs us money to provide Boomerang to you, so to continue scheduling messages, you can either buy a subscription, or share Boomerang with your followers and earn 25 more credits as thanks.</p> <p class='referral-share-options'><a href='https://b4g.baydin.com/subscriptions' class='b4g-button green' id='signup-button' target='_blank'>Upgrade</a> <span>or</span> ";
        0 === (a - db & 1) && (d += "<a class='b4g-button blue' id='tweet-button' target='_blank'>Tweet Now</a>");
        Aa(d + "</p></div>", !1, "<span id='referral_confirm'>No! Give me 1 more message anyway.</span>")
      }
    } else 17 === a ? alert("Hey, did you know that you've already scheduled more than 10 messages with Boomerang this month? That's okay. We've scheduled your message anyway.") : 18 === a ? alert("You have already scheduled beyond the 10 messages Boomerang Basic provides for free. For not much more than a trip to Starbucks a month, you can schedule an unlimited number of messages and help us keep Boomerang running. We've scheduled your message anyway. ") :
      19 === a ? alert("Boomerang Basic provides 10 messages per month for free. You've already scheduled 15 this month. It costs us money to provide Boomerang to you, so to continue scheduling messages, please upgrade your subscription from Boomerang menu at the top right of your Gmail screen. We've scheduled your message anyway.") : alert("Our dinner's not steak and fondue. Instead it's ramen and stew. If our users don't buy. We'll starve and then die. So no more messages for you! You've hit your quota of messages for this month. Boomerang Basic provides for 10, but you've scheduled more than 15. Please upgrade your subscription to Boomerang Personal or Boomerang Professional. Your message was NOT scheduled. ")
  }

  function Aa(b, d, c) {
    if ("Old Safari" === z) alert(b);
    else {
      var e = F();
      a(".dialogdiv").remove();
      c = c ? "<div class='dialogdiv' style='display:none;'>" + b + "<span style='float:right; margin:0 15px 0 0;'><span class='closeLink' style='cursor: pointer; text-decoration: underline;'>" + c + "</span></span></div>" : "<div class='dialogdiv' style='display:none;'>" + b + "</div>";
      a("body", e).append(a(c)); - 1 !== b.toLowerCase().indexOf("invite your contacts") && a("#multi-friend-button").click(function() {
        n(["multi-friend-selector",
          "click", "nag screen"
        ]);
        Ed(Fd)
      });
      a("#tweet-button").click(b4g_tweet);
      b = {
        title: "Boomerang for Gmail",
        modal: !0,
        closeOnEscape: !0,
        width: 370
      };
      d && (b.buttons = {
        Ok: {
          text: "OK Fine!",
          "class": "b4g-button dialog-gray",
          click: function() {
            a(this).dialog("destroy")
          }
        }
      });
      a(".dialogdiv", e).dialog(b);
      a(".closeLink").click(function() {
        a(".dialogdiv").dialog("close")
      });
      3 === q() && a(".dialogdiv").parent().addClass("gm-customize-modal gm-nag-modal");
      Xa()
    }
  }

  function Fd() {
    var b = F();
    a(".dialogdiv").remove();
    a("body", b).append(a("<div class='dialogdiv multi-friend-content' style='display:none'><div class='multi-friend-load' style='text-align:center; padding: 20px;'><img src='https://b4g.baydin.com/site_media/bookmarklet/auth-loader.gif' style='position:absolute; top: 50px;'/></div><div class='multi-friend-main' style='display:none;'><div class='multi-friend-max-num' style='padding:8px 0 0 0; width:100%; color:#b93f24; text-align:center;font-size: 14px;display: none;'>You may send invites to up to 200 friends.</div><div style='padding: 8px 20px 0px 20px;'><input type='text' class='multi-friend-search' placeholder='Search by name, email, or company'/></div><div id='multi-friend-list'><b class='multi-friend-contacts-non-found' style='display:none;'>No contacts found.</b><div id='most-contact-container' style='display:none;'><div class='top-of-list multi-friend-list-item'><input type='checkbox' value='blank' class='multi-friend-select-all recommended-contacts' style='margin: 3px 10px 3px 0.5ex;' checked/><b>Recommended Contacts (<span class='multi-friend-most-contacted-count'></span>)</b></div><div id='multi-friend-most-contacted'></div></div><div id='all-contact-container' style='display:none;'><div class='top-of-list multi-friend-list-item'><b style='margin: 3px 10px 3px 27px;'>Other Contacts (<span class='multi-friend-contacts-count'></span>)</b></div><div id='multi-friend-contacts'></div></div></div><div class='multi-friend-lower-portion'><div class='multi-friend-credit-count' style='vertical-align: middle; padding-bottom: 15px;'><b>Message Credits Earned: <span id='multi-friend-credit-count-value'>0</span></b></div><div class='multi-friend-credit-help' style='vertical-align: middle; padding-bottom: 15px;'>You receive 1 message credit for each person you email to join Boomerang. If they download Boomerang, you will earn 10+ credits and a chance to win a Kindle Fire!</div><div><input type='button' class='b4g-button green' value='INVITE CONTACTS' id='multiInvitesSubmit' style='font-size:13px;padding: 7px 16px;margin:0 0 3px 0;'/><input type='button' class='b4g-button' value='CANCEL' id='multiInvitesCancel' style='font-size:13px;padding: 7px 16px;margin:0 0 3px 10px;'/></div></div></div></div>"));
    a(".dialogdiv", b).dialog({
      resizable: !1,
      modal: !0,
      position: ["center", 75],
      closeOnEscape: !0,
      width: 500,
      dialogClass: "multi-friend",
      title: "Invite your contacts to Boomerang for Gmail"
    });
    a.ajax({
      type: "GET",
      dataType: "json",
      position: ["center", 75],
      xhr: J,
      url: "https://b4g.baydin.com/getcontactslist?guser=" + encodeURIComponent(ub),
      success: function(d) {
        0 >= d.rec.length ? (n(["multi-friend-selector", "error", "no recommended contacts"]), a(".multi-friend-load", b).text("It doesn't look like you have any contacts!"), setTimeout(function() {
            a(".dialogdiv").dialog("close")
          },
          3E3)) : (Gd(a("#multi-friend-most-contacted", b), d.rec, "recommendedContactsCheck"), a(".multi-friend-most-contacted-count", b).text(d.rec.length), a("#most-contact-container", b).show(), Gd(a("#multi-friend-contacts", b), d.other, "otherContactsCheck"), a(".multi-friend-contacts-count", b).text(0), a(".otherContactsCheck", b).parent().hide(), a(".multi-friend-main", b).show(), a(".multi-friend-load", b).hide(), a(".b4g-ui-dialog-titlebar-close", b).hide(), a(".multi-friend-search", b).keyup(function(c) {
            var d = a(".multi-friend-search",
              b).val().toLowerCase();
            if (d) {
              var f = 0;
              a("#all-contact-container", b).show();
              a(".top-of-list", b).hide();
              a(".contact-info", b).each(function() {
                0 <= a(this).text().toLowerCase().indexOf(d) ? (a(this).parent(".contact", b).show(), f++) : a(this).parent(".contact", b).hide()
              });
              f ? a(".multi-friend-contacts-non-found", b).hide() : a(".multi-friend-contacts-non-found", b).show()
            } else a(".top-of-list", b).show(), a(".recommendedContactsCheck", b).parent().show(), c = a(".otherContactsCheck:checked", b), 0 < c.size() ? (c.parent().addClass("searchedAndFoundContact",
              b), a(".otherContactsCheck:not(:checked)", b).parent().hide(), a(".multi-friend-contacts-count", b).text(a(".searchedAndFoundContact", b).size()), a(".searchedAndFoundContact", b).show()) : 0 >= a(".searchedAndFoundContact", b).size() ? a("#all-contact-container", b).hide() : (a(".otherContactsCheck", b).parent().hide(), a(".searchedAndFoundContact", b).show())
          }), a(".multiFriendCheck", b).change(function() {
            var c = a(".multiFriendCheck:checked", b).size();
            200 <= c ? (a(".multiFriendCheck:not(:checked)", b).attr("disabled", "disabled"),
              a(".multi-friend-max-num:not(:visible)", b).show(), a(".b4g-ui-dialog-title", b).text("Invite your contacts to Boomerang for Gmail (" + c + " selected)")) : 190 <= c ? (a(".multi-friend-max-num:not(:visible)", b).show(), a(".b4g-ui-dialog-title", b).text("Invite your contacts to Boomerang for Gmail (" + c + " selected)")) : 0 === c ? a(".b4g-ui-dialog-title", b).text("Invite your contacts to Boomerang for Gmail") : (a(".multi-friend-max-num:visible", b).hide(), a(".multiFriendCheck:not(:checked) :disabled", b).removeAttr("disabled"),
              a(".b4g-ui-dialog-title", b).text("Invite your contacts to Boomerang for Gmail (" + c + " selected)"));
            a("#multi-friend-credit-count-value", b).text(c)
          }), a(".multi-friend-select-all", b).change(function() {
            var c = a(".multiFriendCheck:checked", b).size();
            a(this).is(":checked") ? a(".recommendedContactsCheck:not(:checked)", b).slice(0, 200 - c).attr("checked", "checked") : a(".recommendedContactsCheck:checked", b).removeAttr("checked");
            a(".multiFriendCheck", b).trigger("change")
          }), a(".multi-friend-select-all", b).trigger("change"),
          a("#multiInvitesSubmit", b).click(function() {
            n(["multi-friend-selector", "send emails"]);
            var c = [];
            a(".multiFriendCheck:checked", b).each(function() {
              c.push(a(this).val())
            });
            Q(function() {
              rf(b, c.join(", "), "You should try Boomerang for Gmail", "Hey,\r\nI thought you might like this awesome Gmail plugin I have been using.\r\n\r\nHere are some of the things you can do with Boomerang:\r\n1. Write messages now and schedule them to deliver at any time\r\n2. Schedule messages to return to your inbox at a later time\r\n3. Remind yourself to follow up on messages that don't get a response within a certain time\r\n\r\n")
            })
          }),
          a("#multiInvitesCancel", b).click(function() {
            n(["multi-friend-selector", "close"]);
            a(".dialogdiv").dialog("close")
          }))
      },
      error: function(b, c, e) {
        a(".dialogdiv").dialog("close");
        "revoked" === b.responseText ? (n(["multi-friend-selector", "error", "OAuth keys revoked"]), Ed(Fd)) : "invalid email" === b.responseText ? (n(["multi-friend-selector", "error", "invlaid email"]), u("Attempt failed: Boomerang cannot identify your email. Contact support@baydin.com for help resolving the issue.")) : (n(["multi-friend-selector", "error",
          b.responseText
        ]), u("Something went wrong. Reload the page and try again."))
      }
    })
  }

  function rf(b, d, c, e) {
    null == d.toLowerCase().match(/[a-zA-Z0-9\._+-]+@[a-zA-Z0-9\.-]+\.[a-z\.A-Z]+/g) ? alert("Please select at least one email address.") : (document.body.style.cursor = "wait", a.ajax({
      url: "https://b4g.baydin.com/sendreferralemailinvitations",
      data: {
        addresses: d,
        subject: c,
        body: e
      },
      type: "POST",
      xhr: J,
      success: function(c) {
        document.body.style.cursor = "default";
        a(".multi-friend-main", b).hide();
        a(".multi-friend-load").show().html("<h2>" +
          c + "</h2>");
        window.setTimeout(function() {
          a(".dialogdiv", b).dialog("close")
        }, 2E3)
      },
      error: function() {
        document.body.style.cursor = "default";
        alert("There was an error sending out your emails. Try again.")
      }
    }))
  }

  function Gd(b, d, c) {
    for (var e = 0; e < d.length; e++) b.append(a("<div class='contact multi-friend-list-item'><input type='checkbox' value='" + d[e].email + "' class='multiFriendCheck " + c + "'/>" + ("<span class='contact-info'>" + d[e].name + " &lt;" + d[e].email + "&gt;</span>") + "</div>"))
  }

  function rc(b, d, c) {
    a.ajax({
      method: "get",
      url: b,
      xhr: J,
      success: function(a) {
        d(a, b, c)
      }
    })
  }

  function Ed(b) {
    function d(a, d, f) {
      "success" !== a ? e(c, f) : b()
    }

    function c(c, e, f) {
      if ("success" === c) b();
      else if ("cookies" === c) alert("Attempt failed: " + c);
      else if ("Firefox" === z) u("<div id='error_dialog' style=''><ol><li>Do you have a pop-up blocker enabled?<br/><b>Click 'Options' or 'Preferences'</b> in the notification bar above, click on <b>'Allow pop-ups on mail.google.com'</b>, and <a class='auth-reload'>refresh</a>.</li> <li>Added the exception to your pop-up blocker but still getting this? <br/> <a href='https://www.boomeranggmail.com/faq.html#Troubleshoot'>Click here</a> to troubleshoot.</a></li></div>"),
        a(".auth-reload").click(function() {
          window.location.reload()
        });
      else if ("Safari" === z || "Old Safari" === z) {
        var h;
        !0 === navigator.userAgent.includes("Version/13.0.4") ? (n(["safari login attempt", "13.0.4"]), h = a("<div class='overlay' style='background:#bcbcbc; opacity:0.9;filter:alpha(opacity=90);'><div id='dialog' style='height:180px'><div id='title-bar'>Logging in...</div><div class='dialog-content'> Please <a id='safari-boomerang' class='auth-reload'>click here</a> so we can log you in with Boomerang.<p style='color:#0F3436;'>Issues with cookies in Safari 13.0.4 may be causing issues with our login process. <strong>Safari 13.0.5 fixes this issue - please update your Mac OS to Catalina 10.15.3, or use one of our other supported browsers: Chrome, Firefox, Opera, or Edge.</strong></p></div></div></div>")) :
          h = a("<div class='overlay' style='background:#bcbcbc; opacity:0.9;filter:alpha(opacity=90);'><div id='dialog' style='height:100px'><div id='title-bar'>Logging in...</div><div class='dialog-content'> Please <a id='safari-boomerang' class='auth-reload'>click here</a> so we can log you in with Boomerang.</div></div></div>");
        a("body").append(h);
        a("#safari-boomerang").click(function() {
          d(c, e, f);
          h.remove()
        })
      } else u("Attempt failed: " + pa[c])
    }

    function e(b, c) {
      var d, e = y();
      "Chrome" === z || "Opera" === z || "Edge" ===
        z ? (d = "Edge" === z ? a("<div class='overlay' style='background:#bcbcbc; opacity:0.95; filter:alpha(opacity=95);'><img id='blue-arrow' style='position:absolute;bottom:150px;right:calc(50% - 400px);visibility:hidden;' width='200px' height='266px' src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/bluegiantarrowedge.png' /><div id='dialog' style='height:auto; position:absolute; left:0; right:0;'><div id='title-bar'>Authenticating...</div><div class='dialog-content' style='text-align:center;'><img src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/auth-loader.gif'/></div></div></div>") :
          a("<div class='overlay' style='background:#bcbcbc; opacity:0.95; filter:alpha(opacity=95);'><img id='blue-arrow' style='position:absolute;top:100px;right:100px;visibility:hidden;' width='200px' height='266px' src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/bluegiantarrow2.png' /><div id='dialog' style='height:auto; position:absolute; left:0; right:0;'><div id='title-bar'>Authenticating...</div><div class='dialog-content' style='text-align:center;'><img src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/auth-loader.gif'/></div></div></div>"),
          setTimeout(Zb, 5E3)) : d = a("<div class='overlay' style='background:#bcbcbc; opacity:0.9; filter:alpha(opacity=9);'></div>");
      var f = 0,
        p = 0;
      try {
        f = window.screenY + Math.max(0, Math.floor((a(window).height() - 600) / 2)), p = window.screenX + Math.max(0, Math.floor((a(window).width() - 800) / 2))
      } catch (C) {}
      a("body").append(d);
      var t = window.open("https://b4g.baydin.com/contacts/login?guser=" + e, "", "width=800,height=600,location=1,status=1,resizable=1,top=" + f + ",left=" + p),
        w = setInterval(function() {
          if (!t && "Chrome" !== z && "Opera" !==
            z && "Edge" !== z || t.closed) d.remove(), clearInterval(w), -1 === z.indexOf("Safari") && -1 === z.indexOf("Firefox") ? rc("https://b4g.baydin.com/contacts/checklogin?guser=" + e + "&hasAlreadyAuthenticated=True", b, c) : rc("https://b4g.baydin.com/contacts/checklogin?guser=" + e, b, c)
        }, 100)
    }
    var f = y();
    rc("https://b4g.baydin.com/contacts/checklogin?guser=" + f, d, "")
  }

  function Q(b, d, c, e) {
    function f(c, e) {
      function f(b, c) {
        function d(a, c, f) {
          4 === a ? g(e, f) : 1 === a ? b() : 20 === a && sa(a)
        }

        function e(f, g, k) {
          if (1 === f) b(), qc();
          else if (20 === f) sa(f);
          else if (28 === f) u("Attempt failed: " + pa[f]), c && c("Failed to authenticate.");
          else if ("Firefox" === z) u("<div id='error_dialog' style=''><ol><li>Do you have a pop-up blocker enabled?<br/><b>Click 'Options' or 'Preferences'</b> in the notification bar above, click on <b>'Allow pop-ups on mail.google.com'</b>, and <a class='auth-reload'>refresh</a>.</li> <li>Added the exception to your pop-up blocker but still getting this? <br/> <a href='https://www.boomeranggmail.com/faq.html#Troubleshoot'>Click here</a> to troubleshoot.</a></li></div>");
          else if ("Safari" === z || "Old Safari" === z) {
            var h = a("<div class='overlay' style='background:#bcbcbc; opacity:0.9;filter:alpha(opacity=90);'><div id='dialog' style='height:100px'><div id='title-bar'>Logging in...</div><div class='dialog-content'> Please <a id='safari-boomerang' class='auth-reload'>click here</a> so we can log you in with Boomerang.</div></div></div>");
            a("body").append(h);
            a("#safari-boomerang").click(function() {
              d(f, g, k);
              h.remove()
            })
          } else u("Attempt failed: " + pa[f]), c && c("Failed to authenticate.")
        }

        function g(b, c) {
          var d, e = y();
          "Chrome" === z ? (d = a("<div class='overlay' style='background:#bcbcbc; opacity:0.95; filter:alpha(opacity=95);'><img id='blue-arrow' style='position:absolute;top:100px;right:100px;visibility:hidden;' width='200px' height='266px' src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/bluegiantarrow2.png' /><div id='dialog' style='height:auto; position:absolute; left:0; right:0;'><div id='title-bar'>Authenticating...</div><div class='dialog-content' style='text-align:center;'><img src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/auth-loader.gif'/></div></div></div>"),
            setTimeout(Zb, 5E3)) : d = a("<div class='overlay' style='background:#bcbcbc; opacity:0.9; filter:alpha(opacity=9);'></div>");
          var f = 0,
            k = 0;
          try {
            f = window.screenY + Math.max(0, Math.floor((a(window).height() - 450) / 2)), k = window.screenX + Math.max(0, Math.floor((a(window).width() - 800) / 2))
          } catch (h) {}
          a("body").append(d);
          var l = window.open("https://b4g.baydin.com/mailcruncher/login?guser=" + e, "", "width=800,height=450,location=1,status=1,resizable=1,top=" + f + ",left=" + k),
            p = setInterval(function() {
              if (!l && "Chrome" !== z || l.closed) d.remove(),
                clearInterval(p), -1 === z.indexOf("Safari") && -1 === z.indexOf("Firefox") ? U("https://b4g.baydin.com/mailcruncher/checklogin?guser=" + e + "&hasAlreadyAuthenticated=True", b, c) : U("https://b4g.baydin.com/mailcruncher/checklogin?guser=" + e, b, c)
            }, 100)
        }
        var k = y();
        U("https://b4g.baydin.com/mailcruncher/checklogin?guser=" + k, d, "")
      }
      var g = y(),
        k = {
          guser: g,
          includecsrf: "True"
        };
      e && (k.hasAlreadyAuthenticated = "True");
      a.ajax({
        url: "https://b4g.baydin.com/mailcruncher/checklogin2",
        data: k,
        type: "GET",
        xhr: J,
        success: function(b) {
          var d =
            b.csrftoken;
          a.ajaxSetup({
            beforeSend: function(a, b) {
              !/^(GET|HEAD|OPTIONS|TRACE)$/.test(b.type) && d && a.setRequestHeader("X-CSRFToken", d)
            }
          });
          var e = b.status,
            f = b.plan;
          null != f && A("b4g_plan-" + g, f);
          f = b.preferences;
          null != f && A("b4g_preferences-" + g, JSON.stringify(f));
          b = b.respondable;
          null != b && A("b4g_respondable-" + g, JSON.stringify(b));
          c(e)
        },
        error: function(a, c, e) {
          0 == a.readyState ? (u("Boomerang is not able to connect to our servers. Please check your firewall settings or your internet connection. In case of a server outage, we will post status updates via @boomerang on Twitter."),
            d()) : (A("b4g_plan-" + g, "pro - trial"), f(b, d), n(["dev", "checkloginerror", z]), console.log(y()))
        }
      })
    }

    function g(a) {
      "out-of-date" === a ? u("We've updated Boomerang behind the scenes, but your browser is caching the old version. Please reload Gmail and try again.") : "unauthenticated" === a ? k(l) : "success" === a || "paywall" === a && !c ? (b(), qc()) : "paywall" === a && (ya(a), d && d())
    }

    function l(e) {
      if ("success" === e || "paywall" === e && !c) b(), qc();
      else if ("paywall" === e) ya(e), d && d();
      else if ("cookies" === e) u("Attempt failed: " + pa[28]),
        d && d("Failed to authenticate."), console.log(y());
      else if ("Firefox" === z) u("<div id='error_dialog' style=''><ol><li>Do you have a pop-up blocker enabled?<br/><b>Click 'Options' or 'Preferences'</b> in the notification bar above, click on <b>'Allow pop-ups on mail.google.com'</b>, and <a class='auth-reload'>refresh</a>.</li> <li>Added the exception to your pop-up blocker but still getting this? <br/> <a href='https://www.boomeranggmail.com/faq.html#Troubleshoot'>Click here</a> to troubleshoot.</a></li></div>"),
        a(".auth-reload").click(function() {
          window.location.reload()
        });
      else if ("Safari" === z || "Old Safari" === z) {
        var f;
        !0 === navigator.userAgent.includes("Version/13.0.4") ? (n(["safari login attempt", "13.0.4"]), f = a("<div class='overlay' style='background:#bcbcbc; opacity:0.9;filter:alpha(opacity=90);'><div id='dialog' style='height:180px'><div id='title-bar'>Logging in...</div><div class='dialog-content'> Please <a id='safari-boomerang' class='auth-reload'>click here</a> so we can log you in with Boomerang.<p style='color:#0F3436;'>Issues with cookies in Safari 13.0.4 may be causing issues with our login process. <strong>Safari 13.0.5 fixes this issue - please update your Mac OS to Catalina 10.15.3, or use one of our other supported browsers: Chrome, Firefox, Opera, or Edge.</strong></p></div></div></div>")) :
          f = a("<div class='overlay' style='background:#bcbcbc; opacity:0.9;filter:alpha(opacity=90);'><div id='dialog' style='height:100px'><div id='title-bar'>Logging in...</div><div class='dialog-content'> Please <a id='safari-boomerang' class='auth-reload'>click here</a> so we can log you in with Boomerang.</div></div></div>");
        a("body").append(f);
        a("#safari-boomerang").click(function() {
          g(e);
          f.remove()
        })
      } else u("Attempt failed: Failed to authenticate"), console.log(y()), d && d("Failed to authenticate.")
    }

    function k(b) {
      var c,
        d = y();
      "Chrome" === z || "Opera" === z || "Edge" === z ? (c = "Edge" === z ? a("<div class='overlay' style='background:#bcbcbc; opacity:0.95; filter:alpha(opacity=95);'><img id='blue-arrow' style='position:absolute;bottom:150px;right:calc(50% - 400px);visibility:hidden;' width='200px' height='266px' src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/bluegiantarrowedge.png' /><div id='dialog' style='height:auto; position:absolute; left:0; right:0;'><div id='title-bar'>Authenticating...</div><div class='dialog-content' style='text-align:center;'><img src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/auth-loader.gif'/></div></div></div>") :
        a("<div class='overlay' style='background:#bcbcbc; opacity:0.95; filter:alpha(opacity=95);'><img id='blue-arrow' style='position:absolute;top:100px;right:100px;visibility:hidden;' width='200px' height='266px' src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/bluegiantarrow2.png' /><div id='dialog' style='height:auto; position:absolute; left:0; right:0;'><div id='title-bar'>Authenticating...</div><div class='dialog-content' style='text-align:center;'><img src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/auth-loader.gif'/></div></div></div>"),
        setTimeout(Zb, 5E3)) : c = a("<div class='overlay' style='background:#bcbcbc; opacity:0.9; filter:alpha(opacity=9);'></div>");
      var g = 0,
        k = 0;
      try {
        g = window.screenY + Math.max(0, Math.floor((a(window).height() - 600) / 2)), k = window.screenX + Math.max(0, Math.floor((a(window).width() - 800) / 2))
      } catch (l) {}
      a("body").append(c);
      d = "https://b4g.baydin.com/mailcruncher/login?guser=" + d;
      e && (d += "&getSettingsPermission=True");
      var n = window.open(d, "", "width=800,height=600,location=1,status=1,resizable=1,top=" + g + ",left=" + k),
        m = setInterval(function() {
          if (!n &&
            "Chrome" !== z && "Opera" !== z && "Edge" !== z || n.closed) c.remove(), clearInterval(m), -1 === z.indexOf("Safari") && -1 === z.indexOf("Firefox") ? f(b, !0) : f(b, !1)
        }, 100)
    }
    f(g, !1)
  }

  function Da(a, d) {
    Q(a, d, !0)
  }

  function Za(b) {
    b || (b = F());
    var d = a(".boomerangSendCheck", b);
    if (d.is(":checked")) {
      d.hide();
      d.attr("disabled", !0);
      var c = "Firefox" === z,
        e = "",
        e = "Windows" === Pa.OS ? c ? style = "height: 13px; width:13px;" : style = "height: 12px; width:12px;" : "height: 12px; width:12px; margin-bottom:-2px;";
      d.after("<img style='" + e + "' src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/checkbox-loader.gif' class='b4g_checkbox_loader' alt='Loading...'>");
      Da(function() {
        d.show();
        d.attr("disabled", !1);
        a(".b4g_checkbox_loader").remove();
        if ("premium" === la()) {
          var c = JSON.parse(R("b4g_preferences-" + y()));
          c.crm.active && "boomerang" === c.crm.bccIncludeWith && Ec(b, c.crm.bccAddress)
        }
      }, function() {
        d.show();
        d.attr("disabled", !1);
        d.attr("checked", !1);
        a(".b4g_checkbox_loader").remove();
        oa(b) && a(".b4g-tracking-toggle", b).trigger("b4g-toggle-state")
      })
    }
  }

  function Ea(a) {
    a = a.replace(/^\s+|\s+$/g, "").replace(/^in|^In|^IN/, "+");
    var d = Date.parse(a.toLowerCase().replace("tomorrow",
        "").replace("tom", "")),
      c;
    if (c = d && d < new Date) c = a.toLowerCase(), c = 0 === c.indexOf("sun") || 0 === c.indexOf("mon") || 0 === c.indexOf("tue") || 0 === c.indexOf("wed") || 0 === c.indexOf("thu") || 0 === c.indexOf("fri") || 0 === c.indexOf("sat");
    c && -1 === a.indexOf("yester") && -1 === a.indexOf("today") && (d = d.addDays(7)); - 1 !== a.toLowerCase().indexOf("tom") && (d || (d = new Date), d = d.addDays(1));
    d && null === extractTime(a) && 0 === d.getHours() && 0 === d.getMinutes() && (c = new Date, d.set({
      hour: c.getHours(),
      minute: c.getMinutes()
    }));
    d && d < (new Date).addDays(-1) &&
      d > (new Date).addYears(-1) && -1 === a.indexOf("day") && -1 === a.indexOf("now") && !hasYear(a) && (d = d.addYears(1));
    a = a.trim().toLowerCase();
    if (/^00:\d{1,2}\s*p\.?(m\.?)?$/.test(a)) return null;
    d && d < new Date && (/^\d{1,2}:\d{1,2}$/.test(a) ? (d = d.addHours(12), d < new Date && (d = d.addHours(12))) : /^\d{1,2}(:\d{1,2})?\s*(a|p)\.?(m\.?)?$/.test(a) && d.addDays(1));
    return d
  }

  function Rb(a, d) {
    var c = new Date;
    if (d.isBefore(c)) return c;
    if (a.isBefore(c) || a.isAfter(d)) a = c;
    return new Date(a.valueOf() + Math.floor(Math.random() * (d - a)))
  }

  function Hd(a, d, c, e) {
    var f = a.toLowerCase(),
      f = f.replace(/(th|rd|nd|st)/g, ""),
      f = f.replace(/augu/g, "august"),
      f = f.replace(/september/g, "sep"),
      f = f.replace(/sept/g, "sep");
    (a = hasYear(f)) || (f += ", " + e.getFullYear());
    var g = d.toLowerCase(),
      g = g.replace(/noon/g, "12:00pm"),
      g = g.replace(/midnight/g, "12:00am"),
      g = g.replace(/at|to|from|until|around/g, ""),
      g = g.replace(/[ \.\-\n\r\t]/g, ""),
      g = g.replace(/o('|\u2019)?clock|ish/g, ":00"),
      g = g.replace(/(a\.?m\.?)/g, "am"),
      g = g.replace(/(p\.?m\.?)/g, "pm");
    /^\d+$/.test(g) && (g += ":00");
    /^\d?\d:?\d*:?\d*$/.test(g) && (g = /^(8|9|10|11):?\d*:?\d*$/.test(g) && c ? g + "am" : g + "pm");
    c = Date.parse(f + " " + g);
    if (null == c) return null;
    !/((a|p)\.?m\.?)/i.test(d) && d && c < e && (c = c.addHours(12));
    !a && c < e && c.clone().addDays(21) < new Date && (c = c.addYears(1));
    return c
  }

  function Ee(a, d, c) {
    if (null == a) return [];
    var e = extractDate(a),
      f = extractTime(a),
      g = extractDay(a);
    a = !/dinner|evening|night|party/i.test(a);
    null == f && (f = "6:45am");
    var l = [],
      k = null;
    null != e ? k = Hd(e, f, a, d) : null != g && (e = new Date(d), g = Date.parse(g), g = null == g ? (new Date).addDays(7) :
      g.clearTime() < e.clearTime() ? new Date(g.addDays(7)) : new Date(g), k = Hd(g.toString("MMM d yyyy"), f, a, d));
    null != k && (d = k, f = [], a = new Date(d), f.push(new Date(a)), a = (new Date(d)).clearTime().addDays(-7).addHours(c), f.push(new Date(a)), a = (new Date(d)).clearTime().addDays(-1).addHours(c), f.push(new Date(a)), a = (new Date(d)).clearTime().addHours(c), f.push(new Date(a)), a = (new Date(d)).clearTime().addHours(12), f.push(new Date(a)), a = (new Date(d)).clearTime().addDays(1).addHours(c), f.push(new Date(a)), a = (new Date(d)).clearTime().addDays(7).addHours(c),
      f.push(new Date(a)), l = f);
    return l
  }

  function xa(a, d, c) {
    "undefined" === typeof c && (c = !0);
    var e = new Date,
      f = !1;
    4 > e.getHours() && (f = !0);
    var g = Math.floor(30 * Math.random()) - 15;
    try {
      switch (a.toLowerCase()) {
        case "in 1 hour":
          e = e.addHours(1);
          break;
        case "in 2 hours":
          e = e.addHours(2);
          break;
        case "in 4 hours":
          e = e.addHours(4);
          break;
        case "monday morning":
          e = Date.today().moveToDayOfWeek(1).addHours(d);
          c && e.addMinutes(g);
          f && (e = e.addDays(-1));
          break;
        case "tomorrow morning":
          e = Date.today().addDays(1).addHours(d);
          c && e.addMinutes(g);
          f && (e = e.addDays(-1));
          break;
        case "tomorrow afternoon":
          e = Date.today().addDays(1).addHours(12);
          c && e.addMinutes(g);
          f && (e = e.addDays(-1));
          break;
        case "in 1 day":
          e = (new Date).addDays(1);
          break;
        case "in 2 days":
          e = (new Date).addDays(2);
          break;
        case "in 4 days":
          e = (new Date).addDays(4);
          break;
        case "in 1 week":
          e = (new Date).addWeeks(1);
          break;
        case "in 2 weeks":
          e = (new Date).addWeeks(2);
          break;
        case "in 1 month":
          e = (new Date).addMonths(1);
          break;
        case "- by 5pm today":
          e = Rb(new Date, Date.today().addHours(17));
          break;
        case "- within 1 week":
          e =
            Rb(Date.today().addDays(1), Date.today().addDays(7));
          break;
        case "- within 1 month":
          e = Rb(Date.today().addDays(7), Date.today().addMonths(1));
          break;
        case "- within 1 year":
          e = Rb(Date.today().addMonths(1), Date.today().addYears(1));
          break;
        default:
          e = Ea(a)
      }
    } catch (l) {
      e = a
    }
    return e
  }

  function Ka(a, d) {
    if (null == a) return "Not a valid date/time";
    var c = Zc(a, d);
    return c += " " + ((d ? "" : "at ") + a.toString("h:mm tt"))
  }

  function Zc(a, d) {
    return a.is().today() ? d ? "Today" : "today" : Date.today().add(1).days().same().day(a) ? d ? "Tomorrow" :
      "tomorrow" : (d ? "" : "on ") + a.toString("ddd, MMM d, yyyy")
  }

  function od(a, d, c) {
    c = null == c ? Date.today() : c.clone();
    switch (a) {
      case 1:
        c = c.first();
        break;
      case 2:
        c = c.second();
        break;
      case 3:
        c = c.third();
        break;
      case 4:
        c = c.fourth();
        break;
      default:
        c = c["final"]()
    }
    switch (d) {
      case 6:
        c = c.sunday();
        break;
      case 0:
        c = c.monday();
        break;
      case 1:
        c = c.tuesday();
        break;
      case 2:
        c = c.wednesday();
        break;
      case 3:
        c = c.thursday();
        break;
      case 4:
        c = c.friday();
        break;
      case 5:
        c = c.saturday();
        break;
      default:
        return null
    }
    return c < new Date ? (c.add(1).month(), od(a,
      d, c)) : c
  }

  function wb(a) {
    a = a.match(vb);
    for (var d = "", c = 0; null != a && c < a.length; c++) d += a[c], c < a.length - 1 && (d += " ");
    return d
  }

  function De(a) {
    var d = a.search(/^Subject:/m);
    0 < d && (a = a.substring(d));
    d = a.search(/Show quoted text/);
    0 < d && (a = a.substring(0, d));
    return a
  }

  function hd(a) {
    var d, c = a.length,
      e = [],
      f = {};
    for (d = 0; d < c; d++) f[a[d]] = 0;
    for (d in f) f.hasOwnProperty(d) && e.push(d);
    return e
  }

  function J() {
    var b = a.ajaxSettings.xhr();
    b.withCredentials = !0;
    return b
  }

  function U(a, d, c) {
    var e = new Image,
      f = "&uniquestring=" + (new Date).getTime();
    e.onload = function() {
      var f = e.width;
      f >= pa.length && f < db && (f = 16);
      e.style.display = "none";
      d(f, a, c)
    };
    e.src = a + "&image=True" + f
  }

  function A(a, d) {
    if ("undefined" === typeof localStorage) n(["dev", "localStorage error", "not available"]);
    else try {
      "undefined" !== typeof a && null != a && localStorage.setItem(a, d)
    } catch (c) {
      "QUOTA_EXCEEDED_ERR" === c.name ? n(["dev", "localStorage error", "over quota"]) : n(["dev", "localStorage error", "unexpected error -- " + c.name, c.message])
    }
  }

  function R(a) {
    if ("undefined" === typeof localStorage) return null;
    try {
      return localStorage.getItem(a)
    } catch (d) {
      return null
    }
  }

  function Id(a) {
    "success" === a.status && (!0 === a.hasSeenB4GTutorial && A("hasSeenB4GTutorial", "yes"), !0 !== a.hasSeenInboxPauseFTUE && !0 !== a.hasSeenIBPTutorialTooltip || A("hasSeenIBPTutorialTooltip", "yes"), !0 === a.hasSeenTrackingTutorial ? (A("b4g-has-seen-click-open-tracking-announcement", !0), A("b4g-has-seen-click-open-tracking-tutorial", !0)) : !0 === a.hasSeenTrackingAnnouncement && A("b4g-has-seen-click-open-tracking-announcement", !0), !0 === a.hasSeenRespondableFTUE ?
      (a = Ma(), a.hasSeenFTUE = !0, A("b4g_respondable-" + y(), JSON.stringify(a)), A("b4g-has-seen-respondable-announcement", !0)) : !0 === a.hasSeenRespondableAnnouncementTooltip && A("b4g-has-seen-respondable-announcement", !0))
  }

  function Jd() {
    A("hasSeenIBPTutorialTooltip", "yes");
    if (0 === a(".ibp-ftue-tooltip").length) {
      var b = a('<div class="T-ays ibp-ftue-tooltip" role="tooltip"><div class="T-ays-iP"><div class="ibp-ftue-tooltip-text"><span class="ibp-ftue-tooltip-continue">Now in Boomerang! Pause incoming emails. Click to learn more.</span> <span class="ibp-ftue-tooltip-close">Close</span></div></div><div class="T-ays-hFsbo T-ays-atB" style="left: 106.328px;"><div class="T-ays-atD"></div><div class="T-ays-atC"></div></div></div>');
      $mainButton = a("#ibp-main");
      $mainButton.after(b);
      b.css("top", 130);
      b.find(".ibp-ftue-tooltip-close").first().click(function() {
        Kd()
      });
      b.find(".ibp-ftue-tooltip-continue").first().click(function() {
        n(["inbox pause ftue", "ftue opened with tooltip click"]);
        a("#ibp-main").click();
        a(".ibp-ftue-tooltip").first().remove()
      })
    }
  }

  function ve() {
    var b = R("hasSeenIBPTutorialTooltip"),
      d = y();
    null == b && d && a.ajax({
      method: "GET",
      url: "https://b4g.baydin.com/mailcruncher/checkIfHasSeenAnnouncementsAndFTUEs",
      data: {
        guser: d,
        specificallyCheckedValue: "hasSeenIBPTutorialTooltip"
      },
      xhr: J,
      success: function(a) {
        "success" === a.status ? (!1 === a.hasSeenIBPTutorialTooltip && (Jd(), a.hasSeenIBPTutorialTooltip = !0), Id(a)) : !0 === a.showCurrentAnnouncementOrFTUE && Jd()
      }
    })
  }

  function Kd() {
    n(["inbox pause ftue", "close tooltip"]);
    A("hasSeenIBPTutorialTooltip", "yes");
    a(".ibp-ftue-tooltip").first().remove()
  }

  function ef() {
    function b() {
      n(["inbox pause ftue", "close"]);
      a("#ibp-ftue-screen").remove()
    }

    function d(d) {
      n(["inbox pause ftue", "show", String(d)]);
      var e = a("body"),
        f = e.find(".ibp-ftue-content");
      if (!f.length) var f =
        3 === q() ? "Right_Inbox-Pause_NewUI@2x.png" : "FTUE_IP-Window@2x.png",
        t = 3 === q() ? " class='gm-ibp-ftue'" : "",
        e = a("<div id='ibp-ftue-screen'" + t + "><div class='overlay ibp-overlay-bg'></div><div class='ibp-ftue-content-container'><div class='ibp-ftue-content'><div class='ibp-ftue-content-main'><img class='ibp-ftue-main-image' src ='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/" + f + "'></div></div></div>").appendTo(e),
        f = e.find(".ibp-ftue-content");
      a(".ibp-ftue-content-buttons").remove();
      a(".ibp-ftue-content-overlay").remove();
      a(".ibp-ftue-text-container").remove();
      switch (d) {
        case 1:
          e = a(".ibp-ftue-content-main");
          e.append("<div class='ibp-ftue-content-overlay ibp-ftue-overlay-1'></div>");
          t = a("<div class='ibp-ftue-text-container ibp-ftue-text-container-1'></div>").append("<img class='ibp-ftue-arrow-image' style='padding-top:5px;' src ='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/FTUE_IP_Arrow_Left.png'>").append("<span class='ibp-ftue-text-1'>Inbox Pause stops new email from coming into your Inbox until you're ready for it.<br/><br/><div style='font-size:14px;'>Studies show that checking email only a few times a day reduces stress and boosts productivity.<ul><li>Remove interruptions so you can finish important projects</li><li>Block off times for deep focus work</li><li>Reclaim hours of lost productivity </li></ul></div></div>");
          e.append(t);
          e = c(g);
          f.append(e);
          break;
        case 2:
          e = a(".ibp-ftue-content-main");
          e.append("<div class='ibp-ftue-content-overlay ibp-ftue-overlay-2'></div>");
          t = a("<div class='ibp-ftue-text-container ibp-ftue-text-container-2'></div>").append("<img class='ibp-ftue-arrow-image' style='padding-top:10px;' src ='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/FTUE_IP_Arrow_Left.png'>").append("<span class='ibp-ftue-text-2'>Let people know your Inbox is paused</span>");
          e.append(t);
          e = c(g);
          f.append(e);
          break;
        case 3:
          3 === q() && (e = a(".ibp-ftue-main-image"), e.attr("src", "https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/Inbox-Pause_NewUI@2x.png"));
          e = a(".ibp-ftue-content-main");
          e.append("<div class='ibp-ftue-content-overlay ibp-ftue-overlay-3'></div>");
          t = a("<div class='ibp-ftue-text-container ibp-ftue-text-container-3'></div>").append("<img class='ibp-ftue-arrow-image' style='padding-top:24px;' src ='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/FTUE_IP_Arrow_Left.png'>").append("<span class='ibp-ftue-text-3'>Make exceptions for important people and messages</span>");
          e.append(t);
          e = c(g);
          f.append(e);
          break;
        case 4:
          3 === q() && (e = a(".ibp-ftue-main-image"), e.attr("src", "https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/Left_Inbox-Pause_NewUI@2x.png"));
          e = a(".ibp-ftue-content-main");
          e.append("<div class='ibp-ftue-content-overlay ibp-ftue-overlay-4'></div>");
          t = a("<div class='ibp-ftue-text-container ibp-ftue-text-container-4'></div>").append("<span class='ibp-ftue-text-4'>Get new messages on your schedule</span>").append("<img class='ibp-ftue-arrow-image' style='padding-top:20px; float:right;' src ='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/FTUE_IP_Arrow_Right.png'>");
          e.append(t);
          e = c(l);
          f.append(e);
          break;
        case 5:
          a(".ibp-ftue-main-image").remove();
          e = a(".ibp-ftue-content-main");
          t = a("<div class='ibp-ftue-faq'></div>").append("<div class='ibp-menu-header' style='padding-top:18px;'>Frequently Asked Questions</div>").append("<div class='ibp-menu-divider'></div>").append("<div class='ibp-menu-main' style='width:614px; height: 460px; overflow-y: scroll;'><p><strong>How does Inbox Pause actually work? Does Boomerang keep my emails?</strong><br>Inbox Pause uses the new Gmail Settings API, filters, and the vacation auto-responder to temporarily hide your email from your Inbox and bring them back when you want them. Here's what happens behind the scenes:</p><ul> <li>Inbox Pause creates a label (e.g., \"Inbox-Paused-2018-Jan-01\")</li> <li>Inbox Pause creates a filter that moves new emails directly to this label, skipping the Inbox</li> <li>If you have the auto-responder enabled, Inbox Pause will also turn on your vacation responder accordingly.</li></ul><p>When you click unpause, Boomerang brings all the emails it diverted back to your Inbox. It also gets rid of the filter that hid your incoming messages, removes the label, and if applicable, turns off your vacation responder. That's it! <em>None of the emails you receive while your Inbox is paused are stored by Boomerang</em>.</p><p><strong>How does this affect my Boomerang and Send Later messages?</strong><br>Your send later emails will send as scheduled. Boomeranged emails will come back to your inbox as scheduled but they will not be brought to the top of your Inbox until your Inbox is unpaused.</p><p><strong>What if I am expecting some urgent emails? Can I get some emails instantly while my Inbox is paused?</strong><br>You can use the delivery exceptions feature to allow certain senders, domains or emails with certain keywords to arrive in your Inbox instantly even when it is paused. This feature is available to users on Pro and Premium plans of Boomerang.</p><p><strong>Can I send email while my Inbox is paused?</strong><br>Inbox Pause does not affect outgoing email, so you can write and send email as usual. </p><p><strong>What happens if I need to find a message in my Inbox?</strong><br>Messages you received before you paused your Inbox will remain visible. Additionally, Inbox Pause does not affect your ability to find emails using the search feature within Gmail. You'll always be able to access your emails using search, and can also always unpause your Inbox temporarily if you need to!</p><p><strong>What happens to my email on my phone?</strong><br>Your Inbox will be paused (and email notifications stopped) across ALL your devices! If you need to unpause your Inbox from your phone, you can. Just click the link included in the email that appears at the top of your Inbox while your Inbox is paused.</p><p><strong>Why does using the Inbox Pause feature request Settings permissions?</strong><br>Boomerang needs access to the Settings features in the Gmail API in order to temporarily hide messages from your Inbox. (More specifically, Inbox Pause relies, in part, on creating filters, which requires this Settings permission.)</p></div>");
          e.append(t);
          e = c(k);
          f.append(e);
          break;
        default:
          b()
      }
      lastScreenSeen = d
    }
    var c = function(b) {
        var c = a("<div class='ibp-ftue-content-buttons'></div>");
        b.forEach(function(b) {
          c.append(a("<button/>").addClass("ftue-btn").addClass(b["class"] || "").html(b.text).click(b.onclick))
        });
        return c
      },
      e = function() {
        d.call(this, lastScreenSeen + 1)
      },
      f = function() {
        n(["inbox pause ftue", "try now"]);
        a("#ibp-ftue-screen").remove();
        Oa();
        Q(bb, ta, !1, !0)
      },
      g = [{
        text: "SKIP",
        "class": "by-button-link",
        onclick: b
      }, {
        text: "NEXT",
        "class": "by-button-primary",
        onclick: e
      }],
      l = [{
        text: "CLOSE",
        "class": "by-button-link",
        onclick: b
      }, {
        text: "LEARN MORE",
        "class": "by-button-secondary",
        onclick: e
      }, {
        text: "TRY NOW",
        "class": "by-button-primary",
        onclick: f
      }],
      k = [{
        text: "CLOSE",
        "class": "by-button-link",
        onclick: b
      }, {
        text: "TRY NOW",
        "class": "by-button-primary",
        onclick: f
      }];
    Kd();
    d(1)
  }

  function Td(a, d, c) {
    A("hasSeenB4GTutorial", "yes");
    1 === a && "Old Safari" !== z && Vb(1)
  }

  function nb(b) {
    b = b || {};
    var d = a(sf);
    b.content instanceof qa ? a(".b4g-ftue-content", d).append(b.content) : a(".b4g-ftue-content",
      d).text(b.content);
    d.css({
      left: b.left,
      top: b.top,
      right: b.right,
      bottom: b.bottom,
      width: b.width || "320px"
    }).find(".b4g-ftue-pointer").addClass("b4g-pointer-" + (b.dir || "lr")).end().find(".b4g-ftue-button").text(b.button || "").hover(function() {
      a(this).addClass("T-I-JW")
    }, function() {
      a(this).removeClass("T-I-JW")
    }).click(function(a) {
      a.preventDefault();
      b.close && setTimeout(function() {
        b.close()
      }, 0);
      d.remove()
    }).end().appendTo("body");
    return d
  }

  function ob(b) {
    if (0 >= a("#b4g_manage").length) return setTimeout(function() {
        b({
          "user-in-pop-out": !0
        })
      },
      0);
    if (ob.requestInFlight) return setTimeout(function() {
      b({
        "request-in-flight": !0
      })
    }, 0);
    if ("true" === R("b4g-has-seen-click-open-tracking-announcement")) return setTimeout(function() {
      b({
        "annouce-has-been-seen": !0
      })
    }, 0);
    var d = y();
    U("https://b4g.baydin.com/mailcruncher/hasseentrackingannouncement?guser=" + encodeURIComponent(d), function(a, d, f) {
      ob.requestInFlight = !1;
      2 === a ? b(null) : (A("b4g-has-seen-click-open-tracking-announcement", !0), b({
        "annouce-has-been-seen": !0
      }))
    });
    ob.requestInFlight = !0
  }

  function tf(b) {
    Ld = !0;
    var d = a(".b4g-tracking-toggle", b);
    b = d.offset();
    d.trigger("mouseenter");
    nb({
      bottom: a("body").height() - b.top + 2,
      right: a("body").width() - (b.left + d.outerWidth() / 2) - 24,
      content: a(uf),
      close: function() {
        d.trigger("mouseleave")
      },
      button: "Nifty!"
    });
    A("b4g-has-seen-click-open-tracking-announcement", !0);
    n(["click open tracking FTUE", "annoucement"])
  }

  function Ze(a) {
    1 < 20 * Math.random() || ob(function(d) {
      d || tf(a)
    })
  }

  function Nb(b) {
    if (0 >= a("#b4g_manage").length) return setTimeout(function() {
        b({
          "user-in-pop-out": !0
        })
      },
      0);
    if (Nb.requestInFlight) return setTimeout(function() {
      b({
        "request-in-flight": !0
      })
    }, 0);
    if (R("b4g-has-seen-click-open-tracking-tutorial")) return setTimeout(function() {
      b({
        "tutorial-has-been-seen": !0
      })
    }, 0);
    var d = y();
    U("https://b4g.baydin.com/mailcruncher/hasseentrackingtutorial?guser=" + encodeURIComponent(d), function(a, d, f) {
      Nb.requestInFlight = !1;
      2 === a ? b(null) : (A("b4g-has-seen-click-open-tracking-tutorial", !0), b({
        "tutorial-has-been-seen": !0
      }))
    });
    Nb.requestInFlight = !0
  }

  function Ye(b) {
    var d = a(".b4g-tracking-toggle",
        b),
      c = d.offset();
    d.trigger("mouseenter");
    b.parents("body > .dw").andSelf().css("z-index", 5);
    a('<div class="b4g-ui-widget-overlay"/>').css("z-index", 3).appendTo("body");
    nb({
      bottom: a("body").height() - c.top + 2,
      right: a("body").width() - (c.left + d.outerWidth() / 2) - 24,
      content: a(sc[0]),
      close: function() {
        d.trigger("mouseleave");
        vf(b)
      },
      button: "Next"
    });
    n(["click open tracking FTUE", "step1"])
  }

  function vf(b) {
    var d = a(".b4g-send-condition", b),
      c = d.offset();
    nb({
      bottom: a("body").height() - c.top + 2,
      right: a("body").width() -
        (c.left + d.outerWidth() / 2) - 24,
      content: a(sc[1]),
      close: function() {
        wf(b)
      },
      button: "Next"
    });
    n(["click open tracking FTUE", "step2"])
  }

  function wf(b) {
    Mc(a("#b4g_manage"));
    var d = a("#tmmanage").offset();
    b.parents("body > .dw").andSelf().css("z-index", null);
    a(".b4g-ui-widget-overlay").click(function(a) {
      a.stopPropagation()
    });
    nb({
      top: d.top - 8,
      left: d.left - 420,
      width: 380,
      dir: "ur",
      content: a(sc[2]),
      close: function() {
        a(".b4g-ui-widget-overlay").remove();
        A("b4g-has-seen-click-open-tracking-tutorial", !0)
      },
      button: "Ok, got it."
    });
    n(["click open tracking FTUE", "step3"])
  }

  function ca(a, d) {
    return a.replace(/\{\{(.*?)\}\}/g, function(a, b) {
      var f = b.split("."),
        g, l = d;
      do g = f.shift(), l = l[g]; while (0 < f.length && null != l);
      return l
    })
  }

  function xf(b, d) {
    d = d || {};
    var c = yf[b],
      e = (d.idx || 0) % c["share-message"].length,
      f = c["share-message"][e],
      c = {
        "dialog-message": c["dialog-message"],
        text: encodeURIComponent(f.text),
        "url-twitter": encodeURIComponent(ca(f.url, "twitter")),
        "url-fb": encodeURIComponent(ca(f.url, "fb")),
        "url-linkedin": encodeURIComponent(ca(f.url,
          "linkedin"))
      },
      c = a(ca(zf, c)).find(".b4g-viral-close").click(function(c) {
        c.preventDefault();
        a(".b4g-viral-hook").remove();
        n("Viral hook closed", b)
      }).end().appendTo("body").animate({
        top: 0
      });
    a(".b4g-viral-share-options a", c).click(function() {
      n("Viral hook share click", b, a(this).data("share-type"))
    });
    n("Viral hook shown", b);
    return {
      idx: e + 1
    }
  }

  function Ja(a) {
    var d = la();
    if ("personal" !== d && "pro" !== d && "premium" !== d) {
      var c;
      try {
        c = JSON.parse(R("b4g-viral-hook") || "{}")
      } catch (l) {
        c = {}
      }
      if ("send-later" === a.type || "return-later" ===
        a.type) c["last-" + a.type] = (new Date).getTime(), d = a.type + "-count", c[d] = c[d] || 0, c[d] += "bulk" in a ? a.bulk : 1;
      A("b4g-viral-hook", JSON.stringify(c));
      d = c["send-later-count"] || 0;
      d += c["return-later-count"] || 0;
      if (!(3 > d)) {
        var d = c.lastShown || {},
          e = new Date,
          f = e.getTime() - 24192E5,
          g;
        for (g in d)
          if (d.hasOwnProperty(g)) {
            if (null == d[g].date) {
              A("b4g-viral-hook", "{}");
              return
            }
            if (d[g].date > f) return
          } g = "none";
        "return-later" === a.type && a.isByMagic ? g = "detected-date-by-magic" : "send-later" === a.type && a.isIfNoReply ? g = "send-later-if-no-reply" :
          "send-later" === a.type && 0 < e.getHours() && 6 > e.getHours() ? g = "send-later-at-1am-5am" : "is-inbox-zero" === a.type && c["last-return-later"] && e.getTime() - 36E5 < c["last-return-later"] && (g = "inbox-zero-within-hour");
        "none" === g || g in d && d[g].date > e.getTime() - 7776E6 || (a = xf(g, d[g]), d[g] = {
          date: (new Date).getTime(),
          info: a
        }, c.lastShown = d, A("b4g-viral-hook", JSON.stringify(c)))
      }
    }
  }

  function Gc(b) {
    var d = a(".aeF");
    0 >= d.length ? setTimeout(function() {
      Gc(b)
    }, 1E3) : (new ka(function() {
      if (0 < document.location.href.indexOf("#inbox") ||
        0 < a(".TK > .ain .afM").length) 0 >= a(".J-KU-KO .aKp.aIf-aLf").length || 0 >= a(".aRv:visible").length || b()
    })).observe(d[0], {
      childList: !0,
      subtree: !0
    })
  }
  var x = F(),
    Z = null,
    ub = null,
    $b = !1,
    T = null,
    pa = "success{success{Boomerang encountered a problem during authentication. Ask Boomerang to send this message again, and we will log you back in.{Boomerang was not able to access the Sent Mail folder. Please enable IMAP and allow Sent Mail to be shown in IMAP.{403 Not Authenticated{Boomerang was not able to access the Drafts folder. Please enable IMAP and allow Drafts to be shown in IMAP.{Boomerang was not able to access the Boomerang-Outbox folder. Please enable IMAP and allow the Boomerang-Outbox label to be shown in IMAP.{Boomerang was not able to access the Inbox. Please enable IMAP. In addition, please allow All Mail to be shown in IMAP.{Boomerang was not able to access the All Mail folder. Please enable IMAP. In addition, please allow All Mail to be shown in IMAP.{Boomerang cannot uniquely identify this email, because there is another draft with the same subject and recipient. Please change the subject and try again.{Boomerang cannot uniquely identify this email, because there is another email in the Boomerang-Outbox with the same subject and recipient. Please change the subject and try again.{Boomerang was unable to find this Draft. Please allow the draft to save again after a couple seconds, then try again. If you are still unsuccessful and you don't mind sharing this message to help improve our product, please forward to support@baydin.com{Boomerang was not able to locate this email. Please try again. If you are still unsuccessful and you don't mind sharing this email to help us improve our product, please forward it to support@baydin.com.{You've reached the maximum number of messages that can be delivered at the time that you specified. Please adjust your delivery time to be at least two minutes apart from your other messages and try again.{Invalid date.{Boomerang was not able to identify the sender of this email. One possible conflict is the Gmail Labs: Authentication icon for verified senders. If you do not have this Labs enabled, please let us know at support@baydin.com.{Boomerang encountered a problem while processing this email. Please try again. If you are still unsuccessful and you don't mind sharing this email to help us improve our product, please forward it to support@baydin.com{nag_screen_1{nag_screen_2{nag_screen_3{paywall{pro{personal{basic{none{account error{Boomerang was not able to access the Boomerang folder. Please enable IMAP and allow the Boomerang label to be shown in IMAP.{Boomerang was not able to access the Boomerang Outbox folder. Please enable IMAP and allow the Boomerang-Outbox label to be shown in IMAP.{Third party cookies must be enabled for Boomerang to work, but they are not currently enabled in your browser.<br/><br/> Please enable them, or create an exception for <strong>b4g.baydin.com</strong>. For information on how to do this, please visit the help page for your browser: <br /><a target='_blank' href='http://support.google.com/chrome/bin/answer.py?hl=en&answer=95647'>Chrome</a> | <a target='_blank' href='http://support.mozilla.org/en-US/kb/Enabling%20and%20disabling%20cookies'>Firefox</a> | <a target='_blank' href='https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac'>Safari</a>{You have scheduled too many messages to be sent during that 24-hour period. This message was NOT scheduled. Please schedule your message to be sent at least 24 hours earlier or later. If you want to remove this limit, please upgrade to a paid plan.{premium{Boomerang doesn't support attaching Google+ Photos at this time. Please download this photo to your computer and drag-and-drop the saved copy into the email instead. Alternatively, add it as a regular attachment to the email.{<p style='font-size:15px; font-weight: bold;'>Attempt failed: Boomerang was unable to connect to your Gmail account.</p><p>Why is this happening?</p><p>Gmail places a limit on the number of app connections to your account at the same time. Some apps may open multiple connections to your account or even use connections when you aren't using them. Boomerang never opens multiple connections to your account.</p><p>In order for Boomerang to access your account, <strong>you will need to reduce the number of other apps accessing your account.</strong> Here is how to do this:</p><p>1. Check your recent Gmail app activity:</p><ol><li>On your computer, open Gmail.</li><li>In the bottom right, click Details.</li></ol><p>2. Stop apps from connecting to your Gmail account:</p><ol><li>Open the <a href='https://myaccount.google.com/permissions'>\"Apps with access to your account\"</a> section of your Google Account. You might need to sign in.</li><li>Choose the site or app you want to remove and click Remove Access.</li></ol><p>Please try Boomerang again after completing these steps.</p>".split("{"),
    db = 100,
    vb = /[a-zA-Z0-9\._+\-]+@[a-zA-Z0-9\.\-]+\.[a-z\.A-Z]+/g,
    Fa = Array(7);
  Fa[0] = "Monday";
  Fa[1] = "Tuesday";
  Fa[2] = "Wednesday";
  Fa[3] = "Thursday";
  Fa[4] = "Friday";
  Fa[5] = "Saturday";
  Fa[6] = "Sunday";
  var ka = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
    cb = {
      read: function(a, d) {
        setTimeout(function() {
          var c = R(a);
          d(null, c)
        }, 0)
      },
      write: function(a, d, c) {
        A(a, d);
        setTimeout(function() {
          c(null)
        }, 0)
      }
    };
  window.boomerang4gmail = window.boomerang4gmail || {};
  var a, qa, Pa = {
    init: function() {
      this.browser =
        this.searchString(this.dataBrowser) || "An unknown browser";
      this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
      this.OS = this.searchString(this.dataOS) || "an unknown OS"
    },
    searchString: function(a) {
      for (var d = 0; d < a.length; d++) {
        var c = a[d].string,
          e = a[d].prop;
        this.versionSearchString = a[d].versionSearch || a[d].identity;
        if (c) {
          if (-1 !== c.indexOf(a[d].subString)) return a[d].identity
        } else if (e) return a[d].identity
      }
    },
    searchVersion: function(a) {
      var d = a.indexOf(this.versionSearchString);
      if (-1 !== d) return parseFloat(a.substring(d + this.versionSearchString.length + 1))
    },
    dataBrowser: [{
      string: navigator.userAgent,
      subString: "Edge",
      identity: "Edge"
    }, {
      string: navigator.userAgent,
      subString: "OPR",
      identity: "Opera"
    }, {
      string: navigator.userAgent,
      subString: "Chrome",
      identity: "Chrome"
    }, {
      string: navigator.userAgent,
      subString: "OmniWeb",
      versionSearch: "OmniWeb/",
      identity: "OmniWeb"
    }, {
      string: navigator.vendor,
      subString: "Apple",
      identity: "Safari",
      versionSearch: "Version"
    }, {
      string: navigator.vendor,
      subString: "iCab",
      identity: "iCab"
    }, {
      string: navigator.vendor,
      subString: "KDE",
      identity: "Konqueror"
    }, {
      string: navigator.userAgent,
      subString: "Firefox",
      identity: "Firefox"
    }, {
      string: navigator.vendor,
      subString: "Camino",
      identity: "Camino"
    }, {
      string: navigator.userAgent,
      subString: "Netscape",
      identity: "Netscape"
    }, {
      string: navigator.userAgent,
      subString: "MSIE",
      identity: "Explorer",
      versionSearch: "MSIE"
    }, {
      string: navigator.userAgent,
      subString: "Gecko",
      identity: "Mozilla",
      versionSearch: "rv"
    }, {
      string: navigator.userAgent,
      subString: "Mozilla",
      identity: "Netscape",
      versionSearch: "Mozilla"
    }],
    dataOS: [{
      string: navigator.platform,
      subString: "Win",
      identity: "Windows"
    }, {
      string: navigator.platform,
      subString: "Mac",
      identity: "Mac"
    }, {
      string: navigator.userAgent,
      subString: "iPhone",
      identity: "iPhone/iPod"
    }, {
      string: navigator.platform,
      subString: "Linux",
      identity: "Linux"
    }]
  };
  Pa.init();
  var z = "none";
  switch (Pa.browser) {
    case "Chrome":
      z = "Chrome";
      break;
    case "Firefox":
      z = "Firefox";
      break;
    case "Safari":
      z = 5.1 > Pa.version ? "Old Safari" : "Safari";
      break;
    case "Opera":
      z = "Opera";
      break;
    case "Edge":
      z = "Edge";
      break;
    default:
      z = "Other"
  }
  window.B4G_THIS_IS_OPERA && (z = "Opera");
  var Ab = !1;
  window.onbeforeunload = function() {
    if (Ab) return "Firefox" === z && alert("You are editing a message that you previously scheduled with Boomerang. DO NOT LEAVE THIS PAGE WITHOUT RESCHEDULING. \n\nIf you do, you will CANCEL SENDING THIS MESSAGE ALTOGETHER and the message will remain in your Drafts folder."), "You are editing a message that you previously scheduled with Boomerang. DO NOT LEAVE THIS PAGE WITHOUT RESCHEDULING. \n\nIf you do, you will CANCEL SENDING THIS MESSAGE ALTOGETHER and the message will remain in your Drafts folder."
  };
  var uc = document.getElementsByTagName("head")[0],
    ua, vc, ba = String(document.location),
    Vb, Va, n = function(a) {
      window.postMessage({
        type: "B4G_TRACK_EVENT",
        trackedEventData: a
      }, "*")
    },
    xc = ".ii",
    Ae = ".iH > div",
    me = ".dK",
    Hc = ".hP",
    $d = ".gD",
    be = ".g3",
    Fe = ".nH .if > .nH > .nH > .dJ",
    Sd = function() {
      function b(b) {
        n(["welcome dialog new ftue expanded SL menu", "show", String(b)]);
        x = F();
        var g = a("body", x),
          k = g.find(".wc_screen_content");
        k.length || (g = a("<div id='wc_screen'><div class='overlay wc_overlay_bg'></div><div class='wc_screen_container'><div class='wc_screen_content'></div></div>").appendTo(g),
          k = g.find(".wc_screen_content"));
        a("#wc_screen").addClass("wc_screen_new_ftue_styles");
        3 === q() && a("#wc_screen").addClass("gm-ftue");
        a(".b4g-ftue-menu").remove();
        switch (b) {
          case 1:
            k.empty();
            var h = a(w.SEND_BAR),
              g = a(w.COMPOSE_DIALOG).append(a(w.COMPOSE_DIALOG_BG).append(a(w.CONTENT_CONTAINER).addClass("wc-intro").append("<h1>Welcome to Boomerang for Gmail!</h1><p>We are adding this row to your compose window.</p>"))).append(h),
              l = c(e);
            l.children().removeClass("b4g-btn-hidden");
            k.append(g).append(l);
            break;
          case 2:
            a(".wc-intro").remove();
            g = a(".b4g-ftue-compose-dialog-bg");
            g.append(w.SEND_LATER_DESC + w.RESPONSE_TRACKING_DESC + w.RR_DESC + w.RESPONDABLE_DESC);
            var g = c(e),
              p = g.find(".b4g-btn-primary"),
              h = a(".b4g-ftue-send-bar");
            k.append(g);
            p.attr("disabled", !0);
            var r = setInterval(function() {
              var b = h.find(".b4g-anim-init"),
                c = a(".ftue-detail:hidden").first();
              b.length ? (b.first().removeClass("b4g-anim-init").show(), setTimeout(function() {
                c.fadeIn(900)
              }, 400)) : (p.attr("disabled", !1), clearInterval(r))
            }, 1400);
            break;
          case 3:
            a(".ftue-detail").remove();
            g = c(e);
            p = g.find(".b4g-btn-primary");
            h = a(".b4g-ftue-send-bar");
            l = a(".b4g-ftue-compose-dialog-bg");
            h.find(".ftue-send-later").addClass("ftue-send-later-expanded-button");
            h.append(w.SEND_LATER_DETAIL_SCREEN_SEND_BAR_OVERLAY);
            h.addClass("b4g-ftue-send-bar-under-overlay");
            l.append(w.SEND_LATER_DROPDOWN).append(w.SEND_LATER_DROPDOWN_TEXT);
            k.append(g);
            p.attr("disabled", !0);
            SEND_LATER_MENU_HEIGHT = 513;
            var g = [
                [function() {
                  k.find(".b4g-ftue-title").show();
                  k.find(".b4g-ftue-send-later-dropdown-container").css("height",
                    SEND_LATER_MENU_HEIGHT).css("margin-top", 0)
                }, 1E3],
                [function() {
                  k.find(".b4g-ftue-send-later-no-reply").fadeIn(500);
                  k.find(".b4g-ftue-send-later-specific-times").fadeIn(500);
                  k.find(".b4g-ftue-recurring-msg").fadeIn(500)
                }, 1500],
                [function() {
                  p.attr("disabled", !1)
                }, 1E3]
              ],
              t = function(a) {
                if (a.length) {
                  var b = a.shift(),
                    c = b[0];
                  b[0] = function() {
                    c();
                    t(a)
                  };
                  setTimeout.apply(null, b)
                }
              };
            t(g);
            break;
          case 4:
            k.empty();
            var m = a(w.COMPOSE_REPLY).append(a(w.COMPOSE_REPLY_BG).append(a(w.CONTENT_CONTAINER).append(w.COMPOSE_REPLY_TEXT))),
              g = c(e),
              p = g.find(".b4g-btn-primary");
            k.append(m).append(g);
            var u = k.find(".overlay");
            u.hide();
            p.attr("disabled", !0);
            var y = 3 === q() ? 516 : 432,
              g = [
                [function() {
                  u.show();
                  m.addClass("b4g-ftue-faded");
                  k.find(".b4g-ftue-title").show();
                  k.find(".b4g-ftue-boomerang-menu").css("z-index", 10)
                }, 1E3],
                [function() {
                  k.find(".b4g-ftue-dropdown-container").css("height", y);
                  k.find(".b4g-ftue-response-tracking").fadeIn(500)
                }, 1E3],
                [function() {
                    k.find(".b4g-ftue-inline-manage-highlight").fadeIn(1E3);
                    k.find(".b4g-ftue-inline-manage").fadeIn(500)
                  },
                  1500
                ],
                [function() {
                  p.attr("disabled", !1)
                }, 1E3]
              ],
              t = function(a) {
                if (a.length) {
                  var b = a.shift(),
                    c = b[0];
                  b[0] = function() {
                    c();
                    t(a)
                  };
                  setTimeout.apply(null, b)
                }
              };
            t(g);
            break;
          case 5:
            k.empty();
            m = a(w.IBP_CONTAINER).append(a(w.IBP_SLIDE));
            g = c(e);
            p = g.find(".b4g-btn-primary");
            k.append(m).append(g);
            a("#b4g-ftue-ibp-button").show();
            a("#b4g-ftue-ibp-dialog").show();
            break;
          case 6:
            k.empty();
            m = a(w.SETTINGS);
            k.append(m).append(c(f)).addClass("b4g-ftue-final");
            var g = a("#b4g_app_loader_icon").offset(),
              l = 3 === q() ? 16 : 24,
              z = 3 === q() ?
              0 : 2;
            k.css({
              left: g.left - k.width() + l,
              top: g.top + z
            });
            break;
          default:
            Yb()
        }
        d = b
      }
      var d = 0,
        c = function(b) {
          var c = a("<div class='b4g-ftue-menu'></div>");
          b.forEach(function(b) {
            c.append(a("<button/>").addClass("ftue-btn").addClass(b["class"] || "").html(b.text).click(b.onclick))
          });
          return c
        },
        e = [{
          text: "Skip",
          "class": "b4g-btn-secondary",
          onclick: Yb
        }, {
          text: "Next",
          "class": "b4g-btn-primary",
          onclick: function() {
            b.call(this, d + 1)
          }
        }],
        f = [{
          text: "Got it!",
          "class": "b4g-btn-primary",
          onclick: Yb
        }],
        g = 3 === q() ? "Send-Later.png" : "ftue-send-later.png",
        l = 3 === q() ? "boomerang-this.png" : "ftue-boomerang.png",
        k = 3 === q() ? "boomerang-button-new.png" : "boomerang-button.png",
        h = 3 === q() ? "Inbox-Pause-Button.png" : "Pause_Button.png",
        r = 3 === q() ? "Inbox-Pause-Menu.png" : "Pause-Dialog.png",
        p = 3 === q() ? "Manage_Dropdown.png" : "settings-menu.png",
        t = function(a) {
          var b = a.indexOf(".");
          return a.slice(0, b) + "@2x" + a.slice(b) + " 2x"
        },
        w = {
          COMPOSE_DIALOG: "<div class='b4g-ftue-compose-dialog'></div>",
          COMPOSE_DIALOG_BG: "<div class='b4g-ftue-component b4g-ftue-compose-dialog-bg'><div class='overlay wc_overlay_fg'></div></div>",
          SEND_BAR: "<div class='b4g-ftue-send-bar'><img class='b4g-anim-init ftue-send-later' src='https://b4g.baydin.com/site_media/img/ftue/" + g + "' srcset='https://b4g.baydin.com/site_media/img/ftue/" + t(g) + "' style='display:none;'><img class='b4g-anim-init ftue-boomerang' src='https://b4g.baydin.com/site_media/img/ftue/" + l + "' srcset='https://b4g.baydin.com/site_media/img/ftue/" + t(l) + "' style='display:none;'><img class='b4g-anim-init ftue-rr' src='https://b4g.baydin.com/site_media/bookmarklet/tracking-toggle.png' style='display:none;'><img class='b4g-anim-init ftue-respondable' src='https://b4g.baydin.com/site_media/img/ftue/respondable.png' srcset='https://b4g.baydin.com/site_media/img/ftue/respondable@2x.png 2x' style='display:none;'></div>",
          CONTENT_CONTAINER: "<div class='wc_ftue_content'></div>",
          SEND_LATER_DESC: "<div class='ftue-detail ftue-detail-sl'><h1>Send Later</h1><p>Schedule a message to Send Later or set up recurring messages.</p><a href='https://www.youtube.com/watch?v=abqz45EN98w' target='_blank' class='ftue-watch-video-cta'>Watch Demo</a></div>",
          RESPONSE_TRACKING_DESC: "<div class='ftue-detail ftue-detail-boomerang'><h1>Response Tracking</h1><p>Track responses to your emails and return them to your Inbox if you don't hear back.</p><a href='https://www.youtube.com/watch?v=IfqOJV_3uqI' target='_blank' class='ftue-watch-video-cta'>Watch Demo</a></div>",
          RR_DESC: "<div class='ftue-detail ftue-detail-rr'><h1>Read Receipts</h1><p>Request a read receipt or see whether your links have been clicked.</p><a href='https://www.youtube.com/watch?v=YJiMO1weJhAC' target='_blank' class='ftue-watch-video-cta'>Watch Demo</a></div>",
          RESPONDABLE_DESC: "<div class='ftue-detail ftue-detail-respondable'><h1>Respondable</h1><p>Write better emails with artificial intelligence.</p><a href='https://www.youtube.com/watch?v=zIPm_mZ9dwg' target='_blank' class='ftue-watch-video-cta'>Watch Demo</a></div>",
          SEND_LATER_DETAIL_SCREEN_SEND_BAR_OVERLAY: "<div class='wc_overlay_fg ftue-send-later-bar-overlay'></div>",
          SEND_LATER_DROPDOWN: "<div class='b4g-ftue-send-later-dropdown-container'></div>",
          SEND_LATER_DROPDOWN_TEXT: "<h1 class='b4g-ftue-title b4g-ftue-send-later-title'>Use Send Later to schedule messages for later, automate follow-up emails, or create recurring messages.</h1><div class='b4g-ftue-send-later-detail b4g-ftue-send-later-no-reply'><h1>Send Later if no reply</h1><p>When replying to a message, you can schedule a response to send automatically if you don't hear back within a certain amount of time.</p></div><div class='b4g-ftue-send-later-detail b4g-ftue-send-later-specific-times'><h1>Specific Times</h1><p>Enter a specific time or date using natural language.</p></div><div class='b4g-ftue-send-later-detail b4g-ftue-recurring-msg'><h1>Recurring messages</h1><p>Send messages on a repeating schedule, such as daily, weekly, or monthly.</p><a href='https://www.youtube.com/watch?v=_2BlqvRmi-s' target='_blank' class='ftue-watch-video-cta'>Watch Demo</a></div>",
          COMPOSE_REPLY: "<div class='b4g-ftue-compose-reply'></div>",
          COMPOSE_REPLY_BG: "<div class='b4g-ftue-compose-reply-bg'><div class='overlay wc_overlay_fg'></div><div class='b4g-ftue-boomerang-menu'><img src='https://b4g.baydin.com/site_media/img/ftue/" + k + "'><div class='b4g-ftue-dropdown-container'></div></div></div>",
          COMPOSE_REPLY_TEXT: "<h1 class='b4g-ftue-title'>Boomerang can help you keep track of emails you don't need right now.</h1><div class='b4g-ftue-response-tracking'><h1>Follow-up Reminders</h1><span>You can set the message to return to your Inbox if you don't hear back within a certain amount of time.<br>You can also add a note for yourself.</span></div><div class='b4g-ftue-inline-manage'><h1>Manage your Boomerangs</h1><span>You can edit or reschedule Boomeranged messages here.</span></div><div class='b4g-ftue-inline-manage-highlight'></div>",
          IBP_CONTAINER: "<div class='b4g-ftue-ibp'></div>",
          IBP_SLIDE: "<div class='b4g-ftue-ibp-mask'></div><div style='z-index: 10;position: relative;'><img id='b4g-ftue-ibp-button' class='b4g-anim-init' src='https://b4g.baydin.com/site_media/img/ftue/" + h + "' srcset='https://b4g.baydin.com/site_media/img/ftue/" + t(h) + "' style='display:none; padding-top: 12px; padding-left: 84px;position: absolute;'><h1>Inbox Pause stops new email from coming\ninto your Inbox until you're ready for it.</h1><p><a href='https://www.youtube.com/watch?v=oddJ4GW48RM' target='_blank' class='ftue-watch-video-cta'>WATCH VIDEO</a></p><img id='b4g-ftue-ibp-dialog' class='b4g-anim-init ftue-send-later' src='https://b4g.baydin.com/site_media/img/ftue/" +
            r + "' srcset='https://b4g.baydin.com/site_media/img/ftue/" + t(r) + "' style='display: none; display: block; margin: auto; padding-top: 10px;'></div>",
          SETTINGS: "<div class='b4g-ftue-settings'><h1 class='b4g-ftue-settings-title'>That's it! If you ever need more help, we'll be right here.</h1><img src='https://b4g.baydin.com/site_media/img/ftue/" + p + "'></div>"
        };
      return b
    }(),
    Bb = function(a) {
      return 0 < a.closest(".nH[role=list]").length
    },
    re = function() {
      a(".D.E.G-atb").each(function() {
        3 !== a(this).css("z-index") &&
          a(this).css("z-index", 3)
      })
    },
    Jc = function(a) {
      var d = 3 === q() ? "gm-push-attachment-container" : "legacy-push-attachment-container";
      a.find(".GM").addClass(d)
    },
    xe = function() {
      a(".nH.Hd[role='dialog']").each(function() {
        var b = a(this);
        if (ra(b)) {
          var d = 3 === q() ? "gm-sticky-popin-bars" : "legacy-sticky-popin-bars",
            c = 3 === q() ? "gm-push-attachment-container" : "legacy-push-attachment-container",
            e = 3 === q() ? "gm-popin-space" : "legacy-popin-space";
          if (!b.parent().parent().hasClass("aVN")) b.find("." + d).removeClass(d), b.find("." + c).removeClass(c),
            b.find("." + e).remove();
          else if (!b.find(".HE").hasClass(d)) {
            var c = b.find(".qz.aXjCH"),
              f = b.find(".HE");
            b.find(".GM");
            c.append("<div class='" + e + "'></div>");
            f.addClass(d);
            Jc(b)
          }
        }
      })
    },
    eb = '<div class="sendLaterTable boomerangReply gm-send-later-table" style="overflow-y: hidden; height: 62px; background-color: #FFF;"><div class="gm-send-later-delimeter"></div><div class="send-later-button T-I J-J5-Ji T-I-atl L3 T-I-Zf-aw2 T-I-JW" role="button" style="margin-top: 0px; float: left; user-select: none; background-color: #d14836;" tabindex="0">Send Later</div><div class="Uz" style="float: left; margin-left: 0px; margin-top: 5px;"></div><div class="boomerangSendWidget" style="font-size:11px; float:left; margin-top: 8px; display:flex; flex-flow: row nowrap;"><label style="float: left; position: relative; margin-top: auto; margin-bottom: auto;"><input type="checkbox" class="boomerangSendCheck" value="boomSend" style="margin-top: 0px; margin-right: 0px; height:12px; width: 12px;"/><span style="padding-right:4px; padding-left: 4px; position: relative; vertical-align: top;"> {{boomerang_on_send}}</span></label><div class="b4g_button sendboomerang-button" style="float: left; height: 20px; font-weight: normal; margin: 0; position: relative;"><div class="conditional-caption" aria-haspopup="true" style="line-height: 20px;" role="button" tabindex="0"><span class="conditional-caption-text"> in 2 days</span><div class="VP5otc-d2fWKd tk3N6e-I-J3 J-J5-Ji"><div class="conditional-caption-arrow G-asx T-I-J3 J-J5-Ji">&nbsp;</div></div></div></div><div class="b4g_button b4g-send-condition" style="float: left; height: 20px; top: 3px; margin: -3px 8px 0px 4px; position: relative;"><select name="ifResponse" class="boomerangSendCondition" style="background: url(https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/ifnoreplyarrow.png) no-repeat right center; border:0; padding: 3px 5px 2px 1px; background-color: transparent; -webkit-appearance: none; -moz-appearance: none; vertical-align: middle; margin: 0px 5px 6px 0px;"><option value="no reply">if no reply</option><option value="no click">if not clicked</option><option value="no open">if not opened</option><option value="always">regardless</option></select></div><div class="T-I J-J5-Ji Bq lX T-I-ax7 L3 b4g_button b4g-tracking-toggle-holder" style="height: 20px; top: 3px; margin: 0 0 6px 4px; padding: 1px 0px;"><div/></div>',
    Be = "<div class='gm-send-later-space' style='height: 62px; width: 100%;'></div>",
    rb = '<div class="sendLaterTable boomerangReply" style="background-color: whiteSmoke; border: 1px solid #CFCFCF; border-width: 0 1px 1px 1px; margin: 0 -1px; overflow-y: hidden;"><table style="width:100%"><tr><td style="width: 80px"><div class="send-later-button tk3N6e-I J-J5-Ji W6eDmd tk3N6e-I-n2to0e L3 J-Zh-I J-J5-Ji Bq L3" aria-haspopup="true" style="-moz-user-select: none; background-color: #D14836; background-image: -webkit-linear-gradient(top,#DD4B39,#D14836); background-image: -moz-linear-gradient(top,#DD4B39,#D14836); background-image: -ms-linear-gradient(top,#DD4B39,#D14836); background-image: linear-gradient(top,#DD4B39,#D14836); color: white; border: 1px solid transparent; padding: 0 9px; -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px;cursor: pointer;font-size: 11px; font-weight: bold; white-space: nowrap; margin: 3px; height: 27px;line-height: 27px;min-width: 54px; outline: 0; box-shadow: none;" tabindex="0">Send Later</div></td> <td style="border-top: none; width: 7px"><div class="Uz"></div></td><td><div class="boomerangSendWidget" style="font-size:11px; float:left;"><label><input type="checkbox" class="boomerangSendCheck" value="boomSend" style="vertical-align:text-bottom;"/><span style="padding-right:4px;"> {{boomerang_on_send}}</span></label><div class="T-I J-J5-Ji Bq lX T-I-ax7 L3 b4g_button sendboomerang-button" style="padding: 1px 2px; height: 20px; font-weight: normal; margin: 0;"><div class="conditional-caption" aria-haspopup="true" style="line-height: 20px;" role="button" tabindex="0"><span class="conditional-caption-text"> in 2 days</span><div class="VP5otc-d2fWKd tk3N6e-I-J3 J-J5-Ji"><div class="conditional-caption-arrow G-asx T-I-J3 J-J5-Ji">&nbsp;</div></div></div></div><div class="T-I J-J5-Ji Bq lX T-I-ax7 L3 b4g_button b4g-send-condition" style="height: 20px; top: 3px; margin: 0 0 6px 4px; padding: 1px 0px;"><select name="ifResponse" class="boomerangSendCondition" style="background: url(https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/ifnoreplyarrow.png) no-repeat right center; border:0; padding: 2px 5px 2px 1px; background-color: transparent; color: #444; -webkit-appearance: none; -moz-appearance: none; vertical-align: middle; margin: 0px 5px 6px 0px;"><option value="no reply">if no reply</option><option value="no click">if not clicked</option><option value="no open">if not opened</option><option value="always">regardless</option></select></div><div class="T-I J-J5-Ji Bq lX T-I-ax7 L3 b4g_button b4g-tracking-toggle-holder" style="height: 20px; top: 3px; margin: 0 0 6px 4px; padding: 1px 0px;"><div/></div></td></tr></table></div>',
    ad = 15,
    bd = "You can only have fifteen total times stored in the menu right now. Please remove an existing item to add a new one.",
    Sb, tc;
  3 === q() ? (Sb = "", tc = "10px 0px 7px 10px") : (Sb = "by-button ", tc = "10px 10px 7px 10px");
  var Fb = "<div class='b4g-notes'><h3 style='margin: 7px 0 10px 0;'>Enter the note to yourself below.</h3><textarea rows='10' id='note_entry' style='border:1pxsolid#999;background-color:#fbf1b5;width:100%;box-sizing:border-box;min-width:220px; min-height: 146px;' tabindex='1'>Some text</textarea><div style='font-size:.9em'>This note will return with your message.</div><div style='text-align:right;padding:" +
    tc + ";'><button id='notes_save_button' class='" + Sb + "by-button-secondary' tabindex='1' style='width:70px;'><span class='by-button-text'>Save</span></button><button id='notes_cancel_button' class='" + Sb + "' style='width:70px;margin-left:5px;' tabindex='1'><span class='by-button-text'>Cancel</span></button></div></div>",
    Jb = "Boomerang is unable to save notes that have emojis. Please remove them and try again.",
    Ue = /\b((?:(?:https?:\/\/)|(?:www\d{0,3}[.])|(?:[a-z0-9.\-]+[.][a-z]{2,4})\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u2018\u2019]))/,
    Ve = /^http:\/\/mailstat\.us\/tr\/t\/[a-z0-9]+\/[a-z0-9]+\/(.*)$/,
    Xe = function() {
      var a = 1;
      return function() {
        return (a++).toString(36)
      }
    }(),
    ie = function() {
      function b(d, f) {
        var g = a.now();
        f = f || 0;
        d = d.filter(function(a) {
          a = c[a];
          return !a || 12E4 < g - a
        });
        0 >= d.length || (a.ajax({
          type: "post",
          url: "https://b4g.baydin.com/tr/track-sender-open",
          data: {
            email: y(),
            guids: d.join()
          },
          xhr: J,
          success: function() {},
          error: function() {
            d.forEach(function(a) {
              c[a] = 0
            });
            2 < f || b(d, f + 1)
          }
        }), d.forEach(function(a) {
          c[a] = g
        }))
      }

      function d() {
        var c = a(".aeF");
        0 >= c.length ? setTimeout(d, 1E3) : (new ka(function(c) {
          fa() && (c = a(".aHU"), 0 >= c.length || (c = c.find("[href^='http://mailstat.us/tr/opt-out']"), 0 >= c.length || (c = c.map(function() {
            if (a(this).data("has-been-ignored")) return null;
            var b = this.href.match(/\bguid=([0-9a-z]+)\b/);
            if (!b) return null;
            a(this).data("has-been-ignored", !0);
            return b[1]
          }).toArray(), 0 < c.length && b(c))))
        })).observe(c[0], {
          childList: !0,
          subtree: !0
        })
      }
      var c = {};
      return d
    }(),
    va = function() {
      var b, d = -1 < window.navigator.platform.indexOf("Mac"),
        c = function() {
          cb.write("b4g-keyboard-shortcuts-enabled",
            JSON.stringify(b),
            function(a) {
              a && console.log("Error saving keyboard-shortcuts-enabled", a)
            })
        },
        e = function(c) {
          if (b && 66 === c.which && !(0 < a("#b4g_menu:visible").length || 0 < a(c.target).closest(".editable,input:text,input[type=url],input[type=email],input[type=search],textarea,[contenteditable]").length)) {
            var d = a(".boomerang-button, .bulkboomerang").filter(":visible");
            0 >= d.length || (d.click(), c.preventDefault())
          }
        },
        f = function(c, e) {
          if (b && 83 === c.which && (d && c.metaKey && !c.ctrlKey || !d && (c.metaKey || c.ctrlKey)) && !(0 <
              a("#b4g_menu:visible").length || 0 > a(".send-later-button:visible").length)) {
            var f = Ca(c.target, null);
            null !== f && (a(".send-later-button", f).click(), c.preventDefault())
          }
        },
        g = function(a) {
          var c = ra(a);
          c.data("has-shortcut-listener") || (c.data("has-shortcut-listener", !0), c.keydown(function r(d) {
            b && (d.target = a, f(d), c.unbind("keydown", r).keydown(r))
          }))
        };
      return {
        init: function() {
          cb.read("b4g-keyboard-shortcuts-enabled", function(c, d) {
            b = !1;
            try {
              b = JSON.parse(d)
            } catch (g) {}
            b && a(document).bind("keydown keyup keypress", e).bind("keydown keyup keypress",
              f)
          })
        },
        disable: function() {
          b = !1;
          a(document).unbind("keydown keyup keypress", e).unbind("keydown keyup keypress", f);
          c()
        },
        enable: function() {
          b = !0;
          a(document).bind("keydown keyup keypress", e).bind("keydown keyup keypress", f);
          c()
        },
        is_enabled: function() {
          return b
        },
        add_compose_listen: function(c) {
          0 < a(".editable iframe", c).length && g(c);
          a(c).bind("keydown keyup keypress", function(a) {
            b && f(a)
          })
        },
        enable_menu_arrow_keys: function() {
          a("#b4g_menu").keydown(function(b) {
            if (b.which === a.ui.keyCode.UP || b.which === a.ui.keyCode.TAB ||
              b.which === a.ui.keyCode.DOWN || b.which === a.ui.keyCode.ESCAPE || b.which === a.ui.keyCode.SPACE || b.which === a.ui.keyCode.LEFT || b.which === a.ui.keyCode.RIGHT) {
              var c = a(".b4g-menu-option:visible", this),
                d = a(".b4g-state-selected", this),
                e = d.attr("id"),
                f = b.which === a.ui.keyCode.DOWN || b.which === a.ui.keyCode.TAB && !b.shiftKey || b.which === a.ui.keyCode.LEFT;
              0 === d.length ? f = f ? 0 : -1 : (f = f ? 1 : -1, f = (c.index(d) + f) % c.length);
              if (3 === q()) {
                var g = 0 === a(".b4g-notes:hidden").length && 0 < a("#b4g_menu").find("#gm-boomerang-note-checkbox").length,
                  w = b.which === a.ui.keyCode.SPACE && ("gm-boomerang-reply-checkbox" === e || "gm-boomerang-note-checkbox" === e),
                  e = "gm-boomerang-note-checkbox" === e;
                if (g) {
                  for (var d = b.which === a.ui.keyCode.TAB && !b.shiftKey, f = b.which === a.ui.keyCode.TAB && b.shiftKey, e = a(".b4g-notes").find(":focus"), c = a(".b4g-notes").find("[tabindex='1']"), m, g = 0; g < c.length; g++)
                    if (c.get(g) === e.get(0)) {
                      m = g;
                      break
                    } m = m ? m : 0;
                  d ? (m = m === c.length - 1 ? 0 : m + 1, c.get(m).focus(), b.preventDefault(), b.stopPropagation()) : f && (m = 0 === m ? c.length - 1 : m - 1, c.get(m).focus(), b.preventDefault(),
                    b.stopPropagation());
                  return
                }
                if (w) {
                  m = d.children().first();
                  c = "true" !== m.attr("aria-checked");
                  f = "gm-boomerang-reply-checkbox" === d.attr("id");
                  m.toggleClass("gm-checkbox-checked");
                  f && (n(["thread menu", "conditional boomerang", c ? "checked" : "un-checked"]), A("b4g_standard_boomerang_sticky_conditional-" + y(), c));
                  c ? e ? a("#notes_toggle").trigger("click") : (m.addClass("gm-checkbox-checked").attr("aria-checked", "true"), d.addClass("gm-checkbox-background-checked").removeClass("gm-checkbox-background-unchecked")) : (m.attr("aria-checked",
                    "false"), d.addClass("gm-checkbox-background-unchecked").removeClass("gm-checkbox-background-checked"), a("#note_entry", x).val(""), e && a("#gm-boomerang-edit-note").hide());
                  b.preventDefault();
                  b.stopPropagation();
                  return
                }
              }
              m = (1 === d.find("#datepicker").length || a("#datepicker").is(":focus")) && (b.which === a.ui.keyCode.LEFT || b.which === a.ui.keyCode.RIGHT);
              d = b.which === a.ui.keyCode.SPACE;
              e = a("#note_entry").is(":focus");
              d || m || e || (b.preventDefault(), b.stopPropagation(), (b.which === a.ui.keyCode.LEFT || b.which === a.ui.keyCode.RIGHT) &&
                3 !== q()) || (b.which === a.ui.keyCode.ESCAPE ? X() : c.removeClass("b4g-state-selected").eq(f).addClass("b4g-state-selected").find("a, input[type='text'], input[type='checkbox'], div[role='checkbox']").focus())
            }
          });
          a("#datepicker").click(function(b) {
            a(".b4g-state-selected").removeClass("b4g-state-selected");
            a("#datepicker").parents().eq(2).addClass("b4g-state-selected")
          })
        }
      }
    }(),
    M;
  M = 1 === q() ? function() {
    function b() {
      y() && void 0 !== v && !v.enabled && (v.enabled = !0, k(v), d(v))
    }

    function d(a) {
      var b = y();
      cb.write("b4g-inline-manage-data:" +
        b, JSON.stringify(a),
        function(a) {
          a && console.warn("Error writting b4g inline-mange data: ", a)
        })
    }

    function c(a) {
      var b = Date.now();
      if (b >= U || b + a <= U) setTimeout(function() {
        k(v)
      }, a), U = b + a
    }

    function e() {
      var b = a(".aeF");
      0 >= b.length ? setTimeout(e, 1E3) : (k(v), (new ka(f)).observe(b[0], {
        childList: !0,
        subtree: !0
      }), H(b))
    }

    function f() {
      1 <= a(".aHU").length && fa() && (v && !v.enabled && -1 < window.location.hash.indexOf("/Boomerang") && b(), k(v))
    }

    function g(a) {
      var b = y();
      cb.read("b4g-inline-manage-data:" + b, function(b, c) {
        b && console.log("Error loading inline manage data",
          b);
        var d;
        try {
          d = JSON.parse(c || "{}")
        } catch (e) {
          d = {}
        }
        v = v || d || {};
        v.enabled = d.enabled || !1;
        v["last-updated"] = d["last-updated"] || 0;
        v["thread-ids"] = d["thread-ids"] || {};
        a(v)
      })
    }

    function l(a) {
      if (void 0 === v) g(function() {
        l(a)
      });
      else {
        var b = {},
          c = v["thread-ids"];
        a.forEach(function(a) {
          b[a] = c[a] || {}
        });
        v["thread-ids"] = b;
        d(v);
        return b
      }
    }

    function k(a) {
      void 0 === a ? g(function(a) {
        k(v)
      }) : v.enabled && (r(v["thread-ids"]), N["managed-thread-ids"] || (a = Date.now() - v["last-updated"], 18E6 > a ? c(18E6 - a) : h(function(a, b) {
        if (a) c(6E5);
        else if (b)
          if (b.success) {
            var d =
              l(b["thread-ids"]);
            c(18E6);
            r(d)
          } else c(6E5);
        else c(6E5)
      })))
    }

    function h(b) {
      a.ajax({
        type: "get",
        url: "https://b4g.baydin.com/inline-manage/managed-thread-ids",
        data: {
          email: y(),
          uid: Ba
        },
        xhr: J,
        success: function(a) {
          b(!1, a)
        },
        error: function(a, c, d) {
          b({
            status: c,
            error: d
          })
        },
        complete: function() {
          N["managed-thread-ids"] = void 0;
          delete N["managed-thread-ids"];
          v && (v["last-updated"] = Date.now(), d(v))
        },
        dataType: "json"
      });
      N["managed-thread-ids"] = !0
    }

    function r(b) {
      var c = fa();
      if (b = b[c]) {
        a(".cf.hX:contains('Boomerang')").not(":contains('Boomerang-Returned')").find(".hV.hM").hide().end().find(".hU.hM:contains('Boomerang')").css({
          "background-color": "#FBF1B5",
          color: "#666"
        }).filter(":contains('Boomerang-Outbox')").css({
          "background-color": "#FFD76E",
          color: "#666"
        });
        var d = b["last-updated"] || 0;
        9E5 < Date.now() - d && p(c);
        b.returns && Y(b.returns, d);
        b.sends && P(b.sends, d);
        b.recurrings && Z(b.recurrings, d);
        b.tracks && G(b.tracks, d)
      }
    }

    function p(b) {
      N[b] || (a.ajax({
        type: "get",
        url: "https://b4g.baydin.com/inline-manage/manage-info",
        data: {
          "thread-id": b,
          email: y()
        },
        xhr: J,
        success: function(a) {
          a.success && (a.success = void 0, delete a.success, v["thread-ids"][b] = a, d(v), r(v["thread-ids"]))
        },
        error: function() {
          c(6E5)
        },
        complete: function() {
          N[b] = void 0;
          delete N[b];
          var a = v["thread-ids"][b] || {};
          a["last-updated"] = Date.now();
          v["thread-ids"][b] = a;
          d(v)
        },
        dataType: "json"
      }), N[b] = !0)
    }

    function t(b, c, d) {
      d = d || {};
      var e = c.offset();
      b.addClass("b4g-inline-popup").appendTo("body").css({
        top: e.top + c.outerHeight() + (d.top || 0),
        left: e.left - b.outerWidth() + c.outerWidth() + (d.left || 0)
      });
      a(document).click(function ja(d) {
        c[0] === d.target || b[0] === d.target || a.contains(c[0], d.target) || a.contains(b[0], d.target) || !a.contains(document,
          d.target) || 0 < a(d.target).closest(".b4g-ui-datepicker").length || (d.preventDefault(), b.remove(), a(document).unbind("click", ja))
      })
    }

    function w(b, c, e) {
      var f = a(Fb);
      f.addClass("b4g-inline-notes-edit").find("textarea").val(b.notes).end().find("#notes_save_button").click(function() {
        var c = a("#note_entry", x).val();
        if (Ib(c)) u(Jb);
        else {
          var g = b.notes;
          b.notes = a("textarea", f).val();
          a(".b4g-inline-notes-text", e).text(b.notes);
          d(v);
          var k = function() {
            alert("Sorry, there was an error. We can't save your note. Try again later.");
            b.notes = g;
            a(".b4g-inline-notes-text", e).text(g);
            d(v)
          };
          Q(function() {
            a.ajax({
              type: "post",
              url: "https://b4g.baydin.com/inline-manage/update-notes",
              data: {
                "return-later-id": b.id,
                notes: b.notes
              },
              xhr: J,
              success: function(a) {
                a.success || k()
              },
              error: k,
              dataType: "json"
            })
          }, k);
          f.remove()
        }
      }).end().find("#notes_cancel_button").click(function() {
        f.remove()
      }).end();
      t(f, c, {
        top: 5
      });
      return f
    }

    function m(b, c, d) {
      var e = null != b.condition,
        f = null != b["is-conditional"],
        g = b["return-time"] || b["send-time"],
        g = isNaN((new Date(g)).getTime()) ?
        (new Date).toString("MMM d, yyyy h:mm tt") : (new Date(g)).toString("MMM d, yyyy h:mm tt"),
        k = a(".g3:visible"),
        h = 0 < k.length,
        k = k[0] === c.closest(".adn").find(".g3")[0],
        h = f && h && !k,
        l = a(ea.reschedule);
      l.find(".b4g-reschedule-date").val(g).bind("change keyup", function() {
        var b = Ea(a(this).val()),
          c = Ka(b, !0);
        a(".b4g-reschedule-preview", l).text(c).toggleClass("b4g-state-invalid", null == b || b < new Date)
      }).end().find(".b4g-return-condition").toggle(e).end().find(".b4g-send-ifnoreply, .b4g-ifnoreply-warning").toggle(h).end().find(".b4g-send-ifnoreply input").change(function() {
        a(this).is(":checked") &&
          ((new Date).toString("MM/d a\\t h:mmtt"), a(".b4g-ifnoreply-warning").html("This message will be sent if no replies are received between <strong>now and the scheduled time</strong>."))
      }).end().find("[type='submit']").click(function() {
        a(this).closest("form").submit()
      }).end().find("form").bind("submit", function(b) {
        b.preventDefault();
        b = Ea(a(".b4g-reschedule-date", l).val());
        var c;
        e && (c = a(".b4g-return-condition", l).val());
        f && (c = a(".b4g-send-ifnoreply input", l).attr("checked"));
        b ? d({
            date: b,
            condition: c
          }) :
          alert("Please enter in a valid date.")
      }).end().find(".b4g-reschedule-cancel").click(function() {
        l.remove()
      }).end();
      $a(l.find(".b4g-reschedule-date"));
      e && -1 < "OC".indexOf(b.condition) && a(".b4g-return-condition", l).append('<option value="O">Only if not opened</option>').append('<option value="C">Only if not clicked</option>');
      e && a(".b4g-return-condition", l).val(b.condition);
      f && a(".b4g-send-ifnoreply input", l).attr("checked", b["is-conditional"]);
      t(l, c, {
        left: 1
      });
      return l
    }

    function n(a) {
      var b = v["thread-ids"];
      b[a]["last-updated"] = Date.now();
      r(b)
    }

    function q(b, c) {
      var d = b.responseText || b.error || b;
      "string" !== a.type(d) && (d = c || "Sorry, there was an error. We can't save your update. Try again later.");
      alert(d)
    }

    function D(b, c, e) {
      var f = a(e).closest(".b4g-inline-part").data("manage-data"),
        g = fa(),
        k, h;
      "send" === c ? (k = "send-time", h = "is-conditional") : "return" === c && (k = "return-time", h = "condition");
      var l = f[h],
        p = f[k],
        t = function(a) {
          q(a);
          f[h] = l;
          f[k] = p;
          d(v);
          n(g)
        };
      c = a(e).closest(".by-button");
      var w = m(f, c, function(c) {
        f[h] = c.condition;
        f[k] = c.date.getTime();
        d(v);
        a(".b4gid-" + f["hex-gmail-id"]).remove();
        r(v["thread-ids"]);
        Q(function() {
          a.ajax({
            type: "post",
            url: "https://b4g.baydin.com" + b,
            data: {
              id: f.id,
              offset: c.date.getTime(),
              condition: c.condition
            },
            xhr: J,
            success: function(a) {
              a.success || t(a)
            },
            error: t,
            dataType: "json"
          })
        }, t);
        w.remove()
      })
    }

    function L(b, c, e, f) {
      var g = a(e).closest(".b4g-inline-part").data("manage-data"),
        k = fa();
      e = v["thread-ids"];
      var h = e[k][c + "s"];
      c = h.indexOf(g); - 1 < c && h.splice(c, 1);
      d(v);
      a(".b4gid-" + g["hex-gmail-id"]).remove();
      a(".m" +
        g["hex-gmail-id"]).removeClass("b4g-inline-pending-content");
      r(e);
      var l = function(a) {
        q(a);
        h.push(g);
        d(v);
        n(k)
      };
      Q(function() {
        a.ajax({
          type: "post",
          url: "https://b4g.baydin.com" + b,
          data: {
            id: g.id
          },
          xhr: J,
          success: function(a) {
            a.success || l(a);
            f && f()
          },
          error: l,
          dataType: "json"
        })
      }, l)
    }

    function B(b, c, e) {
      a(".by-button-text", e).text("Cancelling...");
      var f = a(e).closest(".b4g-inline-part").data("manage-data"),
        g = fa(),
        k = function(a) {
          q(a);
          n(g)
        };
      Q(function() {
        a.ajax({
          type: "post",
          url: "https://b4g.baydin.com" + b,
          data: {
            id: f.id
          },
          xhr: J,
          success: function(a) {
            a.success || k(a);
            a = v["thread-ids"][g][c + "s"];
            var b = a.indexOf(f); - 1 < b && a.splice(b, 1);
            d(v);
            window.location.reload()
          },
          error: k,
          dataType: "json"
        })
      }, k)
    }

    function F(b) {
      var c = jd(function() {
        var e = a.extend({}, b),
          f = fa(),
          g = Date.parse(a("#start_date_input").val() + " " + a("#start_time_input").val());
        if (!g || g < new Date) alert("Invalid start date");
        else {
          var k = Kb(),
            h = a("#num_interval").val(),
            l = Lb(g);
          if (l) {
            var p = null;
            "monthweek" == a("#frequency").val() && (p = a("#set_position").val());
            var t = "None",
              da =
              "None";
            if (a("#radio_num_occurences").attr("checked")) t = a("#num_occurences").val(), da = E(g, h, k, l, t);
            else if (a("#radio_end_date").attr("checked")) {
              da = Date.parse(a("#end_date").val() + " " + a("#start_time_input").val());
              if (null == da) {
                alert("Invalid end date");
                return
              }
              da = da.getTime()
            }
            var w = function(c) {
              q(c);
              a.extend(b, e);
              d(v);
              n(f)
            };
            Q(function() {
              var c = {
                id: b.id,
                frequency: k,
                interval: h,
                utc_weekday: l,
                start: g.getTime(),
                end: da,
                num_occurences: t
              };
              p && (c.setPosition = p);
              a.ajax({
                type: "post",
                url: "https://b4g.baydin.com/inline-manage/reschedule-recurring",
                data: c,
                xhr: J,
                success: function(a) {
                  a.success ? (b["next-send"] = a["next-send"], b.end = a.end, a = v["thread-ids"], a[f]["last-updated"] = Date.now(), r(a)) : w(a)
                },
                error: w,
                dataType: "json"
              })
            }, w);
            b.frequency = ["YEARLY", "MONTHLY", "WEEKLY", "DAILY"].indexOf(k);
            b.interval = h | 0;
            b.setPosition = p;
            b.start = g.getTime();
            b.end = "None" === da ? void 0 : da;
            b.weekdays = a.parseJSON(l.replace("(", "[").replace(")", "]"));
            d(v);
            b["next-send"] = NaN;
            n(f);
            c.remove()
          } else alert("You must select a day of the week.")
        }
      });
      a("#num_interval", c).val(b.interval);
      var e = b.setPosition;
      a("#frequency", c).val(W[b.frequency]);
      null != e && (a("#set_position", c).val(e), a("#frequency", c).val("monthweek"));
      e = new Date(b["next-send"]);
      a("#start_date_input", c).val(e.toString("M/d/yyyy"));
      a("#start_time_input", c).val(e.toString("h:mm tt"));
      b.end ? (a("#end_date", c).val((new Date(b.end)).toString("M/d/yyyy")), a("#radio_end_date", c).attr("checked", !0)) : a("#radio_no_end", c).attr("checked", !0);
      var f = a("input.day_cb", c);
      T(b.weekdays, new Date(b.start)).forEach(function(b) {
        f.filter("[value=" +
          b + "]").attr("checked", !0);
        a("#set_position_day").val(b)
      });
      a("#frequency", c).change();
      f.change()
    }

    function E(a, b, c, d, e) {
      var f = "None";
      a = new Date(a.getTime());
      if ("DAILY" === c) {
        for (d = 0; d < e; d++) a.add(b).days();
        f = a.getTime()
      } else if ("WEEKLY" === c) {
        b = 0;
        for (d = d.replace(/[()]/g, "").split(","); b < e;) c = a.getDay(), c = 0 === c ? 6 : c - 1, -1 !== d.indexOf(c.toString()) && b++, a.add(1).days();
        f = a.getTime()
      } else if ("MONTHLY" === c) {
        for (d = 0; d < e; d++) a.add(b).months();
        f = a.getTime()
      } else if ("YEARLY" === c) {
        for (d = 0; d < e; d++) a.add(b).years();
        f = a.getTime()
      }
      return f
    }

    function K(b) {
      var c = fa(),
        e = b["next-send"];
      b["next-send"] = NaN;
      n(c);
      var f = function(a) {
        q(a);
        b["next-send"] = e;
        n(c)
      };
      Q(function() {
        a.ajax({
          type: "post",
          url: "https://b4g.baydin.com/inline-manage/reschedule-skip-next",
          data: {
            id: b.id
          },
          xhr: J,
          success: function(a) {
            a.success ? (b["next-send"] = a["next-send"], n(c), d(v)) : f()
          },
          error: f,
          dataType: "json"
        })
      }, f)
    }

    function H(b) {
      b.delegate(".b4g-inline-notes button", "click", function(c) {
        c = a(this).closest(".b4g-inline-notes").data("manage-data");
        w(c, a(this),
          b)
      });
      b.delegate(".b4g-inline-return .b4g-inline-reschedule", "click", function() {
        D("/inline-manage/reschedule-return-later", "return", this)
      }).delegate(".b4g-inline-send .b4g-inline-reschedule", "click", function() {
        D("/inline-manage/reschedule-send-later", "send", this)
      });
      b.delegate(".b4g-inline-return .b4g-inline-returnnow,", "click", function() {
        L("/inline-manage/return-now", "return", this)
      }).delegate(".b4g-inline-return .b4g-inline-noreturn,", "click", function() {
        L("/inline-manage/return-never", "return", this)
      }).delegate(".b4g-inline-send .b4g-inline-sendnow",
        "click",
        function() {
          L("/inline-manage/send-now", "send", this)
        }).delegate(".b4g-inline-send .b4g-inline-nosend,", "click", function() {
        B("/inline-manage/send-never", "send", this)
      });
      b.delegate(".b4g-inline-recurring .b4g-inline-reschedule", "click", function() {
        var b = a(this).closest(".b4g-inline-part").data("manage-data");
        F(b)
      }).delegate(".b4g-inline-recurring .b4g-inline-skip", "click", function() {
        var b = a(this).closest(".b4g-inline-part").data("manage-data"),
          c = a(ca(ea["recurring-skip-next-confirmation"], {
            "pretty-skip-date": (new Date(b["next-send"])).toString("MMM dd yyyy")
          }));
        c.find(".b4g-cancel").click(function() {
          c.remove()
        }).end().find(".by-button-secondary").click(function() {
          K(b);
          c.remove()
        }).end().dialog({
          modal: !0,
          closeOnEscape: !0,
          width: 400,
          dialogClass: "b4g-no-title"
        })
      }).delegate(".b4g-inline-recurring .b4g-inline-cancel", "click", function() {
        var b = a(this),
          c = a(ea["recurring-cancel-confirmation"]);
        c.find(".b4g-cancel").click(function() {
          c.remove()
        }).end().find(".by-button-secondary").click(function() {
          B("/inline-manage/recurring-cancel", "recurring", b);
          c.remove()
        }).end().dialog({
          modal: !0,
          closeOnEscape: !0,
          width: 400,
          dialogClass: "b4g-no-title"
        })
      })
    }

    function I(b, c, d) {
      var e;
      e = c["hex-gmail-id"];
      var f = a(".b4g-inline-manage.b4gid-" + e + ".date-" + d);
      0 < f.length || (a(".b4g-inline-manage.b4gid-" + e).remove(), f = a(ca(ea.container, {
        "b4g-id": e,
        "last-updated": d
      })), a(".m" + e).removeClass("b4g-inline-pending-content").before(f));
      e = f;
      f = e.children(".b4g-inline-" + b);
      if (0 < f.length) return f;
      f = a(ca(ea[b], {
        data: c,
        type: b,
        "last-updated": d
      })).data("manage-data", c);
      e.children(".b4g-inline-placeholder-" + b).replaceWith(f);
      return f
    }

    function Y(b, c) {
      b.forEach(function(b) {
        var d = new Date(b["return-time"]);
        d < new Date || (b["pretty-return-time"] = d.toString("ddd, MMM d, yyyy h:mm tt"), b["pretty-conidition"] = ha[b.condition || "N"], d = I("return", b, c), b.notes && (d = d.closest(".b4g-inline-manage"), b = a(ca(ea.notes, b)).data("manage-data", b), d.children(".b4g-inline-placeholder-notes").replaceWith(b)))
      })
    }

    function R(b, c) {
      var d = a(".m" + b);
      if (!(d.hasClass("b4g-inline-pending-content") || (d.addClass("b4g-inline-pending-content").removeClass("adM").closest(".adn").find(".g3").hide(),
          0 < d.has(".b4g-inline-edit-message").length))) {
        var e = a(ea["edit-email-button"]),
          f;
        e.find("button").click(function(d) {
          d.preventDefault();
          f ? f.focus() : Q(function() {
            function d() {
              if (!f || f.closed) M.expire_cache(), f = null, clearInterval(g), window.location.hash = "#label/Boomerang-Outbox", aa()
            }
            var e = "https://b4g.baydin.com/editmessage/" + c + "/" + b;
            f = window.open(e, "_blank");
            var g;
            if ("Safari" !== z && "Old Safari" !== z && f) g = setInterval(d, 500);
            else {
              var k = a("<div class='overlay' style='background:#bcbcbc; opacity:0.9;filter:alpha(opacity=90);'><div id='dialog' style='height:100px'><div id='title-bar'><span id='safari-dialog-close' class='auth-reload' style='position: relative; left: -60px;'>X</span> Leaving to edit...</div><div class='dialog-content'> Please <a id='safari-boomerang' class='auth-reload'>click here</a> to begin editing your message.</div></div></div>");
              a("body").append(k);
              a("#safari-boomerang").click(function() {
                f = window.open(e, "_blank");
                k.remove();
                g = setInterval(d, 500)
              });
              a("#safari-dialog-close").click(function() {
                k.remove()
              })
            }
          })
        });
        d.append(e)
      }
    }

    function P(a, b) {
      a.forEach(function(a) {
        var c = new Date(a["send-time"]);
        c < new Date || (a["pretty-send-time"] = c.toString("ddd, MMM d, yyyy h:mm tt"), a["pretty-conidition"] = a["is-conditional"] ? "if no reply" : "", I("send", a, b), R(a["hex-gmail-id"], "sendlater"))
      })
    }

    function T(a, b) {
      return b.getUTCDay() > b.getDay() || 0 === b.getUTCDay() &&
        6 === b.getDay() ? a.map(function(a) {
          return (a + 6) % 7
        }) : b.getUTCDay() < b.getDay() || 6 === b.getUTCDay() && 0 === b.getDay() ? a.map(function(a) {
          return (a + 1) % 7
        }) : a
    }

    function X(a) {
      var b = "Every ",
        b = 1 >= a.interval ? b + W[a.frequency] : b + (a.interval + " " + W[a.frequency] + "s"),
        c = a.weekdays;
      if (7 <= c.length) return b;
      var d = new Date(a.start);
      if (1 != a.frequency || null == a.setPosition) c = T(c, d);
      switch (String(a.setPosition)) {
        case "-1":
          b += " last ";
          break;
        case "1":
          b += " first ";
          break;
        case "2":
          b += " second ";
          break;
        case "3":
          b += " third ";
          break;
        case "4":
          b +=
            " fourth "
      }
      var e = "Mon Tue Wed Thu Fri Sat Sun".split(" ");
      return b += " " + c.map(function(a) {
        return e[a]
      }).join(", ")
    }

    function Z(a, b) {
      a.forEach(function(a) {
        var c = new Date(a.start),
          d = new Date(a["next-send"]),
          e = a.end && new Date(a.end);
        a["pretty-recurring-time"] = X(a);
        a["pretty-start-time"] = c.toString("MMM d, yyyy");
        a["pretty-next-time"] = isFinite(d) ? d.toString("MMM d, yyyy") : "???";
        a["pretty-end-time"] = e ? e.toString("MMM d, yyyy") : "Never";
        I("recurring", a, b);
        R(a["hex-gmail-id"], "recurring")
      })
    }

    function G(a, b) {
      a.forEach(function(a) {
        var c =
          a["open-data"],
          d = new Date(c["last-open"]);
        c["pretty-first-time"] = (new Date(c["first-open"])).toString("MMM d aroun\\d h:mm tt");
        c["pretty-last-time"] = d.toString("MMM d aroun\\d h:mm tt");
        a["total-link-clicks"] = 0;
        a["link-click-content"] = a["links-data"].map(function(b) {
          a["total-link-clicks"] += b.clicks;
          var c = new Date(b["last-click"]);
          b["pretty-first-time"] = (new Date(b["first-click"])).toString("MMM d aroun\\d h:mm tt");
          b["pretty-last-time"] = c.toString("MMM d aroun\\d h:mm tt");
          return ca(ea["link-tracking"],
            b)
        }).join("");
        I("tracking", a, b).children(".b4g-inline-tracking-opens").toggleClass("b4g-tracking-unopen", 0 >= c.opens).end().children(".b4g-inline-tracking-clicks").toggleClass("b4g-tracking-unclick", 0 >= a["total-link-clicks"])
      })
    }
    var ha = {
        R: "if there's no reply",
        O: "if not opened",
        C: "if not clicked",
        N: ""
      },
      W = ["year", "month", "week", "day"],
      ea = {
        container: "<div class='b4g-inline-manage b4gid-{{b4g-id}} date-{{last-updated}}'><div class='b4g-inline-placeholder-return'/><div class='b4g-inline-placeholder-send'/><div class='b4g-inline-placeholder-recurring'/><div class='b4g-inline-placeholder-tracking'/><div class='b4g-inline-placeholder-notes'/></div>",
        "return": "<div class='b4g-inline-return b4g-inline-part'><div class='b4g-inline-content'>Scheduled to return: <span class='b4g-inline-date'>{{data.pretty-return-time}}</span> {{data.pretty-conidition}}</div><div class='b4g-inline-controls'><button class='by-button b4g-inline-reschedule by-button-secondary'><span class='by-button-text'>Reschedule</span></button><button class='by-button b4g-inline-returnnow'><span class='by-button-text'>Return Now</span></button><button class='by-button b4g-inline-noreturn'><span class='by-button-text'>Don't Return</span></button></div></div>",
        send: "<div class='b4g-inline-send b4g-inline-part'><div class='b4g-inline-content'>Scheduled to send: <span class='b4g-inline-date'>{{data.pretty-send-time}}</span> {{data.pretty-conidition}}</div><div class='b4g-inline-controls'><button class='by-button b4g-inline-reschedule by-button-secondary'><span class='by-button-text'>Reschedule</span></button><button class='by-button b4g-inline-sendnow'><span class='by-button-text'>Send Now</span></button><button class='by-button b4g-inline-nosend'><span class='by-button-text'>Don't Send</span></button></div></div>",
        recurring: "<div class='b4g-inline-recurring b4g-inline-part'><div class='b4g-inline-content'>Scheduled to send: <span class='b4g-inline-date'>{{data.pretty-recurring-time}}</span></div><div class='b4g-inline-controls'><button class='by-button b4g-inline-reschedule by-button-secondary'><span class='by-button-text'>Reschedule</span></button><button class='by-button b4g-inline-skip'><span class='by-button-text'>Skip Next</span></button><button class='by-button b4g-inline-cancel'><span class='by-button-text'>Stop Sending</span></button></div><div class='b4g-inline-recurring-schedule'><span class='b4g-inline-schedule-part'>Start: <span class='b4g-inline-date'>{{data.pretty-start-time}}</span></span><span class='b4g-inline-schedule-part b4g-inline-reschedule-next'>Next Scheduled: <span class='b4g-inline-date'>{{data.pretty-next-time}}</span></span><span class='b4g-inline-schedule-part'>End: <span class='b4g-inline-date'>{{data.pretty-end-time}}</span></span></div></div>",
        tracking: "<div class='b4g-inline-tracking b4g-inline-part'><div class='b4g-inline-tracking-opens'><table><colgroup><col/><col class='b4g-tracking-first'/><col class='b4g-tracking-last'/></colgroup><tr><th>OPENED &ndash; {{data.open-data.opens}} TIMES</th><td><span class='b4g-tracking-time-title'>FIRST</span> {{data.open-data.pretty-first-time}}</td><td><span class='b4g-tracking-time-title'>LAST</span> {{data.open-data.pretty-last-time}}</td></tr></table></div><div class='b4g-inline-tracking-clicks'><table class='b4g-inline-linktracking'><colgroup><col class='b4g-tracking-click-total'/><col/><col class='b4g-tracking-first'/><col class='b4g-tracking-last'/></colgroup><thead><tr><th colspan='4'>CLICKED &ndash; {{data.total-link-clicks}} TIMES</th></tr></thead>{{data.link-click-content}}</table></div><div class='b4g-tracking-hint-text'>Updates every 10 minutes. Not all opens will be tracked. <a href='https://www.boomeranggmail.com/faq.html#ReadReceiptsFeature'>See here for more information.</a></div></div>",
        "link-tracking": "<tr><td class='b4g-tracking-click-total'>{{clicks}}</td><td class='b4g-trcking-click-url'><a href='{{url}}' target='_blank'>{{url}}</a></td><td><span class='b4g-tracking-time-title'>FIRST</span> {{pretty-first-time}}</td><td><span class='b4g-tracking-time-title'>LAST</span> {{pretty-last-time}}</td></tr>",
        notes: "<div class='b4g-inline-notes'><span class='b4g-inline-notes-label'>Note added:</span> <span class='b4g-inline-notes-text'>{{notes}}</span> <button>Edit</button></div>",
        reschedule: '<div class="b4g-reschedule-popup"><h3>Reschedule this message</h3><form autocomplete="off"><select class="b4g-return-condition"><option value="N">Return regardless</option><option value="R">Only if there\'s no reply</option></select><label class="b4g-send-ifnoreply"><input type="checkbox" value="if-no-reply"/> Only if nobody replies</label><div class="b4g-ifnoreply-warning"></div><label><span class="b4g-reschedule-example">Example: "Monday 9am", "Dec 23"</span><input type="text" class="b4g-reschedule-date"/><span class="b4g-reschedule-preview"></span></label><div class="b4g-reschedule-buttons"><button type="submit" class="by-button by-button-secondary"><span class="by-button-text">Reschedule</span></button><button class="b4g-reschedule-cancel by-button"><span class="by-button-text">Cancel</span></button></div></form></div>',
        "recurring-cancel-confirmation": '<div class="b4g-recurring-confirmation"><h3>Are you sure you want to stop sending all subsequent copies of this recurring message?</h3><p>The message will move back to your Drafts folder.</p><div class="b4g-recur-confirm-buttons"><button class="by-button by-button-secondary"><span class="by-button-text">Yes, stop sending</span></button><button class="by-button b4g-cancel"><span class="by-button-text">Cancel</span></button></div></div>',
        "recurring-skip-next-confirmation": '<div class="b4g-recurring-confirmation"><h3>Skip next message?</h3><p>The message scheduled to send on <strong>{{pretty-skip-date}} will be skipped</strong>.  The rest of the messages will still go out as previously scheduled.</p><div class="b4g-recur-confirm-buttons"><button class="by-button by-button-secondary"><span class="by-button-text">Yes, skip message</span></button><button class="by-button b4g-cancel"><span class="by-button-text">Cancel</span></button></div></div>',
        "edit-email-button": '<div class="b4g-edit-button-container"><button class="b4g-inline-edit-message by-button by-button-primary"><span class="by-button-text">Edit Message</span></button></div>'
      },
      Ba = (Math.random() + "").substr(2),
      v, N = {},
      U = 0;
    return {
      is_enabled: function() {
        return v && v.enabled
      },
      init: e,
      expire_cache: function() {
        var a = new Date,
          c = a.getMonth() + 1 + "/" + a.getDate() + "/" + a.getFullYear(),
          a = 12 < a.getHours() ? a.getHours() - 12 + ":" + (10 > a.getMinutes() ? "0" : "") + a.getMinutes() + " PM" : a.getHours() + ":" + a.getMinutes() +
          " AM";
        A("b4g-inline-manage-last-update-" + y(), c + " " + a);
        if (v) {
          v["last-updated"] = 0;
          var c = v["thread-ids"],
            e;
          for (e in c) c.hasOwnProperty(e) && (v["thread-ids"][e]["last-updated"] = 0);
          b();
          d(v)
        }
      },
      enable: b,
      troubleshoot: function(a) {
        g(function(b) {
          a.local(null, b)
        });
        h(function(b, c) {
          var d = a.server;
          if (b) return d(b.status + " -- " + b.error);
          if (!c) return d("No inline-manage data received.");
          if (!c.success) return d(c.error);
          l(c["thread-ids"]);
          return d(null, "OK")
        })
      }
    }
  }() : function() {
    function b() {
      y() && void 0 !== v && !v.enabled &&
        (v.enabled = !0, k(v), d(v))
    }

    function d(a) {
      var b = y();
      cb.write("b4g-inline-manage-data-2:" + b, JSON.stringify(a), function(a) {
        a && console.warn("Error writting b4g inline-mange data: ", a)
      })
    }

    function c(a) {
      var b = Date.now();
      if (b >= ba || b + a <= ba) setTimeout(function() {
        k(v)
      }, a), ba = b + a
    }

    function e() {
      var b = a(".aeF");
      0 >= b.length ? setTimeout(e, 1E3) : (k(v), (new ka(f)).observe(b[0], {
        childList: !0,
        subtree: !0
      }), H(b))
    }

    function f() {
      var c = wc();
      1 <= a(".aHU").length && 0 < c.length && (v && !v.enabled && -1 < window.location.hash.indexOf("/Boomerang") &&
        b(), k(v))
    }

    function g(a) {
      var b = y();
      cb.read("b4g-inline-manage-data-2:" + b, function(b, c) {
        b && console.log("Error loading inline manage data", b);
        var d;
        try {
          d = JSON.parse(c || "{}")
        } catch (e) {
          d = {}
        }
        v = v || d || {};
        v.enabled = d.enabled || !1;
        v["last-updated"] = d["last-updated"] || 0;
        v["message-ids"] = d["message-ids"] || {};
        a(v)
      })
    }

    function l(a) {
      if (void 0 === v) g(function() {
        l(a)
      });
      else {
        var b = {},
          c = v["message-ids"];
        a.forEach(function(a) {
          b[a] = c[a] || {}
        });
        v["message-ids"] = b;
        d(v);
        return b
      }
    }

    function k(a) {
      void 0 === a ? g(function(a) {
          k(v)
        }) :
        v.enabled && (r(v["message-ids"]), N["managed-message-ids"] || (a = Date.now() - v["last-updated"], 18E6 > a ? c(18E6 - a) : h(function(a, b) {
          if (a) c(6E5);
          else if (b)
            if (b.success) {
              var d = l(b["message-ids"]);
              c(18E6);
              r(d)
            } else c(6E5);
          else c(6E5)
        })))
    }

    function h(b) {
      a.ajax({
        type: "get",
        url: "https://b4g.baydin.com/gmailmigration/inline-manage/managed-message-ids",
        data: {
          email: y(),
          uid: Ba
        },
        xhr: J,
        success: function(a) {
          b(!1, a)
        },
        error: function(a, c, d) {
          b({
            status: c,
            error: d
          })
        },
        complete: function() {
          N["managed-message-ids"] = void 0;
          delete N["managed-message-ids"];
          v && (v["last-updated"] = Date.now(), d(v))
        },
        dataType: "json"
      });
      N["managed-message-ids"] = !0
    }

    function r(b) {
      for (var c = wc(), d = 0; d < c.length; d++) {
        var e = c[d],
          f = b[e];
        if (f) {
          a(".cf.hX:contains('Boomerang')").not(":contains('Boomerang-Returned')").find(".hV.hM").hide().end().find(".hU.hM:contains('Boomerang')").css({
            "background-color": "#FBF1B5",
            color: "#666"
          }).filter(":contains('Boomerang-Outbox')").css({
            "background-color": "#FFD76E",
            color: "#666"
          });
          var g = f["last-updated"] || 0;
          9E5 < Date.now() - g && p(e);
          f.returns && R(f.returns,
            g);
          f.sends && P(f.sends, g);
          f.recurrings && Z(f.recurrings, g);
          f.tracks && G(f.tracks, g)
        }
      }
    }

    function p(b) {
      N[b] || (a.ajax({
        type: "get",
        url: "https://b4g.baydin.com/gmailmigration/inline-manage/manage-info",
        data: {
          "message-id": b,
          email: y()
        },
        xhr: J,
        success: function(a) {
          a.success && (a.success = void 0, delete a.success, v["message-ids"][b] = a, d(v), r(v["message-ids"]))
        },
        error: function() {
          c(6E5)
        },
        complete: function() {
          N[b] = void 0;
          delete N[b];
          var a = v["message-ids"][b] || {};
          a["last-updated"] = Date.now();
          v["message-ids"][b] = a;
          d(v)
        },
        dataType: "json"
      }), N[b] = !0)
    }

    function t(b, c, d) {
      d = d || {};
      var e = c.offset();
      b.addClass("b4g-inline-popup").appendTo("body").css({
        top: e.top + c.outerHeight() + (d.top || 0),
        left: e.left - b.outerWidth() + c.outerWidth() + (d.left || 0)
      });
      a(document).click(function ja(d) {
        c[0] === d.target || b[0] === d.target || a.contains(c[0], d.target) || a.contains(b[0], d.target) || !a.contains(document, d.target) || 0 < a(d.target).closest(".b4g-ui-datepicker").length || (d.preventDefault(), b.remove(), a(document).unbind("click", ja))
      })
    }

    function w(b, c,
      e) {
      var f = a(Fb);
      f.addClass("b4g-inline-notes-edit").find("textarea").val(b.notes).end().find("#notes_save_button").click(function() {
        var c = a("#note_entry", x).val();
        if (Ib(c)) u(Jb);
        else {
          var g = b.notes;
          b.notes = a("textarea", f).val();
          a(".b4g-inline-notes-text", e).text(b.notes);
          d(v);
          var k = function() {
            alert("Sorry, there was an error. We can't save your note. Try again later.");
            b.notes = g;
            a(".b4g-inline-notes-text", e).text(g);
            d(v)
          };
          Q(function() {
            a.ajax({
              type: "post",
              url: "https://b4g.baydin.com/inline-manage/update-notes",
              data: {
                "return-later-id": b.id,
                notes: b.notes
              },
              xhr: J,
              success: function(a) {
                a.success || k()
              },
              error: k,
              dataType: "json"
            })
          }, k);
          f.remove()
        }
      }).end().find("#notes_cancel_button").click(function() {
        f.remove()
      }).end();
      t(f, c, {
        top: 5
      });
      return f
    }

    function m(b, c, d) {
      var e = null != b.condition,
        f = null != b["is-conditional"],
        g = b["return-time"] || b["send-time"],
        g = isNaN((new Date(g)).getTime()) ? (new Date).toString("MMM d, yyyy h:mm tt") : (new Date(g)).toString("MMM d, yyyy h:mm tt"),
        k = a(".g3:visible"),
        h = 0 < k.length,
        k = k[0] === c.closest(".adn").find(".g3")[0],
        h = f && h && !k,
        l = a(ea.reschedule);
      l.find(".b4g-reschedule-date").val(g).bind("change keyup", function() {
        var b = Ea(a(this).val()),
          c = Ka(b, !0);
        a(".b4g-reschedule-preview", l).text(c).toggleClass("b4g-state-invalid", null == b || b < new Date)
      }).end().find(".b4g-return-condition").toggle(e).end().find(".b4g-send-ifnoreply, .b4g-ifnoreply-warning").toggle(h).end().find(".b4g-send-ifnoreply input").change(function() {
        a(this).is(":checked") && ((new Date).toString("MM/d a\\t h:mmtt"), a(".b4g-ifnoreply-warning").html("This message will be sent if no replies are received between <strong>now and the scheduled time</strong>."))
      }).end().find("[type='submit']").click(function() {
        a(this).closest("form").submit()
      }).end().find("form").bind("submit",
        function(b) {
          b.preventDefault();
          b = Ea(a(".b4g-reschedule-date", l).val());
          var c;
          e && (c = a(".b4g-return-condition", l).val());
          f && (c = a(".b4g-send-ifnoreply input", l).attr("checked"));
          b ? d({
            date: b,
            condition: c
          }) : alert("Please enter in a valid date.")
        }).end().find(".b4g-reschedule-cancel").click(function() {
        l.remove()
      }).end();
      $a(l.find(".b4g-reschedule-date"));
      e && -1 < "OC".indexOf(b.condition) && a(".b4g-return-condition", l).append('<option value="O">Only if not opened</option>').append('<option value="C">Only if not clicked</option>');
      e && a(".b4g-return-condition", l).val(b.condition);
      f && a(".b4g-send-ifnoreply input", l).attr("checked", b["is-conditional"]);
      t(l, c, {
        left: 1
      });
      return l
    }

    function n(a) {
      var b = v["message-ids"];
      b[a]["last-updated"] = Date.now();
      r(b)
    }

    function D(b, c) {
      var d = b.responseText || b.error || b;
      "string" !== a.type(d) && (d = c || "Sorry, there was an error. We can't save your update. Try again later.");
      alert(d)
    }

    function B(b, c, e) {
      var f = a(e).closest(".b4g-inline-part").data("manage-data"),
        g = f["hex-gmail-id"],
        k, h;
      "send" === c ? (k = "send-time",
        h = "is-conditional") : "return" === c && (k = "return-time", h = "condition");
      var l = f[h],
        p = f[k],
        t = function(a) {
          D(a);
          f[h] = l;
          f[k] = p;
          d(v);
          n(g)
        };
      c = a(e).closest(".by-button");
      var w = m(f, c, function(c) {
        f[h] = c.condition;
        f[k] = c.date.getTime();
        d(v);
        a(".b4gid-" + f["hex-gmail-id"]).remove();
        r(v["message-ids"]);
        Q(function() {
          a.ajax({
            type: "post",
            url: "https://b4g.baydin.com" + b,
            data: {
              id: f.id,
              offset: c.date.getTime(),
              condition: c.condition
            },
            xhr: J,
            success: function(a) {
              a.success || t(a)
            },
            error: t,
            dataType: "json"
          })
        }, t);
        w.remove()
      })
    }

    function L(b,
      c, e, f) {
      var g = a(e).closest(".b4g-inline-part").data("manage-data"),
        k = g["hex-gmail-id"];
      e = v["message-ids"];
      var h = e[k][c + "s"];
      c = h.indexOf(g); - 1 < c && h.splice(c, 1);
      d(v);
      a(".b4gid-" + g["hex-gmail-id"]).remove();
      a(".adn.ads[data-legacy-message-id='" + g["hex-gmail-id"] + "']").find(".a3s").removeClass("b4g-inline-pending-content");
      r(e);
      var l = function(a) {
        D(a);
        h.push(g);
        d(v);
        n(k)
      };
      Q(function() {
        a.ajax({
          type: "post",
          url: "https://b4g.baydin.com" + b,
          data: {
            id: g.id
          },
          xhr: J,
          success: function(a) {
            a.success || l(a);
            f && f()
          },
          error: l,
          dataType: "json"
        })
      }, l)
    }

    function F(b, c, e) {
      a(".by-button-text", e).text("Cancelling...");
      var f = a(e).closest(".b4g-inline-part").data("manage-data"),
        g = f["hex-gmail-id"],
        k = function(a) {
          D(a);
          n(g)
        };
      Q(function() {
        a.ajax({
          type: "post",
          url: "https://b4g.baydin.com" + b,
          data: {
            id: f.id
          },
          xhr: J,
          success: function(a) {
            a.success || k(a);
            a = v["message-ids"][g][c + "s"];
            var b = a.indexOf(f); - 1 < b && a.splice(b, 1);
            d(v);
            window.location.reload()
          },
          error: k,
          dataType: "json"
        })
      }, k)
    }

    function E(b) {
      var c = jd(function() {
        var e = a.extend({}, b),
          f = b["hex-gmail-id"],
          g = Date.parse(a("#start_date_input").val() + " " + a("#start_time_input").val());
        if (!g || g < new Date) alert("Invalid start date");
        else {
          var k = Kb(),
            h = a("#num_interval").val(),
            l = Lb(g);
          if (l) {
            var p = null;
            "monthweek" == a("#frequency").val() && (p = a("#set_position").val());
            var t = "None",
              w = "None";
            if (a("#radio_num_occurences").attr("checked")) t = a("#num_occurences").val(), w = K(g, h, k, l, t);
            else if (a("#radio_end_date").attr("checked")) {
              w = Date.parse(a("#end_date").val() + " " + a("#start_time_input").val());
              if (null == w) {
                alert("Invalid end date");
                return
              }
              w = w.getTime()
            }
            var m = function(c) {
              D(c);
              a.extend(b, e);
              d(v);
              n(f)
            };
            Q(function() {
              var c = {
                id: b.id,
                frequency: k,
                interval: h,
                utc_weekday: l,
                start: g.getTime(),
                end: w,
                num_occurences: t
              };
              p && (c.setPosition = p);
              a.ajax({
                type: "post",
                url: "https://b4g.baydin.com/inline-manage/reschedule-recurring",
                data: c,
                xhr: J,
                success: function(a) {
                  a.success ? (b["next-send"] = a["next-send"], b.end = a.end, a = v["message-ids"], a[f]["last-updated"] = Date.now(), r(a)) : m(a)
                },
                error: m,
                dataType: "json"
              })
            }, m);
            b.frequency = ["YEARLY", "MONTHLY", "WEEKLY",
              "DAILY"
            ].indexOf(k);
            b.interval = h | 0;
            b.setPosition = p;
            b.start = g.getTime();
            b.end = "None" === w ? void 0 : w;
            b.weekdays = a.parseJSON(l.replace("(", "[").replace(")", "]"));
            d(v);
            b["next-send"] = NaN;
            n(f);
            c.remove()
          } else alert("You must select a day of the week.")
        }
      });
      a("#num_interval", c).val(b.interval);
      var e = b.setPosition;
      a("#frequency", c).val(U[b.frequency]);
      null != e && (a("#set_position", c).val(e), a("#frequency", c).val("monthweek"));
      e = new Date(b["next-send"]);
      a("#start_date_input", c).val(e.toString("M/d/yyyy"));
      a("#start_time_input",
        c).val(e.toString("h:mm tt"));
      b.end ? (a("#end_date", c).val((new Date(b.end)).toString("M/d/yyyy")), a("#radio_end_date", c).attr("checked", !0)) : a("#radio_no_end", c).attr("checked", !0);
      var f = a("input.day_cb", c);
      W(b.weekdays, new Date(b.start)).forEach(function(b) {
        f.filter("[value=" + b + "]").attr("checked", !0);
        a("#set_position_day").val(b)
      });
      a("#frequency", c).change();
      f.change()
    }

    function K(a, b, c, d, e) {
      var f = "None";
      a = new Date(a.getTime());
      if ("DAILY" === c) {
        for (d = 0; d < e; d++) a.add(b).days();
        f = a.getTime()
      } else if ("WEEKLY" ===
        c) {
        b = 0;
        for (d = d.replace(/[()]/g, "").split(","); b < e;) c = a.getDay(), c = 0 === c ? 6 : c - 1, -1 !== d.indexOf(c.toString()) && b++, a.add(1).days();
        f = a.getTime()
      } else if ("MONTHLY" === c) {
        for (d = 0; d < e; d++) a.add(b).months();
        f = a.getTime()
      } else if ("YEARLY" === c) {
        for (d = 0; d < e; d++) a.add(b).years();
        f = a.getTime()
      }
      return f
    }

    function I(b) {
      var c = b["hex-gmail-id"],
        e = b["next-send"];
      b["next-send"] = NaN;
      n(c);
      var f = function(a) {
        D(a);
        b["next-send"] = e;
        n(c)
      };
      Q(function() {
        a.ajax({
          type: "post",
          url: "https://b4g.baydin.com/inline-manage/reschedule-skip-next",
          data: {
            id: b.id
          },
          xhr: J,
          success: function(a) {
            a.success ? (b["next-send"] = a["next-send"], n(c), d(v)) : f()
          },
          error: f,
          dataType: "json"
        })
      }, f)
    }

    function H(b) {
      b.delegate(".b4g-inline-notes button", "click", function(c) {
        c = a(this).closest(".b4g-inline-notes").data("manage-data");
        w(c, a(this), b)
      });
      b.delegate(".b4g-inline-return .b4g-inline-reschedule", "click", function() {
        B("/inline-manage/reschedule-return-later", "return", this)
      }).delegate(".b4g-inline-send .b4g-inline-reschedule", "click", function() {
        B("/inline-manage/reschedule-send-later",
          "send", this)
      });
      b.delegate(".b4g-inline-return .b4g-inline-returnnow,", "click", function() {
        L("/inline-manage/return-now", "return", this)
      }).delegate(".b4g-inline-return .b4g-inline-noreturn,", "click", function() {
        L("/inline-manage/return-never", "return", this)
      }).delegate(".b4g-inline-send .b4g-inline-sendnow", "click", function() {
        L("/inline-manage/send-now", "send", this)
      }).delegate(".b4g-inline-send .b4g-inline-nosend,", "click", function() {
        F("/inline-manage/send-never", "send", this)
      });
      b.delegate(".b4g-inline-recurring .b4g-inline-reschedule",
        "click",
        function() {
          var b = a(this).closest(".b4g-inline-part").data("manage-data");
          E(b)
        }).delegate(".b4g-inline-recurring .b4g-inline-skip", "click", function() {
        var b = a(this).closest(".b4g-inline-part").data("manage-data"),
          c = a(ca(ea["recurring-skip-next-confirmation"], {
            "pretty-skip-date": (new Date(b["next-send"])).toString("MMM dd yyyy")
          }));
        c.find(".b4g-cancel").click(function() {
          c.remove()
        }).end().find(".by-button-secondary").click(function() {
          I(b);
          c.remove()
        }).end().dialog({
          modal: !0,
          closeOnEscape: !0,
          width: 400,
          dialogClass: "b4g-no-title"
        })
      }).delegate(".b4g-inline-recurring .b4g-inline-cancel", "click", function() {
        var b = a(this),
          c = a(ea["recurring-cancel-confirmation"]);
        c.find(".b4g-cancel").click(function() {
          c.remove()
        }).end().find(".by-button-secondary").click(function() {
          F("/inline-manage/recurring-cancel", "recurring", b);
          c.remove()
        }).end().dialog({
          modal: !0,
          closeOnEscape: !0,
          width: 400,
          dialogClass: "b4g-no-title"
        })
      })
    }

    function Y(b, c, d) {
      var e;
      var f = c["hex-gmail-id"];
      e = a(".b4g-inline-manage.b4gid-" + f + ".date-" +
        d);
      0 < e.length || (a(".b4g-inline-manage.b4gid-" + f).remove(), e = a(ca(ea.container, {
        "b4g-id": f,
        "last-updated": d
      })), f = a(".adn.ads[data-legacy-message-id='" + f + "']").find(".a3s").first(), f.removeClass("b4g-inline-pending-content").before(e), 3 === q() && f.addClass("b4g-inline-manage-message-width-new-ui"));
      f = e.children(".b4g-inline-" + b);
      if (0 < f.length) return f;
      f = a(ca(ea[b], {
        data: c,
        type: b,
        "last-updated": d
      })).data("manage-data", c);
      e.children(".b4g-inline-placeholder-" + b).replaceWith(f);
      return f
    }

    function R(b, c) {
      b.forEach(function(b) {
        var d =
          new Date(b["return-time"]);
        d < new Date || (b["pretty-return-time"] = d.toString("ddd, MMM d, yyyy h:mm tt"), b["pretty-conidition"] = ha[b.condition || "N"], d = Y("return", b, c), b.notes && (d = d.closest(".b4g-inline-manage"), b = a(ca(ea.notes, b)).data("manage-data", b), d.children(".b4g-inline-placeholder-notes").replaceWith(b)))
      })
    }

    function T(b, c) {
      var d = a(".adn.ads[data-legacy-message-id='" + b + "']").find(".a3s").first();
      if (!(d.hasClass("b4g-inline-pending-content") || (d.addClass("b4g-inline-pending-content").removeClass("adM").closest(".adn").find(".g3").hide(),
          0 < d.has(".b4g-inline-edit-message").length))) {
        var e = a(ea["edit-email-button"]),
          f;
        e.find("button").click(function(d) {
          d.preventDefault();
          f ? f.focus() : Q(function() {
            function d() {
              if (!f || f.closed) M.expire_cache(), f = null, clearInterval(g), window.location.hash = "#label/Boomerang-Outbox", aa()
            }
            var e = "https://b4g.baydin.com/editmessage/" + c + "/" + b;
            f = window.open(e, "_blank");
            var g;
            if ("Safari" !== z && "Old Safari" !== z && f) g = setInterval(d, 500);
            else {
              var k = a("<div class='overlay' style='background:#bcbcbc; opacity:0.9;filter:alpha(opacity=90);'><div id='dialog' style='height:100px'><div id='title-bar'><span id='safari-dialog-close' class='auth-reload' style='position: relative; left: -60px;'>X</span> Leaving to edit...</div><div class='dialog-content'> Please <a id='safari-boomerang' class='auth-reload'>click here</a> to begin editing your message.</div></div></div>");
              a("body").append(k);
              a("#safari-boomerang").click(function() {
                f = window.open(e, "_blank");
                k.remove();
                g = setInterval(d, 500)
              });
              a("#safari-dialog-close").click(function() {
                k.remove()
              })
            }
          })
        });
        d.append(e)
      }
    }

    function P(a, b) {
      a.forEach(function(a) {
        var c = new Date(a["send-time"]);
        c < new Date || (a["pretty-send-time"] = c.toString("ddd, MMM d, yyyy h:mm tt"), a["pretty-conidition"] = a["is-conditional"] ? "if no reply" : "", Y("send", a, b), T(a["hex-gmail-id"], "sendlater"))
      })
    }

    function W(a, b) {
      return b.getUTCDay() > b.getDay() || 0 === b.getUTCDay() &&
        6 === b.getDay() ? a.map(function(a) {
          return (a + 6) % 7
        }) : b.getUTCDay() < b.getDay() || 6 === b.getUTCDay() && 0 === b.getDay() ? a.map(function(a) {
          return (a + 1) % 7
        }) : a
    }

    function X(a) {
      var b = "Every ",
        b = 1 >= a.interval ? b + U[a.frequency] : b + (a.interval + " " + U[a.frequency] + "s"),
        c = a.weekdays;
      if (7 <= c.length) return b;
      var d = new Date(a.start);
      if (1 != a.frequency || null == a.setPosition) c = W(c, d);
      switch (String(a.setPosition)) {
        case "-1":
          b += " last ";
          break;
        case "1":
          b += " first ";
          break;
        case "2":
          b += " second ";
          break;
        case "3":
          b += " third ";
          break;
        case "4":
          b +=
            " fourth "
      }
      var e = "Mon Tue Wed Thu Fri Sat Sun".split(" ");
      return b += " " + c.map(function(a) {
        return e[a]
      }).join(", ")
    }

    function Z(a, b) {
      a.forEach(function(a) {
        var c = new Date(a.start),
          d = new Date(a["next-send"]),
          e = a.end && new Date(a.end);
        a["pretty-recurring-time"] = X(a);
        a["pretty-start-time"] = c.toString("MMM d, yyyy");
        a["pretty-next-time"] = isFinite(d) ? d.toString("MMM d, yyyy") : "???";
        a["pretty-end-time"] = e ? e.toString("MMM d, yyyy") : "Never";
        Y("recurring", a, b);
        T(a["hex-gmail-id"], "recurring")
      })
    }

    function G(a, b) {
      a.forEach(function(a) {
        var c =
          a["open-data"],
          d = new Date(c["last-open"]);
        c["pretty-first-time"] = (new Date(c["first-open"])).toString("MMM d aroun\\d h:mm tt");
        c["pretty-last-time"] = d.toString("MMM d aroun\\d h:mm tt");
        a["total-link-clicks"] = 0;
        a["link-click-content"] = a["links-data"].map(function(b) {
          a["total-link-clicks"] += b.clicks;
          var c = new Date(b["last-click"]);
          b["pretty-first-time"] = (new Date(b["first-click"])).toString("MMM d aroun\\d h:mm tt");
          b["pretty-last-time"] = c.toString("MMM d aroun\\d h:mm tt");
          return ca(ea["link-tracking"],
            b)
        }).join("");
        Y("tracking", a, b).children(".b4g-inline-tracking-opens").toggleClass("b4g-tracking-unopen", 0 >= c.opens).end().children(".b4g-inline-tracking-clicks").toggleClass("b4g-tracking-unclick", 0 >= a["total-link-clicks"])
      })
    }
    var ha = {
        R: "if there's no reply",
        O: "if not opened",
        C: "if not clicked",
        N: ""
      },
      U = ["year", "month", "week", "day"],
      ea = 3 === q() ? {
        container: "<div class='b4g-inline-manage b4g-inline-manage-new-ui b4gid-{{b4g-id}} date-{{last-updated}}'><div class='b4g-inline-placeholder-return'/><div class='b4g-inline-placeholder-send'/><div class='b4g-inline-placeholder-recurring'/><div class='b4g-inline-placeholder-tracking'/><div class='b4g-inline-placeholder-notes'/></div>",
        "return": "<div class='b4g-inline-return b4g-inline-part'><div class='b4g-inline-content'>Scheduled to return: <span class='b4g-inline-date'>{{data.pretty-return-time}}</span> {{data.pretty-conidition}}</div><div class='b4g-inline-controls b4g-inline-controls-new-ui'><button class='by-button b4g-inline-reschedule by-button-secondary'><span class='by-button-text'>Reschedule</span></button><button class='by-button b4g-inline-returnnow'><span class='by-button-text'>Return Now</span></button><button class='by-button b4g-inline-noreturn'><span class='by-button-text'>Don't Return</span></button></div></div>",
        send: "<div class='b4g-inline-send b4g-inline-part'><div class='b4g-inline-content'>Scheduled to send: <span class='b4g-inline-date'>{{data.pretty-send-time}}</span> {{data.pretty-conidition}}</div><div class='b4g-inline-controls b4g-inline-controls-new-ui'><button class='by-button b4g-inline-reschedule by-button-secondary'><span class='by-button-text'>Reschedule</span></button><button class='by-button b4g-inline-sendnow b4g-inline-secondary-btn-new-ui'><span class='by-button-text'>Send Now</span></button><button class='by-button b4g-inline-nosend b4g-inline-secondary-btn-new-ui'><span class='by-button-text'>Don't Send</span></button></div></div>",
        recurring: "<div class='b4g-inline-recurring b4g-inline-part'><div class='b4g-inline-content'>Scheduled to send: <span class='b4g-inline-date'>{{data.pretty-recurring-time}}</span></div><div class='b4g-inline-controls b4g-inline-controls-new-ui'><button class='by-button b4g-inline-reschedule by-button-secondary'><span class='by-button-text'>Reschedule</span></button><button class='by-button b4g-inline-skip'><span class='by-button-text'>Skip Next</span></button><button class='by-button b4g-inline-cancel'><span class='by-button-text'>Stop Sending</span></button></div><div class='b4g-inline-recurring-schedule'><span class='b4g-inline-schedule-part'>Start: <span class='b4g-inline-date'>{{data.pretty-start-time}}</span></span><span class='b4g-inline-schedule-part b4g-inline-reschedule-next'>Next Scheduled: <span class='b4g-inline-date'>{{data.pretty-next-time}}</span></span><span class='b4g-inline-schedule-part'>End: <span class='b4g-inline-date'>{{data.pretty-end-time}}</span></span></div></div>",
        tracking: "<div class='b4g-inline-tracking b4g-inline-part'><div class='b4g-inline-tracking-opens'><table><colgroup><col/><col class='b4g-tracking-first'/><col class='b4g-tracking-last'/></colgroup><tr><th class='b4g-inline-tracking-info-new-ui'>Opened &ndash; {{data.open-data.opens}} times</th><td><span class='b4g-tracking-time-title'>FIRST</span> {{data.open-data.pretty-first-time}}</td><td><span class='b4g-tracking-time-title'>LAST</span> {{data.open-data.pretty-last-time}}</td></tr></table></div><div class='b4g-inline-tracking-clicks'><table class='b4g-inline-linktracking'><colgroup><col class='b4g-tracking-click-total'/><col/><col class='b4g-tracking-first'/><col class='b4g-tracking-last'/></colgroup><thead><tr><th class='b4g-inline-tracking-info-new-ui' colspan='4'>Clicked &ndash; {{data.total-link-clicks}} times</th></tr></thead>{{data.link-click-content}}</table></div><div class='b4g-tracking-hint-text'>Updates every 10 minutes. Not all opens will be tracked. <a href='https://www.boomeranggmail.com/faq.html#ReadReceiptsFeature'>See here for more information.</a></div></div>",
        "link-tracking": "<tr><td class='b4g-tracking-click-total'>{{clicks}}</td><td class='b4g-trcking-click-url'><a href='{{url}}' target='_blank'>{{url}}</a></td><td><span class='b4g-tracking-time-title'>FIRST</span> {{pretty-first-time}}</td><td><span class='b4g-tracking-time-title'>LAST</span> {{pretty-last-time}}</td></tr>",
        notes: "<div class='b4g-inline-notes'><span class='b4g-inline-notes-label'>Note added:</span> <span class='b4g-inline-notes-text'>{{notes}}</span> <button>Edit</button></div>",
        reschedule: '<div class="b4g-reschedule-popup"><h3>Reschedule this message</h3><form autocomplete="off"><select class="b4g-return-condition"><option value="N">Return regardless</option><option value="R">Only if there\'s no reply</option></select><label class="b4g-send-ifnoreply"><input type="checkbox" value="if-no-reply"/> Only if nobody replies</label><div class="b4g-ifnoreply-warning"></div><label><span class="b4g-reschedule-example">Example: "Monday 9am", "Dec 23"</span><input type="text" class="b4g-reschedule-date"/><span class="b4g-reschedule-preview"></span></label><div class="b4g-reschedule-buttons"><button type="submit" class="by-button by-button-secondary"><span class="by-button-text">Reschedule</span></button><button class="b4g-reschedule-cancel by-button"><span class="by-button-text">Cancel</span></button></div></form></div>',
        "recurring-cancel-confirmation": '<div class="b4g-recurring-confirmation"><h3>Are you sure you want to stop sending all subsequent copies of this recurring message?</h3><p>The message will move back to your Drafts folder.</p><div class="b4g-recur-confirm-buttons"><button class="by-button by-button-secondary"><span class="by-button-text">Yes, stop sending</span></button><button class="by-button b4g-cancel"><span class="by-button-text">Cancel</span></button></div></div>',
        "recurring-skip-next-confirmation": '<div class="b4g-recurring-confirmation"><h3>Skip next message?</h3><p>The message scheduled to send on <strong>{{pretty-skip-date}} will be skipped</strong>.  The rest of the messages will still go out as previously scheduled.</p><div class="b4g-recur-confirm-buttons"><button class="by-button by-button-secondary"><span class="by-button-text">Yes, skip message</span></button><button class="by-button b4g-cancel"><span class="by-button-text">Cancel</span></button></div></div>',
        "edit-email-button": '<div class="b4g-edit-button-container b4g-inline-controls-new-ui"><button class="b4g-inline-edit-message by-button by-button-primary b4g-inline-edit-message-new-ui"><span class="by-button-text">Edit Message</span></button></div>'
      } : {
        container: "<div class='b4g-inline-manage b4gid-{{b4g-id}} date-{{last-updated}}'><div class='b4g-inline-placeholder-return'/><div class='b4g-inline-placeholder-send'/><div class='b4g-inline-placeholder-recurring'/><div class='b4g-inline-placeholder-tracking'/><div class='b4g-inline-placeholder-notes'/></div>",
        "return": "<div class='b4g-inline-return b4g-inline-part'><div class='b4g-inline-content'>Scheduled to return: <span class='b4g-inline-date'>{{data.pretty-return-time}}</span> {{data.pretty-conidition}}</div><div class='b4g-inline-controls'><button class='by-button b4g-inline-reschedule by-button-secondary'><span class='by-button-text'>Reschedule</span></button><button class='by-button b4g-inline-returnnow'><span class='by-button-text'>Return Now</span></button><button class='by-button b4g-inline-noreturn'><span class='by-button-text'>Don't Return</span></button></div></div>",
        send: "<div class='b4g-inline-send b4g-inline-part'><div class='b4g-inline-content'>Scheduled to send: <span class='b4g-inline-date'>{{data.pretty-send-time}}</span> {{data.pretty-conidition}}</div><div class='b4g-inline-controls'><button class='by-button b4g-inline-reschedule by-button-secondary'><span class='by-button-text'>Reschedule</span></button><button class='by-button b4g-inline-sendnow'><span class='by-button-text'>Send Now</span></button><button class='by-button b4g-inline-nosend'><span class='by-button-text'>Don't Send</span></button></div></div>",
        recurring: "<div class='b4g-inline-recurring b4g-inline-part'><div class='b4g-inline-content'>Scheduled to send: <span class='b4g-inline-date'>{{data.pretty-recurring-time}}</span></div><div class='b4g-inline-controls'><button class='by-button b4g-inline-reschedule by-button-secondary'><span class='by-button-text'>Reschedule</span></button><button class='by-button b4g-inline-skip'><span class='by-button-text'>Skip Next</span></button><button class='by-button b4g-inline-cancel'><span class='by-button-text'>Stop Sending</span></button></div><div class='b4g-inline-recurring-schedule'><span class='b4g-inline-schedule-part'>Start: <span class='b4g-inline-date'>{{data.pretty-start-time}}</span></span><span class='b4g-inline-schedule-part b4g-inline-reschedule-next'>Next Scheduled: <span class='b4g-inline-date'>{{data.pretty-next-time}}</span></span><span class='b4g-inline-schedule-part'>End: <span class='b4g-inline-date'>{{data.pretty-end-time}}</span></span></div></div>",
        tracking: "<div class='b4g-inline-tracking b4g-inline-part'><div class='b4g-inline-tracking-opens'><table><colgroup><col/><col class='b4g-tracking-first'/><col class='b4g-tracking-last'/></colgroup><tr><th>OPENED &ndash; {{data.open-data.opens}} TIMES</th><td><span class='b4g-tracking-time-title'>FIRST</span> {{data.open-data.pretty-first-time}}</td><td><span class='b4g-tracking-time-title'>LAST</span> {{data.open-data.pretty-last-time}}</td></tr></table></div><div class='b4g-inline-tracking-clicks'><table class='b4g-inline-linktracking'><colgroup><col class='b4g-tracking-click-total'/><col/><col class='b4g-tracking-first'/><col class='b4g-tracking-last'/></colgroup><thead><tr><th colspan='4'>CLICKED &ndash; {{data.total-link-clicks}} TIMES</th></tr></thead>{{data.link-click-content}}</table></div><div class='b4g-tracking-hint-text'>Updates every 10 minutes. Not all opens will be tracked. <a href='https://www.boomeranggmail.com/faq.html#ReadReceiptsFeature'>See here for more information.</a></div></div>",
        "link-tracking": "<tr><td class='b4g-tracking-click-total'>{{clicks}}</td><td class='b4g-trcking-click-url'><a href='{{url}}' target='_blank'>{{url}}</a></td><td><span class='b4g-tracking-time-title'>FIRST</span> {{pretty-first-time}}</td><td><span class='b4g-tracking-time-title'>LAST</span> {{pretty-last-time}}</td></tr>",
        notes: "<div class='b4g-inline-notes'><span class='b4g-inline-notes-label'>Note added:</span> <span class='b4g-inline-notes-text'>{{notes}}</span> <button>Edit</button></div>",
        reschedule: '<div class="b4g-reschedule-popup"><h3>Reschedule this message</h3><form autocomplete="off"><select class="b4g-return-condition"><option value="N">Return regardless</option><option value="R">Only if there\'s no reply</option></select><label class="b4g-send-ifnoreply"><input type="checkbox" value="if-no-reply"/> Only if nobody replies</label><div class="b4g-ifnoreply-warning"></div><label><span class="b4g-reschedule-example">Example: "Monday 9am", "Dec 23"</span><input type="text" class="b4g-reschedule-date"/><span class="b4g-reschedule-preview"></span></label><div class="b4g-reschedule-buttons"><button type="submit" class="by-button by-button-secondary"><span class="by-button-text">Reschedule</span></button><button class="b4g-reschedule-cancel by-button"><span class="by-button-text">Cancel</span></button></div></form></div>',
        "recurring-cancel-confirmation": '<div class="b4g-recurring-confirmation"><h3>Are you sure you want to stop sending all subsequent copies of this recurring message?</h3><p>The message will move back to your Drafts folder.</p><div class="b4g-recur-confirm-buttons"><button class="by-button by-button-secondary"><span class="by-button-text">Yes, stop sending</span></button><button class="by-button b4g-cancel"><span class="by-button-text">Cancel</span></button></div></div>',
        "recurring-skip-next-confirmation": '<div class="b4g-recurring-confirmation"><h3>Skip next message?</h3><p>The message scheduled to send on <strong>{{pretty-skip-date}} will be skipped</strong>.  The rest of the messages will still go out as previously scheduled.</p><div class="b4g-recur-confirm-buttons"><button class="by-button by-button-secondary"><span class="by-button-text">Yes, skip message</span></button><button class="by-button b4g-cancel"><span class="by-button-text">Cancel</span></button></div></div>',
        "edit-email-button": '<div class="b4g-edit-button-container"><button class="b4g-inline-edit-message by-button by-button-primary"><span class="by-button-text">Edit Message</span></button></div>'
      },
      Ba = (Math.random() + "").substr(2),
      v, N = {},
      ba = 0;
    return {
      is_enabled: function() {
        return v && v.enabled
      },
      init: e,
      expire_cache: function() {
        var a = new Date,
          c = a.getMonth() + 1 + "/" + a.getDate() + "/" + a.getFullYear(),
          a = 12 < a.getHours() ? a.getHours() - 12 + ":" + (10 > a.getMinutes() ? "0" : "") + a.getMinutes() + " PM" : a.getHours() + ":" + a.getMinutes() +
          " AM";
        A("b4g-inline-manage-last-update-" + y(), c + " " + a);
        if (v) {
          v["last-updated"] = 0;
          var c = v["message-ids"],
            e;
          for (e in c) c.hasOwnProperty(e) && (v["message-ids"][e]["last-updated"] = 0);
          b();
          d(v)
        }
      },
      enable: b,
      troubleshoot: function(a) {
        g(function(b) {
          a.local(null, b)
        });
        h(function(b, c) {
          var d = a.server;
          if (b) return d(b.status + " -- " + b.error);
          if (!c) return d("No inline-manage data received.");
          if (!c.success) return d(c.error);
          l(c["message-ids"]);
          return d(null, "OK")
        })
      }
    }
  }();
  var Od = function() {
      function b(b) {
        ud(function() {
          a.ajax({
            type: "post",
            url: "https://b4g.baydin.com/mailcruncher/respondableconsent",
            xhr: J,
            success: function(a) {
              var c = a.message;
              "error" == a.status && u(c);
              Sa(function() {
                b()
              })
            }
          })
        }, function() {
          b()
        })
      }

      function d(b) {
        a.extend(this, ja);
        a.extend(this, {
          grades: []
        }, b);
        this.currentValue = this.currentValue < this.grades.length ? this.currentValue : 0;
        this.currentGrade = this.grades[this.currentValue];
        this.$el = this._createElement();
        this.render()
      }

      function c(b) {
        var c = {
          name: "",
          gradientColors: ["#E24D00", "#E8A42A", null, "#44c417"],
          minValue: 0,
          maxValue: 100,
          codings: [],
          previousValue: 0,
          optimalRanges: [],
          transformOptimalRangeLabel: function(a, b) {
            return a
          },
          dialogOptions: {
            $dialogContainer: a("body"),
            prescriptionMap: function(a, b) {
              return ""
            },
            title: "",
            subtitle: "",
            description: "desc",
            dialogClass: ""
          },
          clickEventsEnabled: !0,
          enabled: !0,
          locked: !1
        };
        a.extend(this, ja);
        a.extend(!0, this, c, b);
        this.dialogOptions.title = this.dialogOptions.title || this.name;
        this.currentValue = isFinite(this.currentValue) ? this.currentValue : this.minValue;
        this.initialValue || (this.initialValue = this.currentValue);
        this.$el = this._createAttributeMeter();
        this.render()
      }

      function e(b) {
        a.extend(this, ja);
        a.extend(this, {
          numSegments: 7,
          height: 14,
          currentValue: 0,
          previousValue: 0
        }, b);
        this.minValue = 0;
        this.maxValue = this.numSegments;
        this.$el = this._createEmailMeterElement();
        this.render()
      }

      function f(b) {
        var c = {
          steps: [{
            title: "",
            description: "",
            beforeShow: function() {},
            buttons: []
          }],
          $container: a("body"),
          cleanup: function() {},
          completedCallback: function() {},
          disabledCallback: function() {},
          skipButtonClass: "em-skip",
          nextButtonClass: "em-next"
        };
        a.extend(this, c, b);
        this.currentStep = 0;
        this.$displayedElement = a();
        this.respondableWasDisabled = !1
      }
      var g = null,
        l = null,
        k = !1,
        h;
      window.URL = window.URL || window.webkitURL;
      var r;
      try {
        r = new Blob([BoomerangEmailMeterWorkerFunction.toString() + "self.onmessage=function(e){postMessage(BoomerangEmailMeterWorkerFunction().calculate_email_readability_metrics(e.data));}"], {
          type: "application/javascript"
        })
      } catch (Cf) {}
      "Chrome" === Pa.browser && 59 <= Pa.version || "Opera" === Pa.browser || "Firefox" === Pa.browser && window.B4G_FIREFOX_HAS_RESPONDABLE_EXTENSION_WEB_WORKER ?
        window.addEventListener("message", function(a) {
          a.data.type && "B4G_RESPONDABLE_OUTPUT" == a.data.type && (k || p(a.data.metrics))
        }) : (h = new Worker(URL.createObjectURL(r)), h.onmessage = function(a) {
          k || p(a.data)
        });
      var p = function(a) {
          var b = l.data("emailMeterGauge"),
            c = l.data("respondableGrade");
          if (ca()) {
            var d = l.data("sliderWidgets"),
              e = !a.wordCount,
              f = a;
            f.fleschKincaidGradeLevel = 7 > a.wordCount ? "not enough data" : Math.floor(10 * f.fleschKincaidGradeLevel) / 10;
            a = f;
            d.subjectLength.update((V(l).match(/\S+/g) || []).length);
            d.fleschKincaidGradeLevel.update(a.fleschKincaidGradeLevel);
            d.questionCount.update(a.questionCount);
            d.wordCount.update(a.wordCount);
            l.data("$expandedView")
          }
          if (!ma() || m) a = z(a.respondableScore), b && b.update(a), c && c.update(e ? -1 : a);
          l = null
        },
        t = function(a, b) {
          ["politeness", "emailSentiment", "subjectivity"].forEach(function(c) {
            a[c].updateOptions({
              enabled: b,
              clickEventsEnabled: b
            })
          })
        },
        w = function(a) {
          var b = V(a);
          da(a) && (b = "A reply subject");
          return b
        },
        m = !1,
        x = function(b, c) {
          var d = b.data("sliderWidgets"),
            e = b.data("$expandedView"),
            f = (new Date).valueOf(),
            g = function() {
              m = !0;
              t(d, !1);
              e.find(".em-error-msg").length || e.find(".email-meters-container").append(a("<div/>").addClass("em-error-msg").html("Temporarily unavailable."))
            };
          a.ajax({
            url: "https://b4g.baydin.com/mailcruncher/respondablescore",
            data: {
              text: c,
              subject: w(b)
            },
            type: "POST",
            xhr: J,
            success: function(a) {
              if (!k) {
                var c = a.status;
                if ("success" == c) {
                  if (m = !1, t(d, !0), e.find(".em-error-msg").remove(), c = b.data("respondableTimestamp"), !(null != c && c > f)) {
                    b.data("respondableTimestamp", f);
                    var c = !a.metrics.wordCount,
                      h = a.metrics;
                    7 > a.metrics.wordCount ?
                      h.politeness = h.subjectivity = h.emailSentiment = "not enough data" : (h.politeness = Math.floor(1E3 * h.politeness) / 1E3, h.subjectivity = Math.floor(1E3 * h.subjectivity) / 1E3, h.emailSentiment = Math.floor(100 * h.sentiment) / 100);
                    a = b.data("emailMeterGauge");
                    var l = b.data("respondableGrade"),
                      p = D(h.score);
                    a.update(p);
                    l.update(c ? -1 : p);
                    d.politeness.update(h.politeness);
                    d.emailSentiment.update(h.emailSentiment);
                    d.subjectivity.update(h.subjectivity)
                  }
                } else "error" == c && "not authorized" == a.message ? localStorage.removeItem("b4g_respondable-" +
                  y()) : "error" == c && "downgraded" == a.message ? Sa() : g()
              }
            },
            error: function() {
              g()
            }
          })
        },
        z = function(a) {
          return [.2, .28, .34, .365, .421, .54, .65, 1].findIndex(function(b) {
            return a < b
          })
        },
        D = function(a) {
          return [.2, .272, .3, .352, .41, .49, .62, 1].findIndex(function(b) {
            return a < b
          })
        },
        L = function(a) {
          return 0 <= a || 7 >= a ? Math.floor(a / 2) + 1 : 0
        },
        B = function() {
          if (K()) return "Send" === a(".aoO").text() ? "English" : "Other";
          var b = a("html", document).attr("lang");
          return "en" === b || null == b ? "English-US" : "en-GB" === b ? "English-UK" : "Other"
        },
        F = function() {
          Ma().enabled &&
            a(".aoI").not(".email-meter").each(function() {
              var b = a(this);
              0 != b.find(".LW-avf").length && 0 != b.find(".sendLaterTable").length && (b.addClass("email-meter"), E(b), I(b), fa(b))
            })
        },
        E = function(a) {
          var b = a.find(".LW-avf");
          da(a) || a.find("input[name='subjectbox']").bind("keyup paste", function() {
            a.trigger("EMAIL_METER_EVENT")
          });
          (new ka(function(b) {
            a.trigger("EMAIL_METER_EVENT")
          })).observe(b[0], {
            childList: !0,
            characterData: !0,
            subtree: !0
          })
        },
        I = function(b) {
          Ia(b);
          K();
          var c = Bb(b),
            d = fb(),
            f = b.data("emailMeterGauge");
          if (!f) {
            var p =
              Ac(b),
              f = 3 === q() ? "em-email-meter-gauge gm-respondable" : "em-email-meter-gauge",
              f = a("<div class='" + f + "'></div>").append(a("<h1/>").html("<span><img src='https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/respondable/respondable-questionmark.png' alt='Learn more' class='em-info'><strong>Boomerang</strong> Respondable</span>"));
            d ? f.css("position", "static") : 3 === q() && c ? f.css("bottom", "unset") : 3 === q() ? f.css("bottom", "unset") : c ? f.css("bottom", -1 * p.height() + 4) : f.css("bottom", "5px");
            3 === q() || fb() ? (c = a("td.respondable-cell",
              p), c.length || (c = a("<td class='gU Up respondable-cell'></td>"), d = a(".OoRYyc", b), d.length ? d.after(c) : (d = a(".sendLaterTable", b), d.append(c))), c.append(f)) : p.prepend(f);
            f.click(function() {
              g = b;
              Y()
            });
            f = new e({
              context: b,
              parentSelector: ".em-email-meter-gauge",
              currentValue: 0,
              height: 8
            });
            b.bind("EMAIL_METER_EVENT", function(c) {
              var d = a(this);
              ia(function() {
                if (!l && !k) {
                  U(d);
                  var c = d.find(".LW-avf").clone().find("div[data-smartmail='gmail_signature']").remove().end();
                  c.find("div.gmail_quote").remove();
                  c.find("span.XjviVd").remove();
                  "innerText" in c[0] ? c = c[0].innerText : (c = "<div>" + c.html() + "</div>", c = a(c.replace(/(<(br|div|p|li)\s*\/?\s*>)/gi, "$1{new_line}")).text().replace(/\{new_line\}/g, "\n"));
                  var e = w(b);
                  h ? h.postMessage([c, e]) : window.postMessage({
                    type: "B4G_RESPONDABLE_INPUT",
                    composeBodyText: c,
                    subject: e
                  }, "*");
                  la();
                  ma() && x(d, c);
                  l = d
                }
              }, 500)
            });
            b.trigger("EMAIL_METER_EVENT");
            b.data("emailMeterGauge", f)
          }
          b.find(".em-email-meter-gauge");
          H(b)
        },
        H = function(b) {
          "true" !== R("b4g-has-seen-respondable-announcement") && (Ma().hasSeenFTUE ? A("b4g-has-seen-respondable-announcement",
            !0) : "true" === R("b4g-has-seen-click-open-tracking-announcement") && !0 !== Ld && !0 !== Md && !0 !== ob.requestInFlight && (1 < 20 * Math.random() || y() && a.ajax({
            method: "GET",
            url: "https://b4g.baydin.com/mailcruncher/checkIfHasSeenAnnouncementsAndFTUEs",
            data: {
              guser: y(),
              specificallyCheckedValue: "hasSeenRespondableAnnouncementTooltip"
            },
            xhr: J,
            success: function(a) {
              "success" === a.status ? (!1 === a.hasSeenRespondableAnnouncementTooltip && (M(b), n(["respondable", "announcement-tooltip", "displayed-for-signed-in-user"]), a.hasSeenRespondableAnnouncementTooltip = !0), Id(a)) : !0 === a.showCurrentAnnouncementOrFTUE && (M(b), n(["respondable", "announcement-tooltip", "displayed-for-signed-out-user"]))
            }
          })))
        },
        M = function(b) {
          var c = function(a) {
              Q(function() {
                g = a;
                T(a)
              })
            },
            d = a(".em-email-meter-gauge", b),
            e = d.offset();
          nb({
            bottom: a("body").height() - e.top + 2,
            right: a("body").width() - (e.left + d.outerWidth() / 2) - 24,
            content: a('<div id="b4g-respondable-announcement"><div id="b4g-respondable-announcement-close-btn"><img src="https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/delete.png"></div><h3>Did you know?</h3><p>Respondable can help you write better emails with actionable, real-time advice powered by artificial intelligence.</p></div>'),
            close: function() {
              c(b)
            },
            button: "Learn More"
          });
          a("#b4g-respondable-announcement-close-btn").click(function(b) {
            b.preventDefault();
            a("#b4g-respondable-announcement").closest(".b4g-tooltip-ftue").remove()
          });
          Md = !0;
          A("b4g-has-seen-respondable-announcement", !0)
        },
        Y = function() {
          if (ca()) ba();
          else {
            var a = la(),
              b = ma();
            Q(function() {
              if (Ma().hasSeenFTUE) {
                v();
                var c = la(),
                  d = ma();
                a == c && b == d || P(g)
              } else T(g)
            }.bind(this))
          }
        },
        T = function(c) {
          function d(b) {
            k = !0;
            var g = [{
                text: "Skip",
                action: "skip"
              }, {
                text: "Next",
                action: "next",
                "class": "em-btn-primary"
              }],
              h = {};
            U(c);
            var l = aa(c);
            l.addClass("em-ftue");
            var p = l.find(".em-upgrade-link"),
              t = K(c),
              r = 0 !== a("body").find(".aVN").length,
              w = Bb(c),
              m = c.data("emailMeterGauge"),
              n = c.data("respondableGrade"),
              C = c.data("sliderWidgets"),
              Ua = new f({
                steps: [{
                    title: "Meet Respondable!",
                    description: "Respondable helps you write better emails with actionable, real-time advice powered by artificial intelligence.",
                    "class": "em-ftue-welcome",
                    buttons: [{
                        text: "Skip",
                        action: "skip"
                      }, {
                        text: "Learn More",
                        action: "next",
                        "class": "em-btn-primary"
                      },
                      {
                        text: "Disable Respondable",
                        action: "disable",
                        "class": "em-btn-aside"
                      }
                    ],
                    beforeShow: function() {
                      v();
                      l.get(0).scrollIntoView();
                      p.hide();
                      l.find(".em-error-msg").remove();
                      a.each(e.sliders, function(a, b) {
                        h[a] = {
                          enabled: C[a].enabled,
                          locked: C[a].locked
                        };
                        C[a].updateOptions({
                          clickEventsEnabled: !1,
                          enabled: !0,
                          locked: !1
                        });
                        C[a].update(b)
                      });
                      n.update(e.grade);
                      m.update(e.score);
                      var b = m.$el.closest(".em-email-meter-gauge");
                      3 === q() ? (b = b.clone(), b.addClass("em-ftue-gauge"), b.addClass("em-ftue-gauge-new-ui"), b.addClass("em-ftue")) :
                        b = b.clone().addClass("em-ftue-gauge").css({
                          "z-index": 10,
                          position: "absolute"
                        });
                      var d = c;
                      if (3 === q() && w) b.addClass("em-thread-view-new-ui");
                      else if (3 === q() && t) b.css({
                        bottom: "5px",
                        right: "22px"
                      }), d = a("body");
                      else if (3 === q() && r) b.addClass("em-popin-view-new-ui");
                      else if (w || t) b.css("bottom", 5), w || (d = a("body"));
                      b.appendTo(d)
                    }
                  }, {
                    description: "Get an instant prediction of how likely your message is to get a response, backed by machine learning trained on millions of messages.",
                    buttons: g,
                    "class": "ftue-highlight-grade",
                    beforeShow: function() {
                      l.addClass("ftue-highlight-grade")
                    },
                    beforeHide: function() {
                      l.removeClass("ftue-highlight-grade")
                    },
                    pointerType: "arrow",
                    $target: n.$el.closest(".em-grade-container")
                  }, {
                    description: "As you write, see how each parameter contributes to the effectiveness of your email.",
                    buttons: g,
                    "class": "ftue-highlight-meters",
                    beforeShow: function() {
                      l.addClass("ftue-highlight-meters")
                    },
                    beforeHide: function() {
                      l.removeClass("ftue-highlight-meters")
                    },
                    pointerType: "bracket",
                    $target: l.find(".email-meters").first()
                  },
                  {
                    description: "Get an explanation and advice on how to improve each parameter by clicking on the number.",
                    buttons: g,
                    "class": "ftue-highlight-one-meter",
                    beforeShow: function() {
                      l.addClass("ftue-highlight-one-meter");
                      C.fleschKincaidGradeLevel.$el.bind("click.ftue", Ua.next.bind(Ua))
                    },
                    beforeHide: function() {
                      l.removeClass("ftue-highlight-one-meter");
                      C.fleschKincaidGradeLevel.$el.unbind("click.ftue")
                    },
                    pointerType: "arrow",
                    $target: C.fleschKincaidGradeLevel.$el
                  }, {
                    description: "<div style='width: 382px; height: 348px; margin-left: -10px;'></div>",
                    buttons: [{
                      text: "Got it!",
                      action: "next",
                      "class": "em-btn-primary"
                    }],
                    "class": "ftue-dialog",
                    beforeShow: function() {
                      C.fleschKincaidGradeLevel.openDialogWindow(Ua.next.bind(Ua));
                      Ua.$overlay.css("z-index", 200)
                    },
                    beforeHide: function() {
                      C.fleschKincaidGradeLevel.removeDialogWindow();
                      Ua.$overlay.css("z-index", 5)
                    }
                  }, {
                    description: "If you're on a Pro or Premium plan, you'll get access to these advanced machine learning features.",
                    buttons: [{
                      text: "Done",
                      action: "next",
                      "class": "em-btn-primary"
                    }],
                    "class": "ftue-highlight-premium",
                    beforeShow: function() {
                      l.addClass("ftue-highlight-premium");
                      l.find(".email-meter-display-inner").get(0).scrollTop = 1E3
                    },
                    beforeHide: function() {
                      l.removeClass("ftue-highlight-premium")
                    },
                    pointerType: "bracket",
                    $target: l.find(".email-meters.em-locked")
                  }
                ],
                $container: w || t ? a("body") : c.parent(),
                $positioningContext: w || t ? a("body") : c.closest(".nH.Hd"),
                cleanup: function() {
                  k = !1;
                  p.show();
                  a.each(C, function(a, b) {
                    m.update(0);
                    b.update(0);
                    b.updateOptions({
                      clickEventsEnabled: !0,
                      enabled: h[a].enabled,
                      locked: h[a].locked
                    })
                  });
                  ba(c);
                  a(".em-ftue-gauge").remove();
                  l.removeClass("em-ftue")
                },
                completedCallback: b,
                disabledCallback: xd
              });
            Ua.start()
          }
          if (!c.data("hasSeenFtueThisSession")) {
            c.data("hasSeenFtueThisSession", !0);
            var e = {
                sliders: {
                  subjectLength: 1,
                  wordCount: 140,
                  fleschKincaidGradeLevel: 9,
                  questionCount: 1,
                  emailSentiment: .15,
                  politeness: 75,
                  subjectivity: .35
                },
                grade: 4,
                score: 4
              },
              h = "Other" == B(),
              l = !Ob() && Ta();
            a.ajax({
              url: "https://b4g.baydin.com/mailcruncher/respondableftueseen",
              type: "POST",
              xhr: J
            });
            h ? bf(xd, function() {
              d(function() {
                l ? b(function() {
                  v();
                  P(g)
                }) : (v(), P(g))
              })
            }) : d(function() {
              l ? b(function() {
                v();
                P(g)
              }) : (v(), P(g))
            })
          }
        },
        P = function(a) {
          var b = ma(),
            c = !ma() && !Ta(),
            d = a.data("sliderWidgets"),
            e = a.data("$expandedView");
          d.emailSentiment.updateOptions({
            enabled: b,
            locked: c
          });
          d.politeness.updateOptions({
            enabled: b,
            locked: c
          });
          d.subjectivity.updateOptions({
            enabled: b,
            locked: c
          });
          e.find(".em-upgrade-link").toggle(!b);
          a.trigger("EMAIL_METER_EVENT")
        },
        W = function(a) {
          var b = a.data("sliderWidgets") || {};
          Object.keys(b).forEach(function(a) {
            b[a].render()
          }, this)
        },
        U = function(b) {
          aa(b);
          var c = b.data("sliderWidgets");
          if (!c || a.isEmptyObject(c)) c = da(b) ? a("body") : b.parent(), c = Z({}, {
            context: b.data("$expandedView"),
            $dialogContainer: c,
            isReply: da(b),
            plan: la(),
            showPremiumSliders: !0
          }), b.data("sliderWidgets", c)
        },
        X = function(a, b) {
          var c = Math.floor(Math.max(255, Math.min(2050, a + 125))),
            d = Math.floor(Math.max(0, Math.min(1800, a - 125)) - Math.max(0, Math.floor(a / 20))),
            e = c - d;
          if (1250 < a) var f = Math.max(5, c - 2E3),
            g = Math.max(20, 1250 - d - 1),
            e = [0, 0, 0, 0, g, 0, 0, Math.floor(e - g - f), f];
          else {
            var f = Math.max(8 - d, 0),
              g = Math.max(30 -
                f - d, 0),
              k = Math.max(50 - g - f - d, 0),
              h = Math.max(250 - k - g - f - d, 20),
              e = e - (f + g + k + h + (1250 < c ? Math.floor(a / 50) : 0)),
              l = Math.max(Math.min(1250 - d, e), 0),
              p;
            250 > a ? (h -= 10, p = 10) : h = p = h / 2;
            e = [f, g, k, h, p, l, 0, e - l, 0]
          }
          e.slice(4).reduce(function(a, b) {
            return a + b
          });
          f = 250;
          250 < d + 40 && (f = 1250 > a ? d + 40 : d + 10);
          return {
            minValue: d,
            maxValue: c,
            codings: [{
              range: e[0],
              ordinal: G.BAD
            }, {
              range: e[1],
              ordinal: G.OK
            }, {
              range: e[2],
              ordinal: G.GOOD
            }, {
              range: e[3],
              ordinal: G.BEST
            }, {
              range: e[4],
              ordinal: G.BEST
            }, {
              range: e[5],
              ordinal: G.GOOD
            }, {
              range: e[6],
              ordinal: G.OK
            }, {
              range: e[7],
              ordinal: G.OK
            }, {
              range: e[8],
              ordinal: G.BAD
            }],
            optimalRanges: [
              [50, f]
            ]
          }
        },
        G = {
          BAD: 0,
          OK: 1,
          GOOD: 2,
          BEST: 3
        },
        Z = function(b, d) {
          b = b || {};
          var e = d.context || a("body"),
            f = {
              $dialogContainer: d.$dialogContainer,
              description: ""
            },
            g = !!d.isReply,
            k = X(0, 0),
            h = {
              description: "Make sure you include a subject in your email if you want to get a response! Messages without subjects only receive responses 14% of the time. But don't get too wordy: emails are increasingly opened on mobile devices, where long subjects get cut off, so <strong>3-7 word subject lines are most effective.</strong>",
              prescriptionMap: function() {
                return "This is a reply message."
              }
            };
          g ? a.extend(h, {
            dialogClass: "em-is-reply",
            subtitle: "Since you don't control the subject length of this message, it's not applicable."
          }) : a.extend(h, {
            prescriptionMap: function(a) {
              return 7 < a ? "Consider shortening your subject line." : 2 <= a ? "None. Your subject line is a good length." : 0 < a ? "Consider a longer subject line." : "You should include a subject line."
            }
          });
          b.subjectLength = b.subjectLength || new c({
            name: "Subject Length",
            minValue: 0,
            maxValue: 12.1,
            optimalRanges: [
              [2, 6]
            ],
            codings: [{
              range: 1,
              ordinal: G.BAD
            }, {
              range: 1,
              ordinal: G.OK
            }, {
              range: 5,
              ordinal: G.BEST
            }, {
              range: 1,
              ordinal: G.GOOD
            }, {
              range: 4,
              ordinal: G.OK
            }, {
              range: 0,
              ordinal: G.BAD
            }],
            dialogOptions: a.extend({}, f, h),
            context: e,
            parentSelector: ".email_meter_subject"
          });
          b.subjectLength.$el.toggleClass("em-is-reply", g);
          b.wordCount = b.wordCount || new c({
            name: "Word Count",
            codings: k.codings,
            optimalRanges: k.optimalRanges,
            transformOptimalRangeLabel: function(a) {
              return "50-250"
            },
            minValue: 0,
            maxValue: k.maxValue,
            beforeUpdate: function(b,
              c, d) {
              var e = {};
              e.dialogOptions = {
                dialogClass: 200 > b ? "low-word-count-dialog" : ""
              };
              (125 < b || 125 < c) && d.updateOptions(a.extend(e, X(b, c)))
            },
            dialogOptions: a.extend({}, f, {
              description: "If you want a response, <strong>aim for a message length of 50-125 words</strong>. It's hard to politely make a request, express urgency, and open/close an email in less than 50 words. Going over 125 words only has a tiny impact on your response rate, but as you approach a Tolstoy novel (1500 or more words), response rates drop off.",
              prescriptionMap: function(a) {
                return 2E3 < a ? "This email is very long. Consider breaking it up." : 250 < a ? "Message length is OK. Shorter might be better." : 50 < a ? "None. Your message is a good length." : 0 < a ? "Consider writing a longer message." : "This email is blank!"
              },
              dialogClass: "word-count-dialog"
            }),
            context: e,
            parentSelector: ".email_meter_word_count"
          });
          b.questionCount = b.questionCount || new c({
            name: "Question Count",
            minValue: 0,
            maxValue: 20.1,
            optimalRanges: [
              [1, 5]
            ],
            codings: [{
                range: 1,
                ordinal: G.BAD
              }, {
                range: 2,
                ordinal: G.BEST
              },
              {
                range: 1,
                ordinal: G.BEST
              }, {
                range: 4,
                ordinal: G.GOOD
              }, {
                range: 12,
                ordinal: G.OK
              }, {
                range: 0,
                ordinal: G.BAD
              }
            ],
            dialogOptions: a.extend({}, f, {
              description: "If you want a response to your email, give the recipient a question to answer. <strong>Asking 1-3 questions in your email gives you the best chance</strong> of getting a response. Don't overwhelm your recipient though: <strong>as you ask more (4+) questions, response rates start to decline</strong>.",
              prescriptionMap: function(a) {
                return 5 < a ? "Consider asking less questions, or sending multiple emails." :
                  0 < a ? "None. Your email contains an optimal number of questions." : "Consider asking a question."
              }
            }),
            context: e,
            parentSelector: ".email_meter_question_count"
          });
          b.fleschKincaidGradeLevel = b.fleschKincaidGradeLevel || new c({
            name: "Reading Level",
            minValue: -1,
            maxValue: 12.1,
            initialValue: 6,
            optimalRanges: [
              [1, 7]
            ],
            displayedValueMap: function(a) {
              return isFinite(a) ? 1 > a ? "K" : 12 < a ? "12+" : a : "--"
            },
            codings: [{
                range: 1,
                ordinal: G.BAD
              }, {
                range: 1,
                ordinal: G.OK
              }, {
                range: 5,
                ordinal: G.BEST
              }, {
                range: 3,
                ordinal: G.GOOD
              }, {
                range: 3,
                ordinal: G.OK
              },
              {
                range: 0,
                ordinal: G.BAD
              }
            ],
            dialogOptions: a.extend({}, f, {
              description: "Reading grade level provides an estimate of how complex your writing is. Surprisingly, <strong>emails written at a 3rd grade reading level</strong> (i.e. emails that could be understood by someone with a 3rd grade education) <strong>are most likely to get a response.</strong> Simpler words and shorter sentences yield a lower reading grade level.",
              prescriptionMap: function(a, b) {
                return "not enough data" === a ? "The email is not long enough to calculate reading level." :
                  isFinite(a) ? 7 < a ? "Consider using simpler words and sentences." : 1 <= a ? "None. Your writing style makes it easy to read and respond." : "Consider using more sophisticated language." : "We couldn't calculate grade level for this message."
              }
            }),
            context: e,
            parentSelector: ".email_meter_flesch_kincaid"
          });
          d.showPremiumSliders && (b.emailSentiment = b.emailSentiment || new c({
            name: "Positivity",
            minValue: -100,
            maxValue: 100,
            enabled: ma(),
            locked: !ma() && !Ta(),
            currentValue: 0,
            optimalRanges: [
              [-50, -10],
              [10, 70]
            ],
            transformOptimalRangeLabel: function(a) {
              return a.replace("&ndash;",
                " to ")
            },
            valueMap: function(a) {
              return isFinite(a) ? Math.round(100 * a) : a
            },
            codings: [{
              range: 25,
              ordinal: G.BAD
            }, {
              range: 10,
              ordinal: G.OK
            }, {
              range: 20,
              ordinal: G.GOOD
            }, {
              range: 20,
              ordinal: G.BEST
            }, {
              range: 20,
              ordinal: G.GOOD
            }, {
              range: 10,
              ordinal: G.OK
            }, {
              range: 15,
              ordinal: G.GOOD
            }, {
              range: 25,
              ordinal: G.BEST
            }, {
              range: 30,
              ordinal: G.GOOD
            }, {
              range: 20,
              ordinal: G.OK
            }, {
              range: 5,
              ordinal: G.BAD
            }],
            dialogOptions: a.extend({}, f, {
              description: "Positivity is a measurement of how positive (words like amazing or wonderful) or negative (words like awful or terrible) your tone is. <strong>The highest response rates come from emails that are slightly positive or slightly negative in tone.</strong> Positivity is calculated via artificial intelligence, so it may not be perfectly accurate - when in doubt, trust your judgment.",
              prescriptionMap: function(a, b) {
                return b.enabled ? "not enough data" === a ? "The email is not long enough to calculate positivity." : isFinite(a) ? 70 < a ? "You may sound too positive." : 10 < a ? "None. Your message has a nicely positive tone." : -10 < a ? "Consider adding some emotion to this message." : -50 < a ? "None. Your tone seems negative, but at an effective level." : "You may sound too negative." : "We couldn't calculate positivity for this message." : "Upgrade to a Pro or Premium plan<br>to unlock this feature."
              }
            }),
            context: e,
            parentSelector: ".email_meter_sentiment"
          }), b.politeness = b.politeness || new c({
            name: "Politeness",
            minValue: 0,
            maxValue: 101,
            enabled: ma(),
            locked: !ma() && !Ta(),
            currentValue: 50,
            optimalRanges: [
              [40, 100]
            ],
            codings: [{
              range: 10,
              ordinal: G.BAD
            }, {
              range: 20,
              ordinal: G.BAD
            }, {
              range: 20,
              ordinal: G.OK
            }, {
              range: 10,
              ordinal: G.GOOD
            }, {
              range: 20,
              ordinal: G.BEST
            }, {
              range: 0,
              ordinal: G.BEST
            }, {
              range: 10,
              ordinal: G.GOOD
            }, {
              range: 10,
              ordinal: G.OK
            }],
            dialogOptions: a.extend({}, f, {
              description: "Indicators of politeness include attempts to minimize or apologize for imposition, or using language that reflects gratitude or positivity. <strong>Emails deemed to be more polite tend to have higher response rates.</strong> Politeness is calculated via artificial intelligence, so the calculation will not always make sense - when in doubt, trust your judgment. ",
              prescriptionMap: function(a, b) {
                return b.enabled ? "not enough data" === a ? "The email is not long enough to calculate politeness." : isFinite(a) ? 100 < a ? "You may sound too deferential." : 40 < a ? "None. Your email sounds appropriately polite." : "You may sound impolite." : "We couldn't calculate politeness for this message." : "Upgrade to a Pro or Premium plan to unlock this feature."
              }
            }),
            context: e,
            parentSelector: ".email_meter_politeness"
          }), b.subjectivity = b.subjectivity || new c({
            name: "Subjectivity",
            minValue: 0,
            maxValue: 101,
            enabled: ma(),
            locked: !ma() && !Ta(),
            currentValue: 50,
            optimalRanges: [
              [10, 100]
            ],
            codings: [{
              range: 10,
              ordinal: G.BAD
            }, {
              range: 20,
              ordinal: G.GOOD
            }, {
              range: 35,
              ordinal: G.BEST
            }, {
              range: 20,
              ordinal: G.BEST
            }, {
              range: 16,
              ordinal: G.GOOD
            }],
            dialogOptions: a.extend({}, f, {
              description: "Subjectivity is a measure of the ratio of opinions to facts in your message. Facts are important, but nothing generates conversation more than opinions. <strong>Sending a subjective email where you take a stance or give an opinion</strong> (that a recipient might affirm or disagree with) <strong>increases response rates</strong> compared to objective emails containing just concrete information.",
              prescriptionMap: function(a, b) {
                return b.enabled ? "not enough data" === a ? "The email is not long enough to calculate subjectivity." : isFinite(a) ? .1 < a ? "None. Your message has a good amount of subjectivity." : "Consider expressing your opinion more forcefully." : "We couldn't calculate subjectivity for this message." : "Upgrade to a Pro or Premium plan to unlock this feature."
              }
            }),
            valueMap: function(a) {
              return isFinite(a) ? Math.round(100 * a) : a
            },
            context: e,
            parentSelector: ".email_meter_subjectivity"
          }));
          return b
        },
        ha = function() {
          g &&
            0 == g.closest("body").length && (ba(), g = null)
        },
        Ba = function() {
          var c = a("<div/>").addClass("email-meters-container"),
            d = a("<div/>").addClass("email-meters").appendTo(c);
          ["email_meter_subject", "email_meter_word_count", "email_meter_question_count", "email_meter_flesch_kincaid"].forEach(function(b) {
            d.append(a("<div/>").addClass(b))
          });
          var e = a("<div/>").addClass("email-meters em-locked").append(a("<h1/>").text("Advanced Features")).appendTo(c);
          ["email_meter_sentiment", "email_meter_politeness", "email_meter_subjectivity"].forEach(function(b) {
            e.append(a("<div/>").addClass(b))
          });
          var f = a("<a class='em-upgrade-link'>Enable advanced features</a>");
          Ta() ? f.click(function() {
            Ob() ? a.ajax({
              type: "post",
              url: "https://b4g.baydin.com/changepreferences",
              data: {
                machineLearningEnabled: "True",
                respondableEnabled: "True"
              },
              xhr: J,
              success: function(a) {
                Sa(function() {
                  P(g)
                })
              }
            }) : b(function() {
              Sa(function() {
                P(g)
              })
            })
          }) : (f.attr("href", "https://b4g.baydin.com/subscriptions?utm_source=b4g&utm_medium=resopndable&utm_campaign=respondableLink"), f.text("Upgrade to Unlock"));
          c.append(f);
          f.toggle(!ma());
          return c
        },
        aa = function(b) {
          var c = b.data("$expandedView");
          if (!c) {
            c = a("<div class='email-meter-display em-neutral-value'><div class='email-meter-display-inner'><header><h1>Boomerang</h1><h2>Respondable</h2></header><div class='em-grade-container'></div></div></div>");
            la();
            var e = Ba(),
              f = new d({
                grades: ["Email is blank", "Very unlikely", "Not very likely", "Likely", "Very Likely"],
                context: b,
                $parent: c.find(".em-grade-container"),
                valueMap: L,
                onUpdate: function(a) {
                  c.toggleClass("em-neutral-value", 0 === a)
                }
              });
            c.find(".email-meter-display-inner").append(e);
            b.data("respondableGrade", f);
            b.data("$expandedView", c)
          }
          return c
        },
        v = function() {
          var b = aa(g);
          if (!b.parent().length) {
            var c;
            Bb(g) ? c = g.closest(".gA.gt") : K() ? c = a("body") : Ia(g) && (c = g.closest(".aaZ"));
            c.append(b);
            N(g)
          }
          g.trigger("EMAIL_METER_EVENT");
          (c = g.data("observer")) && c.disconnect();
          c = new ka(function(a) {
            N.call(this, g)
          });
          g.data("observer", c);
          c.observe(g.find(".aDj").get(0), {
            attributes: !0,
            attributeFilter: ["style"]
          });
          g.addClass("em-open");
          U(g);
          W(g);
          ga(g);
          fa(g);
          n(["respondable", "expanded-view", "show"]);
          g.data("showTimeAnalytics",
            new Date);
          if (!Ia(g)) a(document).one("click", {
            $composeContainer: g
          }, function Af(b) {
            var c = b.data.$composeContainer;
            b = Wa(b);
            if (a.contains(c.get(0), b) || k) a(document).one("click", {
              $composeContainer: c
            }, Af);
            else ba(c)
          });
          return b
        },
        N = function(b) {
          var c = b.find(".aDj"),
            d = b.data("$expandedView"),
            e = b.closest(".gA.gt"),
            f = b.find(".em-email-meter-gauge").offset().top,
            g = 0,
            k = b.closest(".aSt");
          k.length ? f -= k.offset().top : k = a(window);
          if (K()) e = da(b) ? 45 : k.height() - f;
          else if (Ia(b)) e = k.height() - f;
          else {
            var h = c.css("position");
            "fixed" === h ? (e = parseInt(c.css("bottom"), 10) - 5, g = k.width() - c.offset().left - c.width() + 3) : (e = e.offset().top + e.height() - f, g = 10)
          }
          d.css({
            position: h,
            bottom: e,
            right: g
          });
          ga(b)
        },
        ba = function(b) {
          b = b || g;
          a(b.data("$expandedView")).detach();
          b.removeClass("em-open");
          ga(b);
          fa(b);
          (b = b.data("showTimeAnalytics")) ? n(["respondable", "expanded-view", "hide", Math.floor((new Date - b) / 1E3)]): n(["respondable", "expanded-view", "hide"])
        },
        ca = function(b) {
          return (b = b || g) && 0 < a(b.data("$expandedView")).parent().length
        },
        V = function(b) {
          return da(b) &&
            !K(b) ? a(".hP").filter(":visible").text() : b.find("*[name='subjectbox']").val()
        },
        da = function(b) {
          if (K()) return 0 != a(".hP").length;
          b = b.find(".az6");
          return !b.length || "none" === b.css("display")
        },
        fa = function(a) {
          var b = a.find(".em-email-meter-gauge");
          ca(a) ? b.removeAttr("data-tooltip") : b.attr("data-tooltip", "Use artificial intelligence to help\nyou write better emails.")
        },
        ga = function(a) {
          var b = a.find(".Am.editable"),
            c = b.parent(),
            d = a.data("$expandedView");
          ca(a) ? (a = c.width(), b.css("width", a - d.width() - 5)) : b.css("width",
            "100%")
        },
        ja = {
          context: null,
          $parent: null,
          parentSelector: null,
          minValue: 0,
          maxValue: 100,
          currentValue: 0,
          onUpdate: function(a, b, c) {},
          beforeUpdate: function(a, b, c) {},
          update: function(a) {
            a = this.valueMap(a);
            a !== this.currentValue && (this.beforeUpdate(a, this.currentValue, this), this.previousValue = this.currentValue, this.currentValue = a, this.render(), this.onUpdate(a, this.currentValue, this))
          },
          valueMap: function(a) {
            return a
          },
          attachToDOM: function() {
            this.$el.parent().length || this._getParent().append(this.$el)
          },
          _getParent: function() {
            return this.$parent ?
              this.$parent : a(this.parentSelector, this.context)
          }
        };
      d.prototype = {
        CLASS_GRADE_PREFIX: "em-status-",
        render: function() {
          this.attachToDOM();
          this.currentGrade = this.grades[this.currentValue];
          a.each(this.$container.attr("class").split(" "), function(a, b) {
            b.startsWith(this.CLASS_GRADE_PREFIX) && this.$container.removeClass(b)
          }.bind(this));
          this.$container.addClass(this.CLASS_GRADE_PREFIX + this.currentValue);
          this.$mainText.html(this.currentGrade)
        },
        _createElement: function() {
          this.$container = a("<div/>").addClass("em-respondable-grade");
          this.$mainText = a("<strong/>").appendTo(this.$container);
          this.$mainText.html(this.currentGrade);
          a("<span>").html("to receive a response").appendTo(this.$container);
          return this.$container
        }
      };
      c.prototype = {
        INDICATOR_CLASSES: "em-indicator-size-2 em-indicator-size-3 em-indicator-size-4 em-indicator-color-0 em-indicator-color-1 em-indicator-color-2 em-indicator-color-3",
        render: function() {
          this.attachToDOM();
          this.$el.toggleClass("em-neutral-value", !isFinite(this.currentValue));
          this.enabled && (this.displayedValue =
            this.displayedValueMap(this.currentValue, this), this.workingValue = this.workingValueMap(this.currentValue), this._renderIndicator())
        },
        updateOptions: function(b) {
          for (var c in b) this.hasOwnProperty(c) && (a.isPlainObject(this[c]) ? a.extend(this[c], b[c]) : this[c] = b[c]);
          this._updateAttributeMeter();
          this.render()
        },
        displayedValueMap: function(a, b) {
          return isFinite(a) ? a : "--"
        },
        _createDialogElement: function(b) {
          var c = b.subtitle ? a("<p/>").html(b.subtitle) : "";
          return a("<div/>").addClass("em-slider-dialog em-dialog").toggleClass("em-neutral-value",
            this._isNeutral()).toggleClass("em-disabled", !this.enabled).addClass(b.dialogClass || "").append(a("<div/>").addClass("em-close").html("&#215;").click(b.removeDialog)).append(a("<h1/>").html("Recommendation")).append(a("<h2/>").html(b.value)).append(c).append(b.$detailMeter).append(a("<h1/>").html(b.title)).append(a("<p/>").html(b.description)).append(a("<button/>").html("OK").click(b.removeDialog))
        },
        removeDialogWindow: function() {
          this.$dialog && this.$dialog.remove();
          this.$overlay && this.$overlay.remove();
          this.$dialog = this.$overlay = null
        },
        openDialogWindow: function(b) {
          b = a.isFunction(b) ? b : a.noop;
          var c = this.dialogOptions.$dialogContainer;
          this.removeDialogWindow();
          var d = function() {
            this.removeDialogWindow();
            b()
          }.bind(this);
          this.$overlay = a("<div/>").addClass("overlay em-overlay").appendTo(c).click(d);
          var e = this.$meter.clone().addClass("em-detail");
          this.$dialog = this._createDialogElement(a.extend({}, this.dialogOptions, {
            value: this.dialogOptions.prescriptionMap(this.currentValue, this),
            removeDialog: d,
            $detailMeter: e
          })).appendTo(c);
          this.enabled ? (this._drawOptimalRegion(this.$dialog), this._offsetIndicator(e)) : this.$dialog.find(".indicator-container").show().find(".indicator-text").addClass("indicator-link").html("Upgrade to unlock").click(function() {
            window.open("https://b4g.baydin.com/subscriptions?utm_source=b4g&utm_medium=resopndable&utm_campaign=respondableLink", "_blank")
          });
          n(["respondable", "detail-view", "click", this.name])
        },
        workingValueMap: function(a) {
          return isFinite(a) ? Math.min(Math.max(this.minValue, a), this.maxValue - .01) :
            this.initialValue
        },
        _isNeutral: function() {
          return this.$el.hasClass("em-neutral-value") || this.$el.find(".em-neutral-value").length || this.context.hasClass("em-neutral-value")
        },
        _drawOptimalRegion: function(b) {
          if (this.optimalRanges.length) {
            var c = b.find(".em-detail");
            this.optimalRanges.forEach(function(b, d) {
              var e = this._valueToPosition(b[0], c),
                f = this._valueToPosition(b[1], c) - e;
              a("<div/>").addClass("em-optimal").css({
                width: f,
                left: e
              }).append(a("<div/>").addClass("em-optimal-label").html(this.transformOptimalRangeLabel(b[0] +
                "&ndash;" + b[1], d))).appendTo(c)
            }.bind(this))
          }
        },
        _renderIndicator: function(a) {
          this.$indicatorText.html(this.displayedValue);
          this._offsetIndicator()
        },
        _offsetIndicator: function(b) {
          b = b || this.$meter;
          var c = b.find(".indicator-container"),
            d = c.outerWidth() / 2;
          if (!d) {
            var e = c.clone().appendTo(a("body")),
              d = e.outerWidth() / 2;
            e.remove()
          }
          b = this._valueToPosition(this.workingValue, b);
          c.css("left", b - d);
          this.indicatorClass = this._getIndicatorClass();
          this.$indicator.removeClass(this.INDICATOR_CLASSES).addClass(this.indicatorClass)
        },
        _valueToPosition: function(a, b) {
          b = b || this.$el;
          a = Math.min(Math.max(this.minValue, a), this.maxValue);
          var c = b.innerWidth();
          return (a - this.minValue) / this._range * c
        },
        _getIndicatorClass: function() {
          var a = "",
            b = this.codings.find(function(a) {
              return this.workingValue >= a.min && this.workingValue < a.max
            }.bind(this));
          b || (b = this.codings[this.codings.length - 1]);
          return a += "em-indicator-color-" + b.ordinal
        },
        _createTooltip: function() {
          var b = this.clickEventsEnabled ? "Click to learn more." : "";
          return a("<span />").addClass("em-info").attr("data-tooltip",
            b)
        },
        _createAttributeMeter: function() {
          this._calculateRanges();
          var b = a("<div/>").addClass("meter-container").toggleClass("em-disabled", !this.enabled);
          b.toggleClass("em-upgrade-needed", this.locked);
          var c = a("<h1/>").html(this.name).appendTo(b);
          this.$info = this._createTooltip().appendTo(c);
          this.$meter = a("<div/>").addClass("em-meter").appendTo(b);
          this.$bar = a("<div/>").addClass("meter-background").appendTo(this.$meter);
          this._setBackground();
          this.$indicatorContainer = a("<div/>").addClass("indicator-container").appendTo(this.$meter);
          this.$indicator = a("<div/>").addClass("indicator").appendTo(this.$indicatorContainer);
          this.$indicatorText = a("<span/>").addClass("indicator-text").appendTo(this.$indicator);
          a("<div/>").addClass("indicator-shadow").appendTo(this.$indicatorContainer);
          this.$indicatorContainer.toggle(this.enabled);
          this.$overlayText = a("<span/>").html("Pro, Premium").appendTo(this.$meter);
          this.$overlayText.toggle(this.locked);
          this.clickEventsEnabled && b.children().bind("click.slider", this.openDialogWindow.bind(this));
          return b
        },
        _updateAttributeMeter: function() {
          this._calculateRanges();
          this.$el.toggleClass("em-disabled", !this.enabled);
          this.$el.toggleClass("em-upgrade-needed", this.locked);
          this._setBackground();
          this.$indicatorContainer.toggle(this.enabled);
          this.$overlayText.toggle(this.locked);
          this.$info.attr("data-tooltip", this.clickEventsEnabled ? "Click to learn more." : "");
          this.clickEventsEnabled ? this.$el.children().bind("click.slider", this.openDialogWindow.bind(this)) : this.$el.children().unbind("click.slider")
        },
        _getBackgroundValues: function() {
          var b = [],
            c = 0;
          a.each(this.codings, function(a, d) {
            this.gradientColors[d.ordinal] && b.push({
              position: c,
              color: this.gradientColors[d.ordinal]
            });
            c += d.range / this._range * 100
          }.bind(this));
          return b
        },
        _setBackground: function() {
          var b = this._getBackgroundValues(),
            c = "linear-gradient(to right";
          a.each(b, function(a, b) {
            c += ", " + b.color + " " + Math.min(100, b.position) + "%"
          });
          c += ")";
          this.$bar.css("background", c)
        },
        _calculateRanges: function() {
          this._range = this.maxValue - this.minValue;
          var a = this.minValue;
          this.codings.forEach(function(b) {
            b.min =
              a;
            b.max = a += b.range
          })
        }
      };
      e.prototype = {
        CLASS_SEGMENT_ON: "em-segment-on",
        CLASS_SCORE_PREFIX: "em-value-",
        render: function() {
          this.attachToDOM();
          if (this.previousValue !== this.currentValue) {
            a.each(this.$el.attr("class").split(" "), function(a, b) {
              b.startsWith(this.CLASS_SCORE_PREFIX) && this.$el.removeClass(b)
            }.bind(this));
            this.$el.addClass(this.CLASS_SCORE_PREFIX + this.currentValue);
            var b = a(this.$el.find(".em-segment"));
            b.slice(0, this.currentValue).addClass(this.CLASS_SEGMENT_ON);
            b.slice(this.currentValue, this.numSegments).removeClass(this.CLASS_SEGMENT_ON)
          }
        },
        _createEmailMeterElement: function() {
          for (var b = this._getParent(), c = 100 / this.numSegments + "%", b = a("<div/>").addClass("email-meter-widget").css("height", this.height).css("width", "100%").appendTo(b), d = a("<div/>").addClass("em-segments").css("width", "100%").appendTo(b), e = 0; e < this.numSegments; e++) d.append(a("<div/>").addClass("em-segment").css({
            width: c
          }).append(a("<div/>")));
          b.append(a("<div/>").addClass("email-meter-shadow"));
          return b
        }
      };
      f.prototype = {
        start: function() {
          this.show(0);
          this.toggleOverlay(!0)
        },
        next: function() {
          if (this.currentStep + 1 < this.steps.length) {
            var a = this.steps[this.currentStep];
            a && a.beforeHide && a.beforeHide();
            this.show(this.currentStep + 1)
          } else this.close()
        },
        toggleOverlay: function(b) {
          b && !this.$overlay ? (this.$overlay = a("<div/>").addClass("overlay em-overlay-ftue"), this.$overlay.appendTo(this.$container)) : !b && this.$overlay && (this.$overlay.remove(), this.$overlay = null)
        },
        show: function(a) {
          a > this.steps.length || (this.toggleOverlay(!0), this.currentStep = a, a = this.steps[a], a.beforeShow && a.beforeShow(),
            this.$displayedElement.remove(), this.$displayedElement = this._createElement(a), this.$displayedElement.appendTo(this.$container), this._transformToPointerType(a.pointerType, this.$displayedElement, a.$target))
        },
        hide: function() {
          this.toggleOverlay(!1);
          this.$displayedElement.remove();
          this.$displayedElement = a()
        },
        close: function() {
          this._onClose()
        },
        disable: function() {
          this.respondableWasDisabled = !0;
          this._onClose()
        },
        _transformToPointerType: function(a, b, c) {
          "bracket" === a ? this._addBracket(c, b) : "arrow" === a ? this._addArrow(c,
            b) : b.addClass("em-center");
          return b
        },
        _addArrow: function(a, b) {
          b.addClass("em-pointer-arrow");
          var c = a.offset().top + a.height() / 2 - this.$positioningContext.offset().top,
            d = b.find("p"),
            d = d.offset().top + d.height() / 2 - b.offset().top;
          b.css({
            top: c - d,
            right: this.$positioningContext.offset().left + this.$positioningContext.width() - a.offset().left
          })
        },
        _addBracket: function(b, c) {
          var d = a("<div/>").addClass("em-pointer em-bracket").css({
              height: b.height()
            }),
            e = b.offset().top - this.$positioningContext.offset().top,
            f = this.$positioningContext.offset().left +
            this.$positioningContext.width() - b.offset().left;
          c.css({
            top: e,
            right: f
          }).addClass("em-pointer-bracket").prepend(d)
        },
        _createElement: function(b) {
          var c = b.title ? a("<h1/>").html(b.title) : "",
            d = b.description ? a("<p/>").html(b.description) : "",
            e = this._createButtonBar(b.buttons),
            c = a("<div/>").addClass("em-step").append(c).append(d).append(e);
          return a("<div/>").addClass("em-step-container").addClass(b["class"] || "").append(c)
        },
        _createButtonBar: function(b) {
          if (!b || !b.length) return "";
          var c = a("<div/>").addClass("em-button-bar");
          a.each(b, function(b, d) {
            var e = a.noop;
            "skip" === d.action ? e = this.close.bind(this) : "next" === d.action ? e = this.next.bind(this) : "disable" === d.action ? e = this.disable.bind(this) : a.isFunction(d.action) && (e = d.action);
            c.append(a("<span/>").addClass("em-btn " + (d["class"] || "")).html(d.text).click(e))
          }.bind(this));
          return c
        },
        _onClose: function() {
          this.toggleOverlay(!1);
          var a = this.steps[this.currentStep];
          a && a.beforeHide && a.beforeHide();
          this.$displayedElement.remove();
          this.cleanup();
          this.respondableWasDisabled ? (this.disabledCallback(),
            n(["respondable", "ftue", "disabled"])) : (this.completedCallback(), n(["respondable", "ftue", "completed", this.currentStep]))
        }
      };
      var ia = function() {
        var a = 0;
        return function(b, c) {
          clearTimeout(a);
          a = setTimeout(b, c)
        }
      }();
      return {
        watch_for_new_compose_containers: function() {
          setInterval(F, 1E3);
          setInterval(ha, 1E3)
        }
      }
    }(),
    zd = 1,
    Ad = 2,
    Ce = function() {
      var a = 0;
      return function(d, c) {
        clearTimeout(a);
        a = setTimeout(d, c)
      }
    }(),
    sf = '<div class="b4g-tooltip-ftue"><div class="b4g-ftue-content"/><button class="T-I J-J5-Ji T-I-atl b4g-ftue-button"/><div class="b4g-ftue-pointer"/></div>',
    Ld = !1,
    Md = !1,
    uf = '<div><h3>Did you know?</h3><p><strong>You can request a read receipt and track clicks on links in your message.</strong> We will notify you when someone reads your email or clicks a link.</p><p>To get started, click the "Request read receipt and track clicks" button below.</p></div>',
    sc = ["<div><h3>Awesome! Here is how it works.</h3><ol><li>You will get an email when the message is opened.</li><li>Your own opens and clicks are not counted.</li><li>Since some email clients are not compatible with the read receipt feature, there may be cases when opens/clicks are not reported.</li><li>The recipients can choose to not provide read receipts.</li></ol></div>",
      '<div><p>We have integrated read receipt and click tracking with our original Boomerang feature so you can get reminders for messages that don\'t get opened or clicked.</p><p>We added "if not opened" and "if not clicked" options in the drop down below.</p></div>', "<div><p>To see more details on your tracked messages after they are sent, click here and go to <strong>Manage scheduled messages</strong>.</p><p>Thanks and let us know how this feature works for you.</p></div>"
    ],
    yf = {
      "detected-date-by-magic": {
        "dialog-message": "Looks like we guessed that one perfectly!<br/>Share the magic with others?",
        "share-message": [{
          text: "Boomerang just helped me bring back a message at the right time. It's magical.",
          url: "http://boomeranggmail.com/?utm_source=b4g&utm_medium={{medium}}&utm_content=magic&utm_campaign=viralhook"
        }]
      },
      "send-later-if-no-reply": {
        "dialog-message": "You just scheduled your auto-reminder email.<br/>Please share Boomerang with your friends so they can do the same.",
        "share-message": [{
          text: "Thanks to Boomerang, I can schedule a reminder email that will be sent out only if they don't respond.",
          url: "http://boomeranggmail.com/?utm_source=b4g&utm_medium={{medium}}&utm_content=auto_reminder&utm_campaign=viralhook"
        }]
      },
      "inbox-zero-within-hour": {
        "dialog-message": "Congratulations! You are at Inbox Zero.<br/>Care to share how Boomerang helped you achieve Inbox Zero?",
        "share-message": [{
          text: "I just got to Inbox Zero with Boomerang's help! It helps me stay on top of all my emails.",
          url: "http://boomeranggmail.com/?utm_source=b4g&utm_medium={{medium}}&utm_content=inbox_zero&utm_campaign=viralhook"
        }]
      },
      "send-later-at-1am-5am": {
        "dialog-message": "Looks like you love using Boomerang late at night.<br/>Share with others how you're using it.",
        "share-message": [{
            text: "Just scheduled a bunch of emails with Boomerang! This way people don't know I am really a vampire.",
            url: "http://boomeranggmail.com/?utm_source=b4g&utm_medium={{medium}}&utm_content=vampire&utm_campaign=viralhook"
          }, {
            text: "Boomerang lets me schedule emails so I don't wake up people with my messages at all hours of the night.",
            url: "http://boomeranggmail.com/?utm_source=b4g&utm_medium={{medium}}&utm_content=wake_people_up&utm_campaign=viralhook"
          },
          {
            text: "Boomerang lets me schedule emails so my messages are at the top of Inboxes even if I am writing them at insane hours.",
            url: "http://boomeranggmail.com/?utm_source=b4g&utm_medium={{medium}}&utm_content=insane_hours&utm_campaign=viralhook"
          }
        ]
      }
    },
    zf = '<div class="b4g-viral-hook"><img class="b4g-viral-logo" src="https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/viral-hook/boomerang.png"/><div class="b4g-viral-content"><p class="b4g-viral-dialog-message">{{dialog-message}}</p><ul class="b4g-viral-share-options"><li><a data-share-type="twitter" href="http://twitter.com/intent/tweet?text={{text}}+{{url-twitter}}" target="_blank"><img src="https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/viral-hook/tweet.png"/></a></li><li><a data-share-type="facebook" href="http://www.facebook.com/sharer/sharer.php?s=100&p[url]={{url-fb}}&p[images][0]=&p[title]=&p[summary]={{text}}" target="_blank"><img src="https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/viral-hook/fbshare.png"/></a></li><li><a data-share-type="linkedin" href="http://www.linkedin.com/shareArticle?mini=true&url={{url-linkedin}}&title=&summary={{text}}&source=" target="_blank"><img src="https://s3.amazonaws.com/BoomerangForGmail/bookmarklet/viral-hook/linkedin.png"/></a></li></ul></div><a class="b4g-viral-close"></a></div>',
    Ke = function(a) {
      var d;
      "undefined" !== typeof a ? d = a : "undefined" !== typeof qa && (d = qa);
      var c = {
        get: {},
        observe: {},
        check: {},
        tools: {},
        tracker: {},
        dom: {},
        chat: {},
        compose: {},
        helper: {
          get: {}
        },
        version: "0.4"
      };
      c.tracker.globals = GLOBALS;
      c.tracker.view_data = "undefined" !== typeof VIEW_DATA ? VIEW_DATA : [];
      c.tracker.ik = c.tracker.globals[9];
      c.tracker.hangouts = void 0;
      c.tools.make_request = function(a, b) {
        a = decodeURIComponent(a);
        return d.ajax({
          type: b,
          url: encodeURI(a),
          async: !1
        }).responseText
      };
      c.tools.make_request_async = function(a,
        b, c) {
        d.ajax({
          type: b,
          url: encodeURI(a),
          async: !0,
          dataType: "text"
        }).done(function(a, b, d) {
          c(d.responseText)
        }).fail(function(a, b, c) {
          console.error("Request Failed", c)
        })
      };
      c.tools.parse_view_data = function(a) {
        for (var b = [], c = [], d = 0; d < a.length; d++)
          if ("tb" == a[d][0])
            for (var k = 0; k < a[d][2].length; k++) c.push(a[d][2][k]);
        for (a = 0; a < c.length; a++) d = c[a], b.push({
          id: d[0],
          title: d[9],
          excerpt: d[10],
          time: d[15],
          sender: d[28],
          attachment: d[13],
          labels: d[5]
        });
        return b
      };
      c.helper.get.visible_emails_pre = function() {
        var a = c.get.current_page(),
          b = window.location.origin + window.location.pathname + "?ui=2&ik=" + c.tracker.ik + "&rid=" + c.tracker.rid + "&view=tl&num=120&rt=1",
          g = 0;
        try {
          var l = d(".Dj:visible").children().first().text(),
            l = l.replace(",", ""),
            g = parseInt(l),
            g = g - 1
        } catch (k) {
          console.log("get.visible_emails_pre could not determine the start parameter from the dom")
        }
        b += "&start=" + g;
        0 == a.indexOf("label/") ? b += "&cat=" + a.split("/")[1] + "&search=cat" : 0 == a.indexOf("category/") ? (-1 != a.indexOf("forums") ? cat_label = "group" : -1 != a.indexOf("updates") ? cat_label =
          "notification" : -1 != a.indexOf("promotion") ? cat_label = "promo" : -1 != a.indexOf("social") && (cat_label = "social"), b += "&cat=^smartlabel_" + cat_label + "&search=category") : 0 == a.indexOf("search/") ? b += "&q=" + a.split("/")[1] + "&qs=true&search=query&at=" + c.get.b4g_get_at_variable() : "inbox" == a ? (a = c.get.b4g_get_inbox_tab(), b = "none" == a ? b + "&search=inbox" : b + ("&q=in%3Ainbox%20category%3A" + a + "&qs=true&search=query&at=" + c.get.b4g_get_at_variable())) : b += "&search=" + a;
        return b
      };
      c.get.b4g_get_inbox_tab = function() {
        var a = d(".aAy.J-KU-KO");
        return 0 == a.length ? "none" : a.hasClass("aKe-aLe") ? "social" : a.hasClass("aJi-aLe") ? "promotions" : a.hasClass("aH2-aLe") ? "updates" : a.hasClass("aHE-aLe") ? "forums" : "primary"
      };
      c.get.b4g_get_at_variable = function() {
        var a = document.cookie.indexOf("GMAIL_AT=") + 9,
          b = document.cookie.indexOf(";", document.cookie.indexOf("GMAIL_AT"));
        return document.cookie.substring(a, b)
      };
      c.helper.get.visible_emails_post = function(a) {
        var b = [];
        a = a.substring(a.indexOf("["), a.length);
        a = new Function('"use strict"; return ' + a);
        c.tracker.view_data =
          a();
        for (i in c.tracker.view_data) "function" !== typeof c.tracker.view_data[i] && (a = c.tools.parse_view_data(c.tracker.view_data[i]), 0 < a.length && d.merge(b, a));
        return b
      };
      c.get.visible_emails = function() {
        var a = c.helper.get.visible_emails_pre(),
          a = c.tools.make_request(a);
        return c.helper.get.visible_emails_post(a)
      };
      c.get.visible_emails_async = function(a) {
        var b = c.helper.get.visible_emails_pre();
        c.tools.make_request_async(b, "GET", function(b) {
          b = c.helper.get.visible_emails_post(b);
          a(b)
        })
      };
      c.get.selected_emails_data =
        function() {
          var a = [];
          if (c.check.is_inside_email()) c.check.is_preview_pane() ? d('[gh="tl"] div[role="checkbox"][aria-checked="true"]:visible').length ? (b = null, g = c.get.visible_emails(), d('[gh="tl"] div[role="checkbox"]:visible').each(function(l) {
              "true" == d(this).attr("aria-checked") && (b = c.get.email_data(g[l].id), a.push(b))
            })) : (b = null, g = c.get.visible_emails(), d('[gh="tl"] div[role="checkbox"]:visible').each(function(l) {
              d(this).parent().parent().hasClass("aps") && (b = c.get.email_data(g[l].id), a.push(b))
            })) :
            a.push(c.get.email_data());
          else if (d('[gh="tl"] div[role="checkbox"][aria-checked="true"]:visible').length) {
            var b = null,
              g = c.get.visible_emails();
            d('[gh="tl"] div[role="checkbox"]:visible').each(function(l) {
              "true" == d(this).attr("aria-checked") && (b = c.get.email_data(g[l].id), a.push(b))
            })
          }
          return a
        };
      c.tools.parse_email_data = function(a) {
        var b = {};
        for (i in a) {
          var g = a[i];
          "cs" == g[0] && (b.thread_id = g[1], b.first_email = g[8][0], b.last_email = g[2], b.total_emails = g[3], b.total_threads = g[8], b.people_involved = g[15], b.subject =
            g[23]);
          if ("ms" == g[0]) {
            void 0 == b.threads && (b.threads = {});
            b.threads[g[1]] = {};
            b.threads[g[1]].is_deleted = void 0 == g[13];
            b.threads[g[1]].reply_to_id = g[2];
            b.threads[g[1]].from = g[5];
            b.threads[g[1]].from_email = g[6];
            b.threads[g[1]].timestamp = g[7];
            b.threads[g[1]].datetime = g[24];
            b.threads[g[1]].attachments = g[21].split(",");
            b.threads[g[1]].subject = g[12];
            b.threads[g[1]].content_html = void 0 != g[13] ? g[13][6] : g[8];
            b.threads[g[1]].to = void 0 != g[13] ? g[13][1] : void 0 != g[37] ? g[37][1] : [];
            b.threads[g[1]].cc = void 0 != g[13] ?
              g[13][2] : [];
            b.threads[g[1]].bcc = void 0 != g[13] ? g[13][3] : [];
            b.threads[g[1]].reply_to = c.tools.get_reply_to(g[13]);
            try {
              b.threads[g[1]].content_plain = void 0 != g[13] ? d(g[13][6]).text() : g[8]
            } catch (l) {
              b.threads[g[1]].content_plain = void 0 != g[13] ? g[13][6] : g[8]
            }
          }
        }
        return b
      };
      c.helper.get.email_data_pre = function(a) {
        c.check.is_inside_email() && void 0 == a && (a = c.get.email_id());
        var b = null;
        void 0 != a && (b = window.location.origin + window.location.pathname + "?ui=2&ik=" + c.tracker.ik + "&rid=" + c.tracker.rid + "&view=cv&th=" + a + "&msgs=&mb=0&rt=1&search=mbox");
        return b
      };
      c.helper.get.email_data_post = function(a) {
        a = a.substring(a.indexOf("["), a.length);
        a = new Function('"use strict"; return ' + a);
        cdata = a();
        c.tracker.email_data = cdata[0];
        return c.tools.parse_email_data(c.tracker.email_data)
      };
      c.get.email_data = function(a) {
        a = c.helper.get.email_data_pre(a);
        return null != a ? (a = c.tools.make_request(a), c.helper.get.email_data_post(a)) : {}
      };
      c.get.email_data_async = function(a, b) {
        var d = c.helper.get.email_data_pre(a);
        null != d ? c.tools.make_request_async(d, "GET", function(a) {
          a = c.helper.get.email_data_post(a);
          b(a)
        }) : b({})
      };
      c.get.current_page = function() {
        var a = window.location.hash.split("#").pop().split("?").shift();
        return a = a.replace(/\/p\d+$/, "")
      };
      c.check.is_inside_email = function() {
        if (null != c.get.current_page() && !c.check.is_preview_pane()) return !1;
        for (var a = d(".ii.gt"), b = [], g = 0; g < a.length; g++) {
          var l = a[g].getAttribute("class").split(" ")[2];
          "undefined" != l && void 0 != l && d(a[g]).is(":visible") && b.push(a[g])
        }
        return 0 < b.length
      };
      c.check.is_preview_pane = function() {
        var a = !1;
        c.dom.inbox_content().find("[gh=tl]").each(function() {
          d(this).hasClass("aia") &&
            (a = !0)
        });
        return a
      };
      c.dom.inbox_content = function() {
        return d("div[role=main]:first")
      };
      c.get.email_id = function() {
        var a = null;
        if (c.check.is_inside_email())
          if (c.check.is_preview_pane()) {
            for (var a = c.dom.email_contents(), b = [], d = 0; d < a.length; d++) {
              var l = a[d].getAttribute("class").split(" ")[2],
                k = a[d].getAttribute("contenteditable"),
                h = 0 < a[d].offsetWidth && 0 < a[d].offsetHeight;
              "undefined" != l && void 0 != l && h && "true" != k && b.push(l)
            }
            a = b[0].substring(1, b[0].length)
          } else a = window.location.hash.split("/").pop().replace(/#/,
            "").split("?")[0];
        return a
      };
      c.tools.get_reply_to = function(a) {
        a = void 0 != a ? a[4] : [];
        return 0 !== a.length ? c.tools.extract_email_address(a[0]) : null
      };
      c.tools.extract_email_address = function(a) {
        var b = /[\+a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+/gi;
        return (a = a ? a.match(b) : void 0) ? a[0] : void 0
      };
      c.dom.email_contents = function() {
        for (var a = d(".ii.gt"), b = [], c = 0; c < a.length; c++) {
          var l = a[c].getAttribute("class").split(" ")[2],
            k = a[c].getAttribute("contenteditable");
          "undefined" != l && void 0 != l && "true" != k && b.push(a[c])
        }
        return b
      };
      return c
    };
  Date.CultureInfo = {
    name: "en-US",
    englishName: "English (United States)",
    nativeName: "English (United States)",
    dayNames: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    abbreviatedDayNames: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
    shortestDayNames: "Su Mo Tu We Th Fr Sa".split(" "),
    firstLetterDayNames: "SMTWTFS".split(""),
    monthNames: "January February March April May June July August September October November December".split(" "),
    abbreviatedMonthNames: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    amDesignator: "AM",
    pmDesignator: "PM",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "mdy",
    formatPatterns: {
      shortDate: "M/d/yyyy",
      longDate: "dddd, MMMM dd, yyyy",
      shortTime: "h:mm tt",
      longTime: "h:mm:ss tt",
      fullDateTime: "dddd, MMMM dd, yyyy h:mm:ss tt",
      sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
      universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
      rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
      monthDay: "MMMM dd",
      yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
      jan: /^jan(uary)?/i,
      feb: /^feb(ruary)?/i,
      mar: /^mar(ch)?/i,
      apr: /^apr(il)?/i,
      may: /^may/i,
      jun: /^jun(e)?/i,
      jul: /^jul(y)?/i,
      aug: /^aug(ust)?/i,
      sep: /^sep(t(ember)?)?/i,
      oct: /^oct(ober)?/i,
      nov: /^nov(ember)?/i,
      dec: /^dec(ember)?/i,
      sun: /^su(n(day)?)?/i,
      mon: /^mo(n(day)?)?/i,
      tue: /^tu(e(s(day)?)?)?/i,
      wed: /^we(d(nesday)?)?/i,
      thu: /^th(u(r(s(day)?)?)?)?/i,
      fri: /^fr(i(day)?)?/i,
      sat: /^sa(t(urday)?)?/i,
      future: /^next/i,
      past: /^last|past|prev(ious)?/i,
      add: /^(\+|aft(er)?|from|hence)/i,
      subtract: /^(\-|bef(ore)?|ago)/i,
      yesterday: /^yes(terday)?/i,
      today: /^t(od(ay)?)?/i,
      tomorrow: /^tom(orrow)?/i,
      now: /^n(ow)?/i,
      millisecond: /^ms|milli(second)?s?/i,
      second: /^sec(ond)?s?/i,
      minute: /^mn|min(ute)?s?/i,
      hour: /^h(our)?s?/i,
      week: /^w(eek)?s?/i,
      month: /^m(onth)?s?/i,
      day: /^d(ay)?s?/i,
      year: /^y(ear)?s?/i,
      shortMeridian: /^(a|p)/i,
      longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
      timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
      ordinalSuffix: /^\s*(st|nd|rd|th)/i,
      timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
      name: "UTC",
      offset: "-000"
    }, {
      name: "GMT",
      offset: "-000"
    }, {
      name: "EST",
      offset: "-0500"
    }, {
      name: "EDT",
      offset: "-0400"
    }, {
      name: "CST",
      offset: "-0600"
    }, {
      name: "CDT",
      offset: "-0500"
    }, {
      name: "MST",
      offset: "-0700"
    }, {
      name: "MDT",
      offset: "-0600"
    }, {
      name: "PST",
      offset: "-0800"
    }, {
      name: "PDT",
      offset: "-0700"
    }]
  };
  (function() {
    var a = Date,
      d = a.prototype,
      c = a.CultureInfo,
      e = function(a, b) {
        b || (b = 2);
        return ("000" + a).slice(-1 * b)
      };
    d.clearTime = function() {
      this.setHours(0);
      this.setMinutes(0);
      this.setSeconds(0);
      this.setMilliseconds(0);
      return this
    };
    d.setTimeToNow = function() {
      var a = new Date;
      this.setHours(a.getHours());
      this.setMinutes(a.getMinutes());
      this.setSeconds(a.getSeconds());
      this.setMilliseconds(a.getMilliseconds());
      return this
    };
    a.today = function() {
      return (new Date).clearTime()
    };
    a.compare = function(a, b) {
      if (isNaN(a) || isNaN(b)) throw Error(a + " - " + b);
      if (a instanceof Date && b instanceof Date) return a < b ? -1 : a > b ? 1 : 0;
      throw new TypeError(a + " - " + b);
    };
    a.equals = function(a, b) {
      return 0 === a.compareTo(b)
    };
    a.getDayNumberFromName = function(a) {
      var b = c.dayNames,
        d = c.abbreviatedDayNames,
        e = c.shortestDayNames;
      a = a.toLowerCase();
      for (var f = 0; f < b.length; f++)
        if (b[f].toLowerCase() ==
          a || d[f].toLowerCase() == a || e[f].toLowerCase() == a) return f;
      return -1
    };
    a.getMonthNumberFromName = function(a) {
      var b = c.monthNames,
        d = c.abbreviatedMonthNames;
      a = a.toLowerCase();
      for (var e = 0; e < b.length; e++)
        if (b[e].toLowerCase() == a || d[e].toLowerCase() == a) return e;
      return -1
    };
    a.isLeapYear = function(a) {
      return 0 === a % 4 && 0 !== a % 100 || 0 === a % 400
    };
    a.getDaysInMonth = function(c, d) {
      return [31, a.isLeapYear(c) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][d]
    };
    a.getTimezoneAbbreviation = function(a) {
      for (var b = c.timezones, d = 0; d < b.length; d++)
        if (b[d].offset ===
          a) return b[d].name;
      return null
    };
    a.getTimezoneOffset = function(a) {
      for (var b = c.timezones, d = 0; d < b.length; d++)
        if (b[d].name === a.toUpperCase()) return b[d].offset;
      return null
    };
    d.clone = function() {
      return new Date(this.getTime())
    };
    d.compareTo = function(a) {
      return Date.compare(this, a)
    };
    d.equals = function(a) {
      return Date.equals(this, a || new Date)
    };
    d.between = function(a, b) {
      return this.getTime() >= a.getTime() && this.getTime() <= b.getTime()
    };
    d.isAfter = function(a) {
      return 1 === this.compareTo(a || new Date)
    };
    d.isBefore = function(a) {
      return -1 ===
        this.compareTo(a || new Date)
    };
    d.isToday = function() {
      return this.isSameDay(new Date)
    };
    d.isSameDay = function(a) {
      return this.clone().clearTime().equals(a.clone().clearTime())
    };
    d.addMilliseconds = function(a) {
      this.setMilliseconds(this.getMilliseconds() + a);
      return this
    };
    d.addSeconds = function(a) {
      return this.addMilliseconds(1E3 * a)
    };
    d.addMinutes = function(a) {
      return this.addMilliseconds(6E4 * a)
    };
    d.addHours = function(a) {
      return this.addMilliseconds(36E5 * a)
    };
    d.addDays = function(a) {
      this.setDate(this.getDate() + a);
      return this
    };
    d.addWeeks = function(a) {
      return this.addDays(7 * a)
    };
    d.addMonths = function(c) {
      var d = this.getDate();
      this.setDate(1);
      this.setMonth(this.getMonth() + c);
      this.setDate(Math.min(d, a.getDaysInMonth(this.getFullYear(), this.getMonth())));
      return this
    };
    d.addYears = function(a) {
      return this.addMonths(12 * a)
    };
    d.add = function(a) {
      if ("number" == typeof a) return this._orient = a, this;
      a.milliseconds && this.addMilliseconds(a.milliseconds);
      a.seconds && this.addSeconds(a.seconds);
      a.minutes && this.addMinutes(a.minutes);
      a.hours && this.addHours(a.hours);
      a.weeks && this.addWeeks(a.weeks);
      a.months && this.addMonths(a.months);
      a.years && this.addYears(a.years);
      a.days && this.addDays(a.days);
      return this
    };
    var f, g, l;
    d.getWeek = function() {
      var a, b, c, d, e;
      f = f ? f : this.getFullYear();
      g = g ? g : this.getMonth() + 1;
      l = l ? l : this.getDate();
      2 >= g ? (a = f - 1, b = (a / 4 | 0) - (a / 100 | 0) + (a / 400 | 0), e = b - (((a - 1) / 4 | 0) - ((a - 1) / 100 | 0) + ((a - 1) / 400 | 0)), c = 0, d = l - 1 + 31 * (g - 1)) : (a = f, b = (a / 4 | 0) - (a / 100 | 0) + (a / 400 | 0), e = b - (((a - 1) / 4 | 0) - ((a - 1) / 100 | 0) + ((a - 1) / 400 | 0)), c = e + 1, d = l + (153 * (g - 3) + 2) / 5 + 58 + e);
      a = (a + b) % 7;
      c = d + 3 - (d + a - c) %
        7 | 0;
      f = g = l = null;
      return 0 > c ? 53 - ((a - e) / 5 | 0) : c > 364 + e ? 1 : (c / 7 | 0) + 1
    };
    d.getISOWeek = function() {
      f = this.getUTCFullYear();
      g = this.getUTCMonth() + 1;
      l = this.getUTCDate();
      return e(this.getWeek())
    };
    d.setWeek = function(a) {
      return this.moveToDayOfWeek(1).addWeeks(a - this.getWeek())
    };
    a._validate = function(a, b, c, d) {
      if ("undefined" == typeof a) return !1;
      if ("number" != typeof a) throw new TypeError(a + " is not a Number.");
      if (a < b || a > c) throw new RangeError(a + " is not a valid value for " + d + ".");
      return !0
    };
    a.validateMillisecond = function(c) {
      return a._validate(c,
        0, 999, "millisecond")
    };
    a.validateSecond = function(c) {
      return a._validate(c, 0, 59, "second")
    };
    a.validateMinute = function(c) {
      return a._validate(c, 0, 59, "minute")
    };
    a.validateHour = function(c) {
      return a._validate(c, 0, 23, "hour")
    };
    a.validateDay = function(c, d, e) {
      return a._validate(c, 1, a.getDaysInMonth(d, e), "day")
    };
    a.validateMonth = function(c) {
      return a._validate(c, 0, 11, "month")
    };
    a.validateYear = function(c) {
      return a._validate(c, 0, 9999, "year")
    };
    d.set = function(c) {
      a.validateMillisecond(c.millisecond) && this.addMilliseconds(c.millisecond -
        this.getMilliseconds());
      a.validateSecond(c.second) && this.addSeconds(c.second - this.getSeconds());
      a.validateMinute(c.minute) && this.addMinutes(c.minute - this.getMinutes());
      a.validateHour(c.hour) && this.addHours(c.hour - this.getHours());
      a.validateMonth(c.month) && this.addMonths(c.month - this.getMonth());
      a.validateYear(c.year) && this.addYears(c.year - this.getFullYear());
      a.validateDay(c.day, this.getFullYear(), this.getMonth()) && this.addDays(c.day - this.getDate());
      c.timezone && this.setTimezone(c.timezone);
      c.timezoneOffset &&
        this.setTimezoneOffset(c.timezoneOffset);
      c.week && a._validate(c.week, 0, 53, "week") && this.setWeek(c.week);
      return this
    };
    d.moveToFirstDayOfMonth = function() {
      return this.set({
        day: 1
      })
    };
    d.moveToLastDayOfMonth = function() {
      return this.set({
        day: a.getDaysInMonth(this.getFullYear(), this.getMonth())
      })
    };
    d.moveToNthOccurrence = function(a, b) {
      var c = 0;
      if (0 < b) c = b - 1;
      else if (-1 === b) return this.moveToLastDayOfMonth(), this.getDay() !== a && this.moveToDayOfWeek(a, -1), this;
      return this.moveToFirstDayOfMonth().addDays(-1).moveToDayOfWeek(a,
        1).addWeeks(c)
    };
    d.moveToDayOfWeek = function(a, b) {
      var c = (a - this.getDay() + 7 * (b || 1)) % 7;
      return this.addDays(0 === c ? c + 7 * (b || 1) : c)
    };
    d.moveToMonth = function(a, b) {
      var c = (a - this.getMonth() + 12 * (b || 1)) % 12;
      return this.addMonths(0 === c ? c + 12 * (b || 1) : c)
    };
    d.getOrdinalNumber = function() {
      return Math.ceil((this.clone().clearTime() - new Date(this.getFullYear(), 0, 1)) / 864E5) + 1
    };
    d.getTimezone = function() {
      return a.getTimezoneAbbreviation(this.getUTCOffset())
    };
    d.setTimezoneOffset = function(a) {
      var b = this.getTimezoneOffset();
      return this.addMinutes(-6 *
        Number(a) / 10 - b)
    };
    d.setTimezone = function(c) {
      return this.setTimezoneOffset(a.getTimezoneOffset(c))
    };
    d.hasDaylightSavingTime = function() {
      return Date.today().set({
        month: 0,
        day: 1
      }).getTimezoneOffset() !== Date.today().set({
        month: 6,
        day: 1
      }).getTimezoneOffset()
    };
    d.isDaylightSavingTime = function() {
      return this.hasDaylightSavingTime() && (new Date).getTimezoneOffset() === Date.today().set({
        month: 6,
        day: 1
      }).getTimezoneOffset()
    };
    d.getUTCOffset = function() {
      var a = -10 * this.getTimezoneOffset() / 6;
      if (0 > a) return a = (a - 1E4).toString(),
        a.charAt(0) + a.substr(2);
      a = (a + 1E4).toString();
      return "+" + a.substr(1)
    };
    d.getElapsed = function(a) {
      return (a || new Date) - this
    };
    d.toISOString || (d.toISOString = function() {
      function a(b) {
        return 10 > b ? "0" + b : b
      }
      return '"' + this.getUTCFullYear() + "-" + a(this.getUTCMonth() + 1) + "-" + a(this.getUTCDate()) + "T" + a(this.getUTCHours()) + ":" + a(this.getUTCMinutes()) + ":" + a(this.getUTCSeconds()) + 'Z"'
    });
    d._toString = d.toString;
    d.toString = function(a) {
      var b = this;
      if (a && 1 == a.length) {
        var d = c.formatPatterns;
        b.t = b.toString;
        switch (a) {
          case "d":
            return b.t(d.shortDate);
          case "D":
            return b.t(d.longDate);
          case "F":
            return b.t(d.fullDateTime);
          case "m":
            return b.t(d.monthDay);
          case "r":
            return b.t(d.rfc1123);
          case "s":
            return b.t(d.sortableDateTime);
          case "t":
            return b.t(d.shortTime);
          case "T":
            return b.t(d.longTime);
          case "u":
            return b.t(d.universalSortableDateTime);
          case "y":
            return b.t(d.yearMonth)
        }
      }
      var f = function(a) {
        switch (1 * a) {
          case 1:
          case 21:
          case 31:
            return "st";
          case 2:
          case 22:
            return "nd";
          case 3:
          case 23:
            return "rd";
          default:
            return "th"
        }
      };
      return a ? a.replace(/(\\)?(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|S)/g,
        function(a) {
          if ("\\" === a.charAt(0)) return a.replace("\\", "");
          b.h = b.getHours;
          switch (a) {
            case "hh":
              return e(13 > b.h() ? 0 === b.h() ? 12 : b.h() : b.h() - 12);
            case "h":
              return 13 > b.h() ? 0 === b.h() ? 12 : b.h() : b.h() - 12;
            case "HH":
              return e(b.h());
            case "H":
              return b.h();
            case "mm":
              return e(b.getMinutes());
            case "m":
              return b.getMinutes();
            case "ss":
              return e(b.getSeconds());
            case "s":
              return b.getSeconds();
            case "yyyy":
              return e(b.getFullYear(), 4);
            case "yy":
              return e(b.getFullYear());
            case "dddd":
              return c.dayNames[b.getDay()];
            case "ddd":
              return c.abbreviatedDayNames[b.getDay()];
            case "dd":
              return e(b.getDate());
            case "d":
              return b.getDate();
            case "MMMM":
              return c.monthNames[b.getMonth()];
            case "MMM":
              return c.abbreviatedMonthNames[b.getMonth()];
            case "MM":
              return e(b.getMonth() + 1);
            case "M":
              return b.getMonth() + 1;
            case "t":
              return 12 > b.h() ? c.amDesignator.substring(0, 1) : c.pmDesignator.substring(0, 1);
            case "tt":
              return 12 > b.h() ? c.amDesignator : c.pmDesignator;
            case "S":
              return f(b.getDate());
            default:
              return a
          }
        }) : this._toString()
    }
  })();
  (function() {
    var a = Date,
      d = a.prototype,
      c = a.CultureInfo,
      e = Number.prototype;
    d._orient = 1;
    d._nth = null;
    d._is = !1;
    d._same = !1;
    d._isSecond = !1;
    e._dateElement = "day";
    d.next = function() {
      this._orient = 1;
      return this
    };
    a.next = function() {
      return a.today().next()
    };
    d.last = d.prev = d.previous = function() {
      this._orient = -1;
      return this
    };
    a.last = a.prev = a.previous = function() {
      return a.today().last()
    };
    d.is = function() {
      this._is = !0;
      return this
    };
    d.same = function() {
      this._same = !0;
      this._isSecond = !1;
      return this
    };
    d.today = function() {
      return this.same().day()
    };
    d.weekday = function() {
      return this._is ? (this._is = !1, !this.is().sat() &&
        !this.is().sun()) : !1
    };
    d.at = function(c) {
      return "string" === typeof c ? a.parse(this.toString("d") + " " + c) : this.set(c)
    };
    e.fromNow = e.after = function(a) {
      var b = {};
      b[this._dateElement] = this;
      return (a ? a.clone() : new Date).add(b)
    };
    e.ago = e.before = function(a) {
      var b = {};
      b[this._dateElement] = -1 * this;
      return (a ? a.clone() : new Date).add(b)
    };
    var f = "sunday monday tuesday wednesday thursday friday saturday".split(/\s/),
      g = "january february march april may june july august september october november december".split(/\s/),
      l = "Millisecond Second Minute Hour Day Week Month Year".split(/\s/),
      k = "Milliseconds Seconds Minutes Hours Date Week Month FullYear".split(/\s/),
      h = "final first second third fourth fifth".split(/\s/);
    d.toObject = function() {
      for (var a = {}, b = 0; b < l.length; b++) a[l[b].toLowerCase()] = this["get" + k[b]]();
      return a
    };
    a.fromObject = function(a) {
      a.week = null;
      return Date.today().set(a)
    };
    for (var m = function(c) {
        return function() {
          if (this._is) return this._is = !1, this.getDay() == c;
          if (null !== this._nth) {
            this._isSecond && this.addSeconds(-1 * this._orient);
            this._isSecond = !1;
            var d = this._nth;
            this._nth =
              null;
            var e = this.clone().moveToLastDayOfMonth();
            this.moveToNthOccurrence(c, d);
            if (this > e) throw new RangeError(a.getDayName(c) + " does not occur " + d + " times in the month of " + a.getMonthName(e.getMonth()) + " " + e.getFullYear() + ".");
            return this
          }
          return this.moveToDayOfWeek(c, this._orient)
        }
      }, p = function(d) {
        return function() {
          var e = a.today(),
            f = d - e.getDay();
          0 === d && 1 === c.firstDayOfWeek && 0 !== e.getDay() && (f += 7);
          return e.addDays(f)
        }
      }, t = 0; t < f.length; t++) a[f[t].toUpperCase()] = a[f[t].toUpperCase().substring(0, 3)] = t, a[f[t]] =
      a[f[t].substring(0, 3)] = p(t), d[f[t]] = d[f[t].substring(0, 3)] = m(t);
    f = function(a) {
      return function() {
        return this._is ? (this._is = !1, this.getMonth() === a) : this.moveToMonth(a, this._orient)
      }
    };
    m = function(c) {
      return function() {
        return a.today().set({
          month: c,
          day: 1
        })
      }
    };
    for (p = 0; p < g.length; p++) a[g[p].toUpperCase()] = a[g[p].toUpperCase().substring(0, 3)] = p, a[g[p]] = a[g[p].substring(0, 3)] = m(p), d[g[p]] = d[g[p].substring(0, 3)] = f(p);
    f = function(a) {
      return function(b) {
        if (this._isSecond) return this._isSecond = !1, this;
        if (this._same) {
          this._same =
            this._is = !1;
          var c = this.toObject();
          b = (b || new Date).toObject();
          for (var d, e = a.toLowerCase(), f = l.length - 1; - 1 < f; f--) {
            d = l[f].toLowerCase();
            if (c[d] != b[d]) return !1;
            if (e == d) break
          }
          return !0
        }
        "s" != a.substring(a.length - 1) && (a += "s");
        return this["add" + a](this._orient)
      }
    };
    m = function(a) {
      return function() {
        this._dateElement = a;
        return this
      }
    };
    for (p = 0; p < l.length; p++) g = l[p].toLowerCase(), d[g] = d[g + "s"] = f(l[p]), e[g] = e[g + "s"] = m(g);
    d._ss = f("Second");
    e = function(a) {
      return function(b) {
        if (this._same) return this._ss(b);
        if (b || 0 === b) return this.moveToNthOccurrence(b,
          a);
        this._nth = a;
        return 2 !== a || void 0 !== b && null !== b ? this : (this._isSecond = !0, this.addSeconds(this._orient))
      }
    };
    for (g = 0; g < h.length; g++) d[h[g]] = 0 === g ? e(-1) : e(g)
  })();
  (function() {
    Date.Parsing = {
      Exception: function(a) {
        this.message = "Parse error at '" + a.substring(0, 10) + " ...'"
      }
    };
    for (var a = Date.Parsing, d = a.Operators = {
        rtoken: function(c) {
          return function(d) {
            var e = d.match(c);
            if (e) return [e[0], d.substring(e[0].length)];
            throw new a.Exception(d);
          }
        },
        token: function(a) {
          return function(a) {
            return d.rtoken(new RegExp("^\\s*" +
              a + "\\s*"))(a)
          }
        },
        stoken: function(a) {
          return d.rtoken(new RegExp("^" + a))
        },
        until: function(a) {
          return function(b) {
            for (var c = [], d = null; b.length;) {
              try {
                d = a.call(this, b)
              } catch (e) {
                c.push(d[0]);
                b = d[1];
                continue
              }
              break
            }
            return [c, b]
          }
        },
        many: function(a) {
          return function(b) {
            for (var c = [], d = null; b.length;) {
              try {
                d = a.call(this, b)
              } catch (e) {
                break
              }
              c.push(d[0]);
              b = d[1]
            }
            return [c, b]
          }
        },
        optional: function(a) {
          return function(b) {
            var c = null;
            try {
              c = a.call(this, b)
            } catch (d) {
              return [null, b]
            }
            return [c[0], c[1]]
          }
        },
        not: function(c) {
          return function(d) {
            try {
              c.call(this,
                d)
            } catch (e) {
              return [null, d]
            }
            throw new a.Exception(d);
          }
        },
        ignore: function(a) {
          return a ? function(b) {
            return [null, a.call(this, b)[1]]
          } : null
        },
        product: function() {
          for (var a = arguments[0], b = Array.prototype.slice.call(arguments, 1), c = [], e = 0; e < a.length; e++) c.push(d.each(a[e], b));
          return c
        },
        cache: function(c) {
          var d = {},
            e = null;
          return function(f) {
            try {
              e = d[f] = d[f] || c.call(this, f)
            } catch (m) {
              e = d[f] = m
            }
            if (e instanceof a.Exception) throw e;
            return e
          }
        },
        any: function() {
          var c = arguments;
          return function(d) {
            for (var e = null, f = 0; f < c.length; f++)
              if (null !=
                c[f]) {
                try {
                  e = c[f].call(this, d)
                } catch (m) {
                  e = null
                }
                if (e) return e
              } throw new a.Exception(d);
          }
        },
        each: function() {
          var c = arguments;
          return function(d) {
            for (var e = [], f = null, m = 0; m < c.length; m++)
              if (null != c[m]) {
                try {
                  f = c[m].call(this, d)
                } catch (p) {
                  throw new a.Exception(d);
                }
                e.push(f[0]);
                d = f[1]
              } return [e, d]
          }
        },
        all: function() {
          var a = a;
          return a.each(a.optional(arguments))
        },
        sequence: function(c, e, f) {
          e = e || d.rtoken(/^\s*/);
          f = f || null;
          return 1 == c.length ? c[0] : function(d) {
            for (var m = null, p = null, t = [], n = 0; n < c.length; n++) {
              try {
                m = c[n].call(this,
                  d)
              } catch (q) {
                break
              }
              t.push(m[0]);
              try {
                p = e.call(this, m[1])
              } catch (q) {
                p = null;
                break
              }
              d = p[1]
            }
            if (!m) throw new a.Exception(d);
            if (p) throw new a.Exception(p[1]);
            if (f) try {
              m = f.call(this, m[1])
            } catch (q) {
              throw new a.Exception(m[1]);
            }
            return [t, m ? m[1] : d]
          }
        },
        between: function(a, b, c) {
          c = c || a;
          var e = d.each(d.ignore(a), b, d.ignore(c));
          return function(a) {
            a = e.call(this, a);
            return [
              [a[0][0], (void 0)[0][2]], a[1]
            ]
          }
        },
        list: function(a, b, c) {
          b = b || d.rtoken(/^\s*/);
          c = c || null;
          return a instanceof Array ? d.each(d.product(a.slice(0, -1), d.ignore(b)),
            a.slice(-1), d.ignore(c)) : d.each(d.many(d.each(a, d.ignore(b))), void 0, d.ignore(c))
        },
        set: function(c, e, f) {
          e = e || d.rtoken(/^\s*/);
          f = f || null;
          return function(h) {
            for (var m, p = null, t, n = [
                [], h
              ], q, u = 0; u < c.length; u++) {
              m = p = null;
              q = 1 == c.length;
              try {
                m = c[u].call(this, h)
              } catch (x) {
                continue
              }
              t = [
                [m[0]], m[1]
              ];
              if (0 < m[1].length && !q) try {
                p = e.call(this, m[1])
              } catch (x) {
                q = !0
              } else q = !0;
              q || 0 !== p[1].length || (q = !0);
              if (!q) {
                m = [];
                for (q = 0; q < c.length; q++) u != q && m.push(c[q]);
                m = d.set(m, e).call(this, p[1]);
                0 < m[0].length && (t[0] = t[0].concat(m[0]),
                  t[1] = m[1])
              }
              t[1].length < n[1].length && (n = t);
              if (0 === n[1].length) break
            }
            if (0 === n[0].length) return n;
            if (f) {
              try {
                p = f.call(this, n[1])
              } catch (x) {
                throw new a.Exception(n[1]);
              }
              n[1] = p[1]
            }
            return n
          }
        },
        forward: function(a, b) {
          return function(c) {
            return a[b].call(this, c)
          }
        },
        replace: function(a, b) {
          return function(c) {
            c = a.call(this, c);
            return [b, c[1]]
          }
        },
        process: function(a, b) {
          return function(c) {
            c = a.call(this, c);
            return [b.call(this, c[0]), c[1]]
          }
        },
        min: function(c, d) {
          return function(e) {
            var f = d.call(this, e);
            if (f[0].length < c) throw new a.Exception(e);
            return f
          }
        }
      }, c = function(a) {
        return function() {
          var b = null,
            c = [];
          1 < arguments.length ? b = Array.prototype.slice.call(arguments) : arguments[0] instanceof Array && (b = arguments[0]);
          if (b)
            for (var d = b.shift(); 0 < d.length;) return b.unshift(d[0]), c.push(a.apply(null, b)), b.shift(), c;
          else return a.apply(null, arguments)
        }
      }, e = "optional not ignore cache".split(/\s/), f = 0; f < e.length; f++) d[e[f]] = c(d[e[f]]);
    c = function(a) {
      return function() {
        return arguments[0] instanceof Array ? a.apply(null, arguments[0]) : a.apply(null, arguments)
      }
    };
    e = "each any all".split(/\s/);
    for (f = 0; f < e.length; f++) d[e[f]] = c(d[e[f]])
  })();
  (function() {
    var a = Date,
      d = a.CultureInfo,
      c = function(a) {
        for (var b = [], d = 0; d < a.length; d++) a[d] instanceof Array ? b = b.concat(c(a[d])) : a[d] && b.push(a[d]);
        return b
      };
    a.Grammar = {};
    a.Translator = {
      hour: function(a) {
        return function() {
          this.hour = Number(a)
        }
      },
      minute: function(a) {
        return function() {
          this.minute = Number(a)
        }
      },
      second: function(a) {
        return function() {
          this.second = Number(a)
        }
      },
      meridian: function(a) {
        return function() {
          this.meridian = a.slice(0, 1).toLowerCase()
        }
      },
      timezone: function(a) {
        return function() {
          var b = a.replace(/[^\d\+\-]/g, "");
          b.length ? this.timezoneOffset = Number(b) : this.timezone = a.toLowerCase()
        }
      },
      day: function(a) {
        var b = a[0];
        return function() {
          this.day = Number(b.match(/\d+/)[0])
        }
      },
      month: function(a) {
        return function() {
          this.month = 3 == a.length ? "jan feb mar apr may jun jul aug sep oct nov dec".indexOf(a) / 4 : Number(a) - 1
        }
      },
      year: function(a) {
        return function() {
          var b = Number(a);
          this.year = 2 < a.length ? b : b + (b + 2E3 < d.twoDigitYearMax ? 2E3 : 1900)
        }
      },
      rday: function(a) {
        return function() {
          switch (a) {
            case "yesterday":
              this.days = -1;
              break;
            case "tomorrow":
              this.days = 1;
              break;
            case "today":
              this.days = 0;
              break;
            case "now":
              this.days = 0, this.now = !0
          }
        }
      },
      finishExact: function(c) {
        c = c instanceof Array ? c : [c];
        for (var d = 0; d < c.length; d++) c[d] && c[d].call(this);
        c = new Date;
        !this.hour && !this.minute || this.month || this.year || this.day || (this.day = c.getDate());
        this.year || (this.year = c.getFullYear());
        this.month || 0 === this.month || (this.month = c.getMonth());
        this.day || (this.day = 1);
        this.hour || (this.hour = 0);
        this.minute || (this.minute = 0);
        this.second || (this.second =
          0);
        this.meridian && this.hour && ("p" == this.meridian && 12 > this.hour ? this.hour += 12 : "a" == this.meridian && 12 == this.hour && (this.hour = 0));
        if (this.day > a.getDaysInMonth(this.year, this.month)) throw new RangeError(this.day + " is not a valid value for days.");
        c = new Date(this.year, this.month, this.day, this.hour, this.minute, this.second);
        this.timezone ? c.set({
          timezone: this.timezone
        }) : this.timezoneOffset && c.set({
          timezoneOffset: this.timezoneOffset
        });
        return c
      },
      finish: function(d) {
        d = d instanceof Array ? c(d) : [d];
        if (0 === d.length) return null;
        for (var e = 0; e < d.length; e++) "function" == typeof d[e] && d[e].call(this);
        var f;
        d = a.today();
        if (!this.now || this.unit || this.operator) this.now && (d = new Date);
        else return new Date;
        var e = !!(this.days && null !== this.days || this.orient || this.operator),
          g, h;
        h = "past" == this.orient || "subtract" == this.operator ? -1 : 1;
        this.now || -1 == "hour minute second".indexOf(this.unit) || d.setTimeToNow();
        !this.month && 0 !== this.month || -1 == "year day hour minute second".indexOf(this.unit) || (this.value = this.month + 1, this.month = null, e = !0);
        e || !this.weekday ||
          this.day || this.days || (f = Date[this.weekday](), this.day = f.getDate(), this.month || (this.month = f.getMonth()), this.year = f.getFullYear());
        e && this.weekday && "month" != this.unit && (this.unit = "day", f = a.getDayNumberFromName(this.weekday) - d.getDay(), g = 7, this.days = f ? (f + h * g) % g : h * g);
        this.month && "day" == this.unit && this.operator && (this.value = this.month + 1, this.month = null);
        null != this.value && null != this.month && null != this.year && (this.day = 1 * this.value);
        this.month && !this.day && this.value && (d.set({
          day: 1 * this.value
        }), e || (this.day =
          1 * this.value));
        this.month || !this.value || "month" != this.unit || this.now || (this.month = this.value, e = !0);
        e && (this.month || 0 === this.month) && "year" != this.unit && (this.unit = "month", f = this.month - d.getMonth(), g = 12, this.months = f ? (f + h * g) % g : h * g, this.month = null);
        this.unit || (this.unit = "day");
        if (!this.value && this.operator && null !== this.operator && this[this.unit + "s"] && null !== this[this.unit + "s"]) this[this.unit + "s"] = this[this.unit + "s"] + ("add" == this.operator ? 1 : -1) + (this.value || 0) * h;
        else if (null == this[this.unit + "s"] || null !=
          this.operator) this.value || (this.value = 1), this[this.unit + "s"] = this.value * h;
        this.meridian && this.hour && ("p" == this.meridian && 12 > this.hour ? this.hour += 12 : "a" == this.meridian && 12 == this.hour && (this.hour = 0));
        !this.weekday || this.day || this.days || (f = Date[this.weekday](), this.day = f.getDate(), f.getMonth() !== d.getMonth() && (this.month = f.getMonth()));
        !this.month && 0 !== this.month || this.day || (this.day = 1);
        if (!this.orient && !this.operator && "week" == this.unit && this.value && !this.day && !this.month) return Date.today().setWeek(this.value);
        e && this.timezone && this.day && this.days && (this.day = this.days);
        return e ? d.add(this) : d.set(this)
      }
    };
    var e = a.Parsing.Operators,
      f = a.Grammar,
      g = a.Translator,
      l;
    f.datePartDelimiter = e.rtoken(/^([\s\-\.\,\/\x27]+)/);
    f.timePartDelimiter = e.stoken(":");
    f.whiteSpace = e.rtoken(/^\s*/);
    f.generalDelimiter = e.rtoken(/^(([\s\,]|at|@|on)+)/);
    var k = {};
    f.ctoken = function(a) {
      var b = k[a];
      if (!b) {
        for (var b = d.regexPatterns, c = a.split(/\s+/), f = [], g = 0; g < c.length; g++) f.push(e.replace(e.rtoken(b[c[g]]), c[g]));
        b = k[a] = e.any.apply(null, f)
      }
      return b
    };
    f.ctoken2 = function(a) {
      return e.rtoken(d.regexPatterns[a])
    };
    f.h = e.cache(e.process(e.rtoken(/^(0[0-9]|1[0-2]|[1-9])/), g.hour));
    f.hh = e.cache(e.process(e.rtoken(/^(0[0-9]|1[0-2])/), g.hour));
    f.H = e.cache(e.process(e.rtoken(/^([0-1][0-9]|2[0-3]|[0-9])/), g.hour));
    f.HH = e.cache(e.process(e.rtoken(/^([0-1][0-9]|2[0-3])/), g.hour));
    f.m = e.cache(e.process(e.rtoken(/^([0-5][0-9]|[0-9])/), g.minute));
    f.mm = e.cache(e.process(e.rtoken(/^[0-5][0-9]/), g.minute));
    f.s = e.cache(e.process(e.rtoken(/^([0-5][0-9]|[0-9])/), g.second));
    f.ss = e.cache(e.process(e.rtoken(/^[0-5][0-9]/), g.second));
    f.hms = e.cache(e.sequence([f.H, f.m, f.s], f.timePartDelimiter));
    f.t = e.cache(e.process(f.ctoken2("shortMeridian"), g.meridian));
    f.tt = e.cache(e.process(f.ctoken2("longMeridian"), g.meridian));
    f.z = e.cache(e.process(e.rtoken(/^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/), g.timezone));
    f.zz = e.cache(e.process(e.rtoken(/^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/), g.timezone));
    f.zzz = e.cache(e.process(f.ctoken2("timezone"), g.timezone));
    f.timeSuffix = e.each(e.ignore(f.whiteSpace),
      e.set([f.tt, f.zzz]));
    f.time = e.each(e.optional(e.ignore(e.stoken("T"))), f.hms, f.timeSuffix);
    f.d = e.cache(e.process(e.each(e.rtoken(/^([0-2]\d|3[0-1]|\d)/), e.optional(f.ctoken2("ordinalSuffix"))), g.day));
    f.dd = e.cache(e.process(e.each(e.rtoken(/^([0-2]\d|3[0-1])/), e.optional(f.ctoken2("ordinalSuffix"))), g.day));
    f.ddd = f.dddd = e.cache(e.process(f.ctoken("sun mon tue wed thu fri sat"), function(a) {
      return function() {
        this.weekday = a
      }
    }));
    f.M = e.cache(e.process(e.rtoken(/^(1[0-2]|0\d|\d)/), g.month));
    f.MM = e.cache(e.process(e.rtoken(/^(1[0-2]|0\d)/),
      g.month));
    f.MMM = f.MMMM = e.cache(e.process(f.ctoken("jan feb mar apr may jun jul aug sep oct nov dec"), g.month));
    f.y = e.cache(e.process(e.rtoken(/^(\d\d?)/), g.year));
    f.yy = e.cache(e.process(e.rtoken(/^(\d\d)/), g.year));
    f.yyy = e.cache(e.process(e.rtoken(/^(\d\d?\d?\d?)/), g.year));
    f.yyyy = e.cache(e.process(e.rtoken(/^(\d\d\d\d)/), g.year));
    l = function() {
      return e.each(e.any.apply(null, arguments), e.not(f.ctoken2("timeContext")))
    };
    f.day = l(f.d, f.dd);
    f.month = l(f.M, f.MMM);
    f.year = l(f.yyyy, f.yy);
    f.orientation = e.process(f.ctoken("past future"),
      function(a) {
        return function() {
          this.orient = a
        }
      });
    f.operator = e.process(f.ctoken("add subtract"), function(a) {
      return function() {
        this.operator = a
      }
    });
    f.rday = e.process(f.ctoken("yesterday tomorrow today now"), g.rday);
    f.unit = e.process(f.ctoken("second minute hour day week month year"), function(a) {
      return function() {
        this.unit = a
      }
    });
    f.value = e.process(e.rtoken(/^\d\d?(st|nd|rd|th)?/), function(a) {
      return function() {
        this.value = a.replace(/\D/g, "")
      }
    });
    f.expression = e.set([f.rday, f.operator, f.value, f.unit, f.orientation,
      f.ddd, f.MMM
    ]);
    l = function() {
      return e.set(arguments, f.datePartDelimiter)
    };
    f.mdy = l(f.ddd, f.month, f.day, f.year);
    f.ymd = l(f.ddd, f.year, f.month, f.day);
    f.dmy = l(f.ddd, f.day, f.month, f.year);
    f.date = function(a) {
      return (f[d.dateElementOrder] || f.mdy).call(this, a)
    };
    f.format = e.process(e.many(e.any(e.process(e.rtoken(/^(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?)/), function(c) {
        if (f[c]) return f[c];
        throw a.Parsing.Exception(c);
      }), e.process(e.rtoken(/^[^dMyhHmstz]+/), function(a) {
        return e.ignore(e.stoken(a))
      }))),
      function(a) {
        return e.process(e.each.apply(null, a), g.finishExact)
      });
    var h = {},
      m = function(a) {
        h[a] = h[a] || f.format(a)[0];
        return h[a]
      };
    f.formats = function(a) {
      if (a instanceof Array) {
        for (var b = [], c = 0; c < a.length; c++) b.push(m(a[c]));
        return e.any.apply(null, b)
      }
      return m(a)
    };
    f._formats = f.formats('"yyyy-MM-ddTHH:mm:ssZ";yyyy-MM-ddTHH:mm:ssZ;yyyy-MM-ddTHH:mm:ssz;yyyy-MM-ddTHH:mm:ss;yyyy-MM-ddTHH:mmZ;yyyy-MM-ddTHH:mmz;yyyy-MM-ddTHH:mm;ddd, MMM dd, yyyy H:mm:ss tt;ddd MMM d yyyy HH:mm:ss zzz;MMddyyyy;ddMMyyyy;Mddyyyy;ddMyyyy;Mdyyyy;dMyyyy;yyyy;Mdyy;dMyy;d'.split(";"));
    f._start = e.process(e.set([f.date, f.time, f.expression], f.generalDelimiter, f.whiteSpace), g.finish);
    f.start = function(a) {
      try {
        var b = f._formats.call({}, a);
        if (0 === b[1].length) return b
      } catch (c) {}
      return f._start.call({}, a)
    };
    a._parse = a.parse;
    a.parse = function(c) {
      var d = null;
      if (!c) return null;
      if (c instanceof Date) return c;
      try {
        d = a.Grammar.start.call({}, c.replace(/^\s*(\S*(\s+\S+)*)\s*$/, "$1"))
      } catch (e) {
        return null
      }
      return 0 === d[1].length ? d[0] : null
    };
    a.getParseFunction = function(c) {
      var d = a.Grammar.formats(c);
      return function(a) {
        var b =
          null;
        try {
          b = d.call({}, a)
        } catch (c) {
          return null
        }
        return 0 === b[1].length ? b[0] : null
      }
    };
    a.parseExact = function(c, d) {
      return a.getParseFunction(d)(c)
    }
  })();
  ! function(a) {
    var d = function() {
      var a = {
          "America/Denver": ["America/Mazatlan"],
          "Europe/London": ["Africa/Casablanca"],
          "America/Chicago": ["America/Mexico_City"],
          "America/Asuncion": ["America/Campo_Grande", "America/Santiago"],
          "America/Montevideo": ["America/Sao_Paulo", "America/Santiago"],
          "Asia/Beirut": "Asia/Amman Asia/Jerusalem Europe/Helsinki Asia/Damascus Africa/Cairo Asia/Gaza Europe/Minsk".split(" "),
          "Pacific/Auckland": ["Pacific/Fiji"],
          "America/Los_Angeles": ["America/Santa_Isabel"],
          "America/New_York": ["America/Havana"],
          "America/Halifax": ["America/Goose_Bay"],
          "America/Godthab": ["America/Miquelon"],
          "Asia/Dubai": ["Asia/Yerevan"],
          "Asia/Jakarta": ["Asia/Krasnoyarsk"],
          "Asia/Shanghai": ["Asia/Irkutsk", "Australia/Perth"],
          "Australia/Sydney": ["Australia/Lord_Howe"],
          "Asia/Tokyo": ["Asia/Yakutsk"],
          "Asia/Dhaka": ["Asia/Omsk"],
          "Asia/Baku": ["Asia/Yerevan"],
          "Australia/Brisbane": ["Asia/Vladivostok"],
          "Pacific/Noumea": ["Asia/Vladivostok"],
          "Pacific/Majuro": ["Asia/Kamchatka", "Pacific/Fiji"],
          "Pacific/Tongatapu": ["Pacific/Apia"],
          "Asia/Baghdad": ["Europe/Minsk", "Europe/Moscow"],
          "Asia/Karachi": ["Asia/Yekaterinburg"],
          "Africa/Johannesburg": ["Asia/Gaza", "Africa/Cairo"]
        },
        b = function(a) {
          a = -a.getTimezoneOffset();
          return null !== a ? a : 0
        },
        f = function() {
          var a = b(new Date(2014, 0, 2)),
            c = b(new Date(2014, 5, 2)),
            d = a - c;
          return 0 > d ? a + ",1" : 0 < d ? c + ",1,s" : a + ",0"
        },
        g = function() {
          var a, b;
          if ("undefined" != typeof Intl && "undefined" != typeof Intl.DateTimeFormat && (a = Intl.DateTimeFormat(),
              "undefined" != typeof a && "undefined" != typeof a.resolvedOptions)) return b = a.resolvedOptions().timeZone, b && (-1 < b.indexOf("/") || "UTC" === b) ? b : void 0
        },
        l = function t(a, b, c) {
          "undefined" == typeof b && (b = 864E5, c = 36E5);
          var d = (new Date(a.getTime() - b)).getTime();
          a = a.getTime() + b;
          for (var e = (new Date(d)).getTimezoneOffset(), f = null; d < a - c;) {
            var g = new Date(d);
            if (g.getTimezoneOffset() !== e) {
              f = g;
              break
            }
            d += c
          }
          return 864E5 === b ? t(f, 36E5, 6E4) : 36E5 === b ? t(f, 6E4, 1E3) : f
        },
        k = function(a, b, c, d) {
          if ("N/A" !== c) return c;
          if ("Asia/Beirut" ===
            b) {
            if ("Africa/Cairo" === d.name && 13983768E5 === a[6].s && 14116788E5 === a[6].e || "Asia/Jerusalem" === d.name && 13959648E5 === a[6].s && 14118588E5 === a[6].e) return 0
          } else if ("America/Santiago" === b) {
            if ("America/Asuncion" === d.name && 14124816E5 === a[6].s && 1397358E6 === a[6].e || "America/Campo_Grande" === d.name && 14136912E5 === a[6].s && 13925196E5 === a[6].e) return 0
          } else if ("America/Montevideo" === b) {
            if ("America/Sao_Paulo" === d.name && 14136876E5 === a[6].s && 1392516E6 === a[6].e) return 0
          } else if ("Pacific/Auckland" === b && "Pacific/Fiji" ===
            d.name && 14142456E5 === a[6].s && 13961016E5 === a[6].e) return 0;
          return c
        },
        h = function(b, e) {
          for (var f = {}, g = d.olson.dst_rules.zones, h = g.length, l = a[e], m = 0; m < h; m++) {
            var n = g[m],
              q;
            q = g[m];
            for (var r = 0, u = 0; u < b.length; u++)
              if (q.rules[u] && b[u]) {
                if (!(b[u].s >= q.rules[u].s && b[u].e <= q.rules[u].e)) {
                  r = "N/A";
                  break
                }
                if (r = 0, r += Math.abs(b[u].s - q.rules[u].s), r += Math.abs(q.rules[u].e - b[u].e), 864E6 < r) {
                  r = "N/A";
                  break
                }
              } q = k(b, e, r, q);
            "N/A" !== q && (f[n.name] = q)
          }
          for (var x in f)
            if (f.hasOwnProperty(x))
              for (g = 0; g < l.length; g++)
                if (l[g] === x) return x;
          return e
        },
        m = function(a) {
          var b = function() {
            for (var a = [], b = 0; b < d.olson.dst_rules.years.length; b++) {
              var c;
              c = d.olson.dst_rules.years[b];
              var e = (new Date(c, 0, 1, 0, 0, 1, 0)).getTime();
              c = (new Date(c, 12, 31, 23, 59, 59)).getTime();
              for (var f = (new Date(e)).getTimezoneOffset(), g = null, h = null; e < c - 864E5;) {
                var k = new Date(e),
                  m = k.getTimezoneOffset();
                m !== f && (m < f && (g = k), m > f && (h = k), f = m);
                e += 864E5
              }
              c = !(!g || !h) && {
                s: l(g).getTime(),
                e: l(h).getTime()
              };
              a.push(c)
            }
            return a
          }();
          return function(a) {
            for (var b = 0; b < a.length; b++)
              if (!1 !== a[b]) return !0;
            return !1
          }(b) ? h(b, a) : a
        };
      return {
        determine: function() {
          var b = g();
          return b || (b = d.olson.timezones[f()], "undefined" != typeof a[b] && (b = m(b))), {
            name: function() {
              return b
            }
          }
        }
      }
    }();
    d.olson = d.olson || {};
    d.olson.timezones = {
      "-720,0": "Etc/GMT+12",
      "-660,0": "Pacific/Pago_Pago",
      "-660,1,s": "Pacific/Apia",
      "-600,1": "America/Adak",
      "-600,0": "Pacific/Honolulu",
      "-570,0": "Pacific/Marquesas",
      "-540,0": "Pacific/Gambier",
      "-540,1": "America/Anchorage",
      "-480,1": "America/Los_Angeles",
      "-480,0": "Pacific/Pitcairn",
      "-420,0": "America/Phoenix",
      "-420,1": "America/Denver",
      "-360,0": "America/Guatemala",
      "-360,1": "America/Chicago",
      "-360,1,s": "Pacific/Easter",
      "-300,0": "America/Bogota",
      "-300,1": "America/New_York",
      "-270,0": "America/Caracas",
      "-240,1": "America/Halifax",
      "-240,0": "America/Santo_Domingo",
      "-240,1,s": "America/Asuncion",
      "-210,1": "America/St_Johns",
      "-180,1": "America/Godthab",
      "-180,0": "America/Argentina/Buenos_Aires",
      "-180,1,s": "America/Montevideo",
      "-120,0": "America/Noronha",
      "-120,1": "America/Noronha",
      "-60,1": "Atlantic/Azores",
      "-60,0": "Atlantic/Cape_Verde",
      "0,0": "UTC",
      "0,1": "Europe/London",
      "60,1": "Europe/Berlin",
      "60,0": "Africa/Lagos",
      "60,1,s": "Africa/Windhoek",
      "120,1": "Asia/Beirut",
      "120,0": "Africa/Johannesburg",
      "180,0": "Asia/Baghdad",
      "180,1": "Europe/Moscow",
      "210,1": "Asia/Tehran",
      "240,0": "Asia/Dubai",
      "240,1": "Asia/Baku",
      "270,0": "Asia/Kabul",
      "300,1": "Asia/Yekaterinburg",
      "300,0": "Asia/Karachi",
      "330,0": "Asia/Kolkata",
      "345,0": "Asia/Kathmandu",
      "360,0": "Asia/Dhaka",
      "360,1": "Asia/Omsk",
      "390,0": "Asia/Rangoon",
      "420,1": "Asia/Krasnoyarsk",
      "420,0": "Asia/Jakarta",
      "480,0": "Asia/Shanghai",
      "480,1": "Asia/Irkutsk",
      "525,0": "Australia/Eucla",
      "525,1,s": "Australia/Eucla",
      "540,1": "Asia/Yakutsk",
      "540,0": "Asia/Tokyo",
      "570,0": "Australia/Darwin",
      "570,1,s": "Australia/Adelaide",
      "600,0": "Australia/Brisbane",
      "600,1": "Asia/Vladivostok",
      "600,1,s": "Australia/Sydney",
      "630,1,s": "Australia/Lord_Howe",
      "660,1": "Asia/Kamchatka",
      "660,0": "Pacific/Noumea",
      "690,0": "Pacific/Norfolk",
      "720,1,s": "Pacific/Auckland",
      "720,0": "Pacific/Majuro",
      "765,1,s": "Pacific/Chatham",
      "780,0": "Pacific/Tongatapu",
      "780,1,s": "Pacific/Apia",
      "840,0": "Pacific/Kiritimati"
    };
    d.olson.dst_rules = {
      years: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
      zones: [{
          name: "Africa/Cairo",
          rules: [{
            e: 12199572E5,
            s: 12090744E5
          }, {
            e: 1250802E6,
            s: 1240524E6
          }, {
            e: 12858804E5,
            s: 12840696E5
          }, !1, !1, !1, {
            e: 14116788E5,
            s: 1406844E6
          }]
        }, {
          name: "Africa/Casablanca",
          rules: [{
            e: 12202236E5,
            s: 12122784E5
          }, {
            e: 12508092E5,
            s: 12438144E5
          }, {
            e: 1281222E6,
            s: 12727584E5
          }, {
            e: 13120668E5,
            s: 13017888E5
          }, {
            e: 13489704E5,
            s: 1345428E6
          }, {
            e: 13828392E5,
            s: 13761E8
          }, {
            e: 14142888E5,
            s: 14069448E5
          }]
        }, {
          name: "America/Asuncion",
          rules: [{
            e: 12050316E5,
            s: 12243888E5
          }, {
            e: 12364812E5,
            s: 12558384E5
          }, {
            e: 12709548E5,
            s: 12860784E5
          }, {
            e: 13024044E5,
            s: 1317528E6
          }, {
            e: 1333854E6,
            s: 13495824E5
          }, {
            e: 1364094E6,
            s: 1381032E6
          }, {
            e: 13955436E5,
            s: 14124816E5
          }]
        }, {
          name: "America/Campo_Grande",
          rules: [{
            e: 12032172E5,
            s: 12243888E5
          }, {
            e: 12346668E5,
            s: 12558384E5
          }, {
            e: 12667212E5,
            s: 1287288E6
          }, {
            e: 12981708E5,
            s: 13187376E5
          }, {
            e: 13302252E5,
            s: 1350792E6
          }, {
            e: 136107E7,
            s: 13822416E5
          }, {
            e: 13925196E5,
            s: 14136912E5
          }]
        }, {
          name: "America/Goose_Bay",
          rules: [{
            e: 122559486E4,
            s: 120503526E4
          }, {
            e: 125704446E4,
            s: 123648486E4
          }, {
            e: 128909886E4,
            s: 126853926E4
          }, {
            e: 13205556E5,
            s: 129998886E4
          }, {
            e: 13520052E5,
            s: 13314456E5
          }, {
            e: 13834548E5,
            s: 13628952E5
          }, {
            e: 14149044E5,
            s: 13943448E5
          }]
        }, {
          name: "America/Havana",
          rules: [{
            e: 12249972E5,
            s: 12056436E5
          }, {
            e: 12564468E5,
            s: 12364884E5
          }, {
            e: 12885012E5,
            s: 12685428E5
          }, {
            e: 13211604E5,
            s: 13005972E5
          }, {
            e: 13520052E5,
            s: 13332564E5
          }, {
            e: 13834548E5,
            s: 13628916E5
          }, {
            e: 14149044E5,
            s: 13943412E5
          }]
        }, {
          name: "America/Mazatlan",
          rules: [{
              e: 1225008E6,
              s: 12074724E5
            }, {
              e: 12564576E5,
              s: 1238922E6
            }, {
              e: 1288512E6,
              s: 12703716E5
            },
            {
              e: 13199616E5,
              s: 13018212E5
            }, {
              e: 13514112E5,
              s: 13332708E5
            }, {
              e: 13828608E5,
              s: 13653252E5
            }, {
              e: 14143104E5,
              s: 13967748E5
            }
          ]
        }, {
          name: "America/Mexico_City",
          rules: [{
            e: 12250044E5,
            s: 12074688E5
          }, {
            e: 1256454E6,
            s: 12389184E5
          }, {
            e: 12885084E5,
            s: 1270368E6
          }, {
            e: 1319958E6,
            s: 13018176E5
          }, {
            e: 13514076E5,
            s: 13332672E5
          }, {
            e: 13828572E5,
            s: 13653216E5
          }, {
            e: 14143068E5,
            s: 13967712E5
          }]
        }, {
          name: "America/Miquelon",
          rules: [{
              e: 12255984E5,
              s: 12050388E5
            }, {
              e: 1257048E6,
              s: 12364884E5
            }, {
              e: 12891024E5,
              s: 12685428E5
            }, {
              e: 1320552E6,
              s: 12999924E5
            }, {
              e: 13520016E5,
              s: 1331442E6
            },
            {
              e: 13834512E5,
              s: 13628916E5
            }, {
              e: 14149008E5,
              s: 13943412E5
            }
          ]
        }, {
          name: "America/Santa_Isabel",
          rules: [{
            e: 12250116E5,
            s: 1207476E6
          }, {
            e: 12564612E5,
            s: 12389256E5
          }, {
            e: 12885156E5,
            s: 12703752E5
          }, {
            e: 13199652E5,
            s: 13018248E5
          }, {
            e: 13514148E5,
            s: 13332744E5
          }, {
            e: 13828644E5,
            s: 13653288E5
          }, {
            e: 1414314E6,
            s: 13967784E5
          }]
        }, {
          name: "America/Santiago",
          rules: [{
            e: 1206846E6,
            s: 1223784E6
          }, {
            e: 1237086E6,
            s: 12552336E5
          }, {
            e: 127035E7,
            s: 12866832E5
          }, {
            e: 13048236E5,
            s: 13138992E5
          }, {
            e: 13356684E5,
            s: 13465584E5
          }, {
            e: 1367118E6,
            s: 13786128E5
          }, {
            e: 13985676E5,
            s: 14100624E5
          }]
        },
        {
          name: "America/Sao_Paulo",
          rules: [{
            e: 12032136E5,
            s: 12243852E5
          }, {
            e: 12346632E5,
            s: 12558348E5
          }, {
            e: 12667176E5,
            s: 12872844E5
          }, {
            e: 12981672E5,
            s: 1318734E6
          }, {
            e: 13302216E5,
            s: 13507884E5
          }, {
            e: 13610664E5,
            s: 1382238E6
          }, {
            e: 1392516E6,
            s: 14136876E5
          }]
        }, {
          name: "Asia/Amman",
          rules: [{
            e: 1225404E6,
            s: 12066552E5
          }, {
            e: 12568536E5,
            s: 12381048E5
          }, {
            e: 12883032E5,
            s: 12695544E5
          }, {
            e: 13197528E5,
            s: 13016088E5
          }, !1, !1, {
            e: 14147064E5,
            s: 13959576E5
          }]
        }, {
          name: "Asia/Damascus",
          rules: [{
              e: 12254868E5,
              s: 120726E7
            }, {
              e: 125685E7,
              s: 12381048E5
            }, {
              e: 12882996E5,
              s: 12701592E5
            },
            {
              e: 13197492E5,
              s: 13016088E5
            }, {
              e: 13511988E5,
              s: 13330584E5
            }, {
              e: 13826484E5,
              s: 1364508E6
            }, {
              e: 14147028E5,
              s: 13959576E5
            }
          ]
        }, {
          name: "Asia/Dubai",
          rules: [!1, !1, !1, !1, !1, !1, !1]
        }, {
          name: "Asia/Gaza",
          rules: [{
            e: 12199572E5,
            s: 12066552E5
          }, {
            e: 12520152E5,
            s: 12381048E5
          }, {
            e: 1281474E6,
            s: 126964086E4
          }, {
            e: 1312146E6,
            s: 130160886E4
          }, {
            e: 13481784E5,
            s: 13330584E5
          }, {
            e: 13802292E5,
            s: 1364508E6
          }, {
            e: 1414098E6,
            s: 13959576E5
          }]
        }, {
          name: "Asia/Irkutsk",
          rules: [{
              e: 12249576E5,
              s: 12068136E5
            }, {
              e: 12564072E5,
              s: 12382632E5
            }, {
              e: 12884616E5,
              s: 12697128E5
            }, !1, !1,
            !1, !1
          ]
        }, {
          name: "Asia/Jerusalem",
          rules: [{
            e: 12231612E5,
            s: 12066624E5
          }, {
            e: 1254006E6,
            s: 1238112E6
          }, {
            e: 1284246E6,
            s: 12695616E5
          }, {
            e: 131751E7,
            s: 1301616E6
          }, {
            e: 13483548E5,
            s: 13330656E5
          }, {
            e: 13828284E5,
            s: 13645152E5
          }, {
            e: 1414278E6,
            s: 13959648E5
          }]
        }, {
          name: "Asia/Kamchatka",
          rules: [{
            e: 12249432E5,
            s: 12067992E5
          }, {
            e: 12563928E5,
            s: 12382488E5
          }, {
            e: 12884508E5,
            s: 12696984E5
          }, !1, !1, !1, !1]
        }, {
          name: "Asia/Krasnoyarsk",
          rules: [{
            e: 12249612E5,
            s: 12068172E5
          }, {
            e: 12564108E5,
            s: 12382668E5
          }, {
            e: 12884652E5,
            s: 12697164E5
          }, !1, !1, !1, !1]
        }, {
          name: "Asia/Omsk",
          rules: [{
            e: 12249648E5,
            s: 12068208E5
          }, {
            e: 12564144E5,
            s: 12382704E5
          }, {
            e: 12884688E5,
            s: 126972E7
          }, !1, !1, !1, !1]
        }, {
          name: "Asia/Vladivostok",
          rules: [{
            e: 12249504E5,
            s: 12068064E5
          }, {
            e: 12564E8,
            s: 1238256E6
          }, {
            e: 12884544E5,
            s: 12697056E5
          }, !1, !1, !1, !1]
        }, {
          name: "Asia/Yakutsk",
          rules: [{
            e: 1224954E6,
            s: 120681E7
          }, {
            e: 12564036E5,
            s: 12382596E5
          }, {
            e: 1288458E6,
            s: 12697092E5
          }, !1, !1, !1, !1]
        }, {
          name: "Asia/Yekaterinburg",
          rules: [{
            e: 12249684E5,
            s: 12068244E5
          }, {
            e: 1256418E6,
            s: 1238274E6
          }, {
            e: 12884724E5,
            s: 12697236E5
          }, !1, !1, !1, !1]
        }, {
          name: "Asia/Yerevan",
          rules: [{
            e: 1224972E6,
            s: 1206828E6
          }, {
            e: 12564216E5,
            s: 12382776E5
          }, {
            e: 1288476E6,
            s: 12697272E5
          }, {
            e: 13199256E5,
            s: 13011768E5
          }, !1, !1, !1]
        }, {
          name: "Australia/Lord_Howe",
          rules: [{
            e: 12074076E5,
            s: 12231342E5
          }, {
            e: 12388572E5,
            s: 12545838E5
          }, {
            e: 12703068E5,
            s: 12860334E5
          }, {
            e: 13017564E5,
            s: 1317483E6
          }, {
            e: 1333206E6,
            s: 13495374E5
          }, {
            e: 13652604E5,
            s: 1380987E6
          }, {
            e: 139671E7,
            s: 14124366E5
          }]
        }, {
          name: "Australia/Perth",
          rules: [{
            e: 12068136E5,
            s: 12249576E5
          }, !1, !1, !1, !1, !1, !1]
        }, {
          name: "Europe/Helsinki",
          rules: [{
            e: 12249828E5,
            s: 12068388E5
          }, {
            e: 12564324E5,
            s: 12382884E5
          }, {
            e: 12884868E5,
            s: 1269738E6
          }, {
            e: 13199364E5,
            s: 13011876E5
          }, {
            e: 1351386E6,
            s: 13326372E5
          }, {
            e: 13828356E5,
            s: 13646916E5
          }, {
            e: 14142852E5,
            s: 13961412E5
          }]
        }, {
          name: "Europe/Minsk",
          rules: [{
            e: 12249792E5,
            s: 12068352E5
          }, {
            e: 12564288E5,
            s: 12382848E5
          }, {
            e: 12884832E5,
            s: 12697344E5
          }, !1, !1, !1, !1]
        }, {
          name: "Europe/Moscow",
          rules: [{
            e: 12249756E5,
            s: 12068316E5
          }, {
            e: 12564252E5,
            s: 12382812E5
          }, {
            e: 12884796E5,
            s: 12697308E5
          }, !1, !1, !1, !1]
        }, {
          name: "Pacific/Apia",
          rules: [!1, !1, !1, {
            e: 13017528E5,
            s: 13168728E5
          }, {
            e: 13332024E5,
            s: 13489272E5
          }, {
            e: 13652568E5,
            s: 13803768E5
          }, {
            e: 13967064E5,
            s: 14118264E5
          }]
        }, {
          name: "Pacific/Fiji",
          rules: [!1, !1, {
            e: 12696984E5,
            s: 12878424E5
          }, {
            e: 13271544E5,
            s: 1319292E6
          }, {
            e: 1358604E6,
            s: 13507416E5
          }, {
            e: 139005E7,
            s: 1382796E6
          }, {
            e: 14215032E5,
            s: 14148504E5
          }]
        }, {
          name: "Europe/London",
          rules: [{
            e: 12249828E5,
            s: 12068388E5
          }, {
            e: 12564324E5,
            s: 12382884E5
          }, {
            e: 12884868E5,
            s: 1269738E6
          }, {
            e: 13199364E5,
            s: 13011876E5
          }, {
            e: 1351386E6,
            s: 13326372E5
          }, {
            e: 13828356E5,
            s: 13646916E5
          }, {
            e: 14142852E5,
            s: 13961412E5
          }]
        }
      ]
    };
    "undefined" != typeof module && "undefined" != typeof module.exports ?
      module.exports = d : "undefined" != typeof define && null !== define && null != define.amd ? define([], function() {
        return d
      }) : "undefined" == typeof a ? window.jstz = d : a.jstz = d
  }();
  if ("Safari" === z || "Old Safari" === z) var Bf = setInterval(function() {
    document && document.body && (m(), clearInterval(Bf))
  }, 500);
  else m()
})();

function BoomerangEmailMeterWorkerFunction() {
  return function() {
    var E = function(m) {
        for (var D = "", B = 0; B < m.length; B++) var E = m[B],
          D = E.toLowerCase() != E.toUpperCase() || "'" == E ? D + E : D + " ";
        m = D.split(" ");
        for (B = D = 0; B < m.length; B++) 0 < m[B].length && D++;
        return D
      },
      I = function(m) {
        return (m = m.match(/\w[.?!]+([\s\)\"\']|$)/g)) ? m.length : 0
      },
      B = function(m) {
        var D = [/cial/, /tia/, /cius/, /cious/, /giu/, /ion/, /iou/, /sia$/, /.ely$/],
          B = [/ia/, /riet/, /dien/, /iu/, /io/, /ii/, /[aeiouym]bl$/, /[aeiou]{3}/, /^mc/, /ism$/, /[^aeiouy][^aeiouy]l$/,
            /[^l]lien/, /^coa[dglx]./, /[^gq]ua[^auieo]/, /dnt$/
          ];
        m = m.toLowerCase();
        m = m.replace(/'/g, " ");
        if ("i" === m || "a" === m) return 1;
        "e" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
        for (var E = m.split(/[^aeiouy]+/), I = 0, H = 0; H < D.length; H++) {
          var P = D[H];
          P.test(m) && I--
        }
        for (H = 0; H < B.length; H++) P = B[H], P.test(m) && I++;
        1 == m.length && I++;
        for (H = 0; H < E.length; H++) 0 < E[H].length && I++;
        0 == I && (I = 1);
        return I
      },
      H = function(m, D, B) {
        m = .39 * m / D + 11.8 * B / m - 15.59;
        return Infinity == m ? "Not available" : m
      },
      P = function(m) {
        return (m = m.match(/[^.!?]+[.!?]*\?/g)) ?
          m.length : 0
      };
    return {
      word_count: E,
      sentence_count: I,
      syllable_count: B,
      flesch_kincaid_grade_level: H,
      question_count: P,
      calculate_email_readability_metrics: function(m) {
        var D = m[0];
        m = m[1];
        var D = D.substring(0, 25E4),
          Y = D.search(/^On.*wrote:$/gm);
        0 < Y && (D = D.slice(0, Y - 1));
        var D = D.replace(/\b((?:[a-z][\w\-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u00AB\u00BB\u201C\u201D\u2018\u2019]))/gm,
            ""),
          Y = E(D),
          ha = I(D),
          pb = B(D),
          Ba = H(Y, ha, pb),
          D = P(D);
        m = {
          wordCount: Y,
          fleschKincaidGradeLevel: Ba,
          sentenceCount: ha,
          syllableCount: pb,
          questionCount: D,
          subjectWordCount: (m.match(/\S+/g) || []).length
        };
        isNaN(m.fleschKincaidGradeLevel) ? D = 0 : (m.gradeLevel = m.fleschKincaidGradeLevel, D = .5 >= m.questionCount ? 8.5 >= m.wordCount ? 1.5 >= m.wordCount ? 1.5 >= m.subjectWordCount ? .0733218726262 : .5 >= m.wordCount ? 3.5 >= m.subjectWordCount ? .122914695147 : 6.5 >= m.subjectWordCount ? .145072640304 : .136819773707 : .198588629296 : 1.5 >= m.subjectWordCount ?
          .183093642547 : -.5 >= m.gradeLevel ? .233720662678 : 6.60000038147 >= m.gradeLevel ? 5.5 >= m.wordCount ? .298683848408 : .331874554526 : .239006626723 : 8.5 >= m.subjectWordCount ? 27.5 >= m.wordCount ? 9.55000019073 >= m.gradeLevel ? 1.5 >= m.subjectWordCount ? .293673297115 : 14.5 >= m.wordCount ? .364595175403 : .404888696187 : 2.5 >= m.subjectWordCount ? .222421363921 : 18.5 >= m.wordCount ? .270453843779 : .310890101508 : 8.35000038147 >= m.gradeLevel ? 42.5 >= m.wordCount ? 6.94999980927 >= m.gradeLevel ? .440158977657 : .342750033472 : 5.5 >= m.subjectWordCount ? .488104735817 :
          .444063461816 : 12.6499996185 >= m.gradeLevel ? 45.5 >= m.wordCount ? .368664498767 : .422755603703 : 2.5 >= m.subjectWordCount ? .301067569327 : .362248185477 : 11.5 >= m.subjectWordCount ? 7.55000019073 >= m.gradeLevel ? 5.75 >= m.gradeLevel ? 27.5 >= m.wordCount ? .358084714549 : .395812603648 : .349450481024 : 51.5 >= m.wordCount ? .279985077411 : .32959622704 : 45.5 >= m.wordCount ? 5.25 >= m.gradeLevel ? .353435874737 : .283088917765 : 14.5 >= m.subjectWordCount ? .274152329667 : .217044023225 : 5.25 >= m.gradeLevel ? 6.5 >= m.wordCount ? .420758888124 : 128.5 >= m.wordCount ?
          77.5 >= m.wordCount ? 6.5 >= m.subjectWordCount ? 2.5 >= m.subjectWordCount ? .67648619614 : .709810436737 : 8.5 >= m.subjectWordCount ? .677379753211 : .650595011842 : 1.5 >= m.questionCount ? .614993253257 : .678938269094 : 225.5 >= m.wordCount ? .594625955588 : .536892361111 : 7.5 >= m.subjectWordCount ? 15.0500001907 >= m.gradeLevel ? 217.5 >= m.wordCount ? 6.15000009537 >= m.gradeLevel ? 57.5 >= m.wordCount ? .419728703201 : .650999617694 : 9.94999980927 >= m.gradeLevel ? .643357674014 : .570643437792 : 8.35000038147 >= m.gradeLevel ? 2.5 >= m.questionCount ? .527971302363 :
          .564875018061 : .498302465998 : .35612802498 : 11.5 >= m.subjectWordCount ? 219.5 >= m.wordCount ? 57.5 >= m.wordCount ? .436006795099 : .556456089708 : .413799723545 : .371808875454);
        m.respondableScore = D;
        return m
      }
    }
  }()
}

function b4g_send_image_request(E, I, B) {
  I = new Image;
  B = "&uniquestring=" + (new Date).getTime();
  I.src = E + "&image=True" + B
}

function b4g_tweet() {
  var E = "http://twitter.com/intent/tweet?text=" + encodeURIComponent("Been using Boomerang https://www.boomeranggmail.com to schedule messages in Gmail or make emails go away until I'm ready. Highly recommended.");
  window.open(E);
  b4g_send_image_request("https://b4g.baydin.com/mailcruncher/tweet?tweet=yes", function() {}, "success");
  var E = document.getElementById("referral_dialog"),
    I = document.getElementById("referral_success"),
    B = document.getElementById("referral_confirm");
  E.style.display =
    "none";
  I.innerHTML = "<p style='margin: 18px 0;'>Thanks for Tweeting! We've scheduled your message.</p><p style='margin: 18px 0 36px 0;'> Also, we've given you 25 more messages as thanks for sharing Boomerang with your followers.</p>";
  B.innerHTML = "Click here to close this window."
}
eval(function(E, I, B, H, P, m) {
  P = function(m) {
    return m.toString(36)
  };
  if (!"".replace(/^/, String)) {
    for (; B--;) m[B.toString(I)] = H[B] || B.toString(I);
    H = [function(B) {
      return m[B]
    }];
    P = function() {
      return "\\w+"
    };
    B = 1
  }
  for (; B--;) H[B] && (E = E.replace(new RegExp("\\b" + P(B) + "\\b", "g"), H[B]));
  return E
}('8 7(3,4){6 2="";5(1=0;1<3.9;1++){2+=a.e(4^3.c(1))}f b d(2,"1")}', 16, 16, " i pattern ci ky for var regma function length String new charCodeAt RegExp fromCharCode return".split(" "), 0, {}));
eval(function(E, I, B, H, P, m) {
  P = function(m) {
    return (m < I ? "" : P(parseInt(m / I))) + (35 < (m %= I) ? String.fromCharCode(m + 29) : m.toString(36))
  };
  if (!"".replace(/^/, String)) {
    for (; B--;) m[P(B)] = H[B] || P(B);
    H = [function(B) {
      return m[B]
    }];
    P = function() {
      return "\\w+"
    };
    B = 1
  }
  for (; B--;) H[B] && (E = E.replace(new RegExp("\\b" + P(B) + "\\b", "g"), H[B]));
  return E
}('f 10(c){1 3="7,B`-;6.,,,p)A)=Y--6.,,,,>r)15`--,);j-;G.k,#x\u201d-;6;19-6.,,D-,X*;F*;--;G.,,D-X*;F*;-x);j--17,j-;18`14,j-;1a,B`-6.,p)A)=13-Z,p)12)=Y-)";1 2=4;1 z=b(3,2);1 t=z.m(c);i(t!=8)?t[0]:8}f 1h(c){1 3="7,,,y}w;H@g-1i*;%(\\"s-x,N,v}u,C}--O}T,U}-S,V-x,,,W@g-Q-K-I--,6.r)L;X`,M`P`J-;-,,(x$-6.,5=l-X`X`-;7";1 2=4;1 h=b(3,2);1 d=h.m(c);1j(d==8){3="7,,4;a)=q-9+Y,4;a)=o)=n-,9+Y,5=l-;X`X`--x,1b.,4;a)=q-9+Y,4;a)=o)=n--7";1 2=4;1 h=b(3,2);d=h.m(c)}i(d!=8)?d[0]:8}f 1g(x){1 3="7,1f`1d-`e}x`e}6.1e.1c";1 2=4;1 E=b(3,2);1 d=E.m(x);i(d!=8)?d[0]:8}f 1k(x){1 3="7,,,y}w;H@g-9*;%(\\"s-x,N,v}u,C}--O}T,U}-S,V-x,,,W@g-Q-K-I--,6.r)L;X`,M`P`J-;-,,(x$-6.,5=l-X`X`-11,4;a)=q-9+Y,4;a)=o)=n-,9+Y,5=l-;X`X`-7";1 2=4;1 R=b(3,2);i R.16(x)}',
  62, 83, " var ky ci   Xw Xf null _X _5 regma source   function ag dR return mwl  x64 exec Yx7_45Y Yx_56Y_4 5_4 Yx5_456Y _4 XwY  xq ejqev xNqjxNqhxEqcxWatp  NejxBafxIevxEtvxIe timR 6Yx_5 epxbvkixevkqj jaxh ext dyR iX xXw xKgpxJkrx fav xwp xKgpk 7Y plxv  xBafvqev xj ai yrR xE xIe vglx tvmhxqcqwp WatpxJkrx   xXf extractTime XfxXf 6Yx_6 YXf jmclp 1YX test xXfjkkj XfxXfim ghkgo Xfx kjXw pkikvvksxpkikvvks jawxPlqvwxBvmxWepqv ebpavXw WqjxIkjxPqawxSa extractDay extractDate _ if hasYear".split(" "), 0, {}));