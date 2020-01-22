'use strict';

function m() {
  return function() {}
}
var n;

function aa(a) {
  var b = 0;
  return function() {
    return b < a.length ? {
      done: !1,
      value: a[b++]
    } : {
      done: !0
    }
  }
}
var ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
    a != Array.prototype && a != Object.prototype && (a[b] = c.value)
  },
  q = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;

function ca() {
  ca = m();
  q.Symbol || (q.Symbol = da)
}

function ea(a, b) {
  this.a = a;
  ba(this, "description", {
    configurable: !0,
    writable: !0,
    value: b
  })
}
ea.prototype.toString = function() {
  return this.a
};
var da = function() {
  function a(c) {
    if (this instanceof a) throw new TypeError("Symbol is not a constructor");
    return new ea("jscomp_symbol_" + (c || "") + "_" + b++, c)
  }
  var b = 0;
  return a
}();

function r() {
  ca();
  var a = q.Symbol.iterator;
  a || (a = q.Symbol.iterator = q.Symbol("Symbol.iterator"));
  "function" != typeof Array.prototype[a] && ba(Array.prototype, a, {
    configurable: !0,
    writable: !0,
    value: function() {
      return fa(aa(this))
    }
  });
  r = m()
}

function fa(a) {
  r();
  a = {
    next: a
  };
  a[q.Symbol.iterator] = function() {
    return this
  };
  return a
}

function ha(a) {
  var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
  return b ? b.call(a) : {
    next: aa(a)
  }
}

function ia(a) {
  if (!(a instanceof Array)) {
    a = ha(a);
    for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
    a = c
  }
  return a
}
var ja = "function" == typeof Object.create ? Object.create : function(a) {
    function b() {}
    b.prototype = a;
    return new b
  },
  ka;
if ("function" == typeof Object.setPrototypeOf) ka = Object.setPrototypeOf;
else {
  var la;
  a: {
    var ma = {
        fa: !0
      },
      na = {};
    try {
      na.__proto__ = ma;
      la = na.fa;
      break a
    } catch (a) {}
    la = !1
  }
  ka = la ? function(a, b) {
    a.__proto__ = b;
    if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
    return a
  } : null
}
var oa = ka;

function t(a, b) {
  a.prototype = ja(b.prototype);
  a.prototype.constructor = a;
  if (oa) oa(a, b);
  else
    for (var c in b)
      if ("prototype" != c)
        if (Object.defineProperties) {
          var d = Object.getOwnPropertyDescriptor(b, c);
          d && Object.defineProperty(a, c, d)
        } else a[c] = b[c];
  a.K = b.prototype
}

function u(a, b) {
  if (b) {
    var c = q;
    a = a.split(".");
    for (var d = 0; d < a.length - 1; d++) {
      var e = a[d];
      e in c || (c[e] = {});
      c = c[e]
    }
    a = a[a.length - 1];
    d = c[a];
    b = b(d);
    b != d && null != b && ba(c, a, {
      configurable: !0,
      writable: !0,
      value: b
    })
  }
}

function pa(a, b, c) {
  if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
  if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
  return a + ""
}
u("String.prototype.repeat", function(a) {
  return a ? a : function(b) {
    var c = pa(this, null, "repeat");
    if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
    b |= 0;
    for (var d = ""; b;)
      if (b & 1 && (d += c), b >>>= 1) c += c;
    return d
  }
});

function v(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
u("WeakMap", function(a) {
  function b(k) {
    this.a = (g += Math.random() + 1).toString();
    if (k) {
      k = ha(k);
      for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1])
    }
  }

  function c() {}

  function d(k) {
    var l = typeof k;
    return "object" === l && null !== k || "function" === l
  }

  function e(k) {
    if (!v(k, h)) {
      var l = new c;
      ba(k, h, {
        value: l
      })
    }
  }

  function f(k) {
    var l = Object[k];
    l && (Object[k] = function(p) {
      if (p instanceof c) return p;
      e(p);
      return l(p)
    })
  }
  if (function() {
      if (!a || !Object.seal) return !1;
      try {
        var k = Object.seal({}),
          l = Object.seal({}),
          p = new a([
            [k, 2],
            [l, 3]
          ]);
        if (2 != p.get(k) || 3 != p.get(l)) return !1;
        p.delete(k);
        p.set(l, 4);
        return !p.has(k) && 4 == p.get(l)
      } catch (X) {
        return !1
      }
    }()) return a;
  var h = "$jscomp_hidden_" + Math.random();
  f("freeze");
  f("preventExtensions");
  f("seal");
  var g = 0;
  b.prototype.set = function(k, l) {
    if (!d(k)) throw Error("Invalid WeakMap key");
    e(k);
    if (!v(k, h)) throw Error("WeakMap key fail: " + k);
    k[h][this.a] = l;
    return this
  };
  b.prototype.get = function(k) {
    return d(k) && v(k, h) ? k[h][this.a] : void 0
  };
  b.prototype.has = function(k) {
    return d(k) && v(k, h) && v(k[h], this.a)
  };
  b.prototype.delete = function(k) {
    return d(k) && v(k, h) && v(k[h], this.a) ? delete k[h][this.a] : !1
  };
  return b
});
u("Map", function(a) {
  function b() {
    var g = {};
    return g.previous = g.next = g.head = g
  }

  function c(g, k) {
    var l = g.a;
    return fa(function() {
      if (l) {
        for (; l.head != g.a;) l = l.previous;
        for (; l.next != l.head;) return l = l.next, {
          done: !1,
          value: k(l)
        };
        l = null
      }
      return {
        done: !0,
        value: void 0
      }
    })
  }

  function d(g, k) {
    var l = k && typeof k;
    "object" == l || "function" == l ? f.has(k) ? l = f.get(k) : (l = "" + ++h, f.set(k, l)) : l = "p_" + k;
    var p = g.b[l];
    if (p && v(g.b, l))
      for (g = 0; g < p.length; g++) {
        var X = p[g];
        if (k !== k && X.key !== X.key || k === X.key) return {
          id: l,
          list: p,
          index: g,
          entry: X
        }
      }
    return {
      id: l,
      list: p,
      index: -1,
      entry: void 0
    }
  }

  function e(g) {
    this.b = {};
    this.a = b();
    this.size = 0;
    if (g) {
      g = ha(g);
      for (var k; !(k = g.next()).done;) k = k.value, this.set(k[0], k[1])
    }
  }
  if (function() {
      if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
      try {
        var g = Object.seal({
            x: 4
          }),
          k = new a(ha([
            [g, "s"]
          ]));
        if ("s" != k.get(g) || 1 != k.size || k.get({
            x: 4
          }) || k.set({
            x: 4
          }, "t") != k || 2 != k.size) return !1;
        var l = k.entries(),
          p = l.next();
        if (p.done || p.value[0] != g || "s" != p.value[1]) return !1;
        p = l.next();
        return p.done || 4 !=
          p.value[0].x || "t" != p.value[1] || !l.next().done ? !1 : !0
      } catch (X) {
        return !1
      }
    }()) return a;
  r();
  var f = new WeakMap;
  e.prototype.set = function(g, k) {
    g = 0 === g ? 0 : g;
    var l = d(this, g);
    l.list || (l.list = this.b[l.id] = []);
    l.entry ? l.entry.value = k : (l.entry = {
      next: this.a,
      previous: this.a.previous,
      head: this.a,
      key: g,
      value: k
    }, l.list.push(l.entry), this.a.previous.next = l.entry, this.a.previous = l.entry, this.size++);
    return this
  };
  e.prototype.delete = function(g) {
    g = d(this, g);
    return g.entry && g.list ? (g.list.splice(g.index, 1), g.list.length ||
      delete this.b[g.id], g.entry.previous.next = g.entry.next, g.entry.next.previous = g.entry.previous, g.entry.head = null, this.size--, !0) : !1
  };
  e.prototype.clear = function() {
    this.b = {};
    this.a = this.a.previous = b();
    this.size = 0
  };
  e.prototype.has = function(g) {
    return !!d(this, g).entry
  };
  e.prototype.get = function(g) {
    return (g = d(this, g).entry) && g.value
  };
  e.prototype.entries = function() {
    return c(this, function(g) {
      return [g.key, g.value]
    })
  };
  e.prototype.keys = function() {
    return c(this, function(g) {
      return g.key
    })
  };
  e.prototype.values = function() {
    return c(this,
      function(g) {
        return g.value
      })
  };
  e.prototype.forEach = function(g, k) {
    for (var l = this.entries(), p; !(p = l.next()).done;) p = p.value, g.call(k, p[1], p[0], this)
  };
  e.prototype[Symbol.iterator] = e.prototype.entries;
  var h = 0;
  return e
});
var qa = function() {
  function a() {
    function c() {}
    new c;
    Reflect.construct(c, [], m());
    return new c instanceof c
  }
  if ("undefined" != typeof Reflect && Reflect.construct) {
    if (a()) return Reflect.construct;
    var b = Reflect.construct;
    return function(c, d, e) {
      c = b(c, d);
      e && Reflect.setPrototypeOf(c, e.prototype);
      return c
    }
  }
  return function(c, d, e) {
    void 0 === e && (e = c);
    e = ja(e.prototype || Object.prototype);
    return Function.prototype.apply.call(c, e, d) || e
  }
}();
u("Reflect.construct", function() {
  return qa
});
u("Set", function(a) {
  function b(c) {
    this.a = new Map;
    if (c) {
      c = ha(c);
      for (var d; !(d = c.next()).done;) this.add(d.value)
    }
    this.size = this.a.size
  }
  if (function() {
      if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
      try {
        var c = Object.seal({
            x: 4
          }),
          d = new a(ha([c]));
        if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
            x: 4
          }) != d || 2 != d.size) return !1;
        var e = d.entries(),
          f = e.next();
        if (f.done || f.value[0] != c || f.value[1] != c) return !1;
        f = e.next();
        return f.done || f.value[0] == c || 4 != f.value[0].x ||
          f.value[1] != f.value[0] ? !1 : e.next().done
      } catch (h) {
        return !1
      }
    }()) return a;
  r();
  b.prototype.add = function(c) {
    c = 0 === c ? 0 : c;
    this.a.set(c, c);
    this.size = this.a.size;
    return this
  };
  b.prototype.delete = function(c) {
    c = this.a.delete(c);
    this.size = this.a.size;
    return c
  };
  b.prototype.clear = function() {
    this.a.clear();
    this.size = 0
  };
  b.prototype.has = function(c) {
    return this.a.has(c)
  };
  b.prototype.entries = function() {
    return this.a.entries()
  };
  b.prototype.values = function() {
    return this.a.values()
  };
  b.prototype.keys = b.prototype.values;
  b.prototype[Symbol.iterator] = b.prototype.values;
  b.prototype.forEach = function(c, d) {
    var e = this;
    this.a.forEach(function(f) {
      return c.call(d, f, f, e)
    })
  };
  return b
});
u("Object.values", function(a) {
  return a ? a : function(b) {
    var c = [],
      d;
    for (d in b) v(b, d) && c.push(b[d]);
    return c
  }
});
u("Object.is", function(a) {
  return a ? a : function(b, c) {
    return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
  }
});
u("Array.prototype.includes", function(a) {
  return a ? a : function(b, c) {
    var d = this;
    d instanceof String && (d = String(d));
    var e = d.length;
    c = c || 0;
    for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
      var f = d[c];
      if (f === b || Object.is(f, b)) return !0
    }
    return !1
  }
});
u("String.prototype.includes", function(a) {
  return a ? a : function(b, c) {
    return -1 !== pa(this, b, "includes").indexOf(b, c || 0)
  }
});
var ra = ra || {},
  w = this || self;

function sa(a) {
  a = a.split(".");
  for (var b = w, c = 0; c < a.length; c++)
    if (b = b[a[c]], null == b) return null;
  return b
}

function x() {}

function ta(a) {
  var b = typeof a;
  if ("object" == b)
    if (a) {
      if (a instanceof Array) return "array";
      if (a instanceof Object) return b;
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) return "object";
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
    } else return "null";
  else if ("function" == b && "undefined" == typeof a.call) return "object";
  return b
}

function y(a) {
  return "array" == ta(a)
}

function ua(a) {
  var b = ta(a);
  return "array" == b || "object" == b && "number" == typeof a.length
}

function z(a) {
  return "function" == ta(a)
}

function va(a) {
  var b = typeof a;
  return "object" == b && null != a || "function" == b
}
var wa = "closure_uid_" + (1E9 * Math.random() >>> 0),
  xa = 0;

function ya(a, b, c) {
  return a.call.apply(a.bind, arguments)
}

function za(a, b, c) {
  if (!a) throw Error();
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var e = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(e, d);
      return a.apply(b, e)
    }
  }
  return function() {
    return a.apply(b, arguments)
  }
}

function A(a, b, c) {
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? A = ya : A = za;
  return A.apply(null, arguments)
}

function Aa(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var d = c.slice();
    d.push.apply(d, arguments);
    return a.apply(this, d)
  }
}
var Ba = Date.now || function() {
  return +new Date
};

function Ca(a) {
  if (w.execScript) w.execScript(a, "JavaScript");
  else if (w.eval) {
    if (null == Da) {
      try {
        w.eval("var _evalTest_ = 1;")
      } catch (d) {}
      if ("undefined" != typeof w._evalTest_) {
        try {
          delete w._evalTest_
        } catch (d) {}
        Da = !0
      } else Da = !1
    }
    if (Da) w.eval(a);
    else {
      var b = w.document,
        c = b.createElement("script");
      c.type = "text/javascript";
      c.defer = !1;
      c.appendChild(b.createTextNode(a));
      b.head.appendChild(c);
      b.head.removeChild(c)
    }
  } else throw Error("goog.globalEval not available");
}
var Da = null;

function B(a, b) {
  function c() {}
  c.prototype = b.prototype;
  a.K = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a
};

function Ea(a, b, c) {
  for (var d in a) b.call(c, a[d], d, a)
}

function Fa(a) {
  var b = {},
    c;
  for (c in a) b[c] = a[c];
  return b
}
var Ga = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function Ha(a, b) {
  for (var c, d, e = 1; e < arguments.length; e++) {
    d = arguments[e];
    for (c in d) a[c] = d[c];
    for (var f = 0; f < Ga.length; f++) c = Ga[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
  }
};

function C(a) {
  if (Error.captureStackTrace) Error.captureStackTrace(this, C);
  else {
    var b = Error().stack;
    b && (this.stack = b)
  }
  a && (this.message = String(a))
}
B(C, Error);
C.prototype.name = "CustomError";

function Ia(a, b) {
  return Array.prototype.indexOf.call(a, b, void 0)
}

function Ja(a, b, c) {
  Array.prototype.forEach.call(a, b, c)
}

function Ka(a, b) {
  return Array.prototype.some.call(a, b, void 0)
}

function La(a) {
  a: {
    var b = Ma;
    for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
      if (e in d && b.call(void 0, d[e], e, a)) {
        b = e;
        break a
      } b = -1
  }
  return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
}

function Na(a, b) {
  b = Ia(a, b);
  var c;
  (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
  return c
}

function Oa(a) {
  return Array.prototype.concat.apply([], arguments)
}

function Pa(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
    return c
  }
  return []
};

function Qa(a, b) {
  this.g = a;
  this.j = b;
  this.b = 0;
  this.a = null
}
Qa.prototype.get = function() {
  if (0 < this.b) {
    this.b--;
    var a = this.a;
    this.a = a.next;
    a.next = null
  } else a = this.g();
  return a
};

function Ra(a, b) {
  a.j(b);
  100 > a.b && (a.b++, b.next = a.a, a.a = b)
};
var Sa = [],
  Ta = [],
  Ua = !1;

function Va(a) {
  Sa[Sa.length] = a;
  if (Ua)
    for (var b = 0; b < Ta.length; b++) a(A(Ta[b].a, Ta[b]))
};
var Wa;
a: {
  var Xa = w.navigator;
  if (Xa) {
    var Ya = Xa.userAgent;
    if (Ya) {
      Wa = Ya;
      break a
    }
  }
  Wa = ""
};

function Za(a, b) {
  this.b = a === $a && b || "";
  this.a = ab
}
var ab = {},
  $a = {},
  bb = new Za($a, "");

function cb(a, b) {
  this.b = a === db && b || "";
  this.a = eb
}
var eb = {},
  db = {};

function fb() {
  this.a = "";
  this.b = gb
}

function hb() {
  var a = ib;
  if (a instanceof fb && a.constructor === fb && a.b === gb) return a.a;
  ta(a);
  return "type_error:SafeHtml"
}
var gb = {},
  jb = new fb;
jb.a = "";
var ib = jb;

function kb(a) {
  var b = new cb(db, bb instanceof Za && bb.constructor === Za && bb.a === ab ? bb.b : "type_error:Const");
  b instanceof cb && b.constructor === cb && b.a === eb ? b = b.b : (ta(b), b = "type_error:TrustedResourceUrl");
  a.src = b.toString()
};
var lb = String.prototype.repeat ? function(a, b) {
  return a.repeat(b)
} : function(a, b) {
  return Array(b + 1).join(a)
};

function mb(a) {
  return Array.prototype.join.call(arguments, "")
};

function nb(a, b, c) {
  return Object.prototype.hasOwnProperty.call(a, b) ? a[b] : a[b] = c(b)
};

function ob(a) {
  var b = document;
  a = String(a);
  "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
  return b.createElement(a)
};

function pb(a) {
  w.setTimeout(function() {
    throw a;
  }, 0)
}
var qb;

function rb() {
  var a = w.MessageChannel;
  "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && -1 == Wa.indexOf("Presto") && (a = function() {
    var e = ob("IFRAME");
    e.style.display = "none";
    kb(e);
    document.documentElement.appendChild(e);
    var f = e.contentWindow;
    e = f.document;
    e.open();
    e.write(hb());
    e.close();
    var h = "callImmediate" + Math.random(),
      g = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
    e = A(function(k) {
        if (("*" == g || k.origin == g) && k.data == h) this.port1.onmessage()
      },
      this);
    f.addEventListener("message", e, !1);
    this.port1 = {};
    this.port2 = {
      postMessage: function() {
        f.postMessage(h, g)
      }
    }
  });
  if ("undefined" !== typeof a && -1 == Wa.indexOf("Trident") && -1 == Wa.indexOf("MSIE")) {
    var b = new a,
      c = {},
      d = c;
    b.port1.onmessage = function() {
      if (void 0 !== c.next) {
        c = c.next;
        var e = c.$;
        c.$ = null;
        e()
      }
    };
    return function(e) {
      d.next = {
        $: e
      };
      d = d.next;
      b.port2.postMessage(0)
    }
  }
  return "undefined" !== typeof document && "onreadystatechange" in ob("SCRIPT") ? function(e) {
    var f = ob("SCRIPT");
    f.onreadystatechange = function() {
      f.onreadystatechange =
        null;
      f.parentNode.removeChild(f);
      f = null;
      e();
      e = null
    };
    document.documentElement.appendChild(f)
  } : function(e) {
    w.setTimeout(e, 0)
  }
}

function sb(a) {
  return a
}
Va(function(a) {
  sb = a
});

function tb() {
  this.b = this.a = null
}
var vb = new Qa(function() {
  return new ub
}, function(a) {
  a.reset()
});
tb.prototype.add = function(a, b) {
  var c = vb.get();
  c.set(a, b);
  this.b ? this.b.next = c : this.a = c;
  this.b = c
};
tb.prototype.remove = function() {
  var a = null;
  this.a && (a = this.a, this.a = this.a.next, this.a || (this.b = null), a.next = null);
  return a
};

function ub() {
  this.next = this.b = this.a = null
}
ub.prototype.set = function(a, b) {
  this.a = a;
  this.b = b;
  this.next = null
};
ub.prototype.reset = function() {
  this.next = this.b = this.a = null
};

function wb(a, b) {
  xb || yb();
  zb || (xb(), zb = !0);
  Ab.add(a, b)
}
var xb;

function yb() {
  if (w.Promise && w.Promise.resolve) {
    var a = w.Promise.resolve(void 0);
    xb = function() {
      a.then(Bb)
    }
  } else xb = function() {
    var b = Bb;
    b = sb(b);
    var c;
    !(c = !z(w.setImmediate)) && (c = w.Window && w.Window.prototype) && (c = -1 == Wa.indexOf("Edge") && w.Window.prototype.setImmediate == w.setImmediate);
    c ? (qb || (qb = rb()), qb(b)) : w.setImmediate(b)
  }
}
var zb = !1,
  Ab = new tb;

function Bb() {
  for (var a; a = Ab.remove();) {
    try {
      a.a.call(a.b)
    } catch (b) {
      pb(b)
    }
    Ra(vb, a)
  }
  zb = !1
};

function Cb(a) {
  if (!a) return !1;
  try {
    return !!a.$goog_Thenable
  } catch (b) {
    return !1
  }
};

function D(a) {
  this.a = 0;
  this.o = void 0;
  this.j = this.b = this.g = null;
  this.l = this.B = !1;
  if (a != x) try {
    var b = this;
    a.call(void 0, function(c) {
      Db(b, 2, c)
    }, function(c) {
      Db(b, 3, c)
    })
  } catch (c) {
    Db(this, 3, c)
  }
}

function Eb() {
  this.next = this.j = this.b = this.l = this.a = null;
  this.g = !1
}
Eb.prototype.reset = function() {
  this.j = this.b = this.l = this.a = null;
  this.g = !1
};
var Fb = new Qa(function() {
  return new Eb
}, function(a) {
  a.reset()
});

function Gb(a, b, c) {
  var d = Fb.get();
  d.l = a;
  d.b = b;
  d.j = c;
  return d
}

function Hb(a) {
  if (a instanceof D) return a;
  var b = new D(x);
  Db(b, 2, a);
  return b
}

function Ib(a, b, c) {
  Jb(a, b, c, null) || wb(Aa(b, a))
}

function Kb() {
  var a = [Lb(), Mb()];
  return new D(function(b, c) {
    var d = a.length,
      e = [];
    if (d)
      for (var f = function(l, p) {
          d--;
          e[l] = p;
          0 == d && b(e)
        }, h = function(l) {
          c(l)
        }, g = 0, k; g < a.length; g++) k = a[g], Ib(k, Aa(f, g), h);
    else b(e)
  })
}

function Nb() {
  var a, b = new D(function(c) {
    a = c
  });
  return new Ob(b, a)
}
D.prototype.then = function(a, b, c) {
  return Pb(this, z(a) ? a : null, z(b) ? b : null, c)
};
D.prototype.$goog_Thenable = !0;

function Qb(a, b) {
  b = Gb(b, b, void 0);
  b.g = !0;
  Rb(a, b);
  return a
}

function Sb(a, b) {
  return Pb(a, null, b, void 0)
}
D.prototype.cancel = function(a) {
  if (0 == this.a) {
    var b = new Tb(a);
    wb(function() {
      Ub(this, b)
    }, this)
  }
};

function Ub(a, b) {
  if (0 == a.a)
    if (a.g) {
      var c = a.g;
      if (c.b) {
        for (var d = 0, e = null, f = null, h = c.b; h && (h.g || (d++, h.a == a && (e = h), !(e && 1 < d))); h = h.next) e || (f = h);
        e && (0 == c.a && 1 == d ? Ub(c, b) : (f ? (d = f, d.next == c.j && (c.j = d), d.next = d.next.next) : Vb(c), Wb(c, e, 3, b)))
      }
      a.g = null
    } else Db(a, 3, b)
}

function Rb(a, b) {
  a.b || 2 != a.a && 3 != a.a || Xb(a);
  a.j ? a.j.next = b : a.b = b;
  a.j = b
}

function Pb(a, b, c, d) {
  var e = Gb(null, null, null);
  e.a = new D(function(f, h) {
    e.l = b ? function(g) {
      try {
        var k = b.call(d, g);
        f(k)
      } catch (l) {
        h(l)
      }
    } : f;
    e.b = c ? function(g) {
      try {
        var k = c.call(d, g);
        void 0 === k && g instanceof Tb ? h(g) : f(k)
      } catch (l) {
        h(l)
      }
    } : h
  });
  e.a.g = a;
  Rb(a, e);
  return e.a
}
D.prototype.A = function(a) {
  this.a = 0;
  Db(this, 2, a)
};
D.prototype.C = function(a) {
  this.a = 0;
  Db(this, 3, a)
};

function Db(a, b, c) {
  0 == a.a && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.a = 1, Jb(c, a.A, a.C, a) || (a.o = c, a.a = b, a.g = null, Xb(a), 3 != b || c instanceof Tb || Yb(a, c)))
}

function Jb(a, b, c, d) {
  if (a instanceof D) return Rb(a, Gb(b || x, c || null, d)), !0;
  if (Cb(a)) return a.then(b, c, d), !0;
  if (va(a)) try {
    var e = a.then;
    if (z(e)) return Zb(a, e, b, c, d), !0
  } catch (f) {
    return c.call(d, f), !0
  }
  return !1
}

function Zb(a, b, c, d, e) {
  function f(k) {
    g || (g = !0, d.call(e, k))
  }

  function h(k) {
    g || (g = !0, c.call(e, k))
  }
  var g = !1;
  try {
    b.call(a, h, f)
  } catch (k) {
    f(k)
  }
}

function Xb(a) {
  a.B || (a.B = !0, wb(a.v, a))
}

function Vb(a) {
  var b = null;
  a.b && (b = a.b, a.b = b.next, b.next = null);
  a.b || (a.j = null);
  return b
}
D.prototype.v = function() {
  for (var a; a = Vb(this);) Wb(this, a, this.a, this.o);
  this.B = !1
};

function Wb(a, b, c, d) {
  if (3 == c && b.b && !b.g)
    for (; a && a.l; a = a.g) a.l = !1;
  if (b.a) b.a.g = null, $b(b, c, d);
  else try {
    b.g ? b.l.call(b.j) : $b(b, c, d)
  } catch (e) {
    ac.call(null, e)
  }
  Ra(Fb, b)
}

function $b(a, b, c) {
  2 == b ? a.l.call(a.j, c) : a.b && a.b.call(a.j, c)
}

function Yb(a, b) {
  a.l = !0;
  wb(function() {
    a.l && ac.call(null, b)
  })
}
var ac = pb;

function Tb(a) {
  C.call(this, a)
}
B(Tb, C);
Tb.prototype.name = "cancel";

function Ob(a, b) {
  this.b = a;
  this.a = b
};

function bc() {
  return cc(chrome.storage.local, ["offlineOptedIn"]).then(function(a) {
    a = a.offlineOptedIn;
    switch (a) {
      case void 0:
        return "unknown";
      case !0:
        return "opted_in";
      case !1:
        return "opted_out";
      default:
        throw Error("Cannot handle opt in value " + a);
    }
  })
}

function Lb() {
  return cc(chrome.storage.managed, ["allowedDocsOfflineDomains"]).then(function(a) {
    return a && a.allowedDocsOfflineDomains ? a.allowedDocsOfflineDomains : []
  })
}

function Mb() {
  return cc(chrome.storage.managed, ["autoEnabledDocsOfflineDomains"]).then(function(a) {
    return a && a.autoEnabledDocsOfflineDomains ? a.autoEnabledDocsOfflineDomains : []
  })
}

function cc(a, b) {
  return new D(function(c, d) {
    a.get(b, function(e) {
      chrome.runtime.lastError ? d(chrome.runtime.lastError) : c(e)
    })
  })
}

function dc(a) {
  return new D(function(b, c) {
    chrome.storage.local.set(a, function() {
      chrome.runtime.lastError ? c(chrome.runtime.lastError) : b()
    })
  })
};

function ec(a) {
  var b = sa("window.location.href");
  null == a && (a = 'Unknown Error of type "null/undefined"');
  if ("string" === typeof a) return {
    message: a,
    name: "Unknown error",
    lineNumber: "Not available",
    fileName: b,
    stack: "Not available"
  };
  var c = !1;
  try {
    var d = a.lineNumber || a.line || "Not available"
  } catch (f) {
    d = "Not available", c = !0
  }
  try {
    var e = a.fileName || a.filename || a.sourceURL || w.$googDebugFname || b
  } catch (f) {
    e = "Not available", c = !0
  }
  return !c && a.lineNumber && a.fileName && a.stack && a.message && a.name ? a : (b = a.message, null == b && (b =
    a.constructor && a.constructor instanceof Function ? 'Unknown Error of type "' + (a.constructor.name ? a.constructor.name : fc(a.constructor)) + '"' : "Unknown Error of unknown type"), {
    message: b,
    name: a.name || "UnknownError",
    lineNumber: d,
    fileName: e,
    stack: a.stack || "Not available"
  })
}

function gc(a, b) {
  a instanceof Error || (a = Error(a), Error.captureStackTrace && Error.captureStackTrace(a, gc));
  a.stack || (a.stack = hc(gc));
  if (b) {
    for (var c = 0; a["message" + c];) ++c;
    a["message" + c] = String(b)
  }
  return a
}

function hc(a) {
  var b = Error();
  if (Error.captureStackTrace) Error.captureStackTrace(b, a || hc), b = String(b.stack);
  else {
    try {
      throw b;
    } catch (c) {
      b = c
    }
    b = (b = b.stack) ? String(b) : null
  }
  b || (b = ic(a || arguments.callee.caller, []));
  return b
}

function ic(a, b) {
  var c = [];
  if (0 <= Ia(b, a)) c.push("[...circular reference...]");
  else if (a && 50 > b.length) {
    c.push(fc(a) + "(");
    for (var d = a.arguments, e = 0; d && e < d.length; e++) {
      0 < e && c.push(", ");
      var f = d[e];
      switch (typeof f) {
        case "object":
          f = f ? "object" : "null";
          break;
        case "string":
          break;
        case "number":
          f = String(f);
          break;
        case "boolean":
          f = f ? "true" : "false";
          break;
        case "function":
          f = (f = fc(f)) ? f : "[fn]";
          break;
        default:
          f = typeof f
      }
      40 < f.length && (f = f.substr(0, 40) + "...");
      c.push(f)
    }
    b.push(a);
    c.push(")\n");
    try {
      c.push(ic(a.caller, b))
    } catch (h) {
      c.push("[exception trying to get caller]\n")
    }
  } else a ?
    c.push("[...long stack...]") : c.push("[end]");
  return c.join("")
}

function fc(a) {
  if (jc[a]) return jc[a];
  a = String(a);
  if (!jc[a]) {
    var b = /function\s+([^\(]+)/m.exec(a);
    jc[a] = b ? b[1] : "[Anonymous]"
  }
  return jc[a]
}
var jc = {};

function kc() {
  this.a = null
}

function lc(a, b) {
  this.name = a;
  this.value = b
}
lc.prototype.toString = function() {
  return this.name
};
var mc = new lc("SEVERE", 1E3),
  nc = new lc("WARNING", 900),
  oc = new lc("CONFIG", 700);
kc.prototype.getChildren = function() {
  this.a || (this.a = {});
  return this.a
};
kc.prototype.log = m();
var pc = null;
var qc = "StopIteration" in w ? w.StopIteration : {
  message: "StopIteration",
  stack: ""
};

function rc() {}
rc.prototype.next = function() {
  throw qc;
};
rc.prototype.T = function() {
  return this
};

function sc(a) {
  if (a instanceof rc) return a;
  if ("function" == typeof a.T) return a.T(!1);
  if (ua(a)) {
    var b = 0,
      c = new rc;
    c.next = function() {
      for (;;) {
        if (b >= a.length) throw qc;
        if (b in a) return a[b++];
        b++
      }
    };
    return c
  }
  throw Error("Not implemented");
}

function tc(a, b, c) {
  if (ua(a)) try {
    Ja(a, b, c)
  } catch (d) {
    if (d !== qc) throw d;
  } else {
    a = sc(a);
    try {
      for (;;) b.call(c, a.next(), void 0, a)
    } catch (d) {
      if (d !== qc) throw d;
    }
  }
};

function E(a, b) {
  this.b = {};
  this.a = [];
  this.j = this.g = 0;
  var c = arguments.length;
  if (1 < c) {
    if (c % 2) throw Error("Uneven number of arguments");
    for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
  } else if (a)
    if (a instanceof E)
      for (c = a.H(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
    else
      for (d in a) this.set(d, a[d])
}
n = E.prototype;
n.J = function() {
  uc(this);
  for (var a = [], b = 0; b < this.a.length; b++) a.push(this.b[this.a[b]]);
  return a
};
n.H = function() {
  uc(this);
  return this.a.concat()
};
n.clear = function() {
  this.b = {};
  this.j = this.g = this.a.length = 0
};
n.remove = function(a) {
  return F(this.b, a) ? (delete this.b[a], this.g--, this.j++, this.a.length > 2 * this.g && uc(this), !0) : !1
};

function uc(a) {
  if (a.g != a.a.length) {
    for (var b = 0, c = 0; b < a.a.length;) {
      var d = a.a[b];
      F(a.b, d) && (a.a[c++] = d);
      b++
    }
    a.a.length = c
  }
  if (a.g != a.a.length) {
    var e = {};
    for (c = b = 0; b < a.a.length;) d = a.a[b], F(e, d) || (a.a[c++] = d, e[d] = 1), b++;
    a.a.length = c
  }
}
n.get = function(a, b) {
  return F(this.b, a) ? this.b[a] : b
};
n.set = function(a, b) {
  F(this.b, a) || (this.g++, this.a.push(a), this.j++);
  this.b[a] = b
};
n.forEach = function(a, b) {
  for (var c = this.H(), d = 0; d < c.length; d++) {
    var e = c[d],
      f = this.get(e);
    a.call(b, f, e, this)
  }
};
n.T = function(a) {
  uc(this);
  var b = 0,
    c = this.j,
    d = this,
    e = new rc;
  e.next = function() {
    if (c != d.j) throw Error("The map has changed since the iterator was created");
    if (b >= d.a.length) throw qc;
    var f = d.a[b++];
    return a ? f : d.b[f]
  };
  return e
};

function F(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
};

function G() {
  this.j = this.j;
  this.B = this.B
}
G.prototype.j = !1;
G.prototype.P = function() {
  this.j || (this.j = !0, this.D())
};

function vc(a, b) {
  a.j ? b() : (a.B || (a.B = []), a.B.push(b))
}
G.prototype.D = function() {
  if (this.B)
    for (; this.B.length;) this.B.shift()()
};

function wc(a) {
  a && "function" == typeof a.P && a.P()
}

function xc(a) {
  for (var b = 0, c = arguments.length; b < c; ++b) {
    var d = arguments[b];
    ua(d) ? xc.apply(null, d) : wc(d)
  }
};

function yc(a, b) {
  G.call(this);
  this.g = null;
  this.l = b;
  this.a = [];
  if (a > this.l) throw Error("[goog.structs.SimplePool] Initial cannot be greater than max");
  for (b = 0; b < a; b++) this.a.push(this.b())
}
B(yc, G);

function zc(a, b) {
  a.g = b
}

function Ac(a, b) {
  a.a.length < a.l ? a.a.push(b) : Bc(b)
}
yc.prototype.b = function() {
  return this.g ? this.g() : {}
};

function Bc(a) {
  if (va(a))
    if (z(a.P)) a.P();
    else
      for (var b in a) delete a[b]
}
yc.prototype.D = function() {
  yc.K.D.call(this);
  for (var a = this.a; a.length;) Bc(a.pop());
  delete this.a
};

function Cc() {
  this.a = [];
  this.b = new E;
  this.F = this.G = this.I = this.o = 0;
  this.g = new E;
  this.l = this.C = 0;
  this.M = 1;
  this.j = new yc(0, 4E3);
  this.j.b = function() {
    return new Dc
  };
  this.v = new yc(0, 50);
  this.v.b = function() {
    return new Ec
  };
  var a = this;
  this.B = new yc(0, 2E3);
  zc(this.B, function() {
    return a.M++
  });
  this.A = {}
}

function Ec() {
  this.V = this.time = this.count = 0
}
Ec.prototype.toString = function() {
  var a = [];
  a.push(this.type, " ", this.count, " (", Math.round(10 * this.time) / 10, " ms)");
  this.V && a.push(" [VarAlloc = ", this.V, "]");
  return a.join("")
};

function Dc() {}

function Fc(a, b, c, d) {
  var e = []; - 1 == c ? e.push("    ") : e.push(Gc(a.eventTime - c));
  e.push(" ", Hc(a.eventTime - b));
  0 == a.a ? e.push(" Start        ") : 1 == a.a ? (e.push(" Done "), e.push(Gc(a.g - a.startTime), " ms ")) : e.push(" Comment      ");
  e.push(d, a);
  0 < a.b && e.push("[VarAlloc ", a.b, "] ");
  return e.join("")
}
Dc.prototype.toString = function() {
  return null == this.type ? this.comment : "[" + this.type + "] " + this.comment
};
var Ic = {
  ua: !0
};

function Jc(a) {
  a.A.stop && tc(a.b, function(b) {
    this.A.stop(b.id, Ic)
  }, a);
  a.b.clear()
}
Cc.prototype.reset = function() {
  Jc(this);
  for (var a = 0; a < this.a.length; a++) {
    var b = this.a[a];
    b.id ? F(this.b.b, b.id) || (Ac(this.B, b.id), Ac(this.j, b)) : Ac(this.j, b)
  }
  this.a.length = 0;
  this.o = Ba();
  this.l = this.C = this.F = this.G = this.I = 0;
  a = this.g.H();
  for (b = 0; b < a.length; b++) {
    var c = this.g.get(a[b]);
    c.count = 0;
    c.time = 0;
    c.V = 0;
    Ac(this.v, c)
  }
  this.g.clear()
};
Cc.prototype.toString = function() {
  for (var a = [], b = -1, c = [], d = 0; d < this.a.length; d++) {
    var e = this.a[d];
    1 == e.a && c.pop();
    a.push(" ", Fc(e, this.o, b, c.join("")));
    b = e.eventTime;
    a.push("\n");
    0 == e.a && c.push("|  ")
  }
  if (0 != this.b.g) {
    var f = Ba();
    a.push(" Unstopped timers:\n");
    tc(this.b, function(h) {
      a.push("  ", h, " (", f - h.startTime, " ms, started at ", Hc(h.startTime), ")\n")
    })
  }
  b = this.g.H();
  for (d = 0; d < b.length; d++) c = this.g.get(b[d]), 1 < c.count && a.push(" TOTAL ", c, "\n");
  a.push("Total tracers created ", this.C, "\n", "Total comments created ",
    this.l, "\n", "Overhead start: ", this.I, " ms\n", "Overhead end: ", this.G, " ms\n", "Overhead comment: ", this.F, " ms\n");
  return a.join("")
};

function Gc(a) {
  a = Math.round(a);
  var b = "";
  1E3 > a && (b = " ");
  100 > a && (b = "  ");
  10 > a && (b = "   ");
  return b + a
}

function Hc(a) {
  a = Math.round(a);
  return String(100 + a / 1E3 % 60).substring(1, 3) + "." + String(1E3 + a % 1E3).substring(1, 4)
}
new Cc;

function Kc(a) {
  G.call(this);
  this.b = a
}
B(Kc, G);
Kc.prototype.a = function(a) {
  return Lc(this, a)
};

function Mc(a, b) {
  return (b ? "__wrapper_" : "__protected_") + (a[wa] || (a[wa] = ++xa)) + "__"
}

function Lc(a, b) {
  var c = Mc(a, !0);
  b[c] || ((b[c] = Nc(a, b))[Mc(a, !1)] = b);
  return b[c]
}

function Nc(a, b) {
  function c() {
    if (a.j) return b.apply(this, arguments);
    try {
      return b.apply(this, arguments)
    } catch (e) {
      var d = e;
      if (!(d && "object" === typeof d && "string" === typeof d.message && 0 == d.message.indexOf("Error in protected function: ") || "string" === typeof d && 0 == d.indexOf("Error in protected function: "))) throw a.b(d), new Oc(d);
    } finally {}
  }
  c[Mc(a, !1)] = b;
  return c
}

function Pc(a, b) {
  var c = sa("window"),
    d = c[b];
  c[b] = function(e, f) {
    "string" === typeof e && (e = Aa(Ca, e));
    arguments[0] = e = Lc(a, e);
    if (d.apply) return d.apply(this, arguments);
    var h = e;
    if (2 < arguments.length) {
      var g = Array.prototype.slice.call(arguments, 2);
      h = function() {
        e.apply(this, g)
      }
    }
    return d(h, f)
  };
  c[b][Mc(a, !1)] = d
}
Kc.prototype.D = function() {
  var a = sa("window");
  var b = a.setTimeout;
  b = b[Mc(this, !1)] || b;
  a.setTimeout = b;
  b = a.setInterval;
  b = b[Mc(this, !1)] || b;
  a.setInterval = b;
  Kc.K.D.call(this)
};

function Oc(a) {
  C.call(this, "Error in protected function: " + (a && a.message ? String(a.message) : String(a)));
  (a = (this.cause = a) && a.stack) && "string" === typeof a && (this.stack = a)
}
B(Oc, C);

function H(a, b) {
  this.type = a;
  this.a = this.target = b;
  this.ca = !0
}
H.prototype.g = function() {
  this.ca = !1
};
var Qc = function() {
  if (!w.addEventListener || !Object.defineProperty) return !1;
  var a = !1,
    b = Object.defineProperty({}, "passive", {
      get: function() {
        a = !0
      }
    });
  try {
    w.addEventListener("test", x, b), w.removeEventListener("test", x, b)
  } catch (c) {}
  return a
}();

function Rc(a, b) {
  H.call(this, a ? a.type : "");
  this.relatedTarget = this.a = this.target = null;
  this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
  this.key = "";
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.pointerId = 0;
  this.pointerType = "";
  this.b = null;
  if (a) {
    var c = this.type = a.type,
      d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.a = b;
    b = a.relatedTarget;
    b || ("mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement));
    this.relatedTarget =
      b;
    d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
    this.button = a.button;
    this.key = a.key || "";
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.pointerId = a.pointerId || 0;
    this.pointerType = "string" ===
      typeof a.pointerType ? a.pointerType : Sc[a.pointerType] || "";
    this.b = a;
    a.defaultPrevented && this.g()
  }
}
B(Rc, H);
var Sc = {
  2: "touch",
  3: "pen",
  4: "mouse"
};
Rc.prototype.g = function() {
  Rc.K.g.call(this);
  var a = this.b;
  a.preventDefault ? a.preventDefault() : a.returnValue = !1
};
var Tc = "closure_listenable_" + (1E6 * Math.random() | 0),
  Uc = 0;

function Vc(a, b, c, d, e) {
  this.listener = a;
  this.proxy = null;
  this.src = b;
  this.type = c;
  this.capture = !!d;
  this.S = e;
  this.key = ++Uc;
  this.removed = this.R = !1
}

function Wc(a) {
  a.removed = !0;
  a.listener = null;
  a.proxy = null;
  a.src = null;
  a.S = null
};

function Xc(a) {
  this.src = a;
  this.a = {};
  this.b = 0
}
Xc.prototype.add = function(a, b, c, d, e) {
  var f = a.toString();
  a = this.a[f];
  a || (a = this.a[f] = [], this.b++);
  var h = Yc(a, b, d, e); - 1 < h ? (b = a[h], c || (b.R = !1)) : (b = new Vc(b, this.src, f, !!d, e), b.R = c, a.push(b));
  return b
};
Xc.prototype.remove = function(a, b, c, d) {
  a = a.toString();
  if (!(a in this.a)) return !1;
  var e = this.a[a];
  b = Yc(e, b, c, d);
  return -1 < b ? (Wc(e[b]), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.a[a], this.b--), !0) : !1
};

function Zc(a, b) {
  var c = b.type;
  c in a.a && Na(a.a[c], b) && (Wc(b), 0 == a.a[c].length && (delete a.a[c], a.b--))
}
Xc.prototype.removeAll = function(a) {
  a = a && a.toString();
  var b = 0,
    c;
  for (c in this.a)
    if (!a || c == a) {
      for (var d = this.a[c], e = 0; e < d.length; e++) ++b, Wc(d[e]);
      delete this.a[c];
      this.b--
    } return b
};

function Yc(a, b, c, d) {
  for (var e = 0; e < a.length; ++e) {
    var f = a[e];
    if (!f.removed && f.listener == b && f.capture == !!c && f.S == d) return e
  }
  return -1
};
var $c = "closure_lm_" + (1E6 * Math.random() | 0),
  ad = {},
  bd = 0;

function cd(a, b, c, d, e) {
  if (d && d.once) return dd(a, b, c, d, e);
  if (y(b)) {
    for (var f = 0; f < b.length; f++) cd(a, b[f], c, d, e);
    return null
  }
  c = ed(c);
  return a && a[Tc] ? a.listen(b, c, va(d) ? !!d.capture : !!d, e) : fd(a, b, c, !1, d, e)
}

function fd(a, b, c, d, e, f) {
  if (!b) throw Error("Invalid event type");
  var h = va(e) ? !!e.capture : !!e,
    g = gd(a);
  g || (a[$c] = g = new Xc(a));
  c = g.add(b, c, d, h, f);
  if (c.proxy) return c;
  d = hd();
  c.proxy = d;
  d.src = a;
  d.listener = c;
  if (a.addEventListener) Qc || (e = h), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
  else if (a.attachEvent) a.attachEvent(id(b.toString()), d);
  else if (a.addListener && a.removeListener) a.addListener(d);
  else throw Error("addEventListener and attachEvent are unavailable.");
  bd++;
  return c
}

function hd() {
  function a(c) {
    return b.call(a.src, a.listener, c)
  }
  var b = jd;
  return a
}

function dd(a, b, c, d, e) {
  if (y(b)) {
    for (var f = 0; f < b.length; f++) dd(a, b[f], c, d, e);
    return null
  }
  c = ed(c);
  return a && a[Tc] ? a.b.add(String(b), c, !0, va(d) ? !!d.capture : !!d, e) : fd(a, b, c, !0, d, e)
}

function kd(a, b, c, d, e) {
  if (y(b))
    for (var f = 0; f < b.length; f++) kd(a, b[f], c, d, e);
  else(d = va(d) ? !!d.capture : !!d, c = ed(c), a && a[Tc]) ? a.b.remove(String(b), c, d, e) : a && (a = gd(a)) && (b = a.a[b.toString()], a = -1, b && (a = Yc(b, c, d, e)), (c = -1 < a ? b[a] : null) && ld(c))
}

function ld(a) {
  if ("number" !== typeof a && a && !a.removed) {
    var b = a.src;
    if (b && b[Tc]) Zc(b.b, a);
    else {
      var c = a.type,
        d = a.proxy;
      b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(id(c), d) : b.addListener && b.removeListener && b.removeListener(d);
      bd--;
      (c = gd(b)) ? (Zc(c, a), 0 == c.b && (c.src = null, b[$c] = null)) : Wc(a)
    }
  }
}

function id(a) {
  return a in ad ? ad[a] : ad[a] = "on" + a
}

function jd(a, b) {
  if (a.removed) a = !0;
  else {
    b = new Rc(b, this);
    var c = a.listener,
      d = a.S || a.src;
    a.R && ld(a);
    a = c.call(d, b)
  }
  return a
}

function gd(a) {
  a = a[$c];
  return a instanceof Xc ? a : null
}
var md = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

function ed(a) {
  if (z(a)) return a;
  a[md] || (a[md] = function(b) {
    return a.handleEvent(b)
  });
  return a[md]
}
Va(function(a) {
  jd = a(jd)
});

function I() {
  G.call(this);
  this.b = new Xc(this);
  this.ea = this;
  this.M = null
}
B(I, G);
I.prototype[Tc] = !0;
I.prototype.removeEventListener = function(a, b, c, d) {
  kd(this, a, b, c, d)
};

function J(a, b) {
  var c = a.M;
  if (c) {
    var d = [];
    for (var e = 1; c; c = c.M) d.push(c), ++e
  }
  a = a.ea;
  c = b.type || b;
  "string" === typeof b ? b = new H(b, a) : b instanceof H ? b.target = b.target || a : (e = b, b = new H(c, a), Ha(b, e));
  e = !0;
  if (d)
    for (var f = d.length - 1; 0 <= f; f--) {
      var h = b.a = d[f];
      e = nd(h, c, !0, b) && e
    }
  h = b.a = a;
  e = nd(h, c, !0, b) && e;
  e = nd(h, c, !1, b) && e;
  if (d)
    for (f = 0; f < d.length; f++) h = b.a = d[f], e = nd(h, c, !1, b) && e
}
I.prototype.D = function() {
  I.K.D.call(this);
  this.b && this.b.removeAll(void 0);
  this.M = null
};
I.prototype.listen = function(a, b, c, d) {
  return this.b.add(String(a), b, !1, c, d)
};

function nd(a, b, c, d) {
  b = a.b.a[String(b)];
  if (!b) return !0;
  b = b.concat();
  for (var e = !0, f = 0; f < b.length; ++f) {
    var h = b[f];
    if (h && !h.removed && h.capture == c) {
      var g = h.listener,
        k = h.S || h.src;
      h.R && Zc(a.b, h);
      e = !1 !== g.call(k, d) && e
    }
  }
  return e && 0 != d.ca
};

function od() {}
od.prototype.a = null;

function pd(a) {
  var b;
  (b = a.a) || (b = {}, qd(a) && (b[0] = !0, b[1] = !0), b = a.a = b);
  return b
};
var rd;

function sd() {}
B(sd, od);

function td(a) {
  return (a = qd(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}

function qd(a) {
  if (!a.b && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.b = d
      } catch (e) {}
    }
    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
  }
  return a.b
}
rd = new sd;

function ud(a) {
  if (a.J && "function" == typeof a.J) return a.J();
  if ("string" === typeof a) return a.split("");
  if (ua(a)) {
    for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
    return b
  }
  b = [];
  c = 0;
  for (d in a) b[c++] = a[d];
  return b
}

function vd(a, b) {
  if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);
  else if (ua(a) || "string" === typeof a) Ja(a, b, void 0);
  else {
    if (a.H && "function" == typeof a.H) var c = a.H();
    else if (a.J && "function" == typeof a.J) c = void 0;
    else if (ua(a) || "string" === typeof a) {
      c = [];
      for (var d = a.length, e = 0; e < d; e++) c.push(e)
    } else
      for (e in c = [], d = 0, a) c[d++] = e;
    d = ud(a);
    e = d.length;
    for (var f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a)
  }
};

function wd(a, b, c) {
  if (z(a)) c && (a = A(a, c));
  else if (a && "function" == typeof a.handleEvent) a = A(a.handleEvent, a);
  else throw Error("Invalid listener argument");
  return 2147483647 < Number(b) ? -1 : w.setTimeout(a, b || 0)
};
var xd = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

function yd(a, b) {
  if (a) {
    a = a.split("&");
    for (var c = 0; c < a.length; c++) {
      var d = a[c].indexOf("="),
        e = null;
      if (0 <= d) {
        var f = a[c].substring(0, d);
        e = a[c].substring(d + 1)
      } else f = a[c];
      b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "")
    }
  }
}

function zd(a, b) {
  if (!b) return a;
  var c = a.indexOf("#");
  0 > c && (c = a.length);
  var d = a.indexOf("?");
  if (0 > d || d > c) {
    d = c;
    var e = ""
  } else e = a.substring(d + 1, c);
  a = [a.substr(0, d), e, a.substr(c)];
  c = a[1];
  a[1] = b ? c ? c + "&" + b : b : c;
  return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
}

function Ad(a, b, c) {
  if (y(b))
    for (var d = 0; d < b.length; d++) Ad(a, String(b[d]), c);
  else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
}

function Bd(a, b) {
  var c = [];
  for (b = b || 0; b < a.length; b += 2) Ad(a[b], a[b + 1], c);
  return c.join("&")
}

function Cd(a) {
  var b = [],
    c;
  for (c in a) Ad(c, a[c], b);
  return b.join("&")
}

function Dd(a, b) {
  var c = 2 == arguments.length ? Bd(arguments[1], 0) : Bd(arguments, 1);
  return zd(a, c)
};

function Ed(a) {
  I.call(this);
  this.headers = new E;
  this.C = a || null;
  this.g = !1;
  this.A = this.a = null;
  this.I = "";
  this.l = this.G = this.o = this.F = !1;
  this.N = 0;
  this.v = null;
  this.X = "";
  this.O = this.Y = !1
}
B(Ed, I);
var Fd = /^https?$/i,
  Gd = ["POST", "PUT"],
  Hd = [];
n = Ed.prototype;
n.ga = function() {
  this.P();
  Na(Hd, this)
};
n.send = function(a, b, c, d) {
  if (this.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.I + "; newUri=" + a);
  b = b ? b.toUpperCase() : "GET";
  this.I = a;
  this.F = !1;
  this.g = !0;
  this.a = this.C ? td(this.C) : td(rd);
  this.A = this.C ? pd(this.C) : pd(rd);
  this.a.onreadystatechange = A(this.aa, this);
  try {
    this.G = !0, this.a.open(b, String(a), !0), this.G = !1
  } catch (f) {
    Id(this);
    return
  }
  a = c || "";
  var e = new E(this.headers);
  d && vd(d, function(f, h) {
    e.set(h, f)
  });
  d = La(e.H());
  c = w.FormData && a instanceof w.FormData;
  !(0 <= Ia(Gd, b)) || d ||
    c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  e.forEach(function(f, h) {
    this.a.setRequestHeader(h, f)
  }, this);
  this.X && (this.a.responseType = this.X);
  "withCredentials" in this.a && this.a.withCredentials !== this.Y && (this.a.withCredentials = this.Y);
  try {
    Jd(this), 0 < this.N && (this.O = !1, this.v = wd(this.da, this.N, this)), this.o = !0, this.a.send(a), this.o = !1
  } catch (f) {
    Id(this)
  }
};

function Ma(a) {
  return "content-type" == a.toLowerCase()
}
n.da = function() {
  "undefined" != typeof ra && this.a && (J(this, "timeout"), this.abort(8))
};

function Id(a) {
  a.g = !1;
  a.a && (a.l = !0, a.a.abort(), a.l = !1);
  Kd(a);
  Ld(a)
}

function Kd(a) {
  a.F || (a.F = !0, J(a, "complete"), J(a, "error"))
}
n.abort = function() {
  this.a && this.g && (this.g = !1, this.l = !0, this.a.abort(), this.l = !1, J(this, "complete"), J(this, "abort"), Ld(this))
};
n.D = function() {
  this.a && (this.g && (this.g = !1, this.l = !0, this.a.abort(), this.l = !1), Ld(this, !0));
  Ed.K.D.call(this)
};
n.aa = function() {
  this.j || (this.G || this.o || this.l ? Md(this) : this.U())
};
n.U = function() {
  Md(this)
};

function Md(a) {
  if (a.g && "undefined" != typeof ra && (!a.A[1] || 4 != (a.a ? a.a.readyState : 0) || 2 != Nd(a)))
    if (a.o && 4 == (a.a ? a.a.readyState : 0)) wd(a.aa, 0, a);
    else if (J(a, "readystatechange"), 4 == (a.a ? a.a.readyState : 0)) {
    a.g = !1;
    try {
      Od(a) ? (J(a, "complete"), J(a, "success")) : Kd(a)
    } finally {
      Ld(a)
    }
  }
}

function Ld(a, b) {
  if (a.a) {
    Jd(a);
    var c = a.a,
      d = a.A[0] ? x : null;
    a.a = null;
    a.A = null;
    b || J(a, "ready");
    try {
      c.onreadystatechange = d
    } catch (e) {}
  }
}

function Jd(a) {
  a.a && a.O && (a.a.ontimeout = null);
  a.v && (w.clearTimeout(a.v), a.v = null)
}

function Od(a) {
  var b = Nd(a);
  a: switch (b) {
    case 200:
    case 201:
    case 202:
    case 204:
    case 206:
    case 304:
    case 1223:
      var c = !0;
      break a;
    default:
      c = !1
  }
  if (!c) {
    if (b = 0 === b) a = String(a.I).match(xd)[1] || null, !a && w.self && w.self.location && (a = w.self.location.protocol, a = a.substr(0, a.length - 1)), b = !Fd.test(a ? a.toLowerCase() : "");
    c = b
  }
  return c
}

function Nd(a) {
  try {
    return 2 < (a.a ? a.a.readyState : 0) ? a.a.status : -1
  } catch (b) {
    return -1
  }
}
Va(function(a) {
  Ed.prototype.U = a(Ed.prototype.U)
});

function Pd(a, b, c) {
  I.call(this);
  this.o = b || null;
  this.l = {};
  this.v = Qd;
  this.C = a;
  if (!c) {
    this.a = null;
    this.a = new Kc(A(this.g, this));
    Pc(this.a, "setTimeout");
    Pc(this.a, "setInterval");
    a = this.a;
    b = sa("window");
    c = ["requestAnimationFrame", "mozRequestAnimationFrame", "webkitAnimationFrame", "msRequestAnimationFrame"];
    for (var d = 0; d < c.length; d++) {
      var e = c[d];
      c[d] in b && Pc(a, e)
    }
    a = this.a;
    Ua = !0;
    b = A(a.a, a);
    for (c = 0; c < Sa.length; c++) Sa[c](b);
    Ta.push(a)
  }
}
B(Pd, I);

function Rd(a, b) {
  H.call(this, "a");
  this.error = a;
  this.b = b
}
B(Rd, H);

function Qd(a, b, c, d) {
  var e = new Ed;
  Hd.push(e);
  e.b.add("ready", e.ga, !0, void 0, void 0);
  e.send(a, b, c, d)
}
Pd.prototype.g = function(a, b) {
  a = a.error || a;
  b = b ? Fa(b) : {};
  a instanceof Error && Ha(b, a.__closure__error__context__984382 || {});
  a = ec(a);
  if (this.o) try {
    this.o(a, b)
  } catch (p) {}
  var c = a.message.substring(0, 1900),
    d = a.stack;
  try {
    var e = Dd(this.C, "script", a.fileName, "error", c, "line", a.lineNumber);
    a: {
      for (var f in this.l) {
        var h = !1;
        break a
      }
      h = !0
    }
    if (!h) {
      h = e;
      var g = Cd(this.l);
      e = zd(h, g)
    }
    g = {};
    g.trace = d;
    if (b)
      for (var k in b) g["context." + k] = b[k];
    var l = Cd(g);
    this.v(e, "POST", l, this.A)
  } catch (p) {}
  try {
    J(this, new Rd(a, b))
  } catch (p) {}
};
Pd.prototype.D = function() {
  wc(this.a);
  Pd.K.D.call(this)
};

function K() {}
K.prototype.j = function() {
  return Sd(this)
};
K.prototype.toString = function() {
  return L(Td(M(this.constructor))) + "@" + L((this.j() >>> 0).toString(16))
};
K.prototype.w = ["java.lang.Object", 0];

function Ud() {}
t(Ud, K);
Ud.prototype.b = function(a) {
  this.a = a;
  Vd(this, a)
};

function Wd(a) {
  Xd(a.a) && (Error.captureStackTrace ? Error.captureStackTrace(N(a.a, Xd, Yd)) : N(a.a, Xd, Yd).stack = Error().stack)
}
Ud.prototype.toString = function() {
  var a = Td(M(this.constructor)),
    b = this.B;
  return null == b ? a : L(a) + ": " + L(b)
};
Ud.prototype.w = ["java.lang.Throwable", 0];

function Vd(a, b) {
  if (b instanceof Object) try {
    b.ra = a, Object.defineProperties(b, {
      cause: {
        get: function() {
          return a.l && a.l.a
        }
      }
    })
  } catch (c) {}
};

function Zd() {}
t(Zd, Ud);
Zd.prototype.w = ["java.lang.Exception", 0];

function $d() {}
t($d, Zd);
$d.prototype.w = ["java.lang.RuntimeException", 0];

function ae(a, b) {
  this.a = a;
  this.b = b
}
t(ae, K);

function Td(a) {
  var b = a.a.prototype.w[0];
  0 != a.b && (3 == a.a.prototype.w[1] ? b = a.a.prototype.w[2] : b = "L" + L(b) + ";");
  a = a.b;
  for (var c = "", d = 0; d < a; d++) c = L(c) + "[";
  return L(c) + L(b)
}
ae.prototype.toString = function() {
  return String(0 == this.b && 1 == this.a.prototype.w[1] ? "interface " : 0 == this.b && 3 == this.a.prototype.w[1] ? "" : "class ") + L(Td(this))
};
ae.prototype.w = ["java.lang.Class", 0];

function M(a, b) {
  var c = b || 0;
  return nb(a.prototype, "$$class/" + c, function() {
    return new ae(a, c)
  })
};

function Sd(a) {
  return a.W || (Object.defineProperties(a, {
    W: {
      value: ++be,
      enumerable: !1
    }
  }), a.W)
}
var be = 0;

function N(a, b, c) {
  if (null != a && !b(a)) throw a = L(Td(ce(a))) + " cannot be cast to " + L(Td(M(c))), b = new de, b.B = a, Wd(b), b.b(Error(b)), b.a;
  return a
};

function de() {}
t(de, $d);
de.prototype.w = ["java.lang.ClassCastException", 0];

function ee() {}
t(ee, $d);
ee.prototype.b = function(a) {
  $d.prototype.b.call(this, "__noinit__" === this.g ? a : this.g)
};
ee.prototype.w = ["java.lang.JsException", 0];

function fe() {}
t(fe, ee);
fe.prototype.w = ["java.lang.NullPointerException", 0];

function ge() {}
t(ge, K);
ge.prototype.w = ["java.lang.Number", 0];

function he() {}
t(he, ge);

function ie(a) {
  if (null == a) throw a = new fe, Wd(a), a.g = "__noinit__", a.b(new TypeError(a)), a.a;
  return N(a, je, he)
}

function je(a) {
  return "number" === typeof a
}
he.prototype.w = ["java.lang.Double", 0];

function ke() {}
t(ke, $d);
ke.prototype.w = ["java.util.NoSuchElementException", 0];

function le() {}
t(le, K);
le.prototype.w = ["java.lang.Boolean", 0];

function me() {}
me.prototype.w = ["<native function>", 1];

function ne() {}
t(ne, K);
ne.prototype.w = ["<native object>", 0];

function ce(a) {
  var b = typeof a;
  if ("number" == b) return M(he);
  if ("boolean" == b) return M(le);
  if ("string" == b) return M(oe);
  if (Array.isArray(a)) return pe(a);
  if (a instanceof K) return M(a.constructor);
  if (a) return M("function" == b ? me : ne);
  throw new TypeError("null.getClass");
};

function pe(a) {
  return (a = a.a) ? M(a.ta, a.sa) : M(K, 1)
};

function qe() {}
t(qe, ge);
qe.prototype.j = function() {
  return 0
};
qe.prototype.toString = function() {
  return "0"
};

function re(a) {
  return a instanceof qe
}
qe.prototype.w = ["java.lang.Integer", 0];

function oe() {}
t(oe, K);

function L(a) {
  if (null == a) a = "null";
  else {
    var b;
    Array.isArray(a) ? b = Td(pe(a)) + "@" + (Sd(a) >>> 0).toString(16) : b = a.toString();
    a = b
  }
  return a
}

function se(a) {
  return "string" === typeof a
}
oe.prototype.w = ["java.lang.String", 0];

function Yd() {}

function Xd(a) {
  return a instanceof Error
}
Yd.prototype.w = ["Error", 0];

function te() {
  this.a = 0
}
t(te, K);
te.prototype.w = ["com.google.gwt.corp.collections.AbstractJsArray$Iter", 0];

function ue() {
  this.a = 0
}
t(ue, te);
ue.prototype.w = ["com.google.gwt.corp.collections.JsArray$Iter", 0];

function ve() {}
t(ve, K);
ve.prototype.w = ["com.google.gwt.corp.collections.JsArray$1", 0];

function we() {}

function xe(a) {
  return a instanceof Object
}
we.prototype.w = ["Object", 0];
var ye;

function ze() {
  ze = m();
  ye = new Ae(null)
};

function Be() {}
t(Be, K);
Be.prototype.get = function() {
  null == this.a && (this.a = w._docs_flag_initialData || {});
  return this.a
};
Be.prototype.w = ["com.google.apps.docs.xplat.flag.FlagServiceHelper", 0];

function Ae(a) {
  this.a = new Be;
  if (null != a) {
    var b = Object.keys(a),
      c = new ve;
    c.a = b;
    b = new ue;
    c = c.a;
    b.a = -1;
    for (b.b = c; b.a + 1 < b.b.length;) {
      c = b;
      if (!(c.a + 1 < c.b.length)) throw a = new ke, Wd(a), a.b(Error(a)), a.a;
      var d = ++c.a;
      d = c = N(c.b[d], se, oe);
      var e = a[c];
      c = N(this.a.get(), xe, we);
      re(e) ? (N(e, re, qe), c[d] = 0) : c[d] = void 0 !== e ? e : null
    }
  }
}
t(Ae, K);
Ae.prototype.clear = function() {
  this.a = new Be
};
Ae.prototype.get = function(a) {
  return N(this.a.get(), xe, we)[a]
};

function Ce(a) {
  var b = (ze(), ye),
    c = N(b.a.get(), xe, we);
  if (!(a in c)) return "";
  a = b.get(a);
  return null == a ? "" : je(a) && (b = N(a, je, he), (Math.max(Math.min(ie(b), 2147483647), -2147483648) | 0) == (Math.max(Math.min(ie(b), 2147483647), -2147483648) | 0)) ? "" + (Math.max(Math.min(ie(b), 2147483647), -2147483648) | 0) : L(a)
}
Ae.prototype.w = ["com.google.apps.docs.xplat.flag.FlagService", 0];

function O() {}
var De = "function" == typeof Uint8Array;

function P(a, b) {
  a.a = null;
  b || (b = []);
  a.o = void 0;
  a.j = -1;
  a.b = b;
  a: {
    if (b = a.b.length) {
      --b;
      var c = a.b[b];
      if (!(null === c || "object" != typeof c || y(c) || De && c instanceof Uint8Array)) {
        a.l = b - a.j;
        a.g = c;
        break a
      }
    }
    a.l = Number.MAX_VALUE
  }
  a.B = {}
}
var Ee = [];

function Q(a, b) {
  if (b < a.l) {
    b += a.j;
    var c = a.b[b];
    return c === Ee ? a.b[b] = [] : c
  }
  if (a.g) return c = a.g[b], c === Ee ? a.g[b] = [] : c
}

function Fe(a, b, c) {
  if (b < a.l) a.b[b + a.j] = c;
  else {
    var d = a.l + a.j;
    a.b[d] || (a.g = a.b[d] = {});
    a.g[b] = c
  }
  return a
}

function Ge(a, b, c) {
  a.a || (a.a = {});
  if (!a.a[c]) {
    var d = Q(a, c);
    d && (a.a[c] = new b(d))
  }
  return a.a[c]
}

function He(a, b, c) {
  a.a || (a.a = {});
  var d = c ? Ie(c) : c;
  a.a[b] = c;
  Fe(a, b, d)
}

function Je(a) {
  if (a.a)
    for (var b in a.a) {
      var c = a.a[b];
      if (y(c))
        for (var d = 0; d < c.length; d++) c[d] && Ie(c[d]);
      else c && Ie(c)
    }
}

function Ie(a) {
  Je(a);
  return a.b
}
O.prototype.toString = function() {
  Je(this);
  return this.b.toString()
};
w.Symbol && w.Symbol.iterator && (ca(), r());
ca();
r();
ca();
r();

function R(a, b) {
  this.b = b;
  for (var c = [], d = !0, e = a.length - 1; 0 <= e; e--) {
    var f = a[e] | 0;
    d && f == b || (c[e] = f, d = !1)
  }
  this.a = c
}
var Ke = {};

function Le(a) {
  return -128 <= a && 128 > a ? nb(Ke, a, function(b) {
    return new R([b | 0], 0 > b ? -1 : 0)
  }) : new R([a | 0], 0 > a ? -1 : 0)
}

function Me(a) {
  if (isNaN(a) || !isFinite(a)) return Ne;
  if (0 > a) return S(Me(-a));
  for (var b = [], c = 1, d = 0; a >= c; d++) b[d] = a / c | 0, c *= 4294967296;
  return new R(b, 0)
}
var Ne = Le(0),
  Pe = Le(1),
  Qe = Le(16777216);

function Re(a) {
  if (-1 == a.b) return -Re(S(a));
  for (var b = 0, c = 1, d = 0; d < a.a.length; d++) {
    var e = T(a, d);
    b += (0 <= e ? e : 4294967296 + e) * c;
    c *= 4294967296
  }
  return b
}
n = R.prototype;
n.toString = function(a) {
  a = a || 10;
  if (2 > a || 36 < a) throw Error("radix out of range: " + a);
  if (U(this)) return "0";
  if (-1 == this.b) return "-" + S(this).toString(a);
  for (var b = Me(Math.pow(a, 6)), c = this, d = "";;) {
    var e = Se(c, b).a;
    c = Te(c, Ue(e, b));
    var f = ((0 < c.a.length ? c.a[0] : c.b) >>> 0).toString(a);
    c = e;
    if (U(c)) return f + d;
    for (; 6 > f.length;) f = "0" + f;
    d = "" + f + d
  }
};

function T(a, b) {
  return 0 > b ? 0 : b < a.a.length ? a.a[b] : a.b
}

function U(a) {
  if (0 != a.b) return !1;
  for (var b = 0; b < a.a.length; b++)
    if (0 != a.a[b]) return !1;
  return !0
}

function Ve(a, b) {
  a = Te(a, b);
  return -1 == a.b ? -1 : U(a) ? 0 : 1
}

function S(a) {
  for (var b = a.a.length, c = [], d = 0; d < b; d++) c[d] = ~a.a[d];
  return (new R(c, ~a.b)).add(Pe)
}
n.abs = function() {
  return -1 == this.b ? S(this) : this
};
n.add = function(a) {
  for (var b = Math.max(this.a.length, a.a.length), c = [], d = 0, e = 0; e <= b; e++) {
    var f = d + (T(this, e) & 65535) + (T(a, e) & 65535),
      h = (f >>> 16) + (T(this, e) >>> 16) + (T(a, e) >>> 16);
    d = h >>> 16;
    f &= 65535;
    h &= 65535;
    c[e] = h << 16 | f
  }
  return new R(c, c[c.length - 1] & -2147483648 ? -1 : 0)
};

function Te(a, b) {
  return a.add(S(b))
}

function Ue(a, b) {
  if (U(a) || U(b)) return Ne;
  if (-1 == a.b) return -1 == b.b ? Ue(S(a), S(b)) : S(Ue(S(a), b));
  if (-1 == b.b) return S(Ue(a, S(b)));
  if (0 > Ve(a, Qe) && 0 > Ve(b, Qe)) return Me(Re(a) * Re(b));
  for (var c = a.a.length + b.a.length, d = [], e = 0; e < 2 * c; e++) d[e] = 0;
  for (e = 0; e < a.a.length; e++)
    for (var f = 0; f < b.a.length; f++) {
      var h = T(a, e) >>> 16,
        g = T(a, e) & 65535,
        k = T(b, f) >>> 16,
        l = T(b, f) & 65535;
      d[2 * e + 2 * f] += g * l;
      We(d, 2 * e + 2 * f);
      d[2 * e + 2 * f + 1] += h * l;
      We(d, 2 * e + 2 * f + 1);
      d[2 * e + 2 * f + 1] += g * k;
      We(d, 2 * e + 2 * f + 1);
      d[2 * e + 2 * f + 2] += h * k;
      We(d, 2 * e + 2 * f + 2)
    }
  for (e = 0; e < c; e++) d[e] =
    d[2 * e + 1] << 16 | d[2 * e];
  for (e = c; e < 2 * c; e++) d[e] = 0;
  return new R(d, 0)
}

function We(a, b) {
  for (;
    (a[b] & 65535) != a[b];) a[b + 1] += a[b] >>> 16, a[b] &= 65535, b++
}

function Xe(a, b) {
  this.a = a;
  this.b = b
}

function Se(a, b) {
  if (U(b)) throw Error("division by zero");
  if (U(a)) return new Xe(Ne, Ne);
  if (-1 == a.b) return b = Se(S(a), b), new Xe(S(b.a), S(b.b));
  if (-1 == b.b) return b = Se(a, S(b)), new Xe(S(b.a), b.b);
  if (30 < a.a.length) {
    if (-1 == a.b || -1 == b.b) throw Error("slowDivide_ only works with positive integers.");
    for (var c = Pe, d = b; 0 >= Ve(d, a);) c = Ye(c, 1), d = Ye(d, 1);
    var e = Ze(c, 1),
      f = Ze(d, 1);
    d = Ze(d, 2);
    for (c = Ze(c, 2); !U(d);) {
      var h = f.add(d);
      0 >= Ve(h, a) && (e = e.add(c), f = h);
      d = Ze(d, 1);
      c = Ze(c, 1)
    }
    b = Te(a, Ue(e, b));
    return new Xe(e, b)
  }
  for (e = Ne; 0 <=
    Ve(a, b);) {
    c = Math.max(1, Math.floor(Re(a) / Re(b)));
    d = Math.ceil(Math.log(c) / Math.LN2);
    d = 48 >= d ? 1 : Math.pow(2, d - 48);
    f = Me(c);
    for (h = Ue(f, b); - 1 == h.b || 0 < Ve(h, a);) c -= d, f = Me(c), h = Ue(f, b);
    U(f) && (f = Pe);
    e = e.add(f);
    a = Te(a, h)
  }
  return new Xe(e, a)
}
n.and = function(a) {
  for (var b = Math.max(this.a.length, a.a.length), c = [], d = 0; d < b; d++) c[d] = T(this, d) & T(a, d);
  return new R(c, this.b & a.b)
};
n.or = function(a) {
  for (var b = Math.max(this.a.length, a.a.length), c = [], d = 0; d < b; d++) c[d] = T(this, d) | T(a, d);
  return new R(c, this.b | a.b)
};
n.xor = function(a) {
  for (var b = Math.max(this.a.length, a.a.length), c = [], d = 0; d < b; d++) c[d] = T(this, d) ^ T(a, d);
  return new R(c, this.b ^ a.b)
};

function Ye(a, b) {
  var c = b >> 5;
  b %= 32;
  for (var d = a.a.length + c + (0 < b ? 1 : 0), e = [], f = 0; f < d; f++) e[f] = 0 < b ? T(a, f - c) << b | T(a, f - c - 1) >>> 32 - b : T(a, f - c);
  return new R(e, a.b)
}

function Ze(a, b) {
  var c = b >> 5;
  b %= 32;
  for (var d = a.a.length - c, e = [], f = 0; f < d; f++) e[f] = 0 < b ? T(a, f + c) >>> b | T(a, f + c + 1) << 32 - b : T(a, f + c);
  return new R(e, a.b)
};
Te(Ye(Pe, 32), Pe);
Te(Ye(Pe, 128), Pe);

function $e(a) {
  this.j = this.o = this.g = "";
  this.B = null;
  this.l = this.v = "";
  this.a = !1;
  if (a instanceof $e) {
    this.a = a.a;
    af(this, a.g);
    this.o = a.o;
    this.j = a.j;
    bf(this, a.B);
    cf(this, a.v);
    var b = a.b;
    var c = new df;
    c.g = b.g;
    b.a && (c.a = new E(b.a), c.b = b.b);
    ef(this, c);
    this.l = a.l
  } else a && (b = String(a).match(xd)) ? (this.a = !1, af(this, b[1] || "", !0), this.o = ff(b[2] || ""), this.j = ff(b[3] || "", !0), bf(this, b[4]), cf(this, b[5] || "", !0), ef(this, b[6] || "", !0), this.l = ff(b[7] || "")) : (this.a = !1, this.b = new df(null, this.a))
}
$e.prototype.toString = function() {
  var a = [],
    b = this.g;
  b && a.push(gf(b, hf, !0), ":");
  var c = this.j;
  if (c || "file" == b) a.push("//"), (b = this.o) && a.push(gf(b, hf, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.B, null != c && a.push(":", String(c));
  if (c = this.v) this.j && "/" != c.charAt(0) && a.push("/"), a.push(gf(c, "/" == c.charAt(0) ? jf : kf, !0));
  (c = this.b.toString()) && a.push("?", c);
  (c = this.l) && a.push("#", gf(c, lf));
  return a.join("")
};

function af(a, b, c) {
  a.g = c ? ff(b, !0) : b;
  a.g && (a.g = a.g.replace(/:$/, ""));
  return a
}

function bf(a, b) {
  if (b) {
    b = Number(b);
    if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
    a.B = b
  } else a.B = null
}

function cf(a, b, c) {
  a.v = c ? ff(b, !0) : b;
  return a
}

function ef(a, b, c) {
  b instanceof df ? (a.b = b, mf(a.b, a.a)) : (c || (b = gf(b, nf)), a.b = new df(b, a.a))
}

function of (a, b, c) {
  a.b.set(b, c);
  return a
}

function ff(a, b) {
  return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
}

function gf(a, b, c) {
  return "string" === typeof a ? (a = encodeURI(a).replace(b, pf), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
}

function pf(a) {
  a = a.charCodeAt(0);
  return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var hf = /[#\/\?@]/g,
  kf = /[#\?:]/g,
  jf = /[#\?]/g,
  nf = /[#\?@]/g,
  lf = /#/g;

function df(a, b) {
  this.b = this.a = null;
  this.g = a || null;
  this.j = !!b
}

function V(a) {
  a.a || (a.a = new E, a.b = 0, a.g && yd(a.g, function(b, c) {
    a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
  }))
}
n = df.prototype;
n.add = function(a, b) {
  V(this);
  this.g = null;
  a = qf(this, a);
  var c = this.a.get(a);
  c || this.a.set(a, c = []);
  c.push(b);
  this.b = this.b + 1;
  return this
};
n.remove = function(a) {
  V(this);
  a = qf(this, a);
  return F(this.a.b, a) ? (this.g = null, this.b = this.b - this.a.get(a).length, this.a.remove(a)) : !1
};
n.clear = function() {
  this.a = this.g = null;
  this.b = 0
};

function rf(a, b) {
  V(a);
  b = qf(a, b);
  return F(a.a.b, b)
}
n.forEach = function(a, b) {
  V(this);
  this.a.forEach(function(c, d) {
    Ja(c, function(e) {
      a.call(b, e, d, this)
    }, this)
  }, this)
};
n.H = function() {
  V(this);
  for (var a = this.a.J(), b = this.a.H(), c = [], d = 0; d < b.length; d++)
    for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
  return c
};
n.J = function(a) {
  V(this);
  var b = [];
  if ("string" === typeof a) rf(this, a) && (b = Oa(b, this.a.get(qf(this, a))));
  else {
    a = this.a.J();
    for (var c = 0; c < a.length; c++) b = Oa(b, a[c])
  }
  return b
};
n.set = function(a, b) {
  V(this);
  this.g = null;
  a = qf(this, a);
  rf(this, a) && (this.b = this.b - this.a.get(a).length);
  this.a.set(a, [b]);
  this.b = this.b + 1;
  return this
};
n.get = function(a, b) {
  if (!a) return b;
  a = this.J(a);
  return 0 < a.length ? String(a[0]) : b
};
n.toString = function() {
  if (this.g) return this.g;
  if (!this.a) return "";
  for (var a = [], b = this.a.H(), c = 0; c < b.length; c++) {
    var d = b[c],
      e = encodeURIComponent(String(d));
    d = this.J(d);
    for (var f = 0; f < d.length; f++) {
      var h = e;
      "" !== d[f] && (h += "=" + encodeURIComponent(String(d[f])));
      a.push(h)
    }
  }
  return this.g = a.join("&")
};

function qf(a, b) {
  b = String(b);
  a.j && (b = b.toLowerCase());
  return b
}

function mf(a, b) {
  b && !a.j && (V(a), a.g = null, a.a.forEach(function(c, d) {
    var e = d.toLowerCase();
    d != e && (this.remove(d), this.remove(e), 0 < c.length && (this.g = null, this.a.set(qf(this, e), Pa(c)), this.b = this.b + c.length))
  }, a));
  a.j = b
};

function sf() {
  this.a = function() {
    var a = w.window;
    a.onbeforeunload = x;
    a.location.reload()
  }
};

function tf(a) {
  C.call(this, a)
}
t(tf, C);

function uf(a, b) {
  var c = Array.prototype.slice.call(arguments),
    d = c.shift();
  if ("undefined" == typeof d) throw Error("[goog.string.format] Template required");
  d.replace(/%([0\- \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(e, f, h, g, k, l, p, X) {
    if ("%" == l) return "%";
    var Oe = c.shift();
    if ("undefined" == typeof Oe) throw Error("[goog.string.format] Not enough arguments");
    arguments[0] = Oe;
    return vf[l].apply(null, arguments)
  })
}
var vf = {
  s: function(a, b, c) {
    return isNaN(c) || "" == c || a.length >= Number(c) ? a : a = -1 < b.indexOf("-", 0) ? a + lb(" ", Number(c) - a.length) : lb(" ", Number(c) - a.length) + a
  },
  f: function(a, b, c, d, e) {
    d = a.toString();
    isNaN(e) || "" == e || (d = parseFloat(a).toFixed(e));
    var f = 0 > Number(a) ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
    0 <= Number(a) && (d = f + d);
    if (isNaN(c) || d.length >= Number(c)) return d;
    d = isNaN(e) ? Math.abs(Number(a)).toString() : Math.abs(Number(a)).toFixed(e);
    a = Number(c) - d.length - f.length;
    return d = 0 <= b.indexOf("-", 0) ?
      f + d + lb(" ", a) : f + lb(0 <= b.indexOf("0", 0) ? "0" : " ", a) + d
  },
  d: function(a, b, c, d, e, f, h, g) {
    return vf.f(parseInt(a, 10), b, c, d, 0, f, h, g)
  }
};
vf.i = vf.d;
vf.u = vf.d;

function wf() {
  this.b = 0;
  this.a = []
}
n = wf.prototype;
n.add = function(a) {
  var b = this.a[this.b];
  this.a[this.b] = a;
  this.b = (this.b + 1) % 50;
  return b
};
n.get = function(a) {
  a = xf(this, a);
  return this.a[a]
};
n.set = function(a, b) {
  a = xf(this, a);
  this.a[a] = b
};
n.clear = function() {
  this.b = this.a.length = 0
};
n.J = function() {
  for (var a = this.a.length, b = [], c = this.a.length - this.a.length; c < a; c++) b.push(this.get(c));
  return b
};
n.H = function() {
  for (var a = [], b = this.a.length, c = 0; c < b; c++) a[c] = c;
  return a
};

function yf(a) {
  return 0 == a.a.length ? null : a.get(a.a.length - 1)
}

function xf(a, b) {
  if (b >= a.a.length) throw Error("Out of bounds exception");
  return 50 > a.a.length ? b : (a.b + Number(b)) % 50
};

function zf(a) {
  this.g = a;
  this.b = Math.floor(a / 50);
  this.a = new wf
}
zf.prototype.get = function(a) {
  return Af(this, a, function(b, c) {
    return b + c.count
  })
};

function Af(a, b, c) {
  b = b || Ba();
  Bf(a, b);
  var d = 0;
  b = a.b * (Math.floor(b / a.b) + 1) - a.g;
  for (var e = a.a.a.length - 1; 0 <= e; --e) {
    var f = a.a.get(e);
    if (f.a <= b) break;
    d = c(d, f)
  }
  return d
}

function Bf(a, b) {
  var c = yf(a.a);
  c && (c = c.a - a.b, b < c && (uf("Went backwards in time: now=%d, slotStart=%d.  Resetting state.", b, c), a.a.clear()))
}

function Cf(a) {
  this.a = a
}
Cf.prototype.count = 0;
Cf.prototype.min = Number.MAX_VALUE;
Cf.prototype.max = Number.MIN_VALUE;

function Df(a, b, c) {
  G.call(this);
  this.g = a;
  this.b = b;
  this.a = new zf(1E3 * c)
}
t(Df, G);

function Ef(a, b, c) {
  G.call(this);
  this.a = a;
  this.l = b || 0;
  this.b = c;
  this.g = A(this.ha, this)
}
B(Ef, G);
n = Ef.prototype;
n.L = 0;
n.D = function() {
  Ef.K.D.call(this);
  this.stop();
  delete this.a;
  delete this.b
};
n.start = function(a) {
  this.stop();
  this.L = wd(this.g, void 0 !== a ? a : this.l)
};
n.stop = function() {
  0 != this.L && w.clearTimeout(this.L);
  this.L = 0
};
n.ha = function() {
  this.L = 0;
  this.a && this.a.call(this.b)
};

function W(a) {
  G.call(this);
  this.b = a;
  this.a = {}
}
B(W, G);
var Ff = [];
W.prototype.listen = function(a, b, c, d) {
  y(b) || (b && (Ff[0] = b.toString()), b = Ff);
  for (var e = 0; e < b.length; e++) {
    var f = cd(a, b[e], c || this.handleEvent, d || !1, this.b || this);
    if (!f) break;
    this.a[f.key] = f
  }
  return this
};
W.prototype.removeAll = function() {
  Ea(this.a, function(a, b) {
    this.a.hasOwnProperty(b) && ld(a)
  }, this);
  this.a = {}
};
W.prototype.D = function() {
  W.K.D.call(this);
  this.removeAll()
};
W.prototype.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function Y() {
  this.l = [];
  this.j = this.a = !1;
  this.g = void 0;
  this.A = this.F = this.o = !1;
  this.B = 0;
  this.b = null;
  this.v = 0
}
Y.prototype.cancel = function(a) {
  if (this.a) this.g instanceof Y && this.g.cancel();
  else {
    if (this.b) {
      var b = this.b;
      delete this.b;
      a ? b.cancel(a) : (b.v--, 0 >= b.v && b.cancel())
    }
    this.A = !0;
    this.a || (a = new Gf(this), Hf(this), If(this, !1, a))
  }
};
Y.prototype.C = function(a, b) {
  this.o = !1;
  If(this, a, b)
};

function If(a, b, c) {
  a.a = !0;
  a.g = c;
  a.j = !b;
  Jf(a)
}

function Hf(a) {
  if (a.a) {
    if (!a.A) throw new Kf(a);
    a.A = !1
  }
}

function Lf(a, b, c) {
  return Mf(a, b, null, c)
}

function Nf(a, b, c) {
  Mf(a, b, function(d) {
    var e = b.call(this, d);
    if (void 0 === e) throw d;
    return e
  }, c)
}

function Mf(a, b, c, d) {
  a.l.push([b, c, d]);
  a.a && Jf(a);
  return a
}
Y.prototype.then = function(a, b, c) {
  var d, e, f = new D(function(h, g) {
    d = h;
    e = g
  });
  Mf(this, d, function(h) {
    h instanceof Gf ? f.cancel() : e(h)
  });
  return f.then(a, b, c)
};
Y.prototype.$goog_Thenable = !0;
Y.prototype.isError = function(a) {
  return a instanceof Error
};

function Of(a) {
  return Ka(a.l, function(b) {
    return z(b[1])
  })
}

function Jf(a) {
  if (a.B && a.a && Of(a)) {
    var b = a.B,
      c = Pf[b];
    c && (w.clearTimeout(c.a), delete Pf[b]);
    a.B = 0
  }
  a.b && (a.b.v--, delete a.b);
  b = a.g;
  for (var d = c = !1; a.l.length && !a.o;) {
    var e = a.l.shift(),
      f = e[0],
      h = e[1];
    e = e[2];
    if (f = a.j ? h : f) try {
      var g = f.call(e || null, b);
      void 0 !== g && (a.j = a.j && (g == b || a.isError(g)), a.g = b = g);
      if (Cb(b) || "function" === typeof w.Promise && b instanceof w.Promise) d = !0, a.o = !0
    } catch (k) {
      b = k, a.j = !0, Of(a) || (c = !0)
    }
  }
  a.g = b;
  d && (g = A(a.C, a, !0), d = A(a.C, a, !1), b instanceof Y ? (Mf(b, g, d), b.F = !0) : b.then(g, d));
  c && (b = new Qf(b),
    Pf[b.a] = b, a.B = b.a)
}

function Rf(a) {
  var b = new Y;
  Hf(b);
  If(b, !0, a);
  return b
}

function Kf() {
  C.call(this)
}
B(Kf, C);
Kf.prototype.message = "Deferred has already fired";
Kf.prototype.name = "AlreadyCalledError";

function Gf() {
  C.call(this)
}
B(Gf, C);
Gf.prototype.message = "Deferred was canceled";
Gf.prototype.name = "CanceledError";

function Qf(a) {
  this.a = w.setTimeout(A(this.g, this), 0);
  this.b = a
}
Qf.prototype.g = function() {
  delete Pf[this.a];
  throw this.b;
};
var Pf = {};

function Z(a, b) {
  G.call(this);
  this.a = a;
  this.g = new Ef(this.o, 3E4, this);
  this.F = new Df("errorsender", 1, 8);
  vc(this, Aa(wc, this.F));
  this.C = !1;
  this.l = null;
  this.A = new Set;
  this.v = new W(this);
  this.I = b || 10;
  this.v.listen(this.a, "complete", this.G);
  this.v.listen(this.a, "ready", this.o)
}
t(Z, G);
Z.prototype.send = function(a, b, c, d) {
  var e = Lf(Lf(Rf(this.b.length), function(f) {
    if (!(f >= this.I)) return f = {}, f.u = a, f.m = b, f.c = c, f.h = d, this.enqueue(f)
  }, this), this.o, this);
  Nf(e, function() {
    this.A.delete(e)
  }, this);
  this.A.add(e)
};
Z.prototype.o = function() {
  return 0 != this.g.L || this.a.a || this.C ? Rf() : Sf(this)
};

function Sf(a) {
  return Lf(Rf(void 0 !== a.b[0] ? a.b[0] : null), function(b) {
    if (!this.a.a && 0 == this.g.L && !this.C && b) {
      if (4E3 < b.u.length) return Tf(this);
      try {
        var c = this.F;
        if (!((c.a.get() + 1) / (c.a.g / 1E3) <= c.b)) throw new tf(mb("Query would cause ", c.g, " to exceed ", c.b, " qps."));
        var d = c.a,
          e = Ba();
        Bf(d, e);
        var f = yf(d.a);
        if (!f || e >= f.a) f = new Cf(d.b * (Math.floor(e / d.b) + 1)), d.a.add(f);
        f.count += 1;
        f.min = Math.min(1, f.min);
        f.max = Math.max(1, f.max);
        this.l = new Y;
        this.a.send(b.u, b.m, b.c, b.h);
        return this.l
      } catch (h) {
        if (h instanceof tf) this.C = !0;
        else throw h;
      }
    }
  }, a)
}
Z.prototype.G = function() {
  var a = Nd(this.a),
    b = this.l;
  Od(this.a) || 400 <= a && 500 >= a ? Lf(Tf(this), function() {
    Hf(b);
    If(b, !0, void 0)
  }) : (this.g.start(), Hf(b), If(b, !0, void 0))
};
Z.prototype.D = function() {
  xc(this.v, this.g, this.a);
  this.A.clear();
  G.prototype.D.call(this)
};

function Uf(a, b) {
  Z.call(this, a, b);
  this.b = []
}
t(Uf, Z);
Uf.prototype.enqueue = function(a) {
  this.b.push(a);
  return Rf()
};

function Tf(a) {
  a.b.shift();
  return Rf()
}
Uf.prototype.D = function() {
  delete this.b;
  Z.prototype.D.call(this)
};

function Vf() {
  for (var a in Array.prototype) return !1;
  return !0
};

function Wf(a, b) {
  this.b = a;
  this.g = b;
  this.constructor.Z || (this.constructor.Z = {});
  this.constructor.Z[this.toString()] = this
}
Wf.prototype.toString = function() {
  this.a || (this.a = this.b.a + ":" + this.g);
  return this.a
};

function Xf(a, b) {
  Wf.call(this, a, b)
}
B(Xf, Wf);

function Yf(a) {
  Zf.hasOwnProperty(a);
  this.a = a;
  Zf[a] = this
}
var Zf;
Zf = {};
new Yf("lib");
var $f = new Yf("fva");
new Xf($f, 1);

function ag() {
  this.a = Ba()
}
var bg = null;
ag.prototype.set = function(a) {
  this.a = a
};
ag.prototype.reset = function() {
  this.set(Ba())
};
ag.prototype.get = function() {
  return this.a
};

function cg(a) {
  this.j = a || "";
  bg || (bg = new ag);
  this.l = bg
}
cg.prototype.a = !0;
cg.prototype.b = !0;
cg.prototype.g = !1;

function dg(a) {
  a = new Date(a.g());
  return eg(a.getFullYear() - 2E3) + eg(a.getMonth() + 1) + eg(a.getDate()) + " " + eg(a.getHours()) + ":" + eg(a.getMinutes()) + ":" + eg(a.getSeconds()) + "." + eg(Math.floor(a.getMilliseconds() / 10))
}

function eg(a) {
  return 10 > a ? "0" + a : String(a)
}

function fg(a, b) {
  a = (a.g() - b) / 1E3;
  b = a.toFixed(3);
  var c = 0;
  if (1 > a) c = 2;
  else
    for (; 100 > a;) c++, a *= 10;
  for (; 0 < c--;) b = " " + b;
  return b
}

function gg(a) {
  cg.call(this, a)
}
B(gg, cg);

function hg(a, b) {
  var c = [];
  c.push(a.j, " ");
  a.b && c.push("[", dg(b), "] ");
  c.push("[", fg(b, a.l.get()), "s] ");
  c.push("[", b.b(), "] ");
  c.push(b.getMessage());
  a.g && (b = b.a()) && c.push("\n", b instanceof Error ? b.message : b.toString());
  a.a && c.push("\n");
  return c.join("")
};

function ig(a) {
  a = void 0 === a ? new jg : a;
  I.call(this);
  this.F = {};
  this.a = null;
  this.l = {};
  this.G = new W(this);
  this.O = a.b;
  this.N = new sf;
  var b = new Ed;
  this.v = new Uf(b, void 0);
  vc(this, Aa(wc, this.v));
  b = a.a ? a.a : Ce("docs-sup") + Ce("docs-jepp") + "/jserror";
  var c = Ce("jobset");
  c && (b = Dd(b, "jobset", c));
  if (kg) throw Error("ErrorReporter already installed.");
  kg = !0;
  c = A(this.oa, this);
  this.a = new Pd(b, c, void 0);
  this.a.A = {};
  b = A(this.qa, this);
  this.a.v = b;
  this.G.listen(this.a, "a", this.ia);
  this.C = a.g;
  this.o = !1;
  this.A = !0;
  this.g = !1;
  this.I = Ce("docs-jern")
}
t(ig, I);
n = ig.prototype;
n.log = function(a, b, c) {
  this.g = void 0 === c ? !1 : c;
  if (!this.a) throw a;
  this.a.g(a, lg("incident", b))
};

function mg(a, b, c) {
  return A(function(d) {
    a: {
      var e = arguments;
      if (this.a) {
        try {
          var f = b.apply(c, e);
          break a
        } catch (h) {
          f = h;
          this.g = !1;
          if (!this.a) throw f;
          this.a.g(f, lg("fatal", void 0))
        }
        f = void 0
      } else f = b.apply(c, e)
    }
    return f
  }, a)
}

function lg(a, b) {
  b = b ? Fa(b) : {};
  b.severity = a;
  return b
}
n.ia = function(a) {
  var b = a.b.severity;
  if ((b = "fatal" == b || "postmortem" == b) && !this.O) {
    var c = this.N;
    window.confirm("This error has been reported to Google and we'll look into it as soon as possible. Please reload this page to continue.") && c.a()
  }
  J(this, new ng(b ? "d" : "e", a.error, a.b))
};
n.oa = function(a, b) {
  var c = this.o;
  try {
    this.ba(a, b)
  } catch (d) {
    throw c && !this.C && (this.A = !1), this.o = !0, b.provideLogDataError = d.message, b.severity || (b.severity = "fatal"), d;
  }
};
n.ba = function(a, b) {
  for (var c in this.F) try {
    b[c] = this.F[c](a)
  } catch (e) {}
  Ha(b, this.l);
  c = b.severity || "fatal";
  this.I && (b.reportName = this.I + "_" + c);
  b.isArrayPrototypeIntact = Vf().toString();
  var d = a.stack || "";
  if (0 == d.trim().length || "Not available" == d) b["stacklessError-reportingStack"] = hc(ig.prototype.ba), [a.message].concat(ia(Object.keys(b)), ia(Object.values(b))).some(function(e) {
    return e.includes("<eye3")
  }) || (b.eye3Hint = "<eye3-stackless title='Stackless JS Error - " + a.name + "'/>");
  this.o && !this.C ? (this.A =
    this.g, "fatal" == c ? c = "postmortem" : "incident" == c && (c = "warningafterdeath")) : "fatal" == c && (this.o = !0);
  this.g = !1;
  b.severity = c
};
n.qa = function(a, b, c, d) {
  this.A && this.v.send(a, b, c, d)
};
n.D = function() {
  kg = !1;
  xc(this.G, this.a, this.v);
  I.prototype.D.call(this)
};
var kg = !1;

function ng(a, b) {
  H.call(this, a);
  this.error = b
}
t(ng, H);

function jg() {
  this.b = this.j = !1;
  this.a = void 0;
  this.g = !1
};

function og(a) {
  P(this, a)
}
B(og, O);

function pg(a) {
  P(this, a)
}
B(pg, O);
pg.prototype.getMessage = function() {
  return Q(this, 1)
};

function qg(a) {
  P(this, a)
}
B(qg, O);

function rg(a) {
  P(this, a)
}
B(rg, O);

function sg(a) {
  P(this, a)
}
B(sg, O);

function tg(a) {
  P(this, a)
}
B(tg, O);

function ug(a) {
  P(this, a)
}
B(ug, O);

function vg(a) {
  P(this, a)
}
B(vg, O);

function wg(a) {
  P(this, a)
}
B(wg, O);

function xg(a, b) {
  return Fe(a, 1, b)
};

function yg() {
  A(this.g, this);
  this.a = new gg;
  this.a.b = !1;
  this.a.g = !1;
  this.b = this.a.a = !1;
  this.j = {}
}

function zg(a) {
  1 != a.b && (pc || (pc = new kc), a.b = !0)
}
yg.prototype.g = function(a) {
  function b(f) {
    if (f) {
      if (f.value >= mc.value) return "error";
      if (f.value >= nc.value) return "warn";
      if (f.value >= oc.value) return "log"
    }
    return "debug"
  }
  if (!this.j[a.b()]) {
    var c = hg(this.a, a),
      d = Ag;
    if (d) {
      var e = b(a.j());
      Bg(d, e, c, a.a())
    }
  }
};
var Ag = w.console;

function Bg(a, b, c, d) {
  if (a[b]) a[b](c, d || "");
  else a.log(c, d || "")
};

function Cg() {
  G.call(this);
  this.a = this.b = this.o = null;
  this.l = !1;
  this.A = Nb();
  this.v = !1;
  this.G = new yg;
  zg(this.G);
  chrome.alarms.onAlarm.addListener(A(this.ka, this));
  chrome.runtime.onMessageExternal.addListener(A(this.la, this));
  this.F = new W(this);
  vc(this, Aa(wc, this.F));
  this.F.listen(w, "message", this.ma);
  this.g = 0;
  this.C = .01 >= 1 * Math.random();
  chrome.runtime.onConnectExternal.addListener(m());
  wd(this.pa, 252E5, this)
}
t(Cg, G);
n = Cg.prototype;
n.load = function() {
  var a = this;
  this.o = "docs.google.com";
  var b = dc({
    docsDomain: this.o
  });
  return Sb(b.then(function() {
    var c = cf(Dg(a), "/jserror").toString(),
      d = new jg;
    d.j = !1;
    d.b = !0;
    d.a = c;
    c = new ig(d);
    c.l.sessionTypeName = "offline-event-page";
    c.l.reportsNonFatalErrors = String(a.C);
    a.b = c;
    vc(a, Aa(wc, a.b));
    return mg(a.b, a.ja, a)()
  }), function(c) {
    gc(c)
  })
};

function Eg(a, b) {
  return cf(Dg(a), "/offline/extension/frame").toString() + "?ouid=" + (b ? encodeURIComponent(String(b)) : "")
}

function Fg(a, b, c) {
  return of( of (cf(Dg(a), "/offline/extension/report"), "v", c), "optin", b).toString()
}
n.pa = function() {
  chrome.alarms.create("open", {
    delayInMinutes: 1
  });
  w.close()
};

function Gg(a) {
  return new D(function(b) {
    chrome.alarms.get("heartbeat", function(c) {
      c || (chrome.alarms.create("heartbeat", {
        periodInMinutes: 5
      }), Hg(this, "heartbeat"));
      b()
    }.bind(this))
  }.bind(a))
}

function Ig() {
  return new D(function(a) {
    chrome.alarms.clear("heartbeat", function() {
      a()
    })
  })
}
n.ja = function() {
  var a = this;
  return bc().then(function(b) {
    var c = chrome.runtime.getManifest();
    c = c.version ? c.version : "unknown";
    a.b.l.extensionVersion = c;
    a.b.l.optInStatus = String(b);
    Jg(a, String(b), c);
    switch (b) {
      case "unknown":
      case "opted_in":
        Kg(a, null);
        break;
      case "opted_out":
        break;
      default:
        throw Error("Could not handle opt in status " + b);
    }
  })
};

function Jg(a, b, c) {
  a.C && (b = Fg(a, b, c), w.fetch(new Request(b, {
    method: "post",
    mode: "cors"
  })).then(m()).catch(function(d) {
    var e = a.b;
    d = gc(d);
    e.g = !1;
    e.a && e.a.g(d, lg("warning", void 0))
  }))
}

function Lg(a) {
  w.clearTimeout(a.g);
  a.a && (a.v && (a.A = Nb(), a.v = !1), a.l = !1, a.a.parentNode && a.a.parentNode.removeChild(a.a), a.a = null)
}

function Kg(a, b) {
  var c = Eg(a, b);
  Lg(a);
  a.a = ob("IFRAME");
  a.a.id = "extensionFrame";
  a.a.src = c;
  document.body.appendChild(a.a);
  a.l = !!b;
  a.g = wd(function() {
    Mg(a, Error("Timed out waiting for frame connection."));
    w.close()
  }, 3E4)
}
n.ma = function(a) {
  var b = a.b;
  b && b.data && b.ports && b.ports.length ? (a = new tg(b.data), Ng(this, a, 1 < b.ports.length ? b.ports[1] : void 0).then(function(c) {
    b.ports[0].postMessage(Ie(c))
  })) : Mg(this, Error("Dropped invalid event."), {
    event: String(a)
  })
};
n.la = function(a, b, c) {
  var d = new tg(a);
  Sb(Ng(this, d).then(function(e) {
    c(Ie(e))
  }.bind(this)), function(e) {
    if (e instanceof Error && "Attempting to use a disconnected port object" == e.message) Mg(this, Error("Failed to reply to request because listen port was disconnected."), {
      requestType: Q(d, 1)
    });
    else throw e;
  }.bind(this));
  return !0
};

function Ng(a, b, c) {
  return Sb(Hb().then(a.na.bind(a, b, c)), function(d) {
    d = d instanceof Error ? d : Error(d);
    var e = new wg,
      f = new pg;
    He(e, 5, f);
    Fe(f, 1, d.message);
    return e
  })
}
n.na = function(a, b) {
  var c = xg(new wg, Q(a, 1));
  switch (Q(a, 1)) {
    case 1:
      return dc({
        offlineOptedIn: !0
      }).then(function() {
        this.A.a(b);
        this.v = !0;
        w.clearTimeout(this.g);
        return c
      }.bind(this));
    case 2:
      return dc({
        offlineOptedIn: !0
      }).then(function() {
        this.a || Kg(this, null);
        return Gg(this)
      }.bind(this)).then(function() {
        return c
      });
    case 3:
      return (a = Ge(a, rg, 3)) && Q(a, 1) ? (a = Q(a, 1), Og(this, a), Hb(c)) : dc({
        offlineOptedIn: !1
      }).then(function() {
        return Ig()
      }.bind(this)).then(function() {
        Lg(this);
        return c
      }.bind(this));
    case 5:
      return Pg(Ge(a,
        sg, 5)).then(function(d) {
        He(c, 4, d);
        return c
      });
    case 4:
      return a = Ge(a, qg, 4), Qg(this, a).then(function(d) {
        He(c, 3, d);
        return c
      });
    default:
      throw Error("Dropped unknown message " + a);
  }
};

function Pg(a) {
  var b = Q(a, 1);
  return Kb().then(function(c) {
    var d = c[0],
      e = c[1];
    c = new vg;
    e = 0 <= Ia(e, b);
    Fe(c, 1, 0 <= Ia(d, b) || e);
    Fe(c, 2, e);
    return c
  })
}

function Og(a, b) {
  a.l ? Lg(a) : Kg(a, b)
}
n.ka = function(a) {
  Hg(this, a.name)
};

function Hg(a, b) {
  var c = new qg;
  c = Fe(c, 1, 0);
  var d = new og;
  b = Fe(d, 1, b);
  He(c, 2, b);
  Qg(a, c)
}

function Qg(a, b) {
  return a.A.b.then(A(function(c) {
    var d = new MessageChannel;
    return Qb(new D(function(e) {
      d.port1.onmessage = function(f) {
        e(new ug(f.data))
      };
      c.postMessage(Ie(b), [d.port2])
    }), function() {
      d.port1.close()
    })
  }, a))
}
n.D = function() {
  Lg(this);
  G.prototype.D.call(this)
};

function Mg(a, b, c) {
  c = void 0 === c ? {} : c;
  a.C && (a = a.b, a.g = !1, a.a && a.a.g(b, lg("warning", c)))
}

function Dg(a) {
  return af(new $e("//" + a.o), "https")
};
(new Cg).load();